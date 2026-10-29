"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  campaignService,
  CampaignVoiceConfig,
  VoiceProviderMeta,
  SavedCredentialMeta,
} from "@/lib/services/campaign.service";
import {
  voiceConfigService,
  VoiceConfigItem,
} from "@/lib/services/voice-config.service";
import {
  Volume2,
  Key,
  Play,
  Square,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Link as LinkIcon,
  Layers,
} from "lucide-react";

interface CampaignVoiceConfigCardProps {
  voiceConfig: CampaignVoiceConfig;
  onChange: (config: CampaignVoiceConfig) => void;
  defaultLanguage?: string;
}

const FALLBACK_PROVIDERS: VoiceProviderMeta[] = [
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    description: "High-fidelity multilingual neural voices with fine-grained prosody control.",
    default_model: "eleven_multilingual_v2",
    models: [
      { id: "eleven_multilingual_v2", name: "Eleven Multilingual v2" },
      { id: "eleven_turbo_v2_5", name: "Eleven Turbo v2.5" },
    ],
    default_voice: "EXAVITQu4vr4xnSDxMaL",
    voices: [
      { id: "EXAVITQu4vr4xnSDxMaL", name: "Bella (Expressive Female)", gender: "Female", locale: "en-US" },
      { id: "21m00Tcm4TlvDq8ikWAM", name: "Rachel (Calm Female)", gender: "Female", locale: "en-US" },
      { id: "AZnzlk1XvdvUeBnXmlld", name: "Domi (Strong Female)", gender: "Female", locale: "en-US" },
      { id: "ErXwobaYiN019PkySvjV", name: "Antoni (Well-rounded Male)", gender: "Male", locale: "en-US" },
    ],
    supported_parameters: ["voice_id", "model_id", "voice_link"],
    has_env_fallback: false,
  },
  {
    id: "murf",
    name: "Murf AI",
    description: "Ultra low-latency conversational speech synthesis with Falcon streaming.",
    default_model: "Falcon",
    models: [
      { id: "Falcon", name: "Murf Falcon (Streaming)", sample_rate: 8000 },
      { id: "GEN2", name: "Murf Gen 2", sample_rate: 8000 },
    ],
    default_voice: "Joshua",
    voices: [
      { id: "Joshua", name: "Joshua (Professional Male)", gender: "Male", locale: "en-US" },
      { id: "Pooja", name: "Pooja (Indian English / Conversational Female)", gender: "Female", locale: "en-IN" },
      { id: "Marcus", name: "Marcus (Authoritative Male)", gender: "Male", locale: "en-US" },
      { id: "Natalie", name: "Natalie (Friendly Female)", gender: "Female", locale: "en-US" },
    ],
    supported_parameters: ["voice_id", "model"],
    has_env_fallback: false,
  },
  {
    id: "fish_audio",
    name: "Fish Audio",
    description: "Cutting-edge voice cloning and synthesis via Fish Audio API.",
    default_model: "speech-1.5",
    models: [{ id: "speech-1.5", name: "Fish Speech 1.5" }],
    default_voice: "",
    voices: [
      { id: "", name: "Default Voice Model", gender: "Neutral", locale: "multi" },
    ],
    supported_parameters: ["voice_id", "model"],
    has_env_fallback: false,
  },
];

