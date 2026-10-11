# Задача: статьи-инфо для американских городов — Los Angeles, Miami, Houston, Chicago

**Исполнитель:** Antigravity (ПК) — контейнер выбирает диспетчер (`AGENTS.md`); ветки `pcN/…`, где N — его номер.
**Роль:** Content agent.
**Тип:** статьи по официальным источникам, партии по 2–5 статей (`docs/playbooks/guides.md`).
**Ветка PR:** `main` (статьи — `website/content/guides/en/`; сборку Vercel не трогаем: выкладка пачкой раз в сутки).
**Зависимости:** нет (языки и города уже на сайте).
**Срочность:** обычная.

**Сейчас (оркестратор, 2026-10-11):** начать с партии 1 (Los Angeles). Образец — пять статей New York (`website/content/guides/en/*-new-york.md`): тот же набор тем на каждый город. Перед работой — `docs/playbooks/quality.md`, `docs/playbooks/guides.md`, `docs/playbooks/guides-style.md`, `docs/pc-agents/lessons.md`.

Владелец (2026-10-11): «сделай инфо страницы для американских городов» — то, что есть у New York (лицензия, цены, неотложка), нужно для Los Angeles, Miami, Houston и Chicago.

## Партии

| # | Город | Статьи (файл `website/content/guides/en/<slug>.md`) |
|---|---|---|
| 1 | Los Angeles (`city: los-angeles`) | `dog-license-los-angeles`, `emergency-vet-los-angeles`, `dog-grooming-cost-los-angeles`, `dog-training-cost-los-angeles`, `dog-walker-cost-los-angeles` |
| 2 | Miami (`city: miami`) | `dog-license-miami`, `emergency-vet-miami`, `dog-grooming-cost-miami`, `dog-training-cost-miami`, `dog-walker-cost-miami` |
| 3 | Houston (`city: houston`) | `dog-license-houston`, `emergency-vet-houston`, `dog-grooming-cost-houston`, `dog-training-cost-houston`, `dog-walker-cost-houston` |
| 4 | Chicago (`city: chicago`) | `dog-license-chicago`, `emergency-vet-chicago`, `dog-grooming-cost-chicago`, `dog-training-cost-chicago`, `dog-walker-cost-chicago` |

Первая партия — пилот: открыть PR и дождаться «Пилот принят» от диспетчера; дальше партии 2–4 идут конвейером (до 3 PR на проверке).

## Что в каждой статье (по образцу New York)

- **`dog-license-<город>`** — лицензия на собаку: сколько стоит (разные тарифы: стерилизованная, нет, возраст, срок), как оформить, срок и штрафы, прививка от бешенства, поводки и места без поводка. **Какой орган выдаёт лицензию — выяснить по официальному источнику для именно этого города или округа** (Los Angeles — LA Animal Services; Miami — Miami-Dade Animal Services; Houston — BARC / Houston Health Department; Chicago — Cook County / Chicago Animal Care and Control: проверить, не выдумывать). В `sources` — только сайты города, округа, штата, ведомства. Блоки: `::places VET_CLINIC` и `::places DOG_TRAINING`. `categories: VET_CLINIC, DOG_TRAINING`.
- **`emergency-vet-<город>`** — круглосуточные ветеринары по нашим данным: `::attr VET_CLINIC nonstop`, `::price VET_CLINIC exam`, `::places VET_CLINIC`. Без медицинских советов (`guides.md`, правило 4). Если у города меньше 3 нонстоп-клиник — написать, сколько есть, не добавлять чужих.
- **`dog-grooming-cost-<город>`** — блоки `::price GROOMING full_groom`, `bath_dry`, `cat_groom`, `nail_trim`, `::places GROOMING`.
- **`dog-training-cost-<город>`** — `::price DOG_TRAINING puppy_course`, `private_lesson`, `obedience_course`, `::places DOG_TRAINING`.
- **`dog-walker-cost-<город>`** — `::price PET_SITTING walk_30`, `walk_60`, `::price PET_HOTEL daycare_day`, `dog_night`, `::places PET_SITTING`, `::places PET_HOTEL`.

**Статью о цене публикуют только если по услуге есть цены у ≥ 3 мест города** (иначе страницы цен нет: `check-guides` покажет). Услуги без цен в городе — убрать блок или не писать статью, причину записать в PR. (В США цены публикуют не все: в Houston груминг 9 мест из 40, ветеринары 17 из 98.)

## Правила

- Факты — только из официальных источников с датой проверки в `sources` (формат — `guides.md`); для цен источник — наши страницы цен (`https://pawenn.com/en/<категория>/<город>/prices/`). Не выдумывать суммы лицензий и штрафов: не нашёл — не писать.
- Файл: front matter как у New York (`country: US`, `city: <slug города>`, `categories`, `updated`, `sources`), текст на английском, ответ в первом абзаце, без шаблонных фраз (`guides-style.md`).
- Проверка перед PR: `cd website && npm run check-guides` — без ошибок. В PR — таблица «утверждение → источник».
- Чего не делать: не писать медицинские советы и дозировки; не трогать код сайта; не пушить в `main` напрямую; один PR — одна партия.
- Если инструмент не работает (сайт города не открылся) — `none (<где смотрел>)`, не гадать; если так у трети статей — остановиться и описать в `## Открытый вопрос`.

## Готово, когда

20 статей в `website/content/guides/en/` (4 города × 5), `check-guides` без ошибок, статьи видны в `/en/guides/` и в блоках «Good to know» категорий каждого города (проверяет оркестратор после выкладки).
