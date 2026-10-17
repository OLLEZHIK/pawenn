// Finnish UI strings (docs/playbooks/add-language.md, step 2). "{where}"
// arrives ready-made from in_city ("Helsingissä", "Espoossa", "Tampereella").
// The language is switched on in step 3 (lib/locales.ts, lib/i18n.ts).
import type { Dictionary } from "./en";

const cap = (text: string): string => text.charAt(0).toUpperCase() + text.slice(1);

const plural = (_lang: "fi", n: number, forms: { one: string; other: string }): string =>
  n === 1 ? forms.one : forms.other;

export const fi: Dictionary = {
  nav: {
    browse: "Selaa",
    help: "Ohjeet",
    listBusiness: "Lisää yrityksesi pawenniin",
    findCare: "Etsi lemmikkipalveluita",
    browseServices: "Selaa",
    services: "Palvelut",
    foodAndSupplies: "Ruoat ja lisäravinteet",
    comingSoon: "Tulossa pian",
    howItWorks: "Ohjeet: näin pawenn toimii",
    listYourBusiness: "Lisää yrityksesi",
    openMenu: "Selaa",
    closeMenu: "Sulje valikko",
    language: "Kieli",
    locating: "Etsitään kaupunkiasi…",
  },
  food: [
    { label: "Koiranruoka", blurb: "Parasta ruokaa koirasi rodun ja iän mukaan" },
    { label: "Kissanruoka", blurb: "Märkäruoat, kuivaruoat ja erikoisruokavaliot" },
    { label: "Lisäravinteet", blurb: "Nivelet, iho, turkki ja ruoansulatus" },
  ],
  footer: {
    tagline: (where: string | null) =>
      `Ystävällinen ja riippumaton lemmikkipalveluiden opas${where ? ` ${where}` : ""}. Ei rekisteröitymistä, ei mainoksia – vain tarvittavat tiedot yhteydenottoon.`,
    sourced: "Jokainen kohde linkittää lähteeseensä",
    services: "Palvelut",
    about: "pawenn",
    legal: "Lakitiedot",
    howItWorks: "Miten palvelu toimii",
    addBusiness: "Lisää yrityksesi",
    fixListing: "Korjaa tietoja",
    privacy: "Tietosuojaseloste",
    terms: "Käyttöehdot",
    madeWithCare: (where: string | null) => `Tehty rakkaudella lemmikeille${where ? ` ${where}` : ""}`,
    cities: "Kaupungit",
  },
  cityHub: {
    metaTitle: (where: string) => `Lemmikkipalvelut ${where} – eläinlääkärit, trimmaus, hoitolat | Pawenn`,
    metaDescription: (n: number, where: string) =>
      `${n} ${plural("fi", n, { one: "lemmikkipalvelu", other: "lemmikkipalvelua" })} ${where}: eläinlääkärit, trimmaamot, koirahoitolat, koirakoulut, eläinkaupat ja hoitajat aukioloaikoineen, hintoineen ja suorine yhteystietoineen.`,
    h1Before: "Lemmikkipalvelut",
    intro:
      "Kaikki lemmikkipalvelut yhdellä sivulla: eläinlääkärit, trimmaamot, hoitolat, kouluttajat, eläinkaupat ja hoitajat, jokainen omalla lähteellään. Alla näet esimerkkejä eri palveluista; valitse palvelu ylhäältä nähdäksesi täyden luettelon.",
  },
  animals: {
    any: "Mikä tahansa lemmikki",
    choose: "Mikä lemmikki?",
    dog: "Koirat",
    cat: "Kissat",
    "small-pet": "Pieneläimet",
    bird: "Linnut",
    fish: "Kalat",
  } as Record<string, string>,
  animalSingular: {
    dog: "Koira",
    cat: "Kissa",
    "small-pet": "Pieneläin",
    bird: "Lintu",
    fish: "Kala",
  } as Record<string, string>,
  home: {
    /** `where` is null once the site covers several cities. */
    metaTitle: (where: string | null) => `Lemmikkipalvelut${where ? ` ${where}` : ""} – eläinlääkärit, trimmaus, hoitolat | Pawenn`,
    metaDescription: (where: string | null) =>
      `Löydä luotettavat lemmikkipalvelut${where ? ` ${where}` : ""} – trimmaamot, eläinlääkärit, hoitolat, koulutus ja paljon muuta`,
    h1: "Tyytyväinen lemmikki, huoleton mieli",
    subtitle:
      "Eläinlääkärit, trimmaamot, hoitolat ja kouluttajat puhelinnumeroineen, aukioloaikoineen ja hintoineen. Jokaisessa kortissa kerrotaan, mistä tiedot ovat peräisin ja milloin ne on tarkistettu.",
    popular: "Suositut:",
    statCities: (n: number): string => plural("fi", n, { one: "kaupunki", other: "kaupunkia" }),
    statPlaces: (n: number): string => plural("fi", n, { one: "listattu paikka", other: "listattua paikkaa" }),
    statCountries: (n: number): string => plural("fi", n, { one: "maa", other: "maata" }),
    statKinds: (n: number): string => plural("fi", n, { one: "palvelutyyppi", other: "palvelutyyppiä" }),
    statPeople: "ihmistä, joita Pawenn voi auttaa",
    browseEyebrow: "Selaa palveluittain",
    browseTitle: "Mitä lemmikkisi tarvitsee tänään?",
    browseBody: "Kuusi lemmikinhoidon kategoriaa, jokaisessa omat toimipisteensä ja varmistettu lähde jokaiselle tiedolle.",
    places: (n: number) => `${n} ${plural("fi", n, { one: "paikka", other: "paikkaa" })}`,
    placesInCities: (n: number, cities: number) =>
      `${n} ${plural("fi", n, { one: "paikka", other: "paikkaa" })} ${cities} ${plural("fi", cities, { one: "kaupungissa", other: "kaupungissa" })}`,
    chooseCityTitle: (label: string) => `${label}: valitse kaupunki`,
    chooseCityIntro: "Valitse oma kaupunkisi tai anna meidän etsiä lähin.",
    nearMe: "Lähimpänä minua",
    exploreEyebrow: "Tutustu kaupunkiin",
    exploreTitle: (city: string) => `Mitä alueeltasi löytyy: ${city}?`,
    exploreBody: "Napauta kaupunginosaa nähdäksesi lähellä olevat paikat. Mitä suurempi ympyrä, sitä enemmän paikkoja on listattu.",
    partnersEyebrow: "Yhteistyökumppanit",
    partnersTitle: "Esitellyt kumppanit",
    partnersBody: "Maksetut näkyvyyspaikat – aina selkeästi merkittyinä, ei koskaan sekoitettuna luonnolliseen järjestykseen.",
    howEyebrow: "Näin se toimii",
    howTitle: "Trimmaustarpeesta puheluun alle minuutissa",
    steps: [
      { title: "Valitse mitä tarvitset", body: "Valitse lemmikkisi, haluamasi palvelu ja kaupunginosa – tai selaa kategoriaa vapaasti." },
      {
        title: "Vertaile luotettavasti",
        body: "Jokainen kortti linkittää tietojensa alkuperäiseen lähteeseen. Maksetut kumppanipaikat on aina merkitty selvästi.",
      },
      {
        title: "Ota suoraan yhteyttä",
        body: "Soita, avaa verkkosivusto tai katso reittiohjeet yhdellä napautuksella. Ei käyttäjätilejä eikä varauspalkkioita.",
      },
    ],
    howLink: "Miten tarkistamme tiedot",
    careEyebrow: "Vinkkejä lemmikinhoitoon",
    careTitle: "Testaa tietosi ja opi uusi vinkki",
    careBody: "Minuutin mittainen tietovisa yleisimmistä lemmikkimyytteistä ja hyödyllisistä hoitorutiineista.",
    tips: [
      {
        title: "Leikkaa kynnet 3–4 viikon välein",
        body: "Liian pitkät kynnet muuttavat koiran ja kissan askellusta ja murtuvat helpommin. Säännöllinen leikkaus muutaman viikon välein pitää tassut terveinä.",
      },
      {
        title: "Miksi kissa tarvitsee raapimapuun?",
        body: "Kyse ei ole huonekaluistasi: raapiminen venyttää lihaksia, poistaa kynsien kuolleen pintakerroksen ja merkitsee reviiriä. Kissa raapii joka tapauksessa, oli sillä raapimapuuta tai ei.",
      },
      {
        title: "Merkkejä, joiden vuoksi kannattaa käydä eläinlääkärissä",
        items: [
          "Syö tai juo huomattavasti tavallista enemmän tai vähemmän",
          "Ontuminen tai haluttomuus hypätä",
          "Mikä tahansa muutos, joka kestää yli pari päivää",
        ],
      },
      {
        title: "Harjaa lyhytkarvainen koira viikoittain ja pitkäkarvainen päivittäin",
        body: "Säännöllisellä harjauksella takut huomataan ajoissa ennen huopaantumista, mikä tulee huomattavasti edullisemmaksi kuin takkujen selvitys trimmaamossa.",
      },
    ] as { title: string; body?: string; items?: string[] }[],
    ctaTitle: (where: string | null) => `Omistatko lemmikkialan yrityksen${where ? ` ${where}` : ""}?`,
    ctaBody: "Lisää salonkisi, klinikkasi tai hoitolasi, tai ilmoita meille, jos tietosi kaipaavat päivitystä.",
    ctaButton: "Lisää tai korjaa tietoja",
  },
  search: {
    pet: "Lemmikki",
    service: "Palvelu",
    where: "Missä",
    petPlaceholder: "Mikä lemmikki?",
    servicePlaceholder: "Mitä tarvitset?",
    all: (city: string) => `Koko ${city}`,
    search: "Hae",
    showResults: "Näytä tulokset",
    stepPet: "1 · Lemmikkisi",
    stepService: "2 · Palvelu",
    stepWhere: "3 · Missä",
    popular: "Suositut",
    close: "Sulje",
    nearMe: "Lähellä minua",
    nearYou: "Lähellä sinua",
    locatingYou: "Haetaan sijaintiasi…",
    geoDenied: "Ei se mitään: kirjoita kaupunkisi.",
    cityPlaceholder: "Kaupunkisi",
    cityLabel: "Kaupunki",
    cityNotCovered: (typed: string, cities: string) => `Emme toimi vielä kaupungissa ${typed}. Pawenn löytyy täältä: ${cities}.`,
    geoFar: (city: string) => `Emme toimi vielä alueellasi: kirjoita kaupunki, esim. ${city}.`,
    dialogTitle: "Etsi lemmikkipalveluita",
    dialogBody: "Valitse lemmikkisi ja mitä se tarvitsee: näytämme lähimmät paikat.",
  },
  explorer: {
    district: (city: string) => `Kaupunginosa: ${city}`,
    placesListed: (n: number): string => plural("fi", n, { one: "listattu paikka", other: "listattua paikkaa" }),
    tabs: "Kaupunginosat",
  },
  quiz: {
    title: "Myytti vai totta?",
    question: (i: number, n: number) => `Kysymys ${i}/${n}`,
    myth: "Myytti",
    fact: "Totta",
    correct: "Oikein!",
    notQuite: "Ei aivan.",
    itsA: (isFact: boolean) => `Väite on ${isFact ? "totta" : "myytti"}.`,
    next: "Seuraava kysymys",
    seeScore: "Katso tulos",
    playAgain: "Pelaa uudelleen",
    perfect: "Täydet pisteet: lemmikkisi on parhaissa mahdollisissa käsissä!",
    good: "Hienoa työtä! Tiedät selvästi lemmikeistä paljon.",
    meh: "Matkan varrella tuli yllätyksiä – nyt tiedät enemmän!",
    statements: [
      {
        claim: "Lämmin ja kuiva kuono tarkoittaa, että koira on sairas.",
        isFact: false,
        explanation:
          "Kuonon lämpötila ja kosteus vaihtelevat pitkin päivää myös terveillä koirilla. Ruokahalu, vireystila ja yleinen käytös ovat huomattavasti luotettavampia mittareita.",
      },
      {
        claim: "Suklaa on koirille myrkyllistä.",
        isFact: true,
        explanation:
          "Suklaa sisältää teobromiinia, jota koiran elimistö poistaa hyvin hitaasti. Tumma suklaa ja leivontasuklaa ovat kaikkein vaarallisimpia.",
      },
      {
        claim: "Maitokulho on hyvä herkku aikuiselle kissalle.",
        isFact: false,
        explanation:
          "Monet aikuiset kissat ovat laktoosi-intolerantteja, ja maito voi aiheuttaa niille vatsavaivoja. Raikas vesi on ainoa juoma, jota kissa tarvitsee.",
      },
      {
        claim: "Viinirypäleet ja rusinat voivat olla koirille vaarallisia.",
        isFact: true,
        explanation:
          "Ne voivat aiheuttaa osalle koirista äkillisen munuaisten vajaatoiminnan, eikä turvallista määrää tunneta. Pidä ne aina koiran ulottumattomissa.",
      },
      {
        claim: "Häntää heiluttava koira on aina iloinen.",
        isFact: false,
        explanation:
          "Hännän heilutus kertoo kiihtymyksestä tai tarkkaavaisuudesta: se voi tarkoittaa iloa, mutta myös jännitystä tai hermostuneisuutta. Koko kehonkieltä tulee tarkastella kokonaisuutena.",
      },
      {
        claim: "Kissat putoavat aina jaloilleen, joten putoaminen parvekkeelta ei ole vaarallista.",
        isFact: false,
        explanation:
          "Kissoilla on kääntymisheijaste, mutta ikkunoista ja parvekkeilta putoaminen aiheuttaa vuosittain vakavia vammoja monille kissoille. Suojaa parveke aina verkolla.",
      },
      {
        claim: "Myös sisäkissat hyötyvät rokotuksista.",
        isFact: true,
        explanation:
          "Osa viruksista voi kulkeutua kotiin kengissä ja vaatteissa. Lisäksi sisäkissakin käy eläinlääkärissä tai hoitolassa. Kysy eläinlääkäriltä suositeltavista perusrokotuksista.",
      },
    ],
  },
  listing: {
    home: "Etusivu",
    browseCount: (count: number, what: string, where: string) =>
      `Selaa: ${count} ${what} ${where}, vahvistettu lähde jokaiselle tiedolle.`,
    listed: "listattu",
    verified: "tarkistettu",
    priceRange: "hintahaarukka",
    districts: "kaupunginosat",
    from: "alkaen",
    otherServices: "Muut palvelut",
    filterDistrict: "Rajaa kaupunginosan mukaan",
    allOf: (city: string) => `Koko ${city}`,
    results: (n: number) => `${n} ${plural("fi", n, { one: "tulos", other: "tulosta" })}`,
    seeAll: (label: string, n: number) => `Kaikki: ${label.toLowerCase()} (${n})`,
    showAll: (n: number) => `Näytä kaikki (${n})`,
    pagination: { label: "Sivut", page: (n: number) => `Sivu ${n}`, prev: "Edellinen sivu", next: "Seuraava sivu", showing: (from: number, to: number, total: number) => `Näytetään ${from}–${to} / ${total}` },
    fairTurn: "järjestys vaihtuu päivittäin tasapuolisen näkyvyyden takaamiseksi",
    nearest: "lähimmät ensin",
    sortLabel: "Järjestä",
    sortRecommended: "Suositellut",
    sortNearest: "Lähimmät",
    sortRating: "Parhaat arviot",
    sortReviews: "Eniten arvosteluja",
    ratingFirst: "parhaat arviot ensin",
    reviewsFirst: "eniten arvosteluja ensin",
    filterRating: "Rajaa Google-arvosanan mukaan",
    ratingAny: "Kaikki arvosanat",
    hiddenUnrated: (n: number) => `${n} ilman arvosanaa piilotettu`,
    openNowFilter: "Avoinna nyt",
    allServices: "Kaikki palvelut",
    picker: { service: "Palvelu", where: "Missä", filters: "Suodattimet", searchCity: "Etsi kaupunkia", done: "Valmis", rating: "Arvosana" },
    geoOff: "Sijainti ei ole käytössä: näytetään kaikki paikat.",
    hiddenNoHours: (n: number) => `${n} ilman aukioloaikoja piilotettu`,
    kmAway: (km: string) => `${km} km:n päässä`,
    goodToKnow: "Hyvä tietää",
    faqTitle: "Usein kysytyt kysymykset",
    byDistrict: "Kaupunginosittain",
    missingTitle: "Puuttuuko täältä jokin paikka?",
    missingBody: "Kerro meille tai ilmoita, jos huomaat vanhentuneita tietoja.",
    missingLink: "Lisää tai korjaa tietoja",
    emptyTitle: "Täällä ei ole vielä mitään",
    emptyBody: "Mikään paikka ei vastaa näitä suodattimia. Kokeile toista kaupunginosaa tai lemmikkiä.",
    reset: "Palauta suodattimet",
    metaTitle: (label: string, where: string) => `${label} ${where} | Pawenn`,
    metaDescription: (count: number, what: string, where: string) =>
      `Vertaile: ${count} ${what} ${where}: kaupunginosa, vastaanotettavat lemmikit sekä suorat toiminnot soittamiseen, verkkosivujen avaamiseen ja reittiohjeisiin.`,
    faqCount: (pluralStr: string, where: string) => `Montako kohdetta (${pluralStr}) löytyy alueelta ${where}?`,
    faqCountAnswer: (n: number, singular: string, where: string) =>
      `Tällä hetkellä alueella ${where} on ${n} listattu ${singular}.`,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- some languages need the plural label here
    faqPrice: (singular: string, where: string, _pluralLabel: string) => `Paljonko ${singular} maksaa ${where}?`,
    faqPriceAnswer: (range: string) => `Listattujen yritysten hinnat vaihtelevat välillä ${range} julkaistujen hinnastojen mukaan.`,
    faqVerified: (pluralStr: string, where: string) => `Mitkä kohteet (${pluralStr}) ${where} on tarkistettu?`,
    faqVerifiedAnswer: (v: number, n: number, pct: number) =>
      `${v}/${n} kortista (${pct} %) on tarkistettu manuaalisesti.`,
  },
  card: {
    priceLevel: (tier: number) => `Hintataso ${tier}/5`,
    /** Against the city market price (lib/priceMarket.ts): 0 = within the market band. */
    vsMarket: (pct: number, marketBand: boolean): string =>
      marketBand ? "Kaupungin keskitasoa" : pct < 0 ? "Keskitasoa edullisempi" : "Keskitasoa kalliimpi",
    vsMarketHint: "Verrattuna saman kaupungin vastaavien palveluiden keskihintaan",
    /** Card of a place with no published price (not for pet shops). */
    priceOnRequest: "Hinta pyydettäessä",
  },
  rating: {
    countGoogle: (count: string) => `${count} · Google`,
    aria: (value: string, count: number) => `Arvosana ${value}/5 perustuen ${count} Google-arvosteluun`,
  },
  insights: {
    title: "Mitä asiakkaat sanovat",
    summary: (n: number, period: string) => `pawennin yhteenveto ${n} Google-arvostelusta, ${period}`,
    allOnGoogle: "Kaikki arvostelut Googlessa",
    disclosure: "Kooste julkisista Google-arvosteluista; pawenn ei tarkista niitä erikseen.",
    sentiment: { positive: "Pääosin myönteisiä", mixed: "Vaihtelevia", negative: "Pääosin kielteisiä" },
    mentions: (m: number, n: number) => `${m}/${n} arvostelussa`,
    faqTitle: "Omistajien yleisimmät kysymykset",
    shortNote: "Tälle paikalle ei ole vielä pawennin arvosteluyhteenvetoa. Arvosana ja kaikki arvostelut löytyvät Googlesta.",
  },
  vetNow: {
    button: "Eläinlääkäri avoinna nyt",
    buttonHint: "Lähimmät juuri nyt avoinna olevat eläinlääkärit",
    locating: "Etsitään sijaintiasi…",
    callFirst: "Soita aina ennen lähtöä: kerro mitä on tapahtunut ja varmista, että he voivat ottaa sinut heti vastaan.",
    noneOpen: "Yksikään eläinlääkäri, jolla on julkaistut aukioloajat, ei ole auki juuri nyt. Seuraavaksi avautuvat:",
    opensToday: (time: string) => `avautuu tänään klo ${time}`,
    opensTomorrow: (time: string) => `avautuu huomenna klo ${time}`,
    opensLater: (date: string, time: string) => `avautuu ${date} klo ${time}`,
    nonstopTitle: "Avoinna 24h",
  },
  /** Analytics consent banner (GA4 runs only after "allow"). */
  consent: {
    text: "Haluaisimme käyttää Google Analyticsin ja Microsoft Clarityn analytiikkaevästeitä (mukaan lukien anonyymeja näyttötallenteita) ymmärtääksemme sivuston käyttöä ja parantaaksemme sitä. Vain luvallasi.",
    allow: "Hyväksy",
    decline: "Hylkää",
    settings: "Evästeasetukset",
  },
  actions: { call: "Soita", website: "Verkkosivusto", route: "Reittiohje" },
  badges: { verified: (date: string) => `Tarkistettu ${date}`, partner: "Yhteistyökumppani" },
  business: {
    metaTitle: (name: string, label: string, where: string) => `${name} - ${label}${where ? ` ${where}` : ""}`,
    metaDescription: (name: string, where: string) =>
      `${name}${where ? ` ${where}` : ""}: osoite, yhteystiedot ja reittiohjeet.`,
    /** After the place's own short description (SEO audit T11). */
    metaDescriptionTail: (hasPrices: boolean) =>
      `Aukioloajat${hasPrices ? ", hinnat" : ""}, puhelinnumero ja reittiohjeet.`,
    about: "Tietoa paikasta",
    goodToKnow: "Hyvä tietää",
    goodToKnowNote: "Toimipaikan omien verkkosivujen mukaan.",
    faqTitle: "Kysymyksiä ennen yhteydenottoa",
    cityPricesTitle: (where: string) => `Keskihinnat ${where}`,
    cityPricesIntro: "Tämä paikka ei ole julkaissut hintoja. Kaupungin keskiarvo, ei tämän paikan hinnat:",
    welcomes: "Vastaanottaa",
    specialties: "Erikoisalat",
    openingHours: "Aukioloajat",
    prices: "Hinnat",
    standard: "Perus",
    sizes: { MINI: "mini", SMALL: "pieni", MEDIUM: "keskikokoinen", LARGE: "suuri", XL: "XL" } as Record<string, string>,
    location: "Sijainti",
    openInMaps: "Avaa Google Mapsissa",
    mapTitle: (name: string) => `Kartta kohteen ${name} sijainnista`,
    reviews: "Arvostelut",
    reviewsCount: (n: number) => `(${n} ${plural("fi", n, { one: "arvostelu", other: "arvostelua" })})`,
    fromN: (n: number) => `/${n}`,
    noReviews: "Ei vielä arvosteluja. Oletko asioinut täällä lemmikkisi kanssa? Jätä ensimmäinen arvio.",
    leaveReview: "Kirjoita arvostelu",
    getInTouch: "Yhteystiedot",
    phone: "Puhelin",
    website: "Verkkosivusto",
    email: "Sähköposti",
    address: "Osoite",
    noFees: "Ota yhteyttä suoraan yritykseen: pawenn ei veloita välityspalkkioita.",
    keepExploring: "Jatka etsimistä",
    moreNearby: (label: string) => `Lisää kohteita lähellä: ${label.toLowerCase()}`,
    seeAll: "Näytä kaikki",
    infoVerified: (date: string) => `Tiedot tarkistettu: ${date}`,
    source: "lähde:",
    reportIssue: "Ilmoita virheestä",
    days: { mo: "Maanantai", tu: "Tiistai", we: "Keskiviikko", th: "Torstai", fr: "Perjantai", sa: "Lauantai", su: "Sunnuntai" } as Record<string, string>,
    openNow: "Avoinna nyt",
    closedNow: "Suljettu nyt",
    closedDay: "Suljettu",
    allDay: "Avoinna 24h",
    sections: { label: "Tämän sivun osiot", contact: "Yhteystiedot", prices: "Hinnat", about: "Tietoa paikasta", reviews: "Arvostelut", location: "Sijainti" },
    showMore: "Näytä lisää",
    showLess: "Näytä vähemmän",
    byAppointment: "Ajanvarauksella",
    hoursChecked: (date: string) => `Aukioloajat tarkistettu ${date}`,
    nonstop: "Avoinna 24h vuorokaudessa, 7 päivää viikossa",
    emergency: "Päivystys",
    // "Trimmaamo alueella " + <district> + ", Helsinki"
    placeIn: { before: (singular: string) => `${cap(singular)} alueella ` },
    homeVisits: "Kotikäynnit",
    languages: (list: string) => `Henkilökunta palvelee kielillä: ${list}`,
    instagram: "Instagram",
    facebook: "Facebook",
    cityAverage: (price: string) => `Kaupungin keskiarvo ${price}`,
    lessBy: (amount: string) => `${amount} edullisempi`,
    moreBy: (amount: string) => `${amount} kalliimpi`,
    allPrices: (n: number) => `Kaikki hinnat (${n})`,
    priceFrom: (price: string) => `alkaen ${price}`,
    weightUpTo: (kg: string) => `enintään ${kg} kg`,
    weightOver: (kg: string) => `yli ${kg} kg`,
    weightRange: (from: string, to: string) => `${from}–${to} kg`,
    pricesChecked: (date: string) => `Tarkistettu ${date}`,
    priceList: "hinnasto",
    perUnit: { per_hour: "/ tunti", per_km: "/ km" } as Record<string, string>,
    notCompared: "ei vertailtu muihin paikkoihin",
    pricesDisclaimer: "Hinnat perustuvat yrityksen ilmoittamiin tietoihin mainittuna päivämääränä. Hinnat voivat muuttua: vahvista ne ennen varausta.",
  },
  reviewForm: {
    name: "Nimesi",
    rating: "Arvosana",
    stars: (n: number) => `${n} ${plural("fi", n, { one: "tähti", other: "tähteä" })}`,
    review: "Arvostelu",
    submit: "Lähetä arvostelu",
    submitting: "Lähetetään...",
    thanks: "Kiitos! Arvostelusi julkaistaan tarkistuksen jälkeen.",
    error: "Tapahtui virhe.",
  },
  notFound: {
    title: "Jäljet katkesivat",
    body: "Nuuskimme kaikkialta, mutta emme löytäneet etsimääsi sivua. Se on saatettu siirtää tai linkissä on virhe.",
    back: "Palaa etusivulle",
  },
  // Attribute pages (lib/attributePages.ts): chip label, crumb, H1, the
  // one-sentence answer (n of total places), title and description.
  attributes: {
    nonstop: {
      chip: "Avoinna 24h",
      h1: (where: string) => `Päivystävät eläinlääkärit 24h ${where}`,
      lead: (n: number, total: number) =>
        `${n}/${total} eläinlääkäriasemasta päivystää potilaita vuorokauden ympäri, 7 päivää viikossa. Soita aina ennen tuloasi.`,
      metaTitle: (where: string) => `Päivystävä eläinlääkäri ${where} – avoinna 24h | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} ${plural("fi", n, { one: "eläinlääkäri", other: "eläinlääkäriä" })} ${where} ympärivuorokautisella 24/7-päivystyksellä: osoite, puhelinnumero ja reittiohjeet.`,
    },
    saturday: {
      chip: "Avoinna lauantaisin",
      h1: (where: string) => `Lauantaisin avoinna olevat eläinlääkärit ${where}`,
      lead: (n: number, total: number) => `${n}/${total} eläinlääkäriasemasta on avoinna lauantaisin. Tarkat aukioloajat alla, tarkistettu suoraan klinikoilta.`,
      metaTitle: (where: string) => `Lauantaisin avoinna olevat eläinlääkärit ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} lauantaisin avoinna ${plural("fi", n, { one: "oleva eläinlääkäriasema", other: "olevaa eläinlääkäriasemaa" })} ${where}: aukioloajat, puhelinnumero ja reittiohjeet.`,
    },
    sunday: {
      chip: "Avoinna sunnuntaisin",
      h1: (where: string) => `Sunnuntaisin avoinna olevat eläinlääkärit ${where}`,
      lead: (n: number, total: number) => `${n}/${total} eläinlääkäriasemasta on avoinna sunnuntaisin. Tarkat aukioloajat alla, tarkistettu suoraan klinikoilta.`,
      metaTitle: (where: string) => `Sunnuntaisin avoinna olevat eläinlääkärit ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} sunnuntaisin avoinna ${plural("fi", n, { one: "oleva eläinlääkäriasema", other: "olevaa eläinlääkäriasemaa" })} ${where}: aukioloajat, puhelinnumero ja reittiohjeet.`,
    },
    exotics: {
      chip: "Eksoottiset eläimet",
      h1: (where: string) => `Eksoottisten eläinten eläinlääkärit ${where}`,
      lead: (n: number, total: number) =>
        `${n}/${total} eläinlääkäriasemasta hoitaa eksoottisia eläimiä (matelijat, linnut ja jyrsijät). Soita etukäteen varmistaaksesi oman lajisi hoidon.`,
      metaTitle: (where: string) => `Eksoottisten eläinten eläinlääkärit ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} ${plural("fi", n, { one: "eläinlääkäriasema", other: "eläinlääkäriasemaa" })} ${where}, ${plural("fi", n, { one: "joka hoitaa", other: "jotka hoitavat" })} eksoottisia eläimiä: matelijat, linnut ja jyrsijät. Aukioloajat, puhelin ja reittiohjeet.`,
    },
    "home-visits": {
      chip: "Kotikäynnit",
      h1: (where: string) => `Kotikäyntejä tekevät eläinlääkärit ${where}`,
      lead: (n: number, total: number) => `${n}/${total} eläinlääkäriasemasta tarjoaa kotikäyntejä.`,
      metaTitle: (where: string) => `Eläinlääkärin kotikäynti ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} ${plural("fi", n, { one: "eläinlääkäri", other: "eläinlääkäriä" })} ${where} kotikäyntipalvelulla: puhelinnumero, aukioloajat ja tarjotut palvelut.`,
    },
    english: {
      chip: "Palvelua englanniksi",
      h1: (where: string) => `Englanniksi palvelevat eläinlääkärit ${where}`,
      lead: (n: number, total: number) =>
        `${n}/${total} eläinlääkäriasemasta ilmoittaa verkkosivuillaan palvelevansa asiakkaita englanniksi. Soita etukäteen varmistaaksesi vuorossa olevan lääkärin kielitaidon.`,
      metaTitle: (where: string) => `Englanninkieliset eläinlääkärit ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} ${plural("fi", n, { one: "eläinlääkäriasema", other: "eläinlääkäriasemaa" })} ${where}, ${plural("fi", n, { one: "joka palvelee", other: "jotka palvelevat" })} englanniksi omien sivujensa mukaan: aukioloajat, puhelin ja reittiohjeet.`,
    },
  },
  // Price pages (lib/pricePages.ts): one per service and city, plus an
  // overview per category. Numbers come preformatted (money, dates).
  prices: {
    crumb: "Hinnat",
    overviewH1: (name: string, where: string) => `${name} ${where}`,
    overviewMetaTitle: (name: string, where: string) => `${name} ${where} | Pawenn`,
    overviewIntro:
      "Paljonko kukin palvelu maksaa – vertailtuna niiden paikkojen kesken, jotka julkaisevat hinnastonsa. Esitetty keskihinta on mediaani: puolet paikoista veloittaa vähemmän ja puolet enemmän.",
    overviewMetaDescription: (label: string, where: string, services: number) =>
      `${label} ${where}: ${services} ${plural("fi", services, { one: "palvelun hinnat", other: "palvelun hinnat" })} vertailtuna toimipisteiden välillä keskiarvoineen ja hintahaarukoineen. Julkaistuista hinnastoista, päivämäärillä.`,
    serviceH1: (service: string, where: string) => `${service} ${where}: hinnat`,
    serviceMetaTitle: (service: string, where: string, from: string) => `${service} ${where} – alkaen ${from} | Pawenn`,
    /** Meta description of a service price page: "<service> <where>:" + the answer, the cheapest place in between. */
    serviceMetaLead: (service: string, where: string) => `${service} ${where}:`,
    cheapest: (name: string, price: string) => `Edullisin: ${name}, ${price}.`,
    answer: (from: string, to: string, median: string, places: number, date: string) =>
      `Hinta ${from}–${to}, keskiarvo ${median}. Vertaillut toimipisteet: ${places} ${plural("fi", places, { one: "paikka", other: "paikkaa" })}; hinnat tarkistettu ${date}.`,
    fewPlaces: (places: number) =>
      `Tähän mennessä vain ${places} ${plural("fi", places, { one: "paikka julkaisee", other: "paikkaa julkaisee" })} tämän hinnan: liian vähän luotettavaan vertailuun.`,
    question: (service: string, where: string) => `Paljonko ${service.toLowerCase()} maksaa ${where}?`,
    includes: "Mitä hinta sisältää",
    place: "Toimipiste",
    price: "Hinta",
    vsMarket: "Verrattuna kaupungin keskiarvoon",
    notComparedTitle: "Muut hinnat (ei vertailtu)",
    notComparedIntro: "Osatoimenpiteet sekä tunti- ja kilometritaksat.",
    otherServices: "Muut hinnat",
    service: "Palvelu",
    range: "Vaihteluväli",
    median: "Keskiarvo",
    places: "Toimipisteet",
    seeAll: (label: string) => `Kaikki: ${label.toLowerCase()}`,
    linkFromListing: (where: string) => `Hinnat ${where}`,
    source: "hinnasto",
  },
};
