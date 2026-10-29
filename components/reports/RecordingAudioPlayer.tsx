"use client";

import React, { useEffect, useRef, useState } from "react";
import { Play, Pause, RotateCcw, Volume2, VolumeX, AlertCircle, Loader2, Clock, Download } from "lucide-react";
import { useAuthStore } from "@/lib/store";

interface RecordingAudioPlayerProps {
  recordingId: string;
  streamUrl: string;
  isExpired: boolean;
  recordingStatus: string;
  activePlayerId: string | null;
  onPlayStart: (id: string) => void;
  onPlayEnd: () => void;
}

export const RecordingAudioPlayer: React.FC<RecordingAudioPlayerProps> = ({
  recordingId,
  streamUrl,
  isExpired,
  recordingStatus,
  activePlayerId,
  onPlayStart,
  onPlayEnd,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isActive = activePlayerId === recordingId;
  const token = useAuthStore((s) => s.token);

  const handleDownload = async () => {
    if (!streamUrl || isExpired || recordingStatus === "expired" || recordingStatus === "deleted") {
      return;
    }
    setIsDownloading(true);
    try {
      const downloadEndpoint = streamUrl.replace("/stream", "/download");
      const sep = downloadEndpoint.includes("?") ? "&" : "?";
      const finalUrl = `${downloadEndpoint}${sep}download=1${token ? `&token=${encodeURIComponent(token)}` : ""}`;

      const res = await fetch(finalUrl);
      if (!res.ok) throw new Error("Download failed");
      const blob = await res.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = `recording_${recordingId.slice(0, 8)}.wav`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.warn("[RecordingAudioPlayer] Fetch download fallback:", err);
      const downloadEndpoint = streamUrl.replace("/stream", "/download");
      const sep = downloadEndpoint.includes("?") ? "&" : "?";
      window.open(`${downloadEndpoint}${sep}download=1${token ? `&token=${encodeURIComponent(token)}` : ""}`, "_blank");
    } finally {
      setIsDownloading(false);
    }
  };

  // Stop playback when another player is activated
  useEffect(() => {
    if (!isActive && isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
      setShowControls(false);
    }
  }, [isActive, isPlaying]);

  const authenticatedStreamUrl = React.useMemo(() => {
    if (!streamUrl) return "";
    const sep = streamUrl.includes("?") ? "&" : "?";
    return token ? `${streamUrl}${sep}token=${encodeURIComponent(token)}` : streamUrl;
  }, [streamUrl, token]);

  const handleTogglePlay = async () => {
    if (isExpired || recordingStatus === "expired" || recordingStatus === "deleted") {
      return;
    }

    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
      return;
    }

    onPlayStart(recordingId);
    setShowControls(true);
    setIsLoading(true);
    setError(null);

    if (audioRef.current) {
      audioRef.current.src = authenticatedStreamUrl;
      audioRef.current.playbackRate = playbackRate;
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err: any) {
        console.warn("[RecordingAudioPlayer] Playback failed:", err);
        setError("Unable to stream audio. File may be unavailable or expired.");
        setIsPlaying(false);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const cyclePlaybackRate = () => {
    const rates = [1, 1.25, 1.5, 2, 0.75];
    const nextIdx = (rates.indexOf(playbackRate) + 1) % rates.length;
    const nextRate = rates[nextIdx];
    setPlaybackRate(nextRate);
    if (audioRef.current) {
      audioRef.current.playbackRate = nextRate;
    }
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (audioRef.current) {
      audioRef.current.muted = nextMuted;
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  // State: Expired or Deleted
  if (isExpired || recordingStatus === "expired" || recordingStatus === "deleted") {
    return (
      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-400 text-xs font-medium border border-slate-200 cursor-not-allowed">
        <Clock className="w-3.5 h-3.5 text-slate-400" />
        <span>{recordingStatus === "deleted" ? "Deleted" : "Expired (24h)"}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1.5 items-end relative">
      <audio
        ref={audioRef}
        preload="none"
        onTimeUpdate={() => audioRef.current && setCurrentTime(audioRef.current.currentTime)}
        onLoadedMetadata={() => audioRef.current && setDuration(audioRef.current.duration)}
        onEnded={() => {
          setIsPlaying(false);
          setCurrentTime(0);
          onPlayEnd();
        }}
        onError={(e) => {
          console.warn("[AudioPlayer] Error event:", e);
          setIsPlaying(false);
          setIsLoading(false);
          setError("Stream unavailable or expired");
        }}
      />

      <button
        onClick={handleTogglePlay}
        disabled={isLoading}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-2xs ${
          isPlaying
            ? "bg-indigo-600 text-white hover:bg-indigo-700 ring-2 ring-indigo-200"
            : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200/80"
        }`}
        title={isPlaying ? "Pause recording" : "Listen to call recording"}
      >
        {isLoading ? (
          <Loader2 className="w-3.5 h-3.5 animate-spin" />
        ) : isPlaying ? (
          <Pause className="w-3.5 h-3.5 animate-pulse" />
        ) : (
          <Play className="w-3.5 h-3.5 fill-current" />
        )}
        <span>{isLoading ? "Loading" : isPlaying ? "Playing" : "Listen"}</span>
      </button>

      {/* Floating Audio Controls Overlay */}
      {showControls && isActive && (
        <div className="absolute right-0 top-10 z-30 w-72 p-3 bg-slate-900 text-slate-100 rounded-xl shadow-2xl border border-slate-700 text-xs space-y-2 animate-in fade-in zoom-in-95 duration-150">
          {error ? (
            <div className="flex items-center justify-between text-rose-400 text-[11px]">
              <span className="flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {error}
              </span>
              <button
                onClick={handleTogglePlay}
                className="underline hover:text-rose-300 ml-2"
              >
                Retry
              </button>
            </div>
          ) : (
            <>
              {/* Seek Bar */}
              <div className="space-y-1">
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  step="0.1"
                  value={currentTime}
                  onChange={handleSeek}
                  aria-label="Seek audio"
                  className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-400"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Controls bar */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (audioRef.current) {
                        audioRef.current.currentTime = Math.max(0, currentTime - 5);
                      }
                    }}
                    title="Rewind 5s"
                    className="p-1 hover:text-indigo-400 text-slate-300 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={cyclePlaybackRate}
                    title="Change speed"
                    className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 font-bold text-[10px] text-slate-200"
                  >
                    {playbackRate}x
                  </button>

                  <button
                    onClick={toggleMute}
                    title={isMuted ? "Unmute" : "Mute"}
                    className="p-1 hover:text-indigo-400 text-slate-300 transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5 text-rose-400" /> : <Volume2 className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={handleDownload}
                    disabled={isDownloading}
                    title="Download audio recording (.wav)"
                    className="p-1 hover:text-emerald-400 text-slate-300 transition-colors"
                  >
                    {isDownloading ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-emerald-400" />
                    ) : (
                      <Download className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <span className="text-[10px] text-slate-400 font-mono">
                  Range Stream
                </span>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
