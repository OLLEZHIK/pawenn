# Задача: город Warszawa — первый польский город по шаблону

**Исполнитель:** Antigravity IDE
**Роль:** Data agent.
**Тип:** новый город, объём большой (до 100 мест).
**Ветка:** `antigravity/city-warszawa` (при делении по категориям — `antigravity/city-warszawa-<категория>`)
**Зависимости:** нет для сбора. Польский язык подключён в черновике #140
(ключевые слова #136, словарь #139): PR города мёржится **вместе** с #140,
не раньше — язык без города и город без языка не выкатываем
(`docs/playbooks/add-language.md`).

Решение владельца (2026-09-27): вторая страна — Польша, первый город —
Warszawa. Братислава — образец (`docs/growth-strategy.md` §0): делать
ровно по шаблону, не больше и не меньше.

## Что сделать

Всё — по инструкции **`docs/playbooks/add-city.md`** (город
`Warszawa`, slug `warszawa`, страна `PL`, язык `pl`), поля — по
**`docs/card-spec.md`**, качество — по **`docs/playbooks/quality.md`**.

1. `data/cities/warszawa/city.json` — `locale` `pl`, `locales` `["pl"]`,
   `in_city`: `{"en": "in Warsaw", "pl": "w Warszawie"}`, `timezone`
   `Europe/Warsaw`, `currency` **`PLN`**.
2. `data/cities/warszawa/districts.geojson` — 18 dzielnic из
   OpenStreetMap скриптом (на твоём компьютере):
   ```
   cd website && NODE_USE_ENV_PROXY=1 npx tsx scripts/fetch-districts.ts warszawa <OSM relation id Warszawa> <admin_level>
   ```
   Уровень dzielnic (`admin_level`) проверить в OSM и написать в PR,
   какой взял. У каждого района в `properties` — `in` с польским
   падежом («na Mokotowie», «w Śródmieściu», «na Pradze-Południe»); не
   уверен в форме — только `en`.
3. `data/cities/warszawa/businesses.csv` — все 6 категорий, **все поля
   карточки**, включая `facts` (§9). Поля `*_local` — **по-польски**.
   У ветклиник — языки обслуживания (иностранные, **не** `pl`).
   Закрытые места не добавлять.
4. **Какие места брать (город большой, мест больше лимита):** по
   каждой категории — с наибольшим числом оценок в Google, пропорционально
   Братиславе (ветклиники ≈ половина). Правило отбора и сколько
   кандидатов было — в PR.
5. `data/cities/warszawa/prices.csv` — 6 услуг категории, только
   опубликованные прайсы, суммы в **злотых**; колонку `currency` можно
   оставить пустой (= валюта города) или `PLN`.
6. Логотипы — `website/public/logos/warszawa/`, до 200 КБ.
7. Сводки отзывов — **вторым PR** по `docs/playbooks/review-insights.md`
   (языки сводки — `en` и `pl`).

Запросы для поиска — главные варианты из `docs/seo/keywords/pl.md`
(«weterynarz warszawa», «groomer warszawa», «hotel dla psów warszawa»,
«szkolenie psów warszawa», «sklep zoologiczny warszawa», «petsitter
warszawa»); сверка полноты — 1–2 каталога на категорию.

## Чего не делать

- Не выдумывать и не «оценивать» (quality.md, правила 1, 7): нет факта
  на сайте места — поле пустое, причина в `notes`.
- Не переводить цены в евро и не пересчитывать.
- Не копировать словацкие тексты: `*_local` — живой польский.
- Не трогать код сайта, файлы Братиславы и Кошице.

## Готово, когда

- **PR открыт** (коммит — не сдача).
- `cd website && npm run check-city -- warszawa` → `READY`, вывод целиком в PR.
- В PR — самопроверка `quality.md` (§2), таблица заполненности по
  полям, сколько мест по категориям, правило отбора, какие каталоги
  сверяли, что не нашлось и почему.
