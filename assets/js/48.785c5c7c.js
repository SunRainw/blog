(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{497:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("JS分为8种内置类型，又分为基础类型和引用类型")]),s._v(" "),a("h2",{attrs:{id:"基础类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础类型"}},[s._v("#")]),s._v(" 基础类型")]),s._v(" "),a("ul",[a("li",[s._v("Number、String、Boolean、Undefined、Null、Symbol、BigInt")]),s._v(" "),a("li",[s._v("Symbol类型的对象永不相等，即使传入相同的值，可以用来解决属性键名冲突的问题，用于标记")]),s._v(" "),a("li",[s._v("Number中有一种特殊的是NaN，用于表示一个本来要返回数值的操作数未返回数值的情况，用isNaN判断")])]),s._v(" "),a("div",{staticClass:"language-javaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("NaN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("NaN")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("NaN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("NaN")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("NaN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// NaN")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("isNaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("NaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("isNaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("NaN")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// number")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"bigint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bigint"}},[s._v("#")]),s._v(" BigInt")]),s._v(" "),a("ul",[a("li",[s._v("BigInt是谷歌67版加入的类型，用于安全存储、操作较大的整数")]),s._v(" "),a("li",[s._v("用n为后缀表示为bigint（10n），或者用BigInt(1)创建、（BigInt(1) === 1n）")]),s._v(" "),a("li",[s._v("BigInt除了一元加号不能运算，其他的都能进行运算")])]),s._v(" "),a("div",{staticClass:"language-javaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 30n")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 10n")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10n")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// typeError,因为一元加表示将后面转换为number，而bigint不能转换为number")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10n")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// -10n")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 100n")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1n")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1000n")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1n")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10n")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("x     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 11n")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("x     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 10n")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("ul",[a("li",[s._v("除法运算符会自动向下取整")])]),s._v(" "),a("div",{staticClass:"language-javaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2.5")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10n")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2n")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"引用类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引用类型"}},[s._v("#")]),s._v(" 引用类型")]),s._v(" "),a("p",[s._v("Object(普通object、Array、Math、Date、Function、RegExp)")])])}),[],!1,null,null,null);a.default=e.exports}}]);