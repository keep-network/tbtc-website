---
template: news-item
title: An Update on tBTC’s Launch
description: Find out more on tBTC's 10-day pause of deposits.
date: 2020-05-22T18:19:06.656Z
---
On Friday, May 15, the alpha version of tBTC -- release candidate zero (rc.0) -- went live. On the morning of May 18, [the 10-day emergency pause of deposits](https://etherscan.io/tx/0xc5c08e982cfdd9d11b01c32bcb16b1597aa792c0bdf0f65d0a21386dd1edc846#eventlog) allowed by the [tBTCSystem contract](http://etherscan.io/address/0x41A1b40c1280883eA14C6a71e23bb66b83B3fB59) was triggered. This occurred after a significant issue in the redemption flow of deposit contracts was identified that put signer bonds at risk in certain situations.

Full details are available [here](https://tbtc.network/news/2020-05-21-details-of-the-tbtc-deposit-pause-on-may-18-2020/).

Despite the challenges encountered in the launch of rc.0, established precautions and safeguards served their intended purpose, and all funds remained safe.

### All deposits returned safely

A small number of community members had already deposited BTC while the dApp was still in testing. Immediate action was taken to return funds to depositors and signers, and as of today, 99.83% of the supply of BTC deposits has been safely redeemed to [this address](https://etherscan.io/token/0x1bBE271d15Bb64dF0bc6CD28Df9Ff322F2eBD847?a=0xe52e028f0d8f2e7a9d78e48199234b1231774e6a). Removal of any remaining unused ETH in the system is currently underway; funds are not at risk.



## **Next steps**

Going forward, tBTC will shift to a release candidate model.

Release candidates are versions of software that a development team believes are “ready” but are not considered final until subjected to wider user feedback. Release candidates progress from 0, to 1, to 2, onward, until a candidate is deemed final.

The initial tBTC release, rc.0, was found to have a vulnerability that led to the pause of new deposits. In the following weeks, rc.1, a new set of contracts that includes a mitigation for the vulnerability as well as other low- and medium-priority fixes, will be deployed.

Initially the dApp built atop rc.1 will remain in alpha. Eventually, the dApp will have a beta release cut, and likely remain in perpetual beta as features are added.

### A graduated supply cap

Money in the system will be used as a metric to quantify a release candidate’s readiness. rc.1 will feature a hard cap on the tBTC supply, starting at 100 BTC in the first month. Each month, the contracts will loosen the deposit restriction based on a pre-committed schedule.

| Month     | 1   | 2   | 3   | 4    | 5   |
| --------- | --- | --- | --- | ---- | --- |
| Cap (BTC) | 100 | 250 | 750 | 1000 | \-  |

If at any point a critical vulnerability is found in the smart contracts, the emergency deposit pause will be activated and funds will be returned. The patched contracts will then be redeployed as rc.2, resetting the cap schedule.

After 5 months, the supply cap restriction will lift -- and after 12 months without incident, the emergency pause button will be disabled.

### Expanded security audits

tBTC, which concluded its first security audit in March, will continue being tested. The rc.0 issue and fix have been shared with the project’s previous auditors, ConsenSys Diligence, and current auditors, Trail of Bits, for confirmation and further feedback.

The scope of the already-planned Trail of Bits audit that started on Monday, May 18 has been adjusted to focus on the smart contracts in the system as well as the Go clients in the network.

Work will be undertaken together with Trail of Bits to expand and automate more integration and system tests for tBTC, as well as to add fuzz and property testing to various components of the system that currently only have simpler unit tests. There will also be a focus on identifying any additional areas of the system that may merit additional scrutiny.

A third security audit is also being organized. Additionally, the maximum reward for the tBTC bug bounty program has been increased by 10x, to approximately US $120,000.

### June 8 Stakedrop

As part of the ongoing rollout of the project, [the tBTC stakedrop](https://www.crowdcast.io/e/keep-stakedrop---live/register), in which anyone can be rewarded in KEEP tokens for acting as good stakers on the network, begins as planned on June 8.
