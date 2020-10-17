---
template: news-item
title: '3-in-1: How tBTC is ERC-20, ERC-721, and Stablecoin'
description: 'How tBTC is ERC-20 Token, ERC-721, and Stablecoin'
date: 2020-05-06T15:34:44.666Z
---
TBTC allows people to act on the Ethereum blockchain using Bitcoin. TBTC is minted when a user provides proof of their BTC deposit, and it can be thought of as simultaneously three types of tokens: an ERC-20 token, an ERC-721 token, and a stablecoin.

TBTC is a standard ERC-20 token that can act on the Ethereum blockchain. ERC-20 is the common technical standard for all Ethereum tokens, which allows them to communicate and interact with one another.

TBTC is also interchangeable with the TBTC Deposit Token (TDT) through a contract called the vending machine, which manages the exchange of TDT for TBTC and vice-versa.

* Given a TDT, it will mint TBTC.
* Given TBTC, it will burn it and return a specific TDT.

Read more about TDTs and the vending machine [here](https://tbtc.network/developers/tbtc-technical-system-overview).

A TDT is a non-fungible ERC-721 token (NFT) that represents a claim to a deposit’s underlying UTXO on the Bitcoin blockchain. ERC-721 differs from ERC-20 in that these assets are not fungible. Think of a TDT like the ticket from a strict coat check: without it, you can’t get your BTC back.

Because TBTC is interchangeable with TDT, they can be considered two states of the same fundamental asset.

Finally, TBTC is a Bitcoin stablecoin: it is fully backed by BTC at a rate of 1:1. Because users must deposit BTC in order to mint TBTC, there is always enough Bitcoin locked in the network to support this. tBTC functions as a stablecoin for Bitcoin similarly to how MakerDAO’s DAI functions as a stablecoin for USD.

[Join the tBTC mailing list](https://tbtc.network/#mailing-list) for project updates, and ask questions on the [\#tbtc Discord channel](https://chat.tbtc.network).



Additional resources:

* Technical [spec](http://docs.keep.network/tbtc/index.pdf)
* tBTC [GitHub](https://github.com/keep-network/tbtc)
* [User guide](https://tbtc.network/developers/how-to-use-the-tbtc-dapp)
* [Developer guide](https://tbtc.network/developers/how-to-integrate-tbtc-into-your-defi-dapp)
* [tBTC technical system overview](https://tbtc.network/developers/tbtc-technical-system-overview)
