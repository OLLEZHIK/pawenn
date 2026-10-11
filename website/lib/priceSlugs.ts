import type { BusinessCategory } from "@prisma/client";
import type { Locale } from "./locales";
import { listingPath } from "./categories";
import { SERVICES } from "./services";

// Price pages (owner, 2026-09-25; docs/seo/README.md, "Страницы цен"):
//   /<category>/<city>/prices/            what each service costs in the city
//   /<category>/<city>/prices/<service>/  one service, every place compared
// The "prices" segment sits in the district slot, like "nonstop"; no
// district may use it.
export const PRICES_SEGMENT: Record<Locale, string> = { en: "prices", sk: "ceny", pl: "ceny", cs: "ceny", de: "preise", fr: "tarifs" };

/** URL slug per service code and language - written by hand, as people
 *  search it ("kastracia-kocura"), not generated from labels. */
const SERVICE_SLUGS: Partial<Record<BusinessCategory, Record<string, Record<Locale, string>>>> = {
  GROOMING: {
    full_groom: { en: "full-grooming", sk: "kompletna-uprava", pl: "strzyzenie-psa", cs: "strihani-psa", de: "hunde-scheren", fr: "toilettage-complet" },
    bath_dry: { en: "bath-and-blow-dry", sk: "kupanie-a-fenovanie", pl: "kapiel-i-suszenie", cs: "koupani-a-fenovani", de: "baden-und-foehnen", fr: "bain-et-sechage" },
    hand_stripping: { en: "hand-stripping", sk: "trimovanie", pl: "trymowanie", cs: "trimovani", de: "trimmen", fr: "epilation" },
    deshedding: { en: "de-shedding", sk: "vycesavanie-podsady", pl: "wyczesywanie-podszerstka", cs: "vycesavani-podsady", de: "unterwolle-entfernen", fr: "demelage" },
    nail_trim: { en: "nail-trim", sk: "strihanie-pazurikov", pl: "obcinanie-pazurow", cs: "strihani-drapku", de: "krallen-schneiden", fr: "coupe-des-griffes" },
    cat_groom: { en: "cat-grooming", sk: "uprava-macky", pl: "strzyzenie-kota", cs: "strihani-kocky", de: "katze-scheren", fr: "toilettage-chat" },
  },
  VET_CLINIC: {
    exam: { en: "check-up", sk: "vysetrenie", pl: "badanie-kliniczne", cs: "vysetreni", de: "untersuchung", fr: "consultation" },
    vaccination_dog: { en: "dog-vaccination", sk: "ockovanie-psa", pl: "szczepienie-psa", cs: "ockovani-psa", de: "impfung-hund", fr: "vaccination-chien" },
    microchip: { en: "microchip", sk: "cipovanie", pl: "czipowanie", cs: "cipovani", de: "chippen", fr: "identification-puce" },
    neuter_cat: { en: "cat-neutering", sk: "kastracia-kocura", pl: "kastracja-kota", cs: "kastrace-kocoura", de: "kastration-kater", fr: "castration-chat" },
    spay_cat: { en: "cat-spaying", sk: "kastracia-macky", pl: "sterylizacja-kotki", cs: "kastrace-kocky", de: "kastration-katze", fr: "sterilisation-chatte" },
    spay_dog: { en: "dog-spaying", sk: "kastracia-suky", pl: "sterylizacja-suki", cs: "kastrace-feny", de: "kastration-huendin", fr: "sterilisation-chienne" },
  },
  PET_HOTEL: {
    dog_night: { en: "dog-per-night", sk: "pes-noc", pl: "pies-doba", cs: "pes-noc", de: "hund-nacht", fr: "chien-nuit" },
    cat_night: { en: "cat-per-night", sk: "macka-noc", pl: "kot-doba", cs: "kocka-noc", de: "katze-nacht", fr: "chat-nuit" },
    daycare_day: { en: "dog-daycare", sk: "psia-skolka", pl: "swietlica-dzien", cs: "psi-skolka", de: "tagesstaette-tag", fr: "garderie-jour" },
    daycare_pass: { en: "daycare-pass", sk: "permanentka-do-skolky", pl: "karnet-do-swietlicy", cs: "permanentka-do-skolky", de: "zehnerkarte-tagesstaette", fr: "forfait-garderie" },
    pickup: { en: "pick-up-and-drop-off", sk: "dovoz-a-odvoz", pl: "transport-zwierzaka", cs: "dovoz-a-odvoz", de: "hol-und-bringservice", fr: "transport-animalier" },
    extra_walk: { en: "extra-walk", sk: "vencenie-navyse", pl: "dodatkowy-spacer", cs: "venceni-navic", de: "extra-spaziergang", fr: "promenade-supplementaire" },
  },
  DOG_TRAINING: {
    puppy_course: { en: "puppy-course", sk: "stenacia-skolka", pl: "kurs-dla-szczeniat", cs: "kurz-pro-stenata", de: "welpenkurs", fr: "ecole-du-chiot" },
    obedience_course: { en: "obedience-course", sk: "kurz-poslusnosti", pl: "kurs-posluszenstwa", cs: "kurz-poslusnosti", de: "begleithundekurs", fr: "cours-d-education" },
    group_lesson: { en: "group-lesson", sk: "skupinova-hodina", pl: "lekcja-grupowa", cs: "skupinova-lekce", de: "gruppenstunde", fr: "cours-collectif" },
    private_lesson: { en: "private-lesson", sk: "individualna-hodina", pl: "lekcja-indywidualna", cs: "individualni-lekce", de: "einzeltraining", fr: "cours-individuel" },
    behavior_consult: { en: "behaviour-consultation", sk: "konzultacia-spravania", pl: "konsultacja-behawioralna", cs: "konzultace-chovani", de: "verhaltensberatung", fr: "bilan-comportemental" },
    membership: { en: "club-membership", sk: "clensky-poplatok", pl: "skladka-czlonkowska", cs: "clensky-prispevek", de: "mitgliedsbeitrag", fr: "adhesion-club" },
  },
  PET_SITTING: {
    walk_30: { en: "dog-walk-30-min", sk: "vencenie-30-min", pl: "spacer-30-min", cs: "venceni-30-min", de: "gassigehen-30-min", fr: "promenade-30-min" },
    walk_60: { en: "dog-walk-60-min", sk: "vencenie-60-min", pl: "spacer-60-min", cs: "venceni-60-min", de: "gassigehen-60-min", fr: "promenade-60-min" },
    cat_visit: { en: "cat-visit", sk: "navsteva-macky", pl: "wizyta-u-kota", cs: "navsteva-kocky", de: "katzenbesuch", fr: "visite-chat" },
    house_sitting_night: { en: "overnight-at-your-home", sk: "strazenie-u-vas-doma", pl: "opieka-u-wlasciciela", cs: "hlidani-u-vas-doma", de: "betreuung-beim-halter", fr: "garde-a-domicile-nuit" },
    boarding_night: { en: "overnight-at-sitters-home", sk: "strazenie-u-opatrovatela", pl: "opieka-u-petsittera", cs: "hlidani-u-hlidace", de: "betreuung-beim-sitter", fr: "hebergement-petsitter-nuit" },
    daycare_day: { en: "day-care", sk: "denne-strazenie", pl: "opieka-dzienna", cs: "denni-hlidani", de: "tagesbetreuung", fr: "garde-de-jour" },
  },
};

export function serviceSlugFor(category: BusinessCategory, code: string, locale: Locale): string | null {
  return SERVICE_SLUGS[category]?.[code]?.[locale] ?? null;
}

export function serviceCodeFromSlug(category: BusinessCategory, slug: string, locale: Locale): string | null {
  const entry = Object.entries(SERVICE_SLUGS[category] ?? {}).find(([, slugs]) => slugs[locale] === slug);
  return entry && SERVICES[category]?.some((s) => s.code === entry[0]) ? entry[0] : null;
}

/** /vet-clinics/bratislava/prices/ or, with a code, /…/prices/cat-neutering/. */
export function pricesPath(locale: Locale, category: BusinessCategory, citySlug: string, code?: string): string {
  const base = listingPath(locale, category, citySlug, PRICES_SEGMENT[locale]);
  if (!code) return base;
  const slug = serviceSlugFor(category, code, locale);
  return slug ? `${base}${slug}/` : base;
}
