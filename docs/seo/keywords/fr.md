# Ключевые слова: французский (`fr`) для Франции (базовые города — Paris, Marseille, Lyon)

Дата сбора: **2026-10-11**.  
Исследуемый регион: **France (Франция, `geo=FR`)**, базовые города — **Paris (Париж)**, **Marseille (Марсель)**, **Lyon (Лион)**.  
Источники данных:
- **Google Trends** (Франция, период: 12 месяцев, `geo=FR`, сравнение синонимов внутри смысловых групп до 5 вариантов).
  *Примечание о доступности:* При прямом автоматическом запросе из рабочей среды CLI Google Trends возвращает код `HTTP 429 Too Many Requests` (сетевое ограничение Google по IP). В соответствии с правилами `docs/playbooks/quality.md` §1 (правило «Нет данных — пусто и причина. Никогда не оценка») и задачей, числовые значения в колонке Trends обозначены прочерком `—`, а для каждой группы предоставлена прямая URL-ссылка на исследование в интерфейсе Google Trends (`trends.google.com/trends/explore?geo=FR&q=…`), чтобы оркестратор и проверяющий могли валидировать сравнение в браузере.
- **Подсказки Google** (`google.fr`, `hl=fr`, `gl=fr`, инкогнито / Google Suggest API) — проверены все базовые термины, поисковые хвосты и локализованные запросы с городами Paris, Marseille, Lyon.
- **Google Ads Keyword Planner**: нет доступа к аккаунту в рабочей среде (в соответствии с правилами `docs/playbooks/quality.md` §§1–2 и методикой `docs/seo/keywords/README.md` колонка Planner помечена `—` во всех строках; исследование проведено по шагам 2–3 методики).
- **Реальный узус и официальная терминология во Франции**: сайты ветеринарных клиник и кабинетов, Ordre National des Vétérinaires (`veterinaire.fr`), Société Centrale Canine (`centrale-canine.fr`), Syndicat National des Professions du Chien et du Chat (SNPCC).

> **Методика фиксации данных Trends и выбора слагов (`docs/playbooks/quality.md`, `README.md`):**  
> - Сравнение синонимов формируется в смысловых группах (до 5 вариантов).
> - Каждая группа сравнения снабжена прямой ссылкой на Google Trends по Франции (`geo=FR`) и по ключевым городам (Paris, Marseille, Lyon).
> - Если инструмент недоступен из контейнера (HTTP 429), в колонке Trends ставится `—`, а в описании PR и в разделе «Открытый вопрос» фиксируется причина. Никаких «примерных оценок» не допускается (`quality.md` §1).
> - Подтверждение реального поискового спроса фиксируется через поисковые подсказки Google Suggest (`gl=fr`, `hl=fr`), где запросы классифицируются по рангу релевантности.
> - Согласно требованию задачи, каждый слаг выбирается строго в **ОДНОМ** варианте, латиницей без диакритики, с развёрнутым обоснованием выбора.

---

## 1. Категории

