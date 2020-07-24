---
template: resource
title: Model bezpieczeństwa tBTC
heading: Model bezpieczeństwa tBTC
description: >-
  tBTC został zaprojektowany w taki sposób, aby użytkownicy mogli bezpiecznie
  używać Bitcoinów na Ethereum. Różne projekty przyjmują różne podejścia do
  kwestii bezpieczeństwa. Poniżej znajduje się przegląd modelu tBTC i sposobu, w
  jaki zapewnia on wysoki poziom bezpieczeństwa dla użytkowników i
  sygnatariuszy.
date: 2020-07-24T15:43:12.914Z
tags:
  - developers
---
tBTC został zaprojektowany w taki sposób, aby użytkownicy mogli bezpiecznie używać Bitcoinów na Ethereum. Różne projekty przyjmują różne podejścia do kwestii bezpieczeństwa. Poniżej znajduje się przegląd modelu tBTC i sposobu, w jaki zapewnia on wysoki poziom bezpieczeństwa dla użytkowników i sygnatariuszy.

Łańcuch boczny Bitcoin ” trust-minimized”

Łańcuchy boczne (ang. sidechains) zostały zaprojektowane z myślą o odblokowaniu potencjału Bitcoina w innych łańcuchach. Idea jest prosta - zablokować BTC na głównym łańcuchu bloków Bitcoin i odblokować go do użycia na innym łańcuchu bloków, tworząc nową walutę powiązaną z BTC. W praktyce zbudowanie dwukierunkowego PEG’a (PEG- Price / Earnings to Growth) bez zaufanych pośredników jest trudne. Blockstream’s Liquid jest przykładem łańcucha bocznego Bitcoinów, który opiera się na zaufanych pośrednikach.

Mimo że Liquid działa, brakuje mu otwartości i bezpieczeństwa dla BTC. Liquid opiera się na zaufanej federacji sygnatariuszy, która przechowuje „zablokowane” bitcoiny. Jeśli sygnatariusze sobie tego życzą, mogą cenzurować wypłaty lub wycofać fundusze. Ponadto nie ma możliwości odwołania się użytkownika w przypadku złośliwości sygnatariusza - użytkownicy muszą całkowicie polegać sieci Liquid i jej technologii bazowej.

tBTC trust-minimized stanowi alternatywę dla opisanego powyżej modelu. Sygnatariusze są nadwyżkowo zabezpieczani do 150% wartości przechowywanego przez nich depozytu, a użytkownicy otrzymują pełny zwrot kosztów w przypadku oszustwa podpisującego. Sygnatariusze są wybierani z otwartej i zdecentralizowanej sieci węzłów obsługujących protokół Keep i połączonych w Ethereum.

Proces wybicia 1 TBTC, odpowiednika Bitcoina w Ethereum, wygląda następująco:

1.	Sieć Keep wymaga posiadanie powiązanego keep’u ECDSA w celu podpisania 1 BTC.
2.	Grupa sygnatariuszy tworzy i wpłaca 150% wartości 1 BTC w ETH jako zabezpieczenie.
3.	Grupa sygnatariuszy generuje portfel Bitcoin przy użyciu progowego protokołu ECDSA.
4.	Użytkownik przesyła 1 BTC do portfela Bitcoin.
5.	Użytkownik generuje dowód SPV swojej transakcji depozytowej i wysyła go do sieci Ethereum.
6.	Użytkownik wybija TBTC.

Wymiana TBTC z powrotem na BTC to po prostu ten sam proces w odwrotnej kolejności:

1.	Użytkownik wypala TBTC i wysyła otrzymany adres Bitcoin, aby rozpocząć wykup.
2.	Grupa sygnatariuszy generuje i publikuje podpis dla transakcji Bitcoin, aby wysłać Bitcoin na żądany przez użytkownika adres Bitcoin.
3.	Użytkownik wysyła tę transakcję i wygenerowany podpis do sieci Bitcoin.

