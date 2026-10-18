import type { BusinessCategory } from "@prisma/client";
import { listingPath } from "./categories";
import type { Locale } from "./locales";

// "Best" pages (owner, 2026-10-08): the top 10 places of a category in a
// city or a district, ranked by Google rating weighed by how many people
// rated, each with what customers praise (our review summary). Queries
// like "best dog groomer brooklyn" or "beste Tierarzt Berlin Mitte" have
// buying intent, and the review summaries make the page more than a list.
//
// URL: /<lang>/<category>/<city>/<best>/ and
//      /<lang>/<category>/<city>/<district>/<best>/

export const BEST_SEGMENT: Record<Locale, string> = { en: "best", sk: "najlepsie", pl: "najlepsze", cs: "nejlepsi", de: "beste", fr: "meilleurs", it: "migliori", es: "mejores", pt: "melhores", no: "beste", nl: "beste", fi: "parhaat", hu: "legjobb", ja: "osusume" };

/** A place counts with at least this many Google ratings… */
export const MIN_RATINGS = 10;
/** …and at least this rating. */
export const MIN_RATING = 4.0;
/** A page exists from this many places that count. */
export const MIN_PLACES_BEST = 5;
/** Places shown. */
export const TOP_BEST = 10;
// Bayesian average: every place starts with PRIOR_WEIGHT imaginary
// ratings of PRIOR_MEAN, so 4.9 from 15 people ranks below 4.8 from 400.
const PRIOR_MEAN = 4.5;
const PRIOR_WEIGHT = 30;

export function bestScore(rating: number, count: number): number {
  return (rating * count + PRIOR_MEAN * PRIOR_WEIGHT) / (count + PRIOR_WEIGHT);
}

export function qualifies(b: { googleRating: number | null; googleRatingCount: number | null }): boolean {
  return b.googleRating !== null && b.googleRatingCount !== null && b.googleRating >= MIN_RATING && b.googleRatingCount >= MIN_RATINGS;
}

/** The places of a best page, best first; empty below MIN_PLACES_BEST. */
export function rankBest<T extends { googleRating: number | null; googleRatingCount: number | null; slug: string }>(places: T[]): T[] {
  const ranked = places
    .filter(qualifies)
    .sort(
      (a, b) =>
        bestScore(b.googleRating!, b.googleRatingCount!) - bestScore(a.googleRating!, a.googleRatingCount!) ||
        b.googleRatingCount! - a.googleRatingCount! ||
        a.slug.localeCompare(b.slug)
    );
  return ranked.length >= MIN_PLACES_BEST ? ranked.slice(0, TOP_BEST) : [];
}

export function bestPath(locale: Locale, category: BusinessCategory, citySlug: string, districtSlug?: string | null): string {
  return `${listingPath(locale, category, citySlug, districtSlug)}${BEST_SEGMENT[locale]}/`;
}

