(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{471:function(s,t,a){"use strict";a.r(t);var r=a(1),e=Object(r.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("p",[s._v("一切重复工作本应自动化")])]),s._v(" "),t("ul",[t("li",[s._v("自动化就是指通过机器代替手工完成一些工作")]),s._v(" "),t("li",[s._v("构建就是转换")]),s._v(" "),t("li",[s._v("自动化构建就是将开放的源代码自动化转换为生产代码")])]),s._v(" "),t("h2",{attrs:{id:"自动化构建工作流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动化构建工作流"}},[s._v("#")]),s._v(" 自动化构建工作流")]),s._v(" "),t("p",[s._v("作用：脱离运行环境兼容带来的问题，在开发阶段使用提高效率的语法、规范和标准")]),s._v(" "),t("p",[s._v("典型的应用场景，在开发web应用时：")]),s._v(" "),t("ul",[t("li",[s._v("使用ECMAScript Next")]),s._v(" "),t("li",[s._v("利用Sass增强css")]),s._v(" "),t("li",[s._v("使用模板引擎")])]),s._v(" "),t("p",[s._v("这些用法大都不被浏览器支持，就可以通过自动化构建的工具，将这些不被支持的「特性」，转化成浏览器能识别的代码")]),s._v(" "),t("h2",{attrs:{id:"自动化构建初体验"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动化构建初体验"}},[s._v("#")]),s._v(" 自动化构建初体验")]),s._v(" "),t("p",[s._v("例如使用scss增强css可编程性，这就需要在构建阶段，通过工具将scss构建为css")]),s._v(" "),t("p",[s._v("此处需要使用scss官方提供的一个scss模块："),t("code",[s._v("yarn add scss --dev")])]),s._v(" "),t("p",[s._v("之后就可以使用scss去构建scss文件，但是这样就会重复的去使用这些命令")]),s._v(" "),t("h3",{attrs:{id:"npm-scripts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-scripts"}},[s._v("#")]),s._v(" NPM Scripts")]),s._v(" "),t("blockquote",[t("p",[s._v("NPM Scripts是使用自动化构建最简单的方式")])]),s._v(" "),t("ol",[t("li",[s._v("使用npm scripts去包装使用的命令，具体来说就是在package.json中添加一个scripts字段，键名就是使用的命令名字，内容就是目标命令内容")])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sass scss/main.scss css/style.css"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[s._v("再为项目安装一个"),t("code",[s._v("browser-sync")]),s._v("的模块，用于启动一个服务器去运行我们的项目")])]),s._v(" "),t("li",[t("p",[s._v("在scripts下添加一个serve的命令，内容为browser-sync")])]),s._v(" "),t("li",[t("p",[s._v("如果项目运行之前没有一个样式内容，那么可以在serve命令之前，添加一个preserve，它会在serve之前自动执行")])]),s._v(" "),t("li",[t("p",[s._v("为scss文件在build之前添加一个--watch的变量，就可以监听文件的变化，当文件中的scss文件发生改变，就会自动重新build。但是命令行会阻塞在watch的地方去等待文件的变化。就可以借助于"),t("code",[s._v("npm-run-all")]),s._v("这个模块")])]),s._v(" "),t("li",[t("p",[s._v("安装"),t("code",[s._v("npm-run-all")]),s._v('，在scripts中添加start命令，内容为"run-p build serve"用于同时执行build和serve命令')])]),s._v(" "),t("li",[t("p",[s._v("给browser-sync下添加一个--files命令，用于监听监听项目下文件的变化，一旦文件变化过后，browser-sync会将变化的内容自动同步到浏览器，避免手动刷新浏览器")])])]),s._v(" "),t("p",[s._v("配置如下：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scss scss/main.scss css/style.css --watch"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"serve"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"browser-sync . --files \\"css/*.css\\""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"start"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"run-p build serve"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"常用的自动化构建工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用的自动化构建工具"}},[s._v("#")]),s._v(" 常用的自动化构建工具")]),s._v(" "),t("ul",[t("li",[s._v("Grunt: 插件生态非常完善，基于临实文件实现，构建速度相对较慢，Grunt每一步都有磁盘读写操作，处理的环节越多，文件读写的次数就越多。")]),s._v(" "),t("li",[s._v("Gulp: 很好的解决了Grunt中构建速度慢的问题，因为它是基于内存构建的，相对于磁盘读写速度就快了很多，支持同时处理多个任务，使用方便，插件生态也非常完善，是目前市面上最流行的构建系统。")]),s._v(" "),t("li",[s._v("FIS: 是百度的前端团队开发的一款构建系统，相对于前两者(微内存)的构建系统，FIS更像是一种捆绑套餐，将项目中的典型的需求集成在内部，可以轻松处理资源加载、模块化开发和代码部署，甚至性能优化，因为这种大而全在国内很多项目就很流行。")])]),s._v(" "),t("p",[s._v("总结：如果是初学者FIS更适合，但是如果要求灵活多变，Grunt和Gulp是更好的选择。")])])}),[],!1,null,null,null);t.default=e.exports}}]);