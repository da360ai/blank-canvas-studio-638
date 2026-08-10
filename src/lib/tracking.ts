// UTM / click-id capture with sessionStorage persistence.

export const TRACKING_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
] as const;

export type TrackingParam = (typeof TRACKING_PARAMS)[number];

/** Read UTMs from the current URL and persist them for the session. */
export const captureTrackingParams = (): void => {
  if (typeof window === "undefined") return;
  try {
    const urlParams = new URLSearchParams(window.location.search);
    TRACKING_PARAMS.forEach((param) => {
      const value = urlParams.get(param);
      if (value) sessionStorage.setItem(param, value);
    });
  } catch {
    // sessionStorage unavailable (private mode) — ignore
  }
};

/** Stored tracking values, falling back to empty strings. */
export const getTrackingParams = (): Record<TrackingParam, string> => {
  const out = {} as Record<TrackingParam, string>;
  TRACKING_PARAMS.forEach((param) => {
    let value = "";
    try {
      value = sessionStorage.getItem(param) || "";
    } catch {
      value = "";
    }
    out[param] = value;
  });
  return out;
};
