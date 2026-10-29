import { apiFetch } from "@/lib/api-client";

export interface SIPCarrier {
  id: string;
  business_id?: string | null;
  name: string;
  provider_type: "ASTERISK" | "TWILIO" | "FREEPBX" | "GENERIC_SIP" | "TATA" | "AIRTEL" | "JIO" | string;
  sip_host: string;
  sip_port: number;
  transport: "UDP" | "TCP" | "TLS" | string;
  auth_type: "CREDENTIAL" | "IP_BASED" | string;
  username?: string | null;
  has_password?: boolean;
  inbound_enabled: boolean;
  outbound_enabled: boolean;
  max_channels: number;
  status: "ACTIVE" | "INACTIVE" | "MAINTENANCE" | string;
  last_health_status: "HEALTHY" | "DEGRADED" | "UNREACHABLE" | "UNKNOWN" | string;
  last_health_latency_ms?: number | null;
  last_health_checked_at?: string | null;
  last_error_message?: string | null;
  trunk_count?: number;
  did_count?: number;
  created_at: string;
  updated_at: string;
}

export interface SIPTrunk {
  id: string;
  carrier_id: string;
  carrier_name?: string | null;
  carrier_host?: string | null;
  carrier_port?: number;
  carrier_status?: string | null;
  carrier_last_health?: string | null;
  business_id?: string | null;
  name: string;
  direction: "INBOUND" | "OUTBOUND" | "BIDIRECTIONAL" | string;
  max_concurrency: number;
  priority: number;
  proxy_server?: string | null;
  register_enabled: boolean;
  registration_status: "REGISTERED" | "UNREGISTERED" | "PEER_ACTIVE" | "FAILED" | string;
  status: "ACTIVE" | "DISABLED" | string;
  assigned_did_count?: number;
  created_at: string;
  updated_at: string;
}

export interface DIDNumber {
  id: string;
  business_id?: string | null;
  phone_number: string;
  name?: string | null;
  carrier_id?: string | null;
  carrier_name?: string | null;
  carrier_host?: string | null;
  trunk_id?: string | null;
  trunk_name?: string | null;
  assigned_campaign_id?: string | null;
  campaign_name?: string | null;
  routing_type: "AI_AGENT" | "HUMAN_AGENT" | "USER_GROUP" | "IVR" | "UNASSIGNED" | string;
  assigned_agent_id?: string | null;
  assigned_voice_agent_id?: string | null;
  agent_name?: string | null;
  assigned_group_id?: string | null;
  group_name?: string | null;
  is_outbound_caller_id: boolean;
  status: "ACTIVE" | "UNASSIGNED" | "SUSPENDED" | string;
  created_at: string;
  updated_at: string;
}

export interface CarrierRoutingPolicy {
  id?: string | null;
  business_id?: string | null;
  campaign_id?: string | null;
  primary_carrier_id: string;
  secondary_carrier_id?: string | null;
  max_retry_attempts: number;
  retry_on_status_codes: string[];
}

export interface ConnectionTestResult {
  success: boolean;
  carrier_id?: string;
  carrier_name?: string;
  trunk_id?: string;
  trunk_name?: string;
  sip_host: string;
  sip_port?: number;
  status: string;
  latency_ms: number;
  sip_code?: number | null;
  sip_reason?: string | null;
  user_agent?: string | null;
  error?: string | null;
}

export interface CarrierHealthLog {
  id: string;
  carrier_id: string;
  check_type: string;
  status: string;
  latency_ms: number;
  sip_code?: number | null;
  user_agent?: string | null;
  error_message?: string | null;
  checked_at: string;
}

