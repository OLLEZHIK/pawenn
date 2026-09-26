# Bratislava

Город в стандартном формате (`docs/playbooks/add-city.md`,
`docs/card-spec.md`). Перенесён сюда из старых `data/*-bratislava.csv`
2026-09-25.

Все файлы правятся напрямую, как в любом другом городе. Переходный
период закончен 2026-09-26: старые `data/*-bratislava.csv`, скрипт
`scripts/migrate-bratislava.py`, путь `seedLegacyBratislava` в seed и
копии логотипов в корне `website/public/logos/` удалены.

## Что здесь

- `businesses.csv` — места (`docs/card-spec.md`), `city.json` — город.
- `prices.csv` — цены на 6 услуг категории. Собранные цены груминга
  (65 строк) и ветклиник (138 строк) переведены сюда один раз
  (97 строк для 20 заведений), старые файлы цен удалены. Как
  переводили: размеры собаки → диапазоны веса там, где салон пишет кг;
  где не пишет — одна строка «от — до» и размеры в `notes`; цены
  «od X €» — как «от»; услуги не из стандарта (стоматология, УЗИ,
  паспорт, кастрация кобеля) не переносились.
- `review-insights/<slug>.json` — сводки отзывов (`docs/playbooks/review-insights.md`).
- `districts.geojson` — полигоны районов (`website/scripts/fetch-districts.ts`).
