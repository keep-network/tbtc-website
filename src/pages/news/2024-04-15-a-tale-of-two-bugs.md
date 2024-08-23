---
template: news-item
title: A tale of two bugs
description: The FTX exploit attempted redemption of tBTC revealed two bugs.
canonicalUrl: https://blog.threshold.network/a-tale-of-two-bugs/
date: 2024-04-15T12:17:09.130Z
tags:
  - featured
---
As has been reported this week, an address associated with the FTX exploit has been moving funds through a number of cross-chain projects.

While most of the funds have [gone through Thorchain](https://www.theblock.co/post/255108/thorswap-dex-enters-maintenance-mode-amid-illicit-activity?ref=blog.threshold.network), some of them have been routed through tBTC. In the process, two bugs have been exposed.

Neither bug puts user funds at risk. The first was patched and released yesterday, while the second requires community discussion and consensus.

## The first bug — a denial-of-service vector

On Saturday, September 30th, an FTX-associated address [requested a redemption](https://etherscan.io/tx/0x0b3796cf79fe87d15dfe9bd038941adc9ccb693694c28bbacba12989d48f0c78?ref=blog.threshold.network) of 76.81431578 BTC.

In tBTC today, redemptions can be requested by any user with an L1 tBTC balance. After some time, an off-chain maintainer delegated by the Threshold DAO in the [WalletCoordinator](https://etherscan.io/address/0x64EA4b84e2BdfD313428b96658260E495a420093?ref=blog.threshold.network#readProxyContract) contract verifies a redemption request, prompting signers to consider a redemption request valid. If 51 of 100 signers for a particular wallet agree, they jointly sign and release those funds on the Bitcoin blockchain.

After some time, this redemption request was approved by the redemptions maintainer. At least 51 of the signers in the associated wallet agreed, and the redemption was completed.

9 hours later, a different address associated with the FTX exploit [requested another redemption](https://etherscan.io/tx/0xd35107f443ee7f75c06c06ba2ad394d88c0f5b54d54e1ad1ecced305bd346be0?ref=blog.threshold.network)— this time for 76.62186419 BTC.

Shortly after, **something incredible happened**.

An unknown third party [sent BTC transactions](https://mempool.space/tx/afbd1e38fd6cf282b1d42973d7c0b52705b9b311c08ea49e50ba9a6d4faff582?ref=blog.threshold.network)to two of the wallets behind tBTC.

Now, this happens all the time — tBTC is minted by depositing BTC, after all. But instead of a normal deposit transaction, these transactions were crafted manually in such a way that the tBTC signing clients thought the wallets were "busy" moving funds, and unable to service redemption requests. The approval maintainer waited for the wallets to no longer be "busy" — which never happened.

Effectively, these BTC transactions blocked all outstanding tBTC redemptions.

We **don't know** who sent these transactions. But whoever they were, they knew enough to forcibly pause the tBTC bridge, burning a simple 0-day exploit in the process, and preventing the second FTX-associated redemption from being approved.

This is a new one for me. No white hats have reached out, no one has offered any explanation — but the timing is incredible.

At this point, alerting and monitoring systems used by contributors across the DAO were blaring. The Keep dev team began preparing a patch to fix the denial-of-service over the weekend.

By then, we'd also come to understand that one of the blocked redemptions was associated with FTX.

## The second bug — redemption mechanism design flaw

The second bug became apparent as we prepared the first patch.

The Threshold DAO can delegate to multiple approver addresses in the`WalletCoordinator`contract.

Unfortunately, as of today, there has only been one delegation to a single maintainer address — a single point of failure. Today, that address is controlled by a US-owned company, disallowed from approving the FTX-associated redemption.

### Fixing the mechanism design

Only having a single delegated approver with $25M in TVL was an oversight. Still, the bigger issue is the mechanism design itself.

Any system relying on the explicit approval of a redemption is bound to have another issue like this. When the protocol first shipped, the rationale for an approval mechanism was speed and user friendliness — alternatives meant a worse user experience.

I don't believe the current system has made the right tradeoffs.

There are two clear approaches to fixing this flaw

1. Move from an approval-based flow to a veto-based flow
2. Remove all redemption review at the protocol level

I believe the safest mechanism design, going forward, is something I call "optimistic redemptions". Instead of a list of addresses that finalize redemptions, we have a list of addresses than can veto a redemption — similar to the Guardian role in [optimistic minting](https://blog.threshold.network/minters-guardians-and-a-strong-tbtc/).

With this mechanism in place, all redemptions are valid by default. If a redemption is vetoed due to a suspected bridge hack, it can be delayed. If it's vetoed by enough guardians, it can fall back to a token-holder vote. If the veto is upheld by a token holder vote, the rejected tBTC redemption can be automatically returned to the redeeming user.

The downside is that this hypothetical mechanism requires an additional delay for each redemption. Over time, though, that delay could be shrunk to as little as 15 minutes, and entirely waived for small transactions.

Finally, if and when the community judges the system secure without a redemption review period, it could eliminate the delay altogether, smoothly migrating from the first approach to the second. In fact, I think a clear schedule to removing redemption review would help build confidence across the community.

However this mechanism design flaw is resolved, we've learned a ton from this experience ­— and I'm glad we learned it this week rather than 10x from here.

## What next?

The DAO and community have decisions to make.

Whether the community decides to add another approver address, upgrade the contracts to an "optimistic redemption"-style mechanism, or research and consider other options, as a dev team, we're here to advise, and help build a more robust, secure, and neutral future of finance, together.

*T﻿his blog was originally posted under the [Threshold Network website](https://blog.threshold.network/a-tale-of-two-bugs/).*
