"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { localVoiceTestService, ScriptStepItem } from "@/lib/services/local-voice-test.service";
import {
  Bot,
  User,
  Phone,
  Sparkles,
  Loader2,
  X,
  Minus,
  Maximize2,
  Check,
  ArrowRight,
  Circle,
  Send,
  ShieldCheck,
  Home,
  Building,
  DollarSign,
  MapPin,
  Calendar,
  AlertTriangle,
  WifiOff,
  Headphones,
  PhoneForwarded,
  PhoneCall,
  Download,
  FileText,
  Printer,
  Pause,
  Play,
  Volume2,
  Mic,
  Clock,
  MoreVertical,
  CheckCheck,
  Users,
  Search
} from "lucide-react";
import { leadAssignmentService } from "@/lib/services/lead-assignment.service";
import { transferService } from "@/lib/services/transfer.service";
import { campaignService, CampaignAiAgentLead } from "@/lib/services/campaign.service";
import { useWebSocketSync } from "@/lib/hooks/useWebSocketSync";
import { apiFetch } from "@/lib/api-client";
import { useCallTransfer } from "@/lib/hooks/useCallTransfer";
import { TransferStatusBanner } from "@/components/call-transfer/TransferStatusBanner";

export interface ActiveCustomerLead {
  id?: string;
  name: string;
  phone: string;
  company?: string;
  status?: string;
}

interface LocalVoiceTestModalProps {
  campaignId: string;
  campaignName: string;
  agentId?: string;
  onClose: () => void;
  isMinimized?: boolean;
  onToggleMinimize?: (minimized: boolean) => void;
  minimizedIndex?: number;
}

export type VoiceConnectionState = 
  | "INITIALIZING"
  | "CONNECTING"
  | "RINGING"
  | "CONNECTED"
  | "PROCESSING"
  | "ERROR"
  | "TRANSFERRING"
  | "WITH_HUMAN_AGENT"
  | "DISCONNECTED";

export const isLeadEligible = (lead?: CampaignAiAgentLead | null): boolean => {
  if (!lead) return false;
  const status = (lead.call_status || (lead as any).status || "").toUpperCase();
  const qual = (lead.qualification || "").toUpperCase();
  const disp = ((lead as any).disposition || "").toUpperCase();
  const terminalStates = [
    "COMPLETED",
    "QUALIFIED",
    "NOT_QUALIFIED",
    "DNC",
    "DO NOT CALL",
    "FAILED",
    "SUPPRESSED",
    "UNREACHABLE",
    "DROPPED",
  ];
  return (
    !terminalStates.includes(status) &&
    !terminalStates.includes(qual) &&
    !terminalStates.includes(disp)
  );
};

