import type { BusinessCategory } from "@prisma/client";
import type { Locale } from "./locales";

// "Good to know": practical facts about a place, per category (owner,
// 2026-09-26; docs/research/place-page-needs.md, proposal 1). Collected
// from the place's own site with the card (docs/card-spec.md, section 9,
// `facts`). Only what the place states - a missing code means "not
// stated", never "no". Codes are the contract with data agents; labels
// and FAQ wording are ours, per locale. Pure module (no database).

export type FactDef = { code: string } & Record<Locale, string>;

export const FACTS: Record<BusinessCategory, FactDef[]> = {
  VET_CLINIC: [
    { code: "walk_in", en: "Walk-ins welcome", sk: "Aj bez objednania", pl: "Także bez umówienia", cs: "I bez objednání" },
    { code: "appointment_only", en: "By appointment only", sk: "Len na objednávku", pl: "Tylko po umówieniu wizyty", cs: "Pouze po objednání" },
    { code: "online_booking", en: "Online booking", sk: "Objednanie online", pl: "Rezerwacja online", cs: "Online objednání" },
    { code: "card_payment", en: "Card payment", sk: "Platba kartou", pl: "Płatność kartą", cs: "Platba kartou" },
    { code: "parking", en: "Parking", sk: "Parkovanie", pl: "Parking", cs: "Parkování" },
    { code: "cats_waiting_room", en: "Separate waiting room for cats", sk: "Samostatná čakáreň pre mačky", pl: "Osobna poczekalnia dla kotów", cs: "Samostatná čekárna pro kočky" },
    { code: "pet_passport", en: "Issues EU pet passports", sk: "Vystavuje európsky pas pre zvieratá", pl: "Wystawia paszport dla zwierzęcia (UE)", cs: "Vystavuje evropský pas pro zvířata" },
    { code: "pharmacy_on_site", en: "Pharmacy on site", sk: "Lekáreň na mieste", pl: "Apteka na miejscu", cs: "Lékárna na místě" },
    { code: "cat_friendly", en: "Cat Friendly Clinic certified", sk: "Certifikát Cat Friendly Clinic", pl: "Certyfikat Cat Friendly Clinic", cs: "Certifikát Cat Friendly Clinic" },
  ],
  GROOMING: [
    { code: "cats", en: "Cats groomed too", sk: "Upravujú aj mačky", pl: "Strzyże także koty", cs: "Upravují i kočky" },
    { code: "all_sizes", en: "Dogs of all sizes", sk: "Psy všetkých veľkostí", pl: "Psy wszystkich wielkości", cs: "Psi všech velikostí" },
    { code: "small_dogs_only", en: "Small dogs only", sk: "Len malé psy", pl: "Tylko małe psy", cs: "Pouze malí psi" },
    { code: "appointment_only", en: "By appointment only", sk: "Len na objednávku", pl: "Tylko po umówieniu wizyty", cs: "Pouze po objednání" },
    { code: "online_booking", en: "Online booking", sk: "Objednanie online", pl: "Rezerwacja online", cs: "Online objednání" },
    { code: "card_payment", en: "Card payment", sk: "Platba kartou", pl: "Płatność kartą", cs: "Platba kartou" },
    { code: "owner_can_stay", en: "You can stay with your pet", sk: "Môžete zostať pri zvieratku", pl: "Możesz zostać przy zwierzaku", cs: "Můžete zůstat u zvířete" },
    { code: "natural_cosmetics", en: "Natural cosmetics", sk: "Prírodná kozmetika", pl: "Naturalne kosmetyki", cs: "Přírodní kosmetika" },
    { code: "pickup_service", en: "Pick-up and drop-off", sk: "Dovoz a odvoz zvieratka", pl: "Odbiór i odwóz zwierzaka", cs: "Odvoz a dovoz zvířete" },
  ],
  PET_HOTEL: [
    { code: "cats", en: "Takes cats", sk: "Prijímajú aj mačky", pl: "Przyjmuje także koty", cs: "Přijímají i kočky" },
    { code: "small_dogs_only", en: "Small dogs only", sk: "Len malé psy", pl: "Tylko małe psy", cs: "Pouze malí psi" },
    { code: "vaccination_required", en: "Vaccination record required", sk: "Potrebné očkovanie", pl: "Wymagane szczepienia", cs: "Nutné očkování" },
    { code: "trial_stay", en: "Trial day or visit before the stay", sk: "Skúšobný deň alebo návšteva vopred", pl: "Dzień próbny lub wizyta przed pobytem", cs: "Zkušební den nebo návštěva předem" },
    { code: "outdoor_run", en: "Outdoor run", sk: "Výbeh vonku", pl: "Wybieg na zewnątrz", cs: "Venkovní výběh" },
    { code: "supervision_24h", en: "Supervised 24 hours", sk: "Dozor 24 hodín", pl: "Opieka 24 godziny", cs: "Dohled 24 hodin" },
    { code: "cage_free", en: "No cages or kennels", sk: "Bez klietok a kotercov", pl: "Bez klatek i kojców", cs: "Bez klecí a boxů" },
    { code: "medication", en: "Gives medication", sk: "Podajú lieky", pl: "Podaje leki", cs: "Podávají léky" },
    { code: "photo_updates", en: "Photo or video updates", sk: "Posielajú fotky alebo videá", pl: "Wysyła zdjęcia lub filmy", cs: "Posílají fotky nebo videa" },
  ],
  DOG_TRAINING: [
    { code: "group_classes", en: "Group classes", sk: "Skupinové kurzy", pl: "Zajęcia grupowe", cs: "Skupinové kurzy" },
    { code: "private_lessons", en: "Private lessons", sk: "Individuálny výcvik", pl: "Lekcje indywidualne", cs: "Individuální výcvik" },
    { code: "puppy_classes", en: "Puppy classes", sk: "Šteňacia škôlka", pl: "Psie przedszkole", cs: "Štěněcí školka" },
    { code: "training_ground", en: "Own training ground", sk: "Vlastné cvičisko", pl: "Własny plac treningowy", cs: "Vlastní cvičiště" },
    { code: "home_training", en: "Training at your home", sk: "Výcvik u vás doma", pl: "Szkolenie u Ciebie w domu", cs: "Výcvik u vás doma" },
    { code: "behaviour_problems", en: "Behaviour problems", sk: "Problémové správanie", pl: "Problemy z zachowaniem", cs: "Problémové chování" },
    { code: "certified_trainer", en: "Certified trainer", sk: "Certifikovaný tréner", pl: "Certyfikowany trener", cs: "Certifikovaný trenér" },
    { code: "online_lessons", en: "Online lessons", sk: "Online konzultácie", pl: "Konsultacje online", cs: "Online konzultace" },
    { code: "dog_sports", en: "Dog sports (agility, obedience)", sk: "Psie športy (agility, obedience)", pl: "Sporty kynologiczne (agility, obedience)", cs: "Psí sporty (agility, obedience)" },
  ],
  PET_SITTING: [
    { code: "dog_walking", en: "Dog walking", sk: "Venčenie psov", pl: "Wyprowadzanie psów", cs: "Venčení psů" },
    { code: "cat_visits", en: "Cat visits", sk: "Návštevy mačiek", pl: "Wizyty u kota", cs: "Návštěvy koček" },
    { code: "home_sitting", en: "Stays at your home", sk: "Stráženie u vás doma", pl: "Opieka u Ciebie w domu", cs: "Hlídání u vás doma" },
    { code: "boarding_at_sitter", en: "Boarding at the sitter's", sk: "Stráženie u opatrovateľa", pl: "Opieka w domu petsittera", cs: "Hlídání u hlídače" },
    { code: "insured", en: "Insured", sk: "Poistenie zodpovednosti", pl: "Ubezpieczenie OC", cs: "Pojištění odpovědnosti" },
    { code: "meet_greet", en: "Meet before booking", sk: "Zoznámenie pred objednaním", pl: "Spotkanie zapoznawcze przed rezerwacją", cs: "Seznámení před objednáním" },
    { code: "medication", en: "Gives medication", sk: "Podajú lieky", pl: "Podaje leki", cs: "Podávají léky" },
    { code: "photo_updates", en: "Photo or video updates", sk: "Posielajú fotky alebo videá", pl: "Wysyła zdjęcia lub filmy", cs: "Posílají fotky nebo videa" },
    { code: "first_aid", en: "Pet first-aid trained", sk: "Kurz prvej pomoci pre zvieratá", pl: "Kurs pierwszej pomocy dla zwierząt", cs: "Kurz první pomoci pro zvířata" },
  ],
  PET_SHOP: [
    { code: "delivery", en: "Delivery", sk: "Doručenie", pl: "Dostawa", cs: "Doručení" },
    { code: "vet_pharmacy", en: "Vet pharmacy", sk: "Veterinárna lekáreň", pl: "Apteka weterynaryjna", cs: "Veterinární lékárna" },
    { code: "grooming_corner", en: "Grooming on site", sk: "Úprava zvierat na mieste", pl: "Pielęgnacja zwierząt na miejscu", cs: "Úprava zvířat na místě" },
    { code: "card_payment", en: "Card payment", sk: "Platba kartou", pl: "Płatność kartą", cs: "Platba kartou" },
    { code: "parking", en: "Parking", sk: "Parkovanie", pl: "Parking", cs: "Parkování" },
    { code: "click_collect", en: "Order online, pick up in store", sk: "Objednávka online s osobným odberom", pl: "Zamówienie online z odbiorem w sklepie", cs: "Objednávka online s osobním odběrem" },
    { code: "raw_food", en: "Raw food (BARF)", sk: "Surové krmivo (BARF)", pl: "Karma surowa (BARF)", cs: "Syrové krmivo (BARF)" },
    { code: "aquarium_fish", en: "Aquarium fish", sk: "Akvaristika", pl: "Akwarystyka", cs: "Akvaristika" },
    { code: "exotic_supplies", en: "Supplies for exotic pets", sk: "Potreby pre exotické zvieratá", pl: "Akcesoria dla zwierząt egzotycznych", cs: "Potřeby pro exotická zvířata" },
  ],
};

