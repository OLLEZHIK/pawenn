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
    { code: "walk_in", en: "Walk-ins welcome", sk: "Aj bez objednania" },
    { code: "appointment_only", en: "By appointment only", sk: "Len na objednávku" },
    { code: "online_booking", en: "Online booking", sk: "Objednanie online" },
    { code: "card_payment", en: "Card payment", sk: "Platba kartou" },
    { code: "parking", en: "Parking", sk: "Parkovanie" },
    { code: "cats_waiting_room", en: "Separate waiting room for cats", sk: "Samostatná čakáreň pre mačky" },
    { code: "pet_passport", en: "Issues EU pet passports", sk: "Vystavuje európsky pas pre zvieratá" },
    { code: "pharmacy_on_site", en: "Pharmacy on site", sk: "Lekáreň na mieste" },
    { code: "cat_friendly", en: "Cat Friendly Clinic certified", sk: "Certifikát Cat Friendly Clinic" },
  ],
  GROOMING: [
    { code: "cats", en: "Cats groomed too", sk: "Upravujú aj mačky" },
    { code: "all_sizes", en: "Dogs of all sizes", sk: "Psy všetkých veľkostí" },
    { code: "small_dogs_only", en: "Small dogs only", sk: "Len malé psy" },
    { code: "appointment_only", en: "By appointment only", sk: "Len na objednávku" },
    { code: "online_booking", en: "Online booking", sk: "Objednanie online" },
    { code: "card_payment", en: "Card payment", sk: "Platba kartou" },
    { code: "owner_can_stay", en: "You can stay with your pet", sk: "Môžete zostať pri zvieratku" },
    { code: "natural_cosmetics", en: "Natural cosmetics", sk: "Prírodná kozmetika" },
    { code: "pickup_service", en: "Pick-up and drop-off", sk: "Dovoz a odvoz zvieratka" },
  ],
  PET_HOTEL: [
    { code: "cats", en: "Takes cats", sk: "Prijímajú aj mačky" },
    { code: "small_dogs_only", en: "Small dogs only", sk: "Len malé psy" },
    { code: "vaccination_required", en: "Vaccination record required", sk: "Potrebné očkovanie" },
    { code: "trial_stay", en: "Trial day or visit before the stay", sk: "Skúšobný deň alebo návšteva vopred" },
    { code: "outdoor_run", en: "Outdoor run", sk: "Výbeh vonku" },
    { code: "supervision_24h", en: "Supervised 24 hours", sk: "Dozor 24 hodín" },
    { code: "cage_free", en: "No cages or kennels", sk: "Bez klietok a kotercov" },
    { code: "medication", en: "Gives medication", sk: "Podajú lieky" },
    { code: "photo_updates", en: "Photo or video updates", sk: "Posielajú fotky alebo videá" },
  ],
  DOG_TRAINING: [
    { code: "group_classes", en: "Group classes", sk: "Skupinové kurzy" },
    { code: "private_lessons", en: "Private lessons", sk: "Individuálny výcvik" },
    { code: "puppy_classes", en: "Puppy classes", sk: "Šteňacia škôlka" },
    { code: "training_ground", en: "Own training ground", sk: "Vlastné cvičisko" },
    { code: "home_training", en: "Training at your home", sk: "Výcvik u vás doma" },
    { code: "behaviour_problems", en: "Behaviour problems", sk: "Problémové správanie" },
    { code: "certified_trainer", en: "Certified trainer", sk: "Certifikovaný tréner" },
    { code: "online_lessons", en: "Online lessons", sk: "Online konzultácie" },
    { code: "dog_sports", en: "Dog sports (agility, obedience)", sk: "Psie športy (agility, obedience)" },
  ],
  PET_SITTING: [
    { code: "dog_walking", en: "Dog walking", sk: "Venčenie psov" },
    { code: "cat_visits", en: "Cat visits", sk: "Návštevy mačiek" },
    { code: "home_sitting", en: "Stays at your home", sk: "Stráženie u vás doma" },
    { code: "boarding_at_sitter", en: "Boarding at the sitter's", sk: "Stráženie u opatrovateľa" },
    { code: "insured", en: "Insured", sk: "Poistenie zodpovednosti" },
    { code: "meet_greet", en: "Meet before booking", sk: "Zoznámenie pred objednaním" },
    { code: "medication", en: "Gives medication", sk: "Podajú lieky" },
    { code: "photo_updates", en: "Photo or video updates", sk: "Posielajú fotky alebo videá" },
    { code: "first_aid", en: "Pet first-aid trained", sk: "Kurz prvej pomoci pre zvieratá" },
  ],
  PET_SHOP: [
    { code: "delivery", en: "Delivery", sk: "Doručenie" },
    { code: "vet_pharmacy", en: "Vet pharmacy", sk: "Veterinárna lekáreň" },
    { code: "grooming_corner", en: "Grooming on site", sk: "Úprava zvierat na mieste" },
    { code: "card_payment", en: "Card payment", sk: "Platba kartou" },
    { code: "parking", en: "Parking", sk: "Parkovanie" },
    { code: "click_collect", en: "Order online, pick up in store", sk: "Objednávka online s osobným odberom" },
    { code: "raw_food", en: "Raw food (BARF)", sk: "Surové krmivo (BARF)" },
    { code: "aquarium_fish", en: "Aquarium fish", sk: "Akvaristika" },
    { code: "exotic_supplies", en: "Supplies for exotic pets", sk: "Potreby pre exotické zvieratá" },
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

const APPOINTMENT_Q = { en: "Do I need an appointment?", sk: "Treba sa objednať?" };
const FAQ: Record<string, (category: BusinessCategory) => QA | null> = {
  walk_in: () => ({
    en: { q: APPOINTMENT_Q.en, a: "No - by the place's own information you can also come without an appointment." },
    sk: { q: APPOINTMENT_Q.sk, a: "Nie - podľa informácií podniku môžete prísť aj bez objednania." },
  }),
  appointment_only: () => ({
    en: { q: APPOINTMENT_Q.en, a: "Yes, by appointment only - call or book before you come." },
    sk: { q: APPOINTMENT_Q.sk, a: "Áno, len na objednávku - pred návštevou zavolajte alebo sa objednajte." },
  }),
  online_booking: () => ({
    en: { q: "Can I book online?", a: "Yes, the place takes bookings online - the link is on its website." },
    sk: { q: "Dá sa objednať online?", a: "Áno, podnik prijíma objednávky online - odkaz nájdete na jeho webe." },
  }),
  card_payment: () => ({
    en: { q: "Can I pay by card?", a: "Yes, the place states that you can pay by card." },
    sk: { q: "Dá sa platiť kartou?", a: "Áno, podnik uvádza platbu kartou." },
  }),
  parking: () => ({
    en: { q: "Is there parking?", a: "Yes, the place mentions parking for customers." },
    sk: { q: "Dá sa tam zaparkovať?", a: "Áno, podnik uvádza parkovanie pre zákazníkov." },
  }),
  cats: (category) =>
    category === "PET_HOTEL"
      ? {
          en: { q: "Do they take cats?", a: "Yes, the place also boards cats." },
          sk: { q: "Prijímajú aj mačky?", a: "Áno, podnik ubytuje aj mačky." },
        }
      : {
          en: { q: "Do they groom cats?", a: "Yes, the place also grooms cats." },
          sk: { q: "Upravujú aj mačky?", a: "Áno, podnik upravuje aj mačky." },
        },
  small_dogs_only: () => ({
    en: { q: "Do they take large dogs?", a: "No, by the place's own information it takes small dogs only." },
    sk: { q: "Prijímajú aj veľké psy?", a: "Nie, podľa informácií podniku len malé psy." },
  }),
  all_sizes: () => ({
    en: { q: "Do they take large dogs?", a: "Yes, dogs of all sizes." },
    sk: { q: "Prijímajú aj veľké psy?", a: "Áno, psy všetkých veľkostí." },
  }),
  vaccination_required: () => ({
    en: { q: "What does my pet need for the stay?", a: "A valid vaccination record - check the details with the place." },
    sk: { q: "Čo potrebuje zviera na pobyt?", a: "Platné očkovanie - podrobnosti si overte v podniku." },
  }),
  trial_stay: () => ({
    en: { q: "Can we try it before a longer stay?", a: "Yes, the place offers a trial day or a visit before the stay." },
    sk: { q: "Dá sa to vyskúšať pred dlhším pobytom?", a: "Áno, podnik ponúka skúšobný deň alebo návštevu vopred." },
  }),
  insured: () => ({
    en: { q: "Is the sitter insured?", a: "Yes, the place states it has liability insurance." },
    sk: { q: "Má opatrovateľ poistenie?", a: "Áno, podnik uvádza poistenie zodpovednosti." },
  }),
  meet_greet: () => ({
    en: { q: "Can we meet before booking?", a: "Yes, a meeting before the first booking is offered." },
    sk: { q: "Dá sa zoznámiť pred objednaním?", a: "Áno, pred prvým objednaním ponúkajú zoznámenie." },
  }),
  pet_passport: () => ({
    en: { q: "Can I get a pet passport there?", a: "Yes, the clinic issues EU pet passports." },
    sk: { q: "Vystavia tu pas pre zviera?", a: "Áno, ambulancia vystavuje európsky pas pre zvieratá." },
  }),
  owner_can_stay: () => ({
    en: { q: "Can I stay with my pet?", a: "Yes, the salon lets owners stay during grooming." },
    sk: { q: "Môžem zostať pri zvieratku?", a: "Áno, salón umožňuje majiteľom zostať počas úpravy." },
  }),
  pickup_service: () => ({
    en: { q: "Can they pick up my pet?", a: "Yes, the place offers pick-up and drop-off." },
    sk: { q: "Prídu si po zvieratko?", a: "Áno, podnik ponúka dovoz a odvoz zvieratka." },
  }),
  cage_free: () => ({
    en: { q: "Are pets kept in cages?", a: "No, by the place's own information it has no cages or kennels." },
    sk: { q: "Sú zvieratá v klietkach?", a: "Nie, podľa informácií podniku bez klietok a kotercov." },
  }),
  medication: () => ({
    en: { q: "Can they give my pet medication?", a: "Yes, the place states it gives medication." },
    sk: { q: "Podajú zvieratku lieky?", a: "Áno, podnik uvádza, že podá lieky." },
  }),
  delivery: () => ({
    en: { q: "Do they deliver?", a: "Yes, the shop offers delivery." },
    sk: { q: "Doručujú?", a: "Áno, obchod ponúka doručenie." },
  }),
};

export function factFaq(category: BusinessCategory, codes: string[], locale: Locale): { q: string; a: string }[] {
  const seen = new Set<string>();
  return codes
    .map((code) => FAQ[code]?.(category)?.[locale] ?? null)
    .filter((qa): qa is { q: string; a: string } => qa !== null && !seen.has(qa.q) && Boolean(seen.add(qa.q)));
}
