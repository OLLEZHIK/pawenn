# Проверка напарника: Madrid (выборка 12 мест)

**Дата проверки:** 2026-10-16  
**Проверяющий:** Antigravity (ПК 3)  
**Объект проверки:** Выборка из 12 заведений Мадрида (`madrid`) в `origin/main` (по 2 заведения на категорию) против живых источников (Google Maps, официальные сайты, лента отзывов).  
**Правила:** `AGENTS.md` (раздел «Взаимная проверка»), `docs/playbooks/quality.md`, `docs/card-spec.md`, `docs/pc-agents/lessons.md`. Правки в файлы данных не вносились.

---

## 1. Таблица сверки по заведениям

| слаг | поле | у нас | на источнике | вердикт |
|---|---|---|---|---|
| **enjoy-can-madrid** | name | Enjoy Can S.L. | Enjoy Can S.L. | ок |
| enjoy-can-madrid | address | C. de Andorra, 93, Hortaleza, 28043 Madrid, España | C. de Andorra, 93, Hortaleza, 28043 Madrid, España | ок |
| enjoy-can-madrid | phone | +34 613 07 38 38 | +34 613 07 38 38 (Maps / tel:+34613073838 на сайте) | ок |
| enjoy-can-madrid | website | https://enjoycan.com/ | https://enjoycan.com/ | ок |
| enjoy-can-madrid | google_rating | 4.9 | 4.9 | ок |
| enjoy-can-madrid | google_rating_count | 362 | 363 (в пределах допуска ±15%) | ок |
| enjoy-can-madrid | opening_hours | mo closed; tu 09:30-13:30,16:00-20:00; we 09:30-13:30,16:00-20:00; th 09:30-13:30,16:00-20:00; fr 09:30-13:30,16:00-20:00; sa 09:00-13:00; su 09:00-13:00 | Lunes cerrado; Martes a viernes 9:30-13:30, 16:00-20:00; Sábado y domingo 9:00-13:00 | ок |
| enjoy-can-madrid | status | работающее (closed пусто) | работающее (open) | ок |
| enjoy-can-madrid | prices | нет в prices.csv | нет публичного прайс-листа на сайте | ок |
| enjoy-can-madrid | evidence | цитаты часов и услуг на сайте | цитаты присутствуют дословно на enjoycan.com | ок |
| enjoy-can-madrid | description (en/es) | Positive dog training, puppy initiation, behaviour therapy | Услуги подтверждены сайтом, EN и ES версии совпадают по смыслу | ок |
| enjoy-can-madrid | review-insights | Сводка отзывов (Jorge, Teo, modificación de conducta) | 3 свежих отзыва (Jaume Miarnau Andreu 5*, Cristina Llorente 5*, Diana Brown coss 5*) хвалят Teo, позитивные методы и модификацию поведения; противоречий нет (примечание: в JSON поле google_maps_url содержит текстовый фрагмент вместо URL) | ок |
| **kawana-adiestramiento-canino-en-madrid** | name | Kawana \| Adiestramiento Canino en Madrid | Kawana \| Adiestramiento Canino en Madrid | ок |
| kawana-adiestramiento-canino-en-madrid | address | Carretera Fuencarral a, Fuencarral-El Pardo, 28034 Madrid, España | Carretera Fuencarral a, Fuencarral-El Pardo, 28034 Madrid, España | ок |
| kawana-adiestramiento-canino-en-madrid | phone | +34 624 48 03 74 | +34 624 48 03 74 (Maps / +34624480374 на сайте) | ок |
| kawana-adiestramiento-canino-en-madrid | website | http://kawanacentrocanino.com/ | http://kawanacentrocanino.com/ | ок |
| kawana-adiestramiento-canino-en-madrid | google_rating | 4.9 | 4.9 | ок |
| kawana-adiestramiento-canino-en-madrid | google_rating_count | 761 | 762 (в пределах допуска ±15%) | ок |
| kawana-adiestramiento-canino-en-madrid | opening_hours | mo 09:30-14:00,16:30-21:00; tu 09:30-14:00,16:30-21:00; we 09:30-14:00,16:30-21:00; th 09:30-14:00,16:00-21:00; fr 09:30-14:00,16:30-21:00; sa 09:00-15:00; su closed | Совпадает в точности с карточкой Google Maps | ок |
| kawana-adiestramiento-canino-en-madrid | status | работающее (closed пусто) | работающее (open) | ок |
| kawana-adiestramiento-canino-en-madrid | prices:puppy_course | 350 EUR (Cachorros – Pago total €350.00) | 350.00 EUR на странице /producto/cachorros-pago-total/ | ок |
| kawana-adiestramiento-canino-en-madrid | prices:obedience_course | 420 EUR (Grupales – Pago total €420.00) | 420.00 EUR на странице /producto/grupales-pago-total/ | ок |
| kawana-adiestramiento-canino-en-madrid | prices:private_lesson | 400 EUR (Particulares Bono 5 – Pago total €400.00, note: 5-session pass) | 400.00 EUR на странице /producto/particulares-bono-5-pago-total/ | ок |
| kawana-adiestramiento-canino-en-madrid | evidence | цитаты адреса, услуг и цен | все цитаты найдены дословно на страницах сайта | ок |
| kawana-adiestramiento-canino-en-madrid | description (en/es) | Outdoor training ground, group obedience, puppy socialization, in-home training | Подтверждено материалами сайта, EN и ES версии совпадают по смыслу | ок |
| kawana-adiestramiento-canino-en-madrid | review-insights | Сводка отзывов (Héctor, paciencia, reactividad, Fuencarral) | 3 свежих отзыва (Laura Franco 5*, María L.G 5*, Marga Garcia 5*) особо выделяют тренера Эктора за терпение и прогресс; полное соответствие | ок |
| **peluqueria-canina-aluche** | name | Peluqueria Canina Aluche | Peluqueria Canina Aluche | ок |
| peluqueria-canina-aluche | address | C. de Illescas, 215, Latina, 28047 Madrid, España | C. de Illescas, 215, Latina, 28047 Madrid, España (на сайте: C. Illescas, 215) | ок |
| peluqueria-canina-aluche | phone | +34 917 17 73 28 | +34 917 17 73 28 (Maps / 917177328 на сайте Hospital Privet Aluche) | ок |
| peluqueria-canina-aluche | website | https://hospitalprivet.es/ | https://hospitalprivet.es/ | ок |
| peluqueria-canina-aluche | google_rating | 4.8 | 4.8 | ок |
| peluqueria-canina-aluche | google_rating_count | 68 | 68 | ок |
| peluqueria-canina-aluche | opening_hours | mo 09:00-15:00; tu 09:00-15:00; we 09:00-15:00; th 09:00-15:00; fr 09:00-15:00; sa 09:00-15:00; su closed | L-S 9:00-15:00, D cerrado на Google Maps | ок |
| peluqueria-canina-aluche | status | работающее (closed пусто) | работающее (open) | ок |
| peluqueria-canina-aluche | prices | нет в prices.csv | нет публичного прайс-листа на сайте | ок |
| peluqueria-canina-aluche | evidence | цитаты о peluquería canina y felina | цитата найдена дословно на hospitalprivet.es/servicios | ок |
| peluqueria-canina-aluche | description (en/es) | Dog and cat grooming operating alongside the veterinary hospital | Подтверждено сайтом hospitalprivet.es, EN и ES версии совпадают по смыслу | ок |
| peluqueria-canina-aluche | review-insights | Сводка отзывов (Virginia, desenredado cuidadoso, nudos densos) | 3 свежих отзыва (Miguel Arias 5*, Miguel Herrera 5*, Triángulo Aluche 5*) хвалят грумера Вирджинию и удаление колтунов; полное соответствие | ок |
| **dia-de-perros** | name | Día de Perros | Día de Perros - Peluquería canina en Madrid | ок |
| dia-de-perros | address | C. de Altamirano, 27, Moncloa - Aravaca, 28008 Madrid, España | C. de Altamirano, 27, Moncloa - Aravaca, 28008 Madrid, España | ок |
| dia-de-perros | phone | +34 915 47 11 40 | +34 915 47 11 40 (Maps / 915 47 11 40 на сайте) | ок |
| dia-de-perros | website | http://diadeperros.com/ | http://diadeperros.com/ | ок |
| dia-de-perros | google_rating | 4.8 | 4.8 | ок |
| dia-de-perros | google_rating_count | 146 | 146 | ок |
| dia-de-perros | opening_hours | mo 10:00-14:00,15:00-19:00; tu 10:00-14:00,15:00-19:00; we 10:00-14:00,15:00-19:00; th 10:00-14:00,15:00-19:00; fr 10:00-14:00,15:00-19:00; sa 10:00-14:00; su closed | L-V 10:00-14:00, 15:00-19:00; S 10:00-14:00; D cerrado (Maps и сайт) | ок |
| dia-de-perros | status | работающее (closed пусто) | работающее (open) | ок |
| dia-de-perros | prices | нет в prices.csv | нет фиксированного прайса в prices.csv | ок |
| dia-de-perros | evidence | цитаты часов, услуг для кошек и философии ухода | все цитаты найдены дословно на diadeperros.com | ок |
| dia-de-perros | description (en/es) | Bathing, hygienic trimming, breed scissoring, knot removal for dogs and cats | Подтверждено сайтом, EN и ES версии совпадают по смыслу | ок |
| dia-de-perros | review-insights | Сводка отзывов (Cristina, cariño habitual, quejas puntuales comerciales) | 3 свежих отзыва (Ana Poblet Galicia 5*, Elisa Navarro Lopez 5*, Susi Pujol Pastor 1*) — две благодарности грумеру Кристине и одна жалоба на цены/общение; сводка сбалансирована и отражает оба взгляда | ок |
| **centro-canino-gufy-residencia-canina** | name | Centro Canino Gufy - Residencia Canina | Centro Canino Gufy - Residencia Canina | ок |
| centro-canino-gufy-residencia-canina | address | Carretera Fuencarral-El Pardo, Km. 3,5, Fuencarral-El Pardo, 28049 Madrid, España | Carretera Fuencarral-El Pardo, Km. 3,5, Fuencarral-El Pardo, 28049 Madrid, España | ок |
| centro-canino-gufy-residencia-canina | phone | +34 913 73 27 88 | +34 913 73 27 88 (Maps / сайт) | ок |
| centro-canino-gufy-residencia-canina | website | https://www.centrocaninogufy.com/ | https://www.centrocaninogufy.com/ | ок |
| centro-canino-gufy-residencia-canina | google_rating | 4.5 | 4.5 | ок |
| centro-canino-gufy-residencia-canina | google_rating_count | 342 | 342 | ок |
| centro-canino-gufy-residencia-canina | opening_hours | mo 10:00-14:00,16:00-19:00; tu 10:00-14:00,16:00-19:00; we 10:00-14:00,16:00-19:00; th 10:00-14:00,16:00-19:00; fr 10:00-14:00,16:00-19:00; sa 10:00-14:00; su closed | L-V 10:00-14:00, 16:00-19:00; S 10:00-14:00; D cerrado (Maps и сайт) | ок |
| centro-canino-gufy-residencia-canina | status | работающее (closed пусто) | работающее (open) | ок |
| centro-canino-gufy-residencia-canina | prices:dog_night | 29 EUR ("El precio por una noche en nuestro hotel canino es de 29 €, e incluye :") | 29 € за ночь на странице /residencia-canina | ок |
| centro-canino-gufy-residencia-canina | evidence | цитаты часов, описания и цены | все цитаты подтверждены дословно на centrocaninogufy.com | ок |
| centro-canino-gufy-residencia-canina | description (en/es) | Climate-controlled indoor suites, private patios, large fenced parks | Подтверждено сайтом, EN и ES версии совпадают по смыслу | ок |
| centro-canino-gufy-residencia-canina | review-insights | Сводка отзывов (parques exteriores, residencia y guardería) | 3 свежих отзыва (Matias Fernandez 5*, Virginia V.A 5*, David Z 5*) хвалят отель и дневную передержку; противоречий нет | ок |
| **wag-roll** | name | Wag & Roll | Wag & Roll | ок |
| wag-roll | address | C. de Toledo, 166, Arganzuela, 28005 Madrid, España | C. de Toledo, 166, Arganzuela, 28005 Madrid, España (на сайте: Calle Toledo 166) | ок |
| wag-roll | phone | +34 613 92 84 49 | +34 613 92 84 49 (Maps / (+34) 613 928 449 на сайте) | ок |
| wag-roll | website | https://www.wagandroll.com/ | https://www.wagandroll.com/ | ок |
| wag-roll | google_rating | 5.0 | 5.0 | ок |
| wag-roll | google_rating_count | 51 | 51 | ок |
| wag-roll | opening_hours | mo 08:00-20:00; tu 08:00-20:00; we 08:00-20:00; th 08:00-20:00; fr 08:00-20:00; sa closed; su closed | L-V 8:00–20:00; S-D cerrado (Maps и сайт) | ок |
| wag-roll | status | работающее (closed пусто) | работающее (open) | ок |
| wag-roll | prices | нет в prices.csv | нет фиксированного прайса в prices.csv | ок |
| wag-roll | evidence | цитаты часов и услуг | подтверждены на wagandroll.com | ок |
| wag-roll | description (en/es) | Daytime playgroups, air-conditioned rooms, sensory enrichment, park walks | Подтверждено сайтом, EN и ES версии совпадают по смыслу | ок |
| wag-roll | review-insights | Сводка отзывов (peluquería, guardería de día, trato afectuoso) | 3 свежих отзыва (Sara Rodriguez 5*, Eva P. 5*, Rosela Xhika 5*) хвалят груминг и дневной уход; полное соответствие (примечание: в JSON указан альтернативный CID URL Google Maps) | ок |
| **el-jardin-de-kika** | name | El Jardín de Kika | El Jardín de Kika | ок |
| el-jardin-de-kika | address | C. del Pez, 12, Centro, 28004 Madrid, España | C. del Pez, 12, Centro, 28004 Madrid, España (на сайте: Calle Pez, 12) | ок |
| el-jardin-de-kika | phone | +34 910 06 05 94 | +34 910 06 05 94 (Maps / 910 06 05 94 на сайте) | ок |
| el-jardin-de-kika | website | https://www.eljardindekika.es/ | https://www.eljardindekika.es/ | ок |
| el-jardin-de-kika | google_rating | 4.7 | 4.7 | ок |
| el-jardin-de-kika | google_rating_count | 176 | 176 | ок |
| el-jardin-de-kika | opening_hours | mo 10:30-14:30,17:30-21:00; tu 10:30-14:30,17:30-21:00; we 10:30-14:30,17:30-21:00; th 10:30-14:30,17:30-21:00; fr 10:30-14:30,17:30-21:00; sa 11:00-14:00; su closed | L-V 10:30-14:30, 17:30-21:00; S 11:00-14:00; D cerrado (Maps и сайт) | ок |
| el-jardin-de-kika | status | работающее (closed пусто) | работающее (open) | ок |
| el-jardin-de-kika | prices | нет в prices.csv | розничный зоомагазин | ок |
| el-jardin-de-kika | evidence | цитаты часов, BARF и описания магазина в Маласанье | все цитаты найдены дословно на eljardindekika.es | ок |
| el-jardin-de-kika | description (en/es) | Pet boutique on Calle del Pez, natural nutrition, raw BARF, veterinary diets | Подтверждено сайтом, EN и ES версии совпадают по смыслу | ок |
| el-jardin-de-kika | review-insights | Сводка отзывов (Jose, Jesús, atención amable, tienda de barrio surtida) | 3 свежих отзыва (Carolina Fernández López 5*, CAROLINA FERNÁNDEZ LÓPEZ 5*, Ryan Borgen 5*) особо благодарят сотрудников Хосе и Хесуса за помощь; идеальное совпадение | ок |
| **pet-home** | name | PET HOME | PET HOME | ок |
| pet-home | address | C. de Ríos Rosas, 46, Chamberí, 28003 Madrid, España | C. de Ríos Rosas, 46, Chamberí, 28003 Madrid, España | ок |
| pet-home | phone | +34 910 86 45 12 | +34 910 86 45 12 (Maps / 910 86 45 12 на сайте) | ок |
| pet-home | website | http://pet-home.es/ | http://pet-home.es/ | ок |
| pet-home | google_rating | 4.8 | 4.8 | ок |
| pet-home | google_rating_count | 126 | 126 | ок |
| pet-home | opening_hours | mo 10:00-21:00; tu 10:00-21:00; we 10:00-21:00; th 10:00-21:00; fr 10:00-21:00; sa 10:30-14:30; su closed | L-V 10:00-21:00; S 10:30-14:30; D cerrado (Maps) | ок |
| pet-home | status | работающее (closed пусто) | работающее (open) | ок |
| pet-home | prices | нет в prices.csv | розничный зоомагазин | ок |
| pet-home | evidence | цитаты питания BARF, доставки от 59€, груминга | все цитаты найдены дословно на pet-home.es | ок |
| pet-home | description (en/es) | Nutrition and wellness boutique in Chamberí, BARF meals, bath and grooming, delivery | Подтверждено сайтом, EN и ES версии совпадают по смыслу | ок |
| pet-home | review-insights | Сводка отзывов (calidez humana, sonrisa constante, productos naturales) | 3 свежих отзыва (Amy Fajardo 5*, Cristina Masseria 5*, NICOLE FEIJOO 5*) отмечают теплоту и улыбки владельцев; полное соответствие | ок |
| **paseotuperromadrid** | name | PaseoTuPerroMadrid | PaseoTuPerroMadrid | ок |
| paseotuperromadrid | address | C. de Ruiz Perelló, 8, Salamanca, 28028 Madrid, España | C. de Ruiz Perelló, 8, Salamanca, 28028 Madrid, España | ок |
| paseotuperromadrid | phone | +34 687 36 85 51 | +34 687 36 85 51 (Maps / 687 36 85 51 на сайте) | ок |
| paseotuperromadrid | website | https://paseotuperromadrid.es/ | https://paseotuperromadrid.es/ | ок |
| paseotuperromadrid | google_rating | пусто (`notes: rating: none (...)`) | **4.7** на карточке Google Maps | расхождение |
| paseotuperromadrid | google_rating_count | пусто (`notes: rating: none (...)`) | **58** отзывов на карточке Google Maps | расхождение |
| paseotuperromadrid | opening_hours | пусто (`notes: hours: none (...)`) | **mo 24h; tu 24h; we 24h; th 24h; fr 24h; sa 24h; su 24h** ("Abierto 24 horas" на Maps) | расхождение |
| paseotuperromadrid | status | работающее (closed пусто) | работающее (open) | ок |
| paseotuperromadrid | prices:boarding_night | 40 EUR (40 € /noche) | 40 € / noche на главной странице сайта | ок |
| paseotuperromadrid | evidence | цитата описания и цены ночлега | цитаты присутствуют дословно на paseotuperromadrid.es | ок |
| paseotuperromadrid | description (en/es) | Group and individual dog walks, home-based overnight boarding in Salamanca | Подтверждено сайтом, EN и ES версии совпадают по смыслу | ок |
| paseotuperromadrid | review-insights | Сводка отзывов (Ernesto, paseos en grupos, mención de reseña desfavorable) | 3 свежих отзыва (Martin Becker 5*, Rosaparne 1*, Nerea Camisan 5*) — сводка точно зафиксировала наличие единичной критической претензии по обращению с питомцем наряду с положительными отзывами | ок |
| **cuidadora-de-gatos-karenpoppets-catsitter** | name | Cuidadora de gatos\| Karenpoppets_catsitter | Cuidadora de gatos\| Karenpoppets_catsitter | ок |
| cuidadora-de-gatos-karenpoppets-catsitter | address | C. de Palos de la Frontera, 8, Arganzuela, 28012 Madrid, España | C. de Palos de la Frontera, 8, Arganzuela, 28012 Madrid, España | ок |
| cuidadora-de-gatos-karenpoppets-catsitter | phone | пусто (`notes: phone: none (...)`) | **+34 686 33 21 00** на карточке Google Maps | расхождение |
| cuidadora-de-gatos-karenpoppets-catsitter | website | https://calendly.com/conectakarenpoppets_catsitter/agenda-abierta | https://calendly.com/conectakarenpoppets_catsitter/agenda-abierta | ок |
| cuidadora-de-gatos-karenpoppets-catsitter | google_rating | пусто (`notes: rating: none (...)`) | **5.0** на карточке Google Maps | расхождение |
| cuidadora-de-gatos-karenpoppets-catsitter | google_rating_count | пусто (`notes: rating: none (...)`) | **64** отзыва на карточке Google Maps | расхождение |
| cuidadora-de-gatos-karenpoppets-catsitter | opening_hours | пусто (`notes: hours: none (...)`) | **mo 11:00-19:30; tu 11:00-19:30; we 11:00-19:30; th 11:00-19:30; fr 11:00-19:30; sa 10:00-13:30; su closed** на Google Maps | расхождение |
| cuidadora-de-gatos-karenpoppets-catsitter | status | работающее (closed пусто) | работающее (open) | ок |
| cuidadora-de-gatos-karenpoppets-catsitter | prices | нет в prices.csv | бронирование через Calendly | ок |
| cuidadora-de-gatos-karenpoppets-catsitter | evidence | "¡Hola! Soy Karen, cuidadora de gatos profesional en Madrid." (URL Calendly) | **Цитата отсутствует на странице Calendly** (виджет записи на звонок без текста описания) | расхождение |
| cuidadora-de-gatos-karenpoppets-catsitter | description (en/es) | In-home feline care in Arganzuela, visits, feeding, medication, updates | Отражает фактический профиль сервиса (подтверждается отзывами и соцсетями), EN и ES совпадают по смыслу | ок |
| cuidadora-de-gatos-karenpoppets-catsitter | review-insights | Сводка отзывов (Luri, Manuel, fotos y vídeos diarios de las visitas) | 3 свежих отзыва (Camille REVENU 5*, nicola zanda 5*, Conchi 5*) прямо называют Лури и Мануэля и благодарят за ежедневные фото и видео; полное соответствие | ок |
| **clinica-veterinaria-madagascar** | name | Clínica Veterinaria Madagascar | Clínica Veterinaria Madagascar | ок |
| clinica-veterinaria-madagascar | address | **C. de Melchor Fernández Almagro, 8, Fuencarral - El Pardo, 28029 Madrid, España** | **C. de Ginzo de Limia, 30, Fuencarral-El Pardo, 28029 Madrid, España** (на Google Maps и на сайте cvmadagascar.com) | **расхождение (тяжёлое)** |
| clinica-veterinaria-madagascar | phone | +34 912 57 57 47 | +34 912 57 57 47 (Maps / 912 57 57 47 на сайте) | ок |
| clinica-veterinaria-madagascar | website | http://cvmadagascar.com/ | http://cvmadagascar.com/ | ок |
| clinica-veterinaria-madagascar | google_rating | 4.5 | 4.5 | ок |
| clinica-veterinaria-madagascar | google_rating_count | 331 | 331 | ок |
| clinica-veterinaria-madagascar | opening_hours | mo 09:00-22:00; tu 09:00-22:00; we 09:00-22:00; th 09:00-22:00; fr 09:00-22:00; sa 09:30-16:30; su closed | L-V 09:00–22:00, S 09:30–16:30, D cerrado (Maps и сайт) | ок |
| clinica-veterinaria-madagascar | status | работающее (closed пусто) | работающее (open) | ок |
| clinica-veterinaria-madagascar | specialties | exotics;orthopedics;dermatology;neurology;cardiology | Все 5 специальностей подтверждены страницами сайта | ок |
| clinica-veterinaria-madagascar | prices | нет в prices.csv | нет публичного прайса на сайте | ок |
| clinica-veterinaria-madagascar | evidence | цитаты часов и специальностей | все цитаты найдены дословно на cvmadagascar.com | ок |
| clinica-veterinaria-madagascar | description (en/es) | Care for dogs, cats, and exotic animals, neurology, cardiology, traumatology | Подтверждено сайтом, EN и ES версии совпадают по смыслу | ок |
| clinica-veterinaria-madagascar | review-insights | Сводка отзывов (Carlos, Benedetta, Sandra, Pilar, medicina exótica) | 3 свежих отзыва (José Daniel Zuleta López 5*, Ernesto Plaza 5*, marc aular 5*) персонально благодарят Сандру и Бенедетту; полное соответствие | ок |
| **hospital-veterinario-puchol** | name | Hospital Veterinario Puchol | Hospital Veterinario Puchol | ок |
| hospital-veterinario-puchol | address | C. de Sauceda, 8, Fuencarral-El Pardo, 28050 Madrid, España | C. de Sauceda, 8, Fuencarral-El Pardo, 28050 Madrid, España (на сайте: C/ Sauceda 8) | ок |
| hospital-veterinario-puchol | phone | +34 912 90 06 40 | +34 912 90 06 40 (Maps / 912 90 06 40 на сайте) | ок |
| hospital-veterinario-puchol | website | https://hospitalveterinariopuchol.com/?utm_source=gbp&utm_medium=organic&utm_campaign=gbp_web | https://hospitalveterinariopuchol.com/ | ок |
| hospital-veterinario-puchol | google_rating | пусто (`notes: rating: none (...)`) | **4.2** на карточке Google Maps | расхождение |
| hospital-veterinario-puchol | google_rating_count | пусто (`notes: rating: none (...)`) | **2861** отзыв на карточке Google Maps | расхождение |
| hospital-veterinario-puchol | opening_hours | mo 24h; tu 24h; we 24h; th 24h; fr 24h; sa 24h; su 24h | Abierto 24 horas (Maps / Urgencias 24h на сайте) | ок |
| hospital-veterinario-puchol | status | работающее (closed пусто) | работающее (open) | ок |
| hospital-veterinario-puchol | specialties | surgery;orthopedics;cardiology;dermatology;ophthalmology;oncology;neurology;internal-medicine;ultrasound;ct;hospitalization | Все 11 специальностей подтверждены страницами сайта | ок |
| hospital-veterinario-puchol | prices | нет в prices.csv | на сайте указано, что тарифы озвучиваются при приёме | ок |
| hospital-veterinario-puchol | evidence | цитаты круглосуточной помощи и всех специальностей | все цитаты найдены дословно на hospitalveterinariopuchol.com | ок |
| hospital-veterinario-puchol | description (en/es) | 24-hour emergency care, diagnostic imaging, surgery, intensive hospitalization | Подтверждено сайтом, EN и ES версии совпадают по смыслу | ок |
| hospital-veterinario-puchol | review-insights | Сводка отзывов (especialistas valorados, discrepancias en urgencias) | 3 свежих отзыва (Mercedes Sampedro 1*, maria antonia astorgatonia.astorga 5*, Jesus SACRISTAN BRAVO 5*) подтверждают высокий уровень узких специалистов (офтальмология) и претензии к задержкам на приёме в неотложке; полное соответствие | ок |

