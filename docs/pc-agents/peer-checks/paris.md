# Взаимная проверка выборки: Париж (Paris)

- **Город:** Paris (`paris`)
- **Проверяющий:** Antigravity (ПК 10)
- **Дата проверки:** 2026-10-16
- **Ветка проверки:** `pc10/peercheck-paris`
- **Источник данных:** `origin/city/paris` (`data/cities/paris/`)
- **Выборка:** 12 мест (по 2 на категорию: DOG_TRAINING, GROOMING, PET_HOTEL, PET_SHOP, PET_SITTING, VET_CLINIC)

---

## 1. Сводная таблица проверки по местам

| слаг | поле | у нас | на источнике | вердикт (ок / расхождение / нет данных) |
|---|---|---|---|---|
| pet-care-paris | name | Comportementaliste chat et chien, service de promenade pour chien, pet sitting - Pet Care | Comportementaliste chat et chien, service de promenade pour chien, pet sitting - Pet Care | ок |
| pet-care-paris | address | 112 Rue de Vaugirard, 75006 Paris, France | 16 Rue Jean Ferrandi, 75006 Paris, France (Maps & сайт Mentions Légales) | расхождение |
| pet-care-paris | phone | +33 6 52 38 78 86 | +33 7 69 96 42 93 (07 69 96 42 93 на Maps и сайте) | расхождение |
| pet-care-paris | google_rating | 5.0 | 4.8 (Maps) | расхождение |
| pet-care-paris | google_rating_count | 122 | 52 (Maps) | расхождение |
| pet-care-paris | opening_hours | mo 08:00-19:00; tu 08:00-19:00; we 08:00-19:00; th 08:00-19:00; fr 08:00-19:00; sa 08:00-19:00; su closed | mo-sa 09:00-20:00; su 10:00-20:00 (Maps) | расхождение |
| pet-care-paris | status | open (closed: "") | Open (не закрыто) | ок |
| pet-care-paris | website | https://www.pet-care.fr/ | https://www.pet-care.fr/ (доступен) | ок |
| pet-care-paris | prices:private_lesson | 70 (note: «Cours Éducation & rééducation canine 70 € / cours») | 90 (сайт: «Cours Éducation & rééducation canine (prix/cours) 90 euros 90 €»; в evidence quote «90 euros 90 €») | расхождение |
| pet-care-paris | prices:behavior_consult | 130 (note: «Bilan Comportemental Chien / Chat 130 € / bilan») | 160 (сайт: «Bilan comportemental canin & plan d’action personnalisé 160 euros 160 €»; в evidence quote «160 euros 160 €») | расхождение |
| pet-care-paris | facts / evidence | puppy_training, behaviour_problems, private_lessons, home_training | подтверждены на сайте pet-care.fr | ок |
| pet-care-paris | descriptions | en и fr: услуги зоопсихолога для собак и кошек, дрессировка, прогулки | факты подтверждены сайтом, en и fr совпадают | ок |
| pet-care-paris | review_insights | review-insights/pet-care-paris.json (7 отзывов за период) | 3 свежих отзыва на Maps (Christele A., Alexis G., Maya Fink) хвалят доброжелательность Лауры и мягкие методы; сводке не противоречат | ок |
| equilicat | name | EquiliCat - Hugues Martinat - Comportementaliste Chat | EquiliCat - Hugues Martinat - Comportementaliste Chat | ок |
| equilicat | address | 3 Rue d'Arsonval, 75015 Paris, France | 3 Rue d'Arsonval, 75015 Paris, France | ок |
| equilicat | phone | +33 7 63 06 05 99 | +33 7 63 06 05 99 (Maps) / 07.63.06.05.99 (сайт) | ок |
| equilicat | google_rating | 5.0 | 5.0 (Maps) | ок |
| equilicat | google_rating_count | 107 | 109 (Maps, в пределах ±15%) | ок |
| equilicat | opening_hours | mo 10:00-21:00; tu 10:00-21:00; we 10:00-21:00; th 10:00-21:00; fr 10:00-21:00; sa 11:00-20:00; su closed | сайт /contacter-comportementaliste-chat: Lundi-Vendredi 10:00-21:00, Samedi 11:00-20:00 (Maps: 08:00-23:00) | ок (по приоритету сайт > Maps) |
| equilicat | status | open (closed: "") | Open (не закрыто) | ок |
| equilicat | website | https://www.equilicat.com/ | https://www.equilicat.com/ (доступен) | ок |
| equilicat | prices:behavior_consult | 150 (note: «pas de frais de déplacement) 150 euros») | 150 (сайт: «UN TARIF UNIQUE (pas de coût caché, pas de frais de déplacement) 150 euros») | ок |
| equilicat | facts / evidence | behaviour_problems, home_training, online_lessons, private_lessons | все цитаты подтверждены на сайте | ок |
| equilicat | descriptions | en и fr: консультации по поведению кошек на дому и онлайн, устранение агрессии и нечистоплотности | подтверждено сайтом, en и fr совпадают | ок |
| equilicat | review_insights | review-insights/equilicat.json (15 отзывов за период) | свежие отзывы на Maps хвалят метод Юга Мартина, помощь в отношениях между кошками; сводке не противоречат | ок |
| au-paradis-canin | name | Au Paradis Canin | Au Paradis Canin | ок |
| au-paradis-canin | address | 11 Bis Rue des Fossés Saint-Marcel, 75005 Paris, France | 21 Rue du Cardinal Lemoine, 75005 Paris, France (Maps и цитата в evidence) | расхождение |
| au-paradis-canin | phone | +33 1 43 31 77 46 | +33 1 43 29 25 59 (Maps) | расхождение |
| au-paradis-canin | google_rating | 4.8 | 4.2 (Maps) | расхождение |
| au-paradis-canin | google_rating_count | 187 | 115 (Maps) | расхождение |
| au-paradis-canin | opening_hours | mo closed; tu 09:00-19:00; we 09:00-19:00; th 09:00-19:00; fr 09:00-19:00; sa 09:00-19:00; su closed | mo closed; tu 09:00-18:30; we closed; th 09:00-18:30; fr 09:00-19:00; sa 08:30-19:00; su closed (Maps) | расхождение |
| au-paradis-canin | status | open (closed: "") | Open (не закрыто) | ок |
| au-paradis-canin | website | http://paradiscanin.com/ | заглушка SiteGround Robot Challenge (SG-Captcha); домен услуг auparadiscanin.com не резолвится | расхождение / капча |
| au-paradis-canin | prices | нет (запись по телефону) | публичный прейскурант отсутствует | ок |
| au-paradis-canin | facts / evidence | appointment_only, cats, dogs | цитата в evidence содержит верный адрес «21 Rue du Cardinal Lemoine», но в строку ошибочно внесен «11 Bis Rue des Fossés Saint-Marcel» | расхождение |
| au-paradis-canin | descriptions | en и fr: салон в 5-м округе, стрижка, купание собак и кошек (в тексте описания указан адрес Rue du Cardinal Lemoine) | описание точнее строки; en и fr совпадают | ок |
| au-paradis-canin | review_insights | review-insights/au-paradis-canin.json (11 отзывов, смешанная тональность) | свежие отзывы на Maps (Каролин, стрижки терьеров, споры о ценах) соответствуют сводке | ок |
| la-tour-caline | name | La tour Câline | La tour Câline | ок |
| la-tour-caline | address | 11 Rue des Sablons, 75116 Paris, France | 129 Rue Lauriston, 75016 Paris, France (Maps и сайт Kalendes) | расхождение |
| la-tour-caline | phone | +33 1 47 04 22 23 | +33 1 45 05 54 25 (01.45.05.54.25 на Maps и сайте Kalendes) | расхождение |
| la-tour-caline | google_rating | 4.8 | 4.1 (Maps) | расхождение |
| la-tour-caline | google_rating_count | 104 | 127 (Maps) | расхождение |
| la-tour-caline | opening_hours | mo closed; tu 09:00-19:00; we 09:00-19:00; th 09:00-19:00; fr 09:00-19:00; sa 09:00-19:00; su closed | сайт Kalendes: Lundi au samedi de 9h30 à 17h30; Maps: mo-sa 10:00-19:00, su closed (в понедельник открыто) | расхождение |
| la-tour-caline | status | open (closed: "") | Open (не закрыто) | ок |
| la-tour-caline | website | https://www.kalendes.com/site/latourcaline/welcome | https://www.kalendes.com/site/latourcaline/welcome (доступен) | ок |
| la-tour-caline | prices | нет (динамическая запись через Kalendes) | форма бронирования Kalendes без статичной таблицы цен | ок |
| la-tour-caline | facts / evidence | appointment_only, cats, dogs | подтверждены на сайте Kalendes | ок |
| la-tour-caline | descriptions | en и fr: салон в 16-м округе с 20-летним стажем (в тексте описания указан верный адрес Rue Lauriston) | подтверждено сайтом, en и fr совпадают | ок |
| la-tour-caline | review_insights | review-insights/la-tour-caline.json (19 отзывов, отзывы о смене команды, стрижках) | свежие отзывы на Maps (новая команда, онлайн-запись) соответствуют сводке | ок |
| motelamatou-pension-pour-chats-a-paris-15e | name | MOTELAMATOU \| Pension pour chats à Paris 15e | MOTELAMATOU \| Pension pour chats à Paris 15e | ок |
| motelamatou-pension-pour-chats-a-paris-15e | address | 19 Rue Borromée, 75015 Paris, France | 19 Rue Borromée, 75015 Paris, France | ок |
| motelamatou-pension-pour-chats-a-paris-15e | phone | +33 1 42 73 63 28 | +33 1 42 73 63 28 | ок |
| motelamatou-pension-pour-chats-a-paris-15e | google_rating | 4.5 | 4.5 (Maps) | ок |
| motelamatou-pension-pour-chats-a-paris-15e | google_rating_count | 92 | 92 (Maps) | ок |
| motelamatou-pension-pour-chats-a-paris-15e | opening_hours | mo 10:00-12:00; tu 10:00-12:00; we 10:00-12:00; th 10:00-12:00; fr 10:00-12:00; sa 10:00-12:00; su 10:00-12:00 | сайт /contact: «Ouvert 7j/7 entre 10h et 12h» | ок |
| motelamatou-pension-pour-chats-a-paris-15e | status | open (closed: "") | Open (не закрыто) | ок |
| motelamatou-pension-pour-chats-a-paris-15e | website | https://www.matous.fr/ | https://www.matous.fr/ (доступен) | ок |
| motelamatou-pension-pour-chats-a-paris-15e | prices:cat_night | 39 (note: «Coût de la nuitée 39 € pour un chat») | 39 (сайт: «Le coût de la nuitée est de 39.€ pour un chat») | ок |
| motelamatou-pension-pour-chats-a-paris-15e | facts / evidence | cats, vaccination_required, 20 боксов, основан в 2004 г. | все цитаты подтверждены на сайте matous.fr | ок |
| motelamatou-pension-pour-chats-a-paris-15e | descriptions | en и fr: кошачий отель на юге Парижа с 2004 года, дуплекс-боксы, уход | подтверждено сайтом, en и fr совпадают | ок |
| motelamatou-pension-pour-chats-a-paris-15e | review_insights | review-insights/motelamatou-pension-pour-chats-a-paris-15e.json (12 отзывов, хвалят хозяйку Фабьен) | свежие отзывы на Maps (Barthélemy Nancy, CS PRO, Plume_grise) подтверждают отличный уход Фабьен; сводке не противоречат | ок |
| berlioz-hotel-felin | name | Berlioz Hôtel Félin | Berlioz Hôtel Félin | ок |
| berlioz-hotel-felin | address | 3 Rue d'Alexandrie, 75002 Paris, France | 3 Rue d'Alexandrie, 75002 Paris, France | ок |
| berlioz-hotel-felin | phone | +33 1 42 36 13 65 | +33 1 42 36 13 65 | ок |
| berlioz-hotel-felin | google_rating | 5.0 | 5.0 (Maps) | ок |
| berlioz-hotel-felin | google_rating_count | 93 | 93 (Maps) | ок |
| berlioz-hotel-felin | opening_hours | mo 10:00-19:00; tu 10:00-19:00; we 10:00-19:00; th 10:00-19:00; fr 10:00-19:00; sa 10:00-19:00; su closed | mo-sa 10:00-19:00; su closed (Maps и сайт) | ок |
| berlioz-hotel-felin | status | open (closed: "") | Open (не закрыто) | ок |
| berlioz-hotel-felin | website | http://www.hotelberlioz.fr/ | https://www.hotelberlioz.fr/#/home (доступен) | ок |
| berlioz-hotel-felin | prices | нет (в notes: «prices: none (booking platform requires step-by-step account login to view dates and options; no static pricing table published)») | на сайте на главной странице в разделе «Nos formules et tarifs tout compris» опубликованы статичные цены: Nuitée 45 € / nuit, Semaine 280 € (40 €/nuit), Chat suppl. 10 € / nuit | расхождение |
| berlioz-hotel-felin | facts / evidence | cats, vaccination_required, 350 м2 на 3 уровнях | подтверждены в бандле Terms.683a8426.js | ок |
| berlioz-hotel-felin | descriptions | en и fr: отель для кошек 350 м2 на трех этажах в районе Sentier | подтверждено сайтом, en и fr совпадают | ок |
| berlioz-hotel-felin | review_insights | review-insights/berlioz-hotel-felin.json (10 отзывов) | свежие отзывы на Maps (Sab Jm, Imen B. A., Maelle Andre) хвалят уход, фотоотчеты и условия; сводке не противоречат | ок |
| animalis-paris-11-richard-lenoir | name | Animalis Paris 11 - Richard Lenoir | Animalis Paris 11 - Richard Lenoir | ок |
| animalis-paris-11-richard-lenoir | address | 137 Bd Richard-Lenoir, 75011 Paris, France | 106 Bd Richard-Lenoir, 75011 Paris, France (Maps и сайт магазина) | расхождение |
| animalis-paris-11-richard-lenoir | phone | +33 1 43 55 54 86 | +33 1 87 76 08 63 (Maps) | расхождение |
| animalis-paris-11-richard-lenoir | google_rating | 4.1 | 4.5 (Maps) | расхождение |
| animalis-paris-11-richard-lenoir | google_rating_count | 521 | 343 (Maps) | расхождение |
| animalis-paris-11-richard-lenoir | opening_hours | mo 10:00-19:00; tu 10:00-19:00; we 10:00-19:00; th 10:00-19:00; fr 10:00-19:00; sa 10:00-19:00; su closed | mo-sa 10:00-20:00, su 10:00-14:00 (Maps и сайт) | расхождение |
| animalis-paris-11-richard-lenoir | status | open (closed: "") | Open (не закрыто) | ок |
| animalis-paris-11-richard-lenoir | website | https://magasin.animalis.com/55-animalis-paris-11-richard-lenoir?utm_source=gmb | https://magasin.animalis.com/55-animalis-paris-11-richard-lenoir?utm_source=gmb (доступен) | ок |
| animalis-paris-11-richard-lenoir | prices | нет (розничный зоомагазин) | розничные товары каталога | ок |
| animalis-paris-11-richard-lenoir | facts / evidence | delivery, click-and-collect | подтверждены на сайте | ок |
| animalis-paris-11-richard-lenoir | descriptions | en и fr: зоомагазин на бульваре Ришар-Ленуар, корма, товары для животных | подтверждено сайтом, en и fr совпадают | ок |
| animalis-paris-11-richard-lenoir | review_insights | review-insights/animalis-paris-11-richard-lenoir.json (25 отзывов, чистота, вежливые консультанты) | свежие отзывы на Maps соответствуют сводке | ок |
| reglo-les-croquettes-saines-et-efficaces-bureaux | name | Réglo, les Croquettes Saines et Efficaces - Bureaux | Réglo, les Croquettes Saines et Efficaces - Bureaux | ок |
| reglo-les-croquettes-saines-et-efficaces-bureaux | address | 19 Rue de Turbigo, 75002 Paris, France | Maps: 27 Bd Saint-Martin, 75003 Paris, France; сайт: 12 rue Blanche 75009 Paris (19 Rue de Turbigo на живых источниках отсутствует) | расхождение |
| reglo-les-croquettes-saines-et-efficaces-bureaux | phone | +33 1 89 71 31 16 | +33 1 87 20 02 40 (01 87 20 02 40 на Maps и сайте) | расхождение |
| reglo-les-croquettes-saines-et-efficaces-bureaux | google_rating | 4.8 | 4.8 (Maps) | ок |
| reglo-les-croquettes-saines-et-efficaces-bureaux | google_rating_count | 181 | 781 (Maps) | расхождение |
| reglo-les-croquettes-saines-et-efficaces-bureaux | opening_hours | mo 09:30-18:30; tu 09:30-18:30; we 09:30-18:30; th 09:30-18:30; fr 09:30-18:30; sa closed; su closed | mo-fr 09:30-17:30, sa-su closed (Maps и сайт) | расхождение |
| reglo-les-croquettes-saines-et-efficaces-bureaux | status | open (closed: "") | Open (не закрыто) | ок |
| reglo-les-croquettes-saines-et-efficaces-bureaux | website | https://www.reglo.fr/ | https://www.reglo.fr/ (доступен) | ок |
| reglo-les-croquettes-saines-et-efficaces-bureaux | prices | нет (онлайн-подписка на корма) | онлайн-каталог | ок |
| reglo-les-croquettes-saines-et-efficaces-bureaux | facts / evidence | delivery | доставка подтверждена на сайте | ок |
| reglo-les-croquettes-saines-et-efficaces-bureaux | descriptions | en и fr: гипоаллергенные корма на протеине насекомых, доставка по Франции | подтверждено сайтом, en и fr совпадают | ок |
| reglo-les-croquettes-saines-et-efficaces-bureaux | review_insights | review-insights/reglo-les-croquettes-saines-et-efficaces-bureaux.json (10 отзывов) | свежие отзывы на Maps (Louanne Apercé, Sylvia Maeger, Marie-France) подтверждают решение проблем с аллергией и кожным зудом; сводке не противоречат | ок |
| pausepapouilles | name | PausePapouilles | PausePapouilles - Pet sitter pour chats & chiens parisiens | ок |
| pausepapouilles | address | 104 Rue de la Roquette, 75011 Paris, France | 104 Rue de la Roquette, 75011 Paris, France | ок |
| pausepapouilles | phone | +33 6 15 16 45 62 | +33 6 15 16 45 62 (06.15.16.45.62 на Maps и сайте) | ок |
| pausepapouilles | google_rating | 5.0 | 5.0 (Maps) | ок |
| pausepapouilles | google_rating_count | 327 | 327 (Maps) | ок |
| pausepapouilles | opening_hours | пусто (выездная служба) | Maps: Ouvert 24h/24 | ок |
| pausepapouilles | status | open (closed: "") | Open (не закрыто) | ок |
| pausepapouilles | website | https://pausepapouilles.com/ | https://pausepapouilles.com/ (доступен) | ок |
| pausepapouilles | prices:walk_30 | 30 (note: «La petite pause : 30 min / 30€ ttc») | 30 (сайт /promenades/: «LA PETITE PAUSE : 30 MIN / 30€ TTC») | ок |
| pausepapouilles | prices:walk_60 | 42 (note: «La grande récré : 1 h / 42€ ttc») | 42 (сайт /promenades/: «LA GRANDE RÉCRÉ : 1 H / 42€ TTC») | ок |
| pausepapouilles | prices:cat_visit | 30 (note: «La petite pause : 30 min / 30€ ttc») | 30 (сайт /visites-a-domicile/: «LA PETITE PAUSE : 30 MIN / 30€ TTC») | ок |
| pausepapouilles | prices:house_sitting_night | 120 (note: «Nuit 16H / 120€ TTC») | 120 (сайт /home-sitting/: «Nuit 16H / 120€ TTC») | ок |
| pausepapouilles | prices:daycare_day | 20 (note: «Garde de jour 8h-19h / 20€/h TTC») | 20 (сайт /home-sitting/: «Garde de jour 8h-19h / 20€/h TTC») | ок |
| pausepapouilles | facts / evidence | dog_walking, cat_visits, home_sitting, medication, meet_greet, photo_updates | все 12 цитат подтверждены на страницах сайта | ок |
| pausepapouilles | descriptions | en и fr: выгул собак, визиты к кошкам, ночной присмотр, фотоотчеты | подтверждено сайтом, en и fr совпадают | ок |
| pausepapouilles | review_insights | review-insights/pausepapouilles.json (26 отзывов, забота, фотоотчеты) | свежие отзывы на Maps (Eva Valent, Pauline H, Laura Quémard) подтверждают пунктуальность, фото/видео и заботу; сводке не противоречат | ок |
| la-laisse-dog-walker | name | La Laisse Dog Walker | La Laisse Dog Walker | ок |
| la-laisse-dog-walker | address | 80 Rue Boursault, 75017 Paris, France | 80 Rue Boursault, 75017 Paris, France | ок |
| la-laisse-dog-walker | phone | +33 6 02 14 48 76 | +33 6 02 14 48 76 (Maps) | ок |
| la-laisse-dog-walker | google_rating | 4.9 | 4.9 (Maps) | ок |
| la-laisse-dog-walker | google_rating_count | 109 | 109 (Maps) | ок |
| la-laisse-dog-walker | opening_hours | пусто | пусто (на Maps «Ajouter des horaires») | ок |
| la-laisse-dog-walker | status | open (closed: "") | Open (не закрыто) | ок |
| la-laisse-dog-walker | website | пусто | пусто (сайта нет) | ок |
| la-laisse-dog-walker | prices | нет | нет | ок |
| la-laisse-dog-walker | facts / evidence | dog_walking, cat_sitting, dogs | подтверждено карточкой Maps | ок |
| la-laisse-dog-walker | descriptions | en и fr: прогулки и присмотр за собаками в Париже, договоренность по телефону | строго по правилу У-03 (без выдумок); en и fr совпадают | ок |
| la-laisse-dog-walker | review_insights | review-insights/la-laisse-dog-walker.json (5 отзывов) | свежие отзывы на Maps (Isabelle Farrugia, Joanna Olsson) подтверждают многолетний уход Николя и лесные прогулки; сводке не противоречат | ок |
| sevetys-faubourg-poissonniere-paris | name | Clinique vétérinaire Paris 10 - Faubourg Poissonnière - Sevetys | Clinique vétérinaire Paris 10 - Faubourg Poissonnière - Sevetys | ок |
| sevetys-faubourg-poissonniere-paris | address | 110 Rue du Faubourg Poissonnière, 75010 Paris, France | 116 Rue du Faubourg Poissonnière, 75010 Paris, France (Maps и сайт Sevetys) | расхождение |
| sevetys-faubourg-poissonniere-paris | phone | +33 1 48 78 30 84 | +33 1 42 82 04 05 (01 42 82 04 05 на Maps и сайте Sevetys) | расхождение |
| sevetys-faubourg-poissonniere-paris | google_rating | 4.8 | 4.5 (Maps и сайт Sevetys) | расхождение |
| sevetys-faubourg-poissonniere-paris | google_rating_count | 686 | 206 (Maps) | расхождение |
| sevetys-faubourg-poissonniere-paris | opening_hours | mo 08:30-19:30; tu 08:30-19:30; we 08:30-19:30; th 08:30-19:30; fr 08:30-19:30; sa 09:00-18:00; su closed | mo-fr 09:00-19:00, sa 09:00-17:00, su closed (Maps и сайт Sevetys) | расхождение |
| sevetys-faubourg-poissonniere-paris | status | open (closed: "") | Open (не закрыто) | ок |
| sevetys-faubourg-poissonniere-paris | website | https://sevetys.fr/cliniques-veterinaires/clinique-veterinaire-du-faubourg-poissonniere-paris-fpo/?utm_source=gmb | https://sevetys.fr/cliniques-veterinaires/clinique-veterinaire-du-faubourg-poissonniere-paris-fpo/?utm_source=gmb (доступен) | ок |
| sevetys-faubourg-poissonniere-paris | prices | нет (в notes: «prices: none (no price list published on clinic site)») | публичный прейскурант на сайте отсутствует | ок |
| sevetys-faubourg-poissonniere-paris | facts / evidence | appointment_only, online_booking, 6 специальностей | подтверждены на сайте Sevetys | ок |
| sevetys-faubourg-poissonniere-paris | descriptions | en и fr: клиника в 10-м округе, хирургия, цифровая рентгенография, УЗИ, стационар | подтверждено сайтом, en и fr совпадают | ок |
| sevetys-faubourg-poissonniere-paris | review_insights | review-insights/sevetys-faubourg-poissonniere-paris.json (10 отзывов) | свежие отзывы на Maps (Jessie Jiang, Nadja, Camille de la Fosse) соответствуют сводке | ок |
| sevetys-crozatier-paris | name | Clinique vétérinaire Crozatier - Référés, Urgences & Gardes 24h/24 - Paris - Sevetys | Clinique vétérinaire Crozatier - Référés, Urgences & Gardes 24h/24 - Paris - Sevetys | ок |
| sevetys-crozatier-paris | address | 11 Rue Crozatier, 75012 Paris, France | 61 Rue Crozatier, 75012 Paris, France (Maps и сайт Sevetys) | расхождение |
| sevetys-crozatier-paris | phone | +33 1 43 43 00 00 | +33 1 43 43 17 13 (01 43 43 17 13 на Maps и сайте Sevetys) | расхождение |
| sevetys-crozatier-paris | google_rating | 4.8 | 4.2 (Maps и сайт Sevetys) | расхождение |
| sevetys-crozatier-paris | google_rating_count | 521 | 523 (Maps, в пределах ±15%) | ок |
| sevetys-crozatier-paris | opening_hours | mo 08:30-19:30; tu 08:30-19:30; we 08:30-19:30; th 08:30-19:30; fr 08:30-19:30; sa 09:00-18:00; su closed | круглосуточно 24/7 (Ouvert 24h/24 на Maps и сайте Sevetys) | расхождение |
| sevetys-crozatier-paris | status | open (closed: "") | Open (не закрыто) | ок |
| sevetys-crozatier-paris | website | https://sevetys.fr/cliniques-veterinaires/clinique-veterinaire-crozatier-referes-urgences-gardes-24h-24-paris-sta/?utm_source=gmb | https://sevetys.fr/cliniques-veterinaires/clinique-veterinaire-crozatier-referes-urgences-gardes-24h-24-paris-sta/?utm_source=gmb (доступен) | ок |
| sevetys-crozatier-paris | prices | нет (в notes: «prices: none (no price list published on clinic site)») | публичный прейскурант на сайте отсутствует | ок |
| sevetys-crozatier-paris | facts / evidence | emergency 24/7, surgery, scanner/CT, hospitalization | подтверждены на сайте Sevetys | ок |
| sevetys-crozatier-paris | descriptions | en и fr: круглосуточная клиника неотложной помощи и référés возле Лионского вокзала | подтверждено сайтом, en и fr совпадают | ок |
| sevetys-crozatier-paris | review_insights | review-insights/sevetys-crozatier-paris.json (54 отзыва) | свежие отзывы на Maps (Maïby Maï, Capucine Schoettlé, Chloé Ménager) подтверждают экстренную помощь и стационар 24/7; сводке не противоречат | ок |

