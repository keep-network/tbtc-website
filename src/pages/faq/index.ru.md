---
template: faq-page
path: /faq
title: FAQ
questions:
  - answer: >-
      tBTC связан с Биткоином общим предложением, а не его ценой. Поэтому
      использование алгоритмических механизмов для обеспечения ценовой привязки
      не требуется.
    question: Как tBTC поддерживает привязку к BTC?
  - answer: >-
      tBTC не привязан к цене Биткоина, используется связка по предложению. Это
      значит, что отношение BTC/tBTC может быть не совсем одинаковым, а tBTC
      может торговаться с небольшой премией или дисконтом.
    question: Почему цена tBTC не полностью соответствует цене BTC?
  - answer: >-
      Это делает систему более защищенной, что очень важно в DeFi при запуске
      новой сети. ETH служит более надежным обеспечением, потому что является
      стандартом DeFi. Команда, разрабатывающая tBTC, планирует изменить
      залоговое соотношение ETH/BTC с 150% до 135% вскоре после запуска. Так же
      рассматривается внедрение новых механизмов, которые спустя некоторое время
      смогут снизить данное соотношение до 40%.
    question: Почему tBTC обеспечен ETH при его текущем соотношении?
  - answer: >-
      Данная технология является новой, поэтому невозможно предугадать каждую
      ситуацию, при которой что-то может пойти не так. Надо сказать, что было
      уже несколько таких ситуаций и наше сообщество приняло продуманные меры
      для их решения. Модель безопасности tBTC предусматривает, что если
      подписанты вступят в сговор между собой и сбегут с биткоин-депозитом, то
      пострадавшим от этого пользователям будет выплачен tBTC. Для этого
      существуют залоги ETH (они будут изъяты у мошенников и ликвидированы).
      Если же цена ETH значительно упадет за короткий промежуток времени и
      абсолютно все подписанты сбегут, одновременно разорвав привязку, то
      система станет синтетической. Подробнее об этом можно прочитать в
      документе <a href="https://docs.keep.network/tbtc/index.pdf"
      target="_blank">Техническая характеристика tBTC</a>.
    question: Где может что-то пойти не так в системе tBTC?
  - answer: >-
      Слишком большой размер лота становится проблемой для пулов ликвидности.
      Поддержание нескольких стандартных размеров лотов позволяет повысить
      доступность выкупа.
    question: >-
      Почему существуют фиксированные размеры лотов? Почему не любой случайный
      номинал?
  - answer: >-
      Еще нет. Для этого необходимо провести работу по интеграции. Открытый
      исходный код на сайте<a href="https://github.com/keep-network/tbtc.js"
      target="_blank">tbtc.js GitHub</a>, позволяет разработчикам строить
      интерфейсы, которые подходят для их продуктов. Для валидации Биткойн
      транзакций, лучшим подходом является запуск electrum-сервера, его легко
      сделать и настроить.
    question: >-
      Существует ли tBTC виджет который можно использовать для просмотра данных
      об эмиссии и погашении tBTC в моем DeFi dApp?
  - answer: >-
      ConsenSys Diligence на данный момент завершает шестинедельный аудит кода и
      криптографии tBTC. Результаты будут опубликованы, как только они станут
      доступными.
    question: Был ли проведен аудит tBTC?
  - answer: >
      Each user should undertake their own analysis as to whether there are any
      legal restrictions in their jurisdiction that would either prevent them
      from using tBTC or require the user to register with certain government
      entities.
    question: Does Signing for tBTC and staking ETH make you a MSB?
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

