# Ключевые слова: финский (`fi`) для Финляндии (базовый город — Helsinki)

Дата сбора: **2026-10-17**.  
Исследуемый регион: **Suomi (Финляндия, `geo=FI`)**, базовый город — **Helsinki (Хельсинки)**.  
Язык интерфейса — **финский (`fi`, `fi-FI`)**, шведский язык в рамках данной задачи не исследуется (согласно ТЗ задачи по `fi`).  
Источники данных:
- **Google Suggest API** (`google.fi`, `hl=fi`, `gl=fi`, UTF-8, режим инкогнито / официальный Google Suggest API) — проверены все базовые категории, атрибуты, услуги цен, специализации и гео-запросы по Хельсинки и другим городам Финляндии (Espoo, Tampere, Turku, Oulu).
- **Google Trends** (Финляндия, период: 12 месяцев, `geo=FI`, сравнение синонимов внутри смысловых групп до 5 вариантов).  
  *Примечание о доступности:* При прямом автоматизированном запросе из среды CLI Google Trends возвращает код `HTTP 429 Too Many Requests` (сетевое ограничение Google по IP). В соответствии с правилами `docs/playbooks/quality.md` §1 (правило 1 «Нет данных — пусто и причина. Никогда не оценка») числовые значения в колонке Trends обозначены прочерком `—`, а для каждой группы предоставлена прямая URL-ссылка на исследование в интерфейсе Google Trends (`trends.google.com/trends/explore?geo=FI&q=…`), чтобы оркестратор и проверяющий могли валидировать сравнение в браузере.
- **Google Ads Keyword Planner**: нет доступа к аккаунту в рабочей среде (в соответствии с правилами `docs/playbooks/quality.md` §§1–2 и методикой `docs/seo/keywords/README.md` колонка Planner помечена `—` во всех строках; исследование проведено по шагам 2–3 методики).
- **Официальная номенклатура и профессиональные стандарты в Финляндии**:
  - **Ruokavirasto** (Finnish Food Authority / Финское агентство продовольствия) — официальный государственный реестр собак и кошек (*Koirarekisteri*, *Kissarekisteri*), правила чипирования, вакцинации от бешенства и оформления ветеринарных паспортов ЕС (*EU-lemmikkieläinpassi*).
  - **Suomen Eläinlääkäriliitto** (Финская ветеринарная ассоциация / Fennovet) — стандарты клинической практики, прейскуранты и названия ветеринарных процедур.
  - **Suomen Kennelliitto** (Финский кинологический союз) — стандарты дрессировки, кинологические клубы, курсы для щенков (*pentukurssi*) и базовая дрессировка (*arkitottelevaisuus*).
  - **Suomen Kissaliitto** (Финская федерация кошек).
  - **Helsingin yliopiston Eläinlääketieteellinen tiedekunta / Yliopistollinen eläinsairaala (Viikki)** — крупнейший ветеринарный госпиталь и круглосуточная клиника неотложной помощи в Хельсинки.
  - Прайс-листы и номенклатура ведущих ветеринарных и груминг-сетей Финляндии: **Evidensia Eläinlääkäripalvelut** (включая Mevet, HauMau, Aurinkolahti), **Omaeläinklinikka**, **Musti ja Mirri** (салоны ухода и тримминга), **Peten Koiratarvike**.

> **Методика фиксации данных Trends и выбора слагов (`docs/playbooks/quality.md`, `README.md`):**  
> - Сравнение синонимов формируется в смысловых группах (до 5 вариантов).
> - Каждая группа сравнения снабжена прямой ссылкой на Google Trends по Финляндии (`geo=FI`) и по Хельсинки.
> - Если инструмент недоступен из контейнера (HTTP 429), в колонке Trends ставится `—`, а в описании PR и в разделе «Открытый вопрос» фиксируется причина. Никаких «примерных оценок» не допускается (`quality.md` §1).
> - Подтверждение реального поискового спроса фиксируется через поисковые подсказки Google Suggest (`gl=fi`, `hl=fi`), где запросы классифицируются по наличию подсказки и реальному узусу.
> - Согласно требованию задачи, каждый слаг выбирается строго в **ОДНОМ** варианте латиницей без диакритики (финские буквы «ä» и «ö» заменяются соответственно на «a» и «o» по правилам транслитерации URL), с подробным обоснованием выбора.

---

## 1. Категории

