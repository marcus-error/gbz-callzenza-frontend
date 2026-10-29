"use client";

import React from "react";
import {
  FileText,
  Play,
  Volume2,
  Clock,
  Phone,
  User,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Download,
  FileDown,
} from "lucide-react";
import { CallItem, CallsPageResponse } from "@/lib/services/aiAgentDashboardService";
import { downloadAudioFile, downloadTranscriptFile } from "@/lib/utils/pdfExport";
import { formatLocalDateTime } from "@/lib/utils/dateTime";

interface TabCallsProps {
  callsData: CallsPageResponse | null;
  loading: boolean;
  page: number;
  onPageChange: (newPage: number) => void;
  onSelectCall: (call: CallItem) => void;
}

export function TabCalls({
  callsData,
  loading,
  page,
  onPageChange,
  onSelectCall,
}: TabCallsProps) {
  const items = callsData?.items || [];
  const total = callsData?.total || 0;
  const totalPages = callsData?.total_pages || 1;

  const formatDate = (dateStr?: string | null) => formatLocalDateTime(dateStr);

  const getStatusBadge = (status: string) => {
    const s = status.toUpperCase();
    if (s === "COMPLETED" || s === "QUALIFIED") {
      return <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">{status}</span>;
    }
    if (s === "IN_PROGRESS" || s === "AI_HANDLING" || s === "CONNECTED") {
      return <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 animate-pulse">{status}</span>;
    }
    if (s === "FAILED" || s === "NO_ANSWER" || s === "BUSY") {
      return <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-rose-50 text-rose-700 border border-rose-200">{status}</span>;
    }
    return <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200">{status}</span>;
  };

  const getSentimentBadge = (sentiment: string) => {
    if (sentiment === "POSITIVE") {
      return <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-teal-50 text-teal-700 border border-teal-200">Positive</span>;
    }
    if (sentiment === "NEGATIVE") {
      return <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-rose-50 text-rose-700 border border-rose-200">Negative</span>;
    }
    return <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-50 text-slate-600 border border-slate-200">Neutral</span>;
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-2xs overflow-hidden">
      {/* Table container with horizontal scroll */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-50/80 border-b border-slate-200 font-semibold text-slate-500 uppercase tracking-wider text-[11px]">
              <th className="py-3 px-4">Call ID</th>
              <th className="py-3 px-4">Lead Name</th>
              <th className="py-3 px-4">Phone Number</th>
              <th className="py-3 px-4">Start Time</th>
              <th className="py-3 px-4">Duration</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Outcome</th>
              <th className="py-3 px-4">Sentiment</th>
              <th className="py-3 px-4">AI Summary</th>
              <th className="py-3 px-4 text-center">Retries</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
            {loading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <tr key={i} className="animate-pulse">
                  <td colSpan={11} className="py-4 px-4">
                    <div className="h-4 bg-slate-100 rounded w-full" />
                  </td>
                </tr>
              ))
            ) : items.length === 0 ? (
              <tr>
                <td colSpan={11} className="py-12 text-center text-slate-400 italic">
                  No call records match the current filters.
                </td>
              </tr>
            ) : (
              items.map((call) => (
                <tr
                  key={call.call_id}
                  onClick={() => onSelectCall(call)}
                  className="hover:bg-indigo-50/40 transition-colors cursor-pointer group"
                >
                  <td className="py-3.5 px-4 font-mono text-slate-500 font-bold">
                    {call.call_id.slice(0, 8)}...
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {call.lead_name}
                  </td>
                  <td className="py-3.5 px-4 font-mono text-slate-600">
                    {call.phone_number}
                  </td>
                  <td className="py-3.5 px-4 text-slate-500">
                    {formatDate(call.start_time)}
                  </td>
                  <td className="py-3.5 px-4 font-mono font-semibold text-slate-800">
                    {call.duration_formatted}
                  </td>
                  <td className="py-3.5 px-4">
                    {getStatusBadge(call.status)}
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">
                    {call.outcome}
                  </td>
                  <td className="py-3.5 px-4">
                    {getSentimentBadge(call.sentiment)}
                  </td>
                  <td className="py-3.5 px-4 max-w-xs truncate text-slate-500 text-[11px]" title={call.ai_summary || ""}>
                    {call.ai_summary || "—"}
                  </td>
                  <td className="py-3.5 px-4 text-center font-bold text-slate-600">
                    {call.retry_count}
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      {call.recording_url && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            downloadAudioFile(call.recording_url!, `recording_${call.call_id}.wav`);
                          }}
                          className="inline-flex items-center gap-1 p-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors cursor-pointer"
                          title="Download Audio Recording (.wav)"
                        >
                          <Download className="h-3.5 w-3.5" />
                        </button>
                      )}
                      {call.transcript && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            downloadTranscriptFile(call);
                          }}
                          className="inline-flex items-center gap-1 p-1.5 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors cursor-pointer"
                          title="Download Transcript (.txt)"
                        >
                          <FileDown className="h-3.5 w-3.5" />
                        </button>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectCall(call);
                        }}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors cursor-pointer"
                        title="View Transcript & Audio"
                      >
                        <FileText className="h-3.5 w-3.5" />
                        <span>Details</span>
                      </button>
                    </div>
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
          Showing {items.length} of <span className="font-semibold text-slate-800">{total}</span> total calls
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
  );
}
