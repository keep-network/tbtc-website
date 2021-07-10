---
template: 'faq-page'
path: /faq
title: FAQ - Perguntas e Respostas Frequentes
perguntas:
  - pergunta: Como o tBTC mantém o peg?
    resposta: >
      O tBTC não mantém o peg. É uma pegada de oferta e não uma pegada de preço; portanto, não há mecanismo algorítmico necessário para funcionar como um peg descentralizado.
  - pergunta: Por que o preço do TBTC não é exatamente o mesmo do BTC?
    resposta: >
      O tBTC não está atrelado ao preço do BTC; é um peg de suprimento. Isso significa que o BTC/tBTC pode não ser exatamente o mesmo. O tBTC pode ser negociado com um pequeno prêmio ou desconto.
  - pergunta: Por que o TBTC é garantido/colateralizado com a ETH na sua taxa atual?
    resposta: >
      Porque cria um sistema mais seguro, o que é muito importante no DeFi, especialmente no lançamento de uma nova rede. O ETH é um tipo de garantia mais seguro porque é o padrão DeFi, e a equipe que trabalha no tBTC planeja mudar a taxa de colateralização de ETH/BTC de 150% para 135% logo após o lançamento. Também está examinando novos mecanismos que poderiam reduzir esse índice para 40% de garantia posteriormente.
  - pergunta: Onde algo poderia dar errado no sistema tBTC?
    resposta: >
      Esta tecnologia é nova e é impossível prever todas as situações em que algo pode dar errado. Dito isto, existem várias situações que a comunidade identificou e tomou medidas cuidadosas para resolver. O modelo de segurança é tal que, se os signatários conspirarem e fugirem com seu depósito de Bitcoin, os usuários serão pagos em TBTC; é para isso que servem os títulos da ETH (eles serão apreendidos e liquidados). Se a ETH der um mergulho massivo em um curto período de tempo e TODOS os signatários fugirem e quebrarem o pino ao mesmo tempo, o sistema volta a ser sintético. Para obter mais informações, consulte as <a href="https://docs.keep.network/tbtc/index.pdf" target="_blank">especificações técnicas tBTC</a>.
  - pergunta: Por que existem tamanhos de lote fixos? Por que não qualquer denominação aleatória?
    resposta: >
      Muitos tamanhos de lote se tornam um problema para pools de liquidez. A manutenção de vários tamanhos de lote padrão permite maior disponibilidade de resgate.
  - pergunta: Existe um widget tBTC que posso usar para conectar diretamente o minting e resgate de tBTC em meu dapp DeFi?
    resposta: >
      Ainda não. O trabalho de integração é necessário para construir a cunhagem e redenção do tBTC em um dApp. O código é open-source em <a href="https://github.com/keep-network/tbtc.js" target="_blank">tbtc.js no GitHub</a>, permitindo que os desenvolvedores criem interfaces que combinem com seus produtos. Para validar transações Bitcoin, a melhor abordagem é executar um servidor electrum, que é muito fácil de rodar.
  - pergunta: O tBTC foi auditado?
    resposta: >
      A ConsenSys Diligence está atualmente concluindo uma auditoria de de seis semanas de criptografia e de código. Os resultados serão publicados assim que estiverem disponíveis.
  - pergunta: A assinatura do tBTC e o piquete da ETH fazem de você um MSB?
    resposta: >
      Cada usuário deve realizar sua própria análise para verificar se há alguma restrição legal em sua jurisdição que o impeça de usar o tBTC ou exija que o usuário se registre em certas entidades governamentais.
  - pergunta: O depósito de BTC para tBTC é um evento tributável?
    resposta: >
      Verifique com um contador para determinar se o depósito de BTC para TBTC é um evento tributável em uma determinada jurisdição. Uma coisa a considerar é o NFT associado ao UTXO de um depósito. Este NFT foi projetado para permitir o pagamento de uma taxa pela custódia do BTC e para oferecer a capacidade de resgatar o mesmo UTXO dentro do período de taxa de seis meses.
  - pergunta: Como o signatário tBTC não tem custódia?
    resposta: >
      Os conjuntos de signatários tBTC usam o limite ECDSA como uma substituição multisig Bitcoin. Para cada depósito, um novo conjunto de signatários é reunido (selecionado pelo sinalizador aleatório) e eles geram um endereço Bitcoin PKH para o depositante, que é marcado na cadeia Ethereum.
  - pergunta: Quem são os signatários? Qualquer pessoa pode se tornar um signatário?
    resposta: >
      Logo após o lançamento, deve haver um grupo de cerca de 80 compradores privados de KEEP e algumas outras partes confiáveis assinando o tBTC. Muito em breve, será anunciada uma oportunidade para mais indivíduos participarem, fazendo staking na ETH para se tornarem signatários.
  - pergunta: Por que isso é melhor do que outros projectos de BTC em Ethereum?
    resposta: >
      Algumas pessoas acreditam que o tBTC é melhor por vários motivos. Alguns projetos construíram preços fixos sintéticos, o que não é uma ponte verdadeira. Outros projetos são pegs/lastros de abastecimento, mas têm partidos centralizados adicionando atrito ao processo de cunhagem e resgate e, portanto, não são sistemas resistentes à censura. Algumas novas pontes são pinos de abastecimento descentralizados; no entanto, esses modelos de segurança são menos seguros. Eles se baseiam no pressuposto de ⅔ honestidade, sem ETH/colateral extra para fazer backup dos depósitos e usam uma nova “análise de criptografia” em vez da criptografia t-ECDSA, que é revisada por pares).
  - pergunta: O que significa um período de taxa de seis meses? O BTC pode ser reivindicado somente após seis meses?
    resposta: >
      Não, não há necessidade de devolução em seis meses, exceto se houver preferência para resgatar Bitcoin com um determinado UTXO. É para isso que serve o recibo de NFT, TDT. A maioria dos usuários de DeFi de varejo não tem essa consideração e não precisa retornar em seis meses.
  - pergunta: Existem planos para construir uma ponte Bitcoin em outras blockchains?
    resposta: >
      Não há planos firmes de construir uma ponte sobre outras blockchains. No entanto, o <a href="https://www.crosschain.group/" target="_blank">Grupo Cross-Chain</a> teve conversas anteriores com chains como Cosmos, Zcash e Polkadot sobre projetos de pontes sem confiança.
  - pergunta: A propriedade do tBTC dá a você algum direito de governança?
    resposta: >
      Não.
  - pergunta: Por que não fazer um lastro/peg de preço?
    resposta: >
      A equipe por trás do tBTC está construindo uma indexação de fornecimento, não uma indexação de preço. Não é um mecanismo sintético. Para os detentores de bitcoins, não deve importar qual é o preço real, apenas importa que você possa resgatá-lo por 1 BTC
  - pergunta: Por que o tBTC precisa de um oráculo de feed de preço?
    resposta: >
      O tBTC é uma cadeia lateral que requer o trabalho de partes anônimas, portanto, os títulos dessas partes devem ser mantidos para evitar conluio. Por enquanto, é necessário garantir que os signatários estejam ligados, a fim de se proteger contra mau comportamento. Um oráculo de feed de preço é necessário para manter o preço BTC/ETH para esse título.
---