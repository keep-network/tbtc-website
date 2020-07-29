---
template: resource
title: tBTC Przegląd techniczny systemu
heading: tBTC Przegląd techniczny systemu
description: >-
  tBTC wprowadza nowatorskie funkcje dla użytkowników. W niniejszym artykule
  omówimy cztery z nich: pokwitowania TDT, wielkości lotów, generator losowości
  Keep (random beacon) i podpisy progowe (threshold signatures).
date: 2020-07-23T17:52:23.428Z
tags:
  - developers
---
tBTC wprowadza nowatorskie funkcje dla użytkowników. W niniejszym artykule omówimy cztery z nich: pokwitowania TDT, wielkości lotów, generator losowości Keep (random beacon) i podpisy progowe (threshold signatures).

## Token depozytowy TBTC (TDT)

TBTC (TDT) to niezamienny token (ang. non-fungible), który jest wybijany w momencie, gdy użytkownik uruchamia depozyt. TDT to niezamienny token ERC-721, który jest odpowiednikiem TBTC. Reprezentuje prawo własności do UTXO w łańcuchu bloków Bitcoin przynależnego do danego depozytu.

Depozyty TBTC można zablokować lub odblokować. Zablokowany depozyt może zostać wykupiony tylko przez właściciela depozytu za pomocą odpowiedniego TDT. Każdy TDT jest unikalny dla depozytu, w którym zapisane jest wyłączne prawo do wykupu depozytu przez okres 6 miesięcy.

W momencie, gdy depozyt jest zatwierdzony poprzez dowód sfinansowania transakcji (zwany SPV Relay), posiadacz może zażądać wykupu, a po uiszczeniu wszelkich opłat, ma zagwarantowane UTXO które sfinansowało depozyt w sieci Bitcoin.

TDT i TBTC są wymienne na podstawie umowy zwanej automatem sprzedającym (ang. vending machine), który zarządza wymianą TDT na TBTC i odwrotnie.

* Jeśli otrzyma TDT, wybije TBTC. 
* Jeśli otrzyma TBTC, wypali je i zwróci nam dany TDT.

TDT jest wymagany do wykupienia zablokowanego depozytu BTC. TDT to coś w rodzaju biletu do szatni – bez biletu, nie możesz odebrać płaszcza.

TDT są zbywalne. Posiadacze mogą nimi handlować lub wykorzystać je jako zabezpieczenie w innym miejscu.

W przypadku oszustwa lub problemów związanych z zabezpieczeniem, posiadasz TDT ma zagwarantowaną rekompensatę w TBTC za pośrednictwem zabezpieczenia w postaci obligacji grupy sygnatariuszy. Jeśli depozyt zostanie wykupiony po upływie okresu umowy, posiadacz TDT ma zagwarantowaną wypłatę w TBTC (pomniejszoną o prowizję dla sygnatariusza). Ważne: posiadacz TDT może wykupić swój depozyt i wymienić na BTC nawet po upływie 6-miesiecznego okresu, jeśli żaden inny użytkownik tego nie zrobił.

Złodziejom bardziej opłaca się ukraść depozyt 1 BTC niż depozyt 0,001 BTC, dlatego depozyty o większej wartości są bardziej podatne na ataki typu reorg. Jako NFT, TDT pozwala wycenić ryzyko, co jest bardzo istotne w przypadku aplikacji wykorzystujących Bitcoin jako zabezpieczenie. Każdy posiadacz TDT będzie musiał samodzielnie ocenić profil ryzyka danego tokena. TDT są zaprojektowane w ten sposób, aby przynosiły zysk netto poprzez eliminację ryzyka, ponieważ ataki na depozyt zabezpieczający TDT powinny mieć wpływ tylko na posiadacza TDT, a nie na całą podaż waluty (supply-pegged currency).

## Loty i wielkości lotów

Depozyty na tBTC są obliczane w lotach. Aby system był racjonalny i łatwy w zarządzaniu, stworzono zestaw lotów o stałej wielkości. Jeśli użytkownik chce zdeponować większą ilość BTC niż jest to możliwe, musi utworzyć kilka depozytów. Dzięki temu każdy depozyt będzie zabezpieczony przez inną grupę sygnatariuszy, co zarówno upraszcza łączenie grup sygnatariuszy jak i chroni szerszy system przed złośliwymi działaniami lub innymi sytuacjami.

Ten model niesie ze sobą poważne konsekwencje wobec użytkowników i warto się z nim zaznajomić.

Każdy depozyt musi odpowiadać jednemu ze standardowych wielkości lotów.

System traktuje wszystkie przypadki nadpłaty i niedopłaty – użytkownik wpłaca kwotę większą lub mniejszą niż standardowa wielkość depozytu – jako niewłaściwe działanie użytkownika. Głównym skutkiem nadpłaty lub niedopłaty jest zniekształcenie zabezpieczenia sygnatariuszy. System ma za zadanie przerzucić wynikające z tego koszty na użytkownika.

W przypadku niedopłaty – kiedy użytkownik wpłaci kwotę mniejszą niż wybrana wielkość lota BTC – system nie utworzy dowodu wpłaty, który można wymienić na TBTC. Użytkownik traci tym samym BTC zablokowane na depozycie, który może zostać podzielony między sygnatariuszy.

