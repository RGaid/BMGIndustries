/* Jonathan Snook - MIT License - https://github.com/snookca/prepareTransition */
(function(a){a.fn.prepareTransition=function(){return this.each(function(){var b=a(this);b.one("TransitionEnd webkitTransitionEnd transitionend oTransitionEnd",function(){b.removeClass("is-transitioning")});var c=["transition-duration","-moz-transition-duration","-webkit-transition-duration","-o-transition-duration"];var d=0;a.each(c,function(a,c){d=parseFloat(b.css(c))||d});if(d!=0){b.addClass("is-transitioning");b[0].offsetWidth}})}})(jQuery);


/* Simple jQuery Equal Heights @version 1.5.1. Copyright (c) 2013 Matt Banks. Dual licensed under the MIT and GPL licenses. */
!function(a){a.fn.equalHeights=function(){var b=0,c=a(this);return c.each(function(){var c=a(this).innerHeight();c>b&&(b=c)}),c.css("height",b)},a("[data-equal]").each(function(){var b=a(this),c=b.data("equal");b.find(c).equalHeights()})}(jQuery);

/* Run function after window resize */
var afterResize=(function(){var t={};return function(callback,ms,uniqueId){if(!uniqueId){uniqueId="Don't call this twice without a uniqueId";}if(t[uniqueId]){clearTimeout(t[uniqueId]);}t[uniqueId]=setTimeout(callback,ms);};})();

window.theme = window.theme || {};

/* ================ VENDOR ================ */
/* Modernizr 2.8.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-csstransforms-csstransforms3d-touch-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-cssclassprefix:supports!
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.8.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.csstransforms=function(){return!!F("transform")},q.csstransforms3d=function(){var a=!!F("perspective");return a&&"webkitPerspective"in g.style&&w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},q.fontface=function(){var a;return w('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" supports-"+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" supports-js supports-"+t.join(" supports-"):""),e}(this,this.document);

/**
 * @license
 * lodash 4.5.1 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash core -o ./dist/lodash.core.js`
 */
