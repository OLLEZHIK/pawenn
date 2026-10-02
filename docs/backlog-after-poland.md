# Бэклог: берём, когда завершим Польшу

Решение владельца (2026-10-02): пока идут польские города (Warszawa,
Wrocław и остальные из `docs/growth-strategy.md`), эти работы не делаем.
Источник — черновик PR #223 (ветка `claude/improvements`, «левая рука»,
2026-09-30): ветку и PR не удалять, пока пункты не перенесены.

Перед началом каждого пункта — свежая ветка от `main`, не от
`claude/improvements`: ветка отстала от `main` и конфликтует.

| # | Что | Что уже есть в `claude/improvements` | Что нужно перед стартом |
|---|---|---|---|
| 1 | **Форма «Nahlásiť chybu»** на странице места вместо `mailto:{EMAIL}`: выбор причины + текст, без имени, e-mail и IP, скрытое поле от ботов | `app/api/report/route.ts`, `components/ReportIssue.tsx`, `lib/reports.ts`, словари en/sk/pl | **Подтверждение владельца на миграцию базы**: `prisma/migrations/20260930141547_issue_report` (только добавляет таблицу `IssueReport`, см. `docs/database.md`) |
| 2 | **Страница владельца** `/en/admin/?key=ADMIN_KEY`: клики «Zavolať / Web / Trasa» за 7 и 30 дней, топ мест, открытые сообщения об ошибках; без ключа — 404, закрыта от поисковиков | `app/[lang]/admin/page.tsx`, `docs/analytics/clicks.md` | Пункт 1 (таблица); переменная `ADMIN_KEY` в Vercel (Production) — владелец |
| 3 | **Карта в списке мест** (бета, только `?beta=1`): переключатель «Zoznam \| Mapa», Leaflet по нажатию, OpenStreetMap, булавки цвета категории, места без координат не ставятся | `components/ListingMap.tsx`, `ListingMapInner.tsx`, `docs/architecture/map.md` | Проверка в браузере (Playwright), только Claude Code CLI / «правая рука» |
| 4 | **Инициалы вместо битого логотипа**, если картинка не загрузилась | `components/BusinessAvatar.tsx` (в `main` инициалы уже есть, нужен только запасной вариант при ошибке загрузки) | Проверка в браузере |
| 5 | **4 статьи на польском** `/pl/poradnik/`: czipowanie psa (KROPiK), szczepienie na wściekliznę, podróż z psem po UE, strzyżenie psa — cena | `content/guides/pl/*.md`, таблица «утверждение → цитата → источник» в описании PR #223 | **Перед публикацией перепроверить факты по источникам** (KROPiK, программа Варшавы до 31.12.2026); `npm run check-guides`; нужны Варшава и Wrocław на сайте |
| 6 | **Контактный e-mail сайта**: заглушка `{EMAIL}` в `/add-or-fix-listing/` и в черновиках политик (`docs/legal/`) | — | Адрес даёт владелец |

## Не берём

- **Футер по стране страницы** из #223 — в `main` уже сделано иначе
  (PR #261, `FooterCityColumns`); версия из #223 конфликтует и устарела.

## Уже перенесено в `main`

- `docs/seo/speed.md` — замер скорости на телефоне (2026-09-30).
