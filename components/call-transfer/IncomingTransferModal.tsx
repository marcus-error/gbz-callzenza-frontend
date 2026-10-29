"use client";

import React, { useEffect, useState, useRef } from "react";
import { PhoneCall, PhoneOff, User, Phone, FileText, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface IncomingTransferData {
  transfer_id: string;
  call_id: string;
  customer_name: string;
  customer_phone: string;
  campaign_id?: string;
  campaign_name?: string;
  transcript_summary?: string;
  notes?: string;
}

interface IncomingTransferModalProps {
  transfer: IncomingTransferData | null;
  onAccept: (transferId: string) => Promise<void> | void;
  onDecline: (transferId: string, reason?: string) => Promise<void> | void;
  onTimeout?: (transferId: string) => Promise<void> | void;
}

export const IncomingTransferModal: React.FC<IncomingTransferModalProps> = ({
  transfer,
  onAccept,
  onDecline,
  onTimeout,
}) => {
  const [countdown, setCountdown] = useState<number>(20);
  const [isProcessing, setIsProcessing] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const ringIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Synthesize soft ringing chime
  const playRingChime = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(520, ctx.currentTime);
      osc.frequency.setValueAtTime(650, ctx.currentTime + 0.15);

      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.6);
    } catch (_) {}
  };

  useEffect(() => {
    if (!transfer) {
      if (ringIntervalRef.current) clearInterval(ringIntervalRef.current);
      return;
    }

    setCountdown(20);
    setIsProcessing(false);

    // Initial chime and repeat every 2.5s
    playRingChime();
    ringIntervalRef.current = setInterval(() => {
      playRingChime();
    }, 2500);

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          if (ringIntervalRef.current) clearInterval(ringIntervalRef.current);
          if (onTimeout && transfer.transfer_id) {
            onTimeout(transfer.transfer_id);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
      if (ringIntervalRef.current) clearInterval(ringIntervalRef.current);
    };
  }, [transfer, onTimeout]);

  if (!transfer) return null;

  const handleAcceptClick = async () => {
    setIsProcessing(true);
    if (ringIntervalRef.current) clearInterval(ringIntervalRef.current);
    try {
      await onAccept(transfer.transfer_id);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDeclineClick = async () => {
    setIsProcessing(true);
    if (ringIntervalRef.current) clearInterval(ringIntervalRef.current);
    try {
      await onDecline(transfer.transfer_id, "Agent declined manually");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header with Ringing Badge */}
        <div className="bg-gradient-to-r from-amber-500 to-indigo-600 px-5 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <div className="p-2 bg-white/20 rounded-xl backdrop-blur-md">
                <PhoneCall className="h-5 w-5 animate-bounce" />
              </div>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
              </span>
            </div>
            <div>
              <h3 className="font-bold text-sm tracking-tight">Incoming Warm Call Transfer</h3>
              <p className="text-[11px] text-white/80">From GBZ AI Agent</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 bg-black/20 px-3 py-1 rounded-full text-xs font-mono font-bold">
            <Clock className="h-3.5 w-3.5 text-amber-200" />
            <span>{countdown}s</span>
          </div>
        </div>

        {/* Customer & Campaign Details */}
        <div className="p-5 space-y-4 text-slate-800">
          <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
            <div>
              <label className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                Customer Name
              </label>
              <div className="text-sm font-semibold flex items-center gap-1.5 mt-0.5 text-slate-900">
                <User className="h-3.5 w-3.5 text-slate-400" />
                {transfer.customer_name || "Customer"}
              </div>
            </div>
            <div>
              <label className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                Phone Number
              </label>
              <div className="text-sm font-semibold flex items-center gap-1.5 mt-0.5 text-slate-900">
                <Phone className="h-3.5 w-3.5 text-slate-400" />
                {transfer.customer_phone || "Unknown"}
              </div>
            </div>
          </div>

          {/* AI Context / Transcript Snapshot */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-slate-700 flex items-center gap-1">
                <Sparkles className="h-3.5 w-3.5 text-indigo-500" /> AI Conversation Context
              </span>
              <span className="text-[10px] text-slate-400 uppercase font-semibold">Live Transcript</span>
            </div>
            <div className="bg-slate-900 text-slate-200 p-3 rounded-xl text-xs font-mono max-h-36 overflow-y-auto leading-relaxed border border-slate-800 shadow-inner">
              {transfer.transcript_summary ? (
                <p className="whitespace-pre-wrap">{transfer.transcript_summary}</p>
              ) : (
                <p className="text-slate-500 italic">Customer requested to speak with a human specialist.</p>
              )}
            </div>
          </div>

          {/* Action Buttons: Accept / Decline */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <Button
              type="button"
              disabled={isProcessing}
              onClick={handleDeclineClick}
              variant="outline"
              className="w-full border-rose-200 text-rose-600 hover:bg-rose-50 hover:text-rose-700 font-bold text-xs h-10 cursor-pointer flex items-center justify-center gap-2"
            >
              <PhoneOff className="h-4 w-4" /> Decline
            </Button>
            <Button
              type="button"
              disabled={isProcessing}
              onClick={handleAcceptClick}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs h-10 cursor-pointer shadow-md flex items-center justify-center gap-2"
            >
              <PhoneCall className="h-4 w-4" /> Accept & Connect
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
