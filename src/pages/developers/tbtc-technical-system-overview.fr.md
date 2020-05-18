---
template: resource
path: developers/tbtc-technical-system-overview
title: Aperçu Technique du Système tBTC
heading: Aperçu Technique du Système tBTC
description: >-
  Apprenez en plus sur les reçus TDT, les tailles de dépôt, la balise aléatoire Keep et les signatures à seuil.
date: 2020-04-01T15:04:10.000Z
tags:
  - developers
---
tBTC comprend de nouvelles fonctionnalités qui ont des implications importantes pour les utilisateurs. Cet article explique quatre d'entre elles: les reçus TDT, les tailles de dépôt, la balise aléatoire Keep, et les signatures à seuil.

## Jeton de dépôt TBTC, dits "TBTC Deposit Token" (TDT)

Les jetons de dépôt TBTC, dits TBTC Deposit Token (TDT) sont des jetons ERC-721 non fongibles émis au moment où un utilisateur demande à faire un dépôt. Ils servent de contrepartie aux jetons TBTC et représentent un droit à l'UTXO correspondant sur la blockchain Bitcoin à un dépôt donné.

Les dépôts TBTC peuvent être verrouillés ou déverrouillés. Un dépôt verrouillé ne peut-être retiré que par le propriétaire en possession du TDT correspondant. Chaque TDT correspond à l'unique dépôt lui ayant donné naissance et est porteur d'un droit exclusif  de retrait jusqu'à 6 mois après le dépôt original.

Une fois qu'un dépôt est complètement qualifié à travers une preuve de la transaction Bitcoin qui le finance (appelée le relai SPV), le détenteur de TDT peut demander le retrait et avoir la garantie de recevoir le même UTXO ayant servi à financer le dépôt moyennant le paiement des frais de signatures.

Les TDT et TBTC sont échangeables dans les deux sens à travers un contrat appelé le Distributeur.

* Étant donné un TDT, le Distributeur émettra un TBTC.
* Étant donné un TBTC, le Distributeur le détruira et émettra un TDT spécifique..

*Le TDT est nécessaire pour retirer un dépôt en BTC verrouillé.* Il peut être vu comme un ticket de vestiaire: sans lui, impossible de récupérer votre manteau, qui représente votre BTC dans cette analogie.

Les TDTs sont transférables. Leurs détenteurs peuvent les échanger ou par exemple les utiliser comme caution ailleurs. 

En cas de fraude ou de problèmes de caution, les détenteurs d'un TDT sont sûrs d'être dédommagés en TBTC par la caution du groupe de signataires. Si le dépôt est retiré par un autre compte après être arrivé à maturité, le détenteur de TBTC est sûr d'être dédommagé en TBTC (frais de signataires en moins). Notez qu'un détenteur de TDT peut toujours retirer son dépôt même après les 6 mois de maturation écoulés tant qu'un autre utlisateur ne l'a pas échangé avant lui.

Ayant plus de valeur, un dépôt de 1 BTC est plus susceptible aux attaques telles que des réorganisations de chaîne qu'un dépôt de 0.001 BTC. Les TDTs étant non fongibles, ce risque peut-être inclus dans leur prix d'échange ce qui est particulièrement adapté aux applications utilisant du BTC comme caution. Tout destinaire de TDT devra évaluer le risque d'un jeton donné. Les TDTs sont conçus pour isoler le risque puisque les attaques visant les dépôts représentés par les TDT ne devraient impacter que les détenteurs de TDT plutôt que toute la circulation de jetons indexés au Bitcoin.

## Lots et tailles de lots

Dans le système tBTC, les dépôts sont gérés par lots. Afin de rationnaliser le système et de le rendre plus simple à gérer, les lots ne peuvent avoir qu'une taille parmis un ensemble de tailles possibles. Cet ensemble est déterminé par le systèe. Si un utilisateur veut déposer un montant plus grand que celui de la taille de lot maximale, ils devront effectuer plusieurs demandes de dépôt et les financer individuellement. Cela permet à chaque dépôt d'être géré par un groupe de signataires différent ce qui simplifie le système de caution et isole le reste du système d'un groupe de signataires malveillant ou en échec.

Ce choix de conception a des implications importantes que les utilisateurs doivent comprendre.

*Chaque dépôt doit correspondre à une des tailles de lot standard.*

Le système interprète tout trop-perçu ou paiement insuffisant comme une faute. Le principal effet d'un tel comportement consiste en la distortion de la caution des signataires. Le système est conçu pour que ce coût revienne à l'utilisateur à l'origine du dépôt.

Dans le cas d'un paiement insuffisant -- c'est à dire un dépôt d'un montant inférieur à la taille de lot choisie -- le système ne créera pas de preuve pouvant être échangée contre du TBTC. L'utilisateur renonce aux BTC verrouillés dans le dépôt qui peut alors être partagé entre signataires.