Sygnatariusze generują dowód SPV tej transakcji, publikują go w sieci Ethereum i otrzymują z powrotem swoje obligacje.

W tej operacji występują trzy systemy:

1.	Keep Network, który tworzy federacje sygnatariuszy dla każdego depozytu w celu przechowywania bitcoinów.
2.	Price feed Bitcoina, który służy do określenia zabezpieczenia sygnatariuszy w łańcuchu hostów Ethereum.
3.	Przekaźnik Bitcoin, który weryfikuje transakcje BTC w celu wybicia i wykupienia TBTC.

Zdecentralizowana sieć sygnatariuszy

tBTC korzysta z sieci Keep, aby zapewnić zawsze dostępną online, zdecentralizowaną sieć sygnatariuszy. Każda grupa sygnatariuszy, która przechowuje depozyt bitcoin, składa się z 3 węzłów. Te węzły są losowo wybierane z dużej puli za pomocą losowego sygnału Keep (ang. random beacon). Każda możliwość manipulowania zestawem sygnatariuszy jest ograniczana przez model obstawiania tokena KEEP, który zapewnia odporność na ataki typu Sybil.

Aby zapewnić użytkownikom rekompensatę w przypadku niepowodzenia operacji lub oszustwa, sygnatariusze są nadzabezpieczeni w ETH (ang. overcollateralized) w wysokości 150% wartości depozytu bitcoin. tBTC każe oszustów i zwraca w pełni depozyt użytkownikowi w TBTC, a także blokuje nieuczciwych sygnatariuszy.

Błąd sygnatariusza

Błąd sygnatariusza oznacza sytuację, kiedy sygnatariusz nie odpowiada na żądanie wykupu w odpowiednim czasie. Błędy obejmują brak podpisu do wykupu, a także brak dowodu wysłania SPV do bloku Bitcoin w celu wykupienia.

Wszystkie błędy są traktowane jako przerwania protokołu i inicjują przerwanie procesu likwidacji. Obligacje sygnatariusza są przejmowane i sprzedawane na aukcji za TBTC, dzięki czemu użytkownik może otrzymać zwrot pieniędzy za niedostępne środki, zaś połowa pozostałej części obligacji sygnatariusza (maksymalnie 1/6 pierwotnej obligacji) jest zwracana sygnatariuszom.

Aby odzyskać straty z likwidacji, grupy sygnatariuszy mogą zdecydować się na odzyskanie BTC po rozpoczęciu procesu przerwania. Klient referencyjny powierza koordynację offline każdemu sygnatariuszowi.


Oszustwo sygnatariusza

Oszustwo sygnatariusza to jedyne działanie w systemie tBTC, które prowadzi do usunięcia ze społeczności. Każdy sygnatariusz, który przeniesie bitcoiny bez autoryzacji przez protokół tBTC, zostanie wyrzucony (ang. slashed), jego token roboczy będzie wypalony, a wszystkie jego obligacje zostaną przejęte.

Oszustwo można udowodnić, przedstawiając nieautoryzowany podpis na łańcuchu jako dowód oszustwa. Każdy może przedstawić dowód oszustwa i zdobyć ETH podczas aukcji obligacji sygnatariusza.

Oszustwo podpisującego jest karane zarówno w protokołach tBTC, jak i Keep ECDSA.

1.	W warstwie tBTC uruchamia likwidację z tytułu oszustwa, a obligacje są wykorzystywane do zakupu TBTC. Posiadacz tokena depozytu tBTC otrzymuje rekompensatę w TBTC, chyba że depozyt zabezpiecza obecnie będący w obiegu TBTC. W tym przypadku TBTC jest wypalany, aby utrzymać PEG w stosunku 1: 1.
2.	W warstwie Keep sygnatariusz jest wyrzucony (ang. slashed), a jego tokeny KEEP są wypalane. Wyrzuceni sygnatariusze tracą nie tylko swój kapitał, ale także szansę na przyszłe prowizje.

