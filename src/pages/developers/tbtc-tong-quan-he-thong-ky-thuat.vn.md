---
template: resource
path: developers/tbtc-tong-quan-he-thong-ky-thuat
title: Tổng quan hệ thống kỹ thuật tBTC 
heading: Tổng quan hệ thống kỹ thuật tBTC 
description: >-
  Phần này giải thích bốn trong số đó: biên lai TDT, nhiều cỡ lô, đèn hiệu ngẫu nhiên Keep và chữ ký ngưỡng.
date: 2020-04-01T15:04:10.000Z
tags:
  - developers
---

tBTC kết hợp các tính năng thiết kế mới lạ mang ý nghĩa quan trọng đối với người dùng. Phần này giải thích bốn trong số đó: biên lai TDT, nhiều cỡ lô, đèn hiệu ngẫu nhiên Keep và chữ ký ngưỡng.

## Token tiền gửi TBTC (TDT)

Token tiền gửi TBTC (TDT) là token không thể thay thế, được tạo ra khi người dùng yêu cầu tiền gửi. TDT là token ERC -721 không thể thay thế, đóng vai trò là đối tác của TBTC. Token này đại diện cho khiếu nại đối với khoản tiền gửi trên chuỗi khối Bitcoin.

Tiền gửi TBTC có thể bị khóa hoặc mở khóa. Một khoản tiền gửi bị khóa chỉ có thể được hoàn trả bởi chủ sở hữu tiền gửi với TDT tương ứng. Mỗi TDT là duy nhất đối với khoản tiền gửi tạo ra nó và có quyền độc quyền trong thời hạn tối đa 6 tháng để được hoàn trả khoản tiền gửi.

Khi một khoản tiền gửi đủ điều kiện thông qua bằng chứng giao dịch Bitcoin (được gọi là SPV Relay), chủ sở hữu có thể yêu cầu hoàn trả và sau khi thanh toán bất kỳ khoản phí đã ký nổi bật nào, được đảm bảo cùng UTXO đã cấp khoản tiền gửi trên mạng Bitcoin.

TDT và TBTC có thể hoán đổi cho nhau thông qua hợp đồng gọi là máy bán hàng tự động, quản lý việc trao đổi TDT lấy TBTC và ngược lại.
•	Đưa một TDT, nó sẽ tạo TBTC.
•	Đưa TBTC, nó sẽ đốt và hoàn lại TDT.
TDT được yêu cầu hoàn trả một khoản tiền gửi BTC bị khóa. Hãy nghĩ về nó giống như tấm vé từ phòng kiểm tra áo nghiêm ngặt: không có nó, bạn không thể lấy lại BTC của mình.
TDT có thể chuyển nhượng được. Ví dụ, chủ sở hữu có thể chọn giao dịch hoặc sử dụng chúng làm tài sản thế chấp ở nơi khác.

Trong trường hợp có vấn đề về gian lận hoặc tài sản thế chấp, chủ sở hữu TDT được bảo đảm bồi thường bằng TBTC thông qua tài sản thế chấp cam kết của nhóm ký. Nếu khoản tiền gửi được hoàn trả bởi một tài khoản khác sau khi đã hết hạn, thì chủ sở hữu TDT được đảm bảo bồi thường bằng TBTC (phí người ký ít hơn). Lưu ý rằng chủ sở hữu TDT vẫn có thể hoàn trả tiền gửi của họ lấy BTC ngay cả khi thời hạn 6 tháng đã hết, nếu không có người dùng nào khác hoàn trả.

