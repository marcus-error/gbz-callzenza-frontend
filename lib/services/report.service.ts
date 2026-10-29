import { apiFetch } from "@/lib/api-client";

export interface ReportQueryParams {
  from_date?: string;
  to_date?: string;
  direction?: string;
  campaign_id?: string;
  agent_id?: string;
  status?: string;
  search?: string;
  page?: number;
  limit?: number;
}

export interface CallReportResponse {
  success: boolean;
  data: any[];
  summary: Record<string, any>;
  total: number;
  page: number;
  limit: number;
}

export interface GenericReportResponse {
  success: boolean;
  slug?: string;
  data: any[];
  summary?: any;
  total?: number;
  [key: string]: any;
}

export const reportService = {
  getCallsReport: (params?: ReportQueryParams) => {
    const q = new URLSearchParams();
    if (params?.from_date) q.append("from_date", params.from_date);
    if (params?.to_date) q.append("to_date", params.to_date);
    if (params?.direction) q.append("direction", params.direction);
    if (params?.campaign_id) q.append("campaign_id", params.campaign_id);
    if (params?.agent_id) q.append("agent_id", params.agent_id);
    if (params?.status) q.append("status", params.status);
    if (params?.search) q.append("search", params.search);
    if (params?.page) q.append("page", String(params.page));
    if (params?.limit) q.append("limit", String(params.limit));
    const str = q.toString();
    return apiFetch<CallReportResponse>(`/api/reports/calls${str ? `?${str}` : ""}`);
  },

  getAgentPerformance: (params?: ReportQueryParams) => {
    const q = new URLSearchParams();
    if (params?.from_date) q.append("from_date", params.from_date);
    if (params?.to_date) q.append("to_date", params.to_date);
    if (params?.campaign_id) q.append("campaign_id", params.campaign_id);
    if (params?.agent_id) q.append("agent_id", params.agent_id);
    const str = q.toString();
    return apiFetch<GenericReportResponse>(`/api/reports/agent-performance${str ? `?${str}` : ""}`);
  },

  getInboundSummary: (params?: ReportQueryParams) => {
    const q = new URLSearchParams();
    if (params?.from_date) q.append("from_date", params.from_date);
    if (params?.to_date) q.append("to_date", params.to_date);
    if (params?.campaign_id) q.append("campaign_id", params.campaign_id);
    const str = q.toString();
    return apiFetch<GenericReportResponse>(`/api/reports/inbound-summary${str ? `?${str}` : ""}`);
  },

  getOutboundSummary: (params?: ReportQueryParams) => {
    const q = new URLSearchParams();
    if (params?.from_date) q.append("from_date", params.from_date);
    if (params?.to_date) q.append("to_date", params.to_date);
    if (params?.campaign_id) q.append("campaign_id", params.campaign_id);
    const str = q.toString();
    return apiFetch<GenericReportResponse>(`/api/reports/outbound-summary${str ? `?${str}` : ""}`);
  },

  getUserTimeclock: (params?: ReportQueryParams) => {
    const q = new URLSearchParams();
    if (params?.from_date) q.append("from_date", params.from_date);
    if (params?.to_date) q.append("to_date", params.to_date);
    const str = q.toString();
    return apiFetch<GenericReportResponse>(`/api/reports/user-timeclock${str ? `?${str}` : ""}`);
  },

  getUserGroupTimeclockStatus: (params?: { report_date?: string }) => {
    const q = new URLSearchParams();
    if (params?.report_date) q.append("report_date", params.report_date);
    const str = q.toString();
    return apiFetch<{
      success: boolean;
      data: any[];
      summary: any;
      recent_changes: any[];
    }>(`/api/reports/user-group-timeclock-status${str ? `?${str}` : ""}`);
  },

  getUserTimeclockDetail: (params?: { user_id?: string; from_date?: string; to_date?: string }) => {
    const q = new URLSearchParams();
    if (params?.user_id) q.append("user_id", params.user_id);
    if (params?.from_date) q.append("from_date", params.from_date);
    if (params?.to_date) q.append("to_date", params.to_date);
    const str = q.toString();
    return apiFetch<{
      success: boolean;
      users_list: any[];
      selected_user: any;
      summary: any;
      timeline: any[];
      time_distribution: any[];
      calling_activity: any;
      session_history: any[];
    }>(`/api/reports/user-timeclock-detail${str ? `?${str}` : ""}`);
  },

  getGenericReport: (slug: string, params?: ReportQueryParams) => {
    const q = new URLSearchParams();
    if (params?.from_date) q.append("from_date", params.from_date);
    if (params?.to_date) q.append("to_date", params.to_date);
    if (params?.campaign_id) q.append("campaign_id", params.campaign_id);
    if (params?.agent_id) q.append("agent_id", params.agent_id);
    if (params?.status) q.append("status", params.status);
    if (params?.search) q.append("search", params.search);
    const str = q.toString();
    return apiFetch<GenericReportResponse>(`/api/reports/generic/${encodeURIComponent(slug)}${str ? `?${str}` : ""}`);
  },

  exportCampaignLeadsUrl: (campaignId: string, format: "csv" | "json" = "csv") => {
    return `/api/reports/campaign/${encodeURIComponent(campaignId)}/export-leads?format=${format}`;
  },

  getCampaignWiseReports: (params?: { status?: string; search?: string; page?: number; limit?: number }) => {
    const q = new URLSearchParams();
    if (params?.status) q.append("status", params.status);
    if (params?.search) q.append("search", params.search);
    if (params?.page) q.append("page", String(params.page));
    if (params?.limit) q.append("limit", String(params.limit));
    const str = q.toString();
    return apiFetch<CampaignWiseReportsResponse>(`/api/reports/campaigns/overall${str ? `?${str}` : ""}`);
  },

  getCampaignWiseDetail: (campaignId: string) => {
    return apiFetch<CampaignWiseDetailResponse>(`/api/reports/campaigns/${encodeURIComponent(campaignId)}`);
  },

  getCampaignWiseDownloadUrl: (campaignId: string, format: "excel" | "csv" = "excel") => {
    return `/api/reports/campaigns/${encodeURIComponent(campaignId)}/download?format=${format}`;
  },
};

