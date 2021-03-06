### 函数节流
---
*函数防抖就是别人给了你一嘴巴子，还没来得及揉，又给了一嘴巴子。函数节流就是你时不时就捂着脸，别人难以下手。*
#### 函数节流的原理： 
函数节流，简单地讲，将多次执行变成每隔一段时间执行。

解决方式很容易想到，就是使用定时器，当我触发一个事件时，先setTimout让这个事件延迟一会再执行，如果在这个时间间隔内又触发了事件，那我们就clear掉原来的定时器，再setTimeout一个新的定时器延迟一会执行，就酱。
#### 函数节流的实现代码：
1. JavaScript高级程序设计中的实现方式：
```javascript
function throttle(method, context) {
    clearTimeout(methor.tId);
    method.tId = setTimeout(function(){
        method.call(context);
    }， 100);
}
```
调用的时候直接写成
```javascript
window.onresize = function(){
    throttle(myFunc);
}
```
这样函数间的调用至少节约100ms
2. inpress的实现方式
```javascript
var throttle = function(fn, delay){
 	var timer = null;
 	return function(){
 		var context = this, args = arguments;
 		clearTimeout(timer);
 		timer = setTimeout(function(){
 			fn.apply(context, args);
 		}, delay);
 	};
 };
```
它使用闭包的方法形成一个私有的作用域来存放定时器变量timer。
调用方法为
```
window.onresize = throttle(myFunc, 100);
```
而上面介绍的函数节流，它这个频率就不是50ms之类的，它就是无穷大，只要你能不间断resize，刷个几年它也一次都不执行处理函数。

3. 函数节流升级版

 我们可以将以上的函数进行改造，增加第三个参数，即必然触发执行的时间间隔。
```javascript
var throttleV2 = function(fn, delay, mustRunDelay){
 	var timer = null;
 	var t_start;
 	return function(){
 		var context = this, args = arguments, t_curr = +new Date();
 		clearTimeout(timer);
 		if(!t_start){
 			t_start = t_curr;
 		}
 		if(t_curr - t_start >= mustRunDelay){
 			fn.apply(context, args);
 			t_start = t_curr;
 		}
 		else {
 			timer = setTimeout(function(){
 				fn.apply(context, args);
 			}, delay);
 		}
 	};
 };
```
调用方式为
```javascript
window.onresize = throttleV2(myFunc, 50, 100);
```
则意味着，50ms的间隔内连续触发的调用，后一个调用会把前一个调用的等待处理掉，但每隔100ms至少执行一次。

原理也很简单，打时间tag，一开始记录第一次调用的时间戳，然后每次调用函数都去拿最新的时间跟记录时间比，超出给定的时间就执行一次，更新记录时间。

#### 函数节流的应用场景
对于函数节流，有如下几个场景：

- 游戏中的刷新率
- DOM元素拖拽
- Canvas画笔功能

总的来说，适合大量事件按时间做平均分配触发。