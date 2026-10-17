# Проверка напарника: Glasgow (выборка из 11 мест)

- **Город:** Glasgow (`glasgow`)
- **Проверяющий:** Antigravity (ПК 12)
- **Дата проверки:** 2026-10-16
- **Ветка данных:** `origin/city/glasgow`
- **Объём выборки:** 11 мест (зафиксированная выборка по категориям: DOG_TRAINING: 2, GROOMING: 2, PET_HOTEL: 2, PET_SHOP: 2, PET_SITTING: 1, VET_CLINIC: 2)

---

## Таблица сверки данных с живыми источниками

| слаг | поле | у нас | на источнике | вердикт |
|---|---|---|---|---|
| `my-kanine-services` | name | My Kanine Services | My Kanine Services | ок |
| `my-kanine-services` | address | Unit 16, Roadway One, 37 Rosyth Rd, Glasgow G5 0YD, United Kingdom | 37 Rosyth Rd, Glasgow G5 0YD, United Kingdom (Google Maps; сайт: Unit 16, Roadway One, 37 Rosyth Rd) | ок |
| `my-kanine-services` | phone | +44 7359 546583 | +44 7359 546583 (Google Maps, сайт) | ок |
| `my-kanine-services` | google_rating / count | 5.0 (79) | 5.0 (79) (Google Maps) | ок |
| `my-kanine-services` | opening_hours | mo 09:00-17:00; tu 09:00-17:00; we 09:00-17:00; th 09:00-17:00; fr 09:00-17:00; sa 09:00-17:00; su closed | пн–сб 09:00–17:00, вс закрыто (Google Maps) | ок |
| `my-kanine-services` | status (closed) | открыто (closed='') | открыто (Closed · Opens 9 am Sat) | ок |
| `my-kanine-services` | website | https://mykanineservices.com/ | https://mykanineservices.com/ | ок |
| `my-kanine-services` | prices | нет (в notes: contact form/call for tailored advice, no prices published) | на сайте открытого прайс-листа нет (индивидуальный расчёт программы) | ок |
| `my-kanine-services` | description / facts | Индивидуальные и групповые занятия, щенки, коррекция поведения, Rosyth Road | Все факты и 5 цитат дословно подтверждены сайтом | ок |
| `my-kanine-services` | review-insights | есть (тренер Mark, 1:1, реактивность, социализация щенков) | Сводка полностью соответствует свежим отзывам на Google Maps | ок |
| `the-k9-way` | name | The K9 Way | The K9 Way | ок |
| `the-k9-way` | address | Unit 16, Roadway One, 37 Rosyth Rd, Glasgow G5 0YD, United Kingdom | Unit 16, Roadway One, 37 Rosyth Rd, Glasgow G5 0YD, United Kingdom (Google Maps) | ок |
| `the-k9-way` | phone | +44 7376 227464 | +44 7376 227464 (Google Maps, сайт) | ок |
| `the-k9-way` | google_rating / count | 4.1 (36) | 4.1 (36) (Google Maps) | ок |
| `the-k9-way` | opening_hours | mo 10:00-16:00; tu 10:00-16:00; we 10:00-16:00; th closed; fr closed; sa closed; su closed | пн–ср 10:00–16:00, чт–вс закрыто (Google Maps) | ок |
| `the-k9-way` | status (closed) | открыто (closed='') | открыто (Closed · Opens 10 am Mon) | ок |
| `the-k9-way` | website | https://thek9way.co.uk/ | https://thek9way.co.uk/ | ок |
| `the-k9-way` | prices | нет (в notes: no price list published, contact for details) | на сайте открытого прайс-листа нет (запись по обращению) | ок |
| `the-k9-way` | description / facts | Индивидуальные занятия, 6-недельные курсы, базовое послушание, экс-армейский кинолог | Все факты и 6 цитат подтверждены сайтом | ок |
| `the-k9-way` | review-insights | есть (проблемы связи/переносов, тренер John, послушание) | Сводка точно отражает реальный диапазон свежих отзывов Google Maps (положительные за тренировки и критические за коммуникацию) | ок |
| `the-groom-room-bishopbriggs` | name | The Groom Room Bishopbriggs | The Groom Room Bishopbriggs | ок |
| `the-groom-room-bishopbriggs` | address | Strathkelvin Retail Park, Bishopbriggs, Glasgow G64 2TS, United Kingdom | Strathkelvin Retail Park, Bishopbriggs, Glasgow G64 2TS, United Kingdom (Google Maps) | ок |
| `the-groom-room-bishopbriggs` | phone | +44 345 600 9679 | +44 345 600 9679 (Google Maps, сайт) | ок |
| `the-groom-room-bishopbriggs` | google_rating / count | 4.4 (47) | 4.4 (47) (Google Maps) | ок |
| `the-groom-room-bishopbriggs` | opening_hours | mo 09:00-18:00; tu 09:00-18:00; we 09:00-18:00; th 09:00-20:00; fr 09:00-18:00; sa 09:00-18:00; su closed | пн–ср 09:00–18:00, чт 09:00–20:00, пт–сб 09:00–18:00, вс закрыто (Google Maps) | ок |
| `the-groom-room-bishopbriggs` | status (closed) | открыто (closed='') | открыто | ок |
| `the-groom-room-bishopbriggs` | website | https://www.petsathome.com/find-us/locations/lanarkshire/bishopbriggs/grooming | https://www.petsathome.com/find-us/locations/lanarkshire/bishopbriggs/grooming | ок |
| `the-groom-room-bishopbriggs` | prices | full_groom: от £35.00 (single-coated breeds); bath_dry: от £20.00 (single-coated breeds) | Standard Full Groom от £35, Standard Bath & Brush от £20 (подтверждено на странице салона) | ок |
| `the-groom-room-bishopbriggs` | description / facts | Салон в Pets at Home в Strathkelvin Retail Park, все размеры, стрижка, мытье, онлайн-запись | Все факты и 5 цитат подтверждены сайтом | ок |
| `the-groom-room-bishopbriggs` | review-insights | нет файла | в данных города `review-insights/the-groom-room-bishopbriggs.json` отсутствует | нет данных |
| `wizard-of-paws` | name | Wizard of PAWS | Wizard of PAWS | ок |
| `wizard-of-paws` | address | 32 Cogan St, Pollokshaws, Glasgow G43 1AP, United Kingdom | 32 Cogan St, Pollokshaws, Glasgow G43 1AP, United Kingdom (Google Maps) | ок |
| `wizard-of-paws` | phone | +44 141 632 4466 | +44 141 632 4466 (Google Maps, сайт) | ок |
| `wizard-of-paws` | google_rating / count | 4.5 (244) | 4.5 (244) (Google Maps) | ок |
| `wizard-of-paws` | opening_hours | mo 09:30-17:00; tu 09:30-17:00; we 09:30-17:00; th 09:30-17:00; fr 09:30-17:00; sa 09:30-16:00; su 09:30-16:00 | пн–пт 09:30–17:00, сб–вс 09:30–16:00 (Google Maps) | ок |
| `wizard-of-paws` | status (closed) | открыто (closed='') | открыто | ок |
| `wizard-of-paws` | website | http://www.wizardofpaws.com/ | http://www.wizardofpaws.com/ | ок |
| `wizard-of-paws` | prices | нет (в notes: grooming quotes by consultation, self-service bath walk-in) | на сайте стрижки по согласованию | ок |
| `wizard-of-paws` | description / facts | Центр груминга в Pollokshaws, полный комплекс, мойка самообслуживания | Все факты и 2 цитаты подтверждены сайтом | ок |
| `wizard-of-paws` | review-insights | нет файла | в данных города `review-insights/wizard-of-paws.json` отсутствует | нет данных |
| `woofs-whiskers-ltd` | name | Woofs & Whiskers Ltd | Woofs & Whiskers Ltd | ок |
| `woofs-whiskers-ltd` | address | Mansion St, Cambuslang, Glasgow G72 7JH, United Kingdom | Mansion St, Cambuslang, Glasgow G72 7JH, United Kingdom (Google Maps) | ок |
| `woofs-whiskers-ltd` | phone | +44 7454 807820 | +44 7454 807820 (Google Maps, сайт) | ок |
| `woofs-whiskers-ltd` | google_rating / count | 5.0 (28) | 4.9 (28) (Google Maps; разница 0,1 в пределах допуска ±0,1) | ок |
| `woofs-whiskers-ltd` | opening_hours | mo 07:30-18:00; tu 07:30-18:00; we 07:30-18:00; th 07:30-18:00; fr 07:30-18:00; sa closed; su closed | пн–пт 07:30–18:00, сб–вс закрыто (Google Maps, сайт) | ок |
| `woofs-whiskers-ltd` | status (closed) | открыто (closed='') | открыто | ок |
| `woofs-whiskers-ltd` | website | http://www.woofsandwhiskersltd.co.uk/ | http://www.woofsandwhiskersltd.co.uk/ | ок |
| `woofs-whiskers-ltd` | prices | нет (в notes: site does not publish rates, enrolment form required) | на сайте открытого прайс-листа нет | ок |
| `woofs-whiskers-ltd` | description / facts | Дневной присмотр в Cambuslang, крытые и открытые площадки, выезды на поля, магазин | Все факты и 3 цитаты подтверждены сайтом | ок |
| `woofs-whiskers-ltd` | review-insights | есть (заботливый персонал, безопасность, выезды, груминг) | Сводка полностью соответствует свежим отзывам на Google Maps | ок |
| `skoolofdrool` | name | Skoolofdrool | Skoolofdrool | ок |
| `skoolofdrool` | address | Unit 1, 11 East Ave, Blantyre, Glasgow G72 0JB, United Kingdom | Unit 1, 11 East Ave, Blantyre, Glasgow G72 0JB, United Kingdom (Google Maps) | ок |
| `skoolofdrool` | phone | +44 7976 010574 | +44 7976 010574 (Google Maps, сайт) | ок |
| `skoolofdrool` | google_rating / count | 5.0 (24) | 5.0 (24) (Google Maps) | ок |
| `skoolofdrool` | opening_hours | mo 07:30-18:00; tu 07:30-18:00; we 07:30-18:00; th 07:30-18:00; fr 07:30-18:00; sa closed; su closed | пн–пт 07:30–18:00, сб–вс закрыто (Google Maps, сайт) | ок |
| `skoolofdrool` | status (closed) | открыто (closed='') | открыто | ок |
| `skoolofdrool` | website | https://www.skoolofdrool.com/ | https://www.skoolofdrool.com/ | ок |
| `skoolofdrool` | prices | daycare_day: £35.00; daycare_pass: £111.00 (5 consecutive days) | £35 per day, £111 (5 consecutive days) (дословно подтверждено на сайте) | ок |
| `skoolofdrool` | description / facts | Дневной центр с 2012 года в Blantyre, доставка на фургонах по Lanarkshire, пробное посещение | Все факты и 5 цитат подтверждены сайтом | ок |
| `skoolofdrool` | review-insights | нет файла | в данных города `review-insights/skoolofdrool.json` отсутствует | нет данных |
| `creature-comforts-clarkston` | name | Creature Comforts Clarkston | Creature Comforts Clarkston | ок |
| `creature-comforts-clarkston` | address | 25 Eaglesham Rd, Busby, Glasgow G76 7DH, United Kingdom | 25 Eaglesham Rd, Busby, Glasgow G76 7DH, United Kingdom (Google Maps) | ок |
| `creature-comforts-clarkston` | phone | +44 141 644 5030 | +44 141 644 5030 (Google Maps, сайт) | ок |
| `creature-comforts-clarkston` | google_rating / count | 4.6 (297) | 4.6 (297) (Google Maps) | ок |
| `creature-comforts-clarkston` | opening_hours | mo 09:00-17:30; tu 09:00-17:30; we 09:00-17:30; th 09:00-17:30; fr 09:00-17:30; sa 09:00-17:30; su 12:00-16:00 | пн–сб 09:00–17:30, вс 12:00–16:00 (Google Maps, сайт) | ок |
| `creature-comforts-clarkston` | status (closed) | открыто (closed='') | открыто | ок |
| `creature-comforts-clarkston` | website | https://creaturecomfortsglasgow.com/ | https://creaturecomfortsglasgow.com/ (Maps перенаправляет с creaturecomfortsweb.co.uk) | ок |
| `creature-comforts-clarkston` | prices | нет (розничный магазин) | розничный зоомагазин | ок |
| `creature-comforts-clarkston` | description / facts | Семейный магазин с 1997 года в Busby, корма, аксессуары, click and collect | Все факты и 3 цитаты подтверждены сайтом | ок |
| `creature-comforts-clarkston` | review-insights | есть (помощь персонала, здоровые питомцы, чистые вольеры, корма) | Сводка полностью соответствует отзывам Google Maps | ок |
| `creature-comforts-shawlands` | name | Creature Comforts Shawlands | Creature Comforts Shawlands | ок |
| `creature-comforts-shawlands` | address | 992 Pollokshaws Rd, Glasgow G41 2HA, United Kingdom | 992 Pollokshaws Rd, Glasgow G41 2HA, United Kingdom (Google Maps) | ок |
| `creature-comforts-shawlands` | phone | +44 141 632 1978 | +44 141 632 1978 (Google Maps, сайт) | ок |
| `creature-comforts-shawlands` | google_rating / count | 4.4 (206) | 4.4 (206) (Google Maps) | ок |
| `creature-comforts-shawlands` | opening_hours | mo 09:00-17:30; tu 09:00-17:30; we 09:00-17:30; th 09:00-17:30; fr 09:00-17:30; sa 09:00-17:30; su 12:00-16:00 | пн–сб 09:00–17:30, вс 12:00–16:00 (Google Maps, сайт) | ок |
| `creature-comforts-shawlands` | status (closed) | открыто (closed='') | открыто | ок |
| `creature-comforts-shawlands` | website | https://creaturecomfortsglasgow.com/ | https://creaturecomfortsglasgow.com/ | ок |
| `creature-comforts-shawlands` | prices | нет (розничный магазин) | розничный зоомагазин | ок |
| `creature-comforts-shawlands` | description / facts | Магазин на Pollokshaws Road, натуральные корма, лакомства, click and collect | Все факты и 3 цитаты подтверждены сайтом | ок |
| `creature-comforts-shawlands` | review-insights | есть (отзывчивый персонал, заказ живого корма, корма Lily's Kitchen) | Сводка полностью соответствует отзывам Google Maps | ок |
| `going-mutts` | name | Going Mutts | Going Mutts | ок |
| `going-mutts` | address | 11, Block 4 Third Rd, Blantyre, Glasgow G72 0UP, United Kingdom | 11, Block 4 Third Rd, Blantyre, Glasgow G72 0UP, United Kingdom (Google Maps) | ок |
| `going-mutts` | phone | +44 1698 769113 | +44 1698 769113 (Google Maps, сайт) | ок |
| `going-mutts` | google_rating / count | пусто (notes: under 5 ratings in candidates.csv; Google Maps card shows 4.7, 46 reviews) | 4.7 (46) (Google Maps) | расхождение |
| `going-mutts` | opening_hours | mo 07:30-18:30; tu 07:30-18:30; we 07:30-18:30; th 07:30-18:30; fr 07:30-18:30; sa closed; su closed | пн–пт 07:30–18:30, сб–вс закрыто (Google Maps, сайт) | ок |
| `going-mutts` | status (closed) | открыто (closed='') | открыто | ок |
| `going-mutts` | website | http://www.goingmuttsltd.co.uk/ | http://www.goingmuttsltd.co.uk/ | ок |
| `going-mutts` | prices | daycare_day: £28.00; daycare_day: £15.00 (half day) | FULL DAY £28, HALF DAY £15 (дословно подтверждено на сайте) | ок |
| `going-mutts` | description / facts | Дневной присмотр с 2017 года в Blantyre, 700 кв. м площади, пробный день | Все факты и 6 цитат подтверждены сайтом | ок |
| `going-mutts` | review-insights | есть (радость собак, заботливая семья владельцев, безопасность) | Сводка полностью соответствует свежим отзывам Google Maps | ок |
| `pets-n-vets-scotstoun-mcdonald-vets` | name | Pets'n'Vets Scotstoun - McDonald Vets | Pets'n'Vets Scotstoun - McDonald Vets | ок |
| `pets-n-vets-scotstoun-mcdonald-vets` | address | 1413 Dumbarton Rd, Glasgow G14 9XS, United Kingdom | 1413 Dumbarton Rd, Glasgow G14 9XS, United Kingdom (Google Maps) | ок |
| `pets-n-vets-scotstoun-mcdonald-vets` | phone | +44 141 959 0749 | +44 141 959 0749 (Google Maps, сайт) | ок |
| `pets-n-vets-scotstoun-mcdonald-vets` | google_rating / count | 4.7 (182) | 4.7 (181) (Google Maps; разница 1 отзыв в пределах допуска ±15%) | ок |
| `pets-n-vets-scotstoun-mcdonald-vets` | opening_hours | mo 09:00-14:30,15:30-19:00; tu 09:00-14:30,15:30-19:00; we 09:00-14:30,15:30-19:00; th 09:00-14:30,15:30-19:00; fr 09:00-14:30,15:30-19:00; sa closed; su closed | пн–пт 09:00–14:30, 15:30–19:00, сб–вс закрыто (Google Maps, сайт) | ок |
| `pets-n-vets-scotstoun-mcdonald-vets` | status (closed) | открыто (closed='') | открыто | ок |
| `pets-n-vets-scotstoun-mcdonald-vets` | website | https://www.petsnvets.org/our-practices/mcdonald-vets-scotstoun | https://www.petsnvets.org/our-practices/mcdonald-vets-scotstoun | ок |
| `pets-n-vets-scotstoun-mcdonald-vets` | prices | exam: £60.00; vaccination_dog: £65.00; microchip: £39.00; neuter_cat: £109.00; spay_cat: £145.00; spay_dog (<20kg): £322.00; spay_dog (20-40kg): £337.00; spay_dog (>40kg): £426.00 | Все 8 цен дословно подтверждены на странице процедур и цен | ок |
| `pets-n-vets-scotstoun-mcdonald-vets` | description / facts | Консультации, вакцинации, стоматология, микрочипирование, хирургия, неотложная помощь | Все факты и 13 цитат подтверждены сайтом | ок |
| `pets-n-vets-scotstoun-mcdonald-vets` | review-insights | есть (внимательный персонал, уход за щенками, теплый прием) | Сводка полностью соответствует отзывам на Google Maps | ок |
| `southside-veterinary-clinic` | name | Southside Veterinary Clinic | Southside Veterinary Clinic | ок |
| `southside-veterinary-clinic` | address | 203 Fenwick Rd, Giffnock, Glasgow G46 6JD, United Kingdom | 203 Fenwick Rd, Giffnock, Glasgow G46 6JD, United Kingdom (Google Maps) | ок |
| `southside-veterinary-clinic` | phone | +44 141 737 1540 | +44 141 737 1540 (Google Maps, сайт) | ок |
| `southside-veterinary-clinic` | google_rating / count | 4.7 (47) | 4.7 (47) (Google Maps) | ок |
| `southside-veterinary-clinic` | opening_hours | mo 09:00-18:00; tu 09:00-18:00; we 09:00-18:00; th 09:00-18:00; fr 09:00-18:00; sa 09:00-12:00; su closed | пн–пт 09:00–18:00, сб 09:00–12:00, вс закрыто (Google Maps, сайт) | ок |
| `southside-veterinary-clinic` | status (closed) | открыто (closed='') | открыто | ок |
| `southside-veterinary-clinic` | website | https://www.southsidevet.co.uk/ | https://www.southsidevet.co.uk/ | ок |
| `southside-veterinary-clinic` | prices | exam: £58.00; vaccination_dog: £64.00; microchip: £32.00; neuter_cat: £109.00; spay_cat: £209.00; spay_dog (<10kg): £359.00; spay_dog (10-20kg): £395.00; spay_dog (20-30kg): £449.00; spay_dog (30-40kg): £499.00; spay_dog (40kg+): £529.00 | Все 10 цен дословно подтверждены на странице прайс-листа клиники | ок |
| `southside-veterinary-clinic` | description / facts | Независимая клиника в Giffnock, хирургия, стоматология, визиты на дом, круглосуточная неотложка пн–пт | Все факты и 17 цитат подтверждены сайтом | ок |
| `southside-veterinary-clinic` | review-insights | есть (экстренная помощь, спасение кота Kyro, профессионализм) | Сводка полностью соответствует отзывам на Google Maps | ок |

---

## Итог проверки выборки

- **Чистых мест:** 10 из 11
- **Мест с расхождениями:** 1 из 11 (`going-mutts`)
- **Всего расхождений:** 1

---

## Список расхождений по тяжести

### 1. Тяжёлые расхождения (неверная цена / неверный телефон / неверный адрес / закрыто)
Расхождений данной категории не обнаружено (0).

### 2. Средние и лёгкие расхождения (неполнота рейтинга, расписание, примечания)
1. **`going-mutts` (PET_SITTING): незаполненные поля рейтинга и числа оценок в строке данных.**
   - **Поле:** `google_rating / count`
   - **У нас в строке:** `пусто` (в поле `notes` указано: `rating: none (under 5 ratings in candidates.csv; Google Maps card shows 4.7, 46 reviews)`).
   - **На живом источнике:** карточка Google Maps показывает рейтинг `4.7` и `46` отзывов.
   - **Причина расхождения:** сборщик следовал правилу `none` при малом числе оценок в первичном файле кандидатов (`candidates.csv`), честно зафиксировав в `notes` факт наличия 46 отзывов на Google Maps, но оставив целевые колонки `google_rating` и `google_rating_count` пустыми. Рекомендуется перенести `4.7` и `46` из notes в соответствующие поля строки данных.
