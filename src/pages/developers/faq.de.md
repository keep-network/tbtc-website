---
template: resource
title: FAQ
heading: ' '
description: ' '
date: 2020-04-25T05:21:29.924Z
tags:
  - tBTC
---
Wie hält das tBTC die Bindung aufrecht?

tBTC hält die Bindung nicht aufrecht. Es handelt sich um eine Angebotsbindung und nicht um eine Preisbindung, so dass kein algorithmischer Mechanismus erforderlich ist, um als dezentralisierte Bindung zu funktionieren.

Warum ist der Preis von TBTC nicht genau der gleiche wie der von BTC?

Die tBTC ist keine Preisbindung an die BTC; es ist eine Angebotsbindung. Das bedeutet, dass BTC/tBTC möglicherweise nicht genau gleich sind. tBTC könnte mit einem leichten Auf- oder Abschlag gehandelt werden.

Warum ist TBTC mit ETH in seinem heutigen Verhältnis kollateralisiert?

Weil es für ein sichereres System sorgt, was bei DeFi sehr wichtig ist, insbesondere bei der Einführung eines neuen Netzwerks. ETH ist ein sichererer Kollateralisierungstyp, weil es sich um den DeFi-Standard handelt, und das Team, das am tBTC arbeitet, hat Pläne, das Verhältnis ETH/BTC-Kollateralisierung von 150% auf 135% ziemlich bald nach der Lancierung zu verschieben. Es prüft auch neue Mechanismen, die dieses Verhältnis später auf 40% Kollateralisierung senken könnten.

Wo könnte im tBTC-System etwas schief gehen?

Diese Technologie ist neu, und es ist unmöglich, jede Situation vorauszusehen, in der etwas schief gehen könnte.  Dennoch gibt es mehrere Situationen, die die Community erkannt und sorgfältige Maßnahmen ergriffen hat, um ihnen zu begegnen. Das Sicherheitsmodell ist so ausgelegt, dass, wenn die Unterzeichner sich zusammenschließen und mit Ihrer Bitcoin-Einzahlung davonlaufen, die Benutzer im TBTC zurückbezahlt werden; dafür sind die ETH-Anleihen gedacht (sie werden beschlagnahmt und liquidiert). Wenn ETH in kurzer Zeit einen massiven Einbruch erfährt und ALLE Unterzeichner weglaufen und gleichzeitig die Anbindung brechen, fällt das System auf ein synthetisches zurück. Weitere Informationen finden Sie in der technischen Spezifikation <a href="https://docs.keep.network/tbtc/index.pdf" target="_blank">tBTC</a>.

Warum gibt es feste Losgrößen? Warum gibt es keine zufällige Stückelung?

Zu viele Losgrößen werden zu einem Problem für Liquiditätspools. Die Beibehaltung mehrerer Standardlosgrößen ermöglicht eine größere Verfügbarkeit von Rückzahlungen.

Gibt es ein tBTC-Widget, mit dem ich die Prägung und Einlösung von tBTC direkt in meiner DeFi-Dapp einbinden kann?

Noch nicht. Es sind Integrationsarbeiten erforderlich, um die Prägung und Einlösung des tBTC in eine dApp zu integrieren. Der Code ist als Open-Source in der <a href="https://github.com/keep-network/tbtc.js" target="_blank">tbtc.js GitHub</a> verfügbar, so dass Entwickler Schnittstellen erstellen können, die zu ihren Produkten passen. Um Bitcoin-Transaktionen zu validieren, ist der beste Ansatz der Betrieb eines Elektrum-Servers, der sich sehr leicht aufsetzen lässt.

Wurde das tBTC auditiert?

ConsenSys Diligence führt derzeit einen sechswöchigen Kryptographie- und Code-Audit durch. Die Ergebnisse werden veröffentlicht, sobald sie verfügbar sind.

Macht die Unterzeichnung von tBTC und das Staken von ETH Sie zu einem MSB?

Jeder Benutzer sollte seine eigene Analyse durchführen, ob es in seiner Gerichtsbarkeit rechtliche Beschränkungen gibt, die ihn entweder daran hindern würden, das tBTC zu nutzen, oder ob er sich bei bestimmten staatlichen Stellen registrieren lassen müsste.

Ist die Hinterlegung der BTC für die tBTC ein steuerpflichtiges Ereignis?

