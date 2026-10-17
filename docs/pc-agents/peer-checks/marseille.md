# Проверка напарника: Marseille (выборка из 12 мест)

- **Город:** Marseille (`marseille`)
- **Проверяющий:** Antigravity (ПК 11)
- **Дата проверки:** 2026-10-16
- **Ветка данных:** `origin/city/marseille`
- **Объём выборки:** 12 мест (по 2 места на каждую из 6 категорий: DOG_TRAINING, GROOMING, PET_HOTEL, PET_SHOP, PET_SITTING, VET_CLINIC)

---

## Таблица сверки данных с живыми источниками

| слаг | поле | у нас | на источнике | вердикт |
|---|---|---|---|---|
| `esprit-canin` | name | Esprit Canin - Educateur et Comportementaliste Canin à Domicile à Marseille | Esprit Canin - Educateur et Comportementaliste Canin à Domicile à Marseille | ок |
| `esprit-canin` | address | 6 Trav. de la Marbrerie, 13008 Marseille, France | 6 Trav. de la Marbrerie, 13008 Marseille, France (Google Maps; сайт /about/legal/) | ок |
| `esprit-canin` | phone | +33 6 86 08 21 95 | +33 6 86 08 21 95 (Google Maps; сайт /about/legal/: 0686082195) | ок |
| `esprit-canin` | google_rating / count | 4.9 (48) | 4.9 (48) (Google Maps) | ок |
| `esprit-canin` | opening_hours | пусто (notes: not published on Maps, sessions by appointment; site - not published) | пн–сб 09:00–20:00, вс закрыто (`mo 09:00-20:00; tu 09:00-20:00; we 09:00-20:00; th 09:00-20:00; fr 09:00-20:00; sa 09:00-20:00; su closed` на Google Maps) | расхождение |
| `esprit-canin` | status (closed) | открыто (closed='') | открыто | ок |
| `esprit-canin` | website | https://www.espritcanin.com/ | https://www.espritcanin.com/ | ок |
| `esprit-canin` | prices | нет (notes: site does not publish rates) | на сайте открытого прайс-листа нет (запись по звонку) | ок |
| `esprit-canin` | description / facts | Дрессировка и коррекция поведения на дому с 2009 года, 8-й округ | Все факты и цитаты дословно найдены на сайте | ок |
| `esprit-canin` | review-insights | есть (Isabelle, доброжелательность, 4h визит на дом, проблемы с лаем в одиночестве) | Сводка полностью соответствует свежим отзывам на Google Maps | ок |
| `les-canines` | name | Les Canines - educatrice comportementaliste canin et service de balade à Marseille | Les Canines - educatrice comportementaliste canin et service de balade à Marseille | ок |
| `les-canines` | address | 24 Cr Joseph Thierry, 13001 Marseille, France | 24 Cr Joseph Thierry, 13001 Marseille, France (Google Maps) | ок |
| `les-canines` | phone | +33 7 63 29 88 42 | +33 7 63 29 88 42 (Google Maps; сайт /contact-rendez-vous-marseille/: 07.63.29.88.42) | ок |
| `les-canines` | google_rating / count | 4.8 (41) | 4.8 (41) (Google Maps) | ок |
| `les-canines` | opening_hours | пусто (notes: not published on Maps, sessions by appointment; site - not published) | пн–сб 09:00–19:30, вс закрыто (`mo 09:00-19:30; tu 09:00-19:30; we 09:00-19:30; th 09:00-19:30; fr 09:00-19:30; sa 09:00-19:30; su closed` на Google Maps) | расхождение |
| `les-canines` | status (closed) | открыто (closed='') | открыто | ок |
| `les-canines` | website | https://www.lescanines.fr/ | https://www.lescanines.fr/ | ок |
| `les-canines` | prices | behavior_consult: 100 EUR; private_lesson: 55 EUR; group_lesson: 25 EUR | Bilan personnalisé 100 €, 55 € / séance, 25 € / balade (все 3 цены дословно подтверждены на сайте) | ок |
| `les-canines` | description / facts | Позитивное воспитание, этиология, прогулки, английский язык (languages: en) | Все факты и цитаты подтверждены сайтом ("Need Support in English? I've Got You Covered!") | ок |
| `les-canines` | review-insights | есть (Adelise, Canimobile, коллективные прогулки, адаптация собак из приюта) | Сводка полностью соответствует свежим отзывам на Google Maps | ок |
| `styl-dog-toilettage-marseille` | name | Styl'Dog Toilettage Marseille | Styl'Dog Toilettage Marseille | ок |
| `styl-dog-toilettage-marseille` | address | 75 Av. des Chartreux, 13004 Marseille, France | 75 Av. des Chartreux, 13004 Marseille, France (Google Maps, сайт) | ок |
| `styl-dog-toilettage-marseille` | phone | +33 4 91 08 40 42 | +33 4 91 08 40 42 (Google Maps; сайт: 04 91 08 40 42) | ок |
| `styl-dog-toilettage-marseille` | google_rating / count | 4.6 (43) | 4.6 (43) (Google Maps) | ок |
| `styl-dog-toilettage-marseille` | opening_hours | mo closed; tu 09:00-12:30,14:00-18:30; we 09:00-12:30,14:00-18:30; th 09:00-12:30,14:00-18:30; fr 09:00-12:30,14:00-18:30; sa 09:00-12:30; su closed | пн закр, вт–пт 9:00–12:30, 14:00–18:30, сб 9:00–12:30, вс закр (Google Maps, сайт) | ок |
| `styl-dog-toilettage-marseille` | status (closed) | открыто (closed='') | открыто | ок |
| `styl-dog-toilettage-marseille` | website | https://www.styl-dog.com/ | https://www.styl-dog.com/ | ок |
| `styl-dog-toilettage-marseille` | prices | full_groom: от 45 EUR; bath_dry: 35-50 EUR; hand_stripping: от 50 EUR; nail_trim: 5 EUR | Coupe tondeuse simple + bain à partir de 45 €, Bain + démélage 35-50 €, Epilation terrier à partir de 50 €, Coupe des ongles 5 € (все 4 цены на сайте) | ок |
| `styl-dog-toilettage-marseille` | description / facts | Салон с 1984 года, все породы, купание, тримминг, стрижка, товары | Все факты и цитаты дословно найдены на сайте | ок |
| `styl-dog-toilettage-marseille` | review-insights | есть (добрая хозяйка, бережный уход за пугливыми собаками, доступные цены) | Сводка полностью соответствует свежим отзывам на Google Maps | ок |
| `4-pattes` | name | 4 Pattes | 4 Pattes | ок |
| `4-pattes` | address | 86 Bd de Saint-Loup, 13010 Marseille, France | 86 Bd de Saint-Loup, 13010 Marseille, France (Google Maps) | ок |
| `4-pattes` | phone | +33 4 91 89 88 60 | +33 4 91 89 88 60 (Google Maps) | ок |
| `4-pattes` | google_rating / count | 4.8 (155) | 4.8 (155) (Google Maps) | ок |
| `4-pattes` | opening_hours | пусто (notes: not published on Maps) | вт, чт–сб 08:00–18:00, пн, ср, вс закрыто (`mo closed; tu 08:00-18:00; we closed; th 08:00-18:00; fr 08:00-18:00; sa 08:00-18:00; su closed` на Google Maps) | расхождение |
| `4-pattes` | status (closed) | открыто (closed='') | открыто | ок |
| `4-pattes` | website | — (notes: no website) | на карточке Google Maps сайт отсутствует | ок |
| `4-pattes` | prices | нет (оффлайн салон без сайта) | сайта нет, запись по телефону | ок |
| `4-pattes` | description / facts | Базовое описание по категории и адресу (У-03) | Соответствует категории и адресу | ок |
| `4-pattes` | review-insights | есть (Océane с мамой, бережное отношение, стрижка когтей у сложных собак) | Сводка полностью соответствует свежим отзывам на Google Maps | ок |
| `villa-jayne` | name | Villa Jayne ~ Pension Chats | Villa Jayne ~ Pension Chats | ок |
| `villa-jayne` | address | 34 Mnt de la Belle France, 13015 Marseille, France | 34 Mnt de la Belle France, 13015 Marseille, France (Google Maps, сайт) | ок |
| `villa-jayne` | phone | +33 6 23 17 92 84 | +33 6 23 17 92 84 (Google Maps; сайт: 06.23.17.92.84) | ок |
| `villa-jayne` | google_rating / count | 4.8 (78) | 4.8 (78) (Google Maps) | ок |
| `villa-jayne` | opening_hours | by-appointment (источник: сайт reglement.html "sur rendez-vous") | пн–сб 08:00–19:00, вс закрыто (`mo 08:00-19:00; tu 08:00-19:00; we 08:00-19:00; th 08:00-19:00; fr 08:00-19:00; sa 08:00-19:00; su closed` на Google Maps) | расхождение |
| `villa-jayne` | status (closed) | открыто (closed='') | открыто | ок |
| `villa-jayne` | website | http://villa.jayne.free.fr/ | http://villa.jayne.free.fr/ | ок |
| `villa-jayne` | prices | нет (notes: tarifs.html embeds filetarif.jpg image, prices not published as text) | на сайте прайс опубликован только графическим файлом filetarif.jpg, текстового прайса нет | ок |
| `villa-jayne` | description / facts | Семейная передержка кошек в 15-м округе, сад 1700 м², дом 300 м², теплые комнаты | Все факты и цитаты подтверждены сайтом | ок |
| `villa-jayne` | review-insights | нет файла | в данных города отсутствует файл `review-insights/villa-jayne.json` | нет данных |
| `keepdog` | name | keepdog pension canine | keepdog pension canine | ок |
| `keepdog` | address | 29 Chem. de la Marteleine, 13011 Marseille, France | 29 Chem. de la Marteleine, 13011 Marseille, France (Google Maps) | ок |
| `keepdog` | phone | +33 7 76 75 76 38 | +33 7 76 75 76 38 (Google Maps) | ок |
| `keepdog` | google_rating / count | 4.4 (24) | 4.4 (24) (Google Maps) | ок |
| `keepdog` | opening_hours | пусто (notes: not published on Maps, fb - not published without login) | круглосуточно 24/7 (`Ouvert 24h/24` ежедневно на Google Maps) | расхождение |
| `keepdog` | status (closed) | открыто (closed='') | открыто | ок |
| `keepdog` | website | https://www.facebook.com/keepdog13011 | https://www.facebook.com/keepdog13011 | ок |
| `keepdog` | prices | нет (notes: fb - no public pricing table) | на странице Facebook открытого прайса нет | ок |
| `keepdog` | description / facts | Базовое описание по категории и адресу (У-03) | Соответствует категории и адресу | ок |
| `keepdog` | review-insights | есть (отзывчивый владелец, боксы ~12 м², претензии по трекеру выгула) | Сводка объективно и полно отражает свежие отзывы на Google Maps | ок |
| `animos-animalerie-hotel-chats` | name | Animos Animalerie & Hôtel Chats | Animos Animalerie & Hôtel Chats | ок |
| `animos-animalerie-hotel-chats` | address | 99 Bd Bompard, 13007 Marseille, France | 99 Bd Bompard, 13007 Marseille, France (Google Maps, сайт) | ок |
| `animos-animalerie-hotel-chats` | phone | +33 4 91 31 76 66 | +33 4 91 31 76 66 (Google Maps; сайт: 04 91 31 76 66) | ок |
| `animos-animalerie-hotel-chats` | google_rating / count | 4.6 (151) | 4.6 (151) (Google Maps) | ок |
| `animos-animalerie-hotel-chats` | opening_hours | mo 14:30-19:15; tu 09:00-12:15,14:00-19:15; we 09:00-12:15,14:00-19:15; th 09:00-12:15,14:00-19:15; fr 09:00-12:15,14:00-19:15; sa 09:30-12:30,14:00-19:00; su closed | на сайте `animos.fr`: Le Lundi 14h30-19h15, Mardi-Vend 9h-12h15, 14h-19h15, Samedi 9h30-12h30, 14h-19h (подтверждено сайтом; на Google Maps утреннее открытие 9:30) | ок |
| `animos-animalerie-hotel-chats` | status (closed) | открыто (closed='') | открыто | ок |
| `animos-animalerie-hotel-chats` | website | https://www.animos.fr/ | https://www.animos.fr/ | ок |
| `animos-animalerie-hotel-chats` | prices | нет (розничный зоомагазин) | розничный магазин товаров для животных | ок |
| `animos-animalerie-hotel-chats` | description / facts | С 1989 года, бульвар Бомпар (7-й округ), корма, аксессуары, отель для кошек | Все факты и цитаты подтверждены сайтом | ок |
| `animos-animalerie-hotel-chats` | review-insights | есть (Rita и Jean-Louis, забота о кошках в отеле, богатый выбор питания) | Сводка полностью соответствует свежим отзывам на Google Maps | ок |
| `animalis-marseille-prado` | name | Animalis Marseille Prado | Animalis Marseille Prado | ок |
| `animalis-marseille-prado` | address | 276 Av. du Prado, 13008 Marseille, France | 276 Av. du Prado, 13008 Marseille, France (Google Maps, сайт) | ок |
| `animalis-marseille-prado` | phone | +33 4 65 52 91 00 | +33 4 65 52 91 00 (Google Maps, сайт) | ок |
| `animalis-marseille-prado` | google_rating / count | 4.4 (124) | 4.3 (127) (Google Maps; в пределах допуска ±0.1 / ±15%) | ок |
| `animalis-marseille-prado` | opening_hours | mo 10:00-19:30; tu 10:00-19:30; we 10:00-19:30; th 10:00-19:30; fr 10:00-19:30; sa 10:00-19:30; su closed | пн–сб 10:00–19:30, вс закр (Google Maps, сайт) | ок |
| `animalis-marseille-prado` | status (closed) | открыто (closed='') | открыто | ок |
| `animalis-marseille-prado` | website | https://magasin.animalis.com/95-animalis-marseille-prado?utm_source=gmb | https://magasin.animalis.com/95-animalis-marseille-prado?utm_source=gmb | ок |
| `animalis-marseille-prado` | prices | нет (сетевой розничный магазин) | розничные товары | ок |
| `animalis-marseille-prado` | description / facts | Авеню Прадо (8-й округ), корма, груминг-уголок, ветпрепараты, аквариумистика | Все факты и цитаты подтверждены сайтом | ок |
| `animalis-marseille-prado` | review-insights | есть (приветливый персонал, просторный магазин, конкурентные цены) | Сводка полностью соответствует свежим отзывам на Google Maps | ок |
| `ma-pepette-marseille` | name | MA PEPETTE MARSEILLE petsitter & dogwalker | MA PEPETTE MARSEILLE petsitter & dogwalker | ок |
| `ma-pepette-marseille` | address | 2 Rue d'Endoume, 13007 Marseille, France | 2 Rue d'Endoume, 13007 Marseille, France (Google Maps) | ок |
| `ma-pepette-marseille` | phone | +33 7 66 03 57 89 | +33 7 66 03 57 89 (Google Maps; сайт: +33 7 66 03 57 89) | ок |
| `ma-pepette-marseille` | google_rating / count | 5.0 (24) | 5.0 (49) (Google Maps; число отзывов выросло на 104% > 15%) | расхождение |
| `ma-pepette-marseille` | opening_hours | by-appointment (источник: сайт mapepette.fr) | круглосуточно 24/7 (`Ouvert 24h/24` на Google Maps) | расхождение |
| `ma-pepette-marseille` | status (closed) | открыто (closed='') | открыто | ок |
| `ma-pepette-marseille` | website | https://www.mapepette.fr/ | https://www.mapepette.fr/ | ок |
| `ma-pepette-marseille` | prices | boarding_night: 40 EUR; walk_60: 25 EUR | Adulte de 1 à 5 jours 40€ / jour, Balade individuelle chiot 25€ / Heure (обе цены дословно подтверждены на сайте) | ок |
| `ma-pepette-marseille` | description / facts | Петситтинг и догвокинг, Noa, походы в стае, без клеток, аптечка первой помощи | Все факты и цитаты подтверждены сайтом | ок |
| `ma-pepette-marseille` | review-insights | есть (Noa, Mélanie, прогулки на природе, доверие хозяев, фото/видео отчеты) | Сводка полностью соответствует свежим отзывам на Google Maps | ок |
| `dodog-promenade-pour-chien-nes` | name | DoDog - Promenade pour Chien.nes | DoDog - Promenade pour Chien.nes | ок |
| `dodog-promenade-pour-chien-nes` | address | 81 Bd Baille, 13006 Marseille, France | 81 Bd Baille, 13006 Marseille, France (Google Maps) | ок |
| `dodog-promenade-pour-chien-nes` | phone | +33 6 36 84 64 92 | +33 6 36 84 64 92 (Google Maps; сайт: 06 36 84 64 92) | ок |
| `dodog-promenade-pour-chien-nes` | google_rating / count | 5.0 (5) | 5.0 (5) (Google Maps) | ок |
| `dodog-promenade-pour-chien-nes` | opening_hours | пусто (notes: site, Maps - not published) | пн–пт 24h/24, сб–вс 09:00–17:00 (`mo 24h; tu 24h; we 24h; th 24h; fr 24h; sa 09:00-17:00; su 09:00-17:00` на Google Maps) | расхождение |
| `dodog-promenade-pour-chien-nes` | status (closed) | открыто (closed='') | открыто | ок |
| `dodog-promenade-pour-chien-nes` | website | https://dodog-marseille.vercel.app/ | https://dodog-marseille.vercel.app/ | ок |
| `dodog-promenade-pour-chien-nes` | prices | walk_30: 17 EUR; walk_60: 30 EUR | Balade de quartier solo (30 min) 17€ / balade, Promenade en nature en groupe (2h) 30€ / sortie (обе цены дословно подтверждены на сайте) | ок |
| `dodog-promenade-pour-chien-nes` | description / facts | Выгул собак, 2h походы в каланки, группы до 6 собак, ACACED, бесплатная пре-визит | Все факты и цитаты подтверждены сайтом | ок |
| `dodog-promenade-pour-chien-nes` | review-insights | нет файла | в данных города отсутствует файл `review-insights/dodog-promenade-pour-chien-nes.json` | нет данных |
| `clinique-veterinaire-borely` | name | Clinique vétérinaire Borély | Clinique vétérinaire Borély | ок |
| `clinique-veterinaire-borely` | address | 17 Av. Alexandre Dumas, 13008 Marseille, France | 17 Av. Alexandre Dumas, 13008 Marseille, France (Google Maps, сайт) | ок |
| `clinique-veterinaire-borely` | phone | +33 4 91 22 86 40 | +33 4 91 22 86 40 (Google Maps; сайт: 04 91 22 86 40) | ок |
| `clinique-veterinaire-borely` | google_rating / count | 4.6 (459) | 4.6 (460) (Google Maps; в пределах допуска ±0.1 / ±15%) | ок |
| `clinique-veterinaire-borely` | opening_hours | mo 08:00-19:00; tu 08:00-19:00; we 08:00-19:00; th 08:00-19:00; fr 08:00-19:00; sa 08:00-19:00; su closed (источник: сайт vetborely.com) | пн–пт 08:00–19:00, сб 08:00–12:00, 14:00–19:00, вс закр (на Google Maps для субботы указан перерыв 12–14; на сайте клиники: "Du lundi au samedi : 8h - 19h") | расхождение |
| `clinique-veterinaire-borely` | status (closed) | открыто (closed='') | открыто | ок |
| `clinique-veterinaire-borely` | website | http://www.vetborely.com/ | http://www.vetborely.com/ | ок |
| `clinique-veterinaire-borely` | prices | нет (notes: site - no price list published, rates available on consultation) | открытого прейскуранта на сайте нет | ок |
| `clinique-veterinaire-borely` | description / facts | Парк Борели, терапия, хирургия, УЗИ, эндоскопия, кардиология, офтальмология, NAC | Все специальности, цитаты и факты подтверждены сайтом | ок |
| `clinique-veterinaire-borely` | review-insights | есть (внимательные врачи, разъяснения, вопросы по счетам, забота о питомцах) | Сводка полностью соответствует свежим отзывам на Google Maps | ок |
| `dispensaire-spa-de-marseille` | name | Dispensaire SPA de Marseille | Dispensaire SPA de Marseille | ок |
| `dispensaire-spa-de-marseille` | address | 24 Rue d'Eguison, 13010 Marseille, France | 24 Rue d'Eguison, 13010 Marseille, France (Google Maps, сайт) | ок |
| `dispensaire-spa-de-marseille` | phone | +33 4 91 80 38 89 | +33 4 91 80 38 89 (Google Maps; сайт: 0491803889) | ок |
| `dispensaire-spa-de-marseille` | google_rating / count | 4.2 (361) | 4.2 (361) (Google Maps) | ок |
| `dispensaire-spa-de-marseille` | opening_hours | mo 08:30-12:30,13:00-16:30; tu 08:30-12:30,13:00-16:30; we 08:30-12:30,13:00-16:30; th closed; fr 08:30-12:30,13:00-16:30; sa closed; su closed | пн–ср 08:30–12:30, 13:00–16:30, чт закр, пт 08:30–12:30, 13:00–16:30, сб–вс закр (Google Maps, сайт) | ок |
| `dispensaire-spa-de-marseille` | status (closed) | открыто (closed='') | открыто | ок |
| `dispensaire-spa-de-marseille` | website | https://www.la-spa.fr/etablissement/dispensaire-spa-de-marseille/ | https://www.la-spa.fr/etablissement/dispensaire-spa-de-marseille/ | ок |
| `dispensaire-spa-de-marseille` | prices | нет (notes: spa dispensary - means-tested rates, no standard commercial tariff) | диспансер благотворительной организации SPA, плавающий социальный тариф | ок |
| `dispensaire-spa-de-marseille` | description / facts | Диспансер SPA в 10-м округе, помощь малообеспеченным владельцам, вакцинация, стерилизация | Все факты и цитаты подтверждены сайтом SPA | ок |
| `dispensaire-spa-de-marseille` | review-insights | есть (контраст между преданностью врачей и жалобами на грубость в регистратуре, перегрузка центра, крайняя сложность дозвона) | Сводка максимально точно и объективно отражает свежие отзывы на Google Maps | ок |

