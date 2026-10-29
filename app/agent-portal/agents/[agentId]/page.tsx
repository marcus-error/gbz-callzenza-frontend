"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  BarChart3,
  PhoneCall,
  History,
  FileText,
  Layers,
  Volume2,
  ShieldOff,
  HeadphonesIcon,
  UserCheck,
  CheckCircle2,
  RefreshCw,
  AlertCircle,
  Loader2,
  Download,
  FileDown,
  Play,
  Clock,
  User,
  Phone,
  Search,
} from "lucide-react";
import { AgentPortalHeader } from "@/components/agent-portal/AgentPortalHeader";
import { AgentKpiCards } from "@/components/ai-agent-dashboard/AgentKpiCards";
import { TabOverview } from "@/components/ai-agent-dashboard/TabOverview";
import { TabCalls } from "@/components/ai-agent-dashboard/TabCalls";
import { TabHistory } from "@/components/ai-agent-dashboard/TabHistory";
import { TabQueue } from "@/components/ai-agent-dashboard/TabQueue";
import { TabTranscripts } from "@/components/ai-agent-dashboard/TabTranscripts";
import { CallDrawer } from "@/components/ai-agent-dashboard/CallDrawer";
import { usePortalAgentReport, PortalTab } from "@/lib/hooks/useAgentPortal";
import { useAuthStore } from "@/lib/store";
import { CallItem } from "@/lib/services/aiAgentDashboardService";
import { agentPortalService } from "@/lib/services/agentPortalService";
import {
  exportAgentReportToPdf,
  downloadAudioFile,
  downloadAllTranscriptsFile,
  exportCallsToCsv,
} from "@/lib/utils/pdfExport";
import { formatLocalDateTime } from "@/lib/utils/dateTime";
import {
  PortalRecordingItem,
  PortalBlacklistItem,
  PortalVoiceItem,
  PortalQualifiedLeadItem,
  PortalCompletedCallItem,
} from "@/lib/services/agentPortalService";

// ─────────────────────────────────────────────────────────
// Helper formatters
// ─────────────────────────────────────────────────────────
function formatDuration(sec: number): string {
  if (!sec || sec <= 0) return "—";
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return m > 0 ? `${m}m ${s}s` : `${s}s`;
}

function formatDate(iso: string | null | undefined): string {
  if (!iso) return "—";
  return formatLocalDateTime(iso);
}

