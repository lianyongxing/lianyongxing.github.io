(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{431:function(t,n,e){t.exports=e.p+"assets/img/Untitled.c7d0f6aa.png"},662:function(t,n,e){"use strict";e.r(n);var a=e(44),s=Object(a.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"instruct-gpt：training-language-models-to-follow-instructions-with-human-feedback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instruct-gpt：training-language-models-to-follow-instructions-with-human-feedback"}},[t._v("#")]),t._v(" Instruct GPT：Training language models to follow instructions with human feedback")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:e(431),width:"100%"}})]),t._v(" "),a("p",[t._v("图1. RLHF")]),t._v(" "),a("ol",[a("li",[t._v("Ouyang L, Wu J, Jiang X, et al. Training language models to follow instructions with human feedback[J]. Advances in Neural Information Processing Systems, 2022, 35: 27730-27744.\n"),a("ol",[a("li",[t._v("一般都是喂很多数据，大力出奇迹，但是对模型的控制力很差，比如想让模型学习某种知识，但是模型死活不会，其次是安全性问题，模型什么都说；因此本文的主要思想就是："),a("strong",[t._v("再标一点数据去微调模型；")])]),t._v(" "),a("li",[t._v("具体做法是首先标了一些问题，然后人工标出问题的答案；之后通过模型输出很多种答案，然后对不同的答案进行排序，做了一个排序的数据集，用强化学习去微调模型")]),t._v(" "),a("li",[t._v("主要步骤如下\n"),a("ol",[a("li",[t._v("step1就是给一个问题，让人标注答案，去微调模型，就是有监督的微调；")]),t._v(" "),a("li",[t._v("step2是对每个问题，模型生成不同答案，然后由人对这些答案的好坏进行排序；再训练一个reward model，输入是问题+答案，输出是分数，目的是使得输出分数的排序 跟人排序一致；")]),t._v(" "),a("li",[t._v("step3就是再去用step1产生的微调模型做一个强化学习的排序模型微调模型，使得输出的答案给到reward model，得到更高的答案，做反馈，优化模型；")])])])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/blog/rlhf/rlhf.png",alt:"图2. 整体架构"}})]),t._v(" "),a("p",[t._v("图2. 整体架构")])])}),[],!1,null,null,null);n.default=s.exports}}]);