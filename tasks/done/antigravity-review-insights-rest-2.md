# Задача: сводки отзывов для оставшихся 34 мест Братиславы

**Исполнитель:** Antigravity (передана с Mac по указанию владельца, 2026-09-26)
**Роль:** Content / research agent.
**Тип:** контент по отзывам, объём средний (34 места).
**Ветка:** `antigravity/review-insights-rest-2`
**Зависимости:** нет.

## Что сделать

Продолжение `tasks/done/mac-review-insights.md` (38 мест смёржены в
PR #117). Всё — по `docs/playbooks/review-insights.md`; перед работой —
`docs/playbooks/quality.md`.

Для каждого места из таблицы (у всех ≥ 20 оценок Google):
- есть ≥ 5 отзывов с текстом за последние 6 месяцев — создать
  `data/cities/bratislava/review-insights/<slug>.json`;
- меньше — файл не создавать, место в таблицу PR с причиной
  («3 отзыва с текстом за полгода»).

Трогать только новые файлы в `review-insights/`.

Отзывы в Google Maps видны только **с входом в аккаунт Google**: без
входа карта открывается в «ограниченном просмотре», вкладки «Recenzie»
нет. Читать вручную, сортировка «Najnovšie», без скрейперов.

| slug | категория | оценок | Google Maps |
|---|---|---|---|
| `veterinarna-ambulancia-veterinka` | VET_CLINIC | 401 | https://maps.google.com/?cid=11415545579263912961 |
| `veterinarna-ambulancia-mvdr-alexander-baxa` | VET_CLINIC | 369 | https://maps.google.com/?cid=10556217261036128073 |
| `veterinarna-klinika-know-hau` | VET_CLINIC | 363 | https://maps.google.com/?cid=15757239679908178745 |
| `veterinarna-klinika-amis` | VET_CLINIC | 243 | https://maps.google.com/?cid=7506715500111079492 |
| `dn-vet` | VET_CLINIC | 202 | https://maps.google.com/?cid=3102834930527684720 |
| `mlynvet` | VET_CLINIC | 183 | https://maps.google.com/?cid=10168341624479532581 |
| `vetklinika-ruzinov` | VET_CLINIC | 176 | https://maps.google.com/?cid=771803738096232932 |
| `mvdr-dusan-jurasik` | VET_CLINIC | 145 | https://maps.google.com/?cid=10959083549721708673 |
| `veterinarna-ambulancia-cunovo` | VET_CLINIC | 131 | https://maps.google.com/?cid=15170159783201861596 |
| `ahojvet` | VET_CLINIC | 122 | https://maps.google.com/?cid=12735830244754532698 |
| `veterinarna-ambulancia-biely-kriz` | VET_CLINIC | 107 | https://maps.google.com/?cid=16200234471926601248 |
| `cezi-vet` | VET_CLINIC | 90 | https://maps.google.com/?cid=13945474857314467900 |
| `ruty-veterinarna-ambulancia` | VET_CLINIC | 72 | https://maps.google.com/?cid=9127521798369395277 |
| `vetmen-veterinarna-klinika` | VET_CLINIC | 69 | https://maps.google.com/?cid=8556368761305362708 |
| `veterinarna-klinika-x-vet` | VET_CLINIC | 61 | https://maps.google.com/?cid=7145937462506657939 |
| `kynologicky-klub-lamac` | DOG_TRAINING | 48 | https://maps.google.com/?cid=1178834695535629839 |
| `vet-and-dent` | VET_CLINIC | 45 | https://maps.google.com/?cid=1537873130138479590 |
| `doggie-vycvikova-skola` | DOG_TRAINING | 42 | https://maps.google.com/?cid=7196167247346061770 |
| `zuzalo-chovatelske-potreby` | PET_SHOP | 40 | https://maps.google.com/?cid=3489456233210268401 |
| `vyjazdovy-veterinar-mvdr-jana-morvayova` | VET_CLINIC | 37 | https://maps.google.com/?cid=5124039327572703816 |
| `sar-da-vycvikove-kynologicke-centrum-poslusny-pes` | DOG_TRAINING | 36 | https://maps.google.com/?cid=8096872552822230382 |
| `sportovy-klub-policajnej-kynologie-skpk` | DOG_TRAINING | 35 | https://maps.google.com/?cid=12303783600333745661 |
| `veterina-inak-centrum` | VET_CLINIC | 35 | https://maps.google.com/?cid=11718839467295605915 |
| `chovatelske-potreby-fanzy` | PET_SHOP | 34 | https://maps.google.com/?cid=13314700728395643522 |
| `dog-s-beauty-wellness` | GROOMING | 31 | https://maps.google.com/?cid=15734308195823134777 |
| `psi-salon-trim-studio` | GROOMING | 29 | https://maps.google.com/?cid=16152578563005563520 |
| `salon-a-hotel-pre-psov-havko` | PET_HOTEL | 29 | https://maps.google.com/?cid=8154006210408458313 |
| `psi-salon-vesela-labka-petrzalka` | GROOMING | 28 | https://maps.google.com/?cid=16798022007234473738 |
| `veterinarna-klinika-slnecnice` | VET_CLINIC | 28 | https://maps.google.com/?cid=8054031007315086551 |
| `lekaren-humavet` | PET_SHOP | 28 | https://maps.google.com/?cid=403424675532853682 |
| `mvdr-vladimir-januschke` | VET_CLINIC | 28 | https://maps.google.com/?cid=3678078696147498188 |
| `psi-salon-vesela-labka-ruzinov` | GROOMING | 25 | https://maps.google.com/?cid=5419468495081797089 |
| `psi-salon-zuzana` | GROOMING | 24 | https://maps.google.com/?cid=17686732626512645415 |
| `dermavet-veterinarna-ambulancia` | VET_CLINIC | 21 | https://maps.google.com/?cid=703911005689905049 |

## Готово, когда

- **PR открыт** (коммит в ветке — не сдача, `quality.md` правило 4).
- `cd website && npm run check-city -- bratislava` → `READY`, вывод в PR.
- В PR — самопроверка из `quality.md` (§2) и таблица по **всем 34**
  местам: файл создан (тема карточек и `sentiment`) или причина, почему нет.