export function CampaignVoiceConfigCard({
  voiceConfig,
  onChange,
  defaultLanguage = "en",
}: CampaignVoiceConfigCardProps) {
  const [providers, setProviders] = useState<VoiceProviderMeta[]>(FALLBACK_PROVIDERS);
  const [savedConfigs, setSavedConfigs] = useState<VoiceConfigItem[]>([]);
  const [voices, setVoices] = useState<Array<{ id: string; name: string; gender?: string; locale?: string }>>([]);
  const [loadingConfigs, setLoadingConfigs] = useState<boolean>(false);
  const [loadingVoices, setLoadingVoices] = useState<boolean>(false);
  const [manualVoiceIdMode, setManualVoiceIdMode] = useState<boolean>(false);

  // Audio Preview State
  const [previewText, setPreviewText] = useState<string>(
    "Hello! This is a live voice preview for your campaign. How can I assist you today?"
  );
  const [previewLoading, setPreviewLoading] = useState<boolean>(false);
  const [previewPlaying, setPreviewPlaying] = useState<boolean>(false);
  const [previewError, setPreviewError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const activeProvider = (voiceConfig.provider || "elevenlabs") as "elevenlabs" | "murf" | "fish_audio";

  // Load saved configurations when provider changes
  useEffect(() => {
    let isMounted = true;
    setLoadingConfigs(true);

    voiceConfigService
      .getVoiceConfigs({ provider: activeProvider, is_active: true })
      .then((configs) => {
        if (!isMounted) return;
        setSavedConfigs(configs || []);
        setLoadingConfigs(false);

        // If no credential_id is currently selected, auto-bind the first active saved configuration
        if (configs && configs.length > 0 && !voiceConfig.credential_id) {
          const first = configs[0];
          onChange({
            ...voiceConfig,
            provider: activeProvider,
            credential_id: first.id,
            credential_source: "saved_credential",
            voice_id: voiceConfig.voice_id || first.voice_id || (activeProvider === "murf" ? "Joshua" : first.voice_id || ""),
            model_id: voiceConfig.model_id || first.model_id || (activeProvider === "murf" ? "Falcon" : activeProvider === "fish_audio" ? "speech-1.5" : "eleven_multilingual_v2"),
            voice_link: voiceConfig.voice_link || first.voice_link || first.voice_url || "",
            is_active: true,
          });
        }
      })
      .catch((err) => {
        console.warn("Failed to load saved voice configurations:", err);
        if (isMounted) setLoadingConfigs(false);
      });

    return () => {
      isMounted = false;
    };
  }, [activeProvider]);

  // Load provider catalog and dynamic voices
  useEffect(() => {
    let isMounted = true;
    campaignService
      .getVoiceProviders()
      .then((data) => {
        if (!isMounted) return;
        if (data.providers && data.providers.length > 0) {
          setProviders(data.providers);
        }
      })
      .catch((err) => {
        console.warn("Failed to load providers (using defaults):", err);
      });

    return () => {
      isMounted = false;
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Update dynamic voices when provider or credential changes
  useEffect(() => {
    if (!activeProvider) return;
    setLoadingVoices(true);

    campaignService
      .getProviderVoices(activeProvider)
      .then((data) => {
        setVoices(data.voices || []);
        setLoadingVoices(false);
      })
      .catch(() => {
        const found = providers.find((p) => p.id === activeProvider);
        setVoices(found?.voices || []);
        setLoadingVoices(false);
      });
  }, [activeProvider, voiceConfig.credential_id]);

  // Provider Change Handler
  const handleProviderChange = (newProvider: "elevenlabs" | "murf" | "fish_audio") => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPreviewPlaying(false);
    }

    let defaultVoice = "";
    let defaultModel = "";
    let defaultLink = "";

    if (newProvider === "murf") {
      defaultVoice = "Joshua";
      defaultModel = "Falcon";
    } else if (newProvider === "elevenlabs") {
      defaultVoice = "21m00Tcm4TlvDq8ikWAM";
      defaultModel = "eleven_multilingual_v2";
      defaultLink = "";
    } else if (newProvider === "fish_audio") {
      defaultVoice = "7f92f8afb8ec43bf81429cc1c9199cb1";
      defaultModel = "speech-1.5";
    }

    onChange({
      ...voiceConfig,
      provider: newProvider,
      voice_id: defaultVoice,
      model_id: defaultModel,
      voice_link: defaultLink,
      credential_id: null,
      credential_source: "saved_credential",
      is_active: true,
    });
  };

  // Saved Config Selection Handler
  const handleSelectSavedConfig = (cfgId: string) => {
    const selected = savedConfigs.find((c) => c.id === cfgId);
    if (!selected) {
      onChange({
        ...voiceConfig,
        credential_id: null,
      });
      return;
    }

    onChange({
      ...voiceConfig,
      credential_id: selected.id,
      credential_source: "saved_credential",
      voice_id: selected.voice_id || voiceConfig.voice_id,
      model_id: selected.model_id || voiceConfig.model_id,
      voice_link: selected.voice_link || selected.voice_url || voiceConfig.voice_link,
      has_credential: true,
    });
  };

  // Preview Voice Audio
  const handlePreviewAudio = async () => {
    if (previewPlaying && audioRef.current) {
      audioRef.current.pause();
      setPreviewPlaying(false);
      return;
    }

    setPreviewLoading(true);
    setPreviewError(null);

    try {
      const audioBlob = await campaignService.previewVoiceAudio({
        text: previewText,
        voice_config: voiceConfig,
      });

      if (!audioBlob || audioBlob.size === 0) {
        throw new Error("Received empty audio response from voice service.");
      }

      const audioUrl = URL.createObjectURL(audioBlob);
      if (audioRef.current) {
        audioRef.current.pause();
      }

      const audio = new Audio(audioUrl);
      audioRef.current = audio;

      audio.onplay = () => setPreviewPlaying(true);
      audio.onended = () => setPreviewPlaying(false);
      audio.onerror = () => {
        setPreviewPlaying(false);
        setPreviewError("Failed to play audio sample.");
      };

      await audio.play();
    } catch (err: any) {
      console.error("Voice preview error:", err);
      setPreviewError(err.message || "Failed to preview audio. Check credentials or provider configuration.");
    } finally {
      setPreviewLoading(false);
    }
  };

  return (
    <div className="space-y-5 rounded-2xl border border-indigo-100 bg-gradient-to-b from-indigo-50/30 to-white p-5 shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-indigo-100 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm">
            <Volume2 className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-900">Campaign AI Voice Configuration</h4>
            <p className="text-xs text-gray-500">
              Select an authorized voice provider and assign its configured voice model
            </p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
          <Sparkles className="h-3.5 w-3.5" />
          Campaign-Isolated
        </span>
      </div>

      {/* Voice Provider Dropdown */}
      <div className="space-y-1.5">
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
          Voice Provider *
        </label>
        <select
          value={activeProvider}
          onChange={(e) => handleProviderChange(e.target.value as any)}
          className="w-full h-11 px-3.5 rounded-xl border border-gray-300 bg-white text-sm font-bold text-gray-900 cursor-pointer shadow-xs focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
        >
          <option value="elevenlabs">ElevenLabs</option>
          <option value="murf">Murf AI</option>
          <option value="fish_audio">Fish Audio</option>
        </select>
        <p className="text-[11px] text-gray-500">
          Choose from ElevenLabs, Murf AI, or Fish Audio to generate speech for this campaign.
        </p>
      </div>

      {/* Saved Configurations Selector */}
      <div className="rounded-xl border border-gray-200 bg-white p-4 space-y-3 shadow-xs">
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-700">
            <Key className="h-3.5 w-3.5 text-indigo-600" />
            Saved Provider Configuration
          </label>
          <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3" /> Encrypted Credentials Protected
          </span>
        </div>

        {loadingConfigs ? (
          <div className="py-2 text-center text-xs text-gray-500 flex items-center justify-center gap-2">
            <Loader2 className="w-3.5 h-3.5 animate-spin text-indigo-600" />
            <span>Loading saved configurations...</span>
          </div>
        ) : savedConfigs.length > 0 ? (
          <div>
            <select
              value={voiceConfig.credential_id || ""}
              onChange={(e) => handleSelectSavedConfig(e.target.value)}
              className="w-full h-10 px-3 rounded-lg border border-gray-300 bg-white text-xs font-semibold text-gray-800 cursor-pointer"
            >
              <option value="">Select a saved configuration...</option>
              {savedConfigs.map((cfg) => (
                <option key={cfg.id} value={cfg.id}>
                  {cfg.name} (Key: {cfg.masked_api_key || "••••••••"})
                </option>
              ))}
            </select>
            <p className="mt-1 text-[11px] text-gray-500">
              Loaded directly from your securely configured Super Admin / Organization Voice settings.
            </p>
          </div>
        ) : (
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-2.5 text-xs text-amber-800 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <span>
              No saved configurations found for {activeProvider === "elevenlabs" ? "ElevenLabs" : activeProvider === "murf" ? "Murf AI" : "Fish Audio"}. Configure one in Voice Configuration or system defaults will be used.
            </span>
          </div>
        )}
      </div>

      {/* Provider-Specific Settings Display */}

      {/* 1. ELEVENLABS SPECIFIC FIELDS (Voice ID, Voice Link) */}
      {activeProvider === "elevenlabs" && (
        <div className="rounded-xl border border-blue-200 bg-blue-50/40 p-4 space-y-4">
          <div className="flex items-center justify-between border-b border-blue-200/60 pb-2">
            <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">
              ElevenLabs Settings
            </span>
            <span className="text-[10px] font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
              Neural Speech
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Voice ID */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold text-gray-700">
                  Voice ID *
                </label>
                <button
                  type="button"
                  onClick={() => setManualVoiceIdMode(!manualVoiceIdMode)}
                  className="text-[11px] font-semibold text-blue-700 hover:text-blue-900 underline cursor-pointer"
                >
                  {manualVoiceIdMode ? "📋 Pick from Presets" : "✏️ Enter Manually"}
                </button>
              </div>
              {!manualVoiceIdMode && voices.length > 0 ? (
                <select
                  value={voiceConfig.voice_id || "21m00Tcm4TlvDq8ikWAM"}
                  onChange={(e) => {
                    if (e.target.value === "__manual__") {
                      setManualVoiceIdMode(true);
                    } else {
                      onChange({
                        ...voiceConfig,
                        voice_id: e.target.value,
                        elevenlabs: { ...(voiceConfig.elevenlabs || {}), voice_id: e.target.value },
                      });
                    }
                  }}
                  className="w-full h-10 px-3 rounded-lg border border-gray-300 bg-white text-xs font-semibold cursor-pointer"
                >
                  {voiceConfig.voice_id && !voices.some((v) => v.id === voiceConfig.voice_id) && (
                    <option value={voiceConfig.voice_id}>Current: {voiceConfig.voice_id}</option>
                  )}
                  {voices.map((v) => (
                    <option key={v.id} value={v.id}>
                      {v.name}
                    </option>
                  ))}
                  <option value="__manual__">✏️ Enter Custom / Manual Voice ID...</option>
                </select>
              ) : (
                <div className="space-y-1">
                  <input
                    type="text"
                    value={voiceConfig.voice_id || ""}
                    onChange={(e) =>
                      onChange({
                        ...voiceConfig,
                        voice_id: e.target.value,
                        elevenlabs: { ...(voiceConfig.elevenlabs || {}), voice_id: e.target.value },
                      })
                    }
                    placeholder="e.g. 21m00Tcm4TlvDq8ikWAM or custom voice ID"
                    className="w-full h-10 px-3 rounded-lg border border-gray-300 bg-white text-xs font-mono"
                  />
                  <p className="text-[10px] text-gray-500">
                    Manual Voice ID mode active. Paste your custom or cloned ElevenLabs voice ID.
                  </p>
                </div>
              )}
            </div>

            {/* Voice Link */}
            <div>
              <label className="mb-1 block text-xs font-bold text-gray-700 flex items-center gap-1">
                <LinkIcon className="w-3.5 h-3.5 text-blue-600" />
                Voice Link
              </label>
              <input
                type="text"
                value={voiceConfig.voice_link || ""}
                onChange={(e) =>
                  onChange({
                    ...voiceConfig,
                    voice_link: e.target.value,
                    elevenlabs: { ...(voiceConfig.elevenlabs || {}), voice_link: e.target.value },
                  })
                }
                placeholder="https://api.elevenlabs.io/v1"
                className="w-full h-10 px-3 rounded-lg border border-gray-300 bg-white text-xs font-mono"
              />
            </div>
          </div>
        </div>
      )}

      {/* 2. MURF AI SPECIFIC FIELDS (Voice ID: Joshua, Model: Falcon) */}
      {activeProvider === "murf" && (
        <div className="rounded-xl border border-purple-200 bg-purple-50/40 p-4 space-y-4">
          <div className="flex items-center justify-between border-b border-purple-200/60 pb-2">
            <span className="text-xs font-bold text-purple-900 uppercase tracking-wider">
              Murf AI Settings
            </span>
            <span className="text-[10px] font-semibold bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">
              Falcon Low-Latency
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Voice ID (Default: Joshua) */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold text-gray-700">
                  Voice ID * (Default: Joshua)
                </label>
                <button
                  type="button"
                  onClick={() => setManualVoiceIdMode(!manualVoiceIdMode)}
                  className="text-[11px] font-semibold text-purple-700 hover:text-purple-900 underline cursor-pointer"
                >
                  {manualVoiceIdMode ? "📋 Pick from Presets" : "✏️ Enter Manually"}
                </button>
              </div>
              {!manualVoiceIdMode && voices.length > 0 ? (
                <select
                  value={voiceConfig.voice_id || "Joshua"}
                  onChange={(e) => {
                    if (e.target.value === "__manual__") {
                      setManualVoiceIdMode(true);
                    } else {
                      onChange({
                        ...voiceConfig,
                        voice_id: e.target.value,
                        murf: { ...(voiceConfig.murf || {}), voice_id: e.target.value },
                      });
                    }
                  }}
                  className="w-full h-10 px-3 rounded-lg border border-gray-300 bg-white text-xs font-semibold cursor-pointer"
                >
                  {voiceConfig.voice_id && !voices.some((v) => v.id === voiceConfig.voice_id) && (
                    <option value={voiceConfig.voice_id}>Current: {voiceConfig.voice_id}</option>
                  )}
                  {voices.map((v) => (
                    <option key={v.id} value={v.id}>
                      {v.name}
                    </option>
                  ))}
                  <option value="__manual__">✏️ Enter Custom / Manual Voice ID...</option>
                </select>
              ) : (
                <div className="space-y-1">
                  <input
                    type="text"
                    value={voiceConfig.voice_id || ""}
                    onChange={(e) =>
                      onChange({
                        ...voiceConfig,
                        voice_id: e.target.value,
                        murf: { ...(voiceConfig.murf || {}), voice_id: e.target.value },
                      })
                    }
                    placeholder="e.g. Joshua or custom Murf voice ID"
                    className="w-full h-10 px-3 rounded-lg border border-gray-300 bg-white text-xs font-mono"
                  />
                  <p className="text-[10px] text-gray-500">
                    Manual Voice ID mode active. Paste your custom Murf voice ID.
                  </p>
                </div>
              )}
            </div>

            {/* Model (Default: Falcon) */}
            <div>
              <label className="mb-1 block text-xs font-bold text-gray-700">
                Model * (Default: Falcon)
              </label>
              <input
                type="text"
                value={voiceConfig.model_id || "Falcon"}
                onChange={(e) =>
                  onChange({
                    ...voiceConfig,
                    model_id: e.target.value,
                    murf: { ...(voiceConfig.murf || {}), model: e.target.value },
                  })
                }
                placeholder="Falcon"
                className="w-full h-10 px-3 rounded-lg border border-gray-300 bg-white text-xs font-semibold"
              />
            </div>
          </div>
        </div>
      )}

      {/* 3. FISH AUDIO SPECIFIC FIELDS (Voice ID, Model: speech-1.5) */}
      {activeProvider === "fish_audio" && (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-4 space-y-4">
          <div className="flex items-center justify-between border-b border-emerald-200/60 pb-2">
            <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
              Fish Audio Settings
            </span>
            <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
              Reference Cloning
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Voice ID */}
            <div>
              <label className="mb-1 block text-xs font-bold text-gray-700">
                Voice ID / Reference Identifier *
              </label>
              <input
                type="text"
                value={voiceConfig.voice_id || ""}
                onChange={(e) =>
                  onChange({
                    ...voiceConfig,
                    voice_id: e.target.value,
                    fish_audio: { ...(voiceConfig.fish_audio || {}), reference_id: e.target.value },
                  })
                }
                placeholder="e.g. 7f92f8afb8ec43bf81429cc1c9199cb1"
                className="w-full h-10 px-3 rounded-lg border border-gray-300 bg-white text-xs font-mono"
              />
            </div>

            {/* Model */}
            <div>
              <label className="mb-1 block text-xs font-bold text-gray-700">
                Model * (Default: speech-1.5)
              </label>
              <input
                type="text"
                value={voiceConfig.model_id || "speech-1.5"}
                onChange={(e) =>
                  onChange({
                    ...voiceConfig,
                    model_id: e.target.value,
                    fish_audio: { ...(voiceConfig.fish_audio || {}), model: e.target.value },
                  })
                }
                placeholder="speech-1.5"
                className="w-full h-10 px-3 rounded-lg border border-gray-300 bg-white text-xs font-semibold"
              />
            </div>
          </div>
        </div>
      )}

      {/* Live Audio Preview Section */}
      <div className="rounded-xl border border-indigo-200 bg-white p-4 space-y-3 shadow-xs">
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-700">
            <Volume2 className="h-3.5 w-3.5 text-indigo-600" />
            Live Voice Preview
          </label>
          <span className="text-[11px] text-gray-400">
            Provider: <strong className="text-gray-700">{activeProvider.toUpperCase()}</strong> | Voice:{" "}
            <strong className="text-gray-700">{voiceConfig.voice_id || "Default"}</strong>
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <input
            type="text"
            value={previewText}
            onChange={(e) => setPreviewText(e.target.value)}
            placeholder="Type sample text to preview..."
            className="flex-1 h-10 px-3 rounded-lg border border-gray-300 bg-gray-50 text-xs text-gray-800 focus:bg-white focus:outline-none focus:border-indigo-500"
          />
          <button
            type="button"
            onClick={handlePreviewAudio}
            disabled={previewLoading}
            className={`h-10 px-5 rounded-lg text-xs font-bold inline-flex items-center justify-center gap-2 transition-all cursor-pointer ${
              previewPlaying
                ? "bg-amber-500 text-white shadow-sm"
                : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm"
            }`}
          >
            {previewLoading ? (
              <>
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                <span>Generating...</span>
              </>
            ) : previewPlaying ? (
              <>
                <Square className="h-3.5 w-3.5 fill-current" />
                <span>Stop</span>
              </>
            ) : (
              <>
                <Play className="h-3.5 w-3.5 fill-current" />
                <span>Play Sample</span>
              </>
            )}
          </button>
        </div>

        {previewError && (
          <div className="flex items-center gap-2 rounded-lg bg-rose-50 p-2 text-xs text-rose-700 border border-rose-200">
            <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
            <span>{previewError}</span>
          </div>
        )}
      </div>
    </div>
  );
}
