# Проверка напарника: Cork (выборка из 10 мест)

- **Город:** Cork (`cork`)
- **Проверяющий:** Antigravity (ПК 11)
- **Дата проверки:** 2026-10-16
- **Ветка данных:** `origin/city/cork`
- **Объём выборки:** 10 мест (по 2 места на каждую из 5 категорий)

---

## Таблица сверки данных с живыми источниками

| слаг | поле | у нас | на источнике | вердикт |
|---|---|---|---|---|
| `fetch-dog-training-services` | name | Fetch Dog Training Services | Fetch Dog Training Services | ок |
| `fetch-dog-training-services` | address | Walshtown Beg, Ballincurrig, Co. Cork, T56 TK76, Ireland | Walshtown Beg, Ballincurrig, Co. Cork, T56 TK76, Ireland | ок |
| `fetch-dog-training-services` | phone | +353 83 095 4861 | +353 83 095 4861 (Google Maps, сайт: 083 095 4861) | ок |
| `fetch-dog-training-services` | google_rating / count | 5.0 (77) | 5.0 (77) (Google Maps) | ок |
| `fetch-dog-training-services` | opening_hours | mo closed; tu 08:00-19:00; we 12:00-19:00; th 08:00-19:00; fr 12:00-19:00; sa 08:00-20:00; su 10:00-20:00 | пн закр, вт 8–19, ср 12–19, чт 8–19, пт 12–19, сб 8–20, вс 10–20 (Google Maps; сайт: 7 AM – 8 PM) | ок |
| `fetch-dog-training-services` | status (closed) | открыто (closed='') | открыто, не закрыто | ок |
| `fetch-dog-training-services` | website | https://fetchdogtrainers.ie/ | https://fetchdogtrainers.ie/ | ок |
| `fetch-dog-training-services` | prices | behavior_consult: 600 EUR (note: 4-week coaching package) | OWNER-HANDLER COACHING Reactive Dog Training from €600 (сайт) | ок |
| `fetch-dog-training-services` | description / facts | Специализация по реактивным собакам, коучинг, площадка в Midleton, вольеры | Все факты и цитаты дословно найдены на сайте | ок |
| `fetch-dog-training-services` | review-insights | нет файла | в данных города `review-insights/` отсутствуют | нет данных |
| `irish-working-dog-college` | name | Irish Working Dog College | Irish Working Dog College | ок |
| `irish-working-dog-college` | address | Kilbarry Enterprise Centre, Dublin Hill, Cork, T23 NXV7, Ireland | Kilbarry Enterprise Centre, Dublin Hill, Cork, T23 NXV7, Ireland | ок |
| `irish-working-dog-college` | phone | +353 83 581 9194 | +353 83 881 9904 (Google Maps и candidates.csv) | расхождение |
| `irish-working-dog-college` | google_rating / count | 4.9 (50) | 4.9 (50) (Google Maps) | ок |
| `irish-working-dog-college` | opening_hours | mo 09:00-18:00; tu 09:00-18:30; we 09:00-18:30; th 09:00-18:30; fr 09:00-18:30; sa 09:00-13:00; su 10:00-13:00 | пн 9–18, вт–пт 9–18:30, сб 9–13, вс 10–13 (Google Maps) | ок |
| `irish-working-dog-college` | status (closed) | открыто (closed='') | открыто | ок |
| `irish-working-dog-college` | website | https://www.irishdogcollege.com/ | https://www.irishdogcollege.com/ | ок |
| `irish-working-dog-college` | prices | нет (в notes: priced on application) | на сайте курсы по запросу, открытого прайса нет | ок |
| `irish-working-dog-college` | description / facts | Дрессировка рабочих собак, послушание, охрана, вольеры | Все факты подтверждены сайтом, цитата описания на месте | ок |
| `irish-working-dog-college` | review-insights | нет файла | в данных города `review-insights/` отсутствуют | нет данных |
| `dustys-dog-grooming` | name | Dusty's Dog Grooming | Dusty's Dog Grooming | ок |
| `dustys-dog-grooming` | address | 57 Clarkes Rd, Ballyphehane, Cork, T12 D5D3, Ireland | 57 Clarkes Rd, Ballyphehane, Cork, T12 D5D3, Ireland | ок |
| `dustys-dog-grooming` | phone | +353 86 409 3462 | +353 86 409 3462 (Google Maps) | ок |
| `dustys-dog-grooming` | google_rating / count | 4.9 (34) | 4.9 (34) (Google Maps) | ок |
| `dustys-dog-grooming` | opening_hours | mo 08:00-18:00; tu 08:00-18:00; we 08:00-18:00; th 08:00-18:00; fr 08:00-18:00; sa 08:00-18:00; su closed | пн–сб 8–18, вс закр (Google Maps) | ок |
| `dustys-dog-grooming` | status (closed) | открыто (closed='') | открыто | ок |
| `dustys-dog-grooming` | website | — (notes: dustysdogs.biz expired/aggregator) | на Google Maps ссылка dustysdogs.biz ведёт на агрегатор-дорвей The Francisco Guide | ок |
| `dustys-dog-grooming` | prices | нет (оффлайн салон) | сайта нет, запись по телефону | ок |
| `dustys-dog-grooming` | description / facts | Базовое описание по категории и адресу (У-03) | Соответствует категории и адресу | ок |
| `dustys-dog-grooming` | review-insights | нет файла | в данных города `review-insights/` отсутствуют | нет данных |
| `happy-hound-pet-grooming` | name | Happy Hound Pet Grooming | Happy Hound Pet Grooming | ок |
| `happy-hound-pet-grooming` | address | Colony Hill, Dromkeen, Innishannon, Co. Cork, T12 FF8H, Ireland | Colony Hill, Dromkeen, Innishannon, Co. Cork, T12 FF8H, Ireland | ок |
| `happy-hound-pet-grooming` | phone | +353 89 414 9645 | +353 89 414 9645 (Google Maps, сайт: 089 414 9645) | ок |
| `happy-hound-pet-grooming` | google_rating / count | 5.0 (24) | 5.0 (24) (Google Maps) | ок |
| `happy-hound-pet-grooming` | opening_hours | mo 07:00-19:00; tu 07:00-19:00; we 07:00-19:00; th 07:00-19:00; fr 07:00-19:00; sa 07:00-15:00; su closed | на сайте: Mon-Fri 7am-7pm, Sat 7am-3pm (в строке источник — сайт); на Google Maps: пн/ср 9:30-14:30, вт/чт 9:30-19:30, пт 9:30-17:30, сб 9-17 | ок |
| `happy-hound-pet-grooming` | status (closed) | открыто (closed='') | открыто | ок |
| `happy-hound-pet-grooming` | website | https://breebar.wixsite.com/happyhoundgrooming | https://breebar.wixsite.com/happyhoundgrooming | ок |
| `happy-hound-pet-grooming` | prices | full_groom: от €30; bath_dry: от €15; nail_trim: €5; deshedding: от €10 | на сайте: Full groom starting at €30, Bath & Brush starting at €15, Nail clip €5.00, De-Shed starting at €10.00 | ок |
| `happy-hound-pet-grooming` | description / facts | Груминг в Innishannon, стрижки, купание, когти, дешеддинг, все породы | Все факты и цитаты подтверждены сайтом | ок |
| `happy-hound-pet-grooming` | review-insights | нет файла | в данных города `review-insights/` отсутствуют | нет данных |
| `collins-canines-doggy-daycare-and-training-facility` | name | Collins Canines Doggy Daycare and Training Facility | Collins Canines Doggy Daycare and Training Facility | ок |
| `collins-canines-doggy-daycare-and-training-facility` | address | Unit 16, 16a, Togher, Cork, T12 R672, Ireland | Unit 16, 16a, Togher, Cork, T12 R672, Ireland | ок |
| `collins-canines-doggy-daycare-and-training-facility` | phone | +353 85 272 4198 | +353 85 272 4198 (Google Maps, сайт) | ок |
| `collins-canines-doggy-daycare-and-training-facility` | google_rating / count | 4.8 (47) | 4.8 (47) (Google Maps) | ок |
| `collins-canines-doggy-daycare-and-training-facility` | opening_hours | mo 08:00-18:00; tu 08:00-18:00; we 08:00-18:00; th 08:00-18:00; fr 08:00-18:00; sa closed; su closed | пн–пт 8–18, сб–вс закр (Google Maps, сайт) | ок |
| `collins-canines-doggy-daycare-and-training-facility` | status (closed) | открыто (closed='') | открыто | ок |
| `collins-canines-doggy-daycare-and-training-facility` | website | http://www.collinscanines.com/ | http://www.collinscanines.com/ | ок |
| `collins-canines-doggy-daycare-and-training-facility` | prices | daycare_day: €32 | Dog Daycare - €32 full day/€22 half day (сайт) | ок |
| `collins-canines-doggy-daycare-and-training-facility` | description / facts | Основан в 2013, 3500 кв. футов в Togher, закрытые и открытые площадки, бассейны | Все факты и цитаты подтверждены сайтом | ок |
| `collins-canines-doggy-daycare-and-training-facility` | review-insights | нет файла | в данных города `review-insights/` отсутствуют | нет данных |
| `hedgerow-cattery-and-kennels` | name | Hedgerow Cattery & Kennels | Hedgerow Cattery & Kennels | ок |
| `hedgerow-cattery-and-kennels` | address | Evergreen Terrace, Ballymackibbot, Killeagh, Co. Cork, P36 P894, Ireland | Evergreen Terrace, Ballymackibbot, Killeagh, Co. Cork, P36 P894, Ireland | ок |
| `hedgerow-cattery-and-kennels` | phone | +353 87 812 8250 | +353 87 812 8250 (Google Maps, сайт: 087 812 8250) | ок |
| `hedgerow-cattery-and-kennels` | google_rating / count | 4.7 (43) | 4.7 (43) (Google Maps) | ок |
| `hedgerow-cattery-and-kennels` | opening_hours | mo 10:00-10:30,17:00-17:30; ...; su 10:00-10:30,17:00-17:30 | ежедневно 10–10:30, 17–17:30 (Google Maps) | ок |
| `hedgerow-cattery-and-kennels` | status (closed) | открыто (closed='') | открыто | ок |
| `hedgerow-cattery-and-kennels` | website | http://www.hedgerow.ie/ | http://www.hedgerow.ie/ | ок |
| `hedgerow-cattery-and-kennels` | prices | нет (в notes: rates in JS modal / phone) | открытого прайс-листа нет | ок |
| `hedgerow-cattery-and-kennels` | description / facts | Передержка кошек и собак в Killeagh, теплый пол, выгул | Все факты подтверждены сайтом | ок |
| `hedgerow-cattery-and-kennels` | review-insights | нет файла | в данных города `review-insights/` отсутствуют | нет данных |
| `dobs-pets-and-exotics` | name | DOB's Pets & Exotics | DOB's Pets & Exotics | ок |
| `dobs-pets-and-exotics` | address | The Yard, Maryborough Hill, Moneygurney, Cork, T12 EEH4, Ireland | yard, Maryborough Hill, Moneygurney, Cork, T12 EEH4, Ireland | ок |
| `dobs-pets-and-exotics` | phone | +353 83 377 9864 | +353 83 377 9864 (Google Maps, сайт) | ок |
| `dobs-pets-and-exotics` | google_rating / count | 4.9 (116) | 4.9 (116) (Google Maps) | ок |
| `dobs-pets-and-exotics` | opening_hours | mo 09:00-17:30; tu 10:00-17:30; we 10:00-17:30; th 10:00-17:30; fr 10:00-17:30; sa 10:00-17:30; su 12:00-16:00 | пн 9–17:30, вт–сб 10–17:30, вс 12–16 (Google Maps) | ок |
| `dobs-pets-and-exotics` | status (closed) | открыто (closed='') | открыто | ок |
| `dobs-pets-and-exotics` | website | https://dobspetsandexotics.com/ | https://dobspetsandexotics.com/ | ок |
| `dobs-pets-and-exotics` | prices | нет (розничный зоомагазин) | розничные товары | ок |
| `dobs-pets-and-exotics` | description / facts | Экзотические животные, рыбы, террариумы, доставка, самовывоз | Все факты и цитаты подтверждены сайтом | ок |
| `dobs-pets-and-exotics` | review-insights | нет файла | в данных города `review-insights/` отсутствуют | нет данных |
| `ideal-pet-shop` | name | Ideal Pet Shop | Ideal Pet Shop | ок |
| `ideal-pet-shop` | address | 29 N Main St, Centre, Cork, T12 AF85, Ireland | 29 N Main St, Centre, Cork, T12 AF85, Ireland | ок |
| `ideal-pet-shop` | phone | +353 21 427 4949 | +353 21 427 4949 (Google Maps) | ок |
| `ideal-pet-shop` | google_rating / count | 4.1 (139) | 4.1 (139) (Google Maps) | ок |
| `ideal-pet-shop` | opening_hours | mo 09:00-17:00; tu 09:00-17:00; we 09:00-17:00; th 09:00-17:00; fr 09:00-17:00; sa 09:00-17:00; su closed | пн–сб 9–17, вс закр (Google Maps) | ок |
| `ideal-pet-shop` | status (closed) | открыто (closed='') | открыто | ок |
| `ideal-pet-shop` | website | — (notes: idealpetshop.ie parked/offline) | на Google Maps ссылка idealpetshop.ie не работает (HTTP 520 Cloudflare) | ок |
| `ideal-pet-shop` | prices | нет (розничный магазин) | оффлайн зоомагазин | ок |
| `ideal-pet-shop` | description / facts | Традиционный магазин на North Main St (У-03) | Соответствует категории и адресу | ок |
| `ideal-pet-shop` | review-insights | нет файла | в данных города `review-insights/` отсутствуют | нет данных |
| `village-vets-douglas` | name | Village Vets Douglas (The Village Veterinary Clinic) | Village Vets Douglas (The Village Veterinary Clinic) | ок |
| `village-vets-douglas` | address | 31a/b, Saint Patrick's, Woollen Mills, Douglas, Cork, T12 ET89, Ireland | 31a/b, Saint Patrick's, Woollen Mills, Douglas, Cork, T12 ET89, Ireland | ок |
| `village-vets-douglas` | phone | +353 21 489 0101 | +353 21 489 0101 (Google Maps, сайт) | ок |
| `village-vets-douglas` | google_rating / count | 4.9 (420) | 4.9 (420) (Google Maps) | ок |
| `village-vets-douglas` | opening_hours | mo 08:00-19:00; tu 08:00-19:00; we 08:00-19:00; th 08:00-19:00; fr 08:00-19:00; sa 09:00-13:00; su closed | пн–пт 8–19, сб 9–16 (Google Maps показывает субботу 9am–4pm; на сайте точные часы не опубликованы) | расхождение |
| `village-vets-douglas` | status (closed) | открыто (closed='') | открыто | ок |
| `village-vets-douglas` | website | https://www.villagevets.ie/clinics/douglas-vets | https://www.villagevets.ie/clinics/douglas-vets | ок |
| `village-vets-douglas` | prices | exam: €58; vaccination_dog: €60; neuter_cat: €118; spay_cat: €173; spay_dog: от €285 | Consultation €58, Annual Booster Dog €60, Cat Neuter Male €118, Cat Neuter Female €173, Dog Neuter Female From €285 (прайс-лист Douglas, бэнд b) | ок |
| `village-vets-douglas` | description / facts | Выезд на дом, неотложка в Sunbeam, хирургия | Все факты и цитаты дословно подтверждены сайтом | ок |
| `village-vets-douglas` | review-insights | нет файла | в данных города `review-insights/` отсутствуют | нет данных |
| `oldcote-veterinary-clinic` | name | Oldcote Veterinary Clinic | Oldcote Veterinary Clinic | ок |
| `oldcote-veterinary-clinic` | address | Oldcote Veterinary Clinic Main Rd, Co. Cork, Ireland | Oldcote Veterinary Clinic Main Rd, Co. Cork, Ireland (на сайте: Main Street, Ballincollig) | ок |
| `oldcote-veterinary-clinic` | phone | +353 21 487 0300 | +353 21 487 0300 (Google Maps, на сайте: 0214 870300) | ок |
| `oldcote-veterinary-clinic` | google_rating / count | 4.5 (79) | 4.5 (79) (Google Maps) | ок |
| `oldcote-veterinary-clinic` | opening_hours | mo 08:30-13:30,14:30-19:00; ...; sa 10:00-13:00; su closed | на сайте: пн–пт 8:30–19:00 (обед 13:30–14:30), сб 10–13; Google Maps: пн–пт 8:30–19:00, сб 10–13 | ок |
| `oldcote-veterinary-clinic` | status (closed) | открыто (closed='') | открыто | ок |
| `oldcote-veterinary-clinic` | website | http://oldcotevetclinic.com/ | http://oldcotevetclinic.com/ | ок |
| `oldcote-veterinary-clinic` | prices | нет (в notes: no price list published) | открытого прайс-листа нет | ок |
| `oldcote-veterinary-clinic` | description / facts | Клиника с 2002 года, экзотические животные (грызуны), неотложка в Sunbeam | Все 4 цитаты дословно найдены на сайте | ок |
| `oldcote-veterinary-clinic` | review-insights | нет файла | в данных города `review-insights/` отсутствуют | нет данных |

