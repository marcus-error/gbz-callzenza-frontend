"use client";

import React from "react";
import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { ArrowLeft } from "lucide-react";
import { VoiceConfigurationManager } from "@/components/voice/VoiceConfigurationManager";

export default function TextToSpeechPage() {
  return (
    <AppShell>
      <div className="p-6 md:p-8 space-y-6">
        <Link
          href="/admin"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors bg-white border border-slate-200 px-4 py-2 rounded-xl hover:shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Administration</span>
        </Link>

        <VoiceConfigurationManager
          title="Organization Voice Configuration"
          subtitle="Configure and fine-tune ElevenLabs, Murf AI, and SnapServe TTS models for your campaigns."
          isSuperAdminView={false}
        />
      </div>
    </AppShell>
  );
}
