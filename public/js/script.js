/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});

/* SLICK JS | Version: 1.6.0 | Author: Ken Wheeler | Website: http://kenwheeler.github.io | Docs: http://kenwheeler.github.io/slick | Repo: http://github.com/kenwheeler/slick | Issues: http://github.com/kenwheeler/slick/issues */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(b,c){return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.focussed=!1,e.interrupted=!1,e.hidden="hidden",e.paused=!0,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,d,f),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0)}var b=0;return c}(),b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.getNavTarget=function(){var b=this,c=b.options.asNavFor;return c&&null!==c&&(c=a(c).not(b.$slider)),c},b.prototype.asNavFor=function(b){var c=this,d=c.getNavTarget();null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayClear(),a.slideCount>a.options.slidesToShow&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this,b=a.currentSlide+a.options.slidesToScroll;a.paused||a.interrupted||a.focussed||(a.options.infinite===!1&&(1===a.direction&&a.currentSlide+1===a.slideCount-1?a.direction=0:0===a.direction&&(b=a.currentSlide-a.options.slidesToScroll,a.currentSlide-1===0&&(a.direction=1))),a.slideHandler(b))},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(b.$slider.addClass("slick-dotted"),d=a("<ul />").addClass(b.options.dotsClass),c=0;c<=b.getDotCount();c+=1)d.append(a("<li />").append(b.options.customPaging.call(this,b,c)));b.$dots=d.appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.empty().append(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.currentTarget);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&a("li",b.$dots).off("click.slick",b.changeSlide).off("mouseenter.slick",a.proxy(b.interrupt,b,!0)).off("mouseleave.slick",a.proxy(b.interrupt,b,!1)),b.$slider.off("focus.slick blur.slick"),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.cleanUpSlideEvents(),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpSlideEvents=function(){var b=this;b.$list.off("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.empty().append(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.$slider.removeClass("slick-dotted"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.focusHandler=function(){var b=this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.options.pauseOnFocus&&(b.focussed=d.is(":focus"),b.autoPlay())},0)})},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else if(a.options.asNavFor)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else d=1+Math.ceil((a.slideCount-a.options.slidesToShow)/a.options.slidesToScroll);return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots(),c.checkResponsive(!0),c.focusHandler()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA(),c.options.autoplay&&(c.paused=!1,c.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.off("click.slick").on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.interrupt,b,!0)).on("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.initSlideEvents=function(){var b=this;b.options.pauseOnHover&&(b.$list.on("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.interrupt,b,!1)))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.initSlideEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:b.options.rtl===!0?"next":"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:b.options.rtl===!0?"previous":"next"}}))},b.prototype.lazyLoad=function(){function g(c){a("img[data-lazy]",c).each(function(){var c=a(this),d=a(this).attr("data-lazy"),e=document.createElement("img");e.onload=function(){c.animate({opacity:0},100,function(){c.attr("src",d).animate({opacity:1},200,function(){c.removeAttr("data-lazy").removeClass("slick-loading")}),b.$slider.trigger("lazyLoaded",[b,c,d])})},e.onerror=function(){c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),b.$slider.trigger("lazyLoadError",[b,c,d])},e.src=d})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=Math.ceil(e+b.options.slidesToShow),b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.autoPlay(),a.options.autoplay=!0,a.paused=!1,a.focussed=!1,a.interrupted=!1},b.prototype.postSlide=function(a){var b=this;b.unslicked||(b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay&&b.autoPlay(),b.options.accessibility===!0&&b.initADA())},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(b){b=b||1;var e,f,g,c=this,d=a("img[data-lazy]",c.$slider);d.length?(e=d.first(),f=e.attr("data-lazy"),g=document.createElement("img"),g.onload=function(){e.attr("src",f).removeAttr("data-lazy").removeClass("slick-loading"),c.options.adaptiveHeight===!0&&c.setPosition(),c.$slider.trigger("lazyLoaded",[c,e,f]),c.progressiveLazyLoad()},g.onerror=function(){3>b?setTimeout(function(){c.progressiveLazyLoad(b+1)},500):(e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),c.$slider.trigger("lazyLoadError",[c,e,f]),c.progressiveLazyLoad())},g.src=f):c.$slider.trigger("allImagesLoaded",[c])},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,!c.options.infinite&&c.currentSlide>e&&(c.currentSlide=e),c.slideCount<=c.options.slidesToShow&&(c.currentSlide=0),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.cleanUpSlideEvents(),b.initSlideEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.setPosition(),b.focusHandler(),b.paused=!b.options.autoplay,b.autoPlay(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(){var c,d,e,f,h,b=this,g=!1;if("object"===a.type(arguments[0])?(e=arguments[0],g=arguments[1],h="multiple"):"string"===a.type(arguments[0])&&(e=arguments[0],f=arguments[1],g=arguments[2],"responsive"===arguments[0]&&"array"===a.type(arguments[1])?h="responsive":"undefined"!=typeof arguments[1]&&(h="single")),"single"===h)b.options[e]=f;else if("multiple"===h)a.each(e,function(a,c){b.options[a]=c});else if("responsive"===h)for(d in f)if("array"!==a.type(b.options.responsive))b.options.responsive=[f[d]];else{for(c=b.options.responsive.length-1;c>=0;)b.options.responsive[c].breakpoint===f[d].breakpoint&&b.options.responsive.splice(c,1),c--;b.options.responsive.push(f[d])}g&&(b.unload(),b.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,
d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.interrupt=function(a){var b=this;a||b.autoPlay(),b.interrupted=a},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,j,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.options.asNavFor&&(j=i.getNavTarget(),j=j.slick("getSlick"),j.slideCount<=j.options.slidesToShow&&j.setSlideClasses(i.currentSlide)),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"down":"up":"vertical"},b.prototype.swipeEnd=function(a){var c,d,b=this;if(b.dragging=!1,b.interrupted=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe){switch(d=b.swipeDirection()){case"left":case"down":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.currentDirection=0;break;case"right":case"up":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.currentDirection=1}"vertical"!=d&&(b.slideHandler(c),b.touchObject={},b.$slider.trigger("swipe",[b,d]))}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return b.interrupted=!0,1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;a.options.autoplay&&(document[a.hidden]?a.interrupted=!0:a.interrupted=!1)},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});



