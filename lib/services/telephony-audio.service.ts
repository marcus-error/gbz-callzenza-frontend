/**
 * Telephony Audio Service for Real-Time Live Call Monitoring (Listen & Barge In)
 * Decodes G.711 mu-law 8kHz audio streams directly from Twilio Media Streams into Web Audio API.
 * Captures and encodes supervisor microphone into G.711 mu-law frames for Barge In.
 */

// G.711 mu-law decompression lookup table
const ULAW_DECODE_TABLE = new Float32Array(256);
for (let i = 0; i < 256; i++) {
  let mu = ~i;
  let sign = mu & 0x80 ? -1 : 1;
  let exponent = (mu >> 4) & 0x07;
  let mantissa = mu & 0x0f;
  let sample = sign * ((mantissa << (exponent + 3)) + (132 << exponent) - 132);
  ULAW_DECODE_TABLE[i] = sample / 32768.0;
}

// Continuous stateful resampler for Web Audio microphone capture to G.711 telephony rate (8,000 Hz)
export class ContinuousAudioResampler {
  private inRate: number;
  private outRate: number = 8000;
  private ratio: number;
  private phase: number = 0;
  private lastSample: number = 0;
  private hasLastSample: boolean = false;
  private buffer8k: Float32Array;
  private bufferLength: number = 0;

  constructor(inputSampleRate: number = 48000) {
    this.inRate = inputSampleRate || 48000;
    this.ratio = this.inRate / this.outRate;
    this.buffer8k = new Float32Array(4096);
  }

  public reset(inputSampleRate?: number) {
    if (inputSampleRate && inputSampleRate > 0) {
      this.inRate = inputSampleRate;
      this.ratio = this.inRate / this.outRate;
    }
    this.phase = 0;
    this.lastSample = 0;
    this.hasLastSample = false;
    this.bufferLength = 0;
  }

  public process(input: Float32Array): Uint8Array[] {
    if (!input || input.length === 0) return [];

    let pos = this.phase;
    const resampledTemp: number[] = [];
    const N = input.length;

    // Linearly interpolate across virtual time points:
    // When idx == -1, the point is between this.lastSample (from previous block) and input[0].
    // We only process points where s1 is available within this block (idx + 1 < N).
    // Points where s1 falls into subsequent block (idx + 1 >= N) are deferred to the next process() call.
    while (pos < N - 1) {
      const idx = Math.floor(pos);
      const frac = pos - idx;

      let s0: number;
      if (idx === -1) {
        s0 = this.hasLastSample ? this.lastSample : input[0];
      } else {
        s0 = input[idx];
      }

      const s1 = (idx + 1 === 0) ? input[0] : input[idx + 1];

      resampledTemp.push(s0 * (1 - frac) + s1 * frac);
      pos += this.ratio;
    }

    // Carry over phase relative to input.length for next chunk
    this.phase = pos - N;
    this.lastSample = input[N - 1];
    this.hasLastSample = true;

    if (this.bufferLength + resampledTemp.length > this.buffer8k.length) {
      const newBuf = new Float32Array(Math.max(this.buffer8k.length * 2, this.bufferLength + resampledTemp.length + 1024));
      newBuf.set(this.buffer8k.subarray(0, this.bufferLength));
      this.buffer8k = newBuf;
    }

    for (let i = 0; i < resampledTemp.length; i++) {
      this.buffer8k[this.bufferLength + i] = resampledTemp[i];
    }
    this.bufferLength += resampledTemp.length;

    const frames: Uint8Array[] = [];
    const FRAME_SIZE = 160; // 20ms @ 8000 Hz

    while (this.bufferLength >= FRAME_SIZE) {
      const ulawFrame = new Uint8Array(FRAME_SIZE);
      for (let i = 0; i < FRAME_SIZE; i++) {
        ulawFrame[i] = linearToMuLaw(this.buffer8k[i]);
      }
      frames.push(ulawFrame);

      const remaining = this.bufferLength - FRAME_SIZE;
      if (remaining > 0) {
        this.buffer8k.copyWithin(0, FRAME_SIZE, this.bufferLength);
      }
      this.bufferLength = remaining;
    }

    return frames;
  }
}

// Resample input audio buffer to 8000 Hz for telephony codec (stateless fallback)
function resampleTo8k(input: Float32Array, inputSampleRate: number): Float32Array {
  if (inputSampleRate === 8000 || !input || input.length === 0) return input;
  const ratio = inputSampleRate / 8000;
  const newLength = Math.round(input.length / ratio);
  const result = new Float32Array(newLength);
  for (let i = 0; i < newLength; i++) {
    const originPos = i * ratio;
    const index = Math.floor(originPos);
    const frac = originPos - index;
    const nextIndex = Math.min(index + 1, input.length - 1);
    result[i] = input[index] * (1 - frac) + input[nextIndex] * frac;
  }
  return result;
}

// G.711 mu-law linear-to-ulaw compression (Standard ITU-T G.711, clean linear mapping)
function linearToMuLaw(sample: number): number {
  const MAX = 32767;
  const BIAS = 132;
  const pcm = Math.max(-1, Math.min(1, sample));
  let intSample = Math.floor(pcm * MAX);
  const sign = (intSample < 0) ? 0x80 : 0;
  if (sign) intSample = -intSample;
  if (intSample > MAX) intSample = MAX;
  intSample += BIAS;

  let exponent = 7;
  for (let expMask = 0x4000; (intSample & expMask) === 0 && exponent > 0; expMask >>= 1) {
    exponent--;
  }
  const mantissa = (intSample >> (exponent + 3)) & 0x0f;
  return ~(sign | (exponent << 4) | mantissa) & 0xff;
}

import { getWebSocketHost } from "@/lib/hooks/useWebSocketSync";
import { useAuthStore } from "@/lib/store";

export function sanitizeWsUrl(url: string): string {
  try {
    const parsed = new URL(url);
    return `${parsed.protocol}//${parsed.host}${parsed.pathname}`;
  } catch (_) {
    return url.split("?")[0] || "";
  }
}

export function getWsReadyStateName(state?: number): string {
  if (typeof WebSocket === "undefined" || state === undefined) {
    return `UNKNOWN (${state})`;
  }
  switch (state) {
    case WebSocket.CONNECTING: return "CONNECTING (0)";
    case WebSocket.OPEN: return "OPEN (1)";
    case WebSocket.CLOSING: return "CLOSING (2)";
    case WebSocket.CLOSED: return "CLOSED (3)";
    default: return `UNKNOWN (${state})`;
  }
}

function getWsBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_WS_URL) {
    return process.env.NEXT_PUBLIC_WS_URL;
  }
  if (typeof window !== "undefined") {
    const proto = window.location.protocol === "https:" ? "wss:" : "ws:";
    const portNum = parseInt(window.location.port, 10);
    const isLocalHost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

    let backendPort = "8001";
    if (process.env.NEXT_PUBLIC_API_URL && process.env.NEXT_PUBLIC_API_URL.startsWith("http")) {
      try {
        const parsed = new URL(process.env.NEXT_PUBLIC_API_URL, window.location.href);
        if (parsed.port) {
          backendPort = parsed.port;
        }
      } catch (_) {}
    }

    // When frontend is on dev port 3000-3010, connect to backend FastAPI port
    if (portNum >= 3000 && portNum <= 3010) {
      return `${proto}//${window.location.hostname}:${backendPort}`;
    }

    if (process.env.NEXT_PUBLIC_API_URL && process.env.NEXT_PUBLIC_API_URL.startsWith("http")) {
      try {
        const parsed = new URL(process.env.NEXT_PUBLIC_API_URL, window.location.href);
        if ((parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1") && !isLocalHost) {
          return `${proto}//${window.location.host}`;
        }
      } catch (_) {}
      return process.env.NEXT_PUBLIC_API_URL.replace(/^http/, "ws");
    }

    return `${proto}//${window.location.host}`;
  }

  try {
    return getWebSocketHost();
  } catch (_) {
    return "ws://127.0.0.1:8001";
  }
}

export function getStoredAuthToken(): string {
  if (typeof window === "undefined") return "";
  try {
    const storeToken = useAuthStore?.getState?.()?.token;
    if (storeToken) return storeToken;
  } catch (_) {}
  try {
    const s = sessionStorage.getItem("GBZ-auth") || localStorage.getItem("GBZ-auth");
    if (s) {
      const p = JSON.parse(s);
      if (p?.state?.token) return p.state.token;
    }
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith("GBZ-auth-")) {
        const val = localStorage.getItem(k);
        if (val) {
          const p = JSON.parse(val);
          if (p?.state?.token) return p.state.token;
        }
      }
    }
  } catch (_) {}
  return localStorage.getItem("token") || "";
}

export type TelephonyAudioState = "IDLE" | "CONNECTING" | "LISTENING" | "BARGED_IN" | "DISCONNECTED" | "ERROR";

export class TelephonyAudioManager {
  private audioContext: AudioContext | null = null;
  private gainNode: GainNode | null = null;
  private analyserNode: AnalyserNode | null = null;
  private socket: WebSocket | null = null;
  private micStream: MediaStream | null = null;
  private micProcessor: ScriptProcessorNode | null = null;
  private micSource: MediaStreamAudioSourceNode | null = null;
  private highpassFilter: BiquadFilterNode | null = null;
  private lowpassFilter: BiquadFilterNode | null = null;
  private micGainNode: GainNode | null = null;
  private micGain: number = 1.0; // Clean unity digital pre-amp for telephony audio
  private keepAliveGain: GainNode | null = null;
  private currentMode: "LISTEN" | "BARGE" | null = null;
  private currentCallId: string | null = null;
  private isBargeStarting: boolean = false;
  private micPacketCount: number = 0;
  private nextPlayTime: number = 0;
  private isMuted: boolean = false;
  private isMicMuted: boolean = false;
  private volume: number = 1.0;
  private selectedOutputDeviceId: string = "default";
  private selectedInputDeviceId: string = "default";
  private mediaStreamDest: MediaStreamAudioDestinationNode | null = null;
  private headsetAudioEl: HTMLAudioElement | null = null;
  private activeSocketSessionId: number = 0;
  private isExplicitDisconnect: boolean = false;
  private reconnectAttempts: Record<string, number> = {};
  private resampler: ContinuousAudioResampler | null = null;
  private rxPacketCount: number = 0;
  private lastPreserveLogTime: number = 0;
  private connectionWatchdogTimer: any = null;
  private micAcquisitionPromise: Promise<MediaStream | null> | null = null;
  private micCapturePromise: Promise<void> | null = null;
  private lastMicError: string | null = null;
  private lastAudioContextError: string | null = null;
  private isAutoRecoveringMic: boolean = false;

  public onStateChange?: (state: TelephonyAudioState, message?: string) => void;
  public onAudioLevel?: (level: number) => void;
  public onCallEnded?: () => void;
  public onMicStateChange?: (state: "active" | "muted" | "denied" | "unsupported" | "inactive", error?: string | null) => void;

  constructor() {
    this.initAudioContext();
    if (typeof window !== "undefined") {
      try {
        const savedGain = localStorage.getItem("GBZ_mic_gain");
        if (savedGain) {
          const parsed = parseFloat(savedGain);
          if (!isNaN(parsed) && parsed >= 0.5 && parsed <= 3.0 && parsed !== 2.4) {
            this.micGain = parsed;
          }
        }
      } catch (_) {}

      const unlockAudio = () => {
        if (this.audioContext && this.audioContext.state === "suspended") {
          this.audioContext.resume().then(() => {
            console.log("[TelephonyAudio] AudioContext unlocked via user interaction.");
          }).catch(() => {});
        }
      };
      window.addEventListener("click", unlockAudio, { passive: true });
      window.addEventListener("keydown", unlockAudio, { passive: true });
      window.addEventListener("touchstart", unlockAudio, { passive: true });
      window.addEventListener("pointerdown", unlockAudio, { passive: true });

      if (navigator?.mediaDevices?.addEventListener) {
        navigator.mediaDevices.addEventListener("devicechange", () => {
          this.autoDetectHeadsetDevices().catch(() => {});
        });
      }
    }
  }

