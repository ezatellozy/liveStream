(function(e){function t(t){for(var r,a,i=t[0],u=t[1],c=t[2],l=0,m=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&m.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(m.length)m.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(s.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},s=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2370ca2e":"933cec6d"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-2370ca2e":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2370ca2e":"b28a6554"}[e]+".css",o=u.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var m=document.getElementsByTagName("style");for(i=0;i<m.length;i++){c=m[i],l=c.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[e],d.parentNode.removeChild(d),n(s)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var m=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",m.name="ChunkLoadError",m.type=r,m.request=a,n[1](m)}o[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/liveStream/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var m=0;m<c.length;m++)t(c[m]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0405":function(e,t,n){},"3a5e":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loading"},[n("span")])}],o={name:"loading"},s=o,i=(n("53a2"),n("2877")),u=Object(i["a"])(s,r,a,!1,null,null,null);t["a"]=u.exports},"46a3":function(e,t,n){},"53a2":function(e,t,n){"use strict";n("0405")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.$store.state.username?n("categories"):e._e(),n("router-view")],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home",staticStyle:{"padding-top":"50px"}},[e.loading?n("loading"):e._e(),n("div",{staticClass:"category"},[n("h3",{on:{click:e.fetchCategories}},[e._v("Select category:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?n:n[0]},function(t){return e.change(t)}]}},[n("option",{attrs:{value:"1",disabled:""}},[e._v("Select category")]),e._l(e.categories,(function(t){return n("option",{key:t.category_id,domProps:{value:t.category_id}},[e._v(" "+e._s(t.category_name)+" ")])}))],2)])],1)},i=[],u=(n("99af"),n("3a5e")),c={components:{Loading:u["a"]},name:"Home",mounted:function(){this.fetchCategories()},data:function(){return{categories:[],selected:1,loading:!1}},methods:{fetchCategories:function(){var e=this;this.loading=!0,this.axios.get("http://magic-tv.live:2095/player_api.php?username=".concat(this.username,"&password=").concat(this.password,"&action=get_live_categories")).then((function(t){e.categories=[],e.loading=!1,e.categories=t.data})).catch((function(e){console.log(e)}))},change:function(e){this.$router.push({path:"/live/".concat(e.target.value)})}},computed:{username:function(){return sessionStorage.getItem("username")},password:function(){return sessionStorage.getItem("password")}}},l=c,m=(n("99c7"),n("2877")),d=Object(m["a"])(l,s,i,!1,null,"556133a4",null),p=d.exports,f={components:{Categories:p}},h=f,g=(n("034f"),Object(m["a"])(h,a,o,!1,null,null,null)),v=g.exports,y=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"})},_=[],w={name:"Home"},S=w,E=Object(m["a"])(S,b,_,!1,null,null,null),x=E.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"User Name"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e.err?n("p",[e._v(e._s(e.msgErr))]):e._e(),n("button",[e._v("Submit")])])])},j=[],C={data:function(){return{username:"hmaser",password:"hmaserv1987",err:!1,msgErr:null}},methods:{login:function(){"hmaser"==this.username&&"hmaserv1987"==this.password?(sessionStorage.setItem("username",this.username),sessionStorage.setItem("password",this.password),this.$store.commit("getUserName",sessionStorage.getItem("username")),this.$router.push({name:"Home"}),this.err=!1,this.msgErr=""):(this.err=!0,this.msgErr="Please Input valid values")}}},P=C,k=(n("d6db"),Object(m["a"])(P,O,j,!1,null,null,null)),N=k.exports;r["a"].use(y["a"]);var $=[{path:"/",name:"Home",component:x,meta:{auth:!0}},{path:"/live/:id",name:"Live",component:function(){return n.e("chunk-2370ca2e").then(n.bind(null,"d6fc"))},meta:{auth:!0}},{path:"/login",name:"Login",component:N}],I=new y["a"]({mode:"history",base:"/liveStream/",routes:$});I.beforeEach((function(e,t,n){if(e.matched.some((function(e){return e.meta.auth}))){if(sessionStorage.getItem("username"))return void n();n("/login")}else n()}));var L=I,T=n("2f62");r["a"].use(T["a"]);var A=new T["a"].Store({state:{username:sessionStorage.getItem("username")||""},mutations:{getUserName:function(e,t){e.username=t}},actions:{},modules:{}}),H=n("bc3a"),M=n.n(H),U=n("130e");r["a"].use(U["a"],M.a),r["a"].config.productionTip=!1,new r["a"]({router:L,store:A,render:function(e){return e(v)}}).$mount("#app")},"85ec":function(e,t,n){},"99c7":function(e,t,n){"use strict";n("46a3")},d6db:function(e,t,n){"use strict";n("e67a")},e67a:function(e,t,n){}});
//# sourceMappingURL=app.9617c6eb.js.map