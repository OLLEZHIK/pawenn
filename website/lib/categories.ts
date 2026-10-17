import type { Locale } from "./i18n";
import type { BusinessCategory } from "@prisma/client";

// URL slugs confirmed by keyword research (docs/seo/english-keywords.md) -
// docs/design-plan.md section 3 treats this list as final, not a draft.
export const CATEGORY_SLUG_TO_ENUM: Record<string, BusinessCategory> = {
  grooming: "GROOMING",
  "vet-clinics": "VET_CLINIC",
  "pet-hotels": "PET_HOTEL",
  "dog-training": "DOG_TRAINING",
  "pet-shops": "PET_SHOP",
  "pet-sitting": "PET_SITTING",
};

export const CATEGORY_ENUM_TO_SLUG: Record<BusinessCategory, string> = {
  GROOMING: "grooming",
  VET_CLINIC: "vet-clinics",
  PET_HOTEL: "pet-hotels",
  PET_SHOP: "pet-shops",
  DOG_TRAINING: "dog-training",
  PET_SITTING: "pet-sitting",
};

export const CATEGORY_LABELS: Record<BusinessCategory, string> = {
  GROOMING: "Grooming",
  VET_CLINIC: "Veterinary Clinics",
  PET_HOTEL: "Pet Hotels",
  PET_SHOP: "Pet Shops",
  DOG_TRAINING: "Dog Training",
  PET_SITTING: "Pet Sitting",
};

// Singular form, for copy like "Find a {label} in {city}".
export const CATEGORY_LABELS_SINGULAR: Record<BusinessCategory, string> = {
  GROOMING: "grooming salon",
  VET_CLINIC: "veterinary clinic",
  PET_HOTEL: "pet hotel",
  PET_SHOP: "pet shop",
  DOG_TRAINING: "dog trainer",
  PET_SITTING: "pet sitter",
};

export function categorySlugFromEnum(category: BusinessCategory): string {
  return CATEGORY_ENUM_TO_SLUG[category];
}

export function categoryEnumFromSlug(slug: string): BusinessCategory | null {
  return CATEGORY_SLUG_TO_ENUM[slug] ?? null;
}

export const ALL_CATEGORY_SLUGS = Object.keys(CATEGORY_SLUG_TO_ENUM);

// Visual identity per category: accent color (CSS var from
// design-tokens.css) and a one-line, fact-free description of what the
// service is - shown on category tiles and listing headers.
export const CATEGORY_THEME: Record<BusinessCategory, { accent: string; blurb: string }> = {
  GROOMING: { accent: "var(--cat-grooming)", blurb: "Baths, haircuts, trimming and nail care" },
  VET_CLINIC: { accent: "var(--cat-vet)", blurb: "Check-ups, vaccinations and emergencies" },
  PET_HOTEL: { accent: "var(--cat-hotel)", blurb: "Safe stays while you travel" },
  DOG_TRAINING: { accent: "var(--cat-training)", blurb: "Puppy classes, obedience and behaviour" },
  PET_SHOP: { accent: "var(--cat-shop)", blurb: "Food, toys and everyday supplies" },
  PET_SITTING: { accent: "var(--cat-sitting)", blurb: "Walks, visits and care at home" },
};

// ---------------------------------------------------------------------
// Per-locale slugs, labels and blurbs. English values mirror the maps
// above. Slovak slugs follow the original Slovak URL plan
// (docs/concept.md section 4, e.g. /psi-salon/) and the owner's example
// /sk/veterinar/bratislava/; live since language model v2 and checked by
// the keyword research (docs/seo/keywords/sk.md) - URLs, never changed.
// ---------------------------------------------------------------------

const SLUGS: Record<Locale, Record<BusinessCategory, string>> = {
  en: CATEGORY_ENUM_TO_SLUG,
  sk: {
    GROOMING: "psi-salon",
    VET_CLINIC: "veterinar",
    PET_HOTEL: "hotel-pre-zvierata",
    DOG_TRAINING: "vycvik-psov",
    PET_SHOP: "chovatelske-potreby",
    PET_SITTING: "opatrovanie-zvierat",
  },
  // docs/seo/keywords/pl.md, section 5.1 (PR #136).
  pl: {
    GROOMING: "groomer",
    VET_CLINIC: "weterynarz",
    PET_HOTEL: "hotel-dla-zwierzat",
    DOG_TRAINING: "szkolenie-psow",
    PET_SHOP: "sklep-zoologiczny",
    PET_SITTING: "opieka-nad-zwierzetami",
  },
  cs: {
    GROOMING: "psi-salon",
    VET_CLINIC: "veterina",
    PET_HOTEL: "hotel-pro-zvirata",
    DOG_TRAINING: "vycvik-psu",
    PET_SHOP: "zverimex",
    PET_SITTING: "hlidani-zvirat",
  },
  de: {
    GROOMING: "hundesalon",
    VET_CLINIC: "tierarzt",
    PET_HOTEL: "tierpension",
    DOG_TRAINING: "hundeschule",
    PET_SHOP: "tierhandlung",
    PET_SITTING: "tierbetreuung",
  },
  fr: {
    GROOMING: "toilettage",
    VET_CLINIC: "veterinaire",
    PET_HOTEL: "pension-animaux",
    DOG_TRAINING: "dressage-chien",
    PET_SHOP: "animalerie",
    PET_SITTING: "garde-animaux",
  },
  it: {
    GROOMING: "toelettatura",
    VET_CLINIC: "veterinario",
    PET_HOTEL: "pensione-animali",
    DOG_TRAINING: "addestramento-cani",
    PET_SHOP: "negozio-animali",
    PET_SITTING: "dog-sitter",
  },
  es: {
    GROOMING: "peluqueria-canina",
    VET_CLINIC: "veterinario",
    PET_HOTEL: "residencia-canina",
    DOG_TRAINING: "adiestramiento-canino",
    PET_SHOP: "tienda-de-mascotas",
    PET_SITTING: "cuidador-de-perros",
  },
  nl: {
    GROOMING: "trimsalon",
    VET_CLINIC: "dierenarts",
    PET_HOTEL: "dierenpension",
    DOG_TRAINING: "hondenschool",
    PET_SHOP: "dierenwinkel",
    PET_SITTING: "hondenoppas",
  },
  fi: {
    GROOMING: "trimmaus",
    VET_CLINIC: "elainlaakari",
    PET_HOTEL: "koirahoitola",
    DOG_TRAINING: "koirakoulu",
    PET_SHOP: "elainkauppa",
    PET_SITTING: "koiranhoitaja",
  },
  hu: {
    GROOMING: "kutyakozmetika",
    VET_CLINIC: "allatorvos",
    PET_HOTEL: "kutyapanzio",
    DOG_TRAINING: "kutyaiskola",
    PET_SHOP: "allatkereskedes",
    PET_SITTING: "kutyaszitter",
  },
  ja: {
    GROOMING: "torimingu-salon",
    VET_CLINIC: "dobutsu-byoin",
    PET_HOTEL: "petto-hoteru",
    DOG_TRAINING: "shitsuke-kyoshitsu",
    PET_SHOP: "petto-shoppu",
    PET_SITTING: "petto-shitta",
  },
};

