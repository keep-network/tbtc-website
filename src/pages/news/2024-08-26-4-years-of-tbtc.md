---
template: news-item
title: 4 Years of tBTC
description: >-
  Today’s tBTC is a robust, semi-permissioned Bitcoin bridge, iterating toward
  full trust-minimization. tBTC has been in production for 4 years without
  major incident with over [11,000 BTC bridged at its
  peak](https://dune.com/threshold/tbtc?ref=blog.threshold.network), serving
  users on Solana, Arbitrum, Optimism, Polygon, and Ethereum—making it one of
  the most trustworthy bridges in the space.
date: 2024-08-26T12:35:21.390Z
---

4 years since the September 2020 launch of tBTC v1, tBTC continues to be one of
the few bridges that has never suffered a loss of funds. For those 4 years, and
the 2 years of development that preceded them, the teams at
[Thesis](https://thesis.co) and [the Threshold
Network](https://threshold.network) that have worked on the tBTC infrastructure
have been focused on the three principles outlined in [tBTC is for
L2s](/news/2024-04-15-tbtc-is-for-l2s):

- Security first
- Credible neutrality
- Economic alignment

## 4 years of learnings

In the early hours of May 18, 2020, at the height of COVID restrictions and
before front-running white hat hackers were commonplace or [SEAL
911](https://cointelegraph.com/magazine/seal-911-team-white-hat-forms-fight-crypto-hacks-real-time/)
was a twinkle in samczsun's eye, the Keep team [paused the first release of the
tBTC contracts](https://x.com/mhluongo/status/1262261372714455042) in what was
to be one of the rare cases in the crypto space of a team spotting a
critical smart contract bug and avoiding all loss of funds. Following a
[detailed
retro](https://medium.com/keepnetwork/details-of-the-tbtc-deposit-pause-on-may-18-2020-38d7dd555663)
and four months of heavy additional testing, [tBTC went
live](https://tbtc.network/news/2020-09-22-tbtc-is-live/) in its first version.
Though this was the only time that the bridge has risked fund loss, the
learnings from that event have translated into a rigorous, careful development
process that has ensured the security of the bridge for the years that
followed. 

Once tBTC v1 launched, it became clear that one of the key challenges in
scaling a bridge is its capital efficiency: how to balance security of user
funds against the economic guarantees that those funds will remain available.
This observation triggered the development of v2 of the bridge, whose design
carefully balanced these two components to produce a [decentralized Bitcoin
bridge built for
scaling](https://medium.com/keepnetwork/tbtc-v2-a-censorship-resistant-btc-bridge-at-100x-scale-199d3a54ab99).
Launched in January 2023, this updated model has safely bridged over 11,000 BTC
to date.

tBTC v1 launched with a phased approach, starting with a minting cap of 100
tBTC that slowly increased to 1000 and then was lifted altogether. When v2 went
live, it was launched with a slower, safer minting process and no redemptions,
and over time launched optimistic minting to make bridging complete in a
handful of hours, followed by full redemptions to bridge back to the Bitcoin
network a few months later. At each step, security was held paramount, with v1
undergoing 3 audits before launch and v2 doing phased audits as additional
functionality came online.

## 4 years of changes

Though the original version of tBTC was built by the Keep Network, 2021 brought
an opportunity for Keep Network and NuCypher, a similar project with a slightly
different product portfolio, to [merge into one joint
DAO](https://blog.threshold.network/decentralized-merger/). In early 2022, the
first decentralized merger was completed to create the Threshold Network,
whose nodes now operate the systems that back tBTC bridging. In the intervening
time, Threshold has become a full-fledged DAO with an associated legal entity,
various guilds responsible for driving its priorities and products forward, [bug
bounty programs](https://immunefi.com/bounty/thresholdnetwork/) associated with
tBTC and other protocols backed by the network, and more.

More recently, Threshold launched [thUSD](https://www.thresholdusd.org/en/), a
stablecoin backed by Bitcoin based on tBTC, which is now being used by the
Threshold DAO to [pay USD
expenses](https://blog.threshold.network/borrowing-against-dao-treasury-assets-for-expenses-thresholds-move-to-thusd/).
L2s such as [BOB](https://www.gobob.xyz) and [Mezo](https://mezo.org) have been
relying on tBTC to provide more use cases and possibilities to the world of
Bitcoin. Mezo is the Bitcoin Bank offering [fixed rate Bitcoin loans](https://mezo.org/feature/borrow) so users can earn, spend, and use their BTC without having to sell.

And finally, tBTC is being bridged from Ethereum to landmark chains like
[Base](https://blog.threshold.network/navigating-the-future-of-defi-tbtc-launches-on-base/) and [Polygon](https://blog.threshold.network/unleashing-bitcoin-tbtc-launches-on-polygon-powered-by-wormhole/) and being minted natively on high-throughput chains like [Solana](https://blog.threshold.network/tbtc-launches-on-solana/) and, soon, Arbitrum.

## 4 years is just the beginning

tBTC is starting to appear everywhere, but it's also just getting started. Both
as a building block and as an infrastructure tool, tBTC promises to be
instrumental in building out the networks that are adding productive uses to
Bitcoin, including underpinning a new wave of native experiences for
Bitcoin-native users like [transparent access to Bitcoin
wallets](https://info.mezo.org/mezo-portal/btc/btc-deposit-guide) that want to
interact with other chains. It's also the heir apparent as WBTC struggles with
[the usual complications of operating a centralized
bridge](https://x.com/du09btc/status/1823708022595837992?s=46).

On the backend, the development team has already started building out the use
of [FROST and
ROAST](https://github.com/keep-network/tbtc-v2/blob/main/docs/rfc/rfc-10.adoc)
to move the network from 51-of-100 wallets to 501-of-1000 wallets that provide
full attributability for errors and aborts, allowing tBTC to scale its
network even further. At the same time, the introduction of
[BitVM](https://bitvm.org/) is being closely watched as another potential
ugprade in security model and scale. As the technology matures, using the most
diverse and experienced set of operators and the most trusted decentralized
bridge and token as the premier BitVM implementation will become a natural
choice.

Between core technology upgrades, L2 adoption, increased availability in blue
chip DeFi protocols like Aave and GMX, new and more seamless integrations
across existing and novel chains, and as-of-yet unexplored protocols built on
top of the straightforward access to decentralized BTC collateral provided by
tBTC, the coming years promise to be the most exciting yet.

Want to join in the fun? [Start building with tBTC now](/developers).
