---
template: resource
title: "Simplified Payment Verification (SPV): A Primer"
heading: "Simplified Payment Verification (SPV): A Primer"
description: >-
  The following is an overview of how SPV (Simple Payment Verification) proofs
  allow for proving Bitcoin transactions on othe networks.
date: 2021-08-23T18:21:28.438Z
tags:
  - security
  - unlisted
---

## Overview

While a full discussion of SPV proofs is outside the scope of this document, it
is important to develop a working understanding of their properties, as many
system-critical processes rely on the SPV security assumptions. SPV proofs are
used during the funding, redemption, and fraud processes to provide the host
chain with information about the state of the remote chain. Practically
speaking, there is no other way that the host chain can learn about the state
or history of the remote chain.

### Objectivity in Proof of Work

The SPV proofs used in this system rely on a property of Proof of Work (PoW)
called "objectivity." Simply put, proof of work cannot be forged and no outside
information is needed to check its validity. Without knowing the history of the
chain, we can examine a Bitcoin block header and determine (probabilistically)
how many hashes were performed to generate it. The number of hashes used to
generate a header represents an unforgeable cost inherent to that header,
independent of its context or history.

Contrast this with Proof of Stake, in which the cost of generating a header is
dependent on the entire history to date. We cannot know whether staker
signatures represent the current validator set without complete history. In
other words, Proof of Work in isolation still carries meaning, while Proof of
Stake in isolation does not. While SPV inspection of Proof of Stake systems is
possible, the security model is completely different. In addition,
implementation approaches are much more costly than SPV inspection of objective
systems. As such, this section concerns itself only with verification of Proof
of Work, and future versions of the system utilizing SPV inspection of Proof of
Stake systems are left for another day.

### Security Model

In Nakamoto Consensus, each node follows the heaviest valid chain. "Heaviest"
refers to the objective proof of work metric. The chain with the most
accumulated work is deemed the heaviest chain. Validity within the consensus is
a bit more involved. Conceptually, nodes agree to evaluate new information
according to a set of rules, and to reject anything that does not meet those
rules. In practice, these rules define blocks consisting of headers and
transactions, describe the format of transactions, and provide some
user-programmable rules like Script and the EVM. Protocol-following nodes will
always make the same validity decisions and will always choose the heaviest
header chain containing only valid transactions and blocks. Therefore honest
nodes will always reach the same state, which is to say, will always reach
consensus.

The SPV security model is strictly weaker than the Nakamoto Consensus model,
but still sufficient for our purposes. The SPV model checks work on headers,
but enforces only a small subset of the validity rules. In essence, SPV
verifiers assume that miners will not spend resources producing proofs of work
on top of invalid blocks or transactions. They check validity of some set of
headers, including verifying the work included in those headers, but do not
verify each transaction. Instead, SPV verifiers check only transactions in
which they have some interest. In the context of tBTC, we are interested only
in specific UTXOs on the Bitcoin blockchain, so we validate only the
transactions and headers related to those UTXOs, rather than all transactions.

When the assumption fails, and significant work is put on top of invalid
transactions, the security model may also fail.  We call these "fake" proofs
and "fake" headers, because they are not semantically valid Bitcoin
transactions or headers. We argue that fake proofs will be extremely rare. Our
argument against them is rooted in the objective economics of Proof of Work. If
a miner chooses to devote resources to producing work on top of an invalid
transaction she must give up mining rewards while still bearing the electricity
and hardware costs of mining. She gives up mining rewards because the invalid
transaction may never be included in the main Bitcoin chain. It will be
rejected by all fully validating nodes. Therefore producing a fake proof has a
large inherent cost. We argue that the system is economically secure so long as
the cost of producing a fake proof is high and the value that can be gained by
producing a fake proof is orders of magnitude less than that cost.

The security of SPV systems also benefits from a built-in assumption of the
Nakamoto Consensus model: that no attacker has greater than 50% of the
hashrate. Assuming that is true, no attacker can generate Bitcoin proofs of
work faster than the main Bitcoin blockchain. This implies that honest headers
are generated (within the tolerance of the Poisson distribution) before any
dishonest header. Extending the model, if no attacker has greater than an
`n`-fraction of the current Bitcoin hashrate (where `n >= 2`) then honest
headers may be generated `n^-1^ - 1` times faster. For example, an attacker
controlling 25% (1/4) of the Bitcoin hashrate could generate a header on
average every 40 minutes. The main chain, slowed by the loss of that 25%,
would generate a header every 13 1/3 minutes -- three times faster. To take
advantage of this, the proof must commit to some recent information that was
previously unknown to the attacker, e.g. a past block header, or a new public
key hash. This provides a lower bound on the time at which the attacker begins
to generate a false proof.

### Relays

The most conceptually straightforward SPV system is a relay. In a relay system
each Proof of Work header is submitted to and verified by the host chain. The
host chain smart contracts keep track of the best known header, and all past
headers seen. An SPV proof in a relay system demonstrates that a transaction is
confirmed by the best-seen header and is deep enough that its disconfirmation
is unlikely. Each additional header in a relay, as in the consensus it tracks,
secures all previous headers. So we grow more certain of older chain events
over time.

### Stateless SPV

Where relays decline to check validity, stateless SPV systems both decline to
check validity and fail to follow the heaviest chain. In fact, a stateless SPV
system does not track anything at all. Instead stateless SPV proof relies
entirely on the objective work present in a discrete slice of headers. A
stateless SPV proof consists of one or more transactions, merkle proofs of
inclusion for those transactions, and a set of consecutive headers on top of
those transactions. A verifier can then inspect the headers, and give the proof
an objective quality score based on the amount of work in those headers.
Anyone interested in using the state and history information in the stateless
SPV proof's information can determine whether to accept or reject it based on
the proof's quality.

Stateless SPVs were spearheaded by Summa in a cross-chain auction system; their
compelling advantage is size and cost-efficiency. A stateless SPV proof is less
than 1KB, all of which can be discarded after validation. A relay, on the other
hand, stores each header on-chain. This means a relay will consume linearly
increasing state space over time. Maintenance costs are already unsustainably n
high, as evidenced by the failure of BTCRelay in December 2017. Given the
already high cost of on-chain storage and the likely introduction of state rent
in major host chain candidates, relying on a stateful relay seems
short-sighted. A high-state system that is viable today may not be viable in
the future.

We argue that for recent transactions stateless SPV's security is equivalent
to a relay's. An attacker would have to spend the same number of hashes to
provide the relay with fake headers as it would to provide the stateless SPV
verifier with a stateless proof with sufficient work. However, compared to
relays, stateless SPV proofs do not gain security over time without extending
each proof to include new headers. It is important to this argument that the
recency of the transaction is known, without this, an attacker could begin to
generate a proof well in advance of proving time, essentially getting a head
start on the main chain. Relays get recency assurances at each block, as each
new header must reference the header immediately preceding it, but a stateless
SPV proof must get its recency from some outside source.
