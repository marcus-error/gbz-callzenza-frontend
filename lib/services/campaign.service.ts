import { apiFetch, apiUpload, apiFetchBlob } from "@/lib/api-client";

export interface MurfVoiceConfig {
  voice_id?: string;
  model?: string;
  style?: string;
  rate?: number;
  pitch?: number;
  format?: string;
  sample_rate?: number;
  channel_type?: string;
  volume_offset?: number;
}

export interface ElevenLabsVoiceConfig {
  voice_id?: string;
  model_id?: string;
  voice_link?: string;
  output_format?: string;
  stability?: number;
  similarity_boost?: number;
  style?: number;
  speed?: number;
  use_speaker_boost?: boolean;
}

export interface FishAudioVoiceConfig {
  reference_id?: string;
  model?: string;
  format?: string;
  temperature?: number;
  top_p?: number;
  latency?: string;
  speed?: number;
  volume?: number;
}

export interface SnapServeVoiceConfig {
  voice_id?: string;
  format?: string;
  sample_rate?: number;
}

export interface CampaignVoiceConfig {
  provider: "murf" | "elevenlabs" | "fish_audio" | "snapserve";
  credential_source?: "saved_credential" | "custom_key" | "env_fallback";
  credential_id?: string | null;
  api_key?: string | null;
  has_credential?: boolean;
  voice_id?: string;
  model_id?: string;
  voice_link?: string;
  language?: string;
  murf?: MurfVoiceConfig;
  elevenlabs?: ElevenLabsVoiceConfig;
  fish_audio?: FishAudioVoiceConfig;
  snapserve?: SnapServeVoiceConfig;
  is_active?: boolean;
}

export interface VoiceProviderMeta {
  id: "murf" | "elevenlabs" | "fish_audio" | "snapserve";
  name: string;
  description: string;
  default_model: string;
  models: Array<{ id: string; name: string; sample_rate?: number }>;
  default_voice: string;
  voices: Array<{ id: string; name: string; gender?: string; locale?: string }>;
  styles?: string[];
  supported_parameters: string[];
  has_env_fallback: boolean;
}

export interface SavedCredentialMeta {
  id: string;
  provider: string;
  label: string;
  masked_key: string;
  is_active: boolean;
}

export interface Campaign {
  id: string;
  business_id?: string;
  name: string;
  status: "IDLE" | "RUNNING" | "PAUSED" | "COMPLETED" | "FAILED";
  calling_mode?: "AI" | "VOICE";
  agent_type?: "AI_VOICE" | "HUMAN";
  agent_id?: string | null;
  voice_agent_id?: string | null;
  lead_group_id?: string | null;
  client_id?: string | null;
  client_name?: string;
  client_phone?: string;
  client_company?: string;
  twilio_number: string;
  carrier_id?: string | null;
  trunk_id?: string | null;
  caller_did_id?: string | null;
  sip_account_id?: string | null;
  sip_account_name?: string | null;
  sip_account_status?: string | null;
  sip_account_registration?: string | null;
  schedule?: Record<string, any>;
  voice_config?: CampaignVoiceConfig;
  started_at?: string;
  completed_at?: string;
  auto_dial_enabled?: boolean;
  auto_dial_ratio?: number;
  dialable_leads?: number;
  total_leads?: number;
  created_at?: string;
  updated_at?: string;
}

export interface CampaignLead {
  id: string;
  campaign_id: string;
  lead_id: string;
  status: "PENDING" | "CALLING" | "COMPLETED" | "FAILED" | "NO_ANSWER" | "BUSY";
  call_id: string | null;
  created_at: string;
}

export interface CampaignAiAgentDashboard {
  campaign: {
    id: string;
    name: string;
    status: string;
    agent_type: string;
    twilio_number: string;
    lead_group_name: string;
    client_name: string;
    created_at?: string | null;
    script?: string;
    auto_dial_enabled?: boolean;
    auto_dial_ratio?: number;
  };
  agent: {
    id?: string | null;
    name: string;
    status: string;
    voice_provider: string;
    voice_id: string;
    language: string;
    system_prompt: string;
    description: string;
  };
  lead_statistics: {
    total_leads: number;
    calls_made: number;
    connected: number;
    no_response: number;
    qualified: number;
    not_qualified: number;
    callback: number;
    dnc: number;
    pending: number;
  };
  call_statistics: {
    total_calls: number;
    inbound_calls: number;
    outbound_calls: number;
    connected_calls: number;
  };
  qualification_statistics: {
    total_leads: number;
    calls_attempted: number;
    connected: number;
    qualified: number;
    not_qualified: number;
    pending: number;
    qualification_rate: number;
  };
  inbound_configuration: {
    enabled: boolean;
    twilio_number: string;
    inbound_ai_agent: string;
    current_status: string;
    inbound_calls_count: number;
  };
  recent_calls: CampaignAiAgentCall[];
}

