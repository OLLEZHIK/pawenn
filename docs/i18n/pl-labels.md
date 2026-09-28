# Tabela polskich podpisów i etykiet interfejsu (pl-labels)

Dokument zawiera kompletne zestawienie polskich tłumaczeń wszystkich stałych, kodów i etykiet spoza głównego słownika (`website/lib/dictionaries/pl.ts`), zgodnie z wytycznymi `tasks/ide-language-pl-dictionary.md` i `docs/playbooks/add-language.md`.

> Źródło prawdy — kod (`website/lib/*.ts`). Przy podłączeniu (PR #140) część podpisów skrócono lub ujednolicono, a odpowiedzi FAQ ograniczono do tego, co podaje samo miejsce.

Podstawowe nazwy i terminy bazują na wynikach analizy słów kluczowych w `docs/seo/keywords/pl.md`.

---

## 1. Język w przełączniku (`website/lib/locales.ts`)

| Kod | EN | PL |
|---|---|---|
| `locale` | Polish | Polski |

---

## 2. Kategorie (`website/lib/categories.ts`)

### 2.1. Nazwy, etykiety i zajawki (BLURBS)

| Kod kategorii | Element | EN | PL |
|---|---|---|---|
| `GROOMING` | `LABELS` | Grooming | Groomerzy i salony dla psów |
| `GROOMING` | `SINGULAR` | grooming salon | salon groomerski |
| `GROOMING` | `PLURAL` | grooming salons | salony groomerskie |
| `GROOMING` | `SEO_TITLE` | Dog & Cat Grooming | Groomer i strzyżenie psów |
| `GROOMING` | `BLURBS` | Baths, haircuts, trimming and nail care | Kąpiele, strzyżenie, trymowanie i pielęgnacja pazurów |
| `VET_CLINIC` | `LABELS` | Veterinary Clinics | Lecznice weterynaryjne |
| `VET_CLINIC` | `SINGULAR` | veterinary clinic | lecznica weterynaryjna |
| `VET_CLINIC` | `PLURAL` | vet clinics | lecznice weterynaryjne |
| `VET_CLINIC` | `SEO_TITLE` | Vets & Veterinary Clinics | Weterynarze i lecznice weterynaryjne |
| `VET_CLINIC` | `BLURBS` | Check-ups, vaccinations and emergencies | Badania, szczepienia i dyżur całodobowy |
| `PET_HOTEL` | `LABELS` | Pet Hotels | Hotele dla zwierząt |
| `PET_HOTEL` | `SINGULAR` | pet hotel | hotel dla zwierząt |
| `PET_HOTEL` | `PLURAL` | pet hotels | hotele dla zwierząt |
| `PET_HOTEL` | `SEO_TITLE` | Pet Hotels & Dog Boarding | Hotele dla psów i kotów |
| `PET_HOTEL` | `BLURBS` | Safe stays while you travel | Bezpieczny pobyt pupila na czas Twojego wyjazdu |
| `DOG_TRAINING` | `LABELS` | Dog Training | Szkolenie psów |
| `DOG_TRAINING` | `SINGULAR` | dog trainer | trener psów |
| `DOG_TRAINING` | `PLURAL` | dog trainers | trenerzy psów |
| `DOG_TRAINING` | `SEO_TITLE` | Dog Training & Puppy Classes | Szkolenie psów i behawioryści |
| `DOG_TRAINING` | `BLURBS` | Puppy classes, obedience and behaviour | Psie przedszkole, posłuszeństwo i behawiorysta |
| `PET_SHOP` | `LABELS` | Pet Shops | Sklepy zoologiczne |
| `PET_SHOP` | `SINGULAR` | pet shop | sklep zoologiczny |
| `PET_SHOP` | `PLURAL` | pet shops | sklepy zoologiczne |
| `PET_SHOP` | `SEO_TITLE` | Pet Shops | Sklepy zoologiczne |
| `PET_SHOP` | `BLURBS` | Food, toys and everyday supplies | Karmy, zabawki i artykuły na co dzień |
| `PET_SITTING` | `LABELS` | Pet Sitting | Opieka i petsitterzy |
| `PET_SITTING` | `SINGULAR` | pet sitter | petsitter |
| `PET_SITTING` | `PLURAL` | pet sitters | petsitterzy |
| `PET_SITTING` | `SEO_TITLE` | Pet Sitters & Dog Walkers | Petsitterzy i wyprowadzanie psów |
| `PET_SITTING` | `BLURBS` | Walks, visits and care at home | Spacery, wizyty i opieka w domu |

### 2.2. Segmenty ścieżek URL

| Segment | EN | PL |
|---|---|---|
| `BUSINESS_SEGMENT` | `business` | `miejsce` |
| `CITY_SEGMENT` | `city` | `miasto` |
| `PRICES_SEGMENT` | `prices` | `ceny` |

---

## 3. Usługi cennika i warunki porównania (`website/lib/services.ts`)

| Kod usługi | Kategoria | EN | PL | Co obejmuje cena (INCLUDES PL) |
|---|---|---|---|---|
| `full_groom` | GROOMING | Full grooming | Kompleksowa pielęgnacja / strzyżenie | Kąpiel, strzyżenie i obcięcie pazurów |
| `bath_dry` | GROOMING | Bath & blow-dry | Kąpiel i suszenie | — |
| `hand_stripping` | GROOMING | Hand stripping | Trymowanie | Cały zabieg trymowania |
| `deshedding` | GROOMING | De-shedding | Wyczesywanie podszerstka | — |
| `nail_trim` | GROOMING | Nail trim | Obcinanie pazurów | — |
| `cat_groom` | GROOMING | Cat grooming | Pielęgnacja / strzyżenie kota | — |
| `exam` | VET_CLINIC | Check-up | Badanie kliniczne / wizyta | Podstawowe badanie bez badań dodatkowych |
| `vaccination_dog` | VET_CLINIC | Dog vaccination | Szczepienie psa (wścieklizna + choroby zakaźne) | Szczepionka skojarzona + wścieklizna |
| `microchip` | VET_CLINIC | Microchip | Czipowanie psa / kota | Mikroczip, aplikacja i rejestracja w bazie |
| `neuter_cat` | VET_CLINIC | Cat neutering (male) | Kastracja kota (samca) | Zabieg chirurgiczny + znieczulenie |
| `spay_cat` | VET_CLINIC | Cat spaying (female) | Sterylizacja kotki (samicy) | Zabieg chirurgiczny + znieczulenie |
| `spay_dog` | VET_CLINIC | Dog spaying (female) | Sterylizacja suki | Zabieg chirurgiczny + znieczulenie |
| `dog_night` | PET_HOTEL | Dog, per night | Pies, doba hotelowa | — |
| `cat_night` | PET_HOTEL | Cat, per night | Kot, doba hotelowa | — |
| `daycare_day` | PET_HOTEL | Dog daycare, per day | Świetlica dla psów, dzień | — |
| `daycare_pass` | PET_HOTEL | Daycare pass | Karnet do świetlicy | — |
| `pickup` | PET_HOTEL | Pick-up & drop-off | Transport zwierzaka (dowóz i odbiór) | W jedną stronę |
| `extra_walk` | PET_HOTEL | Extra walk / individual care | Dodatkowy spacer / opieka indywidualna | — |
| `puppy_course` | DOG_TRAINING | Puppy course | Psie przedszkole | — |
| `obedience_course` | DOG_TRAINING | Basic obedience course | Kurs podstawowego posłuszeństwa | — |
| `group_lesson` | DOG_TRAINING | Group lesson | Zajęcia grupowe | — |
| `private_lesson` | DOG_TRAINING | Private lesson | Lekcja indywidualna | — |
| `behavior_consult` | DOG_TRAINING | Behaviour consultation | Konsultacja behawioralna | — |
| `membership` | DOG_TRAINING | Club membership | Składka członkowska w klubie | — |
| `walk_30` | PET_SITTING | Dog walk, 30 min | Spacer z psem, 30 min | — |
| `walk_60` | PET_SITTING | Dog walk, 60 min | Spacer z psem, 60 min | — |
| `cat_visit` | PET_SITTING | Cat visit | Wizyta u kota | — |
| `house_sitting_night` | PET_SITTING | Overnight at your home | Opieka w domu właściciela, noc | — |
| `boarding_night` | PET_SITTING | Overnight at sitter's home | Opieka w domu petsittera, noc | — |
| `daycare_day` | PET_SITTING | Day care | Opieka dzienna | — |

---

## 4. Specjalizacje lecznic weterynaryjnych (`website/lib/vet.ts`)

| Kod specjalizacji | EN | PL |
|---|---|---|
| `surgery` | Surgery | Chirurgia |
| `orthopedics` | Orthopaedics | Ortopedia |
| `dentistry` | Dentistry | Stomatologia |
| `dermatology` | Dermatology | Dermatologia |
| `cardiology` | Cardiology | Kardiologia |
| `ophthalmology` | Ophthalmology | Okulistyka |
| `oncology` | Oncology | Onkologia |
| `neurology` | Neurology | Neurologia |
| `internal-medicine` | Internal medicine | Choroby wewnętrzne (interna) |
| `reproduction` | Reproduction | Rozród i położnictwo |
| `rehabilitation` | Rehabilitation | Rehabilitacja i fizjoterapia |
| `exotics` | Exotic animals | Zwierzęta egzotyczne |
| `ultrasound` | Ultrasound | USG |
| `x-ray` | X-ray | RTG |
| `ct` | CT | Tomografia komputerowa (TK) |
| `mri` | MRI | Rezonans magnetyczny (MRI) |
| `endoscopy` | Endoscopy | Endoskopia |
| `laboratory` | Laboratory | Laboratorium analityczne |
| `hospitalization` | Hospitalisation | Szpital / hospitalizacja |

---

## 5. Fakty „Warto wiedzieć” i pytania FAQ (`website/lib/facts.ts`)

### 5.1. VET_CLINIC

| Kod faktu | Etykieta EN | Etykieta PL | Pytanie FAQ (PL) | Odpowiedź FAQ (PL) |
|---|---|---|---|---|
| `walk_in` | Walk-ins welcome | Przyjęcia bez zapisów | Czy trzeba się wcześniej umówić? | Nie – według informacji lecznicy można przyjść również bez wcześniejszych zapisów. |
| `appointment_only` | By appointment only | Wyłącznie po umówieniu wizyty | Czy trzeba się wcześniej umówić? | Tak, przyjęcia wyłącznie po umówieniu – zadzwoń lub zarezerwuj termin przed wizytą. |
| `online_booking` | Online booking | Rezerwacja online | Czy można zarezerwować wizytę online? | Tak, obiekt przyjmuje rezerwacje online – bezpośredni link znajduje się na jego stronie www. |
| `card_payment` | Card payment | Płatność kartą | Czy można płacić kartą? | Tak, obiekt deklaruje możliwość płatności kartą. |
| `parking` | Parking | Parking dla klientów | Czy na miejscu jest parking? | Tak, obiekt zapewnia parking dla klientów. |
| `cats_waiting_room` | Separate waiting room for cats | Osobna poczekalnia dla kotów | Czy jest osobna poczekalnia dla kotów? | Tak, lecznica posiada wydzieloną strefę poczekalni dla kotów, aby ograniczyć stres. |
| `pet_passport` | Issues EU pet passports | Wystawianie paszportów UE | Czy wyrobię tutaj paszport UE dla zwierzaka? | Tak, lecznica wystawia oficjalne europejskie paszporty dla zwierząt domowych. |
| `pharmacy_on_site` | Pharmacy on site | Apteka weterynaryjna na miejscu | Czy na miejscu jest apteka? | Tak, lecznica posiada na miejscu zaopatrzoną aptekę z lekami weterynaryjnymi. |
| `cat_friendly` | Cat Friendly Clinic certified | Certyfikat Cat Friendly Clinic | Czy lecznica posiada certyfikat Cat Friendly Clinic? | Tak, lecznica posiada oficjalną akredytację Cat Friendly Clinic. |

### 5.2. GROOMING

| Kod faktu | Etykieta EN | Etykieta PL | Pytanie FAQ (PL) | Odpowiedź FAQ (PL) |
|---|---|---|---|---|
| `cats` | Cats groomed too | Pielęgnacja również kotów | Czy salon pielęgnuje również koty? | Tak, salon przyjmuje również koty. |
| `all_sizes` | Dogs of all sizes | Psy wszystkich wielkości | Czy salon przyjmuje duże psy? | Tak, salon obsługuje psy wszystkich ras i wielkości. |
| `small_dogs_only` | Small dogs only | Tylko małe rasy psów | Jakie psy przyjmuje salon? | Salon specjalizuje się wyłącznie w małych rasach psów. |
| `appointment_only` | By appointment only | Tylko po wcześniejszym umówieniu | Czy trzeba się wcześniej umówić? | Tak, wizyty odbywają się wyłącznie po wcześniejszym umówieniu. |
| `online_booking` | Online booking | Rezerwacja online | Czy można zarezerwować termin online? | Tak, salon udostępnia rezerwację wizyt przez internet. |
| `card_payment` | Card payment | Płatność kartą | Czy można płacić kartą? | Tak, na miejscu można zapłacić kartą. |
| `owner_can_stay` | You can stay with your pet | Możliwość obecności opiekuna | Czy mogę zostać z psem podczas wizyty? | Tak, salon umożliwia opiekunom obecność podczas zabiegów pielęgnacyjnych. |
| `natural_cosmetics` | Natural cosmetics | Kosmetyki naturalne | Czy w salonie stosuje się naturalne kosmetyki? | Tak, salon podkreśla stosowanie naturalnych i ekologicznych kosmetyków dla zwierząt. |
| `pickup_service` | Pick-up and drop-off | Transport pupila (odbiór i dowóz) | Czy salon oferuje transport pupila? | Tak, salon oferuje usługę odbioru i dowozu zwierzaka. |

### 5.3. PET_HOTEL

| Kod faktu | Etykieta EN | Etykieta PL | Pytanie FAQ (PL) | Odpowiedź FAQ (PL) |
|---|---|---|---|---|
| `cats` | Takes cats | Przyjmuje również koty | Czy hotel przyjmuje koty? | Tak, hotel przyjmuje koty. |
| `small_dogs_only` | Small dogs only | Tylko małe psy | Czy hotel przyjmuje duże psy? | Nie, hotel przyjmuje wyłącznie małe rasy psów. |
| `vaccination_required` | Vaccination record required | Wymagana książeczka szczepień | Czy wymagane są aktualne szczepienia? | Tak, przed przyjęciem zwierzaka wymagane jest okazanie ważnych szczepień. |
| `trial_stay` | Trial day or visit before the stay | Dzień próbny lub wizyta adaptacyjna | Czy konieczna jest wizyta adaptacyjna lub dzień próbny? | Tak, hotel oferuje lub wymaga pobytu próbnego przed dłuższą rezerwacją. |
| `outdoor_run` | Outdoor run | Bezpieczny wybieg na zewnątrz | Czy na miejscu jest wybieg dla psów? | Tak, obiekt posiada ogrodzony wybieg na świeżym powietrzu. |
| `supervision_24h` | Supervised 24 hours | Całodobowa opieka 24h | Czy zwierzaki mają całodobową opiekę 24/7? | Tak, opiekunowie czuwają na miejscu przez całą dobę. |
| `cage_free` | No cages or kennels | Pobyt bez klatek i boksów | Czy zwierzaki są trzymane w klatkach? | Nie, hotel zapewnia pobyt bezklatkowy w warunkach domowych. |
| `medication` | Gives medication | Podawanie leków | Czy opiekunowie mogą podawać leki? | Tak, personel może podawać zalecone leki zgodnie z instrukcją. |
| `photo_updates` | Photo or video updates | Relacje foto i wideo dla opiekunów | Czy będę otrzymywać zdjęcia pupila z pobytu? | Tak, hotel regularnie przesyła właścicielom zdjęcia lub nagrania wideo. |

### 5.4. DOG_TRAINING

| Kod faktu | Etykieta EN | Etykieta PL | Pytanie FAQ (PL) | Odpowiedź FAQ (PL) |
|---|---|---|---|---|
| `group_classes` | Group classes | Zajęcia grupowe | Czy prowadzone są szkolenia grupowe? | Tak, szkoła organizuje grupowe kursy posłuszeństwa. |
| `private_lessons` | Private lessons | Treningi indywidualne | Czy można umówić się na lekcję indywidualną? | Tak, dostępne są indywidualne lekcje z trenerem. |
| `puppy_classes` | Puppy classes | Psie przedszkole | Czy prowadzicie psie przedszkole dla szczeniąt? | Tak, szkoła prowadzi zajęcia socjalizacyjne dla szczeniąt. |
| `training_ground` | Own training ground | Własny plac treningowy | Gdzie odbywają się treningi? | Szkoła posiada własny, ogrodzony plac szkoleniowy. |
| `home_training` | Training at your home | Trening z dojazdem do domu klienta | Czy trener przyjeżdża do domu klienta? | Tak, szkoleniowiec dojeżdża pod wskazany adres. |
| `behaviour_problems` | Behaviour problems | Terapia problemów behawioralnych | Czy pomagacie w problemach z agresją lub lękiem? | Tak, oferujemy konsultacje w zakresie terapii zaburzeń zachowania. |
| `certified_trainer` | Certified trainer | Certyfikowany trener / behawiorysta | Jakie kwalifikacje mają trenerzy? | Zajęcia prowadzą dyplomowani i certyfikowani trenerzy kynologiczni. |
| `online_lessons` | Online lessons | Konsultacje online | Czy prowadzicie konsultacje online? | Tak, oferujemy zdalne konsultacje behawioralne. |
| `dog_sports` | Dog sports (agility, obedience) | Sporty kynologiczne (agility, obedience) | Czy uczycie sportów kynologicznych? | Tak, prowadzimy treningi sportowe, m.in. agility czy obedience. |

### 5.5. PET_SITTING

| Kod faktu | Etykieta EN | Etykieta PL | Pytanie FAQ (PL) | Odpowiedź FAQ (PL) |
|---|---|---|---|---|
| `dog_walking` | Dog walking | Wyprowadzanie psów | Czy oferujecie wyprowadzanie psów na spacery? | Tak, zapewniamy regularne lub doraźne spacery z psem. |
| `cat_visits` | Cat visits | Wizyty u kota w domu | Czy dojeżdżacie do kotów na czas nieobecności? | Tak, oferujemy wizyty domowe, karmienie i czyszczenie kuwety. |
| `home_sitting` | Stays at your home | Opieka w domu właściciela | Czy petsitter może nocować w moim domu? | Tak, petsitter może zamieszkać z pupilem w Twoim domu. |
| `boarding_at_sitter` | Boarding at the sitter's | Pobyt w domu u petsittera | Czy mogę zostawić psa w domu u petsittera? | Tak, oferujemy opiekę domową u petsittera. |
| `insured` | Insured | Ubezpieczenie OC petsittera | Czy petsitter posiada ubezpieczenie OC? | Tak, petsitter lub agencja posiada ważne ubezpieczenie odpowiedzialności cywilnej. |
| `meet_greet` | Meet before booking | Spotkanie zapoznawcze przed rezerwacją | Czy przed opieką odbywa się spotkanie zapoznawcze? | Tak, przed potwierdzeniem opieki organizowane jest spotkanie zapoznawcze z pupilem. |
| `medication` | Gives medication | Podawanie leków | Czy petsitter może podać psu lub kotu leki? | Tak, opiekun ma doświadczenie w podawaniu leków. |
| `photo_updates` | Photo or video updates | Zdjęcia i relacje z opieki | Czy dostanę zdjęcia ze spaceru lub opieki? | Tak, petsitter regularnie przesyła wiadomości ze zdjęciami. |
| `first_aid` | Pet first-aid trained | Ukończony kurs pierwszej pomocy dla zwierząt | Czy petsitter ma przeszkolenie z pierwszej pomocy? | Tak, petsitter ukończył certyfikowany kurs pierwszej pomocy dla zwierząt. |

### 5.6. PET_SHOP

| Kod faktu | Etykieta EN | Etykieta PL | Pytanie FAQ (PL) | Odpowiedź FAQ (PL) |
|---|---|---|---|---|
| `delivery` | Delivery | Dostawa do domu | Czy sklep oferuje dostawę? | Tak, sklep realizuje zamówienia z dostawą do domu. |
| `vet_pharmacy` | Vet pharmacy | Dział leków weterynaryjnych | Czy w sklepie można kupić preparaty weterynaryjne? | Tak, sklep posiada punkt sprzedaży preparatów weterynaryjnych. |
| `grooming_corner` | Grooming on site | Stanowisko pielęgnacji / myjnia na miejscu | Czy w sklepie można skorzystać z groomera lub myjni? | Tak, na miejscu znajduje się salon pielęgnacji lub samoobsługowa myjnia. |
| `card_payment` | Card payment | Płatność kartą | Czy można płacić kartą? | Tak, w sklepie akceptowane są karty płatnicze. |
| `parking` | Parking | Parking dla klientów | Czy przy sklepie jest parking? | Tak, przed sklepem dostępny jest parking dla klientów. |
| `click_collect` | Order online, pick up in store | Zamów online, odbierz w sklepie | Czy można odebrać zamówienie internetowe w sklepie? | Tak, sklep umożliwia bezpłatny odbiór osobisty zamówień internetowych. |
| `raw_food` | Raw food (BARF) | Karmy surowe (dieta BARF) | Czy w ofercie jest surowe mięso i suplementy BARF? | Tak, sklep prowadzi sprzedaż mrożonego mięsa i suplementów BARF. |
| `aquarium_fish` | Aquarium fish | Dział akwarystyczny (ryby i osprzęt) | Czy kupię tutaj ryby akwariowe i rośliny? | Tak, sklep prowadzi dział akwarystyczny z rybami i wyposażeniem. |
| `exotic_supplies` | Supplies for exotic pets | Akcesoria dla zwierząt egzotycznych | Czy macie akcesoria dla gadów lub gryzoni? | Tak, w ofercie znajdują się karmy i terraria dla zwierząt egzotycznych. |
