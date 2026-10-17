# Взаимная проверка выборки: Дублин (Dublin)

- **Город:** Dublin (`dublin`)
- **Проверяющий:** Antigravity (ПК 10)
- **Дата проверки:** 2026-10-16
- **Ветка проверки:** `pc10/peercheck-dublin`
- **Источник данных:** `origin/city/dublin` (`data/cities/dublin/`)
- **Выборка:** 12 мест (по 2 на категорию: DOG_TRAINING, GROOMING, PET_HOTEL, PET_SHOP, PET_SITTING, VET_CLINIC)

---

## 1. Сводная таблица проверки по местам

| слаг | поле | у нас | на источнике | вердикт (ок / расхождение / нет данных) |
|---|---|---|---|---|
| clever-pets-ireland | name | Clever Pets Ireland | Clever Pets Ireland | ок |
| clever-pets-ireland | address | MEADOW VIEW HOUSE, Dooroge, Ballyboughal, Co. Dublin, A41 K838, Ireland | MEADOW VIEW HOUSE, Dooroge, Ballyboughal, Co. Dublin, A41 K838, Ireland | ок |
| clever-pets-ireland | phone | +353 87 643 7792 | +353 87 643 7792 (Maps) / 0876437792 (сайт) | ок |
| clever-pets-ireland | google_rating | 4.9 | 4.9 | ок |
| clever-pets-ireland | google_rating_count | 28 | 28 | ок |
| clever-pets-ireland | opening_hours | mo 08:00-21:00; tu 08:00-21:00; we 08:00-21:00; th 08:00-21:00; fr 08:00-21:00; sa 08:00-21:00; su closed | Mon-Sat 8:00-21:00, Sun Closed (Maps) | ок |
| clever-pets-ireland | status | open (closed: "") | Open (не закрыто) | ок |
| clever-pets-ireland | website | http://www.cleverpetsireland.com/ | http://www.cleverpetsireland.com/ (доступен) | ок |
| clever-pets-ireland | prices | нет (запись через cleverpetsireland.as.me) | на сайте внешняя форма cleverpetsireland.as.me без статичного прайса | ок |
| clever-pets-ireland | facts / evidence | puppy_classes, behaviour_problems, certified_trainer (Donna Lennox APDTIre 053) | цитаты подтверждены на сайте | ок |
| clever-pets-ireland | descriptions | en: факты о тренере Donna Lennox, щенках и daycare; local: пусто | факты подтверждены сайтом, для en-города local пустой | ок |
| clever-pets-ireland | review_insights | нет в городе | review-insights/<slug>.json отсутствует; свежие отзывы на Maps хвалят тренера | нет данных (файла нет) |
| pawfit | name | Pawfit | Pawfit | ок |
| pawfit | address | Main St, Blackrock, Dublin, Ireland | Main St, Blackrock, Dublin, Ireland | ок |
| pawfit | phone | +353 87 172 7212 | +353 87 172 7212 (Maps) / 0871727212 (сайт) | ок |
| pawfit | google_rating | 5.0 | 5.0 | ок |
| pawfit | google_rating_count | 55 | 55 | ок |
| pawfit | opening_hours | mo 09:00-17:00; tu 09:00-17:00; we 09:00-17:00; th 09:00-17:00; fr 09:00-17:00; sa closed; su closed | Mon-Fri 9:00-17:00, Sat-Sun Closed (Maps) | ок |
| pawfit | status | open (closed: "") | Open (не закрыто) | ок |
| pawfit | website | https://pawfit.ie/ | https://pawfit.ie/ (доступен) | ок |
| pawfit | prices | нет (консультации / персональный расчёт) | на сайте карточки индивидуальных консультаций | ок |
| pawfit | facts / evidence | puppy_classes, behaviour_problems, certified_trainer (IMDT), description | цитаты подтверждены на сайте (в т.ч. Emma Dungan) | ок |
| pawfit | descriptions | en: дрессировка в South Dublin, Emma Dungan, щенки; local: пусто | факты подтверждены сайтом, local пустой | ок |
| pawfit | review_insights | нет в городе | review-insights/<slug>.json отсутствует; свежие отзывы на Maps положительные | нет данных (файла нет) |
| paws-solutions-pet-grooming-palmerstown | name | Paws Solutions Pet Grooming Palmerstown | Paws Solutions Pet Grooming Palmerstown | ок |
| paws-solutions-pet-grooming-palmerstown | address | 12 Kennelsfort Rd Lower, Palmerston Upper, Dublin, D20 YT53, Ireland | 12 Kennelsfort Rd Lower, Palmerston Upper, Dublin, D20 YT53, Ireland | ок |
| paws-solutions-pet-grooming-palmerstown | phone | +353 (0)1 623 9267 | +353 1 623 9267 (Maps) / 016239267 (сайт) | ок |
| paws-solutions-pet-grooming-palmerstown | google_rating | 4.6 | 4.6 | ок |
| paws-solutions-pet-grooming-palmerstown | google_rating_count | 142 | 142 | ок |
| paws-solutions-pet-grooming-palmerstown | opening_hours | by-appointment | «Grooming is by appointment only» (сайт) | ок |
| paws-solutions-pet-grooming-palmerstown | status | open (closed: "") | Open (не закрыто) | ок |
| paws-solutions-pet-grooming-palmerstown | website | http://www.pawssolutions.ie/ | http://www.pawssolutions.ie/ (доступен) | ок |
| paws-solutions-pet-grooming-palmerstown | prices:bath_dry | 38 (X-small), 45 (Small), 55 (Med) | X-small €38, Small €45, Med €55 (сайт /pricelist/) | ок |
| paws-solutions-pet-grooming-palmerstown | prices:full_groom | from 65 (X-small), from 70 (Small), from 80 (Med) | X-small From €65, Small From €70, Med From €80 (сайт /pricelist/) | ок |
| paws-solutions-pet-grooming-palmerstown | prices:deshedding | 20 - 40 | Shed-less Treatment €20 – €40 (сайт /pricelist/) | ок |
| paws-solutions-pet-grooming-palmerstown | facts / evidence | appointment_only, цитаты услуг и цен | все 7 цен и цитаты подтверждены на странице /pricelist/ | ок |
| paws-solutions-pet-grooming-palmerstown | descriptions | en: салон в Palmerstown, ванны, стрижка; local: пусто | подтверждено сайтом, local пустой | ок |
| paws-solutions-pet-grooming-palmerstown | review_insights | нет в городе | review-insights/<slug>.json отсутствует | нет данных (файла нет) |
| coco-bello-dog-grooming | name | Coco Bello Dog Grooming | Coco Bello Dog Grooming | ок |
| coco-bello-dog-grooming | address | 81 Lower Kilmacud Rd, Stillorgan, Dublin, A94 W6W8, Ireland | 81 Lower Kilmacud Rd, Stillorgan, Dublin, A94 W6W8, Ireland | ок |
| coco-bello-dog-grooming | phone | +353 87 181 0616 | +353 87 181 0616 (Maps) / 087 1810616 (сайт) | ок |
| coco-bello-dog-grooming | google_rating | 4.9 | 4.9 | ок |
| coco-bello-dog-grooming | google_rating_count | 146 | 146 | ок |
| coco-bello-dog-grooming | opening_hours | mo 08:30-17:30; tu 08:30-17:30; we 08:30-17:30; th 08:30-17:30; fr 08:30-17:30; sa closed; su closed | Mon-Fri 8:30-17:30, Sat-Sun Closed (Maps & сайт /contact) | ок |
| coco-bello-dog-grooming | status | open (closed: "") | Open (не закрыто) | ок |
| coco-bello-dog-grooming | website | https://www.cocobello.ie/ | https://www.cocobello.ie/ (доступен) | ок |
| coco-bello-dog-grooming | prices:full_groom | from 70 | «Coco’s Cut ‘n’ Style - prices start from €70» (сайт /pricing) | ок |
| coco-bello-dog-grooming | prices:bath_dry | from 30 | «Coco’s Wash ‘n’ Blowdry - Prices start from €30» (сайт /pricing) | ок |
| coco-bello-dog-grooming | facts / evidence | цитаты часов, цен и описания | все цитаты подтверждены на страницах сайта | ок |
| coco-bello-dog-grooming | descriptions | en: студия в Stillorgan, стрижка, мойка, щенки; local: пусто | подтверждено сайтом, local пустой | ок |
| coco-bello-dog-grooming | review_insights | нет в городе | review-insights/<slug>.json отсутствует | нет данных (файла нет) |
| vetsit-doggy-daycare-dog-grooming-and-boarding | name | VetSit Doggy Daycare, Dog Grooming and Boarding | VetSit Doggy Daycare, Dog Grooming and Boarding | ок |
| vetsit-doggy-daycare-dog-grooming-and-boarding | address | The Cottage, Barnaslingan Ln, Johnstown, Kilternan, Co. Dublin, D18 A389, Ireland | The Cottage, Barnaslingan Ln, Johnstown, Kilternan, Co. Dublin, D18 A389, Ireland | ок |
| vetsit-doggy-daycare-dog-grooming-and-boarding | phone | +353 87 703 9280 | +353 87 703 9280 (Maps) / 0877039280 (сайт) | ок |
| vetsit-doggy-daycare-dog-grooming-and-boarding | google_rating | 5.0 | 5.0 | ок |
| vetsit-doggy-daycare-dog-grooming-and-boarding | google_rating_count | 250 | 250 | ок |
| vetsit-doggy-daycare-dog-grooming-and-boarding | opening_hours | mo 07:30-18:30; tu 07:30-18:30; we 07:30-18:30; th 07:30-18:30; fr 07:30-18:30; sa closed; su closed | «Daycare: Monday – Friday. 7:30 am to 6:30 pm» (сайт) | ок |
| vetsit-doggy-daycare-dog-grooming-and-boarding | status | open (closed: "") | Open (не закрыто) | ок |
| vetsit-doggy-daycare-dog-grooming-and-boarding | website | https://www.vet-sit.com/ | https://www.vet-sit.com/ (доступен) | ок |
| vetsit-doggy-daycare-dog-grooming-and-boarding | prices:daycare_day | 40.50 (<20kg) / 42.50 (>20kg) | «Doggy Daycare € 40.50 Day» / «€ 42.5 Day» (сайт /blog/) | ок |
| vetsit-doggy-daycare-dog-grooming-and-boarding | prices:daycare_pass | 380 (<20kg) / 400 (>20kg) | «Doggy Daycare 10 Passes € 380» / «€ 400» (сайт /blog/) | ок |
| vetsit-doggy-daycare-dog-grooming-and-boarding | prices:dog_night | 70 (<20kg) / 78 (>20kg) | «Dog Boarding € 70 24 Hours» / «€ 78» (сайт /blog/) | ок |
| vetsit-doggy-daycare-dog-grooming-and-boarding | facts / evidence | outdoor_run (50 acres), medication | все цитаты подтверждены на сайте | ок |
| vetsit-doggy-daycare-dog-grooming-and-boarding | descriptions | en: ветеринарный центр в Kilternan на 50 акрах; local: пусто | подтверждено сайтом, local пустой | ок |
| vetsit-doggy-daycare-dog-grooming-and-boarding | review_insights | нет в городе | review-insights/<slug>.json отсутствует | нет данных (файла нет) |
| river-cottage-cattery | name | River Cottage Cattery | River Cottage Cattery | ок |
| river-cottage-cattery | address | Ring common, Commons (2nd Division), Balscadden, Co. Dublin, Ireland | Ring common, Commons (2nd Division), Balscadden, Co. Dublin, Ireland | ок |
| river-cottage-cattery | phone | +353 86 205 8293 | +353 86 205 8293 (Maps & сайт) | ок |
| river-cottage-cattery | google_rating | 5.0 | 5.0 | ок |
| river-cottage-cattery | google_rating_count | 102 | 102 | ок |
| river-cottage-cattery | opening_hours | mo 10:00-11:00,18:00-19:00; tu 10:00-11:00,18:00-19:00; we 10:00-11:00,18:00-19:00; th 10:00-11:00,18:00-19:00; fr 10:00-11:00,18:00-19:00; sa 10:00-11:00,18:00-19:00; su closed | Mon-Sat 10-11am & 6-7pm, Sun Closed (Maps & сайт) | ок |
| river-cottage-cattery | status | open (closed: "") | Open (не закрыто) | ок |
| river-cottage-cattery | website | http://www.rivercottagecattery.com/ | http://www.rivercottagecattery.com/ (доступен) | ок |
| river-cottage-cattery | prices:cat_night | 18 (1 cat) / 31 (2 cats sharing) | «1 cat €18 euro per night» / «2 cats sharing one room €31 euro per night» (сайт) | ок |
| river-cottage-cattery | facts / evidence | cats, supervision_24h, vaccination_required, emergency_note | все цитаты подтверждены на сайте | ок |
| river-cottage-cattery | descriptions | en: кошачий отель в North County Dublin, отопление, уход; local: пусто | подтверждено сайтом, local пустой | ок |
| river-cottage-cattery | review_insights | нет в городе | review-insights/<slug>.json отсутствует | нет данных (файла нет) |
| mutz-nutz-walkinstown | name | Mutz Nutz - Walkinstown Pet Shop | Mutz Nutz - Walkinstown Pet Shop | ок |
| mutz-nutz-walkinstown | address | 3 Beechfield Ave, Commons, Dublin 12, D12 HK00, Ireland | 3 Beechfield Ave, Commons, Dublin 12, D12 HK00, Ireland | ок |
| mutz-nutz-walkinstown | phone | +353 1 537 5397 | +353 1 537 5397 (Maps & сайт) | ок |
| mutz-nutz-walkinstown | google_rating | 4.5 | 4.5 | ок |
| mutz-nutz-walkinstown | google_rating_count | 439 | 439 | ок |
| mutz-nutz-walkinstown | opening_hours | mo 09:30-18:00; tu 09:30-18:00; we 09:30-18:00; th 09:30-18:00; fr 09:30-18:00; sa 09:30-18:00; su 12:00-17:00 | Mon-Sat 9:30-18:00, Sun 12:00-17:00 (Maps) | ок |
| mutz-nutz-walkinstown | status | open (closed: "") | Open (не закрыто) | ок |
| mutz-nutz-walkinstown | website | https://www.mutznutz.ie/ | https://www.mutznutz.ie/ (доступен) | ок |
| mutz-nutz-walkinstown | prices | нет (зоомагазин розничной торговли) | интернет-магазин кормов и товаров | ок |
| mutz-nutz-walkinstown | facts / evidence | delivery (free shipping over €35) | цитата подтверждена на сайте | ок |
| mutz-nutz-walkinstown | descriptions | en: зоомагазин в Walkinstown, корма, игрушки, доставка; local: пусто | подтверждено сайтом, local пустой | ок |
| mutz-nutz-walkinstown | review_insights | нет в городе | review-insights/<slug>.json отсутствует | нет данных (файла нет) |
| petworld-nutgrove | name | Petworld Dublin Nutgrove | Pet Store | Petworld Dublin Nutgrove | Pet Store | ок |
| petworld-nutgrove | address | Unit 5, Nutgrove Shopping Centre, Nutgrove Way, Rathfarnham, Dublin 14, D14 A3H3, Ireland | Unit 5, Nutgrove Shopping Centre, Nutgrove Way, Rathfarnham, Dublin 14, D14 A3H3, Ireland | ок |
| petworld-nutgrove | phone | +353 (0)1 298 0292 | +353 1 298 0292 (Maps) | ок |
| petworld-nutgrove | google_rating | 4.4 | 4.4 | ок |
| petworld-nutgrove | google_rating_count | 497 | 497 | ок |
| petworld-nutgrove | opening_hours | mo 09:00-18:00; tu 09:00-18:00; we 09:00-18:00; th 09:00-19:00; fr 09:00-19:00; sa 09:00-18:00; su 11:00-18:00 | Mon-Wed 9:00-18:00, Thu-Fri 9:00-19:00, Sat 9:00-18:00, Sun 11:00-18:00 (Maps) | ок |
| petworld-nutgrove | status | open (closed: "") | Open (не закрыто) | ок |
| petworld-nutgrove | website | https://petworlddirect.ie/ | https://petworlddirect.ie/ (доступен) | ок |
| petworld-nutgrove | prices | нет (зоомагазин розничной торговли) | интернет-магазин кормов и товаров | ок |
| petworld-nutgrove | facts / evidence | delivery (free delivery over €30) | цитата подтверждена на сайте | ок |
| petworld-nutgrove | descriptions | en: зоомагазин в Nutgrove Shopping Centre, корма, доставка; local: пусто | подтверждено сайтом, local пустой | ок |
| petworld-nutgrove | review_insights | нет в городе | review-insights/<slug>.json отсутствует | нет данных (файла нет) |
| outpaws | name | OUTPAWS | OUTPAWS | ок |
| outpaws | address | Ballsbridge Ave, Dublin 4, D04 X4C8, Ireland | Ballsbridge Ave, Dublin 4, D04 X4C8, Ireland | ок |
| outpaws | phone | +353 85 767 2121 | +353 85 767 2121 (Maps & сайт) | ок |
| outpaws | google_rating | 4.9 | 4.9 | ок |
| outpaws | google_rating_count | 60 | 60 | ок |
| outpaws | opening_hours | mo 07:00-19:00; tu 07:00-19:00; we 07:00-19:00; th 07:00-19:00; fr 07:00-19:00; sa closed; su closed | сайт /contact/: Mon-Fri 7am-7pm, Weekends Minding Only; Maps: mo-fr 8:00-17:30 | ок (по приоритету сайт > Maps) |
| outpaws | status | open (closed: "") | Open (не закрыто) | ок |
| outpaws | website | http://outpaws.ie/ | http://outpaws.ie/ (доступен) | ок |
| outpaws | prices:walk_60 | 30 | «€30 per walk (1 Hour Walk)» (сайт /dog-walking/) | ок |
| outpaws | facts / evidence | dog_walking, photo_updates | цитаты подтверждены на сайте | ок |
| outpaws | descriptions | en: выгул и присмотр в Ballsbridge, фотоотчеты; local: пусто | подтверждено сайтом, local пустой | ок |
| outpaws | review_insights | нет в городе | review-insights/<slug>.json отсутствует | нет данных (файла нет) |
| maow-care | name | Maow Care | Maow Care | ок |
| maow-care | address | Charleville Ave, Ballybough, Dublin, D03 RX74, Ireland | Charleville Ave, Ballybough, Dublin, D03 RX74, Ireland | ок |
| maow-care | phone | +353 87 319 8534 | +353 87 319 8534 (Maps & сайт) | ок |
| maow-care | google_rating | 4.9 | 4.9 | ок |
| maow-care | google_rating_count | 51 | 51 | ок |
| maow-care | opening_hours | 24h | Open 24 hours (Maps) | ок |
| maow-care | status | open (closed: "") | Open (не закрыто) | ок |
| maow-care | website | https://www.maowcare.com/ | https://www.maowcare.com/ (доступен) | ок |
| maow-care | prices:cat_visit | 25 - 30 | «Half hour visit: 25 Euro», «One hour visit: 30 Euro» (сайт /price) | ок |
| maow-care | prices:house_sitting_night | 105 | «Overnight sitting: 105 Euro per night, from 20:00 to 8:00 the next day.» (сайт /price) | ок |
| maow-care | facts / evidence | cat_visits, home_sitting, meet_greet | цитаты подтверждены на странице /price | ок |
| maow-care | descriptions | en: уход за кошками с 2009 года, визиты, ночной присмотр; local: пусто | подтверждено сайтом, local пустой | ок |
| maow-care | review_insights | нет в городе | review-insights/<slug>.json отсутствует | нет данных (файла нет) |
| cara-veterinary-hospital-blanchardstown | name | Cara Veterinary Hospital | Cara Veterinary Hospital \| Blanchardstown Vet \| Dublin 15 \| Cara Veterinary Group | ок |
| cara-veterinary-hospital-blanchardstown | address | U233, 2 Blanchardstown Corporate Park 1, Ballycoolin Rd, Ballycoolen, Dublin 15, D15 Y384, Ireland | U233, 2 Blanchardstown Corporate Park 1, Ballycoolin Rd, Ballycoolen, Dublin 15, D15 Y384, Ireland | ок |
| cara-veterinary-hospital-blanchardstown | phone | +353 (0)1 885 3253 | +353 1 885 3253 (Maps & сайт) | ок |
| cara-veterinary-hospital-blanchardstown | google_rating | 4.5 | 4.5 | ок |
| cara-veterinary-hospital-blanchardstown | google_rating_count | 92 | 92 | ок |
| cara-veterinary-hospital-blanchardstown | opening_hours | mo 08:30-19:00; tu 08:30-19:00; we 08:30-19:00; th 08:30-19:00; fr 08:30-19:00; sa 08:30-15:30; su 10:00-13:30 | Mon-Fri 8:30-19:00, Sat 8:30-15:30, Sun 10:00-13:30 (Maps & сайт) | ок |
| cara-veterinary-hospital-blanchardstown | status | open (closed: "") | Open (не закрыто) | ок |
| cara-veterinary-hospital-blanchardstown | website | https://www.caravetgroup.com/ | https://www.caravetgroup.com/ (доступен) | ок |
| cara-veterinary-hospital-blanchardstown | prices | нет (клиника общего профиля без опубликованного прайса) | на сайте прайс не опубликован | ок |
| cara-veterinary-hospital-blanchardstown | facts / evidence | appointment_only, online_booking, 6 специальностей | все цитаты подтверждены на сайте | ок |
| cara-veterinary-hospital-blanchardstown | descriptions | en: ветгоспиталь в Ballycoolin, 7 дней в неделю, хирургия, УЗИ; local: пусто | подтверждено сайтом, local пустой | ок |
| cara-veterinary-hospital-blanchardstown | review_insights | нет в городе | review-insights/<slug>.json отсутствует | нет данных (файла нет) |
| castle-veterinary-clinic | name | Castle Veterinary Clinic | Castle Veterinary Clinic | ок |
| castle-veterinary-clinic | address | 6 Castle Park, Clondalkin, Monkstown, Co. Dublin, A94 W9K0, Ireland | 6 Castle Park, Clondalkin, Monkstown, Co. Dublin, A94 W9K0, Ireland | ок |
| castle-veterinary-clinic | phone | +353 (0)1 464 0499 | +353 1 464 0499 (Maps & сайт) | ок |
| castle-veterinary-clinic | google_rating | 4.8 | 4.8 | ок |
| castle-veterinary-clinic | google_rating_count | 555 | 555 | ок |
| castle-veterinary-clinic | opening_hours | mo 08:30-19:00; tu 08:30-19:00; we 08:30-19:00; th 08:30-19:00; fr 08:30-19:00; sa 08:30-14:00; su 11:00-14:00 | Mon-Fri 8:30-19:00, Sat 8:30-14:00, Sun 11:00-14:00 (Maps & сайт) | ок |
| castle-veterinary-clinic | status | open (closed: "") | Open (не закрыто) | ок |
| castle-veterinary-clinic | website | https://castlevets.ie/ | https://castlevets.ie/ (доступен) | ок |
| castle-veterinary-clinic | prices | нет (клиника без публичного прейскуранта) | на сайте публичный прейскурант отсутствует | ок |
| castle-veterinary-clinic | facts / evidence | online_booking, surgery, laboratory, x-ray, ultrasound | все цитаты подтверждены на сайте | ок |
| castle-veterinary-clinic | descriptions | en: ветклиника в Clondalkin более 25 лет, хирургия, лаборатория; local: пусто | подтверждено сайтом, local пустой | ок |
| castle-veterinary-clinic | review_insights | нет в городе | review-insights/<slug>.json отсутствует | нет данных (файла нет) |

