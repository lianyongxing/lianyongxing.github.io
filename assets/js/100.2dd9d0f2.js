(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{707:function(s,t,a){"use strict";a.r(t);var e=a(44),i=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"决策树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#决策树"}},[s._v("#")]),s._v(" 决策树")]),s._v(" "),a("h2",{attrs:{id:"机器学习中分类和预测算法的评估"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#机器学习中分类和预测算法的评估"}},[s._v("#")]),s._v(" 机器学习中分类和预测算法的评估")]),s._v(" "),a("ul",[a("li",[s._v("准确率")]),s._v(" "),a("li",[s._v("速度")]),s._v(" "),a("li",[s._v("鲁棒性")]),s._v(" "),a("li",[s._v("可规模性")]),s._v(" "),a("li",[s._v("可解释性")])]),s._v(" "),a("h2",{attrs:{id:"决策树-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#决策树-2"}},[s._v("#")]),s._v(" 决策树")]),s._v(" "),a("h3",{attrs:{id:"什么是决策树？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是决策树？"}},[s._v("#")]),s._v(" 什么是决策树？")]),s._v(" "),a("p",[s._v("决策树是一个类似于流程图的树结构：其中，每个内部节点表示在一个属性上的测试，每个分支代表一个属性输出，而每个树叶节点代表类或类分布。树的最顶层是根节点。")]),s._v(" "),a("blog-decisionTree"),s._v(" "),a("p",[s._v("上面的例子：刚开始有14个样例，首先按照Weaher这个特征来分类，当Cloudy的时候，完全分开；Sunny和Rainy的情况下，样例无法完全分开，因此再根据另一个特征进行分类（第二层分别按照Winyd和Humidity来分类），最好的结果就是按照某个特征，把样例能够完全分开，这样构建一棵树出来，就是决策树（按照不同的特征进行分类时，可能会得到不同的决策树，决策树不唯一）。对测试集进行使用的时候，只需要把样例扔到树里面，就可以得到它的预测结果。")]),s._v(" "),a("h3",{attrs:{id:"熵"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#熵"}},[s._v("#")]),s._v(" 熵")]),s._v(" "),a("p",[s._v("1948年，香农提出了“信息熵”的概念。"),a("br"),s._v("\n一条信息的信息量与它的不确定性相关，信息量越大，熵越大，信息的不确定性越大；当一件事确定的时候，它的信息量是零，也就是没有信息量。")]),s._v(" "),a("p",[s._v("信息量公式")]),s._v(" "),a("p",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[s._v("H")]),a("mo",[s._v("(")]),a("mi",[s._v("x")]),a("mo",[s._v(")")]),a("mo",[s._v("=")]),a("mo",[s._v("−")]),a("msubsup",[a("mo",[s._v("∑")]),a("mrow",[a("mi",[s._v("i")]),a("mo",[s._v("=")]),a("mn",[s._v("1")])],1),a("mrow",[a("mi",[s._v("n")])],1)],1),a("mo",[s._v("(")]),a("mi",[s._v("p")]),a("mo",[s._v("(")]),a("msub",[a("mi",[s._v("x")]),a("mi",[s._v("i")])],1),a("mo",[s._v(")")]),a("mo",[s._v("∗")]),a("mi",[s._v("l")]),a("mi",[s._v("o")]),a("mi",[s._v("g")]),a("mi",[s._v("p")]),a("mo",[s._v("(")]),a("msub",[a("mi",[s._v("x")]),a("mi",[s._v("i")])],1),a("mo",[s._v(")")]),a("mo",[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("H(x) = -\\sum^{n}_{i=1}(p(x_i)*logp(x_i))\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"1.6513970000000002em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"2.929066em","vertical-align":"-1.277669em"}}),a("span",{staticClass:"base displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.08125em"}},[s._v("H")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathit"},[s._v("x")]),a("span",{staticClass:"mclose"},[s._v(")")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord"},[s._v("−")]),a("span",{staticClass:"mop op-limits"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"1.1776689999999999em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord mathrm"},[s._v("1")])])])]),a("span",{staticStyle:{top:"-0.000005000000000143778em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",[a("span",{staticClass:"op-symbol large-op mop"},[s._v("∑")])])]),a("span",{staticStyle:{top:"-1.2500050000000003em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[a("span",{staticClass:"mord scriptstyle uncramped"},[a("span",{staticClass:"mord mathit"},[s._v("n")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathit"},[s._v("p")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[s._v("x")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[s._v("i")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mclose"},[s._v(")")]),a("span",{staticClass:"mbin"},[s._v("∗")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.01968em"}},[s._v("l")]),a("span",{staticClass:"mord mathit"},[s._v("o")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[s._v("g")]),a("span",{staticClass:"mord mathit"},[s._v("p")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[s._v("x")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[s._v("i")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mclose"},[s._v(")")]),a("span",{staticClass:"mclose"},[s._v(")")])])])])])]),s._v(" "),a("h3",{attrs:{id:"例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[s._v("#")]),s._v(" 例子")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("RID")]),s._v(" "),a("th",[s._v("age")]),s._v(" "),a("th",[s._v("student")]),s._v(" "),a("th",[s._v("buy or not")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("1")]),s._v(" "),a("td",[s._v("middle_age")]),s._v(" "),a("td",[s._v("yes")]),s._v(" "),a("td",[s._v("yes")])]),s._v(" "),a("tr",[a("td",[s._v("2")]),s._v(" "),a("td",[s._v("middle_age")]),s._v(" "),a("td",[s._v("no")]),s._v(" "),a("td",[s._v("yes")])]),s._v(" "),a("tr",[a("td",[s._v("3")]),s._v(" "),a("td",[s._v("senior")]),s._v(" "),a("td",[s._v("no")]),s._v(" "),a("td",[s._v("no")])]),s._v(" "),a("tr",[a("td",[s._v("4")]),s._v(" "),a("td",[s._v("youth")]),s._v(" "),a("td",[s._v("no")]),s._v(" "),a("td",[s._v("yes")])]),s._v(" "),a("tr",[a("td",[s._v("5")]),s._v(" "),a("td",[s._v("youth")]),s._v(" "),a("td",[s._v("yes")]),s._v(" "),a("td",[s._v("yes")])]),s._v(" "),a("tr",[a("td",[s._v("6")]),s._v(" "),a("td",[s._v("youth")]),s._v(" "),a("td",[s._v("no")]),s._v(" "),a("td",[s._v("no")])])])]),s._v(" "),a("p",[s._v("总的信息量为：")]),s._v(" "),a("p",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[s._v("i")]),a("mi",[s._v("n")]),a("mi",[s._v("f")]),a("mi",[s._v("o")]),a("mo",[s._v("(")]),a("mi",[s._v("D")]),a("mo",[s._v(")")]),a("mo",[s._v("=")]),a("mo",[s._v("−")]),a("mfrac",[a("mrow",[a("mn",[s._v("4")])],1),a("mrow",[a("mn",[s._v("6")])],1)],1),a("mo",[s._v("∗")]),a("mi",[s._v("l")]),a("mi",[s._v("o")]),a("msub",[a("mi",[s._v("g")]),a("mn",[s._v("2")])],1),a("mfrac",[a("mrow",[a("mn",[s._v("4")])],1),a("mrow",[a("mn",[s._v("6")])],1)],1),a("mo",[s._v("−")]),a("mfrac",[a("mrow",[a("mn",[s._v("2")])],1),a("mrow",[a("mn",[s._v("6")])],1)],1),a("mo",[s._v("∗")]),a("mi",[s._v("l")]),a("mi",[s._v("o")]),a("msub",[a("mi",[s._v("g")]),a("mn",[s._v("2")])],1),a("mfrac",[a("mrow",[a("mn",[s._v("2")])],1),a("mrow",[a("mn",[s._v("6")])],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("info(D) = - \\frac{4}{6}*log_2\\frac{4}{6} - \\frac{2}{6}*log_2\\frac{2}{6}\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"1.32144em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"2.00744em","vertical-align":"-0.686em"}}),a("span",{staticClass:"base displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mord mathit"},[s._v("n")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[s._v("f")]),a("span",{staticClass:"mord mathit"},[s._v("o")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[s._v("D")]),a("span",{staticClass:"mclose"},[s._v(")")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord"},[s._v("−")]),a("span",{staticClass:"mord reset-textstyle displaystyle textstyle uncramped"},[a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.686em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle cramped"},[a("span",{staticClass:"mord textstyle cramped"},[a("span",{staticClass:"mord mathrm"},[s._v("6")])])])]),a("span",{staticStyle:{top:"-0.22999999999999998em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped frac-line"})]),a("span",{staticStyle:{top:"-0.677em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("4")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})]),a("span",{staticClass:"mbin"},[s._v("∗")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.01968em"}},[s._v("l")]),a("span",{staticClass:"mord mathit"},[s._v("o")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[s._v("g")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.03588em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathrm"},[s._v("2")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mord reset-textstyle displaystyle textstyle uncramped"},[a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.686em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle cramped"},[a("span",{staticClass:"mord textstyle cramped"},[a("span",{staticClass:"mord mathrm"},[s._v("6")])])])]),a("span",{staticStyle:{top:"-0.22999999999999998em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped frac-line"})]),a("span",{staticStyle:{top:"-0.677em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("4")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})]),a("span",{staticClass:"mbin"},[s._v("−")]),a("span",{staticClass:"mord reset-textstyle displaystyle textstyle uncramped"},[a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.686em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle cramped"},[a("span",{staticClass:"mord textstyle cramped"},[a("span",{staticClass:"mord mathrm"},[s._v("6")])])])]),a("span",{staticStyle:{top:"-0.22999999999999998em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped frac-line"})]),a("span",{staticStyle:{top:"-0.677em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("2")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})]),a("span",{staticClass:"mbin"},[s._v("∗")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.01968em"}},[s._v("l")]),a("span",{staticClass:"mord mathit"},[s._v("o")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[s._v("g")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.03588em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathrm"},[s._v("2")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mord reset-textstyle displaystyle textstyle uncramped"},[a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.686em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle cramped"},[a("span",{staticClass:"mord textstyle cramped"},[a("span",{staticClass:"mord mathrm"},[s._v("6")])])])]),a("span",{staticStyle:{top:"-0.22999999999999998em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped frac-line"})]),a("span",{staticStyle:{top:"-0.677em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("2")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})])])])])])]),s._v(" "),a("p",[s._v("如果有年龄信息的话，按照年龄比例算的话，信息量为：")]),s._v(" "),a("p",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[s._v("i")]),a("mi",[s._v("n")]),a("mi",[s._v("f")]),a("msub",[a("mi",[s._v("o")]),a("mrow",[a("mi",[s._v("a")]),a("mi",[s._v("g")]),a("mi",[s._v("e")])],1)],1),a("mo",[s._v("(")]),a("mi",[s._v("D")]),a("mo",[s._v(")")]),a("mo",[s._v("=")]),a("mfrac",[a("mrow",[a("mn",[s._v("2")])],1),a("mrow",[a("mn",[s._v("6")])],1)],1),a("mo",[s._v("∗")]),a("mo",[s._v("(")]),a("mo",[s._v("−")]),a("mn",[s._v("1")]),a("mo",[s._v("∗")]),a("mn",[s._v("0")]),a("mo",[s._v(")")]),a("mo",[s._v("+")]),a("mfrac",[a("mrow",[a("mn",[s._v("1")])],1),a("mrow",[a("mn",[s._v("6")])],1)],1),a("mo",[s._v("∗")]),a("mo",[s._v("(")]),a("mo",[s._v("−")]),a("mn",[s._v("1")]),a("mo",[s._v("∗")]),a("mn",[s._v("0")]),a("mo",[s._v(")")]),a("mo",[s._v("+")]),a("mfrac",[a("mrow",[a("mn",[s._v("3")])],1),a("mrow",[a("mn",[s._v("6")])],1)],1),a("mo",[s._v("∗")]),a("mo",[s._v("(")]),a("mo",[s._v("−")]),a("mfrac",[a("mrow",[a("mn",[s._v("2")])],1),a("mrow",[a("mn",[s._v("3")])],1)],1),a("mo",[s._v("∗")]),a("mi",[s._v("l")]),a("mi",[s._v("o")]),a("msub",[a("mi",[s._v("g")]),a("mn",[s._v("2")])],1),a("mfrac",[a("mrow",[a("mn",[s._v("2")])],1),a("mrow",[a("mn",[s._v("3")])],1)],1),a("mo",[s._v("−")]),a("mfrac",[a("mrow",[a("mn",[s._v("1")])],1),a("mrow",[a("mn",[s._v("3")])],1)],1),a("mo",[s._v("∗")]),a("mi",[s._v("l")]),a("mi",[s._v("o")]),a("msub",[a("mi",[s._v("g")]),a("mn",[s._v("2")])],1),a("mfrac",[a("mrow",[a("mn",[s._v("1")])],1),a("mrow",[a("mn",[s._v("3")])],1)],1),a("mo",[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("info_{age}(D) = \\frac{2}{6}*(-1*0) + \\frac{1}{6}*(-1*0) +\\frac{3}{6}*(- \\frac{2}{3}*log_2\\frac{2}{3} - \\frac{1}{3}*log_2\\frac{1}{3})\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"1.32144em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"2.00744em","vertical-align":"-0.686em"}}),a("span",{staticClass:"base displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mord mathit"},[s._v("n")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[s._v("f")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[s._v("o")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[s._v("a")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[s._v("g")]),a("span",{staticClass:"mord mathit"},[s._v("e")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[s._v("D")]),a("span",{staticClass:"mclose"},[s._v(")")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord reset-textstyle displaystyle textstyle uncramped"},[a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.686em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle cramped"},[a("span",{staticClass:"mord textstyle cramped"},[a("span",{staticClass:"mord mathrm"},[s._v("6")])])])]),a("span",{staticStyle:{top:"-0.22999999999999998em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped frac-line"})]),a("span",{staticStyle:{top:"-0.677em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("2")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})]),a("span",{staticClass:"mbin"},[s._v("∗")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord"},[s._v("−")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mbin"},[s._v("∗")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mclose"},[s._v(")")]),a("span",{staticClass:"mbin"},[s._v("+")]),a("span",{staticClass:"mord reset-textstyle displaystyle textstyle uncramped"},[a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.686em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle cramped"},[a("span",{staticClass:"mord textstyle cramped"},[a("span",{staticClass:"mord mathrm"},[s._v("6")])])])]),a("span",{staticStyle:{top:"-0.22999999999999998em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped frac-line"})]),a("span",{staticStyle:{top:"-0.677em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("1")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})]),a("span",{staticClass:"mbin"},[s._v("∗")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord"},[s._v("−")]),a("span",{staticClass:"mord mathrm"},[s._v("1")]),a("span",{staticClass:"mbin"},[s._v("∗")]),a("span",{staticClass:"mord mathrm"},[s._v("0")]),a("span",{staticClass:"mclose"},[s._v(")")]),a("span",{staticClass:"mbin"},[s._v("+")]),a("span",{staticClass:"mord reset-textstyle displaystyle textstyle uncramped"},[a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.686em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle cramped"},[a("span",{staticClass:"mord textstyle cramped"},[a("span",{staticClass:"mord mathrm"},[s._v("6")])])])]),a("span",{staticStyle:{top:"-0.22999999999999998em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped frac-line"})]),a("span",{staticStyle:{top:"-0.677em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("3")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})]),a("span",{staticClass:"mbin"},[s._v("∗")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord"},[s._v("−")]),a("span",{staticClass:"mord reset-textstyle displaystyle textstyle uncramped"},[a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.686em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle cramped"},[a("span",{staticClass:"mord textstyle cramped"},[a("span",{staticClass:"mord mathrm"},[s._v("3")])])])]),a("span",{staticStyle:{top:"-0.22999999999999998em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped frac-line"})]),a("span",{staticStyle:{top:"-0.677em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("2")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})]),a("span",{staticClass:"mbin"},[s._v("∗")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.01968em"}},[s._v("l")]),a("span",{staticClass:"mord mathit"},[s._v("o")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[s._v("g")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.03588em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathrm"},[s._v("2")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mord reset-textstyle displaystyle textstyle uncramped"},[a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.686em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle cramped"},[a("span",{staticClass:"mord textstyle cramped"},[a("span",{staticClass:"mord mathrm"},[s._v("3")])])])]),a("span",{staticStyle:{top:"-0.22999999999999998em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped frac-line"})]),a("span",{staticStyle:{top:"-0.677em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("2")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})]),a("span",{staticClass:"mbin"},[s._v("−")]),a("span",{staticClass:"mord reset-textstyle displaystyle textstyle uncramped"},[a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.686em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle cramped"},[a("span",{staticClass:"mord textstyle cramped"},[a("span",{staticClass:"mord mathrm"},[s._v("3")])])])]),a("span",{staticStyle:{top:"-0.22999999999999998em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped frac-line"})]),a("span",{staticStyle:{top:"-0.677em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("1")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})]),a("span",{staticClass:"mbin"},[s._v("∗")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.01968em"}},[s._v("l")]),a("span",{staticClass:"mord mathit"},[s._v("o")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[s._v("g")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"-0.03588em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathrm"},[s._v("2")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mord reset-textstyle displaystyle textstyle uncramped"},[a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.686em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle cramped"},[a("span",{staticClass:"mord textstyle cramped"},[a("span",{staticClass:"mord mathrm"},[s._v("3")])])])]),a("span",{staticStyle:{top:"-0.22999999999999998em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped frac-line"})]),a("span",{staticStyle:{top:"-0.677em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped"},[a("span",{staticClass:"mord textstyle uncramped"},[a("span",{staticClass:"mord mathrm"},[s._v("1")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})]),a("span",{staticClass:"mclose"},[s._v(")")])])])])])]),s._v(" "),a("p",[s._v("因此年龄信息带来的信息增益为：")]),s._v(" "),a("p",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[s._v("G")]),a("mi",[s._v("a")]),a("mi",[s._v("i")]),a("mi",[s._v("n")]),a("mo",[s._v("(")]),a("mi",[s._v("a")]),a("mi",[s._v("g")]),a("mi",[s._v("e")]),a("mo",[s._v(")")]),a("mo",[s._v("=")]),a("mi",[s._v("i")]),a("mi",[s._v("n")]),a("mi",[s._v("f")]),a("mi",[s._v("o")]),a("mo",[s._v("(")]),a("mi",[s._v("D")]),a("mo",[s._v(")")]),a("mo",[s._v("−")]),a("mi",[s._v("i")]),a("mi",[s._v("n")]),a("mi",[s._v("f")]),a("msub",[a("mi",[s._v("o")]),a("mrow",[a("mi",[s._v("a")]),a("mi",[s._v("g")]),a("mi",[s._v("e")])],1)],1),a("mo",[s._v("(")]),a("mi",[s._v("D")]),a("mo",[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("Gain(age) = info(D) - info_{age}(D)\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1.036108em","vertical-align":"-0.286108em"}}),a("span",{staticClass:"base displaystyle textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[s._v("G")]),a("span",{staticClass:"mord mathit"},[s._v("a")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mord mathit"},[s._v("n")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathit"},[s._v("a")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[s._v("g")]),a("span",{staticClass:"mord mathit"},[s._v("e")]),a("span",{staticClass:"mclose"},[s._v(")")]),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mord mathit"},[s._v("n")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[s._v("f")]),a("span",{staticClass:"mord mathit"},[s._v("o")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[s._v("D")]),a("span",{staticClass:"mclose"},[s._v(")")]),a("span",{staticClass:"mbin"},[s._v("−")]),a("span",{staticClass:"mord mathit"},[s._v("i")]),a("span",{staticClass:"mord mathit"},[s._v("n")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[s._v("f")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[s._v("o")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord scriptstyle cramped"},[a("span",{staticClass:"mord mathit"},[s._v("a")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[s._v("g")]),a("span",{staticClass:"mord mathit"},[s._v("e")])])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[s._v("​")])]),s._v("​")])])]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[s._v("D")]),a("span",{staticClass:"mclose"},[s._v(")")])])])])])]),s._v(" "),a("p",[s._v("同样可以计算出是否是student的信息所带来的信息增益")]),s._v(" "),a("p",[s._v("因此，可以通过比较age和student两个特征所带来的的信息增益的大小，确定哪个特征所带来的信息增益更大，选择信息增益最大的那个特征作为分类标准，最大限度地减小这件事的不确定性。")]),s._v(" "),a("p",[s._v("通过每一层都计算信息增益最大的那个特征，把决策树不断延伸下去，直到某个特征下，完全是某一类样例（buy or not）。")]),s._v(" "),a("h3",{attrs:{id:"id3算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#id3算法"}},[s._v("#")]),s._v(" ID3算法")]),s._v(" "),a("ul",[a("li",[s._v("树以代表训练样本的单个节点开始。")]),s._v(" "),a("li",[s._v("如果样本都在同一个类中，则该节点成为树叶，并用该类标号。")]),s._v(" "),a("li",[s._v("否则，算法使用称为信息增益的度量作为评判标准，选择出信息增益最大的那个特征。这个特征成为该节点的判定标准。")]),s._v(" "),a("li",[s._v("（对于所有特征的分类，连续属性必须离散化，给个阈值分成不同的区间，比如某个年龄属性，可能是1到100岁，则需要分成1到30岁、31岁到80岁，81岁到100岁三个区间）。")]),s._v(" "),a("li",[s._v("在节点下，对于选择出的那个特征的每个已知的值都创建一个分支，并根据此划分样本。")]),s._v(" "),a("li",[s._v("算法使用同样的过程，递归的形成每个划分上的样本判定树，如果一个特征已经在上层考虑完了，以后就不再考虑了。")]),s._v(" "),a("li",[s._v("递归划分步骤仅当下列条件之一停止："),a("br"),s._v("\n（a）给定节点的所有样本属于同一类。"),a("br"),s._v("\n（b）没有剩余属性可以进一步划分样本，在这种情况下，使用多数表决")])]),s._v(" "),a("h3",{attrs:{id:"其他算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他算法"}},[s._v("#")]),s._v(" 其他算法")]),s._v(" "),a("p",[s._v("CART、C4.5，都是贪心算法，自上而下"),a("br"),s._v("\nC4.5是根据信息增益比（gain ratio）划分，CART是根据基尼系数（gini index）")]),s._v(" "),a("h3",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[s._v("#")]),s._v(" 其他")]),s._v(" "),a("h4",{attrs:{id:"overfitting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overfitting"}},[s._v("#")]),s._v(" overfitting")]),s._v(" "),a("p",[s._v("如果决策树过深的话，就是分的太细了，容易产生过拟合现象，因此决策树最好不要太深。")]),s._v(" "),a("ul",[a("li",[s._v("先剪枝：树达到一定的深度就不往下生长了")]),s._v(" "),a("li",[s._v("后剪枝：全部分完后，把底下的几层树剪掉")])]),s._v(" "),a("h4",{attrs:{id:"优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[s._v("#")]),s._v(" 优缺点")]),s._v(" "),a("h4",{attrs:{id:"优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[s._v("#")]),s._v(" 优点")]),s._v(" "),a("p",[s._v("直观，便于理解，小规模数据集有效")]),s._v(" "),a("h4",{attrs:{id:"缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[s._v("#")]),s._v(" 缺点")]),s._v(" "),a("ul",[a("li",[s._v("处理连续变量不好")]),s._v(" "),a("li",[s._v("类别过多的时候，错误增加的比较快")]),s._v(" "),a("li",[s._v("可规模性一般")])])],1)}),[],!1,null,null,null);t.default=i.exports}}]);