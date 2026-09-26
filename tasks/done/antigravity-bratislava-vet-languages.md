# Задача: Братислава — языки обслуживания у ветклиник

**Исполнитель:** Antigravity
**Роль:** Data agent.
**Тип:** добор одного поля по городу, объём небольшой (34 места, ~5 минут на место).
**Ветка:** `antigravity/bratislava-vet-languages`
**Зависимости:** нет.

## Зачем

Решение владельца (2026-09-26, `docs/card-spec.md`, раздел 8):
`languages_spoken` у ветклиник обязателен. По нему сайт отвечает на
частый запрос экспатов «english speaking vet». `check-city` теперь
требует у каждой ветклиники либо коды языков, либо пометку, что
нигде не указано. Пока задача не сделана, Братислава — `NOT READY`,
и другие PR с данными Братиславы не мёржатся.

## Что сделать

Для каждой ветклиники из таблицы ниже, по правилу `docs/card-spec.md`
(раздел 8, `languages_spoken`):

1. Открыть официальный сайт и официальные соцсети. Искать: языковые
   версии сайта (EN/DE/HU…), фразы «hovoríme anglicky», «English
   spoken», «we speak English», флажки языков, языки врачей на странице
   команды.
2. Нашлось явное указание — коды через `;` (`en; de`), **без местного
   `sk`**.
3. Не нашлось — поле пустое, в конец `notes` добавить
   `; languages: none (<где смотрели>)`, например
   `; languages: none (site sk only, fb - not stated)`.

Только **явное** указание самого заведения. Отзывы, каталоги, Google
Maps и «наверное говорят» — не источник.

Трогать только столбцы `languages_spoken` и `notes` в
`data/cities/bratislava/businesses.csv`, у этих 34 строк.

| slug | сайт |
|---|---|
| `sibra-centrum-veterinarnej-mediciny` | https://www.sibra.sk |
| `vetline-veterinarna-nemocnica` | https://vetline.sk |
| `marfilvet-veterinarna-nemocnica` | https://marfilvet.sk |
| `vetpoint-veterinarna-klinika` | https://www.vetpoint.sk |
| `veterinarna-nemocnica-bennett` | https://bennett.sk |
| `veterinarna-klinika-primavet` | https://www.primavet.sk |
| `veterinarna-klinika-bullypet` | https://veterinarbratislava.sk |
| `veterinarna-poliklinika-bajvet` | https://www.bajvet.sk |
| `easyvet-veterinarna-klinika` | https://www.easyvet.sk |
| `mypet-clinic` | https://www.mypet.sk |
| `veterinarna-klinika-slnecnice` | https://veterinaslnecnice.sk |
| `animal-clinic-mvdr-andrea-glonekova` | https://www.animalclinic.sk |
| `vet-svet-veterinarna-ambulancia` | https://vetsvet.sk |
| `small-vet-plus` | https://www.smallvet.sk |
| `super-zoo-veterina` | https://www.superzooveterina.sk |
| `animavet-veterinarna-ambulancia` | https://www.animavet.sk |
| `veterinarna-klinika-lapvet` | https://www.lapvet.sk |
| `petvet-veterinarna-klinika` | http://www.petvet.sk |
| `veterinarna-ambulancia-spektravet` | https://www.spektravet.sk |
| `veterinarna-ambulancia-vetfriends` | https://vetfriends.sk |
| `zebra-veterinarna-ambulancia` | https://www.zebravet.sk |
| `vetpetrzalka-veterinarna-ambulancia` | https://www.vetpetrzalka.sk |
| `eurovet-veterinarna-ambulancia` | http://www.eurovet.sk |
| `veterinarna-klinika-planet` | https://www.klinikaplanet.sk |
| `dermavet-veterinarna-ambulancia` | https://dermavet.sk |
| `veterinarna-ambulancia-kocur` | http://www.veterinarkocur.sk |
| `tvoja-veterina` | https://tvojaveterina.sk |
| `veterinarna-ambulancia-ahavet` | https://www.ahavet.sk |
| `veterinarna-ambulancia-labka` | http://www.veterina-labka.sk |
| `veterinarna-ambulancia-polianky` | http://www.bratislava-veterinar.sk |
| `veterinarna-ambulancia-mvdr-pavol-cech` | https://veterinalamac.sk |
| `veterinarna-klinika-vrakuna` | http://www.veterinar-vrakuna.sk |
| `veterinarna-ambulancia-bhvet` | http://www.vetambraca.sk |
| `veterinarna-poliklinika-jarovce-mvdr-milan-svihran` | https://veterinar-svihran.sk |

## Готово, когда

- `cd website && npm run check-city -- bratislava` → `READY`, вывод в PR.
- В PR — самопроверка из `docs/playbooks/quality.md` (§2) и таблица:
  сколько мест с языками (и какими), сколько с пометкой «none».
- В диффе изменены только `languages_spoken` и `notes`.
