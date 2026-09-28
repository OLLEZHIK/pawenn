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
  surgery: { en: "Surgery", sk: "Chirurgia", pl: "Chirurgia" },
  orthopedics: { en: "Orthopaedics", sk: "Ortopédia", pl: "Ortopedia" },
  dentistry: { en: "Dentistry", sk: "Stomatológia", pl: "Stomatologia" },
  dermatology: { en: "Dermatology", sk: "Dermatológia", pl: "Dermatologia" },
  cardiology: { en: "Cardiology", sk: "Kardiológia", pl: "Kardiologia" },
  ophthalmology: { en: "Ophthalmology", sk: "Oftalmológia", pl: "Okulistyka" },
  oncology: { en: "Oncology", sk: "Onkológia", pl: "Onkologia" },
  neurology: { en: "Neurology", sk: "Neurológia", pl: "Neurologia" },
  "internal-medicine": { en: "Internal medicine", sk: "Interná medicína", pl: "Choroby wewnętrzne" },
  reproduction: { en: "Reproduction", sk: "Reprodukcia", pl: "Rozród" },
  rehabilitation: { en: "Rehabilitation", sk: "Rehabilitácia", pl: "Rehabilitacja" },
  exotics: { en: "Exotic animals", sk: "Exotické zvieratá", pl: "Zwierzęta egzotyczne" },
  ultrasound: { en: "Ultrasound", sk: "Sonografia", pl: "USG" },
  "x-ray": { en: "X-ray", sk: "RTG", pl: "RTG" },
  ct: { en: "CT", sk: "CT", pl: "Tomografia komputerowa" },
  mri: { en: "MRI", sk: "Magnetická rezonancia", pl: "Rezonans magnetyczny" },
  endoscopy: { en: "Endoscopy", sk: "Endoskopia", pl: "Endoskopia" },
  laboratory: { en: "Laboratory", sk: "Laboratórium", pl: "Laboratorium" },
  hospitalization: { en: "Hospitalisation", sk: "Hospitalizácia", pl: "Hospitalizacja" },
};

export function specialtyLabel(code: string, locale: string): string {
  const l = LABELS[code as VetSpecialty];
  return l ? (l[locale as Locale] ?? l.en) : code;
}
