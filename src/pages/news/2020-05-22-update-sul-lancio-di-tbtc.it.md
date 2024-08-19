---
template: news-item
title: Update sul lancio di tBTC
description: Update sul lancio di tBTC
date: 2020-05-22T08:21:09.217Z
---
2020-05-22

Venerdi 15 maggio una versione alpha di tBTC -- release candidate 0 (rc.0) -- è andata online. La mattina del 18 Maggio [è stato attivato il blocco di emergenza dei depositi per 10 giorni](https://etherscan.io/tx/0xc5c08e982cfdd9d11b01c32bcb16b1597aa792c0bdf0f65d0a21386dd1edc846#eventlog). Questo evento è accaduto dopo la scoperta di una rilevante fragilità nel sistema di riscatto dei depositi, che avrebbe potuto mettere a repentaglio il collaterale dei signers in alcune circostanze.

I dettagli dell'evento li trovate [Qui](https://tbtc.network/news/2020-05-21-details-of-the-tbtc-deposit-pause-on-may-18-2020/).

Nonostante le difficoltà incontrate durante il lancio della rc.0 e le precauzioni e i meccanismi di controllo presi, tutti i fondi sono comunque restati sempre al sicuro.

### Tutti i depositi sono stati riscattati in sicurezza

Un piccolo numero di membri della community ha già depositato BTC durante i test della dAPP. La reazione immediata ha consentito il riscatto dei BTC e il salvataggio del collaterale dei signers, e ad oggi il 99,83% del circolante del BTC è stato riscattato su [questo indirizzo](https://etherscan.io/token/0x1bBE271d15Bb64dF0bc6CD28Df9Ff322F2eBD847?a=0xe52e028f0d8f2e7a9d78e48199234b1231774e6a). La rimozione di ETH residuali e inutilizzati è quasi completa; i fondi non sono a rischio.

## **Prossimi steps**

Guardando avanti, tBTC approderà ad una nuova release candidate. Le Release candidate sono software molto vicini alla loro versione finale, ma che il team di sviluppo ritiene quasi "pronte" i quanto necessitano ancora di un accurato feedback da parte dell'utenza. Le release candidate progrediscono da 0 a 1, a 2 e cosi fin quando non si approda alla versione definitiva e conclusiva.

La versione iniziale di tBTC, rc.0, ha subito una vulnerabilità che ha messo in pausa i depositi. Nelle settimane prossime, saranno rilasciate in una rc.1, un nuovo set di smart contract che include un sistema di mitigazione della vulnerabilità cosi come altre correzioni a minore priorità.

Inizialmente la dApp costruita sulla rc.1 rimarrà in versione alpha. Eventualmente sarà rilasciata una versione beta per un test, che rimarrà a lungo in beta finchè non saranno aggiunte tutte le funzioni.

### Un limite graduale al circolante

Una moneta in un sistema è usata come metro di misurazione della capacità del sistema stesso ad essere pronto e giunto alla versione definitiva. Nella rc.1, si porrà un limite al circolante tBTC di 100 BTC nel primo mese. Nei mesi successivi, tale limite verrà gradualmente rimosso sulla base di un piano predefinito di sviluppo.

| Month     | 1   | 2   | 3   | 4    | 5   |
| --------- | --- | --- | --- | ---- | --- |
| Cap (BTC) | 100 | 250 | 750 | 1000 | \-  |



Se per qualsiasi motivo si trova una vulnerabilità negli smart contract, i depositi saranno sospesi e i fondi restituiti. I nuovi smart contract sostituiranno quelli critici e verrà rilasciata una nuova rc.2, resettando il limite al circolante.

Dopo 5 mesi il circolante sarà molto più alto -- e dopo 12 mesi senza eventi avversi, il bottone di sospensione dei depositi verrà disabilitato.

### Espansione dell'audit sulla sicurezza

tBTC, che ha concluso il primo security audit in Marzo, continuerà ad essere testato. La vulnerabilità sulla rc.0 è stata condivisa con i precedenti auditors, ConsenSys Diligence, e anche con gli auditors attuali, Trail of Bits, per eventuali nuovi feedback e approfondimenti.

E' stato avviato un lavoro insieme a Trail of Bits per espandere e automatizzare più integrazioni e test per tBTC, per incrementare una analisi su singole componenti del sistema che fino adesso avevano ricevuto meno attenzione. Ci sarà anche focus per identificare aree del sistema addizionali che meritano un indagine scrupolosa.

Un terzo audit sulla sicurezza sarà pianificato in futuro. In aggiunta, la massima ricompensa bounty per la community rivolta a identificare bug e criticità, è stata aumentata di 10 volte, giungendo a quota $120,000 US. 

**8 Giugno - Stakedrop**

Come parte del piano di rollout, il [ tBTC stakedrop](https://www.crowdcast.io/e/keep-stakedrop---live/register), dove ognuno può guadagnare KEEP token in cambio di una attività di staking sul network, è stato pianificato per l'8 di Giugno.
