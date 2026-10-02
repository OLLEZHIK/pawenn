import { prisma } from "@/lib/prisma";

const MAX_NAME_LENGTH = 100;
const MAX_COMMENT_LENGTH = 2000;
// A person needs longer than this to fill the form (ReviewForm sends the
// time since it was opened).
const MIN_FILL_MS = 3000;

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

  const { businessId, authorName, rating, comment, homepage, elapsedMs } = body as Record<string, unknown>;

  // Hidden field filled: a bot. Answer as if saved, so it does not retry.
  if (typeof homepage === "string" && homepage.trim() !== "") {
    return Response.json({ ok: true }, { status: 201 });
  }

  if (typeof elapsedMs !== "number" || !Number.isFinite(elapsedMs) || elapsedMs < MIN_FILL_MS) {
    return Response.json({ error: "Please take a moment and send the review again." }, { status: 400 });
  }

  if (typeof businessId !== "number" || !Number.isInteger(businessId) || businessId <= 0) {
    return Response.json({ error: "Invalid business." }, { status: 400 });
  }

  const trimmedName = typeof authorName === "string" ? authorName.trim() : "";
  if (!trimmedName || trimmedName.length > MAX_NAME_LENGTH) {
    return Response.json({ error: "Please enter your name." }, { status: 400 });
  }

  const trimmedComment = typeof comment === "string" ? comment.trim() : "";
  if (!trimmedComment || trimmedComment.length > MAX_COMMENT_LENGTH) {
    return Response.json({ error: "Please write a review." }, { status: 400 });
  }

  if (typeof rating !== "number" || !Number.isInteger(rating) || rating < 1 || rating > 5) {
    return Response.json({ error: "Rating must be between 1 and 5." }, { status: 400 });
  }

  const business = await prisma.business.findUnique({ where: { id: businessId }, select: { id: true } });
  if (!business) {
    return Response.json({ error: "Business not found." }, { status: 404 });
  }

  await prisma.review.create({
    data: {
      businessId,
      authorName: trimmedName,
      rating,
      comment: trimmedComment,
      status: "PENDING",
    },
  });

  return Response.json({ ok: true }, { status: 201 });
}
