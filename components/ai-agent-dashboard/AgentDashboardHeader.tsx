"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  RefreshCw,
  Clock,
  Phone,
  FolderOpen,
  User,
  Bot,
  UserCheck,
  CheckCircle2,
  AlertCircle,
  PauseCircle,
  PlayCircle,
} from "lucide-react";
import { AgentHeaderInfo } from "@/lib/services/aiAgentDashboardService";

interface AgentDashboardHeaderProps {
  agent: AgentHeaderInfo | null;
  loading: boolean;
  onRefresh: () => void;
  autoRefreshInterval: number;
  onAutoRefreshChange: (seconds: number) => void;
}

export function AgentDashboardHeader({
  agent,
  loading,
  onRefresh,
  autoRefreshInterval,
  onAutoRefreshChange,
}: AgentDashboardHeaderProps) {
  const router = useRouter();

  const handleBackToList = () => {
    // Navigate back to campaigns table preserving history state
    if (window.history.length > 2) {
      router.back();
    } else {
      router.push("/admin/campaigns");
    }
  };

  const isVoiceAgent = agent?.type === "Voice Agent";
  const isAIAgent = agent?.type === "AI Agent";
  const dashboardTitle = loading
    ? "Loading Dashboard..."
    : isVoiceAgent
    ? "Voice Agent Dashboard"
    : isAIAgent
    ? "AI Agent Dashboard"
    : "Campaign Dashboard";
  const getStatusBadge = (status: string = "IDLE") => {
    const s = status.toUpperCase();
    if (s === "RUNNING") {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-xs">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          RUNNING
        </span>
      );
    }
    if (s === "PAUSED") {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
          <PauseCircle className="h-3 w-3" />
          PAUSED
        </span>
      );
    }
    if (s === "COMPLETED") {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
          <CheckCircle2 className="h-3 w-3" />
          COMPLETED
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200">
        <span className="h-2 w-2 rounded-full bg-slate-400" />
        {status}
      </span>
    );
  };

  const formatDate = (dateStr?: string | null) => {
    if (!dateStr) return "—";
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="bg-white border-b border-slate-200 shadow-xs px-6 py-5">
      {/* Top action bar: Back button & Refresh Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <button
          onClick={handleBackToList}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors py-1 px-2.5 rounded-lg hover:bg-slate-100 cursor-pointer"
          title="Return to campaigns list"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Campaigns</span>
        </button>

        <div className="flex items-center gap-3">
          {/* Auto refresh dropdown */}
          <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5">
            <Clock className="h-3.5 w-3.5 text-slate-400" />
            <span className="font-medium">Auto-refresh:</span>
            <select
              value={autoRefreshInterval}
              onChange={(e) => onAutoRefreshChange(Number(e.target.value))}
              className="bg-transparent font-semibold text-slate-800 outline-none cursor-pointer"
            >
              <option value={0}>Off</option>
              <option value={15}>Every 15s</option>
              <option value={30}>Every 30s</option>
              <option value={60}>Every 60s</option>
            </select>
          </div>

          {/* Manual Refresh Button */}
          <button
            onClick={onRefresh}
            disabled={loading}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-lg transition-colors cursor-pointer disabled:opacity-50"
            title="Refresh dashboard data"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* Main Agent Details Banner */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              {dashboardTitle}
            </h1>

            {/* Dynamic Type badge based on assigned agent */}
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-bold ${
                isVoiceAgent
                  ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                  : isAIAgent
                  ? "bg-indigo-50 text-indigo-800 border border-indigo-200"
                  : "bg-slate-100 text-slate-700 border border-slate-200"
              }`}
            >
              {isVoiceAgent ? (
                <>
                  <UserCheck className="h-3.5 w-3.5 text-emerald-600" />
                  Voice Agent
                </>
              ) : isAIAgent ? (
                <>
                  <Bot className="h-3.5 w-3.5 text-indigo-600" />
                  AI Agent
                </>
              ) : (
                <>
                  <FolderOpen className="h-3.5 w-3.5 text-slate-500" />
                  Campaign
                </>
              )}
            </span>

            {/* Live status badge */}
            {agent && getStatusBadge(agent.status)}
          </div>

          {/* Campaign identity row */}
          {agent && (
            <div className="flex flex-wrap items-center gap-2 mt-1.5">
              <span className="text-sm font-bold text-slate-800">
                {agent.name}
              </span>
              <span className="text-2xs font-mono text-slate-500 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
                ID: {agent.id}
              </span>
            </div>
          )}

          {/* Metadata badges row */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-5 mt-2.5 text-xs text-slate-600 font-medium">
            {agent?.assigned_agent && (
              <div className="flex items-center gap-1.5">
                {isVoiceAgent ? (
                  <UserCheck className="h-3.5 w-3.5 text-emerald-600" />
                ) : (
                  <Bot className="h-3.5 w-3.5 text-indigo-600" />
                )}
                <span>Assigned Agent:</span>
                <span className="font-semibold text-slate-800">{agent.assigned_agent}</span>
              </div>
            )}

            <div className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5 text-slate-400" />
              <span>Target Client:</span>
              <span className="font-semibold text-slate-800">{agent?.client_name || agent?.owner || "—"}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <FolderOpen className="h-3.5 w-3.5 text-slate-400" />
              <span>Lead Source:</span>
              <span className="font-semibold text-slate-800">{agent?.source || "Lead Library"}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-slate-400" />
              <span>Caller ID:</span>
              <span className="font-mono font-semibold text-slate-800">{agent?.phone_number || "—"}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-slate-400" />
              <span>Created:</span>
              <span className="text-slate-700">{formatDate(agent?.created_at)}</span>
            </div>

            {agent?.last_updated_at && (
              <div className="flex items-center gap-1.5 text-slate-500">
                <span>Updated:</span>
                <span>{formatDate(agent.last_updated_at)}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