const LABELS: Record<Locale, Record<BusinessCategory, string>> = {
  en: CATEGORY_LABELS,
  sk: {
    GROOMING: "Psie salóny",
    VET_CLINIC: "Veterinárne ambulancie",
    PET_HOTEL: "Hotely pre zvieratá",
    DOG_TRAINING: "Výcvik psov",
    PET_SHOP: "Chovateľské potreby",
    PET_SITTING: "Opatrovanie zvierat",
  },
  pl: {
    GROOMING: "Salony groomerskie",
    VET_CLINIC: "Lecznice weterynaryjne",
    PET_HOTEL: "Hotele dla zwierząt",
    DOG_TRAINING: "Szkolenie psów",
    PET_SHOP: "Sklepy zoologiczne",
    PET_SITTING: "Opieka nad zwierzętami",
  },
  cs: {
    GROOMING: "Psí salony",
    VET_CLINIC: "Veterinární kliniky",
    PET_HOTEL: "Hotely pro zvířata",
    DOG_TRAINING: "Výcvik psů",
    PET_SHOP: "Zverimexy",
    PET_SITTING: "Hlídání zvířat",
  },
  de: {
    GROOMING: "Hundesalons",
    VET_CLINIC: "Tierärzte",
    PET_HOTEL: "Tierpensionen",
    DOG_TRAINING: "Hundeschulen",
    PET_SHOP: "Tierhandlungen",
    PET_SITTING: "Tierbetreuung",
  },
  fr: {
    GROOMING: "Toilettage",
    VET_CLINIC: "Vétérinaires",
    PET_HOTEL: "Pensions pour animaux",
    DOG_TRAINING: "Dressage de chien",
    PET_SHOP: "Animaleries",
    PET_SITTING: "Garde d'animaux",
  },
  it: {
    GROOMING: "Toelettatura",
    VET_CLINIC: "Veterinari",
    PET_HOTEL: "Pensioni per animali",
    DOG_TRAINING: "Addestramento cani",
    PET_SHOP: "Negozi di animali",
    PET_SITTING: "Dog sitter",
  },
  es: {
    GROOMING: "Peluquerías caninas",
    VET_CLINIC: "Veterinarios",
    PET_HOTEL: "Residencias caninas",
    DOG_TRAINING: "Adiestramiento canino",
    PET_SHOP: "Tiendas de mascotas",
    PET_SITTING: "Cuidadores de perros",
  },
  nl: {
    GROOMING: "Trimsalons",
    VET_CLINIC: "Dierenartsen",
    PET_HOTEL: "Dierenpensions",
    DOG_TRAINING: "Hondenscholen",
    PET_SHOP: "Dierenwinkels",
    PET_SITTING: "Hondenoppas",
  },
  fi: {
    GROOMING: "Trimmaamot",
    VET_CLINIC: "Eläinlääkärit",
    PET_HOTEL: "Koirahoitolat",
    DOG_TRAINING: "Koirakoulut",
    PET_SHOP: "Eläinkaupat",
    PET_SITTING: "Koiranhoitajat",
  },
  hu: {
    GROOMING: "Kutyakozmetikák",
    VET_CLINIC: "Állatorvosok",
    PET_HOTEL: "Kutyapanziók",
    DOG_TRAINING: "Kutyaiskolák",
    PET_SHOP: "Állatkereskedések",
    PET_SITTING: "Kutyaszitterek",
  },
  ja: {
    GROOMING: "トリミングサロン",
    VET_CLINIC: "動物病院",
    PET_HOTEL: "ペットホテル",
    DOG_TRAINING: "しつけ教室",
    PET_SHOP: "ペットショップ",
    PET_SITTING: "ペットシッター",
  },
};

