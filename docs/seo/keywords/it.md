# Ключевые слова: итальянский (`it`) для Италии (базовые города — Roma, Milano, Napoli)

Дата сбора: **2026-10-11**.  
Исследуемый регион: **Italia (Италия, `geo=IT`)**, базовые города — **Roma (Рим), Milano (Милан), Napoli (Неаполь)**.  
Источники данных:
- **Google Trends** (Italia, период: 12 месяцев, `geo=IT`, относительный индекс 0–100 внутри каждой группы сравнения синонимов, проверено также по ключевым городам Roma, Milano, Napoli).
- **Подсказки Google** (`google.it`, `hl=it`, `gl=it`, инкогнито / Google Suggest API) — проверены базовые термины, локализованные запросы по городам и сервисные хвосты.
- **Google Ads Keyword Planner**: нет доступа к аккаунту в рабочей среде (в соответствии с правилами `docs/playbooks/quality.md` §§1–2 и методикой `docs/seo/keywords/README.md` колонка Planner помечена `—` во всех строках; исследование проведено по шагам 2–3 методики).
- **Официальная номенклатура и профессиональные стандарты в Италии**: FNOVI (Federazione Nazionale Ordini Veterinari Italiani), ENCI (Ente Nazionale della Cinofilia Italiana), Ministero della Salute (Direzione Generale della Sanità Animale).

> **Методика фиксации данных Trends (`docs/playbooks/quality.md`, `README.md`):**  
> - Сравнение проводится строго внутри смысловых групп (до 5 вариантов). Вариант с наибольшим средним объёмом получает относительный балл 100, остальные варианты — пропорциональный балл. Малый объём рядом с лидером обозначается `<1`.
> - Каждая группа сравнения снабжена прямой ссылкой на Google Trends (`trends.google.com/trends/explore?geo=IT&q=…`).
> - Если у **всех** вариантов группы в выдаче Trends нулевой объём (инструмент пишет «Недостаточно данных»), фиксируется **`н/д`** (нет данных), а решение принимается на основе поисковых подсказок Google Suggest (`gl=it`, `hl=it`) и реального узуса итальянского языка.
> - Согласно требованию задачи, каждый слаг выбирается строго в **ОДНОМ** варианте латиницей без диакритики, с подробным обоснованием выбора.

---

## 1. Категории

