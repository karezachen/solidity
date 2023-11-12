# 可支付

**payable** 是划时代的 🥳

在它出现前，函数只能将代表货币的数字作为参数传入;

在它出现后，函数可以将货币直接作为参数传入。

在以太坊中，因为货币（以太币）、数据（事务负载）、以及智能合约代码本身都存在于以太坊，

所以可以在调用函数的同时付钱给智能合约。

这就允许出现很多有趣的逻辑，

比如一个智能合约要求必须支付指定数量的以太才能运行函数。

<!-- ```solidity
function runMain() external payable {
  // 检查调用方是否支付0.001以太
  require(msg.value == 0.001 ether);
  // 如果已支付，则运行主要逻辑
  runMain2();
}
```

在这里，`msg.value`是一种可以查看向合约发送了多少以太的方法，另外`ether`是一个内建单元。

这里发生的事是，一些人会从`web3.js`调用这个函数（从`DApp`的前端），像这样：

```javascript
// 假设 `OnlineStore` 在以太坊上指向你的合约：
OnlineStore.buySomething().send(from: web3.eth.defaultAccount, value: web3.utils.toWei(0.001))
```

注意这个`value`字段，`JavaScript`调用来指定发送多少（`0.001`）以太。如果把事务想象成一个信封，你发送到函数的参数就是信的内容。添加一个`value`很像在信封里面放钱 -- 信件内容和钱同时发送给了接收者。

> 注意：如果一个函数没标记为`payable`，而你尝试利用上面的方法发送以太，函数将拒绝你的事务。 -->