  public setMicGain(gain: number): void {
    this.micGain = Math.max(0.5, Math.min(5.0, gain));
    if (this.micGainNode && this.audioContext) {
      try {
        this.micGainNode.gain.setValueAtTime(this.micGain, this.audioContext.currentTime);
      } catch (_) {}
    }
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("GBZ_mic_gain", this.micGain.toString());
      } catch (_) {}
    }
    console.log(`[TelephonyAudio] Microphone gain updated to ${this.micGain}x`);
  }

  public getMicGain(): number {
    return this.micGain;
  }

  public async setAudioOutputDevice(deviceId: string): Promise<void> {
    this.selectedOutputDeviceId = deviceId || "default";
    if (typeof window === "undefined") return;

    let audioCtxRouted = false;

    // 1. Direct Web Audio API AudioContext setSinkId (Chrome 110+, Edge)
    if (this.audioContext && typeof (this.audioContext as any).setSinkId === "function") {
      try {
        await (this.audioContext as any).setSinkId(this.selectedOutputDeviceId);
        console.log("[TelephonyAudio] AudioContext.setSinkId success:", this.selectedOutputDeviceId);
        audioCtxRouted = true;
        // Since AudioContext directly outputs to the chosen device, keep HTMLAudioElement muted to prevent dual-playing comb filter
        if (this.headsetAudioEl) {
          this.headsetAudioEl.pause();
          this.headsetAudioEl.muted = true;
        }
      } catch (err) {
        console.warn("[TelephonyAudio] AudioContext.setSinkId failed, using fallback:", err);
      }
    }

    // 2. HTMLAudioElement setSinkId fallback ONLY if AudioContext.setSinkId failed
    if (!audioCtxRouted && this.headsetAudioEl && typeof (this.headsetAudioEl as any).setSinkId === "function") {
      try {
        await (this.headsetAudioEl as any).setSinkId(this.selectedOutputDeviceId);
        this.headsetAudioEl.muted = false;
        if (this.headsetAudioEl.paused && this.mediaStreamDest) {
          this.headsetAudioEl.play().catch(() => {});
        }
        console.log("[TelephonyAudio] Headset AudioElement setSinkId success:", this.selectedOutputDeviceId);
      } catch (err) {
        console.warn("[TelephonyAudio] Headset AudioElement setSinkId error:", err);
      }
    }
  }

  public setAudioInputDevice(deviceId: string) {
    this.selectedInputDeviceId = deviceId || "default";
  }

  public async autoDetectHeadsetDevices(): Promise<void> {
    if (typeof window === "undefined" || !navigator?.mediaDevices?.enumerateDevices) return;

    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const isHeadset = (label: string) => {
        const l = (label || "").toLowerCase();
        return (
          l.includes("headphone") ||
          l.includes("headset") ||
          l.includes("earphone") ||
          l.includes("buds") ||
          l.includes("airpods") ||
          l.includes("bluetooth") ||
          l.includes("wireless") ||
          l.includes("hands-free") ||
          l.includes("usb audio") ||
          l.includes("realtek usb") ||
          l.includes("jabra") ||
          l.includes("poly") ||
          l.includes("plantronics") ||
          l.includes("epos") ||
          l.includes("sennheiser") ||
          l.includes("logitech")
        );
      };

      // Auto-select 3rd party headset output
      const foundOutput = devices.find(
        (d) => d.kind === "audiooutput" && d.label && isHeadset(d.label)
      );
      if (foundOutput && foundOutput.deviceId) {
        console.log("[TelephonyAudio] Auto-routing audio output to 3rd party headset:", foundOutput.label);
        await this.setAudioOutputDevice(foundOutput.deviceId);
      }

      // Do NOT auto-hijack input away from laptop mic unless explicitly selected
    } catch (err) {
      console.warn("[TelephonyAudio] autoDetectHeadsetDevices error:", err);
    }
  }

  public getLastMicError(): string | null {
    return this.lastMicError;
  }

  public getLastAudioContextError(): string | null {
    return this.lastAudioContextError;
  }

  public isMicrophoneCapturing(): boolean {
    return Boolean(
      this.micStream &&
      this.micStream.active &&
      this.micStream.getAudioTracks().some((t) => t.readyState === "live" && t.enabled) &&
      this.micProcessor &&
      !this.isMicMuted
    );
  }

  public getMicrophoneState(): "active" | "muted" | "denied" | "unsupported" | "inactive" {
    if (this.lastMicError) {
      const err = this.lastMicError.toLowerCase();
      if (err.includes("notallowederror") || err.includes("permission denied") || err.includes("denied")) {
        return "denied";
      }
      return "inactive";
    }
    if (this.isMicMuted) {
      return "muted";
    }
    if (this.isMicrophoneCapturing()) {
      return "active";
    }
    return "inactive";
  }

  public notifyMicState(): void {
    const state = this.getMicrophoneState();
    this.onMicStateChange?.(state, this.lastMicError);
  }

  /**
   * Pre-warms the AudioContext on an explicit user gesture (e.g. Call button click)
   * to guarantee the Web Audio API transitions out of "suspended" state before call connection.
   */
  public async preWarmAudioContext(): Promise<void> {
    this.initAudioContext();
    if (this.audioContext && this.audioContext.state === "suspended") {
      try {
        await this.audioContext.resume();
        console.log("[TelephonyAudio] AudioContext pre-warmed and resumed on user gesture.");
      } catch (e: any) {
        this.lastAudioContextError = e?.message || String(e);
        console.warn("[TelephonyAudio] Failed to pre-warm AudioContext:", e);
      }
    }
  }

  public async ensureMicrophoneStream(): Promise<MediaStream | null> {
    if (typeof window === "undefined" || !navigator?.mediaDevices?.getUserMedia) {
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

    // Deduplicate concurrent in-flight microphone acquisition requests
    if (this.micAcquisitionPromise) {
      return this.micAcquisitionPromise;
    }

    this.micAcquisitionPromise = (async () => {
      try {
        const audioConstraints: MediaTrackConstraints = {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        };
        if (this.selectedInputDeviceId && this.selectedInputDeviceId !== "default") {
          audioConstraints.deviceId = { ideal: this.selectedInputDeviceId };
        }
        let stream: MediaStream;
        try {
          stream = await navigator.mediaDevices.getUserMedia({
            audio: audioConstraints,
          });
        } catch (initialErr: any) {
          // If specific deviceId failed (e.g. device disconnected, OverconstrainedError, NotFoundError), fallback to default audio
          if (audioConstraints.deviceId) {
            console.warn(`[TelephonyAudio] Failed to acquire mic with deviceId "${this.selectedInputDeviceId}", attempting fallback to default audio device...`, initialErr);
            stream = await navigator.mediaDevices.getUserMedia({
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
          const track = audioTracks[0];
          track.enabled = !this.isMicMuted;
          console.log(`[TelephonyAudio] Microphone track acquired: label="${track.label}" enabled=${track.enabled} readyState=${track.readyState}`);

          // Attach lifecycle listeners for automatic recovery on unexpected device disconnect
          track.onended = () => {
            console.warn(`[TelephonyAudio] Microphone track ended unexpectedly (label="${track.label}").`);
            this.handleMicTrackEnded();
          };
          track.onmute = () => {
            console.log(`[TelephonyAudio] Hardware/OS mic mute event detected on track "${track.label}".`);
          };
          track.onunmute = () => {
            console.log(`[TelephonyAudio] Hardware/OS mic unmute event detected on track "${track.label}".`);
          };
        }
        this.notifyMicState();
        return this.micStream;
      } catch (micErr: any) {
        this.lastMicError = micErr?.name ? `${micErr.name}: ${micErr.message}` : (micErr?.message || String(micErr));
        console.warn("[TelephonyAudio] Microphone permission or device not available:", micErr);
        this.notifyMicState();
        return null;
      } finally {
        this.micAcquisitionPromise = null;
      }
    })();

    return this.micAcquisitionPromise;
  }

  private async handleMicTrackEnded(): Promise<void> {
    if (this.isAutoRecoveringMic || !this.currentCallId || this.currentMode !== "BARGE") {
      return;
    }
    this.isAutoRecoveringMic = true;
    console.log("[TelephonyAudio] Attempting automatic microphone recovery for active call:", this.currentCallId);
    try {
      this.micStream = null;
      this.stopMicrophoneCapturePipeline();
      const newStream = await this.ensureMicrophoneStream();
      if (newStream && this.currentCallId && this.currentMode === "BARGE") {
        await this.startMicrophoneCapture(this.currentCallId);
        console.log("[TelephonyAudio] Automatic microphone recovery succeeded.");
      }
    } catch (recErr) {
      console.warn("[TelephonyAudio] Automatic microphone recovery error:", recErr);
    } finally {
      this.isAutoRecoveringMic = false;
    }
  }

  private initAudioContext() {
    if (typeof window !== "undefined") {
      // If previous AudioContext is closed, it cannot be resumed per Web Audio spec. Recreate it.
      if (this.audioContext && this.audioContext.state === "closed") {
        console.log("[TelephonyAudio] AudioContext in closed state, resetting for clean re-initialization.");
        this.audioContext = null;
        this.gainNode = null;
        this.analyserNode = null;
        this.mediaStreamDest = null;
      }

      if (!this.audioContext) {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioContextClass) {
          try {
            this.audioContext = new AudioContextClass();
            this.lastAudioContextError = null;
            this.audioContext.onstatechange = () => {
              if (this.audioContext && this.audioContext.state === "suspended") {
                if (this.currentMode === "BARGE" || this.currentMode === "LISTEN") {
                  console.log("[TelephonyAudio] AudioContext auto-resuming from suspended state...");
                  this.audioContext.resume().catch((e) => console.warn("[TelephonyAudio] AudioContext auto-resume error:", e));
                }
              }
            };
            this.gainNode = this.audioContext.createGain();
            this.gainNode.gain.value = Math.max(1.2, this.volume * 1.25);
            this.analyserNode = this.audioContext.createAnalyser();
            this.analyserNode.fftSize = 64;

            this.gainNode.connect(this.analyserNode);
            this.analyserNode.connect(this.audioContext.destination);

            // Create universal HTMLAudioElement stream bridge for headset setSinkId routing
            try {
              if (typeof this.audioContext.createMediaStreamDestination === "function") {
                this.mediaStreamDest = this.audioContext.createMediaStreamDestination();
                this.analyserNode.connect(this.mediaStreamDest);

                if (!this.headsetAudioEl) {
                  this.headsetAudioEl = new Audio();
                  this.headsetAudioEl.autoplay = true;
                  (this.headsetAudioEl as any).playsInline = true;
                  this.headsetAudioEl.muted = true; // Muted by default to prevent double-output echo
                  this.headsetAudioEl.srcObject = this.mediaStreamDest.stream;
                }
              }
            } catch (e) {
              console.warn("[TelephonyAudio] MediaStreamDestination fallback notice:", e);
            }

            // Initial auto-detection of any attached 3rd-party headset
            this.autoDetectHeadsetDevices().catch(() => {});
          } catch (e: any) {
            this.lastAudioContextError = e?.message || String(e);
            console.warn("[TelephonyAudio] AudioContext init error:", e);
          }
        } else {
          this.lastAudioContextError = "AudioContext not supported in this browser environment";
          console.warn("[TelephonyAudio] AudioContext not supported in this browser environment");
        }
      }
    }
  }

  public async startListen(callId: string, token?: string): Promise<void> {
    if (!callId || callId === "none" || callId === "undefined" || callId === "null") {
      console.warn(`[TelephonyAudio] startListen skipped: invalid callId "${callId}"`);
      return;
    }
    this.stopSession();
    this.currentMode = "LISTEN";
    this.currentCallId = callId;
    this.isExplicitDisconnect = false;
    const currentSessionId = ++this.activeSocketSessionId;
    this.onStateChange?.("CONNECTING", "Connecting to live call audio...");

    this.initAudioContext();
    if (this.audioContext && this.audioContext.state === "suspended") {
      try {
        await this.audioContext.resume();
      } catch (e) {
        console.warn("[TelephonyAudio] AudioContext resume failed:", e);
      }
    }

    const effectiveToken = token || getStoredAuthToken();
    const wsBase = getWsBaseUrl();
    const wsUrl = `${wsBase}/api/voice/barge/stream/browser/listen/${encodeURIComponent(callId)}?token=${encodeURIComponent(effectiveToken)}`;

    try {
      this.socket = new WebSocket(wsUrl);
    } catch (err: any) {
      console.warn("[TelephonyAudio] Listen WebSocket instantiation failed:", err);
      this.onStateChange?.("ERROR", "Failed to connect to audio stream.");
      return;
    }

    const activeSock = this.socket;
    let hasReportedError = false;

    activeSock.onopen = () => {
      if (this.activeSocketSessionId !== currentSessionId || this.socket !== activeSock) return;
      this.reconnectAttempts[callId] = 0;
      this.onStateChange?.("LISTENING", "Listening to live call.");
    };

    activeSock.onmessage = (event) => {
      if (this.activeSocketSessionId !== currentSessionId || this.socket !== activeSock) return;
      this.handleIncomingAudio(event.data);
    };

    activeSock.onerror = (err: Event) => {
      if (this.activeSocketSessionId !== currentSessionId || this.socket !== activeSock) return;
      const safeEndpoint = sanitizeWsUrl(wsUrl);
      const readyStateName = getWsReadyStateName(activeSock.readyState);
      const safeCallId = callId ? `${callId.slice(0, 8)}...` : "none";

      const diagnosticMsg = activeSock.readyState === WebSocket.CLOSED
        ? "Handshake rejected or closed by backend (call inactive, unauthorized, or session terminated)"
        : activeSock.readyState === WebSocket.CONNECTING
        ? "Failed during connection handshake (port/network/URL verification needed)"
        : "WebSocket encountered runtime stream error";

      console.warn("[TelephonyAudio] Listen WebSocket notice:", {
        callId: safeCallId,
        endpoint: safeEndpoint,
        readyState: readyStateName,
        diagnostic: diagnosticMsg,
        eventType: err?.type || "error",
        isActiveSocket: true,
        sessionId: currentSessionId,
      });

      hasReportedError = true;
      this.onStateChange?.("ERROR", "Failed to connect to audio stream.");
    };

    activeSock.onclose = (event: CloseEvent) => {
      if (this.activeSocketSessionId !== currentSessionId || this.socket !== activeSock) {
        console.log(`[TelephonyAudio] Stale Listen WebSocket #${currentSessionId} closed silently, ignoring.`);
        return;
      }

      const safeEndpoint = sanitizeWsUrl(wsUrl);
      const safeCallId = callId ? `${callId.slice(0, 8)}...` : "none";

      let closeExplanation = "Session closed normally";
      if (event.code === 1008) {
        closeExplanation = "Policy violation: unauthorized role, invalid token, or call not active";
      } else if (event.code === 1006) {
        closeExplanation = "Abnormal closure: handshake rejected (e.g. HTTP 403) or connection dropped";
      } else if (event.code === 1000) {
        closeExplanation = event.reason || "Call stream ended normally";
      }

      console.log("[TelephonyAudio] Listen WebSocket Closed:", {
        callId: safeCallId,
        endpoint: safeEndpoint,
        code: event.code,
        reason: event.reason || "(no reason provided)",
        explanation: closeExplanation,
        wasClean: event.wasClean,
        isActiveSocket: true,
        sessionId: currentSessionId,
      });

      const isCallActiveForReconnect = !this.isExplicitDisconnect && (this.currentCallId === callId);
      this.socket = null;

      if (event.code === 1008) {
        this.currentCallId = null;
        if (!hasReportedError) {
          this.onStateChange?.("ERROR", "Permission denied or call not active for listen stream.");
        }
      } else if (event.code === 1000) {
        this.currentCallId = null;
        this.onStateChange?.("DISCONNECTED", "Listen session closed.");
      } else {
        const attempts = this.reconnectAttempts[callId] || 0;
        if (isCallActiveForReconnect && attempts < 1) {
          this.reconnectAttempts[callId] = attempts + 1;
          console.log(`[TelephonyAudio] Attempting safe reconnection for active listen call ${callId} (attempt 1/1)...`);
          setTimeout(() => {
            if (this.currentCallId === callId && !this.socket) {
              this.startListen(callId, token).catch(() => {});
            }
          }, 1500);
          return;
        }

        this.currentCallId = null;
        if (!hasReportedError) {
          this.onStateChange?.("DISCONNECTED", "Listen session closed.");
        }
      }
    };
  }

  public async startBargeIn(callId: string, token?: string): Promise<void> {
    if (!callId || callId === "none" || callId === "undefined" || callId === "null") {
      console.warn(`[TelephonyAudio] startBargeIn skipped: invalid callId "${callId}"`);
      return;
    }

    // 1. Prevent redundant teardown if already connected or connecting for this exact call in BARGE mode
    if (
      this.currentMode === "BARGE" &&
      this.currentCallId === callId &&
      this.socket &&
      (this.socket.readyState === WebSocket.OPEN || this.socket.readyState === WebSocket.CONNECTING)
    ) {
      const now = Date.now();
      if (!this.lastPreserveLogTime || now - this.lastPreserveLogTime > 5000) {
        this.lastPreserveLogTime = now;
        console.log(`[TelephonyAudio] Barge-in active/connecting for call ${callId}, preserving stream (${getWsReadyStateName(this.socket.readyState)}).`);
      }
      if (this.socket.readyState === WebSocket.OPEN && (!this.micProcessor || !this.micStream || !this.micStream.active)) {
        await this.startMicrophoneCapture(callId);
      }
      return;
    }

    if (this.isBargeStarting && this.currentCallId === callId && this.currentMode === "BARGE") {
      console.log(`[TelephonyAudio] Barge-in startup in-flight for call ${callId}, skipping.`);
      return;
    }

    const isSwitchingCall = Boolean(this.currentCallId && this.currentCallId !== callId);
    this.isBargeStarting = true;
    this.currentMode = "BARGE";
    this.currentCallId = callId;
    this.micPacketCount = 0;
    this.rxPacketCount = 0;
    this.isExplicitDisconnect = false;
    const currentSessionId = ++this.activeSocketSessionId;

    // Reset continuous resampler state for fresh call
    if (this.resampler) {
      this.resampler.reset();
    }

    // Clear any previous connection watchdog
    if (this.connectionWatchdogTimer) {
      clearTimeout(this.connectionWatchdogTimer);
      this.connectionWatchdogTimer = null;
    }

    // Safely detach previous socket listeners before closing to prevent race conditions
    if (this.socket) {
      const oldSock = this.socket;
      oldSock.onopen = null;
      oldSock.onclose = null;
      oldSock.onerror = null;
      oldSock.onmessage = null;
      try {
        if (isSwitchingCall && oldSock.readyState === WebSocket.OPEN) {
          oldSock.send(JSON.stringify({ action: "leave" }));
        }
        oldSock.close();
      } catch (e) {}
      this.socket = null;
    }

    // Preserve active microphone stream and pipeline across call switches / conference transfers
    // Do NOT stop or release hardware microphone tracks during call transfers!
    if (isSwitchingCall && (!this.micStream || !this.micStream.active)) {
      this.stopMicrophoneCapturePipeline();
    }
    this.isMicMuted = false;
    this.onStateChange?.("CONNECTING", "Establishing two-way audio bridge...");

    try {
      this.initAudioContext();
      if (this.audioContext && this.audioContext.state === "suspended") {
        try {
          await this.audioContext.resume();
        } catch (e) {
          console.warn("[TelephonyAudio] AudioContext resume failed:", e);
        }
      }

      // Ensure microphone stream is acquired before connecting socket
      await this.ensureMicrophoneStream();

      const effectiveToken = token || getStoredAuthToken();
      const wsBase = getWsBaseUrl();
      const wsUrl = `${wsBase}/api/voice/barge/stream/browser/barge/${encodeURIComponent(callId)}?token=${encodeURIComponent(effectiveToken)}`;

      try {
        this.socket = new WebSocket(wsUrl);
      } catch (err: any) {
        console.warn("[TelephonyAudio] Barge WebSocket instantiation failed:", err);
        this.onStateChange?.("ERROR", "Failed to connect to barge-in bridge.");
        return;
      }

      const activeSock = this.socket;
      let hasReportedError = false;

      // Set 5-second connection watchdog to recover from stalled CONNECTING state
      this.connectionWatchdogTimer = setTimeout(() => {
        if (this.socket && this.socket.readyState === WebSocket.CONNECTING && this.activeSocketSessionId === currentSessionId) {
          console.warn(`[TelephonyAudio] Barge WebSocket handshake timed out after 5s for call ${callId}. Resetting connection.`);
          try {
            this.socket.close();
          } catch (_) {}
          this.socket = null;
          this.isBargeStarting = false;
          this.onStateChange?.("ERROR", "Barge-in connection timed out. Retrying...");
        }
      }, 5000);

      activeSock.onopen = async () => {
        if (this.connectionWatchdogTimer) {
          clearTimeout(this.connectionWatchdogTimer);
          this.connectionWatchdogTimer = null;
        }
        if (this.activeSocketSessionId !== currentSessionId || this.socket !== activeSock) return;
        this.reconnectAttempts[callId] = 0;
        await this.startMicrophoneCapture(callId);
        const hasMic = Boolean(this.micStream && this.micStream.active);
        this.onStateChange?.(
          "BARGED_IN", 
          hasMic ? "Connected! You are live in the call." : "Connected to call bridge (Mic unavailable)."
        );
      };

      activeSock.onmessage = (event) => {
        if (this.activeSocketSessionId !== currentSessionId || this.socket !== activeSock) return;
        this.handleIncomingAudio(event.data);
      };

      activeSock.onerror = (err: Event) => {
        if (this.connectionWatchdogTimer) {
          clearTimeout(this.connectionWatchdogTimer);
          this.connectionWatchdogTimer = null;
        }
        if (this.activeSocketSessionId !== currentSessionId || this.socket !== activeSock) return;
        const safeEndpoint = sanitizeWsUrl(wsUrl);
        const readyStateName = getWsReadyStateName(activeSock.readyState);
        const safeCallId = callId ? `${callId.slice(0, 8)}...` : "none";

        const diagnosticMsg = activeSock.readyState === WebSocket.CLOSED
          ? "Handshake rejected or closed by backend (call inactive, unauthorized, or session terminated)"
          : activeSock.readyState === WebSocket.CONNECTING
          ? "Failed during connection handshake (port/network/URL verification needed)"
          : "WebSocket encountered runtime stream error";

        console.warn("[TelephonyAudio] Barge WebSocket notice:", {
          callId: safeCallId,
          endpoint: safeEndpoint,
          readyState: readyStateName,
          diagnostic: diagnosticMsg,
          eventType: err?.type || "error",
          hasMicrophone: Boolean(this.micStream && this.micStream.active),
          isActiveSocket: true,
          sessionId: currentSessionId,
        });

        hasReportedError = true;
        this.onStateChange?.("ERROR", "Failed to connect to barge-in bridge.");
      };

      activeSock.onclose = (event: CloseEvent) => {
        if (this.connectionWatchdogTimer) {
          clearTimeout(this.connectionWatchdogTimer);
          this.connectionWatchdogTimer = null;
        }
        if (this.activeSocketSessionId !== currentSessionId || this.socket !== activeSock) {
          console.log(`[TelephonyAudio] Stale Barge WebSocket #${currentSessionId} closed silently, ignoring.`);
          return;
        }

        const safeEndpoint = sanitizeWsUrl(wsUrl);
        const safeCallId = callId ? `${callId.slice(0, 8)}...` : "none";

        let closeExplanation = "Session closed normally";
        if (event.code === 1008) {
          closeExplanation = "Policy violation: unauthorized role, invalid token, or call not active";
        } else if (event.code === 1006) {
          closeExplanation = "Abnormal closure: handshake rejected (e.g. HTTP 403) or connection dropped";
        } else if (event.code === 1000) {
          closeExplanation = event.reason || "Call stream ended normally";
        }

        console.log("[TelephonyAudio] Barge WebSocket Closed:", {
          callId: safeCallId,
          endpoint: safeEndpoint,
          code: event.code,
          reason: event.reason || "(no reason provided)",
          explanation: closeExplanation,
          wasClean: event.wasClean,
          isActiveSocket: true,
          sessionId: currentSessionId,
        });

        const isCallActiveForReconnect = !this.isExplicitDisconnect && (this.currentCallId === callId);
        this.socket = null;
        if (!isCallActiveForReconnect && this.currentCallId === callId) {
          this.stopMicrophone();
          this.currentMode = null;
        }

        if (event.code === 1008) {
          this.currentCallId = null;
          if (!hasReportedError) {
            this.onStateChange?.("ERROR", "Permission denied or call not active for barge stream.");
          }
        } else if (event.code === 1000) {
          this.currentCallId = null;
          this.onStateChange?.("DISCONNECTED", "Barge-in session closed.");
        } else {
          const attempts = this.reconnectAttempts[callId] || 0;
          if (isCallActiveForReconnect && attempts < 1) {
            this.reconnectAttempts[callId] = attempts + 1;
            console.log(`[TelephonyAudio] Attempting safe reconnection for active call ${callId} (attempt 1/1)...`);
            setTimeout(() => {
              if (this.currentCallId === callId && !this.socket) {
                this.startBargeIn(callId, token).catch(() => {});
              }
            }, 1500);
            return;
          }

          this.currentCallId = null;
          if (!hasReportedError) {
            this.onStateChange?.("DISCONNECTED", "Barge-in session closed.");
          }
        }
      };
    } finally {
      this.isBargeStarting = false;
    }
  }

  private handleIncomingAudio(data: any) {
    try {
      const msg = JSON.parse(data);
      if (msg.event === "CALL_ENDED") {
        this.onCallEnded?.();
        this.onStateChange?.("DISCONNECTED", msg.message || "Call has ended.");
        this.stopSession();
        return;
      }

      if (msg.event === "ERROR") {
        this.onStateChange?.("ERROR", msg.message || "Barge stream error.");
        this.stopSession();
        return;
      }

      if (msg.event === "media" && msg.media && msg.media.payload) {
        this.rxPacketCount = (this.rxPacketCount || 0) + 1;
        if (this.rxPacketCount === 1 || this.rxPacketCount % 50 === 0) {
          console.log(
            `[AUDIO_DOWNLINK_RECV] pkt=${this.rxPacketCount} b64Len=${msg.media.payload.length} callId=${this.currentCallId || ""}`
          );
        }
        this.playUlawChunk(msg.media.payload);
      }
    } catch (e) {
      console.debug("[TelephonyAudio] Non-JSON payload:", e);
    }
  }

  // Pending base64 chunk queued while AudioContext is resuming (avoids silent drop)
  private _pendingResumeChunk: string | null = null;

  private playUlawChunk(base64Payload: string) {
    if (!this.audioContext || !this.gainNode || this.isMuted) return;

    try {
      // If AudioContext is suspended (browser autoplay policy), resume it first.
      // Queue ONE chunk to replay immediately after resume to avoid the first
      // 1-2 seconds of audio being silently dropped.
      if (this.audioContext.state === "suspended") {
        this._pendingResumeChunk = base64Payload;
        this.audioContext.resume().then(() => {
          // Reset scheduling clock after suspend — currentTime was frozen at 0
          this.nextPlayTime = 0;
          if (this._pendingResumeChunk) {
            const chunk = this._pendingResumeChunk;
            this._pendingResumeChunk = null;
            this.playUlawChunk(chunk);
          }
        }).catch(() => {
          this._pendingResumeChunk = null;
        });
        // Do NOT fall through — source.start() on a suspended context is silently dropped
        return;
      }

      // Resume headset HTMLAudioElement if it was paused (e.g. first packet after page load)
      if (this.headsetAudioEl && this.headsetAudioEl.paused && this.mediaStreamDest) {
        this.headsetAudioEl.play().catch(() => {});
      }

      const binaryString = atob(base64Payload);
      const len = binaryString.length;
      if (len === 0) return;

      const audioBuffer = this.audioContext.createBuffer(1, len, 8000);
      const channelData = audioBuffer.getChannelData(0);

      for (let i = 0; i < len; i++) {
        const byte = binaryString.charCodeAt(i);
        channelData[i] = ULAW_DECODE_TABLE[byte];
      }

      const source = this.audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(this.gainNode);

      const now = this.audioContext.currentTime;
      // Ultra-low latency scheduling with resilient 200ms jitter window to prevent buffer clipping.
      // 200ms (up from 100ms) to gracefully absorb AudioContext wake-up latency.
      const leadTime = 0.015;
      if (this.nextPlayTime < now || this.nextPlayTime > now + 0.200) {
        this.nextPlayTime = now + leadTime;
      }

      source.start(this.nextPlayTime);
      this.nextPlayTime += audioBuffer.duration;
    } catch (err) {
      console.error("[TelephonyAudio] Error decoding mu-law audio chunk:", err);
    }
  }

  private async startMicrophoneCapture(callId?: string): Promise<void> {
    if (this.micCapturePromise) {
      console.log(`[TelephonyAudio] Microphone capture already initializing for call ${callId || this.currentCallId}, awaiting in-flight setup...`);
      return this.micCapturePromise;
    }

    this.micCapturePromise = (async () => {
      if (!this.audioContext || this.audioContext.state === "closed") {
        this.initAudioContext();
      }
      if (this.audioContext && this.audioContext.state === "suspended") {
        try {
          await this.audioContext.resume().catch((e) => console.warn("[TelephonyAudio] AudioContext resume note:", e));
        } catch (e) {}
      }

      // Ensure mic stream is acquired and live before proceeding
      if (!this.micStream || !this.micStream.active || !this.micStream.getAudioTracks().some((t) => t.readyState === "live")) {
        console.log(`[TelephonyAudio] micStream missing or inactive, acquiring microphone for call ${callId || this.currentCallId}...`);
        await this.ensureMicrophoneStream();
      }

      if (!this.audioContext || !this.micStream) {
        const missingParts: string[] = [];
        if (!this.audioContext) {
          missingParts.push(`audioContext (init error: ${this.lastAudioContextError || "AudioContext unavailable or closed"})`);
        }
        if (!this.micStream) {
          missingParts.push(`micStream (acquisition error: ${this.lastMicError || "device not available or permission denied"})`);
        }
        console.warn(`[TelephonyAudio] Cannot start mic capture: ${missingParts.join(", ")} after acquisition attempt.`);
        return;
      }

      try {
        if (this.audioContext.state === "suspended") {
          await this.audioContext.resume().catch((e) => console.warn("[TelephonyAudio] AudioContext resume note:", e));
        }

        // Check if audio capture pipeline is already running and healthy
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
          console.log(`[TelephonyAudio] Microphone capture pipeline already active for call ${callId || this.currentCallId}, reusing.`);
          return;
        }

        // Cleanup any previous nodes before reconnecting
        if (this.keepAliveGain) {
          try { this.keepAliveGain.disconnect(); } catch (e) {}
          this.keepAliveGain = null;
        }
        if (this.micProcessor) {
          this.micProcessor.onaudioprocess = null;
          try { this.micProcessor.disconnect(); } catch (e) {}
          this.micProcessor = null;
        }
        if (this.lowpassFilter) {
          try { this.lowpassFilter.disconnect(); } catch (e) {}
          this.lowpassFilter = null;
        }
        if (this.highpassFilter) {
          try { this.highpassFilter.disconnect(); } catch (e) {}
          this.highpassFilter = null;
        }
        if (this.micSource) {
          try { this.micSource.disconnect(); } catch (e) {}
          this.micSource = null;
        }

        const activeTracks = this.micStream.getAudioTracks().filter((t) => t.readyState === "live");
        if (activeTracks.length === 0) {
          console.warn("[TelephonyAudio] No live audio tracks found in micStream.");
          return;
        }
        activeTracks.forEach((t) => { t.enabled = !this.isMicMuted; });

        this.micSource = this.audioContext.createMediaStreamSource(this.micStream);
        const inSampleRate = this.audioContext.sampleRate || 48000;

        // Telephony bandpass filtering (120Hz highpass + 3400Hz lowpass) to remove low rumble and high-frequency aliasing
        this.highpassFilter = this.audioContext.createBiquadFilter();
        this.highpassFilter.type = "highpass";
        this.highpassFilter.frequency.value = 120;

        this.lowpassFilter = this.audioContext.createBiquadFilter();
        this.lowpassFilter.type = "lowpass";
        this.lowpassFilter.frequency.value = 3400;

        this.micSource.connect(this.highpassFilter);
        this.highpassFilter.connect(this.lowpassFilter);

        // Studio-grade microphone pre-amp gain stage (+7.6 dB default boost)
        this.micGainNode = this.audioContext.createGain();
        this.micGainNode.gain.value = this.micGain;
        this.lowpassFilter.connect(this.micGainNode);

        // Initialize continuous stateful resampler (maintains phase accumulator and 160-sample frame FIFO)
        if (!this.resampler) {
          this.resampler = new ContinuousAudioResampler(inSampleRate);
        } else {
          this.resampler.reset(inSampleRate);
        }

        // 1024-sample buffer (~21.3ms @ 48kHz): reliable cross-platform Web Audio buffer size
        this.micProcessor = this.audioContext.createScriptProcessor(1024, 1, 1);

        this.micProcessor.onaudioprocess = (e) => {
          if (this.isMicMuted || !this.socket || this.socket.readyState !== WebSocket.OPEN) return;

          const rawData = e.inputBuffer.getChannelData(0);
          let maxAmp = 0;
          let sumSq = 0;
          for (let i = 0; i < rawData.length; i++) {
            const a = Math.abs(rawData[i]);
            if (a > maxAmp) maxAmp = a;
            sumSq += rawData[i] * rawData[i];
          }
          const rms = Math.sqrt(sumSq / rawData.length);
          const rmsDbfs = rms > 1e-5 ? 20 * Math.log10(rms) : -96.0;

          // Resample continuously across block boundaries and slice exact 160-sample (20ms) frames
          const frames = this.resampler?.process(rawData) || [];

          for (const ulawBytes of frames) {
            let binary = "";
            for (let i = 0; i < ulawBytes.length; i++) {
              binary += String.fromCharCode(ulawBytes[i]);
            }
            const b64 = btoa(binary);

            this.micPacketCount = (this.micPacketCount || 0) + 1;
            if (this.micPacketCount === 1 || this.micPacketCount % 50 === 0) {
              console.log(
                `[HUMAN_MIC_FRAME] pkt=${this.micPacketCount} frameSize=${ulawBytes.length} maxAmp=${maxAmp.toFixed(4)} rms_dBFS=${rmsDbfs.toFixed(1)} b64Len=${b64.length} callId=${callId || this.currentCallId || ""}`
              );
            }

            try {
              this.socket.send(JSON.stringify({
                event: "media",
                media: {
                  payload: b64,
                },
              }));
              if (this.micPacketCount === 1 || this.micPacketCount % 50 === 0) {
                console.log(
                  `[HUMAN_MIC_WS] Frame sent: pkt=${this.micPacketCount} bytes=${ulawBytes.length} b64Len=${b64.length} callId=${callId || this.currentCallId || ""}`
                );
              }
            } catch (sendErr) {
              console.warn("[TelephonyAudio] Send mic packet error:", sendErr);
            }
          }
        };

        this.micGainNode.connect(this.micProcessor);
        // Route ScriptProcessorNode through gain node to destination with gain=0.0
        // Gain 0.0 prevents Chromium garbage collection while completely eliminating
        // speaker bleed and self-cancellation in Acoustic Echo Cancellation (AEC)
        this.keepAliveGain = this.audioContext.createGain();
        this.keepAliveGain.gain.value = 0.0;
        this.micProcessor.connect(this.keepAliveGain);
        this.keepAliveGain.connect(this.audioContext.destination);

        console.log(`[TelephonyAudio] Microphone capture active for call ${callId || this.currentCallId} (sampleRate: ${inSampleRate}Hz)`);
        this.notifyMicState();
      } catch (err) {
        console.error("[TelephonyAudio] Error initializing microphone capture:", err);
        this.notifyMicState();
      }
    })();

    try {
      await this.micCapturePromise;
    } finally {
      this.micCapturePromise = null;
    }
  }

  public stopMicrophoneCapturePipeline() {
    if (this.resampler) {
      this.resampler.reset();
    }
    if (this.keepAliveGain) {
      try { this.keepAliveGain.disconnect(); } catch (e) {}
      this.keepAliveGain = null;
    }
    if (this.micProcessor) {
      this.micProcessor.onaudioprocess = null;
      try { this.micProcessor.disconnect(); } catch (e) {}
      this.micProcessor = null;
    }
    if (this.lowpassFilter) {
      try { this.lowpassFilter.disconnect(); } catch (e) {}
      this.lowpassFilter = null;
    }
    if (this.micGainNode) {
      try { this.micGainNode.disconnect(); } catch (e) {}
      this.micGainNode = null;
    }
    if (this.highpassFilter) {
      try { this.highpassFilter.disconnect(); } catch (e) {}
      this.highpassFilter = null;
    }
    if (this.micSource) {
      try { this.micSource.disconnect(); } catch (e) {}
      this.micSource = null;
    }
    this.notifyMicState();
  }

  public releaseMicrophoneStream() {
    if (this.micStream) {
      try {
        this.micStream.getTracks().forEach((track) => track.stop());
      } catch (e) {}
      this.micStream = null;
    }
    this.notifyMicState();
  }

  private stopMicrophone() {
    this.stopMicrophoneCapturePipeline();
    // Do NOT stop hardware micStream tracks here; preserve them for smooth call transitions
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.gainNode && !this.isMuted) {
      this.gainNode.gain.value = this.volume;
    }
  }

  public setMute(mute: boolean) {
    this.isMuted = mute;
    if (this.gainNode) {
      this.gainNode.gain.value = mute ? 0 : this.volume;
    }
  }

  public setMicMute(mute: boolean) {
    this.isMicMuted = mute;
    if (this.micStream) {
      this.micStream.getAudioTracks().forEach((track) => {
        track.enabled = !mute;
      });
    }
    if (!mute && this.currentMode === "BARGE" && this.currentCallId && (!this.micProcessor || !this.micStream?.active)) {
      this.startMicrophoneCapture(this.currentCallId).catch(() => {});
    }
    this.notifyMicState();
  }

  /** Stops barge-in (microphone capture + WebSocket) and returns to idle. */
  public stopBargeIn = async (): Promise<void> => {
    this.stopSession();
  };

  public stopSession(forceReleaseMedia: boolean = false) {
    this.isExplicitDisconnect = true;
    this.currentMode = null;
    this.currentCallId = null;
    this.isBargeStarting = false;
    this.rxPacketCount = 0;
    this.lastPreserveLogTime = 0;

    if (this.connectionWatchdogTimer) {
      clearTimeout(this.connectionWatchdogTimer);
      this.connectionWatchdogTimer = null;
    }

    if (this.resampler) {
      this.resampler.reset();
    }

    this.stopMicrophoneCapturePipeline();
    if (forceReleaseMedia) {
      this.releaseMicrophoneStream();
    }

    if (this.socket) {
      const s = this.socket;
      s.onclose = null;
      s.onerror = null;
      s.onmessage = null;
      try {
        if (s.readyState === WebSocket.OPEN) {
          s.send(JSON.stringify({ action: "leave" }));
        }
        s.close();
      } catch (e) {}
      this.socket = null;
    }

    this.nextPlayTime = 0;
    this.onStateChange?.("IDLE");
  }
}

export const telephonyAudioManager = typeof window !== "undefined" ? new TelephonyAudioManager() : null;
