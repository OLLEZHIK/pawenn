# Задача: город Košice — все места по шаблону

**Исполнитель:** Antigravity IDE (передано от Antigravity владельцем 2026-09-27)
**Роль:** Data agent.
**Тип:** новый город, объём большой (до 100 мест).
**Ветка:** `antigravity/city-kosice` — **та же ветка и тот же PR #144**, новую не создавать
**Зависимости:** нет. Язык (словацкий) уже есть на сайте.

Решение владельца (2026-09-27): второй город после Братиславы — Košice.
Братислава — образец (`docs/growth-strategy.md` §0): делать ровно по
шаблону, не больше и не меньше.

## Сейчас: доработка PR #144, раунд 2 (первым делом)

Раунд 1 сделан (ревью 27.09, коммит проверяющего `131ab93` уже в ветке).
Осталось ровно три пункта. Работать в ветке `antigravity/city-kosice`:
сначала `git pull`, потом **только новые коммиты поверх, без force-push**.

**1. Дубли — оставить одну запись из пары.** Один сайт и одна точка на
карте, разные карточки Google (клиника и врач). Оставить запись с
большим числом оценок, вторую строку удалить (и её логотип, если он
только у неё). Если это правда разные места — не удалять, а в `notes`
обеих записей: `duplicate-check: different place (<чем отличаются, ссылка>)`.

| Пара | Общий сайт |
|---|---|
| `veterinarna-klinika-slon` / `mvdr-martin-mihaly` | klinikaslon.sk |
| `veterinarna-ambulancia-mvdr-tomas-mihok-phd` / `veterinarna-ambulancia-a-psi-salon` | veterinarkosice.sk |
| `veterinarna-ambulancia-mvdr-skalicky` / `zverolekar-kosice` | zverolekarkosice.sk |

**2. `appointment_only` — у 17 мест нет доказательства.** Факт ставится
только по прямым словам «len / iba / výhradne na objednávku» (или «na
objednávku» при часах работы). «Можно записаться», «записанные идут
первыми» — **не** `appointment_only` (`quality.md`, правило 7). Для
каждого места ниже: нашёл прямые слова — в `notes` добавить
`appointment_only: <URL страницы>`; не нашёл — убрать код из `facts`.
Если у места после этого не осталось фактов — в `notes`
`facts: none (<где смотрел>)`.

`veterinar-mvdr-darina-pilecka`, `veterina-u-lisiaka`,
`mvdr-zuzana-strazanova-veterinarna-ambulancia`,
`veterinarna-ambulancia-a-psi-salon` (если не удалён в п. 1),
`psi-salon-d-d`, `salon-pre-psov-lump`, `psi-salon-afrodita`,
`psi-salon-alex`, `petra-dugas-strapacik`, `psi-salon-denny`,
`salon-pre-psov-a-macky-verterra`, `bendziho-psi-salon`,
`psi-wellness-salon-willow`, `studio-lia`, `salon-pre-psov-darwin-kosice`,
`psi-salon-hafi-haf`, `samoobsluzna-kupelna-pre-psov`.

Уже подтверждены (не трогать): `lu-ma-kupelna-pre-psy`,
`salon-strapacik`, `paw-spa-u-algora`.

**3. Ещё четыре факта без доказательства.** Так же: ссылка в `notes`
(`parking: <URL>` и т.п.) или убрать код.
- `veterinarna-klinika-pro-vet-mvdr-igor-capik` — `parking`;
- `veterinarna-klinika-slon` — `pet_passport`, `parking`, `pharmacy_on_site`.

**Не делать:** не трогать остальные места и поля (ссылки Maps,
координаты, цены уже проверены); не добавлять новые факты без ссылки;
не переписывать историю ветки.

**Готово, когда:**
- в PR #144 новый комментарий: по каждой паре из п. 1 — что сделано;
  по каждому месту из п. 2 и 3 — «ссылка: …» или «убрано»;
- `cd website && npm run check-city -- kosice` → `READY`, вывод в
  комментарии;
- в ветке только новые коммиты (без force-push).

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
