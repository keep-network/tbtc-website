---
template: resource
path: developers/gambaran-teknis-sistem-tbtc
title: Gambaran Teknis Sistem tBTC
heading: Gambaran Teknis Sistem tBTC
description: >-
  Pelajari tentang TDT receipts, beberapa ukuran Lot, random beacon pada Keep, dan threshold signatures.
date: 2020-04-01T15:04:10.000Z
tags:
  - developers
---

<!---

  Translator: meh#9634
  
  
-->


tBTC menggabungkan fitur desain baru yang membawa implikasi penting bagi pengguna. Bagian ini menjelaskan empat di antaranya: TDT receipts, mbeberapa ukuran Lot, random beacon pada Keep, and threshold signatures.

## TBTC Deposit Token (TDT)

Yang dimaksud dengan TBTC Deposit Token (TDT) adalah token non-fungible yang dicetak saat pengguna meminta setoran. TDT adalah token ERC-721 non-fungible yang berfungsi sebagai mitra TBTC. Ini mewakili klaim atas UTXO yang mendasari deposit di blockchain Bitcoin.

Setoran TBTC dapat dikunci atau dibuka. Deposit yang terkunci hanya dapat ditebus oleh pemilik deposit dengan TDT yang sesuai. Setiap TDT adalah unik untuk setoran yang mencetaknya dan memiliki hak eksklusif hingga jangka waktu 6 bulan untuk menebus setoran.

Setelah setoran sepenuhnya memenuhi syarat melalui bukti transaksi pendanaan Bitcoin (disebut Relai SPV), pemegang dapat meminta penebusan, dan, setelah membayar biaya penandatanganan terutang, dijamin UTXO yang sama yang mendanai setoran di jaringan Bitcoin.

TDT dan TBTC dapat dipertukarkan melalui kontrak yang disebut mesin penjual otomatis, yang mengelola pertukaran TDT untuk TBTC dan sebaliknya.

* Jika diberi TDT, itu akan menambang TBTC.
* Jika TBTC, itu akan membakarnya dan mengembalikan TDT tertentu.

*TDT diperlukan untuk menebus setoran BTC yang terkunci*. Anggap saja seperti tiket saat memeriksa jas: tanpa itu, kamu tidak bisa mendapatkan BTC mu kembali.

TDT bisa ditransfer. Pemegangnya bisa memilih akankah di-*trade*, atau digunakan untuk hal lain.

Anggap saja seperti tiket dari Koin yang Aman, Jika terjadi masalah penipuan atau jaminan, pemegang TDT dijamin kompensasi di TBTC melalui jaminan berikat grup penandatanganan. Jika setoran ditebus oleh akun lain setelah mencapai jangka waktu, maka pemegang TDT dijamin kompensasi dalam TBTC (biaya penandatangan lebih sedikit). Perhatikan bahwa pemegang TDT masih dapat menebus setoran mereka untuk BTC bahkan setelah jangka waktu 6 bulan telah berlalu, jika tidak ada pengguna lain yang menebusnya di cek.

Karena ada lebih banyak nilai dalam mencuri setoran 1 BTC daripada setoran 0,001 BTC, yang pertama cenderung lebih rentan terhadap serangan seperti organisasi. Sebagai NFT, TDT memungkinkan risiko ini dinilai, yang sangat relevan untuk aplikasi yang menggunakan BTC sebagai jaminan. Setiap penerima TDT perlu mengevaluasi sendiri profil risiko dari token yang diberikan. TDT dirancang untuk memberikan keuntungan bersih dengan mengisolasi risiko, karena serangan terhadap simpanan yang mendukung TDT seharusnya hanya berdampak pada pemegang TDT, daripada seluruh mata uang yang dipatok oleh pasokan.

## Lot dan Besaran Lot

Setoran di tBTC dikelola dalam Lot. Untuk membuat sistem rasional dan dapat dikelola, Lot adalah salah satu dari sekumpulan ukuran tetap, yang dikelola oleh sistem. Jika seorang deposan ingin menyetor BTC dalam jumlah yang lebih besar daripada yang didukung oleh ukuran Lot yang ada, mereka harus membuat beberapa permintaan setoran dan mendanai banyak setoran. Hal ini memungkinkan setiap setoran untuk didukung oleh grup penandatanganan yang berbeda, yang keduanya menyederhanakan pengikatan grup penandatangan dan mengisolasi sistem yang lebih luas terhadap kegagalan grup penandatanganan terisolasi, berbahaya atau sebaliknya.

Desain ini sangat penting dan pengguna diharuskan mengerti tentang ini.

*Setiap setoran harus sesuai dengan besaran standar Lot*

Sistem menangani semua kasus kelebihan pembayaran dan kekurangan pembayaran di mana pengguna menyetor jumlah yang lebih besar atau lebih kecil dari ukuran setoran standar sebagai perilaku pengguna yang salah. Efek utama dari kelebihan atau kekurangan pembayaran pada sistem ini adalah untuk mendistorsi jaminan dari para penandatangan. Sistem ini dirancang untuk membebankan biaya ini kepada pengguna.

Dalam kasus kekurangan pembayaran di mana pengguna menyetor jumlah yang kurang dari ukuran Lot BTC yang dipilih, sistem tidak akan membuat bukti yang dapat ditukarkan dengan TBTC. Pengguna kehilangan BTC yang terkunci ke dalam setoran, yang dapat dibagi di antara para penandatangan.

