// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,l=r.__lookupGetter__,u=r.__lookupSetter__;var a=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,a){var c,f,y,p;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof a||null===a||"[object Array]"===n.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((f="value"in a)&&(l.call(t,e)||u.call(t,e)?(c=t.__proto__,t.__proto__=r,delete t[e],t[e]=a.value,t.__proto__=c):t[e]=a.value),y="get"in a,p="set"in a,f&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,e,a.get),p&&i&&i.call(t,e,a.set),t};function c(t,e,r){a(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var f=Math.floor;function y(t){return null!=t&&"function"!=typeof t&&"number"==typeof t.length&&(e=t.length,f(e)===e)&&t.length>=0&&t.length<=4294967295;var e}function p(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!y(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}function b(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}function v(t){return"symbol"==typeof t}var s=b();var _=Object.prototype.toString;var m=Object.prototype.hasOwnProperty;var g="function"==typeof Symbol?Symbol.toStringTag:"";var j=s&&"symbol"==typeof Symbol.toStringTag?function(t){var e,r,n,o,i;if(null==t)return _.call(t);r=t[g],i=g,e=null!=(o=t)&&m.call(o,i);try{t[g]=void 0}catch(e){return _.call(t)}return n=_.call(t),e?t[g]=r:delete t[g],n}:function(t){return _.call(t)};var d=/^Symbol\(.*\)$/;function h(t){try{return"symbol"==typeof t.valueOf()&&d.test(function(t){return Symbol.prototype.toString.call(t)}(t))}catch(t){return!1}}function S(t){return"object"==typeof t&&"[object Symbol]"===j(t)&&h(t)}function w(t){return v(t)||S(t)}function O(t){return function(){return t}}c(w,"isPrimitive",v),c(w,"isObject",S);var P=O(!1),T=O(!1),E=O(!1);c(P,"isPrimitive",T),c(P,"isObject",E);var V=b()?w:P,k=p(V.isPrimitive),x=p(V.isObject),A=p(V);c(A,"primitives",k),c(A,"objects",x);export{A as default,x as objects,k as primitives};
//# sourceMappingURL=mod.js.map