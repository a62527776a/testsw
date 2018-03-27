var serviceWorkerOption = {
  "assets": [
    "/static/js/vendor.2f5db9c8fbe73ffd15f9.js",
    "/static/js/app.35dc3172777d87a6d2ed.js",
    "/static/js/manifest.3ad1d5771e9b13dbdad2.js",
    "/static/css/app.b361c0bf6c07b38f9bd7fa5d23295148.css"
  ]
};
        
        !function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s="LNWJ")}({DuR2:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},LNWJ:function(t,e,n){(function(t){const{assets:e}=t.serviceWorkerOption;let n=[...e,"./"];n=n.map(e=>new URL(e,t.location).toString()),self.addEventListener("install",e=>{e.waitUntil(t.caches.open("v1").then(t=>t.addAll(n)).then(()=>{console.log("Cached assets: main",n)}).catch(t=>{throw console.error(t),t}))}),self.addEventListener("fetch",t=>{t.respondWith(caches.match(t.request).then(e=>void 0!==e?(console.log(e),e):fetch(t.request).then(function(e){let n=e.clone();return caches.open("v1").then(function(e){e.put(t.request,n)}),e}).catch(function(){return caches.match(t.request)})))})}).call(e,n("DuR2"))}});