*Les utilisateurs devraient être parfaitement conscients de cette caractéristique. Dans une situation où la seule taille de lot disponible est par exemple 1 BTC, on peut facilement imaginer qu'un utilisateur tente d'obtenir 1 TBTC en faisant deux dépôts de 0.5 BTC. Un tel utilisateur perdrait l'intégralité de ses BTC puisque le système interprètera ces deux dépôts comme deux paiements insuffisants. En bref, la taille de lot d'un dépôt est fixée au moment où le dépôt est créé, et celui-ci doit être financé par le montant en BTC correspondant.*

Dans le cas d'un trop paiement -- si un utilisateur dépose plus que la taille de lot choisie -- le système ne génèrera de preuve que pour le montant standard sélectionné, preuve qui ne sera échangeable que contre ce montant en TBTC. Dans un marché efficient, on s'attend à ce que ce dépôt soit immédiatement retiré puisque l'utilisateur à l'origine de la demande de retrait s'attend à recevoir le trop-perçu comme un arbitrage. À moins que le dépôt ne soit retiré par l'utilisateur qui en est à l'origine, ce trop-perçu est abandonné au marché.

*Dans le cas d'une taille de lot de 1 BTC, un utilisateur déposant 1.4 BTC recevra une preuve lui permettrant d'émettre exactement 1 TBTC (le montant correspondant à la taille du lot). Il existe maintenant dans le système un dépôt sur-financé dont on s'attend qu'il soit retiré rapidement étant donné l'opportunité d'échanger 1 TBTC contre 1.4 BTC. L'utilisateur à l'origine du dépôt pourra échanger son TBTC contre 1 BTC normalement, mais les 0.4 BTC supplémentaires seront perdus à moins qu'il ne prenne conscience de son erreur et échanege rapidement ses TBTC contre le dépôt de 1.4 BTC original.*

Le système n'acceptera que le premier UTXO plus grand que la taille de lot. Tout autre BTC envoyé au groupe de signataires est perdu. Il est donc impératif que les utilisateurs effectuant un dépôt n'envoient qu'un UTXO. La possibilité d'envoyer plusieurs UTXO demanderait une très grande complexité de calcul sur la blockchain Ethereum et donc des frais de transaction élevés puisque chaque UTXO devrait être validé par une preuve SPV une signature explicitement autorisée. Les signatairs devraient signer chaque transaction bien que la valeur totale des UTXOs ne soit pas connue.

## Balise aléatoire pour la sélection de signataires

Le réseau Keep requiert un générateur de nombre aléatoire de confiance pour la sélection des signataires tBTC. Ce sgénérateur prend la forme d'un relai BLS à seuil.

Lorsqu'une requête est diffusée dans le réseau pour la création d'un groupe de signataires, le système tBTC utilise un germe aléatoire en provenant d'une balise aléatoire décentralisée pour sélectionner un groupe de signataires dans le vivier de candidats éligibles. Ces signataires se coordonnent autour d'un protocole décentralisé de génération de clé qui aboutit à la création d'une clé ECDSA pour le groupe, clé qui est alors utilisée pour la création d'un portefeuille sur la blockchain hôte. Ceci complète la phase de sélection des signataires.

## Signatures à seuil

Le système tBTC emploe un système de signatures à seuil pour la génération de clés. Les signatures à seuil permettent au groupe de signataires de générer une unique clé publique à partir d'un ensemble de "parties de clé privée". Cette méthode permet à un sous-ensemble de signataires de créer des signatures au nom d'un groupe plus large. Les utilisateurs peuvent vérifier les groupes de signatures avec une clé publique unique correspndant à plusieurs clés privées. Ce système apporte des garanties de sécurité sans tout le travail nécessaire dans des système de multi-signatures standards.

Les signatures à seuil ont un certain nombre d'avantages : 

* Le système ne demande relativement peu de coordination pour créer un groupe
* Il n'est pas nécessaire d'avoir confiance en chaque membre du groupe
* Le système tolère jusuqu'à N+1/2 fautes byzantines

Dans la version 1 de tBTC, les groupes de signataires sont 3-parmis-3, c'est à dire qu'il est exigé de 3 signataires qu'ils collaborent pour créer une signature au nom du groupe.

Des informations supplémentaires sur les signatures à seuil sont disponibles [ici](https://blog.keep.network/threshold-signatures-ff2c2b98d9c7).

Rendez-vous sur notre [GitHub](https://github.com/keep-network/tbtc) pour un accès à plus d'informatin ainsi que des outils et de la documentation. [Rejoignez notre newsletter](https://tbtc.network/#mailing-list) pour des mises à jour à propos du lancement à venir de tBTC sur le réseau Ethereum principal. Pour en savoir plus sur le design de tBTC, lisez les [spécifications techniques](http://docs.keep.network/tbtc/index.pdf). Rejoignez le [salon Discord #tbtc sur le serveur Keep](https://discord.gg/wYezN7v) pour des questions techniques à propos de tBTC et de [tbtc.js](https://tbtc.network/news/2020-02-14-announcing-tbtc-js), et suivez notre [compte Twitter](https://twitter.com/search?q=%22%23tbtc%22&src=typed_query) pour plus d'actualités et des opportunités de contribution au projet.
