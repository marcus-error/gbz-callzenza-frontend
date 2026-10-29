"use client";



import { useAuthStore, useActiveCallStore, parseIsoTimestampMs } from "@/lib/store";

import { useEffect, useState, useRef, useCallback, useMemo } from "react";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import AudioDeviceCheckModal from "@/components/campaign/AudioDeviceCheckModal";

import { DialControlPanel } from "@/components/DialControlPanel";

import { ActiveCallPanel } from "@/components/ActiveCallPanel";

import { SelectClientModal } from "@/components/SelectClientModal";

import { leadService, Lead, extractLeadFieldsFromRow } from "@/lib/services/lead.service";

import { campaignService } from "@/lib/services/campaign.service";

import { leadAssignmentService, LeadAssignmentRecord, QueueItem } from "@/lib/services/lead-assignment.service";

import { callService } from "@/lib/services/call.service";

import { transferService } from "@/lib/services/transfer.service";

import { useWebSocketSync, WebSocketEventMessage } from "@/lib/hooks/useWebSocketSync";

import MessagesPage from "@/components/messages/MessagesPage";

import { AssignmentHistoryDetailView } from "@/components/AssignmentHistoryDetailView";

import { AssignmentHistoryCustomerList } from "@/components/AssignmentHistoryCustomerList";

import { 

  agentDashboardService, 

  DashboardStats, 

  DetailedCallLog, 

  TotalTimeBreakdown, 

  QueueCallItem, 

  HeldCallItem 

} from "@/lib/services/agent-dashboard.service";

import { 

  Play, Pause, Phone, CheckCircle2, XCircle, Clock, UserCheck, 

  ShieldAlert, FileText, Activity, X, Search, Calendar, Filter, PhoneIncoming, AlertTriangle, Mic, Eye, Users, Upload, Download, MessageSquare

} from "lucide-react";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

import { telephonyAudioManager } from "@/lib/services/telephony-audio.service";



