// Hungarian UI strings (docs/playbooks/add-language.md, step 2). "{where}"
// arrives ready-made from in_city ("Budapesten").
// The language is switched on in step 3 (lib/locales.ts, lib/i18n.ts).
import type { Dictionary } from "./en";

const cap = (text: string): string => text.charAt(0).toUpperCase() + text.slice(1);

const plural = (_lang: "hu", n: number, forms: { one: string; other: string }): string =>
  n === 1 ? forms.one : forms.other;

export const hu: Dictionary = {
  nav: {
    browse: "Böngészés",
    help: "Súgó",
    listBusiness: "Szolgáltatás hozzáadása a pawennhez",
    findCare: "Találj gondoskodást kedvencednek",
    browseServices: "Böngészés",
    services: "Szolgáltatások",
    foodAndSupplies: "Tápok és felszerelések",
    comingSoon: "Hamarosan",
    howItWorks: "Hogyan működik a pawenn",
    listYourBusiness: "Szolgáltatás hozzáadása",
    openMenu: "Menü megnyitása",
    closeMenu: "Menü bezárása",
    language: "Nyelv",
    locating: "Város keresése…",
  },
  food: [
    { label: "Kutyatápok", blurb: "A legjobb eledelek a kutya fajtája és kora szerint" },
    { label: "Macskatápok", blurb: "Nedves és száraz tápok, speciális diéták" },
    { label: "Táplálékkiegészítők", blurb: "Ízületek, bőr, szőrzet és emésztés támogatása" },
  ],
  footer: {
    tagline: (where: string | null) =>
      `Közvetlen és független útmutató kisállat-szolgáltatásokhoz${where ? ` ${where}` : ""}. Regisztráció és reklámok nélkül: csak a legfontosabb adatok a kapcsolatfelvételhez.`,
    sourced: "Minden adat forrással ellenőrizve",
    services: "Szolgáltatások",
    about: "A pawennről",
    legal: "Jogi nyilatkozat",
    howItWorks: "Hogyan működik",
    addBusiness: "Szolgáltatás hozzáadása",
    fixListing: "Adatok javítása",
    privacy: "Adatvédelmi irányelvek",
    terms: "Felhasználási feltételek",
    madeWithCare: (where: string | null) => `Gondoskodással készítve a kisállatokért${where ? ` ${where}` : ""}`,
    cities: "Városok",
  },
  cityHub: {
    metaTitle: (where: string) => `Kisállat szolgáltatások ${where} – állatorvosok, kutyakozmetika, panziók | Pawenn`,
    metaDescription: (n: number, where: string) =>
      `${n} kisállat-szolgáltatás ${where}: állatorvosok, kutyakozmetikák, kutyapanziók, kiképzők, állatkereskedések és kutyaszitterek nyitvatartással, árakkal és közvetlen elérhetőséggel.`,
    h1Before: "Kisállat szolgáltatások",
    intro:
      "Minden kisállat-szolgáltatás egyetlen oldalon: állatorvosok, kutyakozmetikák, kutyapanziók, trénerek, állatkereskedések és szitterek, mindegyik ellenőrzött forrással. Válassz egy kategóriát a teljes lista megtekintéséhez.",
  },
  animals: {
    any: "Bármilyen kisállat",
    choose: "Milyen kisállat?",
    dog: "Kutyák",
    cat: "Macskák",
    "small-pet": "Kisemlősök",
    bird: "Madarak",
    fish: "Halak",
  } as Record<string, string>,
  animalSingular: {
    dog: "Kutya",
    cat: "Macska",
    "small-pet": "Kisemlős",
    bird: "Madár",
    fish: "Hal",
  } as Record<string, string>,
  home: {
    /** `where` is null once the site covers several cities. */
    metaTitle: (where: string | null) => `Kisállat szolgáltatások${where ? ` ${where}` : ""} – állatorvosok, kutyakozmetika, panziók | Pawenn`,
    metaDescription: (where: string | null) =>
      `Találj megbízható kisállat-szolgáltatásokat${where ? ` ${where}` : ""} – kutyakozmetikák, állatorvosok, panziók, kutyaiskolák és még sok más`,
    h1: "Boldog kedvenc, nyugodt gazdi",
    subtitle:
      "Állatorvosok, kozmetikák, panziók és kutyaiskolák telefonszámmal, nyitvatartással és árakkal. Minden adatlapnál feltüntetjük a forrást és az ellenőrzés dátumát.",
    popular: "Népszerű:",
    statCities: (n: number): string => plural("hu", n, { one: "város", other: "város" }),
    statPlaces: (n: number): string => plural("hu", n, { one: "nyilvántartott hely", other: "nyilvántartott hely" }),
    statCountries: (n: number): string => plural("hu", n, { one: "ország", other: "ország" }),
    statKinds: (n: number): string => plural("hu", n, { one: "szolgáltatástípus", other: "szolgáltatástípus" }),
    statPeople: "gazdi, akinek a Pawenn segíthet",
    browseEyebrow: "Böngéssz szolgáltatás szerint",
    browseTitle: "Mire van szüksége ma a kedvencednek?",
    browseBody: "Hatféle kisállat-ellátási kategória, ellenőrzött szolgáltatókkal és hiteles forrásokkal.",
    places: (n: number) => `${n} ${plural("hu", n, { one: "hely", other: "hely" })}`,
    placesInCities: (n: number, cities: number) =>
      `${n} hely ${cities} városban`,
    chooseCityTitle: (label: string) => `${label}: válassz várost`,
    chooseCityIntro: "Válaszd ki a városodat, vagy engedd, hogy megtaláljuk a legközelebbit.",
    nearMe: "Legközelebb hozzám",
    exploreEyebrow: "Fedezd fel a várost",
    exploreTitle: (city: string) => `Mi található a közeledben itt: ${city}?`,
    exploreBody: "Kattints egy kerületre a közeli szolgáltatók megtekintéséhez. Minél nagyobb a buborék, annál több hely található ott.",
    partnersEyebrow: "Partnereink",
    partnersTitle: "Kiemelt partnerek",
    partnersBody: "Szponzorált megjelenések: mindig egyértelműen jelölve, a normál rangsorolást nem befolyásolva.",
    howEyebrow: "Hogyan működik",
    howTitle: "A felmerülő igénytől a telefonhívásig egyetlen perc alatt",
    steps: [
      { title: "Válaszd ki, mire van szükséged", body: "Add meg a kedvenced fajtáját, a kívánt szolgáltatást és a kerületet, vagy egyszerűen böngéssz a kategóriák között." },
      {
        title: "Hasonlítsd össze magabiztosan",
        body: "Minden adatlap közvetlen hivatkozást tartalmaz a forrásra. A kiemelt partnereket mindig egyértelműen megjelöljük.",
      },
      {
        title: "Lépj kapcsolatba közvetlenül",
        body: "Hívj telefonon, látogass el a weboldalra vagy indítsd el az útvonaltervezést egyetlen érintéssel. Regisztráció és foglalási díjak nélkül.",
      },
    ],
    howLink: "Hogyan ellenőrizzük az adatlapokat",
    careEyebrow: "Hasznos tanácsok",
    careTitle: "Tedd próbára a tudásod és tanulj valami újat",
    careBody: "Egyperces kvíz a leggyakoribb tévhitekről és a kedvencek helyes gondozásáról.",
    tips: [
      {
        title: "Vágd le a karmokat 3-4 hetente",
        body: "A túl hosszú karmok megváltoztatják a kutyák és macskák járását, és könnyebben beszakadhatnak. A rendszeres vágás kényelmes és fájdalommentes lépteket biztosít.",
      },
      {
        title: "Miért van szüksége a macskának kaparófára?",
        body: "Ez nem a bútorokról szól: a kaparás nyújtja az izmokat, eltávolítja az elhalt karmok külső rétegét és területjelölést szolgál. A macskák kaparófa nélkül is fognak kaparni.",
      },
      {
        title: "Mikor kell azonnal állatorvoshoz fordulni?",
        items: [
          "Jelentősen többet vagy kevesebbet eszik/iszik a megszokottnál",
          "Sántítás vagy ugrástól való vonakodás",
          "Bármilyen viselkedésbeli változás, amely 1-2 napnál tovább tart",
        ],
      },
      {
        title: "Rövid szőrű kutyát hetente, hosszú szőrűt naponta fésülj",
        body: "A rendszeres fésüléssel még a csomósodás előtt eltávolíthatod a filcet, ami sokkal kellemesebb és olcsóbb, mint a gubancok kibontása a kozmetikában.",
      },
    ] as { title: string; body?: string; items?: string[] }[],
    ctaTitle: (where: string | null) => `Kisállat-szolgáltatást üzemeltetsz${where ? ` ${where}` : ""}?`,
    ctaBody: "Regisztráld szalonodat, rendelődet vagy panziódat, vagy jelezd felénk, ha valamelyik adatod frissítésre szorul.",
    ctaButton: "Szolgáltatás hozzáadása vagy módosítása",
  },
  search: {
    pet: "Kisállat",
    service: "Szolgáltatás",
    where: "Hol",
    petPlaceholder: "Milyen kisállat?",
    servicePlaceholder: "Mire van szükséged?",
    all: (city: string) => `Egész ${city}`,
    search: "Keresés",
    showResults: "Találatok megjelenítése",
    stepPet: "1 · Kedvenc",
    stepService: "2 · Szolgáltatás",
    stepWhere: "3 · Hol",
    popular: "Népszerű",
    close: "Bezárás",
    nearMe: "Közelemben",
    nearYou: "A közeledben",
    locatingYou: "Helymeghatározás folyamatban…",
    geoDenied: "Semmi gond: írd be a város nevét.",
    cityPlaceholder: "A te városod",
    cityLabel: "Város",
    cityNotCovered: (typed: string, cities: string) => `Itt még nem vagyunk jelen: ${typed}. A Pawenn jelenleg elérhető itt: ${cities}.`,
    geoFar: (city: string) => `Itt még nem vagyunk elérhetőek: adj meg egy várost, pl. ${city}.`,
    dialogTitle: "Találj szolgáltatást kedvencednek",
    dialogBody: "Válaszd ki a kisállatodat és a kívánt szolgáltatást: megmutatjuk a legközelebbi helyeket.",
  },
  explorer: {
    district: (city: string) => `${city} kerülete`,
    placesListed: (n: number): string => `${n} nyilvántartott hely`,
    tabs: "Kerületek",
  },
  quiz: {
    title: "Tévhit vagy valóság?",
    question: (i: number, n: number) => `${i}. / ${n} kérdés`,
    myth: "Tévhit",
    fact: "Valóság",
    correct: "Helyes!",
    notQuite: "Nem egészen.",
    itsA: (isFact: boolean) => `Ez ${isFact ? "valóság" : "tévhit"}.`,
    next: "Következő kérdés",
    seeScore: "Eredmény megtekintése",
    playAgain: "Újra játszom",
    perfect: "Tökéletes eredmény: a kedvenced a legjobb kezekben van!",
    good: "Nagyon szép eredmény! Látszik, hogy jól értesz az állatokhoz.",
    meh: "Akadt néhány meglepetés útközben: most már ezt is tudod!",
    statements: [
      {
        claim: "A meleg és száraz orr azt jelenti, hogy a kutya lázas vagy beteg.",
        isFact: false,
        explanation:
          "Az orr hőmérséklete és nedvessége a nap folyamán folyamatosan változik egészséges kutyáknál is. Az étvágy, az energiaszint és a viselkedés sokkal megbízhatóbb jelzők.",
      },
      {
        claim: "A csokoládé mérgező a kutyák számára.",
        isFact: true,
        explanation:
          "A csokoládé teobromint tartalmaz, amit a kutyák szervezete nagyon lassan bont le. A fekete és a sütési csokoládé a legveszélyesebb.",
      },
      {
        claim: "Egy tál tej nagyszerű jutalom egy felnőtt macskának.",
        isFact: false,
        explanation:
          "A legtöbb felnőtt macska laktózérzékeny, és a tej gyomorbántalmakat, hasmenést okozhat náluk. A friss tiszta víz minden, amire szükségük van.",
      },
      {
        claim: "A szőlő és a mazsola veszélyes lehet a kutyákra.",
        isFact: true,
        explanation:
          "Akár kis mennyiségben is akut veseelégtelenséget okozhatnak bizonyos kutyáknál. Mindig tartsd őket távol tőlük.",
      },
      {
        claim: "A csóváló kutya mindig barátságos és boldog.",
        isFact: false,
        explanation:
          "A farokcsóválás csupán izgatottságot, felfokozott állapotot jelez: ez lehet öröm, de feszültség, bizonytalanság vagy fenyegetés is. Mindig a kutya egész testbeszédét figyeld.",
      },
      {
        claim: "A macskák mindig a talpukra esnek, így az ablakból való kiesés nem veszélyes.",
        isFact: false,
        explanation:
          "Bár működik a korrekciós reflexük, a magasból történő zuhanás súlyos sérüléseket, töréseket okoz. Mindig lássuk el védőhálóval az ablakokat és erkélyeket.",
      },
      {
        claim: "A kizárólag lakásban tartott macskáknak is szükségük van védőoltásokra.",
        isFact: true,
        explanation:
          "Egyes kórokozókat a cipőnkön vagy ruhánkon is hazavihetünk, ráadásul a benti cicák is utazhatnak orvoshoz vagy panzióba. Érdeklődj az állatorvosodnál az alapoltásokról.",
      },
    ],
  },
  listing: {
    home: "Főoldal",
    browseCount: (count: number, what: string, where: string) =>
      `Böngéssz ${count} ${what} között ${where}, minden adatlap ellenőrzött forrással.`,
    listed: "nyilvántartva",
    verified: "ellenőrizve",
    priceRange: "ársáv",
    districts: "kerület",
    from: "tól",
    otherServices: "Egyéb szolgáltatások",
    filterDistrict: "Szűrés kerület szerint",
    allOf: (city: string) => `Egész ${city}`,
    results: (n: number) => `${n} ${plural("hu", n, { one: "találat", other: "találat" })}`,
    seeAll: (label: string, n: number) => `Minden: ${label.toLowerCase()} (${n})`,
    showAll: (n: number) => `Összes megjelenítése (${n})`,
    pagination: { label: "Oldalak", page: (n: number) => `${n}. oldal`, prev: "Előző oldal", next: "Következő oldal", showing: (from: number, to: number, total: number) => `Megjelenítve: ${from}–${to} / ${total}` },
    fairTurn: "a sorrend naponta változik az egyenlő láthatóság érdekében",
    nearest: "legközelebbiek elöl",
    sortLabel: "Rendezés",
    sortRecommended: "Ajánlott",
    sortNearest: "Legközelebbi",
    sortRating: "Legjobbra értékelt",
    sortReviews: "Legtöbb vélemény",
    ratingFirst: "legjobbra értékeltek elöl",
    reviewsFirst: "legtöbb véleménnyel rendelkezők elöl",
    filterRating: "Szűrés Google-értékelés szerint",
    ratingAny: "Bármilyen értékelés",
    hiddenUnrated: (n: number) => `${n} értékelés nélküli elrejtve`,
    openNowFilter: "Most nyitva",
    allServices: "Minden szolgáltatás",
    picker: { service: "Szolgáltatás", where: "Hol", filters: "Szűrők", searchCity: "Város keresése", done: "Kész", rating: "Értékelés" },
    geoOff: "A helymeghatározás ki van kapcsolva: minden hely megjelenítése.",
    hiddenNoHours: (n: number) => `${n} nyitvatartás nélküli elrejtve`,
    kmAway: (km: string) => `${km} km-re`,
    goodToKnow: "Jó tudni",
    faqTitle: "Gyakran ismételt kérdések",
    byDistrict: "Kerület szerint",
    missingTitle: "Tudsz olyan helyet, ami hiányzik az oldalról?",
    missingBody: "Oszd meg velünk, vagy jelezd, ha elavult adatot látsz.",
    missingLink: "Szolgáltatás hozzáadása vagy módosítása",
    emptyTitle: "Itt még nincsenek találatok",
    emptyBody: "Egyetlen hely sem felel meg ezeknek a szűrőknek. Próbálkozz másik kerülettel vagy kisállattal.",
    reset: "Szűrők visszaállítása",
    metaTitle: (label: string, where: string) => `${label} ${where} | Pawenn`,
    metaDescription: (count: number, what: string, where: string) =>
      `Hasonlíts össze ${count} ${what} helyet ${where}: kerületek, fogadott kisállatok és egyérintéses hívás, weboldal vagy útvonaltervezés.`,
    faqCount: (pluralStr: string, where: string) => `Hány ${pluralStr} található ${where}?`,
    faqCountAnswer: (n: number, singular: string, where: string) =>
      `Jelenleg ${n} ${singular} található ${where}.`,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- some languages need the plural label here
    faqPrice: (singular: string, where: string, _pluralLabel: string) => `Mennyibe kerül a(z) ${singular} ${where}?`,
    faqPriceAnswer: (range: string) => `A nyilvántartott helyek árai a közzétett díjszabások alapján a(z) ${range} sávban mozognak.`,
    faqVerified: (pluralStr: string, where: string) => `Mely ${pluralStr} ellenőrzöttek ${where}?`,
    faqVerifiedAnswer: (v: number, n: number, pct: number) =>
      `${n} adatlapból ${v} (${pct}%) rendelkezik kézzel ellenőrzött adatokkal.`,
  },
  card: {
    priceLevel: (tier: number) => `Árkategória: ${tier} / 5`,
    /** Against the city market price (lib/priceMarket.ts): 0 = within the market band. */
    vsMarket: (pct: number, marketBand: boolean): string =>
      marketBand ? "Városi átlag" : pct < 0 ? "Átlag alatti" : "Átlag feletti",
    vsMarketHint: "A városban elérhető azonos szolgáltatások átlagárához viszonyítva",
    /** Card of a place with no published price (not for pet shops). */
    priceOnRequest: "Ár egyeztetés alapján",
  },
  rating: {
    countGoogle: (count: string) => `${count} · Google`,
    aria: (value: string, count: number) => `${value} / 5 csillag ${count} Google-értékelés alapján`,
  },
  insights: {
    title: "Mit mondanak a vendégek",
    summary: (n: number, period: string) => `a pawenn összegzése ${n} Google-vélemény alapján, ${period}`,
    allOnGoogle: "Minden vélemény a Google-on",
    disclosure: "Nyilvános Google-értékelések összefoglalója; a pawenn nem ellenőrzi őket egyenként.",
    sentiment: { positive: "Túlnyomóan pozitív", mixed: "Vegyes", negative: "Túlnyomóan negatív" },
    mentions: (m: number, n: number) => `${m} / ${n} véleményben megemlítve`,
    faqTitle: "Gyakori kérdések a gazdiktól",
    shortNote: "Ehhez a helyhez még nem készült pawenn szöveges összegzés. Az értékelések és az összes vélemény elérhető a Google-on.",
  },
  vetNow: {
    button: "Most nyitva tartó állatorvos",
    buttonHint: "Legközelebbi, jelenleg nyitva tartó állatorvosok",
    locating: "Helymeghatározás folyamatban…",
    callFirst: "Indulás előtt telefonálj: mondd el, mi történt, és győződj meg róla, hogy azonnal tudnak fogadni.",
    noneOpen: "Jelenleg egyetlen közzétett nyitvatartású állatorvos sincs nyitva. A legközelebb nyitó rendelők:",
    opensToday: (time: string) => `ma ${time}-kor nyit`,
    opensTomorrow: (time: string) => `holnap ${time}-kor nyit`,
    opensLater: (date: string, time: string) => `${date} ${time}-kor nyit`,
    nonstopTitle: "0–24 órában nyitva (ügyelet)",
  },
  /** Analytics consent banner (GA4 runs only after "allow"). */
  consent: {
    text: "A weboldal használatának elemzéséhez és fejlesztéséhez a Google Analytics és a Microsoft Clarity analitikai sütijeit szeretnénk használni (beleértve a névtelen munkamenet-rögzítést). Kizárólag a te hozzájárulásoddal.",
    allow: "Elfogadom",
    decline: "Elutasítom",
    settings: "Süti beállítások",
  },
  actions: { call: "Hívás", website: "Weboldal", route: "Útvonal" },
  badges: { verified: (date: string) => `Ellenőrizve: ${date}`, partner: "Partner" },
  business: {
    metaTitle: (name: string, label: string, where: string) => `${name} - ${label}${where ? ` ${where}` : ""}`,
    metaDescription: (name: string, where: string) =>
      `${name}${where ? ` ${where}` : ""}: cím, elérhetőségek és útvonaltervezés.`,
    /** After the place's own short description (SEO audit T11). */
    metaDescriptionTail: (hasPrices: boolean) =>
      `Nyitvatartás${hasPrices ? ", árak" : ""}, telefonszám és útvonaltervezés.`,
    about: "Rólunk",
    goodToKnow: "Jó tudni",
    goodToKnowNote: "A szolgáltató saját weboldalán közzétett információk alapján.",
    faqTitle: "Kérdések hívás előtt",
    cityPricesTitle: (where: string) => `Átlagárak ${where}`,
    cityPricesIntro: "Ez a szolgáltató nem tett közzé árakat. A városi átlag látható, nem a hely konkrét árai:",
    welcomes: "Fogadott állatok",
    specialties: "Szakterületek",
    openingHours: "Nyitvatartás",
    prices: "Árak",
    standard: "Alap",
    sizes: { MINI: "mini", SMALL: "kistestű", MEDIUM: "közepes", LARGE: "nagytestű", XL: "XL" } as Record<string, string>,
    location: "Helyszín",
    openInMaps: "Megnyitás a Térképen",
    mapTitle: (name: string) => `Térkép: ${name} elhelyezkedése`,
    reviews: "Vélemények",
    reviewsCount: (n: number) => `(${n} vélemény)`,
    fromN: (n: number) => `/ ${n}`,
    noReviews: "Még nincsenek vélemények. Jártál már itt a kedvenceddel? Oszd meg tapasztalataidat elsőként!",
    leaveReview: "Vélemény írása",
    getInTouch: "Kapcsolat",
    phone: "Telefonszám",
    website: "Weboldal",
    email: "E-mail cím",
    address: "Cím",
    noFees: "Lépj kapcsolatba közvetlenül a szolgáltatóval: a pawenn nem számít fel jutalékot.",
    keepExploring: "Böngéssz tovább",
    moreNearby: (label: string) => `További ${label.toLowerCase()} a közelben`,
    seeAll: "Összes megtekintése",
    infoVerified: (date: string) => `Adatok ellenőrizve: ${date}`,
    source: "forrás:",
    reportIssue: "Hiba bejelentése",
    days: { mo: "Hétfő", tu: "Kedd", we: "Szerda", th: "Csütörtök", fr: "Péntek", sa: "Szombat", su: "Vasárnap" } as Record<string, string>,
    openNow: "Most nyitva",
    closedNow: "Most zárva",
    closedDay: "Zárva",
    allDay: "0–24 órában nyitva",
    sections: { label: "Az oldal részei", contact: "Kapcsolat", prices: "Árak", about: "A helyről", reviews: "Vélemények", location: "Helyszín" },
    showMore: "Több megjelenítése",
    showLess: "Kevesebb megjelenítése",
    byAppointment: "Időpontfoglalással",
    hoursChecked: (date: string) => `Nyitvatartás ellenőrizve: ${date}`,
    nonstop: "Nyitva a hét minden napján 24 órában",
    emergency: "Sürgősségi ellátás",
    // "Kutyakozmetika itt: " + <district> + ", Budapest"
    placeIn: { before: (singular: string) => `${cap(singular)} itt: ` },
    homeVisits: "Kiszállás és házi vizit",
    languages: (list: string) => `Beszélt nyelvek: ${list}`,
    instagram: "Instagram",
    facebook: "Facebook",
    cityAverage: (price: string) => `Városi átlag: ${price}`,
    lessBy: (amount: string) => `${amount}-val olcsóbb`,
    moreBy: (amount: string) => `${amount}-val drágább`,
    allPrices: (n: number) => `Minden ár (${n})`,
    priceFrom: (price: string) => `${price}-tól`,
    weightUpTo: (kg: string) => `${kg} kg-ig`,
    weightOver: (kg: string) => `${kg} kg felett`,
    weightRange: (from: string, to: string) => `${from}–${to} kg`,
    pricesChecked: (date: string) => `Árak ellenőrizve: ${date}`,
    priceList: "árlista",
    perUnit: { per_hour: "/ óra", per_km: "/ km" } as Record<string, string>,
    notCompared: "nem összehasonlított ár",
    pricesDisclaimer: "Az árak a szolgáltató által a megadott napon közzétett díjszabást tükrözik. Változhatnak: foglalás előtt erősítsd meg őket.",
  },
  reviewForm: {
    name: "Neved",
    rating: "Értékelés",
    stars: (n: number) => `${n} ${plural("hu", n, { one: "csillag", other: "csillag" })}`,
    review: "Vélemény",
    submit: "Vélemény elküldése",
    submitting: "Küldés folyamatban...",
    thanks: "Köszönjük! Véleményed ellenőrzés után jelenik meg az oldalon.",
    error: "Hiba történt a beküldés során.",
  },
  notFound: {
    title: "Szagot vesztettünk",
    body: "Minden sarkot átkutattunk, de nem találtuk ezt az oldalt. Lehet, hogy áthelyezték, vagy hibás a hivatkozás.",
    back: "Vissza a főoldalra",
  },
  // Attribute pages (lib/attributePages.ts): chip label, crumb, H1, the
  // one-sentence answer (n of total places), title and description.
  attributes: {
    nonstop: {
      chip: "0–24 órás nyitvatartás",
      h1: (where: string) => `0–24 órás állatorvosok ${where}`,
      lead: (n: number, total: number) =>
        `${total} állatorvosi rendelőből ${n} a nap 24 órájában, a hét minden napján fogadja a betegeket. Indulás előtt telefonálj.`,
      metaTitle: (where: string) => `Állatorvosi ügyelet ${where} – 0–24 órában nyitva | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} éjjel-nappali állatorvosi rendelő ${where} 0–24 órás ügyelettel a hét minden napján: cím, telefonszám és útvonaltervezés.`,
    },
    saturday: {
      chip: "Szombaton nyitva",
      h1: (where: string) => `Szombaton nyitva tartó állatorvosok ${where}`,
      lead: (n: number, total: number) => `${total} állatorvosi rendelőből ${n} nyitva tart szombaton. A pontos rendelési időt lásd lejjebb, minden rendelőnél ellenőrizve.`,
      metaTitle: (where: string) => `Szombaton nyitva tartó állatorvosok ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} szombaton nyitva tartó állatorvosi rendelő ${where}: rendelési idő, telefonszám és útvonaltervezés.`,
    },
    sunday: {
      chip: "Vasárnap nyitva",
      h1: (where: string) => `Vasárnap nyitva tartó állatorvosok ${where}`,
      lead: (n: number, total: number) => `${total} állatorvosi rendelőből ${n} nyitva tart vasárnap. A pontos rendelési időt lásd lejjebb, minden rendelőnél ellenőrizve.`,
      metaTitle: (where: string) => `Vasárnap nyitva tartó állatorvosok ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} vasárnap nyitva tartó állatorvosi rendelő ${where}: rendelési idő, telefonszám és útvonaltervezés.`,
    },
    exotics: {
      chip: "Egzotikus állatok",
      h1: (where: string) => `Egzotikus állatorvosok ${where}`,
      lead: (n: number, total: number) =>
        `${total} állatorvosi rendelőből ${n} fogad egzotikus állatokat (hüllőket, madarakat és rágcsálókat). Érkezés előtt egyeztess telefonon a fajtát illetően.`,
      metaTitle: (where: string) => `Egzotikus állatok állatorvosai ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} egzotikus állatokat (hüllők, madarak, kisemlősök) ellátó rendelő ${where}: rendelési idő, telefonszám és útvonaltervezés.`,
    },
    "home-visits": {
      chip: "Házhoz járó állatorvos",
      h1: (where: string) => `Házhoz járó állatorvosok ${where}`,
      lead: (n: number, total: number) => `${total} állatorvosi rendelőből ${n} vállal házi vizitet és kiszállást.`,
      metaTitle: (where: string) => `Házhoz járó állatorvos ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} házhoz járó állatorvos ${where}: telefonszám, kiszállási idő és elérhető szolgáltatások.`,
    },
    english: {
      chip: "Angol nyelvű ellátás",
      h1: (where: string) => `Angolul beszélő állatorvosok ${where}`,
      lead: (n: number, total: number) =>
        `${total} állatorvosi rendelőből ${n} jelzi saját weboldalán, hogy angolul is fogad pácienseket. Érkezés előtt érdemes telefonon egyeztetni az ügyeletes orvossal.`,
      metaTitle: (where: string) => `Angolul beszélő állatorvosok (English speaking vets) ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} saját weboldala szerint angolul is rendelő állatorvos ${where}: nyitvatartás, telefonszám és útvonaltervezés.`,
    },
  },
  // Price pages (lib/pricePages.ts): one per service and city, plus an
  // overview per category. Numbers come preformatted (money, dates).
  prices: {
    crumb: "Árak",
    overviewH1: (name: string, where: string) => `${name} ${where}`,
    overviewMetaTitle: (name: string, where: string) => `${name} ${where} | Pawenn`,
    overviewIntro:
      "Mennyibe kerülnek az egyes szolgáltatások a közzétett árakkal rendelkező szolgáltatóknál. A feltüntetett átlag a medián ár: a helyek fele ennél kevesebbet, fele pedig többet kér.",
    overviewMetaDescription: (label: string, where: string, services: number) =>
      `${label} ${where}: ${services} szolgáltatás árainak összehasonlítása az átlagárakkal és ársávokkal. Hivatalos, közzétett árlisták alapján, dátummal.`,
    serviceH1: (service: string, where: string) => `${service} ${where}: árak`,
    serviceMetaTitle: (service: string, where: string, from: string) => `${service} ${where} – ${from}-tól | Pawenn`,
    /** Meta description of a service price page: "<service> <where>:" + the answer, the cheapest place in between. */
    serviceMetaLead: (service: string, where: string) => `${service} ${where}:`,
    cheapest: (name: string, price: string) => `A legkedvezőbb: ${name}, ${price}.`,
    answer: (from: string, to: string, median: string, places: number, date: string) =>
      `Az árak ${from}-tól ${to}-ig terjednek, az átlagár ${median}. ${places} hely árait hasonlítottuk össze; ellenőrizve: ${date}.`,
    fewPlaces: (places: number) =>
      `Jelenleg mindössze ${places} hely tette közzé ezt az árat: túl kevés az összehasonlításhoz.`,
    question: (service: string, where: string) => `Mennyibe kerül a(z) ${service.toLowerCase()} ${where}?`,
    includes: "Mit tartalmaz az ár",
    place: "Hely",
    price: "Ár",
    vsMarket: "A városi átlaghoz képest",
    notComparedTitle: "Egyéb árak (nem összehasonlított)",
    notComparedIntro: "Részleges díjak, valamint óradíjak és kilométerdíjak.",
    otherServices: "Egyéb árak",
    service: "Szolgáltatás",
    range: "Ársáv",
    median: "Átlag",
    places: "Helyek",
    seeAll: (label: string) => `Minden: ${label.toLowerCase()}`,
    linkFromListing: (where: string) => `Árak ${where}`,
    source: "árlista",
  },
};
