---
template: 'faq-page'
path: /faq
title: 常见question解答
questions:
  - question: tBTC如何维持固定汇率？
    answer: >
      tBTC不维持固定汇率。它是供应挂钩而不是价格挂钩，因此不需要算法机制来发挥去中心化挂钩的作用。
  - question: 为什么TBTC的价格和BTC不完全一样？
    answer: >
      tBTC不是与比特币价格挂钩的;它是供应挂钩。这意味着BTC/tBTC可能不一样。tBTC可能交易溢价或折扣。
  - question: 为什么TBTC以当前比率抵押ETH ？
    answer: >
      因为它使一个更安全的系统，这是非常重要的DeFi，特别是在一个新的网络推出。ETH是一种更安全的担保类型，因为它是DeFi标准，而负责tBTC的团队计划在发布后不久将ETH/BTC担保比率从150%降低到135%。它还在研究新的机制，以便在今后将这一比率降至40%。
  - question: tBTC系统会在什么地方出question吗？
    answer: >
      这是一项新技术，不可能预测所有可能出错的情况。尽管如此，社区已经确定了若干情况并采取了谨慎措施加以解决。安全模型是这样的:如果签名者串通并偷走了你的比特币存款，用户将被以TBTC支付;这就是ETH债券的用途(它们将被扣押和清算)。如果ETH在短时间内大幅下跌，同时所有的签注者都跑掉了，系统就会回落到合成。更多信息，请查看  <a href="https://docs.keep.network/tbtc/index.pdf" target="_blank">tBTC技术规范 spec</a>.
  - question: 为什么有固定的size?为什么不是任意的siez呢？
    answer: >
      太多的size会导致流动性池容易出现question。维持几个标准的size允许更大的赎回可用性。
  - question: 有没有一个tBTC工具，我可以用来直接挂钩tBTC铸造和赎回到我的DeFi dapp？
    answer: >
      还没有。将tBTC铸造和兑换成dApp需要整合工作。代码在 <a href="https://github.com/keep-network/tbtc.js" target="_blank">tbtc.js GitHub</a>中并且是开源的，使开发人员能够构建与其产品相匹配的接口。要验证比特币交易，最好的方法是运行一个electrum服务，这非常容易启动。 
  - question: tBTC已经过审计吗？
    answer: >
      ConsenSys Diligence 目前正在完成为期6周的密码学和代码审计。一旦有结果，就会公布。
  - question: 签下tBTC和staking ETH就能成为MSB吗？
    answer: >
      每个用户应自行分析其管辖范围内是否存在任何法律限制，以阻止他们使用tBTC或要求用户在某些政府实体注册。
  - question: 为tBTC充值BTC是否需要纳税？
    answer: >
      请向税务专业人员查询，以确定为TBTC存储比特币是否在指定管辖区内应纳税。需要考虑的一件事是，与矿床UTXO相关的非泛函效应。该非融资协议旨在允许支付比特币托管费用，并提供在6个月的收费期内赎回完全相同的UTXO的能力。
  - question: 如何将tBTC签名者设置为非托管？
    answer: >
      tBTC的签署人设置使用阈值ECDSA作为比特币多团体替换。对于每一笔存款，一个新的签署人集被拉到一起(由随机信标选择)，它们为储户生成一个比特币PKH地址，该地址被标记在以太坊链上。
  - question: 谁是签名者?任何人都可以成为签名者吗？
    answer: >
      在上线后，就会有大约80个私募节点和一些其他可信的机构签署tBTC。很快就会有机会宣布让更多的个人通过下注ETH来参与成为一个签名者。
  - question: 相比其他BTC在Ethereum项目，tBTC有什么优势？
    answer: >
      我们认为tBTC更好，原因如下。一些项目建立了合成的价格挂钩，这并不是真正的桥梁。其他项目是供应挂钩，但有中央政党增加摩擦的铸造和赎回过程，因此，不是抵御审查的系统。一些新的桥梁是分散的供应钉，然而，这些安全模式不太安全。他们依靠一个⅔可靠的假设,没有ETH/额外抵押品来抵押,并使用全新的“自行滚动加密”而非同行评议,t-ECDSA加密)。
  - question: 六个月的收费期是什么意思?BTC只能在6个月后赎回吗？
    answer: >
      不，不需要在六个月后返回，除非你想兑换特定UTXO比特币。这就是NFT收据TDT的用途。大多数DeFi用户没有这个考虑，不需要在六个月内返回。
  - question: 是否有跨链计划？
    answer: >
      目前还没有在其他链条上建造桥梁的明确计划。不过我们与 <a href="https://www.crosschain.group/" target="_blank">Cross-Chain Group</a> 一些可跨链团队有过关于跨链的沟通，比如：Cosmos, Zcash, 和 Polkadot.
  - question: tBTC所有权是否有管理权？
    answer: >
      没有
  - question: 为什么不直接实行价格挂钩呢？
    answer: >
      tBTC的团队正在建立一个供应挂钩，而不是价格挂钩。它不是一个合成的机制。对于比特币持有者来说，实际价格是多少并不重要，重要的是你能用1比特币兑换它
  - question: 为什么tBTC需要一个初始价格？
    answer: >
      tBTC是一个侧链，需要匿名方的工作，所以必须保持来自这些方的债券，以防止共谋。目前，有必要确保签名者被绑定，以防止不当行为。需要一个初始价格来维持该债券的BTC/ETH价格。
---
