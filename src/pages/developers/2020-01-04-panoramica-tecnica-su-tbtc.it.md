---
template: resource
title: Panoramica tecnica su tBTC
heading: cc
description: cc
date: 2020-01-04T12:07:14.261Z
tags:
  - developers
---
tBTC è stato disegnato in modo da produrre per gli utenti una nuova e importante esperienza di utilizzo. Questo articolo vuole spiegarne alcune caratteristiche: Ricevute TDT, dimensioni del lotto, Keep random beacon e la soglia minima di firme (threshold signatures)

TBTC Token Deposito (TDT) il TDT è un NFT (token non fungibile) generato quando un utente richiede un deposito. Un TDT è un NFT di tipo ERC-721 che serve da controparte a TBTC. Rappresenta quindi una richiesta di avvio di deposito sottesa ad una UTXO sulla blockchain di Bitcoin.

I depositi TBTC possono essere bloccati o sbloccati. Un deposito bloccato può essere solo riscattato dal titolare-richiedente originario in possesso del TDT relativo. Ogni TDT è unico e collegato al deposito generato, e attribuisce diritti esclusivi fino a 6 mesi al suo titolare.

Una volta che il deposito viene certificato con una reale transazione sulla blockchain di Bitcoin, il titolare può chiederne il riscatto e, dopo aver corrisposto una piccola commissione, restare garantito dalla stessa UTXO che ha "finanziato" il deposito stesso.

TDT e TBTC sono interscambiabili attraverso un contratto chiamato "the vending machine", che gestisce gli scambi da TDT a TBTC e viceversa.

A ogni TDT corrisponde un TBTC. A ogni TBTC bruciato, corrisponde in ritorno uno specifico TDT. Il TDT è necessario per riscattare un deposito bloccato di BTC. Considera il TDT una specie di ricevuta fiscale senza la quale è impossibile avviare una procedura di rimborso.

I TDT sono trasferibili. Un holder può scegliere di tradarli o usarli a collaterale.

Nel caso di comportamenti malevoli, il possessore di TDT è comunque garantito dalla collateralizzazione richiesta al gruppo di signers. Se il deposito è riscattato da un altro utente dopo la scadenza dei 6 mesi, il possessore di TDT è comunque garantito a compensazione dai TBTC (al netto delle commissioni). Considera che il possessore di TDT può sempre riscattare i BTC dopo la scadenza del periodo di 6 mesi, sempre se altri utenti non ci abbiano pensato prima.

Poichè c'è più convenienza a rubare un deposito da 1 BTC piuttosto che un altro da 0.001 BTC, il deposito da 1 BTC è più soggetto ad attacchi come quelli di tipo re-orgs. Come NFT, TDT consente che tale rischio sia già prezzato al suo interno, e questo aspetto è dirimente per le applicazioni che usano BTC come collaterale. Qualsiasi potenziale utente di TDT necessita di valutare per bene il rischio. TDT è disegnato per fornire un vantaggio isolando il rischio, poichè un attacco nei confronti di un deposito a garanzia di un TDT impatta solo nei confronti del possessore del TDT, e non sull'asset messo a garanzia (BTC).

Lotti e Dimensioni I depositi su tBTC sono concessi sulla base di lotti. Per rendere il sistema razionale e gestibile, un lotto viene definito come un set di dimensioni fisse, generati dal sistema. Se un depositante vuole depositare un quantità di BTC superiore a quella della dimensione del lotto, è costretto a inoltrare molteplici richieste di deposito e finanziare ognuna di essa. Queto consente a ogni deposito di essere supportato e garantito da un unico e differente gruppo di signers, il che semplifica il processo di collateralizzazione e mitiga l'intero sistema da possibili rischi connessi a vulnerabilità all'interno di un singolo gruppo o comportamenti collusivi.

Questa architettura determina implicazioni cui l'utente deve attribuire familiarità.

Ogni deposito deve essere uguale alla dimensione del lotto standard

Il sistema riconosce tutte le istanze di deposito sotto o sovradimensionato -- nel quale un utente deposita una quantità maggiore o minore del lotto standard -- come una azione errata. L'effetto principale di un sotto-sovra dimensionamento è una distorsione della collateralizzazione dei signers. Il sistema quindi è progettato per fare in modo che tale distorsione, che rappresenta un costo ed un rischio, ricada in capo all'utente depositante.

In caso di sottodimensionamento -- dove l'utente deposita un ammontare in BTC minore del lotto -- il sistema non crea una proof che può essere riscattata per TBTC.