const SINGULAR: Record<Locale, Record<BusinessCategory, string>> = {
  en: CATEGORY_LABELS_SINGULAR,
  sk: {
    GROOMING: "psí salón",
    VET_CLINIC: "veterinárna ambulancia",
    PET_HOTEL: "hotel pre zvieratá",
    DOG_TRAINING: "výcvik psa",
    PET_SHOP: "chovateľské potreby",
    PET_SITTING: "opatrovanie zvierat",
  },
  pl: {
    GROOMING: "salon groomerski",
    VET_CLINIC: "lecznica weterynaryjna",
    PET_HOTEL: "hotel dla zwierząt",
    DOG_TRAINING: "szkolenie psa",
    PET_SHOP: "sklep zoologiczny",
    PET_SITTING: "opieka nad zwierzętami",
  },
  cs: {
    GROOMING: "psí salon",
    VET_CLINIC: "veterinární klinika",
    PET_HOTEL: "hotel pro zvířata",
    DOG_TRAINING: "výcvik psa",
    PET_SHOP: "zverimex",
    PET_SITTING: "hlídání zvířat",
  },
  de: {
    GROOMING: "Hundesalon",
    VET_CLINIC: "Tierarzt",
    PET_HOTEL: "Tierpension",
    DOG_TRAINING: "Hundeschule",
    PET_SHOP: "Tierhandlung",
    PET_SITTING: "Tierbetreuung",
  },
  fr: {
    GROOMING: "salon de toilettage",
    VET_CLINIC: "cabinet vétérinaire",
    PET_HOTEL: "pension pour animaux",
    DOG_TRAINING: "éducateur canin",
    PET_SHOP: "animalerie",
    PET_SITTING: "pet sitter",
  },
  it: {
    GROOMING: "salone di toelettatura",
    VET_CLINIC: "studio veterinario",
    PET_HOTEL: "pensione per animali",
    DOG_TRAINING: "educatore cinofilo",
    PET_SHOP: "negozio di animali",
    PET_SITTING: "dog sitter",
  },
  es: {
    GROOMING: "peluquería canina",
    VET_CLINIC: "clínica veterinaria",
    PET_HOTEL: "residencia canina",
    DOG_TRAINING: "adiestrador canino",
    PET_SHOP: "tienda de mascotas",
    PET_SITTING: "cuidador de perros",
  },
  nl: {
    GROOMING: "trimsalon",
    VET_CLINIC: "dierenarts",
    PET_HOTEL: "dierenpension",
    DOG_TRAINING: "hondenschool",
    PET_SHOP: "dierenwinkel",
    PET_SITTING: "hondenoppas",
  },
  fi: {
    GROOMING: "trimmaamo",
    VET_CLINIC: "eläinklinikka",
    PET_HOTEL: "koirahoitola",
    DOG_TRAINING: "koirankouluttaja",
    PET_SHOP: "eläinkauppa",
    PET_SITTING: "koiranhoitaja",
  },
  hu: {
    GROOMING: "kutyakozmetika",
    VET_CLINIC: "állatorvosi rendelő",
    PET_HOTEL: "kutyapanzió",
    DOG_TRAINING: "kutyaiskola",
    PET_SHOP: "állatkereskedés",
    PET_SITTING: "kutyaszitter",
  },
  ja: {
    GROOMING: "トリミングサロン",
    VET_CLINIC: "動物病院",
    PET_HOTEL: "ペットホテル",
    DOG_TRAINING: "ドッグトレーナー・しつけ教室",
    PET_SHOP: "ペットショップ",
    PET_SITTING: "ペットシッター",
  },
};

// Plural noun for running copy ("Compare 10 grooming salons..."). The
// English labels are headings ("Grooming", "Dog Training") and read
// wrong after a number.
const PLURAL: Record<Locale, Record<BusinessCategory, string>> = {
  en: {
    GROOMING: "grooming salons",
    VET_CLINIC: "vet clinics",
    PET_HOTEL: "pet hotels",
    DOG_TRAINING: "dog trainers",
    PET_SHOP: "pet shops",
    PET_SITTING: "pet sitters",
  },
  sk: {
    GROOMING: "psie salóny",
    VET_CLINIC: "veterinárne ambulancie",
    PET_HOTEL: "hotely pre zvieratá",
    DOG_TRAINING: "výcvik psov",
    PET_SHOP: "chovateľské potreby",
    PET_SITTING: "opatrovanie zvierat",
  },
  pl: {
    GROOMING: "salony groomerskie",
    VET_CLINIC: "lecznice weterynaryjne",
    PET_HOTEL: "hotele dla zwierząt",
    DOG_TRAINING: "szkoły i trenerzy psów",
    PET_SHOP: "sklepy zoologiczne",
    PET_SITTING: "petsitterzy",
  },
  cs: {
    GROOMING: "psí salony",
    VET_CLINIC: "veterinární kliniky",
    PET_HOTEL: "hotely pro zvířata",
    DOG_TRAINING: "školy a trenéři psů",
    PET_SHOP: "zverimexy",
    PET_SITTING: "hlídači zvířat",
  },
  de: {
    GROOMING: "Hundesalons",
    VET_CLINIC: "Tierärzte und Tierkliniken",
    PET_HOTEL: "Tierpensionen",
    DOG_TRAINING: "Hundeschulen und Hundetrainer",
    PET_SHOP: "Tierhandlungen",
    PET_SITTING: "Tierbetreuer",
  },
  fr: {
    GROOMING: "salons de toilettage",
    VET_CLINIC: "vétérinaires et cliniques vétérinaires",
    PET_HOTEL: "pensions pour animaux",
    DOG_TRAINING: "éducateurs canins et clubs canins",
    PET_SHOP: "animaleries",
    PET_SITTING: "pet sitters",
  },
  it: {
    GROOMING: "saloni di toelettatura",
    VET_CLINIC: "veterinari e cliniche veterinarie",
    PET_HOTEL: "pensioni per animali",
    DOG_TRAINING: "educatori cinofili e centri cinofili",
    PET_SHOP: "negozi di animali",
    PET_SITTING: "dog sitter",
  },
  es: {
    GROOMING: "peluquerías caninas",
    VET_CLINIC: "veterinarios y clínicas veterinarias",
    PET_HOTEL: "residencias caninas",
    DOG_TRAINING: "adiestradores y escuelas caninas",
    PET_SHOP: "tiendas de mascotas",
    PET_SITTING: "cuidadores de perros",
  },
  nl: {
    GROOMING: "trimsalons",
    VET_CLINIC: "dierenartsen en dierenklinieken",
    PET_HOTEL: "dierenpensions en hondenhotels",
    DOG_TRAINING: "hondenscholen en hondentrainers",
    PET_SHOP: "dierenwinkels en dierenspeciaalzaken",
    PET_SITTING: "hondenoppassers en uitlaatservices",
  },
  fi: {
    GROOMING: "trimmaamot",
    VET_CLINIC: "eläinlääkärit ja eläinklinikat",
    PET_HOTEL: "koirahoitolat",
    DOG_TRAINING: "koirakoulut ja kouluttajat",
    PET_SHOP: "eläinkaupat",
    PET_SITTING: "koiranhoitajat ja ulkoiluttajat",
  },
  hu: {
    GROOMING: "kutyakozmetikák",
    VET_CLINIC: "állatorvosok és rendelők",
    PET_HOTEL: "kutyapanziók",
    DOG_TRAINING: "kutyaiskolák és trénerek",
    PET_SHOP: "állatkereskedések",
    PET_SITTING: "kutyaszitterek és sétáltatók",
  },
  ja: {
    GROOMING: "トリミングサロン",
    VET_CLINIC: "動物病院",
    PET_HOTEL: "ペットホテル",
    DOG_TRAINING: "しつけ教室・ドッグスクール",
    PET_SHOP: "ペットショップ",
    PET_SITTING: "ペットシッター",
  },
};

