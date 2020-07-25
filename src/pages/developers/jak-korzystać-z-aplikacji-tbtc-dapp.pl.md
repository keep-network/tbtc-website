---
template: resource
title: Jak korzystać z aplikacji tBTC dApp
heading: Jak korzystać z aplikacji tBTC dApp
description: >-
  Poniżej zamieszczamy przewodnik krok po kroku dotyczący korzystania z
  aplikacji tBTC dApp.
date: 2020-07-24T15:36:14.096Z
tags:
  - developers
---
Poniżej zamieszczamy przewodnik krok po kroku dotyczący korzystania z aplikacji tBTC dApp. Aby rozpocząć:

•	Upewnij się, że masz zainstalowaną Metamask.

•	Zdobądź ETH z Coinbase lub innego źródła, jeśli jeszcze go nie masz.

•	Upewnij się, że masz ETH w portfelu Metamask. Kiedy będziesz już miał ETH w portfelu, przejdź do aplikacji Ropsten tBTC dApp.

Następnie przejdź przez 5 następujących kroków:

1. Utwórz depozyt

   ![](/img/1.png)
2. Wygeneruj adres portfela (obecnie wymagane są 2 potwierdzenia z Metamask): 

   ![](/img/2.png)
3. Wyślij BTC z dowolnego portfela na wskazany adres za pomocą kodu QR. Możesz również ręcznie skopiować adres: 

   ![](/img/3.png)
4. Poczekaj na potwierdzenie złożenia depozytu na łańcuchu Bitcoina. Proces powinien zająć około godziny i wymaga 6 potwierdzeń: 

   ![](/img/4.png)
5. Po zatwierdzeniu depozytu, będziesz mógł wygenerować dowód SPV, który jest kryptograficznym dowodem wpłaty depozytu z łańcucha BTC. Prześlij go w celu otrzymania TBTC. Ten ostatni krok składa się z dwóch części: a.	Prześlij dowód i zatwierdź go (wymaga to jednego potwierdzenia Metmask)
   b.	Po zatwierdzeniu wybij TBTC w automacie sprzedającym (Vending Machine) – wymaga to dwóch potwierdzeń Metamask: jednego, aby zatwierdzić transfer TDT Vending Machine, a drugiego do faktycznego wybicia TBTC.


   ![](/img/5.png)


   Po uzyskaniu TBTC, możesz z niego swobodnie korzystać do działania w łańcuchu Ethereum. Otrzymujesz również TDT, którego można użyć do zrealizowania depozytu na BTC (patrz następny rozdział). Możesz przeczytać więcej o TDT w dokumentacji technicznej systemu.
   Jak wymienić TBTC na BTC - wykup
   W systemie możesz również wykupić swoje BTC w zamian za TBTC.
   Najpierw wejdź do dApp, tak jak w przy pierwszej operacji (opisanej powyżej). Kliknij na „wykup”.
   Do wykonania następnych kroków będziesz potrzebował:
6. Identyfikatora TDT, który otrzymałeś podczas bicia TBTC. To coś jak w rodzaju biletu w szatni – potrzebujesz go, aby odzyskać swój płaszcz. Otrzymujesz go tylko pod koniec opisanego powyżej procesu.

   ![](/img/6.png)
7. Adres BTC, na który chcesz wysłać swoje BTC. Po zdobyciu tych informacji możesz rozpocząć proces wykupu.

   ![](/img/7.png)
8. Rozpocznij wykup podając poniższe informacje: 

   ![](/img/8.png)

Gdzie mamy wysłać Twoje Bitcoiny? Wprowadź adres BTC

2. Proces wykupu wymaga od Ciebie 4 potwierdzeń Metamask: a.	Pierwsze z nich zatwierdza transfer TBTC w celu pobrania TDT z Vending Machine (automatu sprzedającego).
   b.	Drugie żąda wysłania TDT z Vending Machine, wysyłając w zamian TBTC do spalenia.
   c.	Trzecie żąda wycofania BTC z depozytu reprezentowanego przez TDT. Po tym kroku transakcja wypłaty jest publikowana w sieci Bitcoin; musisz poczekać aż pojawi się odpowiednia liczba potwierdzeń z tego tytułu.
   (in the picture)
   Potwierdzenie 0 /6 bloków
   Czekamy, aż grupa sygnatariuszy podpisze i wyemituje Twoja transakcję Bitcoin. Możesz śledzić zmiany w Block Explorer.
   d.	Ostatnie potwierdzenie Metamask dotarcza dowód SPV, że wykup jest zakończony, umożliwiając tym samym uporządkowane zamknięcie grupy sygnatariuszy:
   Gratulacje! Udało Ci się wymienić TBTC na BTC!
   (in the picture)
   Krok 6 z 6
   Wykup pomyślnie zakończony.
   Bitcoiny zostały wypłacone.
   Wyświetl transakcję
   Dołącz do listy mailingowej tBTC, aby otrzymywać aktualizacje, w tym informacje o zbliżającym się uruchomieniu tBTC w mainnecie Ethereum. Aby dowiedzieć się więcej o projekcie technicznym tBTC, przeczytaj specyfikację techniczną. Dołącz do \[Keep #tbtc channel on Discord] (https://chat.tbtc.network , aby uzyskać odpowiedzi na pytania techniczne dotyczące tBTC i tbtc.js, a następnie śledź #tBTC na Twitterze, aby otrzymywać wiadomości o możliwości wzięcia udziału.
