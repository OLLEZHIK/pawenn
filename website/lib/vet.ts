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
  surgery: { en: "Surgery", sk: "Chirurgia", pl: "Chirurgia", cs: "Chirurgie", de: "Chirurgie", fr: "Chirurgie", it: "Chirurgia", es: "Cirugía" },
  orthopedics: { en: "Orthopaedics", sk: "Ortopédia", pl: "Ortopedia", cs: "Ortopedie", de: "Orthopädie", fr: "Orthopédie", it: "Ortopedia", es: "Traumatología" },
  dentistry: { en: "Dentistry", sk: "Stomatológia", pl: "Stomatologia", cs: "Stomatologie", de: "Zahnmedizin", fr: "Dentisterie", it: "Odontoiatria", es: "Odontología" },
  dermatology: { en: "Dermatology", sk: "Dermatológia", pl: "Dermatologia", cs: "Dermatologie", de: "Dermatologie", fr: "Dermatologie", it: "Dermatologia", es: "Dermatología" },
  cardiology: { en: "Cardiology", sk: "Kardiológia", pl: "Kardiologia", cs: "Kardiologie", de: "Kardiologie", fr: "Cardiologie", it: "Cardiologia", es: "Cardiología" },
  ophthalmology: { en: "Ophthalmology", sk: "Oftalmológia", pl: "Okulistyka", cs: "Oftalmologie", de: "Augenheilkunde", fr: "Ophtalmologie", it: "Oftalmologia", es: "Oftalmología" },
  oncology: { en: "Oncology", sk: "Onkológia", pl: "Onkologia", cs: "Onkologie", de: "Onkologie", fr: "Oncologie", it: "Oncologia", es: "Oncología" },
  neurology: { en: "Neurology", sk: "Neurológia", pl: "Neurologia", cs: "Neurologie", de: "Neurologie", fr: "Neurologie", it: "Neurologia", es: "Neurología" },
  "internal-medicine": { en: "Internal medicine", sk: "Interná medicína", pl: "Choroby wewnętrzne", cs: "Interní medicína", de: "Innere Medizin", fr: "Médecine interne", it: "Medicina interna", es: "Medicina interna" },
  reproduction: { en: "Reproduction", sk: "Reprodukcia", pl: "Rozród", cs: "Reprodukce", de: "Fortpflanzung", fr: "Reproduction", it: "Riproduzione", es: "Reproducción" },
  rehabilitation: { en: "Rehabilitation", sk: "Rehabilitácia", pl: "Rehabilitacja", cs: "Rehabilitace", de: "Rehabilitation", fr: "Rééducation", it: "Riabilitazione", es: "Fisioterapia y rehabilitación" },
  exotics: { en: "Exotic animals", sk: "Exotické zvieratá", pl: "Zwierzęta egzotyczne", cs: "Exotická zvířata", de: "Exotische Tiere", fr: "NAC (animaux exotiques)", it: "Animali esotici", es: "Animales exóticos" },
  ultrasound: { en: "Ultrasound", sk: "Sonografia", pl: "USG", cs: "Ultrazvuk", de: "Ultraschall", fr: "Échographie", it: "Ecografia", es: "Ecografía" },
  "x-ray": { en: "X-ray", sk: "RTG", pl: "RTG", cs: "RTG", de: "Röntgen", fr: "Radiographie", it: "Radiografia", es: "Radiografía" },
  ct: { en: "CT", sk: "CT", pl: "Tomografia komputerowa", cs: "CT", de: "CT", fr: "Scanner (TDM)", it: "TAC", es: "TAC" },
  mri: { en: "MRI", sk: "Magnetická rezonancia", pl: "Rezonans magnetyczny", cs: "Magnetická rezonance", de: "MRT", fr: "IRM", it: "Risonanza magnetica", es: "Resonancia magnética" },
  endoscopy: { en: "Endoscopy", sk: "Endoskopia", pl: "Endoskopia", cs: "Endoskopie", de: "Endoskopie", fr: "Endoscopie", it: "Endoscopia", es: "Endoscopia" },
  laboratory: { en: "Laboratory", sk: "Laboratórium", pl: "Laboratorium", cs: "Laboratoř", de: "Labor", fr: "Laboratoire", it: "Laboratorio", es: "Laboratorio" },
  hospitalization: { en: "Hospitalisation", sk: "Hospitalizácia", pl: "Hospitalizacja", cs: "Hospitalizace", de: "Stationäre Aufnahme", fr: "Hospitalisation", it: "Ricovero", es: "Hospitalización" },
};

export function specialtyLabel(code: string, locale: string): string {
  const l = LABELS[code as VetSpecialty];
  return l ? (l[locale as Locale] ?? l.en) : code;
}
