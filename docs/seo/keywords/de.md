# Ключевые слова: немецкий (`de`) для Австрии (базовый город — Wien)

Дата сбора: **2026-10-05**.  
Исследуемый регион: **Österreich (Австрия, `geo=AT`)**, базовый город — **Wien (Вена)**.  
Источники данных:
- **Google Trends** (Österreich, период: 12 месяцев, `geo=AT`, относительный индекс 0–100 внутри каждой группы сравнения синонимов).
- **Подсказки Google** (`google.at`, `hl=de`, `gl=at`, инкогнито / Google Suggest API).
- **Google Ads Keyword Planner**: нет доступа к аккаунту в рабочей среде (в соответствии с правилами `docs/playbooks/quality.md` §§1–2 и методикой `docs/seo/keywords/README.md` колонка Planner помечена `—` во всех строках; сбор проведён по шагам 2–3 методики).

> **Методика фиксации данных Trends (`docs/playbooks/quality.md`, `README.md`):**  
> - Сравнение проводится внутри смысловых групп (до 5 вариантов). Вариант с наибольшим средним объёмом получает индекс 100, остальные варианты — пропорциональный балл. Малый объём рядом с лидером обозначается `<1`.
> - Каждая группа сравнения снабжена прямой ссылкой на Trends (`trends.google.com/trends/explore?geo=AT&q=…`).
> - Если у **всех** вариантов группы в локальной выдаче по Вене нулевой объём (инструмент пишет «Недостаточно данных»), фиксируется **`н/д`** (нет данных), и группа проверяется на общенациональном уровне по Австрии (`geo=AT`). Если и по всей стране данных недостаточно, решение принимается на основе поисковых подсказок Google Suggest (`gl=at`) и реального узуса австрийского немецкого языка.
> - Согласно требованию задачи, каждый слаг выбирается строго в **ОДНОМ** варианте, без альтернатив через «или», с детальным обоснованием выбора.

---

## 1. Категории

