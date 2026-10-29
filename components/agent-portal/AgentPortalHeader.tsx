"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Bot, LogOut, ShieldCheck, ChevronRight, LayoutGrid } from "lucide-react";
import { useAuthStore } from "@/lib/store";
import { agentPortalService } from "@/lib/services/agentPortalService";
import { AgentPortalSelector } from "./AgentPortalSelector";

interface AgentPortalHeaderProps {
  currentAgentId?: string;
  currentAgentName?: string;
}

export const AgentPortalHeader: React.FC<AgentPortalHeaderProps> = ({
  currentAgentId,
  currentAgentName,
}) => {
  const router = useRouter();
  const { user, logout } = useAuthStore();

  const handleLogout = async () => {
    try {
      await agentPortalService.logout();
    } catch (_) {}
    logout();
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("GBZ-auth");
      localStorage.removeItem("GBZ-auth-AI_AGENT_PORTAL_USER");
    }
    router.replace("/agent-portal/login");
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-md px-4 sm:px-6 lg:px-10 py-3.5 transition-all">
      <div className="flex items-center justify-between gap-4 w-full">
        {/* Brand & Breadcrumbs */}
        <div className="flex items-center gap-3">
          <Link
            href="/agent-portal/agents"
            className="flex items-center gap-2.5 text-white font-bold tracking-tight text-lg group"
          >
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <div className="h-full w-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Bot className="h-5 w-5 text-indigo-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="leading-tight font-extrabold bg-gradient-to-r from-white via-slate-200 to-indigo-200 bg-clip-text text-transparent">
                GBZ
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-400 -mt-0.5">
                AI Agent Portal
              </span>
            </div>
          </Link>

          {currentAgentName && (
            <div className="flex items-center gap-2 text-sm text-slate-400 ml-2">
              <ChevronRight className="h-4 w-4 text-slate-600 hidden sm:inline" />
              <Link
                href="/agent-portal/agents"
                className="hover:text-indigo-400 transition-colors flex items-center gap-1.5 px-2 py-1 rounded-lg hover:bg-slate-900 border border-transparent hover:border-slate-800 text-xs font-semibold text-slate-300"
              >
                <LayoutGrid className="h-3.5 w-3.5 text-indigo-400" />
                <span>Agents</span>
              </Link>
              <ChevronRight className="h-4 w-4 text-slate-600 hidden sm:inline" />
              <span className="font-semibold text-slate-200 truncate max-w-[160px] hidden sm:inline">
                {currentAgentName}
              </span>
            </div>
          )}
        </div>

        {/* Center: Agent Quick Switcher */}
        <div className="flex-1 max-w-xs hidden md:block">
          <AgentPortalSelector currentAgentId={currentAgentId} currentAgentName={currentAgentName} />
        </div>

        {/* Right: User identity & Logout */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex flex-col items-end text-right" suppressHydrationWarning>
            <span className="text-xs font-semibold text-slate-200" suppressHydrationWarning>
              {user?.full_name || user?.email || "Portal Auditor"}
            </span>
            <div className="flex items-center gap-1.5" suppressHydrationWarning>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <ShieldCheck className="h-2.5 w-2.5 mr-0.5" />
                READ-ONLY
              </span>
              <span className="text-[11px] text-slate-500" suppressHydrationWarning>
                {user?.business_id === "c3dce06c-8330-4724-ba33-b5282b3c3596" || !user?.business_id
                  ? "Primary Org"
                  : "Organization"}
              </span>
            </div>
          </div>

          <button
            suppressHydrationWarning
            onClick={handleLogout}
            title="Log out of AI Agent Portal"
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 hover:bg-rose-500/10 text-slate-400 hover:text-rose-400 border border-slate-800 hover:border-rose-500/30 text-xs font-medium transition-all cursor-pointer"
          >
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Sign Out</span>
          </button>
        </div>
      </div>
    </header>
  );
};
