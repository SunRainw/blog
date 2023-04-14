(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{494:function(a,t,s){"use strict";s.r(t);var n=s(1),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("Parcel(零配置的前端应用打包器)")]),a._v(" "),t("h2",{attrs:{id:"快速上手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[a._v("#")]),a._v(" 快速上手")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("使用"),t("code",[a._v("yarn init")]),a._v("新建一个项目，安装 parcel，parcel 的模块叫做"),t("code",[a._v("parcel-bundler")])])]),a._v(" "),t("li",[t("p",[a._v("安装以后在"),t("code",[a._v("node_modules/bin")]),a._v("目录下就会有 parcel 的 cli")])]),a._v(" "),t("li",[t("p",[a._v("添加一个打包入口文件， Parcel 可以使用任何类型的文件作为入口，但是最好还是使用 HTML 或 JavaScript 文件。在"),t("code",[a._v("index.html")]),a._v("(入口文件)中引入资源，最终都会被 parcel 打包到输出目录中，而且 parcel 也支持 ESM")])]),a._v(" "),t("li",[t("p",[a._v("执行"),t("code",[a._v("yarn parcel src/index.html")]),a._v("，parcel 会打包应用，并且开启开发服务器，还打开了"),t("code",[a._v("Source Map")]),a._v("，同时支持自动刷新")])])]),a._v(" "),t("h2",{attrs:{id:"模块热替换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块热替换"}},[a._v("#")]),a._v(" 模块热替换")]),a._v(" "),t("p",[a._v("parcel 提供两种方法实现 HMR，"),t("code",[a._v("module.hot.accept")]),a._v("和"),t("code",[a._v("module.hot.dispose")])]),a._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("hot"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 需要判断是否存在module.hot")]),a._v("\n  module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("hot"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("dispose")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 模块即将被替换时")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n  module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("hot"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("accept")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 模块或其依赖项之一刚刚更新时")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br")])]),t("p",[a._v("这里的 accept 函数和在 webpack 中不同，")]),a._v(" "),t("ul",[t("li",[a._v("webpack 提供两个参数(模块路径，处理回调函数)，用于处理指定模块更新后的逻辑")]),a._v(" "),t("li",[a._v("parcel 提供的 accept 只有一个参数，用于在当前模块更新或者当前模块所依赖的模块更新后执行操作")])]),a._v(" "),t("h2",{attrs:{id:"自动安装依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动安装依赖"}},[a._v("#")]),a._v(" 自动安装依赖")]),a._v(" "),t("p",[a._v("parcel 还支持自动安装依赖，例如：Parcel 遇到符合 node_module 模式且无法找到它的依赖项时，Parcel 会尝试使用 yarn 或 npm 安装此依赖项。这可以避免开发人员不得不退出 parcel 或打开多个终端窗口来安装依赖。")]),a._v(" "),t("p",[a._v("这只会在"),t("code",[a._v("development")]),a._v("模式下触发(使用 serve 或者 watch)，然而在生产模式是禁止的（使用 build）这样避免在部署的时候产生意想不到的副作用。")]),a._v(" "),t("p",[a._v("可以使用"),t("code",[a._v("--no-autoinstall")]),a._v("来禁止这一特性")]),a._v(" "),t("h2",{attrs:{id:"加载其他类型资源模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加载其他类型资源模块"}},[a._v("#")]),a._v(" 加载其他类型资源模块")]),a._v(" "),t("p",[a._v("parcel 中加载类似 css 文件、图片等，只需要直接 import，不需要配置，parcel 会自动配置并且打包到 dist 中")]),a._v(" "),t("h2",{attrs:{id:"代码拆分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码拆分"}},[a._v("#")]),a._v(" 代码拆分")]),a._v(" "),t("p",[a._v("parcel 也可以使用动态导入来实现代码拆分")]),a._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),t("ul",[t("li",[a._v("parcel 在使用上非常方便，不需要任何配置，所有的一切 parcel 都帮助我们实现了")]),a._v(" "),t("li",[a._v("对于相同体量的项目打包, 他比 webpack 快很多, 因为它内部自动使用的是多进程同时工作, 充分发挥了多核 cpu 性能，当然 webpack 中可以使用"),t("code",[a._v("happypack")]),a._v("工具开启多进程打包")]),a._v(" "),t("li",[a._v("parcel发布于2017年，主要针对webpack配置繁琐的问题，提供便利打包")]),a._v(" "),t("li",[a._v("核心特点：完全零配置, 构建速度快，对项目零侵入")])])])}),[],!1,null,null,null);t.default=e.exports}}]);