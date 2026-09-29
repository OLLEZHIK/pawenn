# Задача: Братислава — тексты 27 мест только по источникам

**Исполнитель:** Antigravity (Mac 2)
**Роль:** Content agent.
**Тип:** исправление данных, 27 мест, куски по 10, конвейер.
**Ветка PR:** `main`.
**Зависимости:** нет. Брать после PR `mac2-kosice-texts-sources.md`
(#199) — пока он на проверке, это твоя следующая работа.

**Сейчас (проверяющий, 2026-09-29):** после правок PR #199 — пилот (первые 10 мест), PR и ждать ревью пилота.

Поставлено оркестратором 2026-09-29, чтобы у Mac 2 была очередь. С
2026-09-29 `check-city` показывает у Братиславы раздел «Texts that say
more than the place and its data» — 28 строк по 27 местам: рекламные
слова от себя («modern», «professional», «skúsený») и тексты, где улица
или район не совпадают с адресом и координатами места (адрес менялся, а
текст нет).

Перед работой — `docs/playbooks/quality.md` (правила 1, 7, 8, 9) и
`docs/playbooks/add-city.md`, раздел 3 «Тексты: правила».

## Места

`cd website && npm run check-city -- bratislava` → раздел «Texts that say
more…» (27 мест):
`animavet-veterinarna-ambulancia`, `cezivet-hotel-pre-macky`,
`dogtrainer-peter-peller`, `easyvet-veterinarna-klinika`,
`klub-sportovej-kynologie-1-ksk-1`, `kynologicky-klub-stare-ihrisko-kksi`,
`laura-salon-pre-psov`, `marfilvet-veterinarna-nemocnica`, `mypet-clinic`,
`opatrovanie-maciek-bratislava-adriana-tankova`, `petcenter-stanica-nivy`,
`pohodog-team-vencenie-a-opatrovanie-na-doma`, `psi-salon-zuzana`,
`salon-pre-psov-terra`, `sibra-centrum-veterinarnej-mediciny`,
`super-zoo-veterina`, `tlapky-zvieracia-druzina`, `vet-and-dent`,
`veterinarna-ambulancia-labka`, `veterinarna-ambulancia-mvdr-alexander-baxa`,
`veterinarna-ambulancia-vetfriends`, `veterinarna-klinika-primavet`,
`veterinarna-klinika-slnecnice`, `veterinarna-klinika-x-vet`,
`vetklinika-ruzinov`, `vetline-veterinarna-nemocnica`,
`vetpetrzalka-veterinarna-ambulancia`.

## Что сделать

Для каждого места — открыть его сайт или соцсеть и переписать четыре
текста (`short_description`, `short_description_local`, `description`,
`description_local`):
- только то, что место само пишет; рекламные слова от себя — убрать;
- улицу и район — только как в `address` и по координатам, или не
  называть вовсе (адрес и так на карточке);
- к каждому месту с сайтом — хотя бы одна цитата с сайта, на которой
  построен текст: строка `description` в
  `data/cities/bratislava/evidence-texts.csv` (формат — `add-city.md`,
  раздел 1.4).

Менять **только** эти четыре столбца (и `notes`, если нужно записать,
откуда текст). CRLF в файле — как сейчас.

**Кусками по 10 с проверкой:** 10 мест → `npm run check-city --
bratislava --only=<10 slug>` (в разделе «Texts…» нет этих мест) и
`npm run verify-city -- bratislava --only=<10 slug>` (цитаты найдены) →
коммит → следующие 10.

**Конвейер** (`AGENTS.md`, шаг 3): первые 10 мест — пилот, PR и ждать
ревью; дальше — 10–17 места одним PR и 18–27 следующим, не дожидаясь
проверки (ветка от ветки предыдущего PR, пока тот не смёржен).

## Если инструмент не работает

Сайт не открылся, соцсети нет — текст только из того, что уже есть в
строке (категория, название, адрес), без деталей; в `notes` —
`text: no site (<что не открылось>, <дата>)`. Google Maps не открывать
(`AGENTS.md`, «Специализация», 2026-09-29). Это засчитывается. Если так у трети
мест куска и больше — остановиться и спросить в PR (`## Открытый
вопрос`).

## Чего не делать

- Не выдумывать улицы, районы, услуги, «цитаты с карточки» (урок PR #199:
  у 9 из 11 мест без сайта тексты переехали на другие улицы).
- Не отмечать в самопроверке то, чего не делал.
- Не трогать другие столбцы и другие места.

## Готово, когда (для каждого PR)

- PR открыт в `main`, заголовок `Bratislava: texts from sources — <места>`.
- `check-city -- bratislava --only=<места PR>`: в «Texts…» ни одной
  строки; `verify-city -- bratislava --only=<места PR>` → `VERIFIED`.
  Выводы целиком в PR.
- В PR — таблица: место → что убрано → на какой цитате построен текст.
- Самопроверка `quality.md` (§2) — только правдивые отметки.
