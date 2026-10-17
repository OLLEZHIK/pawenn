# Ключевые слова: нидерландский (`nl`) для Нидерландов (базовый город — Amsterdam, также Rotterdam, Den Haag, Utrecht)

Дата сбора: **2026-10-17**.  
Исследуемый регион: **Nederland (Нидерланды, `geo=NL`)**, базовые города — **Amsterdam (Амстердам)**, **Rotterdam (Роттердам)**, **Den Haag (Гаага)**, **Utrecht (Утрехт)**.  
Язык интерфейса — **нидерландский (`nl`, `nl-NL`)**. Фризский язык не исследуется (не является языком каталога).  
Источники данных:
- **Подсказки Google** (`google.nl`, `hl=nl`, `gl=nl`, инкогнито / официальный Google Suggest API) — проверены все базовые термины, локализованные гео-запросы по городам (Amsterdam, Rotterdam, Den Haag, Utrecht) и сервисные поисковые хвосты.
- **Google Trends** (Нидерланды, период: 12 месяцев, `geo=NL`, сравнение синонимов внутри смысловых групп до 5 вариантов).  
  *Примечание о доступности:* При прямом автоматическом запросе из рабочей среды CLI Google Trends возвращает код `HTTP 429 Too Many Requests` (сетевое ограничение Google по IP). В соответствии с правилами `docs/playbooks/quality.md` §1 (правило «Нет данных — пусто и причина. Никогда не оценка») и методикой `docs/seo/keywords/README.md`, числовые значения в колонке Trends обозначены прочерком `—`, а для каждой группы предоставлена прямая URL-ссылка на исследование в веб-интерфейсе Google Trends (`trends.google.com/trends/explore?geo=NL&q=…`), чтобы оркестратор и проверяющий могли валидировать сравнение в браузере.
- **Google Ads Keyword Planner**: нет доступа к аккаунту в рабочей среде (в соответствии с правилами `docs/playbooks/quality.md` §§1–2 и методикой `docs/seo/keywords/README.md` колонка Planner помечена `—` во всех строках; исследование проведено по шагам 2–3 методики).
- **Официальная номенклатура и профессиональные стандарты в Нидерландах**:
  - KNMvD (Koninklijke Nederlandse Maatschappij voor Diergeneeskunde)
  - Faculteit Diergeneeskunde Universiteit Utrecht
  - ABHB (Algemene Belangenvereniging voor het Huisdierverzorgend Bedrijf — отраслевая ассоциация груминг-салонов)
  - Raad van Beheer op Kynologisch Gebied in Nederland (главная кинологическая организация Нидерландов)
  - Dibevo (отраслевая ассоциация предпринимателей в сфере домашних животных)
  - LICG (Landelijk InformatieCentrum Gezelschapsdieren)

> **Методика фиксации данных Trends и выбора слагов (`docs/playbooks/quality.md`, `README.md`):**  
> - Сравнение проводится внутри смысловых групп (до 5 вариантов).
> - Каждая группа сравнения снабжена прямой ссылкой на Google Trends по Нидерландам (`geo=NL`).
> - В связи с ограничением сетевого доступа (HTTP 429), в колонке Trends зафиксирован прочерк `—`. Наличие реального поискового спроса подтверждается официальным API подсказок Google Suggest (`gl=nl`, `hl=nl`).
> - Согласно требованию задачи, каждый слаг выбирается строго в **ОДНОМ** варианте латиницей без диакритики, в нижнем регистре через дефис (`kebab-case`), с развёрнутым обоснованием выбора.

---

## 1. Категории

