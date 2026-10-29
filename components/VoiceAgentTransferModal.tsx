"use client";

import { VoiceAgent } from "@/lib/services/voice-agent.service";
import { AddVoiceAgentModal } from "@/components/AddVoiceAgentModal";

interface VoiceAgentTransferModalProps {
  isOpen: boolean;
  onClose: () => void;
  callId?: string;
  clientId?: string;
  leadId?: string;
  onTransferSuccess?: (targetAgent: VoiceAgent, transferType: "warm" | "cold") => void;
}

/**
 * Backward compatibility wrapper:
 * Redirects legacy VoiceAgentTransferModal usages to the new multi-party AddVoiceAgentModal conference manager.
 */
export function VoiceAgentTransferModal({
  isOpen,
  onClose,
  callId,
  clientId,
  leadId,
  onTransferSuccess,
}: VoiceAgentTransferModalProps) {
  return (
    <AddVoiceAgentModal
      isOpen={isOpen}
      onClose={onClose}
      callId={callId}
      clientId={clientId}
      leadId={leadId}
      onAgentAdded={(agent) => {
        if (onTransferSuccess) {
          onTransferSuccess(agent, "warm");
        }
      }}
    />
  );
}

export { AddVoiceAgentModal };
