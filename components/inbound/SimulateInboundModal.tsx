"use client";

import React, { useState } from "react";
import { PhoneIncoming, X, Sparkles, Bot, Mic, User, Phone, Check } from "lucide-react";
import { inboundService } from "@/lib/services/inbound.service";

interface SimulateInboundModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultAgentType?: "AI" | "VOICE";
}

export const SimulateInboundModal: React.FC<SimulateInboundModalProps> = ({
  isOpen,
  onClose,
  defaultAgentType = "AI",
}) => {
  const [callerName, setCallerName] = useState("Aarav Patel");
  const [callerPhone, setCallerPhone] = useState("+91 98765 43210");
  const [toNumber, setToNumber] = useState("+1 800 555 0199");
  const [agentType, setAgentType] = useState<"AI" | "VOICE">(defaultAgentType);
  const [notes, setNotes] = useState("Inbound sales inquiry regarding pricing plans");
  const [isSimulating, setIsSimulating] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSimulate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSimulating(true);
    setSuccessMsg(null);
    try {
      const res = await inboundService.simulateInboundCall({
        caller_name: callerName.trim() || "Incoming Customer",
        caller_phone: callerPhone.trim() || "+91 98765 43210",
        to_number: toNumber.trim() || "+1 800 555 0199",
        agent_type: agentType,
        notes: notes.trim(),
      });

      if (res && res.call) {
        // Dispatch local event so current window immediately responds
        if (typeof window !== "undefined") {
          window.dispatchEvent(
            new CustomEvent("GBZ:incoming-call", {
              detail: {
                call_id: res.call.id,
                caller_name: res.call.client_name,
                caller_phone: res.call.client_phone,
                to_number: res.call.to_number,
                agent_type: res.call.agent_type,
                status: "RINGING",
                notes: notes,
                created_at: res.call.initiated_at,
              },
            })
          );
        }
      }

      setSuccessMsg("Incoming call dispatched! Ringing popup active.");
      setTimeout(() => {
        onClose();
      }, 700);
    } catch (err: any) {
      console.error("Failed to simulate inbound call:", err);
      alert(err.message || "Failed to trigger inbound call simulation");
    } finally {
      setIsSimulating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4 animate-fade-in font-sans">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden animate-scale-up">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-emerald-50 via-teal-50 to-indigo-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/30">
              <PhoneIncoming className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900 tracking-tight">Simulate Inbound Call</h3>
              <p className="text-xs text-slate-500 font-medium">Trigger an incoming call to test Attend & Decline popups</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-slate-200/60 flex items-center justify-center text-slate-400 hover:text-slate-700 transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSimulate} className="p-6 space-y-4">
          {successMsg && (
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2 animate-fade-in">
              <Check className="w-4 h-4 text-emerald-600" />
              {successMsg}
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">
              Caller Full Name
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={callerName}
                onChange={(e) => setCallerName(e.target.value)}
                placeholder="e.g. Aarav Patel"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:border-indigo-600 focus:bg-white transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">
                Caller Phone
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={callerPhone}
                  onChange={(e) => setCallerPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-800 focus:outline-none focus:border-indigo-600 focus:bg-white transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">
                Inbound Line (DID)
              </label>
              <input
                type="text"
                value={toNumber}
                onChange={(e) => setToNumber(e.target.value)}
                placeholder="+1 800 555 0199"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-800 focus:outline-none focus:border-indigo-600 focus:bg-white transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">
              Target Destination Agent
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setAgentType("AI")}
                className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition ${
                  agentType === "AI"
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                    : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                }`}
              >
                <Bot className="w-4 h-4" /> AI Agent
              </button>

              <button
                type="button"
                onClick={() => setAgentType("VOICE")}
                className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition ${
                  agentType === "VOICE"
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                    : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                }`}
              >
                <Mic className="w-4 h-4" /> Voice Agent
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">
              Inquiry / Reason
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Inbound inquiry for product support"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-none focus:border-indigo-600 focus:bg-white transition"
            />
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-800 transition cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSimulating}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-md shadow-emerald-600/30 cursor-pointer disabled:opacity-50"
            >
              <PhoneIncoming className="w-4 h-4" />
              {isSimulating ? "Simulating Ring..." : "Start Inbound Ring"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
