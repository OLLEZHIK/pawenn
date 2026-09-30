import { timingSafeEqual } from "crypto";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { businessPath, categoryLabel } from "@/lib/categories";

// The owner's page: contacts sent to places (/api/click) and issues
// visitors reported (/api/report). docs/analytics/clicks.md.
// Opens only with ?key=<ADMIN_KEY> (Vercel environment variable); without
// the variable the page does not exist. Never indexed.

export const metadata: Metadata = {
  title: "Pawenn admin",
  robots: { index: false, follow: false },
};

function keyMatches(given: string | undefined): boolean {
  const expected = process.env.ADMIN_KEY;
  if (!expected || !given) return false;
  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

const DAY = 24 * 60 * 60 * 1000;

async function load() {
  const now = Date.now();
  const since30 = new Date(now - 30 * DAY);
  const since7 = new Date(now - 7 * DAY);
  const [clicks, reports] = await Promise.all([
    prisma.clickEvent.findMany({
      where: { createdAt: { gte: since30 } },
      select: {
        type: true,
        createdAt: true,
        business: {
          select: {
            id: true,
            name: true,
            slug: true,
            category: true,
            city: { select: { name: true } },
          },
        },
      },
    }),
    prisma.issueReport.findMany({
      where: { resolvedAt: null },
      orderBy: { createdAt: "desc" },
      take: 100,
      include: {
        business: {
          select: { name: true, slug: true, city: { select: { name: true } } },
        },
      },
    }),
  ]);
  return { clicks, reports, since7 };
}

export default async function AdminPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ key?: string }>;
}) {
  const [{ lang }, { key }] = await Promise.all([params, searchParams]);
  if (lang !== "en" || !keyMatches(key)) notFound();

  const { clicks, reports, since7 } = await load();

  const types = ["CALL", "WEB", "ROUTE", "EMAIL"] as const;
  const count = (list: typeof clicks) =>
    Object.fromEntries(
      types.map((t) => [t, list.filter((c) => c.type === t).length]),
    );
  const week = count(clicks.filter((c) => c.createdAt >= since7));
  const month = count(clicks);

  const group = (keyOf: (c: (typeof clicks)[number]) => string) => {
    const m = new Map<string, number>();
    for (const c of clicks) m.set(keyOf(c), (m.get(keyOf(c)) ?? 0) + 1);
    return [...m].sort((a, b) => b[1] - a[1]);
  };
  const byCityCategory = group(
    (c) =>
      `${c.business.city?.name ?? "-"} · ${categoryLabel(c.business.category, "en")}`,
  );
  const byPlace = group(
    (c) =>
      `${c.business.slug}|${c.business.name} (${c.business.city?.name ?? "-"})`,
  ).slice(0, 20);

  const th =
    "py-2 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-foreground/60";
  const td = "py-2 pr-4 align-top";

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-extrabold text-foreground">Pawenn admin</h1>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-foreground">
          Contacts sent to places
        </h2>
        <table className="mt-3 text-sm">
          <thead>
            <tr>
              <th className={th}></th>
              {types.map((t) => (
                <th key={t} className={th}>
                  {t}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["Last 7 days", week],
              ["Last 30 days", month],
            ].map(([label, row]) => (
              <tr key={label as string} className="border-t border-line">
                <td className={`${td} font-semibold`}>{label as string}</td>
                {types.map((t) => (
                  <td key={t} className={td}>
                    {(row as Record<string, number>)[t]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-bold text-foreground">
              By city and service, 30 days
            </h3>
            <ul className="mt-2 space-y-1 text-sm">
              {byCityCategory.map(([k, n]) => (
                <li
                  key={k}
                  className="flex justify-between gap-4 border-b border-line py-1"
                >
                  <span>{k}</span>
                  <span className="font-semibold">{n}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-foreground">Top places, 30 days</h3>
            <ul className="mt-2 space-y-1 text-sm">
              {byPlace.map(([k, n]) => {
                const [slug, label] = k.split("|");
                return (
                  <li
                    key={k}
                    className="flex justify-between gap-4 border-b border-line py-1"
                  >
                    <Link
                      href={businessPath("en", slug)}
                      className="text-brand-blue hover:underline"
                    >
                      {label}
                    </Link>
                    <span className="font-semibold">{n}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-foreground">
          Open issue reports ({reports.length})
        </h2>
        <table className="mt-3 w-full text-sm">
          <thead>
            <tr>
              <th className={th}>Date</th>
              <th className={th}>Place</th>
              <th className={th}>What</th>
              <th className={th}>Details</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((r) => (
              <tr key={r.id} className="border-t border-line">
                <td className={`${td} whitespace-nowrap`}>
                  {r.createdAt.toISOString().slice(0, 10)}
                </td>
                <td className={td}>
                  <Link
                    href={r.page}
                    className="text-brand-blue hover:underline"
                  >
                    {r.business.name}
                  </Link>{" "}
                  <span className="text-foreground/60">
                    ({r.business.city?.name ?? "-"})
                  </span>
                </td>
                <td className={td}>{r.kind}</td>
                <td className={`${td} whitespace-pre-wrap break-words`}>
                  {r.message ?? ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
