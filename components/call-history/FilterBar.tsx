"use client";

import React, { useEffect, useState, useTransition } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import {
  Search,
  X,
  RotateCcw,
  Download,
  Filter,
  FileSpreadsheet,
  FileText,
  Calendar,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  callHistoryService,
  FilterOptionsResponse,
  CallHistoryFilters,
} from "@/lib/services/call-history-v2.service";

interface FilterBarProps {
  onFiltersChange: (filters: CallHistoryFilters) => void;
  filters: CallHistoryFilters;
  totalCalls: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  onFiltersChange,
  filters,
  totalCalls,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [options, setOptions] = useState<FilterOptionsResponse>({
    campaigns: [],
    ai_agents: [],
    human_agents: [],
    statuses: [],
    directions: ["OUTBOUND", "INBOUND"],
  });

  const [searchInput, setSearchInput] = useState(filters.search || "");
  const [exportMenuOpen, setExportMenuOpen] = useState(false);

  // Load filter options (narrowed if campaign selected)
  useEffect(() => {
    const selectedCampaign = filters.campaign_id?.[0];
    callHistoryService
      .getFilterOptions(selectedCampaign)
      .then(setOptions)
      .catch((err) => console.warn("[FilterBar] Failed to load options:", err));
  }, [filters.campaign_id]);

