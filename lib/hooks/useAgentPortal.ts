"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  agentPortalService,
  PortalAgentItem,
  PortalBlacklistItem,
  PortalVoiceItem,
  PortalQualifiedLeadItem,
  PortalCompletedCallItem,
  PortalRecordingItem,
} from "@/lib/services/agentPortalService";
import {
  AgentDashboardSummary,
  CallsPageResponse,
  CallDetailResponse,
  QueuePageResponse,
  HistoryPageResponse,
  TranscriptsSearchResponse,
  FilterOptionsResponse,
  DashboardFilters,
} from "@/lib/services/aiAgentDashboardService";

export function usePortalAgents(params: {
  search?: string;
  status?: string;
  page?: number;
  pageSize?: number;
} = {}) {
  const [agents, setAgents] = useState<PortalAgentItem[]>([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAgents = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await agentPortalService.listAgents({
        search: params.search,
        status: params.status,
        page: params.page || 1,
        page_size: params.pageSize || 20,
      });
      setAgents(res.items);
      setTotal(res.total);
      setTotalPages(res.total_pages);
    } catch (err: any) {
      if (err.name === "AbortError") return;
      setError(err.message || "Failed to load accessible AI agents.");
    } finally {
      setLoading(false);
    }
  }, [params.search, params.status, params.page, params.pageSize]);

  useEffect(() => {
    fetchAgents();
  }, [fetchAgents]);

  return { agents, total, totalPages, loading, error, refetch: fetchAgents };
}

export type PortalTab =
  | "overview"
  | "calls"
  | "history"
  | "recordings"
  | "transcripts"
  | "queue"
  | "blacklist"
  | "voice"
  | "qualified"
  | "completed";

