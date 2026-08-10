// Centralized lead submission with OTP verification.
// Flow: sendOtp() → user enters OTP → verifyAndSubmit() checks OTP → if match, calls dataapi2.php

import { getTrackingParams } from "@/lib/tracking";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxQHCLNyuB4zZk0BfwqNMoUc160pFnGsERxgBGC2XjFvDcNdI8dI1PpcKlWguzcu9Or/exec";

export interface LeadPayload {
  source: string;
  fullName: string;
  email: string;
  countryCode: string;
  mobile: string;
  experience: string;
  course?: string;
  learningCenter?: string;
  learningMode: string;
  authorized: boolean;
  submittedAt: string;
  pageUrl: string;
  referrer: string;
}

// ─── OTP ────────────────────────────────────────────────────────────────────

/**
 * Sends an OTP to the given mobile number.
 * Returns the OTP value from the API so it can be compared client-side.
 */
export const sendOtp = async (
  mobile: string,
  fullName: string
): Promise<{ ok: boolean; otp?: number; reason?: string }> => {
  try {
    const url =
      `https://api.digitalacademy360.com/SendOTP.php` +
      `?mobilenumber=${encodeURIComponent(mobile)}` +
      `&username=d360` +
      `&password=66564AFRR475735` +
      `&fName=${encodeURIComponent(fullName)}`;

    const res = await fetch(url);
    const data = await res.json(); // { otp: 8294 }

    if (typeof data?.otp === "number") {
      return { ok: true, otp: data.otp };
    }
    return { ok: false, reason: "invalid-response" };
  } catch (err) {
    console.error("[OTP] send failed", err);
    return { ok: false, reason: "network-error" };
  }
};

// ─── CRM Submit ─────────────────────────────────────────────────────────────

const buildApiPayload = (payload: LeadPayload) => ({
  name: payload.fullName,
  email: payload.email,
  phone_number: payload.mobile,
  education: payload.experience,
  learning_mode: payload.learningMode,
  country_code: payload.countryCode.split(" ")[0],
  firstLandedUrl: payload.pageUrl,
  finalUrl: payload.pageUrl,
  "form-name_cta-text": payload.source,
  course_program: payload.course || "Webinar",
  form_id: "form-slot-booking",
  username: "gH5jAU2Yzj",
  password: "tSQS6xytwz",
  source: "NA",
  medium: "NA",
  campaign: "NA",
  source_url: payload.referrer || "",
});

/**
 * Posts the lead to the Google Apps Script Web App (Google Sheets).
 * Simple request only: URLSearchParams body, no custom headers, no preflight.
 */
const submitLeadToSheet = async (payload: LeadPayload): Promise<void> => {
  const utm = getTrackingParams();
  const formData = new URLSearchParams();
  formData.append("fullName", payload.fullName);
  formData.append("email", payload.email);
  formData.append("countryCode", payload.countryCode.split(" ")[0]);
  formData.append("mobileNumber", payload.mobile);
  formData.append("workExperience", payload.experience);
  formData.append("course", payload.course || "");
  formData.append("learningCenter", payload.learningCenter || "");
  formData.append(
    "mode",
    payload.learningMode.toLowerCase() === "classroom" ? "Classroom" : "Online"
  );
  formData.append("consent", payload.authorized ? "Yes" : "No");
  formData.append("cta", payload.source);
  formData.append("sourceUrl", payload.pageUrl);
  formData.append("utm_source", utm.utm_source);
  formData.append("utm_medium", utm.utm_medium);
  formData.append("utm_campaign", utm.utm_campaign);
  formData.append("utm_term", utm.utm_term);
  formData.append("utm_content", utm.utm_content);
  formData.append("gclid", utm.gclid);
  formData.append("fbclid", utm.fbclid);

  try {
    await fetch(APPS_SCRIPT_URL, { method: "POST", body: formData });
  } catch (err) {
    console.error("[lead] sheet submit failed", err);
  }
};

/**
 * Single reusable submission function used by every CTA / popup form.
 * Sends the lead to Google Sheets and to the CRM.
 */
export const submitLeadToCrm = async (
  data: Omit<LeadPayload, "submittedAt" | "pageUrl" | "referrer">
): Promise<{ ok: boolean; reason?: string }> => {
  const payload: LeadPayload = {
    ...data,
    submittedAt: new Date().toISOString(),
    pageUrl: typeof window !== "undefined" ? window.location.href : "",
    referrer: typeof document !== "undefined" ? document.referrer : "",
  };

  await submitLeadToSheet(payload);

  try {
    const res = await fetch("https://api.digitalacademy360.com/dataapi2.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(buildApiPayload(payload)),
    });

    const result = await res.json();
    console.log("[API response]", result);
    return { ok: true };
  } catch (err) {
    console.error("[lead] API failed", err);
    return { ok: false, reason: "network-error" };
  }
};

// ─── Legacy alias (keep so other forms don't break) ──────────────────────────

/** @deprecated Use sendOtp + OtpModal + submitLeadToCrm instead */
export const submitLead = submitLeadToCrm;

/** Canonical name for the one reusable submission function. */
export const handleFormSubmit = submitLeadToCrm;

// Stubs kept for backward compatibility with App.tsx
export const getWebhookUrl = (): string | null => null;
export const setWebhookUrl = (_url: string): void => {};