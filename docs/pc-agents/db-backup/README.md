# Копия боевой базы на ПК

Задача: `tasks/pcd-db-backup.md`. Делает диспетчер на ПК; агентам `agyN` не раздаётся.

## Что и где

| Что | Где |
|---|---|
| Строки подключения (`NEON_URL`, `LOCAL_URL`, `LOCAL_PASSWORD`) | `D:\backup\pawenn\neon.env` — только на ПК, права только у владельца; в git, логи и поручения не попадает |
| Скрипт | `D:\backup\pawenn\backup-db.ps1` + `D:\backup\pawenn\bin\*.sh` (копия в репозитории — эта папка) |
| Дампы | `D:\backup\pawenn\daily\pawenn-ГГГГ-ММ-ДД.dump` — 14 последних дней + 1-е число каждого месяца за год |
| Лог | `D:\backup\pawenn\backup.log` — одна строка на запуск |
| Локальная копия базы | контейнер `pawenn-db-backup` (`postgres:18`, том `pawenn-db-backup`), `127.0.0.1:5433`, база `pawenn` |
| Расписание | Планировщик Windows, задача `Pawenn DB backup`, каждый день в 04:17 (пропущенный запуск — при включении ПК) |

Neon работает на Postgres 18 (`show server_version`), поэтому образ `postgres:18`: `pg_dump` не должен быть старше сервера.

## Работает ли

Последняя строка `D:\backup\pawenn\backup.log`:

```
2026-10-09 09:28:31 OK pawenn-2026-10-09.dump size=2,4MB restore=ok neon=[12 1457 1169 0 36] local=[12 1457 1169 0 36] (City Business PriceItem Review ClickEvent)
```

`OK` — дамп снят, читается, залит в локальную копию, числа строк совпали (клики в копии могут быть меньше, если пришли во время дампа). `FAIL` — причина в той же строке; локальная копия в этом случае не трогается.

Запустить вручную: `powershell -NoProfile -ExecutionPolicy Bypass -File D:\backup\pawenn\backup-db.ps1`.

## Что в копии, чего нет в git

Каталог (места, цены, сводки) собирается из `data/cities/` и так. Только в базе живут `Review` (отзывы посетителей) и `ClickEvent` (клики «позвонить / сайт / маршрут»). В копии есть имена авторов отзывов — адрес копии агентам не давать.

## Восстановить боевую базу из дампа

Только с прямого «да» владельца. Строку новой (или той же) базы — во временный env-файл, затем:

```
docker run --rm --env-file <файл со строкой TARGET_URL> -v D:\backup\pawenn\daily:/dump postgres:18 sh -c 'pg_restore --clean --if-exists --no-owner --no-acl -d "$TARGET_URL" /dump/pawenn-ГГГГ-ММ-ДД.dump'
```

Посмотреть копию локально: любой клиент Postgres на `127.0.0.1:5433`, пользователь `postgres`, пароль — `LOCAL_PASSWORD` из `neon.env`.

## Сменить строку подключения Neon

Vercel → проект → Storage → база Neon → вкладка `.env.local` → Show secret → `DATABASE_URL_UNPOOLED` (адрес **без** `-pooler`). Заменить значение `NEON_URL=` в `D:\backup\pawenn\neon.env` (одна строка, без кавычек), запустить скрипт вручную и проверить строку лога.

## Копия вне ПК

Раз в неделю (воскресенье) скрипт копирует последний дамп в Google Drive для компьютера (`G:\My Drive\Pawenn backup` и т. п.), если он установлен; иначе пишет в лог `offsite: no Google Drive…` — куда класть недельную копию, решает владелец.
