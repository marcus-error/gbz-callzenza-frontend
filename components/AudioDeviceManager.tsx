"use client";

import React, { useState, useEffect } from "react";
import { Headphones, Bluetooth, BluetoothConnected } from "lucide-react";
import { telephonyAudioManager } from "@/lib/services/telephony-audio.service";

export function AudioDeviceManager({ compact = false }: { compact?: boolean }) {
  const [connectedDevice, setConnectedDevice] = useState<string | null>(null);
  const [isBluetooth, setIsBluetooth] = useState<boolean>(false);
  const [isScanningBt, setIsScanningBt] = useState<boolean>(false);

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

  const updateDevices = async () => {
    if (typeof window === "undefined" || !navigator?.mediaDevices?.enumerateDevices) return;

    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      
      // Look for connected headphone/bluetooth in outputs and inputs
      const found = devices.find(
        (d) => d.label && isHeadsetLabel(d.label)
      );

      if (found && found.label) {
        // Clean up device name (e.g. remove "Default - " prefix if present)
        const name = found.label.replace(/^Default\s*-\s*/i, "").trim();
        setConnectedDevice(name);
        setIsBluetooth(isBtLabel(found.label));
        if (telephonyAudioManager) {
          if (found.kind === "audiooutput" && found.deviceId) {
            telephonyAudioManager.setAudioOutputDevice(found.deviceId);
          } else {
            telephonyAudioManager.autoDetectHeadsetDevices();
          }
        }
      } else {
        // Check if any audio device has a specific label indicating external audio device
        const externalAudio = devices.find(
          (d) => d.label && (d.kind === "audiooutput" || d.kind === "audioinput") && isHeadsetLabel(d.label)
        );
        if (externalAudio && externalAudio.label) {
          setConnectedDevice(externalAudio.label.replace(/^Default\s*-\s*/i, "").trim());
          setIsBluetooth(isBtLabel(externalAudio.label));
          if (telephonyAudioManager && externalAudio.deviceId) {
            if (externalAudio.kind === "audiooutput") {
              telephonyAudioManager.setAudioOutputDevice(externalAudio.deviceId);
            } else {
              telephonyAudioManager.autoDetectHeadsetDevices();
            }
          }
        } else {
          setConnectedDevice(null);
          setIsBluetooth(false);
          telephonyAudioManager?.setAudioOutputDevice("default");
        }
      }
    } catch (_) {}
  };

  // Auto-request audio permission once on mount so device labels are automatically visible
  useEffect(() => {
    if (typeof window === "undefined") return;

    const init = async () => {
      try {
        if (navigator?.mediaDevices?.getUserMedia) {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          stream.getTracks().forEach((t) => t.stop());
        }
      } catch (_) {}
      await updateDevices();
    };

    init();

    if (navigator?.mediaDevices?.addEventListener) {
      navigator.mediaDevices.addEventListener("devicechange", updateDevices);
      return () => {
        navigator.mediaDevices.removeEventListener("devicechange", updateDevices);
      };
    }
  }, []);

  const handlePairBluetooth = async () => {
    setIsScanningBt(true);
    if (typeof window !== "undefined" && (navigator as any).bluetooth?.requestDevice) {
      try {
        const device = await (navigator as any).bluetooth.requestDevice({
          acceptAllDevices: true,
          optionalServices: ["generic_access"],
        });
        if (device && device.name) {
          setConnectedDevice(device.name);
          setIsBluetooth(true);
        }
      } catch (_) {}
    }
    setIsScanningBt(false);
    await updateDevices();
  };

  // Compact Header / Pill Version
  if (compact) {
    return (
      <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-800/80 border border-slate-700/60 rounded-full text-xs font-medium text-slate-300">
        {connectedDevice ? (
          <>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {isBluetooth ? (
              <BluetoothConnected className="w-3.5 h-3.5 text-blue-400" />
            ) : (
              <Headphones className="w-3.5 h-3.5 text-emerald-400" />
            )}
            <span className="text-emerald-300 font-semibold text-[11px] truncate max-w-[140px]">
              {connectedDevice}
            </span>
          </>
        ) : (
          <>
            <Headphones className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-400 text-[11px]">No Headphones</span>
          </>
        )}
      </div>
    );
  }

  // Dial Control Panel Version: Sleek single bar that shows device name when connected
  return (
    <div className="px-4 py-2.5 bg-slate-950/70 border-b border-indigo-900/40 flex items-center justify-between gap-2">
      <div className="flex items-center gap-2 min-w-0 flex-1">
        {connectedDevice ? (
          <>
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            {isBluetooth ? (
              <BluetoothConnected className="w-4 h-4 text-blue-400 shrink-0" />
            ) : (
              <Headphones className="w-4 h-4 text-emerald-400 shrink-0" />
            )}
            <div className="min-w-0 truncate">
              <span className="text-emerald-400 font-bold text-xs truncate block">
                {connectedDevice}
              </span>
              <span className="text-[10px] text-emerald-400/70 font-mono block leading-none">
                {isBluetooth ? "Bluetooth Connected" : "Headphone Connected"}
              </span>
            </div>
          </>
        ) : (
          <>
            <Headphones className="w-4 h-4 text-slate-500 shrink-0" />
            <div className="min-w-0 truncate">
              <span className="text-slate-400 font-medium text-xs block">
                No Headphones Connected
              </span>
              <span className="text-[10px] text-slate-500 font-mono block leading-none">
                Plug in 3.5mm, USB, or Bluetooth
              </span>
            </div>
          </>
        )}
      </div>

      {/* Bluetooth Device Option Button */}
      <button
        type="button"
        onClick={handlePairBluetooth}
        disabled={isScanningBt}
        className="shrink-0 flex items-center gap-1 px-2 py-1 bg-blue-950/40 hover:bg-blue-900/50 text-blue-300 border border-blue-800/40 rounded text-[11px] font-bold transition-colors cursor-pointer"
        title="Bluetooth Device Option"
      >
        <Bluetooth className={`w-3 h-3 text-blue-400 ${isScanningBt ? "animate-pulse" : ""}`} />
        <span>Bluetooth</span>
      </button>
    </div>
  );
}

export default AudioDeviceManager;