// Page <title> wording: the phrases people actually type, per language
// (docs/seo/keywords/<locale>.md, "главный" first, then the site's own
// term). A pattern for every city of the language, not for one city.
// "Grooming in Bratislava" alone also matches barbershops, so the
// English titles say which animals.
const SEO_TITLE: Record<Locale, Record<BusinessCategory, string>> = {
  en: {
    GROOMING: "Dog Grooming & Groomers",
    VET_CLINIC: "Vets & Veterinary Clinics",
    PET_HOTEL: "Dog Hotels & Pet Boarding",
    DOG_TRAINING: "Dog Training & Puppy Classes",
    PET_SHOP: "Pet Shops",
    PET_SITTING: "Dog Sitters & Dog Walkers",
  },
  sk: {
    GROOMING: "Strihanie psov a psie salóny",
    VET_CLINIC: "Veterinári a veterinárne ambulancie",
    PET_HOTEL: "Hotely pre psov a mačky",
    DOG_TRAINING: "Výcvik psov a kynológovia",
    PET_SHOP: "Zverimex a chovateľské potreby",
    PET_SITTING: "Venčenie a stráženie psov",
  },
  pl: {
    GROOMING: "Groomer i strzyżenie psów",
    VET_CLINIC: "Weterynarze i lecznice weterynaryjne",
    PET_HOTEL: "Hotele dla psów i kotów",
    DOG_TRAINING: "Szkolenie psów i behawioryści",
    PET_SHOP: "Sklepy zoologiczne",
    PET_SITTING: "Petsitterzy i wyprowadzanie psów",
  },
  cs: {
    GROOMING: "Stříhání psů a psí salony",
    VET_CLINIC: "Veterina a veterináři",
    PET_HOTEL: "Psí hotely a hotely pro zvířata",
    DOG_TRAINING: "Výcvik psů a cvičáky",
    PET_SHOP: "Zverimex a chovatelské potřeby",
    PET_SITTING: "Hlídání a venčení psů",
  },
  de: {
    GROOMING: "Hundesalon & Hundefriseur",
    VET_CLINIC: "Tierarzt & Tierklinik",
    PET_HOTEL: "Hundepension & Tierpension",
    DOG_TRAINING: "Hundeschule & Hundetraining",
    PET_SHOP: "Tierhandlung & Tierbedarf",
    PET_SITTING: "Hundebetreuung & Hundesitter",
  },
  fr: {
    GROOMING: "Toilettage pour chiens et chats",
    VET_CLINIC: "Vétérinaires et cliniques vétérinaires",
    PET_HOTEL: "Pension pour chien et chat",
    DOG_TRAINING: "Éducateur canin et dressage de chien",
    PET_SHOP: "Animaleries et magasins pour animaux",
    PET_SITTING: "Garde de chien et pet sitter",
  },
  it: {
    GROOMING: "Toelettatura e lavaggio cani",
    VET_CLINIC: "Veterinari e cliniche veterinarie",
    PET_HOTEL: "Pensioni per cani e asili diurni",
    DOG_TRAINING: "Addestramento cani ed educatori cinofili",
    PET_SHOP: "Negozi di animali e pet shop",
    PET_SITTING: "Dog sitter e pensioni casalinghe",
  },
  es: {
    GROOMING: "Peluquería canina y lavado de perros",
    VET_CLINIC: "Veterinarios y clínicas veterinarias",
    PET_HOTEL: "Residencias caninas y guarderías de día",
    DOG_TRAINING: "Adiestramiento canino y educadores",
    PET_SHOP: "Tiendas de animales y productos para mascotas",
    PET_SITTING: "Cuidadores de perros y paseadores",
  },
  nl: {
    GROOMING: "Trimsalons en honden trimmen",
    VET_CLINIC: "Dierenartsen en dierenklinieken",
    PET_HOTEL: "Dierenpensions en hondenhotels",
    DOG_TRAINING: "Hondenscholen en hondentraining",
    PET_SHOP: "Dierenwinkels en dierenspeciaalzaken",
    PET_SITTING: "Hondenoppas en hondenuitlaatservice",
  },
  fi: {
    GROOMING: "Koiran trimmaus ja trimmaamot",
    VET_CLINIC: "Eläinlääkärit ja eläinklinikat",
    PET_HOTEL: "Koirahoitolat ja lemmikkihotellit",
    DOG_TRAINING: "Koirakoulut ja koirankoulutus",
    PET_SHOP: "Eläinkaupat ja lemmikkitarvikkeet",
    PET_SITTING: "Koiranhoitajat ja koiran ulkoilutus",
  },
  hu: {
    GROOMING: "Kutyakozmetika és kutyanyírás",
    VET_CLINIC: "Állatorvosok és állatorvosi rendelők",
    PET_HOTEL: "Kutyapanziók és kutyanapközik",
    DOG_TRAINING: "Kutyaiskolák és kutyakiképzés",
    PET_SHOP: "Állatkereskedések és állateledel boltok",
    PET_SITTING: "Kutyaszitterek és kutyasétáltatás",
  },
  ja: {
    GROOMING: "トリミングサロン・犬のシャンプー＆カット",
    VET_CLINIC: "動物病院・獣医師・夜間救急診療",
    PET_HOTEL: "ペットホテル・犬と猫の宿泊預かり",
    DOG_TRAINING: "犬のしつけ教室・ドッグトレーニング",
    PET_SHOP: "ペットショップ・ペット用品店",
    PET_SITTING: "ペットシッター・犬の散歩代行",
  },
};

