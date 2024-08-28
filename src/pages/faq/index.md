---
template: 'faq-page'
path: /faq
title: FAQ
questions:
  - question: How does tBTC maintain the peg?
    answer: >
      tBTC does not maintain the peg. It’s a supply peg not a price peg, so there is no algorithmic mechanism needed to function as a decentralized peg.
  - question: Why is the tBTC price not exactly the same as BTC?
    answer: >
      tBTC is not a price peg to BTC; it’s a supply peg. That means BTC/tBTC might not be exactly the same. tBTC might trade at a slight premium or a discount.
  - question: Where could something go wrong in the tBTC system?
    answer: >
      This technology is new and it’s impossible to anticipate every situation where something could go wrong.  That being said, there are several situations the community has identified and taken careful measures to address. For more information, please look at the <a href="/developers/tbtc-security-model" target="_blank">tBTC Security Model</a> page.
  - question: Is there a tBTC widget I can use to directly hook tBTC minting and redeeming into my DeFi dapp?
    answer: >
      Not yet. Integration work is required to build tBTC minting and redemption into a dApp. The <a href="/developers" target="_blank">developer documentation</a> includes links to the tBTC SDK and SDK docs, enabling developers to build interfaces that match their products. To validate Bitcoin transactions, the best approach is to run an electrum server, which is very easy to spin up.
  - question: Has tBTC been audited?
    answer: >
        tBTC has undergone multiple audits (3 for v1, 3 and counting for v2), as have the underlying node clients, and tBTC is a part of the Threshold Network bug bounty program.
  - question: Does Signing for tBTC make you a MSB?
    answer: >
      Each user should undertake their own analysis as to whether there are any legal restrictions in their jurisdiction that would either prevent them from using tBTC or require the user to register with certain government entities.
  - question: Is depositing BTC for tBTC a taxable event?
    answer: >
      Please check with a tax professional to determine whether depositing BTC for tBTC is a taxable event in a given jurisdiction.
  - question: How is the tBTC signer set non-custodial?
    answer: >
      tBTC’s signer sets use threshold ECDSA as a Bitcoin multisig replacement. For every deposit, a new signer set is pulled together (selected by the random beacon), and they generate a Bitcoin PKH address for the depositor, which is marked on the Ethereum chain.
  - question: Who are the signers? Can anyone become a signer?
    answer: >
      Shortly after launch, there should be  a group of roughly 80 private sale KEEP purchasers and a few other trusted parties signing for tBTC. Very soon an opportunity will be announced for more individuals to participate by staking ETH to become a signer.
  - question: Why is this better than other BTC on Ethereum projects?
    answer: >
      Some people believe tBTC is better for several reasons.  Some projects have built synthetic price pegs, which is not a true bridge. Other projects are supply pegs, but have centralized parties adding friction to the minting and redemption process and therefore, are not censorship-resistant systems. Some new bridges are decentralized supply pegs, however, those security models are less safe. They rely on a ⅔ honesty assumption, use brand new “roll your own crypto” rather than peer-reviewed, widely deployed t-ECDSA cryptography), or use an outdated capital-inefficient approach that tBTC has already outgrown in v2 of the protocol.
  - question: Does tBTC ownership give you any governance rights?
    answer: >
      No.
  - question: Why not just do a price peg?
    answer: >
      The team behind tBTC is building a supply peg, not a price peg. It’s not a synthetic mechanism. For bitcoin holders, it shouldn’t matter what the actual price is, it just matters that you can redeem it for 1 BTC
---
