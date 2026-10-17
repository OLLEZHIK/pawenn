// Spanish UI strings (docs/playbooks/add-language.md, step 2). "{where}"
// arrives ready-made from in_city ("en Madrid", "en Barcelona", "en Valencia").
// The language is switched on in step 3 (lib/locales.ts, lib/i18n.ts).
import type { Dictionary } from "./en";

const cap = (text: string): string => text.charAt(0).toUpperCase() + text.slice(1);

const plural = (_lang: "es", n: number, forms: { one: string; other: string }): string =>
  n === 1 ? forms.one : forms.other;

export const es: Dictionary = {
  nav: {
    browse: "Explorar",
    help: "Ayuda",
    listBusiness: "Publica tu negocio en pawenn",
    findCare: "Encuentra servicios para mascotas",
    browseServices: "Explorar",
    services: "Servicios",
    foodAndSupplies: "Alimentación y suplementos",
    comingSoon: "Próximamente",
    howItWorks: "Ayuda: cómo funciona pawenn",
    listYourBusiness: "Añade tu negocio",
    openMenu: "Explorar",
    closeMenu: "Cerrar menú",
    language: "Idioma",
    locating: "Buscando tu ciudad…",
  },
  food: [
    { label: "Comida para perros", blurb: "La mejor comida según la raza y la edad de tu perro" },
    { label: "Comida para gatos", blurb: "Húmeda, pienso y dietas especiales" },
    { label: "Suplementos", blurb: "Articulaciones, piel, pelo y digestión" },
  ],
  footer: {
    tagline: (where: string | null) =>
      `Una guía cercana e independiente de servicios para mascotas${where ? ` ${where}` : ""}. Sin registros ni publicidad: solo los datos necesarios para ponerte en contacto.`,
    sourced: "Cada ficha enlaza a su fuente",
    services: "Servicios",
    about: "pawenn",
    legal: "Aviso legal",
    howItWorks: "Cómo funciona",
    addBusiness: "Añade tu negocio",
    fixListing: "Corregir una ficha",
    privacy: "Política de privacidad",
    terms: "Términos de uso",
    madeWithCare: (where: string | null) => `Hecho con cariño para las mascotas${where ? ` ${where}` : ""}`,
    cities: "Ciudades",
  },
  cityHub: {
    metaTitle: (where: string) => `Servicios para mascotas ${where} – veterinarios, peluquería, residencias | Pawenn`,
    metaDescription: (n: number, where: string) =>
      `${n} ${plural("es", n, { one: "servicio", other: "servicios" })} para mascotas ${where}: veterinarios, peluquerías caninas, residencias, adiestradores, tiendas y cuidadores, con horarios, precios y contacto en un toque.`,
    h1Before: "Servicios para mascotas",
    intro:
      "Todos los servicios para mascotas en una sola página: veterinarios, peluquerías, residencias, adiestradores, tiendas y cuidadores, cada uno con su fuente. A continuación mostramos varios lugares por servicio; elige un servicio arriba para ver la lista completa.",
  },
  animals: {
    any: "Cualquier mascota",
    choose: "¿Qué mascota?",
    dog: "Perros",
    cat: "Gatos",
    "small-pet": "Pequeños animales",
    bird: "Aves",
    fish: "Peces",
  } as Record<string, string>,
  animalSingular: {
    dog: "Perro",
    cat: "Gato",
    "small-pet": "Pequeño animal",
    bird: "Ave",
    fish: "Pez",
  } as Record<string, string>,
  home: {
    /** `where` is null once the site covers several cities. */
    metaTitle: (where: string | null) => `Servicios para mascotas${where ? ` ${where}` : ""} – veterinarios, peluquería, residencias | Pawenn`,
    metaDescription: (where: string | null) =>
      `Encuentra servicios de confianza para mascotas${where ? ` ${where}` : ""} – peluquerías, veterinarios, residencias, adiestramiento y más`,
    h1: "Mascota feliz, mente tranquila",
    subtitle:
      "Veterinarios, peluquerías, residencias y adiestradores con teléfono, horarios y precios. Cada ficha indica de dónde proceden los datos y cuándo los comprobamos.",
    popular: "Populares:",
    statCities: (n: number): string => plural("es", n, { one: "ciudad", other: "ciudades" }),
    statPlaces: (n: number): string => plural("es", n, { one: "lugar registrado", other: "lugares registrados" }),
    statCountries: (n: number): string => plural("es", n, { one: "país", other: "países" }),
    statKinds: (n: number): string => plural("es", n, { one: "tipo de servicio", other: "tipos de servicio" }),
    statPeople: "personas a las que Pawenn puede ayudar",
    browseEyebrow: "Explora por servicio",
    browseTitle: "¿Qué necesita hoy tu mascota?",
    browseBody: "Seis tipos de cuidados para mascotas, cada uno con su lista de lugares y una fuente para cada ficha.",
    places: (n: number) => `${n} ${plural("es", n, { one: "lugar", other: "lugares" })}`,
    placesInCities: (n: number, cities: number) =>
      `${n} ${plural("es", n, { one: "lugar", other: "lugares" })} en ${cities} ${plural("es", cities, { one: "ciudad", other: "ciudades" })}`,
    chooseCityTitle: (label: string) => `${label}: elige una ciudad`,
    chooseCityIntro: "Elige tu ciudad o deja que encontremos la más cercana.",
    nearMe: "Más cercanos a mí",
    exploreEyebrow: "Explora la ciudad",
    exploreTitle: (city: string) => `¿Qué hay en tu zona de ${city}?`,
    exploreBody: "Toca un distrito para ver qué hay cerca. Cuanto más grande sea la burbuja, más lugares hay registrados.",
    partnersEyebrow: "Colaboradores",
    partnersTitle: "Colaboradores destacados",
    partnersBody: "Espacios patrocinados: siempre identificados y nunca mezclados con el orden habitual.",
    howEyebrow: "Cómo funciona",
    howTitle: "De «necesito una peluquería canina» a llamar por teléfono en un minuto",
    steps: [
      { title: "Elige lo que necesitas", body: "Selecciona tu mascota, el servicio y un distrito, o simplemente explora una categoría." },
      {
        title: "Compara con confianza",
        body: "Cada ficha enlaza al origen de sus datos. Los espacios patrocinados siempre están señalizados.",
      },
      {
        title: "Contacta directamente",
        body: "Llama, abre su web o consulta la ruta en un solo toque. Sin cuentas ni comisiones de reserva.",
      },
    ],
    howLink: "Cómo verificamos las fichas",
    careEyebrow: "Consejos para mascotas",
    careTitle: "Ponte a prueba y descubre un consejo",
    careBody: "Un cuestionario de un minuto sobre los mitos más comunes de las mascotas y algunos hábitos que conviene mantener.",
    tips: [
      {
        title: "Corta las uñas cada 3 o 4 semanas",
        body: "Las uñas demasiado largas alteran la pisada de perros y gatos y se rompen con más facilidad. Un corte rápido cada pocas semanas mantiene sus patas cómodas.",
      },
      {
        title: "¿Por qué necesita mi gato un rascador?",
        body: "No es cuestión de tus muebles: rascar estira sus músculos, elimina las capas muertas de las uñas y marca territorio. Los gatos lo hacen aunque no tengan un rascador.",
      },
      {
        title: "Señales de que toca ir al veterinario",
        items: [
          "Come o bebe bastante más o menos de lo habitual",
          "Cojera o reticencia a saltar",
          "Cualquier cambio que dure más de un par de días",
        ],
      },
      {
        title: "Cepilla a los perros de pelo corto cada semana, y a los de pelo largo a diario",
        body: "El cepillado regular detecta nudos antes de tener que raparlos, y sale mucho más barato que una sesión de peluquería por un manto enredado.",
      },
    ] as { title: string; body?: string; items?: string[] }[],
    ctaTitle: (where: string | null) => `¿Tienes un negocio para mascotas${where ? ` ${where}` : ""}?`,
    ctaBody: "Añade tu salón, clínica o residencia, o avísanos si algún dato de tu ficha no está actualizado.",
    ctaButton: "Añade o corrige una ficha",
  },
  search: {
    pet: "Mascota",
    service: "Servicio",
    where: "Dónde",
    petPlaceholder: "¿Qué mascota?",
    servicePlaceholder: "¿Qué necesitas?",
    all: (city: string) => `Todo ${city}`,
    search: "Buscar",
    showResults: "Mostrar resultados",
    stepPet: "1 · Tu mascota",
    stepService: "2 · Servicio",
    stepWhere: "3 · Dónde",
    popular: "Populares",
    close: "Cerrar",
    nearMe: "Cerca de mí",
    nearYou: "Cerca de ti",
    locatingYou: "Buscando tu ubicación…",
    geoDenied: "No pasa nada: escribe tu ciudad.",
    cityPlaceholder: "Tu ciudad",
    cityLabel: "Ciudad",
    cityNotCovered: (typed: string, cities: string) => `Aún no estamos en ${typed}. Pawenn está presente en: ${cities}.`,
    geoFar: (city: string) => `Aún no estamos en tu zona: escribe una ciudad, p. ej. ${city}.`,
    dialogTitle: "Encuentra servicios para mascotas",
    dialogBody: "Elige tu mascota y lo que necesita: te mostraremos los lugares más cercanos.",
  },
  explorer: {
    district: (city: string) => `Distrito de ${city}`,
    placesListed: (n: number): string => plural("es", n, { one: "lugar registrado", other: "lugares registrados" }),
    tabs: "Distritos",
  },
  quiz: {
    title: "¿Mito o realidad?",
    question: (i: number, n: number) => `Pregunta ${i} de ${n}`,
    myth: "Mito",
    fact: "Realidad",
    correct: "¡Correcto!",
    notQuite: "No del todo.",
    itsA: (isFact: boolean) => `Es ${isFact ? "una realidad" : "un mito"}.`,
    next: "Siguiente pregunta",
    seeScore: "Ver mi puntuación",
    playAgain: "Jugar de nuevo",
    perfect: "Puntuación perfecta: tu mascota está en las mejores manos.",
    good: "¡Muy bien hecho! Se nota que sabes del tema.",
    meh: "Algunas sorpresas por el camino: ¡ahora ya lo sabes!",
    statements: [
      {
        claim: "Una trufa caliente y seca significa que el perro está enfermo.",
        isFact: false,
        explanation:
          "La temperatura y la humedad de la trufa varían a lo largo del día incluso en perros sanos. El apetito, la energía y el comportamiento son señales mucho más fiables.",
      },
      {
        claim: "El chocolate es tóxico para los perros.",
        isFact: true,
        explanation:
          "El chocolate contiene teobromina, una sustancia que los perros eliminan muy despacio. El chocolate negro y el de repostería son los más peligrosos.",
      },
      {
        claim: "Un plato de leche es un buen premio para un gato adulto.",
        isFact: false,
        explanation:
          "Muchos gatos adultos son intolerantes a la lactosa y la leche puede causarles molestias estomacales. El agua fresca es todo lo que necesitan.",
      },
      {
        claim: "Las uvas y las pasas pueden ser peligrosas para los perros.",
        isFact: true,
        explanation:
          "Pueden provocar insuficiencia renal en algunos perros y no se conoce una cantidad segura. Mantenlas siempre fuera de su alcance.",
      },
      {
        claim: "Un perro que mueve la cola siempre está contento.",
        isFact: false,
        explanation:
          "Mover la cola indica que el perro está activado o atento: puede ser alegría, pero también nerviosismo o tensión. Hay que fijarse en todo el cuerpo, no solo en la cola.",
      },
      {
        claim: "Los gatos siempre caen de pie, así que las caídas desde un balcón no son peligrosas.",
        isFact: false,
        explanation:
          "Los gatos tienen reflejo de enderezamiento, pero las caídas desde ventanas y balcones causan lesiones graves a muchos gatos cada año. Protege los balcones con una red.",
      },
      {
        claim: "Los gatos que no salen de casa también se benefician de las vacunas.",
        isFact: true,
        explanation:
          "Algunos virus pueden entrar en casa con los zapatos y la ropa, y los gatos de interior también van al veterinario o a residencias. Consulta a tu veterinario qué vacunas básicas son recomendables.",
      },
    ],
  },
  listing: {
    home: "Inicio",
    browseCount: (count: number, what: string, where: string) =>
      `Explora ${count} ${what} ${where}, con una fuente para cada ficha.`,
    listed: "registrados",
    verified: "verificados",
    priceRange: "rango de precios",
    districts: "distritos",
    from: "desde",
    otherServices: "Otros servicios",
    filterDistrict: "Filtrar por distrito",
    allOf: (city: string) => `Todo ${city}`,
    results: (n: number) => `${n} ${plural("es", n, { one: "resultado", other: "resultados" })}`,
    seeAll: (label: string, n: number) => `Todos: ${label.toLowerCase()} (${n})`,
    showAll: (n: number) => `Mostrar todos (${n})`,
    fairTurn: "el orden cambia a diario para dar la misma visibilidad a todos",
    nearest: "más cercanos primero",
    sortLabel: "Ordenar",
    sortRecommended: "Recomendados",
    sortNearest: "Más cercanos",
    sortRating: "Mejor valorados",
    sortReviews: "Más reseñas",
    ratingFirst: "mejor valorados primero",
    reviewsFirst: "más reseñas primero",
    filterRating: "Filtrar por puntuación de Google",
    ratingAny: "Cualquier puntuación",
    hiddenUnrated: (n: number) => `${n} sin puntuación ocultos`,
    openNowFilter: "Abierto ahora",
    allServices: "Todos los servicios",
    geoOff: "La ubicación está desactivada: mostrando todos los lugares.",
    hiddenNoHours: (n: number) => `${n} sin horario de apertura ocultos`,
    kmAway: (km: string) => `a ${km} km`,
    goodToKnow: "A tener en cuenta",
    faqTitle: "Preguntas frecuentes",
    byDistrict: "Por distrito",
    missingTitle: "¿Conoces algún sitio que nos falte?",
    missingBody: "Cuéntanoslo o avísanos si ves datos desactualizados.",
    missingLink: "Añade o corrige una ficha",
    emptyTitle: "Aún no hay nada aquí",
    emptyBody: "Ningún lugar coincide con estos filtros. Prueba con otro distrito o mascota.",
    reset: "Restablecer filtros",
    metaTitle: (label: string, where: string) => `${label} ${where} | Pawenn`,
    metaDescription: (count: number, what: string, where: string) =>
      `Compara ${count} ${what} ${where}: distrito, mascotas que aceptan y un toque para llamar, abrir la web o consultar la ruta.`,
    faqCount: (pluralStr: string, where: string) => `¿Cuántos ${pluralStr} hay ${where}?`,
    faqCountAnswer: (n: number, singular: string, where: string) =>
      `Actualmente hay ${n} ${singular} ${plural("es", n, { one: "registrado", other: "registrados" })} ${where}.`,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- some languages need the plural label here
    faqPrice: (singular: string, where: string, _pluralLabel: string) => `¿Cuánto cuesta ${singular} ${where}?`,
    faqPriceAnswer: (range: string) => `Los precios entre los negocios registrados van de ${range}, según las tarifas publicadas.`,
    faqVerified: (pluralStr: string, where: string) => `¿Qué ${pluralStr} ${where} están verificados?`,
    faqVerifiedAnswer: (v: number, n: number, pct: number) =>
      `${v} de ${n} fichas (${pct} %) tienen sus datos verificados manualmente.`,
  },
  card: {
    priceLevel: (tier: number) => `Nivel de precio ${tier} de 5`,
    /** Against the city market price (lib/priceMarket.ts): 0 = within the market band. */
    vsMarket: (pct: number, marketBand: boolean): string =>
      marketBand ? "Media de la ciudad" : pct < 0 ? "Por debajo de la media" : "Por encima de la media",
    vsMarketHint: "En comparación con el precio medio de los mismos servicios en la ciudad",
    /** Card of a place with no published price (not for pet shops). */
    priceOnRequest: "Precio a consultar",
  },
  rating: {
    countGoogle: (count: string) => `${count} · Google`,
    aria: (value: string, count: number) => `Puntuación de ${value} sobre 5 según ${count} valoraciones en Google`,
  },
  insights: {
    title: "Qué dicen los clientes",
    summary: (n: number, period: string) => `resumen de pawenn de ${n} reseñas de Google, ${period}`,
    allOnGoogle: "Todas las reseñas en Google",
    disclosure: "Resumen de reseñas públicas de Google; pawenn no las verifica.",
    sentiment: { positive: "Mayormente positivas", mixed: "Variadas", negative: "Mayormente negativas" },
    mentions: (m: number, n: number) => `${m} de ${n} reseñas`,
    faqTitle: "Preguntas habituales de los dueños",
    shortNote: "Aún no hay un resumen de reseñas de pawenn para este lugar. La puntuación y todas las reseñas están en Google.",
  },
  vetNow: {
    button: "Veterinario abierto ahora",
    buttonHint: "Veterinarios más cercanos abiertos ahora mismo",
    locating: "Buscando tu ubicación…",
    callFirst: "Llama antes de ir: explica qué ha ocurrido y confirma que pueden atenderte ahora mismo.",
    noneOpen: "Ningún veterinario con horario publicado está abierto ahora mismo. Los más próximos en abrir:",
    opensToday: (time: string) => `abre hoy a las ${time}`,
    opensTomorrow: (time: string) => `abre mañana a las ${time}`,
    opensLater: (date: string, time: string) => `abre el ${date} a las ${time}`,
    nonstopTitle: "Abierto 24 horas",
  },
  /** Analytics consent banner (GA4 runs only after "allow"). */
  consent: {
    text: "Nos gustaría utilizar cookies de analítica de Google Analytics y Microsoft Clarity (incluidas grabaciones anónimas de pantalla) para entender cómo se utiliza el sitio y mejorarlo. Solo si tú lo permites.",
    allow: "Permitir",
    decline: "Rechazar",
    settings: "Configuración de cookies",
  },
  actions: { call: "Llamar", website: "Sitio web", route: "Cómo llegar" },
  badges: { verified: (date: string) => `Verificado ${date}`, partner: "Colaborador" },
  business: {
    metaTitle: (name: string, label: string, where: string) => `${name} - ${label}${where ? ` ${where}` : ""}`,
    metaDescription: (name: string, where: string) =>
      `${name}${where ? ` ${where}` : ""}: dirección, datos de contacto y cómo llegar.`,
    /** After the place's own short description (SEO audit T11). */
    metaDescriptionTail: (hasPrices: boolean) =>
      `Horario de apertura${hasPrices ? ", precios" : ""}, teléfono y cómo llegar.`,
    about: "Información",
    goodToKnow: "A tener en cuenta",
    goodToKnowNote: "Tal como lo indica el establecimiento en su propia web.",
    faqTitle: "Preguntas antes de llamar",
    cityPricesTitle: (where: string) => `Precios medios ${where}`,
    cityPricesIntro: "Este lugar no ha publicado precios. Media de la ciudad, no los precios de este lugar:",
    welcomes: "Admite",
    specialties: "Especialidades",
    openingHours: "Horario de apertura",
    prices: "Precios",
    standard: "Estándar",
    sizes: { MINI: "mini", SMALL: "pequeño", MEDIUM: "mediano", LARGE: "grande", XL: "XL" } as Record<string, string>,
    location: "Ubicación",
    openInMaps: "Abrir en Maps",
    mapTitle: (name: string) => `Mapa con la ubicación de ${name}`,
    reviews: "Reseñas",
    reviewsCount: (n: number) => `(${n} ${plural("es", n, { one: "reseña", other: "reseñas" })})`,
    fromN: (n: number) => `de ${n}`,
    noReviews: "Aún no hay reseñas. ¿Has estado aquí con tu mascota? Sé el primero en opinar.",
    leaveReview: "Dejar una reseña",
    getInTouch: "Contacto",
    phone: "Teléfono",
    website: "Sitio web",
    email: "Correo electrónico",
    address: "Dirección",
    noFees: "Contacta directamente con el negocio: pawenn no cobra comisiones.",
    keepExploring: "Sigue explorando",
    moreNearby: (label: string) => `Más ${label.toLowerCase()} cerca`,
    seeAll: "Ver todos",
    infoVerified: (date: string) => `Datos verificados: ${date}`,
    source: "fuente:",
    reportIssue: "Informar de un error",
    days: { mo: "Lunes", tu: "Martes", we: "Miércoles", th: "Jueves", fr: "Viernes", sa: "Sábado", su: "Domingo" } as Record<string, string>,
    openNow: "Abierto ahora",
    closedNow: "Cerrado ahora",
    closedDay: "Cerrado",
    allDay: "Abierto 24 horas",
    byAppointment: "Con cita previa",
    hoursChecked: (date: string) => `Horario comprobado el ${date}`,
    nonstop: "Abierto 24 horas, 7 días a la semana",
    emergency: "Urgencias",
    // "Salón de peluquería en " + <district> + ", Madrid"
    placeIn: { before: (singular: string) => `${cap(singular)} en ` },
    homeVisits: "Visitas a domicilio",
    languages: (list: string) => `El personal habla ${list}`,
    instagram: "Instagram",
    facebook: "Facebook",
    cityAverage: (price: string) => `Media en la ciudad ${price}`,
    lessBy: (amount: string) => `${amount} menos`,
    moreBy: (amount: string) => `${amount} más`,
    allPrices: (n: number) => `Todos los precios (${n})`,
    priceFrom: (price: string) => `desde ${price}`,
    weightUpTo: (kg: string) => `hasta ${kg} kg`,
    weightOver: (kg: string) => `más de ${kg} kg`,
    weightRange: (from: string, to: string) => `${from}–${to} kg`,
    pricesChecked: (date: string) => `Comprobado el ${date}`,
    priceList: "lista de precios",
    perUnit: { per_hour: "/ hora", per_km: "/ km" } as Record<string, string>,
    notCompared: "no comparado con otros lugares",
    pricesDisclaimer: "Precios según lo publicado por el establecimiento en la fecha indicada. Pueden cambiar: confírmalos antes de reservar.",
  },
  reviewForm: {
    name: "Tu nombre",
    rating: "Valoración",
    stars: (n: number) => `${n} ${plural("es", n, { one: "estrella", other: "estrellas" })}`,
    review: "Reseña",
    submit: "Enviar reseña",
    submitting: "Enviando...",
    thanks: "Gracias, tu reseña se publicará tras ser revisada.",
    error: "Ha ocurrido un error.",
  },
  notFound: {
    title: "Hemos perdido el rastro",
    body: "Hemos husmeado por todas partes pero no encontramos esa página. Puede que se haya movido o que el enlace contenga un error.",
    back: "Volver al inicio",
  },
  // Attribute pages (lib/attributePages.ts): chip label, crumb, H1, the
  // one-sentence answer (n of total places), title and description.
  attributes: {
    nonstop: {
      chip: "Abierto 24 horas",
      h1: (where: string) => `Veterinarios 24 horas ${where}`,
      lead: (n: number, total: number) =>
        `${n} de ${total} clínicas veterinarias atienden a pacientes las 24 horas del día, los 7 días de la semana. Llama antes de acudir.`,
      metaTitle: (where: string) => `Veterinarios de urgencias ${where} – abiertos 24 horas | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} ${plural("es", n, { one: "clínica veterinaria", other: "clínicas veterinarias" })} ${where} con atención continua 24 horas al día, 7 días a la semana: dirección, teléfono y cómo llegar.`,
    },
    saturday: {
      chip: "Abierto los sábados",
      h1: (where: string) => `Veterinarios abiertos en sábado ${where}`,
      lead: (n: number, total: number) => `${n} de ${total} clínicas veterinarias abren los sábados. Horarios detallados más abajo, comprobados con cada clínica.`,
      metaTitle: (where: string) => `Veterinarios abiertos los sábados ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} ${plural("es", n, { one: "clínica veterinaria", other: "clínicas veterinarias" })} ${where} ${plural("es", n, { one: "abierta", other: "abiertas" })} en sábado, con horario, teléfono y cómo llegar.`,
    },
    sunday: {
      chip: "Abierto los domingos",
      h1: (where: string) => `Veterinarios abiertos en domingo ${where}`,
      lead: (n: number, total: number) => `${n} de ${total} clínicas veterinarias abren los domingos. Horarios detallados más abajo, comprobados con cada clínica.`,
      metaTitle: (where: string) => `Veterinarios abiertos los domingos ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} ${plural("es", n, { one: "clínica veterinaria", other: "clínicas veterinarias" })} ${where} ${plural("es", n, { one: "abierta", other: "abiertas" })} en domingo, con horario, teléfono y cómo llegar.`,
    },
    exotics: {
      chip: "Animales exóticos",
      h1: (where: string) => `Veterinarios de animales exóticos ${where}`,
      lead: (n: number, total: number) =>
        `${n} de ${total} clínicas veterinarias atienden animales exóticos (reptiles, aves y roedores). Llama con antelación para confirmar tu especie.`,
      metaTitle: (where: string) => `Veterinarios de animales exóticos ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} ${plural("es", n, { one: "clínica veterinaria", other: "clínicas veterinarias" })} ${where} que ${plural("es", n, { one: "atiende", other: "atienden" })} animales exóticos: reptiles, aves y roedores. Horarios, teléfono y cómo llegar.`,
    },
    "home-visits": {
      chip: "Visitas a domicilio",
      h1: (where: string) => `Veterinarios a domicilio ${where}`,
      lead: (n: number, total: number) => `${n} de ${total} clínicas veterinarias ofrecen visitas a domicilio.`,
      metaTitle: (where: string) => `Veterinario a domicilio ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} ${plural("es", n, { one: "clínica veterinaria", other: "clínicas veterinarias" })} ${where} con servicio a domicilio: teléfono, horario y servicios que ofrecen.`,
    },
    english: {
      chip: "Atención en inglés",
      h1: (where: string) => `Veterinarios que atienden en inglés ${where}`,
      lead: (n: number, total: number) =>
        `${n} de ${total} clínicas veterinarias indican en su propia web que atienden a clientes en inglés. Llama con antelación para confirmar quién está de turno.`,
      metaTitle: (where: string) => `Veterinarios con atención en inglés ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} ${plural("es", n, { one: "clínica veterinaria", other: "clínicas veterinarias" })} ${where} que ${plural("es", n, { one: "atiende", other: "atienden" })} en inglés según su propia web: horario, teléfono y cómo llegar.`,
    },
  },
  // Price pages (lib/pricePages.ts): one per service and city, plus an
  // overview per category. Numbers come preformatted (money, dates).
  prices: {
    crumb: "Precios",
    overviewH1: (name: string, where: string) => `${name} ${where}`,
    overviewMetaTitle: (name: string, where: string) => `${name} ${where} | Pawenn`,
    overviewIntro:
      "Cuánto cuesta cada servicio, comparado entre los lugares que publican sus tarifas. La media mostrada es el precio central: la mitad de los sitios cobra menos y la otra mitad, más.",
    overviewMetaDescription: (label: string, where: string, services: number) =>
      `${label} ${where}: precios de ${services} ${plural("es", services, { one: "servicio", other: "servicios" })} comparados entre establecimientos, con la media y el rango de cada uno. De listas de precios publicadas, con fechas.`,
    serviceH1: (service: string, where: string) => `${service} ${where}: precios`,
    serviceMetaTitle: (service: string, where: string, from: string) => `${service} ${where} – desde ${from} | Pawenn`,
    /** Meta description of a service price page: "<service> <where>:" + the answer, the cheapest place in between. */
    serviceMetaLead: (service: string, where: string) => `${service} ${where}:`,
    cheapest: (name: string, price: string) => `El más económico: ${name}, ${price}.`,
    answer: (from: string, to: string, median: string, places: number, date: string) =>
      `Cuesta de ${from} a ${to}, media ${median}. Hemos comparado ${places} ${plural("es", places, { one: "lugar", other: "lugares" })}; tarifas comprobadas el ${date}.`,
    fewPlaces: (places: number) =>
      `Por ahora solo ${places} ${plural("es", places, { one: "lugar publica", other: "lugares publican" })} este precio: muy pocos para comparar.`,
    question: (service: string, where: string) => `¿Cuánto cuesta ${service.toLowerCase()} ${where}?`,
    includes: "Qué incluye el precio",
    place: "Lugar",
    price: "Precio",
    vsMarket: "Frente a la media de la ciudad",
    notComparedTitle: "Otros precios (no comparados)",
    notComparedIntro: "Precios parciales y tarifas por hora o por km.",
    otherServices: "Otros precios",
    service: "Servicio",
    range: "Rango",
    median: "Media",
    places: "Lugares",
    seeAll: (label: string) => `Todos: ${label.toLowerCase()}`,
    linkFromListing: (where: string) => `Precios ${where}`,
    source: "lista de precios",
  },
};
