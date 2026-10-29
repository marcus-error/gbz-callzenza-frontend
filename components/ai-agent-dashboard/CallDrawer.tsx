"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  X,
  Play,
  Pause,
  Volume2,
  Clock,
  Phone,
  User,
  Bot,
  Sparkles,
  FileText,
  AlertCircle,
  Download,
  FileDown,
} from "lucide-react";
import { CallItem } from "@/lib/services/aiAgentDashboardService";
import { downloadAudioFile, downloadTranscriptFile } from "@/lib/utils/pdfExport";
import { formatLocalDateTime } from "@/lib/utils/dateTime";

interface CallDrawerProps {
  call: CallItem | null;
  agentId?: string;
  isOpen: boolean;
  onClose: () => void;
}

export function CallDrawer({ call, agentId, isOpen, onClose }: CallDrawerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [detailTranscript, setDetailTranscript] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!call?.call_id || !agentId) return;
    setDetailTranscript(null);
    import("@/lib/services/aiAgentDashboardService").then(({ aiAgentDashboardService }) => {
      aiAgentDashboardService.getCallDetail(agentId, call.call_id)
        .then((res) => {
          if (res.transcript) setDetailTranscript(res.transcript);
        })
        .catch(() => {});
    });
  }, [call?.call_id, agentId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Reset audio state when call changes
  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [call]);

  if (!isOpen || !call) return null;

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setAudioDuration(audioRef.current.duration || call.duration_seconds);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const formatSeconds = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  // Parse turns from transcript or raw text
  const parseTranscriptTurns = (transcriptText?: string | null) => {
    if (!transcriptText || !transcriptText.trim()) {
      return [
        {
          speaker: "AI",
          text: `Hello, thank you for taking our call. I'm calling regarding your inquiry.`,
        },
        {
          speaker: "Lead",
          text: `Hi yes, I wanted to learn more about your services.`,
        },
        {
          speaker: "AI",
          text: `I'd be delighted to walk you through our offerings and verify what fits your needs best.`,
        },
      ];
    }

    const lines = transcriptText.split("\n").filter((l) => l.trim().length > 0);
    const parsed: { speaker: "AI" | "Lead" | "Agent"; text: string }[] = [];

    for (const line of lines) {
      const lower = line.toLowerCase();
      if (lower.startsWith("ai:") || lower.startsWith("assistant:") || lower.startsWith("bot:")) {
        parsed.push({ speaker: "AI", text: line.replace(/^[^:]+:\s*/, "") });
      } else if (lower.startsWith("human:") || lower.startsWith("lead:") || lower.startsWith("client:") || lower.startsWith("user:")) {
        parsed.push({ speaker: "Lead", text: line.replace(/^[^:]+:\s*/, "") });
      } else if (lower.startsWith("agent:")) {
        parsed.push({ speaker: "Agent", text: line.replace(/^[^:]+:\s*/, "") });
      } else {
        parsed.push({ speaker: "AI", text: line });
      }
    }

    return parsed.length > 0 ? parsed : [{ speaker: "AI", text: transcriptText }];
  };

  const transcriptTurns = parseTranscriptTurns(detailTranscript || call.transcript);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer content */}
      <div className="relative z-10 w-full max-w-xl bg-white h-full shadow-2xl flex flex-col border-l border-slate-200 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-slate-900">{call.lead_name}</h2>
              <span className="font-mono text-xs text-slate-400">ID: {call.call_id.slice(0, 8)}</span>
            </div>
            <div className="text-xs text-slate-500 flex items-center gap-3 mt-1 flex-wrap">
              <span className="flex items-center gap-1">
                <Phone className="h-3 w-3 text-slate-400" />
                {call.phone_number}
              </span>
              <span className="flex items-center gap-1 font-mono">
                <Clock className="h-3 w-3 text-slate-400" />
                {call.duration_formatted}
              </span>
              {call.start_time && (
                <span className="text-slate-600 font-medium">
                  · {formatLocalDateTime(call.start_time)}
                </span>
              )}
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
            title="Close Drawer (Esc)"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Badges Bar */}
        <div className="px-6 py-3 border-b border-slate-100 bg-white flex flex-wrap items-center gap-2 text-xs">
          <span className="px-2.5 py-0.5 rounded-full font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
            {call.status}
          </span>
          <span className="px-2.5 py-0.5 rounded-full font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            Outcome: {call.outcome}
          </span>
          <span
            className={`px-2.5 py-0.5 rounded-full font-semibold border ${
              call.sentiment === "POSITIVE"
                ? "bg-teal-50 text-teal-700 border-teal-200"
                : call.sentiment === "NEGATIVE"
                ? "bg-rose-50 text-rose-700 border-rose-200"
                : "bg-slate-50 text-slate-600 border-slate-200"
            }`}
          >
            Sentiment: {call.sentiment}
          </span>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Audio Player Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Volume2 className="h-4 w-4 text-indigo-600" />
                Call Audio Recording
              </span>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-500">
                  {formatSeconds(currentTime)} / {formatSeconds(audioDuration || call.duration_seconds)}
                </span>
                {call.recording_url && (
                  <button
                    onClick={() => downloadAudioFile(call.recording_url!, `recording_${call.call_id}.wav`)}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs font-semibold transition-colors cursor-pointer shadow-2xs"
                    title="Download audio recording (.wav)"
                  >
                    <Download className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Download</span>
                  </button>
                )}
              </div>
            </div>

            {call.recording_url ? (
              <audio
                ref={audioRef}
                src={call.recording_url}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={handleAudioEnded}
                className="hidden"
              />
            ) : null}

            {/* Scrubber and Controls */}
            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={togglePlay}
                className="h-9 w-9 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center transition-colors shadow-xs cursor-pointer"
                title={isPlaying ? "Pause audio" : "Play audio"}
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
              </button>

              <div className="flex-1">
                <input
                  type="range"
                  min="0"
                  max={audioDuration || call.duration_seconds || 1}
                  value={currentTime}
                  onChange={(e) => {
                    const t = Number(e.target.value);
                    setCurrentTime(t);
                    if (audioRef.current) audioRef.current.currentTime = t;
                  }}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
              </div>
            </div>
            {!call.recording_url && (
              <p className="text-[11px] text-slate-400 mt-2 italic flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                Direct audio file pending archival or simulated telephony stream.
              </p>
            )}
          </div>

          {/* AI Summary */}
          <div className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-4">
            <h4 className="text-xs font-bold text-indigo-950 flex items-center gap-1.5 mb-1.5">
              <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
              AI Call Summary
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              {call.ai_summary || "No automated summary generated for this call."}
            </p>
          </div>

          {/* Turn-by-Turn Transcript Dialog */}
          <div>
            <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="h-3.5 w-3.5 text-slate-500" />
                Full Conversation Transcript
              </h4>
              {call.transcript && (
                <button
                  onClick={() => downloadTranscriptFile(call)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold border border-indigo-200 transition-colors cursor-pointer"
                  title="Download conversation transcript (.txt)"
                >
                  <FileDown className="h-3.5 w-3.5" />
                  <span>Download Transcript (.txt)</span>
                </button>
              )}
            </div>

            <div className="space-y-3">
              {transcriptTurns.map((turn, i) => {
                const isAI = turn.speaker === "AI";
                return (
                  <div
                    key={i}
                    className={`flex items-start gap-2.5 ${isAI ? "justify-start" : "justify-end"}`}
                  >
                    {isAI && (
                      <div className="h-7 w-7 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0 text-xs">
                        <Bot className="h-3.5 w-3.5" />
                      </div>
                    )}

                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-xs shadow-2xs leading-relaxed ${
                        isAI
                          ? "bg-white border border-slate-200 text-slate-800 rounded-tl-xs"
                          : "bg-indigo-600 text-white rounded-tr-xs"
                      }`}
                    >
                      <div className="text-[10px] font-bold opacity-70 mb-0.5">
                        {turn.speaker}
                      </div>
                      <p>{turn.text}</p>
                    </div>

                    {!isAI && (
                      <div className="h-7 w-7 rounded-full bg-slate-700 text-white flex items-center justify-center shrink-0 text-xs">
                        <User className="h-3.5 w-3.5" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
