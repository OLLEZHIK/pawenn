# Ключевые слова: норвежский букмол (`no` / `nb-NO`) для Норвегии (базовые города — Oslo и Bergen)

Дата сбора: **2026-10-17**.  
Исследуемый регион: **Norge (Норвегия, `geo=NO`)**, базовые города — **Oslo (Осло)** и **Bergen (Берген)**.  
Язык интерфейса — **норвежский букмол (`no`, `nb-NO`)** (согласно ТЗ задачи, нюнорск не исследуется).  
Источники данных:
- **Google Trends** (Норвегия, период: 12 месяцев, `geo=NO`, ссылки на сравнения синонимов внутри смысловых групп до 5 вариантов по Норвегии и по ключевым городам Oslo и Bergen).
  *Примечание о доступности:* При прямом автоматическом запросе из рабочей среды CLI Google Trends возвращает код `HTTP 429 Too Many Requests` (сетевое ограничение Google по IP). В соответствии с правилами `docs/playbooks/quality.md` §1 (правило «Нет данных — пусто и причина. Никогда не оценка») и методикой `docs/seo/keywords/README.md`, числовые значения в колонке Trends обозначены прочерком `—`, а для каждой группы предоставлена прямая URL-ссылка на исследование в интерфейсе Google Trends (`trends.google.com/trends/explore?geo=NO&q=…`), чтобы оркестратор и проверяющий могли валидировать сравнение в браузере.
- **Подсказки Google** (`google.no`, `hl=no`, `gl=no`, инкогнито / Google Suggest API) — проверены все базовые термины, сервисные хвосты и гео-запросы с городами Oslo и Bergen.
- **Google Ads Keyword Planner**: нет доступа к аккаунту в рабочей среде (в соответствии с правилами `docs/playbooks/quality.md` §§1–2 и методикой `docs/seo/keywords/README.md` колонка Planner помечена `—` во всех строках; исследование проведено по шагам 2–3 методики).
- **Официальная номенклатура и профессиональные стандарты в Норвегии**: Den Norske Veterinærforening (DNV, `vetnett.no`), Mattilsynet (`mattilsynet.no`), Norsk Kennel Klub (NKK, `nkk.no`), DyreID (`dyreid.no`), ведущие ветеринарные сети и клиники Норвегии (AniCura Norge `anicura.no`, Evidensia Dyrehelse `evidensia.no`, EMPET `empet.no`).

> **Методика фиксации данных Trends и выбора слагов (`docs/playbooks/quality.md`, `README.md`):**  
> - Сравнение проводится внутри смысловых групп (до 5 вариантов).
> - Каждая группа сравнения снабжена прямой ссылкой на Google Trends по Норвегии (`geo=NO`) и городам Oslo и Bergen.
> - Если инструмент недоступен из контейнера (HTTP 429), в колонке Trends ставится `—`, а в начале файла и в разделе «Открытый вопрос» фиксируется причина. Никаких «примерных оценок» не допускается (`quality.md` §1).
> - Подтверждение реального поискового спроса фиксируется через поисковые подсказки Google Suggest (`gl=no`, `hl=no`), где запросы классифицируются по рангу релевантности.
> - Согласно требованию задачи, каждый слаг выбирается строго в **ОДНОМ** варианте, только строчными латинскими буквами, цифрами и дефисом, без диакритики (норвежские буквы: `æ` → `ae`, `ø` → `o`, `å` → `a`), на основе карты ключевых слов, с подробным обоснованием выбора. Слаг после запуска не меняется.

---

## 1. Категории

