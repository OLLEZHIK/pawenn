# Браузер и вход в Google в контейнере `agyN`

Нужно для карты и отзывов Google (`maps-exam.md`, `reviews-exam.md`).
Экрана в контейнере нет, поэтому вход в Google делается через окно
noVNC в браузере владельца на Windows. Изменение образа и создание или
пересоздание контейнера — критическая инфраструктура: делает диспетчер
**только по прямому поручению владельца**.

Здесь записано, как это настроено на деле (диспетчер, 2026-10-02).

## 1. Что стоит и где

| Что | Где |
|---|---|
| Образ с браузером | `agy:browser`, собран из `D:\docker\Dockerfile` (`docker build -t agy:browser D:\docker`); вспомогательные файлы — `D:\docker\agy-files\` |
| В образе | Node 20, Google Chrome (stable), Xvfb, x11vnc, noVNC, `playwright-core` и `@playwright/mcp` в `~/pw` |
| Клон репозитория | `~/shop` (remote — `OLLEZHIK/pawenn`) |
| Профиль Chrome с входом в Google | `~/.config/chrome-google` (в томе, переживает перезапуск) |
| Playwright для `agy` | MCP-сервер `playwright` → `~/.local/bin/playwright-mcp-headed` (Chrome в окне на виртуальном экране) |
| Окно входа | `~/.local/bin/google-login.sh start \| stop \| status` — Chrome без флагов автоматизации + noVNC на порту 6080 контейнера |
| Проверка входа | `~/pw/maps-check.mjs` |
| Логи запусков `agy` | `~/agy-logs/<дата>-<задача>.log`, рядом `.task.md` — что было поручено |
| Данные Docker | диск D: — `D:\docker-data` (перенесены с C: 2026-10-01) |

Контейнеры:

| Контейнер | Образ | Том | Окно входа с Windows |
|---|---|---|---|
| `agy1` | `agy` (старый; браузер и Node доставлены руками в слой контейнера — при пересоздании пропадут, тогда пересоздать из `agy:browser` с тем же томом) | `agy1-home` | порт не выведен — на время входа нужен переходник, п. 3 |
| `agy2` | `agy:browser` | `agy2-home` | `http://localhost:6082` |

## 2. Новый контейнер (только по поручению владельца)

```powershell
docker run -d --name agyN --restart unless-stopped -it -v agyN-home:/home/ubuntu -p 127.0.0.1:608N:6080 agy:browser
```

Порт открыт только на этом компьютере (`127.0.0.1`). Дальше в контейнере:
клон `~/shop`, `.git/agent` — `Antigravity (ПК N)`, `cd website && npm install`.
Три входа делает **владелец сам**:

1. Antigravity: `docker exec -it agyN agy` — ссылку открыть в браузере на
   Windows, код вставить в терминал (на вход 60 секунд). Аккаунт — с
   подтверждённым возрастом, иначе `agy` отвечает «not eligible».
2. GitHub: `docker exec -it agyN gh auth login`, потом
   `docker exec agyN gh auth setup-git` (бот `wernir`).
3. Google в браузере — п. 3.

## 3. Вход в Google (один раз на контейнер, делает владелец)

```powershell
docker exec -d -u ubuntu agyN bash -lc 'google-login.sh start'
```

Владелец открывает `http://localhost:608N` и входит **отдельным аккаунтом
для агентов** (не основным). Пароль вводит только владелец; агентам и
диспетчеру его не давать. После входа диспетчер закрывает окно:
`docker exec -u ubuntu agyN bash -lc 'google-login.sh stop'`.

У `agy1` порт не выведен — на время входа диспетчер поднимает переходник
и убирает его после:

```powershell
docker run -d --name agy1-vnc -p 127.0.0.1:6080:6080 alpine/socat TCP-LISTEN:6080,fork,reuseaddr TCP:<ip agy1>:6080
docker rm -f agy1-vnc
```

- Аккаунт Google может быть один на все контейнеры, но **входить в каждом
  отдельно**. Профиль между контейнерами не копировать: с одной сессией в
  двух контейнерах Google по очереди выбрасывает то один, то другой
  (проверено 2026-10-01).
- Один профиль — один Chrome одновременно.

Проверка входа (диспетчер):

```powershell
docker exec -u ubuntu agyN bash -lc 'cd ~/pw && HEADED=1 xvfb-run -a node maps-check.mjs "Salón pre psov LEO Prešov"'
```

Должно быть `signedIn: true`, вкладка `Recenzie`, `limitedViewNotice: false`.

## 4. Как агент пользуется входом

- Через инструменты MCP `playwright` (подключены в `agy`): `browser_navigate`,
  `browser_evaluate`, в конце `browser_close`.
- Свой скрипт — только с окном на виртуальном экране:

```js
// cd ~/pw && HEADED=1 xvfb-run -a node script.mjs
import { chromium } from 'playwright-core';
const ctx = await chromium.launchPersistentContext(process.env.HOME + '/.config/chrome-google', {
  channel: 'chrome', headless: false,
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--password-store=basic'] });
```

- **Без окна (headless) не запускать:** Google тогда показывает «obmedzené
  zobrazenie» без вкладки отзывов даже с выполненным входом (проверено
  2026-10-01).
- Меню сортировки отзывов не видно в accessibility tree — пункт
  «Najnovšie» выбирается через `browser_evaluate`. Блоки отзывов в
  разметке дублируются (`data-review-id`) — каждый отзыв считать один раз.
