"use client";

import React, { useEffect, useState } from "react";
import { sipAccountService, SIPAccountOut } from "@/lib/services/sip-account.service";
import { Server, ShieldCheck, AlertCircle, RefreshCw, Activity, CheckCircle2, XCircle, Info, ExternalLink } from "lucide-react";
import Link from "next/link";

interface SipAccountAssignmentCardProps {
  campaignName: string;
  agentType: "AI" | "VOICE";
  direction?: "OUTBOUND" | "INBOUND";
  selectedSipAccountId: string;
  onSelectSipAccount: (id: string, account?: SIPAccountOut) => void;
  required?: boolean;
}

export function SipAccountAssignmentCard({
  campaignName,
  agentType,
  direction = "OUTBOUND",
  selectedSipAccountId,
  onSelectSipAccount,
  required = true,
}: SipAccountAssignmentCardProps) {
  const [accounts, setAccounts] = useState<SIPAccountOut[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [testingId, setTestingId] = useState<string | null>(null);
  const [testResult, setTestResult] = useState<{ id: string; success: boolean; latency?: number; message: string } | null>(null);

  const fetchAccounts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await sipAccountService.list();
      setAccounts(data);

      // If no account currently selected and accounts exist, select the first eligible one
      if (!selectedSipAccountId && data.length > 0) {
        const firstEligible = data.find((a) => a.enabled && (a.direction.toLowerCase() === "both" || a.direction.toLowerCase() === direction.toLowerCase())) || data[0];
        if (firstEligible) {
          onSelectSipAccount(firstEligible.id, firstEligible);
        }
      }
    } catch (err: any) {
      setError(err.message || "Failed to load organization SIP accounts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  const handleTest = async (account: SIPAccountOut, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setTestingId(account.id);
    setTestResult(null);
    try {
      const res = await sipAccountService.testConnection(account.id);
      setTestResult({
        id: account.id,
        success: res.reachable,
        latency: res.latency_ms,
        message: res.reachable
          ? `Reachable (${res.latency_ms}ms)`
          : (res.error || "Connection test failed"),
      });
      // Refresh list to update health status
      const updated = await sipAccountService.list();
      setAccounts(updated);
    } catch (err: any) {
      setTestResult({
        id: account.id,
        success: false,
        message: err.message || "Test failed",
      });
    } finally {
      setTestingId(null);
    }
  };

  const selectedAccount = accounts.find((a) => a.id === selectedSipAccountId);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
            <Server className="w-4 h-4 text-indigo-600" />
            Assign SIP Account
            {required && <span className="text-rose-500">*</span>}
          </label>
          <p className="text-[12px] text-gray-500 mt-0.5">
            Select the dedicated SIP trunk/account for call routing and carrier delivery.
          </p>
        </div>
        <button
          type="button"
          onClick={fetchAccounts}
          disabled={loading}
          className="text-xs text-indigo-600 hover:text-indigo-800 flex items-center gap-1 font-semibold p-1 hover:bg-indigo-50 rounded"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
          Refresh
        </button>
      </div>

      {loading ? (
        <div className="p-6 border border-slate-200 rounded-xl bg-slate-50 flex items-center justify-center gap-2 text-sm text-slate-500">
          <RefreshCw className="w-4 h-4 animate-spin text-indigo-600" />
          Loading organization SIP accounts...
        </div>
      ) : error ? (
        <div className="p-4 border border-rose-200 bg-rose-50 rounded-xl text-rose-700 text-sm flex items-start gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <p>{error}</p>
        </div>
      ) : accounts.length === 0 ? (
        <div className="p-5 border border-dashed border-amber-300 bg-amber-50/70 rounded-xl text-amber-900 text-sm space-y-2">
          <div className="flex items-center gap-2 font-bold">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            No SIP Accounts Configured
          </div>
          <p className="text-xs text-amber-800 leading-relaxed">
            Your organization currently does not have any SIP accounts configured. Please add your Asterisk / carrier SIP credentials in Admin Settings.
          </p>
          <div>
            <Link
              href="/admin/sip-accounts"
              target="_blank"
              className="inline-flex items-center gap-1 text-xs font-bold text-indigo-700 bg-white px-3 py-1.5 rounded-lg border border-indigo-200 hover:bg-indigo-50 shadow-sm"
            >
              Configure SIP Accounts <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-2.5">
          {accounts.map((acc) => {
            const isSelected = acc.id === selectedSipAccountId;
            const regStatus = (acc.registration_status || "").toLowerCase();
            const isLiveRegistered = regStatus === "registered";
            const isOutboundReady = regStatus === "outbound_ready" || regStatus === "peer_active";
            const isDisabled = !acc.enabled || regStatus === "disabled";
            const isEligible = acc.enabled && (acc.direction?.toLowerCase() === "both" || acc.direction?.toLowerCase() === direction.toLowerCase());

            return (
              <div
                key={acc.id}
                onClick={() => {
                  if (acc.enabled) {
                    onSelectSipAccount(acc.id, acc);
                  }
                }}
                className={`relative flex items-center justify-between p-3.5 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? "border-indigo-600 bg-indigo-50/40 shadow-sm ring-1 ring-indigo-600/20"
                    : acc.enabled
                    ? "border-gray-200 hover:border-gray-300 hover:bg-slate-50/60 bg-white"
                    : "border-gray-200 bg-gray-50/80 opacity-60 cursor-not-allowed"
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="assigned_sip_account"
                    value={acc.id}
                    checked={isSelected}
                    disabled={!acc.enabled}
                    onChange={() => onSelectSipAccount(acc.id, acc)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 cursor-pointer"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-gray-900">{acc.name}</span>
                      <span className="text-xs text-gray-500">—</span>
                      {isDisabled ? (
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full">
                          Disabled
                        </span>
                      ) : isLiveRegistered ? (
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                          Live Registered
                        </span>
                      ) : isOutboundReady ? (
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-sky-100 text-sky-800 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                          Outbound Ready (Peer Active)
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                          Unregistered
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                      <span>Host: <strong className="font-mono text-gray-700">{acc.host}:{acc.port}</strong></span>
                      <span>Transport: <span className="font-semibold text-gray-700">{acc.transport}</span></span>
                      {acc.caller_id && (
                        <span>Caller ID: <strong className="text-gray-700">{acc.caller_id}</strong></span>
                      )}
                      {acc.last_health_latency_ms !== null && acc.last_health_latency_ms !== undefined && (
                        <span className="text-emerald-600 flex items-center gap-0.5">
                          <Activity className="w-3 h-3" /> {acc.last_health_latency_ms}ms
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => handleTest(acc, e)}
                    disabled={testingId === acc.id}
                    className="text-xs text-slate-600 hover:text-indigo-600 bg-white hover:bg-indigo-50 border border-slate-200 px-2.5 py-1 rounded-lg font-medium shadow-2xs flex items-center gap-1 transition-all"
                    title="Test socket connectivity"
                  >
                    <Activity className={`w-3.5 h-3.5 ${testingId === acc.id ? "animate-spin text-indigo-600" : ""}`} />
                    {testingId === acc.id ? "Probing..." : "Test"}
                  </button>
                </div>
              </div>
            );
          })}

          <p className="text-[11px] text-gray-500 italic pt-0.5">
            Options loaded dynamically from your authenticated organization&apos;s SIP configuration backend.
          </p>

          {testResult && (
            <div
              className={`p-2.5 rounded-lg text-xs flex items-center gap-2 font-medium border ${
                testResult.success
                  ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                  : "bg-rose-50 border-rose-200 text-rose-800"
              }`}
            >
              {testResult.success ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              ) : (
                <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
              )}
              <span>{testResult.message}</span>
            </div>
          )}
        </div>
      )}

      {/* Selected configuration preview matching mockup (Image 2) */}
      <div className="mt-4 p-4 rounded-xl bg-slate-900 text-white shadow-md border border-slate-800">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 pb-2 border-b border-slate-800">
          Selected configuration preview
        </h4>
        <div className="space-y-1.5 text-xs">
          <div className="flex justify-between items-center py-0.5">
            <span className="text-slate-400">Campaign:</span>
            <span className="font-semibold text-slate-100">{campaignName || "New Campaign"}</span>
          </div>
          <div className="flex justify-between items-center py-0.5">
            <span className="text-slate-400">Agent:</span>
            <span className="font-semibold text-slate-100">
              {agentType === "VOICE" ? "Voice Agent" : "AI Agent"}
            </span>
          </div>
          <div className="flex justify-between items-center py-0.5">
            <span className="text-slate-400">Direction:</span>
            <span className="font-semibold text-slate-100">
              {direction === "OUTBOUND" ? "Outbound" : "Inbound"}
            </span>
          </div>
          <div className="flex justify-between items-center py-0.5">
            <span className="text-slate-400">SIP:</span>
            <span className={`font-semibold ${selectedAccount ? "text-emerald-400" : "text-amber-400"}`}>
              {selectedAccount ? selectedAccount.name : "None Selected"}
            </span>
          </div>
          {selectedAccount && (
            <div className="flex justify-between items-center py-0.5 text-[11px] text-slate-400 border-t border-slate-800/80 pt-1 mt-1">
              <span>Endpoint:</span>
              <span className="font-mono text-slate-300">
                {selectedAccount.host}:{selectedAccount.port} ({selectedAccount.transport})
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
