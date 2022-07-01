// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return t({},"x",{}),!0}catch(t){return!1}},e=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,l=n.__lookupSetter__;var c=e,f=function(t,r,e){var c,f,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((f="value"in e)&&(a.call(t,r)||l.call(t,r)?(c=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=c):t[r]=e.value),y="get"in e,p="set"in e,f&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,r,e.get),p&&u&&u.call(t,r,e.set),t},y=r()?c:f;var p=function(t,r,e){y(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})},v=Math.floor;var b=function(t){return v(t)===t};var _=function(t){return null!=t&&"function"!=typeof t&&"number"==typeof t.length&&b(t.length)&&t.length>=0&&t.length<=4294967295};var s=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!_(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}};var m=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")};var g=function(t){return"symbol"==typeof t},j=m();var d=function(){return j&&"symbol"==typeof Symbol.toStringTag},h=Object.prototype.toString,S=h;var w=function(t){return S.call(t)},O=Object.prototype.hasOwnProperty;var P=function(t,r){return null!=t&&O.call(t,r)},T="function"==typeof Symbol?Symbol.toStringTag:"",E=P,V=T,k=h;var x,A=w,G=function(t){var r,e,n;if(null==t)return k.call(t);e=t[V],r=E(t,V);try{t[V]=void 0}catch(r){return k.call(t)}return n=k.call(t),r?t[V]=e:delete t[V],n};x=d()?G:A;var M=function(t){return Symbol.prototype.toString.call(t)},C=/^Symbol\(.*\)$/;var F=x,$=function(t){try{return"symbol"==typeof t.valueOf()&&C.test(M(t))}catch(t){return!1}};var q=function(t){return"object"==typeof t&&"[object Symbol]"===F(t)&&$(t)},z=g,B=q;var D=p,H=function(t){return z(t)||B(t)},I=q;D(H,"isPrimitive",g),D(H,"isObject",I);var J=H;var K=p,L=function(t){return function(){return t}},N=L(!1),Q=L(!1),R=L(!1);K(N,"isPrimitive",Q),K(N,"isObject",R);var U=J,W=N,X=m()?U:W,Y=s(X);p(Y,"primitives",s(X.isPrimitive)),p(Y,"objects",s(X.isObject));export{Y as default};
//# sourceMappingURL=mod.js.map
