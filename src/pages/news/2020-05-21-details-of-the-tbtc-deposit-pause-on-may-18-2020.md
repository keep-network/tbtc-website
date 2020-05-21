---
template: news-item
title: 'Details of the tBTC Deposit Pause on May 18, 2020'
description: 'Details of the tBTC Deposit Pause on May 18, 2020'
date: 2020-05-21T17:02:51.487Z
---


On the morning UTC of May 18, 2020,[ the 10-day emergency pause of deposits](https://etherscan.io/tx/0xc5c08e982cfdd9d11b01c32bcb16b1597aa792c0bdf0f65d0a21386dd1edc846#eventlog) allowed by the [TBTCSystem contract](http://etherscan.io/address/0x41A1b40c1280883eA14C6a71e23bb66b83B3fB59) was [triggered](https://etherscan.io/tx/0xc5c08e982cfdd9d11b01c32bcb16b1597aa792c0bdf0f65d0a21386dd1edc846#eventlog). The action was taken after a significant issue in the redemption flow of deposit contracts was found that put signer bonds at risk in certain situations.



Shortly after the pause, a BTC-for-TBTC exchange was initiated that resulted in the recovery of 99.83% of the supply to [this address](https://etherscan.io/token/0x1bBE271d15Bb64dF0bc6CD28Df9Ff322F2eBD847?a=0xe52e028f0d8f2e7a9d78e48199234b1231774e6a). The removal of any remaining unused ETH in the system is currently underway.

# Event Summary

In tBTC, someone with access to BTC, a depositor, can open a tBTC deposit on the Ethereum chain. This deposit is a smart contract that interacts with 3 signers in a separate network, who jointly generate and control aBitcoin wallet, such that no single signer can access the wallet. When opening the deposit, the depositor selects one of several available lot sizes, and, once the deposit has generated the wallet, sends that amount of BTC to its Bitcoin address. The depositor then submits proof to the deposit smart contract that the BTC transfer has taken place, and is able to mint the equivalent amount of TBTC, an Ethereum ERC-20 token. This allows a holder of BTC to enter the tBTC system and then use their TBTC token balance to interact with smart contracts that support it.



To properly prove transactions on Bitcoin to the Ethereum chain, a relay is employed that communicates enough data about Bitcoin blocks to an Ethereum smart contract to confirm that a Bitcoin transaction has accumulated a certain number of confirmations. This is used to ensure that a transaction (a) exists on the Bitcoin chain and (b) is sufficiently confirmed that there is reasonable certainty that a fork of the Bitcoin chain will not be able to remove it.



To ensure that the signers who control the wallet cannot illicitly transfer the BTC they jointly hold in an unauthorized way, they are required to put up a bond equivalent to 150% of the BTC value in ETH. That bond is held by the deposit smart contract until the deposit is redeemed.



Redemption works as follows: when a holder of TBTC on Ethereum is interested in acquiring BTC, they can reverse the original transfer through a process called redemption. Redemption allows an Ethereum user, the redeemer, to pay the lot size plus a small signer fee, specify a Bitcoin address, and authorize the 3 signers to jointly produce a signature that completes a Bitcoin transaction transferring the BTC from the deposit to the specified address. This allows a holder of TBTC to exit the tBTC system back to the Bitcoin chain, and returns the signers’ bonds to their respective pools of available funds to back new deposits. The signers split the signer fee paid by the redeemer.

## Incident Timeline

The incident began on March 15, 2020 at 15:52 UTC with the creation of the tBTC system’s sortition pool. The deployment of the sortition pool itself did not place any funds at risk. However: the sortition pool is used to randomly select signers who have enough bond to back new deposits. Signers must opt in to using the sortition pool by placing ETH into a bonding contract. That contract then requires an additional authorization from the signer to enable use of the funds they placed into the bonding contract for the specific sortition pool used by the tBTC system. Lastly, the signer must register themselves with the sortition pool to populate the data used during deposit opening to select signers.



Over the course of approximately 3 days, multiple signers made bond available and authorized the sortition pool, but only 3 signers registered themselves with the pool to be used during deposit opening. These 3 signers were controlled by a single person who was in contact with teams supporting tBTC.



Deposits were available via an alpha dApp at <https://dapp.tbtc.network/>, limited to a 0.001 BTC deposit size. The ETH bonds made available by the 3 signers that were operational also placed an upper limit on how much TBTC could be minted, since each TBTC deposit required 1.5 times its value in ETH to be bonded. The dApp was taken down briefly on the evening of May 15, 2020 while a potential issue was investigated, but re-enabled early on May 16th once that issue was understood. Additionally, several members of the community set up local versions of the dApp and used them to open deposits with BTC lot sizes larger than 0.001.



On May 18, at 2:29 UTC, the operator of the 3 signers was unable to redeem a deposit. The likely cause was identified as high gas prices on the Ethereum chain causing the relay’s updates on Bitcoin state to be a few blocks behind. The relay began using a higher gas price and caught up by 3:07 UTC.



At 3:13 UTC, the same operator again had difficulty redeeming. At this point an error was observed from the deposit contract, “Tx sends value to wrong pubkeyhash”. This error indicated that the proof the dApp was constructing to show the Ethereum chain that redemption had completed successfully was incorrect; specifically, the proof did not successfully prove the transaction sent the deposit’s BTC holdings to the correct redeemer address.



After an investigation, a determination was made that there was the potential for signer bond danger. Because signer bonds can only be seized after 6 hours without a redemption proof, the investigation was continued.



At 5:02 UTC, the finding was corroborated by key tBTC contributors, at which point the hosted dApp URL was immediately redirected to the tBTC homepage to prevent further new deposits being opened.



At 5:18 UTC, the single-use 10-day emergency pause available in the tBTC system contract was triggered. This function prevents new deposits from being opened for 10 days, but does not affect the functionality of any already-open deposits. For security, the process of triggering any tBTC system updates requires 2 of 3 members of a technical wallet team to manually craft an Ethereum transaction, then use air gapped machines to sign the transaction’s information, and finally submit the transaction and the signatures to the Ethereum chain. This process was completed at 5:45 UTC.



By 14:11 UTC, the remainder of the hosted dApp’s pages had been redirected to the tBTC homepage.

## Technical Issue Description

The issue was rooted in the process that proves a redemption transaction has in gone through on the Bitcoin chain. Under normal circumstances, signers who provide a valid signature for a Bitcoin transaction might have their bonds immediately released, leaving the redeemer in charge of broadcasting that transaction on the Bitcoin chain. If the tBTC system released the signers from their economic obligations at this stage, however, the signers would have the opportunity to produce a different signature, for a transaction sending the funds to an address other than the redeemer’s, and broadcast it before the redeemer has a chance to broadcast their own transaction. As such, the tBTC system only releases signer bonds once the signers have produced a valid signature and proof that the transaction was accepted on the Bitcoin chain.



The proof that a redemption transaction has been sufficiently confirmed on the Bitcoin chain involves certain checks; one of these is verification that the Bitcoin transaction sends the funds the signers jointly control to the requested redemption address. These checks are performed by the redemptionTransactionChecks function:



\`\``sol

function redemptionTransactionChecks(

DepositUtils.Deposit storage _d,

bytes memory _txInputVector,

bytes memory _txOutputVector

) public view returns (uint256) {

require(_txInputVector.validateVin(), "invalid input vector provided");

require(_txOutputVector.validateVout(), "invalid output vector provided");



bytes memory _input = _txInputVector.slice(1, _txInputVector.length-1);

bytes memory _output = _txOutputVector.slice(1, _txOutputVector.length-1);



require(

keccak256(_input.extractOutpoint()) == keccak256(_d.utxoOutpoint),

"Tx spends the wrong UTXO"

);

require(

keccak256(_output.slice(8, 3).concat(_output.extractHash())) == keccak256(abi.encodePacked(_d.redeemerOutputScript)),

"Tx sends value to wrong pubkeyhash"

);

return (uint256(_output.extractValue()));

}

\`\``



The error identified was in the last check, “Tx sends value to wrong pubkeyhash”:



\`\``sol

require(

keccak256(_output.slice(8, 3).concat(_output.extractHash())) == keccak256(abi.encodePacked(_d.redeemerOutputScript)),

"Tx sends value to wrong pubkeyhash"

);

\`\``



Bitcoin has multiple types of output scripts. Standard output types are pay to pubkeyhash (p2pkh), pay to scripthash (p2sh), pay to witness pubkeyhash (p2wpkh), and pay to witness scripthash (p2wsh). The address represents a 20- or 32-byte hash, a checksum, and information about the type of output script. The type information is used to insert the hash into a standard template. This creates the corresponding output script:



|     |     |     |     |     |
| --- | --- | --- | --- | --- |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |
|     |     |     |     |     |



Output scripts vary in length. As a result all output scripts are prefixed with 1 byte that encodes the length of the script in bytes. The value of an output is represented as an 8-byte little-endian integer, serialized immediately before the output script. A standard output is between (8 + 1 + 22 =) 31 and (8 + 1 + 34 =) 43 bytes long.



\`BTCUtils.extractHash()\` extracts the hash from a standard output. It does this by inspecting the output script prefix and suffix to determine the location of the hash. If the output script is non-standard, it returns an empty byte array.



Some patterns are identifiable. Output bytes 0-7 are always the value. All legacy types have postfixes, while all witness types do not. All types except p2pkh will begin the hash on the (8 + 1 + 2 =) 10th byte of the output, which is at index



\`(_output.slice(8, 3).concat(_output.extractHash()))\`



This expression takes bytes 8, 9, and 10, and concatenates the hash. For witness types, byte 8 is the length-prefix, while bytes 9 and 10 are the template prefix, so it is easy to see that concatenating them to the hash will produce the (length-prefixed) output script. However, for p2sh addresses, this expression will not append the template postfix. For p2pkh addresses, it will extract only 2 bytes of the prefix, and will (again) not append the postfix. This means that the expression modifies legacy output scripts, and will never output a valid legacy output script.



\`\``

bytes memory _modifiedLegacyOutputScript = (_output.slice(8, 3).concat(_output.extractHash()));



require(

keccak256(_modifiedLegacyOutputScript) == keccak256(abi.encodePacked(_d.redeemerOutputScript))

);

\`\``



This code is equivalent to the deployed code. After accidentally modifying legacy scripts, it then compares them to unmodified legacy output scripts. Whenever \`_d.redeemerOutputScript\` is a legacy script, this equality will always fail, and the transaction will always be reverted.



Neither the redeemer nor depositor is harmed by this bug—that is, the user’s funds are safe. Because this code validates the redemption proof, it is only run after the redeemer has received BTC.



However, because the system cannot verify that redemption succeeded, the signer bonds become available for seizure as if redemption had failed. In particular, if a redemption transaction has not been proven to have occurred to the deposit contract 6 hours after the signers have provided the signature for that transaction, the redeemer can notify the contract that the redemption proof has timed out.



Notification of redemption proof timeout is treated as a signer abort, in which signers fail to fulfill the system’s requirements, but which the system does not treat as malicious intent. During redemption, this means the system cannot verify that the redeemer received their funds. In this scenario, the system seizes the signer’s bonds, and gives the redeemer the full bond value as compensation. This recourse is taken to prevent a scenario where the signers produce a signature over the requested redemption transaction, but also collude to produce a signature over a different transaction, and then race to confirm their transaction before the correct one is confirmed.



In normal cases, a signer producing a bad transaction can be punished by proving fraud, showing that they signed data that they were not authorized to sign. The effect of this proof is the same, seizing signer bonds and giving the full amount to the redeemer. However, unless the system validates the redemption transaction’s output script, the signers could simply prove their malicious transaction instead. As such, the redemption proof has to check the output script, requiring both validation at redemption request time and an adjustment at redemption proof time.

## How The Code Landed

The initial design of tBTC restricted redemptions to p2wpkh addresses, and enforced this restriction in the redemption process. A [change](https://github.com/keep-network/tbtc/commit/71361a51c220536d82681f1ab77ed640836329ce) was committed that loosened redemption transactions to allow not only p2wpkh output scripts, but also any other output scripts. During redemption, this was intended to allow deposits to accept an arbitrary Bitcoin output script, to give redeemers the flexibility to accept funds in whatever wallet they prefer to use. The code in question is a remnant of the previous validation system. Other artifacts of the p2wpkh verification code (e.g. the no-longer-necessary \`abi.encodePacked\`) are present.



The commit message above notes that ‘The result passes all current tests, though there are no tests for non-p2wpkh output scripts in the repo yet.’ This did not change over the ensuing months, though Bitcoin testnet addresses generated by Green wallet, which arepay-to-scripthash(p2sh) addresses, were tested repeatedly on testnets. But due to a bug in the redemption dApp in use at the time, the proof step of the redemption flow never occurred. These p2sh addresses would have failed validation had the proof step occurred, but reliance on the dApp’s display of a completed state meant the redemption was incorrectly assumed to have completed successfully.

## Additional Observations

The issue explained here was not the only problem with the redemption code. Even if the proof code had been correct, a malicious redeemer could potentially still have specified an output script that yielded an invalid Bitcoin transaction due to the consensus rules regarding OP_VERIF and OP_VERNOTIF. This would force a situation where the transaction would never be included in a Bitcoin block. In such a scenario, being able to confirm the transaction’s output script is irrelevant, and the redeemer would be able to guarantee receipt of the bond (while leaving the BTC with the signers). As such, in addition to the incorrect validation once redemption had occurred, there was missing validation when redemption was requested. Because of this, future versions will support only standard address types.



If a redeemer specified an output script resulting in an invalid Bitcoin transaction, although they would be able to seize the signer bonds, the signers would remain in control of the BTC deposit. Thus, the overall value loss would be less than a valid transaction that can’t be proven to the deposit contract. The overcollateralization of signer bonds nonetheless means that the malicious redeemer would still experience a net gain from this scenario.



The bugged verification code was also present in a dead codepath that has been removed in the bug fix PR.

## Analysis

Several factors contributed to the redemption issue:



* Failure to capture an action item to add further test vectors outside of the original commit message, resulting in failure to identify the issue during development.
* Failure to verify that a successful redemption in the UI resulted in a closed deposit on-chain during manual dApp-based QA, which could have identified the issue during manual QA.
* Incomplete consideration of input validation at the entry point to redemption. As one of relatively few completely user-controlled pieces of data in the system, this should be a high priority for input validation.
* Insufficient time spent generating Bitcoin test vectors for unit tests. In particular, fuzz testing of the redemption flow could have caught both the requested output script validation and the transaction proof issues.

# Next Steps

In addition to the existing actions to redeem outstanding deposits in the running system and ensure the operator who was bonding ETH at the time receives their bonds back, a number of additional actions will be undertaken ahead of a relaunch of the tBTC system.

## Steps Taken To Date

* [A PR with a proposed fix has been opened on GitHub](https://github.com/keep-network/tbtc/pull/636). Test vectors will be adjusted before merging over the coming days.
* The scope of the already-planned Trail of Bits audit, which started on Monday the 18th, has been adjusted from an aggressive focus on the Go clients in the network to instead split time between the Go clients and the smart contracts in the system.
* Both the issue and the fix have been communicated to tBTC’s previous auditors, ConsenSys Diligence, as well as its current auditors, Trail of Bits, for confirmation and further feedback.
* 99.83% of the TBTC supply has been retrieved by offering a 1.005 BTC-to-1 TBTC purchase of outstanding TBTC. The secured TBTC will be used to redeem open deposits and free up bonded ETH.

## Further Actions

* Clarification and improvement of processes for capturing follow-up work in cases where pull requests are merged with future changes still pending.
* Improvement of processes for blocking pull request merges for cases where user-controlled input is used in the system and sufficient testing is not present.
* Importation of the failed redemptions as test vectors into tBTC’s test suite.
* Creation of additional test vectors based on various known address types for our test suite.
* Exploration of the feasibility of finding or building a Bitcoin transaction fuzzing tool.
* Collaboration with Trail of Bits to expand and automate more integration and system tests for tBTC, as well as to add fuzz and property testing to various components of the system that currently rely on simpler unit tests.
* Collaboration with Trail of Bits to identify any additional areas of the system that may merit additional scrutiny.