---

## Итог проверки выборки

- **Чистых мест:** 8 из 10
- **Мест с расхождениями:** 2 из 10 (`irish-working-dog-college`, `village-vets-douglas`)
- **Всего расхождений:** 2

---

## Список расхождений по тяжести

### 1. Тяжёлые расхождения (неверная цена / телефон / адрес / закрыто)
1. **`irish-working-dog-college` (DOG_TRAINING): неверный номер телефона.**
   - **Поле:** `phone`
   - **У нас в строке:** `+353 83 581 9194`
   - **На живом источнике:** `+353 83 881 9904` (номер на карточке Google Maps и в исходном `candidates.csv`).
   - **Причина расхождения:** механическая опечатка при заполнении (`581 9194` вместо `881 9904`). Требуется исправление в `data/cities/cork/businesses-08-training.csv`.

### 2. Средние и лёгкие расхождения (часы работы, неточности расписания)
1. **`village-vets-douglas` (VET_CLINIC): расхождение часов работы в субботу.**
   - **Поле:** `opening_hours`
   - **У нас в строке:** `mo 08:00-19:00; tu 08:00-19:00; we 08:00-19:00; th 08:00-19:00; fr 08:00-19:00; sa 09:00-13:00; su closed` (источник указан как Google Maps).
   - **На живом источнике:** на карточке Google Maps для субботы указано `9am–4pm` (`09:00-16:00`). На официальном сайте клиники детальное расписание часов работы не опубликовано (упомянуты лишь визиты на дом «during clinic hours»).
   - **Причина расхождения:** в субботу клиника работает до 16:00 (у нас записано до 13:00).