Solidny price feed

Sygnatariusze wspólnie zabezpieczają przechowywane bitcoiny w wysokości 150% ich wartości, co zdecydowanie zachęca do uczciwego zachowania. Obligacje znajdują się w rodzimym aktywie Ethereum, ETH, czego wymaga price feed Bitcoina. Bezpieczeństwo price feed’u stanowi integralną część systemu.

tBTC v1 opiera się na zaufanym price feed ETH / BTC obsługiwanym przez uczestników ekosystemu. Podstawowy feed, obsługiwany przez MakerDAO, jest medianizowanym price feedem z Binance, HitBTC, Coinbase, Poloniex, Huobi i Bitfinex. Jeśli podstawowy feed przestanie raportować, system może wrócić do drugiego feed’u.

Price feedy wprowadzają klasę ataków, które mogą zaszkodzić sygnatariuszom - ale dzięki konstrukcji systemu nie mają wpływu na deponentów. Źródła danych z przestarzałymi lub zmanipulowanymi cenami mogą doprowadzić do likwidacji depozytów, ale ponieważ likwidacje są aukcjami typu holenderskiego (high-start falling price), obligacje sygnatariusza mogą być sprzedawane z niewielkim poślizgiem i powyżej wszelkich zmanipulowanych zgłoszonych cen. Krótkoterminowe manipulacje cenami nie zagrażają środkom deponentów, ale stanowią ryzyko dla sygnatariuszy.

Wadliwy feed, który jest manipulowany dla wielu bloków, z czasem zaczyna zagrażać systemowi. Jeśli kanał feed wydaje się być zmanipulowany, racjonalnie myślący użytkownicy powinni wypłacić swoje depozyty i wyjść z systemu. Warto zauważyć, że wadliwy feed nie ma wpływu na wykupywanie przez użytkowników.

Zmanipulowany feed nie uchroni nieuczciwego sygnatariusza przed wyrzuceniem, ale może obniżyć poziom regresu deponentów w przypadku niewłaściwego zachowania. Pod tym względem price feed jest środkiem obrony głebokiej - wyłączenie feeda sprowadza do słabszego modelu bezpieczeństwa.


Przekaźnik transakcji Bitcoin

Udowodnienie stanu łańcucha Bitcoin na Ethereum wymaga formy komunikacji między łańcuchami. W tym celu tBTC wykorzystuje dowody SPV, opierając się na przekaźniku open source zbudowanym przez Summa. Chociaż przekaźnik śledzi stan łańcucha bitcoinów, nadal opiera się na „założeniach SPV”, słabszej formie bezpieczeństwa niż pełna weryfikacja działania pełnego węzła.

Użycie dowodów SPV zapewnia, że TBTC jest sztywno powiązany z prawdziwym BTC - nie jest możliwe „wydrukowanie więcej” BTC. Podobnie dowody nie opierają się na uczciwej federacji, ponieważ stan bitcoina jest weryfikowany w inteligentnym kontrakcie.

Zarządzanie

Pierwsza wersja tBTC została zbudowana bez możliwości aktualizacji kontraktów, zgodnie z inspirowaną przez Bitcoin filozofią niezmienności i zarządzania opt-in. Wszelkie przyszłe wersje tBTC będą nowymi systemami i będą wymagały społecznej koordynacji w celu „aktualizacji”, podobnie jak w przypadku twardego forka na Bitcoinie.

Mimo to zespół ds. rozwoju utrzymuje uprzywilejowany klucz z 4 różnymi funkcjami podczas uruchomiania. Mozliwości te maja zastosowanie tylko do nowych depozytów, zapobiegając ingerencji zespołu w istniejące depozyty lub długo przechowywane fundusze.

