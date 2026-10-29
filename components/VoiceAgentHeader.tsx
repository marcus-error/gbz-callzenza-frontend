"use client";

import { useAuthStore, useActiveCallStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { ArrowLeft, LogOut, PhoneCall, Phone, Radio, PhoneIncoming } from "lucide-react";
import { useState, useEffect } from "react";
import { AudioDeviceManager } from "./AudioDeviceManager";
import { SimulateInboundModal } from "./inbound/SimulateInboundModal";

export function VoiceAgentHeader() {
  const { user, logout } = useAuthStore();
  const router = useRouter();
  const [time, setTime] = useState(new Date());
  const [showInboundModal, setShowInboundModal] = useState(false);
  
  const { callActive, callDuration, leadName, leadPhone, telephonyStatus, tickDuration } = useActiveCallStore();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      tickDuration();
    }, 1000);
    return () => clearInterval(timer);
  }, [tickDuration]);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleBackToDashboard = () => {
    if (user?.role === "SUPERVISOR") {
      router.push("/supervisor/voice-agents");
    } else if (user?.role === "VOICE_AGENT" || user?.role === "AGENT") {
      router.push("/voice-agent/dashboard");
    } else {
      router.push("/dashboard");
    }
  };

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <header className="h-14 bg-slate-900 border-b border-indigo-900/50 text-slate-100 flex items-center justify-between px-4 shrink-0 z-50">
      {/* Left */}
      <div className="flex items-center gap-3">
        <button 
          onClick={handleBackToDashboard} 
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 rounded-lg text-xs font-semibold tracking-wide transition-colors cursor-pointer"
          title="Back to Dashboard"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </button>
        <div className="flex items-center gap-2 pl-1">
          <PhoneCall className="w-5 h-5 text-indigo-400" />
          <span className="font-bold text-lg tracking-tight">GBZ</span>
        </div>
      </div>

      {/* Center (Date/Time & Live Call Running Timer) */}
      <div className="flex items-center gap-4">
        {callActive ? (
          telephonyStatus === "RINGING" || telephonyStatus === "INITIATING" ? (
            <div className="flex items-center gap-3 px-3 py-1.5 bg-amber-950/80 border border-amber-500/60 rounded-full shadow-lg shadow-amber-950/50">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold tracking-wider uppercase text-amber-400 font-mono">
                  RINGING...
                </span>
              </div>
              {(leadName || leadPhone) && (
                <span className="text-xs font-semibold text-amber-200 hidden md:inline truncate max-w-[150px]">
                  {leadName || leadPhone}
                </span>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-3 px-3 py-1.5 bg-emerald-950/80 border border-emerald-500/60 rounded-full shadow-lg shadow-emerald-950/50">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold tracking-wider uppercase text-emerald-400 font-mono">
                  LIVE CALL
                </span>
                <span className="text-sm font-extrabold font-mono text-white tracking-widest bg-slate-900/80 px-2 py-0.5 rounded border border-emerald-500/40">
                  {formatTime(callDuration)}
                </span>
              </div>
              {(leadName || leadPhone) && (
                <span className="text-xs font-semibold text-emerald-200 hidden md:inline truncate max-w-[150px]">
                  {leadName || leadPhone}
                </span>
              )}
            </div>
          )
        ) : (
          <div className="hidden md:block text-sm font-medium text-slate-300">
            {time.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', timeZone: 'Asia/Kolkata' })} {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'Asia/Kolkata' })}
          </div>
        )}
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        {/* Test Inbound Call Button */}
        <button
          onClick={() => setShowInboundModal(true)}
          className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white rounded-lg text-xs font-semibold tracking-wide transition-all shadow-md shadow-indigo-900/40 cursor-pointer active:scale-95"
          title="Simulate Inbound Call to this Voice Agent"
        >
          <PhoneIncoming className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Test Inbound</span>
        </button>

        {/* Real-time Headphone & Bluetooth Device Indicator */}
        <AudioDeviceManager compact />

        <div className="text-right hidden sm:block">
          <div className="text-sm font-bold leading-none text-white">{user?.id?.substring(0, 4) || "0000"} - {user?.full_name || "Agent"}</div>
        </div>
        <div className="w-px h-5 bg-slate-700 mx-1" />
        <button 
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-rose-400 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span className="hidden sm:inline">Sign Out</span>
        </button>
      </div>

      <SimulateInboundModal
        isOpen={showInboundModal}
        onClose={() => setShowInboundModal(false)}
        defaultAgentType="VOICE"
      />
    </header>
  );
}