export interface OverallSummaryCards {
  total_campaigns: number;
  total_leads_assigned: number;
  total_calls_attempted: number;
  total_connected_calls: number;
  total_unanswered_or_failed_calls: number;
  total_qualified_leads: number;
  total_not_qualified_leads: number;
  total_call_talk_time: string;
  total_call_talk_time_seconds: number;
  overall_connection_rate: number;
  overall_qualification_rate: number;
}

export interface CampaignWiseSummaryItem {
  campaign_id: string;
  campaign_name: string;
  campaign_status: string;
  agent_type: string;
  assigned_agent: string;
  client_name: string;
  target_client?: string;
  lead_list?: string;
  created_date?: string;
  total_leads_assigned: number;
  total_leads_attempted: number;
  total_calls_attempted?: number;
  total_calls_connected: number;
  total_calls_not_connected: number;
  total_qualified_leads: number;
  total_not_qualified_leads: number;
  total_call_duration: string;
  total_call_duration_seconds: number;
  avg_call_duration: string;
  avg_call_duration_seconds: number;
  campaign_start_time: string;
  campaign_start_time_iso?: string | null;
  campaign_end_time: string;
  campaign_end_time_iso?: string | null;
  last_activity: string;
  total_calls: number;
}

export interface CampaignWiseReportsResponse {
  success: boolean;
  total_campaigns: number;
  summary_cards?: OverallSummaryCards;
  page: number;
  limit: number;
  data: CampaignWiseSummaryItem[];
}

export interface CampaignWiseLeadItem {
  lead_id: string;
  lead_name: string;
  phone: string;
  email: string;
  company: string;
  lead_status: string;
  qualification_status: string;
  call_status: string;
  attempt_count: number;
  connection_status: string;
  call_start_time: string;
  call_end_time: string;
  duration: string;
  duration_seconds: number;
  disposition: string;
  transcript: string;
}

export interface CampaignWiseDetailResponse {
  success: boolean;
  campaign: {
    id: string;
    name: string;
    status: string;
    agent_type: string;
    client_name: string;
    client_phone: string;
    twilio_number: string;
    auto_dial_enabled: boolean;
    auto_dial_ratio: number;
    created_at: string;
    started_at: string;
    completed_at: string | null;
    last_activity: string;
  };
  performance_summary: {
    total_leads_assigned: number;
    total_leads_attempted: number;
    total_calls: number;
    total_calls_connected: number;
    total_calls_not_connected: number;
    total_qualified_leads: number;
    total_not_qualified_leads: number;
    total_call_duration: string;
    total_call_duration_seconds: number;
    avg_call_duration: string;
    avg_call_duration_seconds: number;
    connection_rate: string;
    qualification_rate: string;
  };
  dispositions: { label: string; count: number; color: string }[];
  call_statuses: { status: string; count: number }[];
  leads: CampaignWiseLeadItem[];
}