---

## 2. Итог взаимной проверки

- **Чистых мест:** 4 из 12 (`equilicat`, `motelamatou-pension-pour-chats-a-paris-15e`, `pausepapouilles`, `la-laisse-dog-walker`).
- **Мест с расхождениями:** 8 из 12 (`pet-care-paris`, `au-paradis-canin`, `la-tour-caline`, `berlioz-hotel-felin`, `animalis-paris-11-richard-lenoir`, `reglo-les-croquettes-saines-et-efficaces-bureaux`, `sevetys-faubourg-poissonniere-paris`, `sevetys-crozatier-paris`).

### Расхождения по тяжести:

#### 1. Тяжёлые расхождения (неверная цена / неверный телефон / неверный адрес / неверный график экстренной помощи)

1. **Неверные цены (расхождения цен в `prices.csv` против официального сайта):**
   - `pet-care-paris`:
     - `price:private_lesson`: в `prices.csv` внесена цена **70 €** (примечание: «Cours Éducation & rééducation canine 70 € / cours»), тогда как на официальном сайте места указано **90 €** («Cours Éducation & rééducation canine (prix/cours) 90 euros 90 €»). При этом в файле `evidence-09-training.csv` сам агент-сборщик записал цитату с ценой 90 € (`quote: 'Cours Éducation & rééducation canine (prix/cours) En savoir plus 90 euros 90 €'`), но в `prices.csv` записал 70 €.
     - `price:behavior_consult`: в `prices.csv` внесена цена **130 €** (примечание: «Bilan Comportemental Chien / Chat 130 € / bilan»), тогда как на сайте указано **160 €** («Bilan comportemental canin & plan d’action personnalisé 160 euros 160 €»). В цитате `evidence` у сборщика также стояла правильная цена 160 € (`quote: 'Bilan comportemental canin & plan d’action personnalisé En savoir plus 160 euros 160 €'`).
   - `berlioz-hotel-felin`:
     - В `prices.csv` цены отсутствуют (в notes указано «prices: none (booking platform requires step-by-step account login to view dates and options; no static pricing table published)»). Однако на главной странице сайта `http://www.hotelberlioz.fr/` в разделе «Nos formules et tarifs tout compris» опубликованы статичные открытые тарифы: **45 € / nuit** (1 кошка), **40 € / nuit** при недельном размещении (280 € / semaine), **10 € / nuit** за дополнительную кошку из того же дома.

