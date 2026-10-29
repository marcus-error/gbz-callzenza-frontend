"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Volume2,
  Play,
  Square,
  CheckCircle2,
  XCircle,
  AlertCircle,
  RefreshCw,
  Plus,
  Trash2,
  Edit3,
  ExternalLink,
  ShieldCheck,
  Search,
  Power,
  Loader2,
  Key,
  Globe,
  Link as LinkIcon,
  Sparkles,
  Eye,
  EyeOff,
  Radio,
} from "lucide-react";
import {
  voiceConfigService,
  VoiceConfigItem,
  CreateVoiceConfigDto,
  UpdateVoiceConfigDto,
  ProviderVoice,
  VoiceTestResult,
} from "@/lib/services/voice-config.service";

interface VoiceConfigurationManagerProps {
  title?: string;
  subtitle?: string;
  isSuperAdminView?: boolean;
}

// Custom Provider Brand Logo Icons
export function ProviderLogo({
  provider,
  className = "w-5 h-5",
}: {
  provider: string;
  className?: string;
}) {
  const p = (provider || "").toLowerCase();
  if (p === "elevenlabs") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="ElevenLabs">
        <rect x="7" y="4" width="3.5" height="16" rx="1.75" />
        <rect x="13.5" y="4" width="3.5" height="16" rx="1.75" />
      </svg>
    );
  }
  if (p === "murf") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-label="Murf AI"
      >
        <path d="M3 10v4" />
        <path d="M7 6v12" />
        <path d="M11 3v18" />
        <path d="M15 8v8" />
        <path d="M19 11v2" />
      </svg>
    );
  }
  if (p === "fish_audio") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-label="Fish Audio"
      >
        <path d="M2 16s9-15 20-4c-5 2-8 5-11 5-4 0-7-2-9-1z" />
        <circle cx="16" cy="10" r="1.2" fill="currentColor" />
      </svg>
    );
  }
  return <Volume2 className={className} />;
}

const PROVIDERS = [
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    badge: "Ultra-Realistic AI",
    color: "from-amber-500 to-orange-600",
    bgLight: "bg-orange-50",
    borderLight: "border-orange-200",
    textLight: "text-orange-700",
    iconBg: "bg-orange-600 text-white",
    docUrl: "https://elevenlabs.io/docs",
    defaultModel: "eleven_multilingual_v2",
    models: [
      { id: "eleven_multilingual_v2", name: "Multilingual v2 (29 Languages)" },
      { id: "eleven_turbo_v2_5", name: "Turbo v2.5 (Fastest Latency)" },
      { id: "eleven_flash_v2_5", name: "Flash v2.5 (Ultra Fast)" },
      { id: "eleven_monolingual_v1", name: "English v1 (Standard)" },
    ],
    defaultVoice: "EXAVITQu4vr4xnSDxMaL",
    defaultVoiceName: "Bella (Expressive Female - Free & Paid)",
    defaultVoices: [
      { id: "EXAVITQu4vr4xnSDxMaL", name: "Bella (Expressive Female - Free & Paid)", voice_name: "Bella", gender: "Female" },
      { id: "ErXwobaYiN019PkySvjV", name: "Antoni (Well-Rounded Male - Free & Paid)", voice_name: "Antoni", gender: "Male" },
      { id: "VR6AewLTigWG4xSOukaG", name: "Arnold (Authoritative Male - Free & Paid)", voice_name: "Arnold", gender: "Male" },
      { id: "pNInz6obpgDQGcFmaJgB", name: "Adam (Deep Professional Male - Free & Paid)", voice_name: "Adam", gender: "Male" },
      { id: "21m00Tcm4TlvDq8ikWAM", name: "Rachel (Calm & Clear - Creator / Paid Tier)", voice_name: "Rachel", gender: "Female" },
      { id: "AZnzlk1XvdvUeBnXmlld", name: "Domi (Confident Female - Creator / Paid Tier)", voice_name: "Domi", gender: "Female" },
    ],
  },
  {
    id: "murf",
    name: "Murf AI",
    badge: "Studio Falcon Streaming",
    color: "from-purple-600 to-indigo-600",
    bgLight: "bg-purple-50",
    borderLight: "border-purple-200",
    textLight: "text-purple-700",
    iconBg: "bg-purple-600 text-white",
    docUrl: "https://murf.ai/api/docs",
    defaultModel: "Falcon",
    models: [
      { id: "Falcon", name: "Falcon (Low-Latency Telephony Stream)" },
      { id: "GEN2", name: "GEN2 (Studio Conversational Quality)" },
    ],
    defaultVoice: "Joshua",
    defaultVoiceName: "Joshua (Professional / Conversational)",
    defaultVoices: [
      { id: "Joshua", name: "Joshua (Professional / Conversational)", voice_name: "Joshua", gender: "Male" },
      { id: "Pooja", name: "Pooja (Indian English / Natural)", voice_name: "Pooja", gender: "Female" },
      { id: "Marcus", name: "Marcus (Authoritative Business)", voice_name: "Marcus", gender: "Male" },
      { id: "Natalie", name: "Natalie (Warm Customer Service)", voice_name: "Natalie", gender: "Female" },
      { id: "Matthew", name: "Matthew (Executive Narration)", voice_name: "Matthew", gender: "Male" },
      { id: "Alicia", name: "Alicia (Friendly Everyday)", voice_name: "Alicia", gender: "Female" },
      { id: "Ken", name: "Ken (Energetic Outreach)", voice_name: "Ken", gender: "Male" },
      { id: "Clint", name: "Clint (Deep & Engaging)", voice_name: "Clint", gender: "Male" },
    ],
  },
  {
    id: "snapserve",
    name: "SnapServe AI",
    badge: "8 kHz Telephony Engine",
    color: "from-blue-600 to-cyan-600",
    bgLight: "bg-blue-50",
    borderLight: "border-blue-200",
    textLight: "text-blue-700",
    iconBg: "bg-blue-600 text-white",
    docUrl: "https://snapserve.ai",
    defaultModel: "default",
    models: [
      { id: "default", name: "SnapServe Telephony Core (G.711 / 8kHz)" },
    ],
    defaultVoice: "ca3007f96ae7499ab87d27ea3599956a",
    defaultVoiceName: "SnapServe Core Female",
    defaultVoices: [
      { id: "ca3007f96ae7499ab87d27ea3599956a", name: "SnapServe Core Female (8kHz μ-law)", voice_name: "SnapServe Core Female", gender: "Female" },
    ],
  },
];

