# Ключевые слова: польский (`pl`)

Дата сбора: **2026-09-27**.  
Источники данных:
- **Google Trends** (Polska, период: 12 месяцев, гео: `PL`, относительный индекс 0–100 внутри каждой группы сравнения синонимов).
- **Подсказки Google** (google.pl, локаль `pl-PL`, инкогнито / Google Suggest API).
- **Google Ads Keyword Planner**: нет доступа к аккаунту в CLI (в соответствии с правилами `docs/playbooks/quality.md` §§1–2 колонка Planner помечена `—` во всех строках; сбор проведён по шагам 2–3 методики `docs/seo/keywords/README.md`).

Базовый исследуемый город — **Warszawa** (первый польский город проекта, шаблон для всех польских городов). Районы отдельно не исследовались (`quality.md`, п. 2 задачи).

> **Методика фиксации данных Trends (`docs/playbooks/quality.md`, `README.md`):**  
> - Сравнение проводится внутри смысловых групп (до 5 вариантов). Лидер группы получает индекс 100, остальные варианты — пропорциональный балл. Малый объём рядом с лидером обозначается `<1`.  
> - Если у **всех** вариантов группы в Google Trends нулевой объём (инструмент пишет «Недостаточно данных»), фиксируется **`н/д`** (нет данных), а решение принимается на основе поисковых подсказок Google Suggest и узуса польского языка.

---

## 1. Категории

*Группы сравнения Trends:*
- *Ветклиники: weterynarz warszawa vs klinika weterynaryjna vs przychodnia weterynaryjna vs gabinet weterynaryjny vs lecznica weterynaryjna (и weterynaria)*
- *Груминг: groomer warszawa vs fryzjer dla psów vs psi fryzjer vs strzyżenie psów vs salon dla psów*
- *Отели: hotel dla kotów warszawa vs hotel dla psów vs psi hotel vs hotel dla zwierząt vs świetlica dla psów*
- *Дрессировка: behawiorysta warszawa vs szkolenie psów vs tresura psów vs szkoła dla psów vs kurs posłuszeństwa*
- *Зоомагазины: zoologiczny warszawa vs sklep zoologiczny vs artykuły zoologiczne vs karma dla psów*
- *Передержка / выгул: petsitter warszawa vs opieka nad kotem vs opieka nad psem vs wyprowadzanie psów vs dog sitter*