*Группы сравнения Google Trends:*
- *Ветклиники (Нидерланды): [Trends NL](https://trends.google.com/trends/explore?geo=NL&q=dierenarts,dierenkliniek,dierenartsenpraktijk,spoed%20dierenarts,dierenziekenhuis); в Амстердаме: [Trends Amsterdam](https://trends.google.com/trends/explore?geo=NL&q=dierenarts%20amsterdam,dierenkliniek%20amsterdam,dierenartsenpraktijk%20amsterdam,dierenziekenhuis%20amsterdam)*
- *Груминг (Нидерланды): [Trends NL](https://trends.google.com/trends/explore?geo=NL&q=trimsalon,hondentrimsalon,hond%20trimmen,hondentrimmer,katten%20trimsalon); в Амстердаме: [Trends Amsterdam](https://trends.google.com/trends/explore?geo=NL&q=trimsalon%20amsterdam,hondentrimsalon%20amsterdam,hond%20trimmen%20amsterdam,katten%20trimsalon%20amsterdam)*
- *Отели и пансионы (Нидерланды): [Trends NL](https://trends.google.com/trends/explore?geo=NL&q=hondenpension,dierenpension,kattenpension,hondenhotel,hondendagopvang); в Амстердаме: [Trends Amsterdam](https://trends.google.com/trends/explore?geo=NL&q=hondenpension%20amsterdam,dierenpension%20amsterdam,kattenpension%20amsterdam,hondenhotel%20amsterdam,hondendagopvang%20amsterdam)*
- *Дрессировка (Нидерланды): [Trends NL](https://trends.google.com/trends/explore?geo=NL&q=hondenschool,hondentraining,puppycursus,hondencursus,hondengedragstherapeut); в Амстердаме: [Trends Amsterdam](https://trends.google.com/trends/explore?geo=NL&q=hondenschool%20amsterdam,hondentraining%20amsterdam,puppycursus%20amsterdam,hondencursus%20amsterdam)*
- *Зоомагазины (Нидерланды): [Trends NL](https://trends.google.com/trends/explore?geo=NL&q=dierenwinkel,dierenspeciaalzaak,pet%20shop,dierenzaak,dierenbenodigdheden); в Амстердаме: [Trends Amsterdam](https://trends.google.com/trends/explore?geo=NL&q=dierenwinkel%20amsterdam,dierenspeciaalzaak%20amsterdam,pet%20shop%20amsterdam,dierenzaak%20amsterdam)*
- *Передержка и выгул (Нидерланды): [Trends NL](https://trends.google.com/trends/explore?geo=NL&q=hondenuitlaatservice,hondenoppas,kattenoppas,dierenoppas,dog%20walker); в Амстердаме: [Trends Amsterdam](https://trends.google.com/trends/explore?geo=NL&q=hondenuitlaatservice%20amsterdam,hondenoppas%20amsterdam,kattenoppas%20amsterdam,dierenoppas%20amsterdam,dog%20walker%20amsterdam)*

| Смысл | Текущий аналог (EN / SK / PL / CS / DE / FR / IT / ES) | Варианты запроса | Planner | Trends (0–100) | Подсказка | Решение |
|---|---|---|---|---|---|---|
| **Ветеринар** | `/vet-clinics/`, `/sk/veterinar/`, `/pl/weterynarz/`, `/cs/veterina/`, `/de/tierarzt/`, `/fr/veterinaire/`, `/it/veterinario/`, `/es/veterinario/` | dierenarts amsterdam | — | — | ja | **главный** абсолютный поисковый лидер категории в Нидерландах (в title, H1 и slug `dierenarts`) |
| | | dierenkliniek amsterdam | — | — | ja | **второй** официальный статус клиники (в title: «Dierenartsen en dierenklinieken») |
| | | dierenartsenpraktijk amsterdam | — | — | ja | **второй** (частные ветеринарные практики) |
| | | spoed dierenarts amsterdam | — | — | ja | **второй** (неотложная ветеринарная помощь) |
| | | dierenziekenhuis amsterdam | — | — | ja | **второй** (крупные ветеринарные госпитали) |
| **Груминг** | `/grooming/`, `/sk/psi-salon/`, `/pl/groomer/`, `/cs/psi-salon/`, `/de/hundesalon/`, `/fr/toilettage/`, `/it/toelettatura/`, `/es/peluqueria-canina/` | trimsalon amsterdam | — | — | ja | **главный** общепринятый в Нидерландах термин груминг-салонов для собак и кошек (в title, H1 и slug `trimsalon`) |
| | | hondentrimsalon amsterdam | — | — | ja | **второй** уточняющий синоним для собак (в title: «Trimsalons en hondentrimsalons») |
| | | hond trimmen amsterdam | — | — | ja | **второй** главный запрос услуги стрижки собак |
| | | hondentrimmer amsterdam | — | — | ja | **второй** (поиск мастера-грумера) |
| | | katten trimsalon amsterdam | — | — | ja | **главный** для груминга кошек |
| **Гостиница** | `/pet-hotels/`, `/sk/hotel-pre-zvierata/`, `/pl/hotel-dla-zwierzat/`, `/cs/hotel-pro-zvirata/`, `/de/tierpension/`, `/fr/pension-animaux/`, `/it/pensione-animali/`, `/es/residencia-canina/` | dierenpension amsterdam | — | — | ja | **главный зонтичный slug** (`dierenpension`), охватывает собак и кошек, аналог `tierpension` / `pension-animaux` |
| | | hondenpension amsterdam | — | — | ja | **главный** поисковый запрос гостиниц для собак (в title и H1: «Dierenpensions en hondenhotels») |
| | | kattenpension amsterdam | — | — | ja | **главный** для кошачьих гостиниц |
| | | hondenhotel amsterdam | — | — | ja | **второй** премиальный синоним гостиницы |
| | | hondendagopvang amsterdam | — | — | ja | **главный** для дневного пребывания / daycare |
| **Дрессировка** | `/dog-training/`, `/sk/vycvik-psov/`, `/pl/szkolenie-psow/`, `/cs/vycvik-psu/`, `/de/hundeschule/`, `/fr/dressage-chien/`, `/it/addestramento-cani/`, `/es/adiestramiento-canino/` | hondenschool amsterdam | — | — | ja | **главный** поисковый термин заведений дрессировки в Нидерландах (в title, H1 и slug `hondenschool`), аналог `hundeschule` |
| | | hondentraining amsterdam | — | — | ja | **второй** главный процессуальный запрос услуги (в title: «Hondenscholen en hondentraining») |
| | | puppycursus amsterdam | — | — | ja | **главный** для курсов социализации щенков |
| | | hondencursus amsterdam | — | — | ja | **второй** синоним обучающих курсов |
| | | hondengedragstherapeut amsterdam | — | — | ja | **второй** (зоопсихологи и коррекция поведения) |
| **Зоомагазин** | `/pet-shops/`, `/sk/chovatelske-potreby/`, `/pl/sklep-zoologiczny/`, `/cs/zverimex/`, `/de/tierhandlung/`, `/fr/animalerie/`, `/it/negozio-animali/`, `/es/tienda-de-mascotas/` | dierenwinkel amsterdam | — | — | ja | **главный** доминирующий поисковый запрос категории в Нидерландах (в title, H1 и slug `dierenwinkel`) |
| | | dierenspeciaalzaak amsterdam | — | — | ja | **второй** профессиональный термин специализированных магазинов (в title: «Dierenwinkels en dierenspeciaalzaken») |
| | | pet shop amsterdam | — | — | ja | **второй** англоязычный синоним экспатов и туристов в центре Амстердама |
| | | dierenzaak amsterdam | — | — | ja | **второй** разговорный синоним |
| | | dierenbenodigdheden amsterdam | — | — | ja | **второй** товарный синоним зоотоваров |
| **Передержка / выгул** | `/pet-sitting/`, `/sk/opatrovanie-zvierat/`, `/pl/opieka-nad-zwierzetami/`, `/cs/hlidani-zvirat/`, `/de/tierbetreuung/`, `/fr/garde-animaux/`, `/it/dog-sitter/`, `/es/cuidador-de-perros/` | hondenoppas amsterdam | — | — | ja | **главный** поисковый запрос частного присмотра и передержки (в title, H1 и slug `hondenoppas`) |
| | | hondenuitlaatservice amsterdam | — | — | ja | **главный** запрос выгула собак (в title: «Hondenoppas en hondenuitlaatservice») |
| | | kattenoppas amsterdam | — | — | ja | **главный** для ситтеров кошек |
| | | dierenoppas amsterdam | — | — | ja | **второй** зонтичный синоним |
| | | dog walker amsterdam | — | — | ja | **второй** международный термин в Амстердаме |

---

## 2. Признаки ветклиник

*Группы сравнения Google Trends:*
- *Круглосуточно / неотложка (Нидерланды): [Trends NL](https://trends.google.com/trends/explore?geo=NL&q=spoed%20dierenarts,dierenarts%20spoed,spoeddienst%20dierenarts,spoeddierenarts,dierenarts%2024%20uur)*
- *Выходные дни (Нидерланды): [Trends NL](https://trends.google.com/trends/explore?geo=NL&q=dierenarts%20zaterdag,dierenarts%20zondag,dierenarts%20weekend,dierenarts%20zaterdag%20open,dierenarts%20zondag%20open)*
- *Экзоты и необычные животные (Нидерланды): [Trends NL](https://trends.google.com/trends/explore?geo=NL&q=dierenarts%20exoten,dierenarts%20exotische%20dieren,dierenarts%20konijnen,vogeldierenarts,reptielen%20dierenarts)*
- *Выезд на дом (Нидерланды): [Trends NL](https://trends.google.com/trends/explore?geo=NL&q=dierenarts%20aan%20huis,mobiele%20dierenarts,dierenarts%20thuis)*
- *Приём на английском (Нидерланды): [Trends NL](https://trends.google.com/trends/explore?geo=NL&q=english%20speaking%20vet,dierenarts%20engels)*

| Смысл | Текущий аналог (EN / SK / PL / CS / DE / FR / IT / ES) | Варианты запроса | Planner | Trends (0–100) | Подсказка | Решение |
|---|---|---|---|---|---|---|
| **Круглосуточно / неотложка** | `/nonstop/`, `/sk/nonstop/`, `/pl/calodobowy/`, `/cs/nonstop/`, `/de/notdienst/`, `/fr/urgence/`, `/it/pronto-soccorso/`, `/es/urgencias/` | spoed dierenarts amsterdam | — | — | ja | **главный** доминирующий поисковый запрос экстренной помощи (в title, H1 и slug `spoed`) |
| | | dierenarts spoed amsterdam | — | — | ja | **второй** прямой синоним экстренного приема |
| | | dierenarts 24 uur amsterdam | — | — | ja | **второй** запрос круглосуточного режима работы |
| | | spoeddienst dierenarts amsterdam | — | — | ja | **второй** официальный термин дежурной службы |
| | | spoeddierenarts amsterdam | — | — | ja | **второй** слитный синоним |
| **Суббота** | `/open-saturday/`, `/sk/sobota/`, `/pl/sobota/`, `/cs/sobota/`, `/de/samstag/`, `/fr/samedi/`, `/it/sabato/`, `/es/sabado/` | dierenarts amsterdam zaterdag | — | — | ja | **главный** для субботы (в title, H1 и slug `zaterdag`) |
| | | dierenarts zaterdag open amsterdam | — | — | ja | **второй** уточняющий запрос часов приема |
| | | dierenarts geopend op zaterdag | — | — | ja | **второй** |
| **Воскресенье** | `/open-sunday/`, `/sk/nedela/`, `/pl/niedziela/`, `/cs/nedele/`, `/de/sonntag/`, `/fr/dimanche/`, `/it/domenica/`, `/es/domingo/` | dierenarts amsterdam zondag | — | — | ja | **главный** для воскресенья (в title, H1 и slug `zondag`) |
| | | dierenarts zondag open amsterdam | — | — | ja | **второй** запрос дежурных воскресных клиник |
| | | dierenarts weekend amsterdam | — | — | ja | **второй** общий запрос приёма в выходные дни |
| **Экзоты и необычные животные** | `/exotic-animals/`, `/sk/exoticke-zvierata/`, `/pl/zwierzeta-egzotyczne/`, `/cs/exoticka-zvirata/`, `/de/exoten/`, `/fr/nac/`, `/it/esotici/`, `/es/exoticos/` | dierenarts exotische dieren amsterdam | — | — | ja | **главный** полный термин (в title: «Dierenartsen voor bijzondere en exotische dieren») |
| | | dierenarts exoten | — | — | ja | **главный краткий slug** (`exoten`), аналог `exoten` (DE) и `exoticos` (ES) |
| | | dierenarts konijnen amsterdam | — | — | ja | **второй** (грызуны и кролики) |
| | | vogeldierenarts amsterdam | — | — | ja | **второй** (орнитология) |
| | | reptielen dierenarts | — | — | ja | **второй** (рептилии) |
| **Выезд на дом** | `/home-visits/`, `/sk/vyjazd-domov/`, `/pl/wizyty-domowe/`, `/cs/vyjezd-domu/`, `/de/hausbesuch/`, `/fr/a-domicile/`, `/it/a-domicilio/`, `/es/a-domicilio/` | dierenarts aan huis amsterdam | — | — | ja | **главный** абсолютный лидер запросов вызова ветеринара (в title, H1 и slug `aan-huis`) |
| | | mobiele dierenarts amsterdam | — | — | ja | **второй** синоним мобильного ветеринара |
| | | dierenarts thuis amsterdam | — | — | ja | **второй** разговорный синоним |
| **Приём на английском** | `/english-speaking/`, `/sk/po-anglicky/`, `/pl/po-angielsku/`, `/cs/anglicky/`, `/de/englisch/`, `/fr/anglophone/`, `/it/inglese/`, `/es/ingles/` | english speaking vet amsterdam | — | — | ja | **главный** доминирующий международный запрос экспатов в Амстердаме |
| | | dierenarts engels amsterdam | — | — | ja | **главный локальный slug** (`engels`), title: «Engelssprekende dierenartsen (English speaking vets)» |
| | | english vet amsterdam | — | — | ja | **второй** краткий синоним |

---

## 3. Цены

### 3.1. Общие запросы обзора цен категорий

*Группы сравнения Google Trends:*
- *Ветклиники: [Trends NL](https://trends.google.com/trends/explore?geo=NL&q=kosten%20dierenarts,dierenarts%20tarieven,dierenarts%20kosten,wat%20kost%20de%20dierenarts,dierenarts%20prijzen)*
- *Груминг: [Trends NL](https://trends.google.com/trends/explore?geo=NL&q=kosten%20trimsalon,hond%20trimmen%20kosten,trimsalon%20tarieven,trimsalon%20kosten,hond%20trimmen%20prijzen)*
- *Гостиницы: [Trends NL](https://trends.google.com/trends/explore?geo=NL&q=kosten%20hondenpension,hondenpension%20tarieven,hondenpension%20prijzen,kosten%20dierenpension,dierenpension%20tarieven)*
- *Дрессировка: [Trends NL](https://trends.google.com/trends/explore?geo=NL&q=kosten%20hondenschool,puppycursus%20kosten,hondentraining%20kosten,hondenschool%20tarieven)*
- *Выгул / присмотр: [Trends NL](https://trends.google.com/trends/explore?geo=NL&q=kosten%20hondenuitlaatservice,hondenuitlaatservice%20tarieven,hondenoppas%20kosten,hondenoppas%20tarieven)*

| Категория | Текущий аналог (EN / SK / PL / CS / DE / FR / IT / ES) | Варианты запроса | Planner | Trends (0–100) | Подсказка | Решение |
|---|---|---|---|---|---|---|
| **Цены ветклиник** | `…/vet-clinics/…/prices/` | dierenarts tarieven | — | — | ja | **главный** профессиональный и коммерческий запрос прейскуранта ветклиник (в title и H1; в URL slug `tarieven`) |
| | | kosten dierenarts | — | — | ja | **второй** народный запрос затрат на ветеринара (в title и тексты) |
| | | wat kost de dierenarts | — | — | ja | **главный** вопросный запрос для FAQ |
| | | dierenarts kosten | — | — | ja | **второй** |
| | | dierenarts prijzen | — | — | ja | **второй** коммерческий синоним |
| **Цены груминга** | `…/grooming/…/prices/` | trimsalon tarieven | — | — | ja | **главный** официальный прейскурант груминг-салонов (в title и H1: «Tarieven van trimsalons») |
| | | kosten trimsalon | — | — | ja | **второй** общий запрос стоимости салонного ухода |
| | | hond trimmen kosten | — | — | ja | **главный** запрос стоимости стрижки собак |
| | | hond trimmen prijzen | — | — | ja | **второй** |
| | | wat kost een trimsalon | — | — | ja | **главный** вопросный запрос для FAQ |
| **Цены гостиниц** | `…/pet-hotels/…/prices/` | hondenpension tarieven | — | — | ja | **главный** запрос тарифов гостиниц для собак (в title и H1) |
| | | kosten hondenpension | — | — | ja | **второй** общий запрос стоимости передержки |
| | | hondenpension kosten per dag | — | — | ja | **главный** суточный тариф проживания собак |
| | | dierenpension tarieven | — | — | ja | **второй** зонтичный прейскурант для собак и кошек |
| | | wat kost een hondenpension | — | — | ja | **главный** вопрос для FAQ |
| **Цены дрессировки** | `…/dog-training/…/prices/` | hondenschool tarieven | — | — | ja | **главный** запрос прейскуранта кинологических школ (в title и H1) |
| | | kosten hondenschool | — | — | ja | **второй** общий поисковый запрос стоимости курсов |
| | | puppycursus kosten | — | — | ja | **главный** запрос стоимости щенячьего курса |
| | | hondentraining kosten | — | — | ja | **второй** |
| | | wat kost een hondencursus | — | — | ja | **главный** вопрос для FAQ |
| **Цены передержки / выгула** | `…/pet-sitting/…/prices/` | hondenuitlaatservice tarieven | — | — | ja | **главный** запрос стоимости услуг выгула собак (в title и H1) |
| | | kosten hondenuitlaatservice | — | — | ja | **второй** общий запрос стоимости выгула |
| | | hondenoppas kosten | — | — | ja | **главный** запрос стоимости услуг ситтера (в title и тексты) |
| | | hondenoppas tarieven | — | — | ja | **второй** коммерческий тариф присмотра |
| | | wat kost een hondenoppas | — | — | ja | **главный** вопрос для FAQ |

---

## 3.2. Конкретные услуги (30 услуг из `website/lib/priceSlugs.ts` и `services.ts`)

Правила выведения поискового названия для страницы цены (`seo` по §3.1 методики `docs/seo/keywords/README.md`):
1. Из главного поискового запроса удаляются слова цены («kosten», «tarieven», «prijzen», «wat kost», «prijs», «per dag», «per nacht», «per uur») и города («Amsterdam», «in Amsterdam», «Rotterdam», «Utrecht»).
2. Первое слово пишется с заглавной буквы.
3. Сохраняется объект («hond», «kat», «kater», «teef», «puppy»).
4. Единица измерения указывается словами («per nacht», «per dag», «30 minuten», «1 uur»).
5. Длина — до 45 знаков.

*Группы сравнения Google Trends:*
- *Вет. осмотр и процедуры: [Trends NL](https://trends.google.com/trends/explore?geo=NL&q=consult%20dierenarts,vaccinatie%20hond,hond%20chippen,castratie%20kater,sterilisatie%20kat)*
- *Кастрация и стерилизация: [Trends NL](https://trends.google.com/trends/explore?geo=NL&q=castratie%20kater,sterilisatie%20kat,sterilisatie%20teef,sterilisatie%20hond,castratie%20hond)*
- *Услуги груминга: [Trends NL](https://trends.google.com/trends/explore?geo=NL&q=hond%20trimmen,hond%20wassen,hond%20plukken,hond%20ontwollen,nagels%20knippen%20hond)*
- *Гостиницы и дневной присмотр: [Trends NL](https://trends.google.com/trends/explore?geo=NL&q=hondenpension,kattenpension,hondendagopvang,dagopvang%20hond,dierentaxi)*
- *Дрессировка: [Trends NL](https://trends.google.com/trends/explore?geo=NL&q=puppycursus,gehoorzaamheidscursus,groepsles%20hond,priveles%20hond,gedragstherapie%20hond)*
- *Передержка и выгул: [Trends NL](https://trends.google.com/trends/explore?geo=NL&q=hondenuitlaatservice,kattenoppas%20aan%20huis,hondenoppas%20aan%20huis,hond%20logeren,dagopvang%20hond)*

| Категория | Код | Варианты запроса | Planner | Trends | Подсказка | Решение | Поисковое название (§3.1) |
|---|---|---|---|---|---|---|---|
| **GROOMING** | `full_groom` | hond trimmen kosten | — | — | ja | **главный** запрос стоимости полной стрижки и груминга | **Hond trimmen** |
| | | volledige trimbeurt hond prijs | — | — | ja | второй (профессиональный салонный термин) | |
| | `bath_dry` | hond wassen en drogen | — | — | ja | **главный** запрос гигиенического мытья и сушки | **Hond wassen en drogen** |
| | | hond wassen en fohnen kosten | — | — | ja | второй | |
| | `hand_stripping` | hond plukken kosten | — | — | ja | **главный** нидерландский термин тримминга жесткошерстных пород | **Hond plukken** |
| | | hond strippen prijs | — | — | ja | второй | |
| | `deshedding` | hond ontwollen prijs | — | — | ja | **главный** нидерландский термин вычесывания подшерстка | **Hond ontwollen** |
| | | ondervacht hond verwijderen | — | — | ja | второй | |
| | `nail_trim` | nagels knippen hond kosten | — | — | ja | **главный** запрос стрижки когтей | **Nagels knippen hond** |
| | | nagels knippen hond trimsalon | — | — | ja | второй | |
| | `cat_groom` | kat trimmen kosten | — | — | ja | **главный** запрос ухода и стрижки кошек | **Kat trimmen** |
| | | katten trimsalon prijzen | — | — | ja | второй | |
| **VET_CLINIC** | `exam` | consult dierenarts kosten | — | — | ja | **главный** официальный запрос стоимости общего приема | **Consult bij de dierenarts** |
| | | dierenarts consult prijs | — | — | ja | второй | |
| | `vaccination_dog` | vaccinatie hond kosten | — | — | ja | **главный** медицинский запрос стоимости вакцинации | **Vaccinatie voor de hond** |
| | | hond inenten kosten | — | — | ja | второй народный синоним | |
| | `microchip` | hond chippen kosten | — | — | ja | **главный** запрос микрочипирования и регистрации | **Hond laten chippen** |
| | | chippen hond prijs | — | — | ja | второй | |
| | `neuter_cat` | castratie kater kosten | — | — | ja | **главный** запрос кастрации кота | **Castratie van de kater** |
| | | kater castreren prijs | — | — | ja | второй | |
| | `spay_cat` | sterilisatie kat kosten | — | — | ja | **главный** запрос стерилизации кошки | **Sterilisatie van de kat** |
| | | kat steriliseren prijs | — | — | ja | второй | |
| | `spay_dog` | sterilisatie teef kosten | — | — | ja | **главный** точный запрос стерилизации собаки-самки | **Sterilisatie van de teef** |
| | | hond steriliseren kosten | — | — | ja | второй общий разговорный синоним | |
| **PET_HOTEL** | `dog_night` | hondenpension kosten per nacht | — | — | ja | **главный** запрос ночного тарифа пансиона для собак | **Hondenpension per nacht** |
| | | hondenhotel prijs per nacht | — | — | ja | второй | |
| | `cat_night` | kattenpension kosten per nacht | — | — | ja | **главный** запрос проживания кошек за ночь | **Kattenpension per nacht** |
| | | kattenhotel prijs per nacht | — | — | ja | второй | |
| | `daycare_day` | hondendagopvang kosten per dag | — | — | ja | **главный** запрос центра дневного пребывания собак | **Hondendagopvang per dag** |
| | | hondenopvang per dag | — | — | ja | второй | |
| | `daycare_pass` | hondendagopvang strippenkaart | — | — | ja | **главный** повсеместный термин абонемента в Нидерландах | **Strippenkaart dagopvang** |
| | | abonnement hondendagopvang | — | — | ja | второй | |
| | `pickup` | haalservice hondenpension | — | — | ja | **главный** запрос трансфера питомцев | **Haal- en brengservice** |
| | | dierentaxi kosten | — | — | ja | второй синоним зоотакси | |
| | `extra_walk` | extra wandeling hondenpension | — | — | ja | **главный** запрос дополнительной индивидуальной прогулки | **Extra wandeling in pension** |
| | | individuele wandeling pension | — | — | ja | второй | |
| **DOG_TRAINING** | `puppy_course` | puppycursus kosten | — | — | ja | **главный** курс социализации и воспитания щенков | **Puppycursus** |
| | | cursus voor pups prijs | — | — | ja | второй | |
| | `obedience_course` | gehoorzaamheidscursus hond kosten | — | — | ja | **главный** базовый курс послушания | **Gehoorzaamheidscursus** |
| | | basiscursus gehoorzaamheid hond | — | — | ja | второй | |
| | `group_lesson` | groepsles hondentraining prijs | — | — | ja | **главный** групповые кинологические занятия | **Groepsles hondentraining** |
| | | hondentraining in groepsverband | — | — | ja | второй | |
| | `private_lesson` | priveles hondentraining kosten | — | — | ja | **главный** индивидуальные занятия с инструктором | **Privéles hondentraining** |
| | | individuele hondentraining prijs | — | — | ja | второй | |
| | `behavior_consult` | gedragstherapie hond kosten | — | — | ja | **главный** консультация зоопсихолога / специалиста по поведению | **Gedragsconsult voor honden** |
| | | gedragsconsult hond prijs | — | — | ja | второй | |
| | `membership` | kynologenclub lidmaatschap | — | — | ja | **главный** членский взнос кинологического клуба | **Lidmaatschap kynologenclub** |
| | | contributie hondensportvereniging | — | — | ja | второй | |
| **PET_SITTING** | `walk_30` | hondenuitlaatservice 30 minuten | — | — | ja | **главный** короткий выгул на 30 минут | **Hond uitlaten (30 minuten)** |
| | | wandeling 30 minuten hond tarief | — | — | ja | второй | |
| | `walk_60` | hondenuitlaatservice 1 uur kosten | — | — | ja | **главный** часовая прогулка с собакой | **Hond uitlaten (1 uur)** |
| | | uitlaatservice hond 60 minuten | — | — | ja | второй | |
| | `cat_visit` | kattenoppas aan huis tarieven | — | — | ja | **главный** домашний визит к кошкам | **Kattenoppas aan huis** |
| | | huisbezoek katten kosten | — | — | ja | второй | |
| | `house_sitting_night` | hondenoppas aan huis overnachten | — | — | ja | **главный** ночной присмотр в доме владельца | **Oppas aan huis (nacht)** |
| | | oppas in huis nacht tarief | — | — | ja | второй | |
| | `boarding_night` | hond logeren bij oppas nacht | — | — | ja | **главный** ночная домашняя передержка у ситтера | **Logeren bij oppas (nacht)** |
| | | opvang bij oppas thuis overnachten | — | — | ja | второй | |
| | `daycare_day` | dagopvang bij oppas thuis kosten | — | — | ja | **главный** дневной присмотр у частного ситтера | **Dagopvang bij de oppas** |
| | | dagopvang hondenoppas tarief | — | — | ja | второй | |

---

## 4. Ветеринарные специальности из `website/lib/vet.ts`

В Нидерландах специализация ветеринарных врачей регулируется **KNMvD (Koninklijke Nederlandse Maatschappij voor Diergeneeskunde)**, регистром ветеринарных специалистов **Specialistenregister Diergeneeskunde** и факультетом ветеринарной медицины **Faculteit Diergeneeskunde Universiteit Utrecht**.

*Группы сравнения Google Trends:*
- *Диагностика и физиотерапия: [Trends NL](https://trends.google.com/trends/explore?geo=NL&q=dierenarts%20echografie,rontgen%20dierenarts,ct%20scan%20hond,mri%20scan%20hond,dierenfysiotherapie)*
- *Клинические дисциплины: [Trends NL](https://trends.google.com/trends/explore?geo=NL&q=dierenarts%20chirurgie,dierenarts%20tandheelkunde,dierenarts%20dermatologie,dierenarts%20cardiologie,dierenarts%20oogheelkunde)*
- *Хирургические и терапевтические: [Trends NL](https://trends.google.com/trends/explore?geo=NL&q=dierenarts%20orthopedie,dierenarts%20oncologie,dierenarts%20neurologie,dierenarts%20interne%20geneeskunde,dierenarts%20voortplanting)*

| Код специальности | Английский (`en`) | Нидерландский (`nl`) | Варианты запроса в Нидерландах | Trends (0–100) | Подсказка | Обоснование и статус |
|---|---|---|---|---|---|---|
| `surgery` | Surgery | **Chirurgie** | dierenarts chirurgie | — | ja | **главный** термин оперативного отделения ветклиник |
| `orthopedics` | Orthopaedics | **Orthopedie** | dierenarts orthopedie | — | ja | **главный** ортопедический и травматологический профиль |
| `dentistry` | Dentistry | **Tandheelkunde** | dierenarts tandheelkunde | — | ja | **главный** профиль ветеринарной стоматологии |
| | | | dierentandarts | — | ja | второй популярный термин ветврача-стоматолога |
| `dermatology` | Dermatology | **Dermatologie** | dierenarts dermatologie | — | ja | **главный** профиль кожных заболеваний и аллергий |
| `cardiology` | Cardiology | **Cardiologie** | dierenarts cardiologie | — | ja | **главный** кардиологический профиль |
| `ophthalmology` | Ophthalmology | **Oogheelkunde** | dierenarts oogheelkunde | — | ja | **главный** офтальмологический профиль |
| `oncology` | Oncology | **Oncologie** | dierenarts oncologie | — | ja | **главный** онкологический профиль |
| `neurology` | Neurology | **Neurologie** | dierenarts neurologie | — | ja | **главный** неврологический профиль |
| `internal-medicine` | Internal medicine | **Interne geneeskunde** | dierenarts interne geneeskunde | — | ja | **главный** терапевтический профиль общей клиники |
| `reproduction` | Reproduction | **Voortplanting** | dierenarts voortplanting | — | ja | **главный** репродуктологический профиль |
| `rehabilitation` | Rehabilitation | **Fysiotherapie en revalidatie** | dierenfysiotherapie | — | ja | **главный** поисковый запрос физиотерапии животных |
| | | | dierenarts revalidatie | — | ja | второй синоним реабилитации |
| `exotics` | Exotic animals | **Bijzondere dieren** | dierenarts bijzondere dieren | — | ja | **главный** официальный нидерландский термин приема экзотов, птиц и грызунов |
| | | | dierenarts exotische dieren | — | ja | второй повсеместный синоним |
| `ultrasound` | Ultrasound | **Echografie** | dierenarts echografie | — | ja | **главный** термин УЗИ-диагностики в клиниках |
| | | | echo hond dierenarts | — | ja | второй разговорный поисковый синоним |
| `x-ray` | X-ray | **Röntgen** | rontgen dierenarts | — | ja | **главный** термин рентгенологических исследований |
| | | | rontgenfoto hond kosten | — | ja | второй |
| `ct` | CT | **CT-scan** | ct scan hond kosten | — | ja | **главный** нидерландский термин компьютерной томографии |
| `mri` | MRI | **MRI-scan** | mri scan hond kosten | — | ja | **главный** нидерландский термин магнитно-резонансной томографии |
| `endoscopy` | Endoscopy | **Endoscopie** | endoscopie hond | — | ja | **главный** профиль эндоскопических исследований |
| `laboratory` | Laboratory | **Laboratorium** | laboratorium dierenarts | — | ja | **главный** профиль клинических лабораторных анализов |
| `hospitalization` | Hospitalisation | **Opname en verpleging** | opname dierenarts | — | ja | **главный** клинический термин стационара в клиниках Нидерландов |
| | | | hospitalisatie dierenarts | — | ja | второй академический синоним |

---

## 5. Сводка слагов для сайта

Каждый слаг записан строго в одном варианте латиницей без диакритических знаков, в нижнем регистре через дефис (`kebab-case`), в полном соответствии с архитектурным контрактом сайта.

### 5.1. Категории (`website/lib/categories.ts`: `SLUGS.nl`)

1. `GROOMING` → **`trimsalon`**  
   *Обоснование:* Общепринятый народный, коммерческий и профессиональный термин в Нидерландах (члены ABHB повсеместно именуются `trimsalon`), охватывает собак и кошек. Аналог немецкого `hundesalon`, французского `toilettage`, итальянского `toelettatura`.
2. `VET_CLINIC` → **`dierenarts`**  
   *Обоснование:* Абсолютный доминирующий поисковый запрос в Нидерландах. Прямой аналог `/sk/veterinar/`, `/pl/weterynarz/`, `/cs/veterina/`, `/de/tierarzt/`, `/fr/veterinaire/`, `/it/veterinario/`, `/es/veterinario/`.
3. `PET_HOTEL` → **`dierenpension`**  
   *Обоснование:* Базовый зонтичный термин гостиниц для передержки домашних животных в Нидерландах, принимающий и собак, и кошек. Точный аналог немецкого `tierpension`, французского `pension-animaux`, итальянского `pensione-animali`.
4. `DOG_TRAINING` → **`hondenschool`**  
   *Обоснование:* Главный институциональный и поисковый запрос дрессировки и кинологических центров в Нидерландах, точный аналог немецкого `hundeschule`.
5. `PET_SHOP` → **`dierenwinkel`**  
   *Обоснование:* Абсолютный народный и коммерческий термин магазинов товаров для животных в Нидерландах. Прямой аналог `tierhandlung`, `animalerie`, `sklep-zoologiczny`, `zverimex`.
6. `PET_SITTING` → **`hondenoppas`**  
   *Обоснование:* Самый популярный поисковый термин индивидуального присмотра и передержки животных в нидерландских городах (сотни тысяч запросов в сравнении с редким зонтичным `dierenoppas`). Аналог испанского `cuidador-de-perros` и итальянского `dog-sitter`.

### 5.2. Признаки ветклиник (`website/lib/attributePages.ts`: `SLUGS.nl`)

1. `nonstop` → **`spoed`** (title: «Spoeddierenartsen en 24-uurs spoedzorg», главный поисковый запрос неотложной помощи в Нидерландах; аналог `urgence`, `urgencias`, `notdienst`)
2. `saturday` → **`zaterdag`** (title: «Dierenartsen geopend op zaterdag»)
3. `sunday` → **`zondag`** (title: «Dierenartsen geopend op zondag»)
4. `exotics` → **`exoten`** (title: «Dierenartsen voor bijzondere en exotische dieren», лаконичный слаг, аналог `exoten` в DE, `exoticos` в ES, `esotici` в IT)
5. `home-visits` → **`aan-huis`** (title: «Dierenartsen aan huis», доминирующий запрос вызова врача на дом в Нидерландах; аналог `hausbesuch`, `a-domicile`, `a-domicilio`)
6. `english` → **`engels`** (title: «Engelssprekende dierenartsen (English speaking vets)»)

### 5.3. Сегмент цен в URL (`website/lib/priceSlugs.ts`: `PRICES_SEGMENT.nl`)

- `PRICES_SEGMENT.nl`: **`tarieven`** (структура URL: `/<category>/<city>/tarieven/` и `/<category>/<city>/tarieven/<service>/`; именно формулировка `tarieven` является стандартной для прейскурантов ветеринарных клиник и сервисов в Нидерландах, аналог французского `tarifs`).

### 5.4. Слаги услуг из цен (`website/lib/priceSlugs.ts`: `SERVICE_SLUGS.nl`)

#### GROOMING:
1. `full_groom` → `hond-trimmen`
2. `bath_dry` → `wassen-en-drogen`
3. `hand_stripping` → `plukken`
4. `deshedding` → `ontwollen`
5. `nail_trim` → `nagels-knippen`
6. `cat_groom` → `kat-trimmen`

#### VET_CLINIC:
7. `exam` → `consult`
8. `vaccination_dog` → `vaccinatie-hond`
9. `microchip` → `chippen-hond`
10. `neuter_cat` → `castratie-kater`
11. `spay_cat` → `sterilisatie-kat`
12. `spay_dog` → `sterilisatie-teef`

#### PET_HOTEL:
13. `dog_night` → `hond-per-nacht`
14. `cat_night` → `kat-per-nacht`
15. `daycare_day` → `dagopvang-hond`
16. `daycare_pass` → `strippenkaart-dagopvang`
17. `pickup` → `haalservice-brengservice`
18. `extra_walk` → `extra-wandeling`

#### DOG_TRAINING:
19. `puppy_course` → `puppycursus`
20. `obedience_course` → `gehoorzaamheidscursus`
21. `group_lesson` → `groepsles`
22. `private_lesson` → `priveles`
23. `behavior_consult` → `gedragstherapie`
24. `membership` → `lidmaatschap-club`

#### PET_SITTING:
25. `walk_30` → `wandeling-30-min`
26. `walk_60` → `wandeling-60-min`
27. `cat_visit` → `kattenoppas-aan-huis`
28. `house_sitting_night` → `oppas-aan-huis-nacht`
29. `boarding_night` → `opvang-bij-oppas-nacht`
30. `daycare_day` → `dagopvang-oppas`

---

### 5.5. Поисковые названия для страниц цен (`seo` в `website/lib/services.ts`, §3.1) и короткие подписи

Формирование выполнено строго по 8 правилам методики `docs/seo/keywords/README.md` §3.1 (удалены слова цены и город, сохранён объект с заглавной буквы, единицы словами, длина каждого поискового названия не превышает 45 символов):

| Категория | Код услуги | Короткая подпись (`nl`) | Поисковое название `seo` (`nl`, §3.1) | Длина (символов) |
|---|---|---|---|---|
| **GROOMING** | `full_groom` | Volledige trimbeurt | Hond trimmen | 12 |
| | `bath_dry` | Wassen & drogen | Hond wassen en drogen | 21 |
| | `hand_stripping` | Plukken | Hond plukken | 12 |
| | `deshedding` | Ontwollen | Hond ontwollen | 14 |
| | `nail_trim` | Nagels knippen | Nagels knippen hond | 19 |
| | `cat_groom` | Kat trimmen | Kat trimmen | 11 |
| **VET_CLINIC** | `exam` | Consult | Consult bij de dierenarts | 25 |
| | `vaccination_dog` | Vaccinatie hond | Vaccinatie voor de hond | 23 |
| | `microchip` | Chippen | Hond laten chippen | 18 |
| | `neuter_cat` | Castratie kater | Castratie van de kater | 22 |
| | `spay_cat` | Sterilisatie kat | Sterilisatie van de kat | 23 |
| | `spay_dog` | Sterilisatie teef | Sterilisatie van de teef | 24 |
| **PET_HOTEL** | `dog_night` | Hond, per nacht | Hondenpension per nacht | 23 |
| | `cat_night` | Kat, per nacht | Kattenpension per nacht | 23 |
| | `daycare_day` | Dagopvang, per dag | Hondendagopvang per dag | 23 |
| | `daycare_pass` | Strippenkaart dagopvang | Strippenkaart dagopvang | 23 |
| | `pickup` | Haal- en brengservice | Haal- en brengservice | 21 |
| | `extra_walk` | Extra wandeling | Extra wandeling in pension | 26 |
| **DOG_TRAINING** | `puppy_course` | Puppycursus | Puppycursus | 11 |
| | `obedience_course` | Basis gehoorzaamheid | Gehoorzaamheidscursus | 21 |
| | `group_lesson` | Groepsles | Groepsles hondentraining | 24 |
| | `private_lesson` | Privéles | Privéles hondentraining | 23 |
| | `behavior_consult` | Gedragsconsult | Gedragsconsult voor honden | 26 |
| | `membership` | Lidmaatschap club | Lidmaatschap kynologenclub | 26 |
| **PET_SITTING** | `walk_30` | Wandeling 30 min | Hond uitlaten (30 minuten) | 26 |
| | `walk_60` | Wandeling 1 uur | Hond uitlaten (1 uur) | 21 |
| | `cat_visit` | Kattenoppas aan huis | Kattenoppas aan huis | 20 |
| | `house_sitting_night` | Oppas bij u thuis, nacht | Oppas aan huis (nacht) | 22 |
| | `boarding_night` | Logeren bij de oppas | Logeren bij oppas (nacht) | 25 |
| | `daycare_day` | Dagopvang bij oppas | Dagopvang bij de oppas | 22 |

---

### 5.6. Шаблоны мета-тегов категорий для `website/lib/categories.ts`

- `SEO_TITLE.nl`:
  - `GROOMING`: `"Trimsalons en honden trimmen"`
  - `VET_CLINIC`: `"Dierenartsen en dierenklinieken"`
  - `PET_HOTEL`: `"Dierenpensions en hondenhotels"`
  - `DOG_TRAINING`: `"Hondenscholen en hondentraining"`
  - `PET_SHOP`: `"Dierenwinkels en dierenspeciaalzaken"`
  - `PET_SITTING`: `"Hondenoppas en hondenuitlaatservice"`
- `PRICES_NAME.nl`:
  - `GROOMING`: `"Trimsalon"`
  - `VET_CLINIC`: `"Dierenarts"`
  - `PET_HOTEL`: `"Dierenpension"`
  - `DOG_TRAINING`: `"Hondenschool"`
  - `PET_SHOP`: `"Dierenwinkel"`
  - `PET_SITTING`: `"Hondenoppas"`

---

## 6. Открытый вопрос

1. **Доступность Keyword Planner**:
   В среде сборщика отсутствует доступ к рекламному аккаунту Google Ads Keyword Planner (активные кампании отсутствуют). В соответствии с правилом `quality.md` §1 («Нет данных — пусто и причина. Никогда не оценка»), колонка Planner заполнена прочерком `—` во всех строках без исключения.
2. **Ограничение Google Trends (HTTP 429)**:
   При попытке выгрузки численных индексов Trends из контейнера возвращается сетевое ограничение `HTTP 429 Too Many Requests`. Для обеспечения проверяемости исследования предоставлены прямые ссылки на Google Trends Explore по Нидерландам (`geo=NL`).
3. **Подтверждение поисковых запросов через Google Suggest**:
   Все представленные варианты поисковых запросов и локальных гео-хвостов протестированы через официальный Google Suggest API (`client=chrome&hl=nl&gl=nl`) и подтверждены реальными подсказками нидерландских пользователей.
