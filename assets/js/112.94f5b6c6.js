(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{740:function(t,a,s){"use strict";s.r(a);var e=s(44),i=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"矩阵分解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#矩阵分解"}},[t._v("#")]),t._v(" 矩阵分解")]),t._v(" "),s("p",[t._v("协同过滤是很直观、可解释性强的模型，但它并不具备很强的泛化能力，有一个严重的问题：热门的物品有很强的头部效应，而尾部的物品由于特征向量稀疏，很少与其他物品产生相似性，导致很少被推荐")]),t._v(" "),s("p",[t._v("为了解决这个问题，增加模型的泛化性，矩阵分解被提出，在协同过滤的基础上，使用更稠密的隐向量表示用户和物品，挖掘用户和物品的隐含兴趣和特征，在一定程度上弥补了协同过滤处理稀疏矩阵能力不足的问题")]),t._v(" "),s("p",[t._v("协同过滤仅仅利用了用户和物品之间的交互，无法有效引入年龄、性别、商品描述、商品分类等一些用户特征、物品特征、上下文特征，导致有效信息的遗漏")]),t._v(" "),s("h2",{attrs:{id:"矩阵分解算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#矩阵分解算法"}},[t._v("#")]),t._v(" 矩阵分解算法")]),t._v(" "),s("p",[t._v("矩阵分解基本方法有三种：特征值分解、奇异值分解、Funk-SVD")]),t._v(" "),s("p",[t._v("求解方法有梯度下降法，最小二乘法")]),t._v(" "),s("h3",{attrs:{id:"特征值分解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特征值分解"}},[t._v("#")]),t._v(" 特征值分解")]),t._v(" "),s("h3",{attrs:{id:"奇异值分解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#奇异值分解"}},[t._v("#")]),t._v(" 奇异值分解")]),t._v(" "),s("p",[t._v("一个M*N的矩阵，一定可以分解为")]),t._v(" "),s("p",[s("span",{staticClass:"katex-display"},[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("M")]),s("mo",[t._v("=")]),s("mi",[t._v("U")]),s("mi",{attrs:{mathvariant:"normal"}},[t._v("Σ")]),s("msup",[s("mi",[t._v("V")]),s("mrow",[s("mi",[t._v("T")])],1)],1)],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("M = U\\Sigma V^{T}\n")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.8913309999999999em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.8913309999999999em","vertical-align":"0em"}}),s("span",{staticClass:"base displaystyle textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10903em"}},[t._v("M")]),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10903em"}},[t._v("U")]),s("span",{staticClass:"mord mathrm"},[t._v("Σ")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")]),s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"-0.413em","margin-right":"0.05em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[s("span",{staticClass:"mord scriptstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[t._v("T")])])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])])])]),t._v(" "),s("p",[t._v("其中U是m*m的正交矩阵，V是n*n的正交矩阵，"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",{attrs:{mathvariant:"normal"}},[t._v("Σ")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\Sigma")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathrm"},[t._v("Σ")])])])]),t._v("是m*n的对角矩阵，对角线上的元素被称为奇异值")]),t._v(" "),s("p",[t._v("SVD解决了特征值分解只用于方阵的问题，但是也存在问题")]),t._v(" "),s("ul",[s("li",[t._v("SVD需要原始矩阵是稠密的，如果矩阵稀疏，则求出的奇异值效果很差，而在推荐系统中，很少有数据稠密的状态，这就使得奇异值分解在应用前需要进行数据填充")]),t._v(" "),s("li",[t._v("传统的SVD在求奇异值时，计算复杂度很高")])]),t._v(" "),s("h3",{attrs:{id:"lfm隐语义模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lfm隐语义模型"}},[t._v("#")]),t._v(" LFM隐语义模型")]),t._v(" "),s("p",[t._v("详解请点击 "),s("a",{attrs:{href:"/blog/recommenderSystem/LFM",title:"LFM隐语义模型"}},[t._v("LFM隐语义模型")])]),t._v(" "),s("h2",{attrs:{id:"优缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[t._v("#")]),t._v(" 优缺点")]),t._v(" "),s("h3",{attrs:{id:"优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),s("ul",[s("li",[t._v("泛化性强，在一定程度上解决了数据稀疏的问题")]),t._v(" "),s("li",[t._v("空间复杂度低，不再需要存储协同过滤模型服务阶段多需要的庞大的用户相似和物品相似的矩阵，只需要存储用户和物品的隐向量")]),t._v(" "),s("li",[t._v("更好的扩展性和灵活性，矩阵分解产生的是隐向量，这与embedding的思想相似")])]),t._v(" "),s("h3",{attrs:{id:"局限性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#局限性"}},[t._v("#")]),t._v(" 局限性")]),t._v(" "),s("ul",[s("li",[t._v("与协同过滤一样，矩阵分解不方便加入用户、物品、上下文的相关特征，这是矩阵分解丧失了利用有效信息的机会")]),t._v(" "),s("li",[t._v("缺乏用户历史行为时，无法进行有效推荐")])])])}),[],!1,null,null,null);a.default=i.exports}}]);