Vì việc đánh cắp khoản tiền gửi 1 BTC có nhiều giá trị hơn so với khoản tiền gửi 0,001 BTC, nên trước đây có thể dễ bị tấn công hơn, giống như tổ chức lại. Là một NFT, TDT cho phép rủi ro này được định giá, điều này rất phù hợp với các ứng dụng sử dụng BTC làm tài sản thế chấp. Bất kỳ người nhận TDT nào cũng cần phải tự đánh giá hồ sơ rủi ro của một token đưa ra. Các TDT được thiết kế để mang lại lợi ích ròng bằng cách cô lập rủi ro, vì các cuộc tấn công chống lại khoản tiền gửi ủng hộ TDT chỉ nên tác động đến chủ sở hữu TDT, chứ không phải toàn bộ tiền tệ được cung cấp cố định.

## Lô và cỡ lô

Tiền gửi trên tBTC được quản lý theo lô. Để làm cho hệ thống hợp lý và có thể quản lý được, các lô là một trong các tập hợp kích thước cố định, được quản lý bởi hệ thống. Nếu người gửi tiền muốn gửi một lượng BTC lớn hơn mức được hỗ trợ bởi các kích cỡ lô hiện có, họ có thể tạo nhiều yêu cầu gửi tiền và cấp tiền cho nhiều khoản tiền gửi. Điều này cho phép mỗi khoản tiền gửi được hỗ trợ bởi một nhóm ký khác nhau, điều này vừa đơn giản hóa cam kết của các nhóm ký và bảo vệ hệ thống rộng hơn khỏi thất bại của nhóm ký bị cô lập, cố tình làm hại hoặc theo cách khác. 

Thiết kế này có ý nghĩa quan trọng mà người dùng nên làm quen.

Mỗi khoản tiền gửi phải phù hợp với một trong các kích thước lô tiêu chuẩn

Hệ thống xử lý tất cả các trường hợp thanh toán vượt mức và thanh toán dưới mức - trong đó người dùng gửi một số tiền lớn hơn hoặc nhỏ hơn kích thước tiền gửi tiêu chuẩn - là lỗi do hành vi của người dùng. Tác động chính của việc trả quá mức hoặc trả thiếu cho hệ thống là làm sai lệch tài sản thế chấp của người ký. Hệ thống được thiết kế để chuyển các chi phí này cho người dùng.

Trong trường hợp thanh toán dưới mức - trong đó người dùng gửi một số tiền ít hơn kích thước lô BTC đã chọn - hệ thống sẽ không tạo ra bằng chứng có thể được hoàn trả TBTC. Người dùng bị mất BTC bị khóa trong khoản tiền gửi, có thể được chia cho những người ký.

Người dùng nên nhận thức sâu sắc về điều này. Ví dụ, trong trường hợp kích thước lô có sẵn duy nhất là 1 BTC, có thể dễ dàng để tưởng tượng người dùng đang cố yêu cầu 1 TBTC bằng cách thực hiện hai lần gửi 0,5 BTC mỗi lần. Một người dùng làm như vậy sẽ mất tất cả BTC của họ, vì hệ thống sẽ chỉ nhận biết hai trường hợp thanh toán dưới mức khác nhau. Nói tóm lại, kích thước lô của một khoản tiền gửi được cố định khi tiền gửi được tạo ra và tiền gửi phải được cấp vốn với số tiền đó.
Trong trường hợp thanh toán vượt mức - khi người dùng gửi nhiều hơn kích thước lô BTC đã chọn - hệ thống sẽ tạo bằng chứng, nhưng chỉ với kích thước lô tiêu chuẩn, có thể hoàn trả để đổi lấy số tiền đó trong TBTC. Trong một thị trường hiệu quả, chúng tôi hy vọng số tiền này sẽ được hoàn trả ngay lập tức, vì người mua hy vọng sẽ lấy số tiền vượt quá bị khóa trong tiền gửi làm khoản chênh lệch. Trừ khi tiền gửi được hoàn trả bởi người gửi tiền ban đầu, khoản thanh toán vượt mức sẽ bị mất.

