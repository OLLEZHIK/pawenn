# Проверка напарника: Lyon (lyon)

**Дата:** 2026-10-16  
**Проверяющий:** Antigravity (ПК 12)  
**Ветка данных:** `origin/city/lyon`  
**Выборка:** 12 мест (по 2 на категорию: DOG_TRAINING, GROOMING, PET_HOTEL, PET_SHOP, PET_SITTING, VET_CLINIC)  

---

## Таблица взаимной проверки

| слаг | поле | у нас | на источнике | вердикт |
|---|---|---|---|---|
| **chiens-et-compagnie-educateur-canin-comportementaliste** | name | Chiens et Compagnie Educateur canin comportementaliste | Chiens et Compagnie Educateur canin comportementaliste | ок |
| chiens-et-compagnie-educateur-canin-comportementaliste | address | Bd des États-Unis, 69008 Lyon, France | Bd des États-Unis, 69008 Lyon, France | ок |
| chiens-et-compagnie-educateur-canin-comportementaliste | phone | +33 6 52 37 17 97 | +33 6 52 37 17 97 (на сайте: 06.52.37.17.97) | ок |
| chiens-et-compagnie-educateur-canin-comportementaliste | google_rating | 5.0 | 5.0 | ок |
| chiens-et-compagnie-educateur-canin-comportementaliste | google_rating_count | 47 | 47 | ок |
| chiens-et-compagnie-educateur-canin-comportementaliste | opening_hours | mo 09:00-20:00; tu 09:00-20:00; we 09:00-20:00; th 09:00-20:00; fr 09:00-20:00; sa 09:00-20:00; su 12:00-19:00 | Lu-Sa 09:00-20:00, Di 12:00-19:00 на Maps (на сайте в контактах: Lu-Di 9h-21h) | ок |
| chiens-et-compagnie-educateur-canin-comportementaliste | status | открыто | открыто (не закрыто навсегда) | ок |
| chiens-et-compagnie-educateur-canin-comportementaliste | website | https://chiensetcomp.fr/ | https://chiensetcomp.fr/ | ок |
| chiens-et-compagnie-educateur-canin-comportementaliste | prices:training_individual | 65 EUR (Bilan comportemental (1h30 à 2h) 65 €) | 60 € на сайте («Le Bilan comportemental... Prix : 60€» на `/index.php/prestations/`) | расхождение |
| chiens-et-compagnie-educateur-canin-comportementaliste | prices:training_group | 25 EUR (Balade éducative collective (1h30) 25 €) | фиксированной цены 25 € на коллективные прогулки на сайте нет (только пакеты индивидуальных занятий) | расхождение |
| chiens-et-compagnie-educateur-canin-comportementaliste | evidence:urls | https://chiensetcomp.fr/tarifs/ и https://chiensetcomp.fr/contact/ | 404 Not Found (актуальные страницы WordPress: `/index.php/prestations/` и `/index.php/contact/`) | расхождение |
| chiens-et-compagnie-educateur-canin-comportementaliste | evidence:quotes | 9 цитат | цитаты цен и часов отсутствуют на указанных страницах из-за 404 и смены цен | расхождение |
| chiens-et-compagnie-educateur-canin-comportementaliste | descriptions | «collective educational walks in positive reinforcement» / «basées sur des méthodes positives» | на сайте прямо заявлено: «une éducation adaptée qui n’est pas 100% positive ou coercitive» | расхождение |
| chiens-et-compagnie-educateur-canin-comportementaliste | review-insights | 3 карточки (staff, results, animals) | подтверждено отзывами Google Maps (Théo, bienveillance, progrès) | ок |
| **to-dog-education-educateur-canin-a-lyon** | name | To Dog Éducation - Éducateur canin à Lyon | To Dog Éducation - Éducateur canin à Lyon | ок |
| to-dog-education-educateur-canin-a-lyon | address | 13 Chem. de la Poterne, 69009 Lyon, France | 259 Rue des Érables, 69009 Lyon, France | расхождение |
| to-dog-education-educateur-canin-a-lyon | phone | +33 6 58 78 57 16 | +33 7 44 43 10 67 (07 44 43 10 67 на Maps и на сайте) | расхождение |
| to-dog-education-educateur-canin-a-lyon | google_rating | 5.0 | 5.0 | ок |
| to-dog-education-educateur-canin-a-lyon | google_rating_count | 28 | 21 (разница 7 оценок, 25% > допуск 15%) | расхождение |
| to-dog-education-educateur-canin-a-lyon | opening_hours | mo 08:00-20:00; tu 08:00-20:00; we 08:00-20:00; th 08:00-20:00; fr 08:00-20:00; sa 08:00-20:00; su closed | Mo-Su 09:00-19:00 на Maps (каждый день без выходных) | расхождение |
| to-dog-education-educateur-canin-a-lyon | status | открыто | открыто | ок |
| to-dog-education-educateur-canin-a-lyon | website | https://www.todog.fr/ | https://www.todog.fr/ | ок |
| to-dog-education-educateur-canin-a-lyon | prices:training_individual (bilan) | 60 EUR (Bilan comportemental 60 €) | 85 € на актуальном сайте (`/prestations/prestations-a-lunite/`) | расхождение |
| to-dog-education-educateur-canin-a-lyon | prices:training_individual (cours) | 45 EUR (Cours individuel 45 €) | 60 € на актуальном сайте (`/prestations/prestations-a-lunite/`) | расхождение |
| to-dog-education-educateur-canin-a-lyon | prices:training_group | 25 EUR (Cours collectif 25 €) | 25 € («Balade éducative en collectif... 25 €» на `/prestations/les-collectifs/`) | ок |
| to-dog-education-educateur-canin-a-lyon | evidence:urls | https://www.todog.fr/tarifs и https://www.todog.fr/services | 404 Not Found (актуальные разделы: `/prestations/prestations-a-lunite/` и `/prestations/les-collectifs/`) | расхождение |
| to-dog-education-educateur-canin-a-lyon | evidence:quotes | 9 цитат | цитаты цен 60 € и 45 € отсутствуют на сайте (актуальные тарифы 85 € и 60 €) | расхождение |
| to-dog-education-educateur-canin-a-lyon | descriptions | воспитание и коррекция поведения собак в Лионе | подтверждено сайтом | ок |
| to-dog-education-educateur-canin-a-lyon | review-insights | 3 карточки (staff, results, animals) | подтверждено отзывами Maps (Marie, bienveillance, accompagnement chiot) | ок |
| **au-garden-dog** | name | Au Garden Dog | Au Garden Dog | ок |
| au-garden-dog | address | 153 Rue Duguesclin, 69006 Lyon, France | 95 Rue de Sèze, 69006 Lyon, France (на Maps и на сайте) | расхождение |
| au-garden-dog | phone | +33 4 78 52 79 38 | +33 4 78 24 08 93 (04 78 24 08 93 на Maps и на сайте) | расхождение |
| au-garden-dog | google_rating | 4.8 | 4.6 (разница 0.2 > допуск 0.1) | расхождение |
| au-garden-dog | google_rating_count | 79 | 43 (разница 36 оценок, 45% > допуск 15%) | расхождение |
| au-garden-dog | opening_hours | mo closed; tu 09:00-18:00; we 09:00-18:00; th 09:00-18:00; fr 09:00-18:00; sa 09:00-17:00; su closed | Mo 14:00-18:00; Tu-Fr 09:00-12:00, 14:00-18:00; Sa 09:00-12:00; Su closed (на сайте и Maps) | расхождение |
| au-garden-dog | status | открыто | открыто | ок |
| au-garden-dog | website | https://garden-dog.fr/ | https://garden-dog.fr/ | ок |
| au-garden-dog | prices | — (0 цен) | цен на сайте нет (по запросу) | ок |
| au-garden-dog | evidence:quotes | 3 цитаты | цитаты description и opening_hours отсутствуют на сайте `garden-dog.fr` | расхождение |
| au-garden-dog | descriptions | салон стрижки собак и кошек в 6-м округе | подтверждено сайтом | ок |
| au-garden-dog | review-insights | 3 карточки (staff, results, animals) | подтверждено отзывами Maps (Muriel, cocker, épilation, bienveillance) | ок |
| **le-coin-a-truffes** | name | Le coin à truffes | Le coin à truffes | ок |
| le-coin-a-truffes | address | 147 Rue Bugeaud, 69006 Lyon, France | 27 Bd Eugène Deruelle, 69003 Lyon, France (на Maps и на сайте) | расхождение |
| le-coin-a-truffes | phone | +33 9 86 54 84 96 | +33 6 76 53 64 57 (06 76 53 64 57 на Maps и на сайте) | расхождение |
| le-coin-a-truffes | google_rating | 4.9 | 4.8 (допуск ±0.1) | ок |
| le-coin-a-truffes | google_rating_count | 68 | 65 (допуск ±15%) | ок |
| le-coin-a-truffes | opening_hours | mo closed; tu 09:00-18:00; we 09:00-18:00; th 09:00-18:00; fr 09:00-18:00; sa 09:00-17:00; su closed | Mo-Sa 09:00-18:00; Su closed на Maps (на сайте standard tel: Lu-Sa 9h-19h) | расхождение |
| le-coin-a-truffes | status | открыто | открыто | ок |
| le-coin-a-truffes | website | https://lecoinatruffes.fr/ | https://lecoinatruffes.fr/ | ок |
| le-coin-a-truffes | prices:grooming_bath | 35-45 EUR (Bain & Séchage De 35 € à 45 €) | на сайте почасовая тарификация: «Toilettage simple... 40€ Par Heure» | расхождение |
| le-coin-a-truffes | prices:grooming_full (tonte) | 55-70 EUR (Tonte complète De 55 € à 70 €) | на сайте почасовая тарификация: «Tonte ou coupe... 50€ Par Heure» | расхождение |
| le-coin-a-truffes | prices:grooming_full (ciseaux) | 60-85 EUR (Coupe ciseaux De 60 € à 85 €) | на сайте почасовая тарификация: «Toilettage complet... 50€ Par Heure» | расхождение |
| le-coin-a-truffes | prices:grooming_full (épilation) | 65-90 EUR (Épilation De 65 € à 90 €) | на сайте почасовая тарификация: «Epilation... 53€ Par Heure» | расхождение |
| le-coin-a-truffes | prices:grooming_full (chat) | 60-75 EUR (Toilettage chat De 60 € à 75 €) | на сайте почасовая тарификация: «Chats... 55€ Par Heure» | расхождение |
| le-coin-a-truffes | evidence:urls | https://lecoinatruffes.fr/tarifs/ | 404 / 406 (актуальная страница: `https://lecoinatruffes.fr/Prestations/`) | расхождение |
| le-coin-a-truffes | evidence:quotes | 9 цитат | все 5 цитат цен, цитата часов и цитата описания отсутствуют на сайте | расхождение |
| le-coin-a-truffes | descriptions | в описании указан 6-й округ Лиона | салон фактически расположен в 3-м округе (27 Bd Eugène Deruelle, Part-Dieu) | расхождение |
| le-coin-a-truffes | review-insights | 3 карточки (staff, results, place) | подтверждено отзывами Maps (Aela, douceur, grands chiens) | ок |
| **chatperlipopet** | name | ChatperlipoPet’ | ChatperlipoPet’ | ок |
| chatperlipopet | address | 83 Rue Duguesclin, 69006 Lyon, France | 83 Rue Duguesclin, 69006 Lyon, France | ок |
| chatperlipopet | phone | +33 6 09 75 69 49 | +33 6 09 75 69 49 | ок |
| chatperlipopet | google_rating | 4.9 | 4.9 | ок |
| chatperlipopet | google_rating_count | 262 | 262 | ок |
| chatperlipopet | opening_hours | mo 10:00-13:00,16:30-19:00; tu 10:00-13:00,16:30-19:00; we 10:00-13:00,16:30-19:00; th 10:00-13:00,16:30-19:00; fr 10:00-13:00,16:30-19:00; sa 10:00-13:00,15:30-17:00; su closed | точно соответствует сайту: Lu-Ve 10h-13h et 16h30/19h, Sa 10h-13h et 15h30-17h (на Maps: 10:00-12:30, 16:30-19:00) | ок |
| chatperlipopet | status | открыто | открыто | ок |
| chatperlipopet | website | http://www.chatperlipopet.fr/ | http://www.chatperlipopet.fr/ | ок |
| chatperlipopet | prices:cat_night | 21-23 EUR (1 chat Basse saison 21 € Haute saison 23 €) | точно соответствует странице `/tarifs/` («1 chat Basse saison 21 € Haute saison 23 €») | ок |
| chatperlipopet | evidence:quotes | 7 цитат | все 7 цитат найдены дословно на страницах сайта | ок |
| chatperlipopet | descriptions | городская гостиница для кошек на 35 мест, видеонаблюдение, уход | полностью подтверждено сайтом | ок |
| chatperlipopet | review-insights | 3 карточки (staff, place, animals) | подтверждено отзывами Maps (Cécile, nouvelles quotidiennes, propreté) | ок |
| **devenir-un-cat** | name | Devenir Un Cat | Devenir Un Cat | ок |
| devenir-un-cat | address | 24 Rue Dumenge, 69004 Lyon, France | 24 Rue Dumenge, 69004 Lyon, France | ок |
| devenir-un-cat | phone | +33 6 86 05 77 76 | +33 6 86 05 77 76 | ок |
| devenir-un-cat | google_rating | 5.0 | 5.0 | ок |
| devenir-un-cat | google_rating_count | 37 | 37 | ок |
| devenir-un-cat | opening_hours | — (пусто с пояснением в notes) | на Maps: Lu,Me,Je,Ve,Sa 10:00-12:00, 16:30-19:00; Ma,Di fermés | ок |
| devenir-un-cat | status | открыто | открыто | ок |
| devenir-un-cat | website | https://www.instagram.com/deveniruncat/ | https://www.instagram.com/deveniruncat/ | ок |
| devenir-un-cat | prices | — (0 цен, instagram login wall) | цен в открытом доступе нет | ок |
| devenir-un-cat | evidence:quotes | 1 цитата | подтверждено профилем Instagram | ок |
| devenir-un-cat | descriptions | передержка для кошек в 4-м округе Лиона | подтверждено | ок |
| devenir-un-cat | review-insights | 3 карточки (staff, communication, place) | подтверждено отзывами Maps (Adeline, nouvelles régulières, confiance) | ок |
| **reptilepassion** | name | ReptilePassion | ReptilePassion | ок |
| reptilepassion | address | 15 Rue Pré-Gaudry, 69007 Lyon, France | 93 Rue de Gerland, 69007 Lyon, France (на Maps и на сайте) | расхождение |
| reptilepassion | phone | +33 4 78 72 26 53 | +33 4 37 66 01 20 (04 37 66 01 20 на Maps и на сайте) | расхождение |
| reptilepassion | google_rating | 4.8 | 4.8 | ок |
| reptilepassion | google_rating_count | 284 | 766 (разница 482 оценки, +170% > допуск 15%) | расхождение |
| reptilepassion | opening_hours | mo closed; tu 10:00-12:30,14:00-19:00; we 10:00-12:30,14:00-19:00; th 10:00-12:30,14:00-19:00; fr 10:00-12:30,14:00-19:00; sa 10:00-12:30,14:00-19:00; su closed | Mo-Sa 07:00-18:00, Su 09:00-11:30 на Maps (на сайте: «Ouvert 6.5 jours / 7») | расхождение |
| reptilepassion | status | открыто | открыто | ок |
| reptilepassion | website | https://reptilepassion.com/ | https://reptilepassion.com/ | ок |
| reptilepassion | prices | — (0 цен) | специализированный магазин (цены по каталогу товаров) | ок |
| reptilepassion | evidence:quotes | 4 цитаты | цитата часов `Mardi au Samedi : 10h00 - 12h30...` отсутствует на сайте | расхождение |
| reptilepassion | descriptions | в описании указана улица Rue Pré-Gaudry | магазин переехал на 93 Rue de Gerland | расхождение |
| reptilepassion | review-insights | 3 карточки (staff, place, products) | подтверждено отзывами Maps (conseils, bien-être animal, terrariophilie) | ок |
| **ptit-pere-lyon-4** | name | P'tit Père - Lyon 4 | P'tit Père - Lyon 4 | ок |
| ptit-pere-lyon-4 | address | 15 Rue de Cuire, 69004 Lyon, France | 10 Rue d'Austerlitz, 69004 Lyon, France (на Maps и на сайте) | расхождение |
| ptit-pere-lyon-4 | phone | +33 4 72 08 94 37 | +33 9 82 73 49 77 (на Maps) | расхождение |
| ptit-pere-lyon-4 | google_rating | 4.8 | 5.0 (разница 0.2 > допуск 0.1) | расхождение |
| ptit-pere-lyon-4 | google_rating_count | 147 | 62 (разница 85 оценок, >50% > допуск 15%) | расхождение |
| ptit-pere-lyon-4 | opening_hours | mo 14:30-19:00; tu 10:00-19:00; we 10:00-19:00; th 10:00-19:00; fr 10:00-19:00; sa 10:00-19:00; su closed | Mo-Sa 10:00-19:00 на Maps (на сайте: Lu-Ve 10h-13h30, 15h-19h; Sa 10h-19h) | расхождение |
| ptit-pere-lyon-4 | status | открыто | открыто | ок |
| ptit-pere-lyon-4 | website | https://www.ptitpere.fr/pages/animalerie-ptit-pere-lyon-4-croix-rousse | https://www.ptitpere.fr/pages/animalerie-ptit-pere-lyon-4-croix-rousse | ок |
| ptit-pere-lyon-4 | prices | — (0 цен) | зоомагазин (сотни товаров) | ок |
| ptit-pere-lyon-4 | evidence:quotes | 6 цитат | цитаты opening_hours и description отсутствуют на целевой странице | расхождение |
| ptit-pere-lyon-4 | descriptions | в описании указана Rue de Cuire | магазин расположен по адресу 10 Rue d'Austerlitz | расхождение |
| ptit-pere-lyon-4 | review-insights | 3 карточки (staff, products, place) | подтверждено отзывами Maps (accueil, friandises mastication, choix) | ок |
| **corakali-pet-sitter-professionnelle** | name | CoraKali, Pet Sitter Professionnelle | CoraKali, Pet Sitter Professionnelle | ок |
| corakali-pet-sitter-professionnelle | address | 92 Av. de l'Europe, 69008 Lyon, France | 92 Av. de l'Europe, 69008 Lyon, France | ок |
| corakali-pet-sitter-professionnelle | phone | +33 6 85 03 04 51 | +33 6 85 03 04 51 | ок |
| corakali-pet-sitter-professionnelle | google_rating | 5.0 | 5.0 | ок |
| corakali-pet-sitter-professionnelle | google_rating_count | 111 | 112 (допуск ±15%) | ок |
| corakali-pet-sitter-professionnelle | opening_hours | mo 09:00-18:00; tu 09:00-18:00; we 09:00-18:00; th 09:00-18:00; fr 09:00-18:00; sa 09:00-18:00; su 09:00-18:00 | 7 jours sur 7 9h - 18h на сайте (на Maps 09:00-18:30) | ок |
| corakali-pet-sitter-professionnelle | status | открыто | открыто | ок |
| corakali-pet-sitter-professionnelle | website | https://www.corakali-petsitting.fr/ | https://www.corakali-petsitting.fr/ | ок |
| corakali-pet-sitter-professionnelle | prices:walk_30 | 18 EUR (Promenade de 30 minutes : 18€) | 18 € на странице `/promenades-chiens` | ок |
| corakali-pet-sitter-professionnelle | prices:walk_60 | 23 EUR (Promenade d'une heure : 23€) | 23 € на странице `/promenades-chiens` | ок |
| corakali-pet-sitter-professionnelle | prices:cat_visit | 18 EUR (Une visite de 30mn : 18€) | 18 € на странице `/pet-sitting-chats-nac` | ок |
| corakali-pet-sitter-professionnelle | evidence:quotes | 9 цитат | все 9 цитат найдены дословно на страницах сайта | ок |
| corakali-pet-sitter-professionnelle | descriptions | выгул собак, визиты к кошкам и NAC, консультации фелинолога | полностью подтверждено сайтом | ок |
| corakali-pet-sitter-professionnelle | review-insights | 3 карточки (staff, communication, animals) | подтверждено отзывами Maps (Coralie, photos/vidéos quotidiennes, douceur) | ок |
| **every-walk** | name | Every Walk | Every Walk (EveryDog) | ок |
| every-walk | address | 43 Av. Rockefeller, 69003 Lyon, France | 43 Av. Rockefeller, 69003 Lyon, France | ок |
| every-walk | phone | +33 7 82 82 79 55 | 0782827955 на сайте (на карточке Maps номер не указан) | ок |
| every-walk | google_rating | — (нет данных) | — (нет оценок на Maps) | ок |
| every-walk | google_rating_count | — (нет данных) | — (нет оценок на Maps) | ок |
| every-walk | opening_hours | mo 08:00-19:00; tu 08:00-19:00; we 08:00-19:00; th 08:00-19:00; fr 08:00-19:00; sa 08:00-18:00; su 08:00-18:00 | Lu-Ve 08:00-19:00, Sa-Di 08:00-18:00 (Maps и сайт) | ок |
| every-walk | status | открыто | на Maps предупреждение: «Ce lieu est peut-être fermé» (но не closed) | ок |
| every-walk | website | https://every69.wixsite.com/website | https://every69.wixsite.com/website | ок |
| every-walk | prices:walk_60 | 14.99 EUR (Promenade 1 h 14,99 euros 14,99 €) | 14,99 € на сайте («Promenade 1 h 14,99 euros») | ок |
| every-walk | evidence:quotes | 5 цитат | все 5 цитат найдены на сайте | ок |
| every-walk | descriptions | прогулки и уход за собаками в 3-м округе Лиона | подтверждено сайтом | ок |
| every-walk | review-insights | — | отсутствует (не собирались) | нет данных |
| **cabinet-veterinaire-du-point-du-jour** | name | CABINET VETERINAIRE DU POINT DU JOUR | CABINET VETERINAIRE DU POINT DU JOUR | ок |
| cabinet-veterinaire-du-point-du-jour | address | 18 Rue Joliot Curie, 69005 Lyon, France | 18 Rue Joliot Curie, 69005 Lyon, France | ок |
| cabinet-veterinaire-du-point-du-jour | phone | +33 4 78 36 18 18 | +33 4 78 36 18 18 (04.78.36.18.18 на сайте) | ок |
| cabinet-veterinaire-du-point-du-jour | google_rating | 4.7 | 4.7 | ок |
| cabinet-veterinaire-du-point-du-jour | google_rating_count | 205 | 205 | ок |
| cabinet-veterinaire-du-point-du-jour | opening_hours | mo 09:00-18:30; tu 09:00-18:30; we 09:00-16:00; th 09:00-18:30; fr 09:00-18:30; sa 09:00-12:00; su closed | Lu,Ma,Je,Ve 09:00-18:30; Me 09:00-16:00; Sa 09:00-12:00; Di fermé (Maps и сайт) | ок |
| cabinet-veterinaire-du-point-du-jour | status | открыто | открыто | ок |
| cabinet-veterinaire-du-point-du-jour | website | http://www.cabinet-veterinaire-du-point-du-jour.com/ | http://www.cabinet-veterinaire-du-point-du-jour.com/ | ок |
| cabinet-veterinaire-du-point-du-jour | prices | — (0 цен) | тарифов на сайте нет (только перечень услуг) | ок |
| cabinet-veterinaire-du-point-du-jour | specialties | surgery;laboratory;x-ray;dentistry;dermatology;rehabilitation;hospitalization;exotics | все специальности подтверждены цитатами на сайте | ок |
| cabinet-veterinaire-du-point-du-jour | languages | en;fr | подтверждено на сайте («Langues parlées: English Français») | ок |
| cabinet-veterinaire-du-point-du-jour | emergency_note | En cas d'urgence... Adomvet: 04.72.30.40.40 V2TU: 09.70.24.70.24 | подтверждено цитатой на главной странице сайта | ок |
| cabinet-veterinaire-du-point-du-jour | evidence:quotes | 12 цитат | все 12 цитат найдены дословно на страницах сайта | ок |
| cabinet-veterinaire-du-point-du-jour | descriptions | ветеринарный кабинет для собак, кошек и NAC, анализы, рентген, физиотерапия | полностью подтверждено сайтом | ок |
| cabinet-veterinaire-du-point-du-jour | review-insights | 3 карточки (staff, animals, results) | подтверждено отзывами Maps (Dr Bessard, Dr Sailhac, soins attentifs) | ок |
| **dramard-valerie** | name | Dramard Valérie | Dramard Valérie | ок |
| dramard-valerie | address | 16 Rue Jeanne d'Arc, 69003 Lyon, France | 16 Rue Jeanne d'Arc, 69003 Lyon, France | ок |
| dramard-valerie | phone | +33 6 85 56 19 97 | +33 6 85 56 19 97 | ок |
| dramard-valerie | google_rating | 3.8 | 3.8 | ок |
| dramard-valerie | google_rating_count | 89 | 89 | ок |
| dramard-valerie | opening_hours | by-appointment | прием строго по записи («Prendre rendez-vous», на Maps Mo-Fr 09:00-19:00) | ок |
| dramard-valerie | status | открыто | открыто | ок |
| dramard-valerie | website | https://www.animalpsy.com/ | https://www.animalpsy.com/ | ок |
| dramard-valerie | prices | — (0 цен, указано: «fees not published online») | тарифы опубликованы на странице консультаций: первичный прием 230 € TTC, повторный 130 € TTC | расхождение |
| dramard-valerie | specialties | behavior | подтверждено профилем («Dr Vétérinaire Comportementaliste») | ок |
| dramard-valerie | emergency_note | Puis-je vous contacter en cas d'urgence ? Oui, uniquement pour les chiens et chats déjà suivis | подтверждено дословно на странице консультаций | ок |
| dramard-valerie | evidence:quotes | 3 цитаты | все 3 цитаты найдены дословно на сайте | ок |
| dramard-valerie | descriptions | ветеринар-поведенческий специалист, Animal Psy, диагностика и терапия собак и кошек | полностью подтверждено сайтом | ок |
| dramard-valerie | review-insights | 3 карточки (results, staff, animals) | подтверждено отзывами Maps (hypothyroïdie canine, thérapies comportementales) | ок |

---

## Итог проверки

- **Чистых мест:** 5 из 12
- **Мест с расхождениями:** 7 из 12

---

## Расхождения по степени тяжести

### 1. Тяжёлые расхождения (неверные адреса, неверные телефоны, искажённые / отсутствующие цены, битые URL 404)

1. **`to-dog-education-educateur-canin-a-lyon` (DOG_TRAINING)**:
   - **Неверный адрес:** в базе указан `13 Chem. de la Poterne, 69009 Lyon`, на Google Maps — **`259 Rue des Érables, 69009 Lyon, France`**.
   - **Неверный телефон:** в базе указан `+33 6 58 78 57 16`, на актуальном сайте и Google Maps — **`+33 7 44 43 10 67`** (`07 44 43 10 67`).
   - **Искажённые цены:**
     - `training_individual` (Bilan comportemental): в базе указано `60 EUR`, на актуальном сайте (`/prestations/prestations-a-lunite/`) цена составляет **`85 €`**.
     - `training_individual` (Cours individuel): в базе указано `45 EUR`, на актуальном сайте — **`60 €`**.
   - **Битые URL источников:** ссылки `https://www.todog.fr/tarifs` и `https://www.todog.fr/services` отдают **404 Not Found**. Актуальные страницы: `/prestations/prestations-a-lunite/` и `/prestations/les-collectifs/`.
   - **Часы работы:** в базе `mo-sa 08:00-20:00; su closed`, на Google Maps — **`mo-su 09:00-19:00`** (ежедневно без выходных).
   - **Число оценок:** в базе указано `28`, на карточке Google Maps — **`21`** (разница 25%, превышает допуск 15%).

2. **`au-garden-dog` (GROOMING)**:
   - **Неверный адрес:** в базе указан устаревший адрес `153 Rue Duguesclin, 69006 Lyon`, на актуальном сайте и на Google Maps зафиксирован переезд: **`95 Rue de Sèze, 69006 Lyon, France`**.
   - **Неверный телефон:** в базе указан `+33 4 78 52 79 38`, на сайте и Google Maps — **`+33 4 78 24 08 93`** (`04 78 24 08 93`).
   - **Неверные часы работы:** в базе указано `tu-fr 09:00-18:00; sa 09:00-17:00; mo,su closed`. На сайте и Google Maps: **`lundi 14:00–18:00 (18:30); mardi-vendredi 09:00–12:00, 14:00–18:00; samedi 09:00–12:00; dimanche fermé`**.
   - **Рейтинг и оценки:** в базе `4.8` (79 оценок), на Google Maps — **`4.6` (43 оценки)** (расхождение рейтинга 0.2 > 0.1, оценок 45% > 15%).
   - **Цитаты доказательств:** обе ключевые цитаты (`salon de toilettage canin et félin situé au cœur de Lyon 6ème` и `Mardi au Vendredi : 9h00 - 18h00 Samedi : 9h00 - 17h00`) на сайте отсутствуют.

3. **`le-coin-a-truffes` (GROOMING)**:
   - **Неверный адрес и округ:** в базе указан `147 Rue Bugeaud, 69006 Lyon`, на сайте и Google Maps — **`27 Bd Eugène Deruelle, 69003 Lyon, France`** (салон находится в 3-м округе возле ТЦ Part-Dieu, а не в 6-м округе).
   - **Неверный телефон:** в базе указан `+33 9 86 54 84 96`, на сайте и Google Maps — **`+33 6 76 53 64 57`** (`06 76 53 64 57`).
   - **Неверные цены (все 5 позиций):** в базе зафиксированы диапазоны фиксированных цен (`35-45€`, `55-70€`, `60-85€`, `65-90€`, `60-75€`), которых на сайте нет. На официальной странице `/Prestations/` установлена почасовая тарификация:
     - Toilettage simple: **40 € / час**
     - Toilettage complet: **50 € / час**
     - Tonte ou coupe: **50 € / час**
     - Épilation: **53 € / час**
     - Chats: **55 € / час**
   - **Битый URL:** ссылка `https://lecoinatruffes.fr/tarifs/` не существует (отдает 404/ошибку, рабочая страница — `/Prestations/`).
   - **Неверные часы работы:** в базе понедельник закрыт, суббота до 17:00; на Maps понедельник–суббота 09:00-18:00, на сайте прием звонков Lu-Sa 09:00-19:00, приемы Lu-Je и Di 08:00-19:30.

4. **`reptilepassion` (PET_SHOP)**:
   - **Неверный адрес:** в базе указан старый адрес `15 Rue Pré-Gaudry, 69007 Lyon`, магазин переехал на **`93 Rue de Gerland, 69007 Lyon, France`** (подтверждено сайтом и Maps).
   - **Неверный телефон:** в базе указан `+33 4 78 72 26 53`, актуальный телефон — **`+33 4 37 66 01 20`** (`04 37 66 01 20`).
   - **Неверные часы работы:** в базе указан перерыв на обед и закрытый понедельник (`mo closed; tu-sa 10:00-12:30,14:00-19:00`). На Google Maps магазин работает **`mo-sa 07:00-18:00; su 09:00-11:30`**, на сайте указано «Ouvert 6.5 jours / 7».
   - **Число оценок:** в базе `284`, на Google Maps — **`766`** (разница 482 оценки, +170% > допуск 15%).
   - **Цитата часов:** цитата `Mardi au Samedi : 10h00 - 12h30 / 14h00 - 19h00` отсутствует на сайте.

5. **`ptit-pere-lyon-4` (PET_SHOP)**:
   - **Неверный адрес:** в базе указан `15 Rue de Cuire, 69004 Lyon`, фактический адрес бутика на сайте и Maps — **`10 Rue d'Austerlitz, 69004 Lyon, France`**.
   - **Неверный телефон:** в базе указан `+33 4 72 08 94 37`, на Google Maps — **`+33 9 82 73 49 77`**.
   - **Неверные часы работы:** в базе `mo 14:30-19:00; tu-sa 10:00-19:00`. На сайте: **`Lu-Ve 10:00-13:30, 15:00-19:00; Sa 10:00-19:00`**; на Maps: **`Lu-Sa 10:00-19:00`**.
   - **Рейтинг и оценки:** в базе `4.8` (147 оценок), на карточке Maps — **`5.0` (62 оценки)** (ошибочно были внесены данные другой точки сети).
   - **Цитаты:** цитаты `Lundi : 14h30 - 19h...` и `Bienvenue chez P’tit Père, l’animalerie indépendante à Lyon 4 Croix-Rousse` отсутствуют на странице.

6. **`chiens-et-compagnie-educateur-canin-comportementaliste` (DOG_TRAINING)**:
   - **Неверная цена:** в базе `training_individual` зафиксирован как `65 EUR`, на актуальном сайте цена — **`60 €`** («Le Bilan comportemental... Prix : 60€»).
   - **Отсутствующая цена:** в базе `training_group` указан как `25 EUR` («Balade éducative collective (1h30) 25 €»), на сайте отдельного тарифа 25 € нет (есть пакеты 1h — 50€, 3h — 145€, 5h — 230€, 8h — 350€).
   - **Битые URL:** ссылки `https://chiensetcomp.fr/tarifs/` и `https://chiensetcomp.fr/contact/` возвращают **404 Not Found** (WordPress использует префикс `/index.php/prestations/` и `/index.php/contact/`).
   - **Противоречие в описании:** в базе указано «in positive reinforcement» / «методы позитивного подкрепления», тогда как на главной странице сайта кинолог прямо подчеркивает: «lui offrir une éducation adaptée qui n’est pas 100% positive ou coercitive».

---

### 2. Средние расхождения (пропущенные опубликованные цены)

- **`dramard-valerie` (VET_CLINIC)**:
  - **Пропущенные цены:** в базе зафиксировано `prices: none (specialist veterinary consultations, fees not published online)`. Однако на официальной странице консультаций прайс-лист открыто опубликован в разделе FAQ:
    - Premier rendez-vous de comportement: **`230 € TTC`**
    - Rendez-vous de contrôle de comportement: **`130 € TTC`**

---

### 3. Примечания и наблюдения (к сведению)

- **`every-walk` (PET_SITTING)**:
  - Все данные в базе (`43 Av. Rockefeller`, телефон `0782827955`, часы `Lu-Ve 8h-19h, Sa-Di 8h-18h`, цена `walk_60` `14.99 EUR`) полностью совпадают с сайтом и Maps.
  - На карточке Google Maps отображается плашка **«Ce lieu est peut-être fermé»** (телефон на самой карточке Maps не заполнен, взят с сайта). На сайте часть блоков содержит демонстрационный плейсхолдер Wix («19,99 dollars des États-Unis»), однако сервис выгула и контакты актуальны.
- **`devenir-un-cat` (PET_HOTEL)**:
  - В базе поле `opening_hours` оставлено пустым с примечанием `hours: none (instagram login wall, Google Maps - not published)`. На текущий момент карточка Google Maps содержит расписание: `Lu,Me,Je,Ve,Sa 10:00-12:00, 16:30-19:00; Ma,Di fermés`. Все остальные поля подтверждены.
- **`chatperlipopet` (PET_HOTEL)**:
  - Идеально чистое место. Часы работы в базе скопированы дословно с официального сайта («Hors vacances scolaires: Lundi - Vendredi : 10h-13h et 16h30/19h Samedi : 10h-13h et 15h30-17h Dimanche : fermé»). На карточке Google Maps зафиксировано небольшое смещение времени обеденного перерыва (12:30 вместо 13:00) и субботнего интервала (16:00-17:30 вместо 15:30-17:00).