*Группы сравнения Google Trends:*
- *Ветклиники (Финляндия): [Trends FI](https://trends.google.com/trends/explore?geo=FI&q=el%C3%A4inl%C3%A4%C3%A4k%C3%A4ri,el%C3%A4inklinikka,el%C3%A4inl%C3%A4%C3%A4k%C3%A4riasema,el%C3%A4insairaala,p%C3%A4ivyst%C3%A4v%C3%A4%20el%C3%A4inl%C3%A4%C3%A4k%C3%A4ri)*  
  *в Хельсинки: [Trends Helsinki](https://trends.google.com/trends/explore?geo=FI&q=el%C3%A4inl%C3%A4%C3%A4k%C3%A4ri%20helsinki,el%C3%A4inklinikka%20helsinki,el%C3%A4inl%C3%A4%C3%A4k%C3%A4riasema%20helsinki,el%C3%A4insairaala%20helsinki)*
- *Груминг (Финляндия): [Trends FI](https://trends.google.com/trends/explore?geo=FI&q=koiran%20trimmaus,trimmaus,trimmaamo,koiratrimmaus,koiran%20pesu)*  
  *в Хельсинки: [Trends Helsinki](https://trends.google.com/trends/explore?geo=FI&q=koiran%20trimmaus%20helsinki,trimmaus%20helsinki,trimmaamo%20helsinki,kissan%20trimmaus%20helsinki)*
- *Отели и пансионы (Финляндия): [Trends FI](https://trends.google.com/trends/explore?geo=FI&q=koirahoitola,lemmikkihoitola,koirahotelli,koirap%C3%A4iv%C3%A4koti,kissahoitola)*  
  *в Хельсинки: [Trends Helsinki](https://trends.google.com/trends/explore?geo=FI&q=koirahoitola%20helsinki,koirahotelli%20helsinki,koirap%C3%A4iv%C3%A4koti%20helsinki,lemmikkihoitola%20helsinki)*
- *Дрессировка (Финляндия): [Trends FI](https://trends.google.com/trends/explore?geo=FI&q=koirakoulu,koirankoulutus,koirankouluttaja,pentukurssi,koiran%20koulutus)*  
  *в Хельсинки: [Trends Helsinki](https://trends.google.com/trends/explore?geo=FI&q=koirakoulu%20helsinki,koirankoulutus%20helsinki,koirankouluttaja%20helsinki,pentukurssi%20helsinki)*
- *Зоомагазины (Финляндия): [Trends FI](https://trends.google.com/trends/explore?geo=FI&q=el%C3%A4inkauppa,lemmikkikauppa,lemmikkitarvike,lemmikkitarvikeliike,el%C3%A4intarvikeliike)*  
  *в Хельсинки: [Trends Helsinki](https://trends.google.com/trends/explore?geo=FI&q=el%C3%A4inkauppa%20helsinki,lemmikkikauppa%20helsinki,lemmikkitarvikeliike%20helsinki)*
- *Передержка и выгул (Финляндия): [Trends FI](https://trends.google.com/trends/explore?geo=FI&q=koiranhoitaja,koiran%20ulkoilutus,lemmikinhoitaja,koiranulkoiluttaja,dog%20sitter)*  
  *в Хельсинки: [Trends Helsinki](https://trends.google.com/trends/explore?geo=FI&q=koiranhoitaja%20helsinki,koiran%20ulkoilutus%20helsinki,lemmikinhoitaja%20helsinki,koiranhoito%20helsinki)*

| Смысл | Текущий аналог (EN / SK / PL / CS / DE / FR / IT / ES) | Варианты запроса | Planner | Trends (0–100) | Подсказка | Решение |
|---|---|---|---|---|---|---|
| **Ветеринар** | `/vet-clinics/`, `/sk/veterinar/`, `/pl/weterynarz/`, `/cs/veterina/`, `/de/tierarzt/`, `/fr/veterinaire/`, `/it/veterinario/`, `/es/veterinario/` | eläinlääkäri helsinki | — | — | kyllä | **главный** абсолютный поисковый лидер (в title, H1 и slug `elainlaakari`) |
| | | eläinklinikka helsinki | — | — | kyllä | **второй** (официальные клиники и амбулатории: в title и тексты) |
| | | eläinlääkäriasema helsinki | — | — | kyllä | **второй** (распространенное официальное название коммерческих клиник в Финляндии) |
| | | eläinsairaala helsinki | — | — | kyllä | **второй** (крупные круглосуточные госпитали: Mevet, Viikki) |
| | | päivystävä eläinlääkäri helsinki | — | — | kyllä | **второй** (дежурный врач неотложной помощи) |
| **Груминг** | `/grooming/`, `/sk/psi-salon/`, `/pl/groomer/`, `/cs/psi-salon/`, `/de/hundesalon/`, `/fr/toilettage/`, `/it/toelettatura/`, `/es/peluqueria-canina/` | koiran trimmaus helsinki | — | — | kyllä | **главный** запрос услуги стрижки и ухода (в title: «Koiran trimmaus ja trimmaamot») |
| | | trimmaus helsinki | — | — | kyllä | **главный** краткий запрос категории (в title, H1 и slug `trimmaus`) |
| | | trimmaamo helsinki | — | — | kyllä | **главный** термин самого салона груминга в Финляндии (в LABELS: «Trimmaamot») |
| | | koira trimmaamo helsinki | — | — | kyllä | **второй** (по Suggest: «koira trimmaamo helsinki») |
| | | koiratrimmaus helsinki | — | — | kyllä | **второй** слитный разговорный вариант |
| | | kissan trimmaus helsinki | — | — | kyllä | **главный** для груминга кошек |
| | | koiran pesu helsinki | — | — | kyllä | **второй** (гигиеническое мытье собак) |
| | | koirasalonki helsinki | — | — | ei | **нет** (редкая калька, узус закрепил «trimmaamo») |
| **Гостиница** | `/pet-hotels/`, `/sk/hotel-pre-zvierata/`, `/pl/hotel-dla-zwierzat/`, `/cs/hotel-pro-zvirata/`, `/de/tierpension/`, `/fr/pension-animaux/`, `/it/pensione-animali/`, `/es/residencia-canina/` | koirahoitola helsinki | — | — | kyllä | **главный** доминирующий термин гостиниц и пансионов для собак в Финляндии (в title, H1 и slug `koirahoitola`) |
| | | lemmikkihoitola helsinki | — | — | kyllä | **второй** зонтичный термин для всех видов домашних животных (в title и тексты) |
| | | koirahotelli helsinki | — | — | kyllä | **второй** популярный коммерческий термин городского отеля для собак |
| | | koirapäiväkoti helsinki | — | — | kyllä | **главный** для дневного пребывания / daycare (в title и тексты) |
| | | kissahoitola helsinki | — | — | kyllä | **главный** для гостиниц кошек |
| **Дрессировка** | `/dog-training/`, `/sk/vycvik-psov/`, `/pl/szkolenie-psow/`, `/cs/vycvik-psu/`, `/de/hundeschule/`, `/fr/dressage-chien/`, `/it/addestramento-cani/`, `/es/adiestramiento-canino/` | koirakoulu helsinki | — | — | kyllä | **главный** абсолютный поисковый лидер обучения собак (в title, H1 и slug `koirakoulu`) |
| | | koirankoulutus helsinki | — | — | kyllä | **главный** процессный запрос дрессировки (в title: «Koirakoulut ja koirankoulutus») |
| | | koirankouluttaja helsinki | — | — | kyllä | **второй** (поиск частного специалиста-инструктора) |
| | | pentukurssi helsinki | — | — | kyllä | **главный** курс для щенков (высокий коммерческий спрос) |
| | | arkitottelevaisuuskurssi | — | — | kyllä | **второй** стандартный финский курс базового послушания |
| | | koiran koulutus helsinki | — | — | kyllä | **второй** раздельный вариант написания |
| **Зоомагазин** | `/pet-shops/`, `/sk/chovatelske-potreby/`, `/pl/sklep-zoologiczny/`, `/cs/zverimex/`, `/de/tierhandlung/`, `/fr/animalerie/`, `/it/negozio-animali/`, `/es/tienda-de-mascotas/` | eläinkauppa helsinki | — | — | kyllä | **главный** традиционный и повсеместный запрос зоомагазина (в title, H1 и slug `elainkauppa`) |
| | | lemmikkikauppa helsinki | — | — | kyllä | **второй** современный коммерческий термин (в title: «Eläinkaupat ja lemmikkitarvikkeet») |
| | | lemmikkitarvikekauppa helsinki | — | — | kyllä | **второй** (по Suggest: «lemmikkitarvikekauppa helsinki») |
| | | lemmikkitarvikeliike helsinki | — | — | kyllä | **второй** специализированный розничный магазин |
| | | eläintarvikeliike | — | — | kyllä | **второй** |
| | | lemmikkiliike helsinki | — | — | kyllä | **второй** |
| **Передержка / выгул** | `/pet-sitting/`, `/sk/opatrovanie-zvierat/`, `/pl/opieka-nad-zwierzetami/`, `/cs/hlidani-zvirat/`, `/de/tierbetreuung/`, `/fr/garde-animaux/`, `/it/dog-sitter/`, `/es/cuidador-de-perros/` | koiranhoitaja helsinki | — | — | kyllä | **главный** поисковый запрос специалиста по уходу и присмотру (в title, H1 и slug `koiranhoitaja`) |
| | | koiran ulkoilutus helsinki | — | — | kyllä | **главный** запрос услуги выгула собак (в title: «Koiranhoitajat ja koiran ulkoilutus») |
| | | lemmikinhoitaja helsinki | — | — | kyllä | **второй** общий термин присмотра за животными |
| | | koiranhoitaja kotiin helsinki | — | — | kyllä | **главный** запрос присмотра дома у заказчика |
| | | koiranulkoiluttaja helsinki | — | — | kyllä | **второй** (поиск выгульщика) |
| | | koiranhoito helsinki | — | — | kyllä | **второй** процессный синоним |
| | | dog sitter helsinki | — | — | kyllä | **второй** международный термин в Хельсинки среди экспатов |
| | | kissanhoitaja helsinki | — | — | kyllä | **главный** для ситтеров кошек |

---

## 2. Признаки ветклиник

*Группы сравнения Google Trends:*
- *Круглосуточно / неотложка (Финляндия): [Trends FI](https://trends.google.com/trends/explore?geo=FI&q=el%C3%A4inl%C3%A4%C3%A4k%C3%A4rip%C3%A4ivystys,el%C3%A4inl%C3%A4%C3%A4k%C3%A4ri%20p%C3%A4ivystys,p%C3%A4ivyst%C3%A4v%C3%A4%20el%C3%A4inl%C3%A4%C3%A4k%C3%A4ri,el%C3%A4inl%C3%A4%C3%A4k%C3%A4ri%2024h)*
- *Суббота (Финляндия): [Trends FI](https://trends.google.com/trends/explore?geo=FI&q=el%C3%A4inl%C3%A4%C3%A4k%C3%A4ri%20lauantai,el%C3%A4inl%C3%A4%C3%A4k%C3%A4ri%20avoinna%20lauantaina,el%C3%A4inklinikka%20lauantai)*
- *Воскресенье (Финляндия): [Trends FI](https://trends.google.com/trends/explore?geo=FI&q=el%C3%A4inl%C3%A4%C3%A4k%C3%A4ri%20sunnuntai,el%C3%A4inl%C3%A4%C3%A4k%C3%A4ri%20avoinna%20sunnuntaina,el%C3%A4inl%C3%A4%C3%A4k%C3%A4ri%20viikonloppu)*
- *Экзоты и рептилии (Финляндия): [Trends FI](https://trends.google.com/trends/explore?geo=FI&q=eksoottiset%20el%C3%A4imet%20el%C3%A4inl%C3%A4%C3%A4k%C3%A4ri,matelijat%20el%C3%A4inl%C3%A4%C3%A4k%C3%A4ri,kani%20el%C3%A4inl%C3%A4%C3%A4k%C3%A4ri,el%C3%A4inl%C3%A4%C3%A4k%C3%A4ri%20matelija)*
- *Выезд на дом (Финляндия): [Trends FI](https://trends.google.com/trends/explore?geo=FI&q=el%C3%A4inl%C3%A4%C3%A4k%C3%A4ri%20kotik%C3%A4ynti,kotik%C3%A4ynti%20el%C3%A4inl%C3%A4%C3%A4k%C3%A4ri,el%C3%A4inl%C3%A4%C3%A4k%C3%A4rin%20kotik%C3%A4ynti)*
- *Приём на английском (Финляндия): [Trends FI](https://trends.google.com/trends/explore?geo=FI&q=el%C3%A4inl%C3%A4%C3%A4k%C3%A4ri%20englanniksi,english%20speaking%20vet%20helsinki,vet%20in%20english%20helsinki)*

| Смысл | Текущий аналог (EN / SK / PL / CS / DE / FR / IT / ES) | Варианты запроса | Planner | Trends (0–100) | Подсказка | Решение |
|---|---|---|---|---|---|---|
| **Круглосуточно / неотложка** | `/nonstop/`, `/sk/nonstop/`, `/pl/calodobowy/`, `/cs/nonstop/`, `/de/notdienst/`, `/fr/urgence/`, `/it/pronto-soccorso/`, `/es/urgencias/` | eläinlääkäripäivystys helsinki | — | — | kyllä | **главный** медицинский термин дежурной службы экстренной помощи (в title, H1 и slug `paivystys`) |
| | | eläinlääkäri päivystys helsinki | — | — | kyllä | **главный** раздельный вариант написания |
| | | päivystävä eläinlääkäri helsinki | — | — | kyllä | **второй** (поиск дежурного врача: в title и тексты) |
| | | eläinlääkäri 24h helsinki | — | — | kyllä | **второй** народный запрос круглосуточного режима («Päivystävät eläinlääkärit ja 24h-päivystys») |
| **Суббота** | `/open-saturday/`, `/sk/sobota/`, `/pl/sobota/`, `/cs/sobota/`, `/de/samstag/`, `/fr/samedi/`, `/it/sabato/`, `/es/sabado/` | eläinlääkäri lauantai helsinki | — | — | kyllä | **главный** для субботы (в title, H1 и slug `lauantai`) |
| | | eläinlääkäri avoinna lauantaina | — | — | kyllä | **второй** (уточнение часов приёма) |
| | | eläinklinikka lauantai | — | — | kyllä | **второй** |
| **Воскресенье** | `/open-sunday/`, `/sk/nedela/`, `/pl/niedziela/`, `/cs/nedele/`, `/de/sonntag/`, `/fr/dimanche/`, `/it/domenica/`, `/es/domingo/` | eläinlääkäri sunnuntai helsinki | — | — | kyllä | **главный** для воскресенья (в title, H1 и slug `sunnuntai`) |
| | | eläinlääkäri avoinna sunnuntaina | — | — | kyllä | **второй** (поиск работающих клиник) |
| | | eläinlääkäri viikonloppu helsinki | — | — | kyllä | **второй** общий запрос приёма в выходные дни |
| **Экзоты и рептилии** | `/exotic-animals/`, `/sk/exoticke-zvierata/`, `/pl/zwierzeta-egzotyczne/`, `/cs/exoticka-zvirata/`, `/de/exoten/`, `/fr/nac/`, `/it/esotici/`, `/es/exoticos/` | eksoottiset eläimet eläinlääkäri helsinki | — | — | kyllä | **главный** профессиональный и поисковый запрос (в title, H1 и slug `eksoottiset-elaimet`) |
| | | kani eläinlääkäri helsinki | — | — | kyllä | **второй** (кролики и мелкие млекопитающие) |
| | | matelija eläinlääkäri helsinki | — | — | kyllä | **второй** (рептилии) |
| | | eläinlääkäri eksoottiset eläimet | — | — | kyllä | **второй** |
| | | jyrsijä eläinlääkäri | — | — | kyllä | **второй** (грызуны) |
| **Выезд на дом** | `/home-visits/`, `/sk/vyjazd-domov/`, `/pl/wizyty-domowe/`, `/cs/vyjezd-domu/`, `/de/hausbesuch/`, `/fr/a-domicile/`, `/it/a-domicilio/`, `/es/a-domicilio/` | eläinlääkäri kotikäynti helsinki | — | — | kyllä | **главный** доминирующий запрос вызова врача на дом (в title, H1 и slug `kotikaynti`) |
| | | kotikäynti eläinlääkäri helsinki | — | — | kyllä | **второй** обратный порядок слов |
| | | eläinlääkärin kotikäynti | — | — | kyllä | **второй** грамматический синоним |
| **Приём на английском** | `/english-speaking/`, `/sk/po-anglicky/`, `/pl/po-angielsku/`, `/cs/anglicky/`, `/de/englisch/`, `/fr/anglophone/`, `/it/inglese/`, `/es/ingles/` | eläinlääkäri englanniksi | — | — | kyllä | **главный** финский поисковый запрос услуги на английском (в slug `englanniksi`) |
| | | english speaking vet helsinki | — | — | kyllä | **главный** международный запрос экспатов в столичном регионе (в title: «Englanninkieliset eläinlääkärit (English speaking vets)») |
| | | vet in english helsinki | — | — | kyllä | **второй** разговорный синоним |
| | | eläinlääkäri palvelua englanniksi | — | — | kyllä | **второй** формулировка на сайтах клиник |

---

## 3. Цены

### 3.1. Общие запросы обзора цен категорий

*Группы сравнения Google Trends:*
- *Ветклиники: [Trends FI](https://trends.google.com/trends/explore?geo=FI&q=el%C3%A4inl%C3%A4%C3%A4k%C3%A4ri%20hinnasto,el%C3%A4inl%C3%A4%C3%A4k%C3%A4ri%20hinta,el%C3%A4inl%C3%A4%C3%A4k%C3%A4rik%C3%A4ynti%20hinta,paljonko%20el%C3%A4inl%C3%A4%C3%A4k%C3%A4ri%20maksaa)*
- *Груминг: [Trends FI](https://trends.google.com/trends/explore?geo=FI&q=koiran%20trimmaus%20hinta,trimmaus%20hinnasto,trimmaus%20hinta,koiran%20pesu%20hinta)*
- *Гостиницы: [Trends FI](https://trends.google.com/trends/explore?geo=FI&q=koirahoitola%20hinta,koirahotelli%20hinta,koirap%C3%A4iv%C3%A4koti%20hinta,kissahoitola%20hinta)*
- *Дрессировка: [Trends FI](https://trends.google.com/trends/explore?geo=FI&q=koirakoulu%20hinta,koirankoulutus%20hinta,pentukurssi%20hinta,koirankouluttaja%20hinta)*
- *Выгул / присмотр: [Trends FI](https://trends.google.com/trends/explore?geo=FI&q=koiranhoitaja%20hinta,koiran%20ulkoilutus%20hinta,lemmikinhoitaja%20hinta,koiranhoito%20hinta)*

| Категория | Текущий аналог (EN / SK / PL / CS / DE / FR / IT / ES) | Варианты запроса | Planner | Trends (0–100) | Подсказка | Решение |
|---|---|---|---|---|---|---|
| **Цены ветклиник** | `…/vet-clinics/…/prices/` | eläinlääkäri hinnasto helsinki | — | — | kyllä | **главный** доминирующий запрос прейскуранта (в title и H1: «Eläinlääkärin hinnasto») |
| | | eläinlääkäri hinta | — | — | kyllä | **второй** коммерческий поисковый запрос |
| | | eläinlääkärikäynti hinta | — | — | kyllä | **второй** (стоимость визита к врачу) |
| | | paljonko eläinlääkäri maksaa | — | — | kyllä | **главный** вопросный инфо-запрос для FAQ |
| **Цены груминга** | `…/grooming/…/prices/` | koiran trimmaus hinta helsinki | — | — | kyllä | **главный** прямой поисковый запрос стоимости стрижки собаки (в title и H1: «Koiran trimmaus: hinnat») |
| | | trimmaus hinnasto | — | — | kyllä | **второй** коммерческий синоним прейскуранта салона |
| | | trimmaus hinta | — | — | kyllä | **второй** краткий запрос |
| | | trimmaamo hinnasto | — | — | kyllä | **второй** прейскурант груминг-салона |
| **Цены гостиниц** | `…/pet-hotels/…/prices/` | koirahoitola hinta helsinki | — | — | kyllä | **главный** запрос стоимости проживания собаки в гостинице (в title и H1: «Koirahoitola: hinnat») |
| | | koirahotelli hinta helsinki | — | — | kyllä | **второй** коммерческий запрос стоимости отеля |
| | | koirahoitola vuorokausihinta | — | — | kyllä | **главный** посуточный тариф (по Suggest: «koirahoitolan vuorokausimaksu») |
| | | kissahoitola hinta | — | — | kyllä | **главный** для кошачьих гостиниц |
| | | koirapäiväkoti hinta | — | — | kyllä | **главный** тариф дневного центра |
| **Цены дрессировки** | `…/dog-training/…/prices/` | koirakoulu hinta helsinki | — | — | kyllä | **главный** запрос стоимости курсов дрессировки (в title и H1: «Koirakoulu: hinnat») |
| | | koirankoulutus hinta | — | — | kyllä | **второй** процессный запрос стоимости |
| | | pentukurssi hinta | — | — | kyllä | **главный** тариф курса щенков |
| | | koirankouluttaja hinta | — | — | kyllä | **второй** стоимость услуг кинолога |
| **Цены передержки / выгула** | `…/pet-sitting/…/prices/` | koiranhoitaja hinta helsinki | — | — | kyllä | **главный** коммерческий запрос тарифа ситтера (в title и H1: «Koiranhoitaja: hinnat») |
| | | koiran ulkoilutus hinta | — | — | kyllä | **главный** запрос ставки за выгул собаки |
| | | lemmikinhoitaja hinta | — | — | kyllä | **второй** общий синоним присмотра |
| | | koiranulkoiluttaja hinta | — | — | kyllä | **второй** |
| | | koiran päivähoito hinta | — | — | kyllä | **главный** домашний дневной присмотр |

---

### 3.2. Конкретные услуги (30 услуг из `website/lib/priceSlugs.ts` и `services.ts`)

Правила выведения поискового названия для страницы цены (`seo` по §3.1 методики):
1. Из главного поискового запроса удаляются слова цены («hinta», «hinnat», «hinnasto», «paljonko maksaa», «maksu») и города («Helsinki», «Helsingissä», «Espoo», «Tampere»).
2. Первое слово пишется с заглавной буквы.
3. Сохраняется объект («koira», «kissa», «uros», «narttu», «pentu»).
4. Единица измерения указывается словами («vuorokaudeksi», «yöltä», «30 minuuttia», «1 tunti»).
5. Длина — строго до 45 знаков.

*Группы сравнения Google Trends:*
- *Вет. осмотр и процедуры: [Trends FI](https://trends.google.com/trends/explore?geo=FI&q=el%C3%A4inl%C3%A4%C3%A4k%C3%A4ri%20perustutkimus,koiran%20rokotus,koiran%20sirutus,kissan%20kastrointi,koiran%20sterilointi)*
- *Операции кошек и собак: [Trends FI](https://trends.google.com/trends/explore?geo=FI&q=kissan%20kastrointi,kissan%20sterilointi,koiran%20sterilointi,kissan%20sterilisaatio,koiran%20kastrointi)*
- *Услуги груминга: [Trends FI](https://trends.google.com/trends/explore?geo=FI&q=koiran%20trimmaus,koiran%20pesu,koiran%20nypint%C3%A4,pohjavillapesu,koiran%20kynsien%20leikkaus)*
- *Гостиницы и дневной присмотр: [Trends FI](https://trends.google.com/trends/explore?geo=FI&q=koirahoitola%20vuorokausi,kissahoitola%20vuorokausi,koirap%C3%A4iv%C3%A4koti,lemmikkikuljetus,koirataksi)*
- *Дрессировка услуги: [Trends FI](https://trends.google.com/trends/explore?geo=FI&q=pentukurssi,arkitottelevaisuuskurssi,koirakoulu%20ryhm%C3%A4tunti,koirakoulu%20yksityistunti,koiran%20k%C3%A4yt%C3%B6sneuvonta)*
- *Передержка и выгул услуги: [Trends FI](https://trends.google.com/trends/explore?geo=FI&q=koiran%20ulkoilutus,kissanhoitaja%20kotik%C3%A4ynti,lemmikinhoitaja%20kotiin,koiran%20p%C3%A4iv%C3%A4hoito,kissavahti)*

| Категория | Код | Варианты запроса | Planner | Trends | Подсказка | Решение | Поисковое название (§3.1) | Слаг URL |
|---|---|---|---|---|---|---|---|---|
| **GROOMING** | `full_groom` | koiran trimmaus hinta | — | — | kyllä | **главный** запрос стоимости стрижки собаки | **Koiran trimmaus** | `koiran-trimmaus` |
| | | koiran täystrimmaus hinta | — | — | kyllä | второй | | |
| | `bath_dry` | koiran pesu ja föönaus hinta | — | — | kyllä | **главный** запрос мытья и сушки феном | **Koiran pesu ja kuivaus** | `pesu-ja-foonaus` |
| | | koiran pesu hinta | — | — | kyllä | второй краткий запрос | | |
| | `hand_stripping` | koiran nypintä hinta | — | — | kyllä | **главный** профессиональный запрос тримминга жесткошерстных пород | **Koiran nypintä (nyppiminen)** | `nypinta` |
| | | nypintä hinta | — | — | kyllä | второй | | |
| | | koiran nyppiminen hinta | — | — | kyllä | второй разговорный синоним | | |
| | `deshedding` | koiran pohjavillapesu hinta | — | — | kyllä | **главный** финский термин вычесывания и мытья линяющего подшерстка | **Koiran pohjavillapesu** | `pohjavillapesu` |
| | | pohjavillan poisto koira hinta | — | — | kyllä | второй | | |
| | `nail_trim` | koiran kynsien leikkaus hinta | — | — | kyllä | **главный** запрос стрижки когтей собаке | **Koiran kynsien leikkaus** | `kynsien-leikkaus` |
| | | kynsien leikkaus koira hinta | — | — | kyllä | второй | | |
| | `cat_groom` | kissan trimmaus hinta | — | — | kyllä | **главный** запрос ухода за шерстью кошек | **Kissan trimmaus ja turkinhoito** | `kissan-trimmaus` |
| | | kissan turkin trimmaus hinta | — | — | kyllä | второй | | |
| **VET_CLINIC** | `exam` | eläinlääkäri peruskäynti hinta | — | — | kyllä | **главный** официальный запрос клинического осмотра | **Eläinlääkärin perustutkimus** | `peruskaynti` |
| | | eläinlääkäri tarkastus hinta | — | — | kyllä | второй | | |
| | | eläinlääkäri yleistutkimus | — | — | kyllä | второй академический термин | | |
| | `vaccination_dog` | koiran rokotus hinta | — | — | kyllä | **главный** запрос стоимости вакцинации собаки | **Koiran rokotus** | `koiran-rokotus` |
| | | koiran rokottaminen hinta | — | — | kyllä | второй | | |
| | `microchip` | koiran sirutus hinta | — | — | kyllä | **главный** народный запрос чипирования собаки | **Koiran mikrosirutus** | `koiran-sirutus` |
| | | mikrosiru koiralle hinta | — | — | kyllä | второй официальный синоним | | |
| | | koiran tunnistusmerkintä | — | — | kyllä | второй юридический термин (Ruokavirasto) | | |
| | `neuter_cat` | kissan kastrointi hinta | — | — | kyllä | **главный** запрос кастрации кота-самца | **Uroskissan kastrointi** | `kissan-kastrointi` |
| | | uroskissan kastrointi hinta | — | — | kyllä | второй точный биологический термин | | |
| | | kissan kastraatio hinta | — | — | kyllä | второй медицинский термин | | |
| | `spay_cat` | kissan sterilointi hinta | — | — | kyllä | **главный** запрос стерилизации кошки | **Kissan sterilointi (sterilisaatio)** | `kissan-sterilointi` |
| | | kissan sterilisaatio hinta | — | — | kyllä | второй распространенный медицинский синоним | | |
| | | naaraskissan sterilointi hinta | — | — | kyllä | второй | | |
| | `spay_dog` | koiran sterilointi hinta | — | — | kyllä | **главный** запрос стерилизации собаки (женской особи) | **Narttukoiran sterilointi** | `koiran-sterilointi` |
| | | koiran sterilisaatio hinta | — | — | kyllä | второй | | |
| | | narttukoiran sterilointi hinta | — | — | kyllä | второй точный термин | | |
| **PET_HOTEL** | `dog_night` | koirahoitola vuorokausihinta | — | — | kyllä | **главный** запрос ночного/суточного пребывания в гостинице | **Koirahoitola vuorokaudeksi** | `koirahoitola-yo` |
| | | koirahoitola yö hinta | — | — | kyllä | второй | | |
| | | koirahotelli vuorokausihinta | — | — | kyllä | второй коммерческий синоним | | |
| | `cat_night` | kissahoitola vuorokausihinta | — | — | kyllä | **главный** запрос проживания кошек в зоогостинице | **Kissahoitola vuorokaudeksi** | `kissahoitola-yo` |
| | | kissahoitola yö hinta | — | — | kyllä | второй | | |
| | `daycare_day` | koirapäiväkoti hinta | — | — | kyllä | **главный** запрос дневного центра пребывания | **Koirapäivähoito päiväksi** | `koirapaivakoti` |
| | | koirapäivähoito hinta | — | — | kyllä | второй | | |
| | `daycare_pass` | koirapäiväkoti sarjakortti | — | — | kyllä | **главный** абонемент/мультикарта дневного центра (по Suggest) | **Koirapäiväkodin sarjakortti** | `paivakoti-sarjakortti` |
| | | koirapäiväkoti kuukausikortti | — | — | kyllä | второй месячный абонемент | | |
| | `pickup` | lemmikkikuljetus hinta | — | — | kyllä | **главный** запрос трансфера животного | **Lemmikkikuljetus hoitolaan** | `lemmikkikuljetus` |
| | | koirahoitola noutopalvelu | — | — | kyllä | второй | | |
| | `extra_walk` | koirahoitola lisälenkki | — | — | kyllä | **главный** запрос дополнительного индивидуального выгула в гостинице | **Lisälenkki koirahoitolassa** | `lisalenkki` |
| | | erillinen ulkoilutus koiralle | — | — | kyllä | второй | | |
| **DOG_TRAINING** | `puppy_course` | pentukurssi hinta | — | — | kyllä | **главный** курс социализации и воспитания щенков | **Pentukurssi koiralle** | `pentukurssi` |
| | | pentukoulu hinta | — | — | kyllä | второй | | |
| | `obedience_course` | arkitottelevaisuuskurssi hinta | — | — | kyllä | **главный** базовый курс послушания в Финляндии | **Arkitottelevaisuuskurssi koiralle** | `arkitottelevaisuuskurssi` |
| | | tottelevaisuuskurssi hinta | — | — | kyllä | второй | | |
| | `group_lesson` | koirakoulu ryhmätunti hinta | — | — | kyllä | **главный** групповые занятия дрессировкой | **Koirakoulun ryhmätunti** | `ryhmatunti` |
| | | koirakoulutus ryhmä | — | — | kyllä | второй | | |
| | `private_lesson` | koirakoulu yksityistunti hinta | — | — | kyllä | **главный** индивидуальные занятия с инструктором | **Koirankouluttajan yksityistunti** | `yksityistunti` |
| | | koirankouluttaja yksityistunti hinta | — | — | kyllä | второй | | |
| | `behavior_consult` | koiran käytösneuvonta hinta | — | — | kyllä | **главный** запрос консультации зоопсихолога по поведению | **Koiran käytösneuvonta** | `kaytosneuvonta` |
| | | ongelmakoirakouluttaja hinta | — | — | kyllä | второй (работа со сложным поведением) | | |
| | `membership` | koirakerho jäsenmaksu | — | — | kyllä | **главный** ежегодный членский взнос кинологического клуба/секции | **Koiraseuran jäsenmaksu** | `jasenmaksu` |
| | | kennelliitto jäsenmaksu | — | — | kyllä | второй национальный взнос | | |
| **PET_SITTING** | `walk_30` | koiran ulkoilutus 30 min hinta | — | — | kyllä | **главный** короткий выгул на 30 минут | **Koiran ulkoilutus (30 min)** | `ulkoilutus-30-min` |
| | | koiran lenkitys 30 min | — | — | kyllä | второй | | |
| | `walk_60` | koiran ulkoilutus 1 tunti hinta | — | — | kyllä | **главный** часовая прогулка с собакой | **Koiran ulkoilutus (1 tunti)** | `ulkoilutus-60-min` |
| | | koiran ulkoilutus 60 min | — | — | kyllä | второй | | |
| | `cat_visit` | kissanhoitaja kotikäynti hinta | — | — | kyllä | **главный** домашний визит ситтера к кошкам | **Kissanhoito kotikäynnillä** | `kissan-kotikaynti` |
| | | kissan kotikäynti | — | — | kyllä | второй | | |
| | `house_sitting_night` | lemmikinhoitaja kotiin yöksi | — | — | kyllä | **главный** ночной присмотр дома у владельца | **Lemmikinhoito kotona (yö)** | `yohoito-omistajan-kotona` |
| | | koiranhoito omassa kodissa yö | — | — | kyllä | второй | | |
| | `boarding_night` | koiran hoito hoitajan luona yö | — | — | kyllä | **главный** ночная домашняя передержка у ситтера | **Lemmikkihoito hoitajan luona (yö)** | `yohoito-hoitajan-luona` |
| | | koirahoito perheessä yö | — | — | kyllä | второй семейный пансион | | |
| | `daycare_day` | koiran päivähoito kotioloissa hinta | — | — | kyllä | **главный** дневной присмотр дома у частного ситтера | **Koiran päivähoito perheessä** | `lemmikin-paivahoito` |
| | | lemmikin päivähoito hoitajan luona | — | — | kyllä | второй | | |

---

## 4. Ветеринарные специальности из `website/lib/vet.ts`

В Финляндии номенклатура ветеринарных специальностей и клинических дисциплин регулируется **Suomen Eläinlääkäriliitto**, **Ruokavirasto** и клинической практикой университетской больницы **Yliopistollinen eläinsairaala (Viikki)** и сети клиник **Evidensia**.

*Группы сравнения Google Trends:*
- *Диагностика и физиотерапия: [Trends FI](https://trends.google.com/trends/explore?geo=FI&q=el%C3%A4infysioterapia,koiran%20ultra%C3%A4%C3%A4nitutkimus,koiran%20r%C3%B6ntgen,el%C3%A4inten%20ct-kuvaus,el%C3%A4inten%20magneettikuvaus)*
- *Клинические дисциплины: [Trends FI](https://trends.google.com/trends/explore?geo=FI&q=el%C3%A4inkirurgia,koiran%20hammashoito,el%C3%A4indermatologia,el%C3%A4inkardiologia,el%C3%A4inonkologia)*

| Код специальности | Английский (`en`) | Финский (`fi`) | Варианты запроса в Финляндии | Trends | Подсказка | Обоснование и статус |
|---|---|---|---|---|---|---|
| `surgery` | Surgery | **Kirurgia** | eläinkirurgia, kirurgia eläinlääkäri | — | kyllä | **главный** общепринятый клинический термин хирургического профиля |
| `orthopedics` | Orthopaedics | **Ortopedia** | ortopedia eläinlääkäri, koiran ortopedia | — | kyllä | **главный** термин патологий костей, суставов и связок |
| `dentistry` | Dentistry | **Hammashoito** | koiran hammashoito, kissan hammashoito, eläinhammaslääkäri | — | kyllä | **главный** стоматологический профиль и гигиена полости рта |
| `dermatology` | Dermatology | **Dermatologia** | eläindermatologia, koiran ihosairaudet | — | kyllä | **главный** профиль кожных и аллергических заболеваний |
| `cardiology` | Cardiology | **Kardiologia** | eläinkardiologia, koiran sydänsairaudet | — | kyllä | **главный** кардиологический профиль |
| `ophthalmology` | Ophthalmology | **Oftalmologia** | eläinsilmäsairaudet, koiran silmätutkimus, oftalmologia | — | kyllä | **главный** офтальмологический профиль и обследование глаз |
| `oncology` | Oncology | **Onkologia** | eläinonkologia, koiran syöpähoidot | — | kyllä | **главный** онкологический профиль |
| `neurology` | Neurology | **Neurologia** | eläinneurologia, koiran neurologiset sairaudet | — | kyllä | **главный** неврологический профиль |
| `internal-medicine` | Internal medicine | **Sisätaudit** | eläinten sisätaudit, koiran sisätautitutkimus | — | kyllä | **главный** общепринятый финский термин внутренних болезней |
| `reproduction` | Reproduction | **Lisääntyminen** | eläinten lisääntyminen, koiran keinosiemennys | — | kyllä | **главный** профиль репродукции и искусственного осеменения |
| `rehabilitation` | Rehabilitation | **Fysioterapia ja kuntoutus** | eläinfysioterapia, koiran fysioterapia, kuntoutus | — | kyllä | **главный** профиль реабилитации и физиотерапии мелких животных |
| `exotics` | Exotic animals | **Eksoottiset eläimet** | eksoottisten eläinten hoito, matelijat eläinlääkäri | — | kyllä | **главный** профиль экзотических животных |
| `ultrasound` | Ultrasound | **Ultraääni** | koiran ultraäänitutkimus, eläinlääkäri ultraääni | — | kyllä | **главный** ультразвуковая диагностика (УЗИ) |
| `x-ray` | X-ray | **Röntgen** | koiran röntgenkuvaus, eläinröntgen | — | kyllä | **главный** рентгенологическая диагностика |
| `ct` | CT | **CT (tietokonetomografia)** | eläinten ct-kuvaus, tietokonetomografia eläinlääkäri | — | kyllä | **главный** компьютерная томография |
| `mri` | MRI | **Magneettikuvaus (MRI)** | eläinten magneettikuvaus, mri koiralle | — | kyllä | **главный** магнитно-резонансная томография |
| `endoscopy` | Endoscopy | **Endoskopia (tähystys)** | koiran tähystys, endoskopia eläinlääkäri | — | kyllä | **главный** эндоскопические исследования и малоинвазивная хирургия |
| `laboratory` | Laboratory | **Laboratorio** | eläinlääkäri laboratorio, verikokeet koira | — | kyllä | **главный** клинико-диагностическая лаборатория |
| `hospitalization` | Hospitalisation | **Osastohoito (sairaalahoito)** | eläinsairaala osastohoito, potilaspaikat | — | kyllä | **главный** круглосуточный стационар для интенсивной терапии |

---

## 5. Сводная таблица слагов URL для маршрутизации сайта

Все слаги сформированы строго по правилам `docs/playbooks/add-language.md` и `docs/seo/keywords/README.md`: строчные латинские буквы без диакритики, дефис в качестве разделителя слов, устойчивый поисковый базис.

| Назначение | Код / Категория | Слаг URL | Пояснение выбора |
|---|---|---|---|
| **Сегмент цен** | `PRICES_SEGMENT` | `hinnat` | Финский аналог «prices / preise / precios / ceny»: короткий, лаконичный, без диакритики |
| **Сегмент лучших** | `BEST_SEGMENT` | `parhaat` | Финский аналог «best / meilleurs / mejores / najlepsze» (множественное число «лучшие») |
| **Сегмент гидов** | `GUIDE_SEGMENT` | `oppaat` | Финский аналог «guides / guias / ratgeber / poradnik» (множественное число «руководства/гайды») |
| **Сегмент карточки** | `BUSINESS_SEGMENT` | `paikka` | Финский аналог «business / etablissement / centro / miejsce / podnik» («место/заведение») |
| **Сегмент города** | `CITY_SEGMENT` | `kaupunki` | Финский аналог «city / ville / ciudad / miasto / stadt» («город») |
| **Категория** | `GROOMING` | `trimmaus` | Главный запрос стрижки и ухода за шерстью |
| **Категория** | `VET_CLINIC` | `elainlaakari` | Доминирующий запрос ветврача и клиники |
| **Категория** | `PET_HOTEL` | `koirahoitola` | Традиционный финский термин гостиниц и передержки |
| **Категория** | `DOG_TRAINING` | `koirakoulu` | Главный поисковый термин кинологических школ |
| **Категория** | `PET_SHOP` | `elainkauppa` | Народный и повсеместный термин зоомагазина |
| **Категория** | `PET_SITTING` | `koiranhoitaja` | Главный поисковый термин индивидуального ухода и ситтеров |
| **Признак** | `nonstop` | `paivystys` | Медицинский термин дежурства и неотложки |
| **Признак** | `saturday` | `lauantai` | Суббота латиницей |
| **Признак** | `sunday` | `sunnuntai` | Воскресенье латиницей |
| **Признак** | `exotics` | `eksoottiset-elaimet` | Экзотические животные |
| **Признак** | `home-visits` | `kotikaynti` | Выезд врача на дом |
| **Признак** | `english` | `englanniksi` | Обслуживание на английском языке |
