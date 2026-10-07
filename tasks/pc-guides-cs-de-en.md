# Задача: статьи «Poradna» (cs), «Ratgeber» (de, Австрия) и английские пары

**Исполнитель:** Antigravity (ПК) — контейнер выбирает диспетчер (`AGENTS.md`, владелец 2026-10-02); ветки `pcN/…`.
**Роль:** Content agent.
**Тип:** статьи по официальным источникам, партии по 3–5 (`docs/playbooks/guides.md`).
**Ветка PR:** `main` (статьи — в `website/content/guides/`, поэтому их мержат вместе с ближайшим большим мержем сайта, `AGENTS.md`, «Ветки»).
**Зависимости:** партия 1 — нет (cs: 4 статьи уже написаны «левой рукой», образец — `website/content/guides/cs/`); партии 3–4 (de) — после того, как Wien в `main` и подключён `de`.
**Срочность:** обычная.

**Сейчас:** ждёт диспетчера: выдать партию 1 свободному контейнеру.

**Зачем (владелец, 2026-10-06):** страницы, которые цитируют ИИ-ассистенты и поиск: короткие ответы с официальным источником у каждого факта, на языке страны, с живыми блоками цен и мест из нашего каталога. Правила, формат, проверка — `docs/playbooks/guides.md`, `npm run check-guides` → `READY`. Перед работой — `docs/playbooks/quality.md`, `docs/pc-agents/lessons.md`.

**Правило фактов (жёстко):** каждая сумма, срок, возраст и штраф — дословно из официальной страницы, цитата 3–15 слов в таблице PR. Страница не открылась или факта нет — факта в статье нет. Если две официальные страницы расходятся (так было со штрафом за чип в Чехии: старая страница ŠVPS — 20 000 Kč, актуальная — 50 000 Kč), брать актуальную и записать расхождение в PR. Если правило зависит от обстоятельств — так и писать и отправлять к ветеринару. Свои оценки («дорого», «выгодно») не писать.

## Партии

| # | Что | Ветка |
|---|---|---|
| 1 | `cs`, 4 статьи по нашим ценам Праги, каждая с `::price`: kastrace kočky (`neuter_cat`, `spay_cat`), kastrace feny (`spay_dog`), střižení psa / psí salon (`full_groom`, `bath_dry`), hotel pro psa (`dog_night`, `daycare_day`). Публиковать только если у услуги ≥ 5 мест с ценами в `data/cities/praha/prices.csv`; иначе — пропуск с пометкой. Образец — `sk/kastracia-*-cena.md`, `sk/strihanie-psa-cena.md`, `sk/hotel-pre-psa-cena.md` | `guides-cs-01-prices` |
| 2 | `cs`, 3–4 статьи по закону: pravidla pro venčení psa (zákon 246/1992 Sb. a vyhláška hl. m. Prahy, zakonyprolidi.cz), pes v MHD v Praze (DPP), nonstop veterinář v Praze (по нашим данным, `::places`), pojištění psa — только если есть официальный источник | `guides-cs-02-law` |
| 3 | `de`, 3 статьи для Вены: Mikrochip-Pflicht Hund (Österreich: Heimtierdatenbank, Tierarzt), Hundeführschein/Sachkundenachweis Wien (Stadt Wien), Reisen mit Hund in die EU — **Hundeabgabe Wien уже есть** (`de/hundesteuer-wien.md`, «левая рука», 2026-10-07; там же Hundesteuer Berlin/Hamburg/München/Köln) (Heimtierausweis; BMSGPK/AGES). Источники — oesterreich.gv.at, wien.gv.at, ris.bka.gv.at | `guides-de-01-law` |
| 4 | `de`, 3–4 статьи по нашим ценам Вены (`::price`), только если у услуги ≥ 5 мест: Kastration Katze/Hündin, Hund scheren/Hundesalon, Tierpension | `guides-de-02-prices` |
| 5 | `en`, пары `pair` к готовым cs/sk/pl статьям: microchip-dog, rabies-vaccination-dog, travel-eu-dog (для иностранцев в городах); писать заново по тем же источникам, не переводом, и проверять, что `pair` совпадает со словацкой/чешской/польской | `guides-en-01-pairs` |

Каждая партия — свой PR, пилот — партия 1 (проверяющий принимает по `check-guides` + 3–5 цитат с живых страниц). Дальше конвейер без ожидания проверки (`AGENTS.md`, шаг 3 самоопределения); пушить пачками (`AGENTS.md`, «Ветки»).

## Готово, когда

Для каждой партии: `cd website && npm run check-guides` → `READY`; в PR — таблица «утверждение → цитата → ссылка»; в каждой статье минимум один блок `::price` или `::places` и 1–2 ссылки на соседние статьи раздела.
