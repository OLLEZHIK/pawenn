# Задача: поисковые названия услуг на страницах цен (sk, en)

**Исполнитель:** Antigravity IDE
**Роль:** Research agent.
**Тип:** исследование, объём небольшой (≈ 35 услуг, ≈ 80 запросов).
**Ветка:** `antigravity/keywords-price-services`
**Зависимости:** нет. Можно делать раньше или вперемешку с
`ide-kosice-reviews-prices.md` — файлы не пересекаются.

Перед работой — `docs/playbooks/quality.md` и
`docs/seo/keywords/README.md` (особенно §1 «Как собирать цифры» и §3.1
«Названия услуг для страниц цен»).

## Зачем

Решение владельца (2026-09-27): страница цены услуги называется так, как
люди ищут эту услугу, а не технической подписью прайса («Pes, noc»).
Поисковые названия (`seo` в `website/lib/services.ts`) уже есть у всех
услуг, но у услуг ниже в карте ключевых слов **нет строки с данными** —
названия выведены из соседних запросов, без проверки. По §3.1 шаг 1 так
нельзя: сначала исследование.

## Какие услуги

Код услуги — как в `website/lib/services.ts`; «сейчас» — текущее
поисковое название, его и нужно проверить.

### Словацкий (`sk`) — в `docs/seo/keywords/sk.md`, раздел 3

| Код | Категория | Сейчас |
|---|---|---|
| `daycare_pass` | гостиница | Permanentka do psej škôlky |
| `pickup` | гостиница | Dovoz a odvoz psa do hotela |
| `extra_walk` | гостиница | Venčenie navyše v hoteli pre psov |
| `group_lesson` | дрессировка | Skupinový výcvik psa |
| `private_lesson` | дрессировка | Individuálny výcvik psa |
| `behavior_consult` | дрессировка | Konzultácia problémového správania psa |
| `membership` | дрессировка | Členský poplatok v kynologickom klube |
| `cat_visit` | передержка | Stráženie mačky – návšteva doma |
| `house_sitting_night` | передержка | Stráženie psa u vás doma cez noc |
| `boarding_night` | передержка | Stráženie psa u opatrovateľa cez noc |
| `daycare_day` | передержка | Denné stráženie psa |
| `walk_30`, `walk_60` | передержка | Venčenie psa na 30 minút / na hodinu |

### Английский (`en`) — в `docs/seo/keywords/en.md`, раздел 3

Все услуги, кроме уже покрытых (`full_groom`, `neuter_cat`, `spay_cat`,
`spay_dog`, `vaccination_dog`, `microchip`, `dog_night`):

| Код | Сейчас |
|---|---|
| `bath_dry` | Dog bath and blow-dry |
| `hand_stripping` | Dog hand stripping |
| `deshedding` | Dog de-shedding |
| `nail_trim` | Dog nail trim |
| `cat_groom` | Cat grooming |
| `exam` | Vet check-up |
| `cat_night` | Cat hotel per night |
| `daycare_day` (гостиница) | Dog daycare per day |
| `daycare_pass` | Dog daycare pass |
| `pickup` | Pet hotel pick-up and drop-off |
| `extra_walk` | Extra walk at a dog hotel |
| `puppy_course` | Puppy classes |
| `obedience_course` | Dog obedience course |
| `group_lesson` | Group dog training class |
| `private_lesson` | Private dog training lesson |
| `behavior_consult` | Dog behaviour consultation |
| `membership` | Dog club membership |
| `walk_30` | Dog walking, 30 minutes |
| `walk_60` | Dog walking, 1 hour |
| `cat_visit` | Cat sitting visit |
| `house_sitting_night` | Overnight pet sitting at your home |
| `boarding_night` | Overnight dog boarding at a sitter's |
| `daycare_day` (передержка) | Dog day care at a sitter's |

## Что сделать

1. **Варианты запроса.** Для каждой услуги — 2–4 варианта того, как
   люди ищут цену этой услуги: текущее название + «cena» / «cenník» /
   «koľko stojí» (sk) или «price» / «cost» (en), плюс варианты, которые
   дают подсказки Google по основе («venčenie psa…», «dog walk…»).
2. **Цифры** — по `docs/seo/keywords/README.md` §1:
   - `sk`: Trends — Slovakia, 12 месяцев; подсказки — google.sk, язык
     `sk`, инкогнито.
   - `en`: Trends — Slovakia; спрос на английском в Словакии маленький,
     поэтому **дополнительно** Trends и подсказки по United Kingdom
     (`gl=gb`) — английский шаблон работает для всех городов, нам
     важно, как формулируют носители языка. Страну писать в колонке
     Trends: «SK: н/д; GB: 100».
   - Нет цифр ни в одном инструменте — `н/д`, решение по подсказкам и
     пометка «без цифр» в колонке «Решение». Никогда не оценка.
3. **Строки в карту.** Формат таблицы — как в разделе 3 карты
   (`README.md` §2), по строке на вариант, колонка «Сейчас на сайте» —
   текущее название из таблиц выше.
4. **Предложить поисковое название** для каждой услуги — отдельной
   колонкой «Название (§3.1)» у строки **главного** варианта — строго по
   шагам 1–6 §3.1:
   - убрать слова цены и город, оставить объект («psa», «dog»);
   - единица словами, как в запросе («na hodinu», «per night»);
   - **без запятых, тире, косых черт и сокращений** (сейчас так нарушают
     `walk_30`, `walk_60`, `cat_visit`);
   - **до 45 знаков**; сейчас длиннее всего `behavior_consult`,
     `membership`, `boarding_night` — если главный запрос длинный,
     брать короткую форму из подсказок.
   - Если текущее название совпадает с главным вариантом — написать
     «оставить».

## Чего не делать

- Не менять `website/lib/services.ts` и другие файлы сайта: названия
  применит «левая рука» отдельным PR после мерджа карты.
- Не трогать уже заполненные строки карт (категории, признаки, услуги
  ветклиник) и польскую карту.
- Не придумывать цифры: только то, что показал инструмент, с датой.

## Готово, когда

- В `docs/seo/keywords/sk.md` и `docs/seo/keywords/en.md`, раздел 3 —
  строки для **всех** услуг из таблиц выше; у каждой услуги отмечен
  главный вариант и предложено название (или «оставить»).
- В начале каждой карты — дата сбора и источники (для `en` — какие
  страны).
- Открыт PR в `main` с блоком «Самопроверка» из `quality.md`; в
  описании — таблица «код → было → предлагаю».