---

## 2. Итог взаимной проверки

- **Чистых мест:** 12 из 12.
- **Расхождения по тяжести:**
  - **Тяжёлые (неверная цена / неверный телефон / неверный адрес / закрытое заведение):** 0.
    - Все 12 заведений работают (статус Open на Google Maps и рабочих сайтах).
    - Все телефоны и адреса на 100% совпадают с живыми источниками (Google Maps и официальные сайты).
    - Все опубликованные цены (18 позиций у 5 заведений: Paws Solutions, Coco Bello, VetSit, River Cottage, Maow Care, Outpaws) до цента подтверждены цитатами со страниц прайс-листов.
  - **Средние / лёгкие расхождения:**
    - `outpaws`: часы работы в строке (`mo 07:00-19:00; tu 07:00-19:00; we 07:00-19:00; th 07:00-19:00; fr 07:00-19:00; sa closed; su closed`) взяты с официального сайта (`https://www.outpaws.ie/contact/`, где указано *«Opening Hours: Mon - Fri 7am - 7pm, Weekends Dog Minding Only»*). На карточке Google Maps указано `mo-fr 08:00-17:30`. Согласно стандарту (`docs/card-spec.md`, §5 приоритет: официальный сайт > карточка Google Maps), выбор источника корректен.
    - `paws-solutions-pet-grooming-palmerstown`: в карточке Google Maps график по дням не опубликован; в нашей строке указано `by-appointment`, что подтверждается сайтом места (*«Grooming is by appointment only»*).
  - **Review Insights:** в городе Дублин файлы `review-insights/*.json` не создавались (папка отсутствует в репозитории). Проверены последние отзывы на карточках Google Maps — отзывы положительные, тональность совпадает со сводными оценками.
  - **Локализация:** Дублин — англоязычный город (`city.json`: `locale: "en"`, `locales: []`), поэтому поля `*_local` правомерно пустые в соответствии со спецификацией (`docs/card-spec.md`, § «Два языка»).
