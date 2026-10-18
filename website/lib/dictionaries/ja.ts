// Japanese UI strings (docs/playbooks/add-language.md, step 2). "{where}"
// arrives ready-made from in_city (e.g. "東京で", "東京").
// The language is switched on in step 3 (lib/locales.ts, lib/i18n.ts).
import type { Dictionary } from "./en";

const cap = (text: string): string => text;

const plural = (_lang: "ja", _n: number, forms: { one: string; other: string }): string =>
  forms.other;

export const ja: Dictionary = {
  nav: {
    browse: "探す",
    help: "ヘルプ",
    listBusiness: "Pawennに掲載する",
    findCare: "ペットケアを探す",
    browseServices: "探す",
    services: "サービス一覧",
    foodAndSupplies: "フード・サプリメント",
    comingSoon: "近日公開",
    howItWorks: "Pawennの使い方",
    listYourBusiness: "掲載を申し込む",
    openMenu: "メニューを開く",
    closeMenu: "メニューを閉じる",
    language: "言語",
    locating: "現在地を取得中…",
  },
  food: [
    { label: "ドッグフード", blurb: "愛犬の犬種や年齢に合わせた最適なフード" },
    { label: "キャットフード", blurb: "ウェット、ドライ、各種特別療法食" },
    { label: "サプリメント", blurb: "関節、皮膚・被毛、お腹の健康維持に" },
  ],
  footer: {
    tagline: (where: string | null) =>
      `身近で信頼できるペットサービス${where ? `（${where}）` : ""}のガイド。会員登録や広告は不要：連絡に必要な情報だけをシンプルにお届けします。`,
    sourced: "すべての掲載情報は出典元にリンクしています",
    services: "サービス一覧",
    about: "Pawennについて",
    legal: "特定商取引法に基づく表記・規約",
    howItWorks: "使い方",
    addBusiness: "掲載を申し込む",
    fixListing: "情報の修正を報告する",
    privacy: "プライバシーポリシー",
    terms: "利用規約",
    madeWithCare: (where: string | null) => `ペットへの思いやりを込めて${where ? `（${where}）` : ""}`,
    cities: "対応都市",
  },
  cityHub: {
    metaTitle: (where: string) => `ペットサービス ${where} – 動物病院、トリミング、ペットホテル | Pawenn`,
    metaDescription: (n: number, where: string) =>
      `${where}のペットサービス${n}件：動物病院、トリミングサロン、ペットホテル、しつけ教室、ペットショップ、ペットシッター。営業時間、料金、連絡先をワンタップで確認できます。`,
    h1Before: "ペットサービス",
    intro:
      "すべてのペットサービスを1ページに集約：動物病院、トリミング、ペットホテル、しつけ教室、ペットショップ、ペットシッター。各サービスのおすすめ施設を掲載しています。全件を見るには上のサービスを選択してください。",
  },
  animals: {
    any: "すべてのペット",
    choose: "どのペットですか？",
    dog: "犬",
    cat: "猫",
    "small-pet": "小動物",
    bird: "鳥類",
    fish: "観賞魚",
  } as Record<string, string>,
  animalSingular: {
    dog: "犬",
    cat: "猫",
    "small-pet": "小動物",
    bird: "鳥類",
    fish: "観賞魚",
  } as Record<string, string>,
  home: {
    /** `where` is null once the site covers several cities. */
    metaTitle: (where: string | null) => `ペットサービス${where ? ` ${where}` : ""} – 動物病院、トリミング、ペットホテル | Pawenn`,
    metaDescription: (where: string | null) =>
      `信頼できるペットサービス${where ? `（${where}）` : ""}を検索 – トリミング、動物病院、ペットホテル、しつけ教室など`,
    h1: "ペットに安心を、飼い主にゆとりを",
    subtitle:
      "動物病院、トリミングサロン、ペットホテル、しつけ教室の電話番号、営業時間、料金を掲載。すべての情報は出典と確認日を明記しています。",
    popular: "人気エリア・条件:",
    statCities: (n: number): string => plural("ja", n, { one: "都市", other: "都市" }),
    statPlaces: (n: number): string => plural("ja", n, { one: "掲載施設", other: "掲載施設" }),
    statCountries: (n: number): string => plural("ja", n, { one: "か国", other: "か国" }),
    statKinds: (n: number): string => plural("ja", n, { one: "サービス種類", other: "サービス種類" }),
    statPeople: "Pawennがサポートできる飼い主の皆さま",
    browseEyebrow: "サービスから探す",
    browseTitle: "愛するペットに、今必要なケアは？",
    browseBody: "6つのペットケアカテゴリ。各施設の情報と正確な出典元を掲載しています。",
    places: (n: number) => `${n}件`,
    placesInCities: (n: number, cities: number) =>
      `${cities}都市・${n}件の施設`,
    chooseCityTitle: (label: string) => `${label}: 都市を選択`,
    chooseCityIntro: "お住まいの都市を選ぶか、現在地から最も近い都市を検索します。",
    nearMe: "現在地から近い順",
    exploreEyebrow: "エリアから探す",
    exploreTitle: (city: string) => `${city}のエリア別施設`,
    exploreBody: "エリア（区・地域）をタップして近くの施設をチェック。円が大きいほど多くの施設が掲載されています。",
    partnersEyebrow: "パートナー",
    partnersTitle: "注目のパートナー施設",
    partnersBody: "スポンサー掲載：常に明示され、通常の検索順位と混同されることはありません。",
    howEyebrow: "Pawennの使い方",
    howTitle: "「サロンに行きたい」から電話連絡まで、わずか1分",
    steps: [
      { title: "必要なケアを選ぶ", body: "ペットの種類、サービス、エリアを選ぶか、カテゴリ一覧から探します。" },
      {
        title: "安心して比較する",
        body: "すべての掲載情報は出典元にリンク。スポンサー掲載は明確に区別されます。",
      },
      {
        title: "直接連絡する",
        body: "ワンタップで電話発信、公式サイト閲覧、ルート確認が可能。会員登録や予約手数料は一切かかりません。",
      },
    ],
    howLink: "掲載情報の確認・検証方法について",
    careEyebrow: "ペットケアのヒント",
    careTitle: "クイズで確認！ペットの豆知識",
    careBody: "よくある誤解や健康管理のコツを1分で学べるクイズです。",
    tips: [
      {
        title: "爪切りは3〜4週間に1回が目安",
        body: "爪が伸びすぎると歩行時の関節に負担がかかり、引っ掛けて折れる原因になります。数週間ごとのこまめなケアで快適に過ごせます。",
      },
      {
        title: "猫に爪とぎが必要な理由",
        body: "家具へのいたずらではなく、筋肉のストレッチ、古くなった爪の層の除去、縄張りのマーキングという本能的な行動です。専用の爪とぎを用意してあげましょう。",
      },
      {
        title: "動物病院へ行くべきサイン",
        items: [
          "食事や飲水量が普段と比べて極端に増減している",
          "足を引きずっている、段差を飛び越えるのを嫌がる",
          "元気がなく、普段と異なる状態が2日以上続いている",
        ],
      },
      {
        title: "短毛種は週に1回、長毛種は毎日のブラッシング",
        body: "定期的なブラッシングは毛玉ができるのを防ぎ、皮膚の異変にも早く気づけます。毛玉がフェルト状になる前にケアするのが一番の節約です。",
      },
    ] as { title: string; body?: string; items?: string[] }[],
    ctaTitle: (where: string | null) => `ペット関連の事業を運営されていますか${where ? `（${where}）` : ""}？`,
    ctaBody: "サロン、クリニック、ペットホテルの掲載申請や、掲載情報の更新・修正をお気軽にお知らせください。",
    ctaButton: "施設の掲載・修正を申し込む",
  },
  search: {
    pet: "ペット",
    service: "サービス",
    where: "エリア",
    petPlaceholder: "どのペット？",
    servicePlaceholder: "何をお探しですか？",
    all: (city: string) => `${city}全域`,
    search: "検索",
    showResults: "検索結果を表示",
    stepPet: "1 · ペットの種類",
    stepService: "2 · サービス",
    stepWhere: "3 · エリア",
    popular: "人気",
    close: "閉じる",
    nearMe: "現在地周辺",
    nearYou: "周辺の施設",
    locatingYou: "現在地を取得中…",
    geoDenied: "位置情報を取得できませんでした。都市名を入力してください。",
    cityPlaceholder: "都市名",
    cityLabel: "都市",
    cityNotCovered: (typed: string, cities: string) => `現在「${typed}」は対応エリア外です。Pawennの対応都市: ${cities}。`,
    geoFar: (city: string) => `現在地周辺には対応施設がありません。都市名（例: ${city}）を入力してください。`,
    dialogTitle: "ペットサービスを探す",
    dialogBody: "ペットの種類とご希望のサービスを選択すると、近くの施設が表示されます。",
  },
  explorer: {
    district: (city: string) => `${city}のエリア`,
    placesListed: (n: number): string => `${n}件掲載`,
    tabs: "エリア一覧",
  },
  quiz: {
    title: "ホント？それともウソ？",
    question: (i: number, n: number) => `第${i}問 / 全${n}問`,
    myth: "ウソ",
    fact: "ホント",
    correct: "正解！",
    notQuite: "おしい！",
    itsA: (isFact: boolean) => `これは「${isFact ? "ホント（事実）" : "ウソ（誤解）"}」です。`,
    next: "次の問題へ",
    seeScore: "結果を見る",
    playAgain: "もう一度挑戦する",
    perfect: "全問正解！ペットについてとても詳しいですね。",
    good: "素晴らしい！しっかりとした知識をお持ちです。",
    meh: "意外な発見がありましたね。ぜひ今日から役立ててください！",
    statements: [
      {
        claim: "鼻が温かく乾いている犬は病気である。",
        isFact: false,
        explanation:
          "健康な犬でも、睡眠中や乾燥した室内など、1日の中で鼻の温度や湿り気は変化します。食欲や元気、行動パターンの変化の方がより確かな健康のバロメーターです。",
      },
      {
        claim: "チョコレートは犬にとって有害である。",
        isFact: true,
        explanation:
          "チョコレートに含まれるテオブロミンは、犬の体内での分解・排泄が非常に遅く、中毒を引き起こします。特にカカオ含有量の高いダークチョコレートや製菓用は危険です。",
      },
      {
        claim: "牛乳は成猫にとって良いご褒美になる。",
        isFact: false,
        explanation:
          "多くの成猫は乳糖不耐症であり、牛乳を飲むと下痢や腹痛を起こすことがあります。水分補給には新鮮な水を与えるのが最適です。",
      },
      {
        claim: "ぶどうやレーズンは犬にとって危険である。",
        isFact: true,
        explanation:
          "ぶどうやレーズンは犬に急性腎不全を引き起こす危険性があり、安全とされる摂取量はわかっていません。絶対に手の届く場所に置かないでください。",
      },
      {
        claim: "犬がしっぽを振っているときは、常に喜んでいる。",
        isFact: false,
        explanation:
          "しっぽを振るのは興奮や注視のサインであり、喜びだけでなく緊張や警戒を表すこともあります。しっぽだけでなく全身のボディランゲージを見ることが大切です。",
      },
      {
        claim: "猫は必ず足から着地するので、ベランダからの落下も安全である。",
        isFact: false,
        explanation:
          "猫には空中立ち直り反射がありますが、窓やベランダからの落下（高所落下症候群）で毎年多くの猫が重傷を負っています。ネットや柵で落下防止対策を必ず行いましょう。",
      },
      {
        claim: "完全室内飼いの猫でも予防接種を受けるメリットがある。",
        isFact: true,
        explanation:
          "一部のウイルスは飼い主の靴や衣服に付着して室内に持ち込まれることがあり、動物病院への通院やペットホテル利用時にも感染リスクがあります。推奨されるワクチンを獣医師に相談しましょう。",
      },
    ],
  },
  listing: {
    home: "ホーム",
    browseCount: (count: number, what: string, where: string) =>
      `${where}の${what} ${count}件（全施設に出典リンク付き）`,
    listed: "件掲載",
    verified: "件確認済み",
    priceRange: "料金帯",
    districts: "エリア",
    from: "〜",
    otherServices: "その他のサービス",
    filterDistrict: "エリアで絞り込む",
    allOf: (city: string) => `${city}全域`,
    results: (n: number) => `${n}件`,
    seeAll: (label: string, n: number) => `すべての${label}（${n}件）`,
    showAll: (n: number) => `すべて表示（${n}件）`,
    pagination: { label: "ページ", page: (n: number) => `${n}ページ目`, prev: "前のページ", next: "次のページ", showing: (from: number, to: number, total: number) => `${total}件中 ${from}〜${to}件を表示` },
    fairTurn: "すべての施設に公平な露出機会を提供するため、表示順は毎日更新されます",
    nearest: "現在地から近い順",
    sortLabel: "並び替え",
    sortRecommended: "おすすめ順",
    sortNearest: "近い順",
    sortRating: "評価が高い順",
    sortReviews: "クチコミが多い順",
    ratingFirst: "評価が高い順",
    reviewsFirst: "クチコミが多い順",
    filterRating: "Google評価で絞り込み",
    ratingAny: "すべての評価",
    hiddenUnrated: (n: number) => `評価なしの${n}件を非表示`,
    openNowFilter: "現在営業中",
    allServices: "すべてのサービス",
    picker: { service: "サービス", where: "エリア", filters: "絞り込み", searchCity: "都市を検索", done: "完了", rating: "評価" },
    geoOff: "位置情報がオフのため、全施設を表示しています。",
    hiddenNoHours: (n: number) => `営業時間不明の${n}件を非表示`,
    kmAway: (km: string) => `約${km}km`,
    goodToKnow: "利用前の確認ポイント",
    faqTitle: "よくある質問",
    byDistrict: "エリア別に探す",
    missingTitle: "掲載されていない施設をご存知ですか？",
    missingBody: "未掲載の施設や、古い情報を見つけた際はお知らせください。",
    missingLink: "掲載・修正を申し込む",
    emptyTitle: "該当する施設が見つかりませんでした",
    emptyBody: "指定された条件に一致する施設がありません。エリアやペットの種類を変えて再度お試しください。",
    reset: "条件をリセット",
    metaTitle: (label: string, where: string) => `${where}の${label} | Pawenn`,
    metaDescription: (count: number, what: string, where: string) =>
      `${where}の${what} ${count}件を比較。対応エリア、受け入れペット、電話発信、公式サイト、ルート案内までワンタップで確認できます。`,
    faqCount: (pluralStr: string, where: string) => `${where}には${pluralStr}が何件ありますか？`,
    faqCountAnswer: (n: number, singular: string, where: string) =>
      `現在、${where}には${n}件の${singular}が掲載されています。`,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- some languages need the plural label here
    faqPrice: (singular: string, where: string, _pluralLabel: string) => `${where}での${singular}の料金相場はどのくらいですか？`,
    faqPriceAnswer: (range: string) => `公開されている料金表に基づくと、掲載施設の料金帯は${range}となっています。`,
    faqVerified: (pluralStr: string, where: string) => `${where}で情報確認済みの${pluralStr}はどれですか？`,
    faqVerifiedAnswer: (v: number, n: number, pct: number) =>
      `全${n}件中${v}件（${pct}%）の施設情報がスタッフにより手動確認されています。`,
  },
  card: {
    priceLevel: (tier: number) => `価格帯レベル ${tier} / 5`,
    /** Against the city market price (lib/priceMarket.ts): 0 = within the market band. */
    vsMarket: (pct: number, marketBand: boolean): string =>
      marketBand ? "相場並み" : pct < 0 ? "相場より安い" : "相場より高め",
    vsMarketHint: "同都市内の同一サービス平均価格との比較",
    /** Card of a place with no published price (not for pet shops). */
    priceOnRequest: "料金要問合せ",
  },
  rating: {
    countGoogle: (count: string) => `${count}件 · Google`,
    aria: (value: string, count: number) => `5点満点中${value}点（Googleクチコミ${count}件に基づく）`,
  },
  insights: {
    title: "利用者のクチコミ・評判",
    summary: (n: number, period: string) => `Googleクチコミ${n}件のPawenn要約（${period}）`,
    allOnGoogle: "Googleで全クチコミを見る",
    disclosure: "Googleマップ上の公開クチコミを要約したものです。Pawennが独自に真偽を保証するものではありません。",
    sentiment: { positive: "概ね好評", mixed: "賛否両論", negative: "改善要望あり" },
    mentions: (m: number, n: number) => `${n}件中${m}件のクチコミで言及`,
    faqTitle: "飼い主がよく気にする疑問",
    shortNote: "この施設にはまだクチコミ要約がありません。評価点や詳細なレビューはGoogleでご確認いただけます。",
  },
  vetNow: {
    button: "今すぐ受診できる動物病院",
    buttonHint: "現在地周辺で今受診可能な動物病院",
    locating: "現在地を取得中…",
    callFirst: "受診前に必ず電話で状況を説明し、今すぐ受け入れ可能か確認してください。",
    noneOpen: "現在診療中の動物病院は見つかりませんでした。次に開院予定の病院:",
    opensToday: (time: string) => `本日${time}に開院`,
    opensTomorrow: (time: string) => `明日${time}に開院`,
    opensLater: (date: string, time: string) => `${date} ${time}に開院`,
    nonstopTitle: "24時間診療対応",
  },
  /** Analytics consent banner (GA4 runs only after "allow"). */
  consent: {
    text: "サイトの利便性向上のため、Google AnalyticsおよびMicrosoft Clarity（匿名の画面操作分析を含む）による解析用Cookieを使用してもよろしいですか？同意いただいた場合のみ有効になります。",
    allow: "同意する",
    decline: "拒絶する",
    settings: "Cookie設定",
  },
  actions: { call: "電話する", website: "公式サイト", route: "道順を見る" },
  badges: { verified: (date: string) => `${date}確認済み`, partner: "提携施設" },
  business: {
    metaTitle: (name: string, label: string, where: string) => `${name} - ${label}${where ? ` ${where}` : ""}`,
    metaDescription: (name: string, where: string) =>
      `${name}${where ? `（${where}）` : ""}: 住所、連絡先、道順案内。`,
    /** After the place's own short description (SEO audit T11). */
    metaDescriptionTail: (hasPrices: boolean) =>
      `営業時間${hasPrices ? "・料金表" : ""}、電話番号、アクセス情報。`,
    about: "施設概要",
    goodToKnow: "利用前の確認ポイント",
    goodToKnowNote: "各施設が公式サイト等で公開している情報に基づいています。",
    faqTitle: "来院・利用前のよくある質問",
    cityPricesTitle: (where: string) => `${where}の平均料金`,
    cityPricesIntro: "この施設は料金表を公開していません。以下は都市全体の平均相場です:",
    welcomes: "受入対象ペット",
    specialties: "専門診療科目",
    openingHours: "営業時間・診療時間",
    prices: "料金一覧",
    standard: "通常料金",
    sizes: { MINI: "超小型", SMALL: "小型", MEDIUM: "中型", LARGE: "大型", XL: "超大型" } as Record<string, string>,
    location: "所在地・アクセス",
    openInMaps: "Googleマップで開く",
    mapTitle: (name: string) => `${name}の所在地マップ`,
    reviews: "クチコミ",
    reviewsCount: (n: number) => `（${n}件）`,
    fromN: (n: number) => `${n}件中`,
    noReviews: "まだクチコミがありません。この施設を利用されたことがありますか？最初の感想をお寄せください。",
    leaveReview: "クチコミを投稿する",
    getInTouch: "お問い合わせ・連絡先",
    phone: "電話番号",
    website: "公式サイト",
    email: "メールアドレス",
    address: "住所",
    noFees: "直接施設へご連絡いただけます。Pawennからの仲介手数料は一切不要です。",
    keepExploring: "他の施設を探す",
    moreNearby: (label: string) => `周辺の${label}をもっと見る`,
    seeAll: "すべて見る",
    infoVerified: (date: string) => `情報確認日: ${date}`,
    source: "出典:",
    reportIssue: "情報の誤りを報告する",
    days: { mo: "月曜日", tu: "火曜日", we: "水曜日", th: "木曜日", fr: "金曜日", sa: "土曜日", su: "日曜日" } as Record<string, string>,
    openNow: "営業中",
    closedNow: "営業時間外",
    closedDay: "休業日",
    allDay: "24時間営業",
    sections: { label: "ページ内メニュー", contact: "連絡先", prices: "料金", about: "概要", reviews: "クチコミ", location: "アクセス" },
    showMore: "もっと見る",
    showLess: "閉じる",
    byAppointment: "完全予約制",
    hoursChecked: (date: string) => `営業時間確認日: ${date}`,
    nonstop: "24時間年中無休",
    emergency: "夜間・救急対応",
    // "Salón de peluquería en " + <district> + ", Madrid"
    placeIn: { before: (singular: string) => `${cap(singular)} - ` },
    homeVisits: "往診・出張対応",
    languages: (list: string) => `対応可能言語: ${list}`,
    instagram: "Instagram",
    facebook: "Facebook",
    cityAverage: (price: string) => `都市平均: ${price}`,
    lessBy: (amount: string) => `${amount}お得`,
    moreBy: (amount: string) => `${amount}高め`,
    allPrices: (n: number) => `全料金を表示（${n}件）`,
    priceFrom: (price: string) => `${price}〜`,
    weightUpTo: (kg: string) => `${kg}kgまで`,
    weightOver: (kg: string) => `${kg}kg超`,
    weightRange: (from: string, to: string) => `${from}〜${to}kg`,
    pricesChecked: (date: string) => `料金確認日: ${date}`,
    priceList: "料金表",
    perUnit: { per_hour: "/ 時間", per_km: "/ km" } as Record<string, string>,
    notCompared: "他施設との比較対象外",
    pricesDisclaimer: "記載料金は各施設が上記日付時点で公開しているものです。変更される場合がありますので、ご利用前に必ず直接ご確認ください。",
  },
  reviewForm: {
    name: "お名前・ニックネーム",
    rating: "評価",
    stars: (n: number) => `星${n}つ`,
    review: "クチコミ内容",
    submit: "クチコミを送信する",
    submitting: "送信中...",
    thanks: "ありがとうございます。確認後に掲載されます。",
    error: "送信中にエラーが発生しました。",
  },
  notFound: {
    title: "ページが見つかりませんでした",
    body: "お探しのページは移動したか、URLが正しくない可能性があります。",
    back: "ホームに戻る",
  },
  // Attribute pages (lib/attributePages.ts): chip label, crumb, H1, the
  // one-sentence answer (n of total places), title and description.
  attributes: {
    nonstop: {
      chip: "24時間対応",
      h1: (where: string) => `${where}の24時間診療対応の動物病院`,
      lead: (n: number, total: number) =>
        `掲載${total}施設中${n}件が24時間体制で救急・夜間診療を受け付けています。受診前に必ず電話でご連絡ください。`,
      metaTitle: (where: string) => `夜間救急・24時間対応の動物病院 ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${where}で24時間診療・夜間救急に対応している動物病院${n}件の住所、電話番号、アクセス情報。`,
    },
    saturday: {
      chip: "土曜診療あり",
      h1: (where: string) => `${where}の土曜日診療対応の動物病院`,
      lead: (n: number, total: number) => `${n}件（全${total}施設中）の動物病院が土曜日に診療を行っています。詳しい診療時間は各クリニックの情報をご確認ください。`,
      metaTitle: (where: string) => `土曜日診療対応の動物病院 ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${where}で土曜日に診察を行っている動物病院${n}件：診療時間、電話番号、アクセス情報。`,
    },
    sunday: {
      chip: "日曜診療あり",
      h1: (where: string) => `${where}の日曜日診療対応の動物病院`,
      lead: (n: number, total: number) => `${n}件（全${total}施設中）の動物病院が日曜日に診療を行っています。詳しい診療時間は各クリニックの情報をご確認ください。`,
      metaTitle: (where: string) => `日曜日診療対応の動物病院 ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${where}で日曜日に診察を行っている動物病院${n}件：診療時間、電話番号、アクセス情報。`,
    },
    exotics: {
      chip: "エキゾチックアニマル",
      h1: (where: string) => `${where}のエキゾチックアニマル対応の動物病院`,
      lead: (n: number, total: number) =>
        `掲載${total}施設中${n}件がエキゾチックアニマル（うさぎ、鳥類、爬虫類、フェレット等）の診療に対応しています。受診前に対象動物の受け入れ可否をご確認ください。`,
      metaTitle: (where: string) => `エキゾチックアニマル対応の動物病院 ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${where}でうさぎ・小動物・爬虫類・鳥類を診療可能な動物病院${n}件：診療時間、電話番号、アクセス情報。`,
    },
    "home-visits": {
      chip: "往診対応",
      h1: (where: string) => `${where}の往診対応の動物病院`,
      lead: (n: number, total: number) => `掲載${total}施設中${n}件が自宅への往診診療に対応しています。`,
      metaTitle: (where: string) => `往診対応の動物病院 ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${where}で自宅への往診に対応している動物病院${n}件：電話番号、対応エリア、診療内容。`,
    },
    english: {
      chip: "英語対応あり",
      h1: (where: string) => `${where}の英語対応可能な動物病院`,
      lead: (n: number, total: number) =>
        `掲載${total}施設中${n}件が公式サイトにて英語対応可能と案内しています。当日の担当獣医師の勤務状況を事前にご確認ください。`,
      metaTitle: (where: string) => `英語対応可能な動物病院 ${where} | Pawenn`,
      metaDescription: (n: number, where: string) =>
        `${where}で英語での診察に対応している動物病院${n}件：診療時間、電話番号、アクセス情報。`,
    },
  },
  // Price pages (lib/pricePages.ts): one per service and city, plus an
  // overview per category. Numbers come preformatted (money, dates).
  prices: {
    crumb: "料金一覧",
    overviewH1: (name: string, where: string) => `${name} ${where}`,
    overviewMetaTitle: (name: string, where: string) => `${name} ${where} | Pawenn`,
    overviewIntro:
      "料金表を公開している掲載施設をもとに、各サービスの費用相場を比較。中央値はちょうど中間となる価格で、半数の施設がそれ以下、半数の施設がそれ以上の設定となっています。",
    overviewMetaDescription: (label: string, where: string, services: number) =>
      `${label} ${where}: 公開料金表から${services}種類のサービス料金を比較。平均相場や価格帯、確認日を明記しています。`,
    serviceH1: (service: string, where: string) => `${service} ${where}: 料金相場`,
    serviceMetaTitle: (service: string, where: string, from: string) => `${service} ${where} – 最安${from}〜 | Pawenn`,
    /** Meta description of a service price page: "<service> <where>:" + the answer, the cheapest place in between. */
    serviceMetaLead: (service: string, where: string) => `${service} ${where}:`,
    cheapest: (name: string, price: string) => `最安施設: ${name}（${price}）`,
    answer: (from: string, to: string, median: string, places: number, date: string) =>
      `費用相場は${from}〜${to}、平均（中央値）は${median}です。掲載${places}施設の料金表（${date}確認時点）を比較。`,
    fewPlaces: (places: number) =>
      `現在料金を公開している施設は${places}件のみのため、詳細な比較データは集計中です。`,
    question: (service: string, where: string) => `${where}での${service}の費用はいくらですか？`,
    includes: "料金に含まれる内容",
    place: "施設名",
    price: "料金",
    vsMarket: "都市平均との比較",
    notComparedTitle: "その他の料金（比較対象外）",
    notComparedIntro: "部分的な処置や、時間制・距離制などの追加料金。",
    otherServices: "その他の料金",
    service: "サービス内容",
    range: "料金帯",
    median: "平均（中央値）",
    places: "施設数",
    seeAll: (label: string) => `すべての${label}`,
    linkFromListing: (where: string) => `${where}の料金相場`,
    source: "料金表",
  },
};
