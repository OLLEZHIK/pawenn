import type { BusinessCategory } from "@prisma/client";
import type { Locale } from "./locales";

// The 6 priced services per category - docs/card-spec.md, "Цены"
// (owner, 2026-09-25). Pet shops have no prices. Codes are the contract
// with data agents (prices.csv price_code); labels are ours, per locale.
// One label per site language; TypeScript flags a missing one when a
// language is added (docs/playbooks/add-language.md).
// `seo`: how people search for the service's price, per language - the
// title, H1 and FAQ question of its price page ("Hotel pre psov na noc v
// Bratislave - od 16 EUR"). Rules: docs/seo/keywords/README.md, "Названия
// услуг для страниц цен". Required for every language, so a new language
// or service does not build without it. Price tables use the short label.
export type ServiceDef = { code: string; seo: Record<Locale, string> } & Record<Locale, string>;

export const SERVICES: Partial<Record<BusinessCategory, ServiceDef[]>> = {
  GROOMING: [
    { code: "full_groom", en: "Full grooming", sk: "Kompletná úprava",
      seo: { en: "Dog grooming", sk: "Strihanie psa" } },
    { code: "bath_dry", en: "Bath & blow-dry", sk: "Kúpanie a fénovanie",
      seo: { en: "Dog bath and blow dry", sk: "Kúpanie psa" } },
    { code: "hand_stripping", en: "Hand stripping", sk: "Trimovanie",
      seo: { en: "Dog hand stripping", sk: "Trimovanie psa" } },
    { code: "deshedding", en: "De-shedding", sk: "Vyčesávanie podsady",
      seo: { en: "Dog deshedding", sk: "Vyčesávanie podsady psa" } },
    { code: "nail_trim", en: "Nail trim", sk: "Strihanie pazúrov",
      seo: { en: "Dog nail clipping", sk: "Strihanie pazúrov psa" } },
    { code: "cat_groom", en: "Cat grooming", sk: "Úprava mačky",
      seo: { en: "Cat grooming", sk: "Strihanie mačky" } },
  ],
  VET_CLINIC: [
    { code: "exam", en: "Check-up", sk: "Klinické vyšetrenie",
      seo: { en: "Vet checkup", sk: "Vyšetrenie u veterinára" } },
    { code: "vaccination_dog", en: "Dog vaccination", sk: "Očkovanie psa",
      seo: { en: "Dog vaccination", sk: "Očkovanie psa" } },
    { code: "microchip", en: "Microchip", sk: "Čipovanie",
      seo: { en: "Dog microchipping", sk: "Čipovanie psa" } },
    { code: "neuter_cat", en: "Cat neutering (male)", sk: "Kastrácia kocúra",
      seo: { en: "Cat neutering", sk: "Kastrácia kocúra" } },
    { code: "spay_cat", en: "Cat spaying (female)", sk: "Kastrácia (sterilizácia) mačky",
      seo: { en: "Cat spaying", sk: "Kastrácia (sterilizácia) mačky" } },
    { code: "spay_dog", en: "Dog spaying (female)", sk: "Kastrácia fenky",
      seo: { en: "Dog spaying", sk: "Kastrácia fenky (suky)" } },
  ],
  PET_HOTEL: [
    { code: "dog_night", en: "Dog, per night", sk: "Pes, noc",
      seo: { en: "Dog hotel per night", sk: "Hotel pre psov na noc" } },
    { code: "cat_night", en: "Cat, per night", sk: "Mačka, noc",
      seo: { en: "Cattery per night", sk: "Hotel pre mačky na noc" } },
    { code: "daycare_day", en: "Dog daycare, per day", sk: "Psia škôlka, deň",
      seo: { en: "Dog daycare per day", sk: "Psia škôlka na deň" } },
    { code: "daycare_pass", en: "Daycare pass", sk: "Permanentka do škôlky",
      seo: { en: "Dog daycare pass", sk: "Permanentka do psej škôlky" } },
    { code: "pickup", en: "Pick-up & drop-off", sk: "Dovoz a odvoz",
      seo: { en: "Pet hotel pickup and drop off", sk: "Dovoz a odvoz psa do hotela" } },
    { code: "extra_walk", en: "Extra walk / individual care", sk: "Venčenie navyše / individuálna starostlivosť",
      seo: { en: "Extra walk at a dog hotel", sk: "Venčenie navyše v hoteli pre psov" } },
  ],
  DOG_TRAINING: [
    { code: "puppy_course", en: "Puppy course", sk: "Šteňacia škôlka",
      seo: { en: "Puppy classes", sk: "Šteňacia škôlka" } },
    { code: "obedience_course", en: "Basic obedience course", sk: "Kurz základnej poslušnosti",
      seo: { en: "Dog obedience training", sk: "Kurz poslušnosti pre psa" } },
    { code: "group_lesson", en: "Group lesson", sk: "Skupinová hodina",
      seo: { en: "Group dog training class", sk: "Skupinový výcvik psa" } },
    { code: "private_lesson", en: "Private lesson", sk: "Individuálna hodina",
      seo: { en: "One to one dog training", sk: "Individuálny výcvik psa" } },
    { code: "behavior_consult", en: "Behaviour consultation", sk: "Konzultácia problémového správania",
      seo: { en: "Dog behaviourist consultation", sk: "Konzultácia správania psa" } },
    { code: "membership", en: "Club membership", sk: "Členský poplatok",
      seo: { en: "Dog club membership", sk: "Členstvo v kynologickom klube" } },
  ],
  PET_SITTING: [
    { code: "walk_30", en: "Dog walk, 30 min", sk: "Venčenie 30 min",
      seo: { en: "30 minute dog walk", sk: "Venčenie psa na 30 minút" } },
    { code: "walk_60", en: "Dog walk, 60 min", sk: "Venčenie 60 min",
      seo: { en: "1 hour dog walk", sk: "Venčenie psa na hodinu" } },
    { code: "cat_visit", en: "Cat visit", sk: "Návšteva mačky",
      seo: { en: "Cat sitting visit", sk: "Návšteva mačky doma" } },
    { code: "house_sitting_night", en: "Overnight at your home", sk: "Stráženie u vás doma, noc",
      seo: { en: "Overnight dog sitting", sk: "Stráženie psa u vás doma cez noc" } },
    { code: "boarding_night", en: "Overnight at sitter's home", sk: "Stráženie u opatrovateľa, noc",
      seo: { en: "Overnight dog boarding", sk: "Stráženie psa u opatrovateľa cez noc" } },
    { code: "daycare_day", en: "Day care", sk: "Denné stráženie",
      seo: { en: "Dog sitting per day", sk: "Denné stráženie psa" } },
  ],
};