/** "Best dog groomers", "Die besten Tierärzte" - plural, agreeing in every language. */
const BEST_NAME: Record<Locale, Record<BusinessCategory, string>> = {
  en: {
    GROOMING: "Best dog groomers",
    VET_CLINIC: "Best vets",
    PET_HOTEL: "Best dog hotels",
    DOG_TRAINING: "Best dog trainers",
    PET_SHOP: "Best pet shops",
    PET_SITTING: "Best dog walkers and sitters",
  },
  sk: {
    GROOMING: "Najlepšie psie salóny",
    VET_CLINIC: "Najlepší veterinári",
    PET_HOTEL: "Najlepšie hotely pre psov",
    DOG_TRAINING: "Najlepší cvičitelia psov",
    PET_SHOP: "Najlepšie zverimexy",
    PET_SITTING: "Najlepšie stráženie a venčenie psov",
  },
  pl: {
    GROOMING: "Najlepsi groomerzy",
    VET_CLINIC: "Najlepsi weterynarze",
    PET_HOTEL: "Najlepsze hotele dla psów",
    DOG_TRAINING: "Najlepsi trenerzy psów",
    PET_SHOP: "Najlepsze sklepy zoologiczne",
    PET_SITTING: "Najlepsi petsitterzy",
  },
  cs: {
    GROOMING: "Nejlepší psí salony",
    VET_CLINIC: "Nejlepší veterináři",
    PET_HOTEL: "Nejlepší psí hotely",
    DOG_TRAINING: "Nejlepší cvičitelé psů",
    PET_SHOP: "Nejlepší zverimexy",
    PET_SITTING: "Nejlepší hlídání a venčení psů",
  },
  de: {
    GROOMING: "Die besten Hundesalons",
    VET_CLINIC: "Die besten Tierärzte",
    PET_HOTEL: "Die besten Hundepensionen",
    DOG_TRAINING: "Die besten Hundeschulen",
    PET_SHOP: "Die besten Tierhandlungen",
    PET_SITTING: "Die besten Hundesitter",
  },
  fr: {
    GROOMING: "Les meilleurs salons de toilettage",
    VET_CLINIC: "Les meilleurs vétérinaires",
    PET_HOTEL: "Les meilleures pensions pour animaux",
    DOG_TRAINING: "Les meilleurs éducateurs canins",
    PET_SHOP: "Les meilleures animaleries",
    PET_SITTING: "Les meilleurs pet sitters",
  },
  it: {
    GROOMING: "I migliori saloni di toelettatura",
    VET_CLINIC: "I migliori veterinari",
    PET_HOTEL: "Le migliori pensioni per animali",
    DOG_TRAINING: "I migliori educatori cinofili",
    PET_SHOP: "I migliori negozi di animali",
    PET_SITTING: "I migliori dog sitter",
  },
  es: {
    GROOMING: "Las mejores peluquerías caninas",
    VET_CLINIC: "Los mejores veterinarios",
    PET_HOTEL: "Las mejores residencias caninas",
    DOG_TRAINING: "Los mejores adiestradores caninos",
    PET_SHOP: "Las mejores tiendas de mascotas",
    PET_SITTING: "Los mejores cuidadores de perros",
  },
  pt: {
    GROOMING: "Os melhores salões de banhos e tosquias",
    VET_CLINIC: "Os melhores veterinários",
    PET_HOTEL: "Os melhores hotéis caninos",
    DOG_TRAINING: "Os melhores treinadores de cães",
    PET_SHOP: "As melhores lojas de animais",
    PET_SITTING: "Os melhores serviços de pet sitting",
  },
  no: {
    GROOMING: "Beste hundefrisører",
    VET_CLINIC: "Beste veterinærer",
    PET_HOTEL: "Beste dyrehotell",
    DOG_TRAINING: "Beste hundekurs og trenere",
    PET_SHOP: "Beste dyrebutikker",
    PET_SITTING: "Beste hundepassere og luftere",
  },
  nl: {
    GROOMING: "Beste trimsalons",
    VET_CLINIC: "Beste dierenartsen",
    PET_HOTEL: "Beste dierenpensions",
    DOG_TRAINING: "Beste hondenscholen",
    PET_SHOP: "Beste dierenwinkels",
    PET_SITTING: "Beste hondenoppassers en uitlaatservices",
  },
  fi: {
    GROOMING: "Parhaat trimmaamot",
    VET_CLINIC: "Parhaat eläinlääkärit",
    PET_HOTEL: "Parhaat koirahoitolat",
    DOG_TRAINING: "Parhaat koirakoulut",
    PET_SHOP: "Parhaat eläinkaupat",
    PET_SITTING: "Parhaat koiranhoitajat",
  },
  hu: {
    GROOMING: "A legjobb kutyakozmetikák",
    VET_CLINIC: "A legjobb állatorvosok",
    PET_HOTEL: "A legjobb kutyapanziók",
    DOG_TRAINING: "A legjobb kutyaiskolák",
    PET_SHOP: "A legjobb állatkereskedések",
    PET_SITTING: "A legjobb kutyaszitterek",
  },
  ja: {
    GROOMING: "おすすめのトリミングサロン",
    VET_CLINIC: "おすすめの動物病院",
    PET_HOTEL: "おすすめのペットホテル",
    DOG_TRAINING: "おすすめの犬のしつけ教室",
    PET_SHOP: "おすすめのペットショップ",
    PET_SITTING: "おすすめのペットシッター",
  },
};