  // Debounced search sync
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchInput !== (filters.search || "")) {
        updateFilterParam("search", searchInput || undefined);
      }
    }, 350);
    return () => clearTimeout(timer);
  }, [searchInput]);

  const updateFilterParam = (key: string, value: string | undefined) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("cursor"); // Reset pagination on filter change

    if (!value || value === "ALL") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    });
  };

  const handleReset = () => {
    setSearchInput("");
    startTransition(() => {
      router.replace(pathname, { scroll: false });
    });
  };

  const activeChips: Array<{ key: string; label: string; onRemove: () => void }> = [];

  if (filters.search) {
    activeChips.push({
      key: "search",
      label: `Search: "${filters.search}"`,
      onRemove: () => {
        setSearchInput("");
        updateFilterParam("search", undefined);
      },
    });
  }

  if (filters.campaign_id?.[0]) {
    const camp = options.campaigns.find((c) => c.id === filters.campaign_id?.[0]);
    activeChips.push({
      key: "campaign",
      label: `Campaign: ${camp ? camp.name : filters.campaign_id[0].slice(0, 8)}`,
      onRemove: () => updateFilterParam("campaign_id", undefined),
    });
  }

  if (filters.ai_agent_id?.[0]) {
    const ag = options.ai_agents.find((a) => a.id === filters.ai_agent_id?.[0]);
    activeChips.push({
      key: "ai_agent",
      label: `AI Agent: ${ag ? ag.name : filters.ai_agent_id[0].slice(0, 8)}`,
      onRemove: () => updateFilterParam("ai_agent_id", undefined),
    });
  }

  if (filters.human_agent_id?.[0]) {
    const ag = options.human_agents.find((a) => a.id === filters.human_agent_id?.[0]);
    activeChips.push({
      key: "human_agent",
      label: `Human Agent: ${ag ? ag.name : filters.human_agent_id[0].slice(0, 8)}`,
      onRemove: () => updateFilterParam("human_agent_id", undefined),
    });
  }

  if (filters.direction && filters.direction !== "ALL") {
    activeChips.push({
      key: "direction",
      label: `Direction: ${filters.direction}`,
      onRemove: () => updateFilterParam("direction", undefined),
    });
  }

  if (filters.status?.[0]) {
    activeChips.push({
      key: "status",
      label: `Status: ${filters.status[0]}`,
      onRemove: () => updateFilterParam("status", undefined),
    });
  }

  if (filters.has_recording !== undefined) {
    activeChips.push({
      key: "has_recording",
      label: filters.has_recording ? "Has Recording: Yes" : "Has Recording: No",
      onRemove: () => updateFilterParam("has_recording", undefined),
    });
  }

  if (filters.date_from) {
    activeChips.push({
      key: "date_from",
      label: `From: ${filters.date_from.slice(0, 10)}`,
      onRemove: () => updateFilterParam("date_from", undefined),
    });
  }

  if (filters.date_to) {
    activeChips.push({
      key: "date_to",
      label: `To: ${filters.date_to.slice(0, 10)}`,
      onRemove: () => updateFilterParam("date_to", undefined),
    });
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200/80 p-4 shadow-sm space-y-3 mb-5">
      {/* Top row: Search input + Primary Filters + Export dropdown */}
      <div className="flex flex-wrap items-center gap-2.5 justify-between">
        {/* Search */}
        <div className="relative min-w-[240px] flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search by customer, phone, or ID..."
            className="w-full pl-9 pr-8 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-800 placeholder-slate-400"
          />
          {searchInput && (
            <button
              onClick={() => setSearchInput("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              aria-label="Clear search input"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Filter Dropdowns */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Campaign Filter */}
          <select
            value={filters.campaign_id?.[0] || "ALL"}
            onChange={(e) => updateFilterParam("campaign_id", e.target.value)}
            className="h-8 px-2.5 text-xs rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 cursor-pointer"
            aria-label="Filter by campaign"
          >
            <option value="ALL">All Campaigns</option>
            {options.campaigns.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>

          {/* AI Agent Filter */}
          <select
            value={filters.ai_agent_id?.[0] || "ALL"}
            onChange={(e) => updateFilterParam("ai_agent_id", e.target.value)}
            className="h-8 px-2.5 text-xs rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 cursor-pointer"
            aria-label="Filter by AI Agent"
          >
            <option value="ALL">All AI Agents</option>
            {options.ai_agents.map((a) => (
              <option key={a.id} value={a.id}>
                {a.name}
              </option>
            ))}
          </select>

          {/* Human Voice Agent Filter */}
          <select
            value={filters.human_agent_id?.[0] || "ALL"}
            onChange={(e) => updateFilterParam("human_agent_id", e.target.value)}
            className="h-8 px-2.5 text-xs rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 cursor-pointer"
            aria-label="Filter by Human Voice Agent"
          >
            <option value="ALL">All Human Agents</option>
            {options.human_agents.map((h) => (
              <option key={h.id} value={h.id}>
                {h.name}
              </option>
            ))}
          </select>

          {/* Direction Filter */}
          <select
            value={filters.direction || "ALL"}
            onChange={(e) => updateFilterParam("direction", e.target.value)}
            className="h-8 px-2.5 text-xs rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 cursor-pointer"
            aria-label="Filter by call direction"
          >
            <option value="ALL">All Directions</option>
            <option value="OUTBOUND">Outbound</option>
            <option value="INBOUND">Inbound</option>
          </select>

          {/* Status Filter */}
          <select
            value={filters.status?.[0] || "ALL"}
            onChange={(e) => updateFilterParam("status", e.target.value)}
            className="h-8 px-2.5 text-xs rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 cursor-pointer"
            aria-label="Filter by status"
          >
            <option value="ALL">All Statuses</option>
            {options.statuses.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>

          {/* Has Recording Filter */}
          <select
            value={
              filters.has_recording === undefined
                ? "ALL"
                : filters.has_recording
                ? "true"
                : "false"
            }
            onChange={(e) => updateFilterParam("has_recording", e.target.value)}
            className="h-8 px-2.5 text-xs rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 cursor-pointer"
            aria-label="Filter by recording availability"
          >
            <option value="ALL">Recording: All</option>
            <option value="true">With Audio Only</option>
            <option value="false">Without Audio</option>
          </select>

          {/* Date from / to quick inputs */}
          <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-lg border border-slate-200 text-xs">
            <Calendar className="h-3.5 w-3.5 text-slate-400" />
            <input
              type="date"
              value={filters.date_from ? filters.date_from.slice(0, 10) : ""}
              onChange={(e) => updateFilterParam("date_from", e.target.value ? `${e.target.value}T00:00:00` : undefined)}
              className="bg-transparent text-slate-700 text-[11px] focus:outline-none cursor-pointer"
              title="Date From"
            />
            <span className="text-slate-400">-</span>
            <input
              type="date"
              value={filters.date_to ? filters.date_to.slice(0, 10) : ""}
              onChange={(e) => updateFilterParam("date_to", e.target.value ? `${e.target.value}T23:59:59` : undefined)}
              className="bg-transparent text-slate-700 text-[11px] focus:outline-none cursor-pointer"
              title="Date To"
            />
          </div>
        </div>

        {/* Export Dropdown */}
        <div className="relative">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setExportMenuOpen(!exportMenuOpen)}
            className="flex items-center gap-1.5 h-8 px-3 text-xs font-semibold bg-indigo-50/60 text-indigo-700 hover:bg-indigo-100 border-indigo-200 shadow-sm"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Export List</span>
            <ChevronDown className="h-3 w-3 opacity-60 ml-0.5" />
          </Button>

          {exportMenuOpen && (
            <div
              className="absolute right-0 mt-1.5 w-48 rounded-lg bg-white shadow-xl ring-1 ring-black/10 py-1.5 z-50 text-xs border border-slate-100 animate-in fade-in zoom-in-95"
              onMouseLeave={() => setExportMenuOpen(false)}
            >
              <button
                type="button"
                onClick={async () => {
                  setExportMenuOpen(false);
                  try {
                    await callHistoryService.downloadExportCsv(filters);
                  } catch (err) {
                    console.error("Export CSV error:", err);
                    window.location.href = callHistoryService.getExportUrl("csv", filters);
                  }
                }}
                className="w-full flex items-center gap-2 px-3.5 py-2 text-left font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors cursor-pointer"
              >
                <FileSpreadsheet className="h-3.5 w-3.5 text-emerald-600" />
                <span>Export CSV (All Data)</span>
              </button>
              <a
                href={callHistoryService.getExportUrl("pdf", filters)}
                target="_blank"
                rel="noreferrer"
                onClick={() => setExportMenuOpen(false)}
                className="w-full flex items-center gap-2 px-3.5 py-2 text-left font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
              >
                <FileText className="h-3.5 w-3.5 text-rose-500" />
                <span>Export PDF (Print Report)</span>
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Active Filter Chips & Reset All */}
      {activeChips.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mr-1 flex items-center gap-1">
            <Filter className="h-3 w-3" /> Active:
          </span>
          {activeChips.map((chip) => (
            <span
              key={chip.key}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/80 animate-in fade-in"
            >
              {chip.label}
              <button
                onClick={chip.onRemove}
                className="hover:text-slate-900 focus:outline-none"
                aria-label={`Remove filter ${chip.label}`}
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
          <button
            onClick={handleReset}
            className="text-xs text-indigo-600 hover:text-indigo-700 font-semibold flex items-center gap-1 ml-2 px-2 py-0.5 rounded hover:bg-indigo-50 transition-colors"
          >
            <RotateCcw className="h-3 w-3" /> Reset All
          </button>
        </div>
      )}
    </div>
  );
};
