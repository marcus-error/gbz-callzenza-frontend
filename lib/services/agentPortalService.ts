import { apiFetch } from "@/lib/api-client";
import {
  AgentDashboardSummary,
  CallsPageResponse,
  CallDetailResponse,
  HistoryPageResponse,
  QueuePageResponse,
  TranscriptsSearchResponse,
  FilterOptionsResponse,
  DashboardFilters,
} from "./aiAgentDashboardService";

export interface PortalUserInfo {
  id: string;
  email: string;
  full_name: string;
  role: string;
  business_id?: string | null;
  access_scope: "ALL_AGENTS" | "SELECTED_AGENTS";
  assigned_agent_ids: string[];
  is_active: boolean;
  created_at?: string | null;
}

export interface PortalLoginResponse {
  access_token: string;
  business_id?: string | null;
  tenant_id?: string | null;
  role: string;
  token_type: string;
  user: PortalUserInfo;
}

export interface PortalAgentItem {
  id: string;
  name: string;
  type: string;
  status: string;
  owner: string;
  source: string;
  phone_number: string;
  total_calls: number;
  last_activity?: string | null;
  created_at?: string | null;
}

export interface PortalAgentsPageResponse {
  items: PortalAgentItem[];
  page: number;
  page_size: number;
  total: number;
  total_pages: number;
}

export interface PortalBlacklistItem {
  id: string;
  phone: string;
  name: string;
  status: string;
  reason?: string | null;
  source?: string | null;
  added_at?: string | null;
}

export interface PortalBlacklistResponse {
  items: PortalBlacklistItem[];
  page: number;
  page_size: number;
  total: number;
  total_pages: number;
  available: boolean;
}

export interface PortalVoiceItem {
  call_id: string;
  customer_name: string;
  customer_phone: string;
  agent_name?: string | null;
  agent_id?: string | null;
  transfer_status: string;
  direction: string;
  duration_seconds: number;
  initiated_at?: string | null;
  recording_url?: string | null;
}

export interface PortalVoiceResponse {
  items: PortalVoiceItem[];
  page: number;
  page_size: number;
  total: number;
  total_pages: number;
  available: boolean;
  reason?: string | null;
}

export interface PortalQualifiedLeadItem {
  lead_id: string;
  name: string;
  phone: string;
  company?: string | null;
  qualification_status: string;
  score: number;
  ai_summary?: string | null;
  qualified_at?: string | null;
}

export interface PortalQualifiedResponse {
  items: PortalQualifiedLeadItem[];
  page: number;
  page_size: number;
  total: number;
  total_pages: number;
  available: boolean;
}

export interface PortalCompletedCallItem {
  call_id: string;
  destination: string;
  customer_name: string;
  duration_seconds: number;
  duration_formatted: string;
  status: string;
  outcome?: string | null;
  sentiment?: string | null;
  recording_url?: string | null;
  completed_at?: string | null;
}

export interface PortalCompletedResponse {
  items: PortalCompletedCallItem[];
  page: number;
  page_size: number;
  total: number;
  total_pages: number;
  available: boolean;
}

export interface PortalRecordingItem {
  call_id: string;
  customer_name: string;
  phone_number: string;
  duration_seconds: number;
  duration_formatted: string;
  recording_url: string;
  status: string;
  created_at?: string | null;
}

export interface PortalRecordingsResponse {
  items: PortalRecordingItem[];
  page: number;
  page_size: number;
  total: number;
  total_pages: number;
  available: boolean;
}

function buildQuery(params: Record<string, any>): string {
  const q = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null || value === "") continue;
    if (Array.isArray(value)) {
      value.forEach((v) => q.append(key, String(v)));
    } else {
      q.append(key, String(value));
    }
  }
  const str = q.toString();
  return str ? `?${str}` : "";
}

