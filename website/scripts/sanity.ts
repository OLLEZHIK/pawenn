// Offline sanity check of a whole city catalogue - no agent, no network, free.
// Catches the values nobody should have to look at by hand: fake phone
// numbers (123456...), coordinates outside the city, the same phone or
// the same spot under two slugs, a rating outside 1-5, broken hours,
// a malformed website or e-mail. Owner decision 2026-10-02: instead of a
// second agent re-checking every PR, scripts check the whole catalogue and
// one auditor samples (docs/pc-agents/pipeline.md, "Проверка без напарника").
//
//   npm run sanity -- warszawa
//   npm run sanity -- all
//
// FAIL = a value that cannot be right (exit code 1). WARN = looks odd,
// the auditor opens it. Not a replacement for check-city (completeness and
// quotes) and verify-city (the place's own site).
import fs from "fs";
import path from "path";
import Papa from "papaparse";

type Row = Record<string, string>;

const arg = process.argv[2];
if (!arg) {
  console.error("Usage: npm run sanity -- <city-slug | all>");
  process.exit(2);
}
const citiesDir = path.join(process.cwd(), "..", "data", "cities");
const cities =
  arg === "all"
    ? fs
        .readdirSync(citiesDir)
        .filter((c) => fs.existsSync(path.join(citiesDir, c, "city.json")) && hasBusinesses(c))
    : [arg];

function hasBusinesses(c: string) {
  return fs.readdirSync(path.join(citiesDir, c)).some((f) => /^businesses.*\.csv$/.test(f));
}

const COUNTRY = {
  PL: { dial: "48", national: /^[1-9]\d{8}$/, postal: /\b\d{2}-\d{3}\b/ },
  SK: { dial: "421", national: /^[2-9]\d{8}$/, postal: /\b\d{3} ?\d{2}\b/ },
  CZ: { dial: "420", national: /^[2-9]\d{8}$/, postal: /\b\d{3} ?\d{2}\b/ },
  AT: { dial: "43", national: /^[1-9]\d{3,12}$/, postal: /\b\d{4}\b/ },
  DE: { dial: "49", national: /^[1-9]\d{5,13}$/, postal: /\b\d{5}\b/ },
  // NANP: area code and exchange never start with 0 or 1; written
  // "+1 212-555-1234" (New York, 2026-10-07). ZIP: 5 digits (ZIP+4 passes too).
  // Italy keeps the leading 0 of landlines inside the number (+39 06 1234 5678);
  // mobiles start with 3, toll-free with 8. France: trunk 0 dropped, 9 digits.
  IT: { dial: "39", national: /^(0\d{5,10}|3\d{8,9}|8\d{8,10})$/, postal: /\b\d{5}\b/, keepZero: true },
  FR: { dial: "33", national: /^[1-9]\d{8}$/, postal: /\b\d{5}\b/ },
  // Spain: no trunk 0, nine digits starting 6-9 (mobiles 6/7, landlines 8/9); postal code 5 digits.
  // United Kingdom: trunk 0 dropped, 9-10 digits; postcode "SW1A 1AA" (outward + inward).
  // Ireland: trunk 0 dropped, 8-10 digits (Dublin 1 234 5678); Eircode "D02 X285" (older addresses have none).
  GB: { dial: "44", national: /^[1-9]\d{8,9}$/, postal: /\b[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}\b/i },
  IE: { dial: "353", national: /^[1-9]\d{7,9}$/, postal: /\b[ACDEFHKNPRTVWXY]\d{2} ?[0-9ACDEFHKNPRTVWXY]{4}\b/i },
  // Finland: trunk 0 dropped, 5-11 digits (Helsinki +358 9 1234 567); postal code 5 digits.
  // Hungary: trunk 06 dropped, 8-9 digits (Budapest +36 1 234 5678, mobiles +36 30 123 4567); postal code 4 digits.
  // Portugal: nine digits starting 2 (landlines), 9 (mobiles) or 8/7; postal code "1000-001".
  // Netherlands: trunk 0 dropped, nine digits (Amsterdam +31 20 123 4567); postcode "1012 AB".
  // Norway: eight digits starting 2-9 (no trunk 0); postal code 4 digits.
  // Japan: trunk 0 dropped, 9-10 digits (Tokyo +81 3 1234 5678, mobiles +81 90 1234 5678); postal "100-0001".
  FI: { dial: "358", national: /^[1-9]\d{4,10}$/, postal: /\b\d{5}\b/ },
  HU: { dial: "36", national: /^[1-9]\d{7,8}$/, postal: /\b\d{4}\b/ },
  PT: { dial: "351", national: /^[2-9]\d{8}$/, postal: /\b\d{4}-\d{3}\b/ },
  NL: { dial: "31", national: /^[1-9]\d{8}$/, postal: /\b\d{4} ?[A-Z]{2}\b/i },
  NO: { dial: "47", national: /^[2-9]\d{7}$/, postal: /\b\d{4}\b/ },
  JP: { dial: "81", national: /^[1-9]\d{8,9}$/, postal: /\b\d{3}-?\d{4}\b/ },
  ES: { dial: "34", national: /^[6-9]\d{8}$/, postal: /\b\d{5}\b/ },
  // Mexico: ten digits (Mexico City +52 55 1234 5678); postal 5 digits. Brazil: 10-11 digits with a 2-digit area code (+55 11 91234 5678); CEP 12345-678.
  // Canada: NANP like the US; postal "M5V 2T6".
  MX: { dial: "52", national: /^[1-9]\d{9}$/, postal: /\b\d{5}\b/ },
  BR: { dial: "55", national: /^[1-9]\d{9,10}$/, postal: /\b\d{5}-?\d{3}\b/ },
  CA: { dial: "1", national: /^[2-9]\d{2}[2-9]\d{6}$/, postal: /\b[A-Z]\d[A-Z] ?\d[A-Z]\d\b/i },
  US: { dial: "1", national: /^[2-9]\d{2}[2-9]\d{6}$/, postal: /\b\d{5}\b/ },
} as const;