1.	Aktualizacja stawki opłaty za sygnatariusza. Klucz uprzywilejowany może modyfikować opłaty pobierane przez sygnatariuszy za przyszłe depozyty. Modyfikacja dotyczy tylko nowych lokat otwieranych w późniejszym czasie. Maksymalna opłata, którą można ustawić to 10%, a minimalna 5bps (0,05%), co zapobiega nieumyślnemu włączeniu kill-switch’a.
2.	Obsługa dodatkowych wielkości lotów. Klucz uprzywilejowany może modyfikować i dodawać dostępne wielkości lotów dla nowych depozytów. Ta modyfikacja ma wpływ tylko na nowe depozyty otwierane po pewnym czasie. Dostępne wielkości lotów muszą zawsze zawierać co najmniej 1 BTC, ale nie mogą być większe niż 10 BTC lub mniejsze niż 0,0005 BTC (50 000 satów), co zapobiega przypadkowemu uruchomieniu kill-switch’a.
3.	Modyfikacja progów zabezpieczenia. Klucz uprzywilejowany może regulować trzy progi zabezpieczenia wymuszane przez system. Zmiana ta ma wpływ tylko na nowe depozyty otwierane w póżniejszym czasie, uniemożliwiając wymuszenie likwidacji istniejących depozytów. Najniższy próg to 100%, a najwyższy 300%, dzięki czemu to wywołanie nie działa jako przypadkowy kill-switch.
4.	Dodawanie zastępczego price feedu. Klucz uprzywilejowany może dodawać adresy nowych price feedów do listy odpytywanych feedów. Ponieważ feedy są odpytywane w kolejności, w jakiej zostały dodane i używany jest pierwszy plik danych, który zgłasza się bez błędów, przywilej ten może być wykorzystywany do wpływania na zgłaszaną cenę tylko wtedy, gdy istniejący price feed nie działa i przestaje zgłaszać ceny. Modyfikacja ta nie może wyłączyć głównego price feedu bez zmowy operatora i jest ważna tylko po pewnym czasie.
5.	Wstrzymanie nowych depozytów. Klucz uprzywilejowany może jednorazowo wstrzymywać nowe depozyty na 10 dni bez opóźnienia czasowego. Tą czynność można wykorzystać tylko raz. To podejście było preferowane od kill-switcha lub innego mechanizmu kontrolnego, dając programistom szansę powiadomienia użytkowników w przypadku 0-dniowej eksploatacji, pozwalając użytkownikom na wycofanie depozytów z pegu w przypadku katastrofalnej awarii. Podobnie jak w przypadku wszystkich innych funkcji klucza uprzywilejowanego, nie ma to wpływu na otwarte depozyty, które mogą być w dalszym ciągu wykupywane lub wykorzystywane do operacji.

Chociaż zarządzanie tBTC zostało zaprojektowane w taki sposób, aby było restrykcyjne i odporne na złośliwych programistów lub kradzież klucza, jak w przypadku każdego projektu, który twierdzi, że jest odporny na manipulacje, bieżąca rola zespołu programistów i całego kodu wymaga dogłębnej kontroli ze strony użytkowników i podmiotów zewnętrznych.

Dodatkowe ataki

Najsilniejszy znany atak przeciwko mechanizmowi tBTC sidechain wymaga zmowy trzech ról - podmiotu utrzymującego ceny, dużej liczby sygnatariuszy i nowych deponentów.

	Po pierwsze, opiekun kanału manipuluje zgłaszanymi cenami tak, że ETH jest na przykład 100% zawyżone w stosunku do BTC. Ta manipulacja musi być utrzymywana przez pewien czas.
	Nowi deponenci mogą teraz zobaczyć, że każdy zdeponowany przez nich BTC będzie miał teraz tylko 75% regresu w przypadku oszustwa i powinni unikać systemu. Jednak deponenci w zmowie nadal wpłacają BTC.
	Uczciwi sygnatariusze będą nadal deponować BTC, niezależnie od zabezpieczenia regresu. Jeśli jednak w zestawie podpisów jest duża liczba złośliwych sygnatariuszy, jest to okazja do zmowy i kradzieży BTC w depozytach o niskim poziomie zabezpieczenia. Sygnatariusze zostaną ukarani, tracąc 75% z 1 BTC za każdy ukradziony BTC, a także masowo wyrzucani z sieci.
	Za każdy 1 BTC usunięty z systemu, 75% z 1 BTC w ETH jest sprzedawane na aukcji lub pozostaje dostępne na aukcji; każdy depozyt, którego aukcja nie została podjęta, wpływa na podaż peg do momentu, gdy wartość TBTC będzie warta sprzedanej na aukcji obligacji.