// Price overview (/<category>/<city>/prices) name: the main "prices"
// query of the category from docs/seo/keywords/<locale>.md, section 3.
// English carries "prices" itself; Slovak adds "– cenník a ceny" in the
// dictionary template.
const PRICES_NAME: Record<Locale, Record<BusinessCategory, string>> = {
  en: {
    GROOMING: "Dog grooming prices",
    VET_CLINIC: "Vet prices & clinic fees",
    PET_HOTEL: "Dog hotel & boarding prices",
    DOG_TRAINING: "Dog training prices",
    PET_SHOP: "Pet shop prices",
    PET_SITTING: "Dog sitting & walking prices",
  },
  sk: {
    GROOMING: "Strihanie psa",
    VET_CLINIC: "Veterina",
    PET_HOTEL: "Hotel pre psov",
    DOG_TRAINING: "Výcvik psa",
    PET_SHOP: "Chovateľské potreby",
    PET_SITTING: "Stráženie a venčenie psa",
  },
  pl: {
    GROOMING: "Strzyżenie psów",
    VET_CLINIC: "Weterynarz",
    PET_HOTEL: "Hotel dla psów",
    DOG_TRAINING: "Szkolenie psa",
    PET_SHOP: "Sklep zoologiczny",
    PET_SITTING: "Opieka nad psem",
  },
  cs: {
    GROOMING: "Stříhání psů",
    VET_CLINIC: "Veterina",
    PET_HOTEL: "Hotel pro psy",
    DOG_TRAINING: "Výcvik psa",
    PET_SHOP: "Zverimex",
    PET_SITTING: "Hlídání a venčení psa",
  },
  de: {
    GROOMING: "Hund scheren",
    VET_CLINIC: "Tierarzt",
    PET_HOTEL: "Hundepension",
    DOG_TRAINING: "Hundeschule",
    PET_SHOP: "Tierhandlung",
    PET_SITTING: "Hundebetreuung",
  },
  fr: {
    GROOMING: "Tarifs de toilettage pour chien",
    VET_CLINIC: "Tarifs vétérinaires",
    PET_HOTEL: "Tarifs des pensions pour chiens",
    DOG_TRAINING: "Tarifs des éducateurs canins",
    PET_SHOP: "Tarifs des animaleries",
    PET_SITTING: "Tarifs de garde de chien et pet sitting",
  },
  it: {
    GROOMING: "Toelettatura cane",
    VET_CLINIC: "Costo veterinario",
    PET_HOTEL: "Pensione per cani",
    DOG_TRAINING: "Addestramento cani",
    PET_SHOP: "Negozi di animali",
    PET_SITTING: "Dog sitter",
  },
  es: {
    GROOMING: "Peluquería canina",
    VET_CLINIC: "Precios veterinario",
    PET_HOTEL: "Residencia canina",
    DOG_TRAINING: "Adiestramiento canino",
    PET_SHOP: "Tiendas de animales",
    PET_SITTING: "Cuidador de perros",
  },
  nl: {
    GROOMING: "Trimsalon",
    VET_CLINIC: "Dierenarts",
    PET_HOTEL: "Dierenpension",
    DOG_TRAINING: "Hondenschool",
    PET_SHOP: "Dierenwinkel",
    PET_SITTING: "Hondenoppas",
  },
  fi: {
    GROOMING: "Koiran trimmaus",
    VET_CLINIC: "Eläinlääkärin hinnasto",
    PET_HOTEL: "Koirahoitola",
    DOG_TRAINING: "Koirakoulu",
    PET_SHOP: "Eläinkaupat",
    PET_SITTING: "Koiranhoitaja",
  },
  hu: {
    GROOMING: "Kutyakozmetika árak",
    VET_CLINIC: "Állatorvos árak",
    PET_HOTEL: "Kutyapanzió árak",
    DOG_TRAINING: "Kutyaiskola árak",
    PET_SHOP: "Állatkereskedés árak",
    PET_SITTING: "Kutyasétáltatás és kutyaszitter árak",
  },
  ja: {
    GROOMING: "トリミング料金",
    VET_CLINIC: "動物病院の診療料金",
    PET_HOTEL: "ペットホテル料金",
    DOG_TRAINING: "しつけ教室の料金",
    PET_SHOP: "ペットショップの料金",
    PET_SITTING: "ペットシッター料金",
  },
};