---

## 2. Итог проверки

- **Чистых мест:** **8 из 12**
  - Полностью чистые: `enjoy-can-madrid`, `kawana-adiestramiento-canino-en-madrid`, `peluqueria-canina-aluche`, `dia-de-perros`, `centro-canino-gufy-residencia-canina`, `wag-roll`, `el-jardin-de-kika`, `pet-home`.
  - Места с расхождениями: **4 из 12** (`clinica-veterinaria-madagascar`, `hospital-veterinario-puchol`, `paseotuperromadrid`, `cuidadora-de-gatos-karenpoppets-catsitter`).

---

## 3. Список расхождений по тяжести

### Тяжёлые расхождения (Severe)

1. **`clinica-veterinaria-madagascar` — неверный адрес:**
   - **У нас в `businesses-04-vet.csv`:** `C. de Melchor Fernández Almagro, 8, Fuencarral - El Pardo, 28029 Madrid, España`
   - **На живых источниках:** `C. de Ginzo de Limia, 30, Fuencarral-El Pardo, 28029 Madrid, España` (зафиксирован на Google Maps, на официальном сайте `cvmadagascar.com/contacto-y-localizacion/`, а также в `candidates.csv`).
   - **Суть проблемы:** при переносе в `businesses-04-vet.csv` адрес был ошибочно заменён на адрес другой улицы. Требуется исправление на `C. de Ginzo de Limia, 30` (или замена заведения по правилам города).

