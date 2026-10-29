"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Agent } from "@/lib/services/agent.service";
import { Expert as HumanExpert } from "@/lib/services/expert.service";
import { LeadGroup } from "@/lib/services/lead-group.service";
import { CampaignVoiceConfig } from "@/lib/services/campaign.service";
import { Eye } from "lucide-react";

interface ReviewStepProps {
  name: string;
  description: string;
  objective: string;
  customObjective: string;
  customScript: string;
  clientName?: string;
  clientPhone?: string;
  callingAgentMode: "AI" | "VOICE";
  agentId: string;
  agents: Agent[];
  voiceAgentId: string;
  voiceAgents: HumanExpert[];
  agentGender: string;
  leadSelectionMode: "ALL" | "LIBRARY" | "MANUAL";
  targetLeadsCount: number;
  libraryId: string;
  leadLibraries: LeadGroup[];
  defaultLanguage: string;
  callingMode: string;
  twilioNumber: string;
  sipAccountId?: string;
  callingHours: string;
  timezone: string;
  maxAttempts: string;
  retryDelay: string;
  concurrency: string;
  autoDialRatio?: string;
  voiceConfig?: CampaignVoiceConfig;
  onGotoStep?: (step: number) => void;
}

export function ReviewStep({
  name,
  description,
  objective,
  customObjective,
  customScript,
  clientName,
  clientPhone,
  callingAgentMode,
  agentId,
  agents,
  voiceAgentId,
  voiceAgents,
  agentGender,
  leadSelectionMode,
  targetLeadsCount,
  libraryId,
  leadLibraries,
  defaultLanguage,
  callingMode,
  twilioNumber,
  sipAccountId,
  callingHours,
  timezone,
  maxAttempts,
  retryDelay,
  concurrency,
  autoDialRatio = "1:1",
  voiceConfig,
  onGotoStep,
}: ReviewStepProps) {
  const selectedAgent = agents.find((a) => a.id === agentId);
  const selectedVoiceAgentIds = voiceAgentId ? voiceAgentId.split(",").filter(Boolean) : [];
  const selectedVoiceAgents = voiceAgents.filter((e) => selectedVoiceAgentIds.includes(e.id));
  const voiceAgentNames = selectedVoiceAgents.length > 0
    ? selectedVoiceAgents.map((e) => e.name).join(", ")
    : (selectedVoiceAgentIds.length > 0 ? `${selectedVoiceAgentIds.length} Voice Agents Selected` : "None selected");
  const selectedLibrary = leadLibraries.find((g) => g.id === libraryId);

  const langNames: Record<string, string> = {
    auto: "Auto Detect",
    en: "English",
    ta: "Tamil",
    te: "Telugu",
    ml: "Malayalam",
    kn: "Kannada",
    hi: "Hindi",
    bn: "Bengali",
    mr: "Marathi",
    gu: "Gujarati",
    pa: "Punjabi",
    ur: "Urdu",
    or: "Odia",
  };

  return (
    <Card className="p-6 space-y-6 shadow-sm border-gray-200/80 rounded-2xl animate-in fade-in slide-in-from-bottom-2 duration-200">
      <div className="flex items-center justify-between border-b pb-4 border-gray-100">
        <div>
          <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <Eye className="h-5 w-5 text-indigo-500" /> Step 6: Review & Edit Campaign Details
          </h3>
          <p className="text-xs text-gray-400 mt-1">Review your configuration. Click "Edit" on any section below to change parameters.</p>
        </div>
      </div>

      {/* Basic Info Section */}
      <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-100 space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">1. Basic Information & Client</h4>
          {onGotoStep && (
            <button
              type="button"
              onClick={() => onGotoStep(1)}
              className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 hover:underline cursor-pointer"
            >
              ✏️ Edit Basic Info
            </button>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-xs text-gray-400 block font-semibold">Campaign Name</span>
            <span className="font-bold text-gray-800">{name || "—"}</span>
          </div>
          <div>
            <span className="text-xs text-indigo-600 block font-semibold">Target Client</span>
            <span className="font-bold text-indigo-900">{clientName || "—"} {clientPhone ? `(${clientPhone})` : ""}</span>
          </div>
          <div>
            <span className="text-xs text-gray-400 block font-semibold">Objective</span>
            <span className="font-semibold text-gray-700">{objective === "Custom" ? customObjective : (objective || "Not specified")}</span>
          </div>
          <div>
            <span className="text-xs text-gray-400 block font-semibold">Regional Language</span>
            <span className="font-bold text-gray-800">{langNames[defaultLanguage] || "Auto Detect"}</span>
          </div>
          <div className="col-span-2">
            <span className="text-xs text-gray-400 block font-semibold">Description</span>
            <span className="text-gray-600">{description || "No description provided"}</span>
          </div>
        </div>
      </div>

      {/* Script Section */}
      <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-100 space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">2. Campaign Script</h4>
          {onGotoStep && (
            <button
              type="button"
              onClick={() => onGotoStep(2)}
              className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 hover:underline cursor-pointer"
            >
              ✏️ Edit Script
            </button>
          )}
        </div>
        <div className="bg-white p-3 rounded-lg border border-gray-150 font-mono text-xs text-gray-700 max-h-32 overflow-y-auto leading-relaxed">
          {customScript || "No script entered"}
        </div>
      </div>

      {/* Agent Section */}
      <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-100 space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">3. Agent Selection & Mode</h4>
          {onGotoStep && (
            <button
              type="button"
              onClick={() => onGotoStep(3)}
              className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 hover:underline cursor-pointer"
            >
              ✏️ Edit Agent
            </button>
          )}
        </div>
        <div className="text-sm">
          {callingAgentMode === "AI" ? (
            <div className="space-y-1.5">
              <span className="font-bold text-indigo-600 block">
                AI Agent: {selectedAgent ? selectedAgent.name : "None selected"}
              </span>
              {voiceConfig && (
                <div className="mt-3 p-3.5 bg-white rounded-xl border border-slate-200/80 shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                      🎙️ Voice & Speech Engine
                    </span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                      {voiceConfig.provider ? voiceConfig.provider.toUpperCase().replace("_", " ") : "MURF AI"}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs pt-1 border-t border-slate-100">
                    <div>
                      <span className="text-slate-400 block text-[10px] font-semibold uppercase">Voice ID</span>
                      <span className="font-bold text-slate-800 truncate block">
                        {voiceConfig.voice_id || voiceConfig.fish_audio?.reference_id || "Default Voice"}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] font-semibold uppercase">TTS Model</span>
                      <span className="font-bold text-slate-800 truncate block">
                        {voiceConfig.model_id || "Standard"}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] font-semibold uppercase">Language</span>
                      <span className="font-bold text-slate-800 truncate block">
                        {voiceConfig.language || defaultLanguage || "en-US"}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] font-semibold uppercase">Credential</span>
                      <span className="font-bold text-emerald-600 truncate block">
                        {voiceConfig.credential_source === "saved_credential"
                          ? "Saved Credential"
                          : voiceConfig.credential_source === "custom_key"
                          ? "Encrypted Custom Key"
                          : "Default Route"}
                      </span>
                    </div>
                  </div>
                </div>
              )}
              <span className="text-xs text-gray-400 font-medium block pt-1">
                Gender: <span className="capitalize text-gray-600 font-bold">{agentGender}</span>
                {selectedVoiceAgentIds.length > 0 && ` • Backup Human: ${voiceAgentNames}`}
              </span>
            </div>
          ) : (
            <div>
              <span className="font-bold text-emerald-600 block">
                Direct Voice Agent(s): {voiceAgentNames}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Leads Section */}
      <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-100 space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">4. Target Leads</h4>
          {onGotoStep && (
            <button
              type="button"
              onClick={() => onGotoStep(4)}
              className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 hover:underline cursor-pointer"
            >
              ✏️ Edit Leads
            </button>
          )}
        </div>
        <div className="text-sm">
          <span className="font-bold text-emerald-600">
            {leadSelectionMode === "ALL" && `All Created Leads (${targetLeadsCount} Leads)`}
            {leadSelectionMode === "LIBRARY" && `${selectedLibrary?.filename || "Lead Library"} (${targetLeadsCount} Leads)`}
            {leadSelectionMode === "MANUAL" && `Manually Selected (${targetLeadsCount} Leads)`}
          </span>
        </div>
      </div>

      {/* Calling Config Section */}
      <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-100 space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">5. Calling Configuration</h4>
          {onGotoStep && (
            <button
              type="button"
              onClick={() => onGotoStep(5)}
              className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 hover:underline cursor-pointer"
            >
              ✏️ Edit Config
            </button>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-xs text-gray-400 block font-semibold uppercase">Calling Mode</span>
            <span className="font-bold text-indigo-700">
              {callingMode?.toLowerCase() === "sip"
                ? "SIP Carrier"
                : callingMode?.toLowerCase() === "local"
                ? "Local Test Mode"
                : "Twilio Outbound"}
            </span>
          </div>
          {callingMode?.toLowerCase() === "sip" && (
            <div>
              <span className="text-xs text-gray-400 block font-semibold uppercase">Assigned SIP Account</span>
              <span className="font-bold text-emerald-700 flex items-center gap-1">
                ● {sipAccountId ? "Assigned (ID: " + sipAccountId.slice(0, 8) + "...)" : "Default Route"}
              </span>
            </div>
          )}
          <div>
            <span className="text-xs text-gray-400 block font-semibold uppercase">Caller ID</span>
            <span className="font-mono font-bold text-gray-800">
              {callingMode === "local" ? "LOCAL_TEST (Simulated)" : (twilioNumber || "Default")}
            </span>
          </div>
          <div>
            <span className="text-xs text-gray-400 block font-semibold uppercase">Allowed Hours / Timezone</span>
            <span className="font-semibold text-gray-700">
              {callingHours} ({timezone})
            </span>
          </div>
          <div>
            <span className="text-xs text-gray-400 block font-semibold uppercase">Max Attempts / Delay</span>
            <span className="font-semibold text-gray-700">
              {maxAttempts} attempts / {retryDelay} mins
            </span>
          </div>
          <div>
            <span className="text-xs text-gray-400 block font-semibold uppercase">Auto Dial Ratio</span>
            <span className="font-bold text-violet-700">
              {autoDialRatio} (up to {autoDialRatio.replace(/^[0-9]+:/, "").replace(/:[0-9]+$/, "") || autoDialRatio.replace("1:", "")} concurrent outbound calls)
            </span>
          </div>
          <div>
            <span className="text-xs text-gray-400 block font-semibold uppercase">Concurrency Channel Limit</span>
            <span className="font-bold text-gray-800">{concurrency} Parallel channel(s)</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
