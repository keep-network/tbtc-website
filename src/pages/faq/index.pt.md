---
template: 'faq-page'
path: /faq
title: FAQ
questions:
  - question: Como é que o tBTC mantém o peg?
    answer: >
      O tBTC não mantém o peg. É um ped de oferta e não um peg de preço; portanto, não é necessário um mecanismo de algorítmico para funcionar como um peg descentralizada.
  - question: Por é que o preço do TBTC não é exatamente o mesmo da BTC?
    answer: >
      O tBTC não é um peg de preço da BTC; é um peg de fornecimento. Isso significa que o BTC / tBTC pode não ser exatamente o mesmo. O tBTC pode ser negociado com um pequeno prêmio ou desconto.
  - question: Por que o TBTC é garantido com o ETH á sua taxa atual?
    answer: >
      Porque cria um sistema mais seguro, o que é muito importante no DeFi, especialmente no lançamento de uma nova rede. O ETH é um tipo de garantia mais seguro porque é o padrão DeFi, e a equipe que trabalha no tBTC planeia mudar o rácio de colateralização de ETH / BTC de 150% para 135% logo após o lançamento. Também está a examinar novos mecanismos que poderiam reduzir esse rácio para 40% garantias posteriormente.
  - question: Onde é que algo poderia dar errado no sistema tBTC?
    answer: >
      Esta tecnologia é nova e é impossível prever todas as situações em que algo pode dar errado. Dito isto, existem várias situações que a comunidade identificou e tomou medidas cuidadosas para resolver. O modelo de segurança é tal que, se os signatários conspirarem e fugirem com o seu depósito de Bitcoin, os usuários serão pagos de volta em TBTC; é para isso que servem os títulos ETH (eles serão apreendidos e liquidados). Se ETH der um mergulho maciço em um curto período de tempo e TODOS os signatários fugirem e ao mesmo tempo quebrarem o peg, o sistema voltará a ser sintético. Para mais informações, por favour consulte  tBTC technical spec.
  - question: Por que existem tamanhos de lotes fixos?  Por que não qualquer denominação aleatória?
    answer: >
      Muitos tamanhos de lote tornam-se um problema para os pools de liquidez. A manutenção de vários tamanhos de lote padrão permite uma maior disponibilidade de resgate.
  - question: Existe um widget tBTC que eu possa usar para conectar diretamente a cunhagem e resgate de tBTC no meu DeFi dapp?
    answer: >
      Ainda não. É necessário um trabalho de integração para criar a cunhagem e resgate do tBTC em um dApp. O código é de código aberto no tbtc.js GitHub, permitindo que os desenvolvedores construam interfaces que correspondam aos seus produtos. Para validar as transações Bitcoin, a melhor abordagem é executar um servidor electrum, que é muito fácil de ativar.
  - question: O tBTC foi auditado?
    answer: >
      O ConsenSys Diligence está atualmente concluindo uma criptografia de seis semanas e uma auditoria de código. Os resultados serão publicados assim que estiverem disponíveis.
  - question: A assinatura do tBTC e a implantação da ETH fazem de voce um MSB?
    answer: >
      Cada usuário deve realizar a sua própria análise para determinar se há alguma restrição legal na sua jurisdição que os impeça de usar o tBTC ou exija que o usuário se registre em determinadas entidades governamentais.
  - question: O depósito do BTC para o tBTC é um evento tributável?
    answer: >
      Consulte um profissional tributário para determinar se o depósito do BTC para o TBTC é um evento tributável em uma determinada jurisdição. Uma coisa a considerar é a NFT associada ao UTXO de um depósito. Este NFT foi projetado para permitir que uma taxa seja paga pela custódia do BTC e oferecer a capacidade de resgatar exatamente o mesmo UTXO dentro do período de seis meses da taxa.
  - question: HComo é que o assinante tBTC é definido como não custodial?
    answer: >
      Os conjuntos de assinantes do tBTC usam o limite ECDSA como uma substituição multisig de Bitcoin. Para cada depósito, um novo conjunto de assinantes é reunido (selecionado pelo sinal aleatório) e eles geram um endereço PKH do Bitcoin para o depositante, marcado na cadeia Ethereum.
  - question: Quem são os signatários? Alguém pode se tornar um signatário?
    answer: >
      Logo após o lançamento, deve haver um grupo de aproximadamente 80 compradores de KEEP de venda privada e algumas outras partes confiáveis assinando o tBTC. Muito em breve será anunciada uma oportunidade para que mais pessoas participem apostando no ETH para se tornarem signatários.
  - question: Por que é que isto é melhor do que outras BTC nos projetos Ethereum?
    answer: >
      Algumas pessoas acreditam que o tBTC é melhor por vários motivos. Alguns projetos criaram preços peg sintéticos, o que não é uma ponte verdadeira. Outros projetos são estacas de suprimento, mas têm partes centralizadas adicionando atrito ao processo de cunhagem e resgate e, portanto, não são sistemas resistentes à censura. Algumas novas pontes são pinos de fornecimento descentralizados, no entanto, esses modelos de segurança são menos seguros. Eles se baseiam em uma premissa de honestidade de  ⅔ , sem garantia extra de ETH / para fazer backup de depósitos e usam novos “faça sua própria criptografia” em vez da criptografia revisada por pares t-ECDSA cryptography).
  - question: O que significa um período de taxa de seis meses? O BTC só pode ser reivindicado após seis meses?
    answer: >
      Não, não há necessidade de retornar aos seis meses, exceto se houver uma preferência para resgatar o Bitcoin com um determinado UTXO. É para isso que so recibo da NFT, TDT serve. A maioria dos usuários de retalho de DeFi não tem essa consideração e não precisam retornar em seis meses.
  - question: Existem planos para construir uma ponte Bitcoin em outras cadeias?
    answer: >
      Não há planos firmes para construir uma ponte sobre outras cadeias. No entanto, o Cross-Chain Group teve conversas iniciais com cadeias como Cosmos, Zcash e Polkadot em projetos de pontes sem confiança.
  - question: A propriedade do tBTC concede-lhe direitos de governança?
    answer: >
      Não.
  - question: Por que não apenas fazer um preço peg?
    answer: >
     A equipe por trás do tBTC está construindo um suporte de fornecimento, não um preço peg. Não é um mecanismo sintético. Para os titulares de bitcoin, não deve importar qual é o preço atual, basta saber que pode resgatá-lo por 1 BTC.
  - question: Porque é que o Tbtc precisa de um oracle de alimentação de preços?
    answer: >
      tBTC é uma cadeia lateral que requer trabalho de partes anónimas, portanto, títulos dessas partes devem ser mantídos para evitar conluio. Por agora, é necessário assegurar que os assinantes estejam vinculados para proteger contra maus procedimentos. É necessário um oracle de alimentação de preços para manter o preço da BTC/ETH.
---