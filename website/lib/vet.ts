// Vet clinic specialty codes (tasks/done/mac-collect-hours-and-vet-services.md,
// docs/card-spec.md section 8) with their labels.
import type { Locale } from "./locales";

export const VET_SPECIALTIES = [
  "surgery",
  "orthopedics",
  "dentistry",
  "dermatology",
  "cardiology",
  "ophthalmology",
  "oncology",
  "neurology",
  "internal-medicine",
  "reproduction",
  "rehabilitation",
  "exotics",
  "ultrasound",
  "x-ray",
  "ct",
  "mri",
  "endoscopy",
  "laboratory",
  "hospitalization",
] as const;

export type VetSpecialty = (typeof VET_SPECIALTIES)[number];

const LABELS: Record<VetSpecialty, Record<Locale, string>> = {
  surgery: { en: "Surgery", sk: "Chirurgia", pl: "Chirurgia", cs: "Chirurgie", de: "Chirurgie" },
  orthopedics: { en: "Orthopaedics", sk: "Ortopédia", pl: "Ortopedia", cs: "Ortopedie", de: "Orthopädie" },
  dentistry: { en: "Dentistry", sk: "Stomatológia", pl: "Stomatologia", cs: "Stomatologie", de: "Zahnmedizin" },
  dermatology: { en: "Dermatology", sk: "Dermatológia", pl: "Dermatologia", cs: "Dermatologie", de: "Dermatologie" },
  cardiology: { en: "Cardiology", sk: "Kardiológia", pl: "Kardiologia", cs: "Kardiologie", de: "Kardiologie" },
  ophthalmology: { en: "Ophthalmology", sk: "Oftalmológia", pl: "Okulistyka", cs: "Oftalmologie", de: "Augenheilkunde" },
  oncology: { en: "Oncology", sk: "Onkológia", pl: "Onkologia", cs: "Onkologie", de: "Onkologie" },
  neurology: { en: "Neurology", sk: "Neurológia", pl: "Neurologia", cs: "Neurologie", de: "Neurologie" },
  "internal-medicine": { en: "Internal medicine", sk: "Interná medicína", pl: "Choroby wewnętrzne", cs: "Interní medicína", de: "Innere Medizin" },
  reproduction: { en: "Reproduction", sk: "Reprodukcia", pl: "Rozród", cs: "Reprodukce", de: "Fortpflanzung" },
  rehabilitation: { en: "Rehabilitation", sk: "Rehabilitácia", pl: "Rehabilitacja", cs: "Rehabilitace", de: "Rehabilitation" },
  exotics: { en: "Exotic animals", sk: "Exotické zvieratá", pl: "Zwierzęta egzotyczne", cs: "Exotická zvířata", de: "Exotische Tiere" },
  ultrasound: { en: "Ultrasound", sk: "Sonografia", pl: "USG", cs: "Ultrazvuk", de: "Ultraschall" },
  "x-ray": { en: "X-ray", sk: "RTG", pl: "RTG", cs: "RTG", de: "Röntgen" },
  ct: { en: "CT", sk: "CT", pl: "Tomografia komputerowa", cs: "CT", de: "CT" },
  mri: { en: "MRI", sk: "Magnetická rezonancia", pl: "Rezonans magnetyczny", cs: "Magnetická rezonance", de: "MRT" },
  endoscopy: { en: "Endoscopy", sk: "Endoskopia", pl: "Endoskopia", cs: "Endoskopie", de: "Endoskopie" },
  laboratory: { en: "Laboratory", sk: "Laboratórium", pl: "Laboratorium", cs: "Laboratoř", de: "Labor" },
  hospitalization: { en: "Hospitalisation", sk: "Hospitalizácia", pl: "Hospitalizacja", cs: "Hospitalizace", de: "Stationäre Aufnahme" },
};

export function specialtyLabel(code: string, locale: string): string {
  const l = LABELS[code as VetSpecialty];
  return l ? (l[locale as Locale] ?? l.en) : code;
}