Bitte erkundigen Sie sich bei einem Steuerfachmann, ob die Hinterlegung von BTC für TBTC ein steuerpflichtiges Ereignis in einer bestimmten Gerichtsbarkeit ist. Eine Sache, die zu berücksichtigen ist, ist die NFT, die mit der UTXO einer Einzahlung verbunden ist. Diese NFT soll die Zahlung einer Gebühr für die Verwahrung von BTC ermöglichen und die Möglichkeit bieten, innerhalb der sechsmonatigen Gebührenfrist genau dieselben UTXO einzulösen.

Wie ist der tBTC Unterzeichner-Set nicht verwahrend?

Die Unterzeichner-Sets des tBTC verwenden den Schwellenwert ECDSA als Bitcoin-Multisig-Ersatz. Für jede Einzahlung wird ein neuer Unterzeichner-Satz zusammengezogen (ausgewählt durch den Random Beacon), und sie erzeugen eine Bitcoin PKH-Adresse für den Einzahler, die auf der Ethereum-Chain markiert ist.

Wer sind die Unterzeichner? Kann jeder ein Unterzeichner werden?

Kurz nach dem Start sollte es eine Gruppe von etwa 80 privaten KEEP-Käufern und einige andere vertrauenswürdige Parteien geben, die tBTC unterzeichnen. Sehr bald wird die Möglichkeit angekündigt, dass sich weitere Personen beteiligen können, indem sie ETH als Unterzeichner einsetzen.

Warum ist dieses Projekt besser als andere BTC auf Ethereum-Projekten?

Einige Leute glauben, dass das tBTC aus mehreren Gründen besser ist.  Einige Projekte haben synthetische Preisbinder gebaut, was keine wirkliche Brücke darstellt. Bei anderen Projekten handelt es sich zwar um Angebots-Pegs, doch haben zentralisierte Parteien Reibungsverluste im Präge- und Einlösungsprozess verursacht und sind daher keine zensurresistenten Systeme. Einige neue Brücken sind dezentralisierte Versorgungs-Pegs, doch diese Sicherheitsmodelle sind weniger sicher. Sie stützen sich auf die Ehrlichkeitsannahme von ⅔, keine ETH/extra Sicherheiten zur Sicherung der Einlagen und verwenden brandneue "roll your own crypto" statt der peer-reviewed t-ECDSA-Kryptographie).

Was bedeutet eine sechsmonatige Gebührenperiode? Kann BTC erst nach sechs Monaten beansprucht werden?

Nein, es besteht keine Notwendigkeit, nach sechs Monaten zurückzukehren, es sei denn, es besteht die Präferenz, Bitcoin mit einem bestimmten UTXO einzulösen. Dafür ist die NFT-Quittung, TDT, gedacht. Die meisten DeFi-Benutzer haben diese Gegenleistung nicht und müssen nach sechs Monaten nicht zurückkehren.

Gibt es Pläne, eine Bitcoin-Brücke auch auf andere Chains zu bauen?

Es gibt keine festen Pläne, eine Brücke zu anderen Blockchains zu bauen. Die <a href="https://www.crosschain.group/" target="_blank">Cross-Chain Group</a> hat jedoch schon früh Gespräche mit Chains wie Cosmos, Zcash und Polkadot über vertrauenswürdige Brückendesigns geführt.

Gibt der Besitz von tBTC irgendwelche Governance-Rechte?

Nein.

Warum nicht einfach eine Preisbindung vornehmen?

Das Team hinter tBTC baut eine Angebots- und keine Preisbindung auf. Es handelt sich nicht um einen synthetischen Mechanismus. Für Besitzer sollte es keine Rolle spielen, wie hoch der tatsächliche Preis ist, es ist nur wichtig, dass Sie sie für 1 BTC einlösen können.

Warum braucht tBTC ein Preis-Feed-Oracle?

Das tBTC ist eine Seiten-Chain, die die Arbeit anonymer Parteien erfordert, so dass Anleihen von diesen Parteien gehalten werden müssen, um Absprachen zu verhindern. Vorerst ist es notwendig, sicherzustellen, dass die Unterzeichner gebunden sind, um sich gegen Fehlverhalten zu schützen. Um den BTC/ETH-Preis für diese Anleihe aufrechtzuerhalten, ist ein Preis-Feed-Oracle erforderlich.