Gli utenti devono prestare attenzione a questa fattispecie. In una situazione dove sono disponibili, per esempio, solo lotti da 1 BTC, è facile ipotizzare che un utente possa provare a depositare 1 BTC dividendolo in 2 depositi da 0,5 BTC. Un utente che segue questa logica, si vedrà perso tutto il deposito, in quanto il sistema riconosce 2 istanze di depositi sottdimensionati. In 2 parole: il deposito deve corrispondere esattamente alla quantità definita dal lotto disponibile.

In caso di sovradimensionamento -- ovvero dove un utente deposita una quantità superiore rispetto al lotto disponibile -- il sistema genera una proof riscattabile per TBTC pari esclusivamente alla dimensione del lotto standard. In un mercato efficiente, possiamo aspettarci che in questo caso tale proof sia immediatamente riscattata in quanto il depositante si aspetta di riacquisire la quantità in eccesso nel deposito agendo da arbitraggista. Fin quando il deposito non viene riscattato dal depositante originario, la quantità in eccesso è da considerarsi persa.

In un esempio con lotto da 1 BTC, un utente che deposita 1,4 BTC riceverà una proof che gli consente di minare solo 1 BTC (pari al lotto disponibile). C'è pertanto a sistema una quantità in eccesso (0,4 BTC) che ci si può aspettare venga riscattata velocemente in quanto basata sull'opportunità di avere 1,4 BTC in cambio di un solo TBTC. L'utente che ha depositato sovradimensionando il lotto sarà invece costretto a riscattare il suo TBTC per 1 solo BTC, vedendosi perso l'ulteriore 0,4 BTC. A meno che non è più rapido degli arbitraggisti e riesce a riscattare immediatamente il suo TBTC per i suoi originari 1,4 BTC.

Il sistema accetta solo la prima UTXO più grande del lotto disponibile. Tutti gli altri BTC inviati al gruppo di signers saranno da considerarsi persi. Pertanto è imperativo che il depositante utilizzi una sola UTXO. Accettando UTXO multiple dai depositanti, si incrementerebbe la complessità della gestione on-chain e un aumento vertiginoso del gas, in quanto ogni UTXO viene prima provata via SPV e poi con una firma autorizzata. I signers inoltre sarebbero incentivati a firmare ogni transazione a discapito del fatto che tali transazioni non riescano a esser calcolate nel totale del loro ammontare.

Random Beacon per la selezione dei signers Il Network di Keep si poggia su un meccanismo di provata e casuale selezione dei tBTC signers. Questo meccanismo prende il nome di BLS Threshold Relay.

Quando arriva una richiesta alla formazione di un gruppo di signers, il sistema tBTC usa un seed casuale per definire il gruppo di signers, all'interno di una pool di candidati. Questi signers coordineranno la fase di rilascio di una chiave distribuita che risulterà in una ECDSA pubblica per il gruppo, usata per generare un indirizzo successivamente memorizzato sulla catena ospitante. Questo finalizza il processo di selezione dei signers.

Threshold Signatures (Soglia minima di firme) tBTC usa una soglia minima di firme per generare una chiave. Questo consente ad un gruppo di signers di rilasciare una chiave pubblica singola da un set di chiavi private condivise. Tale metodo abilita un sottogruppo di signers a creare firme per conto di un più grande gruppo di signers. Gli utenti possono verificare il gruppo di signers attraverso l'associazione fra una chiave pubblica singola e chiavi private multiple. Pertanto si ottiene sicurezza senza necessità di un design classico multififma (multisig).

La soglia minima di firme comporta alcuni vantaggi:

Relativamente semplice coordinazione richiesta per l'aggregazione di un gruppo Nessun membro del gruppo necessita di trust Il gruppo resta resiliente ad eventuale comportamenti malevoli perseguiti anche da una sua maggioranzaT Per tBTC v1, i gruppi di signers sono 3 di 3, e ciò significa che un gruppo necessita della collaborazione di 3 membri per generare una firma valida.


Trovi ulteriori informazione sulla soglia minima di firme [Qui](https://blog.keep.network/threshold-signatures-ff2c2b98d9c7).

Visita il nostro [GitHub](https://github.com/keep-network/tbtc) per ulteriori informazioni, tools e documentazioni. Entra nella [tBTC mailing list](https://tbtc.network/#mailing-list) per aggiornamenti, incluso il rilascio di tBTC su Ethereum. Per risorse addizionali, entra nel [Canale Keep #tbtc su Discord](https://chat.tbtc.network). Partecipa alle discussioni tecniche su [tbtc.js](https://tbtc.network/news/2020-02-14-announcing-tbtc-js) e [Seguici su Twitter](https://twitter.com/search?q=%22%23tbtc%22&src=typed_query) per news ed opportunità di partecipazione.
