---
template: resource
title: Особенности системы tBTC
heading: Особенности системы tBTC
description: 'Узнайте о TDT, системе лотов, случайных маячках Keep и пороговых подписях.'
date: 2020-05-29T19:00:08.051Z
tags:
  - developers
---
tBTC использует несколько новых конструктивных особенностей, которые имеют важное значение для пользователей. Ниже будут описаны четыре из них: квитанции TDT, система лотов, случайные маячки Keep и пороговые подписи.

## TBTC Deposit Token (TDT)

TBTC Deposit Token (TDT) - это NFT токен, который создается во время запроса пользователя на депозит. TDT - это токен стандарта ERC-721, который является эквивалентом TBTC. Он представляет собой право владения на UTXO депозита в блокчейне Биткоина.

Депозиты TBTC могут быть заблокированными и разблокированными. Заблокированный депозит может быть погашен только владельцем депозита с соответствующим TDT. Каждый TDT уникален для отдельно взятого депозита, который его создает, и несет исключительное право на срок до 6 месяцев выкупить данный депозит.

После того, как депозит полностью подтвержден SPV Relay, владелец TDT может запросить погашение. После уплаты комиссий он распоряжаться UTXO, который соответствует депозиту в Биткоин сети.

TDT и TBTC взаимозаменяемы; с помощью специального смарт-контракта можно обменять TDT на TBTC и обратно:

* Подаешь TDT, он создает TBTC.
* Подаешь TBTC, он сжигает этот токен и возвращает соответствующий TDT.

TDT требуется для погашения заблокированного депозита BTC. Без него вы не можете получить свой BTC обратно.

Токены TDT могут быть переданы кому угодно. Держатели могут выбрать, торговать ими или использовать их в качестве залога в другом месте.

В случае мошенничества или проблем с обеспечением, держателю TDT гарантируется компенсация в TBTC, который в свою очередь обеспечен BTC группой подписантов. Если депозит погашается другим аккаунтом после истечения срока его действия, то владельцу TDT гарантируется компенсация в TBTC (уменьшенная комиссия). Владелец TDT по-прежнему может обменять свой депозит на BTC даже по истечению 6-месячного срока, если нет других пользователей погасивших его.

Поскольку кража депозита в 1 BTC более критична, чем депозита в 0,001 BTC, первый, вероятно, более восприимчив к атакам реорганизации. Токены TDT, являясь NFT, позволяют оценить этот риск, что очень актуально для приложений, использующих BTC в качестве залога. Любой владелец TDT должен будет самостоятельно оценить риски. TDT спроектированы так, чтобы обеспечить выгоду за счет изоляции риска, поскольку атаки на депозит, поддерживающий TDT, должны воздействовать только на владельца этого TDT, а не на всю привязанную к предложению валюту.

## Лоты и размеры лотов

Для депозитов в tBTC используются лоты. Чтобы сделать систему рациональной и управляемой, команда Keep решила использовать лоты фиксированных размеров. Если вкладчик хочет внести большую сумму BTC, чем поддерживается существующими размерами лотов, он должен создать несколько запросов на депозит. Это позволяет различным группам подписантов подписывать каждый отдельно взятый депозит, что одновременно упрощает связывание групп подписантов и изолирует всю систему от изолированных атак на группы подписантов или их недобросовестного поведения.

Этот подход имеет важные последствия, с которыми пользователи должны быть знакомы.

Каждый депозит должен соответствовать одному из стандартных размеров лота

Система обрабатывает все случаи чрезмерной или недостаточной оплаты. Если пользователь вносит сумму, которая либо больше, либо меньше стандартного размера депозита, система расценивает это как ошибочное поведение пользователя. Основное воздействие чрезмерной или недостаточной оплаты на систему заключается в некорректном обеспечении депозитов подписантами. Система спроектирована так, чтобы переложить эти затраты на пользователя.

В случае недостаточной оплаты пользователь вносит сумму меньшую, чем выбранная по размеру лота, система не создаст доказательства, которое можно будет использовать для получения TBTC. Пользователь лишается BTC, заблокированного на депозите, который впоследствии может быть разделен между подписантами.

