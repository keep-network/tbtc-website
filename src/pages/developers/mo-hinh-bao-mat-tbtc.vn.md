---
template: resource
title: Mô hình bảo mật tBTC
heading: Mô hình bảo mật tBTC
description: >-
  tBTC được thiết kế là cách an toàn để mọi người sử dụng Bitcoin trên Ethereum. Các dự án khác nhau có cách tiếp cận khác nhau để bảo mật.
date: 2020-04-18T18:21:28.438Z
tags:
  - security
---
tBTC được thiết kế là cách an toàn để mọi người sử dụng Bitcoin trên Ethereum. Các dự án khác nhau có cách tiếp cận khác nhau để bảo mật. Sau đây là tổng quan về mô hình bảo mật tBTC, và cách nó đạt được mức độ bảo mật cao cho người dùng và người ký.

## Một sidechain Bitcoin giảm thiểu niềm tin
	
Sidechains được phát minh như một cách để thử nghiệm mở khóa tiềm năng Bitcoin Bitcoin trên các chuỗi khác. Ý tưởng rất đơn giản - khóa BTC trên chuỗi khối chính và mở khóa để sử dụng trên một blockchain khác, tạo ra một loại tiền tệ mới được gắn với BTC. Trong thực tế, xây dựng một chốt 2 chiều mà không có trung gian đáng tin cậy là khó khăn. Liquid của Blockstream là một ví dụ về một sidechain Bitcoin trong sản xuất dựa trên các trung gian đáng tin cậy.

Mặc dù Liquid hoạt động nhưng nó thiếu tính mở và bảo mật BTC. Liquid dựa vào một liên đoàn đáng tin cậy của những người ký tên để lưu giữ bitcoin bị khóa. Nếu những người ký mong muốn như vậy, họ có thể kiểm duyệt rút tiền hoặc lấy tiền và bỏ đi. Hơn nữa, không có sự truy đòi của người dùng trong trường hợp có người ký tên ác ý - người dùng phải hoàn toàn dựa vào việc tin tưởng vào mạng Liquid và công nghệ cơ bản của nó.

