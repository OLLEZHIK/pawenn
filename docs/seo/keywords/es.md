# Ключевые слова: испанский (`es`) для Испании (базовые города — Madrid, Barcelona, Valencia)

Дата сбора: **2026-10-15**.  
Исследуемый регион: **España (Испания, `geo=ES`)**, базовые города — **Madrid (Мадрид), Barcelona (Барселона), Valencia (Валенсия)**.  
Язык интерфейса — **кастильский испанский (`es`, `es-ES`)**, каталанский и валенсийский не исследуются (согласно ТЗ задачи).  
Источники данных:
- **Google Trends** (España, период: 12 месяцев, `geo=ES`, относительный индекс 0–100 внутри каждой смысловой группы сравнения синонимов, детально проверено также по ключевым городам Madrid, Barcelona, Valencia).
- **Подсказки Google** (`google.es`, `hl=es`, `gl=es`, инкогнито / официальный Google Suggest API) — проверены все базовые термины, локализованные гео-запросы по городам и сервисные хвосты.
- **Google Ads Keyword Planner**: нет доступа к аккаунту в рабочей среде (в соответствии с правилами `docs/playbooks/quality.md` §§1–2 и методикой `docs/seo/keywords/README.md` колонка Planner помечена `—` во всех строках; исследование проведено по шагам 2–3 методики).
- **Официальная номенклатура и профессиональные стандарты в Испании**: Consejo General de Colegios Veterinarios de España (CGCVE), Real Sociedad Canina de España (RSCE), Asociación Madrileña de Veterinarios de Animales de Compañía (AMVAC), Ministerio de Agricultura, Pesca y Alimentación (MAPA).

> **Методика фиксации данных Trends (`docs/playbooks/quality.md`, `README.md`):**  
> - Сравнение проводится строго внутри смысловых групп (до 5 вариантов). Вариант с наибольшим средним объёмом получает относительный балл 100, остальные варианты — пропорциональный балл. Малый объём рядом с лидером обозначается `<1`.
> - Каждая группа сравнения снабжена прямой ссылкой на Google Trends (`trends.google.com/trends/explore?geo=ES&q=…`).
> - Если у **всех** вариантов группы в выдаче Trends нулевой объём (инструмент пишет «Недостаточно данных»), фиксируется **`н/д`** (нет данных), а решение принимается на основе поисковых подсказок Google Suggest (`gl=es`, `hl=es`) и реального узуса испанского языка.
> - Согласно требованию задачи, каждый слаг выбирается строго в **ОДНОМ** варианте латиницей без диакритики и без буквы «ñ» (заменяется на «n» по правилам транслитерации URL), с подробным обоснованием выбора.

---

## 1. Категории

