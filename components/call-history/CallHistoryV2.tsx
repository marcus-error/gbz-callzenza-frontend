"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Phone,
  Clock,
  FileText,
  User,
  Bot,
  ArrowUpRight,
  ArrowDownLeft,
  AlertCircle,
  RefreshCw,
  FolderOpen,
  Volume2,
  Download,
} from "lucide-react";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FilterBar } from "./FilterBar";
import { AudioPlayer } from "./AudioPlayer";
import { DownloadMenu } from "./DownloadMenu";
import {
  callHistoryService,
  CallHistoryItem,
  CallHistoryFilters,
} from "@/lib/services/call-history-v2.service";

export const CallHistoryV2: React.FC = () => {
  const searchParams = useSearchParams();

  const [calls, setCalls] = useState<CallHistoryItem[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Coordinated playback: one audio at a time
  const [activePlayerId, setActivePlayerId] = useState<string | null>(null);

  const abortControllerRef = useRef<AbortController | null>(null);

  // Extract filters from current URL search params
  const currentFilters: CallHistoryFilters = {
    campaign_id: searchParams.getAll("campaign_id").filter(Boolean),
    ai_agent_id: searchParams.getAll("ai_agent_id").filter(Boolean),
    human_agent_id: searchParams.getAll("human_agent_id").filter(Boolean),
    status: searchParams.getAll("status").filter(Boolean),
    direction: searchParams.get("direction") || undefined,
    date_from: searchParams.get("date_from") || undefined,
    date_to: searchParams.get("date_to") || undefined,
    has_recording:
      searchParams.get("has_recording") === "true"
        ? true
        : searchParams.get("has_recording") === "false"
        ? false
        : undefined,
    search: searchParams.get("search") || undefined,
  };

  const fetchCalls = useCallback(
    async (cursor?: string, append: boolean = false) => {
      // Abort previous in-flight request to prevent stale overwrite
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      const controller = new AbortController();
      abortControllerRef.current = controller;

      if (!append) {
        setIsLoading(true);
        setError(null);
      } else {
        setIsLoadingMore(true);
      }

      try {
        const filtersWithCursor: CallHistoryFilters = {
          ...currentFilters,
          cursor: cursor || undefined,
          limit: 25,
        };

        const res = await callHistoryService.listCalls(filtersWithCursor, controller.signal);
        if (append) {
          setCalls((prev) => [...prev, ...res.items]);
        } else {
          setCalls(res.items);
        }
        setTotal(res.total);
        setNextCursor(res.next_cursor || null);
        setError(null);
      } catch (err: any) {
        if (err?.name === "AbortError") {
          return; // Ignore normal request cancellation
        }
        console.error("[CallHistoryV2] Error loading calls:", err);
        setError(err?.message || "Failed to load call history");
      } finally {
        setIsLoading(false);
        setIsLoadingMore(false);
      }
    },
    [searchParams]
  );

  useEffect(() => {
    fetchCalls();
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [fetchCalls]);

  const handleLoadMore = () => {
    if (nextCursor && !isLoadingMore) {
      fetchCalls(nextCursor, true);
    }
  };

  const handleQuickDownloadAudio = async (callId: string) => {
    try {
      const data = await callHistoryService.getStreamUrl(callId, 0);
      if (data?.download_url) {
        const link = document.createElement("a");
        link.href = data.download_url;
        link.setAttribute("download", `call_${callId.slice(0, 8)}.wav`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (err) {
      console.error("[CallHistoryV2] Failed to download audio:", err);
    }
  };

  const formatDuration = (seconds: number) => {
    if (!seconds) return "0s";
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
  };

  const getStatusColor = (status: string) => {
    switch (status.toUpperCase()) {
      case "COMPLETED":
      case "CONNECTED":
      case "QUALIFIED":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "FAILED":
      case "BUSY":
      case "NO_ANSWER":
      case "NOT_QUALIFIED":
        return "bg-rose-50 text-rose-700 border-rose-200";
      case "IN_PROGRESS":
      case "ANSWERED":
      case "AI_HANDLING":
      case "HUMAN_HANDLING":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "RINGING":
      case "QUEUED":
      case "TRANSFER_REQUESTED":
        return "bg-amber-50 text-amber-700 border-amber-200";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  return (
    <div className="w-full">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Call History
          </h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Browse previous outbound campaigns and inbound customer calls with verified recordings
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="px-3 py-1 text-xs font-semibold bg-slate-50 text-slate-700 border-slate-200">
            Total Calls: {total}
          </Badge>
          <Button
            variant="outline"
            size="sm"
            onClick={() => fetchCalls()}
            title="Refresh list"
            aria-label="Refresh call history"
            className="h-8 px-2.5 text-xs text-slate-600 hover:text-slate-900"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${isLoading ? "animate-spin" : ""}`} />
          </Button>
        </div>
      </div>

      {/* Filter Bar with URL synchronization & Export Menu */}
      <FilterBar
        filters={currentFilters}
        totalCalls={total}
        onFiltersChange={() => {}}
      />

      {/* Error state */}
      {error && (
        <div className="mb-5 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium">
            <AlertCircle className="h-5 w-5 text-rose-500 flex-shrink-0" />
            <span>{error}</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => fetchCalls()}
            className="text-xs bg-white text-rose-700 border-rose-300 hover:bg-rose-100"
          >
            Try Again
          </Button>
        </div>
      )}

      {/* Loading Skeletons */}
      {isLoading ? (
        <div className="space-y-3">
          {[1, 2, 3, 4].map((n) => (
            <Card key={n} className="p-5 border border-slate-100 animate-pulse bg-white">
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-full bg-slate-100" />
                  <div className="space-y-2">
                    <div className="h-4 w-48 bg-slate-100 rounded" />
                    <div className="h-3 w-64 bg-slate-100 rounded" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-20 bg-slate-100 rounded" />
                  <div className="h-9 w-20 bg-slate-100 rounded" />
                  <div className="h-9 w-24 bg-slate-100 rounded" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : calls.length === 0 ? (
        /* Empty State */
        <Card className="p-12 text-center border-dashed border-2 border-slate-200 bg-white">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 mb-3 text-slate-400">
            <FolderOpen className="h-6 w-6" />
          </div>
          <CardTitle className="text-base font-semibold text-slate-800">
            No calls match these filters
          </CardTitle>
          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
            Try adjusting your search query, clearing active filters, or expanding your date range.
          </p>
        </Card>
      ) : (
        /* Call Cards List */
        <div className="space-y-3">
          {calls.map((call, idx) => (
            <Card
              key={`${call.call_id}-${idx}`}
              className="p-5 flex flex-wrap items-center justify-between gap-4 hover:shadow-md transition-shadow border border-slate-200/80 bg-white rounded-xl"
            >
              <div className="flex items-start gap-4 min-w-[280px]">
                {/* Direction Icon */}
                <div
                  className={`p-3 rounded-full flex-shrink-0 ${
                    call.direction === "OUTBOUND"
                      ? "bg-blue-50 text-blue-600"
                      : "bg-purple-50 text-purple-600"
                  }`}
                >
                  {call.direction === "OUTBOUND" ? (
                    <ArrowUpRight className="h-5 w-5" />
                  ) : (
                    <ArrowDownLeft className="h-5 w-5" />
                  )}
                </div>

                {/* Recipient / Lead & Metadata */}
                <div>
                  <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2">
                    {call.customer_name || "Unknown Recipient"}
                    <span className="text-xs font-normal text-slate-400">
                      ({call.customer_phone || "No phone"})
                    </span>
                  </CardTitle>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5 text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-slate-400" />{" "}
                      {formatDuration(call.duration_seconds)}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="flex items-center gap-1">
                      {call.agent_type === "HUMAN" ? (
                        <User className="h-3.5 w-3.5 text-indigo-500" />
                      ) : (
                        <Bot className="h-3.5 w-3.5 text-cyan-600" />
                      )}
                      {call.human_agent_name || call.ai_agent_name || "AI Voice Agent"}
                    </span>
                    {call.campaign_name && (
                      <>
                        <span className="text-slate-300">•</span>
                        <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px]">
                          {call.campaign_name}
                        </span>
                      </>
                    )}
                    <span className="text-slate-300">•</span>
                    <span>
                      {call.started_at ? new Date(call.started_at).toLocaleString() : "—"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Status Badge, AudioPlayer, DownloadMenu, View Details */}
              <div className="flex items-center gap-2 ml-auto">
                {/* Status Badge */}
                <Badge
                  variant="outline"
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md border ${getStatusColor(
                    call.status
                  )}`}
                >
                  {call.status}
                </Badge>

                {/* Audio Player (Range 206 Streaming) */}
                <AudioPlayer
                  callId={call.call_id}
                  recording={call.recording}
                  activePlayerId={activePlayerId}
                  onPlayStart={(id) => setActivePlayerId(id)}
                  onPlayEnd={() => setActivePlayerId(null)}
                />

                {/* Direct Audio Download Button */}
                {call.recording?.status !== "not_recorded" && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickDownloadAudio(call.call_id)}
                    className="flex items-center gap-1.5 h-9 px-2.5 text-xs font-bold text-indigo-700 bg-indigo-50/70 hover:bg-indigo-100 border-indigo-200 cursor-pointer shadow-xs"
                    title="Download audio recording (WAV)"
                  >
                    <Download className="h-3.5 w-3.5 text-indigo-600" />
                    <span>Download</span>
                  </Button>
                )}

                {/* Per-call Download & Export Menu */}
                <DownloadMenu
                  callId={call.call_id}
                  recording={call.recording}
                />

                {/* View Details Link */}
                <Link href={`/calls/${call.call_id}`}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1 h-9 px-3 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border-slate-200"
                  >
                    <FileText className="h-3.5 w-3.5" /> Details
                  </Button>
                </Link>
              </div>
            </Card>
          ))}

          {/* Keyset Pagination: Load More */}
          {nextCursor && (
            <div className="text-center pt-4">
              <Button
                variant="outline"
                onClick={handleLoadMore}
                disabled={isLoadingMore}
                className="px-6 py-2 text-xs font-semibold text-indigo-600 border-indigo-200 hover:bg-indigo-50"
              >
                {isLoadingMore ? "Loading more calls..." : "Load More Calls"}
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
