# Задача: польский язык, шаг 1 — карта ключевых слов

**Исполнитель:** Antigravity IDE
**Роль:** Research agent.
**Тип:** исследование, объём средний (≈ 110 запросов).
**Ветка:** `antigravity/keywords-pl`
**Зависимости:** нет.

Решение владельца (2026-09-27): вторая страна — **Польша**, язык
`pl`. Порядок — `docs/playbooks/add-language.md` §1: этот шаг первый,
от него зависят адреса страниц и заголовки. Первый польский город —
**Warszawa** (город в запросах); результат — шаблон для всех польских
городов.

## Что сделать

По методике `docs/seo/keywords/README.md` создать
**`docs/seo/keywords/pl.md`** по образцу `sk.md` (та же структура:
категории, признаки ветклиник, цены, «на будущее»):

1. Варианты запросов на польском для 6 категорий (например
   «weterynarz Warszawa», «gabinet weterynaryjny», «lecznica dla
   zwierząt», «groomer / strzyżenie psów», «hotel dla psów», «szkolenie
   psów», «sklep zoologiczny», «opieka nad psem / wyprowadzanie psów»),
   для признаков («weterynarz całodobowy», «weterynarz w niedzielę»,
   «weterynarz egzotyczny», «weterynarz z dojazdem») и 6 услуг цен
   каждой категории («kastracja kota cena», «szczepienie psa cena»…).
2. Цифры: Keyword Planner (Польша, польский), если есть доступ; Google
   Trends (Польша); подсказки google.pl. Без доступа — `—` и причина
   (`quality.md`, правила 1–2). Районы не исследовать.
3. Колонка «Решение»: главный / второй / нет.
4. **В конце файла — предложение слагов** (адресов) на польском, без
   диакритики, по главным вариантам:
   - 6 категорий (как `psi-salon`, `veterinar`…);
   - сегменты `podnik` → ?, `mesto` → ?, `ceny` → ?;
   - 5 признаков ветклиник (`nonstop`, `sobota`, `nedela`,
     `exoticke-zvierata`, `vyjazd-domov`, `po-anglicky` → польские);
   - 36 услуг цен (как в `website/lib/priceSlugs.ts`).

## Готово, когда

- **PR открыт**; `docs/seo/keywords/pl.md` заполнен, в начале — дата и
  какие источники были доступны.
- Самопроверка `quality.md` (§2) в PR.
- Код сайта не тронут.
