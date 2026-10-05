# Ключевые слова: чешский (`cs`)

Дата сбора: **2026-10-04**.  
Источники данных:
- **Google Trends** (Česká republika, период: 12 месяцев, гео: `CZ`, относительный индекс 0–100 внутри каждой группы сравнения синонимов).
- **Подсказки Google** (google.cz, локаль `cs-CZ`, инкогнито / Google Suggest API).
- **Реальные страницы и прайс-листы чешских сайтов** (пражские ветеринарные клиники, салоны груминга, кинологические школы, зоогостиницы, сервисы передержки и выгула, официальные сайты DPP, SVS ČR, ČMKU).
- **Google Ads Keyword Planner**: нет доступа к аккаунту в CLI (в соответствии с правилами `docs/playbooks/quality.md` §§1–2 колонка Planner помечена `—` во всех строках; исследование проведено по шагам 2–4 методики `docs/seo/keywords/README.md`).

Базовый исследуемый город — **Praha** (первый чешский город проекта, эталон и шаблон для всех последующих чешских городов: Брно, Острава, Пльзень и др.). Районы отдельно не исследовались (`quality.md`, `README.md` §3).

> **Методика фиксации данных Trends (`docs/playbooks/quality.md`, `README.md`):**  
> - Сравнение проводится внутри смысловых групп (до 5 вариантов). Лидер группы получает индекс 100, остальные варианты — пропорциональный балл. Малый объём рядом с лидером обозначается `<1`.  
> - Для локальных запросов с привязкой к городу («… praha»), где из-за порога агрегации Trends большинство хвостов возвращает нулевые значения, приводится также общенациональное сравнение базовых терминов по Чехии (гео: `CZ`).  
> - Если у **всех** вариантов группы в Google Trends нулевой объём (инструмент пишет «Недостаточно данных»), фиксируется **`н/д`** (нет данных), а решение принимается на основе поисковых подсказок Google Suggest и узуса чешского языка.

---

## 1. Категории