---

## Итог проверки выборки

- **Чистых мест:** 4 из 12 (`styl-dog-toilettage-marseille`, `animos-animalerie-hotel-chats`, `animalis-marseille-prado`, `dispensaire-spa-de-marseille`)
- **Мест с расхождениями:** 8 из 12
- **Всего расхождений:** 9 (8 по часам работы, 1 по числу отзывов)

---

## Список расхождений по тяжести

### 1. Тяжёлые расхождения (неверная цена / телефон / адрес / закрыто)
**Тяжёлых расхождений нет.**
- Все названия, адреса, номера телефонов (+33...) и ссылки на сайты проверены по живым источникам и 100% совпадают.
- Все места действующие (закрытых нет).
- Все указанные цены (в категориях DOG_TRAINING, GROOMING, PET_SITTING) до копейки подтверждены дословными цитатами на действующих сайтах.
- Описания, специализации и факты подтверждены сайтами мест без фантазий.
- Сводки отзывов (review-insights) в деталях соответствуют свежим отзывам на Google Maps.

### 2. Средние и лёгкие расхождения (часы работы, динамика отзывов)
1. **`esprit-canin` (DOG_TRAINING): не указаны часы работы в строке.**
   - **Поле:** `opening_hours`
   - **У нас в строке:** пусто (`notes: hours: none (not published on Maps, sessions by appointment; site - not published)`).
   - **На источнике:** на карточке Google Maps опубликованы часы: `mo 09:00-20:00; tu 09:00-20:00; we 09:00-20:00; th 09:00-20:00; fr 09:00-20:00; sa 09:00-20:00; su closed` (пн–сб 09:00–20:00, вс закрыто).