Tego rodzaju atak jest trudny, wymaga znacznego kapitału i koordynacji. Najsilniejszym środkiem eliminującym ryzyko jest losowy sygnał ostrzegawczy Keep, wymagający dużej ilości złośliwych sygnatariuszy lub niezwykłego szczęścia po stronie atakującego.

Alternatywne modele bezpieczeństwa (BTCB, RenBTC)

Istnieje wiele alternatywnych modeli ustalania kursu bitcoinów, każdy z różnymi poziomami bezpieczeństwa. Scentralizowane banki Bitcoin, takie jak BTCB Binance, oferują proste rozwiązanie - zajmują się ustalaniem kursu BTC, ale trzeba im zaufać. Dozwolone federacje firm, takich jak Liquid i Wrapped Bitcoin, są tym samym modelem z różnymi interesariuszami.

Natomiast otwarte federacje lepiej współgrają ze zdecentralizowaną naturą Bitcoin; w tym celu w niektórych projektach zastosowano różne kompromisy w zakresie bezpieczeństwa.

Ren jest przykładem otwartej federacji, wdrażającej ustalanie kursu BTC na niestandardowej warstwie konsensusu. Model Rena jest podobny do modelu Keep - walidatorzy na Ren stawiają natywny token pracy, REN, aby uczestniczyć w protokole. Jednak Ren wymaga, aby walidatorzy obstawili stałą kwotę REN w celu przechowywania bitcoinów, który nie oferuje regresu deponentom w przypadku oszustwa. W przeciwieństwie do tego, tBTC wymaga, aby sygnatariusze byli zawsze nadzabezpieczeni, zarówno w ETH, jak i KEEP. Ren używa również mniejszej liczby federacji, dzieląc na fragmenty zestaw walidatorów z progiem 2/3 bezpieczeństwa. tBTC wymaga oddzielnej grupy sygnatariuszy dla każdego depozytu, po czym wszyscy sygnatariusze są zobowiązani do autoryzacji transakcji. Innym ważnym rozróżnieniem jest stosowanie przez tBTC dowodów SPV, które wymagają, aby tBTC podążało za „najcięższym łańcuchem” na Bitcoinie i uniemożliwiło sygnatariuszom manipulowanie depozytami użytkowników lub atakowanie forkami. Federacja Rena nie daje takich gwarancji. Wreszcie model bezpieczeństwa Rena obejmuje dodatkowe, nowatorskie konsensusy i protokoły MPC, tym samym wystawiając znacznie większą przestrzeń na atak.

Podsumowanie

Istnieje wiele różnych pegów bitcoinowych i coraz więcej pojawia się każdego dnia. tBTC wyróżnia się jako szeroko kompatybilny z Ethereum, bezpieczny i ”trust-minimized”.

Przyszłe ulepszenia w tBTC obejmują zastąpienie zaufanego price feedu i zmniejszenie wymagań dotyczących zabezpieczeń ETH.

tBTC jest tworzony przez Keep, Summa i Cross Chain Group i jest w pełni open source’owy na GitHubie.

Dołącz do kanału Discord #tbtc, aby zadawać dalsze pytania i dowiedzieć się więcej o modelu bezpieczeństwa.
