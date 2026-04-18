/* React 18.2.0 - bundled */
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(){'use strict';(function(c,x){"object"===typeof exports&&"undefined"!==typeof module?x(exports):"function"===typeof define&&define.amd?define(["exports"],x):(c=c||self,x(c.React={}))})(this,function(c){function x(a){if(null===a||"object"!==typeof a)return null;a=V&&a[V]||a["@@iterator"];return"function"===typeof a?a:null}function w(a,b,e){this.props=a;this.context=b;this.refs=W;this.updater=e||X}function Y(){}function K(a,b,e){this.props=a;this.context=b;this.refs=W;this.updater=e||X}function Z(a,b,
e){var m,d={},c=null,h=null;if(null!=b)for(m in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(c=""+b.key),b)aa.call(b,m)&&!ba.hasOwnProperty(m)&&(d[m]=b[m]);var l=arguments.length-2;if(1===l)d.children=e;else if(1<l){for(var f=Array(l),k=0;k<l;k++)f[k]=arguments[k+2];d.children=f}if(a&&a.defaultProps)for(m in l=a.defaultProps,l)void 0===d[m]&&(d[m]=l[m]);return{$$typeof:y,type:a,key:c,ref:h,props:d,_owner:L.current}}function na(a,b){return{$$typeof:y,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}
function M(a){return"object"===typeof a&&null!==a&&a.$$typeof===y}function oa(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}function N(a,b){return"object"===typeof a&&null!==a&&null!=a.key?oa(""+a.key):b.toString(36)}function B(a,b,e,m,d){var c=typeof a;if("undefined"===c||"boolean"===c)a=null;var h=!1;if(null===a)h=!0;else switch(c){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case y:case pa:h=!0}}if(h)return h=a,d=d(h),a=""===m?"."+
N(h,0):m,ca(d)?(e="",null!=a&&(e=a.replace(da,"$&/")+"/"),B(d,b,e,"",function(a){return a})):null!=d&&(M(d)&&(d=na(d,e+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(da,"$&/")+"/")+a)),b.push(d)),1;h=0;m=""===m?".":m+":";if(ca(a))for(var l=0;l<a.length;l++){c=a[l];var f=m+N(c,l);h+=B(c,b,e,f,d)}else if(f=x(a),"function"===typeof f)for(a=f.call(a),l=0;!(c=a.next()).done;)c=c.value,f=m+N(c,l++),h+=B(c,b,e,f,d);else if("object"===c)throw b=String(a),Error("Objects are not valid as a React child (found: "+
("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}function C(a,b,e){if(null==a)return a;var c=[],d=0;B(a,c,"","",function(a){return b.call(e,a,d++)});return c}function qa(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=
0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}function O(a,b){var e=a.length;a.push(b);a:for(;0<e;){var c=e-1>>>1,d=a[c];if(0<D(d,b))a[c]=b,a[e]=d,e=c;else break a}}function p(a){return 0===a.length?null:a[0]}function E(a){if(0===a.length)return null;var b=a[0],e=a.pop();if(e!==b){a[0]=e;a:for(var c=0,d=a.length,k=d>>>1;c<k;){var h=2*(c+1)-1,l=a[h],f=h+1,g=a[f];if(0>D(l,e))f<d&&0>D(g,l)?(a[c]=g,a[f]=e,c=f):(a[c]=l,a[h]=e,c=h);else if(f<d&&0>D(g,e))a[c]=g,a[f]=e,c=f;else break a}}return b}
function D(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}function P(a){for(var b=p(r);null!==b;){if(null===b.callback)E(r);else if(b.startTime<=a)E(r),b.sortIndex=b.expirationTime,O(q,b);else break;b=p(r)}}function Q(a){z=!1;P(a);if(!u)if(null!==p(q))u=!0,R(S);else{var b=p(r);null!==b&&T(Q,b.startTime-a)}}function S(a,b){u=!1;z&&(z=!1,ea(A),A=-1);F=!0;var c=k;try{P(b);for(n=p(q);null!==n&&(!(n.expirationTime>b)||a&&!fa());){var m=n.callback;if("function"===typeof m){n.callback=null;
k=n.priorityLevel;var d=m(n.expirationTime<=b);b=v();"function"===typeof d?n.callback=d:n===p(q)&&E(q);P(b)}else E(q);n=p(q)}if(null!==n)var g=!0;else{var h=p(r);null!==h&&T(Q,h.startTime-b);g=!1}return g}finally{n=null,k=c,F=!1}}function fa(){return v()-ha<ia?!1:!0}function R(a){G=a;H||(H=!0,I())}function T(a,b){A=ja(function(){a(v())},b)}var y=Symbol.for("react.element"),pa=Symbol.for("react.portal"),ra=Symbol.for("react.fragment"),sa=Symbol.for("react.strict_mode"),ta=Symbol.for("react.profiler"),
ua=Symbol.for("react.provider"),va=Symbol.for("react.context"),wa=Symbol.for("react.forward_ref"),xa=Symbol.for("react.suspense"),ya=Symbol.for("react.memo"),za=Symbol.for("react.lazy"),V=Symbol.iterator,X={isMounted:function(a){return!1},enqueueForceUpdate:function(a,b,c){},enqueueReplaceState:function(a,b,c,m){},enqueueSetState:function(a,b,c,m){}},ka=Object.assign,W={};w.prototype.isReactComponent={};w.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
this.updater.enqueueSetState(this,a,b,"setState")};w.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};Y.prototype=w.prototype;var t=K.prototype=new Y;t.constructor=K;ka(t,w.prototype);t.isPureReactComponent=!0;var ca=Array.isArray,aa=Object.prototype.hasOwnProperty,L={current:null},ba={key:!0,ref:!0,__self:!0,__source:!0},da=/\/+/g,g={current:null},J={transition:null};if("object"===typeof performance&&"function"===typeof performance.now){var Aa=performance;
var v=function(){return Aa.now()}}else{var la=Date,Ba=la.now();v=function(){return la.now()-Ba}}var q=[],r=[],Ca=1,n=null,k=3,F=!1,u=!1,z=!1,ja="function"===typeof setTimeout?setTimeout:null,ea="function"===typeof clearTimeout?clearTimeout:null,ma="undefined"!==typeof setImmediate?setImmediate:null;"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var H=!1,G=null,A=-1,ia=5,ha=
-1,U=function(){if(null!==G){var a=v();ha=a;var b=!0;try{b=G(!0,a)}finally{b?I():(H=!1,G=null)}}else H=!1};if("function"===typeof ma)var I=function(){ma(U)};else if("undefined"!==typeof MessageChannel){t=new MessageChannel;var Da=t.port2;t.port1.onmessage=U;I=function(){Da.postMessage(null)}}else I=function(){ja(U,0)};t={ReactCurrentDispatcher:g,ReactCurrentOwner:L,ReactCurrentBatchConfig:J,Scheduler:{__proto__:null,unstable_ImmediatePriority:1,unstable_UserBlockingPriority:2,unstable_NormalPriority:3,
unstable_IdlePriority:5,unstable_LowPriority:4,unstable_runWithPriority:function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=k;k=a;try{return b()}finally{k=c}},unstable_next:function(a){switch(k){case 1:case 2:case 3:var b=3;break;default:b=k}var c=k;k=b;try{return a()}finally{k=c}},unstable_scheduleCallback:function(a,b,c){var e=v();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?e+c:e):c=e;switch(a){case 1:var d=-1;break;case 2:d=250;break;case 5:d=
1073741823;break;case 4:d=1E4;break;default:d=5E3}d=c+d;a={id:Ca++,callback:b,priorityLevel:a,startTime:c,expirationTime:d,sortIndex:-1};c>e?(a.sortIndex=c,O(r,a),null===p(q)&&a===p(r)&&(z?(ea(A),A=-1):z=!0,T(Q,c-e))):(a.sortIndex=d,O(q,a),u||F||(u=!0,R(S)));return a},unstable_cancelCallback:function(a){a.callback=null},unstable_wrapCallback:function(a){var b=k;return function(){var c=k;k=b;try{return a.apply(this,arguments)}finally{k=c}}},unstable_getCurrentPriorityLevel:function(){return k},unstable_shouldYield:fa,
unstable_requestPaint:function(){},unstable_continueExecution:function(){u||F||(u=!0,R(S))},unstable_pauseExecution:function(){},unstable_getFirstCallbackNode:function(){return p(q)},get unstable_now(){return v},unstable_forceFrameRate:function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ia=0<a?Math.floor(1E3/a):5},unstable_Profiling:null}};c.Children={map:C,forEach:function(a,b,c){C(a,function(){b.apply(this,
arguments)},c)},count:function(a){var b=0;C(a,function(){b++});return b},toArray:function(a){return C(a,function(a){return a})||[]},only:function(a){if(!M(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};c.Component=w;c.Fragment=ra;c.Profiler=ta;c.PureComponent=K;c.StrictMode=sa;c.Suspense=xa;c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t;c.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+
a+".");var e=ka({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=L.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var l=a.type.defaultProps;for(f in b)aa.call(b,f)&&!ba.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==l?l[f]:b[f])}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){l=Array(f);for(var g=0;g<f;g++)l[g]=arguments[g+2];e.children=l}return{$$typeof:y,type:a.type,key:d,ref:k,props:e,_owner:h}};c.createContext=function(a){a={$$typeof:va,
_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:ua,_context:a};return a.Consumer=a};c.createElement=Z;c.createFactory=function(a){var b=Z.bind(null,a);b.type=a;return b};c.createRef=function(){return{current:null}};c.forwardRef=function(a){return{$$typeof:wa,render:a}};c.isValidElement=M;c.lazy=function(a){return{$$typeof:za,_payload:{_status:-1,_result:a},_init:qa}};c.memo=function(a,b){return{$$typeof:ya,type:a,
compare:void 0===b?null:b}};c.startTransition=function(a,b){b=J.transition;J.transition={};try{a()}finally{J.transition=b}};c.unstable_act=function(a){throw Error("act(...) is not supported in production builds of React.");};c.useCallback=function(a,b){return g.current.useCallback(a,b)};c.useContext=function(a){return g.current.useContext(a)};c.useDebugValue=function(a,b){};c.useDeferredValue=function(a){return g.current.useDeferredValue(a)};c.useEffect=function(a,b){return g.current.useEffect(a,
b)};c.useId=function(){return g.current.useId()};c.useImperativeHandle=function(a,b,c){return g.current.useImperativeHandle(a,b,c)};c.useInsertionEffect=function(a,b){return g.current.useInsertionEffect(a,b)};c.useLayoutEffect=function(a,b){return g.current.useLayoutEffect(a,b)};c.useMemo=function(a,b){return g.current.useMemo(a,b)};c.useReducer=function(a,b,c){return g.current.useReducer(a,b,c)};c.useRef=function(a){return g.current.useRef(a)};c.useState=function(a){return g.current.useState(a)};
c.useSyncExternalStore=function(a,b,c){return g.current.useSyncExternalStore(a,b,c)};c.useTransition=function(){return g.current.useTransition()};c.version="18.2.0"});
})();


/* ReactDOM 18.2.0 - bundled */
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(){/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
'use strict';(function(Q,mb){"object"===typeof exports&&"undefined"!==typeof module?mb(exports,require("react")):"function"===typeof define&&define.amd?define(["exports","react"],mb):(Q=Q||self,mb(Q.ReactDOM={},Q.React))})(this,function(Q,mb){function n(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
function nb(a,b){Ab(a,b);Ab(a+"Capture",b)}function Ab(a,b){$b[a]=b;for(a=0;a<b.length;a++)cg.add(b[a])}function cj(a){if(Zd.call(dg,a))return!0;if(Zd.call(eg,a))return!1;if(dj.test(a))return dg[a]=!0;eg[a]=!0;return!1}function ej(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}function fj(a,b,c,d){if(null===
b||"undefined"===typeof b||ej(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function Y(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}function $d(a,b,c,d){var e=R.hasOwnProperty(b)?R[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==
b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])fj(b,c,e,d)&&(c=null),d||null===e?cj(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)))}function ac(a){if(null===a||"object"!==typeof a)return null;a=fg&&a[fg]||a["@@iterator"];return"function"===typeof a?a:null}function bc(a,b,
c){if(void 0===ae)try{throw Error();}catch(d){ae=(b=d.stack.trim().match(/\n( *(at )?)/))&&b[1]||""}return"\n"+ae+a}function be(a,b){if(!a||ce)return"";ce=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(m){var d=m}Reflect.construct(a,[],b)}else{try{b.call()}catch(m){d=m}a.call(b.prototype)}else{try{throw Error();
}catch(m){d=m}a()}}catch(m){if(m&&d&&"string"===typeof m.stack){for(var e=m.stack.split("\n"),f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{ce=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?bc(a):
""}function gj(a){switch(a.tag){case 5:return bc(a.type);case 16:return bc("Lazy");case 13:return bc("Suspense");case 19:return bc("SuspenseList");case 0:case 2:case 15:return a=be(a.type,!1),a;case 11:return a=be(a.type.render,!1),a;case 1:return a=be(a.type,!0),a;default:return""}}function de(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case Bb:return"Fragment";case Cb:return"Portal";case ee:return"Profiler";case fe:return"StrictMode";
case ge:return"Suspense";case he:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case gg:return(a.displayName||"Context")+".Consumer";case hg:return(a._context.displayName||"Context")+".Provider";case ie:var b=a.render;a=a.displayName;a||(a=b.displayName||b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case je:return b=a.displayName||null,null!==b?b:de(a.type)||"Memo";case Ta:b=a._payload;a=a._init;try{return de(a(b))}catch(c){}}return null}function hj(a){var b=a.type;
switch(a.tag){case 24:return"Cache";case 9:return(b.displayName||"Context")+".Consumer";case 10:return(b._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return b;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(b);case 8:return b===fe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";
case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Ua(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return""}}function ig(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===
b)}function ij(a){var b=ig(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Pc(a){a._valueTracker||(a._valueTracker=ij(a))}function jg(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=ig(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Qc(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function ke(a,b){var c=b.checked;return E({},b,{defaultChecked:void 0,defaultValue:void 0,
value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function kg(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Ua(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function lg(a,b){b=b.checked;null!=b&&$d(a,"checked",b,!1)}function le(a,b){lg(a,b);var c=Ua(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=
c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?me(a,b.type,c):b.hasOwnProperty("defaultValue")&&me(a,b.type,Ua(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}function mg(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;
c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}function me(a,b,c){if("number"!==b||Qc(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function Db(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=
!0)}else{c=""+Ua(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}function ne(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(n(91));return E({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function ng(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(n(92));if(cc(c)){if(1<c.length)throw Error(n(93));
c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Ua(c)}}function og(a,b){var c=Ua(b.value),d=Ua(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function pg(a,b){b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}function qg(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
function oe(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?qg(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}function rg(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||dc.hasOwnProperty(a)&&dc[a]?(""+b).trim():b+"px"}function sg(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rg(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}function pe(a,b){if(b){if(jj[a]&&
(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(n(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(n(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(n(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(n(62));}}function qe(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;
default:return!0}}function re(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function tg(a){if(a=ec(a)){if("function"!==typeof se)throw Error(n(280));var b=a.stateNode;b&&(b=Rc(b),se(a.stateNode,a.type,b))}}function ug(a){Eb?Fb?Fb.push(a):Fb=[a]:Eb=a}function vg(){if(Eb){var a=Eb,b=Fb;Fb=Eb=null;tg(a);if(b)for(a=0;a<b.length;a++)tg(b[a])}}function wg(a,b,c){if(te)return a(b,c);te=!0;try{return xg(a,b,c)}finally{if(te=
!1,null!==Eb||null!==Fb)yg(),vg()}}function fc(a,b){var c=a.stateNode;if(null===c)return null;var d=Rc(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;
if(c&&"function"!==typeof c)throw Error(n(231,b,typeof c));return c}function kj(a,b,c,d,e,f,g,h,k){gc=!1;Sc=null;lj.apply(mj,arguments)}function nj(a,b,c,d,e,f,g,h,k){kj.apply(this,arguments);if(gc){if(gc){var m=Sc;gc=!1;Sc=null}else throw Error(n(198));Tc||(Tc=!0,ue=m)}}function ob(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function zg(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,
null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Ag(a){if(ob(a)!==a)throw Error(n(188));}function oj(a){var b=a.alternate;if(!b){b=ob(a);if(null===b)throw Error(n(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Ag(e),a;if(f===d)return Ag(e),b;f=f.sibling}throw Error(n(188));}if(c.return!==d.return)c=e,d=f;
else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(n(189));}}if(c.alternate!==d)throw Error(n(190));}if(3!==c.tag)throw Error(n(188));return c.stateNode.current===c?a:b}function Bg(a){a=oj(a);return null!==a?Cg(a):null}function Cg(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=Cg(a);if(null!==b)return b;a=a.sibling}return null}
function pj(a,b){if(Ca&&"function"===typeof Ca.onCommitFiberRoot)try{Ca.onCommitFiberRoot(Uc,a,void 0,128===(a.current.flags&128))}catch(c){}}function qj(a){a>>>=0;return 0===a?32:31-(rj(a)/sj|0)|0}function hc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&
4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return a}}function Vc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=hc(h):(f&=g,0!==f&&(d=hc(f)))}else g=c&~e,0!==g?d=hc(g):0!==f&&(d=hc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&
(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-ta(b),e=1<<c,d|=a[c],b&=~e;return d}function tj(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;
case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uj(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-ta(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=tj(h,b)}else k<=b&&(a.expiredLanes|=h);f&=~h}}function ve(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function Dg(){var a=Wc;Wc<<=1;0===(Wc&4194240)&&(Wc=64);return a}function we(a){for(var b=[],c=0;31>c;c++)b.push(a);
return b}function ic(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-ta(b);a[b]=c}function vj(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-ta(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f}}function xe(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-ta(c),e=1<<d;e&b|a[d]&
b&&(a[d]|=b);c&=~e}}function Eg(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}function Fg(a,b){switch(a){case "focusin":case "focusout":Va=null;break;case "dragenter":case "dragleave":Wa=null;break;case "mouseover":case "mouseout":Xa=null;break;case "pointerover":case "pointerout":jc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":kc.delete(b.pointerId)}}function lc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,
nativeEvent:f,targetContainers:[e]},null!==b&&(b=ec(b),null!==b&&Gg(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}function wj(a,b,c,d,e){switch(b){case "focusin":return Va=lc(Va,a,b,c,d,e),!0;case "dragenter":return Wa=lc(Wa,a,b,c,d,e),!0;case "mouseover":return Xa=lc(Xa,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;jc.set(f,lc(jc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,kc.set(f,lc(kc.get(f)||null,a,b,
c,d,e)),!0}return!1}function Hg(a){var b=pb(a.target);if(null!==b){var c=ob(b);if(null!==c)if(b=c.tag,13===b){if(b=zg(c),null!==b){a.blockedOn=b;xj(a.priority,function(){yj(c)});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}function Xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=ye(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;
var d=new c.constructor(c.type,c);ze=d;c.target.dispatchEvent(d);ze=null}else return b=ec(c),null!==b&&Gg(b),a.blockedOn=c,!1;b.shift()}return!0}function Ig(a,b,c){Xc(a)&&c.delete(b)}function zj(){Ae=!1;null!==Va&&Xc(Va)&&(Va=null);null!==Wa&&Xc(Wa)&&(Wa=null);null!==Xa&&Xc(Xa)&&(Xa=null);jc.forEach(Ig);kc.forEach(Ig)}function mc(a,b){a.blockedOn===b&&(a.blockedOn=null,Ae||(Ae=!0,Jg(Kg,zj)))}function nc(a){if(0<Yc.length){mc(Yc[0],a);for(var b=1;b<Yc.length;b++){var c=Yc[b];c.blockedOn===a&&(c.blockedOn=
null)}}null!==Va&&mc(Va,a);null!==Wa&&mc(Wa,a);null!==Xa&&mc(Xa,a);b=function(b){return mc(b,a)};jc.forEach(b);kc.forEach(b);for(b=0;b<Ya.length;b++)c=Ya[b],c.blockedOn===a&&(c.blockedOn=null);for(;0<Ya.length&&(b=Ya[0],null===b.blockedOn);)Hg(b),null===b.blockedOn&&Ya.shift()}function Aj(a,b,c,d){var e=z,f=Gb.transition;Gb.transition=null;try{z=1,Be(a,b,c,d)}finally{z=e,Gb.transition=f}}function Bj(a,b,c,d){var e=z,f=Gb.transition;Gb.transition=null;try{z=4,Be(a,b,c,d)}finally{z=e,Gb.transition=
f}}function Be(a,b,c,d){if(Zc){var e=ye(a,b,c,d);if(null===e)Ce(a,b,d,$c,c),Fg(a,d);else if(wj(e,a,b,c,d))d.stopPropagation();else if(Fg(a,d),b&4&&-1<Cj.indexOf(a)){for(;null!==e;){var f=ec(e);null!==f&&Dj(f);f=ye(a,b,c,d);null===f&&Ce(a,b,d,$c,c);if(f===e)break;e=f}null!==e&&d.stopPropagation()}else Ce(a,b,d,null,c)}}function ye(a,b,c,d){$c=null;a=re(d);a=pb(a);if(null!==a)if(b=ob(a),null===b)a=null;else if(c=b.tag,13===c){a=zg(b);if(null!==a)return a;a=null}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===
b.tag?b.stateNode.containerInfo:null;a=null}else b!==a&&(a=null);$c=a;return null}function Lg(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;
case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;case "message":switch(Ej()){case De:return 1;case Mg:return 4;case ad:case Fj:return 16;case Ng:return 536870912;default:return 16}default:return 16}}function Og(){if(bd)return bd;
var a,b=Ee,c=b.length,d,e="value"in Za?Za.value:Za.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return bd=e.slice(a,1<d?1-d:void 0)}function cd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function dd(){return!0}function Pg(){return!1}function ka(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;
for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?dd:Pg;this.isPropagationStopped=Pg;return this}E(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=dd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():
"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=dd)},persist:function(){},isPersistent:dd});return b}function Gj(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Hj[a])?!!b[a]:!1}function Fe(a){return Gj}function Qg(a,b){switch(a){case "keyup":return-1!==Ij.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function Rg(a){a=a.detail;return"object"===typeof a&&
"data"in a?a.data:null}function Jj(a,b){switch(a){case "compositionend":return Rg(b);case "keypress":if(32!==b.which)return null;Sg=!0;return Tg;case "textInput":return a=b.data,a===Tg&&Sg?null:a;default:return null}}function Kj(a,b){if(Hb)return"compositionend"===a||!Ge&&Qg(a,b)?(a=Og(),bd=Ee=Za=null,Hb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;
case "compositionend":return Ug&&"ko"!==b.locale?null:b.data;default:return null}}function Vg(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Lj[a.type]:"textarea"===b?!0:!1}function Mj(a){if(!Ia)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Wg(a,b,c,d){ug(d);b=ed(b,"onChange");0<b.length&&(c=new He("onChange","change",null,c,d),a.push({event:c,listeners:b}))}function Nj(a){Xg(a,
0)}function fd(a){var b=Ib(a);if(jg(b))return a}function Oj(a,b){if("change"===a)return b}function Yg(){oc&&(oc.detachEvent("onpropertychange",Zg),pc=oc=null)}function Zg(a){if("value"===a.propertyName&&fd(pc)){var b=[];Wg(b,pc,a,re(a));wg(Nj,b)}}function Pj(a,b,c){"focusin"===a?(Yg(),oc=b,pc=c,oc.attachEvent("onpropertychange",Zg)):"focusout"===a&&Yg()}function Qj(a,b){if("selectionchange"===a||"keyup"===a||"keydown"===a)return fd(pc)}function Rj(a,b){if("click"===a)return fd(b)}function Sj(a,b){if("input"===
a||"change"===a)return fd(b)}function Tj(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}function qc(a,b){if(ua(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++){var e=c[d];if(!Zd.call(b,e)||!ua(a[e],b[e]))return!1}return!0}function $g(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function ah(a,b){var c=$g(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;
if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=$g(c)}}function bh(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?bh(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function ch(){for(var a=window,b=Qc();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;
b=Qc(a.document)}return b}function Ie(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}function Uj(a){var b=ch(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&bh(c.ownerDocument.documentElement,c)){if(null!==d&&Ie(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);
else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=ah(c,f);var g=ah(c,d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),
a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}function dh(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Je||null==Jb||Jb!==Qc(d)||(d=Jb,"selectionStart"in d&&Ie(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d=
{anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),rc&&qc(rc,d)||(rc=d,d=ed(Ke,"onSelect"),0<d.length&&(b=new He("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Jb)))}function gd(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}function hd(a){if(Le[a])return Le[a];if(!Kb[a])return a;var b=Kb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in eh)return Le[a]=b[c];return a}function $a(a,
b){fh.set(a,b);nb(b,[a])}function gh(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;nj(d,b,void 0,a);a.currentTarget=null}function Xg(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,m=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;gh(e,h,m);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;m=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;
gh(e,h,m);f=k}}}if(Tc)throw a=ue,Tc=!1,ue=null,a;}function B(a,b){var c=b[Me];void 0===c&&(c=b[Me]=new Set);var d=a+"__bubble";c.has(d)||(hh(b,a,2,!1),c.add(d))}function Ne(a,b,c){var d=0;b&&(d|=4);hh(c,a,d,b)}function sc(a){if(!a[id]){a[id]=!0;cg.forEach(function(b){"selectionchange"!==b&&(Vj.has(b)||Ne(b,!1,a),Ne(b,!0,a))});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[id]||(b[id]=!0,Ne("selectionchange",!1,b))}}function hh(a,b,c,d,e){switch(Lg(b)){case 1:e=Aj;break;case 4:e=Bj;break;default:e=
Be}c=e.bind(null,b,c,a);e=void 0;!Oe||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}function Ce(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;
if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=pb(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}wg(function(){var d=f,e=re(c),g=[];a:{var h=fh.get(a);if(void 0!==h){var k=He,n=a;switch(a){case "keypress":if(0===cd(c))break a;case "keydown":case "keyup":k=Wj;break;case "focusin":n="focus";k=Pe;break;case "focusout":n="blur";k=Pe;break;case "beforeblur":case "afterblur":k=Pe;break;
case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=ih;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=Xj;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Yj;break;case jh:case kh:case lh:k=Zj;break;case mh:k=ak;break;case "scroll":k=bk;break;case "wheel":k=ck;break;case "copy":case "cut":case "paste":k=
dk;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=nh}var l=0!==(b&4),p=!l&&"scroll"===a,A=l?null!==h?h+"Capture":null:h;l=[];for(var v=d,q;null!==v;){q=v;var M=q.stateNode;5===q.tag&&null!==M&&(q=M,null!==A&&(M=fc(v,A),null!=M&&l.push(tc(v,M,q))));if(p)break;v=v.return}0<l.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:l}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===
a;k="mouseout"===a||"pointerout"===a;if(h&&c!==ze&&(n=c.relatedTarget||c.fromElement)&&(pb(n)||n[Ja]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?pb(n):null,null!==n&&(p=ob(n),n!==p||5!==n.tag&&6!==n.tag))n=null}else k=null,n=d;if(k!==n){l=ih;M="onMouseLeave";A="onMouseEnter";v="mouse";if("pointerout"===a||"pointerover"===a)l=nh,M="onPointerLeave",A="onPointerEnter",v="pointer";p=null==k?h:Ib(k);q=null==
n?h:Ib(n);h=new l(M,v+"leave",k,c,e);h.target=p;h.relatedTarget=q;M=null;pb(e)===d&&(l=new l(A,v+"enter",n,c,e),l.target=q,l.relatedTarget=p,M=l);p=M;if(k&&n)b:{l=k;A=n;v=0;for(q=l;q;q=Lb(q))v++;q=0;for(M=A;M;M=Lb(M))q++;for(;0<v-q;)l=Lb(l),v--;for(;0<q-v;)A=Lb(A),q--;for(;v--;){if(l===A||null!==A&&l===A.alternate)break b;l=Lb(l);A=Lb(A)}l=null}else l=null;null!==k&&oh(g,h,k,l,!1);null!==n&&null!==p&&oh(g,p,n,l,!0)}}}a:{h=d?Ib(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===
k&&"file"===h.type)var ma=Oj;else if(Vg(h))if(ph)ma=Sj;else{ma=Qj;var va=Pj}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(ma=Rj);if(ma&&(ma=ma(a,d))){Wg(g,ma,c,e);break a}va&&va(a,h,d);"focusout"===a&&(va=h._wrapperState)&&va.controlled&&"number"===h.type&&me(h,"number",h.value)}va=d?Ib(d):window;switch(a){case "focusin":if(Vg(va)||"true"===va.contentEditable)Jb=va,Ke=d,rc=null;break;case "focusout":rc=Ke=Jb=null;break;case "mousedown":Je=!0;break;case "contextmenu":case "mouseup":case "dragend":Je=
!1;dh(g,c,e);break;case "selectionchange":if(ek)break;case "keydown":case "keyup":dh(g,c,e)}var ab;if(Ge)b:{switch(a){case "compositionstart":var da="onCompositionStart";break b;case "compositionend":da="onCompositionEnd";break b;case "compositionupdate":da="onCompositionUpdate";break b}da=void 0}else Hb?Qg(a,c)&&(da="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(da="onCompositionStart");da&&(Ug&&"ko"!==c.locale&&(Hb||"onCompositionStart"!==da?"onCompositionEnd"===da&&Hb&&(ab=Og()):(Za=e,Ee=
"value"in Za?Za.value:Za.textContent,Hb=!0)),va=ed(d,da),0<va.length&&(da=new qh(da,a,null,c,e),g.push({event:da,listeners:va}),ab?da.data=ab:(ab=Rg(c),null!==ab&&(da.data=ab))));if(ab=fk?Jj(a,c):Kj(a,c))d=ed(d,"onBeforeInput"),0<d.length&&(e=new gk("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=ab)}Xg(g,b)})}function tc(a,b,c){return{instance:a,listener:b,currentTarget:c}}function ed(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==
f&&(e=f,f=fc(a,c),null!=f&&d.unshift(tc(a,f,e)),f=fc(a,b),null!=f&&d.push(tc(a,f,e)));a=a.return}return d}function Lb(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}function oh(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,m=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==m&&(h=m,e?(k=fc(c,f),null!=k&&g.unshift(tc(c,k,h))):e||(k=fc(c,f),null!=k&&g.push(tc(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}function rh(a){return("string"===
typeof a?a:""+a).replace(hk,"\n").replace(ik,"")}function jd(a,b,c,d){b=rh(b);if(rh(a)!==b&&c)throw Error(n(425));}function kd(){}function Qe(a,b){return"textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}function jk(a){setTimeout(function(){throw a;})}function Re(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=
e.data,"/$"===c){if(0===d){a.removeChild(e);nc(b);return}d--}else"$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e}while(c);nc(b)}function Ka(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}function sh(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}function pb(a){var b=a[Da];
if(b)return b;for(var c=a.parentNode;c;){if(b=c[Ja]||c[Da]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=sh(a);null!==a;){if(c=a[Da])return c;a=sh(a)}return b}a=c;c=a.parentNode}return null}function ec(a){a=a[Da]||a[Ja];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function Ib(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(n(33));}function Rc(a){return a[uc]||null}function bb(a){return{current:a}}function w(a,b){0>Mb||(a.current=Se[Mb],Se[Mb]=null,Mb--)}
function y(a,b,c){Mb++;Se[Mb]=a.current;a.current=b}function Nb(a,b){var c=a.type.contextTypes;if(!c)return cb;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function ea(a){a=a.childContextTypes;return null!==a&&void 0!==a}function th(a,b,c){if(J.current!==cb)throw Error(n(168));
y(J,b);y(S,c)}function uh(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(n(108,hj(a)||"Unknown",e));return E({},c,d)}function ld(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||cb;qb=J.current;y(J,a);y(S,S.current);return!0}function vh(a,b,c){var d=a.stateNode;if(!d)throw Error(n(169));c?(a=uh(a,b,qb),d.__reactInternalMemoizedMergedChildContext=a,w(S),w(J),y(J,a)):w(S);
y(S,c)}function wh(a){null===La?La=[a]:La.push(a)}function kk(a){md=!0;wh(a)}function db(){if(!Te&&null!==La){Te=!0;var a=0,b=z;try{var c=La;for(z=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}La=null;md=!1}catch(e){throw null!==La&&(La=La.slice(a+1)),xh(De,db),e;}finally{z=b,Te=!1}}return null}function rb(a,b){Ob[Pb++]=nd;Ob[Pb++]=od;od=a;nd=b}function yh(a,b,c){na[oa++]=Ma;na[oa++]=Na;na[oa++]=sb;sb=a;var d=Ma;a=Na;var e=32-ta(d)-1;d&=~(1<<e);c+=1;var f=32-ta(b)+e;if(30<f){var g=e-e%5;
f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;Ma=1<<32-ta(b)+e|c<<e|d;Na=f+a}else Ma=1<<f|c<<e|d,Na=a}function Ue(a){null!==a.return&&(rb(a,1),yh(a,1,0))}function Ve(a){for(;a===od;)od=Ob[--Pb],Ob[Pb]=null,nd=Ob[--Pb],Ob[Pb]=null;for(;a===sb;)sb=na[--oa],na[oa]=null,Na=na[--oa],na[oa]=null,Ma=na[--oa],na[oa]=null}function zh(a,b){var c=pa(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c)}function Ah(a,b){switch(a.tag){case 5:var c=
a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,la=a,fa=Ka(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,la=a,fa=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==sb?{id:Ma,overflow:Na}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=pa(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,la=a,fa=null,!0):!1;default:return!1}}function We(a){return 0!==
(a.mode&1)&&0===(a.flags&128)}function Xe(a){if(D){var b=fa;if(b){var c=b;if(!Ah(a,b)){if(We(a))throw Error(n(418));b=Ka(c.nextSibling);var d=la;b&&Ah(a,b)?zh(d,c):(a.flags=a.flags&-4097|2,D=!1,la=a)}}else{if(We(a))throw Error(n(418));a.flags=a.flags&-4097|2;D=!1;la=a}}}function Bh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;la=a}function pd(a){if(a!==la)return!1;if(!D)return Bh(a),D=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Qe(a.type,
a.memoizedProps));if(b&&(b=fa)){if(We(a)){for(a=fa;a;)a=Ka(a.nextSibling);throw Error(n(418));}for(;b;)zh(a,b),b=Ka(b.nextSibling)}Bh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(n(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){fa=Ka(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}fa=null}}else fa=la?Ka(a.stateNode.nextSibling):null;return!0}function Qb(){fa=la=null;D=!1}function Ye(a){null===
wa?wa=[a]:wa.push(a)}function xa(a,b){if(a&&a.defaultProps){b=E({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}function Ze(){$e=Rb=qd=null}function af(a,b){b=rd.current;w(rd);a._currentValue=b}function bf(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return}}function Sb(a,b){qd=a;$e=Rb=null;a=a.dependencies;null!==a&&null!==a.firstContext&&
(0!==(a.lanes&b)&&(ha=!0),a.firstContext=null)}function qa(a){var b=a._currentValue;if($e!==a)if(a={context:a,memoizedValue:b,next:null},null===Rb){if(null===qd)throw Error(n(308));Rb=a;qd.dependencies={lanes:0,firstContext:a}}else Rb=Rb.next=a;return b}function cf(a){null===tb?tb=[a]:tb.push(a)}function Ch(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,cf(b)):(c.next=e.next,e.next=c);b.interleaved=c;return Oa(a,d)}function Oa(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==
a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}function df(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function Pa(a,b){return{eventTime:a,lane:b,
tag:0,payload:null,callback:null,next:null}}function eb(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(p&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return lk(a,c)}e=d.interleaved;null===e?(b.next=b,cf(d)):(b.next=e.next,e.next=b);d.interleaved=b;return Oa(a,c)}function sd(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;xe(a,c)}}function Eh(a,b){var c=a.updateQueue,d=a.alternate;
if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=b;c.lastBaseUpdate=b}function td(a,b,c,d){var e=
a.updateQueue;fb=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,m=k.next;k.next=null;null===g?f=m:g.next=m;g=k;var n=a.alternate;null!==n&&(n=n.updateQueue,h=n.lastBaseUpdate,h!==g&&(null===h?n.firstBaseUpdate=m:h.next=m,n.lastBaseUpdate=k))}if(null!==f){var l=e.baseState;g=0;n=m=k=null;h=f;do{var r=h.lane,p=h.eventTime;if((d&r)===r){null!==n&&(n=n.next={eventTime:p,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});a:{var x=
a,F=h;r=b;p=c;switch(F.tag){case 1:x=F.payload;if("function"===typeof x){l=x.call(p,l,r);break a}l=x;break a;case 3:x.flags=x.flags&-65537|128;case 0:x=F.payload;r="function"===typeof x?x.call(p,l,r):x;if(null===r||void 0===r)break a;l=E({},l,r);break a;case 2:fb=!0}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h))}else p={eventTime:p,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===n?(m=n=p,k=l):n=n.next=p,g|=r;h=h.next;if(null===h)if(h=
e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null}while(1);null===n&&(k=l);e.baseState=k;e.firstBaseUpdate=m;e.lastBaseUpdate=n;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);ra|=g;a.lanes=g;a.memoizedState=l}}function Fh(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(n(191,
e));e.call(d)}}}function ef(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:E({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}function Gh(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!qc(c,d)||!qc(e,f):!0}function Hh(a,b,c){var d=!1,e=cb;var f=b.contextType;"object"===typeof f&&null!==f?f=qa(f):(e=ea(b)?qb:J.current,d=b.contextTypes,f=(d=null!==d&&void 0!==
d)?Nb(a,e):cb);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=ud;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}function Ih(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&ud.enqueueReplaceState(b,
b.state,null)}function ff(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Jh;df(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=qa(f):(f=ea(b)?qb:J.current,e.context=Nb(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(ef(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&ud.enqueueReplaceState(e,e.state,null),td(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308)}function vc(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(n(309));var d=c.stateNode}if(!d)throw Error(n(147,a));var e=
d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;b===Jh&&(b=e.refs={});null===a?delete b[f]:b[f]=a};b._stringRef=f;return b}if("string"!==typeof a)throw Error(n(284));if(!c._owner)throw Error(n(290,a));}return a}function vd(a,b){a=Object.prototype.toString.call(b);throw Error(n(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function Kh(a){var b=a._init;return b(a._payload)}function Lh(a){function b(b,
c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c)}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=gb(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&null===b.alternate&&
(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=gf(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===Bb)return l(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ta&&Kh(f)===b.type))return d=e(b,c.props),d.ref=vc(a,b,c),d.return=a,d;d=wd(c.type,c.key,c.props,null,a.mode,d);d.ref=vc(a,b,c);d.return=a;return d}function m(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==
c.containerInfo||b.stateNode.implementation!==c.implementation)return b=hf(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function l(a,b,c,d,f){if(null===b||7!==b.tag)return b=ub(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function u(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=gf(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case xd:return c=wd(b.type,b.key,b.props,null,a.mode,c),c.ref=vc(a,null,b),c.return=
a,c;case Cb:return b=hf(b,a.mode,c),b.return=a,b;case Ta:var d=b._init;return u(a,d(b._payload),c)}if(cc(b)||ac(b))return b=ub(b,a.mode,c,null),b.return=a,b;vd(a,b)}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case xd:return c.key===e?k(a,b,c,d):null;case Cb:return c.key===e?m(a,b,c,d):null;case Ta:return e=c._init,r(a,b,e(c._payload),d)}if(cc(c)||
ac(c))return null!==e?null:l(a,b,c,d,null);vd(a,c)}return null}function p(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case xd:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case Cb:return a=a.get(null===d.key?c:d.key)||null,m(b,a,d,e);case Ta:var f=d._init;return p(a,b,c,f(d._payload),e)}if(cc(d)||ac(d))return a=a.get(c)||null,l(b,a,d,e,null);vd(b,d)}return null}function x(e,g,h,k){for(var n=
null,m=null,l=g,q=g=0,v=null;null!==l&&q<h.length;q++){l.index>q?(v=l,l=null):v=l.sibling;var A=r(e,l,h[q],k);if(null===A){null===l&&(l=v);break}a&&l&&null===A.alternate&&b(e,l);g=f(A,g,q);null===m?n=A:m.sibling=A;m=A;l=v}if(q===h.length)return c(e,l),D&&rb(e,q),n;if(null===l){for(;q<h.length;q++)l=u(e,h[q],k),null!==l&&(g=f(l,g,q),null===m?n=l:m.sibling=l,m=l);D&&rb(e,q);return n}for(l=d(e,l);q<h.length;q++)v=p(l,e,q,h[q],k),null!==v&&(a&&null!==v.alternate&&l.delete(null===v.key?q:v.key),g=f(v,
g,q),null===m?n=v:m.sibling=v,m=v);a&&l.forEach(function(a){return b(e,a)});D&&rb(e,q);return n}function F(e,g,h,k){var m=ac(h);if("function"!==typeof m)throw Error(n(150));h=m.call(h);if(null==h)throw Error(n(151));for(var l=m=null,q=g,v=g=0,A=null,t=h.next();null!==q&&!t.done;v++,t=h.next()){q.index>v?(A=q,q=null):A=q.sibling;var x=r(e,q,t.value,k);if(null===x){null===q&&(q=A);break}a&&q&&null===x.alternate&&b(e,q);g=f(x,g,v);null===l?m=x:l.sibling=x;l=x;q=A}if(t.done)return c(e,q),D&&rb(e,v),m;
if(null===q){for(;!t.done;v++,t=h.next())t=u(e,t.value,k),null!==t&&(g=f(t,g,v),null===l?m=t:l.sibling=t,l=t);D&&rb(e,v);return m}for(q=d(e,q);!t.done;v++,t=h.next())t=p(q,e,v,t.value,k),null!==t&&(a&&null!==t.alternate&&q.delete(null===t.key?v:t.key),g=f(t,g,v),null===l?m=t:l.sibling=t,l=t);a&&q.forEach(function(a){return b(e,a)});D&&rb(e,v);return m}function w(a,d,f,h){"object"===typeof f&&null!==f&&f.type===Bb&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case xd:a:{for(var k=
f.key,m=d;null!==m;){if(m.key===k){k=f.type;if(k===Bb){if(7===m.tag){c(a,m.sibling);d=e(m,f.props.children);d.return=a;a=d;break a}}else if(m.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ta&&Kh(k)===m.type){c(a,m.sibling);d=e(m,f.props);d.ref=vc(a,m,f);d.return=a;a=d;break a}c(a,m);break}else b(a,m);m=m.sibling}f.type===Bb?(d=ub(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=wd(f.type,f.key,f.props,null,a.mode,h),h.ref=vc(a,d,f),h.return=a,a=h)}return g(a);case Cb:a:{for(m=f.key;null!==
d;){if(d.key===m)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=hf(f,a.mode,h);d.return=a;a=d}return g(a);case Ta:return m=f._init,w(a,d,m(f._payload),h)}if(cc(f))return x(a,d,f,h);if(ac(f))return F(a,d,f,h);vd(a,f)}return"string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
(c(a,d),d=gf(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return w}function vb(a){if(a===wc)throw Error(n(174));return a}function jf(a,b){y(xc,b);y(yc,a);y(Ea,wc);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:oe(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=oe(b,a)}w(Ea);y(Ea,b)}function Tb(a){w(Ea);w(yc);w(xc)}function Mh(a){vb(xc.current);var b=vb(Ea.current);var c=oe(b,a.type);b!==c&&(y(yc,a),y(Ea,c))}function kf(a){yc.current===a&&
(w(Ea),w(yc))}function yd(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}function lf(){for(var a=0;a<mf.length;a++)mf[a]._workInProgressVersionPrimary=
null;mf.length=0}function V(){throw Error(n(321));}function nf(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!ua(a[c],b[c]))return!1;return!0}function of(a,b,c,d,e,f){wb=f;C=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;zd.current=null===a||null===a.memoizedState?mk:nk;a=c(d,e);if(zc){f=0;do{zc=!1;Ac=0;if(25<=f)throw Error(n(301));f+=1;N=K=null;b.updateQueue=null;zd.current=ok;a=c(d,e)}while(zc)}zd.current=Ad;b=null!==K&&null!==K.next;wb=0;N=K=C=null;Bd=!1;if(b)throw Error(n(300));
return a}function pf(){var a=0!==Ac;Ac=0;return a}function Fa(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===N?C.memoizedState=N=a:N=N.next=a;return N}function sa(){if(null===K){var a=C.alternate;a=null!==a?a.memoizedState:null}else a=K.next;var b=null===N?C.memoizedState:N.next;if(null!==b)N=b,K=a;else{if(null===a)throw Error(n(310));K=a;a={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null};null===N?C.memoizedState=
N=a:N=N.next=a}return N}function Bc(a,b){return"function"===typeof b?b(a):b}function qf(a,b,c){b=sa();c=b.queue;if(null===c)throw Error(n(311));c.lastRenderedReducer=a;var d=K,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,m=f;do{var l=m.lane;if((wb&l)===l)null!==k&&(k=k.next={lane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),d=m.hasEagerState?
m.eagerState:a(d,m.action);else{var u={lane:l,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null};null===k?(h=k=u,g=d):k=k.next=u;C.lanes|=l;ra|=l}m=m.next}while(null!==m&&m!==f);null===k?g=d:k.next=h;ua(d,b.memoizedState)||(ha=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d}a=c.interleaved;if(null!==a){e=a;do f=e.lane,C.lanes|=f,ra|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return[b.memoizedState,c.dispatch]}function rf(a,b,c){b=sa();
c=b.queue;if(null===c)throw Error(n(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);ua(f,b.memoizedState)||(ha=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}function Nh(a,b,c){}function Oh(a,b,c){c=C;var d=sa(),e=b(),f=!ua(d.memoizedState,e);f&&(d.memoizedState=e,ha=!0);d=d.queue;sf(Ph.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==N&&
N.memoizedState.tag&1){c.flags|=2048;Cc(9,Qh.bind(null,c,d,e,b),void 0,null);if(null===O)throw Error(n(349));0!==(wb&30)||Rh(c,b,e)}return e}function Rh(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=C.updateQueue;null===b?(b={lastEffect:null,stores:null},C.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a))}function Qh(a,b,c,d){b.value=c;b.getSnapshot=d;Sh(b)&&Th(a)}function Ph(a,b,c){return c(function(){Sh(b)&&Th(a)})}function Sh(a){var b=a.getSnapshot;a=a.value;try{var c=
b();return!ua(a,c)}catch(d){return!0}}function Th(a){var b=Oa(a,1);null!==b&&ya(b,a,1,-1)}function Uh(a){var b=Fa();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bc,lastRenderedState:a};b.queue=a;a=a.dispatch=pk.bind(null,C,a);return[b.memoizedState,a]}function Cc(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=C.updateQueue;null===b?(b={lastEffect:null,stores:null},C.updateQueue=b,b.lastEffect=a.next=
a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Vh(a){return sa().memoizedState}function Cd(a,b,c,d){var e=Fa();C.flags|=a;e.memoizedState=Cc(1|b,c,void 0,void 0===d?null:d)}function Dd(a,b,c,d){var e=sa();d=void 0===d?null:d;var f=void 0;if(null!==K){var g=K.memoizedState;f=g.destroy;if(null!==d&&nf(d,g.deps)){e.memoizedState=Cc(b,c,f,d);return}}C.flags|=a;e.memoizedState=Cc(1|b,c,f,d)}function Wh(a,b){return Cd(8390656,8,a,b)}function sf(a,
b){return Dd(2048,8,a,b)}function Xh(a,b){return Dd(4,2,a,b)}function Yh(a,b){return Dd(4,4,a,b)}function Zh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function $h(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Dd(4,4,Zh.bind(null,b,a),c)}function tf(a,b){}function ai(a,b){var c=sa();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nf(b,d[1]))return d[0];c.memoizedState=[a,
b];return a}function bi(a,b){var c=sa();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nf(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function ci(a,b,c){if(0===(wb&21))return a.baseState&&(a.baseState=!1,ha=!0),a.memoizedState=c;ua(c,b)||(c=Dg(),C.lanes|=c,ra|=c,a.baseState=!0);return b}function qk(a,b,c){c=z;z=0!==c&&4>c?c:4;a(!0);var d=uf.transition;uf.transition={};try{a(!1),b()}finally{z=c,uf.transition=d}}function di(){return sa().memoizedState}function rk(a,b,
c){var d=hb(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(ei(a))fi(b,c);else if(c=Ch(a,b,c,d),null!==c){var e=Z();ya(c,a,d,e);gi(c,b,d)}}function pk(a,b,c){var d=hb(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(ei(a))fi(b,e);else{var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(ua(h,g)){var k=b.interleaved;null===k?(e.next=e,cf(b)):
(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(m){}finally{}c=Ch(a,b,e,d);null!==c&&(e=Z(),ya(c,a,d,e),gi(c,b,d))}}function ei(a){var b=a.alternate;return a===C||null!==b&&b===C}function fi(a,b){zc=Bd=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}function gi(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;xe(a,c)}}function Ub(a,b){try{var c="",d=b;do c+=gj(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+
"\n"+f.stack}return{value:a,source:b,stack:e,digest:null}}function vf(a,b,c){return{value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}function wf(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}function hi(a,b,c){c=Pa(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Ed||(Ed=!0,xf=d);wf(a,b)};return c}function ii(a,b,c){c=Pa(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};
c.callback=function(){wf(a,b)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){wf(a,b);"function"!==typeof d&&(null===ib?ib=new Set([this]):ib.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}function ji(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new sk;var e=new Set;d.set(b,e)}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=tk.bind(null,a,b,c),b.then(a,a))}function ki(a){do{var b;
if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return}while(null!==a);return null}function li(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=Pa(-1,1),b.tag=2,eb(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}function aa(a,b,c,d){b.child=null===a?mi(b,null,c,d):Vb(b,a.child,c,d)}function ni(a,b,c,d,e){c=c.render;var f=b.ref;Sb(b,e);d=of(a,b,c,d,f,
e);c=pf();if(null!==a&&!ha)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Qa(a,b,e);D&&c&&Ue(b);b.flags|=1;aa(a,b,d,e);return b.child}function oi(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!yf(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,pi(a,b,f,d,e);a=wd(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:qc;if(c(g,d)&&a.ref===
b.ref)return Qa(a,b,e)}b.flags|=1;a=gb(f,d);a.ref=b.ref;a.return=b;return b.child=a}function pi(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(qc(f,d)&&a.ref===b.ref)if(ha=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(ha=!0);else return b.lanes=a.lanes,Qa(a,b,e)}return zf(a,b,c,d,e)}function qi(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},y(Ga,ba),ba|=c;
else{if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,y(Ga,ba),ba|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;y(Ga,ba);ba|=d}else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,y(Ga,ba),ba|=d;aa(a,b,e,c);return b.child}function ri(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152}function zf(a,
b,c,d,e){var f=ea(c)?qb:J.current;f=Nb(b,f);Sb(b,e);c=of(a,b,c,d,f,e);d=pf();if(null!==a&&!ha)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Qa(a,b,e);D&&d&&Ue(b);b.flags|=1;aa(a,b,c,e);return b.child}function si(a,b,c,d,e){if(ea(c)){var f=!0;ld(b)}else f=!1;Sb(b,e);if(null===b.stateNode)Fd(a,b),Hh(b,c,d),ff(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,m=c.contextType;"object"===typeof m&&null!==m?m=qa(m):(m=ea(c)?qb:J.current,m=Nb(b,
m));var l=c.getDerivedStateFromProps,n="function"===typeof l||"function"===typeof g.getSnapshotBeforeUpdate;n||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==m)&&Ih(b,g,d,m);fb=!1;var r=b.memoizedState;g.state=r;td(b,d,g,e);k=b.memoizedState;h!==d||r!==k||S.current||fb?("function"===typeof l&&(ef(b,c,l,d),k=b.memoizedState),(h=fb||Gh(b,c,h,d,r,k,m))?(n||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||
("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=m,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1)}else{g=b.stateNode;Dh(a,b);h=b.memoizedProps;m=b.type===b.elementType?h:xa(b.type,h);g.props=
m;n=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=qa(k):(k=ea(c)?qb:J.current,k=Nb(b,k));var p=c.getDerivedStateFromProps;(l="function"===typeof p||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==n||r!==k)&&Ih(b,g,d,k);fb=!1;r=b.memoizedState;g.state=r;td(b,d,g,e);var x=b.memoizedState;h!==n||r!==x||S.current||fb?("function"===typeof p&&(ef(b,c,p,d),x=b.memoizedState),
(m=fb||Gh(b,c,m,d,r,x,k)||!1)?(l||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=
4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=m):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1)}return Af(a,b,c,d,f,e)}function Af(a,b,c,d,e,f){ri(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&vh(b,c,!1),
Qa(a,b,f);d=b.stateNode;uk.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Vb(b,a.child,null,f),b.child=Vb(b,null,h,f)):aa(a,b,h,f);b.memoizedState=d.state;e&&vh(b,c,!0);return b.child}function ti(a){var b=a.stateNode;b.pendingContext?th(a,b.pendingContext,b.pendingContext!==b.context):b.context&&th(a,b.context,!1);jf(a,b.containerInfo)}function ui(a,b,c,d,e){Qb();Ye(e);b.flags|=256;aa(a,b,c,d);return b.child}function Bf(a){return{baseLanes:a,
cachePool:null,transitions:null}}function vi(a,b,c){var d=b.pendingProps,e=G.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;y(G,e&1);if(null===a){Xe(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==
f?(f.childLanes=0,f.pendingProps=g):f=Gd(g,d,0,null),a=ub(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=Bf(c),b.memoizedState=Cf,a):Df(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return vk(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=gb(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=gb(h,f):(f=
ub(f,g,c,null),f.flags|=2);f.return=b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?Bf(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=Cf;return d}f=a.child;a=f.sibling;d=gb(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
function Df(a,b,c){b=Gd({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function Hd(a,b,c,d){null!==d&&Ye(d);Vb(b,a.child,null,c);a=Df(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}function vk(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=vf(Error(n(422))),Hd(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=Gd({mode:"visible",children:d.children},e,0,null);f=ub(f,e,g,null);f.flags|=2;d.return=
b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Vb(b,a.child,null,g);b.child.memoizedState=Bf(g);b.memoizedState=Cf;return f}if(0===(b.mode&1))return Hd(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;if(d)var h=d.dgst;d=h;f=Error(n(419));d=vf(f,d,void 0);return Hd(a,b,g,d)}h=0!==(g&a.childLanes);if(ha||h){d=O;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=
32;break;case 536870912:e=268435456;break;default:e=0}e=0!==(e&(d.suspendedLanes|g))?0:e;0!==e&&e!==f.retryLane&&(f.retryLane=e,Oa(a,e),ya(d,a,e,-1))}Ef();d=vf(Error(n(421)));return Hd(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=wk.bind(null,a),e._reactRetry=b,null;a=f.treeContext;fa=Ka(e.nextSibling);la=b;D=!0;wa=null;null!==a&&(na[oa++]=Ma,na[oa++]=Na,na[oa++]=sb,Ma=a.id,Na=a.overflow,sb=b);b=Df(b,d.children);b.flags|=4096;return b}function wi(a,b,c){a.lanes|=b;var d=a.alternate;
null!==d&&(d.lanes|=b);bf(a.return,b,c)}function Ff(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e)}function xi(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;aa(a,b,d.children,c);d=G.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else{if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&
wi(a,c,b);else if(19===a.tag)wi(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}y(G,d);if(0===(b.mode&1))b.memoizedState=null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===yd(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);Ff(b,!1,e,c,f);break;case "backwards":c=
null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===yd(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}Ff(b,!0,c,null,f);break;case "together":Ff(b,!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}function Fd(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2)}function Qa(a,b,c){null!==a&&(b.dependencies=a.dependencies);ra|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(n(153));if(null!==
b.child){a=b.child;c=gb(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=gb(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}function xk(a,b,c){switch(b.tag){case 3:ti(b);Qb();break;case 5:Mh(b);break;case 1:ea(b.type)&&ld(b);break;case 4:jf(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;y(rd,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return y(G,G.current&
1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return vi(a,b,c);y(G,G.current&1);a=Qa(a,b,c);return null!==a?a.sibling:null}y(G,G.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&128)){if(d)return xi(a,b,c);b.flags|=128}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);y(G,G.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,qi(a,b,c)}return Qa(a,b,c)}function Dc(a,b){if(!D)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==
b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}function W(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,
d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}function yk(a,b,c){var d=b.pendingProps;Ve(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return W(b),null;case 1:return ea(b.type)&&(w(S),w(J)),W(b),null;case 3:d=b.stateNode;Tb();w(S);w(J);lf();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)pd(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&
256)||(b.flags|=1024,null!==wa&&(Gf(wa),wa=null));yi(a,b);W(b);return null;case 5:kf(b);var e=vb(xc.current);c=b.type;if(null!==a&&null!=b.stateNode)zk(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else{if(!d){if(null===b.stateNode)throw Error(n(166));W(b);return null}a=vb(Ea.current);if(pd(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Da]=b;d[uc]=f;a=0!==(b.mode&1);switch(c){case "dialog":B("cancel",d);B("close",d);break;case "iframe":case "object":case "embed":B("load",d);break;
case "video":case "audio":for(e=0;e<Ec.length;e++)B(Ec[e],d);break;case "source":B("error",d);break;case "img":case "image":case "link":B("error",d);B("load",d);break;case "details":B("toggle",d);break;case "input":kg(d,f);B("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};B("invalid",d);break;case "textarea":ng(d,f),B("invalid",d)}pe(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&
jd(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&jd(d.textContent,h,a),e=["children",""+h]):$b.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&B("scroll",d)}switch(c){case "input":Pc(d);mg(d,f,!0);break;case "textarea":Pc(d);pg(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=kd)}d=e;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===
a&&(a=qg(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Da]=b;a[uc]=d;Ak(a,b,!1,!1);b.stateNode=a;a:{g=qe(c,d);switch(c){case "dialog":B("cancel",a);B("close",a);e=d;break;case "iframe":case "object":case "embed":B("load",a);e=d;break;
case "video":case "audio":for(e=0;e<Ec.length;e++)B(Ec[e],a);e=d;break;case "source":B("error",a);e=d;break;case "img":case "image":case "link":B("error",a);B("load",a);e=d;break;case "details":B("toggle",a);e=d;break;case "input":kg(a,d);e=ke(a,d);B("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=E({},d,{value:void 0});B("invalid",a);break;case "textarea":ng(a,d);e=ne(a,d);B("invalid",a);break;default:e=d}pe(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=
h[f];"style"===f?sg(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&zi(a,k)):"children"===f?"string"===typeof k?("textarea"!==c||""!==k)&&Fc(a,k):"number"===typeof k&&Fc(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&($b.hasOwnProperty(f)?null!=k&&"onScroll"===f&&B("scroll",a):null!=k&&$d(a,f,k,g))}switch(c){case "input":Pc(a);mg(a,d,!1);break;case "textarea":Pc(a);pg(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Ua(d.value));
break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?Db(a,!!d.multiple,f,!1):null!=d.defaultValue&&Db(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof e.onClick&&(a.onclick=kd)}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1}}d&&(b.flags|=4)}null!==b.ref&&(b.flags|=512,b.flags|=2097152)}W(b);return null;case 6:if(a&&null!=b.stateNode)Bk(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===
b.stateNode)throw Error(n(166));c=vb(xc.current);vb(Ea.current);if(pd(b)){d=b.stateNode;c=b.memoizedProps;d[Da]=b;if(f=d.nodeValue!==c)if(a=la,null!==a)switch(a.tag){case 3:jd(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&jd(d.nodeValue,c,0!==(a.mode&1))}f&&(b.flags|=4)}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Da]=b,b.stateNode=d}W(b);return null;case 13:w(G);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(D&&
null!==fa&&0!==(b.mode&1)&&0===(b.flags&128)){for(f=fa;f;)f=Ka(f.nextSibling);Qb();b.flags|=98560;f=!1}else if(f=pd(b),null!==d&&null!==d.dehydrated){if(null===a){if(!f)throw Error(n(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(n(317));f[Da]=b}else Qb(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;W(b);f=!1}else null!==wa&&(Gf(wa),wa=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&
d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(G.current&1)?0===L&&(L=3):Ef()));null!==b.updateQueue&&(b.flags|=4);W(b);return null;case 4:return Tb(),yi(a,b),null===a&&sc(b.stateNode.containerInfo),W(b),null;case 10:return af(b.type._context),W(b),null;case 17:return ea(b.type)&&(w(S),w(J)),W(b),null;case 19:w(G);f=b.memoizedState;if(null===f)return W(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Dc(f,!1);else{if(0!==L||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=
yd(a);if(null!==g){b.flags|=128;Dc(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,
f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;y(G,G.current&1|2);return b.child}a=a.sibling}null!==f.tail&&P()>Hf&&(b.flags|=128,d=!0,Dc(f,!1),b.lanes=4194304)}else{if(!d)if(a=yd(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Dc(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!D)return W(b),null}else 2*P()-f.renderingStartTime>Hf&&1073741824!==c&&(b.flags|=
128,d=!0,Dc(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g)}if(null!==f.tail)return b=f.tail,f.rendering=b,f.tail=b.sibling,f.renderingStartTime=P(),b.sibling=null,c=G.current,y(G,d?c&1|2:c&1),b;W(b);return null;case 22:case 23:return ba=Ga.current,w(Ga),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(ba&1073741824)&&(W(b),b.subtreeFlags&6&&(b.flags|=8192)):W(b),null;case 24:return null;
case 25:return null}throw Error(n(156,b.tag));}function Ck(a,b,c){Ve(b);switch(b.tag){case 1:return ea(b.type)&&(w(S),w(J)),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return Tb(),w(S),w(J),lf(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return kf(b),null;case 13:w(G);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(n(340));Qb()}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return w(G),null;case 4:return Tb(),
null;case 10:return af(b.type._context),null;case 22:case 23:return ba=Ga.current,w(Ga),null;case 24:return null;default:return null}}function Wb(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null)}catch(d){H(a,b,d)}else c.current=null}function If(a,b,c){try{c()}catch(d){H(a,b,d)}}function Dk(a,b){Jf=Zc;a=ch();if(Ie(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();
if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType}catch(M){c=null;break a}var g=0,h=-1,k=-1,m=0,t=0,u=a,r=null;b:for(;;){for(var p;;){u!==c||0!==e&&3!==u.nodeType||(h=g+e);u!==f||0!==d&&3!==u.nodeType||(k=g+d);3===u.nodeType&&(g+=u.nodeValue.length);if(null===(p=u.firstChild))break;r=u;u=p}for(;;){if(u===a)break b;r===c&&++m===e&&(h=g);r===f&&++t===d&&(k=g);if(null!==(p=u.nextSibling))break;u=r;r=u.parentNode}u=p}c=-1===h||-1===k?null:
{start:h,end:k}}else c=null}c=c||{start:0,end:0}}else c=null;Kf={focusedElem:a,selectionRange:c};Zc=!1;for(l=b;null!==l;)if(b=l,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,l=a;else for(;null!==l;){b=l;try{var x=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;case 1:if(null!==x){var w=x.memoizedProps,z=x.memoizedState,A=b.stateNode,v=A.getSnapshotBeforeUpdate(b.elementType===b.type?w:xa(b.type,w),z);A.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var q=
b.stateNode.containerInfo;1===q.nodeType?q.textContent="":9===q.nodeType&&q.documentElement&&q.removeChild(q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163));}}catch(M){H(b,b.return,M)}a=b.sibling;if(null!==a){a.return=b.return;l=a;break}l=b.return}x=Ai;Ai=!1;return x}function Gc(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&If(b,c,f)}e=e.next}while(e!==d)}}
function Id(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}function Lf(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c}"function"===typeof b?b(a):b.current=a}}function Bi(a){var b=a.alternate;null!==b&&(a.alternate=null,Bi(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Da],delete b[uc],delete b[Me],delete b[Ek],
delete b[Fk]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null}function Ci(a){return 5===a.tag||3===a.tag||4===a.tag}function Di(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Ci(a.return))return null;a=a.return}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child}if(!(a.flags&
2))return a.stateNode}}function Mf(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=kd));else if(4!==d&&(a=a.child,null!==a))for(Mf(a,b,c),a=a.sibling;null!==a;)Mf(a,b,c),a=a.sibling}function Nf(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);
else if(4!==d&&(a=a.child,null!==a))for(Nf(a,b,c),a=a.sibling;null!==a;)Nf(a,b,c),a=a.sibling}function jb(a,b,c){for(c=c.child;null!==c;)Ei(a,b,c),c=c.sibling}function Ei(a,b,c){if(Ca&&"function"===typeof Ca.onCommitFiberUnmount)try{Ca.onCommitFiberUnmount(Uc,c)}catch(h){}switch(c.tag){case 5:X||Wb(c,b);case 6:var d=T,e=za;T=null;jb(a,b,c);T=d;za=e;null!==T&&(za?(a=T,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):T.removeChild(c.stateNode));break;case 18:null!==T&&(za?
(a=T,c=c.stateNode,8===a.nodeType?Re(a.parentNode,c):1===a.nodeType&&Re(a,c),nc(a)):Re(T,c.stateNode));break;case 4:d=T;e=za;T=c.stateNode.containerInfo;za=!0;jb(a,b,c);T=d;za=e;break;case 0:case 11:case 14:case 15:if(!X&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?If(c,b,g):0!==(f&4)&&If(c,b,g));e=e.next}while(e!==d)}jb(a,b,c);break;case 1:if(!X&&(Wb(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=
c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount()}catch(h){H(c,b,h)}jb(a,b,c);break;case 21:jb(a,b,c);break;case 22:c.mode&1?(X=(d=X)||null!==c.memoizedState,jb(a,b,c),X=d):jb(a,b,c);break;default:jb(a,b,c)}}function Fi(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Gk);b.forEach(function(b){var d=Hk.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}function Aa(a,b,c){c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=
c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:T=h.stateNode;za=!1;break a;case 3:T=h.stateNode.containerInfo;za=!0;break a;case 4:T=h.stateNode.containerInfo;za=!0;break a}h=h.return}if(null===T)throw Error(n(160));Ei(f,g,e);T=null;za=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null}catch(m){H(e,b,m)}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)Gi(b,a),b=b.sibling}function Gi(a,b,c){var d=a.alternate;c=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:Aa(b,a);
Ha(a);if(c&4){try{Gc(3,a,a.return),Id(3,a)}catch(F){H(a,a.return,F)}try{Gc(5,a,a.return)}catch(F){H(a,a.return,F)}}break;case 1:Aa(b,a);Ha(a);c&512&&null!==d&&Wb(d,d.return);break;case 5:Aa(b,a);Ha(a);c&512&&null!==d&&Wb(d,d.return);if(a.flags&32){var e=a.stateNode;try{Fc(e,"")}catch(F){H(a,a.return,F)}}if(c&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==d?d.memoizedProps:f,h=a.type,k=a.updateQueue;a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&lg(e,f);
qe(h,g);var m=qe(h,f);for(g=0;g<k.length;g+=2){var t=k[g],u=k[g+1];"style"===t?sg(e,u):"dangerouslySetInnerHTML"===t?zi(e,u):"children"===t?Fc(e,u):$d(e,t,u,m)}switch(h){case "input":le(e,f);break;case "textarea":og(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var p=f.value;null!=p?Db(e,!!f.multiple,p,!1):r!==!!f.multiple&&(null!=f.defaultValue?Db(e,!!f.multiple,f.defaultValue,!0):Db(e,!!f.multiple,f.multiple?[]:"",!1))}e[uc]=f}catch(F){H(a,a.return,
F)}}break;case 6:Aa(b,a);Ha(a);if(c&4){if(null===a.stateNode)throw Error(n(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f}catch(F){H(a,a.return,F)}}break;case 3:Aa(b,a);Ha(a);if(c&4&&null!==d&&d.memoizedState.isDehydrated)try{nc(b.containerInfo)}catch(F){H(a,a.return,F)}break;case 4:Aa(b,a);Ha(a);break;case 13:Aa(b,a);Ha(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||null!==e.alternate&&null!==e.alternate.memoizedState||(Of=P()));c&4&&Fi(a);break;case 22:t=
null!==d&&null!==d.memoizedState;a.mode&1?(X=(m=X)||t,Aa(b,a),X=m):Aa(b,a);Ha(a);if(c&8192){m=null!==a.memoizedState;if((a.stateNode.isHidden=m)&&!t&&0!==(a.mode&1))for(l=a,t=a.child;null!==t;){for(u=l=t;null!==l;){r=l;p=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Gc(4,r,r.return);break;case 1:Wb(r,r.return);var x=r.stateNode;if("function"===typeof x.componentWillUnmount){c=r;b=r.return;try{d=c,x.props=d.memoizedProps,x.state=d.memoizedState,x.componentWillUnmount()}catch(F){H(c,b,F)}}break;
case 5:Wb(r,r.return);break;case 22:if(null!==r.memoizedState){Hi(u);continue}}null!==p?(p.return=r,l=p):Hi(u)}t=t.sibling}a:for(t=null,u=a;;){if(5===u.tag){if(null===t){t=u;try{e=u.stateNode,m?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=u.stateNode,k=u.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=rg("display",g))}catch(F){H(a,a.return,F)}}}else if(6===u.tag){if(null===t)try{u.stateNode.nodeValue=
m?"":u.memoizedProps}catch(F){H(a,a.return,F)}}else if((22!==u.tag&&23!==u.tag||null===u.memoizedState||u===a)&&null!==u.child){u.child.return=u;u=u.child;continue}if(u===a)break a;for(;null===u.sibling;){if(null===u.return||u.return===a)break a;t===u&&(t=null);u=u.return}t===u&&(t=null);u.sibling.return=u.return;u=u.sibling}}break;case 19:Aa(b,a);Ha(a);c&4&&Fi(a);break;case 21:break;default:Aa(b,a),Ha(a)}}function Ha(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Ci(c)){var d=c;
break a}c=c.return}throw Error(n(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(Fc(e,""),d.flags&=-33);var f=Di(a);Nf(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Di(a);Mf(a,h,g);break;default:throw Error(n(161));}}catch(k){H(a,a.return,k)}a.flags&=-3}b&4096&&(a.flags&=-4097)}function Ik(a,b,c){l=a;Ii(a,b,c)}function Ii(a,b,c){for(var d=0!==(a.mode&1);null!==l;){var e=l,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Jd;if(!g){var h=e.alternate,k=null!==h&&null!==
h.memoizedState||X;h=Jd;var m=X;Jd=g;if((X=k)&&!m)for(l=e;null!==l;)g=l,k=g.child,22===g.tag&&null!==g.memoizedState?Ji(e):null!==k?(k.return=g,l=k):Ji(e);for(;null!==f;)l=f,Ii(f,b,c),f=f.sibling;l=e;Jd=h;X=m}Ki(a,b,c)}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,l=f):Ki(a,b,c)}}function Ki(a,b,c){for(;null!==l;){b=l;if(0!==(b.flags&8772)){c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:X||Id(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!X)if(null===c)d.componentDidMount();
else{var e=b.elementType===b.type?c.memoizedProps:xa(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var f=b.updateQueue;null!==f&&Fh(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=b.child.stateNode;break;case 1:c=b.child.stateNode}Fh(b,g,c)}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&
c.focus();break;case "img":k.src&&(c.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var m=b.alternate;if(null!==m){var t=m.memoizedState;if(null!==t){var p=t.dehydrated;null!==p&&nc(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163));}X||b.flags&512&&Lf(b)}catch(r){H(b,b.return,r)}}if(b===a){l=null;break}c=b.sibling;if(null!==c){c.return=b.return;l=c;break}l=b.return}}function Hi(a){for(;null!==l;){var b=l;if(b===
a){l=null;break}var c=b.sibling;if(null!==c){c.return=b.return;l=c;break}l=b.return}}function Ji(a){for(;null!==l;){var b=l;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Id(4,b)}catch(k){H(b,c,k)}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount()}catch(k){H(b,e,k)}}var f=b.return;try{Lf(b)}catch(k){H(b,f,k)}break;case 5:var g=b.return;try{Lf(b)}catch(k){H(b,g,k)}}}catch(k){H(b,b.return,k)}if(b===a){l=null;break}var h=b.sibling;
if(null!==h){h.return=b.return;l=h;break}l=b.return}}function Hc(){Hf=P()+500}function Z(){return 0!==(p&6)?P():-1!==Kd?Kd:Kd=P()}function hb(a){if(0===(a.mode&1))return 1;if(0!==(p&2)&&0!==U)return U&-U;if(null!==Jk.transition)return 0===Ld&&(Ld=Dg()),Ld;a=z;if(0!==a)return a;a=window.event;a=void 0===a?16:Lg(a.type);return a}function ya(a,b,c,d){if(50<Ic)throw Ic=0,Pf=null,Error(n(185));ic(a,c,d);if(0===(p&2)||a!==O)a===O&&(0===(p&2)&&(Md|=c),4===L&&kb(a,U)),ia(a,d),1===c&&0===p&&0===(b.mode&1)&&
(Hc(),md&&db())}function ia(a,b){var c=a.callbackNode;uj(a,b);var d=Vc(a,a===O?U:0);if(0===d)null!==c&&Li(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&Li(c);if(1===b)0===a.tag?kk(Mi.bind(null,a)):wh(Mi.bind(null,a)),Kk(function(){0===(p&6)&&db()}),c=null;else{switch(Eg(d)){case 1:c=De;break;case 4:c=Mg;break;case 16:c=ad;break;case 536870912:c=Ng;break;default:c=ad}c=Ni(c,Oi.bind(null,a))}a.callbackPriority=b;a.callbackNode=c}}function Oi(a,b){Kd=-1;
Ld=0;if(0!==(p&6))throw Error(n(327));var c=a.callbackNode;if(Xb()&&a.callbackNode!==c)return null;var d=Vc(a,a===O?U:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Nd(a,d);else{b=d;var e=p;p|=2;var f=Pi();if(O!==a||U!==b)Ra=null,Hc(),xb(a,b);do try{Lk();break}catch(h){Qi(a,h)}while(1);Ze();Od.current=f;p=e;null!==I?b=0:(O=null,U=0,b=L)}if(0!==b){2===b&&(e=ve(a),0!==e&&(d=e,b=Qf(a,e)));if(1===b)throw c=Jc,xb(a,0),kb(a,d),ia(a,P()),c;if(6===b)kb(a,d);else{e=a.current.alternate;
if(0===(d&30)&&!Mk(e)&&(b=Nd(a,d),2===b&&(f=ve(a),0!==f&&(d=f,b=Qf(a,f))),1===b))throw c=Jc,xb(a,0),kb(a,d),ia(a,P()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(n(345));case 2:yb(a,ja,Ra);break;case 3:kb(a,d);if((d&130023424)===d&&(b=Of+500-P(),10<b)){if(0!==Vc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){Z();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Rf(yb.bind(null,a,ja,Ra),b);break}yb(a,ja,Ra);break;case 4:kb(a,d);if((d&4194240)===d)break;b=a.eventTimes;
for(e=-1;0<d;){var g=31-ta(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f}d=e;d=P()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*Nk(d/1960))-d;if(10<d){a.timeoutHandle=Rf(yb.bind(null,a,ja,Ra),d);break}yb(a,ja,Ra);break;case 5:yb(a,ja,Ra);break;default:throw Error(n(329));}}}ia(a,P());return a.callbackNode===c?Oi.bind(null,a):null}function Qf(a,b){var c=Kc;a.current.memoizedState.isDehydrated&&(xb(a,b).flags|=256);a=Nd(a,b);2!==a&&(b=ja,ja=c,null!==b&&Gf(b));return a}function Gf(a){null===
ja?ja=a:ja.push.apply(ja,a)}function Mk(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!ua(f(),e))return!1}catch(g){return!1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else{if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return!0;b=b.return}b.sibling.return=b.return;b=b.sibling}}return!0}function kb(a,b){b&=~Sf;b&=~Md;a.suspendedLanes|=b;a.pingedLanes&=
~b;for(a=a.expirationTimes;0<b;){var c=31-ta(b),d=1<<c;a[c]=-1;b&=~d}}function Mi(a){if(0!==(p&6))throw Error(n(327));Xb();var b=Vc(a,0);if(0===(b&1))return ia(a,P()),null;var c=Nd(a,b);if(0!==a.tag&&2===c){var d=ve(a);0!==d&&(b=d,c=Qf(a,d))}if(1===c)throw c=Jc,xb(a,0),kb(a,b),ia(a,P()),c;if(6===c)throw Error(n(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;yb(a,ja,Ra);ia(a,P());return null}function Tf(a,b){var c=p;p|=1;try{return a(b)}finally{p=c,0===p&&(Hc(),md&&db())}}function zb(a){null!==
lb&&0===lb.tag&&0===(p&6)&&Xb();var b=p;p|=1;var c=ca.transition,d=z;try{if(ca.transition=null,z=1,a)return a()}finally{z=d,ca.transition=c,p=b,0===(p&6)&&db()}}function xb(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Ok(c));if(null!==I)for(c=I.return;null!==c;){var d=c;Ve(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&(w(S),w(J));break;case 3:Tb();w(S);w(J);lf();break;case 5:kf(d);break;case 4:Tb();break;case 13:w(G);break;
case 19:w(G);break;case 10:af(d.type._context);break;case 22:case 23:ba=Ga.current,w(Ga)}c=c.return}O=a;I=a=gb(a.current,null);U=ba=b;L=0;Jc=null;Sf=Md=ra=0;ja=Kc=null;if(null!==tb){for(b=0;b<tb.length;b++)if(c=tb[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g}c.pending=d}tb=null}return a}function Qi(a,b){do{var c=I;try{Ze();zd.current=Ad;if(Bd){for(var d=C.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}Bd=
!1}wb=0;N=K=C=null;zc=!1;Ac=0;Uf.current=null;if(null===c||null===c.return){L=1;Jc=b;I=null;break}a:{var f=a,g=c.return,h=c,k=b;b=U;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var m=k,l=h,p=l.tag;if(0===(l.mode&1)&&(0===p||11===p||15===p)){var r=l.alternate;r?(l.updateQueue=r.updateQueue,l.memoizedState=r.memoizedState,l.lanes=r.lanes):(l.updateQueue=null,l.memoizedState=null)}var w=ki(g);if(null!==w){w.flags&=-257;li(w,g,h,f,b);w.mode&1&&ji(f,m,b);b=w;k=m;var x=b.updateQueue;
if(null===x){var z=new Set;z.add(k);b.updateQueue=z}else x.add(k);break a}else{if(0===(b&1)){ji(f,m,b);Ef();break a}k=Error(n(426))}}else if(D&&h.mode&1){var y=ki(g);if(null!==y){0===(y.flags&65536)&&(y.flags|=256);li(y,g,h,f,b);Ye(Ub(k,h));break a}}f=k=Ub(k,h);4!==L&&(L=2);null===Kc?Kc=[f]:Kc.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;b&=-b;f.lanes|=b;var A=hi(f,k,b);Eh(f,A);break a;case 1:h=k;var v=f.type,q=f.stateNode;if(0===(f.flags&128)&&("function"===typeof v.getDerivedStateFromError||
null!==q&&"function"===typeof q.componentDidCatch&&(null===ib||!ib.has(q)))){f.flags|=65536;b&=-b;f.lanes|=b;var B=ii(f,h,b);Eh(f,B);break a}}f=f.return}while(null!==f)}Ri(c)}catch(ma){b=ma;I===c&&null!==c&&(I=c=c.return);continue}break}while(1)}function Pi(){var a=Od.current;Od.current=Ad;return null===a?Ad:a}function Ef(){if(0===L||3===L||2===L)L=4;null===O||0===(ra&268435455)&&0===(Md&268435455)||kb(O,U)}function Nd(a,b){var c=p;p|=2;var d=Pi();if(O!==a||U!==b)Ra=null,xb(a,b);do try{Pk();break}catch(e){Qi(a,
e)}while(1);Ze();p=c;Od.current=d;if(null!==I)throw Error(n(261));O=null;U=0;return L}function Pk(){for(;null!==I;)Si(I)}function Lk(){for(;null!==I&&!Qk();)Si(I)}function Si(a){var b=Rk(a.alternate,a,ba);a.memoizedProps=a.pendingProps;null===b?Ri(a):I=b;Uf.current=null}function Ri(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=yk(c,b,ba),null!==c){I=c;return}}else{c=Ck(c,b);if(null!==c){c.flags&=32767;I=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;
else{L=6;I=null;return}}b=b.sibling;if(null!==b){I=b;return}I=b=a}while(null!==b);0===L&&(L=5)}function yb(a,b,c){var d=z,e=ca.transition;try{ca.transition=null,z=1,Sk(a,b,c,d)}finally{ca.transition=e,z=d}return null}function Sk(a,b,c,d){do Xb();while(null!==lb);if(0!==(p&6))throw Error(n(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(n(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;
vj(a,f);a===O&&(I=O=null,U=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||Pd||(Pd=!0,Ni(ad,function(){Xb();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=ca.transition;ca.transition=null;var g=z;z=1;var h=p;p|=4;Uf.current=null;Dk(a,c);Gi(c,a);Uj(Kf);Zc=!!Jf;Kf=Jf=null;a.current=c;Ik(c,a,e);Tk();p=h;z=g;ca.transition=f}else a.current=c;Pd&&(Pd=!1,lb=a,Qd=e);f=a.pendingLanes;0===f&&(ib=null);pj(c.stateNode,d);ia(a,P());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=
b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Ed)throw Ed=!1,a=xf,xf=null,a;0!==(Qd&1)&&0!==a.tag&&Xb();f=a.pendingLanes;0!==(f&1)?a===Pf?Ic++:(Ic=0,Pf=a):Ic=0;db();return null}function Xb(){if(null!==lb){var a=Eg(Qd),b=ca.transition,c=z;try{ca.transition=null;z=16>a?16:a;if(null===lb)var d=!1;else{a=lb;lb=null;Qd=0;if(0!==(p&6))throw Error(n(331));var e=p;p|=4;for(l=a.current;null!==l;){var f=l,g=f.child;if(0!==(l.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var m=
h[k];for(l=m;null!==l;){var t=l;switch(t.tag){case 0:case 11:case 15:Gc(8,t,f)}var u=t.child;if(null!==u)u.return=t,l=u;else for(;null!==l;){t=l;var r=t.sibling,w=t.return;Bi(t);if(t===m){l=null;break}if(null!==r){r.return=w;l=r;break}l=w}}}var x=f.alternate;if(null!==x){var y=x.child;if(null!==y){x.child=null;do{var C=y.sibling;y.sibling=null;y=C}while(null!==y)}}l=f}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,l=g;else b:for(;null!==l;){f=l;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Gc(9,
f,f.return)}var A=f.sibling;if(null!==A){A.return=f.return;l=A;break b}l=f.return}}var v=a.current;for(l=v;null!==l;){g=l;var q=g.child;if(0!==(g.subtreeFlags&2064)&&null!==q)q.return=g,l=q;else b:for(g=v;null!==l;){h=l;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Id(9,h)}}catch(ma){H(h,h.return,ma)}if(h===g){l=null;break b}var B=h.sibling;if(null!==B){B.return=h.return;l=B;break b}l=h.return}}p=e;db();if(Ca&&"function"===typeof Ca.onPostCommitFiberRoot)try{Ca.onPostCommitFiberRoot(Uc,
a)}catch(ma){}d=!0}return d}finally{z=c,ca.transition=b}}return!1}function Ti(a,b,c){b=Ub(c,b);b=hi(a,b,1);a=eb(a,b,1);b=Z();null!==a&&(ic(a,1,b),ia(a,b))}function H(a,b,c){if(3===a.tag)Ti(a,a,c);else for(;null!==b;){if(3===b.tag){Ti(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===ib||!ib.has(d))){a=Ub(c,a);a=ii(b,a,1);b=eb(b,a,1);a=Z();null!==b&&(ic(b,1,a),ia(b,a));break}}b=b.return}}function tk(a,
b,c){var d=a.pingCache;null!==d&&d.delete(b);b=Z();a.pingedLanes|=a.suspendedLanes&c;O===a&&(U&c)===c&&(4===L||3===L&&(U&130023424)===U&&500>P()-Of?xb(a,0):Sf|=c);ia(a,b)}function Ui(a,b){0===b&&(0===(a.mode&1)?b=1:(b=Rd,Rd<<=1,0===(Rd&130023424)&&(Rd=4194304)));var c=Z();a=Oa(a,b);null!==a&&(ic(a,b,c),ia(a,c))}function wk(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Ui(a,c)}function Hk(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);
break;case 19:d=a.stateNode;break;default:throw Error(n(314));}null!==d&&d.delete(b);Ui(a,c)}function Ni(a,b){return xh(a,b)}function Uk(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null}function yf(a){a=
a.prototype;return!(!a||!a.isReactComponent)}function Vk(a){if("function"===typeof a)return yf(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===ie)return 11;if(a===je)return 14}return 2}function gb(a,b){var c=a.alternate;null===c?(c=pa(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=
a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}function wd(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)yf(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case Bb:return ub(c.children,e,f,b);case fe:g=8;e|=8;break;case ee:return a=pa(12,c,b,e|2),a.elementType=ee,a.lanes=f,a;case ge:return a=
pa(13,c,b,e),a.elementType=ge,a.lanes=f,a;case he:return a=pa(19,c,b,e),a.elementType=he,a.lanes=f,a;case Vi:return Gd(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case hg:g=10;break a;case gg:g=9;break a;case ie:g=11;break a;case je:g=14;break a;case Ta:g=16;d=null;break a}throw Error(n(130,null==a?a:typeof a,""));}b=pa(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function ub(a,b,c,d){a=pa(7,a,d,b);a.lanes=c;return a}function Gd(a,b,c,d){a=pa(22,a,d,b);a.elementType=
Vi;a.lanes=c;a.stateNode={isHidden:!1};return a}function gf(a,b,c){a=pa(6,a,null,b);a.lanes=c;return a}function hf(a,b,c){b=pa(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}function Wk(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=
0;this.eventTimes=we(0);this.expirationTimes=we(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=we(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=null}function Vf(a,b,c,d,e,f,g,h,k,m){a=new Wk(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=pa(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,
pendingSuspenseBoundaries:null};df(f);return a}function Xk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Cb,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}function Wi(a){if(!a)return cb;a=a._reactInternals;a:{if(ob(a)!==a||1!==a.tag)throw Error(n(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(ea(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);throw Error(n(171));
}if(1===a.tag){var c=a.type;if(ea(c))return uh(a,c,b)}return b}function Xi(a,b,c,d,e,f,g,h,k,m){a=Vf(c,d,!0,a,e,f,g,h,k);a.context=Wi(null);c=a.current;d=Z();e=hb(c);f=Pa(d,e);f.callback=void 0!==b&&null!==b?b:null;eb(c,f,e);a.current.lanes=e;ic(a,e,d);ia(a,d);return a}function Sd(a,b,c,d){var e=b.current,f=Z(),g=hb(e);c=Wi(c);null===b.context?b.context=c:b.pendingContext=c;b=Pa(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=eb(e,b,g);null!==a&&(ya(a,e,g,f),sd(a,e,g));return g}
function Td(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Yi(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function Wf(a,b){Yi(a,b);(a=a.alternate)&&Yi(a,b)}function Yk(a){a=Bg(a);return null===a?null:a.stateNode}function Zk(a){return null}function Xf(a){this._internalRoot=a}function Ud(a){this._internalRoot=a}function Yf(a){return!(!a||1!==a.nodeType&&9!==
a.nodeType&&11!==a.nodeType)}function Vd(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function Zi(){}function $k(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=Td(g);f.call(a)}}var g=Xi(b,d,a,0,null,!1,!1,"",Zi);a._reactRootContainer=g;a[Ja]=g.current;sc(8===a.nodeType?a.parentNode:a);zb();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=Td(k);
h.call(a)}}var k=Vf(a,0,!1,null,null,!1,!1,"",Zi);a._reactRootContainer=k;a[Ja]=k.current;sc(8===a.nodeType?a.parentNode:a);zb(function(){Sd(b,k,c,d)});return k}function Wd(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=Td(g);h.call(a)}}Sd(b,g,a,e)}else g=$k(c,b,a,e,d);return Td(g)}var cg=new Set,$b={},Ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Zd=Object.prototype.hasOwnProperty,
dj=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,eg={},dg={},R={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){R[a]=
new Y(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];R[b]=new Y(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){R[a]=new Y(a,2,!1,a.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){R[a]=new Y(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){R[a]=
new Y(a,3,!1,a.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(a){R[a]=new Y(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){R[a]=new Y(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){R[a]=new Y(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){R[a]=new Y(a,5,!1,a.toLowerCase(),null,!1,!1)});var Zf=/[\-:]([a-z])/g,$f=function(a){return a[1].toUpperCase()};"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=
a.replace(Zf,$f);R[b]=new Y(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Zf,$f);R[b]=new Y(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Zf,$f);R[b]=new Y(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){R[a]=new Y(a,1,!1,a.toLowerCase(),null,!1,!1)});R.xlinkHref=new Y("xlinkHref",
1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){R[a]=new Y(a,1,!1,a.toLowerCase(),null,!0,!0)});var Sa=mb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xd=Symbol.for("react.element"),Cb=Symbol.for("react.portal"),Bb=Symbol.for("react.fragment"),fe=Symbol.for("react.strict_mode"),ee=Symbol.for("react.profiler"),hg=Symbol.for("react.provider"),gg=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),ge=Symbol.for("react.suspense"),
he=Symbol.for("react.suspense_list"),je=Symbol.for("react.memo"),Ta=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var Vi=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var fg=Symbol.iterator,E=Object.assign,ae,ce=!1,cc=Array.isArray,Xd,zi=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,
c,d,e)})}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else{Xd=Xd||document.createElement("div");Xd.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=Xd.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}}),Fc=function(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b},dc={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,
borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,
strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},al=["Webkit","ms","Moz","O"];Object.keys(dc).forEach(function(a){al.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);dc[b]=dc[a]})});var jj=E({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}),ze=null,se=null,Eb=null,Fb=null,xg=function(a,b){return a(b)},yg=function(){},te=!1,Oe=!1;if(Ia)try{var Lc={};Object.defineProperty(Lc,
"passive",{get:function(){Oe=!0}});window.addEventListener("test",Lc,Lc);window.removeEventListener("test",Lc,Lc)}catch(a){Oe=!1}var lj=function(a,b,c,d,e,f,g,h,k){var m=Array.prototype.slice.call(arguments,3);try{b.apply(c,m)}catch(t){this.onError(t)}},gc=!1,Sc=null,Tc=!1,ue=null,mj={onError:function(a){gc=!0;Sc=a}},Ba=mb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler,Jg=Ba.unstable_scheduleCallback,Kg=Ba.unstable_NormalPriority,xh=Jg,Li=Ba.unstable_cancelCallback,Qk=Ba.unstable_shouldYield,
Tk=Ba.unstable_requestPaint,P=Ba.unstable_now,Ej=Ba.unstable_getCurrentPriorityLevel,De=Ba.unstable_ImmediatePriority,Mg=Ba.unstable_UserBlockingPriority,ad=Kg,Fj=Ba.unstable_LowPriority,Ng=Ba.unstable_IdlePriority,Uc=null,Ca=null,ta=Math.clz32?Math.clz32:qj,rj=Math.log,sj=Math.LN2,Wc=64,Rd=4194304,z=0,Ae=!1,Yc=[],Va=null,Wa=null,Xa=null,jc=new Map,kc=new Map,Ya=[],Cj="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" "),
Gb=Sa.ReactCurrentBatchConfig,Zc=!0,$c=null,Za=null,Ee=null,bd=null,Yb={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},He=ka(Yb),Mc=E({},Yb,{view:0,detail:0}),bk=ka(Mc),ag,bg,Nc,Yd=E({},Mc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fe,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:
a.relatedTarget},movementX:function(a){if("movementX"in a)return a.movementX;a!==Nc&&(Nc&&"mousemove"===a.type?(ag=a.screenX-Nc.screenX,bg=a.screenY-Nc.screenY):bg=ag=0,Nc=a);return ag},movementY:function(a){return"movementY"in a?a.movementY:bg}}),ih=ka(Yd),bl=E({},Yd,{dataTransfer:0}),Xj=ka(bl),cl=E({},Mc,{relatedTarget:0}),Pe=ka(cl),dl=E({},Yb,{animationName:0,elapsedTime:0,pseudoElement:0}),Zj=ka(dl),el=E({},Yb,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),
dk=ka(el),fl=E({},Yb,{data:0}),qh=ka(fl),gk=qh,gl={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hl={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",
112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hj={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},il=E({},Mc,{key:function(a){if(a.key){var b=gl[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=cd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?hl[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,
metaKey:0,repeat:0,locale:0,getModifierState:Fe,charCode:function(a){return"keypress"===a.type?cd(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?cd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Wj=ka(il),jl=E({},Yd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nh=ka(jl),kl=E({},Mc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,
ctrlKey:0,shiftKey:0,getModifierState:Fe}),Yj=ka(kl),ll=E({},Yb,{propertyName:0,elapsedTime:0,pseudoElement:0}),ak=ka(ll),ml=E({},Yd,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),ck=ka(ml),Ij=[9,13,27,32],Ge=Ia&&"CompositionEvent"in window,Oc=null;Ia&&"documentMode"in document&&(Oc=document.documentMode);var fk=Ia&&"TextEvent"in
window&&!Oc,Ug=Ia&&(!Ge||Oc&&8<Oc&&11>=Oc),Tg=String.fromCharCode(32),Sg=!1,Hb=!1,Lj={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},oc=null,pc=null,ph=!1;Ia&&(ph=Mj("input")&&(!document.documentMode||9<document.documentMode));var ua="function"===typeof Object.is?Object.is:Tj,ek=Ia&&"documentMode"in document&&11>=document.documentMode,Jb=null,Ke=null,rc=null,Je=!1,Kb={animationend:gd("Animation","AnimationEnd"),
animationiteration:gd("Animation","AnimationIteration"),animationstart:gd("Animation","AnimationStart"),transitionend:gd("Transition","TransitionEnd")},Le={},eh={};Ia&&(eh=document.createElement("div").style,"AnimationEvent"in window||(delete Kb.animationend.animation,delete Kb.animationiteration.animation,delete Kb.animationstart.animation),"TransitionEvent"in window||delete Kb.transitionend.transition);var jh=hd("animationend"),kh=hd("animationiteration"),lh=hd("animationstart"),mh=hd("transitionend"),
fh=new Map,$i="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
(function(){for(var a=0;a<$i.length;a++){var b=$i[a],c=b.toLowerCase();b=b[0].toUpperCase()+b.slice(1);$a(c,"on"+b)}$a(jh,"onAnimationEnd");$a(kh,"onAnimationIteration");$a(lh,"onAnimationStart");$a("dblclick","onDoubleClick");$a("focusin","onFocus");$a("focusout","onBlur");$a(mh,"onTransitionEnd")})();Ab("onMouseEnter",["mouseout","mouseover"]);Ab("onMouseLeave",["mouseout","mouseover"]);Ab("onPointerEnter",["pointerout","pointerover"]);Ab("onPointerLeave",["pointerout","pointerover"]);nb("onChange",
"change click focusin focusout input keydown keyup selectionchange".split(" "));nb("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));nb("onBeforeInput",["compositionend","keypress","textInput","paste"]);nb("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));nb("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));nb("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ec="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vj=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ec)),id="_reactListening"+Math.random().toString(36).slice(2),hk=/\r\n?/g,ik=/\u0000|\uFFFD/g,Jf=null,Kf=null,Rf="function"===typeof setTimeout?setTimeout:void 0,Ok="function"===typeof clearTimeout?
clearTimeout:void 0,aj="function"===typeof Promise?Promise:void 0,Kk="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof aj?function(a){return aj.resolve(null).then(a).catch(jk)}:Rf,Zb=Math.random().toString(36).slice(2),Da="__reactFiber$"+Zb,uc="__reactProps$"+Zb,Ja="__reactContainer$"+Zb,Me="__reactEvents$"+Zb,Ek="__reactListeners$"+Zb,Fk="__reactHandles$"+Zb,Se=[],Mb=-1,cb={},J=bb(cb),S=bb(!1),qb=cb,La=null,md=!1,Te=!1,Ob=[],Pb=0,od=null,nd=0,na=[],oa=0,sb=null,Ma=1,Na="",la=
null,fa=null,D=!1,wa=null,Jk=Sa.ReactCurrentBatchConfig,rd=bb(null),qd=null,Rb=null,$e=null,tb=null,lk=Oa,fb=!1,Jh=(new mb.Component).refs,ud={isMounted:function(a){return(a=a._reactInternals)?ob(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=Z(),e=hb(a),f=Pa(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=eb(a,f,e);null!==b&&(ya(b,a,e,d),sd(b,a,e))},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=Z(),e=hb(a),f=Pa(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==
c&&(f.callback=c);b=eb(a,f,e);null!==b&&(ya(b,a,e,d),sd(b,a,e))},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=Z(),d=hb(a),e=Pa(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=eb(a,e,d);null!==b&&(ya(b,a,d,c),sd(b,a,d))}},Vb=Lh(!0),mi=Lh(!1),wc={},Ea=bb(wc),yc=bb(wc),xc=bb(wc),G=bb(0),mf=[],zd=Sa.ReactCurrentDispatcher,uf=Sa.ReactCurrentBatchConfig,wb=0,C=null,K=null,N=null,Bd=!1,zc=!1,Ac=0,nl=0,Ad={readContext:qa,useCallback:V,useContext:V,useEffect:V,useImperativeHandle:V,useInsertionEffect:V,
useLayoutEffect:V,useMemo:V,useReducer:V,useRef:V,useState:V,useDebugValue:V,useDeferredValue:V,useTransition:V,useMutableSource:V,useSyncExternalStore:V,useId:V,unstable_isNewReconciler:!1},mk={readContext:qa,useCallback:function(a,b){Fa().memoizedState=[a,void 0===b?null:b];return a},useContext:qa,useEffect:Wh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Cd(4194308,4,Zh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Cd(4194308,4,a,b)},useInsertionEffect:function(a,
b){return Cd(4,2,a,b)},useMemo:function(a,b){var c=Fa();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Fa();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=rk.bind(null,C,a);return[d.memoizedState,a]},useRef:function(a){var b=Fa();a={current:a};return b.memoizedState=a},useState:Uh,useDebugValue:tf,useDeferredValue:function(a){return Fa().memoizedState=
a},useTransition:function(){var a=Uh(!1),b=a[0];a=qk.bind(null,a[1]);Fa().memoizedState=a;return[b,a]},useMutableSource:function(a,b,c){},useSyncExternalStore:function(a,b,c){var d=C,e=Fa();if(D){if(void 0===c)throw Error(n(407));c=c()}else{c=b();if(null===O)throw Error(n(349));0!==(wb&30)||Rh(d,b,c)}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;Wh(Ph.bind(null,d,f,a),[a]);d.flags|=2048;Cc(9,Qh.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=Fa(),b=O.identifierPrefix;
if(D){var c=Na;var d=Ma;c=(d&~(1<<32-ta(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Ac++;0<c&&(b+="H"+c.toString(32));b+=":"}else c=nl++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},nk={readContext:qa,useCallback:ai,useContext:qa,useEffect:sf,useImperativeHandle:$h,useInsertionEffect:Xh,useLayoutEffect:Yh,useMemo:bi,useReducer:qf,useRef:Vh,useState:function(a){return qf(Bc)},useDebugValue:tf,useDeferredValue:function(a){var b=sa();return ci(b,K.memoizedState,a)},
useTransition:function(){var a=qf(Bc)[0],b=sa().memoizedState;return[a,b]},useMutableSource:Nh,useSyncExternalStore:Oh,useId:di,unstable_isNewReconciler:!1},ok={readContext:qa,useCallback:ai,useContext:qa,useEffect:sf,useImperativeHandle:$h,useInsertionEffect:Xh,useLayoutEffect:Yh,useMemo:bi,useReducer:rf,useRef:Vh,useState:function(a){return rf(Bc)},useDebugValue:tf,useDeferredValue:function(a){var b=sa();return null===K?b.memoizedState=a:ci(b,K.memoizedState,a)},useTransition:function(){var a=rf(Bc)[0],
b=sa().memoizedState;return[a,b]},useMutableSource:Nh,useSyncExternalStore:Oh,useId:di,unstable_isNewReconciler:!1},sk="function"===typeof WeakMap?WeakMap:Map,uk=Sa.ReactCurrentOwner,ha=!1,Cf={dehydrated:null,treeContext:null,retryLane:0};var Ak=function(a,b,c,d){for(c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=
c.return;c=c.sibling}};var yi=function(a,b){};var zk=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){a=b.stateNode;vb(Ea.current);e=null;switch(c){case "input":f=ke(a,f);d=ke(a,d);e=[];break;case "select":f=E({},f,{value:void 0});d=E({},d,{value:void 0});e=[];break;case "textarea":f=ne(a,f);d=ne(a,d);e=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(a.onclick=kd)}pe(c,d);var g;c=null;for(m in f)if(!d.hasOwnProperty(m)&&f.hasOwnProperty(m)&&null!=f[m])if("style"===
m){var h=f[m];for(g in h)h.hasOwnProperty(g)&&(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==m&&"children"!==m&&"suppressContentEditableWarning"!==m&&"suppressHydrationWarning"!==m&&"autoFocus"!==m&&($b.hasOwnProperty(m)?e||(e=[]):(e=e||[]).push(m,null));for(m in d){var k=d[m];h=null!=f?f[m]:void 0;if(d.hasOwnProperty(m)&&k!==h&&(null!=k||null!=h))if("style"===m)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||
(c={}),c[g]=k[g])}else c||(e||(e=[]),e.push(m,c)),c=k;else"dangerouslySetInnerHTML"===m?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(e=e||[]).push(m,k)):"children"===m?"string"!==typeof k&&"number"!==typeof k||(e=e||[]).push(m,""+k):"suppressContentEditableWarning"!==m&&"suppressHydrationWarning"!==m&&($b.hasOwnProperty(m)?(null!=k&&"onScroll"===m&&B("scroll",a),e||h===k||(e=[])):(e=e||[]).push(m,k))}c&&(e=e||[]).push("style",c);var m=e;if(b.updateQueue=m)b.flags|=4}};var Bk=function(a,
b,c,d){c!==d&&(b.flags|=4)};var Jd=!1,X=!1,Gk="function"===typeof WeakSet?WeakSet:Set,l=null,Ai=!1,T=null,za=!1,Nk=Math.ceil,Od=Sa.ReactCurrentDispatcher,Uf=Sa.ReactCurrentOwner,ca=Sa.ReactCurrentBatchConfig,p=0,O=null,I=null,U=0,ba=0,Ga=bb(0),L=0,Jc=null,ra=0,Md=0,Sf=0,Kc=null,ja=null,Of=0,Hf=Infinity,Ra=null,Ed=!1,xf=null,ib=null,Pd=!1,lb=null,Qd=0,Ic=0,Pf=null,Kd=-1,Ld=0;var Rk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||S.current)ha=!0;else{if(0===(a.lanes&c)&&0===(b.flags&
128))return ha=!1,xk(a,b,c);ha=0!==(a.flags&131072)?!0:!1}else ha=!1,D&&0!==(b.flags&1048576)&&yh(b,nd,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;Fd(a,b);a=b.pendingProps;var e=Nb(b,J.current);Sb(b,c);e=of(null,b,d,a,e,c);var f=pf();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=null,ea(d)?(f=!0,ld(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,df(b),e.updater=ud,b.stateNode=
e,e._reactInternals=b,ff(b,d,a,c),b=Af(null,b,d,!0,f,c)):(b.tag=0,D&&f&&Ue(b),aa(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{Fd(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=Vk(d);a=xa(d,a);switch(e){case 0:b=zf(null,b,d,a,c);break a;case 1:b=si(null,b,d,a,c);break a;case 11:b=ni(null,b,d,a,c);break a;case 14:b=oi(null,b,d,xa(d.type,a),c);break a}throw Error(n(306,d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:xa(d,e),zf(a,b,d,e,c);
case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:xa(d,e),si(a,b,d,e,c);case 3:a:{ti(b);if(null===a)throw Error(n(387));d=b.pendingProps;f=b.memoizedState;e=f.element;Dh(a,b);td(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=f,b.memoizedState=f,b.flags&256){e=Ub(Error(n(423)),b);b=ui(a,b,d,c,e);break a}else if(d!==e){e=
Ub(Error(n(424)),b);b=ui(a,b,d,c,e);break a}else for(fa=Ka(b.stateNode.containerInfo.firstChild),la=b,D=!0,wa=null,c=mi(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{Qb();if(d===e){b=Qa(a,b,c);break a}aa(a,b,d,c)}b=b.child}return b;case 5:return Mh(b),null===a&&Xe(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Qe(d,e)?g=null:null!==f&&Qe(d,f)&&(b.flags|=32),ri(a,b),aa(a,b,g,c),b.child;case 6:return null===a&&Xe(b),null;case 13:return vi(a,b,c);case 4:return jf(b,
b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Vb(b,null,d,c):aa(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:xa(d,e),ni(a,b,d,e,c);case 7:return aa(a,b,b.pendingProps,c),b.child;case 8:return aa(a,b,b.pendingProps.children,c),b.child;case 12:return aa(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;g=e.value;y(rd,d._currentValue);d._currentValue=g;if(null!==f)if(ua(f.value,g)){if(f.children===
e.children&&!S.current){b=Qa(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=Pa(-1,c&-c);k.tag=2;var m=f.updateQueue;if(null!==m){m=m.shared;var l=m.pending;null===l?k.next=k:(k.next=l.next,l.next=k);m.pending=k}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);bf(f.return,c,b);h.lanes|=c;break}k=k.next}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===
f.tag){g=f.return;if(null===g)throw Error(n(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);bf(g,c,b);g=f.sibling}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return}f=g}aa(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,d=b.pendingProps.children,Sb(b,c),e=qa(e),d=d(e),b.flags|=1,aa(a,b,d,c),b.child;case 14:return d=b.type,e=xa(d,b.pendingProps),e=xa(d.type,e),oi(a,b,d,e,c);case 15:return pi(a,
b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:xa(d,e),Fd(a,b),b.tag=1,ea(d)?(a=!0,ld(b)):a=!1,Sb(b,c),Hh(b,d,e),ff(b,d,e,c),Af(null,b,d,!0,a,c);case 19:return xi(a,b,c);case 22:return qi(a,b,c)}throw Error(n(156,b.tag));};var pa=function(a,b,c,d){return new Uk(a,b,c,d)},bj="function"===typeof reportError?reportError:function(a){console.error(a)};Ud.prototype.render=Xf.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(n(409));
Sd(a,b,null,null)};Ud.prototype.unmount=Xf.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;zb(function(){Sd(null,a,null,null)});b[Ja]=null}};Ud.prototype.unstable_scheduleHydration=function(a){if(a){var b=ol();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Ya.length&&0!==b&&b<Ya[c].priority;c++);Ya.splice(c,0,a);0===c&&Hg(a)}};var Dj=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=
hc(b.pendingLanes);0!==c&&(xe(b,c|1),ia(b,P()),0===(p&6)&&(Hc(),db()))}break;case 13:zb(function(){var b=Oa(a,1);if(null!==b){var c=Z();ya(b,a,1,c)}}),Wf(a,1)}};var Gg=function(a){if(13===a.tag){var b=Oa(a,134217728);if(null!==b){var c=Z();ya(b,a,134217728,c)}Wf(a,134217728)}};var yj=function(a){if(13===a.tag){var b=hb(a),c=Oa(a,b);if(null!==c){var d=Z();ya(c,a,b,d)}Wf(a,b)}};var ol=function(){return z};var xj=function(a,b){var c=z;try{return z=a,b()}finally{z=c}};se=function(a,b,c){switch(b){case "input":le(a,
c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Rc(d);if(!e)throw Error(n(90));jg(d);le(d,e)}}}break;case "textarea":og(a,c);break;case "select":b=c.value,null!=b&&Db(a,!!c.multiple,b,!1)}};(function(a,b,c){xg=a;yg=c})(Tf,function(a,b,c,d,e){var f=z,g=ca.transition;try{return ca.transition=null,z=1,a(b,c,d,e)}finally{z=f,ca.transition=
g,0===p&&Hc()}},zb);var pl={usingClientEntryPoint:!1,Events:[ec,Ib,Rc,ug,vg,Tf]};(function(a){a={bundleType:a.bundleType,version:a.version,rendererPackageName:a.rendererPackageName,rendererConfig:a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sa.ReactCurrentDispatcher,findHostInstanceByFiber:Yk,
findFiberByHostInstance:a.findFiberByHostInstance||Zk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0"};if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)a=!1;else{var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)a=!0;else{try{Uc=b.inject(a),Ca=b}catch(c){}a=b.checkDCE?!0:!1}}return a})({findFiberByHostInstance:pb,bundleType:0,version:"18.2.0-next-9e3b772b8-20220608",
rendererPackageName:"react-dom"});Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pl;Q.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Yf(b))throw Error(n(200));return Xk(a,b,null,c)};Q.createRoot=function(a,b){if(!Yf(a))throw Error(n(299));var c=!1,d="",e=bj;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=Vf(a,1,!1,null,null,
c,!1,d,e);a[Ja]=b.current;sc(8===a.nodeType?a.parentNode:a);return new Xf(b)};Q.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(n(188));a=Object.keys(a).join(",");throw Error(n(268,a));}a=Bg(b);a=null===a?null:a.stateNode;return a};Q.flushSync=function(a){return zb(a)};Q.hydrate=function(a,b,c){if(!Vd(b))throw Error(n(200));return Wd(null,a,b,!0,c)};Q.hydrateRoot=function(a,b,c){if(!Yf(a))throw Error(n(405));
var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=bj;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=Xi(b,null,a,1,null!=c?c:null,e,!1,f,g);a[Ja]=b.current;sc(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,e);return new Ud(b)};Q.render=
function(a,b,c){if(!Vd(b))throw Error(n(200));return Wd(null,a,b,!1,c)};Q.unmountComponentAtNode=function(a){if(!Vd(a))throw Error(n(40));return a._reactRootContainer?(zb(function(){Wd(null,null,a,!1,function(){a._reactRootContainer=null;a[Ja]=null})}),!0):!1};Q.unstable_batchedUpdates=Tf;Q.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!Vd(c))throw Error(n(200));if(null==a||void 0===a._reactInternals)throw Error(n(38));return Wd(a,b,c,!1,d)};Q.version="18.2.0-next-9e3b772b8-20220608"});
})();


/* Tradexy App */
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const { useState, useMemo, useEffect, useRef, useCallback, memo, Component } = React;
class ErrorBoundary extends Component {
  constructor(p) {
    super(p);
    this.state = { err: false, msg: "" };
  }
  static getDerivedStateFromError(e) {
    return { err: true, msg: (e == null ? void 0 : e.message) || "" };
  }
  render() {
    if (this.state.err) return /* @__PURE__ */ React.createElement("div", { style: { minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#f7f8fa", fontFamily: "'Inter',sans-serif" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 48, marginBottom: 16 } }, "\u26A0\uFE0F"), /* @__PURE__ */ React.createElement("h2", { style: { fontSize: 18, fontWeight: 600, marginBottom: 8 } }, "Something went wrong"), /* @__PURE__ */ React.createElement("p", { style: { color: "#3d4a5c", marginBottom: 20, fontSize: 14, maxWidth: 340, textAlign: "center", lineHeight: 1.7 } }, this.state.msg || "An unexpected error occurred."), /* @__PURE__ */ React.createElement("button", { onClick: () => this.setState({ err: false }), style: { background: "#c8983a", color: "#fff", border: "none", borderRadius: 10, padding: "11px 28px", fontSize: 14, fontWeight: 700, cursor: "pointer" } }, "Try Again"));
    return this.props.children;
  }
}
/* ============================================================
   CUSTOM INPUT MODAL COMPONENT — replaces window.prompt()
   ============================================================ */
function InputModal({ open, title, subtitle, placeholder, defaultVal, onConfirm, onClose }) {
  const [val, setVal] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    if (open) { setVal(defaultVal || ""); setTimeout(() => inputRef.current && inputRef.current.focus(), 60); }
  }, [open, defaultVal]);
  if (!open) return null;
  const submit = () => { if (val.trim()) { onConfirm(val.trim()); onClose(); } };
  const handleKey = (e) => { if (e.key === "Enter") submit(); if (e.key === "Escape") onClose(); };
  return React.createElement("div", {
    className: "custom-modal-backdrop",
    onClick: onClose
  }, React.createElement("div", {
    className: "custom-modal-box",
    onClick: (e) => e.stopPropagation()
  },
    React.createElement("div", { className: "custom-modal-title" }, title || "Add Value"),
    subtitle && React.createElement("div", { className: "custom-modal-sub" }, subtitle),
    React.createElement("input", {
      ref: inputRef,
      className: "custom-modal-input",
      placeholder: placeholder || "Enter value…",
      value: val,
      onChange: (e) => setVal(e.target.value),
      onKeyDown: handleKey
    }),
    React.createElement("div", { className: "custom-modal-btns" },
      React.createElement("button", { className: "custom-modal-cancel", onClick: onClose }, "Cancel"),
      React.createElement("button", { className: "custom-modal-add", onClick: submit, disabled: !val.trim() }, "Add")
    )
  ));
}


/* ---- CustomDatePicker & CustomTimePicker injected by v41 ---- */

function CustomDatePicker({ value, onChange, style }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  const popRef = React.useRef(null);

  // Parse value "YYYY-MM-DD"
  const parsed = value ? new Date(value + 'T00:00:00') : new Date();
  const [viewYear, setViewYear] = React.useState(parsed.getFullYear());
  const [viewMonth, setViewMonth] = React.useState(parsed.getMonth());

  const todayStr = new Date().toISOString().slice(0,10);

  React.useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    if (open) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  function selectDay(y, m, d) {
    const mm = String(m+1).padStart(2,'0');
    const dd = String(d).padStart(2,'0');
    const s = `${y}-${mm}-${dd}`;
    onChange(s);
    setOpen(false);
  }

  function shortcut(offsetDays) {
    const d = new Date();
    d.setDate(d.getDate() + offsetDays);
    const s = d.toISOString().slice(0,10);
    onChange(s);
    setViewYear(d.getFullYear());
    setViewMonth(d.getMonth());
    setOpen(false);
  }

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y-1); }
    else setViewMonth(m => m-1);
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y+1); }
    else setViewMonth(m => m+1);
  }

  const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const DAYS = ['Su','Mo','Tu','We','Th','Fr','Sa'];

  function buildCalendar() {
    const first = new Date(viewYear, viewMonth, 1).getDay();
    const daysInMonth = new Date(viewYear, viewMonth+1, 0).getDate();
    const daysInPrev = new Date(viewYear, viewMonth, 0).getDate();
    const cells = [];
    for (let i = first-1; i >= 0; i--) cells.push({ day: daysInPrev-i, month: viewMonth-1, year: viewMonth === 0 ? viewYear-1 : viewYear, other: true });
    for (let i = 1; i <= daysInMonth; i++) cells.push({ day: i, month: viewMonth, year: viewYear, other: false });
    while (cells.length < 42) {
      const last = cells.length - daysInMonth - first + 1;
      cells.push({ day: last, month: viewMonth+1, year: viewMonth === 11 ? viewYear+1 : viewYear, other: true });
    }
    return cells;
  }

  const cells = buildCalendar();
  const dispVal = value ? value.split('-').reverse().join('/') : 'Pick date';

  return React.createElement('div', { ref, style: { position: 'relative', display: 'inline-block', ...(style||{}) } },
    React.createElement('div', {
      className: 'dtp-trigger' + (open ? ' dtp-open' : ''),
      onClick: () => setOpen(o => !o)
    },
      React.createElement('svg', { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2 },
        React.createElement('rect', { x: 3, y: 4, width: 18, height: 18, rx: 2 }),
        React.createElement('line', { x1: 16, y1: 2, x2: 16, y2: 6 }),
        React.createElement('line', { x1: 8, y1: 2, x2: 8, y2: 6 }),
        React.createElement('line', { x1: 3, y1: 10, x2: 21, y2: 10 })
      ),
      React.createElement('span', null, dispVal)
    ),
    open && React.createElement('div', { ref: popRef, className: 'dtp-popup', style: { left: 0, top: '100%' } },
      React.createElement('div', { className: 'dtp-shortcuts' },
        React.createElement('button', { className: 'dtp-sc-btn' + (value === todayStr ? ' active' : ''), onClick: () => shortcut(0) }, 'Today'),
        React.createElement('button', { className: 'dtp-sc-btn', onClick: () => shortcut(-1) }, 'Yesterday'),
        React.createElement('button', { className: 'dtp-sc-btn', onClick: () => shortcut(1) }, 'Tomorrow')
      ),
      React.createElement('div', { className: 'dtp-cal-header' },
        React.createElement('button', { className: 'dtp-cal-nav', onClick: prevMonth }, '‹'),
        React.createElement('span', null, MONTHS[viewMonth] + ' ' + viewYear),
        React.createElement('button', { className: 'dtp-cal-nav', onClick: nextMonth }, '›')
      ),
      React.createElement('div', { className: 'dtp-dow-row' },
        DAYS.map(d => React.createElement('span', { key: d }, d))
      ),
      React.createElement('div', { className: 'dtp-day-grid' },
        cells.map((c, i) => {
          const mm = String(c.month+1).padStart(2,'0');
          const dd = String(c.day).padStart(2,'0');
          const s = `${c.year}-${mm}-${dd}`;
          const isSel = s === value;
          const isToday = s === todayStr;
          return React.createElement('div', {
            key: i,
            className: 'dtp-day' + (c.other ? ' dtp-other-month' : '') + (isSel ? ' dtp-selected' : '') + (isToday && !isSel ? ' dtp-today' : ''),
            onClick: () => selectDay(c.year, c.month, c.day)
          }, c.day);
        })
      )
    )
  );
}

function CustomTimePicker({ value, onChange, style }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);

  // Persist 12/24hr mode preference
  const [is12hr, setIs12hr] = React.useState(() => {
    try { return localStorage.getItem('tj5_time12hr') === '1'; } catch(e) { return false; }
  });

  // value is "HH:MM" or "HH:MM:SS" — always stored in 24hr internally
  const parts = (value || '09:00').split(':');
  const [h, setH] = React.useState(parseInt(parts[0]||'9', 10));
  const [m, setM] = React.useState(parseInt(parts[1]||'0', 10));
  // ampm derived from h
  const [ampm, setAmpm] = React.useState(parseInt(parts[0]||'9', 10) < 12 ? 'AM' : 'PM');

  React.useEffect(() => {
    const p = (value || '09:00').split(':');
    const hh = parseInt(p[0]||'9', 10);
    setH(hh);
    setM(parseInt(p[1]||'0', 10));
    setAmpm(hh < 12 ? 'AM' : 'PM');
  }, [value]);

  React.useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    if (open) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  function commit(hh, mm) {
    onChange(String(hh).padStart(2,'0') + ':' + String(mm).padStart(2,'0') + ':00');
  }

  // 24hr increment
  function incH(delta) {
    const v = ((h + delta + 24) % 24);
    setH(v);
    setAmpm(v < 12 ? 'AM' : 'PM');
    commit(v, m);
  }
  function incM(delta) { const v = ((m + delta + 60) % 60); setM(v); commit(h, v); }

  // In 12hr mode, hour spinner goes 1-12
  function incH12(delta) {
    // current display hour (1-12)
    const disp = h === 0 ? 12 : h > 12 ? h - 12 : h;
    const newDisp = ((disp - 1 + delta + 12) % 12) + 1; // 1-12
    // convert back to 24hr
    let newH24;
    if (ampm === 'AM') {
      newH24 = newDisp === 12 ? 0 : newDisp;
    } else {
      newH24 = newDisp === 12 ? 12 : newDisp + 12;
    }
    setH(newH24);
    commit(newH24, m);
  }

  function toggleAmpm() {
    const newAmpm = ampm === 'AM' ? 'PM' : 'AM';
    setAmpm(newAmpm);
    let newH;
    if (newAmpm === 'PM') {
      newH = h < 12 ? h + 12 : h;
    } else {
      newH = h >= 12 ? h - 12 : h;
    }
    setH(newH);
    commit(newH, m);
  }

  function toggleMode() {
    const next = !is12hr;
    setIs12hr(next);
    try { localStorage.setItem('tj5_time12hr', next ? '1' : '0'); } catch(e) {}
  }

  // Display values
  const dispH24 = String(h).padStart(2,'0');
  const dispH12 = (() => { const d = h === 0 ? 12 : h > 12 ? h - 12 : h; return String(d).padStart(2,'0'); })();
  const dispM = String(m).padStart(2,'0');
  const dispVal = is12hr ? `${dispH12}:${dispM} ${ampm}` : `${dispH24}:${dispM}`;

  return React.createElement('div', { ref, style: { position: 'relative', display: 'inline-block', ...(style||{}) } },
    React.createElement('div', {
      className: 'dtp-trigger' + (open ? ' dtp-open' : ''),
      onClick: () => setOpen(o => !o)
    },
      React.createElement('svg', { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2 },
        React.createElement('circle', { cx: 12, cy: 12, r: 10 }),
        React.createElement('polyline', { points: '12 6 12 12 16 14' })
      ),
      React.createElement('span', null, dispVal)
    ),
    open && React.createElement('div', { className: 'dtp-popup', style: { left: 0, top: '100%', minWidth: 'auto' } },
      // Header row: title + 12/24hr toggle
      React.createElement('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 } },
        React.createElement('div', { style: { fontSize: 11, fontWeight: 700, color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: '.04em' } }, 'Entry Time'),
        // 12hr / 24hr pill toggle
        React.createElement('div', { style: { display: 'flex', background: 'var(--s3)', borderRadius: 8, padding: 2, gap: 2 } },
          React.createElement('button', {
            onClick: () => { if (is12hr) toggleMode(); },
            style: { padding: '3px 8px', borderRadius: 6, border: 'none', fontSize: 10, fontWeight: 700, cursor: 'pointer',
              background: !is12hr ? 'var(--acc)' : 'transparent',
              color: !is12hr ? '#fff' : 'var(--t3)', transition: 'all .15s' }
          }, '24H'),
          React.createElement('button', {
            onClick: () => { if (!is12hr) toggleMode(); },
            style: { padding: '3px 8px', borderRadius: 6, border: 'none', fontSize: 10, fontWeight: 700, cursor: 'pointer',
              background: is12hr ? 'var(--acc)' : 'transparent',
              color: is12hr ? '#fff' : 'var(--t3)', transition: 'all .15s' }
          }, '12H')
        )
      ),
      React.createElement('div', { className: 'dtp-time-wrap' },
        // Hour column
        React.createElement('div', { className: 'dtp-time-col' },
          React.createElement('div', { className: 'dtp-time-label' }, 'Hour'),
          React.createElement('div', { className: 'dtp-time-spin' },
            React.createElement('button', { onClick: () => is12hr ? incH12(1) : incH(1) }, '▲'),
            React.createElement('div', { className: 'dtp-time-val' }, is12hr ? dispH12 : dispH24),
            React.createElement('button', { onClick: () => is12hr ? incH12(-1) : incH(-1) }, '▼')
          )
        ),
        React.createElement('div', { className: 'dtp-sep' }, ':'),
        // Minute column
        React.createElement('div', { className: 'dtp-time-col' },
          React.createElement('div', { className: 'dtp-time-label' }, 'Min'),
          React.createElement('div', { className: 'dtp-time-spin' },
            React.createElement('button', { onClick: () => incM(5) }, '▲'),
            React.createElement('div', { className: 'dtp-time-val' }, dispM),
            React.createElement('button', { onClick: () => incM(-5) }, '▼')
          )
        ),
        // AM/PM column — only in 12hr mode
        is12hr && React.createElement(React.Fragment, null,
          React.createElement('div', { style: { width: 6 } }),
          React.createElement('div', { className: 'dtp-time-col' },
            React.createElement('div', { className: 'dtp-time-label' }, 'Period'),
            React.createElement('div', { className: 'dtp-time-spin', style: { cursor: 'pointer' } },
              React.createElement('button', { onClick: toggleAmpm }, '▲'),
              React.createElement('div', { className: 'dtp-time-val', style: { fontSize: 13, fontWeight: 800, color: 'var(--accD)', width: 44 } }, ampm),
              React.createElement('button', { onClick: toggleAmpm }, '▼')
            )
          )
        )
      ),
      React.createElement('button', { className: 'dtp-confirm', onClick: () => setOpen(false) }, '✓ Set ' + dispVal)
    )
  );
}

const API_URL = "https://api.tradexy.online";
const SDB = {
  _db: null,
  _N: "TJScreenshots",
  _S: "shots",
  async open() {
    if (this._db) return this._db;
    return new Promise((res, rej) => {
      const r = indexedDB.open(this._N, 1);
      r.onupgradeneeded = (e) => e.target.result.createObjectStore(this._S);
      r.onsuccess = (e) => {
        this._db = e.target.result;
        res(this._db);
      };
      r.onerror = () => rej(r.error);
    });
  },
  async save(id, url) {
    const db = await this.open();
    return new Promise((res, rej) => {
      const tx = db.transaction(this._S, "readwrite");
      tx.objectStore(this._S).put(url, String(id));
      tx.oncomplete = () => res();
      tx.onerror = () => rej(tx.error);
    });
  },
  async get(id) {
    const db = await this.open();
    return new Promise((res, rej) => {
      const tx = db.transaction(this._S, "readonly");
      const r = tx.objectStore(this._S).get(String(id));
      r.onsuccess = () => res(r.result || null);
      r.onerror = () => rej(r.error);
    });
  },
  async remove(id) {
    const db = await this.open();
    return new Promise((res, rej) => {
      const tx = db.transaction(this._S, "readwrite");
      tx.objectStore(this._S).delete(String(id));
      tx.oncomplete = () => res();
      tx.onerror = () => rej(tx.error);
    });
  },
  async compress(id, file, maxW = 900) {
    return new Promise((res, rej) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const c = document.createElement("canvas");
          const sc = Math.min(1, maxW / img.width);
          c.width = img.width * sc;
          c.height = img.height * sc;
          c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
          const d = c.toDataURL("image/webp", 0.78);
          this.save(id, d).then(() => res(d)).catch(rej);
        };
        img.onerror = rej;
        img.src = e.target.result;
      };
      reader.onerror = rej;
      reader.readAsDataURL(file);
    });
  },
  // --- Multi-screenshot support ---
  // Stored value at key=id is either a legacy string (single img) or an Array<string> (multi)
  async getAll(id) {
    const v = await this.get(id);
    if (v == null) return [];
    return Array.isArray(v) ? v : [v];
  },
  async saveAll(id, arr) {
    const db = await this.open();
    return new Promise((res, rej) => {
      const tx = db.transaction(this._S, "readwrite");
      tx.objectStore(this._S).put(Array.isArray(arr) ? arr : [arr], String(id));
      tx.oncomplete = () => res();
      tx.onerror = () => rej(tx.error);
    });
  },
  async compressToBlob(file, maxW = 900) {
    return new Promise((res, rej) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const c = document.createElement("canvas");
          const sc = Math.min(1, maxW / img.width);
          c.width = img.width * sc;
          c.height = img.height * sc;
          c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
          res(c.toDataURL("image/webp", 0.78));
        };
        img.onerror = rej;
        img.src = e.target.result;
      };
      reader.onerror = rej;
      reader.readAsDataURL(file);
    });
  },
  async appendOne(id, file) {
    const existing = await this.getAll(id);
    const dataUrl = await this.compressToBlob(file);
    const next = [...existing, dataUrl];
    await this.saveAll(id, next);
    return next;
  },
  async appendMany(id, files) {
    const existing = await this.getAll(id);
    const added = [];
    for (const f of files) {
      try { added.push(await this.compressToBlob(f)); }
      catch(e) { console.error("[TJ] compress failed for file:", e); }
    }
    const next = [...existing, ...added];
    await this.saveAll(id, next);
    return next;
  },
  async replaceAt(id, index, file) {
    const existing = await this.getAll(id);
    const dataUrl = await this.compressToBlob(file);
    const next = existing.slice();
    next[index] = dataUrl;
    await this.saveAll(id, next);
    return next;
  },
  async removeAt(id, index) {
    const existing = await this.getAll(id);
    const next = existing.filter((_, i) => i !== index);
    if (next.length === 0) { await this.remove(id); return []; }
    await this.saveAll(id, next);
    return next;
  }
};
const CONFLUENCES = ["Break of Structure", "Fair Value Gap", "Order Block", "Liquidity Sweep", "Inducement", "Change of Character", "Market Structure Shift", "Premium/Discount", "VWAP", "EMA Confluence", "Supply/Demand Zone", "Fibonacci Level", "Session Open", "News Catalyst", "Trendline Bounce", "Divergence", "Volume Spike", "Pin Bar", "Engulfing", "Inside Bar", "Liq Sweep", "TL BO", "RTO Bullish", "V Shape", "TL BD", "4H Bullish", "IFVG", "Rejection Candle", "4H Bearish", "RTO Bearish", "NYO Rejection", "4H Flip", "S/D Zone", "1H Flip", "RTO Flip"];
const SESSIONS = ["London Open", "New York", "Out of Session", "London Mid", "Asia"];
const MODELS = ["In Session", "Off Session", "Off Session Reversal", "In Session Reversal", "SMC (Smart Money)", "ICT Concepts", "Price Action", "Scalping", "Swing Trade", "Trend Following", "Counter Trend", "Breakout", "Reversal", "Range", "Momentum", "VWAP Strategy", "News Play"];
const EMOTIONS_B = ["Calm & Focused", "Confident", "Neutral", "Slightly Anxious", "FOMO", "Greedy", "Fearful", "Overconfident", "Tired/Unfocused", "Excited", "Impatient", "Revenge Mindset", "Bored", "Stressed", "Doubtful", "Impulsive", "Motivated", "Distracted", "Sharp & Alert", "Patient", "Reckless", "Hesitant"];
const EMOTIONS_A = ["Satisfied", "Disciplined", "Neutral", "Slightly Regretful", "Regretful", "Euphoric", "Frustrated", "Angry", "Relieved", "Disappointed", "Proud", "Lesson Learned", "Calm", "Energized", "Burned Out", "Motivated", "Detached", "Overthinking", "At Peace", "Confused", "Confident", "Humbled", "Sharp", "Grateful"];
const MISTAKES = ["None", "Moved Stop Loss", "Position Too Large", "Revenge Trading", "FOMO Entry", "Early Exit", "Late Entry", "No Trading Plan", "Ignored Rules", "Overtraded", "Chased Price", "Poor RR Setup", "Wrong Timeframe", "Emotional Decision", "Skipped Analysis"];
const GRADES = ["A+", "A", "B", "C", "D"];
const RR_OPTIONS = ["1:0.5", "1:1", "1:1.5", "1:2", "1:2.5", "1:3", "1:4", "1:5", "1:6+", "Custom"];
const ACC_COLS = ["#c8983a", "#2563eb", "#7c3aed", "#16a34a", "#ea580c", "#0891b2", "#ec4899"];
const fmtPct = (n, d = 2) => (n >= 0 ? "+" : "") + n.toFixed(d) + "%";
const fmtUSD = (n, plus = true) => (plus && n >= 0 ? "+" : "") + new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format(n);
const fmtK = (v) => v >= 1e3 ? (v / 1e3).toFixed(1) + "k" : v.toFixed(0);
const fmtPrice = (n) => (n == null ? void 0 : n.toLocaleString("en-US", { maximumFractionDigits: 5 })) || "\u2014";
const tTxt = (n) => n >= 0 ? "var(--accD)" : "var(--t2)";
const tBg = (n) => n >= 0 ? "var(--accL)" : "var(--s2)";
const tBdr = (n) => n >= 0 ? "color-mix(in srgb, var(--acc) 25%, transparent)" : "var(--border)";
// ── calcPnL: single source of truth for percentage calculation ──
// Always use profit (USD) and account capital. Never use stored t.pnl.
function calcPnL(profit, capital) {
  const cap = (capital && capital > 0) ? capital : 5000;
  return (profit / cap) * 100;
}
// Kept for legacy compatibility but now just returns fallback capital
function inferCapital(trades) { return 5000; }
function deriveDir(t) {
  if (t.entryPrice && t.exitPrice && t.profit !== 0) {
    const up = t.exitPrice > t.entryPrice, win = t.profit > 0;
    if (up && win) return "Long";
    if (up && !win) return "Short";
    if (!up && win) return "Short";
    return "Long";
  }
  return t.side || "Long";
}
function useMediaQuery(q) {
  const [m, setM] = useState(() => window.matchMedia(q).matches);
  useEffect(() => {
    const mq = window.matchMedia(q);
    const h = (e) => setM(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, [q]);
  return m;
}
const BLANK_TRADE = {
  id: 0,
  symbol: "",
  entryDate: "",
  entryTime: "",
  side: "Long",
  entryPrice: 0,
  exitPrice: 0,
  pnl: 0,
  profit: 0,
  status: "Closed",
  confluences: [],
  keyLevels: [],
  session: "",
  model: "",
  emotionBefore: "",
  emotionAfter: "",
  mistakes: "",
  grade: "",
  expectedRR: "1:2",
  actualRR: "",
  notes: "",
  riskAmount: 0,
  stopLoss: 0,
  takeProfit: 0,
  accountId: "manual",
  tags: [],
  createdAt: "",
  updatedAt: ""
};
function sanitizeTrade(t) {
  if (!t || typeof t !== "object") return null;
  const s = __spreadValues(__spreadValues({}, BLANK_TRADE), t);
  s.entryPrice = Number(s.entryPrice) || 0;
  s.exitPrice = Number(s.exitPrice) || 0;
  s.pnl = Number(s.pnl) || 0;
  s.profit = Number(s.profit) || 0;
  s.riskAmount = Number(s.riskAmount) || 0;
  s.stopLoss = Number(s.stopLoss) || 0;
  s.takeProfit = Number(s.takeProfit) || 0;
  if (!Array.isArray(s.confluences)) s.confluences = [];
  if (!Array.isArray(s.keyLevels)) s.keyLevels = [];
  if (!Array.isArray(s.tags)) s.tags = [];
  if (!s.id) s.id = Date.now() + Math.random();
  if (!s.createdAt) s.createdAt = (/* @__PURE__ */ new Date()).toISOString();
  if (!s.updatedAt) s.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
  return s;
}
function sanitizeAccount(a) {
  if (!a || typeof a !== "object") return null;
  return {
    id: a.id || String(Date.now()),
    label: a.label || "My Account",
    capital: Number(a.capital) || (Boolean(a.isDemo) ? 1e4 : 0),
    isDemo: Boolean(a.isDemo),
    login: a.login || "",
    password: a.password || "",
    server: a.server || "",
    type: a.type || "demo",
    connected: Boolean(a.connected),
    lastSync: a.lastSync || null,
    info: a.info || null,
    balanceAdjustments: Array.isArray(a.balanceAdjustments) ? a.balanceAdjustments : [],
    trades: Array.isArray(a.trades) ? a.trades.map(sanitizeTrade).filter(Boolean) : []
  };
}
function loadAccounts() {
  try {
    const r = localStorage.getItem("tj5_accounts");
    if (!r) return [];
    const parsed = JSON.parse(r);
    if (!Array.isArray(parsed)) return [];
    return parsed.map(sanitizeAccount).filter(Boolean);
  } catch (e) {
    console.warn("[TJ] loadAccounts failed:", e);
    return [];
  }
}
function saveAccounts(accs) {
  try {
    if (!Array.isArray(accs)) return;
    const clean = accs.map(sanitizeAccount).filter(Boolean);
    localStorage.setItem("tj5_accounts", JSON.stringify(clean));
  } catch (e) {
    console.warn("[TJ] saveAccounts failed:", e);
  }
}
function loadTradeMeta() {
  try {
    const r = localStorage.getItem("tj5_meta");
    return r ? JSON.parse(r) : {};
  } catch (e) {
    return {};
  }
}
function saveTradeMeta(meta) {
  try {
    localStorage.setItem("tj5_meta", JSON.stringify(meta));
  } catch (e) {
  }
}
function loadTheme() {
  try {
    return localStorage.getItem("tj5_theme") || "zinc";
  } catch (e) {
    return "light";
  }
}
function loadAccent() {
  try {
    return localStorage.getItem("tj5_accent") || "indigo";
  } catch (e) {
    return "slate";
  }
}
function loadDailyLimit() {
  try {
    const r = localStorage.getItem("tj5_daily_limit");
    return r ? JSON.parse(r) : { enabled: false, maxTrades: 3, maxLoss: -2 };
  } catch (e) {
    return { enabled: false, maxTrades: 3, maxLoss: -2 };
  }
}
function saveDailyLimit(s) {
  try {
    localStorage.setItem("tj5_daily_limit", JSON.stringify(s));
  } catch (e) {
  }
}
function loadCustomLists() {
  try { const r = localStorage.getItem("tj5_custom_lists"); return r ? JSON.parse(r) : { confluences: null, sessions: null, mistakes: null, keyLevels: null }; } catch (e) { return { confluences: null, sessions: null, mistakes: null, keyLevels: null }; }
}
function saveCustomLists(lists) {
  try { localStorage.setItem("tj5_custom_lists", JSON.stringify(lists)); } catch (e) {}
}
function exportCSV(trades, capital) {
  const cap = (capital && capital > 0) ? capital : 5000;
  const headers = ["ID", "Symbol", "Date", "Time", "Side", "Entry", "Exit", "P&L%", "Net P&L $", "Session", "Model", "Grade", "Expected RR", "Actual RR", "Emotion Before", "Emotion After", "Mistakes", "Confluences", "Notes"];
  const rows = trades.map((t) => [
    t.id,
    t.symbol,
    t.entryDate,
    t.entryTime,
    t.side,
    t.entryPrice,
    t.exitPrice,
    calcPnL(t.profit, cap).toFixed(2),
    (t.profit || 0).toFixed(2),
    t.session,
    t.model,
    t.grade,
    t.expectedRR,
    t.actualRR,
    t.emotionBefore,
    t.emotionAfter,
    t.mistakes,
    (t.confluences || []).join("; "),
    `"${(t.notes || "").replace(/"/g, '""')}"`
  ]);
  const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
  a.download = `trades_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
  a.click();
}
function exportTradePDF(trades, capital) {
  const cap = (capital && capital > 0) ? capital : 5000;
  const wins = trades.filter((t) => t.profit > 0), losses = trades.filter((t) => t.profit <= 0);
  const grossUSD = trades.reduce((s, t) => s + (t.profit || 0), 0);
  const grossPct = calcPnL(grossUSD, cap);
  const wr = trades.length ? (wins.length / trades.length * 100).toFixed(1) : "0";
  const profitFactor = (() => {
    const gw = wins.reduce((s, t) => s + Math.abs(t.profit), 0);
    const gl = losses.reduce((s, t) => s + Math.abs(t.profit), 0);
    return gl ? (gw / gl).toFixed(2) : "\u221E";
  })();
  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Trade Journal Export</title>
  <style>body{font-family:system-ui,sans-serif;font-size:12px;color:#111;margin:0;padding:24px;}
  h1{font-size:20px;font-weight:700;margin:0 0 4px;}
  .sub{color:#666;font-size:11px;margin-bottom:20px;}
  .stats{display:flex;gap:16px;margin-bottom:20px;flex-wrap:wrap;}
  .stat{background:#f8f9fa;border:1px solid #e5e7eb;border-radius:8px;padding:12px 16px;min-width:120px;}
  .stat-label{font-size:9px;font-weight:600;color:#888;letter-spacing:.05em;text-transform:uppercase;margin-bottom:4px;}
  .stat-val{font-size:18px;font-weight:800;letter-spacing:-0.04em;}
  table{width:100%;border-collapse:collapse;font-size:10px;}
  th{background:#f1f5f9;padding:6px 10px;text-align:left;font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:#64748b;border-bottom:2px solid #e2e8f0;}
  td{padding:6px 10px;border-bottom:1px solid #f1f5f9;}
  tr:nth-child(even) td{background:#fafafa;}
  .win{color:#059669;font-weight:700;} .loss{color:#64748b;font-weight:700;}
  
/* ── ONBOARDING MODAL ── */
/* ── ANIMATIONS ── */
@keyframes obBackdropIn  { from{opacity:0} to{opacity:1} }
@keyframes obBackdropOut { from{opacity:1} to{opacity:0} }
@keyframes obCardIn  { from{opacity:0;transform:scale(.91) translateY(14px)} to{opacity:1;transform:scale(1) translateY(0)} }
@keyframes obCardOut { from{opacity:1;transform:scale(1) translateY(0)} to{opacity:0;transform:scale(.94) translateY(8px)} }
@keyframes obSlideInR { from{opacity:0;transform:translateX(36px)} to{opacity:1;transform:translateX(0)} }
@keyframes obSlideInL { from{opacity:0;transform:translateX(-36px)} to{opacity:1;transform:translateX(0)} }
@keyframes obFloatA   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
@keyframes obFadeUp   { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }

/* ── BACKDROP ── */
.tj-ob-backdrop {
  position: fixed; inset: 0;
  background: rgba(0,0,0,.65);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  display: flex; align-items: center; justify-content: center;
  z-index: 999999; padding: 16px;
  animation: obBackdropIn .28s ease forwards;
}
.tj-ob-backdrop.closing { animation: obBackdropOut .22s ease forwards; }

/* ── CARD ── */
.tj-ob-card {
  background: var(--surface);
  border: 1px solid var(--border2);
  border-radius: 24px;
  width: 100%; max-width: 500px;
  max-height: calc(100vh - 40px);
  overflow-y: auto;
  box-shadow: 0 40px 120px rgba(0,0,0,.35), 0 8px 32px rgba(0,0,0,.18);
  animation: obCardIn .35s cubic-bezier(.34,1.4,.64,1) forwards;
  position: relative;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}
.tj-ob-backdrop.closing .tj-ob-card { animation: obCardOut .22s ease forwards; }

/* ── PROGRESS BAR ── */
.tj-ob-progress-bar { height: 3px; background: var(--s3); }
.tj-ob-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--acc), var(--accD));
  transition: width .4s cubic-bezier(.4,0,.2,1);
  border-radius: 0 3px 3px 0;
}

/* ── BODY / SLIDES ── */
.tj-ob-body { padding: 30px 30px 0; }
.tj-ob-slide      { animation: obSlideInR .3s cubic-bezier(.4,0,.2,1) forwards; }
.tj-ob-slide.back { animation: obSlideInL .3s cubic-bezier(.4,0,.2,1) forwards; }

/* ── ILLUSTRATION BOX ── */
.tj-ob-illus {
  border-radius: 16px; background: var(--s2);
  border: 1px solid var(--border);
  height: 170px; display: flex; align-items: center; justify-content: center;
  margin-bottom: 22px; overflow: hidden; position: relative;
}

/* ── FEATURE ROWS ── */
.tj-ob-feature {
  display: flex; align-items: flex-start; gap: 13px;
  padding: 11px 13px; border-radius: 13px;
  transition: background .15s, transform .15s;
  cursor: default;
}
.tj-ob-feature:hover { background: var(--s2); transform: translateX(3px); }
.tj-ob-ficon {
  width: 38px; height: 38px; border-radius: 11px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center; font-size: 18px;
}

/* ── THEME SWATCHES ── */
.tj-ob-themes { display: grid; grid-template-columns: repeat(4,1fr); gap: 8px; margin-top: 4px; }
.tj-ob-theme-swatch {
  border-radius: 12px; padding: 10px 8px; text-align: center;
  border: 2px solid transparent; cursor: pointer;
  transition: border-color .15s, transform .12s, box-shadow .15s;
  font-size: 10px; font-weight: 600;
}
.tj-ob-theme-swatch:hover { transform: scale(1.05); box-shadow: 0 4px 16px rgba(0,0,0,.12); }
.tj-ob-theme-swatch.active {
  border-color: var(--acc);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--acc) 20%, transparent);
}
.tj-ob-swatch-dot { width: 22px; height: 22px; border-radius: 50%; margin: 0 auto 5px; }

/* ── ACCENT DOTS ── */
.tj-ob-accents { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 6px; }
.tj-ob-accent-dot {
  width: 30px; height: 30px; border-radius: 50%; cursor: pointer;
  border: 2px solid transparent;
  transition: transform .12s, box-shadow .15s, border-color .15s;
}
.tj-ob-accent-dot:hover { transform: scale(1.15); }
.tj-ob-accent-dot.active {
  border-color: var(--text);
  box-shadow: 0 0 0 3px rgba(0,0,0,.12);
}

/* ── FOOTER ── */
.tj-ob-footer {
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 30px 24px; gap: 12px;
}
.tj-ob-dots { display: flex; gap: 6px; }
.tj-ob-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--border2); transition: all .25s; cursor: pointer;
}
.tj-ob-dot.active { background: var(--acc); width: 22px; border-radius: 4px; }

/* ── BUTTONS ── */
.tj-ob-btn-sec {
  background: var(--s2); color: var(--t2);
  border: 1px solid var(--border); border-radius: 11px;
  padding: 9px 18px; font-size: 13px; font-weight: 600;
  cursor: pointer; font-family: inherit;
  transition: background .15s, border-color .15s;
}
.tj-ob-btn-sec:hover { background: var(--s3); border-color: var(--border2); }

.tj-ob-btn-pri {
  background: linear-gradient(135deg, var(--acc), var(--accD));
  color: #fff; border: none; border-radius: 11px;
  padding: 10px 22px; font-size: 13px; font-weight: 700;
  cursor: pointer; font-family: inherit;
  box-shadow: 0 4px 14px rgba(0,0,0,.18);
  transition: opacity .15s, transform .12s, box-shadow .15s;
  display: flex; align-items: center; gap: 6px;
}
.tj-ob-btn-pri:hover { opacity: .92; transform: translateY(-1px); box-shadow: 0 7px 22px rgba(0,0,0,.24); }
.tj-ob-btn-pri:active { transform: translateY(0); }
</style></head><body>
  <h1>\u{1F4CA} Trade Journal Export</h1>
  <div class="sub">Generated ${(/* @__PURE__ */ new Date()).toLocaleString()} \xB7 ${trades.length} trades</div>
  <div class="stats">
    <div class="stat"><div class="stat-label">Gross P&L</div><div class="stat-val" style="color:${grossPct >= 0 ? "#c8983a" : "#64748b"}">${grossPct >= 0 ? "+" : ""}${grossPct.toFixed(2)}%</div></div>
    <div class="stat"><div class="stat-label">Net P&L ($)</div><div class="stat-val" style="color:${grossUSD >= 0 ? "#c8983a" : "#64748b"}">${grossUSD >= 0 ? "+$" : "-$"}${Math.abs(grossUSD).toFixed(2)}</div></div>
    <div class="stat"><div class="stat-label">Win Rate</div><div class="stat-val">${wr}%</div></div>
    <div class="stat"><div class="stat-label">Total Trades</div><div class="stat-val">${trades.length}</div></div>
    <div class="stat"><div class="stat-label">Profit Factor</div><div class="stat-val">${profitFactor}</div></div>
  </div>
  <table><thead><tr><th>Date</th><th>Symbol</th><th>Side</th><th>Entry</th><th>Exit</th><th>P&L%</th><th>Net P&L $</th><th>Grade</th><th>Session</th><th>RR</th><th>Notes</th></tr></thead><tbody>
  ${trades.sort((a, b) => b.entryDate.localeCompare(a.entryDate)).map((t) => { const tPct = calcPnL(t.profit, cap); return `<tr>
    <td>${t.entryDate}</td><td><b>${t.symbol}</b></td>
    <td>${t.side}</td><td>${t.entryPrice}</td><td>${t.exitPrice || "\u2014"}</td>
    <td class="${tPct >= 0 ? "win" : "loss"}">${tPct >= 0 ? "+" : ""}${tPct.toFixed(2)}%</td>
    <td class="${t.profit >= 0 ? "win" : "loss"}">${t.profit >= 0 ? "+$" : "-$"}${Math.abs(t.profit).toFixed(2)}</td>
    <td>${t.grade || "\u2014"}</td><td>${t.session || "\u2014"}</td><td>${t.actualRR || "\u2014"}</td>
    <td style="max-width:200px;overflow:hidden;">${t.notes || ""}</td>
  </tr>`; }).join("")}
  </tbody></table></body></html>`;
  const w = window.open("", "_blank");
  w.document.write(html);
  w.document.close();
  setTimeout(() => w.print(), 400);
}
function calcStreak(trades) {
  if (!trades.length) return { current: 0, type: "none", longest: { win: 0, loss: 0 } };
  const sorted = [...trades].sort((a, b) => a.entryDate.localeCompare(b.entryDate) || a.entryTime.localeCompare(b.entryTime));
  let cur = 0, curType = "none", maxW = 0, maxL = 0, runW = 0, runL = 0;
  for (const t of sorted) {
    const w = t.profit > 0;
    if (w) {
      runW++;
      runL = 0;
      if (runW > maxW) maxW = runW;
    } else {
      runL++;
      runW = 0;
      if (runL > maxL) maxL = runL;
    }
    cur = w ? runW : -runL;
    curType = w ? "win" : "loss";
  }
  return { current: Math.abs(cur), type: curType, longest: { win: maxW, loss: maxL } };
}
function calcProfitFactor(trades) {
  const gw = trades.filter((t) => t.profit > 0).reduce((s, t) => s + t.profit, 0);
  const gl = Math.abs(trades.filter((t) => t.profit < 0).reduce((s, t) => s + t.profit, 0));
  return gl ? gw / gl : gw > 0 ? Infinity : 0;
}

// ── calcTrueBalance: account for Deposits, Withdrawals & Debt Write-offs ──
// balanceAdjustments: [{ date: "YYYY-MM-DD", writeOffAmount: number, label: string, type: string }]
//   type = "deposit"    → adds funds to balance (NOT trading profit)
//   type = "withdrawal" → removes funds from balance (NOT trading profit)
//   type = "writeoff"   → broker debt forgiveness (legacy records without type treated as writeoff)
// writeOffAmount: positive = add to balance, negative = subtract from balance
// Returns: { balance, capital, adjustedCapital, netProfit, totalDeposited, totalWithdrawn }
function calcTrueBalance(account) {
  const trades = account.trades || [];
  const adjs = (account.balanceAdjustments || []).slice().sort((a, b) => a.date.localeCompare(b.date));
  const startCapital = account.capital || 0;

  // Total trading P&L — always computed from ALL trades, never includes transfers
  const allTradeProfit = trades.reduce((s, t) => s + (t.profit || 0), 0);

  if (!adjs.length) {
    return {
      balance: startCapital + allTradeProfit,
      capital: startCapital,
      adjustedCapital: startCapital,
      netProfit: allTradeProfit,
      totalDeposited: 0,
      totalWithdrawn: 0
    };
  }

  // Walk trades and adjustments together in date order using a pointer — no double-counting.
  const sortedTrades = trades.slice().sort((a, b) => a.entryDate.localeCompare(b.entryDate));
  let runningBalance = startCapital;
  let tradeIdx = 0;
  let totalDeposited = 0;
  let totalWithdrawn = 0;
  let adjustedCapital = startCapital;

  for (const adj of adjs) {
    // 1. Add profits from all trades with entryDate STRICTLY BEFORE this adjustment date
    while (tradeIdx < sortedTrades.length && sortedTrades[tradeIdx].entryDate < adj.date) {
      runningBalance += sortedTrades[tradeIdx].profit || 0;
      tradeIdx++;
    }
    // 2. Apply the adjustment
    const amt = adj.writeOffAmount !== undefined ? adj.writeOffAmount : (adj.amount || 0);
    runningBalance += amt;
    adjustedCapital = runningBalance; // snapshot after each adjustment
    if (adj.type === 'deposit')    totalDeposited += Math.abs(amt);
    else if (adj.type === 'withdrawal') totalWithdrawn += Math.abs(amt);
  }

  // 3. Add all remaining trades (those on or after the last adjustment date)
  while (tradeIdx < sortedTrades.length) {
    runningBalance += sortedTrades[tradeIdx].profit || 0;
    tradeIdx++;
  }

  return {
    balance: runningBalance,
    capital: startCapital,
    adjustedCapital: adjustedCapital > 0 ? adjustedCapital : startCapital,
    netProfit: allTradeProfit,
    totalDeposited,
    totalWithdrawn
  };
}

function calcHourlyStats(trades) {
  const hours = Array.from({ length: 24 }, (_, h) => ({ h, n: 0, w: 0, pnl: 0, profit: 0 }));
  trades.forEach((t) => {
    const h = parseInt((t.entryTime || "00:00").split(":")[0], 10);
    if (h >= 0 && h < 24) {
      hours[h].n++;
      if (t.profit > 0) hours[h].w++;
      hours[h].profit += t.profit || 0;
    }
  });
  return hours.filter((h) => h.n > 0).map((h) => __spreadProps(__spreadValues({}, h), { wr: h.n ? h.w / h.n * 100 : 0 }));
}
function genWeeklySummary(trades, capital) {
  var _a, _b;
  const cap = (capital && capital > 0) ? capital : 5000;
  const now = /* @__PURE__ */ new Date();
  const mon = new Date(now);
  mon.setDate(now.getDate() - (now.getDay() + 6) % 7);
  mon.setHours(0, 0, 0, 0);
  const sun = new Date(mon);
  sun.setDate(mon.getDate() + 6);
  const weekStr = (d) => d.toISOString().slice(0, 10);
  const wk = trades.filter((t) => t.entryDate >= weekStr(mon) && t.entryDate <= weekStr(sun));
  if (!wk.length) return null;
  const wins = wk.filter((t) => t.profit > 0);
  const profit = wk.reduce((s, t) => s + (t.profit || 0), 0);
  const pnl = calcPnL(profit, cap);
  const wr = wk.length ? wins.length / wk.length * 100 : 0;
  const topModel = (_a = Object.entries(wk.reduce((m, t) => {
    const k = t.model || "Unknown";
    m[k] = (m[k] || 0) + 1;
    return m;
  }, {})).sort((a, b) => b[1] - a[1])[0]) == null ? void 0 : _a[0];
  const topMistake = (_b = Object.entries(wk.filter((t) => t.mistakes && t.mistakes !== "None").reduce((m, t) => {
    m[t.mistakes] = (m[t.mistakes] || 0) + 1;
    return m;
  }, {})).sort((a, b) => b[1] - a[1])[0]) == null ? void 0 : _b[0];
  const disciplined = Math.round(wk.filter((t) => !t.mistakes || t.mistakes === "None").length / wk.length * 100);
  return { from: weekStr(mon), to: weekStr(sun), total: wk.length, wins: wins.length, wr: wr.toFixed(0), pnl: pnl.toFixed(2), profit: profit.toFixed(2), topModel, topMistake, disciplined };
}
const SEED = [
  { id: 54565171, symbol: "XAUUSD", entryDate: "2025-12-12", entryTime: "09:07:11", side: "Long", entryPrice: 4285.82, exitPrice: 4287.65, stopLoss: 4287.69, takeProfit: 4292.9, pnl: 0.2745, profit: 27.45, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "B", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 54999710, symbol: "XAUUSD", entryDate: "2025-12-16", entryTime: "05:11:18", side: "Short", entryPrice: 4284.8, exitPrice: 4289.45, stopLoss: 4289.49, takeProfit: 4277.99, pnl: -0.6975, profit: -69.75, status: "Closed", confluences: [], session: "Asia", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 55193310, symbol: "XAUUSD", entryDate: "2025-12-17", entryTime: "07:22:07", side: "Long", entryPrice: 4334.94, exitPrice: 4336.42, stopLoss: 4336.52, takeProfit: 4341.9, pnl: 0.222, profit: 22.2, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "B", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 55393921, symbol: "XAUUSD", entryDate: "2025-12-18", entryTime: "18:10:22", side: "Long", entryPrice: 4349.15, exitPrice: 4356.48, stopLoss: 4353.41, takeProfit: 4355.95, pnl: 1.0995, profit: 109.95, status: "Closed", confluences: [], session: "London Mid", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 55750744, symbol: "XAUUSD", entryDate: "2025-12-22", entryTime: "01:50:17", side: "Long", entryPrice: 4356.52, exitPrice: 4363.45, stopLoss: 4360.81, takeProfit: 4363.4, pnl: 1.0395, profit: 103.95, status: "Closed", confluences: [], session: "Asia", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 56208180, symbol: "XAUUSD", entryDate: "2025-12-26", entryTime: "03:04:53", side: "Long", entryPrice: 4525.9, exitPrice: 4527.75, stopLoss: 4527.95, takeProfit: 4532.25, pnl: 0.2775, profit: 27.75, status: "Closed", confluences: [], session: "Asia", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "B", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 56393594, symbol: "XAUUSD", entryDate: "2025-12-29", entryTime: "02:30:15", side: "Short", entryPrice: 4475.2, exitPrice: 4479.93, stopLoss: 4479.95, takeProfit: 4468.45, pnl: -0.7095, profit: -70.95, status: "Closed", confluences: [], session: "Asia", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 56694483, symbol: "XAUUSD", entryDate: "2025-12-31", entryTime: "07:40:31", side: "Short", entryPrice: 4318.51, exitPrice: 4327.39, stopLoss: 4327.2, takeProfit: 4315.7, pnl: -1.332, profit: -133.2, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 56836027, symbol: "XAUUSD", entryDate: "2026-01-02", entryTime: "05:34:08", side: "Long", entryPrice: 4373.61, exitPrice: 4371.4, stopLoss: 4368.6, takeProfit: 4380.1, pnl: -0.3315, profit: -33.15, status: "Closed", confluences: [], session: "Asia", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "C", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 56986286, symbol: "XAUUSD", entryDate: "2026-01-05", entryTime: "03:02:02", side: "Long", entryPrice: 4402.35, exitPrice: 4409.46, stopLoss: 4402.35, takeProfit: 4409.25, pnl: 1.0665, profit: 106.65, status: "Closed", confluences: [], session: "Asia", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 57188896, symbol: "XAUUSD", entryDate: "2026-01-06", entryTime: "01:09:49", side: "Long", entryPrice: 4457.21, exitPrice: 4456.71, stopLoss: 4451.0, takeProfit: 4462.5, pnl: -0.075, profit: -7.5, status: "Closed", confluences: [], session: "Asia", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "C", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 57445777, symbol: "XAUUSD", entryDate: "2026-01-07", entryTime: "01:39:17", side: "Long", entryPrice: 4496.93, exitPrice: 4492.72, stopLoss: 4492.75, takeProfit: 4504.27, pnl: -0.6315, profit: -63.15, status: "Closed", confluences: [], session: "Asia", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 57656217, symbol: "XAUUSD", entryDate: "2026-01-08", entryTime: "07:16:33", side: "Short", entryPrice: 4423.4, exitPrice: 4428.06, stopLoss: 4428.0, takeProfit: 4416.5, pnl: -0.699, profit: -69.9, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 58227401, symbol: "XAUUSD", entryDate: "2026-01-13", entryTime: "16:47:15", side: "Long", entryPrice: 4630.24, exitPrice: 4629.93, stopLoss: 4630.24, takeProfit: 4637.03, pnl: -0.0465, profit: -4.65, status: "Closed", confluences: [], session: "London Mid", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "C", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 58432980, symbol: "XAUUSD", entryDate: "2026-01-14", entryTime: "07:01:55", side: "Long", entryPrice: 4634.34, exitPrice: 4634.35, stopLoss: 4634.34, takeProfit: 4641.25, pnl: 0.0015, profit: 0.15, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "B", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 58607668, symbol: "XAUUSD", entryDate: "2026-01-15", entryTime: "03:31:33", side: "Short", entryPrice: 4588.39, exitPrice: 4589.61, stopLoss: 4595.9, takeProfit: 4584.4, pnl: -0.183, profit: -18.3, status: "Closed", confluences: [], session: "Asia", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "C", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 58805785, symbol: "XAUUSD", entryDate: "2026-01-16", entryTime: "17:27:02", side: "Short", entryPrice: 4580.79, exitPrice: 4574.1, stopLoss: 4577.02, takeProfit: 4574.1, pnl: 1.0035, profit: 100.35, status: "Closed", confluences: [], session: "London Mid", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 59950685, symbol: "XAUUSD", entryDate: "2026-01-27", entryTime: "08:12:43", side: "Long", entryPrice: 5077.33, exitPrice: 5091.49, stopLoss: 5064.91, takeProfit: 5091.2, pnl: 1.1328, profit: 113.28, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.08", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 60725731, symbol: "XAUUSD", entryDate: "2026-02-03", entryTime: "11:27:25", side: "Long", entryPrice: 4896.49, exitPrice: 4922.22, stopLoss: 4873.6, takeProfit: 4952.66, pnl: 0.5146, profit: 51.46, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.02", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 60845776, symbol: "XAUUSD", entryDate: "2026-02-04", entryTime: "09:06:17", side: "Long", entryPrice: 5065.82, exitPrice: 5064.68, stopLoss: 5038.2, takeProfit: 5120.11, pnl: -0.0229, profit: -2.29, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "C", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.02", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 60918734, symbol: "XAUUSD", entryDate: "2026-02-04", entryTime: "17:12:27", side: "Long", entryPrice: 4984.73, exitPrice: 4951.19, stopLoss: 4951.19, takeProfit: 5036.55, pnl: -0.6708, profit: -67.08, status: "Closed", confluences: [], session: "London Mid", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.02", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 60986864, symbol: "XAUUSD", entryDate: "2026-02-05", entryTime: "09:38:35", side: "Long", entryPrice: 4908.78, exitPrice: 4876.65, stopLoss: 4876.66, takeProfit: 4962.33, pnl: -0.6426, profit: -64.26, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.02", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 61234020, symbol: "XAUUSD", entryDate: "2026-02-09", entryTime: "13:26:46", side: "Short", entryPrice: 4999.26, exitPrice: 5012.53, stopLoss: 5012.35, takeProfit: 0, pnl: -0.5308, profit: -53.08, status: "Closed", confluences: [], session: "New York", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.04", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 62009733, symbol: "XAUUSD", entryDate: "2026-02-18", entryTime: "10:34:32", side: "Long", entryPrice: 4922.03, exitPrice: 4916.96, stopLoss: 4917.0, takeProfit: 0, pnl: -0.4563, profit: -45.63, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "C", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.09", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 62013424, symbol: "XAUUSD", entryDate: "2026-02-18", entryTime: "11:02:26", side: "Short", entryPrice: 4918.72, exitPrice: 4925.25, stopLoss: 4925.23, takeProfit: 4898.54, pnl: -0.4571, profit: -45.71, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "C", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.07", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 62041928, symbol: "XAUUSD", entryDate: "2026-02-18", entryTime: "15:23:41", side: "Short", entryPrice: 4954.37, exitPrice: 4959.4, stopLoss: 4959.37, takeProfit: 4946.75, pnl: -0.3521, profit: -35.21, status: "Closed", confluences: [], session: "New York", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "C", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.07", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 62587430, symbol: "XAUUSD", entryDate: "2026-02-25", entryTime: "11:16:15", side: "Long", entryPrice: 5183.95, exitPrice: 5189.66, stopLoss: 5184.12, takeProfit: 5189.59, pnl: 1.0849, profit: 108.49, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.19", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 63483394, symbol: "XAUUSD", entryDate: "2026-03-09", entryTime: "10:05:14", side: "Long", entryPrice: 5092.33, exitPrice: 5100.69, stopLoss: 5092.83, takeProfit: 5100.69, pnl: 1.0868, profit: 108.68, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.13", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 63707874, symbol: "XAUUSD", entryDate: "2026-03-11", entryTime: "07:09:02", side: "Long", entryPrice: 5204.89, exitPrice: 5198.83, stopLoss: 5199.26, takeProfit: 5209.66, pnl: -0.4848, profit: -48.48, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "C", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.08", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 63745820, symbol: "XAUUSD", entryDate: "2026-03-11", entryTime: "14:13:41", side: "Short", entryPrice: 5185.98, exitPrice: 5177.13, stopLoss: 5193.54, takeProfit: 5177.43, pnl: 0.531, profit: 53.1, status: "Closed", confluences: [], session: "New York", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.06", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 63765842, symbol: "XAUUSD", entryDate: "2026-03-11", entryTime: "16:44:28", side: "Short", entryPrice: 5168.31, exitPrice: 5151.18, stopLoss: 5181.64, takeProfit: 5152.72, pnl: 0.5139, profit: 51.39, status: "Closed", confluences: [], session: "London Mid", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.03", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 63828907, symbol: "XAUUSD", entryDate: "2026-03-12", entryTime: "07:17:23", side: "Long", entryPrice: 5153.63, exitPrice: 5149.7, stopLoss: 5149.85, takeProfit: 5157.43, pnl: -0.5109, profit: -51.09, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.13", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 63829367, symbol: "XAUUSD", entryDate: "2026-03-12", entryTime: "07:35:28", side: "Short", entryPrice: 5148.86, exitPrice: 5142.15, stopLoss: 5148.75, takeProfit: 5142.0, pnl: 0.7381, profit: 73.81, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.11", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 63866886, symbol: "XAUUSD", entryDate: "2026-03-12", entryTime: "14:12:04", side: "Short", entryPrice: 5179.97, exitPrice: 5175.91, stopLoss: 5183.9, takeProfit: 5176.0, pnl: 0.4872, profit: 48.72, status: "Closed", confluences: [], session: "New York", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "B", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.12", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 63964767, symbol: "XAUUSD", entryDate: "2026-03-13", entryTime: "10:06:02", side: "Long", entryPrice: 5090.49, exitPrice: 5083.42, stopLoss: 5083.51, takeProfit: 5091.3, pnl: -0.4949, profit: -49.49, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "C", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.07", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 63965869, symbol: "XAUUSD", entryDate: "2026-03-13", entryTime: "10:17:20", side: "Short", entryPrice: 5083.37, exitPrice: 5083.25, stopLoss: 5083.22, takeProfit: 5070.82, pnl: 0.0072, profit: 0.72, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "B", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.06", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 63992147, symbol: "XAUUSD", entryDate: "2026-03-13", entryTime: "14:07:59", side: "Short", entryPrice: 5090.72, exitPrice: 5097.86, stopLoss: 5097.63, takeProfit: 5083.17, pnl: -0.4998, profit: -49.98, status: "Closed", confluences: [], session: "New York", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "C", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.07", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 64000266, symbol: "XAUUSD", entryDate: "2026-03-13", entryTime: "15:39:04", side: "Short", entryPrice: 5111.62, exitPrice: 5116.67, stopLoss: 5116.29, takeProfit: 5106.49, pnl: -0.505, profit: -50.5, status: "Closed", confluences: [], session: "New York", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.1", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 64001191, symbol: "XAUUSD", entryDate: "2026-03-13", entryTime: "15:45:36", side: "Long", entryPrice: 5116.55, exitPrice: 5111.8, stopLoss: 5111.8, takeProfit: 5126.75, pnl: -0.475, profit: -47.5, status: "Closed", confluences: [], session: "New York", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "C", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.1", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 64007109, symbol: "XAUUSD", entryDate: "2026-03-13", entryTime: "16:35:48", side: "Short", entryPrice: 5100.26, exitPrice: 5109.43, stopLoss: 5109.39, takeProfit: 0, pnl: -0.4585, profit: -45.85, status: "Closed", confluences: [], session: "London Mid", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "C", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.05", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 64066114, symbol: "XAUUSD", entryDate: "2026-03-16", entryTime: "07:16:05", side: "Long", entryPrice: 5026.19, exitPrice: 5018.84, stopLoss: 5018.84, takeProfit: 0, pnl: -0.735, profit: -73.5, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.1", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 64066847, symbol: "XAUUSD", entryDate: "2026-03-16", entryTime: "07:38:08", side: "Short", entryPrice: 5018.53, exitPrice: 5008.18, stopLoss: 5026.21, takeProfit: 5008.4, pnl: 1.035, profit: 103.5, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.1", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 64076903, symbol: "XAUUSD", entryDate: "2026-03-16", entryTime: "10:06:19", side: "Short", entryPrice: 5011.28, exitPrice: 5015.82, stopLoss: 5015.74, takeProfit: 5007.3, pnl: -0.908, profit: -90.8, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.2", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 64077199, symbol: "XAUUSD", entryDate: "2026-03-16", entryTime: "10:09:52", side: "Long", entryPrice: 5015.98, exitPrice: 5009.62, stopLoss: 5009.74, takeProfit: 0, pnl: -0.954, profit: -95.4, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 64077804, symbol: "XAUUSD", entryDate: "2026-03-16", entryTime: "10:15:19", side: "Short", entryPrice: 5009.08, exitPrice: 4995.71, stopLoss: 5013.9, takeProfit: 4996.08, pnl: 2.674, profit: 267.4, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.2", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 64180734, symbol: "XAUUSD", entryDate: "2026-03-17", entryTime: "07:11:11", side: "Long", entryPrice: 5029.55, exitPrice: 5026.32, stopLoss: 5026.36, takeProfit: 5032.95, pnl: -0.0646, profit: -6.46, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "C", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.02", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 64181187, symbol: "XAUUSD", entryDate: "2026-03-17", entryTime: "07:23:31", side: "Long", entryPrice: 5029.33, exitPrice: 5026.28, stopLoss: 5026.3, takeProfit: 5032.79, pnl: -0.793, profit: -79.3, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.26", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 64220280, symbol: "XAUUSD", entryDate: "2026-03-17", entryTime: "14:08:07", side: "Long", entryPrice: 5002.21, exitPrice: 5009.44, stopLoss: 4996.45, takeProfit: 5009.14, pnl: 0.9399, profit: 93.99, status: "Closed", confluences: [], session: "New York", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.13", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 64229916, symbol: "XAUUSD", entryDate: "2026-03-17", entryTime: "15:43:48", side: "Short", entryPrice: 5017.7, exitPrice: 5012.36, stopLoss: 5022.81, takeProfit: 5012.41, pnl: 0.801, profit: 80.1, status: "Closed", confluences: [], session: "New York", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 64289090, symbol: "XAUUSD", entryDate: "2026-03-18", entryTime: "07:24:24", side: "Long", entryPrice: 4993.0, exitPrice: 4989.52, stopLoss: 4989.53, takeProfit: 0, pnl: -0.696, profit: -69.6, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.2", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 64289367, symbol: "XAUUSD", entryDate: "2026-03-18", entryTime: "07:33:03", side: "Short", entryPrice: 4989.13, exitPrice: 4984.48, stopLoss: 4989.06, takeProfit: 4983.83, pnl: 0.8835, profit: 88.35, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.19", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 64405935, symbol: "XAUUSD", entryDate: "2026-03-19", entryTime: "07:07:15", side: "Short", entryPrice: 4848.25, exitPrice: 4851.53, stopLoss: 4851.53, takeProfit: 4844.35, pnl: -0.6888, profit: -68.88, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.21", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 64406272, symbol: "XAUUSD", entryDate: "2026-03-19", entryTime: "07:15:43", side: "Long", entryPrice: 4851.72, exitPrice: 4848.64, stopLoss: 4848.67, takeProfit: 4856.23, pnl: -0.7084, profit: -70.84, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.23", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 64457428, symbol: "XAUUSD", entryDate: "2026-03-19", entryTime: "15:38:28", side: "Long", entryPrice: 4616.76, exitPrice: 4598.04, stopLoss: 4598.73, takeProfit: 0, pnl: -0.7488, profit: -74.88, status: "Closed", confluences: [], session: "New York", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.04", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 64457735, symbol: "XAUUSD", entryDate: "2026-03-19", entryTime: "15:40:17", side: "Short", entryPrice: 4598.45, exitPrice: 4566.13, stopLoss: 4597.97, takeProfit: 4567.22, pnl: 1.2928, profit: 129.28, status: "Closed", confluences: [], session: "New York", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.04", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 64802852, symbol: "XAUUSD", entryDate: "2026-03-24", entryTime: "17:05:40", side: "Short", entryPrice: 4389.53, exitPrice: 4405.79, stopLoss: 4405.54, takeProfit: 4368.1, pnl: -0.813, profit: -81.3, status: "Closed", confluences: [], session: "London Mid", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.05", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 64806419, symbol: "XAUUSD", entryDate: "2026-03-24", entryTime: "17:22:41", side: "Long", entryPrice: 4406.07, exitPrice: 4427.24, stopLoss: 4389.51, takeProfit: 4427.24, pnl: 1.9053, profit: 190.53, status: "Closed", confluences: [], session: "London Mid", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.09", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 64867305, symbol: "XAUUSD", entryDate: "2026-03-25", entryTime: "10:25:59", side: "Short", entryPrice: 4557.3, exitPrice: 4548.43, stopLoss: 4555.36, takeProfit: 4547.22, pnl: 1.2418, profit: 124.18, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "A", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.14", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 64867394, symbol: "USTEC", entryDate: "2026-03-25", entryTime: "10:26:50", side: "Short", entryPrice: 24149.12, exitPrice: 24158.86, stopLoss: 24192.25, takeProfit: 24102.5, pnl: -0.224, profit: -22.4, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "C", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.23", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 64959744, symbol: "XAUUSD", entryDate: "2026-03-26", entryTime: "07:06:03", side: "Short", entryPrice: 4512.35, exitPrice: 4517.62, stopLoss: 4517.59, takeProfit: 4505.39, pnl: -0.7905, profit: -79.05, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.15", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 64959901, symbol: "XAUUSD", entryDate: "2026-03-26", entryTime: "07:11:27", side: "Long", entryPrice: 4518.22, exitPrice: 4518.23, stopLoss: 4518.39, takeProfit: 4526.58, pnl: 0.0018, profit: 0.18, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Satisfied", mistakes: "None", grade: "B", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.18", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 65002890, symbol: "XAUUSD", entryDate: "2026-03-26", entryTime: "14:17:01", side: "Short", entryPrice: 4440.48, exitPrice: 4448.72, stopLoss: 4448.66, takeProfit: 4430.77, pnl: -0.9888, profit: -98.88, status: "Closed", confluences: [], session: "New York", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.12", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 65075738, symbol: "XAUUSD", entryDate: "2026-03-27", entryTime: "07:09:03", side: "Short", entryPrice: 4435.3, exitPrice: 4440.19, stopLoss: 4439.8, takeProfit: 4430.43, pnl: -1.0758, profit: -107.58, status: "Closed", confluences: [], session: "London Open", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.22", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] },
  { id: 65111573, symbol: "XAUUSD", entryDate: "2026-03-27", entryTime: "14:07:06", side: "Short", entryPrice: 4409.01, exitPrice: 4417.46, stopLoss: 4417.46, takeProfit: 4398.97, pnl: -0.9295, profit: -92.95, status: "Closed", confluences: [], session: "New York", model: "In Session", emotionBefore: "Calm & Focused", emotionAfter: "Lesson Learned", mistakes: "None", grade: "D", expectedRR: "1:2", actualRR: "", notes: "MT5 Import | Vol:0.11", riskAmount: 0, accountId: "demo-mt5", tags: ["MT5"] }
];

const C = {
  green: "var(--green)",
  gBg: "var(--gBg)",
  gBdr: "var(--gBdr)",
  red: "var(--red)",
  rBg: "var(--rBg)",
  rBdr: "var(--rBdr)",
  gold: "var(--acc)",
  goldD: "var(--accD)",
  goldL: "var(--accL)",
  goldF: "var(--accF)",
  blue: "var(--blue)",
  bBg: "var(--bBg)",
  bBdr: "var(--bBdr)",
  purple: "var(--purple)",
  pBg: "var(--pBg)",
  pBdr: "var(--pBdr)",
  text: "var(--text)",
  t2: "var(--t2)",
  t3: "var(--t3)",
  surface: "var(--surface)",
  s2: "var(--s2)",
  s3: "var(--s3)",
  border: "var(--border)",
  border2: "var(--border2)",
  bg: "var(--bg)",
  indigo: "var(--indigo)"
};
function Chip({ children, color = "gray", size = "sm" }) {
  const map = {
    green: ["var(--gBg)", "var(--gBdr)", "var(--green)"],
    profit: ["var(--accL)", "color-mix(in srgb, var(--acc) 30%, transparent)", "var(--accD)"],
    loss: ["var(--s3)", "var(--border2)", "var(--t2)"],
    gold: ["var(--accF)", "color-mix(in srgb, var(--acc) 35%, transparent)", "var(--accD)"],
    blue: ["var(--bBg)", "var(--bBdr)", "var(--blue)"],
    purple: ["var(--pBg)", "var(--pBdr)", "var(--purple)"],
    orange: ["var(--oBg)", "var(--oBdr)", "var(--orange)"],
    cyan: ["var(--cBg)", "var(--cBdr)", "var(--cyan)"],
    red: ["var(--rBg)", "var(--rBdr)", "var(--red)"],
    gray: ["var(--s3)", "var(--border)", "var(--t2)"],
    truegreen: ["var(--gBg)", "var(--gBdr)", "var(--green)"]
  };
  const [bg, bdr, txt] = map[color] || map.gray;
  const pad = size === "sm" ? "2px 8px" : size === "lg" ? "5px 14px" : "4px 11px";
  const fs = size === "sm" ? "10px" : size === "lg" ? "13px" : "11px";
  return /* @__PURE__ */ React.createElement("span", { className: "chip", style: { background: bg, border: `1px solid ${bdr}`, color: txt, padding: pad, fontSize: fs } }, children);
}
function StatPill({ val, pnl }) {
  const col = pnl >= 0 ? C.goldD : C.t2;
  const bg = pnl >= 0 ? C.goldL : C.s3;
  const bdr = pnl >= 0 ? "color-mix(in srgb, var(--acc) 25%, transparent)" : C.border;
  return /* @__PURE__ */ React.createElement("span", { style: { background: bg, border: `1px solid ${bdr}`, color: col, borderRadius: 7, padding: "2px 9px", fontSize: 10.5, fontWeight: 700 } }, val);
}
function Label({ children }) {
  return /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", letterSpacing: 0.06, marginBottom: 8, textTransform: "uppercase", fontFamily: "'Inter',sans-serif" } }, children);
}
function PnlBadge({ pnl, profit, size = 12 }) {
  const col = pnl >= 0 ? C.goldD : C.t2;
  return /* @__PURE__ */ React.createElement("span", { style: { color: col, fontSize: size, fontWeight: 700 } }, fmtPct(pnl), profit != null && profit !== 0 && /* @__PURE__ */ React.createElement("span", { style: { fontSize: size - 1, opacity: 0.7, marginLeft: 4 } }, "(", fmtUSD(profit), ")"));
}
function GradeChip({ grade }) {
  const map = { "A+": [C.goldF, "color-mix(in srgb, var(--acc) 40%, transparent)", C.goldD], "A": [C.gBg, C.gBdr, C.green], "B": [C.bBg, C.bBdr, C.blue], "C": [C.pBg, C.pBdr, C.purple], "D": [C.rBg, C.rBdr, C.red] };
  const [bg, bdr, txt] = map[grade || "B"] || map["B"];
  return /* @__PURE__ */ React.createElement("span", { style: { background: bg, border: `1px solid ${bdr}`, color: txt, borderRadius: 6, padding: "2px 8px", fontSize: 10.5, fontWeight: 600 } }, grade || "\u2014");
}
function SessionChip({ session }) {
  const map = { "Asian": ["#ecfeff", "#a5f3fc", "#0891b2"], "London": ["#eff6ff", "#bfdbfe", "#2563eb"], "New York": ["#fef3c7", "color-mix(in srgb, var(--acc) 30%, transparent)", "#a87c28"], "London-NY Overlap": ["#f5f3ff", "#ddd6fe", "#7c3aed"], "Pre-Market": ["var(--s3)", "var(--border2)", "var(--t2)"], "After Hours": ["var(--s3)", "var(--border2)", "var(--t2)"], "Weekly Open": ["#f0fdf4", "#bbf7d0", "#16a34a"], "Weekly Close": ["#fef2f2", "#fecaca", "#dc2626"] };
  const [bg, bdr, txt] = map[session] || ["var(--s3)", "var(--border)", "var(--t2)"];
  return /* @__PURE__ */ React.createElement("span", { className: "chip", style: { background: bg, border: `1px solid ${bdr}`, color: txt, padding: "2px 8px", fontSize: 10 } }, session || "\u2014");
}
function EmotionChip({ emotion, type = "before" }) {
  const positive = ["Calm & Focused", "Confident", "Neutral", "Disciplined", "Satisfied", "Proud", "Relieved"];
  const negative = ["FOMO", "Greedy", "Fearful", "Angry", "Revenge Mindset", "Impatient", "Euphoric", "Overconfident"];
  const isPos = positive.includes(emotion);
  const isNeg = negative.includes(emotion);
  const bg = isPos ? C.gBg : isNeg ? C.rBg : C.bBg;
  const bdr = isPos ? C.gBdr : isNeg ? C.rBdr : C.bBdr;
  const col = isPos ? C.green : isNeg ? C.red : C.blue;
  const icon = isPos ? "\u{1F60C}" : isNeg ? "\u{1F630}" : "\u{1F610}";
  return /* @__PURE__ */ React.createElement("span", { className: "chip", style: { background: bg, border: `1px solid ${bdr}`, color: col, padding: "2px 8px", fontSize: 10 } }, icon, " ", emotion || "\u2014");
}
function Sparkline({ pts, w = 120, h = 36, color }) {
  if (!pts || pts.length < 2) return /* @__PURE__ */ React.createElement("div", { style: { width: w, height: h } });
  const lo = Math.min(...pts), hi = Math.max(...pts), rng = hi - lo || 1;
  const P = 2, IW = w - P * 2, IH = h - P * 2;
  const xi = (i) => i / (pts.length - 1 || 1) * IW + P;
  const yi = (v) => IH - (v - lo) / rng * IH + P;
  const d = pts.map((v, i) => `${i === 0 ? "M" : "L"}${xi(i).toFixed(1)},${yi(v).toFixed(1)}`).join(" ");
  const last = pts[pts.length - 1];
  const col = color || (last >= 0 ? "var(--acc)" : "#94a3b8");
  const fill = `${d} L${xi(pts.length - 1).toFixed(1)},${IH + P} L${P},${IH + P} Z`;
  const gid = `sg${w}${h}${Math.abs(last).toFixed(0)}`;
  return /* @__PURE__ */ React.createElement("svg", { width: w, height: h, viewBox: `0 0 ${w} ${h}`, style: { display: "block", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: gid, x1: "0", y1: "0", x2: "0", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: col, stopOpacity: 0.2 }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: col, stopOpacity: 0.02 }))), /* @__PURE__ */ React.createElement("path", { d: fill, fill: `url(#${gid})` }), /* @__PURE__ */ React.createElement("path", { d, fill: "none", stroke: col, strokeWidth: 1.8, strokeLinejoin: "round", strokeLinecap: "round" }));
}
function HBar({ label, value, max, color = "var(--acc)", subtitle, rightLabel }) {
  const pct = max > 0 ? Math.min(100, Math.abs(value) / max * 100) : 0;
  return /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 10 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, fontWeight: 600, color: "var(--t2)" } }, label), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, alignItems: "center" } }, subtitle && /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, color: "var(--t3)" } }, subtitle), rightLabel && /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, fontWeight: 700, color: value >= 0 ? "var(--accD)" : "var(--t2)" } }, rightLabel))), /* @__PURE__ */ React.createElement("div", { style: { height: 7, background: "var(--s3)", borderRadius: 4, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { width: `${pct}%`, height: "100%", background: color, borderRadius: 4, transition: "width .5s cubic-bezier(.22,1,.36,1)" } })));
}
function Donut({ pct, size = 56, color = "var(--acc)", label }) {
  const r = 23, cx = 32, cy = 32, circ = 2 * Math.PI * r;
  const dash = Math.max(0, Math.min(circ, circ * (pct / 100)));
  return /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 64 64" }, /* @__PURE__ */ React.createElement("circle", { cx, cy, r, fill: "none", stroke: "var(--s3)", strokeWidth: 7 }), /* @__PURE__ */ React.createElement(
    "circle",
    {
      cx,
      cy,
      r,
      fill: "none",
      stroke: color,
      strokeWidth: 7,
      strokeDasharray: `${dash} ${circ}`,
      strokeLinecap: "round",
      transform: "rotate(-90 32 32)",
      style: { transition: "stroke-dasharray .6s ease" }
    }
  ), /* @__PURE__ */ React.createElement("text", { x: cx, y: cy + 4, textAnchor: "middle", fontSize: 11, fontWeight: 700, fill: "var(--text)", fontFamily: "Inter" }, label || pct.toFixed(0) + "%"));
}
const ProfitCurve = memo(function ProfitCurve2({ trades, height = 140, capital: propCapital }) {
  const capital = (propCapital && propCapital > 0) ? propCapital : 5000;
  const svgRef = useRef(null);
  const [hover, setHover] = useState(null);
  const [mounted, setMounted] = useState(false);
  const showDD = false;
  const pathRef = useRef(null);
  useEffect(() => {
    setMounted(false);
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, [trades.length]);
  useEffect(() => {
    var _a, _b, _c;
    if (!mounted || !pathRef.current) return;
    const len = (_c = (_b = (_a = pathRef.current).getTotalLength) == null ? void 0 : _b.call(_a)) != null ? _c : 2e3;
    pathRef.current.style.strokeDasharray = len;
    pathRef.current.style.strokeDashoffset = len;
    pathRef.current.style.transition = "stroke-dashoffset 1.1s cubic-bezier(.4,0,.2,1)";
    requestAnimationFrame(() => {
      pathRef.current && (pathRef.current.style.strokeDashoffset = "0");
    });
  }, [mounted]);
  const sorted = [...trades].sort((a, b) => a.entryDate.localeCompare(b.entryDate) || a.entryTime.localeCompare(b.entryTime));
  let cum = 0, peak = 0;
  const allPts = [{ x: 0, y: 0, dd: 0, date: "Start" }, ...sorted.map((t, i) => {
    let c2 = 0;
    for (let j = 0; j <= i; j++) c2 += calcPnL(sorted[j].profit, capital);
    if (c2 > peak) peak = c2;
    const dd = c2 - peak;
    const tradePnl = calcPnL(t.profit, capital);
    return { x: i + 1, y: c2, dd, date: t.entryDate, pnl: tradePnl, label: t.symbol, profit: t.profit };
  })];
  const maxX = allPts.length - 1 || 1;
  const equityVals = allPts.map((p) => p.y);
  const ddVals = allPts.map((p) => p.dd);
  const allVals = [...equityVals, ...showDD ? ddVals : []];
  const lo = Math.min(...allVals), hi = Math.max(...allVals), rng = hi - lo || 1;
  const PAD = { t: 8, b: 20, l: 46, r: 12 };
  const W = 900, H = height, IW = W - PAD.l - PAD.r, IH = H - PAD.t - PAD.b;
  const sx = (x) => x / maxX * IW + PAD.l;
  const sy = (y) => IH - (y - lo) / rng * IH + PAD.t;
  const last = allPts[allPts.length - 1].y;
  const col = last >= 0 ? "var(--acc)" : "#94a3b8";
  const zero = Math.max(PAD.t, Math.min(PAD.t + IH, sy(Math.max(lo, Math.min(0, hi)))));
  const d = allPts.map((p, i) => `${i === 0 ? "M" : "L"}${sx(p.x).toFixed(1)},${sy(p.y).toFixed(1)}`).join(" ");
  const fill = `${d} L${sx(maxX).toFixed(1)},${zero.toFixed(1)} L${sx(0).toFixed(1)},${zero.toFixed(1)} Z`;
  const ddPath = showDD ? allPts.map((p, i) => `${i === 0 ? "M" : "L"}${sx(p.x).toFixed(1)},${sy(p.dd).toFixed(1)}`).join(" ") : null;
  const ddFillPath = ddPath ? `${ddPath} L${sx(maxX).toFixed(1)},${zero.toFixed(1)} L${sx(0).toFixed(1)},${zero.toFixed(1)} Z` : null;
  const ySteps = Array.from({ length: 5 }, (_, i) => lo + rng / 4 * i);
  const handleMove = useCallback((e) => {
    var _a;
    const rect = (_a = svgRef.current) == null ? void 0 : _a.getBoundingClientRect();
    if (!rect) return;
    const mx = (e.clientX - rect.left) / rect.width * W;
    const idx = Math.max(0, Math.min(maxX, Math.round((mx - PAD.l) / IW * maxX)));
    setHover({ idx });
  }, [maxX]);
  const hp = hover != null ? allPts[hover.idx] : null;
  return /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement(
    "svg",
    {
      ref: svgRef,
      width: "100%",
      viewBox: `0 0 ${W} ${H}`,
      style: { display: "block", cursor: "crosshair" },
      onMouseMove: handleMove,
      onMouseLeave: () => setHover(null)
    },
    /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: "pcg", x1: "0", y1: "0", x2: "0", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: col, stopOpacity: 0.18 }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: col, stopOpacity: 0.01 })), /* @__PURE__ */ React.createElement("linearGradient", { id: "ddg", x1: "0", y1: "0", x2: "0", y2: "1" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", stopColor: "#ef4444", stopOpacity: 0.22 }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", stopColor: "#ef4444", stopOpacity: 0.04 })), /* @__PURE__ */ React.createElement("clipPath", { id: "pcc" }, /* @__PURE__ */ React.createElement("rect", { x: PAD.l, y: PAD.t, width: IW, height: IH }))),
    ySteps.map((v, i) => /* @__PURE__ */ React.createElement("g", { key: i }, /* @__PURE__ */ React.createElement("line", { x1: PAD.l, x2: PAD.l + IW, y1: sy(v), y2: sy(v), stroke: "var(--border)", strokeWidth: 0.6 }), /* @__PURE__ */ React.createElement("text", { x: PAD.l - 5, y: sy(v) + 4, textAnchor: "end", fontSize: 9, fill: "var(--t3)", fontFamily: "Inter" }, fmtPct(v, 0)))),
    lo < 0 && hi > 0 && /* @__PURE__ */ React.createElement("line", { x1: PAD.l, x2: PAD.l + IW, y1: zero, y2: zero, stroke: "var(--border2)", strokeWidth: 1, strokeDasharray: "4,3" }),
    showDD && ddFillPath && /* @__PURE__ */ React.createElement("path", { d: ddFillPath, fill: "url(#ddg)", clipPath: "url(#pcc)", opacity: mounted ? 1 : 0, style: { transition: "opacity .6s" } }),
    showDD && ddPath && /* @__PURE__ */ React.createElement("path", { d: ddPath, fill: "none", stroke: "#ef4444", strokeWidth: 1.2, strokeDasharray: "4,2", strokeLinecap: "round", clipPath: "url(#pcc)", opacity: mounted ? 0.65 : 0, style: { transition: "opacity .6s" } }),
    /* @__PURE__ */ React.createElement("path", { d: fill, fill: "url(#pcg)", clipPath: "url(#pcc)", style: { opacity: mounted ? 1 : 0, transition: "opacity .6s" } }),
    /* @__PURE__ */ React.createElement("path", { ref: pathRef, d, fill: "none", stroke: col, strokeWidth: 2.2, strokeLinejoin: "round", strokeLinecap: "round", clipPath: "url(#pcc)" }),
    /* @__PURE__ */ React.createElement("circle", { cx: sx(maxX), cy: sy(last), r: 4, fill: col, stroke: "white", strokeWidth: 2, opacity: mounted ? 1 : 0, style: { transition: "opacity .3s .8s" } }),
    hp && hover.idx > 0 && /* @__PURE__ */ React.createElement("g", { style: { pointerEvents: "none" } }, /* @__PURE__ */ React.createElement("line", { x1: sx(hover.idx), x2: sx(hover.idx), y1: PAD.t, y2: PAD.t + IH, stroke: col, strokeWidth: 1, strokeDasharray: "3,3", opacity: 0.4 }), /* @__PURE__ */ React.createElement("circle", { cx: sx(hover.idx), cy: sy(hp.y), r: 5, fill: col, stroke: "white", strokeWidth: 2 }), showDD && /* @__PURE__ */ React.createElement("circle", { cx: sx(hover.idx), cy: sy(hp.dd), r: 3, fill: "#ef4444", stroke: "white", strokeWidth: 1.5 }), "      ")
  ), hp && hover.idx > 0 && (() => {
    const frac = sx(hover.idx) / W;
    const left = frac > 0.72 ? "auto" : `calc(${Math.round(frac * 100)}% + 10px)`;
    const right = frac > 0.72 ? "10px" : "auto";
    return /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 4, left, right, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: "11px 15px", fontSize: 11, pointerEvents: "none", zIndex: 10, minWidth: 180, boxShadow: "0 8px 30px rgba(0,0,0,.15)" } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 600, marginBottom: 6, fontSize: 12, borderBottom: "1px solid var(--border)", paddingBottom: 6, color: "var(--text)" } }, hp.date, " \xB7 ", hp.label || "Start"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 4 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", gap: 14 } }, /* @__PURE__ */ React.createElement("span", { style: { color: "var(--t3)" } }, "Equity"), /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 700, color: hp.y >= 0 ? "var(--accD)" : "var(--red)" } }, fmtPct(hp.y))), hp.pnl != null && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", gap: 14 } }, /* @__PURE__ */ React.createElement("span", { style: { color: "var(--t3)" } }, "This trade"), /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 700, color: hp.pnl >= 0 ? "var(--accD)" : "var(--red)" } }, hp.profit != null && hp.profit !== 0 ? (hp.profit >= 0 ? "+$" : "-$") + Math.abs(hp.profit).toFixed(2) + " " : "", fmtPct(hp.pnl)))));
  })());
});
/* ── Trade Import Parsers ── */
function parseMT5Html(htmlText) {
  // Parse MT5 HTML Trade History Report
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlText, "text/html");
  const rows = Array.from(doc.querySelectorAll("tr"));
  const datePat = /^\d{4}\.\d{2}\.\d{2}\s+\d{2}:\d{2}:\d{2}$/;
  const trades = [];
  for (const row of rows) {
    const cells = Array.from(row.querySelectorAll("td:not(.hidden)")).map(c => c.textContent.trim());
    if (!cells.length || !datePat.test(cells[0])) continue;
    try {
      const entryDt = cells[0], posId = cells[1], symRaw = cells[2], type = cells[3];
      const vol = parseFloat(cells[4]);
      const entryPrice = parseFloat(cells[5]);
      const sl = parseFloat(cells[6]) || 0;
      const tp = parseFloat(cells[7]) || 0;
      const exitDt = cells[8], exitPrice = parseFloat(cells[9]) || 0;
      const profitStr = (cells[12] || "0").replace(/\s/g,"").replace(/\u00a0/g,"");
      const profit = parseFloat(profitStr) || 0;
      if (isNaN(vol) || profit === 0) continue;
      const [datePart, timePart] = entryDt.split(" ");
      const entryDate = datePart.replace(/\./g,"-");
      const h = parseInt(timePart);
      const session = h < 7 ? "Asia" : h < 12 ? "London Open" : h < 16 ? "New York" : h < 20 ? "London Mid" : "Out of Session";
      const symbol = symRaw.replace(/\.QTT|\.$/g,"");
      const side = type.includes("buy") ? "Long" : "Short";
      
      const _mt5Raw = [symbol, entryDate, timePart, side, String(entryPrice), String(exitPrice), String(parseFloat(profit.toFixed(2)))].join("|");
      let _mt5h = 5381; for (let _i = 0; _i < _mt5Raw.length; _i++) _mt5h = (((_mt5h << 5) + _mt5h) ^ _mt5Raw.charCodeAt(_i)) >>> 0;
      trades.push({
        id: "mt5_" + _mt5h.toString(36) + "_" + _mt5Raw.length,
        symbol, entryDate, entryTime: timePart,
        side, entryPrice, exitPrice, stopLoss: sl, takeProfit: tp,
        pnl: 0, // calculated dynamically from profit/accountCapital
        profit: parseFloat(profit.toFixed(2)),
        status: "Closed", confluences: [], session,
        model: "In Session", emotionBefore: "Calm & Focused",
        emotionAfter: profit > 0 ? "Satisfied" : "Lesson Learned",
        mistakes: "None", grade: profit > 50 ? "A" : profit > 0 ? "B" : profit > -50 ? "C" : "D",
        expectedRR: "1:2", actualRR: "", notes: `MT5 | Vol:${vol}`,
        riskAmount: 0, tags: ["MT5"], accountId: ""
      });
    } catch(e) {}
  }
  return trades;
}

function parseMatchTraderCSV(csvText) {
  // Match Trader CSV: ID,Symbol,Open time,Volume,Side,Close time,Open price,Close Price,Stop loss,Take profit,Swap,Commission,Profit,Reason
  const lines = csvText.trim().split(/\r?\n/);
  if (lines.length < 2) return [];
  const headers = lines[0].split(",").map(h => h.trim().toLowerCase());
  const iId       = headers.indexOf("id");
  const iSym      = headers.indexOf("symbol");
  const iOpenTime = headers.indexOf("open time");
  const iVol      = headers.indexOf("volume");
  const iSide     = headers.indexOf("side");
  const iCloseTime= headers.indexOf("close time");
  const iOpenPx   = headers.indexOf("open price");
  const iClosePx  = headers.indexOf("close price");
  const iSL       = headers.indexOf("stop loss");
  const iTP       = headers.indexOf("take profit");
  const iSwap     = headers.indexOf("swap");
  const iComm     = headers.indexOf("commission");
  const iProfit   = headers.indexOf("profit");
  const iReason   = headers.indexOf("reason");
  if (iSym < 0 || iOpenTime < 0 || iProfit < 0) return [];
  const trades = [];
  for (let i = 1; i < lines.length; i++) {
    const raw = lines[i];
    if (!raw.trim()) continue;
    const cells = raw.split(",").map(c => c.trim().replace(/^"|"$/g, ""));
    try {
      const sym        = iSym >= 0      ? cells[iSym]  : "";
      const openRaw    = iOpenTime >= 0 ? cells[iOpenTime] : "";
      const closeRaw   = iCloseTime >= 0? cells[iCloseTime]: "";
      const vol        = iVol >= 0      ? parseFloat(cells[iVol])   || 0 : 0;
      const sideRaw    = iSide >= 0     ? cells[iSide].toUpperCase() : "BUY";
      const openPx     = iOpenPx >= 0   ? parseFloat(cells[iOpenPx])  || 0 : 0;
      const closePx    = iClosePx >= 0  ? parseFloat(cells[iClosePx]) || 0 : 0;
      const sl         = iSL >= 0       ? parseFloat(cells[iSL])   || 0 : 0;
      const tp         = iTP >= 0       ? parseFloat(cells[iTP])   || 0 : 0;
      const swap       = iSwap >= 0     ? parseFloat(cells[iSwap]) || 0 : 0;
      const comm       = iComm >= 0     ? parseFloat(cells[iComm]) || 0 : 0;
      const profit     = iProfit >= 0   ? parseFloat(cells[iProfit]) || 0 : 0;
      const reason     = iReason >= 0   ? cells[iReason] : "";
      if (!sym || !openRaw) continue;
      // Parse ISO datetime: 2026-03-19T13:25:35.306
      const [datePart, timeFull] = openRaw.split("T");
      const timePart = timeFull ? timeFull.split(".")[0] : "00:00:00";
      const entryDate = datePart; // already YYYY-MM-DD
      const h = parseInt(timePart.split(":")[0]);
      const session = h < 7 ? "Asia" : h < 12 ? "London Open" : h < 16 ? "New York" : h < 20 ? "London Mid" : "Out of Session";
      const side = sideRaw === "BUY" ? "Long" : "Short";
      const netProfit = parseFloat((profit + swap + comm).toFixed(2));
      const _mtRaw = [sym, entryDate, timePart, side, String(openPx), String(closePx), String(netProfit)].join("|");
      let _mth = 5381; for (let _i = 0; _i < _mtRaw.length; _i++) _mth = (((_mth << 5) + _mth) ^ _mtRaw.charCodeAt(_i)) >>> 0;
      trades.push({
        id: "mt_" + _mth.toString(36) + "_" + _mtRaw.length,
        symbol: sym, entryDate, entryTime: timePart,
        side, entryPrice: openPx, exitPrice: closePx, stopLoss: sl, takeProfit: tp,
        pnl: 0,
        profit: netProfit,
        status: "Closed", confluences: [], session,
        model: "In Session", emotionBefore: "Calm & Focused",
        emotionAfter: netProfit > 0 ? "Satisfied" : "Lesson Learned",
        mistakes: "None",
        grade: netProfit > 50 ? "A" : netProfit > 0 ? "B" : netProfit > -50 ? "C" : "D",
        expectedRR: "1:2", actualRR: "",
        notes: `Match Trader | Vol:${vol}${reason ? " | " + reason : ""}`,
        riskAmount: 0, tags: ["Match Trader"], accountId: ""
      });
    } catch(e) {}
  }
  return trades;
}

function parseTradovateCSV(csvText) {
  const lines = csvText.trim().split(/\r?\n/);
  if (lines.length < 2) return [];
  const headers = lines[0].split(",").map(h => h.trim().replace(/"/g,"").toLowerCase());
  const trades = [];
  const find = (keys) => { for (const k of keys) { const i = headers.indexOf(k); if (i >= 0) return i; } return -1; };
  const findPartial = (keys) => { for (const k of keys) { const i = headers.findIndex(h => h.includes(k)); if (i >= 0) return i; } return -1; };
  const iSym = find(["symbol","contract"]);
  // Tradovate actual columns: boughtTimestamp, soldTimestamp
  const iDate = find(["boughttimestamp","buy time","entry time","buy datetime","datetime","date"]);
  const iExitDate = find(["soldtimestamp","sell time","exit time","sold datetime"]);
  const iBuyFillId = find(["buyFillId","buyfillid"]);
  const iSellFillId = find(["sellFillId","sellfillid"]);
  // Tradovate actual columns: buyPrice, sellPrice
  const iEntry = find(["buyprice","buy price","entry price","fill price","price"]);
  const iExit = find(["sellprice","sell price","exit price","close price"]);
  const iProfit = find(["pnl","p&l","profit","realized pnl","net pnl","realized p&l"]);
  const iQty = find(["qty","quantity","size","volume"]);
  // Helper: parse Tradovate PnL format: "$162.50" → 162.50, "$(80.00)" → -80.00
  const parsePnl = (s) => {
    if (!s) return 0;
    const isNeg = s.includes("(");
    const num = parseFloat(s.replace(/[^0-9.]/g,"")) || 0;
    return isNeg ? -num : num;
  };
  // Helper: parse "MM/DD/YYYY HH:MM:SS" or ISO date strings
  const parseTradeDate = (s) => {
    if (!s) return { date: "", time: "00:00:00" };
    // Handle MM/DD/YYYY HH:MM:SS
    const mmddyyyy = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})\s+(\d{2}:\d{2}:\d{2})/);
    if (mmddyyyy) {
      const [,mm,dd,yyyy,time] = mmddyyyy;
      return { date: `${yyyy}-${mm.padStart(2,"0")}-${dd.padStart(2,"0")}`, time };
    }
    const d = new Date(s);
    if (!isNaN(d)) {
      return { date: d.toISOString().slice(0,10), time: d.toTimeString().slice(0,8) };
    }
    return { date: s.slice(0,10).replace(/\//g,"-"), time: "00:00:00" };
  };
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(",").map(c => c.trim().replace(/"/g,""));
    if (cols.length < 3) continue;
    try {
      const profit = parsePnl(cols[iProfit]);
      const rawDate = iDate >= 0 ? cols[iDate] : "";
      const { date: entryDate, time: entryTime } = parseTradeDate(rawDate);
      if (!entryDate) continue;
      const symbol = iSym >= 0 ? cols[iSym].replace(/[^A-Z0-9]/gi,"") : "UNKNOWN";
      if (!symbol) continue;
      // Determine side: if buyFillId < sellFillId → bought first → Long; else Short
      let side = "Long";
      if (iBuyFillId >= 0 && iSellFillId >= 0) {
        const buyId = parseInt(cols[iBuyFillId]) || 0;
        const sellId = parseInt(cols[iSellFillId]) || 0;
        side = buyId < sellId ? "Long" : "Short";
      }
      const entryPrice = iEntry >= 0 ? parseFloat(cols[iEntry]) || 0 : 0;
      const exitPrice = iExit >= 0 ? parseFloat(cols[iExit]) || 0 : 0;
      const qty = iQty >= 0 ? parseInt(cols[iQty]) || 1 : 1;
      // Per-symbol round-turn commission (per side × 2) — Tradovate schedule
      const TRAD_COMM = {
        ES:3.50,MES:1.00,NQ:3.50,MNQ:1.00,RTY:3.50,M2K:1.00,
        NKD:3.50,YM:3.50,MYM:1.00,
        A6:4.80,B6:4.80,C6:4.80,E6:4.80,J6:4.80,S6:4.80,N6:4.80,
        CL:4.00,MCL:1.00,QM:4.00,QG:2.60,NG:4.00,
        PL:4.60,HG:5.80,GC:4.60,MGC:1.60,SI:4.60,SIL:3.20,
        HE:5.60,LE:5.60,ZS:5.60,ZC:5.60,ZL:5.60,ZM:5.60,ZW:5.60
      };
      // Strip month/year suffix to get root symbol (e.g. MNQM6 → MNQ)
      const rootSym = symbol.replace(/[A-Z]?\d+$/,"");
      const commPerContract = TRAD_COMM[rootSym] !== undefined ? TRAD_COMM[rootSym] : 5.00;
      const commission = qty * commPerContract;
      const netProfit = parseFloat((profit - commission).toFixed(2));
      const h = parseInt(entryTime);
      const session = h < 7 ? "Asia" : h < 12 ? "London Open" : h < 16 ? "New York" : "Out of Session";
      // Stable fingerprint ID — same trade data always produces the same ID so re-imports deduplicate
      const _fpRaw = [symbol, entryDate, entryTime, side, String(entryPrice), String(exitPrice), String(netProfit)].join("|");
      let _h = 5381;
      for (let _ci = 0; _ci < _fpRaw.length; _ci++) _h = (((_h << 5) + _h) ^ _fpRaw.charCodeAt(_ci)) >>> 0;
      const _stableId = "tv_" + _h.toString(36) + "_" + _fpRaw.length;
      trades.push({
        id: _stableId,
        symbol, entryDate, entryTime, side, entryPrice, exitPrice,
        stopLoss: 0, takeProfit: 0,
        pnl: 0, // calculated dynamically from profit/accountCapital
        profit: netProfit,
        status: "Closed", confluences: [], session,
        model: "In Session", emotionBefore: "Calm & Focused",
        emotionAfter: netProfit > 0 ? "Satisfied" : "Lesson Learned",
        mistakes: "None", grade: netProfit > 50 ? "A" : netProfit > 0 ? "B" : netProfit > -50 ? "C" : "D",
        expectedRR: "1:2", actualRR: "", notes: `Tradovate Import | Comm: -$${commission.toFixed(2)} ($${commPerContract}/ct)`,
        riskAmount: 0, tags: ["Tradovate"], accountId: ""
      });
    } catch(e) {}
  }
  return trades;
}

function parseProjectXCSV(csvText) {
  // Project X / generic futures CSV — same parser but tags as Futures
  const trades = parseTradovateCSV(csvText);
  return trades.map(t => ({ ...t, notes: "Futures Import", tags: ["Futures"] }));
}

// ── TRADEXY JOURNAL CSV IMPORT ──
// Parses the journal's own CSV export format exactly.
// Columns: ID, Symbol, Date, Time, Side, Entry, Exit, P&L%, Net P&L $,
//          Session, Model, Grade, Expected RR, Actual RR,
//          Emotion Before, Emotion After, Mistakes, Confluences, Notes
function parseJournalCSV(csvText) {
  const splitCSVLine = (line) => {
    const out = []; let cur = ""; let inQ = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (c === '"') { inQ = !inQ; continue; }
      if (!inQ && c === ',') { out.push(cur.trim()); cur = ""; continue; }
      cur += c;
    }
    out.push(cur.trim());
    return out;
  };
  const lines = csvText.trim().split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) return [];
  const headers = splitCSVLine(lines[0]).map(h => h.toLowerCase().trim());
  // Check that this looks like a Tradexy export
  const isTradexy = headers.includes("symbol") && headers.includes("date") &&
    (headers.includes("net p&l $") || headers.includes("net p&l") || headers.includes("grade")) &&
    (headers.includes("emotion before") || headers.includes("session"));
  if (!isTradexy) return [];
  const fi = (names) => { for (const n of names) { const i = headers.indexOf(n); if (i >= 0) return i; } return -1; };
  const iID      = fi(["id"]);
  const iSym     = fi(["symbol"]);
  const iDate    = fi(["date"]);
  const iTime    = fi(["time"]);
  const iSide    = fi(["side"]);
  const iEntry   = fi(["entry"]);
  const iExit    = fi(["exit"]);
  const iPct     = fi(["p&l%","p&l %","pnl%"]);
  const iProfit  = fi(["net p&l $","net p&l","profit $","profit"]);
  const iSession = fi(["session"]);
  const iModel   = fi(["model"]);
  const iGrade   = fi(["grade"]);
  const iExpRR   = fi(["expected rr"]);
  const iActRR   = fi(["actual rr"]);
  const iEmoBef  = fi(["emotion before"]);
  const iEmoAft  = fi(["emotion after"]);
  const iMistake = fi(["mistakes"]);
  const iConfl   = fi(["confluences"]);
  const iNotes   = fi(["notes"]);
  const trades = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = splitCSVLine(lines[i]);
    if (cols.length < 3) continue;
    const g = (idx) => idx >= 0 ? (cols[idx] || "").trim() : "";
    const profit = parseFloat(g(iProfit).replace(/[^0-9.\-]/g, "")) || 0;
    const entryDate = g(iDate);
    if (!entryDate || !g(iSym)) continue;
    const confluencesRaw = g(iConfl);
    const confluences = confluencesRaw ? confluencesRaw.split(";").map(c => c.trim()).filter(Boolean) : [];
    // Restore original ID if it looks like a valid integer, else generate new
    const rawId = g(iID);
    const tradeId = rawId && /^\d+$/.test(rawId) ? parseInt(rawId, 10) : Date.now() + i + Math.random();
    trades.push({
      id: tradeId,
      symbol: g(iSym),
      entryDate,
      entryTime: g(iTime) || "00:00:00",
      side: g(iSide) || "Long",
      entryPrice: parseFloat(g(iEntry)) || 0,
      exitPrice: parseFloat(g(iExit)) || 0,
      pnl: parseFloat(g(iPct)) || 0,
      profit,
      session: g(iSession) || "New York",
      model: g(iModel) || "Imported",
      grade: g(iGrade) || "B",
      expectedRR: g(iExpRR) || "1:2",
      actualRR: g(iActRR) || "",
      emotionBefore: g(iEmoBef) || "Neutral",
      emotionAfter: g(iEmoAft) || "Neutral",
      mistakes: g(iMistake) || "None",
      confluences,
      notes: g(iNotes) || "",
      status: "Closed",
      stopLoss: 0, takeProfit: 0, riskAmount: 0,
      tags: ["Tradexy Import"],
      accountId: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  }
  return trades;
}

// ── JSON FULL BACKUP EXPORT ──
function exportJSON(trades) {
  const payload = JSON.stringify(trades, null, 2);
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([payload], { type: "application/json" }));
  a.download = `tradexy_backup_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
}

// ── JSON BACKUP IMPORT ──
function parseJournalJSON(jsonText) {
  let data;
  try { data = JSON.parse(jsonText); } catch(e) { return []; }
  const arr = Array.isArray(data) ? data : (data.trades || []);
  if (!arr.length) return [];
  // Validate that objects look like trades
  const isTradeObj = (t) => t && typeof t === "object" && ("symbol" in t || "entryDate" in t);
  const trades = arr.filter(isTradeObj);
  return trades.map((t, i) => ({
    id: t.id || Date.now() + i + Math.random(),
    symbol: t.symbol || "UNKNOWN",
    entryDate: t.entryDate || "",
    entryTime: t.entryTime || "00:00:00",
    side: t.side || "Long",
    entryPrice: t.entryPrice || 0,
    exitPrice: t.exitPrice || 0,
    pnl: t.pnl || 0,
    profit: t.profit || 0,
    session: t.session || "New York",
    model: t.model || "Imported",
    grade: t.grade || "B",
    expectedRR: t.expectedRR || "1:2",
    actualRR: t.actualRR || "",
    emotionBefore: t.emotionBefore || "Neutral",
    emotionAfter: t.emotionAfter || "Neutral",
    mistakes: t.mistakes || "None",
    confluences: Array.isArray(t.confluences) ? t.confluences : [],
    notes: t.notes || "",
    status: t.status || "Closed",
    stopLoss: t.stopLoss || 0,
    takeProfit: t.takeProfit || 0,
    riskAmount: t.riskAmount || 0,
    tags: Array.isArray(t.tags) ? [...t.tags.filter(x => x !== "Tradexy Import"), "JSON Import"] : ["JSON Import"],
    accountId: t.accountId || "",
    keyLevels: t.keyLevels || [],
    createdAt: t.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }));
}

/* ── Balance Adjustment Panel — MT5 live accounts only, compact ── */
function BalanceAdjustmentPanel({ account, onAddAdjustment, onRemoveAdjustment }) {
  // Only show for non-demo (MT5 live) accounts
  if (account.isDemo) return null;

  const [showForm, setShowForm] = React.useState(false);
  const [adjDate, setAdjDate] = React.useState('');
  const [adjAmount, setAdjAmount] = React.useState('');
  const [adjType, setAdjType] = React.useState('withdrawal'); // 'deposit' | 'withdrawal' | 'writeoff'
  const adjs = account.balanceAdjustments || [];
  const fmt = (n) => '$' + Math.abs(n).toFixed(2);

  const TYPE_CONFIG = {
    deposit:    { label: '💰 Deposit',    sign: '+', color: 'var(--green)', bg: 'var(--gBg)', bdr: 'var(--gBdr)' },
    withdrawal: { label: '🏧 Withdrawal', sign: '-', color: 'var(--red)',   bg: 'var(--rBg)', bdr: 'var(--rBdr)' },
    writeoff:   { label: '⚖️ Write-off',  sign: '+', color: 'var(--orange)', bg: 'var(--oBg)', bdr: 'var(--oBdr)' },
  };

  function handleAdd() {
    const val = parseFloat(adjAmount);
    if (!adjDate || isNaN(val) || val <= 0) return;
    const cfg = TYPE_CONFIG[adjType];
    // deposits & write-offs add to balance (+), withdrawals subtract (-)
    const writeOffAmount = adjType === 'withdrawal' ? -val : val;
    onAddAdjustment(account.id, {
      date: adjDate,
      writeOffAmount,
      type: adjType,
      label: cfg.label
    });
    setAdjDate(''); setAdjAmount(''); setShowForm(false);
  }

  const canSave = adjDate && adjAmount && !isNaN(parseFloat(adjAmount)) && parseFloat(adjAmount) > 0;

  // Get display info for an existing adjustment entry
  function adjDisplay(adj) {
    const amt = adj.writeOffAmount !== undefined ? adj.writeOffAmount : (adj.amount || 0);
    const type = adj.type || (amt >= 0 ? 'writeoff' : 'withdrawal');
    const cfg = TYPE_CONFIG[type] || TYPE_CONFIG.writeoff;
    return { amt, type, cfg };
  }

  return React.createElement('div', { style: { borderTop: '1px solid var(--border)', padding: '5px 13px 7px', background: 'color-mix(in srgb, var(--oBg) 40%, var(--surface))' } },

    // Compact header row — label + existing pills + add button all inline
    React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', minHeight: 24 } },
      React.createElement('span', { style: { fontSize: 9, fontWeight: 700, color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.05em', flexShrink: 0 } }, '💼 Transfers'),

      // Existing adjustment pills
      adjs.map((adj, idx) => {
        const { amt, cfg } = adjDisplay(adj);
        const isPos = amt >= 0;
        return React.createElement('div', { key: idx, style: { display: 'flex', alignItems: 'center', gap: 3, background: cfg.bg, border: `1px solid ${cfg.bdr}`, borderRadius: 20, padding: '1px 6px 1px 7px' } },
          React.createElement('span', { style: { fontSize: 9, color: cfg.color, fontWeight: 600, marginRight: 2 } }, adj.label || (isPos ? '+ Deposit' : '− Withdrawal')),
          React.createElement('span', { style: { fontSize: 10, fontWeight: 700, color: cfg.color, fontVariantNumeric: 'tabular-nums' } }, (isPos ? '+' : '−') + fmt(amt)),
          React.createElement('span', { style: { fontSize: 9, color: 'var(--t3)', marginLeft: 2 } }, adj.date),
          React.createElement('button', { onClick: () => onRemoveAdjustment(account.id, idx), style: { background: 'none', border: 'none', color: 'var(--t3)', cursor: 'pointer', fontSize: 10, padding: '0 0 0 3px', lineHeight: 1 } }, '✕')
        );
      }),

      React.createElement('button', {
        onClick: () => setShowForm(v => !v),
        style: { fontSize: 9, fontWeight: 700, padding: '2px 7px', borderRadius: 20, border: `1px solid ${showForm ? 'var(--border)' : 'var(--oBdr)'}`, background: showForm ? 'var(--s3)' : 'var(--oBg)', color: showForm ? 'var(--t3)' : 'var(--orange)', cursor: 'pointer', flexShrink: 0 }
      }, showForm ? '✕ Cancel' : '+ Add')
    ),

    // Inline form — type selector + date + amount + save
    showForm && React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 6, marginTop: 7, flexWrap: 'wrap', position: 'relative', zIndex: 9999 } },

      // Type selector buttons
      React.createElement('div', { style: { display: 'flex', background: 'var(--s3)', borderRadius: 7, padding: 2, gap: 1, flexShrink: 0 } },
        ['deposit', 'withdrawal', 'writeoff'].map(t => {
          const cfg = TYPE_CONFIG[t];
          const active = adjType === t;
          return React.createElement('button', {
            key: t,
            onClick: () => setAdjType(t),
            title: t === 'deposit' ? 'Money added to account' : t === 'withdrawal' ? 'Money removed from account' : 'Broker debt forgiveness',
            style: {
              padding: '3px 8px', borderRadius: 5, border: 'none', cursor: 'pointer',
              fontWeight: 700, fontSize: 10, lineHeight: 1.2, whiteSpace: 'nowrap',
              background: active ? cfg.color : 'transparent',
              color: active ? '#fff' : 'var(--t3)',
              transition: 'all .12s'
            }
          }, t === 'deposit' ? '+ Deposit' : t === 'withdrawal' ? '− Withdrawal' : '⚖ Write-off');
        })
      ),

      // Date picker
      React.createElement('div', { style: { position: 'relative', zIndex: 9999, flexShrink: 0 } },
        React.createElement(CustomDatePicker, { value: adjDate, onChange: setAdjDate })
      ),

      // Amount input
      React.createElement('input', {
        type: 'number',
        placeholder: '0.00',
        value: adjAmount,
        onChange: e => setAdjAmount(e.target.value),
        onKeyDown: e => { if (e.key === 'Enter') handleAdd(); },
        style: { width: 100, border: '1.5px solid var(--border)', borderRadius: 7, padding: '5px 8px', fontSize: 12, fontWeight: 700, background: 'var(--surface)', color: TYPE_CONFIG[adjType].color, outline: 'none', fontVariantNumeric: 'tabular-nums' }
      }),

      // Save button
      React.createElement('button', {
        onClick: handleAdd,
        disabled: !canSave,
        style: { padding: '5px 12px', borderRadius: 7, border: 'none', background: canSave ? 'linear-gradient(135deg, var(--acc), var(--accD))' : 'var(--s3)', color: canSave ? '#fff' : 'var(--t3)', fontWeight: 700, fontSize: 11, cursor: canSave ? 'pointer' : 'not-allowed' }
      }, '✓ Save')
    )
  );
}

function AccountsPanel({ accounts, onSync, onRemove, onAdd, onAddAdjustment, onRemoveAdjustment, syncingId, onImportToAccount }) {
  const [adding, setAdding] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [mode, setMode] = useState("demo");
  const [creds, setCreds] = useState({ label: "", capital: "", login: "", password: "", server: "", type: "live" });
  const [showPw, setShowPw] = useState(false);
  const [importMode, setImportMode] = useState(false);
  const [importType, setImportType] = useState("mt5html");
  const [importStatus, setImportStatus] = useState(null); // null | {ok, msg}
  const firstDemoId = accounts.find(a => a.isDemo)?.id || "";
  const [targetAccId, setTargetAccId] = useState("");
  const fileRef = React.useRef(null);
  const panelRef = React.useRef(null);
  const isMobile = useMediaQuery("(max-width:768px)");

  // Close expanded/adding/importMode when clicking outside
  React.useEffect(() => {
    if (!expanded && !adding && !importMode) return;
    function handleOutside(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setExpanded(false);
        setAdding(false);
        setImportMode(false);
      }
    }
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('touchstart', handleOutside);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('touchstart', handleOutside);
    };
  }, [expanded, adding, importMode]);
  const mt5CapOk = mode !== "mt5" || (+creds.capital > 0);
  const canAdd = mode === "demo" ? creds.label : (creds.login && creds.password && creds.server && mt5CapOk);
  const inp = { width: "100%", border: "1.5px solid var(--border)", borderRadius: 9, padding: "9px 12px", fontSize: 13, outline: "none", background: "var(--s2)", color: "var(--text)", boxSizing: "border-box", fontFamily: "inherit" };

  const handleAdd = () => {
    if (!canAdd) return;
    if (mode === "demo") {
      onAdd({ label: creds.label || "Demo Account", capital: +creds.capital || 1e4, isDemo: true, login: "demo", password: "demo", server: "demo", type: "demo" });
    } else {
      if (!creds.capital || +creds.capital <= 0) { alert("Enter starting capital for MT5 account"); return; }
      onAdd({ label: creds.label || `Account #${creds.login}`, capital: +creds.capital, isDemo: false, login: creds.login, password: creds.password, server: creds.server, type: creds.type });
    }
    setCreds({ label: "", capital: mode === "demo" ? "10000" : "", login: "", password: "", server: "", type: "live" });
    setAdding(false);
    setExpanded(false);
  };

  const handleImportFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImportStatus(null);
    const text = await file.text();
    let parsed = [];
    try {
      if (importType === "mt5html") parsed = parseMT5Html(text);
      else if (importType === "matchtrader") parsed = parseMatchTraderCSV(text);
      else if (importType === "tradovate") parsed = parseTradovateCSV(text);
      else if (importType === "futures") parsed = parseProjectXCSV(text);
      else if (importType === "tradexy") parsed = parseJournalCSV(text);
      else if (importType === "json") parsed = parseJournalJSON(text);
    } catch(err) {
      setImportStatus({ ok: false, msg: "Parse error: " + err.message });
      return;
    }
    // Tradexy CSV and JSON backups keep ALL trades (including $0 PnL); other brokers skip zero-PnL
    const isFullFidelity = importType === "tradexy" || importType === "json";
    const valid = isFullFidelity
      ? parsed.filter(t => t && t.symbol && t.entryDate)
      : parsed.filter(t => typeof t.profit === "number" && t.profit !== 0 && !isNaN(t.profit));
    if (!valid.length) {
      setImportStatus({ ok: false, msg: isFullFidelity
        ? "No trades found. Make sure you are uploading a Tradexy CSV or JSON export."
        : "No valid trades found. Check file format and that trades have non-zero PnL." });
      return;
    }
    // Account selection is mandatory
    const effectiveAccId = targetAccId || firstDemoId;
    if (!effectiveAccId) {
      setImportStatus({ ok: false, msg: "Please select an account to import trades into." });
      return;
    }
    // Determine target account
    const targetAcc = accounts.find(a => a.id === effectiveAccId);
    if (targetAcc && !targetAcc.isDemo) {
      setImportStatus({ ok: false, msg: `⚠️ "${targetAcc.label}" is a live MT5 account — create a Demo account first, then import trades into it.` });
      return;
    }
    // Tag trades with accountId and full-fidelity marker for smart merge
    const tagged = valid.map(t => ({ ...t, accountId: effectiveAccId, _importType: isFullFidelity ? "full" : "broker" }));
    onImportToAccount(tagged, effectiveAccId);
    const skipped = parsed.length - valid.length;
    setImportStatus({ ok: true, msg: `✓ ${tagged.length} trades processed (duplicates merged, manual data preserved)${skipped > 0 ? ` · ${skipped} skipped (zero PnL)` : ""}.` });
    if (fileRef.current) fileRef.current.value = "";
  };

  const liveCount = accounts.filter((a) => a.connected).length;
  const hasAccounts = accounts.length > 0;
  const demoAccounts = accounts.filter(a => a.isDemo);

  return React.createElement("div", { ref: panelRef, "data-tour": "accounts-panel", style: { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, marginBottom: 16, boxShadow: "var(--sh1)" } },
    /* Header row */
    React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, padding: "10px 16px", cursor: hasAccounts ? "pointer" : "default" }, onClick: hasAccounts ? () => setExpanded((v) => !v) : undefined },
      React.createElement("div", { style: { width: 30, height: 30, borderRadius: 9, background: "linear-gradient(135deg,var(--accF),var(--s3))", border: "1.5px solid color-mix(in srgb, var(--acc) 25%, transparent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 } }, "\u21CC"),
      React.createElement("div", { style: { flex: 1, minWidth: 0 } },
        React.createElement("div", { style: { fontSize: 12.5, fontWeight: 700, color: "var(--text)", display: "flex", alignItems: "center", gap: 7 } },
          "Trading Accounts",
          hasAccounts && React.createElement("span", { className: "acct-badge", style: { background: "var(--accF)", color: "var(--accD)", border: "1px solid color-mix(in srgb, var(--acc) 30%, transparent)", borderRadius: 20, padding: "1px 8px", fontSize: 10, fontWeight: 700 } }, accounts.length),
          liveCount > 0 && React.createElement("span", { className: "acct-badge", style: { background: "var(--gBg)", color: "var(--green)", border: "1px solid var(--gBdr)", borderRadius: 20, padding: "1px 8px", fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", gap: 4 } }, React.createElement("span", { style: { width: 5, height: 5, borderRadius: "50%", background: "var(--green)", display: "inline-block", animation: "pulse 2s infinite" } }), liveCount, " live")
        ),
        !hasAccounts && React.createElement("div", { style: { fontSize: 10, color: "var(--t3)", marginTop: 1 } }, "No accounts yet")
      ),
      !expanded && hasAccounts && React.createElement("div", { style: { display: "flex", gap: 4, alignItems: "center", flexWrap: "nowrap", overflow: "hidden", maxWidth: 200 } },
        accounts.slice(0, 3).map((acc, i) => React.createElement("span", { key: acc.id, className: "acct-badge", style: { background: "var(--s2)", border: `1px solid ${ACC_COLS[i % ACC_COLS.length]}50`, borderRadius: 20, padding: "2px 8px", fontSize: 10, fontWeight: 600, color: ACC_COLS[i % ACC_COLS.length], whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: 80 } }, acc.label)),
        accounts.length > 3 && React.createElement("span", { style: { fontSize: 10, color: "var(--t3)", fontWeight: 600 } }, "+", accounts.length - 3)
      ),
      /* Action buttons */
      React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6 }, onClick: (e) => e.stopPropagation() },
        React.createElement("button", {
          onClick: () => { setAdding((a) => !a); setImportMode(false); setExpanded(true); },
          style: { background: adding ? "var(--s3)" : "linear-gradient(135deg,var(--acc),var(--accD))", color: adding ? "var(--t2)" : "#fff", border: `1px solid ${adding ? "var(--border)" : "transparent"}`, borderRadius: 8, padding: "5px 12px", fontWeight: 700, fontSize: 11, cursor: "pointer", display: "flex", alignItems: "center", gap: 5, boxShadow: adding ? "none" : "0 2px 8px color-mix(in srgb, var(--acc) 35%, transparent)", transition: "all .15s" }
        }, adding ? "\u2715 Close" : "+ Add"),
        React.createElement("button", {
          onClick: (e) => { e.stopPropagation(); setImportMode((v) => !v); setAdding(false); setExpanded(true); setImportStatus(null); },
          style: { background: importMode ? "var(--bBg)" : "var(--s2)", color: importMode ? "var(--blue)" : "var(--t2)", border: `1px solid ${importMode ? "var(--bBdr)" : "var(--border)"}`, borderRadius: 8, padding: "5px 11px", fontWeight: 700, fontSize: 11, cursor: "pointer", display: "flex", alignItems: "center", gap: 4, transition: "all .15s" },
          title: "Import Trades from MT5 / Tradovate / Futures"
        }, "\u2197 Import"),
        hasAccounts && React.createElement("button", { onClick: (e) => { e.stopPropagation(); setExpanded((v) => !v); }, style: { background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 7, width: 26, height: 26, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--t3)", transition: "all .15s", flexShrink: 0 } },
          React.createElement("svg", { width: "10", height: "10", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", style: { transform: expanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform .2s" } },
            React.createElement("polyline", { points: "6 9 12 15 18 9" })
          )
        )
      )
    ),

    /* Expanded accounts list */
    expanded && hasAccounts && React.createElement("div", { style: { borderTop: "1px solid var(--border)", padding: "10px 16px", display: "flex", flexDirection: "column", gap: 8 } },
      accounts.map((acc, i) => {
        const col = ACC_COLS[i % ACC_COLS.length];
        const isSyncing = syncingId === acc.id;
        const tb = calcTrueBalance(acc);
        const adjs = acc.balanceAdjustments || [];
        return React.createElement("div", { key: acc.id, style: { background: "var(--s2)", border: `1px solid ${acc.connected ? "var(--gBdr)" : "var(--border)"}`, borderRadius: 10 } },
          // Account row
          React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, padding: "9px 13px", flexWrap: "wrap" } },
            React.createElement("span", { style: { width: 8, height: 8, borderRadius: "50%", background: col, flexShrink: 0, boxShadow: `0 0 0 2px ${col}25` } }),
            React.createElement("div", { style: { flex: 1, minWidth: 0 } },
              React.createElement("div", { style: { fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" } }, acc.label, acc.isDemo && React.createElement(Chip, { color: "purple", size: "sm" }, "DEMO"), acc.connected && !acc.isDemo && React.createElement(Chip, { color: "truegreen", size: "sm" }, "\u25CF LIVE")),
              React.createElement("div", { style: { fontSize: 10, color: "var(--t3)", marginTop: 1 } },
                acc.isDemo
                  ? `Capital: ${fmtUSD(acc.capital || 1e4, false)} · ${acc.trades ? acc.trades.length : 0} trades`
                  : `#${acc.login} · ${acc.server}`,
                acc.lastSync && ` · synced ${acc.lastSync}`,
                adjs.length > 0 && React.createElement("span", { style: { color: "var(--orange)", fontWeight: 700, marginLeft: 4 } }, `· ${adjs.length} transfer${adjs.length > 1 ? 's' : ''}`)
              )
            ),
            !acc.isDemo && React.createElement("button", { onClick: () => onSync(acc), disabled: isSyncing, style: { background: isSyncing ? "var(--s3)" : col, color: "#fff", border: "none", borderRadius: 7, padding: "5px 11px", fontWeight: 700, fontSize: 10, cursor: isSyncing ? "not-allowed" : "pointer", display: "flex", alignItems: "center", gap: 4, opacity: isSyncing ? 0.65 : 1 } },
              React.createElement("span", { style: { display: "inline-block", animation: isSyncing ? "spin 1s linear infinite" : "none" } }, "\u27F3"),
              isSyncing ? "Syncing" : "Sync"
            ),
            React.createElement("button", { onClick: () => onRemove(acc.id), style: { background: "none", border: "1px solid var(--border)", color: "var(--t3)", cursor: "pointer", fontSize: 11, padding: "4px 8px", borderRadius: 6 }, onMouseEnter: (e) => { e.currentTarget.style.borderColor = "var(--red)"; e.currentTarget.style.color = "var(--red)"; }, onMouseLeave: (e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--t3)"; } }, "\u2715")
          ),

          // ── Balance Adjustment section ──
          React.createElement(BalanceAdjustmentPanel, {
            account: acc,
            onUpdate: onAdd ? null : null, // passed via onAddAdjustment below
            onAddAdjustment,
            onRemoveAdjustment
          })
        );
      })
    ),

    /* ── IMPORT PANEL ── */
    importMode && React.createElement("div", { style: { padding: "16px 18px", borderTop: "1px solid var(--border)", background: "var(--s2)", borderBottomLeftRadius: 14, borderBottomRightRadius: 14, animation: "fadeUp .2s ease" } },
      /* Header */
      React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 14 } },
        React.createElement("div", { style: { width: 28, height: 28, borderRadius: 8, background: "var(--bBg)", border: "1px solid var(--bBdr)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 } }, "\u2197"),
        React.createElement("div", null,
          React.createElement("div", { style: { fontSize: 12, fontWeight: 700, color: "var(--text)" } }, "Import Trade History"),
          React.createElement("div", { style: { fontSize: 10, color: "var(--t3)" } }, "MT5 Report \u00B7 Tradovate CSV \u00B7 Futures / Project X CSV")
        )
      ),

      /* Source type selector */
      React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" } }, "Source Format"),
      React.createElement("div", { style: { display: "flex", gap: 6, marginBottom: 14, flexWrap: "wrap" } },
        [
          { id: "mt5html", label: "\uD83D\uDCE1 MT5 HTML Report", desc: ".html from MetaTrader 5 Account History" },
          { id: "matchtrader", label: "\uD83D\uDCCA Match Trader CSV", desc: ".csv Closed Positions from Match Trader" },
          { id: "tradovate", label: "\uD83D\uDCCA Tradovate CSV", desc: ".csv from Tradovate Trade History" },
          { id: "futures", label: "\u26A1 Futures / Project X", desc: ".csv from any futures platform" },
          { id: "tradexy", label: "\uD83D\uDDD2 Tradexy CSV", desc: ".csv exported from this journal" },
          { id: "json", label: "\uD83D\uDCBE JSON Backup", desc: ".json full backup exported from this journal" },
        ].map(opt =>
          React.createElement("button", { key: opt.id, onClick: () => { setImportType(opt.id); setImportStatus(null); },
            title: opt.desc,
            style: { padding: "6px 12px", borderRadius: 9, border: `1.5px solid ${importType === opt.id ? "var(--blue)" : "var(--border)"}`, background: importType === opt.id ? "var(--bBg)" : "var(--surface)", color: importType === opt.id ? "var(--blue)" : "var(--t2)", fontWeight: 700, fontSize: 11, cursor: "pointer", transition: "all .15s" } },
            opt.label
          )
        )
      ),

      /* Target account selector */
      React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" } }, "Import Into Account"),
      hasAccounts
        ? React.createElement("div", { style: { marginBottom: 14 } },
            /* Check for live accounts — warn */
            accounts.some(a => !a.isDemo) && React.createElement("div", { style: { background: "var(--oBg)", border: "1px solid var(--oBdr)", borderRadius: 9, padding: "9px 12px", marginBottom: 10, fontSize: 11, color: "var(--orange)", fontWeight: 600, display: "flex", gap: 8, alignItems: "flex-start" } },
              React.createElement("span", { style: { fontSize: 14 } }, "\u26A0\uFE0F"),
              React.createElement("div", null, "Live MT5 accounts cannot receive imported trades. ",
                React.createElement("b", null, "Please select a Demo account"), " or create a new Demo account first.")
            ),
            React.createElement("select", {
              value: targetAccId || firstDemoId,
              onChange: (e) => setTargetAccId(e.target.value),
              style: { ...inp, marginBottom: 0 }
            },
              React.createElement("option", { value: "", disabled: true }, "— Select an account —"),
              ...accounts.map(a =>
                React.createElement("option", { key: a.id, value: a.id, disabled: !a.isDemo },
                  `${a.label}${a.isDemo ? " (Demo)" : " ⛔ Live — cannot import"}`)
              )
            )
          )
        : React.createElement("div", { style: { background: "var(--rBg)", border: "1px solid var(--rBdr)", borderRadius: 9, padding: "9px 12px", marginBottom: 14, fontSize: 11, color: "var(--red)", fontWeight: 600, display: "flex", gap: 8, alignItems: "flex-start" } },
            React.createElement("span", { style: { fontSize: 14 } }, "\u26A0\uFE0F"),
            React.createElement("div", null, "You must add an account before importing. ", React.createElement("b", null, "Click \u201C+ Add\u201D above"), " to create a Demo account first, then come back to import.")
          ),

      /* File upload */
      React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" } },
        importType === "mt5html" ? "Upload MT5 Trade History HTML" : importType === "matchtrader" ? "Upload Match Trader CSV" : importType === "tradovate" ? "Upload Tradovate CSV" : importType === "tradexy" ? "Upload Tradexy Journal CSV" : importType === "json" ? "Upload Tradexy JSON Backup" : "Upload Futures CSV"
      ),
      React.createElement("div", { style: { border: "2px dashed var(--border2)", borderRadius: 10, padding: "16px", textAlign: "center", background: "var(--surface)", marginBottom: 12, cursor: "pointer", transition: "border-color .15s" },
        onClick: () => fileRef.current && fileRef.current.click(),
        onDragOver: (e) => { e.preventDefault(); e.currentTarget.style.borderColor = "var(--blue)"; },
        onDragLeave: (e) => { e.currentTarget.style.borderColor = "var(--border2)"; },
        onDrop: (e) => {
          e.preventDefault(); e.currentTarget.style.borderColor = "var(--border2)";
          const f = e.dataTransfer.files[0];
          if (f && fileRef.current) { const dt = new DataTransfer(); dt.items.add(f); fileRef.current.files = dt.files; handleImportFile({ target: fileRef.current }); }
        }
      },
        React.createElement("div", { style: { fontSize: 20, marginBottom: 6 } }, importType === "mt5html" ? "\uD83D\uDCC4" : importType === "json" ? "\uD83D\uDCBE" : importType === "tradexy" ? "\uD83D\uDDD2" : "\uD83D\uDCCA"),
        React.createElement("div", { style: { fontSize: 12, fontWeight: 600, color: "var(--t2)" } }, "Click or drag & drop file here"),
        React.createElement("div", { style: { fontSize: 10, color: "var(--t3)", marginTop: 4 } },
          importType === "mt5html" ? "MetaTrader 5 → Account History → Save as HTML" :
          importType === "matchtrader" ? "Match Trader → Closed Positions tab → Export CSV" :
          importType === "tradovate" ? "Tradovate → Performance → Trade History → Export CSV" :
          importType === "tradexy" ? "Trade Log → ↓ CSV button — re-import your own journal export" :
          importType === "json" ? "Trade Log → ↓ JSON button — full backup with all fields preserved" :
          "Project X / NinjaTrader → Export Trades as CSV"
        )
      ),
      React.createElement("input", { ref: fileRef, type: "file", accept: importType === "mt5html" ? ".html,.htm" : importType === "json" ? ".json" : ".csv", style: { display: "none" }, onChange: handleImportFile }),

      /* Format tips */
      React.createElement("div", { style: { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 9, padding: "10px 12px", marginBottom: 12, fontSize: 10, color: "var(--t3)", lineHeight: 1.7 } },
        React.createElement("b", { style: { color: "var(--text)", display: "block", marginBottom: 4 } }, "\uD83D\uDCA1 Rules"),
        React.createElement("div", null, "\u2022 Only trades with non-zero PnL are imported (except Tradexy CSV & JSON — all trades kept)"),
        React.createElement("div", null, "\u2022 Live MT5 accounts are protected — import into Demo only"),
        importType === "mt5html" && React.createElement("div", null, "\u2022 MT5: Go to History tab \u2192 right-click \u2192 Save as HTML Report"),
        importType === "matchtrader" && React.createElement("div", null, "\u2022 Match Trader: Closed Positions tab \u2192 Export CSV (includes ID, Symbol, Volume, Side, prices, Commission, Profit)"),
        importType === "tradexy" && React.createElement("div", null, "\u2022 Tradexy CSV: exported from Trade Log using the \u2193 CSV button"),
        importType === "json" && React.createElement("div", null, "\u2022 JSON Backup: exported from Trade Log using the \u2193 JSON button — all fields fully restored")
      ),

      /* Status message */
      importStatus && React.createElement("div", { style: { background: importStatus.ok ? "var(--gBg)" : "var(--rBg)", border: `1px solid ${importStatus.ok ? "var(--gBdr)" : "var(--rBdr)"}`, borderRadius: 9, padding: "10px 14px", fontSize: 12, fontWeight: 600, color: importStatus.ok ? "var(--green)" : "var(--red)", animation: "fadeUp .2s ease" } },
        importStatus.msg
      )
    ),

    /* ── ADD ACCOUNT FORM ── */
    adding && React.createElement("div", { style: { padding: "16px", borderTop: "1px solid var(--border)", background: "var(--s2)", borderBottomLeftRadius: 14, borderBottomRightRadius: 14 } },
      React.createElement("div", { style: { display: "flex", gap: 8, marginBottom: 16 } },
        React.createElement("button", { onClick: () => setMode("demo"), style: { padding: "6px 14px", borderRadius: 10, border: `1.5px solid ${mode === "demo" ? "var(--purple)" : "var(--border)"}`, background: mode === "demo" ? "var(--pBg)" : "var(--surface)", color: mode === "demo" ? "var(--purple)" : "var(--t2)", fontWeight: 700, fontSize: 12, cursor: "pointer" } }, "\uD83C\uDFAE Demo Account"),
        React.createElement("button", { onClick: () => setMode("mt5"), style: { padding: "6px 14px", borderRadius: 10, border: `1.5px solid ${mode === "mt5" ? "var(--acc)" : "var(--border)"}`, background: mode === "mt5" ? "var(--accF)" : "var(--surface)", color: mode === "mt5" ? "var(--accD)" : "var(--t2)", fontWeight: 700, fontSize: 12, cursor: "pointer" } }, "\uD83D\uDCE1 MT5 Account")
      ),
      React.createElement("div", { style: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 10, marginBottom: 12 } },
        React.createElement("div", null, React.createElement("div", { style: { fontSize: 10, fontWeight: 500, color: "var(--t3)", marginBottom: 5 } }, "Account Label"), React.createElement("input", { placeholder: "e.g. Prop Firm — Phase 1", value: creds.label, onChange: (e) => setCreds((c) => __spreadProps(__spreadValues({}, c), { label: e.target.value })), style: inp })),
        React.createElement("div", null, React.createElement("div", { style: { fontSize: 10, fontWeight: 500, color: "var(--t3)", marginBottom: 5 } }, "Starting Capital ($)"), React.createElement("input", { type: "number", placeholder: mode === "mt5" ? "Required — e.g. 10000" : "e.g. 10000", value: creds.capital, onChange: (e) => setCreds((c) => __spreadProps(__spreadValues({}, c), { capital: e.target.value })), style: mode === "mt5" ? {...inp, borderColor: +creds.capital > 0 ? "var(--border)" : "color-mix(in srgb, var(--acc) 60%, transparent)"} : inp })),
        mode === "mt5" && React.createElement(React.Fragment, null,
          React.createElement("div", null, React.createElement("div", { style: { fontSize: 10, fontWeight: 500, color: "var(--t3)", marginBottom: 5 } }, "Login ID"), React.createElement("input", { placeholder: "12345678", value: creds.login, onChange: (e) => setCreds((c) => __spreadProps(__spreadValues({}, c), { login: e.target.value })), style: inp })),
          React.createElement("div", { style: { position: "relative" } }, React.createElement("div", { style: { fontSize: 10, fontWeight: 500, color: "var(--t3)", marginBottom: 5 } }, "Investor Password"), React.createElement("input", { type: showPw ? "text" : "password", placeholder: "Read-only password", value: creds.password, onChange: (e) => setCreds((c) => __spreadProps(__spreadValues({}, c), { password: e.target.value })), style: { ...inp, paddingRight: 36 } }), React.createElement("button", { type: "button", onClick: () => setShowPw((s) => !s), style: { position: "absolute", right: 10, top: 30, background: "none", border: "none", cursor: "pointer", color: "var(--t3)", fontSize: 13 } }, showPw ? "\u25CF" : "\u25CB")),
          React.createElement("div", { style: { gridColumn: "1/-1" } }, React.createElement("div", { style: { fontSize: 10, fontWeight: 500, color: "var(--t3)", marginBottom: 5 } }, "Server"), React.createElement("input", { placeholder: "Broker-Server", value: creds.server, onChange: (e) => setCreds((c) => __spreadProps(__spreadValues({}, c), { server: e.target.value })), style: inp }))
        )
      ),
      React.createElement("button", { onClick: handleAdd, disabled: !canAdd, style: { background: canAdd ? "linear-gradient(135deg,var(--acc),var(--accD))" : "var(--s3)", color: canAdd ? "#fff" : "var(--t3)", border: "none", borderRadius: 10, padding: "10px 22px", fontWeight: 600, fontSize: 12, cursor: canAdd ? "pointer" : "not-allowed", boxShadow: canAdd ? "0 3px 12px color-mix(in srgb, var(--acc) 40%, transparent)" : "none" } }, mode === "demo" ? "\u2713 Create Demo Account" : "\u27F3 Add & Sync MT5"),
      mode === "mt5" && React.createElement("span", { style: { fontSize: 11, color: "var(--t3)", marginLeft: 12 } }, "Use investor (read-only) password")
    )
  );
}
function DateRangeBar({ trades, dateRange, setDateRange, capital }) {
  const cap = (capital && capital > 0) ? capital : 5000;
  const [mode, setMode] = useState("all");
  const today = /* @__PURE__ */ new Date();
  const apply = (m, from, to) => {
    setMode(m);
    setDateRange({ from, to });
  };
  const presets = [
    { id: "all", label: "All", fn: () => apply("all", null, null) },
    { id: "thisweek", label: "This Week", fn: () => {
      const mon = new Date(today);
      mon.setDate(today.getDate() - (today.getDay() + 6) % 7);
      const sun = new Date(mon);
      sun.setDate(mon.getDate() + 6);
      apply("thisweek", mon.toISOString().slice(0, 10), sun.toISOString().slice(0, 10));
    } },
    { id: "thismonth", label: "Month", fn: () => {
      const y = today.getFullYear(), m = today.getMonth();
      const last = new Date(y, m + 1, 0);
      apply("thismonth", `${y}-${String(m + 1).padStart(2, "0")}-01`, last.toISOString().slice(0, 10));
    } },
    { id: "30d", label: "30 Days", fn: () => {
      const from = new Date(today);
      from.setDate(from.getDate() - 30);
      apply("30d", from.toISOString().slice(0, 10), today.toISOString().slice(0, 10));
    } }
  ];
  const filtered = dateRange.from || dateRange.to ? trades.filter((t) => (!dateRange.from || t.entryDate >= dateRange.from) && (!dateRange.to || t.entryDate <= dateRange.to)) : trades;
  const totalP = filtered.reduce((s, t) => s + (t.profit || 0), 0);
  const totalPnl = calcPnL(totalP, cap);
  return /* @__PURE__ */ React.createElement("div", { style: { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 13, padding: "11px 16px", marginBottom: 16, display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" } }, presets.map((p) => /* @__PURE__ */ React.createElement("button", { key: p.id, onClick: p.fn, style: { padding: "5px 14px", borderRadius: 20, border: `1.5px solid ${mode === p.id ? "var(--acc)" : "var(--border)"}`, background: mode === p.id ? "var(--accF)" : "var(--surface)", color: mode === p.id ? "var(--accD)" : "var(--t2)", fontWeight: mode === p.id ? 700 : 500, fontSize: 12, cursor: "pointer" } }, p.label)), /* @__PURE__ */ React.createElement("div", { style: { marginLeft: "auto", display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement(CustomDatePicker, { value: dateRange.from || "", onChange: (v) => setDateRange((r) => __spreadProps(__spreadValues({}, r), { from: v || null })) }), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--t3)", fontSize: 14 } }, "\u2192"), /* @__PURE__ */ React.createElement(CustomDatePicker, { value: dateRange.to || "", onChange: (v) => setDateRange((r) => __spreadProps(__spreadValues({}, r), { to: v || null })) }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, fontWeight: 700, color: totalP >= 0 ? "var(--accD)" : "var(--t2)" } }, totalP !== 0 ? (totalP >= 0 ? "+$" : "-$") + Math.abs(totalP).toFixed(0) + " \xB7 " : "", fmtPct(totalPnl, 2), " \xB7 ", filtered.length, " trades")));
}
function MiniCalendarWidget({ trades, ic, capital: propCapital }) {
  const capital = (propCapital && propCapital > 0) ? propCapital : (ic && ic > 0 ? ic : 5000);
  const now = new Date();
  const [calYear, setCalYear] = useState(now.getFullYear());
  const [calMonth, setCalMonth] = useState(now.getMonth());
  const [showUSD, setShowUSD] = useState(true);
  const [dayPopup, setDayPopup] = useState(null);

  const MN = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const DOW_MINI = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

  const byDate = {};
  trades.forEach((t) => {
    const parts = t.entryDate.split("-").map(Number);
    if (parts[0] === calYear && parts[1] - 1 === calMonth) {
      if (!byDate[t.entryDate]) byDate[t.entryDate] = { profit: 0, count: 0, trades: [] };
      byDate[t.entryDate].profit += t.profit || 0;
      byDate[t.entryDate].count++;
      byDate[t.entryDate].trades.push(t);
    }
  });
  Object.keys(byDate).forEach((d) => { byDate[d].pnl = calcPnL(byDate[d].profit, capital); });
  const maxP = Math.max(...Object.values(byDate).map((d) => Math.abs(d.profit)).concat([1]));

  const first = new Date(calYear, calMonth, 1).getDay();
  const days = new Date(calYear, calMonth + 1, 0).getDate();
  const cells = Array(first).fill(null).concat(Array.from({ length: days }, (_, i) => i + 1));
  const dk = (d) => calYear + "-" + String(calMonth + 1).padStart(2,"0") + "-" + String(d).padStart(2,"0");
  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
  const weekStats = weeks.map((w) => {
    const p = w.filter(Boolean).reduce((s, d) => s + ((byDate[dk(d)] && byDate[dk(d)].profit) || 0), 0);
    return { profit: p, pnl: calcPnL(p, capital), count: w.filter(Boolean).reduce((s, d) => s + ((byDate[dk(d)] && byDate[dk(d)].count) || 0), 0) };
  });
  const mProfit = Object.values(byDate).reduce((s, v) => s + v.profit, 0);
  const mPnl = calcPnL(mProfit, capital);
  const mCount = Object.values(byDate).reduce((s, v) => s + v.count, 0);
  const todayStr = now.toISOString().slice(0, 10);

  const prevMonth = () => {
    if (calMonth === 0) { setCalYear(y => y - 1); setCalMonth(11); }
    else setCalMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (calMonth === 11) { setCalYear(y => y + 1); setCalMonth(0); }
    else setCalMonth(m => m + 1);
  };
  const isCurrentMonth = calYear === now.getFullYear() && calMonth === now.getMonth();

  const btnStyle = { background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 7, width: 24, height: 24, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t3)", fontSize: 12, padding: 0 };

  return React.createElement("div", { style: { marginTop: 16, borderTop: "1px solid var(--border)", paddingTop: 16 } },
    /* Header row */
    React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10, gap: 8 } },
      /* Left: nav + title */
      React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6 } },
        React.createElement("button", { style: btnStyle, onClick: prevMonth }, "‹"),
        React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: "var(--text)", letterSpacing: "-.2px", minWidth: 90, textAlign: "center" } }, MN[calMonth], " ", calYear),
        React.createElement("button", { style: { ...btnStyle, opacity: isCurrentMonth ? 0.35 : 1 }, onClick: isCurrentMonth ? null : nextMonth, disabled: isCurrentMonth }, "›"),
        mCount > 0 && React.createElement("span", { style: { background: "var(--s3)", border: "1px solid var(--border)", borderRadius: 20, padding: "1px 8px", fontSize: 9.5, fontWeight: 700, color: "var(--t3)", marginLeft: 4 } }, mCount, " trades")
      ),
      /* Right: $ / % toggle + monthly total */
      React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6 } },
        React.createElement("div", { style: { display: "flex", background: "var(--s3)", borderRadius: 8, padding: 2, gap: 2 } },
          React.createElement("button", { onClick: () => setShowUSD(false), style: { padding: "2px 9px", borderRadius: 6, border: "none", background: !showUSD ? "var(--surface)" : "transparent", color: !showUSD ? "var(--accD)" : "var(--t3)", fontWeight: !showUSD ? 700 : 500, fontSize: 10.5, cursor: "pointer", boxShadow: !showUSD ? "var(--sh1)" : "none", transition: "all .15s" } }, "%"),
          React.createElement("button", { onClick: () => setShowUSD(true), style: { padding: "2px 9px", borderRadius: 6, border: "none", background: showUSD ? "var(--surface)" : "transparent", color: showUSD ? "var(--accD)" : "var(--t3)", fontWeight: showUSD ? 700 : 500, fontSize: 10.5, cursor: "pointer", boxShadow: showUSD ? "var(--sh1)" : "none", transition: "all .15s" } }, "$")
        ),
        React.createElement("div", { style: { background: mProfit >= 0 ? "var(--accF)" : "var(--s3)", border: `1px solid ${mProfit >= 0 ? "color-mix(in srgb, var(--acc) 30%, transparent)" : "var(--border)"}`, borderRadius: 8, padding: "3px 10px" } },
          React.createElement("span", { style: { fontSize: 11, fontWeight: 700, color: mProfit >= 0 ? "var(--accD)" : "var(--t2)" } },
            showUSD
              ? (mProfit >= 0 ? "+$" : "-$") + Math.abs(mProfit).toFixed(0)
              : (mPnl >= 0 ? "+" : "") + mPnl.toFixed(1) + "%"
          )
        )
      )
    ),
    /* Day-of-week headers */
    React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(7,1fr) 52px", gap: 3, marginBottom: 3 } },
      DOW_MINI.map((d) => React.createElement("div", { key: d, style: { textAlign: "center", fontSize: 8.5, color: "var(--t3)", fontWeight: 600, padding: "3px 0" } }, d)),
      React.createElement("div", { style: { textAlign: "center", fontSize: 8.5, color: "var(--t3)", fontWeight: 600, padding: "3px 0" } }, "WEEK")
    ),
    /* Weeks grid */
    React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 3 } },
      weeks.map((week, wi) =>
        React.createElement("div", { key: wi, style: { display: "grid", gridTemplateColumns: "repeat(7,1fr) 52px", gap: 3 } },
          [...Array(7)].map((_, ci) => {
            const d = week[ci];
            if (!d) return React.createElement("div", { key: "e" + ci, style: { borderRadius: 7, minHeight: 44 } });
            const dateKey = dk(d);
            const data = byDate[dateKey];
            const p = (data && data.profit) || 0;
            const pct = (data && data.pnl) || 0;
            const has = !!data;
            const intensity = has ? Math.min(1, Math.abs(p) / maxP * 2) : 0;
            const bg = !has ? "var(--surface)" : p >= 0
              ? "color-mix(in srgb, var(--acc) " + Math.round((0.07 + intensity * 0.22) * 100) + "%, var(--surface))"
              : "rgba(148,163,184," + (0.1 + intensity * 0.2) + ")";
            const bdr = !has ? "var(--border)" : p >= 0 ? "color-mix(in srgb, var(--acc) 30%, transparent)" : "var(--border2)";
            const isToday = dateKey === todayStr;
            const displayVal = has ? (showUSD
              ? (p >= 0 ? "+$" : "-$") + Math.abs(p).toFixed(0)
              : (p >= 0 ? "+" : "") + pct.toFixed(1) + "%"
            ) : null;
            return React.createElement("div", {
              key: dateKey,
              className: "cal-cell",
              style: { background: bg, border: "1.5px solid " + (isToday ? "var(--indigo)" : bdr), borderRadius: 7, padding: "5px 5px 4px", minHeight: 44, cursor: has ? "pointer" : "default", transition: "transform .12s,box-shadow .12s", boxShadow: isToday ? "0 0 0 1px var(--indigo)" : "none", position: "relative" },
              onClick: has ? (e) => { e.currentTarget.blur(); setDayPopup({ dateKey, data }); } : null, tabIndex: -1,
              onMouseEnter: (e) => { if (has) { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "var(--sh2)"; } },
              onMouseLeave: (e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = isToday ? "0 0 0 1px var(--indigo)" : "none"; }
            },
              React.createElement("div", { style: { fontSize: 9, fontWeight: isToday ? 900 : 700, color: isToday ? "var(--indigo)" : "var(--t3)", marginBottom: 2 } }, d),
              has && React.createElement(React.Fragment, null,
                React.createElement("div", { style: { fontSize: 9.5, fontWeight: 700, color: p >= 0 ? "var(--accD)" : "var(--t2)", lineHeight: 1.1, letterSpacing: "-.3px" } }, displayVal),
                React.createElement("div", { style: { fontSize: 8, color: "var(--t3)", marginTop: 2, fontWeight: 600 } }, data.count, data.count === 1 ? " trade" : " trades")
              )
            );
          }),
          /* Week summary */
          React.createElement("div", { style: { background: weekStats[wi].count ? weekStats[wi].profit >= 0 ? "color-mix(in srgb, var(--acc) 10%, transparent)" : "rgba(148,163,184,.15)" : "var(--s2)", border: "1.5px solid " + (weekStats[wi].count ? weekStats[wi].profit >= 0 ? "color-mix(in srgb, var(--acc) 30%, transparent)" : "var(--border2)" : "var(--border)"), borderRadius: 7, padding: "5px 4px", minHeight: 44, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 2 } },
            weekStats[wi].count > 0 && React.createElement(React.Fragment, null,
              React.createElement("div", { style: { fontSize: 9, fontWeight: 700, color: weekStats[wi].profit >= 0 ? "var(--accD)" : "var(--t2)", textAlign: "center", letterSpacing: "-.2px" } },
                showUSD
                  ? (weekStats[wi].profit >= 0 ? "+$" : "-$") + Math.abs(weekStats[wi].profit).toFixed(0)
                  : (weekStats[wi].pnl >= 0 ? "+" : "") + weekStats[wi].pnl.toFixed(1) + "%"
              ),
              React.createElement("div", { style: { fontSize: 7.5, color: "var(--t3)", textAlign: "center" } }, weekStats[wi].count, weekStats[wi].count === 1 ? " trade" : " trades")
            )
          )
        )
      )
    ),
    /* Day detail popup */
    dayPopup && React.createElement("div", {
      style: { position: "fixed", inset: 0, zIndex: 8000, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,.6)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)" },
      onClick: () => setDayPopup(null)
    },
      React.createElement("div", {
        style: { background: "var(--surface)", borderRadius: 18, border: "1px solid var(--border)", padding: "20px 22px", minWidth: 300, maxWidth: 400, width: "92vw", boxShadow: "0 30px 80px rgba(0,0,0,.35)", animation: "scaleIn .2s ease" },
        onClick: (e) => e.stopPropagation()
      },
        React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 } },
          React.createElement("div", null,
            React.createElement("div", { style: { fontSize: 13, fontWeight: 700, color: "var(--text)" } }, new Date(dayPopup.dateKey + "T12:00:00").toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })),
            React.createElement("div", { style: { fontSize: 11, color: "var(--t3)", marginTop: 2 } }, dayPopup.data.count, " trade", dayPopup.data.count !== 1 ? "s" : "")
          ),
          React.createElement("div", { style: { textAlign: "right" } },
            React.createElement("div", { style: { fontSize: 18, fontWeight: 800, color: dayPopup.data.profit >= 0 ? "var(--accD)" : "var(--t2)", letterSpacing: "-1px" } },
              (dayPopup.data.profit >= 0 ? "+$" : "-$") + Math.abs(dayPopup.data.profit).toFixed(2)
            ),
            React.createElement("div", { style: { fontSize: 11, color: dayPopup.data.pnl >= 0 ? "var(--accD)" : "var(--t2)", fontWeight: 700 } },
              (dayPopup.data.pnl >= 0 ? "+" : "") + dayPopup.data.pnl.toFixed(2) + "%"
            )
          )
        ),
        React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6 } },
          dayPopup.data.trades.map((t, i) =>
            React.createElement("div", { key: i, style: { display: "flex", alignItems: "center", gap: 10, background: "var(--s2)", borderRadius: 9, padding: "8px 12px", border: "1px solid var(--border)" } },
              React.createElement("div", { style: { flex: 1 } },
                React.createElement("div", { style: { fontSize: 12, fontWeight: 700, color: "var(--text)" } }, t.symbol),
                React.createElement("div", { style: { fontSize: 10, color: "var(--t3)", marginTop: 1 } }, t.side, " · ", t.session || "")
              ),
              React.createElement("div", { style: { textAlign: "right" } },
                React.createElement("div", { style: { fontSize: 12, fontWeight: 700, color: t.profit >= 0 ? "var(--accD)" : "var(--t2)" } },
                  (t.profit >= 0 ? "+$" : "-$") + Math.abs(t.profit || 0).toFixed(2)
                ),
                React.createElement("div", { style: { fontSize: 10, color: calcPnL(t.profit, capital) >= 0 ? "var(--accD)" : "var(--t2)", fontWeight: 600 } },
                  (calcPnL(t.profit, capital) >= 0 ? "+" : "") + calcPnL(t.profit, capital).toFixed(2) + "%"
                )
              )
            )
          )
        ),
        React.createElement("button", { onClick: () => setDayPopup(null), style: { marginTop: 14, width: "100%", background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 9, padding: "8px", fontSize: 12, fontWeight: 600, color: "var(--t2)", cursor: "pointer" } }, "Close")
      )
    )
  );
}
function FloatingCalc({ capital, open, setOpen }) {
  const E = React.createElement;
  const defaultCap = (capital && capital > 0) ? capital : 5000;
  const [accountSize, setAccountSize] = React.useState(String(defaultCap));
  const [editingCap, setEditingCap] = React.useState(false);
  const [slMode, setSlMode] = React.useState("pips");
  const [riskMode, setRiskMode] = React.useState("pct");
  const [riskPct, setRiskPct] = React.useState("1");
  const [riskAmt, setRiskAmt] = React.useState("");
  const [slPips, setSlPips] = React.useState("");
  const [entryPrice, setEntryPrice] = React.useState("");
  const [slPrice, setSlPrice] = React.useState("");
  const [pipValueMode, setPipValueMode] = React.useState("100");
  const [pipValue, setPipValue] = React.useState("100");

  React.useEffect(() => {
    if (capital && capital > 0) setAccountSize(String(capital));
  }, [capital]);

  const PIP_PRESETS = [
    {label:"Gold XAUUSD",            val:"100",  pipSize:0.1},
    {label:"Forex Majors (EUR/USD)", val:"10",   pipSize:0.0001},
    {label:"GBP/USD, AUD/USD",       val:"10",   pipSize:0.0001},
    {label:"JPY Pairs (USD/JPY)",    val:"1000", pipSize:0.01},
    {label:"US30 / NAS100",          val:"1",    pipSize:1},
    {label:"Crypto (BTC/USD)",       val:"0.1",  pipSize:1},
    {label:"Custom",                 val:"custom",pipSize:null},
  ];
  const selectedPreset = PIP_PRESETS.find(p=>p.val===pipValueMode);
  const pipSizeForCalc = selectedPreset?.pipSize || 0.0001;

  const cap = parseFloat(accountSize) || 5000;
  const riskDollars = riskMode === "pct"
    ? (parseFloat(riskPct)||0) / 100 * cap
    : (parseFloat(riskAmt)||0);

  let slPipsCalc = 0;
  if (slMode === "pips") {
    slPipsCalc = parseFloat(slPips) || 0;
  } else {
    const ep = parseFloat(entryPrice) || 0;
    const sp = parseFloat(slPrice) || 0;
    if (ep && sp) {
      const priceDiff = Math.abs(ep - sp);
      slPipsCalc = priceDiff / pipSizeForCalc;
    }
  }
  const pipVal = pipValueMode === "custom" ? (parseFloat(pipValue) || 10) : parseFloat(pipValueMode) || 10;
  const lotSize = slPipsCalc > 0 && pipVal > 0 ? riskDollars / (slPipsCalc * pipVal) : 0;
  const miniLots = lotSize * 10;

  const [pos, setPos] = React.useState(null);
  const dragRef = React.useRef(null);
  const dragging = React.useRef(false);
  const dragOffset = React.useRef({x:0,y:0});
  const [calcVisible, setCalcVisible] = React.useState(false);
  React.useEffect(() => {
    if (open) {
      requestAnimationFrame(() => requestAnimationFrame(() => setCalcVisible(true)));
    } else {
      setCalcVisible(false);
    }
  }, [open]);

  const startDrag = React.useCallback((e) => {
    if (e.button !== 0) return;
    dragging.current = true;
    const el = dragRef.current;
    const rect = el ? el.getBoundingClientRect() : {left:0,top:0};
    dragOffset.current = {x: e.clientX - rect.left, y: e.clientY - rect.top};
    const onMove = (ev) => {
      if (!dragging.current) return;
      setPos({x: ev.clientX - dragOffset.current.x, y: ev.clientY - dragOffset.current.y});
    };
    const onUp = () => { dragging.current = false; window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    e.preventDefault();
  }, []);

  const inp = {border:"1.5px solid var(--border2)",borderRadius:8,padding:"8px 10px",fontSize:12,
    outline:"none",background:"var(--s2)",color:"var(--text)",fontFamily:"inherit",
    width:"100%",boxSizing:"border-box",transition:"border-color .15s"};
  const segBtn = (active,onClick,txt) => E("button",{onClick,style:{
    flex:1,padding:"5px 0",borderRadius:6,border:"none",fontSize:11,fontWeight:active?700:500,
    background:active?"var(--surface)":"transparent",color:active?"var(--accD)":"var(--t3)",
    boxShadow:active?"var(--sh1)":"none",cursor:"pointer",transition:"all .12s"}}, txt);

  if (!open) return null;

  const basePopup = {
    width:360, maxWidth:"calc(100vw - 24px)",
    background:"var(--surface)", border:"1.5px solid var(--border2)",
    borderRadius:18, boxShadow:"0 20px 60px rgba(0,0,0,.28),0 4px 16px rgba(0,0,0,.14)",
    maxHeight:"calc(100vh - 60px)", overflowY:"auto",
    opacity: calcVisible ? 1 : 0,
    transition: "opacity .18s ease, transform .18s cubic-bezier(.22,1,.36,1)",
  };
  const popupStyle = pos
    ? { ...basePopup, position:"fixed", left:pos.x, top:pos.y, zIndex:9100,
        transform: calcVisible ? "scale(1)" : "scale(0.94)" }
    : { ...basePopup, position:"fixed", top:"50%", left:"50%", zIndex:9100,
        transform: calcVisible ? "translate(-50%,-50%) scale(1)" : "translate(-50%,-50%) scale(0.94)" };

  return E("div", null,
    E("div", {
      onClick:()=>{ setOpen(false); setPos(null); },
      style:{position:"fixed",inset:0,zIndex:9090,background:"rgba(0,0,0,.25)",backdropFilter:"blur(3px)"}
    }),
    E("div", { ref:dragRef, style:popupStyle },
      E("div",{
        onMouseDown:startDrag,
        style:{padding:"14px 16px 10px",borderBottom:"1px solid var(--border)",display:"flex",alignItems:"center",gap:10,
               cursor:"grab",userSelect:"none",borderRadius:"18px 18px 0 0"}
      },
        E("span",{style:{fontSize:18}},"🧮"),
        E("div",{style:{flex:1}},
          E("div",{style:{fontSize:13,fontWeight:800,color:"var(--text)",letterSpacing:"-.02em"}}, "Lot Size Calculator"),
          E("div",{style:{fontSize:10,color:"var(--t3)"}}, "Drag to move · Know your size before you enter")
        ),
        E("button",{onClick:()=>{ setOpen(false); setPos(null); },
          style:{background:"none",border:"none",color:"var(--t3)",cursor:"pointer",fontSize:18,padding:"2px 4px",lineHeight:1}}, "×")
      ),
      E("div",{style:{padding:"12px 14px",display:"flex",flexDirection:"column",gap:10}},
        E("div",{style:{background:"var(--s2)",borderRadius:10,padding:"8px 12px",display:"flex",alignItems:"center",gap:8}},
          E("div",{style:{fontSize:10,fontWeight:700,color:"var(--t3)",textTransform:"uppercase",letterSpacing:"0.05em",flex:1}}, "Account"),
          editingCap
            ? E("input",{type:"number",value:accountSize,autoFocus:true,
                onChange:e=>setAccountSize(e.target.value),
                onBlur:()=>setEditingCap(false),
                onKeyDown:e=>{if(e.key==="Enter"||e.key==="Escape")setEditingCap(false);},
                style:{...inp,width:110,textAlign:"right",padding:"4px 8px",fontSize:13,fontWeight:700}})
            : E("div",{style:{display:"flex",alignItems:"center",gap:6},onClick:()=>setEditingCap(true)},
                E("div",{style:{fontSize:13,fontWeight:800,color:"var(--text)",cursor:"pointer"}}, "$"+parseFloat(accountSize||5000).toLocaleString()),
                E("span",{style:{fontSize:10,color:"var(--acc)",cursor:"pointer",fontWeight:700}}, "✏️")
              )
        ),
        E("div",null,
          E("div",{style:{fontSize:10,fontWeight:700,color:"var(--t3)",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:5}}, "Instrument"),
          E("select",{value:pipValueMode,onChange:e=>{
            setPipValueMode(e.target.value);
            if(e.target.value!=="custom") setPipValue(e.target.value);
          },style:{...inp,cursor:"pointer"}},
            PIP_PRESETS.map(p=>E("option",{key:p.val,value:p.val},p.label))
          ),
          pipValueMode==="custom" && E("input",{type:"number",step:"0.01",placeholder:"$ per pip per std lot",
            value:pipValue==="custom"?"":pipValue,onChange:e=>setPipValue(e.target.value),
            style:{...inp,marginTop:5}})
        ),
        E("div",null,
          E("div",{style:{fontSize:10,fontWeight:700,color:"var(--t3)",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:5}}, "Risk"),
          E("div",{style:{display:"flex",background:"var(--s3)",borderRadius:8,padding:2,gap:2,marginBottom:6}},
            segBtn(riskMode==="pct",()=>setRiskMode("pct"),"% Account"),
            segBtn(riskMode==="fixed",()=>setRiskMode("fixed"),"Fixed $")
          ),
          riskMode==="pct"
            ? E("div",{style:{display:"flex",alignItems:"center",gap:6}},
                E("input",{type:"number",step:"0.1",min:"0.1",max:"10",placeholder:"1",
                  value:riskPct,onChange:e=>setRiskPct(e.target.value),style:{...inp,flex:1}}),
                E("div",{style:{fontSize:11,color:"var(--t3)",whiteSpace:"nowrap"}},
                  riskPct ? "= $"+(parseFloat(riskPct)/100*cap).toFixed(0) : "")
              )
            : E("input",{type:"number",step:"1",placeholder:"e.g. 50",
                value:riskAmt,onChange:e=>setRiskAmt(e.target.value),style:inp})
        ),
        E("div",null,
          E("div",{style:{fontSize:10,fontWeight:700,color:"var(--t3)",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:5}}, "Stop Loss"),
          E("div",{style:{display:"flex",background:"var(--s3)",borderRadius:8,padding:2,gap:2,marginBottom:6}},
            segBtn(slMode==="pips",()=>setSlMode("pips"),"Pips"),
            segBtn(slMode==="price",()=>setSlMode("price"),"Price")
          ),
          slMode==="pips"
            ? E("input",{type:"number",step:"1",min:"1",placeholder:"e.g. 240",
                value:slPips,onChange:e=>setSlPips(e.target.value),style:inp})
            : E("div",{style:{display:"flex",flexDirection:"column",gap:5}},
                E("input",{type:"number",step:"0.00001",placeholder:"Entry price",
                  value:entryPrice,onChange:e=>setEntryPrice(e.target.value),style:inp}),
                E("input",{type:"number",step:"0.00001",placeholder:"SL price",
                  value:slPrice,onChange:e=>setSlPrice(e.target.value),style:inp}),
                entryPrice&&slPrice&&E("div",{style:{fontSize:10,color:"var(--t3)"}},
                  "= "+(Math.abs((parseFloat(entryPrice)||0)-(parseFloat(slPrice)||0))/pipSizeForCalc).toFixed(1)+" pips  (",
                  selectedPreset?.label||"instrument",")")
              )
        ),
        lotSize > 0
          ? E("div",{style:{background:"linear-gradient(135deg,var(--accF),var(--s2))",
              border:"1.5px solid color-mix(in srgb,var(--acc) 35%,transparent)",
              borderRadius:12,padding:"12px 14px"}},
              E("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:8}},
                E("div",{style:{fontSize:10,fontWeight:700,color:"var(--t3)",textTransform:"uppercase",letterSpacing:"0.05em"}}, "Mini Lots"),
                E("div",{style:{fontSize:32,fontWeight:800,color:"var(--accD)",letterSpacing:"-2px",lineHeight:1}},
                  miniLots.toFixed(2)
                )
              ),
              E("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4}},
                [
                  ["Std Lots", lotSize>=0.01?lotSize.toFixed(2):lotSize.toFixed(4)],
                  ["Risk $", "$"+riskDollars.toFixed(2)],
                  ["SL Pips", slPipsCalc.toFixed(1)],
                  ["Pip Value", "$"+pipVal+"/pip"]
                ].map(([l,v])=>E("div",{key:l,style:{display:"flex",justifyContent:"space-between",
                  fontSize:10.5,borderTop:"1px solid var(--border)",paddingTop:3}},
                  E("span",{style:{color:"var(--t3)"}},l),
                  E("span",{style:{fontWeight:700,color:"var(--text)"}},v)
                ))
              )
            )
          : E("div",{style:{textAlign:"center",padding:"10px 0",color:"var(--t3)",fontSize:11,lineHeight:1.5}},
              "Fill in the fields to calculate lot size"
            ),
        E("div",{style:{fontSize:9.5,color:"var(--t3)",lineHeight:1.5,paddingTop:4,borderTop:"1px solid var(--border)"}},
          "⚠️ Always verify with your broker. Size down during drawdown."
        )
      )
    )
  );
}

const Overview = memo(function Overview2({ trades, allTrades, uiBlocks = {}, capital: propCapital }) {
  const capital = propCapital && propCapital > 0 ? propCapital : 5000;
  const wins = trades.filter((t) => t.profit > 0), losses = trades.filter((t) => t.profit <= 0), total = trades.length;
  const wr = total ? wins.length / total * 100 : 0;
  const grossUSD = trades.reduce((s, t) => s + (t.profit || 0), 0);
  const grossPct = calcPnL(grossUSD, capital);
  const avgW = wins.length ? wins.reduce((s, t) => s + calcPnL(t.profit, capital), 0) / wins.length : 0;
  const avgL = losses.length ? Math.abs(losses.reduce((s, t) => s + calcPnL(t.profit, capital), 0) / losses.length) : 0;
  const wlR = avgL ? (avgW / avgL).toFixed(2) : "\u2014";
  const byMonth = {};
  trades.forEach((t) => {
    const m = t.entryDate.slice(0, 7);
    if (!byMonth[m]) byMonth[m] = { pnl: 0, profit: 0, cnt: 0 };
    byMonth[m].profit += t.profit || 0;
    byMonth[m].pnl = calcPnL(byMonth[m].profit, capital);
    byMonth[m].cnt++;
  });
  const months = Object.entries(byMonth).sort();
  const now = /* @__PURE__ */ new Date();
  const last30 = Array.from({ length: 30 }, (_, i) => {
    const d = new Date(now);
    d.setDate(d.getDate() - (29 - i));
    return d.toISOString().slice(0, 10);
  });
  const byDay = {};
  trades.forEach((t) => {
    if (!byDay[t.entryDate]) byDay[t.entryDate] = { pnl: 0, profit: 0 };
    byDay[t.entryDate].profit += t.profit || 0;
    byDay[t.entryDate].pnl = calcPnL(byDay[t.entryDate].profit, capital);
  });
  const dayBars = last30.map((d) => __spreadValues({ d }, byDay[d] || { pnl: 0, profit: 0 }));
  const maxDay = Math.max(...dayBars.map((b) => Math.abs(b.profit)), 0.1);
  let cum = 0, peak = 0, maxDD = 0;
  [...trades].sort((a, b) => a.entryDate.localeCompare(b.entryDate)).forEach((t) => {
    cum += calcPnL(t.profit, capital);
    if (cum > peak) peak = cum;
    const dd = cum - peak;
    if (dd < maxDD) maxDD = dd;
  });
  const pnlPts = [];
  let runPnl = 0;
  [...trades].sort((a, b) => a.entryDate.localeCompare(b.entryDate)).forEach((t) => {
    runPnl += calcPnL(t.profit, capital);
    pnlPts.push(runPnl);
  });
  if (!total) return /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", padding: "100px 20px" }, className: "fade-up" }, /* @__PURE__ */ React.createElement("div", { style: { width: 88, height: 88, borderRadius: 22, background: "linear-gradient(135deg,var(--accF),var(--s3))", border: "2px dashed color-mix(in srgb, var(--acc) 40%, transparent)", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40 } }, "\u{1F4CA}"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 20, fontWeight: 700, marginBottom: 10, letterSpacing: "-.5px" } }, "No trades yet"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, color: "var(--t2)", lineHeight: 1.8, maxWidth: 380, margin: "0 auto" } }, "Add an account and log your first trade to start tracking performance. Press ", /* @__PURE__ */ React.createElement("kbd", { style: { background: "var(--s3)", border: "1px solid var(--border)", borderRadius: 5, padding: "1px 6px", fontSize: 12, fontFamily: "monospace" } }, "N"), " anywhere to open the trade form."));
  const gradeMap = {};
  trades.forEach((t) => {
    const g = t.grade || "B";
    if (!gradeMap[g]) gradeMap[g] = { n: 0, w: 0 };
    gradeMap[g].n++;
    if (t.profit > 0) gradeMap[g].w++;
  });
  const topGrade = Object.entries(gradeMap).sort((a, b) => b[1].w / b[1].n - a[1].w / a[1].n)[0];
  const expectedRR = trades.filter((t) => t.expectedRR && t.expectedRR !== "Custom").map((t) => {
    var _a;
    return parseFloat(((_a = t.expectedRR) == null ? void 0 : _a.split(":")[1]) || 1);
  });
  const avgExpRR = expectedRR.length ? expectedRR.reduce((s, v) => s + v, 0) / expectedRR.length : 0;
  const actualRR_pos = trades.filter((t) => t.profit > 0 && t.actualRR && !t.actualRR.startsWith("-")).map((t) => {
    var _a;
    return parseFloat(((_a = t.actualRR) == null ? void 0 : _a.split(":")[1]) || 0);
  });
  const avgActRR = actualRR_pos.length ? actualRR_pos.reduce((s, v) => s + v, 0) / actualRR_pos.length : 0;
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(now);
    d.setDate(d.getDate() - (6 - i));
    return d.toISOString().slice(0, 10);
  });
  const dayPnlMap = {};
  trades.forEach((t) => {
    if (!dayPnlMap[t.entryDate]) dayPnlMap[t.entryDate] = { pnl: 0, wins: 0, n: 0, profit: 0 };
    dayPnlMap[t.entryDate].profit += t.profit || 0;
    dayPnlMap[t.entryDate].pnl = calcPnL(dayPnlMap[t.entryDate].profit, capital);
    dayPnlMap[t.entryDate].n++;
    if (t.profit > 0) dayPnlMap[t.entryDate].wins++;
  });
  function MiniSparkline({ values, color, height = 28 }) {
    if (!values || values.length < 2) return null;
    const mn = Math.min(...values), mx = Math.max(...values), rng = mx - mn || 1;
    const W = 60, H = height, pts = values.map((v, i) => `${i / (values.length - 1) * W},${H - ((v - mn) / rng * (H - 4) + 2)}`).join(" ");
    return /* @__PURE__ */ React.createElement("svg", { width: W, height: H, style: { display: "block", flexShrink: 0 } }, /* @__PURE__ */ React.createElement("polyline", { points: pts, fill: "none", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }));
  }
  const sparkWR = last7Days.map((d) => dayPnlMap[d] ? dayPnlMap[d].wins / dayPnlMap[d].n * 100 : null).filter((v) => v !== null);
  const sparkPnl = last7Days.map((d) => {
    var _a;
    return calcPnL(((_a = dayPnlMap[d]) == null ? void 0 : _a.profit) || 0, capital);
  });
  const sparkProfit = last7Days.map((d) => {
    var _a;
    return ((_a = dayPnlMap[d]) == null ? void 0 : _a.profit) || 0;
  });
  const sparkDD = [];
  let rd = 0, rp = 0;
  [...trades].sort((a, b) => a.entryDate.localeCompare(b.entryDate)).forEach((t) => {
    rd += calcPnL(t.profit, capital);
    if (rd > rp) rp = rd;
    sparkDD.push(rd - rp);
  });
  const profitFactor = calcProfitFactor(trades);
  const pf = profitFactor === Infinity ? "\u221E" : profitFactor.toFixed(2);
  const hourlyStats = calcHourlyStats(trades);
  const bestHour = hourlyStats.sort((a, b) => b.profit - a.profit)[0];
  const weeklySummary = genWeeklySummary(trades, capital);
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, className: "fade-up" }, /* @__PURE__ */ React.createElement("div", { className: "g4", style: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 } }, [
    { label: "Total Trades", val: total, sub: `${wins.length}W \xB7 ${losses.length}L`, subCol: "var(--t3)", accent: "var(--blue)", spark: last7Days.map((d) => {
      var _a;
      return ((_a = dayPnlMap[d]) == null ? void 0 : _a.n) || 0;
    }), sparkCol: "#3b82f6" },
    { label: "Win Rate", val: wr.toFixed(1) + "%", sub: wr >= 50 ? "Above average" : "Below average", subCol: wr >= 50 ? "var(--accD)" : "var(--t3)", accent: wr >= 50 ? "var(--acc)" : "var(--t2)", spark: sparkWR, sparkCol: wr >= 50 ? "#16a34a" : "#9ca3af" },
    { label: "Net P&L", val: grossUSD !== 0 ? fmtUSD(grossUSD, false).replace(/^\+/, "") : fmtPct(grossPct), sub: grossUSD !== 0 ? `${grossPct >= 0 ? "+" : ""}${grossPct.toFixed(2)}%` : "", subCol: grossPct >= 0 ? "var(--accD)" : "var(--red)", accent: grossPct >= 0 ? "var(--acc)" : "var(--red)", spark: sparkPnl, sparkCol: grossPct >= 0 ? "var(--acc)" : "#ef4444" },
    { label: "Win/Loss Ratio", val: wlR, sub: parseFloat(wlR) >= 1.5 ? "Excellent" : "Needs improvement", subCol: parseFloat(wlR) >= 1 ? "var(--green)" : "var(--t3)", accent: "var(--green)", spark: [], sparkCol: "#16a34a" }
  ].map((kpi, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "card count-up", style: { borderTop: `2px solid ${kpi.accent}`, paddingTop: 18, animationDelay: `${i * 60}ms`, position: "relative", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", letterSpacing: 0.3, marginBottom: 10, display: "flex", justifyContent: "space-between", alignItems: "center", textTransform: "uppercase" } }, kpi.label, /* @__PURE__ */ React.createElement("div", { style: { width: 5, height: 5, borderRadius: "50%", background: kpi.accent, opacity: 0.7 } })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 8 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 30, fontWeight: 800, letterSpacing: "-1.5px", lineHeight: 1, color: "var(--text)", fontFamily: "'Inter',sans-serif" } }, kpi.val), kpi.sub && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, marginTop: 6, color: kpi.subCol, fontWeight: 500 } }, kpi.sub)), kpi.spark && kpi.spark.length > 1 && /* @__PURE__ */ React.createElement(MiniSparkline, { values: kpi.spark, color: kpi.sparkCol }))))), uiBlocks.equityCurve !== false && /* @__PURE__ */ React.createElement("div", { className: "card" }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14, flexWrap: "wrap", gap: 8 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 700, color: "var(--t3)", letterSpacing: "0.08em", marginBottom: 6, textTransform: "uppercase" } }, "Cumulative P&L"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 28, fontWeight: 800, letterSpacing: "-1.5px", color: grossPct >= 0 ? "var(--accD)" : "var(--red)", fontFamily: "'Inter',sans-serif" } }, fmtPct(grossPct), grossUSD !== 0 && /* @__PURE__ */ React.createElement("span", { style: { fontSize: 15, marginLeft: 10, fontWeight: 600, opacity: 0.65 } }, fmtUSD(grossUSD)))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 16, fontSize: 11 } }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 500, color: "var(--accD)", fontSize: 16 } }, wins.length), /* @__PURE__ */ React.createElement("div", { style: { color: "var(--t3)", fontWeight: 600, letterSpacing: 0.5 } }, "WINS")), /* @__PURE__ */ React.createElement("div", { style: { width: 1, background: "var(--border)" } }), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 500, color: "var(--t2)", fontSize: 16 } }, losses.length), /* @__PURE__ */ React.createElement("div", { style: { color: "var(--t3)", fontWeight: 600, letterSpacing: 0.5 } }, "LOSSES")))), /* @__PURE__ */ React.createElement(ProfitCurve, { trades, height: 150, capital }), /* @__PURE__ */ React.createElement("div", { style: { border: "1px solid var(--border)", borderRadius: 12, padding: "12px", marginTop: 20, background: "var(--s2)" } }, React.createElement(MiniCalendarWidget, { trades: allTrades || trades, ic: capital, capital })), weeklySummary ? /* @__PURE__ */ React.createElement("div", { className: "card" }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", letterSpacing: 0.04, marginBottom: 10, textTransform: "uppercase" } }, "This Week \xB7 ", weeklySummary.from, " \u2192 ", weeklySummary.to), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 10 } }, [
    { l: "Trades", v: weeklySummary.total, c: "var(--text)" },
    { l: "Win Rate", v: `${weeklySummary.wr}%`, c: +weeklySummary.wr >= 50 ? "var(--green)" : "var(--t2)" },
    { l: "Net P&L", v: `${weeklySummary.pnl >= 0 ? "+" : ""}${weeklySummary.pnl}%`, c: +weeklySummary.pnl >= 0 ? "var(--accD)" : "var(--red)" }
  ].map((x) => /* @__PURE__ */ React.createElement("div", { key: x.l, style: { background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 9, padding: "10px 12px", textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9, color: "var(--t3)", fontWeight: 600, letterSpacing: 0.04, textTransform: "uppercase", marginBottom: 4 } }, x.l), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 18, fontWeight: 700, color: x.c, letterSpacing: "-1px" } }, x.v)))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 5, fontSize: 11, color: "var(--t2)" } }, weeklySummary.topModel && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, /* @__PURE__ */ React.createElement("span", { style: { color: "var(--t3)" } }, "Best model:"), /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 600 } }, weeklySummary.topModel)), weeklySummary.topMistake && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, /* @__PURE__ */ React.createElement("span", { style: { color: "var(--t3)" } }, "Top mistake:"), /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 600, color: "var(--red)" } }, weeklySummary.topMistake)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, /* @__PURE__ */ React.createElement("span", { style: { color: "var(--t3)" } }, "Discipline:"), /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 600, color: weeklySummary.disciplined >= 80 ? "var(--green)" : weeklySummary.disciplined >= 60 ? "var(--acc)" : "var(--red)" } }, weeklySummary.disciplined, "%")))) : /* @__PURE__ */ React.createElement("div", { className: "card", style: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, minHeight: 140 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 28 } }, "\u{1F4C5}"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 600, color: "var(--t2)" } }, "No trades this week yet"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--t3)" } }, "Your weekly summary will appear here"))), /* @__PURE__ */ React.createElement("div", { className: "g2", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 } }, /* @__PURE__ */ React.createElement("div", { className: "card" }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 700, color: "var(--t3)", letterSpacing: "0.08em", marginBottom: 14, textTransform: "uppercase" } }, "Performance Breakdown"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 20 } }, (() => {
    const r = 60, cx = 75, cy = 75, stroke = 12;
    const circ = 2 * Math.PI * r;
    const wrFrac = wr / 100;
    return /* @__PURE__ */ React.createElement("svg", { width: "150", height: "150", style: { flexShrink: 0 } }, /* @__PURE__ */ React.createElement("circle", { cx, cy, r, fill: "none", stroke: "var(--s3)", strokeWidth: stroke }), /* @__PURE__ */ React.createElement(
      "circle",
      {
        cx,
        cy,
        r,
        fill: "none",
        stroke: "var(--green)",
        strokeWidth: stroke,
        strokeDasharray: `${circ * wrFrac} ${circ * (1 - wrFrac)}`,
        strokeDashoffset: circ * 0.25,
        strokeLinecap: "round",
        style: { transition: "stroke-dasharray .8s cubic-bezier(.22,1,.36,1)" }
      }
    ), /* @__PURE__ */ React.createElement("circle", { cx, cy, r: r - stroke - 4, fill: "none", stroke: "var(--border)", strokeWidth: 1 }), /* @__PURE__ */ React.createElement("text", { x: cx, y: cy - 6, textAnchor: "middle", fontSize: "22", fontWeight: "900", fill: "var(--text)", fontFamily: "Inter,sans-serif" }, wr.toFixed(0), "%"), /* @__PURE__ */ React.createElement("text", { x: cx, y: cy + 12, textAnchor: "middle", fontSize: "9.5", fontWeight: "700", fill: "var(--t3)", letterSpacing: "1", fontFamily: "Inter,sans-serif" }, "WIN RATE"));
  })(), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: 10 } }, [
    { label: "Winning Trades", val: wins.length, pct: wr.toFixed(0) + "%", col: "var(--green)" },
    { label: "Losing Trades", val: losses.length, pct: (losses.length / total * 100).toFixed(0) + "%", col: "var(--t3)" },
    { label: "Avg Win", val: fmtPct(wins.length ? wins.reduce((s, t) => s + calcPnL(t.profit, capital), 0) / wins.length : 0, 2), col: "var(--green)" },
    { label: "Avg Loss", val: fmtPct(losses.length ? losses.reduce((s, t) => s + calcPnL(t.profit, capital), 0) / losses.length : 0, 2), col: "var(--red)" }
  ].map((r, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11.5, color: "var(--t3)", fontWeight: 500 } }, r.label), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, fontWeight: 500, color: r.col, fontFamily: "'Inter',sans-serif" } }, r.pct || r.val)))))), uiBlocks.monthlyBars !== false && /* @__PURE__ */ React.createElement("div", { className: "card" }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 700, color: "var(--t3)", letterSpacing: "0.08em", marginBottom: 14, textTransform: "uppercase" } }, "Monthly P&L"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 7, marginTop: 4 } }, months.slice(-5).map(([m, data]) => {
    const maxV = Math.max(...months.map(([, x]) => Math.abs(x.profit)), 1);
    const pct = Math.abs(data.profit) / maxV * 100;
    return /* @__PURE__ */ React.createElement("div", { key: m, style: { display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 32, fontSize: 10.5, color: "var(--t3)", fontWeight: 700, flexShrink: 0 } }, m.slice(5)), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, height: 8, background: "var(--s3)", borderRadius: 4, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { width: `${pct}%`, height: "100%", background: data.profit >= 0 ? "linear-gradient(90deg,var(--acc),var(--accD))" : "var(--border2)", borderRadius: 4, transition: "width .8s cubic-bezier(.22,1,.36,1)" } })), /* @__PURE__ */ React.createElement("div", { style: { width: 66, textAlign: "right", fontSize: 12, fontWeight: 500, color: data.profit >= 0 ? "var(--accD)" : "var(--t2)", fontFamily: "'Inter',sans-serif" } }, data.profit >= 0 ? "+$" : "-$", Math.abs(data.profit).toFixed(0)), /* @__PURE__ */ React.createElement("div", { style: { width: 42, textAlign: "right", fontSize: 10.5, color: "var(--t3)", fontWeight: 600 } }, fmtPct(data.pnl, 1)));
  })))), hourlyStats.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "card" }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", letterSpacing: 0.04, marginBottom: 14, textTransform: "uppercase" } }, "Best Time of Day"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 2, alignItems: "flex-end", height: 68, marginBottom: 4 } }, Array.from({ length: 24 }, (_, h) => {
    const stat = hourlyStats.find((x) => x.h === h);
    if (!stat) return /* @__PURE__ */ React.createElement("div", { key: h, style: { flex: 1, height: 4, background: "var(--s3)", borderRadius: 2, opacity: 0.35 } });
    const maxP = Math.max(...hourlyStats.map((x) => Math.abs(x.profit)), 1);
    const ht = Math.max(6, Math.round(Math.abs(stat.profit) / maxP * 64));
    const col = stat.profit >= 0 ? "var(--acc)" : "var(--border2)";
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        key: h,
        title: `${String(h).padStart(2, "0")}:00 \xB7 ${stat.n} trade${stat.n !== 1 ? "s" : ""} \xB7 ${stat.wr.toFixed(0)}% WR \xB7 avg $${(stat.profit / stat.n).toFixed(2)}`,
        style: { flex: 1, height: ht, background: col, borderRadius: "3px 3px 0 0", cursor: "default", opacity: 0.8, transition: "opacity .1s" },
        onMouseEnter: (e) => e.currentTarget.style.opacity = "1",
        onMouseLeave: (e) => e.currentTarget.style.opacity = ".8"
      }
    );
  })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 9, color: "var(--t3)", fontWeight: 600 } }, ["00", "03", "06", "09", "12", "15", "18", "21"].map((h) => /* @__PURE__ */ React.createElement("span", { key: h }, h))), bestHour && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 10, padding: "8px 12px", background: "var(--s2)", borderRadius: 9, fontSize: 11, color: "var(--t2)" } }, "Peak: ", /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 700, color: "var(--accD)" } }, String(bestHour.h).padStart(2, "0"), ":00"), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--t3)", marginLeft: 6 } }, bestHour.n, " trades \xB7 ", bestHour.wr.toFixed(0), "% WR \xB7 avg $", (bestHour.profit / bestHour.n).toFixed(2)))))
});
/* ============================================================
   EDGE FINDER COMPONENT
   ============================================================ */
function EdgeFinder({ trades, capital }) {
  const E = React.createElement;
  const [minTrades, setMinTrades] = React.useState(5);
  const [sortBy, setSortBy] = React.useState("edge");

  // Edge score: Kelly-inspired, penalises small samples
  function edgeScore(wins, total) {
    if (total < 1) return 0;
    const wr = wins / total;
    const kelly = wr - (1 - wr); // simplified kelly (1:1 base)
    const confidence = Math.min(1, Math.sqrt(total / 20)); // ramps up to full at 20 trades
    return Math.max(0, kelly * confidence * 100);
  }

  function edgeLabel(score, total) {
    if (total < minTrades) return { label: "⬜ Too Few", color: "var(--t3)", bg: "var(--s2)" };
    if (score >= 30) return { label: "✦ Strong Edge", color: "var(--accD)", bg: "var(--accL)" };
    if (score >= 12) return { label: "◈ Building", color: "var(--acc)", bg: "var(--accF)" };
    if (score >= 0) return { label: "🔴 Avoid", color: "var(--red)", bg: "var(--rBg)" };
    return { label: "🔴 Avoid", color: "var(--red)", bg: "var(--rBg)" };
  }

  // Build dimension combos
  const dims = {};

  function addDim(key, t) {
    if (!dims[key]) dims[key] = { wins: 0, total: 0, pnl: 0, profit: 0 };
    dims[key].total++;
    if (t.profit > 0) dims[key].wins++;
    dims[key].pnl += t.profit ? (t.profit / capital) * 100 : 0;
    dims[key].profit += t.profit || 0;
  }

  trades.forEach(t => {
    const sess = t.session || "Unknown";
    const sym = t.symbol || "Unknown";
    const model = t.model || "Unknown";
    const grade = t.grade || "–";
    const rr = t.expectedRR || "–";

    // Single dims
    addDim(`Session: ${sess}`, t);
    addDim(`Symbol: ${sym}`, t);
    addDim(`Model: ${model}`, t);
    addDim(`Grade: ${grade}`, t);
    addDim(`Target RR: ${rr}`, t);

    // Combo dims (2-way)
    addDim(`${sess} + ${sym}`, t);
    addDim(`${sess} + ${model}`, t);
    addDim(`${sym} + ${model}`, t);
    addDim(`${grade} + ${sess}`, t);
    addDim(`${model} + ${rr}`, t);

    // Confluence combos
    (t.confluences || []).forEach(c => {
      addDim(`Confluence: ${c}`, t);
      if (sess !== "Unknown") addDim(`${c} in ${sess}`, t);
    });
  });

  let rows = Object.entries(dims).map(([key, d]) => {
    const wr = d.total ? d.wins / d.total * 100 : 0;
    const score = edgeScore(d.wins, d.total);
    const avgPnl = d.total ? d.pnl / d.total : 0;
    return { key, ...d, wr, score, avgPnl };
  }).filter(r => r.total >= minTrades);

  if (sortBy === "edge") rows.sort((a, b) => b.score - a.score);
  else if (sortBy === "wr") rows.sort((a, b) => b.wr - a.wr);
  else if (sortBy === "pnl") rows.sort((a, b) => b.profit - a.profit);
  else if (sortBy === "trades") rows.sort((a, b) => b.total - a.total);

  const topEdges = rows.filter(r => r.score >= 30).slice(0, 3);
  const avoidEdges = rows.filter(r => r.score < 0 || (r.total >= minTrades && r.wr < 35)).slice(0, 3);

  const fmtPctLocal = (v) => (v >= 0 ? "+" : "") + v.toFixed(1) + "%";
  const fmtUSDLocal = (v) => (v >= 0 ? "+" : "-") + "$" + Math.abs(v).toFixed(0);

  if (trades.length < minTrades) return E("div", { style: { textAlign: "center", padding: "60px 20px", color: "var(--t3)", fontSize: 13 } },
    E("div", { style: { fontSize: 32, marginBottom: 12 } }, "⚡"),
    E("div", { style: { fontWeight: 700, color: "var(--text)", marginBottom: 6 } }, "Not enough data yet"),
    E("div", null, `Log at least ${minTrades} trades to unlock Edge Finder.`)
  );

  return E("div", { style: { display: "flex", flexDirection: "column", gap: 16 } },

    // Header
    E("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 } },
      E("div", null,
        E("div", { style: { fontSize: 14, fontWeight: 800, color: "var(--text)", letterSpacing: "-.02em" } }, "⚡ Edge Finder"),
        E("div", { style: { fontSize: 11.5, color: "var(--t3)", marginTop: 2 } }, "Statistical edge scoring across all your trading dimensions & combos")
      ),
      E("div", { style: { display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" } },
        E("div", { style: { fontSize: 11, color: "var(--t3)", fontWeight: 600 } }, "Min trades:"),
        [3, 5, 10].map(n => E("button", {
          key: n, onClick: () => setMinTrades(n),
          style: { padding: "4px 12px", borderRadius: 8, border: `1.5px solid ${minTrades === n ? "var(--acc)" : "var(--border)"}`, background: minTrades === n ? "var(--accL)" : "var(--s2)", color: minTrades === n ? "var(--accD)" : "var(--t2)", fontSize: 11, fontWeight: 700, cursor: "pointer" }
        }, n))
      )
    ),

    // Spotlight cards
    topEdges.length > 0 && E("div", null,
      E("div", { style: { fontSize: 10, fontWeight: 700, color: "var(--t3)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 } }, "🏆 Your Strongest Edges"),
      E("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))", gap: 10 } },
        topEdges.map((r, i) => E("div", {
          key: r.key,
          style: { background: "var(--accF)", border: "1.5px solid color-mix(in srgb, var(--acc) 40%, transparent)", borderRadius: 12, padding: "14px 16px", position: "relative", overflow: "hidden" }
        },
          E("div", { style: { position: "absolute", top: 0, right: 0, width: 40, height: 40, borderRadius: "0 12px 0 100%", background: "color-mix(in srgb, var(--acc) 12%, transparent)" } }),
          E("div", { style: { fontSize: 9, fontWeight: 800, color: "var(--acc)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 5 } }, `#${i + 1} Edge`),
          E("div", { style: { fontSize: 12, fontWeight: 800, color: "var(--text)", lineHeight: 1.3, marginBottom: 8 } }, r.key),
          E("div", { style: { display: "flex", gap: 12 } },
            E("div", null,
              E("div", { style: { fontSize: 9, color: "var(--t3)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" } }, "Win Rate"),
              E("div", { style: { fontSize: 18, fontWeight: 800, color: "var(--accD)" } }, r.wr.toFixed(0) + "%")
            ),
            E("div", null,
              E("div", { style: { fontSize: 9, color: "var(--t3)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" } }, "Trades"),
              E("div", { style: { fontSize: 18, fontWeight: 800, color: "var(--text)" } }, r.total)
            ),
            E("div", null,
              E("div", { style: { fontSize: 9, color: "var(--t3)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" } }, "Net P&L"),
              E("div", { style: { fontSize: 14, fontWeight: 800, color: r.profit >= 0 ? "var(--accD)" : "var(--red)" } }, fmtUSDLocal(r.profit))
            )
          ),
          E("div", { style: { marginTop: 10, height: 4, background: "var(--s3)", borderRadius: 4, overflow: "hidden" } },
            E("div", { style: { height: "100%", width: Math.min(100, r.score * 2) + "%", background: "linear-gradient(90deg, var(--acc), var(--accD))", borderRadius: 4, transition: "width .6s ease" } })
          ),
          E("div", { style: { fontSize: 10, color: "var(--t3)", marginTop: 4, fontWeight: 600 } }, "Edge score: " + r.score.toFixed(0))
        ))
      )
    ),

    avoidEdges.length > 0 && E("div", null,
      E("div", { style: { fontSize: 10, fontWeight: 700, color: "var(--t3)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 } }, "⚠️ Edges to Avoid"),
      E("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px,1fr))", gap: 8 } },
        avoidEdges.map(r => E("div", {
          key: r.key,
          style: { background: "var(--rBg)", border: "1px solid var(--rBdr)", borderRadius: 10, padding: "12px 14px" }
        },
          E("div", { style: { fontSize: 11, fontWeight: 700, color: "var(--text)", marginBottom: 6 } }, r.key),
          E("div", { style: { display: "flex", gap: 10, fontSize: 12 } },
            E("span", { style: { color: "var(--red)", fontWeight: 700 } }, r.wr.toFixed(0) + "% WR"),
            E("span", { style: { color: "var(--t3)" } }, r.total + " trades"),
            E("span", { style: { color: r.profit >= 0 ? "var(--accD)" : "var(--red)", fontWeight: 700 } }, fmtUSDLocal(r.profit))
          )
        ))
      )
    ),

    // Sort controls + full table
    E("div", { style: { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" } },
      E("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderBottom: "1px solid var(--border)", background: "var(--s2)", flexWrap: "wrap", gap: 8 } },
        E("div", { style: { fontSize: 11, fontWeight: 700, color: "var(--text)" } }, `All Dimensions (${rows.length} with ≥${minTrades} trades)`),
        E("div", { style: { display: "flex", gap: 6, alignItems: "center" } },
          E("div", { style: { fontSize: 10, color: "var(--t3)", fontWeight: 600 } }, "Sort:"),
          [["edge", "Edge Score"], ["wr", "Win Rate"], ["pnl", "Net P&L"], ["trades", "Trades"]].map(([id, label]) =>
            E("button", {
              key: id, onClick: () => setSortBy(id),
              style: { padding: "3px 10px", borderRadius: 7, border: `1px solid ${sortBy === id ? "var(--acc)" : "var(--border)"}`, background: sortBy === id ? "var(--accL)" : "transparent", color: sortBy === id ? "var(--accD)" : "var(--t3)", fontSize: 10, fontWeight: 700, cursor: "pointer" }
            }, label)
          )
        )
      ),
      // Scrollable table wrapper
      E("div", { className: "analytics-table-scroll" },
        E("table", { style: { width: "100%", minWidth: 520, borderCollapse: "collapse", tableLayout: "fixed" } },
          E("colgroup", null,
            E("col", { style: { width: "auto" } }),
            E("col", { style: { width: 65 } }),
            E("col", { style: { width: 65 } }),
            E("col", { style: { width: 78 } }),
            E("col", { style: { width: 88 } }),
            E("col", { style: { width: 90 } })
          ),
          E("thead", null,
            E("tr", { style: { background: "var(--s2)" } },
              ["Dimension / Combo", "Trades", "Win %", "Avg P&L%", "Net P&L", "Edge"].map((h, hi) =>
                E("th", { key: h, style: { padding: "9px 16px", fontSize: 9, fontWeight: 700, color: "var(--t3)", textTransform: "uppercase", letterSpacing: "0.06em", textAlign: hi === 0 ? "left" : "right", borderBottom: "1px solid var(--border)", background: "var(--s2)", whiteSpace: "nowrap" } }, h)
              )
            )
          ),
          E("tbody", null,
            rows.length === 0
              ? E("tr", null, E("td", { colSpan: 6, style: { textAlign: "center", padding: "32px", color: "var(--t3)", fontSize: 13 } }, `No dimensions with ≥${minTrades} trades yet.`))
              : rows.map((r, i) => {
                  const badge = edgeLabel(r.score, r.total);
                  return E("tr", {
                    key: r.key,
                    style: { background: i % 2 === 0 ? "var(--surface)" : "var(--s2)", transition: "background .1s", cursor: "default" },
                    onMouseEnter: e => { e.currentTarget.style.background = "var(--s3)"; },
                    onMouseLeave: e => { e.currentTarget.style.background = i % 2 === 0 ? "var(--surface)" : "var(--s2)"; }
                  },
                    E("td", { style: { padding: "10px 16px", borderBottom: "1px solid var(--border)" } },
                      E("div", { style: { fontSize: 11.5, fontWeight: 600, color: "var(--text)", display: "flex", alignItems: "center", gap: 6, minWidth: 0 } },
                        E("div", { style: { width: 4, height: 4, borderRadius: "50%", background: r.score >= 30 ? "var(--acc)" : r.score >= 12 ? "color-mix(in srgb, var(--acc) 60%, var(--t3))" : "var(--red)", flexShrink: 0 } }),
                        E("span", { style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, r.key)
                      )
                    ),
                    E("td", { style: { padding: "10px 16px", borderBottom: "1px solid var(--border)", textAlign: "right", fontSize: 12, color: "var(--t2)", fontWeight: 600 } }, r.total),
                    E("td", { style: { padding: "10px 16px", borderBottom: "1px solid var(--border)", textAlign: "right", fontSize: 12, fontWeight: 700, color: r.wr >= 55 ? "var(--accD)" : r.wr >= 45 ? "var(--acc)" : "var(--red)" } }, r.wr.toFixed(0) + "%"),
                    E("td", { style: { padding: "10px 16px", borderBottom: "1px solid var(--border)", textAlign: "right", fontSize: 12, fontWeight: 700, color: r.avgPnl >= 0 ? "var(--accD)" : "var(--t3)" } }, fmtPctLocal(r.avgPnl)),
                    E("td", { style: { padding: "10px 16px", borderBottom: "1px solid var(--border)", textAlign: "right", fontSize: 12, fontWeight: 700, color: r.profit >= 0 ? "var(--accD)" : "var(--red)", fontVariantNumeric: "tabular-nums" } }, fmtUSDLocal(r.profit)),
                    E("td", { style: { padding: "10px 16px", borderBottom: "1px solid var(--border)", textAlign: "right" } },
                      E("span", { style: { fontSize: 10, fontWeight: 700, color: badge.color, background: badge.bg, borderRadius: 6, padding: "2px 7px", whiteSpace: "nowrap", display: "inline-block" } }, badge.label)
                    )
                  );
                })
          )
        )
      )
    ),

    // Insight box
    E("div", { style: { background: "var(--bBg)", border: "1px solid var(--bBdr)", borderRadius: 10, padding: "12px 16px", fontSize: 12, color: "var(--t2)", lineHeight: 1.6, display: "flex", gap: 10 } },
      E("span", { style: { flexShrink: 0 } }, "💡"),
      E("div", null,
        E("span", { style: { fontWeight: 700, color: "var(--text)" } }, "How Edge Score works: "),
        "Combines win rate, profit factor and sample size confidence. Scores ≥30 = strong edge you should exploit. 12–29 = developing, needs more data. <12 = no statistical edge — review or avoid."
      )
    )
  );
}

const Analytics = memo(function Analytics2({ trades, uiBlocks = {}, capital: propCapital }) {
  const capital = propCapital && propCapital > 0 ? propCapital : 5000;
  var _a, _b, _c, _d, _e, _f, _g;
  const [activeView, setActiveView] = useState("confluence");
  if (!trades.length) return /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", padding: "80px 20px", color: "var(--t3)" } }, "Log at least one trade to unlock performance analytics.");
  const confMap = {};
  trades.forEach((t) => {
    (t.confluences || []).forEach((c) => {
      if (!confMap[c]) confMap[c] = { n: 0, w: 0, pnl: 0, profit: 0 };
      confMap[c].n++;
      if (t.profit > 0) confMap[c].w++;
      confMap[c].pnl += calcPnL(t.profit, capital);
      confMap[c].profit += t.profit || 0;
    });
  });
  const confData = Object.entries(confMap).sort((a, b) => b[1].n - a[1].n).map(([name, d]) => __spreadValues({ name, wr: d.n ? d.w / d.n * 100 : 0 }, d));
  const sessMap = {};
  trades.forEach((t) => {
    const s = t.session || "Unknown";
    if (!sessMap[s]) sessMap[s] = { n: 0, w: 0, pnl: 0, profit: 0 };
    sessMap[s].n++;
    if (t.profit > 0) sessMap[s].w++;
    sessMap[s].pnl += calcPnL(t.profit, capital);
    sessMap[s].profit += t.profit || 0;
  });
  const sessData = Object.entries(sessMap).sort((a, b) => b[1].n - a[1].n).map(([name, d]) => __spreadValues({ name, wr: d.n ? d.w / d.n * 100 : 0 }, d));
  const modelMap = {};
  trades.forEach((t) => {
    const m = t.model || "Unknown";
    if (!modelMap[m]) modelMap[m] = { n: 0, w: 0, pnl: 0, profit: 0 };
    modelMap[m].n++;
    if (t.profit > 0) modelMap[m].w++;
    modelMap[m].pnl += calcPnL(t.profit, capital);
    modelMap[m].profit += t.profit || 0;
  });
  const modelData = Object.entries(modelMap).sort((a, b) => b[1].n - a[1].n).map(([name, d]) => __spreadValues({ name, wr: d.n ? d.w / d.n * 100 : 0 }, d));
  const gradeMap = {};
  trades.forEach((t) => {
    const g = t.grade || "\u2014";
    if (!gradeMap[g]) gradeMap[g] = { n: 0, w: 0, pnl: 0, profit: 0 };
    gradeMap[g].n++;
    if (t.profit > 0) gradeMap[g].w++;
    gradeMap[g].pnl += calcPnL(t.profit, capital);
    gradeMap[g].profit += t.profit || 0;
  });
  const rrMap = {};
  trades.forEach((t) => {
    const rr = t.expectedRR || "Unknown";
    if (!rrMap[rr]) rrMap[rr] = { n: 0, w: 0, pnl: 0 };
    rrMap[rr].n++;
    if (t.profit > 0) rrMap[rr].w++;
    rrMap[rr].pnl += calcPnL(t.profit, capital);
  });
  const symMap = {};
  trades.forEach((t) => {
    if (!symMap[t.symbol]) symMap[t.symbol] = { n: 0, w: 0, pnl: 0, profit: 0 };
    symMap[t.symbol].n++;
    if (t.profit > 0) symMap[t.symbol].w++;
    symMap[t.symbol].pnl += calcPnL(t.profit, capital);
    symMap[t.symbol].profit += t.profit || 0;
  });
  const symData = Object.entries(symMap).sort((a, b) => b[1].n - a[1].n).map(([name, d]) => __spreadValues({ name, wr: d.n ? d.w / d.n * 100 : 0 }, d));
  const keyLevelMap = {};
  trades.forEach((t) => {
    (t.keyLevels || []).forEach((kl) => {
      if (!keyLevelMap[kl]) keyLevelMap[kl] = { n: 0, w: 0, pnl: 0, profit: 0 };
      keyLevelMap[kl].n++;
      if (t.profit > 0) keyLevelMap[kl].w++;
      keyLevelMap[kl].pnl += calcPnL(t.profit, capital);
      keyLevelMap[kl].profit += t.profit || 0;
    });
  });
  const keyLevelData = Object.entries(keyLevelMap).sort((a, b) => b[1].n - a[1].n).map(([name, d]) => __spreadValues({ name, wr: d.n ? d.w / d.n * 100 : 0 }, d));
  const views = [{ id: "confluence", label: "Confluences" }, { id: "session", label: "Sessions" }, { id: "model", label: "Models" }, { id: "symbol", label: "Symbols" }, { id: "keylevel", label: "Key Levels" }, { id: "grade", label: "Grade Quality" }, { id: "edgefinder", label: "⚡ Edge Finder" }];
  function DataTable({ data, maxWR = 100 }) {
    return /* @__PURE__ */ React.createElement("div", { className: "analytics-table-scroll" },
      /* @__PURE__ */ React.createElement("table", { style: { width: "100%", minWidth: 420, borderCollapse: "collapse", tableLayout: "fixed" } },
        /* col widths — browser locks header + body to these */
        /* @__PURE__ */ React.createElement("colgroup", null,
          /* @__PURE__ */ React.createElement("col", { style: { width: "auto" } }),
          /* @__PURE__ */ React.createElement("col", { style: { width: 70 } }),
          /* @__PURE__ */ React.createElement("col", { style: { width: 80 } }),
          /* @__PURE__ */ React.createElement("col", { style: { width: 80 } }),
          /* @__PURE__ */ React.createElement("col", { style: { width: 96 } })
        ),
        /* @__PURE__ */ React.createElement("thead", null,
          /* @__PURE__ */ React.createElement("tr", { style: { background: "var(--s2)", borderRadius: "10px 10px 0 0" } },
            ["Factor", "Trades", "Win Rate", "Avg P&L%", "Net P&L $"].map((h, hi) =>
              /* @__PURE__ */ React.createElement("th", { key: h, style: { padding: "9px 14px", fontSize: 10, fontWeight: 700, color: "var(--t3)", letterSpacing: "0.06em", textTransform: "uppercase", textAlign: hi === 0 ? "left" : "right", borderBottom: "1px solid var(--border)", background: "var(--s2)", whiteSpace: "nowrap" } }, h)
            )
          )
        ),
        /* @__PURE__ */ React.createElement("tbody", null,
          data.map((row, i) =>
            /* @__PURE__ */ React.createElement("tr", {
              key: i,
              style: { background: i % 2 === 0 ? "var(--surface)" : "var(--s2)", transition: "background .1s", cursor: "default" },
              onMouseEnter: (e) => { e.currentTarget.style.background = "var(--s3)"; },
              onMouseLeave: (e) => { e.currentTarget.style.background = i % 2 === 0 ? "var(--surface)" : "var(--s2)"; }
            },
              /* Factor */
              /* @__PURE__ */ React.createElement("td", { style: { padding: "10px 14px", borderBottom: "1px solid var(--border)" } },
                /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 600, color: "var(--text)", display: "flex", alignItems: "center", gap: 7 } },
                  /* @__PURE__ */ React.createElement("div", { style: { width: 5, height: 5, borderRadius: "50%", background: row.wr >= 60 ? "var(--green)" : row.wr >= 40 ? "var(--acc)" : "var(--red)", flexShrink: 0 } }),
                  /* @__PURE__ */ React.createElement("span", { style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, row.name)
                )
              ),
              /* Trades */
              /* @__PURE__ */ React.createElement("td", { style: { padding: "10px 14px", borderBottom: "1px solid var(--border)", textAlign: "right", fontSize: 12, color: "var(--t2)", fontWeight: 600 } }, row.n),
              /* Win Rate */
              /* @__PURE__ */ React.createElement("td", { style: { padding: "10px 14px", borderBottom: "1px solid var(--border)", textAlign: "right", fontSize: 12, fontWeight: 700, color: row.wr >= 50 ? "var(--green)" : row.wr >= 40 ? "var(--acc)" : "var(--red)" } }, row.wr.toFixed(0), "%"),
              /* Avg P&L% */
              /* @__PURE__ */ React.createElement("td", { style: { padding: "10px 14px", borderBottom: "1px solid var(--border)", textAlign: "right", fontSize: 12, fontWeight: 700, color: row.pnl >= 0 ? "var(--accD)" : "var(--t2)" } }, fmtPct(row.pnl / row.n, 2)),
              /* Net P&L $ */
              /* @__PURE__ */ React.createElement("td", { style: { padding: "10px 14px", borderBottom: "1px solid var(--border)", textAlign: "right", fontSize: 12, fontWeight: 700, color: row.profit >= 0 ? "var(--accD)" : "var(--t2)", fontVariantNumeric: "tabular-nums" } }, fmtUSD(row.profit, true))
            )
          )
        )
      )
    );
  }
  var _c2=0,_p2=0,_md=0;[...trades].sort(function(a,b){return a.entryDate.localeCompare(b.entryDate);}).forEach(function(t){_c2+=calcPnL(t.profit,capital);if(_c2>_p2)_p2=_c2;var _d=_c2-_p2;if(_d<_md)_md=_d;});
  var _pf=calcProfitFactor(trades),_pfS=_pf===Infinity?"∞":_pf.toFixed(2);
  var _erA=trades.filter(function(t){return t.expectedRR&&t.expectedRR!=="Custom";}).map(function(t){return parseFloat((t.expectedRR||"1:1").split(":")[1]||1);});
  var _aER=_erA.length?_erA.reduce(function(s,v){return s+v;},0)/_erA.length:0;
  var _arA=trades.filter(function(t){return t.profit>0&&t.actualRR&&!t.actualRR.startsWith("-");}).map(function(t){return parseFloat((t.actualRR||"0:0").split(":")[1]||0);});
  var _aAR=_arA.length?_arA.reduce(function(s,v){return s+v;},0)/_arA.length:0;
  var _streak=calcStreak(trades);
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, className: "fade-up" },
  /* @__PURE__ */ React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:12}},
    /* @__PURE__ */ React.createElement("div",{style:{fontSize:11,fontWeight:700,color:"var(--t3)",letterSpacing:"0.06em",textTransform:"uppercase",display:"flex",alignItems:"center",gap:8}},
      /* @__PURE__ */ React.createElement("div",{style:{width:3,height:14,background:"var(--acc)",borderRadius:2}}),"Performance Metrics"),
    /* @__PURE__ */ React.createElement("div",{className:"g4",style:{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14}},
      [{label:"Max Drawdown",val:fmtPct(_md,1),sub:"Peak-to-trough",accent:"var(--red)",subCol:"var(--red)"},
       {label:"Profit Factor",val:_pfS,sub:_pf>=2?"Strong edge":_pf>=1?"Profitable":"Losing edge",subCol:_pf>=1.5?"var(--green)":_pf>=1?"var(--acc)":"var(--red)",accent:_pf>=1?"var(--acc)":"var(--red)"},
       {label:"Avg Target RR",val:_aER>0?"1:"+_aER.toFixed(1):"—",sub:"Planned reward ratio",accent:"var(--purple)",subCol:"var(--t3)"},
       {label:"Avg Actual RR",val:_aAR>0?"1:"+_aAR.toFixed(1):"—",sub:_aAR>=_aER?"On target ✓":"Below plan",subCol:_aAR>=_aER?"var(--green)":"var(--t3)",accent:"var(--cyan)"}
      ].map(function(k,i){return /* @__PURE__ */ React.createElement("div",{key:i,className:"card count-up",style:{borderTop:"3px solid "+k.accent,paddingTop:18,animationDelay:i*60+"ms"}},
        /* @__PURE__ */ React.createElement("div",{style:{fontSize:10,fontWeight:600,color:"var(--t3)",letterSpacing:0.3,marginBottom:10,textTransform:"uppercase"}},k.label),
        /* @__PURE__ */ React.createElement("div",{style:{fontSize:28,fontWeight:800,letterSpacing:"-1.5px",lineHeight:1}},k.val),
        k.sub&&/* @__PURE__ */ React.createElement("div",{style:{fontSize:11,marginTop:6,color:k.subCol,fontWeight:600}},k.sub)
      );})
    )
  ),
  /* @__PURE__ */ React.createElement("div",{style:{fontSize:11,fontWeight:700,color:"var(--t3)",letterSpacing:"0.06em",textTransform:"uppercase",display:"flex",alignItems:"center",gap:8}},
    /* @__PURE__ */ React.createElement("div",{style:{width:3,height:14,background:"var(--acc)",borderRadius:2}}),"Current Streak"),
  /* @__PURE__ */ React.createElement("div",{className:"card",style:{borderTop:"3px solid "+(_streak.type==="win"?"var(--acc)":_streak.type==="loss"?"var(--t2)":"var(--border)"),paddingTop:18}},
    /* @__PURE__ */ React.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16}},
      /* @__PURE__ */ React.createElement("div",{style:{display:"flex",alignItems:"center",gap:12}},
        /* @__PURE__ */ React.createElement("div",{style:{fontSize:36,fontWeight:800,lineHeight:1,color:_streak.type==="win"?"var(--accD)":_streak.type==="loss"?"var(--t2)":"var(--t3)",letterSpacing:"-2px"}},
          _streak.type==="win"?"+":_streak.type==="loss"?"-":"",_streak.current),
        /* @__PURE__ */ React.createElement("div",null,
          /* @__PURE__ */ React.createElement("div",{style:{fontSize:14,fontWeight:700,color:_streak.type==="win"?"var(--accD)":_streak.type==="loss"?"var(--t2)":"var(--t3)"}},
            _streak.type==="win"?"Win Streak":_streak.type==="loss"?"Loss Streak":"No Trades"),
          /* @__PURE__ */ React.createElement("div",{style:{fontSize:11,color:"var(--t3)",marginTop:2}},"consecutive ",_streak.type==="win"?"wins":"losses")
        )
      ),
      /* @__PURE__ */ React.createElement("div",{style:{display:"flex",gap:32,paddingLeft:16,borderLeft:"1px solid var(--border)"}},
        /* @__PURE__ */ React.createElement("div",null,
          /* @__PURE__ */ React.createElement("div",{style:{fontSize:9,color:"var(--t3)",fontWeight:600,letterSpacing:0.04,textTransform:"uppercase",marginBottom:3}},"Best Win Streak"),
          /* @__PURE__ */ React.createElement("div",{style:{fontSize:22,fontWeight:700,color:"var(--accD)"}},_streak.longest.win)
        ),
        /* @__PURE__ */ React.createElement("div",null,
          /* @__PURE__ */ React.createElement("div",{style:{fontSize:9,color:"var(--t3)",fontWeight:600,letterSpacing:0.04,textTransform:"uppercase",marginBottom:3}},"Worst Loss Streak"),
          /* @__PURE__ */ React.createElement("div",{style:{fontSize:22,fontWeight:700,color:"var(--t2)"}},_streak.longest.loss)
        )
      )
    )
  ),
  /* @__PURE__ */ React.createElement("div",{style:{fontSize:11,fontWeight:700,color:"var(--t3)",letterSpacing:"0.06em",textTransform:"uppercase",display:"flex",alignItems:"center",gap:8}},
    /* @__PURE__ */ React.createElement("div",{style:{width:3,height:14,background:"var(--purple)",borderRadius:2}}),"Market Breakdown"),
  /* @__PURE__ */ React.createElement("div", { className: "g4", style: { display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 14 } }, [
    { label: "Top Confluence", val: ((_b = (_a = confData.sort((a, b) => b.wr - a.wr)[0]) == null ? void 0 : _a.name) == null ? void 0 : _b.split(" ").slice(0, 2).join(" ")) || "\u2014", sub: confData.sort((a, b) => b.wr - a.wr)[0] ? `${confData.sort((a, b) => b.wr - a.wr)[0].wr.toFixed(0)}% win rate` : "", accent: "var(--acc)" },
    { label: "Best Session", val: ((_c = sessData.sort((a, b) => b.wr - a.wr)[0]) == null ? void 0 : _c.name) || "\u2014", sub: sessData.sort((a, b) => b.wr - a.wr)[0] ? `${sessData.sort((a, b) => b.wr - a.wr)[0].wr.toFixed(0)}% win rate` : "", accent: "var(--blue)" },
    { label: "Best Strategy", val: ((_e = (_d = modelData.sort((a, b) => b.wr - a.wr)[0]) == null ? void 0 : _d.name) == null ? void 0 : _e.split(" ")[0]) || "\u2014", sub: modelData.sort((a, b) => b.wr - a.wr)[0] ? `${modelData.sort((a, b) => b.wr - a.wr)[0].wr.toFixed(0)}% win rate` : "", accent: "var(--purple)" },
    { label: "Best Instrument", val: ((_f = symData.sort((a, b) => b.wr - a.wr)[0]) == null ? void 0 : _f.name) || "\u2014", sub: symData.sort((a, b) => b.wr - a.wr)[0] ? `${symData.sort((a, b) => b.wr - a.wr)[0].wr.toFixed(0)}% win rate` : "", accent: "var(--green)" },
    { label: "Best Key Level", val: ((_g = keyLevelData.sort((a, b) => b.wr - a.wr)[0]) == null ? void 0 : _g.name) || "\u2014", sub: keyLevelData.sort((a, b) => b.wr - a.wr)[0] ? `${keyLevelData.sort((a, b) => b.wr - a.wr)[0].wr.toFixed(0)}% win rate` : "", accent: "var(--cyan)" }
  ].map((k, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "card count-up", style: { borderTop: `3px solid ${k.accent}`, paddingTop: 18, animationDelay: `${i * 60}ms` } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", letterSpacing: 0.04, marginBottom: 10, textTransform: "uppercase" } }, k.label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 19, fontWeight: 800, color: "var(--text)", marginBottom: 4, fontFamily: "'Inter',sans-serif" } }, k.val), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11.5, color: "var(--t3)", fontWeight: 500 } }, k.sub)))), /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: 0, overflow: "hidden" } },
  /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 0, borderBottom: "1px solid var(--border)", overflowX: "auto" } }, views.map((v) => /* @__PURE__ */ React.createElement("button", { key: v.id, onClick: () => setActiveView(v.id), style: { padding: "12px 20px", fontSize: 12, fontWeight: activeView === v.id ? 700 : 500, color: activeView === v.id ? "var(--accD)" : "var(--t3)", background: "none", border: "none", cursor: "pointer", borderBottom: activeView === v.id ? "2px solid var(--acc)" : "2px solid transparent", whiteSpace: "nowrap", fontFamily: "inherit" } }, v.label))),
  /* @__PURE__ */ React.createElement("div", { className: "swipe-hint" }, "↔ Swipe to see all columns"),
  /* @__PURE__ */ React.createElement("div", { style: { padding: "16px" } }, activeView === "confluence" && /* @__PURE__ */ React.createElement(DataTable, { data: [...confData].sort((a, b) => b.wr - a.wr) }), activeView === "session" && /* @__PURE__ */ React.createElement(DataTable, { data: [...sessData].sort((a, b) => b.wr - a.wr) }), activeView === "model" && /* @__PURE__ */ React.createElement(DataTable, { data: [...modelData].sort((a, b) => b.wr - a.wr) }), activeView === "symbol" && /* @__PURE__ */ React.createElement(DataTable, { data: [...symData].sort((a, b) => b.wr - a.wr) }), activeView === "keylevel" && (keyLevelData.length > 0 ? /* @__PURE__ */ React.createElement(DataTable, { data: [...keyLevelData].sort((a, b) => b.wr - a.wr) }) : /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", padding: "40px 20px", color: "var(--t3)", fontSize: 13 } }, "\uD83D\uDCCD No key levels logged yet \u2014 add them in Trade Log to see analytics here.")), activeView === "edgefinder" && /* @__PURE__ */ React.createElement(EdgeFinder, { trades, capital }), activeView === "grade" && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 12, marginBottom: 16 } }, GRADES.map((g) => {
    const d = gradeMap[g] || { n: 0, w: 0, pnl: 0, profit: 0 };
    const wr = d.n ? d.w / d.n * 100 : 0;
    return /* @__PURE__ */ React.createElement("div", { key: g, className: "card", style: { textAlign: "center", padding: "16px 12px" } }, /* @__PURE__ */ React.createElement(GradeChip, { grade: g }), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 22, fontWeight: 600, marginTop: 10, color: "var(--text)" } }, wr.toFixed(0), "%"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "var(--t3)", marginTop: 3 } }, d.n, " trades"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: d.profit >= 0 ? "var(--accD)" : "var(--t2)", marginTop: 4 } }, d.n > 0 ? fmtUSD(d.profit) : "\u2014"));
  })), /* @__PURE__ */ React.createElement("div", { style: { padding: "12px", background: "var(--s2)", borderRadius: 10, fontSize: 12, color: "var(--t2)", lineHeight: 1.6 } }, "\u{1F4A1} A+ and A setups should have your highest win rate. If B/C grades outperform, your grading criteria may need recalibration.")))), /* @__PURE__ */ React.createElement("div", { className: "card" }, /* @__PURE__ */ React.createElement(Label, null, "Target RR vs Actual Execution"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 12, marginTop: 8 } }, Object.entries(rrMap).sort((a, b) => b[1].n - a[1].n).map(([rr, d]) => {
    const wr = d.n ? d.w / d.n * 100 : 0;
    return /* @__PURE__ */ React.createElement("div", { key: rr, style: { background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 11, padding: "14px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: "var(--text)", marginBottom: 8, letterSpacing: "-0.01em" } }, "Target ", rr), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 12 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9, color: "var(--t3)", fontWeight: 600, letterSpacing: 0.04, marginBottom: 3, textTransform: "uppercase" } }, "Trades"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 18, fontWeight: 700 } }, d.n)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9, color: "var(--t3)", fontWeight: 600, letterSpacing: 0.04, marginBottom: 3, textTransform: "uppercase" } }, "Win Rate"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, fontWeight: 700, color: wr >= 50 ? "var(--green)" : "var(--t2)" } }, wr.toFixed(0), "%")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9, color: "var(--t3)", fontWeight: 600, letterSpacing: 0.04, marginBottom: 3, textTransform: "uppercase" } }, "Avg P&L"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, fontWeight: 700, color: d.pnl / d.n >= 0 ? "var(--accD)" : "var(--red)" } }, fmtPct(d.pnl / d.n, 1)))));
  }))),
  /* @__PURE__ */ React.createElement("div",{className:"card",style:{padding:0,overflow:"hidden"}},
    /* @__PURE__ */ React.createElement("div",{className:"analytics-table-scroll"},
    /* @__PURE__ */ React.createElement("table",{style:{width:"100%",minWidth:420,borderCollapse:"collapse",tableLayout:"fixed"}},
      /* @__PURE__ */ React.createElement("colgroup",null,
        /* @__PURE__ */ React.createElement("col",{style:{width:"auto"}}),
        /* @__PURE__ */ React.createElement("col",{style:{width:70}}),
        /* @__PURE__ */ React.createElement("col",{style:{width:80}}),
        /* @__PURE__ */ React.createElement("col",{style:{width:80}}),
        /* @__PURE__ */ React.createElement("col",{style:{width:96}})
      ),
      /* @__PURE__ */ React.createElement("thead",null,
        /* @__PURE__ */ React.createElement("tr",{style:{background:"var(--s2)"}},
          ["Symbol","Trades","Win Rate","Avg P&L%","Net P&L $"].map((h,hi)=>
            /* @__PURE__ */ React.createElement("th",{key:h,style:{padding:"9px 14px",fontSize:10,fontWeight:700,color:"var(--t3)",letterSpacing:"0.06em",textTransform:"uppercase",textAlign:hi===0?"left":"right",borderBottom:"1px solid var(--border)",background:"var(--s2)",whiteSpace:"nowrap"}},h)
          )
        )
      ),
      /* @__PURE__ */ React.createElement("tbody",null,
        (()=>{
          const _sorted=[...symData].sort((a,b)=>b.profit-a.profit);
          if(!_sorted.length) return /* @__PURE__ */ React.createElement("tr",null,/* @__PURE__ */ React.createElement("td",{colSpan:5,style:{color:"var(--t3)",fontSize:13,textAlign:"center",padding:"20px 0"}},"No trades yet"));
          return _sorted.map((s,_si)=>
            /* @__PURE__ */ React.createElement("tr",{key:s.name,
              style:{background:_si%2===0?"var(--surface)":"var(--s2)",transition:"background .1s",cursor:"default"},
              onMouseEnter:e=>{e.currentTarget.style.background="var(--s3)"},
              onMouseLeave:e=>{e.currentTarget.style.background=_si%2===0?"var(--surface)":"var(--s2)"}
            },
              /* @__PURE__ */ React.createElement("td",{style:{padding:"10px 14px",borderBottom:"1px solid var(--border)"}},
                /* @__PURE__ */ React.createElement("div",{style:{fontSize:12,fontWeight:600,color:"var(--text)",display:"flex",alignItems:"center",gap:7}},
                  /* @__PURE__ */ React.createElement("div",{style:{width:5,height:5,borderRadius:"50%",background:s.wr>=60?"var(--green)":s.wr>=40?"var(--acc)":"var(--red)",flexShrink:0}}),
                  /* @__PURE__ */ React.createElement("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},s.name)
                )
              ),
              /* @__PURE__ */ React.createElement("td",{style:{padding:"10px 14px",borderBottom:"1px solid var(--border)",textAlign:"right",fontSize:12,color:"var(--t2)",fontWeight:600}},s.n),
              /* @__PURE__ */ React.createElement("td",{style:{padding:"10px 14px",borderBottom:"1px solid var(--border)",textAlign:"right",fontSize:12,fontWeight:700,color:s.wr>=50?"var(--green)":s.wr>=40?"var(--acc)":"var(--red)"}},s.wr.toFixed(0),"%"),
              /* @__PURE__ */ React.createElement("td",{style:{padding:"10px 14px",borderBottom:"1px solid var(--border)",textAlign:"right",fontSize:12,fontWeight:700,color:s.pnl/s.n>=0?"var(--accD)":"var(--t2)"}},fmtPct(s.pnl/s.n,2)),
              /* @__PURE__ */ React.createElement("td",{style:{padding:"10px 14px",borderBottom:"1px solid var(--border)",textAlign:"right",fontSize:12,fontWeight:700,color:s.profit>=0?"var(--accD)":"var(--t2)",fontVariantNumeric:"tabular-nums"}},fmtUSD(s.profit,true))
            )
          );
        })()
      )
    )
    )
  )
  );
});
const Psychology = memo(function Psychology2({ trades, uiBlocks = {}, capital: propCapital }) {
  if (!trades.length) return /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", padding: "80px 20px", color: "var(--t3)" } }, "Log trades with mindset data to unlock psychology insights.");
  const emotBefore = {};
  trades.forEach((t) => {
    const e = t.emotionBefore || "Neutral";
    if (!emotBefore[e]) emotBefore[e] = { n: 0, w: 0, pnl: 0 };
    emotBefore[e].n++;
    if (t.profit > 0) emotBefore[e].w++;
    emotBefore[e].pnl += t.profit || 0;
  });
  const emotAfter = {};
  trades.forEach((t) => {
    const e = t.emotionAfter || "Neutral";
    if (!emotAfter[e]) emotAfter[e] = { n: 0, w: 0 };
    emotAfter[e].n++;
    if (t.profit > 0) emotAfter[e].w++;
  });
  const mistakeMap = {};
  trades.forEach((t) => {
    const m = t.mistakes || "None";
    if (!mistakeMap[m]) mistakeMap[m] = { n: 0, loss: 0 };
    mistakeMap[m].n++;
    if (t.profit <= 0) mistakeMap[m].loss++;
  });
  const totalTrades = trades.length;
  const disciplineScore = Math.round(trades.filter((t) => t.mistakes === "None" || !t.mistakes).length / totalTrades * 100);
  const bestEmotion = Object.entries(emotBefore).sort((a, b) => b[1].w / b[1].n - a[1].w / a[1].n)[0];
  const worstEmotion = Object.entries(emotBefore).sort((a, b) => a[1].w / a[1].n - b[1].w / b[1].n)[0];
  const topMistake = Object.entries(mistakeMap).filter(([m]) => m !== "None").sort((a, b) => b[1].n - a[1].n)[0];
  const mistakeRate = Math.round(trades.filter((t) => t.mistakes && t.mistakes !== "None").length / totalTrades * 100);
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, className: "fade-up" }, /* @__PURE__ */ React.createElement("div", { className: "g4", style: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 } }, [
    { label: "Rule Adherence", val: `${disciplineScore}%`, sub: disciplineScore >= 80 ? "High discipline \u2014 stay consistent" : disciplineScore >= 60 ? "Moderate \u2014 review rule breaks" : "Low \u2014 focus on process, not P&L", accent: disciplineScore >= 80 ? "var(--green)" : disciplineScore >= 60 ? "var(--acc)" : "var(--t3)", key: "disciplineScore" },
    { label: "Peak Mindset", val: bestEmotion ? bestEmotion[0].split(" ")[0] || "\u2014" : "\u2014", sub: bestEmotion ? `${(bestEmotion[1].w / bestEmotion[1].n * 100).toFixed(0)}% win rate when in this state` : "", accent: "var(--acc)", key: "bestMindset" },
    { label: "Risk Mindset", val: worstEmotion && worstEmotion[1].n > 1 ? worstEmotion[0].split(" ")[0] : "\u2014", sub: worstEmotion && worstEmotion[1].n > 1 ? `Only ${(worstEmotion[1].w / worstEmotion[1].n * 100).toFixed(0)}% win rate` : "Not enough data", accent: "var(--border2)", key: "worstMindset" },
    { label: "Error Rate", val: `${mistakeRate}%`, sub: topMistake && topMistake[0] !== "None" ? `Most common: ${topMistake[0].split(" ").slice(0, 2).join(" ")}` : "Clean execution \u2014 no mistakes", accent: mistakeRate > 30 ? "var(--orange)" : mistakeRate > 15 ? "var(--acc)" : "var(--green)", key: "mistakeRate" }
  ].filter((k) => uiBlocks[k.key] !== false).map((k, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "card count-up", style: { borderTop: `2px solid ${k.accent}`, paddingTop: 18, animationDelay: `${i * 60}ms` } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", letterSpacing: 0.04, marginBottom: 10, textTransform: "uppercase" } }, k.label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 28, fontWeight: 800, letterSpacing: "-1.5px", fontFamily: "'Inter',sans-serif" } }, k.val), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--t3)", marginTop: 6, fontWeight: 500, lineHeight: 1.4 } }, k.sub)))), /* @__PURE__ */ React.createElement("div", { className: "g2", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 } }, /* @__PURE__ */ React.createElement("div", { className: "card" }, /* @__PURE__ */ React.createElement(Label, null, "Pre-Trade Mindset \u2192 Win Rate"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8, marginTop: 6 } }, Object.entries(emotBefore).sort((a, b) => b[1].n - a[1].n).map(([e, d]) => {
    const wr = d.n ? d.w / d.n * 100 : 0;
    const positive = ["Calm & Focused", "Confident", "Neutral"];
    const col = positive.includes(e) ? "var(--acc)" : wr >= 50 ? "var(--acc)" : "var(--t3)";
    return /* @__PURE__ */ React.createElement("div", { key: e, style: { display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement(EmotionChip, { emotion: e }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, height: 5, background: "var(--s3)", borderRadius: 4, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { width: `${wr}%`, height: "100%", background: col, borderRadius: 4, opacity: 0.85 } })), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, fontWeight: 500, color: col, width: 38, textAlign: "right" } }, wr.toFixed(0), "%"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, color: "var(--t3)", width: 38 } }, d.n, " trades"));
  })), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12, padding: "10px 14px", background: "var(--s2)", borderRadius: 10, fontSize: 12, color: "var(--t2)", lineHeight: 1.6 } }, "\u{1F4A1} Your best trades happen when you're calm and prepared. If you spot FOMO, Greed, or Anxiety before a trade \u2014 sit on your hands.")), /* @__PURE__ */ React.createElement("div", { className: "card" }, /* @__PURE__ */ React.createElement(Label, null, "Top Rule Breaks (by frequency)"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8, marginTop: 6 } }, Object.entries(mistakeMap).filter(([m]) => m !== "None").sort((a, b) => b[1].n - a[1].n).map(([m, d]) => {
    const lossRate = d.n ? d.loss / d.n * 100 : 0;
    return /* @__PURE__ */ React.createElement("div", { key: m }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 4 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, fontWeight: 600, color: "var(--text)" } }, m), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, color: "var(--t3)" } }, d.n, " times"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, fontWeight: 400, color: lossRate > 50 ? "var(--red)" : "var(--t3)" } }, lossRate.toFixed(0), "% ended in loss"))), /* @__PURE__ */ React.createElement("div", { style: { height: 4, background: "var(--s3)", borderRadius: 3, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { width: `${d.n / totalTrades * 100}%`, height: "100%", background: "var(--acc)", borderRadius: 3, opacity: 0.6 } })));
  }), Object.keys(mistakeMap).filter((m) => m !== "None").length === 0 && /* @__PURE__ */ React.createElement("div", { style: { color: "var(--t3)", fontSize: 13, textAlign: "center", padding: "20px 0" } }, "No mistakes recorded \u{1F389}")))), /* @__PURE__ */ React.createElement("div", { className: "card" }, /* @__PURE__ */ React.createElement(Label, null, "Trade Quality Timeline (last 20 trades)"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 4, marginTop: 10, flexWrap: "wrap" } }, [...trades].sort((a, b) => b.entryDate.localeCompare(a.entryDate)).slice(0, 20).reverse().map((t, i) => {
    const g = t.grade || "B";
    const hasMistake = t.mistakes && t.mistakes !== "None";
    const gradeColor = { "A+": "var(--accD)", "A": "var(--accD)", "B": "var(--acc)", "C": "var(--t2)", "D": "var(--t3)" }[g] || "var(--t2)";
    return /* @__PURE__ */ React.createElement("div", { key: i, title: `${t.symbol} ${t.entryDate} | Grade: ${g} | ${hasMistake ? "\u26A0 " + t.mistakes : "Clean"}`, style: { width: 36, height: 52, borderRadius: 8, border: `1.5px solid ${hasMistake ? "var(--accD)" : "var(--border)"}`, background: "var(--surface)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3, cursor: "default" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, fontWeight: 500, color: gradeColor } }, g), /* @__PURE__ */ React.createElement("div", { style: { width: 5, height: 5, borderRadius: "50%", background: t.profit > 0 ? "var(--acc)" : "var(--border2)" } }), hasMistake && /* @__PURE__ */ React.createElement("span", { style: { fontSize: 7, color: "var(--acc)" } }, "!"));
  })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 16, marginTop: 12, fontSize: 11, color: "var(--t3)" } }, /* @__PURE__ */ React.createElement("span", null, "\u25CF Accent = Win"), /* @__PURE__ */ React.createElement("span", null, "\u25CF Gray = Loss"), /* @__PURE__ */ React.createElement("span", null, "! = Mistake"), /* @__PURE__ */ React.createElement("span", null, "Border = mistake flag"))), /* @__PURE__ */ React.createElement("div", { className: "card" }, /* @__PURE__ */ React.createElement(Label, null, "Post-Trade Feeling \u2192 Actual Outcome"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: 10, marginTop: 8 } }, Object.entries(emotAfter).sort((a, b) => b[1].n - a[1].n).map(([e, d]) => {
    const wr = d.n ? d.w / d.n * 100 : 0;
    return /* @__PURE__ */ React.createElement("div", { key: e, style: { background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 11, padding: "12px 14px" } }, /* @__PURE__ */ React.createElement(EmotionChip, { emotion: e }), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 10, display: "flex", gap: 12 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9.5, color: "var(--t3)", fontWeight: 400, letterSpacing: 0.1, marginBottom: 2 } }, "Win Rate"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 18, fontWeight: 600, color: wr >= 50 ? "var(--acc)" : "var(--t2)" } }, wr.toFixed(0), "%")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9.5, color: "var(--t3)", fontWeight: 400, letterSpacing: 0.1, marginBottom: 2 } }, "Count"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 18, fontWeight: 500 } }, d.n))));
  }))));
});
function TradeLog({ trades, onAdd, onDelete, onEdit, onUpdateMeta, tradeMeta, onDuplicate, openFormTrigger, onFormOpened, usedConfluences = CONFLUENCES, usedSessions = SESSIONS, usedMistakes = MISTAKES, usedModels = MODELS, saveCustomList, customLists, onOpenSettings, capital: propCapital, accounts: allAccounts = [], activeAccId: defaultAccId = "" }) {
  const capital = (propCapital && propCapital > 0) ? propCapital : 5000;
  const blank = { symbol: "", entryDate: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), entryTime: "09:00:00", side: "Long", entryPrice: "", exitPrice: "", pnl: "", profit: "", riskAmount: "", stopLoss: "", takeProfit: "", status: "Closed", grade: "", expectedRR: "1:2", actualRR: "", session: "", model: "", emotionBefore: "", emotionAfter: "", mistakes: "", confluences: [], keyLevels: [], notes: "", accountId: defaultAccId || (allAccounts[0] && allAccounts[0].id) || "manual" };
  const [form, setForm] = useState(blank);
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const formTopRef = useRef(null);
  const [symF, setSymF] = useState("All");
  const [sideF, setSideF] = useState("All");
  const [gradeF, setGradeF] = useState("All");
  const [expandedId, setExpandedId] = useState(null);
  const [screenshots, setScreenshots] = useState({});
  const [newTradeScreenshots, setNewTradeScreenshots] = useState([]);
  const [lightbox, setLightbox] = useState(null);
  const [sf, setF] = useState("entryDate");
  const [sd, setD] = useState(-1);
  const isMobile = useMediaQuery("(max-width:768px)");
  const [sessF, setSessF] = useState("All");
  const [modelF, setModelF] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [keyLevelModal, setKeyLevelModal] = useState(false);
  const [page, setPage] = useState(1);
  const [showAll, setShowAll] = useState(false);
  const PAGE_SIZE = 10;
  useEffect(() => {
    if (openFormTrigger) {
      const defaultAcc = (defaultAccId && defaultAccId !== "all" && allAccounts.find(a => a.id === defaultAccId))
        ? defaultAccId
        : (allAccounts[0] ? allAccounts[0].id : "manual");
      setForm(__spreadProps(__spreadValues({}, blank), { accountId: defaultAcc }));
      setEditingId(null);
      setNewTradeScreenshots([]);
      setOpen(true);
      onFormOpened && onFormOpened();
    }
  }, [openFormTrigger]);
  const syms = ["All", ...new Set(trades.map((t) => t.symbol))];
  const sessOpts = ["All", ...usedSessions];
  const modelOpts = ["All", ...MODELS];
  const inp = { border: "1.5px solid var(--border)", borderRadius: 9, padding: "8px 11px", fontSize: 12, outline: "none", background: "var(--s2)", color: "var(--text)", width: "100%", boxSizing: "border-box", fontFamily: "inherit" };
  const sel = __spreadProps(__spreadValues({}, inp), { cursor: "pointer" });
  const toggleSort = (f) => {
    if (sf === f) setD((d) => -d);
    else {
      setF(f);
      setD(-1);
    }
  };
  const activeFilters = [symF, sideF, gradeF, sessF, modelF].filter((f) => f !== "All").length;
  const visible = useMemo(() => [...trades].filter(
    (t) => (symF === "All" || t.symbol === symF) && (sideF === "All" || t.side === sideF) && (gradeF === "All" || t.grade === gradeF) && (sessF === "All" || t.session === sessF) && (modelF === "All" || t.model === modelF)
  ).sort((a, b) => {
    let va = a[sf], vb = b[sf];
    if (["pnl", "entryPrice", "exitPrice", "profit"].includes(sf)) {
      va = +va;
      vb = +vb;
    }
    return va > vb ? sd : va < vb ? -sd : 0;
  }), [trades, symF, sideF, gradeF, sessF, modelF, sf, sd]);
  useEffect(() => { setPage(1); setShowAll(false); }, [symF, sideF, gradeF, sessF, modelF, sf]);
  const [saving, setSaving] = useState(false);
  const handleSave = useCallback(async () => {
    // Required field validation
    const missing = [];
    if (!form.symbol || !form.symbol.trim()) missing.push("Instrument");
    if (!form.entryDate) missing.push("Date");
    if (!form.side) missing.push("Direction");
    if (!form.entryPrice) missing.push("Entry Price");
    if (!form.exitPrice && !form.profit) missing.push("Exit Price or Net P&L");
    if (missing.length > 0) {
      alert("Please fill required fields: " + missing.join(", "));
      console.warn("[TJ] Trade save blocked — missing:", missing);
      return;
    }
    if (saving) return;
    setSaving(true);
    console.log("[TJ] Saving trade:", form);
    try {
      const profitVal = +form.profit || 0;
      const td = __spreadProps(__spreadValues({}, form), {
        entryPrice: +form.entryPrice || 0,
        exitPrice: +form.exitPrice || 0,
        pnl: 0, // pnl is always calculated dynamically; stored as 0
        profit: profitVal,
        riskAmount: +form.riskAmount || 0,
        stopLoss: +form.stopLoss || 0,
        takeProfit: +form.takeProfit || 0
      });
      if (editingId) {
        onEdit(editingId, td);
      } else {
        const newId = Date.now();
        onAdd(__spreadProps(__spreadValues({}, td), { id: newId }));
        if (newTradeScreenshots && newTradeScreenshots.length > 0) {
          try {
            const arr = await SDB.appendMany(newId, newTradeScreenshots);
            setScreenshots((s) => __spreadProps(__spreadValues({}, s), { [newId]: arr }));
            onUpdateMeta(newId, { hasScreenshot: arr.length > 0 });
          } catch(e) { console.error("[TJ] Screenshot save error:", e); }
          setNewTradeScreenshots([]);
        }
      }
      console.log("[TJ] Trade saved successfully.");
      const defaultAcc = (defaultAccId && defaultAccId !== "all" && allAccounts.find(a => a.id === defaultAccId))
        ? defaultAccId : (allAccounts[0] ? allAccounts[0].id : "manual");
      setForm(__spreadProps(__spreadValues({}, blank), { accountId: defaultAcc }));
      setEditingId(null);
      setOpen(false);
    } catch(e) {
      console.error("[TJ] Save error:", e);
    } finally {
      setSaving(false);
    }
  }, [form, editingId, onAdd, onEdit, saving]);
  const startEdit = useCallback((t) => {
    setForm({
      symbol: t.symbol || "",
      entryDate: t.entryDate || "",
      entryTime: t.entryTime || "",
      side: t.side || deriveDir(t),
      entryPrice: String(t.entryPrice || ""),
      exitPrice: String(t.exitPrice || ""),
      pnl: "0",
      profit: String(t.profit || ""),
      riskAmount: String(t.riskAmount || ""),
      stopLoss: String(t.stopLoss || ""),
      takeProfit: String(t.takeProfit || ""),
      status: t.status || "Closed",
      grade: t.grade || "",
      expectedRR: t.expectedRR || "1:2",
      actualRR: t.actualRR || "",
      session: t.session || "",
      model: t.model || "",
      emotionBefore: t.emotionBefore || "",
      emotionAfter: t.emotionAfter || "",
      mistakes: t.mistakes || "",
      confluences: Array.isArray(t.confluences) ? t.confluences : [],
      keyLevels: Array.isArray(t.keyLevels) ? t.keyLevels : [],
      notes: t.notes || "",
      accountId: t.accountId || ""
    });
    setEditingId(t.id);
    setOpen(true);
    // Pre-load screenshot for the edit form if it exists
    const meta = tradeMeta[t.id] || {};
    if (meta.hasScreenshot && !screenshots[t.id]) {
      setScreenshots((s) => __spreadProps(__spreadValues({}, s), { [t.id]: "__loading__" }));
      SDB.getAll(t.id).then((arr) => {
        if (arr && arr.length > 0) setScreenshots((s) => __spreadProps(__spreadValues({}, s), { [t.id]: arr }));
        else setScreenshots((s) => { const n = __spreadValues({}, s); delete n[t.id]; return n; });
      }).catch(() => setScreenshots((s) => { const n = __spreadValues({}, s); delete n[t.id]; return n; }));
    }
    setTimeout(() => { if (formTopRef.current) { formTopRef.current.scrollIntoView({ behavior: "smooth", block: "start" }); } else { window.scrollTo({ top: 0, behavior: "smooth" }); } }, 60);
  }, [tradeMeta, screenshots]);
  const handleScreenshotsAdd = useCallback(async (id, fileList) => {
    const files = Array.from(fileList || []).filter(Boolean);
    if (files.length === 0) return;
    try {
      const arr = await SDB.appendMany(id, files);
      setScreenshots((s) => __spreadProps(__spreadValues({}, s), { [id]: arr }));
      onUpdateMeta(id, { hasScreenshot: arr.length > 0 });
    } catch (e) {
      console.error("[TJ] add screenshots:", e);
    }
  }, [onUpdateMeta]);
  const handleScreenshotReplaceAt = useCallback(async (id, index, file) => {
    if (!file) return;
    try {
      const arr = await SDB.replaceAt(id, index, file);
      setScreenshots((s) => __spreadProps(__spreadValues({}, s), { [id]: arr }));
      onUpdateMeta(id, { hasScreenshot: arr.length > 0 });
    } catch (e) {
      console.error("[TJ] replace screenshot:", e);
    }
  }, [onUpdateMeta]);
  const handleRemoveShotAt = useCallback(async (id, index) => {
    try {
      const arr = await SDB.removeAt(id, index);
      setScreenshots((s) => {
        const n = __spreadValues({}, s);
        if (arr.length === 0) delete n[id]; else n[id] = arr;
        return n;
      });
      onUpdateMeta(id, { hasScreenshot: arr.length > 0 });
    } catch (e) {
      console.error("[TJ] remove screenshot:", e);
    }
  }, [onUpdateMeta]);
  useEffect(() => {
    if (!expandedId) return;
    const meta = tradeMeta[expandedId] || {};
    if (meta.hasScreenshot && !screenshots[expandedId]) {
      setScreenshots((s) => __spreadProps(__spreadValues({}, s), { [expandedId]: "__loading__" }));
      SDB.getAll(expandedId).then((arr) => {
        if (arr && arr.length > 0) setScreenshots((s) => __spreadProps(__spreadValues({}, s), { [expandedId]: arr }));
        else setScreenshots((s) => {
          const n = __spreadValues({}, s);
          delete n[expandedId];
          return n;
        });
      }).catch(() => setScreenshots((s) => {
        const n = __spreadValues({}, s);
        delete n[expandedId];
        return n;
      }));
    }
  }, [expandedId, tradeMeta]);
  const toggleConfluence = (c) => {
    setForm((f) => __spreadProps(__spreadValues({}, f), { confluences: f.confluences.includes(c) ? f.confluences.filter((x) => x !== c) : [...f.confluences, c] }));
  };
  const TH = ({ l, f }) => /* @__PURE__ */ React.createElement("th", { onClick: () => toggleSort(f), style: { padding: "10px 12px", textAlign: "left", fontSize: 10, color: sf === f ? "var(--accD)" : "var(--t3)", fontWeight: 500, letterSpacing: 0.1, cursor: "pointer", userSelect: "none", whiteSpace: "nowrap", background: "var(--s2)", borderBottom: `2px solid ${sf === f ? "var(--acc)" : "transparent"}`, transition: "all .15s" } }, l, " ", /* @__PURE__ */ React.createElement("span", { style: { opacity: 0.4 } }, sf === f ? sd > 0 ? "\u2191" : "\u2193" : "\u2195"));
  return /* @__PURE__ */ React.createElement("div", { className: "fade-up" },
    /* @__PURE__ */ React.createElement(InputModal, { open: keyLevelModal, title: "Add Key Level", subtitle: "e.g. 2345.50 resistance · support · POI · liquidity zone", placeholder: "e.g. 2345.50 resistance", onConfirm: (v) => setForm((f) => ({ ...f, keyLevels: [...(f.keyLevels || []), v] })), onClose: () => setKeyLevelModal(false) }),
    lightbox && /* @__PURE__ */ React.createElement("div", { onClick: () => setLightbox(null), style: { position: "fixed", inset: 0, background: "rgba(0,0,0,.35)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", zIndex: 2147483647, display: "flex", alignItems: "center", justifyContent: "center", padding: 24, cursor: "zoom-out" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "relative", maxWidth: "96vw", maxHeight: "94vh" }, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("img", { src: lightbox, alt: "Chart Screenshot", onLoad: (e) => { e.target.style.opacity="1"; }, onError: (e) => { e.target.style.opacity="1"; }, style: { maxWidth: "96vw", maxHeight: "90vh", width: "auto", height: "auto", objectFit: "contain", borderRadius: 10, boxShadow: "0 40px 120px rgba(0,0,0,.9)", display: "block", opacity: 0, transition: "opacity .3s ease", background: "transparent" } }), /* @__PURE__ */ React.createElement("button", { onClick: () => setLightbox(null), style: { position: "absolute", top: -16, right: -16, background: "#fff", border: "none", borderRadius: "50%", width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 18, fontWeight: 800, boxShadow: "0 4px 16px rgba(0,0,0,.5)", color: "#111", lineHeight: 1 } }, "\u00D7"), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", bottom: -30, left: 0, right: 0, textAlign: "center", color: "rgba(255,255,255,.5)", fontSize: 12 } }, "Tap anywhere or \u00D7 to close"))),
    /* @__PURE__ */ React.createElement("div", { className: "hide-desktop", style: { fontSize: 10, color: "var(--t3)", background: "var(--s2)", borderRadius: 8, padding: "5px 10px", marginBottom: 8, display: "flex", alignItems: "center", gap: 5 } }, "💡 Double-tap any trade row to edit"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, alignItems: "center", marginBottom: 10, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("button", { onClick: () => {
    const defaultAcc = (defaultAccId && defaultAccId !== "all" && allAccounts.find(a => a.id === defaultAccId))
      ? defaultAccId
      : (allAccounts[0] ? allAccounts[0].id : "manual");
    const freshBlank = __spreadProps(__spreadValues({}, blank), { accountId: defaultAcc });
    if (open && !editingId) {
      setForm(freshBlank);
      setOpen(false);
      setNewTradeScreenshots([]);
    } else {
      setEditingId(null);
      setForm(freshBlank);
      setOpen((o) => !o);
    }
  }, style: { background: open ? "var(--s3)" : "linear-gradient(135deg,var(--acc),var(--accD))", color: open ? "var(--t2)" : "#fff", border: `1.5px solid ${open ? "var(--border)" : "transparent"}`, borderRadius: 10, padding: "9px 18px", fontWeight: 700, fontSize: 12, cursor: "pointer", boxShadow: open ? "none" : "0 3px 10px color-mix(in srgb, var(--acc) 35%, transparent)", flexShrink: 0, display: "flex", alignItems: "center", gap: 6 } }, open && !editingId ? "\u2715 Cancel" : "+ Log Trade"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 5, flexWrap: "wrap" } }, syms.map((s) => /* @__PURE__ */ React.createElement("button", { key: s, onClick: () => setSymF(s), style: { padding: "5px 13px", borderRadius: 20, border: `1.5px solid ${symF === s ? "var(--acc)" : "var(--border)"}`, background: symF === s ? "var(--accF)" : "var(--surface)", color: symF === s ? "var(--acc)" : "var(--t2)", fontWeight: symF === s ? 700 : 500, fontSize: 12, cursor: "pointer" } }, s))), /* @__PURE__ */ React.createElement("div", { style: { marginLeft: "auto", display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" } }, activeFilters > 0 && /* @__PURE__ */ React.createElement("button", { onClick: () => {
    setSymF("All");
    setSideF("All");
    setGradeF("All");
    setSessF("All");
    setModelF("All");
  }, style: { padding: "5px 11px", borderRadius: 20, border: "1.5px solid var(--rBdr)", background: "var(--rBg)", color: "var(--red)", fontSize: 11, fontWeight: 700, cursor: "pointer" } }, "\u2715 Clear (", activeFilters, ")"), /* @__PURE__ */ React.createElement("button", { onClick: () => exportCSV(visible, capital), title: "Export to CSV", style: { padding: "5px 13px", borderRadius: 20, border: "1.5px solid var(--border)", background: "var(--surface)", color: "var(--t2)", fontSize: 11, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }, onMouseEnter: (e) => {
    e.currentTarget.style.borderColor = "var(--acc)";
    e.currentTarget.style.color = "var(--accD)";
  }, onMouseLeave: (e) => {
    e.currentTarget.style.borderColor = "var(--border)";
    e.currentTarget.style.color = "var(--t2)";
  } }, "\u2193 CSV"), /* @__PURE__ */ React.createElement("button", { onClick: () => exportJSON(visible), title: "Export full backup as JSON (re-importable)", style: { padding: "5px 13px", borderRadius: 20, border: "1.5px solid var(--border)", background: "var(--surface)", color: "var(--t2)", fontSize: 11, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }, onMouseEnter: (e) => {
    e.currentTarget.style.borderColor = "var(--green)";
    e.currentTarget.style.color = "var(--green)";
  }, onMouseLeave: (e) => {
    e.currentTarget.style.borderColor = "var(--border)";
    e.currentTarget.style.color = "var(--t2)";
  } }, "\u2193 JSON"), /* @__PURE__ */ React.createElement("button", { onClick: () => exportTradePDF(visible, capital), title: "Export to PDF", style: { padding: "5px 13px", borderRadius: 20, border: "1.5px solid var(--border)", background: "var(--surface)", color: "var(--t2)", fontSize: 11, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }, onMouseEnter: (e) => {
    e.currentTarget.style.borderColor = "var(--purple)";
    e.currentTarget.style.color = "var(--purple)";
  }, onMouseLeave: (e) => {
    e.currentTarget.style.borderColor = "var(--border)";
    e.currentTarget.style.color = "var(--t2)";
  } }, "\u2193 PDF"), /* @__PURE__ */ React.createElement("button", { onClick: () => setShowFilters((f) => !f), style: { padding: "5px 14px", borderRadius: 20, border: `1.5px solid ${showFilters ? "var(--acc)" : "var(--border)"}`, background: showFilters ? "var(--accF)" : "var(--surface)", color: showFilters ? "var(--accD)" : "var(--t2)", fontSize: 12, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 5 } }, /* @__PURE__ */ React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5" }, /* @__PURE__ */ React.createElement("polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" })), "Filters", activeFilters > 0 ? ` (${activeFilters})` : ""))), showFilters && /* @__PURE__ */ React.createElement("div", { style: { background: "var(--surface)", border: "1.5px solid var(--border)", borderRadius: 14, padding: "14px 16px", marginBottom: 12, display: "flex", gap: 10, flexWrap: "wrap", alignItems: "flex-start", width: "100%", boxSizing: "border-box" } }, /* @__PURE__ */ React.createElement("div", { style: { flex: "0 0 auto" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 700, color: "var(--t2)", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.04 } }, "Side"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 4 } }, ["All", "Long", "Short"].map((s) => /* @__PURE__ */ React.createElement("button", { key: s, onClick: () => setSideF(s), style: { padding: "4px 12px", borderRadius: 20, border: `1.5px solid ${sideF === s ? "var(--acc)" : "var(--border)"}`, background: sideF === s ? "var(--accF)" : "var(--surface)", color: sideF === s ? "var(--accD)" : "var(--t2)", fontWeight: sideF === s ? 700 : 500, fontSize: 11, cursor: "pointer" } }, s)))), /* @__PURE__ */ React.createElement("div", { style: { flex: "0 0 auto" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 700, color: "var(--t2)", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.04 } }, "Grade"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 4 } }, ["All", ...GRADES].map((g) => /* @__PURE__ */ React.createElement("button", { key: g, onClick: () => setGradeF(g), style: { padding: "4px 11px", borderRadius: 20, border: `1.5px solid ${gradeF === g ? "var(--acc)" : "var(--border)"}`, background: gradeF === g ? "var(--accF)" : "var(--surface)", color: gradeF === g ? "var(--accD)" : "var(--t2)", fontWeight: gradeF === g ? 700 : 500, fontSize: 11, cursor: "pointer" } }, g)))), /* @__PURE__ */ React.createElement("div", { style: { flex: "1 1 160px", minWidth: 0, maxWidth: "100%" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 700, color: "var(--t2)", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.04 } }, "Session"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 4, flexWrap: "wrap" } }, sessOpts.map((s) => /* @__PURE__ */ React.createElement("button", { key: s, onClick: () => setSessF(s), style: { padding: "4px 11px", borderRadius: 20, border: `1.5px solid ${sessF === s ? "var(--acc)" : "var(--border)"}`, background: sessF === s ? "var(--accF)" : "var(--surface)", color: sessF === s ? "var(--accD)" : "var(--t2)", fontWeight: sessF === s ? 700 : 500, fontSize: 11, cursor: "pointer" } }, s)))), /* @__PURE__ */ React.createElement("div", { style: { flex: "1 1 200px", minWidth: 0, maxWidth: "100%" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 700, color: "var(--t2)", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.04 } }, "Model"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 4, flexWrap: "wrap" } }, modelOpts.map((m) => /* @__PURE__ */ React.createElement("button", { key: m, onClick: () => setModelF(m), style: { padding: "4px 11px", borderRadius: 20, border: `1.5px solid ${modelF === m ? "var(--acc)" : "var(--border)"}`, background: modelF === m ? "var(--accF)" : "var(--surface)", color: modelF === m ? "var(--accD)" : "var(--t2)", fontWeight: modelF === m ? 700 : 500, fontSize: 11, cursor: "pointer" } }, m))))), open && /* @__PURE__ */ React.createElement("div", { ref: formTopRef, className: "card scale-in", style: { marginBottom: 16, border: editingId ? "2px solid var(--acc)" : "1px solid var(--border)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16, flexWrap: "wrap", gap: 8 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 700, color: "var(--text)" } }, editingId ? "\u{1F527} Edit Trade" : "\u{1F4CA} Log New Trade"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, allAccounts.length > 0 && !editingId && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 700, color: "var(--t3)", textTransform: "uppercase", letterSpacing: "0.05em", whiteSpace: "nowrap" } }, "Account"), /* @__PURE__ */ React.createElement("select", { value: form.accountId || "", onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { accountId: e.target.value })), style: { border: "1.5px solid var(--acc)", borderRadius: 8, padding: "5px 10px", fontSize: 12, fontWeight: 700, outline: "none", background: "var(--accF)", color: "var(--accD)", cursor: "pointer", fontFamily: "inherit", maxWidth: 160 } }, allAccounts.map((a) => /* @__PURE__ */ React.createElement("option", { key: a.id, value: a.id }, a.label)))), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => onOpenSettings("lists"), style: { fontSize: 10, color: "var(--t3)", background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 7, cursor: "pointer", fontWeight: 600, padding: "4px 10px" } }, "\u{1F4DD} Manage Lists"))), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.06 } }, "Price & P&L"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4,1fr)", gap: 10 } }, [
    ["Instrument", "symbol", "text", "e.g. XAUUSD"],
    ["Date", "entryDate", "date", null],
    ["Entry Time", "entryTime", "time", null],
    ["Direction", "side", "select", null]
  ].map(([l, k, t, ph]) => /* @__PURE__ */ React.createElement("div", { key: k }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.04 } }, l), t === "select" ? /* @__PURE__ */ React.createElement("select", { value: form[k], onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { [k]: e.target.value })), style: sel }, /* @__PURE__ */ React.createElement("option", null, "Long"), /* @__PURE__ */ React.createElement("option", null, "Short")) : t === "date" ? /* @__PURE__ */ React.createElement(CustomDatePicker, { value: form[k] || "", onChange: (v) => setForm((f) => __spreadProps(__spreadValues({}, f), { [k]: v })), style: { width: "100%" } }) : t === "time" ? /* @__PURE__ */ React.createElement(CustomTimePicker, { value: form[k] || "", onChange: (v) => setForm((f) => __spreadProps(__spreadValues({}, f), { [k]: v })), style: { width: "100%" } }) : /* @__PURE__ */ React.createElement("input", { type: t, step: t === "number" ? ".01" : void 0, placeholder: ph || void 0, value: form[k] || "", onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { [k]: e.target.value })), style: inp })))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(3,1fr)", gap: 10, marginTop: 10 } }, [
    ["Entry Price ($)", "entryPrice", "number", "e.g. 2150.00"],
    ["Exit Price ($)", "exitPrice", "number", "e.g. 2165.00 (optional)"],
    ["Net P&L ($)", "profit", "number", "e.g. 85.00 or -42.50"]
  ].map(([l, k, t, ph]) => /* @__PURE__ */ React.createElement("div", { key: k }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.04 } }, l), /* @__PURE__ */ React.createElement("input", { type: t, step: ".01", placeholder: ph || void 0, value: form[k] || "", onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { [k]: e.target.value })), style: inp }))))), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.06 } }, "Trade Details"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4,1fr)", gap: 10 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.04 } }, "Grade"), /* @__PURE__ */ React.createElement("select", { value: form.grade, onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { grade: e.target.value })), style: sel }, /* @__PURE__ */ React.createElement("option", { value: "" }, "Grade "), GRADES.map((g) => /* @__PURE__ */ React.createElement("option", { key: g }, g)))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.04 } }, "Target RR"), /* @__PURE__ */ React.createElement("select", { value: form.expectedRR, onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { expectedRR: e.target.value })), style: sel }, RR_OPTIONS.map((r) => /* @__PURE__ */ React.createElement("option", { key: r }, r)))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.04 } }, "Actual RR"), /* @__PURE__ */ React.createElement("input", { placeholder: "e.g. 1:2.5 (Optional)", value: form.actualRR, onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { actualRR: e.target.value })), style: inp })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.04 } }, "Session"), /* @__PURE__ */ React.createElement("select", { value: form.session, onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { session: e.target.value })), style: sel }, /* @__PURE__ */ React.createElement("option", { value: "" }, "Session "), usedSessions.map((s) => /* @__PURE__ */ React.createElement("option", { key: s }, s)))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.04 } }, "Strategy"), /* @__PURE__ */ React.createElement("select", { value: form.model, onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { model: e.target.value })), style: sel }, /* @__PURE__ */ React.createElement("option", { value: "" }, "Strategy "), usedModels.map((m) => /* @__PURE__ */ React.createElement("option", { key: m }, m)))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.04 } }, "Risk ($)"), /* @__PURE__ */ React.createElement("input", { type: "number", step: ".01", placeholder: "Risk $ (Optional)", value: form.riskAmount || "", onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { riskAmount: e.target.value })), style: inp })))), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.06 } }, "Psychology"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: 10 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.04 } }, "Mindset Before"), /* @__PURE__ */ React.createElement("select", { value: form.emotionBefore, onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { emotionBefore: e.target.value })), style: sel }, /* @__PURE__ */ React.createElement("option", { value: "" }, "Mindset "), EMOTIONS_B.map((e) => /* @__PURE__ */ React.createElement("option", { key: e }, e)))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.04 } }, "Mindset After"), /* @__PURE__ */ React.createElement("select", { value: form.emotionAfter, onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { emotionAfter: e.target.value })), style: sel }, /* @__PURE__ */ React.createElement("option", { value: "" }, "Mindset "), EMOTIONS_A.map((e) => /* @__PURE__ */ React.createElement("option", { key: e }, e)))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.04 } }, "Mistake"), /* @__PURE__ */ React.createElement("select", { value: form.mistakes, onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { mistakes: e.target.value })), style: sel }, /* @__PURE__ */ React.createElement("option", { value: "" }, "Mistake "), usedMistakes.map((m) => /* @__PURE__ */ React.createElement("option", { key: m }, m)))))), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.04 } }, "Confluences \u2014 Select All That Apply"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 6 } }, usedConfluences.map((c) => /* @__PURE__ */ React.createElement("button", { key: c, type: "button", onClick: () => toggleConfluence(c), style: { padding: "4px 11px", borderRadius: 20, border: `1.5px solid ${form.confluences.includes(c) ? "var(--acc)" : "var(--border)"}`, background: form.confluences.includes(c) ? "var(--accF)" : "var(--surface)", color: form.confluences.includes(c) ? "var(--accD)" : "var(--t2)", fontSize: 11, fontWeight: form.confluences.includes(c) ? 700 : 400, cursor: "pointer", fontFamily: "inherit" } }, form.confluences.includes(c) ? "\u2713 " : "", c)))), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", textTransform: "uppercase", letterSpacing: 0.04 } }, "Key Levels"), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => onOpenSettings && onOpenSettings("lists"), style: { fontSize: 10, color: "var(--t3)", background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 6, cursor: "pointer", fontWeight: 600, padding: "3px 8px" } }, "\u2699\uFE0F Presets")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8 } },
  (customLists && customLists.keyLevels && customLists.keyLevels.length > 0) && /* @__PURE__ */ React.createElement("div", null,
    /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9, fontWeight: 600, color: "var(--t3)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.04em" } }, "Saved Presets \u2014 click to toggle"),
    /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 5 } },
      (customLists.keyLevels || []).map((kl, ki) => {
        const isSelected = (form.keyLevels || []).includes(kl);
        return /* @__PURE__ */ React.createElement("button", {
          key: ki, type: "button",
          onClick: () => setForm((f) => ({ ...f, keyLevels: isSelected ? (f.keyLevels||[]).filter(x => x!==kl) : [...(f.keyLevels||[]), kl] })),
          style: { padding: "3px 11px", borderRadius: 20, border: "1.5px solid " + (isSelected ? "var(--blue)" : "var(--border)"), background: isSelected ? "var(--bBg)" : "var(--surface)", color: isSelected ? "var(--blue)" : "var(--t2)", fontSize: 11, fontWeight: isSelected ? 700 : 500, cursor: "pointer", transition: "all .15s", fontFamily: "inherit" }
        }, isSelected ? "\u2713 " : "", kl);
      })
    )
  ),
  /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 6 } },
    (form.keyLevels || []).length > 0
      ? (form.keyLevels || []).map((kl, ki) => /* @__PURE__ */ React.createElement("div", { key: ki, style: { display: "flex", alignItems: "center", background: "var(--bBg)", border: "1px solid var(--bBdr)", borderRadius: 20, overflow: "hidden" } },
          /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, fontWeight: 600, padding: "3px 10px", color: "var(--blue)" } }, kl),
          /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => setForm((f) => ({ ...f, keyLevels: (f.keyLevels || []).filter((_, i) => i !== ki) })), style: { background: "none", border: "none", borderLeft: "1px solid var(--bBdr)", color: "var(--t3)", cursor: "pointer", fontSize: 12, padding: "3px 7px", lineHeight: 1 } }, "\u00D7")
        ))
      : /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: "var(--t3)" } }, "No key levels selected \u2014 use presets above or add in Settings \u2192 Lists")
  )
)), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.04 } }, "Trade Rationale & Notes"), /* @__PURE__ */ React.createElement("textarea", { value: form.notes, onChange: (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { notes: e.target.value })), placeholder: "Notes (Optional) — entry trigger, execution quality, key lessons...", style: { width: "100%", minHeight: 80, border: "1.5px solid var(--border)", borderRadius: 10, padding: "10px 12px", fontSize: 12, color: "var(--text)", background: "var(--s2)", resize: "vertical", outline: "none", lineHeight: 1.7, fontFamily: "inherit" } })),
/* Screenshots — works for both new trade and edit */
/* @__PURE__ */ React.createElement("div", { style: { marginBottom: 14 } },
  /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.04, display: "flex", alignItems: "center", gap: 6 } },
    /* @__PURE__ */ React.createElement("span", null, "\uD83D\uDCF8 Chart Screenshots"),
    editingId && Array.isArray(screenshots[editingId]) && screenshots[editingId].length > 0 && /* @__PURE__ */ React.createElement("span", { style: { background: "var(--gBg)", border: "1px solid var(--gBdr)", color: "var(--green)", borderRadius: 20, padding: "1px 7px", fontSize: 9, fontWeight: 700 } }, "\u2713 " + screenshots[editingId].length + " saved"),
    !editingId && newTradeScreenshots.length > 0 && /* @__PURE__ */ React.createElement("span", { style: { background: "var(--gBg)", border: "1px solid var(--gBdr)", color: "var(--green)", borderRadius: 20, padding: "1px 7px", fontSize: 9, fontWeight: 700 } }, "\u2713 " + newTradeScreenshots.length + " ready")
  ),
  editingId
    ? (screenshots[editingId] === "__loading__"
        ? /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", height: 100, background: "var(--s2)", borderRadius: 10, border: "1.5px solid var(--border)", color: "var(--t3)", fontSize: 12 } }, "Loading\u2026")
        : (Array.isArray(screenshots[editingId]) && screenshots[editingId].length > 0)
          ? /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8 } },
              /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: 8 } },
                screenshots[editingId].map((src, idx) => /* @__PURE__ */ React.createElement("div", { key: idx, style: { position: "relative" } },
                  /* @__PURE__ */ React.createElement("img", { src: src, alt: "Chart " + (idx+1), onClick: () => setLightbox(src), style: { width: "100%", height: 120, objectFit: "cover", borderRadius: 8, border: "1px solid var(--border)", display: "block", background: "#111", cursor: "zoom-in" } }),
                  /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 4, left: 4, background: "rgba(0,0,0,.65)", color: "#fff", borderRadius: 5, padding: "1px 6px", fontSize: 9, fontWeight: 600, backdropFilter: "blur(4px)", pointerEvents: "none" } }, "#" + (idx+1)),
                  /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 4, right: 4, display: "flex", gap: 3 } },
                    /* @__PURE__ */ React.createElement("label", { title: "Replace", style: { background: "rgba(15,23,42,.8)", color: "#fff", borderRadius: 5, padding: "2px 6px", fontSize: 9, cursor: "pointer", fontWeight: 600, backdropFilter: "blur(4px)" } },
                      "\u21BA",
                      /* @__PURE__ */ React.createElement("input", { type: "file", accept: "image/*", style: { display: "none" }, onChange: (e) => handleScreenshotReplaceAt(editingId, idx, e.target.files[0]) })
                    ),
                    /* @__PURE__ */ React.createElement("button", { type: "button", title: "Delete", onClick: () => handleRemoveShotAt(editingId, idx), style: { background: "rgba(220,38,38,.85)", color: "#fff", border: "none", borderRadius: 5, padding: "2px 6px", fontSize: 9, cursor: "pointer", fontWeight: 600 } }, "\u2715")
                  )
                ))
              ),
              /* @__PURE__ */ React.createElement("label", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 6, border: "1.5px dashed var(--border2)", borderRadius: 8, padding: "8px", cursor: "pointer", background: "var(--s2)", fontSize: 11, color: "var(--t3)", fontWeight: 500 },
                onMouseEnter: (e) => { e.currentTarget.style.borderColor = "var(--acc)"; e.currentTarget.style.color = "var(--accD)"; },
                onMouseLeave: (e) => { e.currentTarget.style.borderColor = "var(--border2)"; e.currentTarget.style.color = "var(--t3)"; }
              },
                "+ Add more screenshots",
                /* @__PURE__ */ React.createElement("input", { type: "file", accept: "image/*", multiple: true, style: { display: "none" }, onChange: (e) => handleScreenshotsAdd(editingId, e.target.files) })
              )
            )
          : /* @__PURE__ */ React.createElement("label", { style: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 7, border: "2px dashed var(--border2)", borderRadius: 10, minHeight: 110, cursor: "pointer", background: "var(--s2)", transition: "all .15s" },
              onMouseEnter: (e) => { e.currentTarget.style.borderColor = "var(--acc)"; e.currentTarget.style.background = "var(--accF)"; },
              onMouseLeave: (e) => { e.currentTarget.style.borderColor = "var(--border2)"; e.currentTarget.style.background = "var(--s2)"; }
            },
              /* @__PURE__ */ React.createElement("span", { style: { fontSize: 26 } }, "\uD83D\uDCF8"),
              /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: "var(--t3)", fontWeight: 600 } }, "Upload chart screenshots"),
              /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, color: "var(--t3)", opacity: 0.7 } }, "PNG, JPG, WebP \u2014 select multiple, stored locally"),
              /* @__PURE__ */ React.createElement("input", { type: "file", accept: "image/*", multiple: true, style: { display: "none" }, onChange: (e) => handleScreenshotsAdd(editingId, e.target.files) })
            )
      )
    : (newTradeScreenshots.length > 0
        ? /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8 } },
            /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: 8 } },
              newTradeScreenshots.map((file, idx) => {
                const url = URL.createObjectURL(file);
                return /* @__PURE__ */ React.createElement("div", { key: idx, style: { position: "relative" } },
                  /* @__PURE__ */ React.createElement("img", { src: url, alt: "Preview " + (idx+1), onClick: () => setLightbox(url), style: { width: "100%", height: 120, objectFit: "cover", borderRadius: 8, border: "1px solid var(--border)", display: "block", background: "#111", cursor: "zoom-in" } }),
                  /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 4, left: 4, background: "rgba(0,0,0,.65)", color: "#fff", borderRadius: 5, padding: "1px 6px", fontSize: 9, fontWeight: 600, backdropFilter: "blur(4px)", pointerEvents: "none" } }, "#" + (idx+1)),
                  /* @__PURE__ */ React.createElement("button", { type: "button", title: "Remove", onClick: () => setNewTradeScreenshots(prev => prev.filter((_,i) => i !== idx)), style: { position: "absolute", top: 4, right: 4, background: "rgba(220,38,38,.85)", color: "#fff", border: "none", borderRadius: 5, padding: "2px 6px", fontSize: 9, cursor: "pointer", fontWeight: 600 } }, "\u2715")
                );
              })
            ),
            /* @__PURE__ */ React.createElement("label", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 6, border: "1.5px dashed var(--border2)", borderRadius: 8, padding: "8px", cursor: "pointer", background: "var(--s2)", fontSize: 11, color: "var(--t3)", fontWeight: 500 },
              onMouseEnter: (e) => { e.currentTarget.style.borderColor = "var(--acc)"; e.currentTarget.style.color = "var(--accD)"; },
              onMouseLeave: (e) => { e.currentTarget.style.borderColor = "var(--border2)"; e.currentTarget.style.color = "var(--t3)"; }
            },
              "+ Add more screenshots",
              /* @__PURE__ */ React.createElement("input", { type: "file", accept: "image/*", multiple: true, style: { display: "none" }, onChange: (e) => { const files = Array.from(e.target.files || []); if (files.length) setNewTradeScreenshots(prev => [...prev, ...files]); e.target.value = ""; } })
            )
          )
        : /* @__PURE__ */ React.createElement("label", { style: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 7, border: "2px dashed var(--border2)", borderRadius: 10, minHeight: 110, cursor: "pointer", background: "var(--s2)", transition: "all .15s" },
            onMouseEnter: (e) => { e.currentTarget.style.borderColor = "var(--acc)"; e.currentTarget.style.background = "var(--accF)"; },
            onMouseLeave: (e) => { e.currentTarget.style.borderColor = "var(--border2)"; e.currentTarget.style.background = "var(--s2)"; }
          },
            /* @__PURE__ */ React.createElement("span", { style: { fontSize: 26 } }, "\uD83D\uDCF8"),
            /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: "var(--t3)", fontWeight: 600 } }, "Attach chart screenshots"),
            /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, color: "var(--t3)", opacity: 0.7 } }, "PNG, JPG, WebP \u2014 select multiple, saved with trade"),
            /* @__PURE__ */ React.createElement("input", { type: "file", accept: "image/*", multiple: true, style: { display: "none" }, onChange: (e) => { const files = Array.from(e.target.files || []); if (files.length) setNewTradeScreenshots(prev => [...prev, ...files]); e.target.value = ""; } })
          )
      )
),
/* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8 } }, /* @__PURE__ */ React.createElement("button", { onClick: handleSave, disabled: saving, style: { background: saving ? "var(--s3)" : "linear-gradient(135deg,var(--acc),var(--accD))", color: saving ? "var(--t3)" : "#fff", border: "none", borderRadius: 10, padding: "10px 26px", fontWeight: 700, fontSize: 13, cursor: saving ? "not-allowed" : "pointer", boxShadow: saving ? "none" : "0 3px 10px color-mix(in srgb, var(--acc) 35%, transparent)", opacity: saving ? 0.7 : 1 } }, saving ? "Saving…" : editingId ? "\u2713 Save Changes" : "\u2713 Log Trade"), editingId && /* @__PURE__ */ React.createElement("button", { onClick: () => {
    const defaultAcc = (defaultAccId && defaultAccId !== "all" && allAccounts.find(a => a.id === defaultAccId))
      ? defaultAccId : (allAccounts[0] ? allAccounts[0].id : "manual");
    setForm(__spreadProps(__spreadValues({}, blank), { accountId: defaultAcc }));
    setEditingId(null);
    setOpen(false);
  }, style: { background: "var(--s3)", color: "var(--t2)", border: "1px solid var(--border)", borderRadius: 10, padding: "10px 18px", fontWeight: 600, fontSize: 13, cursor: "pointer" } }, "Cancel"))), /* @__PURE__ */ React.createElement("div", { style: { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden", boxShadow: "var(--sh2)" } }, /* @__PURE__ */ React.createElement("div", { className: "tlog-table-wrap", style: { overflowX: "auto" } }, /* @__PURE__ */ React.createElement("table", { style: { width: "100%", borderCollapse: "collapse", fontSize: 11.5, minWidth: 680, tableLayout: "auto" } }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", { style: { borderBottom: "1px solid var(--border)" } }, /* @__PURE__ */ React.createElement(TH, { l: "Symbol", f: "symbol" }), /* @__PURE__ */ React.createElement(TH, { l: "Date", f: "entryDate" }), !isMobile && /* @__PURE__ */ React.createElement(TH, { l: "Time", f: "entryTime" }), /* @__PURE__ */ React.createElement(TH, { l: "Side", f: "side" }), /* @__PURE__ */ React.createElement(TH, { l: "Session", f: "session" }), !isMobile && /* @__PURE__ */ React.createElement(TH, { l: "Model", f: "model" }), /* @__PURE__ */ React.createElement(TH, { l: "Grade", f: "grade" }), /* @__PURE__ */ React.createElement(TH, { l: "Entry", f: "entryPrice" }), /* @__PURE__ */ React.createElement(TH, { l: "Exit", f: "exitPrice" }), /* @__PURE__ */ React.createElement(TH, { l: "P&L%", f: "pnl" }), /* @__PURE__ */ React.createElement(TH, { l: "Exp.RR", f: "expectedRR" }), !isMobile && /* @__PURE__ */ React.createElement(TH, { l: "Emotion", f: "emotionBefore" }), /* @__PURE__ */ React.createElement("th", { style: { padding: "10px 12px", background: "var(--s2)", fontSize: 10, color: "var(--t3)", fontWeight: 500 } }, "Actions"))), /* @__PURE__ */ React.createElement("tbody", null, !visible.length && /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", { colSpan: 13, style: { padding: 40, textAlign: "center", color: "var(--t3)", fontSize: 13 } }, trades.length === 0 ? /* @__PURE__ */ React.createElement("span", null, "No trades logged yet \u2014 press ", /* @__PURE__ */ React.createElement("kbd", { style: { background: "var(--s3)", border: "1px solid var(--border)", borderRadius: 4, padding: "0 5px", fontSize: 11, fontFamily: "monospace" } }, "N"), " to log your first trade") : "No trades match your current filters \u2014 try adjusting or clearing them")), (showAll ? visible : visible.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)).map((t, i) => {
    var _a;
    const dir = deriveDir(t);
    const meta = tradeMeta[t.id] || {};
    const isExp = expandedId === t.id;
    const hasMistake = t.mistakes && t.mistakes !== "None";
    const rowBg = i % 2 === 0 ? "var(--surface)" : "var(--s2)";
    return /* @__PURE__ */ React.createElement(React.Fragment, { key: t.id }, /* @__PURE__ */ React.createElement(
      "tr",
      {
        style: { background: rowBg, borderBottom: isExp ? "none" : `1px solid var(--border)`, cursor: "pointer", transition: "background .1s" },
        onClick: () => setExpandedId(isExp ? null : t.id),
        onDoubleClick: () => { setExpandedId(null); startEdit(t); },
        title: "Double-tap to edit",
        onMouseEnter: (e) => {
          e.currentTarget.style.background = "var(--s3)";
          e.currentTarget.style.boxShadow = `inset 3px 0 0 var(--acc)`;
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.background = rowBg;
          e.currentTarget.style.boxShadow = "none";
        }
      },
      /* @__PURE__ */ React.createElement("td", { style: { padding: "10px 12px", fontWeight: 700, maxWidth: 110, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "100%" } }, t.symbol)),
      /* @__PURE__ */ React.createElement("td", { style: { padding: "10px 12px", color: "var(--t2)", fontFamily: "JetBrains Mono,monospace", fontSize: 11 } }, t.entryDate),
      !isMobile && /* @__PURE__ */ React.createElement("td", { style: { padding: "10px 12px", color: "var(--t3)", fontFamily: "JetBrains Mono,monospace", fontSize: 11 } }, t.entryTime),
      /* @__PURE__ */ React.createElement("td", { style: { padding: "10px 12px" } }, /* @__PURE__ */ React.createElement(Chip, { color: dir === "Long" ? "truegreen" : "red", size: "sm" }, dir === "Long" ? "\u2191" : "\u2193", " ", dir)),
      /* @__PURE__ */ React.createElement("td", { style: { padding: "10px 12px" } }, /* @__PURE__ */ React.createElement(SessionChip, { session: t.session })),
      !isMobile && /* @__PURE__ */ React.createElement("td", { style: { padding: "10px 12px", fontSize: 11, color: "var(--t2)", maxWidth: 120, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, ((_a = t.model) == null ? void 0 : _a.split(" ")[0]) || "\u2014"),
      /* @__PURE__ */ React.createElement("td", { style: { padding: "10px 12px" } }, /* @__PURE__ */ React.createElement(GradeChip, { grade: t.grade })),
      /* @__PURE__ */ React.createElement("td", { style: { padding: "10px 12px", fontFamily: "JetBrains Mono,monospace", fontSize: 11, color: "var(--t2)" } }, fmtPrice(t.entryPrice)),
      /* @__PURE__ */ React.createElement("td", { style: { padding: "10px 12px", fontFamily: "JetBrains Mono,monospace", fontSize: 11, color: "var(--t2)" } }, fmtPrice(t.exitPrice || 0)),
      /* @__PURE__ */ React.createElement("td", { style: { padding: "10px 12px" } }, /* @__PURE__ */ React.createElement("div", { style: { lineHeight: 1.3 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 700, color: t.profit >= 0 ? "var(--accD)" : "var(--red)" } }, t.profit != null && t.profit !== 0 ? (t.profit >= 0 ? "+$" : "-$") + Math.abs(t.profit).toFixed(2) : "\u2014"), t.profit != null && t.profit !== 0 && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "var(--t3)", fontWeight: 500 } }, calcPnL(t.profit, capital) >= 0 ? "+" : "", calcPnL(t.profit, capital).toFixed(2), "%"))),
      /* @__PURE__ */ React.createElement("td", { style: { padding: "10px 12px", fontSize: 11, color: "var(--t3)", fontWeight: 600 } }, t.expectedRR || "\u2014"),
      !isMobile && /* @__PURE__ */ React.createElement("td", { style: { padding: "10px 12px" } }, /* @__PURE__ */ React.createElement(EmotionChip, { emotion: t.emotionBefore })),
      /* @__PURE__ */ React.createElement("td", { style: { padding: "6px 8px", whiteSpace: "nowrap" }, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 3, alignItems: "center" } },
  /* Edit button — pencil icon */
  /* @__PURE__ */ React.createElement("button", { title: "Edit trade", onClick: () => startEdit(t),
    style: { background: "var(--s2)", border: "1px solid var(--border)", color: "var(--t2)", cursor: "pointer", width: 28, height: 28, borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all .15s" },
    onMouseEnter: (e) => { e.currentTarget.style.background = "var(--accF)"; e.currentTarget.style.borderColor = "var(--acc)"; e.currentTarget.style.color = "var(--accD)"; },
    onMouseLeave: (e) => { e.currentTarget.style.background = "var(--s2)"; e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--t2)"; }
  },
    /* @__PURE__ */ React.createElement("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
      /* @__PURE__ */ React.createElement("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
      /* @__PURE__ */ React.createElement("path", { d: "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
    )
  ),
  /* Delete button — trash icon */
  /* @__PURE__ */ React.createElement("button", { title: "Delete trade", onClick: () => onDelete(t.id),
    style: { background: "var(--s2)", border: "1px solid var(--border)", color: "var(--t2)", cursor: "pointer", width: 28, height: 28, borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all .15s" },
    onMouseEnter: (e) => { e.currentTarget.style.background = "var(--rBg)"; e.currentTarget.style.borderColor = "var(--red)"; e.currentTarget.style.color = "var(--red)"; },
    onMouseLeave: (e) => { e.currentTarget.style.background = "var(--s2)"; e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--t2)"; }
  },
    /* @__PURE__ */ React.createElement("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
      /* @__PURE__ */ React.createElement("polyline", { points: "3 6 5 6 21 6" }),
      /* @__PURE__ */ React.createElement("path", { d: "M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" }),
      /* @__PURE__ */ React.createElement("path", { d: "M10 11v6" }),
      /* @__PURE__ */ React.createElement("path", { d: "M14 11v6" }),
      /* @__PURE__ */ React.createElement("path", { d: "M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" })
    )
  )
))
    ), isExp && /* @__PURE__ */ React.createElement("tr", { style: { background: rowBg, borderBottom: `1px solid var(--border)` } }, /* @__PURE__ */ React.createElement("td", { colSpan: 13, style: { padding: "0 16px 16px", borderTop: "1px solid var(--border)" } }, /* @__PURE__ */ React.createElement("div", { style: { paddingTop: 14, display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 14, minWidth: 0, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12, minWidth: 0, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9.5, fontWeight: 600, color: "var(--t3)", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.04 } }, "Confluences Used"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 5 } }, (t.confluences || []).length > 0 ? t.confluences.map((c) => /* @__PURE__ */ React.createElement(Chip, { key: c, color: "gold", size: "sm" }, c)) : /* @__PURE__ */ React.createElement("span", { style: { color: "var(--t3)", fontSize: 12 } }, "No confluences recorded"))), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 8 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9.5, fontWeight: 600, color: "var(--t3)", marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.04 } }, "Key Levels"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 5 } }, (t.keyLevels || []).length > 0 ? (t.keyLevels || []).map((kl, ki) => /* @__PURE__ */ React.createElement("span", { key: ki, style: { background: "var(--bBg)", border: "1px solid var(--bBdr)", color: "var(--blue)", borderRadius: 20, padding: "2px 10px", fontSize: 10.5, fontWeight: 600 } }, kl)) : /* @__PURE__ */ React.createElement("span", { style: { color: "var(--t3)", fontSize: 11 } }, "None"))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 } }, [["Mindset Before", t.emotionBefore || "\u2014"], ["Mindset After", t.emotionAfter || "\u2014"], ["Mistake", t.mistakes || "None"]].map(([l, v]) => /* @__PURE__ */ React.createElement("div", { key: l, style: { background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 9, padding: "10px 12px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9, fontWeight: 600, color: "var(--t3)", marginBottom: 4, textTransform: "uppercase", letterSpacing: 0.04 } }, l), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 600, color: v === "None" ? "var(--green)" : (v == null ? void 0 : v.includes("FOMO")) || (v == null ? void 0 : v.includes("Revenge")) || (v == null ? void 0 : v.includes("Angry")) ? "var(--red)" : "var(--text)" } }, v)))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 } }, [["Target RR", t.expectedRR || "\u2014"], ["Actual RR", t.actualRR || "\u2014"]].map(([l, v]) => /* @__PURE__ */ React.createElement("div", { key: l, style: { background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 9, padding: "10px 12px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9, fontWeight: 600, color: "var(--t3)", marginBottom: 4, textTransform: "uppercase", letterSpacing: 0.04 } }, l), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, fontWeight: 600, color: "var(--text)", fontFamily: "JetBrains Mono,monospace" } }, v)))), (t.riskAmount > 0 || t.stopLoss > 0) && /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 } }, t.riskAmount > 0 && /* @__PURE__ */ React.createElement("div", { style: { background: "var(--rBg)", border: "1px solid var(--rBdr)", borderRadius: 9, padding: "10px 12px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9, fontWeight: 600, color: "var(--t3)", marginBottom: 4, textTransform: "uppercase", letterSpacing: 0.04 } }, "Risk Amount"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 700, color: "var(--red)" } }, "$", t.riskAmount.toFixed(2))), t.riskAmount > 0 && t.profit && /* @__PURE__ */ React.createElement("div", { style: { background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 9, padding: "10px 12px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9, fontWeight: 600, color: "var(--t3)", marginBottom: 4, textTransform: "uppercase", letterSpacing: 0.04 } }, "R-Multiple"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 700, color: t.profit >= 0 ? "var(--accD)" : "var(--red)" } }, (t.profit / t.riskAmount).toFixed(2), "R"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9.5, fontWeight: 600, color: "var(--t3)", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.04 } }, "Trade Rationale & Notes"), /* @__PURE__ */ React.createElement("textarea", { value: meta.notes || t.notes || "", onChange: (e) => onUpdateMeta(t.id, { notes: e.target.value }), onClick: (e) => e.stopPropagation(), placeholder: "Entry trigger, execution quality, key lessons learned, what you'd do differently...", style: { width: "100%", minHeight: 80, border: "1.5px solid var(--border)", borderRadius: 10, padding: "10px 12px", fontSize: 12, color: "var(--text)", background: "var(--surface)", resize: "vertical", outline: "none", lineHeight: 1.7, fontFamily: "inherit" } }))), /* @__PURE__ */ React.createElement("div", { style: { minWidth: 0, overflow: "hidden" } },
  React.createElement("div", { style: { fontSize: 9.5, fontWeight: 500, color: "var(--t3)", marginBottom: 6 } }, "Chart Screenshots" + (Array.isArray(screenshots[t.id]) && screenshots[t.id].length > 0 ? " (" + screenshots[t.id].length + ")" : "")),
  screenshots[t.id] === "__loading__"
    ? React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", height: 120, background: "var(--surface)", borderRadius: 10, border: "1.5px solid var(--border)", color: "var(--t3)", fontSize: 12 } }, "Loading\u2026")
    : (Array.isArray(screenshots[t.id]) && screenshots[t.id].length > 0)
      ? React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8 }, onClick: (e) => e.stopPropagation() },
          React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(140px,1fr))", gap: 6 } },
            screenshots[t.id].map((src, idx) => React.createElement("div", { key: idx, style: { position: "relative", cursor: "zoom-in" }, onClick: (e) => { e.stopPropagation(); setLightbox(src); } },
              React.createElement("img", { src: src, alt: "Chart " + (idx+1), style: { width: "100%", height: 110, objectFit: "cover", borderRadius: 8, border: "1px solid var(--border)", display: "block", background: "#111" } }),
              React.createElement("div", { style: { position: "absolute", top: 4, left: 4, background: "rgba(0,0,0,.65)", color: "#fff", borderRadius: 5, padding: "1px 6px", fontSize: 9, fontWeight: 600, backdropFilter: "blur(4px)", pointerEvents: "none" } }, "#" + (idx+1)),
              React.createElement("div", { style: { position: "absolute", top: 4, right: 4, display: "flex", gap: 3 }, onClick: (e) => e.stopPropagation() },
                React.createElement("label", { title: "Replace", style: { background: "rgba(15,23,42,.8)", color: "#fff", borderRadius: 5, padding: "2px 6px", fontSize: 9, cursor: "pointer", fontWeight: 600, backdropFilter: "blur(4px)" }, onClick: (e) => e.stopPropagation() },
                  "\u21BA",
                  React.createElement("input", { type: "file", accept: "image/*", style: { display: "none" }, onChange: (e) => handleScreenshotReplaceAt(t.id, idx, e.target.files[0]) })
                ),
                React.createElement("button", { type: "button", title: "Delete", onClick: (e) => { e.stopPropagation(); handleRemoveShotAt(t.id, idx); }, style: { background: "rgba(220,38,38,.85)", color: "#fff", border: "none", borderRadius: 5, padding: "2px 6px", fontSize: 9, cursor: "pointer", fontWeight: 600 } }, "\u2715")
              )
            ))
          ),
          React.createElement("label", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 6, border: "1.5px dashed var(--border2)", borderRadius: 8, padding: "7px", cursor: "pointer", background: "var(--s2)", fontSize: 11, color: "var(--t3)", fontWeight: 500 }, onClick: (e) => e.stopPropagation() },
            "+ Add more",
            React.createElement("input", { type: "file", accept: "image/*", multiple: true, style: { display: "none" }, onChange: (e) => handleScreenshotsAdd(t.id, e.target.files) })
          )
        )
      : React.createElement("label", { style: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 7, border: "2px dashed var(--border2)", borderRadius: 10, minHeight: 120, cursor: "pointer", background: "var(--s2)", transition: "all .15s" }, onClick: (e) => e.stopPropagation(), onMouseEnter: (e) => { e.currentTarget.style.borderColor = "var(--acc)"; e.currentTarget.style.background = "var(--accF)"; }, onMouseLeave: (e) => { e.currentTarget.style.borderColor = "var(--border2)"; e.currentTarget.style.background = "var(--s2)"; } },
          React.createElement("span", { style: { fontSize: 24 } }, "\u{1F4F8}"),
          React.createElement("span", { style: { fontSize: 11, color: "var(--t3)", fontWeight: 600 } }, "Upload chart screenshots"),
          React.createElement("span", { style: { fontSize: 10, color: "var(--t3)", opacity: 0.7 } }, "Select multiple"),
          React.createElement("input", { type: "file", accept: "image/*", multiple: true, style: { display: "none" }, onChange: (e) => handleScreenshotsAdd(t.id, e.target.files) })
        )
)))));
  })))), /* @__PURE__ */ React.createElement("div", { style: { padding: "10px 16px", background: "var(--s2)", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 } },/* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" } },  /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, fontWeight: 600, color: "var(--t3)" } }, showAll ? visible.length : Math.min(page * PAGE_SIZE, visible.length), " of ", visible.length, " trades"),  !showAll && visible.length > PAGE_SIZE && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 3 } },    /* @__PURE__ */ React.createElement("button", { onClick: () => setPage(p => Math.max(1, p - 1)), disabled: page === 1, style: { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 7, width: 26, height: 26, cursor: page === 1 ? "default" : "pointer", fontSize: 14, color: page === 1 ? "var(--t3)" : "var(--t2)", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", opacity: page === 1 ? 0.4 : 1 } }, "\u2039"),    /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, fontWeight: 600, color: "var(--t2)", padding: "0 6px", minWidth: 70, textAlign: "center" } }, "Page ", page, " / ", Math.ceil(visible.length / PAGE_SIZE)),    /* @__PURE__ */ React.createElement("button", { onClick: () => setPage(p => Math.min(Math.ceil(visible.length / PAGE_SIZE), p + 1)), disabled: page >= Math.ceil(visible.length / PAGE_SIZE), style: { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 7, width: 26, height: 26, cursor: page >= Math.ceil(visible.length / PAGE_SIZE) ? "default" : "pointer", fontSize: 14, color: page >= Math.ceil(visible.length / PAGE_SIZE) ? "var(--t3)" : "var(--t2)", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", opacity: page >= Math.ceil(visible.length / PAGE_SIZE) ? 0.4 : 1 } }, "\u203a")  )),/* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } },  /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: "var(--t3)" } }, "P&L: ", /* @__PURE__ */ React.createElement("strong", { style: { color: visible.reduce((s,t)=>s+(t.profit||0),0)/capital*100>=0?"var(--accD)":"var(--t2)" } }, fmtPct(visible.reduce((s,t)=>s+(t.profit||0),0)/capital*100))),  /* @__PURE__ */ React.createElement("button", { onClick: () => { setShowAll(v => !v); setPage(1); }, style: { fontSize: 11, fontWeight: 700, color: showAll ? "var(--accD)" : "var(--t3)", background: showAll ? "var(--accF)" : "var(--s3)", border: `1px solid ${showAll ? "color-mix(in srgb, var(--acc) 40%, transparent)" : "var(--border)"}`, borderRadius: 8, padding: "4px 12px", cursor: "pointer", whiteSpace: "nowrap" } }, showAll ? "Paginate" : "See All"))))
);
}
const CalendarView = memo(function CalendarView2({ trades, onDayClick, capital: propCapital }) {
  const [month, setMonth] = useState((/* @__PURE__ */ new Date()).getMonth());
  const [year, setYear] = useState((/* @__PURE__ */ new Date()).getFullYear());
  const [mode, setMode] = useState("usd");
  const [calView, setCalView] = useState("monthly");
  const capital = (propCapital && propCapital > 0) ? propCapital : 5000;
  const MN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const MNS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const DOWS = ["S","M","T","W","T","F","S"];
  const byDate = {};
  trades.forEach((t) => {
    if (!byDate[t.entryDate]) byDate[t.entryDate] = { profit: 0, count: 0, trades: [] };
    byDate[t.entryDate].profit += t.profit || 0;
    byDate[t.entryDate].count++;
    byDate[t.entryDate].trades.push(t);
  });
  Object.keys(byDate).forEach((d) => {
    byDate[d].pnl = calcPnL(byDate[d].profit, capital);
  });
  const first = new Date(year, month, 1).getDay();
  const days = new Date(year, month + 1, 0).getDate();
  const cells = [...Array(first).fill(null), ...Array.from({ length: days }, (_, i) => i + 1)];
  const dk = (d) => `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
  const mEntries = Object.entries(byDate).filter(([d]) => {
    const [y, m] = d.split("-").map(Number);
    return y === year && m - 1 === month;
  });
  const mProfit = mEntries.reduce((s, [, v]) => s + v.profit, 0);
  const mPnl = calcPnL(mProfit, capital);
  const mCount = mEntries.reduce((s, [, v]) => s + v.count, 0);
  const maxP = Math.max(...Object.values(byDate).map((d) => Math.abs(d.profit)), 1);
  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
  const weekStats = weeks.map((w) => {
    const p = w.filter(Boolean).reduce((s, d) => {
      var _a;
      return s + (((_a = byDate[dk(d)]) == null ? void 0 : _a.profit) || 0);
    }, 0);
    return { profit: p, pnl: calcPnL(p, capital), count: w.filter(Boolean).reduce((s, d) => {
      var _a;
      return s + (((_a = byDate[dk(d)]) == null ? void 0 : _a.count) || 0);
    }, 0) };
  });
  const fmt = (p, pct) => mode === "pct" ? fmtPct(pct, 1) : fmtUSD(p);
  const todayStr = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);

  // ── Yearly view renderer ──
  const YearlyCalendar = () => {
    const yEntries = Object.entries(byDate).filter(([d]) => d.startsWith(String(year)+"-"));
    const yProfit = yEntries.reduce((s,[,v])=>s+v.profit,0);
    const yPnl = calcPnL(yProfit, capital);
    const yCount = yEntries.reduce((s,[,v])=>s+v.count,0);
    const maxPY = Math.max(...Object.values(byDate).map(d=>Math.abs(d.profit)),1);
    return /* @__PURE__ */ React.createElement("div", null,
      /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 20, flexWrap: "wrap" } },
        /* @__PURE__ */ React.createElement("button", { onClick: ()=>setYear(y=>y-1), style: { background:"var(--surface)", border:"1px solid var(--border)", borderRadius:10, width:34, height:34, cursor:"pointer", fontSize:18, display:"flex", alignItems:"center", justifyContent:"center", color:"var(--t2)" }, onMouseEnter:e=>{e.currentTarget.style.borderColor="var(--acc)";e.currentTarget.style.color="var(--acc)";}, onMouseLeave:e=>{e.currentTarget.style.borderColor="var(--border)";e.currentTarget.style.color="var(--t2)";} }, "\u2039"),
        /* @__PURE__ */ React.createElement("select", { value: year, onChange: e=>setYear(+e.target.value), style: { border:"1px solid var(--border)", borderRadius:10, padding:"6px 14px", fontSize:15, fontWeight:800, background:"var(--surface)", cursor:"pointer", outline:"none", color:"var(--text)" } }, [2023,2024,2025,2026,2027].map(y=>/* @__PURE__ */ React.createElement("option",{key:y},y))),
        /* @__PURE__ */ React.createElement("button", { onClick: ()=>setYear(y=>y+1), style: { background:"var(--surface)", border:"1px solid var(--border)", borderRadius:10, width:34, height:34, cursor:"pointer", fontSize:18, display:"flex", alignItems:"center", justifyContent:"center", color:"var(--t2)" }, onMouseEnter:e=>{e.currentTarget.style.borderColor="var(--acc)";e.currentTarget.style.color="var(--acc)";}, onMouseLeave:e=>{e.currentTarget.style.borderColor="var(--border)";e.currentTarget.style.color="var(--t2)";} }, "\u203A"),
        /* @__PURE__ */ React.createElement("div", { style: { display:"flex", border:"1.5px solid var(--border)", borderRadius:10, overflow:"hidden" } },
          /* @__PURE__ */ React.createElement("button", { onClick:()=>setMode("pct"), style:{ padding:"6px 18px", fontSize:12, fontWeight:700, background:mode==="pct"?"linear-gradient(135deg,var(--acc),var(--accD))":"var(--surface)", color:mode==="pct"?"#fff":"var(--t3)", border:"none", cursor:"pointer" } }, "%"),
          /* @__PURE__ */ React.createElement("button", { onClick:()=>setMode("usd"), style:{ padding:"6px 18px", fontSize:12, fontWeight:700, background:mode==="usd"?"linear-gradient(135deg,var(--acc),var(--accD))":"var(--surface)", color:mode==="usd"?"#fff":"var(--t3)", border:"none", cursor:"pointer" } }, "$")
        ),
        /* @__PURE__ */ React.createElement("div", { style:{ marginLeft:"auto", display:"flex", gap:8, alignItems:"center" } },
          yCount>0 && /* @__PURE__ */ React.createElement(Chip,{color:"gray"},yCount," trades"),
          /* @__PURE__ */ React.createElement("div", { style:{ background:yProfit>=0?"var(--accF)":"var(--s3)", border:`1px solid ${yProfit>=0?"color-mix(in srgb, var(--acc) 30%, transparent)":"var(--border)"}`, borderRadius:9, padding:"5px 14px" } },
            /* @__PURE__ */ React.createElement("span", { style:{ fontSize:13, fontWeight:700, color:yProfit>=0?"var(--accD)":"var(--t2)" } }, "Year: ", fmt(yProfit,yPnl))
          )
        )
      ),
      /* @__PURE__ */ React.createElement("div", { style:{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:16 } },
        Array.from({length:12},(_,mi)=>{
          const mKey = `${year}-${String(mi+1).padStart(2,"0")}`;
          const mDays = new Date(year,mi+1,0).getDate();
          const mFirst = new Date(year,mi,1).getDay();
          const mCells = [...Array(mFirst).fill(null),...Array.from({length:mDays},(_,i)=>i+1)];
          const mWeeks = [];
          for(let i=0;i<mCells.length;i+=7) mWeeks.push(mCells.slice(i,i+7));
          const mEntries2 = Object.entries(byDate).filter(([d])=>d.startsWith(mKey+"-"));
          const mP = mEntries2.reduce((s,[,v])=>s+v.profit,0);
          const mPct2 = calcPnL(mP,capital);
          const mC = mEntries2.reduce((s,[,v])=>s+v.count,0);
          const dk2 = (d)=>`${year}-${String(mi+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
          return /* @__PURE__ */ React.createElement("div", { key:mi, style:{ background:"var(--surface)", border:"1px solid var(--border)", borderRadius:14, padding:"14px 12px", display:"flex", flexDirection:"column", gap:8 } },
            /* @__PURE__ */ React.createElement("div", { style:{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:2 } },
              /* @__PURE__ */ React.createElement("div", { style:{ fontSize:12, fontWeight:800, color:"var(--text)", letterSpacing:"-.01em" } }, MNS[mi]),
              mC>0 && /* @__PURE__ */ React.createElement("div", { style:{ fontSize:11, fontWeight:700, color:mP>=0?"var(--accD)":"var(--t2)", background:mP>=0?"var(--accF)":"var(--s3)", border:`1px solid ${mP>=0?"color-mix(in srgb, var(--acc) 25%, transparent)":"var(--border)"}`, borderRadius:7, padding:"2px 8px" } }, fmt(mP,mPct2))
            ),
            /* @__PURE__ */ React.createElement("div", { style:{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:1.5, marginBottom:2 } },
              DOWS.map((d,i)=>/* @__PURE__ */ React.createElement("div",{key:i,style:{textAlign:"center",fontSize:7.5,color:"var(--t3)",fontWeight:600,padding:"1px 0"}},d))
            ),
            mWeeks.map((week,wi)=>/* @__PURE__ */ React.createElement("div",{key:wi,style:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:1.5}},
              [...Array(7)].map((_,ci)=>{
                const d=week[ci];
                if(!d) return /* @__PURE__ */ React.createElement("div",{key:`e${ci}`,style:{borderRadius:4,minHeight:20}});
                const dKey=dk2(d);
                const data=byDate[dKey];
                const p=(data?.profit)||0;
                const pct=(data?.pnl)||0;
                const has=!!data;
                const isToday=dKey===todayStr;
                const intensity=has?Math.min(1,Math.abs(p)/maxPY*2):0;
                const bg=!has?"var(--surface)":p>=0?`color-mix(in srgb, var(--acc) ${Math.round((0.1+intensity*0.28)*100)}%, var(--surface))`:`rgba(148,163,184,${0.12+intensity*0.22})`;
                const bdr=!has?"var(--border)":p>=0?"color-mix(in srgb, var(--acc) 30%, transparent)":"var(--border2)";
                return /* @__PURE__ */ React.createElement("div",{
                  key:dKey,
                  title:`${dKey}${has?` · ${data.count} trade${data.count!==1?"s":""} · ${fmt(p,pct)}`:""}`,
                  onClick:()=>{ has && onDayClick(dKey); },
                  style:{ background:bg, border:`1px solid ${isToday?"var(--indigo)":bdr}`, borderRadius:4, minHeight:20, cursor:has?"pointer":"default", transition:"transform .1s,box-shadow .1s", boxShadow:isToday?"0 0 0 1px var(--indigo)":"none", display:"flex", alignItems:"center", justifyContent:"center" },
                  onMouseEnter:e=>{ if(has){e.currentTarget.style.transform="scale(1.15)";e.currentTarget.style.boxShadow="var(--sh2)";e.currentTarget.style.zIndex="2";} },
                  onMouseLeave:e=>{ e.currentTarget.style.transform="";e.currentTarget.style.boxShadow=isToday?"0 0 0 1px var(--indigo)":"none";e.currentTarget.style.zIndex=""; }
                },
                  /* @__PURE__ */ React.createElement("span",{style:{fontSize:7,fontWeight:isToday?900:600,color:isToday?"var(--indigo)":has?p>=0?"var(--accD)":"var(--t2)":"var(--t3)",lineHeight:1}},d)
                );
              })
            ))
          );
        })
      )
    );
  };

  return /* @__PURE__ */ React.createElement("div", { className: "fade-up" },
    /* @__PURE__ */ React.createElement("div", { style: { display:"flex", alignItems:"center", gap:8, marginBottom:20 } },
      /* @__PURE__ */ React.createElement("div", { style:{ display:"flex", border:"1.5px solid var(--border)", borderRadius:10, overflow:"hidden" } },
        /* @__PURE__ */ React.createElement("button", { onClick:()=>setCalView("monthly"), style:{ padding:"7px 18px", fontSize:12, fontWeight:700, background:calView==="monthly"?"linear-gradient(135deg,var(--acc),var(--accD))":"var(--surface)", color:calView==="monthly"?"#fff":"var(--t3)", border:"none", cursor:"pointer", whiteSpace:"nowrap" } }, "Monthly"),
        /* @__PURE__ */ React.createElement("button", { onClick:()=>setCalView("yearly"), style:{ padding:"7px 18px", fontSize:12, fontWeight:700, background:calView==="yearly"?"linear-gradient(135deg,var(--acc),var(--accD))":"var(--surface)", color:calView==="yearly"?"#fff":"var(--t3)", border:"none", cursor:"pointer", whiteSpace:"nowrap" } }, "Yearly")
      )
    ),
    calView==="yearly" && /* @__PURE__ */ React.createElement(YearlyCalendar, null),
    calView==="monthly" && /* @__PURE__ */ React.createElement("div", null,
    /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 20, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("button", { onClick: () => {
    if (month === 0) {
      setMonth(11);
      setYear((y) => y - 1);
    } else setMonth((m) => m - 1);
  }, style: { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10, width: 34, height: 34, cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t2)" }, onMouseEnter: (e) => {
    e.currentTarget.style.borderColor = "var(--acc)";
    e.currentTarget.style.color = "var(--acc)";
  }, onMouseLeave: (e) => {
    e.currentTarget.style.borderColor = "var(--border)";
    e.currentTarget.style.color = "var(--t2)";
  } }, "\u2039"), /* @__PURE__ */ React.createElement("select", { value: month, onChange: (e) => setMonth(+e.target.value), style: { border: "1px solid var(--border)", borderRadius: 10, padding: "6px 12px", fontSize: 13, fontWeight: 700, background: "var(--surface)", cursor: "pointer", outline: "none", color: "var(--text)" } }, MN.map((m, i) => /* @__PURE__ */ React.createElement("option", { key: i, value: i }, m))), /* @__PURE__ */ React.createElement("select", { value: year, onChange: (e) => setYear(+e.target.value), style: { border: "1px solid var(--border)", borderRadius: 10, padding: "6px 12px", fontSize: 13, fontWeight: 700, background: "var(--surface)", cursor: "pointer", outline: "none", color: "var(--text)" } }, [2024, 2025, 2026, 2027].map((y) => /* @__PURE__ */ React.createElement("option", { key: y }, y))), /* @__PURE__ */ React.createElement("button", { onClick: () => {
    if (month === 11) {
      setMonth(0);
      setYear((y) => y + 1);
    } else setMonth((m) => m + 1);
  }, style: { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10, width: 34, height: 34, cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t2)" }, onMouseEnter: (e) => {
    e.currentTarget.style.borderColor = "var(--acc)";
    e.currentTarget.style.color = "var(--acc)";
  }, onMouseLeave: (e) => {
    e.currentTarget.style.borderColor = "var(--border)";
    e.currentTarget.style.color = "var(--t2)";
  } }, "\u203A"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", border: "1.5px solid var(--border)", borderRadius: 10, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("button", { onClick: () => setMode("pct"), style: { padding: "6px 18px", fontSize: 12, fontWeight: 700, background: mode === "pct" ? "linear-gradient(135deg,var(--acc),var(--accD))" : "var(--surface)", color: mode === "pct" ? "#fff" : "var(--t3)", border: "none", cursor: "pointer" } }, "%"), /* @__PURE__ */ React.createElement("button", { onClick: () => setMode("usd"), style: { padding: "6px 18px", fontSize: 12, fontWeight: 700, background: mode === "usd" ? "linear-gradient(135deg,var(--acc),var(--accD))" : "var(--surface)", color: mode === "usd" ? "#fff" : "var(--t3)", border: "none", cursor: "pointer" } }, "$")), /* @__PURE__ */ React.createElement("div", { style: { marginLeft: "auto", display: "flex", gap: 8, alignItems: "center" } }, mCount > 0 && /* @__PURE__ */ React.createElement(Chip, { color: "gray" }, mCount, " trades"), /* @__PURE__ */ React.createElement("div", { style: { background: mProfit >= 0 ? "var(--accF)" : "var(--s3)", border: `1px solid ${mProfit >= 0 ? "color-mix(in srgb, var(--acc) 30%, transparent)" : "var(--border)"}`, borderRadius: 9, padding: "5px 14px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, fontWeight: 700, color: mProfit >= 0 ? "var(--accD)" : "var(--t2)" } }, "Total: ", fmt(mProfit, mPnl))))), /* @__PURE__ */ React.createElement("div", { style: { overflowX: "auto" } }, /* @__PURE__ */ React.createElement("div", { style: { minWidth: 600 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(7,1fr) 90px", gap: 4, marginBottom: 4 } }, DOW.map((d) => /* @__PURE__ */ React.createElement("div", { key: d, style: { textAlign: "center", fontSize: 9.5, color: "var(--t3)", fontWeight: 400, padding: "5px 0" } }, d)), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", fontSize: 9.5, color: "var(--t3)", fontWeight: 400, padding: "5px 0" } }, "WEEK")), weeks.map((week, wi) => /* @__PURE__ */ React.createElement("div", { key: wi, style: { display: "grid", gridTemplateColumns: "repeat(7,1fr) 90px", gap: 4, marginBottom: 4 } }, [...Array(7)].map((_, ci) => {
    const d = week[ci];
    if (!d) return /* @__PURE__ */ React.createElement("div", { key: `e${ci}`, style: { borderRadius: 12, minHeight: 80 } });
    const dateKey = dk(d);
    const data = byDate[dateKey];
    const p = (data == null ? void 0 : data.profit) || 0;
    const pct = (data == null ? void 0 : data.pnl) || 0;
    const has = !!data;
    const intensity = has ? Math.min(1, Math.abs(p) / maxP * 2) : 0;
    const bg = !has ? "var(--surface)" : p >= 0 ? `color-mix(in srgb, var(--acc) ${Math.round((0.07 + intensity * 0.22) * 100)}%, var(--surface))` : `rgba(148,163,184,${0.1 + intensity * 0.2})`;
    const bdr = !has ? "var(--border)" : p >= 0 ? "color-mix(in srgb, var(--acc) 30%, transparent)" : "var(--border2)";
    const isToday = dateKey === todayStr;
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        key: dateKey,
        className: "cal-cell",
        onClick: (e) => { e.currentTarget.blur(); has && onDayClick(dateKey); }, tabIndex: -1,
        style: { background: bg, border: `1.5px solid ${isToday ? "var(--indigo)" : bdr}`, borderRadius: 12, padding: "8px 10px", minHeight: 80, cursor: has ? "pointer" : "default", transition: "transform .12s,box-shadow .12s", boxShadow: isToday ? "0 0 0 1px var(--indigo)" : "none" },
        onMouseEnter: (e) => {
          if (has) {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "var(--sh2)";
          }
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.transform = "";
          e.currentTarget.style.boxShadow = isToday ? "0 0 0 1px var(--indigo)" : "none";
        }
      },
      /* @__PURE__ */ React.createElement("div", { className: "cal-day-num", style: { fontSize: 11, fontWeight: isToday ? 900 : 700, color: isToday ? "var(--indigo)" : "var(--t3)", marginBottom: 4, textShadow: "none" } }, d),
      has && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "cal-day-pnl", style: { fontSize: 13, fontWeight: 700, color: p >= 0 ? "var(--accD)" : "var(--t2)", lineHeight: 1.1, letterSpacing: "-.5px", textShadow: "none" } }, fmt(p, pct)), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9.5, color: "var(--t3)", marginTop: 4, fontWeight: 600, textShadow: "none" } }, data.count, " ", data.count === 1 ? "trade" : "trades"))
    );
  }), /* @__PURE__ */ React.createElement("div", { style: { background: weekStats[wi].count ? weekStats[wi].profit >= 0 ? "color-mix(in srgb, var(--acc) 10%, transparent)" : "rgba(148,163,184,.15)" : "var(--s2)", border: `1.5px solid ${weekStats[wi].count ? weekStats[wi].profit >= 0 ? "color-mix(in srgb, var(--acc) 30%, transparent)" : "var(--border2)" : "var(--border)"}`, borderRadius: 12, padding: "8px", minHeight: 80, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 3 } }, weekStats[wi].count > 0 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 500, color: weekStats[wi].profit >= 0 ? "var(--accD)" : "var(--t2)", textAlign: "center" } }, fmt(weekStats[wi].profit, weekStats[wi].pnl)), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9, color: "var(--t3)", textAlign: "center" } }, weekStats[wi].count, " trades")))))))));
});
function DayPopup({ date, trades, onClose, ic, capital: propCapital, onEdit, editingId, setEditingId, onOpenSettings, usedSessions = SESSIONS, usedMistakes = MISTAKES }) {
  const capital = (propCapital && propCapital > 0) ? propCapital : ((ic && ic > 0) ? ic : 5000);
  const dayTrades = trades.filter((t) => t.entryDate === date).sort((a, b) => a.entryTime.localeCompare(b.entryTime));
  const [editForm, setEditForm] = useState(null);
  const [saved, setSaved] = useState(null);
  const [symFilter, setSymFilter] = useState("All");
  const [gradeFilter, setGradeFilter] = useState("All");
  const [sortBy, setSortBy] = useState("entryTime");
  const [sortDir, setSortDir] = useState(1);
  const inp = { border: "1.5px solid var(--border)", borderRadius: 8, padding: "6px 9px", fontSize: 12, outline: "none", background: "var(--s2)", color: "var(--text)", width: "100%", boxSizing: "border-box", fontFamily: "inherit" };
  const sel = __spreadProps(__spreadValues({}, inp), { cursor: "pointer" });
  const syms = ["All", ...new Set(dayTrades.map((t) => t.symbol))];
  const visible = useMemo(
    () => [...dayTrades].filter((t) => (symFilter === "All" || t.symbol === symFilter) && (gradeFilter === "All" || t.grade === gradeFilter)).sort((a, b) => {
      let va = a[sortBy], vb = b[sortBy];
      if (["pnl", "profit"].includes(sortBy)) {
        va = +va;
        vb = +vb;
      }
      return va > vb ? sortDir : va < vb ? -sortDir : 0;
    }),
    [dayTrades, symFilter, gradeFilter, sortBy, sortDir]
  );
  const dayProfit = dayTrades.reduce((s, t) => s + (t.profit || 0), 0);
  const dayPct = calcPnL(dayProfit, capital);
  const wins = dayTrades.filter((t) => t.profit > 0).length;
  const wr = dayTrades.length ? Math.round(wins / dayTrades.length * 100) : 0;
  const [yr, mo, dy] = date.split("-").map(Number);
  const MN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const prettyDate = `${MN[mo - 1]} ${dy}, ${yr}`;
  const startEdit = (t) => {
    setEditingId(t.id);
    setEditForm({ symbol: t.symbol, side: t.side || deriveDir(t), entryPrice: String(t.entryPrice || ""), exitPrice: String(t.exitPrice || ""), pnl: "0", profit: String(t.profit || ""), session: t.session || "London Open", model: t.model || "In Session", grade: t.grade || "A", expectedRR: t.expectedRR || "1:2", actualRR: t.actualRR || "", mistakes: t.mistakes || "None", keyLevels: Array.isArray(t.keyLevels) ? t.keyLevels : [], notes: t.notes || "" });
  };
  const cancelEdit = () => {
    setEditingId(null);
    setEditForm(null);
  };
  const saveEdit = (id) => {
    if (!editForm) return;
    const profitVal = +editForm.profit || 0;
    onEdit(id, __spreadProps(__spreadValues({}, editForm), { entryPrice: +editForm.entryPrice, exitPrice: +editForm.exitPrice, pnl: 0, profit: profitVal, keyLevels: Array.isArray(editForm.keyLevels) ? editForm.keyLevels : [] }));
    setSaved(id);
    setTimeout(() => setSaved(null), 1800);
    cancelEdit();
  };
  const toggleSort = (f) => {
    if (sortBy === f) setSortDir((d) => -d);
    else {
      setSortBy(f);
      setSortDir(1);
    }
  };
  const SH = ({ l, f }) => /* @__PURE__ */ React.createElement("span", { onClick: () => toggleSort(f), style: { fontSize: 10, fontWeight: 500, color: sortBy === f ? "var(--accD)" : "var(--t3)", letterSpacing: 0.1, cursor: "pointer", userSelect: "none" } }, l, sortBy === f ? sortDir > 0 ? " \u2191" : " \u2193" : " \u2195");
  return /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", inset: 0, background: "rgba(10,18,35,.55)", backdropFilter: "blur(16px)", zIndex: 500, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }, onClick: onClose }, /* @__PURE__ */ React.createElement("div", { style: { background: "var(--surface)", borderRadius: 20, boxShadow: "0 32px 80px rgba(0,0,0,.2)", width: 720, maxWidth: "100%", maxHeight: "93vh", overflow: "auto", border: "1px solid var(--border)" }, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("div", { style: { padding: "22px 26px 16px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", borderBottom: "1px solid var(--border)", position: "sticky", top: 0, background: "var(--surface)", zIndex: 10 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", letterSpacing: 0.1, marginBottom: 5 } }, "\u{1F4C5} Day Summary"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 20, fontWeight: 600, letterSpacing: "-.4px" } }, prettyDate)), /* @__PURE__ */ React.createElement("button", { onClick: onClose, style: { background: "var(--s3)", border: "1px solid var(--border)", color: "var(--t3)", cursor: "pointer", fontSize: 16, padding: "6px 10px", borderRadius: 9, fontWeight: 700 }, onMouseEnter: (e) => {
    e.currentTarget.style.background = "var(--rBg)";
    e.currentTarget.style.color = "var(--red)";
  }, onMouseLeave: (e) => {
    e.currentTarget.style.background = "var(--s3)";
    e.currentTarget.style.color = "var(--t3)";
  } }, "\xD7")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, padding: "16px 26px 14px" } }, [
    { l: "P&L%", v: fmtPct(dayPct), c: dayPct >= 0 ? "var(--accD)" : "var(--t2)", bg: dayPct >= 0 ? "var(--accL)" : "var(--s3)" },
    { l: "Net P&L", v: fmtUSD(dayProfit), c: dayProfit >= 0 ? "var(--accD)" : "var(--t2)", bg: dayProfit >= 0 ? "var(--accL)" : "var(--s3)" },
    { l: "Trades", v: dayTrades.length, c: "var(--text)", bg: "var(--s2)" },
    { l: "Win Rate", v: `${wr}%`, c: wr >= 50 ? "var(--acc)" : "var(--t2)", bg: "var(--s2)" }
  ].map((m, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { background: m.bg, border: "1px solid var(--border)", borderRadius: 12, padding: "14px 16px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9, fontWeight: 600, color: "var(--t3)", letterSpacing: 0.1, marginBottom: 8 } }, m.l), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 20, fontWeight: 600, color: m.c, letterSpacing: "-1px" } }, m.v)))), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 26px 12px", display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: "var(--t3)", fontWeight: 600, marginRight: 4 } }, "Filter:"), syms.map((s) => /* @__PURE__ */ React.createElement("button", { key: s, onClick: () => setSymFilter(s), style: { padding: "3px 11px", borderRadius: 20, border: `1.5px solid ${symFilter === s ? "var(--acc)" : "var(--border)"}`, background: symFilter === s ? "var(--accF)" : "var(--surface)", color: symFilter === s ? "var(--accD)" : "var(--t2)", fontWeight: symFilter === s ? 700 : 500, fontSize: 11, cursor: "pointer" } }, s)), /* @__PURE__ */ React.createElement("span", { style: { borderLeft: "1px solid var(--border)", height: 16, margin: "0 4px" } }), ["All", ...GRADES].map((g) => /* @__PURE__ */ React.createElement("button", { key: g, onClick: () => setGradeFilter(g), style: { padding: "3px 10px", borderRadius: 20, border: `1.5px solid ${gradeFilter === g ? "var(--acc)" : "var(--border)"}`, background: gradeFilter === g ? "var(--accF)" : "var(--surface)", color: gradeFilter === g ? "var(--accD)" : "var(--t2)", fontWeight: gradeFilter === g ? 700 : 500, fontSize: 11, cursor: "pointer" } }, g)), /* @__PURE__ */ React.createElement("div", { style: { marginLeft: "auto", display: "flex", gap: 10, alignItems: "center" } }, /* @__PURE__ */ React.createElement(SH, { l: "Time", f: "entryTime" }), /* @__PURE__ */ React.createElement(SH, { l: "P&L", f: "pnl" }), /* @__PURE__ */ React.createElement(SH, { l: "Grade", f: "grade" }))), /* @__PURE__ */ React.createElement("div", { style: { padding: "0 26px 24px", display: "flex", flexDirection: "column", gap: 8 } }, visible.map((t, i) => {
    var _a;
    const isEditing = editingId === t.id;
    const isSaved = saved === t.id;
    return /* @__PURE__ */ React.createElement("div", { key: t.id, style: { border: `1.5px solid ${isEditing ? "var(--acc)" : isSaved ? "var(--gBdr)" : "var(--border)"}`, borderRadius: 14, overflow: "hidden", transition: "border-color .2s", background: isEditing ? "var(--accF)" : isSaved ? "var(--gBg)" : "var(--surface)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "2fr 1.2fr 1fr 1fr 1fr 1fr auto", gap: 8, padding: "11px 16px", alignItems: "center", background: i % 2 === 0 ? "var(--surface)" : "var(--s2)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 2 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, fontWeight: 500, color: "var(--text)" } }, t.symbol), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, color: "var(--t3)" } }, ((_a = t.entryTime) == null ? void 0 : _a.slice(0, 5)) || "\u2014", " \xB7 ", t.side || deriveDir(t))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(SessionChip, { session: t.session })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(GradeChip, { grade: t.grade })), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 700, color: calcPnL(t.profit, capital) >= 0 ? "var(--accD)" : "var(--t2)" } }, fmtPct(calcPnL(t.profit, capital))), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--t3)" } }, t.expectedRR || "\u2014"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--t3)", maxWidth: 100, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, t.model || "\u2014"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 5 } }, !isEditing && /* @__PURE__ */ React.createElement("button", { onClick: () => startEdit(t), style: { background: "linear-gradient(135deg,var(--acc),var(--accD))", color: "#fff", border: "none", borderRadius: 8, padding: "5px 12px", fontSize: 11, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" } }, "\u{1F527} Edit"), isEditing && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", { onClick: () => saveEdit(t.id), style: { background: "var(--green)", color: "#fff", border: "none", borderRadius: 8, padding: "5px 12px", fontSize: 11, fontWeight: 700, cursor: "pointer" } }, "\u2713 Save"), /* @__PURE__ */ React.createElement("button", { onClick: cancelEdit, style: { background: "var(--s3)", color: "var(--t2)", border: "1px solid var(--border)", borderRadius: 8, padding: "5px 10px", fontSize: 11, fontWeight: 700, cursor: "pointer" } }, "\u2715")))), isEditing && editForm && /* @__PURE__ */ React.createElement("div", { style: { padding: "16px", borderTop: "1px dashed color-mix(in srgb, var(--acc) 35%, transparent)", background: "var(--accF)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: 8, marginBottom: 10 } }, [["Symbol", "symbol"], ["Entry Price", "entryPrice"], ["Exit Price", "exitPrice"], ["Net P&L ($)", "profit"], ["Actual RR", "actualRR"]].map(([l, k]) => /* @__PURE__ */ React.createElement("div", { key: k }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9.5, fontWeight: 400, color: "var(--t3)", marginBottom: 4 } }, l), /* @__PURE__ */ React.createElement("input", { value: editForm[k] || "", onChange: (e) => setEditForm((f) => __spreadProps(__spreadValues({}, f), { [k]: e.target.value })), style: inp }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9.5, fontWeight: 400, color: "var(--t3)", marginBottom: 4 } }, "Side"), /* @__PURE__ */ React.createElement("select", { value: editForm.side, onChange: (e) => setEditForm((f) => __spreadProps(__spreadValues({}, f), { side: e.target.value })), style: sel }, /* @__PURE__ */ React.createElement("option", null, "Long"), /* @__PURE__ */ React.createElement("option", null, "Short"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9.5, fontWeight: 400, color: "var(--t3)", marginBottom: 4 } }, "Session"), /* @__PURE__ */ React.createElement("select", { value: editForm.session, onChange: (e) => setEditForm((f) => __spreadProps(__spreadValues({}, f), { session: e.target.value })), style: sel }, usedSessions.map((s) => /* @__PURE__ */ React.createElement("option", { key: s }, s)))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9.5, fontWeight: 400, color: "var(--t3)", marginBottom: 4 } }, "Model"), /* @__PURE__ */ React.createElement("select", { value: editForm.model, onChange: (e) => setEditForm((f) => __spreadProps(__spreadValues({}, f), { model: e.target.value })), style: sel }, usedModels.map((m) => /* @__PURE__ */ React.createElement("option", { key: m }, m)))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9.5, fontWeight: 400, color: "var(--t3)", marginBottom: 4 } }, "Grade"), /* @__PURE__ */ React.createElement("select", { value: editForm.grade, onChange: (e) => setEditForm((f) => __spreadProps(__spreadValues({}, f), { grade: e.target.value })), style: sel }, GRADES.map((g) => /* @__PURE__ */ React.createElement("option", { key: g }, g)))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9.5, fontWeight: 400, color: "var(--t3)", marginBottom: 4 } }, "Mistakes"), /* @__PURE__ */ React.createElement("select", { value: editForm.mistakes, onChange: (e) => setEditForm((f) => __spreadProps(__spreadValues({}, f), { mistakes: e.target.value })), style: sel }, usedMistakes.map((m) => /* @__PURE__ */ React.createElement("option", { key: m }, m)))), /* @__PURE__ */ React.createElement("div", { style: { gridColumn: "1/-1" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9.5, fontWeight: 600, color: "var(--t3)", textTransform: "uppercase" } }, "Key Levels"), /* @__PURE__ */ React.createElement("span", null)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 5, marginTop: 4, minHeight: 28 } }, (editForm.keyLevels || []).length === 0 ? /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, color: "var(--t3)" } }, "No key levels") : (editForm.keyLevels || []).map((kl, ki) => /* @__PURE__ */ React.createElement("div", { key: ki, style: { display: "flex", alignItems: "center", background: "var(--bBg)", border: "1px solid var(--bBdr)", borderRadius: 20, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10.5, fontWeight: 600, padding: "3px 9px", color: "var(--blue)" } }, kl), /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => setEditForm((f) => ({ ...f, keyLevels: (f.keyLevels || []).filter((_, i) => i !== ki) })), style: { background: "none", border: "none", borderLeft: "1px solid var(--bBdr)", color: "var(--t3)", cursor: "pointer", fontSize: 11, padding: "3px 7px" } }, "\u00D7"))))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9.5, fontWeight: 400, color: "var(--t3)", marginBottom: 4 } }, "Exp. RR"), /* @__PURE__ */ React.createElement("select", { value: editForm.expectedRR, onChange: (e) => setEditForm((f) => __spreadProps(__spreadValues({}, f), { expectedRR: e.target.value })), style: sel }, RR_OPTIONS.map((r) => /* @__PURE__ */ React.createElement("option", { key: r }, r))))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9.5, fontWeight: 400, color: "var(--t3)", marginBottom: 4 } }, "Notes"), /* @__PURE__ */ React.createElement("textarea", { value: editForm.notes, onChange: (e) => setEditForm((f) => __spreadProps(__spreadValues({}, f), { notes: e.target.value })), rows: 2, style: __spreadProps(__spreadValues({}, inp), { resize: "vertical" }) })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, marginTop: 10 } }, /* @__PURE__ */ React.createElement("button", { onClick: () => saveEdit(t.id), style: { background: "linear-gradient(135deg,var(--acc),var(--accD))", color: "#fff", border: "none", borderRadius: 10, padding: "9px 22px", fontSize: 13, fontWeight: 700, cursor: "pointer", boxShadow: "0 3px 12px color-mix(in srgb, var(--acc) 40%, transparent)" } }, "\u2713 Save Changes"), /* @__PURE__ */ React.createElement("button", { onClick: cancelEdit, style: { background: "var(--s3)", color: "var(--t2)", border: "1px solid var(--border)", borderRadius: 10, padding: "9px 18px", fontSize: 13, fontWeight: 700, cursor: "pointer" } }, "\u2715 Cancel"), onOpenSettings && /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => onOpenSettings("lists"), style: { background: "var(--s2)", color: "var(--t3)", border: "1px solid var(--border)", borderRadius: 10, padding: "9px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer", marginLeft: "auto" } }, "\xf0\x9f\x93\x9d Manage Lists"))));
  }), visible.length === 0 && /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", padding: "30px", color: "var(--t3)", fontSize: 13 } }, "No trades match filters"))));
}
function RiskRulesEditor() {
  const DEFAULT_RULES = [
    { id: 1, text: "Never risk more than 1\u20132% per trade", active: true },
    { id: 2, text: "Stop after 2\u20133 consecutive losses", active: true },
    { id: 3, text: "Take profits off the table on big winners", active: true },
    { id: 4, text: "Revenge trading is the #1 account killer", active: true },
    { id: 5, text: "A missed trade is better than a bad one", active: true }
  ];
  const [rules, setRules] = useState(() => {
    try {
      const r = localStorage.getItem("tj5_risk_rules");
      return r ? JSON.parse(r) : DEFAULT_RULES;
    } catch (e) {
      return DEFAULT_RULES;
    }
  });
  const [adding, setAdding] = useState(false);
  const [newRule, setNewRule] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const save = (r) => {
    setRules(r);
    try {
      localStorage.setItem("tj5_risk_rules", JSON.stringify(r));
    } catch (e) {
    }
  };
  const addRule = () => {
    if (!newRule.trim()) return;
    const r = [...rules, { id: Date.now(), text: newRule.trim(), active: true }];
    save(r);
    setNewRule("");
    setAdding(false);
  };
  const deleteRule = (id) => save(rules.filter((r) => r.id !== id));
  const toggleRule = (id) => save(rules.map((r) => r.id === id ? __spreadProps(__spreadValues({}, r), { active: !r.active }) : r));
  const saveEdit = (id) => {
    save(rules.map((r) => r.id === id ? __spreadProps(__spreadValues({}, r), { text: editText }) : r));
    setEditId(null);
  };
  return /* @__PURE__ */ React.createElement("div", { style: { background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 14, padding: "16px 18px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 700, color: "var(--text)" } }, "\u{1F4CC} Risk Management Rules"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--t3)", marginTop: 2 } }, "Your personal trading rules \u2014 add, edit or remove")), /* @__PURE__ */ React.createElement("button", { onClick: () => setAdding((a) => !a), style: { background: adding ? "var(--s3)" : "linear-gradient(135deg,var(--acc),var(--accD))", color: adding ? "var(--t2)" : "#fff", border: "none", borderRadius: 9, padding: "6px 14px", fontSize: 11, fontWeight: 700, cursor: "pointer" } }, adding ? "\u2715 Cancel" : "+ Add Rule")), adding && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, marginBottom: 12 } }, /* @__PURE__ */ React.createElement("input", { autoFocus: true, value: newRule, onChange: (e) => setNewRule(e.target.value), onKeyDown: (e) => e.key === "Enter" && addRule(), placeholder: "e.g. Max 1% risk per trade", style: { flex: 1, border: "1.5px solid var(--border)", borderRadius: 9, padding: "8px 12px", fontSize: 12, outline: "none", background: "var(--surface)", color: "var(--text)" } }), /* @__PURE__ */ React.createElement("button", { onClick: addRule, style: { background: "linear-gradient(135deg,var(--acc),var(--accD))", color: "#fff", border: "none", borderRadius: 9, padding: "8px 16px", fontSize: 12, fontWeight: 700, cursor: "pointer" } }, "Add")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6 } }, rules.map((r, i) => /* @__PURE__ */ React.createElement("div", { key: r.id, style: { display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", background: "var(--surface)", border: `1px solid ${r.active ? "var(--border)" : "var(--border)"}`, borderRadius: 10, opacity: r.active ? 1 : 0.55, transition: "opacity .2s" } }, /* @__PURE__ */ React.createElement("div", { onClick: () => toggleRule(r.id), style: { width: 16, height: 16, borderRadius: 4, border: `2px solid ${r.active ? "var(--acc)" : "var(--border2)"}`, background: r.active ? "var(--acc)" : "transparent", cursor: "pointer", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", transition: "all .15s" } }, r.active && /* @__PURE__ */ React.createElement("span", { style: { color: "#fff", fontSize: 10, fontWeight: 900 } }, "\u2713")), editId === r.id ? /* @__PURE__ */ React.createElement("input", { autoFocus: true, value: editText, onChange: (e) => setEditText(e.target.value), onKeyDown: (e) => {
    if (e.key === "Enter") saveEdit(r.id);
    if (e.key === "Escape") setEditId(null);
  }, style: { flex: 1, border: "1.5px solid var(--acc)", borderRadius: 7, padding: "4px 8px", fontSize: 12, outline: "none", background: "var(--surface)", color: "var(--text)" } }) : /* @__PURE__ */ React.createElement("span", { style: { flex: 1, fontSize: 12, color: r.active ? "var(--t2)" : "var(--t3)", fontWeight: 500 } }, /* @__PURE__ */ React.createElement("span", { style: { color: "var(--acc)", marginRight: 6 } }, "\u2192"), r.text), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 4 } }, editId === r.id ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", { onClick: () => saveEdit(r.id), style: { background: "var(--green)", color: "#fff", border: "none", borderRadius: 6, padding: "3px 8px", fontSize: 10, cursor: "pointer", fontWeight: 700 } }, "\u2713"), /* @__PURE__ */ React.createElement("button", { onClick: () => setEditId(null), style: { background: "var(--s3)", color: "var(--t2)", border: "1px solid var(--border)", borderRadius: 6, padding: "3px 8px", fontSize: 10, cursor: "pointer" } }, "\u2715")) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", { onClick: () => {
    setEditId(r.id);
    setEditText(r.text);
  }, style: { background: "none", border: "1px solid var(--border)", color: "var(--t3)", borderRadius: 6, padding: "3px 7px", fontSize: 10, cursor: "pointer" }, onMouseEnter: (e) => {
    e.currentTarget.style.borderColor = "var(--acc)";
    e.currentTarget.style.color = "var(--acc)";
  }, onMouseLeave: (e) => {
    e.currentTarget.style.borderColor = "var(--border)";
    e.currentTarget.style.color = "var(--t3)";
  } }, "\u270F"), /* @__PURE__ */ React.createElement("button", { onClick: () => deleteRule(r.id), style: { background: "none", border: "1px solid var(--border)", color: "var(--t3)", borderRadius: 6, padding: "3px 7px", fontSize: 10, cursor: "pointer" }, onMouseEnter: (e) => {
    e.currentTarget.style.background = "var(--rBg)";
    e.currentTarget.style.borderColor = "var(--red)";
    e.currentTarget.style.color = "var(--red)";
  }, onMouseLeave: (e) => {
    e.currentTarget.style.background = "none";
    e.currentTarget.style.borderColor = "var(--border)";
    e.currentTarget.style.color = "var(--t3)";
  } }, "\u2715")))))));
}
function ImportTradesPanel({ onImport }) {
  const [open, setOpen] = useState(false);
  const [broker, setBroker] = useState("mt5");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");
  const [importing, setImporting] = useState(false);
  // ── UNIVERSAL TRADE BUILDER ──
  // Stable fingerprint ID: same trade data always → same ID, enabling dedup on re-import
  const makeFingerprintId = (fields) => {
    const raw = [
      fields.symbol || "",
      fields.entryDate || "",
      fields.entryTime || "",
      fields.side || "",
      fields.entryPrice != null ? String(fields.entryPrice) : "",
      fields.exitPrice  != null ? String(fields.exitPrice)  : "",
      fields.profit     != null ? String(fields.profit)     : ""
    ].join("|");
    // Simple but collision-resistant hash (djb2 variant)
    let h = 5381;
    for (let ci = 0; ci < raw.length; ci++) h = (((h << 5) + h) ^ raw.charCodeAt(ci)) >>> 0;
    return "trad_" + h.toString(36) + "_" + raw.length;
  };
  const buildTrade = (i, fields) => ({
    id: makeFingerprintId(fields),
    status: "Closed", confluences: [], session: "New York", model: "Imported",
    emotionBefore: "Neutral", emotionAfter: "Neutral", mistakes: "None",
    grade: "B", expectedRR: "1:2", actualRR: "", accountId: "import",
    createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(),
    tags: [], riskAmount: 0, stopLoss: 0, takeProfit: 0,
    ...fields
  });
  const parseDate = (s) => {
    if (!s) return "";
    s = s.trim();
    if (/^\d{4}-\d{2}-\d{2}/.test(s)) return s.slice(0, 10);
    const dm = s.match(/^(\d{1,2})[.\/-](\d{1,2})[.\/-](\d{4})/);
    if (dm) return `${dm[3]}-${dm[2].padStart(2,"0")}-${dm[1].padStart(2,"0")}`;
    const md = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);
    if (md) return `${md[3]}-${md[1].padStart(2,"0")}-${md[2].padStart(2,"0")}`;
    const yd = s.match(/^(\d{4})\.(\d{2})\.(\d{2})/);
    if (yd) return `${yd[1]}-${yd[2]}-${yd[3]}`;
    return s.split("T")[0] || "";
  };
  const parseTime = (s) => {
    if (!s) return "00:00:00";
    const m = s.match(/(\d{1,2}:\d{2}(:\d{2})?)/);
    return m ? (m[1].length === 5 ? m[1] + ":00" : m[1]) : "00:00:00";
  };
  const parseNum = (s) => {
    if (s == null) return 0;
    const n = parseFloat(String(s).replace(/[, ]/g, ""));
    return isNaN(n) ? 0 : n;
  };
  const splitLine = (line, sep) => {
    const out = []; let cur = ""; let inQ = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (c === '"') { inQ = !inQ; continue; }
      if (!inQ && c === sep) { out.push(cur.trim()); cur = ""; continue; }
      cur += c;
    }
    out.push(cur.trim());
    return out;
  };
  const parseMT5HTM = (text) => {
    const trades = [];
    const rows = [...text.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)];
    for (const row of rows) {
      const cells = [...row[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)]
        .map(m => m[1].replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g,"<").replace(/&gt;/g,">").trim());
      if (cells.length < 8) continue;
      if (!cells[0] || !/\d/.test(cells[0])) continue;

      // Detect if first col is a datetime (YYYY.MM.DD ...) or a ticket number
      const isDateFirst = /^\d{4}[.\/-]/.test(cells[0]) || /^\d{2}[.\/-]\d{2}[.\/-]\d{4}/.test(cells[0]);
      const isTicketFirst = /^\d{5,}$/.test(cells[0]);
      if (!isDateFirst && !isTicketFirst) continue;

      let openTime, closeTime, sym, typeStr, openPrice, closePrice, profit;

      if (isDateFirst) {
        // Format from screenshot:
        // [0]OpenTime [1]Ticket [2]Symbol [3]Type [4]Volume [5]OpenPrice [6]S/L [7]T/P [8]CloseTime [9]ClosePrice [10]Commission [11]Swap [12]Profit
        openTime   = cells[0];
        sym        = cells[2] || "UNKNOWN";
        typeStr    = cells[3] || "";
        openPrice  = parseNum(cells[5]);
        closeTime  = cells[8] || cells[0];
        closePrice = parseNum(cells[9] || cells[5]);
        // Profit is always the LAST meaningful numeric column
        profit = parseNum(cells[12] ?? cells[11] ?? cells[10] ?? cells[9] ?? cells[8]);
      } else {
        // Ticket-first variant: [0]Ticket [1]OpenTime [2]Symbol [3]Type [4]Volume [5]Price [6]S/L [7]T/P [8]CloseTime [9]ClosePrice [10]Comm [11]Swap [12]Profit
        openTime   = cells[1];
        sym        = cells[2] || "UNKNOWN";
        typeStr    = cells[3] || "";
        openPrice  = parseNum(cells[5]);
        closeTime  = cells[8] || cells[1];
        closePrice = parseNum(cells[9] || cells[5]);
        profit = parseNum(cells[12] ?? cells[11] ?? cells[10] ?? cells[9]);
      }

      const tl = typeStr.toLowerCase();
      if (!tl.includes("buy") && !tl.includes("sell")) continue;

      // Strip broker suffix from symbol (e.g. XAUUSD.QTT -> XAUUSD)
      const cleanSym = sym.replace(/\.[A-Z0-9]+$/, "").replace(/\s+/g, "").toUpperCase();

      trades.push(buildTrade(trades.length, {
        symbol: cleanSym || "UNKNOWN",
        entryDate: parseDate(openTime),
        entryTime: parseTime(openTime),
        side: tl.includes("sell") ? "Short" : "Long",
        entryPrice: openPrice,
        exitPrice: closePrice,
        pnl: 0,   // will stay 0; user can update or we calculate below
        profit,
        notes: "Imported from MT5"
      }));
    }

    // Post-process: calculate pnl% from profit using inferred capital
    const totalProfit = trades.reduce((s, t) => s + t.profit, 0);
    // Can't know capital from HTML alone — leave pnl=0, user sees $ profit
    return trades;
  };
  const parseMT5CSV = (text) => {
    if (/<html|<table|<tr/i.test(text)) return parseMT5HTM(text);
    const rawLines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    if (rawLines.length < 2) return [];
    const sep = rawLines[0].includes("\t") ? "\t" : ",";
    let headerIdx = -1, headers = [];
    for (let i = 0; i < Math.min(5, rawLines.length); i++) {
      const h = splitLine(rawLines[i].toLowerCase(), sep);
      if (h.some(c => ["symbol","ticket","time","type","profit","item","side","open"].includes(c))) {
        headerIdx = i; headers = h; break;
      }
    }
    const trades = [];
    if (headerIdx >= 0) {
      const ci = (names) => { for (const n of names) { const idx = headers.findIndex(h => h.includes(n)); if (idx >= 0) return idx; } return -1; };
      const iDate=ci(["open time","time","date","open"]), iSym=ci(["symbol","item","instrument","pair"]);
      const iType=ci(["type","direction","side","action"]), iOpen=ci(["open price","entry price","price open","entry"]);
      const iCloseP=ci(["close price","exit price","price close","close"]), iProfit=ci(["profit","p&l","pnl","realized","net profit","gain"]);
      const iPct=ci(["pnl%","pnl %","return %","%"]);
      for (let i = headerIdx + 1; i < rawLines.length; i++) {
        const cols = splitLine(rawLines[i], sep);
        if (cols.length < 3) continue;
        const g = (idx) => idx >= 0 ? (cols[idx] || "").trim() : "";
        const sym = g(iSym).toUpperCase() || "UNKNOWN";
        const typeStr = g(iType).toLowerCase();
        if (!sym || sym.length < 2) continue;
        if (typeStr && !typeStr.includes("buy") && !typeStr.includes("sell") && !typeStr.includes("long") && !typeStr.includes("short")) continue;
        const entryDateRaw = g(iDate);
        const entryDate = parseDate(entryDateRaw);
        if (!entryDate) continue;
        trades.push(buildTrade(i, {
          symbol: sym.replace(/\s+/g,""), entryDate, entryTime: parseTime(entryDateRaw),
          side: (typeStr.includes("sell")||typeStr.includes("short")) ? "Short" : "Long",
          entryPrice: parseNum(g(iOpen)), exitPrice: parseNum(g(iCloseP)) || parseNum(g(iOpen)),
          pnl: parseNum(g(iPct)), profit: parseNum(g(iProfit)), notes: "Imported from MT5"
        }));
      }
      if (trades.length) return trades;
    }
    const dataStart = headerIdx >= 0 ? headerIdx + 1 : 1;
    for (let i = dataStart; i < rawLines.length; i++) {
      const cols = splitLine(rawLines[i], sep);
      if (cols.length < 8) continue;
      const typeStr = (cols[3] || "").toLowerCase();
      if (!typeStr.includes("buy") && !typeStr.includes("sell")) continue;
      trades.push(buildTrade(i, {
        symbol: (cols[2] || "UNKNOWN").toUpperCase(), entryDate: parseDate(cols[0]),
        entryTime: parseTime(cols[0]),
        side: typeStr.includes("sell") ? "Short" : "Long",
        entryPrice: parseNum(cols[5]), exitPrice: parseNum(cols[5]),
        pnl: 0, profit: parseNum(cols[8] || cols[7]), notes: "Imported from MT5"
      }));
    }
    return trades;
  };
  const parseTradovateCSV = (text) => {
    const rawLines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    if (rawLines.length < 2) return [];
    const sep = rawLines[0].includes("\t") ? "\t" : ",";
    const headers = splitLine(rawLines[0].toLowerCase(), sep);
    const ci = (names) => { for (const n of names) { const idx = headers.findIndex(h => h.includes(n)); if (idx >= 0) return idx; } return -1; };
    const ciExact = (names) => { for (const n of names) { const idx = headers.indexOf(n); if (idx >= 0) return idx; } return -1; };
    const iSym = ciExact(["symbol","contract"]) >= 0 ? ciExact(["symbol","contract"]) : ci(["symbol","instrument","contract","product"]);
    // Tradovate uses boughtTimestamp as entry date
    const iDate = ciExact(["boughttimestamp"]) >= 0 ? ciExact(["boughttimestamp"]) : ci(["bought","filled","time","date","entry"]);
    const iBuyFillId = ciExact(["buyfillid"]);
    const iSellFillId = ciExact(["sellfillid"]);
    // Tradovate uses buyPrice / sellPrice
    const iEntry = ciExact(["buyprice"]) >= 0 ? ciExact(["buyprice"]) : ci(["buy price","avg price","fill price","entry","price"]);
    const iExit = ciExact(["sellprice"]) >= 0 ? ciExact(["sellprice"]) : ci(["sell price","exit","close","exit price"]);
    const iProfit = ci(["pnl","profit","realized","net","gain"]);
    const iPct = ci(["pnl%","return","percent","%"]);
    const iQty = ci(["qty","quantity","size","volume"]);
    // Parse Tradovate PnL: "$162.50" → 162.50, "$(80.00)" → -80.00
    const parseTradPnl = (s) => {
      if (!s) return 0;
      const isNeg = s.includes("(");
      const num = parseFloat(s.replace(/[^0-9.]/g,"")) || 0;
      return isNeg ? -num : num;
    };
    // Parse "MM/DD/YYYY HH:MM:SS" format
    const parseTradDate = (s) => {
      if (!s) return "";
      const m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);
      if (m) return `${m[3]}-${m[1].padStart(2,"0")}-${m[2].padStart(2,"0")}`;
      return parseDate(s);
    };
    const parseTradTime = (s) => {
      if (!s) return "00:00:00";
      const m = s.match(/(\d{2}:\d{2}:\d{2})/);
      return m ? m[1] : parseTime(s);
    };
    const trades = [];
    for (let i = 1; i < rawLines.length; i++) {
      const cols = splitLine(rawLines[i], sep);
      if (cols.length < 3) continue;
      const g = (idx) => idx >= 0 ? (cols[idx] || "").trim() : "";
      const sym = g(iSym).replace(/[^A-Z0-9]/gi,"").toUpperCase() || "UNKNOWN";
      const dateRaw = g(iDate);
      const entryDate = parseTradDate(dateRaw);
      if (!entryDate || !sym || sym.length < 1) continue;
      // Determine side from fillId ordering (buyFillId < sellFillId → Long)
      let side = "Long";
      if (iBuyFillId >= 0 && iSellFillId >= 0) {
        const buyId = parseInt(g(iBuyFillId)) || 0;
        const sellId = parseInt(g(iSellFillId)) || 0;
        if (buyId && sellId) side = buyId < sellId ? "Long" : "Short";
      }
      const rawProfit = parseTradPnl(g(iProfit));
      const qty2 = iQty >= 0 ? (parseInt(g(iQty)) || 1) : 1;
      // Per-symbol round-turn commission (per side × 2) — Tradovate schedule
      const TRAD_COMM2 = {
        ES:3.50,MES:1.00,NQ:3.50,MNQ:1.00,RTY:3.50,M2K:1.00,
        NKD:3.50,YM:3.50,MYM:1.00,
        A6:4.80,B6:4.80,C6:4.80,E6:4.80,J6:4.80,S6:4.80,N6:4.80,
        CL:4.00,MCL:1.00,QM:4.00,QG:2.60,NG:4.00,
        PL:4.60,HG:5.80,GC:4.60,MGC:1.60,SI:4.60,SIL:3.20,
        HE:5.60,LE:5.60,ZS:5.60,ZC:5.60,ZL:5.60,ZM:5.60,ZW:5.60
      };
      const rootSym2 = sym.replace(/[A-Z]?\d+$/,"");
      const commPerContract2 = TRAD_COMM2[rootSym2] !== undefined ? TRAD_COMM2[rootSym2] : 5.00;
      const commission2 = qty2 * commPerContract2;
      const profit = parseFloat((rawProfit - commission2).toFixed(2));
      trades.push(buildTrade(i, {
        symbol: sym, entryDate, entryTime: parseTradTime(dateRaw), side,
        entryPrice: parseNum(g(iEntry)), exitPrice: parseNum(g(iExit)) || parseNum(g(iEntry)),
        pnl: parseNum(g(iPct)), profit, notes: `Tradovate Import | Comm: -$${commission2.toFixed(2)} ($${commPerContract2}/ct)`
      }));
    }
    return trades;
  };
  const handleFile = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    setFile(f);
    setError("");
    setPreview(null);
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const text = ev.target.result;
        let trades = [];
        if (broker === "mt5") trades = parseMT5CSV(text);
        else if (broker === "matchtrader") trades = parseMatchTraderCSV(text);
        else if (broker === "tradovate") trades = parseTradovateCSV(text);
        else if (broker === "tradexy") trades = parseJournalCSV(text);
        else if (broker === "json") trades = parseJournalJSON(text);
        else trades = parseMT5CSV(text);
        if (!trades.length) {
          setError(broker === "tradexy"
            ? "No trades found. Make sure you are uploading a CSV exported from this journal (\u2193 CSV button in Trade Log)."
            : broker === "json"
            ? "No trades found. Make sure you are uploading a JSON backup exported from this journal (\u2193 JSON button in Trade Log)."
            : "No trades found. Check file format.");
          return;
        }
        setPreview(trades);
      } catch (err) {
        setError("Parse error: " + err.message);
      }
    };
    reader.readAsText(f);
  };
  const doImport = () => {
    if (!preview || !preview.length) return;
    setImporting(true);
    setTimeout(() => {
      onImport && onImport(preview);
      setImporting(false);
      setOpen(false);
      setFile(null);
      setPreview(null);
    }, 400);
  };
  if (!open) return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setOpen(true),
      style: { width: "100%", background: "var(--s2)", border: "1.5px dashed var(--border2)", borderRadius: 12, padding: "12px", fontSize: 12, fontWeight: 600, color: "var(--t2)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "all .15s" },
      onMouseEnter: (e) => {
        e.currentTarget.style.borderColor = "var(--acc)";
        e.currentTarget.style.color = "var(--accD)";
      },
      onMouseLeave: (e) => {
        e.currentTarget.style.borderColor = "var(--border2)";
        e.currentTarget.style.color = "var(--t2)";
      }
    },
    /* @__PURE__ */ React.createElement("span", { style: { fontSize: 16 } }, "\u{1F4E5}"),
    " Import Trades (MT5 / Tradovate / Tradexy CSV / JSON)"
  );
  return /* @__PURE__ */ React.createElement("div", { style: { background: "var(--surface)", border: "1.5px solid var(--border)", borderRadius: 14, padding: "18px", marginBottom: 16 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 700, color: "var(--text)" } }, "\u{1F4E5} Import Trades"), /* @__PURE__ */ React.createElement("button", { onClick: () => {
    setOpen(false);
    setFile(null);
    setPreview(null);
    setError("");
  }, style: { background: "var(--s3)", border: "1px solid var(--border)", borderRadius: 8, padding: "5px 11px", fontSize: 12, cursor: "pointer", color: "var(--t2)", fontWeight: 600 } }, "\u2715 Close")), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.05 } }, "Platform / Source"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, flexWrap: "wrap" } }, [["mt5", "MetaTrader 5"], ["matchtrader", "Match Trader"], ["tradovate", "Tradovate"], ["projectx", "ProjectX / Futures"], ["tradexy", "🗒 Tradexy CSV"], ["json", "💾 JSON Backup"]].map(([id, label]) => /* @__PURE__ */ React.createElement("button", { key: id, onClick: () => {
    setBroker(id);
    setFile(null);
    setPreview(null);
    setError("");
  }, style: { padding: "6px 14px", borderRadius: 20, border: `1.5px solid ${broker === id ? "var(--acc)" : "var(--border)"}`, background: broker === id ? "var(--accF)" : "var(--surface)", color: broker === id ? "var(--accD)" : "var(--t2)", fontWeight: broker === id ? 700 : 500, fontSize: 12, cursor: "pointer" } }, label)))), /* @__PURE__ */ React.createElement("div", { style: { background: "var(--s2)", borderRadius: 10, padding: "10px 14px", marginBottom: 14, fontSize: 11, color: "var(--t2)", lineHeight: 1.7 } }, broker === "mt5" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("b", null, "MT5:"), " Go to History tab \u2192 Right click \u2192 Save as Report \u2192 Tab-separated file (.htm/.csv)"), broker === "matchtrader" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("b", null, "Match Trader:"), " Closed Positions tab \u2192 Export CSV (columns: ID, Symbol, Volume, Side, Open/Close prices, Commission, Profit)"), broker === "tradovate" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("b", null, "Tradovate:"), " Account tab \u2192 Performance \u2192 Export to CSV"), broker === "projectx" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("b", null, "ProjectX / Futures:"), " Export trade history CSV from your dashboard"), broker === "tradexy" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("b", null, "Tradexy CSV:"), " Trade Log tab \u2192 \u2193 CSV button — re-import your own journal export with all fields preserved"), broker === "json" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("b", null, "JSON Backup:"), " Trade Log tab \u2192 \u2193 JSON button — full lossless backup, restores every field including confluences & emotions")), /* @__PURE__ */ React.createElement("label", { style: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, border: `2px dashed ${file ? "var(--acc)" : "var(--border2)"}`, borderRadius: 12, padding: "20px", cursor: "pointer", background: file ? "var(--accF)" : "var(--s2)", transition: "all .15s", marginBottom: 12 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 28 } }, file ? "\u2713" : (broker === "json" ? "\uD83D\uDCBE" : broker === "tradexy" ? "\uD83D\uDDD2" : "\uD83D\uDCC4")), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, fontWeight: 600, color: file ? "var(--accD)" : "var(--t3)" } }, file ? file.name : "Click to upload trade history file"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, color: "var(--t3)" } }, broker === "json" ? "JSON backup exported from this journal" : broker === "tradexy" ? "CSV exported from this journal" : "CSV, TSV, or HTM"), /* @__PURE__ */ React.createElement("input", { type: "file", accept: broker === "json" ? ".json" : ".csv,.tsv,.htm,.html,.txt", style: { display: "none" }, onChange: handleFile })), error && /* @__PURE__ */ React.createElement("div", { style: { background: "var(--rBg)", border: "1px solid var(--rBdr)", borderRadius: 8, padding: "8px 12px", fontSize: 11, color: "var(--red)", marginBottom: 10 } }, "\u26A0 ", error), preview && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, fontWeight: 600, color: "var(--green)", marginBottom: 8 } }, "\u2713 ", preview.length, " trades ready to import"), /* @__PURE__ */ React.createElement("div", { style: { background: "var(--s2)", borderRadius: 10, overflow: "hidden", border: "1px solid var(--border)" } }, /* @__PURE__ */ React.createElement("table", { style: { width: "100%", borderCollapse: "collapse", fontSize: 11 } }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", { style: { background: "var(--s3)" } }, ["Date", "Symbol", "Side", "P&L%", "Profit $"].map((h) => /* @__PURE__ */ React.createElement("th", { key: h, style: { padding: "7px 10px", textAlign: "left", fontSize: 9.5, color: "var(--t3)", fontWeight: 600, textTransform: "uppercase" } }, h)))), /* @__PURE__ */ React.createElement("tbody", null, preview.slice(0, 5).map((t, i) => /* @__PURE__ */ React.createElement("tr", { key: i, style: { borderTop: "1px solid var(--border)" } }, /* @__PURE__ */ React.createElement("td", { style: { padding: "6px 10px", color: "var(--t2)", fontFamily: "monospace", fontSize: 10 } }, t.entryDate), /* @__PURE__ */ React.createElement("td", { style: { padding: "6px 10px", fontWeight: 600 } }, t.symbol), /* @__PURE__ */ React.createElement("td", { style: { padding: "6px 10px" } }, /* @__PURE__ */ React.createElement(Chip, { color: t.side === "Long" ? "truegreen" : "red", size: "sm" }, t.side)), /* @__PURE__ */ React.createElement("td", { style: { padding: "6px 10px", color: t.profit >= 0 ? "var(--accD)" : "var(--red)", fontWeight: 700 } }, t.profit >= 0 ? "+$" : "-$", Math.abs(t.profit).toFixed(2)), /* @__PURE__ */ React.createElement("td", { style: { padding: "6px 10px", color: t.profit >= 0 ? "var(--accD)" : "var(--red)", fontWeight: 700 } }, t.profit >= 0 ? "+$" : "-$", Math.abs(t.profit).toFixed(2)))), preview.length > 5 && /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", { colSpan: 5, style: { padding: "6px 10px", color: "var(--t3)", fontSize: 10, textAlign: "center" } }, "\u2026and ", preview.length - 5, " more")))))), preview && /* @__PURE__ */ React.createElement("button", { onClick: doImport, disabled: importing, style: { width: "100%", background: "linear-gradient(135deg,var(--acc),var(--accD))", color: "#fff", border: "none", borderRadius: 10, padding: "11px", fontSize: 13, fontWeight: 700, cursor: "pointer", boxShadow: "0 3px 10px color-mix(in srgb, var(--acc) 35%, transparent)" } }, importing ? "Importing\u2026" : "\u2713 Import " + preview.length + " Trades"));
}
function Sidebar({ activeTab, setTab, sidebarOpen, setSidebarOpen, setSidebarHover, userName, setUserName, accounts, seedTrades, demoDeleted, editingUi, setEditingUi, uiBlocks, toggleBlock, resetUi, onOpenSettings, theme, setTheme }) {
  const isMobile = useMediaQuery("(max-width:768px)");
  const TABS = [
    { id: "overview", label: "Overview", icon: /* @__PURE__ */ React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "3", width: "7", height: "7" }), /* @__PURE__ */ React.createElement("rect", { x: "14", y: "3", width: "7", height: "7" }), /* @__PURE__ */ React.createElement("rect", { x: "3", y: "14", width: "7", height: "7" }), /* @__PURE__ */ React.createElement("rect", { x: "14", y: "14", width: "7", height: "7" })) },
    { id: "analytics", label: "Analytics", icon: /* @__PURE__ */ React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" })) },
    { id: "calendar", label: "Calendar", icon: /* @__PURE__ */ React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }), /* @__PURE__ */ React.createElement("line", { x1: "16", y1: "2", x2: "16", y2: "6" }), /* @__PURE__ */ React.createElement("line", { x1: "8", y1: "2", x2: "8", y2: "6" }), /* @__PURE__ */ React.createElement("line", { x1: "3", y1: "10", x2: "21", y2: "10" })) },
    { id: "psychology", label: "Psychology", icon: /* @__PURE__ */ React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" })) },
    { id: "tradelog", label: "Trade Log", icon: /* @__PURE__ */ React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("line", { x1: "8", y1: "6", x2: "21", y2: "6" }), /* @__PURE__ */ React.createElement("line", { x1: "8", y1: "12", x2: "21", y2: "12" }), /* @__PURE__ */ React.createElement("line", { x1: "8", y1: "18", x2: "21", y2: "18" }), /* @__PURE__ */ React.createElement("line", { x1: "3", y1: "6", x2: "3.01", y2: "6" }), /* @__PURE__ */ React.createElement("line", { x1: "3", y1: "12", x2: "3.01", y2: "12" }), /* @__PURE__ */ React.createElement("line", { x1: "3", y1: "18", x2: "3.01", y2: "18" })) }
  ];
  const allT = accounts.length ? accounts.flatMap((a) => a.trades) : (demoDeleted ? [] : seedTrades);
  const totalProfit = allT.reduce((s, t) => s + (t.profit || 0), 0);
  const sidebarCapital = accounts.length > 0 && accounts[0].capital > 0 ? accounts[0].capital : 5000;
  const totalPnl = calcPnL(totalProfit, sidebarCapital);
  const initials = userName.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  const click = (id) => {
    setTab(id);
    if (isMobile) setSidebarOpen(false);
  };
  if (!sidebarOpen) return /* @__PURE__ */ React.createElement(
    "div",
    {
      style: { width: isMobile ? 0 : 56, background: "var(--surface)", height: "100vh", position: "fixed", left: 0, top: 0, zIndex: 200, display: isMobile ? "none" : "flex", flexDirection: "column", alignItems: "center", paddingTop: 12, gap: 2, borderRight: "1px solid var(--border)", boxShadow: "var(--sh1)" },
      onMouseEnter: () => setSidebarHover && setSidebarHover(true),
      onMouseLeave: () => setSidebarHover && setSidebarHover(false)
    },
    /* @__PURE__ */ React.createElement("div", { style: { width: 36, height: 36, borderRadius: 10, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8, flexShrink: 0, background: "var(--surface)", border: "1px solid var(--border)" } }, /* @__PURE__ */ React.createElement("img", { src: "data:image/png;base64,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AAAAI8wjzBIVIVKAAACioAAAAAKCAAAAAAAAAAIAAAAAAAAAAAAACgAAAgAAAAAAogoAAAAAAAAAgKAgAAAKAAAAAAACAAAAAAAAoAAAAAIAAAAAAAAAAACgAgAAAAAAAKAAAAAAACAepKAoiqAigAAAAkKkKlAAABQAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAFABAAAAAAAAAAAAAAUAEABQAQAFABAAUAAAAAEAAAAAAAAABQAAAAAAAQEBRQEAAABQAAAAAQAFAAAAAAAAAEQUQUAAAAFhFAAAIACBIUoAIAAAAKAAioooIAAAqAAAAAACAAoAIAAAAACgAAAAAgAKACAAAigAAAAACgAAAAAAqQoIKgKigIAAAAAAAgAgKIoAgooAAAAAACAAoAgKAAAgAKAAAAACAAoAAAAAIACgSEoIKAgsoooCAAAAAeoeoEBAUAAAAAAUBRAAVAAABUFBAAURQQBAAUAEAAAAABQAAAAAQAFABAAAAAAAAAAAAAAUAAAAAUAAEAAAAAAAARZEARQQBRQAAAAEAAAAABQAAAQAFAEBQEAAABQAAAAAQAFABAAA5AAAAAAAAPUPUCAgKAAAAAAKAoIqAAAAAoigIqAoiggACoAAAAIAAACgAAAAAAAAAAAAAAAAAAAAAgAqggAAAAAogAAAAAAgAAIqAoAIKiigAAIAAAAAAAICgKAAAACACgAAAAAAAAAAAAIAAAAAAAAAAAAB6h6gkKkKUAAAAAAUABAAAUAAAAAAAAAAVAAAAAAAAAAAAAAAQAAAAAFAAAAABAAAAAVFUEVAAAAAAAAAAEAAAAEFAEUBAFFAQAAAAAAAAAFAAAAAAEFQFAARUQUBQAAAAAAAKAioAAAAAAAAACgAgkKkKUAAAAAAFQAABRFUQAAAAAFABBUAAAABRFBAAAAAAAAAAAEAAABQAAAQAAAAAAFQUVAAAAAQAABBRQEAAAAAEBRFBBUUUBAAAAAAAAUAAFRQQAAAAAABABAUAAEUUAAQBQEAEUUBAAAAAAAAAPUPUEhUhSgAAAAAAAAAAAoAAAAAAoiggAAAAAAAAAAAACAAoAAAIAAAAAAAAAAAAAAAAAAAAAACKAIoAAAAAEAAICgAgCigIAAAAAAACgAAAAAAAAAgAAgCigIIAooCAioooCCCigAgAAAAAAAAHqHqCQqQpQAAAAA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AAABAAUAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATlYAAAAAAAAAAAAAAUAEAAAAAAAAAAAAAAAAAAAAAABFRQhQABAUAFQAAAAAAAEUFABAABFAQAFAAPUAICBAAWAqKCCoAAAAAAAAACggAAAACAAoAIAAAAAAAAAAAAACgAgAKAAACAAAAAkqnAAcHABHmEAoAAAAKogAACAAAAoAAAIAAACgAAAAioCgIAAAAAICgKCKgKAggSKKAgAKACAAAAAAAAAAAAogAKAAAgQJClAABUVRAEABQBEFAAAAVBQAAAAAQAAAAAAAAAAAAAAAAAAAFAAAAABAAAAAAAAAAAAAAAVBQAQAAAAAAAAAFAAAAAAAAAEQUBQAQAAAQFAUAQFAQJAAAAAAAUAAAAAAAAAAAEAJQFAUAAIEhUoAAAAAAAAAAAAAQAAoAIACgAgAAAAAAAAAAAAAAAAAAAAAKAAACAAAAAAAAAJwsAAAAAAKAAACAAAAAAoAAAIAAAAACgiiAAAAAAAAAAAioCgASQAAAAAACgAAAAAAAAAgAACLAAAAAJCpClAABUVRAEAAAAAAAAAAAAABQAAAAAQAAAAAAAAAAAAAFABAAAAAAUAAAEAAABQAQAAAFBUAAAAAAEABQAAAAAAAABAURQAEABQAQAFABAAUAAAAAEAAAEBQFABAAUAEAAAEBQFD1PVFQAAD1D1BIUgKAACoqiCoAAgAAAAAAAAAAAKAAAAACAAACAoAAAAAAAACgAgAAAAAAAKACAAAAoAIAAAAKiiiAAAAAIAAAAACgAAAAigAAACAAoAAAAAAAAAIAAAAAAEoqAoAAAAAAAAACLKKKiiCLAgKAAeoeoEBAtABAVFUQBBQFEFQAAABAAUAAAAAEAAAAABQAQAAAAAFAAAAAAAAABABVEAAAAAAAAAAAQAAUQUAAAAAEABYAAAAAAAAAAAAAAAAAAAAAAACACAoAAAAAAAAAAAACgAAAACAoAAiwgAAHqHqCQqQpQAAAAABRBQAAAAAQAAAAAFABAAAAAAUAAAEAAABQAQAFAAAAABBQFEAAAAAQAFAA2AAACAAoAAAAAIAAAAACgAAAAAAAAAAAAAAAAAgAAgCiwAgBwAAAAAAAAAAKAAAACKgAoCLAIAAB6h6gkKkKUAAFRVEAQFBRBUBRFBAAAAAAAAAAAAAAAAAEAAAAABQAAAAAAAAAAVAAAABAAAAUAAAAAEoAAAAAKAHqAAAAAAAAAAAAAAAAAAAAAAACAoCAAAAAAAAAAAAoAIACgAAAAAAAAAgAAHqHqCQqQpQAAVBQAQUBRBUAVFBAAAAAEABQAAAAAAFAQAAAABAAUAAAUEAAAAAQAVRAAAAAEABQAAAAAQAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAUAEABQAAAAAAAQAAAAD1D1AgICgAAqKoAIACgioCiKAgAAAAAAAAAoiggAKAAigAAIAAAAAAqAAAAAAACoAAAAAAIACgAgAKAAAAACAAoAAAAAIAAASKAAAAAAAAAAAAAAAAAAAAAAAAAAACAAoAIACgB6gAAAIAAAAAACeqnqBAQFAABUFFAAAQQVFAVAAAFQAAABQQAAAAAFAABAVAAAAAAAAAAAAABUAAAAAAAAAAAABAAUAAAAAAAAAAAAAAAEAAABQAAAAEAUAABAAAAAAWAAAAAAAEAAAAAAAAAACAAAAAAAAAAAeoeoECQpQAAABRBRQEBFRRQAQBAAUAAAAAAAAAAFQAAAAAABQAAARQBAABQBFQFEUBFQBUAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAABQAQAFABAAAAAAAAUAAAAAAAAAAAAAAAEAAAAAAAAABdAeoAkKkKlAAAAgAKKAAioACggCAAAAoAAAAAAAIACgAAAAACgACAKACAAoigIoACAAAAAAAAAAAAAAAKiggAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAoAAAAAAAAAACgIAAAAAgAAAAAAAAAKAAJCpCpQAAAUVABQAJRUBQAQAAAAAFQAAAAAAEBUVQRUAAAAAVAAAFEAAAURQAQAAAABUAVFQAAAAAAAVAFRQEAAAAAAAAAFEAAAAAAEAAAAABQAAAAAQAFAAAAAAAAAAFEAAAAAEVAWAEAAAAABQAAPUI8wSFIEAAAAAAAA2ACgqAACAAuwCUBQEASRRRPFUAQVVAEAEAAABQAAABRFBAAUBABFAAAQgXSgIgAbAA2AAAACoAKgoAAAoIAAAAAAAACAoCAAoAAAAAAAAAAAAAIAhyooCAAoAAAGwANgAAAAAAAAAgAAAAAKAHqgQEAAAAAAAAAAAAAAAAACKCgAgnqsosVQEQAgAAAAAAAAAA2ACigAIqAoACBKAgKoQAKAiAAAAAAAAAC6AABUAUDkBFQFEAAEAAACAAAAAAFABAAUAAUAEAAAQAAAAAIAAAAAAAAAAUAAURQQAAAAAAAAACAgQAAAAAAAAAAAAAAAAEDgVUOAACBVAGSQBQAQIThYVQBEAAAAAFFA8QA8TxAEACQQQODhVAEFgSFACU8QUAQAAXg4OFABAAkBAUAXgEAQAAAAAASQmBVUBEAAAAAnkAAAAAUFEAQAAAAEk8VVUIAFCBEBPFQAAAAAAAAAFAAAFARTxBAAAUH/9k=", alt: "Tradexy", style: { width: 32, height: 32, objectFit: "contain" } })),
    /* @__PURE__ */ React.createElement("button", { onClick: (e) => { e.stopPropagation(); setSidebarOpen(true); setSidebarHover && setSidebarHover(false); }, style: { background: "none", border: "none", color: "var(--t2)", cursor: "pointer", padding: 4, borderRadius: 8, width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 4 }, title: "Open sidebar", onMouseEnter: (e) => {
      e.currentTarget.style.background = "var(--s2)";
    }, onMouseLeave: (e) => {
      e.currentTarget.style.background = "none";
    } }, /* @__PURE__ */ React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5" }, /* @__PURE__ */ React.createElement("line", { x1: "3", y1: "6", x2: "21", y2: "6" }), /* @__PURE__ */ React.createElement("line", { x1: "3", y1: "12", x2: "21", y2: "12" }), /* @__PURE__ */ React.createElement("line", { x1: "3", y1: "18", x2: "21", y2: "18" }))),
    /* @__PURE__ */ React.createElement("div", { style: { width: 28, height: 1, background: "var(--border)", margin: "2px 0 4px" } }),
    TABS.map((t) => /* @__PURE__ */ React.createElement("button", { key: t.id, onClick: () => click(t.id), title: t.label, style: { background: activeTab === t.id ? "color-mix(in srgb, var(--acc) 12%, transparent)" : "none", border: "none", color: activeTab === t.id ? "var(--acc)" : "var(--t3)", cursor: "pointer", padding: 8, borderRadius: 10, width: 38, height: 38, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", transition: "all .15s" }, onMouseEnter: (e) => {
      if (activeTab !== t.id) e.currentTarget.style.background = "var(--s2)";
    }, onMouseLeave: (e) => {
      if (activeTab !== t.id) e.currentTarget.style.background = "none";
    } }, activeTab === t.id && /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", right: -1, top: "50%", transform: "translateY(-50%)", width: 3, height: 22, background: "var(--acc)", borderRadius: "3px 0 0 3px" } }), t.icon))
  );
  return /* @__PURE__ */ React.createElement(React.Fragment, null, isMobile && /* @__PURE__ */ React.createElement("div", { onClick: () => setSidebarOpen(false), style: { position: "fixed", inset: 0, background: "rgba(0,0,0,.35)", zIndex: 199 } }), !isMobile && /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", left: 0, top: 0, width: 8, height: "100vh", zIndex: 198 }, onMouseEnter: () => setSidebarHover && setSidebarHover(true) }), /* @__PURE__ */ React.createElement(
    "div",
    {
      style: { width: 228, background: "var(--surface)", height: "100vh", position: "fixed", left: 0, top: 0, zIndex: 200, display: "flex", flexDirection: "column", borderRight: "1px solid var(--border)", boxShadow: "var(--sh3)", animation: "sidebarSlide .22s cubic-bezier(.22,1,.36,1)" },
      onMouseLeave: () => setSidebarHover && setSidebarHover(false)
    },
    /* @__PURE__ */ React.createElement("div", { style: { padding: "16px 16px 12px", display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 38, height: 38, borderRadius: 10, overflow: "hidden", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--surface)", border: "1px solid var(--border)" } }, /* @__PURE__ */ React.createElement("img", { src: "data:image/png;base64,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AAAAI8wjzBIVIVKAAACioAAAAAKCAAAAAAAAAAIAAAAAAAAAAAAACgAAAgAAAAAAogoAAAAAAAAAgKAgAAAKAAAAAAACAAAAAAAAoAAAAAIAAAAAAAAAAACgAgAAAAAAAKAAAAAAACAepKAoiqAigAAAAkKkKlAAABQAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAFABAAAAAAAAAAAAAAUAEABQAQAFABAAUAAAAAEAAAAAAAAABQAAAAAAAQEBRQEAAABQAAAAAQAFAAAAAAAAAEQUQUAAAAFhFAAAIACBIUoAIAAAAKAAioooIAAAqAAAAAACAAoAIAAAAACgAAAAAgAKACAAAigAAAAACgAAAAAAqQoIKgKigIAAAAAAAgAgKIoAgooAAAAAACAAoAgKAAAgAKAAAAACAAoAAAAAIACgSEoIKAgsoooCAAAAAeoeoEBAUAAAAAAUBRAAVAAABUFBAAURQQBAAUAEAAAAABQAAAAAQAFABAAAAAAAAAAAAAAUAAAAAUAAEAAAAAAAARZEARQQBRQAAAAEAAAAABQAAAQAFAEBQEAAABQAAAAAQAFABAAA5AAAAAAAAPUPUCAgKAAAAAAKAoIqAAAAAoigIqAoiggACoAAAAIAAACgAAAAAAAAAAAAAAAAAAAAAgAqggAAAAAogAAAAAAgAAIqAoAIKiigAAIAAAAAAAICgKAAAACACgAAAAAAAAAAAAIAAAAAAAAAAAAB6h6gkKkKUAAAAAAUABAAAUAAAAAAAAAAVAAAAAAAAAAAAAAAQAAAAAFAAAAABAAAAAVFUEVAAAAAAAAAAEAAAAEFAEUBAFFAQAAAAAAAAAFAAAAAAEFQFAARUQUBQAAAAAAAKAioAAAAAAAAACgAgkKkKUAAAAAAFQAABRFUQAAAAAFABBUAAAABRFBAAAAAAAAAAAEAAABQAAAQAAAAAAFQUVAAAAAQAABBRQEAAAAAEBRFBBUUUBAAAAAAAAUAAFRQQAAAAAABABAUAAEUUAAQBQEAEUUBAAAAAAAAAPUPUEhUhSgAAAAAAAAAAAoAAAAAAoiggAAAAAAAAAAAACAAoAAAIAAAAAAAAAAAAAAAAAAAAAACKAIoAAAAAEAAICgAgCigIAAAAAAACgAAAAAAAAAgAAgCigIIAooCAioooCCCigAgAAAAAAAAHqHqCQqQpQAAAAA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AAABAAUAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATlYAAAAAAAAAAAAAAUAEAAAAAAAAAAAAAAAAAAAAAABFRQhQABAUAFQAAAAAAAEUFABAABFAQAFAAPUAICBAAWAqKCCoAAAAAAAAACggAAAACAAoAIAAAAAAAAAAAAACgAgAKAAACAAAAAkqnAAcHABHmEAoAAAAKogAACAAAAoAAAIAAACgAAAAioCgIAAAAAICgKCKgKAggSKKAgAKACAAAAAAAAAAAAogAKAAAgQJClAABUVRAEABQBEFAAAAVBQAAAAAQAAAAAAAAAAAAAAAAAAAFAAAAABAAAAAAAAAAAAAAAVBQAQAAAAAAAAAFAAAAAAAAAEQUBQAQAAAQFAUAQFAQJAAAAAAAUAAAAAAAAAAAEAJQFAUAAIEhUoAAAAAAAAAAAAAQAAoAIACgAgAAAAAAAAAAAAAAAAAAAAAKAAACAAAAAAAAAJwsAAAAAAKAAACAAAAAAoAAAIAAAAACgiiAAAAAAAAAAAioCgASQAAAAAACgAAAAAAAAAgAACLAAAAAJCpClAABUVRAEAAAAAAAAAAAAABQAAAAAQAAAAAAAAAAAAAFABAAAAAAUAAAEAAABQAQAAAFBUAAAAAAEABQAAAAAAAABAURQAEABQAQAFABAAUAAAAAEAAAEBQFABAAUAEAAAEBQFD1PVFQAAD1D1BIUgKAACoqiCoAAgAAAAAAAAAAAKAAAAACAAACAoAAAAAAAACgAgAAAAAAAKACAAAAoAIAAAAKiiiAAAAAIAAAAACgAAAAigAAACAAoAAAAAAAAAIAAAAAAEoqAoAAAAAAAAACLKKKiiCLAgKAAeoeoEBAtABAVFUQBBQFEFQAAABAAUAAAAAEAAAAABQAQAAAAAFAAAAAAAAABABVEAAAAAAAAAAAQAAUQUAAAAAEABYAAAAAAAAAAAAAAAAAAAAAAACACAoAAAAAAAAAAAACgAAAACAoAAiwgAAHqHqCQqQpQAAAAABRBQAAAAAQAAAAAFABAAAAAAUAAAEAAABQAQAFAAAAABBQFEAAAAAQAFAA2AAACAAoAAAAAIAAAAACgAAAAAAAAAAAAAAAAAgAAgCiwAgBwAAAAAAAAAAKAAAACKgAoCLAIAAB6h6gkKkKUAAFRVEAQFBRBUBRFBAAAAAAAAAAAAAAAAAEAAAAABQAAAAAAAAAAVAAAABAAAAUAAAAAEoAAAAAKAHqAAAAAAAAAAAAAAAAAAAAAAACAoCAAAAAAAAAAAAoAIACgAAAAAAAAAgAAHqHqCQqQpQAAVBQAQUBRBUAVFBAAAAAEABQAAAAAAFAQAAAABAAUAAAUEAAAAAQAVRAAAAAEABQAAAAAQAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAUAEABQAAAAAAAQAAAAD1D1AgICgAAqKoAIACgioCiKAgAAAAAAAAAoiggAKAAigAAIAAAAAAqAAAAAAACoAAAAAAIACgAgAKAAAAACAAoAAAAAIAAASKAAAAAAAAAAAAAAAAAAAAAAAAAAACAAoAIACgB6gAAAIAAAAAACeqnqBAQFAABUFFAAAQQVFAVAAAFQAAABQQAAAAAFAABAVAAAAAAAAAAAAABUAAAAAAAAAAAABAAUAAAAAAAAAAAAAAAEAAABQAAAAEAUAABAAAAAAWAAAAAAAEAAAAAAAAAACAAAAAAAAAAAeoeoECQpQAAABRBRQEBFRRQAQBAAUAAAAAAAAAAFQAAAAAABQAAARQBAABQBFQFEUBFQBUAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAABQAQAFABAAAAAAAAUAAAAAAAAAAAAAAAEAAAAAAAAABdAeoAkKkKlAAAAgAKKAAioACggCAAAAoAAAAAAAIACgAAAAACgACAKACAAoigIoACAAAAAAAAAAAAAAAKiggAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAoAAAAAAAAAACgIAAAAAgAAAAAAAAAKAAJCpCpQAAAUVABQAJRUBQAQAAAAAFQAAAAAAEBUVQRUAAAAAVAAAFEAAAURQAQAAAABUAVFQAAAAAAAVAFRQEAAAAAAAAAFEAAAAAAEAAAAABQAAAAAQAFAAAAAAAAAAFEAAAAAEVAWAEAAAAABQAAPUI8wSFIEAAAAAAAA2ACgqAACAAuwCUBQEASRRRPFUAQVVAEAEAAABQAAABRFBAAUBABFAAAQgXSgIgAbAA2AAAACoAKgoAAAoIAAAAAAAACAoCAAoAAAAAAAAAAAAAIAhyooCAAoAAAGwANgAAAAAAAAAgAAAAAKAHqgQEAAAAAAAAAAAAAAAAACKCgAgnqsosVQEQAgAAAAAAAAAA2ACigAIqAoACBKAgKoQAKAiAAAAAAAAAC6AABUAUDkBFQFEAAEAAACAAAAAAFABAAUAAUAEAAAQAAAAAIAAAAAAAAAAUAAURQQAAAAAAAAACAgQAAAAAAAAAAAAAAAAEDgVUOAACBVAGSQBQAQIThYVQBEAAAAAFFA8QA8TxAEACQQQODhVAEFgSFACU8QUAQAAXg4OFABAAkBAUAXgEAQAAAAAASQmBVUBEAAAAAnkAAAAAUFEAQAAAAEk8VVUIAFCBEBPFQAAAAAAAAAFAAAFARTxBAAAUH/9k=", alt: "Tradexy", style: { width: 34, height: 34, objectFit: "contain" } })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, fontWeight: 800, letterSpacing: "-.5px", lineHeight: 1.1, color: "var(--text)" } }, "Tradexy"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9, fontWeight: 500, color: "var(--t3)", letterSpacing: 0.4, textTransform: "uppercase", marginTop: 2 } }, "Trading Journal")), /* @__PURE__ */ React.createElement("button", { onClick: (e) => { e.stopPropagation(); setSidebarOpen(false); setSidebarHover && setSidebarHover(false); }, style: { background: "none", border: "1px solid var(--border)", color: "var(--t3)", cursor: "pointer", padding: 4, borderRadius: 7, display: "flex", alignItems: "center", width: 26, height: 26, justifyContent: "center" }, onMouseEnter: (e) => {
      e.currentTarget.style.borderColor = "var(--acc)";
      e.currentTarget.style.color = "var(--acc)";
    }, onMouseLeave: (e) => {
      e.currentTarget.style.borderColor = "var(--border)";
      e.currentTarget.style.color = "var(--t3)";
    } }, /* @__PURE__ */ React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5" }, /* @__PURE__ */ React.createElement("polyline", { points: "15 18 9 12 15 6" })))),
    /* @__PURE__ */ React.createElement("div", { style: { padding: "0 12px 14px" } }, /* @__PURE__ */ React.createElement("button", { "data-tour": "add-trade-btn", onClick: () => {
      click("tradelog");
      setTab("tradelog");
    }, style: { width: "100%", background: "linear-gradient(135deg,var(--acc),var(--accD))", color: "#fff", border: "none", borderRadius: 11, padding: "11px 16px", fontSize: 13, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, boxShadow: "0 4px 14px color-mix(in srgb, var(--acc) 38%, transparent)" } }, /* @__PURE__ */ React.createElement("div", { style: { width: 22, height: 22, borderRadius: 6, background: "rgba(255,255,255,.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 300 } }, "+"), "Log Trade")),
    /* @__PURE__ */ React.createElement("div", { style: { flex: 1, padding: "0 8px", display: "flex", flexDirection: "column", gap: 2, overflowY: "auto" } }, TABS.map((t) => {
      const active = activeTab === t.id;
      return /* @__PURE__ */ React.createElement("button", { key: t.id, onClick: () => click(t.id), className: "nav-btn", "data-tour": `nav-${t.id}`, style: { background: active ? "color-mix(in srgb, var(--acc) 10%, transparent)" : "transparent", color: active ? "var(--acc)" : "var(--t2)", fontWeight: active ? 700 : 500, fontSize: 13, boxShadow: active ? "inset 0 0 0 1px color-mix(in srgb, var(--acc) 25%, transparent)" : "none" } }, /* @__PURE__ */ React.createElement("span", { style: { opacity: active ? 1 : 0.6 } }, t.icon), /* @__PURE__ */ React.createElement("span", { style: { flex: 1 } }, t.label), active && /* @__PURE__ */ React.createElement("div", { style: { width: 6, height: 6, borderRadius: "50%", background: "var(--acc)" } }));
    })),
    /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 14px", borderTop: "1px solid var(--border)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 8 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 34, height: 34, borderRadius: 10, background: "linear-gradient(135deg,var(--acc),var(--accD))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 600, color: "#fff", flexShrink: 0, boxShadow: "0 2px 8px color-mix(in srgb, var(--acc) 30%, transparent)" } }, initials), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12.5, fontWeight: 700, color: "var(--text)" } }, userName), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "var(--t3)", marginTop: 1 } }, allT.length, " trades \xB7 ", /* @__PURE__ */ React.createElement("span", { style: { color: totalPnl >= 0 ? "var(--acc)" : "var(--t3)", fontWeight: 700 } }, fmtPct(totalPnl))))), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9.5, color: "var(--t3)", textAlign: "center", paddingTop: 8, borderTop: "1px solid var(--border)", letterSpacing: 0.3 } }, "Tradexy \xB7 v1.0"))
  ));
}
const DEFAULT_UI_BLOCKS = { bestTradeGrade: true, disciplineScore: true, bestMindset: true, worstMindset: true, mistakeRate: true, equityCurve: true, monthlyBars: true, winRateCard: true, gradeBreakdown: true, sessionBreakdown: true, modelBreakdown: true };

function OnboardingModal({ onDone, setTab, onOpenSettings }) {
  const E = React.createElement;
  const [step, setStep] = React.useState(0);
  const [closing, setClosing] = React.useState(false);
  const [previewTheme, setPreviewTheme] = React.useState(null);
  const [previewAccent, setPreviewAccent] = React.useState(null);
  const [spotRect, setSpotRect] = React.useState(null);
  const [cardStyle, setCardStyle] = React.useState({});

  /* ── Tour steps ──────────────────────────────────────────────
     Order: Welcome → Accounts → Log Trade → Overview → Analytics
            → Calendar → Psychology → Trade Log → Calculator
            → Settings → Theme → Finish
  ─────────────────────────────────────────────────────────── */
  const STEPS = [
    {
      target: null,
      cardPos: 'center',
      title: 'Welcome to Tradexy \uD83D\uDC4B',
      subtitle: 'A quick tour of the whole app — takes under a minute. Use \u2190 \u2192 arrows or the buttons below.',
      isWelcome: true,
    },
    {
      target: '[data-tour="accounts-panel"]',
      cardPos: 'bottom-right',
      tabSwitch: null,
      title: '\uD83C\uDFE6 Accounts Panel',
      subtitle: 'Click \u201C+ Add\u201D to create an account. Choose Demo for practice or MT5 for your live broker. Enter starting capital for accurate % P&L.',
    },
    {
      target: '[data-tour="add-trade-btn"]',
      cardPos: 'bottom-right',
      tabSwitch: null,
      title: '\u270F\uFE0F Log a Trade',
      subtitle: 'Click here \u2014 or press \u201CN\u201D from anywhere \u2014 to open the trade form. Log symbol, P&L, session, grade, emotions and confluences.',
    },
    {
      target: '[data-tour="nav-overview"]',
      cardPos: 'right',
      tabSwitch: 'overview',
      title: '\uD83D\uDCCA Overview Tab',
      subtitle: 'Your main dashboard. See equity curve, win rate, profit factor and recent trades \u2014 all at a glance. Customise blocks via Settings \u2192 Edit UI.',
    },
    {
      target: '[data-tour="nav-analytics"]',
      cardPos: 'right',
      tabSwitch: 'analytics',
      title: '\uD83D\uDCC8 Analytics Tab',
      subtitle: 'Deep-dive breakdowns by session, model, confluence and grade. The \u26A1 Edge Finder tab scores every combo to show your real statistical edges.',
    },
    {
      target: '[data-tour="nav-calendar"]',
      cardPos: 'right',
      tabSwitch: 'calendar',
      title: '\uD83D\uDCC5 Calendar Tab',
      subtitle: 'Heat-map of your trading days. Green = profit, red = loss. Click any day to review all trades from that session in a popup.',
    },
    {
      target: '[data-tour="nav-psychology"]',
      cardPos: 'right',
      tabSwitch: 'psychology',
      title: '\uD83E\uDDE0 Psychology Tab',
      subtitle: 'Track pre-trade emotions, mistakes and mindset patterns. See exactly which emotional states lead to wins vs losses in your data.',
    },
    {
      target: '[data-tour="nav-tradelog"]',
      cardPos: 'right',
      tabSwitch: 'tradelog',
      title: '\uD83D\uDCDC Trade Log',
      subtitle: 'Full history with filters. Edit any trade, attach chart screenshots, bulk-delete, and search by symbol, grade, date range and more.',
    },
    {
      target: '[data-tour="calc-btn"]',
      cardPos: 'top-right',
      tabSwitch: null,
      title: '\uD83E\uDDEE Position Calculator',
      subtitle: 'Enter your risk % and stop distance to get the exact lot size instantly. Find this at the bottom of the sidebar anytime.',
    },
    {
      target: '[data-tour="settings-btn"]',
      cardPos: 'top-right',
      tabSwitch: null,
      title: '\u2699\uFE0F Settings',
      subtitle: 'Appearance, profile, import trades from MT5/Tradovate CSV, manage lists, edit UI layout \u2014 all here.',
    },
    {
      target: null,
      cardPos: 'center',
      title: '\uD83C\uDFA8 Pick Your Theme',
      subtitle: 'Choose your look. Changes apply live.',
      isThemePicker: true,
    },
    {
      target: null,
      cardPos: 'center',
      title: "\uD83D\uDE80 You're all set!",
      subtitle: 'Press N to log your first trade. Revisit this tour anytime via Settings \u2192 Guide.',
      isFinish: true,
    },
  ];

  const TOTAL = STEPS.length;
  const cur = STEPS[step];

  /* ── Close / finish ──────────────────────────────────────── */
  const close = React.useCallback(() => {
    setClosing(true);
    if (previewTheme) {
      const s = localStorage.getItem('tj5_theme') || 'zinc';
      document.documentElement.setAttribute('data-theme', s);
    }
    if (previewAccent) {
      const s = localStorage.getItem('tj5_accent') || 'indigo';
      document.documentElement.setAttribute('data-accent', s);
    }
    setTimeout(() => { try { localStorage.setItem('tj_onboarding_done','1'); } catch(e){} onDone(); }, 180);
  }, [onDone, previewTheme, previewAccent]);

  const finish = React.useCallback(() => {
    setClosing(true);
    if (previewTheme) try { localStorage.setItem('tj5_theme', previewTheme); } catch(e){}
    if (previewAccent) try { localStorage.setItem('tj5_accent', previewAccent); } catch(e){}
    setTimeout(() => { try { localStorage.setItem('tj_onboarding_done','1'); } catch(e){} onDone(); }, 180);
  }, [onDone, previewTheme, previewAccent]);

  /* ── Navigation ──────────────────────────────────────────── */
  const goTo = React.useCallback((n) => {
    if (n < 0 || n >= TOTAL) return;
    const s = STEPS[n];
    if (s.tabSwitch && setTab) setTab(s.tabSwitch);
    setStep(n);
  }, [TOTAL, setTab]);

  /* ── Keyboard ────────────────────────────────────────────── */
  React.useEffect(() => {
    const h = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') goTo(step + 1);
      if (e.key === 'ArrowLeft') goTo(step - 1);
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [close, goTo, step]);

  /* ── Theme / accent live preview ─────────────────────────── */
  const applyTheme  = (id) => { document.documentElement.setAttribute('data-theme',  id); setPreviewTheme(id); };
  const applyAccent = (id) => { document.documentElement.setAttribute('data-accent', id); setPreviewAccent(id); };

  /* ── Spotlight positioning ───────────────────────────────────
     Delay slightly after tab switch so React has time to re-render
     the newly visible sidebar button before we measure it.
  ─────────────────────────────────────────────────────────── */
  React.useEffect(() => {
    if (!cur.target) {
      setSpotRect(null);
      setCardStyle({});
      return;
    }

    // Use a short delay so that tab-switch re-renders complete first
    const timer = setTimeout(() => {
      const el = document.querySelector(cur.target);
      if (!el) { setSpotRect(null); setCardStyle({}); return; }

      const r = el.getBoundingClientRect();
      const PAD = 7;
      setSpotRect({ top: r.top - PAD, left: r.left - PAD, width: r.width + PAD * 2, height: r.height + PAD * 2 });

      const pos = cur.cardPos || 'right';
      const CARD_W = 310;
      const VW = window.innerWidth;
      const VH = window.innerHeight;

      let style = { position: 'fixed', width: CARD_W, zIndex: 2147483646 };
      if (pos === 'right') {
        style.top = Math.max(16, Math.min(r.top, VH - 260));
        style.left = Math.min(r.right + 18, VW - CARD_W - 16);
      } else if (pos === 'bottom-right') {
        style.top = Math.min(r.bottom + 14, VH - 220);
        style.left = Math.min(r.left, VW - CARD_W - 16);
      } else if (pos === 'top-right') {
        // calc/settings buttons are top-right — place card bottom-left so it never overlaps them
        const cardH = 220;
        style.top = Math.max(16, r.top - cardH - 14);
        style.left = Math.max(16, r.left - CARD_W - 14);
        // fallback: if too close to left edge, go below instead
        if (style.left < 16) {
          style.left = Math.max(16, VW - CARD_W - 16);
          style.top = Math.min(r.bottom + 12, VH - cardH - 16);
        }
      }
      setCardStyle(style);
    }, cur.tabSwitch ? 80 : 20);

    return () => clearTimeout(timer);
  }, [step]);

  const isCentered = !cur.target;
  const progress = ((step + 1) / TOTAL) * 100;

  /* ── Theme data ──────────────────────────────────────────── */
  const themes = [
    { id:'zinc',     label:'Zinc',     bg:'#f4f4f5', dot:'#4f46e5' },
    { id:'light',    label:'Light',    bg:'#f0f2ff', dot:'#c8983a' },
    { id:'slate',    label:'Slate',    bg:'#f1f5f9', dot:'#475569' },
    { id:'lavender', label:'Lavender', bg:'#f0edf8', dot:'#7c3aed' },
    { id:'dark',     label:'Dark',     bg:'#0c1018', dot:'#c8983a', light:false },
    { id:'sepia',    label:'Sepia',    bg:'#f2ece0', dot:'#a87c28' },
    { id:'forest',   label:'Forest',   bg:'#eef4ee', dot:'#059669' },
    { id:'ocean',    label:'Ocean',    bg:'#e8f4f8', dot:'#0284c7' },
    { id:'rose',     label:'Rose',     bg:'#fff1f4', dot:'#e11d48' },
  ];
  const accents = [
    { id:'indigo',  color:'#4f46e5', label:'Indigo'  },
    { id:'emerald', color:'#059669', label:'Emerald' },
    { id:'amber',   color:'#d97706', label:'Amber'   },
    { id:'rose',    color:'#e11d48', label:'Rose'    },
    { id:'cyan',    color:'#0891b2', label:'Cyan'    },
    { id:'fuchsia', color:'#c026d3', label:'Fuchsia' },
    { id:'lime',    color:'#65a30d', label:'Lime'    },
    { id:'slate',   color:'#475569', label:'Slate'   },
  ];
  const curTheme  = document.documentElement.getAttribute('data-theme')  || 'zinc';
  const curAccent = document.documentElement.getAttribute('data-accent') || 'indigo';

  /* ── Card ──────────────────────────────────────────────────── */
  const cardContent = E('div', {
    style: {
      background: 'var(--surface)',
      border: '1.5px solid var(--border2)',
      borderRadius: 18,
      boxShadow: 'var(--sh3)',
      overflow: 'hidden',
      opacity: closing ? 0 : 1,
      transition: 'opacity .18s ease',
      animation: 'scaleIn .22s cubic-bezier(.34,1.4,.64,1)',
      ...(isCentered ? { width: '100%', maxWidth: cur.isThemePicker ? 440 : 400 } : {}),
    }
  },
    /* Progress bar */
    E('div', { style: { height: 3, background: 'var(--s3)' } },
      E('div', { style: { height: '100%', width: `${progress}%`, background: 'linear-gradient(90deg,var(--acc),var(--accD))', transition: 'width .35s ease' } })
    ),

    E('div', { style: { padding: '16px 18px 14px' } },

      /* Header row: step counter + close */
      E('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 } },
        E('div', { style: { fontSize: 9, fontWeight: 800, color: 'var(--acc)', textTransform: 'uppercase', letterSpacing: '0.1em', background: 'var(--accL)', borderRadius: 6, padding: '2px 8px' } },
          `${step + 1} \u00B7 ${TOTAL}`
        ),
        E('button', {
          onClick: close,
          style: { background: 'var(--s2)', border: '1px solid var(--border)', borderRadius: 7, width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--t3)', fontSize: 13, fontWeight: 700 }
        }, '\u00D7')
      ),

      /* Title */
      E('div', { style: { fontSize: 14, fontWeight: 800, color: 'var(--text)', letterSpacing: '-.025em', lineHeight: 1.25, marginBottom: 7 } }, cur.title),

      /* Subtitle */
      cur.subtitle && E('div', { style: { fontSize: 12, color: 'var(--t2)', lineHeight: 1.55, marginBottom: (cur.isThemePicker || cur.isFinish) ? 14 : 0 } }, cur.subtitle),

      /* Theme picker */
      cur.isThemePicker && E('div', { style: { marginTop: 12 } },
        E('div', { style: { fontSize: 9, fontWeight: 700, color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 7 } }, 'Theme'),
        E('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 5, marginBottom: 12 } },
          ...themes.map(t =>
            E('div', {
              key: t.id, onClick: () => applyTheme(t.id),
              style: {
                background: t.bg, borderRadius: 8, padding: '6px 4px 5px', textAlign: 'center', cursor: 'pointer',
                border: `2px solid ${curTheme === t.id ? 'var(--acc)' : 'transparent'}`,
                fontSize: 9, fontWeight: 600, color: t.light === false ? '#bbb' : '#444',
                boxShadow: curTheme === t.id ? '0 0 0 2px color-mix(in srgb,var(--acc) 22%,transparent)' : 'none',
                transition: 'all .12s',
              }
            },
              E('div', { style: { width: 10, height: 10, borderRadius: '50%', background: t.dot, margin: '0 auto 4px', boxShadow: '0 1px 3px rgba(0,0,0,.2)' } }),
              t.label
            )
          )
        ),
        E('div', { style: { fontSize: 9, fontWeight: 700, color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 7 } }, 'Accent'),
        E('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 5 } },
          ...accents.slice(0, 4).map(a =>
            E('div', {
              key: a.id, onClick: () => applyAccent(a.id),
              style: {
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, cursor: 'pointer',
                padding: '5px 2px', borderRadius: 8,
                background: curAccent === a.id ? 'var(--s2)' : 'transparent',
                border: `1.5px solid ${curAccent === a.id ? 'var(--acc)' : 'transparent'}`,
                transition: 'all .12s',
              }
            },
              E('div', { style: { width: 18, height: 18, borderRadius: '50%', background: a.color, border: `2px solid ${curAccent === a.id ? 'white' : 'transparent'}`, boxShadow: curAccent === a.id ? `0 0 0 2px ${a.color}` : '0 1px 3px rgba(0,0,0,.15)', transition: 'all .12s' } }),
              E('div', { style: { fontSize: 8, fontWeight: 700, color: curAccent === a.id ? 'var(--accD)' : 'var(--t3)', letterSpacing: '0.03em' } }, a.label)
            )
          )
        )
      ),

      /* Finish shortcuts */
      cur.isFinish && E('div', { style: { display: 'flex', flexDirection: 'column', gap: 6 } },
        [
          { k: 'N', v: 'New trade form from anywhere' },
          { k: '\u2190\u2192', v: 'Navigate this guide (arrow keys)' },
          { k: '\u2699\uFE0F', v: 'Settings \u2192 Guide to replay tour' },
        ].map((s, i) =>
          E('div', { key: i, style: { display: 'flex', alignItems: 'center', gap: 8, background: 'var(--s2)', borderRadius: 8, padding: '7px 10px' } },
            E('div', { style: { minWidth: 28, height: 22, background: 'var(--surface)', border: '1px solid var(--border2)', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800, color: 'var(--acc)', fontFamily: 'monospace' } }, s.k),
            E('div', { style: { fontSize: 11, color: 'var(--t2)' } }, s.v)
          )
        )
      ),
    ),

    /* Footer: dots + Back/Next */
    E('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 18px 14px' } },
      /* Dots */
      E('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(6, auto)', gap: 4, alignItems: 'center' } },
        Array.from({ length: TOTAL }, (_, i) =>
          E('div', {
            key: i, onClick: () => goTo(i),
            style: { width: i === step ? 16 : 6, height: 6, borderRadius: 3, cursor: 'pointer', transition: 'all .2s', background: i === step ? 'var(--acc)' : 'var(--border2)' }
          })
        )
      ),
      /* Buttons */
      E('div', { style: { display: 'flex', flexDirection: 'column', gap: 8 } },
        /* Main nav row */
        E('div', { style: { display: 'flex', gap: 8, alignItems: 'center' } },
          /* Left: back / explore-on-own */
          step === 0
            ? E('button', {
                onClick: close,
                style: { padding: '6px 13px', background: 'var(--s2)', border: '1.5px solid var(--border2)', borderRadius: 9, color: 'var(--t2)', fontSize: 12, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }
              }, 'Skip')
            : E('button', { onClick: () => goTo(step - 1), style: { padding: '7px 18px', borderRadius: 9, border: '1.5px solid var(--border2)', background: 'var(--s2)', color: 'var(--t2)', fontSize: 12, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' } }, '\u2190 Back'),
          /* Right: next / start / finish */
          step < TOTAL - 1
            ? E('button', { onClick: () => goTo(step + 1), style: { padding: '7px 18px', borderRadius: 9, border: 'none', background: 'linear-gradient(135deg,var(--acc),var(--accD))', color: '#fff', fontSize: 12, fontWeight: 700, cursor: 'pointer', boxShadow: '0 2px 8px color-mix(in srgb,var(--acc) 35%,transparent)', whiteSpace: 'nowrap' } }, step === 0 ? 'Take the tour \u2192' : 'Next \u2192')
            : E('button', { onClick: finish, style: { padding: '7px 18px', borderRadius: 9, border: 'none', background: 'linear-gradient(135deg,var(--acc),var(--accD))', color: '#fff', fontSize: 12, fontWeight: 700, cursor: 'pointer', boxShadow: '0 2px 8px color-mix(in srgb,var(--acc) 35%,transparent)' } }, '\uD83D\uDE80 Start!')
        ),
        /* Skip tour — shown on mid-steps only */
        (step > 0 && step < TOTAL - 1) && E('div', { style: { textAlign: 'center' } },
          E('button', {
            onClick: close,
            style: { padding: 0, background: 'none', border: 'none', color: 'var(--t3)', fontSize: 10.5, cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 2, letterSpacing: '-0.01em', opacity: 0.7 }
          }, 'Skip tour')
        )
      )
    )
  );

  /* ── Centered (welcome / theme / finish) ───────────────────── */
  if (isCentered) {
    return E('div', {
      onClick: (e) => { if (e.target === e.currentTarget) close(); },
      style: {
        position: 'fixed', inset: 0, zIndex: 2147483647,
        background: 'rgba(0,0,0,.55)',
        backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
        opacity: closing ? 0 : 1, transition: 'opacity .18s ease',
      }
    }, cardContent);
  }

  /* ── Spotlight mode ───────────────────────────────────────── */
  return E('div', {
    style: {
      position: 'fixed', inset: 0, zIndex: 2147483646,
      pointerEvents: 'none',
      opacity: closing ? 0 : 1, transition: 'opacity .18s ease',
    }
  },
    /* Four shadow rects around the highlighted element */
    spotRect && E(React.Fragment, null,
      E('div', { style: { position: 'fixed', top: 0, left: 0, right: 0, height: spotRect.top, background: 'rgba(0,0,0,.52)', transition: 'height .25s ease, top .25s ease' } }),
      E('div', { style: { position: 'fixed', top: spotRect.top + spotRect.height, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,.52)', transition: 'top .25s ease' } }),
      E('div', { style: { position: 'fixed', top: spotRect.top, left: 0, width: spotRect.left, height: spotRect.height, background: 'rgba(0,0,0,.52)', transition: 'all .25s ease' } }),
      E('div', { style: { position: 'fixed', top: spotRect.top, left: spotRect.left + spotRect.width, right: 0, height: spotRect.height, background: 'rgba(0,0,0,.52)', transition: 'all .25s ease' } }),
      /* Glowing highlight ring */
      E('div', { style: {
        position: 'fixed',
        top: spotRect.top, left: spotRect.left,
        width: spotRect.width, height: spotRect.height,
        border: '2px solid var(--acc)',
        borderRadius: 10,
        boxShadow: '0 0 0 3px color-mix(in srgb,var(--acc) 30%,transparent), 0 0 24px color-mix(in srgb,var(--acc) 20%,transparent)',
        pointerEvents: 'none',
        transition: 'all .25s ease',
      } })
    ),
    /* Floating card — pointer-events enabled */
    E('div', {
      style: { ...cardStyle, pointerEvents: 'all' },
      onClick: e => e.stopPropagation()
    }, cardContent)
  );
} // end OnboardingModal

/* ============================================================
   WALLET DROPDOWN COMPONENT — topbar right-corner balance widget
   Shows CURRENT account balance with dropdown for all accounts
   ============================================================ */
function WalletDropdown({ accounts, activeAccId, setActiveAccId, accountCapital, trueBalanceInfo, allTrades, isMobile }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    if (open) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  // Use pre-computed trueBalanceInfo from App (already calls calcTrueBalance with adjustments)
  const tb = trueBalanceInfo || { balance: accountCapital, adjustedCapital: accountCapital, netProfit: 0 };
  const netProfit = tb.netProfit;
  const capital = tb.adjustedCapital > 0 ? tb.adjustedCapital : accountCapital;
  const currentBalance = tb.balance;
  const netPct = capital > 0 ? (netProfit / capital * 100) : 0;
  const isPos = netProfit >= 0;

  // Current account label
  const activeAcc = activeAccId === 'all' ? null : accounts.find(a => a.id === activeAccId);
  const acctLabel = activeAcc ? activeAcc.label : (accounts.length > 1 ? 'All Accounts' : accounts.length === 1 ? accounts[0].label : 'No Account');

  const fmt = (n) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n);
  const fmtFull = (n) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(n);

  return React.createElement('div', { ref, style: { position: 'relative' } },
    // ── Trigger button ──
    React.createElement('button', {
      onClick: () => setOpen(o => !o),
      title: 'Account Balance',
      style: {
        display: 'flex', alignItems: 'center', gap: 7,
        background: open ? 'var(--accF)' : 'var(--s2)',
        border: `1.5px solid ${open ? 'var(--acc)' : 'var(--border)'}`,
        borderRadius: 10, padding: '5px 10px 5px 9px',
        cursor: 'pointer', transition: 'all .15s',
        boxShadow: open ? '0 0 0 3px color-mix(in srgb, var(--acc) 15%, transparent)' : 'none'
      },
      onMouseEnter: (e) => { if (!open) { e.currentTarget.style.borderColor = 'var(--acc)'; e.currentTarget.style.background = 'var(--accF)'; } },
      onMouseLeave: (e) => { if (!open) { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--s2)'; } }
    },
      // Wallet SVG icon
      React.createElement('svg', { width: 15, height: 15, viewBox: '0 0 24 24', fill: 'none', stroke: 'var(--acc)', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', style: { flexShrink: 0 } },
        React.createElement('rect', { x: 1, y: 6, width: 22, height: 15, rx: 2 }),
        React.createElement('path', { d: 'M1 10h22' }),
        React.createElement('circle', { cx: 17, cy: 15, r: 1.5, fill: 'var(--acc)', stroke: 'none' })
      ),
      // Balance text — hidden on mobile
      !isMobile && React.createElement('div', { style: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.15 } },
        React.createElement('div', { style: { fontSize: 9.5, fontWeight: 700, color: 'var(--t3)', letterSpacing: '0.04em', textTransform: 'uppercase' } },
          'Balance'
        ),
        React.createElement('div', { style: { fontSize: 12.5, fontWeight: 800, color: 'var(--text)', fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.03em' } },
          fmt(currentBalance)
        )
      ),
      // Chevron
      React.createElement('svg', { width: 10, height: 10, viewBox: '0 0 24 24', fill: 'none', stroke: 'var(--t3)', strokeWidth: 3,
        style: { transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform .2s', flexShrink: 0 }
      },
        React.createElement('polyline', { points: '6 9 12 15 18 9' })
      )
    ),

    // ── Dropdown panel — anchored to RIGHT corner ──
    open && React.createElement('div', {
      style: {
        position: 'absolute', top: 'calc(100% + 6px)', right: 0,
        background: 'var(--surface)', border: '1.5px solid var(--border2)',
        borderRadius: 16,
        boxShadow: '0 16px 48px rgba(0,0,0,.2), 0 4px 14px rgba(0,0,0,.12)',
        minWidth: 260, zIndex: 9001, padding: '14px',
        animation: 'dtPickerIn .18s cubic-bezier(.22,1,.36,1)'
      }
    },
      // Header label
      React.createElement('div', { style: { fontSize: 10, fontWeight: 700, color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 10, paddingLeft: 2 } },
        '💼 Current Account'
      ),

      // ── Current account summary card ──
      React.createElement('div', { style: {
        background: 'linear-gradient(135deg, var(--accF), var(--s2))',
        border: '1.5px solid color-mix(in srgb, var(--acc) 28%, transparent)',
        borderRadius: 12, padding: '13px 14px', marginBottom: 10
      } },
        React.createElement('div', { style: { fontSize: 10, fontWeight: 700, color: 'var(--t3)', marginBottom: 2, textTransform: 'uppercase', letterSpacing: '0.04em' } },
          acctLabel
        ),
        // Starting capital
        React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 } },
          React.createElement('div', { style: { fontSize: 9.5, color: 'var(--t3)', fontWeight: 600 } }, 'Starting Capital'),
          React.createElement('div', { style: { fontSize: 12, fontWeight: 700, color: 'var(--t2)', fontVariantNumeric: 'tabular-nums' } }, fmtFull(capital))
        ),
        // Current balance big number
        React.createElement('div', { style: { fontSize: 24, fontWeight: 800, color: 'var(--text)', fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.04em', marginBottom: 8, lineHeight: 1 } },
          fmtFull(currentBalance)
        ),
        // P&L row
        React.createElement('div', { style: { display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' } },
          React.createElement('div', { style: {
            fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 8,
            color: isPos ? 'var(--accD)' : 'var(--red)',
            background: isPos ? 'color-mix(in srgb, var(--acc) 15%, transparent)' : 'var(--rBg)',
            border: `1px solid ${isPos ? 'color-mix(in srgb, var(--acc) 30%, transparent)' : 'var(--rBdr)'}`,
            fontVariantNumeric: 'tabular-nums'
          } }, (isPos ? '▲ +' : '▼ ') + netPct.toFixed(2) + '%'),
          React.createElement('div', { style: { fontSize: 11, color: isPos ? 'var(--accD)' : 'var(--red)', fontVariantNumeric: 'tabular-nums', fontWeight: 600 } },
            (isPos ? '+' : '') + fmtFull(netProfit)
          )
        )
      ),

      // ── Switch account list ──
      accounts.length > 1 && React.createElement('div', null,
        React.createElement('div', { style: { fontSize: 9.5, fontWeight: 700, color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6, paddingLeft: 2 } }, 'Switch Account'),
        React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 3 } },
          [{ id: 'all', label: '🌐 All Accounts', capital: accounts.reduce((s, a) => s + (a.capital || 0), 0), trades: accounts.flatMap(a => a.trades), color: null }]
            .concat(accounts.map((a, i) => ({ id: a.id, label: a.label, capital: a.capital, trades: a.trades, color: ACC_COLS[i % ACC_COLS.length], isDemo: a.isDemo })))
            .map(item => {
              const iActive = activeAccId === item.id;
              const tb = calcTrueBalance(item);
              const accProfit = tb.netProfit;
              const accCap = tb.adjustedCapital || 5000;
              const accPct = accCap > 0 ? (accProfit / accCap * 100) : 0;
              const accPos = accProfit >= 0;
              return React.createElement('div', {
                key: item.id,
                onClick: () => { setActiveAccId(item.id); setOpen(false); },
                style: {
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '7px 10px', borderRadius: 9, cursor: 'pointer',
                  background: iActive ? 'var(--accF)' : 'transparent',
                  border: `1.5px solid ${iActive ? 'var(--acc)' : 'transparent'}`,
                  transition: 'all .1s'
                },
                onMouseEnter: (e) => { if (!iActive) e.currentTarget.style.background = 'var(--s2)'; },
                onMouseLeave: (e) => { if (!iActive) e.currentTarget.style.background = 'transparent'; }
              },
                React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 7, minWidth: 0 } },
                  item.color
                    ? React.createElement('div', { style: { width: 7, height: 7, borderRadius: '50%', background: item.color, flexShrink: 0 } })
                    : React.createElement('div', { style: { width: 7, height: 7, borderRadius: '50%', background: 'var(--acc)', flexShrink: 0 } }),
                  React.createElement('div', { style: { fontSize: 11.5, fontWeight: iActive ? 700 : 500, color: iActive ? 'var(--accD)' : 'var(--text)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 130 } },
                    item.label
                  )
                ),
                React.createElement('div', { style: { fontSize: 10.5, fontWeight: 700, flexShrink: 0, color: accPos ? 'var(--accD)' : 'var(--red)', fontVariantNumeric: 'tabular-nums' } },
                  (accPos ? '+' : '') + accPct.toFixed(2) + '%'
                )
              );
            })
        )
      ),

      // Empty state
      accounts.length === 0 && React.createElement('div', { style: { padding: '8px 4px', fontSize: 11.5, color: 'var(--t3)', textAlign: 'center' } },
        'Add an account to track your balance'
      )
    )
  );
}


function App() {
  var _a;
  const [tab, setTab] = useState("overview");
  const [toast, setToast] = useState(null);
  const [showGuide, setShowGuide] = useState(() => { try { return !localStorage.getItem("tj_onboarding_done"); } catch(e) { return true; } });
  const [syncingId, setSyncingId] = useState(null);
  const [activeAccId, setActiveAccId] = useState("all");
  const [accounts, setAccounts] = useState(() => loadAccounts());
  const [tradeMeta, setTradeMeta] = useState(() => loadTradeMeta());
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarHover, setSidebarHover] = useState(false);
  const [uiBlocks, setUiBlocks] = useState(() => {
    try {
      const r = localStorage.getItem("tj5_uiblocks");
      return r ? __spreadValues(__spreadValues({}, DEFAULT_UI_BLOCKS), JSON.parse(r)) : DEFAULT_UI_BLOCKS;
    } catch (e) {
      return DEFAULT_UI_BLOCKS;
    }
  });
  const [editingUi, setEditingUi] = useState(false);
  const [userName, setUserName] = useState(() => {
    try {
      return localStorage.getItem("tj5_username") || "Trader";
    } catch (e) {
      return "Trader";
    }
  });
  const [dayPopup, setDayPopup] = useState(null);
  const [editingDayTrade, setEditingDayTrade] = useState(null);
  const [dateRange, setDateRange] = useState({ from: null, to: null });
  const [theme, setTheme] = useState(() => loadTheme());
  const [accent, setAccent] = useState(() => loadAccent());
  const [showSettings, setShowSettings] = useState(false);
  const [showCalc, setShowCalc] = useState(false);
  const [dailyLimit, setDailyLimit] = useState(() => loadDailyLimit());
  const [customLists, setCustomLists] = useState(() => loadCustomLists());
  const usedConfluences = customLists.confluences || CONFLUENCES;
  const usedSessions = customLists.sessions || SESSIONS;
  const usedMistakes = customLists.mistakes || MISTAKES;
  const usedModels = customLists.strategies || MODELS;
  const saveCustomList = (key, val) => { const next = { ...customLists, [key]: val }; setCustomLists(next); saveCustomLists(next); };
  const [openTradeForm, setOpenTradeForm] = useState(false);
  const [demoBannerDismissed, setDemoBannerDismissed] = useState(function(){ try{return !!localStorage.getItem("tj5_demo_dismissed");}catch(e){return false;} });
  const [settingsModal, setSettingsModal] = useState(null); // {title,subtitle,placeholder,defaultVal,onConfirm}
  const [demoDeleted, setDemoDeleted] = useState(function(){ try{return !!localStorage.getItem("tj5_demo_deleted");}catch(e){return false;} });
  const isMobile = useMediaQuery("(max-width:768px)");
  const sidebarEffectiveOpen = sidebarOpen || sidebarHover;
  useEffect(() => {
    const h = (e) => {
      if (["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName)) return;
      if (e.key === "n" || e.key === "N") {
        e.preventDefault();
        setTab("tradelog");
        setOpenTradeForm(true);
      }
      if (e.key === "t" || e.key === "T") {
        e.preventDefault();
        setTab("tradelog");
      }
      if (e.key === "Escape") setOpenTradeForm(false);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-accent", accent);
    try {
      localStorage.setItem("tj5_theme", theme);
      localStorage.setItem("tj5_accent", accent);
    } catch (e) {
    }
  }, [theme, accent]);
  useEffect(() => {
    if (!isMobile) setSidebarOpen(true);
  }, [isMobile]);
  useEffect(() => {
    try {
      localStorage.setItem("tj5_uiblocks", JSON.stringify(uiBlocks));
    } catch (e) {
    }
  }, [uiBlocks]);
  const toggleBlock = useCallback((k) => setUiBlocks((b) => __spreadProps(__spreadValues({}, b), { [k]: !b[k] })), []);
  const resetUi = useCallback(() => setUiBlocks(DEFAULT_UI_BLOCKS), []);
  useEffect(() => {
    saveAccounts(accounts);
  }, [accounts]);
  useEffect(function(){
    try{
      if(!localStorage.getItem("tj5_visited")){
        localStorage.setItem("tj5_visited","1");
        var ts=Date.now();
        function _mk(o,sym,d,ti,si,en,ex,pnl,pr,se,mo,eb,ea,mi,gr,er,ar,no,co,kl){return{id:ts+o,symbol:sym,entryDate:d,entryTime:ti,side:si,entryPrice:en,exitPrice:ex,pnl:pnl,profit:pr,status:"Closed",confluences:co,keyLevels:kl,session:se,model:mo,emotionBefore:eb,emotionAfter:ea,mistakes:mi,grade:gr,expectedRR:er,actualRR:ar,notes:no,riskAmount:50,stopLoss:0,takeProfit:0,accountId:"demo-first",tags:["Sample Data"],createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};}
        setAccounts([{id:"demo-first",label:"Demo Account",capital:10000,isDemo:true,login:"",password:"",server:"",type:"demo",connected:false,lastSync:null,info:null,trades:[
          _mk(1,"XAUUSD","2026-03-03","09:15:00","Long",2915.5,2928.3,1.25,125,"London Open","SMC (Smart Money)","Calm & Focused","Satisfied","None","A","1:3","1:2.8","Sample",["Break of Structure","Fair Value Gap"],["Daily Open"]),
          _mk(2,"XAUUSD","2026-03-04","14:30:00","Short",2942,2935.1,0.72,72,"New York","ICT Concepts","Confident","Satisfied","None","A","1:2","1:2.1","Sample",["Order Block","Liquidity Sweep"],["Resistance Zone"]),
          _mk(3,"EURUSD","2026-03-05","08:00:00","Long",1.082,1.0785,-0.62,-62,"London Open","Price Action","FOMO","Frustrated","FOMO Entry","D","1:2","","Sample",["Trendline Bounce"],["Support Zone"]),
          _mk(4,"XAUUSD","2026-03-10","03:20:00","Long",2888,2901.5,1.05,105,"Asia","SMC (Smart Money)","Calm & Focused","Satisfied","None","A+","1:3","1:3.1","Sample",["Fair Value Gap","Change of Character"],["Demand Zone"]),
          _mk(5,"GBPUSD","2026-03-11","10:45:00","Short",1.294,1.296,-0.38,-38,"London Mid","Price Action","Neutral","Neutral","Wrong Timeframe","C","1:2","","Sample",["Supply/Demand Zone"],["Weekly High"]),
          _mk(6,"XAUUSD","2026-03-14","07:00:00","Long",2920,2938,1.55,155,"London Open","SMC (Smart Money)","Sharp & Alert","Proud","None","A","1:3","1:3.2","Sample",["Order Block","Market Structure Shift","VWAP"],["OB Level","Previous High"]),
          _mk(7,"XAUUSD","2026-03-17","15:00:00","Short",2955,2945,0.85,85,"New York","ICT Concepts","Confident","Satisfied","None","B","1:2","1:1.9","Sample",["Inducement","Premium/Discount"],["Premium Zone"]),
          _mk(8,"EURUSD","2026-03-18","09:30:00","Long",1.085,1.083,-0.44,-44,"London Open","Price Action","Overconfident","Disappointed","Position Too Large","D","1:2","","Sample",["Trendline Bounce"],["Daily Level"]),
          _mk(9,"XAUUSD","2026-03-20","07:45:00","Long",2968,2984,1.35,135,"London Open","SMC (Smart Money)","Calm & Focused","Satisfied","None","A","1:3","1:3.0","Sample",["Break of Structure","Order Block"],["Demand Zone","Daily Open"]),
          _mk(10,"GBPUSD","2026-03-21","14:15:00","Short",1.2985,1.2940,0.68,68,"New York","ICT Concepts","Patient","Calm","None","B","1:2","1:2.2","Sample",["Liquidity Sweep","Fair Value Gap"],["Weekly Level"]),
          _mk(11,"XAUUSD","2026-03-24","09:00:00","Short",3010,3024,-0.92,-92,"London Open","Price Action","Stressed","Burned Out","Moved Stop Loss","D","1:2","","Sample",["Supply/Demand Zone"],["Resistance Zone"]),
          _mk(12,"EURUSD","2026-03-25","03:30:00","Long",1.0795,1.0840,0.75,75,"Asia","SMC (Smart Money)","Motivated","Energized","None","B","1:2","1:2.4","Sample",["Change of Character","Fair Value Gap"],["Demand Zone"]),
          _mk(13,"XAUUSD","2026-03-26","15:30:00","Long",3025,3045,1.65,165,"New York","ICT Concepts","Sharp & Alert","Proud","None","A+","1:4","1:3.8","Sample",["Order Block","Liquidity Sweep","Premium/Discount"],["OB Level","Daily Open"]),
          _mk(14,"XAUUSD","2026-03-27","07:10:00","Short",3048,3039,0.62,62,"London Open","SMC (Smart Money)","Calm & Focused","Satisfied","None","B","1:2","1:1.8","Sample",["Market Structure Shift","VWAP"],["Premium Zone"]),
          _mk(15,"GBPUSD","2026-03-31","09:45:00","Long",1.2910,1.2885,-0.45,-45,"London Open","Price Action","Hesitant","Confused","Late Entry","C","1:2","","Sample",["Trendline Bounce"],["Support Zone"]),
          _mk(16,"XAUUSD","2026-04-01","03:15:00","Long",3060,3078,1.42,142,"Asia","SMC (Smart Money)","Calm & Focused","Satisfied","None","A","1:3","1:2.9","Sample",["Fair Value Gap","Break of Structure"],["Demand Zone","Weekly Level"])
        ]}]);
      }
    }catch(e){}
  },[]);
  useEffect(() => {
    saveTradeMeta(tradeMeta);
  }, [tradeMeta]);
  useEffect(() => {
    saveDailyLimit(dailyLimit);
  }, [dailyLimit]);
  const showToast = useCallback((msg, type = "info") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4500);
  }, []);
  const handleSync = useCallback(async (acc) => {
    if (acc.isDemo) {
      showToast(`${acc.label} is a demo account \u2014 no sync needed`, "info");
      return;
    }
    setSyncingId(acc.id);
    try {
      const res = await fetch(`${API_URL}/sync-account`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ login: acc.login, password: acc.password, server: acc.server }) });
      if (!res.ok) {
        let m = `Server error ${res.status}`;
        try {
          const j = await res.json();
          m = j.error || m;
        } catch (e) {
        }
        throw new Error(m);
      }
      const data = await res.json();
      const incoming = (data.trades || []).map((t) => __spreadProps(__spreadValues({}, t), { accountId: acc.id }));
      setAccounts((prev) => prev.map((a) => {
        if (a.id !== acc.id) return a;
        const existingMap = {};
        (a.trades || []).forEach((et) => {
          if (et.id) existingMap[String(et.id)] = et;
        });
        const MANUAL_FIELDS = ["confluences", "notes", "grade", "emotionBefore", "emotionAfter", "mistakes", "tags", "session", "model", "expectedRR", "actualRR", "riskAmount", "stopLoss", "takeProfit"];
        const merged = incoming.map((it) => {
          const key = String(it.id);
          const existing = existingMap[key];
          if (!existing) return sanitizeTrade(it);
          const manualOverrides = {};
          MANUAL_FIELDS.forEach((f) => {
            if (existing[f] !== void 0 && existing[f] !== null && existing[f] !== "") {
              if (f === "confluences") {
                manualOverrides[f] = Array.isArray(existing[f]) && existing[f].length > 0 ? existing[f] : it[f] || [];
              } else {
                manualOverrides[f] = existing[f];
              }
            }
          });
          return sanitizeTrade(__spreadProps(__spreadValues(__spreadValues({}, it), manualOverrides), { accountId: acc.id }));
        });
        return __spreadProps(__spreadValues({}, a), { trades: merged, info: data.account || null, connected: true, lastSync: (/* @__PURE__ */ new Date()).toLocaleTimeString() });
      }));
      showToast(`\u2713 ${acc.label} \u2014 ${incoming.length} trades synced (manual data preserved)`, "success");
    } catch (err) {
      showToast(err.message.includes("fetch") || err.message.includes("Failed") ? "Cannot reach MT5 backend" : err.message, "error");
      setAccounts((prev) => prev.map((a) => a.id !== acc.id ? a : __spreadProps(__spreadValues({}, a), { connected: false })));
    } finally {
      setSyncingId(null);
    }
  }, [showToast]);
  const handleAddAdjustment = useCallback((accId, adj) => {
    setAccounts(prev => prev.map(a => a.id !== accId ? a : {
      ...a,
      balanceAdjustments: [...(a.balanceAdjustments || []), adj].sort((x, y) => x.date.localeCompare(y.date))
    }));
  }, []);
  const handleRemoveAdjustment = useCallback((accId, idx) => {
    setAccounts(prev => prev.map(a => a.id !== accId ? a : {
      ...a,
      balanceAdjustments: (a.balanceAdjustments || []).filter((_, i) => i !== idx)
    }));
  }, []);
  const handleAddAcc = useCallback((c) => {
    const id = Date.now().toString();
    const na = __spreadProps(__spreadValues({}, c), { id, trades: [], info: null, connected: false, lastSync: null });
    setAccounts((p) => [...p, na]);
    // Adding a real account clears the "demo deleted" gate
    setDemoDeleted(false);
    try { localStorage.removeItem("tj5_demo_deleted"); } catch(e) {}
    if (!c.isDemo) setTimeout(() => handleSync(na), 60);
    else showToast(`\u2713 ${c.label} demo account created`, "success");
  }, [handleSync, showToast]);
  const handleRemoveAcc = useCallback((id) => {
    setAccounts((p) => {
      const next = p.filter((a) => a.id !== id);
      // If removing results in no accounts left, mark demo as deleted to prevent ghost SEED data
      if (next.length === 0) {
        setDemoDeleted(true);
        try { localStorage.setItem("tj5_demo_deleted", "1"); } catch(e) {}
      }
      return next;
    });
    if (activeAccId === id) setActiveAccId("all");
  }, [activeAccId]);
  const selectedAccount = useMemo(() => {
    if (activeAccId === "all") return null;
    return accounts.find((a) => a.id === activeAccId) || null;
  }, [accounts, activeAccId]);

  // trueBalanceInfo: uses calcTrueBalance so Cash Adjustments are reflected everywhere
  const trueBalanceInfo = useMemo(() => {
    if (selectedAccount) return calcTrueBalance(selectedAccount);
    if (accounts.length > 0) {
      // "All" mode: sum balances across accounts
      const totalBalance = accounts.reduce((s, a) => s + calcTrueBalance(a).balance, 0);
      const totalCapital = accounts.reduce((s, a) => s + (a.capital || 0), 0);
      return { balance: totalBalance, capital: totalCapital, adjustedCapital: totalCapital, netProfit: totalBalance - totalCapital };
    }
    return { balance: 5000, capital: 5000, adjustedCapital: 5000, netProfit: 0 };
  }, [selectedAccount, accounts]);

  // accountCapital = the effective capital base AFTER adjustments (used for P&L% denominator)
  const accountCapital = useMemo(() => {
    return trueBalanceInfo.adjustedCapital > 0 ? trueBalanceInfo.adjustedCapital : 5000;
  }, [trueBalanceInfo]);
  const allTrades = useMemo(() => {
    var _a2;
    // Only show SEED demo data on genuine first visit (no accounts AND demo was never deleted)
    if (accounts.length === 0) return demoDeleted ? [] : SEED;
    if (activeAccId === "all") return accounts.flatMap((a) => a.trades);
    return ((_a2 = accounts.find((a) => a.id === activeAccId)) == null ? void 0 : _a2.trades) || [];
  }, [accounts, activeAccId, demoDeleted]);
  const displayTrades = useMemo(() => {
    if (!dateRange.from && !dateRange.to) return allTrades;
    return allTrades.filter((t) => (!dateRange.from || t.entryDate >= dateRange.from) && (!dateRange.to || t.entryDate <= dateRange.to));
  }, [allTrades, dateRange]);
  const handleDeleteTrade = useCallback((id, skipConfirm = false) => {
    setAccounts((p) => p.map((a) => __spreadProps(__spreadValues({}, a), { trades: a.trades.filter((t) => t.id !== id) })));
  }, []);
  const handleEditTrade = useCallback((id, patch) => setAccounts((p) => p.map((a) => __spreadProps(__spreadValues({}, a), { trades: a.trades.map((t) => t.id !== id ? t : sanitizeTrade(__spreadProps(__spreadValues(__spreadValues({}, t), patch), { id, updatedAt: (/* @__PURE__ */ new Date()).toISOString() })) || t) }))), []);
  const handleDuplicateTrade = useCallback((t) => {
    const dup = sanitizeTrade(__spreadProps(__spreadValues({}, t), { id: Date.now(), notes: `[Duplicate] ${t.notes || ""}`.trim(), createdAt: (/* @__PURE__ */ new Date()).toISOString(), updatedAt: (/* @__PURE__ */ new Date()).toISOString() }));
    if (!dup) return;
    setAccounts((p) => p.map((a, i) => i === 0 ? __spreadProps(__spreadValues({}, a), { trades: [dup, ...a.trades] }) : a));
  }, []);
  const handleAddTrade = useCallback((t) => {
    const targetAccId = t.accountId || "manual";
    const nt = sanitizeTrade(__spreadProps(__spreadValues({}, t), { id: Date.now(), accountId: targetAccId, createdAt: (/* @__PURE__ */ new Date()).toISOString(), updatedAt: (/* @__PURE__ */ new Date()).toISOString() }));
    if (!nt) return;
    setAccounts((p) => {
      if (p.length === 0) {
        const demo = { id: "manual-default", label: "My Journal", isDemo: true, connected: false, capital: 1e4, login: "", password: "", server: "", type: "demo", info: null, lastSync: null, trades: [nt] };
        return [demo];
      }
      // Add to the matching account, or first account if not found
      const targetIdx = p.findIndex((a) => a.id === targetAccId);
      const idx = targetIdx >= 0 ? targetIdx : 0;
      return p.map((a, i) => i === idx ? __spreadProps(__spreadValues({}, a), { trades: [nt, ...a.trades] }) : a);
    });
    // If user is adding a trade after clearing demo, un-block the empty state
    setDemoDeleted(false);
    try { localStorage.removeItem("tj5_demo_deleted"); } catch(e) {}
  }, []);
  const handleImportTrades = useCallback((importedTrades) => {
    // Preserve fingerprint IDs from parsers so re-importing deduplicates correctly
    const sanitized = importedTrades.map((t) => sanitizeTrade(__spreadProps(__spreadValues({}, t), { accountId: "manual", createdAt: t.createdAt || (/* @__PURE__ */ new Date()).toISOString(), updatedAt: (/* @__PURE__ */ new Date()).toISOString() }))).filter(Boolean);
    if (!sanitized.length) return;
    setAccounts((p) => {
      if (p.length === 0) {
        const demo = { id: "manual-default", label: "My Journal", isDemo: true, connected: false, capital: 1e4, login: "", password: "", server: "", type: "demo", info: null, lastSync: null, trades: sanitized };
        return [demo];
      }
      return p.map((a, i) => {
        if (i !== 0) return a;
        const existingIds = new Set((a.trades || []).map(t => String(t.id)));
        const newOnly = sanitized.filter(t => !existingIds.has(String(t.id)));
        return __spreadProps(__spreadValues({}, a), { trades: [...newOnly, ...a.trades] });
      });
    });
    showToast(`\u2713 Imported ${sanitized.length} trades successfully`, "success");
  }, [showToast]);
  const handleImportToAccount = useCallback((importedTrades, targetAccId) => {
    // Full-fidelity imports (JSON/Tradexy CSV) keep zero-PnL; broker imports skip them
    const isFullFidelity = importedTrades.length > 0 && (importedTrades[0]._importType === "full");
    const valid = isFullFidelity
      ? importedTrades.filter(t => t && t.symbol && t.entryDate)
      : importedTrades.filter(t => typeof t.profit === "number" && t.profit !== 0 && !isNaN(t.profit));
    if (!valid.length) { showToast("No valid trades to import", "error"); return; }

    // MANUAL fields that should NEVER be overwritten by re-import
    const PRESERVE = ["confluences","notes","grade","emotionBefore","emotionAfter","mistakes","tags","session","model","expectedRR","actualRR","riskAmount","stopLoss","takeProfit","keyLevels"];

    setAccounts((p) => {
      if (p.length === 0) {
        const demoId = "demo-imported-" + Date.now();
        const newTrades = valid.map(t => sanitizeTrade({ ...t, id: t.id || (Date.now() + Math.random()), accountId: demoId, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() })).filter(Boolean);
        const demo = { id: demoId, label: "Imported Trades", isDemo: true, connected: false, capital: 1e4, login: "", password: "", server: "", type: "demo", info: null, lastSync: null, trades: newTrades };
        return [demo];
      }

      const mergeIntoAccount = (a) => {
        if (!a.isDemo) return a; // guard: never touch live
        const existing = a.trades || [];

        // Build lookup by original broker/trade ID (as string)
        const existingById = {};
        existing.forEach(et => { if (et.id != null) existingById[String(et.id)] = et; });

        let addedCount = 0, updatedCount = 0;
        const updatedExisting = existing.map(et => {
          const incoming = valid.find(it => String(it.id) === String(et.id));
          if (!incoming) return et; // not in import — keep as-is
          // Merge: broker fields updated, manual fields preserved
          const preserved = {};
          PRESERVE.forEach(f => {
            const ev = et[f];
            const hasVal = ev !== undefined && ev !== null && ev !== "" && !(Array.isArray(ev) && ev.length === 0);
            if (hasVal) preserved[f] = ev;
          });
          updatedCount++;
          return sanitizeTrade({ ...et, ...incoming, ...preserved, id: et.id, accountId: a.id, updatedAt: new Date().toISOString() }) || et;
        });

        // New trades — those whose ID doesn't exist yet
        const newTrades = valid
          .filter(it => !existingById[String(it.id)])
          .map(it => { addedCount++; return sanitizeTrade({ ...it, id: it.id || (Date.now() + Math.random()), accountId: a.id, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }); })
          .filter(Boolean);

        return { ...a, trades: [...newTrades, ...updatedExisting] };
      };

      if (targetAccId) {
        return p.map(a => a.id !== targetAccId ? a : mergeIntoAccount(a));
      }
      const firstDemoIdx = p.findIndex(a => a.isDemo);
      if (firstDemoIdx >= 0) {
        return p.map((a, i) => i !== firstDemoIdx ? a : mergeIntoAccount(a));
      }
      return p.map((a, i) => i === 0 ? mergeIntoAccount(a) : a);
    });

    // Count new vs updated for toast
    const existingIds = new Set();
    setAccounts(p => {
      const acc = p.find(a => a.id === targetAccId) || p.find(a => a.isDemo) || p[0];
      if (acc) (acc.trades || []).forEach(t => existingIds.add(String(t.id)));
      return p;
    });
    const newCount = valid.filter(t => !existingIds.has(String(t.id))).length;
    const updCount = valid.length - newCount;
    showToast(`\u2713 Import done: ${newCount} new trade${newCount!==1?'s':''} added${updCount>0?`, ${updCount} updated (manual data preserved)`:''}`, "success");
  }, [showToast]);
  const handleUpdateMeta = useCallback((id, patch) => {
    setTradeMeta((m) => {
      const next = __spreadProps(__spreadValues({}, m), { [id]: __spreadValues(__spreadValues({}, m[id] || {}), patch) });
      saveTradeMeta(next);
      return next;
    });
  }, []);
  const saveUserName = (n) => {
    setUserName(n);
    try {
      localStorage.setItem("tj5_username", n);
    } catch (e) {
    }
  };
  const TABS_INFO = [{ id: "overview", label: "Overview" }, { id: "analytics", label: "Analytics" }, { id: "psychology", label: "Psychology" }, { id: "tradelog", label: "Full Trades" }, { id: "calendar", label: "Calendar" }];
  const live = accounts.filter((a) => a.connected).length;
  const showDateBar = ["overview", "analytics", "tradelog"].includes(tab);
  const sideW = isMobile ? 0 : sidebarEffectiveOpen ? 228 : 56;
  const ic = accountCapital;
  const [settingsTab, setSettingsTab] = useState("appearance");
  const THEMES = [
    { id: "zinc",     label: "Zinc",     icon: "\u{1FA76}" },
    { id: "light",    label: "Light",    icon: "\u2600\uFE0F" },
    { id: "slate",    label: "Slate",    icon: "\u{1F5F3}\uFE0F" },
    { id: "lavender", label: "Lavender", icon: "\u{1F338}" },
    { id: "dark",     label: "Dark",     icon: "\u{1F319}" },
    { id: "sepia",    label: "Sepia",    icon: "\u{1F4DC}" },
    { id: "forest",   label: "Forest",   icon: "\u{1F333}" },
    { id: "ocean",    label: "Ocean",    icon: "\u{1F30A}" },
    { id: "rose",     label: "Rose",     icon: "\u{1F339}" },
  ];
  const ACCENTS = [
    { id: "indigo",  label: "Indigo",  col: "#4f46e5" },
    { id: "emerald", label: "Emerald", col: "#059669" },
    { id: "amber",   label: "Amber",   col: "#d97706" },
    { id: "rose",    label: "Rose",    col: "#e11d48" },
    { id: "fuchsia", label: "Fuchsia", col: "#c026d3" },
    { id: "pink",    label: "Pink",    col: "#db2777" },
    { id: "cyan",    label: "Cyan",    col: "#0891b2" },
    { id: "lime",    label: "Lime",    col: "#65a30d" },
    { id: "slate",   label: "Slate",   col: "#475569" }
  ];
  const _settingsOnImport = handleImportTrades;
  return /* @__PURE__ */ React.createElement(ErrorBoundary, null, /* @__PURE__ */ React.createElement("div", { style: { minHeight: "100vh", background: "var(--bg)", color: "var(--text)" } }, showGuide && /* @__PURE__ */ React.createElement(OnboardingModal, { onDone: () => { setShowGuide(false); try { localStorage.setItem("tj_onboarding_done", "1"); } catch(e) {} }, setTab, onOpenSettings: () => { setShowSettings(true); } }), showSettings && /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,.5)", backdropFilter: "blur(12px)", zIndex: 600, display: "flex", alignItems: "center", justifyContent: "center", padding: 16, animation: "fadeIn .2s ease" }, onClick: () => setShowSettings(false) }, /* @__PURE__ */ React.createElement("div", { style: { background: "var(--surface)", borderRadius: 20, border: "1px solid var(--border)", width: 820, maxWidth: "100%", maxHeight: "calc(100vh - 32px)", overflowY: "auto", boxShadow: "var(--sh3)", animation: "scaleIn .22s cubic-bezier(.22,1,.36,1)" }, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("div", { style: { padding: "20px 24px 0", borderBottom: "1px solid var(--border)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, fontWeight: 700, letterSpacing: "-.3px" } }, "Settings"), /* @__PURE__ */ React.createElement("button", { onClick: () => setShowSettings(false), style: { background: "var(--s3)", border: "1px solid var(--border)", borderRadius: 9, padding: "6px 11px", cursor: "pointer", color: "var(--t2)", fontSize: 16, fontWeight: 700 } }, "\xD7")), /* @__PURE__ */ React.createElement("div", { className: "settings-tab-bar", style: { display: "flex", gap: 0 } }, [{ id: "appearance", label: "\u{1F3A8} Appearance" }, { id: "account", label: "\u{1F464} Profile" }, { id: "lists", label: "\u{1F4DD} Lists" }, { id: "import", label: "\u{1F4E5} Import Trades" }, { id: "editui", label: "\u{1F9E9} Edit UI" }, { id: "guide", label: "\uD83D\uDCD6 Guide" }].map((t) => /* @__PURE__ */ React.createElement("button", { key: t.id, onClick: () => setSettingsTab(t.id), style: { padding: "8px 16px", fontSize: 12, fontWeight: settingsTab === t.id ? 700 : 500, color: settingsTab === t.id ? "var(--accD)" : "var(--t3)", background: "none", border: "none", cursor: "pointer", borderBottom: settingsTab === t.id ? "2px solid var(--acc)" : "2px solid transparent", whiteSpace: "nowrap" } }, t.label)))), /* @__PURE__ */ React.createElement("div", { style: { padding: "20px 24px", display: "flex", flexDirection: "column", gap: 20 } }, settingsTab === "appearance" && /* @__PURE__ */ React.createElement(React.Fragment, null,
  /* 2-col grid for the wider panel */
  /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 } },
    /* LEFT: Theme + Preview */
    /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16 } },
      /* Theme Mode */
      /* @__PURE__ */ React.createElement("div", null,
        /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", letterSpacing: 0.04, marginBottom: 12, textTransform: "uppercase" } }, "Theme Mode"),
        /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 } }, THEMES.map((t) =>
          /* @__PURE__ */ React.createElement("button", { key: t.id, onClick: () => setTheme(t.id), style: { padding: "14px 10px", borderRadius: 12, border: `2px solid ${theme === t.id ? "var(--acc)" : "var(--border)"}`, background: theme === t.id ? "color-mix(in srgb, var(--acc) 10%, var(--surface))" : "var(--s2)", cursor: "pointer", transition: "all .2s", textAlign: "center" } },
            /* @__PURE__ */ React.createElement("div", { style: { fontSize: 22, marginBottom: 6 } }, t.icon),
            /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: theme === t.id ? "var(--accD)" : "var(--text)" } }, t.label),
            theme === t.id && /* @__PURE__ */ React.createElement("div", { style: { width: 5, height: 5, borderRadius: "50%", background: "var(--acc)", margin: "6px auto 0" } })
          )
        ))
      ),
      /* Preview Card */
      /* @__PURE__ */ React.createElement("div", { style: { background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 14, padding: "18px", flex: 1 } },
        /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 12, textTransform: "uppercase", letterSpacing: 0.04 } }, "Live Preview"),
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } },
          /* @__PURE__ */ React.createElement("div", { style: { background: "var(--surface)", border: `2px solid var(--acc)`, borderRadius: 12, padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" } },
            /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--t3)", fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.04 } }, "Net P&L"),
            /* @__PURE__ */ React.createElement("div", { style: { fontSize: 22, fontWeight: 800, color: "var(--accD)", letterSpacing: "-1px" } }, "+10.4%")
          ),
          /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8 } },
            /* @__PURE__ */ React.createElement("button", { style: { flex: 1, background: "linear-gradient(135deg,var(--acc),var(--accD))", color: "#fff", border: "none", borderRadius: 9, padding: "10px 16px", fontSize: 12, fontWeight: 700, cursor: "default" } }, "+ Log Trade"),
            /* @__PURE__ */ React.createElement("div", { style: { flex: 1, background: "var(--gBg)", border: "1px solid var(--gBdr)", borderRadius: 9, padding: "10px 16px", fontSize: 12, fontWeight: 700, color: "var(--green)", textAlign: "center" } }, "Win ✓")
          ),
          /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "var(--t3)", textAlign: "center", marginTop: 2 } }, "Changes apply instantly")
        )
      )
    ),
    /* RIGHT: Accent Colours */
    /* @__PURE__ */ React.createElement("div", null,
      /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", letterSpacing: 0.04, marginBottom: 12, textTransform: "uppercase" } }, "Accent Colour"),
      /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 } }, ACCENTS.map((a) =>
        /* @__PURE__ */ React.createElement("button", { key: a.id, onClick: () => setAccent(a.id), style: { padding: "14px 8px", borderRadius: 12, border: `2px solid ${accent === a.id ? a.col : "var(--border)"}`, background: accent === a.id ? `${a.col}18` : "var(--s2)", cursor: "pointer", transition: "all .18s", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 } },
          /* @__PURE__ */ React.createElement("div", { style: { width: 26, height: 26, borderRadius: "50%", background: a.col, boxShadow: accent === a.id ? `0 0 0 3px ${a.col}40` : "none", transition: "box-shadow .2s" } }),
          /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10.5, fontWeight: 700, color: accent === a.id ? a.col : "var(--t3)" } }, a.label)
        )
      )),
      /* @__PURE__ */ React.createElement("div", { style: { marginTop: 14, padding: "10px 14px", background: "var(--accF)", border: "1px solid color-mix(in srgb, var(--acc) 30%, transparent)", borderRadius: 10, fontSize: 11, color: "var(--accD)", fontWeight: 600 } }, "✓ Changes apply instantly · Edit Confluences, Sessions & Mistakes in 📝 Lists tab")
    )
  )
), settingsTab === "editui" && /* @__PURE__ */ React.createElement(React.Fragment, null,
  /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 700, color: "var(--text)", marginBottom: 4 } }, "Customise Dashboard Blocks"),
  /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--t3)", marginBottom: 16 } }, "Toggle which cards and sections are visible on your dashboard."),
  /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 } },
    Object.entries({ bestTradeGrade: "Best Trade Grade", disciplineScore: "Discipline Score", bestMindset: "Best Mindset", worstMindset: "Worst Mindset", mistakeRate: "Mistake Rate", equityCurve: "Equity Curve", monthlyBars: "Monthly Bars", winRateCard: "Win Rate Card", gradeBreakdown: "Grade Breakdown", sessionBreakdown: "Session Breakdown", modelBreakdown: "Model Breakdown" }).map(([k, label]) =>
      /* @__PURE__ */ React.createElement("div", { key: k, style: { display: "flex", alignItems: "center", justifyContent: "space-between", background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 10, padding: "10px 14px" } },
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, fontWeight: 600, color: uiBlocks[k] !== false ? "var(--text)" : "var(--t3)" } }, label),
        /* @__PURE__ */ React.createElement("div", { onClick: () => toggleBlock(k), style: { width: 36, height: 20, borderRadius: 10, background: uiBlocks[k] !== false ? "var(--acc)" : "var(--border2)", position: "relative", cursor: "pointer", transition: "background .2s", flexShrink: 0 } },
          /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 2, left: uiBlocks[k] !== false ? 16 : 2, width: 16, height: 16, borderRadius: "50%", background: "#fff", transition: "left .15s", boxShadow: "0 1px 3px rgba(0,0,0,.2)" } })
        )
      )
    )
  ),
  /* @__PURE__ */ React.createElement("button", { onClick: resetUi, style: { marginTop: 8, background: "var(--s3)", border: "1px solid var(--border)", color: "var(--t2)", borderRadius: 9, padding: "8px 16px", fontSize: 11, fontWeight: 700, cursor: "pointer" } }, "Reset to Defaults")
), settingsTab === "lists" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 20 } }, [{ key: "confluences", label: "Confluences", icon: "\u{1F4CC}", defaults: CONFLUENCES, desc: "Setups shown in trade form" }, { key: "sessions", label: "Sessions", icon: "\u23F0", defaults: SESSIONS, desc: "Sessions shown in dropdowns" }, { key: "mistakes", label: "Mistakes", icon: "\u26A0\uFE0F", defaults: MISTAKES, desc: "Mistakes in psychology section" }, { key: "strategies", label: "Strategies", icon: "\u{1F3AF}", defaults: MODELS, desc: "Strategies shown in trade form" }, { key: "keyLevels", label: "Key Level Presets", icon: "\u{1F4CD}", defaults: [], desc: "Common key levels (e.g. OB, FVG, resistance)" }].map(({ key, label, icon, defaults, desc }) => /* @__PURE__ */ React.createElement("div", { key, style: { background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 14, padding: "16px 18px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 700, color: "var(--text)", display: "flex", alignItems: "center", gap: 6 } }, icon, " ", label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--t3)", marginTop: 3 } }, desc)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, /* @__PURE__ */ React.createElement("button", { onClick: () => setSettingsModal({ title: "Add Item", placeholder: "Enter name…", onConfirm: (v) => { const cur = customLists[key] || defaults; saveCustomList(key, [...cur, v]); } }), style: { background: "linear-gradient(135deg,var(--acc),var(--accD))", color: "#fff", border: "none", borderRadius: 8, padding: "6px 12px", fontSize: 11, fontWeight: 700, cursor: "pointer" } }, "+ Add"), /* @__PURE__ */ React.createElement("button", { onClick: () => saveCustomList(key, null), style: { background: "var(--s3)", color: "var(--t3)", border: "1px solid var(--border)", borderRadius: 8, padding: "6px 10px", fontSize: 11, cursor: "pointer" } }, "Reset"))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 6 } }, (customLists[key] || defaults).map((item) => /* @__PURE__ */ React.createElement("div", { key: item, style: { display: "flex", alignItems: "center", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 20, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, fontWeight: 500, padding: "4px 10px", color: "var(--text)" } }, item), /* @__PURE__ */ React.createElement("button", { onClick: () => setSettingsModal({ title: "Rename Item", placeholder: item, defaultVal: item, onConfirm: (v) => { if (v && v !== item) saveCustomList(key, (customLists[key] || defaults).map((x) => x === item ? v : x)); } }), style: { background: "none", border: "none", borderLeft: "1px solid var(--border)", color: "var(--t3)", cursor: "pointer", fontSize: 11, padding: "4px 7px", lineHeight: 1 } }, "\u270F\uFE0F"), /* @__PURE__ */ React.createElement("button", { onClick: () => { if ((customLists[key] || defaults).length > 1) saveCustomList(key, (customLists[key] || defaults).filter((x) => x !== item)); }, style: { background: "none", border: "none", borderLeft: "1px solid var(--border)", color: "var(--t3)", cursor: "pointer", fontSize: 12, padding: "4px 7px", lineHeight: 1 } }, "\u00D7"))))))) ), settingsTab === "import" && /* @__PURE__ */ React.createElement(ImportTradesPanel, { onImport: _settingsOnImport }), settingsTab === "rules" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignItems: "start" } }, /* @__PURE__ */ React.createElement("div", { style: { background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 14, padding: "16px 18px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: dailyLimit.enabled ? 16 : 0 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 700, color: "var(--text)" } }, "Daily Trade Limits"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--t3)", marginTop: 2 } }, "Stop trading automatically when limits are hit")), /* @__PURE__ */ React.createElement("div", { onClick: () => setDailyLimit((d) => __spreadProps(__spreadValues({}, d), { enabled: !d.enabled })), style: { width: 44, height: 24, borderRadius: 12, background: dailyLimit.enabled ? "var(--acc)" : "var(--border2)", position: "relative", cursor: "pointer", transition: "background .2s", flexShrink: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 3, left: dailyLimit.enabled ? 21 : 3, width: 18, height: 18, borderRadius: "50%", background: "#fff", transition: "left .15s", boxShadow: "0 1px 4px rgba(0,0,0,.25)" } }))), dailyLimit.enabled && /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.04 } }, "Max Trades / Day"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("button", { onClick: () => setDailyLimit((d) => __spreadProps(__spreadValues({}, d), { maxTrades: Math.max(1, d.maxTrades - 1) })), style: { width: 30, height: 30, borderRadius: 8, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--t2)", fontSize: 16, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" } }, "\u2212"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 22, fontWeight: 800, color: "var(--text)", minWidth: 32, textAlign: "center" } }, dailyLimit.maxTrades), /* @__PURE__ */ React.createElement("button", { onClick: () => setDailyLimit((d) => __spreadProps(__spreadValues({}, d), { maxTrades: d.maxTrades + 1 })), style: { width: 30, height: 30, borderRadius: 8, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--t2)", fontSize: 16, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" } }, "+")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "var(--t3)", marginTop: 4 } }, "Stop after ", dailyLimit.maxTrades, " trade", dailyLimit.maxTrades !== 1 ? "s" : "")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.04 } }, "Max Loss / Day (%)"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("button", { onClick: () => setDailyLimit((d) => __spreadProps(__spreadValues({}, d), { maxLoss: Math.min(-0.5, +(d.maxLoss + 0.5).toFixed(1)) })), style: { width: 30, height: 30, borderRadius: 8, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--t2)", fontSize: 16, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" } }, "\u2212"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 22, fontWeight: 800, color: "var(--red)", minWidth: 44, textAlign: "center" } }, dailyLimit.maxLoss, "%"), /* @__PURE__ */ React.createElement("button", { onClick: () => setDailyLimit((d) => __spreadProps(__spreadValues({}, d), { maxLoss: Math.min(-0.5, +(d.maxLoss - 0.5).toFixed(1)) })), style: { width: 30, height: 30, borderRadius: 8, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--t2)", fontSize: 16, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" } }, "+")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "var(--t3)", marginTop: 4 } }, "Stop at ", dailyLimit.maxLoss, "% daily loss")))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(RiskRulesEditor, null))), dailyLimit.enabled && (() => {
    const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    const todayTrades = allTrades.filter((t) => t.entryDate === today);
    const todayPnl = calcPnL(todayTrades.reduce((s, t) => s + (t.profit||0), 0), accountCapital);
    const tradesBreach = todayTrades.length >= dailyLimit.maxTrades;
    const lossBreach = todayPnl <= dailyLimit.maxLoss;
    const breached = tradesBreach || lossBreach;
    return /* @__PURE__ */ React.createElement("div", { style: { background: breached ? "var(--rBg)" : "var(--gBg)", border: `1px solid ${breached ? "var(--rBdr)" : "var(--gBdr)"}`, borderRadius: 12, padding: "12px 16px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 700, color: breached ? "var(--red)" : "var(--green)", marginBottom: 6 } }, breached ? "\u{1F6AB} Daily limit reached \u2014 stop trading today" : "\u2713 Within daily limits"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 16, fontSize: 11, color: "var(--t2)" } }, /* @__PURE__ */ React.createElement("span", null, "Trades today: ", /* @__PURE__ */ React.createElement("b", { style: { color: tradesBreach ? "var(--red)" : "var(--text)" } }, todayTrades.length, "/", dailyLimit.maxTrades)), /* @__PURE__ */ React.createElement("span", null, "P&L today: ", /* @__PURE__ */ React.createElement("b", { style: { color: lossBreach ? "var(--red)" : "var(--accD)" } }, todayPnl >= 0 ? "+" : "", todayPnl.toFixed(2), "%"))));
  })()), settingsTab === "guide" && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { background: "linear-gradient(135deg, var(--accF), var(--s2))", border: "1px solid var(--border)", borderRadius: 16, padding: "20px 22px", marginBottom: 16, display: "flex", alignItems: "center", gap: 16 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 38, lineHeight: 1 } }, "\uD83D\uDCD6"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, fontWeight: 800, color: "var(--text)", letterSpacing: "-.02em" } }, "How to use Tradexy"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "var(--t3)", marginTop: 3 } }, "Step-by-step guide to get the most from your journal"), /* @__PURE__ */ React.createElement("button", { onClick: () => { setShowGuide(true); setShowSettings(false); }, style: { marginTop: 10, padding: "7px 16px", borderRadius: 10, border: "none", background: "linear-gradient(135deg,var(--acc),var(--accD))", color: "#fff", fontSize: 12, fontWeight: 700, cursor: "pointer" } }, "\uD83D\uDE80 Open Interactive Guide"))), ...[{ step:"01", icon:"\uD83C\uDFE6", col:"var(--bBg)", bdr:"var(--bBdr)", title:"Add Your Account", items:["Click \"+ Add\" in the Trading Accounts panel","Choose Demo (paper trading) or MT5 (live broker)","Enter your starting capital — required for MT5","Click Create — account appears in sidebar ready to use"] },{ step:"02", icon:"\u270D\uFE0F", col:"var(--pBg)", bdr:"var(--pBdr)", title:"Log Your Trades", items:["Press N anywhere to open the trade form instantly","Fill symbol, entry/exit, Net P&L ($), session, grade","Add emotions, confluences & mistakes for psychology tracking","Click \"Log Trade\" — saved to selected account"] },{ step:"03", icon:"\uD83D\uDCCA", col:"var(--gBg)", bdr:"var(--gBdr)", title:"Analyse Performance", items:["Overview: win rate, profit factor, equity curve","Analytics: breakdown by session, model, confluence, grade","Calendar: heat-map of your best and worst days","Psychology: spot emotion patterns hurting your edge"] },{ step:"04", icon:"\uD83D\uDCE5", col:"var(--oBg)", bdr:"var(--oBdr)", title:"Import from Broker", items:["Go to Settings \u2192 Import Trades","Upload CSV from MT5, Tradovate, or ProjectX","Trades are mapped automatically to your account","Review imported trades in the Trade Log tab"] },{ step:"05", icon:"\u2328\uFE0F", col:"var(--s2)", bdr:"var(--border)", title:"Tips & Shortcuts", items:["N = open new trade form from anywhere","\u2190\u2192 arrow keys = navigate the interactive guide","Settings \u2192 Appearance = change theme & accent colour","Click any calendar day to review trades from that day"] }].map((s) => /* @__PURE__ */ React.createElement("div", { key: s.step, style: { background: s.col, border: "1px solid "+s.bdr, borderRadius: 14, padding: "16px 18px", marginBottom: 10 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 10 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 36, height: 36, borderRadius: 10, background: "var(--surface)", border: "1px solid "+s.bdr, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 } }, s.icon), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9, fontWeight: 700, color: "var(--t3)", letterSpacing: "0.08em", textTransform: "uppercase" } }, "Step ", s.step), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 700, color: "var(--text)" } }, s.title))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 5 } }, ...s.items.map((item, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { display: "flex", alignItems: "flex-start", gap: 8, fontSize: 12, color: "var(--t2)", lineHeight: 1.5 } }, /* @__PURE__ */ React.createElement("span", { style: { width: 18, height: 18, borderRadius: "50%", background: "var(--surface)", border: "1px solid "+s.bdr, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 800, color: "var(--acc)", flexShrink: 0, marginTop: 1 } }, i+1), item)))))), settingsTab === "account" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 600, color: "var(--t3)", letterSpacing: 0.04, marginBottom: 8, textTransform: "uppercase" } }, "Display Name"), /* @__PURE__ */ React.createElement("input", { value: userName, onChange: (e) => saveUserName(e.target.value), placeholder: "Your name", style: { width: "100%", border: "1.5px solid var(--border)", borderRadius: 9, padding: "10px 14px", fontSize: 13, outline: "none", background: "var(--s2)", color: "var(--text)", boxSizing: "border-box" } }), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--t3)", marginTop: 6 } }, "Shown in the sidebar and trade summaries")), /* @__PURE__ */ React.createElement("div", { style: { background: "var(--s2)", borderRadius: 12, padding: "14px 16px", display: "flex", flexDirection: "column", gap: 8 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: "var(--text)", marginBottom: 4 } }, "Data Storage"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--t2)" } }, "All trade data is stored locally in your browser via ", /* @__PURE__ */ React.createElement("code", { style: { background: "var(--s3)", padding: "1px 5px", borderRadius: 4, fontSize: 10 } }, "localStorage"), ". Nothing is sent to any server unless you connect an MT5 account."), /* @__PURE__ */ React.createElement("button", { onClick: () => {
    {
        ["tj5_accounts", "tj5_meta", "tj5_uiblocks", "tj5_username", "tj5_theme", "tj5_accent", "tj5_daily_limit"].forEach((k) => localStorage.removeItem(k));
        window.location.reload();
      }
  }, style: { padding: "8px 16px", borderRadius: 9, border: "1.5px solid var(--rBdr)", background: "var(--rBg)", color: "var(--red)", fontSize: 11, fontWeight: 700, cursor: "pointer", alignSelf: "flex-start" } }, "Clear All Local Data")))))), /* @__PURE__ */ React.createElement(InputModal, { open: !!settingsModal, title: settingsModal && settingsModal.title, subtitle: settingsModal && settingsModal.subtitle, placeholder: settingsModal && settingsModal.placeholder, defaultVal: settingsModal && settingsModal.defaultVal, onConfirm: (v) => { settingsModal && settingsModal.onConfirm(v); setSettingsModal(null); }, onClose: () => setSettingsModal(null) }), dayPopup && /* @__PURE__ */ React.createElement(DayPopup, { date: dayPopup, trades: allTrades, onClose: () => {
    setDayPopup(null);
    setEditingDayTrade(null);
  }, ic, capital: accountCapital, onEdit: handleEditTrade, editingId: editingDayTrade, setEditingId: setEditingDayTrade, onOpenSettings: () => { setShowSettings(true); setSettingsTab("lists"); }, usedSessions: usedSessions || SESSIONS, usedMistakes: usedMistakes || MISTAKES }), /* @__PURE__ */ React.createElement(Sidebar, { activeTab: tab, setTab, sidebarOpen: sidebarEffectiveOpen, setSidebarOpen, setSidebarHover, userName, setUserName: saveUserName, accounts, seedTrades: SEED, demoDeleted, editingUi, setEditingUi, uiBlocks, toggleBlock, resetUi, onOpenSettings: () => setShowSettings(true), theme, setTheme }), /* @__PURE__ */ React.createElement(FloatingCalc, { capital: accountCapital, open: showCalc, setOpen: setShowCalc }), toast && /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", bottom: 24, right: 24, zIndex: 9999, background: "var(--surface)", borderRadius: 16, padding: "13px 18px", fontSize: 13, fontWeight: 600, boxShadow: "var(--sh3)", display: "flex", alignItems: "center", gap: 12, maxWidth: isMobile ? "calc(100vw - 32px)" : 400, animation: "fadeUp .25s ease", border: `1px solid ${toast.type === "success" ? "var(--gBdr)" : toast.type === "error" ? "var(--rBdr)" : "var(--border)"}` } }, /* @__PURE__ */ React.createElement("span", { style: { width: 32, height: 32, borderRadius: 9, background: toast.type === "success" ? "var(--gBg)" : toast.type === "error" ? "var(--rBg)" : "var(--s2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, flexShrink: 0 } }, toast.type === "success" ? "\u2713" : toast.type === "error" ? "\u2715" : "\u2139"), /* @__PURE__ */ React.createElement("span", { style: { flex: 1, lineHeight: 1.5 } }, toast.msg), /* @__PURE__ */ React.createElement("button", { onClick: () => setToast(null), style: { background: "none", border: "none", color: "var(--t3)", cursor: "pointer", fontSize: 18, padding: "0 2px", lineHeight: 1 } }, "\xD7")), /* @__PURE__ */ React.createElement("div", { style: { marginLeft: sideW, transition: "margin-left .2s ease", minHeight: "100vh" } }, /* @__PURE__ */ React.createElement("div", { style: { background: "var(--topbar-bg)", borderBottom: "1px solid var(--border)", padding: "0 20px", height: 52, display: "flex", alignItems: "center", gap: 10, position: "sticky", top: 0, zIndex: 100, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,var(--acc),transparent)`, opacity: 0.7 } }), isMobile && /* @__PURE__ */ React.createElement("button", { onClick: () => setSidebarOpen(true), style: { background: "none", border: "none", cursor: "pointer", padding: 6, display: "flex", alignItems: "center", color: "var(--t2)" } }, /* @__PURE__ */ React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" }, /* @__PURE__ */ React.createElement("line", { x1: "3", y1: "6", x2: "21", y2: "6" }), /* @__PURE__ */ React.createElement("line", { x1: "3", y1: "12", x2: "21", y2: "12" }), /* @__PURE__ */ React.createElement("line", { x1: "3", y1: "18", x2: "21", y2: "18" }))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 3, height: 20, background: `linear-gradient(180deg,var(--acc),var(--accD))`, borderRadius: 2 } }), /* @__PURE__ */ React.createElement("h1", { style: { margin: 0, fontSize: 15, fontWeight: 700, letterSpacing: "-0.025em", fontFamily: "'Inter',sans-serif" } }, ((_a = TABS_INFO.find((t) => t.id === tab)) == null ? void 0 : _a.label) || "")), live > 0 && /* @__PURE__ */ React.createElement("div", { className: "hide-m", style: { display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "var(--green)", fontWeight: 700, background: "var(--gBg)", border: "1px solid var(--gBdr)", borderRadius: 20, padding: "3px 11px" } }, /* @__PURE__ */ React.createElement("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "var(--green)", display: "inline-block", animation: "pulse 2s infinite" } }), live, " Live"), accounts.length === 0 && !demoDeleted && /* @__PURE__ */ React.createElement("div", { className: "hide-m", style: { fontSize: 11, color: "var(--t3)", background: "var(--s3)", border: "1px solid var(--border)", borderRadius: 20, padding: "3px 11px" } }, "Demo Mode \xB7 Sample data"),
  /* ── right side controls ── */
  /* @__PURE__ */ React.createElement("div", { style: { marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 } },
  /* ── Wallet Dropdown (right corner) ── */
  React.createElement(WalletDropdown, { accounts, activeAccId, setActiveAccId, accountCapital, trueBalanceInfo, allTrades, isMobile }),
  /* Theme toggle - cycles through all themes */
  /* @__PURE__ */ React.createElement("button", { onClick: () => { const allThemes = ["zinc","light","slate","lavender","dark","sepia","forest","ocean","rose"]; const idx = allThemes.indexOf(theme); setTheme(allThemes[(idx + 1) % allThemes.length]); }, title: "Cycle theme",
    style: { background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 9, width: 32, height: 32, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: "var(--t2)", transition: "all .15s" },
    onMouseEnter: (e) => { e.currentTarget.style.borderColor = "var(--acc)"; e.currentTarget.style.color = "var(--accD)"; },
    onMouseLeave: (e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--t2)"; }
  }, theme === "light" ? "\u{1F319}" : theme === "dark" ? "\u2600\uFE0F" : theme === "sepia" ? "\u{1F4DC}" : theme === "forest" ? "\u{1F333}" : theme === "ocean" ? "\u{1F30A}" : theme === "midnight" ? "\u{1F30C}" : theme === "zinc" ? "\u26AA" : "\u{1F338}"),
  /* Calculator shortcut */
  /* @__PURE__ */ React.createElement("button", { "data-tour": "calc-btn", onClick: () => setShowCalc(c => !c), title: "Position Size Calculator",
    style: { background: showCalc ? "var(--accF)" : "var(--s2)", border: showCalc ? "1px solid var(--acc)" : "1px solid var(--border)", borderRadius: 9, width: 32, height: 32, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, color: showCalc ? "var(--accD)" : "var(--t2)", transition: "all .15s" },
    onMouseEnter: (e) => { e.currentTarget.style.borderColor = "var(--acc)"; e.currentTarget.style.color = "var(--accD)"; },
    onMouseLeave: (e) => { if (!showCalc) { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--t2)"; } }
  }, "🧮"),
  /* Settings gear */
  /* @__PURE__ */ React.createElement("button", { "data-tour": "settings-btn", onClick: () => setShowSettings(true), title: "Settings",
    style: { background: "var(--s2)", border: "1px solid var(--border)", borderRadius: 9, width: 32, height: 32, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t2)", transition: "all .15s" },
    onMouseEnter: (e) => { e.currentTarget.style.borderColor = "var(--acc)"; },
    onMouseLeave: (e) => { e.currentTarget.style.borderColor = "var(--border)"; }
  },
    /* @__PURE__ */ React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" },
      /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "3" }),
      /* @__PURE__ */ React.createElement("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" })
    )
  )
)), /* @__PURE__ */ React.createElement("div", { className: "content-area", style: { maxWidth: tab === "calendar" ? 1400 : 1180, margin: "0 auto", padding: "22px 20px 80px" } }, /* @__PURE__ */ React.createElement(AccountsPanel, { accounts, onSync: handleSync, onRemove: handleRemoveAcc, onAdd: handleAddAcc, onAddAdjustment: handleAddAdjustment, onRemoveAdjustment: handleRemoveAdjustment, syncingId, onImportToAccount: handleImportToAccount }), accounts.length > 0 && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 7, marginBottom: 18, flexWrap: "wrap", alignItems: "center" } }, [{ id: "all", label: "\u{1F310} All", cnt: accounts.reduce((s, a) => s + a.trades.length, 0), col: null }, ...accounts.map((a, i) => ({ id: a.id, label: a.label, cnt: a.trades.length, col: ACC_COLS[i % ACC_COLS.length], isDemo: a.isDemo }))].map((item) => /* @__PURE__ */ React.createElement("button", { key: item.id, className: "acct-filter-pill", onClick: () => setActiveAccId(item.id), style: { display: "flex", alignItems: "center", gap: 6, padding: "6px 14px", borderRadius: 20, border: `1.5px solid ${activeAccId === item.id ? item.col || "var(--acc)" : "var(--border)"}`, background: activeAccId === item.id ? item.col ? item.col + "20" : "var(--accF)" : "var(--surface)", color: activeAccId === item.id ? item.col || "var(--acc)" : "var(--t2)", fontWeight: activeAccId === item.id ? 700 : 500, fontSize: 12, cursor: "pointer", maxWidth: isMobile ? 90 : "none", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, item.col && /* @__PURE__ */ React.createElement("span", { style: { width: 7, height: 7, borderRadius: "50%", background: item.col } }), /* @__PURE__ */ React.createElement("span", { className: "acct-filter-label", style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: isMobile ? 72 : "none" } }, item.label), !isMobile && item.isDemo && /* @__PURE__ */ React.createElement(Chip, { color: "purple", size: "sm" }, "Demo"), /* @__PURE__ */ React.createElement("span", { style: { background: "var(--s3)", borderRadius: 10, padding: "1px 7px", fontSize: 10, fontWeight: 700 } }, item.cnt)))), showDateBar && /* @__PURE__ */ React.createElement(DateRangeBar, { trades: allTrades, dateRange, setDateRange, capital: accountCapital }), (!demoBannerDismissed&&accounts.length>0&&accounts.some(function(a){return a.isDemo&&(a.trades||[]).some(function(t){return(t.tags||[]).indexOf("Sample Data")>=0;});})) ? /* @__PURE__ */ React.createElement("div",{style:{background:"var(--bBg)",border:"1.5px solid var(--bBdr)",borderRadius:12,padding:"10px 16px",marginBottom:14,display:"flex",alignItems:"center",gap:10}}, /* @__PURE__ */ React.createElement("span",{style:{fontSize:18}},"🧪"), /* @__PURE__ */ React.createElement("div",{style:{flex:1,fontSize:12,color:"var(--blue)",fontWeight:500}},"This is demo data — explore freely. Delete sample trades anytime from Trade Log."), /* @__PURE__ */ React.createElement("button",{onClick:function(){setDemoBannerDismissed(true);try{localStorage.setItem("tj5_demo_dismissed","1");}catch(e){}},style:{fontSize:11,fontWeight:700,color:"var(--blue)",background:"none",border:"1px solid var(--bBdr)",borderRadius:7,padding:"4px 10px",cursor:"pointer",fontFamily:"inherit"}},"Dismiss")) : null, dailyLimit.enabled && (() => {
    const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    const todayT = allTrades.filter((t) => t.entryDate === today);
    const todayProfit = todayT.reduce((s, t) => s + (t.profit || 0), 0);
    const todayPnl = calcPnL(todayProfit, accountCapital);
    const tradesBreach = todayT.length >= dailyLimit.maxTrades;
    const lossBreach = todayPnl <= dailyLimit.maxLoss;
    if (!tradesBreach && !lossBreach) return null;
    return /* @__PURE__ */ React.createElement("div", { style: { background: "var(--rBg)", border: "1.5px solid var(--rBdr)", borderRadius: 12, padding: "10px 16px", marginBottom: 14, display: "flex", alignItems: "center", gap: 10, animation: "fadeUp .3s ease" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 18 } }, "\u{1F6AB}"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 700, color: "var(--red)" } }, "Daily limit reached \u2014 stop trading for today"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--t2)", marginTop: 2 } }, tradesBreach && `${todayT.length}/${dailyLimit.maxTrades} trades used`, tradesBreach && lossBreach && " \xB7 ", lossBreach && `${todayPnl.toFixed(2)}% P&L (limit: ${dailyLimit.maxLoss}%)`)), /* @__PURE__ */ React.createElement("button", { onClick: () => setShowSettings(true), style: { fontSize: 11, fontWeight: 600, color: "var(--red)", background: "none", border: "1px solid var(--rBdr)", borderRadius: 7, padding: "4px 10px", cursor: "pointer" } }, "Edit rules"));
  })(), /* @__PURE__ */ React.createElement("div", { key: tab, className: "fade-up" }, tab === "overview" && /* @__PURE__ */ React.createElement(Overview, { trades: displayTrades, allTrades, uiBlocks, capital: accountCapital }), tab === "analytics" && /* @__PURE__ */ React.createElement(Analytics, { trades: displayTrades, uiBlocks, capital: accountCapital }), tab === "psychology" && /* @__PURE__ */ React.createElement(Psychology, { trades: displayTrades, uiBlocks, capital: accountCapital }), tab === "tradelog" && /* @__PURE__ */ React.createElement(TradeLog, { trades: displayTrades, onAdd: handleAddTrade, onDelete: handleDeleteTrade, onEdit: handleEditTrade, onUpdateMeta: handleUpdateMeta, tradeMeta, onDuplicate: handleDuplicateTrade, openFormTrigger: openTradeForm, onFormOpened: () => setOpenTradeForm(false), usedConfluences, usedSessions, usedMistakes, usedModels, saveCustomList, customLists, onOpenSettings: (tab) => { setShowSettings(true); setSettingsTab(tab || "lists"); }, capital: accountCapital, accounts: accounts, activeAccId: activeAccId }), tab === "calendar" && /* @__PURE__ */ React.createElement(CalendarView, { trades: allTrades, onDayClick: setDayPopup, capital: accountCapital }))))));
}
const rootEl = document.getElementById("root");
if (rootEl) {
  ReactDOM.createRoot(rootEl).render(/* @__PURE__ */ React.createElement(App, null));
}



  (function() {
    const eL = document.getElementById('eyeWidgetL');
    const eR = document.getElementById('eyeWidgetR');
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let lx=0,ly=0,rx=0,ry=0;

    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

    function target(eye) {
      const r = eye.getBoundingClientRect();
      const dx = mx - (r.left + r.width/2);
      const dy = my - (r.top + r.height/2);
      const a = Math.atan2(dy, dx);
      const d = Math.min(14, Math.hypot(dx,dy) / 5);
      return { x: Math.cos(a)*d, y: Math.sin(a)*d };
    }

    (function loop() {
      const tL = target(eL), tR = target(eR);
      lx += (tL.x - lx) * 0.12; ly += (tL.y - ly) * 0.12;
      rx += (tR.x - rx) * 0.12; ry += (tR.y - ry) * 0.12;
      eL.style.transform = `translate(${lx.toFixed(2)}px,${ly.toFixed(2)}px)`;
      eR.style.transform = `translate(${rx.toFixed(2)}px,${ry.toFixed(2)}px)`;
      requestAnimationFrame(loop);
    })();
  })();

  function eyeTriggerFlash() {
    const el = document.getElementById('eye-flash');
    el.classList.remove('go');
    void el.offsetWidth;
    el.classList.add('go');
    el.addEventListener('animationend', () => { el.classList.remove('go'); }, { once: true });
  }
</script>