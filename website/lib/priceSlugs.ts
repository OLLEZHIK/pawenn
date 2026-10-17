import type { BusinessCategory } from "@prisma/client";
import type { Locale } from "./locales";
import { listingPath } from "./categories";
import { SERVICES } from "./services";

// Price pages (owner, 2026-09-25; docs/seo/README.md, "Страницы цен"):
//   /<category>/<city>/prices/            what each service costs in the city
//   /<category>/<city>/prices/<service>/  one service, every place compared
// The "prices" segment sits in the district slot, like "nonstop"; no
// district may use it.
export const PRICES_SEGMENT: Record<Locale, string> = { en: "prices", sk: "ceny", pl: "ceny", cs: "ceny", de: "preise", fr: "tarifs", it: "prezzi", es: "precios", nl: "tarieven", fi: "hinnat", hu: "arak", ja: "ryokin" };

/** URL slug per service code and language - written by hand, as people
 *  search it ("kastracia-kocura"), not generated from labels. */
const SERVICE_SLUGS: Partial<Record<BusinessCategory, Record<string, Record<Locale, string>>>> = {
  GROOMING: {
    full_groom: { en: "full-grooming", sk: "kompletna-uprava", pl: "strzyzenie-psa", cs: "strihani-psa", de: "hunde-scheren", fr: "toilettage-complet", it: "toelettatura-cane", es: "corte-de-pelo", nl: "hond-trimmen", fi: "koiran-trimmaus", hu: "teljes-kozmetika", ja: "shampu-katto" },
    bath_dry: { en: "bath-and-blow-dry", sk: "kupanie-a-fenovanie", pl: "kapiel-i-suszenie", cs: "koupani-a-fenovani", de: "baden-und-foehnen", fr: "bain-et-sechage", it: "lavaggio-e-asciugatura", es: "bano-y-secado", nl: "wassen-en-drogen", fi: "pesu-ja-foonaus", hu: "furdetes-es-szaritas", ja: "shampu-buro" },
    hand_stripping: { en: "hand-stripping", sk: "trimovanie", pl: "trymowanie", cs: "trimovani", de: "trimmen", fr: "epilation", it: "stripping", es: "stripping", nl: "plukken", fi: "nypinta", hu: "trimeles", ja: "purakkingu" },
    deshedding: { en: "de-shedding", sk: "vycesavanie-podsady", pl: "wyczesywanie-podszerstka", cs: "vycesavani-podsady", de: "unterwolle-entfernen", fr: "demelage", it: "cardatura", es: "deslanado", nl: "ontwollen", fi: "pohjavillapesu", hu: "aljszor-eltavolitas", ja: "reikingu" },
    nail_trim: { en: "nail-trim", sk: "strihanie-pazurikov", pl: "obcinanie-pazurow", cs: "strihani-drapku", de: "krallen-schneiden", fr: "coupe-des-griffes", it: "taglio-unghie", es: "corte-de-unas", nl: "nagels-knippen", fi: "kynsien-leikkaus", hu: "karomvagas", ja: "tsumekiri" },
    cat_groom: { en: "cat-grooming", sk: "uprava-macky", pl: "strzyzenie-kota", cs: "strihani-kocky", de: "katze-scheren", fr: "toilettage-chat", it: "toelettatura-gatto", es: "peluqueria-felina", nl: "kat-trimmen", fi: "kissan-trimmaus", hu: "macskakozmetika", ja: "neko-torimingu" },
  },
  VET_CLINIC: {
    exam: { en: "check-up", sk: "vysetrenie", pl: "badanie-kliniczne", cs: "vysetreni", de: "untersuchung", fr: "consultation", it: "visita-veterinaria", es: "consulta-veterinaria", nl: "consult", fi: "peruskaynti", hu: "allatorvosi-vizsgalat", ja: "shinsatsu" },
    vaccination_dog: { en: "dog-vaccination", sk: "ockovanie-psa", pl: "szczepienie-psa", cs: "ockovani-psa", de: "impfung-hund", fr: "vaccination-chien", it: "vaccino-cane", es: "vacuna-perro", nl: "vaccinatie-hond", fi: "koiran-rokotus", hu: "kutya-oltas", ja: "inu-wakuchin" },
    microchip: { en: "microchip", sk: "cipovanie", pl: "czipowanie", cs: "cipovani", de: "chippen", fr: "identification-puce", it: "microchip-cane", es: "microchip-perro", nl: "chippen-hond", fi: "koiran-sirutus", hu: "mikrochip", ja: "maikurochippu" },
    neuter_cat: { en: "cat-neutering", sk: "kastracia-kocura", pl: "kastracja-kota", cs: "kastrace-kocoura", de: "kastration-kater", fr: "castration-chat", it: "castrazione-gatto", es: "castracion-gato", nl: "castratie-kater", fi: "kissan-kastrointi", hu: "kandur-ivartalanitas", ja: "neko-kyosei" },
    spay_cat: { en: "cat-spaying", sk: "kastracia-macky", pl: "sterylizacja-kotki", cs: "kastrace-kocky", de: "kastration-katze", fr: "sterilisation-chatte", it: "sterilizzazione-gatta", es: "esterilizacion-gata", nl: "sterilisatie-kat", fi: "kissan-sterilointi", hu: "nosteny-macska-ivartalanitas", ja: "neko-hinin" },
    spay_dog: { en: "dog-spaying", sk: "kastracia-suky", pl: "sterylizacja-suki", cs: "kastrace-feny", de: "kastration-huendin", fr: "sterilisation-chienne", it: "sterilizzazione-cane", es: "esterilizacion-perra", nl: "sterilisatie-teef", fi: "koiran-sterilointi", hu: "szuka-ivartalanitas", ja: "inu-hinin" },
  },
  PET_HOTEL: {
    dog_night: { en: "dog-per-night", sk: "pes-noc", pl: "pies-doba", cs: "pes-noc", de: "hund-nacht", fr: "chien-nuit", it: "cane-notte", es: "perro-noche", nl: "hond-per-nacht", fi: "koirahoitola-yo", hu: "kutya-ejszaka", ja: "inu-shukuhaku" },
    cat_night: { en: "cat-per-night", sk: "macka-noc", pl: "kot-doba", cs: "kocka-noc", de: "katze-nacht", fr: "chat-nuit", it: "gatto-notte", es: "gato-noche", nl: "kat-per-nacht", fi: "kissahoitola-yo", hu: "macska-ejszaka", ja: "neko-shukuhaku" },
    daycare_day: { en: "dog-daycare", sk: "psia-skolka", pl: "swietlica-dzien", cs: "psi-skolka", de: "tagesstaette-tag", fr: "garderie-jour", it: "asilo-giorno", es: "guarderia-dia", nl: "dagopvang-hond", fi: "koirapaivakoti", hu: "kutyanapkozi", ja: "ichiji-azukari" },
    daycare_pass: { en: "daycare-pass", sk: "permanentka-do-skolky", pl: "karnet-do-swietlicy", cs: "permanentka-do-skolky", de: "zehnerkarte-tagesstaette", fr: "forfait-garderie", it: "abbonamento-asilo", es: "bono-guarderia", nl: "strippenkaart-dagopvang", fi: "paivakoti-sarjakortti", hu: "kutyanapkozi-berlet", ja: "hoikuen-kaisuuken" },
    pickup: { en: "pick-up-and-drop-off", sk: "dovoz-a-odvoz", pl: "transport-zwierzaka", cs: "dovoz-a-odvoz", de: "hol-und-bringservice", fr: "transport-animalier", it: "taxi-dog", es: "taxi-mascotas", nl: "haalservice-brengservice", fi: "lemmikkikuljetus", hu: "allattaxi", ja: "sougei" },
    extra_walk: { en: "extra-walk", sk: "vencenie-navyse", pl: "dodatkowy-spacer", cs: "venceni-navic", de: "extra-spaziergang", fr: "promenade-supplementaire", it: "passeggiata-extra", es: "paseo-extra", nl: "extra-wandeling", fi: "lisalenkki", hu: "extra-seta", ja: "tsuika-sanpo" },
  },
  DOG_TRAINING: {
    puppy_course: { en: "puppy-course", sk: "stenacia-skolka", pl: "kurs-dla-szczeniat", cs: "kurz-pro-stenata", de: "welpenkurs", fr: "ecole-du-chiot", it: "corso-cuccioli", es: "curso-cachorros", nl: "puppycursus", fi: "pentukurssi", hu: "kolyokkutya-tanfolyam", ja: "papi-kyoshitsu" },
    obedience_course: { en: "obedience-course", sk: "kurz-poslusnosti", pl: "kurs-posluszenstwa", cs: "kurz-poslusnosti", de: "begleithundekurs", fr: "cours-d-education", it: "corso-educazione-base", es: "curso-obediencia-basica", nl: "gehoorzaamheidscursus", fi: "arkitottelevaisuuskurssi", hu: "alapfoku-engedelmesseg", ja: "kihon-shitsuke" },
    group_lesson: { en: "group-lesson", sk: "skupinova-hodina", pl: "lekcja-grupowa", cs: "skupinova-lekce", de: "gruppenstunde", fr: "cours-collectif", it: "lezione-di-gruppo", es: "clase-grupal", nl: "groepsles", fi: "ryhmatunti", hu: "csoportos-foglalkozas", ja: "gurupu-ressun" },
    private_lesson: { en: "private-lesson", sk: "individualna-hodina", pl: "lekcja-indywidualna", cs: "individualni-lekce", de: "einzeltraining", fr: "cours-individuel", it: "lezione-individuale", es: "clase-individual", nl: "priveles", fi: "yksityistunti", hu: "egyeni-kepzes", ja: "kobetsu-ressun" },
    behavior_consult: { en: "behaviour-consultation", sk: "konzultacia-spravania", pl: "konsultacja-behawioralna", cs: "konzultace-chovani", de: "verhaltensberatung", fr: "bilan-comportemental", it: "consulenza-comportamentale", es: "consulta-etologia", nl: "gedragstherapie", fi: "kaytosneuvonta", hu: "viselkedesterapia", ja: "koudou-kaunseringu" },
    membership: { en: "club-membership", sk: "clensky-poplatok", pl: "skladka-czlonkowska", cs: "clensky-prispevek", de: "mitgliedsbeitrag", fr: "adhesion-club", it: "quota-associativa", es: "cuota-club", nl: "lidmaatschap-club", fi: "jasenmaksu", hu: "klubtagsagi-dij", ja: "nyuukaikin" },
  },
  PET_SITTING: {
    walk_30: { en: "dog-walk-30-min", sk: "vencenie-30-min", pl: "spacer-30-min", cs: "venceni-30-min", de: "gassigehen-30-min", fr: "promenade-30-min", it: "passeggiata-30-min", es: "paseo-30-min", nl: "wandeling-30-min", fi: "ulkoilutus-30-min", hu: "kutyaseta-30-perc", ja: "sanpo-30-pun" },
    walk_60: { en: "dog-walk-60-min", sk: "vencenie-60-min", pl: "spacer-60-min", cs: "venceni-60-min", de: "gassigehen-60-min", fr: "promenade-60-min", it: "passeggiata-60-min", es: "paseo-60-min", nl: "wandeling-60-min", fi: "ulkoilutus-60-min", hu: "kutyaseta-60-perc", ja: "sanpo-60-pun" },
    cat_visit: { en: "cat-visit", sk: "navsteva-macky", pl: "wizyta-u-kota", cs: "navsteva-kocky", de: "katzenbesuch", fr: "visite-chat", it: "visite-gatto", es: "visita-gatos", nl: "kattenoppas-aan-huis", fi: "kissan-kotikaynti", hu: "macskafelugyelet-haznal", ja: "neko-shitta" },
    house_sitting_night: { en: "overnight-at-your-home", sk: "strazenie-u-vas-doma", pl: "opieka-u-wlasciciela", cs: "hlidani-u-vas-doma", de: "betreuung-beim-halter", fr: "garde-a-domicile-nuit", it: "custodia-a-casa-notte", es: "cuidado-domicilio-noche", nl: "oppas-aan-huis-nacht", fi: "yohoito-omistajan-kotona", hu: "felugyelet-a-gazdinal-ejszaka", ja: "jitaku-shukuhaku" },
    boarding_night: { en: "overnight-at-sitters-home", sk: "strazenie-u-opatrovatela", pl: "opieka-u-petsittera", cs: "hlidani-u-hlidace", de: "betreuung-beim-sitter", fr: "hebergement-petsitter-nuit", it: "pensione-casalinga-notte", es: "alojamiento-cuidador-noche", nl: "opvang-bij-oppas-nacht", fi: "yohoito-hoitajan-luona", hu: "felugyelet-a-szitternel-ejszaka", ja: "shitta-taku-azukari" },
    daycare_day: { en: "day-care", sk: "denne-strazenie", pl: "opieka-dzienna", cs: "denni-hlidani", de: "tagesbetreuung", fr: "garde-de-jour", it: "dog-sitting-diurno", es: "cuidado-diurno", nl: "dagopvang-oppas", fi: "lemmikin-paivahoito", hu: "napkozi-felugyelet", ja: "shitta-deikea" },
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
