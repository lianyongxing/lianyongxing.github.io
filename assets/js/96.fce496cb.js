(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{698:function(t,s,a){"use strict";a.r(s);var n=a(44),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"knn应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#knn应用"}},[t._v("#")]),t._v(" KNN应用")]),t._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("用KNN算法来拟合鸢尾花数据，然后给出一个自定义输入，预测鸢尾花的类别")]),t._v(" "),a("h2",{attrs:{id:"数据集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据集"}},[t._v("#")]),t._v(" 数据集")]),t._v(" "),a("p",[t._v("鸢尾花，150个实例，三个类别，4个特征")]),t._v(" "),a("h2",{attrs:{id:"pythoncode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pythoncode"}},[t._v("#")]),t._v(" PythonCode")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 导入库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sklearn "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" neighbors\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 导入数据集")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sklearn "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" datasets\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生产KNN实例")]),t._v("\nknn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" neighbors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("KNeighborsClassifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 加载数据")]),t._v("\niris "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datasets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load_iris"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ndata "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" iris"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntarget "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" iris"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'target'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntarget_names "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" iris"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'target_names'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iris"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target_names"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拟合数据")]),t._v("\nknn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iris"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" iris"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进行预测")]),t._v("\npredictT "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" knn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("predict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npreName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" target_names"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("predictT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("preName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);