// Phone digits that are not a real subscriber number: all one digit, a run
// 1234567 / 7654321, or a short block repeated three times (123123123;
// two repeats are real numbers: +420 252 252 111, Medicanima, Praha).
function fakePhone(national: string, country?: string): string | null {
  if (/^(\d)\1+$/.test(national)) return "one digit repeated";
  if (/(0123456|1234567|2345678|3456789|9876543|8765432|7654321|6543210)/.test(national)) return "a digit sequence";
  if (/^(\d{2,4})\1{2,}\d{0,3}$/.test(national) && new Set(national).size <= 3) return "a short block repeated";
  if (new Set(national).size <= 2) return "two digits only";
  // 555-0100..555-0199 is reserved for films and examples in North America.
  if (country === "US" && /^\d{3}55501\d{2}$/.test(national)) return "a 555-01xx example number";
  return null;
}

type Ring = number[][];
type Geometry = { type: string; coordinates: unknown };

function inRing(x: number, y: number, ring: Ring): boolean {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}
function inGeometry(x: number, y: number, g: Geometry): boolean {
  const polys = (g.type === "Polygon" ? [g.coordinates] : g.type === "MultiPolygon" ? g.coordinates : []) as Ring[][];
  return polys.some((p) => inRing(x, y, p[0]) && !p.slice(1).some((h) => inRing(x, y, h)));
}
const km = (a: number, b: number, c: number, d: number) => {
  const r = Math.PI / 180;
  const x = (d - b) * r * Math.cos(((a + c) / 2) * r);
  const y = (c - a) * r;
  return Math.sqrt(x * x + y * y) * 6371;
};