| Смысл | Текущий аналог (EN / SK) | Варианты запроса | Planner | Trends (0–100) | Подсказка | Решение |
|---|---|---|---|---|---|---|
| **Ветеринар** | `/vet-clinics/`, `/sk/veterinar/` | weterynarz warszawa | — | 100 | tak | **главный** (в title, H1 и slug) |
| | | klinika weterynaryjna warszawa | — | 4 | tak | **второй** (официальное наименование крупных центров) |
| | | przychodnia weterynaryjna warszawa | — | 3 | tak | **второй** (в тексты и описания) |
| | | gabinet weterynaryjny warszawa | — | 1 | tak | **второй** (для небольших практик) |
| | | lecznica weterynaryjna warszawa | — | 1 | tak | **второй** (традиционный термин) |
| | | weterynaria warszawa | — | 1 | tak | **нет** (обобщённое понятие, низкий коммерческий интент) |
| **Груминг** | `/grooming/`, `/sk/psi-salon/` | groomer warszawa | — | 100 | tak | **главный** (в Польше термин «groomer» абсолютно доминирует!) |
| | | fryzjer dla psów warszawa | — | 21 | tak | **второй** (народный синоним, обязательно в title и H1) |
| | | psi fryzjer warszawa | — | 9 | tak | **второй** (разговорный вариант) |
| | | strzyżenie psów warszawa | — | 2 | tak | **второй** (основной глагольный запрос услуги) |
| | | salon dla psów warszawa | — | 2 | tak | **второй** |
| | | strzyżenie kotów warszawa | — | н/д | tak | **главный** для услуг груминга кошек (по Suggest) |
| **Гостиница** | `/pet-hotels/`, `/sk/hotel-pre-zvierata/` | hotel dla kotów warszawa | — | 100 | tak | **главный** по кошкам |
| | | hotel dla psów warszawa | — | 22 | tak | **главный** по собакам (основная целевая услуга) |
| | | psi hotel warszawa | — | <1 | tak | **второй** (разговорный синоним) |
| | | hotel dla zwierząt warszawa | — | <1 | tak | **второй / общий slug** (для охвата всех животных) |
| | | świetlica dla psów warszawa | — | <1 | tak | **главный** для дневного пребывания (daycare) |
| **Дрессировка** | `/dog-training/`, `/sk/vycvik-psov/` | behawiorysta warszawa | — | 100 | tak | **главный** по коррекции поведения |
| | | szkolenie psów warszawa | — | 44 | tak | **главный** по общей дрессировке (в title, H1 и slug) |
| | | tresura psów warszawa | — | 24 | tak | **второй** (традиционный синоним, добавить в тексты) |
| | | szkoła dla psów warszawa | — | <1 | tak | **второй** (для кинологических школ) |
| | | kurs posłuszeństwa warszawa | — | <1 | tak | **второй** (название базового курса) |
| **Зоомагазин** | `/pet-shops/`, `/sk/chovatelske-potreby/` | zoologiczny warszawa | — | 100 | tak | **главный** разговорный запрос («sklep zoologiczny») |
| | | sklep zoologiczny warszawa | — | 46 | tak | **главный** официальный запрос (в title, H1 и slug) |
| | | artykuły zoologiczne warszawa | — | 2 | nie | **нет** |
| | | karma dla psów warszawa | — | <1 | tak | **второй** (для товарных страниц) |
| **Передержка / выгул** | `/pet-sitting/`, `/sk/opatrovanie-zvierat/` | petsitter warszawa | — | 100 | tak | **главный** термин в польских городах (в title и H1) |
| | | opieka nad kotem warszawa | — | 8 | tak | **главный** для присмотра за кошками |
| | | opieka nad psem warszawa | — | <1 | tak | **главный** для общего ухода за собаками |
| | | wyprowadzanie psów warszawa | — | <1 | tak | **главный** для услуг выгула |
| | | dog sitter warszawa | — | <1 | tak | **второй** (английский синоним) |

---

## 2. Признаки ветклиник

*Группы сравнения Trends:*
- *Круглосуточно: weterynarz 24h warszawa vs całodobowy vs pogotowie vs lecznica całodobowa*
- *Выходные: weterynarz w niedzielę warszawa vs weterynarz sobota warszawa vs weterynarz w weekend warszawa (все дали 0 в гео-выдаче Trends -> н/д)*
- *Экзоты: weterynarz od gryzoni warszawa vs zwierzęta egzotyczne vs dla królika*
- *Выезд на дом: weterynarz z dojazdem warszawa vs wizyty domowe vs do domu*
- *Английский: english speaking vet warsaw vs weterynarz po angielsku warszawa (все дали 0 в Trends -> н/д)*

