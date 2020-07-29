---
template: resource
path: developers/tbtc-technical-system-overview
title: tBTC Technical System Overview
heading: tBTC Technical System Overview
description: >-
  Learn about TDT receipts, multiple lot sizes, Keep's random beacon, and
  threshold signatures.
date: 2020-04-01T15:04:10.000Z
tags:
  - developers
---
o tBTC incorpora características de desenho novas que transportam implicações importantes de usuários. Esta parte explica quatro destes: recibos de TDT, múltiplos tamanhos de lote, Keep’s random beacon e assinaturas liminares.

## TBTC Deposit Token (TDT)

TBTC Deposit Token (TDT) é um token não-fungível que se cunha moedas quando um usuário solicita um depósito. TDT é um token ERC-721 não-fungível que serve de uma cópia de TBTC. Representa uma reclamação para UTXO subjacente de um depósito em Bitcoin blockchain.

Os depósitos TBTC podem trancar-se ou destrancar-se. Um depósito trancado só pode remir-se pelo proprietário de depósito com o TDT correspondente. Cada TDT é único para o depósito que cunha moedas ele e transporta o direito exclusivo para até um termo de 6 meses para remir o depósito.

Uma vez que um depósito qualifica-se totalmente por uma prova da consolidação transação de Bitcoin (chamou o SPV Relay), o portador pode solicitar que a redenção, e, depois de pagar qualquer taxa de assinação saliente, se garanta o mesmo UTXO que consolidou o depósito na rede de Bitcoin.

TDT e TBTC são trocáveis por um contrato chamado a máquina de venda, que dirige a troca de TDT para TBTC e vice-versa.

* Considerando um TDT, cunhará moedas TBTC.
* TBTC dado, o queimará e devolverá um TDT específico.

*O TDT deve remir um depósito de BTC trancado*. Pensar nele como a entrada de um cheque de casaco estrito: sem ele, não pode recobrar o seu BTC.

TDTs são transferíveis. Os portadores podem decidir comerciar eles, por exemplo, ou usá-los como parente colateral em outro lugar.

No caso de fraude ou questões de colateralização, garantem ao portador de um TDT a compensação em TBTC via o parente colateral hipotecado do grupo de assinação. Se o depósito se remir por outra conta depois que conseguiu o termo, então garantem ao portador TDT a compensação em TBTC (menos taxas de assinante). Observar que um portador TDT ainda pode remir o seu depósito de BTC até uma vez que o termo de 6 meses passou, se nenhum outro usuário o tenha remido.

Desde que há mais valor no roubo de um 1 depósito de BTC do que um 0.001 depósito de BTC, o antigo é provavelmente mais suscetível de ataques como re-orgs. Como NFT, TDTs permitem a este risco fixar-se o preço em, que é altamente relevante para aplicações que usam BTC como parente colateral. Qualquer recipiente de um TDT precisará de avaliar o perfil dos riscos de um token dado eles mesmos. TDTs projetam-se para fornecer um benefício líquido isolando o risco, desde que os ataques contra o depósito que apoia um TDT só devem comprimir o portador TDT, em vez da moeda cavilhada pela provisão inteira.

## Lotes e tamanhos de lote

Os depósitos em tBTC dirigem-se em lotes. Para fazer o sistema racional e manejável, os lotes são um do grupo de tamanhos fixos, dirigidos pelo sistema. Se um depositante quiser depositar um montante maior de BTC do que apoiado por tamanhos de lote existentes, devem criar múltiplos pedidos de depósito e fundo múltiplos depósitos. Isto leva em conta cada depósito a apoiar-se por um grupo de assinação diferente, que tanto simplifica a ligação de contratar grupos como isola o mais largo sistema de fracassos de grupo de assinação isolados, maliciosos ou de outra maneira.

Este desenho tem implicações importantes que os usuários devem ser familiares com.

*Cada depósito deve combinar com um dos tamanhos de lote padrão*

O sistema trata todos os exemplos do pagamento excessivo e pagamento insuficiente – no qual um usuário deposita um montante que é maior ou mais pequeno do que o tamanho de depósito padrão – como comportamento de usuário defeituoso. O efeito primário de sobre – ou pagamento insuficiente no sistema é alterar o collateralization dos assinantes. O sistema projeta-se para transmitir os preços disto ao usuário.

Em caso de pagamento insuficiente – no qual um usuário deposita um montante menos do que o tamanho de lote BTC escolhido – o sistema não criará uma prova que pode remir-se para TBTC. O usuário perde o BTC trancado no depósito, que pode dividir-se entre os assinantes.