;(function(){function n(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function t(n,t,r){for(var e=-1,u=n.length;++e<u;){var o=n[e],i=t(o);if(null!=i&&(c===an?i===i:r(i,c)))var c=i,f=o}return f}function r(n,t,r){var e;return r(n,function(n,r,u){return t(n,r,u)?(e=n,false):void 0}),e}function e(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function u(n,t){return O(t,function(t){return n[t]})}function o(n){return n&&n.Object===Object?n:null}function i(n){return vn[n];
}function c(n){var t=false;if(null!=n&&typeof n.toString!="function")try{t=!!(n+"")}catch(r){}return t}function f(n,t){return n=typeof n=="number"||hn.test(n)?+n:-1,n>-1&&0==n%1&&(null==t?9007199254740991:t)>n}function a(n){if(Y(n)&&!Pn(n)){if(n instanceof l)return n;if(En.call(n,"__wrapped__")){var t=new l(n.__wrapped__,n.__chain__);return t.__actions__=N(n.__actions__),t}}return new l(n)}function l(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t}function p(n,t,r,e){var u;return(u=n===an)||(u=xn[r],
u=(n===u||n!==n&&u!==u)&&!En.call(e,r)),u?t:n}function s(n){return X(n)?Fn(n):{}}function h(n,t,r){if(typeof n!="function")throw new TypeError("Expected a function");return setTimeout(function(){n.apply(an,r)},t)}function v(n,t){var r=true;return $n(n,function(n,e,u){return r=!!t(n,e,u)}),r}function y(n,t){var r=[];return $n(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function _(t,r,e,u){u||(u=[]);for(var o=-1,i=t.length;++o<i;){var c=t[o];r>0&&Y(c)&&L(c)&&(e||Pn(c)||K(c))?r>1?_(c,r-1,e,u):n(u,c):e||(u[u.length]=c);
}return u}function g(n,t){return n&&qn(n,t,en)}function b(n,t){return y(t,function(t){return Q(n[t])})}function j(n,t,r,e,u){return n===t?true:null==n||null==t||!X(n)&&!Y(t)?n!==n&&t!==t:m(n,t,j,r,e,u)}function m(n,t,r,e,u,o){var i=Pn(n),f=Pn(t),a="[object Array]",l="[object Array]";i||(a=kn.call(n),"[object Arguments]"==a&&(a="[object Object]")),f||(l=kn.call(t),"[object Arguments]"==l&&(l="[object Object]"));var p="[object Object]"==a&&!c(n),f="[object Object]"==l&&!c(t);return!(l=a==l)||i||p?2&u||(a=p&&En.call(n,"__wrapped__"),
f=f&&En.call(t,"__wrapped__"),!a&&!f)?l?(o||(o=[]),(a=J(o,function(t){return t[0]===n}))&&a[1]?a[1]==t:(o.push([n,t]),t=(i?I:q)(n,t,r,e,u,o),o.pop(),t)):false:r(a?n.value():n,f?t.value():t,e,u,o):$(n,t,a)}function d(n){var t=typeof n;return"function"==t?n:null==n?cn:("object"==t?x:A)(n)}function w(n){n=null==n?n:Object(n);var t,r=[];for(t in n)r.push(t);return r}function O(n,t){var r=-1,e=L(n)?Array(n.length):[];return $n(n,function(n,u,o){e[++r]=t(n,u,o)}),e}function x(n){var t=en(n);return function(r){
var e=t.length;if(null==r)return!e;for(r=Object(r);e--;){var u=t[e];if(!(u in r&&j(n[u],r[u],an,3)))return false}return true}}function E(n,t){return n=Object(n),P(t,function(t,r){return r in n&&(t[r]=n[r]),t},{})}function A(n){return function(t){return null==t?an:t[n]}}function k(n,t,r){var e=-1,u=n.length;for(0>t&&(t=-t>u?0:u+t),r=r>u?u:r,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Array(u);++e<u;)r[e]=n[e+t];return r}function N(n){return k(n,0,n.length)}function S(n,t){var r;return $n(n,function(n,e,u){return r=t(n,e,u),
!r}),!!r}function T(t,r){return P(r,function(t,r){return r.func.apply(r.thisArg,n([t],r.args))},t)}function F(n,t,r,e){r||(r={});for(var u=-1,o=t.length;++u<o;){var i=t[u],c=e?e(r[i],n[i],i,r,n):n[i],f=r,a=f[i];En.call(f,i)&&(a===c||a!==a&&c!==c)&&(c!==an||i in f)||(f[i]=c)}return r}function R(n){return V(function(t,r){var e=-1,u=r.length,o=u>1?r[u-1]:an,o=typeof o=="function"?(u--,o):an;for(t=Object(t);++e<u;){var i=r[e];i&&n(t,i,e,o)}return t})}function B(n){return function(){var t=arguments,r=s(n.prototype),t=n.apply(r,t);
return X(t)?t:r}}function D(n,t,r){function e(){for(var o=-1,i=arguments.length,c=-1,f=r.length,a=Array(f+i),l=this&&this!==wn&&this instanceof e?u:n;++c<f;)a[c]=r[c];for(;i--;)a[c++]=arguments[++o];return l.apply(t,a)}if(typeof n!="function")throw new TypeError("Expected a function");var u=B(n);return e}function I(n,t,r,e,u,o){var i=-1,c=1&u,f=n.length,a=t.length;if(f!=a&&!(2&u&&a>f))return false;for(a=true;++i<f;){var l=n[i],p=t[i];if(void 0!==an){a=false;break}if(c){if(!S(t,function(n){return l===n||r(l,n,e,u,o);
})){a=false;break}}else if(l!==p&&!r(l,p,e,u,o)){a=false;break}}return a}function $(n,t,r){switch(r){case"[object Boolean]":case"[object Date]":return+n==+t;case"[object Error]":return n.name==t.name&&n.message==t.message;case"[object Number]":return n!=+n?t!=+t:n==+t;case"[object RegExp]":case"[object String]":return n==t+""}return false}function q(n,t,r,e,u,o){var i=2&u,c=en(n),f=c.length,a=en(t).length;if(f!=a&&!i)return false;for(var l=f;l--;){var p=c[l];if(!(i?p in t:En.call(t,p)))return false}for(a=true;++l<f;){
var p=c[l],s=n[p],h=t[p];if(void 0!==an||s!==h&&!r(s,h,e,u,o)){a=false;break}i||(i="constructor"==p)}return a&&!i&&(r=n.constructor,e=t.constructor,r!=e&&"constructor"in n&&"constructor"in t&&!(typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)&&(a=false)),a}function z(n){var t=n?n.length:an;if(W(t)&&(Pn(n)||nn(n)||K(n))){n=String;for(var r=-1,e=Array(t);++r<t;)e[r]=n(r);t=e}else t=null;return t}function C(n){var t=n&&n.constructor,t=Q(t)&&t.prototype||xn;return n===t}function G(n){
return n?n[0]:an}function J(n,t){return r(n,d(t),$n)}function M(n,t){return $n(n,typeof t=="function"?t:cn)}function P(n,t,r){return e(n,d(t),r,3>arguments.length,$n)}function U(n,t){var r;if(typeof t!="function")throw new TypeError("Expected a function");return n=Un(n),function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=an),r}}function V(n){var t;if(typeof n!="function")throw new TypeError("Expected a function");return t=In(t===an?n.length-1:Un(t),0),function(){for(var r=arguments,e=-1,u=In(r.length-t,0),o=Array(u);++e<u;)o[e]=r[t+e];
for(u=Array(t+1),e=-1;++e<t;)u[e]=r[e];return u[t]=o,n.apply(this,u)}}function H(n,t){return n>t}function K(n){return Y(n)&&L(n)&&En.call(n,"callee")&&(!Rn.call(n,"callee")||"[object Arguments]"==kn.call(n))}function L(n){return null!=n&&!(typeof n=="function"&&Q(n))&&W(zn(n))}function Q(n){return n=X(n)?kn.call(n):"","[object Function]"==n||"[object GeneratorFunction]"==n}function W(n){return typeof n=="number"&&n>-1&&0==n%1&&9007199254740991>=n}function X(n){var t=typeof n;return!!n&&("object"==t||"function"==t);
}function Y(n){return!!n&&typeof n=="object"}function Z(n){return typeof n=="number"||Y(n)&&"[object Number]"==kn.call(n)}function nn(n){return typeof n=="string"||!Pn(n)&&Y(n)&&"[object String]"==kn.call(n)}function tn(n,t){return t>n}function rn(n){return typeof n=="string"?n:null==n?"":n+""}function en(n){var t=C(n);if(!t&&!L(n))return Dn(Object(n));var r,e=z(n),u=!!e,e=e||[],o=e.length;for(r in n)!En.call(n,r)||u&&("length"==r||f(r,o))||t&&"constructor"==r||e.push(r);return e}function un(n){for(var t=-1,r=C(n),e=w(n),u=e.length,o=z(n),i=!!o,o=o||[],c=o.length;++t<u;){
var a=e[t];i&&("length"==a||f(a,c))||"constructor"==a&&(r||!En.call(n,a))||o.push(a)}return o}function on(n){return n?u(n,en(n)):[]}function cn(n){return n}function fn(t,r,e){var u=en(r),o=b(r,u);null!=e||X(r)&&(o.length||!u.length)||(e=r,r=t,t=this,o=b(r,en(r)));var i=X(e)&&"chain"in e?e.chain:true,c=Q(t);return $n(o,function(e){var u=r[e];t[e]=u,c&&(t.prototype[e]=function(){var r=this.__chain__;if(i||r){var e=t(this.__wrapped__);return(e.__actions__=N(this.__actions__)).push({func:u,args:arguments,
thisArg:t}),e.__chain__=r,e}return u.apply(t,n([this.value()],arguments))})}),t}var an,ln=1/0,pn=/[&<>"'`]/g,sn=RegExp(pn.source),hn=/^(?:0|[1-9]\d*)$/,vn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},yn={"function":true,object:true},_n=yn[typeof exports]&&exports&&!exports.nodeType?exports:an,gn=yn[typeof module]&&module&&!module.nodeType?module:an,bn=gn&&gn.exports===_n?_n:an,jn=o(yn[typeof self]&&self),mn=o(yn[typeof window]&&window),dn=o(yn[typeof this]&&this),wn=o(_n&&gn&&typeof global=="object"&&global)||mn!==(dn&&dn.window)&&mn||jn||dn||Function("return this")(),On=Array.prototype,xn=Object.prototype,En=xn.hasOwnProperty,An=0,kn=xn.toString,Nn=wn._,Sn=wn.Reflect,Tn=Sn?Sn.f:an,Fn=Object.create,Rn=xn.propertyIsEnumerable,Bn=wn.isFinite,Dn=Object.keys,In=Math.max,$n=function(n,t){
return function(r,e){if(null==r)return r;if(!L(r))return n(r,e);for(var u=r.length,o=t?u:-1,i=Object(r);(t?o--:++o<u)&&false!==e(i[o],o,i););return r}}(g),qn=function(n){return function(t,r,e){var u=-1,o=Object(t);e=e(t);for(var i=e.length;i--;){var c=e[n?i:++u];if(false===r(o[c],c,o))break}return t}}();Tn&&!Rn.call({valueOf:1},"valueOf")&&(w=function(n){n=Tn(n);for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r});var zn=A("length"),Cn=V(function(t,r){return Pn(t)||(t=null==t?[]:[Object(t)]),_(r,1),
n(N(t),on)}),Gn=V(function(n,t,r){return D(n,t,r)}),Jn=V(function(n,t){return h(n,1,t)}),Mn=V(function(n,t,r){return h(n,Vn(t)||0,r)}),Pn=Array.isArray,Un=Number,Vn=Number,Hn=R(function(n,t){F(t,en(t),n)}),Kn=R(function(n,t){F(t,un(t),n)}),Ln=R(function(n,t,r,e){F(t,un(t),n,e)}),Qn=V(function(n){return n.push(an,p),Ln.apply(an,n)}),Wn=V(function(n,t){return null==n?{}:E(n,_(t,1))}),Xn=d;l.prototype=s(a.prototype),l.prototype.constructor=l,a.assignIn=Kn,a.before=U,a.bind=Gn,a.chain=function(n){return n=a(n),
n.__chain__=true,n},a.compact=function(n){return y(n,Boolean)},a.concat=Cn,a.create=function(n,t){var r=s(n);return t?Hn(r,t):r},a.defaults=Qn,a.defer=Jn,a.delay=Mn,a.filter=function(n,t){return y(n,d(t))},a.flatten=function(n){return n&&n.length?_(n,1):[]},a.flattenDeep=function(n){return n&&n.length?_(n,ln):[]},a.iteratee=Xn,a.keys=en,a.map=function(n,t){return O(n,d(t))},a.matches=function(n){return x(Hn({},n))},a.mixin=fn,a.negate=function(n){if(typeof n!="function")throw new TypeError("Expected a function");
return function(){return!n.apply(this,arguments)}},a.once=function(n){return U(2,n)},a.pick=Wn,a.slice=function(n,t,r){var e=n?n.length:0;return r=r===an?e:+r,e?k(n,null==t?0:+t,r):[]},a.sortBy=function(n,t){var r=0;return t=d(t),O(O(n,function(n,e,u){return{c:n,b:r++,a:t(n,e,u)}}).sort(function(n,t){var r;n:{r=n.a;var e=t.a;if(r!==e){var u=null===r,o=r===an,i=r===r,c=null===e,f=e===an,a=e===e;if(r>e&&!c||!i||u&&!f&&a||o&&a){r=1;break n}if(e>r&&!u||!a||c&&!o&&i||f&&i){r=-1;break n}}r=0}return r||n.b-t.b;
}),A("c"))},a.tap=function(n,t){return t(n),n},a.thru=function(n,t){return t(n)},a.toArray=function(n){return L(n)?n.length?N(n):[]:on(n)},a.values=on,a.extend=Kn,fn(a,a),a.clone=function(n){return X(n)?Pn(n)?N(n):F(n,en(n)):n},a.escape=function(n){return(n=rn(n))&&sn.test(n)?n.replace(pn,i):n},a.every=function(n,t,r){return t=r?an:t,v(n,d(t))},a.find=J,a.forEach=M,a.has=function(n,t){return null!=n&&En.call(n,t)},a.head=G,a.identity=cn,a.indexOf=function(n,t,r){var e=n?n.length:0;r=typeof r=="number"?0>r?In(e+r,0):r:0,
r=(r||0)-1;for(var u=t===t;++r<e;){var o=n[r];if(u?o===t:o!==o)return r}return-1},a.isArguments=K,a.isArray=Pn,a.isBoolean=function(n){return true===n||false===n||Y(n)&&"[object Boolean]"==kn.call(n)},a.isDate=function(n){return Y(n)&&"[object Date]"==kn.call(n)},a.isEmpty=function(n){if(L(n)&&(Pn(n)||nn(n)||Q(n.splice)||K(n)))return!n.length;for(var t in n)if(En.call(n,t))return false;return true},a.isEqual=function(n,t){return j(n,t)},a.isFinite=function(n){return typeof n=="number"&&Bn(n)},a.isFunction=Q,a.isNaN=function(n){
return Z(n)&&n!=+n},a.isNull=function(n){return null===n},a.isNumber=Z,a.isObject=X,a.isRegExp=function(n){return X(n)&&"[object RegExp]"==kn.call(n)},a.isString=nn,a.isUndefined=function(n){return n===an},a.last=function(n){var t=n?n.length:0;return t?n[t-1]:an},a.max=function(n){return n&&n.length?t(n,cn,H):an},a.min=function(n){return n&&n.length?t(n,cn,tn):an},a.noConflict=function(){return wn._===this&&(wn._=Nn),this},a.noop=function(){},a.reduce=P,a.result=function(n,t,r){return t=null==n?an:n[t],
t===an&&(t=r),Q(t)?t.call(n):t},a.size=function(n){return null==n?0:(n=L(n)?n:en(n),n.length)},a.some=function(n,t,r){return t=r?an:t,S(n,d(t))},a.uniqueId=function(n){var t=++An;return rn(n)+t},a.each=M,a.first=G,fn(a,function(){var n={};return g(a,function(t,r){En.call(a.prototype,r)||(n[r]=t)}),n}(),{chain:false}),a.VERSION="4.5.1",$n("pop join replace reverse split push shift sort splice unshift".split(" "),function(n){var t=(/^(?:replace|split)$/.test(n)?String.prototype:On)[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|join|replace|shift)$/.test(n);
a.prototype[n]=function(){var n=arguments;return e&&!this.__chain__?t.apply(this.value(),n):this[r](function(r){return t.apply(r,n)})}}),a.prototype.toJSON=a.prototype.valueOf=a.prototype.value=function(){return T(this.__wrapped__,this.__actions__)},(mn||jn||{})._=a,typeof define=="function"&&typeof define.amd=="object"&&define.amd? define(function(){return a}):_n&&gn?(bn&&((gn.exports=a)._=a),_n._=a):wn._=a}).call(this);



/*
 *  Remodal - v1.1.1
 *  Responsive, lightweight, fast, synchronized with CSS animations, fully customizable modal window plugin with declarative configuration and hash tracking.
 *  http://vodkabears.github.io/remodal/
 *
 *  Made by Ilya Makarov
 *  Under MIT License
 */

!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(c){return b(a,c)}):"object"==typeof exports?b(a,require("jquery")):b(a,a.jQuery||a.Zepto)}(this,function(a,b){"use strict";function c(a){if(w&&"none"===a.css("animation-name")&&"none"===a.css("-webkit-animation-name")&&"none"===a.css("-moz-animation-name")&&"none"===a.css("-o-animation-name")&&"none"===a.css("-ms-animation-name"))return 0;var b,c,d,e,f=a.css("animation-duration")||a.css("-webkit-animation-duration")||a.css("-moz-animation-duration")||a.css("-o-animation-duration")||a.css("-ms-animation-duration")||"0s",g=a.css("animation-delay")||a.css("-webkit-animation-delay")||a.css("-moz-animation-delay")||a.css("-o-animation-delay")||a.css("-ms-animation-delay")||"0s",h=a.css("animation-iteration-count")||a.css("-webkit-animation-iteration-count")||a.css("-moz-animation-iteration-count")||a.css("-o-animation-iteration-count")||a.css("-ms-animation-iteration-count")||"1";for(f=f.split(", "),g=g.split(", "),h=h.split(", "),e=0,c=f.length,b=Number.NEGATIVE_INFINITY;e<c;e++)d=parseFloat(f[e])*parseInt(h[e],10)+parseFloat(g[e]),d>b&&(b=d);return b}function d(){if(b(document).height()<=b(window).height())return 0;var a,c,d=document.createElement("div"),e=document.createElement("div");return d.style.visibility="hidden",d.style.width="100px",document.body.appendChild(d),a=d.offsetWidth,d.style.overflow="scroll",e.style.width="100%",d.appendChild(e),c=e.offsetWidth,d.parentNode.removeChild(d),a-c}function e(){if(!x){var a,c,e=b("html"),f=k("is-locked");e.hasClass(f)||(c=b(document.body),a=parseInt(c.css("padding-right"),10)+d(),c.css("padding-right",a+"px"),e.addClass(f))}}function f(){if(!x){var a,c,e=b("html"),f=k("is-locked");e.hasClass(f)&&(c=b(document.body),a=parseInt(c.css("padding-right"),10)-d(),c.css("padding-right",a+"px"),e.removeClass(f))}}function g(a,b,c,d){var e=k("is",b),f=[k("is",u.CLOSING),k("is",u.OPENING),k("is",u.CLOSED),k("is",u.OPENED)].join(" ");a.$bg.removeClass(f).addClass(e),a.$overlay.removeClass(f).addClass(e),a.$wrapper.removeClass(f).addClass(e),a.$modal.removeClass(f).addClass(e),a.state=b,!c&&a.$modal.trigger({type:b,reason:d},[{reason:d}])}function h(a,d,e){var f=0,g=function(a){a.target===this&&f++},h=function(a){a.target===this&&0===--f&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].off(r+" "+s)}),d())};b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].on(r,g).on(s,h)}),a(),0===c(e.$bg)&&0===c(e.$overlay)&&0===c(e.$wrapper)&&0===c(e.$modal)&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].off(r+" "+s)}),d())}function i(a){a.state!==u.CLOSED&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(b,c){a[c].off(r+" "+s)}),a.$bg.removeClass(a.settings.modifier),a.$overlay.removeClass(a.settings.modifier).hide(),a.$wrapper.hide(),f(),g(a,u.CLOSED,!0))}function j(a){var b,c,d,e,f={};for(a=a.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,","),b=a.split(","),e=0,c=b.length;e<c;e++)b[e]=b[e].split(":"),d=b[e][1],("string"==typeof d||d instanceof String)&&(d="true"===d||"false"!==d&&d),("string"==typeof d||d instanceof String)&&(d=isNaN(d)?d:+d),f[b[e][0]]=d;return f}function k(){for(var a=q,b=0;b<arguments.length;++b)a+="-"+arguments[b];return a}function l(){var a,c,d=location.hash.replace("#","");if(d){try{c=b('[data-remodal-id="'+d+'"]')}catch(e){}c&&c.length&&(a=b[p].lookup[c.data(p)],a&&a.settings.hashTracking&&a.open())}else n&&n.state===u.OPENED&&n.settings.hashTracking&&n.close()}function m(a,c){var d=b(document.body),e=d,f=this;f.settings=b.extend({},t,c),f.index=b[p].lookup.push(f)-1,f.state=u.CLOSED,f.$overlay=b("."+k("overlay")),null!==f.settings.appendTo&&f.settings.appendTo.length&&(e=b(f.settings.appendTo)),f.$overlay.length||(f.$overlay=b("<div>").addClass(k("overlay")+" "+k("is",u.CLOSED)).hide(),e.append(f.$overlay)),f.$bg=b("."+k("bg")).addClass(k("is",u.CLOSED)),f.$modal=a.addClass(q+" "+k("is-initialized")+" "+f.settings.modifier+" "+k("is",u.CLOSED)).attr("tabindex","-1"),f.$wrapper=b("<div>").addClass(k("wrapper")+" "+f.settings.modifier+" "+k("is",u.CLOSED)).hide().append(f.$modal),e.append(f.$wrapper),f.$wrapper.on("click."+q,'[data-remodal-action="close"]',function(a){a.preventDefault(),f.close()}),f.$wrapper.on("click."+q,'[data-remodal-action="cancel"]',function(a){a.preventDefault(),f.$modal.trigger(v.CANCELLATION),f.settings.closeOnCancel&&f.close(v.CANCELLATION)}),f.$wrapper.on("click."+q,'[data-remodal-action="confirm"]',function(a){a.preventDefault(),f.$modal.trigger(v.CONFIRMATION),f.settings.closeOnConfirm&&f.close(v.CONFIRMATION)}),f.$wrapper.on("click."+q,function(a){var c=b(a.target);c.hasClass(k("wrapper"))&&f.settings.closeOnOutsideClick&&f.close()})}var n,o,p="remodal",q=a.REMODAL_GLOBALS&&a.REMODAL_GLOBALS.NAMESPACE||p,r=b.map(["animationstart","webkitAnimationStart","MSAnimationStart","oAnimationStart"],function(a){return a+"."+q}).join(" "),s=b.map(["animationend","webkitAnimationEnd","MSAnimationEnd","oAnimationEnd"],function(a){return a+"."+q}).join(" "),t=b.extend({hashTracking:!0,closeOnConfirm:!0,closeOnCancel:!0,closeOnEscape:!0,closeOnOutsideClick:!0,modifier:"",appendTo:null},a.REMODAL_GLOBALS&&a.REMODAL_GLOBALS.DEFAULTS),u={CLOSING:"closing",CLOSED:"closed",OPENING:"opening",OPENED:"opened"},v={CONFIRMATION:"confirmation",CANCELLATION:"cancellation"},w=function(){var a=document.createElement("div").style;return void 0!==a.animationName||void 0!==a.WebkitAnimationName||void 0!==a.MozAnimationName||void 0!==a.msAnimationName||void 0!==a.OAnimationName}(),x=/iPad|iPhone|iPod/.test(navigator.platform);m.prototype.open=function(){var a,c=this;c.state!==u.OPENING&&c.state!==u.CLOSING&&(a=c.$modal.attr("data-remodal-id"),a&&c.settings.hashTracking&&(o=b(window).scrollTop(),location.hash=a),n&&n!==c&&i(n),n=c,e(),c.$bg.addClass(c.settings.modifier),c.$overlay.addClass(c.settings.modifier).show(),c.$wrapper.show().scrollTop(0),c.$modal.focus(),h(function(){g(c,u.OPENING)},function(){g(c,u.OPENED)},c))},m.prototype.close=function(a){var c=this;c.state!==u.OPENING&&c.state!==u.CLOSING&&c.state!==u.CLOSED&&(c.settings.hashTracking&&c.$modal.attr("data-remodal-id")===location.hash.substr(1)&&(location.hash="",b(window).scrollTop(o)),h(function(){g(c,u.CLOSING,!1,a)},function(){c.$bg.removeClass(c.settings.modifier),c.$overlay.removeClass(c.settings.modifier).hide(),c.$wrapper.hide(),f(),g(c,u.CLOSED,!1,a)},c))},m.prototype.getState=function(){return this.state},m.prototype.destroy=function(){var a,c=b[p].lookup;i(this),this.$wrapper.remove(),delete c[this.index],a=b.grep(c,function(a){return!!a}).length,0===a&&(this.$overlay.remove(),this.$bg.removeClass(k("is",u.CLOSING)+" "+k("is",u.OPENING)+" "+k("is",u.CLOSED)+" "+k("is",u.OPENED)))},b[p]={lookup:[]},b.fn[p]=function(a){var c,d;return this.each(function(e,f){d=b(f),null==d.data(p)?(c=new m(d,a),d.data(p,c.index),c.settings.hashTracking&&d.attr("data-remodal-id")===location.hash.substr(1)&&c.open()):c=b[p].lookup[d.data(p)]}),c},b(document).ready(function(){b(document).on("click","[data-remodal-target]",function(a){a.preventDefault();var c=a.currentTarget,d=c.getAttribute("data-remodal-target"),e=b('[data-remodal-id="'+d+'"]');b[p].lookup[e.data(p)].open()}),b(document).find("."+q).each(function(a,c){var d=b(c),e=d.data("remodal-options");e?("string"==typeof e||e instanceof String)&&(e=j(e)):e={},d[p](e)}),b(document).on("keydown."+q,function(a){n&&n.settings.closeOnEscape&&n.state===u.OPENED&&27===a.keyCode&&n.close()}),b(window).on("hashchange."+q,l)})});


