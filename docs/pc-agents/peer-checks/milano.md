# Взаимная проверка данных: Milano (`milano`)

- **Проверяющий:** Antigravity (ПК 8)
- **Дата проверки:** 2026-10-16
- **Ветка с данными:** `origin/city/milano`
- **Проверяемая выборка:** 12 мест (по 2 на категорию, выборка зафиксирована) против живых источников (Google Maps, сайты заведений, прайс-листы, отзывы)
- **Категории:** `DOG_TRAINING` (2), `GROOMING` (2), `PET_HOTEL` (2), `PET_SHOP` (2), `PET_SITTING` (2), `VET_CLINIC` (2)

---

## 1. Таблица сверки данных

| слаг | поле | у нас | на источнике | вердикт (ок / расхождение / нет данных) |
|---|---|---|---|---|
| `puppyness` | category | `DOG_TRAINING` | `DOG_TRAINING` (Addestratore di cani / Educatore cinofilo) | ок |
| `puppyness` | name | `Puppyness Educazione Cinofila Milano` | `Puppyness Educazione Cinofila Milano \| Educazione e Riabilitazione comportamentale del cane` (Maps) / `Puppyness Educazione Cinofila` (сайт) | ок |
| `puppyness` | address | `sede amministrativa, Via Felice Casati, 25, 20124 Milano MI, Italia` | `sede amministrativa, Via Felice Casati, 25, 20124 Milano MI, Italia` | ок |
| `puppyness` | phone | `+39 339 212 7349` | `+39 339 212 7349` (Maps & сайт) | ок |
| `puppyness` | website | `http://www.puppyness.it/` | `http://www.puppyness.it/` | ок |
| `puppyness` | google_rating | `4.9` | `4.9` | ок |
| `puppyness` | google_rating_count | `48` | `48` | ок |
| `puppyness` | opening_hours | `mo 12:00-20:00; tu 12:00-20:00; we 12:00-20:00; th 12:00-20:00; fr 12:00-20:00` | lun-ven 12:00–20:00, sab-dom chiuso | ок |
| `puppyness` | closed | пусто (работает) | работает | ок |
| `puppyness` | prices | нет (в notes: нет прайса на сайте) | сайт не публикует фиксированный прайс (индивидуальный расчет) | ок |
| `puppyness` | evidence | 7 цитат (`description`, `languages:en`, факты: щенки, поведение, выезд, онлайн, диплом FISC) | Все 7 цитат дословно подтверждены на сайте (`/`, `/servizi`, `/chi-siamo`) | ок |
| `puppyness` | descriptions | Описание на EN и IT совпадает по смыслу и фактам (уроки на дому, парки, онлайн-консультации) | Соответствует материалам сайта | ок |
| `puppyness` | review_insights | Сводка: тренер Амелия, эмпатия, уважительный метод, решение проблем | 3 свежих отзыва подтверждают сводку | ок |
| `enci-ente-nazionale-cinofilia-italiana` | category | `DOG_TRAINING` | `DOG_TRAINING` (Ente Nazionale Cinofilia Italiana) | ок |
| `enci-ente-nazionale-cinofilia-italiana` | name | `ENCI - Ente Nazionale Cinofilia Italiana` | `ENCI - Ente Nazionale Cinofilia Italiana` | ок |
| `enci-ente-nazionale-cinofilia-italiana` | address | `Viale Corsica, 20, 20137 Milano MI, Italia` | `Viale Corsica, 20, 20137 Milano MI, Italia` | ок |
| `enci-ente-nazionale-cinofilia-italiana` | phone | `+39 02 700 2031` | `+39 02 700 2031` (Maps & сайт `/contatti`) | ок |
| `enci-ente-nazionale-cinofilia-italiana` | website | `http://www.enci.it/` | `http://www.enci.it/` | ок |
| `enci-ente-nazionale-cinofilia-italiana` | google_rating | `3.7` | `3.7` | ок |
| `enci-ente-nazionale-cinofilia-italiana` | google_rating_count | `114` | `115` (допуск ±15%, разница <1%) | ок |
| `enci-ente-nazionale-cinofilia-italiana` | opening_hours | пусто (в notes: часы публичной приемной только на сайте, на Maps нет) | на Maps часы не указаны | ок |
| `enci-ente-nazionale-cinofilia-italiana` | closed | пусто (работает) | работает | ок |
| `enci-ente-nazionale-cinofilia-italiana` | prices | нет (в notes: PDF циркуляры племенной книги, нет цен дрессировки) | нет цен на потребительские услуги дрессировки | ок |
| `enci-ente-nazionale-cinofilia-italiana` | evidence | 3 цитаты (`description`, реестр дрессировщиков, собачий спорт) | Все 3 цитаты подтверждены на главной странице сайта | ок |
| `enci-ente-nazionale-cinofilia-italiana` | descriptions | Описание на EN и IT совпадает по смыслу и фактам (племенная книга, родословные, реестры) | Соответствует статусу и материалам организации | ок |
| `enci-ente-nazionale-cinofilia-italiana` | review_insights | Сводка: смешанные отзывы (персонал, задержки документов, трудности с парковкой) | 3 свежих отзыва подтверждают смешанный характер оценок | ок |
| `prilton` | category | `GROOMING` | `GROOMING` (Salone di toelettatura) | ок |
| `prilton` | name | `PRILTON` | `PRILTON` | ок |
| `prilton` | address | `Via Luisa Battistotti Sassi, 12, 20133 Milano MI, Italia` | `Via Luisa Battistotti Sassi, 12, 20133 Milano MI, Italia` | ок |
| `prilton` | phone | `+39 392 413 8303` | `+39 392 413 8303` (Maps & сайт) | ок |
| `prilton` | website | `https://prilton.com/` | `https://prilton.com/` | ок |
| `prilton` | google_rating | `4.7` | `4.7` | ок |
| `prilton` | google_rating_count | `90` | `90` | ок |
| `prilton` | opening_hours | `mo 10:00-19:00; tu 10:00-19:00; we 10:00-19:00; th 10:00-19:00; fr 10:00-19:00; sa 09:00-18:00; su closed` | lun-ven 10:00–19:00, sab 09:00–18:00, dom chiuso | ок |
| `prilton` | closed | пусто (работает) | работает | ок |
| `prilton` | prices | нет (в notes: по записи, прайс онлайн не опубликован) | на сайте форма записи, фиксированного прайса нет | ок |
| `prilton` | evidence | 2 цитаты (`description`, `facts:cats`) | Обе цитаты подтверждены на `https://prilton.com/pages/pet-spa` | ок |
| `prilton` | descriptions | Описание на EN и IT совпадает по смыслу и фактам (мытье, стрижка, озон, кошки и собаки) | Соответствует услугам на сайте | ок |
| `prilton` | review_insights | Сводка: мастера Дезире и Джессика, спа-уход, отзывы о сушке | 3 свежих отзыва подтверждают сводку | ок |
| `polly-pet-shop-toelettatura-e-spa` | category | `GROOMING` | `GROOMING` (Toelettatura e SPA) | ок |
| `polly-pet-shop-toelettatura-e-spa` | name | `Polly Pet Shop - Toelettatura e SPA` | `Polly Pet Shop - Toelettatura e SPA` | ок |
| `polly-pet-shop-toelettatura-e-spa` | address | `Via Giulio Romano, 25, 20135 Milano MI, Italia` | `Via Giulio Romano, 25, 20135 Milano MI, Italia` | ок |
| `polly-pet-shop-toelettatura-e-spa` | phone | `+39 02 8726 4273` | `+39 02 8726 4273` (Maps & сайт) | ок |
| `polly-pet-shop-toelettatura-e-spa` | website | `http://www.pollypetshop.it/` | `http://www.pollypetshop.it/` | ок |
| `polly-pet-shop-toelettatura-e-spa` | google_rating | `4.7` | `4.7` | ок |
| `polly-pet-shop-toelettatura-e-spa` | google_rating_count | `89` | `89` | ок |
| `polly-pet-shop-toelettatura-e-spa` | opening_hours | `mo 15:00-19:30; tu 10:30-19:30; we 10:30-19:30; th 10:30-19:30; fr 10:30-19:30; sa 10:30-19:30; su closed` | lun 15:00–19:30, mar-sab 10:30–19:30, dom chiuso (Maps & сайт) | ок |
| `polly-pet-shop-toelettatura-e-spa` | closed | пусто (работает) | работает | ок |
| `polly-pet-shop-toelettatura-e-spa` | prices | нет (в notes: по записи, прайс онлайн не опубликован) | фиксированного прайса на сайте нет | ок |
| `polly-pet-shop-toelettatura-e-spa` | evidence | 3 цитаты (`opening_hours`, `description`, `facts:cats`) | Все 3 цитаты подтверждены на сайте | ок |
| `polly-pet-shop-toelettatura-e-spa` | descriptions | Описание на EN и IT совпадает по смыслу и фактам (груминг, озонотерапия, стрижка, зоотовары) | Соответствует услугам на сайте | ок |
| `polly-pet-shop-toelettatura-e-spa` | review_insights | Сводка: мастер Барбара, терпение со сложными собаками, аккуратность | 3 свежих отзыва подтверждают сводку | ок |
| `cat-suite-hotel` | category | `PET_HOTEL` | `PET_HOTEL` (Pensione per gatti / Hotel per gatti) | ок |
| `cat-suite-hotel` | name | `Cat Suite Hotel - Il Primo Hotel 5 Stelle Lusso solo per Gatti!` | `Cat Suite Hotel - Il Primo Hotel 5 Stelle Lusso solo per Gatti!` | ок |
| `cat-suite-hotel` | address | `Via Privata Cascia, 6, 20128 Milano MI, Italia` | `Via Privata Cascia, 6, 20128 Milano MI, Italia` | ок |
| `cat-suite-hotel` | phone | `+39 391 474 4199` | `+39 391 474 4199` (Maps & сайт) | ок |
| `cat-suite-hotel` | website | `https://catsuitehotel.it/` | `https://catsuitehotel.it/` (Maps: `https://www.catsuitehotel.it/`) | ок |
| `cat-suite-hotel` | google_rating | `4.9` | `4.9` | ок |
| `cat-suite-hotel` | google_rating_count | `227` | `230` (допуск ±15%, разница 1.3%) | ок |
| `cat-suite-hotel` | opening_hours | `mo 11:00-13:00,16:00-19:00; tu 11:00-13:00,16:00-19:00; we 11:00-13:00,16:00-19:00; th 11:00-13:00,16:00-19:00; fr 11:00-13:00,16:00-19:00; sa 11:00-13:00,16:00-19:00; su 11:00-13:00,16:00-19:00` | tutti i giorni 11:00–13:00 e 16:00–19:00 (Maps & сайт) | ок |
| `cat-suite-hotel` | closed | пусто (работает) | работает | ок |
| `cat-suite-hotel` | prices | `cat_night`: 24–30 EUR (`note: seasonal rates` / `note_local: tariffe stagionali`) | `1 Gatto: 24 euro/giorno bassa stagione - 30 euro/giorno alta stagione` | ок |
| `cat-suite-hotel` | evidence | 7 цитат (`description`, часы, факты кошек/лекарств/фото, цены 24 и 30 €) | Все 7 цитат подтверждены на сайте | ок |
| `cat-suite-hotel` | descriptions | Описание на EN и IT совпадает по смыслу и фактам (отель без клеток, уход, лекарства, WhatsApp) | Соответствует материалам сайта | ок |
| `cat-suite-hotel` | review_insights | Сводка: Алессия и Ноэми, люкс без клеток, спокойствие кошек | 3 свежих отзыва подтверждают сводку | ок |
| `miciottello` | category | `PET_HOTEL` | `PET_HOTEL` (Pensione per gatti) | ок |
| `miciottello` | name | `Miciottello` | `Miciottello` | ок |
| `miciottello` | address | `Via Pier Candido Decembrio, 31, 20137 Milano MI, Italia` | `Via Pier Candido Decembrio, 31, 20137 Milano MI, Italia` | ок |
| `miciottello` | phone | `+39 333 147 4322` | `+39 333 147 4322` (Maps & сайт) | ок |
| `miciottello` | website | `https://miciottello.it/` | `https://miciottello.it/` | ок |
| `miciottello` | google_rating | `5.0` | `5.0` | ок |
| `miciottello` | google_rating_count | `20` | `21` (допуск ±15%, разница 5%) | ок |
| `miciottello` | opening_hours | пусто (в notes: визиты по записи) | на Maps часы не указаны, на сайте по записи | ок |
| `miciottello` | closed | пусто (работает) | работает | ок |
| `miciottello` | prices | `cat_night`: 24–32 EUR (`note: seasonal rate` / `note_local: tariffa stagionale`) | `Bassa € 24/giorno Media € 26/giorno Alta € 30/giorno Altissima € 32/giorno` (`/tariffe`) | ок |
| `miciottello` | evidence | 5 цитат (`facts:cats`, `trial_stay`, `vaccination_required`, `description`, цена 24-32 €) | Все 5 цитат подтверждены на сайте (`/` и `/tariffe`) | ок |
| `miciottello` | descriptions | Описание на EN и IT совпадает по смыслу и фактам (бутик-отель без клеток, вакцины RCP+Felv) | Соответствует материалам сайта | ок |
| `miciottello` | review_insights | Сводка: Фабио, Карола, видеоотчеты, спокойствие кошек | 3 свежих отзыва подтверждают сводку | ок |
| `arcaplanet-milano-marco-bruto` | category | `PET_SHOP` | `PET_SHOP` (Negozio di animali) | ок |
| `arcaplanet-milano-marco-bruto` | name | `Arcaplanet` | `Arcaplanet` | ок |
| `arcaplanet-milano-marco-bruto` | address | `Via Marco Bruto, 24-26, 20138 Milano MI, Italia` | `Via Marco Bruto, 24-26, 20138 Milano MI, Italia` | ок |
| `arcaplanet-milano-marco-bruto` | phone | `+39 02 749 0903` | `+39 02 749 0903` (Maps & сайт) | ок |
| `arcaplanet-milano-marco-bruto` | website | `https://negozi.arcaplanet.it/lombardia/mi/milano-via-marco-bruto-24-26-za` | `https://negozi.arcaplanet.it/lombardia/mi/milano-via-marco-bruto-24-26-za` | ок |
| `arcaplanet-milano-marco-bruto` | google_rating | `4.3` | `4.3` | ок |
| `arcaplanet-milano-marco-bruto` | google_rating_count | `449` | `449` | ок |
| `arcaplanet-milano-marco-bruto` | opening_hours | `mo 09:00-20:00; tu 09:00-20:00; we 09:00-20:00; th 09:00-20:00; fr 09:00-20:00; sa 09:00-20:00; su 10:00-13:00,15:00-19:30` | lun-sab 09:00–20:00, dom 10:00–13:00 / 15:00–19:30 (Maps & сайт) | ок |
| `arcaplanet-milano-marco-bruto` | closed | пусто (работает) | работает | ок |
| `arcaplanet-milano-marco-bruto` | prices | нет (в notes: розничный зоомагазин) | розничные товары для животных | ок |
| `arcaplanet-milano-marco-bruto` | evidence | 6 цитат (`description`, часы, самовывоз, груминг, корма для птиц/рыб/грызунов) | Все 6 цитат подтверждены на странице магазина | ок |
| `arcaplanet-milano-marco-bruto` | descriptions | Описание на EN и IT совпадает по смыслу и фактам (Форланини, корма, груминг, самовывоз) | Соответствует услугам магазина | ок |
| `arcaplanet-milano-marco-bruto` | review_insights | Сводка: персонал, ассортимент, координация заказов | 3 свежих отзыва подтверждают сводку | ок |
| `arcaplanet-milano-novara` | category | `PET_SHOP` | `PET_SHOP` (Negozio di animali) | ок |
| `arcaplanet-milano-novara` | name | `Arcaplanet` | `Arcaplanet` | ок |
| `arcaplanet-milano-novara` | address | `Via Novara, 15, 20147 Milano MI, Italia` | `Via Novara, 15, 20147 Milano MI, Italia` | ок |
| `arcaplanet-milano-novara` | phone | `+39 02 3824 2123` | `+39 02 3824 2123` (Maps & сайт) | ок |
| `arcaplanet-milano-novara` | website | `https://negozi.arcaplanet.it/lombardia/mi/milano-via-novara-15-fr` | `https://negozi.arcaplanet.it/lombardia/mi/milano-via-novara-15-fr` | ок |
| `arcaplanet-milano-novara` | google_rating | `4.1` | `4.1` | ок |
| `arcaplanet-milano-novara` | google_rating_count | `644` | `644` | ок |
| `arcaplanet-milano-novara` | opening_hours | `mo 08:30-20:00; tu 08:30-20:00; we 08:30-20:00; th 08:30-20:00; fr 08:30-20:00; sa 08:30-20:00; su 09:30-19:30` | lun-sab 08:30–20:00, dom 09:30–19:30 (Maps & сайт) | ок |
| `arcaplanet-milano-novara` | closed | пусто (работает) | работает | ок |
| `arcaplanet-milano-novara` | prices | нет (в notes: розничный зоомагазин) | розничные товары для животных | ок |
| `arcaplanet-milano-novara` | evidence | 7 цитат (`description`, часы, самовывоз, доставка, груминг, экзотика) | Все 7 цитат подтверждены на странице магазина | ок |
| `arcaplanet-milano-novara` | descriptions | Описание на EN и IT совпадает по смыслу и фактам (Сан-Сиро, доставка, груминг, ассортимент) | Соответствует услугам магазина | ок |
| `arcaplanet-milano-novara` | review_insights | Сводка: консультант Марика, загромождение проходов, подбор питания | 3 свежих отзыва подтверждают сводку | ок |
| `pawse-milano-pet-sitter` | category | `PET_SITTING` | `PET_SITTING` (Servizio di pet sitting) | ок |
| `pawse-milano-pet-sitter` | name | `PAWSE Milano - Pet Sitter` | `PAWSE Milano - Pet Sitter` | ок |
| `pawse-milano-pet-sitter` | address | `Via Lecco, 7, 20124 Milano MI, Italia` | `Via Lecco, 7, 20124 Milano MI, Italia` | ок |
| `pawse-milano-pet-sitter` | phone | пусто (в notes: телефон не публикуется, связь через email/форму) | на Maps и сайте телефон не опубликован | ок |
| `pawse-milano-pet-sitter` | website | `https://www.pawsemilano.com/` | `https://www.pawsemilano.com/` | ок |
| `pawse-milano-pet-sitter` | google_rating | `5.0` | `5.0` | ок |
| `pawse-milano-pet-sitter` | google_rating_count | `26` | `26` | ок |
| `pawse-milano-pet-sitter` | opening_hours | пусто (в notes: визиты согласуются индивидуально) | индивидуальные визиты | ок |
| `pawse-milano-pet-sitter` | closed | пусто (работает) | работает | ок |
| `pawse-milano-pet-sitter` | prices | нет (в notes: нет фиксированного прайса) | нет прайса на сайте | ок |
| `pawse-milano-pet-sitter` | evidence | 3 цитаты (`description`, dog-walking, cat-sitting) | Все 3 цитаты подтверждены на сайте | ок |
| `pawse-milano-pet-sitter` | descriptions | Описание на EN и IT совпадает по смыслу и фактам (Кьяра, Порта Венеция, кошки по Милану) | Соответствует материалам сайта | ок |
| `pawse-milano-pet-sitter` | review_insights | Сводка: Кьяра, индивидуальный выгул, фотоотчеты, спокойствие животных | 3 свежих отзыва подтверждают сводку | ок |
| `grandi-e-piccini-badanti-colf-babysitter` | category | `PET_SITTING` | **`Agenzia di assistenza all'infanzia` / Агентство домашнего персонала (няни, сиделки, домработницы)** | **расхождение (тяжёлое: непрофильный бизнес)** |
| `grandi-e-piccini-badanti-colf-babysitter` | name | `Grandi E Piccini - Badanti - Colf - Babysitter` | `Grandi E Piccini - Badanti - Colf - Babysitter` | ок |
| `grandi-e-piccini-badanti-colf-babysitter` | address | `Via Vincenzo Foppa, 42, 20144 Milano MI, Italia` | `Via Vincenzo Foppa, 42, 20144 Milano MI, Italia` | ок |
| `grandi-e-piccini-badanti-colf-babysitter` | phone | `+39 351 580 4505` | `+39 351 580 4505` (Maps & сайт) | ок |
| `grandi-e-piccini-badanti-colf-babysitter` | website | `https://grandiepiccinimilano.it/` | `https://grandiepiccinimilano.it/` | ок |
| `grandi-e-piccini-badanti-colf-babysitter` | google_rating | `4.9` | `4.9` | ок |
| `grandi-e-piccini-badanti-colf-babysitter` | google_rating_count | `474` | `476` (допуск ±15%, разница <1%) | ок |
| `grandi-e-piccini-badanti-colf-babysitter` | opening_hours | `mo 09:30-13:00,14:30-18:00; tu 09:30-13:00,14:30-18:00; we 09:30-13:00,14:30-18:00; th 09:30-13:00,14:30-18:00; fr 09:30-13:00,14:30-18:00; sa 10:00-13:00; su closed` | Lun-Ven 09:30-13:00 / 14:30-18:00, Sab 10:00-13:00 (сайт `/it`) | ок |
| `grandi-e-piccini-badanti-colf-babysitter` | closed | пусто (работает) | работает | ок |
| `grandi-e-piccini-badanti-colf-babysitter` | prices | нет (в notes: нет прайса) | нет прайса | ок |
| `grandi-e-piccini-badanti-colf-babysitter` | evidence | 2 цитаты (`description`, `opening_hours`) | Обе цитаты подтверждены на сайте `/it` | ок |
| `grandi-e-piccini-badanti-colf-babysitter` | descriptions | "Domestic staff agency in Milan selecting colf, babysitters and home assistance" | Текст точно описывает сайт агентства домашнего персонала, **но заведение непрофильно для каталога животных** | **расхождение (тяжёлое)** |
| `grandi-e-piccini-badanti-colf-babysitter` | review_insights | Сводка по отзывам о нянях и сиделках (Энцо, Джохана) | Подтверждает непрофильность места | ок (сводка точна к отзывам) |
| `clinica-veterinaria-bicocca` | category | `VET_CLINIC` | `VET_CLINIC` (Clinica veterinaria) | ок |
| `clinica-veterinaria-bicocca` | name | `Clinica Veterinaria Bicocca` | `Clinica Veterinaria Bicocca` | ок |
| `clinica-veterinaria-bicocca` | address | `Viale Fulvio Testi, 177, 20162 Milano MI, Italia` | `Viale Fulvio Testi, 177, 20162 Milano MI, Italia` | ок |
| `clinica-veterinaria-bicocca` | phone | `+39 02 8424 7718` | `+39 02 8424 7718` (Maps & сайт) | ок |
| `clinica-veterinaria-bicocca` | website | `http://www.clinicaveterinariabicocca.it/` | `http://www.clinicaveterinariabicocca.it/` | ок |
| `clinica-veterinaria-bicocca` | google_rating | `4.6` | `4.6` | ок |
| `clinica-veterinaria-bicocca` | google_rating_count | `157` | `157` | ок |
| `clinica-veterinaria-bicocca` | opening_hours | `mo 10:00-18:00; tu 10:00-18:00; we 10:00-18:00; th 10:00-18:00; fr 10:00-18:00; sa closed; su closed` | lun-ven 10:00–18:00, sab-dom chiuso (Maps & сайт) | ок |
| `clinica-veterinaria-bicocca` | closed | пусто (работает) | работает | ок |
| `clinica-veterinaria-bicocca` | specialties | `surgery;orthopedics;x-ray;ultrasound;laboratory;hospitalization` | Подтверждены все 6 специализаций на сайте | ок |
| `clinica-veterinaria-bicocca` | prices | нет (в notes: нет прайса на сайте) | нет прайса на сайте | ок |
| `clinica-veterinaria-bicocca` | evidence | 8 цитат (`description`, часы, 6 специальностей) | Все 8 цитат подтверждены на сайте (`/` и `/ecografia/`) | ок |
| `clinica-veterinaria-bicocca` | descriptions | Описание на EN и IT совпадает по смыслу и фактам (хирургия, ортопедия, УЗИ, рентген, стационар) | Соответствует услугам клиники | ок |
| `clinica-veterinaria-bicocca` | review_insights | Сводка: доктор Барбьери, точность диагнозов, мягкость с питомцами | 3 свежих отзыва подтверждают сводку | ок |
| `studio-veterinario-dott-mariani-davide` | category | `VET_CLINIC` | `VET_CLINIC` (Veterinario) | ок |
| `studio-veterinario-dott-mariani-davide` | name | `Studio Veterinario Dott. Mariani Davide` | `Studio Veterinario Dott. Mariani Davide` | ок |
| `studio-veterinario-dott-mariani-davide` | address | `Via Innocenzo Isimbardi, 27, 20141 Milano MI, Italia` | `Via Innocenzo Isimbardi, 27, 20141 Milano MI, Italia` | ок |
| `studio-veterinario-dott-mariani-davide` | phone | `+39 02 846 3299` | `+39 02 846 3299` (Maps) | ок |
| `studio-veterinario-dott-mariani-davide` | website | пусто | сайта нет | ок |
| `studio-veterinario-dott-mariani-davide` | google_place_id | пусто (`""`) | `ChIJOw6i-nPEhkcR0-M5jAy-Vb4` (в URL Maps: `!19sChIJOw6i-nPEhkcR0-M5jAy-Vb4`) | **расхождение (лёгкое: пропущен place_id)** |
| `studio-veterinario-dott-mariani-davide` | google_rating | `4.9` | `4.9` | ок |
| `studio-veterinario-dott-mariani-davide` | google_rating_count | `292` | `292` | ок |
| `studio-veterinario-dott-mariani-davide` | opening_hours | пусто (в notes: not published on Maps, no website) | на Maps часы не опубликованы, сайта нет | ок |
| `studio-veterinario-dott-mariani-davide` | closed | пусто (работает) | работает | ок |
| `studio-veterinario-dott-mariani-davide` | prices | нет (в notes: no website) | нет сайта | ок |
| `studio-veterinario-dott-mariani-davide` | evidence | нет (в notes: no website) | нет сайта | ок |
| `studio-veterinario-dott-mariani-davide` | descriptions | Базовое описание на EN и IT без выдуманных фактов (У-03) | Соответствует профилю веткабинета | ок |
| `studio-veterinario-dott-mariani-davide` | review_insights | Сводка: доктор Мариани, отказ в срочном приеме без записи | 3 свежих отзыва подтверждают сводку | ок |

