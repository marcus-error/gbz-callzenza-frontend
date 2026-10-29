import { apiFetch, apiFetchBlob } from "@/lib/api-client";

export interface VoiceConfigItem {
  id: string;
  name: string;
  provider: "elevenlabs" | "murf" | "fish_audio" | "snapserve" | string;
  is_active: boolean;
  business_id?: string | null;
  voice_id?: string | null;
  voice_name?: string | null;
  model_id?: string | null;
  voice_url?: string | null;
  voice_link?: string | null;
  language?: string | null;
  masked_api_key?: string | null;
  has_api_key?: boolean;
  settings?: Record<string, any>;
  last_tested_at?: string | null;
  test_status?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
}

export interface CreateVoiceConfigDto {
  name: string;
  provider: string;
  api_key: string;
  voice_id?: string;
  voice_name?: string;
  model_id?: string;
  voice_url?: string;
  voice_link?: string;
  language?: string;
  is_active?: boolean;
  settings?: Record<string, any>;
}

export interface UpdateVoiceConfigDto {
  name?: string;
  api_key?: string;
  voice_id?: string;
  voice_name?: string;
  model_id?: string;
  voice_url?: string;
  voice_link?: string;
  language?: string;
  is_active?: boolean;
  settings?: Record<string, any>;
}

export interface ProviderVoice {
  id: string;
  name: string;
  voice_name?: string;
  provider: string;
  gender?: string;
  accent?: string;
  language?: string;
  preview_url?: string;
  category?: string;
  description?: string;
}

export interface VoiceTestResult {
  status: "success" | "failed";
  message: string;
  provider: string;
  details?: any;
}

export const voiceConfigService = {
  async getVoiceConfigs(params?: { provider?: string; is_active?: boolean }): Promise<VoiceConfigItem[]> {
    const query = new URLSearchParams();
    if (params?.provider) query.set("provider", params.provider);
    if (params?.is_active !== undefined) query.set("is_active", String(params.is_active));
    const qs = query.toString() ? `?${query.toString()}` : "";
    return apiFetch<VoiceConfigItem[]>(`/api/voice-configs${qs}`);
  },

  async getVoiceConfig(id: string): Promise<VoiceConfigItem> {
    return apiFetch<VoiceConfigItem>(`/api/voice-configs/${id}`);
  },

  async createVoiceConfig(data: CreateVoiceConfigDto): Promise<VoiceConfigItem> {
    return apiFetch<VoiceConfigItem>("/api/voice-configs", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  async updateVoiceConfig(id: string, data: UpdateVoiceConfigDto): Promise<VoiceConfigItem> {
    return apiFetch<VoiceConfigItem>(`/api/voice-configs/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  },

  async deleteVoiceConfig(id: string): Promise<{ status: string; message: string }> {
    return apiFetch<{ status: string; message: string }>(`/api/voice-configs/${id}`, {
      method: "DELETE",
    });
  },

  async testVoiceConfig(id: string): Promise<VoiceTestResult> {
    return apiFetch<VoiceTestResult>(`/api/voice-configs/${id}/test`, {
      method: "POST",
    });
  },

  async testVoiceConfigPayload(data: Partial<CreateVoiceConfigDto>): Promise<VoiceTestResult> {
    return apiFetch<VoiceTestResult>("/api/voice-configs/test", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  async fetchConfigVoices(id: string): Promise<ProviderVoice[]> {
    const res = await apiFetch<any>(`/api/voice-configs/${id}/voices`);
    return Array.isArray(res) ? res : res?.voices || [];
  },

  async fetchProviderVoices(data: { provider: string; api_key?: string; voice_url?: string }): Promise<ProviderVoice[]> {
    const res = await apiFetch<any>("/api/voice-configs/fetch-voices", {
      method: "POST",
      body: JSON.stringify(data),
    });
    return Array.isArray(res) ? res : res?.voices || [];
  },

  async previewVoiceAudio(params: {
    provider: string;
    voice_id: string;
    text?: string;
    api_key?: string;
    model_id?: string;
    voice_url?: string;
    credential_id?: string;
    config_id?: string;
    settings?: Record<string, any>;
  }): Promise<Blob> {
    const credId = params.config_id || params.credential_id;
    return apiFetchBlob("/api/voice-configs/preview", {
      method: "POST",
      body: JSON.stringify({
        provider: params.provider,
        voice_id: params.voice_id,
        text: params.text || "Hello! This is a preview of the selected voice for your GBZ campaigns.",
        api_key: params.api_key,
        model_id: params.model_id,
        voice_url: params.voice_url,
        credential_id: credId,
        config_id: credId,
        settings: params.settings || {},
      }),
    });
  },

  async getEdgeTtsStatus(): Promise<{ enabled: boolean; provider: string; message: string }> {
    return apiFetch<{ enabled: boolean; provider: string; message: string }>("/api/voice-configs/edge-tts-status");
  },

  async toggleEdgeTts(enabled?: boolean): Promise<{ enabled: boolean; provider: string; message: string }> {
    return apiFetch<{ enabled: boolean; provider: string; message: string }>("/api/voice-configs/edge-tts-toggle", {
      method: "POST",
      body: enabled !== undefined ? JSON.stringify({ enabled }) : undefined,
    });
  },
};
