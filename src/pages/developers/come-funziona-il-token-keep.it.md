---
template: resource
title: Come funziona il token KEEP
heading: Keep Token
description: KEEP è utilizzato per svolgere lavoro sul Keep Network
date: 2020-04-15T11:53:37.823Z
tags:
  - keep
---


Il token nativo di Keep, KEEP, sostiene il network e supporta tutte le dAPP costruite sopra. A chiunque voglia far parte del network è richiesto di detenere KEEP; i membri sono abilitati a ricevere ricompense svolgendo lavoro per la piattaforma. Questo lavoro consiste nell'offrire potenza computazionale e disponibilità necessaria per selezionare ed estrarre fuori dal network i "keeps" insieme ad altri dati associati. I membri sono selezionati casualmente per coordinare un protocollo di generazione di chiave distribuita, una chiave pubblica ECDSA, usata per produrre indirizzi di un wallet che poi va ad essere pubblicato sulla chain ospitante.

KEEP è l'incentivo chiave che guida un comportamento lecito e costruttivo, facilita efficienza e fiducia e promuove adozione e crescita del network. E' un token di lavoro -- il suo possesso conferisce il diritto di eseguire funzioni chiave sul network. Per questo processo, i possessori del token devono assegnare ad un minimo numero di KEEP la funzione di collaterale. Le opportunità di lavoro sono assegnate casualmente, ma nel lungo termine la quantità di lavoro assegnata è sempre proporzionale alla quantità di KEEP detenuta a collaterale. Per esempio, una persona che possiede 1000 KEEP può aspettarsi di essere selezionata per eseguire un lavoro 10 volte più frequentemente di un utente che ne detiene 100, guadagnandone quindi più commissioni.

L'architettuta del network incrementa l'utilità del token. I KEEP conferiscono agli holders una ricompensa proporzionale alla quantità collateralizzata, e quindi all'"impegno" trasferito sul network. L'idea è che chi è più coinvolto e finanziariamente dedito al progetto, percepisce maggiori ricompense. Lo staking minimo richiesto è alto al lancio della mainnet, ma diminuisce gradualmente nei successivi 6 mesi.

Interested readers should check out[Mulitcoin’s deep dive into work tokens](https://multicoin.capital/2018/02/13/new-models-utility-tokens/)for further insights on the concept.

**Libertà, non coercizione**

L'etica di Keep è basata sulla assegnazione di ampia autonomia all'holderKeep’s ethos is to give the token holder the maximum possible autonomy. We believe in designing systems of incentives, not in prescribing behavior. As such, the KEEP token offers flexibility for holders and operators to decide where they want to put their risk and how to manage it. We are interested in building ecosystems that allow people to act as they wish, and in which the aggregate behavior of all participants results in a net benefit and the growing adoption of the network and its token.

Keep is designed to support an unlimited array of applications and to give members total freedom in choosing where to invest their resources and time. Keep members must “approve” any app on the network in order to be considered for work within that app. Each project will have its own specific parameters and requirements, and it’s up to KEEP holders to decide whether the specific incentives of each justify the risks and the time commitment.

The only component that all KEEP service providers must participate in is the random beacon, which selects groups of signers for the apps built on Keep. When someone using one of these apps needs the beacon to generate a random number, that user pays a fee which is then split between the delegators participating in the beacon.

[tBTC](http://tbtc.network/), the safe way to earn with your Bitcoin that launches April 27, can serve as an example here. tBTC is an open-source project supported by Keep,[Summa](https://summa.one/)and[Cross-Chain Group](https://www.crosschain.group/). Once providers opt into tBTC, they can delegate their ETH for a chance to be selected as signers, who verify and hold BTC deposited by users of the app. In addition to the minimum stake of delegating KEEP, these signers must bond an amount of ETH equal to 150% the value of the BTC being deposited, in order to disincentivize bad behavior. This 150% bond is specific to tBTC, and is one of the factors signers must consider when deciding whether or not to “approve” the app to consider them for signers’ groups. When the selected signers perform their functions on the app properly, they receive fees in KEEP.

**Tokenomics and the future of KEEP**

KEEP’s tokenomics are relatively simple. On a very basic level, Keep receives fees for all the activity that takes place on the apps it supports. There is a fixed supply of KEEP, so whatever the future value of the network is, we know exactly how many pieces it’s divided into. About 25% of the KEEP supply is set aside for public distribution, you can[learn more about Keep’s stake drop and “Play for Keeps” here](https://blog.keep.network/how-to-get-keep-stake-eth-42252ee11863). All things being equal, we should expect increased usage to create more demand for each unit. KEEP is designed so that the more apps there are on the network, the more opportunities there are to earn with the token. This should lead to more people delegating KEEP to participate in these apps, creating more value for the entire ecosystem.

Keep’s philosophy is rooted in the idea that people should have the freedom to make their own choices, and that markets based on incentives produce better results than tightly regulated structures where behavior is strictly prescribed. KEEP, a work token, owes its design to these values. It offers holders the latitude to make their own decisions about which ideas to participate in and how many tokens to commit. We have no doubt that some will be conservative, others reckless. Some will participate in every app, and others will devote themselves to one or two. The Keep team doesn’t pick winners or losers among apps or force our token holders into certain actions. We’re confident that in the aggregate, the ecosystem we are building will create value for everyone.

[Join the tBTC mailing list](https://tbtc.network/#mailing-list)for updates.

Additional resources:

* Keep’s[GitHub](https://github.com/keep-network)
* The tBTC[Technical spec](http://docs.keep.network/tbtc/index.pdf)
* [tbtc.js](https://tbtc.network/news/2020-02-14-announcing-tbtc-js)
* The[Keep #tbtc channel on Discord](https://discord.gg/wYezN7v)
