import { apiFetch } from "@/lib/api-client";

export interface ScriptStepItem {
  name: string;
  status: "DONE" | "CURRENT" | "PENDING";
}

export interface StartTestSessionResponse {
  session_id: string;
  campaign_name: string;
  lead_id?: string;
  customer_name?: string;
  customer_phone?: string;
  customer_company?: string;
  agent_name: string;
  agent_id: string;
  greeting: string;
  audio_url?: string;
  current_step: string;
  script_steps: ScriptStepItem[];
  collected_data: Record<string, string>;
  qualification_status: string;
  call_id?: string;
  telephony_status?: string;
  telephony_error?: string;
}

export interface TestMessageResponse {
  response: string;
  audio_url?: string;
  current_step: string;
  progress_index: number;
  script_steps: ScriptStepItem[];
  collected_data: Record<string, string>;
  qualification_status: string;
  terminal_hangup?: boolean;
  end_call?: boolean;
  is_dnd?: boolean;
  call_disposition?: string;
}

export interface EndTestSessionResponse {
  success: boolean;
  session_id?: string;
  collected_data?: Record<string, string>;
  qualification_status?: string;
  conversation_count?: number;
}

export const localVoiceTestService = {
  start: (campaignId: string, leadId?: string, force?: boolean) =>
    apiFetch<StartTestSessionResponse>("/api/local-voice-test/start", {
      method: "POST",
      body: JSON.stringify({ campaign_id: campaignId, lead_id: leadId, force }),
    }),

  sendMessage: (sessionId: string, message: string) =>
    apiFetch<TestMessageResponse>("/api/local-voice-test/message", {
      method: "POST",
      body: JSON.stringify({ session_id: sessionId, user_message: message, message }),
    }),

  talkToAgent: (sessionId: string, campaignId?: string, leadId?: string, notes?: string) =>
    apiFetch<{
      success: boolean;
      response: string;
      is_transferred: boolean;
      transfer_status: string;
      assigned_expert?: { id: string; name: string; email: string };
      assigned_agent_name?: string;
      target_agent_name?: string;
    }>("/api/local-voice-test/talk-to-agent", {
      method: "POST",
      body: JSON.stringify({ session_id: sessionId, campaign_id: campaignId, lead_id: leadId, notes }),
    }),

  end: (sessionId: string, durationSeconds?: number) =>
    apiFetch<EndTestSessionResponse>("/api/local-voice-test/end", {
      method: "POST",
      body: JSON.stringify({ session_id: sessionId, duration_seconds: durationSeconds }),
    }),
};