export interface CampaignAiAgentLeadsResponse {
  campaign_id: string;
  total_assigned?: number;
  total_returned: number;
  counts?: {
    total: number;
    pending: number;
    active: number;
    completed: number;
    failed: number;
    dnd: number;
  };
  pagination?: {
    limit: number;
    offset: number;
    total: number;
    has_more: boolean;
  };
  leads: CampaignAiAgentLead[];
}

export interface CampaignAiAgentLead {
  id: string;
  call_id?: string;
  name: string;
  phone: string;
  company: string;
  call_status: string;
  qualification: string;
  disposition: string;
  last_call: string;
  duration: number;
  agent: string;
  sentiment: string;
  intent: string;
}

export interface CampaignAiAgentCall {
  id: string;
  lead_name: string;
  phone: string;
  direction: "INBOUND" | "OUTBOUND";
  status: string;
  duration_seconds: number;
  qualification: string;
  disposition: string;
  sentiment: string;
  intent: string;
  created_at?: string | null;
  recording_url?: string;
  transcript?: string;
}

export interface CampaignInboundConfig {
  campaign_id: string;
  campaign_name: string;
  enabled: boolean;
  twilio_number: string;
  agent_id?: string | null;
  agent_name: string;
  status: string;
}

export const campaignService = {
  getTwilioNumber: () => apiFetch<{ twilio_phone_number: string; configured: boolean }>("/api/integrations/twilio/number"),
  list: () => apiFetch<Campaign[]>("/api/campaigns"),
  get: (id: string) => apiFetch<Campaign>(`/api/campaigns/${id}`),
  create: (data: {
    name: string;
    calling_mode?: string;
    agent_type?: string;
    agent_id?: string | null;
    voice_agent_id?: string | null;
    lead_group_id?: string | null;
    client_id?: string | null;
    client_name?: string;
    client_phone?: string;
    client_company?: string;
    twilio_number: string;
    carrier_id?: string | null;
    trunk_id?: string | null;
    caller_did_id?: string | null;
    sip_account_id?: string | null;
    lead_ids: string[];
    schedule?: Record<string, any>;
    auto_dial_enabled?: boolean;
    auto_dial_ratio?: number;
  }) => apiFetch<Campaign>("/api/campaigns", { method: "POST", body: JSON.stringify(data) }),
  update: (id: string, data: Partial<Campaign> & { lead_ids?: string[] }) =>
    apiFetch<Campaign>(`/api/campaigns/${id}`, { method: "PATCH", body: JSON.stringify(data) }),
  getLeads: (id: string) => apiFetch<CampaignLead[]>(`/api/campaigns/${id}/leads`),
  getClients: (id: string) =>
    apiFetch<{
      campaign_id: string;
      campaign_name: string;
      total_clients: number;
      clients: {
        id: string;
        client_id: string;
        name: string;
        phone: string;
        email?: string;
        company?: string;
        location?: string;
        status?: string;
        qualification_status?: string;
      }[];
    }>(`/api/campaigns/${id}/clients`),
  start: (id: string) => apiFetch<Campaign>(`/api/campaigns/${id}/start`, { method: "POST" }),
  pause: (id: string) => apiFetch<Campaign>(`/api/campaigns/${id}/pause`, { method: "POST" }),
  remove: (id: string) => apiFetch<void>(`/api/campaigns/${id}`, { method: "DELETE" }),
  getDialerStatus: (id: string) =>
    apiFetch<{ status: string; auto_dial_enabled: boolean; ratio: number; active_calls: number; available_slots: number }>(
      `/api/campaigns/${id}/dialer/status`
    ),
  startDialer: (id: string) => apiFetch<{ message: string }>(`/api/campaigns/${id}/dialer/start`, { method: "POST" }),
  pauseDialer: (id: string) => apiFetch<{ message: string }>(`/api/campaigns/${id}/dialer/pause`, { method: "POST" }),
  stopDialer: (id: string) => apiFetch<{ message: string }>(`/api/campaigns/${id}/dialer/stop`, { method: "POST" }),
  getActivePdStatus: (agent_id?: string) =>
    apiFetch<{
      status: string;
      auto_dial_enabled: boolean;
      agent_id?: string;
      active_agents_count?: number;
      total_agents_count?: number;
      campaign_status?: string;
      ratio: number;
      campaign_id?: string;
      campaign_name?: string;
    }>(`/api/voice-agents/pd-status${agent_id ? `?agent_id=${agent_id}` : ""}`),
  toggleActivePdStatus: (enable?: boolean, agent_id?: string) =>
    apiFetch<{
      message: string;
      status: string;
      auto_dial_enabled: boolean;
      agent_id?: string;
      agent_name?: string;
      active_agents_count?: number;
      total_agents_count?: number;
      campaign_id?: string;
    }>("/api/voice-agents/pd-toggle", {
      method: "POST",
      body: JSON.stringify({ enable, agent_id }),
    }),
  uploadPdf: (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    return apiUpload<{ filename: string; url: string; extracted_text?: string }>("/api/campaigns/upload-pdf", formData);
  },
  previewSpeech: (data: {
    script: string;
    lang?: string;
    lead_name?: string;
    agent_name?: string;
    voice_id?: string;
  }) =>
    apiFetch<{
      audio_url: string;
      segments: Array<{ type: string; text?: string; emotion?: string; duration?: number }>;
      total_speech_segments: number;
      total_pause_duration: number;
      detected_emotions: string[];
    }>("/api/campaigns/speech-preview", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  getAiAgentDashboard: (id: string) =>
    apiFetch<CampaignAiAgentDashboard>(`/api/campaigns/${id}/ai-agent/dashboard`),
  getAiAgentLeads: (
    id: string,
    params?: { status_filter?: string; limit?: number; offset?: number }
  ) => {
    const q = new URLSearchParams();
    if (params?.status_filter) q.set("status_filter", params.status_filter);
    if (params?.limit) q.set("limit", String(params.limit));
    if (params?.offset) q.set("offset", String(params.offset));
    const qs = q.toString();
    return apiFetch<CampaignAiAgentLeadsResponse>(
      `/api/campaigns/${id}/ai-agent/leads${qs ? `?${qs}` : ""}`
    );
  },
  getAiAgentCalls: (id: string, params?: { limit?: number; offset?: number }) => {
    const q = new URLSearchParams();
    if (params?.limit) q.set("limit", String(params.limit));
    if (params?.offset) q.set("offset", String(params.offset));
    const qs = q.toString();
    return apiFetch<{ campaign_id: string; total_calls: number; calls: CampaignAiAgentCall[] }>(
      `/api/campaigns/${id}/ai-agent/calls${qs ? `?${qs}` : ""}`
    );
  },
  getInboundConfig: (id: string) =>
    apiFetch<CampaignInboundConfig>(`/api/campaigns/${id}/inbound`),
  updateInboundConfig: (
    id: string,
    data: { enabled: boolean; twilio_number?: string; agent_id?: string }
  ) =>
    apiFetch<{ success: boolean; message: string; enabled: boolean; twilio_number: string; campaign_id: string }>(
      `/api/campaigns/${id}/inbound`,
      {
        method: "PUT",
        body: JSON.stringify(data),
      }
    ),
  getVoiceProviders: () =>
    apiFetch<{
      providers: VoiceProviderMeta[];
      saved_credentials: SavedCredentialMeta[];
    }>("/api/campaigns/voice-providers"),
  getProviderVoices: (provider: string) =>
    apiFetch<{
      provider: string;
      voices: Array<{ id: string; name: string; gender?: string; locale?: string; preview_url?: string }>;
    }>(`/api/campaigns/voice-providers/${provider}/voices`),
  previewVoiceAudio: (data: {
    text?: string;
    voice_config: CampaignVoiceConfig;
  }): Promise<Blob> => {
    return apiFetchBlob("/api/campaigns/voice-preview", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },
};