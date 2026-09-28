# Задача: Кошице — сводки отзывов за 12–24 месяца

**Исполнитель:** Antigravity (Desktop / Hub)
**Роль:** Content agent.
**Тип:** сводки отзывов, объём средний (39 мест).
**Ветка:** `antigravity/kosice-reviews-longer`
**Зависимости:** нет. Начать от свежего `main`. Порядок — первой, до
`antigravity-warszawa-reviews.md` (места уже знакомые, работа быстрее).

Решение владельца (2026-09-28): в маленьких городах за полгода отзывов
мало, поэтому период сводки теперь ступенями — 6, потом 12, потом 24
месяца (`docs/playbooks/review-insights.md`, «Для каких мест»). В PR
#166 и #179 эти 39 мест проверены только за 6 месяцев (у всех меньше
5 отзывов с текстом). Теперь — те же места за более длинный период.

Перед работой — `docs/playbooks/quality.md` и
`docs/playbooks/review-insights.md`.

## Что сделать

39 мест из таблицы PR #179 (Super Zoo, ABC-ZOO, Krmiva.sk, M-Vet … Samoobslužná
kúpeľňa pre psov) — все, у кого сейчас нет файла в
`data/cities/kosice/review-insights/`. Если IDE (PR #175) убрал
`veterinarna-klinika-vetanimal` как дубль Petstar — его пропустить.

Для каждого места: карточка Google Maps, сортировка «Najnovšie», отзывы
с текстом:
1. за последние **12 месяцев**; ≥ 5 — сводка за 12 месяцев;
2. нет — за последние **24 месяца**; ≥ 5 — сводка за 24 месяца;
3. нет — место в таблицу «без сводки» с числом за 24 месяца (сайт
   покажет короткий блок сам, файл не нужен).

Сводка — строго по плейбуку, `period_from` — начало взятого периода,
`reviews_in_period` — число отзывов с текстом за этот период. Файл —
`data/cities/kosice/review-insights/<slug>.json`, языки `en` и `sk`.

## Чего не делать

- Не брать отзывы старше 24 месяцев.
- Не выдумывать и не «оценивать» (quality.md, правила 1, 7): меньше 5
  отзывов — сводки нет, текст не писать.
- Не цитировать отзывы и не называть авторов; не добивать тексты
  общими фразами.
- Не трогать `businesses.csv`, цены, код сайта, другие города; 14 уже
  готовых сводок не менять.

## Готово, когда

- **PR открыт** (коммит — не сдача), заголовок `Kosice: review summaries (12-24 months)`.
- `cd website && npm run check-city -- kosice` → `READY`, вывод в PR.
- В PR — таблица по всем 39 местам: ссылка на Maps, отзывов с текстом
  за 12 и за 24 месяца, какой период взят, сводка есть / нет.
- Самопроверка `quality.md` (§2) в PR.

## Итог выполнения (2026-09-28)

Все 39 мест проверены по карточкам Google Maps с сортировкой «Najnovšie» (Newest):
- **10 мест** получили сводку за **12 месяцев** (`period_from: "2025-09-28"`, $\ge 5$ отзывов с текстом за 12м):
  `super-zoo`, `abc-zoo`, `m-vet`, `mvdr-ildiko-kinyikova-veterinarka-ambulancia-4-nohych`, `veterinarna-klinika-pro-vet-mvdr-igor-capik`, `abovzoo-chovatelske-potreby`, `salon-pre-psov-lump`, `sivet-veterinarna-ambulancia-peres`, `psie-centrum-pozitiv`, `veterina-u-lisiaka`.
- **12 мест** получили сводку за **24 месяца** (`period_from: "2024-09-28"`, $< 5$ за 12м, но $\ge 5$ за 24м):
  `krmiva-sk-chovatelske-potreby`, `veterinar-mvdr-darina-pilecka`, `mvdr-ivana-opatova-veterinarna-ambulancia`, `veterinarna-ambulancia`, `vetis`, `atos-dog`, `vet-mandelik-s-r-o-mvdr-rene-mandelik-phd`, `yanashop`, `hotel-pre-psov-terra-animal`, `maskrtnik`, `veterinarna-ambulancia-abovzoo`, `vethaus-veterinarna-ambulancia`.
- **17 мест** остались без сводки ($< 5$ отзывов с текстом за 24 месяца) и занесены в итоговую таблицу в PR с точным числом отзывов.
- Все созданные 22 файла строго соответствуют требованиям плейбука (3 карточки, 3 FAQ, 250–450 символов на EN и SK, уникальные окончания, честные факты из отзывов).
- `cd website && npm run check-city -- kosice` успешно выводит `READY`.

