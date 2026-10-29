"use client";

import React, { Suspense } from "react";
import { AppShell } from "@/components/AppShell";
import { CallRecordingsSection } from "@/components/reports/CallRecordingsSection";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function CallRecordingsPage() {
  return (
    <AppShell>
      <div className="p-6 md:p-8 w-full space-y-6 bg-slate-50 min-h-screen">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500">
          <Link href="/reports" className="hover:text-indigo-600 transition-colors font-medium">
            Reports
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-bold text-slate-800">Call Recordings</span>
        </nav>

        {/* Call Recordings Management Section */}
        <Suspense fallback={<div className="p-8 text-center text-slate-400 text-xs">Loading call recordings...</div>}>
          <CallRecordingsSection />
        </Suspense>
      </div>
    </AppShell>
  );
}
