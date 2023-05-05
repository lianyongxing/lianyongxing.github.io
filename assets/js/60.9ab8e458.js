(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{480:function(e,n,r){e.exports=r.p+"assets/img/1B7D225D-AC1C-4B8A-B076-EAE6244A1EA0.9e4e909c.png"},675:function(e,n,r){"use strict";r.r(n);var a=r(44),g=Object(a.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"logging模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logging模块"}},[e._v("#")]),e._v(" Logging模块")]),e._v(" "),a("h2",{attrs:{id:"功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能"}},[e._v("#")]),e._v(" 功能")]),e._v(" "),a("p",[e._v("Logging模块提供了编辑日志，并将日志显示、自动存储、定期清理等一系列功能")]),e._v(" "),a("p",[e._v("方便对Python程序的运行状态进行监控")]),e._v(" "),a("h2",{attrs:{id:"使用方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[e._v("#")]),e._v(" 使用方式")]),e._v(" "),a("p",[e._v("Logging模块具体使用方式有多种")]),e._v(" "),a("ul",[a("li",[e._v("通过JSON、YAML、CONF文件配置Logging模块，在主程序中导入配置进行使用")]),e._v(" "),a("li",[e._v("定义一个Logger类，在里面定义各种配置，在主程序中实例化对象进行使用")])]),e._v(" "),a("p",[e._v("第一种方式比较清晰，便于分模块定义Log")]),e._v(" "),a("p",[e._v("因此本文采用第一种方式，写一个Conf配置文件，在需要的地方直接导入使用")]),e._v(" "),a("h2",{attrs:{id:"具体实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体实现"}},[e._v("#")]),e._v(" 具体实现")]),e._v(" "),a("p",[e._v("首先定义一个python程序，在程序中导入logging模块的配置文件")]),e._v(" "),a("p",[e._v("配置文件中定义不同模块的logger对象")]),e._v(" "),a("p",[e._v("比如自己程序中有很多模块，摄像头模块、打印机模块、二维码扫描模块等等")]),e._v(" "),a("p",[e._v("就可以建立多个logger对象分别打印不同模块的日志")]),e._v(" "),a("h3",{attrs:{id:"主程序部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主程序部分"}},[e._v("#")]),e._v(" 主程序部分")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# logger.py\n\n\n# 导入logging模块\nimport logging\n# 导入logging配置模块\nimport logging.config\n\n# 导入完整的配置文件\nlogging.config.fileConfig('/home/bto/BTOTEST/BTO/config/logger.conf')\n\n# 定义第一个模块logger1，对应配置文件中的main模块\nlogger1 = logging.getLogger('main')\n\n\n# 定义第二个模块logger2，对应配置文件中的cam模块\nlogger2 = logging.getLogger('cam')\n\n\n# 定义第三个模块logger3，对应配置文件中的prt模块\nlogger3 = logging.getLogger('prt')\n")])])]),a("h3",{attrs:{id:"logger配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logger配置文件"}},[e._v("#")]),e._v(" Logger配置文件")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("##### 这部分配置所有Logger模块 #####\n\n# 这里配置有几个模块，root是默认存在的模块，main、cam、prt为自己定义的模块\n[loggers]\nkeys = root, main, cam, prt\n\n# 这里是root模块的Logger配置部分，level是log等级（通常包括Debug、Info、Error、Warning、Critical，按需配置），handlers是日志输出方式（这里是stream，下面有这个的定义）\n[logger_root]\nlevel=DEBUG\nhandlers=stream\n\n# 这里是main模块的配置部分，这里的handlers有两个输出方式，分别为main_everyday和error（下面有定义），qualname就是主程序中getLogger()中的name，propagate代表是否继承父类的配置信息“1”代表“是”、”0“代表”否“\n[logger_main]\nhandlers=main_everyday,error\nqualname=main\npropagate=0\n\n##### 这部分是handler的配置 #####\n\n# 上面用到的main_everyday以及error都在此定义\n\n\n# 这里定义了四个handler的名字\n[handlers]\nkeys=stream, error, main_everyday\n\n# 第一个handler的配置，名字要写handler_stream，class中是真正的类型（StreamHandler代表控制台输出），level是日志等级\n[handler_stream]\nclass=StreamHandler\nlevel=INFO\nformatter=form01\nargs=(sys.stderr,)\n\n# 第二个handler的配置，名字是handler_main_everyday，handlers.TimedRotatingFileHandler是日志保存为文件，可以定时清理，suffix是自动生成日志的后缀，args的参数代表存放路径、定时存放的时间单位、定时时间、最大保存文件个数，formatter代表日志打印格式，在后面有定义\n[handler_main_everyday]\nclass=handlers.TimedRotatingFileHandler\nlevel=INFO\nformatter=form01\nsuffix=“%Y-%m-%d_%H-%M.log”\nextMatch = re.compile(r\"^\\d{4}-\\d{2}-\\d{2}_\\d{2}-\\d{2}.log$\")\nargs=('main_logging.log', 's', 10, 3)\n\n[handler_error]\nclass=handlers.RotatingFileHandler\nlevel=ERROR\nformatter=form01\nargs=('error.log', 'a',10*1024*1024,5 )\n\n\n###############################################\n\n# 代表日志打印的格式\n[formatters]\nkeys=form01\n\n[formatter_form01]\nformat=[%(asctime)s][%(filename)s][line:%(lineno)d][%(levelname)s] %(message)s\ndatefmt=%a, %d %b %Y %H:%M:%S\n")])])]),a("h3",{attrs:{id:"添加"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加"}},[e._v("#")]),e._v(" 添加")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('from logger import logger1\n\n\nlogger1.info("我是一条日志～")\nlogger1.error("我是一个错误～")\n')])])]),a("p",[e._v("最后run起来")]),e._v(" "),a("p",[e._v("控制台会得到输出")]),e._v(" "),a("p",[e._v("同时生成文件～")]),e._v(" "),a("p",[a("img",{attrs:{src:r(480),alt:"9e4e909c302288c2ca15d13c6e7c4c4f"}})])])}),[],!1,null,null,null);n.default=g.exports}}]);