2. **`les-canines` (DOG_TRAINING): не указаны часы работы в строке.**
   - **Поле:** `opening_hours`
   - **У нас в строке:** пусто (`notes: hours: none (not published on Maps, sessions by appointment; site - not published)`).
   - **На источнике:** на карточке Google Maps опубликованы часы: `mo 09:00-19:30; tu 09:00-19:30; we 09:00-19:30; th 09:00-19:30; fr 09:00-19:30; sa 09:00-19:30; su closed` (пн–сб 09:00–19:30, вс закрыто).

3. **`4-pattes` (GROOMING): не указаны часы работы в строке.**
   - **Поле:** `opening_hours`
   - **У нас в строке:** пусто (`notes: hours: none (not published on Maps)`).
   - **На источнике:** на карточке Google Maps опубликованы часы: `mo closed; tu 08:00-18:00; we closed; th 08:00-18:00; fr 08:00-18:00; sa 08:00-18:00; su closed` (вт, чт–сб 08:00–18:00, пн, ср, вс закрыто).

4. **`villa-jayne` (PET_HOTEL): расхождение между сайтом и Google Maps по часам.**
   - **Поле:** `opening_hours`
   - **У нас в строке:** `by-appointment` (источник: сайт `http://villa.jayne.free.fr/reglement.html`, цитата "Les visites ne se font que sur rendez-vous.").
   - **На источнике:** на карточке Google Maps указано стандартное рабочее время: `mo 08:00-19:00; tu 08:00-19:00; we 08:00-19:00; th 08:00-19:00; fr 08:00-19:00; sa 08:00-19:00; su closed` (пн–сб 08:00–19:00, вс закрыто).

