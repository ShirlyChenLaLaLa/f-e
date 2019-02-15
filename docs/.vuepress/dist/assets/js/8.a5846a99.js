(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{172:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h3",{attrs:{id:"事件的一些小知识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件的一些小知识","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件的一些小知识")]),t._v(" "),s("h4",{attrs:{id:"dom事件流包括三个阶段。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom事件流包括三个阶段。","aria-hidden":"true"}},[t._v("#")]),t._v(" DOM事件流包括三个阶段。")]),t._v(" "),s("ol",[s("li",[t._v("事件捕获阶段")]),t._v(" "),s("li",[t._v("处于目标阶段")]),t._v(" "),s("li",[t._v("事件冒泡阶段")])]),t._v(" "),s("h4",{attrs:{id:"事件冒泡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件冒泡","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件冒泡")]),t._v(" "),s("p",[t._v("事件冒泡即事件开始时，由最具体的元素接收（也就是事件发生所在的节点），然后逐级传播到较为不具体的节点。\n举个栗子，就很容易明白了。\nbutton  ->  body  -> document -> window")]),t._v(" "),s("h4",{attrs:{id:"事件捕获"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件捕获","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件捕获")]),t._v(" "),s("p",[t._v("事件捕获的概念，与事件冒泡正好相反。它认为当某个事件发生时，父元素应该更早接收到事件，具体元素则最后接收到事件。\nwindow  ->  document  -> body -> button")]),t._v(" "),s("h4",{attrs:{id:"事件委托"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件委托","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件委托")]),t._v(" "),s("p",[t._v("事件委托就是利用冒泡的原理，把事件加到父元素或祖先元素上，触发执行效果。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" btn6 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"btn6"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  event "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" target "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("srcElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" btn6"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("btn5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("优点：")]),t._v(" "),s("ol",[s("li",[t._v("提高JavaScript性能。事件委托可以显著的提高事件的处理速度，减少内存的占用。")]),t._v(" "),s("li",[t._v("可以实现当新增子对象时无需再次对其绑定事件，对于动态内容部分尤为合适")])]),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("ol",[s("li",[t._v("事件代理的应用常用应该仅限于上述需求下，如果把所有事件都用代理就可能会出现事件误判，即本不应用触发事件的被绑上了事件。")])])])}],!1,null,null,null);e.options.__file="events.md";a.default=e.exports}}]);