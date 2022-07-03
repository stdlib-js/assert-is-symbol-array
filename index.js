// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(t){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,l=n.__defineSetter__,u=n.__lookupGetter__,c=n.__lookupSetter__,f=function(){try{return e({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var f,a,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(u.call(t,e)||c.call(t,e)?(f=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=f):t[e]=r.value),y="get"in r,p="set"in r,a&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,e,r.get),p&&l&&l.call(t,e,r.set),t};function a(t,e,r){f(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var y=Math.floor;function p(t){return null!=t&&"function"!=typeof t&&"number"==typeof t.length&&(e=t.length,y(e)===e)&&t.length>=0&&t.length<=4294967295;var e}function b(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!p(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}function s(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}function m(t){return"symbol"==typeof t}var _=s(),d=Object.prototype.toString,v=Object.prototype.hasOwnProperty,g="function"==typeof Symbol?Symbol.toStringTag:"",j=_&&"symbol"==typeof Symbol.toStringTag?function(t){var e,r,n,o,i;if(null==t)return d.call(t);r=t[g],i=g,e=null!=(o=t)&&v.call(o,i);try{t[g]=void 0}catch(e){return d.call(t)}return n=d.call(t),e?t[g]=r:delete t[g],n}:function(t){return d.call(t)},h=/^Symbol\(.*\)$/;function S(t){try{return"symbol"==typeof t.valueOf()&&h.test(function(t){return Symbol.prototype.toString.call(t)}(t))}catch(t){return!1}}function O(t){return"object"==typeof t&&"[object Symbol]"===j(t)&&S(t)}function w(t){return m(t)||O(t)}function P(t){return function(){return t}}a(w,"isPrimitive",m),a(w,"isObject",O);var T=P(!1),x=P(!1),E=P(!1);a(T,"isPrimitive",x),a(T,"isObject",E);var A=s()?w:T,M=b(A.isPrimitive),V=b(A.isObject),k=b(A);a(k,"primitives",M),a(k,"objects",V),t.default=k,t.objects=V,t.primitives=M,Object.defineProperty(t,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).isSymbolArray={});
//# sourceMappingURL=index.js.map
