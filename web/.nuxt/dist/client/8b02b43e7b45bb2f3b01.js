(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{353:function(t,e,n){var content=n(356);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("511ad36b",content,!0,{sourceMap:!1})},354:function(t,e,n){var content=n(358);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("e4152168",content,!0,{sourceMap:!1})},355:function(t,e,n){"use strict";var o=n(353);n.n(o).a},356:function(t,e,n){(e=n(7)(!1)).push([t.i,".btnbox{position:relative;width:37px;height:37px;box-shadow:0 1px 3px #000;border-radius:50%;overflow:hidden}.btnbox .themeBtn{cursor:pointer;position:absolute;top:0;left:0;display:block;width:100%;height:100%;background-color:#1b1b1b;border:0;font-size:20px;color:#aaa;text-align:center;text-shadow:0 0 15px #00a1ff;box-shadow:0 3px 4px #000,inset 0 -2px 1px #000,inset 0 2px 2px hsla(0,0%,100%,.5)}.btnbox .btnclass{transition:all .5s;color:#0ff;text-shadow:0 5px 15px #0ff}",""]),t.exports=e},357:function(t,e,n){"use strict";var o=n(354);n.n(o).a},358:function(t,e,n){(e=n(7)(!1)).push([t.i,".title{padding:10px 30px;display:flex}.title>div:first-child{flex:1}.title .position-content{display:flex;align-items:center;font-size:14px;color:#aaa}.title .position-content>span{padding:0 .433333rem}.title .position-content>span a{color:#337ab7}.title .position-content div{display:flex;font-weight:700;cursor:pointer;color:#1a0dab}.title .position-content div .icon-arrow-left2{padding-right:2px;font-size:20px}.title .position-content div:hover{transition:all .5s;color:tomato}.title .newthemes{display:flex;justify-content:flex-end}",""]),t.exports=e},359:function(t,e,n){"use strict";n(136);var o={data:function(){return{themeClas:!1}},methods:{themebtn:function(){this.$emit("themebtn")}}},c=(n(355),n(4)),r={props:["componen"],components:{btn:Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"btnbox"},[e("button",{staticClass:"themeBtn icon-switch",class:{btnclass:this.$store.state.todos.themeStyle},on:{click:this.themebtn}})])}),[],!1,null,null,null).exports},data:function(){return{currentChild:0,fenlei1:""}},computed:{fenlei:function(){return""!=this.fenlei1?"搜索结果":"/category/3"==this.$route.path?"效率":this.componen?this.componen.split(" ")[0]+this.componen.split(" ")[1]:this.$route.meta.fenlei}},methods:{newTitle:function(t){this.currentChild=t,this.$emit("newcontent",t)},themebtn:function(){this.$store.commit("increment")}}},l=(n(357),Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("div",{staticClass:"position-content"},[n("span",{on:{click:function(e){return t.$router.push("/")}}},[n("a",{attrs:{href:"javascript:;"}},[t._v("首页")])]),t._v("/\n      "),n("span",{on:{click:function(e){return t.$router.push("/category/3")}}},[n("a",{attrs:{href:"javascript:;"}},[t._v("插件")])]),t._v("/\n      "),n("span",[n("a",{attrs:{href:"javascript:;"}},[t._v(" "+t._s(t.fenlei))])]),t._v(" "),-1!=t.$route.path.indexOf("detail")?n("div",{class:{textcolor:t.$store.state.todos.themeStyle},on:{click:function(e){return t.$router.back()}}},[-1!=t.$route.path.indexOf("detail")?n("span",{staticClass:"icon-arrow-left2"}):t._e(),t._v(" "),n("span",[t._v("返回")])]):t._e()]),t._v(" "),n("div",{staticClass:"newthemes"},[n("btn",{on:{themebtn:t.themebtn}})],1)])}),[],!1,null,null,null));e.a=l.exports},361:function(t,e,n){var content=n(382);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("751b6e1c",content,!0,{sourceMap:!1})},374:function(t,e,n){t.exports=n.p+"img/57e43b9.jpg"},375:function(t,e,n){t.exports=n.p+"img/daca539.jpg"},376:function(t,e,n){t.exports=n.p+"img/1be70f8.jpg"},377:function(t,e,n){t.exports=n.p+"img/1d1fd68.jpg"},378:function(t,e,n){t.exports=n.p+"img/4ce08b1.jpg"},379:function(t,e,n){t.exports=n.p+"img/01fbd9c.jpg"},380:function(t,e,n){t.exports=n.p+"img/7d5cbf3.jpg"},381:function(t,e,n){"use strict";var o=n(361);n.n(o).a},382:function(t,e,n){(e=n(7)(!1)).push([t.i,".jiaocheng{padding:10px 10%;background-color:#fff;border-radius:15px}.jiaocheng img{margin:20px 0;box-shadow:0 0 15px #777;border-radius:.5em}.jiaocheng .flextitle{display:flex;flex-direction:column;align-items:center}.jiaocheng .flextitle .jctitle{text-align:center;font-size:25px;font-weight:700;padding:13px 0}.jiaocheng .flextitle img{width:100%}",""]),t.exports=e},407:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flextitle"},[e("div",{staticClass:"jctitle"},[this._v("最全的Chrome插件安装方法! 解决 CRX_HEADER_INVALID")]),this._v(" "),e("img",{attrs:{src:n(374),alt:""}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{padding:"0 10px"}},[o("p",[t._v("近期大量用户下载或安装插件扩展时，遇到如下错误。")]),t._v(" "),o("p",[t._v("无法从该网站添加应用、扩展程序和用户脚本")]),t._v(" "),o("img",{attrs:{src:n(375),alt:""}}),t._v(" "),o("p",[t._v("或者")]),t._v(" "),o("p",{staticStyle:{"font-weight":"700",margin:"10px 0"}},[t._v("程序包无效 CRXHEADERINVALID 错误")]),t._v(" "),o("img",{attrs:{src:n(376),alt:""}}),t._v(" "),o("p",{staticStyle:{"font-weight":"700",padding:"3px 0"}},[t._v("2019/12/30 更正一下插件安装失效的原因！")]),t._v(" "),o("p",{staticStyle:{"font-weight":"700",padding:"3px 0"}},[t._v("原因是Chrome更新时，改变了头部信息打包方式！")]),t._v(" "),o("p",{staticStyle:{"font-weight":"700",padding:"3px 0"}},[t._v("导致的老版本Chrome打包的crx插件，无法直接安装在新版本Chrome中")]),t._v(" "),o("p",{staticStyle:{"font-weight":"700",padding:"3px 0"}},[t._v("举个例子,开发人员在2018年3月用chrome68把他写的插件打包成crx文件.")]),t._v(" "),o("p",{staticStyle:{"font-weight":"700",padding:"3px 0"}},[t._v("此时用户也用chrome68,一切正常安装使用.")]),t._v(" "),o("p",{staticStyle:{"font-weight":"700",padding:"3px 0"}},[t._v("等到chrome73发布的时候,头部打包方式就大改版了")]),t._v(" "),o("p",{staticStyle:{"font-weight":"700",padding:"3px 0"}},[t._v('用户再安装"chrome68打包的crx"就会出现CRX_HEADER_INVALID错误')]),t._v(" "),o("p",{staticStyle:{"font-weight":"700",padding:"3px 0"}},[t._v("这就说明这个插件不适合直接拖动安装")]),t._v(" "),o("p",{staticStyle:{"font-weight":"700",padding:"3px 0"}},[t._v("解决方法一种就是要求作者用新版的chrome73再打包一次重新发布")]),t._v(" "),o("p",{staticStyle:{"font-weight":"700",padding:"3px 0"}},[t._v("或者可以用下文会提到的方法2暴力安装或方法3商店直装来解决问题")]),t._v(" "),o("p",{staticStyle:{"font-weight":"700",padding:"3px 0"}},[t._v("补充一下:判断的方法.看收录时间")]),t._v(" "),o("p",{staticStyle:{"font-weight":"700",padding:"3px 0"}},[t._v("基本上收录这个插件的时间在2019年4月以及之前的,多半就是不能直接拖动安装的")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticStyle:{"font-size":"20px",margin:"20px 0 10px 0"}},[t._v("正文")]),t._v(" "),o("div",{staticStyle:{padding:"0 10px"}},[o("p",{staticStyle:{padding:"5px 0"}},[t._v("关于新版Chrome 安装扩展插件方法汇总（任选一种即可）")]),t._v(" "),o("p",{staticStyle:{"font-weight":"700","font-size":"17px","margin-bottom":"15px"}},[t._v("一、 拖动安装(推荐)")]),t._v(" "),o("p",{staticStyle:{"font-size":"13px"}},[t._v("（一般更新日期比较近的，基本可以适用于此方法）")]),t._v(" "),o("p",{staticStyle:{"padding-top":"15px"}},[t._v("在地址栏输入 chrome://extensions/打开 开发者模式 的开关拖动 xxx.crx 文件到Chrome中间即可")]),t._v(" "),o("p",{staticStyle:{"padding-top":"15px"}},[t._v("如下图，按住 xxxxxx.crx 拖动到chrome扩展中心")]),t._v(" "),o("img",{staticStyle:{width:"70%"},attrs:{src:n(377),alt:""}}),t._v(" "),o("p",{staticStyle:{padding:"10px 0"}},[t._v("弹出安装确认的提示框，说明操作成功，点击确定即可")]),t._v(" "),o("img",{staticStyle:{width:"70%"},attrs:{src:n(378),alt:""}}),t._v(" "),o("p",{staticStyle:{"font-weight":"700","font-size":"17px","margin-bottom":"15px"}},[t._v("二、 暴力安装")]),t._v(" "),o("p",{staticStyle:{"font-size":"13px"}},[t._v("（不太推荐此方法，如果方法1拖动安装无效的情况下，可以尝试暴力安装）")]),t._v(" "),o("p",{staticStyle:{"padding-top":"15px"}},[t._v("把下载好的xxx.crx 的扩展名改为 xxx.zip")]),t._v(" "),o("p",{staticStyle:{"padding-top":"15px"}},[t._v("在地址栏输入 chrome://extensions/打开 开发者模式 的开关拖动 xxx.zip 文件到Chrome中间即可")]),t._v(" "),o("p",{staticStyle:{"padding-top":"15px"}},[t._v("如下图，按住 xxxxxx.zip 拖动到chrome扩展中心")]),t._v(" "),o("img",{staticStyle:{width:"70%"},attrs:{src:n(379),alt:""}}),t._v(" "),o("p",{staticStyle:{padding:"10px 0"}},[t._v("安装完成后会直接看到，打开插件开关即可")]),t._v(" "),o("img",{staticStyle:{width:"70%"},attrs:{src:n(380),alt:""}}),t._v(" "),o("p",[t._v("该方法大部分情况下可以一次成功，个别时候会收到浏览器安全提醒，忽略即可")])])])}],c={head:function(){return{title:"CC插件|分享优质的chrome插件"}},components:{posiTion:n(359).a},created:function(){this.$route.meta.fenlei="最全的Chrome插件安装方法!"}},r=(n(381),n(4)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"jiaocheng",class:[{backopa:t.$store.state.todos.themeStyle},{textcolor:t.$store.state.todos.themeStyle}]},[n("posi-tion"),t._v(" "),t._m(0),t._v(" "),n("div",{staticStyle:{"font-size":"20px",margin:"20px 0 10px 0"}},[t._v("前言")]),t._v(" "),t._m(1),t._v(" "),t._m(2)],1)}),o,!1,null,null,null);e.default=component.exports}}]);