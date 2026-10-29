"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  campaignService,
  CampaignAiAgentDashboard,
  CampaignAiAgentLead,
  CampaignAiAgentCall,
} from "@/lib/services/campaign.service";
import {
  ArrowLeft,
  Bot,
  Phone,
  PhoneIncoming,
  PhoneOutgoing,
  RefreshCw,
  Users,
  CheckCircle2,
  XCircle,
  Sparkles,
  Layers,
  Search,
  Volume2,
  FileText,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  AlertCircle,
  Building2,
  Headphones,
  CheckCircle,
  Radio,
  Sliders,
  PhoneCall,
  Pause,
} from "lucide-react";

export default function CampaignAiAgentHubPage() {
  const params = useParams();
  const router = useRouter();
  const campaignId = params.id as string;

  // Data state
  const [dashboard, setDashboard] = useState<CampaignAiAgentDashboard | null>(null);
  const [leads, setLeads] = useState<CampaignAiAgentLead[]>([]);
  const [calls, setCalls] = useState<CampaignAiAgentCall[]>([]);
  const [dialerStatus, setDialerStatus] = useState<any>(null);
  const [dialerActionLoading, setDialerActionLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Filter & Search state
  const [activeTab, setActiveTab] = useState<"leads" | "calls" | "inbound">("leads");
  const [leadFilter, setLeadFilter] = useState<string>("ALL");
  const [leadSearch, setLeadSearch] = useState("");
  const [callSearch, setCallSearch] = useState("");

  // Inbound toggle state
  const [inboundToggling, setInboundToggling] = useState(false);
  const [inboundToast, setInboundToast] = useState<string | null>(null);

  // Script & System Prompt Drawer / Accordion
  const [showScript, setShowScript] = useState(false);
  const [showSystemPrompt, setShowSystemPrompt] = useState(false);

  // Transcript Modal state
  const [selectedCallTranscript, setSelectedCallTranscript] = useState<{
    lead_name: string;
    phone: string;
    transcript: string;
    recording_url?: string;
  } | null>(null);

  // Copy indicator state
  const [copiedDid, setCopiedDid] = useState(false);

  // Fetch all campaign AI agent hub data
  const loadData = useCallback(async (isBackground = false) => {
    if (!campaignId) return;
    if (!isBackground) setLoading(true);
    else setRefreshing(true);
    setError(null);

    try {
      const [dashRes, leadsRes, callsRes, dialerRes] = await Promise.all([
        campaignService.getAiAgentDashboard(campaignId),
        campaignService.getAiAgentLeads(campaignId, {
          status_filter: leadFilter === "ALL" ? undefined : leadFilter,
          limit: 500,
        }),
        campaignService.getAiAgentCalls(campaignId),
        campaignService.getDialerStatus(campaignId).catch(() => null),
      ]);

      setDashboard(dashRes);
      setLeads(leadsRes.leads || []);
      setCalls(callsRes.calls || []);
      setDialerStatus(dialerRes);
    } catch (err: any) {
      console.error("Failed to load Campaign AI Agent Hub data:", err);
      setError(err.message || "Failed to load campaign data");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [campaignId, leadFilter]);

  // Initial load and filter change trigger
  useEffect(() => {
    loadData();
  }, [loadData]);

  // Auto-refresh poll every 8 seconds
  useEffect(() => {
    if (!campaignId) return;
    const interval = setInterval(() => {
      loadData(true);
    }, 8000);
    return () => clearInterval(interval);
  }, [campaignId, loadData]);

  // Inbound toggle handler
  const handleToggleInbound = async () => {
    if (!dashboard || inboundToggling) return;
    const targetState = !dashboard.inbound_configuration.enabled;
    setInboundToggling(true);
    setInboundToast(null);

    // Optimistic UI update
    setDashboard((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        inbound_configuration: {
          ...prev.inbound_configuration,
          enabled: targetState,
          current_status: targetState ? "Waiting for incoming calls" : "Inbound AI Disabled",
        },
      };
    });

    try {
      const res = await campaignService.updateInboundConfig(campaignId, {
        enabled: targetState,
        twilio_number: dashboard.inbound_configuration.twilio_number,
        agent_id: dashboard.agent?.id || undefined,
      });
      setInboundToast(res.message || `Inbound AI calling ${targetState ? "enabled" : "disabled"}`);
      setTimeout(() => setInboundToast(null), 4000);
    } catch (err: any) {
      console.error("Failed to update inbound setting:", err);
      // Revert optimistic update
      setDashboard((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          inbound_configuration: {
            ...prev.inbound_configuration,
            enabled: !targetState,
            current_status: !targetState ? "Waiting for incoming calls" : "Inbound AI Disabled",
          },
        };
      });
      alert(`Could not toggle inbound line: ${err.message}`);
    } finally {
      setInboundToggling(false);
    }
  };

  const handleCopyDid = (num: string) => {
    if (!num) return;
    navigator.clipboard.writeText(num);
    setCopiedDid(true);
    setTimeout(() => setCopiedDid(false), 2000);
  };

  // Filtered Leads
  const filteredLeads = useMemo(() => {
    return leads.filter((l) => {
      const q = leadSearch.toLowerCase().trim();
      if (!q) return true;
      return (
        l.name.toLowerCase().includes(q) ||
        l.phone.toLowerCase().includes(q) ||
        l.company.toLowerCase().includes(q) ||
        l.qualification.toLowerCase().includes(q)
      );
    });
  }, [leads, leadSearch]);

  // Filtered Calls
  const filteredCalls = useMemo(() => {
    return calls.filter((c) => {
      const q = callSearch.toLowerCase().trim();
      if (!q) return true;
      return (
        c.lead_name.toLowerCase().includes(q) ||
        c.phone.toLowerCase().includes(q) ||
        c.disposition.toLowerCase().includes(q) ||
        c.intent.toLowerCase().includes(q) ||
        (c.transcript && c.transcript.toLowerCase().includes(q))
      );
    });
  }, [calls, callSearch]);

  // Format seconds to mm:ss
  const formatDuration = (secs: number) => {
    if (!secs || secs <= 0) return "0:00";
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  if (loading && !dashboard) {
    return (
      <AppShell>
        <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
          <RefreshCw className="h-8 w-8 animate-spin text-indigo-600" />
          <p className="text-gray-500 font-medium">Loading Campaign AI Agent Hub...</p>
        </div>
      </AppShell>
    );
  }

  const camp = dashboard?.campaign;
  const agent = dashboard?.agent;
  const leadStats = dashboard?.lead_statistics;
  const callStats = dashboard?.call_statistics;
  const qualStats = dashboard?.qualification_statistics;
  const inbConfig = dashboard?.inbound_configuration;

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto space-y-6 pb-12">
        {/* Top Header & Quick Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-5">
          <div className="flex items-start gap-3">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 mt-0.5 rounded-lg border-gray-200 shadow-sm hover:bg-gray-100"
              onClick={() => router.push("/campaigns")}
              title="Back to Campaigns"
            >
              <ArrowLeft className="h-5 w-5 text-gray-700" />
            </Button>
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <h1 className="text-2xl font-bold text-gray-900">
                  {camp?.name || "Campaign AI Agent Hub"}
                </h1>
                <Badge
                  className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border-none ${
                    camp?.status === "RUNNING"
                      ? "bg-emerald-100 text-emerald-800"
                      : camp?.status === "PAUSED"
                      ? "bg-amber-100 text-amber-800"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {camp?.status || "IDLE"}
                </Badge>
                {camp?.lead_group_name && (
                  <Badge variant="outline" className="text-xs bg-slate-50 text-slate-700 border-slate-200 flex items-center gap-1">
                    <Layers className="h-3 w-3 text-slate-500" />
                    {camp.lead_group_name}
                  </Badge>
                )}
                {camp?.client_name && camp.client_name !== "—" && (
                  <Badge variant="outline" className="text-xs bg-purple-50 text-purple-700 border-purple-200 flex items-center gap-1">
                    <Building2 className="h-3 w-3 text-purple-500" />
                    {camp.client_name}
                  </Badge>
                )}
              </div>
              <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                <span>AI qualification campaign with automated inbound line & multi-stage outreach</span>
                {refreshing && (
                  <span className="inline-flex items-center text-xs text-indigo-600 font-medium">
                    <RefreshCw className="h-3 w-3 animate-spin mr-1" />
                    Syncing...
                  </span>
                )}
              </p>
            </div>
          </div>

          {/* Quick Action Controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Live Inbound Line Quick Toggle Card */}
            <div
              className={`flex items-center gap-3 px-3.5 py-1.5 rounded-lg border transition-all ${
                inbConfig?.enabled
                  ? "bg-emerald-50/80 border-emerald-300 text-emerald-950"
                  : "bg-gray-50 border-gray-200 text-gray-700"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  {inbConfig?.enabled && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  )}
                  <span
                    className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                      inbConfig?.enabled ? "bg-emerald-500" : "bg-gray-400"
                    }`}
                  ></span>
                </span>
                <span className="text-xs font-semibold tracking-tight">
                  Inbound AI: {inbConfig?.enabled ? "ACTIVE" : "OFF"}
                </span>
              </div>
              <button
                type="button"
                onClick={handleToggleInbound}
                disabled={inboundToggling}
                aria-label="Toggle Inbound AI"
                className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  inbConfig?.enabled ? "bg-emerald-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    inbConfig?.enabled ? "translate-x-4" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => loadData(false)}
              className="h-9 gap-1.5 border-gray-200 shadow-sm hover:bg-gray-50"
              title="Refresh Dashboard"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${refreshing ? "animate-spin text-indigo-600" : ""}`} />
              <span className="text-xs font-medium">Refresh</span>
            </Button>
          </div>
        </div>

        {/* Toast alert on settings change */}
        {inboundToast && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm px-4 py-2.5 rounded-lg flex items-center justify-between shadow-sm animate-in fade-in">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>{inboundToast}</span>
            </div>
            <button
              onClick={() => setInboundToast(null)}
              className="text-emerald-700 hover:text-emerald-950 text-xs font-bold"
            >
              ✕
            </button>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg flex items-center gap-2">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Dynamic Auto-Dial Ratio & Concurrency Hub */}
        <div className="bg-gradient-to-r from-purple-900 via-indigo-950 to-slate-900 rounded-2xl p-5 text-white shadow-lg border border-purple-800/40">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-purple-800/60 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-purple-600/30 text-purple-300 rounded-xl border border-purple-500/30">
                <Sparkles className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-base text-white">Auto-Dial Concurrency Engine</h3>
                  <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                    camp?.status === "RUNNING"
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 animate-pulse"
                      : "bg-slate-700 text-slate-300 border border-slate-600"
                  }`}>
                    ● {camp?.status === "RUNNING" ? "DIALER ACTIVE" : (camp?.status || "IDLE")}
                  </span>
                </div>
                <p className="text-xs text-purple-200/70 mt-0.5">
                  Dynamically dialing up to <strong>{dialerStatus?.target_capacity || dialerStatus?.ratio || 1} distinct leads concurrently</strong> based on ratio 1:{dialerStatus?.ratio || 1}.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Button
                type="button"
                size="sm"
                onClick={async () => {
                  if (dialerActionLoading) return;
                  setDialerActionLoading(true);
                  try {
                    if (camp?.status === "RUNNING") {
                      await campaignService.pause(campaignId);
                    } else {
                      await campaignService.start(campaignId);
                    }
                    await loadData(true);
                  } catch (e: any) {
                    alert(`Failed to change campaign dialer state: ${e.message}`);
                  } finally {
                    setDialerActionLoading(false);
                  }
                }}
                disabled={dialerActionLoading}
                className={`font-bold text-xs h-9 px-4 rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-2 ${
                  camp?.status === "RUNNING"
                    ? "bg-amber-600 hover:bg-amber-500 text-white border border-amber-400/40"
                    : "bg-purple-600 hover:bg-purple-500 text-white border border-purple-400/40"
                }`}
              >
                {dialerActionLoading ? (
                  <RefreshCw className="h-4 w-4 animate-spin" />
                ) : camp?.status === "RUNNING" ? (
                  <>
                    <Pause className="h-4 w-4" /> Pause Auto-Dial
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" /> Start Auto-Dial (1:{dialerStatus?.ratio || 1})
                  </>
                )}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-4 text-xs">
            <div className="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
              <span className="text-[10px] text-purple-300/80 font-bold uppercase tracking-wider block">Configured Ratio</span>
              <span className="text-lg font-black text-purple-300">1:{dialerStatus?.ratio || 1}</span>
            </div>
            <div className="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
              <span className="text-[10px] text-purple-300/80 font-bold uppercase tracking-wider block">Max Concurrency</span>
              <span className="text-lg font-black text-white">{dialerStatus?.target_capacity || dialerStatus?.ratio || 1} <span className="text-xs font-normal text-slate-400">channels</span></span>
            </div>
            <div className="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
              <span className="text-[10px] text-purple-300/80 font-bold uppercase tracking-wider block">Active Calls</span>
              <span className="text-lg font-black text-emerald-400">{dialerStatus?.active_calls || 0}</span>
            </div>
            <div className="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
              <span className="text-[10px] text-purple-300/80 font-bold uppercase tracking-wider block">Available Slots</span>
              <span className="text-lg font-black text-blue-300">{dialerStatus?.available_slots ?? (dialerStatus?.target_capacity || 1)} <span className="text-xs font-normal text-slate-400">slots</span></span>
            </div>
            <div className="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
              <span className="text-[10px] text-purple-300/80 font-bold uppercase tracking-wider block">Pending Leads</span>
              <span className="text-lg font-black text-amber-300">{dialerStatus?.pending_leads ?? (leadStats?.pending || 0)}</span>
            </div>
            <div className="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60">
              <span className="text-[10px] text-purple-300/80 font-bold uppercase tracking-wider block">Ringing / In-Call</span>
              <span className="text-lg font-black text-indigo-300">{dialerStatus?.ringing_calls || 0}</span>
            </div>
          </div>
        </div>

        {/* 5 High-Impact KPI Metrics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {/* Card 1: Total Leads */}
          <Card className="p-4 bg-white border border-gray-200/80 shadow-sm hover:shadow transition-shadow">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Total Leads
              </span>
              <div className="p-1.5 rounded-md bg-blue-50 text-blue-600">
                <Users className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-900">
                {leadStats?.total_leads ?? 0}
              </span>
              <span className="text-xs text-gray-500 font-medium">
                {leadStats?.pending ?? 0} pending
              </span>
            </div>
            <div className="mt-2.5 w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-blue-600 h-1.5 rounded-full"
                style={{
                  width: `${
                    leadStats?.total_leads
                      ? Math.min(
                          100,
                          Math.round(
                            ((leadStats.calls_made) / leadStats.total_leads) * 100
                          )
                        )
                      : 0
                  }%`,
                }}
              />
            </div>
          </Card>

          {/* Card 2: Calls Attempted */}
          <Card className="p-4 bg-white border border-gray-200/80 shadow-sm hover:shadow transition-shadow">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Calls Made
              </span>
              <div className="p-1.5 rounded-md bg-indigo-50 text-indigo-600">
                <Phone className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-900">
                {callStats?.total_calls ?? 0}
              </span>
              <div className="flex items-center gap-1 text-[11px] font-medium text-gray-500">
                <span className="text-blue-600">In: {callStats?.inbound_calls ?? 0}</span>
                <span>•</span>
                <span className="text-indigo-600">Out: {callStats?.outbound_calls ?? 0}</span>
              </div>
            </div>
            <p className="mt-2 text-[11px] text-gray-500">
              {leadStats?.no_response ?? 0} no response / busy
            </p>
          </Card>

          {/* Card 3: Connected Calls */}
          <Card className="p-4 bg-white border border-gray-200/80 shadow-sm hover:shadow transition-shadow">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Connected
              </span>
              <div className="p-1.5 rounded-md bg-emerald-50 text-emerald-600">
                <PhoneCall className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-emerald-700">
                {leadStats?.connected ?? 0}
              </span>
              <span className="text-xs text-emerald-600 font-semibold">
                {leadStats?.calls_made
                  ? Math.round((leadStats.connected / leadStats.calls_made) * 100)
                  : 0}
                % rate
              </span>
            </div>
            <div className="mt-2.5 w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-emerald-500 h-1.5 rounded-full"
                style={{
                  width: `${
                    leadStats?.calls_made
                      ? Math.min(100, Math.round((leadStats.connected / leadStats.calls_made) * 100))
                      : 0
                  }%`,
                }}
              />
            </div>
          </Card>

          {/* Card 4: Qualification Rate */}
          <Card className="p-4 bg-white border border-gray-200/80 shadow-sm hover:shadow transition-shadow">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Qualification
              </span>
              <div className="p-1.5 rounded-md bg-purple-50 text-purple-600">
                <Sparkles className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-purple-700">
                {qualStats?.qualification_rate ?? 0}%
              </span>
              <span className="text-xs text-purple-600 font-semibold">
                {qualStats?.qualified ?? 0} qual
              </span>
            </div>
            <div className="mt-2.5 flex items-center justify-between text-[11px] text-gray-500">
              <span>{qualStats?.not_qualified ?? 0} unqualified</span>
              <span>{leadStats?.callback ?? 0} callback</span>
            </div>
          </Card>

          {/* Card 5: Inbound AI Line Status */}
          <Card
            className={`p-4 border transition-all col-span-2 md:col-span-3 lg:col-span-1 shadow-sm ${
              inbConfig?.enabled
                ? "bg-gradient-to-br from-white to-emerald-50/50 border-emerald-200"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Inbound Line
              </span>
              <div
                className={`p-1.5 rounded-md ${
                  inbConfig?.enabled ? "bg-emerald-100 text-emerald-700" : "bg-gray-100 text-gray-600"
                }`}
              >
                <PhoneIncoming className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-2 flex items-baseline justify-between">
              <div className="font-mono text-sm font-bold text-gray-900 truncate">
                {camp?.twilio_number || "Not Set"}
              </div>
              {camp?.twilio_number && camp.twilio_number !== "LOCAL_TEST" && (
                <button
                  onClick={() => handleCopyDid(camp.twilio_number)}
                  className="text-gray-400 hover:text-gray-600 p-0.5"
                  title="Copy Phone Number"
                >
                  {copiedDid ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                </button>
              )}
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-xs">
              <span
                className={`h-2 w-2 rounded-full shrink-0 ${
                  inbConfig?.enabled ? "bg-emerald-500 animate-pulse" : "bg-gray-400"
                }`}
              />
              <span className="truncate text-gray-600 font-medium text-[11px]">
                {inbConfig?.current_status || "Inbound Ready"}
              </span>
            </div>
          </Card>
        </div>

        {/* AI Agent Identity & Configuration Strip */}
        <div className="bg-white border border-gray-200/90 rounded-xl p-4 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-start md:items-center gap-3.5">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-100 shrink-0">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-gray-900">
                    {agent?.name || "Autonomous Voice Agent"}
                  </h3>
                  <Badge className="bg-emerald-100 text-emerald-800 text-[10px] font-semibold px-2 py-0 border-none">
                    {agent?.status || "ACTIVE"}
                  </Badge>
                  <Badge variant="outline" className="text-[10px] uppercase font-mono text-gray-600 border-gray-200">
                    {agent?.voice_provider || "murf"}
                  </Badge>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mt-1">
                  <span>
                    <strong className="font-semibold text-gray-700">Voice ID:</strong> {agent?.voice_id || "Pooja"}
                  </span>
                  <span>•</span>
                  <span>
                    <strong className="font-semibold text-gray-700">Language:</strong>{" "}
                    {agent?.language?.toUpperCase() || "EN-US"}
                  </span>
                  <span>•</span>
                  <span>
                    <strong className="font-semibold text-gray-700">Agent Type:</strong>{" "}
                    {camp?.agent_type || "AI_VOICE"}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 self-end lg:self-center">
              {camp?.script && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowScript(!showScript)}
                  className="h-8 text-xs gap-1.5 border-gray-200 hover:bg-gray-50"
                >
                  <FileText className="h-3.5 w-3.5 text-indigo-600" />
                  <span>{showScript ? "Hide Script" : "View Qualification Script"}</span>
                  {showScript ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                </Button>
              )}
              {agent?.system_prompt && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowSystemPrompt(!showSystemPrompt)}
                  className="h-8 text-xs gap-1.5 border-gray-200 hover:bg-gray-50"
                >
                  <Sliders className="h-3.5 w-3.5 text-purple-600" />
                  <span>{showSystemPrompt ? "Hide Prompt" : "System Prompt"}</span>
                  {showSystemPrompt ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                </Button>
              )}
            </div>
          </div>

          {/* Expandable Qualification Script Viewer */}
          {showScript && camp?.script && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="h-3.5 w-3.5 text-indigo-600" />
                  Active Campaign Script & Qualification Tree
                </span>
                <span className="text-[11px] text-gray-400 font-mono">
                  {camp.script.length} characters
                </span>
              </div>
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg max-h-64 overflow-y-auto text-xs text-slate-800 font-mono leading-relaxed whitespace-pre-wrap">
                {camp.script}
              </div>
            </div>
          )}

          {/* Expandable System Prompt Viewer */}
          {showSystemPrompt && agent?.system_prompt && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                  <Sliders className="h-3.5 w-3.5 text-purple-600" />
                  AI Agent Core System Prompt
                </span>
              </div>
              <div className="p-3.5 bg-purple-50/50 border border-purple-200 rounded-lg max-h-48 overflow-y-auto text-xs text-purple-950 font-sans leading-relaxed whitespace-pre-wrap">
                {agent.system_prompt}
              </div>
            </div>
          )}
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-between border-b border-gray-200">
          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveTab("leads")}
              className={`pb-3 text-sm font-semibold transition-colors relative flex items-center gap-2 ${
                activeTab === "leads"
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              <Users className="h-4 w-4" />
              <span>Leads & Qualification</span>
              <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs font-bold">
                {filteredLeads.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("calls")}
              className={`pb-3 text-sm font-semibold transition-colors relative flex items-center gap-2 ${
                activeTab === "calls"
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              <PhoneCall className="h-4 w-4" />
              <span>Call Records & Audio</span>
              <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs font-bold">
                {calls.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("inbound")}
              className={`pb-3 text-sm font-semibold transition-colors relative flex items-center gap-2 ${
                activeTab === "inbound"
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              <Radio className="h-4 w-4" />
              <span>Inbound Line Routing</span>
              {inbConfig?.enabled && (
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              )}
            </button>
          </div>
        </div>

        {/* TAB 1: LEADS & QUALIFICATION */}
        {activeTab === "leads" && (
          <div className="space-y-4">
            {/* Filter Chips & Search Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3 rounded-lg border border-gray-200">
              <div className="flex flex-wrap items-center gap-1.5">
                {[
                  { key: "ALL", label: "All Leads" },
                  { key: "QUALIFIED", label: "Qualified" },
                  { key: "NOT_QUALIFIED", label: "Unqualified" },
                  { key: "CONNECTED", label: "Connected" },
                  { key: "PENDING", label: "Pending" },
                ].map((f) => (
                  <button
                    key={f.key}
                    onClick={() => setLeadFilter(f.key)}
                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                      leadFilter === f.key
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              <div className="relative w-full sm:w-72">
                <Search className="h-3.5 w-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input
                  value={leadSearch}
                  onChange={(e) => setLeadSearch(e.target.value)}
                  placeholder="Search lead, phone, company..."
                  className="pl-8 h-8 text-xs bg-gray-50/50 border-gray-200 focus:bg-white"
                />
              </div>
            </div>

            {/* Leads Table */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-left text-xs">
                  <thead className="bg-gray-50/80 text-gray-600 font-semibold uppercase tracking-wider text-[11px]">
                    <tr>
                      <th className="px-5 py-3.5">Lead / Contact</th>
                      <th className="px-4 py-3.5">Company</th>
                      <th className="px-4 py-3.5">Call Status</th>
                      <th className="px-4 py-3.5">Qualification</th>
                      <th className="px-4 py-3.5">Sentiment</th>
                      <th className="px-4 py-3.5">Intent</th>
                      <th className="px-4 py-3.5">Duration</th>
                      <th className="px-4 py-3.5">Last Contact</th>
                      <th className="px-4 py-3.5 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    {filteredLeads.length === 0 ? (
                      <tr>
                        <td colSpan={9} className="px-6 py-12 text-center text-gray-500">
                          <div className="flex flex-col items-center justify-center space-y-2">
                            <Users className="h-8 w-8 text-gray-300" />
                            <p className="text-sm font-medium text-gray-600">
                              No leads match the selected criteria
                            </p>
                            <p className="text-xs text-gray-400">
                              Try clearing filters or uploading new leads to the campaign.
                            </p>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      filteredLeads.map((l) => {
                        const isQual = l.qualification.toLowerCase().includes("qualif") && !l.qualification.toLowerCase().includes("not") && !l.qualification.toLowerCase().includes("un");
                        const isUnqual = l.qualification.toLowerCase().includes("not") || l.qualification.toLowerCase().includes("unqual");

                        return (
                          <tr key={l.id} className="hover:bg-gray-50/80 transition-colors">
                            <td className="px-5 py-3">
                              <div className="font-semibold text-gray-900">{l.name}</div>
                              <div className="text-gray-500 font-mono text-[11px]">{l.phone || "—"}</div>
                            </td>
                            <td className="px-4 py-3 text-gray-600">
                              {l.company || "—"}
                            </td>
                            <td className="px-4 py-3">
                              <span
                                className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                                  l.call_status.toUpperCase() === "COMPLETED" || l.call_status.toUpperCase() === "CONNECTED"
                                    ? "bg-emerald-100 text-emerald-800"
                                    : l.call_status.toUpperCase() === "CALLING" || l.call_status.toUpperCase() === "IN_PROGRESS"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : l.call_status.toUpperCase() === "FAILED" || l.call_status.toUpperCase() === "NO_ANSWER"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-gray-100 text-gray-700"
                                }`}
                              >
                                {l.call_status}
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <span
                                className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                                  isQual
                                    ? "bg-emerald-100 text-emerald-800"
                                    : isUnqual
                                    ? "bg-rose-100 text-rose-800"
                                    : "bg-gray-100 text-gray-600"
                                }`}
                              >
                                {isQual ? (
                                  <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                                ) : isUnqual ? (
                                  <XCircle className="h-3 w-3 text-rose-600" />
                                ) : null}
                                {l.qualification}
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <span
                                className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                                  l.sentiment === "Positive"
                                    ? "bg-green-50 text-green-700 border border-green-200"
                                    : l.sentiment === "Neutral"
                                    ? "bg-slate-50 text-slate-700 border border-slate-200"
                                    : "bg-amber-50 text-amber-700 border border-amber-200"
                                }`}
                              >
                                {l.sentiment}
                              </span>
                            </td>
                            <td className="px-4 py-3 text-gray-600 font-medium">
                              {l.intent || "—"}
                            </td>
                            <td className="px-4 py-3 font-mono text-gray-700">
                              {formatDuration(l.duration)}
                            </td>
                            <td className="px-4 py-3 text-gray-500 font-mono text-[11px]">
                              {l.last_call || "—"}
                            </td>
                            <td className="px-4 py-3 text-right">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => router.push(`/leads/${l.id}`)}
                                className="h-7 text-xs text-indigo-600 hover:text-indigo-900 hover:bg-indigo-50 font-semibold"
                              >
                                <span>Details</span>
                                <ExternalLink className="h-3 w-3 ml-1" />
                              </Button>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CALL ACTIVITY & AUDIO RECORDINGS */}
        {activeTab === "calls" && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3 rounded-lg border border-gray-200">
              <span className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                <PhoneCall className="h-4 w-4 text-indigo-600" />
                Live & Historical Call Log ({filteredCalls.length})
              </span>
              <div className="relative w-full sm:w-72">
                <Search className="h-3.5 w-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input
                  value={callSearch}
                  onChange={(e) => setCallSearch(e.target.value)}
                  placeholder="Search caller, result, transcript..."
                  className="pl-8 h-8 text-xs bg-gray-50/50 border-gray-200 focus:bg-white"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-left text-xs">
                  <thead className="bg-gray-50/80 text-gray-600 font-semibold uppercase tracking-wider text-[11px]">
                    <tr>
                      <th className="px-5 py-3.5">Direction</th>
                      <th className="px-4 py-3.5">Lead / Caller</th>
                      <th className="px-4 py-3.5">Phone</th>
                      <th className="px-4 py-3.5">Duration</th>
                      <th className="px-4 py-3.5">Outcome</th>
                      <th className="px-4 py-3.5">Sentiment / Intent</th>
                      <th className="px-4 py-3.5">Audio Recording</th>
                      <th className="px-4 py-3.5 text-right">Transcript</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    {filteredCalls.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="px-6 py-12 text-center text-gray-500">
                          <div className="flex flex-col items-center justify-center space-y-2">
                            <Headphones className="h-8 w-8 text-gray-300" />
                            <p className="text-sm font-medium text-gray-600">No calls recorded yet</p>
                            <p className="text-xs text-gray-400">
                              Calls generated through automated dialing or inbound lines will display here.
                            </p>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      filteredCalls.map((c) => (
                        <tr key={c.id} className="hover:bg-gray-50/80 transition-colors">
                          <td className="px-5 py-3">
                            {c.direction === "INBOUND" ? (
                              <Badge className="bg-blue-100 text-blue-800 border-none font-semibold text-[10px] flex items-center gap-1 w-fit">
                                <PhoneIncoming className="h-3 w-3 text-blue-600" />
                                INBOUND
                              </Badge>
                            ) : (
                              <Badge className="bg-indigo-100 text-indigo-800 border-none font-semibold text-[10px] flex items-center gap-1 w-fit">
                                <PhoneOutgoing className="h-3 w-3 text-indigo-600" />
                                OUTBOUND
                              </Badge>
                            )}
                          </td>
                          <td className="px-4 py-3 font-semibold text-gray-900">
                            {c.lead_name}
                          </td>
                          <td className="px-4 py-3 text-gray-500 font-mono text-[11px]">
                            {c.phone || "—"}
                          </td>
                          <td className="px-4 py-3 font-mono text-gray-700">
                            {formatDuration(c.duration_seconds)}
                          </td>
                          <td className="px-4 py-3">
                            <span
                              className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                                c.qualification === "Qualified"
                                  ? "bg-emerald-100 text-emerald-800"
                                  : c.qualification === "Not Qualified"
                                  ? "bg-rose-100 text-rose-800"
                                  : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              {c.disposition || c.status}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex flex-col gap-0.5">
                              <span className="text-[11px] font-medium text-gray-800">{c.sentiment}</span>
                              <span className="text-[10px] text-gray-400">{c.intent}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            {c.recording_url ? (
                              <audio
                                controls
                                src={c.recording_url}
                                className="h-7 w-48 rounded"
                                preload="none"
                              />
                            ) : (
                              <span className="text-gray-400 text-[11px] italic">No audio</span>
                            )}
                          </td>
                          <td className="px-4 py-3 text-right">
                            {c.transcript ? (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() =>
                                  setSelectedCallTranscript({
                                    lead_name: c.lead_name,
                                    phone: c.phone,
                                    transcript: c.transcript || "",
                                    recording_url: c.recording_url,
                                  })
                                }
                                className="h-7 text-xs border-indigo-200 text-indigo-700 hover:bg-indigo-50"
                              >
                                View
                              </Button>
                            ) : (
                              <span className="text-gray-400 text-[11px]">—</span>
                            )}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: INBOUND LINE & TELEPHONY ROUTING */}
        {activeTab === "inbound" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Inbound Control Panel */}
            <Card className="lg:col-span-2 p-6 bg-white border border-gray-200 shadow-sm space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <Radio className="h-5 w-5 text-indigo-600" />
                    Inbound Calling Gateway & AI Attendant
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    When callers dial this campaign&apos;s phone number, GBZ automatically greets them with
                    this campaign&apos;s assigned AI agent and runs the qualification script in real time.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`h-3 w-3 rounded-full ${
                      inbConfig?.enabled ? "bg-emerald-500 animate-pulse" : "bg-gray-300"
                    }`}
                  />
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-700">
                    {inbConfig?.enabled ? "Active" : "Disabled"}
                  </span>
                </div>
              </div>

              {/* Status Toggle Box */}
              <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-sm font-semibold text-gray-900">
                    Auto-Answer Inbound Calls
                  </div>
                  <div className="text-xs text-gray-500">
                    Enable or disable automatic AI handling for calls coming into this number.
                  </div>
                </div>
                <Button
                  onClick={handleToggleInbound}
                  disabled={inboundToggling}
                  variant={inbConfig?.enabled ? "default" : "outline"}
                  className={`h-9 px-4 text-xs font-semibold ${
                    inbConfig?.enabled
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {inboundToggling
                    ? "Updating..."
                    : inbConfig?.enabled
                    ? "Disable Inbound AI"
                    : "Enable Inbound AI"}
                </Button>
              </div>

              {/* Inbound Number Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-lg border border-gray-200 bg-white space-y-1">
                  <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                    Assigned Inbound DID / Number
                  </div>
                  <div className="font-mono text-base font-bold text-gray-900 flex items-center justify-between">
                    <span>{camp?.twilio_number || "Not Configured"}</span>
                    {camp?.twilio_number && camp.twilio_number !== "LOCAL_TEST" && (
                      <button
                        onClick={() => handleCopyDid(camp.twilio_number)}
                        className="text-gray-400 hover:text-gray-700 p-1"
                        title="Copy Number"
                      >
                        {copiedDid ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                      </button>
                    )}
                  </div>
                  <div className="text-[11px] text-gray-500">
                    Mapped to PSTN DID & SIP Trunk
                  </div>
                </div>

                <div className="p-3.5 rounded-lg border border-gray-200 bg-white space-y-1">
                  <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                    Assigned Inbound Voice Agent
                  </div>
                  <div className="text-base font-bold text-gray-900 truncate">
                    {agent?.name || "AI Voice Agent"}
                  </div>
                  <div className="text-[11px] text-gray-500">
                    Voice: {agent?.voice_provider} ({agent?.voice_id || "rachel"})
                  </div>
                </div>
              </div>

              {/* Step-by-Step Flow Explanation */}
              <div className="border-t border-gray-100 pt-4 space-y-3">
                <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                  How Incoming Call Routing Works
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                    <div className="font-bold text-slate-900 flex items-center gap-1.5">
                      <span className="h-5 w-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px]">
                        1
                      </span>
                      PSTN / SIP Ring
                    </div>
                    <p className="text-[11px] text-slate-600">
                      Caller dials {camp?.twilio_number}. Asterisk or Twilio immediately forwards the INVITE to GBZ.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                    <div className="font-bold text-slate-900 flex items-center gap-1.5">
                      <span className="h-5 w-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px]">
                        2
                      </span>
                      AI Voice Answer
                    </div>
                    <p className="text-[11px] text-slate-600">
                      AI Assistant ({agent?.name}) answers with the campaign&apos;s dynamic greeting and starts qualification.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                    <div className="font-bold text-slate-900 flex items-center gap-1.5">
                      <span className="h-5 w-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px]">
                        3
                      </span>
                      Real-Time Sync
                    </div>
                    <p className="text-[11px] text-slate-600">
                      Call audio is recorded, transcribed, and qualified in this campaign dashboard instantly.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Inbound Stats Summary Column */}
            <Card className="p-6 bg-white border border-gray-200 shadow-sm space-y-5 h-fit">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                Inbound Health & Stats
              </h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-gray-100">
                  <span className="text-gray-500">Inbound Calls Processed</span>
                  <span className="font-bold font-mono text-gray-900">
                    {callStats?.inbound_calls ?? 0}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs pb-2 border-b border-gray-100">
                  <span className="text-gray-500">Auto-Attendant Status</span>
                  <Badge
                    className={`text-[10px] font-semibold border-none ${
                      inbConfig?.enabled ? "bg-emerald-100 text-emerald-800" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {inbConfig?.enabled ? "ONLINE" : "DISABLED"}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-xs pb-2 border-b border-gray-100">
                  <span className="text-gray-500">Lead Auto-Creation</span>
                  <span className="text-emerald-700 font-semibold">Enabled</span>
                </div>
                <div className="flex items-center justify-between text-xs pb-2 border-b border-gray-100">
                  <span className="text-gray-500">WebSocket Broadcast</span>
                  <span className="text-indigo-700 font-semibold">Active</span>
                </div>
              </div>

              <div className="p-3 bg-blue-50/60 border border-blue-200 rounded-lg text-xs text-blue-900 space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <AlertCircle className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                  Supervisor Live Barge
                </div>
                <p className="text-[11px] text-blue-800 leading-relaxed">
                  Supervisors can monitor live inbound conversations via the Live Calls tab or softphone to whisper or barge into active calls.
                </p>
              </div>
            </Card>
          </div>
        )}
      </div>

      {/* Transcript Detail Modal */}
      {selectedCallTranscript && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-gray-50/50">
              <div>
                <h3 className="text-base font-bold text-gray-900">
                  Call Transcript: {selectedCallTranscript.lead_name}
                </h3>
                <p className="text-xs text-gray-500 font-mono">
                  {selectedCallTranscript.phone || "Unknown number"}
                </p>
              </div>
              <button
                onClick={() => setSelectedCallTranscript(null)}
                className="text-gray-400 hover:text-gray-700 p-1.5 rounded-lg hover:bg-gray-100"
              >
                ✕
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 flex-1">
              {selectedCallTranscript.recording_url && (
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 flex items-center gap-3">
                  <Volume2 className="h-4 w-4 text-indigo-600 shrink-0" />
                  <audio
                    controls
                    src={selectedCallTranscript.recording_url}
                    className="w-full h-8"
                  />
                </div>
              )}

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 font-sans leading-relaxed whitespace-pre-wrap">
                {selectedCallTranscript.transcript || "No transcript content available."}
              </div>
            </div>

            <div className="px-6 py-3 border-t border-gray-200 bg-gray-50 flex justify-end">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedCallTranscript(null)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </AppShell>
  );
}

