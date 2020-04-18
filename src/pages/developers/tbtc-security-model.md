---
template: resource
title: tBTC Security Model
heading: tBTC Security Model
description: >-
  The following is an overview of tBTC’s security model and how it achieves a
  high level of security for users and signers.
date: 2020-04-18T18:21:28.438Z
tags:
  - security
---
tBTC is designed as the safe way for people to use Bitcoin on Ethereum. Different projects take differing approaches to security. The following is an overview of tBTC’s security model and how it achieves a high level of security for users and signers.

## A trust-minimized Bitcoin sidechain

Sidechains were invented as a way to experiment with unlocking Bitcoin’s potential on other chains. The idea is simple - lock BTC on the main Bitcoin blockchain, and unlock it for use on another blockchain, creating a new currency pegged to BTC. In practice, building a 2-way peg without trusted intermediaries is difficult. Blockstream’s Liquid is an example of a Bitcoin sidechain in production that relies on trusted intermediaries.

Although Liquid works, it lacks BTC’s openness and security. Liquid relies on a trusted federation of signers to custody the “locked” bitcoin. If the signers so desire, they can censor withdrawals or walk away with funds. Further, there is no user recourse in the event of signer malice - users must rely completely on trusting the Liquid network and its underlying technology.

tBTC is a **trust-minimized** alternative to this model. Signers are overcollateralized to 150% the value of the deposit they custody, and users are fully reimbursed in the event of signer fraud. Signers are chosen from an open and decentralized network of nodes that run the Keep protocol, all bonded on Ethereum.

The basic operation of minting 1 TBTC, the pegged version of Bitcoin on Ethereum, is as follows:

1. A bonded ECDSA keep is requested from the Keep network to sign for 1 BTC.
2. A **signer group** forms and puts down **150% the value of 1 BTC in ETH** as collateral.
3. The signer group generates a Bitcoin wallet using a [threshold ECDSA protocol](https://www.binance.vision/security/threshold-signatures-explained).
4. The user sends 1 BTC to the Bitcoin wallet.
5. The user generates an **SPV proof** of their deposit transaction, and sends it to the Ethereum chain.
6. The user mints TBTC.

Redeeming TBTC back into BTC is simply the same process in reverse:
1. User burns TBTC and provides a receiving Bitcoin address to begin redemption.
2. The **signer group** generates and publishes a signature for a Bitcoin transaction to send the Bitcoin to the user’s requested Bitcoin address.
3. The user broadcasts this transaction and the generated signature to the Bitcoin network.
TheI4.  signers generate an **SPV proof** of this transaction, publish it to the Ethereum chain, and receive their bonds back.

There are three systems at play in this operation:

1. The Keep Network, which creates signer federations per deposit to custody bitcoin.
2. The Bitcoin price feed, which is used to determine the collateralisation of signers on the Ethereum host chain.
3. The Bitcoin relay, which verifies BTC transactions to mint and redeem TBTC.

## A decentralized network of signers

tBTC uses the [Keep Network](https://keep.network/) to provide an always-online, decentralized network of signers. Each signer group that custodies a bitcoin deposit is made up of 3 nodes. These nodes are randomly selected from a large pool, using the [Keep random beacon](https://docs.keep.network/random-beacon/). Any opportunity to manipulate the signer set is mitigated by the KEEP token’s staking model, which provides Sybil resistance.

To ensure users are compensated in the case of failure or fraud, signers are overcollateralized in ETH to a ratio of 150% the value of the bitcoin deposit. tBTC handles signer failure and signer fraud, punishing signers and fully reimbursing the user in TBTC, as well as making the signer ineligible for future work.

### Signer failure

Signers not responding to a redemption request in a timely manner constitutes a signer failure. Signer failures can include a failure to produce a signature for redemption, as well as failure to produce an SPV proof of inclusion in a Bitcoin block for a redemption.

All failures are treated as protocol aborts, and initiate the [abort liquidation flow](https://docs.keep.network/tbtc/#redemption). Signer bonds are seized and auctioned off for TBTC so that the user can be reimbursed for their inaccessible funds, and half of the remainder of the signer bonds (a maximum of 1/6th of the original bond) are returned to the signers.

In order to recoup their losses from liquidation, signing groups may choose to recover BTC after an abort has commenced. The reference client leaves offline coordination to each signer.

### Signer fraud

Signer fraud is the only action in the tBTC system that leads to full, punitive slashing. Any signer that moves bitcoin without authorization by the tBTC protocol is slashed, burning their work token and seizing their entire bond for user recourse.

Fraud is proven by presenting the unauthorized signature on-chain as a fraud proof. Anyone can present a fraud proof and receive the ETH left over after auctioning of signer bonds.

Signer fraud is punished in both tBTC and Keep ECDSA protocols.

1. At the tBTC layer, the fraud liquidation flow is enacted and bonds are used to purchase TBTC. The holder of the [tBTC Deposit Token](https://tbtc.network/developers/tbtc-technical-system-overview) is compensated in TBTC, unless the deposit is backing currently-circulating TBTC. In this case, the TBTC is burnt to maintain the 1:1 supply peg.
2. At the Keep layer, the signer is slashed and their KEEP tokens are burned, potentially removing them from the candidate pool. Slashed signers are not only losing their capital, but opportunity for future fees.

## A robust price feed

Signers collectively bond 150% the value of the Bitcoin they custody, incentivizing honest behavior as detailed above. These bonds are in Ethereum’s native asset, ETH, which necessitates a Bitcoin price feed. As such, the security of the price feed is integral to the system.

tBTC v1 relies on a trusted ETH/BTC price feed operated by ecosystem participants. The primary feed, operated by MakerDAO, is a medianized feed of prices from Binance, HitBTC, Coinbase, Poloniex, Huobi, and Bitfinex. If the primary feed discontinues reporting, the system can fall back to a secondary feed.

Price feeds introduce a class of attacks that can harm signers -- but thanks to the system design, do not impact depositors. A feed with stale or manipulated prices can push deposits into liquidation, but because liquidations are high-start falling-price auctions, signer bonds can be sold with little slippage, and above any manipulated reported price. Short-term price feed manipulations don’t threaten depositor funds, but are a risk for signers.

A faulty feed that is being manipulated for many blocks begins to threaten the system over time. If a feed appears to be manipulated, rational users should redeem their deposits and exit the system. Notably, a faulty feed doesn’t interfere with user redemptions.

A manipulated feed won’t save a malicious signer from being slashed, but it can lower the level of depositor recourse in the case of misbehavior. In this regard, the price feed is a defense-in-depth measure - disabling the feed falls back to a weaker security model.

## A Bitcoin transaction relay

Proving the state of the Bitcoin chain on Ethereum requires a form of cross-chain communication. tBTC uses [SPV proofs](https://docs.keep.network/tbtc/#spv) to accomplish this, relying on an [open-source relay](https://github.com/summa-tx/relays) built by [Summa](https://summa.one). While the relay tracks the state of the Bitcoin chain, it still relies on the “SPV assumptions”, a weaker form of security than the full verification of running a full node.

The use of SPV proofs ensures that TBTC is hard-pegged to real BTC -- it isn’t possible to “print more” BTC. Similarly, the proofs don’t rely on an honest federation, as bitcoin state is verified in the smart contract itself.

## Governance

The first version of tBTC has been built without any ability to upgrade contracts, following a Bitcoin-inspired philosophy of immutability and opt-in governance. Any future versions of tBTC will be new systems, and require social coordination to “upgrade”, similar to how a hard fork might on Bitcoin.

Still, the development team maintains a privileged key with 4 distinct capabilities at launch. These capabilities only apply to new deposits, preventing the team from interfering with existing deposits or long-held funds.

1. [Updating the signer fee rate](https://github.com/keep-network/tbtc/blob/19aa270197d84d64ef3a64bdcb09544abf6787b3/solidity/contracts/system/TBTCSystem.sol#L160). The privileged key can modify the fees signers charge for deposits going forward. The modification only impacts new deposits opened after a time delay. The maximum fee that can be set is 10% and the minimum 5bps (0.05%), preventing this ability from enabling an inadvertent kill-switch.
2. [Supporting additional lot sizes](https://github.com/keep-network/tbtc/blob/19aa270197d84d64ef3a64bdcb09544abf6787b3/solidity/contracts/system/TBTCSystem.sol#L160). The privileged key can modify and add to the available lot sizes for new deposits. This modification only impacts new deposits opened after a time delay. The available lot sizes must always include at least a 1 BTC lot size, and lot sizes can’t be greater than 10 BTC or less than 0.0005 BTC (50,000 sats), preventing an inadvertent kill-switch.
3. [Modifying collateralization thresholds](https://github.com/keep-network/tbtc/blob/19aa270197d84d64ef3a64bdcb09544abf6787b3/solidity/contracts/system/TBTCSystem.sol#L195). The privileged key can adjust the three collateralization thresholds enforced by the system.This modification only impacts new deposits opened after a time delay, preventing this call from forcing existing deposit liquidation. The lowest threshold is 100%, and the highest is 300%, preventing this call from acting as an inadvertent kill-switch.
4. [Pausing new deposits](https://github.com/keep-network/tbtc/blob/19aa270197d84d64ef3a64bdcb09544abf6787b3/solidity/contracts/system/TBTCSystem.sol#L129). The privileged key can pause new deposits for 10 days, once, without a time delay. After this ability is involved, it cannot be used again. This approach was preferred to a kill-switch or other control mechanism, giving developers a chance to notify users in case of a 0-day exploit, allowing users to withdraw their deposits from the peg in the case of a catastrophic failure. As with all other privileged key capabilities, this  does not affect open deposits, which can continue to be redeemed or used as normal.

While tBTC’s governance has been designed to be restrictive and resilient in the face of malicious developers or a stolen key, as with any project making claims to censorship-resistance, the ongoing role of the development team and all code deserve heavy scrutiny by users and outside parties.

## Additional attacks

The strongest attack known against the tBTC sidechain mechanism requires collusion of three roles -- the price feed maintainer, a large number of signers, and new depositors.

* First, the feed maintainer manipulates the reported prices such that ETH is, for example, 100% overvalued relative to BTC. This manipulation needs to be maintained over time.
* New depositors can now see that any BTC they deposit will now only have 75% recourse in case of fraud, and should avoid the system. Colluding depositors, however, continue to deposit BTC.
* Honest signers will continue to custody BTC, regardless of the recourse collateralization. If there are a large number of malicious signers in the signing set, however, this is an opportunity to collude and abscond with BTC in low-collateral deposits. These signers will be liquidated, losing 75% of 1 BTC for every BTC they steal, as well as being ejected en masse from the network for future signing.
* For each 1 BTC removed from the system, either 75% of 1 BTC in ETH is auctioned off or the same remains available for auction; any deposit whose auction has not been taken is breaking the supply peg until such a time as TBTC value is worth the auctioned bond.

This attack is difficult, requiring significant capital and coordination. The strongest mitigation [is Keep’s random beacon](https://blog.keep.network/whats-in-a-beacon-12c34b0bc078), requiring a large portion of malicious signers across the staked candidate pool, or extraordinary luck on the side of the attacker.

## Alternative security models (BTCB, RenBTC)

There are many alternate models for pegged Bitcoin, each with varying levels of security. Centralized Bitcoin banks like [Binance’s BTCB](https://www.binance.com/en/blog/347360878904684544/Introducing-BitcoinPegged-Token-on-Binance-Chain) offer a simple solution - they handle the pegging of BTC, but you have to trust them to do so. Permissioned federations of companies such as Liquid and [Wrapped Bitcoin](https://www.wbtc.network/) are the same model with different stakeholders.

By contrast, open federations better align with the decentralized nature of Bitcoin; to this end, some projects have chosen different security tradeoffs.

[Ren](https://medium.com/renproject/welcome-to-the-renvm-developer-center-c1ade842fe07) is an example of an open federation, implementing pegged BTC over a custom consensus layer. Ren’s model is similar to Keep’s - validators on Ren stake the native work token, REN, in order to participate in the protocol. However, Ren only requires validators to stake a fixed amount of REN in order to custody bitcoin, which offers no recourse for depositors in the event of fraud. By contrast, tBTC requires signers to be overcollateralized at all times, in both ETH and KEEP. Ren also uses fewer federations, sharding their validator set, with a 2/3 threshold for security. tBTC mandates a separate signer group for each deposit, with all signers required to authorize transactions. Another major distinction is tBTC’s use of SPV proofs, requiring that tBTC follows the “heaviest chain” on Bitcoin, and preventing signers from censoring user deposits or choosing forks. Ren’s federation doesn’t provide these guarantees. Lastly, Ren’s security model involves additional novel consensus and MPC protocols, exposing a much larger attack surface area.

## Conclusion

There are a variety of bitcoin pegs, and more are introduced every day. tBTC stands out as broadly compatible with Ethereum, trust-minimized, and secure.

Future improvements to tBTC include [replacing the trusted price feed](https://github.com/keep-network/tbtc/issues/254) and [reducing ETH collateral requirements](https://github.com/keep-network/tbtc/issues?q=is%3Aissue+is%3Aopen+collateral).

tBTC is created by [Keep](https://keep.network), [Summa](https://summa.one), and the [Cross Chain Group](https://crosschain.group), and is fully open sourced [on GitHub](https://github.com/keep-network/tbtc).

Join [the #tbtc Discord channel](https://discord.gg/wYezN7v) to ask further questions and learn more about the security model.