*Os usuários devem estar sabendo agudamente isto. Em uma situação onde o único tamanho de lote disponível é 1 BTC, por exemplo, é fácil imaginar um usuário que tenta à reclamação 1 TBTC fazendo dois depósitos de 0.5 BTC cada um. Um usuário que faz assim perderá todos dos seus BTC, como o sistema simplesmente reconhecerá dois exemplos distintos de pagamento insuficiente. Em resumo, o tamanho de lote de um depósito fixa-se quando o depósito se cria, e o depósito deve consolidar-se com aquele montante.*

Em caso do pagamento excessivo – onde um usuário deposita mais do que o tamanho de lote BTC escolhido – o sistema gerará uma prova, mas só para o tamanho de lote padrão, remível em troca daquele montante em TBTC. Em um mercado eficiente, esperaríamos que isto se remisse imediatamente, como o redentor espera tomar o montante sobreconsolidado trancado no depósito como arbitragem. A menos que o depósito se redima pelo depositante original, o pagamento excessivo é multa.

*Em um 1 exemplo de tamanho de lote BTC, um usuário que deposita 1.4 BTC receberá uma prova que lhes permite cunhar moedas exatamente 1 TBTC (o montante que corresponde ao tamanho de lote). Há agora um depósito de tamanho desproporcionado no sistema, que esperaria remir-se rapidamente, considerando a oportunidade de trocar 1 TBTC para 1.4 BTC. O usuário que depositou o extra BTC, como todos outros usuários, será capaz de remir o seu 1 TBTC de 1 BTC, mas 0.4 extra BTC se perdem (a menos que o usuário realize o seu erro e rapidamente redima o seu TBTC de 1.4 depósito de BTC original).*

O sistema só aceitará o primeiro maior UTXO do que o tamanho de lote de depósito. Toda outra BTC enviada ao grupo de assinação é multa. Por isso, é imperativo que os depositantes enviem só um UTXO único. Aceitar múltiplo UTXOs de depositantes imporia complexidade na cadeia significante e taxas de gás, como cada UTXO precisaria de provar-se via SPV e uma assinatura nele explicitamente autorizado. Os assinantes teriam de ser incentivized para assinar cada transação apesar de que o valor total do UTXOs não se conhece.

## Random Beacon de seleção de assinante

A rede Keep necessita que uma fonte confiada de aleatoriedade selecione assinantes tBTC. Isto toma a forma de um BLS Threshold Relay.

Quando um pedido entra para criar um grupo de assinação, o sistema tBTC usa uma semente casual de um random beacon descentralizado seguro a membros de grupo de assinação à toa escolhidos do consórcio elegível de assinantes. Estes assinantes coordenam um protocolo de geração-chave distribuído que resulta em uma chave de ECDSA pública do grupo, que se usa para produzir um endereço de carteira que então se publica à cadeia de anfitrião. Isto conclui a fase de seleção de assinante.

## Assinaturas liminares

tBTC usa assinaturas liminares para a geração-chave. As assinaturas liminares levam em conta um grupo de assinantes para gerar uma chave pública única do grupo de «ações» chave privadas. Este método permite a um subconjunto dos assinantes criar assinaturas em nome do grupo maior. Os usuários podem verificar grupos de assinantes por uma chave pública única que corresponde a múltiplas chaves privadas. Isto fornece a segurança sem as exigências de trabalho do padrão multisig desenhos.

As assinaturas liminares fornecem um número de benefícios:

* Relativamente um pouco de coordenação é necessária para fundar um grupo
* Não têm de confiar a nenhum membro único do grupo
* São resilientes a até a metade do grupo que é malicioso ou consegue gerar

Para tBTC v1, os grupos fazem o sinal são 3 de 3, subentendendo que são grupos de 3 assinantes que necessitam que os 3 assinantes colaborem para criar assinaturas em nome do grupo.

Pode encontrar a informação adicional sobre assinaturas liminares [aqui](https://blog.keep.network/threshold-signatures-ff2c2b98d9c7).

Visitar o nosso [GitHub](https://github.com/keep-network/tbtc) de mais informação, instrumentos e documentação. [Juntar o tBTC que manda lista](https://tbtc.network/#mailing-list) de atualizações, inclusive a informação sobre o lançamento vindoiro de tBTC em Ethereum mainnet. Para aprender mais sobre o [desenho técnico](http://docs.keep.network/tbtc/index.pdf) de tBTC, leia a especulação técnica. Juntar canal [Keep #tbtc na Discord](https://chat.tbtc.network) de perguntas técnicas sobre tBTC e [tbtc.js](https://tbtc.network/news/2020-02-14-announcing-tbtc-js), e seguir ao longo em notícias de [along on Twitter](https://twitter.com/search?q=%22%23tbtc%22&src=typed_query) e oportunidades de participar.
