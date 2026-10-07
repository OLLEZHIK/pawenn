# Задача: убрать дубль «Dog's Academy Hundeschule» — München

**Исполнитель:** Antigravity (ПК) — контейнер выбирает диспетчер
**Роль:** Data agent
**Тип:** исправление данных, один кусок.
**Ветка PR:** `main`
**Ветка:** `pcN/muenchen-duplicate`
**Зависимости:** нет
**Срочность:** обычная

**Сейчас (левая рука, 2026-10-07):** начать — партия 1 (одна строка).

Проверка новых городов (левая рука, 2026-10-07) нашла в Мюнхене одно
место дважды. `dogs-academy-hundeschule` (`businesses-09-training.csv`,
Birkenleiten 15) и `sirius-hundeschule` (`businesses-08-training.csv`,
Schönstraße 87) — один телефон `+49 89 68050868`, один e-mail
`hallo@hundeschule-muenchen.info`, один сайт `hundeschule-muenchen.info`
и один логотип `sirius-hundeschule.png`. На сайте школы названия
«Dog's Academy» нет, только SIRIUS. На сайте это две карточки одной
школы (`quality.md`: «одно и то же место дважды — нет»).

Левая рука не смогла пройти ворота из облака: `verify-city` получает
503/403 от сайтов куска 09, хотя данные верны. Поэтому — агенту, у
которого эти сайты открываются.

Перед работой — `docs/playbooks/quality.md`.

## Партии

| # | Что | Ветка |
|---|---|---|
| 1 | `dogs-academy-hundeschule` — скрыть как дубль | `pcN/muenchen-duplicate` |

## Что сделать

1. Открыть `https://www.hundeschule-muenchen.info/` и убедиться, что
   это сайт SIRIUS и «Dog's Academy» там нет. Если на сайте есть
   «Dog's Academy» как отдельная школа или отдельный адрес — ничего не
   менять, написать это в PR под `## Открытый вопрос`.
2. В строке `dogs-academy-hundeschule` файла
   `data/cities/muenchen/businesses-09-training.csv`: `closed` = `yes`,
   в начало `notes` — `closed: (duplicate of sirius-hundeschule - same
   website hundeschule-muenchen.info, phone and email; the site names
   only SIRIUS, <дата>); `. Строку не удалять: старый адрес страницы
   уведёт на список категории (`card-spec.md`, поле `closed`).
   Сохранить переводы строк файла как есть (CRLF).
3. `cd website && npm run gate -- muenchen` → `GATE PASS`, закоммитить
   строку вместе со штампом `checks/09-training.json`.
4. `sirius-hundeschule` не трогать.

Кёльн (`kleintierinternisten-und-vetneuro-koeln` и
`tierarztpraxis-dr-bathen-noethen`, один адрес и телефон) — **не
дубль**: у них разные карточки Google и разные сайты, агент проверил это
при сборе (`notes`). Не трогать.

## Если инструмент не работает

Не открылся сайт или Google Maps, нет данных — поле пустое, в `notes`
`<поле>: none (<где смотрел, что не открылось>)`. Это засчитывается,
`check-city` пропускает. Если так у трети мест партии и больше — не
собирать дальше: открыть PR с тем, что есть, и описать проблему в
разделе `## Открытый вопрос`. Сдать меньше мест с объяснением —
нормально; возврат PR бывает за выдумку, не за честный пробел.

## Чего не делать

- Не выдумывать и не «оценивать» (quality.md, правила 1, 7).
- Не удалять строку и не менять другие места куска 09.
- Не трогать файлы вне задачи.

## Готово, когда

- **PR открыт** в `main`, заголовок `München: дубль Dog's Academy — партия 1`.
- Кусок 09 — `GATE PASS` (штамп в `checks/`).
- `cd website && npm run check-city -- muenchen` → `READY`
  (`muenchen: 99 places (+ 1 closed, hidden)`) и
  `npm run verify-city -- muenchen` → `VERIFIED`, вывод обоих целиком в PR.
- Самопроверка `quality.md` (§2) в PR.
