(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{485:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),t("p",[s._v("FIS 是百度的前端团队推出的一款构建系统，最早在内部使用，后来流行了一段时间，但后来就越来越少人使用了，官方也很久没更新过了")]),s._v(" "),t("p",[s._v("FIs完全属于另外一个种类的构建系统，相比于Gulp和Grunt，它的核心特点就是高度集成，它把常见的构建任务和调试任务都集成在了内部，开发者可以通过简单的配置文件就可以完成构建工作，不需要像gulp或者grunt一样自己去定义一些任务和引用插件，FIS中有一些内置")]),s._v(" "),t("h2",{attrs:{id:"基本使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[s._v("#")]),s._v(" 基本使用")]),s._v(" "),t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("p",[s._v("全局安装FIS吗，实际开发中尽量安装到本地")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# fis3做了较大的改变，因此更换包名为fis3")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" global "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" fis3\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"简单使用-release任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单使用-release任务"}},[s._v("#")]),s._v(" 简单使用(release任务)")]),s._v(" "),t("p",[s._v("release是FIS中提供的一个默认构建任务，我们可以对一个项目直接使用release")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此命令会将该项目自动构建到一个临时目录中，一般在用户文件夹")]),s._v("\nfis3 release\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者使用-d可以指定文件夹")]),s._v("\nfis3 release "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" output\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("此时就会生成一个output文件夹，但是FIS并没有对资源做转换，而是直接输出到文件夹中，并且将相对路径转换成绝对路径，来实现"),t("strong",[s._v("资源定位")])]),s._v(" "),t("blockquote",[t("p",[s._v("资源定位是FIS的一个核心特性，作用就是将开发阶段的路径彻底和生产路径分离开")])]),s._v(" "),t("p",[s._v("在以往的前后端统一的项目中，经常会出现"),t("strong",[s._v("生产环境下的路径并不是后端所需要的路径")]),s._v("这种情况，上线之前后端开发人员还需要手动修改路径，使用FIS过后，只需要在开发阶段使用相对路径开发即可，打出生产包后会自动的将相对路径修改为绝对路径。")]),s._v(" "),t("h3",{attrs:{id:"通过配置指定输出路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过配置指定输出路径"}},[s._v("#")]),s._v(" 通过配置指定输出路径")]),s._v(" "),t("ol",[t("li",[s._v("根路径下新建一个fis-conf.js，在这个文件下有一个特有的全局对象，就是"),t("strong",[s._v("fis")]),s._v("\n2。 可以通过"),t("code",[s._v("fis.match")]),s._v("方法为开发过程中匹配到的文件添加配置，此处匹配到的就是"),t("strong",[s._v("scss")]),s._v("，"),t("strong",[s._v("js")]),s._v("，"),t("strong",[s._v("png")]),s._v("等文件")])]),s._v(" "),t("div",{staticClass:"language-javaScript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// fis-config.js")]),s._v("\nfis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("match")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token template-string"}},[t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("*.{js, scss, png}")]),t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这个表示将js，scss，png的输出路径修改到release路径下的assets下的`$0(这个$0表示原始的结构)`")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这里输出的资源文件都会放在assets这个路径下")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("release")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/assets/$0"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"编译与压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译与压缩"}},[s._v("#")]),s._v(" 编译与压缩")]),s._v(" "),t("p",[s._v("编译和压缩同样需要使用配置文件的方式去配置如何对文件进行编译")]),s._v(" "),t("p",[s._v("这里尝试对scss和es6文件进行编译，同样使用match方法去指定一个选择器，这个选择器就是为了选择我们需要匹配的文件")]),s._v(" "),t("p",[s._v("转换scss和es6需要单独安装插件")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装转义scss插件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" fis-parser-node-sass\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装转义es6插件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" fis-parser-babel-6.x\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("div",{staticClass:"language-javaScript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// fis-config.js")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 可以通过fis.plugin()去自动载入插件, 插件的前缀是不需要的")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 转换sass")]),s._v("\nfis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("match")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"**/*.scss"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("rExt")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('".css"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 修改扩展名，可以记忆成renameExt")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("parser")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" fis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("plugin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node-sass"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 转换sass为css")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("optimizer")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" fis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("plugin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v('"clean'),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("css"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 压缩css， 压缩不需要第三方包")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 转换es6")]),s._v("\nfis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("match")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"**/*.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 转换成js，此处使用babel6是因为fis很久没有维护了，目前最新的是babel7")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("parser")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" fis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("plugin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"babel-6.x"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("optimizer")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" fis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("plugin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"uglify-js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 压缩js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[s._v("从上述的babel依然停留在6.x的问题并且截止目前为止fis还有几百个issue没有处理可见fis快要退出历史的舞台，我们实际使用时最好还是用gulp等工具去抽出一类项目的公用cli。")]),s._v(" "),t("p",[s._v("当然学习fis主要是学习它的思想，而并非fis本身")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"},[s._v("tips")]),t("p",[s._v("我们看到一般es6编译成js时，一般会生成自调用函数，且传入"),t("strong",[s._v("window")]),s._v("和"),t("strong",[s._v("document")]),s._v("两个参数，这主要原因是方便内部遍历查找"),t("strong",[s._v("window")]),s._v("和"),t("strong",[s._v("document")]),s._v("属性，避免随层级往上遍历，同时这样的方式也可以减少字符串的长度，使得压缩比例更大")])])])}),[],!1,null,null,null);t.default=e.exports}}]);