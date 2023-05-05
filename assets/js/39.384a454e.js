(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{376:function(t,s,a){t.exports=a.p+"assets/img/att1.e426b7e9.png"},377:function(t,s,a){t.exports=a.p+"assets/img/att2.69d1b6d1.png"},638:function(t,s,a){"use strict";a.r(s);var e=a(44),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"attention-is-all-you-need"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#attention-is-all-you-need"}},[t._v("#")]),t._v(" Attention is ALL you need")]),t._v(" "),e("h2",{attrs:{id:"算法流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#算法流程"}},[t._v("#")]),t._v(" 算法流程")]),t._v(" "),e("p",[e("strong",[t._v("Attention")]),t._v("是Transformer结构的核心组成部分，在此对self-attention进行介绍和分析")]),t._v(" "),e("p",[e("strong",[t._v("Self-Attention")]),t._v("的算法流程很简单清晰，简单概括：定义三个变换QKV，然后用QK计算每个token的score，与V加权即可")]),t._v(" "),e("ol",[e("li",[t._v("定义三个线性变换")])]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SelfAttention")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nn"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定义三个基本的矩阵线性变换QKV")]),t._v("\n\tself"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nn"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Linear"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 假设输入和输出都是128")]),t._v("\n\tself"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nn"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Linear"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ")]),t._v("\n\tself"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nn"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Linear"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ")]),t._v("\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("对同一个句子，假设单个句子的Embedding为(10, 128)，代表一句话10个单词，每个单词128维向量表征，对这个Embedding分别进行QKV三个变换，维度从(10, 128)*(128, 128) = (10, 128)")])]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SelfAttention")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nn"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定义三个基本的矩阵线性变换QKV")]),t._v("\n\tself"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nn"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Linear"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 假设输入和输出都是128")]),t._v("\n\tself"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nn"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Linear"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ")]),t._v("\n\tself"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nn"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Linear"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ")]),t._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("forward")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" embeddings"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\tQ "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("embeddings"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (L, 128)*(128, 128) = (L, 128)")]),t._v("\n\t\tK "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("embeddings"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tV "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("embeddings"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("根据attention的公式")])]),t._v(" "),e("p",[e("span",{staticClass:"katex-display"},[e("span",{staticClass:"katex"},[e("span",{staticClass:"katex-mathml"},[e("math",[e("semantics",[e("mrow",[e("mi",[t._v("A")]),e("mi",[t._v("t")]),e("mi",[t._v("t")]),e("mi",[t._v("e")]),e("mi",[t._v("n")]),e("mi",[t._v("t")]),e("mi",[t._v("i")]),e("mi",[t._v("o")]),e("mi",[t._v("n")]),e("mo",[t._v("(")]),e("mi",[t._v("Q")]),e("mo",{attrs:{separator:"true"}},[t._v(",")]),e("mi",[t._v("K")]),e("mo",{attrs:{separator:"true"}},[t._v(",")]),e("mi",[t._v("V")]),e("mo",[t._v(")")]),e("mo",[t._v("=")]),e("mi",[t._v("s")]),e("mi",[t._v("o")]),e("mi",[t._v("f")]),e("mi",[t._v("t")]),e("mi",[t._v("m")]),e("mi",[t._v("a")]),e("mi",[t._v("x")]),e("mo",[t._v("(")]),e("mfrac",[e("mrow",[e("msup",[e("mi",[t._v("Q")]),e("mrow",[e("mi",[t._v("T")])],1)],1),e("mi",[t._v("K")])],1),e("mrow",[e("msqrt",[e("mrow",[e("msub",[e("mi",[t._v("d")]),e("mi",[t._v("k")])],1)],1)],1)],1)],1),e("mo",[t._v(")")]),e("mi",[t._v("V")])],1),e("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("Attention(Q, K, V) = softmax(\\frac{Q^{T}K}{\\sqrt{d_k}})V\n")])],1)],1)],1),e("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[e("span",{staticClass:"strut",staticStyle:{height:"1.5183309999999999em"}}),e("span",{staticClass:"strut bottom",staticStyle:{height:"2.448331em","vertical-align":"-0.9300000000000002em"}}),e("span",{staticClass:"base displaystyle textstyle uncramped"},[e("span",{staticClass:"mord mathit"},[t._v("A")]),e("span",{staticClass:"mord mathit"},[t._v("t")]),e("span",{staticClass:"mord mathit"},[t._v("t")]),e("span",{staticClass:"mord mathit"},[t._v("e")]),e("span",{staticClass:"mord mathit"},[t._v("n")]),e("span",{staticClass:"mord mathit"},[t._v("t")]),e("span",{staticClass:"mord mathit"},[t._v("i")]),e("span",{staticClass:"mord mathit"},[t._v("o")]),e("span",{staticClass:"mord mathit"},[t._v("n")]),e("span",{staticClass:"mopen"},[t._v("(")]),e("span",{staticClass:"mord mathit"},[t._v("Q")]),e("span",{staticClass:"mpunct"},[t._v(",")]),e("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07153em"}},[t._v("K")]),e("span",{staticClass:"mpunct"},[t._v(",")]),e("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")]),e("span",{staticClass:"mclose"},[t._v(")")]),e("span",{staticClass:"mrel"},[t._v("=")]),e("span",{staticClass:"mord mathit"},[t._v("s")]),e("span",{staticClass:"mord mathit"},[t._v("o")]),e("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),e("span",{staticClass:"mord mathit"},[t._v("t")]),e("span",{staticClass:"mord mathit"},[t._v("m")]),e("span",{staticClass:"mord mathit"},[t._v("a")]),e("span",{staticClass:"mord mathit"},[t._v("x")]),e("span",{staticClass:"mopen"},[t._v("(")]),e("span",{staticClass:"mord reset-textstyle displaystyle textstyle uncramped"},[e("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),e("span",{staticClass:"mfrac"},[e("span",{staticClass:"vlist"},[e("span",{staticStyle:{top:"0.7472200000000002em"}},[e("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[e("span",{staticStyle:{"font-size":"1em"}},[t._v("​")])]),e("span",{staticClass:"reset-textstyle textstyle cramped"},[e("span",{staticClass:"mord textstyle cramped"},[e("span",{staticClass:"sqrt mord"},[e("span",{staticClass:"sqrt-sign",staticStyle:{top:"-0.017220000000000013em"}},[e("span",{staticClass:"style-wrap reset-textstyle textstyle uncramped"},[t._v("√")])]),e("span",{staticClass:"vlist"},[e("span",{staticStyle:{top:"0em"}},[e("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[e("span",{staticStyle:{"font-size":"1em"}},[t._v("​")])]),e("span",{staticClass:"mord textstyle cramped"},[e("span",{staticClass:"mord"},[e("span",{staticClass:"mord mathit"},[t._v("d")]),e("span",{staticClass:"vlist"},[e("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[e("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[e("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),e("span",{staticClass:"reset-textstyle scriptstyle cramped"},[e("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")])])]),e("span",{staticClass:"baseline-fix"},[e("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[e("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])]),e("span",{staticStyle:{top:"-0.77722em"}},[e("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[e("span",{staticStyle:{"font-size":"1em"}},[t._v("​")])]),e("span",{staticClass:"reset-textstyle textstyle uncramped sqrt-line"})]),e("span",{staticClass:"baseline-fix"},[e("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[e("span",{staticStyle:{"font-size":"1em"}},[t._v("​")])]),t._v("​")])])])])])]),e("span",{staticStyle:{top:"-0.22999999999999998em"}},[e("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[e("span",{staticStyle:{"font-size":"1em"}},[t._v("​")])]),e("span",{staticClass:"reset-textstyle textstyle uncramped frac-line"})]),e("span",{staticStyle:{top:"-0.677em"}},[e("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[e("span",{staticStyle:{"font-size":"1em"}},[t._v("​")])]),e("span",{staticClass:"reset-textstyle textstyle uncramped"},[e("span",{staticClass:"mord textstyle uncramped"},[e("span",{staticClass:"mord"},[e("span",{staticClass:"mord mathit"},[t._v("Q")]),e("span",{staticClass:"vlist"},[e("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[e("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[e("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),e("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[e("span",{staticClass:"mord scriptstyle uncramped"},[e("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[t._v("T")])])])]),e("span",{staticClass:"baseline-fix"},[e("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[e("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),e("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07153em"}},[t._v("K")])])])]),e("span",{staticClass:"baseline-fix"},[e("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[e("span",{staticStyle:{"font-size":"1em"}},[t._v("​")])]),t._v("​")])])]),e("span",{staticClass:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})]),e("span",{staticClass:"mclose"},[t._v(")")]),e("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")])])])])])]),t._v(" "),e("p",[e("span",{staticClass:"katex"},[e("span",{staticClass:"katex-mathml"},[e("math",[e("semantics",[e("mrow",[e("mi",[t._v("Q")])],1),e("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("Q")])],1)],1)],1),e("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[e("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),e("span",{staticClass:"strut bottom",staticStyle:{height:"0.8777699999999999em","vertical-align":"-0.19444em"}}),e("span",{staticClass:"base textstyle uncramped"},[e("span",{staticClass:"mord mathit"},[t._v("Q")])])])]),t._v("和"),e("span",{staticClass:"katex"},[e("span",{staticClass:"katex-mathml"},[e("math",[e("semantics",[e("mrow",[e("mi",[t._v("K")])],1),e("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("K")])],1)],1)],1),e("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[e("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),e("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),e("span",{staticClass:"base textstyle uncramped"},[e("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07153em"}},[t._v("K")])])])]),t._v("相乘，在维度上(L, 128) * (L, 128)^T = (L, L) 本质上**相当于计算了Q中每个token对K中每个token的相似度！**也就是说，attention的是利用token之间的相似度来定义的；之后对其进行"),e("span",{staticClass:"katex"},[e("span",{staticClass:"katex-mathml"},[e("math",[e("semantics",[e("mrow",[e("msqrt",[e("mrow",[e("msub",[e("mi",[t._v("d")]),e("mi",[t._v("k")])],1)],1)],1)],1),e("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\sqrt{d_k}")])],1)],1)],1),e("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[e("span",{staticClass:"strut",staticStyle:{height:"0.8572200000000001em"}}),e("span",{staticClass:"strut bottom",staticStyle:{height:"1.04em","vertical-align":"-0.18278em"}}),e("span",{staticClass:"base textstyle uncramped"},[e("span",{staticClass:"sqrt mord"},[e("span",{staticClass:"sqrt-sign",staticStyle:{top:"-0.017220000000000013em"}},[e("span",{staticClass:"style-wrap reset-textstyle textstyle uncramped"},[t._v("√")])]),e("span",{staticClass:"vlist"},[e("span",{staticStyle:{top:"0em"}},[e("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[e("span",{staticStyle:{"font-size":"1em"}},[t._v("​")])]),e("span",{staticClass:"mord textstyle cramped"},[e("span",{staticClass:"mord"},[e("span",{staticClass:"mord mathit"},[t._v("d")]),e("span",{staticClass:"vlist"},[e("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[e("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[e("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),e("span",{staticClass:"reset-textstyle scriptstyle cramped"},[e("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")])])]),e("span",{staticClass:"baseline-fix"},[e("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[e("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])]),e("span",{staticStyle:{top:"-0.77722em"}},[e("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[e("span",{staticStyle:{"font-size":"1em"}},[t._v("​")])]),e("span",{staticClass:"reset-textstyle textstyle uncramped sqrt-line"})]),e("span",{staticClass:"baseline-fix"},[e("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[e("span",{staticStyle:{"font-size":"1em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v("的缩放，然后进行softmax归一化，也就是每个"),e("span",{staticClass:"katex"},[e("span",{staticClass:"katex-mathml"},[e("math",[e("semantics",[e("mrow",[e("mi",[t._v("Q")])],1),e("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("Q")])],1)],1)],1),e("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[e("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),e("span",{staticClass:"strut bottom",staticStyle:{height:"0.8777699999999999em","vertical-align":"-0.19444em"}}),e("span",{staticClass:"base textstyle uncramped"},[e("span",{staticClass:"mord mathit"},[t._v("Q")])])])]),t._v("中的token对"),e("span",{staticClass:"katex"},[e("span",{staticClass:"katex-mathml"},[e("math",[e("semantics",[e("mrow",[e("mi",[t._v("K")])],1),e("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("K")])],1)],1)],1),e("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[e("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),e("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),e("span",{staticClass:"base textstyle uncramped"},[e("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07153em"}},[t._v("K")])])])]),t._v("中的全部token的attention score之和为1，同时增加了非线性；")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:a(376),width:"120%"}})]),t._v(" "),e("p",[t._v("最后attention score与"),e("span",{staticClass:"katex"},[e("span",{staticClass:"katex-mathml"},[e("math",[e("semantics",[e("mrow",[e("mi",[t._v("V")])],1),e("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("V")])],1)],1)],1),e("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[e("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),e("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),e("span",{staticClass:"base textstyle uncramped"},[e("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")])])])]),t._v("相乘，得到最终结果")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:a(377),width:"120%"}})]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SelfAttention")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nn"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\tself"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nn"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Linear"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ")]),t._v("\n\t\tself"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nn"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Linear"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tself"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nn"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Linear"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tself"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("softmax "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nn"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Softmax"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dim"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("forward")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" embeddings"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\tq "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("embeddings"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (10, 128)")]),t._v("\n\t\t\tk "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("embeddings"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (10, 128)")]),t._v("\n\t\t\tv "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("embeddings"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (10, 128)")]),t._v("\n\t\t\tattention_scores "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("matmul"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Q"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" K"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (10, 10) ")]),t._v("\n            attention_scores "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" attention_scores "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" math"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sqrt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attention_head_size"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\tattention_probs "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("softmax"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("attention_scores"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\tout "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("matmul"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("attention_probs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (10, 128)")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" out\n")])])]),e("h2",{attrs:{id:"几点注意"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#几点注意"}},[t._v("#")]),t._v(" 几点注意")]),t._v(" "),e("ol",[e("li",[t._v("可以看出，如果"),e("strong",[t._v("调换一句话中两个字的位置")]),t._v("，实际上在计算attention的时候是没有影响的，也就是attention本质上不考虑位置信息(Textcnn、LSTM这种都有位置信息)，在Bert中是用position embedding来引入位置信息")]),t._v(" "),e("li",[t._v("因为QKV都是从一个"),e("strong",[t._v("句子本身")]),t._v("得到，所以叫self-attention")]),t._v(" "),e("li",[e("strong",[t._v("为什么要在softmax之前scaled")]),t._v("?向量的点积会很大，因为如果不进行scaled，值过大，进行softmax后的梯度趋于0，会发生梯度消失(已经过实验验证)")]),t._v(" "),e("li",[e("strong",[t._v("为什么用维度"),e("span",{staticClass:"katex"},[e("span",{staticClass:"katex-mathml"},[e("math",[e("semantics",[e("mrow",[e("msub",[e("mi",[t._v("d")]),e("mi",[t._v("k")])],1)],1),e("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("d_k")])],1)],1)],1),e("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[e("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),e("span",{staticClass:"strut bottom",staticStyle:{height:"0.84444em","vertical-align":"-0.15em"}}),e("span",{staticClass:"base textstyle uncramped"},[e("span",{staticClass:"mord"},[e("span",{staticClass:"mord mathit"},[t._v("d")]),e("span",{staticClass:"vlist"},[e("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[e("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[e("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),e("span",{staticClass:"reset-textstyle scriptstyle cramped"},[e("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")])])]),e("span",{staticClass:"baseline-fix"},[e("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[e("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v("来放缩")]),t._v("？因为假设q和k是均值为0，方差为1互相独立的随机变量，那么q*k的均值是0，方差是"),e("span",{staticClass:"katex"},[e("span",{staticClass:"katex-mathml"},[e("math",[e("semantics",[e("mrow",[e("msub",[e("mi",[t._v("d")]),e("mi",[t._v("k")])],1)],1),e("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("d_k")])],1)],1)],1),e("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[e("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),e("span",{staticClass:"strut bottom",staticStyle:{height:"0.84444em","vertical-align":"-0.15em"}}),e("span",{staticClass:"base textstyle uncramped"},[e("span",{staticClass:"mord"},[e("span",{staticClass:"mord mathit"},[t._v("d")]),e("span",{staticClass:"vlist"},[e("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[e("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[e("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),e("span",{staticClass:"reset-textstyle scriptstyle cramped"},[e("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")])])]),e("span",{staticClass:"baseline-fix"},[e("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[e("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v("(可由公式推导得到)，方差越大说明点积可能取到很大，因此很自然的方法就是将方差稳定到1，因此除以"),e("span",{staticClass:"katex"},[e("span",{staticClass:"katex-mathml"},[e("math",[e("semantics",[e("mrow",[e("msub",[e("mi",[t._v("d")]),e("mi",[t._v("k")])],1)],1),e("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("d_k")])],1)],1)],1),e("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[e("span",{staticClass:"strut",staticStyle:{height:"0.69444em"}}),e("span",{staticClass:"strut bottom",staticStyle:{height:"0.84444em","vertical-align":"-0.15em"}}),e("span",{staticClass:"base textstyle uncramped"},[e("span",{staticClass:"mord"},[e("span",{staticClass:"mord mathit"},[t._v("d")]),e("span",{staticClass:"vlist"},[e("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[e("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[e("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),e("span",{staticClass:"reset-textstyle scriptstyle cramped"},[e("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")])])]),e("span",{staticClass:"baseline-fix"},[e("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[e("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])])])]),t._v(" "),e("h2",{attrs:{id:"references"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),e("p",[t._v("[1]. "),e("a",{attrs:{href:"https://arxiv.org/pdf/1706.03762.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Attention Is All You Need"),e("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);