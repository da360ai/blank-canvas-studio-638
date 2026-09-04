// Centralized lead submission with OTP verification.
// Flow: sendOtp() → user enters OTP → verifyAndSubmit() checks OTP → if match, calls dataapi2.php

import { getTrackingParams } from "@/lib/tracking";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxpUJRAdsDEScBmn25PoANAHaJBe1IN7J1ehozILA95ezCTIZ5IqrqVsShPngRGZEZAMA/exec";

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
 * Posts the lead to the Google Apps Script Web App (Google Sheets) as JSON.
 * No custom headers → simple request, no CORS preflight.
 */
const submitLeadToSheet = async (payload: LeadPayload): Promise<boolean> => {
  const utm = getTrackingParams();

  // Normalize the centre name to the spelling the Apps Script → Zoho mapper
  // looks for ("Malleshwaram", "JP Nagar", "Jayanagar").
  const rawCenter = (payload.learningCenter || "").toLowerCase();
  const center = rawCenter.includes("malle")
    ? "Malleshwaram"
    : rawCenter.includes("jayanagar")
      ? "Jayanagar"
      : rawCenter.includes("jp")
        ? "JP Nagar"
        : payload.learningCenter || "";

  const mode =
    payload.learningMode.toLowerCase() === "classroom" ? "Classroom" : "Online";

  // Centre must travel with the mode so getCenter() can resolve it.
  const modeWithCenter = center ? `${mode} - ${center}` : mode;

  const formData = {
    full_name: payload.fullName,
    phone_number: `${payload.countryCode.split(" ")[0]}${payload.mobile}`,
    email: payload.email,
    city: "Bangalore",
    utm_source: utm.utm_source,
    utm_medium: utm.utm_medium,
    utm_campaign: utm.utm_campaign,
    utm_term: utm.utm_term,
    utm_content: utm.utm_content,
    Courses: payload.course || "",
    "Learning Modes": modeWithCenter,
    how_do_you_prefer_to_join_the_course: modeWithCenter,
    learning_center: center,
    lead_status: "New Lead",
    form_name: payload.source,
    ad_name: utm.ad_name,
    adset_name: utm.adset_name,
    platform: utm.platform,
    work_experience: payload.experience,
    consent: payload.authorized ? "Yes" : "No",
    page_url: payload.pageUrl,
    referrer: payload.referrer,
    submitted_at: payload.submittedAt,
  };

  const body = JSON.stringify(formData);

  try {
    // Apps Script Web Apps cannot return CORS headers, so use no-cors.
    // The POST still lands and the row is appended.
    await fetch(APPS_SCRIPT_URL, { method: "POST", mode: "no-cors", body });
    return true;
  } catch (err) {
    console.error("[lead] sheet submit failed", err);
    return false;
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

  const sheetOk = await submitLeadToSheet(payload);

  try {
    const res = await fetch("https://api.digitalacademy360.com/dataapi2.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(buildApiPayload(payload)),
    });

    const result = await res.json();
    console.log("[API response]", result);
  } catch (err) {
    console.error("[lead] API failed", err);
  }

  return sheetOk ? { ok: true } : { ok: false, reason: "network-error" };
};


// ─── Legacy alias (keep so other forms don't break) ──────────────────────────

/** @deprecated Use sendOtp + OtpModal + submitLeadToCrm instead */
export const submitLead = submitLeadToCrm;

/** Canonical name for the one reusable submission function. */
export const handleFormSubmit = submitLeadToCrm;

// Stubs kept for backward compatibility with App.tsx
export const getWebhookUrl = (): string | null => null;
export const setWebhookUrl = (_url: string): void => {};