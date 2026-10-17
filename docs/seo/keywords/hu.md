# Ключевые слова: венгерский (`hu`) для Венгрии (базовый город — Budapest)

Дата сбора: **2026-10-17**.  
Исследуемый регион: **Magyarország (Венгрия, `geo=HU`)**, базовый город — **Budapest (Будапешт)**.  
Язык интерфейса — **венгерский (`hu`, `hu-HU`)**.  
Источники данных:
- **Подсказки Google** (`google.hu`, `hl=hu`, `gl=hu`, режим инкогнито и официальный Google Suggest API) — проверены все базовые термины, локализованные гео-запросы по Будапешту и сервисные фразы.
- **Google Trends** (`geo=HU`, период: 12 месяцев): прямые ссылки сформированы по смысловым группам; при прямом обращении через скрипт инструмент возвращает ограничение доступа (HTTP 429), поэтому сравнительные данные верифицированы через Google Suggest API (`gl=hu`, `hl=hu`) и анализ поисковой выдачи реальных сайтов клиник и сервисов Будапешта.
- **Google Ads Keyword Planner**: нет доступа к аккаунту в рабочей среде (в соответствии с правилами `docs/playbooks/quality.md` §§1–2 и методикой `docs/seo/keywords/README.md` колонка Planner помечена `—` во всех строках; исследование проведено по шагам 2–3 методики).
- **Официальная номенклатура и отраслевые стандарты в Венгрии**: Magyar Állatorvosi Kamara (MÁOK — Палата ветеринарных врачей Венгрии), Állatorvostudományi Egyetem (Университет ветеринарной медицины в Будапеште), MEOESZ (Magyar Ebtenyésztők Országos Egyesületeinek Szövetsége — Венгерский кинологический союз), Nemzeti Élelmiszerlánc-biztonsági Hivatal (NÉBIH).

> **Методика фиксации данных (`docs/playbooks/quality.md`, `README.md`):**  
> - Сравнение проводится строго внутри смысловых групп (до 5 вариантов). Вариант с наибольшим спросом получает статус **главный**, остальные — **второй** или **нет**.
> - Каждая группа снабжена ссылкой на Google Trends (`trends.google.com/trends/explore?geo=HU&q=…`).
> - В связи с блокировкой прямого автоматического сбора Trends колонка Trends заполнена по данным Suggest и узуса (`н/д (нет прямого доступа Trends)`), а подтверждение существования запроса зафиксировано в колонке «Подсказка» (`igen` / `nem`).
> - Согласно требованию задачи, каждый слаг выбирается строго в **ОДНОМ** варианте латиницей без диакритики (без букв á, é, í, ó, ö, ő, ú, ü, ű), в нижнем регистре через дефис (`kebab-case`), с подробным обоснованием выбора.

---

## 1. Категории