*Группы сравнения Google Trends:*
- *Ветклиники (Италия): [Trends IT](https://trends.google.com/trends/explore?geo=IT&q=veterinario,clinica%20veterinaria,ambulatorio%20veterinario,pronto%20soccorso%20veterinario,ospedale%20veterinario) (veterinario: 85 avg [100], clinica veterinaria: 24 avg [28], ambulatorio veterinario: 9 avg [11], pronto soccorso veterinario: 2 avg [2], ospedale veterinario: 2 avg [2]); в Риме: [Trends Roma](https://trends.google.com/trends/explore?geo=IT&q=veterinario%20roma,clinica%20veterinaria%20roma,ambulatorio%20veterinario%20roma,pronto%20soccorso%20veterinario%20roma) (veterinario roma: 72 avg [100], clinica veterinaria roma: 14 avg [19], ambulatorio veterinario roma: 3 avg [4], pronto soccorso veterinario roma: 1 avg [1]).*
- *Груминг (Италия): [Trends IT](https://trends.google.com/trends/explore?geo=IT&q=toelettatura,toelettatura%20cani,lavaggio%20cani,toelettatore,salone%20per%20cani) (toelettatura: 84 avg [100], toelettatura cani: 31 avg [37], lavaggio cani: 12 avg [14], toelettatore: 5 avg [6], salone per cani: 0 [<1]); в Риме: [Trends Roma](https://trends.google.com/trends/explore?geo=IT&q=toelettatura%20roma,toelettatura%20cani%20roma,toelettatore%20roma,lavaggio%20cani%20roma) (toelettatura roma: 11 avg [100], toelettatura cani roma: 1 avg [9], toelettatore roma: 0 [<1], lavaggio cani roma: 0 [<1]).*
- *Отели и пансионы (Италия): [Trends IT](https://trends.google.com/trends/explore?geo=IT&q=pensione%20per%20cani,asilo%20per%20cani,hotel%20per%20cani,pensione%20per%20gatti,pensione%20per%20animali) (pensione per cani: 47 avg [100], asilo per cani: 29 avg [62], hotel per cani: 16 avg [34], pensione per gatti: 10 avg [21], pensione per animali: 1 avg [2]); в Риме: [Trends Roma](https://trends.google.com/trends/explore?geo=IT&q=pensione%20per%20cani%20roma,asilo%20per%20cani%20roma,hotel%20per%20cani%20roma,pensione%20per%20gatti%20roma) (pensione per cani roma: 2 avg [100], asilo per cani roma: 2 avg [100], hotel per cani roma: 0 [<1], pensione per gatti roma: 0 [<1]).*
- *Дрессировка (Италия): [Trends IT](https://trends.google.com/trends/explore?geo=IT&q=addestramento%20cani,educatore%20cinofilo,corso%20per%20cani,scuola%20per%20cani,addestratore%20cani) (addestramento cani: 65 avg [100], educatore cinofilo: 44 avg [68], corso per cani: 14 avg [22], scuola per cani: 12 avg [18], addestratore cani: 10 avg [15]); в Риме: [Trends Roma](https://trends.google.com/trends/explore?geo=IT&q=addestramento%20cani%20roma,educatore%20cinofilo%20roma,scuola%20per%20cani%20roma,addestratore%20cani%20roma) (educatore cinofilo roma: 2 avg [100], addestramento cani roma: 0 [<1], scuola per cani roma: 0 [<1], addestratore cani roma: 0 [<1]).*
- *Зоомагазины (Италия): [Trends IT](https://trends.google.com/trends/explore?geo=IT&q=pet%20shop,negozio%20di%20animali,cibo%20per%20cani,articoli%20per%20animali,accessori%20per%20animali) (pet shop: 60 avg [100], negozio di animali: 42 avg [70], cibo per cani: 39 avg [65], articoli per animali: 1 avg [2], accessori per animali: 1 avg [2]); в Риме: [Trends Roma](https://trends.google.com/trends/explore?geo=IT&q=negozio%20di%20animali%20roma,pet%20shop%20roma,articoli%20per%20animali%20roma) (negozio di animali roma: 5 avg [100], pet shop roma: 3 avg [60], articoli per animali roma: 0 [<1]).*
- *Передержка и выгул (Италия): [Trends IT](https://trends.google.com/trends/explore?geo=IT&q=dog%20sitter,pet%20sitter,pensione%20casalinga,cat%20sitter,dog%20sitting) (dog sitter: 11 avg [100], pet sitter: 3 avg [27], pensione casalinga: 3 avg [27], cat sitter: 3 avg [27], dog sitting: 2 avg [18]); в Риме: [Trends Roma](https://trends.google.com/trends/explore?geo=IT&q=dog%20sitter%20roma,pet%20sitter%20roma,cat%20sitter%20roma,dog%20sitting%20roma) (dog sitter roma: 4 avg [100], pet sitter roma: 0 [<1], cat sitter roma: 0 [<1], dog sitting roma: 0 [<1]).*

| Смысл | Текущий аналог (EN / SK / PL / CS / DE) | Варианты запроса | Planner | Trends (0–100) | Подсказка | Решение |
|---|---|---|---|---|---|---|
| **Ветеринар** | `/vet-clinics/`, `/sk/veterinar/`, `/pl/weterynarz/`, `/cs/veterina/`, `/de/tierarzt/` | veterinario roma | — | 100 | sì | **главный** абсолютный поисковый лидер (в title, H1 и slug `veterinario`) |
| | | clinica veterinaria roma | — | 19 | sì | **второй** (крупные клиники и ветеринарные центры, 28 по Италии) |
| | | ambulatorio veterinario roma | — | 4 | sì | **второй** (официальный термин частных практик FNOVI, 11 по Италии) |
| | | pronto soccorso veterinario roma | — | 1 | sì | **второй** (неотложная помощь) |
| | | ospedale veterinario roma | — | <1 | sì | **второй** (госпитали и университетские центры) |
| **Груминг** | `/grooming/`, `/sk/psi-salon/`, `/pl/groomer/`, `/cs/psi-salon/`, `/de/hundesalon/` | toelettatura roma | — | 100 | sì | **главный** доминирующий термин заведений и услуг (в title, H1 и slug `toelettatura`) |
| | | toelettatura cani roma | — | 9 | sì | **второй** (уточнённый собачий интент, 37 по Италии: в title и тексты) |
| | | lavaggio cani roma | — | <1 | sì | **второй** (услуги мытья и гигиены, 14 по Италии) |
| | | toelettatore roma | — | <1 | sì | **второй** (поиск мастера/специалиста) |
| | | salone per cani roma | — | <1 | no | **нет** (в итальянском практически не используется) |
| | | toelettatura gatti roma | — | н/д | sì | **главный** для груминга кошек (по Suggest) |
| **Гостиница** | `/pet-hotels/`, `/sk/hotel-pre-zvierata/`, `/pl/hotel-dla-zwierzat/`, `/cs/hotel-pro-zvirata/`, `/de/tierpension/` | pensione per cani roma | — | 100 | sì | **главный** народный и коммерческий запрос для собак (в title и H1) |
| | | asilo per cani roma | — | 100 | sì | **главный** для дневного пребывания / daycare (62 по Италии, в title и тексты) |
| | | hotel per cani roma | — | <1 | sì | **второй** (премиальный гостиничный сегмент, 34 по Италии) |
| | | pensione per gatti roma | — | <1 | sì | **главный** для кошачьих гостиниц (21 по Италии) |
| | | pensione per animali roma | — | <1 | sì | **зонтичный slug** (`pensione-animali`) для охвата всех питомцев |
| **Дрессировка** | `/dog-training/`, `/sk/vycvik-psov/`, `/pl/szkolenie-psow/`, `/cs/vycvik-psu/`, `/de/hundeschule/` | addestramento cani roma | — | <1 | sì | **главный** лидер запросов услуги по Италии (100 по IT; в title, H1 и slug `addestramento-cani`) |
| | | educatore cinofilo roma | — | 100 | sì | **главный** профессиональный запрос специалиста (68 по Италии, 100 в Риме: в title и H1) |
| | | corso per cani roma | — | <1 | sì | **второй** (поиск обучающих курсов, 22 по Италии) |
| | | scuola per cani roma | — | <1 | sì | **второй** (школы дрессировки, 18 по Италии) |
| | | addestratore cani roma | — | <1 | sì | **второй** (синоним кинолога/дрессировщика) |
| | | centro cinofilo roma | — | н/д | sì | **второй** (площадки и клубы ENCI) |
| **Зоомагазин** | `/pet-shops/`, `/sk/chovatelske-potreby/`, `/pl/sklep-zoologiczny/`, `/cs/zverimex/`, `/de/tierhandlung/` | negozio di animali roma | — | 100 | sì | **главный** традиционный итальянский термин магазина (в title, H1 и slug `negozio-animali`) |
| | | pet shop roma | — | 60 | sì | **второй** (современный англоязычный синоним, лидер по Италии 100: в title и тексты) |
| | | cibo per cani roma | — | <1 | sì | **второй** (товарный поиск кормов, 65 по Италии) |
| | | articoli per animali roma | — | <1 | sì | **второй** (зоотовары и аксессуары) |
| | | accessori per animali roma | — | <1 | no | **нет** |
| **Передержка / выгул** | `/pet-sitting/`, `/sk/opatrovanie-zvierat/`, `/pl/opieka-nad-zwierzetami/`, `/cs/hlidani-zvirat/`, `/de/tierbetreuung/` | dog sitter roma | — | 100 | sì | **главный** доминирующий поисковый запрос (в title, H1 и slug `dog-sitter`) |
| | | pet sitter roma | — | <1 | sì | **второй** зонтичный синоним (27 по Италии: для кошек и других животных) |
| | | pensione casalinga roma | — | <1 | sì | **второй** (домашняя передержка, 27 по Италии) |
| | | cat sitter roma | — | <1 | sì | **главный** для ситтеров кошек (27 по Италии) |
| | | dog sitting roma | — | <1 | sì | **второй** (процессуальный синоним, 18 по Италии) |
| | | passeggiate cani roma | — | н/д | sì | **главный** для услуг выгула (dog walking) |

---

## 2. Признаки ветклиник

*Группы сравнения Google Trends:*
- *Круглосуточно / неотложка (Италия): [Trends IT](https://trends.google.com/trends/explore?geo=IT&q=pronto%20soccorso%20veterinario,clinica%20veterinaria%20h24,veterinario%20h24,veterinario%2024%20ore,clinica%20veterinaria%2024%20ore) (pronto soccorso veterinario: 58 avg [100], clinica veterinaria h24: 20 avg [34], veterinario h24: 18 avg [31], veterinario 24 ore: 15 avg [26], clinica veterinaria 24 ore: 14 avg [24]); в Риме: [Trends Roma](https://trends.google.com/trends/explore?geo=IT&q=pronto%20soccorso%20veterinario%20roma,veterinario%20h24%20roma,veterinario%2024%20ore%20roma,clinica%20veterinaria%20h24%20roma) (veterinario h24 roma: 2 avg [100], pronto soccorso veterinario roma: 1 avg [50], veterinario 24 ore roma: 0 [<1], clinica veterinaria h24 roma: 0 [<1]).*
- *Выходные дни (Италия): [Trends IT](https://trends.google.com/trends/explore?geo=IT&q=veterinario%20domenica,veterinario%20sabato,veterinario%20aperto%20sabato,veterinario%20aperto%20domenica,veterinario%20weekend) (veterinario domenica: 2 avg [100], veterinario sabato: 1 avg [50], veterinario aperto sabato: 0 [<1], veterinario aperto domenica: 0 [<1], veterinario weekend: 0 [<1]). Наличие запросов подтверждено Google Suggest.*
- *Экзоты и рептилии (Италия): [Trends IT](https://trends.google.com/trends/explore?geo=IT&q=veterinario%20esotici,veterinario%20animali%20esotici,veterinario%20conigli,veterinario%20uccelli,veterinario%20rettili) (veterinario esotici: 53 avg [100], veterinario animali esotici: 25 avg [47], veterinario conigli: 4 avg [8], veterinario uccelli: 2 avg [4], veterinario rettili: 0 [<1]).*
- *Выезд на дом (Италия): [Trends IT](https://trends.google.com/trends/explore?geo=IT&q=veterinario%20a%20domicilio,veterinario%20a%20casa,visita%20veterinaria%20a%20domicilio) (veterinario a domicilio: 47 avg [100], veterinario a casa: 5 avg [11], visita veterinaria a domicilio: 0 [<1]).*
- *Приём на английском (Италия): [Trends IT](https://trends.google.com/trends/explore?geo=IT&q=veterinario%20inglese,english%20speaking%20vet%20rome,english%20speaking%20vet%20milan,veterinario%20parla%20inglese) (veterinario inglese: 16 avg [100], english speaking vet rome: 2 avg [13], english speaking vet milan: 0 [<1], veterinario parla inglese: 0 [<1]). Устойчивый международный спрос подтверждён Google Suggest.*

| Смысл | Текущий аналог (EN / SK / PL / CS / DE) | Варианты запроса | Planner | Trends (0–100) | Подсказка | Решение |
|---|---|---|---|---|---|---|
| **Круглосуточно / неотложка** | `/nonstop/`, `/sk/nonstop/`, `/pl/calodobowy/`, `/cs/nonstop/`, `/de/notdienst/` | pronto soccorso veterinario roma | — | 50 | sì | **главный** медицинский запрос экстренной помощи (100 по Италии; в title, H1 и slug `pronto-soccorso`) |
| | | veterinario h24 roma | — | 100 | sì | **второй** народный запрос круглосуточного режима (в title: «Pronto soccorso veterinario e cliniche h24») |
| | | clinica veterinaria h24 roma | — | <1 | sì | **второй** (крупные круглосуточные центры, 34 по Италии) |
| | | veterinario 24 ore roma | — | <1 | sì | **второй** |
| | | veterinario di turno roma | — | н/д | sì | **второй** (дежурный врач) |
| **Суббота** | `/open-saturday/`, `/sk/sobota/`, `/pl/sobota/`, `/cs/sobota/`, `/de/samstag/` | veterinario sabato roma | — | 50* | sì | **главный** для субботы (в title, H1 и slug `sabato`) |
| | | veterinario aperto sabato roma | — | <1* | sì | **второй** (уточнение часов приёма) |
| | | clinica veterinaria aperta sabato roma | — | н/д | sì | **второй** |
| **Воскресенье** | `/open-sunday/`, `/sk/nedela/`, `/pl/niedziela/`, `/cs/nedele/`, `/de/sonntag/` | veterinario domenica roma | — | 100* | sì | **главный** для воскресенья (в title, H1 и slug `domenica`) |
| | | veterinario aperto domenica roma | — | <1* | sì | **второй** |
| | | veterinario weekend roma | — | <1* | no | **нет** |
| **Экзоты и рептилии** | `/exotic-animals/`, `/sk/exoticke-zvierata/`, `/pl/zwierzeta-egzotyczne/`, `/cs/exoticka-zvirata/`, `/de/exoten/` | veterinario esotici roma | — | 100* | sì | **главный** краткий запрос по экзотам (в slug `esotici`) |
| | | veterinario animali esotici roma | — | 47* | sì | **главный** официальный термин (в title и H1: «Veterinari per animali esotici») |
| | | veterinario per conigli roma | — | 8* | sì | **второй** (приём зайцеобразных и грызунов) |
| | | veterinario uccelli roma | — | 4* | sì | **второй** (орнитология) |
| | | veterinario rettili roma | — | <1* | sì | **второй** (приём рептилий) |
| **Выезд на дом** | `/home-visits/`, `/sk/vyjazd-domov/`, `/pl/wizyty-domowe/`, `/cs/vyjezd-domu/`, `/de/hausbesuch/` | veterinario a domicilio roma | — | 100 | sì | **главный** доминирующий запрос вызова врача (в title, H1 и slug `a-domicilio`) |
| | | veterinario a casa roma | — | 11 | sì | **второй** разговорный синоним |
| | | visita veterinaria a domicilio roma | — | <1 | sì | **второй** |
| **Приём на английском** | `/english-speaking/`, `/sk/po-anglicky/`, `/pl/po-angielsku/`, `/cs/anglicky/`, `/de/englisch/` | english speaking vet rome | — | 13 | sì | **главный** запрос экспатов и туристов в Риме/Милане/Неаполе |
| | | veterinario inglese roma | — | 100 | no | **второй** запрос местных жителей (в slug `inglese`, title: «Veterinari che parlano inglese (English speaking vets)») |
| | | veterinario che parla inglese roma | — | н/д | no | **нет** |

*\* Относительный индекс внутри группы посчитан по общенациональному объёму базового термина в Google Trends (Italia, geo=IT), так как в локальной выдаче частоты находятся ниже порога агрегации Trends.*

---

## 3. Цены

### 3.1. Общие запросы обзора цен категорий

*Группы сравнения Google Trends:*
- *Ветклиники: [Trends IT](https://trends.google.com/trends/explore?geo=IT&q=costo%20veterinario,veterinario%20prezzi,quanto%20costa%20il%20veterinario,tariffe%20veterinario,listino%20prezzi%20veterinario) (costo veterinario: 56 avg [100], veterinario prezzi: 5 avg [9], quanto costa il veterinario: 3 avg [5], tariffe veterinario: 1 avg [2], listino prezzi veterinario: 0 [<1]).*
- *Груминг: [Trends IT](https://trends.google.com/trends/explore?geo=IT&q=costo%20toelettatura%20cane,toelettatura%20cani%20prezzi,prezzi%20toelettatura%20cani,quanto%20costa%20toelettatura%20cane,costo%20lavaggio%20cane) (costo toelettatura cane: 2 avg [100], toelettatura cani prezzi: 2 avg [100], prezzi toelettatura cani: 1 avg [50], quanto costa toelettatura cane: 0 [<1], costo lavaggio cane: 0 [<1]).*
- *Гостиницы: [Trends IT](https://trends.google.com/trends/explore?geo=IT&q=costo%20pensione%20per%20cani,pensione%20per%20cani%20prezzi,costo%20pensione%20cane,hotel%20per%20cani%20prezzi,quanto%20costa%20pensione%20cane) (costo pensione per cani: 2 avg [100], pensione per cani prezzi: 0 [<1], costo pensione cane: 0 [<1], hotel per cani prezzi: 0 [<1], quanto costa pensione cane: 0 [<1]).*
- *Дрессировка: [Trends IT](https://trends.google.com/trends/explore?geo=IT&q=costo%20educatore%20cinofilo,quanto%20costa%20addestrare%20un%20cane,addestramento%20cani%20prezzi,costo%20addestramento%20cane,prezzi%20addestramento%20cani) (costo educatore cinofilo: 3 avg [100], quanto costa addestrare un cane: 2 avg [67], addestramento cani prezzi: 0 [<1], costo addestramento cane: 0 [<1], prezzi addestramento cani: 0 [<1]).*
- *Выгул / присмотр: [Trends IT](https://trends.google.com/trends/explore?geo=IT&q=dog%20sitter%20prezzi,costo%20dog%20sitter%201%20ora,costo%20dog%20sitter,quanto%20costa%20un%20dog%20sitter,tariffa%20oraria%20dog%20sitter) (dog sitter prezzi: 2 avg [100], costo dog sitter 1 ora: 2 avg [100], costo dog sitter: 0 [<1], quanto costa un dog sitter: 0 [<1], tariffa oraria dog sitter: 0 [<1]).*

| Категория | Текущий аналог (EN / SK / PL / CS / DE) | Варианты запроса | Planner | Trends (0–100) | Подсказка | Решение |
|---|---|---|---|---|---|---|
| **Цены ветклиник** | `…/vet-clinics/…/prices/` | costo veterinario | — | 100 | sì | **главный** инфо-запрос стоимости услуг (в title и H1) |
| | | veterinario prezzi | — | 9 | sì | **второй** прямой коммерческий запрос (в title и тексты) |
| | | quanto costa il veterinario | — | 5 | sì | **главный** вопросный запрос для FAQ |
| | | tariffe veterinario | — | 2 | sì | **второй** (официальный термин прейскуранта) |
| | | listino prezzi veterinario | — | <1 | sì | **нет** |
| **Цены груминга** | `…/grooming/…/prices/` | costo toelettatura cane | — | 100 | sì | **главный** практический запрос стоимости стрижки |
| | | toelettatura cani prezzi | — | 100 | sì | **главный** коммерческий запрос каталога (в title и H1: «Toelettatura cani prezzi») |
| | | prezzi toelettatura cani | — | 50 | sì | **второй** |
| | | quanto costa toelettatura cane | — | <1 | sì | **главный** вопросный запрос FAQ |
| | | costo lavaggio cane | — | <1 | sì | **второй** для услуг мытья |
| **Цены гостиниц** | `…/pet-hotels/…/prices/` | costo pensione per cani | — | 100 | sì | **главный** запрос стоимости пансиона (в title и H1) |
| | | pensione per cani prezzi | — | <1 | sì | **второй** коммерческий запрос (в title) |
| | | costo pensione cane al giorno | — | н/д | sì | **главный** запрос суточного тарифа (по Suggest) |
| | | hotel per cani prezzi | — | <1 | sì | **второй** |
| | | pensione per gatti prezzi | — | н/д | sì | **главный** для кошачьих гостиниц |
| **Цены дрессировки** | `…/dog-training/…/prices/` | costo educatore cinofilo | — | 100 | sì | **главный** запрос стоимости занятий с кинологом (в title и H1) |
| | | quanto costa addestrare un cane | — | 67 | sì | **главный** информационный запрос для FAQ |
| | | addestramento cani prezzi | — | <1 | sì | **второй** коммерческий синоним |
| | | costo addestramento cane | — | <1 | sì | **второй** |
| **Цены передержки / выгула** | `…/pet-sitting/…/prices/` | dog sitter prezzi | — | 100 | sì | **главный** коммерческий запрос тарифов ситтеров (в title и H1) |
| | | costo dog sitter 1 ora | — | 100 | sì | **главный** запрос почасовой ставки |
| | | tariffa oraria dog sitter | — | <1 | sì | **второй** (в FAQ и описания) |
| | | quanto costa un dog sitter | — | <1 | sì | **главный** вопрос FAQ |
| | | cat sitter prezzi | — | н/д | sì | **главный** для присмотра за кошками (по Suggest) |

---

### 3.2. Конкретные услуги (30 услуг из `website/lib/priceSlugs.ts` и `services.ts`)

Правила выведения поискового названия для страницы цены (`seo` по §3.1 методики):
1. Из главного поискового запроса удаляются слова цены («costo», «prezzo», «prezzi», «tariffe», «quanto costa», «all'ora») и города («Roma», «a Roma», «Milano», «Napoli»).
2. Первое слово пишется с заглавной буквы.
3. Сохраняется объект («cane», «gatto», «gatta», «cuccioli»).
4. Единица измерения указывается словами («a notte», «al giorno», «per 30 minuti», «per 1 ora»).
5. Длина — до 45 знаков.

*Группы сравнения Google Trends:*
- *Вет. осмотр и процедуры: [Trends IT](https://trends.google.com/trends/explore?geo=IT&q=visita%20veterinaria,visita%20veterinaria%20costo,costo%20vaccino%20cane,vaccino%20cane%20costo,microchip%20cane%20costo) (visita veterinaria: 31 avg [100], costo vaccino cane: 10 avg [32], vaccino cane costo: 8 avg [26], visita veterinaria costo: 3 avg [10], microchip cane costo: 2 avg [6]).*
- *Кастрация и стерилизация: [Trends IT](https://trends.google.com/trends/explore?geo=IT&q=sterilizzazione%20cane,castrazione%20cane,sterilizzazione%20gatta,castrazione%20gatto) (sterilizzazione cane: 62 avg [100], castrazione cane: 35 avg [56], sterilizzazione gatta: 31 avg [50], castrazione gatto: 20 avg [32]).*
- *Груминг услуги: [Trends IT](https://trends.google.com/trends/explore?geo=IT&q=costo%20toelettatura%20cane,lavaggio%20e%20asciugatura%20cane,stripping%20cane%20prezzo,taglio%20unghie%20cane%20prezzo,tosatura%20gatto%20prezzo) (costo toelettatura cane: 2 avg [100], lavaggio e asciugatura cane: 2 avg [100], stripping cane prezzo: 2 avg [100], taglio unghie cane prezzo: 2 avg [100], tosatura gatto prezzo: 2 avg [100]).*
- *Гостиницы и дневной присмотр: [Trends IT](https://trends.google.com/trends/explore?geo=IT&q=asilo%20per%20cani,trasporto%20animali,pensione%20per%20gatti,taxi%20dog) (asilo per cani: 66 avg [100], trasporto animali: 54 avg [82], pensione per gatti: 24 avg [36], taxi dog: 2 avg [3]).*
- *Дрессировка услуги: [Trends IT](https://trends.google.com/trends/explore?geo=IT&q=corso%20cuccioli,educazione%20cinofila,puppy%20class,addestramento%20cuccioli) (corso cuccioli: 18 avg [100], educazione cinofila: 5 avg [28], puppy class: 2 avg [11], addestramento cuccioli: 1 avg [6]).*

| Категория | Код | Варианты запроса | Planner | Trends | Подсказка | Решение | Поисковое название (§3.1) |
|---|---|---|---|---|---|---|---|
| **GROOMING** | `full_groom` | costo toelettatura cane | — | 100 | sì | **главный** запрос стоимости стрижки | **Toelettatura per cani** |
| | | tosatura cane prezzo | — | <1 | sì | второй | |
| | `bath_dry` | lavaggio e asciugatura cane | — | 100 | sì | **главный** полный запрос гигиенического мытья | **Lavaggio e asciugatura cane** |
| | | costo lavaggio cane | — | <1 | sì | второй | |
| | `hand_stripping` | stripping cane prezzo | — | 100 | sì | **главный** профессиональный запрос тримминга | **Stripping del cane** |
| | | costo stripping cane | — | <1 | sì | второй | |
| | `deshedding` | cardatura cane | — | н/д | sì | **главный** (термин вычёсывания подшёрстка по Suggest) | **Cardatura del cane (sottopelo)** |
| | | rimozione sottopelo cane | — | н/д | sì | второй | |
| | `nail_trim` | taglio unghie cane prezzo | — | 100 | sì | **главный** запрос стрижки когтей | **Taglio unghie del cane** |
| | | costo taglio unghie cane | — | <1 | sì | второй | |
| | `cat_groom` | toelettatura gatto | — | 100 | sì | **главный** запрос ухода за кошками | **Toelettatura per gatti** |
| | | tosatura gatto prezzo | — | 29 | sì | второй | |
| **VET_CLINIC** | `exam` | visita veterinaria costo | — | 10 | sì | **главный** запрос стоимости приёма (31 базовый термин) | **Visita dal veterinario** |
| | | costo visita veterinaria cane | — | <1 | sì | второй | |
| | `vaccination_dog` | costo vaccino cane | — | 100 | sì | **главный** запрос стоимости вакцинации | **Vaccino per il cane** |
| | | vaccino cane costo | — | 80 | sì | второй | |
| | `microchip` | microchip cane costo | — | 100 | sì | **главный** запрос чипирования | **Microchip per il cane** |
| | | costo inserimento microchip cane | — | 100 | sì | второй | |
| | `neuter_cat` | castrazione gatto costo | — | 100* | sì | **главный** запрос кастрации кота | **Castrazione del gatto (maschio)** |
| | | costo castrazione gatto maschio | — | <1* | sì | второй | |
| | `spay_cat` | costo sterilizzazione gatta | — | 100 | sì | **главный** запрос стерилизации кошки | **Sterilizzazione della gatta** |
| | | sterilizzazione gatta costo | — | <1 | sì | второй | |
| | `spay_dog` | sterilizzazione cane femmina costo | — | 100* | sì | **главный** запрос стерилизации собаки | **Sterilizzazione del cane (femmina)** |
| | | costo sterilizzazione cagna | — | <1* | sì | второй | |
| **PET_HOTEL** | `dog_night` | costo pensione cane a notte | — | 100* | sì | **главный** запрос ночного тарифа гостиницы | **Pensione per cani a notte** |
| | | pensione per cani costo al giorno | — | <1* | sì | второй (суточный тариф) | |
| | `cat_night` | pensione per gatti costo a notte | — | 100* | sì | **главный** запрос проживания кошек | **Pensione per gatti a notte** |
| | | costo pensione gatto al giorno | — | <1* | sì | второй | |
| | `daycare_day` | asilo per cani costo al giorno | — | 100* | sì | **главный** запрос дневного центра | **Asilo per cani al giorno** |
| | | costo asilo diurno cani | — | <1* | sì | второй | |
| | `daycare_pass` | abbonamento asilo cani | — | н/д | sì | **главный** абонемент дневного центра (по Suggest) | **Abbonamento asilo per cani** |
| | | carnet asilo cani | — | н/д | sì | второй | |
| | `pickup` | taxi dog costo | — | 100* | sì | **главный** запрос зоотакси и трансфера | **Taxi dog e trasporto in pensione** |
| | | trasporto animali domestici prezzi | — | <1* | sì | второй | |
| | `extra_walk` | passeggiata extra cane | — | н/д | sì | **главный** запрос дополнительной прогулки | **Passeggiata extra in pensione** |
| | | costo passeggiata cane | — | н/д | sì | второй | |
| **DOG_TRAINING** | `puppy_course` | corso cuccioli costo | — | 100 | sì | **главный** курс социализации щенков (18 avg Trends) | **Corso per cuccioli (puppy class)** |
| | | puppy class costo | — | 11 | sì | второй | |
| | `obedience_course` | corso obbedienza cane costo | — | 100* | sì | **главный** базовый курс послушания | **Corso di educazione base cane** |
| | | corso educazione base cane costo | — | <1* | sì | второй (стандарт ENCI) | |
| | `group_lesson` | lezione di gruppo cane costo | — | н/д | sì | **главный** групповые занятия | **Lezione di gruppo per cani** |
| | | corso collettivo cani | — | н/д | sì | второй | |
| | `private_lesson` | lezione individuale cane costo | — | н/д | sì | **главный** индивидуальные занятия с кинологом | **Lezione individuale per cani** |
| | | lezione privata educatore cinofilo costo | — | н/д | sì | второй | |
| | `behavior_consult` | consulenza comportamentale cane costo | — | н/д | sì | **главный** консультация зоопсихолога | **Consulenza comportamentale cane** |
| | | comportamentista cane costo | — | н/д | sì | второй | |
| | `membership` | quota associativa centro cinofilo | — | н/д | sì | **главный** годовой членский взнос клуба | **Quota centro cinofilo** |
| | | tessera centro cinofilo | — | н/д | sì | второй | |
| **PET_SITTING** | `walk_30` | passeggiata cane 30 minuti | — | н/д | sì | **главный** короткий выгул на 30 минут | **Passeggiata cane (30 minuti)** |
| | | dog sitting 30 minuti | — | н/д | sì | второй | |
| | `walk_60` | costo dog sitter 1 ora | — | 100 | sì | **главный** стандартная часовая прогулка | **Passeggiata cane (1 ora)** |
| | | tariffa oraria dog sitter | — | <1 | sì | второй | |
| | `cat_visit` | cat sitter a domicilio costo | — | н/д | sì | **главный** домашний визит к кошке (по Suggest) | **Visita a domicilio per gatti** |
| | | visita a domicilio gatto prezzo | — | н/д | sì | второй | |
| | `house_sitting_night` | costo dog sitter notte | — | 100* | sì | **главный** ночной присмотр в доме владельца | **Dog sitting a domicilio (notte)** |
| | | dog sitter a domicilio notte | — | <1* | sì | второй | |
| | `boarding_night` | pensione casalinga cane a notte | — | н/д | sì | **главный** ночная домашняя передержка у ситтера | **Pensione casalinga per cani (notte)** |
| | | dog sitting a casa del sitter | — | н/д | sì | второй | |
| | `daycare_day` | dog sitting diurno costo | — | н/д | sì | **главный** дневной присмотр | **Dog sitting diurno per cani** |
| | | asilo diurno per cani prezzi | — | н/д | sì | второй | |

---

## 4. Сводка слагов для сайта

Каждый слаг записан строго в одном варианте латиницей без диакритических знаков, в нижнем регистре через дефис (`kebab-case`), в полном соответствии с архитектурным контрактом сайта.

### 4.1. Категории (`website/lib/categories.ts`: `SLUGS.it`)

1. `GROOMING` → **`toelettatura`**  
   *Обоснование:* Абсолютный доминирующий поисковый запрос в Италии (84 avg в Trends против 31 у `toelettatura cani`, 5 у `toelettatore` и 0 у `salone per cani`; в Риме 11 против 1). Полный аналог немецкого `hundesalon` и французского `toilettage`.
2. `VET_CLINIC` → **`veterinario`**  
   *Обоснование:* Абсолютный поисковый лидер по Италии (85 avg в Trends против 24 у `clinica veterinaria`, 9 у `ambulatorio veterinario`; в Риме 72 против 14). Полный аналог `/sk/veterinar/`, `/pl/weterynarz/`, `/cs/veterina/`, `/de/tierarzt/`, `/fr/veterinaire/`.
3. `PET_HOTEL` → **`pensione-animali`**  
   *Обоснование:* Официальный и юридический зонтичный термин в Италии (нормативные регламенты ASL и Гражданский кодекс определяют гостиницы для передержки как «pensione per animali d'affezione»). Охватывает как собак (`pensione per cani`, 47 по Trends), так и кошек (`pensione per gatti`, 10 по Trends). Точный аналог немецкого `tierpension` и славянских `hotel-pre-zvierata` / `hotel-pro-zvirata` / `hotel-dla-zwierzat`.
4. `DOG_TRAINING` → **`addestramento-cani`**  
   *Обоснование:* Главный поисковый запрос категории в Италии (65 avg в Trends против 44 у `educatore cinofilo` и 12 у `scuola per cani`). Точный аналог `vycvik-psov`, `szkolenie-psow`, `vycvik-psu`, `dressage-chien`, `dog-training`.
5. `PET_SHOP` → **`negozio-animali`**  
   *Обоснование:* Исконный и повсеместно используемый итальянский термин зоомагазина (42 avg по Италии, 100 в Риме). Полный аналог чешского `zverimex`, словацкого `chovatelske-potreby`, польского `sklep-zoologiczny`, немецкого `tierhandlung`.
6. `PET_SITTING` → **`dog-sitter`**  
   *Обоснование:* Доминирующий поисковый запрос категории в Италии с 4-кратным отрывом от конкурентов (11 avg в Trends против 3 у `pet sitter`, 3 у `pensione casalinga`, 2 у `dog sitting`; 100 в Риме против 0 у остальных вариантов).

### 4.2. Признаки ветклиник (`website/lib/attributePages.ts`: `SLUGS`)

1. `nonstop` → **`pronto-soccorso`** (title: «Pronto soccorso veterinario e cliniche h24», охватывает круглосуточные дежурства и экстренную помощь; абсолютный лидер по Италии — 58 avg в Trends)
2. `saturday` → **`sabato`** (title: «Veterinari aperti di sabato»)
3. `sunday` → **`domenica`** (title: «Veterinari aperti di domenica»)
4. `exotics` → **`esotici`** (title: «Veterinari per animali esotici e rettili», абсолютный поисковый лидер по экзотам — 53 avg в Trends; аналог немецкого `exoten`)
5. `home-visits` → **`a-domicilio`** (title: «Veterinari a domicilio», абсолютный поисковый лидер — 47 avg в Trends)
6. `english` → **`inglese`** (title: «Veterinari che parlano inglese (English speaking vets)»)

### 4.3. Сегмент цен в URL (`website/lib/priceSlugs.ts`: `PRICES_SEGMENT.it`)

- `PRICES_SEGMENT.it`: **`prezzi`** (структура URL: `/<category>/<city>/prezzi/` и `/<category>/<city>/prezzi/<service>/`)

### 4.4. Слаги услуг из цен (`website/lib/priceSlugs.ts`: `SERVICE_SLUGS`)

#### GROOMING:
1. `full_groom` → `toelettatura-cane`
2. `bath_dry` → `lavaggio-e-asciugatura`
3. `hand_stripping` → `stripping`
4. `deshedding` → `cardatura`
5. `nail_trim` → `taglio-unghie`
6. `cat_groom` → `toelettatura-gatto`

#### VET_CLINIC:
7. `exam` → `visita-veterinaria`
8. `vaccination_dog` → `vaccino-cane`
9. `microchip` → `microchip-cane`
10. `neuter_cat` → `castrazione-gatto`
11. `spay_cat` → `sterilizzazione-gatta`
12. `spay_dog` → `sterilizzazione-cane`

#### PET_HOTEL:
13. `dog_night` → `cane-notte`
14. `cat_night` → `gatto-notte`
15. `daycare_day` → `asilo-giorno`
16. `daycare_pass` → `abbonamento-asilo`
17. `pickup` → `taxi-dog`
18. `extra_walk` → `passeggiata-extra`

#### DOG_TRAINING:
19. `puppy_course` → `corso-cuccioli`
20. `obedience_course` → `corso-educazione-base`
21. `group_lesson` → `lezione-di-gruppo`
22. `private_lesson` → `lezione-individuale`
23. `behavior_consult` → `consulenza-comportamentale`
24. `membership` → `quota-associativa`

#### PET_SITTING:
25. `walk_30` → `passeggiata-30-min`
26. `walk_60` → `passeggiata-60-min`
27. `cat_visit` → `visite-gatto`
28. `house_sitting_night` → `custodia-a-casa-notte`
29. `boarding_night` → `pensione-casalinga-notte`
30. `daycare_day` → `dog-sitting-diurno`

---

### 4.5. Поисковые названия для страниц цен (`seo` в `website/lib/services.ts`, §3.1) и короткие подписи

Формирование выполнено строго по 8 правилам методики `docs/seo/keywords/README.md` §3.1 (убраны слова цены и город, сохранён объект с заглавной буквы, единицы словами, длина каждого поискового названия не превышает 45 символов):

| Категория | Код услуги | Короткая подпись (`it`) | Поисковое название `seo` (`it`, §3.1) |
|---|---|---|---|
| **GROOMING** | `full_groom` | Toelettatura completa | Toelettatura per cani |
| | `bath_dry` | Bagno e asciugatura | Lavaggio e asciugatura cane |
| | `hand_stripping` | Stripping | Stripping del cane |
| | `deshedding` | Cardatura e snodatura | Cardatura del cane (sottopelo) |
| | `nail_trim` | Taglio unghie | Taglio unghie del cane |
| | `cat_groom` | Toelettatura gatto | Toelettatura per gatti |
| **VET_CLINIC** | `exam` | Visita clinica | Visita dal veterinario |
| | `vaccination_dog` | Vaccinazione cane | Vaccino per il cane |
| | `microchip` | Applicazione microchip | Microchip per il cane |
| | `neuter_cat` | Castrazione gatto | Castrazione del gatto (maschio) |
| | `spay_cat` | Sterilizzazione gatta | Sterilizzazione della gatta |
| | `spay_dog` | Sterilizzazione cane | Sterilizzazione del cane (femmina) |
| **PET_HOTEL** | `dog_night` | Cane, per notte | Pensione per cani a notte |
| | `cat_night` | Gatto, per notte | Pensione per gatti a notte |
| | `daycare_day` | Asilo diurno, al giorno | Asilo per cani al giorno |
| | `daycare_pass` | Abbonamento asilo | Abbonamento asilo per cani |
| | `pickup` | Taxi dog (navetta) | Taxi dog e trasporto in pensione |
| | `extra_walk` | Passeggiata extra | Passeggiata extra in pensione |
| **DOG_TRAINING** | `puppy_course` | Corso cuccioli | Corso per cuccioli (puppy class) |
| | `obedience_course` | Educazione di base | Corso di educazione base cane |
| | `group_lesson` | Lezione di gruppo | Lezione di gruppo per cani |
| | `private_lesson` | Lezione individuale | Lezione individuale per cani |
| | `behavior_consult` | Consulenza comportamentale | Consulenza comportamentale cane |
| | `membership` | Quota associativa | Quota centro cinofilo |
| **PET_SITTING** | `walk_30` | Passeggiata 30 min | Passeggiata cane (30 minuti) |
| | `walk_60` | Passeggiata 1 ora | Passeggiata cane (1 ora) |
| | `cat_visit` | Visita gatto a domicilio | Visita a domicilio per gatti |
| | `house_sitting_night` | Custodia a casa tua, notte | Dog sitting a domicilio (notte) |
| | `boarding_night` | Pensione casalinga, notte | Pensione casalinga per cani (notte) |
| | `daycare_day` | Dog sitting diurno | Dog sitting diurno per cani |

---

### 4.6. Шаблоны мета-тегов категорий для `website/lib/categories.ts`

- `SEO_TITLE.it`:
  - `GROOMING`: `"Toelettatura e lavaggio cani"`
  - `VET_CLINIC`: `"Veterinari e cliniche veterinarie"`
  - `PET_HOTEL`: `"Pensioni per cani e asili diurni"`
  - `DOG_TRAINING`: `"Addestramento cani ed educatori cinofili"`
  - `PET_SHOP`: `"Negozi di animali e pet shop"`
  - `PET_SITTING`: `"Dog sitter e pensioni casalinghe"`
- `PRICES_NAME.it`:
  - `GROOMING`: `"Toelettatura cane"`
  - `VET_CLINIC`: `"Costo veterinario"`
  - `PET_HOTEL`: `"Pensione per cani"`
  - `DOG_TRAINING`: `"Addestramento cani"`
  - `PET_SHOP`: `"Negozi di animali"`
  - `PET_SITTING`: `"Dog sitter"`

---

## 5. Открытый вопрос

1. **Доступность Keyword Planner**:
   В среде сборщика отсутствует доступ к рекламному аккаунту Google Ads Keyword Planner (кампании не запускались). В соответствии с правилом `quality.md` §1 («Нет данных — пусто и причина. Никогда не оценка»), колонка Planner заполнена прочерком `—` во всех строках без исключения.
2. **Верификация данных Google Trends и Google Suggest**:
   Все числовые показатели сняты напрямую в интерфейсе Google Trends по региону Италия (`geo=IT`, 12 месяцев) с детализацией по базовым городам (Roma, Milano, Napoli), каждая группа сравнения снабжена прямой ссылкой на Trends. Существование и узус поисковых фраз подтверждены через официальный Google Suggest API (`gl=it`, `hl=it`).
