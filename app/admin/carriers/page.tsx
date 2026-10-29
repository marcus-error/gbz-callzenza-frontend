"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import {
  ArrowLeft,
  Network,
  Server,
  PhoneCall,
  ShieldCheck,
  Activity,
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
  Layers,
  ArrowRightLeft,
  Sliders,
  Check,
  X,
  ExternalLink,
} from "lucide-react";
import {
  carrierService,
  SIPCarrier,
  SIPTrunk,
  DIDNumber,
  CarrierRoutingPolicy,
  ConnectionTestResult,
} from "@/lib/services/carrier.service";

export default function CarriersPage() {
  const [activeTab, setActiveTab] = useState<"carriers" | "trunks" | "dids" | "failover">("carriers");
  const [carriers, setCarriers] = useState<SIPCarrier[]>([]);
  const [trunks, setTrunks] = useState<SIPTrunk[]>([]);
  const [dids, setDids] = useState<DIDNumber[]>([]);
  const [policy, setPolicy] = useState<CarrierRoutingPolicy>({
    primary_carrier_id: "",
    secondary_carrier_id: "",
    max_retry_attempts: 2,
    retry_on_status_codes: ["503", "486", "408", "TIMEOUT", "CONGESTION"],
  });

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Test Connection State
  const [testingId, setTestingId] = useState<string | null>(null);
  const [testResult, setTestResult] = useState<ConnectionTestResult | null>(null);
  const [showTestModal, setShowTestModal] = useState(false);

  // Carrier Modal State
  const [showCarrierModal, setShowCarrierModal] = useState(false);
  const [editingCarrier, setEditingCarrier] = useState<SIPCarrier | null>(null);
  const [carrierForm, setCarrierForm] = useState({
    name: "",
    provider_type: "ASTERISK",
    sip_host: "",
    sip_port: 5060,
    transport: "UDP",
    auth_type: "CREDENTIAL",
    username: "",
    password: "",
    inbound_enabled: true,
    outbound_enabled: true,
    max_channels: 30,
    status: "ACTIVE",
  });

  // Trunk Modal State
  const [showTrunkModal, setShowTrunkModal] = useState(false);
  const [editingTrunk, setEditingTrunk] = useState<SIPTrunk | null>(null);
  const [trunkForm, setTrunkForm] = useState({
    carrier_id: "",
    name: "",
    direction: "BIDIRECTIONAL",
    max_concurrency: 10,
    priority: 1,
    proxy_server: "",
    register_enabled: false,
    status: "ACTIVE",
  });

  // DID Modal State
  const [showDidModal, setShowDidModal] = useState(false);
  const [editingDid, setEditingDid] = useState<DIDNumber | null>(null);
  const [didForm, setDidForm] = useState({
    phone_number: "",
    name: "",
    carrier_id: "",
    trunk_id: "",
    routing_type: "AI_AGENT",
    is_outbound_caller_id: true,
    status: "ACTIVE",
  });

  // Failover save state
  const [savingPolicy, setSavingPolicy] = useState(false);

  const fetchData = async () => {
    try {
      setError(null);
      const [cList, tList, dList, pData] = await Promise.all([
        carrierService.getCarriers().catch(() => []),
        carrierService.getTrunks().catch(() => []),
        carrierService.getDIDs().catch(() => []),
        carrierService.getRoutingPolicy().catch(() => null),
      ]);
      setCarriers(cList || []);
      setTrunks(tList || []);
      setDids(dList || []);
      if (pData) {
        setPolicy({
          primary_carrier_id: pData.primary_carrier_id || (cList[0]?.id ?? ""),
          secondary_carrier_id: pData.secondary_carrier_id || (cList[1]?.id ?? ""),
          max_retry_attempts: pData.max_retry_attempts || 2,
          retry_on_status_codes: pData.retry_on_status_codes || ["503", "486", "408", "TIMEOUT", "CONGESTION"],
        });
      }
    } catch (err: any) {
      setError(err?.message || "Failed to load SIP carrier infrastructure data.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  const showToast = (msg: string) => {
    setSuccessMessage(msg);
    setTimeout(() => setSuccessMessage(null), 3500);
  };

  // Test Carrier Connection
  const handleTestCarrier = async (carrierId: string) => {
    setTestingId(carrierId);
    setTestResult(null);
    try {
      const res = await carrierService.testCarrierConnection(carrierId);
      setTestResult(res);
      setShowTestModal(true);
      // Refresh carrier list to show updated status/latency
      fetchData();
    } catch (err: any) {
      setTestResult({
        success: false,
        sip_host: "Unknown",
        status: "UNREACHABLE",
        latency_ms: 0,
        error: err?.message || "Failed to initiate socket probe",
      });
      setShowTestModal(true);
    } finally {
      setTestingId(null);
    }
  };

  // Test Trunk Connection
  const handleTestTrunk = async (trunkId: string) => {
    setTestingId(trunkId);
    setTestResult(null);
    try {
      const res = await carrierService.testTrunkConnection(trunkId);
      setTestResult(res);
      setShowTestModal(true);
      fetchData();
    } catch (err: any) {
      setTestResult({
        success: false,
        sip_host: "Unknown",
        status: "UNREACHABLE",
        latency_ms: 0,
        error: err?.message || "Failed to initiate trunk test",
      });
      setShowTestModal(true);
    } finally {
      setTestingId(null);
    }
  };

  // Open Carrier Modal (Create or Edit)
  const openCarrierModal = (carrier?: SIPCarrier) => {
    if (carrier) {
      setEditingCarrier(carrier);
      setCarrierForm({
        name: carrier.name,
        provider_type: carrier.provider_type,
        sip_host: carrier.sip_host,
        sip_port: carrier.sip_port,
        transport: carrier.transport,
        auth_type: carrier.auth_type,
        username: carrier.username || "",
        password: carrier.has_password ? "••••••••" : "",
        inbound_enabled: carrier.inbound_enabled,
        outbound_enabled: carrier.outbound_enabled,
        max_channels: carrier.max_channels,
        status: carrier.status,
      });
    } else {
      setEditingCarrier(null);
      setCarrierForm({
        name: "",
        provider_type: "ASTERISK",
        sip_host: "",
        sip_port: 5060,
        transport: "UDP",
        auth_type: "CREDENTIAL",
        username: "",
        password: "",
        inbound_enabled: true,
        outbound_enabled: true,
        max_channels: 30,
        status: "ACTIVE",
      });
    }
    setShowCarrierModal(true);
  };

  // Save Carrier
  const handleSaveCarrier = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingCarrier) {
        await carrierService.updateCarrier(editingCarrier.id, carrierForm);
        showToast(`Carrier '${carrierForm.name}' updated successfully!`);
      } else {
        await carrierService.createCarrier(carrierForm);
        showToast(`Carrier '${carrierForm.name}' added with primary trunk!`);
      }
      setShowCarrierModal(false);
      fetchData();
    } catch (err: any) {
      setError(err?.message || "Failed to save carrier configuration.");
    }
  };

  // Delete Carrier
  const handleDeleteCarrier = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to remove carrier '${name}'? This will also remove associated trunks.`)) return;
    try {
      await carrierService.deleteCarrier(id);
      showToast(`Carrier '${name}' removed successfully.`);
      fetchData();
    } catch (err: any) {
      setError(err?.message || "Failed to delete carrier.");
    }
  };

  // Quick Toggle Status
  const handleToggleCarrierStatus = async (carrier: SIPCarrier) => {
    const nextStatus = carrier.status === "ACTIVE" ? "INACTIVE" : "ACTIVE";
    try {
      await carrierService.toggleCarrierStatus(carrier.id, nextStatus);
      showToast(`Carrier '${carrier.name}' status set to ${nextStatus}`);
      fetchData();
    } catch (err: any) {
      setError(err?.message || "Failed to update carrier status.");
    }
  };

  // Open Trunk Modal
  const openTrunkModal = (trunk?: SIPTrunk) => {
    if (trunk) {
      setEditingTrunk(trunk);
      setTrunkForm({
        carrier_id: trunk.carrier_id,
        name: trunk.name,
        direction: trunk.direction,
        max_concurrency: trunk.max_concurrency,
        priority: trunk.priority,
        proxy_server: trunk.proxy_server || "",
        register_enabled: trunk.register_enabled,
        status: trunk.status,
      });
    } else {
      setEditingTrunk(null);
      setTrunkForm({
        carrier_id: carriers[0]?.id || "",
        name: "",
        direction: "BIDIRECTIONAL",
        max_concurrency: 10,
        priority: 1,
        proxy_server: "",
        register_enabled: false,
        status: "ACTIVE",
      });
    }
    setShowTrunkModal(true);
  };

  // Save Trunk
  const handleSaveTrunk = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingTrunk) {
        await carrierService.updateTrunk(editingTrunk.id, trunkForm);
        showToast(`Trunk '${trunkForm.name}' updated successfully!`);
      } else {
        await carrierService.createTrunk(trunkForm);
        showToast(`Trunk '${trunkForm.name}' created!`);
      }
      setShowTrunkModal(false);
      fetchData();
    } catch (err: any) {
      setError(err?.message || "Failed to save trunk.");
    }
  };

  // Delete Trunk
  const handleDeleteTrunk = async (id: string, name: string) => {
    if (!confirm(`Delete trunk '${name}'?`)) return;
    try {
      await carrierService.deleteTrunk(id);
      showToast(`Trunk '${name}' deleted.`);
      fetchData();
    } catch (err: any) {
      setError(err?.message || "Failed to delete trunk.");
    }
  };

  // Open DID Modal
  const openDidModal = (did?: DIDNumber) => {
    if (did) {
      setEditingDid(did);
      setDidForm({
        phone_number: did.phone_number,
        name: did.name || "",
        carrier_id: did.carrier_id || "",
        trunk_id: did.trunk_id || "",
        routing_type: did.routing_type,
        is_outbound_caller_id: did.is_outbound_caller_id,
        status: did.status,
      });
    } else {
      setEditingDid(null);
      setDidForm({
        phone_number: "",
        name: "",
        carrier_id: carriers[0]?.id || "",
        trunk_id: trunks[0]?.id || "",
        routing_type: "AI_AGENT",
        is_outbound_caller_id: true,
        status: "ACTIVE",
      });
    }
    setShowDidModal(true);
  };

  // Save DID
  const handleSaveDid = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingDid) {
        await carrierService.updateDID(editingDid.id, didForm);
        showToast(`DID '${didForm.phone_number}' updated!`);
      } else {
        await carrierService.createDID(didForm);
        showToast(`DID '${didForm.phone_number}' added to inventory!`);
      }
      setShowDidModal(false);
      fetchData();
    } catch (err: any) {
      setError(err?.message || "Failed to save DID.");
    }
  };

  // Delete DID
  const handleDeleteDid = async (id: string, phone: string) => {
    if (!confirm(`Remove DID ${phone} from inventory?`)) return;
    try {
      await carrierService.deleteDID(id);
      showToast(`DID ${phone} removed.`);
      fetchData();
    } catch (err: any) {
      setError(err?.message || "Failed to remove DID.");
    }
  };

  // Sync Inbound Numbers
  const handleSyncInbound = async () => {
    try {
      setRefreshing(true);
      const res = await carrierService.syncInboundNumbers();
      showToast(`Synchronized ${res.synced_count} inbound numbers into DID inventory.`);
      fetchData();
    } catch (err: any) {
      setError(err?.message || "Failed to sync inbound numbers.");
      setRefreshing(false);
    }
  };

  // Save Failover Policy
  const handleSavePolicy = async () => {
    setSavingPolicy(true);
    try {
      await carrierService.saveRoutingPolicy(policy);
      showToast("Failover routing policy updated successfully!");
    } catch (err: any) {
      setError(err?.message || "Failed to save routing policy.");
    } finally {
      setSavingPolicy(false);
    }
  };

  // Helpers
  const getHealthBadge = (health: string, latency?: number | null) => {
    const latStr = latency !== undefined && latency !== null ? ` (${Math.round(latency)}ms)` : "";
    switch (health) {
      case "HEALTHY":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Healthy{latStr}
          </span>
        );
      case "DEGRADED":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            Degraded{latStr}
          </span>
        );
      case "UNREACHABLE":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200">
            <XCircle className="w-3.5 h-3.5 text-rose-600" />
            Unreachable{latStr}
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
            <HelpCircle className="w-3.5 h-3.5 text-slate-500" />
            Unknown
          </span>
        );
    }
  };

  const totalChannels = carriers.reduce((acc, c) => acc + (c.max_channels || 0), 0);
  const activeCarriersCount = carriers.filter((c) => c.status === "ACTIVE").length;
  const healthyCount = carriers.filter((c) => c.last_health_status === "HEALTHY").length;

  return (
    <AppShell>
      <div className="p-6 md:p-8 space-y-6 max-w-7xl mx-auto">
        {/* Breadcrumb & Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <Link
              href="/admin"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Administration
            </Link>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
              <Network className="w-8 h-8 text-indigo-600" />
              SIP Carrier Management
            </h1>
            <p className="text-sm text-slate-500 font-medium">
              Enterprise VoIP trunking, Asterisk PBX interconnects, DID inventory, and multi-carrier failover routing.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors shadow-2xs disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 text-slate-500 ${refreshing ? "animate-spin" : ""}`} />
              Refresh
            </button>
            <button
              onClick={() => openCarrierModal()}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-colors shadow-sm"
            >
              <Plus className="w-4 h-4" />
              Add SIP Carrier
            </button>
          </div>
        </div>

        {/* Notifications */}
        {successMessage && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-sm font-medium flex items-center gap-2 animate-in fade-in">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            {successMessage}
          </div>
        )}
        {error && (
          <div className="p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl text-sm font-medium flex items-center gap-2 animate-in fade-in">
            <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
            {error}
            <button onClick={() => setError(null)} className="ml-auto text-rose-500 hover:text-rose-700">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">SIP Carriers</p>
              <p className="text-2xl font-bold text-slate-900">
                {activeCarriersCount} <span className="text-sm font-normal text-slate-400">/ {carriers.length} total</span>
              </p>
              <p className="text-xs text-emerald-600 font-medium">{healthyCount} Healthy Interconnects</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
              <Network className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">SIP Trunks & Lines</p>
              <p className="text-2xl font-bold text-slate-900">{trunks.length}</p>
              <p className="text-xs text-slate-500 font-medium">{totalChannels} Max Channels Configured</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600">
              <Server className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">DID Phone Inventory</p>
              <p className="text-2xl font-bold text-slate-900">{dids.length}</p>
              <p className="text-xs text-slate-500 font-medium">
                {dids.filter((d) => d.status === "ACTIVE").length} Active Outbound / Inbound
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600">
              <PhoneCall className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Telephony Failover</p>
              <p className="text-2xl font-bold text-emerald-600">Active</p>
              <p className="text-xs text-slate-500 font-medium">
                {policy.secondary_carrier_id ? "Primary + Secondary Ready" : "Single Carrier Mode"}
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-slate-200">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab("carriers")}
              className={`pb-4 px-1 text-sm font-bold border-b-2 flex items-center gap-2 transition-colors ${
                activeTab === "carriers"
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <Network className="w-4 h-4" />
              SIP Carriers ({carriers.length})
            </button>
            <button
              onClick={() => setActiveTab("trunks")}
              className={`pb-4 px-1 text-sm font-bold border-b-2 flex items-center gap-2 transition-colors ${
                activeTab === "trunks"
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <Server className="w-4 h-4" />
              SIP Trunks ({trunks.length})
            </button>
            <button
              onClick={() => setActiveTab("dids")}
              className={`pb-4 px-1 text-sm font-bold border-b-2 flex items-center gap-2 transition-colors ${
                activeTab === "dids"
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <PhoneCall className="w-4 h-4" />
              DID Inventory ({dids.length})
            </button>
            <button
              onClick={() => setActiveTab("failover")}
              className={`pb-4 px-1 text-sm font-bold border-b-2 flex items-center gap-2 transition-colors ${
                activeTab === "failover"
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <ArrowRightLeft className="w-4 h-4" />
              Routing & Failover Policy
            </button>
          </nav>
        </div>

        {/* TAB 1: CARRIERS */}
        {activeTab === "carriers" && (
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-600">
                  <thead className="bg-slate-50/80 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    <tr>
                      <th className="py-3.5 px-4">Carrier Name</th>
                      <th className="py-3.5 px-4">Provider</th>
                      <th className="py-3.5 px-4">SIP Host & Port</th>
                      <th className="py-3.5 px-4">Transport / Auth</th>
                      <th className="py-3.5 px-4">Channels</th>
                      <th className="py-3.5 px-4">Health & Latency</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    {carriers.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="py-12 text-center text-slate-400">
                          No SIP carriers configured yet. Click "Add SIP Carrier" to connect Asterisk PBX or a VoIP trunk.
                        </td>
                      </tr>
                    ) : (
                      carriers.map((carrier) => (
                        <tr key={carrier.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="py-4 px-4 font-bold text-slate-900">
                            <div className="flex items-center gap-2.5">
                              <span
                                className={`w-2.5 h-2.5 rounded-full ${
                                  carrier.status === "ACTIVE" ? "bg-emerald-500" : "bg-slate-300"
                                }`}
                              />
                              {carrier.name}
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-indigo-50 text-indigo-700">
                              {carrier.provider_type}
                            </span>
                          </td>
                          <td className="py-4 px-4 font-mono text-xs text-slate-700">
                            {carrier.sip_host}:{carrier.sip_port}
                          </td>
                          <td className="py-4 px-4 text-xs">
                            <span className="font-semibold text-slate-700">{carrier.transport}</span> /{" "}
                            <span className="text-slate-500">{carrier.auth_type}</span>
                          </td>
                          <td className="py-4 px-4 text-slate-700">
                            {carrier.max_channels} <span className="text-xs text-slate-400">channels</span>
                          </td>
                          <td className="py-4 px-4">
                            {getHealthBadge(carrier.last_health_status, carrier.last_health_latency_ms)}
                          </td>
                          <td className="py-4 px-4">
                            <button
                              onClick={() => handleToggleCarrierStatus(carrier)}
                              className={`px-2.5 py-1 rounded-full text-xs font-bold transition-colors ${
                                carrier.status === "ACTIVE"
                                  ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                              }`}
                            >
                              {carrier.status}
                            </button>
                          </td>
                          <td className="py-4 px-4 text-right">
                            <div className="inline-flex items-center gap-1.5">
                              <button
                                onClick={() => handleTestCarrier(carrier.id)}
                                disabled={testingId === carrier.id}
                                title="Run live SIP OPTIONS / REGISTER socket probe"
                                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-lg hover:bg-indigo-100 transition-colors disabled:opacity-50"
                              >
                                <Zap className={`w-3.5 h-3.5 ${testingId === carrier.id ? "animate-spin" : ""}`} />
                                {testingId === carrier.id ? "Probing..." : "Test"}
                              </button>
                              <button
                                onClick={() => openCarrierModal(carrier)}
                                title="Edit Carrier"
                                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                              >
                                <Pencil className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteCarrier(carrier.id, carrier.name)}
                                title="Delete Carrier"
                                className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
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

        {/* TAB 2: TRUNKS */}
        {activeTab === "trunks" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-base font-bold text-slate-900">Configured SIP Trunks</h3>
                <p className="text-xs text-slate-500">
                  Manage logical SIP trunks, concurrency caps, and directional routing.
                </p>
              </div>
              <button
                onClick={() => openTrunkModal()}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                Add Trunk
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-600">
                  <thead className="bg-slate-50/80 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    <tr>
                      <th className="py-3.5 px-4">Trunk Name</th>
                      <th className="py-3.5 px-4">Associated Carrier</th>
                      <th className="py-3.5 px-4">Direction</th>
                      <th className="py-3.5 px-4">Concurrency</th>
                      <th className="py-3.5 px-4">Priority</th>
                      <th className="py-3.5 px-4">Registration</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    {trunks.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="py-12 text-center text-slate-400">
                          No trunks created yet. Each carrier automatically gets a primary trunk, or you can add custom trunks.
                        </td>
                      </tr>
                    ) : (
                      trunks.map((trunk) => (
                        <tr key={trunk.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="py-4 px-4 font-bold text-slate-900">{trunk.name}</td>
                          <td className="py-4 px-4">
                            <span className="font-semibold text-slate-800">{trunk.carrier_name || "Unknown"}</span>
                            <span className="block text-xs text-slate-400 font-mono">
                              {trunk.carrier_host}:{trunk.carrier_port}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-slate-100 text-slate-700">
                              {trunk.direction}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-slate-700">
                            {trunk.max_concurrency} <span className="text-xs text-slate-400">lines</span>
                          </td>
                          <td className="py-4 px-4 text-slate-700">#{trunk.priority}</td>
                          <td className="py-4 px-4">
                            <span
                              className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold ${
                                trunk.registration_status === "REGISTERED" || trunk.registration_status === "PEER_ACTIVE"
                                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                  : "bg-amber-50 text-amber-700 border border-amber-200"
                              }`}
                            >
                              {trunk.registration_status}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <span
                              className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                                trunk.status === "ACTIVE"
                                  ? "bg-emerald-100 text-emerald-800"
                                  : "bg-slate-100 text-slate-600"
                              }`}
                            >
                              {trunk.status}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-right">
                            <div className="inline-flex items-center gap-1.5">
                              <button
                                onClick={() => handleTestTrunk(trunk.id)}
                                disabled={testingId === trunk.id}
                                title="Test trunk connectivity"
                                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-lg hover:bg-indigo-100 transition-colors disabled:opacity-50"
                              >
                                <Zap className="w-3.5 h-3.5" />
                                Test
                              </button>
                              <button
                                onClick={() => openTrunkModal(trunk)}
                                title="Edit Trunk"
                                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                              >
                                <Pencil className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteTrunk(trunk.id, trunk.name)}
                                title="Delete Trunk"
                                className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
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

        {/* TAB 3: DIDS */}
        {activeTab === "dids" && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">Direct Inward Dialing (DID) Inventory</h3>
                <p className="text-xs text-slate-500">
                  Assign telephone numbers to campaigns, AI Voice Agents, experts, or softphone groups.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleSyncInbound}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors shadow-2xs"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Sync Inbound Numbers
                </button>
                <button
                  onClick={() => openDidModal()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add DID
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-600">
                  <thead className="bg-slate-50/80 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    <tr>
                      <th className="py-3.5 px-4">DID Phone Number</th>
                      <th className="py-3.5 px-4">Label / Name</th>
                      <th className="py-3.5 px-4">Carrier / Trunk</th>
                      <th className="py-3.5 px-4">Routing Target</th>
                      <th className="py-3.5 px-4">Assigned Agent / Campaign</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    {dids.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="py-12 text-center text-slate-400">
                          No DIDs registered yet. Click "Add DID" or "Sync Inbound Numbers" to import your telephony inventory.
                        </td>
                      </tr>
                    ) : (
                      dids.map((did) => (
                        <tr key={did.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="py-4 px-4 font-mono font-bold text-slate-900">{did.phone_number}</td>
                          <td className="py-4 px-4 text-slate-700">{did.name || "-"}</td>
                          <td className="py-4 px-4">
                            <span className="font-semibold text-slate-800">{did.carrier_name || "Unassigned"}</span>
                            {did.trunk_name && (
                              <span className="block text-xs text-slate-400">{did.trunk_name}</span>
                            )}
                          </td>
                          <td className="py-4 px-4">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200">
                              {did.routing_type}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-slate-700">
                            {did.campaign_name && (
                              <span className="block text-xs font-bold text-indigo-600">
                                Campaign: {did.campaign_name}
                              </span>
                            )}
                            {did.agent_name && (
                              <span className="block text-xs text-slate-500">Agent: {did.agent_name}</span>
                            )}
                            {!did.campaign_name && !did.agent_name && (
                              <span className="text-xs text-slate-400 italic">Unassigned (Pool)</span>
                            )}
                          </td>
                          <td className="py-4 px-4">
                            <span
                              className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                                did.status === "ACTIVE"
                                  ? "bg-emerald-100 text-emerald-800"
                                  : "bg-slate-100 text-slate-600"
                              }`}
                            >
                              {did.status}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-right">
                            <div className="inline-flex items-center gap-1.5">
                              <button
                                onClick={() => openDidModal(did)}
                                title="Edit DID"
                                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                              >
                                <Pencil className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteDid(did.id, did.phone_number)}
                                title="Remove DID"
                                className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
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

        {/* TAB 4: FAILOVER ROUTING POLICY */}
        {activeTab === "failover" && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 space-y-6 shadow-2xs max-w-3xl">
            <div>
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-indigo-600" />
                SIP Carrier Failover & Redundancy Policy
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Configure automated multi-carrier failover routing. If the primary carrier is degraded or rejects calls with specific SIP status codes, traffic seamlessly reroutes to the secondary carrier.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Primary Outbound Carrier
                </label>
                <select
                  value={policy.primary_carrier_id}
                  onChange={(e) => setPolicy({ ...policy, primary_carrier_id: e.target.value })}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-white text-sm font-medium focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select Primary Carrier</option>
                  {carriers.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} ({c.sip_host}:{c.sip_port}) - {c.provider_type} [{c.status}]
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Secondary Failover Carrier (Optional)
                </label>
                <select
                  value={policy.secondary_carrier_id || ""}
                  onChange={(e) => setPolicy({ ...policy, secondary_carrier_id: e.target.value || null })}
                  className="w-full h-10 px-3 rounded-xl border border-slate-200 bg-white text-sm font-medium focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">None (No Failover)</option>
                  {carriers
                    .filter((c) => c.id !== policy.primary_carrier_id)
                    .map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name} ({c.sip_host}:{c.sip_port}) - {c.provider_type} [{c.status}]
                      </option>
                    ))}
                </select>
                <p className="text-xs text-slate-400 mt-1">
                  Calls will be automatically switched to this carrier if primary fails.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Max Retry Attempts Before Failover
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    value={policy.max_retry_attempts}
                    onChange={(e) => setPolicy({ ...policy, max_retry_attempts: parseInt(e.target.value, 10) || 1 })}
                    className="w-full h-10 px-3 rounded-xl border border-slate-200 text-sm font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Failover Trigger Status Codes
                  </label>
                  <input
                    type="text"
                    value={policy.retry_on_status_codes?.join(", ") || ""}
                    onChange={(e) =>
                      setPolicy({
                        ...policy,
                        retry_on_status_codes: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                      })
                    }
                    placeholder="503, 486, 408, TIMEOUT, CONGESTION"
                    className="w-full h-10 px-3 rounded-xl border border-slate-200 text-sm font-medium"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={handleSavePolicy}
                  disabled={savingPolicy}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-colors shadow-sm disabled:opacity-50"
                >
                  <Check className="w-4 h-4" />
                  {savingPolicy ? "Saving Policy..." : "Save Failover Policy"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* MODAL 1: ADD / EDIT CARRIER */}
        {showCarrierModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl border border-slate-200 max-w-xl w-full p-6 space-y-5 shadow-2xl animate-in fade-in zoom-in-95">
              <div className="flex items-center justify-between border-b pb-3">
                <h3 className="text-lg font-bold text-slate-900">
                  {editingCarrier ? "Edit SIP Carrier" : "Add SIP Carrier"}
                </h3>
                <button onClick={() => setShowCarrierModal(false)} className="text-slate-400 hover:text-slate-600">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveCarrier} className="space-y-4 text-sm">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Carrier Name</label>
                  <input
                    type="text"
                    required
                    value={carrierForm.name}
                    onChange={(e) => setCarrierForm({ ...carrierForm, name: e.target.value })}
                    placeholder="e.g. Asterisk PBX Production"
                    className="w-full h-10 px-3 rounded-xl border border-slate-200 font-medium"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Provider Type</label>
                    <select
                      value={carrierForm.provider_type}
                      onChange={(e) => setCarrierForm({ ...carrierForm, provider_type: e.target.value })}
                      className="w-full h-10 px-3 rounded-xl border border-slate-200 font-medium"
                    >
                      <option value="ASTERISK">Asterisk PBX</option>
                      <option value="FREEPBX">FreePBX</option>
                      <option value="GENERIC_SIP">Generic SIP Trunk</option>
                      <option value="TATA">Tata Telephony</option>
                      <option value="AIRTEL">Airtel Business</option>
                      <option value="JIO">Jio Enterprise</option>
                      <option value="TWILIO">Twilio Elastic SIP</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Transport</label>
                    <select
                      value={carrierForm.transport}
                      onChange={(e) => setCarrierForm({ ...carrierForm, transport: e.target.value })}
                      className="w-full h-10 px-3 rounded-xl border border-slate-200 font-medium"
                    >
                      <option value="UDP">UDP (Standard)</option>
                      <option value="TCP">TCP</option>
                      <option value="TLS">TLS (Encrypted)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2">
                    <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">SIP Server Host / IP</label>
                    <input
                      type="text"
                      required
                      value={carrierForm.sip_host}
                      onChange={(e) => setCarrierForm({ ...carrierForm, sip_host: e.target.value })}
                      placeholder="e.g. 192.0.2.10 or sip.carrier.com"
                      className="w-full h-10 px-3 rounded-xl border border-slate-200 font-medium font-mono text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Port</label>
                    <input
                      type="number"
                      value={carrierForm.sip_port}
                      onChange={(e) => setCarrierForm({ ...carrierForm, sip_port: parseInt(e.target.value, 10) || 5060 })}
                      className="w-full h-10 px-3 rounded-xl border border-slate-200 font-medium font-mono text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Authentication Type</label>
                    <select
                      value={carrierForm.auth_type}
                      onChange={(e) => setCarrierForm({ ...carrierForm, auth_type: e.target.value })}
                      className="w-full h-10 px-3 rounded-xl border border-slate-200 font-medium"
                    >
                      <option value="CREDENTIAL">Credential (Username/Password)</option>
                      <option value="IP_BASED">IP Based (ACL / Whitelist)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Max Channels</label>
                    <input
                      type="number"
                      value={carrierForm.max_channels}
                      onChange={(e) => setCarrierForm({ ...carrierForm, max_channels: parseInt(e.target.value, 10) || 10 })}
                      className="w-full h-10 px-3 rounded-xl border border-slate-200 font-medium"
                    />
                  </div>
                </div>

                {carrierForm.auth_type === "CREDENTIAL" && (
                  <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">SIP Username</label>
                      <input
                        type="text"
                        value={carrierForm.username}
                        onChange={(e) => setCarrierForm({ ...carrierForm, username: e.target.value })}
                        placeholder="e.g. 1001 or trunk_user"
                        className="w-full h-9 px-3 rounded-lg border border-slate-200 font-medium text-xs font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">SIP Password / Secret</label>
                      <input
                        type="password"
                        value={carrierForm.password}
                        onChange={(e) => setCarrierForm({ ...carrierForm, password: e.target.value })}
                        placeholder={editingCarrier?.has_password ? "••••••••" : "SIP Secret"}
                        className="w-full h-9 px-3 rounded-lg border border-slate-200 font-medium text-xs"
                      />
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-end gap-2.5 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setShowCarrierModal(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-colors shadow-sm"
                  >
                    {editingCarrier ? "Save Changes" : "Create Carrier"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MODAL 2: ADD / EDIT TRUNK */}
        {showTrunkModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl border border-slate-200 max-w-lg w-full p-6 space-y-5 shadow-2xl animate-in fade-in zoom-in-95">
              <div className="flex items-center justify-between border-b pb-3">
                <h3 className="text-lg font-bold text-slate-900">{editingTrunk ? "Edit Trunk" : "Add SIP Trunk"}</h3>
                <button onClick={() => setShowTrunkModal(false)} className="text-slate-400 hover:text-slate-600">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveTrunk} className="space-y-4 text-sm">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Parent SIP Carrier</label>
                  <select
                    required
                    value={trunkForm.carrier_id}
                    onChange={(e) => setTrunkForm({ ...trunkForm, carrier_id: e.target.value })}
                    className="w-full h-10 px-3 rounded-xl border border-slate-200 font-medium"
                  >
                    {carriers.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name} ({c.sip_host})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Trunk Name</label>
                  <input
                    type="text"
                    required
                    value={trunkForm.name}
                    onChange={(e) => setTrunkForm({ ...trunkForm, name: e.target.value })}
                    placeholder="e.g. Asterisk Outbound Line 1"
                    className="w-full h-10 px-3 rounded-xl border border-slate-200 font-medium"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Direction</label>
                    <select
                      value={trunkForm.direction}
                      onChange={(e) => setTrunkForm({ ...trunkForm, direction: e.target.value })}
                      className="w-full h-10 px-3 rounded-xl border border-slate-200 font-medium"
                    >
                      <option value="BIDIRECTIONAL">Bidirectional</option>
                      <option value="OUTBOUND">Outbound Only</option>
                      <option value="INBOUND">Inbound Only</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Max Concurrency</label>
                    <input
                      type="number"
                      value={trunkForm.max_concurrency}
                      onChange={(e) => setTrunkForm({ ...trunkForm, max_concurrency: parseInt(e.target.value, 10) || 10 })}
                      className="w-full h-10 px-3 rounded-xl border border-slate-200 font-medium"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2.5 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setShowTrunkModal(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-colors shadow-sm"
                  >
                    {editingTrunk ? "Save Trunk" : "Create Trunk"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MODAL 3: ADD / EDIT DID */}
        {showDidModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl border border-slate-200 max-w-lg w-full p-6 space-y-5 shadow-2xl animate-in fade-in zoom-in-95">
              <div className="flex items-center justify-between border-b pb-3">
                <h3 className="text-lg font-bold text-slate-900">{editingDid ? "Edit DID Number" : "Add DID to Inventory"}</h3>
                <button onClick={() => setShowDidModal(false)} className="text-slate-400 hover:text-slate-600">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveDid} className="space-y-4 text-sm">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Phone Number (E.164)</label>
                  <input
                    type="text"
                    required
                    value={didForm.phone_number}
                    onChange={(e) => setDidForm({ ...didForm, phone_number: e.target.value })}
                    placeholder="e.g. +919410697548"
                    className="w-full h-10 px-3 rounded-xl border border-slate-200 font-medium font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">DID Label / Description</label>
                  <input
                    type="text"
                    value={didForm.name}
                    onChange={(e) => setDidForm({ ...didForm, name: e.target.value })}
                    placeholder="e.g. Primary Asterisk Outbound Line"
                    className="w-full h-10 px-3 rounded-xl border border-slate-200 font-medium"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Carrier</label>
                    <select
                      value={didForm.carrier_id}
                      onChange={(e) => setDidForm({ ...didForm, carrier_id: e.target.value })}
                      className="w-full h-10 px-3 rounded-xl border border-slate-200 font-medium"
                    >
                      <option value="">Unassigned</option>
                      {carriers.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Default Inbound Route</label>
                    <select
                      value={didForm.routing_type}
                      onChange={(e) => setDidForm({ ...didForm, routing_type: e.target.value })}
                      className="w-full h-10 px-3 rounded-xl border border-slate-200 font-medium"
                    >
                      <option value="AI_AGENT">AI Voice Agent</option>
                      <option value="HUMAN_AGENT">Human Agent</option>
                      <option value="USER_GROUP">User Group / Queue</option>
                      <option value="IVR">Interactive Voice Response (IVR)</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2.5 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setShowDidModal(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-colors shadow-sm"
                  >
                    {editingDid ? "Save DID" : "Add DID"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MODAL 4: LIVE DIAGNOSTICS PROBE RESULT */}
        {showTestModal && testResult && (
          <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl border border-slate-200 max-w-lg w-full p-6 space-y-5 shadow-2xl animate-in fade-in zoom-in-95">
              <div className="flex items-center justify-between border-b pb-3">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-indigo-600" />
                  <h3 className="text-lg font-bold text-slate-900">Live SIP Diagnostic Probe Result</h3>
                </div>
                <button onClick={() => setShowTestModal(false)} className="text-slate-400 hover:text-slate-600">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-sm">
                <div
                  className={`p-4 rounded-xl border flex items-center justify-between ${
                    testResult.status === "HEALTHY"
                      ? "bg-emerald-50 border-emerald-200 text-emerald-900"
                      : testResult.status === "DEGRADED"
                      ? "bg-amber-50 border-amber-200 text-amber-900"
                      : "bg-rose-50 border-rose-200 text-rose-900"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {testResult.status === "HEALTHY" ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    ) : testResult.status === "DEGRADED" ? (
                      <AlertTriangle className="w-6 h-6 text-amber-600" />
                    ) : (
                      <XCircle className="w-6 h-6 text-rose-600" />
                    )}
                    <div>
                      <p className="font-extrabold text-base tracking-tight">{testResult.status}</p>
                      <p className="text-xs opacity-80">
                        {testResult.carrier_name || "SIP Endpoint"}: {testResult.sip_host}:{testResult.sip_port || 5060}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-semibold uppercase opacity-70">Roundtrip Latency</p>
                    <p className="text-xl font-bold">{Math.round(testResult.latency_ms)} ms</p>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 font-mono text-xs text-slate-700">
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-sans">SIP Status Code:</span>
                    <span className="font-bold">{testResult.sip_code ?? "None (Socket Timeout)"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-sans">Response Phrase:</span>
                    <span>{testResult.sip_reason ?? "-"}</span>
                  </div>
                  {testResult.user_agent && (
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-sans">Server Banner:</span>
                      <span className="font-semibold text-indigo-700">{testResult.user_agent}</span>
                    </div>
                  )}
                  {testResult.error && (
                    <div className="pt-2 border-t border-slate-200 text-rose-600 font-sans">
                      <span className="font-bold">Error Details:</span> {testResult.error}
                    </div>
                  )}
                </div>

                <p className="text-xs text-slate-400">
                  Probe verified via direct RFC 3261 socket transmission against remote PBX port. Latency and health logs have been persisted in the database.
                </p>

                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => setShowTestModal(false)}
                    className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors"
                  >
                    Done
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
