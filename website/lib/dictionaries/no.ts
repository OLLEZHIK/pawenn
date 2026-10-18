// Norwegian (Bokmål) UI strings (docs/playbooks/add-language.md, step 2). "{where}"
// arrives ready-made from in_city ("i Oslo", "i Bergen").
// The language is switched on in step 3 (lib/locales.ts, lib/i18n.ts).
import type { Dictionary } from "./en";

const cap = (text: string): string => text.charAt(0).toUpperCase() + text.slice(1);

const plural = (_lang: "no", n: number, forms: { one: string; other: string }): string =>
  n === 1 ? forms.one : forms.other;

export const no: Dictionary = {
  nav: {
    browse: "Utforsk",
    help: "Hjelp",
    listBusiness: "Registrer bedriften din på pawenn",
    findCare: "Finn dyretjenester",
    browseServices: "Utforsk",
    services: "Tjenester",
    foodAndSupplies: "Fôr og utstyr",
    comingSoon: "Kommer snart",
    howItWorks: "Hjelp: slik fungerer pawenn",
    listYourBusiness: "Legg til bedrift",
    openMenu: "Utforsk",
    closeMenu: "Lukk meny",
    language: "Språk",
    locating: "Finner byen din…",
  },
  food: [
    { label: "Hundefôr", blurb: "Det beste fôret tilpasset hundens rase og alder" },
    { label: "Kattefôr", blurb: "Våtfôr, tørrfôr og spesialdietter" },
    { label: "Tilskudd", blurb: "Ledd, hud, pels og fordøyelse" },
  ],
  footer: {
    tagline: (where: string | null) =>
      `En vennlig og uavhengig veiviser for dyretjenester${where ? ` ${where}` : ""}. Ingen registrering, ingen reklame – bare opplysningene du trenger for å ta kontakt.`,
    sourced: "Hver oppføring lenker til kilden",
    services: "Tjenester",
    about: "pawenn",
    legal: "Juridisk",
    howItWorks: "Slik fungerer det",
    addBusiness: "Legg til bedrift",
    fixListing: "Rett opp en oppføring",
    privacy: "Personvernerklæring",
    terms: "Brukervilkår",
    madeWithCare: (where: string | null) => `Laget med omtanke for kjæledyr${where ? ` ${where}` : ""}`,
    cities: "Byer",
  },
  cityHub: {
    metaTitle: (where: string) => `Dyretjenester ${where} – veterinærer, hundefrisører, dyrehotell | Pawenn`,
    metaDescription: (n: number, where: string) =>
      `${n} ${plural("no", n, { one: "tjeneste", other: "tjenester" })} for kjæledyr ${where}: veterinærer, hundefrisører, dyrehotell, hundekurs, dyrebutikker og dyrepassere, med åpningstider, priser og kontakt med ett trykk.`,
    h1Before: "Dyretjenester",
    intro:
      "Alle dyretjenester samlet på én side: veterinærer, hundefrisører, dyrehotell, hundetrenere, dyrebutikker og dyrepassere, hver med kilde. Nedenfor viser vi noen steder per tjeneste; velg en tjeneste øverst for hele listen.",
  },
  animals: {
    any: "Alle kjæledyr",
    choose: "Hvilket kjæledyr?",
    dog: "Hunder",
    cat: "Katter",
    "small-pet": "Smådyr",
    bird: "Fugler",
    fish: "Fisk",
  } as Record<string, string>,
  animalSingular: {
    dog: "Hund",
    cat: "Katt",
    "small-pet": "Smådyr",
    bird: "Fugl",
    fish: "Fisk",
  } as Record<string, string>,
  home: {
    /** `where` is null once the site covers several cities. */
    metaTitle: (where: string | null) => `Dyretjenester${where ? ` ${where}` : ""} – veterinærer, hundefrisører, dyrehotell | Pawenn`,
    metaDescription: (where: string | null) =>
      `Finn pålitelige dyretjenester${where ? ` ${where}` : ""} – hundefrisører, veterinærer, dyrehotell, hundekurs og mer`,
    h1: "Fornøyd kjæledyr, trygg eier",
    subtitle:
      "Veterinærer, hundefrisører, dyrehotell og hundetrenere med telefon, åpningstider og priser. Hver oppføring viser hvor opplysningene er hentet fra og når vi sjekket dem.",
    popular: "Populært:",
    statCities: (n: number): string => plural("no", n, { one: "by", other: "byer" }),
    statPlaces: (n: number): string => plural("no", n, { one: "registrert sted", other: "registrerte steder" }),
    statCountries: (n: number): string => plural("no", n, { one: "land", other: "land" }),
    statKinds: (n: number): string => plural("no", n, { one: "type tjeneste", other: "typer tjenester" }),
    statPeople: "mennesker Pawenn kan hjelpe",
    browseEyebrow: "Utforsk etter tjeneste",
    browseTitle: "Hva trenger kjæledyret ditt i dag?",
    browseBody: "Seks typer omsorg for kjæledyr, hver med en liste over steder og kilde for hver oppføring.",
    places: (n: number) => `${n} ${plural("no", n, { one: "sted", other: "steder" })}`,
    placesInCities: (n: number, cities: number) =>
      `${n} ${plural("no", n, { one: "sted", other: "steder" })} i ${cities} ${plural("no", cities, { one: "by", other: "byer" })}`,
    chooseCityTitle: (label: string) => `${label}: velg en by`,
    chooseCityIntro: "Velg din by eller la oss finne den nærmeste.",
    nearMe: "Nærmest meg",
    exploreEyebrow: "Utforsk byen",
    exploreTitle: (city: string) => `Hva finnes i ditt område av ${city}?`,
    exploreBody: "Trykk på en bydel for å se hva som finnes i nærheten. Jo større boble, desto flere steder er registrert.",
    partnersEyebrow: "Partnere",
    partnersTitle: "Utvalgte partnere",
    partnersBody: "Sponsede oppføringer: alltid tydelig merket og aldri blandet inn i den vanlige rekkefølgen.",
    howEyebrow: "Slik fungerer det",
    howTitle: "Fra «jeg trenger en hundefrisør» til en telefonsamtale på under ett minutt",
    steps: [
      { title: "Velg det du trenger", body: "Velg kjæledyr, tjeneste og bydel, eller bare utforsk en kategori." },
      {
        title: "Sammenlign trygt",
        body: "Hver oppføring lenker til kilden for opplysningene. Sponsede plasser er alltid merket.",
      },
      {
        title: "Ta direkte kontakt",
        body: "Ring, åpne nettsiden eller finn veien med ett trykk. Ingen konto og ingen bestillingsgebyrer.",
      },
    ],
    howLink: "Slik verifiserer vi oppføringene",
    careEyebrow: "Tips for kjæledyret",
    careTitle: "Test kunnskapene dine og få et godt råd",
    careBody: "En rask quiz om vanlige myter om kjæledyr og noen gode vaner det lønner seg å ha.",
    tips: [
      {
        title: "Klipp klørne hver 3. til 4. uke",
        body: "For lange klør endrer potestillingen hos hunder og katter og brekker lettere. En rask kloklipp med noen ukers mellomrom holder potene friske og behagelige.",
      },
      {
        title: "Hvorfor trenger katten et klorestativ?",
        body: "Det handler ikke om møblene dine: kloring strekker musklene, fjerner slitte ytterlag på klørne og markerer revir. Katter klorer uansett om de har et stativ eller ikke.",
      },
      {
        title: "Tegn på at det er på tide med et veterinærbesøk",
        items: [
          "Spiser eller drikker merkbart mer eller mindre enn vanlig",
          "Halter eller nøler med å hoppe",
          "Enhver endring i allmenntilstand som varer mer enn et par dager",
        ],
      },
      {
        title: "Børst korthårede hunder ukentlig, og langhårede hunder daglig",
        body: "Jevnlig børsting oppdager floker før de må barberes bort, og er mye rimeligere enn et frisørbesøk for tovet pels.",
      },
    ] as { title: string; body?: string; items?: string[] }[],
    ctaTitle: (where: string | null) => `Driver du en bedrift for kjæledyr${where ? ` ${where}` : ""}?`,
    ctaBody: "Legg til salongen, klinikken eller hotellet ditt, eller gi oss beskjed hvis noen opplysninger må oppdateres.",
    ctaButton: "Legg til eller rett en oppføring",
  },
  search: {
    pet: "Kjæledyr",
    service: "Tjeneste",
    where: "Hvor",
    petPlaceholder: "Hvilket kjæledyr?",
    servicePlaceholder: "Hva trenger du?",
    all: (city: string) => `Hele ${city}`,
    search: "Søk",
    showResults: "Vis resultater",
    stepPet: "1 · Ditt kjæledyr",
    stepService: "2 · Tjeneste",
    stepWhere: "3 · Hvor",
    popular: "Populære",
    close: "Lukk",
    nearMe: "Nær meg",
    nearYou: "Nær deg",
    locatingYou: "Finner posisjonen din…",
    geoDenied: "Helt i orden: skriv inn byen din.",
    cityPlaceholder: "Din by",
    cityLabel: "By",
    cityNotCovered: (typed: string, cities: string) => `Vi er dessverre ikke i ${typed} ennå. Pawenn finnes i: ${cities}.`,
    geoFar: (city: string) => `Vi dekker ikke ditt område ennå: skriv inn en by, f.eks. ${city}.`,
    dialogTitle: "Finn dyretjenester",
    dialogBody: "Velg kjæledyr og hva du trenger, så viser vi de nærmeste stedene.",
  },
  explorer: {
    district: (city: string) => `Bydel i ${city}`,
    placesListed: (n: number): string => plural("no", n, { one: "registrert sted", other: "registrerte steder" }),
    tabs: "Bydeler",
  },
  quiz: {
    title: "Myte eller fakta?",
    question: (i: number, n: number) => `Spørsmål ${i} av ${n}`,
    myth: "Myte",
    fact: "Fakta",
    correct: "Riktig!",
    notQuite: "Ikke helt.",
    itsA: (isFact: boolean) => `Det er ${isFact ? "fakta" : "en myte"}.`,
    next: "Neste spørsmål",
    seeScore: "Se resultatet mitt",
    playAgain: "Spill igjen",
    perfect: "Alt riktig! Kjæledyret ditt er i de beste hender.",
    good: "Kjempebra! Det merkes at du kan dette.",
    meh: "Noen overraskelser underveis – nå vet du det!",
    statements: [
      {
        claim: "En varm og tørr snute betyr at hunden er syk.",
        isFact: false,
        explanation:
          "Snuten kan variere i både temperatur og fuktighet gjennom dagen hos helt friske hunder. Matlyst, energinivå og oppførsel er langt tryggere tegn å følge med på.",
      },
      {
        claim: "Sjokolade er giftig for hunder.",
        isFact: true,
        explanation:
          "Sjokolade inneholder teobromin, et stoff hunder bryter ned svært sakte. Mørk sjokolade og kokesjokolade er spesielt farlig.",
      },
      {
        claim: "En skål med melk er en fin godbit for en voksen katt.",
        isFact: false,
        explanation:
          "Mange voksne katter er laktoseintolerante, og melk kan føre til mageknip og diaré. Friskt vann er alt de trenger.",
      },
      {
        claim: "Druer og rosiner kan være livsfarlige for hunder.",
        isFact: true,
        explanation:
          "De kan forårsake akutt nyresvikt hos enkelte hunder, og det finnes ingen kjent trygg mengde. Hold dem alltid utilgjengelige.",
      },
      {
        claim: "En hund som logrer med halen er alltid glad.",
        isFact: false,
        explanation:
          "Halebevegelser viser opphisselse eller oppmerksomhet: det kan være glede, men også usikkerhet eller spenning. Se på hele kroppen, ikke bare halen.",
      },
      {
        claim: "Katter lander alltid på potene, så fall fra balkong er ufarlig.",
        isFact: false,
        explanation:
          "Katter har en naturlig retterefleks, men fall fra vinduer og balkonger fører til alvorlige skader hvert eneste år. Sikre balkongen med nett.",
      },
      {
        claim: "Innekatter har også god nytte av vaksiner.",
        isFact: true,
        explanation:
          "Smitte kan bli dratt med inn via sko og klær, og innekatter må også til veterinær eller kattehotell. Hør med veterinæren din hvilke kjerne-vaksiner som anbefales.",
      },
    ],
  },
  listing: {
    home: "Hjem",
    browseCount: (count: number, what: string, where: string) =>
      `Utforsk ${count} ${what} ${where}, med kilde for hver oppføring.`,
    listed: "registrerte",
    verified: "verifiserte",
    priceRange: "prisklasse",
    districts: "bydeler",
    from: "fra",
    otherServices: "Andre tjenester",
    filterDistrict: "Filtrer etter bydel",
    allOf: (city: string) => `Hele ${city}`,
    results: (n: number) => `${n} ${plural("no", n, { one: "resultat", other: "resultater" })}`,
    seeAll: (label: string, n: number) => `Alle ${label.toLowerCase()} (${n})`,
    showAll: (n: number) => `Vis alle (${n})`,
    pagination: { label: "Sider", page: (n: number) => `Side ${n}`, prev: "Forrige side", next: "Neste side", showing: (from: number, to: number, total: number) => `Viser ${from}–${to} av ${total}` },
    fairTurn: "rekkefølgen rullerer daglig for å gi alle samme synlighet",
    nearest: "nærmeste først",
    sortLabel: "Sorter",
    sortRecommended: "Anbefalt",
    sortNearest: "Nærmeste",
    sortRating: "Beste vurdering",
    sortReviews: "Flest anmeldelser",
    ratingFirst: "best vurdering først",
    reviewsFirst: "flest anmeldelser først",
    filterRating: "Filtrer etter Google-vurdering",
    ratingAny: "Alle vurderinger",
    hiddenUnrated: (n: number) => `${n} uten vurdering skjult`,
    openNowFilter: "Åpent nå",
    allServices: "Alle tjenester",
    picker: { service: "Tjeneste", where: "Hvor", filters: "Filtre", searchCity: "Søk by", done: "Ferdig", rating: "Vurdering" },
    geoOff: "Posisjon er slått av: viser alle steder.",
    hiddenNoHours: (n: number) => `${n} uten åpningstider skjult`,
    kmAway: (km: string) => `${km} km unna`,
    goodToKnow: "Kjekt å vite",
    faqTitle: "Ofte stilte spørsmål",
    byDistrict: "Etter bydel",
    missingTitle: "Kjenner du til et sted vi mangler?",
    missingBody: "Tips oss gjerne, eller si fra om opplysninger som må oppdateres.",
    missingLink: "Legg til eller rett en oppføring",
    emptyTitle: "Fant ingen treff her ennå",
    emptyBody: "Ingen steder matcher disse filtrene. Prøv en annen bydel eller et annet kjæledyr.",
    reset: "Tilbakestill filtre",
    metaTitle: (label: string, where: string) => `${label} ${where} | Pawenn`,
    metaDescription: (count: number, what: string, where: string) =>
      `Sammenlign ${count} ${what} ${where}: bydel, kjæledyr de tar imot, og ett trykk for å ringe, åpne nettsiden eller finne veien.`,
    faqCount: (pluralStr: string, where: string) => `Hvor mange ${pluralStr} finnes det ${where}?`,
    faqCountAnswer: (n: number, singular: string, where: string) =>
      `Det er for øyeblikket registrert ${n} ${singular} ${where}.`,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- some languages need the plural label here
    faqPrice: (singular: string, where: string, _pluralLabel: string) => `Hva koster ${singular} ${where}?`,
    faqPriceAnswer: (range: string) => `Prisene blant de registrerte bedriftene varierer fra ${range}, basert på publiserte prislister.`,
    faqVerified: (pluralStr: string, where: string) => `Hvilke ${pluralStr} ${where} er verifisert?`,
    faqVerifiedAnswer: (v: number, n: number, pct: number) =>
      `${v} av ${n} oppføringer (${pct} %) har opplysningene manuelt kontrollert.`,
  },
  card: {
    priceLevel: (tier: number) => `Prisnivå ${tier} av 5`,
    /** Against the city market price (lib/priceMarket.ts): 0 = within the market band. */
    vsMarket: (pct: number, marketBand: boolean): string =>
      marketBand ? "Snitt i byen" : pct < 0 ? "Under gjennomsnittet" : "Over gjennomsnittet",
    vsMarketHint: "Sammenlignet med gjennomsnittsprisen for samme tjenester i byen",
    /** Card of a place with no published price (not for pet shops). */
    priceOnRequest: "Pris på forespørsel",
  },
  rating: {
    countGoogle: (count: string) => `${count} · Google`,
    aria: (value: string, count: number) => `Vurdering ${value} av 5 basert på ${count} anmeldelser på Google`,
  },
  insights: {
    title: "Hva kundene sier",
    summary: (n: number, period: string) => `pawenn-sammendrag av ${n} anmeldelser på Google, ${period}`,
    allOnGoogle: "Alle anmeldelser på Google",
    disclosure: "Sammendrag av offentlige Google-anmeldelser; pawenn verifiserer dem ikke.",
    sentiment: { positive: "Overveiende positive", mixed: "Blandede", negative: "Overveiende negative" },
    mentions: (m: number, n: number) => `${m} av ${n} anmeldelser`,
    faqTitle: "Vanlige spørsmål fra eiere",
    shortNote: "Det finnes ennå ikke noe pawenn-sammendrag for dette stedet. Vurdering og alle anmeldelser finnes på Google.",
  },
  vetNow: {
    button: "Veterinær åpen nå",
    buttonHint: "Nærmeste veterinærer som har åpent akkurat nå",
    locating: "Finner posisjonen din…",
    callFirst: "Ring før du drar: forklar hva som har skjedd og sjekk at de har mulighet til å ta dere imot nå.",
    noneOpen: "Ingen veterinærer med oppgitte åpningstider har åpent akkurat nå. De neste som åpner:",
    opensToday: (time: string) => `åpner i dag kl. ${time}`,
    opensTomorrow: (time: string) => `åpner i morgen kl. ${time}`,
    opensLater: (date: string, time: string) => `åpner ${date} kl. ${time}`,
    nonstopTitle: "Døgnåpent",
  },
  /** Analytics consent banner (GA4 runs only after "allow"). */
  consent: {
    text: "Vi vil gjerne bruke analysecookies fra Google Analytics og Microsoft Clarity (inkludert anonyme skjermopptak) for å forstå hvordan nettstedet brukes og forbedre det. Kun hvis du godkjenner det.",
    allow: "Godkjenn",
    decline: "Avslå",
    settings: "Innstillinger for informasjonskapsler",
  },
  actions: { call: "Ring", website: "Nettside", route: "Veibeskrivelse" },
  badges: { verified: (date: string) => `Verifisert ${date}`, partner: "Partner" },
  business: {
    metaTitle: (name: string, label: string, where: string) => `${name} - ${label}${where ? ` ${where}` : ""}`,
    metaDescription: (name: string, where: string) =>
      `${name}${where ? ` ${where}` : ""}: adresse, kontaktinfo og veibeskrivelse.`,
    /** After the place's own short description (SEO audit T11). */
    metaDescriptionTail: (hasPrices: boolean) =>
      `Åpningstider${hasPrices ? ", priser" : ""}, telefon og veibeskrivelse.`,
    about: "Om bedriften",
    goodToKnow: "Kjekt å vite",
    goodToKnowNote: "Slik bedriften selv opplyser på nettsiden sin.",
    faqTitle: "Spørsmål før du ringer",
    cityPricesTitle: (where: string) => `Gjennomsnittspriser ${where}`,
    cityPricesIntro: "Dette stedet har ikke publisert priser. Gjennomsnitt for byen, ikke dette stedets priser:",
    welcomes: "Tar imot",
    specialties: "Fagområder",
    openingHours: "Åpningstider",
    prices: "Priser",
    standard: "Standard",
    sizes: { MINI: "mini", SMALL: "liten", MEDIUM: "middels", LARGE: "stor", XL: "XL" } as Record<string, string>,
    location: "Beliggenhet",
    openInMaps: "Åpne i Maps",
    mapTitle: (name: string) => `Kart som viser beliggenheten til ${name}`,
    reviews: "Anmeldelser",
    reviewsCount: (n: number) => `(${n} ${plural("no", n, { one: "anmeldelse", other: "anmeldelser" })})`,
    fromN: (n: number) => `av ${n}`,
    noReviews: "Ingen anmeldelser ennå. Har du vært her med kjæledyret ditt? Vær den første til å skrive en omtale.",
    leaveReview: "Skriv en anmeldelse",
    getInTouch: "Kontakt",
    phone: "Telefon",
    website: "Nettside",
    email: "E-post",
    address: "Adresse",
    noFees: "Ta direkte kontakt med bedriften: pawenn tar ingen bestillingsgebyrer.",
    keepExploring: "Utforsk videre",
    moreNearby: (label: string) => `Flere ${label.toLowerCase()} i nærheten`,
    seeAll: "Vis alle",
    infoVerified: (date: string) => `Opplysninger verifisert: ${date}`,
    source: "kilde:",
    reportIssue: "Meld fra om feil",
    days: { mo: "Mandag", tu: "Tirsdag", we: "Onsdag", th: "Torsdag", fr: "Fredag", sa: "Lørdag", su: "Søndag" } as Record<string, string>,
    openNow: "Åpent nå",
    closedNow: "Stengt nå",
    closedDay: "Stengt",
    allDay: "Døgnåpent",
    sections: { label: "Seksjoner på denne siden", contact: "Kontakt", prices: "Priser", about: "Om bedriften", reviews: "Anmeldelser", location: "Beliggenhet" },
    showMore: "Vis mer",
    showLess: "Vis mindre",
    byAppointment: "Kun timebestilling",
    hoursChecked: (date: string) => `Åpningstider kontrollert ${date}`,
    nonstop: "Døgnåpent 24/7",
    emergency: "Akuttvakt",
    // "Hundefrisør i " + <district> + ", Oslo"
    placeIn: { before: (singular: string) => `${cap(singular)} i ` },
    homeVisits: "Hjemmebesøk",
    languages: (list: string) => `Personalet snakker ${list}`,
    instagram: "Instagram",
    facebook: "Facebook",
    cityAverage: (price: string) => `Gjennomsnitt i byen ${price}`,
    lessBy: (amount: string) => `${amount} billigere`,
    moreBy: (amount: string) => `${amount} dyrere`,
    allPrices: (n: number) => `Alle priser (${n})`,
    priceFrom: (price: string) => `fra ${price}`,
    weightUpTo: (kg: string) => `opptil ${kg} kg`,
    weightOver: (kg: string) => `over ${kg} kg`,
    weightRange: (from: string, to: string) => `${from}–${to} kg`,
    pricesChecked: (date: string) => `Kontrollert ${date}`,
    priceList: "prisliste",
    perUnit: { per_hour: "/ time", per_km: "/ km" } as Record<string, string>,
    notCompared: "ikke sammenlignet med andre steder",
    pricesDisclaimer: "Priser slik de er oppgitt av bedriften på nevnte dato. Prisene kan endres: sjekk alltid før bestilling.",
  },
  reviewForm: {
    name: "Ditt navn",
    rating: "Vurdering",
    stars: (n: number) => `${n} ${plural("no", n, { one: "stjerne", other: "stjerner" })}`,
    review: "Anmeldelse",
    submit: "Send inn anmeldelse",
    submitting: "Sender inn...",
    thanks: "Tusen takk! Anmeldelsen din publiseres etter en rask gjennomgang.",
    error: "Det oppsto en feil.",
  },
  notFound: {
    title: "Vi har mistet sporet",
    body: "Vi har snust overalt, men finner ikke denne siden. Kanskje den har flyttet seg eller lenken inneholder en feil.",
    back: "Tilbake til forsiden",
  },
  // Attribute pages (lib/attributePages.ts): chip label, crumb, H1, the
  // one-sentence answer (n of total places), title and description.
  attributes: {
    nonstop: {
      chip: "Døgnåpent",
      h1: (where: string) => `Døgnåpne veterinærer ${where}`,
      lead: (n: number, total: number) =>
        `${n} av ${total} dyreklinikker tar imot pasienter hele døgnet, 7 dager i uken. Ring alltid før du reiser inn.`,
      metaTitle: (where: string) => `Veterinærvakt ${where} – døgnåpne klinikker | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} ${plural("no", n, { one: "dyreklinikk", other: "dyreklinikker" })} ${where} med døgnvakt 24 timer i døgnet, 7 dager i uken: adresse, telefon og veibeskrivelse.`,
    },
    saturday: {
      chip: "Åpent på lørdager",
      h1: (where: string) => `Veterinærer åpne på lørdager ${where}`,
      lead: (n: number, total: number) => `${n} av ${total} dyreklinikker har åpent på lørdager. Detaljerte åpningstider nedenfor, kontrollert mot hver klinikk.`,
      metaTitle: (where: string) => `Veterinærer åpne på lørdager ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} ${plural("no", n, { one: "dyreklinikk", other: "dyreklinikker" })} ${where} som har åpent på lørdager, med åpningstider, telefon og veibeskrivelse.`,
    },
    sunday: {
      chip: "Åpent på søndager",
      h1: (where: string) => `Veterinærer åpne på søndager ${where}`,
      lead: (n: number, total: number) => `${n} av ${total} dyreklinikker har åpent på søndager. Detaljerte åpningstider nedenfor, kontrollert mot hver klinikk.`,
      metaTitle: (where: string) => `Veterinærer åpne på søndager ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} ${plural("no", n, { one: "dyreklinikk", other: "dyreklinikker" })} ${where} som har åpent på søndager, med åpningstider, telefon og veibeskrivelse.`,
    },
    exotics: {
      chip: "Eksotiske dyr",
      h1: (where: string) => `Veterinærer for eksotiske kjæledyr ${where}`,
      lead: (n: number, total: number) =>
        `${n} av ${total} dyreklinikker behandler eksotiske dyr (reptiler, fugler og gnagere). Ring på forhånd for å bekrefte din dyreart.`,
      metaTitle: (where: string) => `Veterinærer for eksotiske kjæledyr ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} ${plural("no", n, { one: "dyreklinikk", other: "dyreklinikker" })} ${where} som behandler eksotiske dyr: reptiler, fugler og gnagere. Åpningstider, telefon og veibeskrivelse.`,
    },
    "home-visits": {
      chip: "Hjemmebesøk",
      h1: (where: string) => `Veterinærer med hjemmebesøk ${where}`,
      lead: (n: number, total: number) => `${n} av ${total} dyreklinikker tilbyr hjemmebesøk.`,
      metaTitle: (where: string) => `Veterinær med hjemmebesøk ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} ${plural("no", n, { one: "dyreklinikk", other: "dyreklinikker" })} ${where} med tilbud om hjemmebesøk: telefon, åpningstider og tjenester de tilbyr.`,
    },
    english: {
      chip: "Engelsktalende",
      h1: (where: string) => `Engelsktalende veterinærer ${where}`,
      lead: (n: number, total: number) =>
        `${n} av ${total} dyreklinikker oppgir på sin egen nettside at de betjener kunder på engelsk. Ring gjerne på forhånd for å sjekke hvem som er på vakt.`,
      metaTitle: (where: string) => `Engelsktalende veterinærer ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} ${plural("no", n, { one: "dyreklinikk", other: "dyreklinikker" })} ${where} som betjener kunder på engelsk ifølge egen nettside: åpningstider, telefon og veibeskrivelse.`,
    },
  },
  // Price pages (lib/pricePages.ts): one per service and city, plus an
  // overview per category. Numbers come preformatted (money, dates).
  prices: {
    crumb: "Priser",
    overviewH1: (name: string, where: string) => `${name} ${where}`,
    overviewMetaTitle: (name: string, where: string) => `${name} ${where} | Pawenn`,
    overviewIntro:
      "Hva koster de ulike tjenestene, sammenlignet på tvers av steder som har publisert prisliste. Det oppgitte gjennomsnittet er medianprisen: halvparten tar mindre, og halvparten tar mer.",
    overviewMetaDescription: (label: string, where: string, services: number) =>
      `${label} ${where}: priser på ${services} ${plural("no", services, { one: "tjeneste", other: "tjenester" })} sammenlignet mellom bedrifter, med snittpris og prisspenn. Hentet fra offentlige prislister med dato.`,
    serviceH1: (service: string, where: string) => `${service} ${where}: priser`,
    serviceMetaTitle: (service: string, where: string, from: string) => `${service} ${where} – fra ${from} | Pawenn`,
    /** Meta description of a service price page: "<service> <where>:" + the answer, the cheapest place in between. */
    serviceMetaLead: (service: string, where: string) => `${service} ${where}:`,
    cheapest: (name: string, price: string) => `Rimeligst: ${name}, ${price}.`,
    answer: (from: string, to: string, median: string, places: number, date: string) =>
      `Koster fra ${from} til ${to}, snitt ${median}. Vi har sammenlignet ${places} ${plural("no", places, { one: "sted", other: "steder" })}; priser kontrollert ${date}.`,
    fewPlaces: (places: number) =>
      `Foreløpig har bare ${places} ${plural("no", places, { one: "sted", other: "steder" })} oppgitt denne prisen: for få til å sammenligne.`,
    question: (service: string, where: string) => `Hva koster ${service.toLowerCase()} ${where}?`,
    includes: "Hva prisen inkluderer",
    place: "Sted",
    price: "Pris",
    vsMarket: "Mot snittet i byen",
    notComparedTitle: "Andre priser (ikke sammenlignet)",
    notComparedIntro: "Delpriser og satser per time eller per kilometer.",
    otherServices: "Andre priser",
    service: "Tjeneste",
    range: "Prisspenn",
    median: "Snitt",
    places: "Steder",
    seeAll: (label: string) => `Alle: ${label.toLowerCase()}`,
    linkFromListing: (where: string) => `Priser ${where}`,
    source: "prisliste",
  },
};
