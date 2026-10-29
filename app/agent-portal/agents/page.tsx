"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Search,
  RefreshCw,
  PhoneCall,
  Clock,
  AlertCircle,
  Loader2,
  Filter,
  Megaphone,
  ChevronRight,
  BarChart3,
  Play,
  CheckCircle2,
  XCircle,
  Pause,
  ArrowRight,
  Layers,
  Zap,
  ShieldCheck,
  X,
  FileDown,
} from "lucide-react";
import { AgentPortalHeader } from "@/components/agent-portal/AgentPortalHeader";
import { usePortalAgents } from "@/lib/hooks/useAgentPortal";
import { useAuthStore } from "@/lib/store";
import { agentPortalService, PortalAgentItem } from "@/lib/services/agentPortalService";
import { exportCampaignReportToPdf } from "@/lib/utils/pdfExport";

// ─────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────
interface Campaign {
  id: string;
  name: string;
  status: string;
  agent_type: string;
  lead_group_name: string;
  started_at: string | null;
  created_at: string | null;
  phone_number: string;
  total_calls: number;
}

// ─────────────────────────────────────────────────────────
// Status badge
// ─────────────────────────────────────────────────────────
function StatusBadge({ status, size = "md" }: { status: string; size?: "sm" | "md" }) {
  const s = status?.toUpperCase();
  const map: Record<string, string> = {
    ACTIVE: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
    RUNNING: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
    IDLE: "bg-slate-500/15 text-slate-400 border-slate-500/25",
    INACTIVE: "bg-slate-500/15 text-slate-400 border-slate-500/25",
    PAUSED: "bg-amber-500/15 text-amber-400 border-amber-500/25",
    DRAFT: "bg-blue-500/15 text-blue-400 border-blue-500/25",
    COMPLETED: "bg-purple-500/15 text-purple-400 border-purple-500/25",
  };
  const dot: Record<string, string> = {
    ACTIVE: "bg-emerald-400 animate-pulse",
    RUNNING: "bg-emerald-400 animate-pulse",
    IDLE: "bg-slate-500",
    PAUSED: "bg-amber-400",
    COMPLETED: "bg-purple-400",
  };
  const px = size === "sm" ? "px-1.5 py-0.5 text-[9px]" : "px-2 py-0.5 text-[10px]";
  return (
    <span className={`inline-flex items-center gap-1 ${px} rounded-full font-bold border ${map[s] || "bg-slate-500/15 text-slate-400 border-slate-500/25"}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${dot[s] || "bg-slate-500"}`} />
      {status || "Unknown"}
    </span>
  );
}

// ─────────────────────────────────────────────────────────
// Campaign status icon
// ─────────────────────────────────────────────────────────
function CampaignStatusIcon({ status }: { status: string }) {
  const s = status?.toUpperCase();
  if (s === "RUNNING" || s === "ACTIVE") return <Play className="h-3.5 w-3.5 text-emerald-400" />;
  if (s === "PAUSED") return <Pause className="h-3.5 w-3.5 text-amber-400" />;
  if (s === "COMPLETED") return <CheckCircle2 className="h-3.5 w-3.5 text-purple-400" />;
  return <Layers className="h-3.5 w-3.5 text-slate-500" />;
}

