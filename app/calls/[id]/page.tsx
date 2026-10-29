"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { apiFetch } from "@/lib/api-client";
import {
  ArrowLeft,
  User,
  Bot,
  Download,
  Clock,
  FileText,
  FileSpreadsheet,
  Loader2,
  AlertCircle,
  Volume2,
} from "lucide-react";
import {
  callHistoryService,
  CallHistoryDetail,
} from "@/lib/services/call-history-v2.service";
import { AudioPlayer } from "@/components/call-history/AudioPlayer";

export default function CallDetailPage() {
  const params = useParams();
  const router = useRouter();
  const callId = (params?.id as string) || "";

  const [call, setCall] = useState<CallHistoryDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDownloadingAudio, setIsDownloadingAudio] = useState(false);
  const [activePlayerId, setActivePlayerId] = useState<string | null>(null);

  useEffect(() => {
    if (!callId) return;
    setLoading(true);
    setError(null);

    // Try callHistoryService first (v1 detailed endpoint)
    callHistoryService
      .getCallDetail(callId)
      .then((detail) => {
        setCall(detail);
        setLoading(false);
      })
      .catch((err) => {
        // Fallback to legacy endpoint if v2 endpoint is not available
        apiFetch<any>(`/api/voice/calls/${callId}`)
          .then((legacy) => {
            const transformed: CallHistoryDetail = {
              call_id: legacy.id,
              direction: legacy.direction || "OUTBOUND",
              status: legacy.status || "COMPLETED",
              customer_name: legacy.lead_name || "Unknown Recipient",
              customer_phone: legacy.to_number || legacy.from_number || "",
              duration_seconds: legacy.duration_seconds || 0,
              campaign_id: legacy.campaign_id,
              campaign_name: legacy.campaign_name,
              ai_agent_id: legacy.agent_id,
              ai_agent_name: legacy.agent_name,
              human_agent_id: legacy.agent_id,
              human_agent_name: legacy.agent_name,
              agent_type: legacy.agent_type || "AI_VOICE",
              started_at: legacy.initiated_at || legacy.created_at,
              ended_at: legacy.ended_at,
              has_transcript: Boolean(legacy.transcript),
              transcript: legacy.transcript || "",
              ai_summary: legacy.ai_summary || null,
              turn_count: legacy.turn_count || 0,
              call_sid: legacy.call_sid,
              from_number: legacy.from_number,
              to_number: legacy.to_number,
              recording: {
                status: legacy.recording_url ? "ready" : "not_recorded",
                is_synthetic: Boolean(legacy.recording_url?.includes("/recordings/")),
                segments: legacy.recording_url
                  ? [
                      {
                        segment_index: 0,
                        format: legacy.recording_url.endsWith(".mp3") ? "mp3" : "wav",
                        status: "ready",
                        duration_ms: (legacy.duration_seconds || 0) * 1000,
                      },
                    ]
                  : [],
              },
            };
            setCall(transformed);
            setLoading(false);
          })
          .catch((fallbackErr) => {
            setError(err?.message || fallbackErr?.message || "Call not found");
            setLoading(false);
          });
      });
  }, [callId]);

  const handleDownloadAudio = async () => {
    if (!call || isDownloadingAudio) return;
    setIsDownloadingAudio(true);
    try {
      const data = await callHistoryService.getStreamUrl(call.call_id, 0);
      if (data?.download_url) {
        const link = document.createElement("a");
        link.href = data.download_url;
        link.setAttribute("download", `call_${call.call_id.slice(0, 8)}.wav`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (err: any) {
      console.warn("[CallDetail] Download via token failed, trying fallback:", err);
      // Fallback direct url
      window.open(`/api/v1/call-history/calls/${call.call_id}/recording/stream`, "_blank");
    } finally {
      setIsDownloadingAudio(false);
    }
  };

  const handleDownloadReport = async (format: "csv" | "pdf") => {
    if (!call) return;
    if (format === "csv") {
      try {
        await callHistoryService.downloadSingleCallCsv(call.call_id);
      } catch (err) {
        console.error("Single call report download error:", err);
        const url = callHistoryService.getSingleCallReportUrl(call.call_id, format);
        window.open(url, "_blank");
      }
    } else {
      const url = callHistoryService.getSingleCallReportUrl(call.call_id, format);
      window.open(url, "_blank");
    }
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const hasRecording =
    call?.recording?.status !== "not_recorded" && call?.recording?.status !== "failed";

  return (
    <AppShell>
      {/* Top Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.back()}
            className="hover:bg-slate-100"
            aria-label="Back to call history"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Call Analysis & Details</h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Call ID: <span className="font-mono text-slate-700">{callId}</span>
            </p>
          </div>
        </div>

        {call && (
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleDownloadReport("pdf")}
              className="text-xs font-semibold flex items-center gap-1.5 h-8 border-slate-200"
            >
              <FileText className="h-3.5 w-3.5 text-rose-500" /> PDF Summary
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleDownloadReport("csv")}
              className="text-xs font-semibold flex items-center gap-1.5 h-8 border-slate-200"
            >
              <FileSpreadsheet className="h-3.5 w-3.5 text-emerald-600" /> CSV Data
            </Button>
          </div>
        )}
      </div>

      {/* Loading State */}
      {loading && (
        <div className="p-12 text-center">
          <Loader2 className="h-8 w-8 animate-spin text-indigo-600 mx-auto mb-3" />
          <p className="text-sm text-slate-500">Loading call details and recording...</p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <Card className="p-8 text-center border-rose-200 bg-rose-50/50 mb-6">
          <AlertCircle className="h-8 w-8 text-rose-500 mx-auto mb-2" />
          <h2 className="text-base font-semibold text-rose-800">Unable to load call</h2>
          <p className="text-xs text-rose-600 mt-1">{error}</p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => router.back()}
            className="mt-4 text-xs bg-white"
          >
            Back to Call History
          </Button>
        </Card>
      )}

      {/* Main Content */}
      {call && !loading && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Transcript & AI Summary */}
          <div className="lg:col-span-2 space-y-6">
            {/* AI Summary Card (if present) */}
            {call.ai_summary && (
              <Card className="p-6 border border-indigo-100 bg-gradient-to-br from-indigo-50/30 to-white shadow-sm rounded-xl">
                <h2 className="text-base font-bold text-indigo-950 mb-2 flex items-center gap-2">
                  <Bot className="h-4 w-4 text-indigo-600" /> AI Call Summary & Key Takeaways
                </h2>
                <p className="text-xs text-slate-700 leading-relaxed bg-white/80 p-3.5 rounded-lg border border-indigo-100/60 whitespace-pre-wrap">
                  {call.ai_summary}
                </p>
              </Card>
            )}

            {/* Conversation Transcript Card */}
            <Card className="p-6 border border-slate-200 shadow-sm rounded-xl">
              <div className="flex items-center justify-between mb-4 border-b pb-3">
                <h2 className="text-base font-bold text-slate-900">Conversation Transcript</h2>
                <Badge variant="outline" className="text-[11px] font-medium bg-slate-50">
                  {call.turn_count ? `${call.turn_count} turns` : "Full transcript"}
                </Badge>
              </div>

              <div className="space-y-4 max-h-[550px] overflow-y-auto pr-2">
                {call.transcript ? (
                  call.transcript.split("\n").map((line, idx) => {
                    if (!line.trim()) return null;
                    const isAgent =
                      line.startsWith("AI:") ||
                      line.startsWith("Agent:") ||
                      line.toLowerCase().includes("agent:");
                    return (
                      <div
                        key={idx}
                        className={`flex gap-3 items-start ${
                          isAgent ? "" : "flex-row-reverse"
                        }`}
                      >
                        <div
                          className={`p-2 rounded-full flex-shrink-0 ${
                            isAgent
                              ? "bg-indigo-50 text-indigo-600 border border-indigo-100"
                              : "bg-slate-100 text-slate-600 border border-slate-200"
                          }`}
                        >
                          {isAgent ? (
                            <Bot className="h-3.5 w-3.5" />
                          ) : (
                            <User className="h-3.5 w-3.5" />
                          )}
                        </div>
                        <div
                          className={`rounded-xl px-4 py-2.5 max-w-[80%] text-xs leading-relaxed shadow-xs ${
                            isAgent
                              ? "bg-indigo-50/60 text-slate-800 border border-indigo-100/80"
                              : "bg-slate-100 text-slate-800 border border-slate-200"
                          }`}
                        >
                          {line}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-slate-400 text-xs text-center py-8">
                    No transcript available for this call.
                  </p>
                )}
              </div>
            </Card>
          </div>

          {/* Right Column: Audio Recording + Metadata */}
          <div className="space-y-6">
            {/* Audio Recording Card */}
            <Card className="p-6 space-y-4 border border-indigo-100 shadow-sm rounded-xl bg-white">
              <div className="flex items-center justify-between border-b pb-3">
                <div className="flex items-center gap-2">
                  <Volume2 className="h-4 w-4 text-indigo-600" />
                  <h2 className="text-base font-bold text-slate-900">Call Audio</h2>
                </div>
                {call.recording?.is_synthetic && (
                  <Badge className="bg-amber-50 text-amber-700 border-amber-200 text-[10px] font-semibold uppercase tracking-wider">
                    AI Replay
                  </Badge>
                )}
              </div>

              {/* Streaming Audio Player */}
              <div className="pt-1">
                {hasRecording ? (
                  <div className="space-y-3">
                    <AudioPlayer
                      callId={call.call_id}
                      recording={call.recording}
                      activePlayerId={activePlayerId}
                      onPlayStart={(id) => setActivePlayerId(id)}
                      onPlayEnd={() => setActivePlayerId(null)}
                    />

                    {/* Direct Download Audio Button */}
                    <Button
                      onClick={handleDownloadAudio}
                      disabled={isDownloadingAudio}
                      className="w-full flex items-center justify-center gap-2 h-10 font-bold text-xs bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm cursor-pointer transition-all rounded-lg"
                    >
                      {isDownloadingAudio ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Download className="w-4 h-4" />
                      )}
                      <span>
                        {isDownloadingAudio ? "Preparing Audio Download..." : "Download Audio (WAV)"}
                      </span>
                    </Button>
                  </div>
                ) : (
                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-center">
                    <p className="text-xs text-slate-500 font-medium">
                      No recording available for this call
                    </p>
                    <Button
                      disabled
                      variant="outline"
                      size="sm"
                      className="mt-2 text-xs opacity-50 cursor-not-allowed"
                    >
                      <Download className="w-3.5 h-3.5 mr-1" /> Audio Not Recorded
                    </Button>
                  </div>
                )}
              </div>
            </Card>

            {/* Metadata Card */}
            <Card className="p-6 space-y-3 border border-slate-200 shadow-sm rounded-xl bg-white">
              <h2 className="text-base font-bold text-slate-900 border-b pb-2">Call Information</h2>
              <div className="text-xs space-y-2.5">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-500">Recipient</span>
                  <span className="font-semibold text-slate-900">{call.customer_name || "Unknown"}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-500">Phone Number</span>
                  <span className="font-mono text-slate-900">{call.customer_phone || call.to_number || call.from_number || "—"}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-500">Agent</span>
                  <span className="font-semibold text-slate-900">
                    {call.human_agent_name || call.ai_agent_name || "Default Agent"}
                  </span>
                </div>
                {call.campaign_name && (
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-slate-500">Campaign</span>
                    <span className="font-medium text-slate-900">{call.campaign_name}</span>
                  </div>
                )}
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-500">Direction</span>
                  <Badge variant="outline" className="text-[10px] font-semibold">
                    {call.direction}
                  </Badge>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-500">Status</span>
                  <Badge variant="outline" className="text-[10px] font-semibold bg-slate-50">
                    {call.status}
                  </Badge>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-500">Duration</span>
                  <span className="font-mono font-bold text-indigo-700">
                    {formatDuration(call.duration_seconds || 0)} ({call.duration_seconds}s)
                  </span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-500">Started At</span>
                  <span className="text-slate-700 font-mono">
                    {call.started_at ? new Date(call.started_at).toLocaleString() : "—"}
                  </span>
                </div>
                {call.ended_at && (
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-slate-500">Ended At</span>
                    <span className="text-slate-700 font-mono">
                      {new Date(call.ended_at).toLocaleString()}
                    </span>
                  </div>
                )}
                {call.call_result && (
                  <div className="flex justify-between">
                    <span className="text-slate-500">Outcome</span>
                    <span className="font-semibold text-slate-900">{call.call_result}</span>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      )}
    </AppShell>
  );
}
