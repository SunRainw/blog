(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{581:function(t,v,_){t.exports=_.p+"assets/img/js-async-001-01.88d25970.png"},647:function(t,v,_){"use strict";_.r(v);var s=_(14),e=Object(s.a)({},(function(){var t=this,v=t.$createElement,s=t._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"为什么-js-是单线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么-js-是单线程"}},[t._v("#")]),t._v(" 为什么 JS 是单线程")]),t._v(" "),s("p",[t._v("最早 JS 语言是一种运行在浏览器端的脚本语言，它的目的是实现页面上的动态交互（核心是 DON 操作），这也就决定了它必须使用单线程模型，否则就会出现复杂的线程同步问题。")]),t._v(" "),s("p",[t._v("试想在 JavaScript 中同时有多个线程一起工作，其中有一个线程修改了某一个 DOM 元素，而另一个线程此时又删除了这个元素，此时浏览器就无法明确以哪个线程的工作结果为准，所以为了这种线程同步问题，JS 就被设计未单线程模式。")]),t._v(" "),s("p",[t._v("单线程最大的优点就是简单、安全，缺点就是后续任务都要排队等待任务的结束（如果遇到一个耗时任务，就会被拖延，出现假死的情况）。")]),t._v(" "),s("p",[t._v("为了解决耗时任务阻塞的问题，JS 将执行模式分为"),s("code",[t._v("同步模式(Synchronous)")]),t._v("和"),s("code",[t._v("异步模式(Asynchronous)")])]),t._v(" "),s("h2",{attrs:{id:"同步模式和异步模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同步模式和异步模式"}},[t._v("#")]),t._v(" 同步模式和异步模式")]),t._v(" "),s("h3",{attrs:{id:"同步模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同步模式"}},[t._v("#")]),t._v(" 同步模式")]),t._v(" "),s("p",[t._v("同步模式就是依次执行，前一个任务结束后再开始下一个任务；在单线程下，大部分任务都是同步模式(排队执行)。")]),t._v(" "),s("p",[t._v("我们执行函数就会将其压入调用栈中，调用完毕，就将其弹出调用栈；函数的声明不会产生调用，也就不会压入栈中。")]),t._v(" "),s("p",[t._v("这个调用栈可以认为是一个 JS 工作过程中的工作表，当调用栈中的所有认为都清空了，工作就结束了。")]),t._v(" "),s("p",[t._v("同步模式非常简单，但是耗时较大的同步任务，就会阻塞后续任务，这样在页面就可能形成卡顿，所以我们需要引入异步模式。")]),t._v(" "),s("h3",{attrs:{id:"异步模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异步模式"}},[t._v("#")]),t._v(" 异步模式")]),t._v(" "),s("p",[t._v("不同于同步模式，异步模式的 API 不会去等待这个任务的结束才开始下一个任务，开启过后就立即往后执行下一个任务，后续逻辑一般会通过回调函数的方式定义")]),t._v(" "),s("p",[t._v("setTimeout 是一个异步任务，遇到 setTimeout，会在"),s("strong",[t._v("WebAPIS")]),t._v("中添加一个倒计时器，这个倒计时是单独工作的，不会对 JS 执行产生影响，setTimeout 会入栈，开启定时器就出栈了。")]),t._v(" "),s("p",[t._v("假设"),s("strong",[t._v("WebAPIs")]),t._v("中有两个 timer 倒计时器，等倒计时结束了，就会进入消息队列(Queue)中，先进先出，当执行栈中的任务执行完毕，就会开启事件循环，将消息队列中的第一个压入执行栈。")]),t._v(" "),s("p",[t._v("直到消息队列和调用栈中都没有执行的任务时，执行就结束了。")]),t._v(" "),s("p",[s("img",{attrs:{src:_(581),alt:"异步模式图"}})]),t._v(" "),s("p",[t._v("当然 JS 是单线程，但是浏览器不是单线程，例如 setTimeout 函数的倒计时器，就是另一个线程在执行。")]),t._v(" "),s("h2",{attrs:{id:"回调函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回调函数"}},[t._v("#")]),t._v(" 回调函数")]),t._v(" "),s("p",[t._v("所有异步方案的根本都是回调函数")]),t._v(" "),s("p",[t._v("由于你不知道任务什么时候结束，因此可以把这件事情传给一个任务的执行者，让执行者去帮你执行，确定什么时候完成。")]),t._v(" "),s("p",[t._v("例如我要给一个桌子刷漆我又没有油漆，但是我很忙，就将刷漆的步骤写下来，交给另一个人，让他买完油漆后，根据步骤进行刷漆。在这个过程中，"),s("code",[t._v("我")]),t._v("就是"),s("code",[t._v("调用者")]),t._v("，"),s("code",[t._v("另一个人")]),t._v("就是"),s("code",[t._v("执行者")]),t._v("。")]),t._v(" "),s("p",[t._v("由调用者定义，交给执行者去执行就是回调函数。")]),t._v(" "),s("h2",{attrs:{id:"promise"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#promise"}},[t._v("#")]),t._v(" Promise")])])}),[],!1,null,null,null);v.default=e.exports}}]);