| Смысл | Текущий аналог (EN / SK) | Варианты запроса | Planner | Trends (0–100) | Подсказка | Решение |
|---|---|---|---|---|---|---|
| **Круглосуточно** | `/nonstop/` | weterynarz 24h warszawa | — | 100 | tak | **главный** народный запрос (в title и H1) |
| | | weterynarz całodobowy warszawa | — | <1 | tak | **второй / литературный** (в slug `calodobowy` и title) |
| | | pogotowie weterynaryjne warszawa | — | <1 | tak | **второй** (экстренная помощь) |
| | | lecznica całodobowa warszawa | — | <1 | tak | **второй** |
| **Суббота / воскресенье** | `/sobota/`, `/nedela/` | weterynarz w niedzielę warszawa | — | н/д | tak | **главный** для воскресенья (`niedziela`) |
| | | weterynarz sobota warszawa | — | н/д | tak | **главный** для субботы (`sobota`) |
| | | weterynarz w weekend warszawa | — | н/д | tak | **второй** (общий поиск по выходным) |
| **Экзоты** | `/exoticke-zvierata/` | weterynarz od gryzoni warszawa | — | 100 | tak | **главный** народный запрос (грызуны) |
| | | weterynarz zwierzęta egzotyczne warszawa | — | <1 | tak | **главный** официальный термин (в slug `zwierzeta-egzotyczne`) |
| | | weterynarz dla królika warszawa | — | <1 | tak | **второй** (в текст и FAQ) |
| **Выезд на дом** | `/vyjazd-domov/` | weterynarz z dojazdem warszawa | — | 100 | tak | **главный** (в title и H1) |
| | | weterynarz wizyty domowe warszawa | — | <1 | tak | **второй / slug** (`wizyty-domowe`) |
| | | weterynarz do domu warszawa | — | <1 | tak | **второй** |
| **Англоязычный приём** | `…/english-speaking/`, `…/po-anglicky/` | english speaking vet warsaw | — | н/д | tak | **главный** для экспатов в Варшаве (по Suggest) |
| | | weterynarz po angielsku warszawa | — | н/д | nie | **второй** |

---

## 3. Цены

### Общие запросы обзора цен

*Группы сравнения Trends:*
- *Ветклиники: ile kosztuje weterynarz vs weterynarz cennik warszawa vs cennik weterynarza warszawa*
- *Груминг, гостиницы: локальные запросы дали 0 во всей группе -> н/д*
- *Дрессировка: szkolenie psa cena vs kurs posłuszeństwa cena*
- *Выгул/присмотр: opieka nad psem cena vs petsitter cena vs wyprowadzanie psa cena*

| Услуга | Текущий аналог (EN / SK) | Варианты запроса | Planner | Trends (0–100) | Подсказка | Решение |
|---|---|---|---|---|---|---|
| Цены ветклиник | `…/prices/`, `…/ceny/` | ile kosztuje weterynarz | — | 100 | tak | **главный** инфо-запрос |
| | | weterynarz cennik warszawa | — | 1 | tak | **главный** коммерческий запрос (в title и H1) |
| | | cennik weterynarza warszawa | — | <1 | nie | **нет** |
| Цены груминга | `…/grooming/…/prices/` | strzyżenie psów cennik warszawa | — | н/д | tak | **главный** коммерческий (по Suggest) |
| | | groomer cennik warszawa | — | н/д | tak | **второй** |
| | | ile kosztuje strzyżenie psa | — | н/д | tak | **главный** общий |
| Цены гостиниц | `…/pet-hotels/…/prices/` | hotel dla psów cena za dobę | — | н/д | tak | **главный** (по Suggest) |
| | | hotel dla psów doba cena | — | н/д | tak | **второй** |
| Цены дрессировки | `…/dog-training/…/prices/` | szkolenie psa cena | — | 100 | tak | **главный** |
| | | kurs posłuszeństwa cena | — | <1 | tak | **второй** |
| Цены выгула / присмотра | `…/pet-sitting/…/prices/` | opieka nad psem cena | — | 100 | tak | **главный** |
| | | wyprowadzanie psa cena | — | <1 | tak | **главный** для выгула |
| | | petsitter cena | — | <1 | tak | **второй** |

---

### Конкретные услуги (30 услуг из `website/lib/priceSlugs.ts`)

