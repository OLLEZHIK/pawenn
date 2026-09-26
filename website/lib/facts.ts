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
  ],
  GROOMING: [
    { code: "cats", en: "Cats groomed too", sk: "Upravujú aj mačky" },
    { code: "all_sizes", en: "Dogs of all sizes", sk: "Psy všetkých veľkostí" },
    { code: "small_dogs_only", en: "Small dogs only", sk: "Len malé psy" },
    { code: "appointment_only", en: "By appointment only", sk: "Len na objednávku" },
    { code: "online_booking", en: "Online booking", sk: "Objednanie online" },
    { code: "card_payment", en: "Card payment", sk: "Platba kartou" },
  ],
  PET_HOTEL: [
    { code: "cats", en: "Takes cats", sk: "Prijímajú aj mačky" },
    { code: "small_dogs_only", en: "Small dogs only", sk: "Len malé psy" },
    { code: "vaccination_required", en: "Vaccination record required", sk: "Potrebné očkovanie" },
    { code: "trial_stay", en: "Trial day or visit before the stay", sk: "Skúšobný deň alebo návšteva vopred" },
    { code: "outdoor_run", en: "Outdoor run", sk: "Výbeh vonku" },
    { code: "supervision_24h", en: "Supervised 24 hours", sk: "Dozor 24 hodín" },
  ],
  DOG_TRAINING: [
    { code: "group_classes", en: "Group classes", sk: "Skupinové kurzy" },
    { code: "private_lessons", en: "Private lessons", sk: "Individuálny výcvik" },
    { code: "puppy_classes", en: "Puppy classes", sk: "Šteňacia škôlka" },
    { code: "training_ground", en: "Own training ground", sk: "Vlastné cvičisko" },
    { code: "home_training", en: "Training at your home", sk: "Výcvik u vás doma" },
    { code: "behaviour_problems", en: "Behaviour problems", sk: "Problémové správanie" },
  ],
  PET_SITTING: [
    { code: "dog_walking", en: "Dog walking", sk: "Venčenie psov" },
    { code: "cat_visits", en: "Cat visits", sk: "Návštevy mačiek" },
    { code: "home_sitting", en: "Stays at your home", sk: "Stráženie u vás doma" },
    { code: "boarding_at_sitter", en: "Boarding at the sitter's", sk: "Stráženie u opatrovateľa" },
    { code: "insured", en: "Insured", sk: "Poistenie zodpovednosti" },
    { code: "meet_greet", en: "Meet before booking", sk: "Zoznámenie pred objednaním" },
  ],
  PET_SHOP: [
    { code: "delivery", en: "Delivery", sk: "Doručenie" },
    { code: "vet_pharmacy", en: "Vet pharmacy", sk: "Veterinárna lekáreň" },
    { code: "grooming_corner", en: "Grooming on site", sk: "Úprava zvierat na mieste" },
    { code: "card_payment", en: "Card payment", sk: "Platba kartou" },
    { code: "parking", en: "Parking", sk: "Parkovanie" },
    { code: "click_collect", en: "Order online, pick up in store", sk: "Objednávka online s osobným odberom" },
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
