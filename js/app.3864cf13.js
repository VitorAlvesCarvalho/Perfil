(function(){"use strict";var e={6284:function(e,t,n){var s=n(6369),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],r=n(1001),a={},c=(0,r.Z)(a,o,i,!1,null,null,null),l=c.exports,u=n(5431);(0,u.z)("/Perfil/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var f=n(2631),p=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[e._m(0),t("div",{staticClass:"home__apresentation"},[t("div",[t("span",[e._v(e._s(e.apresentationName))]),e.isFullName?e._e():t("span",{staticClass:"home__typing"})]),t("div",[t("span",[e._v(e._s(e.apresentationProfession))]),e.isFullName&&!e.isFullProfession?t("span",{staticClass:"home__typing"}):e._e()])])])},h=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"home__animation"},[t("div",{staticClass:"home__stack home__stack-css"},[t("img",{attrs:{width:"100%",src:n(3153)}})]),t("div",{staticClass:"home__stack home__stack-html"},[t("img",{attrs:{width:"100%",src:n(5929)}})]),t("div",{staticClass:"home__stack home__stack-js"},[t("img",{attrs:{width:"100%",src:n(1254)}})]),t("div",{staticClass:"home__stack home__stack-vue"},[t("img",{attrs:{width:"100%",src:n(5559)}})]),t("div",[t("img",{staticClass:"home__img",attrs:{width:"90%",src:n(9493)}})])])}],m=(n(7658),{name:"HomeView",data(){return{apresentation:{name:[],profession:[]},nameSet:"Vitor Alves de Carvalho",professionSet:"Desenvolvedor front-end"}},created(){this.setApresentation()},methods:{setApresentation(){this.isFullName&&this.isFullProfession||setTimeout((()=>{this.isFullName?this.setApresentationProfession():this.setApresentationName(),this.setApresentation()}),300)},setApresentationName(){this.apresentation.name.push(this.nameSet[this.apresentation.name.length])},setApresentationProfession(){this.apresentation.profession.push(this.professionSet[this.apresentation.profession.length])}},computed:{apresentationName(){return this.apresentation.name.join("")},apresentationProfession(){return this.apresentation.profession.join("")},isFullName(){return this.apresentation.name.length===this.nameSet.length},isFullProfession(){return this.apresentation.profession.length===this.professionSet.length}}}),d=m,v=(0,r.Z)(d,p,h,!1,null,"593af0fa",null),g=v.exports;s.ZP.use(f.ZP);const _=[{path:"/",name:"home",component:g}],w=new f.ZP({mode:"history",base:"/Perfil/",routes:_});var b=w;s.ZP.config.productionTip=!1,new s.ZP({router:b,render:e=>e(l)}).$mount("#app")},3153:function(e,t,n){e.exports=n.p+"img/css.892d68fc.svg"},5929:function(e,t,n){e.exports=n.p+"img/html.1758920c.svg"},1254:function(e,t,n){e.exports=n.p+"img/javascript.6596fce0.svg"},5559:function(e,t,n){e.exports=n.p+"img/vue.68af69e9.svg"},9493:function(e,t,n){e.exports=n.p+"img/perfil.dae18721.png"}},t={};function n(s){var o=t[s];if(void 0!==o)return o.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,s,o,i){if(!s){var r=1/0;for(u=0;u<e.length;u++){s=e[u][0],o=e[u][1],i=e[u][2];for(var a=!0,c=0;c<s.length;c++)(!1&i||r>=i)&&Object.keys(n.O).every((function(e){return n.O[e](s[c])}))?s.splice(c--,1):(a=!1,i<r&&(r=i));if(a){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[s,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/Perfil/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,s){var o,i,r=s[0],a=s[1],c=s[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var u=c(n)}for(t&&t(s);l<r.length;l++)i=r[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},s=self["webpackChunkanimacao"]=self["webpackChunkanimacao"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(6284)}));s=n.O(s)})();
//# sourceMappingURL=app.3864cf13.js.map