/**
 * Date and time formatting utility with accurate UTC-to-local timezone conversion.
 * Resolves naive UTC strings from backend (without 'Z') to local user time (e.g. IST).
 */

export function parseBackendDate(isoStr?: string | null): Date | null {
  if (!isoStr) return null;
  const s = String(isoStr).trim();
  if (!s) return null;

  // If naive ISO like "2026-10-09T07:37:13" without trailing Z or explicit +/- offset
  if (s.includes("T") && !s.endsWith("Z") && !s.includes("+") && !s.match(/-\d{2}:\d{2}$/)) {
    return new Date(`${s}Z`);
  }
  return new Date(s);
}

/**
 * Formats full date and time in user's local timezone:
 * e.g. "Oct 9, 2026, 01:07 PM"
 */
export function formatLocalDateTime(isoStr?: string | null): string {
  const d = parseBackendDate(isoStr);
  if (!d || isNaN(d.getTime())) return isoStr || "—";

  return d.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

/**
 * Formats short date and time:
 * e.g. "Oct 9, 01:07 PM"
 */
export function formatShortDateTime(isoStr?: string | null): string {
  const d = parseBackendDate(isoStr);
  if (!d || isNaN(d.getTime())) return isoStr || "—";

  return d.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

/**
 * Formats date only:
 * e.g. "Oct 9, 2026"
 */
export function formatLocalDateOnly(isoStr?: string | null): string {
  const d = parseBackendDate(isoStr);
  if (!d || isNaN(d.getTime())) return isoStr || "—";

  return d.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Formats time only:
 * e.g. "01:07 PM"
 */
export function formatLocalTimeOnly(isoStr?: string | null): string {
  const d = parseBackendDate(isoStr);
  if (!d || isNaN(d.getTime())) return isoStr || "—";

  return d.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}