/** Codes that contradict each other: a place states one or the other. */
export const EXCLUSIVE_FACTS: [string, string][] = [
  ["walk_in", "appointment_only"],
  ["all_sizes", "small_dogs_only"],
];

export function factCodes(category: BusinessCategory): string[] {
  return FACTS[category].map((f) => f.code);
}

export function factLabel(category: BusinessCategory, code: string, locale: Locale): string | null {
  return FACTS[category].find((f) => f.code === code)?.[locale] ?? null;
}

// FAQ from facts (owner, 2026-09-26): questions people ask before calling,
// answered only by what the place states. Pages with a review-summary FAQ
// keep that one (a page has a single FAQPage).
type QA = Record<Locale, { q: string; a: string }>;

const APPOINTMENT_Q = { en: "Do I need an appointment?", sk: "Treba sa objednať?", pl: "Czy trzeba się umówić?", cs: "Je nutné se objednat?" };
const FAQ: Record<string, (category: BusinessCategory) => QA | null> = {
  walk_in: () => ({
    en: { q: APPOINTMENT_Q.en, a: "No - by the place's own information you can also come without an appointment." },
    sk: { q: APPOINTMENT_Q.sk, a: "Nie - podľa informácií podniku môžete prísť aj bez objednania." },
    pl: { q: APPOINTMENT_Q.pl, a: "Nie – według informacji miejsca można przyjść także bez umówienia." },
    cs: { q: APPOINTMENT_Q.cs, a: "Ne – podle informací podniku můžete přijít i bez objednání." },
  }),
  appointment_only: () => ({
    en: { q: APPOINTMENT_Q.en, a: "Yes, by appointment only - call or book before you come." },
    sk: { q: APPOINTMENT_Q.sk, a: "Áno, len na objednávku - pred návštevou zavolajte alebo sa objednajte." },
    pl: { q: APPOINTMENT_Q.pl, a: "Tak, tylko po umówieniu – przed wizytą zadzwoń lub zarezerwuj termin." },
    cs: { q: APPOINTMENT_Q.cs, a: "Ano, pouze po objednání – před návštěvou zavolejte nebo se objednejte." },
  }),
  online_booking: () => ({
    en: { q: "Can I book online?", a: "Yes, the place takes bookings online - the link is on its website." },
    sk: { q: "Dá sa objednať online?", a: "Áno, podnik prijíma objednávky online - odkaz nájdete na jeho webe." },
    pl: { q: "Czy można zarezerwować online?", a: "Tak, miejsce przyjmuje rezerwacje online – link znajdziesz na jego stronie." },
    cs: { q: "Dá se objednat online?", a: "Ano, podnik přijímá objednávky online – odkaz najdete na jeho webu." },
  }),
  card_payment: () => ({
    en: { q: "Can I pay by card?", a: "Yes, the place states that you can pay by card." },
    sk: { q: "Dá sa platiť kartou?", a: "Áno, podnik uvádza platbu kartou." },
    pl: { q: "Czy można płacić kartą?", a: "Tak, miejsce podaje, że można płacić kartą." },
    cs: { q: "Dá se platit kartou?", a: "Ano, podnik uvádí platbu kartou." },
  }),
  parking: () => ({
    en: { q: "Is there parking?", a: "Yes, the place mentions parking for customers." },
    sk: { q: "Dá sa tam zaparkovať?", a: "Áno, podnik uvádza parkovanie pre zákazníkov." },
    pl: { q: "Czy jest parking?", a: "Tak, miejsce podaje parking dla klientów." },
    cs: { q: "Dá se tam zaparkovat?", a: "Ano, podnik uvádí parkování pro zákazníky." },
  }),
  cats: (category) =>
    category === "PET_HOTEL"
      ? {
          en: { q: "Do they take cats?", a: "Yes, the place also boards cats." },
          sk: { q: "Prijímajú aj mačky?", a: "Áno, podnik ubytuje aj mačky." },
          pl: { q: "Czy przyjmują koty?", a: "Tak, miejsce przyjmuje także koty." },
          cs: { q: "Přijímají i kočky?", a: "Ano, podnik ubytuje i kočky." },
        }
      : {
          en: { q: "Do they groom cats?", a: "Yes, the place also grooms cats." },
          sk: { q: "Upravujú aj mačky?", a: "Áno, podnik upravuje aj mačky." },
          pl: { q: "Czy strzygą koty?", a: "Tak, miejsce strzyże także koty." },
          cs: { q: "Upravují i kočky?", a: "Ano, podnik upravuje i kočky." },
        },
  small_dogs_only: () => ({
    en: { q: "Do they take large dogs?", a: "No, by the place's own information it takes small dogs only." },
    sk: { q: "Prijímajú aj veľké psy?", a: "Nie, podľa informácií podniku len malé psy." },
    pl: { q: "Czy przyjmują duże psy?", a: "Nie, według informacji miejsca tylko małe psy." },
    cs: { q: "Přijímají i velké psy?", a: "Ne, podle informací podniku pouze malí psi." },
  }),
  all_sizes: () => ({
    en: { q: "Do they take large dogs?", a: "Yes, dogs of all sizes." },
    sk: { q: "Prijímajú aj veľké psy?", a: "Áno, psy všetkých veľkostí." },
    pl: { q: "Czy przyjmują duże psy?", a: "Tak, psy wszystkich wielkości." },
    cs: { q: "Přijímají i velké psy?", a: "Ano, psi všech velikostí." },
  }),
  vaccination_required: () => ({
    en: { q: "What does my pet need for the stay?", a: "A valid vaccination record - check the details with the place." },
    sk: { q: "Čo potrebuje zviera na pobyt?", a: "Platné očkovanie - podrobnosti si overte v podniku." },
    pl: { q: "Czego zwierzę potrzebuje na pobyt?", a: "Ważnych szczepień – szczegóły sprawdź w miejscu." },
    cs: { q: "Co zvíře potřebuje na pobyt?", a: "Platné očkování – podrobnosti si ověřte v podniku." },
  }),
  trial_stay: () => ({
    en: { q: "Can we try it before a longer stay?", a: "Yes, the place offers a trial day or a visit before the stay." },
    sk: { q: "Dá sa to vyskúšať pred dlhším pobytom?", a: "Áno, podnik ponúka skúšobný deň alebo návštevu vopred." },
    pl: { q: "Czy można spróbować przed dłuższym pobytem?", a: "Tak, miejsce oferuje dzień próbny lub wizytę przed pobytem." },
    cs: { q: "Dá se to vyzkoušet před delším pobytem?", a: "Ano, podnik nabízí zkušební den nebo návštěvu předem." },
  }),
  insured: () => ({
    en: { q: "Is the sitter insured?", a: "Yes, the place states it has liability insurance." },
    sk: { q: "Má opatrovateľ poistenie?", a: "Áno, podnik uvádza poistenie zodpovednosti." },
    pl: { q: "Czy opiekun ma ubezpieczenie?", a: "Tak, miejsce podaje ubezpieczenie OC." },
    cs: { q: "Má hlídač pojištění?", a: "Ano, podnik uvádí pojištění odpovědnosti." },
  }),
  meet_greet: () => ({
    en: { q: "Can we meet before booking?", a: "Yes, a meeting before the first booking is offered." },
    sk: { q: "Dá sa zoznámiť pred objednaním?", a: "Áno, pred prvým objednaním ponúkajú zoznámenie." },
    pl: { q: "Czy można się poznać przed rezerwacją?", a: "Tak, przed pierwszą rezerwacją jest spotkanie zapoznawcze." },
    cs: { q: "Dá se seznámit před objednáním?", a: "Ano, před první objednávkou nabízejí seznámení." },
  }),
  pet_passport: () => ({
    en: { q: "Can I get a pet passport there?", a: "Yes, the clinic issues EU pet passports." },
    sk: { q: "Vystavia tu pas pre zviera?", a: "Áno, ambulancia vystavuje európsky pas pre zvieratá." },
    pl: { q: "Czy wyrobię tu paszport dla zwierzęcia?", a: "Tak, lecznica wystawia europejskie paszporty dla zwierząt." },
    cs: { q: "Vystaví tu pas pro zvíře?", a: "Ano, ordinace vystavuje evropský pas pro zvířata." },
  }),
  owner_can_stay: () => ({
    en: { q: "Can I stay with my pet?", a: "Yes, the salon lets owners stay during grooming." },
    sk: { q: "Môžem zostať pri zvieratku?", a: "Áno, salón umožňuje majiteľom zostať počas úpravy." },
    pl: { q: "Czy mogę zostać przy zwierzaku?", a: "Tak, salon pozwala opiekunom zostać podczas pielęgnacji." },
    cs: { q: "Mohu zůstat u zvířete?", a: "Ano, salon umožňuje majitelům zůstat během úpravy." },
  }),
  pickup_service: () => ({
    en: { q: "Can they pick up my pet?", a: "Yes, the place offers pick-up and drop-off." },
    sk: { q: "Prídu si po zvieratko?", a: "Áno, podnik ponúka dovoz a odvoz zvieratka." },
    pl: { q: "Czy mogą odebrać moje zwierzę?", a: "Tak, miejsce oferuje odbiór i odwóz zwierzaka." },
    cs: { q: "Přijedou si pro zvíře?", a: "Ano, podnik nabízí odvoz a dovoz zvířete." },
  }),
  cage_free: () => ({
    en: { q: "Are pets kept in cages?", a: "No, by the place's own information it has no cages or kennels." },
    sk: { q: "Sú zvieratá v klietkach?", a: "Nie, podľa informácií podniku bez klietok a kotercov." },
    pl: { q: "Czy zwierzęta są w klatkach?", a: "Nie, według informacji miejsca bez klatek i kojców." },
    cs: { q: "Jsou zvířata v klecích?", a: "Ne, podle informací podniku bez klecí a boxů." },
  }),
  medication: () => ({
    en: { q: "Can they give my pet medication?", a: "Yes, the place states it gives medication." },
    sk: { q: "Podajú zvieratku lieky?", a: "Áno, podnik uvádza, že podá lieky." },
    pl: { q: "Czy podadzą mojemu zwierzęciu leki?", a: "Tak, miejsce podaje, że podaje leki." },
    cs: { q: "Podají zvířeti léky?", a: "Ano, podnik uvádí, že podává léky." },
  }),
  delivery: () => ({
    en: { q: "Do they deliver?", a: "Yes, the shop offers delivery." },
    sk: { q: "Doručujú?", a: "Áno, obchod ponúka doručenie." },
    pl: { q: "Czy dostarczają?", a: "Tak, sklep oferuje dostawę." },
    cs: { q: "Doručují?", a: "Ano, obchod nabízí doručení." },
  }),
};

export function factFaq(category: BusinessCategory, codes: string[], locale: Locale): { q: string; a: string }[] {
  const seen = new Set<string>();
  return codes
    .map((code) => FAQ[code]?.(category)?.[locale] ?? null)
    .filter((qa): qa is { q: string; a: string } => qa !== null && !seen.has(qa.q) && Boolean(seen.add(qa.q)));
}
