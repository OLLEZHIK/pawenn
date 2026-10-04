// Single source for the canonical site origin (sitemap, robots, JSON-LD,
// llms.txt). Overridable via env for preview deployments.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pawenn.com";

/** Public contact address: footer links, legal texts ({EMAIL} in docs/legal), "Report an issue". */
export const CONTACT_EMAIL = "contact@pawenn.com";