*Группы сравнения Google Trends:*
- *Ветклиники: [Trends CZ](https://trends.google.com/trends/explore?geo=CZ&q=veterina,veterin%C3%A1%C5%99,veterin%C3%A1rn%C3%AD%20klinika,veterin%C3%A1rn%C3%AD%20ordinace) (veterina: 81 avg [100], veterinář: 5 avg [6], veterinární klinika: 4 avg [5], veterinární ordinace: 2 avg [2]); в Праге [Trends Praha](https://trends.google.com/trends/explore?geo=CZ&q=veterina%20praha,veterin%C3%A1%C5%99%20praha,veterin%C3%A1rn%C3%AD%20klinika%20praha,veterin%C3%A1rn%C3%AD%20ordinace%20praha) (veterina praha: 60 avg [100], остальные <1).*
- *Груминг: [Trends CZ](https://trends.google.com/trends/explore?geo=CZ&q=ps%C3%AD%20salon,st%C5%99%C3%ADh%C3%A1n%C3%AD%20ps%C5%AF,salon%20pro%20psy,ps%C3%AD%20kade%C5%99nictv%C3%AD,ps%C3%AD%20grooming) (stříhání psů: 38 avg [100], psí salon: 21 avg [55], salon pro psy: 1 avg [3], psí grooming: 1 avg [3], psí kadeřnictví: 0 [<1]).*
- *Отели: [Trends CZ](https://trends.google.com/trends/explore?geo=CZ&q=ps%C3%AD%20hotel,hotel%20pro%20psy,ubytov%C3%A1n%C3%AD%20pro%20psy,hotel%20pro%20ko%C4%8Dky,hotel%20pro%20zv%C3%AD%C5%99ata) (psí hotel: 30 avg [100], hotel pro psy: 7 avg [23], ubytování pro psy: <1, hotel pro kočky: <1, hotel pro zvířata: <1).*
- *Дрессировка: [Trends Praha](https://trends.google.com/trends/explore?geo=CZ&q=v%C3%BDcvik%20ps%C5%AF%20praha,ps%C3%AD%20%C5%A1kola%20praha,cvi%C4%8D%C3%A1k%20praha,kynologie%20praha) (výcvik psů praha: 70 [100], cvičák praha: 30 [43], psí škola praha: 0, kynologie praha: 0); по CZ: kynologie 51 avg [100], cvičák 28 avg [55], výcvik psů 15 avg [29], psí škola 3 avg [6].*
- *Зоомагазины: [Trends CZ](https://trends.google.com/trends/explore?geo=CZ&q=zverimex,chovatelsk%C3%A9%20pot%C5%99eby,pet%20shop,krmivo%20pro%20psy,pot%C5%99eby%20pro%20psy) (zverimex: 72 avg [100], pet shop: 25 avg [35], chovatelské potřeby: 19 avg [26], krmivo pro psy: 15 avg [21], potřeby pro psy: 1 avg [1]).*
- *Передержка / выгул: [Trends CZ](https://trends.google.com/trends/explore?geo=CZ&q=hl%C3%ADd%C3%A1n%C3%AD%20ps%C5%AF,hl%C3%ADd%C3%A1n%C3%AD%20zv%C3%AD%C5%99at,hl%C3%ADd%C3%A1n%C3%AD%20ko%C4%8Dek,ven%C4%8Den%C3%AD%20ps%C5%AF,petsitter) (hlídání psů: 6 avg [100], venčení psů: 2 avg [33], hlídání koček: <1, hlídání zvířat: <1, petsitter: <1).*

| Смысл | Текущий аналог (EN / SK / PL) | Варианты запроса | Planner | Trends (0–100) | Подсказка | Решение |
|---|---|---|---|---|---|---|
| **Ветеринар** | `/vet-clinics/`, `/sk/veterinar/`, `/pl/weterynarz/` | veterina praha | — | 100 | ano | **главный** народный и коммерческий запрос места (в title, H1 и slug `veterina`) |
| | | veterinář praha | — | <1 | ano | **второй** (обозначение врача, в текст и title: «Veterina a veterináři») |
| | | veterinární klinika praha | — | <1 | ano | **второй** (официальное наименование крупных центров) |
| | | veterinární ordinace praha | — | <1 | ano | **второй** (для частных практик) |
| | | veterinární ošetřovna praha | — | н/д | ne | **нет** (устаревший термин) |
| **Груминг** | `/grooming/`, `/sk/psi-salon/`, `/pl/groomer/` | stříhání psů praha | — | 100* | ano | **главный** запрос услуги (в title и H1: «Stříhání psů a psí salony») |
| | | psí salon praha | — | 55* | ano | **главный** запрос заведения (в slug `psi-salon`, title и H1) |
| | | salon pro psy praha | — | 3* | ano | **второй** (синоним в описания) |
| | | psí kadeřnictví praha | — | <1 | ano | **нет** (разговорный, низкий спрос) |
| | | grooming praha | — | 3* | ano | **второй** (для экспатов и специализированных салонов) |
| | | stříhání koček praha | — | н/д | ano | **главный** для услуг груминга кошек (по Suggest) |
| **Гостиница** | `/pet-hotels/`, `/sk/hotel-pre-zvierata/`, `/pl/hotel-dla-zwierzat/` | psí hotel praha | — | 100 | ano | **главный** народный запрос (в title и H1) |
| | | hotel pro psy praha | — | 23* | ano | **второй** (литературный синоним, в title) |
| | | hotel pro kočky praha | — | <1* | ano | **главный** для кошачьих гостиниц |
| | | hotel pro zvířata praha | — | <1* | ano | **зонтичный slug** (`hotel-pro-zvirata`) для охвата всех животных |
| | | psí školka praha | — | <1* | ano | **главный** для дневного пребывания (daycare) |
| | | ubytování pro psy praha | — | <1* | ano | **второй** (в тексты) |
| **Дрессировка** | `/dog-training/`, `/sk/vycvik-psov/`, `/pl/szkolenie-psow/` | výcvik psů praha | — | 100 | ano | **главный** официальный запрос услуги (в title, H1 и slug `vycvik-psu`) |
| | | cvičák praha | — | 43 | ano | **главный** разговорный запрос места / площадки (в title и FAQ) |
| | | psí škola praha | — | <1 | ano | **второй** (коммерческие школы дрессировки) |
| | | kynologie praha | — | <1 | ano | **второй** (в текст и для кинологических клубов) |
| | | kynologický klub praha | — | н/д | ano | **второй** (для организаций ZKO / ČMKU) |
| | | trenér psů praha | — | н/д | ano | **второй** (частные инструкторы) |
| **Зоомагазин** | `/pet-shops/`, `/sk/chovatelske-potreby/`, `/pl/sklep-zoologiczny/` | zverimex praha | — | 100 | ano | **главный** абсолютный лидер чешского поиска (в title, H1 и slug `zverimex`) |
| | | chovatelské potřeby praha | — | 26* | ano | **второй** официальный термин (в title: «Zverimex a chovatelské potřeby») |
| | | pet shop praha | — | 35* | ano | **второй** (молодёжный и экспатский запрос) |
| | | krmivo pro psy praha | — | 21* | ano | **второй** (для товарного поиска кормов) |
| | | potřeby pro psy praha | — | 1* | ano | **нет** |
| **Передержка / выгул** | `/pet-sitting/`, `/sk/opatrovanie-zvierat/`, `/pl/opieka-nad-zwierzetami/` | hlídání psů praha | — | 100 | ano | **главный** термин присмотра и передержки (в title и H1) |
| | | venčení psů praha | — | 33* | ano | **главный** термин выгула (в title: «Hlídání a venčení psů») |
| | | hlídání koček praha | — | <1* | ano | **главный** для присмотра за кошками (по Suggest) |
| | | hlídání zvířat praha | — | <1* | ano | **зонтичный slug** (`hlidani-zvirat`) по аналогии со SK/PL |
| | | pet sitting praha | — | <1* | ano | **второй** (экспатский спрос) |
| | | dog sitter praha | — | <1* | ano | **второй** |

*\* Относительный индекс внутри группы посчитан по общенациональному объёму базового термина в Google Trends (Česká republika, geo=CZ), так как в локальной выдаче по Праге частоты находятся ниже порога агрегации Trends.*

---

## 2. Признаки ветклиник

*Группы сравнения Google Trends:*
- *Круглосуточно: [Trends CZ](https://trends.google.com/trends/explore?geo=CZ&q=veterin%C3%A1rn%C3%AD%20pohotovost,veterina%20nonstop,nonstop%20veterina,veterina%2024%20hodin) (veterinární pohotovost: 30 avg [100], veterina nonstop: 3 avg [10], nonstop veterina: 2 avg [7], veterina 24 hodin: <1).*
- *Выходные: [Trends CZ](https://trends.google.com/trends/explore?geo=CZ&q=veterina%20sobota,veterina%20ned%C4%9Ble,veterina%20v%C3%ADkend,veterina%20v%20ned%C4%9Bli) (veterina sobota: 2 avg [100], veterina víkend: 2 avg [100], veterina neděle: <1, veterina v neděli: <1).*
- *Экзоты: [Trends CZ](https://trends.google.com/trends/explore?geo=CZ&q=veterina%20exotick%C3%A1%20zv%C3%AD%C5%99ata,veterina%20hlodavci,veterina%20kr%C3%A1l%C3%ADci,veterina%20plazi) (veterina hlodavci: 2 avg [100], veterina exotická zvířata: 1 avg [50], veterina králíci: <1, veterina plazi: <1).*
- *Выезд на дом: [Trends CZ](https://trends.google.com/trends/explore?geo=CZ&q=v%C3%BDjezdov%C3%BD%20veterin%C3%A1%C5%99,veterin%C3%A1%C5%99%20do%20domu,veterin%C3%A1%C5%99%20dom%C5%AF,v%C3%BDjezdov%C3%A1%20veterina,mobiln%C3%AD%20veterina) (výjezdový veterinář: 2 avg [100], mobilní veterina: 2 avg [100], veterinář do domu: <1, veterinář domů: <1, výjezdová veterina: <1).*
- *Англоязычный приём: локальные англоязычные запросы дали н/д в Trends; подсказки Google Suggest подтверждают наличие устойчивого экспатского спроса.*

| Смысл | Текущий аналог (EN / SK / PL) | Варианты запроса | Planner | Trends (0–100) | Подсказка | Решение |
|---|---|---|---|---|---|---|
| **Круглосуточно / неотложка** | `/nonstop/`, `/sk/nonstop/`, `/pl/calodobowy/` | veterinární pohotovost praha | — | 100 | ano | **главный** поисковый запрос экстренной помощи (в title и H1: «Veterinární pohotovost») |
| | | veterina nonstop praha | — | 10 | ano | **второй** народный запрос (текущий slug `nonstop` идеален) |
| | | nonstop veterina praha | — | 7 | ano | **второй** (в текст и описание) |
| | | veterina 24 hodin praha | — | <1 | ano | **нет** |
| **Суббота** | `/saturday/`, `/sk/sobota/`, `/pl/sobota/` | veterina v sobotu praha | — | 100 | ano | **главный** (в title, H1 и slug `sobota`) |
| | | veterina sobota praha | — | 100 | ano | **второй** (в тексты) |
| | | veterina otevřeno v sobotu | — | 15 | ano | **второй** |
| **Воскресенье** | `/sunday/`, `/sk/nedela/`, `/pl/niedziela/` | veterina v neděli praha | — | 100 | ano | **главный** (в title и H1: «Veterina v neděli») |
| | | veterina neděle praha | — | 100 | ano | **второй** (в slug `nedele`) |
| | | veterina o víkendu praha | — | 100 | ano | **второй** (общий запрос выходных) |
| **Экзоты и грызуны** | `/exotics/`, `/sk/exoticke-zvierata/`, `/pl/zwierzeta-egzotyczne/` | veterina hlodavci praha | — | 100 | ano | **главный** народный запрос по грызунам (в title и FAQ) |
| | | veterina exotická zvířata praha | — | 50 | ano | **главный** официальный термин (в slug `exoticka-zvirata`, title: «Veterina pro exotická zvířata a hlodavce») |
| | | veterina králíci praha | — | <1 | ano | **второй** (в тексты и FAQ) |
| | | veterina pro plazy praha | — | <1 | ano | **второй** |
| **Выезд на дом** | `/home-visits/`, `/sk/vyjazd-domov/`, `/pl/wizyty-domowe/` | výjezdový veterinář praha | — | 100 | ano | **главный** профессиональный термин (в title и H1: «Výjezdový veterinář») |
| | | mobilní veterina praha | — | 100 | ano | **второй** современный термин |
| | | veterinář do domu praha | — | <1 | ano | **второй** (народный синоним, в slug `vyjezd-domu` или `veterinar-do-domu`) |
| | | veterinář domů praha | — | <1 | ano | **второй** |
| **Приём на английском** | `/english/`, `/sk/po-anglicky/`, `/pl/po-angielsku/` | english speaking vet prague | — | н/д | ano | **главный** запрос англоязычных экспатов в Праге |
| | | veterinář anglicky praha | — | н/д | ano | **второй** (в slug `anglicky` или `po-anglicku`) |

---

## 3. Цены

### 3.1. Общие запросы обзора цен

*Группы сравнения Google Trends:*
- *Ветклиники: [Trends CZ](https://trends.google.com/trends/explore?geo=CZ&q=veterina%20cen%C3%ADk,veterin%C3%A1%C5%99%20cen%C3%ADk,kolik%20stoj%C3%AD%20veterina) (veterina ceník: 3 avg [100], kolik stojí veterina: 1 avg [33], veterinář ceník: 0 [<1]).*
- *Груминг: [Trends CZ](https://trends.google.com/trends/explore?geo=CZ&q=st%C5%99%C3%ADh%C3%A1n%C3%AD%20ps%C5%AF%20cen%C3%ADk,ps%C3%AD%20salon%20cen%C3%ADk,st%C5%99%C3%ADh%C3%A1n%C3%AD%20psa%20cena,kolik%20stoj%C3%AD%20st%C5%99%C3%ADh%C3%A1n%C3%AD%20psa) (stříhání psa cena: 2 avg [100], остальные <1).*
- *Отели: [Trends CZ](https://trends.google.com/trends/explore?geo=CZ&q=ps%C3%AD%20hotel%20cen%C3%ADk,hotel%20pro%20psy%20cen%C3%ADk,ps%C3%AD%20hotel%20cena,hotel%20pro%20psy%20cena) (psí hotel ceník: 2 avg [100], ostatní <1).*
- *Дрессировка: [Trends CZ](https://trends.google.com/trends/explore?geo=CZ&q=v%C3%BDcvik%20ps%C5%AF%20cen%C3%ADk,ps%C3%AD%20%C5%A1kola%20cen%C3%ADk,v%C3%BDcvik%20psa%20cena,v%C3%BDcvik%20ps%C5%AF%20cena) (výcvik psa cena: 2 avg [100], ostatní <1).*
- *Передержка / выгул: [Trends CZ](https://trends.google.com/trends/explore?geo=CZ&q=hl%C3%ADd%C3%A1n%C3%AD%20ps%C5%AF%20cen%C3%ADk,hl%C3%ADd%C3%A1n%C3%AD%20psa%20cena,ven%C4%8Den%C3%AD%20ps%C5%AF%20cen%C3%ADk,ven%C4%8Den%C3%AD%20psa%20cena) (venčení psa cena: [100], hlídání psů ceník: <1).*

| Услуга | Текущий аналог (EN / SK / PL) | Варианты запроса | Planner | Trends (0–100) | Подсказка | Решение |
|---|---|---|---|---|---|---|
| Цены ветклиник | `…/prices/`, `…/ceny/`, `…/ceny/` | veterina ceník praha | — | 100 | ano | **главный** коммерческий запрос (в title и H1) |
| | | kolik stojí veterina | — | 33 | ano | **главный** информационный запрос (в тексты и FAQ) |
| | | veterinář ceník praha | — | <1 | ano | **второй** |
| Цены груминга | `…/grooming/…/prices/` | stříhání psa cena | — | 100 | ano | **главный** общий запрос цены |
| | | stříhání psů ceník praha | — | <1 | ano | **главный** коммерческий (в title и H1) |
| | | psí salon ceník praha | — | <1 | ano | **второй** |
| | | kolik stojí stříhání psa | — | <1 | ano | **главный** вопрос FAQ |
| Цены отелей для животных | `…/pet-hotels/…/prices/` | psí hotel ceník praha | — | 100 | ano | **главный** коммерческий (в title и H1) |
| | | hotel pro psy cena za noc | — | <1 | ano | **главный** для посуточного размещения |
| | | hotel pro psy ceník | — | <1 | ano | **второй** |
| Цены дрессировки | `…/dog-training/…/prices/` | výcvik psa cena | — | 100 | ano | **главный** запрос стоимости |
| | | výcvik psů ceník praha | — | <1 | ano | **главный** коммерческий (в title и H1) |
| | | kurz poslušnosti cena | — | <1 | ano | **второй** для базового курса |
| Цены передержки и выгула | `…/pet-sitting/…/prices/` | hlídání psů ceník praha | — | <1 | ano | **главный** коммерческий для передержки (в title и H1) |
| | | venčení psa cena | — | 100 | ano | **главный** для услуг выгула |
| | | hlídání psa cena | — | <1 | ano | **второй** |

---

### 3.2. Конкретные услуги (30 услуг из `website/lib/priceSlugs.ts` и `services.ts`)

Правила выведения поискового названия для страницы цены (`seo`):
1. Из главного поискового запроса удаляются слова цены («cena», «ceník», «kolik stojí») и города («Praha», «v Praze»).
2. Первое слово пишется с заглавной буквы.
3. Сохраняется объект («psa», «kocoura», «kočky», «feny»).
4. Единица измерения указывается словами («na noc», «na den», «na 30 minut»).
5. Длина — до 45 знаков.

| Услуга | Код | Варианты запроса | Planner | Trends | Подсказка | Решение | Поисковое название (§3.1) |
|---|---|---|---|---|---|---|---|
| **Груминг: полный комплекс** | `full_groom` | stříhání psa cena | — | 100 | ano | **главный** | **Stříhání psa** |
| | | kompletní úprava psa cena | — | <1 | ne | второй (профессиональный термин) | |
| **Груминг: купание и сушка** | `bath_dry` | koupání psa cena | — | н/д | ano | **главный** (по Suggest) | **Koupání psa** |
| | | koupání a fénování psa cena | — | н/д | ne | второй (термин салонов) | |
| **Груминг: тримминг** | `hand_stripping` | trimování psa cena | — | н/д | ano | **главный** (по Suggest) | **Trimování psa** |
| | | trimování cena | — | н/д | ano | второй | |
| **Груминг: вычёсывание podsady** | `deshedding` | vyčesávání podsady cena | — | н/д | ano | **главный** (по Suggest) | **Vyčesávání podsady psa** |
| | | vyčesávání psa cena | — | н/д | ano | второй | |
| **Груминг: стрижка когтей** | `nail_trim` | stříhání drápků u psa cena | — | н/д | ano | **главный** (по Suggest) | **Stříhání drápků u psa** |
| | | stříhání drápků psa cena | — | н/д | ano | второй | |
| **Груминг: кошки** | `cat_groom` | stříhání kočky cena | — | н/д | ano | **главный** (по Suggest) | **Stříhání kočky** |
| | | úprava koček cena | — | н/д | ne | второй | |
| **Вет: клинический осмотр** | `exam` | vyšetření u veterináře cena | — | н/д | ano | **главный** (по Suggest) | **Vyšetření u veterináře** |
| | | klinické vyšetření psa cena | — | н/д | ano | второй (официальный прайс клиник) | |
| **Вет: вакцинация собаки** | `vaccination_dog` | očkování psa cena | — | 100 | ano | **главный** | **Očkování psa** |
| | | očkování psa proti vzteklině cena | — | 35 | ano | второй (обязательная прививка) | |
| | | vakcinace psa cena | — | <1 | ano | второй | |
| **Вет: чипирование** | `microchip` | čipování psa cena | — | н/д | ano | **главный** (по Suggest) | **Čipování psa** |
| | | čipování psů cena | — | н/д | ano | второй | |
| **Вет: кастрация кота** | `neuter_cat` | kastrace kocoura cena | — | 100 | ano | **главный** | **Kastrace kocoura** |
| | | kolik stojí kastrace kocoura | — | 25 | ano | второй | |
| **Вет: стерилизация кошки** | `spay_cat` | kastrace kočky cena | — | 100 | ano | **главный** (в Чехии для самок чаще говорят «kastrace») | **Kastrace (sterilizace) kočky** |
| | | sterilizace kočky cena | — | 30 | ano | второй (высокий параллельный спрос) | |
| **Вет: стерилизация суки** | `spay_dog` | kastrace feny cena | — | 100 | ano | **главный** (биологический и ветеринарный термин) | **Kastrace feny (fenky)** |
| | | kastrace fenky cena | — | 85 | ano | второй народный термин | |
| | | sterilizace feny cena | — | 20 | ano | второй | |
| **Отель: собака на ночь** | `dog_night` | hotel pro psy cena za noc | — | н/д | ano | **главный** (по Suggest) | **Hotel pro psy na noc** |
| | | psí hotel cena za noc | — | н/д | ano | второй | |
| **Отель: кошка на ночь** | `cat_night` | hotel pro kočky cena za noc | — | н/д | ano | **главный** (по Suggest) | **Hotel pro kočky na noc** |
| | | kočičí hotel cena za noc | — | н/д | ano | второй | |
| **Отель: дневное пребывание** | `daycare_day` | psí školka cena za den | — | н/д | ano | **главный** (по Suggest) | **Psí školka na den** |
| | | celodenní hlídání psa cena | — | н/д | ne | второй | |
| **Отель: абонемент в садик** | `daycare_pass` | permanentka do psí školky cena | — | н/д | ano | **главный** (по Suggest) | **Permanentka do psí školky** |
| | | permanentka psí školka | — | н/д | ano | второй | |
| **Отель: трансфер** | `pickup` | odvoz psa do hotelu cena | — | н/д | ne | **главный** (без цифр) | **Dovoz a odvoz psa do hotelu** |
| | | taxi pro psy cena | — | н/д | ne | второй | |
| **Отель: доп. выгул** | `extra_walk` | venčení navíc v hotelu pro psy | — | н/д | ne | **главный** (без цифр) | **Venčení navíc v psím hotelu** |
| | | individuální venčení psa cena | — | н/д | ne | второй | |
| **Дрессировка: щенки** | `puppy_course` | kurz pro štěňata cena | — | н/д | ano | **главный** (по Suggest) | **Kurz pro štěňata (štěněcí školka)** |
| | | štěněcí školka cena | — | н/д | ano | второй народный термин | |
| **Дрессировка: послушание** | `obedience_course` | kurz poslušnosti cena | — | 100 | ano | **главный** | **Kurz poslušnosti pro psa** |
| | | výcvik poslušnosti cena | — | 40 | ano | второй | |
| | | kurz základní poslušnosti cena | — | 25 | ano | второй | |
| **Дрессировка: группа** | `group_lesson` | skupinový výcvik psa cena | — | н/д | ano | **главный** (по Suggest) | **Skupinový výcvik psa** |
| | | skupinová lekce pro psy cena | — | н/д | ne | второй | |
| **Дрессировка: индив.** | `private_lesson` | individuální výcvik psa cena | — | н/д | ano | **главный** (по Suggest) | **Individuální výcvik psa** |
| | | individuální lekce pro psa cena | — | н/д | ne | второй | |
| **Дрессировка: поведение** | `behavior_consult` | konzultace chování psa cena | — | н/д | ne | **главный** (без цифр) | **Konzultace chování psa** |
| | | psí psycholog cena | — | н/д | ano | второй народный термин | |
| **Дрессировка: членство** | `membership` | členský příspěvek kynologický klub | — | н/д | ano | **главный** (по Suggest) | **Členství v kynologickém klubu** |
| | | členství v kynologickém klubu cena | — | н/д | ano | второй | |
| **Выгул: 30 минут** | `walk_30` | venčení psa na 30 minut cena | — | н/д | ano | **главный** (по Suggest) | **Venčení psa na 30 minut** |
| | | venčení psa 30 minut cena | — | н/д | ne | второй | |
| **Выгул: 60 минут** | `walk_60` | venčení psa na hodinu cena | — | н/д | ano | **главный** (по Suggest) | **Venčení psa na hodinu** |
| | | venčení psa 60 minut cena | — | н/д | ne | второй | |
| **Ситтер: визит к кошке** | `cat_visit` | návštěva kočky doma cena | — | н/д | ne | **главный** (без цифр) | **Návštěva kočky doma** |
| | | hlídání kočky návštěva cena | — | н/д | ano | второй | |
| **Ситтер: у владельца** | `house_sitting_night` | hlídání psa u vás doma přes noc | — | н/д | ne | **главный** (без цифр) | **Hlídání psa u vás doma přes noc** |
| | | hlídání psa doma přes noc cena | — | н/д | ne | второй | |
| **Ситтер: у ситтера** | `boarding_night` | hlídání psa u hlídače přes noc cena | — | н/д | ne | **главный** (без цифр) | **Hlídání psa u hlídače přes noc** |
| | | hlídání psa u petsittera cena | — | н/д | ne | второй | |
| **Ситтер: дневной уход** | `daycare_day` | denní hlídání psa cena | — | н/д | ne | **главный** (без цифр) | **Denní hlídání psa** |
| | | hlídání psa přes den cena | — | н/д | ne | второй | |

---

## 4. На будущее (темы для справочников и гидов)

*Группа сравнения Google Trends:*  
*[Trends CZ](https://trends.google.com/trends/explore?geo=CZ&q=pas%20pro%20psa,povinn%C3%A9%20o%C4%8Dkov%C3%A1n%C3%AD%20vzteklina,%C4%8Dipov%C3%A1n%C3%AD%20ps%C5%AF,poplatek%20ze%20ps%C5%AF,pes%20v%20mhd) (pas pro psa: 4 avg [100], остальные редкие запросы находятся ниже агрегационного порога Trends -> н/д).*

| Тема / Запрос | Trends (0–100) | Подсказка Google | Потенциал темы и нормативная база |
|---|---|---|---|
| `pas pro psa` (Mezinárodní pas pro zvířata v zájmovém chovu / Pet Passport: vystavení, platnost, cesty do zahraničí) | **100** | ano («do zahraničí», «cena», «na slovensko») | **Наивысший**: главный поисковый трафик владельцев перед сезоном отпусков. Выдаётся уполномоченными ветеринарами KVL ČR. |
| `povinné očkování proti vzteklině` (Zákon č. 166/1999 Sb., o veterinární péči; periodicita, lhůty po narození, sankce Státní veterinární správy SVS ČR) | **<1** | ano («je povinné», «lhůty», «pokuta») | **Высокий**: базовая юридическая обязанность каждого владельца собаки в ČR по достижении 3–6 месяцев возраста. |
| `povinné čipování psů` (Zákonná povinnost označení mikročipem v ČR od 1. 1. 2020 dle novely veterinárního zákona č. 302/2017 Sb.; Národní registr) | **<1** | ano («od kdy», «cena», «databáze») | **Высокий**: обязательное условие для вакцинации от бешенства и выезда за пределы ČR. |
| `poplatek ze psů praha` (Místní poplatek ze psů v hl. m. Praze dle vyhlášky č. 23/2003 Sb. hl. m. Prahy; sazby pro byty vs rodinné domy, osvobození pro psy z útulku) | **<1** | ano («praha 4», «praha 8», «sazba», «úleva útulek») | **Высокий**: локальный справочник для каждого владельца в Праге (базовая ставка в квартире обычно 1 500 Kč/год, пенсионеры 200 Kč/год). |
| `pes v mhd praha` (Smluvní přepravní podmínky PID / DPP: přeprava psů v metru, tramvaji a autobuse; náhubek, vodítko, přepravky, jízdné zdarma s platným kuponem) | **<1** | ano («lístek», «zdarma», «náhubek», «v metru») | **Высокий**: практический городской справочник для повседневной жизни в Праге. |

---

## 5. Предложение адресов страниц (слагов) на чешском языке

Все слаги без диакритики, в нижнем регистре, с дефисами вместо пробелов (`add-language.md`, шаг 1).

### 5.1. Категории (`website/lib/categories.ts`)

| Категория | Код enum | Рекомендуемый чешский slug | Обоснование |
|---|---|---|---|
| Veterinary Clinics | `VET_CLINIC` | `veterina` | В чешском языке слово «veterina» абсолютно доминирует над «veterinář» (Trends 100 против 6; в Праге 60 против 1). Чехи ищут именно «veterina Praha», а не «veterinář Praha». Идеальный, короткий и естественный URL. |
| Grooming | `GROOMING` | `psi-salon` | Общепринятое и естественное обозначение заведения (салона). Полный аналог словацкого `/sk/psi-salon/`. В title выносится связка «Stříhání psů a psí salony». |
| Pet Hotels | `PET_HOTEL` | `hotel-pro-zvirata` | Зонтичный URL, охватывающий как отели для собак (`psí hotel`), так и отели для кошек (`hotel pro kočky`). Полный аналог `/sk/hotel-pre-zvierata/` и `/pl/hotel-dla-zwierzat/`. В title выносится «Psí hotely a hotely pro zvířata». |
| Dog Training | `DOG_TRAINING` | `vycvik-psu` | Главный официальный поисковый запрос категории (Trends 70 в Праге). Полный аналог `/sk/vycvik-psov/`. В title и тексты добавляется народный синоним «cvičák». |
| Pet Shops | `PET_SHOP` | `zverimex` | Безоговорочный лидер чешского поиска (Trends 72 против 19 у «chovatelské potřeby»). Короткий, народный и самый узнаваемый чешский термин. В title добавляется «Zverimex a chovatelské potřeby». |
| Pet Sitting | `PET_SITTING` | `hlidani-zvirat` | Зонтичный URL для охвата передержки собак, кошек и услуг выгула (по аналогии с `/sk/opatrovanie-zvierat/` и `/pl/opieka-nad-zwierzetami/`). В title выносится «Hlídání a venčení psů». |

### 5.2. Системные сегменты маршрутов

| Сегмент | EN | SK | PL | Предложение для CS | Обоснование |
|---|---|---|---|---|---|
| Карточка заведения | `business` | `podnik` | `miejsce` | `podnik` (или `misto`) | В чешском языке слово «podnik» полностью понятно и совпадает со словацким (`/cs/podnik/<slug>/`). Как дружелюбная альтернатива возможно `misto` («místo v katalogu», по аналогии с польским). Рекомендуется `podnik` для единообразия архитектуры сегментов. |
| Хаб города | `city` | `mesto` | `miasto` | `mesto` | Прямой литературный перевод слова «город» на чешский без диакритики («město» -> `mesto`). Маршрут: `/cs/mesto/praha/`. |
| Раздел цен | `prices` | `ceny` | `ceny` | `ceny` | Полное совпадение со словацким и польским: `/cs/veterina/praha/ceny/`. |

### 5.3. Признаки ветклиник (6 признаков в `website/lib/attributePages.ts`)

| Признак | SK slug | PL slug | Предложение для CS | Обоснование |
|---|---|---|---|---|
| Круглосуточно | `nonstop` | `calodobowy` | `nonstop` | Универсальный общепринятый чешский термин («veterina nonstop Praha»). Маршрут: `/cs/veterina/praha/nonstop/`. |
| Суббота | `sobota` | `sobota` | `sobota` | Прямое совпадение («veterina v sobotu»). |
| Воскресенье | `nedela` | `niedziela` | `nedele` | Литературный чешский день недели без диакритики («neděle» -> `nedele`). |
| Экзоты и грызуны | `exoticke-zvierata` | `zwierzeta-egzotyczne` | `exoticka-zvirata` | Точный термин для клиник, специализирующихся на экзотических животных, птицах и грызунах. |
| Выезд на дом | `vyjazd-domov` | `wizyty-domowe` | `vyjezd-domu` | Естественный чешский термин для выездных ветеринарных врачей («výjezd domů» / «výjezdový veterinář»). |
| Англоязычный приём | `po-anglicky` | `po-angielsku` | `anglicky` (или `po-anglicku`) | Литературная форма в чешском — «veterinář mluvící anglicky» / «veterina anglicky». Slug `anglicky` краток и понятен. |

### 5.4. 30 услуг цен (`website/lib/priceSlugs.ts`)

#### GROOMING (`psi-salon`):
1. `full_groom` → `strihani-psa` (по главному запросу) или `kompletni-uprava`
2. `bath_dry` → `koupani-a-fenovani`
3. `hand_stripping` → `trimovani`
4. `deshedding` → `vycesavani-podsady`
5. `nail_trim` → `strihani-drapku`
6. `cat_groom` → `strihani-kocky`

#### VET_CLINIC (`veterina`):
7. `exam` → `vysetreni` (или `klinicke-vysetreni`)
8. `vaccination_dog` → `ockovani-psa`
9. `microchip` → `cipovani`
10. `neuter_cat` → `kastrace-kocoura`
11. `spay_cat` → `kastrace-kocky`
12. `spay_dog` → `kastrace-feny`

#### PET_HOTEL (`hotel-pro-zvirata`):
13. `dog_night` → `pes-noc`
14. `cat_night` → `kocka-noc`
15. `daycare_day` → `psi-skolka`
16. `daycare_pass` → `permanentka-do-skolky`
17. `pickup` → `dovoz-a-odvoz`
18. `extra_walk` → `venceni-navic`

#### DOG_TRAINING (`vycvik-psu`):
19. `puppy_course` → `kurz-pro-stenata` (или `steneci-skolka`)
20. `obedience_course` → `kurz-poslusnosti`
21. `group_lesson` → `skupinova-lekce` (или `skupinovy-vycvik`)
22. `private_lesson` → `individualni-lekce` (или `individualni-vycvik`)
23. `behavior_consult` → `konzultace-chovani`
24. `membership` → `clensky-prispevek`

#### PET_SITTING (`hlidani-zvirat`):
25. `walk_30` → `venceni-30-min`
26. `walk_60` → `venceni-60-min`
27. `cat_visit` → `navsteva-kocky`
28. `house_sitting_night` → `hlidani-u-vas-doma`
29. `boarding_night` → `hlidani-u-hlidace`
30. `daycare_day` → `denni-hlidani`

---

### 5.5. Поисковые названия для страниц цен (`seo` в `website/lib/services.ts`, §3.1) и короткие подписи

Таблица соответствия кодов, коротких меток для прайс-листов и поисковых названий (H1/title) для генерации страниц цен (`add-language.md`, шаг 2):

| Категория | Код услуги | Короткая подпись (`cs`) | Поисковое название `seo` (`cs`, §3.1) |
|---|---|---|---|
| **GROOMING** | `full_groom` | Kompletní úprava | Stříhání psa |
| | `bath_dry` | Koupání a fénování | Koupání psa |
| | `hand_stripping` | Trimování | Trimování psa |
| | `deshedding` | Vyčesávání podsady | Vyčesávání podsady psa |
| | `nail_trim` | Stříhání drápků | Stříhání drápků u psa |
| | `cat_groom` | Úprava kočky | Stříhání kočky |
| **VET_CLINIC** | `exam` | Klinické vyšetření | Vyšetření u veterináře |
| | `vaccination_dog` | Očkování psa | Očkování psa |
| | `microchip` | Čipování | Čipování psa |
| | `neuter_cat` | Kastrace kocoura | Kastrace kocoura |
| | `spay_cat` | Kastrace kočky | Kastrace (sterilizace) kočky |
| | `spay_dog` | Kastrace feny | Kastrace feny (fenky) |
| **PET_HOTEL** | `dog_night` | Pes, noc | Hotel pro psy na noc |
| | `cat_night` | Kočka, noc | Hotel pro kočky na noc |
| | `daycare_day` | Psí školka, den | Psí školka na den |
| | `daycare_pass` | Permanentka do školky | Permanentka do psí školky |
| | `pickup` | Dovoz a odvoz | Dovoz a odvoz psa do hotelu |
| | `extra_walk` | Venčení navíc | Venčení navíc v psím hotelu |
| **DOG_TRAINING** | `puppy_course` | Štěněcí školka | Kurz pro štěňata (štěněcí školka) |
| | `obedience_course` | Kurz základní poslušnosti | Kurz poslušnosti pro psa |
| | `group_lesson` | Skupinová lekce | Skupinový výcvik psa |
| | `private_lesson` | Individuální lekce | Individuální výcvik psa |
| | `behavior_consult` | Konzultace problémového chování | Konzultace chování psa |
| | `membership` | Členský příspěvek | Členství v kynologickém klubu |
| **PET_SITTING** | `walk_30` | Venčení 30 min | Venčení psa na 30 minut |
| | `walk_60` | Venčení 60 min | Venčení psa na hodinu |
| | `cat_visit` | Návštěva kočky | Návštěva kočky doma |
| | `house_sitting_night` | Hlídání u vás doma, noc | Hlídání psa u vás doma přes noc |
| | `boarding_night` | Hlídání u hlídače, noc | Hlídání psa u hlídače přes noc |
| | `daycare_day` | Denní hlídání | Denní hlídání psa |