/** Service.slug in the database: codes repeat across categories. */
export function serviceSlug(category: BusinessCategory, code: string): string {
  return `${category}:${code}`;
}

export function findService(category: BusinessCategory, code: string): ServiceDef | undefined {
  return SERVICES[category]?.find((s) => s.code === code);
}

/** Search phrase for the service price page (title, H1, FAQ). */
export function serviceSeoName(category: BusinessCategory, code: string, locale: Locale): string {
  const def = findService(category, code);
  return def ? def.seo[locale] : code;
}

/** Label for a price row; falls back to English, then the raw code. */
export function serviceLabel(category: BusinessCategory, code: string, locale: string): string {
  const def = findService(category, code);
  if (!def) return code;
  return def[locale as Locale] ?? def.en;
}

// What a price must include to be compared with other places'
// (docs/card-spec.md, "Что считать"), shown under the service name so
// visitors know what they are comparing.
const INCLUDES: Record<string, Record<Locale, string>> = {
  "GROOMING:full_groom": { en: "Bath, haircut and nails", sk: "Kúpanie, strih a pazúriky" },
  "GROOMING:hand_stripping": { en: "Whole procedure", sk: "Celá procedúra" },
  "VET_CLINIC:exam": { en: "Basic exam, no tests", sk: "Základné vyšetrenie bez testov" },
  "VET_CLINIC:vaccination_dog": { en: "Combined vaccine + rabies", sk: "Kombinovaná vakcína + besnota" },
  "VET_CLINIC:microchip": { en: "Chip, implanting and registration", sk: "Čip, aplikácia a registrácia" },
  "VET_CLINIC:neuter_cat": { en: "Surgery + anaesthesia", sk: "Operácia + anestézia" },
  "VET_CLINIC:spay_cat": { en: "Surgery + anaesthesia", sk: "Operácia + anestézia" },
  "VET_CLINIC:spay_dog": { en: "Surgery + anaesthesia", sk: "Operácia + anestézia" },
  "PET_HOTEL:pickup": { en: "One way", sk: "Jedným smerom" },
};

export function serviceIncludes(category: BusinessCategory, code: string, locale: Locale): string | null {
  const text = INCLUDES[serviceSlug(category, code)];
  return text ? (text[locale] ?? text.en) : null;
}
