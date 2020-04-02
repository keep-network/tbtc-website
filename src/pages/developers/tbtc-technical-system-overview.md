---
title: tBTC Technical System Overview
date: 2020-04-01T15:04:10.000Z
description: lol
template: resource
path: developers/tbtc-technical-system-overview
---
tBTC incorporates novel design features that carry important implications for users. This piece explains four of these: TDT receipts, multiple lot sizes, Keep&#39;s random beacon, and threshold signatures.

##TBTC Deposit Token (TDT)

The TBTC Deposit Token (TDT) is a non-fungible token that is minted when a user requests a deposit. A TDT is a non-fungible ERC-721 token that serves as a counterpart to TBTC. It represents a claim to a deposit&#39;s underlying UTXO on the Bitcoin blockchain.

TBTC deposits can be locked or unlocked. A locked deposit can only be redeemed by the deposit owner with the corresponding TDT. Each TDT is unique to the deposit that mints it and carries the exclusive right for up to a 6 month term to redeem the deposit.

Once a deposit is fully qualified through a proof of the funding Bitcoin transaction (called the SPV Relay), the holder can request redemption, and, after paying any outstanding signing fees, be guaranteed the same UTXO that funded the deposit on the Bitcoin network.

The TDT and TBTC are interchangeable through a contract called the vending machine, which manages the exchange of TDT for TBTC and vice-versa.

- Given a TDT, it will mint TBTC.
- Given TBTC, it will burn it and return a specific TDT.

_The TDT is required to redeem a locked BTC deposit_. Think of it like the ticket from a strict coat check: without it, you can&#39;t get your BTC back.

TDTs are transferable. Holders may choose to trade them, for example, or use them as collateral elsewhere.

In the event of fraud or collateralization issues, the holder of a TDT is guaranteed compensation in TBTC via the signing group&#39;s bonded collateral. If the deposit is redeemed by another account after it has reached term, then the TDT holder is guaranteed compensation in TBTC (less signer fees). Note a TDT holder can still redeem their deposit for BTC even once the 6 month term has elapsed, if no other users have redeemed it.

Since there is more value in stealing a 1 BTC deposit than a 0.001 BTC deposit, the former is likely more susceptible to attacks like re-orgs. As an NFT, TDTs allow this risk to be priced in, which is highly relevant for applications that use BTC as collateral. Any recipient of a TDT will need to evaluate the risk profile of a given token themselves. TDTs are designed to provide a net benefit by isolating risk, since attacks against the deposit backing a TDT should only impact the TDT holder, rather than the entire supply-pegged currency.

##Lots and Lot Sizes

Deposits on tBTC are managed in lots. To make the system rational and manageable, lots are one of a set of fixed sizes, managed by the system. If a depositor wants to deposit a larger amount of BTC than supported by existing lot sizes, they must create multiple deposit requests and fund multiple deposits. This allows for each deposit to be backed by a different signing group, which both simplifies the bonding of signing groups and insulates the wider system against isolated signing group failures, malicious or otherwise.

This design has important implications that users should be familiar with.

_Each deposit must match one of the standard lot sizes_

The system handles all instances of overpayment and underpayment -- in which a user deposits an amount that is either larger or smaller than the standard deposit size -- as faulty user behavior. The primary effect of over- or underpayment on the system is to distort the collateralization of the signers. The system is designed to pass the costs of this on to the user.

In the case of underpayment -- in which a user deposits an amount less than the chosen BTC lot size -- the system will not create a proof that can be redeemed for TBTC. The user forfeits the BTC locked into the deposit, which can be divided among the signers.

_Users should be acutely aware of this. In a situation where the only available lot size is 1 BTC, for example, it is easy to imagine a user attempting to claim 1 TBTC by making two deposits of 0.5 BTC each. A user that does so will lose all of their BTC, as the system will simply recognize two distinct instances of underpayment. In short, the lot size of a deposit is fixed when the deposit is created, and the deposit must be funded with that amount._

In the case of overpayment -- where a user deposits more than the chosen BTC lot size -- the system will generate a proof, but only for the standard lot size, redeemable for in exchange for that amount in TBTC. In an efficient market, we would expect this to be immediately redeemed, as the redeemer expects to take the overfunded amount locked in the deposit as arbitrage. Unless the deposit is redeemed by the original depositor, the overpayment is forfeit.

_In a 1 BTC lot size example, a user who deposits 1.4 BTC will receive a proof allowing them to mint exactly 1 TBTC (the amount corresponding to the lot size). There is now an oversize deposit in the system, which one would expect to be redeemed quickly given the opportunity to exchange 1 TBTC for 1.4 BTC. The user who deposited the extra BTC will, like all other users, be able to redeem their 1 TBTC for 1 BTC, but the extra 0.4 BTC is lost (unless the user realizes their mistake and quickly redeems their TBTC for the original 1.4 BTC deposit)._

The system will only accept the first UTXO greater than the deposit lot size. All other BTC sent to the signing group is forfeit. Therefore it is imperative that depositors send only a single UTXO. Accepting multiple UTXOs from depositors would impose significant on-chain complexity and gas fees, as each UTXO would need to be proven via SPV, and a signature on it explicitly authorized. Signers would have to be incentivized to sign each transaction despite the fact that the total value of the UTXOs is not known.

##Random Beacon for Signer Selection

The Keep network requires a trusted source of randomness to select tBTC signers. This takes the form of a BLS Threshold Relay.

When a request comes in to create a signing group, the tBTC system uses a random seed from a secure decentralized random beacon to randomly select signing group members from the eligible pool of signers. These signers coordinate a distributed key generation protocol that results in a public ECDSA key for the group, which is used to produce a wallet address that is then published to the host chain. This completes the signer selection phase.

##Threshold Signatures

tBTC uses threshold signatures for key generation. Threshold signatures allow for a group of signers to generate a single public key from a set of private key &quot;shares.&quot; This method enables a subset of the signers to create signatures on behalf of the larger group. Users can verify groups of signers through a single public key corresponding to multiple private keys. This provides security without the work requirements of standard multisig designs.

Threshold signatures provide a number of benefits:

- Relatively little coordination is needed to set up a group
- No single member of the group has to be trusted
- They are resilient to as much as half of the group being malicious or failing to generate

For tBTC v1, signing groups are 3-of-3, meaning they are groups of 3 signers that require all 3 signers to collaborate to create signatures on behalf of the group.

You can find additional information about threshold signatures [here](https://blog.keep.network/threshold-signatures-ff2c2b98d9c7).

Visit our [GitHub](https://github.com/keep-network/tbtc) for more information, tools, and documentation. [Join the tBTC mailing list](https://tbtc.network/#mailing-list) for updates, including information about tBTC&#39;s upcoming launch on Ethereum mainnet. To learn more about tBTC&#39;s technical design, read the [technical spec](http://docs.keep.network/tbtc/index.pdf). Join the [Keep #tbtc channel on Discord](https://discord.gg/wYezN7v) for technical questions about tBTC and [tbtc.js](https://tbtc.network/news/2020-02-14-announcing-tbtc-js), and follow these Twitter handles for news and opportunities to participate:

@Keep\_project

@mhluongo

\#tBTC
