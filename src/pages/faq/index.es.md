---
template: faq-page
path: /faq
title: FAQ
questions:
  - answer: >-
      Al tratarse de un vínculo de existencia y no de precio, no es necesario
      ningún mecanismo algorítmico para que funcione como un vínculo
      descentralizado.
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
  - answer: >-
      Cada usuario debe realizar su propio análisis acerca de las restriciones
      legales en su juridicción que les prohiban el uso de usar tBTC, o en dado
      caso, la necesidad de un adecuado registro con las entidades
      gubernamentales determinadas.
    question: >-
      ¿El ser un firmante de tBTC y participar con ETH te hace un Negocio de
      Servicios Monetarios?
  - answer: >-
      Por favor compruebe con un asesor fiscal para determinar si el depósito de
      BTC para TBTC es una operación fiscal en cierta jurisdicción. Un aspecto a
      considerar es el NFT asociado con la UTXO (salida de transacción no
      gastada) del depósito. Este NFT permite que una couta sea pagada para la
      custodia del BTC y ofrece la posibilidad de redimir exactamente la misma
      UTXO dentro del periodo de cuota de seis meses.
    question: '¿Depositar BTC para tBTC es una operación fiscal? '
  - answer: >-
      tBTC’s signer sets use threshold ECDSA as a Bitcoin multisig replacement.
      For every deposit, a new signer set is pulled together (selected by the
      random beacon), and they generate a Bitcoin PKH address for the depositor,
      which is marked on the Ethereum chain.


      El set del firmante de tBTC usa el límite ECDSA como un reemplazo al
      multisig de Bitcoin. Para cada depósito se asigna un nuevo set de firmante
      (seleccionado por el beacon aleatorio), y estos generan una dirección PKH
      de Bitcoin para el depositante, y esta es marcada en la cadena de
      Ethereum.
    question: ¿Cómo es que el set para el firmante de tBTC es uno sin custodia?
  - answer: >-
      Después del lanzamiento habrá un grupo de aproximadamente 80 compradores
      de la venta privada de KEEP y algunos otros grupos de confianza firmando
      para tBTC. Muy pronto se anunciará una oportunidad para que más individuos
      participen con ETH para convertirse en firmantes.
    question: ¿Quiénes son los firmantes? ¿Cualquiera puede ser uno?
  - answer: >-
      Algunas personas creen que tBTC es mejor por diversas razones. Algunos
      proyectos han construido vínculos de precio sintéticos, algo que no es un
      verdadero enlace. Otros proyectos son vínculos de existencia, pero hay
      grupos centralizados que añaden fricción al proceso de acuñado y
      redención, y por lo tanto, no son sistemas libres de censura. Algunos
      nuevos enlaces son vínculos de existencia descentralizados, pero esos
      modelos de seguridad son menos seguros, puesto que dependen de asumir que
      hay honesitdad a ⅔, no existe un colateral extra/de ETH para respaldar los
      depósitos y usan lo nuevo de "haz tus propias cripto" en lugar de
      criptografía t-ECDSA revisada por expertos.
    question: ¿Por qué es este proyecto mejor que otros de BTC en Ethereum?
  - answer: >-
      No, there is no need to return at six months, except if there is a
      preference to  redeem Bitcoin with a certain UTXO. This is what the NFT
      receipt, TDT, is for. Most retail DeFi users do not have this
      consideration, and do not need to return in six months.


      No, y no hay necesidad de volver a los seis meses, a menos que se prefiera
      redimir el Bitcoin con una UTXO determidada. Para esto es el recibo NFT
      (TDT). La mayoría de los usuarios minoristas de DeFi no deberían tener
      estas consideraciones, y no necesitan regresar en seis meses.
    question: >-
      ¿A qué se refiere con el periodo de cuota de seis meses? ¿Será posible
      reclamar el BTC sólo después de los seis meses?
  - answer: >-
      Ahora no existen planes firmes para contruir el enlace sobre otras
      cadenas. Aunque el <a href="https://www.crosschain.group/"
      target="_blank">Cross-Chain Group</a> ya ha tenido conversaciones
      puntuales con otras cadenas como Cosmos, Zcash y Polkadot sobre diseños de
      enlaces fiables.
    question: ¿Hay planes para construir enlaces con Bitcoin en otras cadenas?
  - answer: No.
    question: ¿La posesión de tBTC te otorga algún derecho de gobernanza?
  - answer: >-
      El equipo detrás de tBTC está construyendo un vínculo de existencia, no de
      precio. No es un mecanismo sintético. Para los poseedores de Bitcoin, no
      debería importar cuál es el precio actual, sólo el que lo puedas canjear
      por 1 BTC.
    question: ¿Por qué no simplemente un vínculo de precio?
  - answer: >
      tBTC is a sidechain that requires work from anonymous parties, so bonds
      from those parties must be held to prevent collusion. For now, it is
      necessary to ensure that signers are bonded in order to protect against
      misbehavior. A price feed oracle is needed to maintain the BTC/ETH price
      for this bond.
    question: Why does tBTC need a price feed oracle?
---

