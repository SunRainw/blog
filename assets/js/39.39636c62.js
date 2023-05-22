(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{642:function(v,_,t){"use strict";t.r(_);var a=t(14),s=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"前端工程化定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端工程化定义"}},[v._v("#")]),v._v(" 前端工程化定义")]),v._v(" "),t("p",[v._v("前端工程化指遵循一定标准和规范，通过工具去提高效率和降低成本的一种手段")]),v._v(" "),t("h2",{attrs:{id:"发展背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发展背景"}},[v._v("#")]),v._v(" 发展背景")]),v._v(" "),t("p",[v._v("前端行业近些年极其被重视，究其原因是目前前端应用功能要求不断提高，业务逻辑日益复，作为当下互联网时代不可或缺的技术，前端可以说占据了整个互联网的半壁江山。")]),v._v(" "),t("p",[v._v("从传统网站到H5、大型SPA、桌面应用以及小程序，前端技术基本上是无所不能的全面覆盖，在这些表象的背后实际是对前端行业的要求发生了天翻地覆的变化。")]),v._v(" "),t("p",[v._v("以往写demo、套模板、调页面这种刀耕火种的方式，已经完全不符合当下对开发效率的要求，前端工厂化就是在这样的背景下被提出来作为当下的必备技能。")]),v._v(" "),t("h2",{attrs:{id:"面临的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#面临的问题"}},[v._v("#")]),v._v(" 面临的问题")]),v._v(" "),t("ol",[t("li",[v._v("想要在开发过程中使用ES6+新特性提高编码效率，会发现实际运用中有兼容问题。")]),v._v(" "),t("li",[v._v("想要使用Less/Sass/PostCSS增强CSS的编程性，但运行环境不能直接支持。")]),v._v(" "),t("li",[v._v("想要使用模块化或者组件化的方式提高项目的可维护性，但运行环境不能直接支持。")]),v._v(" "),t("li",[v._v("部署上线前需要"),t("strong",[v._v("手动")]),v._v("压缩代码及资源文件，部署过程中需要"),t("strong",[v._v("手动")]),v._v("上传代码到服务器。")]),v._v(" "),t("li",[v._v("多人协作开发，无法硬性统一大家的代码风格，从仓库中pull回来的代码质量无法保证。")]),v._v(" "),t("li",[v._v("部分功能开发时需要等待后端服务接口提前完成。")])]),v._v(" "),t("p",[v._v("总结如下：")]),v._v(" "),t("ol",[t("li",[v._v("传统语言或语法的弊端")]),v._v(" "),t("li",[v._v("无法使用模块化/组件化")]),v._v(" "),t("li",[v._v("重复的机械工作")]),v._v(" "),t("li",[v._v("代码风格统一、质量保证")]),v._v(" "),t("li",[v._v("依赖后端服务接口支持")]),v._v(" "),t("li",[v._v("整体依赖后端项目")])]),v._v(" "),t("h2",{attrs:{id:"工程化表现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工程化表现"}},[v._v("#")]),v._v(" 工程化表现")]),v._v(" "),t("blockquote",[t("p",[v._v("一切以提高效率、降低成本、质量保证为目的的手段都属于「工程化」")])]),v._v(" "),t("ul",[t("li",[v._v("一切重复的工作都应该被自动化")])]),v._v(" "),t("p",[t("code",[v._v("创建项目")]),v._v(" ---\x3e "),t("code",[v._v("编码")]),v._v(" ---\x3e "),t("code",[v._v("预览/测试")]),v._v(" ---\x3e "),t("code",[v._v("提交")]),v._v(" ---\x3e "),t("code",[v._v("部署")])]),v._v(" "),t("p",[v._v("上面的每一个环节，都可以通过工程化的方式大大的提高效率，具体如下：")]),v._v(" "),t("h3",{attrs:{id:"创建项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建项目"}},[v._v("#")]),v._v(" 创建项目")]),v._v(" "),t("p",[v._v("在项目创建过程中，使用脚手架工具自动完成下面的基础环境搭建")]),v._v(" "),t("ul",[t("li",[v._v("创建项目结构")]),v._v(" "),t("li",[v._v("创建特定类型文件")])]),v._v(" "),t("h3",{attrs:{id:"编码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编码"}},[v._v("#")]),v._v(" 编码")]),v._v(" "),t("p",[v._v("在编码阶段，借助工程化工具自动的做如下操作，从而确保代码风格统一，使用编译工具提高编码效率")]),v._v(" "),t("ul",[t("li",[v._v("格式化代码")]),v._v(" "),t("li",[v._v("校验代码风格")]),v._v(" "),t("li",[v._v("编译/构建/打包")])]),v._v(" "),t("h3",{attrs:{id:"预览环节"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#预览环节"}},[v._v("#")]),v._v(" 预览环节")]),v._v(" "),t("p",[v._v("传统的预览需要借助apache或者nginx这类的web服务器去启动应用，但这种传统的web服务没有热更新体验。并且在开发阶段需要编译代码，可以使用Source Map去对应源代码，也可以使用Mock等在后端服务未完成情况下提前开发功能。")]),v._v(" "),t("ul",[t("li",[v._v("Web Server/Mock")]),v._v(" "),t("li",[v._v("Live Reloading/HMR")]),v._v(" "),t("li",[v._v("Source Map")])]),v._v(" "),t("h3",{attrs:{id:"代码提交"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码提交"}},[v._v("#")]),v._v(" 代码提交")]),v._v(" "),t("p",[v._v("可以使用Git Hooks自动化检查项目，检查代码风格和质量，确保提交的代码不会有问题，甚至git log可以做严格的格式限制，可以在日后回滚时有更高的参考价值")]),v._v(" "),t("ul",[t("li",[v._v("Git Hooks")]),v._v(" "),t("li",[v._v("Lint-Staged")]),v._v(" "),t("li",[v._v("持续集成")])]),v._v(" "),t("h3",{attrs:{id:"部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[v._v("#")]),v._v(" 部署")]),v._v(" "),t("p",[v._v("可以用一行命令代替传统的ftp上传，可以在代码提交过后自动化的通过持续集成或者持续部署的方式自动将代码部署到服务器，避免了手动操作产生的不稳定因素")]),v._v(" "),t("ul",[t("li",[v._v("CI/CD")]),v._v(" "),t("li",[v._v("自动发布")])])])}),[],!1,null,null,null);_.default=s.exports}}]);