"use client";

import React, { useState, useRef, useEffect } from "react";
import { Download, FileText, Music, FileSpreadsheet, ChevronDown, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { callHistoryService, RecordingInfo } from "@/lib/services/call-history-v2.service";

interface DownloadMenuProps {
  callId: string;
  recording: RecordingInfo;
}

export const DownloadMenu: React.FC<DownloadMenuProps> = ({ callId, recording }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDownloadingAudio, setIsDownloadingAudio] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const hasRecording = recording.status !== "not_recorded" && recording.status !== "failed";

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleDownloadAudio = async () => {
    if (!hasRecording || isDownloadingAudio) return;
    setIsDownloadingAudio(true);
    try {
      const data = await callHistoryService.getStreamUrl(callId, 0);
      if (data?.download_url) {
        const link = document.createElement("a");
        link.href = data.download_url;
        link.download = "";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (err) {
      console.error("[DownloadMenu] Failed to start audio download:", err);
    } finally {
      setIsDownloadingAudio(false);
      setIsOpen(false);
    }
  };

  const handleDownloadReport = async (format: "csv" | "pdf") => {
    setIsOpen(false);
    if (format === "csv") {
      try {
        await callHistoryService.downloadSingleCallCsv(callId);
      } catch (err) {
        console.error("Single call report download error:", err);
        const url = callHistoryService.getSingleCallReportUrl(callId, format);
        window.open(url, "_blank");
      }
    } else {
      const url = callHistoryService.getSingleCallReportUrl(callId, format);
      window.open(url, "_blank");
    }
  };

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Download options"
        className="flex items-center gap-1 h-9 px-2.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border-slate-200"
      >
        <Download className="h-3.5 w-3.5" />
        <span>Export</span>
        <ChevronDown className="h-3 w-3 opacity-60 ml-0.5" />
      </Button>

      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          className="absolute right-0 mt-1.5 w-52 rounded-lg bg-white shadow-xl ring-1 ring-black/10 py-1.5 z-50 text-xs border border-slate-100 animate-in fade-in zoom-in-95 duration-100"
        >
          {/* Download Recording */}
          <button
            role="menuitem"
            disabled={!hasRecording || isDownloadingAudio}
            onClick={handleDownloadAudio}
            title={!hasRecording ? "No recording available for this call" : "Download call audio file"}
            className={`w-full flex items-center gap-2 px-3.5 py-2 text-left font-medium transition-colors ${
              !hasRecording
                ? "text-slate-400 opacity-60 cursor-not-allowed bg-slate-50/50"
                : "text-slate-700 hover:bg-indigo-50 hover:text-indigo-600"
            }`}
          >
            {isDownloadingAudio ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin text-indigo-600" />
            ) : (
              <Music className="h-3.5 w-3.5 text-indigo-500" />
            )}
            <span>
              {isDownloadingAudio ? "Preparing Audio..." : "Download Recording"}
            </span>
            {!hasRecording && (
              <span className="ml-auto text-[10px] text-slate-400">N/A</span>
            )}
          </button>

          <div className="my-1 border-t border-slate-100" />

          {/* Download Single Call PDF Report */}
          <button
            role="menuitem"
            onClick={() => handleDownloadReport("pdf")}
            className="w-full flex items-center gap-2 px-3.5 py-2 text-left font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
          >
            <FileText className="h-3.5 w-3.5 text-rose-500" />
            <span>Call Summary (PDF)</span>
          </button>

          {/* Download Single Call CSV Report */}
          <button
            role="menuitem"
            onClick={() => handleDownloadReport("csv")}
            className="w-full flex items-center gap-2 px-3.5 py-2 text-left font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
          >
            <FileSpreadsheet className="h-3.5 w-3.5 text-emerald-600" />
            <span>Call Data (CSV)</span>
          </button>
        </div>
      )}
    </div>
  );
};