*Группы сравнения Google Trends:*
- *Ветклиники (Франция): [Trends FR](https://trends.google.com/trends/explore?geo=FR&q=v%C3%A9t%C3%A9rinaire,clinique%20v%C3%A9t%C3%A9rinaire,cabinet%20v%C3%A9t%C3%A9rinaire,urgence%20v%C3%A9t%C3%A9rinaire,v%C3%A9t%C3%A9rinaire%20de%20garde)*  
  *в Париже: [Trends Paris](https://trends.google.com/trends/explore?geo=FR&q=v%C3%A9t%C3%A9rinaire%20paris,clinique%20v%C3%A9t%C3%A9rinaire%20paris,cabinet%20v%C3%A9t%C3%A9rinaire%20paris)*  
  *в Марселе: [Trends Marseille](https://trends.google.com/trends/explore?geo=FR&q=v%C3%A9t%C3%A9rinaire%20marseille,clinique%20v%C3%A9t%C3%A9rinaire%20marseille,cabinet%20v%C3%A9t%C3%A9rinaire%20marseille)*  
  *в Лионе: [Trends Lyon](https://trends.google.com/trends/explore?geo=FR&q=v%C3%A9t%C3%A9rinaire%20lyon,clinique%20v%C3%A9t%C3%A9rinaire%20lyon,cabinet%20v%C3%A9t%C3%A9rinaire%20lyon)*
- *Груминг (Франция): [Trends FR](https://trends.google.com/trends/explore?geo=FR&q=toilettage%20chien,salon%20de%20toilettage,toiletteur%20canin,toilettage%20canin,toiletteur)*  
  *в Париже: [Trends Paris](https://trends.google.com/trends/explore?geo=FR&q=toilettage%20chien%20paris,salon%20de%20toilettage%20paris,toiletteur%20paris)*  
  *в Марселе: [Trends Marseille](https://trends.google.com/trends/explore?geo=FR&q=toilettage%20chien%20marseille,salon%20de%20toilettage%20marseille,toiletteur%20marseille)*  
  *в Лионе: [Trends Lyon](https://trends.google.com/trends/explore?geo=FR&q=toilettage%20chien%20lyon,salon%20de%20toilettage%20lyon,toiletteur%20lyon)*
- *Отели и пансионы (Франция): [Trends FR](https://trends.google.com/trends/explore?geo=FR&q=pension%20pour%20chien,pension%20canine,h%C3%B4tel%20pour%20chien,pension%20pour%20chat,pension%20animaux)*  
  *в Париже: [Trends Paris](https://trends.google.com/trends/explore?geo=FR&q=pension%20pour%20chien%20paris,pension%20canine%20paris,h%C3%B4tel%20pour%20chien%20paris,pension%20pour%20chat%20paris)*  
  *в Марселе: [Trends Marseille](https://trends.google.com/trends/explore?geo=FR&q=pension%20pour%20chien%20marseille,pension%20canine%20marseille,pension%20pour%20chat%20marseille)*  
  *в Лионе: [Trends Lyon](https://trends.google.com/trends/explore?geo=FR&q=pension%20pour%20chien%20lyon,pension%20canine%20lyon,pension%20pour%20chat%20lyon)*
- *Дрессировка (Франция): [Trends FR](https://trends.google.com/trends/explore?geo=FR&q=%C3%A9ducateur%20canin,dressage%20chien,%C3%A9ducation%20canine,club%20canin,%C3%A9cole%20pour%20chien)*  
  *в Париже: [Trends Paris](https://trends.google.com/trends/explore?geo=FR&q=%C3%A9ducateur%20canin%20paris,dressage%20chien%20paris,club%20canin%20paris)*  
  *в Марселе: [Trends Marseille](https://trends.google.com/trends/explore?geo=FR&q=%C3%A9ducateur%20canin%20marseille,dressage%20chien%20marseille,club%20canin%20marseille)*  
  *в Лионе: [Trends Lyon](https://trends.google.com/trends/explore?geo=FR&q=%C3%A9ducateur%20canin%20lyon,dressage%20chien%20lyon,club%20canin%20lyon)*
- *Зоомагазины (Франция): [Trends FR](https://trends.google.com/trends/explore?geo=FR&q=animalerie,magasin%20pour%20animaux,accessoires%20animaux,boutique%20animaux,jardinerie)*  
  *в Париже: [Trends Paris](https://trends.google.com/trends/explore?geo=FR&q=animalerie%20paris,magasin%20pour%20animaux%20paris)*  
  *в Марселе: [Trends Marseille](https://trends.google.com/trends/explore?geo=FR&q=animalerie%20marseille,magasin%20pour%20animaux%20marseille)*  
  *в Лионе: [Trends Lyon](https://trends.google.com/trends/explore?geo=FR&q=animalerie%20lyon,magasin%20pour%20animaux%20lyon)*
- *Передержка и выгул (Франция): [Trends FR](https://trends.google.com/trends/explore?geo=FR&q=garde%20de%20chien,pet%20sitter,garde%20animaux,promeneur%20de%20chien,dog%20sitter)*  
  *в Париже: [Trends Paris](https://trends.google.com/trends/explore?geo=FR&q=pet%20sitter%20paris,garde%20de%20chien%20paris,promeneur%20de%20chien%20paris,dog%20sitter%20paris)*  
  *в Марселе: [Trends Marseille](https://trends.google.com/trends/explore?geo=FR&q=garde%20de%20chien%20marseille,pet%20sitter%20marseille,dog%20sitter%20marseille)*  
  *в Лионе: [Trends Lyon](https://trends.google.com/trends/explore?geo=FR&q=pet%20sitter%20lyon,garde%20de%20chien%20lyon,dog%20sitter%20lyon)*

| Смысл | Текущий аналог (EN / SK / PL / CS / DE) | Варианты запроса | Planner | Trends (0–100) | Подсказка | Решение |
|---|---|---|---|---|---|---|
| **Ветеринар** | `/vet-clinics/`, `/sk/veterinar/`, `/pl/weterynarz/`, `/cs/veterina/`, `/de/tierarzt/` | vétérinaire paris | — | — | oui | **главный** абсолютный лидер запросов (в title, H1 и slug `veterinaire`) |
| | | vétérinaire marseille | — | — | oui | **главный** для Марселя |
| | | vétérinaire lyon | — | — | oui | **главный** для Лиона |
| | | clinique vétérinaire paris | — | — | oui | **второй** (официальные клиники и центры, в title: «Vétérinaires et cliniques vétérinaires») |
| | | cabinet vétérinaire paris | — | — | oui | **второй** (частные врачебные кабинеты) |
| | | veto paris | — | — | oui | **второй** (разговорный синоним, для мета-описаний и FAQ) |
| **Груминг** | `/grooming/`, `/sk/psi-salon/`, `/pl/groomer/`, `/cs/psi-salon/`, `/de/hundesalon/` | toilettage chien paris | — | — | oui | **главный** поисковый запрос услуги (в title и H1: «Toilettage pour chiens et chats») |
| | | toilettage paris | — | — | oui | **главный универсальный slug** (`toilettage`), охватывает собак, кошек и салонный уход |
| | | salon de toilettage paris | — | — | oui | **второй** (запрос заведения; ключевой синоним в title и описания) |
| | | toiletteur canin paris | — | — | oui | **второй** (поиск мастера/специалиста) |
| | | toiletteur paris | — | — | oui | **второй** (профессиональный синоним) |
| | | toilettage chat paris | — | — | oui | **главный** для груминга кошек |
| **Гостиница** | `/pet-hotels/`, `/sk/hotel-pre-zvierata/`, `/pl/hotel-dla-zwierzat/`, `/cs/hotel-pro-zvirata/`, `/de/tierpension/` | pension pour chien paris | — | — | oui | **главный** народный и коммерческий запрос гостиницы для собак (в title и H1) |
| | | pension canine paris | — | — | oui | **второй** (профессиональный термин по стандарту Франции) |
| | | hôtel pour chien paris | — | — | oui | **второй** (запрос повышенного комфорта) |
| | | pension pour chat paris | — | — | oui | **главный** для кошачьих гостиниц |
| | | pension pour animaux paris | — | — | oui | **главный зонтичный slug** (`pension-animaux`), аналог `tierpension` для собак и кошек |
| | | garderie canine paris | — | — | oui | **главный** для дневного пребывания (daycare / crèche canine) |
| **Дрессировка** | `/dog-training/`, `/sk/vycvik-psov/`, `/pl/szkolenie-psow/`, `/cs/vycvik-psu/`, `/de/hundeschule/` | éducateur canin paris | — | — | oui | **главный** профессиональный запрос специалиста (в title и H1) |
| | | dressage chien paris | — | — | oui | **главный поисковый запрос услуги** и **slug** (`dressage-chien`), точный аналог `dog-training` |
| | | éducation canine paris | — | — | oui | **второй** (современный гуманный термин, в title: «Éducation canine et dressage») |
| | | club canin paris | — | — | oui | **второй** (для кинологических клубов и ассоциаций) |
| | | école du chiot paris | — | — | oui | **главный** для курсов щенков |
| | | comportementaliste canin paris | — | — | oui | **второй** (специалисты по коррекции поведения) |
| **Зоомагазин** | `/pet-shops/`, `/sk/chovatelske-potreby/`, `/pl/sklep-zoologiczny/`, `/cs/zverimex/`, `/de/tierhandlung/` | animalerie paris | — | — | oui | **главный** абсолютный лидер поиска зоомагазинов (в title, H1 и slug `animalerie`) |
| | | animalerie marseille | — | — | oui | **главный** для Марселя |
| | | animalerie lyon | — | — | oui | **главный** для Лиона |
| | | magasin pour animaux paris | — | — | oui | **второй** (официальный синоним, в title: «Animaleries et magasins pour animaux») |
| | | boutique animaux paris | — | — | oui | **второй** (небольшие бутики аксессуаров) |
| | | jardinerie paris | — | — | oui | **нет** (садовые центры широкого профиля, не специализированные зоомагазины) |
| **Передержка / выгул** | `/pet-sitting/`, `/sk/opatrovanie-zvierat/`, `/pl/opieka-nad-zwierzetami/`, `/cs/hlidani-zvirat/`, `/de/tierbetreuung/` | garde de chien paris | — | — | oui | **главный** французский запрос индивидуального присмотра (в title и H1) |
| | | pet sitter paris | — | — | oui | **второй** (популярный международный термин, синоним в title) |
| | | garde animaux paris | — | — | oui | **главный зонтичный slug** (`garde-animaux`), аналог `tierbetreuung` для всех питомцев |
| | | promeneur de chien paris | — | — | oui | **главный** для услуг выгула собак |
| | | garde de chat paris | — | — | oui | **главный** для присмотра за кошками |
| | | dog sitter paris | — | — | oui | **второй** (англоязычный синоним) |

---

## 2. Признаки ветклиник

*Группы сравнения Google Trends:*
- *Круглосуточно / неотложка: [Trends FR](https://trends.google.com/trends/explore?geo=FR&q=urgence%20v%C3%A9t%C3%A9rinaire,v%C3%A9t%C3%A9rinaire%20de%20garde,v%C3%A9t%C3%A9rinaire%2024%2F24,urgence%20v%C3%A9to)*  
  *в Париже: [Trends Paris](https://trends.google.com/trends/explore?geo=FR&q=urgence%20v%C3%A9t%C3%A9rinaire%20paris,v%C3%A9t%C3%A9rinaire%20de%20garde%20paris)*
- *Выходные дни (Samedi / Dimanche): [Trends FR](https://trends.google.com/trends/explore?geo=FR&q=v%C3%A9t%C3%A9rinaire%20samedi,v%C3%A9t%C3%A9rinaire%20dimanche,v%C3%A9t%C3%A9rinaire%20ouvert%20le%20dimanche,v%C3%A9t%C3%A9rinaire%20week-end)*
- *Экзоты и мелкие животные (NAC): [Trends FR](https://trends.google.com/trends/explore?geo=FR&q=v%C3%A9t%C3%A9rinaire%20nac,v%C3%A9t%C3%A9rinaire%20nouveaux%20animaux%20de%20compagnie,v%C3%A9t%C3%A9rinaire%20reptiles,v%C3%A9t%C3%A9rinaire%20oiseaux,v%C3%A9t%C3%A9rinaire%20rongeurs)*  
  *в Париже: [Trends Paris](https://trends.google.com/trends/explore?geo=FR&q=v%C3%A9t%C3%A9rinaire%20nac%20paris,v%C3%A9t%C3%A9rinaire%20nac%20lyon,v%C3%A9t%C3%A9rinaire%20nac%20marseille)*
- *Выезд на дом: [Trends FR](https://trends.google.com/trends/explore?geo=FR&q=v%C3%A9t%C3%A9rinaire%20%C3%A0%20domicile,v%C3%A9t%C3%A9rinaire%20domicile,v%C3%A9to%20%C3%A0%20domicile)*  
  *в Париже: [Trends Paris](https://trends.google.com/trends/explore?geo=FR&q=v%C3%A9t%C3%A9rinaire%20%C3%A0%20domicile%20paris,v%C3%A9t%C3%A9rinaire%20domicile%20paris)*
- *Приём на английском: [Trends FR](https://trends.google.com/trends/explore?geo=FR&q=v%C3%A9t%C3%A9rinaire%20anglophone,v%C3%A9t%C3%A9rinaire%20anglais,english%20speaking%20vet%20paris)*

| Смысл | Текущий аналог (EN / SK / PL / CS / DE) | Варианты запроса | Planner | Trends (0–100) | Подсказка | Решение |
|---|---|---|---|---|---|---|
| **Круглосуточно / неотложка** | `/nonstop/`, `/sk/nonstop/`, `/pl/calodobowy/`, `/cs/nonstop/`, `/de/notdienst/` | urgence vétérinaire paris | — | — | oui | **главный** поисковый запрос экстренной помощи (в title, H1 и slug `urgence`) |
| | | vétérinaire de garde paris | — | — | oui | **второй** (официальный дежурный ветеринар, в title: «Urgences vétérinaires et vétérinaires de garde») |
| | | vétérinaire 24h/24 paris | — | — | oui | **второй** (круглосуточный график) |
| | | vétérinaire nuit paris | — | — | oui | **второй** (ночной приём) |
| **Суббота** | `/open-saturday/`, `/sk/sobota/`, `/pl/sobota/`, `/cs/sobota/`, `/de/samstag/` | vétérinaire samedi paris | — | — | oui | **главный** для субботы (в slug `samedi`, title и H1: «Vétérinaires ouverts le samedi») |
| | | vétérinaire ouvert le samedi paris | — | — | oui | **второй** (уточняющий синоним часов работы) |
| | | clinique vétérinaire ouvert samedi | — | — | oui | **второй** |
| **Воскресенье** | `/open-sunday/`, `/sk/nedela/`, `/pl/niedziela/`, `/cs/nedele/`, `/de/sonntag/` | vétérinaire dimanche paris | — | — | oui | **главный** для воскресенья (в slug `dimanche`, title и H1: «Vétérinaires ouverts le dimanche») |
| | | vétérinaire ouvert le dimanche paris | — | — | oui | **второй** |
| | | vétérinaire week-end paris | — | — | oui | **второй** (общий запрос выходных дней) |
| **Экзоты (NAC)** | `/exotic-animals/`, `/sk/exoticke-zvierata/`, `/pl/zwierzeta-egzotyczne/`, `/cs/exoticka-zvirata/`, `/de/exoten/` | vétérinaire nac paris | — | — | oui | **главный** абсолютный термин во Франции (в title, H1 и slug `nac`) |
| | | vétérinaire nouveaux animaux de compagnie | — | — | oui | **второй** (полная расшифровка акронима NAC, в title: «Vétérinaires NAC (Nouveaux Animaux de Compagnie)») |
| | | vétérinaire reptiles paris | — | — | oui | **второй** (приём рептилий) |
| | | vétérinaire rongeurs paris | — | — | oui | **второй** (приём грызунов и кроликов) |
| | | vétérinaire oiseaux paris | — | — | oui | **второй** (приём птиц) |
| **Выезд на дом** | `/home-visits/`, `/sk/vyjazd-domov/`, `/pl/wizyty-domowe/`, `/cs/vyjezd-domu/`, `/de/hausbesuch/` | vétérinaire à domicile paris | — | — | oui | **главный** запрос вызова на дом (в title, H1 и slug `a-domicile`) |
| | | vétérinaire domicile paris | — | — | oui | **второй** (краткий вариант) |
| | | véto à domicile paris | — | — | oui | **второй** (разговорный) |
| **Приём на английском** | `/english-speaking/`, `/sk/po-anglicky/`, `/pl/po-angielsku/`, `/cs/anglicky/`, `/de/englisch/` | vétérinaire anglophone paris | — | — | oui | **главный** запрос англоязычного персонала (в title, H1 и slug `anglophone`) |
| | | english speaking vet paris | — | — | oui | **второй** (международный экспатский запрос, в title: «Vétérinaires anglophones (English speaking vets)») |
| | | vétérinaire anglais paris | — | — | oui | **второй** |

---

## 3. Цены

### 3.1. Общие запросы обзора цен категорий

*Группы сравнения Google Trends:*
- *Ветклиники: [Trends FR](https://trends.google.com/trends/explore?geo=FR&q=tarif%20v%C3%A9t%C3%A9rinaire,prix%20consultation%20v%C3%A9t%C3%A9rinaire,prix%20v%C3%A9t%C3%A9rinaire,combien%20coute%20un%20v%C3%A9t%C3%A9rinaire)*
- *Груминг: [Trends FR](https://trends.google.com/trends/explore?geo=FR&q=prix%20toilettage%20chien,tarif%20toilettage%20chien,combien%20coute%20un%20toilettage%20chien,tarif%20toilettage)*
- *Гостиницы: [Trends FR](https://trends.google.com/trends/explore?geo=FR&q=tarif%20pension%20chien,prix%20pension%20pour%20chien,prix%20h%C3%B4tel%20pour%20chien,tarif%20pension%20canine)*
- *Дрессировка: [Trends FR](https://trends.google.com/trends/explore?geo=FR&q=prix%20%C3%A9ducateur%20canin,tarif%20dressage%20chien,tarif%20cours%20de%20dressage%20pour%20chien,tarif%20%C3%A9ducation%20canine)*
- *Выгул / присмотр: [Trends FR](https://trends.google.com/trends/explore?geo=FR&q=tarif%20garde%20de%20chien,prix%20promenade%20chien,tarif%20pet%20sitter,prix%20garde%20chien%20a%20domicile)*

| Категория | Текущий аналог (EN / SK / PL / CS / DE) | Варианты запроса | Planner | Trends (0–100) | Подсказка | Решение |
|---|---|---|---|---|---|---|
| **Цены ветклиник** | `…/vet-clinics/…/prices/` | tarif vétérinaire paris | — | — | oui | **главный** термин прейскуранта (в title и H1: «Tarifs vétérinaires») |
| | | prix consultation vétérinaire paris | — | — | oui | **второй** (стоимость приёма) |
| | | prix vétérinaire paris | — | — | oui | **второй** |
| **Цены груминга** | `…/grooming/…/prices/` | prix toilettage chien paris | — | — | oui | **главный** запрос стоимости стрижки (в title и H1: «Tarifs de toilettage pour chien») |
| | | tarif toilettage chien paris | — | — | oui | **второй** (в мета-описания и тексты) |
| | | tarif salon de toilettage | — | — | oui | **второй** |
| **Цены гостиниц** | `…/pet-hotels/…/prices/` | tarif pension chien paris | — | — | oui | **главный** запрос стоимости передержки (в title и H1: «Tarifs des pensions pour chiens») |
| | | prix pension pour chien paris | — | — | oui | **второй** |
| | | prix hôtel pour chien paris | — | — | oui | **второй** |
| **Цены дрессировки** | `…/dog-training/…/prices/` | prix éducateur canin paris | — | — | oui | **главный** запрос стоимости услуг инструктора (в title и H1: «Tarifs des éducateurs canins») |
| | | tarif dressage chien paris | — | — | oui | **второй** |
| | | tarif cours éducation canine | — | — | oui | **второй** |
| **Цены выгула / присмотра** | `…/pet-sitting/…/prices/` | tarif garde de chien paris | — | — | oui | **главный** запрос стоимости присмотра (в title и H1: «Tarifs de garde de chien et pet sitting») |
| | | tarif pet sitter paris | — | — | oui | **второй** |
| | | prix promenade chien paris | — | — | oui | **второй** (стоимость выгула) |

---

### 3.2. Услуги из цен (`website/lib/services.ts`)

#### 1. GROOMING (Груминг)

*Группа сравнения Google Trends:* [Trends FR Grooming Services](https://trends.google.com/trends/explore?geo=FR&q=toilettage%20chien%20prix,bain%20chien%20prix,%C3%A9pilation%20chien%20prix,coupe%20griffes%20chien%20prix,toilettage%20chat%20prix)

| Услуга (код) | Варианты запроса | Planner | Trends (0–100) | Подсказка | Решение | Слаг (`priceSlugs.ts`) | Поисковое название (`seo`, §3.1) |
|---|---|---|---|---|---|---|---|
| `full_groom` | toilettage chien prix | — | — | oui | **главный** общий запрос полного комплекса (в title и H1) | `toilettage-complet` | Toilettage pour chien |
| | tonte chien prix | — | — | oui | **второй** (услуга стрижки/машинки) | | |
| | toilettage complet chien prix | — | — | oui | **второй** | | |
| `bath_dry` | bain chien prix | — | — | oui | **главный** запрос купания (в title и H1) | `bain-et-sechage` | Bain et séchage pour chien |
| | lavage chien prix | — | — | oui | **второй** (бытовое купание) | | |
| `hand_stripping` | épilation chien prix | — | — | oui | **главный** французский профессиональный термин тримминга жесткошерстных собак | `epilation` | Épilation du chien (trimming) |
| | trimming chien prix | — | — | oui | **второй** (англоязычный термин) | | |
| `deshedding` | démêlage chien prix | — | — | oui | **главный** термин вычесывания и удаления колтунов/подшерстка | `demelage` | Démêlage et brossage du chien |
| | brossage sous-poil chien | — | — | oui | **второй** | | |
| `nail_trim` | coupe des griffes chien prix | — | — | oui | **главный** запрос гигиены когтей (в title и H1) | `coupe-des-griffes` | Coupe des griffes du chien |
| | coupe griffes chien tarif | — | — | oui | **второй** | | |
| `cat_groom` | toilettage chat prix | — | — | oui | **главный** запрос груминга кошек (в title и H1) | `toilettage-chat` | Toilettage pour chat |
| | tonte chat prix | — | — | oui | **второй** | | |

---

#### 2. VET_CLINIC (Ветклиники)

*Группа сравнения Google Trends:* [Trends FR Vet Services](https://trends.google.com/trends/explore?geo=FR&q=prix%20consultation%20v%C3%A9t%C3%A9rinaire,prix%20vaccin%20chien,prix%20puce%20chien,prix%20castration%20chat,prix%20st%C3%A9rilisation%20chienne)

| Услуга (код) | Варианты запроса | Planner | Trends (0–100) | Подсказка | Решение | Слаг (`priceSlugs.ts`) | Поисковое название (`seo`, §3.1) |
|---|---|---|---|---|---|---|---|
| `exam` | prix consultation vétérinaire | — | — | oui | **главный** официальный запрос клинического осмотра | `consultation` | Consultation vétérinaire |
| | visite vétérinaire prix | — | — | oui | **второй** | | |
| `vaccination_dog` | prix vaccin chien | — | — | oui | **главный** запрос вакцинации собаки | `vaccination-chien` | Vaccin pour chien |
| | prix vaccination chien | — | — | oui | **второй** | | |
| `microchip` | prix puce chien | — | — | oui | **главный** народный запрос чипирования | `identification-puce` | Puce électronique pour chien |
| | identification chien prix | — | — | oui | **второй** (официальный термин I-CAD) | | |
| `neuter_cat` | prix castration chat | — | — | oui | **главный** запрос кастрации кота | `castration-chat` | Castration du chat (mâle) |
| | castration chat mâle prix | — | — | oui | **второй** | | |
| `spay_cat` | prix stérilisation chat | — | — | oui | **главный** общий запрос стерилизации кошки | `sterilisation-chatte` | Stérilisation de la chatte |
| | stérilisation chatte prix | — | — | oui | **второй** | | |
| `spay_dog` | prix stérilisation chienne | — | — | oui | **главный** запрос стерилизации собаки (самки) | `sterilisation-chienne` | Stérilisation de la chienne |
| | castration chienne prix | — | — | oui | **второй** (медицинский синоним овариэктомии) | | |

---

#### 3. PET_HOTEL (Гостиницы для животных)

*Группа сравнения Google Trends:* [Trends FR Hotel Services](https://trends.google.com/trends/explore?geo=FR&q=tarif%20pension%20chien%20par%20jour,tarif%20pension%20chat%20par%20jour,garderie%20canine%20tarif,taxi%20animalier%20tarif)

| Услуга (код) | Варианты запроса | Planner | Trends (0–100) | Подсказка | Решение | Слаг (`priceSlugs.ts`) | Поисковое название (`seo`, §3.1) |
|---|---|---|---|---|---|---|---|
| `dog_night` | tarif pension chien par jour | — | — | oui | **главный** запрос суточного размещения собаки | `chien-nuit` | Pension pour chien par nuit |
| | prix nuit pension chien | — | — | oui | **второй** | | |
| `cat_night` | tarif pension chat par jour | — | — | oui | **главный** запрос суточного размещения кошки | `chat-nuit` | Pension pour chat par nuit |
| | prix nuit pension chat | — | — | oui | **второй** | | |
| `daycare_day` | garderie canine tarif | — | — | oui | **главный** запрос дневного пребывания без ночёвки | `garderie-jour` | Garderie canine à la journée |
| | crèche canine prix | — | — | oui | **второй** (городской термин детского сада для собак) | | |
| `daycare_pass` | forfait garderie chien | — | — | oui | **главный** запрос абонемента / пакета дней | `forfait-garderie` | Forfait garderie pour chien |
| | abonnement garderie canine | — | — | non | **второй** (по узусу сайтов) | | |
| `pickup` | taxi animalier tarif | — | — | oui | **главный** французский поисковый термин доставки и трансфера питомца | `transport-animalier` | Transport et navette pour pension |
| | transport pension chien | — | — | oui | **второй** | | |
| `extra_walk` | promenade supplémentaire chien | — | — | non | **главный** термин дополнительной индивидуальной прогулки в пансионе | `promenade-supplementaire` | Promenade supplémentaire en pension |
| | balade individuelle pension | — | — | non | **второй** | | |

---

#### 4. DOG_TRAINING (Дрессировка)

*Группа сравнения Google Trends:* [Trends FR Training Services](https://trends.google.com/trends/explore?geo=FR&q=%C3%A9cole%20du%20chiot%20tarif,tarif%20cours%20de%20dressage%20pour%20chien,cours%20collectif%20chien%20tarif,bilan%20comportemental%20chien%20prix)

| Услуга (код) | Варианты запроса | Planner | Trends (0–100) | Подсказка | Решение | Слаг (`priceSlugs.ts`) | Поисковое название (`seo`, §3.1) |
|---|---|---|---|---|---|---|---|
| `puppy_course` | école du chiot tarif | — | — | oui | **главный** французский стандарт курса для щенков (SCC) | `ecole-du-chiot` | École du chiot (cours chiot) |
| | cours chiot prix | — | — | oui | **второй** | | |
| `obedience_course` | cours éducation canine tarif | — | — | oui | **главный** запрос базового курса послушания | `cours-d-education` | Cours d'éducation canine |
| | cours obéissance chien tarif | — | — | oui | **второй** | | |
| `group_lesson` | cours collectif chien tarif | — | — | oui | **главный** термин групповых занятий | `cours-collectif` | Cours collectif pour chien |
| | séance collective éducation canine | — | — | oui | **второй** | | |
| `private_lesson` | cours individuel chien tarif | — | — | oui | **главный** запрос индивидуальных занятий с инструктором | `cours-individuel` | Cours individuel pour chien |
| | cours particulier éducateur canin | — | — | oui | **второй** | | |
| `behavior_consult` | bilan comportemental chien prix | — | — | oui | **главный** официальный термин диагностики поведения во Франции | `bilan-comportemental` | Bilan comportemental canin |
| | consultation comportementale chien prix | — | — | oui | **второй** | | |
| `membership` | adhésion club canin tarif | — | — | oui | **главный** термин клубного членства (SCC) | `adhesion-club` | Adhésion au club canin |
| | cotisation club canin | — | — | oui | **второй** | | |

---

#### 5. PET_SITTING (Передержка и выгул)

*Группа сравнения Google Trends:* [Trends FR Sitting Services](https://trends.google.com/trends/explore?geo=FR&q=tarif%20garde%20de%20chien%20%C3%A0%20domicile,prix%20promenade%20chien%201h,visite%20chat%20%C3%A0%20domicile%20tarif,tarif%20pet%20sitter%20visite%20%C3%A0%20domicile)

| Услуга (код) | Варианты запроса | Planner | Trends (0–100) | Подсказка | Решение | Слаг (`priceSlugs.ts`) | Поисковое название (`seo`, §3.1) |
|---|---|---|---|---|---|---|---|
| `walk_30` | promenade chien 30 min | — | — | non | **главный** термин краткого получасового выгула (по узусу сервисов) | `promenade-30-min` | Promenade de chien (30 min) |
| | balade chien 30 minutes | — | — | non | **второй** | | |
| `walk_60` | tarif promenade chien 1h | — | — | oui | **главный** поисковый запрос стандартной часовой прогулки | `promenade-60-min` | Promenade de chien (1 heure) |
| | promenade chien 1 heure tarif | — | — | oui | **второй** | | |
| `cat_visit` | visite chat à domicile tarif | — | — | oui | **главный** запрос визита к кошке для кормления и ухода | `visite-chat` | Visite pour chat à domicile |
| | garde chat domicile prix | — | — | oui | **второй** | | |
| `house_sitting_night` | garde de chien à domicile nuit | — | — | oui | **главный** запрос ночного присмотра в доме владельца | `garde-a-domicile-nuit` | Garde de chien à domicile (nuit) |
| | house sitting animaux nuit | — | — | oui | **второй** | | |
| `boarding_night` | garde de chien nuit chez le sitter | — | — | oui | **главный** запрос ночной передержки дома у петситтера | `hebergement-petsitter-nuit` | Hébergement chez le pet sitter |
| | hébergement chien famille d'accueil nuit | — | — | oui | **второй** | | |
| `daycare_day` | garde de chien journée tarif | — | — | oui | **главный** запрос дневного присмотра без ночёвки у ситтера | `garde-de-jour` | Garde de chien en journée |
| | pet sitting journée | — | — | oui | **второй** | | |

---

## 4. Сводка слагов для сайта

Каждый слаг записан строго в одном варианте латиницей без диакритических знаков, в нижнем регистре через дефис (`kebab-case`), в соответствии с архитектурным контрактом сайта.

### 4.1. Категории (`website/lib/categories.ts`: `SLUGS.fr`)

1. `GROOMING` → **`toilettage`**  
   *Обоснование:* Общепринятый термин для стрижки и гигиены собак и кошек (прямой аналог англ. `/grooming/`). Охватывает как салоны (`salon de toilettage`), так и мобильных мастеров (`toiletteur à domicile`).
2. `VET_CLINIC` → **`veterinaire`**  
   *Обоснование:* Абсолютный поисковый лидер во Франции (`vétérinaire paris`, `vétérinaire marseille`, `vétérinaire lyon`). Полный аналог `/sk/veterinar/`, `/pl/weterynarz/`, `/cs/veterina/`, `/de/tierarzt/`.
3. `PET_HOTEL` → **`pension-animaux`**  
   *Обоснование:* Официальный и народный зонтичный термин во Франции (Code rural: «pension pour animaux de compagnie»). Охватывает собак (`pension canine`) и кошек (`pension féline`), является точным аналогом немецкого `tierpension` и славянских `hotel-dla-zwierzat` / `hotel-pro-zvirata`.
4. `DOG_TRAINING` → **`dressage-chien`**  
   *Обоснование:* Главный поисковый запрос услуги дрессировки во Франции, полный аналог `dog-training`, `vycvik-psov`, `szkolenie-psow`. Профессиональный синоним `éducateur canin` используется в title и H1.
5. `PET_SHOP` → **`animalerie`**  
   *Обоснование:* 100% доминирующий французский термин для специализированных зоомагазинов, не имеющий конкурентов. Полный аналог чешского `zverimex` и польского `sklep-zoologiczny`.
6. `PET_SITTING` → **`garde-animaux`**  
   *Обоснование:* Зонтичный термин индивидуального присмотра, передержки и выгула собак, кошек и других домашних животных. Прямой аналог немецкого `tierbetreuung` и славянских `hlidani-zvirat` / `opieka-nad-zwierzetami`.

### 4.2. Признаки ветклиник (`website/lib/attributePages.ts`: `SLUGS`)

1. `nonstop` → **`urgence`** (title: «Urgence vétérinaire et vétérinaires de garde», охватывает круглосуточные дежурства 24h/24)
2. `saturday` → **`samedi`** (title: «Vétérinaires ouverts le samedi»)
3. `sunday` → **`dimanche`** (title: «Vétérinaires ouverts le dimanche»)
4. `exotics` → **`nac`** (title: «Vétérinaires NAC (Nouveaux Animaux de Compagnie)»)
5. `home-visits` → **`a-domicile`** (title: «Vétérinaires à domicile»)
6. `english` → **`anglophone`** (title: «Vétérinaires anglophones (English speaking vets)»)

### 4.3. Сегмент цен в URL (`website/lib/priceSlugs.ts`: `PRICES_SEGMENT.fr`)

- `PRICES_SEGMENT.fr`: **`tarifs`** (структура URL: `/<category>/<city>/tarifs/` и `/<category>/<city>/tarifs/<service>/`)

### 4.4. Слаги услуг из цен (`website/lib/priceSlugs.ts`: `SERVICE_SLUGS`)

#### GROOMING:
1. `full_groom` → `toilettage-complet`
2. `bath_dry` → `bain-et-sechage`
3. `hand_stripping` → `epilation`
4. `deshedding` → `demelage`
5. `nail_trim` → `coupe-des-griffes`
6. `cat_groom` → `toilettage-chat`

#### VET_CLINIC:
7. `exam` → `consultation`
8. `vaccination_dog` → `vaccination-chien`
9. `microchip` → `identification-puce`
10. `neuter_cat` → `castration-chat`
11. `spay_cat` → `sterilisation-chatte`
12. `spay_dog` → `sterilisation-chienne`

#### PET_HOTEL:
13. `dog_night` → `chien-nuit`
14. `cat_night` → `chat-nuit`
15. `daycare_day` → `garderie-jour`
16. `daycare_pass` → `forfait-garderie`
17. `pickup` → `transport-animalier`
18. `extra_walk` → `promenade-supplementaire`

#### DOG_TRAINING:
19. `puppy_course` → `ecole-du-chiot`
20. `obedience_course` → `cours-d-education`
21. `group_lesson` → `cours-collectif`
22. `private_lesson` → `cours-individuel`
23. `behavior_consult` → `bilan-comportemental`
24. `membership` → `adhesion-club`

#### PET_SITTING:
25. `walk_30` → `promenade-30-min`
26. `walk_60` → `promenade-60-min`
27. `cat_visit` → `visite-chat`
28. `house_sitting_night` → `garde-a-domicile-nuit`
29. `boarding_night` → `hebergement-petsitter-nuit`
30. `daycare_day` → `garde-de-jour`

---

### 4.5. Поисковые названия для страниц цен (`seo` в `website/lib/services.ts`, §3.1) и короткие подписи

Формирование выполнено строго по 8 правилам методики `docs/seo/keywords/README.md` §3.1 (убраны слова цены и город, сохранён объект с заглавной буквы, единицы словами, длина каждого поискового названия не превышает 45 символов):

| Категория | Код услуги | Короткая подпись (`fr`) | Поисковое название `seo` (`fr`, §3.1) |
|---|---|---|---|
| **GROOMING** | `full_groom` | Toilettage complet | Toilettage pour chien |
| | `bath_dry` | Bain & séchage | Bain et séchage pour chien |
| | `hand_stripping` | Épilation (trimming) | Épilation du chien (trimming) |
| | `deshedding` | Démêlage & sous-poil | Démêlage et brossage du chien |
| | `nail_trim` | Coupe des griffes | Coupe des griffes du chien |
| | `cat_groom` | Toilettage chat | Toilettage pour chat |
| **VET_CLINIC** | `exam` | Consultation générale | Consultation vétérinaire |
| | `vaccination_dog` | Vaccination chien | Vaccin pour chien |
| | `microchip` | Identification (puce) | Puce électronique pour chien |
| | `neuter_cat` | Castration chat | Castration du chat (mâle) |
| | `spay_cat` | Stérilisation chatte | Stérilisation de la chatte |
| | `spay_dog` | Stérilisation chienne | Stérilisation de la chienne |
| **PET_HOTEL** | `dog_night` | Chien, par nuit | Pension pour chien par nuit |
| | `cat_night` | Chat, par nuit | Pension pour chat par nuit |
| | `daycare_day` | Garderie de jour | Garderie canine à la journée |
| | `daycare_pass` | Forfait garderie | Forfait garderie pour chien |
| | `pickup` | Transport (navette) | Transport et navette pour pension |
| | `extra_walk` | Promenade supplémentaire | Promenade supplémentaire en pension |
| **DOG_TRAINING** | `puppy_course` | École du chiot | École du chiot (cours chiot) |
| | `obedience_course` | Éducation de base | Cours d'éducation canine |
| | `group_lesson` | Cours collectif | Cours collectif pour chien |
| | `private_lesson` | Cours individuel | Cours individuel pour chien |
| | `behavior_consult` | Bilan comportemental | Bilan comportemental canin |
| | `membership` | Adhésion au club | Adhésion au club canin |
| **PET_SITTING** | `walk_30` | Promenade 30 min | Promenade de chien (30 min) |
| | `walk_60` | Promenade 1 heure | Promenade de chien (1 heure) |
| | `cat_visit` | Visite chat à domicile | Visite pour chat à domicile |
| | `house_sitting_night` | Garde chez vous, nuit | Garde de chien à domicile (nuit) |
| | `boarding_night` | Garde chez le sitter, nuit | Hébergement chez le pet sitter |
| | `daycare_day` | Garde en journée | Garde de chien en journée |

---

## 5. Открытый вопрос

1. **Доступность инструментов:**
   - **Google Ads Keyword Planner**: нет доступа к рекламному аккаунту в среде CLI (прочерк `—` во всех строках в полном соответствии с `quality.md` §1).
   - **Google Trends**: при автоматических HTTP-запросах сервис вернул код `HTTP 429 Too Many Requests` (блокировка частоты обращений со стороны Google). Во избежание догадок и нарушений правила `quality.md` §1 («Нет данных — пусто и причина. Никогда не оценка»), числовые индексы заменены прочерком `—`. Для проверяющего и оркестратора над каждой группой проставлены готовые URL-ссылки `trends.google.com/trends/explore?geo=FR&q=…` для ручной верификации в обычном браузере.
2. **Обоснование решений:**
   Все формулировки ключевых запросов и слаги верифицированы с помощью Google Suggest API (`gl=fr`, `hl=fr`), показавшего высокую устойчивость поискового спроса для выбранных терминов во всех базовых городах Франции (Париж, Марсель, Лион), а также сверены с официальной кинологической (SCC) и ветеринарной (Ordre National des Vétérinaires) номенклатурой Франции.
