---
template: news-item
title: What is a Bitcoin UTXO?
description: What is a Bitcoin UTXO?
date: 2020-08-05T14:21:26.502Z
---
Unspent Transaction Outputs, or UTXOs, are an important element to the overall functioning of the Bitcoin blockchain. They can be thought of as leftover value from previous Bitcoin transactions, and they serve several purposes on the network.

UTXOs facilitate Bitcoin transactions. When a person spends Bitcoin, they send one or several UTXOs to the blockchain. UTXOs cannot be divided, so if the amount of the transaction does not exactly match the size of the UTXOs being sent, these are deposited with the network and new UTXOs are minted.

A person’s Bitcoin balance -- for example, a wallet with 50 BTC -- is really composed of a number of different UTXOs. In the example case, assume the UTXOs are 22, 10, 8, 7, and 3 BTC respectively. The person decides to spend 5 BTC in a transaction. Since no UTXO equals exactly 5, the network “spends” the 7 BTC UTXO, and mints two new ones, for 5 and 2 BTC. The 5 BTC UTXO goes to the vendor, and the 2 BTC is returned to the user.

UTXOs, then, are effectively “change” from previous BTC transactions. This fact serves an important purpose: because each UTXO was newly minted either as a mining reward or as the result of a prior transaction, it has proveably never been spent. This allows the Bitcoin blockchain to guard against instances of double spending and ensure that transactions are valid.

UTXOs also introduce some challenges. As their size gets smaller, the relative cost of processing transactions increases. At a certain point, this risks making exchanges uneconomical -- if the processing fee involved in buying a cup of coffee is greater than the price of the coffee itself, the purchase no longer makes sense. The community is aware of this, and people are working on a number of solutions.

In tBTC, UTXOs are represented by the TBTC Deposit Token (TDT), a non-fungible token that is minted when a user requests a deposit. A TDT is an ERC-721 token that serves as a counterpart to TBTC. It represents a claim to a deposit's underlying UTXO on the Bitcoin blockchain. Each TDT is unique to the deposit that mints it and carries the exclusive right for up to a 6 month term to redeem the deposit.

Once a deposit is fully qualified through a proof of the funding Bitcoin transaction (called the SPV Relay), the holder can request redemption, and, after paying any outstanding signing fees, be guaranteed the same UTXO that funded the deposit on the Bitcoin network.

**\
Join the [\#tbtc Discord channel](https://discord.gg/wYezN7v) to learn more about tBTC. Join the tBTC mailing list [here](https://tbtc.network/#mailing-list).**
