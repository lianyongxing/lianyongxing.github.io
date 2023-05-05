(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{393:function(t,s,n){t.exports=n.p+"assets/img/ccos.403846fc.png"},394:function(t,s,n){t.exports=n.p+"assets/img/emb1.ca832c38.png"},644:function(t,s,n){"use strict";n.r(s);var a=n(44),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"embedding的各向同-异-性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#embedding的各向同-异-性"}},[t._v("#")]),t._v(" Embedding的各向同(异)性")]),t._v(" "),a("p",[a("strong",[t._v("各向同性")]),t._v("，在物理上指的是物体在各个方向上的性质相同，比如一个完美的铁圆球，在各个方向上的密度、硬度等等是一样的；各向异性就是在各个方向上性质不同")]),t._v(" "),a("p",[t._v("在Embedding上，各向同性就是向量空间上分布与方向无关，是一致的，而"),a("strong",[t._v("各向异性")]),t._v("("),a("strong",[t._v("Anisotropic")]),t._v(")就是在各个方向上的分布不同")]),t._v(" "),a("p",[t._v("一个好的Embedding表示应该满足两点"),a("strong",[t._v("Alignment")]),t._v("和"),a("strong",[t._v("uniformity")]),t._v("，"),a("strong",[t._v("Alignment")]),t._v("表示相似样本间具有相似特征，"),a("strong",[t._v("uniformity")]),t._v("表示向量在空间上应该尽量均匀，最好是各向同性的，这样Embedding就可以最大利用向量空间，包含信息最大")]),t._v(" "),a("p",[t._v("参考： "),a("a",{attrs:{href:"https://arxiv.org/pdf/2005.10242.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://arxiv.org/pdf/2005.10242.pdf"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("研究人员通过大量实验发现Transformer结构训练得到的Embedding往往是各向异性的，因此不进行fine-tune的预训练Bert/Gpt/MT5等等直接计算相似文本度（比如cos）往往效果很差，因为各个分量是不正交的（各向异性的），而余弦相似度公式的前提是基底为正交基")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:n(393),width:"40%"}})]),t._v("\n解决Embedding的各向异性主要有以下几种方式\n"),a("h2",{attrs:{id:"_1-将embedding映射为各向同性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-将embedding映射为各向同性"}},[t._v("#")]),t._v(" 1. 将Embedding映射为各向同性")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:n(394),width:"70%"}})]),t._v(" "),a("p",[a("a",{attrs:{href:"https://arxiv.org/pdf/2011.05864.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bert-flow"),a("OutboundLink")],1),t._v("的主要工作就是将原来的Embedding分布映射为高斯分布，标准高斯分布就是各向同性的；")]),t._v(" "),a("p",[t._v("类似的有Bert-whitening，将embedding进行svd分解，旋转缩放后得到标准正太分布")]),t._v(" "),a("p",[t._v("参考："),a("a",{attrs:{href:"https://kexue.fm/archives/8069",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://kexue.fm/archives/8069"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ****************** 苏神代码 ****************** #")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单纯白化")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compute_kernel_bias")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vecs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""计算kernel和bias\n    vecs.shape = [num_samples, embedding_size]，\n    最后的变换：y = (x + bias).dot(kernel)\n    """')]),t._v("\n    mu "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vecs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("axis"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" keepdims"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    cov "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cov"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vecs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vh "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("linalg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("svd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cov"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    W "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("diag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sqrt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" W"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("mu\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 白化+降维")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compute_kernel_bias")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vecs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n_components"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""计算kernel和bias\n    vecs.shape = [num_samples, embedding_size]，\n    最后的变换：y = (x + bias).dot(kernel)\n    """')]),t._v("\n    mu "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vecs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("axis"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" keepdims"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    cov "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cov"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vecs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vh "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("linalg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("svd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cov"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    W "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("diag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sqrt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" W"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("n_components"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("mu\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 应用变换，然后标准化")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("transform_and_normalize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vecs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" kernel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bias"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kernel "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v(" bias "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        vecs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vecs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" bias"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kernel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" vecs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vecs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("axis"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" keepdims"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),t._v("\n")])])]),a("h2",{attrs:{id:"_2-对比学习blabla"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-对比学习blabla"}},[t._v("#")]),t._v(" 2. 对比学习blabla")]),t._v(" "),a("p",[t._v("详见："),a("a",{attrs:{href:"/blog/NLP/Contrastive%20Learning",title:"Contrastive Learning"}},[t._v("Contrastive Learning")])]),t._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),a("p",[t._v("[1]. "),a("a",{attrs:{href:"https://arxiv.org/pdf/2011.05864.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("On the Sentence Embeddings from Pre-trained Language Models"),a("OutboundLink")],1),a("br"),t._v("\n[2]. "),a("a",{attrs:{href:"https://arxiv.org/pdf/2011.05864.pdfhttps://arxiv.org/abs/2005.10242",target:"_blank",rel:"noopener noreferrer"}},[t._v("Understanding Contrastive Representation Learning through Alignment and Uniformity on the Hypersphere"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);