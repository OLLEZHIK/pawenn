# Задача: город Košice — все места по шаблону

**Исполнитель:** Antigravity IDE (передано от Antigravity владельцем 2026-09-27)
**Роль:** Data agent.
**Тип:** новый город, объём большой (до 100 мест).
**Ветка:** `antigravity/city-kosice` — **та же ветка и тот же PR #144**, новую не создавать
**Зависимости:** нет. Язык (словацкий) уже есть на сайте.

Решение владельца (2026-09-27): второй город после Братиславы — Košice.
Братислава — образец (`docs/growth-strategy.md` §0): делать ровно по
шаблону, не больше и не меньше.

## Сейчас: доработка PR #144 (первым делом)

Первая версия (Antigravity, PR #144) возвращена: в ней выдуманные
значения. Полный разбор — комментарий «левой руки» в PR #144. Коротко:

1. Ссылку Google Maps, `google_place_id`, координаты, оценку и число
   оценок **скопировать** из карточки места в Google Maps — около 40
   мест сейчас с придуманными номерами и ID, 8 — с округлёнными
   координатами. Не открылось — поле пустое и причина в `notes`.
2. Дубль `vetanimal-veterinarna-ambulancia` / `veterinarna-klinika-petstar`
   / `mvdr-jozef-berescak` — одна клиника: оставить одну запись.
3. `animals` — очистить у всех.
4. `prices.csv` — все колонки стандарта (`card-spec.md`, «Цены»); каждую
   сумму сверить с прайсом по «Что считать»; ссылки-источники — рабочие
   (сейчас 404 у Super Zoo, uvlf, vethaus).
5. Факты (`facts`) и языки — только то, что написано на сайте места;
   где сказано — ссылка в `notes`.
6. Подтянуть `main` в ветку (там новый `check-city`) и добиться `READY`.

Порядок у IDE: сначала эта задача, потом `tasks/ide-city-warszawa.md`.

## Что сделать

Всё — по инструкции **`docs/playbooks/add-city.md`** (город
`Košice`, slug `kosice`, страна `SK`, язык `sk`), поля — по
**`docs/card-spec.md`**, качество — по **`docs/playbooks/quality.md`**.
Коротко, что входит:

1. `data/cities/kosice/city.json` — `in_city`: `{"en": "in Košice",
   "sk": "v Košiciach"}`, `timezone` `Europe/Bratislava`, `currency` `EUR`.
2. `data/cities/kosice/districts.geojson` — границы районов из
   OpenStreetMap скриптом (на твоём компьютере, у облачных агентов OSM
   закрыт):
   ```
   cd website && NODE_USE_ENV_PROXY=1 npx tsx scripts/fetch-districts.ts kosice <OSM relation id Košice> 10
   ```
   Уровень районов (`admin_level`) для Košice проверить в OSM (mestské
   časti — обычно 10); у каждого района в `properties` дописать `in` —
   «v <районе>» с правильным падежом, как у Братиславы; не уверен в
   форме — только `en`.
3. `data/cities/kosice/businesses.csv` — все 6 категорий, **все поля
   карточки**, включая `facts` (§9), языки у ветклиник, `closed`
   пустой (закрытые места не добавлять вовсе).
4. `data/cities/kosice/prices.csv` — 6 услуг категории, только
   опубликованные прайсы.
5. Логотипы — `website/public/logos/kosice/`.
6. Сводки отзывов — **вторым PR** по `docs/playbooks/review-insights.md`
   (нужен вход в Google).

Запросы для поиска — из `docs/seo/keywords/sk.md` («veterinár Košice»,
«strihanie psov Košice», «zverimex Košice»…); сверка полноты — 1–2
каталога на категорию.

## Готово, когда

- **PR открыт** (коммит — не сдача).
- `cd website && npm run check-city -- kosice` → `READY`, вывод целиком в PR.
- В PR — самопроверка `quality.md` (§2), таблица заполненности по
  полям, сколько мест по категориям, какие каталоги сверяли, что не
  нашлось и почему.
- Не тронуты файлы Братиславы и код сайта.
