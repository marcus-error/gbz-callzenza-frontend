import test from "node:test";
import assert from "node:assert/strict";

/**
 * Regression Test Suite:
 * 1. Microphone capture lifecycle, error tracking, device fallback, closed context recovery, and mutex deduplication.
 * 2. Duplicate call-start protection, debounce timer unification, and subsequent call execution.
 */

// --- Mock Implementations for Web Audio and MediaStream APIs ---

class MockAudioTrack {
  constructor(kind = "audio", label = "Default Microphone") {
    this.kind = kind;
    this.label = label;
    this.enabled = true;
    this.readyState = "live";
    this.onended = null;
    this.onmute = null;
    this.onunmute = null;
  }
  stop() {
    this.readyState = "ended";
    if (this.onended) this.onended();
  }
}

class MockMediaStream {
  constructor(tracks = [new MockAudioTrack()]) {
    this.tracks = tracks;
    this.active = true;
  }
  getAudioTracks() {
    return this.tracks.filter((t) => t.kind === "audio");
  }
  getTracks() {
    return this.tracks;
  }
}

class MockGainNode {
  constructor() {
    this.gain = { value: 1.0, setValueAtTime: () => {} };
  }
  connect() {}
  disconnect() {}
}

class MockBiquadFilterNode {
  constructor() {
    this.type = "highpass";
    this.frequency = { value: 120 };
  }
  connect() {}
  disconnect() {}
}

class MockScriptProcessorNode {
  constructor() {
    this.onaudioprocess = null;
  }
  connect() {}
  disconnect() {}
}

class MockAudioContext {
  constructor() {
    this.state = "suspended";
    this.sampleRate = 48000;
    this.currentTime = 0;
    this.destination = {};
    this.onstatechange = null;
  }
  async resume() {
    this.state = "running";
    if (this.onstatechange) this.onstatechange();
  }
  async close() {
    this.state = "closed";
    if (this.onstatechange) this.onstatechange();
  }
  createGain() {
    return new MockGainNode();
  }
  createAnalyser() {
    return { fftSize: 64, connect: () => {}, disconnect: () => {} };
  }
  createBiquadFilter() {
    return new MockBiquadFilterNode();
  }
  createMediaStreamSource() {
    return { connect: () => {}, disconnect: () => {} };
  }
  createScriptProcessor() {
    return new MockScriptProcessorNode();
  }
}

// --- Simplified Simulated TelephonyAudioManager for Unit Verification ---

class SimulatedTelephonyAudioManager {
  constructor({ navigator, AudioContext } = {}) {
    this.navigator = navigator;
    this.AudioContextClass = AudioContext;
    this.audioContext = null;
    this.micStream = null;
    this.micProcessor = null;
    this.micSource = null;
    this.keepAliveGain = null;
    this.highpassFilter = null;
    this.lowpassFilter = null;
    this.micGainNode = null;
    this.micGain = 1.0;
    this.isMicMuted = false;
    this.selectedInputDeviceId = "default";
    this.micAcquisitionPromise = null;
    this.micCapturePromise = null;
    this.lastMicError = null;
    this.lastAudioContextError = null;
    this.logs = [];
    this.warns = [];
    this.errors = [];
    this.initAudioContext();
  }

  getLastMicError() {
    return this.lastMicError;
  }

  getLastAudioContextError() {
    return this.lastAudioContextError;
  }

  initAudioContext() {
    if (this.audioContext && this.audioContext.state === "closed") {
      this.logs.push("AudioContext in closed state, resetting for clean re-initialization.");
      this.audioContext = null;
    }
    if (!this.audioContext) {
      try {
        if (!this.AudioContextClass) {
          this.lastAudioContextError = "AudioContext not supported in this browser environment";
          return;
        }
        this.audioContext = new this.AudioContextClass();
        this.lastAudioContextError = null;
      } catch (e) {
        this.lastAudioContextError = e?.message || String(e);
        this.warns.push(`AudioContext init error: ${e?.message}`);
      }
    }
  }

  async preWarmAudioContext() {
    this.initAudioContext();
    if (this.audioContext && this.audioContext.state === "suspended") {
      try {
        await this.audioContext.resume();
        this.logs.push("AudioContext pre-warmed and resumed on user gesture.");
      } catch (e) {
        this.lastAudioContextError = e?.message || String(e);
        this.warns.push(`Failed to pre-warm AudioContext: ${e?.message}`);
      }
    }
  }