/*!
 * imagesLoaded PACKAGED v4.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}(window,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}function n(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function o(t,e,r){return this instanceof o?("string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=n(t),this.options=i({},this.options),"function"==typeof e?r=e:i(this.options,e),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(t,e,r)}function r(t){this.img=t}function s(t,e){this.url=t,this.element=e,this.img=new Image}var h=t.jQuery,a=t.console;o.prototype=Object.create(e.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&d[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}},o.prototype.addImage=function(t){var e=new r(t);this.images.push(e)},o.prototype.addBackground=function(t,e){var i=new s(t,e);this.images.push(i)},o.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},o.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,t,e)},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},r.prototype=Object.create(e.prototype),r.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},r.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},o.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(h=e,h.fn.imagesLoaded=function(t,e){var i=new o(this,t,e);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});



/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
 
jQuery.cookie=function(b,j,m){if(typeof j!="undefined"){m=m||{};if(j===null){j="";m.expires=-1}var e="";if(m.expires&&(typeof m.expires=="number"||m.expires.toUTCString)){var f;if(typeof m.expires=="number"){f=new Date();f.setTime(f.getTime()+(m.expires*24*60*60*1000))}else{f=m.expires}e="; expires="+f.toUTCString()}var l=m.path?"; path="+(m.path):"";var g=m.domain?"; domain="+(m.domain):"";var a=m.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(j),e,l,g,a].join("")}else{var d=null;if(document.cookie&&document.cookie!=""){var k=document.cookie.split(";");for(var h=0;h<k.length;h++){var c=jQuery.trim(k[h]);if(c.substring(0,b.length+1)==(b+"=")){d=decodeURIComponent(c.substring(b.length+1));break}}}return d}};



/*================ TIMBER ================*/
// Helper functions
function replaceUrlParam(url, paramName, paramValue) {
	var pattern = new RegExp('('+paramName+'=).*?(&|$)'),
			newUrl = url.replace(pattern,'$1' + paramValue + '$2');
	if ( newUrl == url ) {
		newUrl = newUrl + (newUrl.indexOf('?')>0 ? '&' : '?') + paramName + '=' + paramValue;
	}
	return newUrl;
}

