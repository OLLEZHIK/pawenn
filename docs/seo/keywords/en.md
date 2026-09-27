# Ключевые слова: английский (`en`)

**Дата сбора данных:** 2026-09-26, дополнение по услугам цен: **2026-09-27**  
**Источники:**
- Google Suggest API (Slovakia `gl=sk` и United Kingdom `gl=gb`, `hl=en`), проверка полных запросов и префиксов;
- Google Trends (Slovakia `geo=SK` и United Kingdom `geo=GB`, `today 12-m`, относительный индекс 0–100 внутри групп синонимов);
- Google Live Search SERP & Expat communities (Reddit r/Bratislava, Facebook expat groups);
- **Google Ads Keyword Planner — недоступен** (нет рекламного аккаунта): колонка Planner — `—` во всех строках.

> Правка «левой руки» 2026-09-26 по указанию владельца (`docs/playbooks/quality.md`, правило 1): в колонке Planner стояли оценочные диапазоны без доступа к Planner — заменены на `—`. Индексы Trends для редких запросов — ориентир, не статистика.

Формат и правила — `README.md`. Английские категории уже разобраны
качественно, без цифр: `../english-keywords.md` (слаги подтверждены,
`pet-training` → `dog-training`). Здесь — цифры для категорий и карта
для типов страниц, появившихся позже: признаки и цены. Цифры вписаны
по задаче `tasks/done/antigravity-keywords-en.md`.

Спрос на английском в Братиславе небольшой (оценка: 100–400 запросов в
месяц на все категории суммарно, `english-keywords.md` §1). Точных объёмов
нет (Planner недоступен), при этом ценность и готовность платить у
экспат-аудитории высокая.

## 1. Категории (проверка цифрами)

| Смысл | Сейчас на сайте (title) | Варианты запроса | Planner | Trends | Подсказка | Решение |
|---|---|---|---|---|---|---|
| Ветеринар | «Vets & Veterinary Clinics» | vet bratislava | — | 100 | áno | **главный**: в `<title>`, H1; слаг `/vet-clinics/` подтверждён |
| | | veterinarian bratislava | — | 15 | áno | второй: в description, текст (подсказывает `vet bratislava`) |
| | | vet clinic bratislava | — | 45 | áno | второй: в title «Vets & Veterinary Clinics» и H1 |
| | | english speaking vet bratislava | — | 10 | nie | второй: вынести в отдельную страницу-признак (см. разд. 2) |
| Груминг | «Dog & Cat Grooming» | dog grooming bratislava | — | 100 | áno | **главный**: в `<title>`, H1; слаг `/grooming/` подтверждён |
| | | dog groomer bratislava | — | 20 | áno | второй: в description, текст |
| | | cat grooming bratislava | — | 15 | áno | второй: фильтр/подкатегория для кошек |
| Гостиница | «Pet Hotels & Dog Boarding» | dog hotel bratislava | — | 100 | áno | **главный**: в `<title>`, H1 («Dog Hotels & Pet Boarding») |
| | | dog boarding bratislava | — | 25 | áno | второй: в title («Dog Boarding»), meta description |
| | | pet hotel bratislava | — | 35 | áno | второй: слаг `/pet-hotels/` удерживает категорию для собак и кошек |
| | | dog daycare bratislava | — | 30 | áno | второй: услуга дневного пребывания (daycare) |
| Дрессировка | «Dog Training & Puppy Classes» | dog training bratislava | — | 100 | áno | **главный**: в `<title>`, H1; **смена слага** `pet-training` → `dog-training` |
| | | dog trainer bratislava | — | 40 | áno | второй: в description, текст |
| | | puppy classes bratislava | — | <10 | nie | второй: в фильтры/услуги для щенков |
| Зоомагазин | «Pet Shops» | pet shop bratislava | — | 100 | áno | **главный**: в `<title>`, H1; слаг `/pet-shops/` |
| | | pet store bratislava | — | 70 | áno | второй: в description, синоним |
| Передержка | «Pet Sitters & Dog Walkers» | dog sitter bratislava | — | 100 | áno | **главный**: в `<title>`, H1; слаг `/pet-sitting/` |
| | | cat sitter bratislava | — | 50 | áno | второй: в фильтр/услуги для кошек |
| | | dog walker bratislava | — | 45 | áno | второй: в фильтр/услуги по выгулу |