export function VoiceConfigurationManager({
  title = "Voice Configuration",
  subtitle = "Configure, test, and manage Text-to-Speech (TTS) providers for AI voice agents and live campaigns.",
  isSuperAdminView = false,
}: VoiceConfigurationManagerProps) {
  const [configs, setConfigs] = useState<VoiceConfigItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Filters & Search
  const [selectedProviderTab, setSelectedProviderTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Modal State
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [editingConfig, setEditingConfig] = useState<VoiceConfigItem | null>(null);

  // Exact Form State
  const [formProvider, setFormProvider] = useState<string>("elevenlabs");
  const [formName, setFormName] = useState<string>("");
  const [formApiKey, setFormApiKey] = useState<string>("");
  const [showApiKey, setShowApiKey] = useState<boolean>(false);
  const [formVoiceId, setFormVoiceId] = useState<string>("");
  const [formVoiceName, setFormVoiceName] = useState<string>("");
  const [formModel, setFormModel] = useState<string>("");
  const [formVoiceLink, setFormVoiceLink] = useState<string>("");
  const [formIsActive, setFormIsActive] = useState<boolean>(true);

  // Dynamic voices fetched for modal & manual voice entry mode
  const [fetchedVoices, setFetchedVoices] = useState<ProviderVoice[]>([]);
  const [fetchingVoices, setFetchingVoices] = useState<boolean>(false);
  const [manualVoiceIdMode, setManualVoiceIdMode] = useState<boolean>(false);

  // Testing & Preview State
  const [testStatus, setTestStatus] = useState<Record<string, VoiceTestResult>>({});
  const [testingId, setTestingId] = useState<string | null>(null);
  const [modalTesting, setModalTesting] = useState<boolean>(false);
  const [modalTestResult, setModalTestResult] = useState<VoiceTestResult | null>(null);

  // Audio Playback State
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [previewLoadingId, setPreviewLoadingId] = useState<string | null>(null);
  const [previewText, setPreviewText] = useState<string>(
    "Hello! This is GBZ speaking with your configured voice provider."
  );
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Edge TTS ON/OFF Operational Toggle State
  const [edgeTtsEnabled, setEdgeTtsEnabled] = useState<boolean>(true);
  const [edgeTtsLoading, setEdgeTtsLoading] = useState<boolean>(false);

  const loadConfigs = async () => {
    try {
      setError(null);
      const [data, edgeStatus] = await Promise.all([
        voiceConfigService.getVoiceConfigs(),
        voiceConfigService.getEdgeTtsStatus().catch(() => ({ enabled: true, provider: "edge_tts", message: "" })),
      ]);
      setConfigs(data || []);
      if (edgeStatus && typeof edgeStatus.enabled === "boolean") {
        setEdgeTtsEnabled(edgeStatus.enabled);
      }
    } catch (err: any) {
      console.error("Failed to load voice configs:", err);
      setError(err?.message || "Failed to load voice configurations.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const handleToggleEdgeTts = async () => {
    setEdgeTtsLoading(true);
    try {
      const res = await voiceConfigService.toggleEdgeTts(!edgeTtsEnabled);
      setEdgeTtsEnabled(res.enabled);
      setSuccessMessage(res.message);
    } catch (err: any) {
      console.error("Failed to toggle Edge TTS:", err);
      setError(err?.message || "Failed to update Edge TTS status.");
    } finally {
      setEdgeTtsLoading(false);
    }
  };

  useEffect(() => {
    loadConfigs();
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    loadConfigs();
  };

  // Open modal for Create
  const handleOpenCreate = (providerId?: string) => {
    const prov = providerId || (selectedProviderTab !== "all" ? selectedProviderTab : "elevenlabs");
    const meta = PROVIDERS.find((p) => p.id === prov) || PROVIDERS[0];

    setEditingConfig(null);
    setFormProvider(meta.id);
    setFormName(`${meta.name} Production Voice`);
    setFormApiKey("");
    setShowApiKey(false);
    setFormVoiceId(meta.defaultVoice);
    setFormVoiceName(meta.defaultVoiceName || "");
    setFormModel(meta.defaultModel);
    setFormVoiceLink("");
    setFormIsActive(true);

    setFetchedVoices([]);
    setManualVoiceIdMode(false);
    setModalTestResult(null);
    setModalOpen(true);
  };

  // Open modal for Edit
  const handleOpenEdit = (config: VoiceConfigItem) => {
    const meta = PROVIDERS.find((p) => p.id === config.provider) || PROVIDERS[0];

    setEditingConfig(config);
    setFormProvider(config.provider);
    setFormName(config.name);
    setFormApiKey(""); // Kept blank to avoid overwriting unless user explicitly changes it
    setShowApiKey(false);
    setFormVoiceId(config.voice_id || "");
    setFormVoiceName(
      config.voice_name ||
        meta.defaultVoices.find((v) => v.id === config.voice_id)?.voice_name ||
        config.name
    );
    setFormModel(config.model_id || meta.defaultModel);
    setFormVoiceLink(config.voice_link || config.voice_url || "");
    setFormIsActive(config.is_active);

    setFetchedVoices([]);
    const isPreset = meta.defaultVoices.some((v) => v.id === config.voice_id);
    setManualVoiceIdMode(!isPreset);
    setModalTestResult(null);
    setModalOpen(true);
  };

  // Provider Tab switch inside Modal (Strict Provider Isolation)
  const handleModalProviderSwitch = (newProvider: string) => {
    const meta = PROVIDERS.find((p) => p.id === newProvider) || PROVIDERS[0];
    setFormProvider(newProvider);
    // When switching providers, clear incompatible voice IDs, model, and links
    setFormVoiceId(meta.defaultVoice);
    setFormVoiceName(meta.defaultVoiceName || "");
    setFormModel(meta.defaultModel);
    setFormVoiceLink("");
    setFormApiKey(""); // Never reuse secrets between different providers
    if (!editingConfig) {
      setFormName(`${meta.name} Voice Config`);
    }
    setFetchedVoices([]);
    setManualVoiceIdMode(false);
    setModalTestResult(null);
  };

  // Live Fetch Voices from provider inside Modal
  const handleFetchVoices = async () => {
    setFetchingVoices(true);
    try {
      let voices: ProviderVoice[] = [];
      if (editingConfig && !formApiKey.trim()) {
        voices = await voiceConfigService.fetchConfigVoices(editingConfig.id);
      } else {
        voices = await voiceConfigService.fetchProviderVoices({
          provider: formProvider,
          api_key: formApiKey.trim() || undefined,
          voice_url: formVoiceLink.trim() || undefined,
        });
      }
      const list = Array.isArray(voices) ? voices : (voices as any)?.voices || [];
      setFetchedVoices(list);
      if (list.length > 0) {
        if (!list.some((v: any) => v.id === formVoiceId)) {
          setFormVoiceId(list[0].id);
          setFormVoiceName(list[0].voice_name || list[0].name);
        }
      }
    } catch (err: any) {
      console.warn("Could not fetch remote voices:", err);
      const meta = PROVIDERS.find((p) => p.id === formProvider);
      if (meta) {
        setFetchedVoices(meta.defaultVoices.map((v) => ({ ...v, provider: meta.id })));
      }
    } finally {
      setFetchingVoices(false);
    }
  };

  // Live Test inside Modal
  const handleModalTest = async () => {
    setModalTesting(true);
    setModalTestResult(null);
    try {
      let res: VoiceTestResult;
      if (editingConfig && !formApiKey.trim()) {
        res = await voiceConfigService.testVoiceConfig(editingConfig.id);
      } else {
        res = await voiceConfigService.testVoiceConfigPayload({
          provider: formProvider,
          api_key: formApiKey.trim(),
          voice_id: formVoiceId,
          model_id: formModel,
          voice_url: formVoiceLink.trim() || undefined,
        });
      }
      setModalTestResult(res);
    } catch (err: any) {
      setModalTestResult({
        status: "failed",
        message: err?.message || "Connection test failed.",
        provider: formProvider,
      });
    } finally {
      setModalTesting(false);
    }
  };

  // Save Configuration (Create or Update)
  const handleSaveConfig = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim()) {
      setError("Please provide a configuration name.");
      return;
    }

    if (!editingConfig && !formApiKey.trim()) {
      setError(`API Key is required to create a new ${formProvider} configuration.`);
      return;
    }

    if (!formVoiceId.trim()) {
      setError(`Voice ID is required for ${formProvider}. You can choose from library or enter manually.`);
      return;
    }

    try {
      if (editingConfig) {
        const updatePayload: UpdateVoiceConfigDto = {
          name: formName.trim(),
          voice_id: formVoiceId.trim() || undefined,
          voice_name: formVoiceName.trim() || undefined,
          model_id: formModel.trim() || undefined,
          voice_link: formVoiceLink.trim() || undefined,
          voice_url: formVoiceLink.trim() || undefined,
          is_active: formIsActive,
        };
        // Only pass API key if non-empty and not masked
        if (formApiKey.trim() && !formApiKey.includes("••••")) {
          updatePayload.api_key = formApiKey.trim();
        }
        await voiceConfigService.updateVoiceConfig(editingConfig.id, updatePayload);
        setSuccessMessage(`Updated configuration "${formName}" successfully.`);
      } else {
        const createPayload: CreateVoiceConfigDto = {
          name: formName.trim(),
          provider: formProvider,
          api_key: formApiKey.trim(),
          voice_id: formVoiceId.trim() || undefined,
          voice_name: formVoiceName.trim() || undefined,
          model_id: formModel.trim() || undefined,
          voice_link: formVoiceLink.trim() || undefined,
          voice_url: formVoiceLink.trim() || undefined,
          is_active: formIsActive,
        };
        await voiceConfigService.createVoiceConfig(createPayload);
        setSuccessMessage(`Created configuration "${formName}" successfully.`);
      }

      setModalOpen(false);
      loadConfigs();
    } catch (err: any) {
      console.error("Save config error:", err);
      setError(err?.message || "Failed to save voice configuration.");
    }
  };

  // Toggle is_active
  const handleToggleActive = async (config: VoiceConfigItem) => {
    try {
      const nextActive = !config.is_active;
      await voiceConfigService.updateVoiceConfig(config.id, { is_active: nextActive });
      setConfigs((prev) =>
        prev.map((c) => (c.id === config.id ? { ...c, is_active: nextActive } : c))
      );
    } catch (err: any) {
      console.error("Toggle active error:", err);
      setError(err?.message || "Failed to update configuration status.");
    }
  };

  // Delete configuration
  const handleDeleteConfig = async (config: VoiceConfigItem) => {
    if (!confirm(`Are you sure you want to delete the configuration "${config.name}"?`)) {
      return;
    }
    try {
      await voiceConfigService.deleteVoiceConfig(config.id);
      setConfigs((prev) => prev.filter((c) => c.id !== config.id));
      setSuccessMessage(`Deleted configuration "${config.name}".`);
    } catch (err: any) {
      console.error("Delete config error:", err);
      setError(err?.message || "Failed to delete voice configuration.");
    }
  };

  // Card-level Test Connection
  const handleTestConnection = async (config: VoiceConfigItem) => {
    setTestingId(config.id);
    try {
      const res = await voiceConfigService.testVoiceConfig(config.id);
      setTestStatus((prev) => ({ ...prev, [config.id]: res }));
      setConfigs((prev) =>
        prev.map((c) =>
          c.id === config.id
            ? { ...c, test_status: res.status, last_tested_at: new Date().toISOString() }
            : c
        )
      );
    } catch (err: any) {
      setTestStatus((prev) => ({
        ...prev,
        [config.id]: {
          status: "failed",
          message: err?.message || "Test failed.",
          provider: config.provider,
        },
      }));
    } finally {
      setTestingId(null);
    }
  };

  // Audio Preview Playback
  const handlePreviewAudio = async (config: VoiceConfigItem) => {
    if (playingId === config.id && audioRef.current) {
      audioRef.current.pause();
      setPlayingId(null);
      return;
    }

    setPreviewLoadingId(config.id);
    setError(null);

    // Guard if trying to preview an Edge voice when Edge TTS is disabled
    if ((config.provider === "edge_tts" || config.provider === "edge") && !edgeTtsEnabled) {
      setError("Edge TTS is currently disabled. Toggle Edge TTS ON to preview or use Edge voices.");
      setPreviewLoadingId(null);
      return;
    }

    try {
      const blob = await voiceConfigService.previewVoiceAudio({
        provider: config.provider,
        voice_id: config.voice_id || "",
        model_id: config.model_id || undefined,
        voice_url: config.voice_link || config.voice_url || undefined,
        credential_id: config.id,
        text: previewText,
      });

      if (!blob || blob.size === 0) {
        throw new Error("Received empty audio response from voice service.");
      }

      if (audioRef.current) {
        audioRef.current.pause();
      }

      const audioUrl = URL.createObjectURL(blob);
      const audio = new Audio(audioUrl);
      audioRef.current = audio;

      audio.onplay = () => setPlayingId(config.id);
      audio.onended = () => setPlayingId(null);
      audio.onerror = () => {
        setPlayingId(null);
        setError("Browser failed to play returned audio preview.");
      };

      await audio.play();
    } catch (err: any) {
      console.error("Audio preview failed:", err);
      setError(err?.message || "Failed to generate audio preview.");
      setPlayingId(null);
    } finally {
      setPreviewLoadingId(null);
    }
  };

  // Filtered configurations
  const filteredConfigs = useMemo(() => {
    return configs.filter((c) => {
      const matchTab = selectedProviderTab === "all" || c.provider === selectedProviderTab;
      const matchSearch =
        !searchQuery.trim() ||
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (c.voice_name && c.voice_name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (c.voice_id && c.voice_id.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchTab && matchSearch;
    });
  }, [configs, selectedProviderTab, searchQuery]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-slate-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Multi-Provider Dynamic Voice Engine</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">{title}</h1>
            <p className="text-sm text-slate-300 max-w-2xl">{subtitle}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700 text-sm font-medium transition-all shadow-sm cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`} />
              <span>Refresh</span>
            </button>
            <button
              onClick={() => handleOpenCreate()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-sm font-semibold transition-all shadow-md hover:shadow-indigo-500/25 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add Configuration</span>
            </button>
          </div>
        </div>

        {/* Global Preview Text Bar */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <span className="text-xs font-semibold text-slate-400 whitespace-nowrap flex items-center gap-1.5">
            <Volume2 className="w-3.5 h-3.5 text-indigo-400" />
            Preview Sample Text:
          </span>
          <input
            type="text"
            value={previewText}
            onChange={(e) => setPreviewText(e.target.value)}
            className="flex-1 bg-slate-800/90 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-400 transition-colors"
            placeholder="Type sample text to hear how this voice sounds..."
          />
        </div>
      </div>

      {/* Messages */}
      {error && (
        <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 text-sm animate-in fade-in">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-600 mt-0.5" />
          <div className="flex-1">
            <span className="font-semibold block">Configuration Error</span>
            <span>{error}</span>
          </div>
          <button onClick={() => setError(null)} className="text-red-500 hover:text-red-700 text-xs font-bold">
            Dismiss
          </button>
        </div>
      )}

      {successMessage && (
        <div className="flex items-start gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-sm animate-in fade-in">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-600 mt-0.5" />
          <div className="flex-1">{successMessage}</div>
          <button
            onClick={() => setSuccessMessage(null)}
            className="text-emerald-500 hover:text-emerald-700 text-xs font-bold"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Provider Quick Cards & Edge TTS Operational Toggle */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PROVIDERS.filter((p) => ["elevenlabs", "murf"].includes(p.id)).map((prov) => {
          const provCount = configs.filter((c) => c.provider === prov.id).length;
          const activeCount = configs.filter((c) => c.provider === prov.id && c.is_active).length;
          const isSelected = selectedProviderTab === prov.id;

          return (
            <div
              key={prov.id}
              onClick={() => setSelectedProviderTab(selectedProviderTab === prov.id ? "all" : prov.id)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden bg-white shadow-sm hover:shadow-md ${
                isSelected
                  ? "ring-2 ring-indigo-500 border-indigo-400 shadow-indigo-100"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center p-1.5 ${prov.iconBg}`}>
                    <ProviderLogo provider={prov.id} className="w-4 h-4" />
                  </div>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${prov.bgLight} ${prov.textLight}`}>
                    {prov.badge}
                  </span>
                </div>
                <a
                  href={prov.docUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-slate-400 hover:text-slate-600 transition-colors p-1"
                  title="View official provider API documentation"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <h3 className="text-base font-bold text-slate-900">{prov.name}</h3>
              <div className="mt-3 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-3">
                <span>
                  {provCount} {provCount === 1 ? "config" : "configs"}
                </span>
                <span className={`font-semibold ${activeCount > 0 ? "text-emerald-600" : "text-slate-400"}`}>
                  {activeCount} active
                </span>
              </div>
            </div>
          );
        })}

        {/* Edge TTS Operational Control Card */}
        <div
          className={`p-5 rounded-2xl border transition-all relative overflow-hidden bg-white shadow-sm hover:shadow-md ${
            edgeTtsEnabled ? "border-emerald-200 shadow-emerald-50/50" : "border-slate-200 bg-slate-50/50"
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center p-1.5 ${
                  edgeTtsEnabled ? "bg-emerald-600 text-white" : "bg-slate-400 text-white"
                }`}
              >
                <Volume2 className="w-4 h-4" />
              </div>
              <span
                className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                  edgeTtsEnabled ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-500"
                }`}
              >
                Neural Engine
              </span>
            </div>
            <button
              onClick={handleToggleEdgeTts}
              disabled={edgeTtsLoading}
              className={`relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                edgeTtsEnabled ? "bg-emerald-500" : "bg-slate-300"
              }`}
              title={`Click to turn Edge TTS ${edgeTtsEnabled ? "OFF" : "ON"}`}
            >
              <span
                className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  edgeTtsEnabled ? "translate-x-4" : "translate-x-0"
                }`}
              />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900">Edge TTS</h3>
            <span
              className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded ${
                edgeTtsEnabled
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-rose-100 text-rose-800"
              }`}
            >
              {edgeTtsEnabled ? "ENABLED" : "DISABLED"}
            </span>
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-3">
            <span>Fallback & Synthesis</span>
            <span className={`font-semibold ${edgeTtsEnabled ? "text-emerald-600" : "text-slate-400"}`}>
              {edgeTtsEnabled ? "Active" : "Disabled"}
            </span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelectedProviderTab("all")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              selectedProviderTab === "all"
                ? "bg-slate-900 text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            All Providers ({configs.length})
          </button>
          {PROVIDERS.map((prov) => {
            const count = configs.filter((c) => c.provider === prov.id).length;
            const isTabActive = selectedProviderTab === prov.id;
            return (
              <button
                key={prov.id}
                onClick={() => setSelectedProviderTab(prov.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer inline-flex items-center gap-1.5 ${
                  isTabActive
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <ProviderLogo provider={prov.id} className="w-3 h-3" />
                <span>{prov.name} ({count})</span>
              </button>
            );
          })}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search voice, ID, or provider..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Configurations Grid */}
      {loading ? (
        <div className="py-20 text-center space-y-3 bg-white rounded-2xl border border-slate-200">
          <Loader2 className="w-8 h-8 text-indigo-600 animate-spin mx-auto" />
          <p className="text-sm font-medium text-slate-500">Loading voice configurations...</p>
        </div>
      ) : filteredConfigs.length === 0 ? (
        <div className="py-16 text-center space-y-4 bg-white rounded-2xl border border-dashed border-slate-300 p-8">
          <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-500 mx-auto">
            <Volume2 className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900">No Voice Configurations Found</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              {searchQuery || selectedProviderTab !== "all"
                ? "No saved configurations matched your current filter criteria."
                : "You haven't configured any voice providers yet. Add your first provider configuration to power your AI call agents."}
            </p>
          </div>
          <button
            onClick={() => handleOpenCreate(selectedProviderTab !== "all" ? selectedProviderTab : undefined)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-sm transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Configuration</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredConfigs.map((config) => {
            const meta = PROVIDERS.find((p) => p.id === config.provider) || PROVIDERS[0];
            const isPlaying = playingId === config.id;
            const isPreviewLoading = previewLoadingId === config.id;
            const isTesting = testingId === config.id;
            const cardTestRes = testStatus[config.id];

            return (
              <div
                key={config.id}
                className={`bg-white rounded-2xl border transition-all p-5 shadow-sm hover:shadow-md flex flex-col justify-between ${
                  config.is_active ? "border-slate-200" : "border-slate-200 opacity-75 bg-slate-50/50"
                }`}
              >
                <div className="space-y-4">
                  {/* Card Header: Provider logo/name, Active status toggle */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-2 py-0.5 rounded-full ${meta.bgLight} ${meta.textLight}`}>
                          <ProviderLogo provider={config.provider} className="w-3.5 h-3.5" />
                          <span>{meta.name}</span>
                        </span>
                        <span
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                            config.is_active
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : "bg-slate-100 text-slate-500 border border-slate-200"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              config.is_active ? "bg-emerald-500 animate-pulse" : "bg-slate-400"
                            }`}
                          />
                          {config.is_active ? "Active" : "Disabled"}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 leading-snug">{config.name}</h3>
                    </div>

                    {/* Enable/Disable Toggle */}
                    <button
                      onClick={() => handleToggleActive(config)}
                      title={config.is_active ? "Disable configuration" : "Enable configuration"}
                      className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                        config.is_active
                          ? "bg-emerald-50 text-emerald-600 border-emerald-200 hover:bg-emerald-100"
                          : "bg-slate-100 text-slate-400 border-slate-200 hover:bg-slate-200"
                      }`}
                    >
                      <Power className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Card Body: Provider-Specific Accurate Saved Data */}
                  <div className="space-y-2 bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs">
                    {/* Voice Name */}
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 font-medium">Voice Name:</span>
                      <span
                        className="font-bold text-slate-800 truncate max-w-[170px]"
                        title={config.voice_name || (config.voice_id ? "Custom Voice" : "Default Voice")}
                      >
                        {config.voice_name || (config.voice_id ? `Voice (${config.voice_id.slice(0, 8)}...)` : "Standard Voice")}
                      </span>
                    </div>

                    {/* Voice ID */}
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 font-medium">Voice ID:</span>
                      <span
                        className="font-mono text-slate-700 truncate max-w-[170px]"
                        title={config.voice_id || "Not configured"}
                      >
                        {config.voice_id ? config.voice_id : <span className="italic text-slate-400">Not configured</span>}
                      </span>
                    </div>

                    {/* Model ID */}
                    {config.model_id && (
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400 font-medium">Model:</span>
                        <span className="font-semibold text-slate-700 truncate max-w-[170px]">
                          {config.model_id}
                        </span>
                      </div>
                    )}

                    {/* Voice Link or Direct Provider Stream */}
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 font-medium">Voice Link:</span>
                      {config.voice_link ? (
                        <a
                          href={config.voice_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-indigo-600 hover:underline truncate max-w-[170px] flex items-center gap-1"
                          title={config.voice_link}
                        >
                          <LinkIcon className="w-3 h-3 flex-shrink-0" />
                          <span className="truncate">{config.voice_link}</span>
                        </a>
                      ) : (
                        <span className="text-slate-400 italic">Direct Provider Audio</span>
                      )}
                    </div>

                    {/* Masked API Key */}
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 font-medium">API Key:</span>
                      <span className="font-mono text-slate-600 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                        {config.masked_api_key || "••••••••"}
                      </span>
                    </div>
                  </div>

                  {/* Test Status Banner if tested */}
                  {(cardTestRes || config.test_status) && (
                    <div
                      className={`p-2.5 rounded-xl text-xs flex items-center justify-between border ${
                        String(cardTestRes?.status || config.test_status || "").toUpperCase() === "SUCCESS"
                          ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                          : "bg-rose-50 text-rose-800 border-rose-200"
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        {String(cardTestRes?.status || config.test_status || "").toUpperCase() === "SUCCESS" ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        ) : (
                          <XCircle className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" />
                        )}
                        <span className="font-medium truncate max-w-[200px]">
                          {cardTestRes?.message ||
                            (String(config.test_status || "").toUpperCase() === "SUCCESS"
                              ? "Connection Verified"
                              : "Test Failed")}
                        </span>
                      </div>
                      {config.last_tested_at && (
                        <span className="text-[10px] text-slate-400">
                          {new Date(config.last_tested_at).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Card Actions Footer */}
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    {/* Audio Preview Button */}
                    <button
                      onClick={() => handlePreviewAudio(config)}
                      disabled={isPreviewLoading}
                      title="Play live audio preview from actual provider"
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 transition-all cursor-pointer ${
                        isPlaying
                          ? "bg-amber-500 text-white shadow-sm"
                          : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200"
                      }`}
                    >
                      {isPreviewLoading ? (
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      ) : isPlaying ? (
                        <>
                          <Square className="w-3.5 h-3.5 fill-current" />
                          <span>Stop</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Preview</span>
                        </>
                      )}
                    </button>

                    {/* Test Connection Button */}
                    <button
                      onClick={() => handleTestConnection(config)}
                      disabled={isTesting}
                      title="Test live provider connection"
                      className="px-2.5 py-1.5 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all inline-flex items-center gap-1 cursor-pointer disabled:opacity-50"
                    >
                      <RefreshCw className={`w-3 h-3 ${isTesting ? "animate-spin" : ""}`} />
                      <span>{isTesting ? "Testing..." : "Test"}</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-1">
                    {/* Edit Button */}
                    <button
                      onClick={() => handleOpenEdit(config)}
                      className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors cursor-pointer"
                      title="Edit configuration"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>

                    {/* Delete Button */}
                    <button
                      onClick={() => handleDeleteConfig(config)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                      title="Delete configuration"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Create / Edit Configuration Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-xl max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center p-2 ${
                    PROVIDERS.find((p) => p.id === formProvider)?.iconBg || "bg-indigo-600 text-white"
                  }`}
                >
                  <ProviderLogo provider={formProvider} className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    {editingConfig
                      ? `Edit ${PROVIDERS.find((p) => p.id === formProvider)?.name} Configuration`
                      : `Configure ${PROVIDERS.find((p) => p.id === formProvider)?.name}`}
                  </h2>
                  <p className="text-xs text-slate-500">
                    Manage actual provider credentials, models, and real voice identifiers.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Modal Body / Form */}
            <form onSubmit={handleSaveConfig} className="p-6 overflow-y-auto space-y-5 flex-1">
              {/* Provider Selection Tabs */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-2 uppercase tracking-wider">
                  Select Provider
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {PROVIDERS.filter((p) => ["elevenlabs", "murf"].includes(p.id)).map((prov) => {
                    const isSelected = formProvider === prov.id;
                    return (
                      <button
                        key={prov.id}
                        type="button"
                        onClick={() => handleModalProviderSwitch(prov.id)}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? "border-indigo-600 bg-indigo-50/80 ring-2 ring-indigo-500/20"
                            : "border-slate-200 hover:border-slate-300 bg-white"
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <ProviderLogo provider={prov.id} className="w-4 h-4 text-slate-700" />
                          <span className={`text-xs font-bold ${isSelected ? "text-indigo-900" : "text-slate-800"}`}>
                            {prov.name}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-500 mt-1">{prov.badge}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Configuration Label */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Configuration Label <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder={`e.g. ${PROVIDERS.find((p) => p.id === formProvider)?.name} Production Voice`}
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors"
                />
              </div>

              {/* Dynamic Provider Form Container */}
              <div
                className={`space-y-4 p-4 rounded-xl border ${
                  formProvider === "elevenlabs"
                    ? "bg-orange-50/50 border-orange-200/80"
                    : "bg-purple-50/50 border-purple-200/80"
                }`}
              >
                <div className="flex items-center justify-between border-b pb-2 border-slate-200">
                  <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 text-slate-900">
                    <Key className="w-3.5 h-3.5 text-indigo-600" />
                    {PROVIDERS.find((p) => p.id === formProvider)?.name} Configuration Fields
                  </span>
                  <a
                    href={PROVIDERS.find((p) => p.id === formProvider)?.docUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-indigo-700 hover:underline flex items-center gap-1 font-semibold"
                  >
                    API Docs <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* API Key */}
                <div>
                  <label className="text-xs font-bold text-slate-700 flex items-center justify-between mb-1">
                    <span>
                      API Credential {editingConfig ? "(Leave blank to keep existing)" : "*"}
                    </span>
                    {editingConfig && editingConfig.masked_api_key && (
                      <span className="text-[11px] text-slate-500 font-mono">
                        Saved: {editingConfig.masked_api_key}
                      </span>
                    )}
                  </label>
                  <div className="relative">
                    <input
                      type={showApiKey ? "text" : "password"}
                      required={!editingConfig}
                      value={formApiKey}
                      onChange={(e) => setFormApiKey(e.target.value)}
                      placeholder={
                        editingConfig
                          ? "•••••••••••••••• (Credential Unchanged)"
                          : formProvider === "elevenlabs"
                          ? "Enter xi-api-key"
                          : "Enter Murf API Key"
                      }
                      className="w-full pl-3.5 pr-10 py-2 text-sm font-mono bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowApiKey(!showApiKey)}
                      className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
                    >
                      {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {formProvider === "elevenlabs" && (
                    <p className="text-[11px] text-amber-700 bg-amber-50/80 border border-amber-200/60 rounded-lg p-2 mt-1.5 leading-relaxed">
                      💡 <strong>ElevenLabs API Key Tip:</strong> Use the <em>Secret API Key</em> copied when the key was created (or click rotate/create new key). Do not copy the <em>Key ID</em> from the dashboard list. Ensure the key has <code>Text to Speech</code> permission enabled.
                    </p>
                  )}
                </div>

                {/* Voice Selection Mode: Library vs Manual Voice ID */}
                <div className="space-y-3 pt-1">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-700 block">
                      Voice Identifier & Assignment <span className="text-rose-500">*</span>
                    </label>
                    <div className="flex items-center rounded-lg bg-slate-200/70 p-0.5 text-xs font-semibold">
                      <button
                        type="button"
                        onClick={() => setManualVoiceIdMode(false)}
                        className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                          !manualVoiceIdMode
                            ? "bg-white text-indigo-700 shadow-sm"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        Library
                      </button>
                      <button
                        type="button"
                        onClick={() => setManualVoiceIdMode(true)}
                        className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                          manualVoiceIdMode
                            ? "bg-white text-indigo-700 shadow-sm"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        Manual Voice ID
                      </button>
                    </div>
                  </div>

                  {/* Mode 1: Library Selector */}
                  {!manualVoiceIdMode ? (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <select
                          value={formVoiceId}
                          onChange={(e) => {
                            if (e.target.value === "__manual__") {
                              setManualVoiceIdMode(true);
                              return;
                            }
                            setFormVoiceId(e.target.value);
                            const found = (
                              fetchedVoices.length > 0
                                ? fetchedVoices
                                : PROVIDERS.find((p) => p.id === formProvider)?.defaultVoices || []
                            ).find((v) => v.id === e.target.value);
                            if (found) {
                              setFormVoiceName(found.voice_name || found.name);
                            }
                          }}
                          className="flex-1 px-3 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500 font-medium"
                        >
                          {formVoiceId &&
                            !fetchedVoices.some((v) => v.id === formVoiceId) &&
                            !(PROVIDERS.find((p) => p.id === formProvider)?.defaultVoices || []).some(
                              (v) => v.id === formVoiceId
                            ) && (
                              <option value={formVoiceId}>Current ID: {formVoiceId}</option>
                            )}

                          {(fetchedVoices.length > 0
                            ? fetchedVoices
                            : PROVIDERS.find((p) => p.id === formProvider)?.defaultVoices || []
                          ).map((v) => (
                            <option key={v.id} value={v.id}>
                              {v.name} ({v.id})
                            </option>
                          ))}
                          <option value="__manual__">✏️ Enter Custom / Manual Voice ID...</option>
                        </select>

                        <button
                          type="button"
                          onClick={handleFetchVoices}
                          disabled={fetchingVoices}
                          className="px-3 py-2 text-xs font-semibold rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 inline-flex items-center gap-1.5 transition-all shadow-sm cursor-pointer disabled:opacity-50 flex-shrink-0"
                          title="Fetch voices live from provider API"
                        >
                          <RefreshCw className={`w-3.5 h-3.5 ${fetchingVoices ? "animate-spin text-indigo-600" : ""}`} />
                          <span>{fetchingVoices ? "Fetching..." : "Fetch Voices"}</span>
                        </button>
                      </div>

                      {formVoiceName && (
                        <p className="text-[11px] text-slate-500 font-medium">
                          Selected Voice: <span className="font-bold text-slate-800">{formVoiceName}</span>
                        </p>
                      )}
                    </div>
                  ) : (
                    /* Mode 2: Manual Voice ID Entry (User Requested) */
                    <div className="space-y-3 bg-white p-3.5 rounded-xl border border-slate-200">
                      <div>
                        <label className="text-[11px] font-bold text-slate-700 block mb-1">
                          Manual Voice ID / Model Reference <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formVoiceId}
                          onChange={(e) => setFormVoiceId(e.target.value)}
                          placeholder={
                            formProvider === "elevenlabs"
                              ? "e.g. 21m00Tcm4TlvDq8ikWAM or custom cloned voice ID"
                              : formProvider === "murf"
                              ? "e.g. Joshua, Marcus, or custom Murf voice ID"
                              : "e.g. 7f92f8afb8ec43bf81429cc1c9199cb1 or reference model ID"
                          }
                          className="w-full px-3.5 py-2 text-sm font-mono bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-slate-700 block mb-1">
                          Voice Name Label (Optional)
                        </label>
                        <input
                          type="text"
                          value={formVoiceName}
                          onChange={(e) => setFormVoiceName(e.target.value)}
                          placeholder="e.g. My Cloned Brand Voice"
                          className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:bg-white transition-colors"
                        />
                      </div>

                      <p className="text-[11px] text-indigo-700 font-medium">
                        ✏️ Manual entry active. Paste any valid {formProvider} voice or cloned identifier.
                      </p>
                    </div>
                  )}
                </div>

                {/* Model Selection */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-bold text-slate-700">TTS Model *</label>
                    <span className="text-[10px] text-slate-500 font-mono">
                      Current: {formModel || "None"}
                    </span>
                  </div>
                  <input
                    type="text"
                    required
                    value={formModel}
                    onChange={(e) => setFormModel(e.target.value)}
                    placeholder="e.g. eleven_multilingual_v2, Falcon, speech-1.5"
                    className="w-full px-3.5 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors font-mono"
                  />
                  <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                    <span className="text-[10px] text-slate-400 font-semibold">Supported:</span>
                    {(PROVIDERS.find((p) => p.id === formProvider)?.models || []).map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setFormModel(m.id)}
                        className={`text-[10px] px-2 py-0.5 rounded-full font-semibold transition-all cursor-pointer ${
                          formModel === m.id
                            ? "bg-indigo-600 text-white"
                            : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {m.id}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Optional Voice Link / Custom Endpoint */}
                <div>
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5 mb-1">
                    <LinkIcon className="w-3.5 h-3.5 text-slate-500" />
                    <span>Custom Voice Link or Gateway URL (Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={formVoiceLink}
                    onChange={(e) => setFormVoiceLink(e.target.value)}
                    placeholder="Leave empty for direct provider API streaming, or enter custom gateway link"
                    className="w-full px-3.5 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                  <p className="text-[11px] text-slate-500 mt-1">
                    Only specify if you are proxying synthesis requests through a dedicated enterprise URL.
                  </p>
                </div>
              </div>

              {/* Live Test Inside Modal */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Connectivity Verification
                  </span>
                  <button
                    type="button"
                    onClick={handleModalTest}
                    disabled={modalTesting || (!editingConfig && !formApiKey.trim())}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors inline-flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${modalTesting ? "animate-spin text-indigo-600" : ""}`} />
                    <span>{modalTesting ? "Verifying..." : "Test Connection"}</span>
                  </button>
                </div>

                {modalTestResult && (
                  <div
                    className={`p-3 rounded-xl text-xs flex items-center gap-2 border ${
                      modalTestResult.status === "success"
                        ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                        : "bg-rose-50 text-rose-800 border-rose-200"
                    }`}
                  >
                    {modalTestResult.status === "success" ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                    )}
                    <span>{modalTestResult.message}</span>
                  </div>
                )}
              </div>

              {/* Active Toggle */}
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-800 cursor-pointer pt-2">
                <input
                  type="checkbox"
                  checked={formIsActive}
                  onChange={(e) => setFormIsActive(e.target.checked)}
                  className="rounded text-indigo-600 focus:ring-indigo-500 w-4 h-4 cursor-pointer"
                />
                <span>Enable this configuration for AI Agents and live campaigns</span>
              </label>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md transition-all cursor-pointer"
                >
                  {editingConfig ? "Save Changes" : "Save Configuration"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
