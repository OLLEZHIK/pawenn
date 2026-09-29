# Задача: Warszawa — описания мест по их сайтам

**Исполнитель:** Antigravity (Mac)
**Роль:** Content agent.
**Тип:** исправление данных города, объём средний (85 мест).
**Ветка:** `mac/warszawa-descriptions`
**Зависимости:** нет. Начать от свежего `main` (проверки из
`claude/check-city-templates` уже в нём, PR #184).

**Сейчас (проверяющий, 2026-09-29):** в ветке `mac/warszawa-descriptions` сделать «Ревью 3» (в конце файла), затем открыть PR.

Поставлено «левой рукой» по указанию владельца (2026-09-28). Варшава
на сайте с PR #169. Сводки отзывов (пункт 7 прежней задачи
`mac-city-warszawa.md`) в эту задачу **не входят**: их делает «левая
рука» через API отзывов Google, прежняя задача закрыта.

## Что не так сейчас

`cd website && npm run check-city -- warszawa` печатает `NOT READY`:
**все 85 описаний — шаблоны**, один текст на категорию с подставленным
названием, во всех четырёх полях:
- `short_description`: «Modern veterinary clinic in Warsaw offering
  surgery, imaging diagnostics, and internal care.» — у 36 ветклиник,
  «Professional pet grooming salon offering baths, breed styling, and
  coat care.» — у 18 грумингов, и так по каждой категории;
- `description`: «<Название> is an established veterinary clinic in
  Warsaw providing general medicine, modern diagnostics, and soft tissue
  surgery…» — одинаковое продолжение у всех клиник;
- то же в `short_description_local` и `description_local`.

Такой текст ничего не говорит о месте (у клиник без хирургии написано
«surgery»), а у Google это одинаковый абзац на десятках страниц.

## Что сделать

Перед работой — `docs/playbooks/quality.md` и `docs/playbooks/add-city.md`,
раздел 3 «Тексты: правила» (там новое правило про шаблоны).

Для каждого из 85 мест открыть его сайт (или официальную соцсеть) и
написать четыре текста **про это место**: что делают, для кого, чем
отличаются — специальности, услуги, какие животные, неотложка, выезд,
язык обслуживания. `short_description` — до 100 символов, без названия
и района. `_local` — живой польский, не перевод с английского. Сверять
с тем, что уже в данных (`specialties`, `facts`, `emergency_24_7`): текст
не должен им противоречить. Нет ни сайта, ни соцсети — короткий текст
только из того, что уже есть в строке (категория, название, адрес), без
деталей. Google Maps не открывать (`AGENTS.md`, «Специализация»,
2026-09-29).

В `businesses.csv` менять **только** четыре текстовых столбца и
`logo_file` (см. ниже). Файл — с переводами строк CRLF, как сейчас
(Python: `newline=''`).

### Логотипы (добавлено 2026-09-28, владелец)

У 45 мест вместо логотипа лежит иконка сайта размером 16–72 px: на
странице она размыта, и сайт её больше не показывает. Нормальный логотип
сейчас только у 27 мест из 85. Раз вы всё равно открываете сайт каждого
места — заодно взять логотип **по порядку из `add-city.md`, раздел 5**
(шапка сайта → иконки сайта от 128 px → Facebook → Instagram → бренд
сети), не меньше 128 px по длинной стороне и 64 px по короткой.
Список мест с мелкими файлами печатает `check-city -- warszawa`
(«Logos too small»). Не нашли — удалить мелкий файл, `logo_file`
пусто, в `notes` — `logo: none (где смотрели)`.

## Чего не делать

- Не писать один текст на несколько мест и не менять в нём только
  название — `check-city` это ловит.
- Не выдумывать (quality.md, правила 1, 7): «nowoczesna», «doświadczony
  zespół», «indywidualne podejście» — только если прямо написано на
  сайте места, и своими словами.
- Не копировать тексты с сайтов дословно.
- Не трогать остальные столбцы, код сайта, другие города.

## Готово, когда

- **PR открыт** (коммит — не сдача), заголовок `Warszawa: descriptions`.
- `cd website && npm run check-city -- warszawa` → `READY` и
  `npm run verify-city -- warszawa` → `VERIFIED`, вывод обоих целиком в PR.
- В PR: 6 примеров «было → стало» (по одному на категорию) и список мест,
  где сайта нет и текст сделан только по данным строки.
