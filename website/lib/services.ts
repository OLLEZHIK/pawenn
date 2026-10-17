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
    { code: "full_groom", en: "Full grooming", sk: "Kompletná úprava", pl: "Strzyżenie psa", cs: "Kompletní úprava", de: "Komplettpflege", fr: "Toilettage complet", it: "Toelettatura completa", es: "Peluquería completa",
      seo: { en: "Dog grooming", sk: "Strihanie psa", pl: "Strzyżenie psa", cs: "Stříhání psa", de: "Hund scheren (Komplettpflege)", fr: "Toilettage pour chien", it: "Toelettatura per cani", es: "Peluquería canina completa" } },
    { code: "bath_dry", en: "Bath & blow-dry", sk: "Kúpanie a fénovanie", pl: "Kąpiel i suszenie", cs: "Koupání a fénování", de: "Baden & Föhnen", fr: "Bain & séchage", it: "Bagno e asciugatura", es: "Baño y secado",
      seo: { en: "Dog bath and blow dry", sk: "Kúpanie psa", pl: "Kąpiel psa", cs: "Koupání psa", de: "Hund baden und föhnen", fr: "Bain et séchage pour chien", it: "Lavaggio e asciugatura cane", es: "Baño y secado para perro" } },
    { code: "hand_stripping", en: "Hand stripping", sk: "Trimovanie", pl: "Trymowanie", cs: "Trimování", de: "Trimmen", fr: "Épilation (trimming)", it: "Stripping", es: "Stripping",
      seo: { en: "Dog hand stripping", sk: "Trimovanie psa", pl: "Trymowanie psa", cs: "Trimování psa", de: "Hund trimmen (Handstripping)", fr: "Épilation du chien (trimming)", it: "Stripping del cane", es: "Stripping para perro" } },
    { code: "deshedding", en: "De-shedding", sk: "Vyčesávanie podsady", pl: "Wyczesywanie podszerstka", cs: "Vyčesávání podsady", de: "Unterwolle entfernen", fr: "Démêlage & sous-poil", it: "Cardatura e snodatura", es: "Deslanado",
      seo: { en: "Dog deshedding", sk: "Vyčesávanie podsady psa", pl: "Wyczesywanie psa", cs: "Vyčesávání podsady psa", de: "Unterwolle beim Hund entfernen", fr: "Démêlage et brossage du chien", it: "Cardatura del cane (sottopelo)", es: "Deslanado del perro (subpelo)" } },
    { code: "nail_trim", en: "Nail trim", sk: "Strihanie pazúrov", pl: "Obcinanie pazurów", cs: "Stříhání drápků", de: "Krallen schneiden", fr: "Coupe des griffes", it: "Taglio unghie", es: "Corte de uñas",
      seo: { en: "Dog nail clipping", sk: "Strihanie pazúrov psa", pl: "Obcinanie pazurów u psa", cs: "Stříhání drápků u psa", de: "Krallen schneiden beim Hund", fr: "Coupe des griffes du chien", it: "Taglio unghie del cane", es: "Corte de uñas para perro" } },
    { code: "cat_groom", en: "Cat grooming", sk: "Úprava mačky", pl: "Strzyżenie kota", cs: "Úprava kočky", de: "Katzenpflege", fr: "Toilettage chat", it: "Toelettatura gatto", es: "Peluquería felina",
      seo: { en: "Cat grooming", sk: "Strihanie mačky", pl: "Strzyżenie kota", cs: "Stříhání kočky", de: "Katze scheren (Katzenpflege)", fr: "Toilettage pour chat", it: "Toelettatura per gatti", es: "Peluquería felina" } },
  ],
  VET_CLINIC: [
    { code: "exam", en: "Check-up", sk: "Klinické vyšetrenie", pl: "Badanie kliniczne", cs: "Klinické vyšetření", de: "Klinische Untersuchung", fr: "Consultation générale", it: "Visita clinica", es: "Consulta general",
      seo: { en: "Vet checkup", sk: "Vyšetrenie u veterinára", pl: "Wizyta u weterynarza", cs: "Vyšetření u veterináře", de: "Untersuchung beim Tierarzt", fr: "Consultation vétérinaire", it: "Visita dal veterinario", es: "Consulta veterinaria" } },
    { code: "vaccination_dog", en: "Dog vaccination", sk: "Očkovanie psa", pl: "Szczepienie psa", cs: "Očkování psa", de: "Impfung Hund", fr: "Vaccination chien", it: "Vaccinazione cane", es: "Vacunación perro",
      seo: { en: "Dog vaccination", sk: "Očkovanie psa", pl: "Szczepienie psa", cs: "Očkování psa", de: "Impfung für den Hund", fr: "Vaccin pour chien", it: "Vaccino per il cane", es: "Vacuna para el perro" } },
    { code: "microchip", en: "Microchip", sk: "Čipovanie", pl: "Czipowanie", cs: "Čipování", de: "Chippen", fr: "Identification (puce)", it: "Applicazione microchip", es: "Microchip",
      seo: { en: "Dog microchipping", sk: "Čipovanie psa", pl: "Czipowanie psa", cs: "Čipování psa", de: "Hund chippen lassen", fr: "Puce électronique pour chien", it: "Microchip per il cane", es: "Microchip para el perro" } },
    { code: "neuter_cat", en: "Cat neutering (male)", sk: "Kastrácia kocúra", pl: "Kastracja kota", cs: "Kastrace kocoura", de: "Kastration Kater", fr: "Castration chat", it: "Castrazione gatto", es: "Castración gato",
      seo: { en: "Cat neutering", sk: "Kastrácia kocúra", pl: "Kastracja kota", cs: "Kastrace kocoura", de: "Kastration beim Kater", fr: "Castration du chat (mâle)", it: "Castrazione del gatto (maschio)", es: "Castración de gato (macho)" } },
    { code: "spay_cat", en: "Cat spaying (female)", sk: "Kastrácia (sterilizácia) mačky", pl: "Sterylizacja kotki", cs: "Kastrace kočky", de: "Kastration Katze", fr: "Stérilisation chatte", it: "Sterilizzazione gatta", es: "Esterilización gata",
      seo: { en: "Cat spaying", sk: "Kastrácia (sterilizácia) mačky", pl: "Sterylizacja kotki", cs: "Kastrace (sterilizace) kočky", de: "Kastration (Sterilisation) der Katze", fr: "Stérilisation de la chatte", it: "Sterilizzazione della gatta", es: "Esterilización de la gata" } },
    { code: "spay_dog", en: "Dog spaying (female)", sk: "Kastrácia fenky", pl: "Sterylizacja suki", cs: "Kastrace feny", de: "Kastration Hündin", fr: "Stérilisation chienne", it: "Sterilizzazione cane", es: "Esterilización perra",
      seo: { en: "Dog spaying", sk: "Kastrácia fenky (suky)", pl: "Sterylizacja psa (suki)", cs: "Kastrace feny (fenky)", de: "Kastration (Sterilisation) der Hündin", fr: "Stérilisation de la chienne", it: "Sterilizzazione del cane (femmina)", es: "Esterilización de la perra" } },
  ],
  PET_HOTEL: [
    { code: "dog_night", en: "Dog, per night", sk: "Pes, noc", pl: "Pies, doba", cs: "Pes, noc", de: "Hund, pro Nacht", fr: "Chien, par nuit", it: "Cane, per notte", es: "Perro, por noche",
      seo: { en: "Dog hotel per night", sk: "Hotel pre psov na noc", pl: "Hotel dla psów za dobę", cs: "Hotel pro psy na noc", de: "Hundepension pro Nacht", fr: "Pension pour chien par nuit", it: "Pensione per cani a notte", es: "Residencia canina por noche" } },
    { code: "cat_night", en: "Cat, per night", sk: "Mačka, noc", pl: "Kot, doba", cs: "Kočka, noc", de: "Katze, pro Nacht", fr: "Chat, par nuit", it: "Gatto, per notte", es: "Gato, por noche",
      seo: { en: "Cattery per night", sk: "Hotel pre mačky na noc", pl: "Hotel dla kotów za dobę", cs: "Hotel pro kočky na noc", de: "Katzenpension pro Nacht", fr: "Pension pour chat par nuit", it: "Pensione per gatti a notte", es: "Residencia felina por noche" } },
    { code: "daycare_day", en: "Dog daycare, per day", sk: "Psia škôlka, deň", pl: "Świetlica dla psów, dzień", cs: "Psí školka, den", de: "Tagesstätte, pro Tag", fr: "Garderie de jour", it: "Asilo diurno, al giorno", es: "Guardería de día",
      seo: { en: "Dog daycare per day", sk: "Psia škôlka na deň", pl: "Świetlica dla psów za dzień", cs: "Psí školka na den", de: "Hundetagesstätte pro Tag", fr: "Garderie canine à la journée", it: "Asilo per cani al giorno", es: "Guardería canina por día" } },
    { code: "daycare_pass", en: "Daycare pass", sk: "Permanentka do škôlky", pl: "Karnet do świetlicy", cs: "Permanentka do školky", de: "Zehnerkarte Tagesstätte", fr: "Forfait garderie", it: "Abbonamento asilo", es: "Bono guardería",
      seo: { en: "Dog daycare pass", sk: "Permanentka do psej škôlky", pl: "Karnet do świetlicy dla psów", cs: "Permanentka do psí školky", de: "Zehnerkarte für die Hundetagesstätte", fr: "Forfait garderie pour chien", it: "Abbonamento asilo per cani", es: "Bono guardería canina" } },
    { code: "pickup", en: "Pick-up & drop-off", sk: "Dovoz a odvoz", pl: "Transport (dowóz i odbiór)", cs: "Dovoz a odvoz", de: "Hol- und Bringservice", fr: "Transport (navette)", it: "Taxi dog (navetta)", es: "Taxi mascotas (traslado)",
      seo: { en: "Pet hotel pickup and drop off", sk: "Dovoz a odvoz psa do hotela", pl: "Transport psa do hotelu", cs: "Dovoz a odvoz psa do hotelu", de: "Hol- und Bringservice zur Pension", fr: "Transport et navette pour pension", it: "Taxi dog e trasporto in pensione", es: "Taxi para mascotas y traslado" } },
    { code: "extra_walk", en: "Extra walk / individual care", sk: "Venčenie navyše / individuálna starostlivosť", pl: "Dodatkowy spacer / opieka indywidualna", cs: "Venčení navíc", de: "Zusätzlicher Spaziergang", fr: "Promenade supplémentaire", it: "Passeggiata extra", es: "Paseo extra",
      seo: { en: "Extra walk at a dog hotel", sk: "Venčenie navyše v hoteli pre psov", pl: "Dodatkowy spacer z psem", cs: "Venčení navíc v psím hotelu", de: "Zusätzlicher Spaziergang im Hotel", fr: "Promenade supplémentaire en pension", it: "Passeggiata extra in pensione", es: "Paseo extra en residencia" } },
  ],
  DOG_TRAINING: [
    { code: "puppy_course", en: "Puppy course", sk: "Šteňacia škôlka", pl: "Kurs dla szczeniąt", cs: "Štěněcí školka", de: "Welpenkurs", fr: "École du chiot", it: "Scuola per cuccioli", es: "Curso cachorros",
      seo: { en: "Puppy classes", sk: "Šteňacia škôlka", pl: "Kurs dla szczeniąt", cs: "Kurz pro štěňata (štěněcí školka)", de: "Welpenkurs in der Hundeschule", fr: "École du chiot (cours chiot)", it: "Corso per cuccioli (puppy class)", es: "Curso para cachorros" } },
    { code: "obedience_course", en: "Basic obedience course", sk: "Kurz základnej poslušnosti", pl: "Kurs podstawowego posłuszeństwa", cs: "Kurz základní poslušnosti", de: "Begleithundekurs", fr: "Éducation de base", it: "Educazione di base", es: "Obediencia básica",
      seo: { en: "Dog obedience training", sk: "Kurz poslušnosti pre psa", pl: "Szkolenie psa (kurs posłuszeństwa)", cs: "Kurz poslušnosti pro psa", de: "Begleithundekurs (Grundgehorsam)", fr: "Cours d'éducation canine", it: "Corso di educazione base cane", es: "Curso de obediencia básica" } },
    { code: "group_lesson", en: "Group lesson", sk: "Skupinová hodina", pl: "Zajęcia grupowe", cs: "Skupinová lekce", de: "Gruppenstunde", fr: "Cours collectif", it: "Lezione di gruppo", es: "Clase grupal",
      seo: { en: "Group dog training class", sk: "Skupinový výcvik psa", pl: "Zajęcia grupowe dla psów", cs: "Skupinový výcvik psa", de: "Gruppenstunde in der Hundeschule", fr: "Cours collectif pour chien", it: "Lezione di gruppo per cani", es: "Clase grupal para perros" } },
    { code: "private_lesson", en: "Private lesson", sk: "Individuálna hodina", pl: "Lekcja indywidualna", cs: "Individuální lekce", de: "Einzeltraining", fr: "Cours individuel", it: "Lezione individuale", es: "Clase individual",
      seo: { en: "One to one dog training", sk: "Individuálny výcvik psa", pl: "Lekcja indywidualna z psem", cs: "Individuální výcvik psa", de: "Einzeltraining für den Hund", fr: "Cours individuel pour chien", it: "Lezione individuale per cani", es: "Clase individual de adiestramiento" } },
    { code: "behavior_consult", en: "Behaviour consultation", sk: "Konzultácia problémového správania", pl: "Konsultacja behawioralna", cs: "Konzultace problémového chování", de: "Verhaltensberatung", fr: "Bilan comportemental", it: "Consulenza comportamentale", es: "Consulta etología",
      seo: { en: "Dog behaviourist consultation", sk: "Konzultácia správania psa", pl: "Konsultacja behawioralna", cs: "Konzultace chování psa", de: "Verhaltensberatung für den Hund", fr: "Bilan comportemental canin", it: "Consulenza comportamentale cane", es: "Consulta de etología canina" } },
    { code: "membership", en: "Club membership", sk: "Členský poplatok", pl: "Składka członkowska", cs: "Členský příspěvek", de: "Mitgliedsbeitrag", fr: "Adhésion au club", it: "Quota associativa", es: "Cuota de socio",
      seo: { en: "Dog club membership", sk: "Členstvo v kynologickom klube", pl: "Składka w klubie kynologicznym", cs: "Členství v kynologickém klubu", de: "Mitgliedsbeitrag im Hundeverein", fr: "Adhésion au club canin", it: "Quota centro cinofilo", es: "Cuota de socio del club canino" } },
  ],
  PET_SITTING: [
    { code: "walk_30", en: "Dog walk, 30 min", sk: "Venčenie 30 min", pl: "Spacer z psem, 30 min", cs: "Venčení 30 min", de: "Gassigehen 30 Min.", fr: "Promenade 30 min", it: "Passeggiata 30 min", es: "Paseo 30 min",
      seo: { en: "30 minute dog walk", sk: "Venčenie psa na 30 minút", pl: "Wyprowadzanie psa na 30 minut", cs: "Venčení psa na 30 minut", de: "Gassigehen mit dem Hund (30 Min.)", fr: "Promenade de chien (30 min)", it: "Passeggiata cane (30 minuti)", es: "Paseo de perro (30 minutos)" } },
    { code: "walk_60", en: "Dog walk, 60 min", sk: "Venčenie 60 min", pl: "Spacer z psem, 60 min", cs: "Venčení 60 min", de: "Gassigehen 60 Min.", fr: "Promenade 1 heure", it: "Passeggiata 1 ora", es: "Paseo 1 hora",
      seo: { en: "1 hour dog walk", sk: "Venčenie psa na hodinu", pl: "Spacer z psem na godzinę", cs: "Venčení psa na hodinu", de: "Gassigehen mit dem Hund (1 Std.)", fr: "Promenade de chien (1 heure)", it: "Passeggiata cane (1 ora)", es: "Paseo de perro (1 hora)" } },
    { code: "cat_visit", en: "Cat visit", sk: "Návšteva mačky", pl: "Wizyta u kota", cs: "Návštěva kočky", de: "Katzenbesuch", fr: "Visite chat à domicile", it: "Visita gatto a domicilio", es: "Visita a gatos",
      seo: { en: "Cat sitting visit", sk: "Návšteva mačky doma", pl: "Wizyta u kota", cs: "Návštěva kočky doma", de: "Katzenbetreuung zu Hause", fr: "Visite pour chat à domicile", it: "Visita a domicilio per gatti", es: "Visita a domicilio para gatos" } },
    { code: "house_sitting_night", en: "Overnight at your home", sk: "Stráženie u vás doma, noc", pl: "Opieka w domu właściciela, noc", cs: "Hlídání u vás doma, noc", de: "Betreuung beim Halter, Nacht", fr: "Garde chez vous, nuit", it: "Custodia a casa tua, notte", es: "Cuidado en tu casa, noche",
      seo: { en: "Overnight dog sitting", sk: "Stráženie psa u vás doma cez noc", pl: "Opieka nad psem w domu właściciela", cs: "Hlídání psa u vás doma přes noc", de: "Hundebetreuung beim Halter (Nacht)", fr: "Garde de chien à domicile (nuit)", it: "Dog sitting a domicilio (notte)", es: "Cuidado a domicilio (noche)" } },
    { code: "boarding_night", en: "Overnight at sitter's home", sk: "Stráženie u opatrovateľa, noc", pl: "Opieka u petsittera, noc", cs: "Hlídání u hlídače, noc", de: "Betreuung beim Sitter, Nacht", fr: "Garde chez le sitter, nuit", it: "Pensione casalinga, notte", es: "Alojamiento con cuidador",
      seo: { en: "Overnight dog boarding", sk: "Stráženie psa u opatrovateľa cez noc", pl: "Opieka u petsittera za noc", cs: "Hlídání psa u hlídače přes noc", de: "Hundebetreuung beim Sitter (Nacht)", fr: "Hébergement chez le pet sitter", it: "Pensione casalinga per cani (notte)", es: "Alojamiento con cuidador (noche)" } },
    { code: "daycare_day", en: "Day care", sk: "Denné stráženie", pl: "Opieka dzienna", cs: "Denní hlídání", de: "Tagesbetreuung", fr: "Garde en journée", it: "Dog sitting diurno", es: "Cuidado diurno",
      seo: { en: "Dog sitting per day", sk: "Denné stráženie psa", pl: "Opieka dzienna nad psem", cs: "Denní hlídání psa", de: "Tagesbetreuung für den Hund", fr: "Garde de chien en journée", it: "Dog sitting diurno per cani", es: "Cuidado diurno para perros" } },
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
  "GROOMING:full_groom": { en: "Bath, haircut and nails", sk: "Kúpanie, strih a pazúriky", pl: "Kąpiel, strzyżenie i pazury", cs: "Koupání, střih a drápky", de: "Baden, Schnitt und Krallen", fr: "Bain, coupe et griffes", it: "Bagno, taglio e unghie", es: "Baño, corte y uñas" },
  "GROOMING:hand_stripping": { en: "Whole procedure", sk: "Celá procedúra", pl: "Cały zabieg", cs: "Celý zákrok", de: "Gesamte Behandlung", fr: "Toute la prestation", it: "Intero trattamento", es: "Procedimiento completo" },
  "VET_CLINIC:exam": { en: "Basic exam, no tests", sk: "Základné vyšetrenie bez testov", pl: "Podstawowe badanie bez testów", cs: "Základní vyšetření bez testů", de: "Grunduntersuchung ohne Tests", fr: "Examen de base, sans analyses", it: "Visita di base, senza esami", es: "Consulta básica, sin pruebas" },
  "VET_CLINIC:vaccination_dog": { en: "Combined vaccine + rabies", sk: "Kombinovaná vakcína + besnota", pl: "Szczepionka skojarzona + wścieklizna", cs: "Kombinovaná vakcína + vzteklina", de: "Kombi-Impfung + Tollwut", fr: "Vaccin combiné + rage", it: "Vaccino combinato + antirabbica", es: "Vacuna combinada + rabia" },
  "VET_CLINIC:microchip": { en: "Chip, implanting and registration", sk: "Čip, aplikácia a registrácia", pl: "Czip, wszczepienie i rejestracja", cs: "Čip, aplikace a registrace", de: "Chip, Setzen und Registrierung", fr: "Puce, pose et enregistrement", it: "Chip, applicazione e registrazione", es: "Chip, implantación y registro" },
  "VET_CLINIC:neuter_cat": { en: "Surgery + anaesthesia", sk: "Operácia + anestézia", pl: "Zabieg + znieczulenie", cs: "Operace + anestezie", de: "Operation + Narkose", fr: "Opération + anesthésie", it: "Intervento + anestesia", es: "Intervención + anestesia" },
  "VET_CLINIC:spay_cat": { en: "Surgery + anaesthesia", sk: "Operácia + anestézia", pl: "Zabieg + znieczulenie", cs: "Operace + anestezie", de: "Operation + Narkose", fr: "Opération + anesthésie", it: "Intervento + anestesia", es: "Intervención + anestesia" },
  "VET_CLINIC:spay_dog": { en: "Surgery + anaesthesia", sk: "Operácia + anestézia", pl: "Zabieg + znieczulenie", cs: "Operace + anestezie", de: "Operation + Narkose", fr: "Opération + anesthésie", it: "Intervento + anestesia", es: "Intervención + anestesia" },
  "PET_HOTEL:pickup": { en: "One way", sk: "Jedným smerom", pl: "W jedną stronę", cs: "Jedním směrem", de: "Eine Strecke", fr: "Un trajet", it: "Solo andata", es: "Solo ida" },
};

export function serviceIncludes(category: BusinessCategory, code: string, locale: Locale): string | null {
  const text = INCLUDES[serviceSlug(category, code)];
  return text ? (text[locale] ?? text.en) : null;
}
