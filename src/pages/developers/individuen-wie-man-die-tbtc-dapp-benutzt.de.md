---
template: resource
title: 'Individuen: Wie man die tBTC dApp benutzt'
heading: Wie man die tBTC dApp benutzt
description: Eine Schritt-für-Schritt-Anleitung für das Prägen und Auslösen von TBTC.
date: 2020-04-23T08:15:30.254Z
tags:
  - tbtc
---
Dies ist eine Schritt-für-Schritt-Anleitung für die Verwendung der tBTC dApp.

Um zu beginnen, müssen Sie:

* Sicherstellen, dass Sie [Metamask](https://metamask.io/) installiert haben.
* Besorgen Sie sich etwas ETH von [Coinbase](http://coinbase.com) oder aus einer anderen Quelle (um für Gas zu bezahlen), falls Sie nicht schon welche haben.
* Stellen Sie sicher, dass Sie etwas ETH in Ihrer Metamask-Wallet haben

Wenn Sie ETH in Ihrer Wallet haben, gehen Sie zu [der Ropsten tBTC dApp](https://dapp.test.tbtc.network).

Danach folgen 5 Schritte:

1. Erstellen Sie eine Einzahlung:

   ![](/img/Download.png)
2. Generiere eine BTC Wallet Address (dies erfordert derzeit 2 Metamask-Bestätigungen):

   ![](/img/initiating_deposit.png)
3. Sende deine BTC von irgendeiner Wallet an diese Adresse unter Verwendung des bereitgestellten QR-Codes. Sie können die Adresse auch selbst kopieren/einfügen:

   ![](/img/deposit_btc.png)
4. Warten Sie auf die Bestätigung der Einzahlung auf der Bitcoin-Chain. Dies sollte 6 Bestätigungen oder etwa eine Stunde dauern:

   ![](/img/confirming.png)
5. Sobald die Einzahlung bestätigt ist, können Sie einen SPV-Beweis erstellen, bei dem es sich um einen kryptografischen Nachweis Ihrer Einzahlung auf der BTC-Chain handelt. Stellen Sie diesen Nachweis zur Verfügung, um Ihr TBTC zu erhalten. Dieser letzte Schritt besteht aus zwei Teilen:

   > a. Erstellen Sie den Nachweis und reichen Sie ihn ein (dies erfordert eine Metamask-Bestätigung)
   >
   > b. Sobald Sie qualifiziert sind, prägen Sie TBTC aus dem "Automaten" (dazu sind zwei Metamask-Bestätigungen erforderlich: eine zur Genehmigung des TDT-Automaten-Transfers und eine für die eigentliche Prägung).

![](/img/complete.png)

Sobald Sie Ihr TBTC haben, steht es Ihnen frei, es zu nutzen, um auf der Ethereum-Chain zu agieren. Sie erhalten auch ein TDT, mit dem Sie die Einlage gegen BTC einlösen können (siehe nächster Abschnitt). Mehr über TDTs können Sie in der [technischen Systemübersicht](https://preview.tbtc.network/developers/tbtc-technical-system-overview) nachlesen.

## Wie Sie TBTC gegen BTC einlösen

Am anderen Ende des Umlaufs der tBTC steht die Rücklösung, bei der Sie TBTC umtauschen und im Gegenzug BTC zurückerhalten.

Zuerst gehen Sie wie beim ersten Durchlauf in die Dapp. Klicken Sie auf „redeem"

Für die nächsten Schritte benötigen Sie die folgenden Informationen:

1. Die TDT-ID, die Sie bei der Prägung des obigen TBTC erhalten haben. Sie können sich das wie das Ticket an der Garderobe vorstellen - Sie brauchen es, um den Mantel zurückzubekommen. Sie erhalten ihn erst am Ende des oben genannten Prozesses.


2. Die BTC-Adresse, an die Ihre BTC gesendet werden soll.

Sobald Sie diese Informationen haben, können Sie mit dem Einlösungsprozess beginnen.

1. Beginnen Sie den Einlösungsvorgang mit der Eingabe dieser Informationen:


2. Der Einlösungsvorgang erfordert vier Metamask-Bestätigungen von Ihnen:

a. Die erste bestätigt die Übertragung von TBTC von Ihnen, um die TDT aus dem Automaten zu holen.

b. Die zweite fordert die TDT vom Automaten an und sendet ihm im Gegenzug die TBTC zum Brennen.

c. Der dritte fordert die Entnahme von BTC aus dem durch die TDT repräsentierte Einzahlung an. Nach diesem Schritt wird die Abhebungstransaktion im Bitcoin-Netzwerk veröffentlicht, und Sie müssen warten, bis die entsprechende Anzahl von Bestätigungen erfolgt ist.

![](/img/begin-redemption-flow.png)



d. Die letzte Metamask-Bestätigung übermittelt den SPV-Nachweis, dass die Auslösung abgeschlossen ist, was die geordnete Schließung der Unterzeichnergruppe ermöglicht:

Sie haben jetzt Ihr TBTC gegen BTC eingetauscht!

![](/img/deposit-flow-complete.png)