function Unavailable({ reason }: { reason?: string | null }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center space-y-3">
      <AlertCircle className="h-8 w-8 text-slate-600" />
      <p className="text-slate-500 text-sm font-medium">Data not available</p>
      {reason && <p className="text-slate-600 text-xs max-w-xs">{reason}</p>}
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Recordings tab
// ─────────────────────────────────────────────────────────
function TabRecordings({
  recordings,
  loading,
  available,
}: {
  recordings: PortalRecordingItem[];
  loading: boolean;
  available: boolean;
}) {
  if (loading) return <TabSkeleton rows={6} />;
  if (!available) return <Unavailable reason="Call recordings are not configured for this agent." />;
  if (recordings.length === 0)
    return <Unavailable reason="No recordings found for this agent." />;

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs">
        <thead>
          <tr className="text-slate-500 border-b border-slate-800">
            <th className="text-left py-3 px-4 font-semibold">Customer</th>
            <th className="text-left py-3 px-4 font-semibold">Phone</th>
            <th className="text-left py-3 px-4 font-semibold">Duration</th>
            <th className="text-left py-3 px-4 font-semibold">Status</th>
            <th className="text-left py-3 px-4 font-semibold">Date</th>
            <th className="text-left py-3 px-4 font-semibold">Recording</th>
          </tr>
        </thead>
        <tbody>
          {recordings.map((r) => (
            <tr key={r.call_id} className="border-b border-slate-800/60 hover:bg-slate-800/30 transition-colors">
              <td className="py-3 px-4 font-medium text-slate-200">{r.customer_name || "—"}</td>
              <td className="py-3 px-4 text-slate-400">{r.phone_number}</td>
              <td className="py-3 px-4 text-slate-400">{r.duration_formatted || formatDuration(r.duration_seconds)}</td>
              <td className="py-3 px-4">
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                  {r.status}
                </span>
              </td>
              <td className="py-3 px-4 text-slate-400">{formatDate(r.created_at)}</td>
              <td className="py-3 px-4">
                {r.recording_url ? (
                  <div className="flex items-center gap-2">
                    <a
                      href={r.recording_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 hover:text-indigo-300 transition-colors font-semibold border border-indigo-500/20"
                    >
                      <Play className="h-3 w-3" /> Play
                    </a>
                    <button
                      onClick={() => downloadAudioFile(r.recording_url!, `recording_${r.call_id}.wav`)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors font-semibold border border-slate-700 cursor-pointer"
                      title="Download audio recording (.wav)"
                    >
                      <Download className="h-3 w-3 text-emerald-400" />
                      <span>Download</span>
                    </button>
                  </div>
                ) : (
                  <span className="text-slate-600">—</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Blacklist tab
// ─────────────────────────────────────────────────────────
function TabBlacklist({
  blacklist,
  loading,
  available,
}: {
  blacklist: PortalBlacklistItem[];
  loading: boolean;
  available: boolean;
}) {
  if (loading) return <TabSkeleton rows={6} />;
  if (!available) return <Unavailable reason="Blacklist data is not available for this agent." />;
  if (blacklist.length === 0)
    return <Unavailable reason="No blacklisted numbers for this agent." />;

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs">
        <thead>
          <tr className="text-slate-500 border-b border-slate-800">
            <th className="text-left py-3 px-4 font-semibold">Name</th>
            <th className="text-left py-3 px-4 font-semibold">Phone</th>
            <th className="text-left py-3 px-4 font-semibold">Status</th>
            <th className="text-left py-3 px-4 font-semibold">Reason</th>
            <th className="text-left py-3 px-4 font-semibold">Added</th>
          </tr>
        </thead>
        <tbody>
          {blacklist.map((b) => (
            <tr key={b.id} className="border-b border-slate-800/60 hover:bg-slate-800/30 transition-colors">
              <td className="py-3 px-4 font-medium text-slate-200">{b.name || "—"}</td>
              <td className="py-3 px-4 text-slate-400">{b.phone}</td>
              <td className="py-3 px-4">
                <span className="px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 text-[10px] font-bold border border-rose-500/20">
                  {b.status}
                </span>
              </td>
              <td className="py-3 px-4 text-slate-500">{b.reason || "—"}</td>
              <td className="py-3 px-4 text-slate-400">{formatDate(b.added_at)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Voice / Handoffs tab
// ─────────────────────────────────────────────────────────
function TabVoice({
  voiceCalls,
  loading,
  available,
  reason,
}: {
  voiceCalls: PortalVoiceItem[];
  loading: boolean;
  available: boolean;
  reason?: string | null;
}) {
  if (loading) return <TabSkeleton rows={6} />;
  if (!available) return <Unavailable reason={reason || "Voice handoff data is not available for this agent."} />;
  if (voiceCalls.length === 0)
    return <Unavailable reason="No voice handoffs have occurred for this agent." />;

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs">
        <thead>
          <tr className="text-slate-500 border-b border-slate-800">
            <th className="text-left py-3 px-4 font-semibold">Customer</th>
            <th className="text-left py-3 px-4 font-semibold">Phone</th>
            <th className="text-left py-3 px-4 font-semibold">Agent</th>
            <th className="text-left py-3 px-4 font-semibold">Transfer Status</th>
            <th className="text-left py-3 px-4 font-semibold">Duration</th>
            <th className="text-left py-3 px-4 font-semibold">Recording</th>
          </tr>
        </thead>
        <tbody>
          {voiceCalls.map((v) => (
            <tr key={v.call_id} className="border-b border-slate-800/60 hover:bg-slate-800/30 transition-colors">
              <td className="py-3 px-4 font-medium text-slate-200">{v.customer_name}</td>
              <td className="py-3 px-4 text-slate-400">{v.customer_phone}</td>
              <td className="py-3 px-4 text-slate-400">{v.agent_name || "—"}</td>
              <td className="py-3 px-4">
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                    v.transfer_status === "completed"
                      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                      : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                  }`}
                >
                  {v.transfer_status}
                </span>
              </td>
              <td className="py-3 px-4 text-slate-400">{formatDuration(v.duration_seconds)}</td>
              <td className="py-3 px-4">
                {v.recording_url ? (
                  <a
                    href={v.recording_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 font-semibold"
                  >
                    <Play className="h-3 w-3" /> Play
                  </a>
                ) : (
                  <span className="text-slate-600">—</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Qualified Leads tab
// ─────────────────────────────────────────────────────────
function TabQualified({
  qualifiedLeads,
  loading,
  available,
}: {
  qualifiedLeads: PortalQualifiedLeadItem[];
  loading: boolean;
  available: boolean;
}) {
  if (loading) return <TabSkeleton rows={6} />;
  if (!available) return <Unavailable reason="Qualified leads data is not available for this agent." />;
  if (qualifiedLeads.length === 0)
    return <Unavailable reason="No qualified leads found for this agent." />;

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs">
        <thead>
          <tr className="text-slate-500 border-b border-slate-800">
            <th className="text-left py-3 px-4 font-semibold">Name</th>
            <th className="text-left py-3 px-4 font-semibold">Phone</th>
            <th className="text-left py-3 px-4 font-semibold">Company</th>
            <th className="text-left py-3 px-4 font-semibold">Status</th>
            <th className="text-left py-3 px-4 font-semibold">Score</th>
            <th className="text-left py-3 px-4 font-semibold">Qualified</th>
          </tr>
        </thead>
        <tbody>
          {qualifiedLeads.map((q) => (
            <tr key={q.lead_id} className="border-b border-slate-800/60 hover:bg-slate-800/30 transition-colors">
              <td className="py-3 px-4 font-medium text-slate-200">{q.name}</td>
              <td className="py-3 px-4 text-slate-400">{q.phone}</td>
              <td className="py-3 px-4 text-slate-500">{q.company || "—"}</td>
              <td className="py-3 px-4">
                <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-bold border border-indigo-500/20">
                  {q.qualification_status}
                </span>
              </td>
              <td className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-500 rounded-full"
                      style={{ width: `${Math.min(100, q.score)}%` }}
                    />
                  </div>
                  <span className="text-slate-400">{q.score}</span>
                </div>
              </td>
              <td className="py-3 px-4 text-slate-400">{formatDate(q.qualified_at)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Completed Calls tab
// ─────────────────────────────────────────────────────────
function TabCompleted({
  completedCalls,
  loading,
  available,
}: {
  completedCalls: PortalCompletedCallItem[];
  loading: boolean;
  available: boolean;
}) {
  if (loading) return <TabSkeleton rows={6} />;
  if (!available) return <Unavailable reason="Completed call data is not available for this agent." />;
  if (completedCalls.length === 0)
    return <Unavailable reason="No completed calls found for this agent." />;

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs">
        <thead>
          <tr className="text-slate-500 border-b border-slate-800">
            <th className="text-left py-3 px-4 font-semibold">Customer</th>
            <th className="text-left py-3 px-4 font-semibold">Destination</th>
            <th className="text-left py-3 px-4 font-semibold">Duration</th>
            <th className="text-left py-3 px-4 font-semibold">Status</th>
            <th className="text-left py-3 px-4 font-semibold">Outcome</th>
            <th className="text-left py-3 px-4 font-semibold">Sentiment</th>
            <th className="text-left py-3 px-4 font-semibold">Completed</th>
          </tr>
        </thead>
        <tbody>
          {completedCalls.map((c) => (
            <tr key={c.call_id} className="border-b border-slate-800/60 hover:bg-slate-800/30 transition-colors">
              <td className="py-3 px-4 font-medium text-slate-200">{c.customer_name}</td>
              <td className="py-3 px-4 text-slate-400">{c.destination}</td>
              <td className="py-3 px-4 text-slate-400">{c.duration_formatted || formatDuration(c.duration_seconds)}</td>
              <td className="py-3 px-4">
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                  {c.status}
                </span>
              </td>
              <td className="py-3 px-4 text-slate-400">{c.outcome || "—"}</td>
              <td className="py-3 px-4">
                {c.sentiment ? (
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                      c.sentiment === "POSITIVE"
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                        : c.sentiment === "NEGATIVE"
                        ? "bg-rose-500/10 text-rose-400 border-rose-500/20"
                        : "bg-slate-500/10 text-slate-400 border-slate-500/20"
                    }`}
                  >
                    {c.sentiment}
                  </span>
                ) : (
                  <span className="text-slate-600">—</span>
                )}
              </td>
              <td className="py-3 px-4 text-slate-400">{formatDate(c.completed_at)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Skeleton loader for tabs
// ─────────────────────────────────────────────────────────
function TabSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="animate-pulse space-y-3 p-4">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="h-10 bg-slate-800 rounded-lg opacity-60" style={{ opacity: 0.6 - i * 0.08 }} />
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Tab definitions
// ─────────────────────────────────────────────────────────
const TABS: { key: PortalTab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: "overview", label: "Overview", icon: BarChart3 },
  { key: "calls", label: "Calls", icon: PhoneCall },
  { key: "queue", label: "Queue", icon: Layers },
  { key: "history", label: "History", icon: History },
  { key: "recordings", label: "Recordings", icon: Volume2 },
  { key: "transcripts", label: "Transcripts", icon: FileText },
  { key: "blacklist", label: "Blacklist", icon: ShieldOff },
  { key: "voice", label: "Voice & Handoffs", icon: HeadphonesIcon },
  { key: "qualified", label: "Qualified Leads", icon: UserCheck },
  { key: "completed", label: "Completed Calls", icon: CheckCircle2 },
];

// ─────────────────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────────────────
export default function AgentPortalAgentReportPage() {
  const params = useParams();
  const router = useRouter();
  const agentId = (params?.agentId as string) || "";
  const { token, user } = useAuthStore();

  // Auth guard
  useEffect(() => {
    if (!token || user?.role !== "AI_AGENT_PORTAL_USER") {
      router.replace("/agent-portal/login");
    }
  }, [token, user, router]);

  const [activeTab, setActiveTab] = useState<PortalTab>("overview");
  const [callsPage, setCallsPage] = useState(1);

  // Drawer state
  const [selectedCall, setSelectedCall] = useState<CallItem | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleOpenCallDrawer = useCallback((call: CallItem) => {
    setSelectedCall(call);
    setDrawerOpen(true);
  }, []);

  const filters = useMemo(() => ({ page: callsPage, page_size: 20 }), [callsPage]);

  const {
    loading,
    error,
    summary,
    callsPage: callsData,
    queuePage,
    historyPage,
    transcriptsResult,
    recordings,
    blacklist,
    voiceCalls,
    qualifiedLeads,
    completedCalls,
    tabCurrentPage,
    setTabCurrentPage,
    refetch,
  } = usePortalAgentReport(agentId, filters, activeTab);

  const agentName = summary?.agent?.name;

  const [exportingPdf, setExportingPdf] = useState(false);
  const [exportingCsv, setExportingCsv] = useState(false);
  const [exportingTranscripts, setExportingTranscripts] = useState(false);

  const handleExportPdf = useCallback(async () => {
    if (!summary) return;
    setExportingPdf(true);
    try {
      let campaignsList: any[] = [];
      try {
        const campRes = await agentPortalService.getCampaigns(agentId);
        campaignsList = campRes?.campaigns || [];
      } catch {}
      exportAgentReportToPdf(summary, callsData?.items || [], campaignsList);
    } catch (e) {
      console.error("PDF generation failed:", e);
    } finally {
      setExportingPdf(false);
    }
  }, [summary, agentId, callsData]);

  const handleExportCsv = useCallback(async () => {
    setExportingCsv(true);
    try {
      let callsList = callsData?.items || [];
      if (callsList.length === 0) {
        const res = await agentPortalService.getCalls(agentId, { page_size: 100 });
        callsList = res?.items || [];
      }
      exportCallsToCsv(callsList, agentName || "AI_Agent");
    } catch (e) {
      console.error("CSV export failed:", e);
    } finally {
      setExportingCsv(false);
    }
  }, [callsData, agentId, agentName]);

  const handleExportAllTranscripts = useCallback(async () => {
    setExportingTranscripts(true);
    try {
      let callsList = callsData?.items || [];
      if (callsList.length === 0) {
        const res = await agentPortalService.getCalls(agentId, { page_size: 100 });
        callsList = res?.items || [];
      }
      downloadAllTranscriptsFile(callsList, agentName || "AI_Agent");
    } catch (e) {
      console.error("Transcripts export failed:", e);
    } finally {
      setExportingTranscripts(false);
    }
  }, [callsData, agentId, agentName]);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <AgentPortalHeader
        currentAgentId={agentId}
        currentAgentName={agentName}
      />

      <div className="w-full px-4 sm:px-6 lg:px-10 py-7 space-y-6">
        {/* Top Back Navigation Bar */}
        <div className="flex items-center justify-between">
          <Link
            href="/agent-portal/agents"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/40 text-slate-400 hover:text-white text-xs font-semibold transition-all cursor-pointer shadow-sm group"
          >
            <ArrowLeft className="h-3.5 w-3.5 text-slate-400 group-hover:text-indigo-400 group-hover:-translate-x-1 transition-all" />
            <span>Back to All Agents</span>
          </Link>
        </div>

        {/* Agent title + Actions */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3.5">
            <button
              suppressHydrationWarning
              onClick={() => router.push("/agent-portal/agents")}
              className="flex items-center justify-center h-11 w-11 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/40 text-slate-400 hover:text-white transition-all cursor-pointer shrink-0 group shadow-sm"
              title="Back to Agents list"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-0.5 transition-transform text-slate-400 group-hover:text-indigo-400" />
            </button>
            <div>
              {loading && !agentName ? (
                <div className="h-7 w-52 bg-slate-800 rounded-lg animate-pulse mb-2" />
              ) : (
                <h1 className="text-2xl font-extrabold tracking-tight text-white mb-0.5">
                  {agentName || "AI Agent Report"}
                </h1>
              )}
              {summary?.agent && (
                <p className="text-xs text-slate-500">
                  {summary.agent.type}
                  {summary.agent.phone_number && ` · ${summary.agent.phone_number}`}
                  {" · "}
                  <span
                    className={`font-semibold ${
                      summary.agent.status === "active" ? "text-emerald-400" : "text-slate-500"
                    }`}
                  >
                    {summary.agent.status}
                  </span>
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              suppressHydrationWarning
              onClick={handleExportPdf}
              disabled={exportingPdf || !summary}
              className="flex items-center gap-2 px-3.5 py-2 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white rounded-xl text-xs font-bold transition-all cursor-pointer disabled:opacity-50 shadow-md shadow-indigo-500/20 active:scale-[0.98]"
              title="Download overall agent performance report in PDF format"
            >
              <FileDown className={`h-4 w-4 ${exportingPdf ? "animate-bounce" : ""}`} />
              <span>{exportingPdf ? "Generating PDF…" : "Download Report (PDF)"}</span>
            </button>

            <button
              suppressHydrationWarning
              onClick={handleExportAllTranscripts}
              disabled={exportingTranscripts}
              className="flex items-center gap-2 px-3 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/40 text-slate-300 hover:text-white rounded-xl text-xs font-semibold transition-all cursor-pointer disabled:opacity-50"
              title="Download all conversation transcripts in .txt format"
            >
              <FileText className={`h-3.5 w-3.5 text-indigo-400 ${exportingTranscripts ? "animate-bounce" : ""}`} />
              <span>{exportingTranscripts ? "Downloading…" : "All Transcripts (.txt)"}</span>
            </button>

            <button
              suppressHydrationWarning
              onClick={handleExportCsv}
              disabled={exportingCsv}
              className="flex items-center gap-2 px-3 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/40 text-slate-300 hover:text-white rounded-xl text-xs font-semibold transition-all cursor-pointer disabled:opacity-50"
              title="Export all call telemetry and outcomes to CSV"
            >
              <Download className={`h-3.5 w-3.5 text-emerald-400 ${exportingCsv ? "animate-bounce" : ""}`} />
              <span>{exportingCsv ? "Exporting…" : "Calls (.csv)"}</span>
            </button>

            <button
              suppressHydrationWarning
              onClick={refetch}
              disabled={loading}
              className="flex items-center gap-2 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white rounded-xl text-xs font-semibold transition-all cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </button>
          </div>
        </div>

        {/* Error banner */}
        {error && (
          <div className="flex items-center gap-3 p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400 text-sm">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{error}</span>
            <button
              onClick={refetch}
              className="ml-auto text-xs font-bold underline cursor-pointer hover:text-rose-300"
            >
              Retry
            </button>
          </div>
        )}

        {/* KPI Cards - using existing component but with dark theme wrapper */}
        {activeTab === "overview" && (
          <div className="[&_.bg-white]:bg-slate-900 [&_.border-slate-100]:border-slate-800 [&_.text-slate-900]:text-white [&_.text-slate-500]:text-slate-400 [&_.text-slate-600]:text-slate-400">
            <AgentKpiCards kpis={summary?.kpis || null} loading={loading} />
          </div>
        )}

        {/* Tabs nav */}
        <div className="border-b border-slate-800 bg-slate-900 rounded-t-xl overflow-x-auto">
          <nav className="flex min-w-max">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  suppressHydrationWarning
                  onClick={() => {
                    setActiveTab(tab.key);
                    setTabCurrentPage(1);
                    setCallsPage(1);
                  }}
                  className={`inline-flex items-center gap-2 py-3.5 px-4 text-xs font-bold border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "border-indigo-500 text-indigo-400 bg-indigo-500/5"
                      : "border-transparent text-slate-500 hover:text-slate-300 hover:border-slate-600"
                  }`}
                >
                  <Icon className={`h-3.5 w-3.5 ${isActive ? "text-indigo-400" : "text-slate-600"}`} />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="bg-slate-900 border border-slate-800 rounded-b-xl rounded-tr-xl overflow-hidden min-h-[300px]"
          >
            {/* Overview tab: reuse existing component with dark CSS override */}
            {activeTab === "overview" && (
              <div className="p-5 [&_.bg-white]:!bg-slate-800 [&_.bg-slate-50]:!bg-slate-850 [&_.border-slate-100]:!border-slate-700 [&_.border-slate-200]:!border-slate-700 [&_.text-slate-900]:!text-white [&_.text-slate-800]:!text-slate-200 [&_.text-slate-700]:!text-slate-300 [&_.text-slate-600]:!text-slate-400 [&_.text-slate-500]:!text-slate-500">
                <TabOverview summary={summary} loading={loading && !summary} />
              </div>
            )}

            {/* Calls tab */}
            {activeTab === "calls" && (
              <div className="[&_.bg-white]:!bg-slate-900 [&_.border-slate-100]:!border-slate-800 [&_.text-slate-900]:!text-white [&_.text-slate-700]:!text-slate-300 [&_.text-slate-500]:!text-slate-500 [&_.bg-slate-50]:!bg-slate-800 [&_.hover\:bg-slate-50]:!hover:bg-slate-800 [&_.border-slate-200]:!border-slate-700">
                <TabCalls
                  callsData={callsData}
                  loading={loading}
                  page={callsPage}
                  onPageChange={(p) => setCallsPage(p)}
                  onSelectCall={handleOpenCallDrawer}
                />
              </div>
            )}

            {/* Queue tab */}
            {activeTab === "queue" && (
              <div className="[&_.bg-white]:!bg-slate-900 [&_.border-slate-100]:!border-slate-800 [&_.text-slate-900]:!text-white [&_.text-slate-700]:!text-slate-300 [&_.text-slate-500]:!text-slate-500 [&_.bg-slate-50]:!bg-slate-800 [&_.border-slate-200]:!border-slate-700">
                <TabQueue
                  queueData={queuePage}
                  loading={loading}
                  page={tabCurrentPage}
                  onPageChange={setTabCurrentPage}
                />
              </div>
            )}

            {/* History tab */}
            {activeTab === "history" && (
              <div className="[&_.bg-white]:!bg-slate-900 [&_.border-slate-100]:!border-slate-800 [&_.text-slate-900]:!text-white [&_.text-slate-700]:!text-slate-300 [&_.text-slate-500]:!text-slate-500 [&_.bg-slate-50]:!bg-slate-800 [&_.border-slate-200]:!border-slate-700">
                <TabHistory
                  historyData={historyPage}
                  loading={loading}
                  page={tabCurrentPage}
                  onPageChange={setTabCurrentPage}
                />
              </div>
            )}

            {/* Recordings tab */}
            {activeTab === "recordings" && (
              <div className="p-4">
                <TabRecordings
                  recordings={recordings}
                  loading={loading}
                  available={recordings.length > 0 || !loading}
                />
              </div>
            )}

            {/* Transcripts tab */}
            {activeTab === "transcripts" && (
              <div className="[&_.bg-white]:!bg-slate-900 [&_.border-slate-100]:!border-slate-800 [&_.text-slate-900]:!text-white [&_.text-slate-700]:!text-slate-300 [&_.text-slate-500]:!text-slate-500 [&_.bg-slate-50]:!bg-slate-800 [&_.border-slate-200]:!border-slate-700">
                <TabTranscripts
                  callsData={callsData}
                  loading={loading}
                  onSelectCall={handleOpenCallDrawer}
                />
              </div>
            )}

            {/* Blacklist tab */}
            {activeTab === "blacklist" && (
              <div className="p-4">
                <TabBlacklist
                  blacklist={blacklist}
                  loading={loading}
                  available={!loading}
                />
              </div>
            )}

            {/* Voice & Handoffs tab */}
            {activeTab === "voice" && (
              <div className="p-4">
                <TabVoice
                  voiceCalls={voiceCalls}
                  loading={loading}
                  available={!loading}
                />
              </div>
            )}

            {/* Qualified Leads tab */}
            {activeTab === "qualified" && (
              <div className="p-4">
                <TabQualified
                  qualifiedLeads={qualifiedLeads}
                  loading={loading}
                  available={!loading}
                />
              </div>
            )}

            {/* Completed Calls tab */}
            {activeTab === "completed" && (
              <div className="p-4">
                <TabCompleted
                  completedCalls={completedCalls}
                  loading={loading}
                  available={!loading}
                />
              </div>
            )}

            {/* Pagination footer (for paginated tabs) */}
            {["history", "queue", "recordings", "blacklist", "voice", "qualified", "completed"].includes(
              activeTab
            ) && (
              <div className="flex items-center justify-center gap-3 py-4 border-t border-slate-800">
                <button
                  suppressHydrationWarning
                  disabled={tabCurrentPage <= 1 || loading}
                  onClick={() => setTabCurrentPage((p) => Math.max(1, p - 1))}
                  className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-xs font-semibold text-slate-400 hover:text-white transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <span className="text-xs text-slate-500">Page {tabCurrentPage}</span>
                <button
                  suppressHydrationWarning
                  disabled={loading}
                  onClick={() => setTabCurrentPage((p) => p + 1)}
                  className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-xs font-semibold text-slate-400 hover:text-white transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide-out Call Detail Drawer */}
      <CallDrawer
        call={selectedCall}
        agentId={agentId}
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </div>
  );
}
