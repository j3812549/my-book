webpackJsonp([10],{"3J7i":function(e,t){},IcnI:function(e,t,n){"use strict";var r=n("7+uW"),o=n("NYxO"),a={token:function(e){return e.user.token},status:function(e){return e.user.userStatus}},u=n("//Fk"),i=n.n(u),c=n("vLgD");var s=n("TIfe"),l={state:{token:Object(s.getToken)(),userid:"",username:"",userEmail:"",userImg:"",userRoot:"",userCollect:"",userFensi:"",userGuanZhu:"",userStatus:"",userTongZhi:"",userHistory:""},mutations:{SET_TOKEN:function(e,t){e.token=t},SET_USERID:function(e,t){e.userid=t},SET_USERNAME:function(e,t){e.username=t},SET_USEREMAIL:function(e,t){e.userEmail=t},SET_USERIMG:function(e,t){e.userImg=t},SET_USERROOT:function(e,t){e.userRoot=t},SET_USERCOLLECT:function(e,t){e.userCollect=t},SET_USERFENSI:function(e,t){e.userFensi=t},SET_USERGUANZHU:function(e,t){e.userGuanZhu=t},SET_USERSTATUS:function(e,t){e.userStatus=t},SET_USERTONGZHI:function(e,t){e.userTongZhi=t},SET_USERHISTORY:function(e,t){e.userHistory=t}},actions:{RegisterUser:function(e,t){e.commit;return new i.a(function(e){var n,r;(n=t,r=n,Object(c.a)({method:"post",url:"/api/newuser",data:r})).then(function(t){e(t)})})},LoginUser:function(e,t){var n=e.commit;return new i.a(function(e){var r,o;(r=t,o=r,Object(c.a)({method:"post",url:"/api/loginuser",data:o})).then(function(t){var r=t.data;Object(s.setToken)(r.token),n("SET_TOKEN",r.token),e(t)})})},GetUser:function(e){var t=e.commit;return new i.a(function(e){Object(c.a)({method:"post",url:"/api/getuser"}).then(function(n){var r=n.data;t("SET_USERID",r.data.userid),t("SET_USERNAME",r.data.username),t("SET_USERIMG",r.data.userImg),t("SET_USEREMAIL",r.data.userEmail),t("SET_USERROOT",r.data.userRoot),t("SET_USERCOLLECT",r.data.userCollect),t("SET_USERFENSI",r.data.userFensi),t("SET_USERGUANZHU",r.data.userGuanZhu),t("SET_USERSTATUS",r.data.userStatus),t("SET_USERTONGZHI",r.data.userTongZhi),t("SET_USERHISTORY",r.data.userHistory),e(n)})})}}};r.a.use(o.a);var m=new o.a.Store({modules:{user:l},getters:a});t.a=m},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},o,!1,function(e){n("y4Tc")},"data-v-e8df0bba",null).exports,u=n("IcnI"),i=n("/ocq");r.a.use(i.a);var c=[{path:"/home/index",name:"Index",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"Fw7Z"))},meta:{title:"首页",power:"首页"}},{path:"/home/article/:id",name:"Article",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"DKbh"))},meta:{title:"文章",power:"文章"}},{path:"/home/addarticle",name:"AddArticle",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"tuqo"))},meta:{title:"新增文章",power:"新增文章"}},{path:"/home/login",name:"Login",component:function(){return n.e(7).then(n.bind(null,"fAfb"))},meta:{title:"登入",power:"登入"}},{path:"/home/register",name:"Register",component:function(){return n.e(6).then(n.bind(null,"2WH3"))},meta:{title:"注册",power:"注册"}},{path:"/home/email",name:"Email",component:function(){return n.e(5).then(n.bind(null,"Xcj1"))},meta:{title:"邮箱发送",power:"邮箱发送"}}],s=new i.a({routes:[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:function(){return n.e(4).then(n.bind(null,"lyB/"))},redirect:"home/index",children:c},{path:"/err",name:"ERR",component:function(){return n.e(8).then(n.bind(null,"rwG1"))}}]}),l=n("TIfe");s.beforeEach(function(e,t,n){if(Object(l.getToken)()){if(u.a.state.user.username||u.a.dispatch("GetUser"),0===u.a.state.user.userStatus&&"/home/email"!==e.path)return void n("/home/email");n()}else n()}),s.afterEach(function(){});n("3J7i");r.a.config.productionTip=!1,new r.a({el:"#app",store:u.a,router:s,components:{App:a},template:"<App/>"})},TIfe:function(e,t){e.exports={getToken:function(){return localStorage.getItem("tiancai9")},setToken:function(e){localStorage.setItem("tiancai9",e)},removeToken:function(){localStorage.removeItem("tiancai9")}}},vLgD:function(e,t,n){"use strict";var r=n("//Fk"),o=n.n(r),a=n("mtWM"),u=n.n(a),i=n("IcnI"),c=n("TIfe"),s=(n.n(c),u.a.create({baseURL:Object({NODE_ENV:"production"}).BASE_API,timeout:5e3}));s.interceptors.request.use(function(e){var t=e.url;return t=t.substring(Object({NODE_ENV:"production"}).BASE_API,t.length),-1===["数组遍历bug预留位","/api/findarticletype","/api/onefindarticle","/api/findarticle","/api/loginuser","/api/newuser","/api/getimg"].indexOf(t)&&i.a.getters.token&&(e.headers.tiancai9=Object(c.getToken)()),e},function(e){console.log(e),o.a.reject(e)}),s.interceptors.response.use(function(e){return e},function(e){return console.log("err"+e),o.a.reject(e)}),t.a=s},y4Tc:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.82e72ad09e177ae52ab1.js.map