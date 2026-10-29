"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  RefreshCw,
  Download,
  Search,
  Eye,
  CheckCircle2,
  XCircle,
  Clock,
  Phone,
  Users,
  AlertCircle,
  Copy,
  Check,
  FileSpreadsheet,
  FileText,
  TrendingUp,
  Activity,
  Layers,
  ChevronRight,
  BarChart3,
  Bot,
  UserCheck,
  ExternalLink,
  Award,
  X
} from "lucide-react";
import {
  reportService,
  CampaignWiseSummaryItem,
  CampaignWiseDetailResponse,
  CampaignWiseLeadItem,
  OverallSummaryCards
} from "@/lib/services/report.service";

export function OverallCampaignWiseReport() {
  const router = useRouter();
  const [campaigns, setCampaigns] = useState<CampaignWiseSummaryItem[]>([]);
  const [summaryCards, setSummaryCards] = useState<OverallSummaryCards | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Filters
  const [statusFilter, setStatusFilter] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Detail Modal State
  const [selectedCampaignId, setSelectedCampaignId] = useState<string | null>(null);
  const [detailData, setDetailData] = useState<CampaignWiseDetailResponse | null>(null);
  const [detailLoading, setDetailLoading] = useState<boolean>(false);
  const [detailError, setDetailError] = useState<string | null>(null);
  const [detailLeadSearch, setDetailLeadSearch] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Download state tracking
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  // Fetch campaign summaries
  const fetchCampaigns = useCallback(async (isRefresh = false) => {
    try {
      if (isRefresh) setRefreshing(true);
      else setLoading(true);
      setError(null);

      const res = await reportService.getCampaignWiseReports({
        status: statusFilter !== "ALL" ? statusFilter : undefined,
        search: searchQuery.trim() || undefined,
        limit: 100
      });

      if (res && Array.isArray(res.data)) {
        setCampaigns(res.data);
        if (res.summary_cards) {
          setSummaryCards(res.summary_cards);
        }
      } else {
        setCampaigns([]);
      }
    } catch (err: any) {
      console.error("Failed to load overall campaign-wise reports:", err);
      setError(err?.message || "Failed to load campaign-wise reports from database.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [statusFilter, searchQuery]);

  useEffect(() => {
    fetchCampaigns();
  }, [fetchCampaigns]);

  // Fallback computed summary cards across active records
  const computedCards = useMemo(() => {
    if (summaryCards) return summaryCards;
    const sumLeads = campaigns.reduce((acc, c) => acc + (c.total_leads_assigned || 0), 0);
    const sumAttempts = campaigns.reduce((acc, c) => acc + (c.total_calls_attempted || c.total_leads_attempted || 0), 0);
    const sumConnected = campaigns.reduce((acc, c) => acc + (c.total_calls_connected || 0), 0);
    const sumUnanswered = campaigns.reduce((acc, c) => acc + (c.total_calls_not_connected || 0), 0);
    const sumQualified = campaigns.reduce((acc, c) => acc + (c.total_qualified_leads || 0), 0);
    const sumNotQualified = campaigns.reduce((acc, c) => acc + (c.total_not_qualified_leads || 0), 0);
    const sumSec = campaigns.reduce((acc, c) => acc + (c.total_call_duration_seconds || 0), 0);
    const totalCalls = campaigns.reduce((acc, c) => acc + (c.total_calls || 0), 0);
    const m = Math.floor(sumSec / 60);
    const s = sumSec % 60;
    const durStr = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    return {
      total_campaigns: campaigns.length,
      total_leads_assigned: sumLeads,
      total_calls_attempted: sumAttempts,
      total_connected_calls: sumConnected,
      total_unanswered_or_failed_calls: sumUnanswered,
      total_qualified_leads: sumQualified,
      total_not_qualified_leads: sumNotQualified,
      total_call_talk_time: durStr,
      total_call_talk_time_seconds: sumSec,
      overall_connection_rate: totalCalls > 0 ? Math.round((sumConnected / totalCalls) * 1000) / 10 : 0,
      overall_qualification_rate: sumLeads > 0 ? Math.round((sumQualified / sumLeads) * 1000) / 10 : 0,
    };
  }, [summaryCards, campaigns]);

  // Open detailed summary for a specific campaign
  const handleOpenDetail = async (campaignId: string) => {
    setSelectedCampaignId(campaignId);
    setDetailLoading(true);
    setDetailError(null);
    setDetailData(null);
    setDetailLeadSearch("");

    try {
      const data = await reportService.getCampaignWiseDetail(campaignId);
      setDetailData(data);
    } catch (err: any) {
      console.error("Failed to load campaign detail:", err);
      setDetailError(err?.message || "Failed to load detailed campaign records.");
    } finally {
      setDetailLoading(false);
    }
  };

  const handleCloseDetail = () => {
    setSelectedCampaignId(null);
    setDetailData(null);
    setDetailError(null);
  };

  // Open the assigned agent's live dashboard for this campaign
  const handleOpenDashboard = (campaignId: string) => {
    router.push(`/agents/${campaignId}/dashboard`);
  };

  // Download report action
  const handleDownload = async (campaignId: string, format: "excel" | "csv" = "excel") => {
    setDownloadingId(`${campaignId}-${format}`);
    try {
      const url = reportService.getCampaignWiseDownloadUrl(campaignId, format);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `campaign_report_${campaignId.slice(0, 8)}.${format === "excel" ? "xlsx" : "csv"}`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Download failed:", err);
      alert("Failed to download campaign report. Please try again.");
    } finally {
      setTimeout(() => setDownloadingId(null), 1200);
    }
  };

  // ─── Export to Excel (CSV) ───────────────────────────────────────────────
  const exportToExcel = () => {
    if (!campaigns || campaigns.length === 0) {
      alert("No campaign data available to export.");
      return;
    }
    const now = new Date();
    const dateStr = now.toISOString().slice(0, 10);
    const timeStr = now.toLocaleString();

    const summaryRows = [
      ["OVERALL CAMPAIGN REPORT — GBZ"],
      ["Generated At", timeStr],
      ["Total Campaigns", computedCards.total_campaigns],
      ["Total Leads Assigned", computedCards.total_leads_assigned],
      ["Calls Attempted", computedCards.total_calls_attempted],
      ["Connected Calls", computedCards.total_connected_calls],
      ["Unanswered / Failed", computedCards.total_unanswered_or_failed_calls],
      ["Qualified Leads", computedCards.total_qualified_leads],
      ["Not Qualified Leads", computedCards.total_not_qualified_leads],
      ["Total Talk Time", computedCards.total_call_talk_time],
      ["Connection Rate (%)", computedCards.overall_connection_rate],
      ["Qualification Rate (%)", computedCards.overall_qualification_rate],
      [""],
      ["CAMPAIGN-WISE DETAILS"],
    ];

    const headers = [
      "Campaign Name",
      "Campaign ID",
      "Assigned Agent",
      "Agent Type",
      "Target Client",
      "Lead List",
      "Campaign Status",
      "Leads Assigned",
      "Calls Attempted",
      "Connected Calls",
      "Not Connected",
      "Qualified Leads",
      "Not Qualified",
      "Total Talk Time",
      "Avg Call Duration",
      "Created Date",
      "Last Activity",
    ];

    const rows = campaigns.map((c) => [
      `"${(c.campaign_name || "").replace(/"/g, '""')}"`,
      `"${c.campaign_id}"`,
      `"${(c.assigned_agent || "").replace(/"/g, '""')}"`,
      `"${c.agent_type || ""}"`  ,
      `"${(c.target_client || c.client_name || "").replace(/"/g, '""')}"`,
      `"${(c.lead_list || "Lead Library").replace(/"/g, '""')}"`,
      `"${c.campaign_status || ""}"`,
      c.total_leads_assigned || 0,
      c.total_calls_attempted ?? c.total_leads_attempted ?? 0,
      c.total_calls_connected || 0,
      c.total_calls_not_connected || 0,
      c.total_qualified_leads || 0,
      c.total_not_qualified_leads || 0,
      `"${c.total_call_duration || "00:00"}"`,
      `"${c.avg_call_duration || "00:00"}"`,
      `"${(c as any).created_at || c.created_date ? new Date((c as any).created_at || c.created_date).toLocaleDateString() : ""}"`,
      `"${c.last_activity ? new Date(c.last_activity).toLocaleDateString() : ""}"`,
    ]);

    const allLines = [
      ...summaryRows.map((r) => r.join(",")),
      headers.join(","),
      ...rows.map((r) => r.join(",")),
    ];

    const csvContent = "data:text/csv;charset=utf-8,\uFEFF" + allLines.join("\n");
    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.setAttribute("download", `overall_campaign_report_${dateStr}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ─── Export to PDF (print window) ────────────────────────────────────────
  const exportToPDF = () => {
    if (!campaigns || campaigns.length === 0) {
      alert("No campaign data available to export.");
      return;
    }
    const now = new Date();
    const timeStr = now.toLocaleString();

    const cardRows = [
      ["Total Campaigns", computedCards.total_campaigns],
      ["Total Leads Assigned", computedCards.total_leads_assigned],
      ["Calls Attempted", computedCards.total_calls_attempted],
      ["Connected Calls", computedCards.total_connected_calls],
      ["Unanswered / Failed", computedCards.total_unanswered_or_failed_calls],
      ["Qualified Leads", computedCards.total_qualified_leads],
      ["Not Qualified Leads", computedCards.total_not_qualified_leads],
      ["Total Talk Time", computedCards.total_call_talk_time],
      ["Connection Rate", `${computedCards.overall_connection_rate}%`],
      ["Qualification Rate", `${computedCards.overall_qualification_rate}%`],
    ];

    const campaignRows = campaigns.map((c) => `
      <tr>
        <td>${(c.campaign_name || "")}</td>
        <td>${c.campaign_id.slice(0, 8)}...</td>
        <td>${c.assigned_agent || "—"}</td>
        <td>${c.agent_type || "—"}</td>
        <td>${c.target_client || c.client_name || "—"}</td>
        <td>${c.lead_list || "Lead Library"}</td>
        <td>${c.campaign_status || "—"}</td>
        <td style="text-align:right">${c.total_leads_assigned || 0}</td>
        <td style="text-align:right">${c.total_calls_attempted ?? c.total_leads_attempted ?? 0}</td>
        <td style="text-align:right">${c.total_calls_connected || 0}</td>
        <td style="text-align:right">${c.total_calls_not_connected || 0}</td>
        <td style="text-align:right">${c.total_qualified_leads || 0}</td>
        <td style="text-align:right">${c.total_not_qualified_leads || 0}</td>
        <td style="text-align:right">${c.total_call_duration || "00:00"}</td>
        <td style="text-align:right">${c.avg_call_duration || "00:00"}</td>
      </tr>`
    ).join("");

    const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <title>Overall Campaign Report — GBZ</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; font-family: Arial, sans-serif; }
    body { background: #fff; color: #111; padding: 24px; font-size: 11px; }
    h1 { font-size: 20px; font-weight: 800; color: #1e1b4b; margin-bottom: 4px; }
    .subtitle { color: #64748b; font-size: 11px; margin-bottom: 20px; }
    .section-title { font-size: 13px; font-weight: 700; color: #1e1b4b; margin: 18px 0 8px; border-bottom: 2px solid #6366f1; padding-bottom: 4px; }
    .cards { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 18px; }
    .card { border: 1px solid #e2e8f0; border-radius: 8px; padding: 10px 14px; min-width: 140px; background: #f8fafc; }
    .card .label { font-size: 10px; color: #64748b; font-weight: 600; margin-bottom: 3px; }
    .card .value { font-size: 18px; font-weight: 800; color: #1e1b4b; }
    table { width: 100%; border-collapse: collapse; font-size: 10px; }
    th { background: #f1f5f9; color: #475569; font-weight: 700; text-transform: uppercase; padding: 7px 6px; text-align: left; border-bottom: 2px solid #cbd5e1; }
    td { padding: 6px 6px; border-bottom: 1px solid #e2e8f0; color: #1e293b; vertical-align: top; }
    tr:nth-child(even) td { background: #f8fafc; }
    .footer { margin-top: 24px; color: #94a3b8; font-size: 10px; border-top: 1px solid #e2e8f0; padding-top: 8px; }
    @media print { body { padding: 10px; } }
  </style>
</head>
<body>
  <h1>📈 Overall Campaign Report</h1>
  <p class="subtitle">Generated: ${timeStr} &nbsp;|&nbsp; Campaigns: ${campaigns.length}</p>

  <div class="section-title">Summary</div>
  <div class="cards">
    ${cardRows.map(([label, value]) => `<div class="card"><div class="label">${label}</div><div class="value">${value}</div></div>`).join("")}
  </div>

  <div class="section-title">Campaign-Wise Breakdown</div>
  <table>
    <thead><tr>
      <th>Campaign Name</th><th>ID</th><th>Agent</th><th>Type</th>
      <th>Client</th><th>Lead List</th><th>Status</th>
      <th>Leads</th><th>Attempted</th><th>Connected</th><th>Not Conn.</th>
      <th>Qualified</th><th>Not Qual.</th><th>Talk Time</th><th>Avg Dur.</th>
    </tr></thead>
    <tbody>${campaignRows}</tbody>
  </table>

  <div class="footer">GBZ CRM &mdash; Overall Campaign Report &mdash; ${timeStr}</div>
  <script>window.onload=function(){window.print();window.onafterprint=function(){window.close();};}<\/script>
</body>
</html>`;

    const win = window.open("", "_blank", "width=1200,height=800");
    if (win) {
      win.document.write(html);
      win.document.close();
    } else {
      alert("Pop-up was blocked. Please allow pop-ups for this site and try again.");
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(text);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Status Badge Helper
  const renderStatusBadge = (status: string) => {
    const s = (status || "").toUpperCase();
    switch (s) {
      case "RUNNING":
      case "ACTIVE":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            RUNNING
          </span>
        );
      case "PAUSED":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            PAUSED
          </span>
        );
      case "COMPLETED":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
            <CheckCircle2 className="w-3 h-3 text-blue-500" />
            COMPLETED
          </span>
        );
      case "IDLE":
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
            {s || "IDLE"}
          </span>
        );
    }
  };

  // Agent Type Badge Helper
  const renderAgentTypeBadge = (agentType: string) => {
    const isVoice = (agentType || "").toUpperCase().includes("VOICE") && !(agentType || "").toUpperCase().includes("AI");
    return (
      <span
        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-bold ${
          isVoice
            ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
            : "bg-indigo-50 text-indigo-800 border border-indigo-200"
        }`}
      >
        {isVoice ? (
          <>
            <UserCheck className="w-3 h-3 text-emerald-600" />
            Voice Agent
          </>
        ) : (
          <>
            <Bot className="w-3 h-3 text-indigo-600" />
            AI Agent
          </>
        )}
      </span>
    );
  };

  // Filtered leads in detailed modal view
  const filteredModalLeads = useMemo(() => {
    if (!detailData?.leads) return [];
    if (!detailLeadSearch.trim()) return detailData.leads;
    const q = detailLeadSearch.toLowerCase();
    return detailData.leads.filter((l: CampaignWiseLeadItem) =>
      (l.lead_name && l.lead_name.toLowerCase().includes(q)) ||
      (l.phone && l.phone.includes(q)) ||
      (l.lead_id && l.lead_id.toLowerCase().includes(q)) ||
      (l.call_status && l.call_status.toLowerCase().includes(q)) ||
      (l.disposition && l.disposition.toLowerCase().includes(q))
    );
  }, [detailData?.leads, detailLeadSearch]);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden transition-all">
      {/* SECTION HEADER */}
      <div className="p-6 border-b border-slate-100 flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-lg shadow-2xs">
              📈
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  Overall Campaign Report
                </h2>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                  {campaigns.length} {campaigns.length === 1 ? "Campaign" : "Campaigns"}
                </span>
              </div>
              <p className="text-slate-500 text-xs mt-0.5">
                Consolidated live summary of current campaigns, assigned agents, call attempts, connectivity, and talk time.
              </p>
            </div>
          </div>
        </div>

        {/* CONTROLS: Search, Status Filter, Refresh & Overall Download */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search campaign name or ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-9 pl-8 pr-3 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-indigo-500 focus:outline-none transition-all w-56 text-slate-700"
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="h-9 px-3 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-700 focus:bg-white focus:border-indigo-500 focus:outline-none transition-colors cursor-pointer"
          >
            <option value="ALL">All Statuses</option>
            <option value="RUNNING">Running / Active</option>
            <option value="PAUSED">Paused</option>
            <option value="IDLE">Idle</option>
            <option value="COMPLETED">Completed</option>
          </select>

          <button
            onClick={() => fetchCampaigns(true)}
            disabled={loading || refreshing}
            title="Refresh campaign records from database"
            className="h-9 px-3 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-60 shadow-2xs"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-slate-600 ${refreshing ? "animate-spin" : ""}`} />
            <span>Refresh</span>
          </button>

          {campaigns.length > 0 && (
            <>
              <button
                onClick={exportToExcel}
                title="Download full campaign report as Excel / CSV"
                className="h-9 px-3.5 rounded-xl border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs"
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                <span>Export Excel</span>
              </button>
              <button
                onClick={exportToPDF}
                title="Download full campaign report as PDF"
                className="h-9 px-3.5 rounded-xl border border-rose-300 bg-rose-50 hover:bg-rose-100 text-rose-800 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs"
              >
                <FileText className="w-3.5 h-3.5 text-rose-600" />
                <span>Export PDF</span>
              </button>
            </>
          )}
        </div>
      </div>

      {/* ERROR ALERT */}
      {error && (
        <div className="p-4 mx-6 my-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{error}</span>
          </div>
          <button
            onClick={() => fetchCampaigns()}
            className="text-xs font-bold text-rose-700 hover:text-rose-900 underline cursor-pointer ml-3"
          >
            Retry
          </button>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 10 OVERALL AGGREGATED SUMMARY CARDS */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 p-6 bg-slate-50/50 border-b border-slate-100">
        {/* Card 1: Total Relevant Campaigns */}
        <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-2xs">
          <div className="flex items-center justify-between text-slate-500 text-[11px] font-medium">
            <span>Relevant Campaigns</span>
            <Layers className="w-4 h-4 text-indigo-500" />
          </div>
          <div className="text-xl font-extrabold text-slate-900 mt-1">
            {computedCards.total_campaigns.toLocaleString()}
          </div>
          <div className="text-[10px] text-slate-400 mt-0.5">Active Lifecycle Campaigns</div>
        </div>

        {/* Card 2: Total Leads Assigned */}
        <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-2xs">
          <div className="flex items-center justify-between text-slate-500 text-[11px] font-medium">
            <span>Total Leads Assigned</span>
            <Users className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-xl font-extrabold text-slate-900 mt-1">
            {computedCards.total_leads_assigned.toLocaleString()}
          </div>
          <div className="text-[10px] text-slate-400 mt-0.5">Assigned to Campaigns</div>
        </div>

        {/* Card 3: Total Calls Attempted */}
        <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-2xs">
          <div className="flex items-center justify-between text-slate-500 text-[11px] font-medium">
            <span>Calls Attempted</span>
            <Phone className="w-4 h-4 text-violet-500" />
          </div>
          <div className="text-xl font-extrabold text-indigo-700 mt-1">
            {computedCards.total_calls_attempted.toLocaleString()}
          </div>
          <div className="text-[10px] text-indigo-500 mt-0.5">Dialed Lead Attempts</div>
        </div>

        {/* Card 4: Total Connected Calls */}
        <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-2xs">
          <div className="flex items-center justify-between text-slate-500 text-[11px] font-medium">
            <span>Connected Calls</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-xl font-extrabold text-emerald-600 mt-1">
            {computedCards.total_connected_calls.toLocaleString()}
          </div>
          <div className="text-[10px] text-emerald-600 mt-0.5">Live Answered Calls</div>
        </div>

        {/* Card 5: Unanswered / Failed */}
        <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-2xs">
          <div className="flex items-center justify-between text-slate-500 text-[11px] font-medium">
            <span>Unanswered / Failed</span>
            <XCircle className="w-4 h-4 text-rose-500" />
          </div>
          <div className="text-xl font-extrabold text-rose-600 mt-1">
            {computedCards.total_unanswered_or_failed_calls.toLocaleString()}
          </div>
          <div className="text-[10px] text-rose-500 mt-0.5">Missed or Busy</div>
        </div>

        {/* Card 6: Qualified Leads */}
        <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-2xs">
          <div className="flex items-center justify-between text-slate-500 text-[11px] font-medium">
            <span>Qualified Leads</span>
            <Award className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-xl font-extrabold text-emerald-600 mt-1">
            {computedCards.total_qualified_leads.toLocaleString()}
          </div>
          <div className="text-[10px] text-emerald-600 mt-0.5">Sales & Qualified</div>
        </div>

        {/* Card 7: Not Qualified Leads */}
        <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-2xs">
          <div className="flex items-center justify-between text-slate-500 text-[11px] font-medium">
            <span>Not Qualified Leads</span>
            <AlertCircle className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-xl font-extrabold text-slate-700 mt-1">
            {computedCards.total_not_qualified_leads.toLocaleString()}
          </div>
          <div className="text-[10px] text-slate-400 mt-0.5">Rejected / Not Interested</div>
        </div>

        {/* Card 8: Total Talk Time */}
        <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-2xs">
          <div className="flex items-center justify-between text-slate-500 text-[11px] font-medium">
            <span>Total Talk Time</span>
            <Clock className="w-4 h-4 text-cyan-600" />
          </div>
          <div className="text-xl font-extrabold text-slate-900 mt-1 font-mono">
            {computedCards.total_call_talk_time}
          </div>
          <div className="text-[10px] text-cyan-600 mt-0.5">Active Connect Duration</div>
        </div>

        {/* Card 9: Connection Rate */}
        <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-2xs">
          <div className="flex items-center justify-between text-slate-500 text-[11px] font-medium">
            <span>Connection Rate</span>
            <TrendingUp className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-xl font-extrabold text-emerald-700 mt-1">
            {computedCards.overall_connection_rate}%
          </div>
          <div className="text-[10px] text-emerald-600 mt-0.5">Connected / Total Calls</div>
        </div>

        {/* Card 10: Qualification Rate */}
        <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-2xs">
          <div className="flex items-center justify-between text-slate-500 text-[11px] font-medium">
            <span>Qualification Rate</span>
            <Activity className="w-4 h-4 text-indigo-600" />
          </div>
          <div className="text-xl font-extrabold text-indigo-700 mt-1">
            {computedCards.overall_qualification_rate}%
          </div>
          <div className="text-[10px] text-indigo-600 mt-0.5">Qualified / Total Leads</div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TABLE CONTAINER */}
      {/* ========================================================================= */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs min-w-[1500px]">
          <thead>
            <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[11px]">
              <th className="py-3 px-4">Campaign Name</th>
              <th className="py-3 px-3">Campaign ID</th>
              <th className="py-3 px-3">Assigned Agent</th>
              <th className="py-3 px-3">Agent Type</th>
              <th className="py-3 px-3">Target Client</th>
              <th className="py-3 px-3">Lead List</th>
              <th className="py-3 px-3">Campaign Status</th>
              <th className="py-3 px-3 text-right">Leads Assigned</th>
              <th className="py-3 px-3 text-right">Calls Attempted</th>
              <th className="py-3 px-3 text-right">Connected</th>
              <th className="py-3 px-3 text-right">Not Connected</th>
              <th className="py-3 px-3 text-right">Qualified Leads</th>
              <th className="py-3 px-3 text-right">Not Qualified</th>
              <th className="py-3 px-3 text-right">Total Talk Time</th>
              <th className="py-3 px-3 text-right">Avg Duration</th>
              <th className="py-3 px-3">Created Date</th>
              <th className="py-3 px-3">Last Activity</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading ? (
              <tr>
                <td colSpan={18} className="py-12 text-center text-slate-500">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <RefreshCw className="w-5 h-5 text-indigo-500 animate-spin" />
                    <span className="font-semibold text-xs">Loading campaign records from database...</span>
                  </div>
                </td>
              </tr>
            ) : campaigns.length === 0 ? (
              <tr>
                <td colSpan={18} className="py-12 text-center text-slate-400">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <Layers className="w-8 h-8 text-slate-300" />
                    <span className="font-semibold text-slate-600 text-sm">No campaigns found</span>
                    <span className="text-slate-400 text-xs">
                      {searchQuery ? `No campaigns matched "${searchQuery}".` : "There are currently no relevant campaigns executed in this system."}
                    </span>
                  </div>
                </td>
              </tr>
            ) : (
              campaigns.map((camp) => (
                <tr
                  key={camp.campaign_id}
                  className="hover:bg-indigo-50/40 transition-colors group cursor-pointer"
                  onClick={() => handleOpenDetail(camp.campaign_id)}
                  title="Click to view detailed campaign summary"
                >
                  {/* 1. Campaign Name */}
                  <td className="py-3.5 px-4 font-bold text-slate-900 group-hover:text-indigo-600 transition-colors whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span>{camp.campaign_name}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-indigo-500 transition-all opacity-0 group-hover:opacity-100" />
                    </div>
                  </td>

                  {/* 2. Campaign ID */}
                  <td className="py-3.5 px-3 whitespace-nowrap">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(camp.campaign_id);
                      }}
                      title="Copy full Campaign ID"
                      className="font-mono text-[11px] text-slate-500 hover:text-indigo-600 bg-slate-50 hover:bg-slate-100 px-2 py-0.5 rounded border border-slate-200 transition-colors inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>{camp.campaign_id.slice(0, 8)}...</span>
                      {copiedId === camp.campaign_id ? (
                        <Check className="w-3 h-3 text-emerald-600" />
                      ) : (
                        <Copy className="w-3 h-3 text-slate-400" />
                      )}
                    </button>
                  </td>

                  {/* 3. Assigned Agent */}
                  <td className="py-3.5 px-3 font-semibold text-slate-800 whitespace-nowrap">
                    <div className="flex items-center gap-1.5">
                      {camp.agent_type === "Voice Agent" ? (
                        <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Bot className="w-3.5 h-3.5 text-indigo-600" />
                      )}
                      <span>{camp.assigned_agent}</span>
                    </div>
                  </td>

                  {/* 4. Agent Type */}
                  <td className="py-3.5 px-3 whitespace-nowrap">
                    {renderAgentTypeBadge(camp.agent_type)}
                  </td>

                  {/* 5. Target Client */}
                  <td className="py-3.5 px-3 text-slate-700 whitespace-nowrap">
                    {camp.target_client || camp.client_name || "—"}
                  </td>

                  {/* 6. Lead List */}
                  <td className="py-3.5 px-3 text-slate-600 whitespace-nowrap">
                    {camp.lead_list || "Lead Library"}
                  </td>

                  {/* 7. Campaign Status */}
                  <td className="py-3.5 px-3 whitespace-nowrap">
                    {renderStatusBadge(camp.campaign_status)}
                  </td>

                  {/* 8. Total Leads Assigned */}
                  <td className="py-3.5 px-3 text-right font-semibold text-slate-800">
                    {camp.total_leads_assigned.toLocaleString()}
                  </td>

                  {/* 9. Total Calls Attempted */}
                  <td className="py-3.5 px-3 text-right font-semibold text-indigo-700">
                    {(camp.total_calls_attempted ?? camp.total_leads_attempted).toLocaleString()}
                  </td>

                  {/* 10. Connected Calls */}
                  <td className="py-3.5 px-3 text-right font-bold text-emerald-600">
                    {camp.total_calls_connected.toLocaleString()}
                  </td>

                  {/* 11. Not Connected Calls */}
                  <td className="py-3.5 px-3 text-right font-medium text-slate-500">
                    {camp.total_calls_not_connected.toLocaleString()}
                  </td>

                  {/* 12. Qualified Leads */}
                  <td className="py-3.5 px-3 text-right font-bold text-emerald-600">
                    {camp.total_qualified_leads.toLocaleString()}
                  </td>

                  {/* 13. Not Qualified Leads */}
                  <td className="py-3.5 px-3 text-right font-medium text-rose-500">
                    {camp.total_not_qualified_leads.toLocaleString()}
                  </td>

                  {/* 14. Total Talk Time */}
                  <td className="py-3.5 px-3 text-right font-mono font-semibold text-slate-800">
                    {camp.total_call_duration}
                  </td>

                  {/* 15. Average Call Duration */}
                  <td className="py-3.5 px-3 text-right font-mono text-slate-600">
                    {camp.avg_call_duration}
                  </td>

                  {/* 16. Created Date */}
                  <td className="py-3.5 px-3 text-slate-600 text-[11px] whitespace-nowrap">
                    {camp.created_date || camp.campaign_start_time}
                  </td>

                  {/* 17. Last Activity */}
                  <td className="py-3.5 px-3 text-slate-600 text-[11px] whitespace-nowrap">
                    {camp.last_activity || camp.campaign_end_time}
                  </td>

                  {/* 18. Actions */}
                  <td className="py-3.5 px-4 text-center whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                    <div className="inline-flex items-center gap-1.5">
                      {/* Action 1: View Campaign Details */}
                      <button
                        onClick={() => handleOpenDetail(camp.campaign_id)}
                        title="View Detailed Campaign Summary & Lead Telemetry"
                        className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 transition-all cursor-pointer shadow-2xs hover:text-indigo-600"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>

                      {/* Action 2: Open Agent Dashboard */}
                      <button
                        onClick={() => handleOpenDashboard(camp.campaign_id)}
                        title={`Open ${camp.agent_type} Dashboard`}
                        className="px-2 py-1 rounded-lg border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-[11px] flex items-center gap-1 transition-all cursor-pointer shadow-2xs"
                      >
                        <BarChart3 className="w-3.5 h-3.5" />
                        <span>Dashboard</span>
                      </button>

                      {/* Action 3: Download Campaign Report */}
                      <button
                        onClick={() => handleDownload(camp.campaign_id, "excel")}
                        disabled={downloadingId === `${camp.campaign_id}-excel`}
                        title="Download Campaign Report as Excel (.xlsx)"
                        className="p-1.5 rounded-lg border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 transition-all cursor-pointer shadow-2xs disabled:opacity-60"
                      >
                        {downloadingId === `${camp.campaign_id}-excel` ? (
                          <RefreshCw className="w-3.5 h-3.5 text-emerald-600 animate-spin" />
                        ) : (
                          <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                        )}
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* FOOTER SUMMARY */}
      <div className="p-4 bg-slate-50/80 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-emerald-600" />
          <span>Calculations computed from real database call history and campaign lead tables.</span>
        </div>
        <div className="text-[11px] text-slate-400">
          Showing {campaigns.length} total relevant campaigns.
        </div>
      </div>

      {/* ========================================================================= */}
      {/* CAMPAIGN-WISE DETAILED SUMMARY MODAL */}
      {/* ========================================================================= */}
      {selectedCampaignId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-6xl max-h-[92vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-150">
            
            {/* MODAL HEADER */}
            <div className="p-5 md:p-6 border-b border-slate-200 flex items-start justify-between gap-4 bg-slate-50/60">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center text-xl shrink-0">
                  📊
                </div>
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-lg md:text-xl font-extrabold text-slate-900 tracking-tight">
                      {detailData?.campaign?.name || "Campaign Details"}
                    </h3>
                    {detailData?.campaign && renderStatusBadge(detailData.campaign.status)}
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-xs text-slate-500 flex-wrap">
                    <span className="font-mono bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-600">
                      ID: {selectedCampaignId}
                    </span>
                    <button
                      onClick={() => copyToClipboard(selectedCampaignId)}
                      className="text-indigo-600 hover:text-indigo-800 text-[11px] font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      {copiedId === selectedCampaignId ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedId === selectedCampaignId ? "Copied" : "Copy ID"}</span>
                    </button>
                    {detailData?.campaign?.client_name && detailData.campaign.client_name !== "—" && (
                      <span>· Client: <strong className="text-slate-700">{detailData.campaign.client_name}</strong></span>
                    )}
                  </div>
                </div>
              </div>

              {/* ACTION DOWNLOAD & CLOSE */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => handleDownload(selectedCampaignId, "excel")}
                  className="px-3 py-1.5 rounded-xl border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs"
                  title="Download complete campaign details as Excel"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Download Excel</span>
                </button>
                <button
                  onClick={() => handleDownload(selectedCampaignId, "csv")}
                  className="px-3 py-1.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs"
                  title="Download complete campaign details as CSV"
                >
                  <Download className="w-3.5 h-3.5 text-slate-500" />
                  <span>Download CSV</span>
                </button>
                <button
                  onClick={handleCloseDetail}
                  className="w-8 h-8 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors cursor-pointer ml-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* MODAL BODY */}
            <div className="p-5 md:p-6 overflow-y-auto space-y-6 flex-1 text-slate-700">
              {detailLoading ? (
                <div className="py-20 flex flex-col items-center justify-center gap-3 text-slate-500">
                  <RefreshCw className="w-8 h-8 text-indigo-500 animate-spin" />
                  <span className="font-semibold text-sm">Aggregating live lead and call records for this campaign...</span>
                </div>
              ) : detailError ? (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{detailError}</span>
                </div>
              ) : detailData ? (
                <>
                  {/* KPI SUMMARY CARDS */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Performance Summary
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                      <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5">
                        <div className="text-slate-500 text-[11px] font-medium">Total Leads Assigned</div>
                        <div className="text-xl font-extrabold text-slate-900 mt-1">
                          {detailData.performance_summary.total_leads_assigned.toLocaleString()}
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Assigned to Campaign</div>
                      </div>

                      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-3.5">
                        <div className="text-indigo-700 text-[11px] font-medium">Leads Attempted</div>
                        <div className="text-xl font-extrabold text-indigo-900 mt-1">
                          {detailData.performance_summary.total_leads_attempted.toLocaleString()}
                        </div>
                        <div className="text-[10px] text-indigo-600 mt-0.5">Attempted Calls</div>
                      </div>

                      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5">
                        <div className="text-emerald-700 text-[11px] font-medium">Calls Connected</div>
                        <div className="text-xl font-extrabold text-emerald-900 mt-1">
                          {detailData.performance_summary.total_calls_connected.toLocaleString()}
                        </div>
                        <div className="text-[10px] text-emerald-600 mt-0.5">
                          {detailData.performance_summary.connection_rate} Connected
                        </div>
                      </div>

                      <div className="bg-rose-50 border border-rose-200 rounded-xl p-3.5">
                        <div className="text-rose-700 text-[11px] font-medium">Not Connected / Failed</div>
                        <div className="text-xl font-extrabold text-rose-900 mt-1">
                          {detailData.performance_summary.total_calls_not_connected.toLocaleString()}
                        </div>
                        <div className="text-[10px] text-rose-600 mt-0.5">Unanswered / Failed</div>
                      </div>

                      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5">
                        <div className="text-emerald-700 text-[11px] font-medium">Qualified Leads</div>
                        <div className="text-xl font-extrabold text-emerald-900 mt-1">
                          {detailData.performance_summary.total_qualified_leads.toLocaleString()}
                        </div>
                        <div className="text-[10px] text-emerald-600 mt-0.5">
                          {detailData.performance_summary.qualification_rate} Conversion
                        </div>
                      </div>

                      <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5">
                        <div className="text-amber-700 text-[11px] font-medium">Total Talk Time</div>
                        <div className="text-xl font-extrabold text-amber-900 mt-1 font-mono">
                          {detailData.performance_summary.total_call_duration}
                        </div>
                        <div className="text-[10px] text-amber-600 mt-0.5">
                          Avg: {detailData.performance_summary.avg_call_duration}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* EXECUTION TELEMETRY & DISPOSITIONS */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Execution details */}
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs space-y-2">
                      <h4 className="font-bold text-slate-800 text-xs mb-2 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-indigo-600" />
                        <span>Campaign Execution Telemetry</span>
                      </h4>
                      <div className="flex justify-between border-b border-slate-200 pb-1.5">
                        <span className="text-slate-500">Agent Type:</span>
                        <span className="font-semibold text-slate-800">{detailData.campaign.agent_type}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200 pb-1.5">
                        <span className="text-slate-500">Auto Dial Status:</span>
                        <span className="font-semibold text-slate-800">
                          {detailData.campaign.auto_dial_enabled ? `Enabled (${detailData.campaign.auto_dial_ratio}x)` : "Manual Dial"}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200 pb-1.5">
                        <span className="text-slate-500">Campaign Created:</span>
                        <span className="font-semibold text-slate-800">{detailData.campaign.created_at}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200 pb-1.5">
                        <span className="text-slate-500">Campaign Started:</span>
                        <span className="font-semibold text-slate-800">{detailData.campaign.started_at}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Last Activity:</span>
                        <span className="font-semibold text-slate-800">{detailData.campaign.last_activity}</span>
                      </div>
                    </div>

                    {/* Dispositions Breakdown */}
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs">
                      <h4 className="font-bold text-slate-800 text-xs mb-3 flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Stored Call Dispositions & Outcomes</span>
                      </h4>
                      {detailData.dispositions && detailData.dispositions.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {detailData.dispositions.map((disp) => (
                            <div
                              key={disp.label}
                              className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 flex items-center gap-2 shadow-2xs"
                            >
                              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: disp.color }}></span>
                              <span className="font-semibold text-slate-700">{disp.label}</span>
                              <span className="font-bold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded text-[10px]">
                                {disp.count}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-slate-400 italic">No specific disposition recorded yet.</p>
                      )}
                    </div>
                  </div>

                  {/* LEAD-LEVEL DETAILED TABLE */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                          <Users className="w-4 h-4 text-indigo-600" />
                          <span>Associated Lead Records ({filteredModalLeads.length})</span>
                        </h4>
                        <p className="text-slate-500 text-xs">
                          Individual lead progress, attempt counts, connection status, durations, and call dispositions.
                        </p>
                      </div>

                      <div className="relative">
                        <Search className="w-3 h-3 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder="Filter leads..."
                          value={detailLeadSearch}
                          onChange={(e) => setDetailLeadSearch(e.target.value)}
                          className="h-8 pl-7 pr-2.5 text-xs rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-indigo-500 w-48 text-slate-700"
                        />
                      </div>
                    </div>

                    <div className="border border-slate-200 rounded-xl overflow-x-auto max-h-[380px]">
                      <table className="w-full text-left border-collapse text-xs min-w-[900px]">
                        <thead className="sticky top-0 bg-slate-100 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[10px]">
                          <tr>
                            <th className="py-2.5 px-3">Lead Name</th>
                            <th className="py-2.5 px-3">Phone Number</th>
                            <th className="py-2.5 px-3">Lead ID</th>
                            <th className="py-2.5 px-3">Call Status</th>
                            <th className="py-2.5 px-3 text-right">Attempts</th>
                            <th className="py-2.5 px-3">Connection</th>
                            <th className="py-2.5 px-3">Start / End Time</th>
                            <th className="py-2.5 px-3 text-right">Duration</th>
                            <th className="py-2.5 px-3">Disposition / Result</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 bg-white">
                          {filteredModalLeads.length === 0 ? (
                            <tr>
                              <td colSpan={9} className="py-8 text-center text-slate-400">
                                No lead records match the search filter.
                              </td>
                            </tr>
                          ) : (
                            filteredModalLeads.map((lead: CampaignWiseLeadItem) => (
                              <tr key={lead.lead_id} className="hover:bg-slate-50 transition-colors">
                                <td className="py-2.5 px-3 font-semibold text-slate-900">
                                  {lead.lead_name}
                                  {lead.company && lead.company !== "—" && (
                                    <div className="text-[10px] text-slate-400 font-normal">{lead.company}</div>
                                  )}
                                </td>
                                <td className="py-2.5 px-3 font-mono text-slate-700">
                                  {lead.phone}
                                </td>
                                <td className="py-2.5 px-3 font-mono text-[10px] text-slate-500">
                                  {lead.lead_id.slice(0, 8)}...
                                </td>
                                <td className="py-2.5 px-3">
                                  <span className="font-semibold text-slate-700 uppercase text-[10px]">
                                    {lead.call_status}
                                  </span>
                                </td>
                                <td className="py-2.5 px-3 text-right font-bold text-indigo-700">
                                  {lead.attempt_count}
                                </td>
                                <td className="py-2.5 px-3">
                                  <span
                                    className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                      lead.connection_status === "Connected"
                                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                        : lead.connection_status === "Not Connected"
                                        ? "bg-rose-50 text-rose-700 border border-rose-200"
                                        : "bg-slate-100 text-slate-600"
                                    }`}
                                  >
                                    {lead.connection_status}
                                  </span>
                                </td>
                                <td className="py-2.5 px-3 text-[10px] text-slate-600 whitespace-nowrap">
                                  <div>{lead.call_start_time}</div>
                                  {lead.call_end_time && lead.call_end_time !== "—" && (
                                    <div className="text-slate-400">End: {lead.call_end_time}</div>
                                  )}
                                </td>
                                <td className="py-2.5 px-3 text-right font-mono font-semibold text-slate-800">
                                  {lead.duration}
                                </td>
                                <td className="py-2.5 px-3">
                                  <span className="inline-flex px-2 py-0.5 rounded font-semibold text-[10px] bg-indigo-50 text-indigo-800 border border-indigo-100">
                                    {lead.disposition}
                                  </span>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              ) : null}
            </div>

            {/* MODAL FOOTER */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-between items-center text-xs">
              <span className="text-slate-500">
                Data retrieved from real live telephony records in database.
              </span>
              <button
                onClick={handleCloseDetail}
                className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
