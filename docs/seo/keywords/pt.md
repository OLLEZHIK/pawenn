# Ключевые слова: португальский (`pt`) для Португалии (базовые города — Lisboa и Porto, pt-PT)

Дата сбора: **2026-10-17**.  
Исследуемый регион: **Portugal (Португалия, `geo=PT`)**, базовые города — **Lisboa (Лиссабон), Porto (Порту)**.  
Язык интерфейса — **европейский португальский (`pt`, `pt-PT`)**, бразильский португальский (pt-BR) исключён в соответствии с правилами узуса Португалии.  
Источники данных:
- **Google Trends** (Portugal, период: 12 месяцев, `geo=PT`, относительный индекс 0–100 внутри каждой смысловой группы сравнения синонимов, детально проверено также по ключевым городам Lisboa и Porto).
- **Подсказки Google** (`google.pt`, `hl=pt-PT`, `gl=pt`, официальный Google Suggest API) — проверены все базовые термины, локализованные гео-запросы по Лиссабону и Порту, а также сервисные хвосты.
- **Google Ads Keyword Planner**: нет доступа к аккаунту в рабочей среде (в соответствии с правилами `docs/playbooks/quality.md` §§1–2 и методикой `docs/seo/keywords/README.md` колонка Planner помечена `—` во всех строках; исследование проведено по шагам 2–3 методики).
- **Официальная номенклатура и профессиональные стандарты в Португалии**: Ordem dos Médicos Veterinários (OMV), Clube Português de Canicultura (CPC), Direção-Geral de Alimentação e Veterinária (DGAV), Instituto da Conservação da Natureza e das Florestas (ICNF).

> **Методика фиксации данных Trends (`docs/playbooks/quality.md`, `README.md`):**  
> - Сравнение проводится строго внутри смысловых групп (до 5 вариантов). Вариант с наибольшим средним объёмом получает относительный балл 100, остальные варианты — пропорциональный балл. Малый объём рядом с лидером обозначается `<1`.
> - Каждая группа сравнения снабжена прямой ссылкой на Google Trends (`trends.google.com/trends/explore?geo=PT&q=…`).
> - Если у **всех** вариантов группы в выдаче Trends нулевой объём (инструмент пишет «Недостаточно данных»), фиксируется **`н/д`** (нет данных), а решение принимается на основе поисковых подсказок Google Suggest (`gl=pt`, `hl=pt-PT`) и реального узуса европейского португальского языка.
> - Согласно требованию задачи, каждый слаг выбирается строго в **ОДНОМ** варианте латиницей без диакритики, в нижнем регистре через дефис, с подробным обоснованием выбора.

---

## 1. Категории

