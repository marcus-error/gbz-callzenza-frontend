"use client";

import React, { useEffect, useRef, useState } from "react";
import { Play, Pause, RotateCcw, Volume2, VolumeX, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { callHistoryService, RecordingInfo } from "@/lib/services/call-history-v2.service";

interface AudioPlayerProps {
  callId: string;
  recording: RecordingInfo;
  activePlayerId: string | null;
  onPlayStart: (id: string) => void;
  onPlayEnd: () => void;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  callId,
  recording,
  activePlayerId,
  onPlayStart,
  onPlayEnd,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [streamUrl, setStreamUrl] = useState<string | null>(null);
  const [tokenExpiry, setTokenExpiry] = useState<number>(0);
  const [activeSegment, setActiveSegment] = useState(0);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isActive = activePlayerId === callId;

  // When another player starts, stop this one
  useEffect(() => {
    if (!isActive && isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
      setShowControls(false);
    }
  }, [isActive, isPlaying]);

  const fetchStreamUrl = async (segIdx: number = 0): Promise<string | null> => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await callHistoryService.getStreamUrl(callId, segIdx);
      setStreamUrl(data.stream_url);
      setTokenExpiry(Date.now() + (data.expires_in_seconds - 15) * 1000);
      return data.stream_url;
    } catch (err: any) {
      setError(err?.message || "Failed to load audio");
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const handleTogglePlay = async () => {
    if (recording.status === "not_recorded" || recording.status === "failed") {
      return;
    }

    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
      return;
    }

    onPlayStart(callId);
    setShowControls(true);

    let urlToPlay = streamUrl;
    // Check if token is expired or not loaded
    if (!urlToPlay || Date.now() > tokenExpiry) {
      urlToPlay = await fetchStreamUrl(activeSegment);
      if (!urlToPlay) return;
    }

    if (audioRef.current) {
      audioRef.current.src = urlToPlay;
      audioRef.current.playbackRate = playbackRate;
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err: any) {
        console.warn("[AudioPlayer] Autoplay error, refreshing token:", err);
        const refreshedUrl = await fetchStreamUrl(activeSegment);
        if (refreshedUrl && audioRef.current) {
          audioRef.current.src = refreshedUrl;
          await audioRef.current.play();
          setIsPlaying(true);
        }
      }
    }
  };

  const handleSegmentChange = async (segIdx: number) => {
    setActiveSegment(segIdx);
    setCurrentTime(0);
    const url = await fetchStreamUrl(segIdx);
    if (url && audioRef.current) {
      audioRef.current.src = url;
      if (isPlaying) {
        audioRef.current.play().catch(console.error);
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

  if (recording.status === "not_recorded") {
    return (
      <Button
        variant="outline"
        size="sm"
        disabled
        className="h-9 font-medium text-xs opacity-50 cursor-not-allowed bg-gray-50 text-gray-400 border-gray-200"
        title="No recording available for this call"
        aria-label="No recording available"
      >
        <Play className="h-3.5 w-3.5 mr-1" /> No Audio
      </Button>
    );
  }

  const hasMultipleSegments = recording.segments && recording.segments.length > 1;

  return (
    <div className="flex flex-col gap-1.5 items-end">
      {/* Hidden audio element */}
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
          console.warn("[AudioPlayer] Stream playback error:", e);
          setIsPlaying(false);
          setError("Playback error");
        }}
      />

      <div className="flex items-center gap-2">
        {recording.is_synthetic && (
          <span
            className="text-[10px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200"
            title="Synthetic AI voice replay of transcript"
          >
            AI Replay
          </span>
        )}

        <Button
          variant="outline"
          size="sm"
          onClick={handleTogglePlay}
          disabled={isLoading}
          aria-label={isPlaying ? "Pause recording" : "Play recording"}
          className={`flex items-center gap-1.5 h-9 font-bold text-xs cursor-pointer transition-all ${
            isPlaying
              ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm"
              : "text-indigo-600 bg-indigo-50/60 hover:bg-indigo-100 border-indigo-200"
          }`}
        >
          {isLoading ? (
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
          ) : isPlaying ? (
            <Pause className="h-3.5 w-3.5 animate-pulse" />
          ) : (
            <Play className="h-3.5 w-3.5" />
          )}
          {isLoading ? "Loading..." : isPlaying ? "Playing" : "Listen"}
        </Button>
      </div>

      {/* Expanded Inline Player Controls */}
      {showControls && isActive && (
        <div
          role="region"
          aria-label="Audio player controls"
          className="w-72 p-2.5 bg-slate-900 text-slate-100 rounded-lg shadow-xl text-xs space-y-2 border border-slate-700 animate-in fade-in zoom-in-95 duration-150"
        >
          {hasMultipleSegments && (
            <div className="flex items-center gap-1.5 mb-1 pb-1.5 border-b border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase font-semibold">Segment:</span>
              {recording.segments.map((seg, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSegmentChange(idx)}
                  className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                    activeSegment === idx
                      ? "bg-indigo-500 text-white"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  Part {idx + 1}
                </button>
              ))}
            </div>
          )}

          {error ? (
            <div className="flex items-center justify-between text-rose-400 text-[11px]">
              <span className="flex items-center gap-1">
                <AlertCircle className="h-3 w-3" /> {error}
              </span>
              <button
                onClick={() => fetchStreamUrl(activeSegment)}
                className="underline hover:text-rose-300 ml-2"
              >
                Retry
              </button>
            </div>
          ) : (
            <>
              {/* Seek Slider */}
              <div className="space-y-1">
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  step="0.1"
                  value={currentTime}
                  onChange={handleSeek}
                  aria-label="Seek time"
                  className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (audioRef.current) audioRef.current.currentTime = Math.max(0, currentTime - 5);
                    }}
                    title="Rewind 5s"
                    aria-label="Rewind 5 seconds"
                    className="p-1 hover:text-indigo-400 text-slate-300 transition-colors"
                  >
                    <RotateCcw className="h-3 w-3" />
                  </button>

                  <button
                    onClick={cyclePlaybackRate}
                    title="Speed"
                    aria-label="Playback speed"
                    className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 font-bold text-[10px] text-slate-200"
                  >
                    {playbackRate}x
                  </button>

                  <button
                    onClick={toggleMute}
                    title={isMuted ? "Unmute" : "Mute"}
                    aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                    className="p-1 hover:text-indigo-400 text-slate-300 transition-colors"
                  >
                    {isMuted ? <VolumeX className="h-3.5 w-3.5 text-rose-400" /> : <Volume2 className="h-3.5 w-3.5" />}
                  </button>
                </div>

                <div className="text-[10px] text-slate-400">
                  {recording.is_synthetic ? "AI Voice" : "Real Audio (206 Stream)"}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
