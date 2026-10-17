// Portuguese (Portugal) UI strings (docs/playbooks/add-language.md, step 2). "{where}"
// arrives ready-made from in_city ("em Lisboa", "no Porto").
// The language is switched on in step 3 (lib/locales.ts, lib/i18n.ts).
import type { Dictionary } from "./en";

const cap = (text: string): string => text.charAt(0).toUpperCase() + text.slice(1);

const plural = (_lang: "pt", n: number, forms: { one: string; other: string }): string =>
  n === 1 ? forms.one : forms.other;

export const pt: Dictionary = {
  nav: {
    browse: "Explorar",
    help: "Ajuda",
    listBusiness: "Registe o seu espaço no pawenn",
    findCare: "Encontre serviços para animais",
    browseServices: "Explorar",
    services: "Serviços",
    foodAndSupplies: "Alimentação e suplementos",
    comingSoon: "Em breve",
    howItWorks: "Ajuda: como funciona o pawenn",
    listYourBusiness: "Adicionar espaço",
    openMenu: "Explorar",
    closeMenu: "Fechar menu",
    language: "Idioma",
    locating: "A procurar a sua cidade…",
  },
  food: [
    { label: "Comida para cães", blurb: "A melhor alimentação consoante a raça e a idade do seu cão" },
    { label: "Comida para gatos", blurb: "Comida húmida, ração e dietas veterinárias especiais" },
    { label: "Suplementos", blurb: "Articulações, pele, pelo e digestão" },
  ],
  footer: {
    tagline: (where: string | null) =>
      `Um guia independente e prático de serviços para animais${where ? ` ${where}` : ""}. Sem registos nem publicidade: apenas os contactos necessários para falar diretamente com cada espaço.`,
    sourced: "Cada ficha inclui ligação para a fonte",
    services: "Serviços",
    about: "pawenn",
    legal: "Aviso legal",
    howItWorks: "Como funciona",
    addBusiness: "Adicione o seu espaço",
    fixListing: "Corrigir uma ficha",
    privacy: "Política de privacidade",
    terms: "Termos de utilização",
    madeWithCare: (where: string | null) => `Feito com dedicação para os animais de companhia${where ? ` ${where}` : ""}`,
    cities: "Cidades",
  },
  cityHub: {
    metaTitle: (where: string) => `Serviços para animais ${where} – veterinários, tosquias, hotéis caninos | Pawenn`,
    metaDescription: (n: number, where: string) =>
      `${n} ${plural("pt", n, { one: "serviço", other: "serviços" })} para animais ${where}: veterinários, banhos e tosquias, hotéis caninos, treinadores, lojas de animais e pet sitting, com horários, preços e contacto direto.`,
    h1Before: "Serviços para animais",
    intro:
      "Todos os serviços para animais numa única página: veterinários, salões de tosquia, hotéis caninos, treinadores, lojas de animais e petsitters, cada um com a respetiva fonte. Abaixo encontra vários espaços por serviço; escolha um serviço acima para ver a lista completa.",
  },
  animals: {
    any: "Qualquer animal",
    choose: "Que animal?",
    dog: "Cães",
    cat: "Gatos",
    "small-pet": "Pequenos animais",
    bird: "Aves",
    fish: "Peixes",
  } as Record<string, string>,
  animalSingular: {
    dog: "Cão",
    cat: "Gato",
    "small-pet": "Pequeno animal",
    bird: "Ave",
    fish: "Peixe",
  } as Record<string, string>,
  home: {
    /** `where` is null once the site covers several cities. */
    metaTitle: (where: string | null) => `Serviços para animais${where ? ` ${where}` : ""} – veterinários, tosquias, hotéis caninos | Pawenn`,
    metaDescription: (where: string | null) =>
      `Encontre serviços de confiança para animais${where ? ` ${where}` : ""} – banhos e tosquias, veterinários, hotéis caninos, treino e muito mais`,
    h1: "Animais felizes, donos tranquilos",
    subtitle:
      "Veterinários, salões de banhos e tosquias, hotéis caninos e treinadores com telefone, horários e preços. Cada ficha indica a origem dos dados e a data em que foram verificados.",
    popular: "Populares:",
    statCities: (n: number): string => plural("pt", n, { one: "cidade", other: "cidades" }),
    statPlaces: (n: number): string => plural("pt", n, { one: "espaço registado", other: "espaços registados" }),
    statCountries: (n: number): string => plural("pt", n, { one: "país", other: "países" }),
    statKinds: (n: number): string => plural("pt", n, { one: "tipo de serviço", other: "tipos de serviço" }),
    statPeople: "pessoas a quem o Pawenn pode ajudar",
    browseEyebrow: "Explore por serviço",
    browseTitle: "O que precisa o seu animal hoje?",
    browseBody: "Seis áreas de cuidados para animais de companhia, cada uma com a sua lista de espaços e fonte verificada.",
    places: (n: number) => `${n} ${plural("pt", n, { one: "espaço", other: "espaços" })}`,
    placesInCities: (n: number, cities: number) =>
      `${n} ${plural("pt", n, { one: "espaço", other: "espaços" })} em ${cities} ${plural("pt", cities, { one: "cidade", other: "cidades" })}`,
    chooseCityTitle: (label: string) => `${label}: escolha uma cidade`,
    chooseCityIntro: "Escolha a sua cidade ou deixe-nos sugerir a mais próxima.",
    nearMe: "Mais perto de mim",
    exploreEyebrow: "Explore a cidade",
    exploreTitle: (city: string) => `O que há na sua zona em ${city}?`,
    exploreBody: "Selecione uma freguesia ou zona para ver o que há por perto. Quanto maior o círculo, mais espaços estão registados.",
    partnersEyebrow: "Parceiros",
    partnersTitle: "Parceiros em destaque",
    partnersBody: "Espaços patrocinados: devidamente identificados e nunca misturados com a ordenação habitual.",
    howEyebrow: "Como funciona",
    howTitle: "De «preciso de tosquia» a ligar por telefone em menos de um minuto",
    steps: [
      { title: "Escolha o que precisa", body: "Indique o seu animal, o serviço e a zona, ou explore diretamente uma categoria." },
      {
        title: "Compare com confiança",
        body: "Cada ficha liga à fonte oficial dos dados. Os espaços promovidos estão sempre assinalados.",
      },
      {
        title: "Contacte diretamente",
        body: "Ligue, visite o site ou veja como chegar num único toque. Sem registo de conta nem taxas de intermediação.",
      },
    ],
    howLink: "Como verificamos as informações",
    careEyebrow: "Dicas para o seu animal",
    careTitle: "Teste os seus conhecimentos e descubra uma dica útil",
    careBody: "Um questionário rápido de um minuto sobre os mitos mais comuns e os bons hábitos a manter com o seu animal.",
    tips: [
      {
        title: "Corte as unhas a cada 3 a 4 semanas",
        body: "Unhas demasiado compridas afetam a passada de cães e gatos e partem-se com facilidade. Um corte regular a cada poucas semanas mantém as patas saudáveis e confortáveis.",
      },
      {
        title: "Porque é que o gato precisa de arranhador?",
        body: "Não é apenas para poupar o sofá: arranhar alonga os músculos, remove a camada morta das unhas e marca território. Os gatos precisam de o fazer por instinto natural.",
      },
      {
        title: "Sinais de que deve ir ao veterinário",
        items: [
          "Come ou bebe muito mais ou menos do que o habitual",
          "Coxeia ou hesita ao saltar",
          "Qualquer alteração de comportamento que dure mais de dois dias",
        ],
      },
      {
        title: "Escove cães de pelo curto semanalmente e de pelo comprido todos os dias",
        body: "A escovagem frequente evita a formação de nós antes de ser preciso rapar o pelo, poupando tempo e dinheiro em sessões difíceis de tosquia.",
      },
    ] as { title: string; body?: string; items?: string[] }[],
    ctaTitle: (where: string | null) => `Tem um espaço para animais${where ? ` ${where}` : ""}?`,
    ctaBody: "Registe o seu salão de tosquia, clínica, hotel canino ou serviço, ou avise-nos se algum dado estiver desatualizado.",
    ctaButton: "Registar ou corrigir ficha",
  },
  search: {
    pet: "Animal",
    service: "Serviço",
    where: "Onde",
    petPlaceholder: "Que animal?",
    servicePlaceholder: "De que precisa?",
    all: (city: string) => `Toda a zona de ${city}`,
    search: "Pesquisar",
    showResults: "Ver resultados",
    stepPet: "1 · O seu animal",
    stepService: "2 · Serviço",
    stepWhere: "3 · Onde",
    popular: "Populares",
    close: "Fechar",
    nearMe: "Perto de mim",
    nearYou: "Perto de si",
    locatingYou: "A determinar a sua localização…",
    geoDenied: "Sem problema: escreva o nome da sua cidade.",
    cityPlaceholder: "A sua cidade",
    cityLabel: "Cidade",
    cityNotCovered: (typed: string, cities: string) => `Ainda não estamos em ${typed}. O Pawenn está disponível em: ${cities}.`,
    geoFar: (city: string) => `Ainda não estamos na sua zona: escreva uma cidade, p. ex. ${city}.`,
    dialogTitle: "Encontre serviços para animais",
    dialogBody: "Escolha o seu animal e o serviço pretendido: mostramos-lhe os espaços mais próximos.",
  },
  explorer: {
    district: (city: string) => `Zona de ${city}`,
    placesListed: (n: number): string => plural("pt", n, { one: "espaço registado", other: "espaços registados" }),
    tabs: "Zonas",
  },
  quiz: {
    title: "Mito ou facto?",
    question: (i: number, n: number) => `Pergunta ${i} de ${n}`,
    myth: "Mito",
    fact: "Facto",
    correct: "Correto!",
    notQuite: "Não é bem assim.",
    itsA: (isFact: boolean) => `É ${isFact ? "um facto" : "um mito"}.`,
    next: "Próxima pergunta",
    seeScore: "Ver pontuação",
    playAgain: "Jogar novamente",
    perfect: "Pontuação máxima! O seu animal está em excelentes mãos.",
    good: "Muito bem! Nota-se que conhece bem o assunto.",
    meh: "Algumas surpresas pelo caminho: agora já sabe a resposta certa!",
    statements: [
      {
        claim: "Um focinho quente e seco significa que o cão está doente.",
        isFact: false,
        explanation:
          "A temperatura e humidade do focinho variam ao longo do dia, mesmo em cães perfeitamente saudáveis. O apetite, a energia e o comportamento são indicadores muito mais fiáveis.",
      },
      {
        claim: "O chocolate é tóxico para os cães.",
        isFact: true,
        explanation:
          "O chocolate contém teobromina, uma substância que o organismo dos cães metaboliza muito lentamente. O chocolate negro e o de culinária são os mais perigosos.",
      },
      {
        claim: "Uma taça de leite é uma boa recompensa para um gato adulto.",
        isFact: false,
        explanation:
          "A maioria dos gatos adultos é intolerante à lactose, podendo o leite causar problemas gastrointestinais. Água fresca e limpa é tudo de que precisam.",
      },
      {
        claim: "Uvas e passas podem ser perigosas para os cães.",
        isFact: true,
        explanation:
          "Podem provocar insuficiência renal aguda em alguns cães e não existe uma dose mínima segura. Mantenha-as sempre fora do alcance do seu animal.",
      },
      {
        claim: "Um cão a abanar a cauda está sempre contente.",
        isFact: false,
        explanation:
          "Abanar a cauda indica excitação ou atenção redobrada: pode ser alegria, mas também ansiedade, medo ou tensão. Deve olhar-se para a linguagem corporal completa, não apenas para a cauda.",
      },
      {
        claim: "Os gatos caem sempre de pé, por isso quedas de varandas não são perigosas.",
        isFact: false,
        explanation:
          "Os gatos possuem reflexo de endireitamento, mas quedas de janelas e varandas causam lesões graves a muitos animais todos os anos. Proteja sempre as varandas com rede de segurança.",
      },
      {
        claim: "Gatos que não saem de casa também beneficiam de vacinas.",
        isFact: true,
        explanation:
          "Vários vírus podem ser transportados para dentro de casa no calçado e na roupa, e os gatos de interior também visitam o veterinário ou hotéis. Aconselhe-se com o seu médico veterinário sobre o plano vacinal adequado.",
      },
    ],
  },
  listing: {
    home: "Início",
    browseCount: (count: number, what: string, where: string) =>
      `Explore ${count} ${what} ${where}, com fonte confirmada para cada ficha.`,
    listed: "registados",
    verified: "verificados",
    priceRange: "intervalo de preços",
    districts: "zonas",
    from: "a partir de",
    otherServices: "Outros serviços",
    filterDistrict: "Filtrar por zona",
    allOf: (city: string) => `Toda a zona de ${city}`,
    results: (n: number) => `${n} ${plural("pt", n, { one: "resultado", other: "resultados" })}`,
    seeAll: (label: string, n: number) => `Todos: ${label.toLowerCase()} (${n})`,
    showAll: (n: number) => `Mostrar todos (${n})`,
    pagination: { label: "Páginas", page: (n: number) => `Página ${n}`, prev: "Página anterior", next: "Página seguinte", showing: (from: number, to: number, total: number) => `A mostrar ${from}–${to} de ${total}` },
    fairTurn: "a ordem muda diariamente para garantir visibilidade equilibrada a todos os espaços",
    nearest: "mais próximos primeiro",
    sortLabel: "Ordenar",
    sortRecommended: "Recomendados",
    sortNearest: "Mais próximos",
    sortRating: "Melhor classificação",
    sortReviews: "Mais avaliações",
    ratingFirst: "melhor classificação primeiro",
    reviewsFirst: "mais avaliações primeiro",
    filterRating: "Filtrar por classificação do Google",
    ratingAny: "Qualquer classificação",
    hiddenUnrated: (n: number) => `${n} sem classificação ocultados`,
    openNowFilter: "Aberto agora",
    allServices: "Todos os serviços",
    picker: { service: "Serviço", where: "Onde", filters: "Filtros", searchCity: "Procurar cidade", done: "Concluído", rating: "Classificação" },
    geoOff: "Localização desativada: a mostrar todos os espaços.",
    hiddenNoHours: (n: number) => `${n} sem horário publicado ocultados`,
    kmAway: (km: string) => `a ${km} km`,
    goodToKnow: "Informações úteis",
    faqTitle: "Perguntas frequentes",
    byDistrict: "Por zona",
    missingTitle: "Conhece algum espaço que não esteja aqui?",
    missingBody: "Envie-nos a sugestão ou avise-nos se encontrar informações desatualizadas.",
    missingLink: "Adicionar ou corrigir ficha",
    emptyTitle: "Ainda não existem resultados aqui",
    emptyBody: "Nenhum espaço corresponde aos filtros selecionados. Experimente escolher outra zona ou animal.",
    reset: "Repor filtros",
    metaTitle: (label: string, where: string) => `${label} ${where} | Pawenn`,
    metaDescription: (count: number, what: string, where: string) =>
      `Compare ${count} ${what} ${where}: zona, animais aceites e contacto direto para ligar, visitar o site ou ver como chegar.`,
    faqCount: (pluralStr: string, where: string) => `Quantos ${pluralStr} existem ${where}?`,
    faqCountAnswer: (n: number, singular: string, where: string) =>
      `Atualmente existem ${n} ${singular} ${plural("pt", n, { one: "registado", other: "registados" })} ${where}.`,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- some languages need the plural label here
    faqPrice: (singular: string, where: string, _pluralLabel: string) => `Quanto custa ${singular} ${where}?`,
    faqPriceAnswer: (range: string) => `Os preços entre os espaços registados variam entre ${range}, de acordo com as tabelas de preços publicadas.`,
    faqVerified: (pluralStr: string, where: string) => `Quais os ${pluralStr} ${where} que estão verificados?`,
    faqVerifiedAnswer: (v: number, n: number, pct: number) =>
      `${v} de ${n} fichas (${pct} %) têm dados confirmados manualmente.`,
  },
  card: {
    priceLevel: (tier: number) => `Nível de preço ${tier} de 5`,
    /** Against the city market price (lib/priceMarket.ts): 0 = within the market band. */
    vsMarket: (pct: number, marketBand: boolean): string =>
      marketBand ? "Média da cidade" : pct < 0 ? "Abaixo da média" : "Acima da média",
    vsMarketHint: "Em comparação com o preço médio dos mesmos serviços na cidade",
    /** Card of a place with no published price (not for pet shops). */
    priceOnRequest: "Preço sob consulta",
  },
  rating: {
    countGoogle: (count: string) => `${count} · Google`,
    aria: (value: string, count: number) => `Classificação de ${value} em 5 com base em ${count} avaliações no Google`,
  },
  insights: {
    title: "O que dizem os clientes",
    summary: (n: number, period: string) => `resumo pawenn de ${n} avaliações do Google, ${period}`,
    allOnGoogle: "Todas as avaliações no Google",
    disclosure: "Resumo de avaliações públicas do Google; o pawenn não as verifica de forma independente.",
    sentiment: { positive: "Maioritariamente positivas", mixed: "Mistas", negative: "Maioritariamente negativas" },
    mentions: (m: number, n: number) => `${m} de ${n} avaliações`,
    faqTitle: "Perguntas habituais dos donos",
    shortNote: "Ainda não existe um resumo de avaliações pawenn para este espaço. A classificação e todas as avaliações estão disponíveis no Google.",
  },
  vetNow: {
    button: "Veterinário aberto agora",
    buttonHint: "Veterinários mais próximos abertos neste momento",
    locating: "A determinar a sua localização…",
    callFirst: "Ligue antes de ir: explique a situação e confirme se podem receber o seu animal de imediato.",
    noneOpen: "Nenhum veterinário com horário publicado se encontra aberto neste momento. Próximos a abrir:",
    opensToday: (time: string) => `abre hoje às ${time}`,
    opensTomorrow: (time: string) => `abre amanhã às ${time}`,
    opensLater: (date: string, time: string) => `abre a ${date} às ${time}`,
    nonstopTitle: "Aberto 24 horas",
  },
  /** Analytics consent banner (GA4 runs only after "allow"). */
  consent: {
    text: "Gostaríamos de utilizar cookies de análise do Google Analytics e Microsoft Clarity (incluindo gravações anónimas de navegação) para compreender como o site é utilizado e melhorá-lo. Apenas se der o seu consentimento.",
    allow: "Aceitar",
    decline: "Recusar",
    settings: "Definições de cookies",
  },
  actions: { call: "Ligar", website: "Website", route: "Como chegar" },
  badges: { verified: (date: string) => `Verificado a ${date}`, partner: "Parceiro" },
  business: {
    metaTitle: (name: string, label: string, where: string) => `${name} - ${label}${where ? ` ${where}` : ""}`,
    metaDescription: (name: string, where: string) =>
      `${name}${where ? ` ${where}` : ""}: morada, contactos e como chegar.`,
    /** After the place's own short description (SEO audit T11). */
    metaDescriptionTail: (hasPrices: boolean) =>
      `Horário de funcionamento${hasPrices ? ", preços" : ""}, telefone e como chegar.`,
    about: "Sobre o espaço",
    goodToKnow: "Informações úteis",
    goodToKnowNote: "Conforme indicado pelo estabelecimento no seu próprio website.",
    faqTitle: "Perguntas antes de ligar",
    cityPricesTitle: (where: string) => `Preços médios ${where}`,
    cityPricesIntro: "Este espaço não publicou tabela de preços. Média da cidade, não os preços deste local:",
    welcomes: "Aceita",
    specialties: "Especialidades",
    openingHours: "Horário de funcionamento",
    prices: "Preços",
    standard: "Padrão",
    sizes: { MINI: "mini", SMALL: "pequeno", MEDIUM: "médio", LARGE: "grande", XL: "XL" } as Record<string, string>,
    location: "Localização",
    openInMaps: "Abrir no Maps",
    mapTitle: (name: string) => `Mapa com a localização de ${name}`,
    reviews: "Avaliações",
    reviewsCount: (n: number) => `(${n} ${plural("pt", n, { one: "avaliação", other: "avaliações" })})`,
    fromN: (n: number) => `de ${n}`,
    noReviews: "Ainda não existem avaliações. Já esteve aqui com o seu animal? Seja o primeiro a partilhar a sua experiência.",
    leaveReview: "Deixar avaliação",
    getInTouch: "Contactos",
    phone: "Telefone",
    website: "Website",
    email: "E-mail",
    address: "Morada",
    noFees: "Contacte o espaço diretamente: o pawenn não cobra comissões.",
    keepExploring: "Continuar a explorar",
    moreNearby: (label: string) => `Mais ${label.toLowerCase()} por perto`,
    seeAll: "Ver todos",
    infoVerified: (date: string) => `Dados verificados a ${date}`,
    source: "fonte:",
    reportIssue: "Sugerir correção",
    days: { mo: "Segunda-feira", tu: "Terça-feira", we: "Quarta-feira", th: "Quinta-feira", fr: "Sexta-feira", sa: "Sábado", su: "Domingo" } as Record<string, string>,
    openNow: "Aberto agora",
    closedNow: "Encerrado agora",
    closedDay: "Encerrado",
    allDay: "Aberto 24 horas",
    sections: { label: "Secções desta página", contact: "Contactos", prices: "Preços", about: "Sobre", reviews: "Avaliações", location: "Localização" },
    showMore: "Mostrar mais",
    showLess: "Mostrar menos",
    byAppointment: "Apenas com marcação",
    hoursChecked: (date: string) => `Horário verificado a ${date}`,
    nonstop: "Aberto 24 horas, 7 dias por semana",
    emergency: "Urgências",
    // "Salão de banhos e tosquias em " + <district> + ", Lisboa"
    placeIn: { before: (singular: string) => `${cap(singular)} em ` },
    homeVisits: "Consultas ao domicílio",
    languages: (list: string) => `Equipa fala ${list}`,
    instagram: "Instagram",
    facebook: "Facebook",
    cityAverage: (price: string) => `Média na cidade: ${price}`,
    lessBy: (amount: string) => `${amount} menos`,
    moreBy: (amount: string) => `${amount} mais`,
    allPrices: (n: number) => `Todos os preços (${n})`,
    priceFrom: (price: string) => `a partir de ${price}`,
    weightUpTo: (kg: string) => `até ${kg} kg`,
    weightOver: (kg: string) => `mais de ${kg} kg`,
    weightRange: (from: string, to: string) => `${from}–${to} kg`,
    pricesChecked: (date: string) => `Verificado a ${date}`,
    priceList: "tabela de preços",
    perUnit: { per_hour: "/ hora", per_km: "/ km" } as Record<string, string>,
    notCompared: "sem comparação com outros espaços",
    pricesDisclaimer: "Preços de acordo com o publicado pelo estabelecimento na data indicada. Podem sofrer alterações: confirme antes de agendar.",
  },
  reviewForm: {
    name: "O seu nome",
    rating: "Classificação",
    stars: (n: number) => `${n} ${plural("pt", n, { one: "estrela", other: "estrelas" })}`,
    review: "A sua avaliação",
    submit: "Enviar avaliação",
    submitting: "A enviar…",
    thanks: "Obrigado! A sua avaliação será publicada após verificação.",
    error: "Ocorreu um erro.",
  },
  notFound: {
    title: "Perdemos o rasto",
    body: "Procurámos por todo o lado, mas não encontrámos esta página. Pode ter sido movida ou a ligação conter um erro.",
    back: "Voltar à página inicial",
  },
  // Attribute pages (lib/attributePages.ts): chip label, crumb, H1, the
  // one-sentence answer (n of total places), title and description.
  attributes: {
    nonstop: {
      chip: "Urgências 24 horas",
      h1: (where: string) => `Veterinários 24 horas ${where}`,
      lead: (n: number, total: number) =>
        `${n} de ${total} clínicas veterinárias atendem urgências 24 horas por dia, 7 dias por semana. Ligue antes de se deslocar.`,
      metaTitle: (where: string) => `Veterinários de urgências ${where} – abertos 24 horas | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} ${plural("pt", n, { one: "clínica veterinária", other: "clínicas veterinárias" })} ${where} com atendimento permanente 24 horas por dia, 7 dias por semana: morada, telefone e como chegar.`,
    },
    saturday: {
      chip: "Aberto ao sábado",
      h1: (where: string) => `Veterinários abertos ao sábado ${where}`,
      lead: (n: number, total: number) => `${n} de ${total} clínicas veterinárias abrem ao sábado. Horários detalhados abaixo, verificados com cada espaço.`,
      metaTitle: (where: string) => `Veterinários abertos ao sábado ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} ${plural("pt", n, { one: "clínica veterinária", other: "clínicas veterinárias" })} ${where} ${plural("pt", n, { one: "aberta", other: "abertas" })} ao sábado, com horário, telefone e como chegar.`,
    },
    sunday: {
      chip: "Aberto ao domingo",
      h1: (where: string) => `Veterinários abertos ao domingo ${where}`,
      lead: (n: number, total: number) => `${n} de ${total} clínicas veterinárias abrem ao domingo. Horários detalhados abaixo, verificados com cada espaço.`,
      metaTitle: (where: string) => `Veterinários abertos ao domingo ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} ${plural("pt", n, { one: "clínica veterinária", other: "clínicas veterinárias" })} ${where} ${plural("pt", n, { one: "aberta", other: "abertas" })} ao domingo, com horário, telefone e como chegar.`,
    },
    exotics: {
      chip: "Animais exóticos",
      h1: (where: string) => `Veterinários de animais exóticos ${where}`,
      lead: (n: number, total: number) =>
        `${n} de ${total} clínicas veterinárias atendem animais exóticos (répteis, aves e roedores). Ligue com antecedência para confirmar a espécie.`,
      metaTitle: (where: string) => `Veterinários de animais exóticos ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} ${plural("pt", n, { one: "clínica veterinária", other: "clínicas veterinárias" })} ${where} que ${plural("pt", n, { one: "atende", other: "atendem" })} animais exóticos: répteis, aves e roedores. Horários, telefone e como chegar.`,
    },
    "home-visits": {
      chip: "Ao domicílio",
      h1: (where: string) => `Veterinários ao domicílio ${where}`,
      lead: (n: number, total: number) => `${n} de ${total} clínicas veterinárias disponibilizam consultas ao domicílio.`,
      metaTitle: (where: string) => `Veterinário ao domicílio ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} ${plural("pt", n, { one: "clínica veterinária", other: "clínicas veterinárias" })} ${where} com serviço ao domicílio: telefone, horários e serviços prestados.`,
    },
    english: {
      chip: "Atendimento em inglês",
      h1: (where: string) => `Veterinários com atendimento em inglês ${where}`,
      lead: (n: number, total: number) =>
        `${n} de ${total} clínicas veterinárias indicam no seu website que atendem em inglês. Confirme por telefone com antecedência.`,
      metaTitle: (where: string) => `Veterinários com atendimento em inglês ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${n} ${plural("pt", n, { one: "clínica veterinária", other: "clínicas veterinárias" })} ${where} que ${plural("pt", n, { one: "atende", other: "atendem" })} em inglês segundo o website oficial: horários, telefone e como chegar.`,
    },
  },
  // Price pages (lib/pricePages.ts): one per service and city, plus an
  // overview per category. Numbers come preformatted (money, dates).
  prices: {
    crumb: "Preços",
    overviewH1: (name: string, where: string) => `${name} ${where}`,
    overviewMetaTitle: (name: string, where: string) => `${name} ${where} | Pawenn`,
    overviewIntro:
      "Quanto custa cada serviço, comparado entre os espaços que publicam preços. A média apresentada é o valor mediano: metade dos locais cobra menos e a outra metade cobra mais.",
    overviewMetaDescription: (label: string, where: string, services: number) =>
      `${label} ${where}: preços de ${services} ${plural("pt", services, { one: "serviço", other: "serviços" })} comparados entre estabelecimentos, com o valor médio e o intervalo praticado. Recolhidos de tabelas públicas com datas.`,
    serviceH1: (service: string, where: string) => `${service} ${where}: preços`,
    serviceMetaTitle: (service: string, where: string, from: string) => `${service} ${where} – a partir de ${from} | Pawenn`,
    /** Meta description of a service price page: "<service> <where>:" + the answer, the cheapest place in between. */
    serviceMetaLead: (service: string, where: string) => `${service} ${where}:`,
    cheapest: (name: string, price: string) => `Mais acessível: ${name}, ${price}.`,
    answer: (from: string, to: string, median: string, places: number, date: string) =>
      `Varia entre ${from} e ${to}, média de ${median}. Comparámos ${places} ${plural("pt", places, { one: "espaço", other: "espaços" })}; valores verificados a ${date}.`,
    fewPlaces: (places: number) =>
      `De momento apenas ${places} ${plural("pt", places, { one: "espaço publica", other: "espaços publicam" })} este preço: insuficiente para estabelecer comparação.`,
    question: (service: string, where: string) => `Quanto custa ${service.toLowerCase()} ${where}?`,
    includes: "O que inclui o preço",
    place: "Espaço",
    price: "Preço",
    vsMarket: "Em comparação com a média da cidade",
    notComparedTitle: "Outros preços (não comparados)",
    notComparedIntro: "Preços parciais e valores por hora ou por quilómetro.",
    otherServices: "Outros preços",
    service: "Serviço",
    range: "Intervalo",
    median: "Média",
    places: "Espaços",
    seeAll: (label: string) => `Todos: ${label.toLowerCase()}`,
    linkFromListing: (where: string) => `Preços ${where}`,
    source: "tabela de preços",
  },
};