*Группы сравнения Google Trends:*
- *Ветклиники (Португалия): [Trends PT](https://trends.google.com/trends/explore?geo=PT&q=veterinario,clinica%20veterinaria,hospital%20veterinario,centro%20veterinario,urgencias%20veterinarias) (veterinario: 83 avg [100], clinica veterinaria: 32 avg [39], hospital veterinario: 22 avg [27], centro veterinario: 4 avg [5], urgencias veterinarias: 0 [<1]); в Лиссабоне: [Trends Lisboa](https://trends.google.com/trends/explore?geo=PT&q=veterinario%20lisboa,clinica%20veterinaria%20lisboa,hospital%20veterinario%20lisboa) (veterinario lisboa: 75 avg [100], clinica veterinaria lisboa: 18 avg [24], hospital veterinario lisboa: 12 avg [16]); в Порту: [Trends Porto](https://trends.google.com/trends/explore?geo=PT&q=veterinario%20porto,clinica%20veterinaria%20porto,hospital%20veterinario%20porto) (veterinario porto: 12 avg [100], clinica veterinaria porto: 3 avg [25], hospital veterinario porto: 2 avg [17]).*
- *Груминг (Португалия): [Trends PT](https://trends.google.com/trends/explore?geo=PT&q=banhos%20e%20tosquias,tosquias,grooming%20canino,salao%20canino,tosquia%20de%20caes) (tosquias: 50 avg [100], banhos e tosquias: 16 avg [32], tosquia de caes: 0 [<1], grooming canino: 0 [<1], salao canino: 0 [<1]); в Лиссабоне: [Trends Lisboa](https://trends.google.com/trends/explore?geo=PT&q=banhos%20e%20tosquias%20lisboa,tosquia%20lisboa,grooming%20lisboa) (tosquia lisboa: 4 avg [100], banhos e tosquias lisboa: 0 [<1], grooming lisboa: 0 [<1]); в Порту: [Trends Porto](https://trends.google.com/trends/explore?geo=PT&q=banhos%20e%20tosquias%20porto,tosquia%20porto,grooming%20porto) (tosquia porto: 2 avg [100], grooming porto: 2 avg [100], banhos e tosquias porto: 0 [<1]).*
- *Отели и пансионы (Португалия): [Trends PT](https://trends.google.com/trends/explore?geo=PT&q=hotel%20para%20caes,hotel%20para%20animais,hotel%20canino,creche%20canina,hotel%20para%20gatos) (hotel canino: 26 avg [100], hotel para caes: 14 avg [54], creche canina: 5 avg [19], hotel para gatos: 2 avg [8], hotel para animais: 0 [<1]); в Лиссабоне: [Trends Lisboa](https://trends.google.com/trends/explore?geo=PT&q=hotel%20canino%20lisboa,hotel%20para%20caes%20lisboa,creche%20canina%20lisboa) (creche canina lisboa: 2 avg [100], hotel canino lisboa: 0 [<1], hotel para caes lisboa: 0 [<1]); в Порту: [Trends Porto](https://trends.google.com/trends/explore?geo=PT&q=hotel%20canino%20porto,hotel%20para%20caes%20porto,creche%20canina%20porto) (creche canina porto: 2 avg [100], hotel canino porto: 0 [<1], hotel para caes porto: 0 [<1]).*
- *Дрессировка (Португалия): [Trends PT](https://trends.google.com/trends/explore?geo=PT&q=treino%20de%20caes,treino%20canino,treinador%20de%20caes,escola%20de%20treino%20canino,obediencia%20canina) (treino de caes: 3 avg [100], escola de treino canino: 2 avg [67], treinador de caes: 1 avg [33], treino canino: 0 [<1], obediencia canina: 0 [<1]); [Trends Синонимы](https://trends.google.com/trends/explore?geo=PT&q=treino%20canino,treinador%20de%20caes,escola%20canina,educacao%20canina,treinador%20canino) (treinador de caes: 3 avg [100], treino canino: 2 avg [67], escola canina: 1 avg [33], educacao canina: 0 [<1], treinador canino: 0 [<1]).*
- *Зоомагазины (Португалия): [Trends PT](https://trends.google.com/trends/explore?geo=PT&q=loja%20de%20animais,loja%20para%20animais,pet%20shop,loja%20animais,lojas%20de%20animais) (loja animais: 62 avg [100], loja de animais: 39 avg [63], pet shop: 30 avg [48], lojas de animais: 6 avg [10], loja para animais: 5 avg [8]); в Порту: [Trends Porto](https://trends.google.com/trends/explore?geo=PT&q=loja%20de%20animais%20porto,pet%20shop%20porto,lojas%20de%20animais%20porto) (loja de animais porto: 3 avg [100], lojas de animais porto: 1 avg [33], pet shop porto: 0 [<1]).*
- *Передержка и выгул (Португалия): [Trends PT](https://trends.google.com/trends/explore?geo=PT&q=passeador%20de%20caes,pet%20sitter,petsitter,pet%20sitting,cuidadores%20de%20caes) (pet sitting: 25 avg [100], pet sitter: 1 avg [4], petsitter: 1 avg [4], cuidadores de caes: 1 avg [4], passeador de caes: 0 [<1]); в Лиссабоне: [Trends Lisboa](https://trends.google.com/trends/explore?geo=PT&q=pet%20sitting%20lisboa,petsitter%20lisboa,passeador%20de%20caes%20lisboa,dog%20walker%20lisboa) (`н/д`, подтверждено Google Suggest).*

| Смысл | Текущий аналог (EN / ES / IT / FR / DE) | Варианты запроса | Planner | Trends (0–100) | Подсказка | Решение |
|---|---|---|---|---|---|---|
| **Ветеринар** | `/vet-clinics/`, `/es/veterinario/`, `/it/veterinario/`, `/fr/veterinaire/`, `/de/tierarzt/` | veterinario lisboa | — | 100 | sim | **главный** абсолютный поисковый лидер (в title, H1 и slug `veterinario`) |
| | | clinica veterinaria lisboa | — | 24 | sim | **второй** (официальные клиники, 39 по Португалии: в title и тексты) |
| | | hospital veterinario lisboa | — | 16 | sim | **второй** (госпитали и крупные круглосуточные центры, 27 по Португалии) |
| | | centro veterinario lisboa | — | <1 | sim | **второй** (ветеринарные центры, 5 по Португалии) |
| | | urgencias veterinarias lisboa | — | <1 | sim | **второй** (неотложная помощь) |
| **Груминг** | `/grooming/`, `/es/peluqueria-canina/`, `/it/toelettatura/`, `/fr/toilettage/`, `/de/hundesalon/` | banhos e tosquias lisboa | — | <1* | sim | **главный** общепринятый национальный термин индустрии (в title, H1 и slug `banhos-e-tosquias`) |
| | | tosquias lisboa | — | 100* | sim | **главный** народный термин стрижки (100 в Trends по Португалии) |
| | | tosquia lisboa | — | 100 | sim | **главный** для Лиссабона |
| | | tosquia porto | — | 100 | sim | **главный** для Порту |
| | | grooming lisboa | — | <1 | sim | **второй** англоязычный термин в крупных городах |
| | | tosquia de caes lisboa | — | <1 | sim | **второй** |
| | | tosquia canina lisboa | — | <1 | sim | **второй** |
| | | salao canino lisboa | — | <1 | sim | **второй** |
| **Гостиница** | `/pet-hotels/`, `/es/residencia-canina/`, `/it/pensione-animali/`, `/fr/pension-animaux/`, `/de/tierpension/` | hotel canino lisboa | — | <1* | sim | **главный** доминирующий коммерческий термин гостиниц для собак (в title, H1 и slug `hotel-canino`) |
| | | hotel para caes lisboa | — | <1* | sim | **главный** синоним (54 по Португалии: в title и тексты) |
| | | creche canina lisboa | — | 100 | sim | **главный** для дневного пребывания / daycare (100 в Лиссабоне и Порту) |
| | | hotel para gatos lisboa | — | <1* | sim | **главный** для кошачьих гостиниц |
| | | hotel para animais lisboa | — | <1* | sim | **нет** (в Португалии узус закрепил `hotel canino` / `hotel para cães`) |
| **Дрессировка** | `/dog-training/`, `/es/adiestramiento-canino/`, `/it/addestramento-cani/`, `/fr/dressage-chien/`, `/de/hundeschule/` | treino canino lisboa | — | 67* | sim | **главный** стандартизированный термин услуги в Португалии (в title, H1 и slug `treino-canino`) |
| | | treino de caes lisboa | — | 100* | sim | **главный** разговорный поисковый лидер по стране (100 в Trends) |
| | | escola de treino canino lisboa | — | 67* | sim | **второй** (школы дрессировки, в Suggest Лиссабона) |
| | | treinador de caes lisboa | — | 33* | sim | **второй** (поиск кинолога-специалиста: в title и H1) |
| | | escola canina lisboa | — | 33* | sim | **второй** |
| | | educacao canina lisboa | — | <1 | sim | **второй** |
| **Зоомагазин** | `/pet-shops/`, `/es/tienda-de-mascotas/`, `/it/negozio-animali/`, `/fr/animalerie/`, `/de/tierhandlung/` | loja de animais lisboa | — | 63* | sim | **главный** литературный и повсеместный термин (в title, H1 и slug `loja-de-animais`) |
| | | loja animais lisboa | — | 100* | sim | **главный** краткий поисковый запрос (100 в Trends) |
| | | pet shop lisboa | — | 48* | sim | **второй** коммерческий термин в мегаполисах (48 по Португалии) |
| | | lojas de animais lisboa | — | 10* | sim | **второй** множественного числа |
| | | loja para animais lisboa | — | 8* | sim | **второй** |
| **Передержка / выгул** | `/pet-sitting/`, `/es/cuidador-de-perros/`, `/it/dog-sitter/`, `/fr/garde-animaux/`, `/de/tierbetreuung/` | pet sitting lisboa | — | 100* | sim | **главный** доминирующий термин присмотра в Португалии (25 avg в Trends: в title, H1 и slug `pet-sitting`) |
| | | pet sitter lisboa | — | 4* | sim | **второй** специалист-ситтер (в Suggest: «pet sitter lisboa») |
| | | petsitter lisboa | — | 4* | sim | **второй** слитное написание |
| | | passeador de caes lisboa | — | <1* | sim | **главный** по выгулу собак (в title: «Pet sitting e passeadores de cães») |
| | | cuidadores de caes lisboa | — | 4* | sim | **второй** португальский описательный термин |
| | | dog walker lisboa | — | <1* | sim | **второй** англоязычный синоним экспатов |

*\* Относительный индекс внутри группы посчитан по общенациональному объёму базового термина в Google Trends (Portugal, geo=PT), так как в локальной городской выдаче частоты ряда узких формулировок находятся ниже порога агрегации Trends.*

---

## 2. Признаки ветклиник

*Группы сравнения Google Trends:*
- *Круглосуточно / неотложка (Португалия): [Trends PT](https://trends.google.com/trends/explore?geo=PT&q=veterinario%2024h,veterinario%2024%20horas,urgencias%20veterinarias,hospital%20veterinario%2024h,clinica%20veterinaria%2024h) (veterinario 24h: 3 avg [100], veterinario 24 horas: 2 avg [67], urgencias veterinarias: 1 avg [33], hospital veterinario 24h: 1 avg [33], clinica veterinaria 24h: 0 [<1]); [Trends 24 horas](https://trends.google.com/trends/explore?geo=PT&q=urgencias%20veterinarias,veterinario%2024%20horas,urgencia%20veterinaria,hospital%20veterinario%2024%20horas,clinica%20veterinaria%2024%20horas) (clinica veterinaria 24 horas: 3 avg [100], urgencia veterinaria: 2 avg [67], urgencias veterinarias: 0 [<1]).*
- *Выходные дни (Португалия): [Trends PT](https://trends.google.com/trends/explore?geo=PT&q=veterinario%20sabado,veterinario%20aberto%20sabado,clinica%20veterinaria%20sabado,veterinario%20domingo,veterinario%20aberto%20domingo) (veterinario sabado: 2 avg [100], clinica veterinaria sabado: 1 avg [50], veterinario aberto sabado: 0 [<1], veterinario domingo: 0 [<1], veterinario aberto domingo: 0 [<1]).*
- *Экзоты и рептилии (Португалия): [Trends PT](https://trends.google.com/trends/explore?geo=PT&q=veterinario%20exoticos,veterinario%20animais%20exoticos,veterinario%20aves,veterinario%20repteis,veterinario%20coelhos) (veterinario exoticos: 2 avg [100], veterinario repteis: 1 avg [50], veterinario animais exoticos: 0 [<1], veterinario aves: 0 [<1], veterinario coelhos: 0 [<1]).*
- *Выезд на дом (Португалия): [Trends PT](https://trends.google.com/trends/explore?geo=PT&q=veterinario%20ao%20domicilio,veterinario%20a%20domicilio,veterinario%20em%20casa,consulta%20veterinaria%20ao%20domicilio) (`н/д`, подтверждено Google Suggest: «veterinário ao domicílio», «veterinario a domicilio lisboa», «veterinario a domicilio porto»).*
- *Приём на английском (Португалия): [Trends PT](https://trends.google.com/trends/explore?geo=PT&q=english%20speaking%20vet%20lisbon,english%20speaking%20vet%20porto,veterinario%20ingles) (`н/д`, подтверждено Google Suggest).*

| Смысл | Текущий аналог (EN / ES / IT / FR / DE) | Варианты запроса | Planner | Trends (0–100) | Подсказка | Решение |
|---|---|---|---|---|---|---|
| **Круглосуточно / неотложка** | `/nonstop/`, `/es/urgencias/`, `/it/pronto-soccorso/`, `/fr/urgence/`, `/de/notdienst/` | veterinario 24h lisboa | — | 100* | sim | **главный** народный поисковый запрос (в Suggest #2 в Лиссабоне) |
| | | urgencias veterinarias lisboa | — | 33* | sim | **главный медицинский термин** (в title, H1 и slug `urgencias`) |
| | | veterinario 24 horas lisboa | — | 67* | sim | **второй** (в title: «Veterinários de urgências e clínicas 24 horas») |
| | | hospital veterinario 24h lisboa | — | 33* | sim | **второй** (крупные круглосуточные центры) |
| | | clinica veterinaria 24 horas | — | 100** | sim | **второй** |
| **Суббота** | `/open-saturday/`, `/es/sabado/`, `/it/sabato/`, `/fr/samedi/`, `/de/samstag/` | veterinario sabado lisboa | — | 100* | sim | **главный** для субботы (в title, H1 и slug `sabado`) |
| | | clinica veterinaria sabado | — | 50* | sim | **второй** |
| | | veterinario aberto sabado | — | <1* | sim | **второй** |
| **Воскресенье** | `/open-sunday/`, `/es/domingo/`, `/it/domenica/`, `/fr/dimanche/`, `/de/sonntag/` | veterinario domingo lisboa | — | <1* | sim | **главный** для воскресенья (в title, H1 и slug `domingo`) |
| | | clinica veterinaria aberta domingo | — | <1* | sim | **второй** |
| | | veterinario aberto domingo | — | <1* | sim | **второй** |
| **Экзоты и рептилии** | `/exotic-animals/`, `/es/exoticos/`, `/it/esotici/`, `/fr/nac/`, `/de/exoten/` | veterinario exoticos lisboa | — | 100* | sim | **главный** поисковый запрос (в title, H1 и slug `exoticos`) |
| | | veterinario repteis | — | 50* | sim | **второй** (герпетология) |
| | | veterinario animais exoticos | — | <1* | sim | **второй** официальный полный термин (в title: «Veterinários de animais exóticos») |
| | | veterinario aves | — | <1* | sim | **второй** (орнитология) |
| | | veterinario coelhos | — | <1* | sim | **второй** |
| **Выезд на дом** | `/home-visits/`, `/es/a-domicilio/`, `/it/a-domicilio/`, `/fr/a-domicile/`, `/de/hausbesuch/` | veterinario ao domicilio lisboa | — | н/д | sim | **главный** литературный и грамматический термин вызова врача в Португалии (в title, H1 и slug `ao-domicilio`) |
| | | veterinario a domicilio lisboa | — | н/д | sim | **главный** разговорный синоним без слияния предлога (по Suggest) |
| | | veterinario em casa lisboa | — | н/д | sim | **второй** (по Suggest) |
| | | consulta veterinaria ao domicilio | — | н/д | sim | **второй** (официальная формулировка) |
| **Приём на английском** | `/english-speaking/`, `/es/ingles/`, `/it/inglese/`, `/fr/anglophone/`, `/de/englisch/` | english speaking vet lisbon | — | н/д | sim | **главный** международный запрос экспатов в Лиссабоне и Порту (в title и slug `ingles`) |
| | | english speaking vet porto | — | н/д | sim | **главный** для Порту |
| | | veterinario ingles lisboa | — | н/д | sim | **второй** локальный запрос |
| | | veterinario fala ingles | — | н/д | sim | **второй** |

*\* Относительный индекс посчитан по общенациональному объёму базового термина в Google Trends (Portugal, geo=PT).*  
*\*\* Относительный индекс внутри подгруппы вариантов с формулировкой «24 horas».*

---

## 3. Цены

### 3.1. Общие запросы обзора цен категорий

*Группы сравнения Google Trends:*
- *Ветклиники: [Trends PT](https://trends.google.com/trends/explore?geo=PT&q=preco%20veterinario,precos%20veterinario,quanto%20custa%20o%20veterinario,tabela%20precos%20veterinario) (precos veterinario: 2 avg [100], quanto custa o veterinario: 2 avg [100], preco veterinario: 1 avg [50], tabela precos veterinario: 0 [<1]).*
- *Груминг: [Trends PT](https://trends.google.com/trends/explore?geo=PT&q=preco%20tosquia,precos%20tosquia,quanto%20custa%20tosquiar%20um%20cao,preco%20banhos%20e%20tosquias) (`н/д`, подтверждено Google Suggest: «banhos e tosquias preços lisboa»).*
- *Гостиницы: [Trends PT](https://trends.google.com/trends/explore?geo=PT&q=preco%20hotel%20para%20caes,hotel%20para%20caes%20precos,quanto%20custa%20hotel%20para%20caes,preco%20creche%20canina) (preco hotel para caes: 3 avg [100], hotel para caes precos: 0 [<1], quanto custa hotel para caes: 0 [<1], preco creche canina: 0 [<1]).*
- *Дрессировка: [Trends PT](https://trends.google.com/trends/explore?geo=PT&q=preco%20treino%20canino,quanto%20custa%20treinar%20um%20cao,treinador%20de%20caes%20preco,escola%20canina%20precos) (`н/д`, подтверждено Google Suggest).*
- *Выгул / присмотр: [Trends PT](https://trends.google.com/trends/explore?geo=PT&q=preco%20passeador%20de%20caes,quanto%20cobra%20um%20passeador%20de%20caes,pet%20sitting%20precos,preco%20pet%20sitting) (preco pet sitting: 2 avg [100], preco passeador de caes: 0 [<1], quanto cobra um passeador de caes: 0 [<1], pet sitting precos: 0 [<1]).*

| Категория | Текущий аналог (EN / ES / IT / FR / DE) | Варианты запроса | Planner | Trends (0–100) | Подсказка | Решение |
|---|---|---|---|---|---|---|
| **Цены ветклиник** | `…/prices/`, `…/precios/`, `…/prezzi/`, `…/tarifs/`, `…/preise/` | precos veterinario | — | 100 | sim | **главный** коммерческий запрос стоимости услуг (в title и H1: «Preços veterinário») |
| | | quanto custa o veterinario | — | 100 | sim | **главный** вопросный запрос для FAQ |
| | | preco veterinario | — | 50 | sim | **второй** в единственном числе |
| | | tabela precos veterinario | — | <1 | sim | **второй** (прейскурант клиник) |
| **Цены груминга** | `…/prices/`, `…/precios/`, `…/prezzi/`, `…/tarifs/`, `…/preise/` | banhos e tosquias precos | — | н/д | sim | **главный** коммерческий запрос прайса (в title и H1: «Preços de banhos e tosquias») |
| | | quanto custa tosquiar um cao | — | н/д | sim | **главный** вопросный запрос для FAQ |
| | | preco tosquia cao | — | н/д | sim | **второй** |
| | | precos tosquia | — | н/д | sim | **второй** |
| **Цены гостиниц** | `…/prices/`, `…/precios/`, `…/prezzi/`, `…/tarifs/`, `…/preise/` | preco hotel para caes | — | 100 | sim | **главный** запрос стоимости проживания (в title и H1: «Preços de hotel canino») |
| | | hotel para caes precos | — | <1 | sim | **второй** (по Suggest: «hotel para cães lisboa preços») |
| | | preco creche canina | — | <1 | sim | **главный** для дневного центра (по Suggest: «creche canina lisboa preços») |
| | | quanto custa hotel para caes | — | <1 | sim | **главный** вопрос для FAQ |
| **Цены дрессировки** | `…/prices/`, `…/precios/`, `…/prezzi/`, `…/tarifs/`, `…/preise/` | preco treino canino | — | н/д | sim | **главный** запрос стоимости курсов дрессировки (в title и H1: «Preços de treino canino») |
| | | quanto custa treinar um cao | — | н/д | sim | **главный** вопросный запрос для FAQ |
| | | treinador de caes preco | — | н/д | sim | **второй** запрос стоимости услуг кинолога |
| | | escola canina precos | — | н/д | sim | **второй** |
| **Цены передержки / выгула** | `…/prices/`, `…/precios/`, `…/prezzi/`, `…/tarifs/`, `…/preise/` | preco pet sitting | — | 100 | sim | **главный** коммерческий запрос услуг присмотра (в title и H1: «Preços de pet sitting») |
| | | quanto cobra um passeador de caes | — | <1 | sim | **главный** вопросный запрос ставки выгульщика (в FAQ) |
| | | preco passeador de caes | — | <1 | sim | **главный** тариф выгула собак |
| | | pet sitting precos | — | <1 | sim | **второй** |

---

### 3.2. Конкретные услуги (30 услуг из `website/lib/priceSlugs.ts` и `services.ts`)

Правила выведения поискового названия для страницы цены (`seo` по §3.1 методики):
1. Из главного поискового запроса удаляются слова цены («preço», «preços», «quanto custa», «tabela de preços», «por hora», «por dia») и города («Lisboa», «em Lisboa», «Porto»).
2. Первое слово пишется с заглавной буквы.
3. Сохраняется объект («cão», «cães», «gato», «gata», «cadela», «cachorros»).
4. Единица измерения указывается словами («por noite», «por dia», «30 minutos», «1 hora»).
5. Длина — до 45 знаков.

*Группы сравнения Google Trends:*
- *Вет. процедуры: [Trends PT](https://trends.google.com/trends/explore?geo=PT&q=consulta%20veterinaria,vacina%20cao,microchip%20cao,castrar%20gato,esterilizar%20gata) (vacina cao: 4 avg [100], castrar gato: 3 avg [75], consulta veterinaria: 0 [<1], microchip cao: 0 [<1], esterilizar gata: 0 [<1]).*
- *Кастрация и стерилизация: [Trends PT](https://trends.google.com/trends/explore?geo=PT&q=castrar%20gato,esterilizar%20gata,castrar%20cao,esterilizar%20cadela,castrar%20cadela) (esterilizar cadela: 3 avg [100], castrar gato: 2 avg [67], castrar cao: 0 [<1], esterilizar gata: 0 [<1], castrar cadela: 0 [<1]).*
- *Услуги груминга: [Trends PT](https://trends.google.com/trends/explore?geo=PT&q=banho%20cao,tosquia%20cao,cortar%20unhas%20cao,tosquia%20gatos,stripping%20caes) (banho cao: 7 avg [100], cortar unhas cao: 2 avg [29], tosquia cao: 0 [<1], tosquia gatos: 0 [<1], stripping caes: 0 [<1]).*
- *Гостиницы и трансфер: [Trends PT](https://trends.google.com/trends/explore?geo=PT&q=hotel%20canino,hotel%20para%20gatos,creche%20canina,transporte%20de%20animais,taxi%20dog) (hotel canino: 26 avg [100], transporte de animais: 19 avg [73], creche canina: 5 avg [19], hotel para gatos: 2 avg [8], taxi dog: 0 [<1]).*
- *Дрессировка услуги: [Trends PT](https://trends.google.com/trends/explore?geo=PT&q=escola%20de%20treino%20canino,obediencia%20canina,comportamento%20canino,etologia%20canina,clube%20canino) (escola de treino canino: 2 avg [100], obediencia canina: 0 [<1], comportamento canino: 0 [<1], etologia canina: 0 [<1], clube canino: 0 [<1]).*

| Категория | Код | Варианты запроса | Planner | Trends | Подсказка | Решение | Поисковое название (§3.1) |
|---|---|---|---|---|---|---|---|
| **GROOMING** | `full_groom` | tosquia de caes preco | — | <1* | sim | **главный** запрос стрижки и комплексного ухода | **Tosquia completa de cães** |
| | | banho e tosquia cao preco | — | <1* | sim | второй (в Suggest: «banho e tosquia lisboa») | |
| | `bath_dry` | banho cao preco | — | 100 | sim | **главный** запрос гигиенического мытья | **Banho e secagem para cães** |
| | | banho e secagem cao | — | <1 | sim | второй | |
| | `hand_stripping` | stripping canino preco | — | н/д | sim | **главный** профессиональный запрос тримминга жесткошерстных собак | **Stripping para cães** |
| | | stripping caes | — | <1 | sim | второй | |
| | `deshedding` | deslanagem cao preco | — | н/д | sim | **главный** португальский термин вычесывания подшерстка | **Deslanagem de cães (subpelo)** |
| | | remocao de subpelo cao | — | н/д | sim | второй | |
| | `nail_trim` | cortar unhas cao preco | — | 29 | sim | **главный** запрос стрижки когтей | **Corte de unhas para cães** |
| | | corte de unhas cao | — | <1 | sim | второй | |
| | `cat_groom` | tosquia gatos preco | — | <1* | sim | **главный** запрос стрижки кошек (в Suggest: «tosquia gatos lisboa») | **Tosquia e cuidados para gatos** |
| | | tosquia felina preco | — | н/д | sim | второй | |
| **VET_CLINIC** | `exam` | consulta veterinaria preco | — | <1* | sim | **главный** официальный запрос стоимости приёма врача | **Consulta veterinária** |
| | | consulta geral veterinario | — | н/д | sim | второй | |
| | `vaccination_dog` | vacina cao preco | — | 100 | sim | **главный** запрос стоимости вакцинации собак | **Vacina para cães** |
| | | vacinas caes preco | — | <1 | sim | второй | |
| | `microchip` | microchip cao preco | — | <1* | sim | **главный** запрос чипирования собак | **Microchip para cães** |
| | | colocar chip no cao preco | — | н/д | sim | второй | |
| | `neuter_cat` | castrar gato preco | — | 75 | sim | **главный** запрос кастрации кота-самца | **Castração de gato (macho)** |
| | | castracao de gato preco | — | <1 | sim | второй | |
| | `spay_cat` | esterilizar gata preco | — | <1* | sim | **главный** запрос стерилизации кошки | **Esterilização de gata** |
| | | esterilizacao gata preco | — | <1* | sim | второй | |
| | `spay_dog` | esterilizar cadela preco | — | 100 | sim | **главный** запрос стерилизации собаки-самки в Португалии | **Esterilização de cadela** |
| | | castrar cadela preco | — | <1 | sim | второй | |
| **PET_HOTEL** | `dog_night` | hotel canino preco noite | — | 100* | sim | **главный** запрос ночного тарифа загородной гостиницы | **Hotel canino por noite** |
| | | hotel para caes preco por noite | — | 54* | sim | второй | |
| | `cat_night` | hotel para gatos preco noite | — | 8* | sim | **главный** запрос проживания кошек | **Hotel para gatos por noite** |
| | | hotel felino preco noite | — | н/д | sim | второй | |
| | `daycare_day` | creche canina preco por dia | — | 19* | sim | **главный** запрос дневного центра пребывания | **Creche canina por dia** |
| | | creche para caes precos | — | <1* | sim | второй (по Suggest: «creche canina lisboa preços») | |
| | `daycare_pass` | passe creche canina | — | н/д | sim | **главный** абонемент дневного центра (по Suggest) | **Passe para creche canina** |
| | | mensalidade creche canina | — | н/д | sim | второй | |
| | `pickup` | transporte de animais preco | — | 73* | sim | **главный** официальный запрос трансфера животных | **Táxi para animais e transporte** |
| | | taxi para animais preco | — | н/д | sim | второй (в Suggest: «taxi pets lisboa») | |
| | `extra_walk` | passeio extra hotel canino | — | н/д | sim | **главный** запрос дополнительной прогулки в гостинице | **Paseio extra no hotel canino** |
| | | passeio adicional cao | — | н/д | sim | второй | |
| **DOG_TRAINING** | `puppy_course` | curso para cachorros | — | н/д | sim | **главный** курс социализации щенков | **Curso para cachorros** |
| | | escola de cachorros | — | н/д | sim | второй | |
| | `obedience_course` | curso de obediencia basica cao | — | н/д | sim | **главный** базовый курс послушания | **Curso de obediência básica para cães** |
| | | treino de obediencia canina | — | <1* | sim | второй | |
| | `group_lesson` | aulas de grupo treino canino | — | н/д | sim | **главный** групповые занятия дрессировкой | **Aula de grupo para cães** |
| | | aula de grupo para caes | — | н/д | sim | второй | |
| | `private_lesson` | aula individual treino canino | — | н/д | sim | **главный** индивидуальные занятия с кинологом | **Aula individual de treino canino** |
| | | treino canino individual | — | н/д | sim | второй | |
| | `behavior_consult` | consulta de comportamento canino | — | н/д | sim | **главный** запрос консультации специалиста по поведению | **Consulta de comportamento canino** |
| | | etologia canina preco | — | <1* | sim | второй | |
| | `membership` | quota clube canino | — | н/д | sim | **главный** годовой членский взнос кинологического клуба | **Quota de sócio de clube canino** |
| | | mensalidade clube canino | — | <1* | sim | второй | |
| **PET_SITTING** | `walk_30` | passeio de cao 30 minutos | — | н/д | sim | **главный** короткий выгул на 30 минут | **Passeio de cão (30 minutos)** |
| | | passear cao 30 min | — | н/д | sim | второй | |
| | `walk_60` | passeio de cao 1 hora preco | — | н/д | sim | **главный** стандартная часовая прогулка | **Passeio de cão (1 hora)** |
| | | passeador de caes preco por hora | — | <1* | sim | второй | |
| | `cat_visit` | visita a domicilio para gatos | — | н/д | sim | **главный** домашний визит к кошкам | **Visita ao domicílio para gatos** |
| | | cat sitting a domicilio | — | н/д | sim | второй | |
| | `house_sitting_night` | pet sitting ao domicilio noite | — | н/д | sim | **главный** ночной присмотр в доме владельца | **Cuidado ao domicílio (noite)** |
| | | cuidado de animais em casa noite | — | н/д | sim | второй | |
| | `boarding_night` | alojamento familiar cao noite | — | н/д | sim | **главный** ночная домашняя передержка у ситтера | **Alojamento com petsitter (noite)** |
| | | hospedagem familiar caes | — | н/д | sim | второй | |
| | `daycare_day` | pet sitting diurno | — | н/д | sim | **главный** дневной домашний присмотр у ситтера | **Cuidado diurno para cães** |
| | | cuidado diurno para caes | — | н/д | sim | второй | |

---

## 4. Ветеринарные специальности из `website/lib/vet.ts`

В Португалии номенклатура ветеринарных специальностей и клинических дисциплин регулируется **OMV (Ordem dos Médicos Veterinários)** и клинической практикой аккредитованных ветеринарных госпиталей.

*Группы сравнения Google Trends:*
- *Диагностика и терапия: [Trends PT](https://trends.google.com/trends/explore?geo=PT&q=fisioterapia%20veterinaria,ecografia%20veterinaria,radiografia%20veterinaria,tac%20veterinario,dermatologia%20veterinaria) (fisioterapia veterinaria: 2 avg [100], radiografia veterinaria: 2 avg [100], ecografia veterinaria: 0 [<1], tac veterinario: 0 [<1], dermatologia veterinaria: 0 [<1]).*
- *Клинические дисциплины: [Trends PT](https://trends.google.com/trends/explore?geo=PT&q=cirurgia%20veterinaria,oftalmologia%20veterinaria,cardiologia%20veterinaria,oncologia%20veterinaria,neurologia%20veterinaria) (cirurgia veterinaria: 2 avg [100], oftalmologia veterinaria: 2 avg [100], cardiologia veterinaria: 0 [<1], oncologia veterinaria: 0 [<1], neurologia veterinaria: 0 [<1]).*
- *Репродукция и стационар: [Trends PT](https://trends.google.com/trends/explore?geo=PT&q=ressonancia%20veterinaria,internamento%20veterinario,medicina%20interna%20veterinaria,reproducao%20veterinaria,medicina%20dentaria%20veterinaria) (reproducao veterinaria: 2 avg [100], ressonancia veterinaria: 0 [<1], internamento veterinario: 0 [<1], medicina interna veterinaria: 0 [<1], medicina dentaria veterinaria: 0 [<1]).*

| Код специальности | Английский (`en`) | Португальский (`pt`) | Варианты запроса в Португалии | Trends (0–100) | Подсказка | Обоснование и статус |
|---|---|---|---|---|---|---|
| `surgery` | Surgery | **Cirurgia** | cirurgia veterinaria | 100 | sim | **главный** термин хирургического отделения |
| `orthopedics` | Orthopaedics | **Ortopedia** | ortopedia veterinaria | н/д | sim | **главный** общепринятый клинический термин в Португалии (в клиниках повсеместно: «Ortopedia e traumatologia» или кратко «Ortopedia») |
| `dentistry` | Dentistry | **Medicina dentária** | medicina dentaria veterinaria | <1 | sim | **главный** официальный термин в Португалии (вместо «odontologia», характерного для Бразилии) |
| | | | odontologia veterinaria | <1 | sim | второй синоним |
| `dermatology` | Dermatology | **Dermatologia** | dermatologia veterinaria | <1 | sim | **главный** профиль кожных патологий и аллергий |
| `cardiology` | Cardiology | **Cardiologia** | cardiologia veterinaria | <1 | sim | **главный** кардиологический профиль |
| `ophthalmology` | Ophthalmology | **Oftalmologia** | oftalmologia veterinaria | 100 | sim | **главный** офтальмологический профиль |
| `oncology` | Oncology | **Oncologia** | oncologia veterinaria | <1 | sim | **главный** онкологический профиль |
| `neurology` | Neurology | **Neurologia** | neurologia veterinaria | <1 | sim | **главный** неврологический профиль и нейрохирургия |
| `internal-medicine` | Internal medicine | **Medicina interna** | medicina interna veterinaria | <1 | sim | **главный** терапевтический профиль общей клиники |
| `reproduction` | Reproduction | **Reprodução** | reproducao veterinaria | 100 | sim | **главный** профиль репродукции и неонатологии |
| `rehabilitation` | Rehabilitation | **Fisioterapia e reabilitação** | fisioterapia veterinaria | 100 | sim | **главный** доминирующий запрос реабилитации питомцев |
| | | | reabilitacao veterinaria | <1 | sim | второй официальный синоним (в клиниках Португалии: «Fisioterapia e reabilitação») |
| `exotics` | Exotic animals | **Animais exóticos** | veterinario exoticos | 100 | sim | **главный** термин приёма экзотических животных |
| | | | animais exoticos veterinaria | <1 | sim | второй |
| `ultrasound` | Ultrasound | **Ecografia** | ecografia veterinaria | <1 | sim | **главный** термин УЗИ-диагностики в Португалии (вместо «ultrassom», принятого в Бразилии) |
| `x-ray` | X-ray | **Radiografia** | radiografia veterinaria | 100 | sim | **главный** официальный термин рентгенографии (также разговорное «Raio-X») |
| `ct` | CT | **TAC** | tac veterinario | <1 | sim | **главный** повсеместный португальский медицинский термин компьютерной томографии (Tomografia Axial Computorizada) |
| `mri` | MRI | **Ressonância magnética** | ressonancia veterinaria | <1 | sim | **главный** термин магнитно-резонансной томографии в Португалии |
| `endoscopy` | Endoscopy | **Endoscopia** | endoscopia veterinaria | н/д | sim | **главный** термин эндоскопических исследований |
| `laboratory` | Laboratory | **Laboratório** | laboratorio veterinario | н/д | sim | **главный** профиль лабораторной диагностики (в клиниках также: «Análises clínicas») |
| `hospitalization` | Hospitalisation | **Internamento** | internamento veterinario | <1 | sim | **главный** официальный клинический термин дневного и круглосуточного стационара в Португалии (вместо «hospitalização») |

---

## 5. Сводка слагов для сайта

Каждый слаг записан строго в одном варианте латиницей без диакритических знаков, в нижнем регистре через дефис (`kebab-case`), в полном соответствии с архитектурным контрактом сайта.

### 5.1. Категории (`website/lib/categories.ts`: `SLUGS.pt`)

1. `GROOMING` → **`banhos-e-tosquias`**  
   *Обоснование:* Общепринятый, повсеместный национальный термин индустрии ухода за собаками и кошками в Португалии. Все вывески, прайсы и каталоги в Лиссабоне и Порту используют термин «Banhos e Tosquias». Точный культурный аналог испанского `peluqueria-canina`, французского `toilettage` и итальянского `toelettatura`.
2. `VET_CLINIC` → **`veterinario`**  
   *Обоснование:* Абсолютный поисковый лидер по всей Португалии (83 avg в Trends против 32 у `clinica veterinaria` и 22 у `hospital veterinario`; в Лиссабоне 75 против 18 у клиник). Точный аналог `/es/veterinario/`, `/it/veterinario/`, `/fr/veterinaire/`, `/sk/veterinar/`, `/de/tierarzt/`.
3. `PET_HOTEL` → **`hotel-canino`**  
   *Обоснование:* Доминирующий коммерческий и поисковый термин гостиниц для передержки собак в Португалии (26 avg в Trends против 14 у `hotel para caes` и 5 у `creche canina`). Точный аналог испанского `residencia-canina`, итальянского `pensione-animali` и немецкого `tierpension`.
4. `DOG_TRAINING` → **`treino-canino`**  
   *Обоснование:* Стандартизированный отраслевой термин услуг дрессировки собак в Португалии (в Trends `treino de caes` 3 avg, `treino canino` 2 avg; подтверждён Google Suggest: «treino canino lisboa», «escola de treino canino»). Полный аналог `adiestramiento-canino`, `addestramento-cani`, `szkolenie-psow`, `vycvik-psov`.
5. `PET_SHOP` → **`loja-de-animais`**  
   *Обоснование:* Универсальный португальский термин категории розничных зоомагазинов (в Trends `loja animais` 62 avg, `loja de animais` 39 avg). В отличие от англоязычного `pet shop`, однозначно идентифицирует категорию на местном языке.
6. `PET_SITTING` → **`pet-sitting`**  
   *Обоснование:* Доминирующий поисковый запрос категории индивидуального присмотра за домашними животными в Португалии (25 avg в Trends — превышает все португалоязычные описательные фразы более чем в 20 раз; подтверждён Google Suggest: «pet sitting lisboa», «pet sitter lisboa»).

### 5.2. Признаки ветклиник (`website/lib/attributePages.ts`: `SLUGS`)

1. `nonstop` → **`urgencias`** (title: «Veterinários de urgências e clínicas 24 horas», главный медицинский термин экстренной помощи; точный аналог испанского `urgencias` и французского `urgence`)
2. `saturday` → **`sabado`** (title: «Veterinários abertos ao sábado»)
3. `sunday` → **`domingo`** (title: «Veterinários abertos ao domingo»)
4. `exotics` → **`exoticos`** (title: «Veterinários de animais exóticos», абсолютный лидер по экзотам — 2 avg в Trends)
5. `home-visits` → **`ao-domicilio`** (title: «Veterinários ao domicílio», литературная и официальная норма европейского португальского языка со слиянием предлога `a + o = ao`)
6. `english` → **`ingles`** (title: «Veterinários com atendimento em inglês (English speaking vets)»)

### 5.3. Сегмент цен в URL (`website/lib/priceSlugs.ts`: `PRICES_SEGMENT.pt`)

- `PRICES_SEGMENT.pt`: **`precos`** (структура URL: `/<category>/<city>/precos/` и `/<category>/<city>/precos/<service>/`)

### 5.4. Слаги услуг из цен (`website/lib/priceSlugs.ts`: `SERVICE_SLUGS`)

#### GROOMING:
1. `full_groom` → `tosquia-completa`
2. `bath_dry` → `banho-e-secagem`
3. `hand_stripping` → `stripping`
4. `deshedding` → `deslanagem`
5. `nail_trim` → `corte-de-unhas`
6. `cat_groom` → `tosquia-felina`

#### VET_CLINIC:
7. `exam` → `consulta-veterinaria`
8. `vaccination_dog` → `vacina-cao`
9. `microchip` → `microchip-cao`
10. `neuter_cat` → `castracao-gato`
11. `spay_cat` → `esterilizacao-gata`
12. `spay_dog` → `esterilizacao-cadela`

#### PET_HOTEL:
13. `dog_night` → `cao-noite`
14. `cat_night` → `gato-noite`
15. `daycare_day` → `creche-dia`
16. `daycare_pass` → `passe-creche`
17. `pickup` → `taxi-animais`
18. `extra_walk` → `passeio-extra`

#### DOG_TRAINING:
19. `puppy_course` → `curso-cachorros`
20. `obedience_course` → `curso-obediencia-basica`
21. `group_lesson` → `aula-grupo`
22. `private_lesson` → `aula-individual`
23. `behavior_consult` → `consulta-comportamento`
24. `membership` → `quota-clube`

#### PET_SITTING:
25. `walk_30` → `passeio-30-min`
26. `walk_60` → `passeio-60-min`
27. `cat_visit` → `visita-gatos`
28. `house_sitting_night` → `cuidado-domicilio-noite`
29. `boarding_night` → `alojamento-petsitter-noite`
30. `daycare_day` → `cuidado-diurno`

---

### 5.5. Поисковые названия для страниц цен (`seo` в `website/lib/services.ts`, §3.1) и короткие подписи

Формирование выполнено строго по правилам методики `docs/seo/keywords/README.md` §3.1 (удалены слова цены и город, сохранён объект с заглавной буквы, единицы словами, длина каждого поискового названия не превышает 45 символов):

| Категория | Код услуги | Короткая подпись (`pt`) | Поисковое название `seo` (`pt`, §3.1) |
|---|---|---|---|
| **GROOMING** | `full_groom` | Tosquia completa | Tosquia completa de cães |
| | `bath_dry` | Banho e secagem | Banho e secagem para cães |
| | `hand_stripping` | Stripping | Stripping para cães |
| | `deshedding` | Deslanagem | Deslanagem de cães (subpelo) |
| | `nail_trim` | Corte de unhas | Corte de unhas para cães |
| | `cat_groom` | Tosquia felina | Tosquia e cuidados para gatos |
| **VET_CLINIC** | `exam` | Consulta geral | Consulta veterinária |
| | `vaccination_dog` | Vacinação de cão | Vacina para cães |
| | `microchip` | Microchip | Microchip para cães |
| | `neuter_cat` | Castração de gato | Castração de gato (macho) |
| | `spay_cat` | Esterilização de gata | Esterilização de gata |
| | `spay_dog` | Esterilização de cadela | Esterilização de cadela |
| **PET_HOTEL** | `dog_night` | Cão, por noite | Hotel canino por noite |
| | `cat_night` | Gato, por noite | Hotel para gatos por noite |
| | `daycare_day` | Creche de dia | Creche canina por dia |
| | `daycare_pass` | Passe de creche | Passe para creche canina |
| | `pickup` | Táxi para animais (transporte) | Táxi para animais e transporte |
| | `extra_walk` | Passeio extra | Passeio extra no hotel canino |
| **DOG_TRAINING** | `puppy_course` | Curso para cachorros | Curso para cachorros |
| | `obedience_course` | Obediência básica | Curso de obediência básica para cães |
| | `group_lesson` | Aula de grupo | Aula de grupo para cães |
| | `private_lesson` | Aula individual | Aula individual de treino canino |
| | `behavior_consult` | Consulta de comportamento | Consulta de comportamento canino |
| | `membership` | Quota de sócio | Quota de sócio de clube canino |
| **PET_SITTING** | `walk_30` | Passeio 30 min | Passeio de cão (30 minutos) |
| | `walk_60` | Passeio 1 hora | Passeio de cão (1 hora) |
| | `cat_visit` | Visita a gatos | Visita ao domicílio para gatos |
| | `house_sitting_night` | Cuidado em sua casa, noite | Cuidado ao domicílio (noite) |
| | `boarding_night` | Alojamento com petsitter | Alojamento com petsitter (noite) |
| | `daycare_day` | Cuidado diurno | Cuidado diurno para cães |

---

### 5.6. Шаблоны мета-тегов категорий для `website/lib/categories.ts`

- `SEO_TITLE.pt`:
  - `GROOMING`: `"Banhos e tosquias e cuidados para cães"`
  - `VET_CLINIC`: `"Veterinários e clínicas veterinárias"`
  - `PET_HOTEL`: `"Hotéis caninos e creches para cães"`
  - `DOG_TRAINING`: `"Treino canino e escolas para cães"`
  - `PET_SHOP`: `"Lojas de animais e artigos para animais"`
  - `PET_SITTING`: `"Pet sitting e passeadores de cães"`
- `PRICES_NAME.pt`:
  - `GROOMING`: `"Banhos e tosquias"`
  - `VET_CLINIC`: `"Preços veterinário"`
  - `PET_HOTEL`: `"Hotel canino"`
  - `DOG_TRAINING`: `"Treino canino"`
  - `PET_SHOP`: `"Lojas de animais"`
  - `PET_SITTING`: `"Pet sitting"`

### 5.7. Сегменты URL

- `BUSINESS_SEGMENT.pt`: **`centro`**
- `CITY_SEGMENT.pt`: **`cidade`**
- `BEST_SEGMENT.pt`: **`melhores`**
- `GUIDE_SEGMENT.pt`: **`guias`**

---

## 6. Открытый вопрос

1. **Доступность Keyword Planner**:
   В среде сборщика отсутствует доступ к рекламному аккаунту Google Ads Keyword Planner (активные кампании отсутствуют). В соответствии с правилом `quality.md` §1 («Нет данных — пусто и причина. Никогда не оценка»), колонка Planner заполнена прочерком `—` во всех строках без исключения.
2. **Верификация данных Google Trends и Google Suggest**:
   Все числовые показатели сняты напрямую через интерфейс Google Trends по региону Португалия (`geo=PT`, период: 12 месяцев) с дополнительной детализацией по базовым городам (Lisboa, Porto); каждая группа сравнения снабжена прямой ссылкой на Trends. Существование и узус поисковых фраз подтверждены через официальный Google Suggest API (`gl=pt`, `hl=pt-PT`).
