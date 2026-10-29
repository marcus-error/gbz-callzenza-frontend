/**
 * Shared Phone Number Utility for GBZ Voice Agent & Telephony
 * 
 * Provides type-safe extraction, normalization, and validation across all dial paths:
 * - Manual Dial Pad
 * - Lead / Contact Records
 * - Campaign Outbound
 * - 3-Way Conference Slots
 * - Redial / Retry
 */

export function extractPhoneNumber(input: unknown): string {
  if (input === null || input === undefined) return "";
  if (typeof input === "string") return input.trim();
  if (typeof input === "number") return String(input).trim();

  if (typeof input === "object") {
    const obj = input as Record<string, any>;
    
    // Ignore DOM / React Synthetic Events
    if ("nativeEvent" in obj || "currentTarget" in obj || "preventDefault" in obj || "bubbles" in obj) {
      return "";
    }

    // Common phone property names in lead / contact / client models
    const candidate = 
      obj.phone ||
      obj.phone_number ||
      obj.phoneNumber ||
      obj.mobile ||
      obj.mobile_number ||
      obj.mobileNumber ||
      obj.contact_number ||
      obj.contactNumber ||
      obj.client_phone ||
      obj.clientPhone ||
      obj.number ||
      "";

    if (typeof candidate === "string") return candidate.trim();
    if (typeof candidate === "number") return String(candidate).trim();
  }

  return "";
}

export function normalizePhoneNumber(input: unknown): string {
  const extracted = extractPhoneNumber(input);
  if (!extracted) return "";

  // Strip spaces, dashes, parentheses, dots
  // Preserve leading '+' for international format (e.g. +91 9585310712 -> +919585310712)
  let clean = extracted.replace(/[^\d+]/g, "").trim();

  // If starts with multiple pluses, reduce to single plus
  if (clean.startsWith("+")) {
    clean = "+" + clean.replace(/\+/g, "");
  } else {
    clean = clean.replace(/\+/g, "");
  }

  return clean;
}

export function isValidPhoneNumber(input: unknown): boolean {
  const normalized = normalizePhoneNumber(input);
  if (!normalized) return false;

  // E.164 / International telephony standard:
  // Allows optional leading '+', followed by 7 to 15 digits
  return /^(\+?[1-9]\d{6,14}|[0-9]{7,15})$/.test(normalized);
}
