---
template: resource
title: Modèle de sécurité de tBTC
heading: Modèle de sécurité de tBTC
description: >-
  Ce qui suit est un résumé du modèle de sécurité du protocole tBTC ce qui permet une utilisation en toute confiance par les utilisateurs et signataires.
date: 2020-04-18T18:21:28.438Z
tags:
  - security
---
tBTC est conçu pour être le moyen sûr d'utiliser le Bitcoin sur la blockchain Ethereum. Il existe différents projets approchant chacun la sécurité d'une manière qui leur est propre. Ce qui suit est un résumé du modèle de sécurité du protocole tBTC ce qui permet une utilisation en toute confiance par les utilisateurs et signataires.

## Une sidechain Bitcoin nécessitant un minimum de confiance

Les sidechains (chaînes parallèles) ont été inventées comme un moyen d'expérimenter avec le potentiel du Bitcoin sur d'autres blockchains. L'idée est simple - verrouiller du BTC sur la blockchain Bitcoin principale et en déverrouiller pour l'utiliser sur une autre blockchain, créant ainsi une autre monnaie indexée sur le BTC. Dans la pratique, créer ce type de lien sans un tiers de confiance est une tâche difficile. Le réseau Liquid de Blockstream est un example de sidechain Bitcoin se reposant sur un tiers de confiance.

Bien que le réseau Liquid fonctionne, il n'a ni l'ouverture ni la sécurité du Bitcoin. Liquid repose sur une fédération de signataires de confiance qui deviennent dépositaires du Bitcoin "verrouillé". Si les signataires le souhaitent, ils peuvent censurer des retraits ou s'emparer des fonds. Par ailleurs, les utilisateurs n'ont aucun recours en cas de comportement malveillant des signataire - les utilisateurs doivent avoir une confiance totale en le réseau Liquid et la technologie sous-jacente. 

tBTC est une alternative qui **minimise la confiance requise**. Les signataires doivent fournir une caution de 150% la valeur des dépôt de Bitcoin dont ils sont dépositaires et les utilisateurs sont complètement remboursés dans le cas d'une [fraude des signataires](#signer-fraud). Les signatairs sont choisis parmi un réseau ouvert et décentralisé de noeuds du protocole Keep reliés au réseau Ethereum.

L'opération de base d'émission d'un TBTC, la version indexée du Bitcoin sur la blockchain Ethereum se déroule comme suit :