export function LocalVoiceTestModal({
  campaignId,
  campaignName,
  agentId,
  onClose,
  isMinimized: controlledMinimized,
  onToggleMinimize,
  minimizedIndex = 0,
}: LocalVoiceTestModalProps) {
  const [connectionState, setConnectionState] = useState<VoiceConnectionState>("INITIALIZING");
  const [voiceStatus, setVoiceStatus] = useState<"idle" | "listening" | "transcribing" | "thinking" | "speaking">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [voiceTranscript, setVoiceTranscript] = useState<Array<{ sender: "user" | "ai"; text: string }>>([]);
  const [voiceSessionId, setVoiceSessionId] = useState<string | undefined>(undefined);
  const [currentScriptStep, setCurrentScriptStep] = useState<string>("1. Greeting");
  const [scriptSteps, setScriptSteps] = useState<ScriptStepItem[]>([]);
  const [collectedData, setCollectedData] = useState<Record<string, any>>({});
  const [qualificationStatus, setQualificationStatus] = useState<string>("IN_PROGRESS");
  const [typedInputMessage, setTypedInputMessage] = useState<string>("");
  const [transferStatus, setTransferStatus] = useState<string | null>(null);
  const [isTransferring, setIsTransferring] = useState<boolean>(false);
  const [elapsedMs, setElapsedMs] = useState<number>(0);
  const [lastTurnLatencyMs, setLastTurnLatencyMs] = useState<number | null>(null);
  const [micLanguage, setMicLanguage] = useState<string>("en-IN");
  const [interimText, setInterimText] = useState<string>("");
  const [resolvedAgentName, setResolvedAgentName] = useState<string>("AI Voice Assistant");
  const [resolvedAgentType, setResolvedAgentType] = useState<string>("AI_VOICE");
  const [internalMinimized, setInternalMinimized] = useState<boolean>(false);
  const isMinimized = controlledMinimized !== undefined ? controlledMinimized : internalMinimized;
  const setIsMinimized = (val: boolean | ((prev: boolean) => boolean)) => {
    const nextVal = typeof val === "function" ? val(isMinimized) : val;
    setInternalMinimized(nextVal);
    if (onToggleMinimize) {
      onToggleMinimize(nextVal);
    }
  };

  // Customer Lead Management
  const [assignedLeads, setAssignedLeads] = useState<CampaignAiAgentLead[]>([]);
  const [selectedLeadId, setSelectedLeadId] = useState<string | undefined>(undefined);
  const [activeCustomer, setActiveCustomer] = useState<ActiveCustomerLead | null>(null);
  const [loadingLeads, setLoadingLeads] = useState<boolean>(false);

  // Auto-Dial Campaign Ratio & Live Concurrency State
  const [dialerStatus, setDialerStatus] = useState<{
    status: string;
    auto_dial_enabled?: boolean;
    ratio: number;
    target_capacity?: number;
    active_calls: number;
    available_slots: number;
    pending_leads?: number;
    ringing_calls?: number;
    completed_calls?: number;
    failed_calls?: number;
  } | null>(null);
  const [dialingActionLoading, setDialingActionLoading] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"Conversation" | "Transcript" | "Call Details">("Conversation");
  const [conversationsByLeadId, setConversationsByLeadId] = useState<
    Record<string, Array<{ id?: string; sender: "user" | "ai"; text: string; timestamp?: string }>>
  >({});
  const [leadDurations, setLeadDurations] = useState<Record<string, number>>({});
  const leadStartTimesRef = useRef<Record<string, number>>({});
  const [leftPanelTab, setLeftPanelTab] = useState<"ACTIVE" | "ALL">("ACTIVE");
  const [leadListFilter, setLeadListFilter] = useState<"ALL" | "PENDING" | "ACTIVE" | "COMPLETED" | "FAILED" | "DND">("ALL");
  const [leadSearchText, setLeadSearchText] = useState<string>("");

  const getInitials = (name?: string) => {
    if (!name) return "C";
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  const getAvatarBg = (name?: string, index: number = 0) => {
    const colors = [
      "bg-purple-600 text-white",
      "bg-blue-600 text-white",
      "bg-amber-600 text-white",
      "bg-emerald-600 text-white",
      "bg-rose-600 text-white",
      "bg-indigo-600 text-white",
    ];
    return colors[index % colors.length];
  };

  const playSingleMessageAudio = (text: string) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(cleanSpeechText(text));
    utterance.lang = micLanguageRef.current || "en-IN";
    window.speechSynthesis.speak(utterance);
  };

  const ACTIVE_STATUS_SET = new Set([
    "DIALING", "RINGING", "CONNECTED", "IN_CALL", "CALLING",
    "RESERVED", "IN_PROGRESS", "TALKING", "AI_HANDLING", "HUMAN_HANDLING",
    "initiating", "ringing", "answered", "in_progress", "active", "live"
  ]);

  // Dynamic active calls list from backend records & active session
  const activeCalls = React.useMemo(() => {
    const seen = new Set<string>();
    const list: CampaignAiAgentLead[] = [];

    for (const l of assignedLeads) {
      const st = (l.call_status || "").toUpperCase();
      const isAct = ACTIVE_STATUS_SET.has(st) && !["COMPLETED", "FAILED", "DISCONNECTED", "ENDED", "CANCELLED", "PENDING"].includes(st);
      if (isAct && !seen.has(l.id)) {
        seen.add(l.id);
        list.push(l);
      }
    }

    if (activeCustomer?.id && !seen.has(activeCustomer.id) && connectionState !== "DISCONNECTED" && connectionState !== "ERROR") {
      seen.add(activeCustomer.id);
      list.unshift({
        id: activeCustomer.id,
        name: activeCustomer.name,
        phone: activeCustomer.phone,
        company: activeCustomer.company || "",
        call_status: activeCustomer.status || connectionState || "CONNECTED",
        qualification: qualificationStatus || "PENDING",
        disposition: "IN_PROGRESS",
        last_call: "Just now",
        duration: Math.floor(elapsedMs / 1000),
        agent: resolvedAgentName,
        sentiment: "Neutral",
        intent: "Campaign Inquiry",
      });
    }

    return list;
  }, [assignedLeads, activeCustomer, connectionState, qualificationStatus, elapsedMs, resolvedAgentName]);

  const leadCounts = React.useMemo(() => {
    let pending = 0;
    let active = 0;
    let completed = 0;
    let failed = 0;
    let dnd = 0;

    for (const l of assignedLeads) {
      const st = (l.call_status || "").toUpperCase();
      const isDnd = ["DNC", "DO_NOT_CALL", "BLACKLISTED", "BLOCKED"].some((s) => st.includes(s));
      if (isDnd) {
        dnd++;
      } else if (["COMPLETED", "QUALIFIED", "CALLED", "SALE / SUCCESS"].some((s) => st.includes(s))) {
        completed++;
      } else if (["FAILED", "NO_ANSWER", "BUSY", "CANCELLED"].some((s) => st.includes(s))) {
        failed++;
      } else if (ACTIVE_STATUS_SET.has(st) && !["COMPLETED", "FAILED", "DISCONNECTED", "ENDED", "CANCELLED", "PENDING"].includes(st)) {
        active++;
      } else {
        pending++;
      }
    }
    return {
      total: assignedLeads.length,
      pending,
      active,
      completed,
      failed,
      dnd,
    };
  }, [assignedLeads]);

  const filteredAssignedLeads = React.useMemo(() => {
    return assignedLeads.filter((lead) => {
      const q = leadSearchText.toLowerCase().trim();
      if (q) {
        const matchesQuery =
          (lead.name || "").toLowerCase().includes(q) ||
          (lead.phone || "").toLowerCase().includes(q) ||
          (lead.company || "").toLowerCase().includes(q);
        if (!matchesQuery) return false;
      }

      if (leadListFilter === "ALL") return true;

      const st = (lead.call_status || "").toUpperCase();
      const isDnd = ["DNC", "DO_NOT_CALL", "BLACKLISTED", "BLOCKED"].some((s) => st.includes(s));
      if (leadListFilter === "DND") return isDnd;

      const isAct = ACTIVE_STATUS_SET.has(st) && !["COMPLETED", "FAILED", "DISCONNECTED", "ENDED", "CANCELLED", "PENDING"].includes(st);
      if (leadListFilter === "ACTIVE") return isAct;

      const isComp = ["COMPLETED", "QUALIFIED", "CALLED", "SALE / SUCCESS"].some((s) => st.includes(s));
      if (leadListFilter === "COMPLETED") return isComp;

      const isFail = ["FAILED", "NO_ANSWER", "BUSY", "CANCELLED"].some((s) => st.includes(s));
      if (leadListFilter === "FAILED") return isFail;

      if (leadListFilter === "PENDING") {
        return !isAct && !isComp && !isFail && !isDnd;
      }

      return true;
    });
  }, [assignedLeads, leadSearchText, leadListFilter]);

  // Keep individual call durations live without full-modal reinitialization
  useEffect(() => {
    const timer = setInterval(() => {
      setLeadDurations((prev) => {
        const next = { ...prev };
        const now = Date.now();
        activeCalls.forEach((lead) => {
          if (!leadStartTimesRef.current[lead.id]) {
            leadStartTimesRef.current[lead.id] = now - ((lead.duration || 0) * 1000);
          }
          next[lead.id] = now - leadStartTimesRef.current[lead.id];
        });
        return next;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [activeCalls]);

  const refreshDialerStatus = useCallback(async () => {
    try {
      const statusData = await campaignService.getDialerStatus(campaignId);
      if (statusData) {
        setDialerStatus(statusData as any);
      }
    } catch (e) {
      // ignore
    }
  }, [campaignId]);

  const handleToggleAutoDial = async () => {
    if (dialingActionLoading) return;
    setDialingActionLoading(true);
    try {
      const isRunning = dialerStatus?.status === "RUNNING";
      if (isRunning) {
        await campaignService.pauseDialer(campaignId);
      } else {
        await campaignService.startDialer(campaignId);
      }
      await refreshDialerStatus();
      const updatedLeads = await campaignService.getAiAgentLeads(campaignId, { limit: 500 });
      if (updatedLeads?.leads) {
        setAssignedLeads(updatedLeads.leads);
      }
    } catch (err: any) {
      console.warn("Failed to toggle campaign dialer:", err);
    } finally {
      setDialingActionLoading(false);
    }
  };

  // Component Refs
  const activeSessionRef = useRef<boolean>(false);
  const voiceSessionIdRef = useRef<string | undefined>(undefined);
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null);
  const recognitionRef = useRef<any>(null);
  const activeLanguageRef = useRef<string>("en-IN");
  const micLanguageRef = useRef<string>("en-IN");
  const accumulatedSpeechRef = useRef<string>("");
  const vadSilenceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const sessionStartTimeRef = useRef<number | null>(null);
  const timerIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const activeCallIdRef = useRef<string | null>(null);
  const callPollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const pendingGreetingRef = useRef<{ greeting: string; audioUrl?: string | null } | null>(null);
  const isStartingRef = useRef<boolean>(false);
  const transferInitiatedRef = useRef<boolean>(false);
  const voiceStatusRef = useRef<string>(voiceStatus);
  voiceStatusRef.current = voiceStatus;

  const assignedLeadsRef = useRef<CampaignAiAgentLead[]>([]);
  assignedLeadsRef.current = assignedLeads;
  const selectedLeadIdRef = useRef<string | undefined>(selectedLeadId);
  selectedLeadIdRef.current = selectedLeadId;
  const startSessionRef = useRef<((leadIdOverride?: string) => Promise<void>) | null>(null);
  const autoDialNextTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const autoDialTriggeredRef = useRef<boolean>(false);
  const handleVoiceAgentConnectedCutRef = useRef<((agentName?: string) => void) | null>(null);

  // AI Agent -> Human Voice Agent warm handoff hook
  const callTransfer = useCallTransfer({
    callId: activeCallIdRef.current || voiceSessionId,
    campaignId,
    leadId: activeCustomer?.id || selectedLeadId,
    customerName: activeCustomer?.name,
    customerPhone: activeCustomer?.phone,
    onHumanConnected: (humanAgentName) => {
      if (handleVoiceAgentConnectedCutRef.current) {
        handleVoiceAgentConnectedCutRef.current(humanAgentName);
      }
    },
    onAiResume: () => {
      setTransferStatus(null);
    },
  });


  // Format elapsed call duration in MM:SS
  const formatDuration = (ms: number) => {
    const totalSecs = Math.floor(ms / 1000);
    const mins = Math.floor(totalSecs / 60).toString().padStart(2, '0');
    const secs = (totalSecs % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  // Start the call timer in milliseconds
  const startTimer = useCallback(() => {
    if (timerIntervalRef.current) return; // already running
    sessionStartTimeRef.current = Date.now();
    setElapsedMs(0);
    timerIntervalRef.current = setInterval(() => {
      if (sessionStartTimeRef.current) {
        setElapsedMs(Date.now() - sessionStartTimeRef.current);
      }
    }, 50);
  }, []);

  // Stop the call timer and return elapsed milliseconds
  const stopTimer = useCallback((): number => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
    if (sessionStartTimeRef.current) {
      return Date.now() - sessionStartTimeRef.current;
    }
    return 0;
  }, []);

  // Markdown & special character stripping for clean speech synthesis
  const cleanSpeechText = (text: string): string => {
    if (!text) return "";
    return text
      .replace(/<[^>]+>/g, " ")               // XML / HTML tags (<emotion...>, <Calls Script>, etc.)
      .replace(/\*\*(.*?)\*\*/g, "$1")       // **bold** -> bold
      .replace(/\*(.*?)\*/g, "$1")           // *italic* -> italic
      .replace(/__(.*?)__/g, "$1")           // __bold__ -> bold
      .replace(/_(.*?)_/g, "$1")             // _italic_ -> italic
      .replace(/~~(.*?)~~/g, "$1")           // ~~strikethrough~~ -> strikethrough
      .replace(/`{1,3}(.*?)`{1,3}/g, "$1")   // `code` -> code
      .replace(/#{1,6}\s+/g, "")             // # Header -> Header
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // [text](url) -> text
      .replace(/^[*-]\s+/gm, "")             // bullet points
      .replace(/[*_#`~]/g, "")               // stray markdown symbols
      .replace(/\s+/g, " ")                  // normalize spaces
      .trim();
  };


  const changeMicLanguage = (langCode: string) => {
    setMicLanguage(langCode);
    micLanguageRef.current = langCode;
    activeLanguageRef.current = langCode;
    if (recognitionRef.current) {
      try {
        recognitionRef.current.abort();
      } catch (e) {}
    }
    setTimeout(() => {
      if (activeSessionRef.current && typeof window !== "undefined" && !window.speechSynthesis.speaking) {
        initiateListening();
      }
    }, 200);
  };

  // Speech synthesis helper supporting physical <break time="Xs" /> pause gaps, emotions and markdown stripping
  const playVoiceResponse = (text: string, onEndCallback: () => void) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    if (pauseTimerRef.current) {
      clearTimeout(pauseTimerRef.current);
      pauseTimerRef.current = null;
    }

    if (recognitionRef.current) {
      try {
        recognitionRef.current.abort();
      } catch (e) {}
    }

    const EMOTION_VOICE_MODULATION: Record<string, { pitch: number; rate: number }> = {
      happy: { pitch: 1.02, rate: 1.0 },
      sad: { pitch: 0.98, rate: 0.92 },
      fearful: { pitch: 1.02, rate: 1.02 },
      disgusted: { pitch: 0.98, rate: 0.95 },
      surprised: { pitch: 1.02, rate: 1.02 },
      neutral: { pitch: 1.0, rate: 1.0 },
      fluent: { pitch: 1.0, rate: 1.02 },
    };

    // Split speech into chunks separated by pause tags like <break time="0.5s" /> or [pause: 1s] and <emotion type="..." />
    const combinedRegex = /(<emotion\s+type=["']?([a-zA-Z]+)["']?\s*\/?>)|(<break\s+time=["']?(\d*\.?\d+)s?["']?\s*\/?>|\[pause:?\s*(\d*\.?\d+)s?\])/gi;
    const segments: Array<{ text: string; emotion: string; pauseAfterMs: number }> = [];
    let currentEmotion = "neutral";
    let lastIdx = 0;
    let match;

    while ((match = combinedRegex.exec(text)) !== null) {
      const rawChunk = text.substring(lastIdx, match.index).replace(/<[^>]+>/g, "").trim();
      const chunkText = cleanSpeechText(rawChunk);
      const emotionTag = match[2];
      const pauseSec = parseFloat(match[4] || match[5] || "0");
      const pauseMs = Math.max(0, Math.round(pauseSec * 1000));

      if (emotionTag) {
        if (chunkText) {
          segments.push({ text: chunkText, emotion: currentEmotion, pauseAfterMs: 0 });
        }
        currentEmotion = emotionTag.toLowerCase();
      } else if (pauseMs > 0 || match[3]) {
        if (chunkText) {
          segments.push({ text: chunkText, emotion: currentEmotion, pauseAfterMs: pauseMs });
        } else if (segments.length > 0) {
          segments[segments.length - 1].pauseAfterMs += pauseMs;
        } else if (pauseMs > 0) {
          segments.push({ text: "", emotion: currentEmotion, pauseAfterMs: pauseMs });
        }
      }
      lastIdx = combinedRegex.lastIndex;
    }

    const trailingRaw = text.substring(lastIdx).replace(/<[^>]+>/g, "").trim();
    const trailingText = cleanSpeechText(trailingRaw);
    if (trailingText) {
      segments.push({ text: trailingText, emotion: currentEmotion, pauseAfterMs: 0 });
    }

    if (segments.length === 0) {
      const cleanAll = cleanSpeechText(text.replace(/<[^>]+>/g, "").trim());
      segments.push({ text: cleanAll, emotion: "neutral", pauseAfterMs: 0 });
    }

    let segmentIndex = 0;

    const playNext = () => {
      if (!activeSessionRef.current) return;
      if (segmentIndex >= segments.length) {
        setVoiceStatus("listening");
        setTimeout(onEndCallback, 400);
        return;
      }

      const segment = segments[segmentIndex];
      segmentIndex++;

      // If segment text is empty (leading pause gap), delay and proceed
      if (!segment.text) {
        if (segment.pauseAfterMs > 0) {
          setVoiceStatus("speaking");
          pauseTimerRef.current = setTimeout(() => {
            playNext();
          }, segment.pauseAfterMs);
        } else {
          playNext();
        }
        return;
      }

      setVoiceStatus("speaking");
      const utterance = new SpeechSynthesisUtterance(segment.text);
      const mod = EMOTION_VOICE_MODULATION[segment.emotion] || EMOTION_VOICE_MODULATION.neutral;
      utterance.pitch = mod.pitch;
      utterance.rate = mod.rate;

      const isTamilUnicode = /[\u0B80-\u0BFF]/.test(segment.text);
      const isTanglish = /\b(irukken|irukan|solla|panradhu|pandrathu|aagum|unga|ungaloda|dhaan|nalla|vanakkam|pathi|pesalaam|thavavai|saaptinagala|machan|keetturuka|therinjukanum|mudiyadhu|epdi|eppadi|yeppadi|paarkka|kudukkang|pesa|sariyaana|ennodu|namaskaram)\b/i.test(segment.text);
      const isHindiUnicode = /[\u0900-\u097F]/.test(segment.text);
      const isHinglish = /\b(kaise|kya|nahi|karna|kar|raha|hai|samjh|bataya|apka|aapse|hoga|batao|apne|namaste)\b/i.test(segment.text);

      let detectedLangCode = "en-IN";
      if (isTamilUnicode || isTanglish) {
        utterance.lang = "ta-IN";
        detectedLangCode = "ta-IN";
      } else if (isHindiUnicode || isHinglish) {
        utterance.lang = "hi-IN";
        detectedLangCode = "hi-IN";
      } else if (/[\u0C00-\u0C7F]/.test(segment.text)) {
        utterance.lang = "te-IN";
        detectedLangCode = "te-IN";
      } else if (/[\u0D00-\u0D7F]/.test(segment.text)) {
        utterance.lang = "ml-IN";
        detectedLangCode = "ml-IN";
      } else if (/[\u0C80-\u0CFF]/.test(segment.text)) {
        utterance.lang = "kn-IN";
        detectedLangCode = "kn-IN";
      } else if (/[\u0980-\u09FF]/.test(segment.text)) {
        utterance.lang = "bn-IN";
        detectedLangCode = "bn-IN";
      } else if (/[\u0600-\u06FF]/.test(segment.text)) {
        utterance.lang = "ur-IN";
        detectedLangCode = "ur-IN";
      } else {
        utterance.lang = "en-IN";
        detectedLangCode = "en-US";
      }

      if (activeSessionRef.current) {
        activeLanguageRef.current = detectedLangCode;
      }

      // Prioritize natural, neural, and studio-grade online voices over legacy robotic voices
      if (typeof window !== "undefined" && window.speechSynthesis) {
        const voices = window.speechSynthesis.getVoices();
        if (voices && voices.length > 0) {
          const langCodeLower = detectedLangCode.toLowerCase();
          const langPrefix = detectedLangCode.split("-")[0].toLowerCase();
          
          const getVoiceScore = (v: SpeechSynthesisVoice) => {
            const vLang = (v.lang || "").toLowerCase();
            const vName = (v.name || "").toLowerCase();
            let score = 0;
            if (vLang === langCodeLower) score += 100;
            else if (vLang.startsWith(langPrefix)) score += 60;
            else if (vLang.startsWith("en") && langPrefix === "en") score += 40;
            
            if (vName.includes("natural") || vName.includes("online") || vName.includes("neural")) score += 50;
            if (vName.includes("google")) score += 40;
            if (vName.includes("premium")) score += 30;
            if (vName.includes("microsoft") && !vName.includes("david") && !vName.includes("desktop")) score += 20;
            return score;
          };

          const scored = [...voices].map(v => ({ v, score: getVoiceScore(v) })).sort((a, b) => b.score - a.score);
          if (scored.length > 0 && scored[0].score > 0) {
            utterance.voice = scored[0].v;
          }
        }
      }

      utterance.onend = () => {
        if (!activeSessionRef.current) return;
        if (segment.pauseAfterMs > 0) {
          // PHYSICAL PAUSE GAP: Wait the exact duration before speaking next segment
          setVoiceStatus("speaking");
          pauseTimerRef.current = setTimeout(() => {
            playNext();
          }, segment.pauseAfterMs);
        } else {
          playNext();
        }
      };

      utterance.onerror = (e) => {
        if (!activeSessionRef.current) return;
        if (segment.pauseAfterMs > 0) {
          pauseTimerRef.current = setTimeout(() => {
            playNext();
          }, segment.pauseAfterMs);
        } else {
          playNext();
        }
      };

      window.speechSynthesis.speak(utterance);
    };

    playNext();
  };

  // Speech recognition listener
  const processFinalSpeechUtterance = (rawText: string) => {
    if (vadSilenceTimerRef.current) {
      clearTimeout(vadSilenceTimerRef.current);
      vadSilenceTimerRef.current = null;
    }
    const cleanText = rawText.trim();
    if (!cleanText || !activeSessionRef.current) return;

    accumulatedSpeechRef.current = "";
    setInterimText("");

    if (recognitionRef.current) {
      try { recognitionRef.current.abort(); } catch (e) {}
    }

    handleSendMessage(cleanText);
  };

  const initiateListening = () => {
    if (!activeSessionRef.current) return;
    if (typeof window !== "undefined" && window.speechSynthesis && window.speechSynthesis.speaking) return;

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setErrorMessage("Speech recognition is not supported in this browser. Please use Chrome or Edge.");
      return;
    }

    try {
      if (recognitionRef.current) {
        try { recognitionRef.current.abort(); } catch (e) {}
      }

      const recognition = new SpeechRecognition();
      recognitionRef.current = recognition;
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = micLanguageRef.current || activeLanguageRef.current || "en-IN";

      recognition.onstart = () => {
        if (activeSessionRef.current) {
          setVoiceStatus("listening");
        }
      };

      recognition.onerror = (event: any) => {
        if (!activeSessionRef.current) return;
        if (event.error === "not-allowed" || event.error === "service-not-allowed") {
          setErrorMessage("⚠️ Microphone access is blocked. Please allow microphone permission in your browser.");
        } else if (event.error === "audio-capture") {
          setErrorMessage("⚠️ No microphone was found. Please check your mic connection.");
        }
        setTimeout(() => {
          if (activeSessionRef.current && typeof window !== "undefined" && !window.speechSynthesis.speaking) {
            initiateListening();
          }
        }, 500);
      };

      recognition.onend = () => {
        if (!activeSessionRef.current) return;
        if (accumulatedSpeechRef.current && accumulatedSpeechRef.current.trim()) {
          const textToSend = accumulatedSpeechRef.current.trim();
          accumulatedSpeechRef.current = "";
          processFinalSpeechUtterance(textToSend);
          return;
        }
        setTimeout(() => {
          if (activeSessionRef.current && typeof window !== "undefined" && !window.speechSynthesis.speaking) {
            initiateListening();
          }
        }, 300);
      };

      recognition.onresult = (event: any) => {
        if (!activeSessionRef.current) return;
        let finalTranscript = "";
        let interim = "";

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          } else {
            interim += event.results[i][0].transcript;
          }
        }

        const currentSpeech = (finalTranscript || interim || "").trim();
        if (currentSpeech) {
          accumulatedSpeechRef.current = currentSpeech;
          setInterimText(currentSpeech);

          // Fast VAD Silence Endpointing: 500ms natural silence threshold triggers final utterance
          if (vadSilenceTimerRef.current) {
            clearTimeout(vadSilenceTimerRef.current);
          }
          vadSilenceTimerRef.current = setTimeout(() => {
            if (activeSessionRef.current && accumulatedSpeechRef.current.trim()) {
              processFinalSpeechUtterance(accumulatedSpeechRef.current);
            }
          }, 500);
        }

        if (finalTranscript && finalTranscript.trim()) {
          processFinalSpeechUtterance(finalTranscript.trim());
        }
      };

      recognition.start();
    } catch (e) {}
  };

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || !voiceSessionIdRef.current || !activeSessionRef.current) return;

    const timeNow = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const userMsg = { sender: "user" as const, text: textToSend, timestamp: timeNow };
    const curLeadId = activeCustomer?.id || selectedLeadId;

    setVoiceTranscript((prev) => [...prev, userMsg]);
    if (curLeadId) {
      setConversationsByLeadId((prev) => ({
        ...prev,
        [curLeadId]: [...(prev[curLeadId] || []), userMsg],
      }));
    }

    setVoiceStatus("thinking");
    setConnectionState("PROCESSING");
    setErrorMessage(null);

    const sendStartTime = Date.now();
    try {
      const data = await localVoiceTestService.sendMessage(voiceSessionIdRef.current, textToSend);
      if (!activeSessionRef.current) return;

      const latency = (data as any).latency_ms || (Date.now() - sendStartTime);
      setLastTurnLatencyMs(latency);

      setConnectionState("CONNECTED");
      setCurrentScriptStep(data.current_step || "1. Greeting");
      setScriptSteps(data.script_steps || []);
      setCollectedData(data.collected_data || {});
      setQualificationStatus(data.qualification_status || "IN_PROGRESS");

      const reply = data.response;
      const aiTimeNow = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      const aiMsg = { sender: "ai" as const, text: reply, timestamp: aiTimeNow };
      if (curLeadId) {
        setConversationsByLeadId((prev) => ({
          ...prev,
          [curLeadId]: [...(prev[curLeadId] || []), aiMsg],
        }));
      }
      if (!curLeadId || selectedLeadIdRef.current === curLeadId) {
        setVoiceTranscript((prev) => [...prev, aiMsg]);
      }


      if ((data as any).transfer_status === "ASSIGNED" || (data as any).is_transferred) {
        transferInitiatedRef.current = true;
        const agentName = (data as any).assigned_expert?.name || (data as any).assigned_agent_name || "Voice Agent";
        setTransferStatus(`✅ Transferred! Assigned to human agent: ${agentName}`);
      } else if ((data as any).transfer_status === "QUEUED") {
        setTransferStatus(`⏳ All human agents busy. Lead placed in assignment queue.`);
      }

      const rawAudioUrl = (data as any).audio_url;
      const playableUrl = rawAudioUrl && rawAudioUrl.includes("/static/audio/")
        ? rawAudioUrl.substring(rawAudioUrl.indexOf("/static/audio/"))
        : rawAudioUrl;

      const isTerminalHangup = Boolean((data as any).terminal_hangup || (data as any).end_call || (data as any).is_dnd);
      const isDnd = Boolean((data as any).is_dnd);
      const callDisp = (data as any).call_disposition || (isDnd ? "DNC" : (data.qualification_status === "QUALIFIED" ? "QUALIFIED" : "COMPLETED"));

      const handleAfterSpeech = () => {
        if (isTerminalHangup) {
          console.log(`[CALL_TERMINAL_HANGUP] Session reached terminal state (dnd=${isDnd}, disposition=${callDisp}). Disconnecting.`);
          activeSessionRef.current = false;
          setVoiceStatus("idle");
          setConnectionState("DISCONNECTED");
          stopTimer();

          if (curLeadId) {
            setAssignedLeads((prev) =>
              prev.map((l) => (l.id === curLeadId ? { ...l, call_status: callDisp, disposition: callDisp } : l))
            );
            setActiveCustomer((prev) => (prev ? { ...prev, status: callDisp } : null));
          }

          if (voiceSessionIdRef.current) {
            localVoiceTestService.end(voiceSessionIdRef.current).catch(() => {});
          }
          return;
        }

        if (activeSessionRef.current) {
          setVoiceStatus("listening");
          setTimeout(initiateListening, 300);
        }
      };

      if (playableUrl) {
        setVoiceStatus("speaking");
        if (recognitionRef.current) {
          try { recognitionRef.current.abort(); } catch (e) {}
        }
        const audio = new Audio(playableUrl);
        audio.preload = "auto";
        audio.onended = handleAfterSpeech;
        audio.onerror = () => {
          playVoiceResponse(reply, handleAfterSpeech);
        };
        audio.play().catch(() => {
          playVoiceResponse(reply, handleAfterSpeech);
        });
      } else {
        playVoiceResponse(reply, handleAfterSpeech);
      }
    } catch (err: any) {
      console.warn("Error processing local voice test message:", err);
      const errMsg = err.message || "Failed to communicate with backend server";
      setConnectionState("ERROR");
      setErrorMessage(errMsg);
      setVoiceTranscript((prev) => [
        ...prev,
        { sender: "ai", text: `⚠️ Error receiving AI response: ${errMsg}` },
      ]);
      if (activeSessionRef.current) {
        setVoiceStatus("listening");
      }
    }
  };

  const handleClose = useCallback(() => {
    activeSessionRef.current = false;
    setConnectionState("DISCONNECTED");
    if (callPollIntervalRef.current) {
      clearInterval(callPollIntervalRef.current);
      callPollIntervalRef.current = null;
    }
    const durationMs = stopTimer();
    const durationSeconds = Math.max(1, Math.floor(durationMs / 1000));
    const currentCallId = activeCallIdRef.current;
    if (currentCallId) {
      apiFetch(`/api/calls/${currentCallId}/end`, {
        method: "POST",
        body: JSON.stringify({ duration_seconds: durationSeconds, outcome: "COMPLETED" }),
        headers: { "Content-Type": "application/json" }
      }).catch(() => {});
    }
    if (voiceSessionIdRef.current) {
      localVoiceTestService.end(voiceSessionIdRef.current, durationSeconds).catch(() => {});
    }
    if (recognitionRef.current) {
      try {
        recognitionRef.current.abort();
      } catch (e) {}
    }
    if (pauseTimerRef.current) {
      clearTimeout(pauseTimerRef.current);
      pauseTimerRef.current = null;
    }
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    if (autoDialNextTimeoutRef.current) {
      clearTimeout(autoDialNextTimeoutRef.current);
      autoDialNextTimeoutRef.current = null;
    }
    onClose();
  }, [stopTimer, onClose]);

  const handleVoiceAgentConnectedCut = useCallback((agentName?: string) => {
    const name = agentName || "human specialist";
    console.log(`[AI_AGENT_CUT] Human Voice Agent (${name}) connected. Cutting ONLY AI agent leg. Customer call remains active.`);
    
    // Stop ONLY AI speech recognition and browser speech synthesis
    if (recognitionRef.current) {
      try {
        recognitionRef.current.abort();
      } catch (e) {}
    }
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    if (pauseTimerRef.current) {
      clearTimeout(pauseTimerRef.current);
      pauseTimerRef.current = null;
    }

    // Set AI to idle, but keep the call and timer ALIVE for the human conversation
    setVoiceStatus("idle");
    setConnectionState("WITH_HUMAN_AGENT");

    // Guard against multiple duplicate events triggering duplicate dials
    if (autoDialTriggeredRef.current) {
      return;
    }
    autoDialTriggeredRef.current = true;

    // Find next lead in queue to auto-dial
    const leadsList = assignedLeadsRef.current;
    const currentId = selectedLeadIdRef.current;
    let nextLead: CampaignAiAgentLead | undefined;

    if (leadsList && leadsList.length > 1) {
      const currentIdx = leadsList.findIndex((l) => l.id === currentId);
      // 1. Look for next eligible lead after current index
      if (currentIdx !== -1) {
        for (let i = currentIdx + 1; i < leadsList.length; i++) {
          if (isLeadEligible(leadsList[i])) {
            nextLead = leadsList[i];
            break;
          }
        }
      }
      // 2. Look for any other eligible lead from start
      if (!nextLead) {
        nextLead = leadsList.find(
          (l) => l.id !== currentId && isLeadEligible(l)
        );
      }
    }

    if (nextLead && startSessionRef.current) {
      const targetNextLead = nextLead;
      console.log(`[AUTO_DIAL_NEXT] Next lead identified: ${targetNextLead.id} (${targetNextLead.name}) - scheduling dial.`);

      setTransferStatus(
        `✅ Transferred to Voice Agent (${name}). AI Agent auto-dialing next lead in 2s: ${targetNextLead.name} (${targetNextLead.phone || "—"})...`
      );
      setVoiceTranscript((prev) => [
        ...prev,
        {
          sender: "ai",
          text: `🎧 Voice Agent (${name}) connected with customer. AI agent handed off this call.`,
        },
        {
          sender: "ai",
          text: `📞 Transfer complete. Auto-dialing next campaign lead: ${targetNextLead.name} (${targetNextLead.phone || "—"})...`,
        },
      ]);

      if (autoDialNextTimeoutRef.current) {
        clearTimeout(autoDialNextTimeoutRef.current);
      }

      autoDialNextTimeoutRef.current = setTimeout(() => {
        if (!activeSessionRef.current) return;
        console.log(`[AUTO_DIAL_NEXT] Starting session for next lead: ${targetNextLead.id}`);
        setSelectedLeadId(targetNextLead.id);
        setActiveCustomer({
          id: targetNextLead.id,
          name: targetNextLead.name,
          phone: targetNextLead.phone,
          company: targetNextLead.company,
          status: targetNextLead.call_status || "PENDING",
        });
        if (startSessionRef.current) {
          startSessionRef.current(targetNextLead.id);
        }
      }, 2000);
    } else {
      setTransferStatus(`✅ Voice Agent (${name}) connected with customer. AI agent left the call.`);
      setVoiceTranscript((prev) => [
        ...prev,
        {
          sender: "ai",
          text: `🎧 Voice Agent (${name}) connected with customer. AI agent left the call.`,
        },
      ]);
    }
  }, []);

  handleVoiceAgentConnectedCutRef.current = handleVoiceAgentConnectedCut;

  const onCallAnsweredRef = useRef<(() => void) | null>(null);
  const wasCallConnectedRef = useRef<boolean>(false);

  const handleSelectCustomer = useCallback((lead: CampaignAiAgentLead) => {
    if (selectedLeadIdRef.current === lead.id) return;
    setSelectedLeadId(lead.id);
    setActiveCustomer({
      id: lead.id,
      name: lead.name,
      phone: lead.phone,
      company: lead.company,
      status: lead.call_status,
    });
    // Seamlessly switch visible conversation to selected customer without interrupting any call
    if (conversationsByLeadId[lead.id] && conversationsByLeadId[lead.id].length > 0) {
      setVoiceTranscript(conversationsByLeadId[lead.id]);
    } else if (lead.call_id) {
      apiFetch<any>(`/api/calls/${lead.call_id}`)
        .then((res) => {
          if (res && res.messages && res.messages.length > 0) {
            setConversationsByLeadId((prev) => ({ ...prev, [lead.id]: res.messages }));
            setVoiceTranscript(res.messages);
          } else if (res && res.transcript) {
            const lines = res.transcript.split("\n").filter((l: string) => l.trim());
            const parsed = lines.map((l: string) => {
              const isCust = l.toLowerCase().startsWith("customer:");
              const t = l.replace(/^(customer|agent|ai):\s*/i, "").trim();
              return { sender: isCust ? ("user" as const) : ("ai" as const), text: t, timestamp: "" };
            });
            setConversationsByLeadId((prev) => ({ ...prev, [lead.id]: parsed }));
            setVoiceTranscript(parsed);
          } else {
            setVoiceTranscript([]);
          }
        })
        .catch(() => {
          setVoiceTranscript([]);
        });
    } else {
      setVoiceTranscript([]);
    }
  }, [conversationsByLeadId]);

  const handleCallNextLead = useCallback(async () => {
    if (dialingActionLoading) return;
    if (!assignedLeads || assignedLeads.length === 0) return;

    setDialingActionLoading(true);
    try {
      // Gracefully clean up active call leg before moving to next lead
      if (activeSessionRef.current && connectionState !== "DISCONNECTED") {
        activeSessionRef.current = false;
        const durationMs = stopTimer();
        const durationSeconds = Math.max(1, Math.floor(durationMs / 1000));

        const currentCallId = activeCallIdRef.current;
        if (currentCallId) {
          try {
            await apiFetch(`/api/calls/${currentCallId}/end`, {
              method: "POST",
              body: JSON.stringify({ duration_seconds: durationSeconds, outcome: "COMPLETED" }),
              headers: { "Content-Type": "application/json" }
            });
          } catch (_) {}
        }

        if (voiceSessionIdRef.current) {
          try {
            await localVoiceTestService.end(voiceSessionIdRef.current, durationSeconds);
          } catch (_) {}
          voiceSessionIdRef.current = undefined;
        }

        if (recognitionRef.current) {
          try { recognitionRef.current.abort(); } catch (e) {}
        }
        if (typeof window !== "undefined" && window.speechSynthesis) {
          window.speechSynthesis.cancel();
        }
      }

      const currentIndex = assignedLeads.findIndex((l) => l.id === selectedLeadId);
      let nextLead: CampaignAiAgentLead | undefined;
      if (currentIndex !== -1) {
        for (let i = currentIndex + 1; i < assignedLeads.length; i++) {
          if (isLeadEligible(assignedLeads[i])) {
            nextLead = assignedLeads[i];
            break;
          }
        }
      }
      if (!nextLead) {
        nextLead = assignedLeads.find(
          (l) => l.id !== selectedLeadId && isLeadEligible(l)
        );
      }
      if (!nextLead) {
        setErrorMessage("All leads in this campaign have been processed. No eligible pending leads remaining.");
        return;
      }
      if (nextLead && startSessionRef.current) {
        setErrorMessage(null);
        setSelectedLeadId(nextLead.id);
        setActiveCustomer({
          id: nextLead.id,
          name: nextLead.name,
          phone: nextLead.phone,
          company: nextLead.company,
          status: nextLead.call_status || "PENDING",
        });
        await startSessionRef.current(nextLead.id);
      }
    } finally {
      setDialingActionLoading(false);
    }
  }, [assignedLeads, selectedLeadId, connectionState, stopTimer, dialingActionLoading]);

  useWebSocketSync((msg: any) => {
    const evt = (msg.event || msg.type || "").toUpperCase();
    const cId = msg.call_id;
    const currentCallId = activeCallIdRef.current;

    // Identify target lead across concurrent calls
    const targetLead = assignedLeadsRef.current.find(
      (l) => l.call_id === cId || l.id === cId || l.id === msg.lead_id
    );
    const targetLeadId = targetLead?.id || (cId === currentCallId ? selectedLeadIdRef.current : undefined);
    const isSelectedCall = !cId || cId === currentCallId || targetLeadId === selectedLeadIdRef.current;

    // Check if Human Voice Agent connected to this transferred call
    const isHumanConnected =
      evt === "VOICE_AGENT_TRANSFER_ACCEPTED" ||
      evt === "HUMAN_AGENT_CONNECTED" ||
      evt === "TRANSFER_ACCEPTED" ||
      evt === "AI_AGENT_DISCONNECT" ||
      ((evt === "STATE_CHANGE" || evt === "CALL_STATE") &&
        (msg.state || msg.status || "").toUpperCase() === "HUMAN_HANDLING" &&
        transferInitiatedRef.current);

    if (isHumanConnected && isSelectedCall) {
      console.log(`[AI_AGENT_CUT] Human Voice Agent connected. Cutting AI Agent session. event=${evt}`);
      handleVoiceAgentConnectedCut(msg.agent_name || msg.assigned_agent_name);
      return;
    }

    if (activeSessionRef.current || targetLeadId) {
      if (
        evt === "CALL_CONNECTED" ||
        evt === "CALL_ATTENDED" ||
        evt === "INCOMING_CALL_ANSWERED" ||
        evt === "CALL_ANSWERED" ||
        evt === "CALL_ANSWERED_GREETING" ||
        evt === "CALL_IN_PROGRESS"
      ) {
        if (targetLeadId) {
          setAssignedLeads((prev) =>
            prev.map((l) => (l.id === targetLeadId ? { ...l, call_status: "CONNECTED" } : l))
          );
        }
        if (isSelectedCall) {
          console.log(`[CALL_STATE][FRONTEND_EVENT] call_id=${cId || currentCallId} current_call_id=${currentCallId} event=${evt} incoming_state=CONNECTED current_state=${connectionState}`);
          wasCallConnectedRef.current = true;
          if (onCallAnsweredRef.current) {
            onCallAnsweredRef.current();
          } else {
            setConnectionState("CONNECTED");
            setActiveCustomer((prev) => (prev ? { ...prev, status: "CONNECTED" } : null));
          }
        }
      } else if (evt === "STATE_CHANGE") {
        const newState = (msg.state || "").toUpperCase();

        if (targetLeadId && newState) {
          setAssignedLeads((prev) =>
            prev.map((l) => (l.id === targetLeadId ? { ...l, call_status: newState } : l))
          );
        }

        if (isSelectedCall) {
          if (
            newState === "CONNECTED" ||
            newState === "IN_PROGRESS" ||
            newState === "AI_SPEAKING" ||
            newState === "CUSTOMER_LISTENING" ||
            newState === "LISTENING_FOR_CUSTOMER" ||
            newState === "CUSTOMER_SPEAKING" ||
            newState === "PROCESSING" ||
            newState === "PROCESSING_STT" ||
            newState === "PROCESSING_AGENT" ||
            newState === "RETURNING_TO_LISTENING"
          ) {
            if (!wasCallConnectedRef.current || connectionState === "RINGING") {
              console.log(`[CALL_STATE][FRONTEND_EVENT] call_id=${cId || currentCallId} current_call_id=${currentCallId} event=STATE_CHANGE incoming_state=${newState} current_state=${connectionState} -> transitioning to CONNECTED`);
              wasCallConnectedRef.current = true;
              if (onCallAnsweredRef.current) {
                onCallAnsweredRef.current();
              } else {
                setConnectionState("CONNECTED");
                setActiveCustomer((prev) => (prev ? { ...prev, status: "CONNECTED" } : null));
              }
            }
          }

          if (newState === "AI_SPEAKING") {
            setVoiceStatus("speaking");
          } else if (
            newState === "CUSTOMER_LISTENING" ||
            newState === "LISTENING_FOR_CUSTOMER" ||
            newState === "RETURNING_TO_LISTENING" ||
            newState === "CUSTOMER_SPEAKING" ||
            newState === "CONNECTED" ||
            newState === "IN_PROGRESS"
          ) {
            setVoiceStatus("listening");
            if (activeSessionRef.current && typeof window !== "undefined" && !window.speechSynthesis?.speaking) {
              initiateListening();
            }
          } else if (newState === "PROCESSING" || newState === "PROCESSING_STT" || newState === "PROCESSING_AGENT") {
            setVoiceStatus("thinking");
          } else if (newState === "TRANSFER_REQUESTED") {
            transferInitiatedRef.current = true;
            setTransferStatus("Transferring call to human agent...");
          } else if (newState === "WITH_HUMAN_AGENT") {
            transferInitiatedRef.current = true;
            setConnectionState("WITH_HUMAN_AGENT");
            setTransferStatus(`Transferred to human specialist: ${msg.message || "Agent"}`);
          } else if (newState === "DISCONNECTED" || newState === "ENDED" || newState === "COMPLETED") {
            if (connectionState === "WITH_HUMAN_AGENT" && !msg.hangup_by && msg.reason !== "HUMAN_CALL_ENDED") {
              console.log(`[AI_LEG_DISCONNECT_IGNORED] Call is WITH_HUMAN_AGENT. Preserving active human call and timer.`);
              return;
            }
            console.log(`[CALL_STATE][FRONTEND_EVENT] call_id=${cId || currentCallId} event=STATE_CHANGE incoming_state=${newState} -> DISCONNECTED`);
            if (callPollIntervalRef.current) {
              clearInterval(callPollIntervalRef.current);
              callPollIntervalRef.current = null;
            }
            setConnectionState("DISCONNECTED");
            setVoiceStatus("idle");
            stopTimer();
            const termStatus = msg.reason?.includes("FAILED") ? "FAILED" : "COMPLETED";
            setActiveCustomer((prev) => (prev ? { ...prev, status: termStatus } : null));
          } else if (newState === "RINGING") {
            if (wasCallConnectedRef.current || connectionState === "CONNECTED") {
              console.log(`[CALL_STATE][STALE_RINGING_IGNORED] call_id=${cId || currentCallId} current_state=${connectionState} incoming_state=RINGING source=WS_STATE_CHANGE`);
            } else {
              console.log(`[CALL_STATE][FRONTEND_EVENT] call_id=${cId || currentCallId} current_call_id=${currentCallId} event=STATE_CHANGE incoming_state=RINGING current_state=${connectionState}`);
              setConnectionState("RINGING");
              setActiveCustomer((prev) => (prev ? { ...prev, status: "RINGING" } : null));
            }
          }
        }
      } else if (evt === "CUSTOMER_TRANSCRIPT_FINAL" || evt === "TRANSCRIPT_UPDATE") {
        const text = msg.text || msg.message || "";
        const isCustomer = (msg.sender || "").toLowerCase() === "customer" || evt === "CUSTOMER_TRANSCRIPT_FINAL";
        if (text && !text.includes("[stub-transcript]")) {
          const senderType = isCustomer ? ("user" as const) : ("ai" as const);
          const timeNow = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
          const newEntry = { sender: senderType, text, timestamp: timeNow };

          // Route to target lead's isolated conversation store
          if (targetLeadId) {
            setConversationsByLeadId((prev) => {
              const existing = prev[targetLeadId] || [];
              const last = existing[existing.length - 1];
              if (last && last.sender === senderType && last.text === text) return prev;
              return { ...prev, [targetLeadId]: [...existing, newEntry] };
            });
          }

          // If this is currently selected customer, also update visible transcript immediately
          if (isSelectedCall) {
            setVoiceTranscript((prev) => {
              const lastMsg = prev[prev.length - 1];
              if (lastMsg && lastMsg.sender === senderType && lastMsg.text === text) {
                return prev;
              }
              return [...prev, newEntry];
            });
          }
        }
      } else if (evt === "CALL_ENDED" || evt === "CALL_COMPLETED" || evt === "CALL_FAILED" || evt === "REMOTE_HANGUP") {
        console.log(`[CALL_STATE][FRONTEND_EVENT] call_id=${cId || currentCallId} event=${evt} -> COMPLETED/DISCONNECTED`);
        const finalStatus = evt === "CALL_FAILED" ? "FAILED" : "COMPLETED";
        if (targetLeadId) {
          setAssignedLeads((prev) =>
            prev.map((l) => (l.id === targetLeadId ? { ...l, call_status: finalStatus } : l))
          );
        } else if (selectedLeadId) {
          setAssignedLeads((prev) =>
            prev.map((l) => (l.id === selectedLeadId ? { ...l, call_status: finalStatus } : l))
          );
        }
        if (isSelectedCall) {
          if (callPollIntervalRef.current) {
            clearInterval(callPollIntervalRef.current);
            callPollIntervalRef.current = null;
          }
          setConnectionState("DISCONNECTED");
          setVoiceStatus("idle");
          stopTimer();
          setActiveCustomer((prev) => (prev ? { ...prev, status: finalStatus } : null));
        }
        refreshDialerStatus();
      } else if (
        evt === "TRANSFER.REQUESTED" ||
        evt === "TRANSFER_REQUESTED" ||
        evt === "TRANSFER.RINGING" ||
        evt === "LEAD_ASSIGNED"
      ) {
        if (isSelectedCall) {
          transferInitiatedRef.current = true;
          const assignedName = msg.target_agent_name || msg.assigned_agent_name || msg.to_agent_name || "human specialist";
          setTransferStatus(`Transferring call to ${assignedName}...`);
        }
      }
    }
  });

  const startSession = async (leadIdOverride?: string, forceOverride?: boolean) => {
    if (isStartingRef.current) {
      console.log("[LocalVoiceTestModal] Call start request suppressed: call initialization already in progress.");
      return;
    }
    isStartingRef.current = true;
    autoDialTriggeredRef.current = false;
    if (autoDialNextTimeoutRef.current) {
      clearTimeout(autoDialNextTimeoutRef.current);
      autoDialNextTimeoutRef.current = null;
    }

    try {
      // End previous session if running
      if (voiceSessionIdRef.current) {
        const prevDurationMs = stopTimer();
        const prevDurationSeconds = Math.max(1, Math.floor(prevDurationMs / 1000));
        localVoiceTestService.end(voiceSessionIdRef.current, prevDurationSeconds).catch(() => {});
        voiceSessionIdRef.current = undefined;
      }
      if (callPollIntervalRef.current) {
        clearInterval(callPollIntervalRef.current);
        callPollIntervalRef.current = null;
      }
      onCallAnsweredRef.current = null;
      wasCallConnectedRef.current = false;
      pendingGreetingRef.current = null;
      activeCallIdRef.current = null;

      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      if (pauseTimerRef.current) {
        clearTimeout(pauseTimerRef.current);
        pauseTimerRef.current = null;
      }

      activeSessionRef.current = true;
      setConnectionState("INITIALIZING");
      setVoiceStatus("thinking");
      setErrorMessage(null);
      setVoiceTranscript([{ sender: "ai", text: "Initializing AI Voice Session & Loading Campaign Context..." }]);

      const targetLeadId = leadIdOverride !== undefined ? leadIdOverride : selectedLeadId;

      setConnectionState("CONNECTING");
      let data;
      try {
        data = await localVoiceTestService.start(campaignId, targetLeadId, Boolean(forceOverride));
      } catch (startErr: any) {
        if (
          startErr?.status === 409 ||
          startErr?.statusCode === 409 ||
          String(startErr?.message || "").includes("already in progress")
        ) {
          console.info("[LocalVoiceTestModal] Active call collision detected, auto-reaping previous session with force=true...");
          data = await localVoiceTestService.start(campaignId, targetLeadId, true);
        } else {
          throw startErr;
        }
      }
      if (!activeSessionRef.current) return;

      const callId = (data as any).call_id;
      const isRinging = (data as any).telephony_status === "RINGING" || (data as any).status === "RINGING";
      if (callId) {
        activeCallIdRef.current = callId;
      }

      setVoiceSessionId(data.session_id);
      voiceSessionIdRef.current = data.session_id;
      if (data.agent_name) {
        setResolvedAgentName(data.agent_name);
      }
      if ((data as any).agent_type) {
        setResolvedAgentType((data as any).agent_type);
      }
      setCurrentScriptStep(data.current_step || "1. Greeting");
      setScriptSteps(data.script_steps || []);
      setCollectedData(data.collected_data || {});
      setQualificationStatus(data.qualification_status || "IN_PROGRESS");

      if (data.lead_id) {
        setSelectedLeadId(data.lead_id);
      }
      const isPhoneCall = Boolean((data as any).is_phone_call || (data as any).telephony_status);
      const greeting = (data as any).response || "Hello, thank you for taking our call!";

      setActiveCustomer({
        id: data.lead_id,
        name: data.customer_name || "Customer",
        phone: data.customer_phone || "",
        company: data.customer_company || "",
        status: (isPhoneCall || isRinging) && !wasCallConnectedRef.current ? "RINGING" : "CONNECTED",
      });

      const handleCallAnswered = () => {
        if (!activeSessionRef.current) return;
        const targetCid = activeCallIdRef.current || voiceSessionIdRef.current || callId;

        // Idempotency: if already connected, do not reset transcript/audio unless state was not updated
        const isFirstConnection = !wasCallConnectedRef.current;
        wasCallConnectedRef.current = true;

        if (callPollIntervalRef.current) {
          clearInterval(callPollIntervalRef.current);
          callPollIntervalRef.current = null;
        }

        console.log(`[CALL_STATE][FRONTEND] call_id=${targetCid} previous_state=${connectionState} incoming_event=CALL_CONNECTED incoming_state=CONNECTED new_state=CONNECTED`);
        setConnectionState("CONNECTED");
        startTimer();
        setActiveCustomer((prev) => prev ? { ...prev, status: "CONNECTED" } : null);

        const toSpeak = pendingGreetingRef.current?.greeting || greeting;
        const rawAudioToPlay = pendingGreetingRef.current ? pendingGreetingRef.current.audioUrl : data.audio_url;
        const audioToPlay = rawAudioToPlay && rawAudioToPlay.includes("/static/audio/")
          ? rawAudioToPlay.substring(rawAudioToPlay.indexOf("/static/audio/"))
          : rawAudioToPlay;
        pendingGreetingRef.current = null;

        const greetTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        const greetMsg = { sender: "ai" as const, text: toSpeak, timestamp: greetTime };
        const currentLid = targetLeadId || activeCustomer?.id || selectedLeadId;
        if (currentLid) {
          setConversationsByLeadId((prev) => {
            const existing = prev[currentLid] || [];
            const filtered = existing.filter((m) => !m.text.includes("Calling") && !m.text.includes("Ringing... Waiting"));
            if (filtered.some((m) => m.text === toSpeak)) return prev;
            return { ...prev, [currentLid]: [...filtered, greetMsg] };
          });
        }

        if (!currentLid || selectedLeadIdRef.current === currentLid) {
          setVoiceTranscript((prev) => {
            const filtered = prev.filter((m) => !m.text.includes("Calling") && !m.text.includes("Ringing... Waiting"));
            if (filtered.some((m) => m.text === toSpeak)) {
              return filtered;
            }
            return [ ...filtered, greetMsg ];
          });
        }

        if (!isFirstConnection) {
          return;
        }

        const startListeningAfterGreeting = () => {
          if (activeSessionRef.current) {
            setVoiceStatus("listening");
            setTimeout(initiateListening, 300);
          }
        };

        if (audioToPlay) {
          setVoiceStatus("speaking");
          if (recognitionRef.current) {
            try { recognitionRef.current.abort(); } catch (e) {}
          }
          const audio = new Audio(audioToPlay);
          audio.preload = "auto";
          audio.onended = startListeningAfterGreeting;
          audio.onerror = () => {
            playVoiceResponse(toSpeak, startListeningAfterGreeting);
          };
          audio.play().catch(() => {
            playVoiceResponse(toSpeak, startListeningAfterGreeting);
          });
        } else {
          setVoiceStatus("speaking");
          playVoiceResponse(toSpeak, startListeningAfterGreeting);
        }

        // Safety fallback watchdog: Ensure transition to listening within at most 8s if audio is blocked or silent
        const maxGreetingWait = Math.min(8000, Math.max(3000, ((toSpeak || "").split(" ").length / 2.2) * 1000));
        setTimeout(() => {
          if (activeSessionRef.current && (voiceStatusRef.current === "speaking" || voiceStatusRef.current === "idle")) {
            startListeningAfterGreeting();
          }
        }, maxGreetingWait);
      };

      onCallAnsweredRef.current = handleCallAnswered;
      if (wasCallConnectedRef.current) {
        handleCallAnswered();
      }

      if (data.telephony_status === "FAILED") {
        setConnectionState("DISCONNECTED");
        setVoiceStatus("idle");
        const failureReason = data.telephony_error || "SIP trunk network unreachable or timed out.";
        setVoiceTranscript([{
          sender: "ai",
          text: `⚠️ Call could not be placed to ${data.customer_name || "Lead"} (${data.customer_phone || ""}): ${failureReason}`
        }]);
        return;
      }

      if (isPhoneCall) {
        if (wasCallConnectedRef.current) {
          console.log(`[CALL_STATE][STALE_RINGING_IGNORED] call_id=${callId} current_state=CONNECTED incoming_state=RINGING source=startSession_initial_response`);
          handleCallAnswered();
        } else {
          // CALL IS RINGING ON LEAD'S PHONE — WAIT FOR ANSWER BEFORE SPEAKING!
          console.log(`[CALL_STATE][FRONTEND] call_id=${callId} previous_state=${connectionState} incoming_event=START_RESPONSE incoming_state=RINGING new_state=RINGING`);
          setConnectionState("RINGING");
          setVoiceStatus("idle");
          pendingGreetingRef.current = { greeting, audioUrl: data.audio_url };
          setVoiceTranscript([{
            sender: "ai",
            text: `📞 Calling ${data.customer_name || "Lead"} (${data.customer_phone || ""})... Ringing... Waiting for customer to answer.`
          }]);

          // Ensure previous polling is completely cleared before starting
          if (callPollIntervalRef.current) {
            clearInterval(callPollIntervalRef.current);
            callPollIntervalRef.current = null;
          }

          // Start fallback polling every 1200ms
          if (callId) {
            callPollIntervalRef.current = setInterval(async () => {
              if (!activeSessionRef.current || activeCallIdRef.current !== callId) {
                if (callPollIntervalRef.current) {
                  clearInterval(callPollIntervalRef.current);
                  callPollIntervalRef.current = null;
                }
                return;
              }
              try {
                const callInfo = await apiFetch<any>(`/api/calls/${callId}`);
                if (callInfo && activeCallIdRef.current === callId) {
                  if (
                    callInfo.status === "HUMAN_HANDLING" &&
                    transferInitiatedRef.current
                  ) {
                    console.log(`[AI_AGENT_CUT] Polling detected call status=HUMAN_HANDLING. Cutting AI Agent.`);
                    handleVoiceAgentConnectedCut(callInfo.agent_name);
                    return;
                  }

                  if (
                    callInfo.status === "CONNECTED" ||
                    callInfo.status === "ACCEPTED" ||
                    callInfo.status === "IN_CALL" ||
                    callInfo.status === "IN_PROGRESS" ||
                    callInfo.status === "IN_PROGRESS_AI" ||
                    callInfo.status === "AI_SPEAKING" ||
                    callInfo.status === "CUSTOMER_SPEAKING"
                  ) {
                    console.log(`[CALL_STATE][FRONTEND] call_id=${callId} previous_state=${connectionState} incoming_event=REST_POLLING incoming_state=${callInfo.status} new_state=CONNECTED`);
                    wasCallConnectedRef.current = true;
                    if (onCallAnsweredRef.current) {
                      onCallAnsweredRef.current();
                    } else {
                      setConnectionState("CONNECTED");
                      setActiveCustomer((prev) => prev ? { ...prev, status: "CONNECTED" } : null);
                    }
                  } else if (callInfo.status === "COMPLETED" || callInfo.status === "FAILED") {
                    if (callPollIntervalRef.current) {
                      clearInterval(callPollIntervalRef.current);
                      callPollIntervalRef.current = null;
                    }
                    setConnectionState("DISCONNECTED");
                    setVoiceTranscript((prev) => {
                      const last = prev[prev.length - 1];
                      if (last && last.text.includes("Call ended or was not answered")) {
                        return prev;
                      }
                      return [
                        ...prev,
                        { sender: "ai", text: `⚠️ Call ended or was not answered by ${data.customer_name || "lead"}.` }
                      ];
                    });
                  }
                }
              } catch (_) {}
            }, 1200);
          }
        }
      } else {
        handleCallAnswered();
      }
    } catch (err: any) {
      console.warn("Failed to start session:", err);
      const errMsg = err.message || "Could not connect to backend server.";
      const isDnd =
        err?.status === 403 ||
        err?.statusCode === 403 ||
        String(errMsg).toLowerCase().includes("do not call") ||
        String(errMsg).toLowerCase().includes("dnd") ||
        String(errMsg).toLowerCase().includes("dnc") ||
        String(errMsg).toLowerCase().includes("suppress");

      activeSessionRef.current = false;
      setVoiceStatus("idle");

      if (isDnd) {
        const targetLeadId = leadIdOverride !== undefined ? leadIdOverride : selectedLeadId;
        if (targetLeadId) {
          setAssignedLeads((prev) =>
            prev.map((l) => (l.id === targetLeadId ? { ...l, call_status: "DNC", disposition: "DNC" } : l))
          );
        }
        setActiveCustomer((prev) => (prev ? { ...prev, status: "DNC" } : null));
        setConnectionState("DISCONNECTED");
        setErrorMessage(`🚫 Number suppressed: ${errMsg}`);
        setVoiceTranscript([
          {
            sender: "ai",
            text: `🚫 Dialing blocked: ${errMsg}`,
          },
        ]);
      } else {
        setConnectionState("ERROR");
        setErrorMessage(errMsg);
        setVoiceTranscript([
          {
            sender: "ai",
            text: `⚠️ Error initializing voice session: ${errMsg}`,
          },
        ]);
      }
    } finally {
      isStartingRef.current = false;
    }
  };

  startSessionRef.current = startSession;

  const handleTalkToAgent = async () => {
    if (isTransferring || !activeSessionRef.current) return;
    setIsTransferring(true);
    transferInitiatedRef.current = true;
    setTransferStatus("Initiating transfer to human agent...");

    try {
      const transferSpeech = "I understand. I am transferring you to an available human specialist right now. Please hold on a moment.";
      
      setVoiceTranscript((prev) => [
        ...prev,
        { sender: "ai", text: `🎧 Transferring call to a human specialist...` },
      ]);

      setVoiceStatus("speaking");
      playVoiceResponse(transferSpeech, () => {
        setVoiceStatus("idle");
      });

      const effectiveLeadId = activeCustomer?.id || selectedLeadId || undefined;
      const effectiveSessionId = voiceSessionIdRef.current || voiceSessionId || "";
      const effectiveCallId = activeCallIdRef.current || effectiveSessionId || "test-call";

      let assignedAgentName = "human specialist";

      // 1. Dispatch transfer via dedicated talkToAgent endpoint
      try {
        if (effectiveSessionId) {
          const res = await localVoiceTestService.talkToAgent(
            effectiveSessionId,
            campaignId,
            effectiveLeadId,
            `Customer requested transfer from GBZ AI Agent modal: ${activeCustomer?.name || "Customer"}`
          );
          if (res?.assigned_agent_name || res?.assigned_expert?.name) {
            assignedAgentName = res.assigned_agent_name || res.assigned_expert?.name || assignedAgentName;
          }
        }
      } catch (localErr) {
        console.warn("localVoiceTestService.talkToAgent notice, running fallback transfer:", localErr);
      }

      // 2. Dispatch transfer via voice agent transfer service to ensure WebSocket event reaches target agent
      try {
        const transRes = await transferService.transferVoiceAgentToVoiceAgent({
          call_session_id: effectiveCallId,
          from_voice_agent_id: agentId || "ai-agent",
          to_voice_agent_id: "", // auto-resolves to assigned campaign agent or available agent
          transfer_type: "warm",
          notes: `Live transfer from GBZ AI Agent modal. Customer: ${activeCustomer?.name || "Customer"}, Phone: ${activeCustomer?.phone || ""}`,
          lead_id: effectiveLeadId,
          campaign_id: campaignId,
        });
        if (transRes?.assigned_agent_name) {
          assignedAgentName = transRes.assigned_agent_name;
        }
      } catch (transErr) {
        console.warn("transferService fallback notice:", transErr);
      }

      setTransferStatus(`✅ Transferred! Assigned to human agent: ${assignedAgentName}`);
    } catch (err) {
      console.warn("Transfer failed:", err);
      setTransferStatus("Transfer request queued.");
    } finally {
      setIsTransferring(false);
    }
  };

  // Download Call Report as CSV
  const handleDownloadCallCsv = () => {
    try {
      const customerName = activeCustomer?.name || "Customer";
      const customerPhone = activeCustomer?.phone || "";
      const customerCompany = activeCustomer?.company || "";
      const durationStr = formatDuration(elapsedMs);
      const sessionDate = new Date().toLocaleString();
      
      const collectedAnswersStr = Object.entries(collectedData)
        .map(([k, v]) => `${k}: ${v}`)
        .join("; ");

      const csvRows = [
        ["Call Report - GBZ AI Agent", ""],
        ["Date & Time", `"${sessionDate}"`],
        ["Campaign Name", `"${(campaignName || "Campaign").replace(/"/g, '""')}"`],
        ["Customer / Lead Name", `"${customerName.replace(/"/g, '""')}"`],
        ["Phone Number", `"${customerPhone}"`],
        ["Company", `"${customerCompany.replace(/"/g, '""')}"`],
        ["Call Duration", `"${durationStr}"`],
        ["Qualification Status", `"${qualificationStatus}"`],
        ["Script Stage", `"${currentScriptStep}"`],
        ["Captured Qualification Data", `"${collectedAnswersStr.replace(/"/g, '""')}"`],
        ["", ""],
        ["--- CONVERSATION TRANSCRIPT ---", ""],
        ["Speaker", "Message"],
        ...voiceTranscript.map((m) => [
          m.sender === "ai" ? "AI Agent" : "Customer",
          `"${(m.text || "").replace(/"/g, '""')}"`
        ])
      ];

      const csvContent = "\uFEFF" + csvRows.map((r) => r.join(",")).join("\n");
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      const cleanName = customerName.toLowerCase().replace(/[^a-z0-9]/g, "_");
      link.setAttribute("href", url);
      link.setAttribute("download", `${cleanName}_call_report.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error("Failed to download call report CSV:", e);
    }
  };

  // Download All Assigned Leads Report as CSV
  const handleDownloadAllLeadsCsv = () => {
    try {
      const headers = ["Lead ID", "Customer Name", "Phone", "Company", "Call Status", "Campaign Name"];
      const rows = (assignedLeads || []).map((l) => [
        l.id || "",
        `"${(l.name || "Customer").replace(/"/g, '""')}"`,
        `"${l.phone || ""}"`,
        `"${(l.company || "").replace(/"/g, '""')}"`,
        `"${l.call_status || "PENDING"}"`,
        `"${(campaignName || "Campaign").replace(/"/g, '""')}"`
      ]);

      const csvContent = "\uFEFF" + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      const cleanCamp = (campaignName || "campaign").toLowerCase().replace(/[^a-z0-9]/g, "_");
      link.setAttribute("href", url);
      link.setAttribute("download", `${cleanCamp}_assigned_leads_report.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error("Failed to download campaign leads report CSV:", e);
    }
  };

  // Print or Download PDF Report
  const handlePrintPdfReport = () => {
    try {
      const customerName = activeCustomer?.name || "Customer";
      const customerPhone = activeCustomer?.phone || "—";
      const customerCompany = activeCustomer?.company || "—";
      const durationStr = formatDuration(elapsedMs);
      const sessionDate = new Date().toLocaleString();

      const printWindow = window.open("", "_blank", "width=850,height=900");
      if (!printWindow) return;

      const transcriptHtml = voiceTranscript
        .map((m) => `
          <div style="margin-bottom: 12px; display: flex; flex-direction: column; align-items: ${m.sender === 'ai' ? 'flex-start' : 'flex-end'};">
            <div style="font-size: 11px; font-weight: 700; color: ${m.sender === 'ai' ? '#4f46e5' : '#059669'}; margin-bottom: 3px;">
              ${m.sender === 'ai' ? '🤖 GBZ AI Agent' : '👤 Customer (' + customerName + ')'}
            </div>
            <div style="max-width: 80%; padding: 10px 14px; border-radius: 10px; font-size: 13px; line-height: 1.5; background: ${m.sender === 'ai' ? '#f3f4f6' : '#eff6ff'}; color: #1f2937; border: 1px solid ${m.sender === 'ai' ? '#e5e7eb' : '#bfdbfe'};">
              ${(m.text || "").replace(/\n/g, '<br/>')}
            </div>
          </div>
        `).join("");

      const collectedEntriesHtml = Object.entries(collectedData)
        .map(([k, v]) => `<tr><td style="padding: 6px 10px; border: 1px solid #e2e8f0; font-weight: 600; text-transform: capitalize; background: #f8fafc;">${k}</td><td style="padding: 6px 10px; border: 1px solid #e2e8f0;">${v}</td></tr>`)
        .join("");

      const htmlContent = [
        "<!DOCTYPE html>",
        "<html>",
        "<head>",
        `  <title>Call Report - ${customerName}</title>`,
        "  <style>",
        '    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 30px; color: #1e293b; }',
        "    h1 { font-size: 20px; font-weight: 800; color: #1e1b4b; margin: 0 0 4px 0; }",
        "    .header-box { border-bottom: 2px solid #6366f1; padding-bottom: 15px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: flex-start; }",
        "    .badge { display: inline-block; padding: 3px 8px; border-radius: 9999px; font-size: 11px; font-weight: 800; text-transform: uppercase; }",
        "    .badge-qual { background: #dcfce7; color: #166534; border: 1px solid #86efac; }",
        "    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px; }",
        "    .card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px 16px; font-size: 12px; }",
        "    .card strong { color: #0f172a; font-size: 13px; }",
        "    table { width: 100%; border-collapse: collapse; font-size: 12px; margin-bottom: 20px; }",
        "    .transcript-box { border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; background: #ffffff; }",
        "    @media print { body { padding: 15px; } button { display: none; } }",
        "  </style>",
        "</head>",
        "<body>",
        '  <div class="header-box">',
        "    <div>",
        "      <h1>GBZ AI Agent — Call Report</h1>",
        `      <div style="font-size: 12px; color: #64748b;">Campaign: <strong>${campaignName}</strong> • Generated: ${sessionDate}</div>`,
        "    </div>",
        '    <div style="text-align: right;">',
        `      <span class="badge badge-qual">${qualificationStatus}</span>`,
        `      <div style="font-size: 13px; font-weight: 700; color: #4f46e5; margin-top: 5px;">⏱ Duration: ${durationStr}</div>`,
        "    </div>",
        "  </div>",
        '  <div class="grid">',
        '    <div class="card">',
        '      <div style="color: #64748b; font-size: 11px; font-weight: 700; text-transform: uppercase; margin-bottom: 6px;">Customer Details</div>',
        `      <div>Customer: <strong>${customerName}</strong></div>`,
        `      <div>Phone: <strong>${customerPhone}</strong></div>`,
        `      <div>Company: <strong>${customerCompany}</strong></div>`,
        "    </div>",
        '    <div class="card">',
        '      <div style="color: #64748b; font-size: 11px; font-weight: 700; text-transform: uppercase; margin-bottom: 6px;">Call Metrics</div>',
        `      <div>Stage: <strong>${currentScriptStep}</strong></div>`,
        `      <div>Call Status: <strong>${qualificationStatus}</strong></div>`,
        `      <div>Duration: <strong>${durationStr}</strong></div>`,
        "    </div>",
        "  </div>",
        collectedEntriesHtml ? [
          '  <div style="margin-bottom: 20px;">',
          '    <div style="font-size: 13px; font-weight: 700; margin-bottom: 8px; color: #1e1b4b;">Captured Lead Information</div>',
          "    <table>",
          `      <tbody>${collectedEntriesHtml}</tbody>`,
          "    </table>",
          "  </div>"
        ].join("\n") : "",
        "  <div>",
        '    <div style="font-size: 13px; font-weight: 700; margin-bottom: 10px; color: #1e1b4b;">Conversation Transcript</div>',
        '    <div class="transcript-box">',
        `      ${transcriptHtml || '<p style="color: #94a3b8; font-size: 13px;">No conversation messages recorded.</p>'}`,
        "    </div>",
        "  </div>",
        "  <script>",
        "    window.onload = function() { window.print(); }",
        "  </script>",
        "</body>",
        "</html>"
      ].join("\n");

      printWindow.document.write(htmlContent);
      printWindow.document.close();
    } catch (e) {
      console.error("Failed to open print PDF report:", e);
    }
  };

  useEffect(() => {
    let isMounted = true;
    setIsMinimized(false);
    setLoadingLeads(true);
    refreshDialerStatus();

    campaignService.getAiAgentLeads(campaignId, { limit: 500 })
      .then((res) => {
        if (isMounted && res.leads && res.leads.length > 0) {
          setAssignedLeads(res.leads);
          const firstEligible = res.leads.find((l) => isLeadEligible(l));
          if (firstEligible) {
            setSelectedLeadId(firstEligible.id);
            setActiveCustomer({
              id: firstEligible.id,
              name: firstEligible.name,
              phone: firstEligible.phone,
              company: firstEligible.company,
              status: firstEligible.call_status,
            });
            startSession(firstEligible.id);
          } else {
            const firstLead = res.leads[0];
            setSelectedLeadId(firstLead.id);
            setActiveCustomer({
              id: firstLead.id,
              name: firstLead.name,
              phone: firstLead.phone,
              company: firstLead.company,
              status: firstLead.call_status,
            });
            setConnectionState("DISCONNECTED");
            setVoiceStatus("idle");
            setVoiceTranscript([
              {
                sender: "ai",
                text: "ℹ️ All assigned leads in this campaign have already been completed. Click 'Re-dial' to test call again, or use Lead Recycling to reset leads.",
              },
            ]);
          }
        } else {
          setAssignedLeads([]);
          setErrorMessage("No leads are assigned to this campaign. Please assign leads before initiating testing or dialing.");
          setConnectionState("ERROR");
        }
      })
      .catch((err) => {
        const errMsg = String(err?.message || err?.detail || err || "");
        if (errMsg.includes("Voice Agent") || errMsg.includes("403")) {
          setErrorMessage("Campaigns created for a Voice Agent must not be accessible to or dialed by the AI Agent.");
          setConnectionState("ERROR");
          return;
        }
        console.warn("Failed to load campaign leads:", err);
        if (isMounted) {
          setAssignedLeads([]);
          setErrorMessage("Failed to load campaign leads. Cannot initiate test without verified campaign leads.");
          setConnectionState("ERROR");
        }
      })
      .finally(() => {
        if (isMounted) setLoadingLeads(false);
      });

    const dialerPollTimer = setInterval(() => {
      if (isMounted) {
        refreshDialerStatus();
        campaignService.getAiAgentLeads(campaignId, { limit: 500 })
          .then((res) => {
            if (isMounted && res.leads) {
              const ACTIVE_PRIORITY: Record<string, number> = {
                PENDING: 0, NEW: 0, UNASSIGNED: 0,
                RESERVED: 1, DIALING: 2, CALLING: 2,
                RINGING: 3,
                CONNECTED: 4, IN_CALL: 4, IN_PROGRESS: 4,
                TALKING: 5, AI_HANDLING: 5, HUMAN_HANDLING: 5,
                COMPLETED: -1, FAILED: -1, CANCELLED: -1, ENDED: -1,
              };
              setAssignedLeads((prev) => {
                const prevById = new Map(prev.map((l) => [l.id, l]));
                const merged: CampaignAiAgentLead[] = [];
                const handledIds = new Set<string>();

                for (const fresh of res.leads) {
                  handledIds.add(fresh.id);
                  const existing = prevById.get(fresh.id);
                  if (!existing) {
                    merged.push(fresh);
                  } else {
                    const freshStatus = String(fresh.call_status || "").toUpperCase();
                    const isFreshTerminal = ["COMPLETED", "QUALIFIED", "FAILED", "CANCELLED", "ENDED", "DNC"].includes(freshStatus);
                    if (isFreshTerminal) {
                      merged.push(fresh);
                    } else {
                      const freshP = ACTIVE_PRIORITY[freshStatus] ?? 0;
                      const existP = ACTIVE_PRIORITY[String(existing.call_status || "").toUpperCase()] ?? 0;
                      merged.push(
                        existP > freshP
                          ? { ...fresh, call_status: existing.call_status }
                          : fresh
                      );
                    }
                  }
                }

                for (const [id, existing] of prevById.entries()) {
                  if (!handledIds.has(id)) {
                    merged.push(existing);
                  }
                }

                return merged;
              });
            }
          })
          .catch((err) => {
            const errMsg = String(err?.message || err?.detail || err || "");
            if (errMsg.includes("Voice Agent") || errMsg.includes("403")) {
              setErrorMessage("Campaigns created for a Voice Agent must not be accessible to or dialed by the AI Agent.");
              setConnectionState("ERROR");
            }
          });
      }
    }, 3000);


    return () => {
      isMounted = false;
      activeSessionRef.current = false;
      clearInterval(dialerPollTimer);
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      if (callPollIntervalRef.current) clearInterval(callPollIntervalRef.current);
      if (pauseTimerRef.current) {
        clearTimeout(pauseTimerRef.current);
        pauseTimerRef.current = null;
      }
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [campaignId]);

  const targetLimit = dialerStatus?.target_capacity || dialerStatus?.ratio || 2;
  const authoritativeActiveCount = dialerStatus?.active_calls !== undefined
    ? dialerStatus.active_calls
    : (activeCustomer && !["DISCONNECTED", "ERROR"].includes(connectionState) ? 1 : 0);
  const displayedActiveCalls = authoritativeActiveCount;

  // Minimized Floating Widget — allows viewing and interacting with other campaigns while session remains active
  if (isMinimized) {
    const offsetRight = 24 + minimizedIndex * 360;
    return (
      <div 
        className="fixed bottom-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
        style={{ right: `${offsetRight}px` }}
      >
        <div
          onClick={() => setIsMinimized(false)}
          className="group flex items-center gap-3.5 bg-slate-900/95 hover:bg-slate-900 backdrop-blur-xl text-white border border-slate-700/80 hover:border-purple-500/80 shadow-2xl rounded-2xl px-4 py-3 cursor-pointer transition-all duration-200 hover:scale-[1.02] ring-1 ring-white/10"
          title="Click to restore GBZ Voice Agent session"
        >
          {/* Animated Status Avatar */}
          <div className="relative flex items-center justify-center shrink-0">
            <div className={`p-2.5 rounded-xl ${
              connectionState === "CONNECTED" ? "bg-emerald-500/20 text-emerald-400" :
              connectionState === "RINGING" ? "bg-purple-500/20 text-purple-400" :
              "bg-indigo-500/20 text-indigo-400"
            }`}>
              <Bot className="h-5 w-5" />
            </div>
            <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                connectionState === "CONNECTED" ? "bg-emerald-400" :
                connectionState === "RINGING" ? "bg-purple-400" :
                "bg-indigo-400"
              }`} />
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                connectionState === "CONNECTED" ? "bg-emerald-500" :
                connectionState === "RINGING" ? "bg-purple-500" :
                "bg-indigo-500"
              }`} />
            </span>
          </div>

          {/* Campaign & Call Details */}
          <div className="min-w-0 pr-1">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm text-white truncate max-w-[170px]">
                {campaignName}
              </span>
              <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded-full uppercase tracking-wider ${
                connectionState === "CONNECTED" ? "bg-emerald-950 text-emerald-300 border border-emerald-700" :
                connectionState === "RINGING" ? "bg-purple-950 text-purple-300 border border-purple-700 animate-pulse" :
                connectionState === "PROCESSING" ? "bg-amber-950 text-amber-300 border border-amber-700" :
                "bg-slate-800 text-slate-300 border border-slate-700"
              }`}>
                {connectionState === "RINGING" ? "RINGING" : connectionState}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 truncate max-w-[220px] mt-0.5 flex items-center gap-1.5 font-medium">
              {activeCustomer?.name ? (
                <>
                  <Phone className="h-2.5 w-2.5 text-emerald-400 shrink-0" />
                  <span className="text-slate-200 font-semibold truncate">Calling: {activeCustomer.name}</span>
                </>
              ) : (
                <span>Auto-Dial Active &bull; {displayedActiveCalls} active call(s)</span>
              )}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1 pl-2 border-l border-slate-800 shrink-0" onClick={(e) => e.stopPropagation()}>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setIsMinimized(false)}
              className="h-8 w-8 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg cursor-pointer"
              title="Maximize Call Window"
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="h-8 w-8 text-slate-400 hover:text-rose-400 hover:bg-rose-950/40 rounded-lg cursor-pointer"
              title="End / Close Call Session"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-md z-50 flex items-center justify-center p-3 md:p-5">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-[1360px] border border-gray-100 overflow-hidden flex flex-col h-[90vh] min-h-[720px] max-h-[960px] animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Top Header */}
        <div className="px-6 py-3.5 border-b border-gray-100 flex items-center justify-between bg-indigo-50/20 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-2.5 bg-purple-100 text-purple-700 rounded-2xl shrink-0">
              <Bot className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-extrabold text-gray-900 text-base md:text-lg">
                  {resolvedAgentType === "AI_VOICE" || resolvedAgentType === "AI"
                    ? `GBZ AI Agent${resolvedAgentName && resolvedAgentName !== "AI Voice Assistant" ? ` (${resolvedAgentName})` : " (MAGIC)"}`
                    : `GBZ Voice Agent${resolvedAgentName && resolvedAgentName !== "AI Voice Assistant" ? ` (${resolvedAgentName})` : ""}`}
                </h3>

                {/* Campaign Dialer Status Pill */}
                {dialerStatus?.status === "RUNNING" ? (
                  <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    RUNNING
                  </span>
                ) : (
                  <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                    connectionState === "CONNECTED" ? "bg-emerald-100 text-emerald-800 border border-emerald-300" :
                    connectionState === "RINGING" ? "bg-purple-100 text-purple-800 border border-purple-300 animate-pulse" :
                    connectionState === "PROCESSING" ? "bg-amber-100 text-amber-800 border border-amber-300 animate-pulse" :
                    connectionState === "CONNECTING" || connectionState === "INITIALIZING" ? "bg-blue-100 text-blue-800 border border-blue-300" :
                    connectionState === "ERROR" ? "bg-rose-100 text-rose-800 border border-rose-300" :
                    "bg-gray-100 text-gray-800 border border-gray-300"
                  }`}>
                    ● {connectionState === "RINGING" ? "RINGING..." : connectionState}
                  </span>
                )}

                {/* Concurrency and Auto-Dial Ratio Badge */}
                <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider bg-purple-100 text-purple-900 border border-purple-300 flex items-center gap-1">
                  <Sparkles className="h-3 w-3 text-purple-600" />
                  AUTO-DIAL: 1:{dialerStatus?.ratio || 1} &bull; CONCURRENCY: {displayedActiveCalls}/{targetLimit}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-0.5 text-xs text-gray-500 font-medium">
                <p>Campaign: <strong>{campaignName}</strong></p>
                {activeCustomer?.name && (
                  <span className="hidden sm:inline-flex items-center gap-1 bg-purple-100/70 text-purple-900 px-2 py-0.5 rounded font-semibold text-[11px]">
                    <User className="h-3 w-3" /> Calling: <strong>{activeCustomer.name}</strong>
                  </span>
                )}
                {connectionState === "CONNECTED" && lastTurnLatencyMs !== null && (
                  <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                    ⚡ Turn: {lastTurnLatencyMs}ms
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleDownloadCallCsv}
              className="gap-1.5 text-xs font-bold text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 cursor-pointer shadow-2xs h-8"
              title="Download call transcript and lead report as CSV"
            >
              <Download className="h-3.5 w-3.5 text-purple-600" />
              Download Report
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handlePrintPdfReport}
              className="gap-1.5 text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 cursor-pointer shadow-2xs h-8"
              title="Print or Save Report as PDF"
            >
              <Printer className="h-3.5 w-3.5 text-slate-600" />
              Print / PDF
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setIsMinimized(true)}
              className="rounded-full h-8 w-8 cursor-pointer hover:bg-slate-100 text-slate-500 hover:text-slate-800"
              title="Minimize Session (view next campaign)"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleClose} className="rounded-full h-8 w-8 cursor-pointer hover:bg-rose-50 text-slate-500 hover:text-rose-600" title="Close Session">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Target Customer Bar */}
        <div className="bg-slate-900 text-white px-6 py-2.5 flex items-center justify-between gap-3 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-purple-300 flex items-center gap-1.5 shrink-0">
              <Phone className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
              TARGET CUSTOMER:
            </span>
            {assignedLeads.length > 0 ? (
              <select
                value={selectedLeadId || ""}
                onChange={(e) => {
                  const lead = assignedLeads.find((l) => l.id === e.target.value);
                  if (lead) handleSelectCustomer(lead);
                }}
                className="bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold px-3 py-1 rounded-lg border border-slate-600 focus:outline-none focus:ring-1 focus:ring-purple-400 cursor-pointer max-w-xs md:max-w-md truncate shadow-xs"
              >
                {assignedLeads.map((l) => (
                  <option key={l.id} value={l.id} className="bg-slate-900 text-white">
                    {l.name} ({l.phone || "No phone"}) — {l.id === activeCustomer?.id ? (activeCustomer?.status || l.call_status) : l.call_status}
                  </option>
                ))}
              </select>
            ) : (
              <span className="text-xs font-bold text-white bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">
                {activeCustomer?.name ? `${activeCustomer.name} (${activeCustomer.phone || "Lead"})` : "Dialing Assigned Lead..."}
              </span>
            )}
            {/* Real-time Summary Count Badges */}
            <div className="hidden lg:flex items-center gap-2 ml-3 pl-3 border-l border-slate-700 text-[11px] font-mono">
              <span className="text-slate-400 font-sans font-bold">Total:</span>
              <span className="text-white font-bold">{leadCounts.total}</span>
              <span className="text-slate-600">&bull;</span>
              <span className="text-emerald-400 font-sans font-bold">Active:</span>
              <span className="text-emerald-400 font-bold">{activeCalls.length}/{targetLimit}</span>
              <span className="text-slate-600">&bull;</span>
              <span className="text-amber-400 font-sans font-bold">Pending:</span>
              <span className="text-amber-400 font-bold">{leadCounts.pending}</span>
              <span className="text-slate-600">&bull;</span>
              <span className="text-purple-400 font-sans font-bold">Done:</span>
              <span className="text-purple-400 font-bold">{leadCounts.completed}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Button
              type="button"
              size="sm"
              onClick={handleToggleAutoDial}
              disabled={dialingActionLoading}
              className={
                dialerStatus?.status === "RUNNING"
                  ? "bg-amber-600 hover:bg-amber-500 text-white font-bold text-[11px] h-7 px-3 rounded-lg shadow-xs flex items-center gap-1.5 cursor-pointer"
                  : "bg-purple-600 hover:bg-purple-500 text-white font-bold text-[11px] h-7 px-3 rounded-lg shadow-xs flex items-center gap-1.5 cursor-pointer"
              }
            >
              {dialingActionLoading ? (
                <Loader2 className="h-3 w-3 animate-spin" />
              ) : dialerStatus?.status === "RUNNING" ? (
                <>
                  <Pause className="h-3 w-3" /> Pause Auto-Dial
                </>
              ) : (
                <>
                  <Sparkles className="h-3 w-3" /> Auto-Dial ({dialerStatus?.ratio ? `1:${dialerStatus.ratio}` : "1:X"})
                </>
              )}
            </Button>
            <Button
              type="button"
              size="sm"
              onClick={() => {
                if (!selectedLeadId) {
                  setErrorMessage("No lead selected to re-dial.");
                  return;
                }
                const targetLead = assignedLeads.find((l) => l.id === selectedLeadId);
                if (!targetLead) {
                  setErrorMessage("Selected lead does not belong to this campaign.");
                  return;
                }
                if (["DNC", "DO_NOT_CALL"].includes(String(targetLead.call_status).toUpperCase())) {
                  setErrorMessage("Cannot re-dial: Lead is on the DNC / Do Not Call suppression list.");
                  return;
                }
                startSession(selectedLeadId, true);
              }}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-[11px] h-7 px-3 rounded-lg shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              <PhoneCall className="h-3 w-3" /> Re-dial
            </Button>
            <Button
              type="button"
              size="sm"
              onClick={handleCallNextLead}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] h-7 px-3 rounded-lg shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              Call Next Lead <ArrowRight className="h-3 w-3" />
            </Button>
            <Button
              type="button"
              size="sm"
              onClick={handleDownloadCallCsv}
              className="bg-purple-700 hover:bg-purple-600 text-white font-bold text-[11px] h-7 px-3 rounded-lg shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="h-3 w-3 text-purple-200" /> Report
            </Button>
            <Button
              type="button"
              size="sm"
              onClick={handleDownloadAllLeadsCsv}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-[11px] h-7 px-2.5 rounded-lg shadow-xs flex items-center gap-1 cursor-pointer border border-slate-700"
            >
              <FileText className="h-3 w-3 text-slate-400" /> All Leads
            </Button>
          </div>
        </div>

        {/* Qualification Stage Progress Bar */}
        <div className="bg-slate-50 border-b border-slate-200/80 px-6 py-2.5 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2 shrink-0">
            <ShieldCheck className="h-4 w-4 text-purple-600" />
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-600">
              QUALIFICATION STAGE PROGRESS
            </span>
          </div>
          <div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
            {(scriptSteps.length > 0 ? scriptSteps : [
              { name: "1. Customer Name", status: "DONE" },
              { name: "2. Phone Number", status: "DONE" },
              { name: "3. Email Address", status: "DONE" },
              { name: "4. Age", status: "CURRENT" },
              { name: "5. Product Interest", status: "PENDING" },
              { name: "6. Product Option", status: "PENDING" },
              { name: "7. Insurance Requirement", status: "PENDING" },
              { name: "8. Premium Preference", status: "PENDING" },
            ]).map((stepItem, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-lg font-bold shrink-0 transition-all ${
                  stepItem.status === "DONE"
                    ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                    : stepItem.status === "CURRENT"
                    ? "bg-purple-600 text-white shadow-xs"
                    : "bg-white text-slate-400 border border-slate-200"
                }`}
              >
                {stepItem.status === "DONE" && <Check className="h-3 w-3 text-emerald-600" />}
                {stepItem.status === "CURRENT" && <ArrowRight className="h-3 w-3 text-white animate-pulse" />}
                {stepItem.status === "PENDING" && <Circle className="h-2 w-2 text-slate-300" />}
                <span>{stepItem.name}</span>
              </div>
            ))}
          </div>
          <div className="text-xs font-bold text-purple-700 shrink-0">
            Active: {displayedActiveCalls}/{targetLimit}
          </div>
        </div>

        {/* Warm Transfer Status Banner if Active */}
        <TransferStatusBanner
          status={callTransfer.status}
          statusMessage={callTransfer.statusMessage}
          assignedAgentName={callTransfer.assignedAgentName}
          countdown={callTransfer.countdown}
          callDurationSeconds={callTransfer.humanCallTimer}
        />

        {/* MAIN CALL WORKSPACE: Responsive 2-Column Layout */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden min-h-0 bg-white">
          {/* LEFT PANEL: Active Calls & All Assigned Leads Workspace */}
          <div className="w-full md:w-80 lg:w-96 flex flex-col border-r border-slate-200 bg-slate-50/40 shrink-0 overflow-hidden">
            {/* Left Header with Tab Switcher */}
            <div className="p-2 border-b border-slate-200/80 bg-white shrink-0">
              <div className="flex items-center p-1 bg-slate-100 rounded-xl gap-1">
                <button
                  type="button"
                  onClick={() => setLeftPanelTab("ACTIVE")}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    leftPanelTab === "ACTIVE"
                      ? "bg-white text-purple-700 shadow-xs border border-purple-200/50"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Phone className="h-3.5 w-3.5 text-purple-600" />
                  <span>Active Calls</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-extrabold ${
                    activeCalls.length > 0 ? "bg-emerald-100 text-emerald-800" : "bg-slate-200 text-slate-600"
                  }`}>
                    {activeCalls.length}/{targetLimit}
                  </span>
                  {activeCalls.length > 0 && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setLeftPanelTab("ALL")}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    leftPanelTab === "ALL"
                      ? "bg-white text-purple-700 shadow-xs border border-purple-200/50"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Users className="h-3.5 w-3.5 text-indigo-600" />
                  <span>All Leads</span>
                  <span className="px-1.5 py-0.2 rounded-full text-[10px] font-extrabold bg-indigo-50 text-indigo-700 border border-indigo-200">
                    {leadCounts.total}
                  </span>
                </button>
              </div>
            </div>

            {/* TAB CONTENT: ACTIVE CALLS */}
            {leftPanelTab === "ACTIVE" ? (
              <div className="flex-1 overflow-y-auto p-3 space-y-2.5">
                {activeCalls.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mb-3 text-slate-400">
                      <Phone className="h-6 w-6" />
                    </div>
                    <p className="font-bold text-slate-700 text-sm">No Active Calls</p>
                    <p className="text-xs text-slate-400 mt-1 max-w-[220px]">
                      Auto-Dial is dialing up to {targetLimit} concurrent lead{targetLimit > 1 ? "s" : ""}.
                    </p>
                    <button
                      type="button"
                      onClick={() => setLeftPanelTab("ALL")}
                      className="mt-3 text-xs font-bold text-purple-600 hover:text-purple-700 underline cursor-pointer"
                    >
                      View All {leadCounts.total} Assigned Leads &rarr;
                    </button>
                  </div>
                ) : (
                  activeCalls.map((lead, idx) => {
                    const isSelected = selectedLeadId === lead.id || (!selectedLeadId && idx === 0);
                    const isCurSessionLead = lead.id === activeCustomer?.id;
                    const durMs = isCurSessionLead ? elapsedMs : (leadDurations[lead.id] || ((lead.duration || 0) * 1000));
                    const initials = getInitials(lead.name);
                    const avatarClass = getAvatarBg(lead.name, idx);
                    const statusUpper = (lead.call_status || "").toUpperCase();
                    const isConnected = ["CONNECTED", "IN_CALL", "TALKING"].includes(statusUpper);
                    const isRinging = ["RINGING"].includes(statusUpper);
                    const isDialing = ["DIALING", "CALLING", "RESERVED"].includes(statusUpper);

                    return (
                      <div
                        key={lead.id}
                        onClick={() => handleSelectCustomer(lead)}
                        className={`rounded-2xl p-3.5 transition-all cursor-pointer relative ${
                          isSelected
                            ? "border-2 border-purple-500 bg-purple-50/50 shadow-sm"
                            : "border border-slate-200 bg-white hover:border-purple-300 hover:bg-slate-50/50 shadow-2xs"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${avatarClass}`}>
                              {initials}
                            </div>
                            <div className="min-w-0">
                              <p className="font-bold text-slate-900 text-sm truncate">{lead.name}</p>
                              <p className="text-xs text-slate-500 font-mono truncate">{lead.phone || "—"}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <span className="text-[11px] font-mono font-bold text-slate-600 flex items-center gap-1">
                              {isConnected && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />}
                              {formatDuration(durMs)}
                            </span>
                            <ArrowRight className="h-3.5 w-3.5 text-slate-300" />
                          </div>
                        </div>

                        <div className="mt-2.5 flex items-center justify-between">
                          <span
                            className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1 ${
                              isConnected
                                ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                                : isRinging
                                ? "bg-purple-100 text-purple-800 border border-purple-300 animate-pulse"
                                : isDialing
                                ? "bg-blue-100 text-blue-800 border border-blue-300"
                                : "bg-slate-100 text-slate-700 border border-slate-300"
                            }`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${isConnected ? "bg-emerald-500" : isRinging ? "bg-purple-500" : "bg-blue-500"}`} />
                            {lead.call_status}
                          </span>
                          <div className="flex items-center gap-1 text-[11px] text-slate-400">
                            <Volume2 className="h-3.5 w-3.5 text-slate-400" />
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            ) : (
              /* TAB CONTENT: ALL ASSIGNED LEADS */
              <div className="flex-1 flex flex-col overflow-hidden">
                {/* Search & Filter Bar */}
                <div className="p-3 border-b border-slate-200/80 bg-white space-y-2 shrink-0">
                  <div className="relative">
                    <Search className="h-3.5 w-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <Input
                      value={leadSearchText}
                      onChange={(e) => setLeadSearchText(e.target.value)}
                      placeholder="Search name, phone, company..."
                      className="h-7 pl-8 text-xs bg-slate-50 border-slate-200 rounded-lg focus:bg-white"
                    />
                  </div>
                  {/* Status Pills */}
                  <div className="flex flex-wrap items-center gap-1 text-[10px]">
                    {[
                      { key: "ALL", label: `All (${leadCounts.total})` },
                      { key: "PENDING", label: `Pending (${leadCounts.pending})` },
                      { key: "ACTIVE", label: `Active (${leadCounts.active})` },
                      { key: "COMPLETED", label: `Done (${leadCounts.completed})` },
                      { key: "FAILED", label: `Failed (${leadCounts.failed})` },
                    ].map((btn) => (
                      <button
                        key={btn.key}
                        type="button"
                        onClick={() => setLeadListFilter(btn.key as any)}
                        className={`px-2 py-0.5 rounded-md font-semibold transition-all cursor-pointer ${
                          leadListFilter === btn.key
                            ? "bg-purple-600 text-white shadow-2xs"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Lead Cards List */}
                <div className="flex-1 overflow-y-auto p-3 space-y-2">
                  {filteredAssignedLeads.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400">
                      <Users className="h-6 w-6 text-slate-300 mb-2" />
                      <p className="font-bold text-slate-700 text-xs">No Leads Found</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        {leadSearchText || leadListFilter !== "ALL"
                          ? "Try clearing search or filters."
                          : "No leads are currently assigned to this campaign."}
                      </p>
                    </div>
                  ) : (
                    filteredAssignedLeads.map((lead, idx) => {
                      const isSelected = selectedLeadId === lead.id;
                      const initials = getInitials(lead.name);
                      const avatarClass = getAvatarBg(lead.name, idx);
                      const statusUpper = (lead.call_status || "").toUpperCase();
                      const isConnected = ["CONNECTED", "IN_CALL", "TALKING"].includes(statusUpper);
                      const isRinging = ["RINGING"].includes(statusUpper);
                      const isDialing = ["DIALING", "CALLING", "RESERVED"].includes(statusUpper);
                      const isCompleted = ["COMPLETED", "QUALIFIED", "CALLED", "SALE / SUCCESS"].some(s => statusUpper.includes(s));
                      const isFailed = ["FAILED", "NO_ANSWER", "BUSY", "CANCELLED"].some(s => statusUpper.includes(s));

                      return (
                        <div
                          key={lead.id}
                          onClick={() => handleSelectCustomer(lead)}
                          className={`rounded-xl p-2.5 transition-all cursor-pointer relative ${
                            isSelected
                              ? "border-2 border-purple-500 bg-purple-50/50 shadow-xs"
                              : "border border-slate-200 bg-white hover:border-purple-300 hover:bg-slate-50/40"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-2 min-w-0">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-[11px] shrink-0 ${avatarClass}`}>
                                {initials}
                              </div>
                              <div className="min-w-0">
                                <p className="font-bold text-slate-900 text-xs truncate">{lead.name}</p>
                                <p className="text-[11px] text-slate-500 font-mono truncate">{lead.phone || "—"}</p>
                              </div>
                            </div>
                            <span
                              className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded-full uppercase tracking-wider shrink-0 ${
                                isConnected
                                  ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                                  : isRinging
                                  ? "bg-purple-100 text-purple-800 border border-purple-300 animate-pulse"
                                  : isDialing
                                  ? "bg-blue-100 text-blue-800 border border-blue-300"
                                  : isCompleted
                                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                  : isFailed
                                  ? "bg-rose-50 text-rose-700 border border-rose-200"
                                  : "bg-slate-100 text-slate-600 border border-slate-200"
                              }`}
                            >
                              {lead.call_status || "PENDING"}
                            </span>
                          </div>

                          {lead.company && (
                            <p className="text-[10px] text-slate-400 mt-1 truncate pl-10">
                              {lead.company}
                            </p>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT PANEL: Selected Customer Conversation */}
          <div className="flex-1 flex flex-col bg-white overflow-hidden min-w-0">
            {/* Customer Header Banner */}
            <div className="px-6 py-3 border-b border-slate-100 flex items-center justify-between bg-white shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center font-extrabold text-sm shrink-0 ${getAvatarBg(activeCustomer?.name, 0)}`}>
                  {getInitials(activeCustomer?.name)}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-extrabold text-slate-900 text-base truncate">
                      {activeCustomer?.name || "Customer Conversation"}
                    </h3>
                    {activeCustomer?.status && (
                      <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider border ${
                        ["CONNECTED", "IN_CALL", "TALKING"].includes((activeCustomer.status || "").toUpperCase())
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                          : ["RINGING"].includes((activeCustomer.status || "").toUpperCase())
                          ? "bg-purple-100 text-purple-800 border border-purple-300 animate-pulse"
                          : "bg-blue-100 text-blue-800 border border-blue-300"
                      }`}>
                        ● {activeCustomer.status}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-mono mt-0.5">
                    <span>{activeCustomer?.phone || "—"}</span>
                    {activeCustomer?.company && (
                      <span className="text-slate-400 font-sans">&bull; {activeCustomer.company}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Call Duration */}
              <div className="flex items-center gap-2 shrink-0">
                <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-slate-700 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
                  <Clock className="h-3.5 w-3.5 text-purple-600" />
                  <span>
                    {formatDuration(
                      activeCustomer?.id && activeCustomer.id !== selectedLeadId
                        ? (leadDurations[activeCustomer.id] || 0)
                        : elapsedMs
                    )}
                  </span>
                </div>
              </div>
            </div>

            {/* Conversation / Transcript / Call Details Tabs */}
            <div className="flex items-center gap-6 px-6 border-b border-slate-100 bg-slate-50/40 text-xs font-bold shrink-0">
              {(["Conversation", "Transcript", "Call Details"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`py-2.5 transition-all cursor-pointer border-b-2 ${
                    activeTab === tab
                      ? "border-purple-600 text-purple-700 font-extrabold"
                      : "border-transparent text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Body */}
            {activeTab === "Conversation" ? (
              <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50/30">
                {voiceTranscript.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-8 text-slate-400">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-400 flex items-center justify-center mb-3">
                      <Bot className="h-6 w-6" />
                    </div>
                    <p className="font-bold text-slate-700 text-sm">No Messages Yet</p>
                    <p className="text-xs text-slate-400 mt-1 max-w-sm">
                      When the customer connects or speaks, the AI conversation will stream live into this panel.
                    </p>
                  </div>
                ) : (
                  voiceTranscript.map((msg, idx) => {
                    const isUser = msg.sender === "user";
                    return (
                      <div
                        key={idx}
                        className={`flex gap-3 items-start ${isUser ? "flex-row-reverse" : ""}`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                            isUser ? "bg-indigo-600 text-white" : "bg-purple-100 text-purple-700"
                          }`}
                        >
                          {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                        </div>
                        <div
                          className={`rounded-2xl p-3.5 text-xs max-w-[80%] leading-relaxed shadow-xs relative group ${
                            isUser
                              ? "bg-indigo-600 text-white font-medium rounded-tr-none"
                              : "bg-white text-slate-800 rounded-tl-none border border-slate-200/90"
                          }`}
                        >
                          <p className="whitespace-pre-wrap">{msg.text}</p>
                          <div
                            className={`mt-1.5 flex items-center gap-1.5 text-[10px] ${
                              isUser ? "text-indigo-200 justify-end" : "text-slate-400 justify-start"
                            }`}
                          >
                            <span>{(msg as any).timestamp || "Just now"}</span>
                            {isUser ? (
                              <CheckCheck className="h-3 w-3 text-indigo-200" />
                            ) : (
                              <button
                                type="button"
                                onClick={() => playSingleMessageAudio(msg.text)}
                                className="hover:text-purple-600 cursor-pointer p-0.5 rounded transition-colors"
                                title="Listen to this message"
                              >
                                <Volume2 className="h-3 w-3" />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            ) : activeTab === "Transcript" ? (
              <div className="flex-1 overflow-y-auto p-6 bg-slate-50/50">
                <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                    <span className="text-xs font-extrabold uppercase text-slate-500 tracking-wider">
                      Live Telephony & Speech Transcript
                    </span>
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      onClick={handleDownloadCallCsv}
                      className="text-xs h-7 gap-1"
                    >
                      <Download className="h-3 w-3" /> Export Text
                    </Button>
                  </div>
                  <div className="space-y-3 font-mono text-xs">
                    {voiceTranscript.map((msg, idx) => (
                      <div key={idx} className="pb-2 border-b border-slate-100 last:border-b-0">
                        <span className={`font-bold ${msg.sender === "user" ? "text-indigo-600" : "text-purple-600"}`}>
                          [{msg.sender === "user" ? "CUSTOMER" : "AI AGENT"}]
                        </span>{" "}
                        <span className="text-slate-700">{msg.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto p-6 bg-slate-50/50">
                <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
                  <h4 className="font-extrabold text-slate-900 text-sm">Customer & Qualification Attributes</h4>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Name</span>
                      <strong className="text-slate-800 text-sm">{activeCustomer?.name || "—"}</strong>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Phone</span>
                      <strong className="text-slate-800 text-sm font-mono">{activeCustomer?.phone || "—"}</strong>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Company</span>
                      <strong className="text-slate-800">{activeCustomer?.company || "—"}</strong>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Qualification Status</span>
                      <strong className="text-purple-600 font-bold uppercase">{qualificationStatus}</strong>
                    </div>
                  </div>

                  {Object.keys(collectedData).length > 0 && (
                    <div className="pt-3 border-t border-slate-100">
                      <span className="text-[11px] font-extrabold uppercase text-slate-500 block mb-2">
                        Captured Form & Script Data
                      </span>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {Object.entries(collectedData).map(([k, v]) => (
                          <div key={k} className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 flex justify-between">
                            <span className="capitalize text-slate-500 font-medium">{k}:</span>
                            <strong className="text-emerald-700 font-bold">{String(v)}</strong>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Bottom Input Area */}
            <div className="p-3.5 px-6 bg-white border-t border-slate-200 flex items-center gap-2.5 shrink-0">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={initiateListening}
                className={`rounded-full h-9 w-9 shrink-0 cursor-pointer ${
                  voiceStatus === "listening" ? "bg-purple-100 text-purple-600 animate-pulse" : "text-slate-500 hover:bg-slate-100"
                }`}
                title="Speak into microphone"
              >
                <Mic className="h-4 w-4" />
              </Button>

              <Input
                value={typedInputMessage}
                onChange={(e) => setTypedInputMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && typedInputMessage.trim()) {
                    const msg = typedInputMessage;
                    setTypedInputMessage("");
                    handleSendMessage(msg);
                  }
                }}
                placeholder={callTransfer.isWithHuman ? "Voice Agent speaking with customer..." : "Type customer reply or speak into mic..."}
                disabled={callTransfer.isWithHuman}
                className="text-xs h-9 rounded-xl border-slate-300 focus:border-purple-500"
              />

              <Button
                type="button"
                disabled={callTransfer.isWithHuman || !typedInputMessage.trim() || connectionState === "PROCESSING"}
                onClick={() => {
                  const msg = typedInputMessage;
                  setTypedInputMessage("");
                  handleSendMessage(msg);
                }}
                className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold h-9 px-4 rounded-xl cursor-pointer shadow-xs shrink-0 flex items-center gap-1.5"
              >
                <Send className="h-3.5 w-3.5" /> Send
              </Button>

              <Button
                type="button"
                disabled={isTransferring || callTransfer.isTransferring || callTransfer.isWithHuman}
                onClick={handleTalkToAgent}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs h-9 px-3.5 rounded-xl shrink-0 cursor-pointer shadow-xs flex items-center gap-1.5"
                title="Transfer live call to an available human voice agent"
              >
                <Headphones className="h-3.5 w-3.5" />
                {callTransfer.isWithHuman ? "Agent Connected" : (isTransferring || callTransfer.isTransferring) ? "Transferring..." : "Talk to Agent"}
              </Button>

              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="rounded-full h-8 w-8 text-slate-400 hover:text-slate-700 cursor-pointer shrink-0"
              >
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* BOTTOM ACTION & CAMPAIGN TELEMETRY BAR */}
        <div className="px-6 py-3 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          {/* Campaign Control Buttons */}
          <div className="flex items-center gap-2">
            <Button
              type="button"
              onClick={handleClose}
              className="bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs h-9 px-4 rounded-xl cursor-pointer shadow-xs flex items-center gap-1.5"
            >
              <Phone className="h-3.5 w-3.5 rotate-[135deg]" /> End Session
            </Button>
            <Button
              type="button"
              onClick={handleToggleAutoDial}
              disabled={dialingActionLoading}
              variant="outline"
              className="border-slate-300 hover:bg-purple-50 hover:border-purple-300 font-bold text-xs h-9 px-3.5 rounded-xl text-slate-700 cursor-pointer shadow-2xs flex items-center gap-1.5"
            >
              {dialingActionLoading ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : dialerStatus?.status === "RUNNING" ? (
                <>
                  <Pause className="h-3.5 w-3.5 text-amber-600" /> Pause Auto-Dial
                </>
              ) : (
                <>
                  <Sparkles className="h-3.5 w-3.5 text-purple-600" /> Auto-Dial ({dialerStatus?.ratio ? `1:${dialerStatus.ratio}` : "1:X"})
                </>
              )}
            </Button>
            <Button
              type="button"
              onClick={handleCallNextLead}
              disabled={dialingActionLoading}
              variant="outline"
              className="border-slate-300 hover:bg-slate-50 font-bold text-xs h-9 px-3.5 rounded-xl text-slate-700 cursor-pointer shadow-2xs flex items-center gap-1.5"
            >
              {dialingActionLoading ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin text-blue-600" />
              ) : (
                <PhoneCall className="h-3.5 w-3.5 text-blue-600" />
              )}
              Call Next Lead
            </Button>
          </div>

          {/* Live Campaign Statistics Cards */}
          <div className="flex items-center gap-2 bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200">
            <div className="px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-xl text-center min-w-[70px]">
              <p className="text-sm font-extrabold text-emerald-700 leading-tight">
                {dialerStatus?.active_calls ?? activeCalls.length}
              </p>
              <p className="text-[10px] font-bold text-emerald-800">Active Calls</p>
            </div>
            <div className="px-3 py-1 bg-sky-50 border border-sky-200 rounded-xl text-center min-w-[70px]">
              <p className="text-sm font-extrabold text-sky-700 leading-tight">
                {dialerStatus?.pending_leads ?? 0}
              </p>
              <p className="text-[10px] font-bold text-sky-800">Pending Leads</p>
            </div>
            <div className="px-3 py-1 bg-purple-50 border border-purple-200 rounded-xl text-center min-w-[70px]">
              <p className="text-sm font-extrabold text-purple-700 leading-tight">
                {dialerStatus?.completed_calls ?? 0}
              </p>
              <p className="text-[10px] font-bold text-purple-800">Completed</p>
            </div>
            <div className="px-3 py-1 bg-rose-50 border border-rose-200 rounded-xl text-center min-w-[70px]">
              <p className="text-sm font-extrabold text-rose-700 leading-tight">
                {dialerStatus?.failed_calls ?? 0}
              </p>
              <p className="text-[10px] font-bold text-rose-800">Failed</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => {
                if (selectedLeadId) startSession(selectedLeadId);
              }}
              className="border-slate-300 hover:bg-slate-50 font-bold text-xs h-9 px-3 rounded-xl text-slate-700 cursor-pointer shadow-2xs gap-1.5"
            >
              <PhoneCall className="h-3.5 w-3.5 text-indigo-600" /> Re-dial
            </Button>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={handleDownloadCallCsv}
              className="border-slate-300 hover:bg-slate-50 font-bold text-xs h-9 px-3 rounded-xl text-slate-700 cursor-pointer shadow-2xs gap-1.5"
            >
              <Download className="h-3.5 w-3.5 text-purple-600" /> Report
            </Button>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={handleDownloadAllLeadsCsv}
              className="border-slate-300 hover:bg-slate-50 font-bold text-xs h-9 px-3 rounded-xl text-slate-700 cursor-pointer shadow-2xs gap-1.5"
            >
              <FileText className="h-3.5 w-3.5 text-slate-500" /> All Leads
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

