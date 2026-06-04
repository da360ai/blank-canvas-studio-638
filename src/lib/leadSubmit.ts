// Centralized lead submission with OTP verification.
// Flow: sendOtp() → user enters OTP → verifyAndSubmit() checks OTP → if match, calls dataapi2.php

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
 * Submits the lead to the CRM. Call this ONLY after OTP is verified.
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

  console.log("[lead]", payload);

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

// Stubs kept for backward compatibility with App.tsx
export const getWebhookUrl = (): string | null => null;
export const setWebhookUrl = (_url: string): void => {};