export function bestName(category: BusinessCategory, locale: Locale): string {
  return BEST_NAME[locale][category];
}

export const BEST_TEXT: Record<
  Locale,
  {
    /** H1: "Best dog groomers in Brooklyn, New York". */
    h1: (name: string, where: string) => string;
    metaTitle: (name: string, where: string, n: number, year: number) => string[];
    metaDescription: (n: number, where: string) => string;
    lead: (n: number) => string;
    praised: string;
    mention: string;
    reviewsSummarised: (n: number) => string;
    howTitle: string;
    how: (min: number, date: string) => string;
    allPlaces: string;
    /** Chip on listing pages. */
    chip: string;
    /** Place page: "No. 2 · Best dog groomers in Brooklyn". */
    rank: (n: number) => string;
  }
> = {
  en: {
    h1: (name, where) => `${name} ${where}`,
    metaTitle: (name, where, n, year) => [`${name} ${where}: top ${n} (${year}) | Pawenn`, `${name} ${where}: top ${n} (${year})`, `${name} ${where} (${year})`, `${name} ${where}`],
    metaDescription: (n, where) =>
      `The ${n} highest-rated places ${where}, ranked by Google rating and number of reviews, with what customers praise in each.`,
    lead: (n) =>
      `The ${n} places with the best Google ratings, weighed by how many people rated them. Under each: what customers praise most, from our summary of recent reviews.`,
    praised: "What customers praise",
    mention: "Some mention",
    reviewsSummarised: (n) => `from ${n} recent ${n === 1 ? "review" : "reviews"}`,
    howTitle: "How we ranked",
    how: (min, date) =>
      `By Google rating, weighed by the number of ratings: a 4.9 from 15 people ranks below a 4.8 from 400. Only places with at least ${min} ratings. Ratings checked ${date}. No place pays to be on this list.`,
    allPlaces: "All places",
    chip: "Best rated",
    rank: (n) => `No. ${n}`,
  },
  sk: {
    h1: (name, where) => `${name} ${where}`,
    metaTitle: (name, where, n, year) => [`${name} ${where}: top ${n} (${year}) | Pawenn`, `${name} ${where}: top ${n} (${year})`, `${name} ${where} (${year})`, `${name} ${where}`],
    metaDescription: (n, where) =>
      `${n} najlepšie hodnotených podnikov ${where} podľa hodnotenia na Google a počtu recenzií – a za čo ich zákazníci chvália.`,
    lead: (n) =>
      `${n} podnikov s najlepším hodnotením na Google, so zohľadnením počtu hodnotení. Pri každom: za čo ho zákazníci chvália najviac, podľa nášho zhrnutia nedávnych recenzií.`,
    praised: "Za čo ho chvália",
    mention: "Niektorí spomínajú",
    reviewsSummarised: (n) => `z ${n} nedávnych recenzií`,
    howTitle: "Ako sme poradie zostavili",
    how: (min, date) =>
      `Podľa hodnotenia na Google so zohľadnením počtu hodnotení: 4,9 od 15 ľudí je nižšie ako 4,8 od 400. Len podniky s aspoň ${min} hodnoteniami. Hodnotenia overené ${date}. Za miesto v rebríčku nikto neplatí.`,
    allPlaces: "Všetky podniky",
    chip: "Najlepšie hodnotené",
    rank: (n) => `${n}. miesto`,
  },
  pl: {
    h1: (name, where) => `${name} ${where}`,
    metaTitle: (name, where, n, year) => [`${name} ${where}: top ${n} (${year}) | Pawenn`, `${name} ${where}: top ${n} (${year})`, `${name} ${where} (${year})`, `${name} ${where}`],
    metaDescription: (n, where) =>
      `${n} najwyżej ocenianych miejsc ${where} według ocen w Google i liczby opinii – i za co chwalą je klienci.`,
    lead: (n) =>
      `${n} miejsc z najlepszą oceną w Google, z uwzględnieniem liczby ocen. Przy każdym: za co klienci chwalą je najbardziej, według naszego podsumowania ostatnich opinii.`,
    praised: "Za co chwalą",
    mention: "Niektórzy wspominają",
    reviewsSummarised: (n) => `z ${n} ostatnich opinii`,
    howTitle: "Jak ułożyliśmy ranking",
    how: (min, date) =>
      `Według oceny w Google z uwzględnieniem liczby ocen: 4,9 od 15 osób jest niżej niż 4,8 od 400. Tylko miejsca z co najmniej ${min} ocenami. Oceny sprawdzone ${date}. Nikt nie płaci za miejsce w rankingu.`,
    allPlaces: "Wszystkie miejsca",
    chip: "Najlepiej oceniane",
    rank: (n) => `${n}. miejsce`,
  },
  cs: {
    h1: (name, where) => `${name} ${where}`,
    metaTitle: (name, where, n, year) => [`${name} ${where}: top ${n} (${year}) | Pawenn`, `${name} ${where}: top ${n} (${year})`, `${name} ${where} (${year})`, `${name} ${where}`],
    metaDescription: (n, where) =>
      `${n} nejlépe hodnocených podniků ${where} podle hodnocení na Google a počtu recenzí – a za co je zákazníci chválí.`,
    lead: (n) =>
      `${n} podniků s nejlepším hodnocením na Google, s ohledem na počet hodnocení. U každého: za co ho zákazníci chválí nejvíc, podle našeho shrnutí nedávných recenzí.`,
    praised: "Za co ho chválí",
    mention: "Někteří zmiňují",
    reviewsSummarised: (n) => `z ${n} nedávných recenzí`,
    howTitle: "Jak jsme pořadí sestavili",
    how: (min, date) =>
      `Podle hodnocení na Google s ohledem na počet hodnocení: 4,9 od 15 lidí je níž než 4,8 od 400. Jen podniky s alespoň ${min} hodnoceními. Hodnocení ověřena ${date}. Za místo v žebříčku nikdo neplatí.`,
    allPlaces: "Všechny podniky",
    chip: "Nejlépe hodnocené",
    rank: (n) => `${n}. místo`,
  },
  de: {
    h1: (name, where) => `${name} ${where}`,
    metaTitle: (name, where, n, year) => [`${name} ${where}: Top ${n} (${year}) | Pawenn`, `${name} ${where}: Top ${n} (${year})`, `${name} ${where} (${year})`, `${name} ${where}`],
    metaDescription: (n, where) =>
      `Die ${n} am besten bewerteten Adressen ${where}, nach Google-Bewertung und Zahl der Rezensionen – und wofür Kunden sie loben.`,
    lead: (n) =>
      `Die ${n} Adressen mit den besten Google-Bewertungen, gewichtet nach der Zahl der Bewertungen. Bei jeder: wofür Kunden sie am meisten loben, aus unserer Zusammenfassung aktueller Rezensionen.`,
    praised: "Wofür Kunden loben",
    mention: "Manche erwähnen",
    reviewsSummarised: (n) => `aus ${n} aktuellen Rezensionen`,
    howTitle: "So haben wir sortiert",
    how: (min, date) =>
      `Nach Google-Bewertung, gewichtet nach der Zahl der Bewertungen: 4,9 von 15 Personen steht unter 4,8 von 400. Nur Adressen mit mindestens ${min} Bewertungen. Bewertungen geprüft am ${date}. Niemand bezahlt für einen Platz in dieser Liste.`,
    allPlaces: "Alle Adressen",
    chip: "Am besten bewertet",
    rank: (n) => `Platz ${n}`,
  },
  fr: {
    h1: (name, where) => `${name} ${where}`,
    metaTitle: (name, where, n, year) => [`${name} ${where} : top ${n} (${year}) | Pawenn`, `${name} ${where} : top ${n} (${year})`, `${name} ${where} (${year})`, `${name} ${where}`],
    metaDescription: (n, where) =>
      `Les ${n} adresses les mieux notées ${where}, classées d'après la note Google et le nombre d'avis – et ce que les clients apprécient.`,
    lead: (n) =>
      `Les ${n} adresses avec les meilleures notes Google, pondérées par le nombre d'avis. Pour chacune : ce que les clients apprécient le plus, d'après notre synthèse des avis récents.`,
    praised: "Ce que les clients apprécient",
    mention: "Certains mentionnent",
    reviewsSummarised: (n) => `d'après ${n} avis récents`,
    howTitle: "Comment nous avons classé",
    how: (min, date) =>
      `D'après la note Google, pondérée par le nombre d'avis : 4,9 sur 15 avis se classe derrière 4,8 sur 400. Seules les adresses avec au moins ${min} avis sont retenues. Notes vérifiées le ${date}. Personne ne paie pour figurer dans cette liste.`,
    allPlaces: "Toutes les adresses",
    chip: "Les mieux notés",
    rank: (n) => (n === 1 ? "1er" : `${n}e`),
  },
  it: {
    h1: (name, where) => `${name} ${where}`,
    metaTitle: (name, where, n, year) => [`${name} ${where}: top ${n} (${year}) | Pawenn`, `${name} ${where}: top ${n} (${year})`, `${name} ${where} (${year})`, `${name} ${where}`],
    metaDescription: (n, where) =>
      `Le ${n} attività con le valutazioni migliori ${where}, in base al voto su Google e al numero di recensioni – e cosa apprezzano i clienti.`,
    lead: (n) =>
      `Le ${n} attività con le migliori valutazioni su Google, ponderate per il numero di recensioni. Per ciascuna: cosa apprezzano di più i clienti, secondo la nostra sintesi delle recensioni recenti.`,
    praised: "Cosa apprezzano i clienti",
    mention: "Alcuni segnalano",
    reviewsSummarised: (n) => `in base a ${n} recensioni recenti`,
    howTitle: "Come abbiamo stilato la classifica",
    how: (min, date) =>
      `In base al voto su Google, ponderato per il numero di recensioni: 4,9 su 15 recensioni vale meno di 4,8 su 400. Contano solo le attività con almeno ${min} recensioni. Voti verificati il ${date}. Nessuno paga per comparire in questa classifica.`,
    allPlaces: "Tutte le attività",
    chip: "I più apprezzati",
    rank: (n) => `${n}º`,
  },
  es: {
    h1: (name, where) => `${name} ${where}`,
    metaTitle: (name, where, n, year) => [`${name} ${where}: top ${n} (${year}) | Pawenn`, `${name} ${where}: top ${n} (${year})`, `${name} ${where} (${year})`, `${name} ${where}`],
    metaDescription: (n, where) =>
      `Los ${n} negocios mejor valorados ${where}, según la nota en Google y el número de reseñas, y lo que más aprecian los clientes.`,
    lead: (n) =>
      `Los ${n} negocios mejor valorados en Google, ponderados por el número de reseñas. De cada uno: lo que más valoran los clientes, según nuestro resumen de las reseñas recientes.`,
    praised: "Lo que más valoran los clientes",
    mention: "Algunos señalan",
    reviewsSummarised: (n) => `a partir de ${n} reseñas recientes`,
    howTitle: "Cómo hemos elaborado la clasificación",
    how: (min, date) =>
      `Según la nota en Google, ponderada por el número de reseñas: un 4,9 con 15 reseñas vale menos que un 4,8 con 400. Solo cuentan los negocios con al menos ${min} reseñas. Notas comprobadas el ${date}. Nadie paga por aparecer en esta clasificación.`,
    allPlaces: "Todos los negocios",
    chip: "Los más valorados",
    rank: (n) => `${n}º`,
  },
  pt: {
    h1: (name, where) => `${name} ${where}`,
    metaTitle: (name, where, n, year) => [`${name} ${where}: top ${n} (${year}) | Pawenn`, `${name} ${where}: top ${n} (${year})`, `${name} ${where} (${year})`, `${name} ${where}`],
    metaDescription: (n, where) =>
      `Os ${n} espaços com melhor classificação ${where}, com base na nota do Google e no número de avaliações, e o que os clientes mais elogiam.`,
    lead: (n) =>
      `Os ${n} espaços com melhor classificação no Google, ponderados pelo número de avaliações. Em cada um: o que os clientes mais elogiam, a partir do nosso resumo das avaliações recentes.`,
    praised: "O que os clientes mais elogiam",
    mention: "Alguns referem",
    reviewsSummarised: (n) => `a partir de ${n} ${n === 1 ? "avaliação recente" : "avaliações recentes"}`,
    howTitle: "Como elaborámos a classificação",
    how: (min, date) =>
      `Pela classificação no Google, ponderada pelo número de avaliações: um 4,9 com 15 avaliações fica abaixo de um 4,8 com 400. Apenas contam espaços com pelo menos ${min} avaliações. Avaliações verificadas a ${date}. Nenhum espaço paga para figurar nesta lista.`,
    allPlaces: "Todos os espaços",
    chip: "Melhor classificados",
    rank: (n) => `${n}.º`,
  },
  no: {
    h1: (name, where) => `${name} ${where}`,
    metaTitle: (name, where, n, year) => [`${name} ${where}: topp ${n} (${year}) | Pawenn`, `${name} ${where}: topp ${n} (${year})`, `${name} ${where} (${year})`, `${name} ${where}`],
    metaDescription: (n, where) =>
      `De ${n} best vurderte stedene ${where}, rangert etter Google-vurdering og antall anmeldelser, og hva kundene roser mest.`,
    lead: (n) =>
      `De ${n} stedene med de beste vurderingene på Google, vektet etter hvor mange som har vurdert dem. For hvert sted: hva kundene roser mest, basert på vår oppsummering av ferske anmeldelser.`,
    praised: "Hva kundene roser mest",
    mention: "Noen nevner",
    reviewsSummarised: (n) => `basert på ${n} ferske ${n === 1 ? "anmeldelse" : "anmeldelser"}`,
    howTitle: "Slik rangerte vi",
    how: (min, date) =>
      `Etter Google-vurdering, vektet etter antall anmeldelser: 4,9 fra 15 personer rangeres under 4,8 fra 400. Kun steder med minst ${min} anmeldelser. Vurderinger sjekket ${date}. Ingen betaler for å stå på denne listen.`,
    allPlaces: "Alle steder",
    chip: "Best vurdert",
    rank: (n) => `Nr. ${n}`,
  },
  nl: {
    h1: (name, where) => `${name} ${where}`,
    metaTitle: (name, where, n, year) => [`${name} ${where}: top ${n} (${year}) | Pawenn`, `${name} ${where}: top ${n} (${year})`, `${name} ${where} (${year})`, `${name} ${where}`],
    metaDescription: (n, where) =>
      `De ${n} best beoordeelde bedrijven ${where}, gerangschikt op Google-score en aantal beoordelingen – en waar klanten het meest tevreden over zijn.`,
    lead: (n) =>
      `De ${n} bedrijven met de beste Google-scores, gewogen naar het aantal beoordelingen. Bij elk bedrijf: wat klanten het meest waarderen, uit onze samenvatting van recente recensies.`,
    praised: "Wat klanten waarderen",
    mention: "Sommigen noemen",
    reviewsSummarised: (n) => `op basis van ${n} recente ${n === 1 ? "recensie" : "recensies"}`,
    howTitle: "Hoe we de ranglijst hebben samengesteld",
    how: (min, date) =>
      `Op basis van de Google-score, gewogen naar het aantal beoordelingen: een 4,9 van 15 personen staat lager dan een 4,8 van 400. Alleen bedrijven met minimaal ${min} beoordelingen. Beoordelingen gecontroleerd op ${date}. Niemand betaalt voor een plek op deze lijst.`,
    allPlaces: "Alle bedrijven",
    chip: "Best beoordeeld",
    rank: (n) => `Nr. ${n}`,
  },
  fi: {
    h1: (name, where) => `${name} ${where}`,
    metaTitle: (name, where, n, year) => [`${name} ${where}: parhaat ${n} (${year}) | Pawenn`, `${name} ${where}: parhaat ${n} (${year})`, `${name} ${where} (${year})`, `${name} ${where}`],
    metaDescription: (n, where) =>
      `Parhaat ${n} paikkaa ${where} Google-arvostelujen ja tähtiluokituksen mukaan sekä mitä asiakkaat kehuvat eniten.`,
    lead: (n) =>
      `Parhaat ${n} paikkaa Googlen tähtiluokituksen mukaan, painotettuna arvostelujen määrällä. Jokaisen kohdalla näet, mitä asiakkaat kehuvat tuoreissa arvosteluissa.`,
    praised: "Mitä asiakkaat kehuvat",
    mention: "Osa mainitsee",
    reviewsSummarised: (n) => `koottu ${n} tuoreesta arvostelusta`,
    howTitle: "Miten järjestys muodostuu",
    how: (min, date) =>
      `Google-arvosanan mukaan, painotettuna arvostelujen määrällä: 15 arvioijan 4,9 sijoittuu alemmas kuin 400 arvioijan 4,8. Mukana ovat vain paikat, joilla on vähintään ${min} arvostelua. Arviot tarkistettu ${date}. Yksikään paikka ei maksa listalla olemisesta.`,
    allPlaces: "Kaikki paikat",
    chip: "Parhaat arviot",
    rank: (n) => `Sija ${n}`,
  },
  hu: {
    h1: (name, where) => `${name} ${where}`,
    metaTitle: (name, where, n, year) => [`${name} ${where}: top ${n} (${year}) | Pawenn`, `${name} ${where}: top ${n} (${year})`, `${name} ${where} (${year})`, `${name} ${where}`],
    metaDescription: (n, where) =>
      `A(z) ${n} legjobbra értékelt hely ${where}, a Google-értékelések és a vélemények száma alapján, valamint amit a vendégek a leginkább dicsérnek.`,
    lead: (n) =>
      `A(z) ${n} legjobb Google-értékelésű hely, a vélemények számával súlyozva. Mindegyiknél bemutatjuk, amit a vendégek a leginkább dicsérnek a friss vélemények alapján.`,
    praised: "Amit a vendégek leginkább dicsérnek",
    mention: "Néhányan megjegyzik",
    reviewsSummarised: (n) => `${n} friss vélemény alapján`,
    howTitle: "Hogyan állítottuk össze a rangsort",
    how: (min, date) =>
      `A Google-értékelések alapján, a vélemények számával súlyozva: egy 15 értékeléses 4,9 hátrébb rangsorol, mint egy 400 értékeléses 4,8. Csak a legalább ${min} értékeléssel rendelkező helyek szerepelnek. Az értékelések ellenőrizve: ${date}. Egyetlen szolgáltató sem fizet a rangsorban való megjelenésért.`,
    allPlaces: "Minden szolgáltató",
    chip: "Legjobbra értékeltek",
    rank: (n) => `${n}.`,
  },
  ja: {
    h1: (name, where) => `${name} ${where}`,
    metaTitle: (name, where, n, year) => [`${name} ${where}: top ${n} (${year}) | Pawenn`, `${name} ${where}: top ${n} (${year})`, `${name} ${where} (${year})`, `${name} ${where}`],
    metaDescription: (n, where) =>
      `${where}でGoogleのクチコミ評価が高い上位${n}件を厳選。評価点とクチコミ件数を独自集計し、利用者の評判やおすすめポイントをまとめました。`,
    lead: (n) =>
      `Googleマップのクチコミ評価と投稿件数をもとに算出した、高評価の${n}件です。各店舗・クリニックについて、直近のクチコミ要約から利用者に高く評価されているポイントをご紹介します。`,
    praised: "利用者が高く評価している点",
    mention: "気になるポイント・その他の声",
    reviewsSummarised: (n) => `直近のクチコミ${n}件より要約`,
    howTitle: "掲載順位の算出方法",
    how: (min, date) =>
      `Googleの評価点とクチコミ件数を掛け合わせたベイズ平均で算出しています（例：評価4.9で15件よりも、評価4.8で400件の施設が上位になります）。クチコミ件数が${min}件以上の施設のみが対象です。評価データ確認日：${date}。広告料等による順位の優遇は一切ありません。`,
    allPlaces: "すべての施設を見る",
    chip: "高評価順",
    rank: (n) => `第${n}位`,
  },
};
