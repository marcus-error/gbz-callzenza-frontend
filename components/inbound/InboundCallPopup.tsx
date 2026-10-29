"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Phone, PhoneOff, User, Sparkles, Volume2, ShieldCheck, ArrowRight, Bot, Mic, MicOff, X, Minimize2, Maximize2 } from "lucide-react";
import { inboundService } from "@/lib/services/inbound.service";
import { conferenceService } from "@/lib/services/conference.service";
import { telephonyAudioManager } from "@/lib/services/telephony-audio.service";
import { useWebSocketSync, WebSocketEventMessage } from "@/lib/hooks/useWebSocketSync";
import { useActiveCallStore, useAuthStore } from "@/lib/store";

export interface IncomingCallData {
  call_id: string;
  caller_name: string;
  caller_phone: string;
  to_number?: string;
  agent_type?: string;
  status: string;
  notes?: string;
  created_at?: string;
  is_conference_invite?: boolean;
  conference_sid?: string;
}

interface InboundCallPopupProps {
  onAttend?: (call: IncomingCallData) => void;
  onDecline?: (call: IncomingCallData) => void;
  inline?: boolean;
}

export const InboundCallPopup: React.FC<InboundCallPopupProps> = ({ onAttend, onDecline, inline = false }) => {
  const [incomingCall, setIncomingCall] = useState<IncomingCallData | null>(null);
  const [callStatus, setCallStatus] = useState<"RINGING" | "CONNECTED" | "ENDED">("RINGING");
  const [ringSeconds, setRingSeconds] = useState(0);
  const [connectedSeconds, setConnectedSeconds] = useState(0);
  const [isAttending, setIsAttending] = useState(false);
  const [isDeclining, setIsDeclining] = useState(false);
  const [isMicMuted, setIsMicMuted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const audioContextRef = useRef<AudioContext | null>(null);
  const activeOsc1Ref = useRef<OscillatorNode | null>(null);
  const activeOsc2Ref = useRef<OscillatorNode | null>(null);
  const activeGainRef = useRef<GainNode | null>(null);
  const ringIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const ringTimerRef = useRef<NodeJS.Timeout | null>(null);
  const connectedTimerRef = useRef<NodeJS.Timeout | null>(null);
  const dismissedCallsRef = useRef<Set<string>>(new Set());

  // Immediate and complete sound cutoff
  const stopRingtone = useCallback(() => {
    if (ringIntervalRef.current) {
      clearInterval(ringIntervalRef.current);
      ringIntervalRef.current = null;
    }
    if (ringTimerRef.current) {
      clearInterval(ringTimerRef.current);
      ringTimerRef.current = null;
    }

    try {
      if (activeGainRef.current && audioContextRef.current) {
        const now = audioContextRef.current.currentTime;
        activeGainRef.current.gain.cancelScheduledValues(now);
        activeGainRef.current.gain.setValueAtTime(0.00001, now);
      }
    } catch (_) {}

    try {
      if (activeOsc1Ref.current) {
        activeOsc1Ref.current.stop();
        activeOsc1Ref.current.disconnect();
        activeOsc1Ref.current = null;
      }
    } catch (_) {}

    try {
      if (activeOsc2Ref.current) {
        activeOsc2Ref.current.stop();
        activeOsc2Ref.current.disconnect();
        activeOsc2Ref.current = null;
      }
    } catch (_) {}

    try {
      if (activeGainRef.current) {
        activeGainRef.current.disconnect();
        activeGainRef.current = null;
      }
    } catch (_) {}

    if (audioContextRef.current && audioContextRef.current.state !== "closed") {
      audioContextRef.current.close().catch(() => {});
      audioContextRef.current = null;
    }
  }, []);

  // Web Audio chime for incoming call ring tone
  const playRingChime = useCallback(() => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;

      if (!audioContextRef.current || audioContextRef.current.state === "closed") {
        audioContextRef.current = new AudioCtx();
      }

      const ctx = audioContextRef.current;
      if (ctx.state === "suspended") {
        ctx.resume().catch(() => {});
      }

      const now = ctx.currentTime;
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      activeOsc1Ref.current = osc1;
      activeOsc2Ref.current = osc2;
      activeGainRef.current = gain;

      osc1.type = "sine";
      osc2.type = "sine";
      osc1.frequency.setValueAtTime(440, now);
      osc2.frequency.setValueAtTime(480, now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.04, now + 0.08);
      gain.gain.setValueAtTime(0.04, now + 1.2);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.4);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 1.4);
      osc2.stop(now + 1.4);
    } catch (_) {}
  }, []);

  const startRingtone = useCallback(() => {
    stopRingtone();
    playRingChime();
    ringIntervalRef.current = setInterval(() => {
      playRingChime();
    }, 2800);
  }, [playRingChime, stopRingtone]);

  // Check active incoming call on initial load
  useEffect(() => {
    let mounted = true;
    inboundService
      .getActiveIncomingCall()
      .then((res) => {
        if (mounted && res && res.active_call && res.active_call.status === "RINGING") {
          const currentUser = useAuthStore.getState().user;
          const activeCallOrgId = (res.active_call as any)?.organization_id;
          if (
            activeCallOrgId &&
            currentUser?.business_id &&
            currentUser.role !== "SUPER_ADMIN" &&
            String(currentUser.business_id) !== String(activeCallOrgId)
          ) {
            return;
          }
          const cId = res.active_call.call_id;
          if (dismissedCallsRef.current.has(cId)) return;
          try {
            if (sessionStorage.getItem(`GBZ_declined_${cId}`)) return;
          } catch (_) {}
          setIncomingCall(res.active_call);
          setCallStatus("RINGING");
        }
      })
      .catch(() => {});

    return () => {
      mounted = false;
      stopRingtone();
    };
  }, [stopRingtone]);

  // WebSocket sync listener
  useWebSocketSync((msg: WebSocketEventMessage) => {
    const evt = (msg.event || "").toUpperCase();
    if (
      evt === "INCOMING_CALL" ||
      evt === "INBOUND_CALL_RECEIVED" ||
      evt === "INCOMING_VOICE_AGENT_TRANSFER" ||
      evt === "CONFERENCE_INVITE"
    ) {
      const cId = msg.call_id || String(Date.now());
      if (dismissedCallsRef.current.has(cId)) return;
      try {
        if (sessionStorage.getItem(`GBZ_declined_${cId}`)) return;
      } catch (_) {}

      // If already on a call, don't clobber
      if (incomingCall && callStatus === "CONNECTED") return;

      const currentUser = useAuthStore.getState().user;

      // Filter target agent if specified in message
      if (msg.target_agent_id && currentUser?.id && String(currentUser.id) !== String(msg.target_agent_id)) {
        return;
      }

      // Tenant isolation: Never pop up calls from other organizations
      const orgId = msg.organization_id || msg.business_id;
      if (
        orgId &&
        currentUser?.business_id &&
        currentUser.role !== "SUPER_ADMIN" &&
        String(currentUser.business_id) !== String(orgId)
      ) {
        return;
      }

      // Filter self-loop PBX echos where caller is our own trunk/DID
      const cleanIncomingPhone = (msg.caller_phone || msg.from_number || "").replace(/\D/g, "");
      const cleanToNumber = (msg.to_number || "").replace(/\D/g, "");
      if (cleanIncomingPhone && cleanToNumber && (cleanIncomingPhone === cleanToNumber || (cleanIncomingPhone.length >= 10 && cleanToNumber.length >= 10 && cleanIncomingPhone.slice(-10) === cleanToNumber.slice(-10)))) {
        return;
      }
      if (cleanIncomingPhone && (cleanIncomingPhone.includes("09410087540") || cleanIncomingPhone.includes("7935485287"))) {
        return;
      }

      // If agent is already on an active call (e.g. outbound dial), prevent self-inbound popup
      const activeStore = useActiveCallStore.getState();
      if (activeStore.callActive) return;
      if (activeStore.activeCallId && activeStore.activeCallId === cId) return;
      const cleanActivePhone = (activeStore.leadPhone || "").replace(/\D/g, "");
      if (cleanActivePhone && cleanIncomingPhone && (cleanIncomingPhone.includes(cleanActivePhone) || cleanActivePhone.includes(cleanIncomingPhone))) {
        return;
      }

      const isConference = Boolean(msg.is_conference_invite || evt === "CONFERENCE_INVITE" || evt === "INCOMING_VOICE_AGENT_TRANSFER");
      const callData: IncomingCallData = {
        call_id: cId,
        caller_name: isConference ? (msg.caller_name || "Multi-Agent Conference") : (msg.caller_name || msg.client_name || "Incoming Customer"),
        caller_phone: msg.caller_phone || msg.client_phone || msg.from_number || "+91 98765 43210",
        to_number: msg.to_number || "09410697548",
        agent_type: msg.agent_type || "VOICE",
        status: "RINGING",
        notes: isConference ? `Conference Room: ${msg.conference_sid || cId}` : msg.notes,
        created_at: msg.initiated_at || msg.created_at || new Date().toISOString(),
        is_conference_invite: isConference,
        conference_sid: msg.conference_sid,
      };
      setIncomingCall(callData);
      setCallStatus("RINGING");
      setRingSeconds(0);
      setConnectedSeconds(0);
    } else if (evt === "CALL_CONNECTED" || evt === "INCOMING_CALL_ANSWERED") {
      if (incomingCall && msg.call_id === incomingCall.call_id) {
        stopRingtone();
        setCallStatus("CONNECTED");
      }
    } else if (
      evt === "INCOMING_CALL_DECLINED" ||
      evt === "CALL_REJECTED" ||
      evt === "CALL_ENDED" ||
      evt === "CALL_COMPLETED" ||
      evt === "CALL_FAILED"
    ) {
      if (incomingCall && (msg.call_id === incomingCall.call_id || !msg.call_id)) {
        stopRingtone();
        const activeCallId = useActiveCallStore.getState().activeCallId;
        if (!activeCallId || activeCallId === incomingCall.call_id) {
          try {
            telephonyAudioManager?.stopSession();
          } catch (_) {}
          useActiveCallStore.getState().resetCall();
        }
        setCallStatus("ENDED");
        setTimeout(() => {
          setIncomingCall(null);
          setCallStatus("RINGING");
        }, 1200);
      }
    }
  });

  // Ring timer (auto-decline after 35s if unattended)
  useEffect(() => {
    if (incomingCall && callStatus === "RINGING") {
      startRingtone();
      setRingSeconds(0);
      ringTimerRef.current = setInterval(() => {
        setRingSeconds((prev) => {
          if (prev >= 35) {
            handleDecline();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      stopRingtone();
      if (ringTimerRef.current) {
        clearInterval(ringTimerRef.current);
        ringTimerRef.current = null;
      }
    }
    return () => {
      stopRingtone();
      if (ringTimerRef.current) {
        clearInterval(ringTimerRef.current);
        ringTimerRef.current = null;
      }
    };
  }, [incomingCall, callStatus, startRingtone, stopRingtone]);

  // Connected call timer (increments every second while call is connected)
  useEffect(() => {
    if (callStatus === "CONNECTED") {
      setConnectedSeconds(0);
      connectedTimerRef.current = setInterval(() => {
        setConnectedSeconds((prev) => prev + 1);
        useActiveCallStore.getState().tickDuration();
      }, 1000);
    } else {
      if (connectedTimerRef.current) {
        clearInterval(connectedTimerRef.current);
        connectedTimerRef.current = null;
      }
    }
    return () => {
      if (connectedTimerRef.current) {
        clearInterval(connectedTimerRef.current);
        connectedTimerRef.current = null;
      }
    };
  }, [callStatus]);

  const handleAttend = async () => {
    if (!incomingCall) return;
    const callId = incomingCall.call_id;
    stopRingtone();

    setIsAttending(true);
    setCallStatus("CONNECTED");
    setConnectedSeconds(0);

    // Update global active call store for live indicators
    useActiveCallStore.getState().setCallState({
      callActive: true,
      activeCallId: callId,
      telephonyStatus: "IN_PROGRESS",
      leadName: incomingCall.caller_name || "Inbound Caller",
      leadPhone: incomingCall.caller_phone || "",
      customerConnectedAt: new Date().toISOString(),
      callDuration: 0,
    });

    // 1. Pre-warm AudioContext FIRST while the click-gesture trust chain is still live.
    //    Must be synchronous (not awaited) so the browser doesn't break the gesture trust chain.
    //    Then start the full barge-in pipeline (mic capture + WebSocket).
    if (telephonyAudioManager) {
      // preWarmAudioContext runs AudioContext.resume() synchronously within the gesture stack
      telephonyAudioManager.preWarmAudioContext().catch(() => {});
      telephonyAudioManager.startBargeIn(callId).catch((audioErr) => {
        console.warn("[InboundCallPopup] Audio bridge connect:", audioErr);
      });
    }

    try {
      if (incomingCall.is_conference_invite) {
        // 2. Accept multi-party conference invite
        await conferenceService.acceptInvite(callId);
      } else {
        // 2. Tell backend to answer the SIP trunk with 200 OK
        await inboundService.attendInboundCall(callId);
      }

      if (onAttend) {
        onAttend(incomingCall);
      }
    } catch (err) {
      console.error("Failed to attend inbound call:", err);
    } finally {
      setIsAttending(false);
    }
  };

  const handleDecline = async () => {
    if (!incomingCall) return;
    const callId = incomingCall.call_id;
    dismissedCallsRef.current.add(callId);
    try {
      sessionStorage.setItem(`GBZ_declined_${callId}`, "true");
    } catch (_) {}

    stopRingtone();
    const activeCallId = useActiveCallStore.getState().activeCallId;
    if (!activeCallId || activeCallId === callId) {
      try {
        telephonyAudioManager?.stopSession();
      } catch (_) {}
    }

    const currentCall = { ...incomingCall };
    setIsDeclining(true);
    setCallStatus("ENDED");

    try {
      if (currentCall.is_conference_invite) {
        await conferenceService.rejectInvite(callId);
      } else {
        await inboundService.declineInboundCall(callId);
      }
      if (!activeCallId || activeCallId === callId) {
        useActiveCallStore.getState().resetCall();
      }
      if (onDecline) {
        onDecline(currentCall);
      }
    } catch (err) {
      console.error("Failed to decline inbound call:", err);
    } finally {
      setIsDeclining(false);
      setTimeout(() => {
        setIncomingCall(null);
        setCallStatus("RINGING");
      }, 500);
    }
  };

  const toggleMicMute = () => {
    const next = !isMicMuted;
    setIsMicMuted(next);
    try {
      telephonyAudioManager?.setMicMute(next);
    } catch (_) {}
  };

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  if (!incomingCall) return null;

  const isVoiceAgent = (incomingCall.agent_type || "").toUpperCase().includes("VOICE") || (incomingCall.agent_type || "").toUpperCase().includes("HUMAN");
  const targetLabel = isVoiceAgent ? "Voice Agent" : "AI Agent";

  // --------------------------------------------------------------------------
  // MINIMIZED FLOATING PILL (when user minimizes an active in-progress call)
  // --------------------------------------------------------------------------
  if (isMinimized && callStatus === "CONNECTED") {
    return (
      <div className="fixed bottom-6 right-6 z-[99999] flex items-center gap-3 bg-slate-900 border-2 border-emerald-500/80 rounded-full px-5 py-3 shadow-2xl shadow-emerald-500/30 text-white animate-scale-up font-sans">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        <div className="flex flex-col text-left">
          <span className="text-[11px] font-bold text-slate-300 font-mono">
            {incomingCall.caller_phone}
          </span>
          <span className="text-xs font-mono font-black text-emerald-400">
            {formatTimer(connectedSeconds)}
          </span>
        </div>
        <button
          onClick={toggleMicMute}
          className={`p-2 rounded-full transition cursor-pointer ${isMicMuted ? "bg-amber-500/20 text-amber-400" : "bg-slate-800 text-slate-200"}`}
          title={isMicMuted ? "Unmute Mic" : "Mute Mic"}
        >
          {isMicMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
        </button>
        <button
          onClick={handleDecline}
          className="p-2 rounded-full bg-rose-600 hover:bg-rose-500 text-white transition cursor-pointer shadow-lg shadow-rose-600/40"
          title="End Call"
        >
          <PhoneOff className="w-4 h-4" />
        </button>
        <button
          onClick={() => setIsMinimized(false)}
          className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition cursor-pointer"
          title="Expand Call Screen"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // ACTIVE CONNECTED CALL SCREEN
  // --------------------------------------------------------------------------
  if (callStatus === "CONNECTED") {
    if (inline) {
      return (
        <div className="m-3 bg-slate-900/98 backdrop-blur-xl border-2 border-emerald-500/90 rounded-2xl shadow-[0_12px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(16,185,129,0.25)] ring-1 ring-emerald-500/30 overflow-hidden font-sans animate-scale-up text-white shrink-0">
          <div className="bg-gradient-to-r from-emerald-600 to-indigo-600 px-3.5 py-2.5 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <span className="text-[11px] font-black tracking-widest uppercase text-white drop-shadow-sm">
                Live Inbound Call
              </span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-black/35 text-[10px] font-mono font-bold text-emerald-300 border border-emerald-400/30">
              {formatTimer(connectedSeconds)}
            </span>
          </div>

          <div className="p-3.5 space-y-2.5 text-center">
            <div className="flex items-center gap-3 bg-slate-950/85 border border-slate-800 rounded-xl p-2.5 text-left shadow-inner">
              <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="overflow-hidden flex-1">
                <div className="text-xs font-bold text-white truncate">
                  {incomingCall.caller_name || "Customer"}
                </div>
                <div className="text-xs font-mono font-bold text-emerald-400">
                  {incomingCall.caller_phone}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between px-2.5 py-1.5 bg-slate-950/60 border border-emerald-500/20 rounded-lg">
              <div className="flex items-center gap-1 h-3.5">
                <span className="w-1 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.3s] h-2.5"></span>
                <span className="w-1 bg-teal-400 rounded-full animate-bounce [animation-delay:-0.15s] h-3.5"></span>
                <span className="w-1 bg-emerald-300 rounded-full animate-bounce [animation-delay:-0.45s] h-3"></span>
                <span className="w-1 bg-teal-300 rounded-full animate-bounce [animation-delay:-0.2s] h-3.5"></span>
                <span className="w-1 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.35s] h-2"></span>
              </div>
              <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-wider">
                Two-Way Audio Live
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-0.5">
              <button
                onClick={toggleMicMute}
                className={`py-2 px-2 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer border ${
                  isMicMuted
                    ? "bg-amber-500/20 text-amber-300 border-amber-500/50 hover:bg-amber-500/30"
                    : "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700"
                }`}
              >
                {isMicMuted ? <MicOff className="w-3.5 h-3.5 text-amber-400" /> : <Mic className="w-3.5 h-3.5 text-emerald-400" />}
                {isMicMuted ? "Unmute" : "Mute"}
              </button>

              <button
                onClick={handleDecline}
                disabled={isDeclining}
                className="py-2 px-2 bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-rose-950/60 hover:scale-[1.02] cursor-pointer"
              >
                <PhoneOff className="w-3.5 h-3.5" />
                {isDeclining ? "..." : "End Call"}
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="fixed bottom-5 right-5 z-[99999] pointer-events-auto w-96 max-w-[calc(100vw-2.5rem)] animate-slide-up font-sans">
        <div className="bg-slate-900 border-2 border-emerald-500/80 rounded-2xl shadow-2xl shadow-emerald-950/80 overflow-hidden relative text-white">
          <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none"></div>

          <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 px-4 py-3 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <span className="text-[11px] font-black tracking-widest uppercase text-white drop-shadow-sm">
                Connected • Live Audio
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-black/30 text-xs font-mono font-black tracking-wider text-emerald-300 border border-emerald-400/30">
                {formatTimer(connectedSeconds)}
              </span>
              <button
                onClick={() => setIsMinimized(true)}
                className="w-6 h-6 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white/80 hover:text-white transition cursor-pointer"
                title="Minimize Call Screen"
              >
                <Minimize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="p-4 flex flex-col items-center text-center">
            <div className="flex items-center gap-3 w-full bg-slate-950/60 border border-slate-800 rounded-xl p-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/30 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left overflow-hidden">
                <h2 className="text-sm font-black tracking-tight text-white truncate">
                  {incomingCall.caller_name || "Customer"}
                </h2>
                <p className="text-emerald-400 font-mono font-bold text-xs">
                  {incomingCall.caller_phone}
                </p>
              </div>
            </div>

            <div className="w-full bg-slate-950/80 border border-emerald-500/30 rounded-xl p-3 mb-3 flex items-center justify-between">
              <div className="flex items-center gap-1 h-5">
                <span className="w-1 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.3s] h-3"></span>
                <span className="w-1 bg-teal-400 rounded-full animate-bounce [animation-delay:-0.15s] h-5"></span>
                <span className="w-1 bg-emerald-300 rounded-full animate-bounce [animation-delay:-0.45s] h-4"></span>
                <span className="w-1 bg-teal-300 rounded-full animate-bounce [animation-delay:-0.2s] h-5"></span>
                <span className="w-1 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.35s] h-3"></span>
              </div>
              <span className="text-[10px] font-semibold text-emerald-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Two-Way Audio Live
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5 w-full">
              <button
                onClick={toggleMicMute}
                className={`py-2.5 px-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer border ${
                  isMicMuted
                    ? "bg-amber-500/20 text-amber-300 border-amber-500/50 hover:bg-amber-500/30"
                    : "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700"
                }`}
              >
                {isMicMuted ? <MicOff className="w-3.5 h-3.5 text-amber-400" /> : <Mic className="w-3.5 h-3.5 text-emerald-400" />}
                {isMicMuted ? "Unmute" : "Mute"}
              </button>

              <button
                onClick={handleDecline}
                disabled={isDeclining}
                className="py-2.5 px-3 bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-md shadow-rose-600/40 hover:scale-[1.02] cursor-pointer"
              >
                <PhoneOff className="w-3.5 h-3.5" />
                {isDeclining ? "Ending..." : "End Call"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // CALL ENDED NOTICE
  // --------------------------------------------------------------------------
  if (callStatus === "ENDED") {
    if (inline) {
      return (
        <div className="m-3 bg-slate-900/98 backdrop-blur-xl border-2 border-slate-700 rounded-2xl p-3.5 text-center text-white shadow-lg ring-1 ring-slate-700 font-sans animate-scale-up shrink-0">
          <div className="text-xs font-bold text-rose-400 flex items-center justify-center gap-1.5">
            <PhoneOff className="w-3.5 h-3.5" /> Call Ended
          </div>
          <div className="text-xs font-mono text-slate-300 mt-1">{incomingCall.caller_phone}</div>
          <div className="text-[10px] text-slate-400 mt-0.5">Duration: {formatTimer(connectedSeconds)}</div>
        </div>
      );
    }

    return (
      <div className="fixed bottom-5 right-5 z-[99999] pointer-events-auto w-80 max-w-[calc(100vw-2.5rem)] animate-slide-up font-sans">
        <div className="bg-slate-900 border-2 border-slate-700 rounded-2xl p-4 text-center text-white shadow-2xl">
          <div className="w-10 h-10 rounded-full bg-rose-500/20 border border-rose-500/40 flex items-center justify-center mx-auto mb-2 text-rose-400">
            <PhoneOff className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold mb-0.5">Call Ended</h3>
          <p className="text-xs text-slate-400 font-mono mb-1.5">{incomingCall.caller_phone}</p>
          <span className="text-[10px] text-slate-500">Duration: {formatTimer(connectedSeconds)}</span>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // INCOMING CALL RINGING SCREEN (Inline or Docked)
  // --------------------------------------------------------------------------
  if (inline) {
    return (
      <div className="m-3 bg-slate-900/98 backdrop-blur-xl border-2 border-emerald-500 rounded-2xl shadow-[0_12px_35px_rgba(0,0,0,0.8),0_0_25px_rgba(16,185,129,0.3)] ring-1 ring-emerald-500/30 overflow-hidden font-sans animate-scale-up text-white shrink-0">
        {/* Glow backdrop behind card */}
        <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />

        {/* Pop-up Top Bar with Close/Dismiss (X) button */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 px-3.5 py-2.5 flex items-center justify-between shadow-md relative z-10">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>
            <span className="text-[11px] font-black tracking-widest uppercase text-white drop-shadow-sm">
              Incoming Call
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-full bg-black/35 text-[10px] font-mono font-bold text-emerald-200 border border-emerald-400/20">
              00:{String(ringSeconds).padStart(2, "0")}
            </span>
            <button
              onClick={handleDecline}
              className="w-5 h-5 rounded-full bg-black/25 hover:bg-black/50 flex items-center justify-center text-white/80 hover:text-white transition cursor-pointer"
              title="Close & Dismiss Call"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Pop-up Content */}
        <div className="p-3.5 space-y-2.5 text-center relative z-10">
          <div className="flex items-center gap-3 bg-slate-950/85 border border-slate-800 rounded-xl p-2.5 text-left shadow-inner">
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/30 shrink-0">
                <Phone className="w-4 h-4 animate-bounce" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-slate-900"></span>
            </div>
            <div className="overflow-hidden flex-1">
              <div className="text-xs font-bold text-white truncate">
                {incomingCall.caller_name || "Customer Calling"}
              </div>
              <div className="text-xs font-mono font-bold text-emerald-400">
                {incomingCall.caller_phone}
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center px-2.5 py-1.5 bg-slate-950/60 rounded-lg text-[10px] text-slate-400 border border-slate-800/80">
            <span>Route: <strong className="text-slate-200 font-mono">{incomingCall.to_number || "09410697548"}</strong></span>
            <span className="text-emerald-400 font-bold uppercase tracking-wider text-[9px] flex items-center gap-1">
              <Volume2 className="w-3 h-3 animate-pulse" /> Ringing...
            </span>
          </div>

          {/* Action Buttons: Attend or Decline */}
          <div className="grid grid-cols-2 gap-2 pt-0.5">
            <button
              onClick={handleDecline}
              disabled={isDeclining || isAttending}
              className="py-2.5 px-3 bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-md shadow-rose-950/60 hover:scale-[1.02] cursor-pointer disabled:opacity-50"
            >
              <PhoneOff className="w-3.5 h-3.5" />
              {isDeclining ? "..." : "Decline"}
            </button>

            <button
              onClick={handleAttend}
              disabled={isDeclining || isAttending}
              className="py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-md shadow-emerald-950/60 hover:scale-[1.02] cursor-pointer disabled:opacity-50"
            >
              <Phone className="w-3.5 h-3.5" />
              {isAttending ? "..." : "Attend"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-5 right-5 z-[99999] pointer-events-auto w-96 max-w-[calc(100vw-2.5rem)] animate-slide-up font-sans">
      <div className="bg-slate-900 border-2 border-indigo-500/80 rounded-2xl shadow-2xl shadow-indigo-950/80 overflow-hidden relative text-white">
        <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none"></div>

        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 px-4 py-3 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>
            <span className="text-[11px] font-black tracking-widest uppercase text-white drop-shadow-sm">
              Incoming Call
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-full bg-black/25 text-[10px] font-mono font-bold tracking-wider text-white">
              00:{String(ringSeconds).padStart(2, "0")}
            </span>
            <button
              onClick={handleDecline}
              className="w-6 h-6 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white/80 hover:text-white transition cursor-pointer"
              title="Close & Dismiss Call"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="p-4 flex flex-col items-center text-center">
          <div className="relative mb-3 flex items-center justify-center">
            <div className="absolute w-16 h-16 rounded-full border-2 border-emerald-400/40 animate-ping pointer-events-none"></div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 relative z-10">
              <Phone className="w-6 h-6 animate-bounce" />
            </div>
          </div>

          <h2 className="text-lg font-black tracking-tight text-white mb-0.5">
            {incomingCall.caller_name || "Customer Calling"}
          </h2>
          <p className="text-emerald-400 font-mono font-bold text-sm mb-3">
            {incomingCall.caller_phone}
          </p>

          <div className="w-full bg-slate-950/70 border border-slate-800 rounded-xl p-2.5 space-y-1.5 mb-4 text-xs text-left">
            <div className="flex justify-between items-center">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-[9px]">Inbound Route:</span>
              <span className="font-semibold text-slate-200 text-[11px]">{incomingCall.to_number || "09410697548"}</span>
            </div>
            <div className="flex justify-between items-center border-t border-slate-800/80 pt-1.5">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-[9px]">Destination:</span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                {isVoiceAgent ? <Mic className="w-2.5 h-2.5 text-indigo-400" /> : <Bot className="w-2.5 h-2.5 text-emerald-400" />}
                {targetLabel}
              </span>
            </div>
            {incomingCall.notes && (
              <div className="flex justify-between items-start border-t border-slate-800/80 pt-1.5">
                <span className="text-slate-400 font-bold uppercase tracking-wider text-[9px]">Notes:</span>
                <span className="text-slate-300 font-medium text-right line-clamp-1 max-w-[180px] text-[10px]">{incomingCall.notes}</span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2.5 w-full">
            <button
              onClick={handleDecline}
              disabled={isDeclining || isAttending}
              className="py-2.5 px-3 bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-md shadow-rose-600/30 cursor-pointer disabled:opacity-50"
            >
              <PhoneOff className="w-3.5 h-3.5" />
              {isDeclining ? "Declining..." : "Decline"}
            </button>

            <button
              onClick={handleAttend}
              disabled={isDeclining || isAttending}
              className="py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/40 hover:scale-[1.02] cursor-pointer disabled:opacity-50"
            >
              <Phone className="w-3.5 h-3.5" />
              {isAttending ? "Attending..." : "Attend"}
            </button>
          </div>

          <div className="text-[10px] text-slate-400 mt-2.5 flex items-center gap-1">
            <Volume2 className="w-3 h-3 text-emerald-400 animate-pulse" /> Ringing active session...
          </div>
        </div>
      </div>
    </div>
  );
};