export default function VoiceAgentDashboard() {

  const router = useRouter();

  const searchParams = useSearchParams();

  const pathname = usePathname();

  const tab = searchParams.get("tab");

  const { user } = useAuthStore();

  const setGlobalCallState = useActiveCallStore((s) => s.setCallState);

  const [hydrated, setHydrated] = useState(false);



  // Uploaded Lead Lists Selection

  const [leadLists, setLeadLists] = useState<any[]>([]);

  const [selectedLeadListId, setSelectedLeadListId] = useState<string | null>(null);

  const [showLeadListModal, setShowLeadListModal] = useState(false);

  const [leadListCustomers, setLeadListCustomers] = useState<any[]>([]);

  const [loadingLeadListCustomers, setLoadingLeadListCustomers] = useState(false);

  const [leadListModalFilter, setLeadListModalFilter] = useState<"ALL" | "QUALIFIED" | "NOT_QUALIFIED" | "PENDING" | "FAILED">("ALL");

  const [leadListModalSearch, setLeadListModalSearch] = useState("");

  const [isUploadingCsv, setIsUploadingCsv] = useState(false);

  const [isExporting, setIsExporting] = useState<string | null>(null);

  const csvFileInputRef = useRef<HTMLInputElement | null>(null);



  const handleExportLeads = async (format: "csv" | "xlsx" = "csv") => {

    try {

      setIsExporting(format);

      await agentDashboardService.exportLeadsCsv(format);

    } catch (err: any) {

      console.error(`Export ${format.toUpperCase()} failed:`, err);

      alert(`Export failed: ${err.message || `Could not export ${format.toUpperCase()}`}`);

    } finally {

      setIsExporting(null);

    }

  };



  const handleDirectCsvUpload = async (file: File) => {

    try {

      setIsUploadingCsv(true);

      const activeCampId = (campaignScriptData as any)?.id;

      const preview = await leadService.preview(file);

      const mappedLeads = preview.rows.map((row) => extractLeadFieldsFromRow(row));



      const res = await leadService.importMapped(mappedLeads, null, activeCampId || null, file.name);



      // Refresh lead lists

      const lists = await agentDashboardService.getLeadLists();

      setLeadLists(lists);

      const newGroupId = (res as any)?.lead_group_id;

      if (newGroupId) {

        setSelectedLeadListId(newGroupId);

      } else if (lists.length > 0) {

        const match = lists.find((l: any) => l.name === file.name || l.id === newGroupId);

        if (match) setSelectedLeadListId(match.id);

        else setSelectedLeadListId(lists[0].id);

      }

      alert(`Successfully imported ${res.leads_created} customers from ${file.name}!`);

    } catch (err: any) {

      console.error("CSV Upload failed:", err);

      alert(`Upload failed: ${err.message || "Invalid CSV"}`);

    } finally {

      setIsUploadingCsv(false);

    }

  };



  const queryCampaignId = searchParams.get("campaign_id");

  const queryPdInactive = searchParams.get("pd_inactive");



  useEffect(() => {

    agentDashboardService.getLeadLists().then((lists) => {

      setLeadLists(lists);

      if (queryCampaignId) {

        const found = lists.find(l => l.id === queryCampaignId || l.campaign_id === queryCampaignId);

        if (found) {

          setSelectedLeadListId(found.id);

        } else {

          setSelectedLeadListId(queryCampaignId);

        }

      } else if (lists.length > 0 && !selectedLeadListId) {

        setSelectedLeadListId(lists[0].id);

      }

    }).catch(console.error);

  }, [queryCampaignId]);



  // 3-way live call transfer state

  const [incomingTransfer, setIncomingTransfer] = useState<{

    transfer_id: string;

    call_id: string;

    transfer_type?: string;

    is_3way?: boolean;

    client_name: string;

    client_phone: string;

    from_agent_name: string;

    lead_id?: string;

    lead?: any;

    company?: string;

    email?: string;

    location?: string;

    requirement?: string;

    campaign_id?: string;

    campaign_client_name?: string;

    campaign_client_phone?: string;

    notes?: string;

  } | null>(null);

  const [incomingTransferMsg, setIncomingTransferMsg] = useState<string | null>(null);



  // Real-time call timestamps & independent participant timers

  const [customerConnectedAt, setCustomerConnectedAt] = useState<string | null>(null);

  const [clientConnectedAt, setClientConnectedAt] = useState<string | null>(null);

  const [clientDisconnectedAt, setClientDisconnectedAt] = useState<string | null>(null);

  const [clientDuration, setClientDuration] = useState<number>(0);

  const [telephonyStatus, setTelephonyStatus] = useState<string>("IDLE");



  // WebSocket sync for incoming call transfer requests & real-time call events

  useWebSocketSync((msg: WebSocketEventMessage) => {

    const isTargetAgent = Boolean(
      user && (
        msg.to_agent_id === user.id ||
        msg.to_voice_agent_id === user.id ||
        (msg as any).target_agent_id === user.id ||
        (msg as any).target_user_id === user.id ||
        (user.email && (msg as any).to_agent_email && (msg as any).to_agent_email.toLowerCase().trim() === user.email.toLowerCase().trim()) ||
        (user.full_name && (msg as any).to_agent_name && (msg as any).to_agent_name.toLowerCase().trim() === user.full_name.toLowerCase().trim()) ||
        ((msg as any).to_expert_id && (user as any).expert_id && (msg as any).to_expert_id === (user as any).expert_id) ||
        ((msg as any).target_expert_id && (user as any).expert_id && (msg as any).target_expert_id === (user as any).expert_id)
      )
    );

    if (
      (msg.event === "TRANSFER_REQUESTED" || msg.event === "voice_agent_transferred" || msg.event === "transfer.requested" || msg.event === "transfer.ringing") &&
      isTargetAgent
    ) {

      const l = (msg as any).lead;

      const cName = msg.client_name || (msg as any).customer_name || (l ? `${l.first_name || ''} ${l.last_name || ''}`.trim() : "") || (msg as any).lead_name || "Client";

      const cPhone = msg.client_phone || (msg as any).customer_phone || l?.phone || (msg as any).lead_phone || "";

      const cEmail = l?.email || (msg as any).lead_email || "";

      const cComp = l?.company || (msg as any).lead_company || "";

      const cLoc = l?.location || (msg as any).lead_location || "";

      const cReq = l?.requirement || (msg as any).lead_requirement || (msg as any).notes || "";

      const campId = (msg as any).campaign_id || l?.campaign_id || "";

      const campClientName = (msg as any).campaign_client_name || "";

      const campClientPhone = (msg as any).campaign_client_phone || "";



      setIncomingTransfer({
        transfer_id: msg.transfer_id || msg.call_session_id || msg.call_id || "",
        call_id: msg.call_session_id || msg.call_id || "",
        transfer_type: ((msg as any).transfer_type || (msg as any).type || "warm").toLowerCase(),
        is_3way: true,
        client_name: cName,

        client_phone: cPhone,

        from_agent_name: msg.from_voice_agent_name || msg.from_agent_name || (msg as any).ai_agent_name || "Voice Agent",

        lead_id: (msg as any).lead_id || (msg as any).client_id || l?.id,

        lead: l,

        company: cComp,

        email: cEmail,

        location: cLoc,

        requirement: cReq,

        campaign_id: campId,

        campaign_client_name: campClientName,

        campaign_client_phone: campClientPhone,

        notes: (msg as any).notes || "",

      });

      setIncomingTransferMsg(null);

      try {
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.frequency.setValueAtTime(587.33, audioCtx.currentTime);
        osc.frequency.setValueAtTime(880, audioCtx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.8);
        osc.start(audioCtx.currentTime);
        osc.stop(audioCtx.currentTime + 0.8);
      } catch (_) {}

    } else if (

      msg.event === "LEAD_ASSIGNED" &&

      (

        msg.to_agent_id === user?.id ||

        (msg as any).to_voice_agent_id === user?.id ||

        (user?.email && (msg as any).to_agent_email === user?.email) ||

        (user?.full_name && (msg as any).to_agent_name === user?.full_name)

      )

    ) {

      loadDashboardData();

      const l = (msg as any).lead;

      if (l) {

        if (!activeLead) {

          setActiveLead(l as any);

        }

        if (l.phone && !number) {

          setNumber(l.phone);

        }

        if ((msg as any).campaign_id) {

          fetchAndApplyCampaignScript((msg as any).campaign_id);

        }

      }

    } else if (msg.event === "TRANSFER_CANCELLED" && incomingTransfer && msg.transfer_id === incomingTransfer.transfer_id) {

      setIncomingTransfer(null);

      alert("Incoming transfer request was cancelled by the initiating agent.");

    } else if (
      msg.event === "voice_agent_transfer_accepted" || 
      msg.event === "CONFERENCE_3WAY_ACTIVE" || 
      msg.event === "CALL_TRANSFERRED_AWAY"
    ) {
      const isTarget = Boolean(
        user?.id && (
          msg.to_voice_agent_id === user.id ||
          msg.to_agent_id === user.id ||
          (msg as any).target_agent_id === user.id ||
          (msg as any).target_user_id === user.id
        )
      );
      const isSource = Boolean(
        user?.id && (
          msg.from_voice_agent_id === user.id ||
          msg.from_agent_id === user.id
        )
      );
      const isWarmTransfer = Boolean(
        msg.event === "CONFERENCE_3WAY_ACTIVE" || 
        (msg as any).is_3way === true || 
        (msg as any).transfer_type === "warm" || 
        (msg as any).transfer_type === "three_way"
      );

      // Stop hold music immediately on all agents
      if ((window as any).telephonyHoldMusicAudio) {
        try { (window as any).telephonyHoldMusicAudio.pause(); } catch (_) {}
        (window as any).telephonyHoldMusicAudio = null;
      }
      try { window.dispatchEvent(new CustomEvent("hold-music-stopped")); } catch (_) {}

      if (isTarget) {
        // Agent 2: Transfer accepted. Establish two-way audio bridge with customer and Agent 1.
        const targetCallId = msg.call_id || msg.call_session_id || activeCallId;
        setCallActive(true);
        if (targetCallId) setActiveCallId(targetCallId);
        setTelephonyStatus(isWarmTransfer ? "CONFERENCE_3WAY_ACTIVE" : "HUMAN_HANDLING");
        setActiveCallAgentType("HUMAN");
        setStats((prev) => ({ ...prev, agent_status: "ON CALL" }));
        if (telephonyAudioManager && targetCallId) {
          const token = useAuthStore.getState().token;
          telephonyAudioManager.startBargeIn(targetCallId, token || undefined).catch((e) => {
            console.warn("[VoiceAgentDashboard] Agent 2 audio bridge startup error:", e);
          });
        }
      } else if (isSource && isWarmTransfer) {
        // Agent 1: Warm 3-way conference. Keep audio bridge live so Agent 1, Agent 2, and Customer communicate simultaneously.
        const sourceCallId = msg.call_id || msg.call_session_id || activeCallId;
        setCallActive(true);
        if (sourceCallId) setActiveCallId(sourceCallId);
        setTelephonyStatus("CONFERENCE_3WAY_ACTIVE");
        setActiveCallAgentType("HUMAN");
        setStats((prev) => ({ ...prev, agent_status: "ON CALL" }));
        // Ensure audio bridge is running for Agent 1.
        // preWarmAudioContext() attempts AudioContext.resume() — a no-op if already running,
        // and a best-effort resume if suspended (may be deferred to next gesture by browser policy).
        if (telephonyAudioManager && sourceCallId) {
          const token = useAuthStore.getState().token;
          telephonyAudioManager.preWarmAudioContext().catch(() => {});
          telephonyAudioManager.startBargeIn(sourceCallId, token || undefined).catch((e) => {
            console.warn("[VoiceAgentDashboard] Agent 1 warm conference audio refresh notice:", e);
          });
        }
      } else if (isSource && !isWarmTransfer && (msg.event === "CALL_TRANSFERRED_AWAY" || msg.event === "voice_agent_transfer_accepted" || (msg as any).event === "voice_agent_transferred")) {
        // Cold transfer only: Source agent hands off call and leaves
        if (telephonyAudioManager) {
          telephonyAudioManager.stopSession();
        }
        setCallActive(false);
        setTelephonyStatus("COMPLETED");
        setCustomerConnectedAt(null);
        setActiveCallId(undefined);
        setStats((prev) => ({ ...prev, agent_status: "AVAILABLE" }));
        useActiveCallStore.getState().resetCall();
      }
      loadDashboardData();

    } else if (msg.event === "voice_agent_transfer_rejected") {

      if (incomingTransfer && (msg.transfer_id === incomingTransfer.transfer_id || msg.call_session_id === incomingTransfer.call_id)) {

        setIncomingTransfer(null);

      }

      loadDashboardData();

    } else if (msg.event === "voice_agent_transfer_rolled_back" || msg.event === "voice_agent_transfer_failed") {

      if (incomingTransfer && (msg.transfer_id === incomingTransfer.transfer_id || msg.call_id === incomingTransfer.call_id)) {

        setIncomingTransfer(null);

      }

      loadDashboardData();

    } else if (msg.event === "voice_agent_status_updated") {

      if (msg.voice_agent_id === user?.id || msg.user_id === user?.id) {

        setStats((prev) => ({ ...prev, agent_status: msg.status || prev.agent_status }));

      }

      loadDashboardData();

    } else if (msg.event === "CALL_RINGING" || msg.type === "CALL_RINGING") {

      // AI Agent calls belong strictly to GBZ AI Agent modal, never route audio to Voice Agent dashboard
      const isAiAgentCall = msg.agent_type === "AI_VOICE" || msg.agent_type === "AI_AGENT" || Boolean(msg.is_ai_agent_call);
      if (isAiAgentCall) return;

      const isMyCall = Boolean(
        (activeCallId && msg.call_id === activeCallId) ||
        (user?.id && (msg.agent_id === user.id || msg.assigned_agent_id === user.id))
      );
      if (!isMyCall) return;

      if (msg.call_id) setActiveCallId(msg.call_id);

      setCallActive(true);

      setTelephonyStatus("RINGING");

      setCustomerConnectedAt(null);

      const incomingPhone = msg.lead_phone || msg.phone || msg.destination;

      if (incomingPhone) {

        setNumber(incomingPhone);

      }

      if (msg.lead_id || msg.lead_name || msg.first_name) {

        const cFirstName = msg.first_name || (msg.lead_name ? msg.lead_name.split(" ")[0] : "Customer");

        const cLastName = msg.last_name || (msg.lead_name && msg.lead_name.includes(" ") ? msg.lead_name.split(" ").slice(1).join(" ") : "");

        setActiveLead((prev) => ({

          id: msg.lead_id || msg.call_id || prev?.id || "active-lead",

          first_name: cFirstName,

          last_name: cLastName,

          phone: incomingPhone || prev?.phone || "",

          email: msg.lead_email || prev?.email || "",

          company: msg.lead_company || prev?.company || "",

          location: msg.lead_location || prev?.location || "",

          requirement: msg.lead_requirement || prev?.requirement || "Interested in campaign offering",

          status: "RINGING",

          qualification_status: msg.qualification_status || prev?.qualification_status || "UNQUALIFIED",

          business_id: user?.business_id || "",

          source: "VOICE_AGENT",

          created_by_role: "VOICE_AGENT",

          job_title: "",

          ...(prev || {}),

        } as any));

      }

      if (msg.campaign_id) {

        setSelectedLeadListId(msg.campaign_id);

        fetchAndApplyCampaignScript(msg.campaign_id);

      }

    } else if (
      msg.event === "CALL_CONNECTED" ||
      msg.type === "CALL_CONNECTED" ||
      (msg.event === "CALL_STATUS_CHANGED" && msg.status === "CONNECTED") ||
      (msg.event === "STATE_CHANGE" && (msg.state === "CONNECTED" || msg.status === "CONNECTED"))
    ) {
      const isMyCall = Boolean(
        (activeCallId && msg.call_id === activeCallId) ||
        (activeCallId && msg.call_id && (msg.call_id.startsWith(activeCallId) || activeCallId.startsWith(msg.call_id))) ||
        (user?.id && (msg.agent_id === user.id || msg.assigned_agent_id === user.id))
      );
      if (!isMyCall) return;

      // AI Agent calls belong strictly to GBZ AI Agent modal, never bridge audio to Voice Agent dashboard
      // BUT if this call was actively dialed or handled by this human voice agent, never drop it!
      const isAiAgentCall =
        (msg.agent_type === "AI_VOICE" || msg.agent_type === "AI_AGENT" || Boolean(msg.is_ai_agent_call)) &&
        activeCallAgentType !== "HUMAN";
      if (isAiAgentCall) return;

      const liveCallId = msg.call_id || activeCallId;
      if (liveCallId) setActiveCallId(liveCallId);
      setCallActive(true);
      const is3Way = (msg as any).is_3way === true || (msg as any).status === "CONFERENCE_3WAY_ACTIVE" || telephonyStatus === "CONFERENCE_3WAY_ACTIVE";
      setTelephonyStatus(is3Way ? "CONFERENCE_3WAY_ACTIVE" : "CONNECTED");
      const connAt = msg.connected_at || new Date().toISOString();
      setCustomerConnectedAt(connAt);
      setStats((prev) => ({ ...prev, agent_status: "ON CALL" }));

      const incomingAgentType = String((msg as any).agent_type || "").toUpperCase();
      const isExplicitHuman = 
        incomingAgentType === "HUMAN" || 
        incomingAgentType === "VOICE" || 
        incomingAgentType === "VOICE_AGENT" || 
        (msg as any).is_voice_agent === true || 
        activeCallAgentType === "HUMAN";
      const resolvedType: "AI_VOICE" | "HUMAN" = isExplicitHuman ? "HUMAN" : "AI_VOICE";
      setActiveCallAgentType(resolvedType);

      // Automatically bridge browser audio (microphone & speaker) ONLY for human voice agent calls
      if (isExplicitHuman && telephonyAudioManager && liveCallId) {
        const token = useAuthStore.getState().token;
        telephonyAudioManager.startBargeIn(liveCallId, token || undefined).catch((e) => {
          console.warn("[VoiceAgentDashboard] Auto audio bridge error:", e);
        });
      }



      const incomingPhone = msg.lead_phone || msg.phone || msg.destination;

      if (incomingPhone) {

        setNumber(incomingPhone);

      }



      const cFirstName = msg.first_name || (msg.lead_name ? msg.lead_name.split(" ")[0] : "");

      const cLastName = msg.last_name || (msg.lead_name && msg.lead_name.includes(" ") ? msg.lead_name.split(" ").slice(1).join(" ") : "");

      const targetLeadId = msg.lead_id || msg.call_id;



      setActiveLead((prev) => {

        const fallbackFirst = prev?.first_name || "Customer";

        const finalFirst = cFirstName || fallbackFirst;

        const finalLast = cLastName || (prev?.last_name || "");

        return {

          id: targetLeadId || prev?.id || "active-lead",

          first_name: finalFirst,

          last_name: finalLast,

          phone: incomingPhone || prev?.phone || "",

          email: msg.lead_email || prev?.email || "",

          company: msg.lead_company || prev?.company || "",

          location: msg.lead_location || prev?.location || "",

          requirement: msg.lead_requirement || prev?.requirement || "Interested in campaign offering",

          status: msg.lead_status || "CONNECTED",

          qualification_status: msg.qualification_status || prev?.qualification_status || "UNQUALIFIED",

          business_id: user?.business_id || "",

          source: "VOICE_AGENT",

          created_by_role: "VOICE_AGENT",

          job_title: "",

          ...(prev || {}),

          ...(finalFirst ? { first_name: finalFirst } : {}),

          ...(finalLast ? { last_name: finalLast } : {}),

          ...(incomingPhone ? { phone: incomingPhone } : {}),

          ...(msg.lead_email ? { email: msg.lead_email } : {}),

          ...(msg.lead_company ? { company: msg.lead_company } : {}),

          ...(msg.lead_location ? { location: msg.lead_location } : {}),

        } as any;

      });



      if (targetLeadId && String(targetLeadId).length > 10) {

        leadService.get(targetLeadId).then((dbLead) => {

          if (dbLead) {

            setActiveLead((prev) => ({ ...(prev || {}), ...dbLead }));

          }

        }).catch(() => {});

      }



      if (msg.campaign_id) {

        setSelectedLeadListId(msg.campaign_id);

        fetchAndApplyCampaignScript(msg.campaign_id);

      }



      if ((window as any).telephonyHoldMusicAudio) {
        try {
          (window as any).telephonyHoldMusicAudio.pause();
        } catch (_) {}
        (window as any).telephonyHoldMusicAudio = null;
      }
      try { window.dispatchEvent(new CustomEvent("hold-music-stopped")); } catch (_) {}

    } else if (msg.event === "CLIENT_CONNECTED" || msg.event === "THREE_WAY_ACTIVE") {
      const isCallMatch = !activeCallId || msg.call_id === activeCallId || (msg.call_id && (msg.call_id.startsWith(activeCallId) || activeCallId.startsWith(msg.call_id)));
      if (isCallMatch) {
        setTelephonyStatus("CONFERENCE_3WAY_ACTIVE");
        const connAt = (msg as any).client_connected_at || new Date().toISOString();
        setClientConnectedAt(connAt);
        setClientDisconnectedAt(null);
      }
    } else if (msg.event === "CLIENT_DISCONNECTED") {
      const isCallMatch = !activeCallId || msg.call_id === activeCallId || (msg.call_id && (msg.call_id.startsWith(activeCallId) || activeCallId.startsWith(msg.call_id)));
      if (isCallMatch) {
        setTelephonyStatus("HUMAN_HANDLING");
        if (msg.client_disconnected_at) setClientDisconnectedAt(msg.client_disconnected_at);
        if (typeof msg.client_duration_seconds === "number") {
          setClientDuration(msg.client_duration_seconds);
        }
      }

    } else if (msg.event === "STATE_CHANGE" || msg.type === "STATE_CHANGE") {
      const stateVal = msg.state || msg.status;
      if (stateVal && (msg.call_id === activeCallId || !activeCallId)) {
        const isAiState = [
          "LISTENING_FOR_CUSTOMER",
          "LISTENING_TO_CUSTOMER",
          "THINKING",
          "SPEAKING",
          "PROCESSING",
          "GENERATING_SPEECH",
          "AI_SPEAKING",
          "AI_LISTENING",
        ].includes(stateVal);
        if (!isAiState || activeCallAgentType !== "HUMAN") {
          setTelephonyStatus(stateVal);
        }
      }
    } else if (msg.event === "CALL_COMPLETED" || msg.type === "CALL_COMPLETED" || msg.event === "CALL_ENDED" || msg.event === "CALL_FAILED" || msg.event === "REMOTE_HANGUP") {

      const eventCallId = msg.call_id || msg.call_session_id;
      const isMatchingCall = Boolean(
        !eventCallId ||
        !activeCallId ||
        eventCallId === activeCallId ||
        eventCallId === activeCallId.replace(/^call-/, "") ||
        `call-${eventCallId}` === activeCallId ||
        (activeCallId.includes("@") && eventCallId === activeCallId.split("@")[0]) ||
        (eventCallId.includes("@") && eventCallId.split("@")[0] === activeCallId)
      );

      if (isMatchingCall && (callActiveRef.current || !activeCallId)) {
        setCallActive(false);
        setActiveCallId(undefined);
        setActiveCallAgentType(null);
        const finalStatus = msg.status || (msg.event === "CALL_FAILED" ? "FAILED" : "COMPLETED");
        setTelephonyStatus(finalStatus);
        setCustomerConnectedAt(null);
        setStats((prev) => ({ ...prev, agent_status: "AVAILABLE" }));
        useActiveCallStore.getState().resetCall();

        if (telephonyAudioManager) {
          telephonyAudioManager.stopSession();
        }

        if (typeof msg.duration_seconds === "number") {
          setCallDuration(msg.duration_seconds);
        } else {
          setCallDuration(0);
        }

        // Post-call handler: If Predictive Dialer is active, automatically dial the next eligible lead!
        if (pdActiveRef.current) {
          schedulePdAutoDial(1000);
        }

      }

    } else if (msg.event === "CALL_ON_HOLD") {
      if (activeCallId && (msg.call_id === activeCallId || msg.call_session_id === activeCallId)) {
        setTelephonyStatus("ON_HOLD");
        const audio = new Audio("https://s3.amazonaws.com/com.twilio.music.classical/MARKOVICHAMP-Borghestral.mp3");
        audio.id = "telephony-hold-music";
        audio.loop = true;
        audio.play().catch(e => console.error("Auto-play blocked for hold music", e));
        (window as any).telephonyHoldMusicAudio = audio;
      }

    } else if (msg.event === "HOLD_MUSIC_STOPPED" || msg.event === "CALL_CONNECTED") {
      // Unconditionally stop hold music audio and dispatch event to stop DialControlPanel synthesizer
      if ((window as any).telephonyHoldMusicAudio) {
        try { (window as any).telephonyHoldMusicAudio.pause(); } catch (_) {}
        (window as any).telephonyHoldMusicAudio = null;
      }
      try { window.dispatchEvent(new CustomEvent("hold-music-stopped")); } catch (_) {}

      // If this agent has this active call and was on hold or transferring, automatically connect without clicking Resume Call
      if (activeCallId && (msg.call_id === activeCallId || msg.call_session_id === activeCallId)) {
        if (telephonyStatus === "ON_HOLD" || telephonyStatus === "TRANSFER_REQUESTED") {
          setTelephonyStatus("HUMAN_HANDLING");
          setStats((prev) => ({ ...prev, agent_status: "ON CALL" }));
        }
      }
    }

  });



  const handleAcceptTransfer = async () => {
    if (!incomingTransfer) return;

    try {
      // Immediately cancel any hold music playing on Agent 2's browser
      if ((window as any).telephonyHoldMusicAudio) {
        try { (window as any).telephonyHoldMusicAudio.pause(); } catch (_) {}
        (window as any).telephonyHoldMusicAudio = null;
      }
      try { window.dispatchEvent(new CustomEvent("hold-music-stopped")); } catch (_) {}

      await transferService.acceptTransfer(incomingTransfer.transfer_id, incomingTransfer.call_id);

      // Update local state to active call
      setCallActive(true);
      setCallDuration(0);
      setActiveCallId(incomingTransfer.call_id);
      const isWarmOr3Way = (
        (incomingTransfer as any)?.transfer_type === "warm" ||
        (incomingTransfer as any)?.transfer_type === "three_way" ||
        (incomingTransfer as any)?.transfer_type === "WARM" ||
        (incomingTransfer as any)?.is_3way === true
      );
      setTelephonyStatus(isWarmOr3Way ? "CONFERENCE_3WAY_ACTIVE" : "HUMAN_HANDLING");
      setActiveCallAgentType("HUMAN");
      setStats((prev) => ({ ...prev, agent_status: "ON CALL" }));
      setCustomerConnectedAt(new Date().toISOString());
      if (incomingTransfer.client_phone) {
        setNumber(incomingTransfer.client_phone);
      }

      // Automatically bridge browser audio for this accepted call transfer
      if (telephonyAudioManager && incomingTransfer.call_id) {
        const token = useAuthStore.getState().token;
        telephonyAudioManager.startBargeIn(incomingTransfer.call_id, token || undefined).catch((e) => {
          console.warn("[VoiceAgentDashboard] Audio bridge on transfer accept error:", e);
        });
      }



      // Populate full Lead context so all lead details render on active call panel and customer tab

      const l = incomingTransfer.lead;

      const targetLeadId = incomingTransfer.lead_id || l?.id || incomingTransfer.call_id;

      const resolvedLead: Lead = {

        id: targetLeadId,

        first_name: l?.first_name || incomingTransfer.client_name || "Client",

        last_name: l?.last_name || "",

        phone: incomingTransfer.client_phone || l?.phone || "",

        email: l?.email || incomingTransfer.email || "",

        company: l?.company || incomingTransfer.company || "Direct Client",

        location: l?.location || incomingTransfer.location || "",

        requirement: l?.requirement || incomingTransfer.requirement || incomingTransfer.notes || "Interested in campaign offering",

        status: l?.status || "ASSIGNED",

        qualification_status: l?.qualification_status || "QUALIFIED",

        business_id: user?.business_id || "",

        source: "TRANSFERRED",

        created_by_role: "VOICE_AGENT",

        job_title: l?.job_title || "",

      } as any;

      setActiveLead(resolvedLead);



      // Also fetch full DB lead record if valid ID exists

      if (targetLeadId && targetLeadId.length > 10) {

        leadService.get(targetLeadId).then((dbLead) => {

          if (dbLead) {

            setActiveLead((prev) => ({ ...(prev || {}), ...dbLead }));

          }

        }).catch(() => {});

      }



      if (incomingTransfer.campaign_id) {

        fetchAndApplyCampaignScript(incomingTransfer.campaign_id);

      }

      setIncomingTransfer(null);

      setIncomingTransferMsg(null);

    } catch (err: any) {

      setIncomingTransferMsg(err.message || "Failed to accept transfer.");

    }

  };



  const handleRejectTransfer = async () => {

    if (!incomingTransfer) return;

    try {
      await transferService.rejectTransfer(incomingTransfer.transfer_id, incomingTransfer.call_id);

    } catch (err: any) {

      console.warn("Failed to reject transfer on backend:", err);

    } finally {

      setIncomingTransfer(null);

      setIncomingTransferMsg(null);

    }

  };

  

  // Upper Tab state

  const [upperTab, setUpperTab] = useState<"CUSTOMER" | "SCRIPT">("CUSTOMER");

  // Status Tab state for STATUS sidebar view

  const [statusSubTab, setStatusSubTab] = useState<"DETAILS" | "HISTORY">("DETAILS");

  // Category tab state for assigned leads

  const [categoryTab, setCategoryTab] = useState<"ACTIVE" | "REQUESTED" | "TRANSFERS" | "HISTORY">("ACTIVE");



  // Call History & Disposition State

  const [showDispo, setShowDispo] = useState(false);

  const [dispoList, setDispoList] = useState<string[]>([]);

  const [dispoOption, setDispoOption] = useState("Sale / Success");

  const [customDispo, setCustomDispo] = useState("");

  

  // Detailed Modals for Dashboard Summary Cards

  const [activeModal, setActiveModal] = useState<"TOTAL_CALLS" | "TOTAL_TIME" | "QUEUE" | "HOLD" | null>(null);

  

  // Local Voice Test modal

  const [showLocalTestModal, setShowLocalTestModal] = useState(false);



  // Real Backend Data for Modals & Dashboard

  const [stats, setStats] = useState<DashboardStats>({

    total_calls: 0,

    today_calls: 0,

    total_time_seconds: 0,

    today_time_seconds: 0,

    calls_in_queue: 0,

    calls_on_hold: 0,

    agent_status: "AVAILABLE",

  });



  const [detailedCalls, setDetailedCalls] = useState<DetailedCallLog[]>([]);

  const [timeBreakdown, setTimeBreakdown] = useState<TotalTimeBreakdown | null>(null);

  const [detailedQueue, setDetailedQueue] = useState<QueueCallItem[]>([]);

  const [detailedHold, setDetailedHold] = useState<HeldCallItem[]>([]);



  // Search/Filter state inside Total Calls modal

  const [modalSearch, setModalSearch] = useState("");

  // Search state for active assigned customers bar

  const [leadSearch, setLeadSearch] = useState("");



  // Leads & Assignments data

  const [leads, setLeads] = useState<Lead[]>([]);

  const [activeLead, setActiveLead] = useState<Lead | null>(null);

  const [activeAssignments, setActiveAssignments] = useState<LeadAssignmentRecord[]>([]);

  const [historyAssignments, setHistoryAssignments] = useState<LeadAssignmentRecord[]>([]);

  const [myRequestedQueue, setMyRequestedQueue] = useState<any[]>([]);

  const [historyQueue, setHistoryQueue] = useState<any[]>([]);

  const [myTransfers, setMyTransfers] = useState<import("@/lib/services/transfer.service").FormattedCallTransfer[]>([]);

  const [activeAssignment, setActiveAssignment] = useState<LeadAssignmentRecord | null>(null);



  // Dynamic Campaign Script State

  const [campaignScriptData, setCampaignScriptData] = useState<{

    name: string;

    script: string;

    questions: string[];

    required_info: string[];

    transfer_rules: string;

  }>({

    name: "",

    script: "",

    questions: [],

    required_info: [],

    transfer_rules: "",

  });



  // Message banner when DIAL NEXT finishes

  const [dialNextMsg, setDialNextMsg] = useState<string | null>(null);



  // Calling queue & Dial Next tracking state

  const [dialedLeadIds, setDialedLeadIds] = useState<string[]>(() => {

    if (typeof window !== "undefined") {

      try {

        const saved = sessionStorage.getItem("GBZ_dialed_leads");

        return saved ? JSON.parse(saved) : [];

      } catch (_) {

        return [];

      }

    }

    return [];

  });

  const [isDialingNext, setIsDialingNext] = useState(false);
  const isDialingNextRef = useRef(false);
  const [isStartingCall, setIsStartingCall] = useState(false);
  const isStartingCallRef = useRef(false);
  const handleDialNextRef = useRef<((forcePd?: boolean) => Promise<void>) | null>(null);
  const pdDialTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [noMoreCustomers, setNoMoreCustomers] = useState(false);
  const initialCustomerLoadedRef = useRef(false);
  const lastCallDurationRef = useRef<number>(0);



  // Selected assignment for Assignment History tab

  const [selectedHistoryAssignment, setSelectedHistoryAssignment] = useState<LeadAssignmentRecord | null>(null);

  const [selectedHistoryLeadId, setSelectedHistoryLeadId] = useState<string | undefined>(undefined);



  // Campaign Clients & Customers

  const [campaignClients, setCampaignClients] = useState<any[]>([]);

  const [campaignCustomers, setCampaignCustomers] = useState<any[]>([]);



  // --- Voice Agent Live State ---

  const [number, setNumber] = useState("");

  const [callActive, setCallActive] = useState(false);

  const [activeCallId, setActiveCallId] = useState<string | undefined>(undefined);

  const [paused, setPaused] = useState(false);

  const [muted, setMuted] = useState(false);
  const [micCaptureState, setMicCaptureState] = useState<"active" | "muted" | "denied" | "unsupported" | "inactive">("inactive");
  const [activeCallAgentType, setActiveCallAgentType] = useState<"AI_VOICE" | "HUMAN" | null>(null);

  useEffect(() => {
    if (telephonyAudioManager) {
      telephonyAudioManager.onMicStateChange = (state) => {
        setMicCaptureState(state);
      };
      setMicCaptureState(telephonyAudioManager.getMicrophoneState());
    }
  }, []);

  // Live Two-Way Audio Bridge (Browser Microphone & Headset <-> Call Stream)
  useEffect(() => {
    const isHumanSpeaking = (
      telephonyStatus === "HUMAN_HANDLING" ||
      telephonyStatus === "CONFERENCE_3WAY_ACTIVE" ||
      telephonyStatus === "CONNECTED" ||
      telephonyStatus === "IN_PROGRESS" ||
      (callActive && activeCallAgentType !== "AI_VOICE" && !["IDLE", "COMPLETED", "FAILED", "RINGING"].includes(telephonyStatus))
    );
    const isConn = callActive && isHumanSpeaking;

    if (isConn && activeCallId) {
      const token = useAuthStore.getState().token;
      if (telephonyAudioManager && typeof telephonyAudioManager.startBargeIn === "function") {
        telephonyAudioManager.startBargeIn(activeCallId, token || undefined).catch((e) => {
          console.warn("[VoiceDashboard] Two-way audio bridge start error:", e);
        });
      }
    } else if (!callActive || ["IDLE", "COMPLETED", "FAILED"].includes(telephonyStatus)) {
      if (telephonyAudioManager) {
        if (typeof telephonyAudioManager.stopBargeIn === "function") {
          telephonyAudioManager.stopBargeIn().catch(() => {});
        } else if (typeof (telephonyAudioManager as any).stopSession === "function") {
          (telephonyAudioManager as any).stopSession();
        }
      }
    }
  }, [callActive, telephonyStatus, activeCallId, activeCallAgentType]);

  useEffect(() => {
    if (telephonyAudioManager) {
      telephonyAudioManager.setMicMute(muted);
    }
  }, [muted]);



  // Predictive Dialer (PD) state

  const [pdActive, setPdActive] = useState<boolean>(false);

  const pdActiveRef = useRef<boolean>(false);

  useEffect(() => {
    pdActiveRef.current = pdActive;
    if (!pdActive && pdDialTimerRef.current) {
      clearTimeout(pdDialTimerRef.current);
      pdDialTimerRef.current = null;
    }
  }, [pdActive]);

  useEffect(() => {
    return () => {
      if (pdDialTimerRef.current) {
        clearTimeout(pdDialTimerRef.current);
        pdDialTimerRef.current = null;
      }
    };
  }, []);

  const schedulePdAutoDial = useCallback((delayMs: number = 1000) => {
    if (pdDialTimerRef.current) {
      clearTimeout(pdDialTimerRef.current);
      pdDialTimerRef.current = null;
    }
    if (!pdActiveRef.current) return;

    setShowDispo(false);
    setDialNextMsg("Predictive Dialer: Dialing next customer...");
    pdDialTimerRef.current = setTimeout(() => {
      pdDialTimerRef.current = null;
      if (pdActiveRef.current && !isStartingCallRef.current && !useActiveCallStore.getState().activeCallId) {
        handleDialNextRef.current?.(true);
      }
    }, delayMs);
  }, []);

  const [isPdLoading, setIsPdLoading] = useState<boolean>(false);

  // Caller ID / Caller Number (Outbound DID Line)

  const [callerNumber, setCallerNumber] = useState<string>("+1 (839) 261-5369");



  const fetchPdStatus = useCallback(async () => {

    try {

      const res = await campaignService.getActivePdStatus();

      const statusBool = Boolean(res.auto_dial_enabled || res.status === "ACTIVE");

      setPdActive(statusBool);

      pdActiveRef.current = statusBool;

    } catch (err) {

      console.warn("Error fetching PD status:", err);

    }

  }, []);



  useEffect(() => {

    fetchPdStatus();

  }, [fetchPdStatus]);



  const handleTogglePd = async () => {

    setIsPdLoading(true);

    try {

      const nextStatus = !pdActiveRef.current;

      const res = await campaignService.toggleActivePdStatus(nextStatus);

      const newStatus = Boolean(res.auto_dial_enabled || res.status === "ACTIVE");

      setPdActive(newStatus);

      pdActiveRef.current = newStatus;

      

      // Auto-dial immediately if turning ON and not currently on a call

      if (newStatus && !callActive) {

        handleDialNext(true);

      }

    } catch (err: any) {

      console.error("Failed to toggle PD state:", err);

      alert(err?.message || "Failed to toggle Predictive Dialer state.");

    } finally {

      setIsPdLoading(false);

    }

  };

    // Audio playback state
  const [playingId, setPlayingId] = useState<string | number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayRecording = (id: string | number, url?: string) => {
    if (playingId === id) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setPlayingId(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const audioUrl = url && String(url).trim() && !String(url).includes("dummy-recording.wav") ? String(url) : `/api/voice/calls/${id}/recording`;
      const audio = new Audio(audioUrl);
      audio.play().catch((err) => {
        console.warn("[VoiceAgentDashboard] Audio play error, trying direct stream:", err);
        const fb = new Audio(`/api/voice/calls/${id}/recording`);
        fb.play().catch((e) => console.error("[VoiceAgentDashboard] Playback error:", e));
        fb.onended = () => setPlayingId(null);
        audioRef.current = fb;
      });
      audio.onended = () => setPlayingId(null);
      audioRef.current = audio;
      setPlayingId(id);
    }
  };

  const [callDuration, setCallDuration] = useState(0);
  // clientDuration declared above
  const callTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Active call refs to cleanly end calls when navigating away
  const activeCallIdRef = useRef<string | undefined>(activeCallId);
  const callActiveRef = useRef<boolean>(callActive);
  const callDurationRef = useRef<number>(callDuration);
  const activeLeadIdRef = useRef<string | undefined>(activeLead?.id);
  useEffect(() => {
    activeCallIdRef.current = activeCallId;
    callActiveRef.current = callActive;
    callDurationRef.current = callDuration;
    activeLeadIdRef.current = activeLead?.id;
  }, [activeCallId, callActive, callDuration, activeLead?.id]);

  useEffect(() => {
    return () => {
      if (callActiveRef.current && activeCallIdRef.current) {
        agentDashboardService.endCall(
          activeCallIdRef.current,
          callDurationRef.current,
          "Page Navigation",
          undefined,
          activeLeadIdRef.current
        ).catch(() => {});
      }
    };
  }, []);

  const formatTime = (seconds: number) => {
    if (!seconds || seconds <= 0) return "0s";
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const hrs = Math.floor(mins / 60);
    if (hrs > 0) {
      return `${hrs}h ${mins % 60}m ${secs}s`;
    }
    if (mins > 0) {
      return `${mins}m ${secs}s`;
    }
    return `${secs}s`;
  };

  const formatTimerClock = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const leadName = activeLead 
    ? `${activeLead.first_name || ""} ${activeLead.last_name || ""}`.trim() || (activeLead as any).lead_name || activeAssignment?.context?.lead_name || activeAssignment?.context?.name || "Customer"
    : activeAssignment?.context?.lead_name || activeAssignment?.context?.name || "Customer";

  const leadPhone = activeLead?.phone || (activeLead as any)?.phone_number || (activeLead as any)?.mobile_number || activeAssignment?.context?.phone || activeAssignment?.context?.mobile_number || number || "—";
  const leadEmail = activeLead?.email || (activeLead as any)?.email_address || (activeLead as any)?.emailid || activeAssignment?.context?.email || "—";
  const leadCompany = activeLead?.company || (activeLead as any)?.company_name || (activeLead as any)?.organization || activeAssignment?.context?.company || activeAssignment?.context?.organization || "—";
  const leadLocation = activeLead?.location || (activeLead as any)?.city || (activeLead as any)?.place || (activeLead as any)?.address || activeAssignment?.context?.location || activeAssignment?.context?.city || "—";
  const leadRequirement = activeLead?.requirement || activeAssignment?.context?.requirement || "Interested in campaign offering";

  const messagesHubLeads = useMemo(() => {
    const map = new Map<string, any>();

    leads.forEach((l) => {
      if (l && l.id) {
        const name = `${l.first_name || ''} ${l.last_name || ''}`.trim() || l.email || 'Voice Lead';
        map.set(l.id, {
          id: l.id,
          name,
          phone: l.phone || (l as any).phone_number || '',
          email: l.email || (l as any).email_address || '',
          initials: `${l.first_name ? l.first_name[0] : (name[0] || '?')}`.toUpperCase(),
          color: l.qualification_status === 'QUALIFIED' ? '#6C63F5' : '#8A93A8',
        });
      }
    });

    campaignCustomers.forEach((c) => {
      if (c && c.id) {
        const name = `${c.first_name || ''} ${c.last_name || ''}`.trim() || c.name || c.email || 'Customer';
        const existing = map.get(c.id);
        map.set(c.id, {
          id: c.id,
          name: existing?.name && existing.name !== 'Voice Lead' ? existing.name : name,
          phone: c.phone || c.mobile_number || existing?.phone || '',
          email: c.email || c.email_address || existing?.email || '',
          initials: `${name[0] || '?'}`.toUpperCase(),
          color: '#6C63F5',
        });
      }
    });

    activeAssignments.forEach((a) => {
      if (a && a.lead_id) {
        const name = a.context?.first_name 
          ? `${a.context.first_name} ${a.context.last_name || ''}`.trim() 
          : a.context?.lead_name || a.context?.name || 'Customer';
        const existing = map.get(a.lead_id);
        map.set(a.lead_id, {
          id: a.lead_id,
          name: existing?.name && existing.name !== 'Voice Lead' ? existing.name : name,
          phone: a.context?.phone || existing?.phone || '',
          email: a.context?.email || existing?.email || '',
          initials: `${name[0] || '?'}`.toUpperCase(),
          color: '#6C63F5',
        });
      }
    });

    if (activeLead && activeLead.id) {
      const name = `${activeLead.first_name || ''} ${activeLead.last_name || ''}`.trim() || (activeLead as any).name || (activeLead as any).lead_name || activeLead.email || 'Active Lead';
      map.set(activeLead.id, {
        id: activeLead.id,
        name,
        phone: activeLead.phone || (activeLead as any).phone_number || (activeLead as any).mobile_number || '',
        email: activeLead.email || (activeLead as any).email_address || '',
        initials: `${activeLead.first_name ? activeLead.first_name[0] : (name[0] || '?')}`.toUpperCase(),
        color: activeLead.qualification_status === 'QUALIFIED' ? '#6C63F5' : '#8A93A8',
      });
    }

    return Array.from(map.values());
  }, [leads, campaignCustomers, activeAssignments, activeLead]);

  const activeLeadFormatted = useMemo(() => {
    if (!activeLead) return null;
    const name = `${activeLead.first_name || ''} ${activeLead.last_name || ''}`.trim() || (activeLead as any).name || (activeLead as any).lead_name || activeLead.email || 'Customer';
    return {
      id: activeLead.id,
      name,
      phone: activeLead.phone || (activeLead as any).phone_number || '',
      email: activeLead.email || (activeLead as any).email_address || '',
      initials: `${activeLead.first_name ? activeLead.first_name[0] : (name[0] || '?')}`.toUpperCase(),
      color: activeLead.qualification_status === 'QUALIFIED' ? '#6C63F5' : '#8A93A8',
    };
  }, [activeLead]);

  const fetchAndApplyCampaignScript = async (campaignId: string) => {
    try {
      const camp = await campaignService.get(campaignId) as any;
      if (camp) {
        setCampaignScriptData({
          id: camp.id,
          name: camp.name,
          client_id: camp.client_id,
          client_name: camp.client_name,
          client_company: camp.client_company,
          client_phone: camp.client_phone,
          script: camp.script,
          questions: camp.qualification_questions || [],
          required_info: camp.required_info || [],
          transfer_rules: camp.transfer_rules || 'Qualify and transfer.',
          agent_type: camp.agent_type,
          agent_id: camp.agent_id,
          voice_agent_id: camp.voice_agent_id,
        } as any);
      }
    } catch (_) {}
  };

  const fetchInitialCustomer = async () => {
    if (initialCustomerLoadedRef.current) return;
    try {
      const activeCampId = (campaignScriptData as any)?.id;
      const selectedList = leadLists.find((l: any) => l.id === selectedLeadListId);
      if (!selectedLeadListId || !selectedList) return;
      initialCustomerLoadedRef.current = true;
      const isCampList = selectedList.is_campaign_list === true;
      const resolvedCampId = isCampList ? (selectedList.campaign_id || selectedList.id) : undefined;
      const resolvedGroupId = !isCampList ? selectedList.id : undefined;
      const res = await agentDashboardService.getNextLead(undefined, resolvedCampId, dialedLeadIds, resolvedGroupId);
      if (res && res.lead) {
        const l = res.lead;
        setActiveLead({
          id: l.id,
          first_name: l.first_name || '',
          last_name: l.last_name || '',
          phone: l.phone || (l as any).phone_number || '',
          email: l.email || (l as any).email_address || '',
          company: l.company || (l as any).company_name || '',
          requirement: l.requirement || 'Interested in campaign offering',
          business_id: '',
          source: 'MANUAL',
          created_by_role: 'USER',
          job_title: '',
          budget: '',
          timeline: '',
          location: l.location || (l as any).city || (l as any).place || (l as any).address || '',
          status: 'NEW',
          score: 0,
          qualification_status: l.qualification_status,
          ai_summary: '',
          call_status: 'NEW',
          call_duration: undefined,
          call_result: '',
          assigned_expert_id: null,
          agent_id: null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        });
        setNumber(l.phone);
        setNoMoreCustomers(false);
        if (res.campaign?.id) {
          fetchAndApplyCampaignScript(res.campaign.id);
        }
      } else {
        setActiveLead(null);
        setNoMoreCustomers(true);
      }
    } catch (err) {
      console.error('Error fetching initial customer:', err);
    }
  };


const loadDashboardData = async () => {

    try {

      const activeCampId = (campaignScriptData as any)?.id;

      const selectedList = leadLists.find((l: any) => l.id === selectedLeadListId);

      const isCampList = selectedList?.is_campaign_list === true;

      const campId = isCampList ? (selectedLeadListId || activeCampId) : activeCampId;

      const groupId = !isCampList ? selectedLeadListId : undefined;



      const [backendStats, leadsData, activeAssignData, historyAssignData, queueData, queueHistoryData, transfersData] = await Promise.all([

        agentDashboardService.getStats(campId || undefined, groupId || undefined).catch(() => ({

          total_calls: 0,

          today_calls: 0,

          total_time_seconds: 0,

          today_time_seconds: 0,

          calls_in_queue: 0,

          calls_on_hold: 0,

          agent_status: "AVAILABLE"

        })),

        leadService.list().catch(() => []),

        leadAssignmentService.getMyAssignments(undefined, "ACTIVE").catch(() => []),

        leadAssignmentService.getMyAssignments(undefined, "HISTORY").catch(() => []),

        leadAssignmentService.getQueue("WAITING").catch(() => []),

        leadAssignmentService.getQueue("HISTORY").catch(() => []),

        transferService.listTransfers().catch(() => []),

      ]);



      setStats(backendStats);

      if (backendStats?.agent_status) {

        const isBreak = ["COFFEE_BREAK", "LUNCH_BREAK", "PAUSED", "ON BREAK"].includes(backendStats.agent_status);

        setPaused(isBreak);

      }

      setLeads(leadsData);

      setActiveAssignments(activeAssignData);

      if (activeAssignData && activeAssignData.length > 0) {
        setActiveLead((prevLead) => {
          if (prevLead) return prevLead;
          const firstAssign = activeAssignData[0];
          const ctx = firstAssign.context || {};
          return {
            id: firstAssign.lead_id,
            first_name: ctx.first_name || (firstAssign as any).first_name || firstAssign.expert_name || "Assigned Lead",
            last_name: ctx.last_name || (firstAssign as any).last_name || "",
            phone: ctx.phone || (firstAssign as any).phone || "",
            email: ctx.email || (firstAssign as any).email || "",
            company: ctx.company || (firstAssign as any).company || "",
            location: ctx.location || ctx.city || "",
            status: ctx.lead_status || firstAssign.status || "Ready",
            qualification_status: ctx.qualification_status || firstAssign.qualification_stage || "UNQUALIFIED",
            requirement: ctx.requirement || "",
          } as any;
        });
        setActiveAssignment((prevAssign) => prevAssign || activeAssignData[0]);
      }

      setHistoryAssignments(historyAssignData);

      setMyRequestedQueue(queueData);

      setHistoryQueue(queueHistoryData);

      setMyTransfers(transfersData);



      // Populate detailed calls for Call History count and status diagnostics

      agentDashboardService.getMyCalls().then((calls) => {

        if (calls && calls.length > 0) {

          setDetailedCalls(calls);

        }

      }).catch(() => {});



      // Load Lead List Customers for ACTIVE ASSIGNED pills

      if (!selectedLeadListId || !selectedList) {

        setCampaignCustomers([]);

      } else {

        const passCampId = isCampList ? (selectedList.campaign_id || selectedList.id) : undefined;

        const passGroupId = !isCampList ? selectedList.id : undefined;



        agentDashboardService.getLeadListCustomers(passCampId, passGroupId)

          .then((customers) => {

            setCampaignCustomers(customers || []);

          })

          .catch(() => {

            setCampaignCustomers([]);

          });

      }



      // Load Campaign Clients for D1/D2/D3 Conference Selection

      if (campId) {

        agentDashboardService.getCampaignClients(campId)

          .then((res) => {

            if (res && res.clients && res.clients.length > 0) {

              setCampaignClients(res.clients);

            }

          })

          .catch(() => {});

      }

    } catch (err) {

      console.error("Dashboard refresh error:", err);

    }

  };



  useEffect(() => {

    setHydrated(true);



    // Silently clean up any stale ON_CALL status from prior browser crashes/disconnects.

    // This runs in background – does NOT block the page load.

    callService.cleanupStale(300).catch(() => {});

    

    callService.getDispositions().then((data) => {

      setDispoList(data);

      if (data.length > 0) setDispoOption(data[0]);

    }).catch(console.error);



    campaignService.getTwilioNumber().then((t) => {

      if (t?.twilio_phone_number) {

        setCallerNumber(t.twilio_phone_number);

      }

    }).catch(() => {});



    loadDashboardData();

    fetchInitialCustomer();

    restoreActiveCall();



    return () => {

      useActiveCallStore.getState().resetCall();

    };

  }, []);



  // Refresh dispositions whenever the disposition view opens so admin changes reflect immediately

  useEffect(() => {

    if (showDispo) {

      callService.getDispositions().then((data) => {

        if (data && data.length > 0) {

          setDispoList(data);

          if (!data.includes(dispoOption)) {

            setDispoOption(data[0]);

          }

        }

      }).catch(console.error);

    }

  }, [showDispo]);



  // Restore active call on page mount/refresh

  const restoreActiveCall = async () => {

    try {

      const activeData = await agentDashboardService.getActiveCall();

      if (activeData) {

        if (activeData.caller_number || activeData.from_number) {

          setCallerNumber(activeData.caller_number || activeData.from_number || "+1 (839) 261-5369");

        }

        if (activeData.has_active_call && activeData.call_id) {

          const connTime = activeData.connected_at || (activeData as any).initiated_at;

          const startMs = parseIsoTimestampMs(connTime);

          const elapsedSec = Math.max(0, Math.floor((Date.now() - startMs) / 1000));

          // If the call was initiated/connected more than 90 seconds ago, it is stale/abandoned.

          // Do not restore it as an active talking call.

          if (elapsedSec > 90) {

            try {

              await agentDashboardService.endCall(activeData.call_id, elapsedSec, "Abandoned", undefined, activeData.lead_id);

            } catch (_) {}

            setCallActive(false);

            setActiveCallId(undefined);

            setCustomerConnectedAt(null);

            useActiveCallStore.getState().resetCall();

            return;

          }



          setActiveCallId(activeData.call_id);

          setCallActive(true);

          setTelephonyStatus(activeData.status || "HUMAN_HANDLING");

          setCustomerConnectedAt(connTime || new Date().toISOString());

          if (activeData.client_connected_at) {

            setClientConnectedAt(activeData.client_connected_at);

          }

          if (activeData.client_disconnected_at) {

            setClientDisconnectedAt(activeData.client_disconnected_at);

            setClientDuration(activeData.client_duration_seconds || 0);

          }

          if (activeData.lead_phone) {

            setNumber(activeData.lead_phone);

          }

        } else {

          setCallActive(false);

          setActiveCallId(undefined);

          setCustomerConnectedAt(null);

          useActiveCallStore.getState().resetCall();

        }

      }

    } catch (_) {

      setCallActive(false);

      setActiveCallId(undefined);

      setCustomerConnectedAt(null);

      useActiveCallStore.getState().resetCall();

    }

  };



  // Timestamp-based Anti-Drift Real-time Timer

  useEffect(() => {

    if (callActive && customerConnectedAt && telephonyStatus !== "RINGING" && telephonyStatus !== "INITIATING") {

      const startMs = parseIsoTimestampMs(customerConnectedAt);

      const updateElapsed = () => {

        const now = Date.now();

        const elapsedSec = Math.max(0, Math.floor((now - startMs) / 1000));

        setCallDuration(elapsedSec);



        if (clientConnectedAt && !clientDisconnectedAt) {

          const clientStartMs = parseIsoTimestampMs(clientConnectedAt);

          const clientElapsedSec = Math.max(0, Math.floor((now - clientStartMs) / 1000));

          setClientDuration(clientElapsedSec);

        }

      };

      updateElapsed();

      const interval = setInterval(updateElapsed, 1000);

      return () => clearInterval(interval);

    } else {

      setCallDuration(0);

    }

  }, [callActive, customerConnectedAt, clientConnectedAt, clientDisconnectedAt, telephonyStatus]);



  // Synchronize global active call store for Header and Control Panel

  useEffect(() => {

    setGlobalCallState({

      callActive,

      callDuration,

      customerConnectedAt,

      clientConnectedAt,

      clientDisconnectedAt,

      clientDuration,

      activeCallId: activeCallId || null,

      telephonyStatus,

      leadName,

      leadPhone: number || leadPhone,

    });

  }, [

    callActive,

    callDuration,

    customerConnectedAt,

    clientConnectedAt,

    clientDisconnectedAt,

    clientDuration,

    activeCallId,

    telephonyStatus,

    leadName,

    number,

    leadPhone,

    setGlobalCallState,

  ]);



  // Load detailed backend data when modals open

  const handleOpenModal = async (modalType: "TOTAL_CALLS" | "TOTAL_TIME" | "QUEUE" | "HOLD") => {

    setActiveModal(modalType);

    try {

      if (modalType === "TOTAL_CALLS") {

        const calls = await agentDashboardService.getMyCalls();

        setDetailedCalls(calls);

      } else if (modalType === "TOTAL_TIME") {

        const breakdown = await agentDashboardService.getTotalTime();

        setTimeBreakdown(breakdown);

      } else if (modalType === "QUEUE") {

        const qItems = await agentDashboardService.getQueue();

        setDetailedQueue(qItems);

      } else if (modalType === "HOLD") {

        const hItems = await agentDashboardService.getOnHold();

        setDetailedHold(hItems);

      }

    } catch (err) {

      console.error(`Error loading data for modal ${modalType}:`, err);

    }

  };



  const extractValidPhoneNumber = (val: unknown): string | null => {
    if (val === null || val === undefined) return null;
    if (typeof val === "object" && val !== null) {
      if ("nativeEvent" in val || "preventDefault" in val || ("target" in val && "currentTarget" in val)) {
        return null;
      }
      const obj = val as Record<string, unknown>;
      const cand = obj.phone || obj.phone_number || obj.contact_number || obj.number || obj.dialPhone;
      if (typeof cand === "string" || typeof cand === "number") {
        return extractValidPhoneNumber(cand);
      }
      return null;
    }
    if (typeof val === "string") {
      const trimmed = val.trim();
      if (!trimmed || trimmed === "[object Object]") return null;
      return trimmed;
    }
    if (typeof val === "number" && !isNaN(val)) {
      return String(val);
    }
    return null;
  };

  const handleCallStart = async (
    targetPhone?: unknown,
    targetLeadId?: string,
    targetCampaignId?: string
  ) => {
    if (callActive || isStartingCallRef.current) {
      console.warn("[handleCallStart] Call already active or starting, ignoring duplicate dial request.");
      return;
    }
    isStartingCallRef.current = true;
    setIsStartingCall(true);

    // Phone number extraction and manual dial precedence:
    // 1. explicitPhone (if called directly for a specific contact/lead row)
    // 2. manualNumber (if user typed into dialer keypad)
    // 3. activeLead.phone (fallback to currently active lead)
    const explicitPhone = extractValidPhoneNumber(targetPhone);
    const manualNumber = extractValidPhoneNumber(number);
    const leadPhone = extractValidPhoneNumber(activeLead?.phone);

    const dialPhone = (explicitPhone || manualNumber || leadPhone || "").trim();

    if (!dialPhone || !/^[\d\s+()\-]{7,}$/.test(dialPhone)) {
      isStartingCallRef.current = false;
      setIsStartingCall(false);
      console.warn("Invalid phone number:", dialPhone);
      alert(
        `Invalid phone number: "${dialPhone || '(empty)'}"\n\nPlease enter a valid phone number (e.g. +91 9876543210 or +1 800-555-1234).`
      );
      return;
    }

    // Pre-warm AudioContext and acquire microphone stream on user gesture (Call click)
    if (telephonyAudioManager) {
      telephonyAudioManager.preWarmAudioContext().catch(() => {});
      telephonyAudioManager.ensureMicrophoneStream().catch((e) => {
        console.warn("[VoiceAgentDashboard] Mic pre-warm warning:", e);
      });
    }

    setTelephonyStatus("RINGING");
    setCallDuration(0);
    setClientDuration(0);
    setCustomerConnectedAt(null);
    setClientConnectedAt(null);
    setClientDisconnectedAt(null);

    // Determine if this is a manual dial pad call (manual keypad input without explicit lead selection)
    const isManualDialPad = !targetLeadId && Boolean(manualNumber && (!activeLead || manualNumber !== activeLead?.phone));
    const leadIdToCall = isManualDialPad ? undefined : (targetLeadId || activeLead?.id);
    const campaignIdToCall = isManualDialPad ? undefined : (targetCampaignId || (campaignScriptData as any)?.id);

    try {
      // Outbound calls initiated from the Human Voice Agent dashboard MUST ALWAYS be HUMAN agent calls.
      // Even if a campaign is associated with the lead, it provides script/data context only and must never convert a human call into an AI bot call.
      const resolvedAgentType: "HUMAN" = "HUMAN";
      const resolvedAgentId = user?.id || (campaignScriptData as any)?.voice_agent_id;

      setActiveCallAgentType("HUMAN");

      const res = await agentDashboardService.initiateCall({
        lead_id: leadIdToCall,
        phone_number: dialPhone,
        campaign_id: campaignIdToCall,
        client_name: isManualDialPad ? undefined : (campaignScriptData as any)?.client_name,
        client_phone: isManualDialPad ? undefined : (campaignScriptData as any)?.client_phone,
        agent_type: "HUMAN",
        agent_id: resolvedAgentId,
      });

      if (res && res.call_id) {
        setActiveCallId(res.call_id);
        setCallActive(true);
        const st = res.status || "RINGING";
        setTelephonyStatus(st);
        if (st === "CONNECTED" && res.connected_at) {
          setCustomerConnectedAt(res.connected_at);
        } else {
          setCustomerConnectedAt(null);
        }
        if (isManualDialPad) {
          setNumber(dialPhone);
        }
      }

      await agentDashboardService.updateAgentStatus("ON CALL");
      setStats((prev) => ({ ...prev, agent_status: "ON CALL" }));
    } catch (err: any) {
      console.warn("Failed to initiate call:", err);
      setCallActive(false);
      setActiveCallId(undefined);
      useActiveCallStore.getState().resetCall();
      setTelephonyStatus("FAILED");
      setCustomerConnectedAt(null);
      setDialNextMsg(`Call failed: ${err.message || "Failed to initiate call via telephony provider."}`);
      setTimeout(() => setDialNextMsg(null), 6000);
      alert(err.message || "Failed to initiate call via telephony provider.");
    } finally {
      isStartingCallRef.current = false;
      setIsStartingCall(false);
    }
  };

  const handleAnswerCall = async () => {

    if (activeCallId) {

      try {

        await agentDashboardService.markCallAnswered(activeCallId);

      } catch (e) {

        console.error("Failed to mark call answered in backend:", e);

      }

    }

    setCallActive(true);

    setTelephonyStatus("CONNECTED");

    setCustomerConnectedAt(new Date().toISOString());

    setStats((prev) => ({ ...prev, agent_status: "ON CALL" }));



    if (telephonyAudioManager && activeCallId) {

      const token = useAuthStore.getState().token;

      telephonyAudioManager.startBargeIn(activeCallId, token || undefined).catch((e) => {

        console.warn("[VoiceAgentDashboard] handleAnswerCall audio bridge error:", e);

      });

    }

  };



  const handleResumeCall = async () => {

    if (activeCallId) {

      try {

        await agentDashboardService.resumeCall(activeCallId);

      } catch (e) {

        console.error("Failed to resume call in backend:", e);

      }

    }

    setCallActive(true);

    setTelephonyStatus("CONNECTED");

    setStats((prev) => ({ ...prev, agent_status: "ON CALL" }));

  };



  const handleDisconnectClient = async () => {

    if (activeCallId) {

      try {

        const res = await agentDashboardService.disconnectClient(activeCallId);

        if (res) {

          setClientDisconnectedAt(res.client_disconnected_at);

          setClientDuration(res.client_duration_seconds);

          setTelephonyStatus("HUMAN_HANDLING");

        }

      } catch (err) {

        console.error("Error disconnecting client:", err);

      }

    }

  };



  const handleCallEnd = async () => {

    lastCallDurationRef.current = callDuration;

    const finalDuration = Math.max(callDuration, lastCallDurationRef.current || 0);

    const completedLeadId = activeLead?.id;

    const currentCallId = activeCallId;



    setCallActive(false);
    setActiveCallAgentType(null);
    // Reset global call store so VoiceAgentHeader timer stops immediately
    useActiveCallStore.getState().resetCall();

    if (telephonyAudioManager) {

      telephonyAudioManager.stopSession();

    }



    try {

      await agentDashboardService.updateAgentStatus("AVAILABLE");

      if (currentCallId) {

        await agentDashboardService.endCall(currentCallId, finalDuration, dispoOption || "CALL COMPLETED", undefined, completedLeadId);

      }

      loadDashboardData();

    } catch (_) {}



    // If Predictive Dialer is active, automatically dial the next customer without waiting for manual action!
    if (pdActiveRef.current) {
      schedulePdAutoDial(1000);
    } else {
      setShowDispo(true);
    }

  };

  const handleDispoSubmit = async (dispo: string) => {

    setShowDispo(false);

    const completedLeadId = activeLead?.id;

    const completedPhone = activeLead?.phone || number;

    const isCallback = Boolean(

      dispo && (

        dispo.toUpperCase().includes("CALLBACK") ||

        dispo.toUpperCase().includes("CALL BACK") ||

        dispo.trim().toUpperCase() === "CALL BACK"

      )

    );



    // If callback: keep customer in Active Assigned list and update status so agent sees it!

    // If not callback: remove completed customer from Active Assigned list & decrement count

    if (completedLeadId || completedPhone) {

      if (isCallback) {

        setCampaignCustomers((prev) =>

          prev.map((c) =>

            (c.id === completedLeadId || c.phone === completedPhone)

              ? { ...c, status: "CALL BACK", call_status: "CALL BACK", call_result: dispo }

              : c

          )

        );

        setActiveAssignments((prev) =>

          prev.map((a) =>

            (a.lead_id === completedLeadId || a.context?.phone === completedPhone)

              ? { ...a, status: "CALL BACK" }

              : a

          )

        );

        // Ensure lead is removed from dialedLeadIds and sessionStorage so agent can dial again!

        if (completedLeadId) {

          setDialedLeadIds((prev) => {

            const updated = prev.filter((id) => id !== completedLeadId);

            try {

              sessionStorage.setItem("GBZ_dialed_leads", JSON.stringify(updated));

            } catch (_) {}

            return updated;

          });

        }

      } else {

        setCampaignCustomers((prev) =>

          prev.filter((c) => c.id !== completedLeadId && c.phone !== completedPhone)

        );

        setActiveAssignments((prev) =>

          prev.filter((a) => a.lead_id !== completedLeadId && a.context?.phone !== completedPhone)

        );

      }

    }



    if (activeCallId) {

      try {

        const finalDuration = Math.max(callDuration, lastCallDurationRef.current || 0);

        await agentDashboardService.endCall(activeCallId, finalDuration, dispo, undefined, completedLeadId);

      } catch (_) {}

    }



    // Refetch dashboard data so Assignment History and counters stay in sync

    loadDashboardData();



    setCustomerConnectedAt(null);

    setClientConnectedAt(null);

    setClientDisconnectedAt(null);

    setClientDuration(0);



    // Reset active lead if it was completed and NOT callback, or keep updated callback status

    if (!isCallback && activeLead && (activeLead.id === completedLeadId || activeLead.phone === completedPhone)) {

      setActiveLead(null);

    } else if (isCallback && activeLead && (activeLead.id === completedLeadId || activeLead.phone === completedPhone)) {

      setActiveLead({

        ...activeLead,

        status: "CALL BACK",

        call_status: "CALL BACK",

        call_result: dispo,

      });

    }



    // If Predictive Dialer is active, automatically dial the next customer
    if (pdActiveRef.current) {
      schedulePdAutoDial(800);
    }

  };

  const handleDialNext = async (forcePd?: boolean | any) => {
    const isPd = typeof forcePd === 'boolean' ? forcePd : pdActiveRef.current;

    if (isDialingNextRef.current || isDialingNext || noMoreCustomers) return;

    isDialingNextRef.current = true;
    setIsDialingNext(true);



    try {

      const currentId = activeLead?.id;

      const isCurrentCallback = Boolean(

        activeLead && (

          activeLead.status === "CALL BACK" ||

          activeLead.call_status === "CALL BACK" ||

          (activeLead.call_result && (activeLead.call_result.toUpperCase().includes("CALLBACK") || activeLead.call_result.toUpperCase().includes("CALL BACK")))

        )

      );

      // Only exclude currentId if it's NOT a callback lead

      const nextExcluded = isCurrentCallback

        ? dialedLeadIds

        : [...new Set([...dialedLeadIds, ...(currentId ? [currentId] : [])])];

      setDialedLeadIds(nextExcluded);

      if (typeof window !== "undefined") {

        try {

          sessionStorage.setItem("GBZ_dialed_leads", JSON.stringify(nextExcluded));

        } catch (_) {}

      }



      // If a call is currently active, end it properly on the backend

      if (callActive && activeCallId) {

        try {

          await agentDashboardService.endCall(activeCallId, callDuration, dispoOption, undefined, currentId);

        } catch (err) {

          console.error("Error ending previous call:", err);

        }

      }



      // Reset call active state while we load the next lead

      setCallActive(false);

      setCallDuration(0);

      setClientDuration(0);

      setCustomerConnectedAt(null);

      setClientConnectedAt(null);

      setClientDisconnectedAt(null);

      setActiveCallId(undefined);



      const activeCampId = (campaignScriptData as any)?.id;

      const effectiveLeadListId = selectedLeadListId || (leadLists.length > 0 ? leadLists[0].id : null);

      const selectedList2 = leadLists.find((l: any) => l.id === effectiveLeadListId);

      if (!effectiveLeadListId || !selectedList2) {

        setActiveLead(null);

        setNoMoreCustomers(true);

        setDialNextMsg("No lead list available to dial.");

        setTimeout(() => setDialNextMsg(null), 3000);

        return;

      }

      const isCampList2 = selectedList2.is_campaign_list === true;

      const resolvedCampId2 = isCampList2 ? (effectiveLeadListId || activeCampId) : undefined;

      const resolvedGroupId2 = !isCampList2 ? effectiveLeadListId : undefined;

      const res = await agentDashboardService.getNextLead(currentId, resolvedCampId2, nextExcluded, resolvedGroupId2);

      if (res && res.lead) {

        const l = res.lead;

        const targetPhone = (l.phone || (l as any).phone_number || "").trim();

        const newLeadObj: Lead = {

          id: l.id,

          first_name: l.first_name || "",

          last_name: l.last_name || "",

          phone: targetPhone,

          email: l.email || (l as any).email_address || "",

          company: l.company || (l as any).company_name || "",

          requirement: l.requirement || "Interested in campaign offering",

          business_id: "",

          source: "MANUAL",

          created_by_role: "USER",

          job_title: "",

          budget: "",

          timeline: "",

          location: l.location || (l as any).city || (l as any).place || (l as any).address || "",

          status: "NEW",

          score: 0,

          qualification_status: l.qualification_status,

          ai_summary: "",

          call_status: "NEW",

          call_duration: undefined,

          call_result: "",

          assigned_expert_id: null,

          agent_id: null,

          created_at: new Date().toISOString(),

          updated_at: new Date().toISOString()

        };

        

        // Update active lead and phone number

        setActiveLead(newLeadObj);

        setNumber(targetPhone);

        setNoMoreCustomers(false);



        if (res.campaign) {

          setCampaignScriptData({

            id: res.campaign.id,

            name: res.campaign.name,

            client_id: res.campaign.client_id,

            client_name: res.campaign.client_name,

            client_company: res.campaign.client_company,

            client_phone: res.campaign.client_phone,

            script: res.campaign.script,

            questions: res.campaign.qualification_questions || [],

            required_info: res.campaign.required_info || [],

            transfer_rules: res.campaign.transfer_rules || "Qualify and transfer.",

            agent_type: (res.campaign as any).agent_type,

            agent_id: (res.campaign as any).agent_id,

            voice_agent_id: (res.campaign as any).voice_agent_id,

          } as any);

        }



        // When clicking Dial Next Customer, immediately initiate call to the retrieved eligible lead
        if (targetPhone) {
          handleCallStart(targetPhone, l.id, res.campaign?.id);
        } else {
          setCallActive(false);
          setCallDuration(0);
          setActiveCallId(undefined);
          setCustomerConnectedAt(null);
          useActiveCallStore.getState().resetCall();
        }

        setDialNextMsg(`Switched to next customer: ${l.lead_name || l.first_name || targetPhone}`);

        setTimeout(() => setDialNextMsg(null), 3000);

      } else {

        setActiveLead(null);

        setNoMoreCustomers(true);

        setDialNextMsg("No more customers available in the selected lead list.");

        setTimeout(() => setDialNextMsg(null), 3000);

      }

    } catch (err) {

      console.error("Dial next error:", err);

    } finally {
      isDialingNextRef.current = false;
      setIsDialingNext(false);
    }
  };
  handleDialNextRef.current = handleDialNext;

  const handleResumeParkedCallFromModal = async (callIdToResume: string) => {

    try {

      await agentDashboardService.resumeParkedCall(callIdToResume);

      setActiveModal(null);

      setCallActive(true);

      setActiveCallId(callIdToResume);

      const updatedStats = await agentDashboardService.getStats();

      setStats(updatedStats);

    } catch (err: any) {

      alert(err.message || "Failed to resume parked call.");

    }

  };



  const currentSelectedList = leadLists.find((l: any) => l.id === selectedLeadListId);

  const isListFinished = Boolean(

    noMoreCustomers || 

    (currentSelectedList && currentSelectedList.available_leads === 0 && currentSelectedList.total_leads > 0)

  );



  const handleDownloadCompletedListCsv = async () => {

    try {

      const selectedList = leadLists.find((l: any) => l.id === selectedLeadListId);

      const isCampList = selectedList?.is_campaign_list === true;

      const campId = isCampList ? (selectedLeadListId || undefined) : (selectedList?.campaign_id || undefined);

      const groupId = !isCampList ? (selectedLeadListId || undefined) : undefined;



      let exportData: any[] = [];

      if (leadListCustomers && leadListCustomers.length > 0) {

        exportData = leadListCustomers;

      } else if (selectedLeadListId) {

        const fetched = await agentDashboardService.getLeadListCustomers(campId, groupId).catch(() => []);

        if (fetched && fetched.length > 0) {

          exportData = fetched;

        }

      }

      

      if (exportData.length === 0) {

        exportData = leads.length > 0 ? leads : campaignCustomers;

      }



      const headers = ["ID", "Customer Name", "Phone", "Email", "Company", "Location", "Requirement", "Status", "Call Status"];

      const rows = exportData.map((c: any) => [

        c.id || "",

        `"${(c.name || `${c.first_name || ""} ${c.last_name || ""}`).trim() || "Customer"}"`,

        `"${c.phone || ""}"`,

        `"${c.email || ""}"`,

        `"${c.company || ""}"`,

        `"${c.location || ""}"`,

        `"${(c.requirement || "").replace(/"/g, '""')}"`,

        `"${c.qualification_status || c.status || "COMPLETED"}"`,

        `"${c.call_status || "COMPLETED"}"`

      ]);



      const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");

      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");

      const listName = (selectedList?.name || "completed_calls").toLowerCase().replace(/[^a-z0-9]/g, "_");

      link.setAttribute("href", url);

      link.setAttribute("download", `${listName}_completed_report.csv`);

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

    } catch (err) {

      console.error("Failed to download completed list CSV:", err);

    }

  };



  if (!hydrated) return null;



  const isStatusView = tab === "status";



  // Filtered detailed calls for modal search

  const filteredCalls = detailedCalls.filter(c => 

    c.customer_name.toLowerCase().includes(modalSearch.toLowerCase()) ||

    c.customer_phone.includes(modalSearch) ||

    c.campaign_name.toLowerCase().includes(modalSearch.toLowerCase())

  );



  return (

    <div className="flex h-full animate-in fade-in duration-300 bg-slate-200/50 select-none overflow-hidden">

      {/* Main Central Workspace */}

      <div className="flex-1 flex flex-col min-w-0 p-4 gap-4 overflow-y-auto">

        

        {/* Banner notification for Dial Next / Actions */}

        {dialNextMsg && (

          <div className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-xs font-extrabold uppercase tracking-wider flex items-center justify-between shadow-md animate-in slide-in-from-top duration-200">

            <span>{dialNextMsg}</span>

            <button onClick={() => setDialNextMsg(null)} className="text-white hover:text-indigo-200"><X className="w-4 h-4" /></button>

          </div>

        )}



        {/* Dedicated Inline Call Disposition Page View */}

        {showDispo && (

          <div className="bg-white border border-indigo-200 rounded-xl shadow-md p-6 flex flex-col gap-5 animate-in fade-in">

            <div className="flex items-center justify-between border-b border-slate-200 pb-4">

              <div>

                <h2 className="text-lg font-extrabold text-slate-800 uppercase tracking-wide flex items-center gap-2">

                  <span className="w-3 h-3 rounded-full bg-indigo-600 inline-block animate-pulse"></span>

                  Call Disposition Page

                </h2>

                <p className="text-slate-500 text-xs mt-1">Please select and submit the call disposition outcome for this completed call session.</p>

              </div>

              <span className="text-[10px] font-extrabold bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full uppercase tracking-widest">

                Action Required

              </span>

            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

              <div>

                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">

                  Select Call Disposition Outcome

                </label>

                <select 

                  value={dispoOption}

                  onChange={(e) => setDispoOption(e.target.value)}

                  className="w-full p-3 border border-slate-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer shadow-sm font-medium text-slate-800"

                >

                  {dispoList.map(opt => (

                    <option key={opt} value={opt}>{opt}</option>

                  ))}

                  <option value="Others">Others</option>

                </select>

              </div>



              {dispoOption === "Others" ? (

                <div>

                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">

                    Custom Disposition Notes

                  </label>

                  <input 

                    type="text" 

                    value={customDispo}

                    onChange={(e) => setCustomDispo(e.target.value)}

                    placeholder="Type custom disposition..." 

                    autoFocus

                    className="w-full p-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 font-medium text-slate-800 shadow-sm" 

                  />

                </div>

              ) : (

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-600">

                  Selected outcome: <strong className="text-indigo-700 font-extrabold">{dispoOption}</strong>. Click submit to save record and clear disposition view.

                </div>

              )}

            </div>



            <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">

              <button 

                onClick={() => setShowDispo(false)} 

                className="px-5 py-2.5 text-xs font-bold text-slate-500 hover:text-slate-700 transition-colors cursor-pointer rounded-lg border border-slate-300 hover:bg-slate-50 uppercase tracking-wider"

              >

                Cancel

              </button>

              <button 

                onClick={() => {

                  let finalDispo = dispoOption;

                  if (dispoOption === "Others" && customDispo.trim()) {

                    finalDispo = customDispo.trim();

                  }

                  handleDispoSubmit(finalDispo);

                  setDispoOption(dispoList.length > 0 ? dispoList[0] : "Sale / Success");

                  setCustomDispo("");

                }} 

                className="px-7 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-extrabold rounded-lg shadow-sm transition-all uppercase tracking-widest cursor-pointer"

              >

                Submit Disposition

              </button>

            </div>

          </div>

        )}



        {/* Top Header / View Indicator */}

        {tab === "messages" ? (

          <MessagesPage

            onBack={() => router.push("/voice-agent/dashboard?tab=status")}

            leads={messagesHubLeads}

            activeLead={activeLeadFormatted}

          />

        ) : isStatusView ? (

          /* DEDICATED STATUS SIDEBAR VIEW */

          <div className="flex flex-col gap-4">

            <div className="bg-white border border-slate-300 rounded shadow-sm flex flex-col flex-1">

              <div className="flex items-center justify-between border-b border-slate-200 bg-slate-100/50 px-4">

                <div className="flex">

                  <button 

                    onClick={() => setStatusSubTab("DETAILS")} 

                    className={`px-6 py-3 text-xs font-extrabold uppercase tracking-wider border-r border-slate-200 cursor-pointer transition-all ${

                      statusSubTab === "DETAILS" ? "bg-white text-indigo-600 shadow-[0_-2px_0_inset_#4f46e5]" : "text-slate-500 hover:text-slate-700"

                    }`}

                  >

                    Call Detail

                  </button>

                  <button 

                    onClick={() => setStatusSubTab("HISTORY")} 

                    className={`px-6 py-3 text-xs font-extrabold uppercase tracking-wider border-r border-slate-200 cursor-pointer transition-all ${

                      statusSubTab === "HISTORY" ? "bg-white text-indigo-600 shadow-[0_-2px_0_inset_#4f46e5]" : "text-slate-500 hover:text-slate-700"

                    }`}

                  >

                    Call History ({detailedCalls.length})

                  </button>

                </div>

                <button

                  onClick={() => router.push("/voice-agent/dashboard")}

                  className="text-xs font-bold text-indigo-600 hover:underline cursor-pointer"

                >

                  ← Back to Main Dashboard

                </button>

              </div>



              <div className="p-6">

                {statusSubTab === "DETAILS" && (

                  <div className="space-y-6">

                    <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider">Current Call Details & Diagnostics</h3>

                    <div className="grid grid-cols-3 gap-6 text-sm bg-slate-50 p-6 rounded-xl border border-slate-200">

                      <div>

                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Customer Local Time</label>

                        <span className="font-bold text-slate-900">{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>

                      </div>

                      <div>

                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Channel / Line</label>

                        <span className="font-bold text-indigo-600">Voice (PSTN Outbound)</span>

                      </div>

                      <div>

                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Call Session ID</label>

                        <span className="font-mono text-xs font-bold text-slate-700">{callActive ? (activeCallId || "CL-99120349") : "SESSION-IDLE"}</span>

                      </div>

                      <div>

                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Direction</label>

                        <span className="font-bold text-blue-600">Outbound Dial</span>

                      </div>

                      <div>

                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Caller Number (Caller ID)</label>

                        <span className="font-mono font-bold text-indigo-700">{callerNumber || "+1 (839) 261-5369"}</span>

                      </div>

                      <div>

                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Target Phone (Customer)</label>

                        <span className="font-mono font-bold text-slate-900">

                          {leadPhone !== "—" ? leadPhone : (activeLead?.phone || (activeLead as any)?.phone_number || number || detailedCalls[0]?.customer_phone || campaignCustomers[0]?.phone || "—")}

                        </span>

                      </div>

                      <div>

                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Customer Name</label>

                        <span className="font-bold text-slate-900">

                          {leadName !== "Customer" ? leadName : (detailedCalls[0]?.customer_name || campaignCustomers[0]?.name || activeLead?.first_name || "Customer")}

                        </span>

                      </div>

                      <div>

                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Current Duration</label>

                        <span className="font-mono font-extrabold text-slate-900">{formatTime(callDuration)}</span>

                      </div>

                      <div>

                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Call Live Status</label>

                        <span className={`font-bold inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs ${callActive ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-slate-100 text-slate-600'}`}>

                          {callActive ? <><CheckCircle2 className="w-4 h-4 text-emerald-600 animate-pulse"/> Active Connected</> : <><XCircle className="w-4 h-4 text-slate-400" /> Disconnected</>}

                        </span>

                      </div>

                    </div>

                  </div>

                )}



                {statusSubTab === "HISTORY" && (

                  <div className="space-y-4">

                    <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider">Completed Call Logs</h3>

                    <div className="space-y-2">

                      {detailedCalls.map((call, idx) => (

                        <div key={`${call.id || 'call'}-${idx}`} className="flex justify-between items-center bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-indigo-300 transition-all group shadow-xs">

                          <div>

                            <div className="font-extrabold text-slate-900 text-base">{call.customer_name} ({call.customer_phone})</div>

                            {call.outcome && <div className="text-xs uppercase font-bold text-indigo-600 mt-0.5">{call.outcome}</div>}

                            <div className="text-[11px] text-slate-400 mt-1 uppercase font-semibold">Outbound PSTN • {call.status} • {call.campaign_name}</div>

                          </div>

                          <div className="flex items-center gap-6">

                            {call.has_recording && (

                              <button 

                                onClick={() => handlePlayRecording(call.id, call.recording_url)}

                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all shadow-xs cursor-pointer ${

                                  playingId === call.id 

                                    ? 'text-indigo-600 bg-indigo-50 border border-indigo-200 opacity-100' 

                                    : 'text-slate-500 hover:text-indigo-600 bg-white border border-slate-200 hover:border-indigo-200'

                                }`}

                              >

                                {playingId === call.id ? (

                                  <Pause className="w-4 h-4 animate-pulse" />

                                ) : (

                                  <Play className="w-4 h-4" />

                                )}

                                <span className="text-[10px] uppercase font-extrabold tracking-wider">

                                  {playingId === call.id ? "Playing Audio" : "Listen Recording"}

                                </span>

                              </button>

                            )}

                            <div className="text-right">

                              <div className="font-mono font-extrabold text-slate-700 text-sm">{call.formatted_duration}</div>

                              <div className="text-[10px] text-slate-400">{call.start_time}</div>

                            </div>

                          </div>

                        </div>

                      ))}

                    </div>

                  </div>

                )}

              </div>

            </div>

          </div>

        ) : (

          /* MAIN AGENT DASHBOARD WORKSPACE */

          <>

            {/* 5 Real-Time Summary Cards */}

            <div className="grid grid-cols-5 gap-4 shrink-0">

              {[

                { 

                  label: "Total Calls", 

                  value: (stats.today_calls !== undefined ? stats.today_calls : stats.total_calls).toString(), 

                  modal: "TOTAL_CALLS" as const,

                  subtext: "Click for full call history"

                },

                { 

                  label: "Total Time", 

                  value: formatTime((stats.today_time_seconds ?? 0) + (callActive ? callDuration : 0)), 

                  modal: "TOTAL_TIME" as const,

                  subtext: "Click for duration breakdown"

                },

                { 

                  label: "Agent Status", 

                  value: stats.agent_status, 

                  highlight: stats.agent_status === "AVAILABLE", 

                  busy: stats.agent_status === "BUSY" || stats.agent_status === "ON CALL", 

                  paused: stats.agent_status === "PAUSED",

                  subtext: "Dynamic auto-updating"

                },

                { 

                  label: "Calls in Queue", 

                  value: stats.calls_in_queue.toString(), 

                  modal: "QUEUE" as const,

                  subtext: "Click for queue details"

                },

                { 

                  label: "Calls on Hold", 

                  value: stats.calls_on_hold.toString(), 

                  modal: "HOLD" as const,

                  subtext: "Click for parked calls"

                },

              ].map((stat, i) => (

                <div 

                  key={i} 

                  onClick={() => stat.modal && handleOpenModal(stat.modal)}

                  className={`bg-white border border-slate-300 rounded shadow-sm p-3 text-center flex flex-col justify-center transition-all ${

                    stat.modal ? "hover:border-indigo-500 hover:shadow-md cursor-pointer hover:bg-indigo-50/30 group" : ""

                  }`}

                >

                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 group-hover:text-indigo-600">{stat.label}</p>

                  <h3 className={`text-xl font-extrabold tracking-tight ${

                    stat.highlight ? 'text-emerald-600' : (stat.busy ? 'text-rose-600' : (stat.paused ? 'text-amber-500' : 'text-slate-900'))

                  }`}>

                    {stat.value}

                  </h3>

                  <span className="text-[9px] text-slate-400 mt-1 font-semibold">{stat.subtext}</span>

                </div>

              ))}

            </div>



            {/* Active Call Workspace */}

            {callActive && (

              <>

                <ActiveCallPanel

                  callId={activeCallId || activeAssignment?.id}

                  leadId={activeLead?.id || (activeAssignment as any)?.lead_id || undefined}

                  leadName={leadName}

                  leadPhone={number || leadPhone}

                  initialStatus={telephonyStatus as any}

                  onStatusChange={(s) => {

                    setTelephonyStatus(s);

                    if (s === "QUALIFIED" || s === "NOT_QUALIFIED") {

                      setActiveLead((prev) => prev ? { ...prev, qualification_status: s } : prev);

                    }

                  }}

                  campaignId={(campaignScriptData as any)?.id}

                  campaignClientName={(campaignScriptData as any)?.client_name}

                  campaignClientPhone={(campaignScriptData as any)?.client_phone}

                  customerDurationFormatted={formatTimerClock(callDuration)}

                  clientDurationFormatted={formatTimerClock(clientDuration)}

                  clientDisconnectedAt={clientDisconnectedAt}

                  onDisconnectClient={handleDisconnectClient}

                  onClientConnected={(connAt) => {

                    setClientConnectedAt(connAt);

                    setClientDisconnectedAt(null);

                    setTelephonyStatus("CONFERENCE_3WAY_ACTIVE");

                  }}

                  agentName={user?.full_name || "Current Agent"}

                  onCallEnded={handleCallEnd}

                  onAnswerCall={handleAnswerCall}

                />

                <SelectClientModal

                  callId={activeCallId || activeAssignment?.id}

                  campaignId={(campaignScriptData as any)?.id}

                  campaignClients={campaignClients}

                  onClientConnected={(connAt) => {

                    setClientConnectedAt(connAt);

                    setClientDisconnectedAt(null);

                    setTelephonyStatus("CONFERENCE_3WAY_ACTIVE");

                  }}

                />

              </>

            )}



            {/* CUSTOMER COMMUNICATION HUB (SPLIT SCREEN LAYOUT) */}

            <div className="flex flex-col gap-4 shrink-0">

              <div className="bg-slate-50 border border-slate-300 rounded shadow-sm flex flex-col shrink-0">

                  <div className="flex border-b border-slate-200 bg-slate-100 justify-between items-center px-4 py-2 rounded-t">

                    <span className="text-slate-800 font-extrabold uppercase tracking-wider text-xs">Customer Communication Hub</span>

                  <div className="flex items-center gap-2">

                    <button

                      onClick={() => setShowLocalTestModal(true)}

                      className="px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-colors shadow-xs cursor-pointer bg-white border border-indigo-200 text-indigo-600 hover:bg-indigo-50"

                      title="Test Audio Devices"

                    >

                      <Mic className="w-3 h-3 inline-block mr-1" />

                      Audio Check

                    </button>

                    <button

                      onClick={handleDialNext}

                      disabled={isDialingNext || noMoreCustomers}

                      className={`px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-colors shadow-xs cursor-pointer ${

                        noMoreCustomers

                          ? "bg-slate-300 text-slate-500 cursor-not-allowed opacity-60"

                          : isDialingNext

                          ? "bg-indigo-400 text-white cursor-wait animate-pulse"

                          : "bg-indigo-600 hover:bg-indigo-700 text-white animate-pulse"

                      }`}

                    >

                      {isDialingNext ? "Dialing Next..." : noMoreCustomers ? "No More Customers" : "Dial Next Customer →"}

                    </button>

                    {isListFinished && (

                      <button

                        onClick={handleDownloadCompletedListCsv}

                        className="px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-colors shadow-xs cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1.5 animate-in fade-in"

                        title="Download completed calls report"

                      >

                        <Download className="w-3.5 h-3.5" />

                        Download Report

                      </button>

                    )}

                  </div>

                </div>



                <div className="p-4 grid grid-cols-2 gap-4">

                  {/* Left Column: Customer Data */}

                  <div className="bg-white border border-slate-200 rounded-lg p-4 flex flex-col gap-3 shadow-2xs">

                    <div className="border-b border-slate-100 pb-2 flex items-center justify-between">

                      <h4 className="text-xs font-extrabold text-indigo-900 uppercase tracking-wider">Customer Data</h4>

                      <div className="flex items-center gap-2">

                        <button

                          type="button"

                          onClick={() => router.push("/voice-agent/dashboard?tab=messages")}

                          className="flex items-center gap-1 text-[10px] font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 px-2 py-0.5 rounded cursor-pointer transition-colors"

                          title="Open WhatsApp & Email for this customer"

                        >

                          <MessageSquare className="w-3 h-3" />

                          WhatsApp / Email

                        </button>

                        <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded font-bold text-[9px] uppercase">

                          {activeLead?.status || (activeAssignment?.context as any)?.lead_status || "Ready"}

                        </span>

                        <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded font-bold text-[9px] uppercase">

                          {activeLead?.qualification_status || (activeAssignment?.context as any)?.qualification_status || "UNQUALIFIED"}

                        </span>

                      </div>

                    </div>

                    <div className="grid grid-cols-3 gap-2.5 text-xs">

                      <div className="bg-slate-50 p-2.5 rounded border border-slate-100">

                        <label className="block text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Lead Name</label>

                        <span className="font-bold text-slate-900 text-xs block mt-0.5 truncate">{leadName}</span>

                      </div>

                      <div className="bg-slate-50 p-2.5 rounded border border-slate-100">

                        <label className="block text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Phone Number</label>

                        <span className="font-mono font-bold text-indigo-600 text-xs block mt-0.5 truncate">{leadPhone}</span>

                      </div>

                      <div className="bg-slate-50 p-2.5 rounded border border-slate-100">

                        <label className="block text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Email</label>

                        <span className="font-semibold text-slate-800 text-xs block mt-0.5 truncate">{leadEmail}</span>

                      </div>

                      <div className="bg-slate-50 p-2.5 rounded border border-slate-100">

                        <label className="block text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Company</label>

                        <span className="font-semibold text-slate-800 text-xs block mt-0.5 truncate">{leadCompany}</span>

                      </div>

                      <div className="bg-slate-50 p-2.5 rounded border border-slate-100">

                        <label className="block text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">City / Location</label>

                        <span className="font-semibold text-slate-800 text-xs block mt-0.5 truncate">

                          {leadLocation}

                        </span>

                      </div>

                      <div className="bg-slate-50 p-2.5 rounded border border-slate-100">

                        <label className="block text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Assignment Status</label>

                        <span className="font-semibold text-indigo-700 text-xs block mt-0.5 truncate">

                          {activeAssignment?.status || "Assigned"}

                        </span>

                      </div>

                    </div>

                    <div className="bg-slate-50 p-3 rounded border border-slate-100 flex-1 flex flex-col justify-between">

                      <div>

                        <label className="block text-[9px] font-extrabold text-slate-400 uppercase tracking-wider mb-0.5">Requirement / Interest Description</label>

                        <p className="text-slate-800 text-xs font-medium leading-relaxed">{leadRequirement}</p>

                      </div>

                      <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex items-center justify-between flex-wrap gap-2">

                        <span className="text-[9px] font-extrabold uppercase text-slate-400">Client & Campaign Info</span>

                        <div className="flex items-center gap-1.5 flex-wrap">

                          {((campaignScriptData as any).client_name || (campaignScriptData as any).client_company) && (

                            <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded font-extrabold text-[9px]">

                              Client: {(campaignScriptData as any).client_name || (campaignScriptData as any).client_company}

                            </span>

                          )}

                          {(campaignScriptData as any).client_phone && (

                            <span className="px-2 py-0.5 bg-slate-100 text-slate-700 border border-slate-200 rounded font-mono font-bold text-[9px]">

                              Client Phone: {(campaignScriptData as any).client_phone}

                            </span>

                          )}

                          <span className="font-bold text-slate-700 text-[10px]">{campaignScriptData.name}</span>

                          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-bold text-[9px] uppercase">

                            {activeLead?.qualification_status || (activeAssignment?.context as any)?.qualification_status || "UNQUALIFIED"}

                          </span>

                        </div>

                      </div>

                    </div>

                  </div>



                  {/* Right Column: Agent Script */}

                  <div className="bg-white border border-slate-200 rounded-lg p-4 flex flex-col gap-3 shadow-2xs">

                    <div className="border-b border-slate-100 pb-2">

                      <h4 className="text-xs font-extrabold text-indigo-900 uppercase tracking-wider">Agent Script ({campaignScriptData.name})</h4>

                    </div>

                    <div className="bg-indigo-50 border border-indigo-100 p-2.5 rounded shadow-2xs">

                      <h5 className="text-[9px] font-extrabold text-indigo-900 uppercase tracking-wider mb-0.5">Opening Script</h5>

                      <p className="text-xs text-indigo-950 italic leading-relaxed">"{campaignScriptData.script}"</p>

                    </div>

                    <div className="grid grid-cols-3 gap-2 text-xs flex-1">

                      <div className="bg-slate-50 p-2 rounded border border-slate-100 max-h-32 overflow-y-auto">

                        <h5 className="font-bold text-slate-700 text-[9px] uppercase mb-0.5">Qualification Questions</h5>

                        <ul className="list-disc list-inside space-y-0.5 text-slate-600 text-[10px] leading-snug">

                          {campaignScriptData.questions.map((q, idx) => (

                            <li key={idx} className="truncate" title={q}>{q}</li>

                          ))}

                        </ul>

                      </div>

                      <div className="bg-slate-50 p-2 rounded border border-slate-100 max-h-32 overflow-y-auto">

                        <h5 className="font-bold text-slate-700 text-[9px] uppercase mb-0.5">Required Info</h5>

                        <ul className="list-disc list-inside space-y-0.5 text-slate-600 text-[10px] leading-snug">

                          {campaignScriptData.required_info.map((req, idx) => (

                            <li key={idx} className="truncate" title={req}>{req}</li>

                          ))}

                        </ul>

                      </div>

                      <div className="bg-slate-50 p-2 rounded border border-slate-100 max-h-32 overflow-y-auto">

                        <h5 className="font-bold text-slate-700 text-[9px] uppercase mb-0.5">Transfer Rules</h5>

                        <p className="text-slate-600 leading-snug text-[10px]">{campaignScriptData.transfer_rules}</p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </>

        )}

      </div>



      {/* Right Side Dial Control Panel */}

      <aside className="w-80 shrink-0 h-full overflow-y-auto border-l border-indigo-900/50 bg-slate-900">

        <DialControlPanel 

          number={number}

          setNumber={setNumber}

          callActive={callActive}

          setCallActive={setCallActive}

          telephonyStatus={telephonyStatus}

          onAnswerCall={handleAnswerCall}

          onResumeCall={handleResumeCall}

          paused={paused}

          setPaused={setPaused}

          agentStatus={stats.agent_status}

          onStatusChange={(newStatus) => {

            setStats((prev) => ({ ...prev, agent_status: newStatus }));

            setPaused(["COFFEE_BREAK", "LUNCH_BREAK", "PAUSED", "ON BREAK"].includes(newStatus));

          }}

          muted={muted}

          setMuted={setMuted}

          micCaptureState={micCaptureState}

          callId={activeCallId}

          campaignId={(campaignScriptData as any)?.id}

          campaignClients={campaignClients}

          onCallStart={handleCallStart}
          isStartingCall={isStartingCall}

          onCallEnd={handleCallEnd}

          onDialNext={handleDialNext}

          isDialingNext={isDialingNext}

          noMoreCustomers={noMoreCustomers}

          clientId={activeLead?.id}

          clientName={activeLead ? `${activeLead.first_name || ""} ${activeLead.last_name || ""}`.trim() : undefined}

          clientPhone={activeLead?.phone}

          pdActive={pdActive}

          onTogglePd={handleTogglePd}

          isPdLoading={isPdLoading}

        />

      </aside>



      {/* ------------------------------------------------------------------ */}

      {/* DETAILED MODAL: 1. TOTAL CALLS */}

      {/* ------------------------------------------------------------------ */}

      {activeModal === "TOTAL_CALLS" && (

        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-xs animate-in fade-in">

          <div className="bg-white rounded-xl shadow-2xl w-[900px] max-h-[85vh] flex flex-col overflow-hidden">

            <div className="p-4 bg-indigo-600 text-white flex items-center justify-between shrink-0">

              <div>

                <h3 className="font-extrabold text-base uppercase tracking-wider">Total Calls Handled ({detailedCalls.length})</h3>

                <p className="text-xs text-indigo-100">Detailed call logs for agent {user?.full_name}</p>

              </div>

              <button onClick={() => setActiveModal(null)} className="text-white hover:text-indigo-200 cursor-pointer">

                <X className="w-6 h-6" />

              </button>

            </div>



            {/* Search bar inside modal */}

            <div className="p-3 bg-slate-100 border-b border-slate-200 flex items-center gap-3 shrink-0">

              <div className="relative flex-1">

                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />

                <input

                  type="text"

                  value={modalSearch}

                  onChange={(e) => setModalSearch(e.target.value)}

                  placeholder="Search by customer name, phone, or campaign..."

                  className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-md text-xs font-semibold focus:outline-none focus:border-indigo-500"

                />

              </div>

            </div>



            <div className="p-4 overflow-y-auto flex-1 space-y-3">

              {filteredCalls.length > 0 ? (

                <div className="overflow-x-auto border border-slate-200 rounded-lg">

                  <table className="w-full text-left text-xs">

                    <thead className="bg-slate-100 text-slate-700 font-extrabold uppercase border-b border-slate-200">

                      <tr>

                        <th className="p-3">Customer</th>

                        <th className="p-3">Phone</th>

                        <th className="p-3">Campaign</th>

                        <th className="p-3">Duration</th>

                        <th className="p-3">Status</th>

                        <th className="p-3">Outcome</th>

                        <th className="p-3">Qualification</th>

                        <th className="p-3">Recording</th>

                      </tr>

                    </thead>

                    <tbody className="divide-y divide-slate-200 font-medium">

                      {filteredCalls.map(c => (

                        <tr key={c.id} className="hover:bg-slate-50">

                          <td className="p-3 font-bold text-slate-900">{c.customer_name}</td>

                          <td className="p-3 font-mono">{c.customer_phone}</td>

                          <td className="p-3 font-semibold text-indigo-600">{c.campaign_name}</td>

                          <td className="p-3 font-mono font-bold text-slate-700">{c.formatted_duration}</td>

                          <td className="p-3">

                            <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded font-bold uppercase text-[10px]">

                              {c.status}

                            </span>

                          </td>

                          <td className="p-3 font-semibold text-slate-800">{c.outcome}</td>

                          <td className="p-3">

                            <span className={`px-2 py-0.5 rounded font-bold uppercase text-[10px] ${

                              c.qualification_status === "QUALIFIED" ? "bg-emerald-100 text-emerald-800" : "bg-slate-200 text-slate-700"

                            }`}>

                              {c.qualification_status}

                            </span>

                          </td>

                          <td className="p-3">

                            <button

                              onClick={() => handlePlayRecording(c.id, c.recording_url)}

                              className={`flex items-center gap-1 px-2.5 py-1 rounded text-[10px] font-bold uppercase cursor-pointer ${

                                playingId === c.id ? "bg-indigo-600 text-white" : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100"

                              }`}

                            >

                              {playingId === c.id ? <Pause className="w-3 h-3 animate-pulse" /> : <Play className="w-3 h-3" />}

                              {playingId === c.id ? "Playing" : "Listen"}

                            </button>

                          </td>

                        </tr>

                      ))}

                    </tbody>

                  </table>

                </div>

              ) : (

                <div className="text-center py-10 text-slate-400 font-bold text-sm">No call records found matching criteria.</div>

              )}

            </div>



            <div className="p-4 bg-slate-100 border-t border-slate-200 flex justify-end shrink-0">

              <button onClick={() => setActiveModal(null)} className="px-6 py-2 bg-slate-700 hover:bg-slate-800 text-white rounded text-xs font-bold uppercase tracking-wider cursor-pointer">

                Close

              </button>

            </div>

          </div>

        </div>

      )}



      {/* ------------------------------------------------------------------ */}

      {/* DETAILED MODAL: 2. TOTAL TIME */}

      {/* ------------------------------------------------------------------ */}

      {activeModal === "TOTAL_TIME" && (

        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-xs animate-in fade-in">

          <div className="bg-white rounded-xl shadow-2xl w-[800px] max-h-[85vh] flex flex-col overflow-hidden">

            <div className="p-4 bg-indigo-600 text-white flex items-center justify-between shrink-0">

              <div>

                <h3 className="font-extrabold text-base uppercase tracking-wider">Total Time & Duration History</h3>

                <p className="text-xs text-indigo-100">Detailed time breakdown for agent {user?.full_name}</p>

              </div>

              <button onClick={() => setActiveModal(null)} className="text-white hover:text-indigo-200 cursor-pointer">

                <X className="w-6 h-6" />

              </button>

            </div>



            <div className="p-6 overflow-y-auto flex-1 space-y-6">

              {/* Summary Metrics */}

              <div className="grid grid-cols-2 gap-4">

                <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-xl text-center">

                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Lifetime Call Duration</span>

                  <h4 className="text-3xl font-extrabold text-indigo-900 mt-1 font-mono">{timeBreakdown?.formatted_total_time || formatTime(stats.total_time_seconds)}</h4>

                </div>

                <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-center">

                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Today's Call Duration</span>

                  <h4 className="text-3xl font-extrabold text-emerald-900 mt-1 font-mono">{timeBreakdown?.formatted_today_time || formatTime(stats.today_time_seconds)}</h4>

                </div>

              </div>



              {/* Date-wise Breakdown Table */}

              <div>

                <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2">Date-Wise Call History Breakdown</h4>

                <div className="overflow-x-auto border border-slate-200 rounded-lg text-xs">

                  <table className="w-full text-left">

                    <thead className="bg-slate-100 text-slate-700 font-bold uppercase border-b border-slate-200">

                      <tr>

                        <th className="p-3">Date</th>

                        <th className="p-3">Total Calls</th>

                        <th className="p-3">Total Time Spent</th>

                      </tr>

                    </thead>

                    <tbody className="divide-y divide-slate-200 font-medium">

                      {timeBreakdown?.date_wise_history.map((dh, idx) => (

                        <tr key={idx} className="hover:bg-slate-50">

                          <td className="p-3 font-bold text-slate-900">{dh.date}</td>

                          <td className="p-3 font-bold text-indigo-600">{dh.call_count} calls</td>

                          <td className="p-3 font-mono font-bold text-slate-800">{dh.formatted_duration}</td>

                        </tr>

                      ))}

                    </tbody>

                  </table>

                </div>

              </div>

            </div>



            <div className="p-4 bg-slate-100 border-t border-slate-200 flex justify-end shrink-0">

              <button onClick={() => setActiveModal(null)} className="px-6 py-2 bg-slate-700 hover:bg-slate-800 text-white rounded text-xs font-bold uppercase tracking-wider cursor-pointer">

                Close

              </button>

            </div>

          </div>

        </div>

      )}



      {/* ------------------------------------------------------------------ */}

      {/* DETAILED MODAL: 4. CALLS IN QUEUE */}

      {/* ------------------------------------------------------------------ */}

      {activeModal === "QUEUE" && (

        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-xs animate-in fade-in">

          <div className="bg-white rounded-xl shadow-2xl w-[850px] max-h-[85vh] flex flex-col overflow-hidden">

            <div className="p-4 bg-amber-500 text-slate-950 flex items-center justify-between shrink-0">

              <div>

                <h3 className="font-extrabold text-base uppercase tracking-wider">Calls Waiting in Queue ({detailedQueue.length})</h3>

                <p className="text-xs text-amber-950 font-semibold">Live waiting queue details</p>

              </div>

              <button onClick={() => setActiveModal(null)} className="text-slate-950 hover:text-amber-800 cursor-pointer">

                <X className="w-6 h-6" />

              </button>

            </div>



            <div className="p-6 overflow-y-auto flex-1 space-y-4">

              {detailedQueue.length > 0 ? (

                <div className="overflow-x-auto border border-slate-200 rounded-lg text-xs">

                  <table className="w-full text-left">

                    <thead className="bg-slate-100 text-slate-700 font-extrabold uppercase border-b border-slate-200">

                      <tr>

                        <th className="p-3">Pos</th>

                        <th className="p-3">Customer</th>

                        <th className="p-3">Phone</th>

                        <th className="p-3">Campaign</th>

                        <th className="p-3">Assigned To</th>

                        <th className="p-3">Waiting Time</th>

                        <th className="p-3">Status</th>

                      </tr>

                    </thead>

                    <tbody className="divide-y divide-slate-200 font-medium">

                      {detailedQueue.map(q => (

                        <tr key={q.id} className="hover:bg-amber-50/50">

                          <td className="p-3 font-extrabold text-amber-600">#{q.position}</td>

                          <td className="p-3 font-bold text-slate-900">{q.customer_name}</td>

                          <td className="p-3 font-mono">{q.customer_phone}</td>

                          <td className="p-3 font-semibold text-indigo-600">{q.campaign_name}</td>

                          <td className="p-3 font-bold text-slate-800">Assigned To: {q.assigned_agent}</td>

                          <td className="p-3 font-mono font-bold text-rose-600">{q.formatted_waiting_time}</td>

                          <td className="p-3">

                            <span className="px-2 py-0.5 bg-amber-100 text-amber-900 rounded font-bold text-[10px] uppercase">

                              {q.queue_status}

                            </span>

                          </td>

                        </tr>

                      ))}

                    </tbody>

                  </table>

                </div>

              ) : (

                <div className="text-center py-10 text-slate-400 font-bold text-sm">No calls currently waiting in queue.</div>

              )}

            </div>



            <div className="p-4 bg-slate-100 border-t border-slate-200 flex justify-end shrink-0">

              <button onClick={() => setActiveModal(null)} className="px-6 py-2 bg-slate-700 hover:bg-slate-800 text-white rounded text-xs font-bold uppercase tracking-wider cursor-pointer">

                Close

              </button>

            </div>

          </div>

        </div>

      )}



      {/* ------------------------------------------------------------------ */}

      {/* DETAILED MODAL: 5. CALLS ON HOLD */}

      {/* ------------------------------------------------------------------ */}

      {activeModal === "HOLD" && (

        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-xs animate-in fade-in">

          <div className="bg-white rounded-xl shadow-2xl w-[850px] max-h-[85vh] flex flex-col overflow-hidden">

            <div className="p-4 bg-rose-600 text-white flex items-center justify-between shrink-0">

              <div>

                <h3 className="font-extrabold text-base uppercase tracking-wider">Calls Currently On Hold / Parked ({detailedHold.length})</h3>

                <p className="text-xs text-rose-100">Live parked call slots & hold details</p>

              </div>

              <button onClick={() => setActiveModal(null)} className="text-white hover:text-rose-200 cursor-pointer">

                <X className="w-6 h-6" />

              </button>

            </div>



            <div className="p-6 overflow-y-auto flex-1 space-y-4">

              {detailedHold.length > 0 ? (

                <div className="overflow-x-auto border border-slate-200 rounded-lg text-xs">

                  <table className="w-full text-left">

                    <thead className="bg-slate-100 text-slate-700 font-extrabold uppercase border-b border-slate-200">

                      <tr>

                        <th className="p-3">Slot</th>

                        <th className="p-3">Customer</th>

                        <th className="p-3">Phone</th>

                        <th className="p-3">Agent</th>

                        <th className="p-3">Time On Hold</th>

                        <th className="p-3">Reason</th>

                        <th className="p-3">Action</th>

                      </tr>

                    </thead>

                    <tbody className="divide-y divide-slate-200 font-medium">

                      {detailedHold.map(h => (

                        <tr key={h.id} className="hover:bg-rose-50/50">

                          <td className="p-3 font-extrabold text-indigo-600">{h.slot}</td>

                          <td className="p-3 font-bold text-slate-900">{h.customer_name}</td>

                          <td className="p-3 font-mono">{h.customer_number}</td>

                          <td className="p-3 font-semibold text-slate-800">{h.agent_name}</td>

                          <td className="p-3 font-mono font-bold text-rose-600">{h.formatted_time_on_hold}</td>

                          <td className="p-3 font-semibold text-slate-700">{h.hold_reason}</td>

                          <td className="p-3">

                            <button

                              onClick={() => handleResumeParkedCallFromModal(h.call_id)}

                              className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded font-bold uppercase text-[10px] shadow-xs cursor-pointer"

                            >

                              Resume Call

                            </button>

                          </td>

                        </tr>

                      ))}

                    </tbody>

                  </table>

                </div>

              ) : (

                <div className="text-center py-10 text-slate-400 font-bold text-sm">No calls currently on hold or parked.</div>

              )}

            </div>



            <div className="p-4 bg-slate-100 border-t border-slate-200 flex justify-end shrink-0">

              <button onClick={() => setActiveModal(null)} className="px-6 py-2 bg-slate-700 hover:bg-slate-800 text-white rounded text-xs font-bold uppercase tracking-wider cursor-pointer">

                Close

              </button>

            </div>

          </div>

        </div>

      )}







      {/* 3-Way Live Call Transfer Incoming Notification Modal */}

      {incomingTransfer && (

        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/70 backdrop-blur-md animate-in fade-in">

          <div className="bg-slate-900 border-2 border-indigo-500 rounded-2xl shadow-2xl w-[420px] overflow-hidden text-slate-100 p-6 space-y-6">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3 text-indigo-400">

                <PhoneIncoming className="w-8 h-8 animate-bounce" />

                <div>

                  <h3 className="text-lg font-black uppercase tracking-wider text-white">Incoming Call Transfer</h3>

                  <p className="text-xs text-indigo-300">Live request from {incomingTransfer.from_agent_name}</p>

                </div>

              </div>

              <button

                onClick={() => {

                  setIncomingTransfer(null);

                  setIncomingTransferMsg(null);

                }}

                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition cursor-pointer"

                title="Close"

              >

                <X className="w-5 h-5" />

              </button>

            </div>



            <div className="p-4 bg-slate-950/80 rounded-xl border border-indigo-950 space-y-2.5">

              <div className="flex justify-between items-center text-xs">

                <span className="text-slate-400 font-extrabold uppercase">Lead Name:</span>

                <span className="text-white font-bold text-sm">{incomingTransfer.client_name}</span>

              </div>

              <div className="flex justify-between items-center text-xs">

                <span className="text-slate-400 font-extrabold uppercase">Phone:</span>

                <span className="text-indigo-300 font-bold font-mono">{incomingTransfer.client_phone}</span>

              </div>

              {(incomingTransfer.company || incomingTransfer.lead?.company) && (

                <div className="flex justify-between items-center text-xs">

                  <span className="text-slate-400 font-extrabold uppercase">Company:</span>

                  <span className="text-white font-medium text-xs">{incomingTransfer.company || incomingTransfer.lead?.company}</span>

                </div>

              )}

              {(incomingTransfer.email || incomingTransfer.lead?.email) && (

                <div className="flex justify-between items-center text-xs">

                  <span className="text-slate-400 font-extrabold uppercase">Email:</span>

                  <span className="text-slate-300 font-medium text-xs">{incomingTransfer.email || incomingTransfer.lead?.email}</span>

                </div>

              )}

              {(incomingTransfer.requirement || incomingTransfer.lead?.requirement || incomingTransfer.notes) && (

                <div className="flex justify-between items-start text-xs pt-1 border-t border-slate-900">

                  <span className="text-slate-400 font-extrabold uppercase shrink-0">Requirement:</span>

                  <span className="text-amber-300 font-semibold text-xs text-right line-clamp-2 max-w-[240px]">

                    {incomingTransfer.requirement || incomingTransfer.lead?.requirement || incomingTransfer.notes}

                  </span>

                </div>

              )}

              {incomingTransfer.campaign_client_name && (

                <div className="flex justify-between items-center text-xs pt-1 border-t border-slate-900">

                  <span className="text-slate-400 font-extrabold uppercase">Client Rep:</span>

                  <span className="text-emerald-400 font-bold text-xs">{incomingTransfer.campaign_client_name}</span>

                </div>

              )}

              <div className="flex justify-between items-center text-xs border-t border-slate-900 pt-1.5">

                <span className="text-slate-400 font-extrabold uppercase">Transferred By:</span>

                <span className="text-white font-bold">{incomingTransfer.from_agent_name}</span>

              </div>

              <div className="flex justify-between items-center text-xs border-t border-slate-900 pt-1.5">

                <span className="text-slate-500 font-extrabold uppercase">Call ID:</span>

                <span className="text-slate-400 font-mono text-[10px] select-all">{incomingTransfer.call_id}</span>

              </div>

            </div>



            {incomingTransferMsg && (

              <div className="p-2.5 bg-rose-950/50 border border-rose-900 text-rose-300 rounded-lg text-xs font-bold text-center">

                {incomingTransferMsg}

              </div>

            )}



            <div className="flex gap-4">

              <button

                onClick={handleRejectTransfer}

                className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 active:bg-slate-750 text-slate-300 hover:text-white font-extrabold text-xs rounded-xl uppercase tracking-wider transition-all cursor-pointer border border-slate-700 shadow-sm"

              >

                Reject Request

              </button>

              <button

                onClick={handleAcceptTransfer}

                className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-extrabold text-xs rounded-xl uppercase tracking-wider transition-all cursor-pointer shadow-lg hover:shadow-indigo-500/20"

              >

                Accept & Join

              </button>

            </div>

          </div>

        </div>

      )}



      {showLocalTestModal && (

        <AudioDeviceCheckModal

          onClose={() => setShowLocalTestModal(false)}

          onComplete={() => {

            setShowLocalTestModal(false);

            // Optionally, we could show a success toast here

          }}

        />

      )}

      {/* View Leads Modal */}

      {showLeadListModal && (

        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">

          <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl max-h-[85vh] flex flex-col overflow-hidden border border-slate-200">

            {/* Modal Header */}

            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-gradient-to-r from-indigo-50 to-white">

              <div className="flex items-center gap-3">

                <div className="p-2 bg-indigo-100 rounded-lg">

                  <Users className="w-5 h-5 text-indigo-600" />

                </div>

                <div>

                  <h2 className="text-lg font-bold text-gray-900">

                    Lead List Customers

                  </h2>

                  <p className="text-xs text-gray-500">

                    {leadLists.find((l: any) => l.id === selectedLeadListId)?.name || "Selected List"} — {leadListCustomers.length} customers

                  </p>

                </div>

              </div>

              <button

                onClick={() => { setShowLeadListModal(false); setLeadListCustomers([]); }}

                className="p-2 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"

              >

                <X className="w-5 h-5 text-gray-500" />

              </button>

            </div>



            {/* Filter Pills & Search */}

            <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3 bg-slate-50 border-b border-slate-200">

              <div className="flex flex-wrap items-center gap-1.5">

                <button

                  onClick={() => setLeadListModalFilter("ALL")}

                  className={`px-3 py-1 rounded-full text-xs font-bold transition-colors cursor-pointer ${

                    leadListModalFilter === "ALL" ? "bg-indigo-600 text-white shadow-xs" : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"

                  }`}

                >

                  All ({leadListCustomers.length})

                </button>

                <button

                  onClick={() => setLeadListModalFilter("QUALIFIED")}

                  className={`px-3 py-1 rounded-full text-xs font-bold transition-colors cursor-pointer flex items-center gap-1 ${

                    leadListModalFilter === "QUALIFIED" ? "bg-emerald-600 text-white shadow-xs" : "bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-50"

                  }`}

                >

                  <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Qualified ({leadListCustomers.filter((c: any) => c.qualification_status === "QUALIFIED").length})

                </button>

                <button

                  onClick={() => setLeadListModalFilter("NOT_QUALIFIED")}

                  className={`px-3 py-1 rounded-full text-xs font-bold transition-colors cursor-pointer flex items-center gap-1 ${

                    leadListModalFilter === "NOT_QUALIFIED" ? "bg-rose-600 text-white shadow-xs" : "bg-white text-rose-700 border border-rose-200 hover:bg-rose-50"

                  }`}

                >

                  <XCircle className="w-3 h-3 text-rose-600" /> Not Qualified ({leadListCustomers.filter((c: any) => c.qualification_status === "NOT_QUALIFIED").length})

                </button>

                <button

                  onClick={() => setLeadListModalFilter("PENDING")}

                  className={`px-3 py-1 rounded-full text-xs font-bold transition-colors cursor-pointer ${

                    leadListModalFilter === "PENDING" ? "bg-amber-600 text-white shadow-xs" : "bg-white text-amber-700 border border-amber-200 hover:bg-amber-50"

                  }`}

                >

                  Pending ({leadListCustomers.filter((c: any) => c.call_status === "PENDING" || c.call_status === "NEW" || !c.call_status).length})

                </button>

                <button

                  onClick={() => setLeadListModalFilter("FAILED")}

                  className={`px-3 py-1 rounded-full text-xs font-bold transition-colors cursor-pointer ${

                    leadListModalFilter === "FAILED" ? "bg-slate-700 text-white shadow-xs" : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"

                  }`}

                >

                  Failed ({leadListCustomers.filter((c: any) => c.call_status === "FAILED").length})

                </button>

              </div>

              <div className="relative w-64">

                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />

                <input

                  type="text"

                  value={leadListModalSearch}

                  onChange={(e) => setLeadListModalSearch(e.target.value)}

                  placeholder="Search name, phone..."

                  className="w-full h-8 pl-8 pr-3 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500 font-medium"

                />

              </div>

            </div>



            {/* Modal Body */}

            <div className="flex-1 overflow-auto p-4">

              {loadingLeadListCustomers ? (

                <div className="flex items-center justify-center py-16">

                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>

                  <span className="ml-3 text-sm text-gray-500 font-medium">Loading customers...</span>

                </div>

              ) : leadListCustomers.length === 0 ? (

                <div className="text-center py-16 text-gray-400">

                  <Users className="w-12 h-12 mx-auto mb-3 opacity-40" />

                  <p className="text-sm font-medium">No customers found in this lead list.</p>

                  <p className="text-xs mt-1">Upload a CSV file to add customers.</p>

                </div>

              ) : (

                <div className="overflow-x-auto">

                  <table className="w-full text-sm text-left">

                    <thead className="bg-slate-50 text-slate-600 uppercase text-[11px] font-bold tracking-wider border-b border-slate-200">

                      <tr>

                        <th className="px-3 py-3">#</th>

                        <th className="px-3 py-3">Customer Name</th>

                        <th className="px-3 py-3">Phone</th>

                        <th className="px-3 py-3">Email</th>

                        <th className="px-3 py-3">Company</th>

                        <th className="px-3 py-3">Requirement</th>

                        <th className="px-3 py-3">Call Status</th>

                        <th className="px-3 py-3">Qualification</th>

                        <th className="px-3 py-3">Disposition</th>

                      </tr>

                    </thead>

                    <tbody className="divide-y divide-slate-100">

                      {leadListCustomers

                        .filter((c: any) => {

                          if (leadListModalFilter === "QUALIFIED" && c.qualification_status !== "QUALIFIED") return false;

                          if (leadListModalFilter === "NOT_QUALIFIED" && c.qualification_status !== "NOT_QUALIFIED") return false;

                          if (leadListModalFilter === "FAILED" && c.call_status !== "FAILED") return false;

                          if (leadListModalFilter === "PENDING" && c.call_status !== "PENDING" && c.call_status !== "NEW" && c.call_status) return false;

                          if (leadListModalSearch.trim()) {

                            const q = leadListModalSearch.toLowerCase();

                            const name = `${c.first_name || ""} ${c.last_name || ""}`.toLowerCase();

                            const phone = (c.phone || "").toLowerCase();

                            const company = (c.company || "").toLowerCase();

                            if (!name.includes(q) && !phone.includes(q) && !company.includes(q)) return false;

                          }

                          return true;

                        })

                        .map((c: any, idx: number) => {

                          const name = `${c.first_name || ""} ${c.last_name || ""}`.trim() || "—";

                          const statusColor = 

                            c.call_status === "COMPLETED" ? "bg-green-100 text-green-700 border border-green-200" :

                            c.call_status === "CALLING" ? "bg-blue-100 text-blue-700 border border-blue-200" :

                            c.call_status === "FAILED" ? "bg-rose-50 text-rose-700 border border-rose-200" :

                            c.call_status === "PENDING" ? "bg-yellow-50 text-yellow-700 border border-yellow-200" :

                            "bg-slate-100 text-slate-600 border border-slate-200";



                          const isQual = c.qualification_status === "QUALIFIED";

                          const isNotQual = c.qualification_status === "NOT_QUALIFIED";



                          return (

                            <tr key={c.id || idx} className="hover:bg-indigo-50/30 transition-colors">

                              <td className="px-3 py-2.5 text-gray-400 font-mono text-xs">{idx + 1}</td>

                              <td className="px-3 py-2.5 font-semibold text-gray-900">{name}</td>

                              <td className="px-3 py-2.5 font-mono text-gray-700 text-xs">{c.phone || "—"}</td>

                              <td className="px-3 py-2.5 text-gray-600 text-xs">{c.email || "—"}</td>

                              <td className="px-3 py-2.5 text-gray-600 text-xs">{c.company || "—"}</td>

                              <td className="px-3 py-2.5 text-gray-600 text-xs max-w-[180px] truncate" title={c.requirement}>{c.requirement || "—"}</td>

                              <td className="px-3 py-2.5">

                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${statusColor}`}>

                                  {c.call_status || "NEW"}

                                </span>

                              </td>

                              <td className="px-3 py-2.5">

                                {isQual ? (

                                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-emerald-100 text-emerald-800 border border-emerald-300 inline-flex items-center gap-1">

                                    <CheckCircle2 className="w-3 h-3 text-emerald-600" /> QUALIFIED

                                  </span>

                                ) : isNotQual ? (

                                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-rose-100 text-rose-800 border border-rose-300 inline-flex items-center gap-1">

                                    <XCircle className="w-3 h-3 text-rose-600" /> NOT QUALIFIED

                                  </span>

                                ) : (

                                  <span className="px-2 py-0.5 rounded-full text-[10px] font-medium uppercase bg-slate-100 text-slate-500 border border-slate-200">

                                    UNQUALIFIED

                                  </span>

                                )}

                              </td>

                              <td className="px-3 py-2.5 text-xs text-slate-600 font-medium">

                                {c.call_result && c.call_result !== "—" ? c.call_result : "—"}

                              </td>

                            </tr>

                          );

                        })}

                    </tbody>

                  </table>

                </div>

              )}

            </div>



            {/* Modal Footer */}

            <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between">

              <span className="text-xs text-gray-500">

                Total: <b>{leadListCustomers.length}</b> | 

                Qualified: <b className="text-emerald-700">{leadListCustomers.filter((c: any) => c.qualification_status === "QUALIFIED").length}</b> | 

                Not Qualified: <b className="text-rose-700">{leadListCustomers.filter((c: any) => c.qualification_status === "NOT_QUALIFIED").length}</b> | 

                Pending: <b>{leadListCustomers.filter((c: any) => c.call_status === "PENDING" || c.call_status === "NEW" || !c.call_status).length}</b> | 

                Failed: <b>{leadListCustomers.filter((c: any) => c.call_status === "FAILED").length}</b>

              </span>

              <div className="flex items-center gap-2">

                {leadListCustomers.length > 0 && (

                  <button

                    onClick={handleDownloadCompletedListCsv}

                    className="px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm"

                    title="Export customers to CSV"

                  >

                    <Download className="w-3.5 h-3.5" />

                    Download CSV

                  </button>

                )}

                <button

                  onClick={() => { setShowLeadListModal(false); setLeadListCustomers([]); }}

                  className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-gray-700 rounded-lg text-xs font-bold transition-colors cursor-pointer"

                >

                  Close

                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>

  );

}

