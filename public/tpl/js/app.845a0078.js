(function(e){function t(t){for(var r,u,a=t[0],i=t[1],l=t[2],d=0,p=[];d<a.length;d++)u=a[d],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&p.push(c[u][0]),c[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},c={app:0},o=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var s=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},2874:function(e,t,n){},"2f93":function(e,t,n){"use strict";n("4016")},4016:function(e,t,n){},5490:function(e,t,n){"use strict";n("2874")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=n("6c02"),o={setup:function(e){var t=Object(c["d"])();return window.rubick.onPluginEnter((function(e){var n=e.code,r=window.exports[n];t.push({name:r.mode,params:{code:n}})})),function(e,t){var n=Object(r["v"])("router-view");return Object(r["q"])(),Object(r["d"])(n)}}};n("5490");const u=o;var a=u,i=(n("ac1f"),n("841c"),n("a4d3"),n("e01a"),{class:"list-container"}),l={class:"options"},s=["onClick"],d=["src"],p={class:"content"},f={class:"title"},v={class:"desc"},b=Object(r["g"])({setup:function(e){var t=window.require("electron"),n=t.ipcRenderer,o=Object(c["c"])(),u=60,a=10,b=60,O=o.params.code,j=window.exports[O];window.rubick.setExpendHeight(b);var w=Object(r["t"])([]);j.args.enter&&j.args.enter({code:O,type:"",payload:[]},(function(e){e.value=e}));var h=Object(r["t"])(0);n.on("changeCurrent",(function(e,t){h.value+t>w.value.length-1||w.value+t<0||(h.value=h.value+t)})),window.rubick.setSubInput((function(e){var t=e.text;j.args.search&&j.args.search({code:O,type:"",payload:[]},t,(function(e){w.value=e||[];var t=w.value.length>a?a*u:u*w.value.length;window.rubick.setExpendHeight(b+t)}))}),"搜索");var g=function(e){j.args.select&&j.args.select({code:O,type:"",payload:[]},e)},y=function(e){if("Enter"===e.code)return g(w.value[h.value]);var t=0;"ArrowDown"===e.code&&(t=1),"ArrowUp"===e.code&&(t=-1),w.value.length&&(h.value+t>w.value.length-1||h.value+t<0||(h.value=h.value+t))};return window.addEventListener("keydown",y),Object(r["n"])((function(){window.removeEventListener("keydown",y)})),function(e,t){return Object(r["q"])(),Object(r["e"])("div",i,[Object(r["B"])(Object(r["f"])("div",l,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["u"])(w.value,(function(e,t){return Object(r["q"])(),Object(r["e"])("div",{key:t,class:Object(r["l"])(h.value===t?"active op-item":"op-item"),onClick:function(t){return g(e)}},[Object(r["f"])("img",{class:"icon",src:e.icon},null,8,d),Object(r["f"])("div",p,[Object(r["f"])("div",f,Object(r["x"])(e.title),1),Object(r["f"])("div",v,Object(r["x"])(decodeURIComponent(e.description)),1)])],10,s)})),128))],512),[[r["z"],!!(w.value||[]).length]])])}}});n("2f93");const O=b;var j=O,w={class:"home"};function h(e,t){return Object(r["q"])(),Object(r["e"])("div",w)}var g=n("6b0d"),y=n.n(g);const m={},x=y()(m,[["render",h]]);var k=x,P=[{path:"/list",name:"list",component:j},{path:"/doc",name:"doc",component:k}],q=Object(c["a"])({history:Object(c["b"])(),routes:P}),E=q,S=n("5502"),_=Object(S["a"])({state:{},mutations:{},actions:{},modules:{}});Object(r["c"])(a).use(_).use(E).mount("#app")}});
//# sourceMappingURL=app.845a0078.js.map