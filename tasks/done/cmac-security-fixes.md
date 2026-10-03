# Задача: безопасность сайта — исправления после проверки 2026-10-01

**Исполнитель:** Claude Code CLI (Mac)
**Роль:** код сайта (`website/`), не данные.
**Тип:** исправления безопасности, 2 PR.
**Ветка PR:** `main`.
**Зависимости:** нет.

**Сейчас (проверяющий, 2026-10-02, решение владельца):** **закрыта.** Все PR смержены в `main`, работы по задаче больше нет. Файл перенесён в `tasks/done/`.

Проверку безопасности сайта по просьбе владельца сделал оркестратор
(2026-10-01). Он не пишет код сайта, поэтому исправления — здесь. Что
уже хорошо: секретов в репозитории и в истории git нет; превью закрыты
Vercel Authentication; `.env` и `.git` снаружи не открываются; HSTS
есть; отзывы публикуются только после ручной смены статуса; внешние
ссылки с `noopener`; 39 SVG-логотипов без скриптов (`check-city` теперь
это проверяет).

## PR 1 — Next.js 16.3.5 → 16.3.8 (критично, сразу)

`npm audit`: **critical — Remote Code Execution in next/og ImageResponse**
(GHSA-vcvr-r3jv-pc5j), уязвимы версии 16.2.0–16.3.5. У нас 16.3.5, и
`ImageResponse` стоит на открытом адресе: `app/api/og/route.tsx`
рисует картинку из параметров `title` и `sub`, которые может прислать
кто угодно (`https://pawenn.com/api/og/?title=…` отвечает 200).
Ещё один — `app/brand/logo.png/route.tsx`.

1. `cd website && npm install next@16.3.8 eslint-config-next@16.3.8`
   (точные версии, как сейчас в `package.json`).
2. `npm run lint`, `npx tsc --noEmit`, `npm run build` (локально без
   `VERCEL` база не трогается). Открыть локально `/api/og/?title=Test` и
   страницу места — картинка и страница те же.
3. `npm audit --omit=dev` — строки `next` больше нет (`mysql2` и
   `deepmerge-ts` идут от инструмента `prisma` и сайтом во время работы
   не используются; их не трогать, это мажорное обновление Prisma).
4. PR `Security: Next.js 16.3.8 (next/og RCE)`, вывод `npm audit` до и
   после. Только `package.json` и `package-lock.json`. Проверяющий
   смёржит сразу.

## PR 2 — заголовки, формы, JSON-LD

Ветка от свежего `main` после PR 1.

1. **Заголовки безопасности** (`next.config.ts`, `headers()`, на все
   пути). Сейчас на живом сайте нет ни одного, кроме HSTS:
   - `X-Content-Type-Options: nosniff`;
   - `Referrer-Policy: strict-origin-when-cross-origin`;
   - `Permissions-Policy: camera=(), microphone=(), geolocation=()`;
   - `Content-Security-Policy: frame-ancestors 'none'; base-uri 'self'; object-src 'none'`
     — без `script-src`, чтобы не сломать встроенные скрипты Next и
     Vercel Analytics (полный CSP — отдельной задачей, если владелец
     захочет);
   - `poweredByHeader: false` — убрать `X-Powered-By: Next.js`.
   Для `/logos/*.svg` дополнительно
   `Content-Security-Policy: default-src 'none'; style-src 'unsafe-inline'; sandbox`:
   SVG, открытый по прямой ссылке, тогда не выполнит скрипт.
2. **`/api/click`** (`app/api/click/route.ts`): `page` до 300 символов,
   `referrerHost` до 255 (длиннее — 400), несуществующий `businessId` —
   404, а не ошибка внешнего ключа (500).
3. **`/api/reviews`**: поле-ловушка для ботов (скрытое поле в
   `ReviewForm`; заполнено — ответить 201 и ничего не записывать) и
   отказ, если форма отправлена быстрее чем через 3 секунды после
   открытия. Отзывы остаются `PENDING` до ручной публикации.
4. **JSON-LD** — восемь мест с
   `dangerouslySetInnerHTML={{ __html: JSON.stringify(...) }}`
   (`app/[lang]/page.tsx`, `PlaceFacts`, `CategoryListing` ×2,
   `PricePages`, `Guides`, `BusinessDetail`, `Breadcrumbs`,
   `ReviewInsightsSection`). В текстах мест — данные с чужих сайтов;
   строка `</script>` в названии или описании закроет тег. Одна функция
   в `lib/` — `JSON.stringify(obj).replace(/</g, "\\u003c")` — и она во
   всех местах.

Проверка: `npm run lint`, `npx tsc --noEmit`, `npm run build`; локально
`curl -sI http://localhost:3000/en/` показывает новые заголовки; страница
места, форма отзыва и клик по телефону работают (Playwright). PR
`Security: headers, form limits, JSON-LD escaping` — вывод проверок и
заголовков в PR.

## Чего не делать

- Не обновлять Prisma и другие зависимости в этих PR.
- Не трогать данные (`data/`), тексты, дизайн.
- Не включать строгий `script-src` — сломает сайт без отдельной проверки.

## Готово, когда

- PR 1 смёржен: `npm audit --omit=dev` без `next`.
- PR 2 открыт: заголовки на месте, лимиты и ловушка работают, JSON-LD
  через одну функцию; выводы проверок в PR.
- Самопроверка `quality.md` (§2) в PR.
