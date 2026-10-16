# Взаимная проверка: Valencia (выборка 12 мест)

- **Город:** Валенсия (`valencia`)
- **Проверяющий:** Antigravity (ПК 8)
- **Дата проверки:** 2026-10-16
- **Ветка проверки:** `pc8/peercheck-valencia`
- **Проверяемые данные:** `origin/main` (`data/cities/valencia/businesses-*.csv`, `prices.csv`, `evidence-*.csv`, `review-insights/`)
- **Объём выборки:** 12 мест (по 2 на категорию: DOG_TRAINING, GROOMING, PET_HOTEL, PET_SHOP, PET_SITTING, VET_CLINIC)

---

## 1. Таблица сверки

| слаг | поле | у нас | на источнике | вердикт |
|---|---|---|---|---|
| lobo-descafeinado-valencia | name | Lobo Descafeinado | Lobo Descafeinado - Adiestramiento canino en Valencia - Educación y actividades | ок |
| lobo-descafeinado-valencia | address | Av. del Cid, 116, L'Olivereta, 46018 València, Valencia, España | Av. del Cid, 116, L'Olivereta, 46018 València, Valencia, España | ок |
| lobo-descafeinado-valencia | phone | +34 687 57 31 62 | +34 687 57 31 62 (Maps & сайт) | ок |
| lobo-descafeinado-valencia | google_rating | 4.7 | 4.7 | ок |
| lobo-descafeinado-valencia | google_rating_count | 71 | 71 | ок |
| lobo-descafeinado-valencia | opening_hours | mo 09:00-20:00; tu 09:00-20:00; we 09:00-20:00; th 09:00-20:00; fr 09:00-20:00; sa 09:00-17:00; su closed | L-V 9:00–20:00, S 9:00–17:00, D cerrado (Maps) | ок |
| lobo-descafeinado-valencia | status | open (closed: "") | Open (не закрыто) | ок |
| lobo-descafeinado-valencia | website | https://lobodescafeinado.com/ | https://lobodescafeinado.com/ (доступен) | ок |
| lobo-descafeinado-valencia | prices | нет в prices.csv | на сайте публичный прейскурант не опубликован | ок |
| lobo-descafeinado-valencia | facts / evidence | home_training, group_classes, behaviour_problems, online_lessons, description | все 5 цитат подтверждены на главной странице сайта | ок |
| lobo-descafeinado-valencia | descriptions | en/es: занятия на дому, курс «Ciudadano Perro», консультации, поиск грибов | подтверждено сайтом | ок |
| lobo-descafeinado-valencia | review_insights | карточки: прогресс в поведении (реакция на звонок/гостей), терпение Сальвы, выезды на природу | подтверждено отзывами (Nuria Nya, Carmen Feijóo) | ок |
| interanimals-alejandra-gomes-damaral | name | InterAnimals - Alejandra Gomes d'Amaral | InterAnimals - Alejandra Gomes d'Amaral | ок |
| interanimals-alejandra-gomes-damaral | address | C/ d'Alboraia, s/n, La Saïdia, 46010 València, Valencia, España | C/ d'Alboraia, s/n, La Saïdia, 46010 València, Valencia, España | ок |
| interanimals-alejandra-gomes-damaral | phone | +34 620 26 84 06 | +34 620 26 84 06 (Maps & сайт) | ок |
| interanimals-alejandra-gomes-damaral | google_rating | пусто (в notes: real on Maps is 4.8) | 4.8 (Maps) | ок (обосновано в notes) |
| interanimals-alejandra-gomes-damaral | google_rating_count | пусто (в notes: 21 reviews) | 21 (Maps) | ок (обосновано в notes) |
| interanimals-alejandra-gomes-damaral | opening_hours | mo 09:00-19:00; tu 09:00-19:00; we 09:00-19:00; th 09:00-19:00; fr 09:00-19:00; sa closed; su closed | на сайте contacto: «Lunes a Viernes: 09:00h – 19:00h, Sábados: 10:00h – 14:00h»; на Maps: L-S 10:00–18:00 | расхождение (на сайте указана суббота 10:00–14:00, в строке sa closed) |
| interanimals-alejandra-gomes-damaral | status | open (closed: "") | Open (не закрыто) | ок |
| interanimals-alejandra-gomes-damaral | website | https://alejandragomesdamaral.com/ | https://alejandragomesdamaral.com/ (доступен) | ок |
| interanimals-alejandra-gomes-damaral | prices | нет в prices.csv | индивидуальные программы по запросу, публичного прайса нет | ок |
| interanimals-alejandra-gomes-damaral | facts / evidence | home_training, behaviour_problems, online_lessons, description | все 4 цитаты подтверждены на сайте | ок |
| interanimals-alejandra-gomes-damaral | descriptions | en/es: методика Алехандры Гомес д'Амарал, визиты на дом, онлайн-консультации | подтверждено сайтом | ок |
| interanimals-alejandra-gomes-damaral | review_insights | нет в городе | review-insights/<slug>.json отсутствует | нет данных (файла нет) |
| peluqueria-canina-innovacan-valencia | name | PELUQUERÍA CANINA INNOVACAN VALENCIA | PELUQUERÍA CANINA INNOVACAN VALENCIA | ок |
| peluqueria-canina-innovacan-valencia | address | C/ de José Grollo, 105, Benicalap, 46025 València, Valencia, España | C/ de José Grollo, 105, Benicalap, 46025 València, Valencia, España | ок |
| peluqueria-canina-innovacan-valencia | phone | +34 634 55 78 48 | моб. на сайте: +34 634 55 78 48; гор. на Maps: +34 962 05 48 72 (в notes пояснено) | ок |
| peluqueria-canina-innovacan-valencia | google_rating | 4.8 | 4.8 | ок |
| peluqueria-canina-innovacan-valencia | google_rating_count | 166 | 166 | ок |
| peluqueria-canina-innovacan-valencia | opening_hours | mo 10:00-14:00,17:00-20:00; tu 10:00-14:00,17:00-20:00; we 10:00-14:00,17:00-20:00; th 10:00-14:00,17:00-20:00; fr 10:00-14:00,17:00-20:00; sa 10:00-14:00; su closed | «Lunes a Viernes: 10 – 14 \| 17 – 20 Sábados: 10 – 14» (сайт /contacto/) | ок |
| peluqueria-canina-innovacan-valencia | status | open (closed: "") | Open (не закрыто) | ок |
| peluqueria-canina-innovacan-valencia | website | http://www.innovacanvalencia.com/ | http://www.innovacanvalencia.com/ (доступен) | ок |
| peluqueria-canina-innovacan-valencia | prices | нет в prices.csv | на сайте прайс не опубликован | ок |
| peluqueria-canina-innovacan-valencia | facts / evidence | opening_hours («Lunes a Viernes: 10 – 14...») подтверждено; description («La estética canina combina higiene, salud y belleza...») | цитата description отсутствует дословно на страницах сайта (смысл подтверждается) | расхождение (цитата evidence:description не найдена дословно) |
| peluqueria-canina-innovacan-valencia | descriptions | en/es: более 15 лет опыта, стрижки по породе, увлажнение, скидки клуба | подтверждено сайтом | ок |
| peluqueria-canina-innovacan-valencia | review_insights | карточки: внимательность персонала, подход к пугливым собакам, качество стрижек | подтверждено отзывами (Marina Balcone, Manuel VM) | ок |
| cachorris-peluqueria-canina-y-tienda-de-productos-para-mascotas | name | Cachorris Peluqueria Canina y Tienda de Productos para Mascotas. | Cachorris Peluqueria Canina y Tienda de Productos para Mascotas. | ок |
| cachorris-peluqueria-canina-y-tienda-de-productos-para-mascotas | address | C/ de l'Explorador Andrés, 32, bajo izquierdo, Algirós, 46022 València, Valencia, España | C/ de l'Explorador Andrés, 32, bajo izquierdo, Algirós, 46022 València, Valencia, España | ок |
| cachorris-peluqueria-canina-y-tienda-de-productos-para-mascotas | phone | +34 960 88 38 68 | +34 960 88 38 68 (Maps & сайт) | ок |
| cachorris-peluqueria-canina-y-tienda-de-productos-para-mascotas | google_rating | 4.4 | 4.4 | ок |
| cachorris-peluqueria-canina-y-tienda-de-productos-para-mascotas | google_rating_count | 84 | 84 | ок |
| cachorris-peluqueria-canina-y-tienda-de-productos-para-mascotas | opening_hours | mo 10:00-14:00,17:00-20:00; tu 10:00-14:00,17:00-20:00; we 10:00-14:00,17:00-20:00; th 10:00-14:00,17:00-20:00; fr 10:00-14:00,17:00-20:00; sa 09:00-14:00; su closed | L-V 10:00–14:00, 17:00–20:00, S 9:00–14:00, D cerrado (Maps) | ок |
| cachorris-peluqueria-canina-y-tienda-de-productos-para-mascotas | status | open (closed: "") | Open (не закрыто) | ок |
| cachorris-peluqueria-canina-y-tienda-de-productos-para-mascotas | website | http://www.cachorris.es/ | http://www.cachorris.es/ (доступен) | ок |
| cachorris-peluqueria-canina-y-tienda-de-productos-para-mascotas | prices | нет в prices.csv | на сайте прайс груминга не опубликован | ок |
| cachorris-peluqueria-canina-y-tienda-de-productos-para-mascotas | facts / evidence | cats («Para todas las razas de perro y gato»), description («En nuestra tienda online...») | все 2 цитаты подтверждены на сайте | ок |
| cachorris-peluqueria-canina-y-tienda-de-productos-para-mascotas | descriptions | en/es: бутик и груминг в Algirós, натуральные корма без зерна, диета BARF | подтверждено сайтом | ок |
| cachorris-peluqueria-canina-y-tienda-de-productos-para-mascotas | review_insights | карточки: контраст в стрижках (caniches gigantes vs огрехи), смена руководства, задержки | подтверждено отзывами (Manuel Bueno, Isabel Marmol) | ок |
| residencia-canina-devesa-gardens | name | Residencia Canina Devesa Gardens Valencia | Residencia Canina Devesa Gardens Valencia | ок |
| residencia-canina-devesa-gardens | address | Calle Rambla del Saler, Km. 13, Poblados del Sur, 46012 València, Valencia, España | Calle Rambla del Saler, Km. 13, Poblados del Sur, 46012 València, Valencia, España | ок |
| residencia-canina-devesa-gardens | phone | +34 961 61 11 36 | +34 961 61 11 36 (Maps & сайт) | ок |
| residencia-canina-devesa-gardens | google_rating | 2.7 | 2.7 | ок |
| residencia-canina-devesa-gardens | google_rating_count | 25 | 25 | ок |
| residencia-canina-devesa-gardens | opening_hours | mo 09:00-14:00,16:00-19:00; tu 09:00-14:00,16:00-19:00; we 09:00-14:00,16:00-19:00; th 09:00-14:00,16:00-19:00; fr 09:00-14:00,16:00-19:00; sa 09:00-14:00,16:00-19:00; su 09:00-14:00,16:00-19:00 | L-D 9:00–14:00, 16:00–19:00 (Maps) | ок |
| residencia-canina-devesa-gardens | status | open (closed: "") | Open (не закрыто) | ок |
| residencia-canina-devesa-gardens | website | https://www.devesalia.com/ | https://www.devesalia.com/ (доступен) | ок |
| residencia-canina-devesa-gardens | prices:dog_night | 12 | «TARIFA PERROS 12€ / día» (сайт devesalia.com) | ок |
| residencia-canina-devesa-gardens | prices:cat_night | 8 | «TARIFA GATOS 8€ / día» (сайт devesalia.com) | ок |
| residencia-canina-devesa-gardens | facts / evidence | description, cats, outdoor_run, prices | все 5 цитат подтверждены на сайте | ок |
| residencia-canina-devesa-gardens | descriptions | en/es: передержка собак и кошек в парке Альбуфера, индивидуальные боксы, выгул | подтверждено сайтом | ок |
| residencia-canina-devesa-gardens | review_insights | карточки: критика ухода и надзора, противоположные мнения о гигиене и инцидент с котом | подтверждено отзывами (Oscar Lago, Mar) | ок |
| cleo-cuida-peludos | name | Cleo Cuida Peludos | Cleo Cuida Peludos · Guardería canina familiar en Valencia | ок |
| cleo-cuida-peludos | address | C. Agustin Lara, Rascaña, 46019 València, Valencia, España | C. Agustin Lara, Rascaña, 46019 València, Valencia, España | ок |
| cleo-cuida-peludos | phone | +34 640 94 91 18 | +34 640 94 91 18 (Maps & сайт) | ок |
| cleo-cuida-peludos | google_rating | 4.9 | 4.9 | ок |
| cleo-cuida-peludos | google_rating_count | 42 | 42 | ок |
| cleo-cuida-peludos | opening_hours | mo 08:00-22:00; tu 08:00-22:00; we 08:00-22:00; th 08:00-22:00; fr 08:00-20:00; sa 08:00-22:00; su 08:00-22:00 | L-J 8:00–22:00, V 8:00–20:00, S-D 8:00–22:00 (Maps) | ок |
| cleo-cuida-peludos | status | open (closed: "") | Open (не закрыто) | ок |
| cleo-cuida-peludos | website | https://cleocuidapeludos.com/ | https://cleocuidapeludos.com/ (доступен) | ок |
| cleo-cuida-peludos | prices:daycare_day | 22 (perro <= 15 kg) | «Guardería de día 22€ sin noche», «Solo peludos de hasta 15 kg» (сайт) | ок |
| cleo-cuida-peludos | prices:dog_night | 25 (perro <= 15 kg) | «Estancia con noche 25€ por noche», «Solo peludos de hasta 15 kg» (сайт) | ок |
| cleo-cuida-peludos | facts / evidence | description, small_dogs_only, trial_stay, photo_updates, prices | все 6 цитат подтверждены на сайте | ок |
| cleo-cuida-peludos | descriptions | en/es: домашняя передержка до 15 кг, до 3 собак, минимум 3 прогулки, фото/видео | подтверждено сайтом | ок |
| cleo-cuida-peludos | review_insights | карточки: чуткость к собакам с тревогой расставания (ansiedad por separación), фото/видео | подтверждено отзывами (Raquel Trull Pérez, Juan, Jorge Cherp) | ок |
| kiwoko-arena-multiespacio-valencia | name | Kiwoko. Mundo Animal | Kiwoko. Mundo Animal | ок |
| kiwoko-arena-multiespacio-valencia | address | Calle Santa Genoveva Torres s/n C.C.Arena, Local S-16, 46019 València, Valencia, España | Calle Santa Genoveva Torres s/n C.C.Arena, Local S-16, 46019 València, Valencia, España | ок |
| kiwoko-arena-multiespacio-valencia | phone | +34 963 45 65 14 | +34 963 45 65 14 (Maps & сайт) | ок |
| kiwoko-arena-multiespacio-valencia | google_rating | 4.1 | 4.1 | ок |
| kiwoko-arena-multiespacio-valencia | google_rating_count | 1843 | 1843 | ок |
| kiwoko-arena-multiespacio-valencia | opening_hours | mo 10:00-22:00; tu 10:00-22:00; we 10:00-22:00; th 10:00-22:00; fr 10:00-22:00; sa 10:00-22:00; su 11:00-21:00 | L-S 10:00–22:00, D 11:00–21:00 (Maps & сайт) | ок |
| kiwoko-arena-multiespacio-valencia | status | open (closed: "") | Open (не закрыто) | ок |
| kiwoko-arena-multiespacio-valencia | website | https://tiendas.kiwoko.com/... | https://tiendas.kiwoko.com/... (доступен) | ок |
| kiwoko-arena-multiespacio-valencia | prices | нет в prices.csv | цены зоомагазинов не собираются по стандарту | ок |
| kiwoko-arena-multiespacio-valencia | facts / evidence | aquarium_fish, exotic_supplies, click_collect, opening_hours подтверждены; facts:raw_food («Dieta BARF») | цитата «Dieta BARF» не найдена в видимом тексте страницы магазина (на общем сайте сети есть) | расхождение (цитата evidence:facts:raw_food не найдена на странице филиала) |
| kiwoko-arena-multiespacio-valencia | descriptions | en/es: зоомагазин в CC Arena, аквариумистика, рептилии, птицы, Click&Collect | подтверждено сайтом | ок |
| kiwoko-arena-multiespacio-valencia | review_insights | карточки: консультации по кошкам (Ari), ассортимент CC Arena, претензии к содержанию кроликов | подтверждено отзывами (M Medina, Laura Martínez Gómez, Alex) | ок |
| tierra-y-mar-valencia | name | Tierra y Mar | Tierra y Mar | ок |
| tierra-y-mar-valencia | address | Av. d'Aragó, 12, El Pla del Real, 46021 València, Valencia, España | Av. d'Aragó, 12, El Pla del Real, 46021 València, Valencia, España | ок |
| tierra-y-mar-valencia | phone | +34 655 17 14 02 | +34 655 17 14 02 (Maps & сайт) | ок |
| tierra-y-mar-valencia | google_rating | 4.5 | 4.5 | ок |
| tierra-y-mar-valencia | google_rating_count | 246 | 246 | ок |
| tierra-y-mar-valencia | opening_hours | mo 10:00-14:00, 17:00-20:00; tu 10:00-14:00, 17:00-20:00; we 10:00-14:00, 17:00-20:00; th 10:00-14:00, 17:00-20:00; fr 10:00-14:00, 17:00-20:00; sa 10:00-14:00; su closed | L-V 10:00–14:00, 17:00–20:00, S 10:00–14:00, D cerrado (Maps) | ок |
| tierra-y-mar-valencia | status | open (closed: "") | Open (не закрыто) | ок |
| tierra-y-mar-valencia | website | http://www.tierraymarshop.com/ | http://www.tierraymarshop.com/ (доступен) | ок |
| tierra-y-mar-valencia | prices | нет в prices.csv | цены зоомагазинов не собираются по стандарту | ок |
| tierra-y-mar-valencia | facts / evidence | description, aquarium_fish, delivery («Envío gratuito! Transporte 0,00€») | все 3 цитаты подтверждены каталогом сайта | ок |
| tierra-y-mar-valencia | descriptions | en/es: морская аквариумистика, кораллы (SPS/LPS/blandos), рыбы, рифовое оборудование | подтверждено сайтом | ок |
| tierra-y-mar-valencia | review_insights | карточки: консультации Хорхе по морской фауне, доставка живых кораллов, жалоба на хомяка | подтверждено отзывами (Victor, taso taso, José Carlos) | ок |
| cuidadora-de-perros-patis-valencia | name | Cuidadora de Perros · Patis Valencia | Cuidadora de Perros · Patis Valencia | ок |
| cuidadora-de-perros-patis-valencia | address | Avinguda del Doctor Waksman, 60, Quatre Carreres, 46013 València, Valencia, España | Avinguda del Doctor Waksman, 60, Quatre Carreres, 46013 València, Valencia, España | ок |
| cuidadora-de-perros-patis-valencia | phone | +34 614 16 95 64 | +34 614 16 95 64 (Maps & сайт) | ок |
| cuidadora-de-perros-patis-valencia | google_rating | пусто (в notes: real on Maps is 4.9) | 4.9 (Maps) | ок (обосновано в notes) |
| cuidadora-de-perros-patis-valencia | google_rating_count | пусто (в notes: 53 reviews) | 53 (Maps) | ок (обосновано в notes) |
| cuidadora-de-perros-patis-valencia | opening_hours | пусто (в notes: site and Maps do not publish daily opening hours) | на Maps часы не указаны (прием по записи/согласованию) | ок (обосновано в notes) |
| cuidadora-de-perros-patis-valencia | status | open (closed: "") | Open (не закрыто) | ок |
| cuidadora-de-perros-patis-valencia | website | https://patis.es/ | https://patis.es/ (доступен) | ок |
| cuidadora-de-perros-patis-valencia | prices:boarding_night | 25 (qualifier: from) | «El alojamiento y la guardería empiezan desde 25€/día...» (сайт, FAQ) | ок |
| cuidadora-de-perros-patis-valencia | prices:daycare_day | 25 (qualifier: from) | «El alojamiento y la guardería empiezan desde 25€/día...» (сайт, FAQ) | ок |
| cuidadora-de-perros-patis-valencia | facts / evidence | dog_walking, home_sitting, boarding_at_sitter, photo_updates, home_visits, description, prices | все 7 цитат дословно подтверждены на сайте | ок |
| cuidadora-de-perros-patis-valencia | descriptions | en/es: домашняя передержка, дневной присмотр, визиты на дом, прогулки, фото/видео | подтверждено сайтом | ок |
| cuidadora-de-perros-patis-valencia | review_insights | карточки: чуткость Барбары, адаптация к щенкам, регулярные фото- и видеоотчеты | подтверждено отзывами (Alice H.Sung, Tiara ZVRKO) | ок |
| petluditos-vlc | name | Petluditos.VLC | Petluditos.VLC | ок |
| petluditos-vlc | address | Av. del Port, Camins al Grau, 46022 València, Valencia, España | Av. del Port, Camins al Grau, 46022 València, Valencia, España | ок |
| petluditos-vlc | phone | +34 622 35 30 04 | +34 622 35 30 04 (Maps & сайт tel:) | ок |
| petluditos-vlc | google_rating | пусто (в notes: real on Maps is 4.9) | 4.9 (Maps) | ок (обосновано в notes) |
| petluditos-vlc | google_rating_count | пусто (в notes: 104 reviews) | 104 (Maps) | ок (обосновано в notes) |
| petluditos-vlc | opening_hours | пусто (в notes: site and Maps do not publish daily opening hours) | на карточке Google Maps опубликованы часы: ежедневно 7:00–20:00 | расхождение (на Maps часы есть: ежедневно 7:00–20:00, в строке пусто) |
| petluditos-vlc | status | open (closed: "") | Open (не закрыто) | ок |
| petluditos-vlc | website | https://petluditosvlc.wixsite.com/petluditos | https://petluditosvlc.wixsite.com/petluditos (доступен) | ок |
| petluditos-vlc | prices | нет в prices.csv | индивидуальные расценки по запросу, публичного прайса нет | ок |
| petluditos-vlc | facts / evidence | dog_walking, cat_visits, home_sitting, boarding_at_sitter, medication, home_visits, description | все 7 цитат дословно подтверждены на сайте | ок |
| petluditos-vlc | descriptions | en/es: прогулки собак (30/60 мин), домашняя передержка (до 3 собак), визиты к кошкам, медикаменты | подтверждено сайтом | ок |
| petluditos-vlc | review_insights | карточки: преданность делу, прогулки, уход за кошками, медикаменты, фото/видео | подтверждено отзывами (Jose Carrasco, Elisa Barber, Ester Colecha) | ок |
| clinica-veterinaria-gullivet | name | Clínica Veterinaria Gullivet | GULLIVET \| Clínica Veterinaria en Valencia (Antes Clínica Vinaroz) | ок |
| clinica-veterinaria-gullivet | address | Avenida Baleares, C/ del Riu Escalona, 31, Bajo Entrada, 46023 València, Valencia, España | Avenida Baleares, C/ del Riu Escalona, 31, Bajo Entrada, 46023 València, Valencia, España | ок |
| clinica-veterinaria-gullivet | phone | +34 963 37 51 90 | +34 963 37 51 90 (Maps & сайт) | ок |
| clinica-veterinaria-gullivet | google_rating | 4.7 | 4.7 | ок |
| clinica-veterinaria-gullivet | google_rating_count | 123 | 123 | ок |
| clinica-veterinaria-gullivet | opening_hours | mo 10:00-19:00; tu 10:00-19:00; we 10:00-19:00; th 10:00-19:00; fr 10:00-19:00; sa closed; su closed | «De lunes a viernes: 10:00 – 19:00» (Maps & сайт /contacto/) | ок |
| clinica-veterinaria-gullivet | status | open (closed: "") | Open (не закрыто) | ок |
| clinica-veterinaria-gullivet | website | http://gullivet.com/ | http://gullivet.com/ (доступен) | ок |
| clinica-veterinaria-gullivet | prices | нет в prices.csv | на сайте только комплексные программы/пакеты, отдельных цен нет | ок |
| clinica-veterinaria-gullivet | facts / evidence | description, opening_hours, specialties: surgery, rehabilitation, laboratory, orthopedics, ultrasound | все 7 цитат дословно подтверждены на сайте | ок |
| clinica-veterinaria-gullivet | descriptions | en/es: клиника в Camins al Grau, малоинвазивная хирургия, физиотерапия, лаборатория, УЗИ/рентген | подтверждено сайтом | ок |
| clinica-veterinaria-gullivet | review_insights | карточки: профессионализм врачей, бережное отношение к кошкам и собакам, английский язык | подтверждено отзывами (Valentin Sanche, Emily Prada, AMPA) | ок |
| clinica-veterinaria-la-llum | name | Clínica Veterinaria la Llum | Clínica Veterinaria la Llum | ок |
| clinica-veterinaria-la-llum | address | Carrer de Josep Maria Bayarri, 15, L'Olivereta, 46014 València, Valencia, España | Carrer de Josep Maria Bayarri, 15, L'Olivereta, 46014 València, Valencia, España | ок |
| clinica-veterinaria-la-llum | phone | +34 963 83 74 55 | +34 963 83 74 55 (Maps & сайт) | ок |
| clinica-veterinaria-la-llum | google_rating | 4.5 | 4.5 | ок |
| clinica-veterinaria-la-llum | google_rating_count | 275 | 275 | ок |
| clinica-veterinaria-la-llum | opening_hours | mo 09:00-19:00; tu 09:00-19:00; we 09:00-19:00; th 09:00-19:00; fr 09:00-19:00; sa 09:00-14:00; su closed | «Lunes–Viernes 09:00AM–19:00PM, Sábados 09:00AM–14:00PM» (сайт); на Maps график более дробный (L/X/J 9:30-17:00, M/V 9:30-13:30, 16:30-20:00) | ок (по приоритету card-spec.md сайт > Maps) |
| clinica-veterinaria-la-llum | status | open (closed: "") | Open (не закрыто) | ок |
| clinica-veterinaria-la-llum | website | https://www.clinicaveterinarialallum.com/ | https://www.clinicaveterinarialallum.com/ (доступен) | ок |
| clinica-veterinaria-la-llum | prices | нет в prices.csv | базовый прайс не опубликован (на сайте акция по лейшманиозу) | ок |
| clinica-veterinaria-la-llum | facts / evidence | opening_hours, description («* servicio de vacunación * test serológico * collares y pipetas») | обе цитаты подтверждены на сайте | ок |
| clinica-veterinaria-la-llum | descriptions | en/es: ветклиника в L'Olivereta, общая терапия, вакцинация, тесты, защита от паразитов | подтверждено сайтом | ок |
| clinica-veterinaria-la-llum | review_insights | карточки: опыт врачей и разделение мнений, стрижка когтей пугливым животным, спасенные животные | подтверждено отзывами (Raquel Fdz, maria jesus, Jesus y Mari Sánchez Cubo) | ок |

