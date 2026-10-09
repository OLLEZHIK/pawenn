## Kraków: review insights chunk 03 (партия 1, 10 мест)

Сводки отзывов Google Maps для первой партии из 10 мест (по убыванию числа оценок).

### Результаты проверки мест партии

| Место | Категория | Оценок | Период | Текстовых отзывов | Темы и sentiment | Результат |
|---|---|---|---|---|---|---|
| `uroda-czterolapa` | GROOMING | 90 | 24 мес. | 15 | staff (13, positive), animals (12, positive), results (10, positive) | Сводка готова |
| `psia-paczka-spa` | GROOMING | 87 | 6 мес. | 5 | animals (4, positive), staff (3, positive), results (3, positive) | Сводка готова |
| `studio-pieknego-psa` | GROOMING | 85 | 12 мес. | 5 | staff (4, positive), place (4, mixed), animals (3, positive) | Сводка готова |
| `salon-scoobydoo` | GROOMING | 85 | 12 мес. | 6 | staff (6, positive), animals (6, positive), results (4, positive) | Сводка готова |
| `psie-nocowanie` | PET_HOTEL | 84 | 24 мес. | 7 | animals (4, +), place (3, +), staff (2, +) | Пропущено: только 2 темы с 3+ упоминаниями (animals 4, place 3; третья тема staff имеет лишь 2 упоминания). По правилам требуется 3 темы с 3+ упоминаниями. |
| `fafel-grooming-salon` | GROOMING | 84 | 6 мес. | 9 | staff (6, positive), results (6, positive), animals (6, positive) | Сводка готова |
| `petsitter-ogonek` | PET_SITTING | 83 | 6 мес. | 12 | staff (12, positive), animals (12, positive), communication (11, positive) | Сводка готова |
| `wyczesani-salon-pielegnacji-psow` | GROOMING | 82 | 24 мес. | 17 | animals (14, positive), results (12, positive), staff (10, positive) | Сводка готова |
| `pani-pupilowa` | DOG_TRAINING | 81 | 24 мес. | 30 | animals (29, positive), staff (28, positive), results (15, positive) | Сводка готова |
| `kotel` | PET_HOTEL | 77 | 6 мес. | 7 | place (7, negative), animals (6, mixed), staff (5, mixed) | Сводка готова |

### Самопроверка (quality.md §2)

- [x] Источник — реальная лента Google Maps под входом, вкладка Opinie, сортировка Najnowsze.
- [x] Все тексты уникальны, без шаблонных концовок, длина 250–450 знаков на PL и EN.
- [x] Период определен ступенями: 6 -> 12 -> 24 мес. (минимальный с 5+ отзывами).
- [x] Лента feed заполнена реальными датами, звездами и разметкой тем, sentiment карточек точно вычислен из ленты.
- [x] Негативные отзывы не скрыты (`kotel`: place negative, animals mixed, staff mixed; `studio-pieknego-psa`: place mixed).
- [x] Пропущенное место зафиксировано с честной причиной (`psie-nocowanie`: нет 3 тем с 3+ упоминаниями).
- [x] `gate`: PASS insights-03 (round 2).
- [x] `check-city -- krakow`: READY.
- [x] `verify-city -- krakow`: VERIFIED.
- [x] `sanity -- krakow`: SANITY OK.
- [x] `agent-check`: AGENT-CHECK OK.