1. Une requête d'un "keep" ECDSA sous caution est envoyée au réseau Keep pour signer 1 BTC.
2. Un **groupe de signataires** rassemble **150% de la valeur d'un BTC en ETH** et le dépose sous la forme d'une caution.
3. Le groupe de signataires génère un portefeuille Bitcoin en utilisant un [protocole ECDSA à seuil](https://www.binance.vision/security/threshold-signatures-explained).
4. L'utilisateur envoie 1 BTC au portefeuille Bitcoin.
5. L'utilisateur génère une [**preuve SPV**](https://docs.keep.network/tbtc/#spv) de leur transaction de dépôt et l'envoie sur la blockchain Ethereum.
6. L'utilisateur déclenche l'émission d'un jeton TBTC.

Échanger des TBTC contre du Bitcoin consiste simplement en le même processus dans le sens contraire :
1. L'utilisateur détruit les TBTC e fournit une adresse Bitcoin pour pouvoir entamer le retrait.
2. Le **groupe de signataires** génère et publie une signature pour envoyer le montant correspondant en Bitcoin à l'adresse demandée par l'utilisateur.
3. L'utilisateur diffuse la transaction ainsi que la signature correspondante sur le réseau Bitcoin.

Les signataires génèrent une **preuve SPV** de cette transaction, la publient sur la chaîne Ethereum, et récupèrent leur caution.

Trois systèmes interviennent durant cette opération :

1. Le réseau Keep sur lequel est créé une fédération de signataires pour chaque dépôt qui deviendront dépositaires du Bitcoin.
2. Le flux de prix du Bitcoin, utilisé pour déterminer le montant de la caution en ETH que les signataires doivent déposer sur la blockchain Ethereum.
3. Le relai Bitcoin qui vérifie les transactions de BTC et est chargé de l'émission et de l'échange de TBTC.

## Un réseau de signataires décentralisé

tBTC utilise le [réseau Keep](https://keep.network/) afin de garantir qu'un réseau de signataires décentralisé soit toujours disponible. Chaque groupe de signataires dépositaire d'un dépôt de Bitcoin est constitué de 3 noeuds. Ces noeuds sont sélectionnés de manière aléatoire dans un groupe plus large de noeuds utilisant [la balise aléatoire Keep](https://docs.keep.network/random-beacon/). La probabilité de manipulation en provenance de l'ensemble des signataires est réduite par le modèle de mise en dépôt (dit "staking") du jeton KEEP qui protège des attaques Sybil.

Pour s'assurer que les utilisateurs soient correctement dédommagés en cas d'erreur ou de fraude, les signataires déposent une garantie d'un montant de 150% la valeur en Bitcoin dont ils sont dépositaires. tBTC prend en charge les échecs de signature et la fraude en remboursant intégralement les utilisateurs en TBTC ainsi qu'en rendant le signataire responsable inéligible aux participations futures.

### Échec d'un signataire

Un échec de signataire correspond au cas où un signataire ne répond pas à une requête de retrait dans le temps imparti. Les échecs de signataires peuvent inclure un échec à produire une signature lors du processus de retrait, ainsi qu'un échec à produire la preuve SPV de la rédemption.

Tout échec est traité comme une interruption de protocole et acitive le ["abort liquidation flow"](https://docs.keep.network/tbtc/#redemption). Les cautions des signataires son saisies et vendues aux enchères afin que l'utilisateur puissent être dédommagé des fonds perdus et la moitié du du reste de la caution (1/6 du total au maximum) est retournée aux signataires.

S'ils veulent compenser une partie de leur perte liée à la liquidation de leur caution, les groupes de signataires peuent se coodronner hors-ligne pour récupérer les BTC après l'interruption du protocole. Ce processus n'est pas inclus dans le logiciel de référence.

### Fraude de signataire

La fraude de signataire est la seule action dans le système tBTC pouvant conduire à une punition totale. Tout signataire qui déplacerait des Bitcoin sans autorisation du protocole tBTC est puni par la destruction de leurs tokens KEEP et la confiscation de leur caution pour dédommager l'utilisateur.

La fraude peut être prouvée en présentant une signature en provenance de la blockchain Bitcoin n'ayant pas été autorisée au préalable.

La fraude de signataire est punie à la fois par les protocoles tBTC et ECDSA.

1. Au niveau du protocole tBTC, le processus de liquidation est lancé et les cautions sont utilisées pour acheter des jetons TBTC. Le détenteur de [jetons de dépôt tBTC (tBTC Deposit Tokens ou TDT)](https://tbtc.network/developers/tbtc-technical-system-overview) est dédommagé en TBTC à moins que le dépôt ne garantisse des TBTC déjà en circulation. Dans ce cas, le TBTC est détruit pour maintenir une indexation avec un ratio de 1:1.
2. At the Keep layer, the signer is slashed and their KEEP tokens are burned, potentially removing them from the candidate pool. Slashed signers are not only losing their capital, but opportunity for future fees.

## Un flux de prix résilient

Les signataires déposent collectivement une caution couvrant 150% de la valeur des Bitcoin dont ils sont dépositaires afin d'encourager un comportement honnête comme détaillé précédemment. Ces cautions sont en ETH, le jeton natif à la blockchain Ethereum et requièrent un flux de prix pour le Bitcoin. La sécurité de ce flux de prix est donc essentielle pour le bon fonctionnement du système.

La version 1 de tBTC repose sur un flux ETH/BTC de confiance opéré par des participants à l'écosystème. Le flux primaire, maintenu par MakerDAO, correspond au prix médian de Binance, HitBTC, Coinbase, Poloniex, Huobi et Bitfinex. Si ce flux primaire cesse de fonctionner, le système peut se rabattre sur un flux secondaire.

Les flux de prix introduisent la possibilités d'attaques visant les signataires mais qui n'affectent pas les utilisateurs déposant du Bitcoin par design. Un cours manipulé ou figé peut déclencher une liquidation. Comme les liquidations sont des enchères inversées avec un prix de départ élevé, les cautions des signataires peuvent être vendues avec un [glissement](https://en.wikipedia.org/wiki/Slippage_(finance)) faible, au dessus de quelconque prix manipulé rapporté par le flux. Ces manipulations à court terme du flux de prix ne menacent pas les dépôts des utilisateurs mais présentent un risque pour les signataires.

Un flux défectueux menace le système si la durée de la manipulation s'étend sur plusieurs blocks. Si un flux semble manipulé, les utilisateurs rationnels devraient retirer leurs dépôts et sortir du système. En particulier, un flux défectueux n'interfère pas avec le processus de rédemption.

A manipulated feed won’t save a malicious signer from being slashed, but it can lower the level of depositor recourse in the case of misbehavior. In this regard, the price feed is a defense-in-depth measure - disabling the feed falls back to a weaker security model.

## Un relai de transactions Bitcoin

Prouver l'état de la blockchain Bitcoin sur la blockchain Ethereum requiert une méthode de communication entre les deux chaînes. tBTC  utilise à cette fin des [preuves SPV](https://docs.keep.network/tbtc/#spv), en s'appuyant sur un [relai open-source](https://github.com/summa-tx/relays) développé par [Summa](https://summa.one). Bien que le relai suive l'état de la blockchain Bitcoin, il repose quand même sur des "hypothèses SPV", une forme de sécurité plus faible que la vérification complète qui serait celle d'un noeud complet (full node).

L'utilisation de preuves SPV garantie que TBTC est strictement indexé au vrai BTC -- il est impossible "d'imprimer" plus de BTC.  The use of SPV proofs ensures that TBTC is hard-pegged to real BTC -- it isn’t possible to “print more” BTC. De la même façon, les preuves ne reposent pas sur une fédération honnête de signataires puisque l'état de la blockchain Bitcoin est vérifié directement par le contrat intelligent.

## Gouvernance

La première version de tBTC a été developpée sans aucune option de mise à jour des contrats en accord avec la philosophie d'irréversibilité et de gouvernance optionelle du système Bitcoin. Toute version future de tBTC nécesitera une coordination des différents acteurs pour "mettre à jour" le système, de la même manière que se produirait un "hard fork" du réseau Bitcoin.

Cela dit, l'équipe de développement conserve des clés d'accès privilégiées leur donnant accès à 4 capacités d'intervention après le lancement. Ces capacités ne s'appliquent qu'aux nouveaux dépôts et n'interfèrent pas avec les dépôts existant ou les fonds présents depuis longtemps sur la plateforme.

1. [Mise à jour des frais de signataires](https://github.com/keep-network/tbtc/blob/19aa270197d84d64ef3a64bdcb09544abf6787b3/solidity/contracts/system/TBTCSystem.sol#L160). La clé permet de modifier les frais demandés par les signataires. Cette modifiation n'impacte que les dépôts effectués après sa mise en oeuvre et suite à un délai de mise en application. Les frais peuvent être modifiés dans une fourchette allant de 0.05 à 10%, prévenant tout arrêt inopiné du système.
2. [Support de nouveaux montants de dépôts](https://github.com/keep-network/tbtc/blob/19aa270197d84d64ef3a64bdcb09544abf6787b3/solidity/contracts/system/TBTCSystem.sol#L160). La clé permet de modifier et d'ajouter des montants de dépôts. Comme précédemment, ceci n'impacte que les dépôts suivant la mise en application de cette mesure. Les montant de dépôt possibles doivent toujours comprendre au moins un montant de 1 BTC et ne peuvent excéder 10 BTC, ou être plus faibles que 0.0005 BTC, retirant une fois de plus toute possibilité d'arrêter le système.
3. [Modification du seuil de caution](https://github.com/keep-network/tbtc/blob/19aa270197d84d64ef3a64bdcb09544abf6787b3/solidity/contracts/system/TBTCSystem.sol#L195). La clé permet d'ajuter les trois seuils de caution imposés par le système. Cela n'affecte encore que les nouveaux dépôts, prévenant ainsi une liquidation des dépôts existant. Le seuil peut varier entre 100% et 300%, prévenant la possibilité d'un arrêt du système.
4. [Ajout d'un flux de prix de secours](https://github.com/keep-network/tbtc/blob/master/solidity/contracts/system/TBTCSystem.sol#L404). La clé permet d'ajouter l'adresse du contrat d'un nouveau flux de prix à la liste des flux possibles. Comme les flux sont interrogés par le système dans l'ordre dans lequel ils ont été ajoutés et que le premier flux fonctionnel est utilisé, ce privilège ne peut être utilisé que pour influencer le prix rapporté si les flux existant cessent de fonctionner correctement. Cette modification ne peut pas désactiver le flux primaire sans la collusion de ses opérateurs et n'entre en vigueur qu'après un délai.
4. [Mise en pause des nouveaux dépôts](https://github.com/keep-network/tbtc/blob/19aa270197d84d64ef3a64bdcb09544abf6787b3/solidity/contracts/system/TBTCSystem.sol#L129). La clé permet de bloquer les nouveaux dépôts pour une durée de 10 jours.  Ce privilège ne peut être utilisé qu'une seule fois. Nous avons privilégié cette approche à un dispositif d'arrêt d'urgence ou autre système de contrôle. Cela laisse aux développeurs le temps d'alerter les utilisateurs dans le cas où une vulnérabilité 0-day est découverte, laissant aux utilisateurs l'opportunité de retirer leurs dépôts si une panne catastrophique venait à se produire. Comme tous les autres privilèges, cela n'affecte pas les dépôts existant qui peuvent être retirés normalement.

Bien que le système de gouvernance de tBTC ait été conçu pour être restrictif et resistant face à des administrateurs malveillants ou une situation de vol ou de corruption de la clé privilégiée, tout comme n'importe quel projet se réclamant résistant à la censure, le rôle de l'équipe de développement et toute mise à jour du code oivent faire l'objet d'un examen approfondi de la part des utilisateurs et  autres observateurs.

## Attaques supplémentaires

L'attaque la plus puissante contre le mécanisme de sidechain tBTC nécessite la collusion de trois classes d'acteurs -- les administrateurs du flux de prix, un grand nombre de signataires, et les utilisateurs à l'origine de nouveaux dépôts.

* Premièrement, les administrateurs du flux de prix manipulent le prix rapporté de manière à ce que chaque ETH soit par exemple surévalué de 100% par rapport au BTC. Cette manipulation doit être maintenue dans le temps.
* Les utilisateurs à l'origine de nouveaux dépôts ne seront à présent éligibles qu'à un dédommagement de 75% en cas de fraude et devraient éviter le système. Cependant, des utilisateurs malicieux continuent de déposer des BTC.
* Des signataires honnêtes continueront de se rendre dépositaires de ces BTC sans se préoccuper du montant de la caution. Cependant, s'il y a une grande proportion de signataires malveillants, cela créer une opportunité de s'enfuir avec les BTC sous-cautionnés. Ces signataires seront liquidés et perdront 75% de la valeur de chaque BTC volé tout en étant éjectés du réseau définitivement. 
* Pour chaque BTC retiré du système, un montant en ETH de 75% de la valeur d'un BTC est mis aux enchères ou le même reste disponible pour une enchère; tout dépôt dont l'enchère n'est pas achevée altère l'indexation jusqu'à ce que la valeur du TBTC atteignent celle de la caution mise aux enchères. 

Cette attaque est difficile à exécuter et demande un large investissement ainsi qu'une grande coordination. La meilleure protection est [la balise aléatoire Keep](https://blog.keep.network/whats-in-a-beacon-12c34b0bc078), qui nécessite une large portion de signataires malveillants dans le vivier de candidats ou une incroyable chance de l'attaquant.

## Modèles de sécurité alternatifs (BTCB, RenBTC)

Il existe de nombreuses alternatives pour du Bitcoin indexé, chacune avec un niveau de sécurité différent. Les banques centrales de Bitcoin telles que [le BTCB de Binance](https://www.binance.com/en/blog/347360878904684544/Introducing-BitcoinPegged-Token-on-Binance-Chain) offrent une solution simple - l'indexation  est gérée par les banques, mais vous devez  avoir confiance en leur intégrité. Des fédérations avec un accès contrôlé telles que Liquid ou [Wrapped Bitcoin](https://www.wbtc.network/) suivent le même modèle avec des parties prenantes différentes.

Ceci est en constrate avec des fédérations ouvertes qui correspondent plus à l'esprit de décentralisation du Bitcoin; dans ce but, différents projets ont choisi différents modèles de sécurité.

[Ren](https://medium.com/renproject/welcome-to-the-renvm-developer-center-c1ade842fe07) est un exemple de fédération ouverte qui met en oeuvre un Bitcoin indexé grâce à un système de consensus spécifique. Le modèle de Ren ressemble à celui de Keep - les validtaures de Ren mettent en jeu un jeton natif, le REN, afin de pouvoir participer au protocole. Cependant, Ren n'impose qu'un montant fixe de dépôt afin de pouvoir devenir dépositaires de Bitcoin, ce qui laisse les utilisateurs sans recours en cas de fraude. tBTC en revanche impose aux signataires d'avoir déposé une caution plus élevée que la valeur des Bitcoins dont ils sont dépositaires à tout instant en ETH et en KEEP. Ren utilise également un moins grand nombre de fédérations en mettant en place un "sharding" de leur ensemble de validateurs avec un seuil de sécurité de 2/3. tBTC fait appel à un groupe de signataires différent pour chaque dépôt et tous les signataires doivent autoriser les transactions. L'usage de preuves SPV est une autre distinction majeure qui force tBTC à suivre la règle du consensus de Nakamoto (chaîne avec le plus de travail) et empêchant les signataires de censure les dépôts des utilisateurs ou de choisir un fork. La fédération de Ren n'assure pas de telles garanties. Enfin, le modèle de sécurité de Ren comprend l'addition d'un nouveau système de consensus ainsi que d'un nouveau protocole de calcul multipartite, exposant ainsi une plus grande surface d'attaque.

## Conclusion

Il existe une grande variété de systèmes d'indexation du Bitcoin et d'autres modèles sont proposés tous les jours. tBTC se distingue par sa grande compatibilité avec l'écosystème Ethereum, la minimisation de la confiance requise, et une grande sécurité.

À l'avenir, le protocole sera amélioré avec  [le replacement du flux de prix de confiance](https://github.com/keep-network/tbtc/issues/254) et la [réduction de la caution en ETH nécessaire](https://github.com/keep-network/tbtc/issues?q=is%3Aissue+is%3Aopen+collateral).

tBTC est développé par [Keep](https://keep.network), [Summa](https://summa.one), et le [Cross Chain Group](https://crosschain.group), et est entièrement open sourced [on GitHub](https://github.com/keep-network/tbtc).

Rejoignez le [salon #tbtc de notre serveur Discord](https://discord.gg/wYezN7v) pour poser des questions supplémentaires sur le modèle de sécurité.
