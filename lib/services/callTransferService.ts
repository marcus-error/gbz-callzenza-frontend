import { apiFetch } from "@/lib/api-client";

export interface IntentCheckResponse {
  has_intent: boolean;
  confidence: number;
  language: string;
  matched_phrase?: string | null;
  requires_confirmation: boolean;
  reason: string;
}

export interface CallTransferResponse {
  transfer_id: string;
  call_id: string;
  status: string;
  assigned_agent_id?: string | null;
  assigned_agent_name?: string | null;
  assigned_agent_phone?: string | null;
  message: string;
  is_fallback: boolean;
  details?: Record<string, any>;
}

export interface AgentPresenceItem {
  agent_id: string;
  agent_name: string;
  agent_email?: string;
  status: string;
  is_available: boolean;
  skills: string[];
  current_call_id?: string | null;
  last_status_change?: string | null;
}

export interface AgentPresenceListResponse {
  agents: AgentPresenceItem[];
  total_available: number;
  total_agents: number;
}

export interface TransferInitiateParams {
  call_id: string;
  session_id?: string;
  campaign_id?: string;
  lead_id?: string;
  customer_name?: string;
  customer_phone?: string;
  language?: string;
  notes?: string;
  transcript?: string;
  target_agent_id?: string;
}

export const callTransferService = {
  async checkIntent(text: string, signal?: AbortSignal): Promise<IntentCheckResponse> {
    return apiFetch<IntentCheckResponse>("/api/v1/call-transfer/intent", {
      method: "POST",
      body: JSON.stringify({ text }),
      signal,
    });
  },

  async initiateTransfer(params: TransferInitiateParams, signal?: AbortSignal): Promise<CallTransferResponse> {
    return apiFetch<CallTransferResponse>("/api/v1/call-transfer/initiate", {
      method: "POST",
      body: JSON.stringify(params),
      signal,
    });
  },

  async acceptTransfer(transferId: string, agentId?: string, notes?: string): Promise<any> {
    return apiFetch(`/api/v1/call-transfer/${transferId}/accept`, {
      method: "POST",
      body: JSON.stringify({ agent_id: agentId, notes }),
    });
  },

  async declineTransfer(transferId: string, agentId?: string, reason?: string): Promise<any> {
    return apiFetch(`/api/v1/call-transfer/${transferId}/decline`, {
      method: "POST",
      body: JSON.stringify({ agent_id: agentId, reason }),
    });
  },

  async timeoutTransfer(transferId: string): Promise<any> {
    return apiFetch(`/api/v1/call-transfer/${transferId}/timeout`, {
      method: "POST",
    });
  },

  async completeTransfer(transferId: string): Promise<any> {
    return apiFetch(`/api/v1/call-transfer/${transferId}/complete`, {
      method: "POST",
    });
  },

  async getPresenceList(): Promise<AgentPresenceListResponse> {
    return apiFetch<AgentPresenceListResponse>("/api/v1/call-transfer/presence/list");
  },

  async updatePresence(agentId: string, status: string): Promise<any> {
    return apiFetch("/api/v1/call-transfer/presence/update", {
      method: "POST",
      body: JSON.stringify({ agent_id: agentId, status }),
    });
  },
};
