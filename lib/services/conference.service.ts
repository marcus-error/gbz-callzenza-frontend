import { apiFetch } from "@/lib/api-client";

export interface ConferenceParticipant {
  id: string;
  participant_id: string;
  name: string;
  phone?: string;
  role: "CUSTOMER" | "HOST_AGENT" | "VOICE_AGENT" | "CLIENT" | string;
  role_label: string;
  status: "INVITED" | "RINGING" | "CONNECTED" | "FAILED" | "LEFT" | string;
  is_host: boolean;
  is_removable: boolean;
  joined_at: string;
  duration_seconds: number;
}

export interface ConferenceDetails {
  call_id: string;
  conference_sid: string;
  call_status: string;
  capacity: number;
  active_participants_count: number;
  is_full: boolean;
  participants: ConferenceParticipant[];
}

export const conferenceService = {
  getParticipants: (callId: string) =>
    apiFetch<ConferenceDetails & { success: boolean }>(`/api/conference/${encodeURIComponent(callId)}/participants`),

  inviteAgent: (callId: string, agentId: string, notes?: string) =>
    apiFetch<{
      success: boolean;
      status: string;
      message: string;
      conference_sid: string;
      call_id: string;
      transfer_id?: string;
      target_agent_id: string;
      target_agent_name: string;
      participants: ConferenceParticipant[];
    }>(`/api/conference/${encodeURIComponent(callId)}/invite-agent`, {
      method: "POST",
      body: JSON.stringify({ agent_id: agentId, target_agent_id: agentId, call_id: callId, notes }),
    }),

  removeParticipant: (callId: string, participantId: string) =>
    apiFetch<{
      success: boolean;
      message: string;
      call_id: string;
      conference_sid: string;
      participants: ConferenceParticipant[];
    }>(`/api/conference/${encodeURIComponent(callId)}/remove-participant`, {
      method: "POST",
      body: JSON.stringify({ participant_id: participantId }),
    }),

  acceptInvite: (callId: string) =>
    apiFetch<{
      success: boolean;
      status: string;
      message: string;
      call_id: string;
      conference_sid: string;
      participants: ConferenceParticipant[];
    }>(`/api/conference/${encodeURIComponent(callId)}/accept`, {
      method: "POST",
    }),

  rejectInvite: (callId: string, reason?: string) =>
    apiFetch<{
      success: boolean;
      status: string;
      message: string;
      call_id: string;
      participants: ConferenceParticipant[];
    }>(`/api/conference/${encodeURIComponent(callId)}/reject`, {
      method: "POST",
      body: JSON.stringify({ reason: reason || "Declined by agent" }),
    }),

  getStatus: (callId: string) =>
    apiFetch<{
      success: boolean;
      call_id: string;
      conference_sid: string;
      status: string;
      is_active: boolean;
      active_participants_count: number;
      capacity: number;
      is_full: boolean;
    }>(`/api/conference/${encodeURIComponent(callId)}/status`),
};
