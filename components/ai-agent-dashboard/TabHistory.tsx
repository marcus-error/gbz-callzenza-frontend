"use client";

import React from "react";
import {
  History,
  Clock,
  User,
  ShieldCheck,
  CheckCircle,
  PlayCircle,
  PauseCircle,
  Edit3,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { HistoryPageResponse } from "@/lib/services/aiAgentDashboardService";

import { formatLocalDateTime } from "@/lib/utils/dateTime";

interface TabHistoryProps {
  historyData: HistoryPageResponse | null;
  loading: boolean;
  page: number;
  onPageChange: (newPage: number) => void;
}

export function TabHistory({ historyData, loading, page, onPageChange }: TabHistoryProps) {
  const items = historyData?.items || [];
  const total = historyData?.total || 0;
  const totalPages = historyData?.total_pages || 1;

  const formatDate = (dateStr?: string | null) => formatLocalDateTime(dateStr);

  const getEventIcon = (eventType: string) => {
    const et = eventType.toUpperCase();
    if (et.includes("START")) return <PlayCircle className="h-4 w-4 text-emerald-600" />;
    if (et.includes("PAUSE")) return <PauseCircle className="h-4 w-4 text-amber-600" />;
    if (et.includes("COMPLETE")) return <CheckCircle className="h-4 w-4 text-indigo-600" />;
    if (et.includes("EDIT") || et.includes("UPDATE")) return <Edit3 className="h-4 w-4 text-blue-600" />;
    return <Clock className="h-4 w-4 text-slate-500" />;
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
          <History className="h-4 w-4 text-indigo-600" />
          Chronological Agent Activity & Audit Trail
        </h3>
        <span className="text-xs text-slate-400 font-medium">{total} recorded events</span>
      </div>

      {loading ? (
        <div className="space-y-3 animate-pulse">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-14 bg-slate-100 rounded-lg" />
          ))}
        </div>
      ) : items.length === 0 ? (
        <div className="py-12 text-center text-xs text-slate-400 italic">
          No audit history events recorded for this agent.
        </div>
      ) : (
        <div className="relative pl-6 border-l-2 border-slate-100 space-y-5 my-2">
          {items.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline marker icon */}
              <div className="absolute -left-[31px] top-1 p-1 rounded-full bg-white border border-slate-200 shadow-2xs">
                {getEventIcon(item.event_type)}
              </div>

              <div className="bg-slate-50 hover:bg-slate-100/70 transition-colors border border-slate-200/80 rounded-xl p-3.5">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                  <span className="text-[11px] font-mono text-slate-400">
                    {formatDate(item.timestamp)}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3 text-slate-400" />
                    Actor: <strong className="text-slate-700">{item.actor}</strong>
                  </span>
                  <span>•</span>
                  <span className="font-mono text-[10px] text-slate-400">Event: {item.event_type}</span>
                </div>

                {item.details && Object.keys(item.details).length > 0 && (
                  <div className="mt-2 text-[11px] font-mono bg-white border border-slate-200 rounded p-2 text-slate-600">
                    {JSON.stringify(item.details)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination Footer */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <div>Page {page} of {totalPages}</div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onPageChange(page - 1)}
            disabled={page <= 1 || loading}
            className="p-1 rounded border border-slate-200 hover:bg-slate-50 disabled:opacity-40 cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => onPageChange(page + 1)}
            disabled={page >= totalPages || loading}
            className="p-1 rounded border border-slate-200 hover:bg-slate-50 disabled:opacity-40 cursor-pointer"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
