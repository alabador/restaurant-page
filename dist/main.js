(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(504),t.b),l=i()(o());l.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700&display=swap);"]);var u=s()(d);l.push([e.id,":root {\n    --main-color: #ce4949;\n    --dark-bg: rgb(44, 43, 43);\n}\n\nbody, *{\n    font-family: 'Rubik', sans-serif;\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n.padding-side {\n    padding: 0 5%;\n}\n\n#content {\n    position: relative;\n}\n\n/*Nav Styles*/\n.nav {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--dark-bg);\n    color: white;\n    height: 10vh;\n}\n\n.nav h1 {\n    font-size: 2.2rem;\n}\n\nnav ul {\n    display: flex;\n    list-style: none;\n    gap: 16px;\n    font-size: 1.3rem;\n}\n\n.nav ul li:hover, .nav h1:hover {\n    cursor: pointer;\n    color: var(--main-color);\n    transition: 100ms ease-in;\n}\n\n/*Homepage*/\n.hero {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 1rem;\n    align-items: center;\n    height: 90vh;\n    background-image: url("+u+");\n    background-blend-mode: multiply;\n    background-color: rgb(68, 68, 68);\n    background-size: cover;\n    color: white;\n}\n\n.hero .hero-title{\n    font-size: 2rem;\n    text-align: center;\n}\n\n.hero .hero-text {\n    font-size: 1.4rem;\n    text-align: center;\n}\n\n.hero .hero-button {\n    background: var(--main-color);\n    color: white;\n    border: none;\n    padding: 1rem 1.4rem;\n}\n\n.hero .hero-button:hover {\n    cursor: pointer;\n    transform: scale(1.1);\n    transition: 100ms ease-in;\n}\n\n/*Menu Styles*/\n.menu-div {\n    text-align: center;\n    margin-bottom: 16px;\n}\n\n.menu-header, .contact-header {\n    margin: 3rem 0;\n    font-size: 24px;\n}\n\n.item {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    align-items: center;\n    margin: 16px 15%;\n}\n\n.item h3 {\n    font-size: 21px;\n    margin: 1.5rem auto 1rem; \n}\n\n.item img {\n    max-height: 300px;\n    width: 60%;\n    object-fit: cover;\n    margin: 1.5rem auto 2rem;\n}\n\n/*Contact*/\n.contact-div {\n    text-align: center;\n}\n\n.phone {\n    font-size: 24px;\n    margin-top: 1em;\n}",""]);const p=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},504:(e,n,t)=>{e.exports=t.p+"19927c5b8085db49dda1.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r={};(()=>{t.d(r,{r:()=>k});var e=t(379),n=t.n(e),o=t(795),a=t.n(o),i=t(569),c=t.n(i),s=t(565),d=t.n(s),l=t(216),u=t.n(l),p=t(589),m=t.n(p),f=t(426),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=u(),n()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;class v{constructor(e,n,t){this.foodName=e,this.description=n,this.img=t}}const g=new v("Lechon Kawali","Pork belly slabs deep-fried, served in cubes.","https://images.unsplash.com/photo-1625477811233-044633d10dd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"),b=new v("BBQ","Various meats grilled on a stick","https://images.unsplash.com/photo-1593870682262-8c9f6a9bb225?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");function x(e){const n=document.createElement("div"),t=document.createElement("h3"),r=document.createElement("p"),o=document.createElement("img");return n.classList.add("item"),n.classList.add("padding-side"),t.textContent=e.foodName,r.textContent=e.description,o.src=e.img,n.append(t,r,o),n}function y(){const e=document.createElement("nav"),n=document.createElement("h1");n.textContent="Garland",n.addEventListener("click",k),n.addEventListener("click",E);const t=document.createElement("ul"),r=function(){const e=document.createElement("li"),n=document.createElement("li");return e.textContent="Menu",n.textContent="Contact",e.classList.add("menu"),n.classList.add("contact"),e.addEventListener("click",k),e.addEventListener("click",w),n.addEventListener("click",k),n.addEventListener("click",L),[e,n]}();return t.append(r[0],r[1]),e.append(n,t),e.classList.add("nav","padding-side"),e}function E(){document.querySelector("#content").append(y(),function(){const e=document.createElement("div"),n=document.createElement("h2"),t=document.createElement("p"),r=document.createElement("button");return e.classList.add("hero","padding-side"),n.classList.add("hero-title"),t.classList.add("hero-text"),r.classList.add("hero-button","cta"),n.textContent="Experience the Authentic Taste of Cebu",t.textContent="Serving the best goat dishes in the Visayas",r.textContent="Order Now",r.addEventListener("click",k),r.addEventListener("click",w),e.append(n,t,r),e}(),function(){const e=document.createElement("div");return e.classList.add("overlay"),e}())}function w(){document.querySelector("#content").append(y(),function(){const e=document.createElement("div");return e.classList.add("menu-div"),e.append(function(){const e=document.createElement("div"),n=document.createElement("h2");return e.classList.add("menu-header"),n.classList.add("menu-title"),n.textContent="Menu",e.append(n),e}(),x(g),x(b)),e}())}function L(){document.querySelector("#content").append(y(),function(){const e=document.createElement("div");return e.classList.add("contact-div"),e.append(function(){const e=document.createElement("div"),n=document.createElement("h2");return e.classList.add("contact-header"),n.classList.add("contact-title"),n.textContent="Contact Us",e.append(n),e}(),function(){const e=document.createElement("div"),n=document.createElement("p"),t=document.createElement("h3");return e.classList.add("contact-info-div"),n.classList.add("contact-info-text"),t.classList.add("phone"),n.textContent="To make a reservation by phone, please call:",t.textContent="(000) 000-0000",e.append(n,t),e}()),e}())}const C=document.querySelector("#content");function k(){for(;C.firstChild;)C.removeChild(C.firstChild)}E()})()})();