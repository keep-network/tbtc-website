---
template: news-item
title: '3-en-1: Comment tBTC est à la fois un jeton ERC-20, ERC-721, et un "stablecoin"'
description: 'How tBTC is ERC-20 Token, ERC-721, and Stablecoin'
date: 2020-05-06T15:34:44.666Z
---
TBTC permet aux utilisateurs d'utiliser des BTC sur la blockchain Ethereum. Des TBTC sont émis après qu'un utilisateur ait fourni une preve de dépôt de leurs BTC. On peut considérer cela comme trois types de jetons à la fois : ERC-20 token, ERC-721 et un "stablecoin".

TBTC est un jeton standard ERC-20 de la blockchain Ethereum. Le standard ERC-20 est commun à tous les jetons Ethereum, ce qui leur permet de communiquer et interagir.

Les TBTC peuvent également être échangés avec des jetons de dépôt TBTC dits "TBTC Deposit Tokens" ou TDT à travers un contrat appelé la Distributeur qui gère l'échange de TBTC contre des TDT et inversement.

* Étant donné un TDT, le Distributeur émettra un TBTC. 
* Étant donné un TBTC, le Distributeur le détruira avant d'émetre un TDT spécifique.

Pour en savoir plus sur les TDT et le Distributeur, [rendez-vous ici](https://tbtc.network/developers/tbtc-technical-system-overview).

Un TDT est un jeton non fongible ERC-721 ("Non-Fungible Token" ou NFT) représentant un droit à l'UTXO correspondant à un dépôt de Bitcoin spécifique. Le standard ERC-721 est différent du standard ERC-20 du fait de la non fongibilité. Un TDT sont comme un ticket de vestiaire dans une boite de nuit très stricte : sans eux, impossible de récupérer votre veste - dans cette analogie, la veste représente votre dépôt de Bitcoin.

Comme les TDT peuvent être échangés contre des TBTC, ils peuvent être fondamentalement considérés comme dux états du même actif.

Enfin, le TBTC est un stablecoin Bitcoin. Chaque TBTC est garanti par le dépôt d'un BTC. Comme les utilisateurs doivent déposer du BTC pour pouvoir émettre des TBTC, il y a toujours suffisament de Bitcoin verrouillés sur le réseau pour assurer la garantie. tBTC est en un sens au Bitcoin ce que le DAI de MakerDAO est au dollar américain.

[Inscrivez-vous à notre Newsletter](https://tbtc.network/#mailing-list) pour des mises à jour et rejoignez [le salon #tbtc sur Discord](https://discord.gg/wYezN7v) pour des questions.

Ressources supplémentaires:

* [Spécifications techniques](http://docs.keep.network/tbtc/index.pdf)
* [GitHub](https://github.com/keep-network/tbtc)
* [Guide utilisateurs](https://tbtc.network/developers/how-to-use-the-tbtc-dapp)
* [Guide développeurs](https://tbtc.network/developers/how-to-integrate-tbtc-into-your-defi-dapp)
* [Aperçu technique du système tBTC](https://tbtc.network/developers/tbtc-technical-system-overview)
