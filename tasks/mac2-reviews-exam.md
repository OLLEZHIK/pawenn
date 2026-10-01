# Задача: экзамен по отзывам Google — 7 мест Прешова (вслепую), Mac 2

**Исполнитель:** Antigravity (Mac 2).
**Роль:** Data agent.
**Тип:** экзамен, 7 мест, один draft PR (не мержится).
**Ветка PR:** `main` (draft).
**Зависимости:** эталон CLI (`tasks/cmac-reviews-exam-reference.md`) —
ветка `cmac/reviews-exam-reference` на GitHub.

**Сейчас (проверяющий, 2026-10-01):** эталон CLI готов (ветку `cmac/reviews-exam-reference` **не открывать**). Сделать **первой**, все 7 мест, не позже 2026-10-04.

Владелец (2026-10-01) хочет знать, может ли Antigravity собирать ленты
отзывов Google. Экзамен по карте ты сдал (PR #234, #236). Как устроен
этот — `docs/pc-agents/reviews-exam.md`.

## Места (Prešov, Google Maps)

1. Veteris s.r.o.
2. Chovateľské potreby Šťastná labka
3. Aqua Služby Dorko
4. Salón pre psov LEO
5. MP-salón pre psov s.r.o
6. Veterinárna nemocnica Dúbrava
7. Super Zoo OC Prešov

## Что сделать

1. Ветка `mac2/reviews-exam-presov` от свежего `main`. **Не открывать**
   ветку `cmac/reviews-exam-reference` и файл
   `presov-reviews-reference.json` — экзамен вслепую.
2. Файл `data/exams/presov-reviews-mac2.json` — формат из
   `docs/pc-agents/reviews-exam.md`: все отзывы **с текстом** за 24
   месяца, сортировка «Najnovšie» (сверху новые), по каждому `ago`
   копией, `months`, `stars`. Поля `logged_in` (вошёл ли в Google) и
   `sort` (какая сортировка была включена) — честно.
3. Не видно всех отзывов или нельзя включить сортировку — записать то,
   что видно, и написать об этом в PR. Не дописывать «по памяти».
4. Draft PR в `main`: `[экзамен] отзывы Google — Prešov (Mac 2)`, раздел
   `## Отчёт о возможностях`: инструмент, вход в Google, что мешало,
   время.

## Чего не делать

- Не копировать тексты и имена авторов отзывов.
- Не заглядывать в эталон.
- Не трогать другие файлы.

У мест 6 и 7 — десятки отзывов за 24 месяца: пролистать список до
конца (до отзывов «pred 2 rokmi»), не останавливаться на первой
загрузке. Сколько записей видно — столько и записать.