Пользователи должны четко осознавать это. Например, в ситуации, когда единственный доступный размер лота составляет 1 BTC, легко представить себе пользователя, пытающегося претендовать на 1 TBTC, сделав два депозита по 0,5 BTC каждый. Пользователь, который это сделает, потеряет все свои BTC, так как система просто распознает два различных случая недоплаты. Очень важно понимать, что размер лота депозита фиксируется при создании депозита, и депозит должен быть пополнен именно на эту сумму.

В случае переплаты пользователь вносит сумму большую, чем выбранная по размеру лота, система генерирует доказательство, но только для стандартного размера лота, подлежащего погашению в обмен на эту сумму в TBTC. И если депозит не погашается самим вкладчиком, то переплата удерживается системой.

В примере с размером лота в 1 BTC пользователь, внесший депозит 1,4 BTC, получит доказательство, позволяющее ему получить ровно 1 BTC (сумма, соответствующая размеру лота). Теперь в системе есть чрезмерный депозит, который, очевидно, будет быстро погашен, учитывая, что есть возможность обменять 1 TBTC на 1,4 BTC. Пользователь, сделавший эту переплату, как и все другие, сможет выкупить свой 1 TBTC за 1 BTC, но дополнительные 0,4 BTC будут потеряны (если только пользователь не осознает свою ошибку и быстро не выкупит свой TBTC за первоначальный депозит 1,4 BTC).

Система будет принимать только первый UTXO, превышающий размер лота депозита. Все остальные BTC, отправленные группе подписантов, будут удерживаться. Поэтому крайне важно, чтобы вкладчики отправляли только один UTXO. Принятие нескольких UTXO от вкладчиков повлекло бы за собой некоторые ончейн проблемы и повышенную плату за газ, поскольку каждое UTXO должно было бы быть проверено через SPV, а подпись авторизована. Подписанты должны были бы получить стимул подписывать каждую транзакцию, несмотря на то, что общий объем UTXO неизвестен.

## Случайный маячок для выбора подписантов

Сеть Keep требует надежного источника случайности для выбора подписантов. В этом помогает BLS Threshold Relay.

Когда поступает запрос на создание группы подписантов, система tBTC использует случайный сид из защищенного децентрализованного случайного маячка. Этот сид позволяет выбрать участников группы подписантов. Выбранные подписанты используют протокол генерации ключа, который на выходе дает открытый ключ ECDSA. Полученный ключ используется для генерации адреса кошелька, который затем публикуется в цепочке. Это завершает этап выбора подписантов.

## Пороговые подписи

tBTC использует пороговые подписи для генерации ключей. Пороговые подписи позволяют группе подписантов создавать один открытый ключ из приватного ключа, разделенного на несколько частей. Подобные подписи позволяют подмножеству подписантов создавать подпись от имени всей группы подписантов. Это позволяет достичь необходимого уровня безопасности без использования стандартного мультисига.

Пороговые подписи обладают следующими преимуществами:

* Проще создать группу подписантов
* Можно не доверять ни одному члену группы
* Устойчивость к тому, что почти половина группы является недобросовестной или не в состоянии генерировать ключ

В tBTC v1 используются группы подписантов 3-of-3, это означает, что группа состоит из трех участников и все три необходимы для генерации подписи.

Вы можете найти дополнительную информацию о пороговых подписях [здесь](https://blog.keep.network/threshold-signatures-ff2c2b98d9c7).

Заходите к нам на [GitHub](https://github.com/keep-network/tbtc) для получения дополнительной информации и ознакомления с инструментами и документацией. [Подписывайтесь на почтовую рассылку tBTC](https://tbtc.network/#mailing-list) для получения информации об обновлениях и предстоящем запуске tBTC в основной сети Ethereum. Ознакомьтесь с нашей [технической документацией](http://docs.keep.network/tbtc/index.pdf), чтобы узнать больше о tBTC. Присоединяйтесь к нашему каналу [Keep #tbtc в Discord](https://discord.com/invite/threshold?ref=tbtc.network) для получения дополнительной информации о tBTC и [tbtc.js](https://tbtc.network/news/2020-02-14-announcing-tbtc-js), и подписывайтесь в [Twitter](https://twitter.com/search?q=%22%23tbtc%22&src=typed_query), чтобы узнавать самые свежие новости.
