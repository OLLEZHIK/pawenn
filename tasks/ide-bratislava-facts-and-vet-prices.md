# Задача: Братислава — «коротко о месте» для всех мест и цены ветклиник

**Исполнитель:** Antigravity IDE (передана по указанию владельца, 2026-09-27)
**Роль:** Data agent.
**Тип:** добор данных по городу, объём средний (95 мест + 39 ветклиник).
**Ветка:** `antigravity/bratislava-facts-and-vet-prices` (у IDE ветки тоже `antigravity/…`)
**Зависимости:** нет.

Перед работой — `docs/playbooks/quality.md` (правила и самопроверка).

## Зачем

Решение владельца (2026-09-26, `docs/research/place-page-needs.md`):
страницы мест не должны быть пустыми. Люди до звонка хотят знать, как
место устроено (запись, для кого, условия) и сколько стоит. Цена —
фактор выбора № 1, а у ветклиник цены есть только у 15 из 54.

## Часть 1. «Коротко о месте» — столбец `facts` у всех 95 мест

По `docs/card-spec.md`, раздел 9 (там коды по категориям).

1. Для каждого места открыть официальный сайт и официальную соцсеть
   (Facebook/Instagram — только как источник, ссылки не нужны).
2. Записать в `facts` через `; ` коды из списка **его категории**,
   которые место **само прямо пишет**: «bez objednania», «len na
   objednávku», «platba kartou», «parkovanie», «prijímame aj mačky»,
   «nutné očkovanie», «skúšobný deň», «poistenie» и т. п.
3. Ничего не указано — поле пустое, в конец `notes`:
   `; facts: none (site - nothing stated, fb - nothing)`.
4. Нет кода = «не указано». Не ставить код по догадке и не ставить
   противоречащие (`walk_in` + `appointment_only`).

Трогать в `businesses.csv` только столбцы `facts` и `notes`.

## Часть 2. Цены у ветклиник без цен (39 мест)

По `docs/card-spec.md`, «Цены» (6 услуг ветклиники, что считать, как
складывать части, `partial` / `note`). Только опубликованный прайс на
официальном сайте. Прайса нет — в `notes` места `prices: not published`
(если ещё нет). Писать только в `prices.csv` (и `notes`).

| slug | сайт |
|---|---|
| `vetline-veterinarna-nemocnica` | https://vetline.sk |
| `marfilvet-veterinarna-nemocnica` | https://marfilvet.sk |
| `veterinarna-nemocnica-bennett` | https://bennett.sk |
| `veterinarna-klinika-primavet` | https://www.primavet.sk |
| `veterinarna-klinika-bullypet` | https://veterinarbratislava.sk |
| `easyvet-veterinarna-klinika` | https://www.easyvet.sk |
| `veterinarna-klinika-slnecnice` | https://veterinaslnecnice.sk |
| `animal-clinic-mvdr-andrea-glonekova` | https://www.animalclinic.sk |
| `small-vet-plus` | https://www.smallvet.sk |
| `animavet-veterinarna-ambulancia` | https://www.animavet.sk |
| `veterinarna-ambulancia-vetfriends` | https://vetfriends.sk |
| `zebra-veterinarna-ambulancia` | https://www.zebravet.sk |
| `eurovet-veterinarna-ambulancia` | http://www.eurovet.sk |
| `veterinarna-klinika-planet` | https://www.klinikaplanet.sk |
| `veterinarna-ambulancia-kocur` | http://www.veterinarkocur.sk |
| `tvoja-veterina` | https://tvojaveterina.sk |
| `veterinarna-ambulancia-ahavet` | https://www.ahavet.sk |
| `veterinarna-ambulancia-labka` | http://www.veterina-labka.sk |
| `veterinarna-ambulancia-polianky` | http://www.bratislava-veterinar.sk |
| `veterinarna-klinika-vrakuna` | http://www.veterinar-vrakuna.sk |
| `veterinarna-ambulancia-bhvet` | http://www.vetambraca.sk |
| `veterinarna-poliklinika-jarovce-mvdr-milan-svihran` | https://veterinar-svihran.sk |
| `ahojvet` | https://ahojvet.sk |
| `vetklinika-ruzinov` | https://www.vetklinika.sk |
| `mvdr-dusan-jurasik` | — |
| `veterinarna-klinika-amis` | http://www.amisveterina.sk |
| `vetmen-veterinarna-klinika` | https://veterinarnaklinika.webnode.sk |
| `veterinarna-ambulancia-mvdr-alexander-baxa` | http://www.veterinardubravka.sk |
| `veterinarna-klinika-x-vet` | https://x-vet.sk |
| `ruty-veterinarna-ambulancia` | http://www.rutyvet.sk |
| `mlynvet` | http://www.mlynvet.sk |
| `veterinarna-ambulancia-biely-kriz` | http://www.veterinarbk.sk |
| `vet-and-dent` | https://vet-dent.sk |
| `mvdr-vladimir-januschke` | — |
| `dn-vet` | https://dnvet.sk |
| `cezi-vet` | https://www.cezivet.sk |
| `veterina-inak-centrum` | https://veterinainakcentrum.sk |
| `veterinarna-ambulancia-cunovo` | https://veterinacunovo.sk |
| `vyjazdovy-veterinar-mvdr-jana-morvayova` | http://www.vyjazdovyveterinar.sk |

## Готово, когда

- **PR открыт** (коммит в ветке — не сдача).
- `cd website && npm run check-city -- bratislava` → `READY`, вывод в PR
  (строка `facts` ≥ 80 %, раздел `prices` без ошибок).
- В PR — самопроверка из `quality.md` (§2) и две таблицы:
  - по категориям: сколько мест с кодами, сколько с `facts: none`,
    самые частые коды;
  - по 39 ветклиникам: сколько цен добавлено по каждому коду услуги,
    у скольких `prices: not published`.
- В диффе `businesses.csv` изменены только `facts` и `notes`.

## Чего не делать

- Не брать факты и цены из каталогов, Google Maps и отзывов.
- Не придумывать коды и не писать «наверное».
- Не трогать код сайта и другие столбцы.
