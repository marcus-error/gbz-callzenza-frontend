"use client";

import React, { useState, useEffect } from "react";
import {
  Search,
  RotateCcw,
  BookmarkPlus,
  X,
  Filter,
  Calendar,
  Smile,
  SlidersHorizontal,
} from "lucide-react";
import { FilterState } from "@/lib/hooks/useAgentDashboard";

interface AgentGlobalFiltersProps {
  filters: FilterState;
  onUpdateFilter: (key: keyof FilterState, value: any) => void;
  onRemoveFilter: (key: keyof FilterState) => void;
  onResetFilters: () => void;
  onSavePreset: (name: string) => void;
  activeChips: { key: keyof FilterState; label: string; value: string }[];
}

export function AgentGlobalFilters({
  filters,
  onUpdateFilter,
  onRemoveFilter,
  onResetFilters,
  onSavePreset,
  activeChips,
}: AgentGlobalFiltersProps) {
  const [searchInput, setSearchInput] = useState(filters.search);
  const [presetModalOpen, setPresetModalOpen] = useState(false);
  const [presetName, setPresetName] = useState("");

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchInput !== filters.search) {
        onUpdateFilter("search", searchInput);
      }
    }, 350);
    return () => clearTimeout(timer);
  }, [searchInput, filters.search, onUpdateFilter]);

  const handleSavePresetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!presetName.trim()) return;
    onSavePreset(presetName.trim());
    setPresetName("");
    setPresetModalOpen(false);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-3">
      {/* Primary filters row */}
      <div className="flex flex-wrap items-center gap-2.5">
        {/* Search input with debounce */}
        <div className="relative min-w-[220px] flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search lead, phone, call ID, keyword..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-indigo-500 focus:bg-white transition-colors"
          />
          {searchInput && (
            <button
              onClick={() => {
                setSearchInput("");
                onUpdateFilter("search", "");
              }}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Date Range Selector */}
        <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-xs text-slate-700">
          <Calendar className="h-3.5 w-3.5 text-slate-400" />
          <select
            value={filters.date_range}
            onChange={(e) => onUpdateFilter("date_range", e.target.value)}
            className="bg-transparent font-medium text-slate-800 outline-none cursor-pointer"
          >
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="last_7_days">Last 7 Days</option>
            <option value="last_30_days">Last 30 Days</option>
            <option value="ALL">All Time</option>
          </select>
        </div>

        {/* Status Filter */}
        <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-xs text-slate-700">
          <span className="text-slate-400 font-medium">Status:</span>
          <select
            value={filters.status}
            onChange={(e) => onUpdateFilter("status", e.target.value)}
            className="bg-transparent font-medium text-slate-800 outline-none cursor-pointer"
          >
            <option value="ALL">All Statuses</option>
            <option value="CONNECTED">Connected</option>
            <option value="NO_ANSWER">Not Answered</option>
            <option value="BUSY">Busy</option>
            <option value="FAILED">Failed</option>
            <option value="IN_PROGRESS">In Progress</option>
          </select>
        </div>

        {/* Outcome / Disposition Filter */}
        <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-xs text-slate-700">
          <span className="text-slate-400 font-medium">Outcome:</span>
          <select
            value={filters.outcome}
            onChange={(e) => onUpdateFilter("outcome", e.target.value)}
            className="bg-transparent font-medium text-slate-800 outline-none cursor-pointer"
          >
            <option value="ALL">All Outcomes</option>
            <option value="Interested">Interested</option>
            <option value="Not Interested">Not Interested</option>
            <option value="Qualified">Qualified</option>
            <option value="Callback">Callback Scheduled</option>
            <option value="DNC">Do Not Call (DNC)</option>
          </select>
        </div>

        {/* Sentiment Filter */}
        <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-xs text-slate-700">
          <Smile className="h-3.5 w-3.5 text-slate-400" />
          <select
            value={filters.sentiment}
            onChange={(e) => onUpdateFilter("sentiment", e.target.value)}
            className="bg-transparent font-medium text-slate-800 outline-none cursor-pointer"
          >
            <option value="ALL">All Sentiments</option>
            <option value="POSITIVE">Positive</option>
            <option value="NEUTRAL">Neutral</option>
            <option value="NEGATIVE">Negative</option>
          </select>
        </div>

        {/* Page size */}
        <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-xs text-slate-700">
          <span className="text-slate-400">Rows:</span>
          <select
            value={filters.page_size}
            onChange={(e) => onUpdateFilter("page_size", Number(e.target.value))}
            className="bg-transparent font-medium text-slate-800 outline-none cursor-pointer"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>

        {/* Save Preset & Reset Actions */}
        <div className="flex items-center gap-1.5 ml-auto">
          <button
            onClick={() => setPresetModalOpen(true)}
            className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-slate-600 hover:text-indigo-600 bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 rounded-lg transition-colors cursor-pointer"
            title="Save current filters as preset"
          >
            <BookmarkPlus className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Save Preset</span>
          </button>

          <button
            onClick={onResetFilters}
            className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-slate-500 hover:text-rose-600 bg-slate-50 hover:bg-rose-50 border border-slate-200 hover:border-rose-200 rounded-lg transition-colors cursor-pointer"
            title="Reset all filters to default"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </div>

      {/* Active filters removable chips */}
      {activeChips.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-slate-100">
          <span className="text-[11px] font-semibold text-slate-400 mr-1 flex items-center gap-1">
            <Filter className="h-3 w-3" />
            Active Filters:
          </span>
          {activeChips.map((chip) => (
            <span
              key={chip.key}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-200"
            >
              <span>
                <strong className="font-semibold text-indigo-900">{chip.label}:</strong> {chip.value}
              </span>
              <button
                onClick={() => onRemoveFilter(chip.key)}
                className="hover:text-indigo-950 p-0.5 rounded-full hover:bg-indigo-100 transition-colors cursor-pointer"
                title={`Remove ${chip.label} filter`}
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Save Preset Dialog Modal */}
      {presetModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-sm w-full p-5 border border-slate-200 animate-in fade-in zoom-in-95">
            <h3 className="text-sm font-bold text-slate-900 mb-1">Save Filter Preset</h3>
            <p className="text-xs text-slate-500 mb-4">
              Give your current filter combination a name for quick recall.
            </p>
            <form onSubmit={handleSavePresetSubmit} className="space-y-3">
              <input
                type="text"
                value={presetName}
                onChange={(e) => setPresetName(e.target.value)}
                placeholder="e.g., Interested Qualified This Week"
                className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg text-slate-800 focus:outline-indigo-500"
                autoFocus
              />
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setPresetModalOpen(false)}
                  className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!presetName.trim()}
                  className="px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg disabled:opacity-50"
                >
                  Save Preset
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
