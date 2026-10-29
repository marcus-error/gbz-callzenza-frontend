"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Headphones, Bluetooth, BluetoothConnected, Volume2, 
  Mic, RefreshCw, Check, CheckCircle2, AlertCircle, Sparkles, Radio
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { telephonyAudioManager } from "@/lib/services/telephony-audio.service";

export interface AudioDeviceInfo {
  deviceId: string;
  label: string;
  kind: MediaDeviceKind;
  isBluetooth?: boolean;
  isHeadphone?: boolean;
}

export function HeadphoneConfigurationCard() {
  const [outputDevices, setOutputDevices] = useState<AudioDeviceInfo[]>([]);
  const [inputDevices, setInputDevices] = useState<AudioDeviceInfo[]>([]);
  const [selectedOutputId, setSelectedOutputId] = useState<string>("default");
  const [selectedInputId, setSelectedInputId] = useState<string>("default");
  const [activeHeadphone, setActiveHeadphone] = useState<AudioDeviceInfo | null>(null);
  const [activeMic, setActiveMic] = useState<AudioDeviceInfo | null>(null);

  const [isScanningBt, setIsScanningBt] = useState<boolean>(false);
  const [btStatusMsg, setBtStatusMsg] = useState<string | null>(null);
  const [needsPermission, setNeedsPermission] = useState<boolean>(false);
  const [activeTestChannel, setActiveTestChannel] = useState<"left" | "right" | "both" | null>(null);
  const [micTesting, setMicTesting] = useState<boolean>(false);
  const [micVolume, setMicVolume] = useState<number>(0);
  const [micBoost, setMicBoost] = useState<number>(() => telephonyAudioManager?.getMicGain() || 2.4);
  const [transcribedText, setTranscribedText] = useState<string>("");
  const [savedSuccess, setSavedSuccess] = useState<string | null>(null);

  const audioContextRef = useRef<AudioContext | null>(null);
  const micStreamRef = useRef<MediaStream | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const testAudioCtxRef = useRef<AudioContext | null>(null);
  const testAudioTimerRef = useRef<any>(null);
  const recognitionRef = useRef<any>(null);

  const isHeadsetLabel = (label: string) => {
    const l = label.toLowerCase();
    return (
      l.includes("headphone") ||
      l.includes("headset") ||
      l.includes("earphone") ||
      l.includes("buds") ||
      l.includes("airpods") ||
      l.includes("bluetooth") ||
      l.includes("wireless") ||
      l.includes("hands-free")
    );
  };

  const isBtLabel = (label: string) => {
    const l = label.toLowerCase();
    return (
      l.includes("bluetooth") ||
      l.includes("bt") ||
      l.includes("hands-free") ||
      l.includes("airpods") ||
      l.includes("buds") ||
      l.includes("wireless")
    );
  };

  const refreshDevices = async () => {
    if (typeof window === "undefined" || !navigator?.mediaDevices?.enumerateDevices) return;

    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      
      const outputs: AudioDeviceInfo[] = [];
      const inputs: AudioDeviceInfo[] = [];
      let hasLabels = false;

      devices.forEach((d) => {
        if (d.label) hasLabels = true;

        const info: AudioDeviceInfo = {
          deviceId: d.deviceId,
          label: d.label || (d.kind === "audiooutput" ? `Speaker / Headphone (${d.deviceId.slice(0, 5)})` : `Microphone (${d.deviceId.slice(0, 5)})`),
          kind: d.kind,
          isBluetooth: isBtLabel(d.label || ""),
          isHeadphone: isHeadsetLabel(d.label || ""),
        };

        if (d.kind === "audiooutput") {
          outputs.push(info);
        } else if (d.kind === "audioinput") {
          inputs.push(info);
        }
      });

      setNeedsPermission(!hasLabels);
      setOutputDevices(outputs);
      setInputDevices(inputs);

      // Find active headphone
      const foundHeadphone = outputs.find((d) => d.isHeadphone) || inputs.find((d) => d.isHeadphone) || null;
      setActiveHeadphone(foundHeadphone);

      const foundMic = inputs.find((d) => d.isHeadphone) || inputs[0] || null;
      setActiveMic(foundMic);

      if (foundHeadphone && selectedOutputId === "default") {
        setSelectedOutputId(foundHeadphone.deviceId);
      }
    } catch (err) {
      console.warn("[HeadphoneConfig] enumerateDevices error:", err);
    }
  };

  const requestAudioPermission = async () => {
    if (typeof window === "undefined" || !navigator?.mediaDevices?.getUserMedia) return;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach((t) => t.stop());
      await refreshDevices();
    } catch (_) {}
  };

  const handleConnectBluetooth = async () => {
    setIsScanningBt(true);
    setBtStatusMsg("Scanning for Bluetooth audio devices...");

    if (typeof window !== "undefined" && (navigator as any).bluetooth?.requestDevice) {
      try {
        const device = await (navigator as any).bluetooth.requestDevice({
          acceptAllDevices: true,
          optionalServices: ["generic_access"],
        });
        if (device && device.name) {
          setBtStatusMsg(`Paired: ${device.name}. Connect audio in Windows Settings.`);
          await refreshDevices();
        }
      } catch (err: any) {
        if (err.name === "NotFoundError") {
          setBtStatusMsg("Bluetooth scan cancelled.");
        } else {
          setBtStatusMsg("Connect your Bluetooth headset via Windows Settings -> Bluetooth & devices.");
        }
      } finally {
        setIsScanningBt(false);
      }
    } else {
      setBtStatusMsg("Connect your Bluetooth headset via Windows Settings -> Bluetooth & devices. It will auto-detect here.");
      setIsScanningBt(false);
      await refreshDevices();
    }
  };

  const stopTestSound = () => {
    setActiveTestChannel(null);
    if (testAudioTimerRef.current) {
      clearTimeout(testAudioTimerRef.current);
      testAudioTimerRef.current = null;
    }
    if (testAudioCtxRef.current) {
      try { testAudioCtxRef.current.close(); } catch (_) {}
      testAudioCtxRef.current = null;
    }
  };

  const handleTestSound = (channel: "left" | "right" | "both" = "both") => {
    if (activeTestChannel === channel) {
      stopTestSound();
      return;
    }

    stopTestSound();

    try {
      setActiveTestChannel(channel);
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      testAudioCtxRef.current = ctx;

      if (selectedOutputId && selectedOutputId !== "default" && typeof (ctx as any).setSinkId === "function") {
        (ctx as any).setSinkId(selectedOutputId).catch(() => {});
      }

      // Create Stereo Panner Node for Left / Right ear channel routing
      let panner: StereoPannerNode | null = null;
      if (typeof ctx.createStereoPanner === "function") {
        panner = ctx.createStereoPanner();
        const panVal = channel === "left" ? -1.0 : channel === "right" ? 1.0 : 0.0;
        panner.pan.setValueAtTime(panVal, ctx.currentTime);
        panner.connect(ctx.destination);
      }

      // Musical chime melody
      const notes = [
        { freq: 261.63, start: 0.0, dur: 0.45 }, // C4
        { freq: 329.63, start: 0.4, dur: 0.45 }, // E4
        { freq: 392.00, start: 0.8, dur: 0.45 }, // G4
        { freq: 523.25, start: 1.2, dur: 0.70 }, // C5
        { freq: 440.00, start: 1.8, dur: 0.45 }, // A4
        { freq: 523.25, start: 2.2, dur: 0.45 }, // C5
        { freq: 659.25, start: 2.6, dur: 0.70 }, // E5
        { freq: 587.33, start: 3.2, dur: 0.45 }, // D5
        { freq: 493.88, start: 3.6, dur: 0.45 }, // B4
        { freq: 523.25, start: 4.0, dur: 1.20 }, // C5
      ];

      const now = ctx.currentTime;
      notes.forEach((n) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(n.freq, now + n.start);

        gain.gain.setValueAtTime(0.0001, now + n.start);
        gain.gain.exponentialRampToValueAtTime(0.14, now + n.start + 0.04);
        gain.gain.setValueAtTime(0.14, now + n.start + n.dur - 0.06);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + n.start + n.dur);

        osc.connect(gain);
        if (panner) {
          gain.connect(panner);
        } else {
          gain.connect(ctx.destination);
        }

        osc.start(now + n.start);
        osc.stop(now + n.start + n.dur);
      });

      testAudioTimerRef.current = setTimeout(() => {
        setActiveTestChannel(null);
        try { ctx.close(); } catch (_) {}
        testAudioCtxRef.current = null;
      }, 5500);
    } catch (_) {
      setActiveTestChannel(null);
    }
  };

  const handleTestMic = async () => {
    if (micTesting) {
      // Stop mic testing
      setMicTesting(false);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (micStreamRef.current) {
        micStreamRef.current.getTracks().forEach((t) => t.stop());
        micStreamRef.current = null;
      }
      if (recognitionRef.current) {
        try { recognitionRef.current.stop(); } catch (_) {}
        recognitionRef.current = null;
      }
      setMicVolume(0);
      return;
    }

    try {
      setMicTesting(true);
      setTranscribedText("");
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: selectedInputId !== "default" ? { deviceId: { exact: selectedInputId } } : true,
      });
      micStreamRef.current = stream;

      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioCtx();
      audioContextRef.current = ctx;

      const source = ctx.createMediaStreamSource(stream);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 256;
      source.connect(analyser);

      const dataArray = new Uint8Array(analyser.frequencyBinCount);

      const updateLevel = () => {
        analyser.getByteFrequencyData(dataArray);
        let sum = 0;
        for (let i = 0; i < dataArray.length; i++) {
          sum += dataArray[i];
        }
        const avg = sum / dataArray.length;
        setMicVolume(Math.min(100, Math.round((avg / 128) * 100)));
        animFrameRef.current = requestAnimationFrame(updateLevel);
      };
      updateLevel();

      // Start Web Speech Recognition to show user's speech in real-time text
      const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRec) {
        const recognition = new SpeechRec();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.onresult = (event: any) => {
          let fullText = "";
          for (let i = 0; i < event.results.length; i++) {
            fullText += event.results[i][0].transcript + " ";
          }
          setTranscribedText(fullText.trim());
        };
        recognition.onerror = () => {};
        try {
          recognition.start();
          recognitionRef.current = recognition;
        } catch (_) {}
      }
    } catch (err) {
      console.warn("Mic test error:", err);
      setMicTesting(false);
    }
  };

  const handleSaveSettings = () => {
    if (telephonyAudioManager) {
      telephonyAudioManager.setMicGain(micBoost);
    }
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("GBZ_mic_gain", micBoost.toString());
      } catch (_) {}
    }
    setSavedSuccess("Headphone & microphone preferences saved successfully!");
    setTimeout(() => setSavedSuccess(null), 3000);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const init = async () => {
      try {
        if (navigator?.mediaDevices?.getUserMedia) {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          stream.getTracks().forEach((t) => t.stop());
        }
      } catch (_) {}
      await refreshDevices();
    };

    init();

    if (navigator?.mediaDevices?.addEventListener) {
      navigator.mediaDevices.addEventListener("devicechange", refreshDevices);
      return () => {
        navigator.mediaDevices.removeEventListener("devicechange", refreshDevices);
        stopTestSound();
        if (micStreamRef.current) {
          micStreamRef.current.getTracks().forEach((t) => t.stop());
        }
        if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      };
    }
  }, []);

  return (
    <Card className="p-6 space-y-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)] rounded-[20px] border-slate-200 max-w-2xl mx-auto w-full">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-indigo-50 rounded-xl text-indigo-600">
            <Headphones className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-extrabold text-sm text-[#1D2433] uppercase tracking-wider">
              Headphones &amp; Audio Devices
            </h2>
            <p className="text-[11px] text-slate-400 font-semibold">
              Agent Headset, Microphone &amp; Bluetooth Connection Settings
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-2.5 h-2.5 rounded-full ${activeHeadphone ? "bg-emerald-500 animate-ping" : "bg-slate-300"}`} />
          <span className={`text-[10px] uppercase font-bold ${activeHeadphone ? "text-emerald-600 font-mono" : "text-slate-400"}`}>
            {activeHeadphone ? "Connected" : "Disconnected"}
          </span>
          <button 
            type="button" 
            onClick={refreshDevices}
            className="p-1.5 text-slate-400 hover:text-indigo-600 rounded-lg hover:bg-slate-50 transition-colors"
            title="Refresh Devices"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {savedSuccess && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold rounded-xl flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{savedSuccess}</span>
        </div>
      )}

      {/* Real-time Connected Device Status Banner */}
      <div className={`p-4 rounded-xl border transition-all ${
        activeHeadphone 
          ? "bg-emerald-50/70 border-emerald-200" 
          : "bg-slate-50 border-slate-200"
      }`}>
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-white shadow-xs border border-slate-100 mt-0.5">
            {activeHeadphone ? (
              activeHeadphone.isBluetooth ? (
                <BluetoothConnected className="w-5 h-5 text-blue-600" />
              ) : (
                <Headphones className="w-5 h-5 text-emerald-600" />
              )
            ) : (
              <Headphones className="w-5 h-5 text-slate-400" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`text-xs font-extrabold uppercase tracking-wider ${
                activeHeadphone ? "text-emerald-800" : "text-slate-500"
              }`}>
                {activeHeadphone ? "Headphones Connected" : "No Headphones Connected"}
              </span>
              {activeHeadphone?.isBluetooth && (
                <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-[10px] font-bold flex items-center gap-1 border border-blue-200">
                  <Bluetooth className="w-3 h-3" /> Bluetooth
                </span>
              )}
            </div>
            <div className="text-sm font-bold text-slate-800 mt-1 truncate">
              {activeHeadphone ? activeHeadphone.label : "Using System Default Speakers"}
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              {activeHeadphone 
                ? "Your calls and audio will be routed through this headset." 
                : "Plug in a 3.5mm jack, USB headset, or connect a Bluetooth headphone. It will be auto-detected in real-time."}
            </p>
          </div>
        </div>
      </div>

      {needsPermission && (
        <button
          type="button"
          onClick={requestAudioPermission}
          className="w-full py-2 px-3 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-xl text-xs text-indigo-700 font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>Enable Microphone Permission to Show Exact Device Names</span>
        </button>
      )}

      {/* Bluetooth Connection Option */}
      <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/40 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bluetooth className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-extrabold text-blue-900 uppercase tracking-wider">Bluetooth Device Option</span>
          </div>
          <Button
            type="button"
            size="sm"
            onClick={handleConnectBluetooth}
            disabled={isScanningBt}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold gap-1.5 h-8"
          >
            <Bluetooth className="w-3.5 h-3.5" />
            <span>{isScanningBt ? "Scanning..." : "Pair Bluetooth Device"}</span>
          </Button>
        </div>
        <p className="text-xs text-blue-800/80">
          Connect your wireless Bluetooth headphones or earbuds. Once paired with your computer, they will appear here automatically.
        </p>
        {btStatusMsg && (
          <div className="text-xs text-blue-900 bg-white/80 p-2 rounded-lg border border-blue-200 mt-1 font-medium">
            {btStatusMsg}
          </div>
        )}
      </div>

      {/* Audio Output / Headphone Selector */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
            <Volume2 className="w-3.5 h-3.5 text-indigo-600" />
            <span>Headphone / Audio Output Device</span>
          </label>
        </div>
        <select
          value={selectedOutputId}
          onChange={(e) => {
            setSelectedOutputId(e.target.value);
            const found = outputDevices.find((d) => d.deviceId === e.target.value);
            if (found) {
              setActiveHeadphone(found.isHeadphone ? found : null);
            }
          }}
          className="w-full h-11 bg-slate-50 border border-slate-200 text-slate-800 text-xs font-semibold rounded-xl px-3 focus:outline-none focus:border-indigo-500 truncate"
        >
          {outputDevices.map((d, i) => (
            <option key={d.deviceId || i} value={d.deviceId}>
              {d.isBluetooth ? "🔵 " : d.isHeadphone ? "🎧 " : "🔊 "}
              {d.label || `Audio Output ${i + 1}`}
            </option>
          ))}
        </select>

        {/* Headphone Audio Channel Testing: Left Test, Both Ears, Right Test */}
        <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
              <Headphones className="w-3.5 h-3.5 text-indigo-600" />
              <span>Headphone Channel Audio Test:</span>
            </span>
            {activeTestChannel && (
              <span className="text-[10px] font-bold font-mono text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Playing {activeTestChannel.toUpperCase()} Channel
              </span>
            )}
          </div>

          <div className="grid grid-cols-3 gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => handleTestSound("left")}
              className={`h-9 text-xs font-bold rounded-xl transition-all border ${
                activeTestChannel === "left"
                  ? "bg-indigo-600 text-white border-indigo-700 shadow-sm hover:bg-indigo-700"
                  : "bg-white text-slate-700 hover:bg-slate-100 border-slate-200"
              }`}
            >
              <span className="mr-1">◀</span>
              <span>{activeTestChannel === "left" ? "Stop Left" : "Left Test"}</span>
            </Button>

            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => handleTestSound("both")}
              className={`h-9 text-xs font-bold rounded-xl transition-all border ${
                activeTestChannel === "both"
                  ? "bg-emerald-600 text-white border-emerald-700 shadow-sm hover:bg-emerald-700"
                  : "bg-white text-slate-700 hover:bg-slate-100 border-slate-200"
              }`}
            >
              <span>{activeTestChannel === "both" ? "Stop Both" : "Both Ears"}</span>
            </Button>

            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => handleTestSound("right")}
              className={`h-9 text-xs font-bold rounded-xl transition-all border ${
                activeTestChannel === "right"
                  ? "bg-indigo-600 text-white border-indigo-700 shadow-sm hover:bg-indigo-700"
                  : "bg-white text-slate-700 hover:bg-slate-100 border-slate-200"
              }`}
            >
              <span>{activeTestChannel === "right" ? "Stop Right" : "Right Test"}</span>
              <span className="ml-1">▶</span>
            </Button>
          </div>

          {activeTestChannel && (
            <p className="text-[11px] text-center font-semibold text-indigo-700 bg-indigo-50/80 p-2 rounded-lg border border-indigo-100 animate-pulse">
              {activeTestChannel === "left" && "◀ Audio is playing in LEFT earphone only. Check your left ear!"}
              {activeTestChannel === "right" && "▶ Audio is playing in RIGHT earphone only. Check your right ear!"}
              {activeTestChannel === "both" && "Audio is playing in BOTH earphones."}
            </p>
          )}
        </div>
      </div>

      {/* Microphone / Audio Input Selector */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
            <Mic className="w-3.5 h-3.5 text-indigo-600" />
            <span>Microphone / Headset Input</span>
          </label>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleTestMic}
            className={`text-xs font-bold h-7 gap-1 border-slate-200 ${micTesting ? "bg-rose-50 text-rose-600 border-rose-200" : "hover:bg-slate-50"}`}
          >
            <Mic className={`w-3.5 h-3.5 ${micTesting ? "animate-pulse text-rose-500" : "text-slate-500"}`} />
            <span>{micTesting ? "Stop Mic Test" : "Test Microphone & Voice"}</span>
          </Button>
        </div>
        <select
          value={selectedInputId}
          onChange={(e) => setSelectedInputId(e.target.value)}
          className="w-full h-11 bg-slate-50 border border-slate-200 text-slate-800 text-xs font-semibold rounded-xl px-3 focus:outline-none focus:border-indigo-500 truncate"
        >
          {inputDevices.map((d, i) => (
            <option key={d.deviceId || i} value={d.deviceId}>
              🎙️ {d.label || `Microphone ${i + 1}`}
            </option>
          ))}
        </select>

        {/* Microphone Speech & Loudness Boost Slider */}
        <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
              <Mic className="w-3.5 h-3.5 text-indigo-600" />
              <span>Microphone Volume & Speech Boost</span>
            </span>
            <span className="text-xs font-black font-mono text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-200">
              {micBoost.toFixed(1)}x ({Math.round(20 * Math.log10(micBoost))} dB)
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-semibold text-slate-400">Normal (1.0x)</span>
            <input
              type="range"
              min="1.0"
              max="4.0"
              step="0.1"
              value={micBoost}
              onChange={(e) => {
                const val = parseFloat(e.target.value);
                setMicBoost(val);
                telephonyAudioManager?.setMicGain(val);
              }}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <span className="text-[10px] font-semibold text-slate-600 font-mono">Max (4.0x)</span>
          </div>
          <p className="text-[10px] text-slate-500">
            Increases your voice volume to the customer and other agents during calls, especially when using a built-in laptop mic or distant headset.
          </p>
        </div>

        {micTesting && (
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 animate-in fade-in">
            <div className="space-y-1">
              <div className="flex items-center justify-between text-[11px] font-bold text-slate-600">
                <span>Microphone Signal Level:</span>
                <span className="font-mono text-indigo-600">{micVolume}%</span>
              </div>
              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-emerald-500 transition-all duration-75 rounded-full"
                  style={{ width: `${micVolume}%` }}
                />
              </div>
            </div>

            {/* Live Speech to Text Recognition */}
            <div className="p-3 bg-white border border-indigo-100 rounded-xl space-y-1.5 shadow-2xs">
              <div className="flex items-center justify-between text-[11px] font-bold">
                <span className="flex items-center gap-1.5 text-indigo-700">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-500 animate-pulse" />
                  Live Speech-to-Text Recognition (Speak now):
                </span>
                <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-mono font-bold">
                  ● Listening to Headset Mic
                </span>
              </div>
              <div className="min-h-[44px] p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 break-words flex items-center">
                {transcribedText ? (
                  <span className="text-slate-900 font-bold text-sm">"{transcribedText}"</span>
                ) : (
                  <span className="text-slate-400 italic">
                    Speak into your headset microphone now... What you say will appear here in text!
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Save Button */}
      <div className="pt-2 border-t border-slate-100 flex items-center justify-end gap-3">
        <Button
          type="button"
          onClick={handleSaveSettings}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl px-5 text-xs uppercase tracking-wider shadow-sm"
        >
          Save Audio Preferences
        </Button>
      </div>
    </Card>
  );
}
