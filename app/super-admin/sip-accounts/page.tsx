"use client";

import React, { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import {
  Server,
  Building2,
  RefreshCw,
  Search,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowLeft,
  Shield,
  Zap,
} from "lucide-react";
import { sipAccountService, SIPAccount } from "@/lib/services/sip-account.service";

export default function SuperAdminSIPAccountsPage() {
  const [accounts, setAccounts] = useState<SIPAccount[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [orgFilter, setOrgFilter] = useState("all");

  const loadData = async () => {
    try {
      setError(null);
      const data = await sipAccountService.getSuperAdminOverview();
      setAccounts(data);
    } catch (err: any) {
      console.error("Super Admin overview error:", err);
      setError(err?.message || "Failed to load cross-tenant SIP overview");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    loadData();
  };

  const organizations = useMemo(() => {
    const orgs = new Set<string>();
    accounts.forEach((a) => {
      if (a.organization_name) orgs.add(a.organization_name);
    });
    return Array.from(orgs);
  }, [accounts]);

  const filtered = useMemo(() => {
    return accounts.filter((a) => {
      const matchSearch =
        a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.host.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (a.organization_name || "").toLowerCase().includes(searchQuery.toLowerCase());
      const matchOrg = orgFilter === "all" || a.organization_name === orgFilter;
      return matchSearch && matchOrg;
    });
  }, [accounts, searchQuery, orgFilter]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="flex items-center gap-2 text-sm text-slate-400 mb-1">
              <Link href="/super-admin/dashboard" className="hover:text-emerald-400 flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" /> Super Admin Portal
              </Link>
              <span>/</span>
              <span className="text-slate-200">System Telephony</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
              <Server className="w-6 h-6 text-purple-400" />
              Multi-Tenant SIP Operations Monitor
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              Cross-tenant monitoring of SIP endpoints, registration health, and Asterisk routing across all organizations.
            </p>
          </div>
          <button
            onClick={handleRefresh}
            disabled={refreshing}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? "animate-spin text-purple-400" : ""}`} />
            Refresh
          </button>
        </div>

        {error && (
          <div className="p-3.5 bg-rose-950/60 border border-rose-800/80 rounded-xl text-rose-300 text-sm">
            {error}
          </div>
        )}

        {/* Overview Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-slate-900/70 border border-slate-800 rounded-xl">
            <div className="text-xs font-medium text-slate-400">Total Accounts (All Orgs)</div>
            <div className="text-2xl font-bold text-white mt-1">{accounts.length}</div>
          </div>
          <div className="p-4 bg-slate-900/70 border border-slate-800 rounded-xl">
            <div className="text-xs font-medium text-slate-400">Active Organizations</div>
            <div className="text-2xl font-bold text-emerald-400 mt-1">{organizations.length}</div>
          </div>
          <div className="p-4 bg-slate-900/70 border border-slate-800 rounded-xl">
            <div className="text-xs font-medium text-slate-400">Healthy Connections</div>
            <div className="text-2xl font-bold text-cyan-400 mt-1">
              {accounts.filter((a) => a.last_health_status === "healthy" || a.registration_status === "registered").length}
            </div>
          </div>
          <div className="p-4 bg-slate-900/70 border border-slate-800 rounded-xl">
            <div className="text-xs font-medium text-slate-400">Failed / Unreachable</div>
            <div className="text-2xl font-bold text-rose-400 mt-1">
              {accounts.filter((a) => a.last_health_status === "unreachable" || a.registration_status === "unreachable").length}
            </div>
          </div>
        </div>

        {/* Filter bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-900/40 p-3 rounded-xl border border-slate-800/60">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Filter by account, host, or organization name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">Organization:</span>
            <select
              value={orgFilter}
              onChange={(e) => setOrgFilter(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded-lg text-xs py-1.5 px-2.5 text-slate-300 focus:outline-none focus:border-purple-500"
            >
              <option value="all">All Organizations</option>
              {organizations.map((org) => (
                <option key={org} value={org}>
                  {org}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
          {loading ? (
            <div className="p-12 text-center text-slate-400">
              <RefreshCw className="w-6 h-6 animate-spin text-purple-400 mx-auto mb-2" />
              Loading system SIP overview...
            </div>
          ) : filtered.length === 0 ? (
            <div className="p-12 text-center text-slate-400">
              <Server className="w-10 h-10 text-slate-600 mx-auto mb-3" />
              <div className="text-white font-medium">No SIP accounts found across tenants</div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-950/60 text-slate-400 uppercase tracking-wider text-[10px]">
                    <th className="py-3 px-4">Organization</th>
                    <th className="py-3 px-4">Account Name</th>
                    <th className="py-3 px-4">Host / Server</th>
                    <th className="py-3 px-4">Direction</th>
                    <th className="py-3 px-4">Enabled</th>
                    <th className="py-3 px-4">Registration / Health</th>
                    <th className="py-3 px-4">Assigned Campaigns</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {filtered.map((acc) => {
                    const isHealthy =
                      acc.last_health_status === "healthy" ||
                      acc.registration_status === "registered";
                    const isUnreachable =
                      acc.last_health_status === "unreachable" ||
                      acc.registration_status === "unreachable";

                    return (
                      <tr key={acc.id} className="hover:bg-slate-850/50 transition-colors">
                        <td className="py-3 px-4 font-semibold text-purple-300">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-3.5 h-3.5 text-purple-400" />
                            <span>{acc.organization_name || "Unknown"}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 font-semibold text-white">
                          {acc.name}
                          {acc.caller_id && (
                            <span className="ml-2 text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded font-mono">
                              CLI: {acc.caller_id}
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4 font-mono text-slate-300">
                          {acc.host}:{acc.port}
                          <span className="ml-1 text-[9px] uppercase px-1 py-0.2 rounded bg-slate-800 text-slate-400">
                            {acc.transport}
                          </span>
                        </td>
                        <td className="py-3 px-4 capitalize">{acc.direction}</td>
                        <td className="py-3 px-4">
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                            acc.enabled
                              ? "bg-emerald-950/80 text-emerald-300 border border-emerald-800"
                              : "bg-slate-800 text-slate-400 border border-slate-700"
                          }`}>
                            {acc.enabled ? "Enabled" : "Disabled"}
                          </span>
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
                                <span className="inline-flex items-center gap-1 text-rose-400 font-semibold px-2 py-0.5 rounded bg-rose-950/60 border border-rose-800/60 text-[10px]" title={acc.last_error_message || "Auth Failed"}>
                                  <XCircle className="w-3 h-3" />
                                  Auth Failed
                                </span>
                              ) : acc.registration_status === "dns_error" ? (
                                <span className="inline-flex items-center gap-1 text-rose-400 font-semibold px-2 py-0.5 rounded bg-rose-950/60 border border-rose-800/60 text-[10px]" title={acc.last_error_message || "DNS Error"}>
                                  <AlertTriangle className="w-3 h-3" />
                                  DNS Error
                                </span>
                              ) : acc.registration_status === "network_error" ? (
                                <span className="inline-flex items-center gap-1 text-amber-400 font-semibold px-2 py-0.5 rounded bg-amber-950/60 border border-amber-800/60 text-[10px]" title={acc.last_error_message || "Network Error"}>
                                  <AlertTriangle className="w-3 h-3" />
                                  Network Error
                                </span>
                              ) : acc.registration_status === "not_required" || acc.registration_status === "outbound_ready" ? (
                                <span className="inline-flex items-center gap-1 text-cyan-300 font-medium px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/60 text-[10px]">
                                  Outbound Ready
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 text-slate-400 text-[10px]">
                                  {acc.registration_status || "Unregistered"}
                                </span>
                              )}

                              {acc.sip_status_code ? (
                                <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 font-mono text-[9px] font-semibold">
                                  SIP {acc.sip_status_code}
                                </span>
                              ) : null}

                              {acc.last_health_latency_ms !== null && acc.last_health_latency_ms !== undefined && (
                                <span className="text-[10px] text-slate-400 font-mono">
                                  ({acc.last_health_latency_ms}ms)
                                </span>
                              )}
                            </div>

                            {acc.registration_status !== "registered" && (acc.last_error_message || acc.registration_diagnostics?.message) && (
                              <p className="text-[11px] text-rose-300/90 leading-snug line-clamp-2" title={acc.registration_diagnostics?.message || acc.last_error_message || ""}>
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
                          <span className="text-slate-300 font-mono">
                            {acc.assigned_campaigns_count || 0}
                          </span>
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
    </div>
  );
}