let totalFail = 0;
for (const city of cities) {
  const dir = path.join(citiesDir, city);
  const meta = JSON.parse(fs.readFileSync(path.join(dir, "city.json"), "utf-8"));
  const country = COUNTRY[(meta.country as keyof typeof COUNTRY) ?? "PL"];
  const geoFile = path.join(dir, "districts.geojson");
  const features: { geometry: Geometry }[] = fs.existsSync(geoFile) ? JSON.parse(fs.readFileSync(geoFile, "utf-8")).features : [];

  const rows: (Row & { _file: string })[] = [];
  for (const f of fs.readdirSync(dir).filter((x) => /^businesses.*\.csv$/.test(x)).sort()) {
    const data = Papa.parse<Row>(fs.readFileSync(path.join(dir, f), "utf-8"), { header: true, skipEmptyLines: true }).data;
    for (const r of data) rows.push({ ...r, _file: f });
  }

  const fails: string[] = [];
  const warns: string[] = [];
  const f = (slug: string, msg: string) => fails.push(`${slug}: ${msg}`);
  const w = (slug: string, msg: string) => warns.push(`${slug}: ${msg}`);

  const bySlug = new Map<string, number>();
  const byPhone = new Map<string, string[]>();
  const domainOf = new Map<string, string>();
  const bySpot = new Map<string, string[]>();
  const byNameAddr = new Map<string, string[]>();

  for (const r of rows) {
    const slug = (r.slug ?? "").trim();
    if (!slug) {
      f(`${r._file}`, "row without slug");
      continue;
    }
    bySlug.set(slug, (bySlug.get(slug) ?? 0) + 1);
    // The site and ready-city treat ANY non-empty value as "closed": "no" hides the place (2026-10-03, Warszawa, 70 places).
    const closedValue = (r.closed ?? "").trim();
    if (closedValue && closedValue.toLowerCase() !== "yes") f(slug, `closed is "${closedValue}" - leave it empty for an open place, "yes" only for a closed one`);
    if (closedValue) continue;

    // Phone
    const phone = (r.phone ?? "").trim();
    if (phone) {
      // "+43 (0) 1 607 88 67": the (0) is the trunk-prefix notation, not a digit of the number (Vienna, 2026-10-06).
      const bracketZero = /\(0\)/.test(phone);
      if (bracketZero) w(slug, `phone "${phone}" has "(0)": write it without, e.g. ${phone.replace(/\s*\(0\)\s*/, " ").replace(/\s+/g, " ").trim()}`);
      const digits = phone.replace(/\(0\)/g, "").replace(/[^\d+]/g, "");
      const m = digits.match(/^\+?(\d+)$/);
      if (!m) f(slug, `phone "${phone}" has characters other than digits`);
      else {
        let national = m[1];
        if (digits.startsWith("+")) {
          if (!national.startsWith(country.dial)) w(slug, `phone "${phone}" is not +${country.dial} (foreign number?)`);
          else national = national.slice(country.dial.length);
        } else if (national.startsWith("00" + country.dial)) national = national.slice(2 + country.dial.length);
        else if (national.startsWith("0") && !("keepZero" in country)) national = national.slice(1);
        if (digits.startsWith("+" + country.dial) && national.startsWith("0") && !("keepZero" in country)) f(slug, `phone "${phone}" has a trunk 0 after +${country.dial} (write +${country.dial} ${national.slice(1)}, not +${country.dial} 0…)`);
        if (!country.national.test(national) && national.length !== 0 && (digits.startsWith("+" + country.dial) || !digits.startsWith("+")))
          f(slug, `phone "${phone}" is not a ${meta.country} number (+${country.dial}, then ${national.length} digits do not fit)`);
        const fake = fakePhone(national, meta.country);
        if (fake) f(slug, `phone "${phone}" looks fake (${fake})`);
        const key = national;
        byPhone.set(key, [...(byPhone.get(key) ?? []), slug]);
        try {
          domainOf.set(slug, new URL((r.website ?? "").trim()).hostname.replace(/^www\./, ""));
        } catch {
          domainOf.set(slug, "");
        }
      }
    }

    // E-mail, website
    const email = (r.email ?? "").trim();
    if (email && !/^[^\s@,;]+@[^\s@,;]+\.[A-Za-z]{2,}$/.test(email)) f(slug, `email "${email}" is malformed`);
    const site = (r.website ?? "").trim();
    if (site) {
      let u: URL | null = null;
      try {
        u = new URL(site);
      } catch {
        /* handled below */
      }
      if (!u || !/^https?:$/.test(u.protocol) || !u.hostname.includes(".")) f(slug, `website "${site}" is not a valid http(s) address`);
      else if (/google\.[a-z.]+\/maps|goo\.gl|maps\.app\.goo\.gl/.test(u.hostname + u.pathname)) f(slug, `website "${site}" is a Google Maps link, not the place's site`);
    }

    // Coordinates
    const lat = Number((r.lat ?? "").trim());
    const lng = Number((r.lng ?? "").trim());
    if ((r.lat ?? "").trim() || (r.lng ?? "").trim()) {
      if (!Number.isFinite(lat) || !Number.isFinite(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) f(slug, `coordinates "${r.lat}, ${r.lng}" are not numbers on Earth`);
      else {
        const far = km(lat, lng, meta.lat, meta.lng);
        if (far > 60) f(slug, `coordinates are ${far.toFixed(0)} km from the city centre`);
        else if (features.length && !features.some((x) => inGeometry(lng, lat, x.geometry))) {
          if (far > 25) w(slug, `coordinates are outside every district and ${far.toFixed(0)} km from the centre`);
          else w(slug, `coordinates are outside the district map (${far.toFixed(1)} km from the centre; city edge or wrong point)`);
        }
        const spot = `${lat.toFixed(4)},${lng.toFixed(4)}`;
        bySpot.set(spot, [...(bySpot.get(spot) ?? []), slug]);
      }
    }

    // Address
    const address = (r.address ?? "").trim();
    if (address && !country.postal.test(address)) w(slug, `address "${address.slice(0, 50)}" has no postal code`);

    // Google rating
    const rating = (r.google_rating ?? "").trim();
    if (rating) {
      const n = Number(rating.replace(",", "."));
      if (!(n >= 1 && n <= 5)) f(slug, `google_rating "${rating}" is outside 1-5`);
      const count = (r.google_rating_count ?? "").trim();
      if (!/^\d+$/.test(count) || Number(count) < 1) f(slug, `google_rating_count "${count}" is not a positive whole number`);
    }
    const maps = (r.google_maps_url ?? "").trim();
    if (maps && !/^https?:\/\/(www\.)?(google\.[a-z.]+\/maps|maps\.google\.[a-z.]+|maps\.app\.goo\.gl|goo\.gl\/maps)/.test(maps)) f(slug, `google_maps_url "${maps.slice(0, 50)}" is not a Google Maps link`);

    // Opening hours: "mo 09:00-20:00; tu 24h; su closed"
    const hours = (r.opening_hours ?? "").trim();
    if (hours && hours !== "24h" && hours !== "closed" && hours !== "by-appointment") {
      const days = new Set<string>();
      for (const part of hours.split(";").map((x) => x.trim()).filter(Boolean)) {
        const m = part.match(/^(mo|tu|we|th|fr|sa|su)\s+(.+)$/);
        if (!m) {
          f(slug, `hours "${part.slice(0, 40)}" - day must be mo/tu/we/th/fr/sa/su`);
          continue;
        }
        if (days.has(m[1])) f(slug, `hours: ${m[1]} listed twice`);
        days.add(m[1]);
        for (const span of m[2].split(",").map((x) => x.trim())) {
          if (span === "24h" || span === "closed" || span === "by-appointment") continue;
          const t = span.match(/^(\d{2}):(\d{2})-(\d{2}):(\d{2})$/);
          if (!t || +t[1] > 24 || +t[3] > 24 || +t[2] > 59 || +t[4] > 59) f(slug, `hours "${m[1]} ${span}" is not HH:MM-HH:MM`);
          else if (t[1] + t[2] === t[3] + t[4]) w(slug, `hours "${m[1]} ${span}" opens and closes at the same time`);
        }
      }
    }

    const na = `${(r.name ?? "").toLowerCase().replace(/[^\p{L}\d]+/gu, "")}|${address.toLowerCase().replace(/[^\p{L}\d]+/gu, "")}`;
    byNameAddr.set(na, [...(byNameAddr.get(na) ?? []), slug]);
  }

  for (const [slug, n] of bySlug) if (n > 1) f(slug, `slug appears ${n} times`);
  for (const [phone, slugs] of byPhone) {
    // One company with two services (same site) is fine; two sites on one number is not.
    const uniq = [...new Set(slugs)].filter((x, _i, all) => {
      const d = domainOf.get(x) ?? "";
      return !d || all.filter((y) => (domainOf.get(y) ?? "") === d).length === 1;
    });
    if (uniq.length > 1) w(uniq[0], `same phone ${phone} as ${uniq.slice(1).join(", ")} (one place twice, a salon inside a clinic, or a wrong number)`);
  }
  for (const [spot, slugs] of bySpot) {
    const uniq = [...new Set(slugs)];
    if (uniq.length > 3) w(uniq[0], `${uniq.length} places on one spot ${spot}: ${uniq.slice(0, 4).join(", ")}...`);
  }
  for (const [, slugs] of byNameAddr) {
    const uniq = [...new Set(slugs)];
    if (uniq.length > 1) f(uniq[0], `same name and address as ${uniq.slice(1).join(", ")} - a duplicate`);
  }

  console.log(`\n${city}: ${rows.length} places`);
  console.log(`  FAIL (${fails.length})${fails.length ? ":" : ""}`);
  for (const l of fails) console.log(`    ${l}`);
  console.log(`  WARN (${warns.length})${warns.length ? ":" : ""}`);
  for (const l of warns.slice(0, 40)) console.log(`    ${l}`);
  if (warns.length > 40) console.log(`    ... and ${warns.length - 40} more`);
  totalFail += fails.length;
}

console.log(totalFail ? "\nSANITY FAIL" : "\nSANITY OK");
process.exit(totalFail ? 1 : 0);
