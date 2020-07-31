---
template: 'faq-page'
path: /faq
title: FAQ
questions:
  - question: How does tBTC maintain the peg?
    answer: >
      tBTC does not maintain the peg. It’s a supply peg not a price peg, so there is no algorithmic mechanism needed to function as a decentralized peg.
  - question: Why is the TBTC price not exactly the same as BTC?
    answer: >
      tBTC is not a price peg to BTC; it’s a supply peg. That means BTC/tBTC might not be exactly the same. tBTC might trade at a slight premium or a discount.
  - question: Why is TBTC collateralized with ETH at its current ratio?
    answer: >
      Because it makes for a safer system, which is very important in DeFi especially at the launch of a new network. ETH is a more safe collateral type because it’s the DeFi standard, and the team working on tBTC has plans to shift the ETH/BTC collateralization ratio from 150% to 135% fairly soon after launch. It is also examining new mechanisms that could bring that ratio down to 40% collateralization later on.
  - question: Where could something go wrong in the tBTC system?
    answer: >
      This technology is new and it’s impossible to anticipate every situation where something could go wrong.  That being said, there are several situations the community has identified and taken careful measures to address. The security model is such that if the signers collude and run off with your Bitcoin deposit, users are paid back in TBTC; that’s what the ETH bonds are for (they’ll be seized and liquidated). If ETH takes a massive dip in a short period of time and ALL signers run off and break the peg at same time, the system falls back to a synthetic. For more information, please look at the <a href="https://docs.keep.network/tbtc/index.pdf" target="_blank">tBTC technical spec</a>.
  - question: Why are there fixed lot sizes? Why not any random denomination?
    answer: >
      Too many lot sizes becomes an issue for liquidity pools. Maintaining several standard lot sizes allows for greater redemption availability.
  - question: Is there a tBTC widget I can use to directly hook tBTC minting and redeeming into my DeFi dapp?
    answer: >
      Not yet. Integration work is required to build tBTC minting and redemption into a dApp. The code is open-sourced in the <a href="https://github.com/keep-network/tbtc.js" target="_blank">tbtc.js GitHub</a>, enabling developers to build interfaces that match their products. To validate Bitcoin transactions, the best approach is to run an electrum server, which is very easy to spin up.
  - question: Has tBTC been audited?
    answer: >
      ConsenSys Diligence is currently completing a six-week cryptography and code audit. The results will be published once they become available.
  - question: Does Signing for tBTC and staking ETH make you a MSB?
    answer: >
      Each user should undertake their own analysis as to whether there are any legal restrictions in their jurisdiction that would either prevent them from using tBTC or require the user to register with certain government entities.
  - question: Is depositing BTC for tBTC a taxable event?
    answer: >
      Please check with a tax professional to determine whether depositing BTC for TBTC is a taxable event in a given jurisdiction. One thing to consider is the NFT associated with the UTXO of a deposit. This NFT is designed to allow a fee to be paid for custody of BTC and to offer the ability to redeem the exact same UTXO within the six month fee period.
  - question: How is the tBTC signer set non-custodial?
    answer: >
      tBTC’s signer sets use threshold ECDSA as a Bitcoin multisig replacement. For every deposit, a new signer set is pulled together (selected by the random beacon), and they generate a Bitcoin PKH address for the depositor, which is marked on the Ethereum chain.
  - question: Who are the signers? Can anyone become a signer?
    answer: >
      Shortly after launch, there should be  a group of roughly 80 private sale KEEP purchasers and a few other trusted parties signing for tBTC. Very soon an opportunity will be announced for more individuals to participate by staking ETH to become a signer.
  - question: Why is this better than other BTC on Ethereum projects?
    answer: >
      Some people believe tBTC is better for several reasons.  Some projects have built synthetic price pegs, which is not a true bridge. Other projects are supply pegs, but have centralized parties adding friction to the minting and redemption process and therefore, are not censorship-resistant systems. Some new bridges are decentralized supply pegs, however, those security models are less safe. They rely on a ⅔ honesty assumption, no ETH/extra collateral to back up deposits, and use brand new “roll your own crypto” rather than peer-reviewed, t-ECDSA cryptography).
  - question: What does a six-month fee period mean? Can BTC be claimed only after six months?
    answer: >
      No, there is no need to return at six months, except if there is a preference to  redeem Bitcoin with a certain UTXO. This is what the NFT receipt, TDT, is for. Most retail DeFi users do not have this consideration, and do not need to return in six months.
  - question: Are there plans to build a Bitcoin bridge on other chains?
    answer: >
      There are no firm plans to build a bridge on other chains. However the <a href="https://www.crosschain.group/" target="_blank">Cross-Chain Group</a> has had early conversations with chains like Cosmos, Zcash, and Polkadot on trustless bridge designs.
  - question: Does tBTC ownership give you any governance rights?
    answer: >
      No.
  - question: Why not just do a price peg?
    answer: >
      The team behind tBTC is building a supply peg, not a price peg. It’s not a synthetic mechanism. For bitcoin holders, it shouldn’t matter what the actual price is, it just matters that you can redeem it for 1 BTC
  - question: Why does tBTC need a price feed oracle?
    answer: >
      tBTC is a sidechain that requires work from anonymous parties, so bonds from those parties must be held to prevent collusion. For now, it is necessary to ensure that signers are bonded in order to protect against misbehavior. A price feed oracle is needed to maintain the BTC/ETH price for this bond.
---
