"use client";

import React, { useEffect, useState, useMemo } from "react";
import {
  callRecordingsService,
  RecordingItem,
  RecordingsSummary,
  GoogleDriveStatus,
  CampaignOption,
} from "@/lib/services/call-recordings.service";
import { RecordingAudioPlayer } from "./RecordingAudioPlayer";
import {
  Volume2,
  Trash2,
  CloudUpload,
  RefreshCw,
  Search,
  ExternalLink,
  AlertTriangle,
  CheckCircle2,
  Clock,
  PhoneIncoming,
  PhoneOutgoing,
  HardDrive,
  FolderSync,
  AlertCircle,
  HelpCircle,
  X,
  ChevronLeft,
  ChevronRight,
  ShieldAlert,
  Download,
  Loader2,
} from "lucide-react";
import { useAuthStore } from "@/lib/store";

export function CallRecordingsSection() {
  // Data state
  const [recordings, setRecordings] = useState<RecordingItem[]>([]);
  const [summary, setSummary] = useState<RecordingsSummary>({
    total_recordings: 0,
    available_originals: 0,
    backed_up: 0,
    expiring_soon: 0,
  });
  const [campaigns, setCampaigns] = useState<CampaignOption[]>([]);
  const [driveStatus, setDriveStatus] = useState<GoogleDriveStatus>({
    connected: false,
    folder_name: "GBZ Call Recordings",
  });

  // Filter state
  const [selectedCampaign, setSelectedCampaign] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const sp = new URLSearchParams(window.location.search);
      return sp.get("campaign_id") || "all";
    }
    return "all";
  });
  const [directionFilter, setDirectionFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [backupFilter, setBackupFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [page, setPage] = useState<number>(() => {
    if (typeof window !== "undefined") {
      const sp = new URLSearchParams(window.location.search);
      const p = parseInt(sp.get("page") || "1", 10);
      return isNaN(p) || p < 1 ? 1 : p;
    }
    return 1;
  });
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(0);

  // UI state
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activePlayerId, setActivePlayerId] = useState<string | null>(null);
  const [actionNotice, setActionNotice] = useState<{ type: "success" | "error" | "info"; message: string } | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  // Modals state
  const [deleteTarget, setDeleteTarget] = useState<RecordingItem | null>(null);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [isExportingCampaign, setIsExportingCampaign] = useState<boolean>(false);
  const [showExportModal, setShowExportModal] = useState<boolean>(false);
  const [exportProgress, setExportProgress] = useState<string | null>(null);
  const [actionInProgressId, setActionInProgressId] = useState<string | null>(null);

  // Load campaigns & Drive connection on mount
  useEffect(() => {
    loadMetadata();
  }, []);

  // Handle OAuth callback status return and notifications
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const url = new URL(window.location.href);
      const driveConnected = url.searchParams.get("drive_connected");
      const errorParam = url.searchParams.get("error");

      if (driveConnected === "true") {
        setActionNotice({
          type: "success",
          message: "Google Drive connected successfully! You can now backup call recordings.",
        });
        callRecordingsService.getGoogleDriveStatus().then((status) => {
          if (status) setDriveStatus(status);
        }).catch(console.error);

        url.searchParams.delete("drive_connected");
        window.history.replaceState({}, "", url.pathname + url.search);
      } else if (errorParam) {
        let msg = "Google Drive authorization failed.";
        if (errorParam === "access_denied") {
          msg = "Google Drive authorization was denied or cancelled.";
        } else if (errorParam === "invalid_or_expired_state") {
          msg = "Google Drive session expired or was invalid. Please try connecting again.";
        } else {
          msg = `Google Drive connection error: ${decodeURIComponent(errorParam)}`;
        }
        setActionNotice({
          type: "error",
          message: msg,
        });

        url.searchParams.delete("error");
        window.history.replaceState({}, "", url.pathname + url.search);
      }
    } catch (e) {
      console.warn("Could not parse OAuth return params:", e);
    }
  }, []);

  // Reload recordings when filters change
  useEffect(() => {
    loadRecordings();
  }, [selectedCampaign, directionFilter, statusFilter, backupFilter, page]);

  const loadMetadata = async () => {
    try {
      const [camps, drive] = await Promise.all([
        callRecordingsService.getCampaigns(),
        callRecordingsService.getGoogleDriveStatus(),
      ]);
      setCampaigns(camps);
      setDriveStatus(drive);
    } catch (e) {
      console.warn("Error loading metadata:", e);
    }
  };

  const loadRecordings = async () => {
    setIsLoading(true);
    try {
      const res = await callRecordingsService.getRecordings({
        campaign_id: selectedCampaign !== "all" ? selectedCampaign : undefined,
        direction: directionFilter !== "all" ? directionFilter : undefined,
        status: statusFilter !== "all" ? statusFilter : undefined,
        backup_status: backupFilter !== "all" ? backupFilter : undefined,
        search: searchQuery.trim() || undefined,
        page,
        page_size: 15,
      });
      setRecordings(res.items || []);
      setSummary(res.summary);
      setTotalPages(res.total_pages || 1);
      setTotalCount(res.total || 0);
    } catch (err: any) {
      console.error("Failed to load call recordings:", err);
      setActionNotice({ type: "error", message: err?.message || "Failed to load call recordings" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    loadRecordings();
  };

  // Google Drive OAuth connect
  const handleConnectDrive = async () => {
    try {
      let currentPath = "/reports?tab=call-recordings";
      if (typeof window !== "undefined") {
        const url = new URL(window.location.href);
        if (selectedCampaign && selectedCampaign !== "all" && !url.searchParams.has("campaign_id")) {
          url.searchParams.set("campaign_id", selectedCampaign);
        }
        currentPath = url.pathname + url.search;
      }
      const authUrl = await callRecordingsService.getGoogleDriveAuthUrl(currentPath);
      if (authUrl) {
        window.location.href = authUrl;
      }
    } catch (e: any) {
      setActionNotice({ type: "error", message: "Failed to initiate Google Drive authorization" });
    }
  };

  // Single export to Google Drive
  const handleExportSingle = async (rec: RecordingItem) => {
    if (!driveStatus.connected) {
      setActionNotice({
        type: "info",
        message: "Google Drive is not connected. Please connect Google Drive first using the button above.",
      });
      return;
    }

    setActionInProgressId(rec.id);
    try {
      const res = await callRecordingsService.exportSingleToDrive(rec.id);
      if (res.success) {
        setActionNotice({
          type: "success",
          message: `Recording for call ${rec.call_id.slice(0, 10)}... successfully backed up to Google Drive.`,
        });
        loadRecordings();
      } else {
        setActionNotice({ type: "error", message: res.message || "Failed to export recording to Google Drive" });
      }
    } catch (err: any) {
      setActionNotice({ type: "error", message: err?.message || "Export failed" });
    } finally {
      setActionInProgressId(null);
    }
  };

  // Retry failed backup
  const handleRetryBackup = async (rec: RecordingItem) => {
    setActionInProgressId(rec.id);
    try {
      await callRecordingsService.retryBackup(rec.id);
      setActionNotice({ type: "success", message: "Backup retried successfully." });
      loadRecordings();
    } catch (err: any) {
      setActionNotice({ type: "error", message: err?.message || "Retry failed" });
    } finally {
      setActionInProgressId(null);
    }
  };

  // Delete recording
  const confirmDelete = async () => {
    if (!deleteTarget) return;
    setIsDeleting(true);
    try {
      const res = await callRecordingsService.deleteRecording(deleteTarget.id);
      if (res.success) {
        setActionNotice({
          type: "success",
          message: res.backup_preserved
            ? "Original audio permanently removed. Google Drive backup remains safely retained."
            : "Recording permanently removed from storage.",
        });
        setDeleteTarget(null);
        loadRecordings();
      }
    } catch (err: any) {
      setActionNotice({ type: "error", message: err?.message || "Failed to delete recording" });
    } finally {
      setIsDeleting(false);
    }
  };

  // Download single recording
  const handleDownloadAudio = async (rec: RecordingItem) => {
    if (rec.is_expired || rec.recording_status === "expired" || rec.recording_status === "deleted") {
      setActionNotice({ type: "error", message: "Audio recording has expired or been deleted." });
      return;
    }
    setDownloadingId(rec.id);
    try {
      const token = useAuthStore.getState().token;
      const downloadEndpoint = rec.download_url || rec.stream_url.replace("/stream", "/download");
      const sep = downloadEndpoint.includes("?") ? "&" : "?";
      const finalUrl = `${downloadEndpoint}${sep}download=1${token ? `&token=${encodeURIComponent(token)}` : ""}`;

      const safeCustomer = (rec.customer_name || "customer").replace(/[^a-zA-Z0-9_-]/g, "_");
      const safeCallId = rec.call_id ? rec.call_id.slice(0, 8) : rec.id.slice(0, 8);
      const filename = `recording_${safeCustomer}_${safeCallId}.wav`;

      const res = await fetch(finalUrl);
      if (!res.ok) throw new Error("Download request failed");
      const blob = await res.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(blobUrl);

      setActionNotice({ type: "success", message: `Downloaded recording for ${rec.customer_name || 'call'}.` });
    } catch (err: any) {
      console.warn("[CallRecordingsSection] Fetch download failed, trying window fallback:", err);
      const token = useAuthStore.getState().token;
      const downloadEndpoint = rec.download_url || rec.stream_url.replace("/stream", "/download");
      const sep = downloadEndpoint.includes("?") ? "&" : "?";
      window.open(`${downloadEndpoint}${sep}download=1${token ? `&token=${encodeURIComponent(token)}` : ""}`, "_blank");
    } finally {
      setDownloadingId(null);
    }
  };

  // Batch campaign export
  const handleBatchCampaignExport = async () => {
    if (!driveStatus.connected) {
      setActionNotice({ type: "info", message: "Please connect Google Drive before exporting." });
      return;
    }
    if (selectedCampaign === "all") {
      setActionNotice({ type: "info", message: "Please select a specific campaign from the dropdown to export." });
      return;
    }

    setIsExportingCampaign(true);
    setExportProgress("Exporting eligible recordings to Google Drive...");
    try {
      const res = await callRecordingsService.exportCampaignRecordings(selectedCampaign);
      if (res.success) {
        setActionNotice({
          type: "success",
          message: `Campaign export finished: ${res.exported_count} backed up to Drive, ${res.failed_count} failed.`,
        });
        setShowExportModal(false);
        loadRecordings();
      } else {
        setActionNotice({ type: "error", message: res.message || "Campaign export failed." });
      }
    } catch (err: any) {
      setActionNotice({ type: "error", message: err?.message || "Campaign export failed" });
    } finally {
      setIsExportingCampaign(false);
      setExportProgress(null);
    }
  };

  // Format local timestamps cleanly
  const formatLocalTime = (isoString?: string | null) => {
    if (!isoString) return "—";
    try {
      const d = new Date(isoString);
      return d.toLocaleString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return isoString;
    }
  };

  // Format countdown
  const formatRemainingTime = (seconds?: number | null) => {
    if (seconds === null || seconds === undefined || seconds <= 0) return "Expired";
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    if (h > 0) return `${h}h ${m}m left`;
    return `${m}m left`;
  };

  const selectedCampaignName = useMemo(() => {
    if (selectedCampaign === "all") return "All Campaigns";
    const c = campaigns.find((camp) => camp.id === selectedCampaign);
    return c ? c.name : "Selected Campaign";
  }, [selectedCampaign, campaigns]);

  return (
    <div className="space-y-6">
      {/* Toast Notice */}
      {actionNotice && (
        <div
          className={`p-4 rounded-xl flex items-center justify-between shadow-xs border animate-in fade-in duration-200 ${
            actionNotice.type === "success"
              ? "bg-emerald-50 border-emerald-200 text-emerald-800"
              : actionNotice.type === "error"
              ? "bg-rose-50 border-rose-200 text-rose-800"
              : "bg-indigo-50 border-indigo-200 text-indigo-800"
          }`}
        >
          <div className="flex items-center gap-2.5 text-sm font-medium">
            {actionNotice.type === "success" && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
            {actionNotice.type === "error" && <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />}
            {actionNotice.type === "info" && <HelpCircle className="w-4 h-4 text-indigo-600 shrink-0" />}
            <span>{actionNotice.message}</span>
          </div>
          <button
            onClick={() => setActionNotice(null)}
            className="p-1 hover:bg-black/5 rounded-lg text-current"
            aria-label="Dismiss alert"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* HEADER SECTION */}
      <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100">
              <HardDrive className="w-4 h-4" />
            </span>
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
              Campaign Call Recordings
            </h2>
          </div>
          <p className="text-xs text-slate-500">
            Secure, campaign-isolated audio recordings. Originals expire after 24 hours. Google Drive backups are retained indefinitely.
          </p>
        </div>

        {/* Campaign selector and Drive status */}
        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
          {/* Campaign Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-600 whitespace-nowrap">Campaign:</span>
            <select
              value={selectedCampaign}
              onChange={(e) => {
                setSelectedCampaign(e.target.value);
                setPage(1);
              }}
              className="text-xs bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-w-[180px]"
            >
              <option value="all">All Campaigns</option>
              {campaigns.map((camp) => (
                <option key={camp.id} value={camp.id}>
                  {camp.name}
                </option>
              ))}
            </select>
          </div>

          {/* Export Campaign Button */}
          <button
            onClick={() => setShowExportModal(true)}
            disabled={selectedCampaign === "all"}
            title={selectedCampaign === "all" ? "Select a specific campaign to export" : "Export all eligible recordings in campaign"}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all shadow-2xs ${
              selectedCampaign === "all"
                ? "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200"
                : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs"
            }`}
          >
            <CloudUpload className="w-3.5 h-3.5" />
            <span>Export Campaign to Drive</span>
          </button>

          {/* Google Drive Status & Connect */}
          {driveStatus.connected ? (
            <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Drive: {driveStatus.email || "Connected"}</span>
            </div>
          ) : (
            <button
              onClick={handleConnectDrive}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-800 text-xs font-bold transition-all"
            >
              <FolderSync className="w-3.5 h-3.5 text-amber-600" />
              <span>Connect Google Drive</span>
            </button>
          )}
        </div>
      </div>

      {/* SUMMARY KPI CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Total Recordings */}
        <div className="bg-white p-5 rounded-2xl shadow-xs border border-slate-200 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Total Recordings</p>
            <p className="text-2xl font-extrabold text-slate-900 mt-0.5">{summary.total_recordings}</p>
            <p className="text-[11px] text-slate-500 mt-1">Indexed in scope</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            <Volume2 className="w-5 h-5" />
          </div>
        </div>

        {/* Available Originals */}
        <div className="bg-white p-5 rounded-2xl shadow-xs border border-slate-200 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Available Originals</p>
            <p className="text-2xl font-extrabold text-emerald-600 mt-0.5">{summary.available_originals}</p>
            <p className="text-[11px] text-slate-500 mt-1">Ready for playback</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>

        {/* Backed Up */}
        <div className="bg-white p-5 rounded-2xl shadow-xs border border-slate-200 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Backed Up to Drive</p>
            <p className="text-2xl font-extrabold text-indigo-600 mt-0.5">{summary.backed_up}</p>
            <p className="text-[11px] text-slate-500 mt-1">Permanent retention</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
            <CloudUpload className="w-5 h-5" />
          </div>
        </div>

        {/* Expiring Soon */}
        <div className="bg-white p-5 rounded-2xl shadow-xs border border-slate-200 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Expiring Soon</p>
            <p className="text-2xl font-extrabold text-amber-600 mt-0.5">{summary.expiring_soon}</p>
            <p className="text-[11px] text-amber-700/80 mt-1">&lt; 2h remaining</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
            <Clock className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* FILTERS & SEARCH TOOLBAR */}
      <div className="bg-white p-4 rounded-2xl shadow-xs border border-slate-200 flex flex-wrap gap-3 items-center justify-between">
        <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 flex-1 min-w-[240px] max-w-md">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search customer, phone, or Call ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800"
            />
          </div>
          <button
            type="submit"
            className="px-3 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-xs font-bold transition-colors"
          >
            Search
          </button>
        </form>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* Direction Filter */}
          <select
            value={directionFilter}
            onChange={(e) => {
              setDirectionFilter(e.target.value);
              setPage(1);
            }}
            className="text-xs bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-2 font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="all">All Directions</option>
            <option value="OUTBOUND">Outbound</option>
            <option value="INBOUND">Inbound</option>
          </select>

          {/* Recording Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setPage(1);
            }}
            className="text-xs bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-2 font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="all">All Statuses</option>
            <option value="available">Available (Active)</option>
            <option value="expiring_soon">Expiring Soon</option>
            <option value="expired">Expired (24h)</option>
            <option value="deleted">Deleted</option>
          </select>

          {/* Backup Status Filter */}
          <select
            value={backupFilter}
            onChange={(e) => {
              setBackupFilter(e.target.value);
              setPage(1);
            }}
            className="text-xs bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-2 font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="all">All Backup States</option>
            <option value="BACKED_UP">Backed Up to Drive</option>
            <option value="NOT_BACKED_UP">Not Backed Up</option>
            <option value="UPLOADING">Uploading</option>
            <option value="FAILED">Backup Failed</option>
          </select>

          {/* Refresh Button */}
          <button
            onClick={() => loadRecordings()}
            className="p-2 text-slate-600 hover:text-indigo-600 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
            title="Refresh recording list"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* RECORDINGS TABLE */}
      <div className="bg-white rounded-2xl shadow-xs border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50/80 text-slate-500 border-b border-slate-200 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3.5 px-4">Campaign</th>
                <th className="py-3.5 px-4">Customer &amp; Call</th>
                <th className="py-3.5 px-4">Direction</th>
                <th className="py-3.5 px-4">Date &amp; Duration</th>
                <th className="py-3.5 px-4">Expiry (24h)</th>
                <th className="py-3.5 px-4">Backup Status</th>
                <th className="py-3.5 px-4 text-center">Audio Player</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {isLoading ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-slate-400">
                    <div className="flex flex-col items-center gap-2">
                      <RefreshCw className="w-6 h-6 animate-spin text-indigo-500" />
                      <p className="text-xs font-semibold">Loading campaign recordings...</p>
                    </div>
                  </td>
                </tr>
              ) : recordings.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center">
                    <div className="max-w-xs mx-auto text-center space-y-2">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
                        <Volume2 className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-slate-800 text-sm">No Call Recordings Found</h3>
                      <p className="text-xs text-slate-500">
                        No call recordings matching the selected campaign or filters were found in this tenant.
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                recordings.map((rec) => {
                  const isActionBusy = actionInProgressId === rec.id;

                  return (
                    <tr key={rec.id} className="hover:bg-slate-50/60 transition-colors">
                      {/* Campaign Column */}
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-slate-900 truncate max-w-[160px]" title={rec.campaign_name}>
                          {rec.campaign_name}
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono">
                          ID: {rec.campaign_id ? rec.campaign_id.slice(0, 8) : "None"}
                        </div>
                      </td>

                      {/* Customer & Call Column */}
                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-slate-800">{rec.customer_name}</div>
                        <div className="text-[11px] text-slate-500 font-mono">{rec.customer_phone || "—"}</div>
                        <div className="text-[10px] text-slate-400 font-mono">Call: {rec.call_id.slice(0, 10)}...</div>
                      </td>

                      {/* Direction Column */}
                      <td className="py-3.5 px-4">
                        {rec.call_direction === "INBOUND" ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <PhoneIncoming className="w-3 h-3" />
                            Inbound
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                            <PhoneOutgoing className="w-3 h-3" />
                            Outbound
                          </span>
                        )}
                      </td>

                      {/* Date & Duration */}
                      <td className="py-3.5 px-4">
                        <div className="text-slate-800 font-medium">{formatLocalTime(rec.started_at)}</div>
                        <div className="text-[11px] text-slate-500 font-mono">
                          {Math.floor(rec.call_duration / 60)}m {rec.call_duration % 60}s
                          {rec.recording_size ? ` • ${(rec.recording_size / 1024).toFixed(0)} KB` : ""}
                        </div>
                      </td>

                      {/* 24-Hour Expiry */}
                      <td className="py-3.5 px-4">
                        {rec.recording_status === "deleted" ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-600">
                            Deleted
                          </span>
                        ) : rec.is_expired ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-rose-50 text-rose-700 border border-rose-200">
                            <AlertCircle className="w-3 h-3" />
                            Expired (24h)
                          </span>
                        ) : rec.is_expiring_soon ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-300 animate-pulse">
                            <Clock className="w-3 h-3 text-amber-600" />
                            {formatRemainingTime(rec.time_until_expiry_seconds)}
                          </span>
                        ) : (
                          <div className="text-xs">
                            <span className="text-slate-700 font-mono">{formatRemainingTime(rec.time_until_expiry_seconds)}</span>
                            <div className="text-[10px] text-slate-400">Expires {formatLocalTime(rec.expires_at)}</div>
                          </div>
                        )}
                      </td>

                      {/* Google Drive Backup Status */}
                      <td className="py-3.5 px-4">
                        {rec.backup_status === "BACKED_UP" ? (
                          <div className="flex flex-col gap-0.5">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                              <CheckCircle2 className="w-3 h-3" />
                              Backed Up
                            </span>
                            {rec.google_drive_file_url && (
                              <a
                                href={rec.google_drive_file_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[10px] text-indigo-600 hover:text-indigo-800 font-medium underline mt-0.5"
                              >
                                View in Drive <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            )}
                          </div>
                        ) : rec.backup_status === "UPLOADING" ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-sky-50 text-sky-700 border border-sky-200">
                            <RefreshCw className="w-3 h-3 animate-spin" />
                            Uploading...
                          </span>
                        ) : rec.backup_status === "FAILED" ? (
                          <div className="flex flex-col gap-0.5">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
                              <AlertCircle className="w-3 h-3" />
                              Backup Failed
                            </span>
                            {rec.actions.can_retry && (
                              <button
                                onClick={() => handleRetryBackup(rec)}
                                disabled={isActionBusy}
                                className="text-[10px] text-rose-600 hover:text-rose-800 underline text-left font-medium"
                              >
                                Retry Backup
                              </button>
                            )}
                          </div>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-500">
                            Not Backed Up
                          </span>
                        )}
                      </td>

                      {/* Audio Player Component */}
                      <td className="py-3.5 px-4 text-center">
                        <RecordingAudioPlayer
                          recordingId={rec.id}
                          streamUrl={rec.stream_url}
                          isExpired={rec.is_expired}
                          recordingStatus={rec.recording_status}
                          activePlayerId={activePlayerId}
                          onPlayStart={(id) => setActivePlayerId(id)}
                          onPlayEnd={() => setActivePlayerId(null)}
                        />
                      </td>

                      {/* Actions */}
                      <td className="py-3.5 px-4 text-right">
                        <div className="inline-flex items-center gap-1.5 justify-end">
                          {/* Download audio button */}
                          {!rec.is_expired && rec.recording_status !== "expired" && rec.recording_status !== "deleted" && (
                            <button
                              onClick={() => handleDownloadAudio(rec)}
                              disabled={downloadingId === rec.id || isActionBusy}
                              className="p-1.5 hover:bg-emerald-50 text-emerald-600 rounded-lg transition-colors border border-emerald-200"
                              title="Download audio recording (.wav)"
                            >
                              {downloadingId === rec.id ? (
                                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                              ) : (
                                <Download className="w-3.5 h-3.5" />
                              )}
                            </button>
                          )}

                          {/* Export to Drive button */}
                          {rec.actions.can_export && (
                            <button
                              onClick={() => handleExportSingle(rec)}
                              disabled={isActionBusy}
                              className="p-1.5 hover:bg-indigo-50 text-indigo-600 rounded-lg transition-colors border border-indigo-200"
                              title="Export recording to Google Drive"
                            >
                              <CloudUpload className="w-3.5 h-3.5" />
                            </button>
                          )}

                          {/* Delete button */}
                          {rec.actions.can_delete && (
                            <button
                              onClick={() => setDeleteTarget(rec)}
                              disabled={isActionBusy}
                              className="p-1.5 hover:bg-rose-50 text-rose-600 rounded-lg transition-colors border border-rose-200"
                              title="Permanently delete recording from original storage"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* PAGINATION BAR */}
        {totalCount > 0 && (
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
            <div>
              Showing page <span className="font-bold text-slate-900">{page}</span> of{" "}
              <span className="font-bold text-slate-900">{totalPages}</span> ({totalCount} total recordings)
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1}
                className="px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page >= totalPages}
                className="px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* DELETE CONFIRMATION MODAL */}
      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Permanently Delete Call Recording?</h3>
                <p className="text-xs text-slate-500 mt-1">
                  You are about to permanently delete the original recording for call{" "}
                  <span className="font-mono font-bold text-slate-700">{deleteTarget.call_id.slice(0, 12)}...</span>.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5">
              <div className="flex justify-between">
                <span className="text-slate-500">Customer:</span>
                <span className="font-semibold">{deleteTarget.customer_name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Campaign:</span>
                <span className="font-semibold">{deleteTarget.campaign_name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Google Drive Backup:</span>
                <span className={`font-bold ${deleteTarget.backup_status === "BACKED_UP" ? "text-emerald-600" : "text-amber-600"}`}>
                  {deleteTarget.backup_status === "BACKED_UP" ? "Backed Up (Safe)" : "Not Backed Up"}
                </span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs">
              {deleteTarget.backup_status === "BACKED_UP" ? (
                <span>
                  <strong>Notice:</strong> Your verified Google Drive backup will remain intact and completely accessible. Only the original server audio file will be deleted.
                </span>
              ) : (
                <span>
                  <strong>Warning:</strong> This recording has <strong>NOT</strong> been backed up to Google Drive. Once deleted, it cannot be recovered.
                </span>
              )}
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setDeleteTarget(null)}
                disabled={isDeleting}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmDelete}
                disabled={isDeleting}
                className="px-4 py-2 rounded-lg text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-xs transition-colors flex items-center gap-1.5"
              >
                {isDeleting && <RefreshCw className="w-3.5 h-3.5 animate-spin" />}
                <span>{isDeleting ? "Deleting..." : "Confirm Delete"}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CAMPAIGN EXPORT MODAL */}
      {showExportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <CloudUpload className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Export Campaign Recordings</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Export all eligible unbacked recordings from <span className="font-bold text-indigo-700">{selectedCampaignName}</span> to Google Drive.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
              <p>
                <strong>Destination:</strong> Google Drive Folder &ldquo;GBZ Call Recordings - {selectedCampaignName}&rdquo;
              </p>
              <p className="text-slate-500">
                Recordings will be verified upon upload and marked as Backed Up. Verified backups remain safely stored in Google Drive even when the 24-hour server original expires.
              </p>
            </div>

            {exportProgress && (
              <div className="p-3 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-900 text-xs flex items-center gap-2">
                <RefreshCw className="w-4 h-4 animate-spin text-indigo-600 shrink-0" />
                <span>{exportProgress}</span>
              </div>
            )}

            <div className="flex items-center justify-end gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setShowExportModal(false)}
                disabled={isExportingCampaign}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleBatchCampaignExport}
                disabled={isExportingCampaign}
                className="px-4 py-2 rounded-lg text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs transition-colors flex items-center gap-1.5"
              >
                {isExportingCampaign && <RefreshCw className="w-3.5 h-3.5 animate-spin" />}
                <span>{isExportingCampaign ? "Exporting..." : "Start Export"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
