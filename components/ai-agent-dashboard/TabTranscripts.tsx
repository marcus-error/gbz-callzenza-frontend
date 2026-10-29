"use client";

import React, { useState } from "react";
import {
  FileText,
  Search,
  Volume2,
  Phone,
  Clock,
  Sparkles,
  ChevronRight,
  Download,
  FileDown,
} from "lucide-react";
import { CallItem, CallsPageResponse } from "@/lib/services/aiAgentDashboardService";
import { downloadTranscriptFile, downloadAllTranscriptsFile, downloadAudioFile } from "@/lib/utils/pdfExport";
import { formatLocalDateTime } from "@/lib/utils/dateTime";

interface TabTranscriptsProps {
  callsData: CallsPageResponse | null;
  loading: boolean;
  onSelectCall: (call: CallItem) => void;
}

export function TabTranscripts({ callsData, loading, onSelectCall }: TabTranscriptsProps) {
  const [keyword, setKeyword] = useState("");
  const items = callsData?.items || [];

  const filteredItems = keyword.trim()
    ? items.filter(
        (c) =>
          c.transcript?.toLowerCase().includes(keyword.toLowerCase()) ||
          c.lead_name.toLowerCase().includes(keyword.toLowerCase()) ||
          c.ai_summary?.toLowerCase().includes(keyword.toLowerCase())
      )
    : items;

  return (
    <div className="space-y-4">
      {/* Keyword Search Bar + Bulk Download */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search within transcripts & audio logs (e.g. 'pricing', 'demo', 'callback')..."
            className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-indigo-500 focus:bg-white"
          />
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-3">
          <span className="text-xs text-slate-500 font-medium whitespace-nowrap">
            {filteredItems.length} transcripts
          </span>

          {filteredItems.length > 0 && (
            <button
              onClick={() => downloadAllTranscriptsFile(filteredItems)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap border border-indigo-200"
              title="Download all filtered conversation transcripts as a single text compilation"
            >
              <FileDown className="h-3.5 w-3.5" />
              <span>Download All Transcripts (.txt)</span>
            </button>
          )}
        </div>
      </div>

      {/* Transcripts List */}
      <div className="space-y-3">
        {loading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-28 bg-white border border-slate-200 rounded-xl p-4 animate-pulse" />
          ))
        ) : filteredItems.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-xl p-12 text-center text-xs text-slate-400 italic">
            No transcripts match the current search keyword.
          </div>
        ) : (
          filteredItems.map((call) => (
            <div
              key={call.call_id}
              onClick={() => onSelectCall(call)}
              className="bg-white hover:bg-indigo-50/20 border border-slate-200 hover:border-indigo-200 rounded-xl p-4 shadow-2xs hover:shadow-xs transition-all cursor-pointer group"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="h-6 w-6 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center text-xs font-bold">
                    <FileText className="h-3.5 w-3.5" />
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {call.lead_name}
                  </h4>
                  <span className="text-xs font-mono text-slate-400">({call.phone_number})</span>
                  {call.start_time && (
                    <span className="text-[11px] text-slate-500 font-medium ml-1">
                      · {formatLocalDateTime(call.start_time)}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2.5 text-xs text-slate-500">
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="h-3 w-3 text-slate-400" />
                    {call.duration_formatted}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700">
                    {call.status}
                  </span>

                  {/* Quick Download Transcript Button */}
                  {call.transcript && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        downloadTranscriptFile(call);
                      }}
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md text-[11px] font-bold transition-colors cursor-pointer border border-slate-200"
                      title="Download this conversation transcript (.txt)"
                    >
                      <Download className="h-3 w-3 text-indigo-600" />
                      <span>Download .txt</span>
                    </button>
                  )}

                  {/* Quick Download Audio Button */}
                  {call.recording_url && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        downloadAudioFile(call.recording_url!, `recording_${call.call_id}.wav`);
                      }}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-md text-[11px] font-bold transition-colors cursor-pointer border border-emerald-200"
                      title="Download audio recording (.wav)"
                    >
                      <Volume2 className="h-3 w-3" />
                      <span>.wav</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Snippet */}
              <div className="bg-slate-50 border border-slate-100 rounded-lg p-2.5 text-xs text-slate-600 font-mono line-clamp-3 leading-relaxed">
                {call.transcript || "Conversation recorded. Click to open full turn-by-turn dialogue."}
              </div>

              <div className="mt-2.5 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400">
                  Outcome: <strong className="text-slate-700">{call.outcome}</strong> • Sentiment: <strong className="text-slate-700">{call.sentiment}</strong>
                </span>

                <span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 group-hover:translate-x-0.5 transition-transform">
                  View Full Transcript & Recording <ChevronRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