$(function(){


	
	var intro__duration;
	var quiz__duration;
	var timer__sound;
	var response__ok__anim;
	var response__ok__sound;
	var response__false__anim;
	var response__false__sound;
	var score_text;
	var score_text_en;
	var slickOp;
	var data_refresh_timer;

	var filters = [];
	var slides_menu = [];
	var homeSlider_slides = [];
	var questions = [];

	var i_date = new Date();
	var i_day = i_date.getDate();
	var i_month = i_date.getMonth()+1;
	var i_year = i_date.getFullYear();


	if (i_day < 10){
		i_day = "0"+i_day;
	}

	if(i_month < 10){
		i_month = "0"+i_month;
	}
	

	var menu;
	var homeSlider;
	var btn__menu;
	var btn__langs;


	var pll_d;
	var pll_date;
	var pll_couleur;
	var pll_qualificatif;
	var pll_valeur;
	var pll_sous_indices;

	var dt_1;
	var dt_2;
	
	var lang ="fr";
	var homeSlider_data_0;
	var data_refresh_time;

	var quiz_result_duration;
	var quiz_resultAnim__duration;

	var rte_key = "";
	var atmo_key = "";

	var presence = 0;
	var timer_presence;

	var filteredOut = false;

	var screen_state = false; // False lorsque l'écran est éteint, True lorsqu'il est allumé
	const duree_timer_presence = 1000; // durée en seconde pour simplifier 

//OBJECTS _____________



/*----------------------------------------------------------------
	Récupération des données
----------------------------------------------------------------*/
function init(callback){

	$.getJSON("/data/data.json", function(data,index) {
		
			intro__duration = data.settings.durations.duration_titles;
			quiz__duration = data.settings.durations.duration_quiz;
			quiz_result_duration = data.settings.durations.question_resultMessage_duration;
			quiz_resultAnim__duration=data.settings.durations.question__resultAnim__duration;
			timer__sound = data.settings.questions.timer__sound;
			response__ok__sound = data.settings.questions.response__ok__sound;
			response__false__sound = data.settings.questions.response__false__sound;
			response__ok__anim = data.settings.questions.response__ok__anim;
			response__false__anim = data.settings.questions.response__false__anim;
			score_text = data.settings.questions.score_text;
			score_text_en = data.settings.questions.score_text_en;
			data_refresh_time = data.settings.durations.data_refresh_time;
			menuNav__timeout__duration = data.settings.durations.menu_timer;
			cursor = data.settings.cursor;
			if(cursor!=="active"){$("body").addClass("noCursor")}


			menu = new Menu();
			homeSlider = new HomeSlider();
			btn__menu = new Menu_button();
			btn__menu.display();
			btn__langs = new Menu_lang_buttons();
			btn__langs.display();

			
			
			

			get_filters = function(){
				
				
				let i = 0;
				$.each( data.settings.filters , function(key, value ) {
					
					let filter_name = value[0],
						filter_name_en = value[1];
		    			filter_key = value[2];
					
					filters[i]=new Menu_filters(key,filter_key,filter_name,filter_name_en,i);
					filters[i].display();

		    		i++;
				
				});
			}

			get_slides = function(){
				let i=0;


				$.each( data.slides , function(key, value) {
					var filter_key = value.filter_key,
						media_type = value.media_type,
						intro_anim = value.intro_anim,
						intro_audio = value.intro_audio,
						color = value.color,
						intro_img = value.intro_img,
						
						type = value.type,
						title = value.title,
						type_en = value.type_en,
						title_en = value.title_en,

						shad = value.shad;
						
						
						

					slides_menu[i] = new Menu_slides(filter_key,color,intro_img,type,title,type_en,title_en,i);
					slides_menu[i].display();

					if(media_type == "video"){
						var video = value.video;
						var video_en = value.video_en;
						homeSlider_slides[i] = new HomeSlider_slide_vid(key,color,intro_anim,intro_audio,video,type,title,type_en,title_en,video_en,shad,media_type,filter_key,i);
					
					}else if (media_type == "quiz"){
						let questions_selection = [];
						var o=0;
						$.each( value.questions , function(key, value) {
							questions_selection[o] = value;
							o++;
						})


						homeSlider_slides[i] = new HomeSlider_slide_quiz(key,color,intro_anim,intro_audio,questions_selection,intro_img,type,title,type_en,title_en,shad,media_type,filter_key,i);
					
					}else if (media_type == "data"){

						var data_num = value.data_num;
						var color_states = value.color_states;
						var duration = value.duration;

						if (data_num == 0){
							var videos =value.animations;
							var sounds =value.sounds;


							homeSlider_slides[i] = new HomeSlider_slide_data_0(key,color,type,title,type_en,title_en,data_num,color_states,videos,sounds,duration,media_type,filter_key,i);
							homeSlider_data_0 = homeSlider_slides[i];
						}else if(data_num == 1){
							homeSlider_slides[i] = new HomeSlider_slide_data_1(key,color,type,title,type_en,title_en,data_num,duration,media_type,filter_key,i);
							homeSlider_data_1 = homeSlider_slides[i];

						}else if(data_num == 2){
							var video = value.video;
							var video_en = value.video_en;
							homeSlider_slides[i] = new HomeSlider_slide_data_2(key,color,type,title,type_en,title_en,data_num,video,video_en,duration,media_type,filter_key,i);

						}else if(data_num == 3){
							var val1 = value.value1;
							var val2 = value.value2;
							homeSlider_slides[i] = new HomeSlider_slide_data_3(key,color,type,title,type_en,title_en,data_num,duration,media_type,filter_key,val1,val2,i);
							homeSlider_data_3 = homeSlider_slides[i];
						}

					}

					//homeSlider_slides[i] = new HomeSlider_slide_vid(key,color,intro_anim,intro_audio,type,title,video,i);



					i++;
				});
			}
			


			get_questions = function(){
				

				let i=0;
				$.each( data.questions , function(key, value) {

					//FR 
					let num = key;
					var color_back = value.color_back;
					let response_ok = value.response_ok;
					let response_ok_content;
					let response_ok_content_en;

					let question = value.question;
					let reponses = [];
					let o = 0;
					
					$.each( value.responses , function(key, value) {
						reponses[o] = value;
						o++;
						if(response_ok == key){
							response_ok_content = value;

						}
					})
					let message = value.message;

					// EN 
					let question_en = value.question_en;
					let reponses_en = [];
					let oo = 0;
					$.each( value.responses_en , function(key, value) {
						reponses_en[oo] = value;
						oo++;

						if(response_ok == key){
							response_ok_content_en = value;

						}
					})
					let message_en = value.message_en;
					

					questions[i] = new Question(num,response_ok,color_back,question,reponses,message, question_en,reponses_en, message_en,response_ok_content,response_ok_content_en, i);

					i++;
					
				})
			}

			menuNav_timer = new MenuNav__timer();

			slick_activation = function(){
				slickOp = $('.homeSlide').slick({
					lazyLoad:"progressive",
					arrows: false,
					speed:600,
					cssEase:"cubic-bezier(0.87, 0.03, 0.41, 0.9)",
					dots:true
				});
				//$('.homeSlide').slick('slickFilter', ".video");
				$(".container").addClass("slicked");
			}


			

			/*----------------------------------------------------------------
				SOCKET RTE - Socket de récupération des données des diverses productions 
				électriques
			----------------------------------------------------------------*/
			get_rte_api = function(){

				socket.emit('ask_for_rte_data', function(data){
					let all_en = data.actual_generations_per_production_type;

					ene_1 = all_en[7].values[all_en[7].values.length-1].value || 0;
					ene_2 = all_en[1].values[all_en[1].values.length-1].value || 0;
					ene_3 = all_en[2].values[all_en[2].values.length-1].value || 0;
					ene_4 = all_en[3].values[all_en[3].values.length-1].value || 0;
					ene_5 = all_en[10].values[all_en[10].values.length-1].value || 0;
					ene_6 = all_en[8].values[all_en[8].values.length-1].value || 0;
					ene_7 = all_en[4].values[all_en[4].values.length-1].value+all_en[5].values[all_en[5].values.length-1].value+all_en[6].values[all_en[6].values.length-1].value || 0;
					ene_8 = all_en[0].values[all_en[0].values.length-1].value || 0;
					ene_total = ene_1+ene_2+ene_3+ene_4+ene_5+ene_6+ene_7+ene_8 || 1;
					ene_total = Math.round(ene_total*100)/100;


					en_1 = (ene_1*100)/ene_total;
					en_2 = (ene_2*100)/ene_total; 
					en_3 = (ene_3*100)/ene_total;
					en_4 = (ene_4*100)/ene_total;
					en_5 = (ene_5*100)/ene_total;
					en_6 = (ene_6*100)/ene_total;
					en_7 = (ene_7*100)/ene_total;
					en_8 = (ene_8*100)/ene_total;

					

					en_1 = Math.round(en_1*100)/100;
					en_2 = Math.round(en_2*100)/100;
					en_3 = Math.round(en_3*100)/100;
					en_4 = Math.round(en_4*100)/100;
					en_5 = Math.round(en_5*100)/100;
					en_6 = Math.round(en_6*100)/100;
					en_7 = Math.round(en_7*100)/100;
					en_8 = Math.round(en_8*100)/100;

					en_total = en_1+en_2+en_3+en_4+en_5+en_6+en_7+en_8;

					homeSlider_data_1.data_apply();
				});

			}

			/*----------------------------------------------------------------
				SOCKET ATMO - Socket de récupération des données de qualité de l'air
				chez ATMO
			----------------------------------------------------------------*/
			get_atmo_api = function(){
				socket.emit('ask_for_atmo_data', function(data){
					console.log(data);
					pll_d = data.data[0];
					pll_date = pll_d.date_calcul || "";
					pll_couleur = pll_d.couleur_html || "#ffffff";
					pll_qualificatif = pll_d.qualificatif || "";
					pll_valeur = pll_d.indice || 0;
					pll_sous_indices = pll_d.sous_indices;
					homeSlider_data_0.data_apply(pll_valeur,pll_date,pll_sous_indices);// attribuer data to slide 
				});
			}
	
			/*------------------------------------------------------------
			 	SOCKET CNR - Socket de récupération des données de production de la CNR
			 ------------------------------------------------------------*/
			/*get_cnr_api = function() {
  				socket.emit('ask_for_cnr_data', function(data) {
    				// Ici tu charges les data dans les variables deton app...

					dt_1 = data[0].puissancetempsreel || 0;
					dt_2 = data[1].puissancetempsreel || 0;

					homeSlider_data_3.data_apply(dt_1,dt_2);
					

  				});
			}*/


			/*----------------------------------------------------------------
				SOCKET PRESENCE - Socket de détection de présence.
				Lorsque présence vaut 1, les détecteurs ont détecté quelqu'un.
			----------------------------------------------------------------*/

			// SOCKET PRESENCE À ACTIVER APRÈS TESTS 
			socket.on('presence', function(data){
				data.presence=1;
				if (data.presence == 1 && presence == 0) {

					// Il n'y avait personne et quelqu'un est détecté
					console.log("Il n'y avait personne et quelqu'un est détecté...");

					// start timer
					start_decount();
					screen__on();

				}else if(data.presence == 1 && presence == 1){
					
					// Il y avait quelqu'un et une nouvelle personne est détectée
					console.log("Il y avait quelqu'un et une nouvelle personne est détectée...");
					// rénitialiser le timer
					start_decount();
					
				}


			});

			callback();

	})
}






/*----------------------------------------------------------------
	Initalisation de l'application
----------------------------------------------------------------*/
init(function(){
	get_questions();
	get_slides();
	menu.spacers();
	slick_activation();
	get_filters();
	homeSlider.display();
	get_rte_api();
	get_atmo_api();
	//get_cnr_api();
	dataRefresh();	
	screen__on();
	start_decount();
});



/*----------------------------------------------------------------
PAGE DE CHARGEMENT lorsque on réactualise la page. 
La page bloque l'activation de l'app au clic jusqu'à ce que le contenu soit chargé.
Ensuite on supprime la page "loading-page" avec la classe "off".
-----------------------------------------------------------------*/

$( document ).ready(function() {
    console.log( "ready!" );
   $(".loading-page").addClass("off");
});



/*----------------------------------------------------------------
	LISTENER pour réveiller l'app lors du CLICK sur "app-on"
	Supprimer l'ecran noir au click et lancer l'appli.
----------------------------------------------------------------*/
$(".app-on").click(function(){

	 if(!screen_state) {
	 	start_decount();
		screen__on();
  	} else {
		screen__off();
		
  	}
});

/*----------------------------------------------------------------
	LISTENER pour éteindre l'écran lors d'un KEYPRESS de la touche "entrée"
----------------------------------------------------------------*/
$(document).keypress(function(event){
		
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '13'){
			if (screen_state) {
				screen__off();
			} else {
				screen__on();
			}
		}
});


/*----------------------------------------------------------------
	FONCTION pour réveiller l'écran
----------------------------------------------------------------*/
function screen__on(){

	setTimeout(function(){
		screen_state = true;

		let current = $(".slick-current").attr("data-slick-index");
		goToSlide(0);

		$(".menu_slide_0").addClass("anim");

		menu.move(".menu_slide_"+current,"","",function(){
			homeSlider.open();
		});
		
		if(current == "0") {
			
				homeSlider_slides[0].intro__play(function(){
				
					homeSlider_slides[0].content__play();
				});
			
			
		}
		
		$(".black-screen").addClass("off");
		$(".container").removeClass("off");
		presence = 1;
	}, 3000);
}

/*----------------------------------------------------------------
	TIMERS de présence
----------------------------------------------------------------*/
function init_timer() {
	clearTimeout(timer_presence);
}

function start_decount(){
	init_timer();
	timer_presence = setTimeout(function(){

			screen__off();
			presence = 0;
	}, duree_timer_presence * 1000); // La durée est déclarée en seconde, il faut en faire des millisec.
}


/*----------------------------------------------------------------
	FONCTION pour éteindre l'écran
----------------------------------------------------------------*/
function screen__off(){
	
	console.log("screenOff");
	screen_state = false;

	$(".black-screen").removeClass("off");
	$(".container").addClass("off");

	filters[0].reset();
	homeSlider_slides[0].intro__reset();
	homeSlider_slides[0].content__reset();
	
	changeCurrent(0); // mettre à nouveau la slide 0 active 
	
	if ($(".homeSlide").hasClass("active")){
		btn__menu.clickAction();
	}
	
	menuNav_timer.off();
	presence = 0;
}

/*----------------------------------------------------------------
	Raffraichir les données api
	à intervalles réguliers
----------------------------------------------------------------*/
function dataRefresh(){
	data_refresh_timer = setInterval(function(){

		// récupération de "l'heure actuelle"
		var date = new Date();
		var hour = date.getHours();
		var minutes = date.getMinutes();

		//vérification si "l'heure actuelle" est égale à "l'heure de rafraichissement".
		// l'heure de rafraichissement est définit dans le fichier data.json sous l'intitulé "data_refresh_time".

		if(hour == data_refresh_time[0] && minutes == data_refresh_time[1]){ 

			// rafraîchir les dates des slides infos
			i_date = new Date();
			i_day = i_date.getDate();
			i_month = i_date.getMonth()+1;
			i_year = i_date.getFullYear();

			if (i_day < 10){
				i_day = "0"+i_day;
			}

			if(i_month < 10){
				i_month = "0"+i_month;
			}

			get_atmo_api();
			get_rte_api();
			//get_cnr_api();

			


			


		}
		
	}, 10000)
}


/*----------------------------------------------------------------

	OBJETS

----------------------------------------------------------------*/

var filtered = []; //list of slide id that are actives [0,3,4,5]
var blockLast = false;
var filterActive = false;

function HomeSlider(){


	this.display = function(){
		$(".homeSlide").on("beforeChange",function(event,slick, currentSlide){
			
			toCompare=currentSlide; // current slide in variable to compare in after 


			if (currentSlide == filtered.length-1) { // l'avant dernière
				blockLast = false;
			}


		});
		$(".homeSlide").on("afterChange", function(event,slick, currentSlide){

			cuurrent = currentSlide;


			if(toCompare != currentSlide && blockLast == false){ //

				
				if (currentSlide == filtered.length-1) { //  si c'est l'avant dernière slide blocklast true pour la prochaine
					blockLast = true;

				}

				for(i=0;i<filtered.length;i++){ // reset all slide in the filtered array
					homeSlider_slides[filtered[i]].intro__reset();
					homeSlider_slides[filtered[i]].content__reset();
				}

				homeSlider_slides[filtered[currentSlide]].intro__play(function(){ // play the slide
					
					
					homeSlider_slides[filtered[currentSlide]].content__play();
				});

			}else {
				if (currentSlide == filtered.length-1) { //  si c'est l'avant dernière slide blocklast true pour la prochaine
					blockLast = true;
				}
			}
		});

		
		$(".quizz_timerSound").attr("src",timer__sound);
		$(".quizz_goodSound").attr("src",response__ok__sound);
		$(".quizz_badSound").attr("src",response__false__sound);
	}

	this.close = function(){

		let num = $(".slick-current").attr("data-slick-index");
		
		menu.move(".menu_slide_"+num,"zoom","noAnim");

		$(".menuNav__wrap").addClass("active");
		$(".homeSlide").removeClass("active");
		$(".btn__menu").addClass('active');
		$(".btn__lang__wrap").addClass('active');
		$(".filters__wrap").addClass('active');
	}

	this.open = function(delay){

		let num = $(".slick-current").attr("data-slick-index");
				$(".menuNav__wrap").removeClass("active");
				$(".btn__menu").removeClass('active');
				$(".btn__lang__wrap").removeClass('active');
				$(".filters__wrap").removeClass('active');

				if(delay){
					setTimeout(function(){
						$(".homeSlide").addClass("active");
					},delay)
				}else{
					$(".homeSlide").addClass("active");
				}
				
				
		}
}

function HomeSlider_slide_vid(key,color,intro_anim,intro_audio,video,type,title,type_en,title_en,video_en,shad,media_type,filter_key,i){

	this.key = key;
	this.color = color;
	this.intro_anim = intro_anim;
	this.intro_audio = intro_audio;
	this.type = type;
	this.title = title;
	this.video = video;
	this.i = i;
	this.shad = shad;


	let homeSlide = new Box("div","homeSlide__slide "+filter_key+" "+media_type+" "+key,".homeSlide");
		
		let titleBlock= new Box("div","homeSlide__slide__titleBlock",homeSlide.el);
		$(titleBlock.el).css("background", color);

			let titleAnim = new Box("div","homeSlide__slide__titleBlock__anim",titleBlock.el),
				titleAnim_img = new Box ("img","",titleAnim.el);
				$(titleAnim_img.el).attr("src",intro_anim);

			let sound = new Box("audio","homeSlide__slide__titleBlock__animSound",titleAnim.el);
			$(sound.el).attr("src",intro_audio).attr("preload","auto");


			let titleText = new Box("div","homeSlide__slide__titleBlock__title",titleBlock.el);
				
				let title_type = new Box("h3","homeSlide__slide__titleBlock__title__type",titleText.el);
				$(title_type.el).text(type);

				let title_name = new Box("h2","homeSlide__slide__titleBlock__title__name",titleText.el);
				$(title_name.el).text(title)

		
		let content = new Box("div","homeSlide__slide__video__wrap homeSlide__content",homeSlide.el);

			if(this.shad == "on"){
				let slide_shad = new Box("div","homeSlide_slide_shad",content.el);
			}

			

			let videoo = new Box("video","homeSlide__slide__video",content.el);
			$(videoo.el).attr("src",video).attr("preload","auto");;

			let timeBar = new Box("div","time-bar",content.el);
			let titleInfo = new Box("div","homeSlide__slide__titleInfo",content.el);
			$(titleInfo.el).css("background",color);
				let titleInfo_tex = new Box("span","homeSlide__slide__titleInfo__text",titleInfo.el);
				$(titleInfo_tex.el).text(title);
				let titleInfo_duration = new Box("span","homeSlide__slide__titleInfo__duration",titleInfo.el);


	let timer_intro;
	let timer_content;
	let vid_timer = 0;
	let vid_current;
	let pause = false;
	this.playing=false;

	this.french_mode = function(){
		$(title_type.el).text(type);
		$(title_name.el).text(title);
		$(videoo.el).attr("src",video);
		$(titleInfo_tex.el).text(title);
	}

	this.english_mode = function(){
		$(title_type.el).text(type_en);
		$(title_name.el).text(title_en);
		$(videoo.el).attr("src",video_en);
		$(titleInfo_tex.el).text(title_en);
	}

	this.intro__play = function(callback){
		$(titleText.el).addClass("active");
					$(titleAnim.el).addClass("active");

					// reset apng
					let anim_src = $(titleAnim_img.el).attr("src");
					anim_src = anim_src+"?a="+Math.random();
					$(titleAnim_img.el).attr("src","");
					$(titleAnim_img.el).attr("src",anim_src);


					// intro sound play
					let animSound = $(sound.el)[0];
					if (animSound== undefined){
					}else {
						animSound.currentTime = 0;

						setTimeout(function(){
							animSound.play();
						},300);
					}

					//Animation after timer_intro 
					timer_intro = setTimeout(function(){
						
						durationInfo();

						$(titleBlock.el).addClass("off"); /// SLIDE GO DOWN 
						if(callback){
							callback();
						}
						
					},intro__duration*1000);


		function durationInfo(){
				let vid = $(videoo.el).get(0);
						let current_duration = vid.duration;
						current_duration= Math.trunc(current_duration);

						if(current_duration>60){
							var duration_decimal = current_duration/60;
							var duration_minutes = Math.trunc(duration_decimal);
							var duration_secondes = current_duration-(60*duration_minutes);
							var duration_final = duration_minutes+"'"+duration_secondes;
						}else {

							var duration_final = "0'"+current_duration;
						}

						$(titleInfo_duration.el).empty();
						$(titleInfo_duration.el).append(duration_final);

						$(titleInfo.el).addClass("active");
						setTimeout(function(){
							$(titleInfo.el).removeClass("active");
						},2000);
			}
	}

	this.intro__reset = function(){
		let animSound = $(sound.el)[0];
			if (animSound== undefined){
			}else {
			animSound.pause();
			}

				$(titleText.el).removeClass("active");
				$(titleAnim.el).removeClass("active");
				$(titleBlock.el).removeClass("off").removeClass("none");
				clearTimeout(timer_intro);
				this.playing = false;
	}

	this.content__play = function(){

		let vid = $(videoo.el).get(0),
		vid_duration = vid.duration;
				

				$(content.el).addClass("active");
				
				
				console.log(videoo.el);
				console.log("video play");
				vid.play();
				this.playing = true;


				timer_content = setInterval(function(){

					if(vid_timer < vid_duration){
						vid_timer += 0.022;
					}


					let percent = (100*vid_timer)/vid_duration;
					let percentCss = percent+"%";
					$(timeBar.el).css("width",percentCss);
					
					if (percent >= 100.00){


						if(filterActive==true && blockLast == true){

							$(".menuNav .current").removeClass("current");

							homeSlider.close();
							filters[0].reset(function(){});
							filteredOut = true;
							filterActive = false;
						
						/*if( blockLast == true){

							
							clearInterval(timer_content);
							location.reload();*/
							

						}else{
							clearInterval(timer_content);
							$('.homeSlide').slick('slickNext');


						}
							
					}


					
				

				},22);


	}

	this.content__reset = function(){
		let vid = $(videoo.el).get(0);
		$(timeBar.el).css("width","0");
		vid_timer = 0;
		clearInterval(timer_content);
		$(content.el).removeClass("active");
		vid.pause();
		vid.currentTime = 0;

		console.log("video reset");
	}

	this.content__pause = function(){
		clearTimeout(timer_intro);
		clearInterval(timer_content);
		let vid = $(videoo.el).get(0);
		vid.pause();
		console.log(videoo.el);
		console.log("video pause");
	}
}


function HomeSlider_slide_quiz(key,color,intro_anim,intro_audio,questions_selection,intro_img,type,title,type_en,title_en,shad,media_type,filter_key,i){
	this.key = key;
	this.color = color;
	this.intro_anim = intro_anim;
	this.intro_audio = intro_audio;
	this.questions_selection = questions_selection;
	this.intro_img = intro_img;
	this.type = type;
	this.title = title;
	this.type_en = type_en;
	this.title_en = title_en;
	this.i = i;
	this.shad = shad;
	let scoreTextm ="sur";
	


	let homeSlide = new Box("div","homeSlide__slide "+media_type+" "+filter_key+" "+key,".homeSlide");
		
		let titleBlock= new Box("div","homeSlide__slide__titleBlock",homeSlide.el);
		$(titleBlock.el).css("background", color);

		let timeBar = new Box("div","time-bar",homeSlide.el);

			let titleImg = new Box("img","homeSlide__slide__titleBlock__img",titleBlock.el);
				$(titleImg.el).attr("src",this.intro_img);

			let titleText = new Box("div","homeSlide__slide__titleBlock__title",titleBlock.el);
				
				let title_type = new Box("h3","homeSlide__slide__titleBlock__title__type",titleText.el);
				$(title_type.el).text(type);

				let title_name = new Box("h2","homeSlide__slide__titleBlock__title__name",titleText.el);
				$(title_name.el).text(title)


				for (i=0;i<questions_selection.length;i++){
					let o = i+1;
					questions[questions_selection[i]].add(homeSlide.el);
					$(questions[questions_selection[i]].numberQuestion.el).text(o+" / "+questions_selection.length);
				}

				
				let quizScore = new Box("div","question_score",homeSlide.el);
				$(quizScore.el).css("background",questions[questions_selection[0]].color_back);
					let quizScore_img = new Box("img","question_score_img",quizScore.el);
					$(quizScore_img.el).attr("src",intro_img);
					let quizScore_text_wrap = new Box("div","question_score_text_wrap",quizScore.el);
						let quizScore_supText = new Box("div","question_score_supText", quizScore_text_wrap.el);
						let quizScore_text = new Box("div","question_score_text",quizScore_text_wrap.el);
						$(quizScore_supText.el).text(score_text);
	

	

	let timer_intro;


	this.french_mode = function(){
		$(title_type.el).text(type)
		$(title_name.el).text(title);
		$(quizScore_supText.el).text(score_text);
		scoreTextm = "sur";
		for (i=0;i<questions_selection.length;i++){
			questions[questions_selection[i]].french_mode();
		}
	}

	this.english_mode = function(){
		scoreTextm = "out of";
		$(title_type.el).text(type_en)
		$(title_name.el).text(title_en);
		$(quizScore_supText.el).text(score_text_en);
		
		for (i=0;i<questions_selection.length;i++){
			questions[questions_selection[i]].english_mode();
		}
	}


	this.intro__play = function(callback){
		//$(questions[questions_selection[0]].content.el).addClass("active");


		
		$(titleText.el).addClass("active");
					


					//Animation after timer_intro 
					timer_intro = setTimeout(function(){
						
						//$(titleBlock.el).addClass("off");
						
						if(callback){
							callback();
						}
						
					},intro__duration*1000);
	}

	this.intro__reset = function(){

			$(".homeSlide__slide__questionnaire__wrap").removeClass("active");
				$(titleText.el).removeClass("active");
				$(titleBlock.el).removeClass("off").removeClass("none");
				clearTimeout(timer_intro);
		
	}


	let timer_content;
	let timer_questionMess;
	let timer_questionShow;
	let timer_nextSlick;
	let quiz_timer = 0;
	let pause = false;
	this.playing=false;
	let quiz_timer_sound = $(".quizz_timerSound").get(0);
	let quiz_good_sound = $(".quizz_goodSound").get(0);
	let quiz_bad_sound = $(".quizz_badSound").get(0);
	let questionEnded = false;

	let scoreOn = false;
	let score=0;

	let counter=0;

	this.content__play = function(){
		$(questions[questions_selection[0]].content.el).addClass("active");

		let that = this;
		//this.playing = true;
		let counter_max = questions_selection.length;
		counter =0;
		let percent;


		quiz_timer_sound.play();
		questionRestart();

		// Click sur une réponse 
		$(document).unbind("click").on("click",".questionnaire__reponses__li",function(){



			if(questionEnded == false){ // vérifier si le timer est toujours en cours (éviter de cliquer pendant l'anim false si l'utilisateur n'a pas cliqué)

				if (counter < counter_max){ // vérifier si c'était la dernière question
					
					questionEnd(this,function(){ // lancer le process lors d'une réponse de question
						
						questionRestart(); // callback après que "questionEnd" ait fini : démarrer la question suivante  
					});
				}else{
					questionEnd(this,function(){ // lancer le process lors d'une réponse de question
						questionScore(); // callback après que "questionEnd" ait fini : afficher résultat car c'était la dernière question  
					});
				}
			}
			
				
		});


		// Questions réactions 
		function questionRunning(){


			questionEnded = false;
			
			if(quiz_timer < quiz__duration){
				quiz_timer += 0.022;
			}
					
					percent = (100*quiz_timer)/quiz__duration;
					let percentCss = percent+"%";
					$(timeBar.el).css("width",percentCss);
					
					if (percent >= 100.00){


							/*let resp1 = $(questions[questions_selection[counter-1]].content.el).find(".reponse_1");
							let resp2 = $(questions[questions_selection[counter-1]].content.el).find(".reponse_2");
							let resp3 = $(questions[questions_selection[counter-1]].content.el).find(".reponse_3");*/
							
							

							if (counter < counter_max){
									questionEnd("",function(){
									
										if(counter==1){
											$('.homeSlide').slick('slickNext');
							
										}else{

											questionRestart();

										}

									
									
									});
								
								}else{
									questionEnd("",function(){
									questionScore();

									});
								}


							


							

					}
		}

		function questionEnd(that,callback){

			// that = l'élément sur lequel on clique lorsqu'on répond

			questionEnded = true;

			let o = counter-1;
			let reponse_ok = questions[questions_selection[o]].response_ok;
					
					// ANIMATION SELON LA REPONSE 
					if(that=="pause"){

					}else{


						if($(that).hasClass(reponse_ok)){ // si bonne réponse

							$(that).addClass("click_anim").addClass("goodgood"); // changer aspect du bouton en correct
							$(questions[questions_selection[o]].content.el).addClass("good"); // changer couleur de fond "vert"

							// reset apng anim good
							let anim_src = response__ok__anim;
							anim_src = anim_src+"?a="+Math.random();
							

							$(questions[questions_selection[o]].quizAnim_img.el).attr("src",anim_src ); // lancer animation Good
							quiz_good_sound.play(); // activer son Good

							$(questions[questions_selection[o]].quizResponseMessage.el).css("background","#59A535"); // couleur fond message
							score++; // ajouter +1 au score

						}else {

							$(that).addClass("click_anim").addClass("bad"); // changer aspect du bouton en mauvais
						//$(questions[questions_selection[o]].quizResponses_wrap.el).find("."+reponse_ok).addClass("good");

						$(questions[questions_selection[o]].content.el).addClass("bad"); // changer couleur de fond "rouge"

						// reset apng anim false
						let anim_src = response__false__anim;
						anim_src = anim_src+"?a="+Math.random();
							

						$(questions[questions_selection[o]].quizAnim_img.el).attr("src",anim_src); //lancer animation Bad
						quiz_bad_sound.play(); //lancer son Bad

						$(questions[questions_selection[o]].quizResponseMessage.el).css("background","#CD0000"); // couleur fond message
						


					}

				}

				
				// Response message apparition
				timer_questionMess = setTimeout(function(){
					$(questions[questions_selection[o]].quizResponseMessage.el).addClass("active");

				},quiz_resultAnim__duration*1000);


				// Callback
				if(callback){

					timer_questionShow = setTimeout(function(){

						callback();

					},quiz_resultAnim__duration*1000+quiz_result_duration*1000);
				}
					



					clearInterval(timer_content);
					percent=100.00;
					$(timeBar.el).css("width","100%");
					quiz_timer_sound.pause();
		}

		function questionRestart(){


			$(questions[questions_selection[counter]].content.el).addClass("active");
			questions[questions_selection[counter]].anim_play();

			$(timeBar.el).css("width","0");
			quiz_timer = 0;
			quiz_timer_sound.pause();
			quiz_timer_sound.currentTime = 0;
			percent = 0;

			timer_content = setInterval(questionRunning,22);
			quiz_timer_sound.play();
			counter++;
		}

		function questionScore(){

			scoreOn = true; // score window active
			$(timeBar.el).css("width","0");
			quiz_timer = 0;
			quiz_timer_sound.pause();
			quiz_timer_sound.currentTime = 0;
			percent = 0;
			

			$(quizScore_text.el).text(score+" "+scoreTextm+" "+questions_selection.length);
			$(quizScore.el).addClass("active");


			timer_nextSlick = setTimeout(function(){
				scoreOn = false;
				$('.homeSlide').slick('slickNext');

			},3000);


		}
	}

	this.content__reset = function(element){

		

		if(counter>0){

			let ooo = counter-1;
			questions[questions_selection[ooo]].anim_reset();
		}
		
		questionEnded = false;
		score = 0;
		clearTimeout(timer_questionMess);
		clearTimeout(timer_questionShow);
		clearTimeout(timer_nextSlick);
		$(timeBar.el).css("width","0");
		quiz_timer = 0;
		clearInterval(timer_content);
		quiz_timer_sound.pause();
		quiz_good_sound.pause();
		quiz_bad_sound.pause();
		quiz_timer_sound.currentTime = 0;
		quiz_good_sound.currentTime = 0;
		quiz_bad_sound.currentTime = 0;
		$(".response__message").removeClass("active");
		$(".questionnaire__reponses__li").removeClass("bad").removeClass("good").removeClass("goodgood").removeClass("click_anim");
		$(".homeSlide__slide__questionnaire__wrap").removeClass("good").removeClass("bad");
		$(".question_score").removeClass("active");



		for (i=1; i<questions_selection.length;i++){
			$(questions[questions_selection[i]].content.el).removeClass("active");
		}
	}

	this.content__pause = function(){
		this.content__reset();
	}
}

function Question(num,response_ok,color_back,question,responses,message,question_en,reponses_en, message_en,response_ok_content,response_ok_content_en,i){
	this.i = i;
	this.num = num;
	this.question = question;
	this.responses = responses;
	this.response_ok = response_ok;
	this.message = message;
	this.color_back = color_back;
	this.content;
	this.quizQuestions_wrap,
	this.quizQuestion,
	this.quizResponses_wrap,
	this.quizResponseMessage;
	this.quizAnim;
	this.quizAnim_img;
	this.quizResponses;

	this.question_en = question_en;
	this.reponses_en = reponses_en;
	this.message_en = message_en;

	let titleAnim;
	let titleAnim_img;
	let sound;


	
	this.french_mode = function(){
		$(this.quizQuestion.el).text(question);
		for (i=0;i<3;i++){
			$(this.quizResponses[i].el).text(this.responses[i]);
		}
		$(this.quizResponseMessage.el).html("<span class='response_tit'>"+response_ok_content+"</span><span class='response_tex'>"+this.message+"</span>");
	}

	this.english_mode = function(){
		$(this.quizQuestion.el).text(question_en);
		for (i=0;i<3;i++){
			$(this.quizResponses[i].el).text(this.reponses_en[i]);
		}
		$(this.quizResponseMessage.el).html("<span class='response_tit'>"+response_ok_content_en+"</span><span class='response_tex'>"+this.message_en+"</span>");


	}



	this.add = function(wrap,que){
		 this.content = new Box("div","homeSlide__slide__questionnaire__wrap homeSlide__content",wrap);
		 $(this.content.el).css("background",this.color_back);

		 	 titleAnim = new Box("div","homeSlide__slide__titleBlock__anim_q",this.content.el),
				titleAnim_img = new Box ("img","",titleAnim.el);
				$(titleAnim_img.el).attr("src","medias/animations/anooki-jump.png");

			sound = new Box("audio","homeSlide__slide__titleBlock__animSound",titleAnim.el);
			$(sound.el).attr("src","medias/animations/anooki-jump.wav");

			
			this.quizAnim = new Box("div","questionnaire__anim",this.content.el);
			this.quizAnim_img = new Box("img","",this.quizAnim.el);
			this.quizQuestions_wrap = new Box("div","questionnaire",this.content.el);
			this.numberQuestion = new Box("div","num__question",this.quizQuestions_wrap.el);
			this.quizQuestion = new Box("div","questionnaire__question ",this.quizQuestions_wrap.el);
			this.quizResponses_wrap = new Box("ul","questionnaire__reponses ",this.quizQuestions_wrap.el);

			$(this.quizQuestion.el).text(question);

				this.quizResponses =[];
				for (i=0;i<3;i++){
					let o = i+1;
					this.quizResponses[i] = new Box("li","questionnaire__reponses__li reponse_"+o,this.quizResponses_wrap.el);
					$(this.quizResponses[i].el).text(this.responses[i]);
				}
			

			this.quizResponseMessage = new Box("div","response__message",this.content.el);
			$(this.quizResponseMessage.el).html("<span class='response_tit'>"+response_ok_content+"</span><span class='response_tex'>"+this.message+"</span>");
	}

	this.anim_play = function(){
		$(titleAnim.el).addClass("active");

					// reset apng
					let anim_src = $(titleAnim_img.el).attr("src");
					anim_src = anim_src+"?a="+Math.random();
					$(titleAnim_img.el).attr("src","");
					$(titleAnim_img.el).attr("src",anim_src);


					// intro sound play
					let animSound = $(sound.el)[0];
					if (animSound== undefined){
					}else {
						animSound.currentTime = 0;

						setTimeout(function(){
							animSound.play();
						},300);
					}

	}

	this.anim_reset =function(){
		$(titleAnim.el).removeClass("active");
		//$(this.quizAnim_img.el).attr("src","");
 
		$(".questionnaire__anim img").attr("src","");

		let animSound = $(sound.el)[0];
			if (animSound== undefined){
		}else {
			animSound.pause();
						
		}
		
	}
}


function HomeSlider_slide_data_0(key,color,type,title,type_en,title_en,data_num,color_states,videos,sounds,duration,media_type,filter_key,i){

	this.key = key;
	this.color = color;
	this.type = type;
	this.title = title;
	this.title_en = title_en;
	this.data_num = data_num;
	this.i = i;
	this.color_states= color_states;
	

	let val = 0;
	let data_timer = 0;
	let timer_content;

	//let pll_quali_fr = ["Très bon","Bon","moyen","Médiocre","Mauvais","Très mauvais"];
	let pll_quali_fr = ["Indisponble","Bon","Moyen","Dégradé", "Mauvais","Très mauvais", "Extrêmement mauvais"];
	let pll_quali_en = ["Not available","Good","Middle","Poor","Bad","Very bad", "Extremly bad"];
	let pll_quali_in;
	


	let pll_val_max;

	

	


	let homeSlide = new Box("div","homeSlide__slide data_"+data_num+" "+key+" "+media_type+" "+filter_key,".homeSlide");


		
	let titleBlock= new Box("div","homeSlide__slide__titleBlock",homeSlide.el);
		$(titleBlock.el).css("background", color);

		

			let titleAnim = new Box("div","homeSlide__slide__titleBlock__anim",titleBlock.el),
				good_anim_img = new Box ("img","",titleAnim.el);

			let good_sound = new Box("audio","homeSlide__slide__titleBlock__animSound",titleAnim.el);
			

			
			let backcol_6 = new Box("div","homeSlide__slide__titleBlock__title__backcol",titleBlock.el);
			let backcol_5= new Box("div","homeSlide__slide__titleBlock__title__backcol",titleBlock.el);
			let backcol_4 = new Box("div","homeSlide__slide__titleBlock__title__backcol",titleBlock.el);
			let backcol_3 = new Box("div","homeSlide__slide__titleBlock__title__backcol",titleBlock.el);
			let backcol_2 = new Box("div","homeSlide__slide__titleBlock__title__backcol",titleBlock.el);
			let backcol_1 = new Box("div","homeSlide__slide__titleBlock__title__backcol",titleBlock.el);

			$(backcol_1.el).css("background",this.color_states[0]);
			$(backcol_2.el).css("background",this.color_states[1]);
			$(backcol_3.el).css("background",this.color_states[2]);
			$(backcol_4.el).css("background",this.color_states[3]);
			$(backcol_5.el).css("background",this.color_states[4]);
			$(backcol_6.el).css("background",this.color_states[5]);
			

			let titleText = new Box("div","homeSlide__slide__titleBlock__title",titleBlock.el);
				
				let title_type = new Box("h3","homeSlide__slide__titleBlock__title__type",titleText.el);
				$(title_type.el).text("info "+ i_day+"/"+i_month+"/"+i_year);

				let title_name = new Box("h2","homeSlide__slide__titleBlock__title__name",titleText.el);
				$(title_name.el).text(title)

				let title_valeur = new Box("h2","homeSlide__slide__titleBlock__title__valeur",titleText.el);
					let title_valeur_n = new Box("span","homeSlide__slide__titleBlock__title__valeur__n", title_valeur.el);
					let title_valeur_hundred = new Box("span","homeSlide__slide__titleBlock__title__valeur__hundred", title_valeur.el);
				
				$(title_valeur_n.el).text(val);
				$(title_valeur_hundred.el).text("/100");

				let title_qualificatif = new Box("h2","homeSlide__slide__titleBlock__title__qual",titleText.el);
				


			let timeBar = new Box("div","time-bar",titleBlock.el);



		/*let qualificatif = new Box("div","pll_qualificatif",content.el);
		$(qualificatif.el).text(pll_qualificatif);*/


	let val_int;
	let show_quali;




	this.data_apply = function(pll_valeur,pll_date, pll_sous_indices){
		console.log("data_apply : val = " + pll_valeur);
		// Calculer un indice entre 0 et 100 à partir de la moyenne des sous indices
		var indice_moyen = 0;
		var nb_indices = 0;
		$.each(pll_sous_indices, function(indx, polluant){
			console.log(polluant);
			indice_moyen += polluant.indice / 6;		
			nb_indices++;
		});
		pll_val_max = Math.round(100 * indice_moyen / nb_indices);

                // Affichage vidéo anooki et qualificatif pollution
		if(lang="fr"){
                	$(title_qualificatif.el).text(pll_quali_fr[pll_valeur]);
                }else if (lang="en"){
                	$(title_qualificatif.el).text(pll_quali_en[pll_valeur]);
                }

              	$(good_anim_img.el).attr("src",videos[pll_valeur]);
                $(good_sound.el).attr("src",sounds[pll_valeur]);
	
		$(title_type.el).text("info "+ i_day+"/"+i_month+"/"+i_year);

	}
	this.data_apply();

	this.french_mode = function(){
		$(title_qualificatif.el).text(pll_quali_fr[pll_valeur]);
		$(title_name.el).text(title);
	}

	this.english_mode = function(){
		$(title_qualificatif.el).text(pll_quali_en[pll_valeur]);
		$(title_name.el).text(title_en);
	}
	
	
	let op=[1,1,1,1,1,1];


	this.intro__play = function(){

		$(titleText.el).addClass("active");
		


		val_int = setInterval(function(){ 
			if(val <pll_val_max){
				val = val +1;
				
				$(title_valeur_n.el).text(val);

				if(val>0 && val<=16){

					let di = 1/(16-0);
					if(op[0]>0){
						op[0]=op[0]-di;
					}
						
					$(backcol_1.el).css("opacity",op[0]);

				}if(val>17 && val<=33){
					
					let di = 1/(33-17);
					if(op[1]>0){
						op[1]=op[1]-di;
					}
					$(backcol_2.el).css("opacity",op[1]);
					
				}if(val>34 && val<=50){
					let di = 1/(50-34);
					if(op[2]>0){
							op[2]=op[2]-di;
						}
					$(backcol_3.el).css("opacity",op[2]);
					
				}if(val>51 && val<=67){
					let di = 1/(67-51);
					if(op[3]>0){
							op[3]=op[3]-di;
						}
					$(backcol_4.el).css("opacity",op[3]);
					
				}if(val>68 && val<=84){
					let di = 1/(84-68);
					if(op[4]>0){
							op[4]=op[4]-di;
						}
					$(backcol_5.el).css("opacity",op[4]);
					
				}if(val>85){
					

					/*let di = 1/(100-85);
					if(op[5]>0){
							op[5]=op[5]-di;
						}
					$(backcol_6.el).css("opacity",op[5]);*/
				}

			}else{
				clearInterval(val_int);
				$(title_valeur_hundred.el).addClass("active");


				show_quali = setTimeout(function(){
					$(titleText.el).addClass("top");
					$(title_qualificatif.el).addClass("active");
					animeStart();

				},1000)
				

				

				function animeStart(){
					let anim_src = $(good_anim_img.el).attr("src");
					anim_src = anim_src+"?a="+Math.random();
					$(good_anim_img.el).attr("src","");
					$(good_anim_img.el).attr("src",anim_src);

					$(titleAnim.el).addClass("active");

					// intro sound play
					let animSound = $(good_sound.el)[0];
					if (animSound== undefined){
					}else {
						animSound.currentTime = 0;

						setTimeout(function(){
							animSound.play();
						},300);
					}
				}
				
			}
		}, 70);


		timer_content = setInterval(function(){


					if(data_timer < duration){

						data_timer += 0.022;
					}


					let percent = (100*data_timer)/duration;
					let percentCss = percent+"%";

					
					$(timeBar.el).css("width",percentCss);
					
					if (percent >= 100.00){

						if(filterActive==true && blockLast == true){

							$(".menuNav .current").removeClass("current");
							//$(".menu_slide_0").addClass("current");

							homeSlider.close();
							filters[0].reset();

							/*$(".slick-track .slick-current").removeClass("slick-current");
							$(".homeSlide__slide[data-slick-index=0]").addClass("slick-current");*/
							//goToSlide(-1);

							filterActive = false;


						}else{
							clearInterval(timer_content);
							$('.homeSlide').slick('slickNext');
						}
							
					}


					
				

			},22);
	}

	

	this.intro__reset = function(){

		$(titleAnim.el).removeClass("active");
		let animSound = $(good_sound.el)[0];
		animSound.pause();
		animSound.currentTime = 0;

		op=[1,1,1,1,1,1,1,1,1];
		clearInterval(val_int);
		clearTimeout(show_quali);
		$(titleText.el).removeClass("top");
		$(title_qualificatif.el).removeClass("active");
		$(title_valeur_hundred.el).removeClass("active");
		val = 0;

		$(backcol_1.el).css("opacity","1");
				$(backcol_2.el).css("opacity","1");
				$(backcol_3.el).css("opacity","1");
				$(backcol_4.el).css("opacity","1");
				$(backcol_5.el).css("opacity","1");
				$(backcol_6.el).css("opacity","1");
	
	}


	this.content__play = function(){
		this.intro__play();
	}

	this.content__reset = function(){
		data_timer = 0;
		clearInterval(timer_content);
		$(timeBar.el).css("width","0");

	}

	this.content__pause = function(){
		data_timer = 0;
		clearInterval(timer_content);
		$(timeBar.el).css("width","0");
	}
}

function HomeSlider_slide_data_1(key,color,type,title,type_en,title_en,data_num,duration,media_type,filter_key,i){

	this.key = key;
	this.color = color;
	this.type = type;
	this.title = title;
	this.title_en = title_en;
	this.data_num = data_num;
	this.i = i;
	

	let data_timer = 0;
	let timer_content;

	let enText_1 = "NUCLÉAIRE";
	let enText_2 = "GAZ";
	let enText_3 = "CHARBON";
	let enText_4 = "FIOUL";
	let enText_5 = "HYDRAULIQUE";
	let enText_6 = "SOLAIRE";
	let enText_7 = "EOLIEN";
	let enText_8 = "BIOENERGIE";
	let enText_final = "énergies<br>renouvelables";

	let enText_1_en = "nuclear";
	let enText_2_en = "GAS";
	let enText_3_en = "COAL";
	let enText_4_en = "OIL";
	let enText_5_en = "wind onshore";
	let enText_6_en = "SOLAR";
	let enText_7_en = "hydraulic";
	let enText_8_en = "bioenergy";
	let enText_final_en = "renewable<br>energies";

	

	let homeSlide= new Box("div","homeSlide__slide data_"+data_num+" "+key+" "+media_type+" "+filter_key,".homeSlide");
		
	let titleBlock= new Box("div","homeSlide__slide__titleBlock",homeSlide.el);
		$(titleBlock.el).css("background", color);

			let titleText = new Box("div","homeSlide__slide__titleBlock__title homeSlide__slide__titleBlock__title__pie",titleBlock.el);
				
				

				let title_type = new Box("h3","homeSlide__slide__titleBlock__title__type ",titleText.el);
				$(title_type.el).text("info "+ i_day+"/"+i_month+"/"+i_year);

				let title_name = new Box("h2","homeSlide__slide__titleBlock__title__name",titleText.el);
								

			let pie_box = new Box("div","homeSlide__slide__pie__box",titleBlock.el);

					let pie_text_result_wrap = new Box("div","homeSlide__slide__pie__text_result",pie_box.el);
						let pie_text_result_1 = new Box("div","homeSlide__slide__pie__text_result_1",pie_text_result_wrap.el);
						let pie_text_result_2 = new Box("div","homeSlide__slide__pie__text_result_2",pie_text_result_wrap.el);

					let pie_text_wrap_2 = new Box("div","homeSlide__slide__pie__text_wrap nopll",pie_box.el);
						let pie_text_8 = new Box("div","homeSlide__slide__pie__text_2",pie_text_wrap_2.el);
						let pie_text_7 = new Box("div","homeSlide__slide__pie__text_2",pie_text_wrap_2.el);
						let pie_text_6 = new Box("div","homeSlide__slide__pie__text_2",pie_text_wrap_2.el);
						let pie_text_5 = new Box("div","homeSlide__slide__pie__text_2",pie_text_wrap_2.el);
						
					let pie_wrap = new Box("div","homeSlide__slide__pie__wrap",pie_box.el);
						let pie_8 = new Box("div","homeSlide__slide__pie pie_8",pie_wrap.el);
						let pie_7 = new Box("div","homeSlide__slide__pie pie_7",pie_wrap.el);
						let pie_6 = new Box("div","homeSlide__slide__pie pie_6",pie_wrap.el);
						let pie_5 = new Box("div","homeSlide__slide__pie pie_5",pie_wrap.el);
						let pie_4 = new Box("div","homeSlide__slide__pie pie_4",pie_wrap.el);
						let pie_3 = new Box("div","homeSlide__slide__pie pie_3",pie_wrap.el);
						let pie_2 = new Box("div","homeSlide__slide__pie pie_2",pie_wrap.el);
						let pie_1 = new Box("div","homeSlide__slide__pie pie_1",pie_wrap.el);
						let pie_0 = new Box("div","homeSlide__slide__pie pie_0",pie_wrap.el);
						
				
					let pie_text_wrap_1 = new Box("div","homeSlide__slide__pie__text_wrap pll",pie_box.el);
						let pie_text_1 = new Box("div","homeSlide__slide__pie__text_1",pie_text_wrap_1.el);
						let pie_text_2 = new Box("div","homeSlide__slide__pie__text_1",pie_text_wrap_1.el);
						let pie_text_3 = new Box("div","homeSlide__slide__pie__text_1",pie_text_wrap_1.el);
						let pie_text_4 = new Box("div","homeSlide__slide__pie__text_1",pie_text_wrap_1.el);
						
					

				



			let timeBar = new Box("div","time-bar",titleBlock.el);



		/*let qualificatif = new Box("div","pll_qualificatif",content.el);
		$(qualificatif.el).text(pll_qualificatif);*/

		let resultAnim;
		let en_clean;
	
	this.data_apply =function(){

		$(title_type.el).text("info "+ i_day+"/"+i_month+"/"+i_year);

		en_clean = en_5+en_6+en_7+en_8;
		en_clean = Math.round(en_clean * 100) / 100;

		
		let en_add3 = en_3+1;
		let en_add4 = en_4+1;
		let en_add8 = en_8+1;
		let en_less = en_1-(1*3);


		let deg_1 = en_less*3.6;
		let deg_2 = deg_1+en_2*3.6;
		let deg_3 = deg_2+en_add3*3.6;
		let deg_4 = deg_3+en_add4*3.6;
		let deg_5 = deg_4+en_5*3.6;
		let deg_6 = deg_5+en_6*3.6;
		let deg_7 = deg_6+en_7*3.6;
		let deg_8 = deg_7+en_add8*3.6;

		

		$(pie_1.el).css("background","conic-gradient(#000000 "+ en_less+"%, transparent "+en_less+"%)");
		$(pie_2.el).css("background","conic-gradient(#000000 "+en_2+"%, transparent "+en_2+"%)");
		$(pie_3.el).css("background","conic-gradient(#000000 "+en_add3+"%, transparent "+en_add3+"%)");
		$(pie_4.el).css("background","conic-gradient(#000000 "+en_add4+"%, transparent "+en_add4+"%)");
		$(pie_5.el).css("background","conic-gradient(#FFFFFF "+en_5+"%, transparent "+en_5+"%)");
		$(pie_6.el).css("background","conic-gradient(#FFFFFF "+en_6+"%, transparent "+en_6+"%)");
		$(pie_7.el).css("background","conic-gradient(#FFFFFF "+en_7+"%, transparent "+en_7+"%)");
		$(pie_8.el).css("background","conic-gradient(#FFFFFF "+en_add8+"%, transparent "+en_add8+"%)");

		$(title_name.el).text(title+" est de "+ene_total+" MW");
		$(pie_text_result_1.el).html(enText_final);


		
		$(pie_text_5.el).text(enText_5+" "+en_5+" %");
		$(pie_text_6.el).text(enText_6+" "+en_6+" %");
		$(pie_text_7.el).text(enText_7+" "+en_7+" %");
		$(pie_text_8.el).text(enText_8+" "+en_8+" %");
		$(pie_text_1.el).text(en_1+" % "+enText_1);
		$(pie_text_2.el).text(en_2+" % "+enText_2);
		$(pie_text_3.el).text(en_3+" % "+enText_3);
		$(pie_text_4.el).text(en_4+" % "+enText_4);

		$(pie_2.el).css({"transform":"rotate("+deg_1+"deg)"});
		$(pie_3.el).css({"transform":"rotate("+deg_2+"deg)"});
		$(pie_4.el).css({"transform":"rotate("+deg_3+"deg)"});
		$(pie_5.el).css({"transform":"rotate("+deg_4+"deg)"});
		$(pie_6.el).css({"transform":"rotate("+deg_5+"deg)"});
		$(pie_7.el).css({"transform":"rotate("+deg_6+"deg)"});
		$(pie_8.el).css({"transform":"rotate("+deg_7+"deg)"});
	}



	this.french_mode = function(){
		$(title_name.el).text(title+" est de "+ene_total+" MW");
		$(pie_text_5.el).text(enText_5+" "+en_5+"%");
		$(pie_text_6.el).text(enText_6+" "+en_6+"%");
		$(pie_text_7.el).text(enText_7+" "+en_7+"%");
		$(pie_text_8.el).text(enText_8+" "+en_8+"%");
		$(pie_text_1.el).text(en_1+"% "+enText_1);
		$(pie_text_2.el).text(en_2+"% "+enText_2);
		$(pie_text_3.el).text(en_3+"% "+enText_3);
		$(pie_text_4.el).text(en_4+"% "+enText_4);
		$(pie_text_result_1.el).html(enText_final);
		
	}

	this.english_mode = function(){
		$(title_name.el).text(title_en+" is "+ene_total+" MW");
		$(pie_text_5.el).text(enText_5_en+" "+en_5+"%");
		$(pie_text_6.el).text(enText_6_en+" "+en_6+"%");
		$(pie_text_7.el).text(enText_7_en+" "+en_7+"%");
		$(pie_text_8.el).text(enText_8_en+" "+en_8+"%");
		$(pie_text_1.el).text(en_1+"% "+enText_1_en);
		$(pie_text_2.el).text(en_2+"% "+enText_2_en);
		$(pie_text_3.el).text(en_3+"% "+enText_3_en);
		$(pie_text_4.el).text(en_4+"% "+enText_4_en);
		$(pie_text_result_1.el).html(enText_final_en);
	}
	
	
	let op=[1,1,1,1,1,1,1,1,1];
	let pie_timer_1;
	let pie_timer_2;
	let pie_timer_3;
	let pie_timer_4;
	let pie_timer_5;
	let pie_timer_6;
	let pie_timer_7;
	let pie_timer_8;
	let pie_timer_9;
	let pie_timer_10;

	this.intro__play = function(){
		$(titleText.el).addClass("active").addClass("anime");
		$(pie_wrap.el).addClass("anime");

		/*$(pie_1.el).css({"opacity":".5"});
		$(pie_2.el).css({"opacity":".3","transform":"rotate("+deg_1+"deg)","transition":"all .3s .5s ease-in"});
		$(pie_3.el).css({"opacity":".25","transform":"rotate("+deg_2+"deg)","transition":"all .3s 1s ease-in"});
					$(pie_4.el).css({"opacity":".2","transform":"rotate("+deg_3+"deg)","transition":"all .3s 1.5s ease-in"});
					$(pie_5.el).css({"opacity":".8","transform":"rotate("+deg_4+"deg)","transition":"all .3s 2.0s ease-in"});
					$(pie_6.el).css({"opacity":".6","transform":"rotate("+deg_5+"deg)","transition":"all .3s 2.5s ease-in"});
					$(pie_7.el).css({"opacity":".4","transform":"rotate("+deg_6+"deg)","transition":"all .3s 3s ease-in"});
					$(pie_8.el).css({"opacity":".2","transform":"rotate("+deg_7+"deg)","transition":"all .3s 3.5s ease-in"});*/

		
		let timee=600;
		
		
		pie_timer_1 = setTimeout(function(){
			$(pie_1.el).css({"opacity":".5"});
			$(pie_text_1.el).addClass("active");
		},timee);
		
		pie_timer_2 = setTimeout(function(){
			$(pie_2.el).css({"opacity":".4"});
			$(pie_text_2.el).addClass("active");
		},timee*2);
		
		pie_timer_3 = setTimeout(function(){
			$(pie_3.el).css({"opacity":".3"});
			$(pie_text_3.el).addClass("active");
		},timee*3);

		pie_timer_4 = setTimeout(function(){
			$(pie_4.el).css({"opacity":".2"});
			$(pie_text_4.el).addClass("active");
		},timee*4);
		
		pie_timer_5 = setTimeout(function(){
			$(pie_5.el).css({"opacity":".9"});
			$(pie_text_5.el).addClass("active");

		},timee*5);

		pie_timer_6 = setTimeout(function(){
			$(pie_6.el).css({"opacity":".7"});
			$(pie_text_6.el).addClass("active");
		},timee*6);

		pie_timer_7 = setTimeout(function(){
			$(pie_7.el).css({"opacity":".5"});
			$(pie_text_7.el).addClass("active");
		},timee*7);

		pie_timer_8 = setTimeout(function(){
			$(pie_8.el).css({"opacity":".3"});
			$(pie_text_8.el).addClass("active");
		},timee*8);

		pie_timer_9= setTimeout(function(){
			$(pie_text_wrap_2.el).addClass("off");
		},timee*10);
		
		pie_timer_10= setTimeout(function(){
			$(pie_text_result_wrap.el).addClass("active");
			$(pie_5.el).css({"opacity":"1"});
			$(pie_6.el).css({"opacity":"1"});
			$(pie_7.el).css({"opacity":"1"});
			$(pie_8.el).css({"opacity":"1"});

			let ii=0;
			resultAnim = setInterval(function(){
				if (ii < en_clean) {
					ii = ii+.13;

					$(pie_text_result_2.el).text(Math.round(ii * 100) / 100 +" %");
				
				}else{
					$(pie_text_result_2.el).text(en_clean+" %");
					clearInterval(resultAnim);
				}
			
			},10);
		},timee*10.4);


		timer_content = setInterval(function(){


					if(data_timer < duration){

						data_timer += 0.022;
					}


					let percent = (100*data_timer)/duration;
					let percentCss = percent+"%";

					
					$(timeBar.el).css("width",percentCss);
					
					if (percent >= 100.00){

						if(filterActive==true && blockLast == true){

							$(".menuNav .current").removeClass("current");
							//$(".menu_slide_0").addClass("current");

							homeSlider.close();
							filters[0].reset();
							filterActive = false;


						}else{
							clearInterval(timer_content);
							$('.homeSlide').slick('slickNext');
						}
							
					}
		},22);


	}

	

	this.intro__reset = function(){
		clearTimeout(pie_timer_1);
		clearTimeout(pie_timer_2);
		clearTimeout(pie_timer_3);
		clearTimeout(pie_timer_4);
		clearTimeout(pie_timer_5);
		clearTimeout(pie_timer_6);
		clearTimeout(pie_timer_7);
		clearTimeout(pie_timer_8);
		clearTimeout(pie_timer_9);
		clearTimeout(pie_timer_10);

		$(titleText.el).removeClass("anime");
		$(pie_wrap.el).removeClass("anime");
		$(".homeSlide__slide__pie").css("opacity","0");
		$(".pie_0").css("opacity",".2");
		$(".homeSlide__slide__pie__text_1").removeClass("active");
		$(".homeSlide__slide__pie__text_2").removeClass("active");
		$(pie_text_wrap_2.el).removeClass("off");
		$(pie_text_result_wrap.el).removeClass("active");


	}
	

	this.content__play = function(){
		this.intro__play();
	}

	this.content__reset = function(){
		data_timer = 0;
		clearInterval(timer_content);
		$(timeBar.el).css("width","0");

	}

	this.content__pause = function(){
		data_timer = 0;
		clearInterval(timer_content);
		$(timeBar.el).css("width","0");
	}
}

function HomeSlider_slide_data_2(key,color,type,title,type_en,title_en,data_num,video,video_en,duration,media_type,filter_key,i){

	this.key = key;
	this.color = color;
	this.type = type;
	this.title = title;
	this.title_en = title_en;
	this.data_num = data_num;
	this.video = video;
	this.i = i;
	
	let data_timer = 0;
	let timer_content;

	let homeSlide= new Box("div","homeSlide__slide data_"+data_num+" "+key+" "+media_type+" "+filter_key,".homeSlide");
	
	


	let titleBlock= new Box("div","homeSlide__slide__titleBlock",homeSlide.el);
		$(titleBlock.el).css("background", color);

			/*let titleAnim = new Box("div","homeSlide__slide__titleBlock__anim",titleBlock.el),
				titleAnim_img = new Box ("img","",titleAnim.el);
				$(titleAnim_img.el).attr("src",intro_anim);

			let sound = new Box("audio","homeSlide__slide__titleBlock__animSound",titleAnim.el);
			$(sound.el).attr("src",intro_audio);*/

			let videoo= new Box("video","homeSlide__slide__data_video",titleBlock.el);
			$(videoo.el).attr("src",video).css({"opacity":"0","transition":"all .3s"});

			let titleText = new Box("div","homeSlide__slide__titleBlock__title homeSlide__slide__titleBlock__title__data2",titleBlock.el);
				
				let title_type = new Box("h3","homeSlide__slide__titleBlock__title__type ",titleText.el);
				$(title_type.el).text(type);

				let title_name = new Box("h2","homeSlide__slide__titleBlock__title__name",titleText.el);
				$(title_name.el).text(title);

	let timeBar = new Box("div","time-bar",titleBlock.el);


	let vid_timer = 0;
	let vid = $(videoo.el).get(0);

	this.french_mode = function(){
		$(title_name.el).text(title);
		$(title_type.el).text(type);
		$(videoo.el).attr("src",video);
	}

	this.english_mode = function(){
		$(title_name.el).text(title_en);
		$(title_type.el).text(type_en);
		$(videoo.el).attr("src",video_en);
	}

	let vidAppartion;
	this.intro__play = function(){

		$(titleText.el).addClass("active").addClass("anime");;
		vidAppartion = setTimeout(function(){
			$(videoo.el).css({"opacity":"1"});
		},1000);
		
		
		vid.play();

				timer_content = setInterval(function(){

					if(vid_timer < duration){
						vid_timer += 0.022;
					}


					let percent = (100*vid_timer)/duration;
					let percentCss = percent+"%";
					$(timeBar.el).css("width",percentCss);
					
					if (percent >= 100.00){

						if(filterActive==true && blockLast == true){

							$(".menuNav .current").removeClass("current");
							//$(".menu_slide_0").addClass("current");

							homeSlider.close();
							filters[0].reset();
							filterActive = false;


						}else{
							clearInterval(timer_content);
							$('.homeSlide').slick('slickNext');
						}
							
					}


					
				

				},22);

			
	}

	this.intro__reset = function(){
		clearTimeout(vidAppartion);
		$(videoo.el).css({"opacity":"0"});
		vid.pause();
		vid.currentTime = 0;
		vid_timer = 0;
		$(titleText.el).removeClass("anime");

	}	


	this.content__play = function(){
		this.intro__play();
	}

	this.content__reset = function(){
		data_timer = 0;
		clearInterval(timer_content);
		$(timeBar.el).css("width","0");

	}

	this.content__pause = function(){
		data_timer = 0;
		clearInterval(timer_content);
		$(timeBar.el).css("width","0");
	}
}

function HomeSlider_slide_data_3(key,color,type,title,type_en,title_en,data_num,duration,media_type,filter_key,val1,val2,i){
	this.key = key;
	this.color = color;
	this.type = type;
	this.title = title;
	this.title_en = title_en;
	this.data_num = data_num;
	this.i = i;

	let bar_w1=0;
	let bar_w2 = 0;

	let nn1,nn2;

	// plus besoin de connection api car valeurs en dur
	/*this.data_apply = function(val1,val2){ 
		dt_1 = val1;
		dt_2 = val2;
		
		
		bar_w2 = (bar_w1*dt_2)/dt_1;

		$(data_num_1.el).text(dt_1+" MW");
		//$(data_num_2.el).text(dt_2+" MW");

		nn1 = new Incr_anim(dt_1,".homeSlide__slide__titleBlock__dataNum1","after"," MW");
		nn2 = new Incr_anim(dt_2,".homeSlide__slide__titleBlock__dataNum2","after"," MW");


	}*/



	let dt_text1 = "hydraulique";
	let dt_text2 = "éolien+solaire";
	let dt_text3 = "solaire";
	let dt_textFinal= "personnes alimentées";

	let dt_text1_en = "hydraulic";
	let dt_text2_en = "eolian+solar";
	let dt_text3_en = "solar";
	let dt_textFinal_en = "people powered";

	

	bar_w1 = 600;

	let dt_final = parseInt(val2,10);

	/*let dt_1 = 3052;
	let dt_2 = 1343;
	let dt_3 = 479;
	*/

	
	//let bar_w3 = (bar_w1*dt_3)/dt_1;

	let data_timer = 0;
	let timer_content;

	let homeSlide = new Box("div","homeSlide__slide data_"+data_num+" "+key+" "+media_type+" "+filter_key,".homeSlide");
		
	let titleBlock= new Box("div","homeSlide__slide__titleBlock",homeSlide.el);
		$(titleBlock.el).css("background", color);

	let titleText = new Box("div","homeSlide__slide__titleBlock__title",titleBlock.el);
				
				let title_type = new Box("h3","homeSlide__slide__titleBlock__title__type",titleText.el);
				$(title_type.el).text("info "+ i_day+"/"+i_month+"/"+i_year);

				let title_name = new Box("h2","homeSlide__slide__titleBlock__title__name",titleText.el);
				$(title_name.el).text(title);

	let data_wrap = new Box("div","homeSlide__slide__titleBlock__data__wrap",titleBlock.el);
		$(data_wrap.el).css("opacity","0");

		let data_text_wrap = new Box("div","homeSlide__slide__titleBlock__dataText__wrap data_1",data_wrap.el);
			let data_text_1 = new Box("div","homeSlide__slide__titleBlock__dataText1 dataText",data_text_wrap.el);
			$(data_text_1.el).text(dt_text1);

			/*let data_text_2 = new Box("div","homeSlide__slide__titleBlock__dataText2 dataText",data_text_wrap.el);
			$(data_text_2.el).text(dt_text2);*/

			/*let data_text_3 = new Box("div","homeSlide__slide__titleBlock__dataText3 dataText",data_text_wrap.el);
			$(data_text_3.el).text(dt_text3);*/

		let dataBar_wrap = new Box("div","homeSlide__slide__titleBlock__dataBar_wrap",data_wrap.el);

			let data_1 = new Box("div","homeSlide__slide__titleBlock__data data_1",dataBar_wrap.el);
				let data_bar_1 = new Box("div","homeSlide__slide__titleBlock__dataBar1 dataBar",data_1.el);
				let data_num_1 = new Box("div","homeSlide__slide__titleBlock__dataNum1",data_1.el);
				$(data_num_1.el).text(1+" TWh");
				$(data_bar_1.el).css("width","0px");



			/*let data_2 = new Box("div","homeSlide__slide__titleBlock__data data_2",dataBar_wrap.el);
				let data_bar_2 = new Box("div","homeSlide__slide__titleBlock__dataBar2 dataBar",data_2.el);
				let data_num_2 = new Box("div","homeSlide__slide__titleBlock__dataNum2 ",data_2.el);
				
				$(data_bar_2.el).css("width","0px");*/

			/*let data_3 = new Box("div","homeSlide__slide__titleBlock__data data_3",dataBar_wrap.el);
				let data_bar_3 = new Box("div","homeSlide__slide__titleBlock__dataBar3 dataBar",data_3.el);
				let data_num_3 = new Box("div","homeSlide__slide__titleBlock__dataNum3",data_3.el);
				$(data_num_3.el).text(dt_3+" MW");
				$(data_bar_3.el).css("width","0px");*/

	let dataFinal_wrap = new Box("div","homeSlide__slide__titleBlock__dataFinal_wrap",titleBlock.el);
		$(dataFinal_wrap.el).css("opacity","0");
			let dataFinal = new Box("div","homeSlide__slide__titleBlock__dataFinal",dataFinal_wrap.el);
			let dataFinalText = new Box("div","homeSlide__slide__titleBlock__dataFinalText",dataFinal_wrap.el);
			$(dataFinal.el).text("= "+dt_final);
			$(dataFinalText.el).text(dt_textFinal);


	let timeBar = new Box("div","time-bar",titleBlock.el);

	dt_1 = parseInt(val1,10);
	nn1 = new Incr_anim(dt_1,".homeSlide__slide__titleBlock__dataNum1","after"," TWh");

	this.french_mode = function(){
		$(title_name.el).text(title);
		$(data_text_1.el).text(dt_text1);
		//$(data_text_2.el).text(dt_text2);
		//$(data_text_3.el).text(dt_text3);
		$(dataFinalText.el).text(dt_textFinal);

	}

	this.english_mode = function(){
		$(title_name.el).text(title_en);
		$(data_text_1.el).text(dt_text1_en);
		//$(data_text_2.el).text(dt_text2_en);
		//$(data_text_3.el).text(dt_text3_en);
		$(dataFinalText.el).text(dt_textFinal_en);
		
	}

	let titleAnim, titleAnim2,titleAnim3,titleAnim4,titleAnim5;
	
	//let nn3 = new Incr_anim(dt_3,".homeSlide__slide__titleBlock__dataNum3","after"," MW");
	let nn4 = new Incr_anim(dt_final,".homeSlide__slide__titleBlock__dataFinal","prev","= ");
	
	


	this.intro__play = function(){
		$(titleText.el).addClass("active");

		let nu = 1000;
		
		titleAnim = setTimeout(function(){
			$(titleText.el).addClass("top");
			$(data_wrap.el).css("opacity","1");

		},600);


		titleAnim2 = setTimeout(function(){

			
			$(data_text_1.el).addClass("active");
			$(data_bar_1.el).css({"width": bar_w1+"px","opacity":"1"});
			$(data_num_1.el).css("opacity","1");
			nn1.start();

		},nu);

		/*titleAnim3 = setTimeout(function(){
				$(data_text_2.el).addClass("active");
				$(data_bar_2.el).css({"width": bar_w2+"px","opacity":"1"});
				$(data_num_2.el).css("opacity","1");


				nn2.start();

		},nu*2);*/

		
		/*titleAnim4 = setTimeout(function(){
				$(data_text_3.el).addClass("active");
				$(data_bar_3.el).css({"width": bar_w3+"px","opacity":"1"});
				$(data_num_3.el).css("opacity","1");
				nn3.start();
		},nu*3);*/

		
		titleAnim5 = setTimeout(function(){
			$(dataFinal_wrap.el).css("opacity","1");
			nn4.start();
		
		},nu*2.6);
		
		
		timer_content = setInterval(function(){



					if(data_timer < duration){

						data_timer += 0.022;
					}



					let percent = (100*data_timer)/duration;
					let percentCss = percent+"%";

					
					$(timeBar.el).css("width",percentCss);
					
					if (percent >= 100.00){

						if(filterActive==true && blockLast == true){

							$(".menuNav .current").removeClass("current");
							//$(".menu_slide_0").addClass("current");

							homeSlider.close();
							filters[0].reset();

							/*$(".slick-track .slick-current").removeClass("slick-current");
							$(".homeSlide__slide[data-slick-index=0]").addClass("slick-current");*/
							//goToSlide(-1);

							filterActive = false;
							


						}else{
							clearInterval(timer_content);
							$('.homeSlide').slick('slickNext');
						}
							
					}


					
				

			},22);
			
		

	}

	this.intro__reset = function(){

		clearTimeout(titleAnim);
		clearTimeout(titleAnim2);
		clearTimeout(titleAnim3);
		//clearTimeout(titleAnim4);
		//clearTimeout(titleAnim5);
	
		nn1.reset();
		//nn2.reset();
		//nn3.reset();
		nn4.reset();
		$(titleText.el).removeClass("top");
		$(data_wrap.el).css("opacity","0");

		$(data_text_1.el).removeClass("active");
		//$(data_text_2.el).removeClass("active");
		//$(data_text_3.el).removeClass("active");

		$(data_bar_1.el).css({"width": "0px"});
		//$(data_bar_2.el).css({"width": "0px"});
		//$(data_bar_3.el).css({"width": "0px"});

		$(data_num_1.el).css("opacity","0");
		//$(data_num_2.el).css("opacity","0");
		//$(data_num_3.el).css("opacity","0");

		$(dataFinal_wrap.el).css("opacity","0");


	}

	this.content__play = function(){
		this.intro__play();
	}

	this.content__reset = function(){
		data_timer = 0;
		clearInterval(timer_content);
		$(timeBar.el).css("width","0");

	}

	this.content__pause = function(){
		data_timer = 0;
		clearInterval(timer_content);
		$(timeBar.el).css("width","0");
	}
}

function MenuNav__timer() {

		let menuNav__timeout;
		let menuNav_i=0;
	 	let menuNav__scrolled = false;

	 	$(".menuNav__wrap").scroll(function(){
			menuNav__scrolled = true;
		}); 

		$(".menuNav__wrap").on("click",function(){
			menuNav__scrolled = true;
		});

		$(".filters__wrap__li").on("click",function(){
			menuNav__scrolled = true;
		});
		
		this.on = function(){
			menuNav__timeout = setInterval(function() {


				menuNav_i+=1;

			         
			    if (menuNav__scrolled) {
			       	menuNav__scrolled = false;
			        menuNav_i=0;
			    }

			    if(menuNav_i>menuNav__timeout__duration){
			    	clearInterval(menuNav__timeout);
			    	menuNav_i =0;
					screen__off();
					screen__on();

					
					
			    }


			}, 1000);
		}

		this.off =function(){
			menuNav_i =0;
			clearInterval(menuNav__timeout);
		}
}


//MENU _____________

function Menu(){

	/*this.menuNav__wrap = new Box("div","menuNav__wrap obj__xscroll",".container"),
	this.menuNav = new Box("div","menuNav",this.menuNav__wrap.el),
	this.spacer_start = new Box("div","spacer spacer_start",this.menuNav.el),
	this.spacer_end = new Box("div","spacer spacer_end",this.menuNav.el);*/
	let filter_wrapper = new Box("div","filters__wrapper",".container");
	let filter_wrap = new Box("ul","filters__wrap active",".filters__wrapper");
	this.halfSlide;
	this.spacerWidth;
	this.move__duration = .1;
	
	this.spacers = function(){
		this.halfSlide = $(".menuNav__slide").outerWidth()/2;
		this.spacerWidth = $(".spacer").width();
		$(".spacer_end").insertAfter(".menuNav__slide:last-child");
		$(".spacer").width(this.spacerWidth-this.halfSlide);

	}

	this.move = function(menuNavCurrent,zoom,animation,callback){


			let elPosition = $(menuNavCurrent).position().left;

			let currentPosition = $('.menuNav').scrollLeft();
			if( zoom && zoom=="zoom"){
				elPosition = elPosition/2.7;
			}


			elPosition = (elPosition+currentPosition+this.halfSlide)-this.spacerWidth;

			if(animation && animation=="noAnim"){
				$('.menuNav__wrap').animate({scrollLeft: elPosition}, 0);
			}else{
				$('.menuNav__wrap').animate({scrollLeft: elPosition},this.move__duration*1000);
			}

			
			if(callback){
				setTimeout(function(){
					callback();
				},menu.move__duration*1000);
			}

		
		}
}

function Menu_button(){
	
	this.btn_wrapper = new Box("div","btn__wrapper",".container"),
		this.btn_menu = new Box("div","btn__menu obj__btn-round",this.btn_wrapper.el),
			this.btn_cross = new Box("span","btn__menu__cross",this.btn_menu.el),
			this.btn_text = new Box("span","btn__menu__text",this.btn_menu.el);
			$(this.btn_text.el).text("MENU");

	this.display = function(){
		$(this.btn_menu.el).on("click",this.clickAction);
	}

	
	this.clickAction = function(){

		if ($(".homeSlide").hasClass("active")){
			
			menuNav_timer.on();

			$(".menuNav__slide").removeClass("anim");
			homeSlider.close();


			let slick_index = $(".slick-current").attr("data-slick-index");
			let menuSlide_current = slides_menu[slick_index].menuSlide.el;



			$(".menuNav__slide.current").removeClass("current");
			$(menuSlide_current).addClass("current");
			
			if(homeSlider_slides[slick_index].playing == true){
				homeSlider_slides[slick_index].content__pause();
			}else{
				homeSlider_slides[slick_index].intro__reset();
				homeSlider_slides[slick_index].content__reset();
				//homeSlider_slides[slick_index].playing == false;
			}

		}else {

			menuNav_timer.off();
			
			if(filteredOut == true){
				var slick_index = 0;
				
				menu.move(".menu_slide_"+slick_index,"","",function(){
					homeSlider.open();
				});
				goToSlide(0);
				if(homeSlider_slides[slick_index].playing == true){
					homeSlider_slides[slick_index].content__play();
				}else{
					homeSlider_slides[slick_index].intro__play(function(){
						
						homeSlider_slides[slick_index].content__play();
					});
					
				}

				filteredOut = false;

			}else{
				
				let slick_index = $(".slick-current").attr("data-slick-index");
				
				menu.move(".menu_slide_"+slick_index,"","",function(){
					homeSlider.open();
				});

				if(homeSlider_slides[slick_index].playing == true){
					homeSlider_slides[slick_index].content__play();
				}else{
					homeSlider_slides[slick_index].intro__play(function(){
						
						homeSlider_slides[slick_index].content__play();
					});
					
				}
			}
			
			

		}
	}
}

function Menu_lang_buttons(){
	this.btn__lang__wrap = new Box("div","btn__lang__wrap",".container");
	this.btn__lang_fr = new Box("div","btn__lang btn__lang__fr active",this.btn__lang__wrap.el);
	this.btn__lang_en = new Box("div","btn__lang btn__lang__en",this.btn__lang__wrap.el);
	$(this.btn__lang_fr.el).text("FR");
	$(this.btn__lang_en.el).text("EN");
	let btn_fr = $(this.btn__lang_fr.el );
	let btn_en = $(this.btn__lang_en.el );

	this.display = function(){
		btn_fr.on("click",this.french_mode);
		btn_en.on("click",this.english_mode);

	}

	this.french_mode = function(){
		lang = "fr";

		if(!btn_fr.hasClass("active")){
			filtersChanges();
			slidesChanges();
		}
		btn_interacts();

		

		////////////////////////////////
		function btn_interacts(){
			btn_fr.removeClass("click_anim");
			btn_fr.addClass("click_anim");
			btn_en.removeClass("active");
			btn_fr.addClass("active");
		}

		function filtersChanges(){
			for (i=0;i<filters.length;i++){
				filters[i].french_mode();
			}
		}

		function slidesChanges(){
			for(i=0; i< homeSlider_slides.length;i++){
				//let type = homeSlider_slides[i].type;
				slides_menu[i].french_mode();
				homeSlider_slides[i].french_mode();

			}
		}

		
		
	}

	this.english_mode = function(){
		lang = "en";
		
		if(!btn_en.hasClass("active")){

			filtersChanges();
			slidesChanges();
			
		}

		btn_interacts();


		
		////////////////////////////////
		function btn_interacts(){
			btn_en.removeClass("click_anim");
			btn_en.addClass("click_anim");
			btn_fr.removeClass("active");
			btn_en.addClass("active");
		}

		function filtersChanges(){
			for (i=0;i<filters.length;i++){
				filters[i].english_mode();
			}
		}

		function slidesChanges(){
			for(i=0; i< homeSlider_slides.length;i++){
				//let type = homeSlider_slides[i].type;
				slides_menu[i].english_mode();
				homeSlider_slides[i].english_mode();

			}
		}
		
	}	
}


function Menu_filters(key,filter_key,filter_name,filter_name_en,i){

	this.key = key;
	this.filter_key = filter_key;
	this.filter_name = filter_name;
	this.filter_name_en = filter_name_en;
	this.i=i;

	if(i==0){
		var active = "active"
	}else{
		var active = "";
	}

	var filter_wrap_li = new Box("li","filters__wrap__li "+key+" "+active,".filters__wrap");
		$(filter_wrap_li.el).attr("data-filter",filter_key);
			let round = new Box("div","filters__wrap__li__round",filter_wrap_li.el),
			round_child = new Box("div","", round.el);
			let text = new Box("div","filters__wrap__li__text",filter_wrap_li.el );
			$(text.el).text(filter_name);
	


	this.french_mode =function(){
		$(text.el).text(filter_name);
	}	

	this.english_mode = function(){
		$(text.el).text(filter_name_en);
	}

	this.display = function(){
		$(filter_wrap_li.el).on("click",this.clickAction);
	}

	

	function filterHomeslider(that,reset){
			
			if(that){
				let toFilter = $(that).attr("data-filter");
				

				/*slickOp.slick('unslick');
				slickOp = $('.homeSlide').slick({
					lazyLoad:"progressive",
					arrows: false,
					speed:600,
					cssEase:"cubic-bezier(0.87, 0.03, 0.41, 0.9)",
					dots:true,
					slickFilter : toFilter
				});*/

				slickOp.slick('slickUnfilter');
				slickOp.slick('slickFilter', toFilter);
			}

			if (reset && reset == "reset"){

				/*slickOp.slick('unslick');
				slickOp = $('.homeSlide').slick({
					lazyLoad:"progressive",
					arrows: false,
					speed:600,
					cssEase:"cubic-bezier(0.87, 0.03, 0.41, 0.9)",
					dots:true,
					slickFilter : ".homeSlide__slide"
				});*/

				slickOp.slick('slickUnfilter');
				slickOp.slick('slickFilter',".homeSlide__slide" );
			}
			
			filtered =[];


			$(".homeSlide__slide").each(function(index){
				filtered[index] = $(this).attr("data-slick-index");
			});
	}

	let toFilter;

	function addActive(that){
			$(".filters__wrap .active").removeClass("active");
			

			if(that){
				
				$(that).addClass("active");
			}else {
				$(".filter_1").addClass("active");
			}
	}
		
	function filterMenu(that){
			

			if(that){
				toFilter = $(that).attr("data-filter");
				$(".menuNav .active").removeClass("active");
				$(".menuNav "+toFilter).addClass("active");
			}else {
				$(".menuNav__slide").addClass("active");
			}
	}
		
	function animationMenu(){
			$('.menuNav__wrap').animate({scrollLeft: 0}, 200);
			$('.menuNav').removeClass('anime');
			setTimeout(function(){
						$('.menuNav').addClass('anime');
			},1);
	}


	filterHomeslider();
	filtered.splice(0, 1);
	filtered.splice(filtered.length-1, 1);
	

	
	this.clickAction = function(){

		addActive(this);
		filterMenu(this);
		animationMenu();


		
		if ($(this).attr("data-filter") == "*") {

			slickOp.slick( 'slickSetOption', {
		    	infinite: true

				}, true );
			filterHomeslider(this);
			filtered.splice(0, 1);
			filtered.splice(filtered.length-1, 1);
			filterActive = false;

			$(".menuNav__slide").each(function(index){
				$(this).attr("data-num",index);

			});
					
		}else{

			slickOp.slick( 'slickSetOption', {
		    	infinite: false

			}, true );
			filterHomeslider(this);
			

			filterActive = true;

			// menuNavSlide change data-num after filtering
			$(".menuNav "+toFilter).each(function(index){
				$(this).attr("data-num",index);

			});
		}
	}

	this.reset = function(callback){

		addActive();
		filterMenu();
		animationMenu();
		slickOp.slick( 'slickSetOption', {
			infinite: true
		}, true );

		filterHomeslider("","reset");
		filtered.splice(0, 1);
		filtered.splice(filtered.length-1, 1);
		filterActive = false;

		$(".menuNav__slide").each(function(index){
			$(this).attr("data-num",index);

		});

		if(callback){
			callback();
		}
		

	}
}

function Menu_slides(filter_key,color,intro_img,type,title,type_en,title_en,i){

	this.i = i;
	this.filter_key = filter_key;
	this.color= color;
	this.intro_img = intro_img;
	this.type = type;
	this.title = title;
	this.type_en = type_en;
	this.title_en = title_en;

	this.menuSlide;



	this.menuSlide = new Box("div","menuNav__slide active menu_slide_"+i+" "+filter_key,".menuNav");
			$(this.menuSlide.el).css("background",color).attr("data-num",i);


		
		let titleBlock = new Box("div","menuNav__slide__title",this.menuSlide.el),
			title_type = new Box("div","menuNav__slide__title__type",titleBlock.el),
			title_name = new Box("div","menuNav__slide__title__name",titleBlock.el);
			$(titleBlock.el).css("background",color);
			$(title_type.el).text(type);
			$(title_name.el).text(title);

		let image = new Box("img","menuNav__slide__image",this.menuSlide.el);
			$(image.el).attr("src",intro_img);

		let current = new Box("div","menuNav__slide__current",this.menuSlide.el),
			current_picto_wrap = new Box("div","menuNav__slide__picto__current__wrap",current.el),
				current_picto = new Box("div","menuNav__slide__picto__current",current_picto_wrap.el),
					current_picto_ellip = new Box("div","lds-ellipsis",current_picto.el);

					let ellip = [];
					for(i=0;i<4;i++){
						ellip[i] = new Box("div","ellip",current_picto_ellip.el);
						$(ellip[i].el).css("background",color);
					}

			let current_text = new Box("div","menuNav__slide__current__text",current.el);
			$(current_text.el).text("en cours...").css("background",color);


	this.french_mode =function(){
		$(title_type.el).text(type);
		$(title_name.el).text(title);
		$(current_text.el).text("en cours...");
	}

	this.english_mode = function(){
		$(title_type.el).text(type_en);
		$(title_name.el).text(title_en);
		$(current_text.el).text("playing...");
	}

	this.display = function(){

		//$(this.menuSlide.el).on("click",this.e_click);

		$(this.menuSlide.el).on("click",this.e_click);

		/*$(this.menuSlide.el).on("touchstart",this.e_touchstart);
		$(this.menuSlide.el).on("touchend",this.e_touchend);*/
	}


	this.e_click = function(){
		menuNav_timer.off();
		filteredOut == false;

		if (cuurrent !== filtered.length-1) { //  annulel le blocklast false afin que aftermove fonctinne correctement à nouveau
			blockLast = false;
		}

		let slick_index = $(this).attr("data-num");
		//$(this).addClass("off");

		// animation
		//$(this).removeClass("off");
		$(".menuNav__slide").removeClass("anim");
		$(this).addClass("anim");
		
		// go to good slide in homeSlider
		
		
		if(filterActive== true && slick_index==0 ){
			//goToSlide(2); // go to random to make homeslider move and trigger onAftermove 
		}

		goToSlide(this); // go to the good slide

		// add class current to this 
		let itsCurrent;


		if ($(this).hasClass("current")) {
			itsCurrent = true; // ouvre le contenu directement ici sans passer par aftermove 
		
		}else if(cuurrent ==toCompare){ 
			$(".menuNav__slide").removeClass("current");
			$(this).addClass("current");
			itsCurrent = true; // quand homeslider a la même valeur 
		}else{
			$(".menuNav__slide").removeClass("current");
			$(this).addClass("current");
			itsCurrent = false;

		}

		

		

		// move the menu and open the slide
		menu.move(".menuNav__slide.current","","",function(){

			homeSlider.open();
			
			
				let homeSlideLength = $(".homeSlide__slide").length;

				/*if(itsCurrent || homeSlideLength==1 ){
					
					if(homeSlider_slides[slick_index].playing == true){
					homeSlider_slides[slick_index].content__play();
					}else{
						homeSlider_slides[slick_index].intro__play(function(){
							homeSlider_slides[slick_index].content__play();
						});
						
					}
				}*/

				if(itsCurrent || homeSlideLength==1 ){

					if(homeSlider_slides[filtered[slick_index]].playing == true){
						homeSlider_slides[filtered[slick_index]].content__play();
					}else{
						homeSlider_slides[filtered[slick_index]].intro__play(function(){
							homeSlider_slides[filtered[slick_index]].content__play();
						});
						
					}
				}

			

			
		});





	}

}


function goToSlide(that){

		if (isNaN(that)){
	  			slideToGo = $(that).attr("data-num");
	  			
	  		}else {
				slideToGo = that;
	  		}

	  		
			$('.homeSlide').slick('slickGoTo', parseInt(slideToGo),true);
}


/*----------------------------------------------------------------

GLOBAL FUNCTIONS

----------------------------------------------------------------*/

/*----------------------------------------------------------------
Objet permettant de créer et intégrer rapidement des bloc html
----------------------------------------------------------------*/
function Box(type,name,wrap){

	this.el = document.createElement(type);
	$(this.el).addClass(name);

	if(wrap){
		$(wrap).append(this.el);
	}
	

}

function numSpace(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

/*----------------------------------------------------------------
ANIMATION D'INCREMENTATION DE NOMBRES
----------------------------------------------------------------*/
function Incr_anim(num,element,pre,un){


		let ii=1;
		let int;

		if(num<50){
			 var div = 10;
			 var ti = 100;
		}else{
			 var div = 50;
			 var ti = 20;
		}
		

		this.start = function(){
			

			int = setInterval(function(){
				if (ii < num){
					ii= ii+Math.round(num/div);
					let ooo = numSpace(ii);

					if(pre=="prev"){
						$(element).text(un+ooo);
					}else if(pre=="after"){
						$(element).text(ooo+un);
					}
					
				
				}else{

					let ooo = numSpace(num);

					if(pre=="prev"){
						$(element).text(un+ooo);
					}else if(pre=="after"){
						$(element).text(ooo+un);
					}
					clearInterval(int);
				}

			},ti);
		}

		this.reset = function(){
			clearInterval(int);
			ii=0;
			
		}
}

/*----------------------------------------------------------------
Empêcher le click droit / long touch sur tactile 
----------------------------------------------------------------*/
	
document.addEventListener('contextmenu', event => event.preventDefault());

/*----------------------------------------------------------------
	Changer la slide active dans le slider 
----------------------------------------------------------------*/
function changeCurrent(num){
	let slide = slides_menu[num].menuSlide.el;
	
	$(".menuNav").find(".current").removeClass("current");
	$(slide).addClass("current");
	menu.move(slide,"zoom","noAnim");
}

});