// Timber functions
window.timber = window.timber || {};


timber.init = function () {
	//FastClick.attach(document.body);
	timber.cacheSelectors();
	timber.accessibleNav();
	timber.autoResponsiveElements();
	timber.drawersInit();  
	//timber.responsiveVideos();
};

timber.cacheSelectors = function () {
	timber.cache = {
		// General
		$html: $('html'),
		$body: $('body'),

		// Navigation
		$navigation: $('#AccessibleNav')
	}
};

function addXicon () {

}

function removeXicon () {

}

timber.drawersInit = function () {
	timber.LeftDrawer = new timber.Drawers('NavDrawer', 'left', {
			'onDrawerOpen': addXicon,
	});
};

timber.getHash = function () {
	return window.location.hash;
};

timber.responsiveVideos = function () {
	var $iframeVideo = $('iframe[src*="youtube.com/embed"], iframe[src*="player.vimeo"]');
	var $iframeReset = $iframeVideo.add('iframe#admin_bar_iframe');

	$iframeVideo.each(function () {
		// Add wrapper to make video responsive
		$(this).wrap('<div class="video-wrapper"></div>');
	});

	$iframeReset.each(function () {
		// Re-set the src attribute on each iframe after page load
		// for Chrome's "incorrect iFrame content on 'back'" bug.
		// https://code.google.com/p/chromium/issues/detail?id=395791
		// Need to specifically target video and admin bar
		this.src = this.src;
	});
};


timber.accessibleNav = function () {
	var $nav = timber.cache.$navigation,
			$allLinks = $nav.find('a'),
			$topLevel = $nav.children('li').find('a'),
			$parents = $nav.find('.site-nav--has-dropdown'),
			$subMenuLinks = $nav.find('.site-nav__dropdown').find('a'),
			activeClass = 'nav-hover',
			focusClass = 'nav-focus';

	// Mouseenter
	$parents.on('mouseenter touchstart', function(evt) {
		var $el = $(this);

		if (!$el.hasClass(activeClass)) {
			evt.preventDefault();
		}
		
		showDropdown($el);
	});
	

	// Mouseout
	$parents.on('mouseleave', function() {
		hideDropdown($(this));
	});

	$subMenuLinks.on('touchstart', function(evt) {
		// Prevent touchstart on body from firing instead of link
		evt.stopImmediatePropagation();
	});

	$allLinks.focus(function() {
		handleFocus($(this));
	});

	$allLinks.blur(function() {
		removeFocus($topLevel);
	});

	// accessibleNav private methods
	function handleFocus ($el) {
		var $subMenu = $el.next('ul'),
				hasSubMenu = $subMenu.hasClass('sub-nav') ? true : false,
				isSubItem = $('.site-nav__dropdown').has($el).length,
				$newFocus = null;

		// Add focus class for top level items, or keep menu shown
		if (!isSubItem) {
			removeFocus($topLevel);
			addFocus($el);
		} else {
			$newFocus = $el.closest('.site-nav--has-dropdown').find('a');
			addFocus($newFocus);
		}
	}

	function showDropdown ($el) {
		$el.addClass(activeClass);
		//$el.find('.site-nav__dropdown').slideDown(400);        
	$el.find('.site-nav__dropdown').fadeIn(200);            
		setTimeout(function() {
			timber.cache.$body.on('touchstart', function() {
				hideDropdown($el);
			});
		}, 250);
	}

	function hideDropdown ($el) {
		//$el.find('.site-nav__dropdown').slideUp(200); 
	$el.find('.site-nav__dropdown').fadeOut(200);     
		$el.removeClass(activeClass);
		timber.cache.$body.off('touchstart');
	}

	function addFocus ($el) {
		$el.addClass(focusClass);
	}

	function removeFocus ($el) {
		$el.removeClass(focusClass);
	}
};

