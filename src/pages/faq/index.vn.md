---
template: 'faq-page'
path: /faq
title: FAQ
questions:
  - question: Làm thế nào để tBTC duy trì tỷ lệ giá?
    answer: >
      tBTC không duy trì tỷ lệ về giá. Nó sẽ duy trì tỉ lệ về tổng cung chứ không phải là tỷ lệ về giá, vì vậy không có thuật toán nào cần thiết để tBTC hoạt động như một chốt phi tập trung.
  - question: Tại sao giá của tBTC không giống BTC ?
    answer: >
      tBTC không duy trì tỉ lệ giá theo BTC,nó sẽ duy trì theo tổng cung. Điều đó có nghĩa là BTC / tBTC có thể không hoàn toàn giống nhau. tBTC có thể giao dịch với mức phí thấp hay mã giảm giá.
  - question: Tại sao tBTC được thế chấp bằng ETH theo tỷ lệ hiện tại?
    answer: >
      Bởi vì đơn vị này tạo thành một hệ thống an toàn hơn, điều này rất quan trọng trong DeFi, đặc biệt là khi ra mắt một hệ thống mạng mới. ETH là loại tài sản thế chấp an toàn hơn vì thuộc tiêu chuẩn DeFi và nhóm tBTC có kế hoạch thay đổi tỷ lệ thế chấp ETH / BTC từ 150% xuống 135% hiệu quả ngay sau khi ra mắt. Nhóm này cũng đang thử nghiệm các cơ chế mới để có thể đưa tỷ lệ thế chấp xuống tới 40% trong tương lai.
  - question: Có trường hợp xảy ra lỗi trong hệ thống tBTC không?
    answer: >
      Đây là công nghệ mới và không thể lường trước được mọi tình huống có sự cố xảy ra. Tuy nhiên, có một số trường hợp cộng đồng đã xác định và thực hiện các biện pháp cẩn trọng để giải quyết. Mô hình bảo mật như sau nếu bên ký âm mưu và rút tài khoản Bitcoin của bạn, người dùng sẽ được trả lại tài sản đó bằng tBTC; đó là những gì trái phiếu ETH (chúng sẽ bị tịch thu và thanh toán). Nếu ETH giảm mạnh trong một khoảng thời gian ngắn và TẤT CẢ các bên ký thoát ra và phá vỡ chốt cùng một lúc, hệ thống sẽ trở về trạng thái của một hệ thống tổng hợp. Để biết thêm thông tin, xin vui lòng tham khảo <a href="https://docs.keep.network/tbtc/index.pdf" target="_blank">thông số kỹ thuật tBTC</a>.

  - question: Tại sao lại có các loại kích thước lô cố định? Tại sao không có bất kỳ mệnh giá ngẫu nhiên nào?
    answer: >
      Quá nhiều kích thước lô sẽ trở thành một vấn đề cho hệ thống thanh khoản (liquidity pools). Việc duy trì một số kích thước lô tiêu chuẩn cho phép khả năng đổi lại lớn hơn.
  - question: Có tiện ích tBTC nào tôi có thể sử dụng để trực tiếp tạo và đổi lại tBTC vào ứng dụng DeFi?
    answer: >
      Hiện tại chưa có tiện ích đó. Nhưng thực hiện tích hợp là cần thiết để xây dựng quá trình tạo và đổi lại <a href="https://github.com/keep-network/tbtc.js" target="_blank">tBTC</a> vào cùng một ứng dụng phi tập trung (dApp). Đây là mã nguồn mở tbtc.js GitHub, cho phép các nhà phát triển xây dựng giao diện phù hợp với sản phẩm của mình. Để xác thực các giao dịch Bitcoin, cách tiếp cận tốt nhất là chạy một server electrum, phương pháp này rất dễ dàng để quay vòng thực hiện.

  - question: tBTC đã được kiểm toán chưa?
    answer: >
      ConsenSys Diligence hiện đang hoàn thành kiểm toán mã hóa và dữ liệu trong sáu tuần. Kết quả sẽ được công bố khi khả dụng.
  - question: Việc đăng ký dùng tBTC và đặt cược ETH có giúp bạn trở thành MSB không?
    answer: >
      Mỗi người dùng nên thực hiện phân tích riêng xem liệu có bất kỳ hạn chế pháp lý nào trong phạm vi quyền hạn của mình, ngăn cản sử dụng tBTC hoặc yêu cầu người dùng đăng ký với một số cơ quan chính phủ nhất định hay không.
  - question: Việc gửi BTC để lấy tBTC có phải chịu thuế không?
    answer: >
      Vui lòng kiểm tra với chuyên gia thuế để xác định xem việc gửi BTC để lấy tBTC có phải chịu thuế trong phạm vi quyền hạn nhất định hay không. Một điều cần lưu ý là NFT liên quan đến UTXO trong khoản gửi. NFT này được thiết kế để thu một khoản phí lưu giữ BTC và để cung cấp khả năng đổi lại chính xác UTXO cùng loại trong vòng sáu tháng chịu phí.

  - question: Người ký tBTC tự kiểm soát tài sản như thế nào?
    answer: >
      Tập hợp người ký tBTC sử dụng ngưỡng ECDSA như một sự thay thế cho đa chữ ký Bitcoin. Đối với mỗi khoản gửi, một tập hợp người ký mới được hợp lại với nhau (được chọn theo định vị ngẫu nhiên) và tạo ra một địa chỉ Bitcoin PKH cho người gửi, và địa chỉ này được đánh dấu trên chuỗi Ethereum.
  - question: Ai là người ký ? Liệu có phải bất cứ ai cũng có thể trở thành một người ký không?
    answer: >
      Ngay sau khi được giới thiệu, sẽ có khoảng 80 người đã mua KEEP trong vòng private sale  và một số bên đáng tin cậy khác đăng ký tBTC. Và cơ hội để trở thành người ký sẽ sớm được trao cho nhiều cá nhân tham gia hơn bằng cách thực hiện đặt cược ETH.
  - question: Tại sao tBTC này hiệu quả hơn BTC khác trong các dự án Ethereum?
    answer: >
      Một số người tin rằng tBTC hiệu quả hơn vì nhiều lý do. Một số dự án đã xây dựng các chốt giá tổng hợp, nhưng như vậy sẽ không tạo ra cầu nối thực sự. Cũng có một số dự án khác về chốt cung cấp, nhưng các bên tập trung lại đang tạo ra các vấn đề vướng mắc trong quy trình tạo và trao đổi ,do đó không tạo ra hệ thống chống kiểm duyệt. Một số cầu nối mới là chốt cung cấp phi tập trung, tuy nhiên, những mô hình bảo mật đó kém an toàn hơn. Chúng chỉ dựa vào ⅔ giả định trung thực, không có ETH / tài sản thế chấp bổ sung để sao lưu khoản gửi và sử dụng đơn vị tiền điện tử hoàn toàn mới có nguyên tắc “đừng cuộn mật mã của riêng bạn” thay vì mã hóa t-ECDSA được đánh giá ngang hàng).
  - question: Thời hạn sáu tháng có nghĩa là gì? BTC chỉ có thể rút sau sáu tháng đúng không?
    answer: >
      Không, không cần phải quay lại sau sáu tháng, ngoại trừ nếu muốn đổi lại Bitcoin bằng một UTXO nhất định. Đây là lý do tại sao sử dụng biên nhận NFT, TDT. Hầu hết người dùng DeFi bán lẻ không có sự cân nhắc vấn đề này và không cần quay lại sau sáu tháng.
  - question: Có kế hoạch xây dựng Bitcoin trên các chuỗi khác không?
    answer: >
      Chưa có kế hoạch chắc chắn xây dựng Bitcoin trên các chuỗi khác. Tuy nhiên, Tập đoàn <a href="https://www.crosschain.group/" target="_blank">Cross-Chain Group</a> đã có những cuộc đàm phán trước đó với các chuỗi như Cosmos, Zcash và Polkadot về các thiết kế cầu nối không tin cậy.
  - question: Quyền sở hữu tBTC có đem đến cho bạn bất kỳ quyền quản trị nào không?
    answer: >
      Không.
  - question: Tại sao không duy trì tỉ lệ giá theo BTC?
    answer: >
      Đội ngũ xây dựng tBTC đang xây dựng một tỷ lệ theo tổng cung cấp, chứ không phải là một tỷ lệ về giá. Vì đây không phải là một cơ chế tổng hợp theo giá. Đối với những người nắm giữ bitcoin, không cần biết giá thực tế là bao nhiêu, điều quan trọng là bạn có thể đổi nó lấy 1 BTC
  - question: Tại sao tBTC cần một hệ quản trị về giá?
    answer: >
      tBTC là một chuỗi cạnh (sidechain) đòi hỏi các bên ẩn danh thực hiện công việc, vì vậy liên kết từ các bên đó phải được thiết lập để ngăn chặn các âm mưu. Hiện tại, cần phải đảm bảo rằng người ký được liên kết để bảo vệ chống lại hành vi sai trái. Do đó, một hệ quản trị giá là yếu tố cần thiết để duy trì giá BTC / ETH cho liên kết này.

---