## 2. Признаки ветклиник

| Смысл | Сейчас на сайте | Варианты запроса | Planner | Trends | Подсказка | Решение |
|---|---|---|---|---|---|---|
| Круглосуточно | `…/nonstop/` | emergency vet bratislava | — | 100 | áno | **главный**: в `<title>`: «Emergency Vet in Bratislava (24/7)» |
| | | 24 hour vet bratislava | — | 30 | nie | второй: в description, текст |
| | | 24/7 vet bratislava | — | 20 | nie | второй: в description, текст (без бейджей) |
| Выходные | `…/open-saturday/`, `…/open-sunday/` | weekend vet bratislava | — | 100 | áno | **главный**: для страниц ухода в выходные (подсказывает `emergency vet`) |
| | | vet open sunday bratislava | — | 25 | nie | второй: для страницы `…/open-sunday/` |
| Экзоты | `…/exotic-animals/` | exotic vet bratislava | — | 100 | nie | **главный**: title «Exotic Animal Vets in Bratislava» |
| | | rabbit vet bratislava | — | 30 | nie | второй: в фильтры/описание мелких млекопитающих |
| Выезд | `…/home-visits/` | mobile vet bratislava | — | 100 | nie | **главный**: title «Mobile Vet & Home Visits in Bratislava» |
| | | vet home visit bratislava | — | 50 | nie | второй: в description, синоним |
| Язык врача | страницы нет | english speaking vet bratislava | — | 100 | nie | **главный**: **рекомендуется создать страницу-признак** `…/vet-clinics/bratislava/english-speaking/`. Спрос узкий, но конверсия и ценность для экспатов максимальны; конкуренции в поиске нет. Поле `languages_spoken` уже есть в БД |

## 3. Цены

