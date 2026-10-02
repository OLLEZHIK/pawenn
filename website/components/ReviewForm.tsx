"use client";

import { useEffect, useRef, useState } from "react";
import { getDictionary, type Locale } from "@/lib/i18n";

export function ReviewForm({ businessId, locale }: { businessId: number; locale: Locale }) {
  const t = getDictionary(locale).reviewForm;
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  // When the form was opened: the API refuses a review sent faster than a
  // person can type one (bots post at once).
  const openedAt = useRef(0);
  useEffect(() => {
    openedAt.current = performance.now();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    const body = {
      businessId,
      authorName: String(formData.get("authorName") ?? ""),
      rating: Number(formData.get("rating")),
      comment: String(formData.get("comment") ?? ""),
      // Hidden from people, filled by bots that fill every field.
      homepage: String(formData.get("homepage") ?? ""),
      elapsedMs: e.timeStamp - openedAt.current,
    };

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? t.error);
      }
      setStatus("done");
      formEl.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : t.error);
    }
  }

  if (status === "done") {
    return (
      <p className="rounded-lg bg-brand-green/10 p-4 text-brand-green">
        {t.thanks}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative space-y-3">
      <div>
        <label htmlFor="authorName" className="block text-sm font-medium text-foreground">
          {t.name}
        </label>
        <input
          id="authorName"
          name="authorName"
          required
          maxLength={100}
          className="mt-1 w-full rounded-[var(--radius-control)] border-2 border-line bg-surface px-3 py-2.5 transition focus:border-brand-blue focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="rating" className="block text-sm font-medium text-foreground">
          {t.rating}
        </label>
        <select
          id="rating"
          name="rating"
          required
          defaultValue="5"
          className="mt-1 rounded-[var(--radius-control)] border-2 border-line bg-surface px-3 py-2.5 transition focus:border-brand-blue focus:outline-none"
        >
          {[5, 4, 3, 2, 1].map((n) => (
            <option key={n} value={n}>
              {t.stars(n)}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="comment" className="block text-sm font-medium text-foreground">
          {t.review}
        </label>
        <textarea
          id="comment"
          name="comment"
          required
          maxLength={2000}
          rows={4}
          className="mt-1 w-full rounded-[var(--radius-control)] border-2 border-line bg-surface px-3 py-2.5 transition focus:border-brand-blue focus:outline-none"
        />
      </div>

      <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
        <label htmlFor="homepage">Homepage</label>
        <input id="homepage" name="homepage" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="min-h-11 rounded-[var(--radius-pill)] bg-brand-orange px-6 py-2.5 font-semibold text-white transition hover:bg-brand-orange-deep disabled:opacity-60"
      >
        {status === "submitting" ? t.submitting : t.submit}
      </button>
    </form>
  );
}
