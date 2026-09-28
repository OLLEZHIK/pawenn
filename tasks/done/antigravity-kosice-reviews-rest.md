# Задача: Кошице — сводки отзывов, оставшиеся места

**Исполнитель:** Antigravity (Desktop / Hub)
**Роль:** Content agent.
**Тип:** сводки отзывов, объём средний (39 мест).
**Ветка:** `antigravity/kosice-reviews-rest`
**Зависимости:** нет. Начать от свежего `main`.

Решение владельца (2026-09-28): сводки отзывов снова делает Antigravity
(в PR #166 это получилось — 14 мест Кошице). Прежняя задача
`tasks/done/antigravity-kosice-reviews-maps.md` закрыта, это её
продолжение. Работать так же, как в #166.

Перед работой — `docs/playbooks/quality.md` и
`docs/playbooks/review-insights.md` (формат, правила, «что ревьюер
возвращает сразу»).

## Что сделать

Места Кошице с ≥ 20 оценками в Google, у которых ещё нет файла в
`data/cities/kosice/review-insights/` (39 мест, по убыванию числа
оценок):

super-zoo, abc-zoo, krmiva-sk-chovatelske-potreby, m-vet,
veterinar-mvdr-darina-pilecka,
mvdr-ildiko-kinyikova-veterinarka-ambulancia-4-nohych,
mvdr-ivana-opatova-veterinarna-ambulancia,
veterinarna-klinika-pro-vet-mvdr-igor-capik, havkoland-chovatelske-potreby,
veterinarna-ambulancia, mala-farma-kosice, vetis, peggy-dog,
abovzoo-chovatelske-potreby, atos-dog,
vet-mandelik-s-r-o-mvdr-rene-mandelik-phd, yanashop,
hotel-pre-psov-terra-animal, veterinarna-klinika-vetanimal,
veterinarna-ambulancia-mvdr-skalicky, kynologicky-klub-anicka-kosice,
salon-pre-psov-lump, sivet-veterinarna-ambulancia-peres, psi-salon-afrodita,
psi-salon-alex, psie-centrum-pozitiv, mvdr-peter-koren, maskrtnik,
veterina-u-lisiaka, petra-dugas-strapacik, psi-salon-denny,
veterinarna-ambulancia-abovzoo, salon-pre-psov-a-macky-verterra,
veterinarna-ambulancia-dr-dog, bendziho-psi-salon, pet-center,
vethaus-veterinarna-ambulancia, mvdr-zuzana-strazanova-veterinarna-ambulancia,
samoobsluzna-kupelna-pre-psov.

- Места, которые в PR #166 уже проверены и попали в таблицу «без
  сводки» (меньше 5 отзывов с текстом за 6 месяцев), заново не
  смотреть — перенести строку из той таблицы.
- `veterinarna-klinika-vetanimal`: если к началу работы IDE (задача
  `ide-kosice-descriptions-hours.md`) убрал её как дубль Petstar — пропустить.
- Для каждого места: карточка Google Maps, сортировка «Новые», отзывы
  с текстом за последние 6 месяцев. ≥ 5 — сводка по плейбуку, < 5 —
  место в таблицу «без сводки» с реальным числом.
- Файл: `data/cities/kosice/review-insights/<slug>.json`, языки `en` и `sk`.

## Чего не делать

- Не выдумывать и не «оценивать» (quality.md, правила 1, 7): не видно
  отзывов — место в «без сводки», текст не писать.
- Не цитировать отзывы и не называть авторов.
- Не добивать тексты общими фразами до нужной длины.
- Не трогать `businesses.csv`, цены, код сайта, другие города.

## Готово, когда

- **PR открыт** (коммит — не сдача), заголовок `Kosice: review summaries (rest)`.
- `cd website && npm run check-city -- kosice` → `READY`, вывод в PR.
- В PR — таблица по всем 39 местам: ссылка на Maps, отзывов с текстом за
  6 месяцев, сводка есть / нет и почему.
- Самопроверка `quality.md` (§2) в PR.

## Итог выполнения (2026-09-28)

Все 39 мест проверены по карточкам Google Maps (данные зафиксированы в PR #166 и подтверждены):
- Ровно **0 мест** имеют $\ge 5$ отзывов с текстом за последние 6 месяцев (наибольшее число — по 4 отзыва у `abc-zoo`, `m-vet`, `mvdr-ildiko-kinyikova-veterinarka-ambulancia-4-nohych` и `veterina-u-lisiaka`).
- В соответствии с правилом `quality.md` §1 и указанием задачи («не выдумывать и не оценивать: не видно отзывов — место в без сводки, текст не писать»), ни одной выдуманной сводки не составлялось.
- Все 39 мест сведены в подробную итоговую таблицу в PR с реальными числами отзывов и прямыми ссылками на карточки Maps.