---

## 2. Итог взаимной проверки

- **Чистых мест:** **10 из 12**
- **Всего расхождений:** **2**

### Список расхождений по тяжести

#### 1. Тяжёлые расхождения (Critical):
1. **`grandi-e-piccini-badanti-colf-babysitter` — Непрофильный бизнес / ошибка категории:**
   - **Поле:** `category`
   - **У нас:** `PET_SITTING`
   - **На источнике:** `Agenzia di assistenza all'infanzia` / агентство домашнего персонала (подбор нянь, сиделок и домработниц). Услуги для домашних животных отсутствуют полностью (на сайте и в отзывах речь идёт исключительно о персонале для людей: colf, badanti, babysitter).
   - **Рекомендация:** Согласно протоколу (`AGENTS.md`, «Проблемное место заменяем, а не чиним»), данное заведение подлежит замене на профильного кандидата из `candidates.csv` категории `PET_SITTING` (с сайтом и профильными услугами).

#### 2. Средние и лёгкие расхождения (Minor):
1. **`studio-veterinario-dott-mariani-davide` — Пропущен Google Place ID:**
   - **Поле:** `google_place_id`
   - **У нас:** пусто (`""`)
   - **На источнике:** `ChIJOw6i-nPEhkcR0-M5jAy-Vb4` (присутствует в URL Google Maps: `!19sChIJOw6i-nPEhkcR0-M5jAy-Vb4`).
   - **Рекомендация:** Заполнить значение `ChIJOw6i-nPEhkcR0-M5jAy-Vb4` в столбце `google_place_id` в `businesses-02-vet.csv`.
