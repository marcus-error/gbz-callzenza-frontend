"use client";

import React from "react";
import {
  Layers,
  Clock,
  Phone,
  User,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  ShieldAlert,
} from "lucide-react";
import { QueuePageResponse } from "@/lib/services/aiAgentDashboardService";

import { formatLocalDateTime } from "@/lib/utils/dateTime";

interface TabQueueProps {
  queueData: QueuePageResponse | null;
  loading: boolean;
  page: number;
  onPageChange: (newPage: number) => void;
}

export function TabQueue({ queueData, loading, page, onPageChange }: TabQueueProps) {
  const items = queueData?.items || [];
  const total = queueData?.total || 0;
  const totalPages = queueData?.total_pages || 1;

  const formatDate = (dateStr?: string | null) => formatLocalDateTime(dateStr);

  const getStatusBadge = (status: string) => {
    const s = status.toUpperCase();
    if (s === "PENDING" || s === "RESERVED") {
      return <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-200">Pending</span>;
    }
    if (s === "DIALING" || s === "RINGING" || s === "CONNECTED") {
      return <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 animate-pulse">In Dialing</span>;
    }
    if (s === "RETRY_SCHEDULED") {
      return <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-purple-50 text-purple-700 border border-purple-200">Retry Queued</span>;
    }
    return <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200">{status}</span>;
  };

  return (
    <div className="space-y-4">
      {/* Notice header */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex items-center justify-between text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-indigo-600" />
          <span>
            Real-time live queue pipeline for campaign leads. <strong className="text-slate-800">View-only mode</strong> enforced.
          </span>
        </div>
        <span className="font-semibold text-indigo-700">{total} leads queued</span>
      </div>

      {/* Queue Table */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200 font-semibold text-slate-500 uppercase tracking-wider text-[11px]">
                <th className="py-3 px-4 text-center">Position</th>
                <th className="py-3 px-4">Lead Name</th>
                <th className="py-3 px-4">Phone Number</th>
                <th className="py-3 px-4">Scheduled Time</th>
                <th className="py-3 px-4 text-center">Attempts</th>
                <th className="py-3 px-4">Next Retry Time</th>
                <th className="py-3 px-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
              {loading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i} className="animate-pulse">
                    <td colSpan={7} className="py-4 px-4">
                      <div className="h-4 bg-slate-100 rounded w-full" />
                    </td>
                  </tr>
                ))
              ) : items.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-400 italic">
                    Queue is currently empty. All leads completed or awaiting new imports.
                  </td>
                </tr>
              ) : (
                items.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3.5 px-4 text-center">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-slate-100 font-bold font-mono text-[11px] text-slate-700">
                        #{lead.position}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-slate-900">
                      {lead.lead_name}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-slate-600">
                      {lead.phone_number}
                    </td>
                    <td className="py-3.5 px-4 text-slate-500">
                      {formatDate(lead.scheduled_time)}
                    </td>
                    <td className="py-3.5 px-4 text-center font-bold text-slate-700">
                      {lead.attempts}
                    </td>
                    <td className="py-3.5 px-4 text-slate-500">
                      {formatDate(lead.next_retry_time)}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      {getStatusBadge(lead.status)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="px-5 py-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 bg-slate-50/50">
          <div>
            Showing {items.length} of <span className="font-semibold text-slate-800">{total}</span> queued leads
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onPageChange(page - 1)}
              disabled={page <= 1 || loading}
              className="p-1 rounded border border-slate-200 hover:bg-white disabled:opacity-40 cursor-pointer"
              title="Previous Page"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="font-medium text-slate-700">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => onPageChange(page + 1)}
              disabled={page >= totalPages || loading}
              className="p-1 rounded border border-slate-200 hover:bg-white disabled:opacity-40 cursor-pointer"
              title="Next Page"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
