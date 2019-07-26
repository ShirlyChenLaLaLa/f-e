# 理解hooks

# react hook的定义

> 它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性

## useState

    import React, { useState } from 'react';
    function Example() {
    	// 声明一个新的叫做 “count” 的state 变量
    	const [count, setCount] = useState(0);
    	return (
    		<div>
    			<p>You clicked {count} times</p>
    			<button onClick={() => setCount(count + 1)}>Click me</button>
    		</div>
    	);
    }

useState就是react提供的一个Hook，它是第一个也是最重要的Reack hook。通过在代码中导入userState，就表明一个要在react组件中使用某些state，更重要的是，react组件并没有使用es6的class，它就是一个纯粹而简单的函数。这就是hooks最吸引人的地方。

useState 会返回俩个值：当前状态和一个让你更新它的函数，我们可以在事件处理函数中调用这个函数。

## useEffect

> useEffect与react class 里面的componentDidMount，componentDidupdate，和componentWillUnmount功能目的相同，但统一为单个API

    import React, { useState, useEffect } from "react";
    export default function DataLoader() {
      const [data, setData] = useState([]);
      useEffect(() => {
        fetch("http://localhost:3001/links/")
          .then(response => response.json())
          .then(data => setData(data));
      }, []);
      return (
        <div>
          <ul>
            {data.map(el => (
              <li key={el.id}>{el.title}</li>
            ))}
          </ul>
        </div>
      );
    }

### useEffect 做了什么？

通过使用这个 Hook，你可以告诉 React 组件需要在渲染后执行某些操作。React 会保存你传递的函数（我们将它称之为 “effect”），并且在执行 DOM 更新之后调用它。

> 与 componentDidMount 或 componentDidUpdate 不同，使用 useEffect 调度的 effect 不会阻塞浏览器更新屏幕，这让你的应用看起来响应更快。

### 添加和移除订阅的逻辑

每个effect都可以返回一个清除函数。如此可以将添加和移除订阅的逻辑放在一起。它们都属于 effect 的一部分。

Hook 允许我们按照代码的用途分离他们。

例如：

    function FriendStatusWithCounter(props) {
      const [count, setCount] = useState(0);
      useEffect(() => {
        document.title = `You clicked ${count} times`;
      });
    
      const [isOnline, setIsOnline] = useState(null);
      useEffect(() => {
        function handleStatusChange(status) {
          setIsOnline(status.isOnline);
        }
    
        ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
        return () => {
          ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
        };
      });
      // ...
    }

### 如何跳过对effect的调用？

如果某些特定值在两次重渲染之间没有发生变化，你可以通知 React 跳过对 effect 的调用，只要传递数组作为 useEffect 的第二个可选参数即可：

    useEffect(() => {
      document.title = `You clicked ${count} times`;
    }, [count]); // 仅在 count 更改时更新

当第二个参数传[]的时候，userEffect就跟componentDidMount和componentWillUnmount的思维模式没啥两样了。

## UseReducer（额外的hook，特殊情况下可能会用到）

useState 的替代方案。它接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法。

    const [state, dispatch] = useReducer(reducer, initialArg, init);

    function Counter({ step }) {
    	const [count, dispatch] = useReducer(reducer, 0);
    	
    	function reducer(state, action) {
    		if (action.type === 'tick') {
    			return state + step;
    		} else {
    			throw new Error();
    		}
    	}
    
    	useEffect(() => {
    		const id = setInterval(() => {
    			dispatch({ type: 'tick'});
    		}, 1000);
    		return () => clearInterval(id);
    	}, [dispatch]);
    	
    	return <h1>{count}</h1>
    }

这种模式会使一些优化失效，所以应该避免滥用它，react保证dispatch在每次渲染中都是一样的。所以可以在依赖中去掉，它不会引起effect不必要的重复执行。

当dispatch的时候，React只是记住了action- 它会在下一次渲染中再次调用reducer。在那个时候，新的props就可以被访问到，而且reducer的调用也不是在effect里面。

**这就是为什么倾向认为useReducer是Hooks的“作弊模式”。它可以把更新逻辑和描述发生了什么分开。结果是，这可以帮助我们移除不必需的依赖，避免不必要的effect调用。**

推荐使用eslint-plugin-react-hooks插件的exhaustice-deps lint规则。

## useCallback （类似shouldComponentUpdate）

它返回一个 memoized 回调函数。

    const memoizedCallback = useCallback(
    	() => {
    		doSomething(a, b);
    	}, [a, b],
    )

把内联回调函数及依赖项数组作为参数传入 useCallback，它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新。当你把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染（例如 shouldComponentUpdate）的子组件时，它将非常有用。

useCallback本质上是添加了一层依赖检查。它以另一种方式解决了问题 - 我们使函数本身只在需要的时候才改变，而不是去掉对函数的依赖。

## useMemo

类似useCallback，useMemo可以让我们对复杂对象做类似的事情。

与useCallback不同的是，它返回一个memoized值。

    function ColorPicker() {
    	const [color, setColor] = useState('pink');
    	const style = useMemo(() => ({ color }), [color]);
    	return <Child style={style} />;
    }


- [useEffect完整指南](https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/#tldr)
- [react hooks官方文档](https://reactjs.org/docs/hooks-reference.html)
- [react hooks学习指南](https://www.valentinog.com/blog/hooks/#React_Hooks_Tutorial_for_Beginners_what_you_will_learn)
