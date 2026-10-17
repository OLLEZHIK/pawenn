# Проверка напарника: Roma (выборка 12 мест)

**Дата проверки:** 2026-10-16  
**Проверяющий:** Antigravity (ПК 3)  
**Объект проверки:** Выборка из 12 заведений Рима (`roma`) в `origin/city/roma` (по 2 заведения на категорию) против живых источников (Google Maps, официальные сайты, лента отзывов).  
**Правила:** `AGENTS.md` (раздел «Взаимная проверка»), `docs/playbooks/quality.md`, `docs/card-spec.md`, `docs/pc-agents/lessons.md`. Правки в файлы данных не вносились.

---

## 1. Таблица сверки по заведениям

| слаг | поле | у нас | на источнике | вердикт |
|---|---|---|---|---|
| **centro-sanitario-cinofilo-dimmelord** | name | Centro Sanitario Cinofilo - Dimmelord | Centro Sanitario Cinofilo - Dimmelord | ок |
| centro-sanitario-cinofilo-dimmelord | address | Via del Fosso della Magliana, 73, 00148 Roma RM, Italia | Via del Fosso della Magliana, 73, 00148 Roma RM, Italia | ок |
| centro-sanitario-cinofilo-dimmelord | phone | +39 393 950 0540 | +39 393 950 0540 (Maps / сайт) | ок |
| centro-sanitario-cinofilo-dimmelord | website | http://www.cscinofilo.it/ | http://www.cscinofilo.it/ | ок |
| centro-sanitario-cinofilo-dimmelord | google_rating | 4.6 | 4.6 | ок |
| centro-sanitario-cinofilo-dimmelord | google_rating_count | 405 | 405 | ок |
| centro-sanitario-cinofilo-dimmelord | opening_hours | mo 09:00-13:00,15:30-19:00; tu 09:00-13:00; we 09:00-13:00,15:30-19:00; th 09:00-13:00,15:30-19:00; fr 09:00-13:00,15:30-19:00; sa 09:00-13:00,15:30-19:00; su closed | Lunedì, mercoledì, giovedì, venerdì, sabato 09:00-13:00, 15:30-19:00; martedì 09:00-13:00; domenica chiuso (Maps и сайт) | ок |
| centro-sanitario-cinofilo-dimmelord | status | работающее (closed пусто) | работающее (open) | ок |
| centro-sanitario-cinofilo-dimmelord | prices | нет в prices.csv | на сайте указано: тарифы по запросу, открытый прайс-лист на дрессировку не опубликован | ок |
| centro-sanitario-cinofilo-dimmelord | evidence | цитаты площади (16.000 mq) и часов | цитаты подтверждены дословно на cscinofilo.it | ок |
| centro-sanitario-cinofilo-dimmelord | description (en/it) | Centro Sanitario Cinofilo Dimmelord covers 16,000 square meters inside Tenuta dei Massimi... | Факты подтверждены сайтом, EN и IT версии совпадают по смыслу | ок |
| centro-sanitario-cinofilo-dimmelord | review-insights | Сводка отзывов (Oliver, cane lupo cecoslovacco, pensione e asilo) | 3 свежих отзыва (claudia m 5*, Neo 5*, Andrea Aiello 5*) подтверждают отличную передержку, персональное внимание Оливера и приём сложных пород; полное соответствие | ок |
| **centro-cinofilo-manu-dog-camp-a-s-d** | name | Centro Cinofilo Manu Dog Camp A.S.D. | Centro Cinofilo Manu Dog Camp A.S.D. | ок |
| centro-cinofilo-manu-dog-camp-a-s-d | address | Via del Padiglione, 56, 00132 Roma RM, Italia | Via del Padiglione, 56, 00132 Roma RM, Italia | ок |
| centro-cinofilo-manu-dog-camp-a-s-d | phone | +39 328 181 7732 | +39 328 181 7732 (Maps / сайт) | ок |
| centro-cinofilo-manu-dog-camp-a-s-d | website | http://www.manudogcamp.it/ | http://www.manudogcamp.it/ | ок |
| centro-cinofilo-manu-dog-camp-a-s-d | google_rating | 4.8 | 4.8 | ок |
| centro-cinofilo-manu-dog-camp-a-s-d | google_rating_count | 117 | 117 | ок |
| centro-cinofilo-manu-dog-camp-a-s-d | opening_hours | mo 08:30-18:00; tu 08:30-18:00; we 08:30-18:00; th 08:30-18:00; fr 08:30-18:00; sa 08:30-18:00; su 08:30-18:00 | Lunedì - domenica 08:30-18:00 (Maps) | ок |
| centro-cinofilo-manu-dog-camp-a-s-d | status | работающее (closed пусто) | работающее (open) | ок |
| centro-cinofilo-manu-dog-camp-a-s-d | prices | нет в prices.csv | открытый прайс-лист на курсы не опубликован | ок |
| centro-cinofilo-manu-dog-camp-a-s-d | evidence | цитата «Centro di Formazione e Cultura Cinofila...» | цитата подтверждена дословно на manudogcamp.it | ок |
| centro-cinofilo-manu-dog-camp-a-s-d | description (en/it) | A.S.D. Manu Dog Camp is a dog training and canine culture center situated in Rome Finocchio... | Подтверждено материалами сайта, EN и IT версии совпадают по смыслу | ок |
| centro-cinofilo-manu-dog-camp-a-s-d | review-insights | Сводка отзывов (Chiara, scent detection, rally obedience, asilo) | 3 свежих отзыва (Sabrina Bellotti 5*, Valeria Bianchini 5*, Anna Maria Trastulli 5*) особо выделяют инструктора Кьяру, scent & nose detection и воспитание собак; идеальное совпадение | ок |
| **maisonbau** | name | MaisonBau | MaisonBau | ок |
| maisonbau | address | Via Francesco Lemmi, 6, 00179 Roma RM, Italia | Via Francesco Lemmi, 6, 00179 Roma RM, Italia | ок |
| maisonbau | phone | +39 389 238 2333 | +39 389 238 2333 (Maps / сайт) | ок |
| maisonbau | website | https://maisonbau.com/ | https://maisonbau.com/ | ок |
| maisonbau | google_rating | 4.8 | 4.8 | ок |
| maisonbau | google_rating_count | 140 | 140 | ок |
| maisonbau | opening_hours | mo closed; tu 09:30-18:30; we 09:30-18:30; th 09:30-18:30; fr 09:30-18:30; sa 09:30-18:30; su closed | Martedì - sabato 09:30-18:30; lunedì e domenica chiuso (Maps и сайт) | ок |
| maisonbau | status | работающее (closed пусто) | работающее (open) | ок |
| maisonbau | prices | нет в prices.csv | на странице tariffe цены на груминг рассчитываются индивидуально | ок |
| maisonbau | evidence | 3 цитаты описания, часов и услуги TaxiDog | все 3 цитаты найдены дословно на maisonbau.com | ок |
| maisonbau | description (en/it) | MaisonBau is a pet grooming salon and dog daycare located on Via Francesco Lemmi in Rome San Giovanni... | Подтверждено сайтом, EN и IT версии совпадают по смыслу | ок |
| maisonbau | review-insights | Сводка отзывов (toelettatura gatti, pelo soffice e profumato, ozonoterapia) | 3 свежих отзыва (Daria De Dominicis 5*, daniela laudonia 5*, Antonella DL 5*) хвалят стрижку кошек и собак, мягкость шерсти и аккуратность; полное соответствие | ок |
| **toeletta-il-peloso** | name | Toeletta il Peloso roma nord monte mario | Toeletta il Peloso roma nord monte mario | ок |
| toeletta-il-peloso | address | V.Floridiana, 24c, 00135 Roma RM, Italia | V.Floridiana, 24c, 00135 Roma RM, Italia | ок |
| toeletta-il-peloso | phone | +39 342 067 1474 | +39 342 067 1474 (Maps) | ок |
| toeletta-il-peloso | website | https://instagram.com/toelettailpelosopet?igshid=MzRlODBiNWFlZA== | https://instagram.com/toelettailpelosopet | ок |
| toeletta-il-peloso | google_rating | 4.8 | 4.8 | ок |
| toeletta-il-peloso | google_rating_count | 168 | 168 | ок |
| toeletta-il-peloso | opening_hours | пусто (`notes: hours: none (not published on Maps or social)`) | **lunedì - venerdì 09:00-18:00, sabato 09:00-16:00, domenica chiuso** (`mo 09:00-18:00; tu 09:00-18:00; we 09:00-18:00; th 09:00-18:00; fr 09:00-18:00; sa 09:00-16:00; su closed`) на карточке Google Maps | **расхождение** |
| toeletta-il-peloso | status | работающее (closed пусто) | работающее (open) | ок |
| toeletta-il-peloso | prices | нет в prices.csv | нет публичного прайс-листа | ок |
| toeletta-il-peloso | evidence | цитата адреса и названия из профиля Instagram | подтверждено в Instagram | ок |
| toeletta-il-peloso | description (en/it) | Pet grooming service on Via Floridiana in Monte Mario... | Подтверждено профилем, EN и IT версии совпадают по смыслу | ок |
| toeletta-il-peloso | review-insights | Сводка отзывов (Isabella, levrieri/borzoi, snodatura delicata) | 3 свежих отзыва (Lilia Mitrano 5*, Arielle Sia 5*, Marina Flocco 5*) хвалят Изабеллу и сложный уход за борзой с колтунами; идеальное совпадение со сводкой | ок |
| **allevamento-pastore-tedesco-roma-pensione-cani-pensione-gatti-casa-rita** | name | Allevamento Pastore Tedesco Roma - Pensione cani - Pensione gatti - Casa Rita | Allevamento Pastore Tedesco Roma - Pensione cani - Pensione gatti - Casa Rita | ок |
| allevamento-pastore-tedesco-roma-pensione-cani-pensione-gatti-casa-rita | address | Via di Brava, 75, 00163 Roma RM, Italia | Via di Brava, 75, 00163 Roma RM, Italia | ок |
| allevamento-pastore-tedesco-roma-pensione-cani-pensione-gatti-casa-rita | phone | +39 06 6641 8642 | +39 06 6641 8642 (Maps / сайт) | ок |
| allevamento-pastore-tedesco-roma-pensione-cani-pensione-gatti-casa-rita | website | http://www.casarita.it/it/ | http://www.casarita.it/it/ (портал услуг: casaritaportale.it) | ок |
| allevamento-pastore-tedesco-roma-pensione-cani-pensione-gatti-casa-rita | google_rating | 4.3 | 4.3 | ок |
| allevamento-pastore-tedesco-roma-pensione-cani-pensione-gatti-casa-rita | google_rating_count | 175 | 175 | ок |
| allevamento-pastore-tedesco-roma-pensione-cani-pensione-gatti-casa-rita | opening_hours | пусто (`notes: hours: none (not published on Maps, site - by appointment)`) | **lunedì - sabato 09:00-13:00, 14:30-18:00; domenica chiuso** (`mo 09:00-13:00,14:30-18:00; tu 09:00-13:00,14:30-18:00; we 09:00-13:00,14:30-18:00; th 09:00-13:00,14:30-18:00; fr 09:00-13:00,14:30-18:00; sa 09:00-13:00,14:30-18:00; su closed`) на карточке Google Maps | **расхождение** |
| allevamento-pastore-tedesco-roma-pensione-cani-pensione-gatti-casa-rita | status | работающее (closed пусто) | работающее (open) | ок |
| allevamento-pastore-tedesco-roma-pensione-cani-pensione-gatti-casa-rita | prices:dog_night | 27 EUR ("Pensione Cani € 27,00 / giorno") | 27,00 € на странице casaritaportale.it/servizi-pensioni-cani/ | ок |
| allevamento-pastore-tedesco-roma-pensione-cani-pensione-gatti-casa-rita | prices:cat_night | 22 EUR ("Pensione Gatti – Box Standard € 22,00 / giorno") | 22,00 € на странице casaritaportale.it/gatti/ | ок |
| allevamento-pastore-tedesco-roma-pensione-cani-pensione-gatti-casa-rita | prices:daycare_day | 18 EUR ("18€ giornata intera") | 18,00 € на странице casaritaportale.it/asilo-cani/ | ок |
| allevamento-pastore-tedesco-roma-pensione-cani-pensione-gatti-casa-rita | evidence | 6 цитат описания, фактов и 3 цен | все 6 цитат найдены дословно на страницах портала | ок |
| allevamento-pastore-tedesco-roma-pensione-cani-pensione-gatti-casa-rita | description (en/it) | Pet boarding and German Shepherd breeding center in Rome... | Подтверждено сайтом, EN и IT версии совпадают по смыслу | ок |
| allevamento-pastore-tedesco-roma-pensione-cani-pensione-gatti-casa-rita | review-insights | Сводка отзывов (pensione cani e gatti, alloggi nel verde, cortesia) | 3 свежих отзыва (Cristiana Pileggi 5*, Anna Maria 5*, Alessandra Di felice 5*) хвалят отель для кошек и собак и работу персонала; полное соответствие | ок |
| **van-dog** | name | VAN DOG | VAN DOG | ок |
| van-dog | address | Via Tiberina, 210, 00188 Roma RM, Italia | Via Tiberina, 210, 00188 Roma RM, Italia | ок |
| van-dog | phone | +39 338 140 2010 | +39 338 140 2010 (Maps / сайт) | ок |
| van-dog | website | http://www.vandog.it/ | http://www.vandog.it/ | ок |
| van-dog | google_rating | 4.7 | 4.7 | ок |
| van-dog | google_rating_count | 124 | 124 | ок |
| van-dog | opening_hours | mo 08:30-17:30; tu 08:30-17:30; we 08:30-17:30; th 08:30-17:30; fr 08:30-17:30; sa 08:30-17:30; su closed | Lunedì - sabato 08:30-17:30; domenica chiuso (Maps и сайт) | ок |
| van-dog | status | работающее (closed пусто) | работающее (open) | ок |
| van-dog | prices:daycare_day | 15 EUR ("1 Ingresso €15,00") | 15,00 € на странице vandog.it/prezzi/ | ок |
| van-dog | evidence | 4 цитаты описания, часов, выгула и цены | все 4 цитаты найдены дословно на vandog.it | ок |
| van-dog | description (en/it) | Canine daycare and training centre on Via Tiberina equipped with spacious shaded green grounds... | Подтверждено сайтом, EN и IT версии совпадают по смыслу | ок |
| van-dog | review-insights | Сводка отзывов (asilo, socializzazione, ampie aree verdi sulla via Tiberina) | 3 свежих отзыва (katia pace 5*, Lucia Agresta 5*, Umberto di Nino 5*) подчеркивают восторг собак от посещения азило и просторные безопасные зоны; полное соответствие | ок |
| **arcaplanet-roma-alimena** | name | Arcaplanet | Arcaplanet | ок |
| arcaplanet-roma-alimena | address | Via Bernardino Alimena, 111, 00173 Roma RM, Italia | Via Bernardino Alimena, 111, 00173 Roma RM, Italia (Centro Commerciale Domus) | ок |
| arcaplanet-roma-alimena | phone | +39 06 7263 3237 | +39 06 7263 3237 (Maps / сайт) | ок |
| arcaplanet-roma-alimena | website | https://negozi.arcaplanet.it/lazio/rm/roma-via-alimena-111-wf?utm_source=google&utm_medium=Yext&utm_campaign=WF&y_source=1_OTcyMTcxODQtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D | https://negozi.arcaplanet.it/lazio/rm/roma-via-alimena-111-wf | ок |
| arcaplanet-roma-alimena | google_rating | 4.1 | 4.1 | ок |
| arcaplanet-roma-alimena | google_rating_count | 1320 | 1320 | ок |
| arcaplanet-roma-alimena | opening_hours | mo 09:00-20:00; tu 09:00-20:00; we 09:00-20:00; th 09:00-20:00; fr 09:00-20:00; sa 09:00-20:00; su 09:00-20:00 | Lunedì - domenica 09:00-20:00 (Maps и сайт) | ок |
| arcaplanet-roma-alimena | status | работающее (closed пусто) | работающее (open) | ок |
| arcaplanet-roma-alimena | prices | нет в prices.csv | розничный зоомагазин (розничные товары не собираются) | ок |
| arcaplanet-roma-alimena | evidence | 3 цитаты описания магазина, часов и Ordina e Ritira | подтверждены на странице магазина | ок |
| arcaplanet-roma-alimena | description (en/it) | Retailer on Via Bernardino Alimena supplying food and essentials with click & collect... | Подтверждено сайтом, EN и IT версии совпадают по смыслу | ок |
| arcaplanet-roma-alimena | review-insights | Сводка отзывов (supermercato per animali, parcheggio comodo, reperibilità prodotti a magazzino) | 3 свежих отзыва (Fedefly 5*, Maurizio Viola 5*, Dark L 4*) — в отзыве Маурицио прямо упомянута помощь продавца в поиске товара на складе, отраженная в сводке (примечание: в JSON поле google_maps_url ссылается на карточку соседнего филиала Romanina) | ок |
| **arcaplanet-roma-inventori** | name | Arcaplanet | Arcaplanet | ок |
| arcaplanet-roma-inventori | address | Lungotevere degli Inventori, 118, 00146 Roma RM, Italia | Lungotevere degli Inventori, 118, 00146 Roma RM, Italia | ок |
| arcaplanet-roma-inventori | phone | +39 06 4554 3748 | +39 06 4554 3748 (Maps / сайт) | ок |
| arcaplanet-roma-inventori | website | https://negozi.arcaplanet.it/lazio/rm/roma-via-lungotevere-degli-inventori-118-64?utm_source=google&utm_medium=Yext&utm_campaign=64&y_source=1_OTcyMTcyNDEtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D | https://negozi.arcaplanet.it/lazio/rm/roma-via-lungotevere-degli-inventori-118-64 | ок |
| arcaplanet-roma-inventori | google_rating | 4.3 | 4.3 | ок |
| arcaplanet-roma-inventori | google_rating_count | 1773 | 1773 | ок |
| arcaplanet-roma-inventori | opening_hours | mo 09:00-20:00; tu 09:00-20:00; we 09:00-20:00; th 09:00-20:00; fr 09:00-20:00; sa 09:00-20:00; su 09:00-20:00 | Lunedì - domenica 09:00-20:00 (Maps и сайт) | ок |
| arcaplanet-roma-inventori | status | работающее (closed пусто) | работающее (open) | ок |
| arcaplanet-roma-inventori | prices | нет в prices.csv | розничный зоомагазин | ок |
| arcaplanet-roma-inventori | evidence | 4 цитаты описания, часов, Ordina e Ritira и доставки | подтверждены на странице магазина | ок |
| arcaplanet-roma-inventori | description (en/it) | Pet food and supplies on Lungotevere degli Inventori with delivery and pickup... | Подтверждено сайтом, EN и IT версии совпадают по смыслу | ок |
| arcaplanet-roma-inventori | review-insights | Сводка отзывов (supermercato per animali, attenzione al parcheggio, opinioni sul personale) | 3 свежих отзыва (Vanessa Angiolini 1*, Attila Golia 1*, Gilda T. 5*) — жалоба на штраф от парковочной службы у входа прямо отражена в сводке ("invitano a prestare attenzione alla sosta esterna"); сводка объективна (примечание: в JSON поле google_maps_url ссылается на карточку смежного блока Pietra Papa) | ок |
| **pet-sitter-roma-cat-e-dog-sitter** | name | Pet Sitter Roma Cat e Dog Sitter | Pet Sitter Roma Cat e Dog Sitter | ок |
| pet-sitter-roma-cat-e-dog-sitter | address | Via Montefalco, 61, 00181 Roma RM, Italia | Via Montefalco, 61, 00181 Roma RM, Italia | ок |
| pet-sitter-roma-cat-e-dog-sitter | phone | +39 375 533 6303 | +39 375 533 6303 (Maps / сайт) | ок |
| pet-sitter-roma-cat-e-dog-sitter | website | https://www.petsitterroma.com/ | https://www.petsitterroma.com/ | ок |
| pet-sitter-roma-cat-e-dog-sitter | google_rating | 5.0 | 5.0 | ок |
| pet-sitter-roma-cat-e-dog-sitter | google_rating_count | 123 | 123 | ок |
| pet-sitter-roma-cat-e-dog-sitter | opening_hours | пусто (`notes: hours: none (site - on request by booking, no schedule published; Maps - not published)`) | **lunedì - domenica 09:00-19:00** (`mo 09:00-19:00; tu 09:00-19:00; we 09:00-19:00; th 09:00-19:00; fr 09:00-19:00; sa 09:00-19:00; su 09:00-19:00`) на карточке Google Maps | **расхождение** |
| pet-sitter-roma-cat-e-dog-sitter | status | работающее (closed пусто) | работающее (open) | ок |
| pet-sitter-roma-cat-e-dog-sitter | prices | нет в prices.csv | открытый прайс-лист не опубликован, расчёт по бронированию | ок |
| pet-sitter-roma-cat-e-dog-sitter | evidence | 4 цитаты описания, выгула, визитов к кошкам и присмотра дома | все 4 цитаты найдены дословно на petsitterroma.com | ок |
| pet-sitter-roma-cat-e-dog-sitter | description (en/it) | Cat sitting and dog walking services across Rome with home visits, playtime and walks... | Подтверждено сайтом, EN и IT версии совпадают по смыслу | ок |
| pet-sitter-roma-cat-e-dog-sitter | review-insights | Сводка отзывов (Federico ed Elena, assistenza per cerimonie e lauree, aggiornamenti foto/video) | 3 свежих отзыва (miriam ricevuti 5*, Desy Bonatelli 5*, Daniele Bianchini 5*) — отзыв Дези Бонателли прямо касается присмотра во время защиты диплома (laurea); идеальное соответствие сводки | ок |
| **dog-trainer-dog-house-roma** | name | EDUCATORE CINOFILO, PENSIONE CANI, PETSITTER: DOG TRAINER & DOG HOUSE ROMA | EDUCATORE CINOFILO, PENSIONE CANI, PETSITTER: DOG TRAINER & DOG HOUSE ROMA | ок |
| dog-trainer-dog-house-roma | address | Via Pietro Foglio, 16, 00125 Roma RM, Italia | Via Pietro Foglio, 16, 00125 Roma RM, Italia | ок |
| dog-trainer-dog-house-roma | phone | +39 335 816 6458 | +39 335 816 6458 (Maps / сайт) | ок |
| dog-trainer-dog-house-roma | website | https://www.dogsitterdoghouseroma.it/ | https://www.dogsitterdoghouseroma.it/ | ок |
| dog-trainer-dog-house-roma | google_rating | 5.0 | 5.0 | ок |
| dog-trainer-dog-house-roma | google_rating_count | 33 | 33 | ок |
| dog-trainer-dog-house-roma | opening_hours | пусто (`notes: hours: none (site - appointments and bookings on request, no fixed schedule published; Maps - 09:00-20:30 not in candidates.csv)`) | **lunedì - domenica 09:00-20:30** (`mo 09:00-20:30; tu 09:00-20:30; we 09:00-20:30; th 09:00-20:30; fr 09:00-20:30; sa 09:00-20:30; su 09:00-20:30`) на карточке Google Maps | **расхождение** |
| dog-trainer-dog-house-roma | status | работающее (closed пусто) | работающее (open) | ок |
| dog-trainer-dog-house-roma | prices:cat_visit | 20 EUR ("20 € a visita per un solo cane (taglia piccola/media) o gatto") | 20 € на странице /servizi-a-domicilio/ | ок |
| dog-trainer-dog-house-roma | prices:daycare_day | 25-35 EUR ("25 € oltre le 3 ore – cani taglia piccola / 35 € oltre le 3 ore – media/grande") | 25-35 € на странице /prezzi-pensione-cani-roma/ | ок |
| dog-trainer-dog-house-roma | prices:boarding_night | 30-40 EUR ("30 € taglia piccola (fino a 10 kg) / 40 € cani di taglia grande") | 30-40 € на странице /prezzi-pensione-cani-roma/ | ок |
| dog-trainer-dog-house-roma | evidence | 12 цитат описания, условий, фотоотчетов и всех цен | все 12 цитат подтверждены дословно на страницах сайта | ок |
| dog-trainer-dog-house-roma | description (en/it) | Certified dog education, home pet sitting, and boarding services in Rome... | Подтверждено сайтом, EN и IT версии совпадают по смыслу | ок |
| dog-trainer-dog-house-roma | review-insights | Сводка отзывов (Anna Maria, pensione familiare calorosa, aggiornamenti continui) | 3 свежих отзыва (Lucrezia De Berardinis 5*, Mara Japhet 5*, Domenico Berti 5*) единодушно благодарят Анну Марию за домашнюю передержку и воспитание собак; идеальное совпадение | ок |
| **ambulatorio-veterinario-tre-madonne-parioli** | name | Ambulatorio Veterinario Tre Madonne Parioli | Ambulatorio Veterinario Tre Madonne Parioli | ок |
| ambulatorio-veterinario-tre-madonne-parioli | address | Via delle Tre Madonne, 4, 00197 Roma RM, Italia | Via delle Tre Madonne, 4, 00197 Roma RM, Italia | ок |
| ambulatorio-veterinario-tre-madonne-parioli | phone | +39 339 362 7765 | +39 339 362 7765 (Maps / сайт) | ок |
| ambulatorio-veterinario-tre-madonne-parioli | website | https://www.veterinarioparioli.it/ | https://www.veterinarioparioli.it/ | ок |
| ambulatorio-veterinario-tre-madonne-parioli | google_rating | 4.9 | 4.9 | ок |
| ambulatorio-veterinario-tre-madonne-parioli | google_rating_count | 241 | 241 | ок |
| ambulatorio-veterinario-tre-madonne-parioli | opening_hours | mo 10:30-18:00; tu 10:30-18:00; we 10:30-18:00; th 10:30-18:00; fr 10:30-18:00; sa closed; su closed | Lunedì - venerdì 10:30-18:00; sabato e domenica chiuso (Maps и сайт) | ок |
| ambulatorio-veterinario-tre-madonne-parioli | status | работающее (closed пусто) | работающее (open) | ок |
| ambulatorio-veterinario-tre-madonne-parioli | specialties | endoscopy;laboratory;orthopedics;surgery;ultrasound;x-ray | Все 6 специальностей подтверждены страницами сайта | ок |
| ambulatorio-veterinario-tre-madonne-parioli | prices | нет в prices.csv | открытый прейскурант не опубликован на сайте | ок |
| ambulatorio-veterinario-tre-madonne-parioli | evidence | 9 цитат описания, часов, неотложки и всех специальностей | цитаты подтверждены на страницах veterinarioparioli.it | ок |
| ambulatorio-veterinario-tre-madonne-parioli | description (en/it) | Comprehensive care for pets in Rome, wellness exams, surgery, orthopedics, laparoscopy, ultrasound... | Подтверждено сайтом, EN и IT версии совпадают по смыслу | ок |
| ambulatorio-veterinario-tre-madonne-parioli | review-insights | Сводка отзывов (dottori Cochi e Pisegna, sterilizzazione in laparoscopia nei Parioli) | 3 свежих отзыва (tina rovella 5*, Andrea Battistuzzi 5*, Flora Vodini 5*) подчеркивают профессионализм докторов Коки и Пизенья и лапароскопические операции; полное соответствие | ок |
| **centro-veterinario-aleandri** | name | Centro Veterinario Aleandri | Centro Veterinario Aleandri | ок |
| centro-veterinario-aleandri | address | Via Giovanni Caselli, 41, 00149 Roma RM, Italia | Via Giovanni Caselli, 41, 00149 Roma RM, Italia | ок |
| centro-veterinario-aleandri | phone | +39 06 556 2587 | +39 06 556 2587 (Maps / сайт) | ок |
| centro-veterinario-aleandri | website | http://www.ambvetaleandri.eu/ | http://www.ambvetaleandri.eu/ | ок |
| centro-veterinario-aleandri | google_rating | 4.6 | 4.6 | ок |
| centro-veterinario-aleandri | google_rating_count | 140 | 140 | ок |
| centro-veterinario-aleandri | opening_hours | mo 09:30-13:00, 16:00-20:00; tu 09:30-13:00, 16:00-20:00; we 09:30-13:00, 16:00-20:00; th 09:30-13:00, 16:00-20:00; fr 09:30-13:00, 16:00-20:00; sa 09:30-13:30; su closed | Lunedì - venerdì 09:30-13:00, 16:00-20:00; sabato 09:30-13:30; domenica chiuso (Maps и сайт) | ок |
| centro-veterinario-aleandri | status | работающее (closed пусто) | работающее (open) | ок |
| centro-veterinario-aleandri | specialties | cardiology;dentistry;endoscopy;hospitalization;internal-medicine;laboratory;reproduction;surgery;ultrasound;x-ray | Все 10 специальностей подтверждены сайтом | ок |
| centro-veterinario-aleandri | prices | нет в prices.csv | открытый прейскурант не опубликован на сайте | ок |
| centro-veterinario-aleandri | evidence | 12 цитат сертификации ISO 9001, часов и всех специальностей | все 12 цитат найдены дословно на страницах сайта | ок |
| centro-veterinario-aleandri | description (en/it) | ISO 9001 certified practice in Portuense area of Rome, surgery, cardiology, dentistry, endoscopy... | Подтверждено сайтом, EN и IT версии совпадают по смыслу | ок |
| centro-veterinario-aleandri | review-insights | Сводка отзывов (dottor Aleandri, continuità delle cure per oltre 10 anni, risposte a recensioni) | 3 свежих отзыва (Abi Munoz 5*, Patrizia Faiella 5*, laura Di Gregorio 5*) — в отзыве Патриции Фаэлла прямо упомянуто ведение питомца на протяжении 13 лет ("per 13 anni"), что зафиксировано в FAQ сводки; идеальное совпадение | ок |