| Услуга | Код | Варианты запроса | Planner | Trends | Подсказка | Решение |
|---|---|---|---|---|---|---|
| **Груминг: полный комплекс** | `full_groom` | strzyżenie psa cena | — | 100 | tak | **главный** |
| | | kompleksowa pielęgnacja psa cena | — | <1 | nie | **второй** (официальный термин салонов) |
| **Груминг: купание и сушка** | `bath_dry` | kąpiel psa cena | — | н/д | tak | **главный** (по Suggest) |
| | | mycie psa cena | — | н/д | tak | **второй** |
| **Груминг: тримминг** | `hand_stripping` | trymowanie psa cena | — | н/д | tak | **главный** (по Suggest) |
| **Груминг: вычёсывание podszerstka** | `deshedding` | wyczesywanie psa cena | — | н/д | tak | **главный** (по Suggest) |
| | | wyczesywanie podszerstka cena | — | н/д | nie | **второй** (профессиональный термин) |
| **Груминг: когти** | `nail_trim` | obcinanie pazurów u psa cena | — | н/д | tak | **главный** (по Suggest) |
| | | obcinanie pazurów psa cena | — | н/д | tak | **второй** |
| **Груминг: кошки** | `cat_groom` | strzyżenie kota cena | — | н/д | tak | **главный** (по Suggest) |
| | | czesanie kota cena | — | н/д | tak | **второй** |
| **Вет: осмотр** | `exam` | wizyta u weterynarza cena | — | н/д | tak | **главный** (по Suggest) |
| | | badanie kliniczne psa cena | — | н/д | tak | **второй** |
| | | konsultacja weterynaryjna cena | — | н/д | tak | **второй** |
| **Вет: вакцинация собаки** | `vaccination_dog` | szczepienie psa na wściekliznę cena | — | 100 | tak | **главный** (наибольший спрос — на бешенство) |
| | | szczepienie psa cena | — | 29 | tak | **второй** (комплексная вакцинация) |
| **Вет: чипирование** | `microchip` | czipowanie psa cena | — | н/д | tak | **главный** (по Suggest, чаще с «cz») |
| | | chipowanie psa cena | — | н/д | tak | **второй** (вариант с «ch») |
| **Вет: кастрация кота** | `neuter_cat` | kastracja kota cena | — | 100 | tak | **главный** |
| | | kastracja kocura cena | — | <1 | tak | **второй** |
| **Вет: стерилизация кошки** | `spay_cat` | sterylizacja kotki cena | — | 100 | tak | **главный** |
| | | kastracja kotki cena | — | <1 | tak | **второй** |
| **Вет: стерилизация суки** | `spay_dog` | sterylizacja psa cena | — | 100 | tak | **главный** (используют для самок в народе) |
| | | sterylizacja suki cena | — | <1 | tak | **второй** (точный биологический термин) |
| | | kastracja suki cena | — | <1 | tak | **второй** |
| **Отель: собака ночь** | `dog_night` | hotel dla psów cena za dobę | — | н/д | tak | **главный** (по Suggest) |
| | | hotel dla psów doba cena | — | н/д | tak | **второй** |
| **Отель: кошка ночь** | `cat_night` | hotel dla kotów cena za dobę | — | н/д | tak | **главный** (по Suggest) |
| | | hotel dla kotów doba cena | — | н/д | nie | **второй** |
| **Отель: дневное пребывание** | `daycare_day` | świetlica dla psów cena | — | н/д | nie | **главный** (без цифр) |
| | | dzienny pobyt psa cena | — | н/д | nie | **второй** |
| **Отель: абонемент** | `daycare_pass` | karnet do świetlicy dla psów | — | н/д | nie | **главный** (без цифр) |
| **Отель: доставка** | `pickup` | transport psa do hotelu cena | — | н/д | nie | **главный** (без цифр) |
| **Отель: доп. выгул** | `extra_walk` | dodatkowy spacer z psem cena | — | н/д | nie | **главный** (без цифр) |
| **Дрессировка: щенки** | `puppy_course` | kurs dla szczeniąt cena | — | 100 | nie | **главный** |
| | | psie przedszkole cena | — | <1 | tak | **второй / народный термин** |
| **Дрессировка: послушание** | `obedience_course` | szkolenie psa cena | — | 100 | tak | **главный** |
| | | kurs posłuszeństwa cena | — | <1 | tak | **второй** |
| | | szkolenie podstawowe psa cena | — | <1 | tak | **второй** |
| **Дрессировка: группа** | `group_lesson` | zajęcia grupowe dla psów cena | — | н/д | nie | **главный** (без цифр) |
| **Дрессировка: индив.** | `private_lesson` | lekcja indywidualna z psem cena | — | н/д | nie | **главный** (без цифр) |
| **Дрессировка: поведение** | `behavior_consult` | konsultacja behawioralna cena | — | н/д | tak | **главный** (по Suggest) |
| | | behawiorysta dla psa cena | — | н/д | tak | **второй** |
| **Дрессировка: членство** | `membership` | składka członkowska zkwp | — | н/д | tak | **главный** (по Suggest) |
| **Выгул: 30 минут** | `walk_30` | wyprowadzanie psa 30 min cena | — | н/д | nie | **главный** (без цифр) |
| **Выгул: 60 минут** | `walk_60` | spacer z psem godzina cena | — | н/д | nie | **главный** (без цифр) |
| **Ситтер: визит к кошке** | `cat_visit` | wizyta u kota cena | — | н/д | nie | **главный** (без цифр) |
| **Ситтер: у владельца** | `house_sitting_night` | opieka nad psem w domu właściciela | — | н/д | nie | **главный** (без цифр) |
| **Ситтер: у ситтера** | `boarding_night` | opieka u petsittera cena | — | н/д | nie | **главный** (без цифр) |
| **Ситтер: дневной уход** | `daycare_day` | opieka dzienna nad psem cena | — | н/д | nie | **главный** (без цифр) |

