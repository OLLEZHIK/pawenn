# Задача: Братислава — сверить 14 телефонов и один факт

**Исполнитель:** Claude Code CLI (локальный)
**Роль:** Data agent (права как у Antigravity, тестовая задача).
**Тип:** проверка данных, объём маленький (15 строк).
**Ветка:** `cli/bratislava-phones`
**Зависимости:** нет. Начать от свежего `main`.

Первая тестовая задача для CLI в роли исполнителя данных (владелец,
2026-09-28). Перед работой — `AGENTS.md`, `docs/playbooks/quality.md`,
`docs/card-spec.md` (раздел про контакты).

## Что не так

`cd website && npm run verify-city -- bratislava` не находит телефон из
`data/cities/bratislava/businesses.csv` на сайте места у 14 мест:

dn-vet, doghotel, dogtrainer-peter-peller, laura-salon-pre-psov, mlynvet,
petcenter-oc-galeria-petrzalka, petcenter-stanica-nivy,
ruty-veterinarna-ambulancia, sponzia-chovatelske-potreby, super-zoo-aupark,
super-zoo-bajkalska, veterinarna-ambulancia-labka,
veterinarna-ambulancia-mvdr-pavol-cech, veterinarna-klinika-vrakuna.

И один факт: у `petrooms-hotel-pre-macky` код `vaccination_required`
ссылается на https://petrooms.sk/casto-kladene-otazky/, а на этой
странице слова об очковании скрипт не нашёл.

## Что сделать

1. **Телефоны.** Для каждого из 14 мест открыть сайт (главная,
   «Kontakt») и карточку Google Maps (`google_maps_url` в данных).
   - Номер на сайте есть, но другой — взять номер **с сайта**, копией.
   - На сайте номера нет (картинка, форма), а в Google Maps есть —
     оставить или поставить номер с карточки, в `notes` добавить
     `phone: google maps, checked <дата>`.
   - Номер в данных совпадает с сайтом, но скрипт не нашёл (другой
     формат записи) — ничего не менять, отметить в PR.
2. **Факт.** Найти на сайте petrooms.sk, где сказано про обязательное
   очкование. Нашлось на другой странице — заменить ссылку в `notes`.
   Не нашлось нигде — убрать код `vaccination_required` из `facts`.

В `businesses.csv` менять **только** `phone`, `facts` и `notes` этих 15
мест. Файл сохранять с теми же переводами строк.

## Чего не делать

- Не набирать номера по памяти и не «исправлять» формат у тех, что
  совпали, — только копия с сайта или карточки.
- Не трогать другие поля, другие места, другие города, код сайта.

## Готово, когда

- **PR открыт** (коммит — не сдача), заголовок `Bratislava: phones check`.
- `cd website && npm run check-city -- bratislava` → `READY` и
  `npm run verify-city -- bratislava` → `VERIFIED`, вывод обоих целиком в PR.
- В PR — таблица по 15 местам: было → стало, откуда взято (сайт /
  Google Maps / совпадало).
- Самопроверка `quality.md` (§2) в PR.