timber.autoResponsiveElements = function () {
// 	var $iframeVideo = $('iframe[src*="youtube.com/embed"], iframe[src*="player.vimeo"]');
// 	var $iframeReset = $iframeVideo.add('iframe#admin_bar_iframe');

// 	$('table').wrap('<div class="table-wrapper"></div>');

// 	$iframeVideo.each(function () {
// 		// Add wrapper to make video responsive
// 		if(!$(this).parents('.video-wrapper').length) {
// 			$(this).wrap('<div class="video-wrapper"></div>');
// 		}
// 	});

// 	$iframeReset.each(function () {
// 		// Re-set the src attribute on each iframe after page load
// 		// for Chrome's "incorrect iFrame content on 'back'" bug.
// 		// https://code.google.com/p/chromium/issues/detail?id=395791
// 		// Need to specifically target video and admin bar
// 		this.src = this.src;
// 	});
};

/* ================ SLATE ================ */
theme.Sections = function Sections() {
	this.constructors = {};
	this.instances = [];

	$(document)
		.on('shopify:section:load', this._onSectionLoad.bind(this))
		.on('shopify:section:unload', this._onSectionUnload.bind(this))
		.on('shopify:section:select', this._onSelect.bind(this))
		.on('shopify:section:deselect', this._onDeselect.bind(this))
		.on('shopify:block:select', this._onBlockSelect.bind(this))
		.on('shopify:block:deselect', this._onBlockDeselect.bind(this));
};

theme.Sections.prototype = _.assignIn({}, theme.Sections.prototype, {
	_createInstance: function(container, constructor) {
		var $container = $(container);
		var id = $container.attr('data-section-id');
		var type = $container.attr('data-section-type');

		constructor = constructor || this.constructors[type];

		if (_.isUndefined(constructor)) {
			return;
		}

		var instance = _.assignIn(new constructor(container), {
			id: id,
			type: type,
			container: container
		});

		this.instances.push(instance);
	},

	_onSectionLoad: function(evt) {
		var container = $('[data-section-id]', evt.target)[0];
		if (container) {
			this._createInstance(container);
		}
	},

	_onSectionUnload: function(evt) {
		this.instances = _.filter(this.instances, function(instance) {
			var isEventInstance = (instance.id === evt.detail.sectionId);

			if (isEventInstance) {
				if (_.isFunction(instance.onUnload)) {
					instance.onUnload(evt);
				}
			}

			return !isEventInstance;
		});
	},

	_onSelect: function(evt) {
		// eslint-disable-next-line no-shadow
		var instance = _.find(this.instances, function(instance) {
			return instance.id === evt.detail.sectionId;
		});

		if (!_.isUndefined(instance) && _.isFunction(instance.onSelect)) {
			instance.onSelect(evt);
		}
	},

	_onDeselect: function(evt) {
		// eslint-disable-next-line no-shadow
		var instance = _.find(this.instances, function(instance) {
			return instance.id === evt.detail.sectionId;
		});

		if (!_.isUndefined(instance) && _.isFunction(instance.onDeselect)) {
			instance.onDeselect(evt);
		}
	},

	_onBlockSelect: function(evt) {
		// eslint-disable-next-line no-shadow
		var instance = _.find(this.instances, function(instance) {
			return instance.id === evt.detail.sectionId;
		});

		if (!_.isUndefined(instance) && _.isFunction(instance.onBlockSelect)) {
			instance.onBlockSelect(evt);
		}
	},

	_onBlockDeselect: function(evt) {
		// eslint-disable-next-line no-shadow
		var instance = _.find(this.instances, function(instance) {
			return instance.id === evt.detail.sectionId;
		});

		if (!_.isUndefined(instance) && _.isFunction(instance.onBlockDeselect)) {
			instance.onBlockDeselect(evt);
		}
	},

	register: function(type, constructor) {
		this.constructors[type] = constructor;

		$('[data-section-type=' + type + ']').each(function(index, container) {
			this._createInstance(container, constructor);
		}.bind(this));
	}
});


/* ================ MODULES ================ */
theme.Hero = (function() {
	theme.sliders = function (slider) {
		this.$slider = $(slider);
		this.sliderArgs = {
			animation: this.$slider.data('transition'),
			animationSpeed: 500,
			pauseOnHover: true,
			keyboard: false,
			slideshow: this.$slider.data('autoplay'),
			slideshowSpeed: this.$slider.data('speed'),
			controlNav: this.$slider.data('show-dots'),
			smoothHeight: true
		}

		if (this.$slider.length) {

			if (this.$slider.find('li').length === 1) {
				this.sliderArgs.slideshow = false;
				this.sliderArgs.slideshowSpeed = 0;
				this.sliderArgs.controlNav = false;
				this.sliderArgs.directionNav = false;
				this.sliderArgs.touch = false;
			}

			return(this.$slider.flexslider(this.sliderArgs));
		}
	};
	
	return theme.sliders;
})();

window.timberSocial = window.timberSocial || {};

timberSocial.cacheSelectors = function () {
	timberSocial.cache = {
		$shareButtons: $('.social-sharing'),
	}
};

timberSocial.init = function () {
	timberSocial.cacheSelectors();
	timberSocial.sliders();
};

timberSocial.socialSharing = function () {

	timberSocial.cacheSelectors();

	// General selectors
	var $buttons = timberSocial.cache.$shareButtons,
			$shareLinks = $buttons.find('a'),
			permalink = $buttons.attr('data-permalink');

	// Share button selectors
	var $fbLink = $('.share-facebook'),
			$pinLink = $('.share-pinterest'),
			$googleLink = $('.share-google');

	if ( $fbLink.length ) {
		$.getJSON('https://graph.facebook.com/?id=' + permalink + '&callback=?', function(data) {
			if (data.shares) {
				$fbLink.find('.share-count').text(data.shares).addClass('is-loaded');
			} else {
				$fbLink.find('.share-count').remove();
			}
		});
	};

	if ( $pinLink.length ) {
		$.getJSON('https://api.pinterest.com/v1/urls/count.json?url=' + permalink + '&callback=?', function(data) {
			if (data.count > 0) {
				$pinLink.find('.share-count').text(data.count).addClass('is-loaded');
			} else {
				$pinLink.find('.share-count').remove();
			}
		});
	};

	if ( $googleLink.length ) {
		// Can't currently get Google+ count with JS, so just pretend it loaded
		$googleLink.find('.share-count').addClass('is-loaded');
	}

	// Share popups
	$shareLinks.on('click', function(e) {
		e.preventDefault();
		var el = $(this),
				popup = el.attr('class').replace('-','_'),
				link = el.attr('href'),
				w = 700,
				h = 400;

		// Set popup sizes
		switch (popup) {
			case 'share-fancy':
				w = 480;
				h = 720;
				break;
			case 'share-google':
				w = 500;
				break;
		}

		window.open(link, popup, 'width=' + w + ', height=' + h);
	});
}

/*============================================================================
  Image functions
==============================================================================*/