2. **Неверные адреса в строке `businesses-*.csv`:**
   *Примечание: в исходном файле `candidates.csv` координаты и адреса с Google Maps были точными, однако при сборке кусков `businesses-*.csv` у 6 мест адреса оказались искажены.*
   - `pet-care-paris`: в строке `112 Rue de Vaugirard, 75006 Paris, France`. На Google Maps и на официальном сайте (в разделе Mentions Légales) указан адрес: **16 Rue Jean Ferrandi, 75006 Paris, France**.
   - `au-paradis-canin`: в строке `11 Bis Rue des Fossés Saint-Marcel, 75005 Paris, France`. На Google Maps и в самом файле `evidence-06-grooming.csv` сборщика указан адрес: **21 Rue du Cardinal Lemoine, 75005 Paris, France**.
   - `la-tour-caline`: в строке `11 Rue des Sablons, 75116 Paris, France`. На Google Maps и на официальном сайте Kalendes указан адрес: **129 Rue Lauriston, 75016 Paris, France**.
   - `animalis-paris-11-richard-lenoir`: в строке `137 Bd Richard-Lenoir, 75011 Paris, France`. На Google Maps и на официальном сайте сети Animalis указан адрес: **106 Bd Richard-Lenoir, 75011 Paris, France**.
   - `reglo-les-croquettes-saines-et-efficaces-bureaux`: в строке `19 Rue de Turbigo, 75002 Paris, France`. На Google Maps указан адрес **27 Bd Saint-Martin, 75003 Paris, France**, на сайте в контактах — **12 rue Blanche 75009 Paris**. Адрес 19 Rue de Turbigo не подтверждается источниками.
   - `sevetys-faubourg-poissonniere-paris`: в строке `110 Rue du Faubourg Poissonnière, 75010 Paris, France`. На Google Maps и официальном сайте Sevetys указан адрес: **116 Rue du Faubourg Poissonnière, 75010 Paris, France**.
   - `sevetys-crozatier-paris`: в строке `11 Rue Crozatier, 75012 Paris, France`. На Google Maps и официальном сайте Sevetys указан адрес: **61 Rue Crozatier, 75012 Paris, France**.