Trong ví dụ về kích thước lô 1 BTC, người dùng gửi 1,4 BTC sẽ nhận được bằng chứng cho phép họ tạo chính xác 1 TBTC (số tiền tương ứng với kích thước lô).Hiện tại có một khoản tiền gửi vượt mức kích thước trong hệ thống, mà người ta mong đợi sẽ được hoàn lại nhanh chóng có cơ hội đổi 1 TBTC lấy 1,4 BTC. Người dùng đã gửi thêm BTC sẽ giống như tất cả người dùng khác, có thể đổi 1 TBTC của họ lấy 1 BTC, nhưng mất thêm 0,4 BTC (trừ khi người dùng nhận ra lỗi của họ và nhanh chóng đổi lại TBTC của họ cho khoản tiền gửi 1,4 BTC ban đầu ).

Hệ thống sẽ chỉ chấp nhận UTXO đầu tiên lớn hơn cỡ lô tiền gửi. Tất cả các BTC khác được gửi đến nhóm ký đều bị mất. Do đó, người gửi tiền chỉ gửi một UTXO duy nhất. Việc chấp nhận nhiều UTXO từ người gửi tiền sẽ áp đặt đáng kể mức độ phức tạp trên chuỗi và phí giao dịch lớn, vì mỗi UTXO sẽ cần phải được chứng minh qua SPV và chữ ký được ủy quyền rõ ràng. Người ký sẽ phải được khuyến khích ký mỗi giao dịch mặc dù thực tế là không biết tổng giá trị của UTXO.

## Đèn hiệu ngẫu nhiên chọn người ký.

Mạng Keep yêu cầu một nguồn ngẫu nhiên đáng tin cậy để chọn người ký tBTC. Nó có dạng Relay ngưỡng BLS.

Khi có yêu cầu tạo nhóm ký, hệ thống tBTC sử dụng nguồn gốc ngẫu nhiên từ đèn hiệu ngẫu nhiên phi tập trung an toàn để chọn ngẫu nhiên các thành viên nhóm ký từ nhóm người ký đủ điều kiện. Những người ký này phối hợp một giao thức tạo khóa phân tán dẫn đến khóa ECDSA công khai cho nhóm, được sử dụng để tạo địa chỉ ví, sau đó được xuất bản cho chuỗi của chủ sở hữu. Vậy là hoàn thành giai đoạn lựa chọn người ký.

## Chữ ký ngưỡng

tBTC sử dụng chữ ký ngưỡng để tạo khóa. Chữ ký ngưỡng cho phép một nhóm người ký tạo một khóa công khai duy nhất từ một bộ "chia sẻ" khóa riêng. Phương pháp này cho phép một tập hợp con của người ký để tạo chữ ký thay mặt cho nhóm lớn hơn. Người dùng có thể xác minh các nhóm người ký thông qua một khóa chung tương ứng với nhiều khóa riêng. Nhờ đó có thể cung cấp bảo mật mà không cần yêu cầu công việc của các thiết kế đa chữ ký tiêu chuẩn.

Chữ ký ngưỡng cung cấp một số lợi ích sau:

•	Sự phối hợp tương đối ít là cần thiết để thiết lập một nhóm
•	Không một thành viên nào trong nhóm phải được tin cậy
•	Họ có khả năng khôi phục tới một nửa số nhóm làm hại hoặc không tạo được
Đối với tBTC v1, các nhóm ký là 3 trên 3, nghĩa là họ là nhóm 3 người ký yêu cầu cả 3 người ký hợp tác để tạo chữ ký thay mặt cho nhóm.


[Tham gia danh sách email](https://tbtc.network/#mailing-list) để được cập nhật.

Nguồn bổ sung:

•	Keep’s [GitHub](https://github.com/keep-network)

•	The tBTC [Technical spec](http://docs.keep.network/tbtc/index.pdf)

•	[tbtc.js](https://tbtc.network/news/2020-02-14-announcing-tbtc-js)

•	The [Keep #tbtc channel on Discord](https://chat.tbtc.network)
