---
template: news-item
title: Bitcoin trên Ethereum - không phải trò chơi, chỉ là toán học
description: Bitcoin trên Ethereum - không phải trò chơi, chỉ là toán học
date: 2019-12-24T12:19:06.656Z
---
Kể từ khi công bố tBTC với Summa tại hội nghị Cross Chain Summit vào tháng 8, chúng tôi đã quan tâm phát triển nguồn giá, mua lại và dòng tiền gửi,một ứng dụng dApp để gửi tiền và mua lại, tiền gửi tùy chọn bị khóa, và nhiều hơn nữa. Chúng tôi cũng đã mở CCG cho các thành viên mới và đề xuất tZEC, chuyển đổi Ethereum-Zcash.

tBTC là dự án đầu tiên được đề xuất bởi Cross Chain Group (CCG). Giao thức ban đầu được thiết kế bởi Matt Luongo và James Prestwich, và hoàn thành với sự đóng góp của cộng đồng. Đáng chú ý là Georgios Konstantopoulos và Dan Robinson cho những đóng góp của họ. 

Để cập nhật liên tục, bạn có thể theo dõi cùng với các cập nhật Keep & tBTC của chúng tôi trong bản tin [Proof of Work](https://proofofwork.news/archive).


![bai3.png](https://cdn.steemitimages.com/DQmSiYCDxN4eEW465hAQrGuwnqfQwrwvxpYws95tYcQ83Mv/bai3.png)


### tBTC là gì?

Nếu bạn có thời gian, hãy xem chi tiết tại [tBTC protocol spec](http://docs.keep.network/tbtc/index.pdf). Đây là TL của bạn; DR:

tBTC duy trì các thuộc tính tiền cứng Bitcoin trên tài chính phi tập trung. Nó là một dApp lớn đầu tiên được xây dựng trên Keep Network, tận dụng cơ sở hạ tầng Keep Keep để kiểm duyệt-,lạm phát và tương thức. tBTC là Bitcoin của bạn, có sẵn trên Ethereum. Nó phân cấp phi tập trung, dễ thay đổi, và quan trọng nhất là an toàn.

TBTC là dựa trên Bitcoin ERC-20 đổi theo tỉ lệ 1:1, được tạo ra thông qua một giao thức phi tập trung. Điều này có nghĩa là nếu bạn có 1 TBTC, bạn có thể tự tin rằng bạn có thể đổi lấy 1 BTC. Nó là một chuỗi phụ, hoặc cung cấp chốt. tBTC không phải là một tổng hợp - nó không phải là giá của Bitcoin trên Ethereum, mà là Bitcoin trên Ethereum, mang lại khả năng mở rộng của Bitcoin cho DeFi (và bạn không phải chờ đợi bản cuối cùng).

### Tạo TBTC

Để tạo TBTC, bạn cần gửi Bitcoin:

•	Alice định mở một khoản ký gửi để tạo TBTC (cùng với một cam kết ETH nhỏ), tạo ra một địa chỉ BTC duy nhất cho cô ấy (một hàm băm khóa công khai (PKH) được đặt bởi những người ký Keep đã đặt 150% tài sản thế chấp vào ETH tham gia). Cô sẽ có ngay Token tiền gửi tBTC (TDT), một NFT để quản lý tiền gửi.

•	Alice gửi 1 BTC đến địa chỉ được cung cấp và chờ đợi.

•	Sau đó Alice gửi bằng chứng thanh toán SPV từ chuỗi BTC đến hợp đồng tiền gửi trên chuỗi ETH.

•	Cuối cùng, Alice yêu cầu 1 TBTC được tạo từ hợp đồng Máy bán hàng tự động TBTC, trao quyền sở hữu tiền gửi của mình cho Máy bán hàng tự động để đổi lại.

•	1 TBTC được tạo và gửi cho Alice (trừ phí người ký).

Tiền gửi tBTC và TBTC có thể cho phép bạn vay tiền, giao dịch ký quỹ, tham gia vào CDP của Maker và kiếm lãi từ Bitcoin của bạn. Bây giờ bạn có thể truy cập vào triển vọng của HODLing mà không cần bán hoặc sử dụng các bên thứ ba tập trung cho các khoản vay.

Lưu ý rằng nếu bạn lo lắng về việc giữ quyền truy cập độc quyền vào Bitcoin UTXO của mình, bạn không nên tạo TBTC từ tiền gửi của mình; thay vào đó, bạn nên tìm các ứng dụng có thể hoạt động trực tiếp với TDT của bạn. Tạo TBTC từ bỏ quyền truy cập độc quyền vào khoản tiền gửi và do đó cho phép người khác mua lại UTXO của bạn nếu họ muốn.

Mạng Keep là một mạng off-chain gồm các nút đọc và ghi vào mạng Ethereum và Bitcoin. Trong hệ thống tBTC, những người ký tên phải đặt tài sản thế chấp bằng 1,5 lần số Bitcoin được gửi trong ETH, để đảm bảo chống lại hoạt động làm hại.

![bai4.jpeg](https://cdn.steemitimages.com/DQmNLrDdH8koZcCJvqScsnb1bGpk2813MRAh1QMTbzaXJAE/bai4.jpeg)

### Đổi TBTC lấy Bitcoin

Mua lại đơn giản như tạo tiền; 1 TBTC luôn được đổi thành 1 BTC. Khi bạn sẵn sàng chuyển trở lại BTC, bạn có thể sử dụng Token tiền gửi tBTC (TDT) của mình để đổi UTXO chính xác của khoản tiền gửi ban đầu nếu trong thời hạn gửi 6 tháng (người ký được trả phí tại cuối kỳ). Cách thể đổi TBTC lấy Bitcoin:

•	Gửi yêu cầu đổi TBTC, cùng với token Tiền gửi tBTC.

•	Nếu bạn sở hữu TDT cho khoản tiền gửi, bạn cũng cần gửi một khoản phí người ký (tức là nếu bạn đã tạo 1 TBTC, bạn sẽ gửi yêu cầu đổi với 1.005 TBTC). Điều này sẽ cung cấp cho bạn UTXO chính xác được liên kết với TDT của bạn.

•	Nếu bạn không sở hữu TDT nhưng bạn muốn đổi bitcoin cho TBTC của mình, bạn chỉ cần trả phí người ký cộng với TBTC để đổi BTC từ hệ thống.

•	Nếu bạn không sở hữu TDT, nhưng có một khoản tiền gửi đã tồn tại> 6 tháng trong hệ thống, bạn sẽ chỉ mất 1 TBTC để đổi lấy 1 BTC. Trong trường hợp này, phí người ký được trả bởi chủ sở hữu tiền gửi tBTC hiện tại, nhưng bạn (người đổi) nhận được BTC. 

•	Hệ thống keep sẽ yêu cầu bạn xác nhận yêu cầu BTC của bạn trên chuỗi khối Ethereum. 

•	Hệ thống phát hành BTC và xác nhận việc phát hành trên chuỗi ETH.

•	Sau khi hoàn thành BTC, hệ thống Keep sẽ gửi bằng chứng giao dịch BTC đến chuỗi ETH, kích hoạt thanh toán cho người ký. 

### Cập nhật phát triển tBTC


![bai5.png](https://cdn.steemitimages.com/DQmZXYuEzDdYifHdsrQkvBoq8dMNrjsCMwfagVtV37crvmc/bai5.png)

#### Quy trình đổi:

Ứng dụng đổi cho phép một khoản tiền gửi tBTC được đổi lại cho các khoản BTC ban đầu bằng Token tiền gửi tBTC hợp lệ. Một TDT được gắn với một khoản tiền gửi tBTC cụ thể Bitcoin Bitcoin UTXO. Giữ token cho phép đổi số tiền gửi tBTC sang Bitcoin ban đầu.

Trong các thiết kế ban đầu, tiền gửi tBTC ngay lập tức được chuyển đổi thành token ERC-20 TBTC khi đủ điều kiện (bằng chứng tiền gửi). Trong thiết kế cuối cùng của tBTC v1, theo mặc định, tiền gửi đủ điều kiện chỉ cung cấp cho bạn một TDT. Có một hợp đồng riêng, được gọi là Máy bán hàng tự động TBTC, được sử dụng để tạo TBTC để đổi lấy TDT, trừ đi một khoản ký quỹ bằng với phí ký tên cho khoản tiền gửi. Chủ sở hữu TDT có quyền độc quyền mua lại UTXO cơ bản cho đến khi khoản tiền gửi vượt thời hạn (6 tháng), trong khi tạo TBTC từ tiền gửi chuyển quyền sở hữu token đó sang máy bán hàng tự động, từ đó mọi người có thể lấy và đổi tiền gửi . 

DeFi mở rộng quy mô với Ethereum, nhưng hãy tưởng tượng điều gì sẽ xảy ra khi DeFi có quyền truy cập vào thanh khoản Bitcoin Bitcoin. Sắp ra mắt: tBTC đã chạy trên mạng kiểm tra nội bộ của chúng tôi kể từ tháng 10 và sẽ có trên mạng kiểm tra công khai vào đầu Q1.


#### Thiết kế nguồn giá:

Chúng tôi đã cam kết hợp tác với cộng đồng để thiết kế và thực hiện cơ chế cung cấp giá phi tập trung, tuy nhiên, đối với v1, chúng tôi sẽ sử dụng hệ thống trung bình giá oracle của Maker cho nguồn cấp giá BTC / ETH. Nguồn không cung cấp giá sẽ được triển khai trong lần ra mắt tBTC v2, vào cuối năm 2020. Chúng tôi thiết kế một cơ chế không phải là giải pháp oracle nguồn giá, thay vào đó là một hệ thống thách thức đấu giá ngược mà chúng tôi gọi là nguồn không cung cấp giá. Người ký có thể đề xuất giá cam kết BTC / ETH và thách thức và giá đề xuất. Với mô hình này, giá không công bằng sẽ không được thực hiện. 

#### Tham gia

Quan tâm đến việc tích hợp tBTC với giao thức DeFi, ứng dụng hoặc ví của bạn hoặc tham gia với tBTC khi nó ra mắt? 


[Tham gia danh sách email](https://tbtc.network/#mailing-list) để được cập nhật.

Nguồn bổ sung:

•	Keep’s [GitHub](https://github.com/keep-network)

•	The tBTC [Technical spec](http://docs.keep.network/tbtc/index.pdf)

•	[tbtc.js](https://tbtc.network/news/2020-02-14-announcing-tbtc-js)

•	The [Keep #tbtc channel on Discord](https://chat.tbtc.network)


