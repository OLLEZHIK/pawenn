// Google Analytics 4 behind the visitor's consent (owner, 2026-10-07:
// "GA4 + banner"). Nothing from Google loads until the visitor presses
// "allow"; the choice is kept in this browser (localStorage) and can be
// changed from the footer ("Cookie settings").

export const CONSENT_KEY = "pawenn-analytics-consent";
/** Fired when the choice changes or the footer link asks to choose again. */
export const CONSENT_EVENT = "pawenn-consent-change";

export type ConsentChoice = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: ((...args: unknown[]) => void) & { q?: unknown[] };
  }
}

// The site's GA4 stream (owner, 2026-10-07). Public by nature: every page
// that loads GA4 shows it. NEXT_PUBLIC_GA_ID on Vercel overrides it; "off"
// switches GA4 and the banner off without a code change.
const GA_STREAM = "G-L1HVFGV7ZX";

export function gaMeasurementId(): string | null {
  return measurementId(process.env.NEXT_PUBLIC_GA_ID ?? GA_STREAM);
}

/** "G-XXXXXXX" or null: an ID of another shape is not put into a script URL. */
export function measurementId(raw: string | undefined): string | null {
  const id = (raw ?? "").trim();
  return /^G-[A-Z0-9]{4,20}$/.test(id) ? id : null;
}

// Microsoft Clarity (heatmaps and session recordings, free), owner 2026-10-16.
// Loaded only after "allow", like GA4. NEXT_PUBLIC_CLARITY_ID overrides the
// project; "off" switches Clarity off without a code change.
const CLARITY_PROJECT = "yyrfnjj8z6";

export function clarityProjectId(): string | null {
  const id = (process.env.NEXT_PUBLIC_CLARITY_ID ?? CLARITY_PROJECT).trim();
  return /^[a-z0-9]{6,20}$/.test(id) ? id : null;
}

/** An event for GA4 and Clarity; dropped where they are not loaded (no consent, no ID). */
export function gaEvent(name: string, params: Record<string, string | number> = {}) {
  window.gtag?.("event", name, params);
  window.clarity?.("event", name);
}
