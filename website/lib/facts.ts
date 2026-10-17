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
    { code: "walk_in", en: "Walk-ins welcome", sk: "Aj bez objednania", pl: "Także bez umówienia", cs: "I bez objednání", de: "Auch ohne Termin", fr: "Sans rendez-vous", it: "Anche senza appuntamento", es: "Sin cita previa" },
    { code: "appointment_only", en: "By appointment only", sk: "Len na objednávku", pl: "Tylko po umówieniu wizyty", cs: "Pouze po objednání", de: "Nur nach Terminvereinbarung", fr: "Uniquement sur rendez-vous", it: "Solo su appuntamento", es: "Solo con cita previa" },
    { code: "online_booking", en: "Online booking", sk: "Objednanie online", pl: "Rezerwacja online", cs: "Online objednání", de: "Online-Buchung", fr: "Réservation en ligne", it: "Prenotazione online", es: "Reserva online" },
    { code: "card_payment", en: "Card payment", sk: "Platba kartou", pl: "Płatność kartą", cs: "Platba kartou", de: "Kartenzahlung", fr: "Paiement par carte", it: "Pagamento con carta", es: "Pago con tarjeta" },
    { code: "parking", en: "Parking", sk: "Parkovanie", pl: "Parking", cs: "Parkování", de: "Parkplatz", fr: "Parking", it: "Parcheggio", es: "Aparcamiento" },
    { code: "cats_waiting_room", en: "Separate waiting room for cats", sk: "Samostatná čakáreň pre mačky", pl: "Osobna poczekalnia dla kotów", cs: "Samostatná čekárna pro kočky", de: "Eigener Wartebereich für Katzen", fr: "Salle d'attente séparée pour les chats", it: "Sala d'attesa separata per i gatti", es: "Sala de espera separada para gatos" },
    { code: "pet_passport", en: "Issues EU pet passports", sk: "Vystavuje európsky pas pre zvieratá", pl: "Wystawia paszport dla zwierzęcia (UE)", cs: "Vystavuje evropský pas pro zvířata", de: "Stellt EU-Heimtierausweise aus", fr: "Délivre le passeport européen pour animaux", it: "Rilascia il passaporto europeo per animali", es: "Emite pasaporte europeo para mascotas" },
    { code: "pharmacy_on_site", en: "Pharmacy on site", sk: "Lekáreň na mieste", pl: "Apteka na miejscu", cs: "Lékárna na místě", de: "Hausapotheke vor Ort", fr: "Pharmacie sur place", it: "Farmacia interna", es: "Farmacia en el centro" },
    { code: "cat_friendly", en: "Cat Friendly Clinic certified", sk: "Certifikát Cat Friendly Clinic", pl: "Certyfikat Cat Friendly Clinic", cs: "Certifikát Cat Friendly Clinic", de: "Zertifikat Cat Friendly Clinic", fr: "Certification Cat Friendly Clinic", it: "Certificazione Cat Friendly Clinic", es: "Certificado Cat Friendly Clinic" },
  ],
  GROOMING: [
    { code: "cats", en: "Cats groomed too", sk: "Upravujú aj mačky", pl: "Strzyże także koty", cs: "Upravují i kočky", de: "Auch Katzen werden gepflegt", fr: "Toilette aussi les chats", it: "Toelettatura anche per gatti", es: "También peluquería para gatos" },
    { code: "all_sizes", en: "Dogs of all sizes", sk: "Psy všetkých veľkostí", pl: "Psy wszystkich wielkości", cs: "Psi všech velikostí", de: "Hunde aller Größen", fr: "Chiens de toutes tailles", it: "Cani di tutte le taglie", es: "Perros de todos los tamaños" },
    { code: "small_dogs_only", en: "Small dogs only", sk: "Len malé psy", pl: "Tylko małe psy", cs: "Pouze malí psi", de: "Nur kleine Hunde", fr: "Petits chiens uniquement", it: "Solo cani di piccola taglia", es: "Solo perros pequeños" },
    { code: "appointment_only", en: "By appointment only", sk: "Len na objednávku", pl: "Tylko po umówieniu wizyty", cs: "Pouze po objednání", de: "Nur nach Terminvereinbarung", fr: "Uniquement sur rendez-vous", it: "Solo su appuntamento", es: "Solo con cita previa" },
    { code: "online_booking", en: "Online booking", sk: "Objednanie online", pl: "Rezerwacja online", cs: "Online objednání", de: "Online-Buchung", fr: "Réservation en ligne", it: "Prenotazione online", es: "Reserva online" },
    { code: "card_payment", en: "Card payment", sk: "Platba kartou", pl: "Płatność kartą", cs: "Platba kartou", de: "Kartenzahlung", fr: "Paiement par carte", it: "Pagamento con carta", es: "Pago con tarjeta" },
    { code: "owner_can_stay", en: "You can stay with your pet", sk: "Môžete zostať pri zvieratku", pl: "Możesz zostać przy zwierzaku", cs: "Můžete zůstat u zvířete", de: "Sie können bei Ihrem Tier bleiben", fr: "Vous pouvez rester auprès de votre animal", it: "Puoi restare con il tuo animale", es: "Puedes quedarte con tu mascota" },
    { code: "natural_cosmetics", en: "Natural cosmetics", sk: "Prírodná kozmetika", pl: "Naturalne kosmetyki", cs: "Přírodní kosmetika", de: "Naturkosmetik", fr: "Produits cosmétiques naturels", it: "Cosmetici naturali", es: "Cosmética natural" },
    { code: "pickup_service", en: "Pick-up and drop-off", sk: "Dovoz a odvoz zvieratka", pl: "Odbiór i odwóz zwierzaka", cs: "Odvoz a dovoz zvířete", de: "Hol- und Bringservice", fr: "Service de récupération et de retour", it: "Servizio di ritiro e riconsegna", es: "Recogida y entrega a domicilio" },
  ],
  PET_HOTEL: [
    { code: "cats", en: "Takes cats", sk: "Prijímajú aj mačky", pl: "Przyjmuje także koty", cs: "Přijímají i kočky", de: "Nimmt auch Katzen auf", fr: "Accepte aussi les chats", it: "Accoglie anche i gatti", es: "También acepta gatos" },
    { code: "small_dogs_only", en: "Small dogs only", sk: "Len malé psy", pl: "Tylko małe psy", cs: "Pouze malí psi", de: "Nur kleine Hunde", fr: "Petits chiens uniquement", it: "Solo cani di piccola taglia", es: "Solo perros pequeños" },
    { code: "vaccination_required", en: "Vaccination record required", sk: "Potrebné očkovanie", pl: "Wymagane szczepienia", cs: "Nutné očkování", de: "Impfnachweis erforderlich", fr: "Carnet de vaccination exigé", it: "Libretto vaccinale richiesto", es: "Se exige cartilla de vacunación" },
    { code: "trial_stay", en: "Trial day or visit before the stay", sk: "Skúšobný deň alebo návšteva vopred", pl: "Dzień próbny lub wizyta przed pobytem", cs: "Zkušební den nebo návštěva předem", de: "Probetag oder Besuch vor dem Aufenthalt", fr: "Journée d'essai ou visite avant le séjour", it: "Giornata di prova o visita prima del soggiorno", es: "Día de prueba o visita antes de la estancia" },
    { code: "outdoor_run", en: "Outdoor run", sk: "Výbeh vonku", pl: "Wybieg na zewnątrz", cs: "Venkovní výběh", de: "Auslauf im Freien", fr: "Espace extérieur", it: "Area esterna", es: "Zona de recreo exterior" },
    { code: "supervision_24h", en: "Supervised 24 hours", sk: "Dozor 24 hodín", pl: "Opieka 24 godziny", cs: "Dohled 24 hodin", de: "Betreuung rund um die Uhr", fr: "Surveillance 24 h/24", it: "Sorveglianza 24 ore su 24", es: "Vigilancia las 24 horas" },
    { code: "cage_free", en: "No cages or kennels", sk: "Bez klietok a kotercov", pl: "Bez klatek i kojców", cs: "Bez klecí a boxů", de: "Ohne Käfige und Zwinger", fr: "Sans cages ni box", it: "Senza gabbie né box", es: "Sin jaulas ni boxes" },
    { code: "medication", en: "Gives medication", sk: "Podajú lieky", pl: "Podaje leki", cs: "Podávají léky", de: "Verabreicht Medikamente", fr: "Administre des médicaments", it: "Somministra farmaci", es: "Administra medicación" },
    { code: "photo_updates", en: "Photo or video updates", sk: "Posielajú fotky alebo videá", pl: "Wysyła zdjęcia lub filmy", cs: "Posílají fotky nebo videa", de: "Foto- oder Videoberichte", fr: "Photos ou vidéos envoyées pendant le séjour", it: "Foto o video durante il soggiorno", es: "Fotos o vídeos durante la estancia" },
  ],
  DOG_TRAINING: [
    { code: "group_classes", en: "Group classes", sk: "Skupinové kurzy", pl: "Zajęcia grupowe", cs: "Skupinové kurzy", de: "Gruppenkurse", fr: "Cours collectifs", it: "Corsi di gruppo", es: "Clases en grupo" },
    { code: "private_lessons", en: "Private lessons", sk: "Individuálny výcvik", pl: "Lekcje indywidualne", cs: "Individuální výcvik", de: "Einzeltraining", fr: "Cours individuels", it: "Lezioni individuali", es: "Clases individuales" },
    { code: "puppy_classes", en: "Puppy classes", sk: "Šteňacia škôlka", pl: "Psie przedszkole", cs: "Štěněcí školka", de: "Welpenkurse", fr: "École du chiot", it: "Scuola per cuccioli", es: "Clases para cachorros" },
    { code: "training_ground", en: "Own training ground", sk: "Vlastné cvičisko", pl: "Własny plac treningowy", cs: "Vlastní cvičiště", de: "Eigener Übungsplatz", fr: "Terrain d'entraînement sur place", it: "Campo di addestramento proprio", es: "Campo de adiestramiento propio" },
    { code: "home_training", en: "Training at your home", sk: "Výcvik u vás doma", pl: "Szkolenie u Ciebie w domu", cs: "Výcvik u vás doma", de: "Training bei Ihnen zu Hause", fr: "Éducation à votre domicile", it: "Addestramento a casa tua", es: "Adiestramiento en tu casa" },
    { code: "behaviour_problems", en: "Behaviour problems", sk: "Problémové správanie", pl: "Problemy z zachowaniem", cs: "Problémové chování", de: "Verhaltensprobleme", fr: "Problèmes de comportement", it: "Problemi comportamentali", es: "Problemas de conducta" },
    { code: "certified_trainer", en: "Certified trainer", sk: "Certifikovaný tréner", pl: "Certyfikowany trener", cs: "Certifikovaný trenér", de: "Ausgebildete Trainer", fr: "Éducateurs certifiés", it: "Educatori certificati", es: "Educadores certificados" },
    { code: "online_lessons", en: "Online lessons", sk: "Online konzultácie", pl: "Konsultacje online", cs: "Online konzultace", de: "Online-Beratung", fr: "Cours en ligne", it: "Lezioni online", es: "Clases online" },
    { code: "dog_sports", en: "Dog sports (agility, obedience)", sk: "Psie športy (agility, obedience)", pl: "Sporty kynologiczne (agility, obedience)", cs: "Psí sporty (agility, obedience)", de: "Hundesport (Agility, Obedience)", fr: "Sports canins (agility, obéissance)", it: "Sport cinofili (agility, obedience)", es: "Deportes caninos (agility, obediencia)" },
  ],
  PET_SITTING: [
    { code: "dog_walking", en: "Dog walking", sk: "Venčenie psov", pl: "Wyprowadzanie psów", cs: "Venčení psů", de: "Gassigehen", fr: "Promenades de chiens", it: "Passeggiate per cani", es: "Paseos de perros" },
    { code: "cat_visits", en: "Cat visits", sk: "Návštevy mačiek", pl: "Wizyty u kota", cs: "Návštěvy koček", de: "Katzenbesuche", fr: "Visites chez les chats", it: "Visite ai gatti", es: "Visitas a gatos" },
    { code: "home_sitting", en: "Stays at your home", sk: "Stráženie u vás doma", pl: "Opieka u Ciebie w domu", cs: "Hlídání u vás doma", de: "Betreuung bei Ihnen zu Hause", fr: "Garde à votre domicile", it: "Custodia a casa tua", es: "Cuidado en tu casa" },
    { code: "boarding_at_sitter", en: "Boarding at the sitter's", sk: "Stráženie u opatrovateľa", pl: "Opieka w domu petsittera", cs: "Hlídání u hlídače", de: "Betreuung beim Sitter", fr: "Garde chez le pet sitter", it: "Custodia a casa del dog sitter", es: "Alojamiento en casa del cuidador" },
    { code: "insured", en: "Insured", sk: "Poistenie zodpovednosti", pl: "Ubezpieczenie OC", cs: "Pojištění odpovědnosti", de: "Haftpflichtversichert", fr: "Assurance responsabilité civile", it: "Assicurazione di responsabilità civile", es: "Seguro de responsabilidad civil" },
    { code: "meet_greet", en: "Meet before booking", sk: "Zoznámenie pred objednaním", pl: "Spotkanie zapoznawcze przed rezerwacją", cs: "Seznámení před objednáním", de: "Kennenlernen vor der Buchung", fr: "Rencontre avant la réservation", it: "Incontro conoscitivo prima della prenotazione", es: "Encuentro previo a la reserva" },
    { code: "medication", en: "Gives medication", sk: "Podajú lieky", pl: "Podaje leki", cs: "Podávají léky", de: "Verabreicht Medikamente", fr: "Administre des médicaments", it: "Somministra farmaci", es: "Administra medicación" },
    { code: "photo_updates", en: "Photo or video updates", sk: "Posielajú fotky alebo videá", pl: "Wysyła zdjęcia lub filmy", cs: "Posílají fotky nebo videa", de: "Foto- oder Videoberichte", fr: "Photos ou vidéos envoyées pendant le séjour", it: "Foto o video durante il soggiorno", es: "Fotos o vídeos durante la estancia" },
    { code: "first_aid", en: "Pet first-aid trained", sk: "Kurz prvej pomoci pre zvieratá", pl: "Kurs pierwszej pomocy dla zwierząt", cs: "Kurz první pomoci pro zvířata", de: "Erste-Hilfe-Kurs für Tiere", fr: "Formé aux premiers secours animaliers", it: "Formazione di primo soccorso per animali", es: "Formación en primeros auxilios para mascotas" },
  ],
  PET_SHOP: [
    { code: "delivery", en: "Delivery", sk: "Doručenie", pl: "Dostawa", cs: "Doručení", de: "Lieferung", fr: "Livraison", it: "Consegna", es: "Envío a domicilio" },
    { code: "vet_pharmacy", en: "Vet pharmacy", sk: "Veterinárna lekáreň", pl: "Apteka weterynaryjna", cs: "Veterinární lékárna", de: "Tierärztliche Apotheke", fr: "Pharmacie vétérinaire", it: "Farmacia veterinaria", es: "Farmacia veterinaria" },
    { code: "grooming_corner", en: "Grooming on site", sk: "Úprava zvierat na mieste", pl: "Pielęgnacja zwierząt na miejscu", cs: "Úprava zvířat na místě", de: "Pflege vor Ort", fr: "Toilettage sur place", it: "Toelettatura in sede", es: "Peluquería en la tienda" },
    { code: "card_payment", en: "Card payment", sk: "Platba kartou", pl: "Płatność kartą", cs: "Platba kartou", de: "Kartenzahlung", fr: "Paiement par carte", it: "Pagamento con carta", es: "Pago con tarjeta" },
    { code: "parking", en: "Parking", sk: "Parkovanie", pl: "Parking", cs: "Parkování", de: "Parkplatz", fr: "Parking", it: "Parcheggio", es: "Aparcamiento" },
    { code: "click_collect", en: "Order online, pick up in store", sk: "Objednávka online s osobným odberom", pl: "Zamówienie online z odbiorem w sklepie", cs: "Objednávka online s osobním odběrem", de: "Online bestellen, im Geschäft abholen", fr: "Commande en ligne, retrait en magasin", it: "Ordina online, ritira in negozio", es: "Compra online, recogida en tienda" },
    { code: "raw_food", en: "Raw food (BARF)", sk: "Surové krmivo (BARF)", pl: "Karma surowa (BARF)", cs: "Syrové krmivo (BARF)", de: "Rohfütterung (BARF)", fr: "Alimentation crue (BARF)", it: "Alimentazione cruda (BARF)", es: "Alimentación cruda (BARF)" },
    { code: "aquarium_fish", en: "Aquarium fish", sk: "Akvaristika", pl: "Akwarystyka", cs: "Akvaristika", de: "Aquaristik", fr: "Aquariophilie", it: "Acquariofilia", es: "Acuariofilia" },
    { code: "exotic_supplies", en: "Supplies for exotic pets", sk: "Potreby pre exotické zvieratá", pl: "Akcesoria dla zwierząt egzotycznych", cs: "Potřeby pro exotická zvířata", de: "Bedarf für Exoten", fr: "Articles pour NAC", it: "Articoli per animali esotici", es: "Artículos para animales exóticos" },
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

const APPOINTMENT_Q = { en: "Do I need an appointment?", sk: "Treba sa objednať?", pl: "Czy trzeba się umówić?", cs: "Je nutné se objednat?", de: "Brauche ich einen Termin?", fr: "Faut-il prendre rendez-vous ?", it: "Serve un appuntamento?", es: "¿Hace falta cita previa?" };
const FAQ: Record<string, (category: BusinessCategory) => QA | null> = {
  walk_in: () => ({
    en: { q: APPOINTMENT_Q.en, a: "No - by the place's own information you can also come without an appointment." },
    sk: { q: APPOINTMENT_Q.sk, a: "Nie - podľa informácií podniku môžete prísť aj bez objednania." },
    pl: { q: APPOINTMENT_Q.pl, a: "Nie – według informacji miejsca można przyjść także bez umówienia." },
    de: { q: APPOINTMENT_Q.de, a: "Nein – laut Angaben des Betriebs können Sie auch ohne Termin kommen." },
    cs: { q: APPOINTMENT_Q.cs, a: "Ne – podle informací podniku můžete přijít i bez objednání." },
    fr: { q: APPOINTMENT_Q.fr, a: "Non – d'après les informations de l'établissement, vous pouvez aussi venir sans rendez-vous." },
    it: { q: APPOINTMENT_Q.it, a: "No – secondo le informazioni della struttura puoi venire anche senza appuntamento." },
    es: { q: APPOINTMENT_Q.es, a: "No, según la información del propio centro se puede ir sin cita previa." },
  }),
  appointment_only: () => ({
    en: { q: APPOINTMENT_Q.en, a: "Yes, by appointment only - call or book before you come." },
    sk: { q: APPOINTMENT_Q.sk, a: "Áno, len na objednávku - pred návštevou zavolajte alebo sa objednajte." },
    pl: { q: APPOINTMENT_Q.pl, a: "Tak, tylko po umówieniu – przed wizytą zadzwoń lub zarezerwuj termin." },
    de: { q: APPOINTMENT_Q.de, a: "Ja, nur nach Terminvereinbarung – rufen Sie vorher an oder buchen Sie einen Termin." },
    cs: { q: APPOINTMENT_Q.cs, a: "Ano, pouze po objednání – před návštěvou zavolejte nebo se objednejte." },
    fr: { q: APPOINTMENT_Q.fr, a: "Oui, uniquement sur rendez-vous – appelez ou réservez avant de venir." },
    it: { q: APPOINTMENT_Q.it, a: "Sì, solo su appuntamento – chiama o prenota prima di venire." },
    es: { q: APPOINTMENT_Q.es, a: "Sí, solo con cita previa: llama o reserva antes de ir." },
  }),
  online_booking: () => ({
    en: { q: "Can I book online?", a: "Yes, the place takes bookings online - the link is on its website." },
    sk: { q: "Dá sa objednať online?", a: "Áno, podnik prijíma objednávky online - odkaz nájdete na jeho webe." },
    pl: { q: "Czy można zarezerwować online?", a: "Tak, miejsce przyjmuje rezerwacje online – link znajdziesz na jego stronie." },
    de: { q: "Kann ich online buchen?", a: "Ja, der Betrieb nimmt Online-Buchungen an – den Link finden Sie auf seiner Website." },
    cs: { q: "Dá se objednat online?", a: "Ano, podnik přijímá objednávky online – odkaz najdete na jeho webu." },
    fr: { q: "Peut-on réserver en ligne ?", a: "Oui, l'établissement prend les réservations en ligne – le lien se trouve sur son site." },
    it: { q: "Si può prenotare online?", a: "Sì, la struttura accetta prenotazioni online – il link è sul suo sito." },
    es: { q: "¿Se puede reservar online?", a: "Sí, el centro admite reservas online; el enlace está en su web." },
  }),
  card_payment: () => ({
    en: { q: "Can I pay by card?", a: "Yes, the place states that you can pay by card." },
    sk: { q: "Dá sa platiť kartou?", a: "Áno, podnik uvádza platbu kartou." },
    pl: { q: "Czy można płacić kartą?", a: "Tak, miejsce podaje, że można płacić kartą." },
    de: { q: "Kann ich mit Karte zahlen?", a: "Ja, der Betrieb gibt Kartenzahlung an." },
    cs: { q: "Dá se platit kartou?", a: "Ano, podnik uvádí platbu kartou." },
    fr: { q: "Peut-on payer par carte ?", a: "Oui, l'établissement indique accepter le paiement par carte." },
    it: { q: "Si può pagare con la carta?", a: "Sì, la struttura indica di accettare il pagamento con carta." },
    es: { q: "¿Se puede pagar con tarjeta?", a: "Sí, el centro indica que se puede pagar con tarjeta." },
  }),
  parking: () => ({
    en: { q: "Is there parking?", a: "Yes, the place mentions parking for customers." },
    sk: { q: "Dá sa tam zaparkovať?", a: "Áno, podnik uvádza parkovanie pre zákazníkov." },
    pl: { q: "Czy jest parking?", a: "Tak, miejsce podaje parking dla klientów." },
    de: { q: "Gibt es einen Parkplatz?", a: "Ja, der Betrieb nennt Parkplätze für Kundinnen und Kunden." },
    cs: { q: "Dá se tam zaparkovat?", a: "Ano, podnik uvádí parkování pro zákazníky." },
    fr: { q: "Y a-t-il un parking ?", a: "Oui, l'établissement mentionne un parking pour les clients." },
    it: { q: "C'è un parcheggio?", a: "Sì, la struttura segnala un parcheggio per i clienti." },
    es: { q: "¿Hay aparcamiento?", a: "Sí, el centro menciona aparcamiento para clientes." },
  }),
  cats: (category) =>
    category === "PET_HOTEL"
      ? {
          en: { q: "Do they take cats?", a: "Yes, the place also boards cats." },
          sk: { q: "Prijímajú aj mačky?", a: "Áno, podnik ubytuje aj mačky." },
          pl: { q: "Czy przyjmują koty?", a: "Tak, miejsce przyjmuje także koty." },
          de: { q: "Nehmen sie auch Katzen auf?", a: "Ja, der Betrieb nimmt auch Katzen auf." },
          cs: { q: "Přijímají i kočky?", a: "Ano, podnik ubytuje i kočky." },
          fr: { q: "Acceptent-ils aussi les chats ?", a: "Oui, l'établissement accueille aussi les chats." },
          it: { q: "Accolgono anche i gatti?", a: "Sì, la struttura accoglie anche i gatti." },
          es: { q: "¿Aceptan gatos?", a: "Sí, el centro también acepta gatos." },
        }
      : {
          en: { q: "Do they groom cats?", a: "Yes, the place also grooms cats." },
          sk: { q: "Upravujú aj mačky?", a: "Áno, podnik upravuje aj mačky." },
          pl: { q: "Czy strzygą koty?", a: "Tak, miejsce strzyże także koty." },
          de: { q: "Pflegen sie auch Katzen?", a: "Ja, der Betrieb pflegt auch Katzen." },
          cs: { q: "Upravují i kočky?", a: "Ano, podnik upravuje i kočky." },
          fr: { q: "Toilettent-ils aussi les chats ?", a: "Oui, l'établissement toilette aussi les chats." },
          it: { q: "Fanno la toelettatura anche ai gatti?", a: "Sì, la struttura fa la toelettatura anche ai gatti." },
          es: { q: "¿Hacen peluquería a gatos?", a: "Sí, el centro también atiende a gatos." },
        },
  small_dogs_only: () => ({
    en: { q: "Do they take large dogs?", a: "No, by the place's own information it takes small dogs only." },
    sk: { q: "Prijímajú aj veľké psy?", a: "Nie, podľa informácií podniku len malé psy." },
    pl: { q: "Czy przyjmują duże psy?", a: "Nie, według informacji miejsca tylko małe psy." },
    de: { q: "Nehmen sie auch große Hunde auf?", a: "Nein, laut Angaben des Betriebs nur kleine Hunde." },
    cs: { q: "Přijímají i velké psy?", a: "Ne, podle informací podniku pouze malí psi." },
    fr: { q: "Acceptent-ils les grands chiens ?", a: "Non, d'après les informations de l'établissement, uniquement les petits chiens." },
    it: { q: "Accettano anche cani di taglia grande?", a: "No, secondo le informazioni della struttura solo cani di piccola taglia." },
    es: { q: "¿Aceptan perros grandes?", a: "No, según el propio centro solo admite perros pequeños." },
  }),
  all_sizes: () => ({
    en: { q: "Do they take large dogs?", a: "Yes, dogs of all sizes." },
    sk: { q: "Prijímajú aj veľké psy?", a: "Áno, psy všetkých veľkostí." },
    pl: { q: "Czy przyjmują duże psy?", a: "Tak, psy wszystkich wielkości." },
    de: { q: "Nehmen sie auch große Hunde auf?", a: "Ja, Hunde aller Größen." },
    cs: { q: "Přijímají i velké psy?", a: "Ano, psi všech velikostí." },
    fr: { q: "Acceptent-ils les grands chiens ?", a: "Oui, les chiens de toutes tailles." },
    it: { q: "Accettano anche cani di taglia grande?", a: "Sì, cani di tutte le taglie." },
    es: { q: "¿Aceptan perros grandes?", a: "Sí, perros de todos los tamaños." },
  }),
  vaccination_required: () => ({
    en: { q: "What does my pet need for the stay?", a: "A valid vaccination record - check the details with the place." },
    sk: { q: "Čo potrebuje zviera na pobyt?", a: "Platné očkovanie - podrobnosti si overte v podniku." },
    pl: { q: "Czego zwierzę potrzebuje na pobyt?", a: "Ważnych szczepień – szczegóły sprawdź w miejscu." },
    de: { q: "Was braucht mein Tier für den Aufenthalt?", a: "Einen gültigen Impfnachweis – Einzelheiten klären Sie mit dem Betrieb." },
    cs: { q: "Co zvíře potřebuje na pobyt?", a: "Platné očkování – podrobnosti si ověřte v podniku." },
    fr: { q: "De quoi mon animal a-t-il besoin pour le séjour ?", a: "D'un carnet de vaccination à jour – vérifiez les détails auprès de l'établissement." },
    it: { q: "Cosa serve al mio animale per il soggiorno?", a: "Un libretto vaccinale aggiornato – verifica i dettagli con la struttura." },
    es: { q: "¿Qué necesita mi mascota para la estancia?", a: "Una cartilla de vacunación al día; confirma los detalles con el centro." },
  }),
  trial_stay: () => ({
    en: { q: "Can we try it before a longer stay?", a: "Yes, the place offers a trial day or a visit before the stay." },
    sk: { q: "Dá sa to vyskúšať pred dlhším pobytom?", a: "Áno, podnik ponúka skúšobný deň alebo návštevu vopred." },
    pl: { q: "Czy można spróbować przed dłuższym pobytem?", a: "Tak, miejsce oferuje dzień próbny lub wizytę przed pobytem." },
    de: { q: "Kann man es vor einem längeren Aufenthalt ausprobieren?", a: "Ja, der Betrieb bietet einen Probetag oder einen Besuch vor dem Aufenthalt an." },
    cs: { q: "Dá se to vyzkoušet před delším pobytem?", a: "Ano, podnik nabízí zkušební den nebo návštěvu předem." },
    fr: { q: "Peut-on essayer avant un séjour plus long ?", a: "Oui, l'établissement propose une journée d'essai ou une visite avant le séjour." },
    it: { q: "Si può provare prima di un soggiorno più lungo?", a: "Sì, la struttura offre una giornata di prova o una visita prima del soggiorno." },
    es: { q: "¿Se puede probar antes de una estancia larga?", a: "Sí, el centro ofrece un día de prueba o una visita antes de la estancia." },
  }),
  insured: () => ({
    en: { q: "Is the sitter insured?", a: "Yes, the place states it has liability insurance." },
    sk: { q: "Má opatrovateľ poistenie?", a: "Áno, podnik uvádza poistenie zodpovednosti." },
    pl: { q: "Czy opiekun ma ubezpieczenie?", a: "Tak, miejsce podaje ubezpieczenie OC." },
    de: { q: "Ist der Sitter versichert?", a: "Ja, der Betrieb gibt eine Haftpflichtversicherung an." },
    cs: { q: "Má hlídač pojištění?", a: "Ano, podnik uvádí pojištění odpovědnosti." },
    fr: { q: "Le pet sitter est-il assuré ?", a: "Oui, l'établissement indique avoir une assurance responsabilité civile." },
    it: { q: "Il dog sitter è assicurato?", a: "Sì, la struttura indica di avere un'assicurazione di responsabilità civile." },
    es: { q: "¿El cuidador tiene seguro?", a: "Sí, el centro indica que tiene seguro de responsabilidad civil." },
  }),
  meet_greet: () => ({
    en: { q: "Can we meet before booking?", a: "Yes, a meeting before the first booking is offered." },
    sk: { q: "Dá sa zoznámiť pred objednaním?", a: "Áno, pred prvým objednaním ponúkajú zoznámenie." },
    pl: { q: "Czy można się poznać przed rezerwacją?", a: "Tak, przed pierwszą rezerwacją jest spotkanie zapoznawcze." },
    de: { q: "Kann man sich vor der Buchung kennenlernen?", a: "Ja, vor der ersten Buchung wird ein Kennenlernen angeboten." },
    cs: { q: "Dá se seznámit před objednáním?", a: "Ano, před první objednávkou nabízejí seznámení." },
    fr: { q: "Peut-on se rencontrer avant de réserver ?", a: "Oui, une rencontre est proposée avant la première réservation." },
    it: { q: "Ci si può conoscere prima di prenotare?", a: "Sì, è previsto un incontro conoscitivo prima della prima prenotazione." },
    es: { q: "¿Podemos conocernos antes de reservar?", a: "Sí, se ofrece un encuentro antes de la primera reserva." },
  }),
  pet_passport: () => ({
    en: { q: "Can I get a pet passport there?", a: "Yes, the clinic issues EU pet passports." },
    sk: { q: "Vystavia tu pas pre zviera?", a: "Áno, ambulancia vystavuje európsky pas pre zvieratá." },
    pl: { q: "Czy wyrobię tu paszport dla zwierzęcia?", a: "Tak, lecznica wystawia europejskie paszporty dla zwierząt." },
    de: { q: "Kann ich hier einen Heimtierausweis bekommen?", a: "Ja, die Ordination stellt EU-Heimtierausweise aus." },
    cs: { q: "Vystaví tu pas pro zvíře?", a: "Ano, ordinace vystavuje evropský pas pro zvířata." },
    fr: { q: "Peut-on y faire établir un passeport pour animal ?", a: "Oui, la clinique délivre le passeport européen pour animaux de compagnie." },
    it: { q: "Si può fare il passaporto per animali?", a: "Sì, la clinica rilascia il passaporto europeo per animali da compagnia." },
    es: { q: "¿Se puede sacar el pasaporte para mascotas?", a: "Sí, la clínica emite el pasaporte europeo para mascotas." },
  }),
  owner_can_stay: () => ({
    en: { q: "Can I stay with my pet?", a: "Yes, the salon lets owners stay during grooming." },
    sk: { q: "Môžem zostať pri zvieratku?", a: "Áno, salón umožňuje majiteľom zostať počas úpravy." },
    pl: { q: "Czy mogę zostać przy zwierzaku?", a: "Tak, salon pozwala opiekunom zostać podczas pielęgnacji." },
    de: { q: "Kann ich bei meinem Tier bleiben?", a: "Ja, der Salon erlaubt Besitzern, während der Pflege zu bleiben." },
    cs: { q: "Mohu zůstat u zvířete?", a: "Ano, salon umožňuje majitelům zůstat během úpravy." },
    fr: { q: "Puis-je rester auprès de mon animal ?", a: "Oui, le salon permet aux propriétaires de rester pendant le toilettage." },
    it: { q: "Posso restare con il mio animale?", a: "Sì, il salone permette ai proprietari di restare durante la toelettatura." },
    es: { q: "¿Puedo quedarme con mi mascota?", a: "Sí, la peluquería permite que los dueños se queden durante el servicio." },
  }),
  pickup_service: () => ({
    en: { q: "Can they pick up my pet?", a: "Yes, the place offers pick-up and drop-off." },
    sk: { q: "Prídu si po zvieratko?", a: "Áno, podnik ponúka dovoz a odvoz zvieratka." },
    pl: { q: "Czy mogą odebrać moje zwierzę?", a: "Tak, miejsce oferuje odbiór i odwóz zwierzaka." },
    de: { q: "Holen sie mein Tier ab?", a: "Ja, der Betrieb bietet einen Hol- und Bringservice an." },
    cs: { q: "Přijedou si pro zvíře?", a: "Ano, podnik nabízí odvoz a dovoz zvířete." },
    fr: { q: "Viennent-ils chercher mon animal ?", a: "Oui, l'établissement propose un service de récupération et de retour." },
    it: { q: "Vengono a prendere il mio animale?", a: "Sì, la struttura offre un servizio di ritiro e riconsegna." },
    es: { q: "¿Recogen a mi mascota?", a: "Sí, el centro ofrece recogida y entrega." },
  }),
  cage_free: () => ({
    en: { q: "Are pets kept in cages?", a: "No, by the place's own information it has no cages or kennels." },
    sk: { q: "Sú zvieratá v klietkach?", a: "Nie, podľa informácií podniku bez klietok a kotercov." },
    pl: { q: "Czy zwierzęta są w klatkach?", a: "Nie, według informacji miejsca bez klatek i kojców." },
    de: { q: "Sind die Tiere in Käfigen?", a: "Nein, laut Angaben des Betriebs ohne Käfige und Zwinger." },
    cs: { q: "Jsou zvířata v klecích?", a: "Ne, podle informací podniku bez klecí a boxů." },
    fr: { q: "Les animaux sont-ils en cage ?", a: "Non, d'après les informations de l'établissement, il n'y a ni cages ni box." },
    it: { q: "Gli animali stanno in gabbia?", a: "No, secondo le informazioni della struttura non ci sono gabbie né box." },
    es: { q: "¿Las mascotas están en jaulas?", a: "No, según el propio centro no hay jaulas ni boxes." },
  }),
  medication: () => ({
    en: { q: "Can they give my pet medication?", a: "Yes, the place states it gives medication." },
    sk: { q: "Podajú zvieratku lieky?", a: "Áno, podnik uvádza, že podá lieky." },
    pl: { q: "Czy podadzą mojemu zwierzęciu leki?", a: "Tak, miejsce podaje, że podaje leki." },
    de: { q: "Verabreichen sie meinem Tier Medikamente?", a: "Ja, der Betrieb gibt an, Medikamente zu verabreichen." },
    cs: { q: "Podají zvířeti léky?", a: "Ano, podnik uvádí, že podává léky." },
    fr: { q: "Peuvent-ils donner des médicaments à mon animal ?", a: "Oui, l'établissement indique administrer des médicaments." },
    it: { q: "Possono somministrare farmaci al mio animale?", a: "Sì, la struttura indica di somministrare farmaci." },
    es: { q: "¿Pueden darle medicación a mi mascota?", a: "Sí, el centro indica que administra medicación." },
  }),
  delivery: () => ({
    en: { q: "Do they deliver?", a: "Yes, the shop offers delivery." },
    sk: { q: "Doručujú?", a: "Áno, obchod ponúka doručenie." },
    pl: { q: "Czy dostarczają?", a: "Tak, sklep oferuje dostawę." },
    de: { q: "Liefern sie?", a: "Ja, das Geschäft bietet Lieferung an." },
    cs: { q: "Doručují?", a: "Ano, obchod nabízí doručení." },
    fr: { q: "Livrent-ils ?", a: "Oui, le magasin propose la livraison." },
    it: { q: "Fanno consegne a domicilio?", a: "Sì, il negozio offre la consegna." },
    es: { q: "¿Hacen envíos?", a: "Sí, la tienda ofrece envío a domicilio." },
  }),
};

export function factFaq(category: BusinessCategory, codes: string[], locale: Locale): { q: string; a: string }[] {
  const seen = new Set<string>();
  return codes
    .map((code) => FAQ[code]?.(category)?.[locale] ?? null)
    .filter((qa): qa is { q: string; a: string } => qa !== null && !seen.has(qa.q) && Boolean(seen.add(qa.q)));
}
