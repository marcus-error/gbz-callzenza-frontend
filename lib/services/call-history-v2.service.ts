import { apiFetch } from "@/lib/api-client";

export interface RecordingSegment {
  segment_index: number;
  duration_ms?: number;
  format: string;
  status: string; // ready | processing | failed | not_recorded
}

export interface RecordingInfo {
  status: string; // ready | processing | failed | not_recorded | synthetic
  is_synthetic: boolean;
  segments: RecordingSegment[];
}

export interface CallHistoryItem {
  call_id: string;
  direction: "OUTBOUND" | "INBOUND";
  status: string;
  customer_name?: string | null;
  customer_phone?: string | null;
  duration_seconds: number;
  campaign_id?: string | null;
  campaign_name?: string | null;
  ai_agent_id?: string | null;
  ai_agent_name?: string | null;
  human_agent_id?: string | null;
  human_agent_name?: string | null;
  agent_type: string;
  started_at?: string | null;
  ended_at?: string | null;
  has_transcript: boolean;
  call_result?: string | null;
  recording: RecordingInfo;
}

export interface CallHistoryListResponse {
  items: CallHistoryItem[];
  total: number;
  next_cursor?: string | null;
}

export interface CallHistoryDetail extends CallHistoryItem {
  transcript?: string | null;
  ai_summary?: string | null;
  turn_count: number;
  call_sid?: string | null;
  from_number?: string | null;
  to_number?: string | null;
}

export interface FilterOptionsResponse {
  campaigns: Array<{ id: string; name: string }>;
  ai_agents: Array<{ id: string; name: string }>;
  human_agents: Array<{ id: string; name: string }>;
  statuses: string[];
  directions: string[];
}

export interface StreamUrlResponse {
  token: string;
  stream_url: string;
  download_url: string;
  expires_in_seconds: number;
  is_synthetic: boolean;
}

export interface CallHistoryFilters {
  campaign_id?: string[];
  ai_agent_id?: string[];
  human_agent_id?: string[];
  date_from?: string;
  date_to?: string;
  direction?: string;
  status?: string[];
  has_recording?: boolean;
  search?: string;
  cursor?: string;
  limit?: number;
}

export const callHistoryService = {
  async getFilterOptions(campaignId?: string): Promise<FilterOptionsResponse> {
    const q = campaignId ? `?campaign_id=${encodeURIComponent(campaignId)}` : "";
    return apiFetch<FilterOptionsResponse>(`/api/v1/call-history/filter-options${q}`);
  },

  async listCalls(
    filters: CallHistoryFilters = {},
    signal?: AbortSignal
  ): Promise<CallHistoryListResponse> {
    const params = new URLSearchParams();

    if (filters.campaign_id?.length) {
      filters.campaign_id.forEach((id) => params.append("campaign_id", id));
    }
    if (filters.ai_agent_id?.length) {
      filters.ai_agent_id.forEach((id) => params.append("ai_agent_id", id));
    }
    if (filters.human_agent_id?.length) {
      filters.human_agent_id.forEach((id) => params.append("human_agent_id", id));
    }
    if (filters.status?.length) {
      filters.status.forEach((st) => params.append("status", st));
    }
    if (filters.date_from) params.set("date_from", filters.date_from);
    if (filters.date_to) params.set("date_to", filters.date_to);
    if (filters.direction && filters.direction !== "ALL") params.set("direction", filters.direction);
    if (filters.has_recording !== undefined) params.set("has_recording", String(filters.has_recording));
    if (filters.search) params.set("search", filters.search);
    if (filters.cursor) params.set("cursor", filters.cursor);
    if (filters.limit) params.set("limit", String(filters.limit));

    const qs = params.toString() ? `?${params.toString()}` : "";
    return apiFetch<CallHistoryListResponse>(`/api/v1/call-history/calls${qs}`, { signal });
  },

  async getCallDetail(callId: string): Promise<CallHistoryDetail> {
    return apiFetch<CallHistoryDetail>(`/api/v1/call-history/calls/${callId}`);
  },

  async getStreamUrl(callId: string, segment: number = 0): Promise<StreamUrlResponse> {
    return apiFetch<StreamUrlResponse>(
      `/api/v1/call-history/calls/${callId}/recording/stream-url?segment=${segment}`
    );
  },

  getExportUrl(format: "csv" | "pdf", filters: CallHistoryFilters = {}): string {
    const params = new URLSearchParams();
    params.set("format", format);

    if (filters.campaign_id?.length) {
      filters.campaign_id.forEach((id) => params.append("campaign_id", id));
    }
    if (filters.ai_agent_id?.length) {
      filters.ai_agent_id.forEach((id) => params.append("ai_agent_id", id));
    }
    if (filters.human_agent_id?.length) {
      filters.human_agent_id.forEach((id) => params.append("human_agent_id", id));
    }
    if (filters.status?.length) {
      filters.status.forEach((st) => params.append("status", st));
    }
    if (filters.date_from) params.set("date_from", filters.date_from);
    if (filters.date_to) params.set("date_to", filters.date_to);
    if (filters.direction && filters.direction !== "ALL") params.set("direction", filters.direction);
    if (filters.has_recording !== undefined) params.set("has_recording", String(filters.has_recording));
    if (filters.search) params.set("search", filters.search);

    const token = getAuthToken();
    if (token) params.set("token", token);

    return `/api/v1/call-history/export?${params.toString()}`;
  },

  getSingleCallReportUrl(callId: string, format: "csv" | "pdf" = "csv"): string {
    const token = getAuthToken();
    const tokParam = token ? `&token=${encodeURIComponent(token)}` : "";
    return `/api/v1/call-history/calls/${callId}/report?format=${format}${tokParam}`;
  },

  async downloadExportCsv(filters: CallHistoryFilters = {}): Promise<void> {
    const url = this.getExportUrl("csv", filters);
    const token = getAuthToken();
    const headers: Record<string, string> = {};
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    const res = await fetch(url, { headers });
    if (!res.ok) {
      throw new Error(`Export failed with HTTP ${res.status}`);
    }
    const blob = await res.blob();
    const csvBlob = new Blob([blob], { type: "text/csv;charset=utf-8;" });
    const blobUrl = URL.createObjectURL(csvBlob);
    const a = document.createElement("a");
    a.href = blobUrl;
    const now = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 16);
    a.download = `call_history_export_${now}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
  },

  async downloadSingleCallCsv(callId: string): Promise<void> {
    const url = this.getSingleCallReportUrl(callId, "csv");
    const token = getAuthToken();
    const headers: Record<string, string> = {};
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    const res = await fetch(url, { headers });
    if (!res.ok) {
      throw new Error(`Single call report export failed with HTTP ${res.status}`);
    }
    const blob = await res.blob();
    const csvBlob = new Blob([blob], { type: "text/csv;charset=utf-8;" });
    const blobUrl = URL.createObjectURL(csvBlob);
    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = `call_report_${callId.slice(0, 8)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
  },
};

function getAuthToken(): string {
  if (typeof window === "undefined") return "";
  try {
    const s = sessionStorage.getItem("GBZ-auth") || localStorage.getItem("GBZ-auth");
    if (s) {
      const p = JSON.parse(s);
      if (p?.state?.token) return p.state.token;
    }
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith("GBZ-auth-")) {
        const val = localStorage.getItem(k);
        if (val) {
          const p = JSON.parse(val);
          if (p?.state?.token) return p.state.token;
        }
      }
    }
  } catch (_) {}
  return localStorage.getItem("token") || "";
}