---

## 4. На будущее (темы для справочников и гидов)

*Группа сравнения: paszport dla psa vs jazda z psem ztm warszawa vs czipowanie psa obowiązkowe vs podatek od psa warszawa vs szczepienie na wściekliznę obowiązkowe*

| Тема / Запрос | Trends (0–100) | Подсказка Google | Потенциал темы |
|---|---|---|---|
| `paszport dla psa` (оформление европаспорта, чип, прививки для выезда) | **100** | tak («cena», «ile kosztuje», «jak wyrobić») | **Наивысший**: главный инфо-трафик владельцев |
| `szczepienie na wściekliznę obowiązkowe` (законодательство Польши, штрафы, сроки) | **<1** | tak («kiedy pierwsze», «ile ważne») | **Высокий**: юридическая обязанность каждого владельца |
| `czipowanie psa obowiązkowe` (обязательно ли чипирование) | **<1** | tak («od kiedy», «warszawa darmowe») | **Высокий**: частый вопрос владельцев |
| `podatek od psa warszawa` (есть ли налог на собак и сколько) | **<1** | tak («czy jest», «ile wynosi») | **Высокий**: частый вопрос новичков и экспатов |
| `jazda z psem ztm warszawa` (правила проезда в транспорте: билет, намордник, поводок) | **1** | nie | **Средний**: практический городской справочник |

---

## 5. Предложение адресов страниц (слагов) на польском языке

Слаги без диакритики, в нижнем регистре, с дефисами.

### 5.1. Категории (`website/lib/categories.ts`)
| Категория | Код enum | Рекомендуемый польский slug | Обоснование |
|---|---|---|---|
| Grooming | `GROOMING` | `groomer` | Абсолютный лидер польского поиска (Trends 100 против 2 у `strzyzenie psow`). Коротко, современно, точно. |
| Veterinary Clinics | `VET_CLINIC` | `weterynarz` | Главный запрос (Trends 100). Полный аналог словацкого `/veterinar/`. |
| Pet Hotels | `PET_HOTEL` | `hotel-dla-zwierzat` | Охватывает как отели для собак, так и для кошек (по аналогии с `/hotel-pre-zvierata/`). |
| Dog Training | `DOG_TRAINING` | `szkolenie-psow` | Главный поисковый термин категории дрессировки (Trends 44). |
| Pet Shops | `PET_SHOP` | `sklep-zoologiczny` | Официальное и самое распространённое название категории. |
| Pet Sitting | `PET_SITTING` | `opieka-nad-zwierzetami` | Полный охват выгула, присмотра за кошками и собаками (аналог `/opatrovanie-zvierat/`). |

