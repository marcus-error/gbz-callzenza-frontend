"use client";

import React from "react";
import { PhoneForwarded, Headphones, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { TransferUIStatus } from "@/lib/hooks/useCallTransfer";

interface TransferStatusBannerProps {
  status: TransferUIStatus;
  statusMessage?: string;
  assignedAgentName?: string | null;
  countdown?: number;
  callDurationSeconds?: number;
}

function formatTimer(totalSec: number): string {
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

export const TransferStatusBanner: React.FC<TransferStatusBannerProps> = ({
  status,
  statusMessage,
  assignedAgentName,
  countdown = 20,
  callDurationSeconds = 0,
}) => {
  if (status === "IDLE") return null;

  if (status === "RINGING") {
    return (
      <div className="mx-4 my-2 p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-center justify-between shadow-2xs text-amber-900 transition-all animate-pulse">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 bg-amber-100 rounded-md text-amber-700">
            <PhoneForwarded className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-bold flex items-center gap-2">
              Transferring to Voice Agent...
              {assignedAgentName && (
                <span className="text-amber-800 font-semibold">(Ringing {assignedAgentName})</span>
              )}
            </div>
            <p className="text-[11px] text-amber-700">
              Customer leg is held on call. AI audio muted.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-amber-200/60 px-2.5 py-1 rounded text-xs font-mono font-bold text-amber-900">
          <Clock className="h-3.5 w-3.5" />
          {countdown}s
        </div>
      </div>
    );
  }

  if (status === "CONNECTED_WITH_HUMAN") {
    return (
      <div className="mx-4 my-2 p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-between shadow-2xs text-emerald-900 transition-all">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 bg-emerald-100 rounded-md text-emerald-700">
            <Headphones className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-bold flex items-center gap-1.5">
              <span>Voice Agent {assignedAgentName || "Specialist"} connected with customer</span>
              <span className="text-[10px] bg-emerald-200 text-emerald-800 px-1.5 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                AI Disconnected
              </span>
            </div>
            <p className="text-[11px] text-emerald-700">
              Human agent is speaking directly with customer.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-emerald-200/60 px-2.5 py-1 rounded text-xs font-mono font-bold text-emerald-900">
          <Clock className="h-3.5 w-3.5" />
          {formatTimer(callDurationSeconds)}
        </div>
      </div>
    );
  }

  if (status === "FALLBACK_AI" || status === "FAILED") {
    return (
      <div className="mx-4 my-2 p-2.5 bg-slate-50 border border-slate-200 rounded-lg flex items-center gap-2.5 text-slate-700 text-xs shadow-2xs">
        <AlertCircle className="h-4 w-4 text-slate-500 shrink-0" />
        <div className="flex-1">
          <span className="font-semibold text-slate-800">
            {statusMessage || "All agents busy. GBZ AI Agent continuing qualification flow."}
          </span>
          <span className="text-[11px] text-slate-500 block">Customer call was preserved without interruption.</span>
        </div>
      </div>
    );
  }

  return null;
};
