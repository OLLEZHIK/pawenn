"use client";

import Link from "next/link";
import { useEffect, useSyncExternalStore } from "react";
import { CONSENT_EVENT, CONSENT_KEY, type ConsentChoice } from "@/lib/analytics";

// The consent banner and GA4 (lib/analytics.ts). Before "allow" nothing from
// Google is loaded and no cookie is set; "decline" looks and works exactly
// like "allow" (no nudging toward consent).
// Nothing renders on the server: the banner appears after hydration, only
// for visitors who have not chosen yet.

type State = ConsentChoice | "ask";

// Where localStorage is blocked (private mode), the choice lasts for the page.
let memory: ConsentChoice | null = null;
let askAgain = false;

function read(): State {
  if (askAgain) return "ask";
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    if (v === "granted" || v === "denied") return v;
  } catch {}
  return memory ?? "ask";
}

function subscribe(onChange: () => void) {
  window.addEventListener(CONSENT_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CONSENT_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function choose(choice: ConsentChoice) {
  memory = choice;
  askAgain = false;
  try {
    localStorage.setItem(CONSENT_KEY, choice);
  } catch {}
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

/** Footer "Cookie settings": show the banner again. */
export function reopenConsent() {
  askAgain = true;
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

let loaded = false;
function loadGa(id: string) {
  (window as unknown as Record<string, unknown>)[`ga-disable-${id}`] = false;
  if (loaded) {
    window.gtag?.("consent", "update", { analytics_storage: "granted" });
    return;
  }
  loaded = true;
  window.dataLayer = window.dataLayer ?? [];
  window.gtag = function gtag() {
    // gtag.js reads the arguments object, not an array.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  // Analytics only: nothing for ads.
  window.gtag("consent", "default", { analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
  window.gtag("js", new Date());
  window.gtag("config", id);
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(s);
}

/** "Decline" after "allow": stop sending and remove the _ga cookies. */
function stopGa(id: string) {
  (window as unknown as Record<string, unknown>)[`ga-disable-${id}`] = true;
  window.gtag?.("consent", "update", { analytics_storage: "denied" });
  const host = window.location.hostname.replace(/^www\./, "");
  for (const c of document.cookie.split(";")) {
    const name = c.split("=")[0].trim();
    if (!name.startsWith("_ga")) continue;
    for (const domain of ["", `; Domain=.${host}`, `; Domain=${host}`]) document.cookie = `${name}=; Max-Age=0; Path=/${domain}`;
  }
}

export function GoogleAnalytics({
  id,
  text,
  allow,
  decline,
  policyLabel,
}: {
  id: string;
  text: string;
  allow: string;
  decline: string;
  policyLabel: string;
}) {
  const state = useSyncExternalStore(subscribe, read, () => null);

  useEffect(() => {
    if (state === "granted") loadGa(id);
    if (state === "denied") stopGa(id);
  }, [state, id]);

  if (state !== "ask") return null;
  const button =
    "inline-flex min-h-11 flex-1 items-center justify-center rounded-[var(--radius-pill)] px-5 py-2.5 text-sm font-semibold transition sm:flex-none";
  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={policyLabel}
      className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-4"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-3 rounded-[24px] bg-surface p-4 shadow-[var(--shadow-card)] ring-1 ring-line sm:flex-row sm:items-center sm:gap-5 sm:p-5">
        <p className="text-sm leading-relaxed text-foreground/80">
          {text}{" "}
          <Link href="/en/privacy-policy/" className="font-medium text-brand-blue underline-offset-2 hover:underline">
            {policyLabel}
          </Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <button type="button" onClick={() => choose("denied")} className={`${button} bg-ink text-white hover:bg-brand-blue`}>
            {decline}
          </button>
          <button type="button" onClick={() => choose("granted")} className={`${button} bg-ink text-white hover:bg-brand-blue`}>
            {allow}
          </button>
        </div>
      </div>
    </div>
  );
}

export function ConsentSettingsLink({ label }: { label: string }) {
  return (
    <li>
      <button type="button" onClick={reopenConsent} className="text-left text-white/75 transition hover:text-brand-orange">
        {label}
      </button>
    </li>
  );
}