export const agentPortalService = {
  // -------------------------------------------------------------------------
  // Auth
  // -------------------------------------------------------------------------
  login: async (credentials: { email: string; password: string }): Promise<PortalLoginResponse> => {
    return apiFetch<PortalLoginResponse>("/api/v1/agent-portal/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
      skipAuth: true,
    });
  },

  me: async (): Promise<PortalUserInfo> => {
    return apiFetch<PortalUserInfo>("/api/v1/agent-portal/auth/me");
  },

  logout: async (): Promise<{ status: string }> => {
    return apiFetch<{ status: string }>("/api/v1/agent-portal/auth/logout", {
      method: "POST",
    });
  },

  // -------------------------------------------------------------------------
  // Agents List
  // -------------------------------------------------------------------------
  listAgents: async (params: {
    search?: string;
    status?: string;
    page?: number;
    page_size?: number;
  } = {}): Promise<PortalAgentsPageResponse> => {
    const qs = buildQuery(params);
    return apiFetch<PortalAgentsPageResponse>(`/api/v1/agent-portal/agents${qs}`);
  },

  // -------------------------------------------------------------------------
  // Agent End-to-End Report
  // -------------------------------------------------------------------------
  getOverview: async (
    agentId: string,
    filters: DashboardFilters = {}
  ): Promise<AgentDashboardSummary> => {
    const qs = buildQuery(filters);
    return apiFetch<AgentDashboardSummary>(`/api/v1/agent-portal/agents/${agentId}/overview${qs}`);
  },

  getCalls: async (
    agentId: string,
    filters: DashboardFilters = {}
  ): Promise<CallsPageResponse> => {
    const qs = buildQuery(filters);
    return apiFetch<CallsPageResponse>(`/api/v1/agent-portal/agents/${agentId}/calls${qs}`);
  },

  getCallDetail: async (
    agentId: string,
    callId: string
  ): Promise<CallDetailResponse> => {
    return apiFetch<CallDetailResponse>(`/api/v1/agent-portal/agents/${agentId}/calls/${callId}`);
  },

  getHistory: async (
    agentId: string,
    page: number = 1,
    pageSize: number = 20
  ): Promise<HistoryPageResponse> => {
    const qs = buildQuery({ page, page_size: pageSize });
    return apiFetch<HistoryPageResponse>(`/api/v1/agent-portal/agents/${agentId}/history${qs}`);
  },

  getRecordings: async (
    agentId: string,
    page: number = 1,
    pageSize: number = 20
  ): Promise<PortalRecordingsResponse> => {
    const qs = buildQuery({ page, page_size: pageSize });
    return apiFetch<PortalRecordingsResponse>(`/api/v1/agent-portal/agents/${agentId}/recordings${qs}`);
  },

  getTranscripts: async (
    agentId: string,
    q: string = ""
  ): Promise<TranscriptsSearchResponse> => {
    const qs = buildQuery({ q });
    return apiFetch<TranscriptsSearchResponse>(`/api/v1/agent-portal/agents/${agentId}/transcripts${qs}`);
  },

  getQueue: async (
    agentId: string,
    page: number = 1,
    pageSize: number = 20,
    status?: string,
    search?: string
  ): Promise<QueuePageResponse> => {
    const qs = buildQuery({ page, page_size: pageSize, status, search });
    return apiFetch<QueuePageResponse>(`/api/v1/agent-portal/agents/${agentId}/queue${qs}`);
  },

  getBlacklist: async (
    agentId: string,
    page: number = 1,
    pageSize: number = 20,
    search?: string
  ): Promise<PortalBlacklistResponse> => {
    const qs = buildQuery({ page, page_size: pageSize, search });
    return apiFetch<PortalBlacklistResponse>(`/api/v1/agent-portal/agents/${agentId}/blacklist${qs}`);
  },

  getVoice: async (
    agentId: string,
    page: number = 1,
    pageSize: number = 20
  ): Promise<PortalVoiceResponse> => {
    const qs = buildQuery({ page, page_size: pageSize });
    return apiFetch<PortalVoiceResponse>(`/api/v1/agent-portal/agents/${agentId}/voice${qs}`);
  },

  getQualified: async (
    agentId: string,
    page: number = 1,
    pageSize: number = 20
  ): Promise<PortalQualifiedResponse> => {
    const qs = buildQuery({ page, page_size: pageSize });
    return apiFetch<PortalQualifiedResponse>(`/api/v1/agent-portal/agents/${agentId}/qualified${qs}`);
  },

  getCompleted: async (
    agentId: string,
    page: number = 1,
    pageSize: number = 20
  ): Promise<PortalCompletedResponse> => {
    const qs = buildQuery({ page, page_size: pageSize });
    return apiFetch<PortalCompletedResponse>(`/api/v1/agent-portal/agents/${agentId}/completed${qs}`);
  },

  getFilterOptions: async (agentId: string): Promise<FilterOptionsResponse> => {
    return apiFetch<FilterOptionsResponse>(`/api/v1/agent-portal/agents/${agentId}/filter-options`);
  },

  getCampaigns: async (agentId: string): Promise<{
    agent_id: string;
    campaigns: Array<{
      id: string;
      name: string;
      status: string;
      agent_type: string;
      lead_group_name: string;
      started_at: string | null;
      created_at: string | null;
      updated_at: string | null;
      phone_number: string;
      total_calls: number;
    }>;
    total: number;
  }> => {
    return apiFetch(`/api/v1/agent-portal/agents/${agentId}/campaigns`);
  },

  getExportUrl: (
    agentId: string,
    type: "csv" | "pdf",
    tab: "calls" | "queue" | "reports" = "calls",
    filters: DashboardFilters = {}
  ): string => {
    const qs = buildQuery({ type, tab, ...filters });
    return `/api/v1/agent-portal/agents/${agentId}/export${qs}`;
  },
};
