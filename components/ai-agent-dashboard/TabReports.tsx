"use client";

import Link from "next/link";
import {
  FileSpreadsheet,
  FileText,
  Download,
  Calendar,
  TrendingUp,
  BarChart,
  ChevronRight,
} from "lucide-react";
import { ReportsResponse } from "@/lib/services/aiAgentDashboardService";

interface TabReportsProps {
  reportsData: ReportsResponse | null;
  loading: boolean;
  granularity: string;
  onGranularityChange: (g: "day" | "week" | "month") => void;
  onExport: (type: "csv" | "pdf") => void;
}

export function TabReports({
  reportsData,
  loading,
  granularity,
  onGranularityChange,
  onExport,
}: TabReportsProps) {
  const items = reportsData?.items || [];
  const totalCalls = reportsData?.total_calls || 0;
  const overallSuccessRate = reportsData?.overall_success_rate || 0;

  return (
    <div className="space-y-4">
      {/* Link to Overall Campaign Report */}
      <div className="bg-indigo-50/70 border border-indigo-200/80 rounded-xl p-3.5 flex items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-2.5">
          <TrendingUp className="h-4 w-4 text-indigo-600 shrink-0" />
          <span className="text-slate-700">
            Need an aggregated summary of all running and completed campaigns? View the <strong>Overall Campaign Report</strong>.
          </span>
        </div>
        <Link
          href="/reports/overall-campaign"
          className="inline-flex items-center gap-1 font-bold text-indigo-700 hover:text-indigo-900 bg-white border border-indigo-200 px-3 py-1 rounded-lg shadow-2xs hover:bg-indigo-50 transition-colors shrink-0"
        >
          <span>View Overall Report</span>
          <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Top Toolbar: Granularity tabs and Export buttons */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs flex flex-wrap items-center justify-between gap-3">
        {/* Granularity switch buttons */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
          <button
            onClick={() => onGranularityChange("day")}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              granularity === "day"
                ? "bg-white text-indigo-700 shadow-2xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Daily
          </button>
          <button
            onClick={() => onGranularityChange("week")}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              granularity === "week"
                ? "bg-white text-indigo-700 shadow-2xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => onGranularityChange("month")}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              granularity === "month"
                ? "bg-white text-indigo-700 shadow-2xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Monthly
          </button>
        </div>

        {/* Aggregate KPI summary */}
        <div className="flex items-center gap-4 text-xs">
          <div>
            <span className="text-slate-400">Total Filtered:</span>{" "}
            <strong className="text-slate-800">{totalCalls} calls</strong>
          </div>
          <div>
            <span className="text-slate-400">Overall Success:</span>{" "}
            <strong className="text-emerald-700">{overallSuccessRate}%</strong>
          </div>
        </div>

        {/* Export Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onExport("csv")}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors cursor-pointer"
            title="Download CSV report"
          >
            <FileSpreadsheet className="h-3.5 w-3.5" />
            <span>Export CSV</span>
          </button>

          <button
            onClick={() => onExport("pdf")}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-lg transition-colors cursor-pointer"
            title="Download PDF report"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Export PDF</span>
          </button>
        </div>
      </div>

      {/* Reports Aggregation Table */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200 font-semibold text-slate-500 uppercase tracking-wider text-[11px]">
                <th className="py-3 px-4">Period ({granularity.toUpperCase()})</th>
                <th className="py-3 px-4 text-center">Total Calls</th>
                <th className="py-3 px-4 text-center">Connected</th>
                <th className="py-3 px-4 text-center">Failed</th>
                <th className="py-3 px-4 text-center">Avg Duration</th>
                <th className="py-3 px-4 text-right">Success Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
              {loading ? (
                Array.from({ length: 4 }).map((_, i) => (
                  <tr key={i} className="animate-pulse">
                    <td colSpan={6} className="py-4 px-4">
                      <div className="h-4 bg-slate-100 rounded w-full" />
                    </td>
                  </tr>
                ))
              ) : items.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-slate-400 italic">
                    No aggregated report data available for this range.
                  </td>
                </tr>
              ) : (
                items.map((bucket) => {
                  const mins = Math.floor(bucket.avg_duration_seconds / 60);
                  const secs = Math.floor(bucket.avg_duration_seconds % 60);
                  const durFmt = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;

                  return (
                    <tr key={bucket.date_label} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3.5 px-4 font-bold font-mono text-slate-800">
                        {bucket.date_label}
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-700">
                        {bucket.total_calls}
                      </td>
                      <td className="py-3.5 px-4 text-center font-semibold text-emerald-600">
                        {bucket.connected_calls}
                      </td>
                      <td className="py-3.5 px-4 text-center font-semibold text-rose-500">
                        {bucket.failed_calls}
                      </td>
                      <td className="py-3.5 px-4 text-center font-mono text-slate-600">
                        {durFmt}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <span className="font-bold text-teal-700">
                          {bucket.success_rate_percentage}%
                        </span>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
