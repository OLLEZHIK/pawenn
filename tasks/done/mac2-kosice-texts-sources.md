# Задача: Кошице — убрать из описаний то, чего нет в источниках

**Исполнитель:** Antigravity (Mac 2)
**Роль:** Data / content agent.
**Тип:** исправление данных, объём маленький (≈15 мест, только тексты).
**Ветка:** `mac2/kosice-texts-sources`
**Зависимости:** нет. Начать от свежего `main`.

**Сейчас (проверяющий, 2026-09-29):** PR #199 — сделать «Ревью 2» (в конце файла) в той же ветке, вывод `check-city` и `verify-city` — в PR.

Передано Antigravity (Mac 2) проверяющим 2026-09-29: здесь нужны сайты
мест, не Google Maps (с 2026-09-29 Maps — только у CLI, `AGENTS.md`,
«Специализация»).

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

1. Для каждого места выше открыть сайт / соцсеть. Google Maps не
   открывать (`AGENTS.md`, «Специализация», 2026-09-29).
2. Каждую деталь в четырёх текстах (`short_description`,
   `short_description_local`, `description`, `description_local`)
   оставить, только если она есть на сайте или в соцсети. Сайта и
   соцсети нет — текст только из того, что уже есть в строке
   (категория, название, адрес); в `notes` — `text: no site (<дата>)`.
3. Чего нигде нет — убрать. Если после этого текст получается коротким
   (категория, район, что точно известно) — это нормально.
4. `website` Petstar — как выше.

Менять **только** эти столбцы у этих мест: четыре текста, `notes`, и
`website` у Petstar. Не трогать часы, цены, факты, отзывы, другие места.

## Готово, когда

- PR открыт, заголовок `Kosice: texts only from sources`.
- В PR таблица: место → что убрано → откуда взято то, что осталось
  (сайт / соцсеть, с цитатой 3–5 слов; или «только данные строки»).
- `cd website && npm run check-city -- kosice` → `READY`, вывод в PR.
- Самопроверка `quality.md` (§2) в PR.

## Ревью 2 — коммит 83fef03 (2026-09-29, 11:49)

**Что сделано хорошо:**
- у 11 мест без сайта улиц и районов больше нет, тексты короткие;
- тексты `lu-ma-kupelna-pre-psy` и `cassovet-veterinarna-klinika` (RTG,
  sono, лаборатория, мягкие ткани, похотовость) сходятся с сайтами;
- у Petstar исправлен сайт;
- самопроверка честная: невыполненные пункты не отмечены.

**Что поправить — 4 пункта, в той же ветке:**

1. **Цитаты в файл.** С 2026-09-29 `check-city` сравнивает ветку с
   `main`: если текст места с сайтом переписан, нужна цитата
   `description` (`quality.md`, правило 8). Сейчас `check-city -- kosice`
   на ветке — `NOT READY`, цитат нет у `cassovet-veterinarna-klinika`,
   `lu-ma-kupelna-pre-psy` и `prokop-luboslav-pro-aqua`. Цитаты уже
   есть в описании PR — перенести их в
   `data/cities/kosice/evidence-texts.csv`:

   ```
   business_slug,field,quote,source_url,observed_at
   lu-ma-kupelna-pre-psy,description,"<цитата как есть на странице>",https://www.lumakupelna.sk/...,2026-09-29
   ```

   Формат — `add-city.md`, раздел 1.4. Цитата — дословно со страницы,
   10–400 символов.
2. **`cassovet-veterinarna-klinika`.** «orthopedic procedures» и «rapid
   blood testing» я не нашёл ни на главной, ни на «Naše služby», ни на
   «Moderné prístrojové vybavenie». Либо цитата со страницы, где это
   написано, либо убрать из текста.
3. **`prokop-luboslav-pro-aqua`.** Сайт пишет «pre morské i sladkovodné
   akváriá» и про отдел teraristiky. Сейчас в тексте «focused on
   freshwater aquaristics» — это сужает. Нужно «freshwater and marine»
   или без уточнения.
4. **Места без сайта — только категория и название.** Эти детали не
   взяты ни из одного источника, их нужно убрать:
   - `maskrtnik`: «dog bakery», «baked dog biscuits» / «pekáreň»,
     «pečené sušienky»;
   - `chovprodukt`: «bowls» / «misky na kŕmenie»;
   - `barf-vet-veterinarna-ambulancia`: «advice on raw diets (BARF)» /
     «poradenstvo k BARF strave» — это догадка по названию;
   - `eco-dog-walker`: «home visits for feeding»;
   - `mvdr-erik-hudec-…`: «under veterinary supervision» / «pod
     dohľadom veterinára».

   Например: «Pet shop in Košice.» / «Predajňa chovateľských potrieb v
   Košiciach.».

**Готово, когда:**
- `cd website && npm run check-city -- kosice` → «Evidence missing» без
  этих мест;
- `npm run verify-city -- kosice` → `VERIFIED` (цитаты найдены);
- вывод обоих скриптов — в PR.

Правки из других разделов `check-city` (логотипы, рекламные слова у
других мест) — не этой задачи: `mac2-kosice-logos.md` и следующие.
