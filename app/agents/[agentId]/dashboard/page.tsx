"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import {
  BarChart3,
  PhoneCall,
  Layers,
  History,
  FileSpreadsheet,
  FileText,
  AlertCircle,
  RefreshCw,
} from "lucide-react";
import { useAgentDashboard, DashboardTab } from "@/lib/hooks/useAgentDashboard";
import { CallItem, aiAgentDashboardService } from "@/lib/services/aiAgentDashboardService";
import { AgentDashboardHeader } from "@/components/ai-agent-dashboard/AgentDashboardHeader";
import { AgentKpiCards } from "@/components/ai-agent-dashboard/AgentKpiCards";
import { AgentGlobalFilters } from "@/components/ai-agent-dashboard/AgentGlobalFilters";
import { TabOverview } from "@/components/ai-agent-dashboard/TabOverview";
import { TabCalls } from "@/components/ai-agent-dashboard/TabCalls";
import { TabQueue } from "@/components/ai-agent-dashboard/TabQueue";
import { TabHistory } from "@/components/ai-agent-dashboard/TabHistory";
import { TabReports } from "@/components/ai-agent-dashboard/TabReports";
import { TabTranscripts } from "@/components/ai-agent-dashboard/TabTranscripts";
import { CallDrawer } from "@/components/ai-agent-dashboard/CallDrawer";

export default function AgentDashboardPage() {
  const params = useParams();
  const agentId = (params?.agentId as string) || "";

  const {
    summary,
    callsData,
    queueData,
    historyData,
    reportsData,
    loadingSummary,
    loadingTab,
    error,
    activeTab,
    setActiveTab,
    filters,
    updateFilter,
    removeFilter,
    resetFilters,
    activeChips,
    savePreset,
    autoRefreshInterval,
    setAutoRefreshInterval,
    refetchAll,
  } = useAgentDashboard(agentId);

  // Dynamically set page title based on assigned agent type
  React.useEffect(() => {
    if (summary?.agent) {
      const isVoice = summary.agent.type === "Voice Agent";
      const isAI = summary.agent.type === "AI Agent";
      const titlePrefix = isVoice ? "Voice Agent Dashboard" : isAI ? "AI Agent Dashboard" : "Campaign Dashboard";
      document.title = `${titlePrefix} - ${summary.agent.name || "GBZ"}`;
    }
  }, [summary?.agent]);

  // Selected call for slide-out drawer
  const [selectedCall, setSelectedCall] = useState<CallItem | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleOpenCallDrawer = (call: CallItem) => {
    setSelectedCall(call);
    setDrawerOpen(true);
  };

  const handleExport = (type: "csv" | "pdf") => {
    aiAgentDashboardService.exportData(agentId, type, filters);
  };

  const tabs: { key: DashboardTab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { key: "overview", label: "Overview", icon: BarChart3 },
    { key: "calls", label: "Calls", icon: PhoneCall },
    { key: "queue", label: "Queue", icon: Layers },
    { key: "history", label: "History", icon: History },
    { key: "reports", label: "Reports", icon: FileSpreadsheet },
    { key: "transcripts", label: "Transcripts & Recordings", icon: FileText },
  ];

  return (
    <AppShell>
      <div className="min-h-screen bg-slate-50/60 pb-16">
        {/* Agent Header */}
        <AgentDashboardHeader
          agent={summary?.agent || null}
          loading={loadingSummary}
          onRefresh={refetchAll}
          autoRefreshInterval={autoRefreshInterval}
          onAutoRefreshChange={setAutoRefreshInterval}
        />

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-6">
          {/* Error Banner with Retry */}
          {error && (
            <div className="bg-rose-50 border border-rose-200 text-rose-800 rounded-xl p-4 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-rose-600 shrink-0" />
                <span>{error}</span>
              </div>
              <button
                onClick={refetchAll}
                className="px-3 py-1 font-semibold bg-rose-600 text-white hover:bg-rose-700 rounded-lg transition-colors cursor-pointer"
              >
                Retry
              </button>
            </div>
          )}

          {/* KPI Summary Cards */}
          <AgentKpiCards kpis={summary?.kpis || null} loading={loadingSummary} />

          {/* Global Filter Bar */}
          <AgentGlobalFilters
            filters={filters}
            onUpdateFilter={updateFilter}
            onRemoveFilter={removeFilter}
            onResetFilters={resetFilters}
            onSavePreset={savePreset}
            activeChips={activeChips}
          />

          {/* Navigation Tabs Bar */}
          <div className="border-b border-slate-200 bg-white rounded-t-xl px-4 pt-2 shadow-2xs">
            <nav className="flex space-x-2 overflow-x-auto" aria-label="Tabs">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`inline-flex items-center gap-2 py-3 px-4 text-xs font-bold border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                      isActive
                        ? "border-indigo-600 text-indigo-600 bg-indigo-50/50 rounded-t-lg"
                        : "border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300"
                    }`}
                  >
                    <Icon className={`h-4 w-4 ${isActive ? "text-indigo-600" : "text-slate-400"}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Active Tab Content Panel */}
          <div>
            {activeTab === "overview" && (
              <TabOverview summary={summary} loading={loadingSummary} />
            )}

            {activeTab === "calls" && (
              <TabCalls
                callsData={callsData}
                loading={loadingTab}
                page={filters.page}
                onPageChange={(p) => updateFilter("page", p)}
                onSelectCall={handleOpenCallDrawer}
              />
            )}

            {activeTab === "queue" && (
              <TabQueue
                queueData={queueData}
                loading={loadingTab}
                page={filters.page}
                onPageChange={(p) => updateFilter("page", p)}
              />
            )}

            {activeTab === "history" && (
              <TabHistory
                historyData={historyData}
                loading={loadingTab}
                page={filters.page}
                onPageChange={(p) => updateFilter("page", p)}
              />
            )}

            {activeTab === "reports" && (
              <TabReports
                reportsData={reportsData}
                loading={loadingTab}
                granularity={filters.granularity}
                onGranularityChange={(g) => updateFilter("granularity", g)}
                onExport={handleExport}
              />
            )}

            {activeTab === "transcripts" && (
              <TabTranscripts
                callsData={callsData}
                loading={loadingTab}
                onSelectCall={handleOpenCallDrawer}
              />
            )}
          </div>
        </div>

        {/* Slide-out Call Details Drawer */}
        <CallDrawer
          call={selectedCall}
          agentId={agentId}
          isOpen={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        />
      </div>
    </AppShell>
  );
}
