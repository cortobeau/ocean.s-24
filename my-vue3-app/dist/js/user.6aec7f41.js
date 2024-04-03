(function(){"use strict";var e={8346:function(e,t,n){var a=n(3751),o=(n(4114),n(641)),i=n(33),l=n(953),r=n.p+"img/i1.4081aa7d.png",s=n.p+"img/i2.b39283f8.png",u=n.p+"img/i3.14d512a6.png",c=n.p+"img/v1.91ae6d59.png",v=n.p+"img/v2.479e0815.png",p=n.p+"img/v3.7ed7aeb0.png",d=n.p+"img/v4.699d460b.png";const g={id:"app"},m=(0,o.Lk)("header",null,[(0,o.Lk)("h1",null,"Green Data")],-1),h={class:"chat-window"},f={class:"chat-window"},k=(0,o.Lk)("div",{id:"init-message",class:"message"},"Salut ! Envoie-moi des messages, photos ou vidéos pour voir le trajet de tes données en temps réel !",-1),w={key:0},y=["src"],b=["src"],C={class:"chat-input"},L={class:"chat-input-buttons"},E=(0,o.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2em",height:"em",viewBox:"0 0 256 256"},[(0,o.Lk)("path",{fill:"currentColor",d:"M224 160V48a16 16 0 0 0-16-16H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-48ZM208 48v92.7L179.3 112a16.1 16.1 0 0 0-22.6 0L112 156.7L91.3 136a16.1 16.1 0 0 0-22.6 0L48 156.7V48Zm0 160H48v-28.7l32-32l20.7 20.7a16.1 16.1 0 0 0 22.6 0l44.7-44.7l40 40V208ZM91.5 100.5A11.9 11.9 0 0 1 88 92a12 12 0 0 1 24 0a12 12 0 0 1-12 12a12.3 12.3 0 0 1-8.5-3.5Z"})],-1),V=[E],x=(0,o.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2em",height:"2em",viewBox:"0 0 256 256"},[(0,o.Lk)("path",{fill:"currentColor",d:"M244 73.1a7.7 7.7 0 0 0-8 0l-44 25.1V92a40 40 0 0 0-40-40H24A16 16 0 0 0 8 68v96a40 40 0 0 0 40 40h128a16 16 0 0 0 16-16v-30.2l44 25.1a8.3 8.3 0 0 0 4 1.1a8 8 0 0 0 4-1.1a7.8 7.8 0 0 0 4-6.9V80a7.8 7.8 0 0 0-4-6.9ZM176 188H48a24.1 24.1 0 0 1-24-24V68h128a24.1 24.1 0 0 1 24 24v96Zm56-25.8l-40-22.8v-22.8l40-22.8Z"})],-1),O=[x],K={class:"image-list"},X=["src","onClick"],j={class:"image-list"},_=["src","onClick"];var M={__name:"App",setup(e){const t=(0,l.KR)(""),n=(0,l.KR)([]),E=(0,l.KR)(!1),x=(0,l.KR)(!1),M=(0,l.KR)("btt"),R=(0,l.KR)([r,s,u]),Z=(0,l.KR)([c,v,p,d]),F=`${S(1,255)}.${S(1,255)}.${S(1,255)}.${S(1,255)}`;function S(e,t){return String(Math.floor(Math.random()*(t-e)+e))}async function I(e,a){const o={id:Date.now(),type:e,content:"text"===e?t.value:a,address:F};try{const a=await fetch(["http://localhost:3010/ocean-2/messages","http://hyblab.polytech.univ-nantes.fr/ocean-2/messages"],{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!a.ok)throw new Error("Network response was not ok.");n.value.push(o),"text"===e&&(t.value=""),"image"===e&&(E.value=!1),"video"===e&&(x.value=!1)}catch(i){console.error("Error sending message:",i)}}async function A(){try{const e=await fetch(["http://localhost:3010/ocean-2/messages","http://hyblab.polytech.univ-nantes.fr/ocean-2/messages"]);if(!e.ok)throw new Error("Network response was not ok.");const t=await e.json();n.value=t}catch(e){console.error("Error fetching messages:",e)}}return(0,o.sV)((()=>{A(),setInterval(A,1e3)})),(e,l)=>{const r=(0,o.g2)("el-drawer");return(0,o.uX)(),(0,o.CE)("div",g,[m,(0,o.Lk)("div",h,[(0,o.Lk)("div",f,[k,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.value,(e=>((0,o.uX)(),(0,o.CE)("div",{class:"message right",key:e.id},["text"===e.type?((0,o.uX)(),(0,o.CE)("div",w,(0,i.v_)(e.content),1)):"image"===e.type?((0,o.uX)(),(0,o.CE)("img",{key:1,src:e.content,alt:"Sent Image"},null,8,y)):"video"===e.type?((0,o.uX)(),(0,o.CE)("img",{key:2,src:e.content,alt:"Sent Video"},null,8,b)):(0,o.Q3)("",!0)])))),128))])]),(0,o.Lk)("div",C,[(0,o.bo)((0,o.Lk)("input",{id:"inputmsg","onUpdate:modelValue":l[0]||(l[0]=e=>t.value=e),placeholder:"Écrivez un message…"},null,512),[[a.Jo,t.value]]),(0,o.Lk)("div",L,[(0,o.Lk)("button",{id:"image-button",style:{},onClick:l[1]||(l[1]=e=>E.value=!0)},V),(0,o.Lk)("button",{id:"video-button",style:{},onClick:l[2]||(l[2]=e=>x.value=!0)},O),(0,o.bF)(r,{modelValue:E.value,"onUpdate:modelValue":l[3]||(l[3]=e=>E.value=e),title:"Envoyer une image",direction:M.value,size:"50%"},{default:(0,o.k6)((()=>[(0,o.Lk)("div",K,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(R.value,(e=>((0,o.uX)(),(0,o.CE)("img",{src:e,key:e,onClick:t=>I("image",e),class:"image-item"},null,8,X)))),128))])])),_:1},8,["modelValue","direction"]),(0,o.bF)(r,{modelValue:x.value,"onUpdate:modelValue":l[4]||(l[4]=e=>x.value=e),title:"Envoyer une vidéo",direction:M.value,size:"50%"},{default:(0,o.k6)((()=>[(0,o.Lk)("div",j,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(Z.value,(e=>((0,o.uX)(),(0,o.CE)("img",{src:e,key:e,onClick:t=>I("video",e),class:"image-item"},null,8,_)))),128))])])),_:1},8,["modelValue","direction"]),(0,o.Lk)("button",{class:"chat-send",onClick:l[5]||(l[5]=e=>I("text",t.value.value))}," Envoyer ")])])])}}};const R=M;var Z=R,F=n(1445);n(4188);const S=(0,a.Ef)(Z);S.use(F.A),S.mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={exports:{}};return e[a].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,i){if(!a){var l=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],i=e[c][2];for(var r=!0,s=0;s<a.length;s++)(!1&i||l>=i)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(r=!1,i<l&&(l=i));if(r){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[a,o,i]}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/ocean-2/"}(),function(){var e={806:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,i,l=a[0],r=a[1],s=a[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(s)var c=s(n)}for(t&&t(a);u<l.length;u++)i=l[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},a=self["webpackChunkmy_vue3_app"]=self["webpackChunkmy_vue3_app"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(8346)}));a=n.O(a)})();
//# sourceMappingURL=user.6aec7f41.js.map