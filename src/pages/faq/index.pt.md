---
template: 'faq-page'
path: /faq
title: FAQ
questions:
  - question: Como o tBTC mantém o peg?
    answer: >
      tBTC não mantém o peg. É um peg de provisão não um peg de preços, então não há mecanismo algorítmico tinha de funcionar como um peg descentralizado.
  - question: Porque o preço TBTC não é exatamente o mesmo como BTC?
    answer: >
      tBTC não é um peg de preços a BTC. É um peg de provisão. Isto significa que BTC/tBTC não poderia ser exatamente o mesmo. o tBTC poderia comerciar por um prêmio leve ou um desconto.
  - question: Porque é TBTC collateralizado com ETH na sua proporção atual?
    answer: >
      Como faz para um sistema mais seguro, que é muito importante em DeFi especialmente no lançamento de uma nova rede. ETH é um tipo colateral mais seguro porque é o padrão de DeFi, e a equipe que trabalha em tBTC tem planos de deslocar o ETH/BTC colateralização proporção de 150% a 135% regularmente logo depois do lançamento. Também examina novos mecanismos que podem abaixar aquela proporção a 40% colateralização mais tarde.
  - question: Onde algo pode dar errado no sistema tBTC?
    answer: >
      Esta tecnologia é nova e é impossível esperar cada situação onde algo pode dar errado. Que se diz, há várias situações a comunidade identificou e tomou medidas cuidadosas para dirigir-se. O modelo de segurança é tal que se os assinantes conspirarem e fugiram com o seu depósito de Bitcoin, os usuários se devolvem em TBTC; isto é o que as obrigações ETH são para (vão se agarrar e vão se liquidar). Se ETH tomar um mergulho maciço em um período curto do tempo e TODOS os assinantes fogem e quebram o peg no mesmo tempo, o sistema retrocede a um sintético. Para mais informação, por favor olhe para o <a href="https://docs.keep.network/tbtc/index.pdf" target="_blank">tBTC technical spec</a>.
  - question: Porque são os tamanhos de lote lá fixados? Porque não denominação casual?
    answer: >
      Demasiados tamanhos de lote tornam-se uma questão de consórcios de liquidez. A manutenção de vários tamanhos de lote padrão leva em conta a maior disponibilidade de redenção.
  - question: Há uma coisa tBTC que posso usar para enganchar diretamente tBTC cunhagem e redenção no meu DeFi dapp?
    answer: >
      Ainda não. O trabalho de integração deve incorporar a cunhagem de tBTC e a redenção em um dApp. O código está aberto no <a href="https://github.com/keep-network/tbtc.js" target="_blank">tbtc.js GitHub</a>, permitindo a desenvolvedores construir interfaces que combinam com os seus produtos. Para validar transações de Bitcoin, a melhor aproximação é dirigir um servidor electrum, que é muito fácil girar.
  - question: Fizeram a auditoria do tBTC?
    answer: >
      ConsenSys Diligence conclui atualmente uma criptografia de seis semanas e auditoria de código. Os resultados vão se publicar uma vez que ficam disponíveis.
  - question: Assinar de tBTC e apostando ETH fazem-no um MSB?
    answer: >
      Cada usuário deve empreender a sua própria análise quanto a se há alguma restrição legal na sua jurisdição que os impediria de usar tBTC ou necessitaria que o usuário se registrasse com certas entidades do governo.
  - question: O depósito do BTC para o tBTC é um evento tributável?
    answer: >
      Por favor confira com um profissional fiscal para determinar se depositar BTC de TBTC é um evento tributável em uma jurisdição dada. Uma coisa a considerar é NFT associado com o UTXO de um depósito. Este NFT projeta-se para permitir a uma taxa pagar-se pela custódia de BTC e oferecer a capacidade de remir o exato o mesmo UTXO dentro do período de taxa de seis meses.
  - question: Como o assinante tBTC se estabelece como não custodial?
    answer: >
      O assinante de tBTC define o limiar de uso ECDSA como uma substituição de Bitcoin multisig. Por cada depósito, um novo assinante estabeleceu junta-se (selecionado pelo random beacon), e geram um endereço de Bitcoin PKH do depositante, que se marca na cadeia de Ethereum.
  - question: Quem são os assinantes? Alguém pode tornar-se assinante?
    answer: >
      Um pouco depois do lançamento, deve haver um grupo de rudemente 80 venda privada Keep compradores e alguns outros partidos confiados que assinam tBTC. Muito logo uma oportunidade vai se anunciar para mais indivíduos para participar apostando ETH para tornar-se assinante.
  - question: Porque isto é melhor do que outro BTC em projetos de Ethereum?
    answer: >
      Algumas pessoas acreditam que tBTC é melhor por várias razões. Alguns projetos construíram pegs de preços sintéticos, que não é uma ponte verdadeira. Outros projetos são peg de provisão, mas centralizaram partidos que acrescentam fricção ao processo de redenção e cunhagem e por isso, não são sistemas resistentes à censura. Algumas novas pontes descentralizam-se peg de provisão, contudo, aqueles modelos de segurança estão menos seguros. Confiam em uma ⅔ suposição de honestidade, nenhum parente colateral ETH/extra para suportar depósitos, e o uso marca o novo «cigarro feito à mão crypto» em vez de revisto pelos pares, t-ECDSA criptografia).
  - question: O que um período de taxa de seis meses significa? BTC pode reclamar-se só depois de seis meses?
    answer: >
      Não, não há necessidade de voltar em seis meses, exceto se há uma preferência para remir Bitcoin com certo UTXO. Isto é para que é o recibo de NFT, TDT. A maior parte de usuários de DeFi no varejo não têm esta consideração e não precisam de voltar durante seis meses.
  - question: Lá planeja devem construir ponte de Bitcoin em outras cadeias?
    answer: >
      Não há planos firmes de construir uma ponte em outras cadeias. Contudo o <a href="https://www.crosschain.group/" target="_blank">Cross-Chain Group</a> teve primeiras conversações com cadeias como Cosmo, Zcash e Polkadot em projetos de ponte sem confiança.
  - question: A propriedade de tBTC dá-lhe algum direito de governação?
    answer: >
      Não.
  - question: Porque não somente um preço peg?
    answer: >
      A equipe atrás de tBTC constrói um peg de provisão, não um peg de preços. Não é um mecanismo sintético. Para portadores bitcoin, não deve importar qual o preço real é, somente importa que pode remi-lo para 1 BTC.
  - question: Porque faz a necessidade de tBTC um oráculo de alimentos de preços?
    answer: >
      o tBTC é uma cadeia lateral que necessita o trabalho de partidos anônimos, portanto as obrigações daqueles partidos devem seguir-se previnem o conluio. Por agora, é necessário assegurar que os assinantes se unem para proteger contra o mau comportamento. Um oráculo de alimentos de preços é necessário para manter o preço BTC/ETH desta obrigação.
---