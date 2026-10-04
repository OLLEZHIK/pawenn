// Czech UI strings (docs/playbooks/add-language.md).
import { plural as _plural } from "../locales";
import type { Dictionary } from "./en";

// Note: "cs" will be added to LOCALES and DATE_LOCALE in step 3 (website/lib/locales.ts).
// Until then, this cast allows plural("cs", n, forms) to typecheck without modifying locales.ts.
const plural = _plural as unknown as (
  locale: "cs",
  n: number,
  forms: { one: string; few?: string; many?: string; other: string }
) => string;

// Czech sentences need "in <place>" in the locative; `inCity` gives
// "v Praze" for cities with a Czech in_city and "– Vinohrady, Praha"
// (a heading-style label) otherwise, which becomes "v lokalitě ...".
function csIn(where: string): string {
  return where.startsWith("– ") ? `v lokalitě ${where.slice(2)}` : where;
}

function cap(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const cs: Dictionary = {
  nav: {
    browse: "Procházet",
    help: "Nápověda",
    listBusiness: "Přidejte svůj podnik na pawenn",
    findCare: "Najít péči",
    browseServices: "Procházet",
    services: "Služby",
    foodAndSupplies: "Krmiva a doplňky",
    comingSoon: "Již brzy",
    howItWorks: "Nápověda – jak pawenn funguje",
    listYourBusiness: "Přidat podnik",
    openMenu: "Procházet",
    closeMenu: "Zavřít menu",
    language: "Jazyk",
    locating: "Hledáme vaše město…",
  },
  food: [
    { label: "Krmivo pro psy", blurb: "Nejlepší krmivo podle plemene a věku" },
    { label: "Krmivo pro kočky", blurb: "Mokrá, suchá i veterinární krmiva" },
    { label: "Doplňky stravy", blurb: "Klouby, kůže, srst a zažívání" },
  ],
  footer: {
    tagline: (where: string | null) =>
      `Přátelský a nezávislý průvodce službami pro zvířata${where ? ` ${csIn(where)}` : ""}. Bez registrace a bez reklam – jen informace, které potřebujete, abyste mohli rovnou zavolat.`,
    sourced: "Každý záznam odkazuje na svůj zdroj",
    services: "Služby",
    about: "pawenn",
    legal: "Právní informace",
    howItWorks: "Jak to funguje",
    addBusiness: "Přidat podnik",
    fixListing: "Opravit záznam",
    privacy: "Zásady ochrany osobních údajů",
    terms: "Podmínky použití",
    madeWithCare: (where: string | null) => `S láskou ke zvířatům${where ? ` ${csIn(where)}` : ""}`,
    cities: "Města",
  },
  cityHub: {
    metaTitle: (where: string) => `Služby pro zvířata ${where} – veterináři, psí salony, hotely | Pawenn`,
    metaDescription: (n: number, where: string) =>
      `Služby pro zvířata ${where}: ${n} ${plural("cs", n, { one: "podnik", few: "podniky", many: "podniků", other: "podniků" })} – veterináři, psí salony, hotely pro psy, výcvik, chovatelské potřeby a hlídání, s otevírací dobou, cenami a kontaktem na jedno klepnutí.`,
    h1Before: "Služby pro zvířata",
    intro:
      "Všechny služby pro zvířata na jednom místě: veterináři, psí salony, hotely, výcvik, chovatelské potřeby a hlídání, každý podnik s ověřeným zdrojem. Níže najdete výběr z každé kategorie, kompletní seznam zobrazíte výběrem služby výše.",
  },
  animals: {
    any: "Všechna zvířata",
    choose: "Jaké zvíře?",
    dog: "Psi",
    cat: "Kočky",
    "small-pet": "Malá zvířata",
    bird: "Ptáci",
    fish: "Ryby",
  } as Record<string, string>,
  animalSingular: {
    dog: "Pes",
    cat: "Kočka",
    "small-pet": "Malé zvíře",
    bird: "Pták",
    fish: "Ryba",
  } as Record<string, string>,
  home: {
    metaTitle: (where: string | null) =>
      `Služby pro zvířata${where ? ` ${csIn(where)}` : ""} – veterináři, psí salony, hotely | Pawenn`,
    metaDescription: (where: string | null) =>
      `Najděte ověřené služby pro zvířata${where ? ` ${csIn(where)}` : ""} – psí salony, veterináři, hotely pro zvířata, výcvik a další s kontaktem na jedno klepnutí`,
    h1: "Spokojený mazlíček, klidná hlava",
    subtitle:
      "Veterináři, psí salony, hotely a výcvik s\u00a0telefonem, otevírací dobou a cenami. U každého podniku uvádíme, odkud údaje pocházejí a kdy jsme je ověřili.",
    popular: "Oblíbené:",
    statCities: (n: number) => plural("cs", n, { one: "město", few: "města", many: "měst", other: "měst" }),
    statPlaces: (n: number) =>
      plural("cs", n, {
        one: "podnik v katalogu",
        few: "podniky v katalogu",
        many: "podniků v katalogu",
        other: "podniků v katalogu",
      }),
    statCountries: (n: number) => plural("cs", n, { one: "země", few: "země", many: "zemí", other: "zemí" }),
    statKinds: (n: number) =>
      plural("cs", n, {
        one: "druh služeb",
        few: "druhy služeb",
        many: "druhů služeb",
        other: "druhů služeb",
      }),
    statPeople: "lidí, kterým může Pawenn pomoci",
    browseEyebrow: "Podle služby",
    browseTitle: "Co dnes potřebuje váš mazlíček?",
    browseBody: "Šest druhů péče, každý s vlastním seznamem podniků a ověřeným zdrojem u každého záznamu.",
    places: (n: number) =>
      `${n} ${plural("cs", n, { one: "podnik", few: "podniky", many: "podniků", other: "podniků" })}`,
    placesInCities: (n: number, cities: number) =>
      `${n} ${plural("cs", n, { one: "podnik", few: "podniky", many: "podniků", other: "podniků" })} v ${cities} ${plural(
        "cs",
        cities,
        { one: "městě", few: "městech", many: "městech", other: "městech" }
      )}`,
    chooseCityTitle: (label: string) => `${label}: vyberte město`,
    chooseCityIntro: "Vyberte si město – nebo za vás najdeme to nejbližší.",
    nearMe: "Nejblíže ke mně",
    exploreEyebrow: "Prozkoumejte město",
    exploreTitle: (city: string) => `Co najdete ve své části města ${city}?`,
    exploreBody: "Klepněte na městskou část a uvidíte, co je poblíž. Větší bublina znamená více podniků.",
    partnersEyebrow: "Partneři",
    partnersTitle: "Doporučení partneři",
    partnersBody: "Placená umístění – vždy zřetelně označená, nikdy se nemíchají do běžného pořadí.",
    howEyebrow: "Jak to funguje",
    howTitle: "Od „potřebuji psí salon“ k telefonátu za minutu",
    steps: [
      {
        title: "Vyberte, co potřebujete",
        body: "Zvolte zvíře, službu a městskou část – nebo si jednoduše prohlédněte celou kategorii.",
      },
      {
        title: "Porovnejte s jistotou",
        body: "Každý záznam odkazuje na zdroj svých údajů. Placená umístění jsou vždy označená.",
      },
      {
        title: "Kontaktujte je přímo",
        body: "Zavolejte, otevřete web nebo navigaci na jedno klepnutí. Bez registrace a bez rezervačních poplatků.",
      },
    ],
    howLink: "Jak záznamy ověřujeme",
    careEyebrow: "Koutek péče",
    careTitle: "Otestujte se a zjistěte něco nového",
    careBody: "Minutový kvíz o mýtech, které o zvířatech slyšel každý – a pár užitečných návyků navrch.",
    tips: [
      {
        title: "Drápky stříhejte každé 3–4 týdny",
        body: "Přerostlé drápy mění chůzi psů i koček a snadněji se štěpí. Krátké zastřižení jednou za pár týdnů udrží tlapky v pohodlí.",
      },
      {
        title: "Proč kočka nutně potřebuje škrabadlo?",
        body: "Nejde jen o váš nábytek – škrábáním si kočka protahuje svaly, obrušuje starou vrstvu drápků a značkuje teritorium. Dělá to tak jako tak.",
      },
      {
        title: "Kdy je čas navštívit veterináře",
        items: [
          "Jí nebo pije výrazně více či méně než obvykle",
          "Kulhá nebo odmítá skákat",
          "Jakákoli změna chování trvající déle než pár dní",
        ],
      },
      {
        title: "Krátkosrsté psy kartáčujte týdně, dlouhosrsté denně",
        body: "Pravidelné vyčesávání zachytí plstnatění dřív, než je nutné srst oholit – a je to mnohem levnější než návštěva salonu se zacuchanou srstí.",
      },
    ] as { title: string; body?: string; items?: string[] }[],
    ctaTitle: (where: string | null) => `Provozujete služby pro zvířata${where ? ` ${csIn(where)}` : ""}?`,
    ctaBody: "Přidejte svůj salon, veterinární ordinaci nebo hotel, případně nám dejte vědět, pokud v záznamu něco nesedí.",
    ctaButton: "Přidat nebo opravit záznam",
  },
  search: {
    pet: "Zvíře",
    service: "Služba",
    where: "Kde",
    petPlaceholder: "Jaké zvíře?",
    servicePlaceholder: "Co potřebujete?",
    all: (city: string) => `${city} – celé město`,
    search: "Hledat",
    showResults: "Zobrazit výsledky",
    stepPet: "1 · Vaše zvíře",
    stepService: "2 · Služba",
    stepWhere: "3 · Kde",
    popular: "Oblíbené",
    close: "Zavřít",
    nearMe: "V mém okolí",
    nearYou: "Ve vašem okolí",
    locatingYou: "Zjišťujeme vaši polohu…",
    geoDenied: "Nevadí – zadejte své město.",
    cityPlaceholder: "Vaše město",
    cityLabel: "Město",
    cityNotCovered: (typed: string, cities: string) =>
      `Ve městě ${typed} zatím nejsme. Pawenn najdete v: ${cities}.`,
    geoFar: (city: string) => `Ve vaší oblasti zatím nejsme – zadejte město, např. ${city}.`,
    dialogTitle: "Najít péči pro mazlíčka",
    dialogBody: "Vyberte zvíře a co potřebuje – ukážeme vám podniky v okolí.",
  },
  explorer: {
    district: (city: string) => `Městská část – ${city}`,
    placesListed: (n: number) =>
      plural("cs", n, { one: "podnik", few: "podniky", many: "podniků", other: "podniků" }),
    tabs: "Městské části",
  },
  quiz: {
    title: "Mýtus, nebo fakt?",
    question: (i: number, n: number) => `Otázka ${i} z ${n}`,
    myth: "Mýtus",
    fact: "Fakt",
    correct: "Správně!",
    notQuite: "Bohužel ne.",
    itsA: (isFact: boolean) => `Je to ${isFact ? "fakt" : "mýtus"}.`,
    next: "Další otázka",
    seeScore: "Zobrazit výsledek",
    playAgain: "Hrát znovu",
    perfect: "Plný počet bodů – váš mazlíček je ve skvělých rukou.",
    good: "Skvělá práce – vyznáte se!",
    meh: "Pár věcí vás překvapilo – ale teď už to víte!",
    statements: [
      {
        claim: "Teplý a suchý čumák znamená, že je pes nemocný.",
        isFact: false,
        explanation:
          "Teplota i vlhkost čumáku se u zdravých psů během dne běžně mění. Chuť k jídlu, energie a celkové chování jsou mnohem spolehlivější ukazatele.",
      },
      {
        claim: "Čokoláda je pro psy jedovatá.",
        isFact: true,
        explanation:
          "Čokoláda obsahuje theobromin, který psi odbourávají velmi pomalu. Nejvíce nebezpečná je hořká čokoláda a čokoláda na vaření.",
      },
      {
        claim: "Miska mléka je skvělý pamlsek pro dospělou kočku.",
        isFact: false,
        explanation:
          "Mnoho dospělých koček trpí intolerancí na laktózu a mléko jim způsobí zažívací potíže. Čerstvá voda je pro ně to nejlepší.",
      },
      {
        claim: "Hrozny a rozinky mohou být pro psy nebezpečné.",
        isFact: true,
        explanation:
          "U některých psů mohou vyvolat selhání ledvin a žádná bezpečná dávka není známá. Mějte je vždy bezpečně mimo dosah.",
      },
      {
        claim: "Vrtění ocasem vždycky znamená, že je pes šťastný.",
        isFact: false,
        explanation:
          "Vrtění ocasem značí vzrušení nebo soustředění – může jít o radost, ale také o stres či nejistotu. Sledujte postoj celého těla, ne pouze ocas.",
      },
      {
        claim: "Kočky vždy dopadnou na všechny čtyři, takže pád z balkonu jim neublíží.",
        isFact: false,
        explanation:
          "Kočky sice mají narovnávací reflex, ale pády z oken a balkonů každoročně zraní spoustu koček. Zabezpečte okna i balkon sítí.",
      },
      {
        claim: "I kočky žijící výhradně v bytě potřebují očkování.",
        isFact: true,
        explanation:
          "Některé viry můžete přinést domů na botách či oblečení a i bytová kočka občas musí na veterinu či do hotelu. Poraďte se se svým veterinářem.",
      },
    ],
  },
  listing: {
    home: "Úvod",
    browseCount: (count: number, _what: string, where: string) =>
      `${cap(csIn(where))} máme v katalogu ${count} ${plural("cs", count, {
        one: "podnik",
        few: "podniky",
        many: "podniků",
        other: "podniků",
      })} a u každého uvádíme ověřený zdroj údajů.`,
    listed: "v katalogu",
    verified: "ověřených",
    priceRange: "cenové rozpětí",
    districts: "městských částí",
    from: "od",
    otherServices: "Další služby",
    filterDistrict: "Filtrovat podle městské části",
    allOf: (city: string) => `${city} – celé město`,
    results: (n: number) =>
      `${n} ${plural("cs", n, { one: "výsledek", few: "výsledky", many: "výsledků", other: "výsledků" })}`,
    seeAll: (label: string, n: number) => `Vše: ${label.toLowerCase()} (${n})`,
    showAll: (n: number) => `Zobrazit všechny (${n})`,
    fairTurn: "pořadí se mění každý den, aby měl každý stejnou šanci",
    nearest: "nejbližší nahoře",
    sortLabel: "Seřadit",
    sortRecommended: "Doporučené",
    sortNearest: "Nejbližší",
    sortRating: "Nejlépe hodnocené",
    sortReviews: "Nejvíce recenzí",
    ratingFirst: "nejlépe hodnocené nahoře",
    reviewsFirst: "nejvíce recenzí nahoře",
    filterRating: "Filtrovat podle hodnocení na Google",
    ratingAny: "Jakékoli hodnocení",
    hiddenUnrated: (n: number) => `skryto bez hodnocení: ${n}`,
    openNowFilter: "Otevřeno nyní",
    allServices: "Všechny služby",
    geoOff: "Poloha je vypnutá – zobrazujeme všechny podniky.",
    hiddenNoHours: (n: number) => `skryto bez otevírací doby: ${n}`,
    kmAway: (km: string) => `${km} km od vás`,
    goodToKnow: "Dobré vědět",
    faqTitle: "Časté dotazy",
    byDistrict: "Podle městské části",
    missingTitle: "Znáte podnik, který tu chybí?",
    missingBody: "Dejte nám o něm vědět nebo nahlaste neaktuální údaje.",
    missingLink: "Přidat nebo opravit záznam",
    emptyTitle: "Zatím tu nic není",
    emptyBody: "Těmto filtrům neodpovídá žádný podnik. Zkuste jinou městskou část nebo zvíře.",
    reset: "Resetovat filtry",
    metaTitle: (label: string, where: string) => `${label} ${where} | Pawenn`,
    metaDescription: (count: number, what: string, where: string) =>
      `${cap(what)} ${csIn(where)}: ${count} ${plural("cs", count, {
        one: "podnik",
        few: "podniky",
        many: "podniků",
        other: "podniků",
      })} s kontakty, mapou a ověřenými zdroji údajů.`,
    faqCount: (pluralLabel: string, where: string) =>
      `Kolik podniků v kategorii „${cap(pluralLabel)}“ najdete ${csIn(where)}?`,
    faqCountAnswer: (n: number, _singular: string, where: string) =>
      `${cap(csIn(where))} je momentálně v katalogu ${n} ${plural("cs", n, {
        one: "podnik",
        few: "podniky",
        many: "podniků",
        other: "podniků",
      })}.`,
    faqPrice: (_singular: string, where: string, pluralLabel: string) =>
      `Jaké jsou ceny v kategorii „${cap(pluralLabel)}“ ${csIn(where)}?`,
    faqPriceAnswer: (range: string) =>
      `Ceny v katalogu se pohybují v rozmezí ${range} podle zveřejněných ceníků.`,
    faqVerified: (pluralLabel: string, where: string) =>
      `Které podniky v kategorii „${cap(pluralLabel)}“ ${csIn(where)} jsou ověřené?`,
    faqVerifiedAnswer: (v: number, n: number, pct: number) =>
      `${v} z ${n} záznamů (${pct} %) má ručně ověřené údaje.`,
  },
  card: {
    priceLevel: (tier: number) => `Cenová hladina ${tier} z 5`,
    vsMarket: (pct: number, marketBand: boolean): string =>
      marketBand ? "Průměr ve městě" : pct < 0 ? "Pod průměrem ve městě" : "Nad průměrem ve městě",
    vsMarketHint: "Ve srovnání s průměrnou cenou stejných služeb ve městě",
  },
  rating: {
    countGoogle: (count: string) => `${count} · Google`,
    aria: (value: string, count: number) =>
      `Hodnocení ${value} z 5 na základě ${count} ${plural("cs", count, {
        one: "hodnocení",
        few: "hodnocení",
        many: "hodnocení",
        other: "hodnocení",
      })} na Google`,
  },
  insights: {
    title: "Co říkají zákazníci",
    summary: (n: number, period: string) =>
      `Shrnutí pawenn z ${n} ${plural("cs", n, {
        one: "recenze",
        few: "recenzí",
        many: "recenzí",
        other: "recenzí",
      })} na Google za období ${period}`,
    allOnGoogle: "Všechny recenze na Google",
    disclosure: "Souhrn veřejných recenzí z Google; pawenn jejich obsah neověřuje.",
    sentiment: { positive: "Převážně pozitivní", mixed: "Smíšené", negative: "Převážně negativní" },
    mentions: (m: number, n: number) => `${m} z ${n} recenzí`,
    faqTitle: "Otázky, které majitelé řeší",
    shortNote:
      "Shrnutí recenzí od pawenn pro tento podnik zatím nemáme. Hodnocení i všechny recenze najdete na Google.",
  },
  vetNow: {
    button: "Veterina teď",
    buttonHint: "Nejbližší veterináři, kteří mají právě otevřeno",
    locating: "Zjišťujeme vaši polohu…",
    callFirst: "Před cestou zavolejte: popište situaci a ověřte, zda vás mohou hned přijmout.",
    noneOpen: "Právě teď nemá otevřeno žádný veterinář se zveřejněnou otevírací dobou. Nejdříve otevírají:",
    opensToday: (time: string) => `otevírá dnes v ${time}`,
    opensTomorrow: (time: string) => `otevírá zítra v ${time}`,
    opensLater: (date: string, time: string) => `otevírá ${date} v ${time}`,
    nonstopTitle: "Nonstop 24/7",
  },
  actions: { call: "Zavolat", website: "Web", route: "Trasa" },
  badges: { verified: (date: string) => `Ověřeno ${date}`, partner: "Partner" },
  business: {
    metaTitle: (name: string, label: string, where: string) => `${name} – ${label}${where ? ` ${where}` : ""}`,
    metaDescription: (name: string, where: string) =>
      `${name}${where ? ` ${where}` : ""}: adresa, kontakt a trasa.`,
    metaDescriptionTail: (hasPrices: boolean) =>
      `Otevírací doba${hasPrices ? ", ceny" : ""}, telefon a trasa.`,
    about: "O podniku",
    goodToKnow: "Dobré vědět",
    goodToKnowNote: "Tak, jak to podnik uvádí na svém oficiálním webu.",
    faqTitle: "Otázky před telefonátem",
    cityPricesTitle: (where: string) => `Kolik to stojí ${csIn(where)}`,
    cityPricesIntro: "Ceník není k dispozici. Průměrné ceny ve městě:",
    welcomes: "Přijímá",
    specialties: "Specializace",
    openingHours: "Otevírací doba",
    prices: "Ceny",
    standard: "Standard",
    sizes: { MINI: "mini", SMALL: "malý", MEDIUM: "střední", LARGE: "velký", XL: "XL" } as Record<string, string>,
    location: "Poloha",
    openInMaps: "Otevřít v Mapách",
    mapTitle: (name: string) => `Mapa – ${name}`,
    reviews: "Recenze",
    reviewsCount: (n: number) =>
      `(${n} ${plural("cs", n, { one: "recenze", few: "recenze", many: "recenzí", other: "recenzí" })})`,
    fromN: (n: number) => `z ${n}`,
    noReviews: "Zatím bez recenzí – byli jste zde se svým zvířetem? Buďte první.",
    leaveReview: "Napsat recenzi",
    getInTouch: "Kontakt",
    phone: "Telefon",
    website: "Web",
    email: "E-mail",
    address: "Adresa",
    noFees: "Kontaktujete podnik přímo – pawenn si neúčtuje žádné poplatky.",
    keepExploring: "Prozkoumejte další",
    moreNearby: (label: string) => `Další ${label.toLowerCase()} v okolí`,
    seeAll: "Zobrazit vše",
    infoVerified: (date: string) => `Údaje ověřeny: ${date}`,
    source: "zdroj:",
    reportIssue: "Nahlásit chybu",
    days: {
      mo: "Pondělí",
      tu: "Úterý",
      we: "Středa",
      th: "Čtvrtek",
      fr: "Pátek",
      sa: "Sobota",
      su: "Neděle",
    } as Record<string, string>,
    openNow: "Otevřeno",
    closedNow: "Zavřeno",
    closedDay: "Zavřeno",
    allDay: "Nonstop",
    byAppointment: "Pouze na objednání",
    hoursChecked: (date: string) => `Otevírací doba ověřena ${date}`,
    nonstop: "Nonstop 24/7",
    emergency: "Pohotovost",
    placeIn: {
      before: (singular: string) =>
        `${singular.charAt(0).toUpperCase()}${singular.slice(1)} v městské části `,
    },
    homeVisits: "Výjezdy k pacientům",
    languages: (list: string) => `Personál hovoří: ${list}`,
    instagram: "Instagram",
    facebook: "Facebook",
    cityAverage: (price: string) => `Průměr ve městě ${price}`,
    lessBy: (amount: string) => `o ${amount} méně`,
    moreBy: (amount: string) => `o ${amount} více`,
    allPrices: (n: number) => `Všechny ceny (${n})`,
    priceFrom: (price: string) => `od ${price}`,
    weightUpTo: (kg: string) => `do ${kg} kg`,
    weightOver: (kg: string) => `nad ${kg} kg`,
    weightRange: (from: string, to: string) => `${from}–${to} kg`,
    pricesChecked: (date: string) => `Ověřeno ${date}`,
    priceList: "ceník",
    perUnit: { per_hour: "/ hod.", per_km: "/ km" } as Record<string, string>,
    notCompared: "neporovnáváme s ostatními podniky",
    pricesDisclaimer:
      "Ceny odpovídají ceníku zveřejněnému podnikem k uvedenému datu. Mohou se změnit – před objednáním si je ověřte.",
  },
  reviewForm: {
    name: "Vaše jméno",
    rating: "Hodnocení",
    stars: (n: number) =>
      `${n} ${plural("cs", n, { one: "hvězdička", few: "hvězdičky", many: "hvězdiček", other: "hvězdiček" })}`,
    review: "Recenze",
    submit: "Odeslat recenzi",
    submitting: "Odesílání...",
    thanks: "Děkujeme, vaše recenze se zobrazí po schválení.",
    error: "Něco se pokazilo.",
  },
  notFound: {
    title: "Ztratili jsme stopu",
    body: "Všechno jsme pročuchali, ale tuhle stránku se nám najít nepodařilo. Možná se přesunula nebo je v odkazu překlep.",
    back: "Zpět na hlavní stránku",
  },
  attributes: {
    nonstop: {
      chip: "Nonstop 24/7",
      h1: (where: string) => `Veterinární pohotovost nonstop ${csIn(where)}`,
      lead: (n: number, total: number) =>
        `${n} z ${total} veterinárních klinik přijímá pacienty 24 hodin denně, 7 dní v týdnu. Před cestou vždy nejdříve zavolejte.`,
      metaTitle: (where: string) => `Veterinární pohotovost nonstop ${csIn(where)} – 24/7 | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `Nonstop veterinární kliniky ${csIn(where)}: ${n} ${plural("cs", n, {
          one: "klinika",
          few: "kliniky",
          many: "klinik",
          other: "klinik",
        })} otevřených 24 hodin denně, 7 dní v týdnu – adresa, telefon a trasa.`,
    },
    saturday: {
      chip: "Otevřeno v sobotu",
      h1: (where: string) => `Veterinární kliniky otevřené v sobotu ${csIn(where)}`,
      lead: (n: number, total: number) =>
        `V sobotu má otevřeno ${n} z ${total} veterinárních klinik. Otevírací doba níže, ověřeno u každé kliniky.`,
      metaTitle: (where: string) => `Veterinář v sobotu ${csIn(where)} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} ${plural("cs", n, {
          one: "veterinární klinika",
          few: "veterinární kliniky",
          many: "veterinárních klinik",
          other: "veterinárních klinik",
        })} ${csIn(where)} otevřených v sobotu – otevírací doba, telefon a trasa.`,
    },
    sunday: {
      chip: "Otevřeno v neděli",
      h1: (where: string) => `Veterinární kliniky otevřené v neděli ${csIn(where)}`,
      lead: (n: number, total: number) =>
        `V neděli má otevřeno ${n} z ${total} veterinárních klinik. Otevírací doba níže, ověřeno u každé kliniky.`,
      metaTitle: (where: string) => `Veterinář v neděli ${csIn(where)} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} ${plural("cs", n, {
          one: "veterinární klinika",
          few: "veterinární kliniky",
          many: "veterinárních klinik",
          other: "veterinárních klinik",
        })} ${csIn(where)} otevřených v neděli – otevírací doba, telefon a trasa.`,
    },
    exotics: {
      chip: "Exotická zvířata",
      h1: (where: string) => `Veterináři pro exotická zvířata ${csIn(where)}`,
      lead: (n: number, total: number) =>
        `Exotická zvířata – plazy, ptáky a hlodavce – ošetřuje ${n} z ${total} veterinárních klinik. Před návštěvou si telefonicky ověřte váš konkrétní druh.`,
      metaTitle: (where: string) => `Veterina pro exotická zvířata ${csIn(where)} – plazi, ptáci, hlodavci | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} ${plural("cs", n, {
          one: "veterinární klinika",
          few: "veterinární kliniky",
          many: "veterinárních klinik",
          other: "veterinárních klinik",
        })} ${csIn(where)} pro exotická zvířata: plazi, ptáci, hlodavci. Otevírací doba, telefon a trasa.`,
    },
    "home-visits": {
      chip: "Výjezdy domů",
      h1: (where: string) => `Veterináři s výjezdem domů ${csIn(where)}`,
      lead: (n: number, total: number) =>
        `Výjezd přímo k vám domů nabízí ${n} z ${total} veterinárních klinik.`,
      metaTitle: (where: string) => `Veterinář domů ${csIn(where)} – výjezdová služba | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} ${plural("cs", n, {
          one: "veterinární klinika",
          few: "veterinární kliniky",
          many: "veterinárních klinik",
          other: "veterinárních klinik",
        })} ${csIn(where)} s výjezdem domů – telefon, otevírací doba a nabízené služby.`,
    },
    english: {
      chip: "Obsluha v angličtině",
      h1: (where: string) => `Anglicky mluvící veterináři ${csIn(where)}`,
      lead: (n: number, total: number) =>
        `${n} z ${total} veterinárních klinik uvádí na svém webu, že obslouží klienty v angličtině. Předem si telefonicky ověřte, kdo má službu.`,
      // TODO(cs-check): Zda pro metaTitle použít "English-speaking vets" jako v PL pro expat SEO, nebo český název
      metaTitle: (where: string) => `Anglicky mluvící veterinář ${csIn(where)} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} ${plural("cs", n, {
          one: "veterinární klinika",
          few: "veterinární kliniky",
          many: "veterinárních klinik",
          other: "veterinárních klinik",
        })} ${csIn(where)}, které podle svého webu obslouží klienty v angličtině – otevírací doba, telefon a trasa.`,
    },
  },
  prices: {
    crumb: "Ceny",
    overviewH1: (name: string, where: string) => `${name} ${csIn(where)} – ceny`,
    overviewMetaTitle: (name: string, where: string) => `${name} ${csIn(where)} – ceník a ceny | Pawenn`,
    overviewIntro:
      "Kolik stojí jednotlivé služby – srovnání podniků, které zveřejňují ceník. Průměrem je zde medián (střední hodnota): polovina podniků je levnější, polovina dražší.",
    overviewMetaDescription: (label: string, where: string, services: number) =>
      `${cap(label)} ${csIn(where)}: ceny ${services} ${plural("cs", services, {
        one: "služby",
        few: "služeb",
        many: "služeb",
        other: "služeb",
      })} porovnané napříč podniky, s průměrem i rozpětím. Ze zveřejněných ceníků, s datem ověření.`,
    serviceH1: (service: string, where: string) => `${service} ${csIn(where)} – ceny`,
    serviceMetaTitle: (service: string, where: string, from: string) => `${service} ${csIn(where)} – od ${from} | Pawenn`,
    answer: (from: string, to: string, median: string, places: number, date: string) =>
      `Ceny od ${from} do ${to}, průměr ${median}. Porovnali jsme ${places} ${plural("cs", places, {
        one: "podnik",
        few: "podniky",
        many: "podniků",
        other: "podniků",
      })}; ceníky ověřeny ${date}.`,
    fewPlaces: (places: number) =>
      `Tuto cenu zatím ${plural("cs", places, {
        one: "zveřejnil",
        few: "zveřejnily",
        many: "zveřejnilo",
        other: "zveřejnilo",
      })} pouze ${places} ${plural("cs", places, {
        one: "podnik",
        few: "podniky",
        many: "podniků",
        other: "podniků",
      })} – pro spolehlivé srovnání je to příliš málo.`,
    question: (service: string, where: string) => `Kolik stojí ${service.toLowerCase()} ${csIn(where)}?`,
    includes: "Co zahrnuje cena",
    place: "Podnik",
    price: "Cena",
    vsMarket: "Oproti průměru ve městě",
    notComparedTitle: "Další ceny (neporovnávané)",
    notComparedIntro: "Dílčí ceny, sazby za hodinu či kilometr nebo služby nad rámec běžného standardu.",
    otherServices: "Další ceny",
    service: "Služba",
    range: "Rozmezí",
    median: "Průměr",
    places: "Podniky",
    seeAll: (label: string) => `Vše: ${label.toLowerCase()}`,
    linkFromListing: (where: string) => `Ceny ${csIn(where)}`,
    source: "ceník",
  },
};