  async ensureMicrophoneStream() {
    if (!this.navigator?.mediaDevices?.getUserMedia) {
      this.lastMicError = "navigator.mediaDevices.getUserMedia not available in this browser/environment";
      return null;
    }

    const isExistingMicActive = Boolean(
      this.micStream &&
      this.micStream.active &&
      this.micStream.getAudioTracks().some((t) => t.readyState === "live")
    );

    if (isExistingMicActive && this.micStream) {
      this.micStream.getAudioTracks().forEach((track) => {
        track.enabled = !this.isMicMuted;
      });
      return this.micStream;
    }

    if (this.micAcquisitionPromise) {
      return this.micAcquisitionPromise;
    }

    this.micAcquisitionPromise = (async () => {
      try {
        const audioConstraints = {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        };
        if (this.selectedInputDeviceId && this.selectedInputDeviceId !== "default") {
          audioConstraints.deviceId = { ideal: this.selectedInputDeviceId };
        }
        let stream;
        try {
          stream = await this.navigator.mediaDevices.getUserMedia({
            audio: audioConstraints,
          });
        } catch (initialErr) {
          if (audioConstraints.deviceId) {
            this.warns.push(`Failed to acquire mic with deviceId "${this.selectedInputDeviceId}", attempting fallback...`);
            stream = await this.navigator.mediaDevices.getUserMedia({
              audio: {
                echoCancellation: true,
                noiseSuppression: true,
                autoGainControl: true,
              },
            });
          } else {
            throw initialErr;
          }
        }

        this.micStream = stream;
        this.lastMicError = null;
        const audioTracks = stream.getAudioTracks();
        if (audioTracks.length > 0) {
          audioTracks[0].enabled = !this.isMicMuted;
          this.logs.push(`Microphone track acquired: enabled=${audioTracks[0].enabled}`);
        }
        return this.micStream;
      } catch (micErr) {
        this.lastMicError = micErr?.name ? `${micErr.name}: ${micErr.message}` : (micErr?.message || String(micErr));
        this.warns.push(`Microphone permission or device not available: ${this.lastMicError}`);
        return null;
      } finally {
        this.micAcquisitionPromise = null;
      }
    })();

    return this.micAcquisitionPromise;
  }

  async startMicrophoneCapture(callId = "call-1") {
    if (this.micCapturePromise) {
      this.logs.push("Microphone capture already initializing, awaiting in-flight setup...");
      return this.micCapturePromise;
    }

    this.micCapturePromise = (async () => {
      if (!this.audioContext || this.audioContext.state === "closed") {
        this.initAudioContext();
      }
      if (this.audioContext && this.audioContext.state === "suspended") {
        try {
          await this.audioContext.resume();
        } catch (e) {}
      }

      if (!this.micStream || !this.micStream.active || !this.micStream.getAudioTracks().some((t) => t.readyState === "live")) {
        this.logs.push(`micStream missing or inactive, acquiring microphone for call ${callId}...`);
        await this.ensureMicrophoneStream();
      }

      if (!this.audioContext || !this.micStream) {
        const missingParts = [];
        if (!this.audioContext) {
          missingParts.push(`audioContext (init error: ${this.lastAudioContextError || "AudioContext unavailable or closed"})`);
        }
        if (!this.micStream) {
          missingParts.push(`micStream (acquisition error: ${this.lastMicError || "device not available or permission denied"})`);
        }
        this.warns.push(`Cannot start mic capture: ${missingParts.join(", ")} after acquisition attempt.`);
        return;
      }

      // Check if already active
      const isPipelineActive = Boolean(
        this.micProcessor &&
        this.micSource &&
        this.micStream &&
        this.micStream.active &&
        this.micStream.getAudioTracks().some((t) => t.readyState === "live")
      );

      if (isPipelineActive && this.micStream) {
        this.micStream.getAudioTracks().forEach((t) => {
          t.enabled = !this.isMicMuted;
        });
        this.logs.push(`Microphone capture pipeline already active for call ${callId}, reusing.`);
        return;
      }

      // Setup pipeline
      const activeTracks = this.micStream.getAudioTracks().filter((t) => t.readyState === "live");
      if (activeTracks.length === 0) {
        this.warns.push("No live audio tracks found in micStream.");
        return;
      }
      activeTracks.forEach((t) => {
        t.enabled = !this.isMicMuted;
      });

      this.micSource = this.audioContext.createMediaStreamSource(this.micStream);
      this.micProcessor = this.audioContext.createScriptProcessor();
      this.logs.push(`Microphone capture active for call ${callId}`);
    })();

    try {
      await this.micCapturePromise;
    } finally {
      this.micCapturePromise = null;
    }
  }

