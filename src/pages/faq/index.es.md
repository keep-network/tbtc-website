---
template: faq-page
path: /faq
title: FAQ
questions:
  - answer: >-
      tBTC no costea el vínculo. Es un vínculo de existencia, no de precio, así
      que no es necesario ningún mecanismo algorítmico para que funcione como un
      vínculo descentralizado.
    question: ¿Cómo se mantiene el vínculo de tBTC?
  - answer: >-
      tBTC no es un vínculo de precio a BTC; es un vínculo de existencia. De
      esta forma, BTC/tBTC podrían no ser exactamente lo mismo. tBTC puede
      comprarse a un precio ligeramente más alto o bajo.
    question: ¿Por qué el precio de TBTC no es exactamente igual al de BTC?
  - answer: >-
      Porque hace al ecosistema más seguro, algo que es muy importante en DeFi,
      especialmente en el lanzamiento de una nueva red. ETH es un tipo más
      seguro de relación porque es el estándar de la DeFi, y el equipo que
      trabaja en tBTC tiene planes de cambiar la razón de colateralización de
      ETH/BTC de 150% a 135% prontamente después del lanzamiento. También se
      examinan nuevos mecanismos que podrían reducir esta razón al 40% más
      adelante.
    question: '¿Por qué TBTC se relaciona con ETH en su razón actual? '
  - answer: >-
      Esta tecnología es nueva y es imposible anticiparse a cada situación donde
      algo podría fallar. Dicho esto, hay varias situaciones que la comunidad ha
      identificado y atendido tomando medidas rigurosas. El modelo de seguridad
      es tal, que si los firmantes conspiran y huyen con tu depósito de Bitcoin,
      al usuario se le reembolsa en TBTC; esto es para lo que son los vínculos
      con ETH (se incautará y liquidará). Si ETH cae masivamente en un corto
      periodo de tiempo y TODOS los firmantes huyen y rompen el vínculo al mismo
      tiempo, el sistema se pasa a un estado sintético. Para más información,
      mira <a href="https://docs.keep.network/tbtc/index.pdf"
      target="_blank">tBTC technical spec</a>.
    question: ¿Dónde podría fallar algo en el sistema de tBTC?
  - answer: >-
      Too many lot sizes becomes an issue for liquidity pools. Maintaining
      several standard lot sizes allows for greater redemption availability.


      Demasiados tamaños de lote se convierten en un problema para las reservas
      de liquidez. El mantener varios tamaños de lote estándar permite una mayor
      disponibilidad de redención.
    question: >-
      ¿Por qué los tamaños de lote son fijos? ¿Por qué no alguna denominación al
      azar?
  - answer: >-
      Aún no. Es requerido un trabajo de integración para construir el acuñado y
      redención de tTBC dentro de una dApp.  Existe código abierto en <a
      href="https://github.com/keep-network/tbtc.js" target="_blank">tbtc.js
      GitHub</a>, que permite a los desarrolladores construir interfaces que se
      ajusten a sus productos. Para validar transacciones de Bitcoin, el mejor
      método es ejecutando un servidor electrum, muy fácil de montar.
    question: >-
      ¿Hay algún widget de tBTC que pueda usar para enlazarme directamente a
      acuñar y redimir tBTC dentro de mi dApp de DeFi?
  - answer: >-
      ConsenSYs Diligence está actualmente completando una auditoría de seis
      semanas de criptografía y código. Los resultados se publicarán cuando se
      encuentren disponibles.
    question: ¿Se ha auditado tBTC?
  - answer: >
      Each user should undertake their own analysis as to whether there are any
      legal restrictions in their jurisdiction that would either prevent them
      from using tBTC or require the user to register with certain government
      entities.
    question: >-
      Does Signing for tBTC and staking ETH make you a MSB? ¿El ser un firmante
      de tBTC y 
  - answer: >
      Please check with a tax professional to determine whether depositing BTC
      for TBTC is a taxable event in a given jurisdiction. One thing to consider
      is the NFT associated with the UTXO of a deposit. This NFT is designed to
      allow a fee to be paid for custody of BTC and to offer the ability to
      redeem the exact same UTXO within the six month fee period.
    question: Is depositing BTC for tBTC a taxable event?
  - answer: >
      tBTC’s signer sets use threshold ECDSA as a Bitcoin multisig replacement.
      For every deposit, a new signer set is pulled together (selected by the
      random beacon), and they generate a Bitcoin PKH address for the depositor,
      which is marked on the Ethereum chain.
    question: How is the tBTC signer set non-custodial?
  - answer: >
      Shortly after launch, there should be  a group of roughly 80 private sale
      KEEP purchasers and a few other trusted parties signing for tBTC. Very
      soon an opportunity will be announced for more individuals to participate
      by staking ETH to become a signer.
    question: Who are the signers? Can anyone become a signer?
  - answer: >
      Some people believe tBTC is better for several reasons.  Some projects
      have built synthetic price pegs, which is not a true bridge. Other
      projects are supply pegs, but have centralized parties adding friction to
      the minting and redemption process and therefore, are not
      censorship-resistant systems. Some new bridges are decentralized supply
      pegs, however, those security models are less safe. They rely on a ⅔
      honesty assumption, no ETH/extra collateral to back up deposits, and use
      brand new “roll your own crypto” rather than peer-reviewed, t-ECDSA
      cryptography).
    question: Why is this better than other BTC on Ethereum projects?
  - answer: >
      No, there is no need to return at six months, except if there is a
      preference to  redeem Bitcoin with a certain UTXO. This is what the NFT
      receipt, TDT, is for. Most retail DeFi users do not have this
      consideration, and do not need to return in six months.
    question: >-
      What does a six-month fee period mean? Can BTC be claimed only after six
      months?
  - answer: >
      There are no firm plans to build a bridge on other chains. However the <a
      href="https://www.crosschain.group/" target="_blank">Cross-Chain Group</a>
      has had early conversations with chains like Cosmos, Zcash, and Polkadot
      on trustless bridge designs.
    question: Are there plans to build a Bitcoin bridge on other chains?
  - answer: |
      No.
    question: Does tBTC ownership give you any governance rights?
  - answer: >
      The team behind tBTC is building a supply peg, not a price peg. It’s not a
      synthetic mechanism. For bitcoin holders, it shouldn’t matter what the
      actual price is, it just matters that you can redeem it for 1 BTC
    question: Why not just do a price peg?
  - answer: >
      tBTC is a sidechain that requires work from anonymous parties, so bonds
      from those parties must be held to prevent collusion. For now, it is
      necessary to ensure that signers are bonded in order to protect against
      misbehavior. A price feed oracle is needed to maintain the BTC/ETH price
      for this bond.
    question: Why does tBTC need a price feed oracle?
---

