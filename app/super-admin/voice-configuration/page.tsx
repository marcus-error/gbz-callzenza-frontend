"use client";

import React from "react";
import { VoiceConfigurationManager } from "@/components/voice/VoiceConfigurationManager";

export default function SuperAdminVoiceConfigurationPage() {
  return (
    <div className="p-6 md:p-8 space-y-6">
      <VoiceConfigurationManager
        title="Super Admin — Voice Configuration"
        subtitle="Manage global and tenant Text-to-Speech (TTS) engine integrations across ElevenLabs, Murf AI, and SnapServe."
        isSuperAdminView={true}
      />
    </div>
  );
}