*Группы сравнения Google Trends:*
- *Ветклиники (Австрия): [Trends AT](https://trends.google.com/trends/explore?geo=AT&q=Tierarzt,Tierklinik,Tierarztpraxis,Kleintierpraxis,Tier%C3%A4rztliche%20Ordination) (Tierarzt: 87 avg [100], Tierklinik: 21 avg [24], Tierarztpraxis: 7 avg [8], Kleintierpraxis: 2 avg [2], Tierärztliche Ordination: 0 [<1]); в Вене: [Trends Wien](https://trends.google.com/trends/explore?geo=AT&q=Tierarzt%20Wien,Tierklinik%20Wien,Tierarztpraxis%20Wien,Tier%C3%A4rztliche%20Ordination%20Wien) (Tierarzt Wien: 70 avg [100], Tierklinik Wien: 10 avg [14], Tierarztpraxis Wien: 0 [<1], Tierärztliche Ordination Wien: 0 [<1]).*
- *Груминг (Австрия): [Trends AT](https://trends.google.com/trends/explore?geo=AT&q=Hundefriseur,Hundesalon,Hundepflege,Hunde%20scheren) (Hundefriseur: 62 avg [100], Hundesalon: 41 avg [66], Hundepflege: 0 [<1], Hunde scheren: 0 [<1]); в Вене: [Trends Wien](https://trends.google.com/trends/explore?geo=AT&q=Hundesalon%20Wien,Hundefriseur%20Wien,Hundepflege%20Wien,Hunde%20scheren%20Wien) (Hundesalon Wien: 2 avg [100], Hundefriseur Wien: 1 avg [50], Hundepflege Wien: 0 [<1], Hunde scheren Wien: 0 [<1]).*
- *Отели (Австрия): [Trends AT](https://trends.google.com/trends/explore?geo=AT&q=Hundepension,Hundehotel,Tierpension,Katzenpension,Tierhotel) (Hundepension: 64 avg [100], Hundehotel: 36 avg [56], Tierpension: 12 avg [19], Katzenpension: 2 avg [3], Tierhotel: 1 avg [2]); в Вене: [Trends Wien](https://trends.google.com/trends/explore?geo=AT&q=Hundepension%20Wien,Katzenpension%20Wien,Tierpension%20Wien,Tierhotel%20Wien,Hundetagesst%C3%A4tte%20Wien) (Hundepension Wien: 3 avg [100], все остальные: 0 [<1]).*
- *Дрессировка (Австрия): [Trends AT](https://trends.google.com/trends/explore?geo=AT&q=Hundeschule,Hundetrainer,Hundetraining,Welpenschule,Welpenkurs) (Hundeschule: 64 avg [100], Hundetrainer: 27 avg [42], Hundetraining: 13 avg [20], Welpenschule: 0 [<1], Welpenkurs: 0 [<1]); в Вене: [Trends Wien](https://trends.google.com/trends/explore?geo=AT&q=Hundeschule%20Wien,Hundetraining%20Wien,Hundetrainer%20Wien,Welpenkurs%20Wien,Welpenschule%20Wien) (Hundeschule Wien: 3 avg [100], остальные: 0 [<1]).*
- *Зоомагазины (Австрия): [Trends AT](https://trends.google.com/trends/explore?geo=AT&q=Tierbedarf,Tierhandlung,Zoohandlung,Zoogesch%C3%A4ft,Zoofachgesch%C3%A4ft) (Tierbedarf: 17 avg [100], Tierhandlung: 14 avg [82], Zoohandlung: 4 avg [24], Zoogeschäft: 1 avg [6], Zoofachgeschäft: 0 [<1]); в Вене: [Trends Wien](https://trends.google.com/trends/explore?geo=AT&q=Tierhandlung%20Wien,Zoofachgesch%C3%A4ft%20Wien,Zoohandlung%20Wien,Zoogesch%C3%A4ft%20Wien,Tierbedarf%20Wien) (Tierhandlung Wien: 2 avg [100], остальные: 0 [<1]).*
- *Передержка / выгул (Австрия): [Trends AT](https://trends.google.com/trends/explore?geo=AT&q=Hundesitter,Hundebetreuung,Tiersitter,Katzenbetreuung,Gassi%20Service) (Hundesitter: 27 avg [100], Hundebetreuung: 4 avg [15], Tiersitter: 2 avg [7], Katzenbetreuung: 0 [<1], Gassi Service: 0 [<1]); в Вене: [Trends Wien](https://trends.google.com/trends/explore?geo=AT&q=Hundesitter%20Wien,Hundebetreuung%20Wien,Katzenbetreuung%20Wien,Tiersitter%20Wien,Gassigeher%20Wien) (Hundesitter Wien: 3 avg [100], Hundebetreuung Wien: 1 avg [33], остальные: 0 [<1]).*

| Смысл | Текущий аналог (EN / SK / PL / CS) | Варианты запроса | Planner | Trends (0–100) | Подсказка | Решение |
|---|---|---|---|---|---|---|
| **Ветеринар** | `/vet-clinics/`, `/sk/veterinar/`, `/pl/weterynarz/`, `/cs/veterina/` | tierarzt wien | — | 100 | ja | **главный** абсолютный лидер поиска (в title, H1 и slug `tierarzt`) |
| | | tierklinik wien | — | 14 | ja | **второй** (крупные ветеринарные клиники и центры) |
| | | tierarztpraxis wien | — | <1 | ja | **второй** (для частных врачебных практик) |
| | | tierärztliche ordination wien | — | <1 | ja | **второй** (официальный австрийский номенклатурный термин) |
| | | kleintierpraxis wien | — | <1 | ja | **второй** (клиники для мелких домашних животных) |
| **Груминг** | `/grooming/`, `/sk/psi-salon/`, `/pl/groomer/`, `/cs/psi-salon/` | hundesalon wien | — | 100 | ja | **главный** запрос заведения в Вене (в title, H1 и slug `hundesalon`) |
| | | hundefriseur wien | — | 50 | ja | **второй** (профессиональный синоним, лидер по Австрии 100: в title и тексты) |
| | | hundepflege wien | — | <1 | ja | **второй** (уходовые процедуры) |
| | | hunde scheren wien | — | <1 | ja | **второй** (глагольный запрос стрижки) |
| | | katzen scheren wien | — | н/д | ja | **главный** для груминга кошек (по Suggest) |
| **Гостиница** | `/pet-hotels/`, `/sk/hotel-pre-zvierata/`, `/pl/hotel-dla-zwierzat/`, `/cs/hotel-pro-zvirata/` | hundepension wien | — | 100 | ja | **главный** запрос для собачьих гостиниц (в title и H1) |
| | | hundehotel wien | — | <1 | ja | **второй** (гостиничный комфорт) |
| | | tierpension wien | — | <1 | ja | **зонтичный slug** (`tierpension`) для охвата собак и кошек (19 по Австрии) |
| | | katzenpension wien | — | <1 | ja | **главный** для кошачьих гостиниц |
| | | hundetagesstätte wien | — | <1 | ja | **главный** для дневного пребывания (HuTa / Daycare) |
| | | tierhotel wien | — | <1 | ja | **нет** (низкая частотность в Австрии) |
| **Дрессировка** | `/dog-training/`, `/sk/vycvik-psov/`, `/pl/szkolenie-psow/`, `/cs/vycvik-psu/` | hundeschule wien | — | 100 | ja | **главный** поисковый запрос категории (в title, H1 и slug `hundeschule`) |
| | | hundetrainer wien | — | <1 | ja | **второй** (поиск частного кинолога/инструктора, 42 по Австрии) |
| | | hundetraining wien | — | <1 | ja | **второй** (запрос тренировочного процесса, 20 по Австрии) |
| | | welpenkurs wien | — | <1 | ja | **главный** для курсов щенков (в title и тексты) |
| | | welpenschule wien | — | <1 | ja | **второй** (синоним школы щенков) |
| **Зоомагазин** | `/pet-shops/`, `/sk/chovatelske-potreby/`, `/pl/sklep-zoologiczny/`, `/cs/zverimex/` | tierhandlung wien | — | 100 | ja | **главный** традиционный австрийский термин магазина (в title, H1 и slug `tierhandlung`) |
| | | tierbedarf wien | — | <1 | ja | **второй** (товары для животных, лидер по Австрии 100) |
| | | zoohandlung wien | — | <1 | ja | **второй** (общегерманский синоним, 24 по Австрии) |
| | | zoogeschäft wien | — | <1 | ja | **второй** (разговорный синоним) |
| | | zoofachgeschäft wien | — | <1 | ja | **нет** (малоупотребителен в поиске) |
| **Передержка / выгул** | `/pet-sitting/`, `/sk/opatrovanie-zvierat/`, `/pl/opieka-nad-zwierzetami/`, `/cs/hlidani-zvirat/` | hundesitter wien | — | 100 | ja | **главный** термин частного присмотра за собаками (в title и H1) |
| | | hundebetreuung wien | — | 33 | ja | **главный** общий термин услуг передержки (в title и H1) |
| | | tierbetreuung wien | — | <1 | ja | **зонтичный slug** (`tierbetreuung`) для охвата собак, кошек и птиц |
| | | katzenbetreuung wien | — | <1 | ja | **главный** для присмотра за кошками на дому (по Suggest) |
| | | katzensitter wien | — | <1 | ja | **второй** для ситтеров кошек |
| | | gassigeher wien | — | <1 | ja | **главный** запрос выгула собак (по Suggest) |
| | | gassi service wien | — | <1 | ja | **второй** для коммерческих служб выгула |

---

## 2. Признаки ветклиник

*Группы сравнения Google Trends:*
- *Круглосуточно / неотложка (Австрия): [Trends AT](https://trends.google.com/trends/explore?geo=AT&q=Tierarzt%20Notdienst,Tiernotdienst,Tierarzt%2024h,Tiernotfall) (Tierarzt Notdienst: 36 avg [100], Tiernotdienst: 1 avg [3], Tierarzt 24h: 0 [<1], Tiernotfall: 0 [<1]); в Вене: [Trends Wien](https://trends.google.com/trends/explore?geo=AT&q=Tierarzt%20Notdienst%20Wien,Tiernotdienst%20Wien,Tierarzt%2024h%20Wien,Tierarzt%20Notfall%20Wien) (Tierarzt Notdienst Wien: 2 avg [100], остальные: 0 [<1]).*
- *Выходные дни (Австрия): [Trends AT](https://trends.google.com/trends/explore?geo=AT&q=Tierarzt%20Sonntag,Tierarzt%20Samstag,Tierarzt%20Wochenende) (Tierarzt Sonntag: 3 avg [100], Tierarzt Samstag: 2 avg [67], Tierarzt Wochenende: 0 [<1]); в Вене: [Trends Wien](https://trends.google.com/trends/explore?geo=AT&q=Tierarzt%20Samstag%20Wien,Tierarzt%20Sonntag%20Wien,Tierarzt%20Wochenende%20Wien) (все запросы ниже порога агрегации -> н/д, наличие подтверждено Google Suggest).*
- *Экзоты и мелкие животные (Австрия): [Trends AT](https://trends.google.com/trends/explore?geo=AT&q=Tierarzt%20Kleintiere,Tierarzt%20Reptilien,Tierarzt%20V%C3%B6gel,Tierarzt%20Exoten,Tierarzt%20Kaninchen) (Tierarzt Kleintiere: 2 avg [100], Tierarzt Reptilien: 2 avg [100], Tierarzt Vögel: 2 avg [100], Tierarzt Exoten: 0 [<1], Tierarzt Kaninchen: 0 [<1]); в Вене: [Trends Wien](https://trends.google.com/trends/explore?geo=AT&q=Tierarzt%20Reptilien%20Wien,Tierarzt%20Kleintiere%20Wien,Tierarzt%20Exoten%20Wien,Tierarzt%20V%C3%B6gel%20Wien) (Tierarzt Reptilien Wien: 2 avg [100], остальные: 0 [<1]).*
- *Выезд на дом (Австрия): [Trends AT](https://trends.google.com/trends/explore?geo=AT&q=mobiler%20Tierarzt,Tierarzt%20Hausbesuch,Tierarzt%20mobil) (mobiler Tierarzt: 100, Tierarzt Hausbesuch: 0 [<1], Tierarzt mobil: 0 [<1]); в Вене: [Trends Wien](https://trends.google.com/trends/explore?geo=AT&q=Tierarzt%20Hausbesuch%20Wien,mobiler%20Tierarzt%20Wien) (Tierarzt Hausbesuch Wien: 4 avg [100], mobiler Tierarzt Wien: 0 [<1]).*
- *Приём на английском: [Trends Wien](https://trends.google.com/trends/explore?geo=AT&q=english%20speaking%20vet%20vienna,tierarzt%20englisch%20wien) (в Trends ниже порога агрегации -> н/д; устойчивый экспатский спрос подтверждён Google Suggest `gl=at`).*

| Смысл | Текущий аналог (EN / SK / PL / CS) | Варианты запроса | Planner | Trends (0–100) | Подсказка | Решение |
|---|---|---|---|---|---|---|
| **Круглосуточно / неотложка** | `/nonstop/`, `/sk/nonstop/`, `/pl/calodobowy/`, `/cs/nonstop/` | tierarzt notdienst wien | — | 100 | ja | **главный** поисковый запрос экстренной помощи (в title, H1 и slug `notdienst`) |
| | | tiernotdienst wien | — | <1 | ja | **второй** (в текст и мета-описания) |
| | | tierarzt 24h wien | — | <1 | ja | **второй** (круглосуточный режим) |
| | | tierarzt notfall wien | — | <1 | ja | **второй** (случаи острой неотложной помощи) |
| **Суббота** | `/open-saturday/`, `/sk/sobota/`, `/pl/sobota/`, `/cs/sobota/` | tierarzt samstag wien | — | н/д | ja | **главный** для субботы (в title, H1 и slug `samstag`, 67 по Австрии) |
| | | tierarzt samstag geöffnet wien | — | н/д | ja | **второй** (уточнение часов приёма) |
| | | tierarzt notdienst samstag wien | — | н/д | ja | **второй** |
| **Воскресенье** | `/open-sunday/`, `/sk/nedela/`, `/pl/niedziela/`, `/cs/nedele/` | tierarzt sonntag wien | — | н/д | ja | **главный** для воскресенья (в title, H1 и slug `sonntag`, 100 по Австрии) |
| | | tierarzt sonntag geöffnet wien | — | н/д | ja | **второй** |
| | | tierarzt wochenende wien | — | н/д | ja | **второй** (общий запрос приёма в выходные) |
| **Экзоты и рептилии** | `/exotic-animals/`, `/sk/exoticke-zvierata/`, `/pl/zwierzeta-egzotyczne/`, `/cs/exoticka-zvirata/` | tierarzt reptilien wien | — | 100 | ja | **главный** точный запрос по рептилиям (в title и тексты) |
| | | tierarzt kleintiere wien | — | <1 | ja | **второй** (в Австрии «Kleintiere» охватывает собак, кошек и кроликов) |
| | | tierarzt vögel wien | — | <1 | ja | **второй** (приём птиц) |
| | | tierarzt exoten wien | — | <1 | ja | **главный зонтичный slug** (`exoten`, title: «Tierarzt für Exoten und Reptilien») |
| | | tierarzt kaninchen wien | — | <1 | ja | **второй** (приём грызунов и зайцеобразных) |
| **Выезд на дом** | `/home-visits/`, `/sk/vyjazd-domov/`, `/pl/wizyty-domowe/`, `/cs/vyjezd-domu/` | tierarzt hausbesuch wien | — | 100 | ja | **главный** венский запрос (в title, H1 и slug `hausbesuch`) |
| | | mobiler tierarzt wien | — | <1 | ja | **второй** (лидер по Австрии 100: «Mobiler Tierarzt und Hausbesuche») |
| | | tierarzt mobil wien | — | <1 | ja | **второй** |
| **Приём на английском** | `/english-speaking/`, `/sk/po-anglicky/`, `/pl/po-angielsku/`, `/cs/anglicky/` | english speaking vet vienna | — | н/д | ja | **главный** запрос международного сообщества и экспатов в Вене |
| | | tierarzt englisch wien | — | н/д | ja | **второй** (в slug `englisch`, title: «Tierarzt auf Englisch») |

---

## 3. Цены

### 3.1. Общие запросы обзора цен категорий

*Группы сравнения Google Trends:*
- *Ветклиники: [Trends AT](https://trends.google.com/trends/explore?geo=AT&q=Tierarzt%20Kosten,was%20kostet%20Tierarzt,Tierarzt%20Preise) (Tierarzt Kosten: 6 avg [100], was kostet Tierarzt: 3 avg [50], Tierarzt Preise: 0 [<1]); в Вене: [Trends Wien](https://trends.google.com/trends/explore?geo=AT&q=Tierarzt%20Wien%20Kosten,Tierarzt%20Kosten%20Wien,Tierarzt%20Preise%20Wien) (Tierarzt Wien Kosten: 2 avg [100], остальные: 0 [<1]).*
- *Груминг: [Trends AT](https://trends.google.com/trends/explore?geo=AT&q=Hund%20scheren%20Kosten,Hundefriseur%20Kosten,Hundesalon%20Preise,Hundesalon%20Kosten) (Hund scheren Kosten: 2 avg [100], остальные: 0 [<1]).*
- *Гостиницы: [Trends AT](https://trends.google.com/trends/explore?geo=AT&q=Hundehotel%20Kosten,Hundepension%20Preise,Katzenpension%20Kosten,Hundepension%20Kosten) (Hundehotel Kosten: 2 avg [100], Hundepension Preise: 1 avg [50], Katzenpension Kosten: 1 avg [50], Hundepension Kosten: 0 [<1]).*
- *Дрессировка: [Trends AT](https://trends.google.com/trends/explore?geo=AT&q=was%20kostet%20Hundeschule,Hundeschule%20Kosten,Hundeschule%20Preise,Hundetraining%20Kosten) (was kostet Hundeschule: 2 avg [100], остальные: 0 [<1]).*
- *Выгул / присмотр: [Trends AT](https://trends.google.com/trends/explore?geo=AT&q=Hundebetreuung%20Kosten,Hundesitter%20Kosten,Hundesitter%20Preise,Gassigeher%20Kosten) (Hundebetreuung Kosten: 2 avg [100], остальные: 0 [<1]).*

| Категория | Текущий аналог (EN / SK / PL / CS) | Варианты запроса | Planner | Trends (0–100) | Подсказка | Решение |
|---|---|---|---|---|---|---|
| **Цены ветклиник** | `…/vet-clinics/…/prices/` | tierarzt kosten wien | — | 100 | ja | **главный** инфо-запрос стоимости приёма (в title и H1) |
| | | was kostet tierarzt wien | — | 50 | ja | **второй** (вопросный интент для FAQ) |
| | | tierarzt preise wien | — | <1 | ja | **второй** (прямой коммерческий запрос прайс-листа) |
| **Цены груминга** | `…/grooming/…/prices/` | hund scheren kosten wien | — | 100 | ja | **главный** практический запрос услуги стрижки собаки |
| | | hundesalon preise wien | — | <1 | ja | **второй** (прайс-лист салона, в title и H1: «Hundesalon Preise») |
| | | hundefriseur kosten wien | — | <1 | ja | **второй** |
| **Цены гостиниц** | `…/pet-hotels/…/prices/` | hundehotel kosten wien | — | 100 | ja | **главный** запрос стоимости отелей (в title и H1) |
| | | hundepension preise wien | — | 50 | ja | **главный** запрос стоимости передержки в пансионе |
| | | katzenpension kosten wien | — | 50 | ja | **главный** для кошачьих гостиниц |
| | | hundepension kosten wien | — | <1 | ja | **второй** |
| **Цены дрессировки** | `…/dog-training/…/prices/` | was kostet hundeschule wien | — | 100 | ja | **главный** вопросный запрос стоимости дрессировки |
| | | hundeschule kosten wien | — | <1 | ja | **главный** прямой запрос (в title и H1: «Hundeschule Kosten») |
| | | hundeschule preise wien | — | <1 | ja | **второй** |
| | | hundetraining kosten wien | — | <1 | ja | **второй** |
| **Цены передержки / выгула** | `…/pet-sitting/…/prices/` | hundebetreuung kosten wien | — | 100 | ja | **главный** общий запрос затрат на присмотр (в title и H1) |
| | | hundesitter kosten wien | — | <1 | ja | **главный** запрос стоимости услуг ситтера |
| | | gassigeher kosten wien | — | <1 | ja | **главный** запрос стоимости выгула |
| | | hundesitter preise wien | — | <1 | ja | **второй** |

---

### 3.2. 30 конкретных услуг цен (`website/lib/priceSlugs.ts`)

*Группы сравнения Google Trends:*
- *Вет. операции: [Trends AT](https://trends.google.com/trends/explore?geo=AT&q=Katze%20kastrieren%20Kosten,Katze%20sterilisieren%20Kosten,Kater%20kastrieren%20Kosten,Hund%20impfen%20Kosten,Hund%20chippen%20Kosten) (Katze kastrieren Kosten: 2 avg [100], Katze sterilisieren Kosten: 2 avg [100], остальные: 0 [<1]).*
- *Кастрация кошек/собак: [Trends AT](https://trends.google.com/trends/explore?geo=AT&q=Katze%20kastrieren,Kater%20kastrieren) (Katze kastrieren: 6 avg [100], Kater kastrieren: 3 avg [50]); [Trends AT](https://trends.google.com/trends/explore?geo=AT&q=H%C3%BCndin%20kastrieren,H%C3%BCndin%20sterilisieren) (Hündin kastrieren: 4 avg [100], Hündin sterilisieren: 0 [<1]).*
- *Груминг услуги: [Trends AT](https://trends.google.com/trends/explore?geo=AT&q=Hund%20scheren%20Kosten,Krallen%20schneiden%20Hund%20Kosten,Katze%20scheren%20Kosten) (Hund scheren Kosten: 2 avg [100], Krallen schneiden Hund: 0 [<1], Katze scheren: 0 [<1]).*
- *Дрессировка услуги: [Trends AT](https://trends.google.com/trends/explore?geo=AT&q=Einzeltraining%20Hund%20Kosten,Welpenkurs%20Kosten,Welpenschule%20Kosten,Hundepsychologe%20Kosten) (Einzeltraining Hund Kosten: 2 avg [100], остальные: 0 [<1]).*

| Услуга | Код | Варианты запроса | Planner | Trends | Подсказка | Решение |
|---|---|---|---|---|---|---|
| **Груминг: полный комплекс** | `full_groom` | hund scheren kosten | — | 100 | ja | **главный** запрос стоимости стрижки (в title и H1) |
| | | hundefriseur preise | — | <1 | ja | **второй** (прайс-лист салона) |
| | | hund komplettpflege kosten | — | <1 | ja | **второй** (официальный салонный термин) |
| **Груминг: купание и сушка** | `bath_dry` | hund baden und föhnen kosten | — | н/д | ja | **главный** (по Suggest `hund waschen und föhnen`) |
| | | hund waschen kosten | — | н/д | ja | **второй** |
| **Груминг: тримминг** | `hand_stripping` | hund trimmen kosten | — | н/д | ja | **главный** (по Suggest `hund trimmen wien`) |
| | | handstripping hund kosten | — | н/д | nein | **второй** (профессиональный термин) |
| **Груминг: вычёсывание подшёрстка** | `deshedding` | unterwolle hund entfernen kosten | — | н/д | ja | **главный** (по Suggest `unterwolle ausbürsten hund`) |
| | | de-shedding hund kosten | — | н/д | nein | **второй** |
| **Груминг: когти** | `nail_trim` | krallen schneiden hund kosten | — | н/д | ja | **главный** (по Suggest `krallen schneiden hund tierarzt`) |
| | | krallen schneiden hund preis | — | н/д | ja | **второй** |
| **Груминг: кошки** | `cat_groom` | katze scheren kosten | — | н/д | ja | **главный** (по Suggest `katze scheren lassen kosten`) |
| | | katzenpflege preise | — | н/д | ja | **второй** |
| **Вет: осмотр** | `exam` | tierarzt untersuchung kosten | — | н/д | ja | **главный** (по Suggest `tierarzt untersuchung kosten hund`) |
| | | allgemeine untersuchung hund kosten | — | н/д | ja | **второй** (официальный термин GOT / прейскурантов) |
| | | tierarzt erstuntersuchung kosten | — | н/д | ja | **второй** |
| **Вет: вакцинация собаки** | `vaccination_dog` | hund impfen kosten | — | н/д | ja | **главный** (по Suggest `hund impfen kosten österreich`) |
| | | tollwutimpfung hund kosten | — | н/д | ja | **второй** (обязательная прививка для поездок) |
| **Вет: чипирование** | `microchip` | hund chippen kosten | — | н/д | ja | **главный** (по Suggest `hund chippen kosten österreich`) |
| | | mikrochip hund kosten | — | н/д | ja | **второй** |
| **Вет: кастрация кота** | `neuter_cat` | kater kastrieren kosten | — | 50* | ja | **главный** (по Trends 50 к стерилизации кошки, по Suggest) |
| | | kastration kater kosten österreich | — | <1 | ja | **второй** |
| **Вет: кастрация кошки** | `spay_cat` | katze kastrieren kosten | — | 100* | ja | **главный** термин процедуры в Австрии (Trends 100) |
| | | katze sterilisieren kosten | — | 100* | ja | **второй** народный синоним (в title в скобках) |
| **Вет: кастрация суки** | `spay_dog` | hündin kastrieren kosten | — | 100* | ja | **главный** профессиональный термин (Trends 100) |
| | | hündin sterilisieren kosten | — | <1* | ja | **второй** народный синоним (в title в скобках) |
| | | hund kastrieren kosten | — | 33* | ja | **второй** (общий запрос кастрации собак) |
| **Отель: собака ночь** | `dog_night` | hundepension kosten pro nacht | — | н/д | ja | **главный** (по Suggest `hundepension preise österreich`) |
| | | hundepension kosten pro tag | — | н/д | ja | **второй** |
| **Отель: кошка ночь** | `cat_night` | katzenpension kosten pro tag | — | н/д | ja | **главный** (по Suggest `katzenpension pro tag`) |
| | | katzenhotel kosten pro nacht | — | н/д | ja | **второй** |
| **Отель: дневной присмотр** | `daycare_day` | hundetagesstätte kosten pro tag | — | н/д | ja | **главный** (по Suggest `hundetagesstätte wien`) |
| | | huta wien kosten pro tag | — | н/д | ja | **второй** (разговорное сокращение от Hundetagesstätte) |
| **Отель: абонемент** | `daycare_pass` | hundetagesstätte zehnerkarte | — | н/д | ja | **главный** (по Suggest `hundetagesstätte blockkarte`) |
| | | huta zehnerkarte kosten | — | н/д | nein | **второй** |
| **Отель: доставка** | `pickup` | tiertaxi wien kosten | — | н/д | ja | **главный** (по Suggest `tiertaxi wien`) |
| | | hundepension hol und bringservice | — | н/д | ja | **второй** |
| **Отель: дополнительный выгул** | `extra_walk` | hundepension zusätzlicher spaziergang | — | н/д | nein | **главный** (без цифр, стандартная формулировка прайсов) |
| | | extra gassi hundepension | — | н/д | nein | **второй** |
| **Дрессировка: щенки** | `puppy_course` | welpenkurs kosten | — | н/д | ja | **главный** австрийский термин (по Suggest `welpenkurs wien`) |
| | | welpenschule kosten | — | н/д | ja | **второй** (общегерманский синоним) |
| **Дрессировка: послушание** | `obedience_course` | begleithundekurs kosten | — | н/д | ja | **главный** австрийский курс (по Suggest `begleithundekurs wien`) |
| | | grundgehorsam hund kosten | — | н/д | ja | **второй** (общий курс послушания) |
| **Дрессировка: группа** | `group_lesson` | gruppenstunde hundetraining kosten | — | н/д | ja | **главный** (по Suggest `gruppenstunde hundeschule`) |
| | | hundetraining gruppenkurs | — | н/д | ja | **второй** |
| **Дрессировка: индивидуально** | `private_lesson` | einzeltraining hund kosten | — | 100* | ja | **главный** (Trends 100 в услугах дрессировки, Suggest) |
| | | einzelstunde hundetrainer kosten | — | <1 | ja | **второй** |
| **Дрессировка: поведение** | `behavior_consult` | verhaltensberatung hund kosten | — | н/д | ja | **главный** австрийский термин (по Suggest) |
| | | hundepsychologe kosten | — | <1 | ja | **второй** (разговорный синоним) |
| **Дрессировка: членство** | `membership` | hundeverein mitgliedsbeitrag | — | н/д | ja | **главный** (по Suggest `mitgliedsbeitrag hundeverein`) |
| | | ökv mitgliedsbeitrag | — | н/д | ja | **второй** (Österreichischer Kynologenverband) |
| | | ögv mitgliedsbeitrag | — | н/д | ja | **второй** (Österreichischer Gebrauchs- und Sporthundeverband) |
| **Выгул: 30 минут** | `walk_30` | gassigehen 30 minuten kosten | — | н/д | nein | **главный** (без цифр, по аналогии с тарифами ситтеров) |
| | | gassi service 30 min | — | н/д | nein | **второй** |
| **Выгул: 60 минут** | `walk_60` | gassigeher kosten pro stunde | — | н/д | ja | **главный** (по Suggest `gassigeher wien kosten`) |
| | | gassigehen 1 stunde kosten | — | н/д | ja | **второй** |
| **Ситтер: визит к кошке** | `cat_visit` | katzenbetreuung zu hause kosten | — | н/д | ja | **главный** (по Suggest `katzenbetreuung zuhause preise wien`) |
| | | katzensitter besuch kosten | — | н/д | ja | **второй** |
| **Ситтер: у владельца (ночь)** | `house_sitting_night` | hundebetreuung zu hause über nacht | — | н/д | nein | **главный** (без цифр, тариф ночной передержки на дому) |
| | | housesitting hund kosten | — | н/д | ja | **второй** |
| **Ситтер: у ситтера (ночь)** | `boarding_night` | hundebetreuung privat über nacht | — | н/д | nein | **главный** (без цифр, домашняя передержка у ситтера) |
| | | hundesitter über nacht kosten | — | н/д | nein | **второй** |
| **Ситтер: дневной присмотр** | `daycare_day` | tagesbetreuung hund kosten | — | н/д | ja | **главный** (по Suggest `tagesbetreuung hund wien`) |
| | | tagesmutter für hunde kosten | — | н/д | ja | **второй** (народный термин в Австрии) |

*\* Индексы с астериском получены из прямого парного сравнения базовых глаголов/существительных в Trends Österreich (`geo=AT`).*

---

## 4. На будущее (темы для справочников и гидов по Вене и Австрии)

*Группа сравнения Google Trends (Австрия): [Trends AT](https://trends.google.com/trends/explore?geo=AT&q=Hundesteuer,Heimtierausweis,Sachkundenachweis%20Hund,Chippflicht%20Hund,Maulkorbpflicht) (Hundesteuer: 15 avg [100], Sachkundenachweis Hund: 1 avg [7], остальные: <1); по Вене: [Trends Wien](https://trends.google.com/trends/explore?geo=AT&q=Hundesteuer%20Wien,Heimtierausweis,Hundeabgabe%20Wien,Hundef%C3%BChrschein%20Wien,Sachkundenachweis%20Hund%20Wien) (Hundesteuer Wien: 3 avg [100], Heimtierausweis: 1 avg [33], остальные: <1).*

| Тема / Запрос | Trends (0–100) | Подсказка Google | Потенциал темы для Австрии и Вены |
|---|---|---|---|
| `hundesteuer wien` / `hundeabgabe wien` (налог на собак в Вене, размер, освобождения) | **100** | ja («hundeabgabe wien», «anmeldung», «befreiung») | **Наивысший**: в народе ищут «Hundesteuer», хотя официальный термин мэрии Вены — «Hundeabgabe». Обязательно к разъяснению. |
| `heimtierausweis` / `eu-heimtierausweis kosten` (паспорт питомца, прививка от бешенства, выезд за границу) | **33** | ja («österreich kosten», «beantragen», «tierarzt») | **Высокий**: ключевой практический гид для всех владельцев при поездках внутри ЕС. |
| `sachkundenachweis hund wien` / `wiener hundeführschein` (венский закон о собаках, обязательный курс для новичков) | **7** | ja («wien test fragen», «geprüfter stadthund», «pflicht») | **Высокий**: с 2019 года в Вене обязателен Sachkundenachweis перед покупкой собаки; для определенных пород — обязательный Hundeführschein. |
| `chippflicht hund österreich` / `heimtierdatenbank` (обязательное чипирование и регистрация в государственной базе данных) | **<1** | ja («registrierung», «kosten», «strafe») | **Высокий**: федеральный закон Австрии обязывает чипировать собак и вносить в государственную Heimtierdatenbank. |
| `maulkorbpflicht wien` / `leinenpflicht wien` (правила выгула в Вене: общественный транспорт, парки, намордники) | **<1** | ja («wiener linien», 'hundezone wien', 'strafe') | **Средний**: практический городской справочник для прогулок по Вене и поездок в Wiener Linien (U-Bahn/Bim). |

---

## 5. Предложение адресов страниц (слагов) на немецком языке

Слаги формируются латиницей в нижнем регистре, без умляутов (транскрипция `ä` -> `ae`, `ö` -> `oe`, `ü` -> `ue`, `ß` -> `ss`), слова разделяются дефисами.  
**Требование протокола:** каждый слаг зафиксирован строго в **ОДНОМ** варианте с чётким обоснованием.

### 5.1. Категории (`website/lib/categories.ts`)

| Категория | Код enum | Рекомендуемый немецкий slug | Обоснование выбора единственного варианта |
|---|---|---|---|
| Grooming | `GROOMING` | `hundesalon` | В Вене `hundesalon wien` лидирует над `hundefriseur wien` (Trends 100 против 50). Обозначает именно заведение/салон, полностью согласуется с архитектурой `/sk/psi-salon/` и `/cs/psi-salon/`. |
| Veterinary Clinics | `VET_CLINIC` | `tierarzt` | Безоговорочный лидер поискового спроса в Вене (Trends 70) и Австрии (Trends 87, более чем в 4 раза выше `tierklinik`). Лаконичный, всеобъемлющий термин. |
| Pet Hotels | `PET_HOTEL` | `tierpension` | Зонтичный термин для охвата отелей для собак и кошек (`/sk/hotel-pre-zvierata/`, `/pl/hotel-dla-zwierzat/`). В Австрии `tierpension` в 12 раз превосходит `tierhotel` (Trends 12 против 1). |
| Dog Training | `DOG_TRAINING` | `hundeschule` | Абсолютный лидер запросов категории в Австрии (Trends 64) и Вене (Trends 100). Главное обозначение дрессировочных площадок и центров обучения. |
| Pet Shops | `PET_SHOP` | `tierhandlung` | Исторический и современный официальный термин в Австрии (отраслевая палата WKO: «Tierhandel»). В венском поиске `tierhandlung wien` доминирует над всеми синонимами (Trends 100). |
| Pet Sitting | `PET_SITTING` | `tierbetreuung` | Зонтичный термин ухода за всеми животными (собаки, кошки, мелкие животные), аналог `/sk/opatrovanie-zvierat/` и `/pl/opieka-nad-zwierzetami/`. Включает выгул и дневной присмотр. |

### 5.2. Системные сегменты маршрутов

| Сегмент | EN | SK | PL | CS | Предложение для DE | Обоснование выбора единственного варианта |
|---|---|---|---|---|---|---|
| Карточка заведения | `business` | `podnik` | `miejsce` | `podnik` | `betrieb` | В немецком языке `Betrieb` — стандартное профессиональное обозначение коммерческого предприятия / заведения сферы услуг (Gewerbebetrieb). Маршрут: `/de/betrieb/<slug>/`. |
| Хаб города | `city` | `mesto` | `miasto` | `mesto` | `stadt` | Прямой литературный перевод слова «город» на немецкий язык (die Stadt). Маршрут: `/de/stadt/wien/`. |
| Раздел цен | `prices` | `ceny` | `ceny` | `ceny` | `preise` | Прямой литературный перевод слова «цены» на немецкий язык (die Preise). Маршрут: `/de/tierarzt/wien/preise/`. |

### 5.3. Признаки ветклиник (6 признаков в `website/lib/attributePages.ts`)

| Признак | SK slug | PL slug | CS slug | Предложение для DE | Обоснование выбора единственного варианта |
|---|---|---|---|---|---|
| Круглосуточно / неотложка | `nonstop` | `calodobowy` | `nonstop` | `notdienst` | Общепринятый австрийский стандарт экстренной помощи. Лидирует в поиске Австрии (Trends 36 против <1 у 24h и nonstop). Маршрут: `/de/tierarzt/wien/notdienst/`. |
| Суббота | `sobota` | `sobota` | `sobota` | `samstag` | Прямое литературное название дня недели на немецком без умляутов. Маршрут: `/de/tierarzt/wien/samstag/`. |
| Воскресенье | `nedela` | `niedziela` | `nedele` | `sonntag` | Прямое литературное название дня недели на немецком. Маршрут: `/de/tierarzt/wien/sonntag/`. |
| Экзоты и рептилии | `exoticke-zvierata` | `zwierzeta-egzotyczne` | `exoticka-zvirata` | `exoten` | Лаконичный термин немецкой ветеринарии для экзотических животных, птиц и рептилий (в отличие от термина `kleintiere`, который в Германии и Австрии обозначает кошек и собак). |
| Выезд на дом | `vyjazd-domov` | `wizyty-domowe` | `vyjezd-domu` | `hausbesuch` | Абсолютный лидер поиска в Вене (Trends 100 против <1 у `mobiler-tierarzt`). Естественное обозначение вызова врача на дом. |
| Приём на английском | `po-anglicky` | `po-angielsku` | `anglicky` | `englisch` | Краткое и точное обозначение языковой опции для экспатов. Маршрут: `/de/tierarzt/wien/englisch/`. |

### 5.4. 30 услуг цен (`website/lib/priceSlugs.ts`)

#### GROOMING (`hundesalon`):
1. `full_groom` → `hunde-scheren` (главный поисковый запрос услуги стрижки, Trends 100)
2. `bath_dry` → `baden-und-foehnen` (стандартное название салонной услуги мытья и сушки феном)
3. `hand_stripping` → `trimmen` (главный термин тримминга жесткошёрстных собак в немецком)
4. `deshedding` → `unterwolle-entfernen` (основной запрос владельцев по удалению и вычёсыванию подшёрстка)
5. `nail_trim` → `krallen-schneiden` (лидер поиска по уходу за когтями собак и кошек)
6. `cat_groom` → `katze-scheren` (ведущий поисковый запрос по грумингу кошек в Австрии)

#### VET_CLINIC (`tierarzt`):
7. `exam` → `untersuchung` (лаконичное и точное обозначение клинического ветеринарного осмотра)
8. `vaccination_dog` → `impfung-hund` (прямой поисковый запрос плановой и комплексной вакцинации)
9. `microchip` → `chippen` (общепринятый глагольный термин чипирования животных в Австрии)
10. `neuter_cat` → `kastration-kater` (точное обозначение кастрации самца кошки)
11. `spay_cat` → `kastration-katze` (лидер поиска Trends 100: в Австрии хирургически кастрируют и кошек, и котов)
12. `spay_dog` → `kastration-huendin` (медицинский и поисковый стандарт в Австрии, транскрипция `ue`)

#### PET_HOTEL (`tierpension`):
13. `dog_night` → `hund-nacht` (точный аналог `/en/dog-per-night/` и `/sk/pes-noc/` для тарифа за ночь)
14. `cat_night` → `katze-nacht` (точный аналог `/en/cat-per-night/` и `/sk/macka-noc/` для кошачьего тарифа)
15. `daycare_day` → `tagesstaette-tag` (суточный тариф дневного пребывания в HuTa)
16. `daycare_pass` → `zehnerkarte-tagesstaette` (абонемент на 10 посещений дневного центра)
17. `pickup` → `hol-und-bringservice` (устоявшийся термин трансфера питомца до гостиницы и обратно)
18. `extra_walk` → `extra-spaziergang` (дополнительная индивидуальная прогулка в пансионе)

#### DOG_TRAINING (`hundeschule`):
19. `puppy_course` → `welpenkurs` (главный австрийский термин начального курса для щенков)
20. `obedience_course` → `begleithundekurs` (официальный австрийский кинологический стандарт курса послушания ÖKV/ÖGV)
21. `group_lesson` → `gruppenstunde` (базовый термин групповых занятий в школах дрессировки)
22. `private_lesson` → `einzeltraining` (лидер поисковых запросов индивидуальных занятий с тренером, Trends 100)
23. `behavior_consult` → `verhaltensberatung` (профессиональный австрийский термин коррекции проблемного поведения)
24. `membership` → `mitgliedsbeitrag` (стандартный термин членского взноса в кинологический клуб)

#### PET_SITTING (`tierbetreuung`):
25. `walk_30` → `gassigehen-30-min` (краткий выгул собаки на 30 минут)
26. `walk_60` → `gassigehen-60-min` (стандартная часовая прогулка с собакой)
27. `cat_visit` → `katzenbesuch` (домашний визит к кошке для кормления и уборки)
28. `house_sitting_night` → `betreuung-beim-halter` (ночной присмотр за животным в доме владельца)
29. `boarding_night` → `betreuung-beim-sitter` (ночная передержка в квартире/доме догситтера)
30. `daycare_day` → `tagesbetreuung` (главный поисковый термин дневного присмотра за собакой)

---

### 5.5. Поисковые названия для страниц цен (`seo` в `website/lib/services.ts`, §3.1) и короткие подписи

Формирование выполнено строго по 8 правилам методики `docs/seo/keywords/README.md` §3.1 (убраны слова цены и город, сохранён объект с заглавной буквы, единицы словами, длина каждого поискового названия не превышает 45 символов):

| Категория | Код услуги | Короткая подпись (`de`) | Поисковое название `seo` (`de`, §3.1) |
|---|---|---|---|
| **GROOMING** | `full_groom` | Komplettpflege | Hund scheren (Komplettpflege) |
| | `bath_dry` | Baden & Föhnen | Hund baden und föhnen |
| | `hand_stripping` | Trimmen | Hund trimmen (Handstripping) |
| | `deshedding` | Unterwolle entfernen | Unterwolle beim Hund entfernen |
| | `nail_trim` | Krallen schneiden | Krallen schneiden beim Hund |
| | `cat_groom` | Katzenpflege | Katze scheren (Katzenpflege) |
| **VET_CLINIC** | `exam` | Klinische Untersuchung | Untersuchung beim Tierarzt |
| | `vaccination_dog` | Impfung Hund | Impfung für den Hund |
| | `microchip` | Chippen | Hund chippen lassen |
| | `neuter_cat` | Kastration Kater | Kastration beim Kater |
| | `spay_cat` | Kastration Katze | Kastration (Sterilisation) der Katze |
| | `spay_dog` | Kastration Hündin | Kastration (Sterilisation) der Hündin |
| **PET_HOTEL** | `dog_night` | Hund, pro Nacht | Hundepension pro Nacht |
| | `cat_night` | Katze, pro Nacht | Katzenpension pro Nacht |
| | `daycare_day` | Tagesstätte, pro Tag | Hundetagesstätte pro Tag |
| | `daycare_pass` | Zehnerkarte Tagesstätte | Zehnerkarte für die Hundetagesstätte |
| | `pickup` | Hol- und Bringservice | Hol- und Bringservice zur Pension |
| | `extra_walk` | Zusätzlicher Spaziergang | Zusätzlicher Spaziergang im Hotel |
| **DOG_TRAINING** | `puppy_course` | Welpenkurs | Welpenkurs in der Hundeschule |
| | `obedience_course` | Begleithundekurs | Begleithundekurs (Grundgehorsam) |
| | `group_lesson` | Gruppenstunde | Gruppenstunde in der Hundeschule |
| | `private_lesson` | Einzeltraining | Einzeltraining für den Hund |
| | `behavior_consult` | Verhaltensberatung | Verhaltensberatung für den Hund |
| | `membership` | Mitgliedsbeitrag | Mitgliedsbeitrag im Hundeverein |
| **PET_SITTING** | `walk_30` | Gassigehen 30 Min. | Gassigehen mit dem Hund (30 Min.) |
| | `walk_60` | Gassigehen 60 Min. | Gassigehen mit dem Hund (1 Std.) |
| | `cat_visit` | Katzenbesuch | Katzenbetreuung zu Hause |
| | `house_sitting_night` | Betreuung beim Halter, Nacht | Hundebetreuung beim Halter (Nacht) |
| | `boarding_night` | Betreuung beim Sitter, Nacht | Hundebetreuung beim Sitter (Nacht) |
| | `daycare_day` | Tagesbetreuung | Tagesbetreuung für den Hund |
