"use client";

import React from "react";
import {
  PhoneCall,
  PhoneForwarded,
  PhoneIncoming,
  PhoneOff,
  Clock,
  TrendingUp,
  Layers,
  CheckCircle,
  Coins,
  HelpCircle,
} from "lucide-react";
import { AgentKpis } from "@/lib/services/aiAgentDashboardService";

interface AgentKpiCardsProps {
  kpis: AgentKpis | null;
  loading: boolean;
}

export function AgentKpiCards({ kpis, loading }: AgentKpiCardsProps) {
  if (loading && !kpis) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-2xs animate-pulse"
          >
            <div className="h-4 w-12 bg-slate-200 rounded mb-2" />
            <div className="h-6 w-16 bg-slate-300 rounded mb-1" />
            <div className="h-3 w-10 bg-slate-100 rounded" />
          </div>
        ))}
      </div>
    );
  }

  const cards = [
    {
      title: "Total Calls",
      value: kpis?.total_calls ?? 0,
      icon: PhoneCall,
      color: "text-indigo-600 bg-indigo-50 border-indigo-100",
      subtext: "All dial attempts",
    },
    {
      title: "Connected",
      value: kpis?.connected_calls ?? 0,
      icon: PhoneForwarded,
      color: "text-emerald-600 bg-emerald-50 border-emerald-100",
      subtext: "Call bridged",
    },
    {
      title: "Answered",
      value: kpis?.answered_calls ?? 0,
      icon: PhoneIncoming,
      color: "text-blue-600 bg-blue-50 border-blue-100",
      subtext: "Pickup verified",
    },
    {
      title: "Missed / Failed",
      value: kpis?.missed_failed_calls ?? 0,
      icon: PhoneOff,
      color: "text-rose-600 bg-rose-50 border-rose-100",
      subtext: "No answer / Busy",
    },
    {
      title: "Avg Duration",
      value: kpis?.avg_call_duration_formatted ?? "00:00",
      icon: Clock,
      color: "text-amber-600 bg-amber-50 border-amber-100",
      subtext: "Answered calls",
    },
    {
      title: "Success Rate",
      value: `${kpis?.success_rate_percentage ?? 0}%`,
      icon: TrendingUp,
      color: "text-teal-600 bg-teal-50 border-teal-100",
      subtext: "Qualified leads",
    },
    {
      title: "In Queue",
      value: kpis?.leads_in_queue ?? 0,
      icon: Layers,
      color: "text-violet-600 bg-violet-50 border-violet-100",
      subtext: "Pending leads",
    },
    {
      title: "Completed",
      value: kpis?.leads_completed ?? 0,
      icon: CheckCircle,
      color: "text-emerald-600 bg-emerald-50 border-emerald-100",
      subtext: "Processed",
    },
    {
      title: "Cost / Credits",
      value: kpis?.total_cost_credits != null ? `$${kpis.total_cost_credits.toFixed(2)}` : "N/A",
      isUnavailable: kpis?.total_cost_credits == null,
      icon: Coins,
      color: "text-slate-600 bg-slate-50 border-slate-200",
      subtext: "Data not available",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-3">
      {cards.map((card, idx) => {
        const IconComponent = card.icon;
        return (
          <div
            key={idx}
            className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
          >
            <div className="flex items-center justify-between gap-1 mb-2">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider truncate">
                {card.title}
              </span>
              <div className={`p-1.5 rounded-lg border ${card.color}`}>
                <IconComponent className="h-3.5 w-3.5" />
              </div>
            </div>

            <div>
              <div
                className={`text-lg font-bold tracking-tight truncate ${
                  card.isUnavailable ? "text-slate-400 text-sm italic" : "text-slate-900"
                }`}
              >
                {card.value}
              </div>
              <div className="text-[10px] text-slate-400 font-medium truncate mt-0.5">
                {card.subtext}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