const BLURBS: Record<Locale, Record<BusinessCategory, string>> = {
  en: {
    GROOMING: CATEGORY_THEME.GROOMING.blurb,
    VET_CLINIC: CATEGORY_THEME.VET_CLINIC.blurb,
    PET_HOTEL: CATEGORY_THEME.PET_HOTEL.blurb,
    DOG_TRAINING: CATEGORY_THEME.DOG_TRAINING.blurb,
    PET_SHOP: CATEGORY_THEME.PET_SHOP.blurb,
    PET_SITTING: CATEGORY_THEME.PET_SITTING.blurb,
  },
  sk: {
    GROOMING: "Kúpanie, strihanie, trimovanie a starostlivosť o pazúry",
    VET_CLINIC: "Prehliadky, očkovanie a pohotovosť",
    PET_HOTEL: "Bezpečný pobyt, kým ste na cestách",
    DOG_TRAINING: "Kurzy pre šteňatá, poslušnosť a správanie",
    PET_SHOP: "Krmivo, hračky a potreby na každý deň",
    PET_SITTING: "Venčenie, návštevy a starostlivosť doma",
  },
  pl: {
    GROOMING: "Kąpiel, strzyżenie, trymowanie i pazury",
    VET_CLINIC: "Badania, szczepienia i pomoc w nagłych przypadkach",
    PET_HOTEL: "Bezpieczny pobyt na czas Twojego wyjazdu",
    DOG_TRAINING: "Psie przedszkole, posłuszeństwo i zachowanie",
    PET_SHOP: "Karmy, zabawki i artykuły na co dzień",
    PET_SITTING: "Spacery, wizyty i opieka w domu",
  },
  cs: {
    GROOMING: "Koupání, stříhání, trimování a péče o drápky",
    VET_CLINIC: "Prohlídky, očkování a pohotovost",
    PET_HOTEL: "Bezpečný pobyt, když jste na cestách",
    DOG_TRAINING: "Kurzy pro štěňata, poslušnost a chování",
    PET_SHOP: "Krmivo, hračky a potřeby na každý den",
    PET_SITTING: "Venčení, návštěvy a péče doma",
  },
  de: {
    GROOMING: "Baden, Scheren, Trimmen und Krallenpflege",
    VET_CLINIC: "Untersuchung, Impfung und Notdienst",
    PET_HOTEL: "Sicherer Aufenthalt, während Sie unterwegs sind",
    DOG_TRAINING: "Welpenkurse, Gehorsam und Verhalten",
    PET_SHOP: "Futter, Spielzeug und Alltagsbedarf",
    PET_SITTING: "Gassigehen, Besuche und Betreuung zu Hause",
  },
  fr: {
    GROOMING: "Bain, tonte, épilation et soin des griffes",
    VET_CLINIC: "Consultations, vaccins et urgences",
    PET_HOTEL: "Un séjour sûr pendant vos déplacements",
    DOG_TRAINING: "École du chiot, éducation de base et comportement",
    PET_SHOP: "Croquettes, jouets et accessoires du quotidien",
    PET_SITTING: "Promenades, visites et garde à domicile",
  },
  it: {
    GROOMING: "Bagno, taglio, stripping e cura delle unghie",
    VET_CLINIC: "Visite, vaccini e urgenze",
    PET_HOTEL: "Un soggiorno sicuro mentre sei via",
    DOG_TRAINING: "Scuola per cuccioli, educazione di base e comportamento",
    PET_SHOP: "Cibo, giochi e accessori di ogni giorno",
    PET_SITTING: "Passeggiate, visite e custodia a domicilio",
  },
  es: {
    GROOMING: "Baño, corte, stripping y cuidado de uñas",
    VET_CLINIC: "Consultas, vacunas y urgencias",
    PET_HOTEL: "Una estancia segura mientras estás fuera",
    DOG_TRAINING: "Clases para cachorros, obediencia básica y conducta",
    PET_SHOP: "Comida, juguetes y accesorios de cada día",
    PET_SITTING: "Paseos, visitas y cuidado en casa",
  },
  nl: {
    GROOMING: "Wassen, knippen, plukken en nagelverzorging",
    VET_CLINIC: "Consulten, vaccinaties en spoedzorg",
    PET_HOTEL: "Veilig verblijf terwijl u op reis bent",
    DOG_TRAINING: "Puppycursus, gehoorzaamheid en gedrag",
    PET_SHOP: "Voeding, speelgoed en dagelijkse benodigdheden",
    PET_SITTING: "Wandelingen, bezoeken en opvang aan huis",
  },
  fi: {
    GROOMING: "Pesu, leikkaus, nypintä ja kynsien hoito",
    VET_CLINIC: "Tarkastukset, rokotukset ja päivystys",
    PET_HOTEL: "Turvallinen hoitopaikka matkasi ajaksi",
    DOG_TRAINING: "Pentukurssit, arkitottelevaisuus ja käytösneuvonta",
    PET_SHOP: "Ruoat, lelut ja arjen tarvikkeet",
    PET_SITTING: "Ulkoilutus, kotikäynnit ja kotihoito",
  },
  hu: {
    GROOMING: "Fürdetés, nyírás, trimmelés és karomápolás",
    VET_CLINIC: "Vizsgálatok, védőoltások és sürgősségi ellátás",
    PET_HOTEL: "Biztonságos elhelyezés, amíg távol vagy",
    DOG_TRAINING: "Kölyöknevelés, alapfokú engedelmesség és viselkedésterápia",
    PET_SHOP: "Eleségek, felszerelések és mindennapi kellékek",
    PET_SITTING: "Sétáltatás, látogatás és háznál felügyelet",
  },
  ja: {
    GROOMING: "シャンプー、カット、爪切り、エステケア",
    VET_CLINIC: "一般診察、予防接種、夜間・救急対応",
    PET_HOTEL: "ご旅行や急な外出時も安心な宿泊・一時預かり",
    DOG_TRAINING: "パピー教室、基本しつけ、問題行動の改善",
    PET_SHOP: "プレミアムフード、おやつ、おもちゃ、日常ケア用品",
    PET_SITTING: "お散歩代行、ご自宅訪問、きめ細やかなペットケア",
  },
};

export const ALL_CATEGORIES: BusinessCategory[] = [
  "GROOMING",
  "VET_CLINIC",
  "PET_HOTEL",
  "DOG_TRAINING",
  "PET_SHOP",
  "PET_SITTING",
];

export function categorySlug(category: BusinessCategory, locale: Locale): string {
  return SLUGS[locale][category];
}

export function categoryFromSlug(slug: string, locale: Locale): BusinessCategory | null {
  const entry = Object.entries(SLUGS[locale]).find(([, s]) => s === slug);
  return entry ? (entry[0] as BusinessCategory) : null;
}

export function categoryLabel(category: BusinessCategory, locale: Locale): string {
  return LABELS[locale][category];
}

