---
template: 'faq-page'
path: /faq
title: FAQ
domande:
  - domanda: Come fa tBTC a mantenere un ancoraggio sul prezzo di 1:1 con Bitcoin?
    risposta: >
      tBTC non mantiene un rapporto di prezzo paritario. E' il circolante che lo mantiene, e non un prezzo, ed in tal modo non sono necessari algoritmi di consenso.
  - domanda: Perchè il prezzo di tBTC non è esattamente lo stesso di BTC?
    risposta: >
      tBTC non ha un rapporto paritario di prezzo col BTC; E' un ancoraggio di circolante. Ciò significa che non può essere esattamente identico. tBTC potrebbe scambiare ad un leggero sovrapprezzo o sconto.
  - domanda: Perchè tBTC è collateralizzato in ETH sulla base del tuo prezzo?
    risposta: >
      Perchè ciò rende il sistema più sicuro, che è molto importante nella DeFi, specialmente nel momento di lancio di un progetto. ETH è più sicuro come collaterale perchè ormai è uno standard DeFi, ed il team sta lavorando ad un piano affinchè su tBTC la collateralizzazione sul cambio ETH/BTC possa scendere da 150% a 135%. Si stanno anche approfondendo meccanismi che possono portare il ratio di collateralizzazione anche al 40%, ma solo in fasi successive.
  - domanda: Cosa può andare storto nel sistema tBTC?
    risposta: >
      Questa tecnologia è nuova ed è impossibile prevedere cosa possa andare storto. Detto questo, ci sono molt rischi che la comunità ha identificato e si sono prese misure cautelative. Il modello di sicurezza è tale che se il signer collude e ruba i tuoi Bitcoin, l'utente è rimborsato in tBTC; questa è la funzione della collateralizzazione in ETH. Se ETH subisce una grossa discesa di prezzo in breve tempo e TUTTI i signers ritirano il collaterale e spezzano l'ancoraggio con il controvalore in BTC, il sistema genera un sintetico. Per maggiori informazioni, leggi <a href="https://docs.keep.network/tbtc/index.pdf" target="_blank">Qui</a>.
  - domanda: Perchè usate i lotti di dimensione fissa? Perchè i lotti non sono variabili?
    risposta: >
      Troppi lotti sono un rischio per il bacino di liquidità. Mantenendo lotti fissi consente maggiore efficienza nella operazione di riscatto.
  - domanda: C'è un widget tBTC che posso usare direttamente nella mia DeFi dApp per consentire il mining ed il riscatto di tBTC?
    risposta: >
      Non ancora. L'integrazione è richiesta per far funzionare tBTC come sistema di mining e riscatto in una dApp. Il codice è open-source nel <a href="https://github.com/keep-network/tbtc.js" target="_blank">tbtc.js GitHub</a>, enabling developers to build interfaces that match their products. To validate Bitcoin transactions, the best approach is to run an electrum server, which is very easy to spin up.
  - domanda: tBTC ha passato controlli di sicurezza?
    risposta: >
      ConsenSys Diligence è attualmente impegnata a completare un programma di 6 settimane sulla parte crittografica e di codice. I risultati saranno pubblicati non appena disponibili.
  - domanda: Depositare BTC per tBTC è un evento passibile di prelievo fiscale?
    risposta: >
      Controlla la tua posizione fiscale con un commercialista per capire se l'utilizzo di BTC o tBTC determinano un evento tassabile nella tua giurisdizione. Una cosa da considerare è che il token non fungibile (tBTC) è associtato a una UTXO di deposito. Questo NFT è progettato per corrispondere una commissione di custodia di BTC e per offrire un servizio di riscatto della stessa UTXO entro i successivi 6 mesi.
  - domanda: Perchè definite il signer tBTC non custodian?
    risposta: >
      Il signer tBTC usa una threshold ECDSA al posto di una multisig Bitcoin. Per ogni deposito, un nuovo gruppo di signer è selezionato causalmente dalla random beacon e coinvolto nella transazione. Essi generano un nuovo indirizzo PKH per il depositante, che viene registrato sulla chain di Ethereum.
  - domanda: Chi sono i signers? Tutti possono aspirare a diventarne uno?
    risposta: >
      Appena dopo il lancio, dovrebbero esser pronti un gruppo di 80 signers/investitori nella private sale di KEEP, insieme a pochi altri membri altamente autorevoli, sostenitori di tBTC. Molto presto sarà annunciata una opportunità per consentire a tutti gli utenti disponibili a fare ETH staking di diventare tBTC signer.
  - domanda: Perchè questo è meglio di altri progetti su Ethereum?
    risposta: >
      Alcune persone credono che tBTC sia meglio per diverse ragioni. Alcuni progetti hanno ancoraggi sintetici, che non sono veri e propri bridge. Altri progetti hanno un ancoraggio di circolante, ma hanno punti di centralizzazione che impattano sul processo di mining e riscatto and redemption e quindi non sono censorship-resistant. Alcuni bridges sono ancorati col circolante e decentralizzati ma sono meno solidi in termini di sicurezza. Si basano su previsioni circa comportamenti sempre non malevoli, senza nessun extra collaterale a protezione dei depositi, e usano il concetto "muovi i tuoi stessi btc" piuttosto che un meccanismo paritario basato su crittografia t-ECDSA.
  - domanda: A cosa si riferisce un periodo di 6 mesi? I BTC possono essere riscattati solo dopo 6 mesi?
    risposta: >
      No, non c'è alcun bisogno di aspettare 6 mesi, eccetto il caso in cui si preferisce riscattare la stessa UTXO. A questo infatti serve il token NFT di TDT, una sorta di "ricevuta" di avvenuto deposito. La maggior parte degli utenti DeFi non hanno alcun interesse a riscattare solo dopo 6 mesi.
  - domanda: C'è in programma la costruzione di bridge Bitcoin con altre blockchains?
    risposta: >
      Attualmente no. Tuttavia, il <a href="https://www.crosschain.group/" target="_blank">Cross-Chain Group</a> ha avviato una interlocuzione con Cosmos, ZCash e PolkaDot per iniziare a progettare bridge trustless.
  - domanda: tBTC attribuisce anche diritti di governance?
    risposta: >
      No.
  - domanda: Perchè non avete scelto un semplice ancoraggio basatos sul prezzo?
    risposta: >
      Il team dietro tBTC ha sempre voluto un ancoraggio sul circolante monetario, non sul prezzo. Non è un meccanismo sintetico. Per gli holders Bitcoin, non c'è alcun interesse a che prezzo esso viene quotato, ma hanno interesse esclusivo affinchè il riscatto sia pari all'asset stesso.
  - domanda: Perchè tBTC necessita di un oracolo di prezzo?
    risposta: >
      tBTC è una sidechain che richiede un lavoro da controparti anonime, quindi il collaterale è necessario per evitare collusioni. Per adesso, è necessario che i signers collateralizzino per evitare comportamenti malevoli. Un oracolo di prezzo ETH/BTC è pertanto necessario per gestire il collaterale.
---
