// @ts-nocheck
"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { adminService, AdminCampaign, AdminLead, AdminCall, AdminLeadGroup } from "@/lib/services/admin.service";
import { campaignService } from "@/lib/services/campaign.service";
import { leadService } from "@/lib/services/lead.service";
import { agentService, Agent } from "@/lib/services/agent.service";
import { voiceAgentService, VoiceAgent } from "@/lib/services/voice-agent.service";
import { sipAccountService, SIPAccountOut } from "@/lib/services/sip-account.service";
import { LocalVoiceTestModal } from "@/components/campaign/LocalVoiceTestModal";
import { reportService, CampaignWiseDetailResponse, CampaignWiseLeadItem } from "@/lib/services/report.service";
import { useWebSocketSync } from "@/lib/hooks/useWebSocketSync";
import { 
  Play, Users, PhoneCall, Shield, PhoneIncoming, PhoneOutgoing, 
  Trash2, CheckCircle2, AlertTriangle, Pause, Plus, Eye, FolderOpen, X, Phone, Edit2, FileText, BarChart3,
  FileSpreadsheet, Download, RefreshCw, Clock, TrendingUp
} from "lucide-react";
import { formatDateTime } from "@/lib/date-utils";

function AdminCampaignsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<"campaigns" | "leads" | "calls" | "uploads">("campaigns");
  const [campaigns, setCampaigns] = useState<AdminCampaign[]>([]);
  const [leads, setLeads] = useState<AdminLead[]>([]);
  const [calls, setCalls] = useState<AdminCall[]>([]);
  const [leadGroups, setLeadGroups] = useState<AdminLeadGroup[]>([]);
  const [agents, setAgents] = useState<Agent[]>([]);
  const [voiceAgents, setVoiceAgents] = useState<VoiceAgent[]>([]);
  const [activeVoiceSessions, setActiveVoiceSessions] = useState<
    Record<string, { campaign: AdminCampaign; isMinimized: boolean }>
  >({});
  const [startingCampaignIds, setStartingCampaignIds] = useState<Set<string>>(new Set());

  const handleOpenVoiceTest = (c: AdminCampaign) => {
    setActiveVoiceSessions((prev) => {
      const updated: Record<string, { campaign: AdminCampaign; isMinimized: boolean }> = {};
      Object.keys(prev).forEach((id) => {
        updated[id] = { ...prev[id], isMinimized: true };
      });
      updated[c.id] = { campaign: c, isMinimized: false };
      return updated;
    });
  };

  const handleCloseVoiceTest = (campaignId: string) => {
    setActiveVoiceSessions((prev) => {
      const next = { ...prev };
      delete next[campaignId];
      return next;
    });
  };

  const handleToggleMinimize = (campaignId: string, minimized: boolean) => {
    setActiveVoiceSessions((prev) => {
      if (!prev[campaignId]) return prev;
      return {
        ...prev,
        [campaignId]: {
          ...prev[campaignId],
          isMinimized: minimized,
        },
      };
    });
  };

  // Edit Campaign State
  const [editingCampaign, setEditingCampaign] = useState<AdminCampaign | null>(null);
  const [editName, setEditName] = useState("");
  const [editTwilioNumber, setEditTwilioNumber] = useState("");
  const [editStatus, setEditStatus] = useState("IDLE");

  // View Campaign Details State
  const [viewingCampaign, setViewingCampaign] = useState<any | null>(null);
  const [viewingCampaignLeads, setViewingCampaignLeads] = useState<any[]>([]);
  const [loadingCampaignDetails, setLoadingCampaignDetails] = useState(false);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Campaign Report Modal State
  const [reportCampaign, setReportCampaign] = useState<AdminCampaign | null>(null);
  const [reportData, setReportData] = useState<CampaignWiseDetailResponse | null>(null);
  const [reportLoading, setReportLoading] = useState(false);
  const [reportError, setReportError] = useState<string | null>(null);

  const handleOpenReport = async (c: AdminCampaign) => {
    setReportCampaign(c);
    setReportData(null);
    setReportError(null);
    setReportLoading(true);
    try {
      const data = await reportService.getCampaignWiseDetail(c.id);
      setReportData(data);
    } catch (err: any) {
      setReportError(err?.message || "Failed to load campaign report.");
    } finally {
      setReportLoading(false);
    }
  };

  const handleCloseReport = () => {
    setReportCampaign(null);
    setReportData(null);
    setReportError(null);
  };

  const handleReportExcelDownload = () => {
    if (!reportCampaign || !reportData) return;
    const now = new Date();
    const dateStr = now.toISOString().slice(0, 10);
    const summary = reportData.summary;
    const leads: CampaignWiseLeadItem[] = reportData.leads || [];

    const summaryRows = [
      [`CAMPAIGN REPORT — ${(reportCampaign.name || "").toUpperCase()}`],
      ["Generated At", now.toLocaleString()],
      ["Campaign ID", reportCampaign.id],
      ["Status", summary?.campaign_status || reportCampaign.status || ""],
      ["Assigned Agent", summary?.assigned_agent || ""],
      ["Agent Type", summary?.agent_type || ""],
      ["Target Client", summary?.target_client || ""],
      ["Lead List", summary?.lead_list || "Lead Library"],
      [""],
      ["--- METRICS ---"],
      ["Total Leads Assigned", summary?.total_leads_assigned ?? 0],
      ["Calls Attempted", summary?.total_calls_attempted ?? 0],
      ["Connected Calls", summary?.total_calls_connected ?? 0],
      ["Not Connected", summary?.total_calls_not_connected ?? 0],
      ["Qualified Leads", summary?.total_qualified_leads ?? 0],
      ["Not Qualified", summary?.total_not_qualified_leads ?? 0],
      ["Total Talk Time", summary?.total_call_duration || "00:00"],
      ["Avg Call Duration", summary?.avg_call_duration || "00:00"],
      [""],
      ["--- LEAD DETAILS ---"],
    ];

    const headers = ["Lead Name", "Phone", "Email", "Company", "Lead Status", "Calls Made", "Last Call", "Talk Duration", "Call Status", "Disposition", "Transcript"];
    const rows = leads.map((l) => [
      `"${(l.lead_name || "").replace(/"/g, '""')}"`,
      `"${l.phone || ""}"`,
      `"${l.email || ""}"`,
      `"${(l.company || "").replace(/"/g, '""')}"`,
      `"${l.lead_status || ""}"`,
      l.call_count || 0,
      `"${l.last_call_time || "Never"}"`,
      `"${l.duration || "00:00"}"`,
      `"${l.call_status || ""}"`,
      `"${(l.disposition || "").replace(/"/g, '""')}"`,
      `"${(l.transcript || "").replace(/"/g, '""').replace(/\n/g, " ")}"`,
    ]);

    const allLines = [
      ...summaryRows.map((r) => r.join(",")),
      headers.join(","),
      ...rows.map((r) => r.join(",")),
    ];

    const csvContent = "data:text/csv;charset=utf-8,\uFEFF" + allLines.join("\n");
    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    const cleanName = (reportCampaign.name || "campaign").replace(/[^a-zA-Z0-9_-]/g, "_").toLowerCase();
    link.setAttribute("download", `${cleanName}_report_${dateStr}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleReportPDFDownload = () => {
    if (!reportCampaign || !reportData) return;
    const now = new Date();
    const summary = reportData.summary;
    const leads: CampaignWiseLeadItem[] = reportData.leads || [];

    const metricRows: [string, string | number][] = [
      ["Total Leads Assigned", summary?.total_leads_assigned ?? 0],
      ["Calls Attempted", summary?.total_calls_attempted ?? 0],
      ["Connected Calls", summary?.total_calls_connected ?? 0],
      ["Not Connected", summary?.total_calls_not_connected ?? 0],
      ["Qualified Leads", summary?.total_qualified_leads ?? 0],
      ["Not Qualified", summary?.total_not_qualified_leads ?? 0],
      ["Total Talk Time", summary?.total_call_duration || "00:00"],
      ["Avg Duration", summary?.avg_call_duration || "00:00"],
    ];

    const leadRows = leads.map((l) => `
      <tr>
        <td>${l.lead_name || "—"}</td>
        <td>${l.phone || "—"}</td>
        <td>${l.lead_status || "—"}</td>
        <td>${l.call_count || 0}</td>
        <td>${l.duration || "00:00"}</td>
        <td>${l.call_status || "—"}</td>
        <td>${l.disposition || "—"}</td>
      </tr>`
    ).join("");

    const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <title>Campaign Report — ${reportCampaign.name}</title>
  <style>
    * { margin:0; padding:0; box-sizing:border-box; font-family:Arial,sans-serif; }
    body { background:#fff; color:#111; padding:24px; font-size:11px; }
    h1 { font-size:20px; font-weight:800; color:#1e1b4b; margin-bottom:4px; }
    .subtitle { color:#64748b; font-size:11px; margin-bottom:20px; }
    .section-title { font-size:13px; font-weight:700; color:#1e1b4b; margin:18px 0 8px; border-bottom:2px solid #6366f1; padding-bottom:4px; }
    .meta { display:flex; flex-wrap:wrap; gap:10px; margin-bottom:16px; }
    .meta-item { border:1px solid #e2e8f0; border-radius:8px; padding:8px 12px; background:#f8fafc; min-width:130px; }
    .meta-item .label { font-size:10px; color:#64748b; font-weight:600; }
    .meta-item .value { font-size:14px; font-weight:800; color:#1e1b4b; }
    table { width:100%; border-collapse:collapse; font-size:10px; }
    th { background:#f1f5f9; color:#475569; font-weight:700; text-transform:uppercase; padding:7px 6px; text-align:left; border-bottom:2px solid #cbd5e1; }
    td { padding:6px; border-bottom:1px solid #e2e8f0; color:#1e293b; vertical-align:top; }
    tr:nth-child(even) td { background:#f8fafc; }
    .footer { margin-top:24px; color:#94a3b8; font-size:10px; border-top:1px solid #e2e8f0; padding-top:8px; }
    @media print { body { padding:10px; } }
  </style>
</head>
<body>
  <h1>📊 Campaign Report — ${reportCampaign.name}</h1>
  <p class="subtitle">Generated: ${now.toLocaleString()} &nbsp;|&nbsp; Status: ${summary?.campaign_status || reportCampaign.status || "—"} &nbsp;|&nbsp; Agent: ${summary?.assigned_agent || "—"}</p>
  <div class="section-title">Campaign Metrics</div>
  <div class="meta">
    ${metricRows.map(([label, value]) => `<div class="meta-item"><div class="label">${label}</div><div class="value">${value}</div></div>`).join("")}
  </div>
  <div class="section-title">Lead Details (${leads.length} leads)</div>
  <table>
    <thead><tr>
      <th>Lead Name</th><th>Phone</th><th>Lead Status</th>
      <th>Calls</th><th>Duration</th><th>Call Status</th><th>Disposition</th>
    </tr></thead>
    <tbody>${leadRows}</tbody>
  </table>
  <div class="footer">GBZ CRM &mdash; Campaign Report: ${reportCampaign.name} &mdash; ${now.toLocaleString()}</div>
  <script>window.onload=function(){window.print();window.onafterprint=function(){window.close();};}<\/script>
</body>
</html>`;

    const win = window.open("", "_blank", "width=1200,height=800");
    if (win) {
      win.document.write(html);
      win.document.close();
    } else {
      alert("Pop-up blocked. Please allow pop-ups and try again.");
    }
  };

  useEffect(() => {
    const runTestingCampaignId = searchParams.get("run_testing");
    if (runTestingCampaignId) {
      campaignService
        .get(runTestingCampaignId)
        .then((campaign: any) => {
          if (campaign) {
            window.history.replaceState({}, "", "/admin/campaigns");
            handleOpenVoiceTest(campaign as any);
          }
        })
        .catch((err: any) => {
          console.warn("Failed to load testing campaign by ID:", err);
        });
    }
  }, [searchParams]);

  // New Campaign Form State
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [sipAccounts, setSipAccounts] = useState<SIPAccountOut[]>([]);
  const [campaignForm, setCampaignForm] = useState({
    name: "",
    description: "",
    objective: "",
    agent_type: "AI_AGENT",
    agent_id: "",
    voice_agent_id: "",
    twilio_number: "",
    sip_account_id: "",
    caller_did_id: "",
    selected_lead_ids: [] as string[],
    default_language: "auto",
  });

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      if (activeTab === "campaigns") {
        const data = await adminService.getCampaigns();
        setCampaigns(data);
        const agentData = await agentService.list().catch(() => []);
        setAgents(agentData);
        const voiceData = await voiceAgentService.list().catch(() => []);
        setVoiceAgents(voiceData);
        const leadData = await adminService.getLeads();
        setLeads(leadData);
        const sipData = await sipAccountService.list().catch(() => []);
        setSipAccounts(sipData);
        // Default Twilio phone number configuration
        try {
          const twilioData = await campaignService.getTwilioNumber();
          if (twilioData?.twilio_phone_number) {
            setCampaignForm((f) => ({ ...f, twilio_number: twilioData.twilio_phone_number }));
          }
        } catch (e) {}
      } else if (activeTab === "leads") {
        const data = await adminService.getLeads();
        setLeads(data);
      } else if (activeTab === "calls") {
        const data = await adminService.getCalls();
        setCalls(data);
      } else if (activeTab === "uploads") {
        const data = await adminService.getLeadUploads();
        setLeadGroups(data);
      }
    } catch (err: any) {
      setError(err.message || "Failed to retrieve logs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [activeTab]);

  useWebSocketSync((data) => {
    if (data.event === "campaign_status_changed" && data.campaign_id) {
      setCampaigns((prev) =>
        prev.map((c) =>
          c.id === data.campaign_id
            ? { ...c, status: data.status as any }
            : c
        )
      );
    }
  }, () => {
    loadData();
  });

  const handleStartCampaign = async (id: string, name: string) => {
    if (startingCampaignIds.has(id)) return;
    setStartingCampaignIds((prev) => new Set(prev).add(id));
    setError(null);
    setSuccess(null);
    try {
      await campaignService.start(id);
      setSuccess(`Campaign "${name}" has been started`);
      loadData();
    } catch (err: any) {
      setError(err.message || "Failed to start campaign");
    } finally {
      setStartingCampaignIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }
  };

  const handlePauseCampaign = async (id: string, name: string) => {
    setError(null);
    setSuccess(null);
    try {
      await campaignService.pause(id);
      setSuccess(`Campaign "${name}" has been paused`);
      loadData();
    } catch (err: any) {
      setError(err.message || "Failed to pause campaign");
    }
  };

  const handleOpenEdit = (c: AdminCampaign) => {
    router.push(`/admin/campaigns/new?edit=${c.id}`);
  };

  const handleSaveEdit = async () => {
    if (!editingCampaign) return;
    setError(null);
    setSuccess(null);
    try {
      await campaignService.update(editingCampaign.id, {
        name: editName,
        twilio_number: editTwilioNumber,
        status: editStatus as any,
      });
      setSuccess(`Campaign "${editName}" updated successfully`);
      setEditingCampaign(null);
      loadData();
    } catch (err: any) {
      setError(err.message || "Failed to update campaign");
    }
  };

  const handleOpenView = async (c: AdminCampaign) => {
    setViewingCampaign(c);
    setViewingCampaignLeads([]);
    setLoadingCampaignDetails(true);
    try {
      const details = await campaignService.get(c.id);
      setViewingCampaign(details);
      const leadsList = await campaignService.getLeads(c.id).catch(() => []);
      setViewingCampaignLeads(leadsList);
    } catch (err: any) {
      console.warn("Failed to load details:", err);
    } finally {
      setLoadingCampaignDetails(false);
    }
  };

  const handleDeleteCampaign = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete campaign "${name}"?`)) return;
    setError(null);
    setSuccess(null);
    try {
      await campaignService.remove(id);
      setSuccess(`Campaign "${name}" deleted successfully`);
      loadData();
    } catch (err: any) {
      setError(err.message || "Failed to delete campaign");
    }
  };

  const handleDeleteLead = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete lead "${name}"?`)) return;
    setError(null);
    setSuccess(null);
    try {
      await leadService.remove(id);
      setSuccess(`Lead "${name}" deleted successfully`);
      loadData();
    } catch (err: any) {
      setError(err.message || "Failed to delete lead");
    }
  };

  const handleCreateCampaignSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!campaignForm.name || !campaignForm.twilio_number || !campaignForm.agent_type) {
      setError("Please fill out Campaign Name, Agent Type, and SIP Number");
      return;
    }

    if (campaignForm.agent_type === "AI_AGENT" && !campaignForm.agent_id) {
      setError("Please select an AI Agent");
      return;
    }

    if (campaignForm.agent_type === "VOICE_AGENT" && !campaignForm.voice_agent_id) {
      setError("Please select a Voice Agent");
      return;
    }

    try {
      await campaignService.create({
        name: campaignForm.name,
        calling_mode: campaignForm.agent_type === "VOICE_AGENT" ? "VOICE" : "AI",
        agent_id: campaignForm.agent_type === "AI_AGENT" ? campaignForm.agent_id : undefined,
        voice_agent_id: campaignForm.agent_type === "VOICE_AGENT" ? campaignForm.voice_agent_id : undefined,
        twilio_number: campaignForm.twilio_number,
        sip_account_id: campaignForm.sip_account_id || undefined,
        caller_did_id: campaignForm.caller_did_id || undefined,
        lead_ids: campaignForm.selected_lead_ids,
        schedule: {
          default_language: campaignForm.default_language,
        }
      });
      setSuccess(`Campaign "${campaignForm.name}" created successfully`);
      setShowCreateForm(false);
      setCampaignForm({
        name: "",
        description: "",
        objective: "",
        agent_type: "AI_AGENT",
        agent_id: "",
        voice_agent_id: "",
        twilio_number: "",
        sip_account_id: "",
        caller_did_id: "",
        selected_lead_ids: [] as string[],
        default_language: "auto",
      });
      loadData();
    } catch (err: any) {
      setError(err.message || "Failed to create campaign");
    }
  };

  const handleSelectLeadToggle = (id: string) => {
    setCampaignForm((f) => {
      const ids = f.selected_lead_ids.includes(id)
        ? f.selected_lead_ids.filter((x) => x !== id)
        : [...f.selected_lead_ids, id];
      return { ...f, selected_lead_ids: ids };
    });
  };

  return (
    <AppShell>
      <div className="flex flex-col gap-8 animate-in fade-in duration-300">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3.5">
            <div className="p-3 bg-indigo-50 border border-indigo-100 text-indigo-600 rounded-2xl">
              <Shield className="h-6.5 w-6.5 text-indigo-600" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Overall System Operations</h1>
              <p className="text-sm text-slate-500 mt-1">outbound campaigns, lead registers, and calls overview</p>
            </div>
          </div>
          {activeTab === "campaigns" && (
            <Button 
              onClick={() => router.push("/admin/campaigns/new")}
              className="bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-2 rounded-xl self-start sm:self-center cursor-pointer font-bold"
            >
              <Plus className="h-4 w-4" /> New Campaign
            </Button>
          )}
        </div>

        {/* Navigation Tabs */}
        <div className="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200/50 self-start w-full sm:w-auto overflow-x-auto gap-1">
          {[
            { id: "campaigns", label: "All Campaigns", icon: Play },
            { id: "leads", label: "All Leads", icon: Users },
            { id: "calls", label: "All Calls", icon: PhoneCall },
            { id: "uploads", label: "Uploaded Files", icon: FolderOpen },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeTab === id
                  ? "bg-white text-indigo-600 shadow-sm border border-slate-200/10 font-bold"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>

        {success && (
          <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-2xl p-4 flex items-center gap-3 text-sm font-semibold animate-in fade-in">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
            <span>{success}</span>
          </div>
        )}

        {error && (
          <div className="bg-rose-50 border border-rose-100 text-rose-800 rounded-2xl p-4 flex items-center gap-3 text-sm font-semibold animate-in fade-in">
            <AlertTriangle className="h-5 w-5 shrink-0 text-rose-600" />
            <span>{error}</span>
          </div>
        )}

        {/* Campaign Creation Card */}
        {showCreateForm && activeTab === "campaigns" && (
          <Card className="p-6 border border-slate-100 shadow-lg rounded-2xl bg-white max-w-4xl animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-md font-bold text-slate-900 flex items-center gap-2">
                🚀 Create & Launch New Global Outbound Campaign
              </h3>
              <button 
                onClick={() => setShowCreateForm(false)}
                className="text-slate-400 hover:text-slate-600 transition-premium p-1 hover:bg-slate-50 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleCreateCampaignSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Campaign Name</label>
                  <Input
                    placeholder="Sales campaign"
                    value={campaignForm.name}
                    onChange={(e) => setCampaignForm({ ...campaignForm, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Agent Type</label>
                  <select
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 h-11 bg-white font-semibold text-slate-700 cursor-pointer"
                    value={campaignForm.agent_type}
                    onChange={(e) => {
                      const type = e.target.value;
                      setCampaignForm((prev) => ({
                        ...prev,
                        agent_type: type,
                        agent_id: "",
                        voice_agent_id: "",
                      }));
                    }}
                    required
                  >
                    <option value="AI_AGENT">AI Agent</option>
                    <option value="VOICE_AGENT">Voice Agent</option>
                  </select>
                </div>

                {campaignForm.agent_type === "AI_AGENT" ? (
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">SELECT AI AGENT</label>
                    <select
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 h-11 bg-white font-semibold text-slate-700 cursor-pointer"
                      value={campaignForm.agent_id}
                      onChange={(e) => setCampaignForm({ ...campaignForm, agent_id: e.target.value })}
                      required
                    >
                      <option value="">Select AI Agent...</option>
                      {agents.map((agent) => (
                        <option key={agent.id} value={agent.id}>
                          {agent.name} ({agent.type || "SALES"})
                        </option>
                      ))}
                    </select>
                    {agents.length === 0 && (
                      <p className="text-[11px] font-bold text-rose-500 mt-1">
                        No AI Agents available. Please create an AI Agent first.
                      </p>
                    )}
                  </div>
                ) : campaignForm.agent_type === "VOICE_AGENT" ? (
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">SELECT VOICE AGENT</label>
                    <select
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 h-11 bg-white font-semibold text-slate-700 cursor-pointer"
                      value={campaignForm.voice_agent_id}
                      onChange={(e) => setCampaignForm({ ...campaignForm, voice_agent_id: e.target.value })}
                      required
                    >
                      <option value="">Select Voice Agent...</option>
                      {voiceAgents.map((expert) => (
                        <option key={expert.id} value={expert.id}>
                          {expert.name} — {expert.status || "AVAILABLE"}
                        </option>
                      ))}
                    </select>
                    {voiceAgents.length === 0 && (
                      <p className="text-[11px] font-bold text-rose-500 mt-1">
                        No Voice Agents available. Please create a Voice Agent first.
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="space-y-1.5 opacity-60">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">SELECT AGENT</label>
                    <select
                      disabled
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm h-11 bg-slate-100 font-semibold text-slate-400 cursor-not-allowed"
                      value=""
                    >
                      <option value="">Select Agent Type First...</option>
                    </select>
                  </div>
                )}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">SIP Number</label>
                  <Input
                    placeholder="e.g. +917935485287"
                    value={campaignForm.twilio_number}
                    onChange={(e) => setCampaignForm({ ...campaignForm, twilio_number: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Assign SIP Account</label>
                  <select
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 h-11 bg-white font-semibold text-slate-700 cursor-pointer"
                    value={campaignForm.sip_account_id}
                    onChange={(e) => {
                      const selId = e.target.value;
                      const acc = sipAccounts.find((a) => a.id === selId);
                      const defaultDid = acc?.dids?.[0]?.phone_number || acc?.caller_id || campaignForm.twilio_number;
                      const defaultDidId = acc?.dids?.[0]?.id || "";
                      setCampaignForm({
                        ...campaignForm,
                        sip_account_id: selId,
                        caller_did_id: defaultDidId,
                        twilio_number: defaultDid,
                      });
                    }}
                  >
                    <option value="">Default Route / None</option>
                    {sipAccounts.map((acc) => (
                      <option key={acc.id} value={acc.id} disabled={!acc.enabled}>
                        {acc.name} — {acc.registration_status === "registered" ? "Registered" : "Not registered"} {!acc.enabled ? "(Disabled)" : ""}
                      </option>
                    ))}
                  </select>
                </div>
                {campaignForm.sip_account_id && (
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Outbound Caller DID</label>
                    <select
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 h-11 bg-white font-semibold text-slate-700 cursor-pointer"
                      value={campaignForm.caller_did_id}
                      onChange={(e) => {
                        const selDidId = e.target.value;
                        const acc = sipAccounts.find((a) => a.id === campaignForm.sip_account_id);
                        const matchedDid = acc?.dids?.find((d) => d.id === selDidId);
                        setCampaignForm({
                          ...campaignForm,
                          caller_did_id: selDidId,
                          twilio_number: matchedDid?.phone_number || acc?.caller_id || campaignForm.twilio_number,
                        });
                      }}
                    >
                      {(() => {
                        const acc = sipAccounts.find((a) => a.id === campaignForm.sip_account_id);
                        const accDids = acc?.dids || [];
                        return (
                          <>
                            <option value="">{acc?.caller_id ? `Account Default (${acc.caller_id})` : "Default DID"}</option>
                            {accDids.map((d) => (
                              <option key={d.id} value={d.id}>
                                {d.phone_number} {d.friendly_name ? `(${d.friendly_name})` : ""}
                              </option>
                            ))}
                          </>
                        );
                      })()}
                    </select>
                  </div>
                )}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Regional Language</label>
                  <select
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 h-11 bg-white font-semibold text-slate-700 cursor-pointer"
                    value={campaignForm.default_language}
                    onChange={(e) => setCampaignForm({ ...campaignForm, default_language: e.target.value })}
                    required
                  >
                    <option value="auto">Auto Detect</option>
                    <option value="en">English</option>
                    <option value="ta">Tamil</option>
                    <option value="te">Telugu</option>
                    <option value="ml">Malayalam</option>
                    <option value="kn">Kannada</option>
                    <option value="hi">Hindi</option>
                    <option value="bn">Bengali</option>
                    <option value="mr">Marathi</option>
                    <option value="gu">Gujarati</option>
                    <option value="pa">Punjabi</option>
                    <option value="ur">Urdu</option>
                    <option value="or">Odia</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Select Campaign Leads ({campaignForm.selected_lead_ids.length} selected)
                </label>
                <div className="border border-slate-100 rounded-2xl overflow-y-auto max-h-48 p-4 divide-y divide-slate-50 bg-slate-50/50">
                  {leads.map((l) => (
                    <label key={l.id} className="flex items-center gap-3.5 py-2.5 text-sm select-none cursor-pointer">
                      <input
                        type="checkbox"
                        checked={campaignForm.selected_lead_ids.includes(l.id)}
                        onChange={() => handleSelectLeadToggle(l.id)}
                        className="h-4.5 w-4.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                      />
                      <div>
                        <p className="font-bold text-slate-800">{l.first_name} {l.last_name}</p>
                        <p className="text-[10px] font-semibold text-slate-400 mt-0.5">{l.company} &middot; {l.phone}</p>
                      </div>
                    </label>
                  ))}
                  {leads.length === 0 && (
                    <p className="text-xs text-slate-400 text-center py-4">No leads available &mdash; create leads first.</p>
                  )}
                </div>
              </div>

              <div className="flex justify-end gap-3 border-t border-slate-50 pt-4">
                <Button type="button" variant="outline" onClick={() => setShowCreateForm(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-indigo-600 hover:bg-indigo-500 text-white">
                  Launch Campaign
                </Button>
              </div>
            </form>
          </Card>
        )}

        {/* Operations Tables Display */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 overflow-hidden">
          {loading ? (
            <div className="py-16 flex flex-col justify-center items-center gap-3">
              <div className="w-8 h-8 border-3 border-indigo-600 border-t-transparent rounded-full animate-spin" />
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Fetching operations log...</span>
            </div>
          ) : (
            <>
              {/* Campaigns Table */}
              {activeTab === "campaigns" && (
                <div className="overflow-x-auto font-medium text-slate-700">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-50 text-slate-400 text-xs font-bold uppercase tracking-wider">
                        <th className="pb-4">Campaign Name</th>
                        <th className="pb-4">Target Client</th>
                        <th className="pb-4">Lead List</th>
                        <th className="pb-4">Assigned Agent</th>
                        <th className="pb-4">SIP Number</th>
                        <th className="pb-4">Ratio</th>
                        <th className="pb-4">Status</th>
                        <th className="pb-4">Created Date</th>
                        <th className="pb-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 text-sm">
                      {campaigns.map((c) => (
                        <tr key={c.id} className="hover:bg-slate-50/50 transition-premium">
                          <td 
                            className="py-4 font-bold text-slate-900 cursor-pointer hover:text-indigo-600 transition-colors"
                            onClick={() => router.push(`/admin/campaigns/new?edit=${c.id}&step=6`)}
                            title="Click to Review Campaign"
                          >
                            {c.name}
                          </td>
                          <td className="py-4 font-bold text-indigo-700">{c.client_name || "—"}</td>
                          <td className="py-4 font-semibold text-slate-700">{(c as any).lead_group_name || "Lead Library"}</td>
                          <td className="py-4 font-bold text-emerald-700">
                            {((c.agent_type || "").toUpperCase() === "HUMAN" ||
                              (c.agent_type || "").toUpperCase() === "VOICE" ||
                              (c.agent_type || "").toUpperCase() === "VOICE_AGENT" ||
                              (!c.agent_id && Boolean(c.voice_agent_id)))
                              ? "Voice Agent"
                              : "AI Agent"}
                          </td>
                          <td className="py-4 font-mono text-xs text-slate-400">{c.twilio_number}</td>
                          <td className="py-4">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-bold bg-purple-50 text-purple-700 border border-purple-200" title={`Auto Dial Ratio 1:${c.auto_dial_ratio || 1} (up to ${c.auto_dial_ratio || 1} concurrent calls)`}>
                              1:{c.auto_dial_ratio || 1}
                            </span>
                          </td>
                          <td className="py-4">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-bold ${
                              c.status === "RUNNING" ? "bg-indigo-50 text-indigo-700 border border-indigo-100" :
                              c.status === "COMPLETED" ? "bg-emerald-50 text-emerald-700 border border-emerald-100" :
                              c.status === "PAUSED" ? "bg-amber-50 text-amber-700 border border-amber-100" :
                              "bg-slate-100 text-slate-500 border border-slate-200"
                            }`}>
                              {c.status}
                            </span>
                          </td>
                          <td className="py-4 text-xs text-slate-400">
                            {formatDateTime(c.created_at)}
                          </td>
                          <td className="py-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              {c.status === "RUNNING" ? (
                                <button
                                  onClick={() => handlePauseCampaign(c.id, c.name)}
                                  className="p-1.5 rounded-lg hover:bg-slate-50 text-amber-600 transition-premium cursor-pointer"
                                  title="Pause Campaign"
                                >
                                  <Pause className="h-4.5 w-4.5" />
                                </button>
                              ) : (
                                <button
                                  onClick={() => handleStartCampaign(c.id, c.name)}
                                  disabled={startingCampaignIds.has(c.id)}
                                  className="p-1.5 rounded-lg hover:bg-slate-50 text-indigo-600 transition-premium cursor-pointer disabled:opacity-50"
                                  title="Start Campaign"
                                >
                                  <Play className="h-4.5 w-4.5" />
                                </button>
                              )}
                              <button
                                onClick={() => router.push(`/admin/campaigns/new?edit=${c.id}&step=6`)}
                                className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 transition-premium cursor-pointer"
                                title="Review Campaign Details"
                              >
                                <Eye className="h-4.5 w-4.5" />
                              </button>
                              <button
                                onClick={() => router.push(`/admin/campaigns/new?edit=${c.id}&step=6`)}
                                className="p-1.5 rounded-lg hover:bg-slate-100 text-indigo-600 transition-premium cursor-pointer"
                                title="Review & Edit Campaign"
                              >
                                <Edit2 className="h-4.5 w-4.5" />
                              </button>
                              {((c.agent_type || "").toUpperCase() === "HUMAN" ||
                                (c.agent_type || "").toUpperCase() === "VOICE" ||
                                (c.agent_type || "").toUpperCase() === "VOICE_AGENT" ||
                                (!c.agent_id && Boolean(c.voice_agent_id))) ? (
                                <button
                                  disabled
                                  className="p-1.5 rounded-lg text-slate-300 cursor-not-allowed opacity-40"
                                  title="Voice Agent Campaign — Accessible and dialed exclusively by Voice Agent, not AI Agent"
                                >
                                  <Phone className="h-4.5 w-4.5" />
                                </button>
                              ) : (
                                <button
                                  onClick={() => handleOpenVoiceTest(c)}
                                  className="p-1.5 rounded-lg hover:bg-indigo-50 text-indigo-600 transition-premium cursor-pointer"
                                  title="Local Voice Test (AI Agent)"
                                >
                                  <Phone className="h-4.5 w-4.5" />
                                </button>
                              )}
                              <button
                                onClick={() => handleOpenReport(c)}
                                className="p-1.5 rounded-lg hover:bg-indigo-50 text-indigo-600 transition-premium cursor-pointer"
                                title="View Campaign Report"
                                aria-label="View Campaign Report"
                              >
                                <BarChart3 className="h-4.5 w-4.5" />
                              </button>
                              <button
                                onClick={() => handleDeleteCampaign(c.id, c.name)}
                                className="p-1.5 rounded-lg hover:bg-slate-50 text-rose-500 hover:text-rose-600 transition-premium cursor-pointer"
                                title="Delete Campaign"
                              >
                                <Trash2 className="h-4.5 w-4.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {campaigns.length === 0 && (
                        <tr>
                          <td colSpan={6} className="py-12 text-center text-slate-400">
                            No campaigns found in the system.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Leads Table */}
              {activeTab === "leads" && (
                <div className="overflow-x-auto font-medium text-slate-700">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-50 text-slate-400 text-xs font-bold uppercase tracking-wider">
                        <th className="pb-4">Lead Details</th>
                        <th className="pb-4">Associated Business</th>
                        <th className="pb-4">Company</th>
                        <th className="pb-4">Status</th>
                        <th className="pb-4">Imported Date</th>
                        <th className="pb-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 text-sm">
                      {leads.map((l) => (
                        <tr key={l.id} className="hover:bg-slate-50/50 transition-premium">
                          <td className="py-4">
                            <p className="font-bold text-slate-900">{l.first_name} {l.last_name}</p>
                            <p className="text-xs text-slate-400 mt-1 font-semibold">{l.phone} &middot; {l.email}</p>
                          </td>
                          <td className="py-4 text-slate-500">{l.business_name}</td>
                          <td className="py-4 text-slate-600">{l.company}</td>
                          <td className="py-4">
                            <Badge className="font-bold">{l.status}</Badge>
                          </td>
                          <td className="py-4 text-xs text-slate-400">
                            {formatDateTime(l.created_at)}
                          </td>
                          <td className="py-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => handleDeleteLead(l.id, `${l.first_name} ${l.last_name}`)}
                                className="p-1.5 rounded-lg hover:bg-slate-50 text-rose-500 hover:text-rose-600 transition-premium cursor-pointer"
                                title="Delete Lead"
                              >
                                <Trash2 className="h-4.5 w-4.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {leads.length === 0 && (
                        <tr>
                          <td colSpan={6} className="py-12 text-center text-slate-400">
                            No leads found in the system.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Calls Table */}
              {activeTab === "calls" && (
                <div className="overflow-x-auto font-medium text-slate-700">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-50 text-slate-400 text-xs font-bold uppercase tracking-wider">
                        <th className="pb-4">Direction</th>
                        <th className="pb-4">Associated Business</th>
                        <th className="pb-4">From / To</th>
                        <th className="pb-4">Duration</th>
                        <th className="pb-4">Status</th>
                        <th className="pb-4">Timestamp</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 text-sm">
                      {calls.map((c) => (
                        <tr key={c.id} className="hover:bg-slate-50/50 transition-premium">
                          <td className="py-4">
                            <span className="flex items-center gap-1.5">
                              {c.direction === "OUTBOUND" ? (
                                <PhoneOutgoing className="h-4.5 w-4.5 text-indigo-500 shrink-0" />
                              ) : (
                                <PhoneIncoming className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
                              )}
                              <span className="font-bold text-slate-900">{c.direction}</span>
                            </span>
                          </td>
                          <td className="py-4 text-slate-500">{c.business_name}</td>
                          <td className="py-4">
                            <p className="text-slate-900 font-semibold">To: {c.to_number}</p>
                            <p className="text-xs text-slate-450 mt-1 font-mono">From: {c.from_number}</p>
                          </td>
                          <td className="py-4 text-slate-700 font-bold font-mono">
                            {Math.floor((c.duration_seconds || 0) / 60)}m {(c.duration_seconds || 0) % 60}s
                          </td>
                          <td className="py-4">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-bold ${
                              c.status === "COMPLETED" ? "bg-emerald-50 text-emerald-700 border border-emerald-100" :
                              c.status === "FAILED" ? "bg-rose-50 text-rose-700 border border-rose-100" :
                              "bg-slate-100 text-slate-500 border border-slate-200"
                            }`}>
                              {c.status}
                            </span>
                          </td>
                          <td className="py-4 text-xs text-slate-400">
                            {formatDateTime(c.created_at)}
                          </td>
                        </tr>
                      ))}
                      {calls.length === 0 && (
                        <tr>
                          <td colSpan={6} className="py-12 text-center text-slate-400">
                            No voice calls logged in the system.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Uploaded Files Table */}
              {activeTab === "uploads" && (
                <div className="overflow-x-auto font-medium text-slate-700">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-50 text-slate-400 text-xs font-bold uppercase tracking-wider">
                        <th className="pb-4">File Name</th>
                        <th className="pb-4">Associated Business</th>
                        <th className="pb-4">Lead Count</th>
                        <th className="pb-4">Status</th>
                        <th className="pb-4">Uploaded Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 text-sm">
                      {leadGroups.map((g) => (
                        <tr key={g.id} className="hover:bg-slate-50/50 transition-premium">
                          <td className="py-4 font-bold text-slate-900">{g.filename}</td>
                          <td className="py-4 text-slate-500">{g.business_name}</td>
                          <td className="py-4 text-slate-900 font-bold">{g.lead_count}</td>
                          <td className="py-4">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-bold ${
                              g.status === "COMPLETED" ? "bg-emerald-50 text-emerald-700 border border-emerald-100" :
                              g.status === "PROCESSING" ? "bg-indigo-50 text-indigo-700 border border-indigo-100" :
                              g.status === "FAILED" ? "bg-rose-50 text-rose-700 border border-rose-100" :
                              "bg-slate-100 text-slate-500 border border-slate-200"
                            }`}>
                              {g.status}
                            </span>
                          </td>
                          <td className="py-4 text-xs text-slate-400">
                            {formatDateTime(g.created_at)}
                          </td>
                        </tr>
                      ))}
                      {leadGroups.length === 0 && (
                        <tr>
                          <td colSpan={5} className="py-12 text-center text-slate-400">
                            No uploaded file records found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {Object.values(activeVoiceSessions).map(({ campaign, isMinimized }) => {
        const minimizedList = Object.values(activeVoiceSessions).filter((s) => s.isMinimized);
        const minIndex = minimizedList.findIndex((s) => s.campaign.id === campaign.id);
        return (
          <LocalVoiceTestModal
            key={campaign.id}
            campaignId={campaign.id}
            campaignName={campaign.name}
            agentId={campaign.agent_id}
            isMinimized={isMinimized}
            minimizedIndex={minIndex >= 0 ? minIndex : 0}
            onToggleMinimize={(min) => handleToggleMinimize(campaign.id, min)}
            onClose={() => handleCloseVoiceTest(campaign.id)}
          />
        );
      })}

      {/* View Campaign Details Modal */}
      {viewingCampaign && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xl border border-slate-100 p-6 space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-extrabold text-xl text-slate-900">{viewingCampaign.name}</h3>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-100 uppercase">
                    {viewingCampaign.status}
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-mono mt-0.5">ID: {viewingCampaign.id}</p>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setViewingCampaign(null)} className="rounded-full h-8 w-8">
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs">
              <div className="bg-indigo-50/70 p-3.5 rounded-2xl border border-indigo-100">
                <span className="font-extrabold text-indigo-600 block uppercase text-[10px]">Target Client</span>
                <span className="font-bold text-indigo-950 text-sm">{viewingCampaign.client_name || "—"}</span>
                {viewingCampaign.client_phone && (
                  <span className="font-mono text-slate-500 text-[11px] block mt-0.5">{viewingCampaign.client_phone}</span>
                )}
              </div>
              <div className="bg-emerald-50/70 p-3.5 rounded-2xl border border-emerald-100">
                <span className="font-extrabold text-emerald-600 block uppercase text-[10px]">Assigned Agent</span>
                <span className="font-bold text-emerald-950 text-sm">
                  {((viewingCampaign.agent_type || "").toUpperCase() === "HUMAN" ||
                    (viewingCampaign.agent_type || "").toUpperCase() === "VOICE" ||
                    (viewingCampaign.agent_type || "").toUpperCase() === "VOICE_AGENT" ||
                    (!viewingCampaign.agent_id && Boolean(viewingCampaign.voice_agent_id)))
                    ? "Voice Agent"
                    : "AI Agent"}
                </span>
              </div>
              <div className="bg-purple-50/70 p-3.5 rounded-2xl border border-purple-100">
                <span className="font-extrabold text-purple-600 block uppercase text-[10px]">Auto Dial Ratio</span>
                <span className="font-bold text-purple-950 text-sm">1:{viewingCampaign.auto_dial_ratio || 1}</span>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                <span className="font-bold text-slate-400 block uppercase text-[10px]">Lead List</span>
                <span className="font-bold text-slate-800 text-sm">{viewingCampaign.lead_group_name || "Lead Library"}</span>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                <span className="font-bold text-slate-400 block uppercase text-[10px]">Total Leads</span>
                <span className="font-bold text-slate-800 text-sm">{viewingCampaignLeads.length} lead(s)</span>
              </div>
            </div>

            {viewingCampaign.schedule?.script && (
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <span className="font-bold text-slate-400 uppercase text-[10px] block mb-1">Campaign Script</span>
                <p className="text-xs text-slate-700 font-medium whitespace-pre-wrap max-h-36 overflow-y-auto leading-relaxed">
                  {viewingCampaign.schedule.script}
                </p>
              </div>
            )}

            <div className="flex justify-end pt-2">
              <Button onClick={() => setViewingCampaign(null)} className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-6">
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Campaign Modal */}
      {editingCampaign && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md border border-slate-100 p-6 space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="font-extrabold text-xl text-slate-900">Edit Campaign</h3>
              <Button variant="ghost" size="icon" onClick={() => setEditingCampaign(null)} className="rounded-full h-8 w-8">
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4 text-xs font-medium">
              <div>
                <label className="text-slate-500 font-bold uppercase text-[10px] tracking-wider block mb-1">Campaign Name *</label>
                <Input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  placeholder="Campaign Name"
                  className="text-xs font-semibold"
                />
              </div>

              <div>
                <label className="text-slate-500 font-bold uppercase text-[10px] tracking-wider block mb-1">SIP Number</label>
                <Input
                  value={editTwilioNumber}
                  onChange={(e) => setEditTwilioNumber(e.target.value)}
                  placeholder="e.g. +917935485287"
                  className="text-xs font-semibold font-mono"
                />
              </div>

              <div>
                <label className="text-slate-500 font-bold uppercase text-[10px] tracking-wider block mb-1">Campaign Status</label>
                <select
                  value={editStatus}
                  onChange={(e) => setEditStatus(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-700 bg-white"
                >
                  <option value="IDLE">IDLE</option>
                  <option value="RUNNING">RUNNING</option>
                  <option value="PAUSED">PAUSED</option>
                  <option value="COMPLETED">COMPLETED</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button variant="outline" onClick={() => setEditingCampaign(null)} className="text-xs font-bold px-4">
                Cancel
              </Button>
              <Button onClick={handleSaveEdit} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-5">
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      )}
      {/* ── CAMPAIGN REPORT MODAL ────────────────────────────────────────── */}
      {reportCampaign && (
        <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col border border-slate-200 overflow-hidden">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-indigo-50/40 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base">{reportCampaign.name}</h3>
                  <p className="text-xs text-slate-500">Campaign Report &mdash; Live data from database</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {reportData && !reportLoading && (
                  <>
                    <button
                      onClick={handleReportExcelDownload}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors cursor-pointer"
                    >
                      <FileSpreadsheet className="w-3.5 h-3.5" />
                      Export Excel
                    </button>
                    <button
                      onClick={handleReportPDFDownload}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-xl transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Export PDF
                    </button>
                  </>
                )}
                <button
                  onClick={handleCloseReport}
                  className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto flex-1 p-6 space-y-5">
              {reportLoading && (
                <div className="flex flex-col items-center justify-center py-16 gap-3 text-slate-500">
                  <RefreshCw className="w-6 h-6 animate-spin text-indigo-500" />
                  <span className="text-sm font-semibold">Loading campaign report...</span>
                </div>
              )}
              {reportError && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm">
                  {reportError}
                </div>
              )}
              {reportData && !reportLoading && (() => {
                const s = reportData.summary;
                const leads: CampaignWiseLeadItem[] = reportData.leads || [];
                const kpis = [
                  { label: "Leads Assigned", value: s?.total_leads_assigned ?? 0, color: "text-slate-800" },
                  { label: "Calls Attempted", value: s?.total_calls_attempted ?? 0, color: "text-indigo-700" },
                  { label: "Connected", value: s?.total_calls_connected ?? 0, color: "text-emerald-600" },
                  { label: "Not Connected", value: s?.total_calls_not_connected ?? 0, color: "text-slate-500" },
                  { label: "Qualified", value: s?.total_qualified_leads ?? 0, color: "text-emerald-700" },
                  { label: "Not Qualified", value: s?.total_not_qualified_leads ?? 0, color: "text-rose-500" },
                  { label: "Talk Time", value: s?.total_call_duration || "00:00", color: "text-cyan-700" },
                  { label: "Avg Duration", value: s?.avg_call_duration || "00:00", color: "text-slate-700" },
                ];
                return (
                  <>
                    {/* Campaign Meta */}
                    <div className="flex flex-wrap gap-3 text-xs">
                      {[
                        ["Agent", s?.assigned_agent || "—"],
                        ["Type", s?.agent_type || "—"],
                        ["Client", s?.target_client || "—"],
                        ["Lead List", s?.lead_list || "Lead Library"],
                        ["Status", s?.campaign_status || reportCampaign.status || "—"],
                      ].map(([label, val]) => (
                        <div key={label} className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5">
                          <span className="text-slate-400 font-semibold">{label}: </span>
                          <span className="font-bold text-slate-800">{val}</span>
                        </div>
                      ))}
                    </div>

                    {/* KPI Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {kpis.map((k) => (
                        <div key={k.label} className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-sm">
                          <div className="text-[11px] text-slate-500 font-medium mb-1">{k.label}</div>
                          <div className={`text-xl font-extrabold ${k.color}`}>{k.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Leads Table */}
                    <div>
                      <div className="mb-2 flex items-center justify-between">
                        <h4 className="text-sm font-bold text-slate-800">Lead Details <span className="text-slate-400 font-normal">({leads.length} leads)</span></h4>
                      </div>
                      <div className="overflow-x-auto rounded-xl border border-slate-200">
                        <table className="w-full text-left border-collapse text-xs">
                          <thead>
                            <tr className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200">
                              <th className="py-3 px-4">Lead Name</th>
                              <th className="py-3 px-3">Phone</th>
                              <th className="py-3 px-3">Lead Status</th>
                              <th className="py-3 px-3 text-center">Calls</th>
                              <th className="py-3 px-3">Duration</th>
                              <th className="py-3 px-3">Call Status</th>
                              <th className="py-3 px-3">Disposition</th>
                              <th className="py-3 px-3">Last Call</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                            {leads.length === 0 ? (
                              <tr>
                                <td colSpan={8} className="py-10 text-center text-slate-400 italic">No lead records found for this campaign.</td>
                              </tr>
                            ) : leads.map((l, idx) => (
                              <tr key={idx} className="hover:bg-indigo-50/30 transition-colors">
                                <td className="py-3 px-4 font-semibold text-slate-900">{l.lead_name || "—"}</td>
                                <td className="py-3 px-3 font-mono text-slate-600">{l.phone || "—"}</td>
                                <td className="py-3 px-3">
                                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                    (l.lead_status || "").toUpperCase() === "QUALIFIED"
                                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                      : (l.lead_status || "").toUpperCase() === "PENDING"
                                      ? "bg-slate-50 text-slate-600 border border-slate-200"
                                      : "bg-amber-50 text-amber-700 border border-amber-200"
                                  }`}>{l.lead_status || "PENDING"}</span>
                                </td>
                                <td className="py-3 px-3 text-center font-bold text-indigo-700">{l.call_count || 0}</td>
                                <td className="py-3 px-3 font-mono">{l.duration || "00:00"}</td>
                                <td className="py-3 px-3 text-slate-600">{l.call_status || "—"}</td>
                                <td className="py-3 px-3 text-slate-600">{l.disposition || "—"}</td>
                                <td className="py-3 px-3 text-slate-400">{l.last_call_time || "Never"}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </AppShell>
  );
}

export default function AdminCampaignsPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs text-slate-400 font-semibold">Loading...</div>}>
      <AdminCampaignsContent />
    </Suspense>
  );
}
