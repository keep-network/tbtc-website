---
template: 'faq-page'
path: /faq
title: FAQ
questions:
  - question: Bagaimana caranya tBTC menjaga harga-nilainya(peg)?
    answer: >
      tBTC tidak menjaga harga-nilainya(peg). Karena ini didasari atas jumlah-nilai supply bukan dari harga-nilainya itu sendiri, jadi tidak ada kebutuhan mekanisme algoritma yang berfungsi sebagai desentralisasi harga-nilai(peg).
  - question: Kenapa harga tBTC tidak sama persis dengan BTC?
    answer: >
      tBTC tidak dikaitkan berdasarkan harga-nilai(peg) BTC; tetapi dikaitkan berdasarkan jumlah-nilai supply(peg) BTC. Itu berarti BTC/tBTC mungkin bukanlah hal yang sama . tBTC juga mungkin akan diperjual-belikan dengan harga diskon atau premium.
  - question: Mengapa tBTC dijaminkan(collateralized) dengan ETH pada rasio saat ini?
    answer: >
      Karena hal ini dapat membuat sistem menjadi lebih aman, dimana sangat penting bagi DeFi terutama pada peluncuran jaringan baru. ETH lebih aman bertidak sebagai penjamin(collateral) karena ETH merupakan standard DeFi itu sendiri, dan tim yang sedang bekerja di tBTC memiliki rencana untuk mengubah rasio penjaminan(collateralization) ETH/BTC dari 150% ke 135% sesegera mungkin setelah peluncuran. Hal ini juga merupakan mekanisme terbaru yang dapat menurunkan nilai rasio peminjaman(collateralization) sebanyak 40% nantinya.
  - question: Permasalahan apa saja yang mungkin terjadi pada sistem tBTC?
    answer: >
      Teknologi ini adalah teknologi baru dan sangat tidak mungkin untuk mengetahui apa saja yang mungkin jadi permasalahannya. Oleh sebab itu, ada beberapa situasi dimana komunitas mengidentifikasi dan memberikan saran untuk menyelesaikan permasalahan itu sendiri. The security model is such that if the signers collude and run off with your Bitcoin deposit, users are paid back in tBTC; that’s what the ETH bonds are for (they’ll be seized and liquidated). Model keamanannya adalah jika signer berkolusi dan kabur dengan depost Bitcoin anda, pengguna akan mendapatkan kembali aset mereka tetapi dalam bentuk tBTC; itulah sebabnya mengapa digunakannya pengikat(bonding) ETH (ETH mereka akan diambil dan dilikuidasi). Jikai nilai ETH turun secara dramatis pada waktu yang singkat dan SELURUH signer kabur dan merusak nilai satuan(peg) pada saat yang bersamaan, sistem akan kembali pada sintetik. Untuk informasi lebih lanjut, silahkan lihat <a href="https://docs.keep.network/tbtc/index.pdf" target="_blank">spesifikasi teknikal tBTC</a>.
  - question: Kenapa menggunakan jumlah lot yang tetap? Kenapa tidak menggunakan denonimasi acak saja?
    answer: >
      Memiliki jumlah lot yang terlalu banyak bisa menjadi permasalahan bagi pool likuiditas. Menjaga jumlah standard lot dapat mempermudah ketersediaan pengembalian yang lebih besar.
  - question: Adakah widget tBTC yang bisa saya gunakan untuk melakukan proses minting dan penebusan(redeem) tBTC kedalam dapp DeFi saya?
    answer: >
      Tidak saat ini. Integerasi dibutuhkan untuk membangun minting dan penebusan(redeem) tBTC kedalam dApp. Kode dapat dilihat secara terbuka di <a href="https://github.com/keep-network/tbtc.js" target="_blank">tbtc.js GitHub</a>, memungkinkan developer untuk membangun interface yang sesuai dengan produk mereka. Untuk memvalidasi transaksi Bitcoin, cara terbaik yakni menjalankan server electrum, yang sangat mudah untuk digunakan.
  - question: Sudahkan tBTC di audit?
    answer: >
      ConsenSys Diligence saat ini sedang melakukan penyelesaian kode audit dan kriptografi enam-minggu mereka. Hasil laporan akan diumumkan setelah tersedia nantinya.
  - question: Apakah signing tBTC dan staking ETH menjadikan anda Layanan Keuangan(MSB)?
    answer: >
      Setiap pengguna harus melakukan analisa mereka tentang batasan legal pemerintah yang mungkin dapat mencegah anda menggunakan tBTC atau membutuhkan pengguna untuk mendaftarkan dirinya kepada entitas pemerintah tertentu.
  - question: Apakah proses deposit BTC untuk tBTC dikenai pajak?
    answer: >
      Mohon untuk melakukan pengecheckan ini dengan ahli profesional pajak didaerah anda untuk memastikan bahwa deposit BTC untuk tBTC akan dikenai pajak atau tidak berdasarkan peraturan yang ada. Satu hal yang harus diingat yaitu NFT diasosiasikan dengan deposit UTXO. NFT ini dirancang untuk memungkinkan biaya yang harus dibayar untuk penahanan BTC dan untuk menawarkan kemampuan untuk menebus UTXO yang sama persis dalam periode biaya enam bulan. 
  - question: Bagaiaman caranya signer tBTC menetapkan non-custodial?
    answer: >
      Signer tBTC menggunakan ECDSA sebagai pengganti multisig Bitcoin. Untuk setiap deposit, signer baru akan dikumpulkan secara bersamaan (dipilih secara acak oleh beacon), dan mereka akan membuat address PKH Bitcoin bagi depositor, yang ditandai didalam jaringan Ethereum.
  - question: Siapakah signer tersebut? Bisakah semua orang menjadi signer?
    answer: >
      Setelah peluncuran, akan ada grup yang terdiri atas 80 orang pembeli KEEP pada masa private sale dan beberapa kelompok terpercaya yang bertindak sebagai signer tBTC. Tetapi akan ada kesempatan untuk individu lainnya untuk berpartisipasi dengan cara staking ETH untuk menjadi signer.
  - question: Mengapa ini lebih baik dibandingkan dengan project BTC lainnya yang berada didalam jaringan Ethereum?
    answer: >
      Beberapa orang percaya tBTC lebih baik untuk beberapa alasan. Beberapa project telah membangun harga-nilai(peg) sintetik, yang mana bukan merupakan tujuan asli. Project lainnya menggunakan jumlah-nilai(peg), tetapi memiliki sistem tersentralisasi yang dapat menyebabkan perpecahan pada proses minting dan penebusan(redemption), ada yang menggunakan sistem sensor. Ada juga beberapa yang menggunakan jumlah-nilai(peg) yang terdesentralisasi, tetapi memiliki model keamanan yang lemah karena mereka bertumpu pada 2/3 asumsi mereka terhadap kejujuran, tidak adanya jaminan(collateral) extra/ETH untuk melindungi deposit, dan menggunakan brand baru "nama crypto sendiri" ketimbang menggunakan, t-ECDSA kriptografi). 
  - question: Apa arti dari periode biaya enam-bulan? Bisakah BTC diklaim kembali setelah enam bulan?
    answer: >
      Tidak, anda tidak perlu kembali enam bulan kedepan, kecuali jika anda memiliki preferensi untuk mengambil(redeem) Bitcoin anda kembali dengan UTXO tertentu. Disinilah kwitansi NFT, TDT, digunakan. Kebanyakan retail pengguna DeFi tidak memikirkan hal ini, dan oleh sebab itulah anda tidak perlu untuk datang kembali enam bulan kedepan.
  - question: Adakah rencana untuk membangun jaringan Bitcoin didalam jaringan lainnya?
    answer: >
      Untuk saat ini kami tidak memiliki rencana untuk membangunnya didalam jaringan lain. Tetapi <a href="https://www.crosschain.group/" target="_blank">Grup Cross-Chain</a> telah memiliki percakaan dengan jaringan lainnya seperti Cosmos, Zcash, dan Polkadot mengenai desain hal ini.
  - question: Apakah kepemilikan tBTC memberikan anda hak kepemerintahan?
    answer: >
      Tidak.
  - question: Kenapa tidak melakukan pengikatan harga-nilai(peg)?
    answer: >
      Tim yang berada dibelakang tBTC membangun sistem jumlah-nilai(peg), bukan harga-nilai(peg). Harga-nilai(peg) bukan merupakan mekanisme sintetik. Untuk para pemegang Bitcoin, tidak peduli berapa harganya, yang terpenting adalah anda bisa mengambilnya(redeem) dengan 1 BTC.
  - question: Mengapa tBTC membutuhkan oracle price feed?
    answer: >
      tBTC merupakan sidechain yang membutuhkan kerja dari kelompok-kelompok anonim, jadi ikatan dari kelompok-kelompok tersebut harus dilakukan untuk mencegah perpecahan. Untuk saat ini, sangat diperlukan kepastian agar signer terikat(bonded) untuk melindungi dari tindak kriminal. Oracle price feed dibutuhkan untuk menjaga nilai BTC/ETH untuk ikatan(bond) ini.
---