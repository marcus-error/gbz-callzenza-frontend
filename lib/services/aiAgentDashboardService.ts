import { apiFetch } from "@/lib/api-client";

export interface CostMetric {
  available: boolean;
  amount?: number | null;
  reason?: string | null;
}

export interface AgentHeaderInfo {
  id: string;
  name: string;
  type: string;
  owner: string;
  source: string;
  phone_number: string;
  assigned_agent?: string | null;
  client_name?: string | null;
  status: string;
  created_at: string | null;
  last_updated_at: string | null;
  updated_at?: string | null;
  system_prompt?: string | null;
  voice_id?: string | null;
  language?: string | null;
}

export interface AgentKpis {
  total_calls: number;
  connected_calls: number;
  answered_calls: number;
  missed_failed_calls: number;
  avg_call_duration_seconds: number;
  avg_call_duration_formatted: string;
  success_rate_percentage: number;
  leads_in_queue: number;
  leads_completed: number;
  cost_metric?: CostMetric;
  total_cost_credits: number | null;
}

export interface ChartDataPoint {
  label: string;
  value: number;
  secondary_value?: number;
}

export interface HourlyActivityPoint {
  hour: number;
  day_of_week: number;
  count: number;
}

export interface AgentDashboardSummary {
  agent: AgentHeaderInfo;
  kpis: AgentKpis;
  outcome_distribution: Record<string, number>;
  hourly_activity: HourlyActivityPoint[];
  call_volume_trend: ChartDataPoint[];
}

export interface CallItem {
  call_id: string;
  lead_id?: string | null;
  lead_name: string;
  phone_number: string;
  start_time: string | null;
  duration_seconds: number;
  duration_formatted: string;
  status: string;
  outcome: string;
  disposition: string;
  sentiment: "POSITIVE" | "NEUTRAL" | "NEGATIVE";
  recording_url?: string | null;
  transcript?: string | null;
  ai_summary?: string | null;
  retry_count: number;
}

export interface CallDetailResponse {
  call_id: string;
  campaign_id?: string | null;
  agent_id?: string | null;
  agent_type: string;
  lead_id?: string | null;
  lead_name: string;
  phone_number: string;
  start_time?: string | null;
  end_time?: string | null;
  duration_seconds: number;
  duration_formatted: string;
  status: string;
  disposition: string;
  sentiment: string;
  recording_url?: string | null;
  transcript?: string | null;
  ai_summary?: string | null;
  turn_count: number;
  hangup_reason?: string | null;
  metadata?: Record<string, any>;
}

export interface CallsPageResponse {
  items: CallItem[];
  page: number;
  page_size: number;
  total: number;
  total_pages: number;
}

export interface QueueItem {
  id: string;
  lead_id: string;
  lead_name: string;
  phone_number: string;
  position: number;
  scheduled_time: string | null;
  attempts: number;
  next_retry_time: string | null;
  status: string;
}

export interface QueuePageResponse {
  items: QueueItem[];
  page: number;
  page_size: number;
  total: number;
  total_pages: number;
}

export interface HistoryItem {
  id: string;
  timestamp: string;
  event_type: string;
  title: string;
  description: string;
  actor: string;
  details?: Record<string, any> | null;
  badge_color?: string;
}

export interface HistoryPageResponse {
  items: HistoryItem[];
  page: number;
  page_size: number;
  total: number;
  total_pages: number;
}

export interface ReportBucket {
  date_label: string;
  total_calls: number;
  connected_calls: number;
  failed_calls: number;
  avg_duration_seconds: number;
  success_rate_percentage: number;
}

export interface ReportsResponse {
  granularity: string;
  items: ReportBucket[];
  total_calls: number;
  overall_success_rate: number;
}

export interface TranscriptSearchItem {
  call_id: string;
  lead_name: string;
  phone_number: string;
  start_time: string | null;
  duration_formatted: string;
  matched_snippet: string;
  full_transcript?: string | null;
  recording_url?: string | null;
  sentiment: string;
  outcome: string;
}

export interface TranscriptsSearchResponse {
  items: TranscriptSearchItem[];
  total: number;
  query: string;
}

export interface FilterOptionItem {
  label: string;
  value: string;
  count?: number | null;
}

export interface FilterOptionsResponse {
  statuses: FilterOptionItem[];
  dispositions: FilterOptionItem[];
  lead_libraries: FilterOptionItem[];
  sentiments: FilterOptionItem[];
}

export interface FilterParams {
  date_from?: string;
  date_to?: string;
  date_range?: string;
  start_date?: string; // frontend alias for date_from
  end_date?: string; // frontend alias for date_to
  status?: string | string[];
  disposition?: string | string[];
  outcome?: string; // frontend alias
  lead_library_id?: string | string[];
  source?: string; // frontend alias
  sentiment?: string | string[];
  duration_min?: number;
  duration_max?: number;
  min_duration?: number; // frontend alias
  max_duration?: number; // frontend alias
  retry_count?: number;
  search?: string;
  sort_by?: string;
  sort_order?: string;
  sort_dir?: string;
  page?: number;
  page_size?: number;
  granularity?: string;
  tz?: string;
}

