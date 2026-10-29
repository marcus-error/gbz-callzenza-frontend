"use client";

import React from "react";
import {
  PieChart,
  BarChart2,
  Calendar,
  TrendingUp,
  Activity,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { AgentDashboardSummary } from "@/lib/services/aiAgentDashboardService";

interface TabOverviewProps {
  summary: AgentDashboardSummary | null;
  loading: boolean;
}

const DAYS_OF_WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export function TabOverview({ summary, loading }: TabOverviewProps) {
  if (loading && !summary) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 animate-pulse">
        <div className="h-64 bg-slate-100 rounded-xl" />
        <div className="h-64 bg-slate-100 rounded-xl" />
        <div className="h-64 bg-slate-100 rounded-xl lg:col-span-2" />
      </div>
    );
  }

  const outcomes = summary?.outcome_distribution || {};
  const totalOutcomes = Object.values(outcomes).reduce((a, b) => a + b, 0) || 1;

  const trend = summary?.call_volume_trend || [];
  const maxTrendVal = Math.max(...trend.map((t) => t.value), 1);

  const hourly = summary?.hourly_activity || [];
  const maxHourlyCount = Math.max(...hourly.map((h) => h.count), 1);

  // Outcome colors
  const getOutcomeColor = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes("qualif") || l.includes("interest") || l.includes("success")) return "bg-emerald-500 text-emerald-700";
    if (l.includes("callback")) return "bg-blue-500 text-blue-700";
    if (l.includes("not") || l.includes("dnc") || l.includes("fail")) return "bg-rose-500 text-rose-700";
    return "bg-indigo-500 text-indigo-700";
  };

  return (
    <div className="space-y-5">
      {/* Top 2 charts: Outcome Distribution & Calls Over Time */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Outcome Distribution */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <PieChart className="h-4 w-4 text-indigo-600" />
              Outcome / Disposition Distribution
            </h3>
            <span className="text-xs text-slate-400 font-medium">{totalOutcomes} calls processed</span>
          </div>

          {Object.keys(outcomes).length === 0 ? (
            <div className="py-12 text-center text-xs text-slate-400 italic">
              No outcome distribution data recorded for this time range.
            </div>
          ) : (
            <div className="space-y-3">
              {Object.entries(outcomes).map(([label, count]) => {
                const percent = Math.round((count / totalOutcomes) * 100);
                return (
                  <div key={label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-semibold text-slate-700">{label}</span>
                      <span className="font-mono text-slate-500">
                        {count} ({percent}%)
                      </span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          label.toLowerCase().includes("interest") || label.toLowerCase().includes("qualif")
                            ? "bg-emerald-500"
                            : label.toLowerCase().includes("not") || label.toLowerCase().includes("dnc")
                            ? "bg-rose-500"
                            : "bg-indigo-500"
                        }`}
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Calls Over Time Trend */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <BarChart2 className="h-4 w-4 text-indigo-600" />
              Call Volume & Success Trend
            </h3>
            <span className="text-xs text-slate-400 font-medium">Daily Timeline</span>
          </div>

          {trend.length === 0 ? (
            <div className="py-12 text-center text-xs text-slate-400 italic">
              No daily call volume data available.
            </div>
          ) : (
            <div className="h-44 flex items-end gap-2 pt-4 px-2">
              {trend.slice(-14).map((point, idx) => {
                const heightPercent = Math.round((point.value / maxTrendVal) * 100);
                const successPercent = point.value > 0 ? Math.round(((point.secondary_value || 0) / point.value) * 100) : 0;
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1 group relative">
                    {/* Tooltip */}
                    <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-[10px] rounded px-2 py-1 pointer-events-none whitespace-nowrap z-20">
                      {point.label}: {point.value} calls ({point.secondary_value || 0} connected)
                    </div>

                    <div className="w-full flex items-end justify-center h-32 bg-slate-50 rounded-t">
                      <div
                        className="w-full bg-indigo-500 hover:bg-indigo-600 rounded-t transition-all"
                        style={{ height: `${Math.max(8, heightPercent)}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-slate-400 truncate w-full text-center">
                      {point.label.slice(5)}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Hourly Activity Heatmap */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Activity className="h-4 w-4 text-indigo-600" />
            Hourly Call Activity Heatmap
          </h3>
          <div className="flex items-center gap-2 text-[10px] text-slate-500">
            <span>Low</span>
            <div className="flex gap-0.5">
              <span className="h-2.5 w-2.5 rounded-xs bg-slate-100" />
              <span className="h-2.5 w-2.5 rounded-xs bg-indigo-200" />
              <span className="h-2.5 w-2.5 rounded-xs bg-indigo-400" />
              <span className="h-2.5 w-2.5 rounded-xs bg-indigo-600" />
            </div>
            <span>High</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[650px]">
            {/* Hour header */}
            <div className="grid grid-cols-[50px_repeat(24,1fr)] gap-1 text-[10px] text-slate-400 font-mono mb-1 text-center">
              <div />
              {Array.from({ length: 24 }).map((_, h) => (
                <div key={h}>{h}h</div>
              ))}
            </div>

            {/* Days rows */}
            {DAYS_OF_WEEK.map((dayName, dIdx) => (
              <div key={dayName} className="grid grid-cols-[50px_repeat(24,1fr)] gap-1 mb-1 items-center">
                <span className="text-xs font-semibold text-slate-600">{dayName}</span>
                {Array.from({ length: 24 }).map((_, hIdx) => {
                  const pt = hourly.find((item) => item.day_of_week === dIdx && item.hour === hIdx);
                  const count = pt?.count || 0;
                  const ratio = count / maxHourlyCount;

                  let cellColor = "bg-slate-100";
                  if (count > 0 && ratio <= 0.3) cellColor = "bg-indigo-200";
                  else if (ratio > 0.3 && ratio <= 0.7) cellColor = "bg-indigo-400";
                  else if (ratio > 0.7) cellColor = "bg-indigo-600";

                  return (
                    <div
                      key={hIdx}
                      title={`${dayName} ${hIdx}:00 - ${count} calls`}
                      className={`h-6 rounded-xs ${cellColor} hover:ring-2 hover:ring-indigo-500 transition-all cursor-default`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
