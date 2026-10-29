"use client";

import React from "react";
import { AppShell } from "@/components/AppShell";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { OverallCampaignWiseReport } from "@/components/reports/OverallCampaignWiseReport";

export default function OverallCampaignReportPage() {
  return (
    <AppShell>
      <div className="p-4 md:p-8 w-full bg-[#f6f8fc] min-h-screen">
        {/* Back link */}
        <div className="mb-4">
          <Link
            href="/reports"
            className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Reports
          </Link>
        </div>

        {/* Overall Campaign Wise Report */}
        <OverallCampaignWiseReport />
      </div>
    </AppShell>
  );
}
