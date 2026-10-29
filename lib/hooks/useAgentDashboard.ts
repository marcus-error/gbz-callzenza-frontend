"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import {
  aiAgentDashboardService,
  AgentDashboardSummary,
  CallsPageResponse,
  QueuePageResponse,
  HistoryPageResponse,
  ReportsResponse,
  FilterParams,
  FilterOptionsResponse,
  TranscriptsSearchResponse,
} from "@/lib/services/aiAgentDashboardService";

export type DashboardTab = "overview" | "calls" | "queue" | "history" | "reports" | "transcripts";

export interface FilterState {
  date_range: string;
  start_date?: string;
  end_date?: string;
  date_from?: string;
  date_to?: string;
  status: string;
  outcome: string;
  source: string;
  min_duration?: number;
  max_duration?: number;
  sentiment: string;
  retry_count?: number;
  search: string;
  sort_by: string;
  sort_dir: string;
  page: number;
  page_size: number;
  granularity: string;
}

const DEFAULT_FILTERS: FilterState = {
  date_range: "last_7_days",
  status: "ALL",
  outcome: "ALL",
  source: "ALL",
  sentiment: "ALL",
  search: "",
  sort_by: "created_at",
  sort_dir: "desc",
  page: 1,
  page_size: 20,
  granularity: "day",
};