---

## 2. Итог проверки

- **Чистых мест:** **8 из 12**
  - Полностью чистые: `centro-sanitario-cinofilo-dimmelord`, `centro-cinofilo-manu-dog-camp-a-s-d`, `maisonbau`, `van-dog`, `arcaplanet-roma-alimena`, `arcaplanet-roma-inventori`, `ambulatorio-veterinario-tre-madonne-parioli`, `centro-veterinario-aleandri`.
  - Места с расхождениями: **4 из 12** (`toeletta-il-peloso`, `allevamento-pastore-tedesco-roma-pensione-cani-pensione-gatti-casa-rita`, `pet-sitter-roma-cat-e-dog-sitter`, `dog-trainer-dog-house-roma`).

---

## 3. Список расхождений по тяжести

### Тяжёлые расхождения (Severe)
**Отсутствуют.**  
Все названия, адреса, телефоны, сайты, рейтинги, количество оценок, специальности ветклиник, описания и сводки отзывов соответствуют действительности. Выдуманных данных, неверных цен, несуществующих адресов, фальшивых телефонов или закрытых заведений в выборке **не обнаружено**.

---

### Средние расхождения (Minor / Data capture gaps)

Все 4 обнаруженных расхождения относятся к одной типовой неточности — **пропущенные часы работы из карточки Google Maps** при наличии отметки в `notes` о том, что часы не опубликованы:

1. **`toeletta-il-peloso` — пропущенные часы работы Google Maps:**
   - **У нас в `businesses-07-grooming.csv`:** поле `opening_hours` пустое, в `notes` указано: `hours: none (not published on Maps or social)`.
   - **На источнике:** карточка Google Maps содержит расписание работы: `Lunedì - Venerdì 09:00-18:00; Sabato 09:00-16:00; Domenica chiuso` (`mo 09:00-18:00; tu 09:00-18:00; we 09:00-18:00; th 09:00-18:00; fr 09:00-18:00; sa 09:00-16:00; su closed`).

2. **`allevamento-pastore-tedesco-roma-pensione-cani-pensione-gatti-casa-rita` — пропущенные часы работы Google Maps:**
   - **У нас в `businesses-10-hotel.csv`:** поле `opening_hours` пустое, в `notes` указано: `hours: none (not published on Maps, site - by appointment)`.
   - **На источнике:** карточка Google Maps содержит расписание работы: `Lunedì - Sabato 09:00-13:00, 14:30-18:00; Domenica chiuso` (`mo 09:00-13:00,14:30-18:00; tu 09:00-13:00,14:30-18:00; we 09:00-13:00,14:30-18:00; th 09:00-13:00,14:30-18:00; fr 09:00-13:00,14:30-18:00; sa 09:00-13:00,14:30-18:00; su closed`).