// The word people search for a place of this kind, for the place page
// title ("AhojVET – veterinár, Staré Mesto, Bratislava"): the main query
// of each category in docs/seo/keywords/<lang>.md, neutral where the main
// query names one animal (hotels take cats too). `word` finds the word
// already in the place's name ("Veterinárna ambulancia X"), so it is not
// said twice; English matches whole words, so a Slovak "Veterinárna" name
// still gets "vet" on the English page (docs/seo/README.md, "Заголовок страницы места").
const PLACE_TERM: Record<Locale, Record<BusinessCategory, { term: string; word: RegExp }>> = {
  en: {
    VET_CLINIC: { term: "vet", word: /^(vet|vets|veterinary)$/ },
    GROOMING: { term: "dog grooming", word: /^groom/ },
    PET_HOTEL: { term: "pet hotel", word: /^hotel/ },
    DOG_TRAINING: { term: "dog training", word: /^train/ },
    PET_SHOP: { term: "pet shop", word: /^shop/ },
    PET_SITTING: { term: "pet sitter", word: /^sitt/ },
  },
  sk: {
    VET_CLINIC: { term: "veterinár", word: /^veterin/ },
    GROOMING: { term: "strihanie psov", word: /^strihan/ },
    PET_HOTEL: { term: "hotel pre zvieratá", word: /^hotel/ },
    DOG_TRAINING: { term: "výcvik psov", word: /^vycvik/ },
    PET_SHOP: { term: "zverimex", word: /^zverimex/ },
    PET_SITTING: { term: "venčenie psov", word: /^vencen/ },
  },
  pl: {
    VET_CLINIC: { term: "weterynarz", word: /^weteryn/ },
    GROOMING: { term: "groomer", word: /^groom/ },
    PET_HOTEL: { term: "hotel dla zwierząt", word: /^hotel/ },
    DOG_TRAINING: { term: "szkolenie psów", word: /^szkoleni/ },
    PET_SHOP: { term: "sklep zoologiczny", word: /^zoolog/ },
    PET_SITTING: { term: "petsitter", word: /^petsit/ },
  },
  cs: {
    VET_CLINIC: { term: "veterina", word: /^veterin/ },
    GROOMING: { term: "psí salon", word: /^(salon|grooming|strihan)/ },
    PET_HOTEL: { term: "hotel pro zvířata", word: /^hotel/ },
    DOG_TRAINING: { term: "výcvik psů", word: /^(vycvik|kynolog|cvicak)/ },
    PET_SHOP: { term: "zverimex", word: /^zverimex/ },
    PET_SITTING: { term: "hlídání psů", word: /^(hlidani|venceni)/ },
  },
  de: {
    VET_CLINIC: { term: "Tierarzt", word: /^(tierarzt|tierklinik|tieraerzt)/ },
    GROOMING: { term: "Hundesalon", word: /^(hundesalon|hundefriseur|groom)/ },
    PET_HOTEL: { term: "Tierpension", word: /^(tierpension|hundepension|katzenpension|hotel)/ },
    DOG_TRAINING: { term: "Hundeschule", word: /^(hundeschule|hundetrain|welpen)/ },
    PET_SHOP: { term: "Tierhandlung", word: /^(tierhandlung|zoo|tierbedarf)/ },
    PET_SITTING: { term: "Hundebetreuung", word: /^(hundebetreuung|hundesitter|tierbetreuung|tiersitter)/ },
  },
  fr: {
    VET_CLINIC: { term: "vétérinaire", word: /^(veterinaire|veto|clinique)/ },
    GROOMING: { term: "toilettage", word: /^(toilettage|toiletteur|toilett|salon)/ },
    PET_HOTEL: { term: "pension pour animaux", word: /^(pension|hotel|garderie)/ },
    DOG_TRAINING: { term: "éducateur canin", word: /^(educateur|dressage|education|club|ecole)/ },
    PET_SHOP: { term: "animalerie", word: /^(animalerie|jardinerie)/ },
    PET_SITTING: { term: "pet sitter", word: /^(pet|dog|garde|promeneur|sitter)/ },
  },
  it: {
    VET_CLINIC: { term: "veterinario", word: /^(veterinari|clinica|ambulatorio)/ },
    GROOMING: { term: "toelettatura", word: /^(toelettat|salone|toelett)/ },
    PET_HOTEL: { term: "pensione per animali", word: /^(pension|hotel|asilo)/ },
    DOG_TRAINING: { term: "educatore cinofilo", word: /^(educator|addestrament|centro|scuola|club)/ },
    PET_SHOP: { term: "negozio di animali", word: /^(negozi|pet|zoo)/ },
    PET_SITTING: { term: "dog sitter", word: /^(dog|pet|sitter|passeggiat)/ },
  },
  es: {
    VET_CLINIC: { term: "veterinario", word: /^(veterinari|clinica|clínica|centro|hospital)/ },
    GROOMING: { term: "peluquería canina", word: /^(peluquer|grooming|estética|estetica)/ },
    PET_HOTEL: { term: "residencia canina", word: /^(residencia|hotel|guarder)/ },
    DOG_TRAINING: { term: "adiestramiento canino", word: /^(adiestr|escuela|club|centro|educador)/ },
    PET_SHOP: { term: "tienda de mascotas", word: /^(tienda|pet|zoo)/ },
    PET_SITTING: { term: "cuidador de perros", word: /^(cuidador|paseador|dog|pet)/ },
  },
  nl: {
    VET_CLINIC: { term: "dierenarts", word: /^(dierenarts|dierenkliniek|dierenartsenpraktijk|dierenziekenhuis)/ },
    GROOMING: { term: "trimsalon", word: /^(trimsalon|hondentrimsalon|katten[\s-]?trimsalon|trimmerij)/ },
    PET_HOTEL: { term: "dierenpension", word: /^(dierenpension|hondenpension|kattenpension|dierenhotel|hondenhotel)/ },
    DOG_TRAINING: { term: "hondenschool", word: /^(hondenschool|hondentrain|kynolog)/ },
    PET_SHOP: { term: "dierenwinkel", word: /^(dierenwinkel|dierenspeciaalzaak|pets\s?place|discus|jumper)/ },
    PET_SITTING: { term: "hondenoppas", word: /^(hondenoppas|dierenoppas|kattenoppas|hondenuitlaat|pet|dog)/ },
  },
  fi: {
    VET_CLINIC: { term: "eläinlääkäri", word: /^(eläinlääk|elainlaak|eläinklinik|elainklinik|klinikka|eläinsair|elainsair)/ },
    GROOMING: { term: "koiran trimmaus", word: /^(trimmaam|trimmaus|koirasalon|grooming)/ },
    PET_HOTEL: { term: "koirahoitola", word: /^(koirahoitol|lemmikkihoitol|kissahoitol|hoitola|koirahotell|hotelli|päiväkot|paivakot)/ },
    DOG_TRAINING: { term: "koirakoulu", word: /^(koirakoul|koulutus|koirakeskus|koirapalvelu)/ },
    PET_SHOP: { term: "eläinkauppa", word: /^(eläinkaup|elainkaup|lemmikkikaup|mustijamirri|pet|zoo)/ },
    PET_SITTING: { term: "koiranhoitaja", word: /^(koiranhoit|lemmikinhoit|koiranulkoil|tassu|dog|pet|sitter)/ },
  },
  hu: {
    VET_CLINIC: { term: "állatorvos", word: /^(állatorvos|allatorvos|rendel|kórház|korhaz|klinik)/ },
    GROOMING: { term: "kutyakozmetika", word: /^(kutyakozmetik|kozmetik|grooming|nyír|nyir)/ },
    PET_HOTEL: { term: "kutyapanzió", word: /^(kutyapanzi|panzi|kutyahotel|kutyanapköz|kutyanapkoz)/ },
    DOG_TRAINING: { term: "kutyaiskola", word: /^(kutyaiskol|kutyasuli|kiképz|kikepz|tréner|trener)/ },
    PET_SHOP: { term: "állatkereskedés", word: /^(állatkeresked|allatkeresked|állateledel|allateledel|díszállat|diszallat|pet|zoo)/ },
    PET_SITTING: { term: "kutyaszitter", word: /^(kutyaszitter|sétáltat|setaltat|felügyelet|felugyelet|dog|pet)/ },
  },
  ja: {
    VET_CLINIC: { term: "動物病院", word: /^(動物病院|クリニック|病院|clinic|hospital|vet)/ },
    GROOMING: { term: "トリミングサロン", word: /^(トリミング|サロン|grooming|salon)/ },
    PET_HOTEL: { term: "ペットホテル", word: /^(ホテル|hotel|pension)/ },
    DOG_TRAINING: { term: "しつけ教室", word: /^(しつけ|訓練|スクール|school|training)/ },
    PET_SHOP: { term: "ペットショップ", word: /^(ペットショップ|ショップ|shop|zoo)/ },
    PET_SITTING: { term: "ペットシッター", word: /^(シッター|sitter|walker)/ },
  },
};