### 5.2. Системные сегменты маршрутов
| Сегмент | EN | SK | Предложение для PL | Обоснование |
|---|---|---|---|---|
| Карточка заведения | `business` | `podnik` | `miejsce` | В польском языке «miejsce» — естественное, дружелюбное обозначение карточки заведения («Dodaj swoje miejsce», «Zobacz miejsce»). |
| Хаб города | `city` | `mesto` | `miasto` | Прямой литературный перевод. Маршрут: `/pl/miasto/warszawa/`. |
| Раздел цен | `prices` | `ceny` | `ceny` | Совпадает со словацким, естественно читается в URL: `/pl/weterynarz/warszawa/ceny/`. |

### 5.3. Признаки ветклиник (5 признаков)
| Признак | SK slug | Предложение для PL | Обоснование |
|---|---|---|---|
| Круглосуточно | `nonstop` | `calodobowy` | Литературный и SEO-стандарт в Польше («weterynarz całodobowy»). Альтернатива: `24h`. |
| Суббота | `sobota` | `sobota` | Прямое совпадение. |
| Воскресенье | `nedela` | `niedziela` | Прямой польский перевод без диакритики. |
| Экзоты | `exoticke-zvierata` | `zwierzeta-egzotyczne` | Точный термин для клиник, лечащих экзотов и грызунов. |
| Выезд на дом | `vyjazd-domov` | `wizyty-domowe` | Общепринятый термин для выездных ветеринарных врачей. |
| Приём на английском | `po-anglicky` | `po-angielsku` | Точный аналог для экспатской страницы. |

### 5.4. 30 услуг цен (`website/lib/priceSlugs.ts`)
#### GROOMING:
1. `full_groom` → `strzyzenie-psa` (или `kompletna-pielegnacja`)
2. `bath_dry` → `kapiel-i-suszenie`
3. `hand_stripping` → `trymowanie`
4. `deshedding` → `wyczesywanie-podszerstka`
5. `nail_trim` → `obcinanie-pazurow`
6. `cat_groom` → `strzyzenie-kota`

#### VET_CLINIC:
7. `exam` → `badanie-kliniczne`
8. `vaccination_dog` → `szczepienie-psa`
9. `microchip` → `czipowanie`
10. `neuter_cat` → `kastracja-kota`
11. `spay_cat` → `sterylizacja-kotki`
12. `spay_dog` → `sterylizacja-suki`

#### PET_HOTEL:
13. `dog_night` → `pies-doba`
14. `cat_night` → `kot-doba`
15. `daycare_day` → `swietlica-dzien`
16. `daycare_pass` → `karnet-do-swietlicy`
17. `pickup` → `transport-zwierzaka`
18. `extra_walk` → `dodatkowy-spacer`

#### DOG_TRAINING:
19. `puppy_course` → `kurs-dla-szczeniat` (главный вариант, §3)
20. `obedience_course` → `kurs-posluszenstwa`
21. `group_lesson` → `lekcja-grupowa`
22. `private_lesson` → `lekcja-indywidualna`
23. `behavior_consult` → `konsultacja-behawioralna`
24. `membership` → `skladka-czlonkowska`

#### PET_SITTING:
25. `walk_30` → `spacer-30-min`
26. `walk_60` → `spacer-60-min`
27. `cat_visit` → `wizyta-u-kota`
28. `house_sitting_night` → `opieka-u-wlasciciela`
29. `boarding_night` → `opieka-u-petsittera`
30. `daycare_day` → `opieka-dzienna`