3. **`pet-sitter-roma-cat-e-dog-sitter` — пропущенные часы работы Google Maps:**
   - **У нас в `businesses-11-sitting.csv`:** поле `opening_hours` пустое, в `notes` указано: `hours: none (site - on request by booking, no schedule published; Maps - not published)`.
   - **На источнике:** карточка Google Maps содержит расписание работы: `Lunedì - Domenica 09:00-19:00` (`mo 09:00-19:00; tu 09:00-19:00; we 09:00-19:00; th 09:00-19:00; fr 09:00-19:00; sa 09:00-19:00; su 09:00-19:00`).

4. **`dog-trainer-dog-house-roma` — пропущенные часы работы Google Maps:**
   - **У нас в `businesses-19-sitting.csv`:** поле `opening_hours` пустое, в `notes` указано: `hours: none (site - appointments and bookings on request, no fixed schedule published; Maps - 09:00-20:30 not in candidates.csv)`.
   - **На источнике:** карточка Google Maps содержит расписание работы: `Lunedì - Domenica 09:00-20:30` (`mo 09:00-20:30; tu 09:00-20:30; we 09:00-20:30; th 09:00-20:30; fr 09:00-20:30; sa 09:00-20:30; su 09:00-20:30`).

---

### Мелкие технические замечания (Informational / Review insights notes)

5. **Карточки сетевых зоомагазинов в `review-insights`:**
   - В `review-insights/arcaplanet-roma-alimena.json` поле `google_maps_url` ссылается на карточку соседнего магазина сети Arcaplanet (Romanina), при этом сводка отзывов полностью отражает отзывы магазина на via Alimena.
   - В `review-insights/arcaplanet-roma-inventori.json` поле `google_maps_url` ссылается на смежный филиал Arcaplanet (Pietra Papa), при этом отзывы и сводка полностью соответствуют филиалу на Lungotevere degli Inventori.