export const carrierService = {
  // Carrier CRUD
  getCarriers: (status?: string) =>
    apiFetch<SIPCarrier[]>(status ? `/api/sip-carriers?status=${status}` : "/api/sip-carriers"),

  getCarrier: (id: string) => apiFetch<SIPCarrier>(`/api/sip-carriers/${id}`),

  createCarrier: (data: Partial<SIPCarrier> & { password?: string }) =>
    apiFetch<SIPCarrier>("/api/sip-carriers", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  updateCarrier: (id: string, data: Partial<SIPCarrier> & { password?: string }) =>
    apiFetch<SIPCarrier>(`/api/sip-carriers/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  deleteCarrier: (id: string) =>
    apiFetch<{ success: boolean; message: string }>(`/api/sip-carriers/${id}`, {
      method: "DELETE",
    }),

  testCarrierConnection: (id: string) =>
    apiFetch<ConnectionTestResult>(`/api/sip-carriers/${id}/test-connection`, {
      method: "POST",
    }),

  toggleCarrierStatus: (id: string, status: string) =>
    apiFetch<{ success: boolean; carrier_id: string; status: string }>(
      `/api/sip-carriers/${id}/status?status_value=${status}`,
      { method: "POST" }
    ),

  getHealthLogs: (id: string, limit = 20) =>
    apiFetch<CarrierHealthLog[]>(`/api/sip-carriers/${id}/health-logs?limit=${limit}`),

  // Routing Policies
  getRoutingPolicy: (campaignId?: string) =>
    apiFetch<CarrierRoutingPolicy>(
      campaignId
        ? `/api/sip-carriers/routing-policies/current?campaign_id=${campaignId}`
        : "/api/sip-carriers/routing-policies/current"
    ),

  saveRoutingPolicy: (policy: CarrierRoutingPolicy) =>
    apiFetch<CarrierRoutingPolicy>("/api/sip-carriers/routing-policies", {
      method: "POST",
      body: JSON.stringify(policy),
    }),

  // Trunk CRUD
  getTrunks: (carrierId?: string, status?: string) => {
    const params = new URLSearchParams();
    if (carrierId) params.append("carrier_id", carrierId);
    if (status) params.append("status", status);
    const query = params.toString() ? `?${params.toString()}` : "";
    return apiFetch<SIPTrunk[]>(`/api/sip-trunks${query}`);
  },

  getTrunk: (id: string) => apiFetch<SIPTrunk>(`/api/sip-trunks/${id}`),

  createTrunk: (data: Partial<SIPTrunk>) =>
    apiFetch<SIPTrunk>("/api/sip-trunks", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  updateTrunk: (id: string, data: Partial<SIPTrunk>) =>
    apiFetch<SIPTrunk>(`/api/sip-trunks/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  deleteTrunk: (id: string) =>
    apiFetch<{ success: boolean; message: string }>(`/api/sip-trunks/${id}`, {
      method: "DELETE",
    }),

  testTrunkConnection: (id: string) =>
    apiFetch<ConnectionTestResult>(`/api/sip-trunks/${id}/test-connection`, {
      method: "POST",
    }),

  // DID Inventory CRUD
  getDIDs: (carrierId?: string, trunkId?: string, status?: string) => {
    const params = new URLSearchParams();
    if (carrierId) params.append("carrier_id", carrierId);
    if (trunkId) params.append("trunk_id", trunkId);
    if (status) params.append("status", status);
    const query = params.toString() ? `?${params.toString()}` : "";
    return apiFetch<DIDNumber[]>(`/api/dids${query}`);
  },

  getDID: (id: string) => apiFetch<DIDNumber>(`/api/dids/${id}`),

  createDID: (data: Partial<DIDNumber>) =>
    apiFetch<DIDNumber>("/api/dids", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  updateDID: (id: string, data: Partial<DIDNumber>) =>
    apiFetch<DIDNumber>(`/api/dids/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  deleteDID: (id: string) =>
    apiFetch<{ success: boolean; message: string }>(`/api/dids/${id}`, {
      method: "DELETE",
    }),

  assignDID: (
    id: string,
    assignment: {
      assigned_campaign_id?: string | null;
      routing_type?: string;
      assigned_agent_id?: string | null;
      assigned_voice_agent_id?: string | null;
      assigned_group_id?: string | null;
    }
  ) =>
    apiFetch<DIDNumber>(`/api/dids/${id}/assign`, {
      method: "POST",
      body: JSON.stringify(assignment),
    }),

  syncInboundNumbers: () =>
    apiFetch<{ success: boolean; synced_count: number }>("/api/dids/sync-inbound", {
      method: "POST",
    }),
};