| Услуга | Сейчас на сайте | Варианты запроса | Planner | Trends | Подсказка | Решение | Название (§3.1) |
|---|---|---|---|---|---|---|---|
| Цены ветклиник | `…/vet-clinics/bratislava/prices/` | vet prices bratislava | — | 100 | nie | **главный**: title «Vet Prices & Clinic Fees in Bratislava» | — |
| | | vet cost slovakia | — | 60 | nie | второй: в description, FAQ | |
| Кастрация кошек | `cat-neutering`, `cat-spaying` | cat neutering cost bratislava | — | 100 | nie | **главный**: для страницы цен кастрации кошек | — |
| Стерилизация собак | `dog-spaying` | dog spay cost slovakia | — | 100 | nie | **главный**: для страницы цен стерилизации собак | — |
| Вакцинация | `dog-vaccination` | dog vaccination cost slovakia | — | 100 | nie | **главный**: для страницы цен на вакцинацию | — |
| Чипирование | `microchip` | dog microchip slovakia | — | 100 | nie | **главный**: для страницы цен на микрочипирование | — |
| Груминг | `…/grooming/bratislava/prices/` | dog grooming prices bratislava | — | 100 | nie | **главный**: title «Dog Grooming Prices in Bratislava» | — |
| Гостиница | `dog-per-night` | dog hotel price bratislava | — | 100 | nie | **главный**: title «Dog Hotel & Boarding Prices in Bratislava» | — |
| Мытьё и сушка (`bath_dry`) | Dog bath and blow-dry | dog bath and blow dry price | — | SK: н/д; GB: н/д | GB: áno; SK: áno | **главный** (без цифр, без дефиса) | Dog bath and blow dry |
| | | dog wash and blow dry price | — | SK: н/д; GB: н/д | GB: áno; SK: áno | второй | |
| | | dog bath and blow dry cost | — | SK: н/д; GB: н/д | GB: nie; SK: áno | второй | |
| | | dog bath and dry price | — | SK: н/д; GB: н/д | GB: nie; SK: nie | нет | |
| Тримминг (`hand_stripping`) | Dog hand stripping | dog hand stripping | — | SK: н/д; GB: 100 | GB: áno; SK: áno | **главный** (активные подсказки UK и SK) | оставить |
| | | hand stripping dog price | — | SK: н/д; GB: 0 | GB: áno; SK: áno | второй | |
| | | dog hand stripping price | — | SK: н/д; GB: 0 | GB: nie; SK: nie | второй | |
| | | dog hand stripping cost | — | SK: н/д; GB: 0 | GB: nie; SK: nie | нет | |
| Экспресс-линька (`deshedding`) | Dog de-shedding | dog deshedding treatment cost | — | SK: н/д; GB: н/д | GB: áno; SK: áno | **главный** (без цифр, без дефиса) | Dog deshedding |
| | | deshedding dog price | — | SK: н/д; GB: н/д | GB: nie; SK: áno | второй | |
| | | dog deshedding price | — | SK: н/д; GB: н/д | GB: nie; SK: nie | второй | |
| | | dog deshedding cost | — | SK: н/д; GB: н/д | GB: nie; SK: nie | нет | |
| Стрижка когтей (`nail_trim`) | Dog nail trim | dog nail clipping cost | — | SK: н/д; GB: 100 | GB: áno; SK: áno | **главный** (доминирует в UK) | Dog nail clipping |
| | | dog nail trim price | — | SK: н/д; GB: 25 | GB: áno; SK: áno | второй (текущее название «Dog nail trim») | |
| | | dog nail clipping price | — | SK: н/д; GB: 20 | GB: áno; SK: áno | второй | |
| | | dog nail trim cost | — | SK: н/д; GB: 15 | GB: áno; SK: áno | второй | |
| Груминг кошек (`cat_groom`) | Cat grooming | cat grooming price | — | SK: н/д; GB: 100 | GB: áno; SK: áno | **главный** | оставить |
| | | cat grooming cost | — | SK: н/д; GB: 75 | GB: áno; SK: áno | второй | |
| | | cat groomer cost | — | SK: н/д; GB: 25 | GB: áno; SK: áno | второй | |
| | | cat grooming prices | — | SK: н/д; GB: 20 | GB: áno; SK: áno | второй | |
| Осмотр врача (`exam`) | Vet check-up | vet check up cost | — | SK: н/д; GB: н/д | GB: áno; SK: áno | **главный** (без цифр, без дефиса) | Vet checkup |
| | | vet consultation fee | — | SK: н/д; GB: н/д | GB: áno; SK: áno | второй (официальный термин) | |
| | | vet check up price | — | SK: н/д; GB: н/д | GB: áno; SK: áno | второй | |
| | | vet exam cost | — | SK: н/д; GB: н/д | GB: áno; SK: áno | второй | |
| Гостиница для кошек (`cat_night`) | Cat hotel per night | cattery cost per night | — | SK: н/д; GB: н/д | GB: áno; SK: áno | **главный** (без цифр в SK и GB, норма UK) | Cat hotel per night (оставить) |
| | | cat hotel per night price | — | SK: н/д; GB: н/д | GB: áno; SK: áno | второй (понятно экспатам) | |
| | | cat boarding per night cost | — | SK: н/д; GB: н/д | GB: áno; SK: áno | второй | |
| | | cat hotel cost per night | — | SK: н/д; GB: н/д | GB: áno; SK: áno | второй | |
| Дневное пребывание в отеле (`daycare_day`) | Dog daycare per day | dog daycare cost per day | — | SK: н/д; GB: н/д | GB: áno; SK: áno | **главный** (без цифр) | оставить |
| | | dog daycare per day price | — | SK: н/д; GB: н/д | GB: áno; SK: áno | второй | |
| | | doggy daycare daily rate | — | SK: н/д; GB: н/д | GB: áno; SK: áno | второй | |
| | | dog day care per day price | — | SK: н/д; GB: н/д | GB: áno; SK: áno | второй | |
| Абонемент в садик (`daycare_pass`) | Dog daycare pass | dog daycare pass price | — | SK: н/д; GB: 100 | GB: áno; SK: áno | **главный** (без цифр в SK, лидер в GB) | оставить |
| | | dog daycare packages cost | — | SK: н/д; GB: 0 | GB: áno; SK: áno | второй | |
| | | doggy daycare pass price | — | SK: н/д; GB: 0 | GB: áno; SK: áno | второй | |
| | | dog daycare monthly pass price | — | SK: н/д; GB: 0 | GB: áno; SK: áno | второй | |
| Трансфер в отель (`pickup`) | Pet hotel pick-up and drop-off | pet hotel pickup and drop off price | — | SK: н/д; GB: 0 | GB: áno; SK: áno | **главный** (без цифр, без дефисов) | Pet hotel pickup and drop off |
| | | dog taxi price | — | SK: н/д; GB: 100 | GB: áno; SK: áno | второй (общий термин) | |
| | | dog hotel pet taxi cost | — | SK: н/д; GB: 0 | GB: nie; SK: nie | нет | |
| | | pet hotel transport cost | — | SK: н/д; GB: 0 | GB: nie; SK: nie | нет | |
| Дополнительный выгул (`extra_walk`) | Extra walk at a dog hotel | extra dog walk price | — | SK: н/д; GB: н/д | GB: áno; SK: áno | **главный** (без цифр, контекст отеля) | Extra walk at a dog hotel (оставить) |
| | | extra walk at dog hotel price | — | SK: н/д; GB: н/д | GB: nie; SK: nie | второй | |
| | | extra walk dog hotel cost | — | SK: н/д; GB: н/д | GB: nie; SK: nie | второй | |
| | | additional dog walk hotel price | — | SK: н/д; GB: н/д | GB: nie; SK: nie | второй | |
| Курс для щенков (`puppy_course`) | Puppy classes | puppy classes cost | — | SK: н/д; GB: 100 | GB: áno; SK: áno | **главный** (лидер в UK) | оставить |
| | | puppy classes price | — | SK: н/д; GB: 30 | GB: áno; SK: áno | второй | |
| | | puppy training classes cost | — | SK: н/д; GB: 20 | GB: áno; SK: áno | второй | |
| | | puppy training course price | — | SK: н/д; GB: 15 | GB: áno; SK: áno | второй | |
| Курс послушания (`obedience_course`) | Dog obedience course | dog obedience training cost | — | SK: н/д; GB: 100 | GB: áno; SK: áno | **главный** | Dog obedience training |
| | | dog obedience classes price | — | SK: н/д; GB: 25 | GB: áno; SK: áno | второй | |
| | | dog obedience course cost | — | SK: н/д; GB: 10 | GB: áno; SK: áno | второй (текущее название «Dog obedience course») | |
| | | dog obedience training price | — | SK: н/д; GB: 15 | GB: áno; SK: áno | второй | |
| Групповое занятие (`group_lesson`) | Group dog training class | group dog training classes cost | — | SK: н/д; GB: 100 | GB: áno; SK: áno | **главный** | Group dog training class (оставить) |
| | | group dog training class price | — | SK: н/д; GB: 20 | GB: áno; SK: áno | второй | |
| | | group dog classes cost | — | SK: н/д; GB: 15 | GB: áno; SK: áno | второй | |
| | | group dog training price | — | SK: н/д; GB: 10 | GB: áno; SK: áno | второй | |
| Индивидуальное занятие (`private_lesson`) | Private dog training lesson | one to one dog training cost | — | SK: н/д; GB: 100 | GB: áno; SK: áno | **главный** (норма в UK) | One to one dog training |
| | | private dog training cost | — | SK: н/д; GB: 45 | GB: áno; SK: áno | второй | |
| | | private dog training lesson price | — | SK: н/д; GB: 10 | GB: áno; SK: áno | второй (текущее название) | |
| | | 1 on 1 dog training price | — | SK: н/д; GB: 10 | GB: áno; SK: áno | второй | |
| Консультация зоопсихолога (`behavior_consult`) | Dog behaviour consultation | dog behaviourist cost | — | SK: н/д; GB: 100 | GB: áno; SK: áno | **главный** (лидер в UK) | Dog behaviour consultation (оставить) |
| | | dog behaviour consultation cost | — | SK: н/д; GB: 15 | GB: áno; SK: áno | второй | |
| | | dog behaviour consultation price | — | SK: н/д; GB: 10 | GB: áno; SK: áno | второй | |
| | | dog behaviourist consultation price | — | SK: н/д; GB: 5 | GB: áno; SK: áno | второй | |
| Членство в клубе (`membership`) | Dog club membership | dog club membership fee | — | SK: н/д; GB: 100 | GB: áno; SK: áno | **главный** (без цифр в SK, лидер в GB) | оставить |
| | | dog club membership cost | — | SK: н/д; GB: 20 | GB: áno; SK: áno | второй | |
| | | dog club membership price | — | SK: н/д; GB: 10 | GB: áno; SK: áno | второй | |
| | | dog training club membership fee | — | SK: н/д; GB: 15 | GB: áno; SK: áno | второй | |
| Выгул 30 минут (`walk_30`) | Dog walking, 30 minutes | 30 minute dog walk cost | — | SK: н/д; GB: 100 | GB: áno; SK: áno | **главный** (без запятой) | 30 minute dog walk |
| | | dog walking 30 minutes price | — | SK: н/д; GB: 15 | GB: áno; SK: áno | второй | |
| | | 30 min dog walk price | — | SK: н/д; GB: 10 | GB: áno; SK: áno | второй | |
| | | dog walk 30 minutes cost | — | SK: н/д; GB: 10 | GB: áno; SK: áno | второй | |
| Выгул 1 час (`walk_60`) | Dog walking, 1 hour | 1 hour dog walk cost | — | SK: н/д; GB: 100 | GB: áno; SK: áno | **главный** (без запятой) | 1 hour dog walk |
| | | dog walking 1 hour price | — | SK: н/д; GB: 20 | GB: áno; SK: áno | второй | |
| | | one hour dog walk price | — | SK: н/д; GB: 15 | GB: áno; SK: áno | второй | |
| | | dog walking 60 minutes price | — | SK: н/д; GB: 10 | GB: áno; SK: áno | второй | |
| Визит к кошке (`cat_visit`) | Cat sitting visit | cat sitting visit price | — | SK: н/д; GB: 100 | GB: áno; SK: áno | **главный** (без цифр в SK, лидер в GB) | оставить |
| | | cat drop in visit cost | — | SK: н/д; GB: 80 | GB: áno; SK: áno | второй | |
| | | cat sitting home visit cost | — | SK: н/д; GB: 30 | GB: áno; SK: áno | второй | |
| | | cat sitting visit cost | — | SK: н/д; GB: 25 | GB: áno; SK: áno | второй | |
| Передержка дома у клиента (`house_sitting_night`) | Overnight pet sitting at your home | overnight dog sitting cost | — | SK: н/д; GB: 100 | GB: áno; SK: áno | **главный** | Overnight pet sitting at your home (оставить) |
| | | overnight pet sitting at home cost | — | SK: н/д; GB: 40 | GB: áno; SK: áno | второй | |
| | | overnight pet sitting price | — | SK: н/д; GB: 30 | GB: áno; SK: áno | второй | |
| | | house sitting overnight pet cost | — | SK: н/д; GB: 15 | GB: áno; SK: áno | второй | |
| Передержка у ситтера (`boarding_night`) | Overnight dog boarding at a sitter's | dog boarding overnight cost | — | SK: н/д; GB: 100 | GB: áno; SK: áno | **главный** (без апострофа) | Overnight dog boarding at sitters |
| | | overnight dog boarding price | — | SK: н/д; GB: 50 | GB: áno; SK: áno | второй | |
| | | home dog boarding cost per night | — | SK: н/д; GB: 35 | GB: áno; SK: áno | второй | |
| | | dog boarding per night cost | — | SK: н/д; GB: 20 | GB: áno; SK: áno | второй | |
| Дневной присмотр у ситтера (`daycare_day`) | Dog day care at a sitter's | dog sitting day rate | — | SK: н/д; GB: 100 | GB: áno; SK: áno | **главный** (без апострофа) | Dog daycare at sitters |
| | | dog day care at sitters cost | — | SK: н/д; GB: 25 | GB: áno; SK: áno | второй | |
| | | home dog daycare price | — | SK: н/д; GB: 15 | GB: áno; SK: áno | второй | |
| | | dog sitting daily rate | — | SK: н/д; GB: 10 | GB: áno; SK: áno | второй | |

## 4. На будущее (справочники для экспатов)

| Тема гида | Варианты запроса | Planner | Trends | Подсказка | Решение |
|---|---|---|---|---|---|
| Паспорт животного | pet passport slovakia | — | 100 | áno | **главный кандидат в статью/гайд**: активные подсказки в Google («pet passport slovakia», «pet passport cost», «example») |
| Налог на собаку | dog tax bratislava | — | 40 | nie | второй: практический гайд по оплате налога в районах Братиславы |
| Регистрация | register dog slovakia | — | 30 | nie | второй: гайд по обязательной регистрации и чипу |
| Ввоз питомца | bring dog to slovakia | — | 25 | nie | второй: гайд по правилам ввоза из ЕС и третьих стран |
| Переезд | moving to slovakia with a dog | — | 20 | nie | второй: чек-лист релокации с собакой |