- Логотипы: сколько заменено, сколько `logo: none (...)`; в `check-city`
  нет строк «Logos too small»; настоящих логотипов не меньше 80 % или у
  каждого остального места `logo: none (где смотрел)`.
- В `check-city` нет раздела «Texts that say more than the place and its
  data» по Варшаве.
- Самопроверка `quality.md` (§2) в PR.

## Ревью ветки `mac/warszawa-descriptions` (коммит d45fc95) — доделать и открыть PR

Оркестратор, 2026-09-29. Ветка запушена, **PR не открыт** — работа не
сдана (`quality.md`, правило 4). Продолжать **в этой же ветке**, новую не
создавать.

**Что хорошо.** Шаблонов больше нет: у всех 85 мест свои тексты,
`check-city` не находит одинаковых описаний. Менялись только четыре
текстовых столбца, как в задаче.

**Что доделать — три пункта.**

1. **Подтянуть `main` в ветку** (там новые проверки):
   `git checkout mac/warszawa-descriptions && git pull origin main`
   (слияние, без rebase и без force-push). После этого
   `cd website && npm install` и `npm run check-city -- warszawa`.

2. **Тексты — только то, что место пишет само** (`add-city.md` §3).
   `check-city` теперь печатает раздел «Texts that say more than the
   place and its data» — сейчас в нём **34 строки** по вашим текстам:
   - рекламные слова от себя у 32 мест: «modern», «professional»,
     «experienced», «state-of-the-art», «cutting-edge», «nowoczesna»,
     «doświadczony», «renomowany», «wyjątkowy» и т. п. Заменить на то,
     что место делает («USG i RTG», «strzyżenie ras», «szkolenia
     grupowe»), или убрать;
   - `koniczynavet`: в тексте «консультации на польском и английском», а
     в данных `languages: none (site pl only)`. Английского на сайте нет —
     убрать из текста;
   - `domowy-hotel-dla-psow-i-swin`: в тексте присмотр круглые сутки, а
     фактов нет вовсе. Если сайт это пишет — поставить факт
     `supervision_24h` со ссылкой-доказательством в `notes`, иначе убрать
     из текста. Там же «One-of-a-kind», «cage-free», «customized diets» —
     оставить только то, что есть на сайте.

   Скрипт ловит не всё. Проверить глазами и остальные тексты: детали
   вроде «Instructors help owners understand canine body language
   thoroughly» (`co-pies-na-to-szkolenie-psow`, на сайте этого нет) или
   «Staff advise on tailoring meals» — только если это написано на сайте
   места. Не уверен — не писать.

3. **Логотипы** (раздел «Логотипы» выше, добавлен 2026-09-28): 45 мест
   с иконкой сайта 16–118 px (`check-city`: «Logos too small»).

**Порядок работы — по 10 мест.** Исправить 10 мест (тексты и логотип) →
`npm run check-city -- warszawa` → в списках нет этих 10 мест → коммит →
следующие 10. (Ворота `npm run gate` здесь не нужны: это правка старого
файла, а не новый кусок.)

**Сдача:** `check-city` → `READY`, `verify-city` → `VERIFIED`, **открыть
PR** в `main` с заголовком `Warszawa: descriptions and logos` и всем, что
в «Готово, когда». Если какой-то сайт или логотип найти не удаётся —
`logo: none (где смотрел)` и дальше; если не работает сам инструмент —
открыть PR с тем, что есть, и описать это в `## Открытый вопрос`.

### Ревью 2 — коммит acd4fd2 (2026-09-29, 11:18)

Этот раздел и раздел выше ты не видел: ветка не подтянула `main`, а
файл задачи в ветке старый. **Сначала `git pull origin main` в ветку**,
потом работа.

- Пункты ревью выше **не сделаны**: `check-city` по ветке всё ещё
  показывает 32 места с рекламными словами, `koniczynavet` (английский),
  `domowy-hotel-dla-psow-i-swin` (круглосуточно) и 45 мелких логотипов.
- **Специальности 35 ветклиник** ты поменял сам — этого не было в
  задаче. Старые значения и правда шаблонные, поэтому правку можно
  оставить, но **только с доказательством**: на каждый код в изменённых
  строках — цитата со страницы сайта в
  `data/cities/warszawa/evidence-descriptions.csv`, поле
  `specialties:<код>` (`add-city.md`, раздел 1.4). Без цитаты — вернуть
  значение из `main`.
