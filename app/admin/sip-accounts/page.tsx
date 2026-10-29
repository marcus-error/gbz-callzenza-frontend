"use client";

import React, { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import {
  Server,
  PhoneCall,
  Plus,
  RefreshCw,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  HelpCircle,
  Pencil,
  Trash2,
  Radio,
  Zap,
  ArrowLeft,
  Check,
  X,
  Shield,
  Layers,
  ArrowUpDown,
  Search,
  ExternalLink,
  Lock,
  Building2,
} from "lucide-react";
import { useAuthStore } from "@/lib/store";
import { apiFetch } from "@/lib/api-client";
import {
  sipAccountService,
  SIPAccount,
  SIPAccountCreateInput,
  SIPAccountUpdateInput,
  SIPAccountTestResult,
  SIPAccountRegisterResult,
} from "@/lib/services/sip-account.service";

export default function SIPAccountsAdminPage() {
  const user = useAuthStore((s) => s.user);
  const isSuperAdmin = user?.role === "SUPER_ADMIN" || user?.email === "admin@GBZ.com";

  const [organizations, setOrganizations] = useState<{ id: string; name: string }[]>([]);
  const [selectedOrgFilter, setSelectedOrgFilter] = useState<string>("all");
  const [accounts, setAccounts] = useState<SIPAccount[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [directionFilter, setDirectionFilter] = useState<string>("all");

  // Test Connection Modal State
  const [testingId, setTestingId] = useState<string | null>(null);
  const [testResult, setTestResult] = useState<SIPAccountTestResult | null>(null);
  const [showTestModal, setShowTestModal] = useState(false);
  const [testTargetAccount, setTestTargetAccount] = useState<SIPAccount | null>(null);

  // Registration Diagnostic Modal State
  const [registeringId, setRegisteringId] = useState<string | null>(null);
  const [registerResult, setRegisterResult] = useState<SIPAccountRegisterResult | null>(null);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [registerTargetAccount, setRegisterTargetAccount] = useState<SIPAccount | null>(null);

  // Add / Edit Modal State
  const [showModal, setShowModal] = useState(false);
  const [editingAccount, setEditingAccount] = useState<SIPAccount | null>(null);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const [form, setForm] = useState<SIPAccountCreateInput>({
    name: "",
    sip_server: "",
    username: "",
    sip_login: "",
    password: "",
    display_name: "Zenza Agent",
    extension: "2001",

    host: "",
    domain: "",
    outbound_proxy: "",
    port: 5060,
    sip_public_address: "Auto",
    local_ip: "",
    sip_ws_url: "",

    caller_id: "",
    voicemail_number: "",
    dialing_prefix: "",
    dial_plan: "",

    refresh_interval: 300,
    keep_alive_interval: 15,
    rtp_port: 10000,
    rtp_ip: "",
    webhook_base_url: "",

    additional_dids: [],

    transport: "udp",
    hide_caller_id: false,
    media_encryption: false,
    publish_presence: false,
    allow_ip_rewrite: false,
    ice: false,
    disable_session_timers: false,
    use_auth_user_in_from: false,

    direction: "both",
    enabled: true,
    max_channels: 10,
  });

  const loadAccounts = async () => {
    try {
      setError(null);
      const data = await sipAccountService.list();
      setAccounts(data);
    } catch (err: any) {
      console.error("Failed to load SIP accounts:", err);
      setError(err?.message || "Failed to load SIP accounts");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadAccounts();
    if (isSuperAdmin) {
      apiFetch<any[]>("/api/businesses")
        .then((bizs) => {
          if (Array.isArray(bizs)) {
            setOrganizations(bizs.map((b) => ({ id: b.id, name: b.name || "Unnamed Organization" })));
          }
        })
        .catch((err) => console.error("Failed to load organizations for SIP selector:", err));
    }
  }, [isSuperAdmin]);

  const handleRefresh = () => {
    setRefreshing(true);
    loadAccounts();
  };

  const handleOpenAdd = () => {
    setEditingAccount(null);
    setFormError(null);
    setForm({
      organization_id: organizations[0]?.id || user?.business_id || "",
      name: "",
      sip_server: "",
      username: "",
      sip_login: "",
      password: "",
      display_name: "Zenza Agent",
      extension: "2001",

      host: "",
      domain: "",
      outbound_proxy: "",
      port: 5060,
      sip_public_address: "Auto",
      local_ip: "",
      sip_ws_url: "",

      caller_id: "",
      voicemail_number: "",
      dialing_prefix: "",
      dial_plan: "",

      refresh_interval: 300,
      keep_alive_interval: 15,
      rtp_port: 10000,
      rtp_ip: "",
      webhook_base_url: "",

      additional_dids: [],

      transport: "udp",
      hide_caller_id: false,
      media_encryption: false,
      publish_presence: false,
      allow_ip_rewrite: false,
      ice: false,
      disable_session_timers: false,
      use_auth_user_in_from: false,

      direction: "both",
      enabled: true,
      max_channels: 10,
    });
    setShowModal(true);
  };

  const handleOpenEdit = (acc: SIPAccount) => {
    setEditingAccount(acc);
    setFormError(null);
    const settings = acc.settings || {};
    const addDids = acc.additional_dids || (acc.dids ? acc.dids.filter(d => d.phone_number !== acc.caller_id).map(d => d.phone_number) : []);
    setForm({
      organization_id: acc.organization_id,
      name: acc.name,
      sip_server: acc.sip_server || settings.sip_server || acc.host || "",
      username: acc.username,
      sip_login: acc.sip_login || settings.sip_login || acc.auth_username || acc.username || "",
      password: "", // Leave blank to preserve existing
      display_name: acc.display_name || settings.display_name || "Zenza Agent",
      extension: acc.extension || settings.extension || "2001",

      host: acc.host,
      domain: acc.domain || settings.domain || acc.host || "",
      outbound_proxy: acc.outbound_proxy || settings.outbound_proxy || "",
      port: acc.port || 5060,
      sip_public_address: acc.sip_public_address || settings.sip_public_address || "Auto",
      local_ip: acc.local_ip || settings.local_ip || "",
      sip_ws_url: acc.sip_ws_url || settings.sip_ws_url || "",

      caller_id: acc.caller_id || (acc.dids && acc.dids[0]?.phone_number) || "",
      voicemail_number: acc.voicemail_number || settings.voicemail_number || "",
      dialing_prefix: acc.dialing_prefix || settings.dialing_prefix || "",
      dial_plan: acc.dial_plan || settings.dial_plan || "",

      refresh_interval: acc.refresh_interval || settings.refresh_interval || 300,
      keep_alive_interval: acc.keep_alive_interval || settings.keep_alive_interval || 15,
      rtp_port: acc.rtp_port || settings.rtp_port || 10000,
      rtp_ip: acc.rtp_ip || settings.rtp_ip || "",
      webhook_base_url: acc.webhook_base_url || settings.webhook_base_url || "",

      additional_dids: addDids,

      transport: acc.transport || "udp",
      hide_caller_id: Boolean(acc.hide_caller_id ?? settings.hide_caller_id),
      media_encryption: Boolean(acc.media_encryption ?? settings.media_encryption),
      publish_presence: Boolean(acc.publish_presence ?? settings.publish_presence),
      allow_ip_rewrite: Boolean(acc.allow_ip_rewrite ?? settings.allow_ip_rewrite),
      ice: Boolean(acc.ice ?? settings.ice),
      disable_session_timers: Boolean(acc.disable_session_timers ?? settings.disable_session_timers),
      use_auth_user_in_from: Boolean(acc.use_auth_user_in_from ?? settings.use_auth_user_in_from),

      direction: acc.direction || "both",
      enabled: acc.enabled,
      max_channels: acc.max_channels || 10,
    });
    setShowModal(true);
  };

  const handleAddDidRow = () => {
    setForm((prev) => ({
      ...prev,
      additional_dids: [...(prev.additional_dids || []), ""],
    }));
  };

  const handleUpdateDidRow = (index: number, val: string) => {
    setForm((prev) => {
      const copy = [...(prev.additional_dids || [])];
      copy[index] = val;
      return { ...prev, additional_dids: copy };
    });
  };

  const handleRemoveDidRow = (index: number) => {
    setForm((prev) => {
      const copy = [...(prev.additional_dids || [])];
      copy.splice(index, 1);
      return { ...prev, additional_dids: copy };
    });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (isSuperAdmin && !form.organization_id) {
      setFormError("Please select an organization / tenant for this SIP account.");
      return;
    }

    const name = form.name.trim();
    const username = form.username.trim();
    const host = (form.host || form.sip_server || "").trim();

    if (!name || !username || !host) {
      setFormError("SIP Account Name, Username, and Host/Server are required.");
      return;
    }

    setSaving(true);
    try {
      const cleanAdditionalDids = (form.additional_dids || [])
        .map((d) => d.trim())
        .filter(Boolean);

      const payload = {
        organization_id: isSuperAdmin ? (form.organization_id || undefined) : undefined,
        name,
        username,
        auth_username: form.sip_login?.trim() || form.auth_username?.trim() || username,
        domain: form.domain?.trim() || host,
        host,
        port: Number(form.port) || 5060,
        transport: form.transport || "udp",
        outbound_proxy: form.outbound_proxy?.trim() || undefined,
        caller_id: form.caller_id?.trim() || undefined,
        direction: form.direction || "both",
        enabled: form.enabled ?? true,
        max_channels: Number(form.max_channels) || 10,

        // Extended fields matching Image 3
        sip_server: form.sip_server?.trim() || host,
        sip_login: form.sip_login?.trim() || form.auth_username?.trim() || username,
        display_name: form.display_name?.trim() || undefined,
        extension: form.extension?.trim() || undefined,
        sip_public_address: form.sip_public_address?.trim() || "Auto",
        local_ip: form.local_ip?.trim() || undefined,
        sip_ws_url: form.sip_ws_url?.trim() || undefined,
        voicemail_number: form.voicemail_number?.trim() || undefined,
        dialing_prefix: form.dialing_prefix?.trim() || undefined,
        dial_plan: form.dial_plan?.trim() || undefined,
        refresh_interval: Number(form.refresh_interval) || 300,
        keep_alive_interval: Number(form.keep_alive_interval) || 15,
        rtp_port: Number(form.rtp_port) || 10000,
        rtp_ip: form.rtp_ip?.trim() || undefined,
        webhook_base_url: form.webhook_base_url?.trim() || undefined,
        additional_dids: cleanAdditionalDids,
        hide_caller_id: Boolean(form.hide_caller_id),
        media_encryption: Boolean(form.media_encryption),
        publish_presence: Boolean(form.publish_presence),
        allow_ip_rewrite: Boolean(form.allow_ip_rewrite),
        ice: Boolean(form.ice),
        disable_session_timers: Boolean(form.disable_session_timers),
        use_auth_user_in_from: Boolean(form.use_auth_user_in_from),
      };

      if (editingAccount) {
        const updateData: SIPAccountUpdateInput = {
          ...payload,
        };
        if (form.password && form.password.trim()) {
          updateData.password = form.password.trim();
        }
        await sipAccountService.update(editingAccount.id, updateData);
        setSuccessMessage(`SIP account "${name}" updated successfully.`);
      } else {
        await sipAccountService.create({
          ...payload,
          password: form.password?.trim() || undefined,
        });
        setSuccessMessage(`SIP account "${name}" created successfully.`);
      }
      setShowModal(false);
      loadAccounts();
    } catch (err: any) {
      console.error("Save failed:", err);
      setFormError(err?.message || "Failed to save SIP account");
    } finally {
      setSaving(false);
    }
  };

  const handleToggle = async (acc: SIPAccount) => {
    try {
      const res = await sipAccountService.toggleStatus(acc.id);
      setAccounts((prev) =>
        prev.map((a) => (a.id === acc.id ? { ...a, enabled: res.enabled } : a))
      );
      setSuccessMessage(
        `SIP account "${acc.name}" ${res.enabled ? "enabled" : "disabled"}.`
      );
    } catch (err: any) {
      setError(err?.message || "Failed to toggle account status");
    }
  };

  const handleDelete = async (acc: SIPAccount) => {
    if (acc.assigned_campaigns_count > 0) {
      alert(
        `Cannot delete "${acc.name}": Assigned to ${acc.assigned_campaigns_count} campaign(s). Please unassign or delete those campaigns first.`
      );
      return;
    }
    if (!confirm(`Are you sure you want to delete SIP account "${acc.name}"? This cannot be undone.`)) {
      return;
    }

    try {
      await sipAccountService.delete(acc.id);
      setSuccessMessage(`SIP account "${acc.name}" deleted.`);
      loadAccounts();
    } catch (err: any) {
      alert(err?.message || "Failed to delete SIP account");
    }
  };

  const handleRegister = async (acc: SIPAccount) => {
    setRegisteringId(acc.id);
    setRegisterTargetAccount(acc);
    setRegisterResult(null);
    setShowRegisterModal(true);
    setError(null);
    try {
      const res = await sipAccountService.register(acc.id);
      setRegisterResult(res);
      if (res.is_registered) {
        setSuccessMessage(`SIP account "${acc.name}" registration succeeded (200 OK).`);
      } else {
        const sipCode = res.sip_status_code ? ` [SIP ${res.sip_status_code}]` : "";
        setError(`Registration note${sipCode}: ${res.message || res.last_error}`);
      }
      await loadAccounts();
    } catch (err: any) {
      setRegisterResult({
        account_id: acc.id,
        status: "error",
        message: err?.message || "Registration request failed.",
        is_registered: false,
        last_error: err?.message,
        retryable: true,
        suggested_action: "Check server reachability and credentials, then retry.",
        timestamp: new Date().toISOString(),
      });
      setError(err?.message || "Registration request failed.");
    } finally {
      setRegisteringId(null);
    }
  };

  const handleTestConnection = async (acc: SIPAccount) => {
    setTestingId(acc.id);
    setTestTargetAccount(acc);
    setTestResult(null);
    setShowTestModal(true);
    try {
      const res = await sipAccountService.testConnection(acc.id);
      setTestResult(res);
      await loadAccounts();
    } catch (err: any) {
      setTestResult({
        account_id: acc.id,
        reachable: false,
        latency_ms: 0,
        transport: acc.transport,
        error: err?.message || "Probe execution failed",
        timestamp: new Date().toISOString(),
      });
    } finally {
      setTestingId(null);
    }
  };

  const filteredAccounts = useMemo(() => {
    return accounts.filter((acc) => {
      const matchesSearch =
        acc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        acc.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        acc.host.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (acc.organization_name || "").toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDir =
        directionFilter === "all" ||
        acc.direction === directionFilter ||
        acc.direction === "both";
      const matchesOrg =
        !isSuperAdmin ||
        selectedOrgFilter === "all" ||
        acc.organization_id === selectedOrgFilter;
      return matchesSearch && matchesDir && matchesOrg;
    });
  }, [accounts, searchQuery, directionFilter, selectedOrgFilter, isSuperAdmin]);

  return (
    <AppShell>
      <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-6 lg:p-8">
        {/* Top Header */}
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <div className="flex items-center gap-2 text-sm text-slate-400 mb-1">
                <Link href="/admin" className="hover:text-emerald-400 flex items-center gap-1 transition-colors">
                  <ArrowLeft className="w-3.5 h-3.5" /> Admin Settings
                </Link>
                <span>/</span>
                <span className="text-slate-200">Telephony</span>
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
                <Server className="w-6 h-6 text-emerald-400" />
                SIP Account Configuration
              </h1>
              <p className="text-sm text-slate-400 mt-1">
                Manage organization SIP endpoints, authenticate with Asterisk/PJSIP, and assign trunks to AI & Voice Agent campaigns.
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <button
                onClick={handleRefresh}
                disabled={refreshing}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 transition-colors"
                title="Refresh accounts"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? "animate-spin text-emerald-400" : ""}`} />
                Refresh
              </button>
              <button
                onClick={handleOpenAdd}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors shadow-lg shadow-emerald-500/10"
              >
                <Plus className="w-4 h-4" />
                Add SIP Account
              </button>
            </div>
          </div>

          {/* Flash Feedback */}
          {successMessage && (
            <div className="p-3.5 bg-emerald-950/60 border border-emerald-800/80 rounded-xl text-emerald-300 text-sm flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{successMessage}</span>
              </div>
              <button onClick={() => setSuccessMessage(null)} className="text-emerald-400 hover:text-emerald-200">
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {error && (
            <div className="p-3.5 bg-rose-950/60 border border-rose-800/80 rounded-xl text-rose-300 text-sm flex items-center justify-between">
              <div className="flex items-center gap-2">
                <XCircle className="w-4 h-4 text-rose-400" />
                <span>{error}</span>
              </div>
              <button onClick={() => setError(null)} className="text-rose-400 hover:text-rose-200">
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Summary Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-slate-900/70 border border-slate-800/80 rounded-xl">
              <div className="text-xs font-medium text-slate-400">Total Configured</div>
              <div className="text-2xl font-bold text-white mt-1">{accounts.length}</div>
              <div className="text-[11px] text-slate-500 mt-1">Tenant SIP Endpoints</div>
            </div>
            <div className="p-4 bg-slate-900/70 border border-slate-800/80 rounded-xl">
              <div className="text-xs font-medium text-slate-400">Enabled & Active</div>
              <div className="text-2xl font-bold text-emerald-400 mt-1">
                {accounts.filter((a) => a.enabled).length}
              </div>
              <div className="text-[11px] text-slate-500 mt-1">Eligible for Call Routing</div>
            </div>
            <div className="p-4 bg-slate-900/70 border border-slate-800/80 rounded-xl">
              <div className="text-xs font-medium text-slate-400">Healthy / Reachable</div>
              <div className="text-2xl font-bold text-cyan-400 mt-1">
                {accounts.filter((a) => a.last_health_status === "healthy" || a.registration_status === "registered").length}
              </div>
              <div className="text-[11px] text-slate-500 mt-1">Confirmed via Socket Probe</div>
            </div>
            <div className="p-4 bg-slate-900/70 border border-slate-800/80 rounded-xl">
              <div className="text-xs font-medium text-slate-400">Campaigns Assigned</div>
              <div className="text-2xl font-bold text-purple-400 mt-1">
                {accounts.reduce((acc, curr) => acc + (curr.assigned_campaigns_count || 0), 0)}
              </div>
              <div className="text-[11px] text-slate-500 mt-1">Active Dialing Associations</div>
            </div>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-900/40 p-3 rounded-xl border border-slate-800/60">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Search account name, username, or server host..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div className="flex items-center gap-3">
              {isSuperAdmin && organizations.length > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">Tenant:</span>
                  <select
                    value={selectedOrgFilter}
                    onChange={(e) => setSelectedOrgFilter(e.target.value)}
                    className="bg-slate-950 border border-slate-800 rounded-lg text-xs py-1.5 px-2.5 text-slate-300 focus:outline-none focus:border-emerald-500"
                  >
                    <option value="all">All Tenants / Orgs</option>
                    {organizations.map((org) => (
                      <option key={org.id} value={org.id}>
                        {org.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">Direction:</span>
                <select
                  value={directionFilter}
                  onChange={(e) => setDirectionFilter(e.target.value)}
                  className="bg-slate-950 border border-slate-800 rounded-lg text-xs py-1.5 px-2.5 text-slate-300 focus:outline-none focus:border-emerald-500"
                >
                  <option value="all">All Directions</option>
                  <option value="outbound">Outbound Only</option>
                  <option value="inbound">Inbound Only</option>
                  <option value="both">Bidirectional (Both)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Accounts Table */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
            {loading ? (
              <div className="p-12 text-center text-slate-400">
                <RefreshCw className="w-6 h-6 animate-spin text-emerald-400 mx-auto mb-2" />
                Loading organization SIP accounts...
              </div>
            ) : filteredAccounts.length === 0 ? (
              <div className="p-12 text-center text-slate-400">
                <Server className="w-10 h-10 text-slate-600 mx-auto mb-3" />
                <h3 className="text-base font-semibold text-white">No SIP Accounts Found</h3>
                <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                  {searchQuery
                    ? "No accounts match your search filter."
                    : "No SIP accounts configured for your organization. Add one to enable outbound dialing for AI and Voice Agent campaigns."}
                </p>
                {!searchQuery && (
                  <button
                    onClick={handleOpenAdd}
                    className="mt-4 inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add First Account
                  </button>
                )}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-950/60 text-slate-400 uppercase tracking-wider text-[10px]">
                      <th className="py-3 px-4">Account Name</th>
                      {isSuperAdmin && <th className="py-3 px-4">Assigned Tenant</th>}
                      <th className="py-3 px-4">Host / Server</th>
                      <th className="py-3 px-4">SIP Username</th>
                      <th className="py-3 px-4">Configured DIDs</th>
                      <th className="py-3 px-4">Direction</th>
                      <th className="py-3 px-4">Routing</th>
                      <th className="py-3 px-4">Registration</th>
                      <th className="py-3 px-4">Health / Ping</th>
                      <th className="py-3 px-4">Assigned Campaigns</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {filteredAccounts.map((acc) => {
                      const isHealthy =
                        acc.last_health_status === "healthy" ||
                        acc.registration_status === "registered";
                      const isUnreachable =
                        acc.last_health_status === "unreachable" ||
                        acc.registration_status === "unreachable";

                      return (
                        <tr key={acc.id} className="hover:bg-slate-850/50 transition-colors">
                          <td className="py-3 px-4 font-semibold text-white">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-emerald-400" />
                              <span>{acc.name}</span>
                              {acc.caller_id && (
                                <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded font-mono">
                                  CLI: {acc.caller_id}
                                </span>
                              )}
                            </div>
                          </td>
                          {isSuperAdmin && (
                            <td className="py-3 px-4">
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-800/80 text-emerald-300 border border-slate-700">
                                <Building2 className="w-3 h-3 text-emerald-400" />
                                {acc.organization_name || "Unassigned"}
                              </span>
                            </td>
                          )}
                          <td className="py-3 px-4 font-mono text-slate-300">
                            {acc.host}:{acc.port}
                            <span className="ml-1.5 text-[9px] uppercase px-1 py-0.2 rounded bg-slate-800 text-slate-400">
                              {acc.transport}
                            </span>
                          </td>
                          <td className="py-3 px-4 font-mono text-slate-300">
                            <div className="flex items-center gap-1.5">
                              <span>{acc.username}</span>
                              {acc.has_password && (
                                <span title="Encrypted password set" className="text-emerald-400">
                                  <Lock className="w-3 h-3" />
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex flex-wrap items-center gap-1 max-w-[200px]">
                              {acc.dids && acc.dids.length > 0 ? (
                                acc.dids.map((d) => (
                                  <span key={d.id} className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-950/70 border border-emerald-800 text-emerald-300">
                                    <PhoneCall className="w-2.5 h-2.5" />
                                    {d.phone_number}
                                  </span>
                                ))
                              ) : acc.caller_id ? (
                                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">
                                  <PhoneCall className="w-2.5 h-2.5 text-slate-400" />
                                  {acc.caller_id}
                                </span>
                              ) : (
                                <span className="text-slate-500 text-[10px] italic">None configured</span>
                              )}
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className="capitalize px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-800 text-slate-300">
                              {acc.direction}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <button
                              onClick={() => handleToggle(acc)}
                              className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold transition-colors ${
                                acc.enabled
                                  ? "bg-emerald-950/80 text-emerald-300 border border-emerald-800 hover:bg-emerald-900"
                                  : "bg-slate-800 text-slate-400 border border-slate-700 hover:bg-slate-700"
                              }`}
                              title="Click to toggle enabled status for campaign routing"
                            >
                              <span className={`w-1.5 h-1.5 rounded-full ${acc.enabled ? "bg-emerald-400" : "bg-slate-500"}`} />
                              {acc.enabled ? "Enabled" : "Disabled"}
                            </button>
                          </td>
                          <td className="py-3 px-4 max-w-xs">
                            <div className="flex flex-col gap-1">
                              <div className="flex items-center gap-1.5 flex-wrap">
                                {acc.registration_status === "registered" ? (
                                  <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/60 text-[10px]">
                                    <CheckCircle2 className="w-3 h-3" />
                                    Registered
                                  </span>
                                ) : acc.registration_status === "auth_failed" ? (
                                  <span className="inline-flex items-center gap-1 text-rose-400 font-semibold px-2 py-0.5 rounded bg-rose-950/60 border border-rose-800/60 text-[10px]">
                                    <XCircle className="w-3 h-3" />
                                    Auth Failed
                                  </span>
                                ) : acc.registration_status === "dns_error" ? (
                                  <span className="inline-flex items-center gap-1 text-rose-400 font-semibold px-2 py-0.5 rounded bg-rose-950/60 border border-rose-800/60 text-[10px]">
                                    <AlertTriangle className="w-3 h-3" />
                                    DNS Error
                                  </span>
                                ) : acc.registration_status === "network_error" ? (
                                  <span className="inline-flex items-center gap-1 text-amber-400 font-semibold px-2 py-0.5 rounded bg-amber-950/60 border border-amber-800/60 text-[10px]">
                                    <AlertTriangle className="w-3 h-3" />
                                    Network Error
                                  </span>
                                ) : acc.registration_status === "not_required" || acc.registration_status === "outbound_ready" ? (
                                  <span className="inline-flex items-center gap-1 text-cyan-300 font-medium px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/60 text-[10px]" title="Outbound Trunk (Registration Not Required)">
                                    <Check className="w-3 h-3" />
                                    Outbound Ready
                                  </span>
                                ) : acc.registration_status === "disabled" ? (
                                  <span className="inline-flex items-center gap-1 text-slate-400 px-2 py-0.5 rounded bg-slate-800/60 text-[10px]">
                                    Disabled
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center gap-1 text-amber-300/80 px-2 py-0.5 rounded bg-slate-850 text-[10px]">
                                    <HelpCircle className="w-3 h-3" />
                                    {acc.registration_status || "Unregistered"}
                                  </span>
                                )}

                                {acc.sip_status_code ? (
                                  <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 font-mono text-[9px] font-semibold">
                                    SIP {acc.sip_status_code}
                                  </span>
                                ) : null}

                                {acc.registration_status !== "registered" && acc.retryable && (
                                  <button
                                    onClick={() => handleRegister(acc)}
                                    disabled={registeringId === acc.id}
                                    className="inline-flex items-center gap-1 text-[10px] text-emerald-400 hover:text-emerald-300 font-semibold hover:underline"
                                    title="Retry registration"
                                  >
                                    <RefreshCw className={`w-2.5 h-2.5 ${registeringId === acc.id ? "animate-spin" : ""}`} />
                                    Retry
                                  </button>
                                )}
                              </div>

                              {acc.registration_status !== "registered" && (acc.last_error_message || acc.registration_diagnostics?.message) && (
                                <p className="text-[11px] text-rose-300 leading-snug break-words bg-rose-950/30 p-1.5 rounded border border-rose-900/50" title={acc.registration_diagnostics?.message || acc.last_error_message || ""}>
                                  {acc.registration_diagnostics?.message || acc.last_error_message}
                                </p>
                              )}

                              {acc.registration_status !== "registered" && (acc.suggested_action || acc.registration_diagnostics?.suggested_action) && (
                                <p className="text-[10px] text-slate-400 leading-tight">
                                  <span className="text-slate-500 font-medium">Action: </span>
                                  {acc.suggested_action || acc.registration_diagnostics?.suggested_action}
                                </p>
                              )}

                              {(acc.registration_diagnostics?.last_checked_at || acc.last_health_checked_at) && (
                                <span className="text-[9px] text-slate-500 font-mono">
                                  Checked: {new Date(acc.registration_diagnostics?.last_checked_at || acc.last_health_checked_at || "").toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-1.5">
                              {isHealthy ? (
                                <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                                  <CheckCircle2 className="w-3.5 h-3.5" />
                                  <span>Reachable</span>
                                  {acc.last_health_latency_ms !== null && acc.last_health_latency_ms !== undefined && (
                                    <span className="text-[10px] text-slate-400 font-mono">
                                      ({acc.last_health_latency_ms}ms)
                                    </span>
                                  )}
                                </span>
                              ) : isUnreachable ? (
                                <span className="inline-flex items-center gap-1 text-rose-400 font-medium" title={acc.last_error_message || "Probe unreachable"}>
                                  <XCircle className="w-3.5 h-3.5" />
                                  <span>Unreachable</span>
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 text-amber-400 font-medium">
                                  <AlertTriangle className="w-3.5 h-3.5" />
                                  <span>Pending</span>
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            {acc.assigned_campaigns_count > 0 ? (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-purple-950/80 border border-purple-800/80 text-purple-300 font-semibold">
                                {acc.assigned_campaigns_count} Campaign(s)
                              </span>
                            ) : (
                              <span className="text-slate-500 text-[11px]">Unassigned</span>
                            )}
                          </td>
                          <td className="py-3 px-4 text-right">
                            <div className="inline-flex items-center gap-1.5">
                              <button
                                onClick={() => handleRegister(acc)}
                                disabled={registeringId === acc.id}
                                className="p-1.5 text-slate-400 hover:text-emerald-400 rounded hover:bg-slate-800 transition-colors"
                                title="Register / Refresh Registration with SIP PBX"
                              >
                                <Radio className={`w-3.5 h-3.5 ${registeringId === acc.id ? "animate-pulse text-emerald-400" : ""}`} />
                              </button>
                              <button
                                onClick={() => handleTestConnection(acc)}
                                disabled={testingId === acc.id}
                                className="p-1.5 text-slate-400 hover:text-cyan-400 rounded hover:bg-slate-800 transition-colors"
                                title="Test connection reachability"
                              >
                                <Zap className={`w-3.5 h-3.5 ${testingId === acc.id ? "animate-spin text-cyan-400" : ""}`} />
                              </button>
                              <button
                                onClick={() => handleOpenEdit(acc)}
                                className="p-1.5 text-slate-400 hover:text-emerald-400 rounded hover:bg-slate-800 transition-colors"
                                title="Edit SIP configuration"
                              >
                                <Pencil className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDelete(acc)}
                                className="p-1.5 text-slate-400 hover:text-rose-400 rounded hover:bg-slate-800 transition-colors"
                                title="Delete account"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Add / Edit Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl w-full max-w-2xl max-h-[92vh] overflow-y-auto p-6 shadow-2xl space-y-6">
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-2.5">
                  <PhoneCall className="w-5 h-5 text-emerald-400" />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {editingAccount ? `Edit SIP Account: ${editingAccount.name}` : "Add SIP Account"}
                      </h3>
                      <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Live System
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Configure your Asterisk / PBX credentials, media endpoints, and DID routing.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-900 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {formError && (
                <div className="p-3 bg-rose-950/70 border border-rose-800/80 rounded-xl text-rose-300 text-xs flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              <form onSubmit={handleSave} className="space-y-6 text-xs">
                {isSuperAdmin && (
                  <div className="bg-slate-950/80 border border-emerald-500/30 p-3 rounded-xl space-y-1">
                    <label className="block text-emerald-400 font-semibold flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5" />
                      Assigned Organization / Tenant <span className="text-rose-400">*</span>
                    </label>
                    <select
                      required
                      value={form.organization_id || ""}
                      onChange={(e) => setForm({ ...form, organization_id: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 font-medium focus:outline-none focus:border-emerald-500"
                    >
                      <option value="">-- Select Target Organization --</option>
                      {organizations.map((org) => (
                        <option key={org.id} value={org.id}>
                          {org.name} ({org.id.slice(0, 8)}...)
                        </option>
                      ))}
                    </select>
                    <p className="text-[11px] text-slate-400">
                      This SIP account will only be accessible and visible within the selected tenant's workspace.
                    </p>
                  </div>
                )}

                {/* 1. SIP Account & Authentication */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    1. SIP Account & Authentication
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-slate-400 font-medium mb-1">
                        SIP Account Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 09410697548"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500 font-mono text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 font-medium mb-1">
                        SIP Server
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 09410697548 or 49.249.142.147"
                        value={form.sip_server || ""}
                        onChange={(e) => setForm({ ...form, sip_server: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500 font-mono text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 font-medium mb-1">
                        SIP Username <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 09410697548"
                        value={form.username}
                        onChange={(e) => setForm({ ...form, username: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500 font-mono text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 font-medium mb-1">
                        SIP Login
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 09410697548"
                        value={form.sip_login || ""}
                        onChange={(e) => setForm({ ...form, sip_login: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500 font-mono text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 font-medium mb-1">
                        SIP Password {editingAccount && <span className="text-slate-500 font-normal">(Optional)</span>}
                      </label>
                      <input
                        type="password"
                        placeholder={editingAccount ? "Leave blank to keep existing" : "SIP Password"}
                        value={form.password || ""}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500 font-mono text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 font-medium mb-1">
                        SIP Display Name
                      </label>
                      <input
                        type="text"
                        placeholder="Zenza Agent"
                        value={form.display_name || ""}
                        onChange={(e) => setForm({ ...form, display_name: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500 text-xs"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-slate-400 font-medium mb-1">
                        SIP Extension
                      </label>
                      <input
                        type="text"
                        placeholder="2001"
                        value={form.extension || ""}
                        onChange={(e) => setForm({ ...form, extension: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500 font-mono text-xs"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-800/80 pt-4 space-y-3">
                  {/* 2. SIP Network & Proxy */}
                  <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    2. SIP Network & Proxy
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-slate-400 font-medium mb-1">
                        SIP Host <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="49.249.142.147"
                        value={form.host}
                        onChange={(e) => setForm({ ...form, host: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500 font-mono text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 font-medium mb-1">
                        SIP Domain
                      </label>
                      <input
                        type="text"
                        placeholder="49.249.142.147"
                        value={form.domain || ""}
                        onChange={(e) => setForm({ ...form, domain: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500 font-mono text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 font-medium mb-1">
                        SIP Proxy
                      </label>
                      <input
                        type="text"
                        placeholder="49.249.142.147"
                        value={form.outbound_proxy || ""}
                        onChange={(e) => setForm({ ...form, outbound_proxy: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500 font-mono text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 font-medium mb-1">
                        SIP Port
                      </label>
                      <input
                        type="number"
                        min={1}
                        max={65535}
                        placeholder="5060"
                        value={form.port}
                        onChange={(e) => setForm({ ...form, port: parseInt(e.target.value) || 5060 })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500 font-mono text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 font-medium mb-1">
                        SIP Public Address
                      </label>
                      <input
                        type="text"
                        placeholder="Auto"
                        value={form.sip_public_address || "Auto"}
                        onChange={(e) => setForm({ ...form, sip_public_address: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500 font-mono text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 font-medium mb-1">
                        SIP Local IP
                      </label>
                      <input
                        type="text"
                        placeholder="192.168.0.172"
                        value={form.local_ip || ""}
                        onChange={(e) => setForm({ ...form, local_ip: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500 font-mono text-xs"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-slate-400 font-medium mb-1">
                        SIP WebSocket URL
                      </label>
                      <input
                        type="text"
                        placeholder="wss://49.249.142.147:8089/ws"
                        value={form.sip_ws_url || ""}
                        onChange={(e) => setForm({ ...form, sip_ws_url: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500 font-mono text-xs"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-800/80 pt-4 space-y-3">
                  {/* 3. DID & Call Settings */}
                  <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    3. DID & Call Settings
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-slate-400 font-medium mb-1">
                        SIP DID Number
                      </label>
                      <input
                        type="text"
                        placeholder="09410697548"
                        value={form.caller_id || ""}
                        onChange={(e) => setForm({ ...form, caller_id: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500 font-mono text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 font-medium mb-1">
                        SIP Voicemail Number
                      </label>
                      <input
                        type="text"
                        placeholder="SIP Voicemail Number"
                        value={form.voicemail_number || ""}
                        onChange={(e) => setForm({ ...form, voicemail_number: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500 font-mono text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 font-medium mb-1">
                        SIP Dialing Prefix
                      </label>
                      <input
                        type="text"
                        placeholder="SIP Dialing Prefix"
                        value={form.dialing_prefix || ""}
                        onChange={(e) => setForm({ ...form, dialing_prefix: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500 font-mono text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 font-medium mb-1">
                        SIP Dial Plan
                      </label>
                      <input
                        type="text"
                        placeholder="SIP Dial Plan"
                        value={form.dial_plan || ""}
                        onChange={(e) => setForm({ ...form, dial_plan: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500 font-mono text-xs"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-800/80 pt-4 space-y-3">
                  {/* 4. Registration & Media */}
                  <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    4. Registration & Media
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-slate-400 font-medium mb-1">
                        SIP Register Refresh (seconds)
                      </label>
                      <input
                        type="number"
                        min={30}
                        max={7200}
                        placeholder="300"
                        value={form.refresh_interval || 300}
                        onChange={(e) => setForm({ ...form, refresh_interval: parseInt(e.target.value) || 300 })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500 font-mono text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 font-medium mb-1">
                        SIP Keep Alive (seconds)
                      </label>
                      <input
                        type="number"
                        min={5}
                        max={300}
                        placeholder="15"
                        value={form.keep_alive_interval || 15}
                        onChange={(e) => setForm({ ...form, keep_alive_interval: parseInt(e.target.value) || 15 })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500 font-mono text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 font-medium mb-1">
                        SIP RTP Port
                      </label>
                      <input
                        type="number"
                        min={1024}
                        max={65535}
                        placeholder="10000"
                        value={form.rtp_port || 10000}
                        onChange={(e) => setForm({ ...form, rtp_port: parseInt(e.target.value) || 10000 })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500 font-mono text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 font-medium mb-1">
                        SIP RTP IP
                      </label>
                      <input
                        type="text"
                        placeholder="210.18.176.97"
                        value={form.rtp_ip || ""}
                        onChange={(e) => setForm({ ...form, rtp_ip: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500 font-mono text-xs"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-slate-400 font-medium mb-1">
                        SIP Webhook Base URL
                      </label>
                      <input
                        type="text"
                        placeholder="https://your-tunnel.trycloudflare.com"
                        value={form.webhook_base_url || ""}
                        onChange={(e) => setForm({ ...form, webhook_base_url: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500 font-mono text-xs"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-800/80 pt-4 space-y-3">
                  {/* 5. Additional DIDs */}
                  <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    Additional DIDs
                  </h4>
                  <div className="space-y-2">
                    {(form.additional_dids || []).map((didNum, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <input
                          type="text"
                          placeholder="e.g. 09410697548"
                          value={didNum}
                          onChange={(e) => handleUpdateDidRow(idx, e.target.value)}
                          className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500 font-mono text-xs"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveDidRow(idx)}
                          className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-rose-400 hover:border-rose-800/60 transition-colors"
                          title="Remove DID"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={handleAddDidRow}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400 hover:bg-slate-800 font-semibold text-xs transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Add DID
                    </button>
                  </div>
                </div>

                <div className="border-t border-slate-800/80 pt-4 space-y-3">
                  {/* 6. Transport & Advanced Settings */}
                  <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    Transport & Advanced Settings
                  </h4>
                  <div>
                    <label className="block text-slate-400 font-medium mb-1.5">
                      SIP Transport
                    </label>
                    <div className="flex items-center gap-5">
                      {(["udp", "tcp", "tls"] as const).map((proto) => (
                        <label key={proto} className="inline-flex items-center gap-2 cursor-pointer text-slate-300 font-mono text-xs">
                          <input
                            type="radio"
                            name="sip-transport"
                            value={proto}
                            checked={form.transport === proto}
                            onChange={(e) => setForm({ ...form, transport: e.target.value })}
                            className="text-emerald-500 focus:ring-emerald-500 bg-slate-900 border-slate-800"
                          />
                          <span className="uppercase">{proto}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    {[
                      { key: "hide_caller_id", label: "SIP Hide Caller ID" },
                      { key: "media_encryption", label: "SIP Media Encryption" },
                      { key: "publish_presence", label: "SIP Publish Presence" },
                      { key: "allow_ip_rewrite", label: "SIP Allow IP Rewrite" },
                      { key: "ice", label: "SIP ICE" },
                      { key: "disable_session_timers", label: "SIP Disable Session Timers" },
                      { key: "use_auth_user_in_from", label: "Use Auth Username in From URI (Asterisk / PBX Trunk Compatibility)" },
                    ].map(({ key, label }) => (
                      <label key={key} className="flex items-center gap-2.5 cursor-pointer text-slate-300 text-xs">
                        <input
                          type="checkbox"
                          checked={Boolean((form as any)[key])}
                          onChange={(e) => setForm({ ...form, [key]: e.target.checked })}
                          className="rounded bg-slate-900 border-slate-800 text-emerald-500 focus:ring-emerald-500 w-4 h-4 cursor-pointer"
                        />
                        <span>{label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-slate-800/80">
                  <input
                    type="checkbox"
                    id="account-enabled-checkbox"
                    checked={form.enabled}
                    onChange={(e) => setForm({ ...form, enabled: e.target.checked })}
                    className="rounded bg-slate-900 border-slate-800 text-emerald-500 focus:ring-emerald-500 w-4 h-4 cursor-pointer"
                  />
                  <label htmlFor="account-enabled-checkbox" className="text-slate-300 text-xs cursor-pointer">
                    Enable this account immediately for campaign routing
                  </label>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <div className="text-[11px] text-slate-500 font-mono">
                    {editingAccount ? `ID: ${editingAccount.id.slice(0, 8)}...` : "New SIP Trunk"}
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={saving}
                      className="px-5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold inline-flex items-center gap-2 transition-all shadow-lg shadow-emerald-500/10 cursor-pointer"
                    >
                      {saving && <RefreshCw className="w-3.5 h-3.5 animate-spin" />}
                      {editingAccount ? "Save Changes" : "Save SIP Account"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Live Connectivity Test Modal */}
        {showTestModal && testTargetAccount && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-md p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  Live Socket Probe: {testTargetAccount.name}
                </h3>
                <button onClick={() => setShowTestModal(false)} className="text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800/80 font-mono space-y-1">
                  <div>Target: {testTargetAccount.host}:{testTargetAccount.port}</div>
                  <div>Transport: {testTargetAccount.transport.toUpperCase()}</div>
                  <div>Username: {testTargetAccount.username}</div>
                </div>

                {testingId ? (
                  <div className="py-6 text-center text-slate-400 space-y-2">
                    <RefreshCw className="w-6 h-6 animate-spin text-cyan-400 mx-auto" />
                    <div>Probing DNS resolution and socket reachability...</div>
                  </div>
                ) : testResult ? (
                  <div className={`p-4 rounded-xl border space-y-2 ${
                    testResult.reachable
                      ? "bg-emerald-950/40 border-emerald-800 text-emerald-300"
                      : "bg-rose-950/40 border-rose-800 text-rose-300"
                  }`}>
                    <div className="flex items-center gap-2 font-bold text-sm">
                      {testResult.reachable ? (
                        <>
                          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                          <span>Socket / Host Reachable</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-5 h-5 text-rose-400" />
                          <span>Host Unreachable</span>
                        </>
                      )}
                    </div>
                    {testResult.reachable && (testTargetAccount.registration_status === "auth_failed" || testTargetAccount.last_error_message) && (
                      <div className="p-2.5 rounded-lg bg-rose-950/70 border border-rose-800 text-rose-200 text-xs flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold block">Registration Authentication Error</span>
                          <span className="text-[11px] text-rose-300">
                            {testTargetAccount.last_error_message || "Server socket is reachable, but SIP registration rejected credentials (SIP 401). Verify username and password."}
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="text-[11px] space-y-0.5 font-mono">
                      <div>Probe Type: {testResult.check_type || "SIP_OPTIONS"}</div>
                      {testResult.sip_status_code && (
                        <div className="text-emerald-400 font-semibold">
                          SIP Status: SIP/2.0 {testResult.sip_status_code} {testResult.sip_status_reason || ""}
                        </div>
                      )}
                      <div>Latency: {testResult.latency_ms} ms</div>
                      {testResult.dns_resolved_ip && <div>Resolved IP: {testResult.dns_resolved_ip}</div>}
                      {testResult.error && (
                        <div className="text-rose-400 mt-1 font-sans">{testResult.error}</div>
                      )}
                      {testResult.suggested_action && (
                        <div className="text-slate-300 mt-1 font-sans">
                          <span className="text-slate-400 font-medium">Action: </span>
                          {testResult.suggested_action}
                        </div>
                      )}
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                <button
                  onClick={() => {
                    setShowTestModal(false);
                    handleRegister(testTargetAccount);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-800 text-emerald-300 hover:bg-emerald-900 text-xs flex items-center gap-1.5 font-medium transition-colors"
                >
                  <Radio className="w-3.5 h-3.5" />
                  Test SIP Registration
                </button>
                <button
                  onClick={() => setShowTestModal(false)}
                  className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Live SIP Registration Diagnostic Modal */}
        {showRegisterModal && registerTargetAccount && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-lg p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Radio className="w-5 h-5 text-emerald-400" />
                  SIP Registration: {registerTargetAccount.name}
                </h3>
                <button onClick={() => setShowRegisterModal(false)} className="text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800/80 font-mono space-y-1">
                  <div>Registrar Host: {registerTargetAccount.host}:{registerTargetAccount.port}</div>
                  <div>Transport: {registerTargetAccount.transport.toUpperCase()}</div>
                  <div>Username: {registerTargetAccount.username}</div>
                  {registerTargetAccount.auth_username && <div>Auth Username: {registerTargetAccount.auth_username}</div>}
                </div>

                {registeringId ? (
                  <div className="py-8 text-center text-slate-400 space-y-3">
                    <RefreshCw className="w-8 h-8 animate-spin text-emerald-400 mx-auto" />
                    <div className="text-sm font-medium text-slate-200">Executing RFC 3261 SIP Registration...</div>
                    <p className="text-xs text-slate-500">Sending REGISTER packet, processing digest challenge, and verifying response.</p>
                  </div>
                ) : registerResult ? (
                  <div className={`p-4 rounded-xl border space-y-3 ${
                    registerResult.is_registered
                      ? "bg-emerald-950/40 border-emerald-800 text-emerald-200"
                      : "bg-rose-950/40 border-rose-800 text-rose-200"
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 font-bold text-sm">
                        {registerResult.is_registered ? (
                          <>
                            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                            <span>Registration Succeeded</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-5 h-5 text-rose-400" />
                            <span>Registration Failed</span>
                          </>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5">
                        {registerResult.sip_status_code && (
                          <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300 font-mono text-[10px] font-semibold">
                            SIP {registerResult.sip_status_code}
                          </span>
                        )}
                        {registerResult.error_code && (
                          <span className="px-2 py-0.5 rounded bg-slate-900/80 border border-slate-800 text-slate-400 font-mono text-[10px]">
                            {registerResult.error_code}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-xs leading-relaxed">
                      <p className="font-sans text-slate-100">
                        {registerResult.message || registerResult.last_error}
                      </p>
                    </div>

                    {registerResult.suggested_action && (
                      <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800/90 text-xs">
                        <span className="font-semibold text-emerald-400 block mb-0.5">Suggested Action:</span>
                        <span className="text-slate-300">{registerResult.suggested_action}</span>
                      </div>
                    )}

                    <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 font-mono">
                      <span>Status: {registerResult.status}</span>
                      <span>Checked: {new Date(registerResult.last_checked_at || registerResult.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                <div>
                  {registerResult && !registerResult.is_registered && registerResult.retryable && (
                    <button
                      onClick={() => handleRegister(registerTargetAccount)}
                      disabled={registeringId === registerTargetAccount.id}
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
                    >
                      <RefreshCw className={`w-3 h-3 ${registeringId === registerTargetAccount.id ? "animate-spin" : ""}`} />
                      Retry Registration
                    </button>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setShowRegisterModal(false);
                      handleTestConnection(registerTargetAccount);
                    }}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs inline-flex items-center gap-1"
                  >
                    <Zap className="w-3 h-3" /> Test Socket Reachability
                  </button>
                  <button
                    onClick={() => setShowRegisterModal(false)}
                    className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