3. **Неверные телефонные номера в строке `businesses-*.csv`:**
   - `pet-care-paris`: в строке `+33 6 52 38 78 86`. На Google Maps и на сайте: **+33 7 69 96 42 93** (07 69 96 42 93).
   - `au-paradis-canin`: в строке `+33 1 43 31 77 46`. На Google Maps: **+33 1 43 29 25 59**.
   - `la-tour-caline`: в строке `+33 1 47 04 22 23`. На Google Maps и сайте: **+33 1 45 05 54 25**.
   - `animalis-paris-11-richard-lenoir`: в строке `+33 1 43 55 54 86`. На Google Maps: **+33 1 87 76 08 63**.
   - `reglo-les-croquettes-saines-et-efficaces-bureaux`: в строке `+33 1 89 71 31 16`. На Google Maps и сайте: **+33 1 87 20 02 40**.
   - `sevetys-faubourg-poissonniere-paris`: в строке `+33 1 48 78 30 84`. На Google Maps и сайте Sevetys: **+33 1 42 82 04 05**.
   - `sevetys-crozatier-paris`: в строке `+33 1 43 43 00 00`. На Google Maps и сайте Sevetys: **+33 1 43 43 17 13**.

4. **Искажение режима работы экстренной клиники:**
   - `sevetys-crozatier-paris`: круглосуточная клиника неотложной помощи и реанимации (Urgences & Gardes 24h/24) на Google Maps и официальном сайте работает непрерывно (`Ouvert 24h/24`, 7 дней в неделю). В нашей строке клиника записана с дневным графиком `mo 08:30-19:30... sa 09:00-18:00; su closed`, то есть закрыта ночью и по воскресеньям.

