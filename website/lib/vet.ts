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
  surgery: { en: "Surgery", sk: "Chirurgia", pl: "Chirurgia", cs: "Chirurgie", de: "Chirurgie", fr: "Chirurgie", it: "Chirurgia", es: "Cirugía", pt: "Cirurgia", no: "Kirurgi", nl: "Chirurgie", fi: "Kirurgia", hu: "Sebészet", ja: "外科" },
  orthopedics: { en: "Orthopaedics", sk: "Ortopédia", pl: "Ortopedia", cs: "Ortopedie", de: "Orthopädie", fr: "Orthopédie", it: "Ortopedia", es: "Traumatología", pt: "Ortopedia", no: "Ortopedi", nl: "Orthopedie", fi: "Ortopedia", hu: "Ortopédia", ja: "整形外科" },
  dentistry: { en: "Dentistry", sk: "Stomatológia", pl: "Stomatologia", cs: "Stomatologie", de: "Zahnmedizin", fr: "Dentisterie", it: "Odontoiatria", es: "Odontología", pt: "Medicina dentária", no: "Tannbehandling", nl: "Tandheelkunde", fi: "Hammashoito", hu: "Fogászat", ja: "歯科" },
  dermatology: { en: "Dermatology", sk: "Dermatológia", pl: "Dermatologia", cs: "Dermatologie", de: "Dermatologie", fr: "Dermatologie", it: "Dermatologia", es: "Dermatología", pt: "Dermatologia", no: "Dermatologi", nl: "Dermatologie", fi: "Dermatologia", hu: "Bőrgyógyászat", ja: "皮膚科" },
  cardiology: { en: "Cardiology", sk: "Kardiológia", pl: "Kardiologia", cs: "Kardiologie", de: "Kardiologie", fr: "Cardiologie", it: "Cardiologia", es: "Cardiología", pt: "Cardiologia", no: "Kardiologi", nl: "Cardiologie", fi: "Kardiologia", hu: "Kardiológia", ja: "循環器科" },
  ophthalmology: { en: "Ophthalmology", sk: "Oftalmológia", pl: "Okulistyka", cs: "Oftalmologie", de: "Augenheilkunde", fr: "Ophtalmologie", it: "Oftalmologia", es: "Oftalmología", pt: "Oftalmologia", no: "Oftalmologi", nl: "Oogheelkunde", fi: "Oftalmologia", hu: "Szemészet", ja: "眼科" },
  oncology: { en: "Oncology", sk: "Onkológia", pl: "Onkologia", cs: "Onkologie", de: "Onkologie", fr: "Oncologie", it: "Oncologia", es: "Oncología", pt: "Oncologia", no: "Onkologi", nl: "Oncologie", fi: "Onkologia", hu: "Onkológia", ja: "腫瘍科" },
  neurology: { en: "Neurology", sk: "Neurológia", pl: "Neurologia", cs: "Neurologie", de: "Neurologie", fr: "Neurologie", it: "Neurologia", es: "Neurología", pt: "Neurologia", no: "Nevrologi", nl: "Neurologie", fi: "Neurologia", hu: "Neurológia", ja: "神経科" },
  "internal-medicine": { en: "Internal medicine", sk: "Interná medicína", pl: "Choroby wewnętrzne", cs: "Interní medicína", de: "Innere Medizin", fr: "Médecine interne", it: "Medicina interna", es: "Medicina interna", pt: "Medicina interna", no: "Indremedisin", nl: "Interne geneeskunde", fi: "Sisätaudit", hu: "Belgyógyászat", ja: "内科" },
  reproduction: { en: "Reproduction", sk: "Reprodukcia", pl: "Rozród", cs: "Reprodukce", de: "Fortpflanzung", fr: "Reproduction", it: "Riproduzione", es: "Reproducción", pt: "Reprodução", no: "Reproduksjon", nl: "Voortplanting", fi: "Lisääntyminen", hu: "Szülészet és szaporodásbiológia", ja: "生殖器科・繁殖科" },
  rehabilitation: { en: "Rehabilitation", sk: "Rehabilitácia", pl: "Rehabilitacja", cs: "Rehabilitace", de: "Rehabilitation", fr: "Rééducation", it: "Riabilitazione", es: "Fisioterapia y rehabilitación", pt: "Fisioterapia e reabilitação", no: "Rehabilitering", nl: "Fysiotherapie en revalidatie", fi: "Fysioterapia ja kuntoutus", hu: "Fizioterápia és rehabilitáció", ja: "リハビリテーション科" },
  exotics: { en: "Exotic animals", sk: "Exotické zvieratá", pl: "Zwierzęta egzotyczne", cs: "Exotická zvířata", de: "Exotische Tiere", fr: "NAC (animaux exotiques)", it: "Animali esotici", es: "Animales exóticos", pt: "Animais exóticos", no: "Eksotiske dyr", nl: "Bijzondere dieren", fi: "Eksoottiset eläimet", hu: "Egzotikus állatok", ja: "エキゾチックアニマル科" },
  ultrasound: { en: "Ultrasound", sk: "Sonografia", pl: "USG", cs: "Ultrazvuk", de: "Ultraschall", fr: "Échographie", it: "Ecografia", es: "Ecografía", pt: "Ecografia", no: "Ultralyd", nl: "Echografie", fi: "Ultraääni", hu: "Ultrahang", ja: "超音波検査（エコー）" },
  "x-ray": { en: "X-ray", sk: "RTG", pl: "RTG", cs: "RTG", de: "Röntgen", fr: "Radiographie", it: "Radiografia", es: "Radiografía", pt: "Radiografia", no: "Røntgen", nl: "Röntgen", fi: "Röntgen", hu: "Röntgen", ja: "レントゲン検査" },
  ct: { en: "CT", sk: "CT", pl: "Tomografia komputerowa", cs: "CT", de: "CT", fr: "Scanner (TDM)", it: "TAC", es: "TAC", pt: "TAC", no: "CT", nl: "CT-scan", fi: "CT (tietokonetomografia)", hu: "CT", ja: "CT検査" },
  mri: { en: "MRI", sk: "Magnetická rezonancia", pl: "Rezonans magnetyczny", cs: "Magnetická rezonance", de: "MRT", fr: "IRM", it: "Risonanza magnetica", es: "Resonancia magnética", pt: "Ressonância magnética", no: "MR", nl: "MRI-scan", fi: "Magneettikuvaus (MRI)", hu: "MRI", ja: "MRI検査" },
  endoscopy: { en: "Endoscopy", sk: "Endoskopia", pl: "Endoskopia", cs: "Endoskopie", de: "Endoskopie", fr: "Endoscopie", it: "Endoscopia", es: "Endoscopia", pt: "Endoscopia", no: "Endoskopi", nl: "Endoscopie", fi: "Endoskopia (tähystys)", hu: "Endoszkópia", ja: "内視鏡検査" },
  laboratory: { en: "Laboratory", sk: "Laboratórium", pl: "Laboratorium", cs: "Laboratoř", de: "Labor", fr: "Laboratoire", it: "Laboratorio", es: "Laboratorio", pt: "Laboratório", no: "Laboratorium", nl: "Laboratorium", fi: "Laboratorio", hu: "Laboratórium", ja: "臨床検査・血液検査" },
  hospitalization: { en: "Hospitalisation", sk: "Hospitalizácia", pl: "Hospitalizacja", cs: "Hospitalizace", de: "Stationäre Aufnahme", fr: "Hospitalisation", it: "Ricovero", es: "Hospitalización", pt: "Internamento", no: "Hospitalisering", nl: "Opname en verpleging", fi: "Osastohoito (sairaalahoito)", hu: "Kórházi ellátás", ja: "入院設備・ICU" },
};

export function specialtyLabel(code: string, locale: string): string {
  const l = LABELS[code as VetSpecialty];
  return l ? (l[locale as Locale] ?? l.en) : code;
}
