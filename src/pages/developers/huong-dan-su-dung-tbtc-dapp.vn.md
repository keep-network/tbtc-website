---
template: resource
title: 'Cách sử dụng tBTC dApp'
heading: Cách sử dụng tBTC dApp
description: là hướng dẫn từng bước cách sử dụng dBTC dApp
date: 2020-04-01T16:04:10.000Z
path: developers/huong-dan-su-dung-tbtc-dapp
tags:
  - tbtc
---
Sau đây là hướng dẫn từng bước cách sử dụng dBTC dApp.

Để bắt đầu, bạn cần:

•	Hãy chắc chắn rằng bạn đã cài đặt [Metamask](https://metamask.io/).

•	Lấy một số ETH từ [Coinbase](http://coinbase.com) hoặc một nguồn khác (để trả phí giao dịch) nếu bạn chưa có bất kỳ nguồn nào.

•	Đảm bảo bạn có một số ETH trong ví Metamask.

Khi ETH có trong ví của bạn, hãy truy cập [Ropsten tBTC dApp.]((https://dapp.test.tbtc.network))

Tiếp theo có 5 bước

1.	Tạo khoản tiền gửi

![image.png](https://cdn.steemitimages.com/DQmeEFprmUDdEwbj1Gt24jdwqRCRH7A1XMrT5crB64W7FmW/image.png)

2.	Tạo địa chỉ ví BTC (hiện tại yêu cầu 2 xác nhận Metamask):


![image.png](https://cdn.steemitimages.com/DQmeu4Fa43HksGt6tVJr7Av2NrVFkLtf24qGcKpnqSTw53q/image.png)


3.	Gửi BTC của bạn từ bất kỳ ví nào đến địa chỉ đó bằng mã QR được cung cấp. Bạn cũng có thể tự sao chép / dán địa chỉ:


![image.png](https://cdn.steemitimages.com/DQmQ1p5tT87TUg6n4KRrxLBjcfGpPwVW7ZmKSdamvKMcH4A/image.png)


4.	Chờ xác nhận tiền gửi trên chuỗi Bitcoin. Việc này sẽ trải qua 6 xác nhận hoặc mất khoảng một giờ:


![image.png](https://cdn.steemitimages.com/DQmS4u2ghHNLakMU856wNZwrkMjfgpVcvBxsQuvBeDgFTro/image.png)


5.	Khi khoản tiền gửi được xác nhận, bạn sẽ có thể tạo bằng chứng SPV, đây là bằng chứng tiền điện tử cho khoản tiền gửi của bạn từ chuỗi BTC. Cung cấp bằng chứng này để nhận TBTC của bạn. Bước cuối cùng gồm hai phần:

a. Cung cấp bằng chứng và gửi đi (quá trình này cần một xác nhận của Metamask)

b. Khi đủ điều kiện, hãy tạo TBTC từ Máy bán hàng tự động (quá trình này cần hai xác nhận của Metamask: một xác nhận để chấp nhận việc chuyển giao Máy bán hàng tự động TDT và một xác nhận để thực hiện việc tạo tiền thực tế).


![image.png](https://cdn.steemitimages.com/DQmRuoNYCfM4MaVRUD4a5gXstNFtyNDf5vecEqFrhMi8HPM/image.png)
 
--------------

Khi đã có TBTC, bạn có thể tự do sử dụng để hành động trên chuỗi Ethereum. Bạn cũng nhận được một TDT, có thể được sử dụng để hoàn trả tiền gửi lấy BTC (xem mục tiếp theo). Bạn có thể đọc thêm về TDT trong [tổng quan hệ thống kỹ thuật](https://tbtc.network/developers/tbtc-tong-quan-he-thong-ky-thuat/).

## Cách đổi TBTC lấy BTC


Ở đầu kia của luồng tBTC là sự hoàn trả, tại đây bạn thực hiện trao đổi TBTC và nhận lại BTC.

Đầu tiên, truy cập dapp như bạn sẽ làm trong luồng đầu tiên. Nhấp vào "hoàn trả".

Đối với các bước tiếp theo, bạn cần các thông tin sau:

1.	ID TDT mà bạn nhận được khi tạo TBTC ở trên. Bạn có thể nghĩ về điều này giống như tấm vé trong phòng kiểm tra áo khoác - bạn cần nó để lấy lại chiếc áo khoác. Bạn chỉ nhận được nó ở cuối luồng tiền gửi ở trên.

2.	Địa chỉ BTC mà bạn muốn gửi BTC.

Khi bạn có thông tin này, bạn có thể bắt đầu quá trình hoàn trả.

1.	Bắt đầu luồng hoàn trả bằng cách nhập thông tin này:


![image.png](https://cdn.steemitimages.com/DQmdqBPcZMfTvhKtdT7qoth1A6ctPcpe2aNJnM7KwyrdjaJ/image.png)

 
2.	Luồng hoàn trả sẽ yêu cầu bạn thực hiện bốn xác nhận Metamask:

a. Xác nhận đầu tiên chấp thuận việc chuyển TBTC từ bạn để lấy TDT từ máy bán hàng tự động.

b. Xác nhận thứ hai yêu cầu TDT từ máy bán hàng tự động, gửi TBTC để đốt trao đổi.

c. Xác nhận thứ ba yêu cầu rút BTC khỏi khoản tiền gửi được đại diện bởi TDT. Sau bước này, giao dịch rút tiền được công bố lên mạng Bitcoin và bạn phải đợi cho đến khi quan sát được số lượng xác nhận phù hợp.


![image.png](https://cdn.steemitimages.com/DQmQ5vMuiEhGKccQJ17DjuXzoTVoYRdedhdsauLoKMYWqKi/image.png)


d. Xác nhận Metamask cuối cùng nộp bằng chứng SPV rằng sự hoàn trả đã hoàn tất, cho phép ngưng hoạt động theo thứ tự của nhóm người ký:

-----------

Bây giờ bạn đã thực hiện hoàn TBTC để lấy BTC!


![image.png](https://cdn.steemitimages.com/DQmPwh6JTBpvveWjfpT1DiQPUvVRhgLbAk2GCLD3AaP75ks/image.png)

[Tham gia danh sách email](https://tbtc.network/#mailing-list) để được cập nhật.

Nguồn bổ sung:

•	Keep’s [GitHub](https://github.com/keep-network)

•	The tBTC [Technical spec](http://docs.keep.network/tbtc/index.pdf)

•	[tbtc.js](https://tbtc.network/news/2020-02-14-announcing-tbtc-js)

•	The [Keep #tbtc channel on Discord](https://chat.tbtc.network)