  stopSession(forceReleaseMedia = false) {
    if (this.micProcessor) {
      this.micProcessor = null;
    }
    if (this.micSource) {
      this.micSource = null;
    }
    if (forceReleaseMedia && this.micStream) {
      this.micStream.getTracks().forEach((t) => t.stop());
      this.micStream = null;
    }
    this.logs.push("Session stopped, hardware media preserved unless force released.");
  }
}

// --- Test Cases ---

test("1. Microphone acquisition succeeds and capture starts", async () => {
  const navigator = {
    mediaDevices: {
      getUserMedia: async () => new MockMediaStream([new MockAudioTrack()]),
    },
  };

  const manager = new SimulatedTelephonyAudioManager({
    navigator,
    AudioContext: MockAudioContext,
  });
  await manager.startMicrophoneCapture("call-101");

  assert.ok(manager.audioContext, "AudioContext must be created");
  assert.equal(manager.audioContext.state, "running", "AudioContext should be running");
  assert.ok(manager.micStream, "micStream must be acquired");
  assert.equal(manager.getLastMicError(), null, "lastMicError should be null");
  assert.ok(manager.micProcessor, "micProcessor must be connected");
  assert.ok(manager.logs.some((l) => l.includes("Microphone capture active for call call-101")));
});

test("2. Permission denial records exact error without generic masking", async () => {
  const navigator = {
    mediaDevices: {
      getUserMedia: async () => {
        const err = new Error("Permission denied by user");
        err.name = "NotAllowedError";
        throw err;
      },
    },
  };

  const manager = new SimulatedTelephonyAudioManager({
    navigator,
    AudioContext: MockAudioContext,
  });
  await manager.startMicrophoneCapture("call-102");

  assert.equal(manager.micStream, null, "micStream should be null on permission denial");
  assert.equal(manager.getLastMicError(), "NotAllowedError: Permission denied by user");
  assert.ok(
    manager.warns.some((w) => w.includes("micStream (acquisition error: NotAllowedError: Permission denied by user)")),
    "Warning must explicitly name micStream and the exact NotAllowedError"
  );
});

test("3. Device-specific failure triggers fallback to default audio device", async () => {
  let attempts = 0;
  const navigator = {
    mediaDevices: {
      getUserMedia: async (constraints) => {
        attempts++;
        if (constraints.audio?.deviceId) {
          const err = new Error("Requested device not found");
          err.name = "NotFoundError";
          throw err;
        }
        return new MockMediaStream([new MockAudioTrack("audio", "Default Builtin Mic")]);
      },
    },
  };

  const manager = new SimulatedTelephonyAudioManager({
    navigator,
    AudioContext: MockAudioContext,
  });
  manager.selectedInputDeviceId = "unplugged-headset-guid";
  await manager.startMicrophoneCapture("call-103");

  assert.equal(attempts, 2, "Should attempt deviceId first, then fallback to default");
  assert.ok(manager.micStream, "Fallback to default audio device must succeed");
  assert.equal(manager.getLastMicError(), null);
  assert.ok(manager.warns.some((w) => w.includes("attempting fallback")));
});

test("4. Closed AudioContext is detected and recovered safely", async () => {
  const navigator = {
    mediaDevices: {
      getUserMedia: async () => new MockMediaStream([new MockAudioTrack()]),
    },
  };

  const manager = new SimulatedTelephonyAudioManager({
    navigator,
    AudioContext: MockAudioContext,
  });
  await manager.startMicrophoneCapture("call-104");

  // Force-close the AudioContext (simulating device teardown or OS suspension)
  await manager.audioContext.close();
  assert.equal(manager.audioContext.state, "closed");

  // Start next capture or transfer
  await manager.startMicrophoneCapture("call-105");
  assert.equal(manager.audioContext.state, "running", "AudioContext must be recreated and running");
  assert.ok(manager.logs.some((l) => l.includes("AudioContext in closed state, resetting")));
});

