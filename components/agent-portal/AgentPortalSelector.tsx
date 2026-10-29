"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Bot, Search, ChevronDown, Loader2 } from "lucide-react";
import { agentPortalService, PortalAgentItem } from "@/lib/services/agentPortalService";

interface AgentPortalSelectorProps {
  currentAgentId?: string;
  currentAgentName?: string;
}

export const AgentPortalSelector: React.FC<AgentPortalSelectorProps> = ({ currentAgentId, currentAgentName }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [agents, setAgents] = useState<PortalAgentItem[]>([]);
  const [loading, setLoading] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const fetchAgents = useCallback(async (q: string) => {
    setLoading(true);
    try {
      const res = await agentPortalService.listAgents({ search: q || undefined, page_size: 12 });
      setAgents(res.items);
    } catch {
      setAgents([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    fetchAgents(search);
  }, [open, search, fetchAgents]);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = agents.find((a) => a.id === currentAgentId);
  const title = current?.name || currentAgentName || (currentAgentId ? "AI Agent" : "Switch agent…");

  const handleSelect = (agent: PortalAgentItem) => {
    setOpen(false);
    setSearch("");
    router.push(`/agent-portal/agents/${agent.id}`);
  };

  return (
    <div ref={dropRef} className="relative w-full" suppressHydrationWarning>
      <button
        suppressHydrationWarning
        onClick={() => {
          setOpen((p) => !p);
          setTimeout(() => inputRef.current?.focus(), 50);
        }}
        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-indigo-500/50 text-sm text-slate-300 transition-all cursor-pointer group"
      >
        <Bot className="h-4 w-4 text-indigo-400 shrink-0" />
        <span className="flex-1 text-left truncate text-xs font-medium">
          {title}
        </span>
        <ChevronDown className={`h-3.5 w-3.5 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full mt-1.5 z-50 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl shadow-black/40 overflow-hidden">
          {/* Search */}
          <div className="px-3 py-2 border-b border-slate-800">
            <div className="flex items-center gap-2 bg-slate-800 rounded-lg px-2.5 py-1.5">
              <Search className="h-3.5 w-3.5 text-slate-500 shrink-0" />
              <input
                ref={inputRef}
                suppressHydrationWarning
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search agents…"
                className="flex-1 bg-transparent text-xs text-slate-200 placeholder-slate-500 outline-none"
              />
            </div>
          </div>

          {/* Agent list */}
          <div className="max-h-56 overflow-y-auto">
            {loading ? (
              <div className="flex items-center justify-center py-6">
                <Loader2 className="h-4 w-4 animate-spin text-indigo-400" />
              </div>
            ) : agents.length === 0 ? (
              <p className="text-center text-slate-500 text-xs py-5">No agents found</p>
            ) : (
              agents.map((agent) => (
                <button
                  key={agent.id}
                  suppressHydrationWarning
                  onClick={() => handleSelect(agent)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 text-left hover:bg-slate-800 transition-colors cursor-pointer ${
                    agent.id === currentAgentId ? "bg-indigo-500/10" : ""
                  }`}
                >
                  <div className="h-7 w-7 rounded-lg bg-indigo-600/20 flex items-center justify-center shrink-0">
                    <Bot className="h-3.5 w-3.5 text-indigo-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-slate-200 truncate">{agent.name}</p>
                    <p className="text-[10px] text-slate-500 truncate">{agent.type} · {agent.status}</p>
                  </div>
                  {agent.id === currentAgentId && (
                    <span className="ml-auto text-[10px] font-bold text-indigo-400">Current</span>
                  )}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};
