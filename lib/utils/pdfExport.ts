import jsPDF from "jspdf";
import { AgentDashboardSummary, CallItem } from "@/lib/services/aiAgentDashboardService";
import { formatLocalDateTime } from "@/lib/utils/dateTime";

export interface CampaignExportItem {
  id: string;
  name: string;
  status: string;
  phone_number?: string;
  total_calls?: number;
  lead_group_name?: string;
  started_at?: string | null;
  created_at?: string | null;
}

/**
 * Downloads an audio file from a given URL as a real audio blob download.
 */
export async function downloadAudioFile(url: string, defaultName?: string) {
  if (!url) return;
  const fileName = defaultName || "call_recording.wav";
  const safeName = fileName.endsWith(".wav") || fileName.endsWith(".mp3") ? fileName : `${fileName}.wav`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Network response was not ok");
    const blob = await res.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = safeName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(blobUrl);
  } catch {
    // Direct link fallback
    const link = document.createElement("a");
    link.href = url;
    link.download = safeName;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

/**
 * Downloads a single call conversation transcript as a formatted text file.
 */
export function downloadTranscriptFile(call: CallItem) {
  const lines = [
    "================================================================================",
    "GBZ AI AGENT CONVERSATION TRANSCRIPT",
    "================================================================================",
    `Call ID       : ${call.call_id}`,
    `Customer / Lead: ${call.lead_name || "Unknown Lead"}`,
    `Phone Number  : ${call.phone_number || "—"}`,
    `Call Date/Time: ${formatLocalDateTime(call.start_time)}`,
    `Duration      : ${call.duration_formatted || `${call.duration_seconds || 0}s`}`,
    `Status        : ${call.status}`,
    `Outcome       : ${call.outcome || "—"}`,
    `Sentiment     : ${call.sentiment || "NEUTRAL"}`,
    `AI Summary    : ${call.ai_summary || "—"}`,
    "--------------------------------------------------------------------------------",
    "FULL CONVERSATION DIALOGUE:",
    "--------------------------------------------------------------------------------",
    "",
    call.transcript || "No transcript text available for this call session.",
    "",
    "================================================================================",
    `Exported from GBZ AI Intelligence Portal on ${formatLocalDateTime(new Date().toISOString())}`,
    "================================================================================",
  ];

  const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  const safeName = (call.lead_name || "transcript").replace(/[^a-zA-Z0-9_-]/g, "_");
  link.href = url;
  link.download = `Transcript_${safeName}_${call.call_id.slice(0, 8)}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}

/**
 * Downloads all transcripts matching current filters as a single text compilation.
 */
export function downloadAllTranscriptsFile(calls: CallItem[], agentName: string = "AI_Agent") {
  if (!calls || calls.length === 0) return;

  const header = [
    "================================================================================",
    `GBZ AI AGENT - ALL CONVERSATION TRANSCRIPTS (${calls.length} CALLS)`,
    `Agent Name: ${agentName}`,
    `Exported  : ${formatLocalDateTime(new Date().toISOString())}`,
    "================================================================================",
    "",
  ];

  const transcriptBlocks = calls.map((call, idx) => {
    return [
      `[CALL ${idx + 1} OF ${calls.length}] ----------------------------------------------------`,
      `Call ID       : ${call.call_id}`,
      `Lead Name     : ${call.lead_name || "Unknown"}`,
      `Phone Number  : ${call.phone_number}`,
      `Date & Time   : ${formatLocalDateTime(call.start_time)}`,
      `Duration      : ${call.duration_formatted}`,
      `Status/Outcome: ${call.status} / ${call.outcome || "—"}`,
      `Sentiment     : ${call.sentiment}`,
      `AI Summary    : ${call.ai_summary || "—"}`,
      "",
      "Dialogue:",
      call.transcript || "No transcript dialogue recorded.",
      "",
      "--------------------------------------------------------------------------------",
      "",
    ].join("\n");
  });

  const fullText = header.join("\n") + transcriptBlocks.join("\n");
  const blob = new Blob([fullText], { type: "text/plain;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  const safeAgent = agentName.replace(/[^a-zA-Z0-9_-]/g, "_");
  link.href = url;
  link.download = `${safeAgent}_All_Transcripts.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}

/**
 * Exports all call records into a clean, Excel-compatible CSV file.
 */
export function exportCallsToCsv(calls: CallItem[], agentName: string = "AI_Agent") {
  if (!calls || calls.length === 0) return;

  const headers = [
    "Call ID",
    "Lead Name",
    "Phone Number",
    "Start Time (Local)",
    "Duration (Seconds)",
    "Duration Formatted",
    "Status",
    "Outcome",
    "Sentiment",
    "AI Summary",
    "Retry Count",
    "Recording URL",
  ];

  const escapeCsv = (val: any) => {
    if (val === null || val === undefined) return '""';
    const s = String(val).replace(/"/g, '""');
    return `"${s}"`;
  };

  const rows = calls.map((c) => [
    escapeCsv(c.call_id),
    escapeCsv(c.lead_name),
    escapeCsv(c.phone_number),
    escapeCsv(formatLocalDateTime(c.start_time)),
    escapeCsv(c.duration_seconds),
    escapeCsv(c.duration_formatted),
    escapeCsv(c.status),
    escapeCsv(c.outcome),
    escapeCsv(c.sentiment),
    escapeCsv(c.ai_summary),
    escapeCsv(c.retry_count),
    escapeCsv(c.recording_url),
  ]);

  const csvContent = "\uFEFF" + [headers.join(","), ...rows.map((r) => r.join(","))].join("\r\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  const safeAgent = agentName.replace(/[^a-zA-Z0-9_-]/g, "_");
  link.href = url;
  link.download = `${safeAgent}_Call_Records.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}

/**
 * Generates and downloads a dedicated PDF Report for an individual Campaign.
 */
export function exportCampaignReportToPdf(campaign: CampaignExportItem, agentName: string = "AI Agent") {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 14;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  const campName = campaign.name || "Campaign";
  const campStatus = (campaign.status || "IDLE").toUpperCase();
  const generatedAt = formatLocalDateTime(new Date().toISOString());

  // Header Banner
  doc.setFillColor(15, 23, 42); // slate-900
  doc.roundedRect(margin, y, contentWidth, 30, 3, 3, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(255, 255, 255);
  doc.text("GBZ", margin + 6, y + 10);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(129, 140, 248);
  doc.text("CAMPAIGN TELEMETRY & EXECUTION REPORT", margin + 6, y + 16);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(255, 255, 255);
  doc.text(campName, pageWidth - margin - 6, y + 10, { align: "right" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(203, 213, 225);
  doc.text(`Status: ${campStatus}  ·  Generated: ${generatedAt}`, pageWidth - margin - 6, y + 16, {
    align: "right",
  });

  y += 36;

  // Campaign Overview Grid
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text("Campaign Configuration & Metadata", margin, y);
  y += 6;

  const details = [
    { label: "Campaign Name", value: campName },
    { label: "Execution Status", value: campStatus },
    { label: "Assigned AI Agent", value: agentName },
    { label: "Outbound / Caller ID", value: campaign.phone_number || "—" },
    { label: "Target Lead Group", value: campaign.lead_group_name || "Lead Library" },
    { label: "Total Calls Processed", value: (campaign.total_calls || 0).toLocaleString() },
    { label: "Started Date", value: formatLocalDateTime(campaign.started_at) },
    { label: "Creation Date", value: formatLocalDateTime(campaign.created_at) },
  ];

  const colW = (contentWidth - 6) / 2;
  const rowH = 14;

  details.forEach((item, idx) => {
    const colIdx = idx % 2;
    const rowIdx = Math.floor(idx / 2);
    const cx = margin + colIdx * (colW + 6);
    const cy = y + rowIdx * (rowH + 3);

    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.roundedRect(cx, cy, colW, rowH, 2, 2, "FD");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.setTextColor(100, 116, 139);
    doc.text(item.label.toUpperCase(), cx + 4, cy + 5);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(15, 23, 42);
    doc.text(item.value, cx + 4, cy + 10.5);
  });

  y += Math.ceil(details.length / 2) * (rowH + 3) + 10;

  // Performance Summary
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text("Operational Summary", margin, y);
  y += 6;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(51, 65, 85);
  const summaryText = [
    `This campaign is actively configured to run autonomous voice lead qualification utilizing the AI Agent "${agentName}".`,
    `A total of ${(campaign.total_calls || 0).toLocaleString()} calls have been executed through telephone number ${campaign.phone_number || "assigned telephony trunk"}.`,
    `All call recordings, transcripts, and disposition telemetry are archived and accessible in real-time under the GBZ AI Agent Intelligence Portal.`,
  ];
  summaryText.forEach((p) => {
    doc.text(p, margin, y);
    y += 5.5;
  });

  // Footer
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.setTextColor(148, 163, 184);
  doc.setDrawColor(226, 232, 240);
  doc.line(margin, pageHeight - 10, pageWidth - margin, pageHeight - 10);
  doc.text("CONFIDENTIAL · GBZ Campaign Telemetry Document", margin, pageHeight - 6);
  doc.text("Page 1 of 1", pageWidth - margin, pageHeight - 6, { align: "right" });

  const safeName = campName.replace(/[^a-zA-Z0-9_-]/g, "_");
  doc.save(`Campaign_${safeName}_Report.pdf`);
}

/**
 * Generates and downloads a comprehensive, vector-based PDF report for the AI Agent.
 */
export function exportAgentReportToPdf(
  summary: AgentDashboardSummary,
  recentCalls: CallItem[] = [],
  campaigns: CampaignExportItem[] = []
) {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 14;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  const agentName = summary?.agent?.name || "AI Agent";
  const agentType = summary?.agent?.type || "AI Agent";
  const agentPhone = summary?.agent?.phone_number || "—";
  const agentStatus = (summary?.agent?.status || "ACTIVE").toUpperCase();
  const generatedAt = formatLocalDateTime(new Date().toISOString());

  // Helper: check page break
  const ensureSpace = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - 15) {
      doc.addPage();
      y = margin;
      drawPageHeaderMini();
    }
  };

  const drawPageHeaderMini = () => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text(`GBZ AI Portal · ${agentName} Report`, margin, 8);
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.2);
    doc.line(margin, 10, pageWidth - margin, 10);
  };

  // ---------------------------------------------------------
  // 1. BRAND HEADER & REPORT TITLE
  // ---------------------------------------------------------
  doc.setFillColor(15, 23, 42); // slate-900
  doc.roundedRect(margin, y, contentWidth, 28, 3, 3, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(255, 255, 255);
  doc.text("GBZ", margin + 6, y + 10);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(129, 140, 248); // indigo-400
  doc.text("AI AGENT INTELLIGENCE REPORT", margin + 6, y + 16);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(255, 255, 255);
  const agentTitle = `${agentName}`;
  doc.text(agentTitle, pageWidth - margin - 6, y + 10, { align: "right" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(203, 213, 225);
  doc.text(
    `Status: ${agentStatus}  ·  Phone: ${agentPhone}  ·  Generated: ${generatedAt}`,
    pageWidth - margin - 6,
    y + 16,
    { align: "right" }
  );

  y += 34;

  // ---------------------------------------------------------
  // 2. EXECUTIVE KPI CARDS
  // ---------------------------------------------------------
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text("Executive Performance Summary", margin, y);
  y += 5;

  const kpis = summary.kpis || ({} as any);
  const kpiCards = [
    { label: "Total Calls", value: (kpis.total_calls || 0).toLocaleString(), sub: "All dial attempts" },
    { label: "Connected Calls", value: (kpis.connected_calls || 0).toLocaleString(), sub: "Call bridged" },
    { label: "Answered Calls", value: (kpis.answered_calls || 0).toLocaleString(), sub: "Pickup verified" },
    { label: "Missed / Busy", value: (kpis.missed_failed_calls || 0).toLocaleString(), sub: "No answer / error" },
    { label: "Avg Duration", value: kpis.avg_call_duration_formatted || "—", sub: "Answered duration" },
    { label: "Success Rate", value: `${(kpis.success_rate_percentage || 0).toFixed(1)}%`, sub: "Qualified leads" },
    { label: "In Queue", value: (kpis.leads_in_queue || 0).toLocaleString(), sub: "Pending calls" },
    { label: "Completed", value: (kpis.leads_completed || 0).toLocaleString(), sub: "Total finished" },
  ];

  const cols = 4;
  const cardGap = 3;
  const cardWidth = (contentWidth - (cols - 1) * cardGap) / cols;
  const cardHeight = 16;

  kpiCards.forEach((card, idx) => {
    const colIdx = idx % cols;
    const rowIdx = Math.floor(idx / cols);
    const cx = margin + colIdx * (cardWidth + cardGap);
    const cy = y + rowIdx * (cardHeight + cardGap);

    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.roundedRect(cx, cy, cardWidth, cardHeight, 2, 2, "FD");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42);
    doc.text(card.value, cx + 4, cy + 6.5);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(6.5);
    doc.setTextColor(100, 116, 139);
    doc.text(card.label.toUpperCase(), cx + 4, cy + 10.5);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(5.5);
    doc.setTextColor(148, 163, 184);
    doc.text(card.sub, cx + 4, cy + 13.5);
  });

  y += 2 * (cardHeight + cardGap) + 6;

  // ---------------------------------------------------------
  // 3. OUTCOMES & DISPOSITION DISTRIBUTION
  // ---------------------------------------------------------
  ensureSpace(40);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text("Call Outcomes & Disposition Breakdown", margin, y);
  y += 5;

  const outcomes = summary.outcome_distribution || {};
  const totalOutcomes = Object.values(outcomes).reduce((sum, v) => sum + v, 0) || 1;
  const outcomeEntries = Object.entries(outcomes);

  if (outcomeEntries.length === 0) {
    doc.setFont("helvetica", "italic");
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text("No outcome records recorded for this agent.", margin, y + 4);
    y += 10;
  } else {
    doc.setFillColor(241, 245, 249);
    doc.rect(margin, y, contentWidth, 6, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.setTextColor(71, 85, 105);
    doc.text("Outcome / Disposition", margin + 4, y + 4.2);
    doc.text("Calls Count", margin + 110, y + 4.2, { align: "right" });
    doc.text("Percentage", margin + 145, y + 4.2, { align: "right" });
    doc.text("Share Bar", margin + 155, y + 4.2);
    y += 7;

    outcomeEntries.forEach(([name, count]) => {
      ensureSpace(7);
      const pct = ((count / totalOutcomes) * 100).toFixed(1);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.5);
      doc.setTextColor(15, 23, 42);
      doc.text(name || "UNSPECIFIED", margin + 4, y + 3.8);

      doc.setFont("helvetica", "bold");
      doc.text(count.toLocaleString(), margin + 110, y + 3.8, { align: "right" });

      doc.setFont("helvetica", "normal");
      doc.setTextColor(100, 116, 139);
      doc.text(`${pct}%`, margin + 145, y + 3.8, { align: "right" });

      const barW = Math.max(1, (Number(pct) / 100) * 25);
      doc.setFillColor(99, 102, 241);
      doc.roundedRect(margin + 155, y + 1.5, barW, 2.8, 1, 1, "F");

      doc.setDrawColor(241, 245, 249);
      doc.setLineWidth(0.2);
      doc.line(margin, y + 5.5, margin + contentWidth, y + 5.5);

      y += 6;
    });
    y += 4;
  }

  // ---------------------------------------------------------
  // 4. CAMPAIGNS USING THIS AGENT
  // ---------------------------------------------------------
  if (campaigns && campaigns.length > 0) {
    ensureSpace(35);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42);
    doc.text("Assigned Campaigns", margin, y);
    y += 5;

    doc.setFillColor(241, 245, 249);
    doc.rect(margin, y, contentWidth, 6, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.setTextColor(71, 85, 105);
    doc.text("Campaign Name", margin + 4, y + 4.2);
    doc.text("Status", margin + 90, y + 4.2);
    doc.text("Phone Number", margin + 120, y + 4.2);
    doc.text("Total Calls", margin + contentWidth - 4, y + 4.2, { align: "right" });
    y += 7;

    campaigns.forEach((camp) => {
      ensureSpace(7);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(7.5);
      doc.setTextColor(15, 23, 42);
      doc.text(camp.name || "—", margin + 4, y + 3.8);

      doc.setFont("helvetica", "normal");
      doc.setTextColor(16, 185, 129);
      doc.text((camp.status || "IDLE").toUpperCase(), margin + 90, y + 3.8);

      doc.setTextColor(100, 116, 139);
      doc.text(camp.phone_number || "—", margin + 120, y + 3.8);

      doc.setFont("helvetica", "bold");
      doc.setTextColor(15, 23, 42);
      doc.text((camp.total_calls || 0).toLocaleString(), margin + contentWidth - 4, y + 3.8, { align: "right" });

      doc.setDrawColor(241, 245, 249);
      doc.setLineWidth(0.2);
      doc.line(margin, y + 5.5, margin + contentWidth, y + 5.5);

      y += 6;
    });
    y += 4;
  }

  // ---------------------------------------------------------
  // 5. CALL VOLUME TREND (TIMELINE)
  // ---------------------------------------------------------
  const trend = summary.call_volume_trend || [];
  if (trend.length > 0) {
    ensureSpace(35);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42);
    doc.text("Daily Call Volume Activity", margin, y);
    y += 5;

    doc.setFillColor(241, 245, 249);
    doc.rect(margin, y, contentWidth, 6, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.setTextColor(71, 85, 105);
    doc.text("Date", margin + 4, y + 4.2);
    doc.text("Total Calls Attempted", margin + 90, y + 4.2);
    doc.text("Connected Calls", margin + contentWidth - 4, y + 4.2, { align: "right" });
    y += 7;

    trend.forEach((pt) => {
      ensureSpace(7);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.5);
      doc.setTextColor(15, 23, 42);
      doc.text(pt.label || "—", margin + 4, y + 3.8);

      doc.setFont("helvetica", "bold");
      doc.text(pt.value.toLocaleString(), margin + 90, y + 3.8);

      doc.setTextColor(79, 70, 229);
      doc.text((pt.secondary_value ?? 0).toLocaleString(), margin + contentWidth - 4, y + 3.8, { align: "right" });

      doc.setDrawColor(241, 245, 249);
      doc.setLineWidth(0.2);
      doc.line(margin, y + 5.5, margin + contentWidth, y + 5.5);

      y += 6;
    });
    y += 4;
  }

  // ---------------------------------------------------------
  // 6. SAMPLE OF RECENT CALL LOGS
  // ---------------------------------------------------------
  if (recentCalls && recentCalls.length > 0) {
    ensureSpace(45);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42);
    doc.text("Recent Call Activity Sample", margin, y);
    y += 5;

    doc.setFillColor(241, 245, 249);
    doc.rect(margin, y, contentWidth, 6, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.setTextColor(71, 85, 105);
    doc.text("Customer / Lead", margin + 4, y + 4.2);
    doc.text("Phone", margin + 45, y + 4.2);
    doc.text("Duration", margin + 85, y + 4.2);
    doc.text("Status", margin + 110, y + 4.2);
    doc.text("Outcome", margin + 140, y + 4.2);
    doc.text("Sentiment", margin + contentWidth - 4, y + 4.2, { align: "right" });
    y += 7;

    recentCalls.slice(0, 15).forEach((call) => {
      ensureSpace(7);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(7);
      doc.setTextColor(15, 23, 42);
      const name = (call.lead_name || "Unknown Lead").slice(0, 22);
      doc.text(name, margin + 4, y + 3.8);

      doc.setFont("helvetica", "normal");
      doc.setTextColor(100, 116, 139);
      doc.text(call.phone_number || "—", margin + 45, y + 3.8);

      doc.text(call.duration_formatted || `${call.duration_seconds || 0}s`, margin + 85, y + 3.8);

      doc.setFont("helvetica", "bold");
      doc.setTextColor(call.status === "COMPLETED" ? 16 : 99, call.status === "COMPLETED" ? 185 : 102, call.status === "COMPLETED" ? 129 : 241);
      doc.text(call.status || "—", margin + 110, y + 3.8);

      doc.setFont("helvetica", "normal");
      doc.setTextColor(71, 85, 105);
      doc.text((call.outcome || "—").slice(0, 18), margin + 140, y + 3.8);

      doc.setTextColor(call.sentiment === "POSITIVE" ? 16 : 100, call.sentiment === "POSITIVE" ? 185 : 116, call.sentiment === "POSITIVE" ? 129 : 139);
      doc.text(call.sentiment || "NEUTRAL", margin + contentWidth - 4, y + 3.8, { align: "right" });

      doc.setDrawColor(241, 245, 249);
      doc.setLineWidth(0.2);
      doc.line(margin, y + 5.5, margin + contentWidth, y + 5.5);

      y += 6;
    });
  }

  // ---------------------------------------------------------
  // 7. FOOTERS (All Pages)
  // ---------------------------------------------------------
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.setTextColor(148, 163, 184);

    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.2);
    doc.line(margin, pageHeight - 10, pageWidth - margin, pageHeight - 10);

    doc.text(
      "CONFIDENTIAL · GBZ AI Agent Intelligence Portal · Real-time Operational Telemetry",
      margin,
      pageHeight - 6
    );

    doc.text(`Page ${i} of ${totalPages}`, pageWidth - margin, pageHeight - 6, {
      align: "right",
    });
  }

  const cleanFilename = `${agentName.trim().replace(/[^a-zA-Z0-9_-]/g, "_")}_Performance_Report.pdf`;
  doc.save(cleanFilename);
}
