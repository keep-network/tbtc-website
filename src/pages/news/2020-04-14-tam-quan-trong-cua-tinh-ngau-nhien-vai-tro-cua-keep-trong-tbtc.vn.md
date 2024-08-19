---
template: news-item
title: Tầm quan trọng của tính ngẫu nhiên - vai trò của Keep trong tBTC
description: Tầm quan trọng của tính ngẫu nhiên - vai trò của Keep trong tBTC
date: 2020-04-23T15:19:06.656Z
---
Cách Keep đóng góp cho ứng dụng đầu tiên cho phép mọi người kiếm tiền bằng Bitcoin của họ trên Ethereum

!(https://cdn.steemitimages.com/DQmTV2TBjQTKjwPh82aXvcC9fRKh7zXg5yv1geKCcNobN8f/2.jpeg)

Keep là một trong ba dự án đóng góp cho tBTC, sẽ ra mắt vào ngày 27 tháng 4 và cho phép người nắm giữ Bitcoin sử dụng các ứng dụng tài chính phi tập trung Ethereum lần đầu tiên. Keep, Summa và Cross-Chain Group đều chịu trách nhiệm cho ít nhất một trong các yếu tố kỹ thuật của dự án nguồn mở, cho phép người dùng kiếm tiền an toàn trên Ethereum bằng Bitcoin của họ. Keep đóng góp cụ thể là đèn hiệu ngẫu nhiên chọn người ký cho tiền gửi tBTC, đó là token ERC-20. tBTC cần một hệ thống có token để chống lại Sybil. Bản thân người ký cũng được chọn trong số nhóm ứng cử viên trên mạng Keep.

### Keep bảo đảm riêng tư

Keep được thiết kế như một giải pháp riêng tư. Cụ thể, Keep cho phép sự riêng tư xung quanh các thành phần mạng thiết yếu. Các nhóm ký không thể hoạt động, trừ khi họ ký từ một khóa mà không ai biết; điều này cũng đúng với đèn hiệu ngẫu nhiên. Cốt lõi của giải pháp Keep là khả năng giữ một lượng nhỏ dữ liệu (như khóa riêng) thực sự riêng tư để thực hiện mọi việc với dữ liệu đó. Đây là lý do tại sao tính ngẫu nhiên thực sự rất quan trọng trong Keep. Tất cả các bên sẽ phải thông đồng để biết người dùng đang làm gì và thông đồng trở nên gần như không thể khi lựa chọn người ký là thực sự ngẫu nhiên.

### Ngưỡng ECDSA giúp bảo vệ người dùng Bitcoin 

Sự khác biệt giữa on-chain và off-chain rất quan trọng ở đây. tBTC là hoàn toàn on-chain. Nhưng Keep lưu trữ thông tin cá nhân, chẳng hạn như các khóa, trong off-chain sử dụng ngưỡng ECDSA - được kiểm tra và sử dụng bởi các ví điện tử và trao đổi hàng đầu bao gồm Binance. Những “Bảo vệ” này, được đặt tên theo phần an toàn nhất của lâu đài, giao tiếp qua chuỗi Ethereum nhưng tồn tại ngoài nó. Hợp đồng thông minh tBTC tương tác với các hợp đồng thông minh trên mạng Keep, liên lạc với keeps off-chain.

Các khái niệm Keep sử dụng không mới. Điều mới lạ và đặc biệt, về cách Keep hành động trong tBTC là sự tập hợp cụ thể của các khái niệm. Các ý tưởng được đặt cùng với các hợp đồng thông minh theo một cách xác định và an toàn. Thiết kế được bắt nguồn từ một đặc tính ưu tiên cho người giữ token có mức độ tự chủ tối đa. Người nắm giữ và người điều hành có thể quyết định nơi họ muốn đặt rủi ro và cách quản lý nó, thay vì mạng quyết định cho họ. Tất cả điều này được thực hiện trong một môi trường không tin cậy.

### Đèn hiệu ngẫu nhiên chọn người ký 

Một cách quan trọng tBTC đảm bảo sự tin cậy là bằng cách giải quyết rủi ro đối tác. Nó sử dụng một hệ thống “nhóm người ký“ cho phép tBTC xử lý các giao dịch mà không cần một người trung gian đáng tin cậy. Do đó, việc lựa chọn người ký là rất cần thiết để tBTC hoạt động đúng. Ý tưởng là không ai biết người ký sẽ là ai - kể cả chính người ký cho đến thời điểm họ được chọn bởi đèn hiệu ngẫu nhiên. Điều này là để đảm bảo rằng những người ký không thể thông đồng để đánh cắp tiền hoặc tấn công mạng, và tại sao tính ngẫu nhiên thực sự được cung cấp bởi đèn hiệu rất quan trọng. 

Chúng ta có thể so sánh đèn hiệu ngẫu nhiên Keep với các chứng minh không đáng tin cậy khác như zk-SNARKs. Hai khái niệm có thể được coi là cung cấp các cách tiếp cận khác nhau cho cùng một vấn đề. Với zkSNARK, người dùng thấy bằng chứng cho thấy một hành động đã được hoàn thành chính xác mà không có thông tin chi tiết về giao dịch hoặc đối tác tiết lộ. Thực chất, zk-SNARKs nói, “Tôi đã làm điều này. Đây là bằng chứng cho thấy tôi đã làm điều này một cách chính xác”. 
Đèn hiệu ngẫu nhiên Keep tiếp cận hiệu quả từ hướng ngược lại, sử dụng tính ngẫu nhiên để đảm bảo rằng một nhiệm vụ sẽ được hoàn thành một cách không tin cậy. Vì vậy, Keep nói, “Hãy làm điều này thay mặt tôi với thông tin, để không ai có thể biết thông tin đó là gì”. 
Chống mạo nhận
Một yếu tố quan trọng của bảo mật là chống mạo nhận. Trong một cuộc tấn công mạo nhận, một người dùng tạo nhiều tài khoản tạo thành một khối quan trọng có thể kiểm soát mạng. Để tBTC có khả năng chống mạo nhận hiệu quả, ý nghĩa tiêu cực của các cuộc tấn công này phải vượt trội so với sự tích cực. Rất tốn kém để kiểm soát thành công một nhóm ký nhất định và tấn công hệ thống.

Là ứng dụng đầu tiên được xây dựng trên Keep, phép lặp đầu tiên của tBTC được thiết kế với giả định rằng Keep không hoàn hảo trong việc cung cấp khả năng chống mạo nhận, vì người dùng khi ra mắt sẽ ít hơn khi mạng phát triển, khiến tài nguyên cần thiết cho một cuộc tấn công thành công ít hơn. Khi Keep phát triển, các phiên bản tương lai của tBTC sẽ có thể tận dụng khả năng chống mạo nhận được cải thiện để giảm chi phí vận hành và sử dụng tBTC.

### Keep giúp kích hoạt sự tin cậy trong tBTC

Nhóm Keep đã suy nghĩ kỹ về cách cung cấp sự ngẫu nhiên thực sự và không tin tưởng. Đèn hiệu ngẫu nhiên được thiết kế như một công cụ có thể dùng cho nhiều ứng dụng giải quyết nhiều trường hợp sử dụng khác nhau. Trong tBTC, nó cung cấp thành phần chính đảm bảo người dùng BTC an toàn khi gửi tiền - rằng họ có thể tin tưởng vào hệ thống mà không phải tin tưởng người trung gian, vì không có người trung gian. Chúng tôi tin vào quyền riêng tư và tài chính là quyền con người và trong tBTC, chúng tôi đã chứng minh chúng có thể củng cố lẫn nhau.

[Tham gia danh sách email](https://tbtc.network/#mailing-list) để được cập nhật.

Nguồn bổ sung:

•	Keep’s [GitHub](https://github.com/keep-network)

•	The tBTC [Technical spec](http://docs.keep.network/tbtc/index.pdf)

•	[tbtc.js](https://tbtc.network/news/2020-02-14-announcing-tbtc-js)

•	The [Keep #tbtc channel on Discord](https://chat.tbtc.network)