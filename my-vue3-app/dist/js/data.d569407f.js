(function(){"use strict";var e={7386:function(e,s,t){var n=t(3751),a=t(641),i=t(33),o=t.p+"img/maqutte.8d17d403.gif",r=t(953),l=t.p+"media/android.8238fdb0.mp3",c=t.p+"media/discord.f98ba5a6.mp3",d=t.p+"media/iphone.111918ab.mp3",p=t.p+"media/iphone1.8fcdc124.mp3",u=t.p+"media/iphone2.ba2d9744.mp3",v=t.p+"media/messenger.3258047e.mp3",f=t.p+"media/samsung.434da60b.mp3",m=t.p+"media/snapchat.8733c1e2.mp3";const h={id:"app"},g={class:"container"},b={class:"windows"},w=(0,a.Fv)('<section class="slides"><div class="window-head"><h3>data_info</h3></div><div class="slides-container"><div class="slide slide1"><h4>ENERGIE</h4><p class="text">En moyenne, un datacenter de 10000m² consomme <strong>autant d’énergie</strong> qu’une ville de</p><p class="big-text">50 000</p><p class="small-text">habitants, sur une année.</p></div><div class="slide slide2"><h4>ENERGIE</h4><p class="big-text">50%</p><p class="text">de la facture d’un datacenter correspond aux <strong>dépenses énergétiques</strong> liées au refroidissement des serveurs.</p></div><div class="slide slide3"><p class="big-text">MESSAGE</p><p class="small-text">1 octet par caractère. Message court : ~100 o.</p><p class="big-text">IMAGE HD</p><p class="small-text">10 000x plus qu’un message. ~1 Mo.</p><p class="big-text">VIDEO HD</p><p class="small-text">1 à 2 Mo/seconde. 30s compressées : ~45 Mo.</p></div><div class="slide slide4"><h4>EMPREINTE</h4><p class="big-text">25%</p><p class="text">des émissions mondiales de gaz à effet de serre liées au numérique, sont émises par les datacenters.</p></div></div></section>',1),y={class:"logs"},x=(0,a.Lk)("div",{class:"window-head"},[(0,a.Lk)("h3",null,"user_log")],-1),k={class:"logs-content"},E=(0,a.Lk)("main",null,[(0,a.Lk)("h2",null,"Green Data"),(0,a.Lk)("section",{class:"images"},[(0,a.Lk)("img",{class:"maqutte",src:o,alt:""})])],-1),L=(0,a.Lk)("iframe",{style:{width:"100vw",height:"100vh",border:"0px",position:"absolute",top:"0",left:"0","z-index":"1"},src:"https://cables.gl/view/6602dd7a4a0d23057b44297b"},null,-1);var A={__name:"App",setup(e){const s=[new Audio(l),new Audio(c),new Audio(d),new Audio(p),new Audio(u),new Audio(v),new Audio(f),new Audio(m)],t=(0,r.KR)([]);function n(){let e=Math.floor(Math.random()*s.length);s[e].play()}async function o(){try{const e=await fetch(["http://localhost:3010/ocean-2/messages","http://hyblab.polytech.univ-nantes.fr/ocean-2/messages"]);if(!e.ok)throw new Error("Failed to fetch messages.");{const s=await e.json();t.value=s.map((e=>({id:e.id,address:e.address,article:"video"===e.type?"une":"un",type:"text"===e.type?"message":e.type,size:"text"===e.type?`${e.content.length} o`:"image"===e.type?"1.3 Mo":"45 Mo"}))),n()}}catch(e){console.error("Error:",e)}}return(0,a.sV)((()=>{o(),setInterval(o,5e3)})),(e,s)=>((0,a.uX)(),(0,a.CE)("div",h,[(0,a.Lk)("div",g,[(0,a.Lk)("section",b,[w,(0,a.Lk)("section",y,[x,(0,a.Lk)("div",k,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(t.value,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.id,class:"logs-text"},[(0,a.Lk)("div",null,[(0,a.Lk)("p",null,[(0,a.eW)((0,i.v_)(e.address)+" a envoyé "+(0,i.v_)(e.article)+" ",1),(0,a.Lk)("strong",null,(0,i.v_)(e.type),1),(0,a.eW)(" ("+(0,i.v_)(e.size)+")",1)])])])))),128))])])]),E]),L]))}};const O=A;var _=O,M=t(1445);t(4188);const j=(0,n.Ef)(_);j.use(M.A),j.mount("#app")}},s={};function t(n){var a=s[n];if(void 0!==a)return a.exports;var i=s[n]={exports:{}};return e[n].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(s,n,a,i){if(!n){var o=1/0;for(d=0;d<e.length;d++){n=e[d][0],a=e[d][1],i=e[d][2];for(var r=!0,l=0;l<n.length;l++)(!1&i||o>=i)&&Object.keys(t.O).every((function(e){return t.O[e](n[l])}))?n.splice(l--,1):(r=!1,i<o&&(o=i));if(r){e.splice(d--,1);var c=a();void 0!==c&&(s=c)}}return s}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,a,i]}}(),function(){t.d=function(e,s){for(var n in s)t.o(s,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){t.p="/ocean-2/"}(),function(){var e={543:0};t.O.j=function(s){return 0===e[s]};var s=function(s,n){var a,i,o=n[0],r=n[1],l=n[2],c=0;if(o.some((function(s){return 0!==e[s]}))){for(a in r)t.o(r,a)&&(t.m[a]=r[a]);if(l)var d=l(t)}for(s&&s(n);c<o.length;c++)i=o[c],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(d)},n=self["webpackChunkmy_vue3_app"]=self["webpackChunkmy_vue3_app"]||[];n.forEach(s.bind(null,0)),n.push=s.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(7386)}));n=t.O(n)})();
//# sourceMappingURL=data.d569407f.js.map