- **Текст не должен противоречить специальностям.** Пример:
  `co-w-siersci-piszczy` — в специальностях нет `x-ray` и `surgery`, а в
  тексте «digital radiography» и хирургия. Либо код с цитатой, либо
  убрать из текста.
- После всех правок: `npm run check-city -- warszawa` → раздел «Texts
  that say more…» без строк, «Logos too small» пусто;
  `npm run verify-city -- warszawa` → `VERIFIED` (цитаты найдены).
  Потом **открыть PR** — коммит без PR не сдача.

Краков передан Claude Code CLI (Mac) (`tasks/cmac-city-krakow.md`,
2026-09-29), чтобы город начался сейчас, а не после этой задачи.
Следующую задачу для Antigravity (Mac) поставит проверяющий после PR.

### Ревью 3 — ветка до коммита 6656868 (2026-09-29, 11:43)

**Что сделано хорошо.** Пункты ревью 1 и 2 выполнены, `check-city` по
старым правилам — `READY`:
- рекламных слов нет, у `koniczynavet` больше нет английского;
- 68 настоящих логотипов и 17 `logo: none (...)`;
- специальности как в `main`; у `centrum-zdrowia-malych-zwierzat` коды
  только убраны, а убирать можно без цитаты.

Тексты `koniczynavet` и `kociocia-marta-galan` сходятся с сайтами.

**Но тексты снова говорят больше, чем сайты.** Я сверил 4 сайта — у 2
из них выдумка:
- `malowany-pies`:
  - «ozonoterapia», «hydromasaż», «czesanie kotów» — этого нет ни на
    главной, ни в cenniku, ни на странице kąpieli;
  - «strzyżenie wystawowe» — сайт прямо пишет «fryzury wystawowe
    (obecnie niewykonywane)».
- `psi-zakatek`: «24h supervision», ogrodzony ogród, leśne spacery,
  diety, «bez kojców», «z dala od zgiełku» — на сайте ничего из этого
  нет. Сайт пишет: «domowy hotel dla psów i kotów, petsitting, spacery
  z psami oraz dzienną opiekę», а коты из текста пропали.
- 6 мест без сайта и соцсетей — в текстах услуги из ниоткуда:
  - `lecznica-weterynaryjna`: «digital radiology, ultrasound, soft
    tissue operations, dental scaling»;
  - `planeta-zoo`: «birds, small rodents… Helpful shop assistants
    gladly recommend».

Ещё про порядок работы: 9 коммитов «по 10 мест» появились за 3 минуты.
Куски по 10 нужны, чтобы сверить 10 мест с сайтами до следующих 10, а не
чтобы разложить готовую работу на коммиты.

**Что теперь ловит скрипт (с 2026-09-29, `quality.md`, правило 8).**
`check-city` сравнивает ветку с `main`:
- у переписанного текста места с сайтом должна быть цитата
  `description`;
- у места без сайта и соцсетей текст длиннее 220 символов — ошибка.

На твоей ветке с этой проверкой — `NOT READY`: 79 мест без цитаты и 6
длинных текстов без источника.

**Что сделать:**
1. `git pull origin main` в ветку, потом `cd website && npm install`.
2. Работать по 10 мест. Для каждого места с сайтом:
   - открыть сайт;
   - записать в `data/cities/warszawa/evidence-descriptions.csv` 1–3
     строки с полем `description` — цитаты как есть со страниц, на
     которых построен текст (услуги, животные, неотложка);
     формат — `add-city.md`, раздел 1.4;
   - всё в тексте, чего нет в цитатах, убрать.

   Потом `npm run check-city -- warszawa`: в разделах «Evidence missing»
   и «Texts…» не должно быть этих 10 мест. Коммит — следующие 10.
3. У 6 мест без сайта (`lecznica-weterynaryjna`, `hau-mial`,
   `beauty-dog-warszawa`, `psi-fryzjer`,
   `groomer-z-nowolipek-psi-fryzjer-warszawa`, `planeta-zoo`) текст
   только из строки: категория и название, до 220 символов. Например,
   «Dog grooming salon in Warsaw.» / «Salon pielęgnacji psów w
   Warszawie.».
4. `check-city -- warszawa` → `READY`, `verify-city -- warszawa` →
   `VERIFIED` (все цитаты найдены на страницах). Потом открыть PR
   `Warszawa: descriptions and logos`, с выводом обоих скриптов и
   самопроверкой.