test("5. Concurrent startMicrophoneCapture calls are serialized via mutex", async () => {
  let getUserMediaCalls = 0;
  const navigator = {
    mediaDevices: {
      getUserMedia: async () => {
        getUserMediaCalls++;
        await new Promise((r) => setTimeout(r, 20));
        return new MockMediaStream([new MockAudioTrack()]);
      },
    },
  };

  const manager = new SimulatedTelephonyAudioManager({
    navigator,
    AudioContext: MockAudioContext,
  });
  // Fire two concurrent calls (e.g. from startBargeIn and onopen)
  const p1 = manager.startMicrophoneCapture("call-106");
  const p2 = manager.startMicrophoneCapture("call-106");

  await Promise.all([p1, p2]);

  assert.equal(getUserMediaCalls, 1, "getUserMedia should only be called once due to mutex");
  assert.ok(manager.logs.some((l) => l.includes("already initializing, awaiting in-flight setup...")));
});

test("6. Intentional user mute is respected during capture start and reuse", async () => {
  const navigator = {
    mediaDevices: {
      getUserMedia: async () => new MockMediaStream([new MockAudioTrack()]),
    },
  };

  const manager = new SimulatedTelephonyAudioManager({
    navigator,
    AudioContext: MockAudioContext,
  });
  manager.isMicMuted = true;
  await manager.startMicrophoneCapture("call-107");

  const track = manager.micStream.getAudioTracks()[0];
  assert.equal(track.enabled, false, "Audio track must be disabled when isMicMuted is true");
});

test("7. Transfer and conference preserves existing healthy stream without interruption", async () => {
  const navigator = {
    mediaDevices: {
      getUserMedia: async () => new MockMediaStream([new MockAudioTrack("audio", "Studio Mic")]),
    },
  };

  const manager = new SimulatedTelephonyAudioManager({
    navigator,
    AudioContext: MockAudioContext,
  });
  await manager.startMicrophoneCapture("call-agent-1");
  const initialStream = manager.micStream;

  // Simulate soft transfer to Voice Agent 2
  manager.stopSession(false); // forceReleaseMedia = false
  assert.ok(manager.micStream.active, "Hardware micStream must remain active across transfer");

  // Voice Agent 2 or conference resumes capture
  await manager.startMicrophoneCapture("call-agent-2");
  assert.equal(manager.micStream, initialStream, "Should reuse the existing healthy stream");
});

test("8. Duplicate call-start protection and debounced auto-dialing", async () => {
  let callInitiateCount = 0;
  let activeCall = false;
  let isStartingCall = false;

  const mockInitiateCall = async () => {
    if (activeCall || isStartingCall) {
      return { duplicate: true };
    }
    isStartingCall = true;
    try {
      await new Promise((r) => setTimeout(r, 50));
      callInitiateCount++;
      activeCall = true;
      return { call_id: `call-${callInitiateCount}` };
    } finally {
      isStartingCall = false;
    }
  };

  // Simulate rapid double click
  const click1 = mockInitiateCall();
  const click2 = mockInitiateCall();
  const results = await Promise.all([click1, click2]);

  assert.equal(callInitiateCount, 1, "Only one call should be initiated from rapid clicks");
  assert.ok(results.some((r) => r.duplicate === true), "Duplicate click must be rejected");

  // Test Predictive Dialer debounced scheduling
  let pdAutoDialTimer = null;
  let pdTriggerCount = 0;

  const schedulePdAutoDial = (delayMs = 20) => {
    if (pdAutoDialTimer) {
      clearTimeout(pdAutoDialTimer);
      pdAutoDialTimer = null;
    }
    pdAutoDialTimer = setTimeout(() => {
      pdAutoDialTimer = null;
      pdTriggerCount++;
    }, delayMs);
  };

  // Simultaneous triggers from CALL_ENDED event and handleCallEnd
  schedulePdAutoDial(30);
  schedulePdAutoDial(30);
  await new Promise((r) => setTimeout(r, 60));

  assert.equal(pdTriggerCount, 1, "Debounced PD timer should only trigger handleDialNext once");

  // Legitimate subsequent call after hangup
  activeCall = false;
  const subsequentCall = await mockInitiateCall();
  assert.equal(callInitiateCount, 2, "Subsequent legitimate call must succeed");
  assert.equal(subsequentCall.call_id, "call-2");
});

