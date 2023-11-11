---
lang: zh-CN
title: payable 修饰符
description: 使用 payable 函数修饰符接受以太坊
---
# payable 修饰符

`payable`方法是让`Solidity`和以太坊变得如此酷的一部分 -- 它们是一种可以接受以太的特殊函数。

先放一下。当你在调用一个普通网站服务器上的API函数时候，你无法用你的函数传送美元 -- 你也不能传送比特币。

但是在以太坊中，因为钱（_以太_），数据（事务负载），以及合约代码本身都存在于以太坊。你可以在同时调用函数并付钱给另外一个合约。

这就允许出现很多有趣的逻辑，比如向一个合约要求支付一定的钱来运行一个函数。

## 来看个例子

```solidity
contract OnlineStore {
  function buySomething() external payable {
    // 检查以确定0.001以太发送出去来运行函数
    require(msg.value == 0.001 ether);
    // 如果为真，一些用来向函数调用者发送数字内容的逻辑
    transferThing(msg.sender);
  }
}
```

在这里，`msg.value`是一种可以查看向合约发送了多少以太的方法，另外`ether`是一个内建单元。

这里发生的事是，一些人会从`web3.js`调用这个函数（从`DApp`的前端），像这样：

```javascript
// 假设 `OnlineStore` 在以太坊上指向你的合约：
OnlineStore.buySomething().send(from: web3.eth.defaultAccount, value: web3.utils.toWei(0.001))
```

注意这个`value`字段，`JavaScript`调用来指定发送多少（`0.001`）以太。如果把事务想象成一个信封，你发送到函数的参数就是信的内容。添加一个`value`很像在信封里面放钱 -- 信件内容和钱同时发送给了接收者。

> 注意：如果一个函数没标记为`payable`，而你尝试利用上面的方法发送以太，函数将拒绝你的事务。