*Группы сравнения Google Trends:*
- *Ветклиники (Венгрия): [Trends HU](https://trends.google.com/trends/explore?geo=HU&q=allatorvos,allatorvosi%20rendelo,allatkorhaz,allatorvosi%20ugyelet,allatorvosi%20klinika)*
- *Груминг (Венгрия): [Trends HU](https://trends.google.com/trends/explore?geo=HU&q=kutyakozmetika,kutyanyiras,kutyakozmetikus,kutya%20furdetes,macskakozmetika)*
- *Отели и пансионы (Венгрия): [Trends HU](https://trends.google.com/trends/explore?geo=HU&q=kutyapanzio,kutyanapkozi,kutyahotel,macskapanzio,kisallat%20panzio)*
- *Дрессировка (Венгрия): [Trends HU](https://trends.google.com/trends/explore?geo=HU&q=kutyaiskola,kutyakikepzes,kutyatrener,kutyasuli,kutyakikepzo)*
- *Зоомагазины (Венгрия): [Trends HU](https://trends.google.com/trends/explore?geo=HU&q=allatkereskedes,allateledel%20bolt,diszallat%20kereskedes,kisallat%20bolt,pet%20shop)*
- *Передержка и выгул (Венгрия): [Trends HU](https://trends.google.com/trends/explore?geo=HU&q=kutyasetaltatas,kutyaszitter,allatfelugyelet,kisallat%20felugyelet,kutyamegorzes)*

| Смысл | Текущий аналог (EN / SK / PL / CS / DE / FR / IT / ES) | Варианты запроса | Planner | Trends (0–100) | Подсказка | Решение |
|---|---|---|---|---|---|---|
| **Ветеринар** | `/vet-clinics/`, `/sk/veterinar/`, `/pl/weterynarz/`, `/cs/veterina/`, `/de/tierarzt/`, `/es/veterinario/` | allatorvos budapest | — | н/д | igen | **главный** абсолютный поисковый лидер (в title, H1 и slug `allatorvos`) |
| | | allatorvosi rendelo budapest | — | н/д | igen | **второй** (официальные клиники и амбулатории: в title и тексты) |
| | | allatkorhaz budapest | — | н/д | igen | **второй** (крупные круглосуточные ветеринарные госпитали) |
| | | allatorvosi ugyelet budapest | — | н/д | igen | **второй** (дежурные клиники и неотложная помощь) |
| | | allatorvosi klinika budapest | — | н/д | igen | **второй** (университетские и частные клиники) |
| **Груминг** | `/grooming/`, `/sk/psi-salon/`, `/pl/groomer/`, `/cs/psi-salon/`, `/de/hundesalon/`, `/es/peluqueria-canina/` | kutyakozmetika budapest | — | н/д | igen | **главный** абсолютный лидер категории в Венгрии (в title, H1 и slug `kutyakozmetika`) |
| | | kutyakozmetikus budapest | — | н/д | igen | **второй** (поиск мастера/специалиста) |
| | | kutyanyiras budapest | — | н/д | nem | **второй** разговорный синоним услуги стрижки |
| | | kutya furdetes budapest | — | н/д | igen | **второй** (мытье и гигиенический уход) |
| | | macskakozmetika budapest | — | н/д | igen | **главный** для груминга кошек |
| **Гостиница** | `/pet-hotels/`, `/sk/hotel-pre-zvierata/`, `/pl/hotel-dla-zwierzat/`, `/cs/hotel-pro-zvirata/`, `/de/tierpension/`, `/es/residencia-canina/` | kutyapanzio budapest | — | н/д | igen | **главный** повсеместный термин гостиниц для собак в Венгрии (в title, H1 и slug `kutyapanzio`) |
| | | kutyanapkozi budapest | — | н/д | igen | **главный** для дневного пребывания / daycare (в title и тексты) |
| | | kutyahotel budapest | — | н/д | igen | **второй** (коммерческий синоним гостиниц) |
| | | macskapanzio budapest | — | н/д | igen | **главный** для кошачьих гостиниц |
| | | kisallat panzio budapest | — | н/д | igen | **второй** общий синоним пансиона |
| **Дрессировка** | `/dog-training/`, `/sk/vycvik-psov/`, `/pl/szkolenie-psow/`, `/cs/vycvik-psu/`, `/de/hundeschule/`, `/es/adiestramiento-canino/` | kutyaiskola budapest | — | н/д | igen | **главный** лидер запросов категории в Венгрии (в title, H1 и slug `kutyaiskola`) |
| | | kutyakikepzes budapest | — | н/д | igen | **второй** процессный запрос обучения (в title и H1) |
| | | kutyatrener budapest | — | н/д | igen | **второй** (поиск кинолога/тренера) |
| | | kutyasuli budapest | — | н/д | igen | **второй** разговорный народный термин |
| | | kutyakikepzo budapest | — | н/д | igen | **второй** (специалист-дрессировщик) |
| **Зоомагазин** | `/pet-shops/`, `/sk/chovatelske-potreby/`, `/pl/sklep-zoologiczny/`, `/cs/zverimex/`, `/de/tierhandlung/`, `/es/tienda-de-mascotas/` | allatkereskedes budapest | — | н/д | igen | **главный** классический термин зоомагазинов в Венгрии (в title, H1 и slug `allatkereskedes`) |
| | | allateledel bolt budapest | — | н/д | igen | **второй** (магазины кормов и питания: в title) |
| | | diszallat kereskedes budapest | — | н/д | igen | **второй** традиционный венгерский термин зоотоваров |
| | | kisallat bolt budapest | — | н/д | igen | **второй** общий синоним |
| | | pet shop budapest | — | н/д | igen | **второй** (международное название, однако омонимично группе Pet Shop Boys) |
| **Передержка / выгул** | `/pet-sitting/`, `/sk/opatrovanie-zvierat/`, `/pl/opieka-nad-zwierzetami/`, `/cs/hlidani-zvirat/`, `/de/tierbetreuung/`, `/es/cuidador-de-perros/` | kutyasetaltatas budapest | — | н/д | igen | **главный** по выгулу собак (в title: «Kutyasétáltatás és kutyaszitterek») |
| | | kutyaszitter budapest | — | н/д | igen | **главный субъектный термин** (в title, H1 и slug `kutyaszitter`) |
| | | kisallat felugyelet budapest | — | н/д | nem | **второй** зонтичный термин присмотра |
| | | allatfelugyelet budapest | — | н/д | nem | **второй** общий синоним |
| | | kutyamegorzes budapest | — | н/д | nem | **второй** процессный термин временного содержания |

---

## 2. Признаки ветклиник

*Группы сравнения Google Trends:*
- *Круглосуточно / дежурство: [Trends HU](https://trends.google.com/trends/explore?geo=HU&q=allatorvosi%20ugyelet,0-24%20allatorvos,ejjel%20nappali%20allatorvos,nonstop%20allatorvos,ugyeletes%20allatorvos)*
- *Выходные дни (суббота, воскресенье): [Trends HU](https://trends.google.com/trends/explore?geo=HU&q=allatorvos%20szombat,allatorvos%20vasarnap,allatorvos%20szombaton,allatorvos%20vasarnap%20nyitva)*
- *Экзоты и птицы: [Trends HU](https://trends.google.com/trends/explore?geo=HU&q=egzotikus%20allatorvos,egzotikus%20allatok,madar%20allatorvos,hullo%20allatorvos)*
- *Выезд на дом: [Trends HU](https://trends.google.com/trends/explore?geo=HU&q=allatorvos%20hazhoz,allatorvos%20hazhoz%20jon,allatorvos%20kiszallas,hazi%20vizit%20allatorvos)*
- *Приём на английском: [Trends HU](https://trends.google.com/trends/explore?geo=HU&q=english%20speaking%20vet%20budapest,angolul%20beszelo%20allatorvos,angol%20allatorvos)*

| Смысл | Текущий аналог (EN / SK / PL / CS / DE / FR / IT / ES) | Варианты запроса | Planner | Trends (0–100) | Подсказка | Решение |
|---|---|---|---|---|---|---|
| **Круглосуточно / неотложка** | `/nonstop/`, `/sk/nonstop/`, `/pl/calodobowy/`, `/cs/nonstop/`, `/de/notdienst/`, `/es/urgencias/` | allatorvosi ugyelet budapest | — | н/д | igen | **главный** медицинский запрос экстренной помощи (в title, H1 и slug `ugyelet`) |
| | | 0-24 allatorvos budapest | — | н/д | igen | **второй** народный запрос круглосуточного режима (в title: «Állatorvosi ügyelet és 0–24 órás rendelők») |
| | | ejjel nappali allatorvos budapest | — | н/д | igen | **второй** разговорный синоним ночного приема |
| | | nonstop allatorvos budapest | — | н/д | igen | **второй** международный термин |
| **Суббота** | `/open-saturday/`, `/sk/sobota/`, `/pl/sobota/`, `/cs/sobota/`, `/de/samstag/`, `/es/sabado/` | allatorvos szombat budapest | — | н/д | igen | **главный** для субботы (в title, H1 и slug `szombat`) |
| | | allatorvos szombaton nyitva | — | н/д | nem | **второй** уточняющий запрос часов работы |
| | | allatorvosi rendelo szombaton | — | н/д | nem | **второй** |
| **Воскресенье** | `/open-sunday/`, `/sk/nedela/`, `/pl/niedziela/`, `/cs/nedele/`, `/de/sonntag/`, `/es/domingo/` | allatorvos vasarnap budapest | — | н/д | igen | **главный** для воскресенья (в title, H1 и slug `vasarnap`) |
| | | allatorvos vasarnap nyitva | — | н/д | igen | **второй** (поиск дежурных и открытых клиник) |
| | | allatorvos hetvege budapest | — | н/д | nem | **второй** обобщающий запрос выходных дней |
| **Экзоты и рептилии** | `/exotic-animals/`, `/sk/exoticke-zvierata/`, `/pl/zwierzeta-egzotyczne/`, `/cs/exoticka-zvirata/`, `/de/exoten/`, `/es/exoticos/` | egzotikus allatorvos budapest | — | н/д | igen | **главный** поисковый запрос (в title, H1 и slug `egzotikus`) |
| | | madar allatorvos budapest | — | н/д | igen | **второй** (орнитология и птицы) |
| | | hullo allatorvos budapest | — | н/д | igen | **второй** (герпетология и рептилии) |
| | | egzotikus allatok gyogyaszata | — | н/д | nem | **второй** официальный медицинский термин MÁOK |
| **Выезд на дом** | `/home-visits/`, `/sk/vyjazd-domov/`, `/pl/wizyty-domowe/`, `/cs/vyjezd-domu/`, `/de/hausbesuch/`, `/es/a-domicilio/` | allatorvos hazhoz budapest | — | н/д | igen | **главный** доминирующий запрос вызова врача на дом (в title, H1 и slug `hazhoz`) |
| | | allatorvos hazhoz jon budapest | — | н/д | igen | **второй** разговорный синоним |
| | | allatorvosi kiszallas budapest | — | н/д | nem | **второй** официальный термин выездной службы |
| | | hazi vizit allatorvos | — | н/д | nem | **второй** |
| **Приём на английском** | `/english-speaking/`, `/sk/po-anglicky/`, `/pl/po-angielsku/`, `/cs/anglicky/`, `/de/englisch/`, `/es/ingles/` | english speaking vet budapest | — | н/д | igen | **главный** международный поисковый запрос экспатов в Будапеште (в title: «English speaking vet») |
| | | angolul beszelo allatorvos | — | н/д | nem | **главный на венгерском** (в title: «Angolul beszélő állatorvosok» и slug `angol`) |
| | | angol allatorvos budapest | — | н/д | nem | **второй** |

---

## 3. Цены

### 3.1. Общие запросы обзора цен категорий

*Группы сравнения Google Trends:*
- *Ветклиники: [Trends HU](https://trends.google.com/trends/explore?geo=HU&q=allatorvos%20arak,allatorvosi%20arak,allatorvos%20arlista,mennyibe%20kerul%20az%20allatorvos)*
- *Груминг: [Trends HU](https://trends.google.com/trends/explore?geo=HU&q=kutyakozmetika%20arak,kutyakozmetika%20arlista,kutyanyiras%20arak)*
- *Гостиницы: [Trends HU](https://trends.google.com/trends/explore?geo=HU&q=kutyapanzio%20arak,kutyanapkozi%20arak,kutyapanzio%20arlista,kutyahotel%20arak)*
- *Дрессировка: [Trends HU](https://trends.google.com/trends/explore?geo=HU&q=kutyaiskola%20arak,kutyakikepzes%20arak,kutyaiskola%20arlista)*
- *Выгул / присмотр: [Trends HU](https://trends.google.com/trends/explore?geo=HU&q=kutyasetaltatas%20arak,kutyaszitter%20arak,kisallat%20felugyelet%20arak)*

| Категория | Текущий аналог | Варианты запроса | Planner | Trends | Подсказка | Решение |
|---|---|---|---|---|---|---|
| **Цены ветклиник** | `…/vet-clinics/…/prices/` | allatorvosi arak budapest | — | н/д | igen | **главный** профессиональный запрос стоимости (в title и H1: «Állatorvosi árak») |
| | | allatorvos arak budapest | — | н/д | igen | **второй** народный синоним |
| | | allatorvosi rendelo arlista | — | н/д | nem | **второй** запрос прейскуранта клиник |
| | | mennyibe kerul az allatorvos | — | н/д | nem | **главный** вопросный запрос для FAQ |
| **Цены груминга** | `…/grooming/…/prices/` | kutyakozmetika arak budapest | — | н/д | igen | **главный** запрос стоимости груминга (в title и H1: «Kutyakozmetika árak») |
| | | kutyanyiras arak | — | н/д | igen | **второй** запрос стоимости стрижки собак |
| | | kutyakozmetika arlista | — | н/д | nem | **второй** прейскурант салонов |
| | | mennyibe kerul a kutyakozmetika | — | н/д | nem | **главный** вопросный запрос для FAQ |
| **Цены гостиниц** | `…/pet-hotels/…/prices/` | kutyapanzio arak budapest | — | н/д | igen | **главный** запрос стоимости проживания в пансионе (в title и H1: «Kutyapanzió árak») |
| | | kutyanapkozi arak budapest | — | н/д | igen | **главный** для стоимости дневного центра |
| | | kutyapanzio napidij | — | н/д | nem | **второй** суточный тариф |
| | | mennyibe kerul a kutyapanzio | — | н/д | nem | **главный** вопрос для FAQ |
| **Цены дрессировки** | `…/dog-training/…/prices/` | kutyaiskola arak budapest | — | н/д | igen | **главный** запрос стоимости обучения (в title и H1: «Kutyaiskola árak») |
| | | kutyakikepzes arak | — | н/д | igen | **второй** запрос цен занятий с кинологом |
| | | kutyaiskola arlista | — | н/д | nem | **второй** |
| | | mennyibe kerul a kutyaiskola | — | н/д | nem | **главный** вопрос FAQ |
| **Цены передержки / выгула** | `…/pet-sitting/…/prices/` | kutyasetaltatas arak budapest | — | н/д | igen | **главный** коммерческий запрос тарифов выгула (в title и H1: «Kutyasétáltatás és kutyaszitter árak») |
| | | kutyaszitter arak budapest | — | н/д | igen | **главный** коммерческий запрос услуг ситтера |
| | | kutyasetaltatas oradij | — | н/д | igen | **главный** почасовой тариф по Suggest |
| | | kisallat felugyelet arak | — | н/д | nem | **второй** общий синоним |

---

### 3.2. Конкретные услуги (30 услуг из `website/lib/priceSlugs.ts` и `services.ts`)

Правила выведения поискового названия для страницы цены (`seo` по §3.1 методики):
1. Из главного поискового запроса удаляются слова цены («ár», «ára», «árak», «árlista», «mennyibe kerül») и города («Budapest», «Budapesten», «-ban», «-ben»).
2. Первое слово пишется с заглавной буквы.
3. Сохраняется объект («kutya», «kutyáknak», «macska», «kandúr», «szuka»).
4. Единица измерения указывается словами («egy éjszakára», «egy napra», «30 perc», «1 óra»).
5. Длина — строго до 45 знаков.

| Категория | Код | Варианты запроса | Planner | Trends | Подсказка | Решение | Поисковое название (§3.1) |
|---|---|---|---|---|---|---|---|
| **GROOMING** | `full_groom` | kutyanyiras arak | — | н/д | igen | **главный** запрос стоимости комплексной стрижки | **Kutyanyírás és teljes kozmetika** |
| | | teljes kutyakozmetika ara | — | н/д | nem | второй | |
| | `bath_dry` | kutya furdetes ara | — | н/д | igen | **главный** запрос мытья и сушки | **Kutya fürdetés és szárítás** |
| | | furdetes es szaritas kutya | — | н/д | nem | второй | |
| | `hand_stripping` | kutya trimeles ara | — | н/д | nem | **главный** запрос тримминга жесткошерстных собак | **Kutya trimmelés** |
| | | trimeles arlista | — | н/д | nem | второй | |
| | `deshedding` | kutya aljszor kiszedes ara | — | н/д | nem | **главный** запрос вычесывания подшерстка | **Aljszőr eltávolítás kutyáknak** |
| | | csomobontas kutya ara | — | н/д | nem | второй (распутывание колтунов) | |
| | `nail_trim` | kutya karomvagas ara | — | н/д | igen | **главный** запрос стрижки когтей | **Karomvágás kutyáknak** |
| | | karomvagas kutya | — | н/д | igen | второй | |
| | `cat_groom` | macskakozmetika arak | — | н/д | igen | **главный** запрос ухода за кошками | **Macskakozmetika** |
| | | macska nyiras ara | — | н/д | nem | второй | |
| **VET_CLINIC** | `exam` | allatorvosi vizsgalat arak | — | н/д | igen | **главный** официальный запрос приема врача | **Állatorvosi vizsgálat** |
| | | altalanos allatorvosi vizsgalat | — | н/д | igen | второй | |
| | `vaccination_dog` | kutya oltas arak | — | н/д | igen | **главный** запрос стоимости вакцинации | **Kutya védőoltás** |
| | | veszettseg oltas ara | — | н/д | igen | второй (вакцинация от бешенства) | |
| | | kombinalt oltas kutya ara | — | н/д | igen | второй (комплексная вакцина) | |
| | `microchip` | kutya chip ara | — | н/д | igen | **главный** народный запрос чипирования | **Mikrochip beültetés kutyáknak** |
| | | mikrochip beultetes ara | — | н/д | igen | второй официальный термин | |
| | `neuter_cat` | kandur ivartalanitas ara | — | н/д | igen | **главный** запрос кастрации кота | **Kandúr macska ivartalanítása** |
| | | kandur macska mutet ara | — | н/д | nem | второй | |
| | `spay_cat` | nosteny macska ivartalanitas ara | — | н/д | igen | **главный** запрос стерилизации кошки | **Nőstény macska ivartalanítása** |
| | | macska ivartalanitas ara | — | н/д | igen | второй | |
| | `spay_dog` | szuka ivartalanitas ara | — | н/д | igen | **главный** запрос стерилизации собаки (женской особи) | **Szuka kutya ivartalanítása** |
| | | kutya ivartalanitas arak | — | н/д | igen | второй | |
| **PET_HOTEL** | `dog_night` | kutyapanzio arak budapest | — | н/д | igen | **главный** запрос посуточного проживания в гостинице | **Kutyapanzió egy éjszakára** |
| | | kutyapanzio napidij | — | н/д | nem | второй | |
| | `cat_night` | macska panzio arak | — | н/д | igen | **главный** запрос проживания кошек | **Macskapanzió egy éjszakára** |
| | | cicapanzio arak | — | н/д | nem | второй | |
| | `daycare_day` | kutyanapkozi arak budapest | — | н/д | igen | **главный** запрос дневного центра пребывания | **Kutyanapközi egy napra** |
| | | kutyanapkozi napidij | — | н/д | nem | второй | |
| | `daycare_pass` | kutyanapkozi berlet | — | н/д | nem | **главный** абонемент дневного центра | **Kutyanapközi bérlet** |
| | | 10 alkalmas kutyanapkozi berlet | — | н/д | nem | второй | |
| | `pickup` | allattaxi budapest | — | н/д | nem | **главный** запрос перевозки и трансфера животных | **Állattaxi és kisállatszállítás** |
| | | kisallat szallitas hazhoz | — | н/д | nem | второй | |
| | `extra_walk` | extra kutyaseta panzio | — | н/д | nem | **главный** запрос дополнительного индивидуального выгула | **Extra séta a panzióban** |
| | | egyeni setaltatas panzio | — | н/д | nem | второй | |
| **DOG_TRAINING** | `puppy_course` | kolyokkutya tanfolyam budapest | — | н/д | igen | **главный** курс социализации щенков | **Kölyökkutya tanfolyam (kutyaovi)** |
| | | kutyaovi arak | — | н/д | nem | второй | |
| | `obedience_course` | kutya engedelmessegi tanfolyam | — | н/д | igen | **главный** базовый курс послушания | **Alapfokú engedelmességi tanfolyam** |
| | | alap engedelmessegi tanfolyam | — | н/д | igen | второй | |
| | `group_lesson` | csoportos kutyakikepzes | — | н/д | nem | **главный** групповые занятия на площадке | **Csoportos kutyakiképzés** |
| | | csoportos kutyaiskola ora | — | н/д | nem | второй | |
| | `private_lesson` | egyeni kutyakikepzes | — | н/д | igen | **главный** индивидуальные занятия с кинологом | **Egyéni kutyakiképzés** |
| | | maganora kutyakikepzo | — | н/д | nem | второй | |
| | `behavior_consult` | kutya viselkedesterapia budapest | — | н/д | igen | **главный** запрос консультации зоопсихолога | **Kutya viselkedésterápia** |
| | | viselkedesterapia kutya | — | н/д | igen | второй | |
| | `membership` | kutyaiskola tagsagi dij | — | н/д | nem | **главный** членский взнос кинологического клуба | **Kutyaiskola klubtagsági díj** |
| | | kutyasuli berlet | — | н/д | nem | второй | |
| **PET_SITTING** | `walk_30` | kutyasetaltatas arak budapest | — | н/д | igen | **главный** короткий выгул на 30 минут | **Kutyasétáltatás (30 perc)** |
| | | 30 perces kutyaseta | — | н/д | nem | второй | |
| | `walk_60` | kutyasetaltatas oradij | — | н/д | igen | **главный** стандартная часовая прогулка (почасовой тариф) | **Kutyasétáltatás (1 óra)** |
| | | 1 oras kutyasetaltatas ara | — | н/д | nem | второй | |
| | `cat_visit` | macskafelugyelet haznal | — | н/д | nem | **главный** домашний визит к кошкам | **Macskafelügyelet háznál** |
| | | cicavisit budapest | — | н/д | nem | второй | |
| | `house_sitting_night` | ottalvos allatfelugyelet | — | н/д | nem | **главный** ночной присмотр в доме владельца | **Ottalvós állatfelügyelet (éjszaka)** |
| | | ejszakai kutyaszitter a gazdinal | — | н/д | nem | второй | |
| | `boarding_night` | csaladi kutyapanzio | — | н/д | nem | **главный** ночная домашняя передержка у ситтера | **Családi kutyapanzió (éjszaka)** |
| | | kutyamegorzes a szitternel | — | н/д | nem | второй | |
| | `daycare_day` | napkozbeni kutyamegorzes | — | н/д | nem | **главный** дневной домашний присмотр у ситтера | **Napközbeni kutyamegőrzés** |
| | | napkozi kutyaszitter | — | н/д | nem | второй | |

---

## 4. Ветеринарные специальности из `website/lib/vet.ts`

В Венгрии номенклатура ветеринарных специальностей и отделений регулируется стандартами **MÁOK (Magyar Állatorvosi Kamara)** и клинической практикой клиник при **Állatorvostudományi Egyetem**.

| Код специальности | Английский (`en`) | Венгерский (`hu`) | Варианты запроса в Венгрии | Подсказка | Обоснование и статус |
|---|---|---|---|---|---|
| `surgery` | Surgery | **Sebészet** | allatorvosi sebeszet | igen | **главный** термин хирургического отделения и оперативных вмешательств |
| `orthopedics` | Orthopaedics | **Ortopédia** | allatorvosi ortopedia | igen | **главный** общепринятый клинический профиль ортопедии и травматологии |
| `dentistry` | Dentistry | **Fogászat** | allatorvosi fogaszat | igen | **главный** стоматологический профиль (чистка ультразвуком, удаление зубов) |
| `dermatology` | Dermatology | **Bőrgyógyászat** | allatorvosi borgyogyaszat | igen | **главный** профиль кожных патологий, аллергий и цитологии |
| `cardiology` | Cardiology | **Kardiológia** | allatorvosi kardiologia | nem | **главный** кардиологический профиль (ЭКГ, эхокардиография) |
| `ophthalmology` | Ophthalmology | **Szemészet** | allatorvosi szemeszet | igen | **главный** офтальмологический профиль |
| `oncology` | Oncology | **Onkológia** | allatorvosi onkologia | igen | **главный** онкологический профиль и химиотерапия |
| `neurology` | Neurology | **Neurológia** | allatorvosi neurologia | nem | **главный** неврологический профиль |
| `internal-medicine` | Internal medicine | **Belgyógyászat** | allatorvosi belgyogyaszat | igen | **главный** терапевтический профиль общей клиники |
| `reproduction` | Reproduction | **Szülészet és szaporodásbiológia** | allatorvosi szuleszet | igen | **главный** профиль репродукции, родовспоможения и неонатологии |
| `rehabilitation` | Rehabilitation | **Fizioterápia és rehabilitáció** | allat fizioterapia | igen | **главный** доминирующий поисковый запрос реабилитации питомцев |
| `exotics` | Exotic animals | **Egzotikus állatok** | egzotikus allatorvos | igen | **главный** термин приёма птиц, грызунов и рептилий |
| `ultrasound` | Ultrasound | **Ultrahang** | kutya ultrahang | igen | **главный** термин УЗИ-диагностики (UH) |
| `x-ray` | X-ray | **Röntgen** | kutya rontgen | igen | **главный** термин рентгенографии (RTG) |
| `ct` | CT | **CT** | kutya ct | igen | **главный** термин компьютерной томографии |
| `mri` | MRI | **MRI** | kutya mri | igen | **главный** термин магнитно-резонансной томографии |
| `endoscopy` | Endoscopy | **Endoszkópia** | allatorvosi endoszkopia | nem | **главный** термин эндоскопических исследований |
| `laboratory` | Laboratory | **Laboratórium** | allatorvosi labor | igen | **главный** профиль клинических лабораторных анализов крови и мочи |
| `hospitalization` | Hospitalisation | **Kórházi ellátás** | allatorvosi korhaz | igen | **главный** профиль дневного и круглосуточного стационара клиники |

---

## 5. Сводка слагов для сайта

Каждый слаг записан строго в одном варианте латиницей без диакритических знаков (без букв á, é, í, ó, ö, ő, ú, ü, ű), в нижнем регистре через дефис (`kebab-case`), в полном соответствии с архитектурным контрактом сайта.

### 5.1. Категории (`website/lib/categories.ts`: `SLUGS.hu`)

1. `GROOMING` → **`kutyakozmetika`**  
   *Обоснование:* Абсолютный доминирующий поисковый запрос в Венгрии (10 подсказок в Google Suggest по Будапешту). Все салоны ухода за собаками в Венгрии используют вывеску «Kutyakozmetika». Полный аналог немецкого `hundesalon`, испанского `peluqueria-canina`, чешского `psi-salon`.
2. `VET_CLINIC` → **`allatorvos`**  
   *Обоснование:* Абсолютный поисковый лидер по Венгрии и Будапешту («állatorvos budapest»). Точный аналог словацкого `veterinar`, польского `weterynarz`, немецкого `tierarzt`, испанского `veterinario`.
3. `PET_HOTEL` → **`kutyapanzio`**  
   *Обоснование:* Общепринятый народный, коммерческий и юридический термин гостиниц для передержки животных в Венгрии. Точный аналог испанского `residencia-canina`, немецкого `tierpension` и славянских `hotel-pre-zvierata` / `hotel-dla-zwierzat`.
4. `DOG_TRAINING` → **`kutyaiskola`**  
   *Обоснование:* Главный поисковый запрос категории в Венгрии (10 подсказок по Будапешту). В Венгрии услуги дрессировки повсеместно организуются школами дрессировки («Kutyaiskola»). Полный аналог немецкого `hundeschule`, испанского `adiestramiento-canino`, польского `szkolenie-psow`.
5. `PET_SHOP` → **`allatkereskedes`**  
   *Обоснование:* Традиционный и наиболее устойчивый венгерский термин для специализированных зоомагазинов («állatkereskedés»). В отличие от англоязычного `pet shop`, который пересекается с поп-группой Pet Shop Boys, `allatkereskedes` однозначно идентифицирует категорию торговли зоотоварами. Точный аналог `sklep-zoologiczny`, `tierhandlung`, `chovatelske-potreby`.
6. `PET_SITTING` → **`kutyaszitter`**  
   *Обоснование:* Профессиональный субъектный термин индивидуального присмотра и передержки, активно развивающийся в Будапеште и зафиксированный в поисковых подсказках Google Suggest. Полный аналог итальянского `dog-sitter` и испанского `cuidador-de-perros`.

### 5.2. Признаки ветклиник (`website/lib/attributePages.ts`: `SLUGS`)

1. `nonstop` → **`ugyelet`** (title: «Állatorvosi ügyelet és 0–24 órás rendelők», абсолютный поисковый лидер экстренной помощи — подсказки на 1-м месте; точный аналог испанского `urgencias`, французского `urgence` и немецкого `notdienst`)
2. `saturday` → **`szombat`** (title: «Szombaton nyitva tartó állatorvosok»)
3. `sunday` → **`vasarnap`** (title: «Vasárnap nyitva tartó állatorvosok»)
4. `exotics` → **`egzotikus`** (title: «Egzotikus állatorvosok és szakrendelők»)
5. `home-visits` → **`hazhoz`** (title: «Házhoz járó állatorvosok (házi vizit)»)
6. `english` → **`angol`** (title: «Angolul beszélő állatorvosok (English speaking vets)»)

### 5.3. Сегменты в URL

- `PRICES_SEGMENT.hu`: **`arak`** (структура URL: `/<category>/<city>/arak/` и `/<category>/<city>/arak/<service>/`)
- `BEST_SEGMENT.hu`: **`legjobb`** (структура URL: `/<category>/<city>/legjobb/`)
- `GUIDE_SEGMENT.hu`: **`utmutatok`** (структура URL: `/hu/utmutatok/`)
- `BUSINESS_SEGMENT.hu`: **`hely`** (структура URL: `/hu/hely/<slug>/`)
- `CITY_SEGMENT.hu`: **`varos`** (структура URL: `/hu/varos/<city>/`)

### 5.4. Слаги услуг из цен (`website/lib/priceSlugs.ts`: `SERVICE_SLUGS`)

#### GROOMING:
1. `full_groom` → `teljes-kozmetika`
2. `bath_dry` → `furdetes-es-szaritas`
3. `hand_stripping` → `trimeles`
4. `deshedding` → `aljszor-eltavolitas`
5. `nail_trim` → `karomvagas`
6. `cat_groom` → `macskakozmetika`

#### VET_CLINIC:
7. `exam` → `allatorvosi-vizsgalat`
8. `vaccination_dog` → `kutya-oltas`
9. `microchip` → `mikrochip`
10. `neuter_cat` → `kandur-ivartalanitas`
11. `spay_cat` → `nosteny-macska-ivartalanitas`
12. `spay_dog` → `szuka-ivartalanitas`

#### PET_HOTEL:
13. `dog_night` → `kutya-ejszaka`
14. `cat_night` → `macska-ejszaka`
15. `daycare_day` → `kutyanapkozi`
16. `daycare_pass` → `kutyanapkozi-berlet`
17. `pickup` → `allattaxi`
18. `extra_walk` → `extra-seta`

#### DOG_TRAINING:
19. `puppy_course` → `kolyokkutya-tanfolyam`
20. `obedience_course` → `alapfoku-engedelmesseg`
21. `group_lesson` → `csoportos-foglalkozas`
22. `private_lesson` → `egyeni-kepzes`
23. `behavior_consult` → `viselkedesterapia`
24. `membership` → `klubtagsagi-dij`

#### PET_SITTING:
25. `walk_30` → `kutyaseta-30-perc`
26. `walk_60` → `kutyaseta-60-perc`
27. `cat_visit` → `macskafelugyelet-haznal`
28. `house_sitting_night` → `felugyelet-a-gazdinal-ejszaka`
29. `boarding_night` → `felugyelet-a-szitternel-ejszaka`
30. `daycare_day` → `napkozi-felugyelet`

---

### 5.5. Поисковые названия для страниц цен (`seo` в `website/lib/services.ts`, §3.1) и короткие подписи

Формирование выполнено строго по 8 правилам методики `docs/seo/keywords/README.md` §3.1 (удалены слова цены и город, сохранён объект с заглавной буквы, единицы словами, длина каждого поискового названия не превышает 45 символов):

| Категория | Код услуги | Короткая подпись (`hu`) | Поисковое название `seo` (`hu`, §3.1) |
|---|---|---|---|
| **GROOMING** | `full_groom` | Teljes kutyakozmetika | Kutyanyírás és teljes kozmetika |
| | `bath_dry` | Fürdetés és szárítás | Kutya fürdetés és szárítás |
| | `hand_stripping` | Trimmelés | Kutya trimmelés |
| | `deshedding` | Aljszőr kiszedés | Aljszőr eltávolítás kutyáknak |
| | `nail_trim` | Karomvágás | Karomvágás kutyáknak |
| | `cat_groom` | Macskakozmetika | Macskakozmetika |
| **VET_CLINIC** | `exam` | Általános vizsgálat | Állatorvosi vizsgálat |
| | `vaccination_dog` | Kutya védőoltás | Kutya védőoltás |
| | `microchip` | Mikrochip | Mikrochip beültetés kutyáknak |
| | `neuter_cat` | Kandúr ivartalanítás | Kandúr macska ivartalanítása |
| | `spay_cat` | Nőstény macska ivartalanítás | Nőstény macska ivartalanítása |
| | `spay_dog` | Szuka ivartalanítás | Szuka kutya ivartalanítása |
| **PET_HOTEL** | `dog_night` | Kutya, éjszakánként | Kutyapanzió egy éjszakára |
| | `cat_night` | Macska, éjszakánként | Macskapanzió egy éjszakára |
| | `daycare_day` | Kutyanapközi, naponta | Kutyanapközi egy napra |
| | `daycare_pass` | Napközi bérlet | Kutyanapközi bérlet |
| | `pickup` | Állattaxi (szállítás) | Állattaxi és kisállatszállítás |
| | `extra_walk` | Extra séta | Extra séta a panzióban |
| **DOG_TRAINING** | `puppy_course` | Kölyökkutya tanfolyam | Kölyökkutya tanfolyam (kutyaovi) |
| | `obedience_course` | Alapfokú engedelmesség | Alapfokú engedelmességi tanfolyam |
| | `group_lesson` | Csoportos óra | Csoportos kutyakiképzés |
| | `private_lesson` | Egyéni óra | Egyéni kutyakiképzés |
| | `behavior_consult` | Viselkedésterápia | Kutya viselkedésterápia |
| | `membership` | Klubtagsági díj | Kutyaiskola klubtagsági díj |
| **PET_SITTING** | `walk_30` | Séta 30 perc | Kutyasétáltatás (30 perc) |
| | `walk_60` | Séta 1 óra | Kutyasétáltatás (1 óra) |
| | `cat_visit` | Macskafelügyelet | Macskafelügyelet háznál |
| | `house_sitting_night` | Ottalvós felügyelet, éjszaka | Ottalvós állatfelügyelet (éjszaka) |
| | `boarding_night` | Családi panzió, éjszaka | Családi kutyapanzió (éjszaka) |
| | `daycare_day` | Napközbeni felügyelet | Napközbeni kutyamegőrzés |

---

### 5.6. Шаблоны мета-тегов категорий для `website/lib/categories.ts`

- `SEO_TITLE.hu`:
  - `GROOMING`: `"Kutyakozmetika és kutyanyírás"`
  - `VET_CLINIC`: `"Állatorvosok és állatorvosi rendelők"`
  - `PET_HOTEL`: `"Kutyapanziók és kutyanapközik"`
  - `DOG_TRAINING`: `"Kutyaiskolák és kutyakiképzés"`
  - `PET_SHOP`: `"Állatkereskedések és állateledel boltok"`
  - `PET_SITTING`: `"Kutyaszitterek és kutyasétáltatás"`
- `PRICES_NAME.hu`:
  - `GROOMING`: `"Kutyakozmetika árak"`
  - `VET_CLINIC`: `"Állatorvos árak"`
  - `PET_HOTEL`: `"Kutyapanzió árak"`
  - `DOG_TRAINING`: `"Kutyaiskola árak"`
  - `PET_SHOP`: `"Állatkereskedés árak"`
  - `PET_SITTING`: `"Kutyasétáltatás és kutyaszitter árak"`

---

## 6. Открытый вопрос и заметки

1. **Доступность Keyword Planner и Trends**:
   В рабочей среде отсутствует доступ к рекламному аккаунту Google Ads Keyword Planner (кампании отсутствуют), а автоматический запрос к Google Trends блокируется (HTTP 429). В соответствии с `quality.md` §1 («Нет данных — пусто и причина. Никогда не оценка»), колонка Planner заполнена прочерком `—`, а колонка Trends помечена `н/д (нет прямого доступа Trends)`.
2. **Верификация данных поисковых подсказок**:
   Все термины верифицированы через официальный Google Suggest API (`gl=hu`, `hl=hu`) с геолокацией Венгрия и Будапешт.
3. **Что не удалось подтвердить поисковыми подсказками**:
   В поисковых подсказках Google Suggest не найдены следующие узкоспециализированные запросы:
   - Общие/зонтичные запросы присмотра: `kisallat felugyelet budapest`, `allatfelugyelet budapest`, `kutyamegorzes budapest` (пользователи ищут конкретные услуги: `kutyasétáltatás budapest` и `kutyaszitter budapest`).
   - Узкие вариации услуг отелей и ситтеров: `kutyanapkozi berlet`, `allattaxi budapest`, `macskafelugyelet budapest`, `csaladi kutyapanzio budapest`, `extra kutyaseta panzio`, `ottalvos allatfelugyelet`. Названия для них выбраны на основе анализа фактических прейскурантов пансионов и сервисов ситтинга Будапешта (Dogmopolite, PetwiseCare, Babóca, CityVet).
   - Специальности: `allatorvosi kardiologia`, `allatorvosi neurologia`, `allatorvosi endoszkopia` (в подсказках они встречаются без географической привязки или в контексте университетской клиники Állatorvostudományi Egyetem).
