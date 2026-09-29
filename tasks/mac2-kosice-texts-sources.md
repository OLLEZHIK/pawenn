# Задача: Кошице — убрать из описаний то, чего нет в источниках

**Исполнитель:** Antigravity (Mac 2)
**Роль:** Data / content agent.
**Тип:** исправление данных, объём маленький (≈15 мест, только тексты).
**Ветка:** `mac2/kosice-texts-sources`
**Зависимости:** нет. Начать от свежего `main`.

Передано Antigravity (Mac 2) проверяющим 2026-09-29: здесь нужны сайты
мест и карточки Maps, но не лента отзывов — урезанный вид Maps у Mac 2
не мешает. Сводки Варшавы вернулись к Desktop.

Поставлено облачным Claude Code (оркестратор) 2026-09-29 по итогам ревью
[#175](https://github.com/OLLEZHIK/shop/pull/175): замечания из
[этого комментария](https://github.com/OLLEZHIK/shop/pull/175#issuecomment-5874894341)
не попали в PR до мерджа, тексты с ними уже в `main`.

## Что не так

Описания Кошице (`data/cities/kosice/businesses.csv`) уникальные, но в
части из них есть детали, которых нет ни на сайте места, ни в его
соцсети (`docs/playbooks/quality.md`, правила 1 и 7: не выдумывать).

**Проверено по сайтам — лишнее:**
- `lu-ma-kupelna-pre-psy`: «ultrazvuková ozonoterapia», «perličkové
  kúpele», «pre citlivú či alergickú pokožku», «hydroterapia». На
  lumakupelna.sk только: kúpanie a sušenie, odchlpovacia kúra, ozónová
  terapia, úprava srsti strihaním.
- `prokop-luboslav-pro-aqua`: «vonkajšie filtre», «LED osvetlenie»,
  «vločkové krmivá». На topakvaristika.sk: ryby, rastlinky, krmivá,
  hnojivá, liečivá, akváriá a akváriové sety.
- `cassovet-veterinarna-klinika`: «digitálny RTG». На сайте просто
  «RTG» (остальное подтверждается).

**Места без сайта и соцсетей — тексты подробнее, чем может дать карточка
Google:** `peggy-dog` (svetre, pršiplášte, kožené vodítka,
monoproteínové konzervy), `m-vet` (имя врача, dermatologické
vyšetrenia), `maskrtnik` (narodeninové torty, bez konzervantov, čerstvé
suroviny), `chovprodukt` (mäsové taštičky), `eco-dog-walker`
(zasielanie fotiek), `zverinex` (конкретный ассортимент). Проверить
так же остальные места без сайта из списка в описании #175:
`barf-vet-veterinarna-ambulancia`, `mvdr-peter-koren`,
`mvdr-erik-hudec-veterinarna-ambulancia-a-hotel-pre-macky`,
`veterinarna-ambulancia-vkit`, `psi-salon-d-d`.

**Сайт Petstar:** у `petstar-mvdr-jozef-berescak` `website` =
`http://www.vetanimal.sk/`, а этот адрес просто перенаправляет на
`https://www.petstar.sk/`. Поставить `https://www.petstar.sk/`.

## Что сделать

1. Для каждого места выше открыть сайт / соцсеть / карточку Google Maps
   (описание, «Služby», фото вывески).
2. Каждую деталь в четырёх текстах (`short_description`,
   `short_description_local`, `description`, `description_local`)
   оставить, только если она там есть. Если деталь видна только на
   карточке Maps — дописать в `notes`, откуда: например
   `text: google maps card (služby, 2026-09-29)`.
3. Чего нигде нет — убрать. Если после этого текст получается коротким
   (категория, район, что точно известно) — это нормально.
4. `website` Petstar — как выше.

Менять **только** эти столбцы у этих мест: четыре текста, `notes`, и
`website` у Petstar. Не трогать часы, цены, факты, отзывы, другие места.

## Готово, когда

- PR открыт, заголовок `Kosice: texts only from sources`.
- В PR таблица: место → что убрано → откуда взято то, что осталось
  (сайт / соцсеть / карточка Maps, с цитатой 3–5 слов).
- `cd website && npm run check-city -- kosice` → `READY`, вывод в PR.
- Самопроверка `quality.md` (§2) в PR.