export function usePortalAgentReport(
  agentId: string,
  filters: DashboardFilters = {},
  activeTab: PortalTab = "overview"
) {
  // Tab data states
  const [summary, setSummary] = useState<AgentDashboardSummary | null>(null);
  const [callsPage, setCallsPage] = useState<CallsPageResponse | null>(null);
  const [queuePage, setQueuePage] = useState<QueuePageResponse | null>(null);
  const [historyPage, setHistoryPage] = useState<HistoryPageResponse | null>(null);
  const [transcriptsResult, setTranscriptsResult] = useState<TranscriptsSearchResponse | null>(null);
  const [recordings, setRecordings] = useState<PortalRecordingItem[]>([]);
  const [blacklist, setBlacklist] = useState<PortalBlacklistItem[]>([]);
  const [voiceCalls, setVoiceCalls] = useState<PortalVoiceItem[]>([]);
  const [qualifiedLeads, setQualifiedLeads] = useState<PortalQualifiedLeadItem[]>([]);
  const [completedCalls, setCompletedCalls] = useState<PortalCompletedCallItem[]>([]);
  const [filterOptions, setFilterOptions] = useState<FilterOptionsResponse | null>(null);

  // Pagination for sub-tabs
  const [tabTotal, setTabTotal] = useState(0);
  const [tabTotalPages, setTabTotalPages] = useState(0);
  const [tabCurrentPage, setTabCurrentPage] = useState(1);

  // Drawer state
  const [selectedCallId, setSelectedCallId] = useState<string | null>(null);
  const [callDetail, setCallDetail] = useState<CallDetailResponse | null>(null);
  const [loadingDetail, setLoadingDetail] = useState(false);

  // Loading & error
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const abortControllerRef = useRef<AbortController | null>(null);

  // Load filter options once per agent
  useEffect(() => {
    if (!agentId) return;
    agentPortalService.getFilterOptions(agentId)
      .then(setFilterOptions)
      .catch(() => {});
  }, [agentId]);

  // Stabilize filters using JSON serialization to avoid infinite re-render loops
  const filtersKey = JSON.stringify(filters || {});
  const filtersRef = useRef(filters);
  useEffect(() => {
    filtersRef.current = filters;
  }, [filtersKey]);

  // Main data loader based on activeTab
  const loadActiveTabData = useCallback(async () => {
    if (!agentId) return;

    // Only abort previous pending request if a new tab or key triggered it
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const controller = new AbortController();
    abortControllerRef.current = controller;

    setLoading(true);
    setError(null);

    const activeFilters = filtersRef.current || {};

    try {
      switch (activeTab) {
        case "overview": {
          const data = await agentPortalService.getOverview(agentId, activeFilters);
          if (!controller.signal.aborted) {
            setSummary(data);
          }
          break;
        }
        case "calls": {
          const data = await agentPortalService.getCalls(agentId, activeFilters);
          if (!controller.signal.aborted) {
            setCallsPage(data);
            setTabTotal(data.total);
            setTabTotalPages(data.total_pages);
          }
          break;
        }
        case "history": {
          const data = await agentPortalService.getHistory(agentId, tabCurrentPage, 20);
          if (!controller.signal.aborted) {
            setHistoryPage(data);
            setTabTotal(data.total);
            setTabTotalPages(data.total_pages);
          }
          break;
        }
        case "recordings": {
          const data = await agentPortalService.getRecordings(agentId, tabCurrentPage, 20);
          if (!controller.signal.aborted) {
            setRecordings(data.items);
            setTabTotal(data.total);
            setTabTotalPages(data.total_pages);
          }
          break;
        }
        case "transcripts": {
          const data = await agentPortalService.getTranscripts(agentId, activeFilters.search || "");
          if (!controller.signal.aborted) {
            setTranscriptsResult(data);
          }
          break;
        }
        case "queue": {
          const data = await agentPortalService.getQueue(agentId, tabCurrentPage, 20, undefined, activeFilters.search);
          if (!controller.signal.aborted) {
            setQueuePage(data);
            setTabTotal(data.total);
            setTabTotalPages(data.total_pages);
          }
          break;
        }
        case "blacklist": {
          const data = await agentPortalService.getBlacklist(agentId, tabCurrentPage, 20, activeFilters.search);
          if (!controller.signal.aborted) {
            setBlacklist(data.items);
            setTabTotal(data.total);
            setTabTotalPages(data.total_pages);
          }
          break;
        }
        case "voice": {
          const data = await agentPortalService.getVoice(agentId, tabCurrentPage, 20);
          if (!controller.signal.aborted) {
            setVoiceCalls(data.items);
            setTabTotal(data.total);
            setTabTotalPages(data.total_pages);
          }
          break;
        }
        case "qualified": {
          const data = await agentPortalService.getQualified(agentId, tabCurrentPage, 20);
          if (!controller.signal.aborted) {
            setQualifiedLeads(data.items);
            setTabTotal(data.total);
            setTabTotalPages(data.total_pages);
          }
          break;
        }
        case "completed": {
          const data = await agentPortalService.getCompleted(agentId, tabCurrentPage, 20);
          if (!controller.signal.aborted) {
            setCompletedCalls(data.items);
            setTabTotal(data.total);
            setTabTotalPages(data.total_pages);
          }
          break;
        }
      }
    } catch (err: any) {
      if (err.name === "AbortError" || controller.signal.aborted) return;
      setError(err.message || "Failed to load report data.");
    } finally {
      if (!controller.signal.aborted) {
        setLoading(false);
      }
    }
  }, [agentId, activeTab, filtersKey, tabCurrentPage]);

  useEffect(() => {
    loadActiveTabData();
    return () => {
      if (abortControllerRef.current) abortControllerRef.current.abort();
    };
  }, [loadActiveTabData]);

  // Load single call detail for drawer
  const openCallDetail = useCallback(async (callId: string) => {
    setSelectedCallId(callId);
    setLoadingDetail(true);
    try {
      const detail = await agentPortalService.getCallDetail(agentId, callId);
      setCallDetail(detail);
    } catch (err: any) {
      console.warn("Call detail load notice:", err);
    } finally {
      setLoadingDetail(false);
    }
  }, [agentId]);

  const closeCallDetail = useCallback(() => {
    setSelectedCallId(null);
    setCallDetail(null);
  }, []);

  return {
    loading,
    error,
    summary,
    callsPage,
    queuePage,
    historyPage,
    transcriptsResult,
    recordings,
    blacklist,
    voiceCalls,
    qualifiedLeads,
    completedCalls,
    filterOptions,
    tabTotal,
    tabTotalPages,
    tabCurrentPage,
    setTabCurrentPage,
    selectedCallId,
    callDetail,
    loadingDetail,
    openCallDetail,
    closeCallDetail,
    refetch: loadActiveTabData,
  };
}
