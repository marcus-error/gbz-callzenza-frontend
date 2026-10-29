"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { callTransferService, TransferInitiateParams } from "@/lib/services/callTransferService";

export type TransferUIStatus =
  | "IDLE"
  | "INTENT_DETECTED"
  | "RINGING"
  | "CONNECTED_WITH_HUMAN"
  | "FALLBACK_AI"
  | "FAILED";

export interface UseCallTransferProps {
  callId?: string;
  campaignId?: string;
  leadId?: string;
  customerName?: string;
  customerPhone?: string;
  onHumanConnected?: (agentName: string) => void;
  onAiResume?: (reason: string) => void;
}

export function useCallTransfer({
  callId,
  campaignId,
  leadId,
  customerName,
  customerPhone,
  onHumanConnected,
  onAiResume,
}: UseCallTransferProps = {}) {
  const [status, setStatus] = useState<TransferUIStatus>("IDLE");
  const [assignedAgentName, setAssignedAgentName] = useState<string | null>(null);
  const [transferId, setTransferId] = useState<string | null>(null);
  const [countdown, setCountdown] = useState<number>(20);
  const [humanCallTimer, setHumanCallTimer] = useState<number>(0);
  const [statusMessage, setStatusMessage] = useState<string>("");

  const countdownIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const humanTimerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Clear timers on unmount
  useEffect(() => {
    return () => {
      if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
      if (humanTimerIntervalRef.current) clearInterval(humanTimerIntervalRef.current);
    };
  }, []);

  // Handle countdown during RINGING
  useEffect(() => {
    if (status === "RINGING") {
      setCountdown(20);
      countdownIntervalRef.current = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(countdownIntervalRef.current!);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
    }
  }, [status]);

  // Handle live call timer when CONNECTED_WITH_HUMAN
  useEffect(() => {
    if (status === "CONNECTED_WITH_HUMAN") {
      setHumanCallTimer(0);
      humanTimerIntervalRef.current = setInterval(() => {
        setHumanCallTimer((prev) => prev + 1);
      }, 1000);
    } else {
      if (humanTimerIntervalRef.current) clearInterval(humanTimerIntervalRef.current);
    }
  }, [status]);

  // WebSocket event listener
  useEffect(() => {
    const handleWsEvent = (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data);
        const eventType = data.event || data.type;

        // Match event for this call
        if (data.call_id && callId && data.call_id !== callId) return;

        if (eventType === "transfer.requested" || eventType === "transfer.ringing") {
          setStatus("RINGING");
          setAssignedAgentName(data.target_agent_name || "Voice Specialist");
          setTransferId(data.transfer_id || null);
          setStatusMessage(`Transferring to Voice Agent... (Ringing ${data.target_agent_name || "Specialist"})`);
        } else if (eventType === "transfer.accepted") {
          setStatus("CONNECTED_WITH_HUMAN");
          const agentName = data.agent_name || assignedAgentName || "Voice Agent";
          setAssignedAgentName(agentName);
          setStatusMessage(`Voice Agent ${agentName} accepted. AI agent disconnected.`);
          if (onHumanConnected) onHumanConnected(agentName);
        } else if (eventType === "ai.disconnected") {
          // AI audio leg disconnected
        } else if (eventType === "transfer.declined") {
          setStatusMessage("Agent was unavailable. Finding next specialist...");
        } else if (eventType === "transfer.failed" || eventType === "transfer.fallback") {
          setStatus("FALLBACK_AI");
          setStatusMessage("No agent available right now. AI agent continuing conversation.");
          if (onAiResume) onAiResume(data.reason || "NO_AGENTS");
        } else if (eventType === "transfer.completed") {
          setStatus("IDLE");
          setHumanCallTimer(0);
        }
      } catch (_) {}
    };

    window.addEventListener("message", handleWsEvent);
    return () => window.removeEventListener("message", handleWsEvent);
  }, [callId, assignedAgentName, onHumanConnected, onAiResume]);

  const initiate = useCallback(
    async (params?: Partial<TransferInitiateParams>) => {
      if (!callId) return;
      setStatus("RINGING");
      setStatusMessage("Finding available Voice Agent...");

      try {
        const res = await callTransferService.initiateTransfer({
          call_id: callId,
          campaign_id: campaignId,
          lead_id: leadId,
          customer_name: customerName,
          customer_phone: customerPhone,
          ...params,
        });

        setTransferId(res.transfer_id);

        if (res.is_fallback) {
          setStatus("FALLBACK_AI");
          setStatusMessage(res.message);
          if (onAiResume) onAiResume("NO_AGENTS");
        } else {
          setAssignedAgentName(res.assigned_agent_name || "Specialist");
          setStatusMessage(res.message);
        }
      } catch (err: any) {
        setStatus("FALLBACK_AI");
        setStatusMessage("Transfer request unavailable, AI continuing.");
        if (onAiResume) onAiResume("ERROR");
      }
    },
    [callId, campaignId, leadId, customerName, customerPhone, onAiResume]
  );

  const reset = useCallback(() => {
    setStatus("IDLE");
    setAssignedAgentName(null);
    setTransferId(null);
    setCountdown(20);
    setHumanCallTimer(0);
    setStatusMessage("");
  }, []);

  return {
    status,
    isTransferring: status === "RINGING",
    isWithHuman: status === "CONNECTED_WITH_HUMAN",
    assignedAgentName,
    countdown,
    humanCallTimer,
    statusMessage,
    initiate,
    reset,
  };
}
