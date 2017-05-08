webpackJsonp([2,0],[function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}a(132);var n=a(3),s=o(n),r=a(154),l=o(r),i=a(153),c=o(i),u=a(118),d=o(u),p=a(139),f=o(p),m=a(141),v=o(m),_=a(140),b=o(_),g=a(144),h=o(g),x=a(143),y=o(x),w=a(142),F=o(w),S=a(73),C=o(S);s.default.use(d.default),s.default.use(l.default),s.default.use(c.default);var E=[{path:"/",component:v.default,children:[{path:"gift",component:b.default},{path:"stock",component:h.default},{path:"p2p",component:y.default}]},{path:"/home",component:v.default},{path:"/other",component:v.default},{path:"/login",meta:{auth:!1},component:F.default},{path:"*",redirect:"/login"}],k=new l.default({routes:E});k.beforeEach(function(e,t,a){var o=e.meta,n=e.path,s=o.auth,r=void 0===s||s,l=Boolean(C.default.state.user.username);return r&&!l&&"/login"!==n?a({path:"/login"}):r&&(new Date).getTime()-parseInt(C.default.state.accessTime,10)>parseInt(C.default.state.accessExpires,10)?a({path:"/login"}):a()}),new s.default({router:k,store:C.default,render:function(e){return e(f.default)}}).$mount("#app")},,,,,,,function(e,t,a){(function(t){"use strict";var o=a(184);e.exports={build:{env:a(28),index:o.resolve(t,"../dist/index.html"),assetsRoot:o.resolve(t,"../dist"),assetsSubDirectory:"static",assetsPublicPath:"/",productionSourceMap:!0,productionGzip:!1,productionGzipExtensions:["js","css"]},dev:{env:a(71),port:9e3,assetsSubDirectory:"static",assetsPublicPath:"/",proxyTable:{},cssSourceMap:!1},app:a(70)}}).call(t,"/")},,,,,,function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.USER_SIGNOUT=t.USER_SIGNIN=void 0;var n,s=a(30),r=o(s),l=a(83),i=o(l),c=a(29),u=o(c),d=a(81),p=o(d),f=a(3),m=o(f),v=t.USER_SIGNIN="USER_SIGNIN",_=t.USER_SIGNOUT="USER_SIGNOUT";t.default={state:JSON.parse(sessionStorage.getItem("user"))||{},mutations:(n={},(0,r.default)(n,v,function(e,t){sessionStorage.setItem("user",(0,p.default)(t)),(0,u.default)(e,t)}),(0,r.default)(n,_,function(e){sessionStorage.removeItem("user"),sessionStorage.removeItem("accessToken"),sessionStorage.removeItem("accessExpires"),(0,i.default)(e).forEach(function(t){return m.default.delete(e,t)})}),n),actions:{login:function(e,t){var a=e.commit;a(v,t)},logout:function(e){var t=e.commit;t(_)}}}},,,,,,,,,,,,,,,function(e,t){"use strict";e.exports={NODE_ENV:'"production"'}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";var o=a(190),n="production",s="http://127.0.0.1:8000",r="http://api.congyuandong.cn",l={testing:{api:{stocks:o.resolve(s,"stocks/"),p2ps:o.resolve(s,"p2ps/"),gifts:o.resolve(s,"gifts/?format=json"),token:o.resolve(s,"o/token/")},url:{admin:o.resolve(s,"admin")}},production:{api:{stocks:o.resolve(r,"stocks/"),p2ps:o.resolve(r,"p2ps/"),gifts:o.resolve(r,"gifts/?format=json"),token:o.resolve(r,"o/token/")},url:{admin:o.resolve(r,"admin")}}};e.exports=l[n]},function(e,t,a){"use strict";var o=a(155),n=a(28);e.exports=o(n,{NODE_ENV:'"development"'})},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={setAccessToken:function(e,t){var a=e.commit;a("ACCESS_TOKEN",t)}}},function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),s=o(n),r=a(23),l=o(r),i=a(13),c=o(i),u=a(74),d=o(u),p=a(72),f=o(p);s.default.use(l.default),t.default=new l.default.Store({state:{clientId:"jFc7bsNmTUy90qMj5F5ng9qT1R0mByS8zqGCDSHZ",clientSecret:"RyPETllWkMxoNQwdto6FXjYzrct6edrCTOCI6tdaXOOlH0wFb5qzjCNLHHqfWM07mo7VwacQyZEHLNycEhbslTS1pk4qF9RlMdza6wxID7Sb7hfpYARNiVQwM6oLluNX",accessToken:sessionStorage.getItem("accessToken")||"",accessTime:sessionStorage.getItem("accessTime")||0,accessExpires:sessionStorage.getItem("accessExpires")||36e6},mutations:d.default,actions:f.default,modules:{user:c.default}})},function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(30),s=o(n),r="ACCESS_TOKEN";t.default=(0,s.default)({},r,function(e,t){var a=(new Date).getTime();sessionStorage.setItem("accessToken",t.access_token),sessionStorage.setItem("accessTime",a),sessionStorage.setItem("accessExpires",1e3*t.expires_in),e.accessToken=t.access_token,e.accessTime=a,e.accessExpires=1e3*t.expires_in})},function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(7),s=o(n),r=s.default.app.api;t.default={name:"gift",data:function(){return{gifts:[]}},mounted:function(){var e=this;e.$http.get(r.gifts,{headers:{Authorization:"Bearer "+e.$store.state.accessToken}}).then(function(t){e.gifts=t.body})}}},function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(145),s=o(n);a(138),t.default={name:"app",components:{"header-component":s.default}}},function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(31),s=o(n),r=a(23),l=a(13),i=a(7),c=o(i),u=c.default.app.api;t.default={data:function(){var e=function(e,t,a){t||a(new Error("兄弟，这儿不能为空！")),a()};return{loginForm:{username:"",password:""},rules:{password:[{validator:e,trigger:"blur"}],username:[{validator:e,trigger:"blur"}]},showError:!1}},methods:(0,s.default)({},(0,r.mapActions)([l.USER_SIGNIN]),{submitForm:function(e){var t=this,a=this;a.$refs[e].validate(function(e){return!!e&&(a.$http.post(u.token,{grant_type:"password",client_id:a.$store.state.clientId,client_secret:a.$store.state.clientSecret,username:a.loginForm.username,password:a.loginForm.password}).then(function(e){a.$store.dispatch("setAccessToken",e.body),a.$store.dispatch("login",{username:a.loginForm.username}),t.$router.replace({path:"/"})},function(){a.showError=!0}),!0)})},resetForm:function(e){this.$refs[e].resetFields()}})}},function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(7),s=o(n),r=s.default.app.api;t.default={data:function(){return{p2ps:[]}},mounted:function(){var e=this;e.$http.get(r.p2ps,{headers:{Authorization:"Bearer "+e.$store.state.accessToken}}).then(function(t){e.p2ps=t.body.map(function(e){e.amount=parseFloat(e.amount);var t=Math.max(Math.min((new Date).getTime(),new Date(e.end).getTime())-new Date(e.start).getTime(),0);return t=Math.floor(t/864e5),e.price=(e.amount*parseFloat(e.rate)*t/100/365).toFixed(2),e.rate=parseFloat(e.rate)+"%",e.total=(parseFloat(e.price)+parseFloat(e.coupon)).toFixed(2),e})})}}},function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(7),s=o(n),r=s.default.app.api;t.default={data:function(){return{stocks:[],loading:!0}},mounted:function(){this.pull(),setInterval(this.pull,5e3)},methods:{tableRowClassName:function(e){return e.increase>=0?"red":"green"},color:function(e){return parseFloat(e)>=0?"red":"green"},pull:function(){var e=this;e.$http.get(r.stocks,{headers:{Authorization:"Bearer "+e.$store.state.accessToken}}).then(function(t){e.stocks=t.body.data,e.today=t.body.today,e.total=t.body.total,e.time=t.body.time,e.loading=!1})}}}},function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(31),s=o(n),r=a(23),l=a(13),i=a(7),c=o(i),u=c.default.app.url;t.default={name:"header",data:function(){return{admin:u.admin}},methods:(0,s.default)({},(0,r.mapActions)([l.USER_SIGNOUT]),{select:function(e){"2-2"===e&&(this.$store.dispatch("logout"),this.$router.replace({path:"/login"}))}})}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,a){var o,n,s=a(149);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(n=o=o.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,e.exports=o},function(e,t,a){var o,n;o=a(75);var s=a(148);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(n=o=o.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,e.exports=o},function(e,t,a){var o,n;a(135),o=a(76);var s=a(150);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(n=o=o.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,e.exports=o},function(e,t,a){var o,n;a(136),o=a(77);var s=a(151);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(n=o=o.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,e.exports=o},function(e,t,a){var o,n;a(134),o=a(78);var s=a(147);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(n=o=o.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,e.exports=o},function(e,t,a){var o,n;a(137),o=a(79);var s=a(152);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(n=o=o.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,e.exports=o},function(e,t,a){var o,n;a(133),o=a(80);var s=a(146);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(n=o=o.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,e.exports=o},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("el-row",{staticClass:"header"},[t("el-menu",{staticClass:"el-menu-demo",attrs:{theme:"dark","default-active":"1",mode:"horizontal"},on:{select:e.select}},[t("el-menu-item",{staticClass:"title",attrs:{index:"1"}},[e._v("❤ 个人中心")]),e._v(" "),t("router-link",{staticClass:"el-menu-item",attrs:{to:"/home"}},[e._v("首页")]),e._v(" "),t("el-submenu",{attrs:{index:"2"}},[t("template",{slot:"title"},[e._v("设置")]),e._v(" "),t("el-menu-item",{attrs:{index:"2-1"}},[t("a",{attrs:{href:e.admin,target:"_blank"}},[e._v("控制台")])]),e._v(" "),t("el-menu-item",{attrs:{index:"2-2"}},[e._v("登出")])],2)],1),e._v(" "),t("div",{staticClass:"line"})],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"stock"},[t("el-row",[t("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"",data:e.p2ps}},[t("el-table-column",{attrs:{prop:"name",label:"名称"}}),e._v(" "),t("el-table-column",{attrs:{prop:"amount",label:"本金"}}),e._v(" "),t("el-table-column",{attrs:{prop:"rate",label:"预期年华率"}}),e._v(" "),t("el-table-column",{attrs:{prop:"start",label:"开始时间"}}),e._v(" "),t("el-table-column",{attrs:{prop:"end",label:"结束时间"}}),e._v(" "),t("el-table-column",{attrs:{prop:"price",label:"已盈利"}}),e._v(" "),t("el-table-column",{attrs:{prop:"coupon",label:"优惠券"}}),e._v(" "),t("el-table-column",{attrs:{prop:"total",label:"总盈利"}})],1)],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.gifts,stripe:""}},[t("el-table-column",{attrs:{prop:"name",label:"姓名"}}),e._v(" "),t("el-table-column",{attrs:{prop:"price",label:"礼金"}}),e._v(" "),t("el-table-column",{attrs:{prop:"date",label:"时间"}})],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"main"},[t("router-view",{attrs:{"keep-alive":"",transition:"fade","transition-mode":"out-in"}})],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{attrs:{id:"content"}},[t("header-component"),e._v(" "),t("el-row",{staticClass:"sub_container",attrs:{gutter:10}},[t("el-col",{staticClass:"menu",attrs:{span:4}},[t("el-menu",{staticClass:"menu",attrs:{"default-active":"1",router:""}},[t("el-menu-item",{attrs:{index:"/"}},[t("i",{staticClass:"el-icon-star-on"}),e._v("首页")]),e._v(" "),t("el-submenu",{attrs:{index:"2"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-star-on"}),e._v("金融")]),e._v(" "),t("el-menu-item",{attrs:{index:"/stock"}},[e._v("股票")]),e._v(" "),t("el-menu-item",{attrs:{index:"/p2p"}},[e._v("P2P")]),e._v(" "),t("el-menu-item",{attrs:{index:"/coin"}},[e._v("BitCoin")])],2),e._v(" "),t("el-submenu",{attrs:{index:"3"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-star-on"}),e._v("其他")]),e._v(" "),t("el-menu-item",{attrs:{index:"/gift"}},[e._v("礼金")])],2)],1)],1),e._v(" "),t("el-col",{staticClass:"right_content",attrs:{span:20}},[t("router-view")],1)],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("el-row",{staticClass:"login",attrs:{type:"flex",justify:"center"}},[t("el-card",[e.showError?t("el-alert",{attrs:{title:"用户名或密码错误",type:"error"}}):e._e(),e._v(" "),t("el-form",{ref:"loginForm",attrs:{model:e.loginForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{directives:[{name:"model",rawName:"v-model",value:e.loginForm.username,expression:"loginForm.username"}],attrs:{type:"text","auto-complete":"off"},domProps:{value:e.loginForm.username},on:{input:function(t){e.loginForm.username=t}}})],1),e._v(" "),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{directives:[{name:"model",rawName:"v-model",value:e.loginForm.password,expression:"loginForm.password"}],attrs:{type:"password","auto-complete":"off"},domProps:{value:e.loginForm.password},on:{input:function(t){e.loginForm.password=t}}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("loginForm")}}},[e._v("登录")]),e._v(" "),t("el-button",{on:{click:function(t){e.resetForm("loginForm")}}},[e._v("重置")])],1)],1)],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"stock"},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:8}},[t("el-card",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"box-card"},[t("span",{staticClass:"tip"},[e._v("TODAY")]),e._v(" "),t("p",{class:e.color(e.today),domProps:{textContent:e._s(e.today)}})])],1),e._v(" "),t("el-col",{attrs:{span:8}},[t("el-card",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"box-card"},[t("span",{staticClass:"tip"},[e._v("TOTAL")]),e._v(" "),t("p",{class:e.color(e.total),domProps:{textContent:e._s(e.total)}})])],1),e._v(" "),t("el-col",{attrs:{span:8}},[t("el-card",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"box-card"},[t("span",{staticClass:"tip"},[e._v("TIME")]),e._v(" "),t("p",{domProps:{textContent:e._s(e.time)}})])],1)],1),e._v(" "),e._l(e.stocks,function(a){return t("el-card",[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:8}},[t("el-card",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"box-card"},[t("span",{staticClass:"tip"},[e._v("TODAY")]),e._v(" "),t("p",{class:e.color(a.today),domProps:{textContent:e._s(a.today)}})])],1),e._v(" "),t("el-col",{attrs:{span:8}},[t("el-card",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"box-card"},[t("span",{staticClass:"tip"},[e._v("TOTAL")]),e._v(" "),t("p",{class:e.color(a.total),domProps:{textContent:e._s(a.total)}})])],1),e._v(" "),t("el-col",{attrs:{span:8}},[t("el-card",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"box-card"},[t("span",{staticClass:"tip"},[e._v("NAME")]),e._v(" "),t("p",{domProps:{textContent:e._s(a.first)}})])],1)],1),e._v(" "),t("el-row",[t("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"",data:a.stocks,"row-class-name":e.tableRowClassName}},[t("el-table-column",{attrs:{prop:"name",label:"名称"}}),e._v(" "),t("el-table-column",{attrs:{prop:"now",label:"最新价"}}),e._v(" "),t("el-table-column",{attrs:{prop:"increase",label:"涨跌额"}}),e._v(" "),t("el-table-column",{attrs:{prop:"increasePer",label:"涨跌幅"}}),e._v(" "),t("el-table-column",{attrs:{prop:"highest",label:"最高"}}),e._v(" "),t("el-table-column",{attrs:{prop:"lowest",label:"最低"}}),e._v(" "),t("el-table-column",{attrs:{prop:"price",label:"买入价"}}),e._v(" "),t("el-table-column",{attrs:{prop:"amount",label:"持有"}}),e._v(" "),t("el-table-column",{attrs:{prop:"buying",label:"买入价格"}}),e._v(" "),t("el-table-column",{attrs:{prop:"value",label:"价值"}}),e._v(" "),t("el-table-column",{attrs:{prop:"todayEarning",label:"当日盈亏"}}),e._v(" "),t("el-table-column",{attrs:{label:"累计盈亏"},scopedSlots:{default:function(a){return[t("div",{class:e.color(a.row.earning)},[e._v(e._s(a.row.earning))])]}}})],1)],1)],1)})],2)},staticRenderFns:[]}}]);
//# sourceMappingURL=app.11da78001d89664912af.js.map