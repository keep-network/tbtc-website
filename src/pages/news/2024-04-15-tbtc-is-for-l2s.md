---
template: news-item
title: "tBTC is for L2s: A Bitcoin Bridge Built for Scaling"
description: >-
  tBTC is a semi-permissioned Bitcoin bridge that has been in production for nearly four years, and continues to evolve towards full trust-minimization for users on Solana, Arbitrum, Optimism, Polygon, and Ethereum.
canonicalUrl: https://blog.threshold.network/tbtc-is-for-l2s/
date: 2024-04-15T12:35:21.390Z
tags:
  - featured
  - tBTC
  - Bitcoin L2
  - decentralized finance
  - Ethereum
  - trust-minimized bridge 
---

## tBTC: The Trust-Minimized Bridge for Bitcoin L2s

Bitcoin is having a moment.

No, it’s not *just* [the ETF](https://thesis.co/blog/the-bitcoin-etf-is-here/?ref=blog.threshold.network). It’s not *just* [Ordinals](https://nftnow.com/news/research-and-mining-report-highlights-bitcoins-enduring-impact/?ref=blog.threshold.network). It’s not *just* [the Halving](https://www.forbes.com/advisor/investing/cryptocurrency/bitcoin-halving/?ref=blog.threshold.network), it’s not [*just* BitVM](https://bitvm.org/bitvm.pdf?ref=blog.threshold.network), and it’s not *just* [Stacks](https://unchainedcrypto.com/stacks-a-bitcoin-layer-2-protocol-sees-all-time-high-in-total-value-locked/?ref=blog.threshold.network).

All of these things, together, have led to renewed interest—from both users and developers—in the Bitcoin network. Now, a slew of self-styled Bitcoin Layer 2 networks (L2s) are preparing to launch in a bid to capture this interest.

Alongside the surge of interest in Bitcoin, decentralized finance (DeFi) markets continue to expand, today accounting for [$76.315B in total value locked](https://defillama.com/?ref=blog.threshold.network) in a mere six years of growth.

So, how can BTC take its rightful place in the L2 DeFi ecosystem, and how did we arrive to this new paradigm of ‘Building on Bitcoin’?

## A Quick History of Bitcoin L2s

For years, the Lightning network—a channel-based payment network that later inspired Plasma and optimistic roll-ups—was called “the only Bitcoin L2”.

The reason for that was simple. Bitcoin is an incredibly stable development platform—at the expense of new feature development. Why? Bitcoin is one of the most robust peer-to-peer networks in existence, supporting a trillion dollar economy. When someone wants to make a change to Bitcoin, they must convince node operators to accept that change. It’s rare that a change adds enough value, and represents a small enough risk, to convince node operators to upgrade without veering into deadlock. So, development on Lightning was popular, as it represented the only *technically aligned* Bitcoin Layer 2 with any semblance of user demand.

Bitcoin is also a notoriously difficult platform. As the first production blockchain, developer experience wasn’t a priority. The scripting language is obtuse, and the programming model isn’t very expressive. This has served its primary use as money just fine. But over the years, many application developers have given up on Bitcoin development, leaving for easier, more expressive platforms.

So, what exactly has changed to cause this renewed interest? Has Bitcoin gotten an upgrade?

Sort of! A soft-fork in 2021 [introduced Taproot](https://cointelegraph.com/news/breaking-the-bitcoin-network-welcomes-taproot-soft-fork-upgrade?ref=blog.threshold.network), allowing larger programs on the Bitcoin network.

That upgrade, nearly 3 years ago, seemed innocuous to many outside a small group of Bitcoin developers and thought leaders. Today, though, Taproot has begun to bear fruit.

Ordinals, the controversial satoshi-hunting NFT meta-protocol on Bitcoin, and BitVM, a new way to run publicly verifiable programs on Bitcoin, are both built on Taproot—and have both spurred new developer interest across the network. With this renewed developer interest and improved programmability on Bitcoin, small communities began to wonder: can we improve the current landscape of Bitcoin L2s?

## What Defines a Bitcoin L2?

Even as they continue cropping up, the use of the term “L2” at all is controversial . On other networks like Ethereum, the definition of an L2 has been debated for years.

As various optimistic and zk-rollups fought for mindshare, words were twisted, and definitions abandoned. Eventually, the community came together around a rubric published and maintained by [L2Beat](https://l2beat.com/scaling/summary?ref=blog.threshold.network). That experience made it clear that users need more than a definition.

On Bitcoin, Lightning is an incredibly useful L2, but “Lightning is the only L2” isn’t a useful standard—it doesn’t help users understand the risks or opportunities of the new systems coming online. These new “Bitcoin L2s” being proposed land somewhere on a spectrum between a sidechain and a “fully” [trust-minimized L2](https://thesis.co/blog/whats-in-a-bitcoin-l2/?ref=blog.threshold.network).

Some work is being done here. [Bitcoinrollups.io](https://www.bitcoinrollups.io/) is a community-run site aiming to be the L2Beat of Bitcoin, educating users on different trade-offs and defining terms like “sovereign rollup”.

In the meantime, we do need to settle on a working definition of what constitutes a Bitcoin L2.

Alexei at [BOB](https://twitter.com/build_on_bob) puts it quite well:

> L1 security + L1 bridge = L2.

To call a network a Bitcoin L2, it needs to somehow share the security of the Bitcoin network, and it needs to use BTC as an asset.

## tBTC: Primed for the Bitcoin Renaissance

Whether you’re hacking on Lightning, DLCs, BRC-20s, or a new Bitcoin-based network, it’s clear that we’re in a Bitcoin Renaissance—a term coined by Elizabeth Stark at Lightning Labs, and now being spun into a [full-blown conference](https://bitcoin-renaissance.com/) later this month.

Of course, my favorite indicator is the number of teams who have reached out about building their L2s on tBTC. tBTC is attractive for L2s because it stands out as a trust-minimized approach to bridging bitcoin across networks, addressing collateral related limitations and simultaneously living up to the ethos of the network.

Rather than backing bitcoin against a 1:1 reserve of an additional collateral token, tBTC directly taps into the power of BTC to bridge it to other networks via smart contracts and a randomly selected group of signers. [Those who stake T](https://docs.threshold.network/staking-and-running-a-node/tbtc-beta-stakers-program?ref=blog.threshold.network), the native Threshold token, act as signers in the network.

## The Evolution of tBTC: From Semi-Permissioned to Fully Trust-Minimized

Today’s tBTC is a robust, semi-permissioned Bitcoin bridge, iterating toward full trust-minimization. tBTC has been in production for nearly 3.5 years without major incident with over [2,500 BTC bridged at its peak](https://dune.com/threshold/tbtc?ref=blog.threshold.network), serving users on Solana, Arbitrum, Optimism, Polygon, and Ethereum—making it one of the most trustworthy bridges in the space.

I don’t say this lightly: the dev team has consistently valued security over growth, watching WBTC and the now-defunct RenBTC take the lead over the years, only to come crashing down.

While L2 proponents will debate over different models and definitions, one thing is clear—a centralized custody bridge like WBTC can’t be the foundation for a Bitcoin L2.

To avoid reinventing the wheel, new L2 founders can opt to use tBTC as their Bitcoin bridge. tBTC can seriously speed up development for new Bitcoin L2s by solving one of their two major issues—**a secure, production-ready, and well-audited Bitcoin bridge**.

## Our Principles: Security, Neutrality, and Economic Alignment

For the Threshold DAO and tBTC developers, this influx of L2 interest has been a welcome challenge. How might we best support these teams? How should we treat developers outside the Threshold ecosystem?

I’d like to propose a few principles that we follow as a community.

**Security first—**Over the past few years, the space has been rocked by CeFi failures and smart contract hacks. User security is paramount, and should always be considered against new feature development. This has been our stance for years, but with more software built atop tBTC, it’s even more vital.

**Credible neutrality—**Any project should be able to build on tBTC confidently, period. We should avoid favoritism based on perceived ecosystem alignment, as long as projects take security seriously.

**Economic alignment—**Today, the Threshold DAO subsidizes the security monitoring and staking rewards powering the tBTC bridge. We are an established project, but we don’t have unlimited resources. If we’re made to pick between helping different projects build on tBTC, we should prefer those with economic models that make the tBTC bridge stronger and more sustainable.

## tBTC SDK: Enabling Seamless Bitcoin Integration for L2s

With developers in mind, we launched the [tBTC SDK](https://docs.threshold.network/app-development/tbtc-v2/tbtc-sdk/?ref=blog.threshold.network). The SDK can be used to enable seamless Bitcoin L1 deposits across dApps, wallets, and new L2s.

A live, running example of this at play is present in our [Threshold Dashboard](https://dashboard.threshold.network/overview/networkhttps://dashboard.threshold.network/overview/network?ref=blog.threshold.network). L2 builders can find [further examples](https://github.com/keep-network/tbtc-v2/pull/776?ref=blog.threshold.network) on [GitHub](https://github.com/keep-network/tbtc-v2/pull/778?ref=blog.threshold.network).

As we publish more docs and example code, and more projects build on the SDK, documentation and cross-chain liquidity will continue to grow.

## Join the Bitcoin Renaissance with tBTC

If you’re working on a Bitcoin L2 and looking for a robust bridge that’s stood the test of time, we’d love to help!

Reach out on [Discord](https://discord.com/invite/threshold?ref=tbtc.network?ref=tbtc.network), shoot us an email, or [check out the docs](https://github.com/keep-network/tbtc-v2?ref=blog.threshold.network) to get started!

*T﻿his blog was originally published on the [Threshold Network Website](https://blog.threshold.network/tbtc-is-for-l2s/).*