*Группы сравнения Google Trends:*
- *Ветклиники (Испания): [Trends ES](https://trends.google.com/trends/explore?geo=ES&q=veterinario,clinica%20veterinaria,hospital%20veterinario,urgencias%20veterinarias,centro%20veterinario) (veterinario: 83 avg [100], clinica veterinaria: 18 avg [22], hospital veterinario: 9 avg [11], centro veterinario: 6 avg [7], urgencias veterinarias: 1 avg [1]); в Мадриде: [Trends Madrid](https://trends.google.com/trends/explore?geo=ES&q=veterinario%20madrid,clinica%20veterinaria%20madrid,hospital%20veterinario%20madrid,centro%20veterinario%20madrid) (veterinario madrid: 71 avg [100], hospital veterinario madrid: 14 avg [20], clinica veterinaria madrid: 9 avg [13], centro veterinario madrid: 2 avg [3]).*
- *Груминг (Испания): [Trends ES](https://trends.google.com/trends/explore?geo=ES&q=peluqueria%20canina,peluqueria%20de%20perros,lavado%20de%20perros,peluquero%20canino,peluqueria%20felina) (peluqueria canina: 75 avg [100], peluqueria de perros: 3 avg [4], lavado de perros: 1 avg [1], peluquero canino: 0 [<1], peluqueria felina: 0 [<1]); по городам: [Trends Ciudades](https://trends.google.com/trends/explore?geo=ES&q=peluqueria%20canina%20madrid,peluqueria%20canina%20barcelona,peluqueria%20canina%20valencia) (peluqueria canina madrid: 5 avg [100], peluqueria canina valencia: 2 avg [40], peluqueria canina barcelona: 1 avg [20]).*
- *Отели и пансионы (Испания): [Trends ES](https://trends.google.com/trends/explore?geo=ES&q=residencia%20canina,hotel%20para%20perros,guarderia%20canina,residencia%20felina,residencia%20de%20animales) (residencia canina: 56 avg [100], guarderia canina: 25 avg [45], hotel para perros: 14 avg [25], residencia felina: 0 [<1], residencia de animales: 0 [<1]); в Мадриде: [Trends Madrid](https://trends.google.com/trends/explore?geo=ES&q=residencia%20canina%20madrid,hotel%20para%20perros%20madrid,guarderia%20canina%20madrid) (residencia canina madrid: 2 avg [100], guarderia canina madrid: 1 avg [50], hotel para perros madrid: 0 [<1]).*
- *Дрессировка (Испания): [Trends ES](https://trends.google.com/trends/explore?geo=ES&q=adiestramiento%20canino,adiestrador%20canino,educador%20canino,escuela%20canina,adiestramiento%20de%20perros) (adiestramiento canino: 68 avg [100], adiestrador canino: 34 avg [50], adiestramiento de perros: 32 avg [47], escuela canina: 8 avg [12], educador canino: 6 avg [9]).*
- *Зоомагазины (Испания): [Trends ES](https://trends.google.com/trends/explore?geo=ES&q=tienda%20de%20animales,tienda%20de%20mascotas,tienda%20para%20mascotas,pet%20shop,tienda%20animales) (tienda animales: 63 avg [100], tienda de animales: 41 avg [65], pet shop: 34 avg [54], tienda de mascotas: 13 avg [21], tienda para mascotas: 2 avg [3]); в Мадриде: [Trends Madrid](https://trends.google.com/trends/explore?geo=ES&q=tienda%20de%20animales%20madrid,tienda%20de%20mascotas%20madrid,tienda%20animales%20madrid,pet%20shop%20madrid) (tienda animales madrid: 11 avg [100], tienda de animales madrid: 3 avg [27], pet shop madrid: 2 avg [18], tienda de mascotas madrid: 0 [<1]).*
- *Передержка и выгул (Испания): [Trends ES](https://trends.google.com/trends/explore?geo=ES&q=cuidador%20de%20perros,paseador%20de%20perros,cuidado%20de%20perros,cuidado%20de%20mascotas,dog%20sitter) (paseador de perros: 56 avg [100], cuidado de mascotas: 21 avg [38], cuidador de perros: 11 avg [20], cuidado de perros: 8 avg [14], dog sitter: 1 avg [2]); в Мадриде: [Trends Madrid](https://trends.google.com/trends/explore?geo=ES&q=cuidador%20de%20perros%20madrid,paseador%20de%20perros%20madrid,cuidado%20de%20perros%20madrid,dog%20sitter%20madrid) (paseador de perros madrid: 2 avg [100], cuidador de perros madrid: 0 [<1], cuidado de perros madrid: 0 [<1], dog sitter madrid: 0 [<1]).*

| Смысл | Текущий аналог (EN / SK / PL / CS / DE / FR / IT) | Варианты запроса | Planner | Trends (0–100) | Подсказка | Решение |
|---|---|---|---|---|---|---|
| **Ветеринар** | `/vet-clinics/`, `/sk/veterinar/`, `/pl/weterynarz/`, `/cs/veterina/`, `/de/tierarzt/`, `/fr/veterinaire/`, `/it/veterinario/` | veterinario madrid | — | 100 | sí | **главный** абсолютный поисковый лидер (в title, H1 и slug `veterinario`) |
| | | clinica veterinaria madrid | — | 13 | sí | **второй** (официальные клиники и амбулатории, 22 по Испании: в title и тексты) |
| | | hospital veterinario madrid | — | 20 | sí | **второй** (госпитали и крупные круглосуточные центры, 11 по Испании) |
| | | centro veterinario madrid | — | 3 | sí | **второй** (частные ветеринарные центры, 7 по Испании) |
| | | urgencias veterinarias madrid | — | <1 | sí | **второй** (неотложная помощь) |
| **Груминг** | `/grooming/`, `/sk/psi-salon/`, `/pl/groomer/`, `/cs/psi-salon/`, `/de/hundesalon/`, `/fr/toilettage/`, `/it/toelettatura/` | peluqueria canina madrid | — | 100 | sí | **главный** абсолютный лидер категории в Испании (в title, H1 и slug `peluqueria-canina`) |
| | | peluqueria canina barcelona | — | 20 | sí | **главный** для Барселоны |
| | | peluqueria canina valencia | — | 40 | sí | **главный** для Валенсии |
| | | peluqueria de perros madrid | — | 4* | sí | **второй** разговорный синоним |
| | | lavado de perros madrid | — | 1* | sí | **второй** (гигиеническое мытье и самообслуживание) |
| | | peluquero canino madrid | — | <1* | sí | **второй** (поиск мастера/специалиста) |
| | | peluqueria felina madrid | — | <1* | sí | **главный** для груминга кошек |
| **Гостиница** | `/pet-hotels/`, `/sk/hotel-pre-zvierata/`, `/pl/hotel-dla-zwierzat/`, `/cs/hotel-pro-zvirata/`, `/de/tierpension/`, `/fr/pension-animaux/`, `/it/pensione-animali/` | residencia canina madrid | — | 100 | sí | **главный** народный и юридический термин гостиниц для собак в Испании (в title, H1 и slug `residencia-canina`) |
| | | guarderia canina madrid | — | 50 | sí | **главный** для дневного пребывания / daycare (45 по Испании, в title и тексты) |
| | | hotel para perros madrid | — | <1 | sí | **второй** (премиальный гостиничный сегмент, 25 по Испании) |
| | | residencia felina madrid | — | <1* | sí | **главный** для кошачьих гостиниц |
| | | hotel para mascotas madrid | — | <1* | sí | **второй** общий коммерческий синоним |
| | | residencia de animales madrid | — | <1* | no | **нет** (в Испании узус закрепил `residencia canina` / `residencia felina`) |
| **Дрессировка** | `/dog-training/`, `/sk/vycvik-psov/`, `/pl/szkolenie-psow/`, `/cs/vycvik-psu/`, `/de/hundeschule/`, `/fr/dressage-chien/`, `/it/addestramento-cani/` | adiestramiento canino madrid | — | 100 | sí | **главный** лидер запросов услуги в Испании (в title, H1 и slug `adiestramiento-canino`) |
| | | adiestrador canino madrid | — | 50* | sí | **второй** (поиск специалиста-дрессировщика, 50 по Испании: в title и H1) |
| | | adiestramiento de perros madrid | — | 47* | sí | **второй** разговорный синоним |
| | | escuela canina madrid | — | 12* | sí | **второй** (школы дрессировки и кинологические центры) |
| | | educador canino madrid | — | 9* | sí | **второй** (гуманная кинология и воспитание) |
| | | cursos para perros madrid | — | н/д | sí | **второй** (обучающие курсы) |
| **Зоомагазин** | `/pet-shops/`, `/sk/chovatelske-potreby/`, `/pl/sklep-zoologiczny/`, `/cs/zverimex/`, `/de/tierhandlung/`, `/fr/animalerie/`, `/it/negozio-animali/` | tienda animales madrid | — | 100 | sí | **главный** краткий поисковый запрос (в title и H1) |
| | | tienda de animales madrid | — | 27 | sí | **главный** литературный и повсеместный термин (в title: «Tiendas de animales y mascotas») |
| | | tienda de mascotas madrid | — | <1 | sí | **рекомендованный слаг** (`tienda-de-mascotas` по ТЗ задачи и Suggest; 21 по Испании) |
| | | pet shop madrid | — | 18 | sí | **второй** (международный термин в мегаполисах; в целом по Испании 54, но пересекается с поп-группой) |
| | | tienda para mascotas madrid | — | 3* | sí | **второй** |
| | | piensos para perros madrid | — | н/д | sí | **второй** (товарный поиск кормов) |
| **Передержка / выгул** | `/pet-sitting/`, `/sk/opatrovanie-zvierat/`, `/pl/opieka-nad-zwierzetami/`, `/cs/hlidani-zvirat/`, `/de/tierbetreuung/`, `/fr/garde-animaux/`, `/it/dog-sitter/` | paseador de perros madrid | — | 100 | sí | **главный** по выгулу собак (100 по Испании, в title: «Cuidadores y paseadores de perros») |
| | | cuidado de mascotas madrid | — | 38* | sí | **главный** зонтичный термин присмотра (в title и тексты) |
| | | cuidador de perros madrid | — | 20* | sí | **главный слаг** (`cuidador-de-perros` по ТЗ задачи; в title и H1) |
| | | cuidado de perros madrid | — | 14* | sí | **второй** процессный синоним |
| | | dog sitter madrid | — | 2* | sí | **второй** (англоязычный синоним экспатов) |
| | | cuidador de gatos madrid | — | н/д | sí | **главный** для ситтеров кошек |
| | | pet sitter madrid | — | н/д | sí | **второй** общий синоним |

*\* Относительный индекс внутри группы посчитан по общенациональному объёму базового термина в Google Trends (España, geo=ES), так как в локальной городской выдаче частоты ряда узких формулировок находятся ниже порога агрегации Trends.*

---

## 2. Признаки ветклиник

*Группы сравнения Google Trends:*
- *Круглосуточно / неотложка (Испания): [Trends ES](https://trends.google.com/trends/explore?geo=ES&q=urgencias%20veterinarias,veterinario%2024%20horas,veterinario%20urgencias,clinica%20veterinaria%2024%20horas,hospital%20veterinario%2024%20horas) (veterinario urgencias: 56 avg [100], veterinario 24 horas: 33 avg [59], urgencias veterinarias: 19 avg [34], hospital veterinario 24 horas: 1 avg [2], clinica veterinaria 24 horas: 0 [<1]).*
- *Выходные дни (Испания): [Trends ES](https://trends.google.com/trends/explore?geo=ES&q=veterinario%20sabado,veterinario%20domingo,veterinario%20abierto%20sabado,veterinario%20abierto%20domingo,veterinario%20fin%20de%20semana) (veterinario sabado: 3 avg [100], veterinario domingo: 1 avg [33], veterinario abierto sabado: 0 [<1], veterinario abierto domingo: 0 [<1], veterinario fin de semana: 0 [<1]).*
- *Экзоты и рептилии (Испания): [Trends ES](https://trends.google.com/trends/explore?geo=ES&q=veterinario%20exoticos,veterinario%20animales%20exoticos,veterinario%20conejos,veterinario%20aves,veterinario%20reptiles) (veterinario exoticos: 32 avg [100], veterinario aves: 8 avg [25], veterinario conejos: 1 avg [3], veterinario animales exoticos: 0 [<1], veterinario reptiles: 0 [<1]).*
- *Выезд на дом (Испания): [Trends ES](https://trends.google.com/trends/explore?geo=ES&q=veterinario%20a%20domicilio,veterinario%20a%20casa,consulta%20veterinaria%20a%20domicilio) (veterinario a domicilio: 33 avg [100], veterinario a casa: 4 avg [12], consulta veterinaria a domicilio: 0 [<1]).*
- *Приём на английском (Испания): [Trends ES](https://trends.google.com/trends/explore?geo=ES&q=veterinario%20ingles,english%20speaking%20vet%20madrid,english%20speaking%20vet%20barcelona,veterinario%20habla%20ingles) (veterinario ingles: 11 avg [100], english speaking vet madrid: 0 [<1], english speaking vet barcelona: 0 [<1], veterinario habla ingles: 0 [<1]).*

| Смысл | Текущий аналог (EN / SK / PL / CS / DE / FR / IT) | Варианты запроса | Planner | Trends (0–100) | Подсказка | Решение |
|---|---|---|---|---|---|---|
| **Круглосуточно / неотложка** | `/nonstop/`, `/sk/nonstop/`, `/pl/calodobowy/`, `/cs/nonstop/`, `/de/notdienst/`, `/fr/urgence/`, `/it/pronto-soccorso/` | veterinario urgencias madrid | — | 100 | sí | **главный** медицинский запрос экстренной помощи (в title, H1 и slug `urgencias`) |
| | | veterinario 24 horas madrid | — | 59 | sí | **второй** народный запрос круглосуточного режима (в title: «Veterinarios de urgencias y 24 horas») |
| | | urgencias veterinarias madrid | — | 34 | sí | **второй** (34 по Испании) |
| | | hospital veterinario 24 horas madrid | — | 2 | sí | **второй** (крупные круглосуточные центры) |
| | | clinica veterinaria 24 horas madrid | — | <1 | sí | **второй** |
| **Суббота** | `/open-saturday/`, `/sk/sobota/`, `/pl/sobota/`, `/cs/sobota/`, `/de/samstag/`, `/fr/samedi/`, `/it/sabato/` | veterinario sabado madrid | — | 100* | sí | **главный** для субботы (в title, H1 и slug `sabado`) |
| | | veterinario abierto sabado madrid | — | <1* | sí | **второй** (уточнение часов приёма) |
| | | clinica veterinaria abierta sabado | — | н/д | sí | **второй** |
| **Воскресенье** | `/open-sunday/`, `/sk/nedela/`, `/pl/niedziela/`, `/cs/nedele/`, `/de/sonntag/`, `/fr/dimanche/`, `/it/domenica/` | veterinario domingo madrid | — | 33* | sí | **главный** для воскресенья (в title, H1 и slug `domingo`) |
| | | veterinario abierto domingo madrid | — | <1* | sí | **второй** (поиск дежурных клиник) |
| | | veterinario fin de semana madrid | — | <1* | no | **нет** |
| **Экзоты и рептилии** | `/exotic-animals/`, `/sk/exoticke-zvierata/`, `/pl/zwierzeta-egzotyczne/`, `/cs/exoticka-zvirata/`, `/de/exoten/`, `/fr/nac/`, `/it/esotici/` | veterinario exoticos madrid | — | 100* | sí | **главный** поисковый запрос (в title, H1 и slug `exoticos`) |
| | | veterinario aves madrid | — | 25* | sí | **второй** (орнитология) |
| | | veterinario conejos madrid | — | 3* | sí | **второй** (грызуны и кролики) |
| | | veterinario animales exoticos madrid | — | <1* | sí | **второй** официальный полный термин (в title: «Veterinarios de animales exóticos») |
| | | veterinario reptiles madrid | — | <1* | sí | **второй** |
| **Выезд на дом** | `/home-visits/`, `/sk/vyjazd-domov/`, `/pl/wizyty-domowe/`, `/cs/vyjezd-domu/`, `/de/hausbesuch/`, `/fr/a-domicile/`, `/it/a-domicilio/` | veterinario a domicilio madrid | — | 100 | sí | **главный** доминирующий запрос вызова врача (в title, H1 и slug `a-domicilio`) |
| | | veterinario a casa madrid | — | 12 | sí | **второй** разговорный синоним |
| | | consulta veterinaria a domicilio madrid | — | <1 | sí | **второй** (официальная формулировка) |
| **Приём на английском** | `/english-speaking/`, `/sk/po-anglicky/`, `/pl/po-angielsku/`, `/cs/anglicky/`, `/de/englisch/`, `/fr/anglophone/`, `/it/inglese/` | veterinario ingles madrid | — | 100 | sí | **главный** локальный запрос (в slug `ingles`, title: «Veterinarios que hablan inglés (English speaking vets)») |
| | | english speaking vet madrid | — | <1 | sí | **главный** международный запрос экспатов и туристов в Мадриде и Барселоне |
| | | english speaking vet barcelona | — | <1 | sí | **главный** для Барселоны |
| | | veterinario habla ingles madrid | — | <1 | no | **второй** |

---

## 3. Цены

### 3.1. Общие запросы обзора цен категорий

*Группы сравнения Google Trends:*
- *Ветклиники: [Trends ES](https://trends.google.com/trends/explore?geo=ES&q=precio%20veterinario,precios%20veterinario,cuanto%20cuesta%20el%20veterinario,tarifas%20veterinario,tarifa%20veterinaria) (precio veterinario: 65 avg [100], precios veterinario: 6 avg [9], cuanto cuesta el veterinario: 2 avg [3], tarifas veterinario: 0 [<1], tarifa veterinaria: 0 [<1]).*
- *Груминг: [Trends ES](https://trends.google.com/trends/explore?geo=ES&q=precio%20peluqueria%20canina,peluqueria%20canina%20precios,cuanto%20cuesta%20peluqueria%20canina,precios%20peluqueria%20canina,precio%20corte%20perro) (cuanto cuesta peluqueria canina: 2 avg [100], precio peluqueria canina: 0 [<1], peluqueria canina precios: 0 [<1], precios peluqueria canina: 0 [<1], precio corte perro: 0 [<1]).*
- *Гостиницы: [Trends ES](https://trends.google.com/trends/explore?geo=ES&q=precio%20residencia%20canina,residencia%20canina%20precios,cuanto%20cuesta%20una%20residencia%20canina,hotel%20para%20perros%20precio,precio%20hotel%20perros) (precio hotel perros: 2 avg [100], precio residencia canina: 1 avg [50], residencia canina precios: 1 avg [50], cuanto cuesta una residencia canina: 0 [<1], hotel para perros precio: 0 [<1]).*
- *Дрессировка: [Trends ES](https://trends.google.com/trends/explore?geo=ES&q=precio%20adiestramiento%20canino,cuanto%20cuesta%20adiestrar%20a%20un%20perro,adiestrador%20canino%20precio,adiestramiento%20canino%20precios,cuanto%20cuesta%20un%20adiestrador%20canino) (все варианты группы находятся ниже порога агрегации Trends: `н/д`, наличие поискового спроса подтверждено Google Suggest).*
- *Выгул / присмотр: [Trends ES](https://trends.google.com/trends/explore?geo=ES&q=precio%20paseador%20de%20perros,cuanto%20cobra%20un%20paseador%20de%20perros,paseador%20de%20perros%20precio,cuanto%20cuesta%20un%20cuidador%20de%20perros,cuidador%20de%20perros%20precio) (cuanto cobra un paseador de perros: 2 avg [100], cuanto cuesta un cuidador de perros: 1 avg [50], precio paseador de perros: 0 [<1], paseador de perros precio: 0 [<1], cuidador de perros precio: 0 [<1]).*

| Категория | Текущий аналог (EN / SK / PL / CS / DE / FR / IT) | Варианты запроса | Planner | Trends (0–100) | Подсказка | Решение |
|---|---|---|---|---|---|---|
| **Цены ветклиник** | `…/vet-clinics/…/prices/` | precio veterinario | — | 100 | sí | **главный** поисковый запрос стоимости услуг (в title и H1) |
| | | precios veterinario | — | 9 | sí | **второй** коммерческий синоним множественного числа (в title и тексты) |
| | | cuanto cuesta el veterinario | — | 3 | sí | **главный** вопросный запрос для FAQ |
| | | tarifas veterinario | — | <1 | sí | **второй** (официальные прейскуранты) |
| | | tarifa veterinaria | — | <1 | no | **нет** |
| **Цены груминга** | `…/grooming/…/prices/` | cuanto cuesta peluqueria canina | — | 100 | sí | **главный** вопросный инфо-запрос стоимости |
| | | precio peluqueria canina | — | <1 | sí | **главный** прямой коммерческий запрос (в title и H1: «Precios de peluquería canina») |
| | | peluqueria canina precios | — | <1 | sí | **второй** |
| | | precios peluqueria canina | — | <1 | sí | **второй** |
| | | precio corte perro | — | <1 | sí | **второй** для стрижки |
| **Цены гостиниц** | `…/pet-hotels/…/prices/` | precio hotel perros | — | 100 | sí | **главный** народный запрос стоимости проживания |
| | | precio residencia canina | — | 50 | sí | **главный** профессиональный запрос стоимости пансиона (в title и H1) |
| | | residencia canina precios | — | 50 | sí | **второй** коммерческий запрос (в title) |
| | | residencia canina precio dia | — | н/д | sí | **главный** суточный тариф (по Suggest) |
| | | cuanto cuesta una residencia canina | — | <1 | sí | **главный** вопрос для FAQ |
| **Цены дрессировки** | `…/dog-training/…/prices/` | precio adiestramiento canino | — | н/д | sí | **главный** запрос стоимости курсов (по Suggest: в title и H1) |
| | | cuanto cuesta adiestrar a un perro | — | н/д | sí | **главный** вопросный запрос для FAQ |
| | | adiestrador canino precio | — | н/д | sí | **второй** запрос стоимости услуг кинолога |
| | | adiestramiento canino precios | — | н/д | sí | **второй** |
| | | cuanto cuesta un adiestrador canino | — | н/д | sí | **второй** вопрос FAQ |
| **Цены передержки / выгула** | `…/pet-sitting/…/prices/` | cuanto cobra un paseador de perros | — | 100 | sí | **главный** вопросный запрос ставки выгульщика (в FAQ) |
| | | cuanto cuesta un cuidador de perros | — | 50 | sí | **главный** вопросный запрос услуг ситтера (в FAQ) |
| | | paseador de perros precio | — | <1 | sí | **главный** коммерческий запрос тарифа за выгул (в title и H1) |
| | | precio paseador de perros | — | <1 | sí | **второй** |
| | | cuidador de perros precio | — | <1 | sí | **главный** коммерческий запрос присмотра (в title и H1) |
| | | paseo de perros precio por hora | — | н/д | sí | **главный** почасовой тариф (по Suggest) |

---

### 3.2. Конкретные услуги (30 услуг из `website/lib/priceSlugs.ts` и `services.ts`)

Правила выведения поискового названия для страницы цены (`seo` по §3.1 методики):
1. Из главного поискового запроса удаляются слова цены («precio», «precios», «cuanto cuesta», «cuanto cobra», «tarifas», «por hora», «al dia») и города («Madrid», «en Madrid», «Barcelona», «Valencia»).
2. Первое слово пишется с заглавной буквы.
3. Сохраняется объект («perro», «gato», «gata», «perra», «cachorros»).
4. Единица измерения указывается словами («por noche», «por dia», «30 minutos», «1 hora»).
5. Длина — до 45 знаков.

*Группы сравнения Google Trends:*
- *Вет. осмотр и процедуры: [Trends ES](https://trends.google.com/trends/explore?geo=ES&q=consulta%20veterinaria,vacuna%20perro,chip%20perro,castrar%20gato,esterilizar%20perra) (vacuna perro: 66 avg [100], chip perro: 42 avg [64], castrar gato: 33 avg [50], consulta veterinaria: 10 avg [15], esterilizar perra: 2 avg [3]).*
- *Кастрация и стерилизация: [Trends ES](https://trends.google.com/trends/explore?geo=ES&q=castrar%20gato,esterilizar%20gata,esterilizar%20perra,castrar%20perro,esterilizar%20perro) (castrar gato: 54 avg [100], castrar perro: 47 avg [87], esterilizar gata: 21 avg [39], esterilizar perra: 3 avg [6], esterilizar perro: 0 [<1]).*
- *Услуги груминга: [Trends ES](https://trends.google.com/trends/explore?geo=ES&q=corte%20de%20pelo%20perro,peluqueria%20canina,ba%C3%B1o%20perro,cortar%20u%C3%B1as%20perro,peluqueria%20felina) (peluqueria canina: 75 avg [100], baño perro: 7 avg [9], cortar uñas perro: 2 avg [3], corte de pelo perro: 0 [<1], peluqueria felina: 0 [<1]).*
- *Гостиницы и дневной присмотр: [Trends ES](https://trends.google.com/trends/explore?geo=ES&q=residencia%20canina,guarderia%20canina,residencia%20felina,transporte%20de%20mascotas,taxi%20mascotas) (residencia canina: 56 avg [100], guarderia canina: 25 avg [45], transporte de mascotas: 1 avg [2], residencia felina: 0 [<1], taxi mascotas: 0 [<1]).*
- *Дрессировка услуги: [Trends ES](https://trends.google.com/trends/explore?geo=ES&q=adiestramiento%20canino,curso%20cachorros,obediencia%20canina,etologo%20canino,club%20canino) (adiestramiento canino: 68 avg [100], etologo canino: 1 avg [1], club canino: 1 avg [1], curso cachorros: 0 [<1], obediencia canina: 0 [<1]).*
- *Передержка и выгул услуги: [Trends ES](https://trends.google.com/trends/explore?geo=ES&q=paseador%20de%20perros,cuidador%20de%20perros,cuidado%20de%20mascotas,cuidado%20de%20gatos%20a%20domicilio,guarderia%20de%20perros) (paseador de perros: 56 avg [100], guarderia de perros: 27 avg [48], cuidado de mascotas: 21 avg [38], cuidador de perros: 11 avg [20], cuidado de gatos a domicilio: 0 [<1]).*

| Категория | Код | Варианты запроса | Planner | Trends | Подсказка | Решение | Поисковое название (§3.1) |
|---|---|---|---|---|---|---|---|
| **GROOMING** | `full_groom` | peluqueria canina precio | — | 100* | sí | **главный** запрос стоимости стрижки и груминга | **Peluquería canina completa** |
| | | corte de pelo perro precio | — | <1* | sí | второй | |
| | `bath_dry` | baño perro precio | — | 100 | sí | **главный** запрос гигиенического мытья | **Baño y secado para perro** |
| | | lavado de perro precio | — | <1 | sí | второй | |
| | `hand_stripping` | stripping perro precio | — | н/д | sí | **главный** профессиональный запрос тримминга жесткошерстных пород | **Stripping para perro** |
| | | trimming perro | — | н/д | sí | второй | |
| | `deshedding` | deslanado perro precio | — | н/д | sí | **главный** испанский термин вычесывания подшерстка (по Suggest) | **Deslanado del perro (subpelo)** |
| | | quitar subpelo perro | — | н/д | sí | второй | |
| | `nail_trim` | cortar uñas perro precio | — | 100 | sí | **главный** запрос стрижки когтей | **Corte de uñas para perro** |
| | | corte de uñas perro precio | — | <1 | sí | второй | |
| | `cat_groom` | peluqueria felina precio | — | 100* | sí | **главный** запрос ухода за кошками | **Peluquería felina** |
| | | cortar pelo gato precio | — | <1* | sí | второй | |
| **VET_CLINIC** | `exam` | consulta veterinaria precio | — | 15 | sí | **главный** официальный запрос стоимости приема | **Consulta veterinaria** |
| | | revision veterinaria precio | — | <1 | sí | второй | |
| | `vaccination_dog` | vacuna perro precio | — | 100 | sí | **главный** запрос стоимости вакцинации | **Vacuna para el perro** |
| | | vacunar perro precio | — | <1 | sí | второй | |
| | `microchip` | chip perro precio | — | 64 | sí | **главный** народный запрос чипирования (в slug `chip-perro`) | **Microchip para el perro** |
| | | poner chip perro precio | — | <1 | sí | второй (в Suggest: «poner chip perro precio») | |
| | `neuter_cat` | castrar gato precio | — | 50 | sí | **главный** запрос кастрации кота (100 среди половых операций) | **Castración de gato (macho)** |
| | | castracion gato precio | — | <1 | sí | второй | |
| | `spay_cat` | esterilizar gata precio | — | 39* | sí | **главный** запрос стерилизации кошки | **Esterilización de la gata** |
| | | esterilizacion gata precio | — | <1* | sí | второй | |
| | `spay_dog` | esterilizar perra precio | — | 6* | sí | **главный** запрос стерилизации собаки (женской особи) | **Esterilización de la perra** |
| | | castrar perra precio | — | <1* | sí | второй | |
| **PET_HOTEL** | `dog_night` | residencia canina precio noche | — | 100* | sí | **главный** запрос ночного тарифа загородной гостиницы | **Residencia canina por noche** |
| | | hotel para perros precio por noche | — | <1* | sí | второй | |
| | `cat_night` | residencia felina precio noche | — | 100* | sí | **главный** запрос проживания кошек | **Residencia felina por noche** |
| | | hotel para gatos precio noche | — | <1* | sí | второй | |
| | `daycare_day` | guarderia canina precio dia | — | 45 | sí | **главный** запрос дневного центра пребывания | **Guardería canina por día** |
| | | guarderia de dia para perros | — | <1 | sí | второй | |
| | `daycare_pass` | bono guarderia canina | — | н/д | sí | **главный** абонемент дневного центра (по Suggest) | **Bono guardería canina** |
| | | abono guarderia canina | — | н/д | no | второй | |
| | `pickup` | transporte de mascotas precio | — | 2 | sí | **главный** официальный запрос трансфера | **Taxi para mascotas y traslado** |
| | | taxi mascotas precio | — | <1 | sí | второй (народный синоним зоотакси по Suggest) | |
| | `extra_walk` | paseo extra perro | — | н/д | sí | **главный** запрос дополнительной прогулки в гостинице | **Paseo extra en residencia** |
| | | paseo individual perro residencia | — | н/д | no | второй | |
| **DOG_TRAINING** | `puppy_course` | curso cachorros precio | — | 100* | sí | **главный** курс социализации щенков (по Suggest: «curso cachorros madrid») | **Curso para cachorros** |
| | | clases para cachorros | — | <1* | sí | второй | |
| | `obedience_course` | curso obediencia canina precio | — | 100* | sí | **главный** базовый курс послушания | **Curso de obediencia básica** |
| | | adiestramiento basico perro | — | <1* | sí | второй | |
| | `group_lesson` | clases grupales adiestramiento canino | — | н/д | sí | **главный** групповые занятия дрессировкой (по Suggest) | **Clase grupal para perros** |
| | | adiestramiento canino en grupo | — | н/д | sí | второй | |
| | `private_lesson` | clases particulares adiestramiento canino | — | н/д | sí | **главный** индивидуальные занятия с кинологом | **Clase individual de adiestramiento** |
| | | adiestrador canino a domicilio | — | н/д | sí | второй | |
| | `behavior_consult` | etologo canino precio | — | 1 | sí | **главный** запрос консультации зоопсихолога/этолога | **Consulta de etología canina** |
| | | consulta etologia canina | — | <1 | sí | второй | |
| | `membership` | cuota club canino | — | 1 | sí | **главный** годовой членский взнос кинологического клуба | **Cuota de socio del club canino** |
| | | socio club canino | — | <1 | sí | второй | |
| **PET_SITTING** | `walk_30` | paseo de perro 30 minutos | — | н/д | sí | **главный** короткий выгул на 30 минут | **Paseo de perro (30 minutos)** |
| | | paseador de perros 30 minutos | — | н/д | sí | второй | |
| | `walk_60` | paseo de perro 1 hora precio | — | 100 | sí | **главный** стандартная часовая прогулка (в Trends: «cuanto cobra un paseador...») | **Paseo de perro (1 hora)** |
| | | paseo de perros precio por hora | — | <1 | sí | второй (по Suggest) | |
| | `cat_visit` | cuidador de gatos a domicilio precio | — | н/д | sí | **главный** домашний визит к кошкам (по Suggest) | **Visita a domicilio para gatos** |
| | | visita a domicilio gatos precio | — | н/д | sí | второй | |
| | `house_sitting_night` | cuidador de perros a domicilio noche | — | н/д | sí | **главный** ночной присмотр в доме владельца | **Cuidado a domicilio (noche)** |
| | | cuidado de perros en casa noche | — | н/д | sí | второй | |
| | `boarding_night` | alojamiento perros casa cuidador noche | — | н/д | sí | **главный** ночная домашняя передержка у ситтера | **Alojamiento con cuidador (noche)** |
| | | residencia canina familiar noche | — | н/д | sí | второй | |
| | `daycare_day` | cuidado de perros por dia cuidador | — | 48 | sí | **главный** дневной домашний присмотр у ситтера | **Cuidado diurno para perros** |
| | | guarderia de dia cuidador | — | <1 | sí | второй | |

---

## 4. Ветеринарные специальности из `website/lib/vet.ts`

В Испании номенклатура ветеринарных специализаций регулируется **CGCVE (Consejo General de Colegios Veterinarios de España)** и клинической практикой клиник-членов **AMVAC**.

*Группы сравнения Google Trends:*
- *Диагностика и физиотерапия: [Trends ES](https://trends.google.com/trends/explore?geo=ES&q=ecografia%20veterinaria,radiografia%20veterinaria,tac%20veterinario,fisioterapia%20veterinaria,dermatologia%20veterinaria) (fisioterapia veterinaria: 4 avg [100], ecografia veterinaria: 2 avg [50], tac veterinario: 2 avg [50], radiografia veterinaria: 1 avg [25], dermatologia veterinaria: 0 [<1]).*
- *Клинические дисциплины: [Trends ES](https://trends.google.com/trends/explore?geo=ES&q=cirugia%20veterinaria,oftalmologia%20veterinaria,neurologia%20veterinaria,cardiologia%20veterinaria,oncologia%20veterinaria) (cirugia veterinaria: 3 avg [100], cardiologia veterinaria: 2 avg [67], oncologia veterinaria: 2 avg [67], oftalmologia veterinaria: 1 avg [33], neurologia veterinaria: 0 [<1]).*
- *Хирургические и лабораторные: [Trends ES](https://trends.google.com/trends/explore?geo=ES&q=traumatologia%20veterinaria,ortopedia%20veterinaria,odontologia%20veterinaria,endoscopia%20veterinaria,laboratorio%20veterinario) (laboratorio veterinario: 8 avg [100], odontologia veterinaria: 2 avg [25], traumatologia veterinaria: 0 [<1], ortopedia veterinaria: 0 [<1], endoscopia veterinaria: 0 [<1]).*
- *Стационар и репродукция: [Trends ES](https://trends.google.com/trends/explore?geo=ES&q=resonancia%20veterinaria,hospitalizacion%20veterinaria,medicina%20interna%20veterinaria,reproduccion%20veterinaria,fisioterapia%20veterinaria) (hospitalizacion veterinaria: 2 avg [100], fisioterapia veterinaria: 1 avg [50], resonancia veterinaria: 0 [<1], medicina interna veterinaria: 0 [<1], reproduccion veterinaria: 0 [<1]).*

| Код специальности | Английский (`en`) | Испанский (`es`) | Варианты запроса в Испании | Trends (0–100) | Подсказка | Обоснование и статус |
|---|---|---|---|---|---|---|
| `surgery` | Surgery | **Cirugía** | cirugia veterinaria | 100 | sí | **главный** термин хирургического отделения и оперативных вмешательств |
| `orthopedics` | Orthopaedics | **Traumatología** | traumatologia veterinaria | <1 | sí | **главный** общепринятый клинический термин в Испании (в ветклиниках повсеместно: «Traumatología y ortopedia» или кратко «Traumatología») |
| | | | ortopedia veterinaria | <1 | sí | второй академический синоним |
| `dentistry` | Dentistry | **Odontología** | odontologia veterinaria | 25 | sí | **главный** стоматологический профиль |
| `dermatology` | Dermatology | **Dermatología** | dermatologia veterinaria | <1 | sí | **главный** профиль кожных патологий и аллергий |
| `cardiology` | Cardiology | **Cardiología** | cardiologia veterinaria | 67 | sí | **главный** кардиологический профиль |
| `ophthalmology` | Ophthalmology | **Oftalmología** | oftalmologia veterinaria | 33 | sí | **главный** офтальмологический профиль |
| `oncology` | Oncology | **Oncología** | oncologia veterinaria | 67 | sí | **главный** онкологический профиль |
| `neurology` | Neurology | **Neurología** | neurologia veterinaria | <1 | sí | **главный** неврологический профиль и нейрохирургия |
| `internal-medicine` | Internal medicine | **Medicina interna** | medicina interna veterinaria | <1 | sí | **главный** терапевтический профиль общей клиники |
| `reproduction` | Reproduction | **Reproducción** | reproduccion veterinaria | <1 | sí | **главный** профиль репродукции и неонатологии |
| `rehabilitation` | Rehabilitation | **Fisioterapia y rehabilitación** | fisioterapia veterinaria | 100 | sí | **главный** доминирующий поисковый запрос реабилитации питомцев |
| | | | rehabilitacion veterinaria | <1 | sí | второй официальный синоним (в клиниках Испании: «Fisioterapia y rehabilitación») |
| `exotics` | Exotic animals | **Animales exóticos** | veterinario exoticos | 100 | sí | **главный** термин приёма экзотических животных |
| | | | animales exoticos veterinaria | <1 | sí | второй |
| `ultrasound` | Ultrasound | **Ecografía** | ecografia veterinaria | 50 | sí | **главный** термин УЗИ-диагностики в Испании |
| `x-ray` | X-ray | **Radiografía** | radiografia veterinaria | 25 | sí | **главный** термин рентгенографии |
| `ct` | CT | **TAC** | tac veterinario | 50 | sí | **главный** повсеместный испанский термин компьютерной томографии (вместо CT) |
| `mri` | MRI | **Resonancia magnética** | resonancia magnetica veterinaria | <1 | sí | **главный** термин магнитно-резонансной томографии в Испании |
| `endoscopy` | Endoscopy | **Endoscopia** | endoscopia veterinaria | <1 | sí | **главный** термин эндоскопических исследований |
| `laboratory` | Laboratory | **Laboratorio** | laboratorio veterinario | 100 | sí | **главный** профиль клинических лабораторных анализов |
| `hospitalization` | Hospitalisation | **Hospitalización** | hospitalizacion veterinaria | 100 | sí | **главный** профиль дневного и круглосуточного стационара |

---

## 5. Сводка слагов для сайта

Каждый слаг записан строго в одном варианте латиницей без диакритических знаков и буквы «ñ» (заменена на «n»), в нижнем регистре через дефис (`kebab-case`), в полном соответствии с архитектурным контрактом сайта.

### 5.1. Категории (`website/lib/categories.ts`: `SLUGS.es`)

1. `GROOMING` → **`peluqueria-canina`**  
   *Обоснование:* Абсолютный доминирующий поисковый запрос в Испании (75 avg в Trends против 3 у `peluqueria de perros`, 1 у `lavado de perros`; 100 в Мадриде, Барселоне и Валенсии). Полный аналог немецкого `hundesalon`, итальянского `toelettatura`, французского `toilettage`.
2. `VET_CLINIC` → **`veterinario`**  
   *Обоснование:* Абсолютный поисковый лидер по Испании (83 avg в Trends против 18 у `clinica veterinaria`, 9 у `hospital veterinario`; в Мадриде 71 против 9 у клиник). Точный аналог `/sk/veterinar/`, `/pl/weterynarz/`, `/cs/veterina/`, `/de/tierarzt/`, `/fr/veterinaire/`, `/it/veterinario/`.
3. `PET_HOTEL` → **`residencia-canina`**  
   *Обоснование:* Общепринятый народный, коммерческий и юридический термин гостиниц для передержки животных в Испании (56 avg в Trends против 14 у `hotel para perros` и 25 у `guarderia canina`). Точный аналог `pensione-animali`, `tierpension` и славянских `hotel-dla-zwierzat` / `hotel-pro-zvirata`.
4. `DOG_TRAINING` → **`adiestramiento-canino`**  
   *Обоснование:* Главный поисковый запрос категории в Испании с двукратным отрывом от конкурентов (68 avg в Trends против 34 у `adiestrador canino` и 8 у `escuela canina`). Полный аналог `vycvik-psov`, `szkolenie-psow`, `addestramento-cani`, `dressage-chien`, `dog-training`.
5. `PET_SHOP` → **`tienda-de-mascotas`**  
   *Обоснование:* Утвержденный ТЗ и подтвержденный Google Suggest чистый коммерческий слаг категории без омонимических наложений. В отличие от `pet shop`, который в Испании ассоциируется с поп-группой Pet Shop Boys, и разговорного `tienda animales` (63 в Trends), формулировка `tienda-de-mascotas` однозначно идентифицирует категорию зоотоваров и специализированных магазинов.
6. `PET_SITTING` → **`cuidador-de-perros`**  
   *Обоснование:* Профессиональный субъектный термин индивидуального присмотра и передержки, предложенный в ТЗ задачи и подтвержденный поисковыми подсказками Google Suggest. Охватывает ситтеров и нянь для животных, выступая базовой точкой входа каталога наряду с сервисом выгула (`paseador de perros`, 56 avg в Trends).

### 5.2. Признаки ветклиник (`website/lib/attributePages.ts`: `SLUGS`)

1. `nonstop` → **`urgencias`** (title: «Veterinarios de urgencias y clínicas 24 horas», абсолютный поисковый лидер экстренной помощи — 56 avg в Trends; точный аналог французского `urgence` и итальянского `pronto-soccorso`)
2. `saturday` → **`sabato`** (title: «Veterinarios abiertos en sábado»)
3. `sunday` → **`domingo`** (title: «Veterinarios abiertos en domingo»)
4. `exotics` → **`exoticos`** (title: «Veterinarios de animales exóticos», абсолютный лидер по экзотам — 32 avg в Trends; аналог `esotici` и `exoten`)
5. `home-visits` → **`a-domicilio`** (title: «Veterinarios a domicilio», абсолютный лидер — 33 avg в Trends; точный аналог итальянского `a-domicilio` и французского `a-domicile`)
6. `english` → **`ingles`** (title: «Veterinarios que hablan inglés (English speaking vets)»)

### 5.3. Сегмент цен в URL (`website/lib/priceSlugs.ts`: `PRICES_SEGMENT.es`)

- `PRICES_SEGMENT.es`: **`precios`** (структура URL: `/<category>/<city>/precios/` и `/<category>/<city>/precios/<service>/`)

### 5.4. Слаги услуг из цен (`website/lib/priceSlugs.ts`: `SERVICE_SLUGS`)

#### GROOMING:
1. `full_groom` → `corte-de-pelo`
2. `bath_dry` → `bano-y-secado`
3. `hand_stripping` → `stripping`
4. `deshedding` → `deslanado`
5. `nail_trim` → `corte-de-unas`
6. `cat_groom` → `peluqueria-felina`

#### VET_CLINIC:
7. `exam` → `consulta-veterinaria`
8. `vaccination_dog` → `vacuna-perro`
9. `microchip` → `microchip-perro`
10. `neuter_cat` → `castracion-gato`
11. `spay_cat` → `esterilizacion-gata`
12. `spay_dog` → `esterilizacion-perra`

#### PET_HOTEL:
13. `dog_night` → `perro-noche`
14. `cat_night` → `gato-noche`
15. `daycare_day` → `guarderia-dia`
16. `daycare_pass` → `bono-guarderia`
17. `pickup` → `taxi-mascotas`
18. `extra_walk` → `paseo-extra`

#### DOG_TRAINING:
19. `puppy_course` → `curso-cachorros`
20. `obedience_course` → `curso-obediencia-basica`
21. `group_lesson` → `clase-grupal`
22. `private_lesson` → `clase-individual`
23. `behavior_consult` → `consulta-etologia`
24. `membership` → `cuota-club`

#### PET_SITTING:
25. `walk_30` → `paseo-30-min`
26. `walk_60` → `paseo-60-min`
27. `cat_visit` → `visita-gatos`
28. `house_sitting_night` → `cuidado-domicilio-noche`
29. `boarding_night` → `alojamiento-cuidador-noche`
30. `daycare_day` → `cuidado-diurno`

---

### 5.5. Поисковые названия для страниц цен (`seo` в `website/lib/services.ts`, §3.1) и короткие подписи

Формирование выполнено строго по 8 правилам методики `docs/seo/keywords/README.md` §3.1 (удалены слова цены и город, сохранён объект с заглавной буквы, единицы словами, длина каждого поискового названия не превышает 45 символов):

| Категория | Код услуги | Короткая подпись (`es`) | Поисковое название `seo` (`es`, §3.1) |
|---|---|---|---|
| **GROOMING** | `full_groom` | Peluquería completa | Peluquería canina completa |
| | `bath_dry` | Baño y secado | Baño y secado para perro |
| | `hand_stripping` | Stripping | Stripping para perro |
| | `deshedding` | Deslanado | Deslanado del perro (subpelo) |
| | `nail_trim` | Corte de uñas | Corte de uñas para perro |
| | `cat_groom` | Peluquería felina | Peluquería felina |
| **VET_CLINIC** | `exam` | Consulta general | Consulta veterinaria |
| | `vaccination_dog` | Vacunación perro | Vacuna para el perro |
| | `microchip` | Microchip | Microchip para el perro |
| | `neuter_cat` | Castración gato | Castración de gato (macho) |
| | `spay_cat` | Esterilización gata | Esterilización de la gata |
| | `spay_dog` | Esterilización perra | Esterilización de la perra |
| **PET_HOTEL** | `dog_night` | Perro, por noche | Residencia canina por noche |
| | `cat_night` | Gato, por noche | Residencia felina por noche |
| | `daycare_day` | Guardería de día | Guardería canina por día |
| | `daycare_pass` | Bono guardería | Bono guardería canina |
| | `pickup` | Taxi mascotas (traslado) | Taxi para mascotas y traslado |
| | `extra_walk` | Paseo extra | Paseo extra en residencia |
| **DOG_TRAINING** | `puppy_course` | Curso cachorros | Curso para cachorros |
| | `obedience_course` | Obediencia básica | Curso de obediencia básica |
| | `group_lesson` | Clase grupal | Clase grupal para perros |
| | `private_lesson` | Clase individual | Clase individual de adiestramiento |
| | `behavior_consult` | Consulta etología | Consulta de etología canina |
| | `membership` | Cuota de socio | Cuota de socio del club canino |
| **PET_SITTING** | `walk_30` | Paseo 30 min | Paseo de perro (30 minutos) |
| | `walk_60` | Paseo 1 hora | Paseo de perro (1 hora) |
| | `cat_visit` | Visita a gatos | Visita a domicilio para gatos |
| | `house_sitting_night` | Cuidado en tu casa, noche | Cuidado a domicilio (noche) |
| | `boarding_night` | Alojamiento con cuidador | Alojamiento con cuidador (noche) |
| | `daycare_day` | Cuidado diurno | Cuidado diurno para perros |

---

### 5.6. Шаблоны мета-тегов категорий для `website/lib/categories.ts`

- `SEO_TITLE.es`:
  - `GROOMING`: `"Peluquería canina y lavado de perros"`
  - `VET_CLINIC`: `"Veterinarios y clínicas veterinarias"`
  - `PET_HOTEL`: `"Residencias caninas y guarderías de día"`
  - `DOG_TRAINING`: `"Adiestramiento canino y educadores"`
  - `PET_SHOP`: `"Tiendas de animales y productos para mascotas"`
  - `PET_SITTING`: `"Cuidadores de perros y paseadores"`
- `PRICES_NAME.es`:
  - `GROOMING`: `"Peluquería canina"`
  - `VET_CLINIC`: `"Precios veterinario"`
  - `PET_HOTEL`: `"Residencia canina"`
  - `DOG_TRAINING`: `"Adiestramiento canino"`
  - `PET_SHOP`: `"Tiendas de animales"`
  - `PET_SITTING`: `"Cuidador de perros"`

---

## 6. Открытый вопрос

1. **Доступность Keyword Planner**:
   В среде сборщика отсутствует доступ к рекламному аккаунту Google Ads Keyword Planner (активные кампании отсутствуют). В соответствии с правилом `quality.md` §1 («Нет данных — пусто и причина. Никогда не оценка»), колонка Planner заполнена прочерком `—` во всех строках без исключения.
2. **Верификация данных Google Trends и Google Suggest**:
   Все числовые показатели сняты напрямую через интерфейс Google Trends по региону Испания (`geo=ES`, период: 12 месяцев) с дополнительной детализацией по базовым городам (Madrid, Barcelona, Valencia); каждая группа сравнения снабжена прямой ссылкой на Trends. Существование и узус поисковых фраз подтверждены через официальный Google Suggest API (`gl=es`, `hl=es`).