5. **`keepdog` (PET_HOTEL): не указаны часы работы в строке.**
   - **Поле:** `opening_hours`
   - **У нас в строке:** пусто (`notes: hours: none (not published on Maps, fb - not published without login)`).
   - **На источнике:** на карточке Google Maps опубликовано `Ouvert 24h/24` ежедневно (`mo 24h; tu 24h; we 24h; th 24h; fr 24h; sa 24h; su 24h`).

6. **`ma-pepette-marseille` (PET_SITTING): увеличение числа отзывов выше допуска ±15%.**
   - **Поле:** `google_rating_count`
   - **У нас в строке:** `24` (наблюдалось на 2026-10-12).
   - **На источнике:** на карточке Google Maps на момент проверки уже `49` отзывов (прирост +104%).

7. **`ma-pepette-marseille` (PET_SITTING): расхождение между сайтом и Google Maps по часам.**
   - **Поле:** `opening_hours`
   - **У нас в строке:** `by-appointment` (источник: сайт `https://www.mapepette.fr/`).
   - **На источнике:** на карточке Google Maps указано `Ouvert 24h/24` ежедневно.

8. **`dodog-promenade-pour-chien-nes` (PET_SITTING): не указаны часы работы в строке.**
   - **Поле:** `opening_hours`
   - **У нас в строке:** пусто (`notes: hours: none (site, Maps - not published)`).
   - **На источнике:** на карточке Google Maps опубликованы часы: `mo 24h; tu 24h; we 24h; th 24h; fr 24h; sa 09:00-17:00; su 09:00-17:00` (пн–пт 24h/24, сб–вс 09:00–17:00).

9. **`clinique-veterinaire-borely` (VET_CLINIC): расхождение часов работы в субботу (обеденный перерыв).**
   - **Поле:** `opening_hours`
   - **У нас в строке:** `mo 08:00-19:00; tu 08:00-19:00; we 08:00-19:00; th 08:00-19:00; fr 08:00-19:00; sa 08:00-19:00; su closed` (источник: официальный сайт `http://www.vetborely.com/`, цитата: "Du lundi au samedi : 8h - 19h").
   - **На источнике:** на карточке Google Maps для субботы указан двухчасовой перерыв `08:00-12:00, 14:00-19:00`.
