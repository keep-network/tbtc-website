---
template: resource
path: developers/tbtc-technical-system-overview
title: tBTC System Overview
heading: tBTC Technical System Overview
description: >-
  Learn about threshold signatures, wallet generation & signer selection,
  deposit sweeping, and optimistic minting.
date: 2024-08-18T15:04:10.000Z
tags:
  - developers
---

tBTC v2 securely and quickly bridges Bitcoin to any other chain 24 hours a day,
7 days a week, leveraging the security of the [Threshold
Network's](https://threshold.network) decentralized set of nodes and their
staked [T tokens](https://docs.threshold.network/resources/t-token), as well as
select additional partners for accelerated operations.

This piece explains the four core pillars of tBTC's design: threshold
signatures, walet generation & signer selection, deposit sweeping, and
optimistic minting.

## Threshold Signatures

_You can find additional information about threshold signatures [on the Keep
blog](https://blog.keep.network/threshold-signatures-ff2c2b98d9c7)._

tBTC uses threshold signatures for key generation. Threshold signatures allow
for a group of signers to generate a single public key from a set of private
key &quot;shares.&quot; This method enables a subset of the signers to create
signatures on behalf of the larger group. Users can verify groups of signers
through a single public key corresponding to multiple private keys. This
provides security without the work requirements of standard multisig designs.

Threshold signatures provide a number of benefits:

* Relatively little coordination is needed to set up a group
* No single member of the group has to be trusted
* They are resilient to as much as half of the group being malicious or failing
  to generate

## Wallet Generation and Signer Selection

_Deeper details are available [in the Threshold documentation](https://docs.threshold.network/applications/tbtc-v2/wallet-generation)._

tBTC v2 generates Bitcoin wallets that are backed by a governable number of
signers (100 per wallet) from the Threshold Network's node pool. Signers are
selected randomly from the available nodes in the Threshold Network, with
probability weighted by how much of the [Threshold T
token](https://docs.threshold.network/resources/t-token) each node has staked
(with a 40,000 T minimum). One node may have multiple signers in a given
wallet, and tBTC relies on an honest majority assumption and probabilistic
security to ensure the security of each wallet (see the [tBTC security
model](/developers/tbtc-security-model) docs for more). Staked T on the
Threshold Network is the economic value used to secure the system.

A new wallet is generated at a governable interval (every 2 weeks as of this
writing), and new deposits are directed to the new wallet once it is set up.
Additionally, existing wallets are *forward secure*, meaning that even if the
signer pool is tainted or taken over, existing deposits to earlier wallets
still benefit from the original security guarantees when those wallets were
generated.

BTC deposits are directed to the latest tBTC wallet with a *locking script*
that allows a user to retrieve the funds if there is a malfunction in the
bridge and the underlying funds are not bridged. Once the network has claimed
those deposits (see the section on Deposit Sweeping below), the equivalent
amount of tBTC is minted on the network that the deposit was for (e.g.
Ethereum, Solana, etc). This can be a slow process, but a faster process for
minting is available (see the section on Optimistic Minting below).

## Deposit Sweeping

_Deeper details are available [in the Threshold documentation](https://docs.threshold.network/applications/tbtc-v2/sweeping)._

When a deposit is sent to the target wallet, the wallet consolidates the
deposit UTXOs into a single UTXO that can be used for cheaper unbridging back
to BTC. These consolidations require on-chain proof that the wallet is
authorized to make the transition, so rather than immediately consolidate
deposits to one UTXO with one Bitcoin transaction and one proof on the target
network per deposit, the tBTC system optimizes by periodically claiming batches
of deposits (every 12 hours or so at current writing). This process is called
_sweeping_. Additionally, when deposit UTXOs are swept, they are no longer
eligible for refund to the original depositor. This step effectively represents
the finalization of a bridging operation.

Deposit sweeps are largely transparent to the user, but the key component is
that with no additional work, deposits cannot produce tBTC tokens on the target
network before they are swept, to avoid minting tBTC against a deposit that
might later be refunded to the depositor. This is the safest, but also the slowest
and least efficient approach to minting. Most of the time, tBTC instead uses a
process called _Optimistic Minting_ to significantly shorten the time needed to
bridge funds.

## Optimistic Minting

_Deeper details are available [on the Threshold blog](https://blog.threshold.network/minters-guardians-and-a-strong-tbtc/)._

Optimistic minting is an abbreviated process that allows BTC deposits to mint
tBTC on the target network within roughly 3-4 hours of the deposit
transaction's confirmation. In this model, two trusted sets of operators are
allowed to accelerate minting before the tBTC wallet sweeps the underlying
UTXOs:

- **Minters** are responsible for identifying deposit transactions and requesting
  an optimistic mint. This starts a 3-hour window during which guardians can
  cancel a fraudulent mint request.
- **Guardians** are responsible for identifying optimistic mint requests and
  verifying them against on-chain data. Any guardian can cancel an optimistic
  mint request.

Importantly, even if a guardian cancels an optimistic mint, once the deposit
UTXO is swept, tBTC can still be minted. Similarly, even if minters do not
request an optimistic mint for a deposit, once the deposit UTXO is swept, tBTC
can be minted. In short, while optimistic minting requires trusted operators,
bridging does not---it is simply slower.