export function useAgentDashboard(agentId: string) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialize filters from URL query parameters
  const [filters, setFilters] = useState<FilterState>(() => {
    return {
      date_range: searchParams.get("date_range") || DEFAULT_FILTERS.date_range,
      start_date: searchParams.get("start_date") || undefined,
      end_date: searchParams.get("end_date") || undefined,
      status: searchParams.get("status") || DEFAULT_FILTERS.status,
      outcome: searchParams.get("outcome") || DEFAULT_FILTERS.outcome,
      source: searchParams.get("source") || DEFAULT_FILTERS.source,
      min_duration: searchParams.get("min_duration") ? Number(searchParams.get("min_duration")) : undefined,
      max_duration: searchParams.get("max_duration") ? Number(searchParams.get("max_duration")) : undefined,
      sentiment: searchParams.get("sentiment") || DEFAULT_FILTERS.sentiment,
      retry_count: searchParams.get("retry_count") ? Number(searchParams.get("retry_count")) : undefined,
      search: searchParams.get("search") || DEFAULT_FILTERS.search,
      sort_by: searchParams.get("sort_by") || DEFAULT_FILTERS.sort_by,
      sort_dir: searchParams.get("sort_dir") || DEFAULT_FILTERS.sort_dir,
      page: searchParams.get("page") ? Number(searchParams.get("page")) : DEFAULT_FILTERS.page,
      page_size: searchParams.get("page_size") ? Number(searchParams.get("page_size")) : DEFAULT_FILTERS.page_size,
      granularity: searchParams.get("granularity") || DEFAULT_FILTERS.granularity,
    };
  });

  const [activeTab, setActiveTab] = useState<DashboardTab>(() => {
    const t = searchParams.get("tab") as DashboardTab;
    return ["overview", "calls", "queue", "history", "reports", "transcripts"].includes(t)
      ? t
      : "overview";
  });

  const [autoRefreshInterval, setAutoRefreshInterval] = useState<number>(0); // 0 = off, 15, 30, 60

  // Data states
  const [summary, setSummary] = useState<AgentDashboardSummary | null>(null);
  const [callsData, setCallsData] = useState<CallsPageResponse | null>(null);
  const [queueData, setQueueData] = useState<QueuePageResponse | null>(null);
  const [historyData, setHistoryData] = useState<HistoryPageResponse | null>(null);
  const [reportsData, setReportsData] = useState<ReportsResponse | null>(null);

  // Loading states
  const [loadingSummary, setLoadingSummary] = useState<boolean>(true);
  const [loadingTab, setLoadingTab] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Abort controller ref to cancel in-flight requests on rapid filter changes
  const abortControllerRef = useRef<AbortController | null>(null);

  // Sync state back to URL query params
  useEffect(() => {
    const params = new URLSearchParams();
    params.set("tab", activeTab);

    if (filters.date_range && filters.date_range !== DEFAULT_FILTERS.date_range) {
      params.set("date_range", filters.date_range);
    }
    if (filters.status && filters.status !== "ALL") params.set("status", filters.status);
    if (filters.outcome && filters.outcome !== "ALL") params.set("outcome", filters.outcome);
    if (filters.sentiment && filters.sentiment !== "ALL") params.set("sentiment", filters.sentiment);
    if (filters.source && filters.source !== "ALL") params.set("source", filters.source);
    if (filters.search) params.set("search", filters.search);
    if (filters.page > 1) params.set("page", String(filters.page));
    if (filters.granularity && filters.granularity !== "day") params.set("granularity", filters.granularity);

    const newUrl = `${pathname}?${params.toString()}`;
    window.history.replaceState(null, "", newUrl);
  }, [filters, activeTab, pathname]);

  // Fetch Summary data
  const fetchSummary = useCallback(
    async (signal?: AbortSignal) => {
      try {
        setError(null);
        const data = await aiAgentDashboardService.getSummary(
          agentId,
          {
            date_range: filters.date_range,
            start_date: filters.start_date,
            end_date: filters.end_date,
          },
          signal
        );
        setSummary(data);
      } catch (err: any) {
        if (err.name === "AbortError") return;
        setError(err.message || "Failed to load agent summary.");
      } finally {
        setLoadingSummary(false);
      }
    },
    [agentId, filters.date_range, filters.start_date, filters.end_date]
  );

  const [filterOptions, setFilterOptions] = useState<FilterOptionsResponse | null>(null);
  const [transcriptsData, setTranscriptsData] = useState<TranscriptsSearchResponse | null>(null);

  // Fetch filter options once
  useEffect(() => {
    if (!agentId) return;
    aiAgentDashboardService.getFilterOptions(agentId)
      .then(setFilterOptions)
      .catch((e) => console.warn("[useAgentDashboard] filter options warn:", e));
  }, [agentId]);

  // Fetch active tab specific data
  const fetchTabData = useCallback(
    async (signal?: AbortSignal) => {
      setLoadingTab(true);
      try {
        if (activeTab === "overview") {
          // Summary covers overview
        } else if (activeTab === "calls") {
          const res = await aiAgentDashboardService.getCalls(agentId, filters, signal);
          setCallsData(res);
        } else if (activeTab === "transcripts") {
          const resCalls = await aiAgentDashboardService.getCalls(agentId, filters, signal);
          setCallsData(resCalls);
          if (filters.search) {
            const resSearch = await aiAgentDashboardService.searchTranscripts(agentId, filters.search, signal);
            setTranscriptsData(resSearch);
          } else {
            setTranscriptsData(null);
          }
        } else if (activeTab === "queue") {
          const res = await aiAgentDashboardService.getQueue(
            agentId,
            {
              page: filters.page,
              page_size: filters.page_size,
              status: filters.status,
              search: filters.search,
            },
            signal
          );
          setQueueData(res);
        } else if (activeTab === "history") {
          const res = await aiAgentDashboardService.getHistory(
            agentId,
            {
              page: filters.page,
              page_size: filters.page_size,
            },
            signal
          );
          setHistoryData(res);
        } else if (activeTab === "reports") {
          const res = await aiAgentDashboardService.getReports(
            agentId,
            {
              granularity: filters.granularity,
              date_range: filters.date_range,
              date_from: filters.date_from,
              date_to: filters.date_to,
            },
            signal
          );
          setReportsData(res);
        }
      } catch (err: any) {
        if (err.name === "AbortError") return;
        console.error("[useAgentDashboard] Error fetching tab data:", err);
      } finally {
        setLoadingTab(false);
      }
    },
    [agentId, activeTab, filters]
  );

  // Coordinated fetch with AbortController
  const refetchAll = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const ac = new AbortController();
    abortControllerRef.current = ac;

    fetchSummary(ac.signal);
    fetchTabData(ac.signal);
  }, [fetchSummary, fetchTabData]);

  // Trigger fetch whenever filters or active tab change
  useEffect(() => {
    refetchAll();
  }, [refetchAll]);

  // Auto-refresh interval
  useEffect(() => {
    if (!autoRefreshInterval || autoRefreshInterval <= 0) return;
    const intervalId = setInterval(() => {
      refetchAll();
    }, autoRefreshInterval * 1000);

    return () => clearInterval(intervalId);
  }, [autoRefreshInterval, refetchAll]);

  // Update specific filter property
  const updateFilter = useCallback((key: keyof FilterState, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
      page: key === "page" ? value : 1, // Reset page on filter modification
    }));
  }, []);

  // Remove a single active filter chip
  const removeFilter = useCallback((key: keyof FilterState) => {
    setFilters((prev) => ({
      ...prev,
      [key]: DEFAULT_FILTERS[key],
      page: 1,
    }));
  }, []);

  // Reset all filters to default
  const resetFilters = useCallback(() => {
    setFilters(DEFAULT_FILTERS);
  }, []);

  // Save filter preset to localStorage
  const savePreset = useCallback(
    (name: string) => {
      try {
        const existing = JSON.parse(localStorage.getItem("agent_filter_presets") || "{}");
        existing[name] = filters;
        localStorage.setItem("agent_filter_presets", JSON.stringify(existing));
      } catch (e) {
        console.error("Failed to save preset", e);
      }
    },
    [filters]
  );

  // Active filters list for removable chips
  const activeChips: { key: keyof FilterState; label: string; value: string }[] = [];
  if (filters.date_range && filters.date_range !== "ALL") {
    activeChips.push({ key: "date_range", label: "Date Range", value: filters.date_range.replace(/_/g, " ") });
  }
  if (filters.status && filters.status !== "ALL") {
    activeChips.push({ key: "status", label: "Status", value: filters.status });
  }
  if (filters.outcome && filters.outcome !== "ALL") {
    activeChips.push({ key: "outcome", label: "Outcome", value: filters.outcome });
  }
  if (filters.sentiment && filters.sentiment !== "ALL") {
    activeChips.push({ key: "sentiment", label: "Sentiment", value: filters.sentiment });
  }
  if (filters.search) {
    activeChips.push({ key: "search", label: "Search", value: filters.search });
  }

  return {
    summary,
    callsData,
    queueData,
    historyData,
    reportsData,
    filterOptions,
    transcriptsData,
    loadingSummary,
    loadingTab,
    error,
    activeTab,
    setActiveTab,
    filters,
    updateFilter,
    removeFilter,
    resetFilters,
    activeChips,
    savePreset,
    autoRefreshInterval,
    setAutoRefreshInterval,
    refetchAll,
  };
}
