"use client";

import { useState } from "react";
import { REPORT_KINDS, type ReportKind } from "@/lib/reports";

// "Report an issue" on a place page (owner, 2026-09-30;
// docs/analytics/clicks.md): pick what is wrong, optionally say what is
// right, send. Stored in IssueReport; no name, email or IP. Replaces a
// mailto link to an address the site did not have.
export function ReportIssue({
  businessId,
  labels,
}: {
  businessId: number;
  labels: {
    open: string;
    question: string;
    kinds: Record<ReportKind, string>;
    messageLabel: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    thanks: string;
    error: string;
    privacy: string;
  };
}) {
  const [kind, setKind] = useState<ReportKind | null>(null);
  const [message, setMessage] = useState("");
  const [trap, setTrap] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function send(e: React.FormEvent) {
    e.preventDefault();
    if (!kind) return;
    setState("sending");
    try {
      const res = await fetch("/api/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessId,
          kind,
          message,
          page: window.location.pathname,
          website: trap,
        }),
      });
      setState(res.ok ? "sent" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "sent")
    return (
      <p className="mt-2 font-semibold text-brand-green">{labels.thanks}</p>
    );

  return (
    <details className="mt-2 group">
      <summary className="inline-block cursor-pointer list-none hover:underline">
        {labels.open}
      </summary>
      <form
        onSubmit={send}
        className="mt-3 max-w-xl rounded-[var(--radius-card)] bg-surface p-4 shadow-[var(--shadow-card)]"
      >
        <p className="font-semibold text-foreground">{labels.question}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {REPORT_KINDS.map((k) => (
            <button
              key={k}
              type="button"
              aria-pressed={kind === k}
              onClick={() => setKind(k)}
              className={`min-h-10 rounded-[var(--radius-pill)] border px-3.5 text-sm font-semibold transition ${
                kind === k
                  ? "border-brand-blue bg-brand-blue text-white"
                  : "border-line bg-surface text-foreground/80 hover:border-brand-blue"
              }`}
            >
              {labels.kinds[k]}
            </button>
          ))}
        </div>
        <label className="mt-4 block text-sm font-semibold text-foreground/80">
          {labels.messageLabel}
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={1000}
            rows={3}
            placeholder={labels.messagePlaceholder}
            className="mt-1.5 block w-full rounded-[var(--radius-control)] border border-line bg-surface-sunken p-3 font-normal text-foreground outline-none focus:ring-2 focus:ring-brand-blue/40"
          />
        </label>
        {/* Honeypot: hidden from people, filled by bots. */}
        <input
          type="text"
          name="website"
          value={trap}
          onChange={(e) => setTrap(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={!kind || state === "sending"}
            className="min-h-11 rounded-[var(--radius-pill)] bg-ink px-5 font-semibold text-white transition hover:bg-brand-blue disabled:opacity-40"
          >
            {state === "sending" ? labels.sending : labels.send}
          </button>
          <span className="text-xs text-foreground/55">{labels.privacy}</span>
        </div>
        {state === "error" && (
          <p className="mt-2 text-sm font-semibold text-red-700">
            {labels.error}
          </p>
        )}
      </form>
    </details>
  );
}
