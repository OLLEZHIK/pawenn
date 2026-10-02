"use client";

import { useEffect, useSyncExternalStore } from "react";

// Features the owner tests on the live site before visitors see them
// (owner, 2026-09-30). Open any page with ?beta=1 once - this browser then
// sees beta features until ?beta=0. Nothing is rendered on the server, so
// visitors and search engines never get the beta markup.
const KEY = "pawenn-beta";
const EVENT = "pawenn-beta-change";

function read(): boolean {
  try {
    return localStorage.getItem(KEY) === "1";
  } catch {
    return false;
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function BetaGate({ children }: { children: React.ReactNode }) {
  const on = useSyncExternalStore(subscribe, read, () => false);
  useEffect(() => {
    try {
      const flag = new URLSearchParams(window.location.search).get("beta");
      if (flag === "1") localStorage.setItem(KEY, "1");
      if (flag === "0") localStorage.removeItem(KEY);
      if (flag) window.dispatchEvent(new Event(EVENT));
    } catch {}
  }, []);
  return on ? <>{children}</> : null;
}
