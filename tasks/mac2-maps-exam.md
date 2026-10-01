# Задача: экзамен по Google Maps — 10 зоомагазинов Прешова (вслепую), Mac 2

**Исполнитель:** Antigravity (Mac 2).
**Роль:** Data agent.
**Тип:** экзамен, 10 мест, один PR (draft, не мержится).
**Ветка PR:** `main` (draft — PR не мержится, нужен только для проверки).
**Зависимости:** нет.

**Сейчас (проверяющий, 2026-10-01):** экзамен 1 (PET_SHOP) **сдан** — PR #234, 0 ошибок из 77. Сделать **экзамен 2** (раздел в конце файла) — первой, до остальных задач. Потом — свои задачи по обычному порядку.

Владелец (2026-10-01) хочет знать, может ли Antigravity собирать данные
с Google Maps. Тот же экзамен даётся Antigravity (ПК 1) — так видно,
зависит ли результат от среды (Mac с браузером или контейнер). Это исключение из правила «Maps — только CLI» ровно на этот
экзамен. Как оценивается — `docs/pc-agents/maps-exam.md`.

## Подготовка

Открывать карту обычным браузером Antigravity на Mac. Вход в Google — как
есть сейчас; вошёл или нет — написать в отчёте (без входа Maps в ЕС
показывает меньше).

## Места (только это, по названию в Google Maps, город Prešov, Словакия)

Категория PET_SHOP:

1. Super Zoo OC Prešov
2. Akvaristika, chovateľské a rybárske potreby Aqua-Služby Prešov
3. Chovateľské potreby Šťastná labka
4. Veteris s.r.o.
5. Aqua Služby Dorko
6. My Pet Shop
7. Chovateľské potreby DONA
8. www.najkrmiva.sk
9. Mojezvieratkovo
10. Super zoo

## Что сделать

1. Ветка `mac2/maps-exam-presov` от свежего `main`. **Не открывать**
   `data/cities/presov/` ни в какой ветке, не делать `git show` по
   `city/presov`: экзамен вслепую.
2. Файл `data/exams/presov-maps-mac2.csv`, одна строка на место:
   ```
   category,name,google_maps_url,google_rating,google_rating_count,address,phone,website,opening_hours,observed_at,notes
   ```
   - `name` — **ровно как в списке выше** (по нему идёт сравнение);
   - `google_maps_url` — ссылка карточки места с `!3d…!4d…` и `!19s…`;
   - `opening_hours` — формат `mo 09:00-20:00; tu …; su closed`,
     перерыв — `mo 10:00-12:00,13:00-17:30`, круглосуточно — `24h`;
   - `observed_at` — дата, когда смотрел.
3. Не нашёл значение или карточку — поле пустое, в `notes`
   `<поле>: none (<что видел>)`. Пустое — честный пробел; неверное
   значение — ошибка экзамена.

## Чего не делать

- Не брать значения с сайтов мест, из каталогов или по памяти — только
  с карточки Google Maps (экзамен про карту).
- Не заглядывать в эталон (`candidates.csv`, ветка `city/presov`).
- Не трогать другие файлы, код и скрипты.

## Готово, когда

- Draft PR в `main`, заголовок `[экзамен] Google Maps — Prešov PET_SHOP (Mac 2)`.
- В PR — `## Отчёт о возможностях`: как открывал карту (инструмент), что
  видно без входа в Google, где карточка не открылась, сколько времени.

## Результат экзамена 1 (проверяющий, 2026-10-01, PR #234)

`maps-exam.ts`: 77 значений, **0 неверных**, покрытие 100 % → **PASS**.
Собрано независимо: ссылки и формат телефонов другие, чем в эталоне, у
Šťastná labka найдены часы, которых в эталоне нет. Отчёт о возможностях
полный (Playwright + headless Chrome, без входа в Google).

## Экзамен 2 — 10 грумеров Прешова (вслепую)

То же, что экзамен 1, но категория GROOMING. Ветка
`mac2/maps-exam-presov-2` от свежего `main`, файл
`data/exams/presov-maps-mac2-grooming.csv`, draft PR
`[экзамен 2] Google Maps — Prešov GROOMING (Mac 2)`.

1. Sheppy-psí salón a SPA
2. Salón pre psov LEO
3. MP-salón pre psov s.r.o
4. Zoya - psí wellness salón
5. Inspirium salón pre psy
6. Salón pre psov Hauki
7. Čistá labka - psí salón a wellness
8. Šumný pšik - salón pre psov, Prešov
9. BELLA psí wellness salón, Prešov
10. Salón pre psov

Если по названию находится несколько карточек в Прешове (так может быть
с «Salón pre psov») — не выбирать наугад: строка с пустыми полями и в
`notes` `card: ambiguous (<сколько карточек, какие адреса>)`.
Телефон — в формате `+421 …`, как в остальных данных проекта.