tBTC là một sự thay thế giảm thiểu niềm tin cho mô hình này. Người ký được thế chấp vượt mức tới 150% giá trị của khoản tiền gửi mà họ lưu ký và người dùng được hoàn trả đầy đủ trong trường hợp [người ký gian lận](https://tbtc.network/developers/tbtc-security-model/#signer-fraud). Người ký được chọn từ một mạng lưới các nút mở và phi tập trung chạy giao thức Keep, tất cả được liên kết trên Ethereum.

Hoạt động cơ bản của việc tạo 1 TBTC, phiên bản được chốt của Bitcoin trên Ethereum, như sau: 

1.	Yêu cầu giữ ECDSA ràng buộc được yêu cầu từ mạng Keep để ký 1 BTC.

2.	Một **nhóm người ký** lập và bỏ ra **150% giá trị của 1 BTC** trong ETH làm tài sản thế chấp.

3.	Người ký tạo một ví Bitcoin bằng [giao thức ECDSA ngưỡng.](https://www.binance.vision/security/threshold-signatures-explained) 

4.	Người dùng gửi 1 BTC vào ví Bitcoin.

5.	Người dùng tạo [**bằng chứng SPV**](https://docs.keep.network/tbtc/#spv) về giao dịch tiền gửi của họ và gửi đến chuỗi Ethereum

6.	Người dùng tạo TBTC.

Đổi TBTC trở lại BTC chỉ đơn giản là quá trình ngược lại: 

1.	Người dùng ghi TBTC và cung cấp địa chỉ Bitcoin nhận để bắt đầu đổi. 

2.	**Nhóm người ký** tạo và xuất bản chữ ký cho giao dịch Bitcoin để gửi Bitcoin đến địa chỉ Bitcoin mà người dùng yêu cầu. 
3.	Người dùng phát giao dịch này và chữ ký được tạo ra cho mạng Bitcoin. 

Những người ký tên tạo ra **bằng chứng SPV** của giao dịch này, xuất bản nó lên chuỗi Ethereum và nhận lại cam kết.
Có ba hệ thống đang hoạt động trong hoạt động này: 

1.	Keep Network, nơi tạo ra các liên kết người ký cho mỗi khoản tiền gửi để lưu ký bitcoin.

2.	Nguồn cấp giá Bitcoin, được sử dụng để xác định tài sản thế chấp của người ký trên chuỗi máy chủ Ethereum.

3.	Bitcoin relay, xác minh các giao dịch BTC để tạo và đổi TBTC. 

## Một mạng lưới phi tập trung của người ký

tBTC sử dụng mạng [Keep](https://keep.network/) để cung cấp một mạng người ký luôn trực tuyến, phi tập trung. Mỗi nhóm người ký gửi tiền gửi bitcoin được tạo thành từ 3 nút. Các nút này được chọn ngẫu nhiên từ một nhóm lớn, sử dụng đèn hiệu [Keep ngẫu nhiên](https://docs.keep.network/random-beacon/). Bất kỳ cơ hội nào để thao túng người ký đều được giảm thiểu bằng mô hình đặt cược token KEEP, cung cấp tính kháng mạo nhận.

Để đảm bảo người dùng được bồi thường trong trường hợp thất bại hoặc gian lận, những người ký phải thế chấp cao quá mức trong ETH với tỷ lệ 150% giá trị tiền gửi bitcoin. tBTC xử lý lỗi người ký và gian lận người ký, phạt người ký và hoàn trả đầy đủ cho người dùng trong TBTC, cũng như làm cho người ký không đủ điều kiện trong tương lai.

## Người ký thất bại

Người ký không đáp ứng yêu cầu mua lại một cách kịp thời sẽ cấu thành lỗi người ký. Thất bại của người ký có thể bao gồm việc không tạo được chữ ký để mua lại, cũng như không tạo ra bằng chứng SPV của việc đưa vào khối Bitcoin để đổi.

Tất cả các thất bại được coi là hủy bỏ giao thức, và bắt đầu dòng [thanh lý hủy bỏ](https://docs.keep.network/tbtc/#redemption). Cam kết của người ký được thu giữ và bán đấu giá cho TBTC để người dùng có thể được hoàn trả cho các khoản tiền không thể truy cập của họ và một nửa số còn lại của cam kết (tối đa là 1/6 số cam kết ban đầu) được trả lại cho người ký.

Để bù lại khoản lỗ của họ từ việc thanh lý, các nhóm ký có thể chọn khôi phục BTC sau khi việc hủy bỏ đã bắt đầu. Các khách hàng tham khảo để lại phối hợp ngoại tuyến cho mỗi người ký. 

## Người ký gian lận

Gian lận người ký là hành động duy nhất trong hệ thống tBTC dẫn đến hình phạt nghiêm khắc. Bất kỳ người ký nào di chuyển bitcoin mà không được ủy quyền bởi giao thức tBTC đều bị cắt, đốt token công việc của họ và thu giữ toàn bộ cam kết của họ để truy đòi cho người dùng.

Gian lận được chứng minh bằng cách xuất trình chữ ký trái phép trên mạng. Bất cứ ai cũng có thể đưa ra bằng chứng gian lận và nhận ETH còn lại sau khi bán đấu giá trái phiếu của người ký.

Gian lận người ký bị trừng phạt trong cả hai giao thức tBTC và Keep ECDSA. 

1.	Ở lớp tBTC, luồng thanh lý gian lận được ban hành và trái phiếu được sử dụng để mua TBTC. Người giữ Token tiền [gửi tBTC](https://tbtc.network/developers/tbtc-technical-system-overview) được bồi thường bằng TBTC, trừ khi khoản tiền gửi đang là TBTC đang lưu hành. Trong trường hợp này, TBTC bị cháy để duy trì chốt cung cấp 1: 1. 

2.	Ở lớp Keep, người ký bị cắt và token KEEP của họ bị đốt, có khả năng xóa chúng khỏi nhóm ứng cử viên. Những người ký bị cắt không chỉ mất vốn, mà còn mất cơ hội cho các khoản phí trong tương lai.

## Một nguồn cấp giá mạnh mẽ

Những người ký cam kết tập thể 150% giá trị của Bitcoin mà họ lưu ký, khuyến khích hành vi trung thực như chi tiết ở trên. Các cam kết này nằm trong tài sản bản địa Ethereum, ETH, đòi hỏi phải có nguồn cấp giá Bitcoin. Như vậy, tính bảo mật của nguồn cấp giá là không thể thiếu đối với hệ thống.

tBTC v1 dựa vào nguồn cấp giá ETH / BTC đáng tin cậy được vận hành bởi những người tham gia hệ sinh thái. Nguồn cấp dữ liệu chính, được điều hành bởi MakerDAO, là nguồn cấp dữ liệu trung gian về giá từ Binance, HitBTC, Coinbase, Poloniex, Huobi và Bitfinex. Nếu nguồn cấp dữ liệu chính ngừng báo cáo, hệ thống có thể quay lại nguồn cấp dữ liệu thứ cấp.

Nguồn cấp dữ liệu giới thiệu một lớp các cuộc tấn công có thể gây hại cho người ký - nhưng nhờ thiết kế hệ thống, không ảnh hưởng đến người gửi tiền. Một nguồn cấp dữ liệu với giá cũ hoặc bị thao túng có thể đẩy tiền gửi vào thanh lý, nhưng vì thanh lý là đấu giá ngược, cam kết của người ký có thể được bán với độ trượt nhỏ, và trên bất kỳ giá báo cáo bị thao túng nào. Nguồn cấp giá thao túng ngắn hạn không đe dọa tiền ký gửi, nhưng là một rủi ro cho những người ký.

Một nguồn cấp dữ liệu bị lỗi đang bị thao túng cho nhiều khối bắt đầu đe dọa hệ thống theo thời gian. Nếu một nguồn cấp dữ liệu dường như bị thao túng, người dùng hợp lý nên đổi tiền gửi của họ và thoát khỏi hệ thống. Đáng chú ý, một nguồn cấp dữ liệu bị lỗi không can thiệp vào chuyển đổi của người dùng.

Một nguồn cấp dữ liệu bị thao túng không cứu một người ký tên cố tình làm hại khỏi bị cắt, nhưng nó có thể làm giảm mức độ truy đòi của người gửi tiền trong trường hợp hành vi sai trái. Về vấn đề này, nguồn cấp dữ liệu là một biện pháp chuyên sâu - vô hiệu hóa nguồn cấp dữ liệu rơi trở lại mô hình bảo mật yếu hơn.

## Giao dịch Bitcoin relay

Chứng minh trạng thái của chuỗi Bitcoin trên Ethereum đòi hỏi một hình thức giao tiếp chuỗi chéo. tBTC sử dụng [bằng chứng SPV](https://docs.keep.network/tbtc/#spv) để thực hiện điều này, dựa trên relay [nguồn mở](https://github.com/summa-tx/relays) do [Summa](https://summa.one/) xây dựng. Mặc dù relay theo dõi trạng thái của chuỗi Bitcoin, nó vẫn dựa vào các “giả định SPV”, một hình thức bảo mật yếu hơn so với xác minh đầy đủ về việc chạy một nút đầy đủ.

Việc sử dụng bằng chứng SPV đảm bảo rằng TBTC được gắn chặt với BTC thật - không thể “in ra” nhiều BTC. Tương tự, các bằng chứng không dựa vào một liên kết trung thực, vì trạng thái bitcoin được xác minh trong chính hợp đồng thông minh. 
Quản trị

Phiên bản đầu tiên của tBTC đã được xây dựng mà không có bất kỳ khả năng nâng cấp hợp đồng nào, tuân theo triết lý bất biến và quản trị chọn lọc từ Bitcoin. Bất kỳ phiên bản nào trong tương lai của tBTC sẽ là các hệ thống mới và cần có sự phối hợp xã hội để nâng cấp “nâng cấp”, tương tự như cách một phân tách cứng có thể xảy ra với Bitcoin. 

Tuy nhiên, nhóm phát triển vẫn duy trì khóa đặc quyền với 4 khả năng riêng biệt khi ra mắt. Những khả năng này chỉ áp dụng cho các khoản tiền gửi mới, ngăn chặn nhóm can thiệp vào các khoản tiền gửi hiện có hoặc các khoản tiền được giữ trong thời gian dài. 

1.	[Cập nhật mức phí người ký](https://github.com/keep-network/tbtc/blob/19aa270197d84d64ef3a64bdcb09544abf6787b3/solidity/contracts/system/TBTCSystem.sol#L160). Khóa đặc quyền có thể sửa đổi phí người ký phí tính phí cho các khoản tiền gửi trong tương lai. Việc sửa đổi chỉ tác động đến tiền gửi mới được mở sau một thời gian trì hoãn. Mức phí tối đa có thể được đặt là 10% và tối thiểu 5bps (0,05%), ngăn khả năng này không bị ngừng khẩn cấp vô ý. 

2.	[Hỗ trợ thêm kích thước lô](https://github.com/keep-network/tbtc/blob/19aa270197d84d64ef3a64bdcb09544abf6787b3/solidity/contracts/system/TBTCSystem.sol#L160). Khóa đặc quyền có thể sửa đổi và thêm kích thước cho tiền gửi mới. Sửa đổi này chỉ tác động đến tiền gửi mới được mở sau một thời gian trì hoãn. Các kích thước lô có sẵn phải luôn bao gồm ít nhất kích thước lô 1 BTC và kích thước lô có thể lớn hơn 10 BTC hoặc dưới 0,0005 BTC (50.000 sats), ngăn chặn ngừng khẩn cấp vô ý. 

3.	[Sửa đổi ngưỡng thế chấp](https://github.com/keep-network/tbtc/blob/19aa270197d84d64ef3a64bdcb09544abf6787b3/solidity/contracts/system/TBTCSystem.sol#L195). Khóa đặc quyền có thể điều chỉnh ba ngưỡng ký quỹ được thiết lập bởi hệ thống. Việc sửa đổi này chỉ tác động đến các khoản tiền gửi mới được mở sau một thời gian trì hoãn, ngăn chặn yêu cầu thanh lý tiền gửi hiện có. Ngưỡng thấp nhất là 100% và cao nhất là 300%, ngăn cuộc yêu cầu ngừng khẩn cấp vô ý. 

4.	[Thêm một nguồn cấp giá dự phòng](https://github.com/keep-network/tbtc/blob/master/solidity/contracts/system/TBTCSystem.sol#L404). Khóa đặc quyền có thể nối các địa chỉ hợp đồng nguồn cấp giá mới vào danh sách các nguồn được yêu cầu. Vì các nguồn cấp được truy vấn theo thứ tự chúng đã được thêm và nguồn cấp đầu tiên báo cáo không lỗi được sử dụng, đặc quyền này chỉ có thể được sử dụng để ảnh hưởng đến giá được báo cáo nếu nguồn cấp giá hiện tại không thành công và ngừng báo cáo. Việc sửa đổi này không thể vô hiệu hóa nguồn cấp giá chính mà không có sự thông đồng của nhà điều hành nguồn cấp giá và chỉ có hiệu lực sau thời gian trì hoãn. 

5.	[Tạm dừng tiền gửi mới](https://github.com/keep-network/tbtc/blob/19aa270197d84d64ef3a64bdcb09544abf6787b3/solidity/contracts/system/TBTCSystem.sol#L129). Khóa đặc quyền có thể tạm dừng tiền gửi mới trong 10 ngày, một lần mà không bị trì hoãn thời gian. Sau khi khả năng này được dùng, nó không thể được sử dụng lại. Cách tiếp cận này được ưu tiên sử dụng ngừng khẩn cấp hoặc cơ chế kiểm soát khác, giúp các nhà phát triển có cơ hội thông báo cho người dùng trong trường hợp khai thác 0 ngày, cho phép người dùng rút tiền gửi của họ khỏi chốt trong trường hợp thất bại thảm hại. Như với tất cả các khả năng chính đặc quyền khác, điều này không ảnh hưởng đến tiền gửi mở, có thể tiếp tục được đổi hoặc sử dụng như bình thường. 

Mặc dù quản trị của tBTC đã được thiết kế để hạn chế và chông lại các nhà phát triển cố ý phá hoại hoặc khóa bị đánh cắp, như với bất kỳ dự án nào đưa ra tuyên bố chống kiểm duyệt, vai trò liên tục của nhóm phát triển và tất cả các mã đều bị người dùng và bên ngoài xem xét kỹ lưỡng. 

## Tấn công bổ sung

Cuộc tấn công mạnh nhất được biết đến chống lại cơ chế sidechain tBTC đòi hỏi phải có sự thông đồng của ba vai trò - người duy trì nguồn giá, một số lượng lớn người ký và người gửi tiền mới. 

•	Đầu tiên, người duy trì nguồn cấp thao túng giá được báo cáo sao cho ETH, ví dụ, được định giá cao hơn 100% so với BTC. Thao tác này cần được duy trì theo thời gian. 

•	Người gửi tiền mới hiện có thể thấy rằng bất kỳ BTC nào họ gửi bây giờ sẽ chỉ truy đòi được 75% trong trường hợp gian lận và nên tránh hệ thống. Những người gửi tiền thông đồng, tuy nhiên, tiếp tục gửi BTC. 

•	Những người ký trung thực sẽ tiếp tục lưu ký BTC, bất kể tài sản thế chấp truy đòi. Tuy nhiên, nếu có một số lượng lớn người ký cố ý phá hoại trong bộ ký, thì đây là cơ hội để thông đồng và bỏ trốn với BTC trong các khoản tiền gửi có tài sản thế chấp thấp. Những người ký này sẽ bị thanh lý, mất 75% 1 BTC cho mỗi BTC mà họ ăn cắp, cũng như bị đẩy ra khỏi mạng lưới ký trong tương lai.

•	Đối với mỗi 1 BTC bị xóa khỏi hệ thống, 75% của 1 BTC trong ETH sẽ được bán đấu giá hoặc vẫn còn để bán đấu giá; bất kỳ khoản tiền gửi nào mà cuộc đấu giá chưa được thực hiện đều phá vỡ chốt cung ứng cho đến thời điểm giá trị TBTC có giá trị như cam kết đấu giá. 

Việc tấn công này là khó khăn, đòi hỏi vốn và phối hợp đáng kể. Sự giảm nhẹ mạnh nhất là [đèn hiệu ngẫu nhiên Keep](https://blog.keep.network/whats-in-a-beacon-12c34b0bc078), yêu cầu một phần lớn những người ký cố tình phá hoại trên khắp nhóm ứng cử viên, hoặc may mắn bất thường của kẻ tấn công.

## Các mô hình bảo mật thay thế (BTCB, RenBTC)

Có nhiều mô hình thay thế cho Bitcoin được chốt, mỗi mô hình có mức độ bảo mật khác nhau. Các ngân hàng Bitcoin tập trung như Binance [BTCB](https://www.binance.com/en/blog/347360878904684544/Introducing-BitcoinPegged-Token-on-Binance-Chain) cung cấp một giải pháp đơn giản - họ xử lý việc chốt BTC, nhưng bạn phải tin tưởng họ làm việc đó. Các liên đoàn được phép của các công ty như Liquid và [Wrapped Bitcoin](https://www.wbtc.network/) là cùng một mô hình với các bên liên quan khác nhau. 

Ngược lại, các liên đoàn mở phù hợp hơn với bản chất phi tập trung của Bitcoin; một số dự án đã chọn sự đánh đổi an ninh khác nhau.

Ren là một ví dụ về liên đoàn mở, triển khai BTC được chốt đồng thuận tùy chỉnh. Mô hình Ren Ren tương tự Keep – kiểm tra sự phù hợp trên Ren đóng góp toekn công việc gốc, REN, để tham gia vào giao thức. Tuy nhiên, Ren chỉ yêu cầu các trình xác nhận đóng góp một lượng REN cố định để lưu giữ bitcoin, không truy đòi cho người gửi tiền trong trường hợp gian lận. Ngược lại, tBTC yêu cầu người ký phải thế chấp cao quá mức mọi lúc, trong cả ETH và KEEP. Ren cũng sử dụng ít liên kết hơn, bảo vệ bộ xác nhận hợp lệ của họ, với ngưỡng 2/3 để bảo mật. tBTC bắt buộc một nhóm người ký riêng cho mỗi khoản tiền gửi, với tất cả những người ký được yêu cầu ủy quyền giao dịch. Một điểm khác biệt lớn nữa là việc sử dụng bằng chứng SPV của tBTC, yêu cầu tBTC tuân theo “chuỗi nặng nhất” trên Bitcoin, và ngăn người ký kiểm duyệt tiền gửi của người dùng hoặc chọn phân chia. Liên đoàn Ren không cung cấp những đảm bảo này. Cuối cùng, mô hình bảo mật Ren, liên quan đến sự đồng thuận mới và các giao thức MPC, cho thấy diện tích bề mặt tấn công lớn hơn nhiều.

## Kết luận

Có rất nhiều chốt bitcoin, và nhiều hơn nữa được giới thiệu mỗi ngày. tBTC nổi bật là tương thích rộng rãi với Ethereum, tối thiểu hóa niềm tin và an toàn. 

Những cải tiến trong tương lai của tBTC bao gồm [thay thế nguồn cấp giá đáng tin cậy](https://github.com/keep-network/tbtc/issues/254) và [giảm yêu cầu tài sản thế chấp ETH.](https://github.com/keep-network/tbtc/issues?q=is%3Aissue+is%3Aopen+collateral)

tBTC được tạo bởi [Keep](https://keep.network/), [Summa](https://summa.one/) và [Cross Chain Group](https://crosschain.group/) và được mở hoàn toàn trên [GitHub](https://github.com/keep-network/tbtc).

[Tham gia danh sách email](https://tbtc.network/#mailing-list) để được cập nhật.

Nguồn bổ sung:

•	Keep’s [GitHub](https://github.com/keep-network)

•	The tBTC [Technical spec](http://docs.keep.network/tbtc/index.pdf)

•	[tbtc.js](https://tbtc.network/news/2020-02-14-announcing-tbtc-js)

•	The [Keep #tbtc channel on Discord](https://chat.tbtc.network)