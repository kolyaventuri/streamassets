!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}([function(e,t,n){var r=n(10);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(e.exports=r.locals)},function(e){e.exports={joinTheKingdom:"Join The Kingdom! Just say !discord",openSource:"My stream assets are open source! Just say !opensource"}},function(e){e.exports={a:15,b:60}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),l=null,u=0,c=[],f=n(9);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(y(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(y(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function d(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function h(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertAt.before,n);n.insertBefore(t,o)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function m(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return _(t,e.attrs),h(e,t),t}function _(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function y(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var a=u++;n=l||(l=m(t)),r=x.bind(null,n,a,!1),o=x.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",_(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){v(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return p(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}e&&p(d(e,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var b,g=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function x(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t,n){var r=n(8);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(e.exports=r.locals)},function(e,t){const n=(e,t)=>{const n=Object.keys(t);for(const r of n){const n=new RegExp(`{${r}}`,"g");e=e.replace(n,t[r])}return e};e.exports=class{constructor(e){this.strings=e,this.getString=this.getString.bind(this)}getString(e,t={}){const r=e.split(".");let o="",i=this.strings;for(const t of r){if("string"==typeof i[t])o=i[t];else if(void 0===i[t])return e;i=i[t]}return n(o,t)}}},function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===i)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},function(e,t,n){(t=e.exports=n(3)(!1)).push([e.i,".marquee__text___QGxEP {\n  font-family: Arial;\n  height: 100%;\n  width: calc(100% - 0.5em);\n  overflow: hidden;\n  padding-right: 0.5; }\n  .marquee__text___QGxEP, .marquee__text___QGxEP * {\n    padding: 0;\n    margin: 0; }\n  .marquee__text___QGxEP p {\n    white-space: nowrap;\n    font-size: 2em;\n    color: #FFFFFF;\n    position: absolute;\n    top: 50%;\n    left: 85px;\n    transform: translateY(-50%); }\n",""]),t.locals={text:"marquee__text___QGxEP"}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){(t=e.exports=n(3)(!1)).push([e.i,"@keyframes widget__spin___SFfb5 {\n  0% {\n    transform: rotate(0deg); }\n  50% {\n    transform: rotate(-20deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n.widget__ticker___1RcPk {\n  height: 150px; }\n  .widget__ticker___1RcPk * {\n    position: absolute; }\n  .widget__ticker___1RcPk img {\n    height: 100%;\n    z-index: 5; }\n    .widget__ticker___1RcPk img.widget__animated___eIeBU {\n      animation-name: widget__spin___SFfb5;\n      animation-duration: 0.5s;\n      animation-iteration-count: 1;\n      animation-timing-function: easeInOut; }\n  .widget__ticker___1RcPk .widget__infoBox___3sT6i {\n    height: 82.5px;\n    width: 700px;\n    border: 3px solid #FFFFFF;\n    background: linear-gradient(160deg, #F099EB, #97EBBB);\n    background-size: 700px 82.5px;\n    top: 50%;\n    left: 75px;\n    transform: translateY(-50%);\n    z-index: 1;\n    transition: width 0.5s;\n    transition-delay: 0.25s;\n    overflow: hidden; }\n",""]),t.locals={ticker:"widget__ticker___1RcPk",animated:"widget__animated___eIeBU",spin:"widget__spin___SFfb5",infoBox:"widget__infoBox___3sT6i"}},function(e,t,n){e.exports=n.p+"809db5e69adfcfc7920b3c6ffc0e5806.png"},function(e,t,n){"use strict";n.r(t);var r=function(){},o={},i=[],a=[];function s(e,t){var n,s,l,u,c=a;for(u=arguments.length;u-- >2;)i.push(arguments[u]);for(t&&null!=t.children&&(i.length||i.push(t.children),delete t.children);i.length;)if((s=i.pop())&&void 0!==s.pop)for(u=s.length;u--;)i.push(s[u]);else"boolean"==typeof s&&(s=null),(l="function"!=typeof e)&&(null==s?s="":"number"==typeof s?s=String(s):"string"!=typeof s&&(l=!1)),l&&n?c[c.length-1]+=s:c===a?c=[s]:c.push(s),n=l;var f=new r;return f.nodeName=e,f.children=c,f.attributes=null==t?void 0:t,f.key=null==t?void 0:t.key,void 0!==o.vnode&&o.vnode(f),f}function l(e,t){for(var n in t)e[n]=t[n];return e}function u(e,t){null!=e&&("function"==typeof e?e(t):e.current=t)}var c="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;var f=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,p=[];function d(e){!e._dirty&&(e._dirty=!0)&&1==p.push(e)&&(o.debounceRendering||c)(h)}function h(){for(var e;e=p.pop();)e._dirty&&M(e)}function v(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function m(e){var t=l({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function _(e){var t=e.parentNode;t&&t.removeChild(e)}function y(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)u(n,null),u(r,e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"==typeof r[i]&&!1===f.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,b,a):e.removeEventListener(t,b,a),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e){try{e[t]=null==r?"":r}catch(e){}null!=r&&!1!==r||"spellcheck"==t||e.removeAttribute(t)}else{var s=o&&t!==(t=t.replace(/^xlink:?/,""));null==r||!1===r?s?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(s?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function b(e){return this._listeners[e.type](o.event&&o.event(e)||e)}var g=[],x=0,w=!1,S=!1;function k(){for(var e;e=g.shift();)o.afterMount&&o.afterMount(e),e.componentDidMount&&e.componentDidMount()}function C(e,t,n,r,o,i){x++||(w=null!=o&&void 0!==o.ownerSVGElement,S=null!=e&&!("__preactattr_"in e));var a=N(e,t,n,r,i);return o&&a.parentNode!==o&&o.appendChild(a),--x||(S=!1,i||k()),a}function N(e,t,n,r,o){var i=e,a=w;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),O(e,!0))),i.__preactattr_=!0,i;var s,l,u=t.nodeName;if("function"==typeof u)return function(e,t,n,r){var o=e&&e._component,i=o,a=e,s=o&&e._componentConstructor===t.nodeName,l=s,u=m(t);for(;o&&!l&&(o=o._parentComponent);)l=o.constructor===t.nodeName;o&&l&&(!r||o._component)?(T(o,u,3,n,r),e=o.base):(i&&!s&&(L(i),e=a=null),o=U(t.nodeName,u,n),e&&!o.nextBase&&(o.nextBase=e,a=null),T(o,u,1,n,r),e=o.base,a&&e!==a&&(a._component=null,O(a,!1)));return e}(e,t,n,r);if(w="svg"===u||"foreignObject"!==u&&w,u=String(u),(!e||!v(e,u))&&(s=u,(l=w?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s)).normalizedNodeName=s,i=l,e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),O(e,!0)}var c=i.firstChild,f=i.__preactattr_,p=t.children;if(null==f){f=i.__preactattr_={};for(var d=i.attributes,h=d.length;h--;)f[d[h].name]=d[h].value}return!S&&p&&1===p.length&&"string"==typeof p[0]&&null!=c&&void 0!==c.splitText&&null==c.nextSibling?c.nodeValue!=p[0]&&(c.nodeValue=p[0]):(p&&p.length||null!=c)&&function(e,t,n,r,o){var i,a,s,l,u,c=e.childNodes,f=[],p={},d=0,h=0,m=c.length,y=0,b=t?t.length:0;if(0!==m)for(var g=0;g<m;g++){var x=c[g],w=x.__preactattr_,S=b&&w?x._component?x._component.__key:w.key:null;null!=S?(d++,p[S]=x):(w||(void 0!==x.splitText?!o||x.nodeValue.trim():o))&&(f[y++]=x)}if(0!==b)for(var g=0;g<b;g++){l=t[g],u=null;var S=l.key;if(null!=S)d&&void 0!==p[S]&&(u=p[S],p[S]=void 0,d--);else if(h<y)for(i=h;i<y;i++)if(void 0!==f[i]&&(k=a=f[i],j=o,"string"==typeof(C=l)||"number"==typeof C?void 0!==k.splitText:"string"==typeof C.nodeName?!k._componentConstructor&&v(k,C.nodeName):j||k._componentConstructor===C.nodeName)){u=a,f[i]=void 0,i===y-1&&y--,i===h&&h++;break}u=N(u,l,n,r),s=c[g],u&&u!==e&&u!==s&&(null==s?e.appendChild(u):u===s.nextSibling?_(s):e.insertBefore(u,s))}var k,C,j;if(d)for(var g in p)void 0!==p[g]&&O(p[g],!1);for(;h<=y;)void 0!==(u=f[y--])&&O(u,!1)}(i,p,n,r,S||null!=f.dangerouslySetInnerHTML),function(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||y(e,r,n[r],n[r]=void 0,w);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||y(e,r,n[r],n[r]=t[r],w)}(i,t.attributes,f),w=a,i}function O(e,t){var n=e._component;n?L(n):(null!=e.__preactattr_&&u(e.__preactattr_.ref,null),!1!==t&&null!=e.__preactattr_||_(e),j(e))}function j(e){for(e=e.lastChild;e;){var t=e.previousSibling;O(e,!0),e=t}}var P=[];function U(e,t,n){var r,o=P.length;for(e.prototype&&e.prototype.render?(r=new e(t,n),B.call(r,t,n)):((r=new B(t,n)).constructor=e,r.render=R);o--;)if(P[o].constructor===e)return r.nextBase=P[o].nextBase,P.splice(o,1),r;return r}function R(e,t,n){return this.constructor(e,n)}function T(e,t,n,r,i){e._disable||(e._disable=!0,e.__ref=t.ref,e.__key=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r)),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===o.syncComponentUpdates&&e.base?d(e):M(e,1,i)),u(e.__ref,e))}function M(e,t,n,r){if(!e._disable){var i,a,s,u=e.props,c=e.state,f=e.context,p=e.prevProps||u,d=e.prevState||c,h=e.prevContext||f,v=e.base,_=e.nextBase,y=v||_,b=e._component,w=!1,S=h;if(e.constructor.getDerivedStateFromProps&&(c=l(l({},c),e.constructor.getDerivedStateFromProps(u,c)),e.state=c),v&&(e.props=p,e.state=d,e.context=h,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(u,c,f)?w=!0:e.componentWillUpdate&&e.componentWillUpdate(u,c,f),e.props=u,e.state=c,e.context=f),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!w){i=e.render(u,c,f),e.getChildContext&&(f=l(l({},f),e.getChildContext())),v&&e.getSnapshotBeforeUpdate&&(S=e.getSnapshotBeforeUpdate(p,d));var N,j,P=i&&i.nodeName;if("function"==typeof P){var R=m(i);(a=b)&&a.constructor===P&&R.key==a.__key?T(a,R,1,f,!1):(N=a,e._component=a=U(P,R,f),a.nextBase=a.nextBase||_,a._parentComponent=e,T(a,R,0,f,!1),M(a,1,n,!0)),j=a.base}else s=y,(N=b)&&(s=e._component=null),(y||1===t)&&(s&&(s._component=null),j=C(s,i,f,n||!v,y&&y.parentNode,!0));if(y&&j!==y&&a!==b){var B=y.parentNode;B&&j!==B&&(B.replaceChild(j,y),N||(y._component=null,O(y,!1)))}if(N&&L(N),e.base=j,j&&!r){for(var E=e,I=e;I=I._parentComponent;)(E=I).base=j;j._component=E,j._componentConstructor=E.constructor}}for(!v||n?g.push(e):w||(e.componentDidUpdate&&e.componentDidUpdate(p,d,S),o.afterUpdate&&o.afterUpdate(e));e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);x||r||k()}}function L(e){o.beforeUnmount&&o.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?L(n):t&&(null!=t.__preactattr_&&u(t.__preactattr_.ref,null),e.nextBase=t,_(t),P.push(e),j(t)),u(e.__ref,null)}function B(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}function E(e,t,n){return C(n,e,{},!1,t,!1)}l(B.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=l(l({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this._renderCallbacks.push(t),d(this)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),M(this,2)},render:function(){}});n(7);var I=n(5),A=n.n(I);function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function G(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var z=7,V=1,$=function(e,t){return getComputedStyle(e,null).getPropertyValue(t)},H=function(e){function t(){var e,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=q(t).apply(this,arguments),(e=!r||"object"!==F(r)&&"function"!=typeof r?G(n):r).startScroll=function(){e.props.running&&(e.availableWidth<e.textWidth?e.interval=setInterval(function(){e.moveText()},z):(console.log("stop"),e.resetTextPosition(),clearInterval(e.interval)))},e.moveText=function(){var t=e.textRef.current,n=parseInt($(t,"left")),r=G(G(e)),o=r.textWidth,i=r.initialLeft;(parseInt(n)||0)-i<-(o+i)?t.style.left=o:t.style.left=n-V},e.resetTextPosition=function(){e.textRef.current.style.left=e.initialLeft},e.textRef={},e.setupMarquee=e.setupMarquee.bind(G(G(e))),e}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,B),n=t,(r=[{key:"setupMarquee",value:function(){this.interval&&clearInterval(this.interval);var e=this.textRef.current,t=$(e,"left"),n=$(e,"width"),r=e.parentElement.offsetWidth;this.initialLeft=parseInt(t)||0,this.textWidth=parseInt(n)||0,this.availableWidth=r-this.initialLeft,this.availableWidth=this.availableWidth>0?this.availableWidth:0,this.startScroll()}},{key:"render",value:function(){var e=this.props.text,t=this.textRef;return s("div",{className:A.a.text},s("p",{ref:t},e))}}])&&W(n.prototype,r),o&&W(n,o),t}();H.defaultProps={text:"",running:!1};var J=n(6),Q=n.n(J),K=n(1),Y=n(2),X=n(0),Z=n.n(X);function ee(e){return(ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ne(e,t){return!t||"object"!==ee(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function re(e){return(re=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function oe(e,t){return(oe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ie=new Q.a(K).getString,ae=Object.keys(K),se=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=ne(this,re(t).call(this,e))).showNextMessage=function(){n.key+=1,n.key>ae.length-1&&(n.key=0);var e=ae[n.key];n.setState({message:ie(e),open:!0},function(){n.marqueeRef.current.setupMarquee(),setTimeout(n.hideMessage,1e3*Y.a)})},n.hideMessage=function(){n.setState({open:!1},function(){setTimeout(n.showNextMessage,1e3*Y.b)})},n.state={message:"",open:!1},n.key=0,n.marqueeRef={},n}var r,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&oe(e,t)}(t,B),r=t,(o=[{key:"componentDidMount",value:function(){this.showNextMessage()}},{key:"render",value:function(){var e=this.state,t=e.message,r=e.open,o=r?null:0,i=r?Z.a.animated:null;return s("div",{className:Z.a.ticker},s("img",{src:n(11),className:i}),s("div",{className:Z.a.infoBox,style:{width:o}},s(H,{text:t,running:r,ref:this.marqueeRef})))}}])&&te(r.prototype,o),i&&te(r,i),t}(),le=document.currentScript.parentNode;le.style.position="relative",E(s(se,null),le)}]);