---
template: resource
title: tBTC Security Model
heading: tBTC Security Model
description: >-
  The following is an overview of tBTC’s security model and how it achieves a
  high level of security for users and signers.
date: 2024-08-01T18:21:28.438Z
tags:
  - security
---
tBTC v2 is designed as the safe way for people to use Bitcoin everywhere.
Different projects take differing approaches to security. The following is an
overview of tBTC’s security model and how it achieves a high level of security
for users and signers.

## A trust-minimized Bitcoin bridge

Bitcoin bridges have existed in various forms for an extended period of time,
but they have generally relied on either centralized custodians to hold BTC
and mint the bridged equivalentj tBTC, launched in 2020, was the first
decentralized Bitcoin bridge to operate at scale. The original security model
of tBTC relied on overcollateralization--each deposit required a set of
signers to custody the underlying BTC, and these signers had to post 150%
of the USD value of BTC in collateral to secure the underlying deposit.

tBTC v2 significantly improves on the economic efficiency of overcollateralized
deposits by relying on an honest majority assumption, probabilistic security,
and forward security to allow for less capital to secure more BTC.

### Many wallets & on-chain reserves

In v2, deposits to the tBTC bridge are directed at the most recent live wallet
generated by the Threshold Network. Wallets can be generated as frequently as
every 2 weeks, or when the latest wallet holds at least 100 BTC. By default, a
new wallet is requested every 2 weeks, but anyone can request the creation of a
new one sooner than that if the current one has crossed a 100 BTC balance.
Wallets that are older than the latest one continue to operate and hold the
deposited BTC to manage bridging back to the Bitcoin network.

tBTC uses the [Threshold Network](https://threshold.network/) to provide an
always-online, decentralized network of signers. Each signer group that
custodies a bitcoin deposit is made up of 100 nodes. These nodes are
randomly selected from a large pool, and any opportunity to manipulate the
signer set is mitigated by the Threshold token’s staking model, which provides
Sybil resistance. Though one node can be selected more than once to a group
depending on their staked T, the Threshold staking model ensures that even a T
staker with 35% of all staked T only has a 0.02131% chance of getting a
controlling interest of any wallet generated in 2 years. See the [Threshold
wallet generation
docs](https://docs.threshold.network/applications/tbtc-v2/wallet-generation)
for a more complete treatment of the probability of signer selection.

Additionally, all wallets generated by the tBTC system have on-chain proof of
their reserves. Live wallets and their addresses and balances can be viewed on
the [tbtcscan](https://tbtcscan.com/wallets) site at any time.

### Signer failure

Signers not responding to a redemption request in a timely manner constitutes a
signer failure. Signer failures can include a failure to produce a signature
for redemption, as well as failure to produce an SPV proof of inclusion in a
Bitcoin block for a redemption.

All failures are treated as protocol aborts, and initiate slashing of the
misbehaving group, seizing a portion of staked T and burning it. The reporter
of the fraud receives part of the T as a reward.

### Forward security

Because tBTC uses multiple wallets, one of the key security properties it
presents is that even if someone staked enough T tomorrow to be very likely to
be selected as a controlling stake of a new wallet, _all existing wallets
maintain their security_. This is one of the key attributes of tBTC security
that makes it significantly better than single multisigs, even if their
ownership is decentralized: its security properties are dynamic and the
security properties of a given deposit can be maintained over time.

### No price feed

The design of tBTC v2 means that it operates securely and successfully without
a price feed. [...]

## A Bitcoin transaction relay

Proving the state of the Bitcoin chain on Ethereum requires a form of
cross-chain communication. tBTC uses [SPV
proofs](/developers/simplified-payment-verification) to accomplish this,
relying on an open-source relay. While the relay tracks the state of the
Bitcoin chain, it still relies on the “SPV assumptions”, a weaker form of
security than the full verification of running a full node.

The use of SPV proofs ensures that TBTC is hard-pegged to real BTC---it isn’t
possible to “print more” BTC. Similarly, the proofs don’t rely on an honest
federation, as bitcoin state is verified in the smart contract itself.

## Governance

tBTC v2 has a variety of parameters that are governance-controlled, and these
are outlined in the [tBTC developer
README](https://github.com/keep-network/tbtc-v2/tree/main/docs#parameters).
tBTC governance parameters are currently governed by the Threshold DAO, whose
structure and operations are outlined in the [Threshold DAO
documentation](https://docs.threshold.network/governance/dao). Governance
parameters are generally future-facing: existing wallets are locked to the
parameters that existed when the wallets were created, maintaining the forward
security and predictability of existing deposits.

One of the key parameters set by the DAO are the fees for bridging in (minting)
and bridging back to Bitcoin (redemption). The latest information on these fees
and DAO actions related to them is on the [Threshold DAO tBTC fees
page](https://docs.threshold.network/applications/tbtc-v2/fees).

## Alternative security models (BTCB, RenBTC)

There are many alternate models for pegged Bitcoin, each with varying levels of
security. Centralized Bitcoin banks like [Binance’s
BTCB](https://www.binance.com/en/blog/347360878904684544/Introducing-BitcoinPegged-Token-on-Binance-Chain)
offer a simple solution - they handle the pegging of BTC, but you have to trust
them to do so. Permissioned federations of companies such as Liquid and
[Wrapped Bitcoin](https://www.wbtc.network/) are the same model with different
stakeholders.

By contrast, open federations better align with the decentralized nature of
Bitcoin; to this end, some projects have chosen different security tradeoffs.
[Ren](https://medium.com/renproject/welcome-to-the-renvm-developer-center-c1ade842fe07)
was an example of an open federation, implementing pegged BTC over a custom
consensus layer. On paper, Ren’s model was similar to Keep’s - validators on
Ren stake the native work token, REN, in order to participate in the protocol.
Ultimately, however, Ren never moved past a team-controlled set of signers,
resulting in the downfall of the core Ren assets when its parent company was
wrapped up in the FTX debacle.

## Conclusion

There are a variety of bitcoin pegs, and more are introduced every day. tBTC
stands out as broadly compatible with EVM chains, trust-minimized, secure,
decentralized, and long-lived.

tBTC is created by [Thesis](https://thesis.co) and operated by the [Threshold
Network](https://threshold.network) and is fully open sourced [on
GitHub](https://github.com/keep-network/tbtc-v2).

Join [the Threshold Discord server](https://chat.threshold.network) to ask further
questions and learn more about the security model.
