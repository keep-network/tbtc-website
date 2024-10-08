---
template: 'faq-page'
path: /faq
title: よくある質問
questions:
  - question: tBTC はどのようにペッグを維持しているのでしょうか？
    answer: >
      tBTC は価格のペッグを維持しておらず、供給量をペッグしています。そのため、分散された価格のペッグのためのアルゴリズムは必要ありません。
  - question: どうして tBTC の価格は、BTC と完全に同じでないのでしょうか?
    answer: >
      tBTC は BTC の価格にペッグされた通貨ではなく、供給量がペッグされています。つまり、 BTC/tBTC 完全に同じではないということです。tBTC  は若干のプレミアムが上乗せされた価格もしくは値引きされた価格で取引される可能性があります。
  - question: なぜ tBTC は現在の比率の ETH で担保されているのでしょうか？
    answer: >
      なぜならそのことにより、より安全なシステムが構築されるからです。これは DeFi 、特に新しいネットワークのローンチに際して非常に重要なことです。ETH は DeFi で標準的であり、担保のタイプとして安全と考えられます。また、 tBTC チームは ETH/BTC の担保比率をローンチのすぐ後に 150% から 135% に変更することを検討しています。また、新しいメカニズムによってこの比率は 40% まで減らすことが出来ます。
  - question: tBTC の仕組みのどの部分に、うまく行かなくなる可能性がありますか?
    answer: >
      この技術は新しく、全ての状況で何かがうまく行かなくなることを予想するのは不可能です。言い換えれば、コミュニティが問題を特定し、慎重な対策を取るいくつかの状況があるということになります。tBTC のセキュリティモデルは、もし署名者が共謀し、あなたが預け入れたビットコインを持って逃げた場合、ユーザーは tBTC で受け取ることができるというものです。そのために ETH 建ての債券 (それらは押収され清算されます) が存在するのです。短期間に ETH の価格がひどく下落し、全ての署名者が持ち逃げし、ペッグが外れるということが同時に起こった場合、システムは合成資産へとフォールバックします。詳細については、 <a href="https://docs.keep.network/tbtc/index.pdf" target="_blank">tBTC 技術仕様</a> をご覧ください。
  - question: なぜ固定されたロットサイズが存在するのでしょうか? 何故ランダムな呼称単位でないのでしょうか？
    answer: >
      ロットサイズが大きすぎると、流動性プールに取っての問題になりえます。いくつかの標準的なロットサイズを維持することは、買い戻しの可用性をより大きくします。
  - question: 自分の DeFi dapp に tBTC の発行、引き出しの機能を追加することができる、 tBTC のウィジェットはありますか？
    answer: >
      まだありません。 統合には、 tBTC の発行と引き出しを行う機能を dApp に組み込む必要があります。
      コードは <a href="https://github.com/keep-network/tbtc.js" target="_blank">tbtc.js</a> としてオープンソースで公開されており、開発者は自分のプロダクトに合ったインターフェースを開発することができます。ビットコインのトランザクションを検証する良い方法は、エレクトラムのサーバーを立てることです。これは非常に簡単です。
  - question: tBTC は監査を受けていますか？
    answer: >
      ConsenSys Diligence が現在6週間の暗号とコードに関する監査を完了しつつあります。結果は完了次第公開される予定です。
  - question: tBTC の署名と ETH のステーキングを行うことで、MSB (マネー・サービス・ビジネス) と見做されますか？
    answer: >
      各ユーザーは自身の管轄区域における法規制が tBTC の使用を妨げたり、ユーザーが特定の政府に登録を求められるかどうかということについて、自身で分析する必要があります。
  - question: BTC を tBTC に預け入れる操作は、課税されますか？
    answer: >
      税金に関する専門家に、管轄区域において BTC を tBTC に預け入れる行為が課税対象となるかどうか確認してください。
      考慮するべきは、預け入れの UTXO が関連する NFT でしょう。
      この NFT は BTC のカストディの料金を支払うことが出来、6ヶ月の手数料期間の間、その UTXO を引き出す機能を提供します。
  - question: tBTC の署名者のセットはどの程度非カストディですか？
    answer: >
      tBTC の署名者セットは ECDSA 閾値をビットコインのマルチシグの代わりに使用します。
      デポジットの度に、ランダムビーコンに選択された署名者セットが協力して働き、デポジットした人のために イーサリアムのチェーンにマークされた、ビットコインのの公開鍵ハッシュのアドレスを生成します。
  - question: 署名者とは誰ですか？誰でも署名者になることが出来ますか？
    answer: >
      ローンチのすぐ後に、おおよそ 80 のプライベートセールでの KEEP 購入者のグループと、その他少数の信頼された関係者が tBTC の署名を行います。
      すぐにより多くの個人が署名者として ETH をステーキングし、参加する機会がアナウンスされるでしょう。
  - question: 何故他の BTC をイーサリアムに載せるプロジェクトよりも良いのでしょうか？
    answer: >
      いくつかの理由から、 tBTC はより優れていると考える人もいます。他のいくつかのプロジェクトは合成された価格のペッグを用いますが、これは本当のブリッジではありません。また他のプロジェクトは供給量をペッグしますが、中央集権的な第三者が発行と買い戻しのプロセスに軋轢をもたらします。そのため、これらは監視に対する耐性を持ちません。
      また、いくつかの新しいブリッジは分散化された供給量のペッグを行いますが、セキュリティモデルが安全ではありません。彼らは正直さを仮定しており、預け入れた BTC をバックアップする ETH や追加の担保がなく、 ピアレビューされた t-ECDSA 暗号ではなくオレオレ暗号を使っているのです。
  - question: 6ヶ月の手数料期間は何を意味していますか？BTC は6ヶ月後にしか請求できないのでしょうか？
    answer: >
      いいえ。特定の UTXO からビットコインを引き出したいという希望がないかぎり、6ヶ月待つ必要はありません。これがまさに、NFT レシート (TDT) が存在する理由です。ほとんどの DeFi こうしたことを考慮しないため、6ヶ月待つ必要はないのです。
  - question: 他のチェーンにビットコインのブリッジを作る計画はありますか？
    answer: >
      他のチェーン上にブリッジを作るしっかりしたプランはありません。ただ、<a href="https://www.crosschain.group/" target="_blank">Cross-Chain Group</a> は Cosmos や Zcash, Polkadot とトラストレスなブリッジのデザインについて、初期段階のやりとりをしています。
  - question: tBTC を保有することでガバナンス の権利を得ることができますか？
    answer: >
      いいえ
  - question: ただ価格をペッグするだけではダメなのですか？
    answer: >
      tBTC のチームは価格のペッグではなく、供給量のペッグを作ろうとしています。これは合成資産の仕組みではありません。
      ビットコイン保有者にとって、価格は問題ではありません。ただ間違いなく 1 BTCを引き出せるかどうかが問題なのです。
  - question: 何故 tBTC はプライスフィードのオラクルを必要とするのでしょうか？
    answer: >
      tBTC は匿名の集団の働きを必要とするサイドチェーンです。そのため、この匿名の集団からの債権は共謀を防ぐために保持されなければなりません。
      意図しない振る舞いから保護するため、署名者は担保がついていることを確実にする必要があります。
      プライスフィード オラクルはこの担保のために BTC/ETH の価格を維持するために必要なのです。
---