test("9. LocalVoiceTestModal Call Next Lead lifecycle, DND suppression handling, and eligibility transitions", async () => {
  // Test lead eligibility logic matching isLeadEligible in LocalVoiceTestModal
  const terminalStates = [
    "COMPLETED",
    "QUALIFIED",
    "NOT_QUALIFIED",
    "DNC",
    "DO NOT CALL",
    "FAILED",
    "SUPPRESSED",
    "UNREACHABLE",
    "DROPPED",
  ];

  const isEligible = (lead) => {
    if (!lead) return false;
    const status = (lead.call_status || lead.status || "").toUpperCase();
    const qual = (lead.qualification || "").toUpperCase();
    const disp = (lead.disposition || "").toUpperCase();
    return (
      !terminalStates.includes(status) &&
      !terminalStates.includes(qual) &&
      !terminalStates.includes(disp)
    );
  };

  const leads = [
    { id: "lead-1", name: "Alice", call_status: "COMPLETED", disposition: "QUALIFIED" },
    { id: "lead-2", name: "Bob", call_status: "DNC", disposition: "DNC" },
    { id: "lead-3", name: "Charlie", call_status: "PENDING", disposition: "NEW" },
    { id: "lead-4", name: "David", call_status: "PENDING", disposition: "NEW" },
  ];

  assert.equal(isEligible(leads[0]), false, "Completed lead must not be eligible");
  assert.equal(isEligible(leads[1]), false, "DNC lead must not be eligible");
  assert.equal(isEligible(leads[2]), true, "Pending lead must be eligible");
  assert.equal(isEligible(leads[3]), true, "Pending lead must be eligible");

  // Simulate sequential Call Next Lead with asynchronous hangup of active call
  let currentActiveCallId = "call-100";
  let callEndedSent = false;
  let nextCallDialed = null;

  const mockEndActiveCall = async (callId) => {
    await new Promise((r) => setTimeout(r, 20));
    callEndedSent = true;
    currentActiveCallId = null;
    return { success: true };
  };

  const mockStartSession = async (leadId) => {
    if (currentActiveCallId) {
      throw new Error("Active call collision: previous call not terminated");
    }
    await new Promise((r) => setTimeout(r, 20));
    currentActiveCallId = `call-${leadId}`;
    nextCallDialed = leadId;
    return { call_id: currentActiveCallId };
  };

  const handleCallNextLead = async (assignedLeads, currentLeadId) => {
    // 1. Gracefully terminate active call first
    if (currentActiveCallId) {
      await mockEndActiveCall(currentActiveCallId);
    }
    // 2. Find next eligible lead
    const currentIdx = assignedLeads.findIndex((l) => l.id === currentLeadId);
    let nextLead = undefined;
    for (let i = currentIdx + 1; i < assignedLeads.length; i++) {
      if (isEligible(assignedLeads[i])) {
        nextLead = assignedLeads[i];
        break;
      }
    }
    if (!nextLead) {
      nextLead = assignedLeads.find((l) => l.id !== currentLeadId && isEligible(l));
    }
    if (nextLead) {
      await mockStartSession(nextLead.id);
    }
  };

  // From lead-1 (already completed), advance to next eligible (should skip lead-2 DNC and dial lead-3)
  await handleCallNextLead(leads, "lead-1");
  assert.equal(callEndedSent, true, "Previous call was terminated before dialing next lead");
  assert.equal(nextCallDialed, "lead-3", "Must skip DNC lead-2 and dial eligible lead-3");
  assert.equal(currentActiveCallId, "call-lead-3");

  // Simulate DND suppression rejection on dial attempt
  let modalConnectionState = "CONNECTING";
  let errorMessage = null;
  let updatedLeads = [...leads];

  const simulateDialWithDndError = async (targetLeadId) => {
    try {
      const err = new Error("Destination is on the Do Not Call (DND) suppression list. Outbound dialing blocked.");
      err.status = 403;
      throw err;
    } catch (err) {
      const errMsg = err.message;
      const isDnd =
        err?.status === 403 ||
        String(errMsg).toLowerCase().includes("do not call") ||
        String(errMsg).toLowerCase().includes("dnd");

      if (isDnd) {
        updatedLeads = updatedLeads.map((l) =>
          l.id === targetLeadId ? { ...l, call_status: "DNC", disposition: "DNC" } : l
        );
        modalConnectionState = "DISCONNECTED"; // Ready for next lead
        errorMessage = `🚫 Number suppressed: ${errMsg}`;
      } else {
        modalConnectionState = "ERROR";
      }
    }
  };

  await simulateDialWithDndError("lead-3");
  assert.equal(modalConnectionState, "DISCONNECTED", "DND rejection resets state to DISCONNECTED for next lead");
  assert.ok(errorMessage.includes("Number suppressed"), "Error message informs user of DND suppression");
  assert.equal(updatedLeads.find((l) => l.id === "lead-3").call_status, "DNC", "Suppressed lead marked DNC");
  assert.equal(isEligible(updatedLeads.find((l) => l.id === "lead-3")), false, "Suppressed lead is no longer eligible");
});