---

#### 2. Средние и лёгкие расхождения

1. **Рейтинги и число отзывов Google Maps (за пределами допусков ±0.1 / ±15%):**
   - `pet-care-paris`: рейтинг 5.0 (у нас) vs 4.8 (Maps); отзывов 122 vs 52.
   - `au-paradis-canin`: рейтинг 4.8 (у нас) vs 4.2 (Maps); отзывов 187 vs 115.
   - `la-tour-caline`: рейтинг 4.8 (у нас) vs 4.1 (Maps); отзывов 104 vs 127.
   - `animalis-paris-11-richard-lenoir`: рейтинг 4.1 (у нас) vs 4.5 (Maps); отзывов 521 vs 343.
   - `reglo-les-croquettes-saines-et-efficaces-bureaux`: отзывов 181 (у нас) vs 781 (Maps).
   - `sevetys-faubourg-poissonniere-paris`: рейтинг 4.8 (у нас) vs 4.5 (Maps); отзывов 686 vs 206.
   - `sevetys-crozatier-paris`: рейтинг 4.8 (у нас) vs 4.2 (Maps).

2. **Графики работы (несовпадение часов):**
   - `pet-care-paris`: у нас `08:00-19:00`, на Maps `mo-sa 09:00-20:00, su 10:00-20:00`.
   - `au-paradis-canin`: у нас открыто со вторника по субботу 09:00-19:00; на Maps среда закрыта, во вторник и четверг закрытие в 18:30.
   - `la-tour-caline`: у нас понедельник закрыт; на сайте указано `Lundi au samedi de 9h30 à 17h30`.
   - `animalis-paris-11-richard-lenoir`: у нас воскресенье закрыто, закрытие в 19:00; на Maps и сайте магазин открыт в воскресенье 10:00-14:00, в будни до 20:00.
   - `reglo-les-croquettes-saines-et-efficaces-bureaux`: у нас закрытие в 18:30; на Maps и сайте часы поддержки `09:30-17:30`.
   - `sevetys-faubourg-poissonniere-paris`: у нас `08:30-19:30`; на Maps и сайте `09:00-19:00`, в субботу до 17:00.

3. **Сайт и антибот-защита:**
   - `au-paradis-canin`: сайт `http://paradiscanin.com/` возвращает экран проверки роботов SiteGround (SG-Captcha); альтернативный домен услуг `auparadiscanin.com` с Google Maps не резолвится.

---

### Анализ качества текстов и отзывов:
- **Описания (`description` / `short_description`):** английские и французские версии согласованы между собой, не содержат недоказанных рекламных эпитетов. Примечательно, что авторы описаний в ряде случаев указали корректные адреса (например, для `au-paradis-canin` в тексте указана Rue du Cardinal Lemoine, а для `la-tour-caline` — Rue Lauriston), тогда как в столбце `address` таблицы `businesses-*.csv` были проставлены ошибочные адреса.
- **Сводки отзывов (`review-insights/*.json`):** проверены свежие отзывы на карточках Google Maps для всех заведений выборки. Фактическая тональность и темы отзывов (поведение животных, методы тренировок, условия содержания в пансионах, уход в клиниках, спорные моменты по ценам) полностью соответствуют содержимому сгенерированных сводок.