---

### Средние и информационные расхождения (Minor / Data capture gaps)

2. **`hospital-veterinario-puchol` — пропущенные рейтинг и число оценок Google Maps:**
   - **У нас:** `google_rating` и `google_rating_count` оставлены пустыми с пометкой `rating: none (candidates.csv has no rating recorded from maps pass)`.
   - **На источнике:** Карточка Google Maps имеет рейтинг **4.2** и **2861** отзыв (в `candidates.csv` ошибочно попала заглушка `under 5 ratings`).

3. **`paseotuperromadrid` — пропущенные рейтинг, число оценок и часы Google Maps:**
   - **У нас:** `google_rating`, `google_rating_count` и `opening_hours` оставлены пустыми (с пометками в `notes`).
   - **На источнике:** Карточка Google Maps имеет рейтинг **4.7**, **58** отзывов и круглосуточный режим работы (`Abierto 24 horas` / `mo 24h; ...; su 24h`).

4. **`cuidadora-de-gatos-karenpoppets-catsitter` — пропущенные поля Google Maps и цитата в evidence:**
   - **Телефон:** у нас пустой (в `notes` помечено отсутствие на сайте Calendly), на Google Maps указан `+34 686 33 21 00`.
   - **Рейтинг и оценки:** у нас пустые (в `notes` помечено отсутствие в `candidates.csv`), на Google Maps рейтинг **5.0** (64 отзыва).
   - **Часы работы:** у нас пустые, на Google Maps указаны `mo 11:00-19:30; tu 11:00-19:30; we 11:00-19:30; th 11:00-19:30; fr 11:00-19:30; sa 10:00-13:30; su closed`.
   - **Цитата в `evidence-11-sitting.csv`:** строка 15 ссылается на `https://calendly.com/conectakarenpoppets_catsitter/agenda-abierta` с цитатой `"¡Hola! Soy Karen, cuidadora de gatos profesional en Madrid."`, однако эта страница является интерактивным календарем бронирования звонков и не содержит данной фразы в тексте.

5. **Мелкие технические замечания по `review-insights`:**
   - В `review-insights/enjoy-can-madrid.json` в поле `google_maps_url` по ошибке записана строка `" clases de iniciación para cachorros"` вместо URL.
   - В `review-insights/wag-roll.json` поле `google_maps_url` ссылается на дублирующий/альтернативный CID Google Maps (`0x5e8bc8fa3c0d8d47`), отличный от ссылки в `businesses-10-hotel.csv` (`0x3e6171337936b0`). При этом тексты отзывов соответствуют заведению.
