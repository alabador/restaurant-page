(()=>{"use strict";var e,n,t,r,o,a,i,c,s,u,l,d,p,f,h={426:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),u=new URL(t(504),t.b),l=i()(o());l.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700&display=swap);"]);var d=s()(u);l.push([e.id,":root {\n    --main-color: #ce4949;\n    --dark-bg: rgb(44, 44, 44);\n}\n\nbody, *{\n    font-family: 'Rubik', sans-serif;\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n.padding-side {\n    padding: 0 5%;\n}\n\n.nav {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--dark-bg);\n    color: white;\n    height: 10vh;\n}\n\n.nav h1 {\n    font-size: 2.2rem;\n}\n\nnav ul {\n    display: flex;\n    list-style: none;\n    gap: 16px;\n    font-size: 1.3rem;\n}\n\n.nav ul li:hover, .nav h1:hover {\n    cursor: pointer;\n    color: var(--main-color);\n    transition: 100ms ease-in;\n}\n\n.hero {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 1rem;\n    align-items: center;\n    height: 90vh;\n    background-image: url("+d+");\n    background-size: cover;\n    color: white;\n}\n\n.hero .hero-title{\n    font-size: 2rem;\n    text-align: center;\n}\n\n.hero .hero-text {\n    font-size: 1.4rem;\n}\n\n.hero .hero-button {\n    background: var(--main-color);\n    color: white;\n    border: none;\n    padding: 1rem 1.4rem;\n}\n\n.hero .hero-button:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n    transition: 100ms ease-in;\n}",""]);const p=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),u=0;u<a.length;u++){var l=t(a[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},504:(e,n,t)=>{e.exports=t.p+"19927c5b8085db49dda1.jpg"}},m={};function v(e){var n=m[e];if(void 0!==n)return n.exports;var t=m[e]={id:e,exports:{}};return h[e](t,t.exports,v),t.exports}v.m=h,v.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return v.d(n,{a:n}),n},v.d=(e,n)=>{for(var t in n)v.o(n,t)&&!v.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},v.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),v.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;v.g.importScripts&&(e=v.g.location+"");var n=v.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),v.p=e})(),v.b=document.baseURI||self.location.href,v.nc=void 0,e=v(379),n=v.n(e),t=v(795),r=v.n(t),o=v(569),a=v.n(o),i=v(565),c=v.n(i),s=v(216),u=v.n(s),l=v(589),d=v.n(l),p=v(426),(f={}).styleTagTransform=d(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=u(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,document.querySelector("#content").append(function(){const e=document.createElement("nav"),n=document.createElement("h1");n.textContent="Garland";const t=document.createElement("ul"),r=function(){const e=document.createElement("li"),n=document.createElement("li");return e.textContent="Menu",n.textContent="About",[e,n]}();return t.append(r[0],r[1]),e.append(n,t),e.classList.add("nav","padding-side"),e}(),function(){const e=document.createElement("div"),n=document.createElement("h2"),t=document.createElement("p"),r=document.createElement("button");return e.classList.add("hero","padding-side"),n.classList.add("hero-title"),t.classList.add("hero-text"),r.classList.add("hero-button","cta"),n.textContent="Experience the Authentic Taste of Cebu",t.textContent="Serving the best goat dishes in the Visayas",r.textContent="Order Now",e.append(n,t,r),e}())})();