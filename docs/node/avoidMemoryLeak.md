
### node如何避免内存泄漏
---
#### 1.不要阻塞Event Loop的执行，特别是大循环或者IO同步操作

``` javascript
for ( var i = 0; i < 10000000; i++ ) {
    var user = {};
    user.name = 'shirly';
    user.pass = '123456';
}
```
上面的很长的循环会导致内存泄漏，因为它是一个同步执行的代码，将在进程中执行，V8在循环结束的时候，是没办法回收循环产生的内存的，这会导致内存一直增长。还有可能原因是，这个很长的执行，阻塞了node进入下一个Event loop, 导致队列中堆积了太多等待处理已经准备好的回调，进一步加剧内存的占用。

用setInterval和setTimeout可以进入下一个循环。但是不推荐用setInterval和setTimeout。

在Node下有一个特殊的方法，process.nextTick();

``` javascript
for ( var i = 0; i < 100000000; i++ ) {
    process.nextTick(function () {
        var user = {};
        user.name = 'shirly';
        user.pass = '123456';
   });
}
```
不过这样的效率可能不够好。因为每次都没有效利用好一次循环。
(未完待续)