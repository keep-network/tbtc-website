---
template: faq-page
path: /faq
title: FAQ
questions:
  - answer: >
      tBTC hält die Koppelung nicht aufrecht. Es handelt sich um eine
      Angebotsverknüpfung und nicht um eine Preisverknüpfung, so dass kein
      algorithmischer Mechanismus erforderlich ist, um als dezentralisierte
      Verknüpfung zu funktionieren.
    question: Wie hält das tBTC die Koppelung aufrecht?
  - answer: >
      Die tBTC ist keine Preisanbindung an die BTC, sondern eine
      Angebotsanbindung. Das bedeutet, dass BTC/tBTC möglicherweise nicht genau
      gleich sind. tBTC könnte mit einem leichten Auf- oder Abschlag gehandelt
      werden.
    question: Warum ist der Preis von tBTC nicht genau der gleiche wie der von BTC?
  - answer: >
      Weil es für ein sichereres System sorgt, was bei DeFi sehr wichtig ist,
      insbesondere bei der Einführung eines neuen Netzwerks. ETH ist ein
      sichererer Kollateralisierungstyp, weil es sich um den DeFi-Standard
      handelt, und das Team, das am tBTC arbeitet, hat Pläne, das Verhältnis
      ETH/BTC-Kollateralisierung von 150% auf 135% ziemlich bald nach der
      Lancierung zu verschieben. Es prüft auch neue Mechanismen, die dieses
      Verhältnis später auf 40% Kollateralisierung senken könnten.
    question: Warum ist tBTC mit ETH im aktuellen Verhältnis kollateralisiert?
  - answer: >
      Diese Technologie ist neu, und es ist unmöglich, jede Situation
      vorauszusehen, in der etwas schief gehen könnte.  Dennoch gibt es mehrere
      Situationen, die die Community erkannt und sorgfältige Maßnahmen ergriffen
      hat, um ihnen zu begegnen. Das Sicherheitsmodell ist so ausgelegt, dass,
      wenn die Unterzeichner sich zusammenschließen und mit Ihrem Bitcoin
      Deposit abhauen, die Benutzer im tBTC zurückbezahlt werden; dafür sind die
      ETH-Anleihen gedacht (sie werden beschlagnahmt und liquidiert). Wenn ETH
      in kurzer Zeit einen massiven Einbruch erleidet und ALLE Unterzeichner
      weglaufen und gleichzeitig den Peg brechen, fällt das System auf ein
      synthetisches zurück. Weitere Informationen finden Sie in der technischen
      Spezifikation <a href="https://docs.keep.network/tbtc/index.pdf"
      target="_blank">tBTC</a>.
    question: Wo könnte im tBTC-System etwas schief gehen?
  - answer: >
      Zu viele Lot-Größen werden zu einem Problem für Liquiditätspools. Die
      Beibehaltung mehrerer Standard-Lotgrößen ermöglicht eine größere
      Verfügbarkeit von Ablösungen.
    question: Warum gibt es feste Lot-Größen? Warum gibt es keine zufällige Stückelung?
  - answer: >
      Noch nicht. Es sind Integrationsarbeiten erforderlich, um die Prägung und
      Einlösung des tBTC in eine dApp zu integrieren. Der Code ist als
      Open-Source in der <a href="https://github.com/keep-network/tbtc.js"
      target="_blank">tbtc.js GitHub</a> verfügbar, so dass Entwickler
      Schnittstellen erstellen können, die zu ihren Produkten passen. Um
      Bitcoin-Transaktionen zu validieren, ist der beste Ansatz der Betrieb
      eines Elektrum-Servers, der sich sehr leicht hochfahren lässt.
    question: >-
      Gibt es ein tBTC-Widget, mit dem ich die tBTC-Münzprägung und -Einlösung
      direkt in meinen DeFi-Dapp einbinden kann?
  - answer: >
      ConsenSys Diligence führt derzeit ein sechswöchiges Kryptographie- und
      Code-Audit durch. Die Ergebnisse werden veröffentlicht, sobald sie
      verfügbar sind.
    question: Wurde tBTC geprüft?
  - answer: >
      Jeder Benutzer sollte seine eigene Analyse durchführen, ob es in seiner
      Gerichtsbarkeit rechtliche Beschränkungen gibt, die ihn entweder daran
      hindern würden, das tBTC zu nutzen, oder ob er sich bei bestimmten
      staatlichen Stellen registrieren lassen müsste.
    question: Macht die Unterzeichnung des tBTC und das Staken von ETH Sie zu einem MSB?
  - answer: >
      Bitte erkundigen Sie sich bei einem Steuerfachmann, ob die Hinterlegung
      von BTC für tBTC ein steuerpflichtiges Ereignis in einer bestimmten
      Gerichtsbarkeit ist. Eine Sache, die zu berücksichtigen ist, ist die NFT,
      die mit der UTXO einer Einzahlung verbunden ist. Diese NFT soll die
      Zahlung einer Gebühr für die Verwahrung von BTC ermöglichen und die
      Möglichkeit bieten, innerhalb der sechsmonatigen Gebührenfrist genau
      dieselben UTXO einzulösen.
    question: Ist die Hinterlegung der BTC für die tBTC ein steuerpflichtiges Ereignis?
  - answer: >
      Die Unterzeichner des tBTC verwenden den Schwellenwert ECDSA als
      Bitcoin-Multisig-Ersatz. Für jede Einzahlung wird ein neuer
      Unterzeichner-Satz zusammengezogen (ausgewählt durch den Random Beacon),
      und sie erzeugen eine Bitcoin PKH-Adresse für den Einzahler, die auf der
      Ethereum-Chain markiert ist.
    question: >-
      Wie wird der Unterzeichner des tBTC ohne Gewährleistungspflicht
      festgelegt?
  - answer: >
      Kurz nach dem Start sollte es eine Gruppe von etwa 80 privaten
      KEEP-Käufern und einige andere vertrauenswürdige Parteien geben, die für
      das tBTC unterzeichnen. Sehr bald wird die Möglichkeit angekündigt, dass
      sich weitere Personen beteiligen können, indem sie die ETH als
      Unterzeichner einsetzen.
    question: Wer sind die Unterzeichner? Kann jeder ein Unterzeichner werden?
  - answer: >
      Einige Leute glauben, dass das tBTC aus mehreren Gründen besser ist. 
      Einige Projekte haben synthetische Preisschrauben gebaut, was keine
      wirkliche Brücke ist. Bei anderen Projekten handelt es sich zwar um
      Angebots-Pegs, doch haben zentralisierte Parteien Reibungsverluste im
      Präge- und Einlösungsprozess verursacht und sind daher keine
      zensurresistenten Systeme. Einige neue Brücken sind dezentralisierte
      Versorgungs-Pegs, doch diese Sicherheitsmodelle sind weniger sicher. Sie
      stützen sich auf die Ehrlichkeitsannahme von ⅔, keine ETH/extra
      Sicherheiten zur Sicherung der Einlagen und verwenden brandneue "roll your
      own crypto" statt der peer-reviewed t-ECDSA-Kryptographie).
    question: Warum ist dies besser als andere BTC auf Ethereum-Projekte?
  - answer: >
      Nein, es besteht keine Notwendigkeit, nach sechs Monaten zurückzukehren,
      es sei denn, es besteht die Präferenz, Bitcoin mit einem bestimmten UTXO
      einzulösen. Dafür ist die NFT-Quittung, TDT, gedacht. Die meisten
      DeFi-Benutzer haben diese Überlegung nicht und müssen nach sechs Monaten
      nicht zurückkehren.
    question: >-
      Was bedeutet eine sechsmonatige Gebührenperiode? Kann die BTC erst nach
      sechs Monaten beansprucht werden?
  - answer: >
      Es gibt keine festen Pläne, eine Brücke zu anderen Ketten zu bauen. Die <a
      href="https://www.crosschain.group/" target="_blank">Cross-Chain Group</a>
      hat jedoch schon früh Gespräche mit Ketten wie Cosmos, Zcash und Polkadot
      über vertrauenswürdige Brückendesigns geführt.
    question: 'Gibt es Pläne, eine Bitcoin-Brücke auf anderen Ketten zu bauen?'
  - answer: |
      Nein.
    question: >-
      Gibt Ihnen das Eigentum am tBTC irgendwelche Rechte zur Leitung und
      Kontrolle?
  - answer: >
      Das Team hinter dem tBTC baut eine Angebots- und keine Preisbindung auf.
      Es handelt sich nicht um einen synthetischen Mechanismus. Für
      Bitcoin-Inhaber sollte es keine Rolle spielen, wie hoch der tatsächliche
      Preis ist, es ist nur wichtig, dass Sie es für 1 BTC einlösen können.
    question: Warum nicht einfach eine Preisbindung festlegen?
  - answer: >
      Das tBTC ist eine Side-Chain, die die Arbeit anonymer Parteien erfordert,
      so dass Verbindungen von diesen Parteien gehalten werden müssen, um
      Absprachen zu verhindern. Vorerst ist es notwendig, sicherzustellen, dass
      die Unterzeichner gebunden sind, um sich vor Fehlverhalten zu schützen. Um
      den BTC/ETH-Preis für diese Anleihe aufrechtzuerhalten, ist ein
      Preis-Feed-Orakel erforderlich.
    question: Warum braucht das tBTC ein Preis-Feed-Orakel?
---