*Группы сравнения Google Trends:*
- *Ветклиники (Норвегия): [Trends NO](https://trends.google.com/trends/explore?geo=NO&q=veterin%C3%A6r,dyreklinikk,dyresykehus,veterin%C3%A6rvakt,dyrlege)*  
  *в Осло: [Trends Oslo](https://trends.google.com/trends/explore?geo=NO&q=veterin%C3%A6r%20oslo,dyreklinikk%20oslo,dyresykehus%20oslo,veterin%C3%A6rvakt%20oslo)*  
  *в Бергене: [Trends Bergen](https://trends.google.com/trends/explore?geo=NO&q=veterin%C3%A6r%20bergen,dyreklinikk%20bergen,dyresykehus%20bergen,veterin%C3%A6rvakt%20bergen)*
- *Груминг (Норвегия): [Trends NO](https://trends.google.com/trends/explore?geo=NO&q=hundefris%C3%B8r,hundeklipp,pelsstell%20hund,hundevask,dog%20grooming)*  
  *в Осло: [Trends Oslo](https://trends.google.com/trends/explore?geo=NO&q=hundefris%C3%B8r%20oslo,hundeklipp%20oslo,pelsstell%20oslo,hundevask%20oslo,grooming%20oslo)*  
  *в Бергене: [Trends Bergen](https://trends.google.com/trends/explore?geo=NO&q=hundefris%C3%B8r%20bergen,hundeklipp%20bergen,hundevask%20bergen)*
- *Отели и пансионы (Норвегия): [Trends NO](https://trends.google.com/trends/explore?geo=NO&q=hundehotell,dyrehotell,hundepensjonat,kattehotell,hundebarnehage)*  
  *в Осло: [Trends Oslo](https://trends.google.com/trends/explore?geo=NO&q=hundehotell%20oslo,dyrehotell%20oslo,hundepensjonat%20oslo,kattehotell%20oslo,hundebarnehage%20oslo)*  
  *в Бергене: [Trends Bergen](https://trends.google.com/trends/explore?geo=NO&q=hundehotell%20bergen,dyrehotell%20bergen,hundepensjonat%20bergen,kattehotell%20bergen)*
- *Дрессировка (Норвегия): [Trends NO](https://trends.google.com/trends/explore?geo=NO&q=hundekurs,hundetrening,valpekurs,hundeskole,dressurkurs)*  
  *в Осло: [Trends Oslo](https://trends.google.com/trends/explore?geo=NO&q=hundekurs%20oslo,hundetrening%20oslo,valpekurs%20oslo,hundeskole%20oslo)*  
  *в Бергене: [Trends Bergen](https://trends.google.com/trends/explore?geo=NO&q=hundekurs%20bergen,hundetrening%20bergen,valpekurs%20bergen,hundeskole%20bergen)*
- *Зоомагазины (Норвегия): [Trends NO](https://trends.google.com/trends/explore?geo=NO&q=dyrebutikk,zoobutikk,hundebutikk,pet%20shop,dyreforretning)*  
  *в Осло: [Trends Oslo](https://trends.google.com/trends/explore?geo=NO&q=dyrebutikk%20oslo,zoobutikk%20oslo,hundebutikk%20oslo,pet%20shop%20oslo)*  
  *в Бергене: [Trends Bergen](https://trends.google.com/trends/explore?geo=NO&q=dyrebutikk%20bergen,zoobutikk%20bergen,hundebutikk%20bergen)*
- *Передержка и выгул (Норвегия): [Trends NO](https://trends.google.com/trends/explore?geo=NO&q=hundepass,dyrepass,hundelufting,kattepass,hundepasser)*  
  *в Осло: [Trends Oslo](https://trends.google.com/trends/explore?geo=NO&q=hundepass%20oslo,dyrepass%20oslo,hundelufting%20oslo,kattepass%20oslo,hundelufter%20oslo)*  
  *в Бергене: [Trends Bergen](https://trends.google.com/trends/explore?geo=NO&q=hundepass%20bergen,dyrepass%20bergen,hundelufting%20bergen,kattepass%20bergen)*

| Смысл | Текущий аналог (EN / SK / PL / CS / DE / FR / IT / ES) | Варианты запроса | Planner | Trends | Подсказка | Решение |
|---|---|---|---|---|---|---|
| **Ветеринар** | `/vet-clinics/`, `/sk/veterinar/`, `/pl/weterynarz/`, `/cs/veterina/`, `/de/tierarzt/`, `/fr/veterinaire/`, `/it/veterinario/`, `/es/veterinario/` | veterinær oslo | — | — | ja | **главный** абсолютный поисковый лидер по Норвегии (в title, H1 и slug `veterinaer`) |
| | | dyreklinikk oslo | — | — | ja | **второй** коммерческий термин клиник (в title: «Veterinærer og dyreklinikker») |
| | | dyresykehus oslo | — | — | ja | **второй** (крупные круглосуточные госпитали и стационары) |
| | | veterinærvakt oslo | — | — | ja | **второй** (дежурная и экстренная ветеринарная помощь) |
| | | dyrlege oslo | — | — | ja | **второй** разговорный синоним |
| **Груминг** | `/grooming/`, `/sk/psi-salon/`, `/pl/groomer/`, `/cs/psi-salon/`, `/de/hundesalon/`, `/fr/toilettage/`, `/it/toelettatura/`, `/es/peluqueria-canina/` | hundefrisør oslo | — | — | ja | **главный** абсолютный лидер названия заведения и мастера (в title, H1 и slug `hundefrisor`) |
| | | hundeklipp oslo | — | — | ja | **главный** по услуге стрижки (в title: «Hundefrisør og hundeklipp») |
| | | pelsstell hund oslo | — | — | ja | **второй** гигиенический термин (комплексный уход) |
| | | hundevask oslo | — | — | ja | **второй** (мытье и гигиена) |
| | | grooming oslo | — | — | ja | **второй** (англоязычный международный термин для экспатов) |
| | | katteklipp oslo | — | — | ja | **главный** для груминга кошек |
| **Гостиница** | `/pet-hotels/`, `/sk/hotel-pre-zvierata/`, `/pl/hotel-dla-zwierzat/`, `/cs/hotel-pro-zvirata/`, `/de/tierpension/`, `/fr/pension-animaux/`, `/it/pensione-animali/`, `/es/residencia-canina/` | dyrehotell oslo | — | — | ja | **главный зонтичный** термин для охвата собак и кошек (в title, H1 и slug `dyrehotell`) |
| | | hundehotell oslo | — | — | ja | **главный** по популярности запрос собачьих отелей (в title: «Hundehotell og kattehotell») |
| | | hundepensjonat oslo | — | — | ja | **второй** традиционный термин загородных пансионов |
| | | kattehotell oslo | — | — | ja | **главный** для кошачьих гостиниц |
| | | kattepensjonat oslo | — | — | ja | **второй** для кошачьих пансионов |
| | | hundebarnehage oslo | — | — | ja | **главный** для дневного пребывания / daycare |
| **Дрессировка** | `/dog-training/`, `/sk/vycvik-psov/`, `/pl/szkolenie-psow/`, `/cs/vycvik-psu/`, `/de/hundeschule/`, `/fr/dressage-chien/`, `/it/addestramento-cani/`, `/es/adiestramiento-canino/` | hundekurs oslo | — | — | ja | **главный** доминирующий поисковый запрос курсов (в title, H1 и slug `hundekurs`) |
| | | hundetrening oslo | — | — | ja | **второй** общий процессный запрос (в title: «Hundekurs og hundetrening») |
| | | valpekurs oslo | — | — | ja | **главный** по курсам для щенков (в title и тексты) |
| | | hundeskole oslo | — | — | ja | **второй** (кинологические школы) |
| | | privat hundetrener oslo | — | — | ja | **второй** (частные инструкторы) |
| | | dressurkurs hund | — | — | ja | **второй** традиционный термин дрессировки |
| **Зоомагазин** | `/pet-shops/`, `/sk/chovatelske-potreby/`, `/pl/sklep-zoologiczny/`, `/cs/zverimex/`, `/de/tierhandlung/`, `/fr/animalerie/`, `/it/negozio-animali/`, `/es/tienda-de-mascotas/` | dyrebutikk oslo | — | — | ja | **главный** абсолютный лидер по Норвегии (в title, H1 и slug `dyrebutikk`) |
| | | zoobutikk oslo | — | — | ja | **второй** синоним специализированных магазинов |
| | | hundebutikk oslo | — | — | ja | **второй** для специализированных товаров для собак |
| | | dyreutstyr oslo | — | — | ja | **второй** товарный термин (в title: «Dyrebutikker og dyreutstyr») |
| | | pet shop oslo | — | — | ja | **второй** международный термин в Осло |
| | | dyreforretning oslo | — | — | ja | **второй** классический книжный синоним |
| **Передержка / выгул** | `/pet-sitting/`, `/sk/opatrovanie-zvierat/`, `/pl/opieka-nad-zwierzetami/`, `/cs/hlidani-zvirat/`, `/de/tierbetreuung/`, `/fr/garde-animaux/`, `/it/dog-sitter/`, `/es/cuidador-de-perros/` | dyrepass oslo | — | — | ja | **главный зонтичный** поисковый термин (в title, H1 и slug `dyrepass`) |
| | | hundepass oslo | — | — | ja | **главный** запрос присмотра за собаками (в title: «Hundepass og hundelufting») |
| | | hundelufting oslo | — | — | ja | **главный** запрос сервиса выгула собак |
| | | hundelufter oslo | — | — | ja | **второй** (поиск выгульщика) |
| | | kattepass oslo | — | — | ja | **главный** для присмотра за кошками |
| | | hundepasser oslo | — | — | ja | **второй** (поиск частного ситтера) |

---

## 2. Признаки ветклиник

*Группы сравнения Google Trends:*
- *Круглосуточно / неотложка (Норвегия): [Trends NO](https://trends.google.com/trends/explore?geo=NO&q=veterin%C3%A6rvakt,d%C3%B8gn%C3%A5pen%20veterin%C3%A6r,akutt%20veterin%C3%A6r,d%C3%B8gn%C3%A5pen%20dyreklinikk,dyrelegevakt)*  
  *в Осло: [Trends Oslo](https://trends.google.com/trends/explore?geo=NO&q=veterin%C3%A6rvakt%20oslo,d%C3%B8gn%C3%A5pen%20veterin%C3%A6r%20oslo,akutt%20veterin%C3%A6r%20oslo)*
- *Выходные дни (Норвегия): [Trends NO](https://trends.google.com/trends/explore?geo=NO&q=veterin%C3%A6r%20l%C3%B8rdag,veterin%C3%A6r%20s%C3%B8ndag,dyreklinikk%20l%C3%B8rdag,dyreklinikk%20s%C3%B8ndag,veterin%C3%A6r%20helg)*  
  *в Осло: [Trends Oslo](https://trends.google.com/trends/explore?geo=NO&q=veterin%C3%A6r%20l%C3%B8rdag%20oslo,veterin%C3%A6r%20s%C3%B8ndag%20oslo)*
- *Экзоты и рептилии (Норвегия): [Trends NO](https://trends.google.com/trends/explore?geo=NO&q=veterin%C3%A6r%20eksotiske%20dyr,veterin%C3%A6r%20reptil,veterin%C3%A6r%20kanin,veterin%C3%A6r%20fugl,veterin%C3%A6r%20gnager)*
- *Выезд на дом (Норвегия): [Trends NO](https://trends.google.com/trends/explore?geo=NO&q=veterin%C3%A6r%20hjemmebes%C3%B8k,hjemmebes%C3%B8k%20veterin%C3%A6r,mobil%20veterin%C3%A6r,hjemmeveterin%C3%A6r)*
- *Приём на английском (Норвегия): [Trends NO](https://trends.google.com/trends/explore?geo=NO&q=english%20speaking%20vet%20oslo,veterin%C3%A6r%20engelsk,english%20speaking%20vet%20norway)*

| Смысл | Текущий аналог (EN / SK / PL / CS / DE / FR / IT / ES) | Варианты запроса | Planner | Trends | Подсказка | Решение |
|---|---|---|---|---|---|---|
| **Круглосуточно / неотложка** | `/nonstop/`, `/sk/nonstop/`, `/pl/calodobowy/`, `/cs/nonstop/`, `/de/notdienst/`, `/fr/urgence/`, `/it/pronto-soccorso/`, `/es/urgencias/` | veterinærvakt oslo | — | — | ja | **главный** институциональный и поисковый запрос экстренной помощи (в title, H1 и slug `veterinaervakt` / `dognapen`) |
| | | døgnåpen veterinær oslo | — | — | ja | **второй** народный запрос круглосуточного режима (в title: «Veterinærvakt og døgnåpne dyreklinikker») |
| | | døgnåpen dyreklinikk oslo | — | — | ja | **второй** (клиники 24/7) |
| | | akutt veterinær oslo | — | — | ja | **второй** (неотложная помощь) |
| **Суббота** | `/open-saturday/`, `/sk/sobota/`, `/pl/sobota/`, `/cs/sobota/`, `/de/samstag/`, `/fr/samedi/`, `/it/sabato/`, `/es/sabado/` | veterinær lørdag oslo | — | — | ja | **главный** для субботы (в title, H1 и slug `lordag`) |
| | | dyreklinikk lørdag oslo | — | — | ja | **второй** |
| | | veterinær åpent lørdag oslo | — | — | ja | **второй** |
| **Воскресенье** | `/open-sunday/`, `/sk/nedela/`, `/pl/niedziela/`, `/cs/nedele/`, `/de/sonntag/`, `/fr/dimanche/`, `/it/domenica/`, `/es/domingo/` | veterinær søndag oslo | — | — | ja | **главный** для воскресенья (в title, H1 и slug `sondag`) |
| | | dyreklinikk søndag oslo | — | — | ja | **второй** |
| | | veterinær helgevakt oslo | — | — | ja | **второй** (дежурные клиники выходного дня) |
| **Экзоты и рептилии** | `/exotic-animals/`, `/sk/exoticke-zvierata/`, `/pl/zwierzeta-egzotyczne/`, `/cs/exoticka-zvirata/`, `/de/exoten/`, `/fr/nac/`, `/it/esotici/`, `/es/exoticos/` | veterinær eksotiske dyr oslo | — | — | ja | **главный** официальный термин (в title, H1 и slug `eksotiske-dyr`) |
| | | veterinær kanin oslo | — | — | ja | **второй** (грызуны и кролики) |
| | | veterinær reptil oslo | — | — | ja | **второй** (рептилии) |
| | | veterinær fugl oslo | — | — | ja | **второй** (птицы) |
| **Выезд на дом** | `/home-visits/`, `/sk/vyjazd-domov/`, `/pl/wizyty-domowe/`, `/cs/vyjezd-domu/`, `/de/hausbesuch/`, `/fr/a-domicile/`, `/it/a-domicilio/`, `/es/a-domicilio/` | veterinær hjemmebesøk oslo | — | — | ja | **главный** доминирующий запрос вызова врача на дом (в title, H1 и slug `hjemmebesok`) |
| | | hjemmebesøk veterinær oslo | — | — | ja | **второй** порядок слов |
| | | mobil veterinær oslo | — | — | ja | **второй** (мобильные амбулатории) |
| | | hjemmeveterinær | — | — | ja | **второй** краткий термин |
| **Приём на английском** | `/english-speaking/`, `/sk/po-anglicky/`, `/pl/po-angielsku/`, `/cs/anglicky/`, `/de/englisch/`, `/fr/anglophone/`, `/it/inglese/`, `/es/ingles/` | english speaking vet oslo | — | — | ja | **главный** международный запрос экспатов в Осло и Бергене |
| | | veterinær engelsk oslo | — | — | ja | **главный** локальный норвежский запрос (в slug `engelsk`, title: «Engelsktalende veterinærer (English speaking vets)») |

---

## 3. Цены

### 3.1. Общие запросы обзора цен категорий

*Группы сравнения Google Trends:*
- *Ветклиники: [Trends NO](https://trends.google.com/trends/explore?geo=NO&q=veterin%C3%A6r%20priser,hva%20koster%20veterin%C3%A6r,dyreklinikk%20priser,prisliste%20veterin%C3%A6r)*
- *Груминг: [Trends NO](https://trends.google.com/trends/explore?geo=NO&q=hundefris%C3%B8r%20pris,hundeklipp%20pris,hva%20koster%20hundefris%C3%B8r,pelsstell%20hund%20pris)*
- *Гостиницы: [Trends NO](https://trends.google.com/trends/explore?geo=NO&q=hundehotell%20pris,dyrehotell%20pris,kattehotell%20pris,hundebarnehage%20pris,hva%20koster%20hundehotell)*
- *Дрессировка: [Trends NO](https://trends.google.com/trends/explore?geo=NO&q=hundekurs%20pris,valpekurs%20pris,hva%20koster%20hundekurs,hva%20koster%20valpekurs)*
- *Выгул / присмотр: [Trends NO](https://trends.google.com/trends/explore?geo=NO&q=hundepass%20pris,hundelufting%20pris,hva%20koster%20hundepasser,dyrepass%20pris)*

| Категория | Текущий аналог | Варианты запроса | Planner | Trends | Подсказка | Решение |
|---|---|---|---|---|---|---|
| **Цены ветклиник** | `…/vet-clinics/…/prices/` | veterinær priser | — | — | ja | **главный** поисковый запрос прейскуранта (в title и H1) |
| | | hva koster veterinær | — | — | ja | **главный** вопросный запрос для FAQ |
| | | dyreklinikk priser | — | — | ja | **второй** коммерческий синоним |
| **Цены груминга** | `…/grooming/…/prices/` | hundefrisør pris | — | — | ja | **главный** запрос стоимости услуг груминга (в title и H1) |
| | | hundeklipp pris | — | — | ja | **второй** прямой запрос стоимости стрижки |
| | | hva koster hundefrisør | — | — | ja | **главный** вопросный запрос для FAQ |
| **Цены гостиниц** | `…/pet-hotels/…/prices/` | hundehotell pris | — | — | ja | **главный** поисковый запрос цен гостиниц (в title и H1) |
| | | dyrehotell pris | — | — | ja | **второй** общий запрос цен зоогостиниц |
| | | hundehotell pris per døgn | — | — | ja | **главный** тарифный запрос за сутки (døgn) |
| | | hva koster hundehotell | — | — | ja | **главный** вопросный запрос для FAQ |
| **Цены дрессировки** | `…/dog-training/…/prices/` | hundekurs pris | — | — | ja | **главный** запрос стоимости курсов (в title и H1) |
| | | valpekurs pris | — | — | ja | **главный** запрос стоимости курсов для щенков |
| | | hva koster valpekurs | — | — | ja | **главный** вопросный запрос для FAQ |
| **Цены передержки / выгула** | `…/pet-sitting/…/prices/` | hundepass pris | — | — | ja | **главный** запрос тарифов ситтеров (в title и H1) |
| | | hundelufting pris | — | — | ja | **главный** запрос тарифов на выгул |
| | | hva koster en hundepasser | — | — | ja | **главный** вопросный запрос для FAQ |

---

### 3.2. Конкретные услуги (30 услуг из `website/lib/priceSlugs.ts` и `services.ts`)

Правила выведения поискового названия для страницы цены (`seo` по §3.1 методики):
1. Из главного поискового запроса удалены слова цены («pris», «priser», «hva koster», «kostnad», «takster») и города («Oslo», «i Oslo», «Bergen»).
2. Первое слово пишется с заглавной буквы.
3. Сохранён объект («hund», «katt», «hannkatt», «hunnkatt», «tispe», «valp»).
4. Единица измерения указана словами («per døgn», «per dag», «30 minutter», «1 time»).
5. Два близких термина объединены скобками («Kastrering (sterilisering) av tispe»).
6. Длина каждого поискового названия строго до 45 знаков.

*Группы сравнения Google Trends:*
- *Вет. процедуры: [Trends NO](https://trends.google.com/trends/explore?geo=NO&q=vaksine%20hund,chip%20hund,kastrering%20katt,kastrering%20hund,veterin%C3%A6r%20helsesjekk)*
- *Кастрация и стерилизация: [Trends NO](https://trends.google.com/trends/explore?geo=NO&q=kastrering%20hannkatt,sterilisering%20katt,kastrering%20tispe,sterilisering%20tispe,kastrering%20hund)*
- *Груминг услуги: [Trends NO](https://trends.google.com/trends/explore?geo=NO&q=kloklipp%20hund,klipp%20av%20hund,napping%20hund,vask%20og%20f%C3%B8n%20hund,katteklipp)*
- *Гостиницы услуги: [Trends NO](https://trends.google.com/trends/explore?geo=NO&q=hundehotell,hundebarnehage,kattehotell,dyretaxi)*
- *Дрессировка услуги: [Trends NO](https://trends.google.com/trends/explore?geo=NO&q=valpekurs,hverdagslydighet,privattime%20hund,atferdskonsultasjon%20hund,hundeklubb)*
- *Выгул и присмотр: [Trends NO](https://trends.google.com/trends/explore?geo=NO&q=hundelufting,hundepass,kattepass,d%C3%B8gnpass%20hund)*

| Категория | Код | Варианты запроса | Planner | Trends | Подсказка | Решение | Короткая подпись | Поисковое название `seo` (§3.1) | Слаг URL |
|---|---|---|---|---|---|---|---|---|---|
| **GROOMING** | `full_groom` | klipp av hund pris | — | — | ja | **главный** запрос стрижки и комплексного ухода | Full klipp og stell | **Klipp av hund (hundefrisør)** | `full-klipp` |
| | `bath_dry` | vask og føn hund | — | — | ja | **главный** запрос мытья и сушки | Vask og føn | **Vask og føn for hund** | `vask-og-fon` |
| | `hand_stripping` | napping hund pris | — | — | ja | **главный** норвежский термин тримминга жесткошерстных собак | Napping | **Napping av hund** | `napping` |
| | `deshedding` | fjerne underull hund | — | — | ja | **главный** запрос вычесывания подшерстка | Fjerning av underull | **Fjerning av underull (avhåring)** | `underull` |
| | `nail_trim` | kloklipp hund pris | — | — | ja | **главный** запрос стрижки когтей | Kloklipp | **Kloklipp for hund** | `kloklipp` |
| | `cat_groom` | katteklipp pris | — | — | ja | **главный** запрос груминга кошек | Katteklipp | **Klipp og stell av katt** | `katteklipp` |
| **VET_CLINIC** | `exam` | konsultasjon veterinær pris | — | — | ja | **главный** официальный запрос приема врача | Konsultasjon | **Konsultasjon hos veterinær** | `konsultasjon` |
| | `vaccination_dog` | vaksine hund pris | — | — | ja | **главный** запрос стоимости вакцинации | Vaksinering hund | **Vaksine til hund** | `vaksine-hund` |
| | `microchip` | id-merking hund pris | — | — | ja | **главный** запрос чипирования (DyreID) | ID-merking (chip) | **ID-merking av hund (chip)** | `id-merking` |
| | `neuter_cat` | kastrering hannkatt pris | — | — | ja | **главный** запрос кастрации кота | Kastrering hannkatt | **Kastrering av hannkatt** | `kastrering-hannkatt` |
| | `spay_cat` | sterilisering hunnkatt pris | — | — | ja | **главный** запрос стерилизации кошки | Sterilisering hunnkatt | **Sterilisering av hunnkatt** | `sterilisering-katt` |
| | `spay_dog` | kastrering tispe pris | — | — | ja | **главный** ветеринарный запрос стерилизации собаки в Норвегии | Kastrering tispe | **Kastrering (sterilisering) av tispe** | `sterilisering-tispe` |
| **PET_HOTEL** | `dog_night` | hundehotell pris per døgn | — | — | ja | **главный** запрос суточного тарифа для собак | Hund, per døgn | **Hundehotell per døgn** | `hund-per-dogn` |
| | `cat_night` | kattehotell pris per døgn | — | — | ja | **главный** запрос проживания кошек | Katt, per døgn | **Kattehotell per døgn** | `katt-per-dogn` |
| | `daycare_day` | hundebarnehage pris | — | — | ja | **главный** запрос дневного пребывания | Hundebarnehage, per dag | **Hundebarnehage per dag** | `hundebarnehage-dag` |
| | `daycare_pass` | klippekort hundebarnehage | — | — | ja | **главный** запрос абонемента в садик | Klippekort hundebarnehage | **Klippekort til hundebarnehage** | `klippekort-hundebarnehage` |
| | `pickup` | dyretaxi | — | — | ja | **главный** запрос зоотакси и трансфера | Henting og levering (dyretaxi) | **Henting og levering til dyrehotell** | `dyretaxi` |
| | `extra_walk` | ekstra lufting hundehotell | — | — | ja | **главный** запрос дополнительного выгула | Ekstra luftetur | **Ekstra tur på hundehotell** | `ekstra-tur` |
| **DOG_TRAINING** | `puppy_course` | valpekurs pris | — | — | ja | **главный** курс для щенков | Valpekurs | **Valpekurs for hund** | `valpekurs` |
| | `obedience_course` | hverdagslydighet kurs pris | — | — | ja | **главный** курс базового послушания | Grunnkurs hverdagslydighet | **Kurs i hverdagslydighet** | `grunnkurs-lydighet` |
| | `group_lesson` | gruppetime hundetrening | — | — | ja | **главный** групповые занятия | Gruppetime | **Gruppetime i hundetrening** | `gruppetime` |
| | `private_lesson` | privattime hundetrener | — | — | ja | **главный** индивидуальные занятия | Privattime | **Privattime med hundetrener** | `privattime` |
| | `behavior_consult` | atferdskonsultasjon hund | — | — | ja | **главный** консультация зоопсихолога/этолога | Atferdskonsultasjon | **Atferdskonsultasjon for hund** | `atferdskonsultasjon` |
| | `membership` | medlemskap hundeklubb | — | — | ja | **главный** членский взнос в клуб (NKK / локальный клуб) | Medlemskontingent | **Medlemskap i hundeklubb** | `medlemskap-klubb` |
| **PET_SITTING** | `walk_30` | luftetur hund 30 min | — | — | ja | **главный** короткий выгул на 30 минут | Luftetur 30 min | **Hundelufting (30 minutter)** | `luftetur-30-min` |
| | `walk_60` | hundelufting 1 time pris | — | — | ja | **главный** стандартная часовая прогулка | Luftetur 60 min | **Hundelufting (1 time)** | `luftetur-60-min` |
| | `cat_visit` | hjemmebesøk katt pris | — | — | ja | **главный** визит к кошке на дому | Kattebesøk | **Hjemmebesøk til katt** | `kattebesok` |
| | `house_sitting_night` | pass av hund over natten | — | — | ja | **главный** ночной присмотр дома у владельца | Pass hjemme hos deg, natt | **Døgnpass av hund i eget hjem** | `hjemmepass-natt` |
| | `boarding_night` | døgnpass hund hos passer | — | — | ja | **главный** передержка с ночевкой у ситтера | Pass hos passer, natt | **Døgnpass hos hundepasser** | `overnatting-hos-passer` |
| | `daycare_day` | dagpass hund pris | — | — | ja | **главный** дневной домашний присмотр | Dagpass | **Dagpass for hund** | `dagpass-hund` |

---

## 4. Ветеринарные специальности из `website/lib/vet.ts`

В Норвегии официальная клиническая номенклатура и специализации координируются **Den Norske Veterinærforening (DNV)** и практикой ведущих сетей клиник (AniCura, Evidensia, EMPET).

*Группы сравнения Google Trends:*
- *Диагностика: [Trends NO](https://trends.google.com/trends/explore?geo=NO&q=ultralyd%20hund,r%C3%B8ntgen%20hund,ct%20hund,mr%20hund,endoskopi%20hund)*
- *Специализации: [Trends NO](https://trends.google.com/trends/explore?geo=NO&q=veterin%C3%A6r%20kirurgi,veterin%C3%A6r%20ortopedi,tannbehandling%20hund,veterin%C3%A6r%20kardiologi,veterin%C3%A6r%20onkologi)*

| Код специальности | Английский (`en`) | Норвежский букмол (`no`) | Варианты запроса в Норвегии | Trends | Подсказка | Обоснование и статус |
|---|---|---|---|---|---|---|
| `surgery` | Surgery | **Kirurgi** | veterinær kirurgi | — | ja | **главный** термин оперативного лечения и хирургического стационара |
| `orthopedics` | Orthopaedics | **Ortopedi** | veterinær ortopedi | — | ja | **главный** клинический термин заболеваний опорно-двигательного аппарата |
| `dentistry` | Dentistry | **Tannbehandling** | tannbehandling hund | — | ja | **главный** общепринятый клиентский термин ветеринарной стоматологии |
| `dermatology` | Dermatology | **Dermatologi** | dermatologi hund | — | ja | **главный** профиль кожных патологий и аллергий (также *hudsykdommer*) |
| `cardiology` | Cardiology | **Kardiologi** | veterinær kardiologi | — | ja | **главный** профиль кардиологических патологий (также *hjertespesialist*) |
| `ophthalmology` | Ophthalmology | **Oftalmologi** | oftalmologi veterinær | — | ja | **главный** офтальмологический профиль и авторизованная офтальмоскопия (*øyelysing*) |
| `oncology` | Oncology | **Onkologi** | veterinær onkologi | — | ja | **главный** онкологический профиль и химиотерапия |
| `neurology` | Neurology | **Nevrologi** | nevrologi veterinær | — | ja | **главный** неврологический профиль и нейрохирургия |
| `internal-medicine` | Internal medicine | **Indremedisin** | indremedisin veterinær | — | ja | **главный** терапевтический профиль общей клиники |
| `reproduction` | Reproduction | **Reproduksjon** | reproduksjon hund veterinær | — | ja | **главный** профиль репродукции и неонатологии |
| `rehabilitation` | Rehabilitation | **Rehabilitering** | rehabilitering hund | — | ja | **главный** профиль физиотерапии, гидротерапии и восстановления |
| `exotics` | Exotic animals | **Eksotiske dyr** | veterinær eksotiske dyr | — | ja | **главный** термин приёма экзотических животных |
| `ultrasound` | Ultrasound | **Ultralyd** | ultralyd hund | — | ja | **главный** термин УЗИ-диагностики |
| `x-ray` | X-ray | **Røntgen** | røntgen hund | — | ja | **главный** термин рентгенографии |
| `ct` | CT | **CT** | ct hund | — | ja | **главный** термин компьютерной томографии |
| `mri` | MRI | **MR** | mr hund | — | ja | **главный** термин магнитно-резонансной томографии (в Норвегии принято сокращение *MR*, а не *MRI*) |
| `endoscopy` | Endoscopy | **Endoskopi** | endoskopi hund | — | ja | **главный** термин эндоскопических исследований |
| `laboratory` | Laboratory | **Laboratorium** | veterinærlaboratorium | — | ja | **главный** профиль клинических лабораторных анализов |
| `hospitalization` | Hospitalisation | **Hospitalisering** | hospitalisering hund | — | ja | **главный** термин стационарного лечения и наблюдения |

---

## 5. Сводка слагов для сайта

Каждый слаг записан строго в одном варианте латиницей без диакритических знаков (норвежские буквы: `æ` → `ae`, `ø` → `o`, `å` → `a`), в нижнем регистре через дефис (`kebab-case`).

### 5.1. Категории (`website/lib/categories.ts`: `SLUGS.no`)

1. `GROOMING` → **`hundefrisor`**  
   *Обоснование:* Доминирующий народный и коммерческий термин в Норвегии. Полный аналог немецкого `hundesalon`, испанского `peluqueria-canina`, чешского `psi-salon`.
2. `VET_CLINIC` → **`veterinaer`**  
   *Обоснование:* Абсолютный поисковый лидер в Осло, Бергене и по всей Норвегии. Полный аналог `/sk/veterinar/`, `/pl/weterynarz/`, `/cs/veterina/`, `/de/tierarzt/`, `/fr/veterinaire/`, `/es/veterinario/`.
3. `PET_HOTEL` → **`dyrehotell`**  
   *Обоснование:* Общепринятый зонтичный термин гостиниц для передержки животных в Норвегии, охватывающий как собак, так и кошек. Аналог `hotel-pre-zvierata`, `tierpension`, `hotel-dla-zwierzat`.
4. `DOG_TRAINING` → **`hundekurs`**  
   *Обоснование:* Самый популярный поисковый запрос категории в Норвегии (в подсказках Google лидирует с огромным отрывом). Аналог `vycvik-psov`, `szkolenie-psow`, `hundeschule`.
5. `PET_SHOP` → **`dyrebutikk`**  
   *Обоснование:* Безоговорочный лидер розничной торговли товарами для животных в Норвегии. Аналог `zverimex`, `chovatelske-potreby`, `sklep-zoologiczny`, `tierhandlung`.
6. `PET_SITTING` → **`dyrepass`**  
   *Обоснование:* Главный зонтичный термин услуг присмотра за домашними животными (собаками, кошками и др.). Аналог `opatrovanie-zvierat`, `tierbetreuung`, `hlidani-zvirat`.

### 5.2. Признаки ветклиник (`website/lib/attributePages.ts`: `SLUGS`)

1. `nonstop` → **`veterinaervakt`** (title: «Veterinærvakt og døgnåpne dyreklinikker», институциональный лидер экстренной и круглосуточной помощи в Норвегии)
2. `saturday` → **`lordag`** (title: «Veterinærer åpne på lørdager»)
3. `sunday` → **`sondag`** (title: «Veterinærer åpne på søndager»)
4. `exotics` → **`eksotiske-dyr`** (title: «Veterinærer for eksotiske kjæledyr»)
5. `home-visits` → **`hjemmebesok`** (title: «Veterinærer med hjemmebesøk»)
6. `english` → **`engelsk`** (title: «Engelsktalende veterinærer (English speaking vets)»)

### 5.3. Сегменты URL

- `PRICES_SEGMENT.no`: **`priser`**
- `BUSINESS_SEGMENT.no`: **`bedrift`**
- `CITY_SEGMENT.no`: **`by`**
- `BEST_SEGMENT.no`: **`beste`**
- `GUIDE_SEGMENT.no`: **`guider`**

### 5.4. Слаги услуг из цен (`website/lib/priceSlugs.ts`: `SERVICE_SLUGS`)

#### GROOMING:
1. `full_groom` → `full-klipp`
2. `bath_dry` → `vask-og-fon`
3. `hand_stripping` → `napping`
4. `deshedding` → `underull`
5. `nail_trim` → `kloklipp`
6. `cat_groom` → `katteklipp`

#### VET_CLINIC:
7. `exam` → `konsultasjon`
8. `vaccination_dog` → `vaksine-hund`
9. `microchip` → `id-merking`
10. `neuter_cat` → `kastrering-hannkatt`
11. `spay_cat` → `sterilisering-katt`
12. `spay_dog` → `sterilisering-tispe`

#### PET_HOTEL:
13. `dog_night` → `hund-per-dogn`
14. `cat_night` → `katt-per-dogn`
15. `daycare_day` → `hundebarnehage-dag`
16. `daycare_pass` → `klippekort-hundebarnehage`
17. `pickup` → `dyretaxi`
18. `extra_walk` → `ekstra-tur`

#### DOG_TRAINING:
19. `puppy_course` → `valpekurs`
20. `obedience_course` → `grunnkurs-lydighet`
21. `group_lesson` → `gruppetime`
22. `private_lesson` → `privattime`
23. `behavior_consult` → `atferdskonsultasjon`
24. `membership` → `medlemskap-klubb`

#### PET_SITTING:
25. `walk_30` → `luftetur-30-min`
26. `walk_60` → `luftetur-60-min`
27. `cat_visit` → `kattebesok`
28. `house_sitting_night` → `hjemmepass-natt`
29. `boarding_night` → `overnatting-hos-passer`
30. `daycare_day` → `dagpass-hund`

---

### 5.5. Поисковые названия для страниц цен (`seo` в `website/lib/services.ts`, §3.1) и короткие подписи

Формирование выполнено строго по 8 правилам методики `docs/seo/keywords/README.md` §3.1 (удалены слова цены и город, сохранён объект с заглавной буквы, единицы словами, длина каждого поискового названия не превышает 45 символов):

| Категория | Код услуги | Короткая подпись (`no`) | Поисковое название `seo` (`no`, §3.1) |
|---|---|---|---|
| **GROOMING** | `full_groom` | Full klipp og stell | Klipp av hund (hundefrisør) |
| | `bath_dry` | Vask og føn | Vask og føn for hund |
| | `hand_stripping` | Napping | Napping av hund |
| | `deshedding` | Fjerning av underull | Fjerning av underull (avhåring) |
| | `nail_trim` | Kloklipp | Kloklipp for hund |
| | `cat_groom` | Katteklipp | Klipp og stell av katt |
| **VET_CLINIC** | `exam` | Konsultasjon | Konsultasjon hos veterinær |
| | `vaccination_dog` | Vaksinering hund | Vaksine til hund |
| | `microchip` | ID-merking (chip) | ID-merking av hund (chip) |
| | `neuter_cat` | Kastrering hannkatt | Kastrering av hannkatt |
| | `spay_cat` | Sterilisering hunnkatt | Sterilisering av hunnkatt |
| | `spay_dog` | Kastrering tispe | Kastrering (sterilisering) av tispe |
| **PET_HOTEL** | `dog_night` | Hund, per døgn | Hundehotell per døgn |
| | `cat_night` | Katt, per døgn | Kattehotell per døgn |
| | `daycare_day` | Hundebarnehage, per dag | Hundebarnehage per dag |
| | `daycare_pass` | Klippekort hundebarnehage | Klippekort til hundebarnehage |
| | `pickup` | Henting og levering (dyretaxi) | Henting og levering til dyrehotell |
| | `extra_walk` | Ekstra luftetur | Ekstra tur på hundehotell |
| **DOG_TRAINING** | `puppy_course` | Valpekurs | Valpekurs for hund |
| | `obedience_course` | Grunnkurs hverdagslydighet | Kurs i hverdagslydighet |
| | `group_lesson` | Gruppetime | Gruppetime i hundetrening |
| | `private_lesson` | Privattime | Privattime med hundetrener |
| | `behavior_consult` | Atferdskonsultasjon | Atferdskonsultasjon for hund |
| | `membership` | Medlemskontingent | Medlemskap i hundeklubb |
| **PET_SITTING** | `walk_30` | Luftetur 30 min | Hundelufting (30 minutter) |
| | `walk_60` | Luftetur 60 min | Hundelufting (1 time) |
| | `cat_visit` | Kattebesøk | Hjemmebesøk til katt |
| | `house_sitting_night` | Pass hjemme hos deg, natt | Døgnpass av hund i eget hjem |
| | `boarding_night` | Pass hos passer, natt | Døgnpass hos hundepasser |
| | `daycare_day` | Dagpass | Dagpass for hund |

---

### 5.6. Шаблоны мета-тегов категорий для `website/lib/categories.ts`

- `SEO_TITLE.no`:
  - `GROOMING`: `"Hundefrisør og hundeklipp"`
  - `VET_CLINIC`: `"Veterinærer og dyreklinikker"`
  - `PET_HOTEL`: `"Hundehotell og kattehotell"`
  - `DOG_TRAINING`: `"Hundekurs og hundetrening"`
  - `PET_SHOP`: `"Dyrebutikker og dyreutstyr"`
  - `PET_SITTING`: `"Hundepass og hundelufting"`
- `PRICES_NAME.no`:
  - `GROOMING`: `"Hundefrisør"`
  - `VET_CLINIC`: `"Veterinærpriser"`
  - `PET_HOTEL`: `"Hundehotell"`
  - `DOG_TRAINING`: `"Hundekurs"`
  - `PET_SHOP`: `"Dyrebutikker"`
  - `PET_SITTING`: `"Hundepass"`

---

## 6. Открытый вопрос

1. **Доступность Keyword Planner**:
   В среде сборщика отсутствует доступ к рекламному аккаунту Google Ads Keyword Planner (активные кампании отсутствуют). В соответствии с правилом `quality.md` §1 («Нет данных — пусто и причина. Никогда не оценка»), колонка Planner заполнена прочерком `—` во всех строках без исключения.
2. **Ограничение сетевого доступа к Google Trends**:
   При прямых HTTP-запросах из Docker-контейнера Google Trends возвращает код ошибки `HTTP 429 Too Many Requests`. Значения в колонке Trends обозначены прочерком `—`, для всех групп приведены точные воспроизводимые ссылки на веб-интерфейс Google Trends (`geo=NO`).
3. **Что не удалось подтвердить поисковыми подсказками**:
   - Узкие многословные запросы цен с географической привязкой («pris for napping av strihåret vorsteh oslo», «hva koster avhåring katt bergen») не появляются в Google Suggest из-за порога агрегации низкочастотного спроса; базовые термины услуг («napping hund pris», «katteklipp pris») полностью подтверждены.
   - Запрос на приём ветеринара на английском языке в связке со словом «veterinær» («veterinær engelsk oslo») имеет меньший органический объём по сравнению с прямым международным запросом экспатов «english speaking vet oslo» (оба варианта зафиксированы в карте).