// ─────────────────────────────────────────────────────────
// Campaign Card
// ─────────────────────────────────────────────────────────
function CampaignCard({
  campaign,
  agentId,
  agentName,
  onClick,
}: {
  campaign: Campaign;
  agentId: string;
  agentName?: string;
  onClick: (id: string) => void;
}) {
  const [downloading, setDownloading] = useState(false);

  const handleDownloadCampaign = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDownloading(true);
    try {
      exportCampaignReportToPdf(campaign, agentName || "AI Agent");
    } finally {
      setTimeout(() => setDownloading(false), 600);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      onClick={() => onClick(agentId)}
      className="w-full text-left bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-indigo-500/40 rounded-xl p-4 transition-all cursor-pointer group"
    >
      <div className="flex items-start gap-3">
        <div className="h-9 w-9 rounded-lg bg-indigo-600/15 border border-indigo-500/20 flex items-center justify-center shrink-0">
          <CampaignStatusIcon status={campaign.status} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="font-bold text-white text-sm truncate">{campaign.name}</span>
            <StatusBadge status={campaign.status} size="sm" />
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <PhoneCall className="h-3 w-3" />
              {campaign.total_calls.toLocaleString()} calls
            </span>
            {campaign.phone_number && (
              <span className="truncate">{campaign.phone_number}</span>
            )}
            {campaign.lead_group_name && (
              <span className="truncate text-slate-600">· {campaign.lead_group_name}</span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            suppressHydrationWarning
            onClick={handleDownloadCampaign}
            disabled={downloading}
            className="p-1.5 rounded-lg bg-slate-700/60 hover:bg-indigo-600 text-slate-300 hover:text-white transition-all cursor-pointer"
            title="Download Campaign Details (PDF)"
          >
            <FileDown className={`h-4 w-4 ${downloading ? "animate-bounce text-indigo-400" : ""}`} />
          </button>
          <ChevronRight className="h-4 w-4 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all mt-0.5" />
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────
// Agent Card (selectable)
// ─────────────────────────────────────────────────────────
function AgentCard({
  agent,
  index,
  isSelected,
  onClick,
}: {
  agent: PortalAgentItem;
  index: number;
  isSelected: boolean;
  onClick: (agent: PortalAgentItem) => void;
}) {
  return (
    <motion.button
      suppressHydrationWarning
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      onClick={() => onClick(agent)}
      className={`w-full text-left group relative overflow-hidden rounded-2xl p-5 border transition-all cursor-pointer ${
        isSelected
          ? "bg-indigo-600/10 border-indigo-500/50 shadow-lg shadow-indigo-500/10"
          : "bg-slate-900/80 border-slate-800 hover:border-indigo-500/30 hover:bg-slate-800/80"
      }`}
    >
      {/* selected glow */}
      {isSelected && (
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-cyan-600/5 rounded-2xl pointer-events-none" />
      )}

      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
          isSelected
            ? "bg-gradient-to-br from-indigo-600 to-indigo-500 shadow-lg shadow-indigo-500/30"
            : "bg-gradient-to-br from-indigo-600/20 to-cyan-600/20 border border-indigo-500/20"
        }`}>
          <Bot className={`h-6 w-6 ${isSelected ? "text-white" : "text-indigo-400"}`} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1.5">
            <h3 className={`font-bold text-sm truncate transition-colors ${isSelected ? "text-indigo-200" : "text-white group-hover:text-indigo-200"}`}>
              {agent.name}
            </h3>
            <StatusBadge status={agent.status} />
          </div>
          <p className="text-xs text-slate-500 mb-3 truncate">
            {agent.type}
            {agent.phone_number && <span className="ml-1.5 text-slate-600">· {agent.phone_number}</span>}
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <PhoneCall className="h-3 w-3 text-slate-600" />
              {agent.total_calls.toLocaleString()} calls
            </span>
            {agent.last_activity && (
              <span className="flex items-center gap-1.5">
                <Clock className="h-3 w-3 text-slate-600" />
                {new Date(agent.last_activity).toLocaleDateString("en-IN", { month: "short", day: "numeric" })}
              </span>
            )}
          </div>
        </div>

        <div className={`transition-all ${isSelected ? "text-indigo-400" : "text-slate-600 group-hover:text-indigo-400"}`}>
          <ChevronRight className="h-4 w-4" />
        </div>
      </div>
    </motion.button>
  );
}

// ─────────────────────────────────────────────────────────
// Campaigns Panel (right side)
// ─────────────────────────────────────────────────────────
function CampaignsPanel({
  agent,
  onViewReport,
  onClose,
}: {
  agent: PortalAgentItem;
  onViewReport: (agentId: string) => void;
  onClose: () => void;
}) {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    agentPortalService.getCampaigns(agent.id)
      .then((res) => setCampaigns(res.campaigns))
      .catch((e) => setError(e?.message || "Failed to load campaigns"))
      .finally(() => setLoading(false));
  }, [agent.id]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 30 }}
      transition={{ duration: 0.25 }}
      className="flex flex-col h-full"
    >
      {/* Panel header */}
      <div className="flex items-start justify-between gap-3 mb-5">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="font-extrabold text-white text-base">{agent.name}</h3>
            <p className="text-xs text-slate-500">{agent.type}</p>
          </div>
        </div>
        <button
          suppressHydrationWarning
          onClick={onClose}
          className="p-1.5 rounded-lg text-slate-600 hover:text-slate-300 hover:bg-slate-800 transition-all cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* View Full Report CTA */}
      <button
        suppressHydrationWarning
        onClick={() => onViewReport(agent.id)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-sm font-bold text-white transition-colors cursor-pointer mb-5 group"
      >
        <div className="flex items-center gap-2">
          <BarChart3 className="h-4 w-4" />
          View Full Agent Report
        </div>
        <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3 text-center">
          <p className="text-xl font-extrabold text-white">{agent.total_calls.toLocaleString()}</p>
          <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wide mt-0.5">Total Calls</p>
        </div>
        <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3 text-center">
          <p className="text-xl font-extrabold text-white">{campaigns.length}</p>
          <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wide mt-0.5">Campaigns</p>
        </div>
      </div>

      {/* Campaigns heading */}
      <div className="flex items-center gap-2 mb-3">
        <Megaphone className="h-4 w-4 text-indigo-400" />
        <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wide">Campaigns Using This Agent</h4>
      </div>

      {/* Campaign list */}
      <div className="flex-1 overflow-y-auto space-y-2.5 pr-0.5 -mr-1">
        {loading && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-5 w-5 animate-spin text-indigo-400" />
          </div>
        )}
        {error && (
          <div className="flex items-center gap-2 p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400 text-xs">
            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
            {error}
          </div>
        )}
        {!loading && !error && campaigns.length === 0 && (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <Megaphone className="h-8 w-8 text-slate-700 mb-3" />
            <p className="text-slate-500 text-sm font-medium">No campaigns yet</p>
            <p className="text-slate-600 text-xs mt-1">This agent hasn&apos;t been assigned to any campaign.</p>
          </div>
        )}
        {!loading && campaigns.map((c, i) => (
          <CampaignCard
            key={c.id}
            campaign={c}
            agentId={agent.id}
            agentName={agent.name}
            onClick={onViewReport}
          />
        ))}
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────────────────
const STATUS_OPTIONS = ["all", "active", "idle", "paused", "inactive"];

export default function AgentPortalAgentsPage() {
  const router = useRouter();
  const { token, user } = useAuthStore();

  useEffect(() => {
    if (!token || user?.role !== "AI_AGENT_PORTAL_USER") {
      router.replace("/agent-portal/login");
    }
  }, [token, user, router]);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selectedAgent, setSelectedAgent] = useState<PortalAgentItem | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(t);
  }, [search]);

  const { agents, total, totalPages, loading, error, refetch } = usePortalAgents({
    search: debouncedSearch || undefined,
    status: status === "all" ? undefined : status,
    page,
    pageSize: 12,
  });

  const handleViewReport = useCallback((agentId: string) => {
    router.push(`/agent-portal/agents/${agentId}`);
  }, [router]);

  const totalCalls = agents.reduce((sum, a) => sum + a.total_calls, 0);
  const activeAgents = agents.filter(a => a.status?.toLowerCase() === "active").length;

  return (
    <div className="min-h-screen bg-[#0a0b14] text-white font-sans">
      <AgentPortalHeader currentAgentId={selectedAgent?.id} currentAgentName={selectedAgent?.name} />

      {/* ── HERO SECTION ── */}
      <div className="relative overflow-hidden border-b border-slate-800/60">
        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-cyan-600/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative w-full px-4 sm:px-6 lg:px-10 py-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            {/* Title */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold"
              >
                <ShieldCheck className="h-3.5 w-3.5" />
                Read-Only Monitoring
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.06 }}
                className="text-4xl lg:text-5xl font-extrabold tracking-tight"
              >
                <span className="text-white">AI Agent</span>{" "}
                <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                  Intelligence Hub
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.12 }}
                className="text-slate-400 text-base max-w-xl"
              >
                Select an AI agent to explore its campaigns, call performance, transcripts, and analytics — all in one place.
              </motion.p>
            </div>

            {/* Hero stats */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="flex gap-4 flex-wrap"
            >
              {[
                { icon: Bot, label: "Total Agents", value: total, color: "indigo" },
                { icon: Zap, label: "Active Now", value: activeAgents, color: "emerald" },
                { icon: PhoneCall, label: "Total Calls", value: totalCalls.toLocaleString(), color: "cyan" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-slate-900/80 border border-slate-800 rounded-2xl px-5 py-4 min-w-[130px] text-center"
                >
                  <p className="text-2xl font-extrabold text-white mb-0.5">{loading ? "—" : stat.value}</p>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="w-full px-4 sm:px-6 lg:px-10 py-8">
        {/* Filter bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-7" suppressHydrationWarning>
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 pointer-events-none" />
            <input
              suppressHydrationWarning
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              placeholder="Search agents…"
              className="w-full bg-slate-900 border border-slate-800 focus:border-indigo-500/50 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 outline-none transition-colors"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500 pointer-events-none" />
            <select
              suppressHydrationWarning
              value={status}
              onChange={(e) => { setStatus(e.target.value); setPage(1); }}
              className="appearance-none bg-slate-900 border border-slate-800 focus:border-indigo-500/50 rounded-xl pl-9 pr-8 py-2.5 text-sm text-slate-300 outline-none cursor-pointer"
            >
              {STATUS_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {s === "all" ? "All Statuses" : s.charAt(0).toUpperCase() + s.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <button
            suppressHydrationWarning
            onClick={refetch}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white rounded-xl text-xs font-semibold transition-all cursor-pointer disabled:opacity-50 ml-auto"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="flex items-center gap-3 p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400 text-sm mb-6">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Loading */}
        {loading && agents.length === 0 && (
          <div className="flex items-center justify-center py-24">
            <div className="text-center space-y-3">
              <Loader2 className="h-8 w-8 animate-spin text-indigo-400 mx-auto" />
              <p className="text-sm text-slate-500">Loading agents…</p>
            </div>
          </div>
        )}

        {/* Empty */}
        {!loading && !error && agents.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center space-y-4">
            <div className="h-16 w-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center">
              <Bot className="h-8 w-8 text-slate-700" />
            </div>
            <div>
              <h3 className="font-bold text-slate-400 mb-1">No agents found</h3>
              <p className="text-sm text-slate-600 max-w-xs">
                {debouncedSearch ? `No agents match "${debouncedSearch}".` : "No AI agents accessible to your account."}
              </p>
            </div>
          </div>
        )}

        {/* Two-column layout: Agent grid + Campaign panel */}
        {agents.length > 0 && (
          <div className="flex gap-6">
            {/* Left: Agent grid */}
            <div className={`transition-all duration-300 ${selectedAgent ? "w-full lg:w-[62%]" : "w-full"}`}>
              {selectedAgent && (
                <p className="text-xs text-slate-500 font-semibold mb-3 flex items-center gap-1.5">
                  <Bot className="h-3 w-3 text-indigo-400" />
                  Select an agent to view its campaigns
                </p>
              )}
              {!selectedAgent && (
                <p className="text-xs text-slate-500 font-semibold mb-4 flex items-center gap-1.5">
                  <Bot className="h-3 w-3 text-indigo-400" />
                  {total} agent{total !== 1 ? "s" : ""} · Click to view campaigns
                </p>
              )}
              <div className={`grid gap-4.5 ${selectedAgent ? "grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"}`}>
                {agents.map((agent, i) => (
                  <AgentCard
                    key={agent.id}
                    agent={agent}
                    index={i}
                    isSelected={selectedAgent?.id === agent.id}
                    onClick={(a) => setSelectedAgent(selectedAgent?.id === a.id ? null : a)}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-6">
                  <button
                    suppressHydrationWarning
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1 || loading}
                    className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs font-semibold text-slate-400 hover:text-white transition-all cursor-pointer disabled:opacity-40"
                  >
                    Previous
                  </button>
                  <span className="text-xs text-slate-500 px-2">Page {page} of {totalPages}</span>
                  <button
                    suppressHydrationWarning
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages || loading}
                    className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs font-semibold text-slate-400 hover:text-white transition-all cursor-pointer disabled:opacity-40"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>

            {/* Right: Campaigns panel (shown when agent selected) */}
            <AnimatePresence>
              {selectedAgent && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  className="hidden lg:block flex-1 min-w-[380px] max-w-[480px]"
                >
                  <div className="sticky top-20 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 h-[calc(100vh-160px)] overflow-hidden flex flex-col backdrop-blur-sm">
                    <CampaignsPanel
                      agent={selectedAgent}
                      onViewReport={handleViewReport}
                      onClose={() => setSelectedAgent(null)}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Mobile campaigns panel (slide-up sheet) */}
        <AnimatePresence>
          {selectedAgent && (
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="lg:hidden fixed inset-x-0 bottom-0 z-50 bg-slate-900 border-t border-slate-800 rounded-t-3xl p-6 max-h-[75vh] overflow-y-auto"
            >
              <div className="w-12 h-1 bg-slate-700 rounded-full mx-auto mb-5" />
              <CampaignsPanel
                agent={selectedAgent}
                onViewReport={handleViewReport}
                onClose={() => setSelectedAgent(null)}
              />
            </motion.div>
          )}
        </AnimatePresence>
        {selectedAgent && (
          <div
            className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedAgent(null)}
          />
        )}
      </div>
    </div>
  );
}
