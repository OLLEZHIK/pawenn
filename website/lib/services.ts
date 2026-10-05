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
    { code: "full_groom", en: "Full grooming", sk: "Kompletná úprava", pl: "Strzyżenie psa", cs: "Kompletní úprava",
      seo: { en: "Dog grooming", sk: "Strihanie psa", pl: "Strzyżenie psa", cs: "Stříhání psa" } },
    { code: "bath_dry", en: "Bath & blow-dry", sk: "Kúpanie a fénovanie", pl: "Kąpiel i suszenie", cs: "Koupání a fénování",
      seo: { en: "Dog bath and blow dry", sk: "Kúpanie psa", pl: "Kąpiel psa", cs: "Koupání psa" } },
    { code: "hand_stripping", en: "Hand stripping", sk: "Trimovanie", pl: "Trymowanie", cs: "Trimování",
      seo: { en: "Dog hand stripping", sk: "Trimovanie psa", pl: "Trymowanie psa", cs: "Trimování psa" } },
    { code: "deshedding", en: "De-shedding", sk: "Vyčesávanie podsady", pl: "Wyczesywanie podszerstka", cs: "Vyčesávání podsady",
      seo: { en: "Dog deshedding", sk: "Vyčesávanie podsady psa", pl: "Wyczesywanie psa", cs: "Vyčesávání podsady psa" } },
    { code: "nail_trim", en: "Nail trim", sk: "Strihanie pazúrov", pl: "Obcinanie pazurów", cs: "Stříhání drápků",
      seo: { en: "Dog nail clipping", sk: "Strihanie pazúrov psa", pl: "Obcinanie pazurów u psa", cs: "Stříhání drápků u psa" } },
    { code: "cat_groom", en: "Cat grooming", sk: "Úprava mačky", pl: "Strzyżenie kota", cs: "Úprava kočky",
      seo: { en: "Cat grooming", sk: "Strihanie mačky", pl: "Strzyżenie kota", cs: "Stříhání kočky" } },
  ],
  VET_CLINIC: [
    { code: "exam", en: "Check-up", sk: "Klinické vyšetrenie", pl: "Badanie kliniczne", cs: "Klinické vyšetření",
      seo: { en: "Vet checkup", sk: "Vyšetrenie u veterinára", pl: "Wizyta u weterynarza", cs: "Vyšetření u veterináře" } },
    { code: "vaccination_dog", en: "Dog vaccination", sk: "Očkovanie psa", pl: "Szczepienie psa", cs: "Očkování psa",
      seo: { en: "Dog vaccination", sk: "Očkovanie psa", pl: "Szczepienie psa", cs: "Očkování psa" } },
    { code: "microchip", en: "Microchip", sk: "Čipovanie", pl: "Czipowanie", cs: "Čipování",
      seo: { en: "Dog microchipping", sk: "Čipovanie psa", pl: "Czipowanie psa", cs: "Čipování psa" } },
    { code: "neuter_cat", en: "Cat neutering (male)", sk: "Kastrácia kocúra", pl: "Kastracja kota", cs: "Kastrace kocoura",
      seo: { en: "Cat neutering", sk: "Kastrácia kocúra", pl: "Kastracja kota", cs: "Kastrace kocoura" } },
    { code: "spay_cat", en: "Cat spaying (female)", sk: "Kastrácia (sterilizácia) mačky", pl: "Sterylizacja kotki", cs: "Kastrace kočky",
      seo: { en: "Cat spaying", sk: "Kastrácia (sterilizácia) mačky", pl: "Sterylizacja kotki", cs: "Kastrace (sterilizace) kočky" } },
    { code: "spay_dog", en: "Dog spaying (female)", sk: "Kastrácia fenky", pl: "Sterylizacja suki", cs: "Kastrace feny",
      seo: { en: "Dog spaying", sk: "Kastrácia fenky (suky)", pl: "Sterylizacja psa (suki)", cs: "Kastrace feny (fenky)" } },
  ],
  PET_HOTEL: [
    { code: "dog_night", en: "Dog, per night", sk: "Pes, noc", pl: "Pies, doba", cs: "Pes, noc",
      seo: { en: "Dog hotel per night", sk: "Hotel pre psov na noc", pl: "Hotel dla psów za dobę", cs: "Hotel pro psy na noc" } },
    { code: "cat_night", en: "Cat, per night", sk: "Mačka, noc", pl: "Kot, doba", cs: "Kočka, noc",
      seo: { en: "Cattery per night", sk: "Hotel pre mačky na noc", pl: "Hotel dla kotów za dobę", cs: "Hotel pro kočky na noc" } },
    { code: "daycare_day", en: "Dog daycare, per day", sk: "Psia škôlka, deň", pl: "Świetlica dla psów, dzień", cs: "Psí školka, den",
      seo: { en: "Dog daycare per day", sk: "Psia škôlka na deň", pl: "Świetlica dla psów za dzień", cs: "Psí školka na den" } },
    { code: "daycare_pass", en: "Daycare pass", sk: "Permanentka do škôlky", pl: "Karnet do świetlicy", cs: "Permanentka do školky",
      seo: { en: "Dog daycare pass", sk: "Permanentka do psej škôlky", pl: "Karnet do świetlicy dla psów", cs: "Permanentka do psí školky" } },
    { code: "pickup", en: "Pick-up & drop-off", sk: "Dovoz a odvoz", pl: "Transport (dowóz i odbiór)", cs: "Dovoz a odvoz",
      seo: { en: "Pet hotel pickup and drop off", sk: "Dovoz a odvoz psa do hotela", pl: "Transport psa do hotelu", cs: "Dovoz a odvoz psa do hotelu" } },
    { code: "extra_walk", en: "Extra walk / individual care", sk: "Venčenie navyše / individuálna starostlivosť", pl: "Dodatkowy spacer / opieka indywidualna", cs: "Venčení navíc",
      seo: { en: "Extra walk at a dog hotel", sk: "Venčenie navyše v hoteli pre psov", pl: "Dodatkowy spacer z psem", cs: "Venčení navíc v psím hotelu" } },
  ],
  DOG_TRAINING: [
    { code: "puppy_course", en: "Puppy course", sk: "Šteňacia škôlka", pl: "Kurs dla szczeniąt", cs: "Štěněcí školka",
      seo: { en: "Puppy classes", sk: "Šteňacia škôlka", pl: "Kurs dla szczeniąt", cs: "Kurz pro štěňata (štěněcí školka)" } },
    { code: "obedience_course", en: "Basic obedience course", sk: "Kurz základnej poslušnosti", pl: "Kurs podstawowego posłuszeństwa", cs: "Kurz základní poslušnosti",
      seo: { en: "Dog obedience training", sk: "Kurz poslušnosti pre psa", pl: "Szkolenie psa (kurs posłuszeństwa)", cs: "Kurz poslušnosti pro psa" } },
    { code: "group_lesson", en: "Group lesson", sk: "Skupinová hodina", pl: "Zajęcia grupowe", cs: "Skupinová lekce",
      seo: { en: "Group dog training class", sk: "Skupinový výcvik psa", pl: "Zajęcia grupowe dla psów", cs: "Skupinový výcvik psa" } },
    { code: "private_lesson", en: "Private lesson", sk: "Individuálna hodina", pl: "Lekcja indywidualna", cs: "Individuální lekce",
      seo: { en: "One to one dog training", sk: "Individuálny výcvik psa", pl: "Lekcja indywidualna z psem", cs: "Individuální výcvik psa" } },
    { code: "behavior_consult", en: "Behaviour consultation", sk: "Konzultácia problémového správania", pl: "Konsultacja behawioralna", cs: "Konzultace problémového chování",
      seo: { en: "Dog behaviourist consultation", sk: "Konzultácia správania psa", pl: "Konsultacja behawioralna", cs: "Konzultace chování psa" } },
    { code: "membership", en: "Club membership", sk: "Členský poplatok", pl: "Składka członkowska", cs: "Členský příspěvek",
      seo: { en: "Dog club membership", sk: "Členstvo v kynologickom klube", pl: "Składka w klubie kynologicznym", cs: "Členství v kynologickém klubu" } },
  ],
  PET_SITTING: [
    { code: "walk_30", en: "Dog walk, 30 min", sk: "Venčenie 30 min", pl: "Spacer z psem, 30 min", cs: "Venčení 30 min",
      seo: { en: "30 minute dog walk", sk: "Venčenie psa na 30 minút", pl: "Wyprowadzanie psa na 30 minut", cs: "Venčení psa na 30 minut" } },
    { code: "walk_60", en: "Dog walk, 60 min", sk: "Venčenie 60 min", pl: "Spacer z psem, 60 min", cs: "Venčení 60 min",
      seo: { en: "1 hour dog walk", sk: "Venčenie psa na hodinu", pl: "Spacer z psem na godzinę", cs: "Venčení psa na hodinu" } },
    { code: "cat_visit", en: "Cat visit", sk: "Návšteva mačky", pl: "Wizyta u kota", cs: "Návštěva kočky",
      seo: { en: "Cat sitting visit", sk: "Návšteva mačky doma", pl: "Wizyta u kota", cs: "Návštěva kočky doma" } },
    { code: "house_sitting_night", en: "Overnight at your home", sk: "Stráženie u vás doma, noc", pl: "Opieka w domu właściciela, noc", cs: "Hlídání u vás doma, noc",
      seo: { en: "Overnight dog sitting", sk: "Stráženie psa u vás doma cez noc", pl: "Opieka nad psem w domu właściciela", cs: "Hlídání psa u vás doma přes noc" } },
    { code: "boarding_night", en: "Overnight at sitter's home", sk: "Stráženie u opatrovateľa, noc", pl: "Opieka u petsittera, noc", cs: "Hlídání u hlídače, noc",
      seo: { en: "Overnight dog boarding", sk: "Stráženie psa u opatrovateľa cez noc", pl: "Opieka u petsittera za noc", cs: "Hlídání psa u hlídače přes noc" } },
    { code: "daycare_day", en: "Day care", sk: "Denné stráženie", pl: "Opieka dzienna", cs: "Denní hlídání",
      seo: { en: "Dog sitting per day", sk: "Denné stráženie psa", pl: "Opieka dzienna nad psem", cs: "Denní hlídání psa" } },
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
  "GROOMING:full_groom": { en: "Bath, haircut and nails", sk: "Kúpanie, strih a pazúriky", pl: "Kąpiel, strzyżenie i pazury", cs: "Koupání, střih a drápky" },
  "GROOMING:hand_stripping": { en: "Whole procedure", sk: "Celá procedúra", pl: "Cały zabieg", cs: "Celý zákrok" },
  "VET_CLINIC:exam": { en: "Basic exam, no tests", sk: "Základné vyšetrenie bez testov", pl: "Podstawowe badanie bez testów", cs: "Základní vyšetření bez testů" },
  "VET_CLINIC:vaccination_dog": { en: "Combined vaccine + rabies", sk: "Kombinovaná vakcína + besnota", pl: "Szczepionka skojarzona + wścieklizna", cs: "Kombinovaná vakcína + vzteklina" },
  "VET_CLINIC:microchip": { en: "Chip, implanting and registration", sk: "Čip, aplikácia a registrácia", pl: "Czip, wszczepienie i rejestracja", cs: "Čip, aplikace a registrace" },
  "VET_CLINIC:neuter_cat": { en: "Surgery + anaesthesia", sk: "Operácia + anestézia", pl: "Zabieg + znieczulenie", cs: "Operace + anestezie" },
  "VET_CLINIC:spay_cat": { en: "Surgery + anaesthesia", sk: "Operácia + anestézia", pl: "Zabieg + znieczulenie", cs: "Operace + anestezie" },
  "VET_CLINIC:spay_dog": { en: "Surgery + anaesthesia", sk: "Operácia + anestézia", pl: "Zabieg + znieczulenie", cs: "Operace + anestezie" },
  "PET_HOTEL:pickup": { en: "One way", sk: "Jedným smerom", pl: "W jedną stronę", cs: "Jedním směrem" },
};

export function serviceIncludes(category: BusinessCategory, code: string, locale: Locale): string | null {
  const text = INCLUDES[serviceSlug(category, code)];
  return text ? (text[locale] ?? text.en) : null;
}
