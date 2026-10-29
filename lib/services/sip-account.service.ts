import { apiFetch } from "@/lib/api-client";

export interface SIPAccountDID {
  id: string;
  phone_number: string;
  friendly_name?: string | null;
  status?: string;
  is_outbound_caller_id?: boolean;
  sip_account_id?: string | null;
  organization_id?: string | null;
  created_at?: string | null;
}

export interface SIPAccount {
  id: string;
  organization_id: string;
  organization_name?: string | null;
  name: string;
  username: string;
  auth_username?: string | null;
  domain?: string | null;
  host: string;
  port: number;
  transport: "udp" | "tcp" | "tls" | string;
  outbound_proxy?: string | null;
  caller_id?: string | null;
  direction: "outbound" | "inbound" | "both" | string;
  enabled: boolean;
  registration_status: "registered" | "unreachable" | "pending" | "disabled" | "error" | string;
  last_health_status?: "healthy" | "unreachable" | "unknown" | string | null;
  last_health_latency_ms?: number | null;
  last_health_checked_at?: string | null;
  last_error_message?: string | null;
  max_channels: number;
  has_password: boolean;
  masked_password: string;
  assigned_campaigns_count: number;
  dids?: SIPAccountDID[];
  is_default?: boolean;
  settings?: Record<string, any> | null;
  sip_server?: string | null;
  sip_login?: string | null;
  sip_public_address?: string | null;
  voicemail_number?: string | null;
  dial_plan?: string | null;
  webhook_base_url?: string | null;
  additional_dids?: string[];
  hide_caller_id?: boolean;
  media_encryption?: boolean;
  publish_presence?: boolean;
  allow_ip_rewrite?: boolean;
  ice?: boolean;
  disable_session_timers?: boolean;
  use_auth_user_in_from?: boolean;
  extension?: string | null;
  dialing_prefix?: string | null;
  display_name?: string | null;
  refresh_interval?: number;
  keep_alive_interval?: number;
  local_ip?: string | null;
  rtp_ip?: string | null;
  rtp_port?: number | null;
  sip_ws_url?: string | null;
  error_code?: string | null;
  sip_status_code?: number | null;
  suggested_action?: string | null;
  retryable?: boolean | null;
  registration_diagnostics?: RegistrationDiagnostics | null;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface RegistrationDiagnostics {
  status?: string;
  error_code?: string | null;
  message?: string;
  error?: string | null;
  sip_status_code?: number | null;
  sip_status_reason?: string | null;
  check_type?: string | null;
  retryable?: boolean;
  suggested_action?: string | null;
  last_checked_at?: string | null;
}

export interface SIPAccountCreateInput {
  organization_id?: string;
  name: string;
  username: string;
  password?: string;
  auth_username?: string;
  domain?: string;
  host: string;
  port?: number;
  transport?: string;
  outbound_proxy?: string;
  caller_id?: string;
  direction?: string;
  enabled?: boolean;
  max_channels?: number;
  settings?: Record<string, any>;
  sip_server?: string;
  sip_login?: string;
  sip_public_address?: string;
  voicemail_number?: string;
  dial_plan?: string;
  webhook_base_url?: string;
  additional_dids?: string[];
  hide_caller_id?: boolean;
  media_encryption?: boolean;
  publish_presence?: boolean;
  allow_ip_rewrite?: boolean;
  ice?: boolean;
  disable_session_timers?: boolean;
  use_auth_user_in_from?: boolean;
  extension?: string;
  dialing_prefix?: string;
  display_name?: string;
  refresh_interval?: number;
  keep_alive_interval?: number;
  local_ip?: string;
  rtp_ip?: string;
  rtp_port?: number;
  sip_ws_url?: string;
  is_default?: boolean;
}

export interface SIPAccountUpdateInput {
  organization_id?: string;
  name?: string;
  username?: string;
  password?: string;
  auth_username?: string;
  domain?: string;
  host?: string;
  port?: number;
  transport?: string;
  outbound_proxy?: string;
  caller_id?: string;
  direction?: string;
  enabled?: boolean;
  max_channels?: number;
  settings?: Record<string, any>;
  sip_server?: string;
  sip_login?: string;
  sip_public_address?: string;
  voicemail_number?: string;
  dial_plan?: string;
  webhook_base_url?: string;
  additional_dids?: string[];
  hide_caller_id?: boolean;
  media_encryption?: boolean;
  publish_presence?: boolean;
  allow_ip_rewrite?: boolean;
  ice?: boolean;
  disable_session_timers?: boolean;
  use_auth_user_in_from?: boolean;
  extension?: string;
  dialing_prefix?: string;
  display_name?: string;
  refresh_interval?: number;
  keep_alive_interval?: number;
  local_ip?: string;
  rtp_ip?: string;
  rtp_port?: number;
  sip_ws_url?: string;
  is_default?: boolean;
}

// Alias for backward compatibility with components that import SIPAccountOut
export type SIPAccountOut = SIPAccount;

export interface SIPAccountTestResult {
  account_id: string;
  reachable: boolean;
  latency_ms: number;
  transport: string;
  check_type?: string | null;
  sip_status_code?: number | null;
  sip_status_reason?: string | null;
  dns_resolved_ip?: string | null;
  error?: string | null;
  error_code?: string | null;
  suggested_action?: string | null;
  retryable?: boolean | null;
  timestamp: string;
}

export interface SIPAccountRegisterResult {
  account_id: string;
  status: string;
  message: string;
  is_registered: boolean;
  last_error?: string | null;
  error_code?: string | null;
  sip_status_code?: number | null;
  retryable?: boolean;
  suggested_action?: string | null;
  last_checked_at?: string | null;
  timestamp: string;
}

export const sipAccountService = {
  async list(params?: { enabled_only?: boolean; direction?: string; organization_id?: string }): Promise<SIPAccount[]> {
    const q = new URLSearchParams();
    if (params?.enabled_only) q.set("enabled_only", "true");
    if (params?.direction) q.set("direction", params.direction);
    if (params?.organization_id) q.set("organization_id", params.organization_id);
    const qs = q.toString() ? `?${q.toString()}` : "";
    return apiFetch<SIPAccount[]>(`/api/sip-accounts${qs}`);
  },

  async register(id: string): Promise<SIPAccountRegisterResult> {
    return apiFetch<SIPAccountRegisterResult>(`/api/sip-accounts/${id}/register`, {
      method: "POST",
    });
  },

  async get(id: string): Promise<SIPAccount> {
    return apiFetch<SIPAccount>(`/api/sip-accounts/${id}`);
  },

  async create(data: SIPAccountCreateInput): Promise<SIPAccount> {
    return apiFetch<SIPAccount>("/api/sip-accounts", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  async update(id: string, data: SIPAccountUpdateInput): Promise<SIPAccount> {
    return apiFetch<SIPAccount>(`/api/sip-accounts/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  },

  async delete(id: string): Promise<{ message: string; id: string }> {
    return apiFetch<{ message: string; id: string }>(`/api/sip-accounts/${id}`, {
      method: "DELETE",
    });
  },

  async testConnection(id: string): Promise<SIPAccountTestResult> {
    return apiFetch<SIPAccountTestResult>(`/api/sip-accounts/${id}/test-connection`, {
      method: "POST",
    });
  },

  async toggleStatus(id: string, enabled?: boolean): Promise<{ id: string; name: string; enabled: boolean }> {
    return apiFetch<{ id: string; name: string; enabled: boolean }>(`/api/sip-accounts/${id}/toggle-status`, {
      method: "POST",
      body: enabled !== undefined ? JSON.stringify({ enabled }) : undefined,
    });
  },

  async setDefault(id: string): Promise<SIPAccount> {
    return apiFetch<SIPAccount>(`/api/sip-accounts/${id}/set-default`, {
      method: "POST",
    });
  },

  async getSuperAdminOverview(): Promise<SIPAccount[]> {
    return apiFetch<SIPAccount[]>("/api/sip-accounts/super-admin/overview");
  },

  async getDids(id: string): Promise<SIPAccountDID[]> {
    return apiFetch<SIPAccountDID[]>(`/api/sip-accounts/${id}/dids`);
  },

  async assignDids(id: string, didIds: string[]): Promise<SIPAccountDID[]> {
    return apiFetch<SIPAccountDID[]>(`/api/sip-accounts/${id}/dids`, {
      method: "POST",
      body: JSON.stringify({ did_ids: didIds }),
    });
  },

  async unassignDid(id: string, didId: string): Promise<{ status: string; did_id: string; sip_account_id: string }> {
    return apiFetch<{ status: string; did_id: string; sip_account_id: string }>(`/api/sip-accounts/${id}/dids/${didId}`, {
      method: "DELETE",
    });
  },
};

export default sipAccountService;
