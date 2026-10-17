// Dutch UI strings (docs/playbooks/add-language.md, step 2). "{where}"
// arrives ready-made from in_city ("in Amsterdam", "in Rotterdam", "in Den Haag").
// The language is switched on in step 3 (lib/locales.ts, lib/i18n.ts).
import type { Dictionary } from "./en";

const cap = (text: string): string => text.charAt(0).toUpperCase() + text.slice(1);

const plural = (_lang: "nl", n: number, forms: { one: string; other: string }): string =>
  n === 1 ? forms.one : forms.other;

export const nl: Dictionary = {
  nav: {
    browse: "Verkennen",
    help: "Hulp",
    listBusiness: "Meld uw bedrijf aan op pawenn",
    findCare: "Vind huisdierzorg",
    browseServices: "Verkennen",
    services: "Diensten",
    foodAndSupplies: "Voeding & benodigdheden",
    comingSoon: "Binnenkort beschikbaar",
    howItWorks: "Hulp: hoe werkt pawenn",
    listYourBusiness: "Bedrijf aanmelden",
    openMenu: "Verkennen",
    closeMenu: "Menu sluiten",
    language: "Taal",
    locating: "Uw stad zoeken…",
  },
  food: [
    { label: "Hondenvoer", blurb: "Het beste voer afgestemd op het ras en de leeftijd van uw hond" },
    { label: "Kattenvoer", blurb: "Natvoer, brokjes en speciale dieetvoeding" },
    { label: "Supplementen", blurb: "Gewrichten, huid, vacht en spijsvertering" },
  ],
  footer: {
    tagline: (where: string | null) =>
      `Een vriendelijke, onafhankelijke gids voor huisdierzorg${where ? ` ${where}` : ""}. Zonder registratie of reclame: alleen de gegevens die u nodig heeft om contact op te nemen.`,
    sourced: "Elk profiel linkt naar de eigen bron",
    services: "Diensten",
    about: "pawenn",
    legal: "Juridische informatie",
    howItWorks: "Hoe het werkt",
    addBusiness: "Bedrijf aanmelden",
    fixListing: "Profiel corrigeren",
    privacy: "Privacybeleid",
    terms: "Gebruiksvoorwaarden",
    madeWithCare: (where: string | null) => `Met zorg gemaakt voor huisdieren${where ? ` ${where}` : ""}`,
    cities: "Steden",
  },
  cityHub: {
    metaTitle: (where: string) => `Huisdierzorg ${where} – dierenartsen, trimsalons, pensions | Pawenn`,
    metaDescription: (n: number, where: string) =>
      `${n} ${plural("nl", n, { one: "dienst", other: "diensten" })} voor huisdieren ${where}: dierenartsen, trimsalons, pensions, hondenscholen, dierenwinkels en oppassers, met openingstijden, tarieven en contactgegevens binnen handbereik.`,
    h1Before: "Huisdierzorg",
    intro:
      "Alle zorg voor uw huisdier op één pagina: dierenartsen, trimsalons, pensions, hondenscholen, dierenwinkels en oppassers, stuk voor stuk met bronvermelding. Hieronder vindt u enkele adressen per categorie; kies hierboven een categorie om de complete lijst te bekijken.",
  },
  animals: {
    any: "Elk huisdier",
    choose: "Welk dier?",
    dog: "Honden",
    cat: "Katten",
    "small-pet": "Kleine huisdieren",
    bird: "Vogels",
    fish: "Vissen",
  } as Record<string, string>,
  animalSingular: {
    dog: "Hond",
    cat: "Kat",
    "small-pet": "Klein huisdier",
    bird: "Vogel",
    fish: "Vis",
  } as Record<string, string>,
  home: {
    /** `where` is null once the site covers several cities. */
    metaTitle: (where: string | null) => `Huisdierzorg${where ? ` ${where}` : ""} – dierenartsen, trimsalons, pensions | Pawenn`,
    metaDescription: (where: string | null) =>
      `Vind betrouwbare zorg voor uw huisdier${where ? ` ${where}` : ""} – trimsalons, dierenartsen, pensions, training en meer`,
    h1: "Blij huisdier, gerust gevoel",
    subtitle:
      "Dierenartsen, trimsalons, pensions en hondenscholen met telefoonnummers, openingstijden en tarieven. Elk profiel toont waar de gegevens vandaan komen en wanneer we ze hebben gecontroleerd.",
    popular: "Populair:",
    statCities: (n: number): string => plural("nl", n, { one: "stad", other: "steden" }),
    statPlaces: (n: number): string => plural("nl", n, { one: "geregistreerd bedrijf", other: "geregistreerde bedrijven" }),
    statCountries: (n: number): string => plural("nl", n, { one: "land", other: "landen" }),
    statKinds: (n: number): string => plural("nl", n, { one: "soort dienst", other: "soorten diensten" }),
    statPeople: "mensen die Pawenn kan helpen",
    browseEyebrow: "Ontdek per dienst",
    browseTitle: "Wat heeft uw huisdier vandaag nodig?",
    browseBody: "Zes soorten zorg voor huisdieren, elk met een eigen overzicht van locaties en een bronvermelding bij elk profiel.",
    places: (n: number) => `${n} ${plural("nl", n, { one: "locatie", other: "locaties" })}`,
    placesInCities: (n: number, cities: number) =>
      `${n} ${plural("nl", n, { one: "locatie", other: "locaties" })} in ${cities} ${plural("nl", cities, { one: "stad", other: "steden" })}`,
    chooseCityTitle: (label: string) => `${label}: kies een stad`,
    chooseCityIntro: "Kies uw stad of laat ons de dichtstbijzijnde zoeken.",
    nearMe: "Dichtstbijzijnde",
    exploreEyebrow: "Verken de stad",
    exploreTitle: (city: string) => `Wat is er bij u in de buurt in ${city}?`,
    exploreBody: "Klik op een wijk om te zien wat er in de buurt is. Hoe groter de cirkel, hoe meer locaties er geregistreerd zijn.",
    partnersEyebrow: "Partners",
    partnersTitle: "Uitgelichte partners",
    partnersBody: "Gesponsorde vermeldingen: altijd duidelijk aangegeven en nooit gemengd met de reguliere volgorde.",
    howEyebrow: "Hoe het werkt",
    howTitle: "Van «ik zoek een trimsalon» tot bellen binnen één minuut",
    steps: [
      { title: "Kies wat u zoekt", body: "Selecteer uw huisdier, de gewenste dienst en een wijk – of verken gewoon een categorie." },
      {
        title: "Vergelijk met een gerust hart",
        body: "Elk profiel linkt naar de herkomst van de gegevens. Gesponsorde vermeldingen zijn altijd herkenbaar.",
      },
      {
        title: "Neem direct contact op",
        body: "Bel, open de website of bekijk de routebeschrijving met één klik. Zonder account of boekingskosten.",
      },
    ],
    howLink: "Hoe we vermeldingen verifiëren",
    careEyebrow: "Tips voor uw huisdier",
    careTitle: "Test uw kennis en ontdek een tip",
    careBody: "Een korte quiz van één minuut over veelvoorkomende mythes over huisdieren en nuttige verzorgingstips.",
    tips: [
      {
        title: "Knip de nagels elke 3 tot 4 weken",
        body: "Te lange nagels beïnvloeden de lichaamshouding van honden en katten en scheuren sneller af. Een regelmatige knipbeurt houdt de pootjes gezond.",
      },
      {
        title: "Waarom heeft mijn kat een krabpaal nodig?",
        body: "Het gaat niet om uw meubels: krabben rekt de spieren, verwijdert dode nagelschilfers en markeert territorium. Katten hebben deze natuurlijke behoefte altijd.",
      },
      {
        title: "Signalen dat een bezoek aan de dierenarts nodig is",
        items: [
          "Eet of drinkt aanzienlijk meer of minder dan normaal",
          "Moeite met lopen of terughoudend bij springen",
          "Elke verandering die langer dan een paar dagen aanhoudt",
        ],
      },
      {
        title: "Borstel kortharige honden wekelijks, langharige honden dagelijks",
        body: "Regelmatig borstelen voorkomt klitten voordat ze moeten worden weggeschoren, en bespaart dure behandelingen bij de trimsalon.",
      },
    ] as { title: string; body?: string; items?: string[] }[],
    ctaTitle: (where: string | null) => `Heeft u een onderneming voor huisdieren${where ? ` ${where}` : ""}?`,
    ctaBody: "Meld uw salon, kliniek of pension aan, of laat het ons weten als er gegevens op uw profiel zijn verouderd.",
    ctaButton: "Profiel toevoegen of corrigeren",
  },
  search: {
    pet: "Huisdier",
    service: "Dienst",
    where: "Waar",
    petPlaceholder: "Welk huisdier?",
    servicePlaceholder: "Wat zoekt u?",
    all: (city: string) => `Heel ${city}`,
    search: "Zoeken",
    showResults: "Resultaten tonen",
    stepPet: "1 · Uw huisdier",
    stepService: "2 · Dienst",
    stepWhere: "3 · Waar",
    popular: "Populair",
    close: "Sluiten",
    nearMe: "In mijn buurt",
    nearYou: "Bij u in de buurt",
    locatingYou: "Uw locatie bepalen…",
    geoDenied: "Geen probleem: typ gewoon uw stad in.",
    cityPlaceholder: "Uw stad",
    cityLabel: "Stad",
    cityNotCovered: (typed: string, cities: string) => `We zijn nog niet actief in ${typed}. Pawenn is beschikbaar in: ${cities}.`,
    geoFar: (city: string) => `We zijn nog niet actief in uw regio: typ een stad in, bijv. ${city}.`,
    dialogTitle: "Vind huisdierzorg",
    dialogBody: "Kies uw huisdier en wat u zoekt: we tonen u de dichtstbijzijnde locaties.",
  },
  explorer: {
    district: (city: string) => `Wijk in ${city}`,
    placesListed: (n: number): string => plural("nl", n, { one: "geregistreerd bedrijf", other: "geregistreerde bedrijven" }),
    tabs: "Wijken",
  },
  quiz: {
    title: "Feit of fabel?",
    question: (i: number, n: number) => `Vraag ${i} van ${n}`,
    myth: "Fabel",
    fact: "Feit",
    correct: "Juist!",
    notQuite: "Niet helemaal.",
    itsA: (isFact: boolean) => `Het is ${isFact ? "een feit" : "een fabel"}.`,
    next: "Volgende vraag",
    seeScore: "Mijn score bekijken",
    playAgain: "Opnieuw spelen",
    perfect: "Perfecte score: uw huisdier is in uitstekende handen.",
    good: "Heel goed gedaan! U heeft duidelijk veel kennis van zaken.",
    meh: "Enkele verrassingen onderweg: nu weet u hoe het zit!",
    statements: [
      {
        claim: "Een warme, droge neus betekent dat de hond ziek is.",
        isFact: false,
        explanation:
          "De temperatuur en vochtigheid van de neus schommelen gedurende de dag, ook bij gezonde honden. Eetlust, energieniveau en gedrag zijn veel betrouwbaardere signalen.",
      },
      {
        claim: "Chocolade is giftig voor honden.",
        isFact: true,
        explanation:
          "Chocolade bevat theobromine, een stof die honden slechts heel langzaam kunnen afbreken. Pure chocolade en bakkersgistchocolade zijn het gevaarlijkst.",
      },
      {
        claim: "Een schoteltje melk is een gezonde traktatie voor een volwassen kat.",
        isFact: false,
        explanation:
          "Veel volwassen katten zijn lactose-intolerant, waardoor melk maag- en darmklachten kan veroorzaken. Vers water is alles wat ze nodig hebben.",
      },
      {
        claim: "Druiven en rozijnen kunnen levensgevaarlijk zijn voor honden.",
        isFact: true,
        explanation:
          "Ze kunnen bij sommige honden acuut nierfalen veroorzaken, en er bestaat geen veilige minimumhoeveelheid. Houd ze altijd buiten bereik.",
      },
      {
        claim: "Een hond die met zijn staart kwispelt is altijd vrolijk.",
        isFact: false,
        explanation:
          "Kwispelen duidt op opwinding of verhoogde alertheid: dat kan blijdschap zijn, maar ook spanning, angst of onzekerheid. Kijk altijd naar de hele lichaamstaal.",
      },
      {
        claim: "Katten landen altijd op hun pootjes, dus een val van het balkon is ongevaarlijk.",
        isFact: false,
        explanation:
          "Katten hebben weliswaar een oprichtreflex, maar een val van een raam of balkon leidt jaarlijks bij veel katten tot ernstige verwondingen. Beveilig een balkon altijd met een net.",
      },
      {
        claim: "Binnenkatten hebben ook baat bij vaccinaties.",
        isFact: true,
        explanation:
          "Bepaalde virussen kunnen via schoenen of kleding mee naar binnen worden genomen, en binnenkatten komen ook bij de dierenarts of in een pension. Vraag uw dierenarts om advies op maat.",
      },
    ],
  },
  listing: {
    home: "Home",
    browseCount: (count: number, what: string, where: string) =>
      `Ontdek ${count} ${what} ${where}, stuk voor stuk met bronvermelding.`,
    listed: "geregistreerd",
    verified: "geverifieerd",
    priceRange: "prijsklasse",
    districts: "wijken",
    from: "vanaf",
    otherServices: "Andere diensten",
    filterDistrict: "Filter op wijk",
    allOf: (city: string) => `Heel ${city}`,
    results: (n: number) => `${n} ${plural("nl", n, { one: "resultaat", other: "resultaten" })}`,
    seeAll: (label: string, n: number) => `Alle: ${label.toLowerCase()} (${n})`,
    showAll: (n: number) => `Toon alle (${n})`,
    pagination: { label: "Pagina's", page: (n: number) => `Pagina ${n}`, prev: "Vorige pagina", next: "Volgende pagina", showing: (from: number, to: number, total: number) => `Resultaten ${from}–${to} van ${total}` },
    fairTurn: "de volgorde wisselt dagelijks om elk bedrijf evenveel zichtbaarheid te bieden",
    nearest: "dichtstbijzijnde eerst",
    sortLabel: "Sorteren",
    sortRecommended: "Aanbevolen",
    sortNearest: "Dichtstbijzijnde",
    sortRating: "Best beoordeeld",
    sortReviews: "Meeste recensies",
    ratingFirst: "best beoordeeld eerst",
    reviewsFirst: "meeste recensies eerst",
    filterRating: "Filter op Google-score",
    ratingAny: "Alle scores",
    hiddenUnrated: (n: number) => `${n} zonder score verborgen`,
    openNowFilter: "Nu open",
    allServices: "Alle diensten",
    picker: { service: "Dienst", where: "Waar", filters: "Filters", searchCity: "Stad zoeken", done: "Klaar", rating: "Beoordeling" },
    geoOff: "Locatiebepaling is uitgeschakeld: alle locaties worden getoond.",
    hiddenNoHours: (n: number) => `${n} zonder openingstijden verborgen`,
    kmAway: (km: string) => `op ${km} km`,
    goodToKnow: "Goed om te weten",
    faqTitle: "Veelgestelde vragen",
    byDistrict: "Per wijk",
    missingTitle: "Mist u een bedrijf?",
    missingBody: "Laat het ons weten of geef door als u verouderde gegevens ziet.",
    missingLink: "Profiel toevoegen of corrigeren",
    emptyTitle: "Hier is nog niets gevonden",
    emptyBody: "Geen enkel bedrijf voldoet aan deze filters. Probeer een andere wijk of een ander huisdier.",
    reset: "Filters wissen",
    metaTitle: (label: string, where: string) => `${label} ${where} | Pawenn`,
    metaDescription: (count: number, what: string, where: string) =>
      `Vergelijk ${count} ${what} ${where}: wijk, geaccepteerde huisdieren en direct bellen, website openen of route plannen.`,
    faqCount: (pluralStr: string, where: string) => `Hoeveel ${pluralStr} zijn er ${where}?`,
    faqCountAnswer: (n: number, singular: string, where: string) =>
      `Momenteel ${plural("nl", n, { one: "is er", other: "zijn er" })} ${n} ${singular} ${plural("nl", n, { one: "geregistreerd", other: "geregistreerd" })} ${where}.`,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- some languages need the plural label here
    faqPrice: (singular: string, where: string, _pluralLabel: string) => `Wat kost ${singular} ${where}?`,
    faqPriceAnswer: (range: string) => `De tarieven onder geregistreerde bedrijven variëren van ${range}, op basis van de gepubliceerde prijslijsten.`,
    faqVerified: (pluralStr: string, where: string) => `Welke ${pluralStr} ${where} zijn geverifieerd?`,
    faqVerifiedAnswer: (v: number, n: number, pct: number) =>
      `Van ${v} van de ${n} profielen (${pct} %) zijn de gegevens handmatig gecontroleerd.`,
  },
  card: {
    priceLevel: (tier: number) => `Prijsniveau ${tier} van 5`,
    /** Against the city market price (lib/priceMarket.ts): 0 = within the market band. */
    vsMarket: (pct: number, marketBand: boolean): string =>
      marketBand ? "Stadsgemiddelde" : pct < 0 ? "Onder het gemiddelde" : "Boven het gemiddelde",
    vsMarketHint: "Vergeleken met het gemiddelde tarief van dezelfde diensten in de stad",
    /** Card of a place with no published price (not for pet shops). */
    priceOnRequest: "Prijs op aanvraag",
  },
  rating: {
    countGoogle: (count: string) => `${count} · Google`,
    aria: (value: string, count: number) => `Score van ${value} van de 5 op basis van ${count} beoordelingen op Google`,
  },
  insights: {
    title: "Wat klanten zeggen",
    summary: (n: number, period: string) => `pawenn-samenvatting van ${n} Google-recensies, ${period}`,
    allOnGoogle: "Alle recensies op Google",
    disclosure: "Samenvatting van openbare Google-recensies; pawenn verifieert deze recensies niet afzonderlijk.",
    sentiment: { positive: "Overwegend positief", mixed: "Wisselend", negative: "Overwegend negatief" },
    mentions: (m: number, n: number) => `${m} van ${n} recensies`,
    faqTitle: "Veelgestelde vragen van eigenaren",
    shortNote: "Er is nog geen recensiesamenvatting van pawenn voor deze locatie. De score en alle recensies zijn te vinden op Google.",
  },
  vetNow: {
    button: "Dierenarts nu open",
    buttonHint: "Dichtstbijzijnde dierenartsen die nu geopend zijn",
    locating: "Uw locatie bepalen…",
    callFirst: "Bel altijd eerst voordat u vertrekt: leg uit wat er aan de hand is en controleer of ze direct plek hebben.",
    noneOpen: "Er zijn momenteel geen dierenartsen met bekende openingstijden open. De eerstvolgende die openen:",
    opensToday: (time: string) => `opent vandaag om ${time}`,
    opensTomorrow: (time: string) => `opent morgen om ${time}`,
    opensLater: (date: string, time: string) => `opent op ${date} om ${time}`,
    nonstopTitle: "24 uur per dag open",
  },
  /** Analytics consent banner (GA4 runs only after "allow"). */
  consent: {
    text: "We willen graag analytische cookies van Google Analytics en Microsoft Clarity (inclusief anonieme schermopnamen) gebruiken om te begrijpen hoe de website wordt gebruikt en deze te verbeteren. Alleen als u hiervoor toestemming geeft.",
    allow: "Accepteren",
    decline: "Weigeren",
    settings: "Cookie-instellingen",
  },
  actions: { call: "Bellen", website: "Website", route: "Route" },
  badges: { verified: (date: string) => `Geverifieerd ${date}`, partner: "Partner" },
  business: {
    metaTitle: (name: string, label: string, where: string) => `${name} - ${label}${where ? ` ${where}` : ""}`,
    metaDescription: (name: string, where: string) =>
      `${name}${where ? ` ${where}` : ""}: adres, contactgegevens en routebeschrijving.`,
    /** After the place's own short description (SEO audit T11). */
    metaDescriptionTail: (hasPrices: boolean) =>
      `Openingstijden${hasPrices ? ", tarieven" : ""}, telefoonnummer en routebeschrijving.`,
    about: "Over dit bedrijf",
    goodToKnow: "Goed om te weten",
    goodToKnowNote: "Zoals vermeld door het bedrijf op de eigen website.",
    faqTitle: "Vragen voor u contact opneemt",
    cityPricesTitle: (where: string) => `Gemiddelde tarieven ${where}`,
    cityPricesIntro: "Dit bedrijf heeft geen eigen tarieven gepubliceerd. Gemiddelde van de stad, niet de specifieke prijzen van deze locatie:",
    welcomes: "Geschikt voor",
    specialties: "Specialisaties",
    openingHours: "Openingstijden",
    prices: "Tarieven",
    standard: "Standaard",
    sizes: { MINI: "mini", SMALL: "klein", MEDIUM: "middelgroot", LARGE: "groot", XL: "XL" } as Record<string, string>,
    location: "Locatie",
    openInMaps: "Openen in Google Maps",
    mapTitle: (name: string) => `Kaart met de locatie van ${name}`,
    reviews: "Recensies",
    reviewsCount: (n: number) => `(${n} ${plural("nl", n, { one: "recensie", other: "recensies" })})`,
    fromN: (n: number) => `van ${n}`,
    noReviews: "Nog geen recensies. Bent u hier met uw huisdier geweest? Deel als eerste uw ervaring.",
    leaveReview: "Recensie schrijven",
    getInTouch: "Contact",
    phone: "Telefoonnummer",
    website: "Website",
    email: "E-mailadres",
    address: "Adres",
    noFees: "Neem rechtstreeks contact op met het bedrijf: pawenn rekent geen provisie of bemiddelingskosten.",
    keepExploring: "Verder zoeken",
    moreNearby: (label: string) => `Meer ${label.toLowerCase()} in de buurt`,
    seeAll: "Alles bekijken",
    infoVerified: (date: string) => `Gegevens gecontroleerd: ${date}`,
    source: "bron:",
    reportIssue: "Fout melden",
    days: { mo: "Maandag", tu: "Dinsdag", we: "Woensdag", th: "Donderdag", fr: "Vrijdag", sa: "Zaterdag", su: "Zondag" } as Record<string, string>,
    openNow: "Nu open",
    closedNow: "Nu gesloten",
    closedDay: "Gesloten",
    allDay: "24 uur per dag geopend",
    sections: { label: "Onderdelen op deze pagina", contact: "Contact", prices: "Tarieven", about: "Over het bedrijf", reviews: "Recensies", location: "Locatie" },
    showMore: "Meer tonen",
    showLess: "Minder tonen",
    byAppointment: "Op afspraak",
    hoursChecked: (date: string) => `Openingstijden gecontroleerd op ${date}`,
    nonstop: "24 uur per dag open, 7 dagen per week",
    emergency: "Spoed",
    // "Trimsalon in " + <district> + ", Amsterdam"
    placeIn: { before: (singular: string) => `${cap(singular)} in ` },
    homeVisits: "Bezoeken aan huis",
    languages: (list: string) => `Het personeel spreekt ${list}`,
    instagram: "Instagram",
    facebook: "Facebook",
    cityAverage: (price: string) => `Stadsgemiddelde ${price}`,
    lessBy: (amount: string) => `${amount} goedkoper`,
    moreBy: (amount: string) => `${amount} duurder`,
    allPrices: (n: number) => `Alle tarieven (${n})`,
    priceFrom: (price: string) => `vanaf ${price}`,
    weightUpTo: (kg: string) => `tot ${kg} kg`,
    weightOver: (kg: string) => `boven ${kg} kg`,
    weightRange: (from: string, to: string) => `${from}–${to} kg`,
    pricesChecked: (date: string) => `Gecontroleerd op ${date}`,
    priceList: "prijslijst",
    perUnit: { per_hour: "/ uur", per_km: "/ km" } as Record<string, string>,
    notCompared: "niet vergeleken met andere locaties",
    pricesDisclaimer: "Tarieven zoals gepubliceerd door het bedrijf op de vermelde datum. Prijzen kunnen wijzigen: informeer altijd vooraf.",
  },
  reviewForm: {
    name: "Uw naam",
    rating: "Beoordeling",
    stars: (n: number) => `${n} ${plural("nl", n, { one: "ster", other: "sterren" })}`,
    review: "Uw recensie",
    submit: "Recensie versturen",
    submitting: "Versturen…",
    thanks: "Bedankt! Uw recensie wordt na controle geplaatst.",
    error: "Er is een fout opgetreden.",
  },
  notFound: {
    title: "We zijn het spoor kwijt",
    body: "We hebben overal gesnuffeld, maar we kunnen deze pagina niet vinden. Mogelijk is de pagina verplaatst of klopt de link niet.",
    back: "Terug naar home",
  },
  // Attribute pages (lib/attributePages.ts): chip label, crumb, H1, the
  // one-sentence answer (n of total places), title and description.
  attributes: {
    nonstop: {
      chip: "24 uur open",
      h1: (where: string) => `Spoeddierenartsen 24/7 ${where}`,
      lead: (n: number, total: number) =>
        `${n} van de ${total} dierenartsen zijn 24 uur per dag, 7 dagen per week bereikbaar voor spoedgevallen. Bel altijd eerst voordat u vertrekt.`,
      metaTitle: (where: string) => `Spoeddierenartsen ${where} – 24 uur per dag geopend | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} ${plural("nl", n, { one: "dierenartspraktijk", other: "dierenartspraktijken" })} ${where} met 24/7 spoedzorg: adressen, telefoonnummers en routebeschrijving.`,
    },
    saturday: {
      chip: "Open op zaterdag",
      h1: (where: string) => `Dierenartsen geopend op zaterdag ${where}`,
      lead: (n: number, total: number) => `${n} van de ${total} dierenartspraktijken zijn op zaterdag geopend. Gedetailleerde openingstijden hieronder, gecontroleerd bij elke praktijk.`,
      metaTitle: (where: string) => `Dierenartsen geopend op zaterdag ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} ${plural("nl", n, { one: "dierenartspraktijk", other: "dierenartspraktijken" })} ${where} geopend op zaterdag, met openingstijden, telefoonnummers en routebeschrijving.`,
    },
    sunday: {
      chip: "Open op zondag",
      h1: (where: string) => `Dierenartsen geopend op zondag ${where}`,
      lead: (n: number, total: number) => `${n} van de ${total} dierenartspraktijken zijn op zondag geopend. Gedetailleerde openingstijden hieronder, gecontroleerd bij elke praktijk.`,
      metaTitle: (where: string) => `Dierenartsen geopend op zondag ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} ${plural("nl", n, { one: "dierenartspraktijk", other: "dierenartspraktijken" })} ${where} geopend op zondag, met openingstijden, telefoonnummers en routebeschrijving.`,
    },
    exotics: {
      chip: "Bijzondere dieren",
      h1: (where: string) => `Dierenartsen voor bijzondere en exotische dieren ${where}`,
      lead: (n: number, total: number) =>
        `${n} van de ${total} dierenartspraktijken behandelen bijzondere dieren (reptielen, vogels en knaagdieren). Neem vooraf contact op om uw diersoort te bevestigen.`,
      metaTitle: (where: string) => `Dierenartsen voor bijzondere en exotische dieren ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} ${plural("nl", n, { one: "dierenarts", other: "dierenartsen" })} ${where} gespecialiseerd in bijzondere dieren: reptielen, vogels en knaagdieren. Openingstijden, telefoonnummers en route.`,
    },
    "home-visits": {
      chip: "Bezoek aan huis",
      h1: (where: string) => `Dierenartsen aan huis ${where}`,
      lead: (n: number, total: number) => `${n} van de ${total} dierenartspraktijken bieden visites aan huis.`,
      metaTitle: (where: string) => `Dierenarts aan huis ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} ${plural("nl", n, { one: "dierenarts", other: "dierenartsen" })} ${where} met zorg aan huis: telefoonnummers, openingstijden en diensten.`,
    },
    english: {
      chip: "Engels gesproken",
      h1: (where: string) => `Engelssprekende dierenartsen ${where}`,
      lead: (n: number, total: number) =>
        `${n} van de ${total} dierenartspraktijken vermelden op hun eigen website dat zij cliënten in het Engels te woord staan. Bel voor de zekerheid vooraf.`,
      metaTitle: (where: string) => `Engelssprekende dierenartsen ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} ${plural("nl", n, { one: "dierenarts", other: "dierenartsen" })} ${where} met Engelstalige dienstverlening volgens de eigen website: openingstijden, telefoonnummers en route.`,
    },
  },
  // Price pages (lib/pricePages.ts): one per service and city, plus an
  // overview per category. Numbers come preformatted (money, dates).
  prices: {
    crumb: "Tarieven",
    overviewH1: (name: string, where: string) => `${name} ${where}`,
    overviewMetaTitle: (name: string, where: string) => `${name} ${where} | Pawenn`,
    overviewIntro:
      "Wat elke dienst kost, vergeleken tussen bedrijven die hun tarieven publiceren. Het getoonde gemiddelde is de mediaanprijs: de helft rekent minder en de andere helft meer.",
    overviewMetaDescription: (label: string, where: string, services: number) =>
      `${label} ${where}: tarieven van ${services} ${plural("nl", services, { one: "dienst", other: "diensten" })} vergeleken tussen locaties, met het gemiddelde en de prijsbandbreedte. Uit openbare prijslijsten, met datum.`,
    serviceH1: (service: string, where: string) => `${service} ${where}: tarieven`,
    serviceMetaTitle: (service: string, where: string, from: string) => `${service} ${where} – vanaf ${from} | Pawenn`,
    /** Meta description of a service price page: "<service> <where>:" + the answer, the cheapest place in between. */
    serviceMetaLead: (service: string, where: string) => `${service} ${where}:`,
    cheapest: (name: string, price: string) => `Voordeligste keuze: ${name}, ${price}.`,
    answer: (from: string, to: string, median: string, places: number, date: string) =>
      `Kost van ${from} tot ${to}, gemiddeld ${median}. We hebben ${places} ${plural("nl", places, { one: "bedrijf", other: "bedrijven" })} vergeleken; tarieven gecontroleerd op ${date}.`,
    fewPlaces: (places: number) =>
      `Momenteel ${plural("nl", places, { one: "publiceert", other: "publiceren" })} slechts ${places} ${plural("nl", places, { one: "bedrijf", other: "bedrijven" })} dit tarief: te weinig voor een representatieve vergelijking.`,
    question: (service: string, where: string) => `Wat kost ${service.toLowerCase()} ${where}?`,
    includes: "Wat is bij de prijs inbegrepen",
    place: "Bedrijf",
    price: "Tarief",
    vsMarket: "Ten opzichte van het stadsgemiddelde",
    notComparedTitle: "Overige tarieven (niet vergeleken)",
    notComparedIntro: "Deeltarieven en prijzen per uur of per kilometer.",
    otherServices: "Overige tarieven",
    service: "Dienst",
    range: "Bandbreedte",
    median: "Gemiddelde",
    places: "Bedrijven",
    seeAll: (label: string) => `Alle: ${label.toLowerCase()}`,
    linkFromListing: (where: string) => `Tarieven ${where}`,
    source: "prijslijst",
  },
};