// var usePageDots = {{ settings.slideshow_nav_buttons }};
var imageChange = 0;
var imageFunctions = {
  zoom: function(zoomParent, enableTouch, magnify){
    var activateZoom = $(zoomParent).data('zoom');
    if (activateZoom){
      $(zoomParent + ' img')
          .wrap('<span style="display:inline-block"></span>')
          .css('display', 'block')
          .parent()
          .zoom({
            touch: enableTouch,
            magnify: magnify ? magnify : 1
      });
    }
  },
  linkGalleryAndCarousel: function($gallery, $carousel){

    $carousel.find('.gallery-cell:nth-child(1)').addClass('is-nav-selected');

    //EVENT - click on carousel item to slide gallery
    $carousel.on( 'click', '.gallery-cell', function() {
        var index = $(this).index();
        $carousel.find('.is-nav-selected').removeClass('is-nav-selected');
        $(this).addClass('is-nav-selected');
        $gallery.flickity( 'select', index );
    });

    //EVENT - update carousel based on gallery index
    $gallery.on( 'select.flickity', function() {
      var galleryData = $(this).data('flickity');
      if (galleryData){
        $carousel.find('.is-nav-selected').removeClass('is-nav-selected');
        $carousel.find('.gallery-cell:nth-child(' + (galleryData.selectedIndex + 1) + ')').addClass('is-nav-selected');
        if($(this).find('.video_wrap iframe.Image--lazyLoaded').length > 0){
          var video = $(this).find('.video_wrap iframe.Image--lazyLoaded')[0];
          if($(galleryData.selectedElement).hasClass('video_wrap')){video.src = video.getAttribute('data-src')+'&autoplay=1';}
          else{ if( video.src != video.getAttribute('data-src')) video.src = video.getAttribute('data-src');}
        }
         
      }
    });
  },
  fullWidth: function(images, imageContainer){
    $(images).each(function(){
      var $image = $(this),
          alt = $image.attr('alt'),
          src = $image.attr('src');

      if (alt.indexOf("[") >= 0){

        //remove from description
        $image.remove();

        //find shortcode values and remove from alt
        var shortcodes = alt.match(/\[(.*?)\]/ig);
        alt = alt.replace(/\[(.*?)\]/ig, '');

        //remove brackets from shortcode to be used as classes
        var captionClass = $.map( shortcodes, function( value, index ) {
            value = value.replace(/[\[\]']+/g,'');
            return value;
        });

        //markup for caption

        var caption = [
            '<div class="position-' + (captionClass.length ? captionClass : 'center') + ' caption js-caption">',
              '<div class="caption-content caption-background-false align-' + (captionClass.length ? captionClass : 'center') + '">',
                '<p class="headline">' + alt + '</p>',
              '</div>',
            '</div>'
        ].join('');

        //image attributes added
        $image.attr({
          alt: alt,
          class: 'lazyload {{ settings.image_loading_style }}',
          src: src,
          dataSizes: 'auto'
        });

        var image = $image.prop('outerHTML')
        var banner =  '<div class="banner">' + image + caption + '</div>'

        $(imageContainer).append(banner);
      }
    })
  },
  showSecondaryImage: function(){
    if($( window ).width() > 768){
    $('body').on("mouseenter", ".swap-true", function() {
      $(this).toggleClass('toggle-images');
    });

    $('body').on("mouseleave", ".swap-true", function() {
      $(this).toggleClass('toggle-images');
    });
    }
  }
}



//compatibility with gallery using remodal
var lightboxGallery = {
  init: function(){
    //compatibility with gallery using remodal
    if ($('.lightbox img').length) {
      var currentSlide;
      var $lightboxImages = $('a.lightbox');
      var groups = [];

      //get all lightbox images and divide into groups based on rel attribute
      $lightboxImages.each(function(index){
        groups.push($(this).attr('rel'));
        groups = groups.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
      })
	console.log("inslide lightbox");
      console.log(groups);
      //loop through gallery groups and create modals
      $.each(groups, function(index, value){

        //Loop through images and add link to remodal
        $('.lightbox[rel=' + value + ']').attr('data-remodal-target', 'lightbox-id-' + index );

        var lightboxModal = [
          '<div class="remodal remodal-lightbox js-remodal-lightbox js-lightbox-' + index + '" data-rel="' + value + '" data-remodal-id="lightbox-id-' + index + '" data-remodal-options="hashTracking: false">',
            '<a data-remodal-action="close" class="remodal-close"></a>',
            '<div class="lightbox-gallery"></div>',
          '</div>'
        ].join('');

        //Add modal lightbox to page to be populated by lightboxImageGallery
        $('body').append(lightboxModal);

        $('.lightbox[rel=' + value + ']').each(function(index){
          $(this).attr('data-image-id', index);
          $(this).attr('data-no-instant', '');
        });

      });

    }
  }
}


  //Set current slide
  $('body').on('click', '.lightbox', function(){
    currentSlide = $(this).data('image-id');
    $('.remodal').remodal().open();
  });

 //detect when a remodal lightbox is opened
  $('body').on('opened', '.js-remodal-lightbox', function () {

    var $currentLightbox = $(this);
    var group = $(this).data('rel');
    var $groupImages = $('.lightbox[rel=' + group + ']').parent().clone();
    var arrowShow = $groupImages.length === 1 ? false : true;
    var draggable = $groupImages.length === 1 ? false : true;
    var flktyEnabled = $currentLightbox.find('.lightbox-gallery').hasClass('flickity-enabled');

    var elem = $currentLightbox.find('.lightbox-gallery')[0];

    $(this).find('a.lightbox')
      .removeAttr('href')
      .removeAttr('data-remodal-target');

    var flktyGallery = new Flickity( elem, {
      "wrapAround": "true",
      "cellAlign": "center",
      "contain": true,
      "imagesLoaded": true,
      "lazyLoad": 2,
//       "pageDots": usePageDots,
      "draggable": draggable,
      "prevNextButtons": arrowShow,
//       "arrowShape": arrowSize,
      "adaptiveHeight": true
    });


    if (!flktyEnabled){
      flktyGallery.insert($groupImages);
    }

    flktyGallery.select(currentSlide, false, true );

    elem.focus();

    $currentLightbox.find('.overlay').remove();
    $currentLightbox.find('.zoomImg').remove();
    $currentLightbox.find('img')
      .removeClass('lazyautosizes')
      .attr('sizes', '2000px')
      .css('opacity', '1');

  });

  $('body').on('closed', '.js-remodal-lightbox', function () {
    var $currentLightbox = $(this);
    $currentLightbox.find('img').css('opacity', '0');
  });


/*================ SECTIONS ================*/
theme.Product = (function() {
	function Product(container) {
		this.selectors = {
			productImage: '#ProductPhotoImg',
			productImageGallery: '.product_gallery',
			productImageWrap: '#ProductPhoto',
			thumbImages: '#ProductThumbs',
			productGridImages: '.grid-link__image--product',
			addToCart: '#AddToCart',
			productPrice: '.product_price',
			productSku: '.variant-sku',      
			comparePrice: '#ComparePrice',
			comparePriceA11y: '#ComparePriceA11y',
			priceA11y: '#PriceA11y',
			quantityElements: '.quantity-selector, label + .js-qty',
			addToCartText: '#AddToCartText',
			productVideo: '.video-wrapperinner'
		};
		
		var $container = this.$container = $(container);
		var sectionId = $container.attr('data-section-id');
		
		if (!$('#ProductJson-' + sectionId).html()) {
			return;
		}
		
		this.zoomType = $container.data('image-zoom-type');
		this.relatedEnabled = $container.data('related-enabled');
		this.socialSharing = $container.data('social-sharing');
		this.$productGridImages = $container.find(this.selectors.productGridImages);
		
		this.productSingleObject = JSON.parse(document.getElementById('ProductJson-' + sectionId).innerHTML);
		
		this.init();
	}
	
	Product.prototype = _.assignIn({}, Product.prototype, {
		init: function(){ 

           this.stringOverrides();
			this.cacheSelectors();
			this.initProductVariant();
			this.productImageSwitch();
			timber.autoResponsiveElements();
			this.productImageZoom();
	
          setTimeout(function(){
            imageFunctions.linkGalleryAndCarousel($('.js-product-page-gallery .product_gallery'), $('.js-product-page-gallery .product_gallery_nav'));
          
          
          }, 800);
          imageFunctions.zoom('.product_gallery', true);

          if($('.js-full-width-product-images').length){
            imageFunctions.fullWidth('.product-template .product .description img', '.js-full-width-product-images');
          }	     
         
          
          
          //initialize lightbox
          lightboxGallery.init();
        

			
			if (this.relatedEnabled) {
				this.resizeElements();
			}
			
			if(this.socialSharing) {
				$(timberSocial.socialSharing);
			}
		},
		
		stringOverrides: function() {
			// Override defaults in theme.strings with potential
			// template overrides

			theme.productStrings = theme.productStrings || {};
			$.extend(theme.strings, theme.productStrings);
		},
		
		cacheSelectors: function() {
			window.cache = window.cache || {};
			$.extend(window.cache, {
				$html: $('html'),
				$productImage: $(this.selectors.productImage),
				$productImageGallery: $(this.selectors.productImageGallery),
				$productImageWrap: $(this.selectors.productImageWrap),
				$productImage: $(this.selectors.productImage),
				$thumbImages: $(this.selectors.thumbImages).find('a.product-single__thumbnail'),
				$addToCart: $(this.selectors.addToCart),
				$productPrice: $(this.selectors.productPrice),
				$productSku:  $(this.selectors.productSku),
				$comparePrice: $(this.selectors.comparePrice),
				$comparePriceA11y: $(this.selectors.comparePriceA11y),
				$priceA11y: $(this.selectors.priceA11y),
				$quantityElements: $(this.selectors.quantityElements),
				$addToCartText: $(this.selectors.addToCartText),
				$productVideo:  $(this.selectors.productVideo)
			});
		},
		
		resizeElements: function() {
			var self = this;
			
			self.$productGridImages.imagesLoaded(function() {
				self.$productGridImages.css('height', 'auto').equalHeights();
			});
		},
		
		productImageGallery: function() {
			if (!cache.$productImageGallery.length) {
				return;
			};

			cache.$productImageGallery.magnificPopup({
				type: 'image',
				mainClass: 'mfp-fade',
				closeOnBgClick: true,
				closeBtnInside: false,
				closeOnContentClick: true,
				tClose: theme.strings.zoomClose,
				removalDelay: 500,
				callbacks: {
					open: function(){
						$('html').css('overflow-y','hidden');
					},
					close: function(){
						$('html').css('overflow-y','');
					}
				},
				gallery: {
					enabled: true,
					navigateByImgClick: false,
					arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"><span class="mfp-chevron mfp-chevron-%dir%"></span></button>',
					tPrev: theme.strings.zoomPrev,
					tNext: theme.strings.zoomNext
				}
			});

			cache.$productImage.bind('click', function() {
				var imageId = $(this).attr('data-image-id');
				cache.$productImageGallery.filter('[data-image-id="' + imageId + '"]').trigger('click');
			});
		},
		
		productImageZoom: function () {
			if (this.zoomType != 'zoom-in') {
				return;
			}

			if (!cache.$productImageWrap.length || cache.$html.hasClass('supports-touch')) {
				return;
			};

			// Destroy zoom (in case it was already set), then set it up again
			cache.$productImageWrap.trigger('zoom.destroy');

			if (cache.$productImage.is(':visible')) {
				cache.$productImageWrap.addClass('image-zoom').zoom({
					url: cache.$productImage.attr('data-zoom')
				});
			}
		},
		
		productImageSwitch: function() {
			if (!cache.$thumbImages.length) {
				return;
			}
			
			var self = this;
					
			// Switch the main image with one of the thumbnails
			// Note: this does not change the variant selected, just the image
			cache.$thumbImages.on('click', function(evt) {
				evt.preventDefault();
				var newImage = $(this).attr('href');
				var newImageId = $(this).attr('data-image-id');
				self.switchImage(newImage, { id: newImageId }, cache.$productImage);
				cache.$productVideo.hide();
				cache.$productImage.show();
// 				cache.$productImageWrap.addClass('image-zoom').zoom({
// 					url: cache.$productImage.attr('data-zoom')
// 				});        
			});
          
          
		},
     	initProductVariant: function() {
			var self = this;
			var product = this.productSingleObject;
			
			var selectCallback = function(variant, selector) {
				self.productPage({
					money_format: theme.moneyFormat,
					variant: variant,
					selector: selector,
					translations: {
						add_to_cart : theme.productStrings.addToCart,
						sold_out : theme.productStrings.soldOut,
						unavailable : theme.productStrings.unavailable
					}
				});
			};
			if($.find('#productSelect').length > 0){
				this.optionSelector = new Shopify.OptionSelectors('productSelect', {
					product: product,
					onVariantSelected: selectCallback,
					enableHistoryState: true
				});

				// Add label if only one product option and it isn't 'Title'. Could be 'Size'.
				if (product.options.length == 1 && product.options[0] != 'Title') {
					//$('.selector-wrapper:eq(0)').prepend('<label for="productSelect-option-0">' + product.options[0] + '</label>');
				}

				// Hide selectors if we only have 1 variant and its title contains 'Default'.
				if (product.variants.length == 1 && product.variants[0].title.toLowerCase().indexOf('default') !== -1) {
					$('.selector-wrapper').hide();
				}
			}
		},
		
		productPage: function (options) {
			var self = this;
			var moneyFormat = options.money_format;
			var variant = options.variant;
			var selector = options.selector;
			var translations = options.translations;

			if (variant) {

				// Update variant image, if one is set
				if (variant.featured_image) {
					var newImg = variant.featured_image,
							el = cache.$productImage[0];
					Shopify.Image.switchImage(newImg, el, self.switchImage);
				}

				// Select a valid variant if available
				if (variant.available) {
					// Available, enable the submit button, change text, show quantity elements
					cache.$addToCart.removeClass('disabled').prop('disabled', false);
					cache.$addToCartText.html(translations.add_to_cart);
					cache.$quantityElements.show();
				} else {
					// Sold out, disable the submit button, change text, hide quantity elements
					cache.$addToCart.addClass('disabled').prop('disabled', true);
					cache.$addToCartText.html(translations.sold_out);
					cache.$quantityElements.hide();
				}

				// Regardless of stock, update the product price
				cache.$productPrice.html( Shopify.formatMoney(variant.price, moneyFormat) );
				cache.$productSku.html('ITEM '+variant.sku)
			
				

				// Also update and show the product's compare price if necessary
				if (variant.compare_at_price > variant.price) {
					cache.$comparePrice
						.html(Shopify.formatMoney(variant.compare_at_price, moneyFormat))
						.show();
					cache.$comparePriceA11y.attr('aria-hidden', 'false');
					cache.$priceA11y.attr('aria-hidden', 'false');
				} else {
					cache.$comparePrice.hide();
					cache.$comparePriceA11y.attr('aria-hidden', 'true');
				}

			} else {
				// The variant doesn't exist, disable submit button.
				// This may be an error or notice that a specific variant is not available.
				// To only show available variants, implement linked product options:
				//   - http://docs.shopify.com/manual/configuration/store-customization/advanced-navigation/linked-product-options
				cache.$addToCart.addClass('disabled').prop('disabled', true);
				cache.$addToCartText.html(translations.unavailable);
				cache.$quantityElements.hide();
			}
		},
		
		switchImage: function (src, imgObject, el) {
			// Make sure element is a jquery object
// 			var self = this
// 			var $el = $(el);
// 			$el.attr('src', src);
// 			$el.attr('data-image-id', imgObject.id);

// 			if (this.zoomType == 'zoom-in') {
// 				// Update new image src to grande
// 				var zoomSrc = src.replace('_medium.','_1024x1024.').replace('_large.','_1024x1024.').replace('_grande.','_1024x1024.');
// 				$el.attr('data-zoom', zoomSrc);

// 				$(function() {
// 					self.productImageZoom();
// 				});
// 			}
		}
	});

	return Product;
})();

theme.Collection = (function() {
	function Collection(container) {
		this.selectors = {
			productGridImages: '.grid-link__image--product'
		};

		var $container = this.$container = $(container);
		this.sortEnabled = $container.data('sort-enabled');
		this.tagsEnabled = $container.data('tags-enabled');

		this.$productGridImages = $container.find(this.selectors.productGridImages);

		this.init();
	}

	Collection.prototype = _.assignIn({}, Collection.prototype, {
		init: function(){
			this.stringOverrides();
			this.resizeElements();

			if (this.sortEnabled) {
				this.collectionSorting();
			}

			if (this.tagsEnabled) {
				this.collectionTags();
			}
		},

		stringOverrides: function() {
			// Override defaults in theme.strings with potential
			// template overrides

			theme.productStrings = theme.productStrings || {};
			$.extend(theme.strings, theme.productStrings);
		},

		resizeElements: function() {
			var self = this;

			self.$productGridImages.imagesLoaded(function() {
				self.$productGridImages.css('height', 'auto').equalHeights();
			});
		},

		collectionSorting: function() {
			/*============================================================================
				Initialised here because collection liquid object is only available
				on collection pages, and not external JS files
			==============================================================================*/
			Shopify.queryParams = {};
			if (location.search.length && location.search.indexOf("sort_by")) {
				for (var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&'); i < aCouples.length; i++) {
					aKeyValue = aCouples[i].split('=');
					if (aKeyValue.length > 1) {
						Shopify.queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);
					}
				}
			}

			$(function() {
				// var sby = theme.strings.sortBy || Shopify.queryParams.sort_by || 'manual';
				var sby = 'manual';
				$('#SortBy')
					.val(sby)
					.bind('change', function() {
						Shopify.queryParams.sort_by = $(this).val();
						location.search = $.param(Shopify.queryParams);
					}
				);
			});
		},

		collectionTags: function() {
			var $browseBy = $('#BrowseBy');
			$(function() {
				$browseBy
					.bind('change', function() {
						location.href = $browseBy.val();
					}
				);
			});
		}
	});

	return Collection;
})();

theme.Cart = (function() {
	var selectors = {
		body: 'body',
		cartNoteAdd: '.cart__note-add',
		cartNote: '.cart__note'
	};

	function Cart() {
		if (!$('#CartSection').data('notes-enable')) {
			return;
		}

		$(selectors.body).on('click', selectors.cartNoteAdd, function () {
			$(this).addClass('is-hidden');
			$(selectors.cartNote).addClass('is-active');
		});
	}

	return Cart;
})();

theme.Article = (function() {
	function Article(container) {
		var socialSharing = $(container).data('social-sharing');
		
		if(socialSharing) {
			$(timberSocial.socialSharing);
		}
	}
	
	return Article;
})();

theme.Header = (function() {

})();

theme.slideshows = {};

theme.SlideshowSection = (function() {
	function SlideshowSection(container) {
		var $container = this.$container = $(container);
		var id = $container.attr('data-section-id');
		var slideshow = this.slideshow = '#flexslider--' + id;

		theme.slideshows[slideshow] = new theme.Hero(slideshow);
	}

	return SlideshowSection;
})();

theme.SlideshowSection.prototype = _.assignIn({}, theme.SlideshowSection.prototype, {
	onUnload: function() {
		delete theme.slideshows[this.slideshow];
	},

	onBlockSelect: function(evt) {
		var $slideshow = $(this.slideshow);
		var $slide = $('#slide--' + evt.detail.blockId + ':not(.clone)');
		var slideIndex = $slide.data('flexslider-index');
		var $slideImg = $slide.find('img');
		$slideshow.flexslider(slideIndex, true);
		
		$slideImg.on('load', function(){
			var intervalAttempts = 0;
			
			// Needed to resize the slider as the on('load') listener doesn't wait until the image has loaded.
			var imageHeightCheck = setInterval(function() {
				intervalAttempts++;
				if ($slideImg.length && $slideImg.height() === 0 && intervalAttempts < 10)  {
					sizeSlideshow($slideshow);
				} else {
					// clear interval
					sizeSlideshow($slideshow);
					clearInterval(imageHeightCheck);
				}
			}, 500);
		});
		
		function sizeSlideshow($slideshow) {
			$slideshow.resize();
		}
	},

	onBlockDeselect: function() {
		// Resume autoplay
		$(this.slideshow).flexslider("play");
	}
});

theme.CollectionList = (function() {
	function CollectionList(container) {
		this.selectors = {
			collectionGridImages: '.grid-link__image--collection'
		};
		
		var $container = this.$container = $(container);
		this.$collectionGridImages = $container.find(this.selectors.collectionGridImages);

		this.resizeElements();
	}
	
	CollectionList.prototype = _.assignIn({}, CollectionList.prototype, {
		resizeElements: function() {
			var self = this;
			
			self.$collectionGridImages.imagesLoaded(function() {
				self.$collectionGridImages.css('height', 'auto').equalHeights();
			});
		}
	});

	return CollectionList;
})();

theme.FeaturedProducts = (function() {
	function FeaturedProducts(container) {
		this.selectors = {
			productGridImages: '.grid-link__image--product'
		};
		
		var $container = this.$container = $(container);
		this.$productGridImages = $container.find(this.selectors.productGridImages);
		
		this.resizeElements();
	}
	
	FeaturedProducts.prototype = _.assignIn({}, FeaturedProducts.prototype, {
		resizeElements: function() {
			var self = this;
			
			self.$productGridImages.imagesLoaded(function() {
				self.$productGridImages.css('height', 'auto').equalHeights();
			});
		}
	});

	return FeaturedProducts;
})();

window.theme = window.theme || {};

theme.PasswordHeader = (function() {
	function PasswordHeader() {
		this.init();
	}
	
	PasswordHeader.prototype = _.assignIn({}, PasswordHeader.prototype, {
		init: function() {
			$('.js-toggle-login-modal').magnificPopup({
				type: 'inline',
				mainClass: 'mfp-fade',
				closeOnBgClick: false,
				closeBtnInside: false,
				closeOnContentClick: false,
				tClose: password.strings.pageClose,
				removalDelay: 500,
				callbacks: {
					open: function() {
						window.setTimeout( function() { document.getElementById('password').focus(); }, 50 );
					}
				}
			});
			if ( $('.storefront-password-form .errors').size() ) {
				$('.js-toggle-login-modal').click();
			}
		}
	});
	
	return PasswordHeader;
})();


document.addEventListener("StartOtherLoading", function(event) {
	var sections = new theme.Sections();
		sections.register('product-template', theme.Product);
		sections.register('collection-template', theme.Collection);
		sections.register('cart-template', theme.Cart);
		sections.register('article-template', theme.Article);
		sections.register('slideshow-section', theme.SlideshowSection);
		sections.register('collection-list-section', theme.CollectionList);
		sections.register('featured-products-section', theme.FeaturedProducts);
		sections.register('password-header', theme.PasswordHeader);

});

theme.cacheSelectors = function () {
	theme.cache = {
		// General
		$w: $(window),
		$html: $('html'),

		// Equal height elements
		$productGridImages: $('.grid-link__image--product'),
		$collectionGridImages: $('.grid-link__image--collection')
	}
};

timber.cacheVariables = function () {
	timber.vars = {
		isTouch: timber.cache.$html.hasClass('supports-touch')
	}
};

theme.init = function () {
	theme.cacheSelectors();
	timber.cacheVariables();
	theme.equalHeights();
};

theme.equalHeights = function () {
	theme.cache.$w.on('load', resizeElements());

	theme.cache.$w.on('resize',
		afterResize(function() {
			resizeElements();
		}, 250, 'equal-heights')
	);

	function resizeElements() {
		theme.cache.$productGridImages.imagesLoaded(function() {
			theme.cache.$productGridImages.css('height', 'auto').equalHeights();
		});
		theme.cache.$collectionGridImages.imagesLoaded(function() {
			theme.cache.$collectionGridImages.css('height', 'auto').equalHeights();
		});
	}
};


/*============================================================================
	Drawer modules
	- Docs http://shopify.github.io/Timber/#drawers
==============================================================================*/
timber.Drawers = (function () {
	var Drawer = function (id, position, options) {
		var defaults = {
			close: '.js-drawer-close',
			open: '.js-drawer-open-' + position,
			openClass: 'js-drawer-open',
			dirOpenClass: 'js-drawer-open-' + position
		};

		this.$nodes = {
			parent: $('body, html'),
			page: $('#PageContainer'),
			moved: $('.is-moved-by-drawer')
		};

		this.config = $.extend(defaults, options);
		this.position = position;

		this.$drawer = $('#' + id);

		if (!this.$drawer.length) {
			return false;
		}

		this.drawerIsOpen = false;
		this.init();
	};

	Drawer.prototype.init = function () {
		$(this.config.open).on('click', $.proxy(this.open, this));
		this.$drawer.find(this.config.close).on('click', $.proxy(this.close, this));
	};

	Drawer.prototype.open = function (evt) {
		// Keep track if drawer was opened from a click, or called by another function
		var externalCall = false;

		// Prevent following href if link is clicked
		if (evt) {
			evt.preventDefault();
		} else {
			externalCall = true;
		}

		// Without this, the drawer opens, the click event bubbles up to $nodes.page
		// which closes the drawer.
		if (evt && evt.stopPropagation) {
			evt.stopPropagation();
			// save the source of the click, we'll focus to this on close
			this.$activeSource = $(evt.currentTarget);
		}

		if (this.drawerIsOpen && !externalCall) {
			return this.close();
		}

		// Notify the drawer is going to open
		timber.cache.$body.trigger('beforeDrawerOpen.timber', this);

		// Add is-transitioning class to moved elements on open so drawer can have
		// transition for close animation
		this.$nodes.moved.addClass('is-transitioning');
		this.$drawer.prepareTransition();

		this.$nodes.parent.addClass(this.config.openClass + ' ' + this.config.dirOpenClass);
		this.drawerIsOpen = true;

		// Set focus on drawer
		this.trapFocus(this.$drawer, 'drawer_focus');

		// Run function when draw opens if set
		if (this.config.onDrawerOpen && typeof(this.config.onDrawerOpen) == 'function') {
			if (!externalCall) {
				this.config.onDrawerOpen();
			}
		}
		

		if (this.$activeSource && this.$activeSource.attr('aria-expanded')) {
			this.$activeSource.attr('aria-expanded', 'true');
		}

		// Lock scrolling on mobile
		this.$nodes.page.on('touchmove.drawer', function () {
			return false;
		});

		this.$nodes.page.on('click.drawer', $.proxy(function () {
			this.close();
			return false;
		}, this));

		// Notify the drawer has opened
		timber.cache.$body.trigger('afterDrawerOpen.timber', this);
	};

	Drawer.prototype.close = function () {
		if (!this.drawerIsOpen) { // don't close a closed drawer
			return;
		}

		// Notify the drawer is going to close
		timber.cache.$body.trigger('beforeDrawerClose.timber', this);

		// deselect any focused form elements
		$(document.activeElement).trigger('blur');

		// Ensure closing transition is applied to moved elements, like the nav
		this.$nodes.moved.prepareTransition({ disableExisting: true });
		this.$drawer.prepareTransition({ disableExisting: true });

		this.$nodes.parent.removeClass(this.config.dirOpenClass + ' ' + this.config.openClass);

		this.drawerIsOpen = false;

		// Remove focus on drawer
		this.removeTrapFocus(this.$drawer, 'drawer_focus');

		this.$nodes.page.off('.drawer');

		// Notify the drawer is closed now
		timber.cache.$body.trigger('afterDrawerClose.timber', this);
	};

	Drawer.prototype.trapFocus = function ($container, eventNamespace) {
		var eventName = eventNamespace ? 'focusin.' + eventNamespace : 'focusin';

		$container.attr('tabindex', '-1');

		$container.focus();

		$(document).on(eventName, function (evt) {
			if ($container[0] !== evt.target && !$container.has(evt.target).length) {
				$container.focus();
			}
		});
	};

	Drawer.prototype.removeTrapFocus = function ($container, eventNamespace) {
		var eventName = eventNamespace ? 'focusin.' + eventNamespace : 'focusin';

		$container.removeAttr('tabindex');
		$(document).off(eventName);
	};

	return Drawer;
})();

document.addEventListener("StartOtherLoading", function(event) {
	// Initialize Timber's JS on docready
	$(timber.init)

	// Initialize theme's JS on docready
	$(theme.init);

	console.log('__opt-timber-dev-2');
});