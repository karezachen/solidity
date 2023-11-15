# 提现

在本节一个非常重要的概念 —— 提现

当我们部署的智能合约接受到调用方支付的以太之后，

非常关键的一件事情，我们该如何将以太提现到自己的账户呢？

废话少说，直接上代码：

```solidity
function withdraw() external {
	// 判断调用方是否合约为所有者
	require(msg.sender == owner);
	// 将余额转给合约所有者
	owner.transfer(this.balance);
}
```

我们可以使用transfer向任何以太坊地址付钱，

所以我们也可以在调用方超额付款的时候给他们退钱，

让我们强化下[可提现](payable.md)中的代码：

```solidity
function doSomething() external payable {
  // 检查调用方是否支付0.001以太
  require(msg.value >= 0.001 ether);
  // 将超额付款退回
  msg.sender.transfer(msg.value - 0.001 ether);
  // 如果已支付，则运行函数逻辑
  do();
}
```