"use client";

import { useState, useEffect, useCallback } from "react";
import { 
  X, Search, UserPlus, Users, UserCheck, AlertCircle, Loader2, 
  CheckCircle2, User, Phone, Trash2, Clock, ShieldCheck, Sparkles
} from "lucide-react";
import { voiceAgentService, VoiceAgent } from "@/lib/services/voice-agent.service";
import { conferenceService, ConferenceParticipant, ConferenceDetails } from "@/lib/services/conference.service";
import { useAuthStore } from "@/lib/store";
import { useWebSocketSync, WebSocketEventMessage } from "@/lib/hooks/useWebSocketSync";

interface AddVoiceAgentModalProps {
  isOpen: boolean;
  onClose: () => void;
  callId?: string;
  clientId?: string;
  leadId?: string;
  onAgentAdded?: (agent: VoiceAgent) => void;
  onTransferSuccess?: (targetAgent: any, type: any) => void;
}

export function AddVoiceAgentModal({
  isOpen,
  onClose,
  callId,
  clientId,
  leadId,
  onAgentAdded,
}: AddVoiceAgentModalProps) {
  const [agents, setAgents] = useState<VoiceAgent[]>([]);
  const [loadingAgents, setLoadingAgents] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [invitingAgentId, setInvitingAgentId] = useState<string | null>(null);
  const [removingPartId, setRemovingPartId] = useState<string | null>(null);

  // Live Conference Details
  const [conferenceData, setConferenceData] = useState<ConferenceDetails | null>(null);
  const [loadingConf, setLoadingConf] = useState(false);

  // Status Alerts
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const effectiveCallId = callId || "active-live-call";

  // Fetch live conference participants
  const fetchConference = useCallback((showLoading = false) => {
    if (!effectiveCallId) return;
    if (showLoading) setLoadingConf(true);
    conferenceService
      .getParticipants(effectiveCallId)
      .then((res) => {
        setConferenceData(res);
      })
      .catch((err: any) => {
        console.warn("Could not fetch conference participants:", err);
      })
      .finally(() => {
        if (showLoading) setLoadingConf(false);
      });
  }, [effectiveCallId]);

  // Fetch available inbound voice agents directory
  const fetchInboundAgents = useCallback((showLoading = true) => {
    if (showLoading) setLoadingAgents(true);
    voiceAgentService
      .list({ agent_type: "INBOUND" })
      .then((res) => {
        const currentUser = useAuthStore.getState().user;
        const currentUserId = currentUser?.id;
        const currentUserEmail = currentUser?.email?.toLowerCase();

        // Filter for eligible inbound voice agents
        const inboundOnly = (res || []).filter((agent) => {
          // Exclude current user initiating the conference
          if (currentUserId && (agent.user_id === currentUserId || agent.id === currentUserId)) return false;
          if (currentUserEmail && agent.email?.toLowerCase() === currentUserEmail) return false;

          // Exclude Admins
          const name = (agent.name || "").toLowerCase();
          const email = (agent.email || "").toLowerCase();
          if (name.includes("admin") || email.includes("admin")) return false;

          // Exclude Outbound only
          const dir = (agent.direction || "").toUpperCase();
          const type = (agent.agent_type || "").toUpperCase();
          if (dir === "OUTBOUND" || type === "OUTBOUND" || dir === "ADMIN" || type === "ADMIN") return false;

          return true;
        });

        setAgents(inboundOnly);
      })
      .catch((err: any) => {
        console.error("Failed to load inbound voice agents:", err);
        setErrorMsg(err?.message || "Failed to load active voice agents list.");
      })
      .finally(() => {
        if (showLoading) setLoadingAgents(false);
      });
  }, []);

  // Listen to WebSocket events so participant joining, disconnecting, or agent status changes sync instantly
  useWebSocketSync((msg: WebSocketEventMessage) => {
    if (!isOpen) return;
    if (
      msg.event === "CONFERENCE_PARTICIPANTS_UPDATED" ||
      msg.event === "voice_agent_transfer_accepted" ||
      msg.event === "CONFERENCE_3WAY_ACTIVE" ||
      msg.event === "CONFERENCE_PARTICIPANT_LEFT" ||
      msg.event === "CLIENT_CONNECTED"
    ) {
      fetchConference(false);
      fetchInboundAgents(false);
    }
    if (msg.event === "voice_agent_status_updated" || msg.event === "agent_status_changed") {
      fetchInboundAgents(false);
    }
  });

  useEffect(() => {
    if (isOpen) {
      setErrorMsg(null);
      setSuccessMsg(null);
      setInvitingAgentId(null);
      fetchConference(true);
      fetchInboundAgents(true);
    }
  }, [isOpen, fetchConference, fetchInboundAgents]);

  if (!isOpen) return null;

  // Search filter
  const filteredAgents = agents.filter((agent) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      (agent.name && agent.name.toLowerCase().includes(q)) ||
      (agent.email && agent.email.toLowerCase().includes(q)) ||
      (agent.phone && agent.phone.includes(q)) ||
      (agent.skills && agent.skills.some((s) => s.toLowerCase().includes(q)))
    );
  });

  // Check if an agent is already invited or connected in the conference
  const isAgentInConference = (agent: VoiceAgent) => {
    if (!conferenceData?.participants) return false;
    return conferenceData.participants.some(
      (p) =>
        (p.participant_id === agent.id || p.participant_id === agent.user_id) &&
        (p.status === "CONNECTED" || p.status === "INVITED" || p.status === "RINGING")
    );
  };

  const getAgentConferenceStatus = (agent: VoiceAgent) => {
    if (!conferenceData?.participants) return null;
    const match = conferenceData.participants.find(
      (p) =>
        (p.participant_id === agent.id || p.participant_id === agent.user_id) &&
        (p.status === "CONNECTED" || p.status === "INVITED" || p.status === "RINGING")
    );
    return match ? match.status : null;
  };

  // Handle Inviting / Adding a Voice Agent into the Conference
  const handleAddAgentToConference = async (agent: VoiceAgent) => {
    setErrorMsg(null);
    setSuccessMsg(null);
    setInvitingAgentId(agent.id);

    try {
      const res = await conferenceService.inviteAgent(effectiveCallId, agent.id);
      setSuccessMsg(`✅ Voice Agent "${agent.name}" invited into conference! Connecting...`);
      fetchConference(false);
      if (onAgentAdded) {
        onAgentAdded(agent);
      }
    } catch (err: any) {
      console.error("Failed to add voice agent to conference:", err);
      setErrorMsg(err?.message || `Failed to add "${agent.name}" to conference.`);
    } finally {
      setInvitingAgentId(null);
    }
  };

  // Handle Removing a participant
  const handleRemoveParticipant = async (participantId: string, name: string) => {
    if (!confirm(`Remove ${name} from this active conference call?`)) return;
    setErrorMsg(null);
    setRemovingPartId(participantId);

    try {
      await conferenceService.removeParticipant(effectiveCallId, participantId);
      setSuccessMsg(`Participant "${name}" removed from conference.`);
      fetchConference(false);
    } catch (err: any) {
      console.error("Failed to remove participant:", err);
      setErrorMsg(err?.message || "Failed to remove participant from conference.");
    } finally {
      setRemovingPartId(null);
    }
  };

  const getStatusBadge = (status?: string) => {
    const s = (status || "available").toLowerCase();
    if (s === "available" || s === "online" || s === "active") {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Available
        </span>
      );
    } else if (s === "busy" || s === "in_call" || s === "on_call") {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          Busy
        </span>
      );
    } else {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
          Offline
        </span>
      );
    }
  };

  const getParticipantStatusBadge = (status: string) => {
    const s = status.toUpperCase();
    if (s === "CONNECTED") {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          Connected
        </span>
      );
    } else if (s === "INVITED" || s === "RINGING") {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-100 text-amber-800 border border-amber-300">
          <Loader2 className="w-2.5 h-2.5 animate-spin text-amber-600" />
          Connecting...
        </span>
      );
    } else if (s === "FAILED" || s === "REJECTED") {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-rose-100 text-rose-800 border border-rose-300">
          Failed to Join
        </span>
      );
    } else {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-slate-100 text-slate-600 border border-slate-300">
          Left
        </span>
      );
    }
  };

  const activeCount = conferenceData?.active_participants_count || 2;
  const maxCapacity = conferenceData?.capacity || 5;
  const isFull = conferenceData?.is_full || false;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white border border-slate-200 rounded-2xl shadow-2xl w-full max-w-xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-4.5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-slate-100">Add Voice Agent to Call</h3>
                <span className="px-2 py-0.5 bg-indigo-500/30 text-indigo-300 border border-indigo-400/30 rounded-full text-[10px] font-extrabold uppercase tracking-wider">
                  Live Conference
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Bridge another Voice Agent into the ongoing call. Everyone stays connected simultaneously.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 flex-1 overflow-y-auto space-y-5">
          {/* Error Banner */}
          {errorMsg && (
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 flex items-start gap-2 animate-in slide-in-from-top-1">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div className="flex-1 font-medium">{errorMsg}</div>
            </div>
          )}

          {/* Success Banner */}
          {successMsg && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-start gap-2 animate-in slide-in-from-top-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div className="flex-1 font-medium">{successMsg}</div>
            </div>
          )}

          {/* 1. Live Conference Participants Section */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-3.5 space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Conference Participants
                </h4>
              </div>
              <span className={`text-[11px] font-mono font-extrabold px-2 py-0.5 rounded-md ${
                isFull ? "bg-amber-100 text-amber-800" : "bg-white text-slate-600 border border-slate-200"
              }`}>
                {activeCount} / {maxCapacity} Connected
              </span>
            </div>

            {loadingConf ? (
              <div className="flex items-center justify-center py-4 text-xs text-slate-400 gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-indigo-600" />
                <span>Syncing live participants...</span>
              </div>
            ) : (
              <div className="space-y-2">
                {(conferenceData?.participants || []).map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center justify-between p-2.5 bg-white border border-slate-200 rounded-lg shadow-2xs hover:border-slate-300 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                        p.role === "CUSTOMER" 
                          ? "bg-blue-50 text-blue-700 border border-blue-200" 
                          : p.is_host 
                          ? "bg-indigo-50 text-indigo-700 border border-indigo-200" 
                          : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      }`}>
                        {p.role === "CUSTOMER" ? <User className="w-4 h-4" /> : <Phone className="w-4 h-4" />}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-900 truncate">
                            {p.name}
                          </span>
                          <span className="text-[10px] text-slate-400 font-medium truncate">
                            ({p.role_label})
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-500">
                          {p.phone || "Active Audio Channel"}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {getParticipantStatusBadge(p.status)}

                      {p.is_removable && p.status !== "LEFT" && (
                        <button
                          type="button"
                          onClick={() => handleRemoveParticipant(p.id, p.name)}
                          disabled={removingPartId === p.id}
                          title="Remove from conference"
                          className="p-1 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded transition-colors cursor-pointer disabled:opacity-50"
                        >
                          {removingPartId === p.id ? (
                            <Loader2 className="w-3.5 h-3.5 animate-spin text-rose-600" />
                          ) : (
                            <Trash2 className="w-3.5 h-3.5" />
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 2. Available Voice Agents Directory to Add */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Available Voice Agents
                </label>
                <p className="text-[11px] text-slate-500">
                  Select an agent to add as another participant in the conference.
                </p>
              </div>
              <span className="text-xs text-indigo-600 font-bold bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">
                {filteredAgents.length} Agents
              </span>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search agents by name, email, or skill..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              />
            </div>

            {/* Agent List */}
            <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
              {loadingAgents ? (
                <div className="flex flex-col items-center justify-center py-8 text-slate-400 space-y-2">
                  <Loader2 className="w-6 h-6 animate-spin text-indigo-600" />
                  <span className="text-xs font-medium">Loading Voice Agents directory...</span>
                </div>
              ) : filteredAgents.length === 0 ? (
                <div className="text-center py-6 bg-slate-50 border border-dashed border-slate-200 rounded-xl text-slate-500 text-xs">
                  {searchQuery ? "No matching Voice Agents found." : "No other Voice Agents available."}
                </div>
              ) : (
                filteredAgents.map((agent) => {
                  const inConference = isAgentInConference(agent);
                  const confStatus = getAgentConferenceStatus(agent);
                  const isInviting = invitingAgentId === agent.id;
                  const isOffline = (agent.status || "").toLowerCase() === "offline";

                  return (
                    <div
                      key={agent.id}
                      className={`p-3 rounded-xl border transition-all flex items-center justify-between ${
                        inConference
                          ? "border-emerald-200 bg-emerald-50/40"
                          : "border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/20 bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 text-indigo-700 flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
                          {agent.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-extrabold text-slate-900 truncate">
                              {agent.name}
                            </span>
                            {getStatusBadge(agent.status)}
                          </div>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[11px] text-slate-500 truncate font-mono">
                              {agent.email || agent.phone || "Voice Agent"}
                            </span>
                            {agent.skills && agent.skills.length > 0 && (
                              <span className="text-[9px] bg-slate-100 text-slate-600 px-1.5 py-0.2 rounded font-semibold truncate">
                                {agent.skills[0]}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="shrink-0 ml-3">
                        {inConference ? (
                          <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-lg text-xs font-bold">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            {confStatus === "INVITED" ? "Connecting..." : "In Conference"}
                          </span>
                        ) : isFull ? (
                          <span className="text-[11px] text-slate-400 font-semibold px-2 py-1">
                            Full (5/5)
                          </span>
                        ) : isOffline ? (
                          <span className="text-[11px] text-slate-400 font-semibold px-2 py-1">
                            Offline
                          </span>
                        ) : (
                          <button
                            type="button"
                            onClick={() => handleAddAgentToConference(agent)}
                            disabled={isInviting || isFull}
                            className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white rounded-lg text-xs font-bold shadow-xs hover:shadow transition-all inline-flex items-center gap-1.5 cursor-pointer disabled:cursor-not-allowed"
                          >
                            {isInviting ? (
                              <>
                                <Loader2 className="w-3 h-3 animate-spin" />
                                <span>Inviting...</span>
                              </>
                            ) : (
                              <>
                                <UserPlus className="w-3.5 h-3.5" />
                                <span>Add to Call</span>
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span>Adding an agent does not disconnect customer or Agent 1.</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-xl text-xs font-bold transition-colors cursor-pointer shadow-2xs"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
