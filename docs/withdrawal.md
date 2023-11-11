# 提现

在上一章，我们学习了如何向合约发送以太，那么在发送之后会发生什么呢？

在你发送以太之后，它将被存储进合约的以太坊账户中，并冻结在那里 -- 除非你添加一个函数来从合约中把以太提现。

你可以写一个函数来从合约中提现以太，类似这样：

```solidity
contract GetPaid is Ownable {
	function withdraw() wxternal onlyOwner {
		owner.transfer(this.balance);
	}
}
```

注意，我们使用 Ownable 合约中的 owner 和 onlyOwner，假定它已经被引入了。

你可以通过 transfer 函数向一个地址发送以太，然后 this.balance 将返回当前合约存储了多少以太。所以如果 100 个用户每人向我们支付1以太，this.balance 将是100以太。

你可以通过transfer向任何以太坊地址付钱。比如，你可以有一个函数在msg.sender超额付款的时候给他们退钱：

```solidity
uint itemFee = 0.001 ether;
msg.sender.transfer(msg.value - itemFee);
```

或者在一个有买家和卖家的合约中，你可以把卖家的地址存储起来，当有人买了它的东西的时候，把买家支付的钱发送给它 seller.transfer(msg.value)。

有很多例子来展示什么让以太坊编程如此之酷 -- 你可以拥有一个不被任何人控制的去中心化市场。