*Pengguna harus sangat menyadari hal ini. Dalam situasi di mana satu-satunya ukuran Lot yang tersedia adalah 1 BTC, misalnya, mudah untuk membayangkan pengguna mencoba mengklaim 1 TBTC dengan membuat dua setoran masing-masing 0,5 BTC. Pengguna yang melakukannya akan kehilangan semua BTC mereka, karena sistem hanya akan mengenali dua contoh kurang bayar yang berbeda. Singkatnya, ukuran Lot dari deposit ditetapkan saat deposit dibuat, dan deposit harus didanai dengan jumlah tersebut.*

Dalam kasus kelebihan pembayaran di mana pengguna menyetor lebih dari ukuran Lot BTC yang dipilih, sistem akan menghasilkan bukti, tetapi hanya untuk ukuran Lot standar, dapat ditukar dengan jumlah tersebut di TBTC. Di pasar yang efisien, kami berharap ini segera ditebus, karena penebus mengharapkan untuk mengambil jumlah dana berlebih yang terkunci dalam deposit sebagai arbitrase. Kecuali jika deposit ditebus oleh deposan asli, kelebihan pembayaran tersebut hangus.

*Dalam contoh ukuran Lot 1 BTC, pengguna yang menyetor 1,4 BTC maka akan menerima bukti yang memungkinkan mereka untuk mencetak tepat 1 TBTC (jumlah yang sesuai dengan ukuran Lot). Sekarang ada deposit yang sangat besar dalam sistem, yang diharapkan dapat ditebus dengan cepat jika diberi kesempatan untuk menukar 1 TBTC dengan 1,4 BTC. Pengguna yang menyetor BTC ekstra akan, seperti semua pengguna lainnya, dapat menebus 1 TBTC mereka untuk 1 BTC, tetapi 0,4 BTC ekstra hilang (kecuali pengguna menyadari kesalahan mereka dan dengan cepat menebus TBTC mereka untuk setoran 1,4 BTC yang asli).*

Sistem hanya akan menerima UTXO pertama yang lebih besar dari ukuran Lot setoran. Semua BTC lain yang dikirim ke grup penandatanganan hangus. Oleh karena itu, deposan wajib mengirimkan hanya satu UTXO. Menerima beberapa UTXO dari deposan akan memberlakukan kompleksitas rantai dan biaya gas yang signifikan, karena setiap UTXO perlu dibuktikan melalui SPV, dan tanda tangan di atasnya diotorisasi secara eksplisit. Penandatangan harus diberi insentif untuk menandatangani setiap transaksi meskipun fakta bahwa nilai total UTXO tidak diketahui.

## Random Beacon untuk Seleksi Penandatangan

Keep Network memerlukan sumber keacakan tepercaya untuk memilih penandatangan tBTC. Ini mengambil bentuk Relai Ambang BLS.

Saat ada permintaan untuk membuat grup penandatanganan, sistem tBTC menggunakan seed acak dari suar acak terdesentralisasi yang aman untuk memilih secara acak anggota grup penandatangan dari kumpulan penandatangan yang memenuhi syarat. Penandatangan ini mengoordinasikan protokol pembuatan kunci terdistribusi yang menghasilkan kunci ECDSA publik untuk grup, yang digunakan untuk menghasilkan alamat dompet yang kemudian diterbitkan ke rantai host. Ini melengkapi fase pemilihan penandatangan.

## Threshold Signatures

tBTC menggunakan threshold signatures untuk mendapatkan *key*-nya. Threshold signatures memungkinkan sekelompok penandatangan untuk menghasilkan satu kunci publik dari satu set kunci pribadi yang "dibagi". Metode ini memungkinkan subset dari penandatangan untuk membuat tanda tangan atas nama grup yang lebih besar. Pengguna dapat memverifikasi grup penanda tangan melalui satu kunci publik yang sesuai dengan beberapa kunci pribadi. Ini memberikan keamanan tanpa persyaratan kerja desain multisig standar.

Threshold signatures memberikan beberapa manfaat antara lain:

* Hnaya butuh sedikit koordinasi untuk membuat grup.
* Tidak ada yang benar-benar harus dipercaya.
* Mereka tangguh hingga setengah dari grup menjadi jahat atau gagal dibuat.

Untuk tBTC v1, grup penandatangan adalah 3 dari 3, artinya mereka adalah grup dari 3 penandatangan yang diharuskan menandatangani untuk membuat tanda tangan atas seluruh grup.

Untuk informasi lebih lengkap tentang *threshold signatures* bisa lihat [di sini](https://blog.keep.network/threshold-signatures-ff2c2b98d9c7).

Kunjungi juga akun [GitHub](https://github.com/keep-network/tbtc) kita untuk informasi, tools, dan dokumentasi. [Bergabung dalam Mailing List](https://tbtc.network/#mailing-list) untuk update, termasuk informasi tentang tBTC yang rilis di mainnit Ethereum. Untuk mempelajari lebih lanjut tentang desain teknis tBTC, baca [technical spec](http://docs.keep.network/tbtc/index.pdf). Bergabung [Keep #tbtc channel di Discord](https://chat.tbtc.network) untuk masalah teknis tentang tBTC kunjungi [tbtc.js](https://tbtc.network/news/2020-02-14-announcing-tbtc-js), dan follow [Kami Twitter](https://twitter.com/search?q=%22%23tbtc%22&src=typed_query) untuk berita dan kesempatan berpartisipasi lainnya.