Użytkownicy powinni być tego bardzo świadomi. W przypadku, gdy jedyną dostępną wielkością lota jest 1 BTC, łatwo sobie wyobrazić scenariusz, w którym użytkownik, który chce otrzymać 1 TBTC, dokonuje dwóch wpłat po 0,5 BTC każdy. Użytkownik, który to zrobi, straci wszystkie swoje BTC, ponieważ system odczyta to jako dwa przypadki niedopłaty. Krótko mówiąc, wielkość lota depozytu jest ustalana w momencie tworzenia depozytu i depozyt musi być zasilony tą kwota.

W przypadku nadpłaty – kiedy użytkownik wpłaci więcej niż wybrana wielkość lota BTC – system wygeneruje dowód wpłaty, ale tylko w wysokości standardowej wielkości lota, z możliwością wykupu w zamian za tą kwotę w TBTC. Na rynku efektywnym spodziewalibyśmy się, że zostanie on natychmiast wykupiony, ponieważ wykupujący oczekuje, że nadpłacona kwota zablokowana na depozycie zostanie potraktowana jako arbitraż. O ile depozyt nie zostanie wykupiony przez pierwotnego deponenta, nadpłata przepada.

Przykład: jeśli użytkownik zdeponuje 1,4 BTC w locie o wielkości 1 BTC, otrzyma on dowód pozwalający na wybicie dokładnie 1 TBTC (kwota odpowiadająca wielkości lota). W systemie pojawi się depozyt z nadpłatą, który inny użytkownik spodziewa się wykupić i wymienić 1 TBTC na 1,4 BTC. Użytkownik, który nadpłacił BTC będzie mógł, tak jak wszyscy inni użytkownicy, wymienić swój 1 TBTC na 1 BTC, ale dodatkowe 0,4 BTC zostanie utracone (chyba, że użytkownik zda sobie sprawę z popełnionego błędu i szybko wymieni swoje TBT na pierwotny depozyt 1,4 BTC).

System zaakceptuje tylko pierwsze UTXO większe niż wielkość depozytu. Wszystkie inne BTC wysłane do grupy sygnatariuszy przepadają. Dlatego konieczne jest, aby deponenci wysyłali tylko jeden UTXO. Akceptowanie wielu UTXO od deponentów spowodowałoby znaczną złożoność łańcucha i opłaty (ang. gas fees), ponieważ każde UTXO musiałoby zostać potwierdzone za pośrednictwem SPV i autoryzowanego podpisu. Sygnatariusze musieliby być zachęcani do podpisywania każdej transakcji, mimo, że całkowita wartość UTXO nie jest znana.

## Random Beacon do wyboru sygnatariusza

Siec Keep wymaga zaufanego źródła losowości do wybierania sygnatariuszy tBTC. W tym przypadku jest to tzw. BLS Threshold Relay.

Gdy pojawi się żądanie utworzenia grupy sygnatariuszy, system tBTC użyje losowości (random seed) z bezpiecznego zdecentralizowanego random beacon’a do losowego wybrania członków grupy podpisujących z odpowiedniej puli sygnatariuszy. Sygnatariusze koordynują rozproszony protokół generowania kluczy, w wyniku czego powstaje publiczny klucz ECDSA, który jest używany do utworzenia adresu portfela, który jest następnie publikowany w łańcuchu hosta. Ten krok kończy pełny schemat wyboru i inicjalizacji sygnatariuszy.

## Podpisy progowe

tBTC wykorzystuje podpisy progowe (ang. threshold signatures) do generowania kluczy. Podpisy progowe pozwalają grupie sygnatariuszy na wygenerowanie pojedynczego klucza publicznego z zestawu „udziałów” klucza prywatnego. Ta metoda umożliwia podzbiorowi sygnatariuszy tworzenie podpisów w imieniu większej grupy. Użytkownicy mogą weryfikować grupy sygnatariuszy za pomocą jednego klucza publicznego odpowiadającego wielu kluczom prywatnym. Zapewnia to bezpieczeństwo bez spełnienia wymogów dla standardowych projektów multisig.

Podpisy progowe zapewniają szereg korzyści:

* Utworzenie grupy wymaga stosunkowo niewielkiej koordynacji Nie trzeba weryfikować zaufania względem członków grupy
* Są odporne nawet wtedy, gdy połowa grupy działa na szkodę lub nie uda się jej wygenerować podpisu

  W przypadku tBTC v1, grupy sygnatariuszy występują w modelu 3 z 3 – oznacza to, że są grupy 3 sygnatariuszy, które wymagają współpracy wszystkich 3 sygnatariuszy przy tworzeniu podpisów w imieniu grupy.

Dodatkowe informacje na temat progowych podpisów znajdziesz tutaj.

Odwiedź nas na GitHubie, aby uzyskać dostęp do informacji, narzędzi i dokumentacji. Dołącz również do listy mailingowej tBTC, aby otrzymywać najświeższe wiadomości, w tym informacje o zbliżającym się uruchomieniu tBTC w mainnecie Ethereum. Aby dowiedzieć się więcej o projekcie technicznym tBTC, przeczytaj specyfikację techniczną. Dołącz do kanału Keep #tbt na Discordzie, aby uzyskać odpowiedzi na pytania techniczne dotyczące tBTC i tbtc.js, a także śledzić wiadomości na Twitterze.
