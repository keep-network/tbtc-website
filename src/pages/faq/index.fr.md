---
template: 'faq-page'
path: /faq
title: Questions fréquemment posées (FAQ)
questions:
  - question: Comment le système garantit-il que le prix d'un TBTC équivaut au prix d'un BTC ?
    answer: >
      Le système tBTC ne fournit pas une telle garantie à proprement parler. Il s'agit d'une indexation sur la masse monétaire et non pas sur le prix, il n'est donc pas nécessaire d'avoir un algorithme qui influençant le prix car 1 TBTC peut toujours être retiré contre 1 BTC.
  - question: Pourquoi le prix d'un TBTC n'est-il pas exactement le même que celui d'un BTC ?
    answer: >
      tBTC n'est pas un système de maintient du prix, il s'agit d'un système assurant que chaque TBTC corespond à un BTC sur la blockchain Bitcoin. Cela signifie que le prix d'un TBTC n'est pas forcément identifique à celui d'un BTC. Les TBTC peuvent s'échanger à prime ou à escompte.
  - question: Pourquoi la caution pour un dépôt de Bitcoin est-elle calculée à 150% de la valeur du dépôt ?
    answer: >
      Parce que cela garantit la sécurité du système ce qui est très important dans l'écosystème DeFi (Decentralized Finance ou Finance Décentralisée), tout particulèrement au lancement d'un nouveau réseau. L'ETH est un dépôt de garantie plus sûr car c'est le standard DeFi et l'équipe de développement envisage de réduire le ratio de 150% à 135% peu de temps après le lancement. L'équipe examine également d'autres pistes qui pourraient permettre de réduire ce ratio aussi bas que 40% à l'avenir
  - question: Qu'est-ce qui peut mal se passer dans le système tBTC ?
    answer: >
      Cette technologie est nouvelle et il est difficile d'anticiper toutes les situations qui pourraient conduire à un problème. Ceci étant dit, la communauté a identifié quelques situations et a imaginé des mesures de protection. Le modèle de sécurité est tel que si les signataires conspirent pour voler les Bitcoin d'un  dépôt, l'utilisateur volé est compensé en TBTC; c'est à cela que servent les cautions en ETH (elles sont saisies et liquidées). Si le cours de l'ETH baisse de manière brutale et que TOUS les signataires conspirent au même moment, le système se rabat sur un actif synthétique. Pour plus d'information, merci de consulter <a href="https://docs.keep.network/tbtc/index.pdf" target="_blank">les spécifications techniques du système tBTC</a>.
  - question: Pourquoi les tailles de lot sont elles fixées ? Pourquoi ne pas utiliser de nombreuses une valeurs arbitraire ?
    answer: >
      Un trop grand nombre de tailes de lot pose un problème de liquidité. le maintien de plusieurs tailles standard permet une meilleure disponibilité en cas de demande de retrait.
  - question: Existe t-il un widget tBTC que je peux inclure directement dans mon application DeFi pour l'émission de tBTC et le retrait de BTC à partir de tBTC ?
    answer: >
      Pas encore. Des étapes de développement sont nécessaires pour inclure tBTC à une dApp. Le code est open-source dans le <a href="https://github.com/keep-network/tbtc.js" target="_blank">GitHub tbtc.js</a> ce qui permet aux développeurs de construire des interfaces qui correspondent à leur produit. Pour valider les transactions Bitcoin, la meilleure approche est d'héberger un serveyr Electrum ce qui est tès facile à mettre en oeuvre.
  - question: Est-ce que le système tBTC a fait l'objet d'un audit ?
    answer: >
      ConsenSys Diligence  est actuellement en train de compléter un audit du code et de la cryptographie employée d'une durée de six semaines. Les résultats seront publiés dès qu'ils seront disponibles.
  - question: Est-ce que le fait d'être un signataire pour le réseau tBTC et de mettre en jeu des ETH fait de moi une Entreprise de Services Monétaires ?
    answer: >
      Chaque utilisateur doit effectuer sa propre analyse pour déterminer s'il existe des restrictions légales dans leur jurisdiction qui pourrait les empêcher d'utiliser tBTC, ou exiger d'eux qu'ils s'enregistre auprès de certaines entités gouvernementales.
  - question: Est-ce que le dépôt de BTC pour obtenir des tBTC est imposable ?
    answer: >
      Pour savoir si un dépôt de BTC sur le réseau tBTC est imposable, veuillez vous renseigner auprès d'un conseiller fiscal professionnel. Il faut prendre en considération le jeton non fongible associé à l'UTXO du dépôt. Ce jeton est conçu pour permettre le paiement des frais à destination des signataires et pour donner la possibilité aux utilisateurs de retirer le même UTXO que celui du dépôt original dans la limite de la période de maturation de 6 mois.
  - question: Comment est-il possible que l'ensemble de signataires du réseau tBTC n'aient pas pleine possession des BTC déposés ?
    answer: >
      L'ensemble des signataires tBTCutilise un protocole ECDSA à seuil comme remplacement du protocole de multisignature de Bitcoin. Pour chaque dépôt, un nouvel ensemble de signataires est constitué (sélectionné par la balise aléatoire) avant que ceux-ci ne génère une adresse Bitcoin PKH pour l'utilisateur demandant le dépôt. Cette adresse est marquée sur la blockchain Ethereum.
  - question: Qui sont les signataires ? Est-ce que tout le monde peut devenir signataire ?
    answer: >
      Juste après le lancement, l'ensemble des signataires sera constitué d'environ 80 investisseurs privés détenteurs de jetons KEEP suite à des précédentes levées de fonds. Se joignent à eux quelques autres signataires de confiance. Une opportunité de participer en mettant en jeu des ETH se présentera pour toute autre personne très bientôt.
  - question: Pourquoi ce projet est-il meilleur que les autres versions de BTC sur la blockchain Ethereum ?
    answer: >
      Certaines personnes pensent que tBTC est une meilleure alternative pour plusieurs raisons. Certains projets ont développé des actifs synthétiques ce qui ne constitue pas une véritable passerelle. D'autres projets indexent égalemement sur la masse monétaire mais utilisent des tiers de confiance pour les étapes d'émission et de retrait ce qui les rend susceptible à la censure. De nouvelles  passerelles indexées sur la masse monétaire sont décentralisées mais leurs modèles de sécurité sont moins robustes.Elles reposent sur l'hypothèse que les ⅔ du réseau se comportent correctement, aucune caution n'est déposée pour offrir un dédommagement aux utilisateurs en cas d'erreur, et elles utilisent de nouvelles méthodes cryptographiques plutôt que la cryptographie t-ECDSA, établie et revue par les pairs.
  - question: Que signifie le délai de frais de six mois ? Est-ce que les BTC déposés ne peuvent être retirés qu'après ces six mois ?
    answer: >
      Non, il n'est pas nécessaire de retirer après six mois à moins que vous ne souhaitiez retirer un UTXO spécifique. C'est le rôle du jeton non fongible TDT. La plupart des utilisateurs de l'écosystème DeFi n'auront pas à se soucier de cette fonctionnalité et n'ont pas besoin de retirer au bout de 6 mois.
  - question: Est-il prévu de développer des passerelles entre la blockchain Bitcoin et d'autres blockchains qu'Ethereum ?
    answer: >
      Il n'y a pas de plan établi à ce stade. En revanche, le <a href="https://www.crosschain.group/" target="_blank">Cross-Chain Group</a> a entamé des discussions avec des développeurs de blockchains telles que Cosmos, Zcash, and Polkadot sur le sujet de passerelles minimisant la confiance.
  - question: Est-ce que les détenteurs de TBTC ou de KEEP ont des droits de gouvernance ?
    answer: >
      Ces jetons ne sont pas des jetons de gouvernance.
  - question: Pourquoi ne pas simplement indexer un actif synthétique sur le prix  du Bitcoin ?
    answer: >
      L'équipe responsable du développement de du protocole tBTC développe une idexation sur la masse monétaire et non pas une indexation sur le prix. Il ne s'agit pas d'un mécanisme synthétique. Pour les détenteurs de Bitcoin, le prix ne devrait pas avoir d'importance : la possibilité d'échanger un TBTC contre un BTC est tout ce qui compte.
  - question: Pourquoi le système tBTC a t-il besoin d'un oracle pour le flux de prix ?
    answer: >
      tBTC est une sidechain qui requiert la participation de partis anonymes, des cautions doivent donc être demandées à ces partis pour empêcher toute collusion.Pour l'instant, il est nécessaire de s'assurer que les signataires ont déposé une caution pour prévenir les comportemens malveillants. Un oracle est nécessaire pour connaître le prix des paires de devise BTC/ETH qui sert alors à calculer le montant de la caution.
---