/** Alias kept for backward-compatibility with portal imports */
export type DashboardFilters = FilterParams;

function buildQueryString(params?: FilterParams): string {
  if (!params) return "";
  const query = new URLSearchParams();

  for (const [key, rawVal] of Object.entries(params)) {
    if (rawVal === undefined || rawVal === null || rawVal === "" || rawVal === "ALL") {
      continue;
    }

    // Map frontend aliases
    let apiKey = key;
    if (key === "outcome") apiKey = "disposition";
    if (key === "source") apiKey = "lead_library_id";
    if (key === "min_duration") apiKey = "duration_min";
    if (key === "max_duration") apiKey = "duration_max";
    if (key === "sort_dir") apiKey = "sort_order";
    if (key === "start_date") apiKey = "date_from";
    if (key === "end_date") apiKey = "date_to";

    if (Array.isArray(rawVal)) {
      rawVal.forEach((v) => {
        if (v && v !== "ALL") query.append(apiKey, String(v));
      });
    } else {
      query.append(apiKey, String(rawVal));
    }
  }

  const qStr = query.toString();
  return qStr ? `?${qStr}` : "";
}

export const aiAgentDashboardService = {
  async getHeader(agentId: string, signal?: AbortSignal): Promise<AgentHeaderInfo> {
    return apiFetch<AgentHeaderInfo>(`/api/v1/agent-dashboard/${agentId}/header`, { signal });
  },

  async getSummary(agentId: string, filters?: FilterParams, signal?: AbortSignal): Promise<AgentDashboardSummary> {
    const qs = buildQueryString(filters);
    return apiFetch<AgentDashboardSummary>(`/api/v1/agent-dashboard/${agentId}/summary${qs}`, { signal });
  },

  async getCalls(agentId: string, params?: FilterParams, signal?: AbortSignal): Promise<CallsPageResponse> {
    const qs = buildQueryString(params);
    return apiFetch<CallsPageResponse>(`/api/v1/agent-dashboard/${agentId}/calls${qs}`, { signal });
  },

  async getCallDetail(agentId: string, callId: string, signal?: AbortSignal): Promise<CallDetailResponse> {
    return apiFetch<CallDetailResponse>(`/api/v1/agent-dashboard/${agentId}/calls/${callId}`, { signal });
  },

  async getQueue(agentId: string, params?: FilterParams, signal?: AbortSignal): Promise<QueuePageResponse> {
    const qs = buildQueryString(params);
    return apiFetch<QueuePageResponse>(`/api/v1/agent-dashboard/${agentId}/queue${qs}`, { signal });
  },

  async getHistory(agentId: string, params?: FilterParams, signal?: AbortSignal): Promise<HistoryPageResponse> {
    const qs = buildQueryString(params);
    return apiFetch<HistoryPageResponse>(`/api/v1/agent-dashboard/${agentId}/history${qs}`, { signal });
  },

  async getReports(agentId: string, params?: FilterParams, signal?: AbortSignal): Promise<ReportsResponse> {
    const qs = buildQueryString(params);
    return apiFetch<ReportsResponse>(`/api/v1/agent-dashboard/${agentId}/reports${qs}`, { signal });
  },

  async searchTranscripts(agentId: string, q: string, signal?: AbortSignal): Promise<TranscriptsSearchResponse> {
    const qs = q ? `?q=${encodeURIComponent(q)}` : "";
    return apiFetch<TranscriptsSearchResponse>(`/api/v1/agent-dashboard/${agentId}/transcripts${qs}`, { signal });
  },

  async getFilterOptions(agentId: string, signal?: AbortSignal): Promise<FilterOptionsResponse> {
    return apiFetch<FilterOptionsResponse>(`/api/v1/agent-dashboard/${agentId}/filter-options`, { signal });
  },

  async exportData(
    agentId: string,
    type: "csv" | "pdf" = "csv",
    tabOrFilters?: "calls" | "queue" | "reports" | FilterParams | any,
    filters?: FilterParams
  ): Promise<void> {
    let tab: "calls" | "queue" | "reports" = "calls";
    let activeFilters: FilterParams | undefined = filters;

    if (typeof tabOrFilters === "string") {
      tab = tabOrFilters as "calls" | "queue" | "reports";
    } else if (tabOrFilters && typeof tabOrFilters === "object") {
      activeFilters = tabOrFilters;
    }

    const qs = buildQueryString({ ...activeFilters, type, tab } as any);
    const downloadUrl = `/api/v1/agent-dashboard/${agentId}/export${qs}`;

    try {
      const response = await fetch(downloadUrl, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("GBZ-token") || ""}`,
        },
      });

      if (!response.ok) throw new Error("Failed to export dashboard report");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `agent_${agentId}_${tab}.${type}`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("[Dashboard Export] Export error:", err);
      window.open(downloadUrl, "_blank");
    }
  },
};