const fold = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

/** The search word for a place's title, or null when its name already says it. */
export function placeTitleTerm(category: BusinessCategory, locale: Locale, name: string): string | null {
  const { term, word } = PLACE_TERM[locale][category];
  return fold(name).split(/[^a-z0-9]+/).some((w) => word.test(w)) ? null : term;
}

export function categorySingular(category: BusinessCategory, locale: Locale): string {
  return SINGULAR[locale][category];
}

export function categoryPlural(category: BusinessCategory, locale: Locale): string {
  return PLURAL[locale][category];
}

export function categorySeoTitle(category: BusinessCategory, locale: Locale): string {
  return SEO_TITLE[locale][category];
}

export function categoryPricesName(category: BusinessCategory, locale: Locale): string {
  return PRICES_NAME[locale][category];
}

export function categoryBlurb(category: BusinessCategory, locale: Locale): string {
  return BLURBS[locale][category];
}

// Locale-aware paths. English is unprefixed; see lib/i18n.ts.
const BUSINESS_SEGMENT: Record<Locale, string> = { en: "business", sk: "podnik", pl: "miejsce", cs: "podnik", de: "betrieb", fr: "etablissement", it: "struttura", es: "centro", nl: "bedrijf", fi: "paikka", hu: "hely", ja: "shisetsu" };

export function businessSegment(locale: Locale): string {
  return BUSINESS_SEGMENT[locale];
}

export function listingPath(
  locale: Locale,
  category: BusinessCategory,
  citySlug: string,
  districtSlug?: string | null
): string {
  const base = `/${categorySlug(category, locale)}/${citySlug}/${districtSlug ? `${districtSlug}/` : ""}`;
  return `/${locale}${base}`;
}

/** A service across cities: /en/vet-clinics/, /sk/veterinar/ - where the
 *  visitor picks a city (docs/architecture/multi-city.md 3.1). */
export function categoryHubPath(locale: Locale, category: BusinessCategory): string {
  return `/${locale}/${categorySlug(category, locale)}/`;
}

// City hub: /city/<slug>/, /sk/mesto/<slug>/ - served by the
// [category]/[city] route (this segment is never a category slug).
export const CITY_SEGMENT: Record<Locale, string> = { en: "city", sk: "mesto", pl: "miasto", cs: "mesto", de: "stadt", fr: "ville", it: "citta", es: "ciudad", nl: "stad", fi: "kaupunki", hu: "varos", ja: "toshi" };

export function isCitySegment(segment: string, locale: Locale): boolean {
  return CITY_SEGMENT[locale] === segment;
}

export function cityPath(locale: Locale, citySlug: string): string {
  const base = `/${CITY_SEGMENT[locale]}/${citySlug}/`;
  return `/${locale}${base}`;
}

export function businessPath(locale: Locale, slug: string): string {
  const base = `/${BUSINESS_SEGMENT[locale]}/${slug}/`;
  return `/${locale}${base}`;
}
