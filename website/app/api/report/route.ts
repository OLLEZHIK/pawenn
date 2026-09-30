import { prisma } from "@/lib/prisma";
import { REPORT_KINDS, type ReportKind } from "@/lib/reports";

// "Report an issue" from a place page (docs/analytics/clicks.md). Stores
// what the visitor says is wrong; no name, email, cookie or IP.
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }
  if (typeof body !== "object" || body === null) {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { businessId, kind, message, page, website } = body as Record<
    string,
    unknown
  >;

  // Honeypot: a hidden field people never fill. Bots get a quiet "ok".
  if (typeof website === "string" && website.length > 0) {
    return Response.json({ ok: true }, { status: 201 });
  }
  if (
    typeof businessId !== "number" ||
    !Number.isInteger(businessId) ||
    businessId <= 0
  ) {
    return Response.json({ error: "Invalid business." }, { status: 400 });
  }
  if (typeof kind !== "string" || !REPORT_KINDS.includes(kind as ReportKind)) {
    return Response.json({ error: "Invalid kind." }, { status: 400 });
  }
  if (
    message !== undefined &&
    message !== null &&
    (typeof message !== "string" || message.length > 1000)
  ) {
    return Response.json({ error: "Message too long." }, { status: 400 });
  }
  // A path on this site only: the admin page shows it as a link.
  if (
    typeof page !== "string" ||
    !/^\/(?!\/)/.test(page) ||
    page.length > 300
  ) {
    return Response.json({ error: "Invalid page." }, { status: 400 });
  }
  const exists = await prisma.business.findUnique({
    where: { id: businessId },
    select: { id: true },
  });
  if (!exists)
    return Response.json({ error: "Invalid business." }, { status: 400 });

  await prisma.issueReport.create({
    data: {
      businessId,
      kind,
      message:
        typeof message === "string" && message.trim() ? message.trim() : null,
      page,
    },
  });
  return Response.json({ ok: true }, { status: 201 });
}
