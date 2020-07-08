---
template: news-item
title: Cập nhật về ra mắt tBTC
description: Cập nhật về ra mắt tBTC
date: 2020-05-22T18:19:06.656Z
---
Vào thứ Sáu, ngày 15 tháng 5, phiên bản alpha của tBTC — phiên bản dùng thử zero (rc.0) — đã ra mắt. Vào sáng ngày 18 tháng 5, việc[ tạm dừng khẩn cấp tiền gửi 10 ngày](https://etherscan.io/tx/0xc5c08e982cfdd9d11b01c32bcb16b1597aa792c0bdf0f65d0a21386dd1edc846#eventlog) được cho phép bởi hợp đồng [TBTCSystem](http://etherscan.io/address/0x41A1b40c1280883eA14C6a71e23bb66b83B3fB59) đã được thực hiện. Điều này xảy ra khi việc mua lại hợp đồng tiền gửi được xác định là đặt người ký cam kết vào một số tình huống rủi ro.

Chi tiết đầy đủ [tại đây](https://tbtc.network/news/2020-05-21-details-of-the-tbtc-deposit-pause-on-may-18-2020/).

Mặc dù có những khó khăn thách thức trong việc ra mắt rc.0, các biện pháp phòng ngừa và bảo vệ đã được đưa ra, và tất cả các quỹ vẫn an toàn.

### Tất cả tiền gửi đã được hoàn trả an toàn

Một số ít thành viên cộng đồng đã gửi BTC trong khi dApp vẫn đang trong quá trình thử nghiệm. Việc hoàn tiền cho người gửi và người ký đã được thực hiện ngay lập tức, và cho đến ngày hôm nay, 99,83% nguồn tiền gửi BTC đã được hoàn trả an toàn đến [địa chỉ này](https://etherscan.io/token/0x1bBE271d15Bb64dF0bc6CD28Df9Ff322F2eBD847?a=0xe52e028f0d8f2e7a9d78e48199234b1231774e6a). Việc loại bỏ ETH không sử dụng trong hệ thống đang được thực hiện; các quỹ không có rủi ro.


## **Các bước tiếp theo**

Sắp tới, tBTC sẽ chuyển sang mô hình phiên bản dùng thử.

Các phiên bản dùng thử là các phiên bản phần mềm mà nhóm phát triển tin rằng “đã sẵn sàng”, nhưng không được xem là phiên bản cuối cùng cho đến khi có phản hồi rộng rãi từ người dùng. Các phiên bản dùng thử sẽ ra mắt từ 0, đến 1, đến 2, và tiếp tục cho đến phiên bản cuối cùng.

Phiên bản dùng thử tBTC đầu tiên, rc.0, đã được tìm thấy có lỗ hổng dẫn đến việc tạm dừng gửi tiền mới. Trong các tuần tiếp theo, rc.1, một bộ hợp đồng mới giảm thiểu lỗ hổng cũng như các bản sửa lỗi có mức độ ưu tiên thấp và trung bình khác sẽ được triển khai.

Ban đầu, dApp được xây dựng trên rc.1 sẽ vẫn ở bản alpha. Cuối cùng, dApp sẽ phát hành bản beta và bản beta có thể là bản cuối cùng khi các tính năng được thêm vào.

### Giới hạn cung tăng dần

Tiền trong hệ thống sẽ được sử dụng như một thước đo để xác định sự sẵn sàng của phiên bản thử nghiệm. rc.1 sẽ có một giới hạn nguồn cung TBTC, bắt đầu từ 100 BTC trong tháng đầu tiên. Mỗi tháng, các hợp đồng sẽ nới lỏng các giới hạn cung tiền gửi dựa trên kế hoạch đã cam kết trước.

| Month     | 1   | 2   | 3   | 4    | 5   |
| --------- | --- | --- | --- | ---- | --- |
| Cap (BTC) | 100 | 250 | 750 | 1000 | \-  |

Nếu tại bất kỳ thời điểm nào, một lỗ hổng nghiêm trọng được tìm thấy trong các hợp đồng thông minh, việc tạm dừng gửi tiền khẩn cấp sẽ được kích hoạt và tiền sẽ được trả lại. Các hợp đồng được sửa lại sau đó sẽ được triển khai lại dưới dạng rc.2, đặt lại kế hoạch giới hạn.

Sau 5 tháng, giới hạn cung sẽ được gỡ bỏ — và sau 12 tháng không xảy ra sự cố, nút tạm dừng khẩn cấp sẽ bị vô hiệu hóa.

### Kiểm toán bảo mật mở rộng

tBTC, đã kết thúc kiểm toán bảo mật đầu tiên vào tháng 3, sẽ tiếp tục được thử nghiệm. Các vấn đề và sửa lỗi rc.0 đã được trao đổi với các kiểm toán viên trước đây của dự án, ConsenSys Diligence và kiểm toán viên hiện tại, Trail of Bits, để xác nhận và phản hồi thêm.

Phạm vi của cuộc kiểm toán Trail of Bits đã được lên kế hoạch bắt đầu vào thứ Hai, ngày 18 tháng 5 đã được điều chỉnh để tập trung vào các hợp đồng thông minh trong hệ thống cũng như các máy con với ngôn ngữ lập trình Go trong mạng.
Công việc sẽ được thực hiện cùng với Trail of Bits để mở rộng và tự động hóa nhiều thử nghiệm tích hợp và hệ thống hơn cho tBTC, cũng như thêm thử nghiệm mờ (fuzz) và thuộc tính cho các thành phần khác nhau của hệ thống mà hiện chỉ có các thử nghiệm đơn giản hơn. Cũng sẽ có một tập trung vào việc xác định khu vực bổ sung nào của hệ thống có cần phải xem xét thêm.

Một cuộc kiểm toán bảo thứ ba cũng đang được tổ chức. Ngoài ra, phần thưởng tối đa cho chương trình tìm lỗ hổng bảo mật tBTC đã được tăng thêm 10 lần, khoảng 120.000 đô la Mỹ.

### Ngày 8 tháng 6 Stakedrop

Là một phần trong quá trình triển khai dự án đang diễn ra, [stakesdrop tBTC](https://www.crowdcast.io/e/keep-stakedrop---live/register), bất kỳ ai cũng có thể được nhận thẻ KEEP khi là đóng vai trò là người nộp tiền tốt trên mạng, dự kiến bắt đầu ​​vào ngày 8 tháng 6.
