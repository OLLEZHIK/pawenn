// JSON-LD for <script type="application/ld+json">. Place names and texts
// come from other sites, so a "</script>" in them would close the tag and
// let the rest run as HTML; "<" as < keeps the JSON the same for
// search engines and the tag closed only where we close it.
export function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