---

## 2. Итог взаимной проверки

- **Чистых мест:** 8 из 12.
- **Расхождения по тяжести:**
  - **Тяжёлые (неверная цена / неверный телефон / неверный адрес / закрытое заведение):** 0.
    - Все 12 заведений реально существуют и открыты (статус Open на Google Maps и активных веб-ресурсах).
    - Все адреса и телефоны на 100% совпадают с живыми источниками (Google Maps и официальные сайты заведений).
    - Все опубликованные в `prices.csv` цены (6 позиций: `residencia-canina-devesa-gardens`, `cleo-cuida-peludos`, `cuidadora-de-perros-patis-valencia`) до цента подтверждены цитатами со страниц заведений.
  - **Средние / лёгкие расхождения (4 места):**
    1. `interanimals-alejandra-gomes-damaral`: на официальном сайте в разделе Contacto указано: «De Lunes a Viernes: 09:00h – 19:00h, Sábados: 10:00h – 14:00h» (на Maps также суббота рабочая: 10:00–18:00). В нашей строке в поле `opening_hours` суббота записана как `sa closed`.
    2. `peluqueria-canina-innovacan-valencia`: цитата в evidence к полю `description` (*«La estética canina combina higiene, salud y belleza para cuidar el bienestar de tu peludo, respetando las necesidades específicas de cada raza y tipo de manto.»*) не найдена дословно в текущей верстке сайта (смысл подтверждается разделами `/peluqueria/` и главной, но цитата перефразирована сборщиком).
    3. `kiwoko-arena-multiespacio-valencia`: цитата в evidence к факту `facts:raw_food` (*«Dieta BARF»*) не обнаружена в видимом тексте посадочной страницы конкретного филиала CC Arena (хотя в каталоге сети kiwoko.com раздел BARF присутствует).
    4. `petluditos-vlc`: на карточке Google Maps опубликованы часы работы (`L-D 7:00–20:00`), однако в строке поле `opening_hours` оставлено пустым, а в notes ошибочно отмечено, что Maps не публикует часы.

- **Review Insights:** проверены все 11 заведений с файлами `review-insights/*.json` (у `interanimals-alejandra-gomes-damaral` файл отсутствует). Сводки, темы и FAQ полностью соответствуют реальным свежим отзывам на Google Maps, отражая как позитивные, так и критические замечания клиентов (включая конкретные имена специалистов и детали обращений).
- **Два языка / описания:** во всех 12 заведениях английская (`short_description`, `description`) и испанская (`short_description_local`, `description_local`) версии согласованы по смыслу, фактам и формулировкам, не содержат недоказанных утверждений и опираются на реальные услуги с сайтов.
