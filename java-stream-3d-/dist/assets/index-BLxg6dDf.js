(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function a(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(u){if(u.ep)return;u.ep=!0;const f=a(u);fetch(u.href,f)}})();function AM(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var td={exports:{}},tl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q0;function RM(){if(q0)return tl;q0=1;var o=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function a(s,u,f){var h=null;if(f!==void 0&&(h=""+f),u.key!==void 0&&(h=""+u.key),"key"in u){f={};for(var d in u)d!=="key"&&(f[d]=u[d])}else f=u;return u=f.ref,{$$typeof:o,type:s,key:h,ref:u!==void 0?u:null,props:f}}return tl.Fragment=n,tl.jsx=a,tl.jsxs=a,tl}var Y0;function CM(){return Y0||(Y0=1,td.exports=RM()),td.exports}var st=CM(),ed={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0;function wM(){if(W0)return ie;W0=1;var o=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.for("react.view_transition"),M=Symbol.iterator;function b(w){return w===null||typeof w!="object"?null:(w=M&&w[M]||w["@@iterator"],typeof w=="function"?w:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,x={};function P(w,j,gt){this.props=w,this.context=j,this.refs=x,this.updater=gt||R}P.prototype.isReactComponent={},P.prototype.setState=function(w,j){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,j,"setState")},P.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function O(){}O.prototype=P.prototype;function N(w,j,gt){this.props=w,this.context=j,this.refs=x,this.updater=gt||R}var Q=N.prototype=new O;Q.constructor=N,y(Q,P.prototype),Q.isPureReactComponent=!0;var G=Array.isArray;function z(){}var V={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function C(w,j,gt){var ct=gt.ref;return{$$typeof:o,type:w,key:j,ref:ct!==void 0?ct:null,props:gt}}function B(w,j){return C(w.type,j,w.props)}function ut(w){return typeof w=="object"&&w!==null&&w.$$typeof===o}function ot(w){var j={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(gt){return j[gt]})}var vt=/\/+/g;function pt(w,j){return typeof w=="object"&&w!==null&&w.key!=null?ot(""+w.key):j.toString(36)}function k(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(z,z):(w.status="pending",w.then(function(j){w.status==="pending"&&(w.status="fulfilled",w.value=j)},function(j){w.status==="pending"&&(w.status="rejected",w.reason=j)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function at(w,j,gt,ct,At){var Nt=typeof w;(Nt==="undefined"||Nt==="boolean")&&(w=null);var Ft=!1;if(w===null)Ft=!0;else switch(Nt){case"bigint":case"string":case"number":Ft=!0;break;case"object":switch(w.$$typeof){case o:case n:Ft=!0;break;case v:return Ft=w._init,at(Ft(w._payload),j,gt,ct,At)}}if(Ft)return At=At(w),Ft=ct===""?"."+pt(w,0):ct,G(At)?(gt="",Ft!=null&&(gt=Ft.replace(vt,"$&/")+"/"),at(At,j,gt,"",function(De){return De})):At!=null&&(ut(At)&&(At=B(At,gt+(At.key==null||w&&w.key===At.key?"":(""+At.key).replace(vt,"$&/")+"/")+Ft)),j.push(At)),1;Ft=0;var Tt=ct===""?".":ct+":";if(G(w))for(var Ct=0;Ct<w.length;Ct++)ct=w[Ct],Nt=Tt+pt(ct,Ct),Ft+=at(ct,j,gt,Nt,At);else if(Ct=b(w),typeof Ct=="function")for(w=Ct.call(w),Ct=0;!(ct=w.next()).done;)ct=ct.value,Nt=Tt+pt(ct,Ct++),Ft+=at(ct,j,gt,Nt,At);else if(Nt==="object"){if(typeof w.then=="function")return at(k(w),j,gt,ct,At);throw j=String(w),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return Ft}function Z(w,j,gt){if(w==null)return w;var ct=[],At=0;return at(w,ct,"","",function(Nt){return j.call(gt,Nt,At++)}),ct}function ht(w){if(w._status===-1){var j=w._result,gt=j();gt.then(function(ct){(w._status===0||w._status===-1)&&(w._status=1,w._result=ct,gt.status===void 0&&(gt.status="fulfilled",gt.value=ct))},function(ct){(w._status===0||w._status===-1)&&(w._status=2,w._result=ct,gt.status===void 0&&(gt.status="rejected",gt.reason=ct))}),w._status===-1&&(w._status=0,w._result=gt)}if(w._status===1)return w._result.default;throw w._result}var St=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function Gt(w){var j=V.T,gt={};gt.types=j!==null?j.types:null,V.T=gt;try{var ct=w(),At=V.S;At!==null&&At(gt,ct),typeof ct=="object"&&ct!==null&&typeof ct.then=="function"&&ct.then(z,St)}catch(Nt){St(Nt)}finally{j!==null&&gt.types!==null&&(j.types=gt.types),V.T=j}}function ee(w){var j=V.T;if(j!==null){var gt=j.types;gt===null?j.types=[w]:gt.indexOf(w)===-1&&gt.push(w)}else Gt(ee.bind(null,w))}var Me={map:Z,forEach:function(w,j,gt){Z(w,function(){j.apply(this,arguments)},gt)},count:function(w){var j=0;return Z(w,function(){j++}),j},toArray:function(w){return Z(w,function(j){return j})||[]},only:function(w){if(!ut(w))throw Error("React.Children.only expected to receive a single React element child.");return w}};return ie.Activity=g,ie.Children=Me,ie.Component=P,ie.Fragment=a,ie.Profiler=u,ie.PureComponent=N,ie.StrictMode=s,ie.Suspense=m,ie.ViewTransition=S,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,ie.__COMPILER_RUNTIME={__proto__:null,c:function(w){return V.H.useMemoCache(w)}},ie.addTransitionType=ee,ie.cache=function(w){return function(){return w.apply(null,arguments)}},ie.cacheSignal=function(){return null},ie.cloneElement=function(w,j,gt){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var ct=y({},w.props),At=w.key;if(j!=null)for(Nt in j.key!==void 0&&(At=""+j.key),j)!D.call(j,Nt)||Nt==="key"||Nt==="__self"||Nt==="__source"||Nt==="ref"&&j.ref===void 0||(ct[Nt]=j[Nt]);var Nt=arguments.length-2;if(Nt===1)ct.children=gt;else if(1<Nt){for(var Ft=Array(Nt),Tt=0;Tt<Nt;Tt++)Ft[Tt]=arguments[Tt+2];ct.children=Ft}return C(w.type,At,ct)},ie.createContext=function(w){return w={$$typeof:h,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:f,_context:w},w},ie.createElement=function(w,j,gt){var ct,At={},Nt=null;if(j!=null)for(ct in j.key!==void 0&&(Nt=""+j.key),j)D.call(j,ct)&&ct!=="key"&&ct!=="__self"&&ct!=="__source"&&(At[ct]=j[ct]);var Ft=arguments.length-2;if(Ft===1)At.children=gt;else if(1<Ft){for(var Tt=Array(Ft),Ct=0;Ct<Ft;Ct++)Tt[Ct]=arguments[Ct+2];At.children=Tt}if(w&&w.defaultProps)for(ct in Ft=w.defaultProps,Ft)At[ct]===void 0&&(At[ct]=Ft[ct]);return C(w,Nt,At)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(w){return{$$typeof:d,render:w}},ie.isValidElement=ut,ie.lazy=function(w){return{$$typeof:v,_payload:{_status:-1,_result:w},_init:ht}},ie.memo=function(w,j){return{$$typeof:_,type:w,compare:j===void 0?null:j}},ie.startTransition=Gt,ie.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},ie.use=function(w){return V.H.use(w)},ie.useActionState=function(w,j,gt){return V.H.useActionState(w,j,gt)},ie.useCallback=function(w,j){return V.H.useCallback(w,j)},ie.useContext=function(w){return V.H.useContext(w)},ie.useDebugValue=function(){},ie.useDeferredValue=function(w,j){return V.H.useDeferredValue(w,j)},ie.useEffect=function(w,j){return V.H.useEffect(w,j)},ie.useEffectEvent=function(w){return V.H.useEffectEvent(w)},ie.useId=function(){return V.H.useId()},ie.useImperativeHandle=function(w,j,gt){return V.H.useImperativeHandle(w,j,gt)},ie.useInsertionEffect=function(w,j){return V.H.useInsertionEffect(w,j)},ie.useLayoutEffect=function(w,j){return V.H.useLayoutEffect(w,j)},ie.useMemo=function(w,j){return V.H.useMemo(w,j)},ie.useOptimistic=function(w,j){return V.H.useOptimistic(w,j)},ie.useReducer=function(w,j,gt){return V.H.useReducer(w,j,gt)},ie.useRef=function(w){return V.H.useRef(w)},ie.useState=function(w){return V.H.useState(w)},ie.useSyncExternalStore=function(w,j,gt){return V.H.useSyncExternalStore(w,j,gt)},ie.useTransition=function(){return V.H.useTransition()},ie.version="19.3.0",ie}var j0;function Cp(){return j0||(j0=1,ed.exports=wM()),ed.exports}var dn=Cp();const DM=AM(dn);var nd={exports:{}},el={},id={exports:{}},ad={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0;function UM(){return Z0||(Z0=1,(function(o){function n(k,at){var Z=k.length;k.push(at);t:for(;0<Z;){var ht=Z-1>>>1,St=k[ht];if(0<u(St,at))k[ht]=at,k[Z]=St,Z=ht;else break t}}function a(k){return k.length===0?null:k[0]}function s(k){if(k.length===0)return null;var at=k[0],Z=k.pop();if(Z!==at){k[0]=Z;t:for(var ht=0,St=k.length,Gt=St>>>1;ht<Gt;){var ee=2*(ht+1)-1,Me=k[ee],w=ee+1,j=k[w];if(0>u(Me,Z))w<St&&0>u(j,Me)?(k[ht]=j,k[w]=Z,ht=w):(k[ht]=Me,k[ee]=Z,ht=ee);else if(w<St&&0>u(j,Z))k[ht]=j,k[w]=Z,ht=w;else break t}}return at}function u(k,at){var Z=k.sortIndex-at.sortIndex;return Z!==0?Z:k.id-at.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],_=[],v=1,g=null,S=3,M=!1,b=!1,R=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function N(k){for(var at=a(_);at!==null;){if(at.callback===null)s(_);else if(at.startTime<=k)s(_),at.sortIndex=at.expirationTime,n(m,at);else break;at=a(_)}}function Q(k){if(R=!1,N(k),!b)if(a(m)!==null)b=!0,G||(G=!0,ut());else{var at=a(_);at!==null&&pt(Q,at.startTime-k)}}var G=!1,z=-1,V=5,D=-1;function C(){return y?!0:!(o.unstable_now()-D<V)}function B(){if(y=!1,G){var k=o.unstable_now();D=k;var at=!0;try{t:{b=!1,R&&(R=!1,P(z),z=-1),M=!0;var Z=S;try{e:{for(N(k),g=a(m);g!==null&&!(g.expirationTime>k&&C());){var ht=g.callback;if(typeof ht=="function"){g.callback=null,S=g.priorityLevel;var St=ht(g.expirationTime<=k);if(k=o.unstable_now(),typeof St=="function"){g.callback=St,N(k),at=!0;break e}g===a(m)&&s(m),N(k)}else s(m);g=a(m)}if(g!==null)at=!0;else{var Gt=a(_);Gt!==null&&pt(Q,Gt.startTime-k),at=!1}}break t}finally{g=null,S=Z,M=!1}at=void 0}}finally{at?ut():G=!1}}}var ut;if(typeof O=="function")ut=function(){O(B)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,vt=ot.port2;ot.port1.onmessage=B,ut=function(){vt.postMessage(null)}}else ut=function(){x(B,0)};function pt(k,at){z=x(function(){k(o.unstable_now())},at)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(k){k.callback=null},o.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<k?Math.floor(1e3/k):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(k){switch(S){case 1:case 2:case 3:var at=3;break;default:at=S}var Z=S;S=at;try{return k()}finally{S=Z}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(k,at){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var Z=S;S=k;try{return at()}finally{S=Z}},o.unstable_scheduleCallback=function(k,at,Z){var ht=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ht+Z:ht):Z=ht,k){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=Z+St,k={id:v++,callback:at,priorityLevel:k,startTime:Z,expirationTime:St,sortIndex:-1},Z>ht?(k.sortIndex=Z,n(_,k),a(m)===null&&k===a(_)&&(R?(P(z),z=-1):R=!0,pt(Q,Z-ht))):(k.sortIndex=St,n(m,k),b||M||(b=!0,G||(G=!0,ut()))),k},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(k){var at=S;return function(){var Z=S;S=at;try{return k.apply(this,arguments)}finally{S=Z}}}})(ad)),ad}var K0;function NM(){return K0||(K0=1,id.exports=UM()),id.exports}var rd={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0;function LM(){if(Q0)return Dn;Q0=1;var o=Cp();function n(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)g+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var s={d:{f:a,r:function(){throw Error(n(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},u=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(v,g,S){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:M==null?null:M===h?h:""+M,children:v,containerInfo:g,implementation:S}}var m=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.browser=function(v){return{$$typeof:f,_reason:v}},Dn.createPortal=function(v,g){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(n(299));return d(v,g,null,S)},Dn.flushSync=function(v){var g=m.T,S=s.p;try{if(m.T=null,s.p=2,v)return v()}finally{m.T=g,s.p=S,s.d.f()}},Dn.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(v,g))},Dn.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},Dn.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var S=g.as,M=_(S,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,R=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;S==="style"?s.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:M,integrity:b,fetchPriority:R}):S==="script"&&s.d.X(v,{crossOrigin:M,integrity:b,fetchPriority:R,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Dn.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var S=_(g.as,g.crossOrigin);s.d.M(v,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&s.d.M(v)},Dn.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var S=g.as,M=_(S,g.crossOrigin);s.d.L(v,S,{crossOrigin:M,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Dn.preloadModule=function(v,g){if(typeof v=="string")if(g){var S=_(g.as,g.crossOrigin);s.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else s.d.m(v)},Dn.requestFormReset=function(v){s.d.r(v)},Dn.unstable_batchedUpdates=function(v,g){return v(g)},Dn.useFormState=function(v,g,S){return m.H.useFormState(v,g,S)},Dn.useFormStatus=function(){return m.H.useHostTransitionStatus()},Dn.version="19.3.0",Dn}var J0;function OM(){if(J0)return rd.exports;J0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),rd.exports=LM(),rd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0;function zM(){if($0)return el;$0=1;var o=NM(),n=Cp(),a=OM();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)e+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var e=t,i=e;i&&!i.alternate;)e=i,(e.flags&4098)!==0&&(t=e.return),i=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function h(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function d(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function m(t){if(f(t)!==t)throw Error(s(188))}function _(t){var e=t.alternate;if(!e){if(e=f(t),e===null)throw Error(s(188));return e!==t?null:t}for(var i=t,r=e;;){var l=i.return;if(l===null)break;var c=l.alternate;if(c===null){if(r=l.return,r!==null){i=r;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===i)return m(l),t;if(c===r)return m(l),e;c=c.sibling}throw Error(s(188))}if(i.return!==r.return)i=l,r=c;else{for(var p=!1,E=l.child;E;){if(E===i){p=!0,i=l,r=c;break}if(E===r){p=!0,r=l,i=c;break}E=E.sibling}if(!p){for(E=c.child;E;){if(E===i){p=!0,i=c,r=l;break}if(E===r){p=!0,r=c,i=l;break}E=E.sibling}if(!p)throw Error(s(189))}}if(i.alternate!==r)throw Error(s(190))}if(i.tag!==3)throw Error(s(188));return i.stateNode.current===i?t:e}function v(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=v(t),e!==null)return e;t=t.sibling}return null}function g(t,e,i,r,l,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&i(t,r,l,c)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&g(t.child,e,i,r,l,c))return!0;t=t.sibling}return!1}function S(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function M(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function b(t){var e=[null,null],i=S(t);return i===null||R(e,t,i.child,{foundSelf:!1}),e}function R(t,e,i,r){for(;i!==null;){if(i===e)r.foundSelf=!0;else if(i.tag===5||i.tag===27||i.tag===6){if(r.foundSelf)return t[1]=i,!0;t[0]=i}else if((i.tag!==22||i.memoizedState===null)&&R(t,e,i.child,r))return!0;i=i.sibling}return!1}function y(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var x=null,P=null;function O(t,e,i){return t===i?!0:t===e?(x=t,!0):!1}function N(t,e,i){return t===i?(P=t,!1):t===e?(P!==null&&(x=t),!0):!1}function Q(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function G(t,e,i){for(var r=0,l=t;l;l=i(l))r++;l=0;for(var c=e;c;c=i(c))l++;for(;0<r-l;)t=i(t),r--;for(;0<l-r;)e=i(e),l--;for(;r--;){if(t===e||e!==null&&t===e.alternate)return t;t=i(t),e=i(e)}return null}var z=Object.assign,V=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),ut=Symbol.for("react.strict_mode"),ot=Symbol.for("react.profiler"),vt=Symbol.for("react.consumer"),pt=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),at=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),ht=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),Gt=Symbol.for("react.activity"),ee=Symbol.for("react.legacy_hidden"),Me=Symbol.for("react.memo_cache_sentinel"),w=Symbol.for("react.view_transition"),j=Symbol.for("react.recoverable"),gt=Symbol.iterator;function ct(t){return t===null||typeof t!="object"?null:(t=gt&&t[gt]||t["@@iterator"],typeof t=="function"?t:null)}var At=Symbol.for("react.client.reference");function Nt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===At?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case B:return"Fragment";case ot:return"Profiler";case ut:return"StrictMode";case at:return"Suspense";case Z:return"SuspenseList";case Gt:return"Activity";case w:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case C:return"Portal";case pt:return t.displayName||"Context";case vt:return(t._context.displayName||"Context")+".Consumer";case k:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ht:return e=t.displayName||null,e!==null?e:Nt(t.type)||"Memo";case St:e=t._payload,t=t._init;try{return Nt(t(e))}catch{}}return null}var Ft=Array.isArray,Tt=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ct=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,De={pending:!1,data:null,method:null,action:null},F=[],cn=-1;function ae(t){return{current:t}}function Kt(t){0>cn||(t.current=F[cn],F[cn]=null,cn--)}function wt(t,e){cn++,F[cn]=t.current,t.current=e}var ve=ae(null),qt=ae(null),U=ae(null),T=ae(null);function et(t,e){switch(wt(U,e),wt(qt,t),wt(ve,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?t0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=t0(e),t=e0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Kt(ve),wt(ve,t)}function _t(){Kt(ve),Kt(qt),Kt(U)}function yt(t){var e=t.memoizedState;e!==null&&(Us._currentValue=e.memoizedState,wt(T,t)),e=ve.current;var i=e0(e,t.type);e!==i&&(wt(qt,t),wt(ve,i))}function mt(t){qt.current===t&&(Kt(ve),Kt(qt)),T.current===t&&(Kt(T),Us._currentValue=De)}var Yt,Ot;function It(t){if(Yt===void 0)try{throw Error()}catch(i){var e=i.stack.trim().match(/\n( *(at )?)/);Yt=e&&e[1]||"",Ot=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yt+t+Ot}var pe=!1;function Et(t,e){if(!t||pe)return"";pe=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var dt=function(){throw Error()};if(Object.defineProperty(dt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(dt,[])}catch(Dt){var X=Dt}Reflect.construct(t,[],dt)}else{try{dt.call()}catch(Dt){X=Dt}dt=!1;try{var $=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),dt=!0,new t}finally{dt&&($!==void 0?Object.defineProperty(t.prototype,"props",$):delete t.prototype.props)}}}else{try{throw Error()}catch(Dt){X=Dt}(dt=t())&&typeof dt.catch=="function"&&dt.catch(function(){})}}catch(Dt){if(Dt&&X&&typeof Dt.stack=="string")return[Dt.stack,X.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),p=c[0],E=c[1];if(p&&E){var L=p.split(`
`),Y=E.split(`
`);for(l=r=0;r<L.length&&!L[r].includes("DetermineComponentFrameRoot");)r++;for(;l<Y.length&&!Y[l].includes("DetermineComponentFrameRoot");)l++;if(r===L.length||l===Y.length)for(r=L.length-1,l=Y.length-1;1<=r&&0<=l&&L[r]!==Y[l];)l--;for(;1<=r&&0<=l;r--,l--)if(L[r]!==Y[l]){if(r!==1||l!==1)do if(r--,l--,0>l||L[r]!==Y[l]){var nt=`
`+L[r].replace(" at new "," at ");return t.displayName&&nt.includes("<anonymous>")&&(nt=nt.replace("<anonymous>",t.displayName)),nt}while(1<=r&&0<=l);break}}}finally{pe=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?It(i):""}function Xt(t,e){switch(t.tag){case 26:case 27:case 5:return It(t.type);case 16:return It("Lazy");case 13:return t.child!==e&&e!==null?It("Suspense Fallback"):It("Suspense");case 19:return It("SuspenseList");case 0:case 15:return Et(t.type,!1);case 11:return Et(t.type.render,!1);case 1:return Et(t.type,!0);case 31:return It("Activity");case 30:return It("ViewTransition");default:return""}}function Qt(t){try{var e="",i=null;do e+=Xt(t,i),i=t,t=t.return;while(t);return e}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var te=Object.prototype.hasOwnProperty,Vt=o.unstable_scheduleCallback,he=o.unstable_cancelCallback,se=o.unstable_shouldYield,Ie=o.unstable_requestPaint,H=o.unstable_now,zt=o.unstable_getCurrentPriorityLevel,lt=o.unstable_ImmediatePriority,xt=o.unstable_UserBlockingPriority,Pt=o.unstable_NormalPriority,Bt=o.unstable_LowPriority,re=o.unstable_IdlePriority,Ke=o.log,gn=o.unstable_setDisableYieldValue,Ee=null,We=null;function _n(t){if(typeof Ke=="function"&&gn(t),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(Ee,t)}catch{}}var Nn=Math.clz32?Math.clz32:lo,vl=Math.log,Zi=Math.LN2;function lo(t){return t>>>=0,t===0?32:31-(vl(t)/Zi|0)|0}var cr=256,fr=262144,Ki=4194304;function Li(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Qi(t,e,i){var r=t.pendingLanes;if(r===0)return 0;var l=0,c=t.suspendedLanes,p=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~c,r!==0?l=Li(r):(p&=E,p!==0?l=Li(p):i||(i=E&~t,i!==0&&(l=Li(i))))):(E=r&~c,E!==0?l=Li(E):p!==0?l=Li(p):i||(i=r&~t,i!==0&&(l=Li(i)))),l===0?0:e!==0&&e!==l&&(e&c)===0&&(c=l&-l,i=e&-e,c>=i||c===32&&(i&4194048)!==0)?e:l}function Ta(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function uo(t,e){(e&8)!==0&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var r=31-Nn(i),l=1<<r;e|=t[r],i&=~l}return e}function Rc(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xl(){var t=Ki;return Ki<<=1,(Ki&62914560)===0&&(Ki=4194304),t}function co(t){for(var e=[],i=0;31>i;i++)e.push(t);return e}function hr(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Cc(t,e,i,r,l,c){var p=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var E=t.entanglements,L=t.expirationTimes,Y=t.hiddenUpdates;for(i=p&~i;0<i;){var nt=31-Nn(i),dt=1<<nt;E[nt]=0,L[nt]=-1;var X=Y[nt];if(X!==null)for(Y[nt]=null,nt=0;nt<X.length;nt++){var $=X[nt];$!==null&&($.lane&=-536870913)}i&=~dt}r!==0&&Sl(t,r,0),c!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=c&~(p&~e))}function Sl(t,e,i){t.pendingLanes|=e,t.suspendedLanes&=~e;var r=31-Nn(e);t.entangledLanes|=e,t.entanglements[r]=t.entanglements[r]|1073741824|i&261930}function A(t,e){var i=t.entangledLanes|=e;for(t=t.entanglements;i;){var r=31-Nn(i),l=1<<r;l&e|t[r]&e&&(t[r]|=e),i&=~l}}function W(t,e){var i=e&-e;return i=(i&42)!==0?1:it(i),(i&(t.suspendedLanes|e))!==0?0:i}function it(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function rt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function K(){var t=Ct.p;return t!==0?t:(t=window.event,t===void 0?32:B0(t.type))}function Mt(t,e){var i=Ct.p;try{return Ct.p=t,e()}finally{Ct.p=i}}var Rt=Math.random().toString(36).slice(2),bt="__reactFiber$"+Rt,Ut="__reactProps$"+Rt,Jt="__reactContainer$"+Rt,ne="__reactEvents$"+Rt,Zt="__reactListeners$"+Rt,Te="__reactHandles$"+Rt,Re="__reactResources$"+Rt,ke="__reactMarker$"+Rt,Ge="__reactLoad$"+Rt;function me(t){delete t[bt],delete t[Ut],delete t[Zt],delete t[Te]}function Wt(t){var e;if(e=t[bt])return e;for(var i=t.parentNode;i;){if(e=i[Jt]||i[bt]){if(i=e.alternate,e.child!==null||i!==null&&i.child!==null)for(t=v0(t);t!==null;){if(i=t[bt])return i;t=v0(t)}return e}t=i,i=t.parentNode}return null}function Qe(t){if(t=t[bt]||t[Jt]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function xe(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function vn(t){var e=t[Re];return e||(e=t[Re]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function je(t){t[ke]=!0}function Ln(t){t[Ge]=void 0}var ba=new Set,Ve={};function an(t,e){fn(t,e),fn(t+"Capture",e)}function fn(t,e){for(Ve[t]=e,t=0;t<e.length;t++)ba.add(e[t])}var En=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Tn={},jr={};function Ji(t){return te.call(jr,t)?!0:te.call(Tn,t)?!1:En.test(t)?jr[t]=!0:(Tn[t]=!0,!1)}var Ce=!1;function Hp(){var t=Ce;return Ce=!1,t}function yl(t,e,i){if(Ji(e))if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,i)}}function Ml(t,e,i){if(i===null)t.removeAttribute(e);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,i)}}function $i(t,e,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(e,i,r)}}function Kn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Gp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Yx(t,e,i){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,c=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(p){i=""+p,c.call(this,p)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(p){i=""+p},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function wc(t){if(!t._valueTracker){var e=Gp(t)?"checked":"value";t._valueTracker=Yx(t,e,""+t[e])}}function Vp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var i=e.getValue(),r="";return t&&(r=Gp(t)?t.checked?"true":"false":t.value),t=r,t!==i?(e.setValue(t),!0):!1}var Wx=/[\n"\\]/g;function li(t){return t.replace(Wx,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Dc(t,e,i,r,l,c,p,E){t.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?t.type=p:t.removeAttribute("type"),e!=null?p==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Kn(e)):t.value!==""+Kn(e)&&(t.value=""+Kn(e)):p!=="submit"&&p!=="reset"||t.removeAttribute("value"),e!=null?p==="number"&&t.value==e?Uc(t,Kn(t.value)):Uc(t,Kn(e)):i!=null?Uc(t,Kn(i)):r!=null&&t.removeAttribute("value"),l==null&&c!=null&&(t.defaultChecked=!!c),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+Kn(E):t.removeAttribute("name")}function Xp(t,e,i,r,l,c,p,E){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),e!=null||i!=null){if(!(c!=="submit"&&c!=="reset"||e!=null)){wc(t);return}i=i!=null?""+Kn(i):"",e=e!=null?""+Kn(e):i,E||e===t.value||(t.value=e),t.defaultValue=e}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.name=p),wc(t)}function Uc(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function Zr(t,e,i,r){if(t=t.options,e){e={};for(var l=0;l<i.length;l++)e["$"+i[l]]=!0;for(i=0;i<t.length;i++)l=e.hasOwnProperty("$"+t[i].value),t[i].selected!==l&&(t[i].selected=l),l&&r&&(t[i].defaultSelected=!0)}else{for(i=""+Kn(i),e=null,l=0;l<t.length;l++){if(t[l].value===i){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function kp(t,e,i){if(e!=null&&(e=""+Kn(e),e!==t.value&&(t.value=e),i==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=i!=null?""+Kn(i):""}function qp(t,e,i,r){if(e==null){if(r!=null){if(i!=null)throw Error(s(92));if(Ft(r)){if(1<r.length)throw Error(s(93));r=r[0]}i=r}i==null&&(i=""),e=i}i=Kn(e),t.defaultValue=i,r=t.textContent,r===i&&r!==""&&r!==null&&(t.value=r),wc(t)}function Kr(t,e){if(e){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=e;return}}t.textContent=e}var jx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yp(t,e,i){var r=e.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,i):typeof i!="number"||i===0||jx.has(e)?e==="float"?t.cssFloat=i:t[e]=(""+i).trim():t[e]=i+"px"}function Wp(t,e,i){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,i!=null){for(var r in i)!i.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",Ce=!0);for(var l in e)r=e[l],e.hasOwnProperty(l)&&i[l]!==r&&(Yp(t,l,r),Ce=!0)}else for(var c in e)e.hasOwnProperty(c)&&Yp(t,c,e[c])}function Nc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Kx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function El(t){return Kx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Oi(){}var Lc=null;function Oc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qr=null,Jr=null;function jp(t){var e=Qe(t);if(e&&(t=e.stateNode)){var i=t[Ut]||null;t:switch(t=e.stateNode,e.type){case"input":if(Dc(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),e=i.name,i.type==="radio"&&e!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+li(""+e)+'"][type="radio"]'),e=0;e<i.length;e++){var r=i[e];if(r!==t&&r.form===t.form){var l=r[Ut]||null;if(!l)throw Error(s(90));Dc(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<i.length;e++)r=i[e],r.form===t.form&&Vp(r)}break t;case"textarea":kp(t,i.value,i.defaultValue);break t;case"select":e=i.value,e!=null&&Zr(t,!!i.multiple,e,!1)}}}var zc=!1;function Zp(t,e,i){if(zc)return t(e,i);zc=!0;try{var r=t(e);return r}finally{if(zc=!1,(Qr!==null||Jr!==null)&&(Eu(),Qr&&(e=Qr,t=Jr,Jr=Qr=null,jp(e),t)))for(e=0;e<t.length;e++)jp(t[e])}}function fo(t,e){var i=t.stateNode;if(i===null)return null;var r=i[Ut]||null;if(r===null)return null;i=r[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(s(231,e,typeof i));return i}var ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pc=!1;if(ta)try{var ho={};Object.defineProperty(ho,"passive",{get:function(){Pc=!0}}),window.addEventListener("test",ho,ho),window.removeEventListener("test",ho,ho)}catch{Pc=!1}var Aa=null,Ic=null,Tl=null;function Kp(){if(Tl)return Tl;var t,e=Ic,i=e.length,r,l="value"in Aa?Aa.value:Aa.textContent,c=l.length;for(t=0;t<i&&e[t]===l[t];t++);var p=i-t;for(r=1;r<=p&&e[i-r]===l[c-r];r++);return Tl=l.slice(t,1<r?1-r:void 0)}function bl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Al(){return!0}function Qp(){return!1}function In(t){function e(i,r,l,c,p){this._reactName=i,this._targetInst=l,this.type=r,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(i=t[E],this[E]=i?i(c):c[E]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Al:Qp,this.isPropagationStopped=Qp,this}return z(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Al)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Al)},persist:function(){},isPersistent:Al}),e}var Ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rl=In(Ra),po=z({},Ra,{view:0,detail:0}),Qx=In(po),Bc,Fc,mo,Cl=z({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==mo&&(mo&&t.type==="mousemove"?(Bc=t.screenX-mo.screenX,Fc=t.screenY-mo.screenY):Fc=Bc=0,mo=t),Bc)},movementY:function(t){return"movementY"in t?t.movementY:Fc}}),Jp=In(Cl),Jx=z({},Cl,{dataTransfer:0}),$x=In(Jx),tS=z({},po,{relatedTarget:0}),Hc=In(tS),eS=z({},Ra,{animationName:0,elapsedTime:0,pseudoElement:0}),nS=In(eS),iS=z({},Ra,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),aS=In(iS),rS=z({},Ra,{data:0}),$p=In(rS),sS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=lS[t])?!!e[t]:!1}function Gc(){return uS}var cS=z({},po,{key:function(t){if(t.key){var e=sS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?oS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gc,charCode:function(t){return t.type==="keypress"?bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fS=In(cS),hS=z({},Cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tm=In(hS),dS=z({},Ra,{submitter:0}),pS=In(dS),mS=z({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gc}),gS=In(mS),_S=z({},Ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),vS=In(_S),xS=z({},Cl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),SS=In(xS),yS=z({},Ra,{newState:0,oldState:0,source:0}),MS=In(yS),ES=[9,13,27,32],Vc=ta&&"CompositionEvent"in window,go=null;ta&&"documentMode"in document&&(go=document.documentMode);var TS=ta&&"TextEvent"in window&&!go,em=ta&&(!Vc||go&&8<go&&11>=go),nm=" ",im=!1;function am(t,e){switch(t){case"keyup":return ES.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $r=!1;function bS(t,e){switch(t){case"compositionend":return rm(e);case"keypress":return e.which!==32?null:(im=!0,nm);case"textInput":return t=e.data,t===nm&&im?null:t;default:return null}}function AS(t,e){if($r)return t==="compositionend"||!Vc&&am(t,e)?(t=Kp(),Tl=Ic=Aa=null,$r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return em&&e.locale!=="ko"?null:e.data;default:return null}}var RS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!RS[t.type]:e==="textarea"}function om(t,e,i,r){Qr?Jr?Jr.push(r):Jr=[r]:Qr=r,e=wu(e,"onChange"),0<e.length&&(i=new Rl("onChange","change",null,i,r),t.push({event:i,listeners:e}))}var _o=null,vo=null;function CS(t){j_(t,0)}function wl(t){var e=xe(t);if(Vp(e))return t}function lm(t,e){if(t==="change")return e}var um=!1;if(ta){var Xc;if(ta){var kc="oninput"in document;if(!kc){var cm=document.createElement("div");cm.setAttribute("oninput","return;"),kc=typeof cm.oninput=="function"}Xc=kc}else Xc=!1;um=Xc&&(!document.documentMode||9<document.documentMode)}function fm(){_o&&(_o.detachEvent("onpropertychange",hm),vo=_o=null)}function hm(t){if(t.propertyName==="value"&&wl(vo)){var e=[];om(e,vo,t,Oc(t)),Zp(CS,e)}}function wS(t,e,i){t==="focusin"?(fm(),_o=e,vo=i,_o.attachEvent("onpropertychange",hm)):t==="focusout"&&fm()}function DS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wl(vo)}function US(t,e){if(t==="click")return wl(e)}function NS(t,e){if(t==="input"||t==="change")return wl(e)}function LS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qn=typeof Object.is=="function"?Object.is:LS;function xo(t,e){if(Qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var i=Object.keys(t),r=Object.keys(e);if(i.length!==r.length)return!1;for(r=0;r<i.length;r++){var l=i[r];if(!te.call(e,l)||!Qn(t[l],e[l]))return!1}return!0}function qc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function dm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pm(t,e){var i=dm(t);t=0;for(var r;i;){if(i.nodeType===3){if(r=t+i.textContent.length,t<=e&&r>=e)return{node:i,offset:e-t};t=r}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=dm(i)}}function mm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?mm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function gm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=qc(t.document);e instanceof t.HTMLIFrameElement;){try{var i=typeof e.contentWindow.location.href=="string"}catch{i=!1}if(i)t=e.contentWindow;else break;e=qc(t.document)}return e}function Yc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var OS=ta&&"documentMode"in document&&11>=document.documentMode,ts=null,Wc=null,So=null,jc=!1;function _m(t,e,i){var r=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;jc||ts==null||ts!==qc(r)||(r=ts,"selectionStart"in r&&Yc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),So&&xo(So,r)||(So=r,r=wu(Wc,"onSelect"),0<r.length&&(e=new Rl("onSelect","select",null,e,i),t.push({event:e,listeners:r}),e.target=ts)))}function dr(t,e){var i={};return i[t.toLowerCase()]=e.toLowerCase(),i["Webkit"+t]="webkit"+e,i["Moz"+t]="moz"+e,i}var es={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionrun:dr("Transition","TransitionRun"),transitionstart:dr("Transition","TransitionStart"),transitioncancel:dr("Transition","TransitionCancel"),transitionend:dr("Transition","TransitionEnd")},Zc={},vm={};ta&&(vm=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function pr(t){if(Zc[t])return Zc[t];if(!es[t])return t;var e=es[t],i;for(i in e)if(e.hasOwnProperty(i)&&i in vm)return Zc[t]=e[i];return t}var xm=pr("animationend"),Sm=pr("animationiteration"),ym=pr("animationstart"),zS=pr("transitionrun"),PS=pr("transitionstart"),IS=pr("transitioncancel"),Mm=pr("transitionend"),Em=new Map,Kc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Kc.push("scrollEnd");function xi(t,e){Em.set(t,e),an(e,[t])}var BS=0;function ea(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=Ei.identifierPrefix;var i=BS++;return t="_"+t+"t_"+i.toString(32)+"_",e.autoName=t}function Tm(t){if(t==null||typeof t=="string")return t;var e=null,i=ys;if(i!==null)for(var r=0;r<i.length;r++){var l=t[i[r]];if(l!=null){if(l==="none")return"none";e=e==null?l:e+(" "+l)}}return e??t.default}function na(t,e){return t=Tm(t),e=Tm(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var Dl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ui=[],ns=0,Qc=0;function Ul(){for(var t=ns,e=Qc=ns=0;e<t;){var i=ui[e];ui[e++]=null;var r=ui[e];ui[e++]=null;var l=ui[e];ui[e++]=null;var c=ui[e];if(ui[e++]=null,r!==null&&l!==null){var p=r.pending;p===null?l.next=l:(l.next=p.next,p.next=l),r.pending=l}c!==0&&bm(i,l,c)}}function Nl(t,e,i,r){ui[ns++]=t,ui[ns++]=e,ui[ns++]=i,ui[ns++]=r,Qc|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Jc(t,e,i,r){return Nl(t,e,i,r),Ll(t)}function mr(t,e){return Nl(t,null,null,e),Ll(t)}function bm(t,e,i){t.lanes|=i;var r=t.alternate;r!==null&&(r.lanes|=i);for(var l=!1,c=t.return;c!==null;)c.childLanes|=i,r=c.alternate,r!==null&&(r.childLanes|=i),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(l=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,l&&e!==null&&(l=31-Nn(i),t=c.hiddenUpdates,r=t[l],r===null?t[l]=[e]:r.push(e),e.lane=i|536870912),c):null}function Ll(t){if(50<Vo)throw Vo=0,Mu=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var is={};function FS(t,e,i,r){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,e,i,r){return new FS(t,e,i,r)}function $c(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ia(t,e){var i=t.alternate;return i===null?(i=Vn(t.tag,e,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=e,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&1206910976,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,e=t.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function Am(t,e){t.flags&=1206910978;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,e=i.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ol(t,e,i,r,l,c){var p=0;if(r=t,typeof r=="function")$c(r)&&(p=1);else if(typeof r=="string")p=dM(t,i,ve.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case Gt:return t=Vn(31,i,e,l),t.elementType=Gt,t.lanes=c,t;case B:return gr(i.children,l,c,e);case ut:p=8,l|=24;break;case ot:return t=Vn(12,i,e,l|2),t.elementType=ot,t.lanes=c,t;case at:return t=Vn(13,i,e,l),t.elementType=at,t.lanes=c,t;case Z:return t=Vn(19,i,e,l),t.elementType=Z,t.lanes=c,t;case ee:case w:return t=l|32,t=Vn(30,i,e,t),t.elementType=w,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case pt:p=10;break t;case vt:p=9;break t;case k:p=11;break t;case ht:p=14;break t;case St:p=16,r=null;break t}p=29,i=Error(s(130,t===null?"null":typeof t,"")),r=null}return e=Vn(p,i,e,l),e.elementType=t,e.type=r,e.lanes=c,e}function gr(t,e,i,r){return t=Vn(7,t,r,e),t.lanes=i,t}function tf(t,e,i){return t=Vn(6,t,null,e),t.lanes=i,t}function Rm(t){var e=Vn(18,null,null,0);return e.stateNode=t,e}function ef(t,e,i){return e=Vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=i,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Cm=new WeakMap;function ci(t,e){if(typeof t=="object"&&t!==null){var i=Cm.get(t);return i!==void 0?i:(e={value:t,source:e,stack:Qt(e)},Cm.set(t,e),e)}return{value:t,source:e,stack:Qt(e)}}var as=[],rs=0,zl=null,yo=0,fi=[],hi=0,Ca=null,zi=1,Pi="";function aa(t,e){as[rs++]=yo,as[rs++]=zl,zl=t,yo=e}function wm(t,e,i){fi[hi++]=zi,fi[hi++]=Pi,fi[hi++]=Ca,Ca=t;var r=zi;t=Pi;var l=32-Nn(r)-1;r&=~(1<<l),i+=1;var c=32-Nn(e)+l;if(30<c){var p=l-l%5;c=(r&(1<<p)-1).toString(32),r>>=p,l-=p,zi=1<<32-Nn(e)+l|i<<l|r,Pi=c+t}else zi=1<<c|i<<l|r,Pi=t}function Pl(t){t.return!==null&&(aa(t,1),wm(t,1,0))}function nf(t){for(;t===zl;)zl=as[--rs],as[rs]=null,yo=as[--rs],as[rs]=null;for(;t===Ca;)Ca=fi[--hi],fi[hi]=null,Pi=fi[--hi],fi[hi]=null,zi=fi[--hi],fi[hi]=null}function Dm(t,e){fi[hi++]=zi,fi[hi++]=Pi,fi[hi++]=Ca,zi=e.id,Pi=e.overflow,Ca=t}var xn=null,qe=null,fe=!1,wa=null,di=!1,af=Error(s(519));function Da(t){var e=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Mo(ci(e,t)),af}function Um(t){var e=t.stateNode,i=t.type,r=t.memoizedProps;switch(e[bt]=t,e[Ut]=r,i){case"dialog":_e("cancel",e),_e("close",e);break;case"iframe":case"object":case"embed":_e("load",e);break;case"video":case"audio":for(i=0;i<ko.length;i++)_e(ko[i],e);break;case"source":_e("error",e);break;case"img":case"image":case"link":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"input":_e("invalid",e),Xp(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":_e("invalid",e);break;case"textarea":_e("invalid",e),qp(e,r.value,r.defaultValue,r.children)}i=r.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||e.textContent===""+i||r.suppressHydrationWarning===!0||J_(e.textContent,i)?(r.popover!=null&&(_e("beforetoggle",e),_e("toggle",e)),r.onScroll!=null&&_e("scroll",e),r.onScrollEnd!=null&&_e("scrollend",e),r.onClick!=null&&(e.onclick=Oi),e=!0):e=!1,e||Da(t,!0)}function Il(t){for(xn=t.return;xn;)switch(xn.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:xn=xn.return}}function ss(t){if(t!==xn)return!1;if(!fe)return Il(t),fe=!0,!1;var e=t.tag,i;if((i=e!==3&&e!==27)&&((i=e===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||Oh(t.type,t.memoizedProps)),i=!i),i&&qe&&Da(t),Il(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));qe=_0(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));qe=_0(t)}else e===27?(e=qe,Ya(t.type)?(t=Xh,Xh=null,qe=t):qe=e):qe=xn?mi(t.stateNode.nextSibling):null;return!0}function _r(){qe=xn=null,fe=!1}function rf(){var t=wa;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),wa=null),t}function Mo(t){wa===null?wa=[t]:wa.push(t)}var sf=ae(null),vr=null,ra=null;function Ua(t,e,i){wt(sf,e._currentValue),e._currentValue=i}function sa(t){t._currentValue=sf.current,Kt(sf)}function Bl(t,e,i){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===i)break;t=t.return}}function of(t,e,i,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){var p=l.child;c=c.firstContext;t:for(;c!==null;){var E=c;c=l;for(var L=0;L<e.length;L++)if(E.context===e[L]){c.lanes|=i,E=c.alternate,E!==null&&(E.lanes|=i),Bl(c.return,i,t),r||(p=null);break t}c=E.next}}else if(l.tag===18){if(p=l.return,p===null)throw Error(s(341));p.lanes|=i,c=p.alternate,c!==null&&(c.lanes|=i),Bl(p,i,t),p=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=i,p=l.alternate,p!==null&&(p.lanes|=i),Bl(l.return,i,t),p=l.child,p=p!==null?p.sibling:null):p=l.child;if(p!==null)p.return=l;else for(p=l;p!==null;){if(p===t){p=null;break}if(l=p.sibling,l!==null){l.return=p.return,p=l;break}p=p.return}l=p}}function xr(t,e,i,r){t=null;for(var l=e,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var p=l.alternate;if(p===null)throw Error(s(387));if(p=p.memoizedProps,p!==null){var E=l.type;Qn(l.pendingProps.value,p.value)||(t!==null?t.push(E):t=[E])}}else if(l===T.current){if(p=l.alternate,p===null)throw Error(s(387));p.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Us):t=[Us])}l=l.return}return t!==null&&of(e,t,i,r),e.flags|=262144,t!==null}function Fl(t){for(t=t.firstContext;t!==null;){if(!Qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Sr(t){vr=t,ra=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function bn(t){return Nm(vr,t)}function Hl(t,e){return vr===null&&Sr(t),Nm(t,e)}function Nm(t,e){var i=e._currentValue;if(e={context:e,memoizedValue:i,next:null},ra===null){if(t===null)throw Error(s(308));ra=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else ra=ra.next=e;return i}var HS=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(i,r){t.push(r)}};this.abort=function(){e.aborted=!0,t.forEach(function(i){return i()})}},GS=o.unstable_scheduleCallback,VS=o.unstable_NormalPriority,rn={$$typeof:pt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lf(){return{controller:new HS,data:new Map,refCount:0}}function Eo(t){t.refCount--,t.refCount===0&&GS(VS,function(){t.controller.abort()})}function Lm(t,e){if((t.pendingLanes&4194048)!==0){var i=t.transitionTypes;for(i===null&&(i=t.transitionTypes=[]),t=0;t<e.length;t++){var r=e[t];i.indexOf(r)===-1&&i.push(r)}}}var To=null;function XS(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var bo=null,uf=0,yr=0,os=null;function kS(t,e){if(bo===null){var i=bo=[];uf=0,yr=bh(),os={status:"pending",value:void 0,then:function(r){i.push(r)}}}return uf++,e.then(Om,Om),e}function Om(){if(--uf===0&&(To=null,bo!==null)){os!==null&&(os.status="fulfilled");var t=bo;bo=null,yr=0,os=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function qS(t,e){var i=[],r={status:"pending",value:null,reason:null,then:function(l){i.push(l)}};return t.then(function(){r.status="fulfilled",r.value=e;for(var l=0;l<i.length;l++)(0,i[l])(e)},function(l){for(r.status="rejected",r.reason=l,l=0;l<i.length;l++)(0,i[l])(void 0)}),r}var zm=Tt.S;Tt.S=function(t,e){if(R_=H(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&kS(t,e),To!==null)for(var i=bs;i!==null;)Lm(i,To),i=i.next;if(i=t.types,i!==null){for(var r=bs;r!==null;)Lm(r,i),r=r.next;if(yr!==0){r=To,r===null&&(r=To=[]);for(var l=0;l<i.length;l++){var c=i[l];r.indexOf(c)===-1&&r.push(c)}}}zm!==null&&zm(t,e)};var Mr=ae(null);function cf(){var t=Mr.current;return t!==null?t:Xe.pooledCache}function Gl(t,e){e===null?wt(Mr,Mr.current):wt(Mr,e.pool)}function Pm(){var t=cf();return t===null?null:{parent:rn._currentValue,pool:t}}var ls=Error(s(460)),ff=Error(s(474)),Vl=Error(s(542)),Xl={then:function(){}};function Im(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Bm(t,e,i){switch(i=t[i],i===void 0?t.push(e):i!==e&&(e.then(Oi,Oi),e=i),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Hm(t),t===void 0&&!("reason"in e)?Error(s(600)):t;default:if(typeof e.status=="string")e.then(Oi,Oi);else{if(t=Xe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(r){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=r}},function(r){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Hm(t),t}throw Tr=e,ls}}function Er(t){try{var e=t._init;return e(t._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Tr=i,ls):i}}var Tr=null;function Fm(){if(Tr===null)throw Error(s(459));var t=Tr;return Tr=null,t}function Hm(t){if(t===ls||t===Vl)throw Error(s(483))}var us=null,Ao=0;function kl(t){var e=Ao;return Ao+=1,us===null&&(us=[]),Bm(us,t,e)}function Na(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function ql(t,e){throw e.$$typeof===V?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Gm(t){function e(q,I){if(t){var J=q.deletions;J===null?(q.deletions=[I],q.flags|=16):J.push(I)}}function i(q,I){if(!t)return null;for(;I!==null;)e(q,I),I=I.sibling;return null}function r(q){for(var I=new Map;q!==null;)q.key===null?I.set(q.index,q):I.set(q.key,q),q=q.sibling;return I}function l(q,I){return q=ia(q,I),q.index=0,q.sibling=null,q}function c(q,I,J){return q.index=J,t?(J=q.alternate,J!==null?(J=J.index,J<I?(q.flags|=2,I):J):(q.flags|=134217730,I)):(q.flags|=1048576,I)}function p(q){return t&&q.alternate===null&&(q.flags|=134217730),q}function E(q,I,J,ft){return I===null||I.tag!==6?(I=tf(J,q.mode,ft),I.return=q,I):(I=l(I,J),I.return=q,I)}function L(q,I,J,ft){var Ht=J.type;return Ht===B?(q=nt(q,I,J.props.children,ft,J.key),Na(q,J),q):I!==null&&(I.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===St&&Er(Ht)===I.type)?(I=l(I,J.props),Na(I,J),I.return=q,I):(I=Ol(J.type,J.key,J.props,null,q.mode,ft),Na(I,J),I.return=q,I)}function Y(q,I,J,ft){return I===null||I.tag!==4||I.stateNode.containerInfo!==J.containerInfo||I.stateNode.implementation!==J.implementation?(I=ef(J,q.mode,ft),I.return=q,I):(I=l(I,J.children||[]),I.return=q,I)}function nt(q,I,J,ft,Ht){return I===null||I.tag!==7?(I=gr(J,q.mode,ft,Ht),I.return=q,I):(I=l(I,J),I.return=q,I)}function dt(q,I,J){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return I=tf(""+I,q.mode,J),I.return=q,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case D:return J=Ol(I.type,I.key,I.props,null,q.mode,J),Na(J,I),J.return=q,J;case C:return I=ef(I,q.mode,J),I.return=q,I;case St:return I=Er(I),dt(q,I,J)}if(Ft(I)||ct(I))return I=gr(I,q.mode,J,null),I.return=q,I;if(typeof I.then=="function")return dt(q,kl(I),J);if(I.$$typeof===pt)return dt(q,Hl(q,I),J);ql(q,I)}return null}function X(q,I,J,ft){var Ht=I!==null?I.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ht!==null?null:E(q,I,""+J,ft);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case D:return J.key===Ht?L(q,I,J,ft):null;case C:return J.key===Ht?Y(q,I,J,ft):null;case St:return J=Er(J),X(q,I,J,ft)}if(Ft(J)||ct(J))return Ht!==null?null:nt(q,I,J,ft,null);if(typeof J.then=="function")return X(q,I,kl(J),ft);if(J.$$typeof===pt)return X(q,I,Hl(q,J),ft);ql(q,J)}return null}function $(q,I,J,ft,Ht){if(typeof ft=="string"&&ft!==""||typeof ft=="number"||typeof ft=="bigint")return q=q.get(J)||null,E(I,q,""+ft,Ht);if(typeof ft=="object"&&ft!==null){switch(ft.$$typeof){case D:return q=q.get(ft.key===null?J:ft.key)||null,L(I,q,ft,Ht);case C:return q=q.get(ft.key===null?J:ft.key)||null,Y(I,q,ft,Ht);case St:return ft=Er(ft),$(q,I,J,ft,Ht)}if(Ft(ft)||ct(ft))return q=q.get(J)||null,nt(I,q,ft,Ht,null);if(typeof ft.then=="function")return $(q,I,J,kl(ft),Ht);if(ft.$$typeof===pt)return $(q,I,J,Hl(I,ft),Ht);ql(I,ft)}return null}function Dt(q,I,J,ft){for(var Ht=null,ye=null,jt=I,$t=I=0,ln=null;jt!==null&&$t<J.length;$t++){jt.index>$t?(ln=jt,jt=null):ln=jt.sibling;var Ae=X(q,jt,J[$t],ft);if(Ae===null){jt===null&&(jt=ln);break}t&&jt&&Ae.alternate===null&&e(q,jt),I=c(Ae,I,$t),ye===null?Ht=Ae:ye.sibling=Ae,ye=Ae,jt=ln}if($t===J.length)return i(q,jt),fe&&aa(q,$t),Ht;if(jt===null){for(;$t<J.length;$t++)jt=dt(q,J[$t],ft),jt!==null&&(I=c(jt,I,$t),ye===null?Ht=jt:ye.sibling=jt,ye=jt);return fe&&aa(q,$t),Ht}for(jt=r(jt);$t<J.length;$t++)ln=$(jt,q,$t,J[$t],ft),ln!==null&&(t&&(Ae=ln.alternate,Ae!==null&&jt.delete(Ae.key===null?$t:Ae.key)),I=c(ln,I,$t),ye===null?Ht=ln:ye.sibling=ln,ye=ln);return t&&jt.forEach(function(Qa){return e(q,Qa)}),fe&&aa(q,$t),Ht}function kt(q,I,J,ft){if(J==null)throw Error(s(151));for(var Ht=null,ye=null,jt=I,$t=I=0,ln=null,Ae=J.next();jt!==null&&!Ae.done;$t++,Ae=J.next()){jt.index>$t?(ln=jt,jt=null):ln=jt.sibling;var Qa=X(q,jt,Ae.value,ft);if(Qa===null){jt===null&&(jt=ln);break}t&&jt&&Qa.alternate===null&&e(q,jt),I=c(Qa,I,$t),ye===null?Ht=Qa:ye.sibling=Qa,ye=Qa,jt=ln}if(Ae.done)return i(q,jt),fe&&aa(q,$t),Ht;if(jt===null){for(;!Ae.done;$t++,Ae=J.next())Ae=dt(q,Ae.value,ft),Ae!==null&&(I=c(Ae,I,$t),ye===null?Ht=Ae:ye.sibling=Ae,ye=Ae);return fe&&aa(q,$t),Ht}for(jt=r(jt);!Ae.done;$t++,Ae=J.next())Ae=$(jt,q,$t,Ae.value,ft),Ae!==null&&(t&&(ln=Ae.alternate,ln!==null&&jt.delete(ln.key===null?$t:ln.key)),I=c(Ae,I,$t),ye===null?Ht=Ae:ye.sibling=Ae,ye=Ae);return t&&jt.forEach(function(bM){return e(q,bM)}),fe&&aa(q,$t),Ht}function le(q,I,J,ft){if(typeof J=="object"&&J!==null&&J.type===B&&J.key===null&&J.props.ref===void 0&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case D:t:{for(var Ht=J.key;I!==null;){if(I.key===Ht){if(Ht=J.type,Ht===B){if(I.tag===7){i(q,I.sibling),ft=l(I,J.props.children),Na(ft,J),ft.return=q,q=ft;break t}}else if(I.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===St&&Er(Ht)===I.type){i(q,I.sibling),ft=l(I,J.props),Na(ft,J),ft.return=q,q=ft;break t}i(q,I);break}else e(q,I);I=I.sibling}J.type===B?(ft=gr(J.props.children,q.mode,ft,J.key),Na(ft,J),ft.return=q,q=ft):(ft=Ol(J.type,J.key,J.props,null,q.mode,ft),Na(ft,J),ft.return=q,q=ft)}return p(q);case C:t:{for(Ht=J.key;I!==null;){if(I.key===Ht)if(I.tag===4&&I.stateNode.containerInfo===J.containerInfo&&I.stateNode.implementation===J.implementation){i(q,I.sibling),ft=l(I,J.children||[]),ft.return=q,q=ft;break t}else{i(q,I);break}else e(q,I);I=I.sibling}ft=ef(J,q.mode,ft),ft.return=q,q=ft}return p(q);case St:return J=Er(J),le(q,I,J,ft)}if(Ft(J))return Dt(q,I,J,ft);if(ct(J)){if(Ht=ct(J),typeof Ht!="function")throw Error(s(150));return J=Ht.call(J),kt(q,I,J,ft)}if(typeof J.then=="function")return le(q,I,kl(J),ft);if(J.$$typeof===pt)return le(q,I,Hl(q,J),ft);ql(q,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,I!==null&&I.tag===6?(i(q,I.sibling),ft=l(I,J),ft.return=q,q=ft):(i(q,I),ft=tf(J,q.mode,ft),ft.return=q,q=ft),p(q)):i(q,I)}return function(q,I,J,ft){try{Ao=0;var Ht=le(q,I,J,ft);return us=null,Ht}catch(jt){if(jt===ls||jt===Vl)throw jt;var ye=Vn(29,jt,null,q.mode);return ye.lanes=ft,ye.return=q,ye}finally{}}}var br=Gm(!0),Vm=Gm(!1),La=!1;function hf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function df(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Oa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function za(t,e,i){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Ue&2)!==0){var l=r.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),r.pending=e,e=Ll(t),bm(t,null,i),e}return Nl(t,r,e,i),Ll(t)}function Ro(t,e,i){if(e=e.updateQueue,e!==null&&(e=e.shared,(i&4194048)!==0)){var r=e.lanes;r&=t.pendingLanes,i|=r,e.lanes=i,A(t,i)}}function pf(t,e){var i=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,i===r)){var l=null,c=null;if(i=i.firstBaseUpdate,i!==null){do{var p={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};c===null?l=c=p:c=c.next=p,i=i.next}while(i!==null);c===null?l=c=e:c=c.next=e}else l=c=e;i={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=e:t.next=e,i.lastBaseUpdate=e}var mf=!1;function Co(){if(mf){var t=os;if(t!==null)throw t}}function wo(t,e,i,r){mf=!1;var l=t.updateQueue;La=!1;var c=l.firstBaseUpdate,p=l.lastBaseUpdate,E=l.shared.pending;if(E!==null){l.shared.pending=null;var L=E,Y=L.next;L.next=null,p===null?c=Y:p.next=Y,p=L;var nt=t.alternate;nt!==null&&(nt=nt.updateQueue,E=nt.lastBaseUpdate,E!==p&&(E===null?nt.firstBaseUpdate=Y:E.next=Y,nt.lastBaseUpdate=L))}if(c!==null){var dt=l.baseState;p=0,nt=Y=L=null,E=c;do{var X=E.lane&-536870913,$=X!==E.lane;if($?(Se&X)===X:(r&X)===X){X!==0&&X===yr&&(mf=!0),nt!==null&&(nt=nt.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Dt=t,kt=E;X=e;var le=i;switch(kt.tag){case 1:if(Dt=kt.payload,typeof Dt=="function"){dt=Dt.call(le,dt,X);break t}dt=Dt;break t;case 3:Dt.flags=Dt.flags&-65537|128;case 0:if(Dt=kt.payload,X=typeof Dt=="function"?Dt.call(le,dt,X):Dt,X==null)break t;dt=z({},dt,X);break t;case 2:La=!0}}X=E.callback,X!==null&&(t.flags|=64,$&&(t.flags|=8192),$=l.callbacks,$===null?l.callbacks=[X]:$.push(X))}else $={lane:X,tag:E.tag,payload:E.payload,callback:E.callback,next:null},nt===null?(Y=nt=$,L=dt):nt=nt.next=$,p|=X;if(E=E.next,E===null){if(E=l.shared.pending,E===null)break;$=E,E=$.next,$.next=null,l.lastBaseUpdate=$,l.shared.pending=null}}while(!0);nt===null&&(L=dt),l.baseState=L,l.firstBaseUpdate=Y,l.lastBaseUpdate=nt,c===null&&(l.shared.lanes=0),Va|=p,t.lanes=p,t.memoizedState=dt}}function Xm(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function km(t,e){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)Xm(i[t],e)}var Pa=ae(null),Yl=ae(0);function qm(t,e){t=fa,wt(Yl,t),wt(Pa,e),fa=t|e.baseLanes}function gf(){wt(Yl,fa),wt(Pa,Pa.current)}function _f(){fa=Yl.current,Kt(Pa),Kt(Yl)}var An=ae(null),On=null;function Ia(t){var e=t.alternate;wt(Rn,Rn.current&1),wt(An,t),On===null&&(e===null||Pa.current!==null||e.memoizedState!==null)&&(On=t)}function vf(t){wt(Rn,Rn.current),wt(An,t),On===null&&(On=t)}function Ym(t){t.tag===22?(wt(Rn,Rn.current),wt(An,t),On===null&&(On=t)):Ba()}function Ba(){wt(Rn,Rn.current),wt(An,An.current)}function Jn(t){Kt(An),On===t&&(On=null),Kt(Rn)}var Rn=ae(0);function Do(t,e){wt(An,An.current),wt(Rn,e)}function xf(t){Kt(Rn),Kt(An),On===t&&(On=null)}function Wl(t){for(var e=t;e!==null;){if(e.tag===13){var i=e.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Gh(i)||Vh(i)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var oa=0,oe=null,Be=null,sn=null,jl=!1,cs=!1,Ar=!1,Zl=0,Uo=0,fs=null,YS=0;function tn(){throw Error(s(321))}function Sf(t,e){if(e===null)return!1;for(var i=0;i<e.length&&i<t.length;i++)if(!Qn(t[i],e[i]))return!1;return!0}function yf(t,e,i,r,l,c){return oa=c,oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Tt.H=t===null||t.memoizedState===null?wg:Dg,Ar=!1,c=i(r,l),Ar=!1,cs&&(c=jm(e,i,r,l)),Wm(t),c}function Wm(t){Tt.H=nu;var e=Be!==null&&Be.next!==null;if(oa=0,sn=Be=oe=null,jl=!1,Uo=0,fs=null,e)throw Error(s(300));t===null||on||(t=t.dependencies,t!==null&&Fl(t)&&(on=!0))}function jm(t,e,i,r){oe=t;var l=0;do{if(cs&&(fs=null),Uo=0,cs=!1,25<=l)throw Error(s(301));if(l+=1,sn=Be=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}Tt.H=ty,c=e(i,r)}while(cs);return c}function WS(){var t=Tt.H,e=t.useState()[0];return e=typeof e.then=="function"?No(e):e,t=t.useState()[0],(Be!==null?Be.memoizedState:null)!==t&&(oe.flags|=1024),e}function Mf(){var t=Zl!==0;return Zl=0,t}function Ef(t,e,i){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i}function Tf(t){if(jl){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}jl=!1}oa=0,sn=Be=oe=null,cs=!1,Uo=Zl=0,fs=null}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?oe.memoizedState=sn=t:sn=sn.next=t,sn}function nn(){if(Be===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var e=sn===null?oe.memoizedState:sn.next;if(e!==null)sn=e,Be=t;else{if(t===null)throw oe.alternate===null?Error(s(467)):Error(s(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},sn===null?oe.memoizedState=sn=t:sn=sn.next=t}return sn}function Kl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(t){var e=Uo;return Uo+=1,fs===null&&(fs=[]),t=Bm(fs,t,e),e=oe,(sn===null?e.memoizedState:sn.next)===null&&(e=e.alternate,Tt.H=e===null||e.memoizedState===null?wg:Dg),t}function Ql(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return No(t);if(t.$$typeof===j)return;if(t.$$typeof===pt)return bn(t)}throw Error(s(438,String(t)))}function bf(t){var e=null,i=oe.updateQueue;if(i!==null&&(e=i.memoCache),e==null){var r=oe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),i===null&&(i=Kl(),oe.updateQueue=i),i.memoCache=e,i=e.data[e.index],i===void 0)for(i=e.data[e.index]=Array(t),r=0;r<t;r++)i[r]=Me;return e.index++,i}function la(t,e){return typeof e=="function"?e(t):e}function Jl(t){var e=nn();return Af(e,Be,t)}function Af(t,e,i){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=i;var l=t.baseQueue,c=r.pending;if(c!==null){if(l!==null){var p=l.next;l.next=c.next,c.next=p}e.baseQueue=l=c,r.pending=null}if(c=t.baseState,l===null)t.memoizedState=c;else{e=l.next;var E=p=null,L=null,Y=e,nt=!1;do{var dt=Y.lane&-536870913;if(dt!==Y.lane?(Se&dt)===dt:(oa&dt)===dt){var X=Y.revertLane;if(X===0)L!==null&&(L=L.next={lane:0,revertLane:0,gesture:null,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null}),dt===yr&&(nt=!0);else if((oa&X)===X){Y=Y.next,X===yr&&(nt=!0);continue}else dt={lane:0,revertLane:Y.revertLane,gesture:null,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},L===null?(E=L=dt,p=c):L=L.next=dt,oe.lanes|=X,Va|=X;dt=Y.action,Ar&&i(c,dt),c=Y.hasEagerState?Y.eagerState:i(c,dt)}else X={lane:dt,revertLane:Y.revertLane,gesture:Y.gesture,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},L===null?(E=L=X,p=c):L=L.next=X,oe.lanes|=dt,Va|=dt;Y=Y.next}while(Y!==null&&Y!==e);if(L===null?p=c:L.next=E,!Qn(c,t.memoizedState)&&(on=!0,nt&&(i=os,i!==null)))throw i;t.memoizedState=c,t.baseState=p,t.baseQueue=L,r.lastRenderedState=c}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Rf(t){var e=nn(),i=e.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=t;var r=i.dispatch,l=i.pending,c=e.memoizedState;if(l!==null){i.pending=null;var p=l=l.next;do c=t(c,p.action),p=p.next;while(p!==l);Qn(c,e.memoizedState)||(on=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),i.lastRenderedState=c}return[c,r]}function Zm(t,e,i){var r=oe,l=nn(),c=fe;if(c){if(i===void 0)throw Error(s(407));i=i()}else i=e();var p=!Qn((Be||l).memoizedState,i);if(p&&(l.memoizedState=i,on=!0),l=l.queue,Df(Jm.bind(null,r,l,t),[t]),t=l.getSnapshot!==e||p||sn!==null&&(sn.memoizedState.tag&1)!==0,hs(t?9:8,{destroy:void 0},Qm.bind(null,r,l,i,e),null),t){if(r.flags|=2048,Xe===null)throw Error(s(349));c||(oa&127)!==0||Km(r,e,i)}return i}function Km(t,e,i){t.flags|=16384,t={getSnapshot:e,value:i},e=oe.updateQueue,e===null?(e=Kl(),oe.updateQueue=e,e.stores=[t]):(i=e.stores,i===null?e.stores=[t]:i.push(t))}function Qm(t,e,i,r){e.value=i,e.getSnapshot=r,$m(e)&&tg(t)}function Jm(t,e,i){return i(function(){$m(e)&&tg(t)})}function $m(t){var e=t.getSnapshot;t=t.value;try{var i=e();return!Qn(t,i)}catch{return!0}}function tg(t){var e=mr(t,2);e!==null&&Yn(e,t,2)}function Cf(t){var e=Bn();if(typeof t=="function"){var i=t;if(t=i(),Ar){_n(!0);try{i()}finally{_n(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:t},e}function eg(t,e,i,r){return t.baseState=i,Af(t,Be,typeof r=="function"?r:la)}function jS(t,e,i,r,l){if(eu(t))throw Error(s(485));if(t=e.action,t!==null){var c={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){c.listeners.push(p)}};Tt.T!==null?i(!0):c.isTransition=!1,r(c),i=e.pending,i===null?(c.next=e.pending=c,ng(e,c)):(c.next=i.next,e.pending=i.next=c)}}function ng(t,e){var i=e.action,r=e.payload,l=t.state;if(e.isTransition){var c=Tt.T,p={};p.types=c!==null?c.types:null,Tt.T=p;try{var E=i(l,r),L=Tt.S;L!==null&&L(p,E),ig(t,e,E)}catch(Y){wf(t,e,Y)}finally{c!==null&&p.types!==null&&(c.types=p.types),Tt.T=c}}else try{c=i(l,r),ig(t,e,c)}catch(Y){wf(t,e,Y)}}function ig(t,e,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(r){ag(t,e,r)},function(r){return wf(t,e,r)}):ag(t,e,i)}function ag(t,e,i){e.status="fulfilled",e.value=i,rg(e),t.state=i,e=t.pending,e!==null&&(i=e.next,i===e?t.pending=null:(i=i.next,e.next=i,ng(t,i)))}function wf(t,e,i){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=i,rg(e),e=e.next;while(e!==r)}t.action=null}function rg(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function sg(t,e){return e}function og(t,e){if(fe){var i=Xe.formState;if(i!==null){t:{var r=oe;if(fe){if(qe){e:{for(var l=qe,c=di;l.nodeType!==8;){if(!c){l=null;break e}if(l=mi(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){qe=mi(l.nextSibling),r=l.data==="F!";break t}}Da(r)}r=!1}r&&(e=i[0])}}return i=Bn(),i.memoizedState=i.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sg,lastRenderedState:e},i.queue=r,i=Ag.bind(null,oe,r),r.dispatch=i,r=Cf(!1),c=zf.bind(null,oe,!1,r.queue),r=Bn(),l={state:e,dispatch:null,action:t,pending:null},r.queue=l,i=jS.bind(null,oe,l,c,i),l.dispatch=i,r.memoizedState=t,[e,i,!1]}function lg(t){var e=nn();return ug(e,Be,t)}function ug(t,e,i){if(e=Af(t,e,sg)[0],t=Jl(la)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var r=No(e)}catch(p){throw p===ls?Vl:p}else r=e;e=nn();var l=e.queue,c=l.dispatch;return i!==e.memoizedState&&(oe.flags|=2048,hs(9,{destroy:void 0},ZS.bind(null,l,i),null)),[r,c,t]}function ZS(t,e){t.action=e}function cg(t){var e=nn(),i=Be;if(i!==null)return ug(e,i,t);nn(),e=e.memoizedState,i=nn();var r=i.queue.dispatch;return i.memoizedState=t,[e,r,!1]}function hs(t,e,i,r){return t={tag:t,create:i,deps:r,inst:e,next:null},e=oe.updateQueue,e===null&&(e=Kl(),oe.updateQueue=e),i=e.lastEffect,i===null?e.lastEffect=t.next=t:(r=i.next,i.next=t,t.next=r,e.lastEffect=t),t}function fg(){return nn().memoizedState}function $l(t,e,i,r){var l=Bn();oe.flags|=t,l.memoizedState=hs(1|e,{destroy:void 0},i,r===void 0?null:r)}function tu(t,e,i,r){var l=nn();r=r===void 0?null:r;var c=l.memoizedState.inst;Be!==null&&r!==null&&Sf(r,Be.memoizedState.deps)?l.memoizedState=hs(e,c,i,r):(oe.flags|=t,l.memoizedState=hs(1|e,c,i,r))}function hg(t,e){$l(8390656,8,t,e)}function Df(t,e){tu(2048,8,t,e)}function KS(t){oe.flags|=4;var e=oe.updateQueue;if(e===null)e=Kl(),oe.updateQueue=e,e.events=[t];else{var i=e.events;i===null?e.events=[t]:i.push(t)}}function dg(t){var e=nn().memoizedState;return KS({ref:e,nextImpl:t}),function(){if((Ue&2)!==0)throw Error(s(440));return e.impl.apply(void 0,arguments)}}function pg(t,e){return tu(4,2,t,e)}function mg(t,e){return tu(4,4,t,e)}function gg(t,e){if(typeof e=="function"){t=t();var i=e(t);return function(){typeof i=="function"?i():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function _g(t,e,i){i=i!=null?i.concat([t]):null,tu(4,4,gg.bind(null,e,t),i)}function Uf(){}function vg(t,e){var i=nn();e=e===void 0?null:e;var r=i.memoizedState;return e!==null&&Sf(e,r[1])?r[0]:(i.memoizedState=[t,e],t)}function xg(t,e){var i=nn();e=e===void 0?null:e;var r=i.memoizedState;if(e!==null&&Sf(e,r[1]))return r[0];if(r=t(),Ar){_n(!0);try{t()}finally{_n(!1)}}return i.memoizedState=[r,e],r}function Nf(t,e,i){return i===void 0||(oa&1073741824)!==0&&(Se&261930)===0?t.memoizedState=e:(t.memoizedState=i,t=w_(),oe.lanes|=t,Va|=t,i)}function Sg(t,e,i,r){return Qn(i,e)?i:Pa.current!==null?(t=Nf(t,i,r),Qn(t,e)||(on=!0),t):(oa&106)===0||(oa&1073741824)!==0&&(Se&261930)===0?(on=!0,t.memoizedState=i):(t=w_(),oe.lanes|=t,Va|=t,e)}function yg(t,e,i,r,l){var c=Ct.p;Ct.p=c!==0&&8>c?c:8;var p=Tt.T,E={};E.types=p!==null?p.types:null,Tt.T=E,zf(t,!1,e,i);try{var L=l(),Y=Tt.S;if(Y!==null&&Y(E,L),L!==null&&typeof L=="object"&&typeof L.then=="function"){var nt=qS(L,r);Lo(t,e,nt,ni(t))}else Lo(t,e,r,ni(t))}catch(dt){Lo(t,e,{then:function(){},status:"rejected",reason:dt},ni())}finally{Ct.p=c,p!==null&&E.types!==null&&(p.types=E.types),Tt.T=p}}function QS(){}function Lf(t,e,i,r){if(t.tag!==5)throw Error(s(476));var l=Mg(t).queue;yg(t,l,e,De,i===null?QS:function(){return Eg(t),i(r)})}function Mg(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:De,baseState:De,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:De},next:null};var i={};return e.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:i},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Eg(t){var e=Mg(t);e.next===null&&(e=t.alternate.memoizedState),Lo(t,e.next.queue,{},ni())}function Of(){return bn(Us)}function Tg(){return nn().memoizedState}function bg(){return nn().memoizedState}function JS(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var i=ni();t=Oa(i);var r=za(e,t,i);r!==null&&(Yn(r,e,i),Ro(r,e,i)),e={cache:lf()},t.payload=e;return}e=e.return}}function $S(t,e,i){var r=ni();i={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},eu(t)?Rg(e,i):(i=Jc(t,e,i,r),i!==null&&(Yn(i,t,r),Cg(i,e,r)))}function Ag(t,e,i){var r=ni();Lo(t,e,i,r)}function Lo(t,e,i,r){var l={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(eu(t))Rg(e,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var p=e.lastRenderedState,E=c(p,i);if(l.hasEagerState=!0,l.eagerState=E,Qn(E,p))return Nl(t,e,l,0),Xe===null&&Ul(),!1}catch{}finally{}if(i=Jc(t,e,l,r),i!==null)return Yn(i,t,r),Cg(i,e,r),!0}return!1}function zf(t,e,i,r){if(r={lane:2,revertLane:bh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},eu(t)){if(e)throw Error(s(479))}else e=Jc(t,i,r,2),e!==null&&Yn(e,t,2)}function eu(t){var e=t.alternate;return t===oe||e!==null&&e===oe}function Rg(t,e){cs=jl=!0;var i=t.pending;i===null?e.next=e:(e.next=i.next,i.next=e),t.pending=e}function Cg(t,e,i){if((i&4194048)!==0){var r=e.lanes;r&=t.pendingLanes,i|=r,e.lanes=i,A(t,i)}}var nu={readContext:bn,use:Ql,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn,useEffectEvent:tn},wg={readContext:bn,use:Ql,useCallback:function(t,e){return Bn().memoizedState=[t,e===void 0?null:e],t},useContext:bn,useEffect:hg,useImperativeHandle:function(t,e,i){i=i!=null?i.concat([t]):null,$l(4194308,4,gg.bind(null,e,t),i)},useLayoutEffect:function(t,e){return $l(4194308,4,t,e)},useInsertionEffect:function(t,e){$l(4,2,t,e)},useMemo:function(t,e){var i=Bn();e=e===void 0?null:e;var r=t();if(Ar){_n(!0);try{t()}finally{_n(!1)}}return i.memoizedState=[r,e],r},useReducer:function(t,e,i){var r=Bn();if(i!==void 0){var l=i(e);if(Ar){_n(!0);try{i(e)}finally{_n(!1)}}}else l=e;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=$S.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var e=Bn();return t={current:t},e.memoizedState=t},useState:function(t){t=Cf(t);var e=t.queue,i=Ag.bind(null,oe,e);return e.dispatch=i,[t.memoizedState,i]},useDebugValue:Uf,useDeferredValue:function(t,e){var i=Bn();return Nf(i,t,e)},useTransition:function(){var t=Cf(!1);return t=yg.bind(null,oe,t.queue,!0,!1),Bn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,i){var r=oe,l=Bn();if(fe){if(i===void 0)throw Error(s(407));i=i()}else{if(i=e(),Xe===null)throw Error(s(349));(Se&127)!==0||Km(r,e,i)}l.memoizedState=i;var c={value:i,getSnapshot:e};return l.queue=c,hg(Jm.bind(null,r,c,t),[t]),r.flags|=2048,hs(9,{destroy:void 0},Qm.bind(null,r,c,i,e),null),i},useId:function(){var t=Bn(),e=Xe.identifierPrefix;if(fe){var i=Pi,r=zi;i=(r&~(1<<32-Nn(r)-1)).toString(32)+i,e="_"+e+"R_"+i,i=Zl++,0<i&&(e+="H"+i.toString(32)),e+="_"}else i=YS++,e="_"+e+"r_"+i.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Of,useFormState:og,useActionState:og,useOptimistic:function(t){var e=Bn();e.memoizedState=e.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=i,e=zf.bind(null,oe,!0,i),i.dispatch=e,[t,e]},useMemoCache:bf,useCacheRefresh:function(){return Bn().memoizedState=JS.bind(null,oe)},useEffectEvent:function(t){var e=Bn(),i={impl:t};return e.memoizedState=i,function(){if((Ue&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}},Dg={readContext:bn,use:Ql,useCallback:vg,useContext:bn,useEffect:Df,useImperativeHandle:_g,useInsertionEffect:pg,useLayoutEffect:mg,useMemo:xg,useReducer:Jl,useRef:fg,useState:function(){return Jl(la)},useDebugValue:Uf,useDeferredValue:function(t,e){var i=nn();return Sg(i,Be.memoizedState,t,e)},useTransition:function(){var t=Jl(la)[0],e=nn().memoizedState;return[typeof t=="boolean"?t:No(t),e]},useSyncExternalStore:Zm,useId:Tg,useHostTransitionStatus:Of,useFormState:lg,useActionState:lg,useOptimistic:function(t,e){var i=nn();return eg(i,Be,t,e)},useMemoCache:bf,useCacheRefresh:bg,useEffectEvent:dg},ty={readContext:bn,use:Ql,useCallback:vg,useContext:bn,useEffect:Df,useImperativeHandle:_g,useInsertionEffect:pg,useLayoutEffect:mg,useMemo:xg,useReducer:Rf,useRef:fg,useState:function(){return Rf(la)},useDebugValue:Uf,useDeferredValue:function(t,e){var i=nn();return Be===null?Nf(i,t,e):Sg(i,Be.memoizedState,t,e)},useTransition:function(){var t=Rf(la)[0],e=nn().memoizedState;return[typeof t=="boolean"?t:No(t),e]},useSyncExternalStore:Zm,useId:Tg,useHostTransitionStatus:Of,useFormState:cg,useActionState:cg,useOptimistic:function(t,e){var i=nn();return Be!==null?eg(i,Be,t,e):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:bf,useCacheRefresh:bg,useEffectEvent:dg};function Pf(t,e,i,r){e=t.memoizedState,i=i(r,e),i=i==null?e:z({},e,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var If={enqueueSetState:function(t,e,i){t=t._reactInternals;var r=ni(),l=Oa(r);l.payload=e,i!=null&&(l.callback=i),e=za(t,l,r),e!==null&&(Yn(e,t,r),Ro(e,t,r))},enqueueReplaceState:function(t,e,i){t=t._reactInternals;var r=ni(),l=Oa(r);l.tag=1,l.payload=e,i!=null&&(l.callback=i),e=za(t,l,r),e!==null&&(Yn(e,t,r),Ro(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var i=ni(),r=Oa(i);r.tag=2,e!=null&&(r.callback=e),e=za(t,r,i),e!==null&&(Yn(e,t,i),Ro(e,t,i))}};function Ug(t,e,i,r,l,c,p){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,p):e.prototype&&e.prototype.isPureReactComponent?!xo(i,r)||!xo(l,c):!0}function Ng(t,e,i,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(i,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(i,r),e.state!==t&&If.enqueueReplaceState(e,e.state,null)}function Rr(t,e){var i=e;if("ref"in e){i={};for(var r in e)r!=="ref"&&(i[r]=e[r])}if(t=t.defaultProps){i===e&&(i=z({},i));for(var l in t)i[l]===void 0&&(i[l]=t[l])}return i}function Lg(t){Dl(t)}function Og(t){console.error(t)}function zg(t){Dl(t)}function iu(t,e){try{var i=t.onUncaughtError;i(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function Pg(t,e,i){try{var r=t.onCaughtError;r(i.value,{componentStack:i.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Bf(t,e,i){return i=Oa(i),i.tag=3,i.payload={element:null},i.callback=function(){iu(t,e)},i}function Ig(t){return t=Oa(t),t.tag=3,t}function Bg(t,e,i,r){var l=i.type.getDerivedStateFromError;if(typeof l=="function"){var c=r.value;t.payload=function(){return l(c)},t.callback=function(){Pg(e,i,r)}}var p=i.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(t.callback=function(){Pg(e,i,r),typeof l!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function ey(t,e,i,r,l){if(i.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=i.alternate,e!==null&&xr(e,i,l,!0),i=An.current,i!==null){switch(i.tag){case 31:case 13:case 19:return On===null?Tu():i.alternate===null&&en===0&&(en=3),i.flags&=-257,i.flags|=65536,i.lanes=l,r===Xl?i.flags|=16384:(e=i.updateQueue,e===null?i.updateQueue=new Set([r]):e.add(r),Mh(t,r,l)),!1;case 22:return i.flags|=65536,r===Xl?i.flags|=16384:(e=i.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},i.updateQueue=e):(i=e.retryQueue,i===null?e.retryQueue=new Set([r]):i.add(r)),Mh(t,r,l)),!1}throw Error(s(435,i.tag))}return Mh(t,r,l),Tu(),!1}if(fe)return e=An.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,r!==af&&(t=Error(s(422),{cause:r}),Mo(ci(t,i)))):(r!==af&&(e=Error(s(423),{cause:r}),Mo(ci(e,i))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=ci(r,i),l=Bf(t.stateNode,r,l),pf(t,l),en!==4&&(en=2)),!1;var c=Error(s(520),{cause:r});if(c=ci(c,i),Go===null?Go=[c]:Go.push(c),en!==4&&(en=2),e===null)return!0;r=ci(r,i),i=e;do{switch(i.tag){case 3:return i.flags|=65536,t=l&-l,i.lanes|=t,t=Bf(i.stateNode,r,t),pf(i,t),!1;case 1:if(e=i.type,c=i.stateNode,(i.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Xa===null||!Xa.has(c))))return i.flags|=65536,l&=-l,i.lanes|=l,l=Ig(l),Bg(l,t,i,r),pf(i,l),!1;break;case 22:if(i.memoizedState!==null)return i.flags|=65536,!1}i=i.return}while(i!==null);return!1}var Ff=Error(s(461)),on=!1;function hn(t,e,i,r){e.child=t===null?Vm(e,null,i,r):br(e,t.child,i,r)}function Fg(t,e,i,r,l){i=i.render;var c=e.ref;if("ref"in r){var p={};for(var E in r)E!=="ref"&&(p[E]=r[E])}else p=r;return Sr(e),r=yf(t,e,i,p,c,l),E=Mf(),t!==null&&!on?(Ef(t,e,l),ua(t,e,l)):(fe&&E&&Pl(e),e.flags|=1,hn(t,e,r,l),e.child)}function Hg(t,e,i,r,l){if(t===null){var c=i.type;return typeof c=="function"&&!$c(c)&&c.defaultProps===void 0&&i.compare===null?(e.tag=15,e.type=c,Gg(t,e,c,r,l)):(t=Ol(i.type,null,r,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(c=t.child,!Wf(t,l)){var p=c.memoizedProps;if(i=i.compare,i=i!==null?i:xo,i(p,r)&&t.ref===e.ref)return ua(t,e,l)}return e.flags|=1,t=ia(c,r),t.ref=e.ref,t.return=e,e.child=t}function Gg(t,e,i,r,l){if(t!==null){var c=t.memoizedProps;if(xo(c,r)&&t.ref===e.ref)if(on=!1,e.pendingProps=r=c,Wf(t,l))(t.flags&131072)!==0&&(on=!0);else return e.lanes=t.lanes,ua(t,e,l)}return Hf(t,e,i,r,l)}function Vg(t,e,i,r){var l=r.children,c=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((e.flags&128)!==0){if(c=c!==null?c.baseLanes|i:i,t!==null){for(r=e.child=t.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~c}else r=0,e.child=null;return Xg(t,e,c,i,r)}if((i&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Gl(e,c!==null?c.cachePool:null),c!==null?qm(e,c):gf(),Ym(e);else return r=e.lanes=536870912,Xg(t,e,c!==null?c.baseLanes|i:i,i,r)}else c!==null?(Gl(e,c.cachePool),qm(e,c),Ba(),e.memoizedState=null):(t!==null&&Gl(e,null),gf(),Ba());return hn(t,e,l,i),e.child}function Oo(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Xg(t,e,i,r,l){var c=cf();return c=c===null?null:{parent:rn._currentValue,pool:c},e.memoizedState={baseLanes:i,cachePool:c},t!==null&&Gl(e,null),gf(),Ym(e),t!==null&&xr(t,e,r,!0),e.childLanes=l,null}function au(t,e){return e=ru({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function kg(t,e,i){return br(e,t.child,null,i),t=au(e,e.pendingProps),t.flags|=2,Jn(e),e.memoizedState=null,t}function ny(t,e,i){var r=e.pendingProps,l=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(fe){if(r.mode==="hidden")return t=au(e,r),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Oo(null,t);if(vf(e),(t=qe)?(t=g0(t,di),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ca!==null?{id:zi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},i=Rm(t),i.return=e,e.child=i,xn=e,qe=null)):t=null,t===null)throw Da(e);return e.lanes=536870912,null}return au(e,r)}var c=t.memoizedState;if(c!==null){var p=c.dehydrated;if(vf(e),l)if(e.flags&256)e.flags&=-257,e=kg(t,e,i);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(s(558));else if(on||xr(t,e,i,!1),l=(i&t.childLanes)!==0,on||l){if(Pa.current===null){if(r=Xe,r!==null&&(p=W(r,i),p!==0&&p!==c.retryLane))throw c.retryLane=p,mr(t,p),Yn(r,t,p),Ff;Tu()}e=kg(t,e,i)}else t=c.treeContext,qe=mi(p.nextSibling),xn=e,fe=!0,wa=null,di=!1,t!==null&&Dm(e,t),e=au(e,r),e.flags|=134221824;return e}return t=ia(t.child,{mode:r.mode,children:r.children}),t.ref=e.ref,e.child=t,t.return=e,t}function ds(t,e){var i=e.ref;if(i===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(s(284));(t===null||t.ref!==i)&&(e.flags|=4194816)}}function Hf(t,e,i,r,l){return Sr(e),i=yf(t,e,i,r,void 0,l),r=Mf(),t!==null&&!on?(Ef(t,e,l),ua(t,e,l)):(fe&&r&&Pl(e),e.flags|=1,hn(t,e,i,l),e.child)}function qg(t,e,i,r,l,c){return Sr(e),e.updateQueue=null,i=jm(e,r,i,l),Wm(t),r=Mf(),t!==null&&!on?(Ef(t,e,c),ua(t,e,c)):(fe&&r&&Pl(e),e.flags|=1,hn(t,e,i,c),e.child)}function Yg(t,e,i,r,l){if(Sr(e),e.stateNode===null){var c=is,p=i.contextType;typeof p=="object"&&p!==null&&(c=bn(p)),c=new i(r,c),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=If,e.stateNode=c,c._reactInternals=e,c=e.stateNode,c.props=r,c.state=e.memoizedState,c.refs={},hf(e),p=i.contextType,c.context=typeof p=="object"&&p!==null?bn(p):is,c.state=e.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Pf(e,i,p,r),c.state=e.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(p=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),p!==c.state&&If.enqueueReplaceState(c,c.state,null),wo(e,r,c,l),Co(),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(t===null){c=e.stateNode;var E=e.memoizedProps,L=Rr(i,E);c.props=L;var Y=c.context,nt=i.contextType;p=is,typeof nt=="object"&&nt!==null&&(p=bn(nt));var dt=i.getDerivedStateFromProps;nt=typeof dt=="function"||typeof c.getSnapshotBeforeUpdate=="function",E=e.pendingProps!==E,nt||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(E||Y!==p)&&Ng(e,c,r,p),La=!1;var X=e.memoizedState;c.state=X,wo(e,r,c,l),Co(),Y=e.memoizedState,E||X!==Y||La?(typeof dt=="function"&&(Pf(e,i,dt,r),Y=e.memoizedState),(L=La||Ug(e,i,L,r,X,Y,p))?(nt||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=Y),c.props=r,c.state=Y,c.context=p,r=L):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{c=e.stateNode,df(t,e),p=e.memoizedProps,nt=Rr(i,p),c.props=nt,dt=e.pendingProps,X=c.context,Y=i.contextType,L=is,typeof Y=="object"&&Y!==null&&(L=bn(Y)),E=i.getDerivedStateFromProps,(Y=typeof E=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==dt||X!==L)&&Ng(e,c,r,L),La=!1,X=e.memoizedState,c.state=X,wo(e,r,c,l),Co();var $=e.memoizedState;p!==dt||X!==$||La||t!==null&&t.dependencies!==null&&Fl(t.dependencies)?(typeof E=="function"&&(Pf(e,i,E,r),$=e.memoizedState),(nt=La||Ug(e,i,nt,r,X,$,L)||t!==null&&t.dependencies!==null&&Fl(t.dependencies))?(Y||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,$,L),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,$,L)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===t.memoizedProps&&X===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&X===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=$),c.props=r,c.state=$,c.context=L,r=nt):(typeof c.componentDidUpdate!="function"||p===t.memoizedProps&&X===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&X===t.memoizedState||(e.flags|=1024),r=!1)}return c=r,ds(t,e),r=(e.flags&128)!==0,c||r?(c=e.stateNode,i=r&&typeof i.getDerivedStateFromError!="function"?null:c.render(),e.flags|=1,t!==null&&r?(e.child=br(e,t.child,null,l),e.child=br(e,null,i,l)):hn(t,e,i,l),e.memoizedState=c.state,t=e.child):t=ua(t,e,l),t}function Wg(t,e,i,r){return _r(),e.flags|=256,hn(t,e,i,r),e.child}var Gf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vf(t){return{baseLanes:t,cachePool:Pm()}}function Xf(t,e,i){return t=t!==null?t.childLanes&~i:0,e&&(t|=ei),t}function jg(t,e,i){var r=e.pendingProps,l=!1,c=(e.flags&128)!==0,p;if((p=c)||(p=t!==null&&t.memoizedState===null?!1:(Rn.current&2)!==0),p&&(l=!0,e.flags&=-129),p=(e.flags&32)!==0,e.flags&=-33,t===null){if(fe){if(l?Ia(e):Ba(),(t=qe)?(t=g0(t,di),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ca!==null?{id:zi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},i=Rm(t),i.return=e,e.child=i,xn=e,qe=null)):t=null,t===null)throw Da(e);return Vh(t)?e.lanes=32:e.lanes=536870912,null}return c=r.children,r=r.fallback,l?(Ba(),l=e.mode,c=ru({mode:"hidden",children:c},l),r=gr(r,l,i,null),c.return=e,r.return=e,c.sibling=r,e.child=c,r=e.child,r.memoizedState=Vf(i),r.childLanes=Xf(t,p,i),e.memoizedState=Gf,Oo(null,r)):(Ia(e),kf(e,c))}var E=t.memoizedState;if(E!==null){var L=E.dehydrated;if(L!==null)return iy(t,e,c,p,r,L,E,i)}return l?(Ba(),l=r.fallback,c=e.mode,E=t.child,L=E.sibling,r=ia(E,{mode:"hidden",children:r.children}),r.subtreeFlags=E.subtreeFlags&1206910976,L!==null?l=ia(L,l):(l=gr(l,c,i,null),l.flags|=2),l.return=e,r.return=e,r.sibling=l,e.child=r,Oo(null,r),r=e.child,l=t.child.memoizedState,l===null?l=Vf(i):(c=l.cachePool,c!==null?(E=rn._currentValue,c=c.parent!==E?{parent:E,pool:E}:c):c=Pm(),l={baseLanes:l.baseLanes|i,cachePool:c}),r.memoizedState=l,r.childLanes=Xf(t,p,i),e.memoizedState=Gf,Oo(t.child,r)):(Ia(e),i=t.child,t=i.sibling,i=ia(i,{mode:"visible",children:r.children}),i.return=e,i.sibling=null,t!==null&&(p=e.deletions,p===null?(e.deletions=[t],e.flags|=16):p.push(t)),e.child=i,e.memoizedState=null,i)}function kf(t,e){return e=ru({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function ru(t,e){return t=Vn(22,t,null,e),t.lanes=0,t}function su(t,e,i){return br(e,t.child,null,i),t=kf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function iy(t,e,i,r,l,c,p,E){if(i)return e.flags&256?(Ia(e),e.flags&=-257,su(t,e,E)):e.memoizedState!==null?(Ba(),e.child=t.child,e.flags|=128,null):(Ba(),c=l.fallback,p=e.mode,l=ru({mode:"visible",children:l.children},p),c=gr(c,p,E,null),c.flags|=2,l.return=e,c.return=e,l.sibling=c,e.child=l,br(e,t.child,null,E),l=e.child,l.memoizedState=Vf(E),l.childLanes=Xf(t,r,E),e.memoizedState=Gf,Oo(null,l));if(Ia(e),Vh(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var L=r.dgst;return r=L,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,Mo({value:l,source:null,stack:null})),su(t,e,E)}if(on||xr(t,e,E,!1),r=(E&t.childLanes)!==0,on||r){if(Pa.current!==null)return su(t,e,E);if(r=Xe,r!==null&&(l=W(r,E),l!==0&&l!==p.retryLane))throw p.retryLane=l,mr(t,l),Yn(r,t,l),Ff;return Gh(c)||Tu(),su(t,e,E)}return Gh(c)?(e.flags|=192,e.child=t.child,null):(t=p.treeContext,qe=mi(c.nextSibling),xn=e,fe=!0,wa=null,di=!1,t!==null&&Dm(e,t),e=kf(e,l.children),e.flags|=134221824,e)}function Zg(t,e,i){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Bl(t.return,e,i)}function Kg(t){for(var e=null;t!==null;){var i=t.alternate;i!==null&&Wl(i)===null&&(e=t),t=t.sibling}return e}function ou(t,e,i,r,l,c){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:i,tailMode:l,treeForkCount:c}:(p.isBackwards=e,p.rendering=null,p.renderingStartTime=0,p.last=r,p.tail=i,p.tailMode=l,p.treeForkCount=c)}function qf(t){var e=t.child;for(t.child=null;e!==null;){var i=e.sibling;e.sibling=t.child,t.child=e,e=i}}function Yf(t,e,i){var r=e.pendingProps,l=r.revealOrder,c=r.tail;r=r.children;var p=Rn.current;if(e.flags&128)return Do(e,p),null;var E=(p&2)!==0;if(E?(p=p&1|2,e.flags|=128):p&=1,Do(e,p),l==="backwards"&&t!==null?(qf(t),hn(t,e,r,i),qf(t)):hn(t,e,r,i),r=fe?yo:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zg(t,i,e);else if(t.tag===19)Zg(t,i,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":i=Kg(e.child),i===null?(l=e.child,e.child=null):(l=i.sibling,i.sibling=null,qf(e)),ou(e,!0,l,null,c,r);break;case"unstable_legacy-backwards":for(i=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&Wl(t)===null){e.child=l;break}t=l.sibling,l.sibling=i,i=l,l=t}ou(e,!0,i,null,c,r);break;case"together":ou(e,!1,null,null,void 0,r);break;case"independent":e.memoizedState=null;break;default:i=Kg(e.child),i===null?(l=e.child,e.child=null):(l=i.sibling,i.sibling=null),ou(e,!1,l,i,c,r)}return e.child}function Qg(t,e,i){var r=e.pendingProps;return Ua(e,e.type,r.value),hn(t,e,r.children,i),e.child}function ua(t,e,i){if(t!==null&&(e.dependencies=t.dependencies),Va|=e.lanes,(i&e.childLanes)===0)if(t!==null){if(xr(t,e,i,!1),(i&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,i=ia(t,t.pendingProps),e.child=i,i.return=e;t.sibling!==null;)t=t.sibling,i=i.sibling=ia(t,t.pendingProps),i.return=e;i.sibling=null}return e.child}function Wf(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Fl(t)))}function ay(t,e,i){switch(e.tag){case 3:et(e,e.stateNode.containerInfo),Ua(e,rn,t.memoizedState.cache),_r();break;case 27:case 5:yt(e);break;case 4:et(e,e.stateNode.containerInfo);break;case 10:Ua(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,vf(e),null;break;case 13:var r=e.memoizedState;if(r!==null){if(r.dehydrated!==null)return Ia(e),e.flags|=128,null;r=xr(t,e,i,!1);var l=e.child.childLanes;return r||(i&l)!==0?jg(t,e,i):(Ia(e),t=ua(t,e,i),t!==null?t.sibling:null)}Ia(e);break;case 19:if(e.flags&128)return Yf(t,e,i);if(l=(t.flags&128)!==0,r=(i&e.childLanes)!==0,r||(xr(t,e,i,!1),r=(i&e.childLanes)!==0),l){if(r)return Yf(t,e,i);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Do(e,Rn.current),r)break;return null;case 22:return e.lanes=0,Vg(t,e,i,e.pendingProps);case 24:Ua(e,rn,t.memoizedState.cache)}return ua(t,e,i)}function Jg(t,e,i){if(t!==null)if(t.memoizedProps!==e.pendingProps)on=!0;else{if(!Wf(t,i)&&(e.flags&128)===0)return on=!1,ay(t,e,i);on=(t.flags&131072)!==0}else on=!1,fe&&(e.flags&1048576)!==0&&wm(e,yo,e.index);switch(e.lanes=0,e.tag){case 16:t:{var r=e.pendingProps;if(t=Er(e.elementType),e.type=t,typeof t=="function")$c(t)?(r=Rr(t,r),e.tag=1,e=Yg(null,e,t,r,i)):(e.tag=0,e=Hf(null,e,t,r,i));else{if(t!=null){var l=t.$$typeof;if(l===k){e.tag=11,e=Fg(null,e,t,r,i);break t}else if(l===ht){e.tag=14,e=Hg(null,e,t,r,i);break t}else if(l===pt){e.tag=10,e.type=t,e=Qg(null,e,i);break t}}throw e=Nt(t)||t,Error(s(306,e,""))}}return e;case 0:return Hf(t,e,e.type,e.pendingProps,i);case 1:return r=e.type,l=Rr(r,e.pendingProps),Yg(t,e,r,l,i);case 3:t:{if(et(e,e.stateNode.containerInfo),t===null)throw Error(s(387));r=e.pendingProps;var c=e.memoizedState;l=c.element,df(t,e),wo(e,r,null,i);var p=e.memoizedState;if(r=p.cache,Ua(e,rn,r),r!==c.cache&&of(e,[rn],i,!0),Co(),r=p.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:p.cache},e.updateQueue.baseState=c,e.memoizedState=c,e.flags&256){e=Wg(t,e,r,i);break t}else if(r!==l){l=ci(Error(s(424)),e),Mo(l),e=Wg(t,e,r,i);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(qe=mi(t.firstChild),xn=e,fe=!0,wa=null,di=!0,i=Vm(e,null,r,i),e.child=i;i;)i.flags=i.flags&-3|134221824,i=i.sibling}else{if(_r(),r===l){e=ua(t,e,i);break t}hn(t,e,r,i)}e=e.child}return e;case 26:return ds(t,e),t===null?(i=E0(e.type,null,e.pendingProps,null))?e.memoizedState=i:fe||(e.stateNode=n0(e.type,e.pendingProps,U.current,e)):e.memoizedState=E0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return yt(e),t===null&&fe&&(r=e.stateNode=x0(e.type,e.pendingProps,U.current),xn=e,di=!0,l=qe,Ya(e.type)?(Xh=l,qe=mi(r.firstChild)):qe=l),hn(t,e,e.pendingProps.children,i),ds(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&fe&&((l=r=qe)&&(r=Jy(r,e.type,e.pendingProps,di),r!==null?(e.stateNode=r,xn=e,qe=mi(r.firstChild),di=!1,l=!0):l=!1),l||Da(e)),yt(e),l=e.type,c=e.pendingProps,p=t!==null?t.memoizedProps:null,r=c.children,Oh(l,c)?r=null:p!==null&&Oh(l,p)&&(e.flags|=32),e.memoizedState!==null&&(l=yf(t,e,WS,null,null,i),Us._currentValue=l),ds(t,e),hn(t,e,r,i),e.child;case 6:return t===null&&fe&&((t=i=qe)&&(i=$y(i,e.pendingProps,di),i!==null?(e.stateNode=i,xn=e,qe=null,t=!0):t=!1),t||Da(e)),null;case 13:return jg(t,e,i);case 4:return et(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=br(e,null,r,i):hn(t,e,r,i),e.child;case 11:return Fg(t,e,e.type,e.pendingProps,i);case 7:return r=e.pendingProps,ds(t,e),hn(t,e,r,i),e.child;case 8:return hn(t,e,e.pendingProps.children,i),e.child;case 12:return hn(t,e,e.pendingProps.children,i),e.child;case 10:return Qg(t,e,i);case 9:return l=e.type._context,r=e.pendingProps.children,Sr(e),l=bn(l),r=r(l),e.flags|=1,hn(t,e,r,i),e.child;case 14:return Hg(t,e,e.type,e.pendingProps,i);case 15:return Gg(t,e,e.type,e.pendingProps,i);case 19:return Yf(t,e,i);case 31:return ny(t,e,i);case 22:return Vg(t,e,i,e.pendingProps);case 24:return Sr(e),r=bn(rn),t===null?(l=cf(),l===null&&(l=Xe,c=lf(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=i),l=c),e.memoizedState={parent:r,cache:l},hf(e),Ua(e,rn,l)):((t.lanes&i)!==0&&(df(t,e),wo(e,null,null,i),Co()),l=t.memoizedState,c=e.memoizedState,l.parent!==r?(l={parent:r,cache:r},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),Ua(e,rn,r)):(r=c.cache,Ua(e,rn,r),r!==l.cache&&of(e,[rn],i,!0))),hn(t,e,e.pendingProps.children,i),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=e.pendingProps,r.name!=null&&r.name!=="auto"?e.flags|=t===null?18882560:18874368:fe&&Pl(e),t!==null&&t.memoizedProps.name!==r.name?e.flags|=4194816:ds(t,e),hn(t,e,r.children,i),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function ca(t){t.flags|=4}function jf(t,e,i,r,l){var c;if((c=(t.mode&32)!==0)&&(c=i===null?R0(e,r):R0(e,r)&&(r.src!==i.src||r.srcSet!==i.srcSet)),c){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(L_())t.flags|=8192;else throw Tr=Xl,ff}else t.flags&=-16777217}function $g(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!C0(e))if(L_())t.flags|=8192;else throw Tr=Xl,ff}function lu(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?xl():536870912,t.lanes|=e,vs|=e)}function zo(t,e){if(!fe)switch(t.tailMode){case"visible":break;case"collapsed":for(var i=t.tail,r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(e=t.tail,i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?t.tail=null:i.sibling=null}}function Ye(t){var e=t.alternate!==null&&t.alternate.child===t.child,i=0,r=0;if(e)for(var l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=i,e}function ry(t,e,i){var r=e.pendingProps;switch(nf(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(e),null;case 1:return Ye(e),null;case 3:return i=e.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),sa(rn),_t(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ss(e)?ca(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,rf())),Ye(e),null;case 26:var l=e.type,c=e.memoizedState;return t===null?(ca(e),c!==null?(Ye(e),$g(e,c)):(Ye(e),jf(e,l,null,r,i))):c?c!==t.memoizedState?(ca(e),Ye(e),$g(e,c)):(Ye(e),e.flags&=-16777217):(t=t.memoizedProps,t!==r&&ca(e),Ye(e),jf(e,l,t,r,i)),null;case 27:if(mt(e),i=U.current,l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&ca(e);else{if(!r){if(e.stateNode===null)throw Error(s(166));return Ye(e),e.subtreeFlags&=-33554433,null}t=ve.current,ss(e)?Um(e):(t=x0(l,r,i),e.stateNode=t,ca(e))}return Ye(e),e.subtreeFlags&=-33554433,null;case 5:if(mt(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&ca(e);else{if(!r){if(e.stateNode===null)throw Error(s(166));return Ye(e),e.subtreeFlags&=-33554433,null}if(c=ve.current,ss(e))Um(e);else{var p=Yo(U.current);switch(c){case 1:c=p.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=p.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=p.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=p.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=p.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?p.createElement("select",{is:r.is}):p.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?p.createElement(l,{is:r.is}):p.createElement(l)}}c[bt]=e,c[Ut]=r;t:for(p=e.child;p!==null;){if(p.tag===5||p.tag===6)c.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break t;for(;p.sibling===null;){if(p.return===null||p.return===e)break t;p=p.return}p.sibling.return=p.return,p=p.sibling}e.stateNode=c;t:switch(wn(c,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ca(e)}}return Ye(e),e.subtreeFlags&=-33554433,jf(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,i),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==r&&ca(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(s(166));if(t=U.current,ss(e)){if(t=e.stateNode,i=e.memoizedProps,r=null,l=xn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[bt]=e,t=!!(t.nodeValue===i||r!==null&&r.suppressHydrationWarning===!0||J_(t.nodeValue,i)),t||Da(e,!0)}else t=Yo(t).createTextNode(r),t[bt]=e,e.stateNode=t}return Ye(e),null;case 31:if(i=e.memoizedState,t===null||t.memoizedState!==null){if(r=ss(e),i!==null){if(t===null){if(!r)throw Error(s(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[bt]=e}else _r(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ye(e),t=!1}else i=rf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),t=!0;if(!t)return e.flags&256?(Jn(e),e):(Jn(e),null);if((e.flags&128)!==0)throw Error(s(558))}return Ye(e),null;case 13:if(r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=ss(e),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(s(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[bt]=e}else _r(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ye(e),l=!1}else l=rf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(Jn(e),e):(Jn(e),null)}return Jn(e),(e.flags&128)!==0?(e.lanes=i,e):(i=r!==null,t=t!==null&&t.memoizedState!==null,i&&(r=e.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==l&&(r.flags|=2048)),i!==t&&i&&(e.child.flags|=8192),lu(e,e.updateQueue),Ye(e),null);case 4:return _t(),t===null&&wh(e.stateNode.containerInfo),e.flags|=67108864,Ye(e),null;case 10:return sa(e.type),Ye(e),null;case 19:if(xf(e),r=e.memoizedState,r===null)return Ye(e),null;if(l=(e.flags&128)!==0,c=r.rendering,c===null)if(l)zo(r,!1);else{if(en!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(c=Wl(t),c!==null){for(e.flags|=128,zo(r,!1),t=c.updateQueue,e.updateQueue=t,lu(e,t),e.subtreeFlags=0,t=i,i=e.child;i!==null;)Am(i,t),i=i.sibling;return Do(e,Rn.current&1|2),fe&&aa(e,r.treeForkCount),e.child}t=t.sibling}r.tail!==null&&H()>Su&&(e.flags|=128,l=!0,zo(r,!1),e.lanes=4194304)}else{if(!l)if(t=Wl(c),t!==null){if(e.flags|=128,l=!0,t=t.updateQueue,e.updateQueue=t,lu(e,t),zo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!c.alternate&&!fe)return Ye(e),null}else 2*H()-r.renderingStartTime>Su&&i!==536870912&&(e.flags|=128,l=!0,zo(r,!1),e.lanes=4194304);r.isBackwards?(c.sibling=e.child,e.child=c):(t=r.last,t!==null?t.sibling=c:e.child=c,r.last=c)}if(r.tail!==null){t=r.tail;t:{for(i=t;i!==null;){if(i.alternate!==null){i=!1;break t}i=i.sibling}i=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=H(),t.sibling=null,c=Rn.current,c=l?c&1|2:c&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!i||fe?Do(e,c):(i=c,wt(An,e),wt(Rn,i),On===null&&(On=e)),fe&&aa(e,r.treeForkCount),t}return Ye(e),null;case 22:case 23:return Jn(e),_f(),r=e.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?(i&536870912)!==0&&(e.flags&128)===0&&(Ye(e),e.subtreeFlags&6&&(e.flags|=8192)):Ye(e),i=e.updateQueue,i!==null&&lu(e,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==i&&(e.flags|=2048),t!==null&&Kt(Mr),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),sa(rn),Ye(e),null;case 25:return null;case 30:return e.flags|=33554432,Ye(e),null}throw Error(s(156,e.tag))}function sy(t,e){switch(nf(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return sa(rn),_t(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return mt(e),null;case 31:if(e.memoizedState!==null){if(Jn(e),e.alternate===null)throw Error(s(340));_r()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Jn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));_r()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xf(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return _t(),null;case 10:return sa(e.type),null;case 22:case 23:return Jn(e),_f(),t!==null&&Kt(Mr),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return sa(rn),null;case 25:return null;default:return null}}function t_(t,e){switch(nf(e),e.tag){case 3:sa(rn),_t();break;case 26:case 27:case 5:mt(e);break;case 4:_t();break;case 31:e.memoizedState!==null&&Jn(e);break;case 13:Jn(e);break;case 19:xf(e);break;case 10:sa(e.type);break;case 22:case 23:Jn(e),_f(),t!==null&&Kt(Mr);break;case 24:sa(rn)}}function Po(t,e){try{var i=e.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var l=r.next;i=l;do{if((i.tag&t)===t){r=void 0;var c=i.create,p=i.inst;r=c(),p.destroy=r}i=i.next}while(i!==l)}}catch(E){ze(e,e.return,E)}}function Fa(t,e,i){try{var r=e.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var c=l.next;r=c;do{if((r.tag&t)===t){var p=r.inst,E=p.destroy;if(E!==void 0){p.destroy=void 0,l=e;var L=i,Y=E;try{Y()}catch(nt){ze(l,L,nt)}}}r=r.next}while(r!==c)}}catch(nt){ze(e,e.return,nt)}}function e_(t){var e=t.updateQueue;if(e!==null){var i=t.stateNode;try{km(e,i)}catch(r){ze(t,t.return,r)}}}function n_(t,e,i){i.props=Rr(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(r){ze(t,e,r)}}function Ii(t,e){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var l=t.stateNode,c=ea(t.memoizedProps,l);(l.ref===null||l.ref.name!==c)&&(l.ref=u0(c)),r=l.ref;break;case 7:if(t.stateNode===null){var p=new ii(t);g(t.child,!1,Ky,p,void 0,void 0),t.stateNode=p}r=t.stateNode;break;default:r=t.stateNode}typeof i=="function"?t.refCleanup=i(r):i.current=r}}catch(E){ze(t,e,E)}}function Cn(t,e){var i=t.ref,r=t.refCleanup;if(i!==null)if(typeof r=="function")try{r()}catch(l){ze(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(l){ze(t,e,l)}else i.current=null}function uu(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var i=0;i<e.length;i++)m0(t.stateNode,e[i])}function i_(t){for(var e=t.return;e!==null&&(Kf(e)&&m0(t.stateNode,e.stateNode),!Zf(e));)e=e.return}function Io(t){for(var e=t.return;e!==null&&(Kf(e)&&Qy(t.stateNode,e.stateNode),!Zf(e));)e=e.return}function Zf(t){return t.tag===5||t.tag===3||t.tag===27}function Kf(t){return t&&t.tag===7&&t.stateNode!==null}function Qf(t){var e=t.type,i=t.memoizedProps,r=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":i.autoFocus&&r.focus();break t;case"img":i.src?r.src=i.src:i.srcSet&&(r.srcset=i.srcSet)}}catch(l){ze(t,t.return,l)}}function Jf(t,e,i){try{var r=t.stateNode;Ny(r,t.type,i,e),r[Ut]=e}catch(l){ze(t,t.return,l)}}function a_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ya(t.type)||t.tag===4}function $f(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||a_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ya(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function th(t,e,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,e?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(l,e):(e=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,e.appendChild(l),i=i._reactRootContainer,i!=null||e.onclick!==null||(e.onclick=Oi)),uu(t,r),Ce=!0;else if(l!==4&&(l===27&&(uu(t,r),r=null,Ya(t.type)&&(i=t.stateNode,e=null)),t=t.child,t!==null))for(th(t,e,i,r),t=t.sibling;t!==null;)th(t,e,i,r),t=t.sibling}function cu(t,e,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,e?i.insertBefore(l,e):i.appendChild(l),uu(t,r),Ce=!0;else if(l!==4&&(l===27&&(uu(t,r),r=null,Ya(t.type)&&(i=t.stateNode)),t=t.child,t!==null))for(cu(t,e,i,r),t=t.sibling;t!==null;)cu(t,e,i,r),t=t.sibling}function r_(t){var e=t.stateNode,i=t.memoizedProps;try{for(var r=t.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);wn(e,r,i),e[bt]=t,e[Ut]=i}catch(c){ze(t,t.return,c)}}var fu=!1,$n=null;function s_(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(fu=!0)}var Bi=null;function o_(){var t=Bi;return Bi=null,t}var Xn=0;function ps(t,e,i,r,l){return Xn=0,l_(t.child,e,i,r,l)}function l_(t,e,i,r,l){for(var c=!1;t!==null;){if(t.tag===5){var p=t.stateNode;if(r!==null){var E=Ih(p);r.push(E),E.view&&(c=!0)}else c||Ih(p).view&&(c=!0);fu=!0,o0(p,Xn===0?e:e+"_"+Xn,i),Xn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||l_(t.child,e,i,r,l)&&(c=!0));t=t.sibling}return c}function Fi(t,e){for(;t!==null;)t.tag===5?l0(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||Fi(t.child,e)),t=t.sibling}function hu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(hu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(s(544));var i=e.name;e=na(e.default,e.share),e!=="none"&&(ps(t,i,e,null,!1)||Fi(t.child,!1))}t=t.sibling}}function eh(t,e){if(t.tag===30){var i=t.stateNode,r=t.memoizedProps,l=ea(r,i),c=na(r.default,i.paired?r.share:r.enter);c!=="none"?ps(t,l,c,null,!1)?(hu(t),i.paired||e||Ms(t,r.onEnter)):Fi(t.child,!1):hu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)eh(t,e),t=t.sibling;else hu(t)}function nh(t){if($n!==null&&$n.size!==0){var e=$n;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var i=t.memoizedProps,r=i.name;if(r!=null&&r!=="auto"){var l=e.get(r);if(l!==void 0){var c=na(i.default,i.share);if(c!=="none"&&(ps(t,r,c,null,!1)?(c=t.stateNode,l.paired=c,c.paired=l,Ms(t,i.onShare)):Fi(t.child,!1)),e.delete(r),e.size===0)break}}}nh(t)}t=t.sibling}}}function ih(t){if(t.tag===30){var e=t.memoizedProps,i=ea(e,t.stateNode),r=$n!==null?$n.get(i):void 0,l=na(e.default,r!==void 0?e.share:e.exit);l!=="none"&&(ps(t,i,l,null,!1)?r!==void 0?(l=t.stateNode,r.paired=l,l.paired=r,$n.delete(i),Ms(t,e.onShare)):Ms(t,e.onExit):Fi(t.child,!1)),$n!==null&&nh(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)ih(t),t=t.sibling;else $n!==null&&nh(t)}function u_(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,i=ea(e,t.stateNode);e=na(e.default,e.update),t.flags&=-5,e!=="none"&&ps(t,i,e,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&u_(t);t=t.sibling}}function ah(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var e=t.stateNode;e.paired!==null&&(e.paired=null,Fi(t.child,!1))}ah(t)}t=t.sibling}}function du(t){if(t.tag===30)t.stateNode.paired=null,Fi(t.child,!1),ah(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)du(t),t=t.sibling;else ah(t)}function c_(t){for(t=t.child;t!==null;)t.tag===30?Fi(t.child,!1):(t.subtreeFlags&33554432)!==0&&c_(t),t=t.sibling}function rh(t,e,i,r,l,c,p){for(var E=!1;e!==null;){if(e.tag===5){var L=e.stateNode;if(c!==null&&Xn<c.length){var Y=c[Xn],nt=Ih(L);(Y.view||nt.view)&&(E=!0);var dt;if(dt=(t.flags&4)===0)if(nt.clip)dt=!0;else{dt=Y.rect;var X=nt.rect;dt=dt.y!==X.y||dt.x!==X.x||dt.height!==X.height||dt.width!==X.width}dt&&(t.flags|=4),nt.abs?nt=!Y.abs:(Y=Y.rect,nt=nt.rect,nt=Y.height!==nt.height||Y.width!==nt.width),nt&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&o0(L,Xn===0?i:i+"_"+Xn,l),E&&(t.flags&4)!==0||(Bi===null&&(Bi=[]),Bi.push(L,Xn===0?r:r+"_"+Xn,e.memoizedProps)),Xn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&p?t.flags|=e.flags&32:rh(t,e.child,i,r,l,c,p)&&(E=!0));e=e.sibling}return E}function f_(t,e){for(t=t.child;t!==null;){if(t.tag===30){var i=t.memoizedProps,r=t.stateNode,l=ea(i,r),c=na(i.default,i.update),p;p=t.memoizedState,t.memoizedState=null,r=t;var E=t.child;Xn=0,l=rh(r,E,l,l,c,p,!1),(t.flags&4)!==0&&l&&Ms(t,i.onUpdate)}else(t.subtreeFlags&33554432)!==0&&f_(t);t=t.sibling}}var Sn=!1,Le=!1,Hi=!1,sh=!1,h_=typeof WeakSet=="function"?WeakSet:Set,yn=null,Gi=!1,Bo=!1,pu=!1,oh=!1;function oy(t,e,i){if(t=t.containerInfo,Nh=Ns,t=gm(t),Yc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var c=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{r.nodeType,p.nodeType}catch{r=null;break t}var E=0,L=-1,Y=-1,nt=0,dt=0,X=t,$=null;e:for(;;){for(var Dt;X!==r||c!==0&&X.nodeType!==3||(L=E+c),X!==p||l!==0&&X.nodeType!==3||(Y=E+l),X.nodeType===3&&(E+=X.nodeValue.length),(Dt=X.firstChild)!==null;)$=X,X=Dt;for(;;){if(X===t)break e;if($===r&&++nt===c&&(L=E),$===p&&++dt===l&&(Y=E),(Dt=X.nextSibling)!==null)break;X=$,$=X.parentNode}X=Dt}r=L===-1||Y===-1?null:{start:L,end:Y}}else r=null}r=r||{start:0,end:0}}else r=null;for(Lh={focusedElem:t,selectionRange:r},Ns=!1,i=(i&335544064)===i,yn=e,e=i?9270:1024;yn!==null;){if(t=yn,i&&(r=t.deletions,r!==null))for(c=0;c<r.length;c++)i&&ih(r[c]);if(t.alternate===null&&(t.flags&2)!==0)i&&s_(t),mu(i);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&i&&ih(r),mu(i);continue}else if(r!==null&&r.memoizedState!==null){i&&s_(t),mu(i);continue}}r=t.child,(t.subtreeFlags&e)!==0&&r!==null?(r.return=t,yn=r):(i&&u_(t),mu(i))}}$n=null}function mu(t){for(;yn!==null;){var e=yn,i=t,r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){i=void 0,l=r.memoizedProps,r=r.memoizedState;var c=e.stateNode;try{var p=Rr(e.type,l);i=c.getSnapshotBeforeUpdate(p,r),c.__reactInternalSnapshotBeforeUpdate=i}catch(E){ze(e,e.return,E)}}break;case 3:if((l&1024)!==0){if(r=e.stateNode.containerInfo,i=r.nodeType,i===9)Hh(r);else if(i===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Hh(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:i&&r!==null&&(i=ea(r.memoizedProps,r.stateNode),l=e.memoizedProps,l=na(l.default,l.update),l!=="none"&&ps(r,i,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=e.sibling,r!==null){r.return=e.return,yn=r;break}yn=e.return}}function d_(t,e,i){var r=i.flags;switch(i.tag){case 0:case 11:case 15:Vi(t,i),r&4&&Po(5,i);break;case 1:if(Vi(t,i),r&4)if(t=i.stateNode,e===null)try{t.componentDidMount()}catch(p){ze(i,i.return,p)}else{var l=Rr(i.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(p){ze(i,i.return,p)}}r&64&&e_(i),r&512&&Ii(i,i.return);break;case 3:if(Vi(t,i),r&64&&(t=i.updateQueue,t!==null)){if(e=null,i.child!==null)switch(i.child.tag){case 27:case 5:e=i.child.stateNode;break;case 1:e=i.child.stateNode}try{km(t,e)}catch(p){ze(i,i.return,p)}}break;case 27:e===null&&r&4&&r_(i);case 26:case 5:Vi(t,i),e===null&&r&4&&Qf(i),r&512&&Ii(i,i.return);break;case 12:Vi(t,i);break;case 31:Vi(t,i),r&4&&__(t,i);break;case 13:Vi(t,i),r&4&&v_(t,i),r&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=xy.bind(null,i),tM(t,i))));break;case 22:if(r=i.memoizedState!==null||Sn,!r){var c=e!==null&&e.memoizedState!==null||Le;e=Sn,l=Le,Sn=r,(Le=c)&&!l?(r=2,(i.subtreeFlags&8772)!==0&&(r|=1),Mi(t,i,r)):Vi(t,i),Sn=e,Le=l}break;case 30:Vi(t,i),r&512&&Ii(i,i.return);break;case 7:r&512&&Ii(i,i.return);default:Vi(t,i)}}function lh(t,e){for(t=t.child;t!==null;)p_(t,e),t=t.sibling}function p_(t,e){switch(t.tag){case 5:case 26:try{var i=t.stateNode;if(e){var r=i.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=t.stateNode,c=t.memoizedProps.style,p=c!=null&&c.hasOwnProperty("display")?c.display:null;l.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(L){ze(t,t.return,L)}uh(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,Ce=!0}catch(L){ze(t,t.return,L)}break;case 18:try{var E=t.stateNode;e?s0(E,!0):s0(t.stateNode,!1)}catch(L){ze(t,t.return,L)}break;case 22:case 23:t.memoizedState===null&&lh(t,e);break;default:lh(t,e)}}function uh(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var i=t,r=e;switch(i.tag){case 4:p_(i,r);break t;case 22:i.memoizedState===null&&uh(i,r);break t;default:uh(i,r)}}t=t.sibling}}function m_(t){var e=t.alternate;e!==null&&(t.alternate=null,m_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&me(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Je=null,kn=!1;function Si(t,e,i){for(i=i.child;i!==null;)g_(t,e,i),i=i.sibling}function g_(t,e,i){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(Ee,i)}catch{}switch(i.tag){case 26:Le||Cn(i,e),Si(t,e,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&!Le&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Le||Cn(i,e),Io(i);var r=Je,l=kn;Ya(i.type)&&(Je=i.stateNode,kn=!1),Si(t,e,i),S0(i.stateNode,i.type,i.memoizedProps),Je=r,kn=l;break;case 5:Le||Cn(i,e),Io(i);case 6:if(i.tag===6&&Io(i),r=Je,l=kn,Je=null,Si(t,e,i),Je=r,kn=l,Je!==null)if(kn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(i.stateNode),Ce=!0}catch(c){ze(i,e,c)}else try{Je.removeChild(i.stateNode),Ce=!0}catch(c){ze(i,e,c)}break;case 18:Je!==null&&(kn?(t=Je,r0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),Ls(t)):r0(Je,i.stateNode));break;case 4:r=Je,l=kn,Je=i.stateNode.containerInfo,kn=!0,Si(t,e,i),Je=r,kn=l;break;case 0:case 11:case 14:case 15:Fa(2,i,e),Le||Fa(4,i,e),Si(t,e,i);break;case 1:Le||(Cn(i,e),r=i.stateNode,typeof r.componentWillUnmount=="function"&&n_(i,e,r)),Si(t,e,i);break;case 21:Si(t,e,i);break;case 22:Le=(r=Le)||i.memoizedState!==null,Si(t,e,i),Le=r;break;case 30:Cn(i,e),Si(t,e,i);break;case 7:Le||Cn(i,e),Si(t,e,i);break;default:Si(t,e,i)}}function __(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ls(t)}catch(i){ze(e,e.return,i)}}}function v_(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ls(t)}catch(i){ze(e,e.return,i)}}function ly(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new h_),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new h_),e;default:throw Error(s(435,t.tag))}}function gu(t,e){var i=ly(t);e.forEach(function(r){if(!i.has(r)){i.add(r);var l=Sy.bind(null,t,r);r.then(l,l)}})}function Fn(t,e,i){var r=e.deletions;if(r!==null)for(var l=0;l<r.length;l++){var c=r[l],p=t,E=e,L=E;t:for(;L!==null;){switch(L.tag){case 27:if(Ya(L.type)){Je=L.stateNode,kn=!1;break t}break;case 5:Je=L.stateNode,kn=!1;break t;case 3:case 4:Je=L.stateNode.containerInfo,kn=!0;break t}L=L.return}if(Je===null)throw Error(s(160));g_(p,E,c),Je=null,kn=!1,p=c.alternate,p!==null&&(p.return=null),c.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)x_(e,t,i),e=e.sibling}var yi=null;function x_(t,e,i){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var c=0;c<r.length;c++){var p=r[c];p.ref.impl=p.nextImpl}Fn(e,t,i),Hn(t),l&4&&(Fa(3,t,t.return),Po(3,t),Fa(5,t,t.return));break;case 1:Fn(e,t,i),Hn(t),l&512&&(Le||r===null||Cn(r,r.return)),l&64&&Sn&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?e:i.concat(e))));break;case 26:if(c=yi,Fn(e,t,i),Hn(t),l&512&&(Le||r===null||Cn(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,i=t.memoizedState,r===null)if(i===null)if(t.stateNode===null)if(Sn)t.stateNode=n0(t.type,t.memoizedProps,e.containerInfo,t);else{t:{e=t.type,i=t.memoizedProps,l=c.ownerDocument||c;e:switch(e){case"title":r=l.getElementsByTagName("title")[0],(!r||r[ke]||r[bt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(e),l.head.insertBefore(r,l.querySelector("head > title"))),wn(r,e,i),r[bt]=t,je(r),e=r;break t;case"link":if(c=A0("link","href",l).get(e+(i.href||""))){for(p=0;p<c.length;p++)if(r=c[p],r.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&r.getAttribute("rel")===(i.rel==null?null:i.rel)&&r.getAttribute("title")===(i.title==null?null:i.title)&&r.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){c.splice(p,1);break e}}r=l.createElement(e),wn(r,e,i),l.head.appendChild(r);break;case"meta":if(c=A0("meta","content",l).get(e+(i.content||""))){for(p=0;p<c.length;p++)if(r=c[p],r.getAttribute("content")===(i.content==null?null:""+i.content)&&r.getAttribute("name")===(i.name==null?null:i.name)&&r.getAttribute("property")===(i.property==null?null:i.property)&&r.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&r.getAttribute("charset")===(i.charSet==null?null:i.charSet)){c.splice(p,1);break e}}r=l.createElement(e),wn(r,e,i),l.head.appendChild(r);break;default:throw Error(s(468,e))}r[bt]=t,je(r),e=r}t.stateNode=e}else Sn||Wh(c,t.type,t.stateNode);else t.stateNode=b0(c,i,t.memoizedProps);else l!==i?(l===null?(e=r.stateNode,e===null||Le||e.parentNode.removeChild(e)):l.count--,i===null?Sn||Wh(c,t.type,t.stateNode):b0(c,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Jf(t,t.memoizedProps,r.memoizedProps);break;case 27:Fn(e,t,i),Hn(t),l&512&&(Le||r===null||Cn(r,r.return)),r!==null&&l&4&&Jf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(c=Hi,Hi=!1,Fn(e,t,i),Hi=c,Hn(t),l&512&&(Le||r===null||Cn(r,r.return)),t.flags&32){e=t.stateNode;try{Kr(e,""),Ce=!0}catch(nt){ze(t,t.return,nt)}}l&4&&t.stateNode!=null&&(e=t.memoizedProps,Jf(t,e,r!==null?r.memoizedProps:e)),l&1024&&(sh=!0);break;case 6:if(Fn(e,t,i),Hn(t),l&4){if(t.stateNode===null)throw Error(s(162));e=t.memoizedProps,i=t.stateNode;try{i.nodeValue=e,Ce=!0}catch(nt){ze(t,t.return,nt)}}break;case 3:if(Ce=!1,Uu=null,c=yi,yi=Wo(e.containerInfo),Fn(e,t,i),yi=c,Hn(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Ls(e.containerInfo)}catch(nt){ze(t,t.return,nt)}sh&&(sh=!1,S_(t)),Ce=!1;break;case 4:l=Hi,Hi=Sn,r=Hp(),c=yi,yi=Wo(t.stateNode.containerInfo),Fn(e,t,i),Hn(t),yi=c,Ce&&Bo&&(pu=!0),Ce=r,Hi=l;break;case 12:Fn(e,t,i),Hn(t);break;case 31:Fn(e,t,i),Hn(t),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,gu(t,e)));break;case 13:Fn(e,t,i),Hn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(xu=H()),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,gu(t,e)));break;case 22:c=t.memoizedState!==null,p=r!==null&&r.memoizedState!==null;var E=Sn,L=Le,Y=Hi;Sn=E||c,Hi=Y||c,Le=L||p,Fn(e,t,i),Le=L,Hi=Y,Sn=E,Hn(t),l&8192&&(e=t.stateNode,e._visibility=c?e._visibility&-2:e._visibility|1,!c||r===null||p||Sn||Le||(e=p||Le,i=Sn,r=Le,Sn=c||Sn,Le=e,Ha(t,2),Sn=i,Le=r),!c&&Hi||lh(t,c)),l&4&&(e=t.updateQueue,e!==null&&(i=e.retryQueue,i!==null&&(e.retryQueue=null,gu(t,i))));break;case 19:Fn(e,t,i),Hn(t),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,gu(t,e)));break;case 30:l&512&&(Le||r===null||Cn(r,r.return)),l=Hp(),c=Bo,p=(i&335544064)===i,E=t.memoizedProps,Bo=p&&na(E.default,E.update)!=="none",Fn(e,t,i),Hn(t),p&&r!==null&&Ce&&(t.flags|=4),Bo=c,Ce=l;break;case 21:break;case 7:l&512&&(Le||r===null||Cn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:Fn(e,t,i),Hn(t)}}function Hn(t){var e=t.flags;if(e&2){try{for(var i,r=t.return;r!==null;){if(a_(r)){i=r;break}r=r.return}r=null;for(var l=t.return;l!==null;){if(Kf(l)){var c=l.stateNode;r===null?r=[c]:r.push(c)}if(Zf(l))break;l=l.return}var p=r;if(i==null)throw Error(s(160));switch(i.tag){case 27:var E=i.stateNode,L=$f(t);cu(t,L,E,p);break;case 5:var Y=i.stateNode;i.flags&32&&(Kr(Y,""),i.flags&=-33);var nt=$f(t);cu(t,nt,Y,p);break;case 3:case 4:var dt=i.stateNode.containerInfo,X=$f(t);th(t,X,dt,p);break;default:throw Error(s(161))}}catch($){ze(t,t.return,$)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function S_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;S_(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,Ns=!0,e.reset(),Ns=!1),t=t.sibling}}function ms(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)y_(e,t),e=e.sibling;else f_(e)}function y_(t,e){var i=t.alternate;if(i===null)eh(t,!1);else switch(t.tag){case 3:if(oh=Gi=!1,o_(),ms(e,t),!Gi&&!pu){if(t=Bi,t!==null)for(var r=0;r<t.length;r+=3){i=t[r];var l=t[r+1];l0(i,t[r+2]),i=i.ownerDocument.documentElement,i!==null&&i.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),oh=!0}Bi=null;break;case 5:ms(e,t);break;case 4:r=Gi,Gi=!1,ms(e,t),Gi&&(pu=!0),Gi=r;break;case 22:t.memoizedState===null&&(i.memoizedState!==null?eh(t,!1):ms(e,t));break;case 30:r=Gi,l=o_(),Gi=!1,ms(e,t),Gi&&(t.flags|=4);var c=t.memoizedProps,p=t.stateNode;e=ea(c,p),p=ea(i.memoizedProps,p);var E=na(c.default,c.update);E==="none"?e=!1:(c=i.memoizedState,i.memoizedState=null,i=t.child,Xn=0,e=rh(t,i,e,p,E,c,!0),Xn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&e?(Ms(t,t.memoizedProps.onUpdate),Bi=l):l!==null&&(l.push.apply(l,Bi),Bi=l),Gi=(t.flags&32)!==0?!0:r;break;default:ms(e,t)}}function Vi(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)d_(t,e.alternate,e),e=e.sibling}function Ha(t,e){for(t=t.child;t!==null;){var i=t,r=e;switch(i.tag){case 0:case 11:case 14:case 15:Fa(4,i,i.return),Ha(i,r);break;case 1:Cn(i,i.return);var l=i.stateNode;typeof l.componentWillUnmount=="function"&&n_(i,i.return,l),Ha(i,r);break;case 27:(r&2)!==0&&S0(i.stateNode,i.type,i.memoizedProps);case 5:Cn(i,i.return),i.tag!==5&&i.tag!==27||Io(i),Ha(i,r);break;case 6:Io(i);break;case 26:Cn(i,i.return),l=i.stateNode,i.memoizedState!==null||l===null||Le||l.parentNode.removeChild(l),Ha(i,r);break;case 22:i.memoizedState===null&&Ha(i,r);break;case 30:Cn(i,i.return),Ha(i,r);break;case 7:Cn(i,i.return);default:Ha(i,r)}t=t.sibling}}function Mi(t,e,i){for(i=(e.subtreeFlags&8772)!==0?i:i&-2,e=e.child;e!==null;){var r=e.alternate,l=t,c=e,p=c.flags,E=(i&1)!==0;switch(c.tag){case 0:case 11:case 15:Mi(l,c,i),Po(4,c);break;case 1:if(Mi(l,c,i),r=c,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(nt){ze(r,r.return,nt)}if(r=c,l=r.updateQueue,l!==null){var L=r.stateNode;try{var Y=l.shared.hiddenCallbacks;if(Y!==null)for(l.shared.hiddenCallbacks=null,l=0;l<Y.length;l++)Xm(Y[l],L)}catch(nt){ze(r,r.return,nt)}}E&&p&64&&e_(c),Ii(c,c.return);break;case 27:(i&2)!==0&&r_(c);case 5:c.tag!==5&&c.tag!==27||i_(c),Mi(l,c,i),E&&r===null&&p&4&&Qf(c),Ii(c,c.return);break;case 6:i_(c);break;case 26:L=c.stateNode,c.memoizedState!==null||L===null||Sn||Wh(Wo(L.ownerDocument),c.type,L),Mi(l,c,i),E&&r===null&&p&4&&Qf(c),Ii(c,c.return);break;case 12:Mi(l,c,i);break;case 31:Mi(l,c,i),E&&p&4&&__(l,c);break;case 13:Mi(l,c,i),E&&p&4&&v_(l,c);break;case 22:c.memoizedState===null&&Mi(l,c,i),Ii(c,c.return);break;case 30:Mi(l,c,i),Ii(c,c.return);break;case 7:Ii(c,c.return);default:Mi(l,c,i)}e=e.sibling}}function ch(t,e){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&Eo(i))}function fh(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Eo(t))}function pi(t,e,i,r){var l=(i&335544064)===i;if(e.subtreeFlags&(l?10262:10256))for(e=e.child;e!==null;)M_(t,e,i,r),e=e.sibling;else l&&c_(e)}function M_(t,e,i,r){var l=(i&335544064)===i;l&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&du(e);var c=e.flags;switch(e.tag){case 0:case 11:case 15:pi(t,e,i,r),c&2048&&Po(9,e);break;case 1:pi(t,e,i,r);break;case 3:pi(t,e,i,r),l&&oh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,e.alternate!==null&&(c=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==c&&(e.refCount++,c!=null&&Eo(c)));break;case 12:if(c&2048){pi(t,e,i,r),c=e.stateNode;try{var p=e.memoizedProps,E=p.id,L=p.onPostCommit;typeof L=="function"&&L(E,e.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(Y){ze(e,e.return,Y)}}else pi(t,e,i,r);break;case 31:pi(t,e,i,r);break;case 13:pi(t,e,i,r);break;case 23:break;case 22:p=e.stateNode,E=e.alternate,e.memoizedState!==null?(l&&E!==null&&E.memoizedState===null&&du(E),p._visibility&2?pi(t,e,i,r):Fo(t,e)):(l&&E!==null&&E.memoizedState!==null&&du(e),p._visibility&2?pi(t,e,i,r):(p._visibility|=2,gs(t,e,i,r,(e.subtreeFlags&10256)!==0||!1))),c&2048&&ch(E,e);break;case 24:pi(t,e,i,r),c&2048&&fh(e.alternate,e);break;case 30:l&&(c=e.alternate,c!==null&&(Fi(c.child,!0),Fi(e.child,!0))),pi(t,e,i,r);break;default:pi(t,e,i,r)}}function gs(t,e,i,r,l){for(l=l&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var c=t,p=e,E=i,L=r,Y=p.flags;switch(p.tag){case 0:case 11:case 15:gs(c,p,E,L,l),Po(8,p);break;case 23:break;case 22:var nt=p.stateNode;p.memoizedState!==null?nt._visibility&2?gs(c,p,E,L,l):Fo(c,p):(nt._visibility|=2,gs(c,p,E,L,l)),l&&Y&2048&&ch(p.alternate,p);break;case 24:gs(c,p,E,L,l),l&&Y&2048&&fh(p.alternate,p);break;default:gs(c,p,E,L,l)}e=e.sibling}}function Fo(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var i=t,r=e,l=r.flags;switch(r.tag){case 22:Fo(i,r),l&2048&&ch(r.alternate,r);break;case 24:Fo(i,r),l&2048&&fh(r.alternate,r);break;default:Fo(i,r)}e=e.sibling}}var Cr=8192;function wr(t,e,i){if(t.subtreeFlags&Cr)for(t=t.child;t!==null;)E_(t,e,i),t=t.sibling}function E_(t,e,i){switch(t.tag){case 26:wr(t,e,i),t.flags&Cr&&(t.memoizedState!==null?pM(i,yi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&D0(i,t)));break;case 5:wr(t,e,i),t.flags&Cr&&(t=t.stateNode,(e&335544128)===e&&D0(i,t));break;case 3:case 4:var r=yi;yi=Wo(t.stateNode.containerInfo),wr(t,e,i),yi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Cr,Cr=16777216,wr(t,e,i),Cr=r):wr(t,e,i));break;case 30:if((t.flags&Cr)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var l=t.stateNode;l.paired=null,$n===null&&($n=new Map),$n.set(r,l)}wr(t,e,i);break;default:wr(t,e,i)}}function T_(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Ho(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var r=e[i];yn=r,A_(r,t)}T_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)b_(t),t=t.sibling}function b_(t){switch(t.tag){case 0:case 11:case 15:Ho(t),t.flags&2048&&Fa(9,t,t.return);break;case 3:Ho(t);break;case 12:Ho(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,_u(t)):Ho(t);break;default:Ho(t)}}function _u(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var i=0;i<e.length;i++){var r=e[i];yn=r,A_(r,t)}T_(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Fa(8,e,e.return),_u(e);break;case 22:i=e.stateNode,i._visibility&2&&(i._visibility&=-3,_u(e));break;default:_u(e)}t=t.sibling}}function A_(t,e){for(;yn!==null;){var i=yn;switch(i.tag){case 0:case 11:case 15:Fa(8,i,e);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var r=i.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Eo(i.memoizedState.cache)}if(r=i.child,r!==null)r.return=i,yn=r;else t:for(i=t;yn!==null;){r=yn;var l=r.sibling,c=r.return;if(m_(r),r===i){yn=null;break t}if(l!==null){l.return=c,yn=l;break t}yn=c}}}var uy={getCacheForType:function(t){var e=bn(rn),i=e.data.get(t);return i===void 0&&(i=t(),e.data.set(t,i)),i},cacheSignal:function(){return bn(rn).controller.signal}},cy=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Xe=null,ge=null,Se=0,Oe=0,ti=null,Ga=!1,_s=!1,hh=!1,fa=0,en=0,Va=0,Dr=0,vu=0,ei=0,vs=0,Go=null,qn=null,dh=!1,xu=0,R_=0,Su=1/0,yu=null,Xa=null,$e=0,Ei=null,Ur=null,Xi=0,ph=0,mh=null,C_=null,xs=null,Ss=null,ys=null,Vo=0,Mu=null;function ni(){return(Ue&2)!==0&&Se!==0?Se&-Se:Tt.T!==null?bh():K()}function w_(){if(ei===0)if((Se&536870912)===0||fe){var t=fr;fr<<=1,(fr&3932160)===0&&(fr=262144),ei=t}else ei=536870912;return t=An.current,t!==null&&(t.flags|=32),ei}function Ms(t,e){if(e!=null){var i=t.stateNode,r=i.ref;r===null&&(r=i.ref=u0(ea(t.memoizedProps,i))),Ss===null&&(Ss=[]),Ss.push(e.bind(null,r))}}function Yn(t,e,i){(t===Xe&&(Oe===2||Oe===9)||t.cancelPendingCommit!==null)&&(Es(t,0),ka(t,Se,ei,!1)),hr(t,i),((Ue&2)===0||t!==Xe)&&(t===Xe&&((Ue&2)===0&&(Dr|=i),en===4&&ka(t,Se,ei,!1)),ki(t))}function D_(t,e,i){if((Ue&6)!==0)throw Error(s(327));var r=!i&&(e&127)===0&&(e&t.expiredLanes)===0||Ta(t,e),l=r?dy(t,e):_h(t,e,!0),c=r;do{if(l===0){_s&&!r&&ka(t,e,0,!1);break}else{if(i=t.current.alternate,c&&!fy(i)){l=_h(t,e,!1),c=!1;continue}if(l===2){if(c=e,t.errorRecoveryDisabledLanes&c)var p=0;else p=t.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){e=p;t:{var E=t;l=Go;var L=E.current.memoizedState.isDehydrated;if(L&&(Es(E,p).flags|=256),p=_h(E,p,!1),p!==2&&p!==6){if(hh&&!L){E.errorRecoveryDisabledLanes|=c,Dr|=c,l=4;break t}c=qn,qn=l,c!==null&&(qn===null?qn=c:qn.push.apply(qn,c))}l=p}if(c=!1,l!==2)continue}}if(l===1){Es(t,0),ka(t,e,0,!0);break}t:{switch(r=t,c=l,c){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:ka(r,e,ei,!Ga);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(l=xu+300-H(),10<l)){if(ka(r,e,ei,!Ga),Qi(r,0,!0)!==0)break t;Xi=e,r.timeoutHandle=Ph(U_.bind(null,r,i,qn,yu,dh,e,ei,Dr,vs,Ga,c,"Throttled",-0,0),l);break t}U_(r,i,qn,yu,dh,e,ei,Dr,vs,Ga,c,null,-0,0)}}break}while(!0);ki(t)}function U_(t,e,i,r,l,c,p,E,L,Y,nt,dt,X,$){t.timeoutHandle=-1;var Dt=e.subtreeFlags,kt=(c&335544064)===c;if(dt=null,(kt||Dt&8192||(Dt&16785408)===16785408)&&(dt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Oi},$n=null,E_(e,c,dt),kt&&(Dt=dt,kt=t.containerInfo,kt=(kt.nodeType===9?kt:kt.ownerDocument).__reactViewTransition,kt!=null&&(Dt.count++,Dt.waitingForViewTransition=!0,Dt=Ko.bind(Dt),kt.finished.then(Dt,Dt))),Dt=(c&62914560)===c?xu-H():(c&4194048)===c?R_-H():0,Dt=mM(dt,Dt),Dt!==null)){Xi=c,t.cancelPendingCommit=Dt(F_.bind(null,t,e,c,i,r,l,p,E,L,Y,nt,dt,null,X,$)),ka(t,c,p,!Y);return}F_(t,e,c,i,r,l,p,E,L,Y,nt,dt)}function fy(t){for(var e=t;;){var i=e.tag;if((i===0||i===11||i===15)&&e.flags&16384&&(i=e.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var r=0;r<i.length;r++){var l=i[r],c=l.getSnapshot;l=l.value;try{if(!Qn(c(),l))return!1}catch{return!1}}if(i=e.child,e.subtreeFlags&16384&&i!==null)i.return=e,e=i;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ka(t,e,i,r){e=uo(t,e),e&=~vu,e&=~Dr,t.suspendedLanes|=e,t.pingedLanes&=~e,r&&(t.warmLanes|=e),r=t.expirationTimes;for(var l=e;0<l;){var c=31-Nn(l),p=1<<c;r[c]=-1,l&=~p}i!==0&&Sl(t,i,e)}function Eu(){return(Ue&6)===0?(Xo(0),!1):!0}function gh(){if(ge!==null){if(Oe===0)var t=ge.return;else t=ge,ra=vr=null,Tf(t),us=null,Ao=0,t=ge;for(;t!==null;)t_(t.alternate,t),t=t.return;ge=null}}function Es(t,e){var i=t.timeoutHandle;return i!==-1&&(t.timeoutHandle=-1,zy(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),Xi=0,gh(),Xe=t,ge=i=ia(t.current,null),Se=e,Oe=0,ti=null,Ga=!1,_s=Ta(t,e),hh=!1,vs=ei=vu=Dr=Va=en=0,qn=Go=null,dh=!1,fa=uo(t,e),Ul(),i}function N_(t,e){oe=null,Tt.H=nu,e===ls||e===Vl?(e=Fm(),Oe=3):e===ff?(e=Fm(),Oe=4):Oe=e===Ff?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ti=e,ge===null&&(en=1,iu(t,ci(e,t.current)))}function L_(){var t=An.current;return t===null?!0:(Se&4194048)===Se?On===null:(Se&62914560)===Se||(Se&536870912)!==0?t===On:!1}function O_(){var t=Tt.H;return Tt.H=nu,t===null?nu:t}function z_(){var t=Tt.A;return Tt.A=uy,t}function Tu(){en=4,Ga||(Se&4194048)!==Se&&An.current!==null||(_s=!0),(Va&134217727)===0&&(Dr&134217727)===0||Xe===null||ka(Xe,Se,ei,!1)}function _h(t,e,i){var r=Ue;Ue|=2;var l=O_(),c=z_();(Xe!==t||Se!==e)&&(yu=null,Es(t,e)),e=!1;var p=en;t:do try{if(Oe!==0&&ge!==null){var E=ge,L=ti;switch(Oe){case 8:gh(),p=6;break t;case 3:case 2:case 9:case 6:An.current===null&&(e=!0);var Y=Oe;if(Oe=0,ti=null,Ts(t,E,L,Y),i&&_s){p=0;break t}break;default:Y=Oe,Oe=0,ti=null,Ts(t,E,L,Y)}}hy(),p=en;break}catch(nt){N_(t,nt)}while(!0);return e&&t.shellSuspendCounter++,ra=vr=null,Ue=r,Tt.H=l,Tt.A=c,ge===null&&(Xe=null,Se=0,Ul()),p}function hy(){for(;ge!==null;)P_(ge)}function dy(t,e){var i=Ue;Ue|=2;var r=O_(),l=z_();Xe!==t||Se!==e?(yu=null,Su=H()+500,Es(t,e)):_s=Ta(t,e);t:do try{if(Oe!==0&&ge!==null){e=ge;var c=ti;e:switch(Oe){case 1:Oe=0,ti=null,Ts(t,e,c,1);break;case 2:case 9:if(Im(c)){Oe=0,ti=null,I_(e);break}e=function(){Oe!==2&&Oe!==9||Xe!==t||(Oe=7),ki(t)},c.then(e,e);break t;case 3:Oe=7;break t;case 4:Oe=5;break t;case 7:Im(c)?(Oe=0,ti=null,I_(e)):(Oe=0,ti=null,Ts(t,e,c,7));break;case 5:var p=null;switch(ge.tag){case 26:p=ge.memoizedState;case 5:case 27:var E=ge;if(p?C0(p):E.stateNode.complete){Oe=0,ti=null;var L=E.sibling;if(L!==null)ge=L;else{var Y=E.return;Y!==null?(ge=Y,bu(Y)):ge=null}break e}}Oe=0,ti=null,Ts(t,e,c,5);break;case 6:Oe=0,ti=null,Ts(t,e,c,6);break;case 8:gh(),en=6;break t;default:throw Error(s(462))}}py();break}catch(nt){N_(t,nt)}while(!0);return ra=vr=null,Tt.H=r,Tt.A=l,Ue=i,ge!==null?0:(Xe=null,Se=0,Ul(),en)}function py(){for(;ge!==null&&!se();)P_(ge)}function P_(t){var e=Jg(t.alternate,t,fa);t.memoizedProps=t.pendingProps,e===null?bu(t):ge=e}function I_(t){var e=t,i=e.alternate;switch(e.tag){case 15:case 0:e=qg(i,e,e.pendingProps,e.type,void 0,Se);break;case 11:e=qg(i,e,e.pendingProps,e.type.render,e.ref,Se);break;case 5:Tf(e);var r=e;r===xn&&(fe?(Il(r),r.tag===5&&r.stateNode!=null&&(qe=r.stateNode)):(Il(r),fe=!0));default:t_(i,e),e=ge=Am(e,fa),e=Jg(i,e,fa)}t.memoizedProps=t.pendingProps,e===null?bu(t):ge=e}function Ts(t,e,i,r){ra=vr=null,Tf(e),us=null,Ao=0;var l=e.return;try{if(ey(t,l,e,i,Se)){en=1,iu(t,ci(i,t.current)),ge=null;return}}catch(c){if(l!==null)throw ge=l,c;en=1,iu(t,ci(i,t.current)),ge=null;return}e.flags&32768?(fe||r===1?t=!0:_s||(Se&536870912)!==0?t=!1:(Ga=t=!0,(r===2||r===9||r===3||r===6)&&(r=An.current,r!==null&&r.tag===13&&(r.flags|=16384))),B_(e,t)):bu(e)}function bu(t){var e=t;do{if((e.flags&32768)!==0){B_(e,Ga);return}t=e.return;var i=ry(e.alternate,e,fa);if(i!==null){ge=i;return}if(e=e.sibling,e!==null){ge=e;return}ge=e=t}while(e!==null);en===0&&(en=5)}function B_(t,e){do{var i=sy(t.alternate,t);if(i!==null){i.flags&=32767,ge=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!e&&(t=t.sibling,t!==null)){ge=t;return}ge=t=i}while(t!==null);en=6,ge=null}function F_(t,e,i,r,l,c,p,E,L,Y,nt,dt){t.cancelPendingCommit=null;do Au();while($e!==0);if((Ue&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));t===Xe&&(ge=Xe=null,Se=0),Ur=e,Ei=t,Xi=i,mh=l,C_=r,my(t,e,i,p,E,L,dt)}}function my(t,e,i,r,l,c,p){var E=e.lanes|e.childLanes;if(ph=E,E|=Qc,Cc(t,i,E,r,l,c),Ss=null,(i&335544064)===i?(ys=XS(t),r=10262):(ys=null,r=10256),(e.subtreeFlags&r)!==0||(e.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,yy(Pt,function(){return yh(),null})):(t.callbackNode=null,t.callbackPriority=0),fu=!1,r=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||r){r=Tt.T,Tt.T=null,l=Ct.p,Ct.p=2,c=Ue,Ue|=4;try{oy(t,e,i)}finally{Ue=c,Ct.p=l,Tt.T=r}}$e=1,fu?xs=Gy(p,t.containerInfo,ys,vh,xh,_y,Sh,yh,gy):(vh(),xh(),Sh())}function gy(t){if($e!==0){var e=Ei.onRecoverableError;e(t,{componentStack:null})}}function _y(){$e===3&&($e=0,y_(Ur,Ei),$e=4)}function vh(){if($e===1){$e=0;var t=Ei,e=Ur,i=Xi,r=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||r){r=Tt.T,Tt.T=null;var l=Ct.p;Ct.p=2;var c=Ue;Ue|=4;try{Bo=pu=!1,x_(e,t,i),i=Lh;var p=gm(t.containerInfo),E=i.focusedElem,L=i.selectionRange;if(p!==E&&E&&E.ownerDocument&&mm(E.ownerDocument.documentElement,E)){if(L!==null&&Yc(E)){var Y=L.start,nt=L.end;if(nt===void 0&&(nt=Y),"selectionStart"in E)E.selectionStart=Y,E.selectionEnd=Math.min(nt,E.value.length);else{var dt=E.ownerDocument||document,X=dt&&dt.defaultView||window;if(X.getSelection){var $=X.getSelection(),Dt=E.textContent.length,kt=Math.min(L.start,Dt),le=L.end===void 0?kt:Math.min(L.end,Dt);!$.extend&&kt>le&&(p=le,le=kt,kt=p);var q=pm(E,kt),I=pm(E,le);if(q&&I&&($.rangeCount!==1||$.anchorNode!==q.node||$.anchorOffset!==q.offset||$.focusNode!==I.node||$.focusOffset!==I.offset)){var J=dt.createRange();J.setStart(q.node,q.offset),$.removeAllRanges(),kt>le?($.addRange(J),$.extend(I.node,I.offset)):(J.setEnd(I.node,I.offset),$.addRange(J))}}}}for(dt=[],$=E;$=$.parentNode;)$.nodeType===1&&dt.push({element:$,left:$.scrollLeft,top:$.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<dt.length;E++){var ft=dt[E];ft.element.scrollLeft=ft.left,ft.element.scrollTop=ft.top}}Ns=!!Nh,Lh=Nh=null}finally{Ue=c,Ct.p=l,Tt.T=r}}t.current=e,$e=2}}function xh(){if($e===2){$e=0;var t=Ei,e=Ur,i=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||i){i=Tt.T,Tt.T=null;var r=Ct.p;Ct.p=2;var l=Ue;Ue|=4;try{d_(t,e.alternate,e)}finally{Ue=l,Ct.p=r,Tt.T=i}}$e=3}}function Sh(){if($e===4||$e===3){$e=0;var t=xs;xs=null,Ie();var e=Ei,i=Ur,r=Xi,l=C_,c=(r&335544064)===r?10262:10256;if((i.subtreeFlags&c)!==0||(i.flags&c)!==0?$e=5:($e=0,Ur=Ei=null,H_(e,e.pendingLanes)),c=e.pendingLanes,c===0&&(Xa=null),rt(r),i=i.stateNode,We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(Ee,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=Tt.T,c=Ct.p,Ct.p=2,Tt.T=null;try{for(var p=e.onRecoverableError,E=0;E<l.length;E++){var L=l[E];p(L.value,{componentStack:L.stack})}}finally{Tt.T=i,Ct.p=c}}if(l=Ss,p=ys,ys=null,l!==null&&(Ss=null,p===null&&(p=[]),t!==null))for(L=0;L<l.length;L++)i=(0,l[L])(p),i!==void 0&&t.finished.finally(i);(Xi&3)!==0&&Au(),ki(e),c=e.pendingLanes,(r&261930)!==0&&(c&42)!==0?e===Mu?Vo++:(Vo=0,Mu=e):(Vo=0,Mu=null),Xo(0)}}function H_(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Eo(e)))}function Au(){return xs!==null&&(xs.skipTransition(),xs=null),vh(),xh(),Sh(),yh()}function yh(){if($e!==5)return!1;var t=Ei,e=ph;ph=0;var i=rt(Xi),r=Tt.T,l=Ct.p;try{Ct.p=32>i?32:i,Tt.T=null,i=mh,mh=null;var c=Ei,p=Xi;if($e=0,Ur=Ei=null,Xi=0,(Ue&6)!==0)throw Error(s(331));var E=Ue;if(Ue|=4,b_(c.current),M_(c,c.current,p,i),Ue=E,Xo(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(Ee,c)}catch{}return!0}finally{Ct.p=l,Tt.T=r,H_(t,e)}}function G_(t,e,i){e=ci(i,e),e=Bf(t.stateNode,e,2),t=za(t,e,2),t!==null&&(hr(t,2),ki(t))}function ze(t,e,i){if(t.tag===3)G_(t,t,i);else for(;e!==null;){if(e.tag===3){G_(e,t,i);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xa===null||!Xa.has(r))){t=ci(i,t),i=Ig(2),r=za(e,i,2),r!==null&&(Bg(i,r,e,t),hr(r,2),ki(r));break}}e=e.return}}function Mh(t,e,i){var r=t.pingCache;if(r===null){r=t.pingCache=new cy;var l=new Set;r.set(e,l)}else l=r.get(e),l===void 0&&(l=new Set,r.set(e,l));l.has(i)||(hh=!0,l.add(i),t=vy.bind(null,t,e,i),e.then(t,t))}function vy(t,e,i){var r=t.pingCache;r!==null&&r.delete(e),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,Xe===t&&(Se&i)===i&&((en===4||en===3&&(Se&62914560)===Se&&300>H()-xu)&&(Ue&2)===0?Es(t,0):vu|=i,vs===Se&&(vs=0)),ki(t)}function V_(t,e){e===0&&(e=xl()),t=mr(t,e),t!==null&&(hr(t,e),ki(t))}function xy(t){var e=t.memoizedState,i=0;e!==null&&(i=e.retryLane),V_(t,i)}function Sy(t,e){var i=0;switch(t.tag){case 31:case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(i=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(e),V_(t,i)}function yy(t,e){return Vt(t,e)}var bs=null,As=null,Eh=!1,Ru=!1,Th=!1,qa=0;function ki(t){t!==As&&t.next===null&&(As===null?bs=As=t:As=As.next=t),Ru=!0,Eh||(Eh=!0,Ey())}function Xo(t,e){if(!Th&&Ru){Th=!0;do for(var i=!1,r=bs;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var c=0;else{var p=r.suspendedLanes,E=r.pingedLanes;c=(1<<31-Nn(42|t)+1)-1,c&=l&~(p&~E),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(i=!0,Y_(r,c))}else c=Se,c=Qi(r,r===Xe?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||Ta(r,c)||(i=!0,Y_(r,c));r=r.next}while(i);Th=!1}}function My(){X_()}function X_(){Ru=Eh=!1;var t=0;qa!==0&&Oy()&&(t=qa);for(var e=H(),i=null,r=bs;r!==null;){var l=r.next,c=k_(r,e);c===0?(r.next=null,i===null?bs=l:i.next=l,l===null&&(As=i)):(i=r,(t!==0||(c&3)!==0)&&(Ru=!0)),r=l}$e!==0&&$e!==5||Xo(t),qa!==0&&(qa=0)}function k_(t,e){for(var i=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var p=31-Nn(c),E=1<<p,L=l[p];L===-1?((E&i)===0||(E&r)!==0)&&(l[p]=Rc(E,e)):L<=e&&(t.expiredLanes|=E),c&=~E}if(e=Xe,i=Se,i=Qi(t,t===e?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,i===0||t===e&&(Oe===2||Oe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&he(r),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||Ta(t,i)){if(e=i&-i,e===t.callbackPriority)return e;switch(r!==null&&he(r),rt(i)){case 2:case 8:i=xt;break;case 32:i=Pt;break;case 268435456:i=re;break;default:i=Pt}return r=q_.bind(null,t),i=Vt(i,r),t.callbackPriority=e,t.callbackNode=i,e}return r!==null&&r!==null&&he(r),t.callbackPriority=2,t.callbackNode=null,2}function q_(t,e){if($e!==0&&$e!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(Au()&&t.callbackNode!==i)return null;var r=Se;return r=Qi(t,t===Xe?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(D_(t,r,e),k_(t,H()),t.callbackNode!=null&&t.callbackNode===i?q_.bind(null,t):null)}function Y_(t,e){if(Au())return null;D_(t,e,!0)}function Ey(){Py(function(){(Ue&6)!==0?Vt(lt,My):X_()})}function bh(){if(qa===0){var t=yr;t===0&&(t=cr,cr<<=1,(cr&261888)===0&&(cr=256)),qa=t}return qa}function W_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:El(t)}function Ty(t,e,i,r,l){if(e==="submit"&&i&&i.stateNode===l){var c=W_((l[Ut]||null).action),p=r.submitter;p&&(e=(e=p[Ut]||null)?W_(e.formAction):p.getAttribute("formAction"),e!==null&&(c=e,p=null));var E=new Rl("action","action",null,r,l);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(qa!==0){var L=new FormData(l,p);Lf(i,{pending:!0,data:L,method:l.method,action:c},null,L)}}else typeof c=="function"&&(E.preventDefault(),L=new FormData(l,p),Lf(i,{pending:!0,data:L,method:l.method,action:c},c,L))},currentTarget:l}]})}}for(var Ah=0;Ah<Kc.length;Ah++){var Rh=Kc[Ah],by=Rh.toLowerCase(),Ay=Rh[0].toUpperCase()+Rh.slice(1);xi(by,"on"+Ay)}xi(xm,"onAnimationEnd"),xi(Sm,"onAnimationIteration"),xi(ym,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(zS,"onTransitionRun"),xi(PS,"onTransitionStart"),xi(IS,"onTransitionCancel"),xi(Mm,"onTransitionEnd"),fn("onMouseEnter",["mouseout","mouseover"]),fn("onMouseLeave",["mouseout","mouseover"]),fn("onPointerEnter",["pointerout","pointerover"]),fn("onPointerLeave",["pointerout","pointerover"]),an("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),an("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),an("onBeforeInput",["compositionend","keypress","textInput","paste"]),an("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),an("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),an("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ry=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ko));function j_(t,e){e=(e&4)!==0;for(var i=0;i<t.length;i++){var r=t[i],l=r.event;r=r.listeners;t:{var c=void 0;if(e)for(var p=r.length-1;0<=p;p--){var E=r[p],L=E.instance,Y=E.currentTarget;if(E=E.listener,L!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=Y;try{c(l)}catch(nt){Dl(nt)}l.currentTarget=null,c=L}else for(p=0;p<r.length;p++){if(E=r[p],L=E.instance,Y=E.currentTarget,E=E.listener,L!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=Y;try{c(l)}catch(nt){Dl(nt)}l.currentTarget=null,c=L}}}}function _e(t,e){var i=e[ne];i===void 0&&(i=e[ne]=new Set);var r=t+"__bubble";i.has(r)||(Z_(e,t,2,!1),i.add(r))}function Ch(t,e,i){var r=0;e&&(r|=4),Z_(i,t,r,e)}var Cu="_reactListening"+Math.random().toString(36).slice(2);function wh(t){if(!t[Cu]){t[Cu]=!0,ba.forEach(function(i){i!=="selectionchange"&&(Ry.has(i)||Ch(i,!1,t),Ch(i,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Cu]||(e[Cu]=!0,Ch("selectionchange",!1,e))}}function Z_(t,e,i,r){switch(B0(e)){case 2:var l=xM;break;case 8:l=SM;break;default:l=Zh}i=l.bind(null,e,i,t),l=void 0,!Pc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(e,i,{capture:!0,passive:l}):t.addEventListener(e,i,!0):l!==void 0?t.addEventListener(e,i,{passive:l}):t.addEventListener(e,i,!1)}function Dh(t,e,i,r,l){var c=r;if((e&1)===0&&(e&2)===0&&r!==null)t:for(;;){if(r===null)return;var p=r.tag;if(p===3||p===4){var E=r.stateNode.containerInfo;if(E===l)break;if(p===4)for(p=r.return;p!==null;){var L=p.tag;if((L===3||L===4)&&p.stateNode.containerInfo===l)return;p=p.return}for(;E!==null;){if(p=Wt(E),p===null)return;if(L=p.tag,L===5||L===6||L===26||L===27){r=c=p;continue t}E=E.parentNode}}r=r.return}Zp(function(){var Y=c,nt=Oc(i),dt=[];t:{var X=Em.get(t);if(X!==void 0){var $=Rl,Dt=t;switch(t){case"keypress":if(bl(i)===0)break t;case"keydown":case"keyup":$=fS;break;case"focusin":Dt="focus",$=Hc;break;case"focusout":Dt="blur",$=Hc;break;case"beforeblur":case"afterblur":$=Hc;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=Jp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=$x;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=gS;break;case xm:case Sm:case ym:$=nS;break;case Mm:$=vS;break;case"scroll":case"scrollend":$=Qx;break;case"wheel":$=SS;break;case"copy":case"cut":case"paste":$=aS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=tm;break;case"submit":$=pS;break;case"toggle":case"beforetoggle":$=MS}var kt=(e&4)!==0,le=!kt&&(t==="scroll"||t==="scrollend"),q=kt?X!==null?X+"Capture":null:X;kt=[];for(var I=Y,J;I!==null;){var ft=I;if(J=ft.stateNode,ft=ft.tag,ft!==5&&ft!==26&&ft!==27||J===null||q===null||(ft=fo(I,q),ft!=null&&kt.push(qo(I,ft,J))),le)break;I=I.return}0<kt.length&&(X=new $(X,Dt,null,i,nt),dt.push({event:X,listeners:kt}))}}if((e&7)===0){t:{if($=t==="mouseover"||t==="pointerover",X=t==="mouseout"||t==="pointerout",$&&i!==Lc&&(Dt=i.relatedTarget||i.fromElement)&&(Wt(Dt)||Dt[Jt]))break t;(X||$)&&(Dt=nt.window===nt?nt:($=nt.ownerDocument)?$.defaultView||$.parentWindow:window,X?($=i.relatedTarget||i.toElement,X=Y,$=$?Wt($):null,$!==null&&(le=f($),kt=$.tag,$!==le||kt!==5&&kt!==27&&kt!==6)&&($=null)):(X=null,$=Y),X!==$&&(kt=Jp,ft="onMouseLeave",q="onMouseEnter",I="mouse",(t==="pointerout"||t==="pointerover")&&(kt=tm,ft="onPointerLeave",q="onPointerEnter",I="pointer"),le=X==null?Dt:xe(X),J=$==null?Dt:xe($),Dt=new kt(ft,I+"leave",X,i,nt),Dt.target=le,Dt.relatedTarget=J,ft=null,Wt(nt)===Y&&(kt=new kt(q,I+"enter",$,i,nt),kt.target=J,kt.relatedTarget=le,ft=kt),le=ft,kt=X&&$?G(X,$,Cy):null,X!==null&&K_(dt,Dt,X,kt,!1),$!==null&&le!==null&&K_(dt,le,$,kt,!0)))}t:{if(X=Y?xe(Y):window,$=X.nodeName&&X.nodeName.toLowerCase(),$==="select"||$==="input"&&X.type==="file")var Ht=lm;else if(sm(X))if(um)Ht=NS;else{Ht=DS;var ye=wS}else $=X.nodeName,!$||$.toLowerCase()!=="input"||X.type!=="checkbox"&&X.type!=="radio"?Y&&Nc(Y.elementType)&&(Ht=lm):Ht=US;if(Ht&&(Ht=Ht(t,Y))){om(dt,Ht,i,nt);break t}ye&&ye(t,X,Y)}switch(ye=Y?xe(Y):window,t){case"focusin":(sm(ye)||ye.contentEditable==="true")&&(ts=ye,Wc=Y,So=null);break;case"focusout":So=Wc=ts=null;break;case"mousedown":jc=!0;break;case"contextmenu":case"mouseup":case"dragend":jc=!1,_m(dt,i,nt);break;case"selectionchange":if(OS)break;case"keydown":case"keyup":_m(dt,i,nt)}var jt;if(Vc)t:{switch(t){case"compositionstart":var $t="onCompositionStart";break t;case"compositionend":$t="onCompositionEnd";break t;case"compositionupdate":$t="onCompositionUpdate";break t}$t=void 0}else $r?am(t,i)&&($t="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&($t="onCompositionStart");$t&&(em&&i.locale!=="ko"&&($r||$t!=="onCompositionStart"?$t==="onCompositionEnd"&&$r&&(jt=Kp()):(Aa=nt,Ic="value"in Aa?Aa.value:Aa.textContent,$r=!0)),ye=wu(Y,$t),0<ye.length&&($t=new $p($t,t,null,i,nt),dt.push({event:$t,listeners:ye}),jt?$t.data=jt:(jt=rm(i),jt!==null&&($t.data=jt)))),(jt=TS?bS(t,i):AS(t,i))&&($t=wu(Y,"onBeforeInput"),0<$t.length&&(ye=new $p("onBeforeInput","beforeinput",null,i,nt),dt.push({event:ye,listeners:$t}),ye.data=jt)),Ty(dt,t,Y,i,nt)}j_(dt,e)})}function qo(t,e,i){return{instance:t,listener:e,currentTarget:i}}function wu(t,e){for(var i=e+"Capture",r=[];t!==null;){var l=t,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=fo(t,i),l!=null&&r.unshift(qo(t,l,c)),l=fo(t,e),l!=null&&r.push(qo(t,l,c))),t.tag===3)return r;t=t.return}return[]}function Cy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function K_(t,e,i,r,l){for(var c=e._reactName,p=[];i!==null&&i!==r;){var E=i,L=E.alternate,Y=E.stateNode;if(E=E.tag,L!==null&&L===r)break;E!==5&&E!==26&&E!==27||Y===null||(L=Y,l?(Y=fo(i,c),Y!=null&&p.unshift(qo(i,Y,L))):l||(Y=fo(i,c),Y!=null&&p.push(qo(i,Y,L)))),i=i.return}p.length!==0&&t.push({event:e,listeners:p})}var wy=/\r\n?/g,Dy=/\u0000|\uFFFD/g;function Q_(t){return(typeof t=="string"?t:""+t).replace(wy,`
`).replace(Dy,"")}function J_(t,e){return e=Q_(e),Q_(t)===e}function Pe(t,e,i,r,l,c){switch(i){case"children":if(typeof r=="string")e==="body"||e==="textarea"&&r===""||Kr(t,r);else if(typeof r=="number"||typeof r=="bigint")e!=="body"&&Kr(t,""+r);else return;break;case"className":Ml(t,"class",r);break;case"tabIndex":Ml(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ml(t,i,r);break;case"style":Wp(t,r,c);return;case"data":if(e!=="object"){Ml(t,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||i!=="href")){t.removeAttribute(i);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=El(r),t.setAttribute(i,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(i==="formAction"?(e!=="input"&&Pe(t,e,"name",l.name,l,null),Pe(t,e,"formEncType",l.formEncType,l,null),Pe(t,e,"formMethod",l.formMethod,l,null),Pe(t,e,"formTarget",l.formTarget,l,null)):(Pe(t,e,"encType",l.encType,l,null),Pe(t,e,"method",l.method,l,null),Pe(t,e,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=El(r),t.setAttribute(i,r);break;case"onClick":r!=null&&(t.onclick=Oi);return;case"onScroll":r!=null&&_e("scroll",t);return;case"onScrollEnd":r!=null&&_e("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));(c!=null?c.__html:void 0)!==i&&(t.innerHTML=i)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}i=El(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":r===!0?t.setAttribute(i,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(i,r):t.removeAttribute(i);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(i):t.setAttribute(i,r);break;case"popover":_e("beforetoggle",t),_e("toggle",t),yl(t,"popover",r);break;case"xlinkActuate":$i(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":$i(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":$i(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":$i(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":$i(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":$i(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":$i(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":$i(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":$i(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":yl(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")i=Zx.get(i)||i,yl(t,i,r);else return}Ce=!0}function Uh(t,e,i,r,l,c){switch(i){case"style":Wp(t,r,c);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));(c!=null?c.__html:void 0)!==i&&(t.innerHTML=i)}}break;case"children":if(typeof r=="string")Kr(t,r);else if(typeof r=="number"||typeof r=="bigint")Kr(t,""+r);else return;break;case"onScroll":r!=null&&_e("scroll",t);return;case"onScrollEnd":r!=null&&_e("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Oi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Ve.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(l=i.endsWith("Capture"),c=i.slice(2,l?i.length-7:void 0),e=t[Ut]||null,e=e!=null?e[i]:null,typeof e=="function"&&t.removeEventListener(c,e,l),typeof r=="function")){typeof e!="function"&&e!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(c,r,l);break t}Ce=!0,i in t?t[i]=r:r===!0?t.setAttribute(i,""):yl(t,i,r)}return}Ce=!0}function wn(t,e,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",t),_e("load",t);var r=!1,l=!1,c;for(c in i)if(i.hasOwnProperty(c)){var p=i[c];if(p!=null)switch(c){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Pe(t,e,c,p,i,null)}}l&&Pe(t,e,"srcSet",i.srcSet,i,null),r&&Pe(t,e,"src",i.src,i,null);return;case"input":_e("invalid",t);var E=c=p=l=null,L=null,Y=null;for(r in i)if(i.hasOwnProperty(r)){var nt=i[r];if(nt!=null)switch(r){case"name":l=nt;break;case"type":p=nt;break;case"checked":L=nt;break;case"defaultChecked":Y=nt;break;case"value":c=nt;break;case"defaultValue":E=nt;break;case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,e));break;default:Pe(t,e,r,nt,i,null)}}Xp(t,c,E,L,Y,p,l,!1);return;case"select":_e("invalid",t),r=p=c=null;for(l in i)if(i.hasOwnProperty(l)&&(E=i[l],E!=null))switch(l){case"value":c=E;break;case"defaultValue":p=E;break;case"multiple":r=E;default:Pe(t,e,l,E,i,null)}e=c,i=p,t.multiple=!!r,e!=null?Zr(t,!!r,e,!1):i!=null&&Zr(t,!!r,i,!0);return;case"textarea":_e("invalid",t),c=l=r=null;for(p in i)if(i.hasOwnProperty(p)&&(E=i[p],E!=null))switch(p){case"value":r=E;break;case"defaultValue":l=E;break;case"children":c=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Pe(t,e,p,E,i,null)}qp(t,r,l,c);return;case"option":for(L in i)if(i.hasOwnProperty(L)&&(r=i[L],r!=null))switch(L){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Pe(t,e,L,r,i,null)}return;case"dialog":_e("beforetoggle",t),_e("toggle",t),_e("cancel",t),_e("close",t);break;case"iframe":case"object":_e("load",t);break;case"video":case"audio":for(r=0;r<ko.length;r++)_e(ko[r],t);break;case"image":_e("error",t),_e("load",t);break;case"details":_e("toggle",t);break;case"embed":case"source":case"link":_e("error",t),_e("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Y in i)if(i.hasOwnProperty(Y)&&(r=i[Y],r!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Pe(t,e,Y,r,i,null)}return;default:if(Nc(e)){for(nt in i)i.hasOwnProperty(nt)&&(r=i[nt],r!==void 0&&Uh(t,e,nt,r,i,void 0));return}}for(E in i)i.hasOwnProperty(E)&&(r=i[E],r!=null&&Pe(t,e,E,r,i,null))}var Uy={};function Ny(t,e,i,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,p=null,E=null,L=null,Y=null,nt=null;for($ in i){var dt=i[$];if(i.hasOwnProperty($)&&dt!=null)switch($){case"checked":break;case"value":break;case"defaultValue":L=dt;default:r.hasOwnProperty($)||Pe(t,e,$,null,r,dt)}}for(var X in r){var $=r[X];if(dt=i[X],r.hasOwnProperty(X)&&($!=null||dt!=null))switch(X){case"type":$!==dt&&(Ce=!0),c=$;break;case"name":$!==dt&&(Ce=!0),l=$;break;case"checked":$!==dt&&(Ce=!0),Y=$;break;case"defaultChecked":$!==dt&&(Ce=!0),nt=$;break;case"value":$!==dt&&(Ce=!0),p=$;break;case"defaultValue":$!==dt&&(Ce=!0),E=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,e));break;default:$!==dt&&Pe(t,e,X,$,r,dt)}}Dc(t,p,E,L,Y,nt,c,l);return;case"select":$=p=E=X=null;for(c in i)if(L=i[c],i.hasOwnProperty(c)&&L!=null)switch(c){case"value":break;case"multiple":$=L;default:r.hasOwnProperty(c)||Pe(t,e,c,null,r,L)}for(l in r)if(c=r[l],L=i[l],r.hasOwnProperty(l)&&(c!=null||L!=null))switch(l){case"value":c!==L&&(Ce=!0),X=c;break;case"defaultValue":c!==L&&(Ce=!0),E=c;break;case"multiple":c!==L&&(Ce=!0),p=c;default:c!==L&&Pe(t,e,l,c,r,L)}e=E,i=p,r=$,X!=null?Zr(t,!!i,X,!1):!!r!=!!i&&(e!=null?Zr(t,!!i,e,!0):Zr(t,!!i,i?[]:"",!1));return;case"textarea":$=X=null;for(E in i)if(l=i[E],i.hasOwnProperty(E)&&l!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Pe(t,e,E,null,r,l)}for(p in r)if(l=r[p],c=i[p],r.hasOwnProperty(p)&&(l!=null||c!=null))switch(p){case"value":l!==c&&(Ce=!0),X=l;break;case"defaultValue":l!==c&&(Ce=!0),$=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==c&&Pe(t,e,p,l,r,c)}kp(t,X,$);return;case"option":for(var Dt in i)if(X=i[Dt],i.hasOwnProperty(Dt)&&X!=null&&!r.hasOwnProperty(Dt))switch(Dt){case"selected":t.selected=!1;break;default:Pe(t,e,Dt,null,r,X)}for(L in r)if(X=r[L],$=i[L],r.hasOwnProperty(L)&&X!==$&&(X!=null||$!=null))switch(L){case"selected":X!==$&&(Ce=!0),t.selected=X&&typeof X!="function"&&typeof X!="symbol";break;default:Pe(t,e,L,X,r,$)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var kt in i)X=i[kt],i.hasOwnProperty(kt)&&X!=null&&!r.hasOwnProperty(kt)&&Pe(t,e,kt,null,r,X);for(Y in r)if(X=r[Y],$=i[Y],r.hasOwnProperty(Y)&&X!==$&&(X!=null||$!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(s(137,e));break;default:Pe(t,e,Y,X,r,$)}return;default:if(Nc(e)){for(var le in i)X=i[le],i.hasOwnProperty(le)&&X!==void 0&&!r.hasOwnProperty(le)&&Uh(t,e,le,void 0,r,X);for(nt in r)X=r[nt],$=i[nt],!r.hasOwnProperty(nt)||X===$||X===void 0&&$===void 0||Uh(t,e,nt,X,r,$);return}}for(var q in i)X=i[q],i.hasOwnProperty(q)&&X!=null&&!r.hasOwnProperty(q)&&Pe(t,e,q,null,r,X);for(dt in r)X=r[dt],$=i[dt],!r.hasOwnProperty(dt)||X===$||X==null&&$==null||Pe(t,e,dt,X,r,$)}function $_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ly(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,i=performance.getEntriesByType("resource"),r=0;r<i.length;r++){var l=i[r],c=l.transferSize,p=l.initiatorType,E=l.duration;if(c&&E&&$_(p)){for(p=0,E=l.responseEnd,r+=1;r<i.length;r++){var L=i[r],Y=L.startTime;if(Y>E)break;var nt=L.transferSize,dt=L.initiatorType;nt&&$_(dt)&&(L=L.responseEnd,p+=nt*(L<E?1:(E-Y)/(L-Y)))}if(--r,e+=8*(c+p)/(l.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Nh=null,Lh=null;function Yo(t){return t.nodeType===9?t:t.ownerDocument}function t0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function e0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function n0(t,e,i,r){return i=Yo(i).createElement(t),i[bt]=r,i[Ut]=e,wn(i,t,e),je(i),i}function Oh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zh=null;function Oy(){var t=window.event;return t&&t.type==="popstate"?t===zh?!1:(zh=t,!0):(zh=null,!1)}var Ph=typeof setTimeout=="function"?setTimeout:void 0,zy=typeof clearTimeout=="function"?clearTimeout:void 0,i0=typeof Promise=="function"?Promise:void 0,a0=typeof requestAnimationFrame=="function"?requestAnimationFrame:Ph,Py=typeof queueMicrotask=="function"?queueMicrotask:typeof i0<"u"?function(t){return i0.resolve(null).then(t).catch(Iy)}:Ph;function Iy(t){setTimeout(function(){throw t})}function Ya(t){return t==="head"}function r0(t,e){var i=e,r=0;do{var l=i.nextSibling;if(t.removeChild(i),l&&l.nodeType===8)if(i=l.data,i==="/$"||i==="/&"){if(r===0){t.removeChild(l),Ls(e);return}r--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")r++;else if(i==="html")kh(t.ownerDocument.documentElement);else if(i==="head"){i=t.ownerDocument.head,kh(i);for(var c=i.firstChild;c;){var p=c.nextSibling,E=c.nodeName;c[ke]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&c.rel.toLowerCase()==="stylesheet"||i.removeChild(c),c=p}}else i==="body"&&kh(t.ownerDocument.body);i=l}while(i);Ls(e)}function s0(t,e){var i=t;t=0;do{var r=i.nextSibling;if(i.nodeType===1?e?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(e?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),r&&r.nodeType===8)if(i=r.data,i==="/$"){if(t===0)break;t--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;i=r}while(i)}function o0(t,e,i){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,i!=null&&(t.style.viewTransitionClass=i),i=getComputedStyle(t),i.display==="inline"){if(e=t.getClientRects(),e.length===1)var r=1;else for(var l=r=0;l<e.length;l++){var c=e[l];0<c.width&&0<c.height&&r++}r===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+i.paddingTop,t.marginBottom="-"+i.paddingBottom)}}function l0(t,e){t=t.style,e=e.style;var i=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=i==null||typeof i=="boolean"?"":(""+i).trim(),i=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=i==null||typeof i=="boolean"?"":(""+i).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(i=e.display,t.display=i==null||typeof i=="boolean"?"":i,i=e.margin,i!=null?t.margin=i:(i=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=i==null||typeof i=="boolean"?"":i,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function By(t,e,i){return i=i.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=i.innerHeight&&t.left<=i.innerWidth}}function Ih(t){var e=t.getBoundingClientRect(),i=getComputedStyle(t);return By(e,i,t)}function Fy(t){return t.documentElement.clientHeight}function Hy(t){this.addEventListener("load",t),this.addEventListener("error",t)}function Gy(t,e,i,r,l,c,p,E,L){var Y=e.nodeType===9?e:e.ownerDocument;try{var nt=Y.startViewTransition({update:function(){var X=Y.defaultView,$=X.navigation&&X.navigation.transition,Dt=Y.fonts.status;r();var kt=[];if(Dt==="loaded"&&(Fy(Y),Y.fonts.status==="loading"&&kt.push(Y.fonts.ready)),Dt=kt.length,t!==null)for(var le=t.suspenseyImages,q=0,I=0;I<le.length;I++){var J=le[I];if(!J.complete){var ft=J.getBoundingClientRect();if(0<ft.bottom&&0<ft.right&&ft.top<X.innerHeight&&ft.left<X.innerWidth){if(q+=w0(J),q>Nu){kt.length=Dt;break}J=new Promise(Hy.bind(J)),kt.push(J)}}}if(0<kt.length)return X=Promise.race([Promise.all(kt),new Promise(function(Ht){return setTimeout(Ht,500)})]).then(l,l),($?Promise.allSettled([$.finished,X]):X).then(c,c);if(l(),$)return $.finished.then(c,c);c()},types:i});Y.__reactViewTransition=nt;var dt=[];return nt.ready.then(function(){for(var X=Y.documentElement.getAnimations({subtree:!0}),$=0;$<X.length;$++){var Dt=X[$],kt=Dt.effect,le=kt.pseudoElement;if(le!=null&&le.startsWith("::view-transition")){dt.push(Dt),Dt=kt.getKeyframes();for(var q=le=void 0,I=!0,J=0;J<Dt.length;J++){var ft=Dt[J],Ht=ft.width;if(le===void 0)le=Ht;else if(le!==Ht){I=!1;break}if(Ht=ft.height,q===void 0)q=Ht;else if(q!==Ht){I=!1;break}delete ft.width,delete ft.height,ft.transform==="none"&&delete ft.transform}I&&le!==void 0&&q!==void 0&&(kt.setKeyframes(Dt),I=getComputedStyle(kt.target,kt.pseudoElement),I.width!==le||I.height!==q)&&(I=Dt[0],I.width=le,I.height=q,I=Dt[Dt.length-1],I.width=le,I.height=q,kt.setKeyframes(Dt))}}p()},function(X){Y.__reactViewTransition===nt&&(Y.__reactViewTransition=null);try{if(typeof X=="object"&&X!==null)switch(X.name){case"InvalidStateError":(X.message==="View transition was skipped because document visibility state is hidden."||X.message==="Skipping view transition because document visibility state has become hidden."||X.message==="Skipping view transition because viewport size changed."||X.message==="Transition was aborted because of invalid state")&&(X=null)}X!==null&&L(X)}finally{r(),l(),p()}}),nt.finished.finally(function(){for(var X=0;X<dt.length;X++)dt[X].cancel();Y.__reactViewTransition===nt&&(Y.__reactViewTransition=null),E()}),nt}catch{return r(),l(),p(),null}}function Nr(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}Nr.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:z({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)},Nr.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,i=t.getAnimations({subtree:!0}),r=[],l=0;l<i.length;l++){var c=i[l].effect;c!==null&&c.target===t&&c.pseudoElement===e&&r.push(i[l])}return r},Nr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function u0(t){return{name:t,group:new Nr("group",t),imagePair:new Nr("image-pair",t),old:new Nr("old",t),new:new Nr("new",t)}}function ii(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ii.prototype.addEventListener=function(t,e,i){var r=null,l=null;if(!(i!=null&&typeof i!="boolean"&&(r=i.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(f0(c,t,e,i)===-1){var p=this,E=e;i!=null&&typeof i!="boolean"&&i.once===!0&&(E=function(L){p.removeEventListener(t,e,i),typeof e=="function"?e.call(this,L):e.handleEvent(L)}),r!==null&&(l=p.removeEventListener.bind(p,t,e,i),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=Rs(i),c.push({type:t,listener:e,optionsOrUseCapture:i,attachedListener:E,cleanup:l}),g(this._fragmentFiber.child,!1,Vy,t,E,r)}this._eventListeners=c}};function Vy(t,e,i,r){return y(t).addEventListener(e,i,r),!1}ii.prototype.removeEventListener=function(t,e,i){var r=this._eventListeners;if(r!==null&&(e=f0(r,t,e,i),e!==-1)){var l=r[e];i=l.attachedListener;var c=l.cleanup;l=Rs(l.optionsOrUseCapture),g(this._fragmentFiber.child,!1,Xy,t,i,l),r.splice(e,1),c!==null&&c()}};function Xy(t,e,i,r){return y(t).removeEventListener(e,i,r),!1}function Rs(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function c0(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function f0(t,e,i,r){if(t.length===0)return-1;r=c0(r);for(var l=0;l<t.length;l++){var c=t[l];if(c.type===e&&c.listener===i&&c0(c.optionsOrUseCapture)===r)return l}return-1}ii.prototype.dispatchEvent=function(t){var e=S(this._fragmentFiber);if(e===null)return!0;e=y(e);var i=this._eventListeners;if(i!==null&&0<i.length||!t.bubbles){var r=e.nodeType===9?e.createComment(""):document.createTextNode("");if(i)for(var l=0;l<i.length;l++){var c=i[l];r.addEventListener(c.type,c.attachedListener,Rs(c.optionsOrUseCapture))}if(e.appendChild(r),t=r.dispatchEvent(t),i)for(l=0;l<i.length;l++)c=i[l],r.removeEventListener(c.type,c.attachedListener,Rs(c.optionsOrUseCapture));return e.removeChild(r),t}return e.dispatchEvent(t)},ii.prototype.focus=function(t){g(this._fragmentFiber.child,!0,h0,t,void 0,void 0)};function h0(t,e){return t.tag===6?!1:(t=y(t),eM(t,e))}ii.prototype.focusLast=function(t){var e=[];g(this._fragmentFiber.child,!0,Bh,e,void 0,void 0);for(var i=e.length-1;0<=i&&!h0(e[i],t);i--);};function Bh(t,e){return e.push(t),!1}ii.prototype.blur=function(){var t=S(this._fragmentFiber);t!==null&&(t=y(t),t=Yo(t).activeElement,t!==null&&g(this._fragmentFiber.child,!1,ky,t,void 0,void 0))};function ky(t,e){return t.tag===6?!1:(t=y(t),t===e||t.contains(e)?(e.blur(),!0):!1)}ii.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),g(this._fragmentFiber.child,!1,qy,t,void 0,void 0)};function qy(t,e){return t.tag===6||(t=y(t),e.observe(t)),!1}ii.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),g(this._fragmentFiber.child,!1,Yy,t,void 0,void 0);for(var i=e=0;i<Ti.length;i++){var r=Ti[i];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Ti[e++]=r}Ti.length=e}};function Yy(t,e){return t.tag===6||(t=y(t),e.unobserve(t)),!1}var Ti=[],Fh=!1;function Wy(t,e,i){Ti.push({fragmentInstance:t,observer:e,instance:i}),Fh||(Fh=!0,nM(function(){Fh=!1;var r=Ti;Ti=[];for(var l=0;l<r.length;l++){var c=r[l];c.observer.unobserve(c.instance)}}))}ii.prototype.getClientRects=function(){var t=[];return g(this._fragmentFiber.child,!1,jy,t,void 0,void 0),t};function jy(t,e){if(t.tag===6){t=t.stateNode;var i=t.ownerDocument.createRange();i.selectNodeContents(t),e.push.apply(e,i.getClientRects())}else t=y(t),e.push.apply(e,t.getClientRects());return!1}ii.prototype.getRootNode=function(t){var e=S(this._fragmentFiber);return e===null?this:y(e).getRootNode(t)},ii.prototype.compareDocumentPosition=function(t){var e=S(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var i=[];g(this._fragmentFiber.child,!1,Bh,i,void 0,void 0);var r=y(e);if(i.length===0){if(i=r,M(this._fragmentFiber)){t:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break t}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(i=e)}e=this._fragmentFiber;var l=r=i.compareDocumentPosition(t);return i===t?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(i=b(e)[1],i===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=y(i).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=y(i[0]),l=y(i[i.length-1]);var c=M(this._fragmentFiber)?e.parentElement:r;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=c.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var p=e.compareDocumentPosition(t),E=l.compareDocumentPosition(t),L=p&Node.DOCUMENT_POSITION_CONTAINED_BY||E&Node.DOCUMENT_POSITION_CONTAINED_BY;return E=r&&c&&p&Node.DOCUMENT_POSITION_FOLLOWING&&E&Node.DOCUMENT_POSITION_PRECEDING,e=r&&e===t||c&&l===t||L||E?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&e===t||!c&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:p,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Zy(e,this._fragmentFiber,i[0],i[i.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Zy(t,e,i,r,l){var c=Wt(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(i=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===e||c.alternate===e)){i=!0;break t}c=c.return}i=!1}return i}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=l.ownerDocument,l===c||l===c.documentElement||l===c.body;t:{for(c=e,e=S(e);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==e&&c.alternate!==e)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!c)&&!(e=c===i)&&(e=G(i,c,Q),e===null?e=!1:(g(e,!0,O,c,i),c=x,x=null,e=c!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!c)&&!(e=c===r)&&(e=G(r,c,Q),e===null?e=!1:(g(e,!0,N,c,r),c=x,P=x=null,e=c!==null)),e):!1}function d0(t,e){var i=t.ownerDocument.createRange();i.selectNodeContents(t),t=i.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ii.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var e=[];g(this._fragmentFiber.child,!1,Bh,e,void 0,void 0);var i=t!==!1;if(e.length===0){var r=b(this._fragmentFiber);if(r=i?r[1]||r[0]||S(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=y(r),d0(t,i);return}if(r=y(r),r.nodeType!==9){if(r.nodeType===11){i="host"in r?r.host:null,i!==null&&i.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=i?e.length-1:0;r!==(i?-1:e.length);){var l=e[r];l.tag===6?(l=y(l),d0(l,i)):y(l).scrollIntoView(t),r+=i?-1:1}};function Ky(t,e){return t=y(t),p0(t,e),!1}function p0(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function m0(t,e){var i=e._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.addEventListener(l.type,l.attachedListener,Rs(l.optionsOrUseCapture))}t.nodeType!==3&&(i=e._observers,i!==null&&i.forEach(function(c){for(var p=0,E=0;E<Ti.length;E++){var L=Ti[E];(L.fragmentInstance!==e||L.observer!==c||L.instance!==t)&&(Ti[p++]=L)}Ti.length=p,c.observe(t)}),p0(t,e))}function Qy(t,e){var i=e._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.removeEventListener(l.type,l.attachedListener,Rs(l.optionsOrUseCapture))}t.nodeType!==3&&(i=e._observers,i!==null&&i.forEach(function(c){typeof c.rootMargin=="string"?Wy(e,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function Hh(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var i=e;switch(e=e.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Hh(i),me(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function Jy(t,e,i,r){for(;t.nodeType===1;){var l=i;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[ke])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=mi(t.nextSibling),t===null)break}return null}function $y(t,e,i){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=mi(t.nextSibling),t===null))return null;return t}function g0(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=mi(t.nextSibling),t===null))return null;return t}function Gh(t){return t.data==="$?"||t.data==="$~"}function Vh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function tM(t,e){var i=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||i.readyState!=="loading")e();else{var r=function(){e(),i.removeEventListener("DOMContentLoaded",r)};i.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function mi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Xh=null;function _0(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"||i==="/&"){if(e===0)return mi(t.nextSibling);e--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||e++}t=t.nextSibling}return null}function v0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(e===0)return t;e--}else i!=="/$"&&i!=="/&"||e++}t=t.previousSibling}return null}function eM(t,e){function i(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",i,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",i,!0)}return r}function nM(t){a0(function(){a0(function(e){return t(e)})})}function x0(t,e,i){switch(e=Yo(i),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function S0(t,e,i){for(var r in i){var l=i[r];i.hasOwnProperty(r)&&l!=null&&Pe(t,e,r,null,Uy,l)}i.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Oi&&(t.onclick=null),me(t)}function kh(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);me(t)}var gi=new Map,y0=new Set;function Wo(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var ha=Ct.d;Ct.d={f:iM,r:aM,D:rM,C:sM,L:oM,m:lM,X:cM,S:uM,M:fM};function iM(){var t=ha.f(),e=Eu();return t||e}function aM(t){var e=Qe(t);e!==null&&e.tag===5&&e.type==="form"?Eg(e):ha.r(t)}var Cs=typeof document>"u"?null:document;function M0(t,e,i){var r=Cs;if(r&&typeof e=="string"&&e){var l=li(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof i=="string"&&(l+='[crossorigin="'+i+'"]'),y0.has(l)||(y0.add(l),t={rel:t,crossOrigin:i,href:e},r.querySelector(l)===null&&(e=r.createElement("link"),wn(e,"link",t),je(e),r.head.appendChild(e)))}}function rM(t){ha.D(t),M0("dns-prefetch",t,null)}function sM(t,e){ha.C(t,e),M0("preconnect",t,e)}function oM(t,e,i){ha.L(t,e,i);var r=Cs;if(r&&t&&e){var l='link[rel="preload"][as="'+li(e)+'"]';e==="image"&&i&&i.imageSrcSet?(l+='[imagesrcset="'+li(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(l+='[imagesizes="'+li(i.imageSizes)+'"]')):l+='[href="'+li(t)+'"]';var c=l;switch(e){case"style":c=ws(t);break;case"script":c=Ds(t)}if(!(gi.has(c)||(t=z({rel:"preload",href:e==="image"&&i&&i.imageSrcSet?void 0:t,as:e},i),gi.set(c,t),r.querySelector(l)!==null||e==="style"&&r.querySelector(jo(c))||e==="script"&&r.querySelector(Zo(c))))){var p=r.createElement("link");wn(p,"link",t),e==="style"&&(p[Ge]=!0,p.onload=p.onerror=function(){Ln(p)}),je(p),r.head.appendChild(p)}}}function lM(t,e){ha.m(t,e);var i=Cs;if(i&&t){var r=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+li(r)+'"][href="'+li(t)+'"]',c=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Ds(t)}if(!gi.has(c)&&(t=z({rel:"modulepreload",href:t},e),gi.set(c,t),i.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Zo(c)))return}r=i.createElement("link"),wn(r,"link",t),je(r),i.head.appendChild(r)}}}function uM(t,e,i){ha.S(t,e,i);var r=Cs;if(r&&t){var l=vn(r).hoistableStyles,c=ws(t);e=e||"default";var p=l.get(c);if(!p){var E={loading:0,preload:null};if(p=r.querySelector(jo(c)))E.loading=5;else{t=z({rel:"stylesheet",href:t,"data-precedence":e},i),(i=gi.get(c))&&qh(t,i);var L=p=r.createElement("link");je(L),wn(L,"link",t),L._p=new Promise(function(Y,nt){L.onload=Y,L.onerror=nt}),L.addEventListener("load",function(){E.loading|=1}),L.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Du(p,e,r)}p={type:"stylesheet",instance:p,count:1,state:E},l.set(c,p)}}}function cM(t,e){ha.X(t,e);var i=Cs;if(i&&t){var r=vn(i).hoistableScripts,l=Ds(t),c=r.get(l);c||(c=i.querySelector(Zo(l)),c||(t=z({src:t,async:!0},e),(e=gi.get(l))&&Yh(t,e),c=i.createElement("script"),je(c),wn(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function fM(t,e){ha.M(t,e);var i=Cs;if(i&&t){var r=vn(i).hoistableScripts,l=Ds(t),c=r.get(l);c||(c=i.querySelector(Zo(l)),c||(t=z({src:t,async:!0,type:"module"},e),(e=gi.get(l))&&Yh(t,e),c=i.createElement("script"),je(c),wn(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function E0(t,e,i,r){var l=(l=U.current)?Wo(l):null;if(!l)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(i=ws(i.href),e=vn(l).hoistableStyles,r=e.get(i),r||(r={type:"style",instance:null,count:0,state:null},e.set(i,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=ws(i.href);var c=vn(l).hoistableStyles,p=c.get(t);if(p||(l=l.ownerDocument||l,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,p),(c=l.querySelector(jo(t)))?c._p||(p.instance=c,p.state.loading=5):(c=gi.get(t),c||(c={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},gi.set(t,c)),hM(l,t,c,p.state))),e&&r===null)throw Error(s(528,""));return p}if(e&&r!==null)throw Error(s(529,""));return null;case"script":return e=i.async,i=i.src,typeof i=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(i=Ds(i),e=vn(l).hoistableScripts,r=e.get(i),r||(r={type:"script",instance:null,count:0,state:null},e.set(i,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function ws(t){return'href="'+li(t)+'"'}function jo(t){return'link[rel="stylesheet"]['+t+"]"}function T0(t){return z({},t,{"data-precedence":t.precedence,precedence:null})}function hM(t,e,i,r){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[Ge]!==!0){r.loading=1;return}}else e=t.createElement("link"),e[Ge]=!0,e.onload=e.onerror=Ln.bind(null,e),wn(e,"link",i),je(e),t.head.appendChild(e);r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2})}function Ds(t){return'[src="'+li(t)+'"]'}function Zo(t){return"script[async]"+t}function b0(t,e,i){if(e.count++,e.instance===null)switch(e.type){case"style":var r=t.querySelector('style[data-href~="'+li(i.href)+'"]');if(r)return e.instance=r,je(r),r;var l=z({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),je(r),wn(r,"style",l),Du(r,i.precedence,t),e.instance=r;case"stylesheet":l=ws(i.href);var c=t.querySelector(jo(l));if(c)return e.state.loading|=4,e.instance=c,je(c),c;r=T0(i),(l=gi.get(l))&&qh(r,l),c=(t.ownerDocument||t).createElement("link"),je(c);var p=c;return p._p=new Promise(function(E,L){p.onload=E,p.onerror=L}),wn(c,"link",r),e.state.loading|=4,Du(c,i.precedence,t),e.instance=c;case"script":return c=Ds(i.src),(l=t.querySelector(Zo(c)))?(e.instance=l,je(l),l):(r=i,(l=gi.get(c))&&(r=z({},i),Yh(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),je(l),wn(l,"link",r),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(r=e.instance,e.state.loading|=4,Du(r,i.precedence,t));return e.instance}function Du(t,e,i){for(var r=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,c=l,p=0;p<r.length;p++){var E=r[p];if(E.dataset.precedence===e)c=E;else if(c!==l)break}c?c.parentNode.insertBefore(t,c.nextSibling):(e=i.nodeType===9?i.head:i,e.insertBefore(t,e.firstChild))}function qh(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Yh(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Uu=null;function A0(t,e,i){if(Uu===null){var r=new Map,l=Uu=new Map;l.set(i,r)}else l=Uu,r=l.get(i),r||(r=new Map,l.set(i,r));if(r.has(t))return r;for(r.set(t,null),i=i.getElementsByTagName(t),l=0;l<i.length;l++){var c=i[l];if(!(c[ke]||c[bt]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var p=c.getAttribute(e)||"";p=t+p;var E=r.get(p);E?E.push(c):r.set(p,[c])}}return r}function Wh(t,e,i){t=t.ownerDocument||t,t.head.insertBefore(i,e==="title"?t.querySelector("head > title"):null)}function dM(t,e,i){if(i===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function R0(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function C0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function w0(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function D0(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=w0(e),t.suspenseyImages.push(e)),t=gM.bind(t),e.decode().then(t,t))}function pM(t,e,i,r){if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var l=ws(r.href),c=e.querySelector(jo(l));if(c){e=c._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Ko.bind(t),e.then(t,t)),i.state.loading|=4,i.instance=c,je(c);return}c=e.ownerDocument||e,r=T0(r),(l=gi.get(l))&&qh(r,l),c=c.createElement("link"),je(c);var p=c;p._p=new Promise(function(E,L){p.onload=E,p.onerror=L}),wn(c,"link",r),i.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=Ko.bind(t),e.addEventListener("load",i),e.addEventListener("error",i))}}var Nu=0;function mM(t,e){return t.stylesheets&&t.count===0&&Ou(t,t.stylesheets),0<t.count||0<t.imgCount?function(i){var r=setTimeout(function(){if(t.stylesheets&&Ou(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+e);0<t.imgBytes&&Nu===0&&(Nu=62500*Ly());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ou(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Nu?50:800)+e);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function U0(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Ou(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function Ko(){this.count--,U0(this)}function gM(){this.imgCount--,U0(this)}var Lu=null;function Ou(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Lu=new Map,e.forEach(_M,t),Lu=null,Ko.call(t))}function _M(t,e){if(!(e.state.loading&4)){var i=Lu.get(t);if(i)var r=i.get(null);else{i=new Map,Lu.set(t,i);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var p=l[c];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(i.set(p.dataset.precedence,p),r=p)}r&&i.set(null,r)}l=e.instance,p=l.getAttribute("data-precedence"),c=i.get(p)||r,c===r&&i.set(null,l),i.set(p,l),this.count++,r=Ko.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),c?c.parentNode.insertBefore(l,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var Us={$$typeof:pt,Provider:null,Consumer:null,_currentValue:De,_currentValue2:De,_threadCount:0};function vM(t,e,i,r,l,c,p,E,L){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=co(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=co(0),this.hiddenUpdates=co(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=L,this.transitionTypes=null,this.incompleteTransitions=new Map}function N0(t,e,i,r,l,c,p,E,L,Y,nt,dt){return t=new vM(t,e,i,p,L,Y,nt,dt,E),e=1,c===!0&&(e|=24),c=Vn(3,null,null,e),t.current=c,c.stateNode=t,e=lf(),e.refCount++,t.pooledCache=e,e.refCount++,c.memoizedState={element:r,isDehydrated:i,cache:e},hf(c),t}function L0(t){return t?(t=is,t):is}function O0(t,e,i,r,l,c){l=L0(l),r.context===null?r.context=l:r.pendingContext=l,r=Oa(e),r.payload={element:i},c=c===void 0?null:c,c!==null&&(r.callback=c),i=za(t,r,e),i!==null&&(Yn(i,t,e),Ro(i,t,e))}function z0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<e?i:e}}function jh(t,e){z0(t,e),(t=t.alternate)&&z0(t,e)}function P0(t){if(t.tag===13||t.tag===31){var e=mr(t,67108864);e!==null&&Yn(e,t,67108864),jh(t,67108864)}}function I0(t){if(t.tag===13||t.tag===31){var e=ni();e=it(e);var i=mr(t,e);i!==null&&Yn(i,t,e),jh(t,e)}}var Ns=!0;function xM(t,e,i,r){var l=Tt.T;Tt.T=null;var c=Ct.p;try{Ct.p=2,Zh(t,e,i,r)}finally{Ct.p=c,Tt.T=l}}function SM(t,e,i,r){var l=Tt.T;Tt.T=null;var c=Ct.p;try{Ct.p=8,Zh(t,e,i,r)}finally{Ct.p=c,Tt.T=l}}function Zh(t,e,i,r){if(Ns){var l=Kh(r);if(l===null)Dh(t,e,r,zu,i),F0(t,r);else if(MM(l,t,e,i,r))r.stopPropagation();else if(F0(t,r),e&4&&-1<yM.indexOf(t)){for(;l!==null;){var c=Qe(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var p=Li(c.pendingLanes);if(p!==0){var E=c;for(E.pendingLanes|=2,E.entangledLanes|=2;p;){var L=1<<31-Nn(p);E.entanglements[1]|=L,p&=~L}ki(c),(Ue&6)===0&&(Su=H()+500,Xo(0))}}break;case 31:case 13:E=mr(c,2),E!==null&&Yn(E,c,2),Eu(),jh(c,2)}if(c=Kh(r),c===null&&Dh(t,e,r,zu,i),c===l)break;l=c}l!==null&&r.stopPropagation()}else Dh(t,e,r,null,i)}}function Kh(t){return t=Oc(t),Qh(t)}var zu=null;function Qh(t){if(zu=null,t=Wt(t),t!==null){var e=f(t);if(e===null)t=null;else{var i=e.tag;if(i===13){if(t=h(e),t!==null)return t;t=null}else if(i===31){if(t=d(e),t!==null)return t;t=null}else if(i===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return zu=t,null}function B0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(zt()){case lt:return 2;case xt:return 8;case Pt:case Bt:return 32;case re:return 268435456;default:return 32}default:return 32}}var Jh=!1,Wa=null,ja=null,Za=null,Qo=new Map,Jo=new Map,Ka=[],yM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function F0(t,e){switch(t){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":ja=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":Qo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jo.delete(e.pointerId)}}function $o(t,e,i,r,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:e,domEventName:i,eventSystemFlags:r,nativeEvent:c,targetContainers:[l]},e!==null&&(e=Qe(e),e!==null&&P0(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function MM(t,e,i,r,l){switch(e){case"focusin":return Wa=$o(Wa,t,e,i,r,l),!0;case"dragenter":return ja=$o(ja,t,e,i,r,l),!0;case"mouseover":return Za=$o(Za,t,e,i,r,l),!0;case"pointerover":var c=l.pointerId;return Qo.set(c,$o(Qo.get(c)||null,t,e,i,r,l)),!0;case"gotpointercapture":return c=l.pointerId,Jo.set(c,$o(Jo.get(c)||null,t,e,i,r,l)),!0}return!1}function H0(t){var e=Wt(t.target);if(e!==null){var i=f(e);if(i!==null){if(e=i.tag,e===13){if(e=h(i),e!==null){t.blockedOn=e,Mt(t.priority,function(){I0(i)});return}}else if(e===31){if(e=d(i),e!==null){t.blockedOn=e,Mt(t.priority,function(){I0(i)});return}}else if(e===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var i=Kh(t.nativeEvent);if(i===null){i=t.nativeEvent;var r=new i.constructor(i.type,i);Lc=r,i.target.dispatchEvent(r),Lc=null}else return e=Qe(i),e!==null&&P0(e),t.blockedOn=i,!1;e.shift()}return!0}function G0(t,e,i){Pu(t)&&i.delete(e)}function EM(){Jh=!1,Wa!==null&&Pu(Wa)&&(Wa=null),ja!==null&&Pu(ja)&&(ja=null),Za!==null&&Pu(Za)&&(Za=null),Qo.forEach(G0),Jo.forEach(G0)}function Iu(t,e){t.blockedOn===e&&(t.blockedOn=null,Jh||(Jh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,EM)))}var Bu=null;function V0(t){Bu!==t&&(Bu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Bu===t&&(Bu=null);for(var e=0;e<t.length;e+=3){var i=t[e],r=t[e+1],l=t[e+2];if(typeof r!="function"){if(Qh(r||i)===null)continue;break}var c=Qe(i);c!==null&&(t.splice(e,3),e-=3,Lf(c,{pending:!0,data:l,method:i.method,action:r},r,l))}}))}function Ls(t){function e(L){return Iu(L,t)}Wa!==null&&Iu(Wa,t),ja!==null&&Iu(ja,t),Za!==null&&Iu(Za,t),Qo.forEach(e),Jo.forEach(e);for(var i=0;i<Ka.length;i++){var r=Ka[i];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Ka.length&&(i=Ka[0],i.blockedOn===null);)H0(i),i.blockedOn===null&&Ka.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(r=0;r<i.length;r+=3){var l=i[r],c=i[r+1],p=l[Ut]||null;if(typeof c=="function")p||V0(i);else if(p){var E=null;if(c&&c.hasAttribute("formAction")){if(l=c,p=c[Ut]||null)E=p.formAction;else if(Qh(l)!==null)continue}else E=p.action;typeof E=="function"?i[r+1]=E:(i.splice(r,3),r-=3),V0(i)}}}function X0(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(p){return l=p})},focusReset:"manual",scroll:"manual"})}function e(){l!==null&&(l(),l=null),r||setTimeout(i,20)}function i(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(i,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),l!==null&&(l(),l=null)}}}function $h(t){this._internalRoot=t}Fu.prototype.render=$h.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var i=e.current,r=ni();O0(i,r,t,e,null,null)},Fu.prototype.unmount=$h.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;O0(t.current,2,null,t,null,null),Eu(),e[Jt]=null}};function Fu(t){this._internalRoot=t}Fu.prototype.unstable_scheduleHydration=function(t){if(t){var e=K();t={blockedOn:null,target:t,priority:e};for(var i=0;i<Ka.length&&e!==0&&e<Ka[i].priority;i++);Ka.splice(i,0,t),i===0&&H0(t)}};var k0=n.version;if(k0!=="19.3.0")throw Error(s(527,k0,"19.3.0"));Ct.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=_(e),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var TM={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Tt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hu.isDisabled&&Hu.supportsFiber)try{Ee=Hu.inject(TM),We=Hu}catch{}}return el.createRoot=function(t,e){if(!u(t))throw Error(s(299));var i=!1,r="",l=Lg,c=Og,p=zg;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(p=e.onRecoverableError)),e=N0(t,1,!1,null,null,i,r,null,l,c,p,X0),t[Jt]=e.current,wh(t),new $h(e)},el.hydrateRoot=function(t,e,i){if(!u(t))throw Error(s(299));var r=!1,l="",c=Lg,p=Og,E=zg,L=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(p=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.formState!==void 0&&(L=i.formState)),e=N0(t,1,!0,e,i??null,r,l,L,c,p,E,X0),e.context=L0(null),i=e.current,r=ni(),r=it(r),l=Oa(r),l.callback=null,za(i,l,r),i=r,e.current.lanes=i,hr(e,i),ki(e),t[Jt]=e.current,wh(t),new Fu(e)},el.version="19.3.0",el}var tv;function PM(){if(tv)return nd.exports;tv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),nd.exports=zM(),nd.exports}var IM=PM();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ux=(...o)=>o.filter((n,a,s)=>!!n&&n.trim()!==""&&s.indexOf(n)===a).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var FM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=dn.forwardRef(({color:o="currentColor",size:n=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:u="",children:f,iconNode:h,...d},m)=>dn.createElement("svg",{ref:m,...FM,width:n,height:n,stroke:o,strokeWidth:s?Number(a)*24/Number(n):a,className:ux("lucide",u),...d},[...h.map(([_,v])=>dn.createElement(_,v)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=(o,n)=>{const a=dn.forwardRef(({className:s,...u},f)=>dn.createElement(HM,{ref:f,iconNode:n,className:ux(`lucide-${BM(o)}`,s),...u}));return a.displayName=`${o}`,a};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=ur("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=ur("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=ur("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=ur("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=ur("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=ur("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=ur("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=ur("StepForward",[["line",{x1:"6",x2:"6",y1:"4",y2:"20",key:"fy8qot"}],["polygon",{points:"10,4 20,12 10,20",key:"1mc1pf"}]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wp="172",ZM=0,ev=1,KM=2,cx=1,QM=2,va=3,or=0,jn=1,xa=2,rr=0,Ks=1,nv=2,iv=3,av=4,JM=5,Gr=100,$M=101,tE=102,eE=103,nE=104,iE=200,aE=201,rE=202,sE=203,Hd=204,Gd=205,oE=206,lE=207,uE=208,cE=209,fE=210,hE=211,dE=212,pE=213,mE=214,Vd=0,Xd=1,kd=2,$s=3,qd=4,Yd=5,Wd=6,jd=7,fx=0,gE=1,_E=2,sr=0,vE=1,xE=2,SE=3,hx=4,yE=5,ME=6,EE=7,dx=300,to=301,eo=302,Zd=303,Kd=304,bc=306,Qd=1e3,Xr=1001,Jd=1002,Ui=1003,TE=1004,Gu=1005,Yi=1006,sd=1007,kr=1008,Ea=1009,px=1010,mx=1011,cl=1012,Dp=1013,qr=1014,Sa=1015,fl=1016,Up=1017,Np=1018,no=1020,gx=35902,_x=1021,vx=1022,wi=1023,xx=1024,Sx=1025,Qs=1026,io=1027,yx=1028,Lp=1029,Mx=1030,Op=1031,zp=1033,pc=33776,mc=33777,gc=33778,_c=33779,$d=35840,tp=35841,ep=35842,np=35843,ip=36196,ap=37492,rp=37496,sp=37808,op=37809,lp=37810,up=37811,cp=37812,fp=37813,hp=37814,dp=37815,pp=37816,mp=37817,gp=37818,_p=37819,vp=37820,xp=37821,vc=36492,Sp=36494,yp=36495,Ex=36283,Mp=36284,Ep=36285,Tp=36286,bE=3200,AE=3201,Tx=0,RE=1,ar="",si="srgb",ao="srgb-linear",Sc="linear",Fe="srgb",Os=7680,rv=519,CE=512,wE=513,DE=514,bx=515,UE=516,NE=517,LE=518,OE=519,sv=35044,ov="300 es",ya=2e3,yc=2001;class so{addEventListener(n,a){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[n]===void 0&&(s[n]=[]),s[n].indexOf(a)===-1&&s[n].push(a)}hasEventListener(n,a){if(this._listeners===void 0)return!1;const s=this._listeners;return s[n]!==void 0&&s[n].indexOf(a)!==-1}removeEventListener(n,a){if(this._listeners===void 0)return;const u=this._listeners[n];if(u!==void 0){const f=u.indexOf(a);f!==-1&&u.splice(f,1)}}dispatchEvent(n){if(this._listeners===void 0)return;const s=this._listeners[n.type];if(s!==void 0){n.target=this;const u=s.slice(0);for(let f=0,h=u.length;f<h;f++)u[f].call(this,n);n.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],od=Math.PI/180,bp=180/Math.PI;function hl(){const o=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(zn[o&255]+zn[o>>8&255]+zn[o>>16&255]+zn[o>>24&255]+"-"+zn[n&255]+zn[n>>8&255]+"-"+zn[n>>16&15|64]+zn[n>>24&255]+"-"+zn[a&63|128]+zn[a>>8&255]+"-"+zn[a>>16&255]+zn[a>>24&255]+zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]).toLowerCase()}function be(o,n,a){return Math.max(n,Math.min(a,o))}function zE(o,n){return(o%n+n)%n}function ld(o,n,a){return(1-a)*o+a*n}function nl(o,n){switch(n.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Wn(o,n){switch(n.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ne{constructor(n=0,a=0){Ne.prototype.isVector2=!0,this.x=n,this.y=a}get width(){return this.x}set width(n){this.x=n}get height(){return this.y}set height(n){this.y=n}set(n,a){return this.x=n,this.y=a,this}setScalar(n){return this.x=n,this.y=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y)}copy(n){return this.x=n.x,this.y=n.y,this}add(n){return this.x+=n.x,this.y+=n.y,this}addScalar(n){return this.x+=n,this.y+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this}subScalar(n){return this.x-=n,this.y-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this}multiply(n){return this.x*=n.x,this.y*=n.y,this}multiplyScalar(n){return this.x*=n,this.y*=n,this}divide(n){return this.x/=n.x,this.y/=n.y,this}divideScalar(n){return this.multiplyScalar(1/n)}applyMatrix3(n){const a=this.x,s=this.y,u=n.elements;return this.x=u[0]*a+u[3]*s+u[6],this.y=u[1]*a+u[4]*s+u[7],this}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this}clamp(n,a){return this.x=be(this.x,n.x,a.x),this.y=be(this.y,n.y,a.y),this}clampScalar(n,a){return this.x=be(this.x,n,a),this.y=be(this.y,n,a),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(n){return this.x*n.x+this.y*n.y}cross(n){return this.x*n.y-this.y*n.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(n){const a=Math.sqrt(this.lengthSq()*n.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(n)/a;return Math.acos(be(s,-1,1))}distanceTo(n){return Math.sqrt(this.distanceToSquared(n))}distanceToSquared(n){const a=this.x-n.x,s=this.y-n.y;return a*a+s*s}manhattanDistanceTo(n){return Math.abs(this.x-n.x)+Math.abs(this.y-n.y)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this}equals(n){return n.x===this.x&&n.y===this.y}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this}rotateAround(n,a){const s=Math.cos(a),u=Math.sin(a),f=this.x-n.x,h=this.y-n.y;return this.x=f*s-h*u+n.x,this.y=f*u+h*s+n.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ue{constructor(n,a,s,u,f,h,d,m,_){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],n!==void 0&&this.set(n,a,s,u,f,h,d,m,_)}set(n,a,s,u,f,h,d,m,_){const v=this.elements;return v[0]=n,v[1]=u,v[2]=d,v[3]=a,v[4]=f,v[5]=m,v[6]=s,v[7]=h,v[8]=_,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(n){const a=this.elements,s=n.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],this}extractBasis(n,a,s){return n.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(n){const a=n.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(n){return this.multiplyMatrices(this,n)}premultiply(n){return this.multiplyMatrices(n,this)}multiplyMatrices(n,a){const s=n.elements,u=a.elements,f=this.elements,h=s[0],d=s[3],m=s[6],_=s[1],v=s[4],g=s[7],S=s[2],M=s[5],b=s[8],R=u[0],y=u[3],x=u[6],P=u[1],O=u[4],N=u[7],Q=u[2],G=u[5],z=u[8];return f[0]=h*R+d*P+m*Q,f[3]=h*y+d*O+m*G,f[6]=h*x+d*N+m*z,f[1]=_*R+v*P+g*Q,f[4]=_*y+v*O+g*G,f[7]=_*x+v*N+g*z,f[2]=S*R+M*P+b*Q,f[5]=S*y+M*O+b*G,f[8]=S*x+M*N+b*z,this}multiplyScalar(n){const a=this.elements;return a[0]*=n,a[3]*=n,a[6]*=n,a[1]*=n,a[4]*=n,a[7]*=n,a[2]*=n,a[5]*=n,a[8]*=n,this}determinant(){const n=this.elements,a=n[0],s=n[1],u=n[2],f=n[3],h=n[4],d=n[5],m=n[6],_=n[7],v=n[8];return a*h*v-a*d*_-s*f*v+s*d*m+u*f*_-u*h*m}invert(){const n=this.elements,a=n[0],s=n[1],u=n[2],f=n[3],h=n[4],d=n[5],m=n[6],_=n[7],v=n[8],g=v*h-d*_,S=d*m-v*f,M=_*f-h*m,b=a*g+s*S+u*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return n[0]=g*R,n[1]=(u*_-v*s)*R,n[2]=(d*s-u*h)*R,n[3]=S*R,n[4]=(v*a-u*m)*R,n[5]=(u*f-d*a)*R,n[6]=M*R,n[7]=(s*m-_*a)*R,n[8]=(h*a-s*f)*R,this}transpose(){let n;const a=this.elements;return n=a[1],a[1]=a[3],a[3]=n,n=a[2],a[2]=a[6],a[6]=n,n=a[5],a[5]=a[7],a[7]=n,this}getNormalMatrix(n){return this.setFromMatrix4(n).invert().transpose()}transposeIntoArray(n){const a=this.elements;return n[0]=a[0],n[1]=a[3],n[2]=a[6],n[3]=a[1],n[4]=a[4],n[5]=a[7],n[6]=a[2],n[7]=a[5],n[8]=a[8],this}setUvTransform(n,a,s,u,f,h,d){const m=Math.cos(f),_=Math.sin(f);return this.set(s*m,s*_,-s*(m*h+_*d)+h+n,-u*_,u*m,-u*(-_*h+m*d)+d+a,0,0,1),this}scale(n,a){return this.premultiply(ud.makeScale(n,a)),this}rotate(n){return this.premultiply(ud.makeRotation(-n)),this}translate(n,a){return this.premultiply(ud.makeTranslation(n,a)),this}makeTranslation(n,a){return n.isVector2?this.set(1,0,n.x,0,1,n.y,0,0,1):this.set(1,0,n,0,1,a,0,0,1),this}makeRotation(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,-s,0,s,a,0,0,0,1),this}makeScale(n,a){return this.set(n,0,0,0,a,0,0,0,1),this}equals(n){const a=this.elements,s=n.elements;for(let u=0;u<9;u++)if(a[u]!==s[u])return!1;return!0}fromArray(n,a=0){for(let s=0;s<9;s++)this.elements[s]=n[s+a];return this}toArray(n=[],a=0){const s=this.elements;return n[a]=s[0],n[a+1]=s[1],n[a+2]=s[2],n[a+3]=s[3],n[a+4]=s[4],n[a+5]=s[5],n[a+6]=s[6],n[a+7]=s[7],n[a+8]=s[8],n}clone(){return new this.constructor().fromArray(this.elements)}}const ud=new ue;function Ax(o){for(let n=o.length-1;n>=0;--n)if(o[n]>=65535)return!0;return!1}function Mc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function PE(){const o=Mc("canvas");return o.style.display="block",o}const lv={};function js(o){o in lv||(lv[o]=!0,console.warn(o))}function IE(o,n,a){return new Promise(function(s,u){function f(){switch(o.clientWaitSync(n,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:u();break;case o.TIMEOUT_EXPIRED:setTimeout(f,a);break;default:s()}}setTimeout(f,a)})}function BE(o){const n=o.elements;n[2]=.5*n[2]+.5*n[3],n[6]=.5*n[6]+.5*n[7],n[10]=.5*n[10]+.5*n[11],n[14]=.5*n[14]+.5*n[15]}function FE(o){const n=o.elements;n[11]===-1?(n[10]=-n[10]-1,n[14]=-n[14]):(n[10]=-n[10],n[14]=-n[14]+1)}const uv=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cv=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function HE(){const o={enabled:!0,workingColorSpace:ao,spaces:{},convert:function(u,f,h){return this.enabled===!1||f===h||!f||!h||(this.spaces[f].transfer===Fe&&(u.r=Ma(u.r),u.g=Ma(u.g),u.b=Ma(u.b)),this.spaces[f].primaries!==this.spaces[h].primaries&&(u.applyMatrix3(this.spaces[f].toXYZ),u.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Fe&&(u.r=Js(u.r),u.g=Js(u.g),u.b=Js(u.b))),u},fromWorkingColorSpace:function(u,f){return this.convert(u,this.workingColorSpace,f)},toWorkingColorSpace:function(u,f){return this.convert(u,f,this.workingColorSpace)},getPrimaries:function(u){return this.spaces[u].primaries},getTransfer:function(u){return u===ar?Sc:this.spaces[u].transfer},getLuminanceCoefficients:function(u,f=this.workingColorSpace){return u.fromArray(this.spaces[f].luminanceCoefficients)},define:function(u){Object.assign(this.spaces,u)},_getMatrix:function(u,f,h){return u.copy(this.spaces[f].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(u){return this.spaces[u].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(u=this.workingColorSpace){return this.spaces[u].workingColorSpaceConfig.unpackColorSpace}},n=[.64,.33,.3,.6,.15,.06],a=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[ao]:{primaries:n,whitePoint:s,transfer:Sc,toXYZ:uv,fromXYZ:cv,luminanceCoefficients:a,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:n,whitePoint:s,transfer:Fe,toXYZ:uv,fromXYZ:cv,luminanceCoefficients:a,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),o}const we=HE();function Ma(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Js(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let zs;class GE{static getDataURL(n){if(/^data:/i.test(n.src)||typeof HTMLCanvasElement>"u")return n.src;let a;if(n instanceof HTMLCanvasElement)a=n;else{zs===void 0&&(zs=Mc("canvas")),zs.width=n.width,zs.height=n.height;const s=zs.getContext("2d");n instanceof ImageData?s.putImageData(n,0,0):s.drawImage(n,0,0,n.width,n.height),a=zs}return a.width>2048||a.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",n),a.toDataURL("image/jpeg",.6)):a.toDataURL("image/png")}static sRGBToLinear(n){if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap){const a=Mc("canvas");a.width=n.width,a.height=n.height;const s=a.getContext("2d");s.drawImage(n,0,0,n.width,n.height);const u=s.getImageData(0,0,n.width,n.height),f=u.data;for(let h=0;h<f.length;h++)f[h]=Ma(f[h]/255)*255;return s.putImageData(u,0,0),a}else if(n.data){const a=n.data.slice(0);for(let s=0;s<a.length;s++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[s]=Math.floor(Ma(a[s]/255)*255):a[s]=Ma(a[s]);return{data:a,width:n.width,height:n.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),n}}let VE=0;class Rx{constructor(n=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VE++}),this.uuid=hl(),this.data=n,this.dataReady=!0,this.version=0}set needsUpdate(n){n===!0&&this.version++}toJSON(n){const a=n===void 0||typeof n=="string";if(!a&&n.images[this.uuid]!==void 0)return n.images[this.uuid];const s={uuid:this.uuid,url:""},u=this.data;if(u!==null){let f;if(Array.isArray(u)){f=[];for(let h=0,d=u.length;h<d;h++)u[h].isDataTexture?f.push(cd(u[h].image)):f.push(cd(u[h]))}else f=cd(u);s.url=f}return a||(n.images[this.uuid]=s),s}}function cd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?GE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let XE=0;class Zn extends so{constructor(n=Zn.DEFAULT_IMAGE,a=Zn.DEFAULT_MAPPING,s=Xr,u=Xr,f=Yi,h=kr,d=wi,m=Ea,_=Zn.DEFAULT_ANISOTROPY,v=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:XE++}),this.uuid=hl(),this.name="",this.source=new Rx(n),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=s,this.wrapT=u,this.magFilter=f,this.minFilter=h,this.anisotropy=_,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(n=null){this.source.data=n}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(n){return this.name=n.name,this.source=n.source,this.mipmaps=n.mipmaps.slice(0),this.mapping=n.mapping,this.channel=n.channel,this.wrapS=n.wrapS,this.wrapT=n.wrapT,this.magFilter=n.magFilter,this.minFilter=n.minFilter,this.anisotropy=n.anisotropy,this.format=n.format,this.internalFormat=n.internalFormat,this.type=n.type,this.offset.copy(n.offset),this.repeat.copy(n.repeat),this.center.copy(n.center),this.rotation=n.rotation,this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrix.copy(n.matrix),this.generateMipmaps=n.generateMipmaps,this.premultiplyAlpha=n.premultiplyAlpha,this.flipY=n.flipY,this.unpackAlignment=n.unpackAlignment,this.colorSpace=n.colorSpace,this.renderTarget=n.renderTarget,this.isRenderTargetTexture=n.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(n.userData)),this.needsUpdate=!0,this}toJSON(n){const a=n===void 0||typeof n=="string";if(!a&&n.textures[this.uuid]!==void 0)return n.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(n).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),a||(n.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(n){if(this.mapping!==dx)return n;if(n.applyMatrix3(this.matrix),n.x<0||n.x>1)switch(this.wrapS){case Qd:n.x=n.x-Math.floor(n.x);break;case Xr:n.x=n.x<0?0:1;break;case Jd:Math.abs(Math.floor(n.x)%2)===1?n.x=Math.ceil(n.x)-n.x:n.x=n.x-Math.floor(n.x);break}if(n.y<0||n.y>1)switch(this.wrapT){case Qd:n.y=n.y-Math.floor(n.y);break;case Xr:n.y=n.y<0?0:1;break;case Jd:Math.abs(Math.floor(n.y)%2)===1?n.y=Math.ceil(n.y)-n.y:n.y=n.y-Math.floor(n.y);break}return this.flipY&&(n.y=1-n.y),n}set needsUpdate(n){n===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(n){n===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=dx;Zn.DEFAULT_ANISOTROPY=1;class He{constructor(n=0,a=0,s=0,u=1){He.prototype.isVector4=!0,this.x=n,this.y=a,this.z=s,this.w=u}get width(){return this.z}set width(n){this.z=n}get height(){return this.w}set height(n){this.w=n}set(n,a,s,u){return this.x=n,this.y=a,this.z=s,this.w=u,this}setScalar(n){return this.x=n,this.y=n,this.z=n,this.w=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setZ(n){return this.z=n,this}setW(n){return this.w=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(n){return this.x=n.x,this.y=n.y,this.z=n.z,this.w=n.w!==void 0?n.w:1,this}add(n){return this.x+=n.x,this.y+=n.y,this.z+=n.z,this.w+=n.w,this}addScalar(n){return this.x+=n,this.y+=n,this.z+=n,this.w+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this.z=n.z+a.z,this.w=n.w+a.w,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this.z+=n.z*a,this.w+=n.w*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this.z-=n.z,this.w-=n.w,this}subScalar(n){return this.x-=n,this.y-=n,this.z-=n,this.w-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this.z=n.z-a.z,this.w=n.w-a.w,this}multiply(n){return this.x*=n.x,this.y*=n.y,this.z*=n.z,this.w*=n.w,this}multiplyScalar(n){return this.x*=n,this.y*=n,this.z*=n,this.w*=n,this}applyMatrix4(n){const a=this.x,s=this.y,u=this.z,f=this.w,h=n.elements;return this.x=h[0]*a+h[4]*s+h[8]*u+h[12]*f,this.y=h[1]*a+h[5]*s+h[9]*u+h[13]*f,this.z=h[2]*a+h[6]*s+h[10]*u+h[14]*f,this.w=h[3]*a+h[7]*s+h[11]*u+h[15]*f,this}divide(n){return this.x/=n.x,this.y/=n.y,this.z/=n.z,this.w/=n.w,this}divideScalar(n){return this.multiplyScalar(1/n)}setAxisAngleFromQuaternion(n){this.w=2*Math.acos(n.w);const a=Math.sqrt(1-n.w*n.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=n.x/a,this.y=n.y/a,this.z=n.z/a),this}setAxisAngleFromRotationMatrix(n){let a,s,u,f;const m=n.elements,_=m[0],v=m[4],g=m[8],S=m[1],M=m[5],b=m[9],R=m[2],y=m[6],x=m[10];if(Math.abs(v-S)<.01&&Math.abs(g-R)<.01&&Math.abs(b-y)<.01){if(Math.abs(v+S)<.1&&Math.abs(g+R)<.1&&Math.abs(b+y)<.1&&Math.abs(_+M+x-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;const O=(_+1)/2,N=(M+1)/2,Q=(x+1)/2,G=(v+S)/4,z=(g+R)/4,V=(b+y)/4;return O>N&&O>Q?O<.01?(s=0,u=.707106781,f=.707106781):(s=Math.sqrt(O),u=G/s,f=z/s):N>Q?N<.01?(s=.707106781,u=0,f=.707106781):(u=Math.sqrt(N),s=G/u,f=V/u):Q<.01?(s=.707106781,u=.707106781,f=0):(f=Math.sqrt(Q),s=z/f,u=V/f),this.set(s,u,f,a),this}let P=Math.sqrt((y-b)*(y-b)+(g-R)*(g-R)+(S-v)*(S-v));return Math.abs(P)<.001&&(P=1),this.x=(y-b)/P,this.y=(g-R)/P,this.z=(S-v)/P,this.w=Math.acos((_+M+x-1)/2),this}setFromMatrixPosition(n){const a=n.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this.z=Math.min(this.z,n.z),this.w=Math.min(this.w,n.w),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this.z=Math.max(this.z,n.z),this.w=Math.max(this.w,n.w),this}clamp(n,a){return this.x=be(this.x,n.x,a.x),this.y=be(this.y,n.y,a.y),this.z=be(this.z,n.z,a.z),this.w=be(this.w,n.w,a.w),this}clampScalar(n,a){return this.x=be(this.x,n,a),this.y=be(this.y,n,a),this.z=be(this.z,n,a),this.w=be(this.w,n,a),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(n){return this.x*n.x+this.y*n.y+this.z*n.z+this.w*n.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this.z+=(n.z-this.z)*a,this.w+=(n.w-this.w)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this.z=n.z+(a.z-n.z)*s,this.w=n.w+(a.w-n.w)*s,this}equals(n){return n.x===this.x&&n.y===this.y&&n.z===this.z&&n.w===this.w}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this.z=n[a+2],this.w=n[a+3],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n[a+2]=this.z,n[a+3]=this.w,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this.z=n.getZ(a),this.w=n.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kE extends so{constructor(n=1,a=1,s={}){super(),this.isRenderTarget=!0,this.width=n,this.height=a,this.depth=1,this.scissor=new He(0,0,n,a),this.scissorTest=!1,this.viewport=new He(0,0,n,a);const u={width:n,height:a,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const f=new Zn(u,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);f.flipY=!1,f.generateMipmaps=s.generateMipmaps,f.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=f.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(n){this.textures[0]=n}set depthTexture(n){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),n!==null&&(n.renderTarget=this),this._depthTexture=n}get depthTexture(){return this._depthTexture}setSize(n,a,s=1){if(this.width!==n||this.height!==a||this.depth!==s){this.width=n,this.height=a,this.depth=s;for(let u=0,f=this.textures.length;u<f;u++)this.textures[u].image.width=n,this.textures[u].image.height=a,this.textures[u].image.depth=s;this.dispose()}this.viewport.set(0,0,n,a),this.scissor.set(0,0,n,a)}clone(){return new this.constructor().copy(this)}copy(n){this.width=n.width,this.height=n.height,this.depth=n.depth,this.scissor.copy(n.scissor),this.scissorTest=n.scissorTest,this.viewport.copy(n.viewport),this.textures.length=0;for(let s=0,u=n.textures.length;s<u;s++)this.textures[s]=n.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;const a=Object.assign({},n.texture.image);return this.texture.source=new Rx(a),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,n.depthTexture!==null&&(this.depthTexture=n.depthTexture.clone()),this.samples=n.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yr extends kE{constructor(n=1,a=1,s={}){super(n,a,s),this.isWebGLRenderTarget=!0}}class Cx extends Zn{constructor(n=null,a=1,s=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:n,width:a,height:s,depth:u},this.magFilter=Ui,this.minFilter=Ui,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(n){this.layerUpdates.add(n)}clearLayerUpdates(){this.layerUpdates.clear()}}class qE extends Zn{constructor(n=null,a=1,s=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:n,width:a,height:s,depth:u},this.magFilter=Ui,this.minFilter=Ui,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dl{constructor(n=0,a=0,s=0,u=1){this.isQuaternion=!0,this._x=n,this._y=a,this._z=s,this._w=u}static slerpFlat(n,a,s,u,f,h,d){let m=s[u+0],_=s[u+1],v=s[u+2],g=s[u+3];const S=f[h+0],M=f[h+1],b=f[h+2],R=f[h+3];if(d===0){n[a+0]=m,n[a+1]=_,n[a+2]=v,n[a+3]=g;return}if(d===1){n[a+0]=S,n[a+1]=M,n[a+2]=b,n[a+3]=R;return}if(g!==R||m!==S||_!==M||v!==b){let y=1-d;const x=m*S+_*M+v*b+g*R,P=x>=0?1:-1,O=1-x*x;if(O>Number.EPSILON){const Q=Math.sqrt(O),G=Math.atan2(Q,x*P);y=Math.sin(y*G)/Q,d=Math.sin(d*G)/Q}const N=d*P;if(m=m*y+S*N,_=_*y+M*N,v=v*y+b*N,g=g*y+R*N,y===1-d){const Q=1/Math.sqrt(m*m+_*_+v*v+g*g);m*=Q,_*=Q,v*=Q,g*=Q}}n[a]=m,n[a+1]=_,n[a+2]=v,n[a+3]=g}static multiplyQuaternionsFlat(n,a,s,u,f,h){const d=s[u],m=s[u+1],_=s[u+2],v=s[u+3],g=f[h],S=f[h+1],M=f[h+2],b=f[h+3];return n[a]=d*b+v*g+m*M-_*S,n[a+1]=m*b+v*S+_*g-d*M,n[a+2]=_*b+v*M+d*S-m*g,n[a+3]=v*b-d*g-m*S-_*M,n}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get w(){return this._w}set w(n){this._w=n,this._onChangeCallback()}set(n,a,s,u){return this._x=n,this._y=a,this._z=s,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(n){return this._x=n.x,this._y=n.y,this._z=n.z,this._w=n.w,this._onChangeCallback(),this}setFromEuler(n,a=!0){const s=n._x,u=n._y,f=n._z,h=n._order,d=Math.cos,m=Math.sin,_=d(s/2),v=d(u/2),g=d(f/2),S=m(s/2),M=m(u/2),b=m(f/2);switch(h){case"XYZ":this._x=S*v*g+_*M*b,this._y=_*M*g-S*v*b,this._z=_*v*b+S*M*g,this._w=_*v*g-S*M*b;break;case"YXZ":this._x=S*v*g+_*M*b,this._y=_*M*g-S*v*b,this._z=_*v*b-S*M*g,this._w=_*v*g+S*M*b;break;case"ZXY":this._x=S*v*g-_*M*b,this._y=_*M*g+S*v*b,this._z=_*v*b+S*M*g,this._w=_*v*g-S*M*b;break;case"ZYX":this._x=S*v*g-_*M*b,this._y=_*M*g+S*v*b,this._z=_*v*b-S*M*g,this._w=_*v*g+S*M*b;break;case"YZX":this._x=S*v*g+_*M*b,this._y=_*M*g+S*v*b,this._z=_*v*b-S*M*g,this._w=_*v*g-S*M*b;break;case"XZY":this._x=S*v*g-_*M*b,this._y=_*M*g-S*v*b,this._z=_*v*b+S*M*g,this._w=_*v*g+S*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(n,a){const s=a/2,u=Math.sin(s);return this._x=n.x*u,this._y=n.y*u,this._z=n.z*u,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(n){const a=n.elements,s=a[0],u=a[4],f=a[8],h=a[1],d=a[5],m=a[9],_=a[2],v=a[6],g=a[10],S=s+d+g;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(v-m)*M,this._y=(f-_)*M,this._z=(h-u)*M}else if(s>d&&s>g){const M=2*Math.sqrt(1+s-d-g);this._w=(v-m)/M,this._x=.25*M,this._y=(u+h)/M,this._z=(f+_)/M}else if(d>g){const M=2*Math.sqrt(1+d-s-g);this._w=(f-_)/M,this._x=(u+h)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+g-s-d);this._w=(h-u)/M,this._x=(f+_)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(n,a){let s=n.dot(a)+1;return s<Number.EPSILON?(s=0,Math.abs(n.x)>Math.abs(n.z)?(this._x=-n.y,this._y=n.x,this._z=0,this._w=s):(this._x=0,this._y=-n.z,this._z=n.y,this._w=s)):(this._x=n.y*a.z-n.z*a.y,this._y=n.z*a.x-n.x*a.z,this._z=n.x*a.y-n.y*a.x,this._w=s),this.normalize()}angleTo(n){return 2*Math.acos(Math.abs(be(this.dot(n),-1,1)))}rotateTowards(n,a){const s=this.angleTo(n);if(s===0)return this;const u=Math.min(1,a/s);return this.slerp(n,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(n){return this._x*n._x+this._y*n._y+this._z*n._z+this._w*n._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let n=this.length();return n===0?(this._x=0,this._y=0,this._z=0,this._w=1):(n=1/n,this._x=this._x*n,this._y=this._y*n,this._z=this._z*n,this._w=this._w*n),this._onChangeCallback(),this}multiply(n){return this.multiplyQuaternions(this,n)}premultiply(n){return this.multiplyQuaternions(n,this)}multiplyQuaternions(n,a){const s=n._x,u=n._y,f=n._z,h=n._w,d=a._x,m=a._y,_=a._z,v=a._w;return this._x=s*v+h*d+u*_-f*m,this._y=u*v+h*m+f*d-s*_,this._z=f*v+h*_+s*m-u*d,this._w=h*v-s*d-u*m-f*_,this._onChangeCallback(),this}slerp(n,a){if(a===0)return this;if(a===1)return this.copy(n);const s=this._x,u=this._y,f=this._z,h=this._w;let d=h*n._w+s*n._x+u*n._y+f*n._z;if(d<0?(this._w=-n._w,this._x=-n._x,this._y=-n._y,this._z=-n._z,d=-d):this.copy(n),d>=1)return this._w=h,this._x=s,this._y=u,this._z=f,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-a;return this._w=M*h+a*this._w,this._x=M*s+a*this._x,this._y=M*u+a*this._y,this._z=M*f+a*this._z,this.normalize(),this}const _=Math.sqrt(m),v=Math.atan2(_,d),g=Math.sin((1-a)*v)/_,S=Math.sin(a*v)/_;return this._w=h*g+this._w*S,this._x=s*g+this._x*S,this._y=u*g+this._y*S,this._z=f*g+this._z*S,this._onChangeCallback(),this}slerpQuaternions(n,a,s){return this.copy(n).slerp(a,s)}random(){const n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),s=Math.random(),u=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(u*Math.sin(n),u*Math.cos(n),f*Math.sin(a),f*Math.cos(a))}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._w===this._w}fromArray(n,a=0){return this._x=n[a],this._y=n[a+1],this._z=n[a+2],this._w=n[a+3],this._onChangeCallback(),this}toArray(n=[],a=0){return n[a]=this._x,n[a+1]=this._y,n[a+2]=this._z,n[a+3]=this._w,n}fromBufferAttribute(n,a){return this._x=n.getX(a),this._y=n.getY(a),this._z=n.getZ(a),this._w=n.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(n=0,a=0,s=0){tt.prototype.isVector3=!0,this.x=n,this.y=a,this.z=s}set(n,a,s){return s===void 0&&(s=this.z),this.x=n,this.y=a,this.z=s,this}setScalar(n){return this.x=n,this.y=n,this.z=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setZ(n){return this.z=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(n){return this.x=n.x,this.y=n.y,this.z=n.z,this}add(n){return this.x+=n.x,this.y+=n.y,this.z+=n.z,this}addScalar(n){return this.x+=n,this.y+=n,this.z+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this.z=n.z+a.z,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this.z+=n.z*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this.z-=n.z,this}subScalar(n){return this.x-=n,this.y-=n,this.z-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this.z=n.z-a.z,this}multiply(n){return this.x*=n.x,this.y*=n.y,this.z*=n.z,this}multiplyScalar(n){return this.x*=n,this.y*=n,this.z*=n,this}multiplyVectors(n,a){return this.x=n.x*a.x,this.y=n.y*a.y,this.z=n.z*a.z,this}applyEuler(n){return this.applyQuaternion(fv.setFromEuler(n))}applyAxisAngle(n,a){return this.applyQuaternion(fv.setFromAxisAngle(n,a))}applyMatrix3(n){const a=this.x,s=this.y,u=this.z,f=n.elements;return this.x=f[0]*a+f[3]*s+f[6]*u,this.y=f[1]*a+f[4]*s+f[7]*u,this.z=f[2]*a+f[5]*s+f[8]*u,this}applyNormalMatrix(n){return this.applyMatrix3(n).normalize()}applyMatrix4(n){const a=this.x,s=this.y,u=this.z,f=n.elements,h=1/(f[3]*a+f[7]*s+f[11]*u+f[15]);return this.x=(f[0]*a+f[4]*s+f[8]*u+f[12])*h,this.y=(f[1]*a+f[5]*s+f[9]*u+f[13])*h,this.z=(f[2]*a+f[6]*s+f[10]*u+f[14])*h,this}applyQuaternion(n){const a=this.x,s=this.y,u=this.z,f=n.x,h=n.y,d=n.z,m=n.w,_=2*(h*u-d*s),v=2*(d*a-f*u),g=2*(f*s-h*a);return this.x=a+m*_+h*g-d*v,this.y=s+m*v+d*_-f*g,this.z=u+m*g+f*v-h*_,this}project(n){return this.applyMatrix4(n.matrixWorldInverse).applyMatrix4(n.projectionMatrix)}unproject(n){return this.applyMatrix4(n.projectionMatrixInverse).applyMatrix4(n.matrixWorld)}transformDirection(n){const a=this.x,s=this.y,u=this.z,f=n.elements;return this.x=f[0]*a+f[4]*s+f[8]*u,this.y=f[1]*a+f[5]*s+f[9]*u,this.z=f[2]*a+f[6]*s+f[10]*u,this.normalize()}divide(n){return this.x/=n.x,this.y/=n.y,this.z/=n.z,this}divideScalar(n){return this.multiplyScalar(1/n)}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this.z=Math.min(this.z,n.z),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this.z=Math.max(this.z,n.z),this}clamp(n,a){return this.x=be(this.x,n.x,a.x),this.y=be(this.y,n.y,a.y),this.z=be(this.z,n.z,a.z),this}clampScalar(n,a){return this.x=be(this.x,n,a),this.y=be(this.y,n,a),this.z=be(this.z,n,a),this}clampLength(n,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(n){return this.x*n.x+this.y*n.y+this.z*n.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this.z+=(n.z-this.z)*a,this}lerpVectors(n,a,s){return this.x=n.x+(a.x-n.x)*s,this.y=n.y+(a.y-n.y)*s,this.z=n.z+(a.z-n.z)*s,this}cross(n){return this.crossVectors(this,n)}crossVectors(n,a){const s=n.x,u=n.y,f=n.z,h=a.x,d=a.y,m=a.z;return this.x=u*m-f*d,this.y=f*h-s*m,this.z=s*d-u*h,this}projectOnVector(n){const a=n.lengthSq();if(a===0)return this.set(0,0,0);const s=n.dot(this)/a;return this.copy(n).multiplyScalar(s)}projectOnPlane(n){return fd.copy(this).projectOnVector(n),this.sub(fd)}reflect(n){return this.sub(fd.copy(n).multiplyScalar(2*this.dot(n)))}angleTo(n){const a=Math.sqrt(this.lengthSq()*n.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(n)/a;return Math.acos(be(s,-1,1))}distanceTo(n){return Math.sqrt(this.distanceToSquared(n))}distanceToSquared(n){const a=this.x-n.x,s=this.y-n.y,u=this.z-n.z;return a*a+s*s+u*u}manhattanDistanceTo(n){return Math.abs(this.x-n.x)+Math.abs(this.y-n.y)+Math.abs(this.z-n.z)}setFromSpherical(n){return this.setFromSphericalCoords(n.radius,n.phi,n.theta)}setFromSphericalCoords(n,a,s){const u=Math.sin(a)*n;return this.x=u*Math.sin(s),this.y=Math.cos(a)*n,this.z=u*Math.cos(s),this}setFromCylindrical(n){return this.setFromCylindricalCoords(n.radius,n.theta,n.y)}setFromCylindricalCoords(n,a,s){return this.x=n*Math.sin(a),this.y=s,this.z=n*Math.cos(a),this}setFromMatrixPosition(n){const a=n.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(n){const a=this.setFromMatrixColumn(n,0).length(),s=this.setFromMatrixColumn(n,1).length(),u=this.setFromMatrixColumn(n,2).length();return this.x=a,this.y=s,this.z=u,this}setFromMatrixColumn(n,a){return this.fromArray(n.elements,a*4)}setFromMatrix3Column(n,a){return this.fromArray(n.elements,a*3)}setFromEuler(n){return this.x=n._x,this.y=n._y,this.z=n._z,this}setFromColor(n){return this.x=n.r,this.y=n.g,this.z=n.b,this}equals(n){return n.x===this.x&&n.y===this.y&&n.z===this.z}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this.z=n[a+2],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n[a+2]=this.z,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this.z=n.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const n=Math.random()*Math.PI*2,a=Math.random()*2-1,s=Math.sqrt(1-a*a);return this.x=s*Math.cos(n),this.y=a,this.z=s*Math.sin(n),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fd=new tt,fv=new dl;class pl{constructor(n=new tt(1/0,1/0,1/0),a=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=n,this.max=a}set(n,a){return this.min.copy(n),this.max.copy(a),this}setFromArray(n){this.makeEmpty();for(let a=0,s=n.length;a<s;a+=3)this.expandByPoint(bi.fromArray(n,a));return this}setFromBufferAttribute(n){this.makeEmpty();for(let a=0,s=n.count;a<s;a++)this.expandByPoint(bi.fromBufferAttribute(n,a));return this}setFromPoints(n){this.makeEmpty();for(let a=0,s=n.length;a<s;a++)this.expandByPoint(n[a]);return this}setFromCenterAndSize(n,a){const s=bi.copy(a).multiplyScalar(.5);return this.min.copy(n).sub(s),this.max.copy(n).add(s),this}setFromObject(n,a=!1){return this.makeEmpty(),this.expandByObject(n,a)}clone(){return new this.constructor().copy(this)}copy(n){return this.min.copy(n.min),this.max.copy(n.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(n){return this.isEmpty()?n.set(0,0,0):n.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(n){return this.isEmpty()?n.set(0,0,0):n.subVectors(this.max,this.min)}expandByPoint(n){return this.min.min(n),this.max.max(n),this}expandByVector(n){return this.min.sub(n),this.max.add(n),this}expandByScalar(n){return this.min.addScalar(-n),this.max.addScalar(n),this}expandByObject(n,a=!1){n.updateWorldMatrix(!1,!1);const s=n.geometry;if(s!==void 0){const f=s.getAttribute("position");if(a===!0&&f!==void 0&&n.isInstancedMesh!==!0)for(let h=0,d=f.count;h<d;h++)n.isMesh===!0?n.getVertexPosition(h,bi):bi.fromBufferAttribute(f,h),bi.applyMatrix4(n.matrixWorld),this.expandByPoint(bi);else n.boundingBox!==void 0?(n.boundingBox===null&&n.computeBoundingBox(),Vu.copy(n.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Vu.copy(s.boundingBox)),Vu.applyMatrix4(n.matrixWorld),this.union(Vu)}const u=n.children;for(let f=0,h=u.length;f<h;f++)this.expandByObject(u[f],a);return this}containsPoint(n){return n.x>=this.min.x&&n.x<=this.max.x&&n.y>=this.min.y&&n.y<=this.max.y&&n.z>=this.min.z&&n.z<=this.max.z}containsBox(n){return this.min.x<=n.min.x&&n.max.x<=this.max.x&&this.min.y<=n.min.y&&n.max.y<=this.max.y&&this.min.z<=n.min.z&&n.max.z<=this.max.z}getParameter(n,a){return a.set((n.x-this.min.x)/(this.max.x-this.min.x),(n.y-this.min.y)/(this.max.y-this.min.y),(n.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(n){return n.max.x>=this.min.x&&n.min.x<=this.max.x&&n.max.y>=this.min.y&&n.min.y<=this.max.y&&n.max.z>=this.min.z&&n.min.z<=this.max.z}intersectsSphere(n){return this.clampPoint(n.center,bi),bi.distanceToSquared(n.center)<=n.radius*n.radius}intersectsPlane(n){let a,s;return n.normal.x>0?(a=n.normal.x*this.min.x,s=n.normal.x*this.max.x):(a=n.normal.x*this.max.x,s=n.normal.x*this.min.x),n.normal.y>0?(a+=n.normal.y*this.min.y,s+=n.normal.y*this.max.y):(a+=n.normal.y*this.max.y,s+=n.normal.y*this.min.y),n.normal.z>0?(a+=n.normal.z*this.min.z,s+=n.normal.z*this.max.z):(a+=n.normal.z*this.max.z,s+=n.normal.z*this.min.z),a<=-n.constant&&s>=-n.constant}intersectsTriangle(n){if(this.isEmpty())return!1;this.getCenter(il),Xu.subVectors(this.max,il),Ps.subVectors(n.a,il),Is.subVectors(n.b,il),Bs.subVectors(n.c,il),Ja.subVectors(Is,Ps),$a.subVectors(Bs,Is),Lr.subVectors(Ps,Bs);let a=[0,-Ja.z,Ja.y,0,-$a.z,$a.y,0,-Lr.z,Lr.y,Ja.z,0,-Ja.x,$a.z,0,-$a.x,Lr.z,0,-Lr.x,-Ja.y,Ja.x,0,-$a.y,$a.x,0,-Lr.y,Lr.x,0];return!hd(a,Ps,Is,Bs,Xu)||(a=[1,0,0,0,1,0,0,0,1],!hd(a,Ps,Is,Bs,Xu))?!1:(ku.crossVectors(Ja,$a),a=[ku.x,ku.y,ku.z],hd(a,Ps,Is,Bs,Xu))}clampPoint(n,a){return a.copy(n).clamp(this.min,this.max)}distanceToPoint(n){return this.clampPoint(n,bi).distanceTo(n)}getBoundingSphere(n){return this.isEmpty()?n.makeEmpty():(this.getCenter(n.center),n.radius=this.getSize(bi).length()*.5),n}intersect(n){return this.min.max(n.min),this.max.min(n.max),this.isEmpty()&&this.makeEmpty(),this}union(n){return this.min.min(n.min),this.max.max(n.max),this}applyMatrix4(n){return this.isEmpty()?this:(da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(n),da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(n),da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(n),da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(n),da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(n),da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(n),da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(n),da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(n),this.setFromPoints(da),this)}translate(n){return this.min.add(n),this.max.add(n),this}equals(n){return n.min.equals(this.min)&&n.max.equals(this.max)}}const da=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],bi=new tt,Vu=new pl,Ps=new tt,Is=new tt,Bs=new tt,Ja=new tt,$a=new tt,Lr=new tt,il=new tt,Xu=new tt,ku=new tt,Or=new tt;function hd(o,n,a,s,u){for(let f=0,h=o.length-3;f<=h;f+=3){Or.fromArray(o,f);const d=u.x*Math.abs(Or.x)+u.y*Math.abs(Or.y)+u.z*Math.abs(Or.z),m=n.dot(Or),_=a.dot(Or),v=s.dot(Or);if(Math.max(-Math.max(m,_,v),Math.min(m,_,v))>d)return!1}return!0}const YE=new pl,al=new tt,dd=new tt;class ml{constructor(n=new tt,a=-1){this.isSphere=!0,this.center=n,this.radius=a}set(n,a){return this.center.copy(n),this.radius=a,this}setFromPoints(n,a){const s=this.center;a!==void 0?s.copy(a):YE.setFromPoints(n).getCenter(s);let u=0;for(let f=0,h=n.length;f<h;f++)u=Math.max(u,s.distanceToSquared(n[f]));return this.radius=Math.sqrt(u),this}copy(n){return this.center.copy(n.center),this.radius=n.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(n){return n.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(n){return n.distanceTo(this.center)-this.radius}intersectsSphere(n){const a=this.radius+n.radius;return n.center.distanceToSquared(this.center)<=a*a}intersectsBox(n){return n.intersectsSphere(this)}intersectsPlane(n){return Math.abs(n.distanceToPoint(this.center))<=this.radius}clampPoint(n,a){const s=this.center.distanceToSquared(n);return a.copy(n),s>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(n){return this.isEmpty()?(n.makeEmpty(),n):(n.set(this.center,this.center),n.expandByScalar(this.radius),n)}applyMatrix4(n){return this.center.applyMatrix4(n),this.radius=this.radius*n.getMaxScaleOnAxis(),this}translate(n){return this.center.add(n),this}expandByPoint(n){if(this.isEmpty())return this.center.copy(n),this.radius=0,this;al.subVectors(n,this.center);const a=al.lengthSq();if(a>this.radius*this.radius){const s=Math.sqrt(a),u=(s-this.radius)*.5;this.center.addScaledVector(al,u/s),this.radius+=u}return this}union(n){return n.isEmpty()?this:this.isEmpty()?(this.copy(n),this):(this.center.equals(n.center)===!0?this.radius=Math.max(this.radius,n.radius):(dd.subVectors(n.center,this.center).setLength(n.radius),this.expandByPoint(al.copy(n.center).add(dd)),this.expandByPoint(al.copy(n.center).sub(dd))),this)}equals(n){return n.center.equals(this.center)&&n.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pa=new tt,pd=new tt,qu=new tt,tr=new tt,md=new tt,Yu=new tt,gd=new tt;class Pp{constructor(n=new tt,a=new tt(0,0,-1)){this.origin=n,this.direction=a}set(n,a){return this.origin.copy(n),this.direction.copy(a),this}copy(n){return this.origin.copy(n.origin),this.direction.copy(n.direction),this}at(n,a){return a.copy(this.origin).addScaledVector(this.direction,n)}lookAt(n){return this.direction.copy(n).sub(this.origin).normalize(),this}recast(n){return this.origin.copy(this.at(n,pa)),this}closestPointToPoint(n,a){a.subVectors(n,this.origin);const s=a.dot(this.direction);return s<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(n){return Math.sqrt(this.distanceSqToPoint(n))}distanceSqToPoint(n){const a=pa.subVectors(n,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(n):(pa.copy(this.origin).addScaledVector(this.direction,a),pa.distanceToSquared(n))}distanceSqToSegment(n,a,s,u){pd.copy(n).add(a).multiplyScalar(.5),qu.copy(a).sub(n).normalize(),tr.copy(this.origin).sub(pd);const f=n.distanceTo(a)*.5,h=-this.direction.dot(qu),d=tr.dot(this.direction),m=-tr.dot(qu),_=tr.lengthSq(),v=Math.abs(1-h*h);let g,S,M,b;if(v>0)if(g=h*m-d,S=h*d-m,b=f*v,g>=0)if(S>=-b)if(S<=b){const R=1/v;g*=R,S*=R,M=g*(g+h*S+2*d)+S*(h*g+S+2*m)+_}else S=f,g=Math.max(0,-(h*S+d)),M=-g*g+S*(S+2*m)+_;else S=-f,g=Math.max(0,-(h*S+d)),M=-g*g+S*(S+2*m)+_;else S<=-b?(g=Math.max(0,-(-h*f+d)),S=g>0?-f:Math.min(Math.max(-f,-m),f),M=-g*g+S*(S+2*m)+_):S<=b?(g=0,S=Math.min(Math.max(-f,-m),f),M=S*(S+2*m)+_):(g=Math.max(0,-(h*f+d)),S=g>0?f:Math.min(Math.max(-f,-m),f),M=-g*g+S*(S+2*m)+_);else S=h>0?-f:f,g=Math.max(0,-(h*S+d)),M=-g*g+S*(S+2*m)+_;return s&&s.copy(this.origin).addScaledVector(this.direction,g),u&&u.copy(pd).addScaledVector(qu,S),M}intersectSphere(n,a){pa.subVectors(n.center,this.origin);const s=pa.dot(this.direction),u=pa.dot(pa)-s*s,f=n.radius*n.radius;if(u>f)return null;const h=Math.sqrt(f-u),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,a):this.at(d,a)}intersectsSphere(n){return this.distanceSqToPoint(n.center)<=n.radius*n.radius}distanceToPlane(n){const a=n.normal.dot(this.direction);if(a===0)return n.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(n.normal)+n.constant)/a;return s>=0?s:null}intersectPlane(n,a){const s=this.distanceToPlane(n);return s===null?null:this.at(s,a)}intersectsPlane(n){const a=n.distanceToPoint(this.origin);return a===0||n.normal.dot(this.direction)*a<0}intersectBox(n,a){let s,u,f,h,d,m;const _=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,S=this.origin;return _>=0?(s=(n.min.x-S.x)*_,u=(n.max.x-S.x)*_):(s=(n.max.x-S.x)*_,u=(n.min.x-S.x)*_),v>=0?(f=(n.min.y-S.y)*v,h=(n.max.y-S.y)*v):(f=(n.max.y-S.y)*v,h=(n.min.y-S.y)*v),s>h||f>u||((f>s||isNaN(s))&&(s=f),(h<u||isNaN(u))&&(u=h),g>=0?(d=(n.min.z-S.z)*g,m=(n.max.z-S.z)*g):(d=(n.max.z-S.z)*g,m=(n.min.z-S.z)*g),s>m||d>u)||((d>s||s!==s)&&(s=d),(m<u||u!==u)&&(u=m),u<0)?null:this.at(s>=0?s:u,a)}intersectsBox(n){return this.intersectBox(n,pa)!==null}intersectTriangle(n,a,s,u,f){md.subVectors(a,n),Yu.subVectors(s,n),gd.crossVectors(md,Yu);let h=this.direction.dot(gd),d;if(h>0){if(u)return null;d=1}else if(h<0)d=-1,h=-h;else return null;tr.subVectors(this.origin,n);const m=d*this.direction.dot(Yu.crossVectors(tr,Yu));if(m<0)return null;const _=d*this.direction.dot(md.cross(tr));if(_<0||m+_>h)return null;const v=-d*tr.dot(gd);return v<0?null:this.at(v/h,f)}applyMatrix4(n){return this.origin.applyMatrix4(n),this.direction.transformDirection(n),this}equals(n){return n.origin.equals(this.origin)&&n.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(n,a,s,u,f,h,d,m,_,v,g,S,M,b,R,y){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],n!==void 0&&this.set(n,a,s,u,f,h,d,m,_,v,g,S,M,b,R,y)}set(n,a,s,u,f,h,d,m,_,v,g,S,M,b,R,y){const x=this.elements;return x[0]=n,x[4]=a,x[8]=s,x[12]=u,x[1]=f,x[5]=h,x[9]=d,x[13]=m,x[2]=_,x[6]=v,x[10]=g,x[14]=S,x[3]=M,x[7]=b,x[11]=R,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(n){const a=this.elements,s=n.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],a[9]=s[9],a[10]=s[10],a[11]=s[11],a[12]=s[12],a[13]=s[13],a[14]=s[14],a[15]=s[15],this}copyPosition(n){const a=this.elements,s=n.elements;return a[12]=s[12],a[13]=s[13],a[14]=s[14],this}setFromMatrix3(n){const a=n.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(n,a,s){return n.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(n,a,s){return this.set(n.x,a.x,s.x,0,n.y,a.y,s.y,0,n.z,a.z,s.z,0,0,0,0,1),this}extractRotation(n){const a=this.elements,s=n.elements,u=1/Fs.setFromMatrixColumn(n,0).length(),f=1/Fs.setFromMatrixColumn(n,1).length(),h=1/Fs.setFromMatrixColumn(n,2).length();return a[0]=s[0]*u,a[1]=s[1]*u,a[2]=s[2]*u,a[3]=0,a[4]=s[4]*f,a[5]=s[5]*f,a[6]=s[6]*f,a[7]=0,a[8]=s[8]*h,a[9]=s[9]*h,a[10]=s[10]*h,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(n){const a=this.elements,s=n.x,u=n.y,f=n.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(u),_=Math.sin(u),v=Math.cos(f),g=Math.sin(f);if(n.order==="XYZ"){const S=h*v,M=h*g,b=d*v,R=d*g;a[0]=m*v,a[4]=-m*g,a[8]=_,a[1]=M+b*_,a[5]=S-R*_,a[9]=-d*m,a[2]=R-S*_,a[6]=b+M*_,a[10]=h*m}else if(n.order==="YXZ"){const S=m*v,M=m*g,b=_*v,R=_*g;a[0]=S+R*d,a[4]=b*d-M,a[8]=h*_,a[1]=h*g,a[5]=h*v,a[9]=-d,a[2]=M*d-b,a[6]=R+S*d,a[10]=h*m}else if(n.order==="ZXY"){const S=m*v,M=m*g,b=_*v,R=_*g;a[0]=S-R*d,a[4]=-h*g,a[8]=b+M*d,a[1]=M+b*d,a[5]=h*v,a[9]=R-S*d,a[2]=-h*_,a[6]=d,a[10]=h*m}else if(n.order==="ZYX"){const S=h*v,M=h*g,b=d*v,R=d*g;a[0]=m*v,a[4]=b*_-M,a[8]=S*_+R,a[1]=m*g,a[5]=R*_+S,a[9]=M*_-b,a[2]=-_,a[6]=d*m,a[10]=h*m}else if(n.order==="YZX"){const S=h*m,M=h*_,b=d*m,R=d*_;a[0]=m*v,a[4]=R-S*g,a[8]=b*g+M,a[1]=g,a[5]=h*v,a[9]=-d*v,a[2]=-_*v,a[6]=M*g+b,a[10]=S-R*g}else if(n.order==="XZY"){const S=h*m,M=h*_,b=d*m,R=d*_;a[0]=m*v,a[4]=-g,a[8]=_*v,a[1]=S*g+R,a[5]=h*v,a[9]=M*g-b,a[2]=b*g-M,a[6]=d*v,a[10]=R*g+S}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(n){return this.compose(WE,n,jE)}lookAt(n,a,s){const u=this.elements;return ai.subVectors(n,a),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),er.crossVectors(s,ai),er.lengthSq()===0&&(Math.abs(s.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),er.crossVectors(s,ai)),er.normalize(),Wu.crossVectors(ai,er),u[0]=er.x,u[4]=Wu.x,u[8]=ai.x,u[1]=er.y,u[5]=Wu.y,u[9]=ai.y,u[2]=er.z,u[6]=Wu.z,u[10]=ai.z,this}multiply(n){return this.multiplyMatrices(this,n)}premultiply(n){return this.multiplyMatrices(n,this)}multiplyMatrices(n,a){const s=n.elements,u=a.elements,f=this.elements,h=s[0],d=s[4],m=s[8],_=s[12],v=s[1],g=s[5],S=s[9],M=s[13],b=s[2],R=s[6],y=s[10],x=s[14],P=s[3],O=s[7],N=s[11],Q=s[15],G=u[0],z=u[4],V=u[8],D=u[12],C=u[1],B=u[5],ut=u[9],ot=u[13],vt=u[2],pt=u[6],k=u[10],at=u[14],Z=u[3],ht=u[7],St=u[11],Gt=u[15];return f[0]=h*G+d*C+m*vt+_*Z,f[4]=h*z+d*B+m*pt+_*ht,f[8]=h*V+d*ut+m*k+_*St,f[12]=h*D+d*ot+m*at+_*Gt,f[1]=v*G+g*C+S*vt+M*Z,f[5]=v*z+g*B+S*pt+M*ht,f[9]=v*V+g*ut+S*k+M*St,f[13]=v*D+g*ot+S*at+M*Gt,f[2]=b*G+R*C+y*vt+x*Z,f[6]=b*z+R*B+y*pt+x*ht,f[10]=b*V+R*ut+y*k+x*St,f[14]=b*D+R*ot+y*at+x*Gt,f[3]=P*G+O*C+N*vt+Q*Z,f[7]=P*z+O*B+N*pt+Q*ht,f[11]=P*V+O*ut+N*k+Q*St,f[15]=P*D+O*ot+N*at+Q*Gt,this}multiplyScalar(n){const a=this.elements;return a[0]*=n,a[4]*=n,a[8]*=n,a[12]*=n,a[1]*=n,a[5]*=n,a[9]*=n,a[13]*=n,a[2]*=n,a[6]*=n,a[10]*=n,a[14]*=n,a[3]*=n,a[7]*=n,a[11]*=n,a[15]*=n,this}determinant(){const n=this.elements,a=n[0],s=n[4],u=n[8],f=n[12],h=n[1],d=n[5],m=n[9],_=n[13],v=n[2],g=n[6],S=n[10],M=n[14],b=n[3],R=n[7],y=n[11],x=n[15];return b*(+f*m*g-u*_*g-f*d*S+s*_*S+u*d*M-s*m*M)+R*(+a*m*M-a*_*S+f*h*S-u*h*M+u*_*v-f*m*v)+y*(+a*_*g-a*d*M-f*h*g+s*h*M+f*d*v-s*_*v)+x*(-u*d*v-a*m*g+a*d*S+u*h*g-s*h*S+s*m*v)}transpose(){const n=this.elements;let a;return a=n[1],n[1]=n[4],n[4]=a,a=n[2],n[2]=n[8],n[8]=a,a=n[6],n[6]=n[9],n[9]=a,a=n[3],n[3]=n[12],n[12]=a,a=n[7],n[7]=n[13],n[13]=a,a=n[11],n[11]=n[14],n[14]=a,this}setPosition(n,a,s){const u=this.elements;return n.isVector3?(u[12]=n.x,u[13]=n.y,u[14]=n.z):(u[12]=n,u[13]=a,u[14]=s),this}invert(){const n=this.elements,a=n[0],s=n[1],u=n[2],f=n[3],h=n[4],d=n[5],m=n[6],_=n[7],v=n[8],g=n[9],S=n[10],M=n[11],b=n[12],R=n[13],y=n[14],x=n[15],P=g*y*_-R*S*_+R*m*M-d*y*M-g*m*x+d*S*x,O=b*S*_-v*y*_-b*m*M+h*y*M+v*m*x-h*S*x,N=v*R*_-b*g*_+b*d*M-h*R*M-v*d*x+h*g*x,Q=b*g*m-v*R*m-b*d*S+h*R*S+v*d*y-h*g*y,G=a*P+s*O+u*N+f*Q;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/G;return n[0]=P*z,n[1]=(R*S*f-g*y*f-R*u*M+s*y*M+g*u*x-s*S*x)*z,n[2]=(d*y*f-R*m*f+R*u*_-s*y*_-d*u*x+s*m*x)*z,n[3]=(g*m*f-d*S*f-g*u*_+s*S*_+d*u*M-s*m*M)*z,n[4]=O*z,n[5]=(v*y*f-b*S*f+b*u*M-a*y*M-v*u*x+a*S*x)*z,n[6]=(b*m*f-h*y*f-b*u*_+a*y*_+h*u*x-a*m*x)*z,n[7]=(h*S*f-v*m*f+v*u*_-a*S*_-h*u*M+a*m*M)*z,n[8]=N*z,n[9]=(b*g*f-v*R*f-b*s*M+a*R*M+v*s*x-a*g*x)*z,n[10]=(h*R*f-b*d*f+b*s*_-a*R*_-h*s*x+a*d*x)*z,n[11]=(v*d*f-h*g*f-v*s*_+a*g*_+h*s*M-a*d*M)*z,n[12]=Q*z,n[13]=(v*R*u-b*g*u+b*s*S-a*R*S-v*s*y+a*g*y)*z,n[14]=(b*d*u-h*R*u-b*s*m+a*R*m+h*s*y-a*d*y)*z,n[15]=(h*g*u-v*d*u+v*s*m-a*g*m-h*s*S+a*d*S)*z,this}scale(n){const a=this.elements,s=n.x,u=n.y,f=n.z;return a[0]*=s,a[4]*=u,a[8]*=f,a[1]*=s,a[5]*=u,a[9]*=f,a[2]*=s,a[6]*=u,a[10]*=f,a[3]*=s,a[7]*=u,a[11]*=f,this}getMaxScaleOnAxis(){const n=this.elements,a=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],s=n[4]*n[4]+n[5]*n[5]+n[6]*n[6],u=n[8]*n[8]+n[9]*n[9]+n[10]*n[10];return Math.sqrt(Math.max(a,s,u))}makeTranslation(n,a,s){return n.isVector3?this.set(1,0,0,n.x,0,1,0,n.y,0,0,1,n.z,0,0,0,1):this.set(1,0,0,n,0,1,0,a,0,0,1,s,0,0,0,1),this}makeRotationX(n){const a=Math.cos(n),s=Math.sin(n);return this.set(1,0,0,0,0,a,-s,0,0,s,a,0,0,0,0,1),this}makeRotationY(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,0,s,0,0,1,0,0,-s,0,a,0,0,0,0,1),this}makeRotationZ(n){const a=Math.cos(n),s=Math.sin(n);return this.set(a,-s,0,0,s,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(n,a){const s=Math.cos(a),u=Math.sin(a),f=1-s,h=n.x,d=n.y,m=n.z,_=f*h,v=f*d;return this.set(_*h+s,_*d-u*m,_*m+u*d,0,_*d+u*m,v*d+s,v*m-u*h,0,_*m-u*d,v*m+u*h,f*m*m+s,0,0,0,0,1),this}makeScale(n,a,s){return this.set(n,0,0,0,0,a,0,0,0,0,s,0,0,0,0,1),this}makeShear(n,a,s,u,f,h){return this.set(1,s,f,0,n,1,h,0,a,u,1,0,0,0,0,1),this}compose(n,a,s){const u=this.elements,f=a._x,h=a._y,d=a._z,m=a._w,_=f+f,v=h+h,g=d+d,S=f*_,M=f*v,b=f*g,R=h*v,y=h*g,x=d*g,P=m*_,O=m*v,N=m*g,Q=s.x,G=s.y,z=s.z;return u[0]=(1-(R+x))*Q,u[1]=(M+N)*Q,u[2]=(b-O)*Q,u[3]=0,u[4]=(M-N)*G,u[5]=(1-(S+x))*G,u[6]=(y+P)*G,u[7]=0,u[8]=(b+O)*z,u[9]=(y-P)*z,u[10]=(1-(S+R))*z,u[11]=0,u[12]=n.x,u[13]=n.y,u[14]=n.z,u[15]=1,this}decompose(n,a,s){const u=this.elements;let f=Fs.set(u[0],u[1],u[2]).length();const h=Fs.set(u[4],u[5],u[6]).length(),d=Fs.set(u[8],u[9],u[10]).length();this.determinant()<0&&(f=-f),n.x=u[12],n.y=u[13],n.z=u[14],Ai.copy(this);const _=1/f,v=1/h,g=1/d;return Ai.elements[0]*=_,Ai.elements[1]*=_,Ai.elements[2]*=_,Ai.elements[4]*=v,Ai.elements[5]*=v,Ai.elements[6]*=v,Ai.elements[8]*=g,Ai.elements[9]*=g,Ai.elements[10]*=g,a.setFromRotationMatrix(Ai),s.x=f,s.y=h,s.z=d,this}makePerspective(n,a,s,u,f,h,d=ya){const m=this.elements,_=2*f/(a-n),v=2*f/(s-u),g=(a+n)/(a-n),S=(s+u)/(s-u);let M,b;if(d===ya)M=-(h+f)/(h-f),b=-2*h*f/(h-f);else if(d===yc)M=-h/(h-f),b=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=_,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=v,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(n,a,s,u,f,h,d=ya){const m=this.elements,_=1/(a-n),v=1/(s-u),g=1/(h-f),S=(a+n)*_,M=(s+u)*v;let b,R;if(d===ya)b=(h+f)*g,R=-2*g;else if(d===yc)b=f*g,R=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*_,m[4]=0,m[8]=0,m[12]=-S,m[1]=0,m[5]=2*v,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=R,m[14]=-b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(n){const a=this.elements,s=n.elements;for(let u=0;u<16;u++)if(a[u]!==s[u])return!1;return!0}fromArray(n,a=0){for(let s=0;s<16;s++)this.elements[s]=n[s+a];return this}toArray(n=[],a=0){const s=this.elements;return n[a]=s[0],n[a+1]=s[1],n[a+2]=s[2],n[a+3]=s[3],n[a+4]=s[4],n[a+5]=s[5],n[a+6]=s[6],n[a+7]=s[7],n[a+8]=s[8],n[a+9]=s[9],n[a+10]=s[10],n[a+11]=s[11],n[a+12]=s[12],n[a+13]=s[13],n[a+14]=s[14],n[a+15]=s[15],n}}const Fs=new tt,Ai=new Ze,WE=new tt(0,0,0),jE=new tt(1,1,1),er=new tt,Wu=new tt,ai=new tt,hv=new Ze,dv=new dl;class ji{constructor(n=0,a=0,s=0,u=ji.DEFAULT_ORDER){this.isEuler=!0,this._x=n,this._y=a,this._z=s,this._order=u}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get order(){return this._order}set order(n){this._order=n,this._onChangeCallback()}set(n,a,s,u=this._order){return this._x=n,this._y=a,this._z=s,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(n){return this._x=n._x,this._y=n._y,this._z=n._z,this._order=n._order,this._onChangeCallback(),this}setFromRotationMatrix(n,a=this._order,s=!0){const u=n.elements,f=u[0],h=u[4],d=u[8],m=u[1],_=u[5],v=u[9],g=u[2],S=u[6],M=u[10];switch(a){case"XYZ":this._y=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(S,_),this._z=0);break;case"YXZ":this._x=Math.asin(-be(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,_)):(this._y=Math.atan2(-g,f),this._z=0);break;case"ZXY":this._x=Math.asin(be(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-h,_)):(this._y=0,this._z=Math.atan2(m,f));break;case"ZYX":this._y=Math.asin(-be(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,f)):(this._x=0,this._z=Math.atan2(-h,_));break;case"YZX":this._z=Math.asin(be(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,_),this._y=Math.atan2(-g,f)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,_),this._y=Math.atan2(d,f)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,s===!0&&this._onChangeCallback(),this}setFromQuaternion(n,a,s){return hv.makeRotationFromQuaternion(n),this.setFromRotationMatrix(hv,a,s)}setFromVector3(n,a=this._order){return this.set(n.x,n.y,n.z,a)}reorder(n){return dv.setFromEuler(this),this.setFromQuaternion(dv,n)}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._order===this._order}fromArray(n){return this._x=n[0],this._y=n[1],this._z=n[2],n[3]!==void 0&&(this._order=n[3]),this._onChangeCallback(),this}toArray(n=[],a=0){return n[a]=this._x,n[a+1]=this._y,n[a+2]=this._z,n[a+3]=this._order,n}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ji.DEFAULT_ORDER="XYZ";class wx{constructor(){this.mask=1}set(n){this.mask=(1<<n|0)>>>0}enable(n){this.mask|=1<<n|0}enableAll(){this.mask=-1}toggle(n){this.mask^=1<<n|0}disable(n){this.mask&=~(1<<n|0)}disableAll(){this.mask=0}test(n){return(this.mask&n.mask)!==0}isEnabled(n){return(this.mask&(1<<n|0))!==0}}let ZE=0;const pv=new tt,Hs=new dl,ma=new Ze,ju=new tt,rl=new tt,KE=new tt,QE=new dl,mv=new tt(1,0,0),gv=new tt(0,1,0),_v=new tt(0,0,1),vv={type:"added"},JE={type:"removed"},Gs={type:"childadded",child:null},_d={type:"childremoved",child:null};class Un extends so{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=hl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const n=new tt,a=new ji,s=new dl,u=new tt(1,1,1);function f(){s.setFromEuler(a,!1)}function h(){a.setFromQuaternion(s,void 0,!1)}a._onChange(f),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:n},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new Ze},normalMatrix:{value:new ue}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(n){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(n),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(n){return this.quaternion.premultiply(n),this}setRotationFromAxisAngle(n,a){this.quaternion.setFromAxisAngle(n,a)}setRotationFromEuler(n){this.quaternion.setFromEuler(n,!0)}setRotationFromMatrix(n){this.quaternion.setFromRotationMatrix(n)}setRotationFromQuaternion(n){this.quaternion.copy(n)}rotateOnAxis(n,a){return Hs.setFromAxisAngle(n,a),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(n,a){return Hs.setFromAxisAngle(n,a),this.quaternion.premultiply(Hs),this}rotateX(n){return this.rotateOnAxis(mv,n)}rotateY(n){return this.rotateOnAxis(gv,n)}rotateZ(n){return this.rotateOnAxis(_v,n)}translateOnAxis(n,a){return pv.copy(n).applyQuaternion(this.quaternion),this.position.add(pv.multiplyScalar(a)),this}translateX(n){return this.translateOnAxis(mv,n)}translateY(n){return this.translateOnAxis(gv,n)}translateZ(n){return this.translateOnAxis(_v,n)}localToWorld(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(this.matrixWorld)}worldToLocal(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(ma.copy(this.matrixWorld).invert())}lookAt(n,a,s){n.isVector3?ju.copy(n):ju.set(n,a,s);const u=this.parent;this.updateWorldMatrix(!0,!1),rl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ma.lookAt(rl,ju,this.up):ma.lookAt(ju,rl,this.up),this.quaternion.setFromRotationMatrix(ma),u&&(ma.extractRotation(u.matrixWorld),Hs.setFromRotationMatrix(ma),this.quaternion.premultiply(Hs.invert()))}add(n){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return n===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",n),this):(n&&n.isObject3D?(n.removeFromParent(),n.parent=this,this.children.push(n),n.dispatchEvent(vv),Gs.child=n,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",n),this)}remove(n){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const a=this.children.indexOf(n);return a!==-1&&(n.parent=null,this.children.splice(a,1),n.dispatchEvent(JE),_d.child=n,this.dispatchEvent(_d),_d.child=null),this}removeFromParent(){const n=this.parent;return n!==null&&n.remove(this),this}clear(){return this.remove(...this.children)}attach(n){return this.updateWorldMatrix(!0,!1),ma.copy(this.matrixWorld).invert(),n.parent!==null&&(n.parent.updateWorldMatrix(!0,!1),ma.multiply(n.parent.matrixWorld)),n.applyMatrix4(ma),n.removeFromParent(),n.parent=this,this.children.push(n),n.updateWorldMatrix(!1,!0),n.dispatchEvent(vv),Gs.child=n,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(n){return this.getObjectByProperty("id",n)}getObjectByName(n){return this.getObjectByProperty("name",n)}getObjectByProperty(n,a){if(this[n]===a)return this;for(let s=0,u=this.children.length;s<u;s++){const h=this.children[s].getObjectByProperty(n,a);if(h!==void 0)return h}}getObjectsByProperty(n,a,s=[]){this[n]===a&&s.push(this);const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].getObjectsByProperty(n,a,s);return s}getWorldPosition(n){return this.updateWorldMatrix(!0,!1),n.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,n,KE),n}getWorldScale(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,QE,n),n}getWorldDirection(n){this.updateWorldMatrix(!0,!1);const a=this.matrixWorld.elements;return n.set(a[8],a[9],a[10]).normalize()}raycast(){}traverse(n){n(this);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].traverse(n)}traverseVisible(n){if(this.visible===!1)return;n(this);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].traverseVisible(n)}traverseAncestors(n){const a=this.parent;a!==null&&(n(a),a.traverseAncestors(n))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(n){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].updateMatrixWorld(n)}updateWorldMatrix(n,a){const s=this.parent;if(n===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),a===!0){const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].updateWorldMatrix(!1,!0)}}toJSON(n){const a=n===void 0||typeof n=="string",s={};a&&(n={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,this.name!==""&&(u.name=this.name),this.castShadow===!0&&(u.castShadow=!0),this.receiveShadow===!0&&(u.receiveShadow=!0),this.visible===!1&&(u.visible=!1),this.frustumCulled===!1&&(u.frustumCulled=!1),this.renderOrder!==0&&(u.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(u.matrixAutoUpdate=!1),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.visibility=this._visibility,u.active=this._active,u.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),u.maxInstanceCount=this._maxInstanceCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.geometryCount=this._geometryCount,u.matricesTexture=this._matricesTexture.toJSON(n),this._colorsTexture!==null&&(u.colorsTexture=this._colorsTexture.toJSON(n)),this.boundingSphere!==null&&(u.boundingSphere={center:u.boundingSphere.center.toArray(),radius:u.boundingSphere.radius}),this.boundingBox!==null&&(u.boundingBox={min:u.boundingBox.min.toArray(),max:u.boundingBox.max.toArray()}));function f(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(n)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(n).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(n).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=f(n.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let _=0,v=m.length;_<v;_++){const g=m[_];f(n.shapes,g)}else f(n.shapes,m)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(n.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,_=this.material.length;m<_;m++)d.push(f(n.materials,this.material[m]));u.material=d}else u.material=f(n.materials,this.material);if(this.children.length>0){u.children=[];for(let d=0;d<this.children.length;d++)u.children.push(this.children[d].toJSON(n).object)}if(this.animations.length>0){u.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];u.animations.push(f(n.animations,m))}}if(a){const d=h(n.geometries),m=h(n.materials),_=h(n.textures),v=h(n.images),g=h(n.shapes),S=h(n.skeletons),M=h(n.animations),b=h(n.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),_.length>0&&(s.textures=_),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=u,s;function h(d){const m=[];for(const _ in d){const v=d[_];delete v.metadata,m.push(v)}return m}}clone(n){return new this.constructor().copy(this,n)}copy(n,a=!0){if(this.name=n.name,this.up.copy(n.up),this.position.copy(n.position),this.rotation.order=n.rotation.order,this.quaternion.copy(n.quaternion),this.scale.copy(n.scale),this.matrix.copy(n.matrix),this.matrixWorld.copy(n.matrixWorld),this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrixWorldAutoUpdate=n.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=n.matrixWorldNeedsUpdate,this.layers.mask=n.layers.mask,this.visible=n.visible,this.castShadow=n.castShadow,this.receiveShadow=n.receiveShadow,this.frustumCulled=n.frustumCulled,this.renderOrder=n.renderOrder,this.animations=n.animations.slice(),this.userData=JSON.parse(JSON.stringify(n.userData)),a===!0)for(let s=0;s<n.children.length;s++){const u=n.children[s];this.add(u.clone())}return this}}Un.DEFAULT_UP=new tt(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new tt,ga=new tt,vd=new tt,_a=new tt,Vs=new tt,Xs=new tt,xv=new tt,xd=new tt,Sd=new tt,yd=new tt,Md=new He,Ed=new He,Td=new He;class Ci{constructor(n=new tt,a=new tt,s=new tt){this.a=n,this.b=a,this.c=s}static getNormal(n,a,s,u){u.subVectors(s,a),Ri.subVectors(n,a),u.cross(Ri);const f=u.lengthSq();return f>0?u.multiplyScalar(1/Math.sqrt(f)):u.set(0,0,0)}static getBarycoord(n,a,s,u,f){Ri.subVectors(u,a),ga.subVectors(s,a),vd.subVectors(n,a);const h=Ri.dot(Ri),d=Ri.dot(ga),m=Ri.dot(vd),_=ga.dot(ga),v=ga.dot(vd),g=h*_-d*d;if(g===0)return f.set(0,0,0),null;const S=1/g,M=(_*m-d*v)*S,b=(h*v-d*m)*S;return f.set(1-M-b,b,M)}static containsPoint(n,a,s,u){return this.getBarycoord(n,a,s,u,_a)===null?!1:_a.x>=0&&_a.y>=0&&_a.x+_a.y<=1}static getInterpolation(n,a,s,u,f,h,d,m){return this.getBarycoord(n,a,s,u,_a)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(f,_a.x),m.addScaledVector(h,_a.y),m.addScaledVector(d,_a.z),m)}static getInterpolatedAttribute(n,a,s,u,f,h){return Md.setScalar(0),Ed.setScalar(0),Td.setScalar(0),Md.fromBufferAttribute(n,a),Ed.fromBufferAttribute(n,s),Td.fromBufferAttribute(n,u),h.setScalar(0),h.addScaledVector(Md,f.x),h.addScaledVector(Ed,f.y),h.addScaledVector(Td,f.z),h}static isFrontFacing(n,a,s,u){return Ri.subVectors(s,a),ga.subVectors(n,a),Ri.cross(ga).dot(u)<0}set(n,a,s){return this.a.copy(n),this.b.copy(a),this.c.copy(s),this}setFromPointsAndIndices(n,a,s,u){return this.a.copy(n[a]),this.b.copy(n[s]),this.c.copy(n[u]),this}setFromAttributeAndIndices(n,a,s,u){return this.a.fromBufferAttribute(n,a),this.b.fromBufferAttribute(n,s),this.c.fromBufferAttribute(n,u),this}clone(){return new this.constructor().copy(this)}copy(n){return this.a.copy(n.a),this.b.copy(n.b),this.c.copy(n.c),this}getArea(){return Ri.subVectors(this.c,this.b),ga.subVectors(this.a,this.b),Ri.cross(ga).length()*.5}getMidpoint(n){return n.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(n){return Ci.getNormal(this.a,this.b,this.c,n)}getPlane(n){return n.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(n,a){return Ci.getBarycoord(n,this.a,this.b,this.c,a)}getInterpolation(n,a,s,u,f){return Ci.getInterpolation(n,this.a,this.b,this.c,a,s,u,f)}containsPoint(n){return Ci.containsPoint(n,this.a,this.b,this.c)}isFrontFacing(n){return Ci.isFrontFacing(this.a,this.b,this.c,n)}intersectsBox(n){return n.intersectsTriangle(this)}closestPointToPoint(n,a){const s=this.a,u=this.b,f=this.c;let h,d;Vs.subVectors(u,s),Xs.subVectors(f,s),xd.subVectors(n,s);const m=Vs.dot(xd),_=Xs.dot(xd);if(m<=0&&_<=0)return a.copy(s);Sd.subVectors(n,u);const v=Vs.dot(Sd),g=Xs.dot(Sd);if(v>=0&&g<=v)return a.copy(u);const S=m*g-v*_;if(S<=0&&m>=0&&v<=0)return h=m/(m-v),a.copy(s).addScaledVector(Vs,h);yd.subVectors(n,f);const M=Vs.dot(yd),b=Xs.dot(yd);if(b>=0&&M<=b)return a.copy(f);const R=M*_-m*b;if(R<=0&&_>=0&&b<=0)return d=_/(_-b),a.copy(s).addScaledVector(Xs,d);const y=v*b-M*g;if(y<=0&&g-v>=0&&M-b>=0)return xv.subVectors(f,u),d=(g-v)/(g-v+(M-b)),a.copy(u).addScaledVector(xv,d);const x=1/(y+R+S);return h=R*x,d=S*x,a.copy(s).addScaledVector(Vs,h).addScaledVector(Xs,d)}equals(n){return n.a.equals(this.a)&&n.b.equals(this.b)&&n.c.equals(this.c)}}const Dx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},Zu={h:0,s:0,l:0};function bd(o,n,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?o+(n-o)*6*a:a<1/2?n:a<2/3?o+(n-o)*6*(2/3-a):o}class de{constructor(n,a,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(n,a,s)}set(n,a,s){if(a===void 0&&s===void 0){const u=n;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(n,a,s);return this}setScalar(n){return this.r=n,this.g=n,this.b=n,this}setHex(n,a=si){return n=Math.floor(n),this.r=(n>>16&255)/255,this.g=(n>>8&255)/255,this.b=(n&255)/255,we.toWorkingColorSpace(this,a),this}setRGB(n,a,s,u=we.workingColorSpace){return this.r=n,this.g=a,this.b=s,we.toWorkingColorSpace(this,u),this}setHSL(n,a,s,u=we.workingColorSpace){if(n=zE(n,1),a=be(a,0,1),s=be(s,0,1),a===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+a):s+a-s*a,h=2*s-f;this.r=bd(h,f,n+1/3),this.g=bd(h,f,n),this.b=bd(h,f,n-1/3)}return we.toWorkingColorSpace(this,u),this}setStyle(n,a=si){function s(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+n+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(n)){let f;const h=u[1],d=u[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,a);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,a);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,a);break;default:console.warn("THREE.Color: Unknown color model "+n)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(n)){const f=u[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,a);if(h===6)return this.setHex(parseInt(f,16),a);console.warn("THREE.Color: Invalid hex color "+n)}else if(n&&n.length>0)return this.setColorName(n,a);return this}setColorName(n,a=si){const s=Dx[n.toLowerCase()];return s!==void 0?this.setHex(s,a):console.warn("THREE.Color: Unknown color "+n),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(n){return this.r=n.r,this.g=n.g,this.b=n.b,this}copySRGBToLinear(n){return this.r=Ma(n.r),this.g=Ma(n.g),this.b=Ma(n.b),this}copyLinearToSRGB(n){return this.r=Js(n.r),this.g=Js(n.g),this.b=Js(n.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(n=si){return we.fromWorkingColorSpace(Pn.copy(this),n),Math.round(be(Pn.r*255,0,255))*65536+Math.round(be(Pn.g*255,0,255))*256+Math.round(be(Pn.b*255,0,255))}getHexString(n=si){return("000000"+this.getHex(n).toString(16)).slice(-6)}getHSL(n,a=we.workingColorSpace){we.fromWorkingColorSpace(Pn.copy(this),a);const s=Pn.r,u=Pn.g,f=Pn.b,h=Math.max(s,u,f),d=Math.min(s,u,f);let m,_;const v=(d+h)/2;if(d===h)m=0,_=0;else{const g=h-d;switch(_=v<=.5?g/(h+d):g/(2-h-d),h){case s:m=(u-f)/g+(u<f?6:0);break;case u:m=(f-s)/g+2;break;case f:m=(s-u)/g+4;break}m/=6}return n.h=m,n.s=_,n.l=v,n}getRGB(n,a=we.workingColorSpace){return we.fromWorkingColorSpace(Pn.copy(this),a),n.r=Pn.r,n.g=Pn.g,n.b=Pn.b,n}getStyle(n=si){we.fromWorkingColorSpace(Pn.copy(this),n);const a=Pn.r,s=Pn.g,u=Pn.b;return n!==si?`color(${n} ${a.toFixed(3)} ${s.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(s*255)},${Math.round(u*255)})`}offsetHSL(n,a,s){return this.getHSL(nr),this.setHSL(nr.h+n,nr.s+a,nr.l+s)}add(n){return this.r+=n.r,this.g+=n.g,this.b+=n.b,this}addColors(n,a){return this.r=n.r+a.r,this.g=n.g+a.g,this.b=n.b+a.b,this}addScalar(n){return this.r+=n,this.g+=n,this.b+=n,this}sub(n){return this.r=Math.max(0,this.r-n.r),this.g=Math.max(0,this.g-n.g),this.b=Math.max(0,this.b-n.b),this}multiply(n){return this.r*=n.r,this.g*=n.g,this.b*=n.b,this}multiplyScalar(n){return this.r*=n,this.g*=n,this.b*=n,this}lerp(n,a){return this.r+=(n.r-this.r)*a,this.g+=(n.g-this.g)*a,this.b+=(n.b-this.b)*a,this}lerpColors(n,a,s){return this.r=n.r+(a.r-n.r)*s,this.g=n.g+(a.g-n.g)*s,this.b=n.b+(a.b-n.b)*s,this}lerpHSL(n,a){this.getHSL(nr),n.getHSL(Zu);const s=ld(nr.h,Zu.h,a),u=ld(nr.s,Zu.s,a),f=ld(nr.l,Zu.l,a);return this.setHSL(s,u,f),this}setFromVector3(n){return this.r=n.x,this.g=n.y,this.b=n.z,this}applyMatrix3(n){const a=this.r,s=this.g,u=this.b,f=n.elements;return this.r=f[0]*a+f[3]*s+f[6]*u,this.g=f[1]*a+f[4]*s+f[7]*u,this.b=f[2]*a+f[5]*s+f[8]*u,this}equals(n){return n.r===this.r&&n.g===this.g&&n.b===this.b}fromArray(n,a=0){return this.r=n[a],this.g=n[a+1],this.b=n[a+2],this}toArray(n=[],a=0){return n[a]=this.r,n[a+1]=this.g,n[a+2]=this.b,n}fromBufferAttribute(n,a){return this.r=n.getX(a),this.g=n.getY(a),this.b=n.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new de;de.NAMES=Dx;let $E=0;class Wr extends so{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=hl(),this.name="",this.type="Material",this.blending=Ks,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hd,this.blendDst=Gd,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(n){this._alphaTest>0!=n>0&&this.version++,this._alphaTest=n}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(n){if(n!==void 0)for(const a in n){const s=n[a];if(s===void 0){console.warn(`THREE.Material: parameter '${a}' has value of undefined.`);continue}const u=this[a];if(u===void 0){console.warn(`THREE.Material: '${a}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(s):u&&u.isVector3&&s&&s.isVector3?u.copy(s):this[a]=s}}toJSON(n){const a=n===void 0||typeof n=="string";a&&(n={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(n).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(n).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(n).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(n).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(n).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(n).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(n).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(n).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(n).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(n).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(n).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(n).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(n).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(n).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(n).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(n).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(n).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(n).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(n).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(n).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(n).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(n).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(n).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(n).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(s.blending=this.blending),this.side!==or&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Hd&&(s.blendSrc=this.blendSrc),this.blendDst!==Gd&&(s.blendDst=this.blendDst),this.blendEquation!==Gr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function u(f){const h=[];for(const d in f){const m=f[d];delete m.metadata,h.push(m)}return h}if(a){const f=u(n.textures),h=u(n.images);f.length>0&&(s.textures=f),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(n){this.name=n.name,this.blending=n.blending,this.side=n.side,this.vertexColors=n.vertexColors,this.opacity=n.opacity,this.transparent=n.transparent,this.blendSrc=n.blendSrc,this.blendDst=n.blendDst,this.blendEquation=n.blendEquation,this.blendSrcAlpha=n.blendSrcAlpha,this.blendDstAlpha=n.blendDstAlpha,this.blendEquationAlpha=n.blendEquationAlpha,this.blendColor.copy(n.blendColor),this.blendAlpha=n.blendAlpha,this.depthFunc=n.depthFunc,this.depthTest=n.depthTest,this.depthWrite=n.depthWrite,this.stencilWriteMask=n.stencilWriteMask,this.stencilFunc=n.stencilFunc,this.stencilRef=n.stencilRef,this.stencilFuncMask=n.stencilFuncMask,this.stencilFail=n.stencilFail,this.stencilZFail=n.stencilZFail,this.stencilZPass=n.stencilZPass,this.stencilWrite=n.stencilWrite;const a=n.clippingPlanes;let s=null;if(a!==null){const u=a.length;s=new Array(u);for(let f=0;f!==u;++f)s[f]=a[f].clone()}return this.clippingPlanes=s,this.clipIntersection=n.clipIntersection,this.clipShadows=n.clipShadows,this.shadowSide=n.shadowSide,this.colorWrite=n.colorWrite,this.precision=n.precision,this.polygonOffset=n.polygonOffset,this.polygonOffsetFactor=n.polygonOffsetFactor,this.polygonOffsetUnits=n.polygonOffsetUnits,this.dithering=n.dithering,this.alphaTest=n.alphaTest,this.alphaHash=n.alphaHash,this.alphaToCoverage=n.alphaToCoverage,this.premultipliedAlpha=n.premultipliedAlpha,this.forceSinglePass=n.forceSinglePass,this.visible=n.visible,this.toneMapped=n.toneMapped,this.userData=JSON.parse(JSON.stringify(n.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(n){n===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ux extends Wr{constructor(n){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=fx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.specularMap=n.specularMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.envMapRotation.copy(n.envMapRotation),this.combine=n.combine,this.reflectivity=n.reflectivity,this.refractionRatio=n.refractionRatio,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.fog=n.fog,this}}const un=new tt,Ku=new Ne;class Wi{constructor(n,a,s=!1){if(Array.isArray(n))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=n,this.itemSize=a,this.count=n!==void 0?n.length/a:0,this.normalized=s,this.usage=sv,this.updateRanges=[],this.gpuType=Sa,this.version=0}onUploadCallback(){}set needsUpdate(n){n===!0&&this.version++}setUsage(n){return this.usage=n,this}addUpdateRange(n,a){this.updateRanges.push({start:n,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(n){return this.name=n.name,this.array=new n.array.constructor(n.array),this.itemSize=n.itemSize,this.count=n.count,this.normalized=n.normalized,this.usage=n.usage,this.gpuType=n.gpuType,this}copyAt(n,a,s){n*=this.itemSize,s*=a.itemSize;for(let u=0,f=this.itemSize;u<f;u++)this.array[n+u]=a.array[s+u];return this}copyArray(n){return this.array.set(n),this}applyMatrix3(n){if(this.itemSize===2)for(let a=0,s=this.count;a<s;a++)Ku.fromBufferAttribute(this,a),Ku.applyMatrix3(n),this.setXY(a,Ku.x,Ku.y);else if(this.itemSize===3)for(let a=0,s=this.count;a<s;a++)un.fromBufferAttribute(this,a),un.applyMatrix3(n),this.setXYZ(a,un.x,un.y,un.z);return this}applyMatrix4(n){for(let a=0,s=this.count;a<s;a++)un.fromBufferAttribute(this,a),un.applyMatrix4(n),this.setXYZ(a,un.x,un.y,un.z);return this}applyNormalMatrix(n){for(let a=0,s=this.count;a<s;a++)un.fromBufferAttribute(this,a),un.applyNormalMatrix(n),this.setXYZ(a,un.x,un.y,un.z);return this}transformDirection(n){for(let a=0,s=this.count;a<s;a++)un.fromBufferAttribute(this,a),un.transformDirection(n),this.setXYZ(a,un.x,un.y,un.z);return this}set(n,a=0){return this.array.set(n,a),this}getComponent(n,a){let s=this.array[n*this.itemSize+a];return this.normalized&&(s=nl(s,this.array)),s}setComponent(n,a,s){return this.normalized&&(s=Wn(s,this.array)),this.array[n*this.itemSize+a]=s,this}getX(n){let a=this.array[n*this.itemSize];return this.normalized&&(a=nl(a,this.array)),a}setX(n,a){return this.normalized&&(a=Wn(a,this.array)),this.array[n*this.itemSize]=a,this}getY(n){let a=this.array[n*this.itemSize+1];return this.normalized&&(a=nl(a,this.array)),a}setY(n,a){return this.normalized&&(a=Wn(a,this.array)),this.array[n*this.itemSize+1]=a,this}getZ(n){let a=this.array[n*this.itemSize+2];return this.normalized&&(a=nl(a,this.array)),a}setZ(n,a){return this.normalized&&(a=Wn(a,this.array)),this.array[n*this.itemSize+2]=a,this}getW(n){let a=this.array[n*this.itemSize+3];return this.normalized&&(a=nl(a,this.array)),a}setW(n,a){return this.normalized&&(a=Wn(a,this.array)),this.array[n*this.itemSize+3]=a,this}setXY(n,a,s){return n*=this.itemSize,this.normalized&&(a=Wn(a,this.array),s=Wn(s,this.array)),this.array[n+0]=a,this.array[n+1]=s,this}setXYZ(n,a,s,u){return n*=this.itemSize,this.normalized&&(a=Wn(a,this.array),s=Wn(s,this.array),u=Wn(u,this.array)),this.array[n+0]=a,this.array[n+1]=s,this.array[n+2]=u,this}setXYZW(n,a,s,u,f){return n*=this.itemSize,this.normalized&&(a=Wn(a,this.array),s=Wn(s,this.array),u=Wn(u,this.array),f=Wn(f,this.array)),this.array[n+0]=a,this.array[n+1]=s,this.array[n+2]=u,this.array[n+3]=f,this}onUpload(n){return this.onUploadCallback=n,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const n={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(n.name=this.name),this.usage!==sv&&(n.usage=this.usage),n}}class Nx extends Wi{constructor(n,a,s){super(new Uint16Array(n),a,s)}}class Lx extends Wi{constructor(n,a,s){super(new Uint32Array(n),a,s)}}class vi extends Wi{constructor(n,a,s){super(new Float32Array(n),a,s)}}let tT=0;const _i=new Ze,Ad=new Un,ks=new tt,ri=new pl,sl=new pl,Mn=new tt;class Ni extends so{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tT++}),this.uuid=hl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(n){return Array.isArray(n)?this.index=new(Ax(n)?Lx:Nx)(n,1):this.index=n,this}setIndirect(n){return this.indirect=n,this}getIndirect(){return this.indirect}getAttribute(n){return this.attributes[n]}setAttribute(n,a){return this.attributes[n]=a,this}deleteAttribute(n){return delete this.attributes[n],this}hasAttribute(n){return this.attributes[n]!==void 0}addGroup(n,a,s=0){this.groups.push({start:n,count:a,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(n,a){this.drawRange.start=n,this.drawRange.count=a}applyMatrix4(n){const a=this.attributes.position;a!==void 0&&(a.applyMatrix4(n),a.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new ue().getNormalMatrix(n);s.applyNormalMatrix(f),s.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(n),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(n){return _i.makeRotationFromQuaternion(n),this.applyMatrix4(_i),this}rotateX(n){return _i.makeRotationX(n),this.applyMatrix4(_i),this}rotateY(n){return _i.makeRotationY(n),this.applyMatrix4(_i),this}rotateZ(n){return _i.makeRotationZ(n),this.applyMatrix4(_i),this}translate(n,a,s){return _i.makeTranslation(n,a,s),this.applyMatrix4(_i),this}scale(n,a,s){return _i.makeScale(n,a,s),this.applyMatrix4(_i),this}lookAt(n){return Ad.lookAt(n),Ad.updateMatrix(),this.applyMatrix4(Ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(n){const a=this.getAttribute("position");if(a===void 0){const s=[];for(let u=0,f=n.length;u<f;u++){const h=n[u];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new vi(s,3))}else{const s=Math.min(n.length,a.count);for(let u=0;u<s;u++){const f=n[u];a.setXYZ(u,f.x,f.y,f.z||0)}n.length>a.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pl);const n=this.attributes.position,a=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(n!==void 0){if(this.boundingBox.setFromBufferAttribute(n),a)for(let s=0,u=a.length;s<u;s++){const f=a[s];ri.setFromBufferAttribute(f),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ml);const n=this.attributes.position,a=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(n){const s=this.boundingSphere.center;if(ri.setFromBufferAttribute(n),a)for(let f=0,h=a.length;f<h;f++){const d=a[f];sl.setFromBufferAttribute(d),this.morphTargetsRelative?(Mn.addVectors(ri.min,sl.min),ri.expandByPoint(Mn),Mn.addVectors(ri.max,sl.max),ri.expandByPoint(Mn)):(ri.expandByPoint(sl.min),ri.expandByPoint(sl.max))}ri.getCenter(s);let u=0;for(let f=0,h=n.count;f<h;f++)Mn.fromBufferAttribute(n,f),u=Math.max(u,s.distanceToSquared(Mn));if(a)for(let f=0,h=a.length;f<h;f++){const d=a[f],m=this.morphTargetsRelative;for(let _=0,v=d.count;_<v;_++)Mn.fromBufferAttribute(d,_),m&&(ks.fromBufferAttribute(n,_),Mn.add(ks)),u=Math.max(u,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const n=this.index,a=this.attributes;if(n===null||a.position===void 0||a.normal===void 0||a.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=a.position,u=a.normal,f=a.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let V=0;V<s.count;V++)d[V]=new tt,m[V]=new tt;const _=new tt,v=new tt,g=new tt,S=new Ne,M=new Ne,b=new Ne,R=new tt,y=new tt;function x(V,D,C){_.fromBufferAttribute(s,V),v.fromBufferAttribute(s,D),g.fromBufferAttribute(s,C),S.fromBufferAttribute(f,V),M.fromBufferAttribute(f,D),b.fromBufferAttribute(f,C),v.sub(_),g.sub(_),M.sub(S),b.sub(S);const B=1/(M.x*b.y-b.x*M.y);isFinite(B)&&(R.copy(v).multiplyScalar(b.y).addScaledVector(g,-M.y).multiplyScalar(B),y.copy(g).multiplyScalar(M.x).addScaledVector(v,-b.x).multiplyScalar(B),d[V].add(R),d[D].add(R),d[C].add(R),m[V].add(y),m[D].add(y),m[C].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:n.count}]);for(let V=0,D=P.length;V<D;++V){const C=P[V],B=C.start,ut=C.count;for(let ot=B,vt=B+ut;ot<vt;ot+=3)x(n.getX(ot+0),n.getX(ot+1),n.getX(ot+2))}const O=new tt,N=new tt,Q=new tt,G=new tt;function z(V){Q.fromBufferAttribute(u,V),G.copy(Q);const D=d[V];O.copy(D),O.sub(Q.multiplyScalar(Q.dot(D))).normalize(),N.crossVectors(G,D);const B=N.dot(m[V])<0?-1:1;h.setXYZW(V,O.x,O.y,O.z,B)}for(let V=0,D=P.length;V<D;++V){const C=P[V],B=C.start,ut=C.count;for(let ot=B,vt=B+ut;ot<vt;ot+=3)z(n.getX(ot+0)),z(n.getX(ot+1)),z(n.getX(ot+2))}}computeVertexNormals(){const n=this.index,a=this.getAttribute("position");if(a!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Wi(new Float32Array(a.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const u=new tt,f=new tt,h=new tt,d=new tt,m=new tt,_=new tt,v=new tt,g=new tt;if(n)for(let S=0,M=n.count;S<M;S+=3){const b=n.getX(S+0),R=n.getX(S+1),y=n.getX(S+2);u.fromBufferAttribute(a,b),f.fromBufferAttribute(a,R),h.fromBufferAttribute(a,y),v.subVectors(h,f),g.subVectors(u,f),v.cross(g),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,R),_.fromBufferAttribute(s,y),d.add(v),m.add(v),_.add(v),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(y,_.x,_.y,_.z)}else for(let S=0,M=a.count;S<M;S+=3)u.fromBufferAttribute(a,S+0),f.fromBufferAttribute(a,S+1),h.fromBufferAttribute(a,S+2),v.subVectors(h,f),g.subVectors(u,f),v.cross(g),s.setXYZ(S+0,v.x,v.y,v.z),s.setXYZ(S+1,v.x,v.y,v.z),s.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const n=this.attributes.normal;for(let a=0,s=n.count;a<s;a++)Mn.fromBufferAttribute(n,a),Mn.normalize(),n.setXYZ(a,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function n(d,m){const _=d.array,v=d.itemSize,g=d.normalized,S=new _.constructor(m.length*v);let M=0,b=0;for(let R=0,y=m.length;R<y;R++){d.isInterleavedBufferAttribute?M=m[R]*d.data.stride+d.offset:M=m[R]*v;for(let x=0;x<v;x++)S[b++]=_[M++]}return new Wi(S,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const a=new Ni,s=this.index.array,u=this.attributes;for(const d in u){const m=u[d],_=n(m,s);a.setAttribute(d,_)}const f=this.morphAttributes;for(const d in f){const m=[],_=f[d];for(let v=0,g=_.length;v<g;v++){const S=_[v],M=n(S,s);m.push(M)}a.morphAttributes[d]=m}a.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const _=h[d];a.addGroup(_.start,_.count,_.materialIndex)}return a}toJSON(){const n={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),Object.keys(this.userData).length>0&&(n.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const _ in m)m[_]!==void 0&&(n[_]=m[_]);return n}n.data={attributes:{}};const a=this.index;a!==null&&(n.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});const s=this.attributes;for(const m in s){const _=s[m];n.data.attributes[m]=_.toJSON(n.data)}const u={};let f=!1;for(const m in this.morphAttributes){const _=this.morphAttributes[m],v=[];for(let g=0,S=_.length;g<S;g++){const M=_[g];v.push(M.toJSON(n.data))}v.length>0&&(u[m]=v,f=!0)}f&&(n.data.morphAttributes=u,n.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(n.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(n.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),n}clone(){return new this.constructor().copy(this)}copy(n){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const a={};this.name=n.name;const s=n.index;s!==null&&this.setIndex(s.clone(a));const u=n.attributes;for(const _ in u){const v=u[_];this.setAttribute(_,v.clone(a))}const f=n.morphAttributes;for(const _ in f){const v=[],g=f[_];for(let S=0,M=g.length;S<M;S++)v.push(g[S].clone(a));this.morphAttributes[_]=v}this.morphTargetsRelative=n.morphTargetsRelative;const h=n.groups;for(let _=0,v=h.length;_<v;_++){const g=h[_];this.addGroup(g.start,g.count,g.materialIndex)}const d=n.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=n.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=n.drawRange.start,this.drawRange.count=n.drawRange.count,this.userData=n.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sv=new Ze,zr=new Pp,Qu=new ml,yv=new tt,Ju=new tt,$u=new tt,tc=new tt,Rd=new tt,ec=new tt,Mv=new tt,nc=new tt;class Di extends Un{constructor(n=new Ni,a=new Ux){super(),this.isMesh=!0,this.type="Mesh",this.geometry=n,this.material=a,this.updateMorphTargets()}copy(n,a){return super.copy(n,a),n.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=n.morphTargetInfluences.slice()),n.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},n.morphTargetDictionary)),this.material=Array.isArray(n.material)?n.material.slice():n.material,this.geometry=n.geometry,this}updateMorphTargets(){const a=this.geometry.morphAttributes,s=Object.keys(a);if(s.length>0){const u=a[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=u.length;f<h;f++){const d=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}getVertexPosition(n,a){const s=this.geometry,u=s.attributes.position,f=s.morphAttributes.position,h=s.morphTargetsRelative;a.fromBufferAttribute(u,n);const d=this.morphTargetInfluences;if(f&&d){ec.set(0,0,0);for(let m=0,_=f.length;m<_;m++){const v=d[m],g=f[m];v!==0&&(Rd.fromBufferAttribute(g,n),h?ec.addScaledVector(Rd,v):ec.addScaledVector(Rd.sub(a),v))}a.add(ec)}return a}raycast(n,a){const s=this.geometry,u=this.material,f=this.matrixWorld;u!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Qu.copy(s.boundingSphere),Qu.applyMatrix4(f),zr.copy(n.ray).recast(n.near),!(Qu.containsPoint(zr.origin)===!1&&(zr.intersectSphere(Qu,yv)===null||zr.origin.distanceToSquared(yv)>(n.far-n.near)**2))&&(Sv.copy(f).invert(),zr.copy(n.ray).applyMatrix4(Sv),!(s.boundingBox!==null&&zr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(n,a,zr)))}_computeIntersections(n,a,s){let u;const f=this.geometry,h=this.material,d=f.index,m=f.attributes.position,_=f.attributes.uv,v=f.attributes.uv1,g=f.attributes.normal,S=f.groups,M=f.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,R=S.length;b<R;b++){const y=S[b],x=h[y.materialIndex],P=Math.max(y.start,M.start),O=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let N=P,Q=O;N<Q;N+=3){const G=d.getX(N),z=d.getX(N+1),V=d.getX(N+2);u=ic(this,x,n,s,_,v,g,G,z,V),u&&(u.faceIndex=Math.floor(N/3),u.face.materialIndex=y.materialIndex,a.push(u))}}else{const b=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let y=b,x=R;y<x;y+=3){const P=d.getX(y),O=d.getX(y+1),N=d.getX(y+2);u=ic(this,h,n,s,_,v,g,P,O,N),u&&(u.faceIndex=Math.floor(y/3),a.push(u))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,R=S.length;b<R;b++){const y=S[b],x=h[y.materialIndex],P=Math.max(y.start,M.start),O=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let N=P,Q=O;N<Q;N+=3){const G=N,z=N+1,V=N+2;u=ic(this,x,n,s,_,v,g,G,z,V),u&&(u.faceIndex=Math.floor(N/3),u.face.materialIndex=y.materialIndex,a.push(u))}}else{const b=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let y=b,x=R;y<x;y+=3){const P=y,O=y+1,N=y+2;u=ic(this,h,n,s,_,v,g,P,O,N),u&&(u.faceIndex=Math.floor(y/3),a.push(u))}}}}function eT(o,n,a,s,u,f,h,d){let m;if(n.side===jn?m=s.intersectTriangle(h,f,u,!0,d):m=s.intersectTriangle(u,f,h,n.side===or,d),m===null)return null;nc.copy(d),nc.applyMatrix4(o.matrixWorld);const _=a.ray.origin.distanceTo(nc);return _<a.near||_>a.far?null:{distance:_,point:nc.clone(),object:o}}function ic(o,n,a,s,u,f,h,d,m,_){o.getVertexPosition(d,Ju),o.getVertexPosition(m,$u),o.getVertexPosition(_,tc);const v=eT(o,n,a,s,Ju,$u,tc,Mv);if(v){const g=new tt;Ci.getBarycoord(Mv,Ju,$u,tc,g),u&&(v.uv=Ci.getInterpolatedAttribute(u,d,m,_,g,new Ne)),f&&(v.uv1=Ci.getInterpolatedAttribute(f,d,m,_,g,new Ne)),h&&(v.normal=Ci.getInterpolatedAttribute(h,d,m,_,g,new tt),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const S={a:d,b:m,c:_,normal:new tt,materialIndex:0};Ci.getNormal(Ju,$u,tc,S.normal),v.face=S,v.barycoord=g}return v}class gl extends Ni{constructor(n=1,a=1,s=1,u=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:n,height:a,depth:s,widthSegments:u,heightSegments:f,depthSegments:h};const d=this;u=Math.floor(u),f=Math.floor(f),h=Math.floor(h);const m=[],_=[],v=[],g=[];let S=0,M=0;b("z","y","x",-1,-1,s,a,n,h,f,0),b("z","y","x",1,-1,s,a,-n,h,f,1),b("x","z","y",1,1,n,s,a,u,h,2),b("x","z","y",1,-1,n,s,-a,u,h,3),b("x","y","z",1,-1,n,a,s,u,f,4),b("x","y","z",-1,-1,n,a,-s,u,f,5),this.setIndex(m),this.setAttribute("position",new vi(_,3)),this.setAttribute("normal",new vi(v,3)),this.setAttribute("uv",new vi(g,2));function b(R,y,x,P,O,N,Q,G,z,V,D){const C=N/z,B=Q/V,ut=N/2,ot=Q/2,vt=G/2,pt=z+1,k=V+1;let at=0,Z=0;const ht=new tt;for(let St=0;St<k;St++){const Gt=St*B-ot;for(let ee=0;ee<pt;ee++){const Me=ee*C-ut;ht[R]=Me*P,ht[y]=Gt*O,ht[x]=vt,_.push(ht.x,ht.y,ht.z),ht[R]=0,ht[y]=0,ht[x]=G>0?1:-1,v.push(ht.x,ht.y,ht.z),g.push(ee/z),g.push(1-St/V),at+=1}}for(let St=0;St<V;St++)for(let Gt=0;Gt<z;Gt++){const ee=S+Gt+pt*St,Me=S+Gt+pt*(St+1),w=S+(Gt+1)+pt*(St+1),j=S+(Gt+1)+pt*St;m.push(ee,Me,j),m.push(Me,w,j),Z+=6}d.addGroup(M,Z,D),M+=Z,S+=at}}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new gl(n.width,n.height,n.depth,n.widthSegments,n.heightSegments,n.depthSegments)}}function ro(o){const n={};for(const a in o){n[a]={};for(const s in o[a]){const u=o[a][s];u&&(u.isColor||u.isMatrix3||u.isMatrix4||u.isVector2||u.isVector3||u.isVector4||u.isTexture||u.isQuaternion)?u.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),n[a][s]=null):n[a][s]=u.clone():Array.isArray(u)?n[a][s]=u.slice():n[a][s]=u}}return n}function Gn(o){const n={};for(let a=0;a<o.length;a++){const s=ro(o[a]);for(const u in s)n[u]=s[u]}return n}function nT(o){const n=[];for(let a=0;a<o.length;a++)n.push(o[a].clone());return n}function Ox(o){const n=o.getRenderTarget();return n===null?o.outputColorSpace:n.isXRRenderTarget===!0?n.texture.colorSpace:we.workingColorSpace}const iT={clone:ro,merge:Gn};var aT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class lr extends Wr{constructor(n){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aT,this.fragmentShader=rT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,n!==void 0&&this.setValues(n)}copy(n){return super.copy(n),this.fragmentShader=n.fragmentShader,this.vertexShader=n.vertexShader,this.uniforms=ro(n.uniforms),this.uniformsGroups=nT(n.uniformsGroups),this.defines=Object.assign({},n.defines),this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.fog=n.fog,this.lights=n.lights,this.clipping=n.clipping,this.extensions=Object.assign({},n.extensions),this.glslVersion=n.glslVersion,this}toJSON(n){const a=super.toJSON(n);a.glslVersion=this.glslVersion,a.uniforms={};for(const u in this.uniforms){const h=this.uniforms[u].value;h&&h.isTexture?a.uniforms[u]={type:"t",value:h.toJSON(n).uuid}:h&&h.isColor?a.uniforms[u]={type:"c",value:h.getHex()}:h&&h.isVector2?a.uniforms[u]={type:"v2",value:h.toArray()}:h&&h.isVector3?a.uniforms[u]={type:"v3",value:h.toArray()}:h&&h.isVector4?a.uniforms[u]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?a.uniforms[u]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?a.uniforms[u]={type:"m4",value:h.toArray()}:a.uniforms[u]={value:h}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;const s={};for(const u in this.extensions)this.extensions[u]===!0&&(s[u]=!0);return Object.keys(s).length>0&&(a.extensions=s),a}}class zx extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=ya}copy(n,a){return super.copy(n,a),this.matrixWorldInverse.copy(n.matrixWorldInverse),this.projectionMatrix.copy(n.projectionMatrix),this.projectionMatrixInverse.copy(n.projectionMatrixInverse),this.coordinateSystem=n.coordinateSystem,this}getWorldDirection(n){return super.getWorldDirection(n).negate()}updateMatrixWorld(n){super.updateMatrixWorld(n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(n,a){super.updateWorldMatrix(n,a),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ir=new tt,Ev=new Ne,Tv=new Ne;class oi extends zx{constructor(n=50,a=1,s=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=n,this.zoom=1,this.near=s,this.far=u,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(n,a){return super.copy(n,a),this.fov=n.fov,this.zoom=n.zoom,this.near=n.near,this.far=n.far,this.focus=n.focus,this.aspect=n.aspect,this.view=n.view===null?null:Object.assign({},n.view),this.filmGauge=n.filmGauge,this.filmOffset=n.filmOffset,this}setFocalLength(n){const a=.5*this.getFilmHeight()/n;this.fov=bp*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){const n=Math.tan(od*.5*this.fov);return .5*this.getFilmHeight()/n}getEffectiveFOV(){return bp*2*Math.atan(Math.tan(od*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(n,a,s){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ir.x,ir.y).multiplyScalar(-n/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ir.x,ir.y).multiplyScalar(-n/ir.z)}getViewSize(n,a){return this.getViewBounds(n,Ev,Tv),a.subVectors(Tv,Ev)}setViewOffset(n,a,s,u,f,h){this.aspect=n/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=this.near;let a=n*Math.tan(od*.5*this.fov)/this.zoom,s=2*a,u=this.aspect*s,f=-.5*u;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,_=h.fullHeight;f+=h.offsetX*u/m,a-=h.offsetY*s/_,u*=h.width/m,s*=h.height/_}const d=this.filmOffset;d!==0&&(f+=n*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+u,a,a-s,n,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(n){const a=super.toJSON(n);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}}const qs=-90,Ys=1;class sT extends Un{constructor(n,a,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new oi(qs,Ys,n,a);u.layers=this.layers,this.add(u);const f=new oi(qs,Ys,n,a);f.layers=this.layers,this.add(f);const h=new oi(qs,Ys,n,a);h.layers=this.layers,this.add(h);const d=new oi(qs,Ys,n,a);d.layers=this.layers,this.add(d);const m=new oi(qs,Ys,n,a);m.layers=this.layers,this.add(m);const _=new oi(qs,Ys,n,a);_.layers=this.layers,this.add(_)}updateCoordinateSystem(){const n=this.coordinateSystem,a=this.children.concat(),[s,u,f,h,d,m]=a;for(const _ of a)this.remove(_);if(n===ya)s.up.set(0,1,0),s.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(n===yc)s.up.set(0,-1,0),s.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+n);for(const _ of a)this.add(_),_.updateMatrixWorld()}update(n,a){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:u}=this;this.coordinateSystem!==n.coordinateSystem&&(this.coordinateSystem=n.coordinateSystem,this.updateCoordinateSystem());const[f,h,d,m,_,v]=this.children,g=n.getRenderTarget(),S=n.getActiveCubeFace(),M=n.getActiveMipmapLevel(),b=n.xr.enabled;n.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,n.setRenderTarget(s,0,u),n.render(a,f),n.setRenderTarget(s,1,u),n.render(a,h),n.setRenderTarget(s,2,u),n.render(a,d),n.setRenderTarget(s,3,u),n.render(a,m),n.setRenderTarget(s,4,u),n.render(a,_),s.texture.generateMipmaps=R,n.setRenderTarget(s,5,u),n.render(a,v),n.setRenderTarget(g,S,M),n.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class Px extends Zn{constructor(n,a,s,u,f,h,d,m,_,v){n=n!==void 0?n:[],a=a!==void 0?a:to,super(n,a,s,u,f,h,d,m,_,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(n){this.image=n}}class oT extends Yr{constructor(n=1,a={}){super(n,n,a),this.isWebGLCubeRenderTarget=!0;const s={width:n,height:n,depth:1},u=[s,s,s,s,s,s];this.texture=new Px(u,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=a.generateMipmaps!==void 0?a.generateMipmaps:!1,this.texture.minFilter=a.minFilter!==void 0?a.minFilter:Yi}fromEquirectangularTexture(n,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},u=new gl(5,5,5),f=new lr({name:"CubemapFromEquirect",uniforms:ro(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:jn,blending:rr});f.uniforms.tEquirect.value=a;const h=new Di(u,f),d=a.minFilter;return a.minFilter===kr&&(a.minFilter=Yi),new sT(1,10,this).update(n,h),a.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(n,a,s,u){const f=n.getRenderTarget();for(let h=0;h<6;h++)n.setRenderTarget(this,h),n.clear(a,s,u);n.setRenderTarget(f)}}class Ip{constructor(n,a=1,s=1e3){this.isFog=!0,this.name="",this.color=new de(n),this.near=a,this.far=s}clone(){return new Ip(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class lT extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(n,a){return super.copy(n,a),n.background!==null&&(this.background=n.background.clone()),n.environment!==null&&(this.environment=n.environment.clone()),n.fog!==null&&(this.fog=n.fog.clone()),this.backgroundBlurriness=n.backgroundBlurriness,this.backgroundIntensity=n.backgroundIntensity,this.backgroundRotation.copy(n.backgroundRotation),this.environmentIntensity=n.environmentIntensity,this.environmentRotation.copy(n.environmentRotation),n.overrideMaterial!==null&&(this.overrideMaterial=n.overrideMaterial.clone()),this.matrixAutoUpdate=n.matrixAutoUpdate,this}toJSON(n){const a=super.toJSON(n);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(a.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(a.object.backgroundIntensity=this.backgroundIntensity),a.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(a.object.environmentIntensity=this.environmentIntensity),a.object.environmentRotation=this.environmentRotation.toArray(),a}}const Cd=new tt,uT=new tt,cT=new ue;class Fr{constructor(n=new tt(1,0,0),a=0){this.isPlane=!0,this.normal=n,this.constant=a}set(n,a){return this.normal.copy(n),this.constant=a,this}setComponents(n,a,s,u){return this.normal.set(n,a,s),this.constant=u,this}setFromNormalAndCoplanarPoint(n,a){return this.normal.copy(n),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(n,a,s){const u=Cd.subVectors(s,a).cross(uT.subVectors(n,a)).normalize();return this.setFromNormalAndCoplanarPoint(u,n),this}copy(n){return this.normal.copy(n.normal),this.constant=n.constant,this}normalize(){const n=1/this.normal.length();return this.normal.multiplyScalar(n),this.constant*=n,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(n){return this.normal.dot(n)+this.constant}distanceToSphere(n){return this.distanceToPoint(n.center)-n.radius}projectPoint(n,a){return a.copy(n).addScaledVector(this.normal,-this.distanceToPoint(n))}intersectLine(n,a){const s=n.delta(Cd),u=this.normal.dot(s);if(u===0)return this.distanceToPoint(n.start)===0?a.copy(n.start):null;const f=-(n.start.dot(this.normal)+this.constant)/u;return f<0||f>1?null:a.copy(n.start).addScaledVector(s,f)}intersectsLine(n){const a=this.distanceToPoint(n.start),s=this.distanceToPoint(n.end);return a<0&&s>0||s<0&&a>0}intersectsBox(n){return n.intersectsPlane(this)}intersectsSphere(n){return n.intersectsPlane(this)}coplanarPoint(n){return n.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(n,a){const s=a||cT.getNormalMatrix(n),u=this.coplanarPoint(Cd).applyMatrix4(n),f=this.normal.applyMatrix3(s).normalize();return this.constant=-u.dot(f),this}translate(n){return this.constant-=n.dot(this.normal),this}equals(n){return n.normal.equals(this.normal)&&n.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new ml,ac=new tt;class Bp{constructor(n=new Fr,a=new Fr,s=new Fr,u=new Fr,f=new Fr,h=new Fr){this.planes=[n,a,s,u,f,h]}set(n,a,s,u,f,h){const d=this.planes;return d[0].copy(n),d[1].copy(a),d[2].copy(s),d[3].copy(u),d[4].copy(f),d[5].copy(h),this}copy(n){const a=this.planes;for(let s=0;s<6;s++)a[s].copy(n.planes[s]);return this}setFromProjectionMatrix(n,a=ya){const s=this.planes,u=n.elements,f=u[0],h=u[1],d=u[2],m=u[3],_=u[4],v=u[5],g=u[6],S=u[7],M=u[8],b=u[9],R=u[10],y=u[11],x=u[12],P=u[13],O=u[14],N=u[15];if(s[0].setComponents(m-f,S-_,y-M,N-x).normalize(),s[1].setComponents(m+f,S+_,y+M,N+x).normalize(),s[2].setComponents(m+h,S+v,y+b,N+P).normalize(),s[3].setComponents(m-h,S-v,y-b,N-P).normalize(),s[4].setComponents(m-d,S-g,y-R,N-O).normalize(),a===ya)s[5].setComponents(m+d,S+g,y+R,N+O).normalize();else if(a===yc)s[5].setComponents(d,g,R,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(n){if(n.boundingSphere!==void 0)n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere).applyMatrix4(n.matrixWorld);else{const a=n.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),Pr.copy(a.boundingSphere).applyMatrix4(n.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(n){return Pr.center.set(0,0,0),Pr.radius=.7071067811865476,Pr.applyMatrix4(n.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(n){const a=this.planes,s=n.center,u=-n.radius;for(let f=0;f<6;f++)if(a[f].distanceToPoint(s)<u)return!1;return!0}intersectsBox(n){const a=this.planes;for(let s=0;s<6;s++){const u=a[s];if(ac.x=u.normal.x>0?n.max.x:n.min.x,ac.y=u.normal.y>0?n.max.y:n.min.y,ac.z=u.normal.z>0?n.max.z:n.min.z,u.distanceToPoint(ac)<0)return!1}return!0}containsPoint(n){const a=this.planes;for(let s=0;s<6;s++)if(a[s].distanceToPoint(n)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ix extends Wr{constructor(n){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.map=n.map,this.linewidth=n.linewidth,this.linecap=n.linecap,this.linejoin=n.linejoin,this.fog=n.fog,this}}const Ec=new tt,Tc=new tt,bv=new Ze,ol=new Pp,rc=new ml,wd=new tt,Av=new tt;class fT extends Un{constructor(n=new Ni,a=new Ix){super(),this.isLine=!0,this.type="Line",this.geometry=n,this.material=a,this.updateMorphTargets()}copy(n,a){return super.copy(n,a),this.material=Array.isArray(n.material)?n.material.slice():n.material,this.geometry=n.geometry,this}computeLineDistances(){const n=this.geometry;if(n.index===null){const a=n.attributes.position,s=[0];for(let u=1,f=a.count;u<f;u++)Ec.fromBufferAttribute(a,u-1),Tc.fromBufferAttribute(a,u),s[u]=s[u-1],s[u]+=Ec.distanceTo(Tc);n.setAttribute("lineDistance",new vi(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(n,a){const s=this.geometry,u=this.matrixWorld,f=n.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),rc.copy(s.boundingSphere),rc.applyMatrix4(u),rc.radius+=f,n.ray.intersectsSphere(rc)===!1)return;bv.copy(u).invert(),ol.copy(n.ray).applyMatrix4(bv);const d=f/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,_=this.isLineSegments?2:1,v=s.index,S=s.attributes.position;if(v!==null){const M=Math.max(0,h.start),b=Math.min(v.count,h.start+h.count);for(let R=M,y=b-1;R<y;R+=_){const x=v.getX(R),P=v.getX(R+1),O=sc(this,n,ol,m,x,P);O&&a.push(O)}if(this.isLineLoop){const R=v.getX(b-1),y=v.getX(M),x=sc(this,n,ol,m,R,y);x&&a.push(x)}}else{const M=Math.max(0,h.start),b=Math.min(S.count,h.start+h.count);for(let R=M,y=b-1;R<y;R+=_){const x=sc(this,n,ol,m,R,R+1);x&&a.push(x)}if(this.isLineLoop){const R=sc(this,n,ol,m,b-1,M);R&&a.push(R)}}}updateMorphTargets(){const a=this.geometry.morphAttributes,s=Object.keys(a);if(s.length>0){const u=a[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=u.length;f<h;f++){const d=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}}function sc(o,n,a,s,u,f){const h=o.geometry.attributes.position;if(Ec.fromBufferAttribute(h,u),Tc.fromBufferAttribute(h,f),a.distanceSqToSegment(Ec,Tc,wd,Av)>s)return;wd.applyMatrix4(o.matrixWorld);const m=n.ray.origin.distanceTo(wd);if(!(m<n.near||m>n.far))return{distance:m,point:Av.clone().applyMatrix4(o.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:o}}const Rv=new tt,Cv=new tt;class hT extends fT{constructor(n,a){super(n,a),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const n=this.geometry;if(n.index===null){const a=n.attributes.position,s=[];for(let u=0,f=a.count;u<f;u+=2)Rv.fromBufferAttribute(a,u),Cv.fromBufferAttribute(a,u+1),s[u]=u===0?0:s[u-1],s[u+1]=s[u]+Rv.distanceTo(Cv);n.setAttribute("lineDistance",new vi(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bx extends Wr{constructor(n){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.map=n.map,this.alphaMap=n.alphaMap,this.size=n.size,this.sizeAttenuation=n.sizeAttenuation,this.fog=n.fog,this}}const wv=new Ze,Ap=new Pp,oc=new ml,lc=new tt;class Dv extends Un{constructor(n=new Ni,a=new Bx){super(),this.isPoints=!0,this.type="Points",this.geometry=n,this.material=a,this.updateMorphTargets()}copy(n,a){return super.copy(n,a),this.material=Array.isArray(n.material)?n.material.slice():n.material,this.geometry=n.geometry,this}raycast(n,a){const s=this.geometry,u=this.matrixWorld,f=n.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),oc.copy(s.boundingSphere),oc.applyMatrix4(u),oc.radius+=f,n.ray.intersectsSphere(oc)===!1)return;wv.copy(u).invert(),Ap.copy(n.ray).applyMatrix4(wv);const d=f/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,_=s.index,g=s.attributes.position;if(_!==null){const S=Math.max(0,h.start),M=Math.min(_.count,h.start+h.count);for(let b=S,R=M;b<R;b++){const y=_.getX(b);lc.fromBufferAttribute(g,y),Uv(lc,y,m,u,n,a,this)}}else{const S=Math.max(0,h.start),M=Math.min(g.count,h.start+h.count);for(let b=S,R=M;b<R;b++)lc.fromBufferAttribute(g,b),Uv(lc,b,m,u,n,a,this)}}updateMorphTargets(){const a=this.geometry.morphAttributes,s=Object.keys(a);if(s.length>0){const u=a[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=u.length;f<h;f++){const d=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}}function Uv(o,n,a,s,u,f,h){const d=Ap.distanceSqToPoint(o);if(d<a){const m=new tt;Ap.closestPointToPoint(o,m),m.applyMatrix4(s);const _=u.ray.origin.distanceTo(m);if(_<u.near||_>u.far)return;f.push({distance:_,distanceToRay:Math.sqrt(d),point:m,index:n,face:null,faceIndex:null,barycoord:null,object:h})}}class uc extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Fx extends Zn{constructor(n,a,s,u,f,h,d,m,_,v=Qs){if(v!==Qs&&v!==io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&v===Qs&&(s=qr),s===void 0&&v===io&&(s=no),super(null,u,f,h,d,m,v,s,_),this.isDepthTexture=!0,this.image={width:n,height:a},this.magFilter=d!==void 0?d:Ui,this.minFilter=m!==void 0?m:Ui,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(n){return super.copy(n),this.compareFunction=n.compareFunction,this}toJSON(n){const a=super.toJSON(n);return this.compareFunction!==null&&(a.compareFunction=this.compareFunction),a}}class _l extends Ni{constructor(n=1,a=1,s=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:n,height:a,widthSegments:s,heightSegments:u};const f=n/2,h=a/2,d=Math.floor(s),m=Math.floor(u),_=d+1,v=m+1,g=n/d,S=a/m,M=[],b=[],R=[],y=[];for(let x=0;x<v;x++){const P=x*S-h;for(let O=0;O<_;O++){const N=O*g-f;b.push(N,-P,0),R.push(0,0,1),y.push(O/d),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let P=0;P<d;P++){const O=P+_*x,N=P+_*(x+1),Q=P+1+_*(x+1),G=P+1+_*x;M.push(O,N,G),M.push(N,Q,G)}this.setIndex(M),this.setAttribute("position",new vi(b,3)),this.setAttribute("normal",new vi(R,3)),this.setAttribute("uv",new vi(y,2))}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new _l(n.width,n.height,n.widthSegments,n.heightSegments)}}class dT extends Wr{constructor(n){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tx,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.defines={STANDARD:""},this.color.copy(n.color),this.roughness=n.roughness,this.metalness=n.metalness,this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.emissive.copy(n.emissive),this.emissiveMap=n.emissiveMap,this.emissiveIntensity=n.emissiveIntensity,this.bumpMap=n.bumpMap,this.bumpScale=n.bumpScale,this.normalMap=n.normalMap,this.normalMapType=n.normalMapType,this.normalScale.copy(n.normalScale),this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.roughnessMap=n.roughnessMap,this.metalnessMap=n.metalnessMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.envMapRotation.copy(n.envMapRotation),this.envMapIntensity=n.envMapIntensity,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.flatShading=n.flatShading,this.fog=n.fog,this}}class pT extends Wr{constructor(n){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(n)}copy(n){return super.copy(n),this.depthPacking=n.depthPacking,this.map=n.map,this.alphaMap=n.alphaMap,this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this}}class mT extends Wr{constructor(n){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(n)}copy(n){return super.copy(n),this.map=n.map,this.alphaMap=n.alphaMap,this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this}}class Hx extends Un{constructor(n,a=1){super(),this.isLight=!0,this.type="Light",this.color=new de(n),this.intensity=a}dispose(){}copy(n,a){return super.copy(n,a),this.color.copy(n.color),this.intensity=n.intensity,this}toJSON(n){const a=super.toJSON(n);return a.object.color=this.color.getHex(),a.object.intensity=this.intensity,this.groundColor!==void 0&&(a.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(a.object.distance=this.distance),this.angle!==void 0&&(a.object.angle=this.angle),this.decay!==void 0&&(a.object.decay=this.decay),this.penumbra!==void 0&&(a.object.penumbra=this.penumbra),this.shadow!==void 0&&(a.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(a.object.target=this.target.uuid),a}}class gT extends Hx{constructor(n,a,s){super(n,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(a)}copy(n,a){return super.copy(n,a),this.groundColor.copy(n.groundColor),this}}const Dd=new Ze,Nv=new tt,Lv=new tt;class _T{constructor(n){this.camera=n,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bp,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(n){const a=this.camera,s=this.matrix;Nv.setFromMatrixPosition(n.matrixWorld),a.position.copy(Nv),Lv.setFromMatrixPosition(n.target.matrixWorld),a.lookAt(Lv),a.updateMatrixWorld(),Dd.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dd),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Dd)}getViewport(n){return this._viewports[n]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(n){return this.camera=n.camera.clone(),this.intensity=n.intensity,this.bias=n.bias,this.radius=n.radius,this.mapSize.copy(n.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const n={};return this.intensity!==1&&(n.intensity=this.intensity),this.bias!==0&&(n.bias=this.bias),this.normalBias!==0&&(n.normalBias=this.normalBias),this.radius!==1&&(n.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(n.mapSize=this.mapSize.toArray()),n.camera=this.camera.toJSON(!1).object,delete n.camera.matrix,n}}const Ov=new Ze,ll=new tt,Ud=new tt;class vT extends _T{constructor(){super(new oi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new He(2,1,1,1),new He(0,1,1,1),new He(3,1,1,1),new He(1,1,1,1),new He(3,0,1,1),new He(1,0,1,1)],this._cubeDirections=[new tt(1,0,0),new tt(-1,0,0),new tt(0,0,1),new tt(0,0,-1),new tt(0,1,0),new tt(0,-1,0)],this._cubeUps=[new tt(0,1,0),new tt(0,1,0),new tt(0,1,0),new tt(0,1,0),new tt(0,0,1),new tt(0,0,-1)]}updateMatrices(n,a=0){const s=this.camera,u=this.matrix,f=n.distance||s.far;f!==s.far&&(s.far=f,s.updateProjectionMatrix()),ll.setFromMatrixPosition(n.matrixWorld),s.position.copy(ll),Ud.copy(s.position),Ud.add(this._cubeDirections[a]),s.up.copy(this._cubeUps[a]),s.lookAt(Ud),s.updateMatrixWorld(),u.makeTranslation(-ll.x,-ll.y,-ll.z),Ov.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ov)}}class zv extends Hx{constructor(n,a,s=0,u=2){super(n,a),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=u,this.shadow=new vT}get power(){return this.intensity*4*Math.PI}set power(n){this.intensity=n/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(n,a){return super.copy(n,a),this.distance=n.distance,this.decay=n.decay,this.shadow=n.shadow.clone(),this}}class xT extends zx{constructor(n=-1,a=1,s=1,u=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=n,this.right=a,this.top=s,this.bottom=u,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(n,a){return super.copy(n,a),this.left=n.left,this.right=n.right,this.top=n.top,this.bottom=n.bottom,this.near=n.near,this.far=n.far,this.zoom=n.zoom,this.view=n.view===null?null:Object.assign({},n.view),this}setViewOffset(n,a,s,u,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let f=s-n,h=s+n,d=u+a,m=u-a;if(this.view!==null&&this.view.enabled){const _=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=_*this.view.offsetX,h=f+_*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(f,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(n){const a=super.toJSON(n);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}}class ST extends oi{constructor(n=[]){super(),this.isArrayCamera=!0,this.cameras=n}}class yT extends hT{constructor(n=10,a=10,s=4473924,u=8947848){s=new de(s),u=new de(u);const f=a/2,h=n/a,d=n/2,m=[],_=[];for(let S=0,M=0,b=-d;S<=a;S++,b+=h){m.push(-d,0,b,d,0,b),m.push(b,0,-d,b,0,d);const R=S===f?s:u;R.toArray(_,M),M+=3,R.toArray(_,M),M+=3,R.toArray(_,M),M+=3,R.toArray(_,M),M+=3}const v=new Ni;v.setAttribute("position",new vi(m,3)),v.setAttribute("color",new vi(_,3));const g=new Ix({vertexColors:!0,toneMapped:!1});super(v,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Pv(o,n,a,s){const u=MT(s);switch(a){case _x:return o*n;case xx:return o*n;case Sx:return o*n*2;case yx:return o*n/u.components*u.byteLength;case Lp:return o*n/u.components*u.byteLength;case Mx:return o*n*2/u.components*u.byteLength;case Op:return o*n*2/u.components*u.byteLength;case vx:return o*n*3/u.components*u.byteLength;case wi:return o*n*4/u.components*u.byteLength;case zp:return o*n*4/u.components*u.byteLength;case pc:case mc:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*8;case gc:case _c:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case tp:case np:return Math.max(o,16)*Math.max(n,8)/4;case $d:case ep:return Math.max(o,8)*Math.max(n,8)/2;case ip:case ap:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*8;case rp:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case sp:return Math.floor((o+3)/4)*Math.floor((n+3)/4)*16;case op:return Math.floor((o+4)/5)*Math.floor((n+3)/4)*16;case lp:return Math.floor((o+4)/5)*Math.floor((n+4)/5)*16;case up:return Math.floor((o+5)/6)*Math.floor((n+4)/5)*16;case cp:return Math.floor((o+5)/6)*Math.floor((n+5)/6)*16;case fp:return Math.floor((o+7)/8)*Math.floor((n+4)/5)*16;case hp:return Math.floor((o+7)/8)*Math.floor((n+5)/6)*16;case dp:return Math.floor((o+7)/8)*Math.floor((n+7)/8)*16;case pp:return Math.floor((o+9)/10)*Math.floor((n+4)/5)*16;case mp:return Math.floor((o+9)/10)*Math.floor((n+5)/6)*16;case gp:return Math.floor((o+9)/10)*Math.floor((n+7)/8)*16;case _p:return Math.floor((o+9)/10)*Math.floor((n+9)/10)*16;case vp:return Math.floor((o+11)/12)*Math.floor((n+9)/10)*16;case xp:return Math.floor((o+11)/12)*Math.floor((n+11)/12)*16;case vc:case Sp:case yp:return Math.ceil(o/4)*Math.ceil(n/4)*16;case Ex:case Mp:return Math.ceil(o/4)*Math.ceil(n/4)*8;case Ep:case Tp:return Math.ceil(o/4)*Math.ceil(n/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function MT(o){switch(o){case Ea:case px:return{byteLength:1,components:1};case cl:case mx:case fl:return{byteLength:2,components:1};case Up:case Np:return{byteLength:2,components:4};case qr:case Dp:case Sa:return{byteLength:4,components:1};case gx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wp);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gx(){let o=null,n=!1,a=null,s=null;function u(f,h){a(f,h),s=o.requestAnimationFrame(u)}return{start:function(){n!==!0&&a!==null&&(s=o.requestAnimationFrame(u),n=!0)},stop:function(){o.cancelAnimationFrame(s),n=!1},setAnimationLoop:function(f){a=f},setContext:function(f){o=f}}}function ET(o){const n=new WeakMap;function a(d,m){const _=d.array,v=d.usage,g=_.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,_,v),d.onUploadCallback();let M;if(_ instanceof Float32Array)M=o.FLOAT;else if(_ instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(_ instanceof Int16Array)M=o.SHORT;else if(_ instanceof Uint32Array)M=o.UNSIGNED_INT;else if(_ instanceof Int32Array)M=o.INT;else if(_ instanceof Int8Array)M=o.BYTE;else if(_ instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:S,type:M,bytesPerElement:_.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,_){const v=m.array,g=m.updateRanges;if(o.bindBuffer(_,d),g.length===0)o.bufferSubData(_,0,v);else{g.sort((M,b)=>M.start-b.start);let S=0;for(let M=1;M<g.length;M++){const b=g[S],R=g[M];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++S,g[S]=R)}g.length=S+1;for(let M=0,b=g.length;M<b;M++){const R=g[M];o.bufferSubData(_,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function u(d){return d.isInterleavedBufferAttribute&&(d=d.data),n.get(d)}function f(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=n.get(d);m&&(o.deleteBuffer(m.buffer),n.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=n.get(d);(!v||v.version<d.version)&&n.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const _=n.get(d);if(_===void 0)n.set(d,a(d,m));else if(_.version<d.version){if(_.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(_.buffer,d,m),_.version=d.version}}return{get:u,remove:f,update:h}}var TT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,AT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,UT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,LT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,OT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,IT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,BT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,FT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,HT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,XT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,YT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,WT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ZT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,KT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$T=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t1="gl_FragColor = linearToOutputTexel( gl_FragColor );",e1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,n1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,i1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,a1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,r1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,s1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,o1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,l1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,u1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,c1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,h1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,d1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,p1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,m1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,g1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,v1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,x1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,y1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,M1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,E1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,T1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,b1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,A1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,D1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,U1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,N1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,L1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,I1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,B1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,H1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,V1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,X1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Y1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,W1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,K1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,J1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ib=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ab=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,sb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ob=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ub=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,db=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_b=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Eb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ab=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Db=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ub=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ob=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ib=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$b=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,eA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:TT,alphahash_pars_fragment:bT,alphamap_fragment:AT,alphamap_pars_fragment:RT,alphatest_fragment:CT,alphatest_pars_fragment:wT,aomap_fragment:DT,aomap_pars_fragment:UT,batching_pars_vertex:NT,batching_vertex:LT,begin_vertex:OT,beginnormal_vertex:zT,bsdfs:PT,iridescence_fragment:IT,bumpmap_pars_fragment:BT,clipping_planes_fragment:FT,clipping_planes_pars_fragment:HT,clipping_planes_pars_vertex:GT,clipping_planes_vertex:VT,color_fragment:XT,color_pars_fragment:kT,color_pars_vertex:qT,color_vertex:YT,common:WT,cube_uv_reflection_fragment:jT,defaultnormal_vertex:ZT,displacementmap_pars_vertex:KT,displacementmap_vertex:QT,emissivemap_fragment:JT,emissivemap_pars_fragment:$T,colorspace_fragment:t1,colorspace_pars_fragment:e1,envmap_fragment:n1,envmap_common_pars_fragment:i1,envmap_pars_fragment:a1,envmap_pars_vertex:r1,envmap_physical_pars_fragment:g1,envmap_vertex:s1,fog_vertex:o1,fog_pars_vertex:l1,fog_fragment:u1,fog_pars_fragment:c1,gradientmap_pars_fragment:f1,lightmap_pars_fragment:h1,lights_lambert_fragment:d1,lights_lambert_pars_fragment:p1,lights_pars_begin:m1,lights_toon_fragment:_1,lights_toon_pars_fragment:v1,lights_phong_fragment:x1,lights_phong_pars_fragment:S1,lights_physical_fragment:y1,lights_physical_pars_fragment:M1,lights_fragment_begin:E1,lights_fragment_maps:T1,lights_fragment_end:b1,logdepthbuf_fragment:A1,logdepthbuf_pars_fragment:R1,logdepthbuf_pars_vertex:C1,logdepthbuf_vertex:w1,map_fragment:D1,map_pars_fragment:U1,map_particle_fragment:N1,map_particle_pars_fragment:L1,metalnessmap_fragment:O1,metalnessmap_pars_fragment:z1,morphinstance_vertex:P1,morphcolor_vertex:I1,morphnormal_vertex:B1,morphtarget_pars_vertex:F1,morphtarget_vertex:H1,normal_fragment_begin:G1,normal_fragment_maps:V1,normal_pars_fragment:X1,normal_pars_vertex:k1,normal_vertex:q1,normalmap_pars_fragment:Y1,clearcoat_normal_fragment_begin:W1,clearcoat_normal_fragment_maps:j1,clearcoat_pars_fragment:Z1,iridescence_pars_fragment:K1,opaque_fragment:Q1,packing:J1,premultiplied_alpha_fragment:$1,project_vertex:tb,dithering_fragment:eb,dithering_pars_fragment:nb,roughnessmap_fragment:ib,roughnessmap_pars_fragment:ab,shadowmap_pars_fragment:rb,shadowmap_pars_vertex:sb,shadowmap_vertex:ob,shadowmask_pars_fragment:lb,skinbase_vertex:ub,skinning_pars_vertex:cb,skinning_vertex:fb,skinnormal_vertex:hb,specularmap_fragment:db,specularmap_pars_fragment:pb,tonemapping_fragment:mb,tonemapping_pars_fragment:gb,transmission_fragment:_b,transmission_pars_fragment:vb,uv_pars_fragment:xb,uv_pars_vertex:Sb,uv_vertex:yb,worldpos_vertex:Mb,background_vert:Eb,background_frag:Tb,backgroundCube_vert:bb,backgroundCube_frag:Ab,cube_vert:Rb,cube_frag:Cb,depth_vert:wb,depth_frag:Db,distanceRGBA_vert:Ub,distanceRGBA_frag:Nb,equirect_vert:Lb,equirect_frag:Ob,linedashed_vert:zb,linedashed_frag:Pb,meshbasic_vert:Ib,meshbasic_frag:Bb,meshlambert_vert:Fb,meshlambert_frag:Hb,meshmatcap_vert:Gb,meshmatcap_frag:Vb,meshnormal_vert:Xb,meshnormal_frag:kb,meshphong_vert:qb,meshphong_frag:Yb,meshphysical_vert:Wb,meshphysical_frag:jb,meshtoon_vert:Zb,meshtoon_frag:Kb,points_vert:Qb,points_frag:Jb,shadow_vert:$b,shadow_frag:tA,sprite_vert:eA,sprite_frag:nA},Lt={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},qi={basic:{uniforms:Gn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Gn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new de(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Gn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Gn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Gn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new de(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Gn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Gn([Lt.points,Lt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Gn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Gn([Lt.common,Lt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Gn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Gn([Lt.sprite,Lt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Gn([Lt.common,Lt.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Gn([Lt.lights,Lt.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};qi.physical={uniforms:Gn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const cc={r:0,b:0,g:0},Ir=new ji,iA=new Ze;function aA(o,n,a,s,u,f,h){const d=new de(0);let m=f===!0?0:1,_,v,g=null,S=0,M=null;function b(O){let N=O.isScene===!0?O.background:null;return N&&N.isTexture&&(N=(O.backgroundBlurriness>0?a:n).get(N)),N}function R(O){let N=!1;const Q=b(O);Q===null?x(d,m):Q&&Q.isColor&&(x(Q,1),N=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?s.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||N)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(O,N){const Q=b(N);Q&&(Q.isCubeTexture||Q.mapping===bc)?(v===void 0&&(v=new Di(new gl(1,1,1),new lr({name:"BackgroundCubeMaterial",uniforms:ro(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(G,z,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),u.update(v)),Ir.copy(N.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,Q.isCubeTexture&&Q.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),v.material.uniforms.envMap.value=Q,v.material.uniforms.flipEnvMap.value=Q.isCubeTexture&&Q.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(iA.makeRotationFromEuler(Ir)),v.material.toneMapped=we.getTransfer(Q.colorSpace)!==Fe,(g!==Q||S!==Q.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,g=Q,S=Q.version,M=o.toneMapping),v.layers.enableAll(),O.unshift(v,v.geometry,v.material,0,0,null)):Q&&Q.isTexture&&(_===void 0&&(_=new Di(new _l(2,2),new lr({name:"BackgroundMaterial",uniforms:ro(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),Object.defineProperty(_.material,"map",{get:function(){return this.uniforms.t2D.value}}),u.update(_)),_.material.uniforms.t2D.value=Q,_.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,_.material.toneMapped=we.getTransfer(Q.colorSpace)!==Fe,Q.matrixAutoUpdate===!0&&Q.updateMatrix(),_.material.uniforms.uvTransform.value.copy(Q.matrix),(g!==Q||S!==Q.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,g=Q,S=Q.version,M=o.toneMapping),_.layers.enableAll(),O.unshift(_,_.geometry,_.material,0,0,null))}function x(O,N){O.getRGB(cc,Ox(o)),s.buffers.color.setClear(cc.r,cc.g,cc.b,N,h)}function P(){v!==void 0&&(v.geometry.dispose(),v.material.dispose()),_!==void 0&&(_.geometry.dispose(),_.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(O,N=1){d.set(O),m=N,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,x(d,m)},render:R,addToRenderList:y,dispose:P}}function rA(o,n){const a=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},u=S(null);let f=u,h=!1;function d(C,B,ut,ot,vt){let pt=!1;const k=g(ot,ut,B);f!==k&&(f=k,_(f.object)),pt=M(C,ot,ut,vt),pt&&b(C,ot,ut,vt),vt!==null&&n.update(vt,o.ELEMENT_ARRAY_BUFFER),(pt||h)&&(h=!1,N(C,B,ut,ot),vt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,n.get(vt).buffer))}function m(){return o.createVertexArray()}function _(C){return o.bindVertexArray(C)}function v(C){return o.deleteVertexArray(C)}function g(C,B,ut){const ot=ut.wireframe===!0;let vt=s[C.id];vt===void 0&&(vt={},s[C.id]=vt);let pt=vt[B.id];pt===void 0&&(pt={},vt[B.id]=pt);let k=pt[ot];return k===void 0&&(k=S(m()),pt[ot]=k),k}function S(C){const B=[],ut=[],ot=[];for(let vt=0;vt<a;vt++)B[vt]=0,ut[vt]=0,ot[vt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ut,attributeDivisors:ot,object:C,attributes:{},index:null}}function M(C,B,ut,ot){const vt=f.attributes,pt=B.attributes;let k=0;const at=ut.getAttributes();for(const Z in at)if(at[Z].location>=0){const St=vt[Z];let Gt=pt[Z];if(Gt===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(Gt=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(Gt=C.instanceColor)),St===void 0||St.attribute!==Gt||Gt&&St.data!==Gt.data)return!0;k++}return f.attributesNum!==k||f.index!==ot}function b(C,B,ut,ot){const vt={},pt=B.attributes;let k=0;const at=ut.getAttributes();for(const Z in at)if(at[Z].location>=0){let St=pt[Z];St===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(St=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(St=C.instanceColor));const Gt={};Gt.attribute=St,St&&St.data&&(Gt.data=St.data),vt[Z]=Gt,k++}f.attributes=vt,f.attributesNum=k,f.index=ot}function R(){const C=f.newAttributes;for(let B=0,ut=C.length;B<ut;B++)C[B]=0}function y(C){x(C,0)}function x(C,B){const ut=f.newAttributes,ot=f.enabledAttributes,vt=f.attributeDivisors;ut[C]=1,ot[C]===0&&(o.enableVertexAttribArray(C),ot[C]=1),vt[C]!==B&&(o.vertexAttribDivisor(C,B),vt[C]=B)}function P(){const C=f.newAttributes,B=f.enabledAttributes;for(let ut=0,ot=B.length;ut<ot;ut++)B[ut]!==C[ut]&&(o.disableVertexAttribArray(ut),B[ut]=0)}function O(C,B,ut,ot,vt,pt,k){k===!0?o.vertexAttribIPointer(C,B,ut,vt,pt):o.vertexAttribPointer(C,B,ut,ot,vt,pt)}function N(C,B,ut,ot){R();const vt=ot.attributes,pt=ut.getAttributes(),k=B.defaultAttributeValues;for(const at in pt){const Z=pt[at];if(Z.location>=0){let ht=vt[at];if(ht===void 0&&(at==="instanceMatrix"&&C.instanceMatrix&&(ht=C.instanceMatrix),at==="instanceColor"&&C.instanceColor&&(ht=C.instanceColor)),ht!==void 0){const St=ht.normalized,Gt=ht.itemSize,ee=n.get(ht);if(ee===void 0)continue;const Me=ee.buffer,w=ee.type,j=ee.bytesPerElement,gt=w===o.INT||w===o.UNSIGNED_INT||ht.gpuType===Dp;if(ht.isInterleavedBufferAttribute){const ct=ht.data,At=ct.stride,Nt=ht.offset;if(ct.isInstancedInterleavedBuffer){for(let Ft=0;Ft<Z.locationSize;Ft++)x(Z.location+Ft,ct.meshPerAttribute);C.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Ft=0;Ft<Z.locationSize;Ft++)y(Z.location+Ft);o.bindBuffer(o.ARRAY_BUFFER,Me);for(let Ft=0;Ft<Z.locationSize;Ft++)O(Z.location+Ft,Gt/Z.locationSize,w,St,At*j,(Nt+Gt/Z.locationSize*Ft)*j,gt)}else{if(ht.isInstancedBufferAttribute){for(let ct=0;ct<Z.locationSize;ct++)x(Z.location+ct,ht.meshPerAttribute);C.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let ct=0;ct<Z.locationSize;ct++)y(Z.location+ct);o.bindBuffer(o.ARRAY_BUFFER,Me);for(let ct=0;ct<Z.locationSize;ct++)O(Z.location+ct,Gt/Z.locationSize,w,St,Gt*j,Gt/Z.locationSize*ct*j,gt)}}else if(k!==void 0){const St=k[at];if(St!==void 0)switch(St.length){case 2:o.vertexAttrib2fv(Z.location,St);break;case 3:o.vertexAttrib3fv(Z.location,St);break;case 4:o.vertexAttrib4fv(Z.location,St);break;default:o.vertexAttrib1fv(Z.location,St)}}}}P()}function Q(){V();for(const C in s){const B=s[C];for(const ut in B){const ot=B[ut];for(const vt in ot)v(ot[vt].object),delete ot[vt];delete B[ut]}delete s[C]}}function G(C){if(s[C.id]===void 0)return;const B=s[C.id];for(const ut in B){const ot=B[ut];for(const vt in ot)v(ot[vt].object),delete ot[vt];delete B[ut]}delete s[C.id]}function z(C){for(const B in s){const ut=s[B];if(ut[C.id]===void 0)continue;const ot=ut[C.id];for(const vt in ot)v(ot[vt].object),delete ot[vt];delete ut[C.id]}}function V(){D(),h=!0,f!==u&&(f=u,_(f.object))}function D(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:d,reset:V,resetDefaultState:D,dispose:Q,releaseStatesOfGeometry:G,releaseStatesOfProgram:z,initAttributes:R,enableAttribute:y,disableUnusedAttributes:P}}function sA(o,n,a){let s;function u(_){s=_}function f(_,v){o.drawArrays(s,_,v),a.update(v,s,1)}function h(_,v,g){g!==0&&(o.drawArraysInstanced(s,_,v,g),a.update(v,s,g))}function d(_,v,g){if(g===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,_,0,v,0,g);let M=0;for(let b=0;b<g;b++)M+=v[b];a.update(M,s,1)}function m(_,v,g,S){if(g===0)return;const M=n.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<_.length;b++)h(_[b],v[b],S[b]);else{M.multiDrawArraysInstancedWEBGL(s,_,0,v,0,S,0,g);let b=0;for(let R=0;R<g;R++)b+=v[R]*S[R];a.update(b,s,1)}}this.setMode=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function oA(o,n,a,s){let u;function f(){if(u!==void 0)return u;if(n.has("EXT_texture_filter_anisotropic")===!0){const z=n.get("EXT_texture_filter_anisotropic");u=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else u=0;return u}function h(z){return!(z!==wi&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const V=z===fl&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(z!==Ea&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Sa&&!V)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let _=a.precision!==void 0?a.precision:"highp";const v=m(_);v!==_&&(console.warn("THREE.WebGLRenderer:",_,"not supported, using",v,"instead."),_=v);const g=a.logarithmicDepthBuffer===!0,S=a.reverseDepthBuffer===!0&&n.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),Q=b>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:_,logarithmicDepthBuffer:g,reverseDepthBuffer:S,maxTextures:M,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:P,maxVaryings:O,maxFragmentUniforms:N,vertexTextures:Q,maxSamples:G}}function lA(o){const n=this;let a=null,s=0,u=!1,f=!1;const h=new Fr,d=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const M=g.length!==0||S||s!==0||u;return u=S,s=g.length,M},this.beginShadows=function(){f=!0,v(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(g,S){a=v(g,S,0)},this.setState=function(g,S,M){const b=g.clippingPlanes,R=g.clipIntersection,y=g.clipShadows,x=o.get(g);if(!u||b===null||b.length===0||f&&!y)f?v(null):_();else{const P=f?0:s,O=P*4;let N=x.clippingState||null;m.value=N,N=v(b,S,O,M);for(let Q=0;Q!==O;++Q)N[Q]=a[Q];x.clippingState=N,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=P}};function _(){m.value!==a&&(m.value=a,m.needsUpdate=s>0),n.numPlanes=s,n.numIntersection=0}function v(g,S,M,b){const R=g!==null?g.length:0;let y=null;if(R!==0){if(y=m.value,b!==!0||y===null){const x=M+R*4,P=S.matrixWorldInverse;d.getNormalMatrix(P),(y===null||y.length<x)&&(y=new Float32Array(x));for(let O=0,N=M;O!==R;++O,N+=4)h.copy(g[O]).applyMatrix4(P,d),h.normal.toArray(y,N),y[N+3]=h.constant}m.value=y,m.needsUpdate=!0}return n.numPlanes=R,n.numIntersection=0,y}}function uA(o){let n=new WeakMap;function a(h,d){return d===Zd?h.mapping=to:d===Kd&&(h.mapping=eo),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Zd||d===Kd)if(n.has(h)){const m=n.get(h).texture;return a(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const _=new oT(m.height);return _.fromEquirectangularTexture(o,h),n.set(h,_),h.addEventListener("dispose",u),a(_.texture,h.mapping)}else return null}}return h}function u(h){const d=h.target;d.removeEventListener("dispose",u);const m=n.get(d);m!==void 0&&(n.delete(d),m.dispose())}function f(){n=new WeakMap}return{get:s,dispose:f}}const Zs=4,Iv=[.125,.215,.35,.446,.526,.582],Vr=20,Nd=new xT,Bv=new de;let Ld=null,Od=0,zd=0,Pd=!1;const Hr=(1+Math.sqrt(5))/2,Ws=1/Hr,Fv=[new tt(-Hr,Ws,0),new tt(Hr,Ws,0),new tt(-Ws,0,Hr),new tt(Ws,0,Hr),new tt(0,Hr,-Ws),new tt(0,Hr,Ws),new tt(-1,1,-1),new tt(1,1,-1),new tt(-1,1,1),new tt(1,1,1)];class Hv{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,a=0,s=.1,u=100){Ld=this._renderer.getRenderTarget(),Od=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(n,s,u,f),a>0&&this._blur(f,0,0,a),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(n,a=null){return this._fromTexture(n,a)}fromCubemap(n,a=null){return this._fromTexture(n,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(Ld,Od,zd),this._renderer.xr.enabled=Pd,n.scissorTest=!1,fc(n,0,0,n.width,n.height)}_fromTexture(n,a){n.mapping===to||n.mapping===eo?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Ld=this._renderer.getRenderTarget(),Od=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=a||this._allocateTargets();return this._textureToCubeUV(n,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),a=4*this._cubeSize,s={magFilter:Yi,minFilter:Yi,generateMipmaps:!1,type:fl,format:wi,colorSpace:ao,depthBuffer:!1},u=Gv(n,a,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==a){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gv(n,a,s);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cA(f)),this._blurMaterial=fA(f,n,a)}return u}_compileMaterial(n){const a=new Di(this._lodPlanes[0],n);this._renderer.compile(a,Nd)}_sceneToCubeUV(n,a,s,u){const d=new oi(90,1,a,s),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor(Bv),v.toneMapping=sr,v.autoClear=!1;const M=new Ux({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),b=new Di(new gl,M);let R=!1;const y=n.background;y?y.isColor&&(M.color.copy(y),n.background=null,R=!0):(M.color.copy(Bv),R=!0);for(let x=0;x<6;x++){const P=x%3;P===0?(d.up.set(0,m[x],0),d.lookAt(_[x],0,0)):P===1?(d.up.set(0,0,m[x]),d.lookAt(0,_[x],0)):(d.up.set(0,m[x],0),d.lookAt(0,0,_[x]));const O=this._cubeSize;fc(u,P*O,x>2?O:0,O,O),v.setRenderTarget(u),R&&v.render(b,d),v.render(n,d)}b.geometry.dispose(),b.material.dispose(),v.toneMapping=S,v.autoClear=g,n.background=y}_textureToCubeUV(n,a){const s=this._renderer,u=n.mapping===to||n.mapping===eo;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xv()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vv());const f=u?this._cubemapMaterial:this._equirectMaterial,h=new Di(this._lodPlanes[0],f),d=f.uniforms;d.envMap.value=n;const m=this._cubeSize;fc(a,0,0,3*m,2*m),s.setRenderTarget(a),s.render(h,Nd)}_applyPMREM(n){const a=this._renderer,s=a.autoClear;a.autoClear=!1;const u=this._lodPlanes.length;for(let f=1;f<u;f++){const h=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),d=Fv[(u-f-1)%Fv.length];this._blur(n,f-1,f,h,d)}a.autoClear=s}_blur(n,a,s,u,f){const h=this._pingPongRenderTarget;this._halfBlur(n,h,a,s,u,"latitudinal",f),this._halfBlur(h,n,s,s,u,"longitudinal",f)}_halfBlur(n,a,s,u,f,h,d){const m=this._renderer,_=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new Di(this._lodPlanes[u],_),S=_.uniforms,M=this._sizeLods[s]-1,b=isFinite(f)?Math.PI/(2*M):2*Math.PI/(2*Vr-1),R=f/b,y=isFinite(f)?1+Math.floor(v*R):Vr;y>Vr&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Vr}`);const x=[];let P=0;for(let z=0;z<Vr;++z){const V=z/R,D=Math.exp(-V*V/2);x.push(D),z===0?P+=D:z<y&&(P+=2*D)}for(let z=0;z<x.length;z++)x[z]=x[z]/P;S.envMap.value=n.texture,S.samples.value=y,S.weights.value=x,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:O}=this;S.dTheta.value=b,S.mipInt.value=O-s;const N=this._sizeLods[u],Q=3*N*(u>O-Zs?u-O+Zs:0),G=4*(this._cubeSize-N);fc(a,Q,G,3*N,2*N),m.setRenderTarget(a),m.render(g,Nd)}}function cA(o){const n=[],a=[],s=[];let u=o;const f=o-Zs+1+Iv.length;for(let h=0;h<f;h++){const d=Math.pow(2,u);a.push(d);let m=1/d;h>o-Zs?m=Iv[h-o+Zs-1]:h===0&&(m=0),s.push(m);const _=1/(d-2),v=-_,g=1+_,S=[v,v,g,v,g,g,v,v,g,g,v,g],M=6,b=6,R=3,y=2,x=1,P=new Float32Array(R*b*M),O=new Float32Array(y*b*M),N=new Float32Array(x*b*M);for(let G=0;G<M;G++){const z=G%3*2/3-1,V=G>2?0:-1,D=[z,V,0,z+2/3,V,0,z+2/3,V+1,0,z,V,0,z+2/3,V+1,0,z,V+1,0];P.set(D,R*b*G),O.set(S,y*b*G);const C=[G,G,G,G,G,G];N.set(C,x*b*G)}const Q=new Ni;Q.setAttribute("position",new Wi(P,R)),Q.setAttribute("uv",new Wi(O,y)),Q.setAttribute("faceIndex",new Wi(N,x)),n.push(Q),u>Zs&&u--}return{lodPlanes:n,sizeLods:a,sigmas:s}}function Gv(o,n,a){const s=new Yr(o,n,a);return s.texture.mapping=bc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function fc(o,n,a,s,u){o.viewport.set(n,a,s,u),o.scissor.set(n,a,s,u)}function fA(o,n,a){const s=new Float32Array(Vr),u=new tt(0,1,0);return new lr({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:u}},vertexShader:Fp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Vv(){return new lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Xv(){return new lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Fp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hA(o){let n=new WeakMap,a=null;function s(d){if(d&&d.isTexture){const m=d.mapping,_=m===Zd||m===Kd,v=m===to||m===eo;if(_||v){let g=n.get(d);const S=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return a===null&&(a=new Hv(o)),g=_?a.fromEquirectangular(d,g):a.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),g.texture;if(g!==void 0)return g.texture;{const M=d.image;return _&&M&&M.height>0||v&&M&&u(M)?(a===null&&(a=new Hv(o)),g=_?a.fromEquirectangular(d):a.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),d.addEventListener("dispose",f),g.texture):null}}}return d}function u(d){let m=0;const _=6;for(let v=0;v<_;v++)d[v]!==void 0&&m++;return m===_}function f(d){const m=d.target;m.removeEventListener("dispose",f);const _=n.get(m);_!==void 0&&(n.delete(m),_.dispose())}function h(){n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:s,dispose:h}}function dA(o){const n={};function a(s){if(n[s]!==void 0)return n[s];let u;switch(s){case"WEBGL_depth_texture":u=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":u=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":u=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":u=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:u=o.getExtension(s)}return n[s]=u,u}return{has:function(s){return a(s)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(s){const u=a(s);return u===null&&js("THREE.WebGLRenderer: "+s+" extension not supported."),u}}}function pA(o,n,a,s){const u={},f=new WeakMap;function h(g){const S=g.target;S.index!==null&&n.remove(S.index);for(const b in S.attributes)n.remove(S.attributes[b]);S.removeEventListener("dispose",h),delete u[S.id];const M=f.get(S);M&&(n.remove(M),f.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,a.memory.geometries--}function d(g,S){return u[S.id]===!0||(S.addEventListener("dispose",h),u[S.id]=!0,a.memory.geometries++),S}function m(g){const S=g.attributes;for(const M in S)n.update(S[M],o.ARRAY_BUFFER)}function _(g){const S=[],M=g.index,b=g.attributes.position;let R=0;if(M!==null){const P=M.array;R=M.version;for(let O=0,N=P.length;O<N;O+=3){const Q=P[O+0],G=P[O+1],z=P[O+2];S.push(Q,G,G,z,z,Q)}}else if(b!==void 0){const P=b.array;R=b.version;for(let O=0,N=P.length/3-1;O<N;O+=3){const Q=O+0,G=O+1,z=O+2;S.push(Q,G,G,z,z,Q)}}else return;const y=new(Ax(S)?Lx:Nx)(S,1);y.version=R;const x=f.get(g);x&&n.remove(x),f.set(g,y)}function v(g){const S=f.get(g);if(S){const M=g.index;M!==null&&S.version<M.version&&_(g)}else _(g);return f.get(g)}return{get:d,update:m,getWireframeAttribute:v}}function mA(o,n,a){let s;function u(S){s=S}let f,h;function d(S){f=S.type,h=S.bytesPerElement}function m(S,M){o.drawElements(s,M,f,S*h),a.update(M,s,1)}function _(S,M,b){b!==0&&(o.drawElementsInstanced(s,M,f,S*h,b),a.update(M,s,b))}function v(S,M,b){if(b===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,f,S,0,b);let y=0;for(let x=0;x<b;x++)y+=M[x];a.update(y,s,1)}function g(S,M,b,R){if(b===0)return;const y=n.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<S.length;x++)_(S[x]/h,M[x],R[x]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,f,S,0,R,0,b);let x=0;for(let P=0;P<b;P++)x+=M[P]*R[P];a.update(x,s,1)}}this.setMode=u,this.setIndex=d,this.render=m,this.renderInstances=_,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function gA(o){const n={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,h,d){switch(a.calls++,h){case o.TRIANGLES:a.triangles+=d*(f/3);break;case o.LINES:a.lines+=d*(f/2);break;case o.LINE_STRIP:a.lines+=d*(f-1);break;case o.LINE_LOOP:a.lines+=d*f;break;case o.POINTS:a.points+=d*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function u(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:n,render:a,programs:null,autoReset:!0,reset:u,update:s}}function _A(o,n,a){const s=new WeakMap,u=new He;function f(h,d,m){const _=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let S=s.get(d);if(S===void 0||S.count!==g){let C=function(){V.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var M=C;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let N=0;b===!0&&(N=1),R===!0&&(N=2),y===!0&&(N=3);let Q=d.attributes.position.count*N,G=1;Q>n.maxTextureSize&&(G=Math.ceil(Q/n.maxTextureSize),Q=n.maxTextureSize);const z=new Float32Array(Q*G*4*g),V=new Cx(z,Q,G,g);V.type=Sa,V.needsUpdate=!0;const D=N*4;for(let B=0;B<g;B++){const ut=x[B],ot=P[B],vt=O[B],pt=Q*G*4*B;for(let k=0;k<ut.count;k++){const at=k*D;b===!0&&(u.fromBufferAttribute(ut,k),z[pt+at+0]=u.x,z[pt+at+1]=u.y,z[pt+at+2]=u.z,z[pt+at+3]=0),R===!0&&(u.fromBufferAttribute(ot,k),z[pt+at+4]=u.x,z[pt+at+5]=u.y,z[pt+at+6]=u.z,z[pt+at+7]=0),y===!0&&(u.fromBufferAttribute(vt,k),z[pt+at+8]=u.x,z[pt+at+9]=u.y,z[pt+at+10]=u.z,z[pt+at+11]=vt.itemSize===4?u.w:1)}}S={count:g,texture:V,size:new Ne(Q,G)},s.set(d,S),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,a);else{let b=0;for(let y=0;y<_.length;y++)b+=_[y];const R=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",_)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,a),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:f}}function vA(o,n,a,s){let u=new WeakMap;function f(m){const _=s.render.frame,v=m.geometry,g=n.get(m,v);if(u.get(g)!==_&&(n.update(g),u.set(g,_)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),u.get(m)!==_&&(a.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&a.update(m.instanceColor,o.ARRAY_BUFFER),u.set(m,_))),m.isSkinnedMesh){const S=m.skeleton;u.get(S)!==_&&(S.update(),u.set(S,_))}return g}function h(){u=new WeakMap}function d(m){const _=m.target;_.removeEventListener("dispose",d),a.remove(_.instanceMatrix),_.instanceColor!==null&&a.remove(_.instanceColor)}return{update:f,dispose:h}}const Vx=new Zn,kv=new Fx(1,1),Xx=new Cx,kx=new qE,qx=new Px,qv=[],Yv=[],Wv=new Float32Array(16),jv=new Float32Array(9),Zv=new Float32Array(4);function oo(o,n,a){const s=o[0];if(s<=0||s>0)return o;const u=n*a;let f=qv[u];if(f===void 0&&(f=new Float32Array(u),qv[u]=f),n!==0){s.toArray(f,0);for(let h=1,d=0;h!==n;++h)d+=a,o[h].toArray(f,d)}return f}function pn(o,n){if(o.length!==n.length)return!1;for(let a=0,s=o.length;a<s;a++)if(o[a]!==n[a])return!1;return!0}function mn(o,n){for(let a=0,s=n.length;a<s;a++)o[a]=n[a]}function Ac(o,n){let a=Yv[n];a===void 0&&(a=new Int32Array(n),Yv[n]=a);for(let s=0;s!==n;++s)a[s]=o.allocateTextureUnit();return a}function xA(o,n){const a=this.cache;a[0]!==n&&(o.uniform1f(this.addr,n),a[0]=n)}function SA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2f(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(pn(a,n))return;o.uniform2fv(this.addr,n),mn(a,n)}}function yA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3f(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else if(n.r!==void 0)(a[0]!==n.r||a[1]!==n.g||a[2]!==n.b)&&(o.uniform3f(this.addr,n.r,n.g,n.b),a[0]=n.r,a[1]=n.g,a[2]=n.b);else{if(pn(a,n))return;o.uniform3fv(this.addr,n),mn(a,n)}}function MA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4f(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(pn(a,n))return;o.uniform4fv(this.addr,n),mn(a,n)}}function EA(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(pn(a,n))return;o.uniformMatrix2fv(this.addr,!1,n),mn(a,n)}else{if(pn(a,s))return;Zv.set(s),o.uniformMatrix2fv(this.addr,!1,Zv),mn(a,s)}}function TA(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(pn(a,n))return;o.uniformMatrix3fv(this.addr,!1,n),mn(a,n)}else{if(pn(a,s))return;jv.set(s),o.uniformMatrix3fv(this.addr,!1,jv),mn(a,s)}}function bA(o,n){const a=this.cache,s=n.elements;if(s===void 0){if(pn(a,n))return;o.uniformMatrix4fv(this.addr,!1,n),mn(a,n)}else{if(pn(a,s))return;Wv.set(s),o.uniformMatrix4fv(this.addr,!1,Wv),mn(a,s)}}function AA(o,n){const a=this.cache;a[0]!==n&&(o.uniform1i(this.addr,n),a[0]=n)}function RA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2i(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(pn(a,n))return;o.uniform2iv(this.addr,n),mn(a,n)}}function CA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3i(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else{if(pn(a,n))return;o.uniform3iv(this.addr,n),mn(a,n)}}function wA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4i(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(pn(a,n))return;o.uniform4iv(this.addr,n),mn(a,n)}}function DA(o,n){const a=this.cache;a[0]!==n&&(o.uniform1ui(this.addr,n),a[0]=n)}function UA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(o.uniform2ui(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(pn(a,n))return;o.uniform2uiv(this.addr,n),mn(a,n)}}function NA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(o.uniform3ui(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else{if(pn(a,n))return;o.uniform3uiv(this.addr,n),mn(a,n)}}function LA(o,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(o.uniform4ui(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(pn(a,n))return;o.uniform4uiv(this.addr,n),mn(a,n)}}function OA(o,n,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u);let f;this.type===o.SAMPLER_2D_SHADOW?(kv.compareFunction=bx,f=kv):f=Vx,a.setTexture2D(n||f,u)}function zA(o,n,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTexture3D(n||kx,u)}function PA(o,n,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTextureCube(n||qx,u)}function IA(o,n,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTexture2DArray(n||Xx,u)}function BA(o){switch(o){case 5126:return xA;case 35664:return SA;case 35665:return yA;case 35666:return MA;case 35674:return EA;case 35675:return TA;case 35676:return bA;case 5124:case 35670:return AA;case 35667:case 35671:return RA;case 35668:case 35672:return CA;case 35669:case 35673:return wA;case 5125:return DA;case 36294:return UA;case 36295:return NA;case 36296:return LA;case 35678:case 36198:case 36298:case 36306:case 35682:return OA;case 35679:case 36299:case 36307:return zA;case 35680:case 36300:case 36308:case 36293:return PA;case 36289:case 36303:case 36311:case 36292:return IA}}function FA(o,n){o.uniform1fv(this.addr,n)}function HA(o,n){const a=oo(n,this.size,2);o.uniform2fv(this.addr,a)}function GA(o,n){const a=oo(n,this.size,3);o.uniform3fv(this.addr,a)}function VA(o,n){const a=oo(n,this.size,4);o.uniform4fv(this.addr,a)}function XA(o,n){const a=oo(n,this.size,4);o.uniformMatrix2fv(this.addr,!1,a)}function kA(o,n){const a=oo(n,this.size,9);o.uniformMatrix3fv(this.addr,!1,a)}function qA(o,n){const a=oo(n,this.size,16);o.uniformMatrix4fv(this.addr,!1,a)}function YA(o,n){o.uniform1iv(this.addr,n)}function WA(o,n){o.uniform2iv(this.addr,n)}function jA(o,n){o.uniform3iv(this.addr,n)}function ZA(o,n){o.uniform4iv(this.addr,n)}function KA(o,n){o.uniform1uiv(this.addr,n)}function QA(o,n){o.uniform2uiv(this.addr,n)}function JA(o,n){o.uniform3uiv(this.addr,n)}function $A(o,n){o.uniform4uiv(this.addr,n)}function tR(o,n,a){const s=this.cache,u=n.length,f=Ac(a,u);pn(s,f)||(o.uniform1iv(this.addr,f),mn(s,f));for(let h=0;h!==u;++h)a.setTexture2D(n[h]||Vx,f[h])}function eR(o,n,a){const s=this.cache,u=n.length,f=Ac(a,u);pn(s,f)||(o.uniform1iv(this.addr,f),mn(s,f));for(let h=0;h!==u;++h)a.setTexture3D(n[h]||kx,f[h])}function nR(o,n,a){const s=this.cache,u=n.length,f=Ac(a,u);pn(s,f)||(o.uniform1iv(this.addr,f),mn(s,f));for(let h=0;h!==u;++h)a.setTextureCube(n[h]||qx,f[h])}function iR(o,n,a){const s=this.cache,u=n.length,f=Ac(a,u);pn(s,f)||(o.uniform1iv(this.addr,f),mn(s,f));for(let h=0;h!==u;++h)a.setTexture2DArray(n[h]||Xx,f[h])}function aR(o){switch(o){case 5126:return FA;case 35664:return HA;case 35665:return GA;case 35666:return VA;case 35674:return XA;case 35675:return kA;case 35676:return qA;case 5124:case 35670:return YA;case 35667:case 35671:return WA;case 35668:case 35672:return jA;case 35669:case 35673:return ZA;case 5125:return KA;case 36294:return QA;case 36295:return JA;case 36296:return $A;case 35678:case 36198:case 36298:case 36306:case 35682:return tR;case 35679:case 36299:case 36307:return eR;case 35680:case 36300:case 36308:case 36293:return nR;case 36289:case 36303:case 36311:case 36292:return iR}}class rR{constructor(n,a,s){this.id=n,this.addr=s,this.cache=[],this.type=a.type,this.setValue=BA(a.type)}}class sR{constructor(n,a,s){this.id=n,this.addr=s,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=aR(a.type)}}class oR{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,a,s){const u=this.seq;for(let f=0,h=u.length;f!==h;++f){const d=u[f];d.setValue(n,a[d.id],s)}}}const Id=/(\w+)(\])?(\[|\.)?/g;function Kv(o,n){o.seq.push(n),o.map[n.id]=n}function lR(o,n,a){const s=o.name,u=s.length;for(Id.lastIndex=0;;){const f=Id.exec(s),h=Id.lastIndex;let d=f[1];const m=f[2]==="]",_=f[3];if(m&&(d=d|0),_===void 0||_==="["&&h+2===u){Kv(a,_===void 0?new rR(d,o,n):new sR(d,o,n));break}else{let g=a.map[d];g===void 0&&(g=new oR(d),Kv(a,g)),a=g}}}class xc{constructor(n,a){this.seq=[],this.map={};const s=n.getProgramParameter(a,n.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=n.getActiveUniform(a,u),h=n.getUniformLocation(a,f.name);lR(f,h,this)}}setValue(n,a,s,u){const f=this.map[a];f!==void 0&&f.setValue(n,s,u)}setOptional(n,a,s){const u=a[s];u!==void 0&&this.setValue(n,s,u)}static upload(n,a,s,u){for(let f=0,h=a.length;f!==h;++f){const d=a[f],m=s[d.id];m.needsUpdate!==!1&&d.setValue(n,m.value,u)}}static seqWithValue(n,a){const s=[];for(let u=0,f=n.length;u!==f;++u){const h=n[u];h.id in a&&s.push(h)}return s}}function Qv(o,n,a){const s=o.createShader(n);return o.shaderSource(s,a),o.compileShader(s),s}const uR=37297;let cR=0;function fR(o,n){const a=o.split(`
`),s=[],u=Math.max(n-6,0),f=Math.min(n+6,a.length);for(let h=u;h<f;h++){const d=h+1;s.push(`${d===n?">":" "} ${d}: ${a[h]}`)}return s.join(`
`)}const Jv=new ue;function hR(o){we._getMatrix(Jv,we.workingColorSpace,o);const n=`mat3( ${Jv.elements.map(a=>a.toFixed(4))} )`;switch(we.getTransfer(o)){case Sc:return[n,"LinearTransferOETF"];case Fe:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[n,"LinearTransferOETF"]}}function $v(o,n,a){const s=o.getShaderParameter(n,o.COMPILE_STATUS),u=o.getShaderInfoLog(n).trim();if(s&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const h=parseInt(f[1]);return a.toUpperCase()+`

`+u+`

`+fR(o.getShaderSource(n),h)}else return u}function dR(o,n){const a=hR(n);return[`vec4 ${o}( vec4 value ) {`,`	return ${a[1]}( vec4( value.rgb * ${a[0]}, value.a ) );`,"}"].join(`
`)}function pR(o,n){let a;switch(n){case vE:a="Linear";break;case xE:a="Reinhard";break;case SE:a="Cineon";break;case hx:a="ACESFilmic";break;case ME:a="AgX";break;case EE:a="Neutral";break;case yE:a="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),a="Linear"}return"vec3 "+o+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}const hc=new tt;function mR(){we.getLuminanceCoefficients(hc);const o=hc.x.toFixed(4),n=hc.y.toFixed(4),a=hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${n}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ul).join(`
`)}function _R(o){const n=[];for(const a in o){const s=o[a];s!==!1&&n.push("#define "+a+" "+s)}return n.join(`
`)}function vR(o,n){const a={},s=o.getProgramParameter(n,o.ACTIVE_ATTRIBUTES);for(let u=0;u<s;u++){const f=o.getActiveAttrib(n,u),h=f.name;let d=1;f.type===o.FLOAT_MAT2&&(d=2),f.type===o.FLOAT_MAT3&&(d=3),f.type===o.FLOAT_MAT4&&(d=4),a[h]={type:f.type,location:o.getAttribLocation(n,h),locationSize:d}}return a}function ul(o){return o!==""}function tx(o,n){const a=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function ex(o,n){return o.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const xR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rp(o){return o.replace(xR,yR)}const SR=new Map;function yR(o,n){let a=ce[n];if(a===void 0){const s=SR.get(n);if(s!==void 0)a=ce[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,s);else throw new Error("Can not resolve #include <"+n+">")}return Rp(a)}const MR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nx(o){return o.replace(MR,ER)}function ER(o,n,a,s){let u="";for(let f=parseInt(n);f<parseInt(a);f++)u+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return u}function ix(o){let n=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?n+=`
#define HIGH_PRECISION`:o.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}function TR(o){let n="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===cx?n="SHADOWMAP_TYPE_PCF":o.shadowMapType===QM?n="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===va&&(n="SHADOWMAP_TYPE_VSM"),n}function bR(o){let n="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case to:case eo:n="ENVMAP_TYPE_CUBE";break;case bc:n="ENVMAP_TYPE_CUBE_UV";break}return n}function AR(o){let n="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case eo:n="ENVMAP_MODE_REFRACTION";break}return n}function RR(o){let n="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case fx:n="ENVMAP_BLENDING_MULTIPLY";break;case gE:n="ENVMAP_BLENDING_MIX";break;case _E:n="ENVMAP_BLENDING_ADD";break}return n}function CR(o){const n=o.envMapCubeUVHeight;if(n===null)return null;const a=Math.log2(n)-2,s=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,a),112)),texelHeight:s,maxMip:a}}function wR(o,n,a,s){const u=o.getContext(),f=a.defines;let h=a.vertexShader,d=a.fragmentShader;const m=TR(a),_=bR(a),v=AR(a),g=RR(a),S=CR(a),M=gR(a),b=_R(f),R=u.createProgram();let y,x,P=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(y=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b].filter(ul).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b].filter(ul).join(`
`),x.length>0&&(x+=`
`)):(y=[ix(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+v:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+m:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",a.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ul).join(`
`),x=[ix(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+_:"",a.envMap?"#define "+v:"",a.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor||a.batchingColor?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+m:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",a.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==sr?"#define TONE_MAPPING":"",a.toneMapping!==sr?ce.tonemapping_pars_fragment:"",a.toneMapping!==sr?pR("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,dR("linearToOutputTexel",a.outputColorSpace),mR(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(ul).join(`
`)),h=Rp(h),h=tx(h,a),h=ex(h,a),d=Rp(d),d=tx(d,a),d=ex(d,a),h=nx(h),d=nx(d),a.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",a.glslVersion===ov?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===ov?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const O=P+y+h,N=P+x+d,Q=Qv(u,u.VERTEX_SHADER,O),G=Qv(u,u.FRAGMENT_SHADER,N);u.attachShader(R,Q),u.attachShader(R,G),a.index0AttributeName!==void 0?u.bindAttribLocation(R,0,a.index0AttributeName):a.morphTargets===!0&&u.bindAttribLocation(R,0,"position"),u.linkProgram(R);function z(B){if(o.debug.checkShaderErrors){const ut=u.getProgramInfoLog(R).trim(),ot=u.getShaderInfoLog(Q).trim(),vt=u.getShaderInfoLog(G).trim();let pt=!0,k=!0;if(u.getProgramParameter(R,u.LINK_STATUS)===!1)if(pt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(u,R,Q,G);else{const at=$v(u,Q,"vertex"),Z=$v(u,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(R,u.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ut+`
`+at+`
`+Z)}else ut!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ut):(ot===""||vt==="")&&(k=!1);k&&(B.diagnostics={runnable:pt,programLog:ut,vertexShader:{log:ot,prefix:y},fragmentShader:{log:vt,prefix:x}})}u.deleteShader(Q),u.deleteShader(G),V=new xc(u,R),D=vR(u,R)}let V;this.getUniforms=function(){return V===void 0&&z(this),V};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let C=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=u.getProgramParameter(R,uR)),C},this.destroy=function(){s.releaseStatesOfProgram(this),u.deleteProgram(R),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=cR++,this.cacheKey=n,this.usedTimes=1,this.program=R,this.vertexShader=Q,this.fragmentShader=G,this}let DR=0;class UR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const a=n.vertexShader,s=n.fragmentShader,u=this._getShaderStage(a),f=this._getShaderStage(s),h=this._getShaderCacheForMaterial(n);return h.has(u)===!1&&(h.add(u),u.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(n){const a=this.materialCache.get(n);for(const s of a)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const a=this.materialCache;let s=a.get(n);return s===void 0&&(s=new Set,a.set(n,s)),s}_getShaderStage(n){const a=this.shaderCache;let s=a.get(n);return s===void 0&&(s=new NR(n),a.set(n,s)),s}}class NR{constructor(n){this.id=DR++,this.code=n,this.usedTimes=0}}function LR(o,n,a,s,u,f,h){const d=new wx,m=new UR,_=new Set,v=[],g=u.logarithmicDepthBuffer,S=u.vertexTextures;let M=u.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){return _.add(D),D===0?"uv":`uv${D}`}function y(D,C,B,ut,ot){const vt=ut.fog,pt=ot.geometry,k=D.isMeshStandardMaterial?ut.environment:null,at=(D.isMeshStandardMaterial?a:n).get(D.envMap||k),Z=at&&at.mapping===bc?at.image.height:null,ht=b[D.type];D.precision!==null&&(M=u.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const St=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,Gt=St!==void 0?St.length:0;let ee=0;pt.morphAttributes.position!==void 0&&(ee=1),pt.morphAttributes.normal!==void 0&&(ee=2),pt.morphAttributes.color!==void 0&&(ee=3);let Me,w,j,gt;if(ht){const Ee=qi[ht];Me=Ee.vertexShader,w=Ee.fragmentShader}else Me=D.vertexShader,w=D.fragmentShader,m.update(D),j=m.getVertexShaderID(D),gt=m.getFragmentShaderID(D);const ct=o.getRenderTarget(),At=o.state.buffers.depth.getReversed(),Nt=ot.isInstancedMesh===!0,Ft=ot.isBatchedMesh===!0,Tt=!!D.map,Ct=!!D.matcap,De=!!at,F=!!D.aoMap,cn=!!D.lightMap,ae=!!D.bumpMap,Kt=!!D.normalMap,wt=!!D.displacementMap,ve=!!D.emissiveMap,qt=!!D.metalnessMap,U=!!D.roughnessMap,T=D.anisotropy>0,et=D.clearcoat>0,_t=D.dispersion>0,yt=D.iridescence>0,mt=D.sheen>0,Yt=D.transmission>0,Ot=T&&!!D.anisotropyMap,It=et&&!!D.clearcoatMap,pe=et&&!!D.clearcoatNormalMap,Et=et&&!!D.clearcoatRoughnessMap,Xt=yt&&!!D.iridescenceMap,Qt=yt&&!!D.iridescenceThicknessMap,te=mt&&!!D.sheenColorMap,Vt=mt&&!!D.sheenRoughnessMap,he=!!D.specularMap,se=!!D.specularColorMap,Ie=!!D.specularIntensityMap,H=Yt&&!!D.transmissionMap,zt=Yt&&!!D.thicknessMap,lt=!!D.gradientMap,xt=!!D.alphaMap,Pt=D.alphaTest>0,Bt=!!D.alphaHash,re=!!D.extensions;let Ke=sr;D.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Ke=o.toneMapping);const gn={shaderID:ht,shaderType:D.type,shaderName:D.name,vertexShader:Me,fragmentShader:w,defines:D.defines,customVertexShaderID:j,customFragmentShaderID:gt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Ft,batchingColor:Ft&&ot._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&ot.instanceColor!==null,instancingMorph:Nt&&ot.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:ct===null?o.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:ao,alphaToCoverage:!!D.alphaToCoverage,map:Tt,matcap:Ct,envMap:De,envMapMode:De&&at.mapping,envMapCubeUVHeight:Z,aoMap:F,lightMap:cn,bumpMap:ae,normalMap:Kt,displacementMap:S&&wt,emissiveMap:ve,normalMapObjectSpace:Kt&&D.normalMapType===RE,normalMapTangentSpace:Kt&&D.normalMapType===Tx,metalnessMap:qt,roughnessMap:U,anisotropy:T,anisotropyMap:Ot,clearcoat:et,clearcoatMap:It,clearcoatNormalMap:pe,clearcoatRoughnessMap:Et,dispersion:_t,iridescence:yt,iridescenceMap:Xt,iridescenceThicknessMap:Qt,sheen:mt,sheenColorMap:te,sheenRoughnessMap:Vt,specularMap:he,specularColorMap:se,specularIntensityMap:Ie,transmission:Yt,transmissionMap:H,thicknessMap:zt,gradientMap:lt,opaque:D.transparent===!1&&D.blending===Ks&&D.alphaToCoverage===!1,alphaMap:xt,alphaTest:Pt,alphaHash:Bt,combine:D.combine,mapUv:Tt&&R(D.map.channel),aoMapUv:F&&R(D.aoMap.channel),lightMapUv:cn&&R(D.lightMap.channel),bumpMapUv:ae&&R(D.bumpMap.channel),normalMapUv:Kt&&R(D.normalMap.channel),displacementMapUv:wt&&R(D.displacementMap.channel),emissiveMapUv:ve&&R(D.emissiveMap.channel),metalnessMapUv:qt&&R(D.metalnessMap.channel),roughnessMapUv:U&&R(D.roughnessMap.channel),anisotropyMapUv:Ot&&R(D.anisotropyMap.channel),clearcoatMapUv:It&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:pe&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Xt&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:Qt&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:te&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&R(D.sheenRoughnessMap.channel),specularMapUv:he&&R(D.specularMap.channel),specularColorMapUv:se&&R(D.specularColorMap.channel),specularIntensityMapUv:Ie&&R(D.specularIntensityMap.channel),transmissionMapUv:H&&R(D.transmissionMap.channel),thicknessMapUv:zt&&R(D.thicknessMap.channel),alphaMapUv:xt&&R(D.alphaMap.channel),vertexTangents:!!pt.attributes.tangent&&(Kt||T),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!pt.attributes.uv&&(Tt||xt),fog:!!vt,useFog:D.fog===!0,fogExp2:!!vt&&vt.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:At,skinning:ot.isSkinnedMesh===!0,morphTargets:pt.morphAttributes.position!==void 0,morphNormals:pt.morphAttributes.normal!==void 0,morphColors:pt.morphAttributes.color!==void 0,morphTargetsCount:Gt,morphTextureStride:ee,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&B.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ke,decodeVideoTexture:Tt&&D.map.isVideoTexture===!0&&we.getTransfer(D.map.colorSpace)===Fe,decodeVideoTextureEmissive:ve&&D.emissiveMap.isVideoTexture===!0&&we.getTransfer(D.emissiveMap.colorSpace)===Fe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===xa,flipSided:D.side===jn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:re&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&D.extensions.multiDraw===!0||Ft)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return gn.vertexUv1s=_.has(1),gn.vertexUv2s=_.has(2),gn.vertexUv3s=_.has(3),_.clear(),gn}function x(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const B in D.defines)C.push(B),C.push(D.defines[B]);return D.isRawShaderMaterial===!1&&(P(C,D),O(C,D),C.push(o.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function P(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function O(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function N(D){const C=b[D.type];let B;if(C){const ut=qi[C];B=iT.clone(ut.uniforms)}else B=D.uniforms;return B}function Q(D,C){let B;for(let ut=0,ot=v.length;ut<ot;ut++){const vt=v[ut];if(vt.cacheKey===C){B=vt,++B.usedTimes;break}}return B===void 0&&(B=new wR(o,C,D,f),v.push(B)),B}function G(D){if(--D.usedTimes===0){const C=v.indexOf(D);v[C]=v[v.length-1],v.pop(),D.destroy()}}function z(D){m.remove(D)}function V(){m.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:N,acquireProgram:Q,releaseProgram:G,releaseShaderCache:z,programs:v,dispose:V}}function OR(){let o=new WeakMap;function n(h){return o.has(h)}function a(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function u(h,d,m){o.get(h)[d]=m}function f(){o=new WeakMap}return{has:n,get:a,remove:s,update:u,dispose:f}}function zR(o,n){return o.groupOrder!==n.groupOrder?o.groupOrder-n.groupOrder:o.renderOrder!==n.renderOrder?o.renderOrder-n.renderOrder:o.material.id!==n.material.id?o.material.id-n.material.id:o.z!==n.z?o.z-n.z:o.id-n.id}function ax(o,n){return o.groupOrder!==n.groupOrder?o.groupOrder-n.groupOrder:o.renderOrder!==n.renderOrder?o.renderOrder-n.renderOrder:o.z!==n.z?n.z-o.z:o.id-n.id}function rx(){const o=[];let n=0;const a=[],s=[],u=[];function f(){n=0,a.length=0,s.length=0,u.length=0}function h(g,S,M,b,R,y){let x=o[n];return x===void 0?(x={id:g.id,object:g,geometry:S,material:M,groupOrder:b,renderOrder:g.renderOrder,z:R,group:y},o[n]=x):(x.id=g.id,x.object=g,x.geometry=S,x.material=M,x.groupOrder=b,x.renderOrder=g.renderOrder,x.z=R,x.group=y),n++,x}function d(g,S,M,b,R,y){const x=h(g,S,M,b,R,y);M.transmission>0?s.push(x):M.transparent===!0?u.push(x):a.push(x)}function m(g,S,M,b,R,y){const x=h(g,S,M,b,R,y);M.transmission>0?s.unshift(x):M.transparent===!0?u.unshift(x):a.unshift(x)}function _(g,S){a.length>1&&a.sort(g||zR),s.length>1&&s.sort(S||ax),u.length>1&&u.sort(S||ax)}function v(){for(let g=n,S=o.length;g<S;g++){const M=o[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:a,transmissive:s,transparent:u,init:f,push:d,unshift:m,finish:v,sort:_}}function PR(){let o=new WeakMap;function n(s,u){const f=o.get(s);let h;return f===void 0?(h=new rx,o.set(s,[h])):u>=f.length?(h=new rx,f.push(h)):h=f[u],h}function a(){o=new WeakMap}return{get:n,dispose:a}}function IR(){const o={};return{get:function(n){if(o[n.id]!==void 0)return o[n.id];let a;switch(n.type){case"DirectionalLight":a={direction:new tt,color:new de};break;case"SpotLight":a={position:new tt,direction:new tt,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new tt,color:new de,distance:0,decay:0};break;case"HemisphereLight":a={direction:new tt,skyColor:new de,groundColor:new de};break;case"RectAreaLight":a={color:new de,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return o[n.id]=a,a}}}function BR(){const o={};return{get:function(n){if(o[n.id]!==void 0)return o[n.id];let a;switch(n.type){case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[n.id]=a,a}}}let FR=0;function HR(o,n){return(n.castShadow?2:0)-(o.castShadow?2:0)+(n.map?1:0)-(o.map?1:0)}function GR(o){const n=new IR,a=BR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let _=0;_<9;_++)s.probe.push(new tt);const u=new tt,f=new Ze,h=new Ze;function d(_){let v=0,g=0,S=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let M=0,b=0,R=0,y=0,x=0,P=0,O=0,N=0,Q=0,G=0,z=0;_.sort(HR);for(let D=0,C=_.length;D<C;D++){const B=_[D],ut=B.color,ot=B.intensity,vt=B.distance,pt=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)v+=ut.r*ot,g+=ut.g*ot,S+=ut.b*ot;else if(B.isLightProbe){for(let k=0;k<9;k++)s.probe[k].addScaledVector(B.sh.coefficients[k],ot);z++}else if(B.isDirectionalLight){const k=n.get(B);if(k.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const at=B.shadow,Z=a.get(B);Z.shadowIntensity=at.intensity,Z.shadowBias=at.bias,Z.shadowNormalBias=at.normalBias,Z.shadowRadius=at.radius,Z.shadowMapSize=at.mapSize,s.directionalShadow[M]=Z,s.directionalShadowMap[M]=pt,s.directionalShadowMatrix[M]=B.shadow.matrix,P++}s.directional[M]=k,M++}else if(B.isSpotLight){const k=n.get(B);k.position.setFromMatrixPosition(B.matrixWorld),k.color.copy(ut).multiplyScalar(ot),k.distance=vt,k.coneCos=Math.cos(B.angle),k.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),k.decay=B.decay,s.spot[R]=k;const at=B.shadow;if(B.map&&(s.spotLightMap[Q]=B.map,Q++,at.updateMatrices(B),B.castShadow&&G++),s.spotLightMatrix[R]=at.matrix,B.castShadow){const Z=a.get(B);Z.shadowIntensity=at.intensity,Z.shadowBias=at.bias,Z.shadowNormalBias=at.normalBias,Z.shadowRadius=at.radius,Z.shadowMapSize=at.mapSize,s.spotShadow[R]=Z,s.spotShadowMap[R]=pt,N++}R++}else if(B.isRectAreaLight){const k=n.get(B);k.color.copy(ut).multiplyScalar(ot),k.halfWidth.set(B.width*.5,0,0),k.halfHeight.set(0,B.height*.5,0),s.rectArea[y]=k,y++}else if(B.isPointLight){const k=n.get(B);if(k.color.copy(B.color).multiplyScalar(B.intensity),k.distance=B.distance,k.decay=B.decay,B.castShadow){const at=B.shadow,Z=a.get(B);Z.shadowIntensity=at.intensity,Z.shadowBias=at.bias,Z.shadowNormalBias=at.normalBias,Z.shadowRadius=at.radius,Z.shadowMapSize=at.mapSize,Z.shadowCameraNear=at.camera.near,Z.shadowCameraFar=at.camera.far,s.pointShadow[b]=Z,s.pointShadowMap[b]=pt,s.pointShadowMatrix[b]=B.shadow.matrix,O++}s.point[b]=k,b++}else if(B.isHemisphereLight){const k=n.get(B);k.skyColor.copy(B.color).multiplyScalar(ot),k.groundColor.copy(B.groundColor).multiplyScalar(ot),s.hemi[x]=k,x++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=S;const V=s.hash;(V.directionalLength!==M||V.pointLength!==b||V.spotLength!==R||V.rectAreaLength!==y||V.hemiLength!==x||V.numDirectionalShadows!==P||V.numPointShadows!==O||V.numSpotShadows!==N||V.numSpotMaps!==Q||V.numLightProbes!==z)&&(s.directional.length=M,s.spot.length=R,s.rectArea.length=y,s.point.length=b,s.hemi.length=x,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=N+Q-G,s.spotLightMap.length=Q,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=z,V.directionalLength=M,V.pointLength=b,V.spotLength=R,V.rectAreaLength=y,V.hemiLength=x,V.numDirectionalShadows=P,V.numPointShadows=O,V.numSpotShadows=N,V.numSpotMaps=Q,V.numLightProbes=z,s.version=FR++)}function m(_,v){let g=0,S=0,M=0,b=0,R=0;const y=v.matrixWorldInverse;for(let x=0,P=_.length;x<P;x++){const O=_[x];if(O.isDirectionalLight){const N=s.directional[g];N.direction.setFromMatrixPosition(O.matrixWorld),u.setFromMatrixPosition(O.target.matrixWorld),N.direction.sub(u),N.direction.transformDirection(y),g++}else if(O.isSpotLight){const N=s.spot[M];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(y),N.direction.setFromMatrixPosition(O.matrixWorld),u.setFromMatrixPosition(O.target.matrixWorld),N.direction.sub(u),N.direction.transformDirection(y),M++}else if(O.isRectAreaLight){const N=s.rectArea[b];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(y),h.identity(),f.copy(O.matrixWorld),f.premultiply(y),h.extractRotation(f),N.halfWidth.set(O.width*.5,0,0),N.halfHeight.set(0,O.height*.5,0),N.halfWidth.applyMatrix4(h),N.halfHeight.applyMatrix4(h),b++}else if(O.isPointLight){const N=s.point[S];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(y),S++}else if(O.isHemisphereLight){const N=s.hemi[R];N.direction.setFromMatrixPosition(O.matrixWorld),N.direction.transformDirection(y),R++}}}return{setup:d,setupView:m,state:s}}function sx(o){const n=new GR(o),a=[],s=[];function u(v){_.camera=v,a.length=0,s.length=0}function f(v){a.push(v)}function h(v){s.push(v)}function d(){n.setup(a)}function m(v){n.setupView(a,v)}const _={lightsArray:a,shadowsArray:s,camera:null,lights:n,transmissionRenderTarget:{}};return{init:u,state:_,setupLights:d,setupLightsView:m,pushLight:f,pushShadow:h}}function VR(o){let n=new WeakMap;function a(u,f=0){const h=n.get(u);let d;return h===void 0?(d=new sx(o),n.set(u,[d])):f>=h.length?(d=new sx(o),h.push(d)):d=h[f],d}function s(){n=new WeakMap}return{get:a,dispose:s}}const XR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qR(o,n,a){let s=new Bp;const u=new Ne,f=new Ne,h=new He,d=new pT({depthPacking:AE}),m=new mT,_={},v=a.maxTextureSize,g={[or]:jn,[jn]:or,[xa]:xa},S=new lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:XR,fragmentShader:kR}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const b=new Ni;b.setAttribute("position",new Wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Di(b,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cx;let x=this.type;this.render=function(G,z,V){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||G.length===0)return;const D=o.getRenderTarget(),C=o.getActiveCubeFace(),B=o.getActiveMipmapLevel(),ut=o.state;ut.setBlending(rr),ut.buffers.color.setClear(1,1,1,1),ut.buffers.depth.setTest(!0),ut.setScissorTest(!1);const ot=x!==va&&this.type===va,vt=x===va&&this.type!==va;for(let pt=0,k=G.length;pt<k;pt++){const at=G[pt],Z=at.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;u.copy(Z.mapSize);const ht=Z.getFrameExtents();if(u.multiply(ht),f.copy(Z.mapSize),(u.x>v||u.y>v)&&(u.x>v&&(f.x=Math.floor(v/ht.x),u.x=f.x*ht.x,Z.mapSize.x=f.x),u.y>v&&(f.y=Math.floor(v/ht.y),u.y=f.y*ht.y,Z.mapSize.y=f.y)),Z.map===null||ot===!0||vt===!0){const Gt=this.type!==va?{minFilter:Ui,magFilter:Ui}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Yr(u.x,u.y,Gt),Z.map.texture.name=at.name+".shadowMap",Z.camera.updateProjectionMatrix()}o.setRenderTarget(Z.map),o.clear();const St=Z.getViewportCount();for(let Gt=0;Gt<St;Gt++){const ee=Z.getViewport(Gt);h.set(f.x*ee.x,f.y*ee.y,f.x*ee.z,f.y*ee.w),ut.viewport(h),Z.updateMatrices(at,Gt),s=Z.getFrustum(),N(z,V,Z.camera,at,this.type)}Z.isPointLightShadow!==!0&&this.type===va&&P(Z,V),Z.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(D,C,B)};function P(G,z){const V=n.update(R);S.defines.VSM_SAMPLES!==G.blurSamples&&(S.defines.VSM_SAMPLES=G.blurSamples,M.defines.VSM_SAMPLES=G.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Yr(u.x,u.y)),S.uniforms.shadow_pass.value=G.map.texture,S.uniforms.resolution.value=G.mapSize,S.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(z,null,V,S,R,null),M.uniforms.shadow_pass.value=G.mapPass.texture,M.uniforms.resolution.value=G.mapSize,M.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(z,null,V,M,R,null)}function O(G,z,V,D){let C=null;const B=V.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(B!==void 0)C=B;else if(C=V.isPointLight===!0?m:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const ut=C.uuid,ot=z.uuid;let vt=_[ut];vt===void 0&&(vt={},_[ut]=vt);let pt=vt[ot];pt===void 0&&(pt=C.clone(),vt[ot]=pt,z.addEventListener("dispose",Q)),C=pt}if(C.visible=z.visible,C.wireframe=z.wireframe,D===va?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:g[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,V.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ut=o.properties.get(C);ut.light=V}return C}function N(G,z,V,D,C){if(G.visible===!1)return;if(G.layers.test(z.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&C===va)&&(!G.frustumCulled||s.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,G.matrixWorld);const ot=n.update(G),vt=G.material;if(Array.isArray(vt)){const pt=ot.groups;for(let k=0,at=pt.length;k<at;k++){const Z=pt[k],ht=vt[Z.materialIndex];if(ht&&ht.visible){const St=O(G,ht,D,C);G.onBeforeShadow(o,G,z,V,ot,St,Z),o.renderBufferDirect(V,null,ot,St,G,Z),G.onAfterShadow(o,G,z,V,ot,St,Z)}}}else if(vt.visible){const pt=O(G,vt,D,C);G.onBeforeShadow(o,G,z,V,ot,pt,null),o.renderBufferDirect(V,null,ot,pt,G,null),G.onAfterShadow(o,G,z,V,ot,pt,null)}}const ut=G.children;for(let ot=0,vt=ut.length;ot<vt;ot++)N(ut[ot],z,V,D,C)}function Q(G){G.target.removeEventListener("dispose",Q);for(const V in _){const D=_[V],C=G.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const YR={[Vd]:Xd,[kd]:Wd,[qd]:jd,[$s]:Yd,[Xd]:Vd,[Wd]:kd,[jd]:qd,[Yd]:$s};function WR(o,n){function a(){let H=!1;const zt=new He;let lt=null;const xt=new He(0,0,0,0);return{setMask:function(Pt){lt!==Pt&&!H&&(o.colorMask(Pt,Pt,Pt,Pt),lt=Pt)},setLocked:function(Pt){H=Pt},setClear:function(Pt,Bt,re,Ke,gn){gn===!0&&(Pt*=Ke,Bt*=Ke,re*=Ke),zt.set(Pt,Bt,re,Ke),xt.equals(zt)===!1&&(o.clearColor(Pt,Bt,re,Ke),xt.copy(zt))},reset:function(){H=!1,lt=null,xt.set(-1,0,0,0)}}}function s(){let H=!1,zt=!1,lt=null,xt=null,Pt=null;return{setReversed:function(Bt){if(zt!==Bt){const re=n.get("EXT_clip_control");zt?re.clipControlEXT(re.LOWER_LEFT_EXT,re.ZERO_TO_ONE_EXT):re.clipControlEXT(re.LOWER_LEFT_EXT,re.NEGATIVE_ONE_TO_ONE_EXT);const Ke=Pt;Pt=null,this.setClear(Ke)}zt=Bt},getReversed:function(){return zt},setTest:function(Bt){Bt?ct(o.DEPTH_TEST):At(o.DEPTH_TEST)},setMask:function(Bt){lt!==Bt&&!H&&(o.depthMask(Bt),lt=Bt)},setFunc:function(Bt){if(zt&&(Bt=YR[Bt]),xt!==Bt){switch(Bt){case Vd:o.depthFunc(o.NEVER);break;case Xd:o.depthFunc(o.ALWAYS);break;case kd:o.depthFunc(o.LESS);break;case $s:o.depthFunc(o.LEQUAL);break;case qd:o.depthFunc(o.EQUAL);break;case Yd:o.depthFunc(o.GEQUAL);break;case Wd:o.depthFunc(o.GREATER);break;case jd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}xt=Bt}},setLocked:function(Bt){H=Bt},setClear:function(Bt){Pt!==Bt&&(zt&&(Bt=1-Bt),o.clearDepth(Bt),Pt=Bt)},reset:function(){H=!1,lt=null,xt=null,Pt=null,zt=!1}}}function u(){let H=!1,zt=null,lt=null,xt=null,Pt=null,Bt=null,re=null,Ke=null,gn=null;return{setTest:function(Ee){H||(Ee?ct(o.STENCIL_TEST):At(o.STENCIL_TEST))},setMask:function(Ee){zt!==Ee&&!H&&(o.stencilMask(Ee),zt=Ee)},setFunc:function(Ee,We,_n){(lt!==Ee||xt!==We||Pt!==_n)&&(o.stencilFunc(Ee,We,_n),lt=Ee,xt=We,Pt=_n)},setOp:function(Ee,We,_n){(Bt!==Ee||re!==We||Ke!==_n)&&(o.stencilOp(Ee,We,_n),Bt=Ee,re=We,Ke=_n)},setLocked:function(Ee){H=Ee},setClear:function(Ee){gn!==Ee&&(o.clearStencil(Ee),gn=Ee)},reset:function(){H=!1,zt=null,lt=null,xt=null,Pt=null,Bt=null,re=null,Ke=null,gn=null}}}const f=new a,h=new s,d=new u,m=new WeakMap,_=new WeakMap;let v={},g={},S=new WeakMap,M=[],b=null,R=!1,y=null,x=null,P=null,O=null,N=null,Q=null,G=null,z=new de(0,0,0),V=0,D=!1,C=null,B=null,ut=null,ot=null,vt=null;const pt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,at=0;const Z=o.getParameter(o.VERSION);Z.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(Z)[1]),k=at>=1):Z.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),k=at>=2);let ht=null,St={};const Gt=o.getParameter(o.SCISSOR_BOX),ee=o.getParameter(o.VIEWPORT),Me=new He().fromArray(Gt),w=new He().fromArray(ee);function j(H,zt,lt,xt){const Pt=new Uint8Array(4),Bt=o.createTexture();o.bindTexture(H,Bt),o.texParameteri(H,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(H,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let re=0;re<lt;re++)H===o.TEXTURE_3D||H===o.TEXTURE_2D_ARRAY?o.texImage3D(zt,0,o.RGBA,1,1,xt,0,o.RGBA,o.UNSIGNED_BYTE,Pt):o.texImage2D(zt+re,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Pt);return Bt}const gt={};gt[o.TEXTURE_2D]=j(o.TEXTURE_2D,o.TEXTURE_2D,1),gt[o.TEXTURE_CUBE_MAP]=j(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[o.TEXTURE_2D_ARRAY]=j(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),gt[o.TEXTURE_3D]=j(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ct(o.DEPTH_TEST),h.setFunc($s),ae(!1),Kt(ev),ct(o.CULL_FACE),F(rr);function ct(H){v[H]!==!0&&(o.enable(H),v[H]=!0)}function At(H){v[H]!==!1&&(o.disable(H),v[H]=!1)}function Nt(H,zt){return g[H]!==zt?(o.bindFramebuffer(H,zt),g[H]=zt,H===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=zt),H===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=zt),!0):!1}function Ft(H,zt){let lt=M,xt=!1;if(H){lt=S.get(zt),lt===void 0&&(lt=[],S.set(zt,lt));const Pt=H.textures;if(lt.length!==Pt.length||lt[0]!==o.COLOR_ATTACHMENT0){for(let Bt=0,re=Pt.length;Bt<re;Bt++)lt[Bt]=o.COLOR_ATTACHMENT0+Bt;lt.length=Pt.length,xt=!0}}else lt[0]!==o.BACK&&(lt[0]=o.BACK,xt=!0);xt&&o.drawBuffers(lt)}function Tt(H){return b!==H?(o.useProgram(H),b=H,!0):!1}const Ct={[Gr]:o.FUNC_ADD,[$M]:o.FUNC_SUBTRACT,[tE]:o.FUNC_REVERSE_SUBTRACT};Ct[eE]=o.MIN,Ct[nE]=o.MAX;const De={[iE]:o.ZERO,[aE]:o.ONE,[rE]:o.SRC_COLOR,[Hd]:o.SRC_ALPHA,[fE]:o.SRC_ALPHA_SATURATE,[uE]:o.DST_COLOR,[oE]:o.DST_ALPHA,[sE]:o.ONE_MINUS_SRC_COLOR,[Gd]:o.ONE_MINUS_SRC_ALPHA,[cE]:o.ONE_MINUS_DST_COLOR,[lE]:o.ONE_MINUS_DST_ALPHA,[hE]:o.CONSTANT_COLOR,[dE]:o.ONE_MINUS_CONSTANT_COLOR,[pE]:o.CONSTANT_ALPHA,[mE]:o.ONE_MINUS_CONSTANT_ALPHA};function F(H,zt,lt,xt,Pt,Bt,re,Ke,gn,Ee){if(H===rr){R===!0&&(At(o.BLEND),R=!1);return}if(R===!1&&(ct(o.BLEND),R=!0),H!==JM){if(H!==y||Ee!==D){if((x!==Gr||N!==Gr)&&(o.blendEquation(o.FUNC_ADD),x=Gr,N=Gr),Ee)switch(H){case Ks:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case nv:o.blendFunc(o.ONE,o.ONE);break;case iv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case av:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Ks:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case nv:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case iv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case av:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}P=null,O=null,Q=null,G=null,z.set(0,0,0),V=0,y=H,D=Ee}return}Pt=Pt||zt,Bt=Bt||lt,re=re||xt,(zt!==x||Pt!==N)&&(o.blendEquationSeparate(Ct[zt],Ct[Pt]),x=zt,N=Pt),(lt!==P||xt!==O||Bt!==Q||re!==G)&&(o.blendFuncSeparate(De[lt],De[xt],De[Bt],De[re]),P=lt,O=xt,Q=Bt,G=re),(Ke.equals(z)===!1||gn!==V)&&(o.blendColor(Ke.r,Ke.g,Ke.b,gn),z.copy(Ke),V=gn),y=H,D=!1}function cn(H,zt){H.side===xa?At(o.CULL_FACE):ct(o.CULL_FACE);let lt=H.side===jn;zt&&(lt=!lt),ae(lt),H.blending===Ks&&H.transparent===!1?F(rr):F(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),h.setFunc(H.depthFunc),h.setTest(H.depthTest),h.setMask(H.depthWrite),f.setMask(H.colorWrite);const xt=H.stencilWrite;d.setTest(xt),xt&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ve(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ct(o.SAMPLE_ALPHA_TO_COVERAGE):At(o.SAMPLE_ALPHA_TO_COVERAGE)}function ae(H){C!==H&&(H?o.frontFace(o.CW):o.frontFace(o.CCW),C=H)}function Kt(H){H!==ZM?(ct(o.CULL_FACE),H!==B&&(H===ev?o.cullFace(o.BACK):H===KM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):At(o.CULL_FACE),B=H}function wt(H){H!==ut&&(k&&o.lineWidth(H),ut=H)}function ve(H,zt,lt){H?(ct(o.POLYGON_OFFSET_FILL),(ot!==zt||vt!==lt)&&(o.polygonOffset(zt,lt),ot=zt,vt=lt)):At(o.POLYGON_OFFSET_FILL)}function qt(H){H?ct(o.SCISSOR_TEST):At(o.SCISSOR_TEST)}function U(H){H===void 0&&(H=o.TEXTURE0+pt-1),ht!==H&&(o.activeTexture(H),ht=H)}function T(H,zt,lt){lt===void 0&&(ht===null?lt=o.TEXTURE0+pt-1:lt=ht);let xt=St[lt];xt===void 0&&(xt={type:void 0,texture:void 0},St[lt]=xt),(xt.type!==H||xt.texture!==zt)&&(ht!==lt&&(o.activeTexture(lt),ht=lt),o.bindTexture(H,zt||gt[H]),xt.type=H,xt.texture=zt)}function et(){const H=St[ht];H!==void 0&&H.type!==void 0&&(o.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function _t(){try{o.compressedTexImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function yt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function mt(){try{o.texSubImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Yt(){try{o.texSubImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ot(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function It(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pe(){try{o.texStorage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Et(){try{o.texStorage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Xt(){try{o.texImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Qt(){try{o.texImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function te(H){Me.equals(H)===!1&&(o.scissor(H.x,H.y,H.z,H.w),Me.copy(H))}function Vt(H){w.equals(H)===!1&&(o.viewport(H.x,H.y,H.z,H.w),w.copy(H))}function he(H,zt){let lt=_.get(zt);lt===void 0&&(lt=new WeakMap,_.set(zt,lt));let xt=lt.get(H);xt===void 0&&(xt=o.getUniformBlockIndex(zt,H.name),lt.set(H,xt))}function se(H,zt){const xt=_.get(zt).get(H);m.get(zt)!==xt&&(o.uniformBlockBinding(zt,xt,H.__bindingPointIndex),m.set(zt,xt))}function Ie(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},ht=null,St={},g={},S=new WeakMap,M=[],b=null,R=!1,y=null,x=null,P=null,O=null,N=null,Q=null,G=null,z=new de(0,0,0),V=0,D=!1,C=null,B=null,ut=null,ot=null,vt=null,Me.set(0,0,o.canvas.width,o.canvas.height),w.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),d.reset()}return{buffers:{color:f,depth:h,stencil:d},enable:ct,disable:At,bindFramebuffer:Nt,drawBuffers:Ft,useProgram:Tt,setBlending:F,setMaterial:cn,setFlipSided:ae,setCullFace:Kt,setLineWidth:wt,setPolygonOffset:ve,setScissorTest:qt,activeTexture:U,bindTexture:T,unbindTexture:et,compressedTexImage2D:_t,compressedTexImage3D:yt,texImage2D:Xt,texImage3D:Qt,updateUBOMapping:he,uniformBlockBinding:se,texStorage2D:pe,texStorage3D:Et,texSubImage2D:mt,texSubImage3D:Yt,compressedTexSubImage2D:Ot,compressedTexSubImage3D:It,scissor:te,viewport:Vt,reset:Ie}}function jR(o,n,a,s,u,f,h){const d=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new Ne,v=new WeakMap;let g;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,T){return M?new OffscreenCanvas(U,T):Mc("canvas")}function R(U,T,et){let _t=1;const yt=qt(U);if((yt.width>et||yt.height>et)&&(_t=et/Math.max(yt.width,yt.height)),_t<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const mt=Math.floor(_t*yt.width),Yt=Math.floor(_t*yt.height);g===void 0&&(g=b(mt,Yt));const Ot=T?b(mt,Yt):g;return Ot.width=mt,Ot.height=Yt,Ot.getContext("2d").drawImage(U,0,0,mt,Yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+mt+"x"+Yt+")."),Ot}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),U;return U}function y(U){return U.generateMipmaps}function x(U){o.generateMipmap(U)}function P(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(U,T,et,_t,yt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let mt=T;if(T===o.RED&&(et===o.FLOAT&&(mt=o.R32F),et===o.HALF_FLOAT&&(mt=o.R16F),et===o.UNSIGNED_BYTE&&(mt=o.R8)),T===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(mt=o.R8UI),et===o.UNSIGNED_SHORT&&(mt=o.R16UI),et===o.UNSIGNED_INT&&(mt=o.R32UI),et===o.BYTE&&(mt=o.R8I),et===o.SHORT&&(mt=o.R16I),et===o.INT&&(mt=o.R32I)),T===o.RG&&(et===o.FLOAT&&(mt=o.RG32F),et===o.HALF_FLOAT&&(mt=o.RG16F),et===o.UNSIGNED_BYTE&&(mt=o.RG8)),T===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(mt=o.RG8UI),et===o.UNSIGNED_SHORT&&(mt=o.RG16UI),et===o.UNSIGNED_INT&&(mt=o.RG32UI),et===o.BYTE&&(mt=o.RG8I),et===o.SHORT&&(mt=o.RG16I),et===o.INT&&(mt=o.RG32I)),T===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(mt=o.RGB8UI),et===o.UNSIGNED_SHORT&&(mt=o.RGB16UI),et===o.UNSIGNED_INT&&(mt=o.RGB32UI),et===o.BYTE&&(mt=o.RGB8I),et===o.SHORT&&(mt=o.RGB16I),et===o.INT&&(mt=o.RGB32I)),T===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(mt=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(mt=o.RGBA16UI),et===o.UNSIGNED_INT&&(mt=o.RGBA32UI),et===o.BYTE&&(mt=o.RGBA8I),et===o.SHORT&&(mt=o.RGBA16I),et===o.INT&&(mt=o.RGBA32I)),T===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(mt=o.RGB9_E5),T===o.RGBA){const Yt=yt?Sc:we.getTransfer(_t);et===o.FLOAT&&(mt=o.RGBA32F),et===o.HALF_FLOAT&&(mt=o.RGBA16F),et===o.UNSIGNED_BYTE&&(mt=Yt===Fe?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(mt=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(mt=o.RGB5_A1)}return(mt===o.R16F||mt===o.R32F||mt===o.RG16F||mt===o.RG32F||mt===o.RGBA16F||mt===o.RGBA32F)&&n.get("EXT_color_buffer_float"),mt}function N(U,T){let et;return U?T===null||T===qr||T===no?et=o.DEPTH24_STENCIL8:T===Sa?et=o.DEPTH32F_STENCIL8:T===cl&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===qr||T===no?et=o.DEPTH_COMPONENT24:T===Sa?et=o.DEPTH_COMPONENT32F:T===cl&&(et=o.DEPTH_COMPONENT16),et}function Q(U,T){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ui&&U.minFilter!==Yi?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function G(U){const T=U.target;T.removeEventListener("dispose",G),V(T),T.isVideoTexture&&v.delete(T)}function z(U){const T=U.target;T.removeEventListener("dispose",z),C(T)}function V(U){const T=s.get(U);if(T.__webglInit===void 0)return;const et=U.source,_t=S.get(et);if(_t){const yt=_t[T.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&D(U),Object.keys(_t).length===0&&S.delete(et)}s.remove(U)}function D(U){const T=s.get(U);o.deleteTexture(T.__webglTexture);const et=U.source,_t=S.get(et);delete _t[T.__cacheKey],h.memory.textures--}function C(U){const T=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(T.__webglFramebuffer[_t]))for(let yt=0;yt<T.__webglFramebuffer[_t].length;yt++)o.deleteFramebuffer(T.__webglFramebuffer[_t][yt]);else o.deleteFramebuffer(T.__webglFramebuffer[_t]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[_t])}else{if(Array.isArray(T.__webglFramebuffer))for(let _t=0;_t<T.__webglFramebuffer.length;_t++)o.deleteFramebuffer(T.__webglFramebuffer[_t]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let _t=0;_t<T.__webglColorRenderbuffer.length;_t++)T.__webglColorRenderbuffer[_t]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[_t]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const et=U.textures;for(let _t=0,yt=et.length;_t<yt;_t++){const mt=s.get(et[_t]);mt.__webglTexture&&(o.deleteTexture(mt.__webglTexture),h.memory.textures--),s.remove(et[_t])}s.remove(U)}let B=0;function ut(){B=0}function ot(){const U=B;return U>=u.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+u.maxTextures),B+=1,U}function vt(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function pt(U,T){const et=s.get(U);if(U.isVideoTexture&&wt(U),U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){const _t=U.image;if(_t===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{w(et,U,T);return}}a.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+T)}function k(U,T){const et=s.get(U);if(U.version>0&&et.__version!==U.version){w(et,U,T);return}a.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+T)}function at(U,T){const et=s.get(U);if(U.version>0&&et.__version!==U.version){w(et,U,T);return}a.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+T)}function Z(U,T){const et=s.get(U);if(U.version>0&&et.__version!==U.version){j(et,U,T);return}a.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+T)}const ht={[Qd]:o.REPEAT,[Xr]:o.CLAMP_TO_EDGE,[Jd]:o.MIRRORED_REPEAT},St={[Ui]:o.NEAREST,[TE]:o.NEAREST_MIPMAP_NEAREST,[Gu]:o.NEAREST_MIPMAP_LINEAR,[Yi]:o.LINEAR,[sd]:o.LINEAR_MIPMAP_NEAREST,[kr]:o.LINEAR_MIPMAP_LINEAR},Gt={[CE]:o.NEVER,[OE]:o.ALWAYS,[wE]:o.LESS,[bx]:o.LEQUAL,[DE]:o.EQUAL,[LE]:o.GEQUAL,[UE]:o.GREATER,[NE]:o.NOTEQUAL};function ee(U,T){if(T.type===Sa&&n.has("OES_texture_float_linear")===!1&&(T.magFilter===Yi||T.magFilter===sd||T.magFilter===Gu||T.magFilter===kr||T.minFilter===Yi||T.minFilter===sd||T.minFilter===Gu||T.minFilter===kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,ht[T.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,ht[T.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,ht[T.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,St[T.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,St[T.minFilter]),T.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,Gt[T.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ui||T.minFilter!==Gu&&T.minFilter!==kr||T.type===Sa&&n.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const et=n.get("EXT_texture_filter_anisotropic");o.texParameterf(U,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,u.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Me(U,T){let et=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",G));const _t=T.source;let yt=S.get(_t);yt===void 0&&(yt={},S.set(_t,yt));const mt=vt(T);if(mt!==U.__cacheKey){yt[mt]===void 0&&(yt[mt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),yt[mt].usedTimes++;const Yt=yt[U.__cacheKey];Yt!==void 0&&(yt[U.__cacheKey].usedTimes--,Yt.usedTimes===0&&D(T)),U.__cacheKey=mt,U.__webglTexture=yt[mt].texture}return et}function w(U,T,et){let _t=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(_t=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(_t=o.TEXTURE_3D);const yt=Me(U,T),mt=T.source;a.bindTexture(_t,U.__webglTexture,o.TEXTURE0+et);const Yt=s.get(mt);if(mt.version!==Yt.__version||yt===!0){a.activeTexture(o.TEXTURE0+et);const Ot=we.getPrimaries(we.workingColorSpace),It=T.colorSpace===ar?null:we.getPrimaries(T.colorSpace),pe=T.colorSpace===ar||Ot===It?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Et=R(T.image,!1,u.maxTextureSize);Et=ve(T,Et);const Xt=f.convert(T.format,T.colorSpace),Qt=f.convert(T.type);let te=O(T.internalFormat,Xt,Qt,T.colorSpace,T.isVideoTexture);ee(_t,T);let Vt;const he=T.mipmaps,se=T.isVideoTexture!==!0,Ie=Yt.__version===void 0||yt===!0,H=mt.dataReady,zt=Q(T,Et);if(T.isDepthTexture)te=N(T.format===io,T.type),Ie&&(se?a.texStorage2D(o.TEXTURE_2D,1,te,Et.width,Et.height):a.texImage2D(o.TEXTURE_2D,0,te,Et.width,Et.height,0,Xt,Qt,null));else if(T.isDataTexture)if(he.length>0){se&&Ie&&a.texStorage2D(o.TEXTURE_2D,zt,te,he[0].width,he[0].height);for(let lt=0,xt=he.length;lt<xt;lt++)Vt=he[lt],se?H&&a.texSubImage2D(o.TEXTURE_2D,lt,0,0,Vt.width,Vt.height,Xt,Qt,Vt.data):a.texImage2D(o.TEXTURE_2D,lt,te,Vt.width,Vt.height,0,Xt,Qt,Vt.data);T.generateMipmaps=!1}else se?(Ie&&a.texStorage2D(o.TEXTURE_2D,zt,te,Et.width,Et.height),H&&a.texSubImage2D(o.TEXTURE_2D,0,0,0,Et.width,Et.height,Xt,Qt,Et.data)):a.texImage2D(o.TEXTURE_2D,0,te,Et.width,Et.height,0,Xt,Qt,Et.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){se&&Ie&&a.texStorage3D(o.TEXTURE_2D_ARRAY,zt,te,he[0].width,he[0].height,Et.depth);for(let lt=0,xt=he.length;lt<xt;lt++)if(Vt=he[lt],T.format!==wi)if(Xt!==null)if(se){if(H)if(T.layerUpdates.size>0){const Pt=Pv(Vt.width,Vt.height,T.format,T.type);for(const Bt of T.layerUpdates){const re=Vt.data.subarray(Bt*Pt/Vt.data.BYTES_PER_ELEMENT,(Bt+1)*Pt/Vt.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,Bt,Vt.width,Vt.height,1,Xt,re)}T.clearLayerUpdates()}else a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Vt.width,Vt.height,Et.depth,Xt,Vt.data)}else a.compressedTexImage3D(o.TEXTURE_2D_ARRAY,lt,te,Vt.width,Vt.height,Et.depth,0,Vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?H&&a.texSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Vt.width,Vt.height,Et.depth,Xt,Qt,Vt.data):a.texImage3D(o.TEXTURE_2D_ARRAY,lt,te,Vt.width,Vt.height,Et.depth,0,Xt,Qt,Vt.data)}else{se&&Ie&&a.texStorage2D(o.TEXTURE_2D,zt,te,he[0].width,he[0].height);for(let lt=0,xt=he.length;lt<xt;lt++)Vt=he[lt],T.format!==wi?Xt!==null?se?H&&a.compressedTexSubImage2D(o.TEXTURE_2D,lt,0,0,Vt.width,Vt.height,Xt,Vt.data):a.compressedTexImage2D(o.TEXTURE_2D,lt,te,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?H&&a.texSubImage2D(o.TEXTURE_2D,lt,0,0,Vt.width,Vt.height,Xt,Qt,Vt.data):a.texImage2D(o.TEXTURE_2D,lt,te,Vt.width,Vt.height,0,Xt,Qt,Vt.data)}else if(T.isDataArrayTexture)if(se){if(Ie&&a.texStorage3D(o.TEXTURE_2D_ARRAY,zt,te,Et.width,Et.height,Et.depth),H)if(T.layerUpdates.size>0){const lt=Pv(Et.width,Et.height,T.format,T.type);for(const xt of T.layerUpdates){const Pt=Et.data.subarray(xt*lt/Et.data.BYTES_PER_ELEMENT,(xt+1)*lt/Et.data.BYTES_PER_ELEMENT);a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,xt,Et.width,Et.height,1,Xt,Qt,Pt)}T.clearLayerUpdates()}else a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Xt,Qt,Et.data)}else a.texImage3D(o.TEXTURE_2D_ARRAY,0,te,Et.width,Et.height,Et.depth,0,Xt,Qt,Et.data);else if(T.isData3DTexture)se?(Ie&&a.texStorage3D(o.TEXTURE_3D,zt,te,Et.width,Et.height,Et.depth),H&&a.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Xt,Qt,Et.data)):a.texImage3D(o.TEXTURE_3D,0,te,Et.width,Et.height,Et.depth,0,Xt,Qt,Et.data);else if(T.isFramebufferTexture){if(Ie)if(se)a.texStorage2D(o.TEXTURE_2D,zt,te,Et.width,Et.height);else{let lt=Et.width,xt=Et.height;for(let Pt=0;Pt<zt;Pt++)a.texImage2D(o.TEXTURE_2D,Pt,te,lt,xt,0,Xt,Qt,null),lt>>=1,xt>>=1}}else if(he.length>0){if(se&&Ie){const lt=qt(he[0]);a.texStorage2D(o.TEXTURE_2D,zt,te,lt.width,lt.height)}for(let lt=0,xt=he.length;lt<xt;lt++)Vt=he[lt],se?H&&a.texSubImage2D(o.TEXTURE_2D,lt,0,0,Xt,Qt,Vt):a.texImage2D(o.TEXTURE_2D,lt,te,Xt,Qt,Vt);T.generateMipmaps=!1}else if(se){if(Ie){const lt=qt(Et);a.texStorage2D(o.TEXTURE_2D,zt,te,lt.width,lt.height)}H&&a.texSubImage2D(o.TEXTURE_2D,0,0,0,Xt,Qt,Et)}else a.texImage2D(o.TEXTURE_2D,0,te,Xt,Qt,Et);y(T)&&x(_t),Yt.__version=mt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function j(U,T,et){if(T.image.length!==6)return;const _t=Me(U,T),yt=T.source;a.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+et);const mt=s.get(yt);if(yt.version!==mt.__version||_t===!0){a.activeTexture(o.TEXTURE0+et);const Yt=we.getPrimaries(we.workingColorSpace),Ot=T.colorSpace===ar?null:we.getPrimaries(T.colorSpace),It=T.colorSpace===ar||Yt===Ot?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const pe=T.isCompressedTexture||T.image[0].isCompressedTexture,Et=T.image[0]&&T.image[0].isDataTexture,Xt=[];for(let xt=0;xt<6;xt++)!pe&&!Et?Xt[xt]=R(T.image[xt],!0,u.maxCubemapSize):Xt[xt]=Et?T.image[xt].image:T.image[xt],Xt[xt]=ve(T,Xt[xt]);const Qt=Xt[0],te=f.convert(T.format,T.colorSpace),Vt=f.convert(T.type),he=O(T.internalFormat,te,Vt,T.colorSpace),se=T.isVideoTexture!==!0,Ie=mt.__version===void 0||_t===!0,H=yt.dataReady;let zt=Q(T,Qt);ee(o.TEXTURE_CUBE_MAP,T);let lt;if(pe){se&&Ie&&a.texStorage2D(o.TEXTURE_CUBE_MAP,zt,he,Qt.width,Qt.height);for(let xt=0;xt<6;xt++){lt=Xt[xt].mipmaps;for(let Pt=0;Pt<lt.length;Pt++){const Bt=lt[Pt];T.format!==wi?te!==null?se?H&&a.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt,0,0,Bt.width,Bt.height,te,Bt.data):a.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt,he,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?H&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt,0,0,Bt.width,Bt.height,te,Vt,Bt.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt,he,Bt.width,Bt.height,0,te,Vt,Bt.data)}}}else{if(lt=T.mipmaps,se&&Ie){lt.length>0&&zt++;const xt=qt(Xt[0]);a.texStorage2D(o.TEXTURE_CUBE_MAP,zt,he,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Et){se?H&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Xt[xt].width,Xt[xt].height,te,Vt,Xt[xt].data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,he,Xt[xt].width,Xt[xt].height,0,te,Vt,Xt[xt].data);for(let Pt=0;Pt<lt.length;Pt++){const re=lt[Pt].image[xt].image;se?H&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt+1,0,0,re.width,re.height,te,Vt,re.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt+1,he,re.width,re.height,0,te,Vt,re.data)}}else{se?H&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,te,Vt,Xt[xt]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,he,te,Vt,Xt[xt]);for(let Pt=0;Pt<lt.length;Pt++){const Bt=lt[Pt];se?H&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt+1,0,0,te,Vt,Bt.image[xt]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt+1,he,te,Vt,Bt.image[xt])}}}y(T)&&x(o.TEXTURE_CUBE_MAP),mt.__version=yt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function gt(U,T,et,_t,yt,mt){const Yt=f.convert(et.format,et.colorSpace),Ot=f.convert(et.type),It=O(et.internalFormat,Yt,Ot,et.colorSpace),pe=s.get(T),Et=s.get(et);if(Et.__renderTarget=T,!pe.__hasExternalTextures){const Xt=Math.max(1,T.width>>mt),Qt=Math.max(1,T.height>>mt);yt===o.TEXTURE_3D||yt===o.TEXTURE_2D_ARRAY?a.texImage3D(yt,mt,It,Xt,Qt,T.depth,0,Yt,Ot,null):a.texImage2D(yt,mt,It,Xt,Qt,0,Yt,Ot,null)}a.bindFramebuffer(o.FRAMEBUFFER,U),Kt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_t,yt,Et.__webglTexture,0,ae(T)):(yt===o.TEXTURE_2D||yt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_t,yt,Et.__webglTexture,mt),a.bindFramebuffer(o.FRAMEBUFFER,null)}function ct(U,T,et){if(o.bindRenderbuffer(o.RENDERBUFFER,U),T.depthBuffer){const _t=T.depthTexture,yt=_t&&_t.isDepthTexture?_t.type:null,mt=N(T.stencilBuffer,yt),Yt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ot=ae(T);Kt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ot,mt,T.width,T.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ot,mt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,mt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Yt,o.RENDERBUFFER,U)}else{const _t=T.textures;for(let yt=0;yt<_t.length;yt++){const mt=_t[yt],Yt=f.convert(mt.format,mt.colorSpace),Ot=f.convert(mt.type),It=O(mt.internalFormat,Yt,Ot,mt.colorSpace),pe=ae(T);et&&Kt(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,pe,It,T.width,T.height):Kt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,pe,It,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,It,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function At(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(a.bindFramebuffer(o.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _t=s.get(T.depthTexture);_t.__renderTarget=T,(!_t.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),pt(T.depthTexture,0);const yt=_t.__webglTexture,mt=ae(T);if(T.depthTexture.format===Qs)Kt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0,mt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0);else if(T.depthTexture.format===io)Kt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0,mt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function Nt(U){const T=s.get(U),et=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const _t=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),_t){const yt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,_t.removeEventListener("dispose",yt)};_t.addEventListener("dispose",yt),T.__depthDisposeCallback=yt}T.__boundDepthTexture=_t}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");At(T.__webglFramebuffer,U)}else if(et){T.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[_t]),T.__webglDepthbuffer[_t]===void 0)T.__webglDepthbuffer[_t]=o.createRenderbuffer(),ct(T.__webglDepthbuffer[_t],U,!1);else{const yt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,mt=T.__webglDepthbuffer[_t];o.bindRenderbuffer(o.RENDERBUFFER,mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,mt)}}else if(a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),ct(T.__webglDepthbuffer,U,!1);else{const _t=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,yt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,yt),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,yt)}a.bindFramebuffer(o.FRAMEBUFFER,null)}function Ft(U,T,et){const _t=s.get(U);T!==void 0&&gt(_t.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Nt(U)}function Tt(U){const T=U.texture,et=s.get(U),_t=s.get(T);U.addEventListener("dispose",z);const yt=U.textures,mt=U.isWebGLCubeRenderTarget===!0,Yt=yt.length>1;if(Yt||(_t.__webglTexture===void 0&&(_t.__webglTexture=o.createTexture()),_t.__version=T.version,h.memory.textures++),mt){et.__webglFramebuffer=[];for(let Ot=0;Ot<6;Ot++)if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer[Ot]=[];for(let It=0;It<T.mipmaps.length;It++)et.__webglFramebuffer[Ot][It]=o.createFramebuffer()}else et.__webglFramebuffer[Ot]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer=[];for(let Ot=0;Ot<T.mipmaps.length;Ot++)et.__webglFramebuffer[Ot]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Yt)for(let Ot=0,It=yt.length;Ot<It;Ot++){const pe=s.get(yt[Ot]);pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&Kt(U)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],a.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Ot=0;Ot<yt.length;Ot++){const It=yt[Ot];et.__webglColorRenderbuffer[Ot]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Ot]);const pe=f.convert(It.format,It.colorSpace),Et=f.convert(It.type),Xt=O(It.internalFormat,pe,Et,It.colorSpace,U.isXRRenderTarget===!0),Qt=ae(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Qt,Xt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.RENDERBUFFER,et.__webglColorRenderbuffer[Ot])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),ct(et.__webglDepthRenderbuffer,U,!0)),a.bindFramebuffer(o.FRAMEBUFFER,null)}}if(mt){a.bindTexture(o.TEXTURE_CUBE_MAP,_t.__webglTexture),ee(o.TEXTURE_CUBE_MAP,T);for(let Ot=0;Ot<6;Ot++)if(T.mipmaps&&T.mipmaps.length>0)for(let It=0;It<T.mipmaps.length;It++)gt(et.__webglFramebuffer[Ot][It],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,It);else gt(et.__webglFramebuffer[Ot],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0);y(T)&&x(o.TEXTURE_CUBE_MAP),a.unbindTexture()}else if(Yt){for(let Ot=0,It=yt.length;Ot<It;Ot++){const pe=yt[Ot],Et=s.get(pe);a.bindTexture(o.TEXTURE_2D,Et.__webglTexture),ee(o.TEXTURE_2D,pe),gt(et.__webglFramebuffer,U,pe,o.COLOR_ATTACHMENT0+Ot,o.TEXTURE_2D,0),y(pe)&&x(o.TEXTURE_2D)}a.unbindTexture()}else{let Ot=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ot=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),a.bindTexture(Ot,_t.__webglTexture),ee(Ot,T),T.mipmaps&&T.mipmaps.length>0)for(let It=0;It<T.mipmaps.length;It++)gt(et.__webglFramebuffer[It],U,T,o.COLOR_ATTACHMENT0,Ot,It);else gt(et.__webglFramebuffer,U,T,o.COLOR_ATTACHMENT0,Ot,0);y(T)&&x(Ot),a.unbindTexture()}U.depthBuffer&&Nt(U)}function Ct(U){const T=U.textures;for(let et=0,_t=T.length;et<_t;et++){const yt=T[et];if(y(yt)){const mt=P(U),Yt=s.get(yt).__webglTexture;a.bindTexture(mt,Yt),x(mt),a.unbindTexture()}}}const De=[],F=[];function cn(U){if(U.samples>0){if(Kt(U)===!1){const T=U.textures,et=U.width,_t=U.height;let yt=o.COLOR_BUFFER_BIT;const mt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Yt=s.get(U),Ot=T.length>1;if(Ot)for(let It=0;It<T.length;It++)a.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+It,o.RENDERBUFFER,null),a.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+It,o.TEXTURE_2D,null,0);a.bindFramebuffer(o.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),a.bindFramebuffer(o.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let It=0;It<T.length;It++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(yt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(yt|=o.STENCIL_BUFFER_BIT)),Ot){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Yt.__webglColorRenderbuffer[It]);const pe=s.get(T[It]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,pe,0)}o.blitFramebuffer(0,0,et,_t,0,0,et,_t,yt,o.NEAREST),m===!0&&(De.length=0,F.length=0,De.push(o.COLOR_ATTACHMENT0+It),U.depthBuffer&&U.resolveDepthBuffer===!1&&(De.push(mt),F.push(mt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,F)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,De))}if(a.bindFramebuffer(o.READ_FRAMEBUFFER,null),a.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ot)for(let It=0;It<T.length;It++){a.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+It,o.RENDERBUFFER,Yt.__webglColorRenderbuffer[It]);const pe=s.get(T[It]).__webglTexture;a.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+It,o.TEXTURE_2D,pe,0)}a.bindFramebuffer(o.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const T=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function ae(U){return Math.min(u.maxSamples,U.samples)}function Kt(U){const T=s.get(U);return U.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function wt(U){const T=h.render.frame;v.get(U)!==T&&(v.set(U,T),U.update())}function ve(U,T){const et=U.colorSpace,_t=U.format,yt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||et!==ao&&et!==ar&&(we.getTransfer(et)===Fe?(_t!==wi||yt!==Ea)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),T}function qt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(_.width=U.naturalWidth||U.width,_.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(_.width=U.displayWidth,_.height=U.displayHeight):(_.width=U.width,_.height=U.height),_}this.allocateTextureUnit=ot,this.resetTextureUnits=ut,this.setTexture2D=pt,this.setTexture2DArray=k,this.setTexture3D=at,this.setTextureCube=Z,this.rebindTextures=Ft,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=cn,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Kt}function ZR(o,n){function a(s,u=ar){let f;const h=we.getTransfer(u);if(s===Ea)return o.UNSIGNED_BYTE;if(s===Up)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Np)return o.UNSIGNED_SHORT_5_5_5_1;if(s===gx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===px)return o.BYTE;if(s===mx)return o.SHORT;if(s===cl)return o.UNSIGNED_SHORT;if(s===Dp)return o.INT;if(s===qr)return o.UNSIGNED_INT;if(s===Sa)return o.FLOAT;if(s===fl)return o.HALF_FLOAT;if(s===_x)return o.ALPHA;if(s===vx)return o.RGB;if(s===wi)return o.RGBA;if(s===xx)return o.LUMINANCE;if(s===Sx)return o.LUMINANCE_ALPHA;if(s===Qs)return o.DEPTH_COMPONENT;if(s===io)return o.DEPTH_STENCIL;if(s===yx)return o.RED;if(s===Lp)return o.RED_INTEGER;if(s===Mx)return o.RG;if(s===Op)return o.RG_INTEGER;if(s===zp)return o.RGBA_INTEGER;if(s===pc||s===mc||s===gc||s===_c)if(h===Fe)if(f=n.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===pc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===mc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===gc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===_c)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=n.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===pc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===mc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===gc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===_c)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$d||s===tp||s===ep||s===np)if(f=n.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===$d)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===tp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ep)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===np)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ip||s===ap||s===rp)if(f=n.get("WEBGL_compressed_texture_etc"),f!==null){if(s===ip||s===ap)return h===Fe?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===rp)return h===Fe?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===sp||s===op||s===lp||s===up||s===cp||s===fp||s===hp||s===dp||s===pp||s===mp||s===gp||s===_p||s===vp||s===xp)if(f=n.get("WEBGL_compressed_texture_astc"),f!==null){if(s===sp)return h===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===op)return h===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===lp)return h===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===up)return h===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===cp)return h===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fp)return h===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===hp)return h===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===dp)return h===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===pp)return h===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===mp)return h===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===gp)return h===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_p)return h===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===vp)return h===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xp)return h===Fe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===vc||s===Sp||s===yp)if(f=n.get("EXT_texture_compression_bptc"),f!==null){if(s===vc)return h===Fe?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Sp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===yp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ex||s===Mp||s===Ep||s===Tp)if(f=n.get("EXT_texture_compression_rgtc"),f!==null){if(s===vc)return f.COMPRESSED_RED_RGTC1_EXT;if(s===Mp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ep)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Tp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===no?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:a}}const KR={type:"move"};class Bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new uc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new uc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new uc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(n){return this._targetRay!==null&&this._targetRay.dispatchEvent(n),this._grip!==null&&this._grip.dispatchEvent(n),this._hand!==null&&this._hand.dispatchEvent(n),this}connect(n){if(n&&n.hand){const a=this._hand;if(a)for(const s of n.hand.values())this._getHandJoint(a,s)}return this.dispatchEvent({type:"connected",data:n}),this}disconnect(n){return this.dispatchEvent({type:"disconnected",data:n}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(n,a,s){let u=null,f=null,h=null;const d=this._targetRay,m=this._grip,_=this._hand;if(n&&a.session.visibilityState!=="visible-blurred"){if(_&&n.hand){h=!0;for(const R of n.hand.values()){const y=a.getJointPose(R,s),x=this._getHandJoint(_,R);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=_.joints["index-finger-tip"],g=_.joints["thumb-tip"],S=v.position.distanceTo(g.position),M=.02,b=.005;_.inputState.pinching&&S>M+b?(_.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:n.handedness,target:this})):!_.inputState.pinching&&S<=M-b&&(_.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:n.handedness,target:this}))}else m!==null&&n.gripSpace&&(f=a.getPose(n.gripSpace,s),f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,f.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(f.linearVelocity)):m.hasLinearVelocity=!1,f.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(f.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(u=a.getPose(n.targetRaySpace,s),u===null&&f!==null&&(u=f),u!==null&&(d.matrix.fromArray(u.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,u.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(u.linearVelocity)):d.hasLinearVelocity=!1,u.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(u.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(KR)))}return d!==null&&(d.visible=u!==null),m!==null&&(m.visible=f!==null),_!==null&&(_.visible=h!==null),this}_getHandJoint(n,a){if(n.joints[a.jointName]===void 0){const s=new uc;s.matrixAutoUpdate=!1,s.visible=!1,n.joints[a.jointName]=s,n.add(s)}return n.joints[a.jointName]}}const QR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $R{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,a,s){if(this.texture===null){const u=new Zn,f=n.properties.get(u);f.__webglTexture=a.texture,(a.depthNear!==s.depthNear||a.depthFar!==s.depthFar)&&(this.depthNear=a.depthNear,this.depthFar=a.depthFar),this.texture=u}}getMesh(n){if(this.texture!==null&&this.mesh===null){const a=n.cameras[0].viewport,s=new lr({vertexShader:QR,fragmentShader:JR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new Di(new _l(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tC extends so{constructor(n,a){super();const s=this;let u=null,f=1,h=null,d="local-floor",m=1,_=null,v=null,g=null,S=null,M=null,b=null;const R=new $R,y=a.getContextAttributes();let x=null,P=null;const O=[],N=[],Q=new Ne;let G=null;const z=new oi;z.viewport=new He;const V=new oi;V.viewport=new He;const D=[z,V],C=new ST;let B=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(w){let j=O[w];return j===void 0&&(j=new Bd,O[w]=j),j.getTargetRaySpace()},this.getControllerGrip=function(w){let j=O[w];return j===void 0&&(j=new Bd,O[w]=j),j.getGripSpace()},this.getHand=function(w){let j=O[w];return j===void 0&&(j=new Bd,O[w]=j),j.getHandSpace()};function ot(w){const j=N.indexOf(w.inputSource);if(j===-1)return;const gt=O[j];gt!==void 0&&(gt.update(w.inputSource,w.frame,_||h),gt.dispatchEvent({type:w.type,data:w.inputSource}))}function vt(){u.removeEventListener("select",ot),u.removeEventListener("selectstart",ot),u.removeEventListener("selectend",ot),u.removeEventListener("squeeze",ot),u.removeEventListener("squeezestart",ot),u.removeEventListener("squeezeend",ot),u.removeEventListener("end",vt),u.removeEventListener("inputsourceschange",pt);for(let w=0;w<O.length;w++){const j=N[w];j!==null&&(N[w]=null,O[w].disconnect(j))}B=null,ut=null,R.reset(),n.setRenderTarget(x),M=null,S=null,g=null,u=null,P=null,Me.stop(),s.isPresenting=!1,n.setPixelRatio(G),n.setSize(Q.width,Q.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(w){f=w,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(w){d=w,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return _||h},this.setReferenceSpace=function(w){_=w},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return g},this.getFrame=function(){return b},this.getSession=function(){return u},this.setSession=async function(w){if(u=w,u!==null){if(x=n.getRenderTarget(),u.addEventListener("select",ot),u.addEventListener("selectstart",ot),u.addEventListener("selectend",ot),u.addEventListener("squeeze",ot),u.addEventListener("squeezestart",ot),u.addEventListener("squeezeend",ot),u.addEventListener("end",vt),u.addEventListener("inputsourceschange",pt),y.xrCompatible!==!0&&await a.makeXRCompatible(),G=n.getPixelRatio(),n.getSize(Q),u.enabledFeatures!==void 0&&u.enabledFeatures.includes("layers")){let gt=null,ct=null,At=null;y.depth&&(At=y.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,gt=y.stencil?io:Qs,ct=y.stencil?no:qr);const Nt={colorFormat:a.RGBA8,depthFormat:At,scaleFactor:f};g=new XRWebGLBinding(u,a),S=g.createProjectionLayer(Nt),u.updateRenderState({layers:[S]}),n.setPixelRatio(1),n.setSize(S.textureWidth,S.textureHeight,!1),P=new Yr(S.textureWidth,S.textureHeight,{format:wi,type:Ea,depthTexture:new Fx(S.textureWidth,S.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:y.stencil,colorSpace:n.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}else{const gt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(u,a,gt),u.updateRenderState({baseLayer:M}),n.setPixelRatio(1),n.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Yr(M.framebufferWidth,M.framebufferHeight,{format:wi,type:Ea,colorSpace:n.outputColorSpace,stencilBuffer:y.stencil})}P.isXRRenderTarget=!0,this.setFoveation(m),_=null,h=await u.requestReferenceSpace(d),Me.setContext(u),Me.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function pt(w){for(let j=0;j<w.removed.length;j++){const gt=w.removed[j],ct=N.indexOf(gt);ct>=0&&(N[ct]=null,O[ct].disconnect(gt))}for(let j=0;j<w.added.length;j++){const gt=w.added[j];let ct=N.indexOf(gt);if(ct===-1){for(let Nt=0;Nt<O.length;Nt++)if(Nt>=N.length){N.push(gt),ct=Nt;break}else if(N[Nt]===null){N[Nt]=gt,ct=Nt;break}if(ct===-1)break}const At=O[ct];At&&At.connect(gt)}}const k=new tt,at=new tt;function Z(w,j,gt){k.setFromMatrixPosition(j.matrixWorld),at.setFromMatrixPosition(gt.matrixWorld);const ct=k.distanceTo(at),At=j.projectionMatrix.elements,Nt=gt.projectionMatrix.elements,Ft=At[14]/(At[10]-1),Tt=At[14]/(At[10]+1),Ct=(At[9]+1)/At[5],De=(At[9]-1)/At[5],F=(At[8]-1)/At[0],cn=(Nt[8]+1)/Nt[0],ae=Ft*F,Kt=Ft*cn,wt=ct/(-F+cn),ve=wt*-F;if(j.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(ve),w.translateZ(wt),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert(),At[10]===-1)w.projectionMatrix.copy(j.projectionMatrix),w.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const qt=Ft+wt,U=Tt+wt,T=ae-ve,et=Kt+(ct-ve),_t=Ct*Tt/U*qt,yt=De*Tt/U*qt;w.projectionMatrix.makePerspective(T,et,_t,yt,qt,U),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}}function ht(w,j){j===null?w.matrixWorld.copy(w.matrix):w.matrixWorld.multiplyMatrices(j.matrixWorld,w.matrix),w.matrixWorldInverse.copy(w.matrixWorld).invert()}this.updateCamera=function(w){if(u===null)return;let j=w.near,gt=w.far;R.texture!==null&&(R.depthNear>0&&(j=R.depthNear),R.depthFar>0&&(gt=R.depthFar)),C.near=V.near=z.near=j,C.far=V.far=z.far=gt,(B!==C.near||ut!==C.far)&&(u.updateRenderState({depthNear:C.near,depthFar:C.far}),B=C.near,ut=C.far),z.layers.mask=w.layers.mask|2,V.layers.mask=w.layers.mask|4,C.layers.mask=z.layers.mask|V.layers.mask;const ct=w.parent,At=C.cameras;ht(C,ct);for(let Nt=0;Nt<At.length;Nt++)ht(At[Nt],ct);At.length===2?Z(C,z,V):C.projectionMatrix.copy(z.projectionMatrix),St(w,C,ct)};function St(w,j,gt){gt===null?w.matrix.copy(j.matrixWorld):(w.matrix.copy(gt.matrixWorld),w.matrix.invert(),w.matrix.multiply(j.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(j.projectionMatrix),w.projectionMatrixInverse.copy(j.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=bp*2*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(w){m=w,S!==null&&(S.fixedFoveation=w),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=w)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(C)};let Gt=null;function ee(w,j){if(v=j.getViewerPose(_||h),b=j,v!==null){const gt=v.views;M!==null&&(n.setRenderTargetFramebuffer(P,M.framebuffer),n.setRenderTarget(P));let ct=!1;gt.length!==C.cameras.length&&(C.cameras.length=0,ct=!0);for(let Nt=0;Nt<gt.length;Nt++){const Ft=gt[Nt];let Tt=null;if(M!==null)Tt=M.getViewport(Ft);else{const De=g.getViewSubImage(S,Ft);Tt=De.viewport,Nt===0&&(n.setRenderTargetTextures(P,De.colorTexture,S.ignoreDepthValues?void 0:De.depthStencilTexture),n.setRenderTarget(P))}let Ct=D[Nt];Ct===void 0&&(Ct=new oi,Ct.layers.enable(Nt),Ct.viewport=new He,D[Nt]=Ct),Ct.matrix.fromArray(Ft.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(Ft.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),Nt===0&&(C.matrix.copy(Ct.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ct===!0&&C.cameras.push(Ct)}const At=u.enabledFeatures;if(At&&At.includes("depth-sensing")){const Nt=g.getDepthInformation(gt[0]);Nt&&Nt.isValid&&Nt.texture&&R.init(n,Nt,u.renderState)}}for(let gt=0;gt<O.length;gt++){const ct=N[gt],At=O[gt];ct!==null&&At!==void 0&&At.update(ct,j,_||h)}Gt&&Gt(w,j),j.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:j}),b=null}const Me=new Gx;Me.setAnimationLoop(ee),this.setAnimationLoop=function(w){Gt=w},this.dispose=function(){}}}const Br=new ji,eC=new Ze;function nC(o,n){function a(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,Ox(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function u(y,x,P,O,N){x.isMeshBasicMaterial||x.isMeshLambertMaterial?f(y,x):x.isMeshToonMaterial?(f(y,x),g(y,x)):x.isMeshPhongMaterial?(f(y,x),v(y,x)):x.isMeshStandardMaterial?(f(y,x),S(y,x),x.isMeshPhysicalMaterial&&M(y,x,N)):x.isMeshMatcapMaterial?(f(y,x),b(y,x)):x.isMeshDepthMaterial?f(y,x):x.isMeshDistanceMaterial?(f(y,x),R(y,x)):x.isMeshNormalMaterial?f(y,x):x.isLineBasicMaterial?(h(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?m(y,x,P,O):x.isSpriteMaterial?_(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function f(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,a(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,a(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,a(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===jn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,a(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===jn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,a(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,a(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,a(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const P=n.get(x),O=P.envMap,N=P.envMapRotation;O&&(y.envMap.value=O,Br.copy(N),Br.x*=-1,Br.y*=-1,Br.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),y.envMapRotation.value.setFromMatrix4(eC.makeRotationFromEuler(Br)),y.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,a(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,a(x.aoMap,y.aoMapTransform))}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,a(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,P,O){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*P,y.scale.value=O*.5,x.map&&(y.map.value=x.map,a(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,a(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function _(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,a(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,a(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function g(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function S(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,a(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,a(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,P){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,a(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,a(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,a(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,a(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,a(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===jn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,a(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,a(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,a(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,a(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,a(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,a(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,a(x.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,x){x.matcap&&(y.matcap.value=x.matcap)}function R(y,x){const P=n.get(x).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:u}}function iC(o,n,a,s){let u={},f={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,O){const N=O.program;s.uniformBlockBinding(P,N)}function _(P,O){let N=u[P.id];N===void 0&&(b(P),N=v(P),u[P.id]=N,P.addEventListener("dispose",y));const Q=O.program;s.updateUBOMapping(P,Q);const G=n.render.frame;f[P.id]!==G&&(S(P),f[P.id]=G)}function v(P){const O=g();P.__bindingPointIndex=O;const N=o.createBuffer(),Q=P.__size,G=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,Q,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,N),N}function g(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(P){const O=u[P.id],N=P.uniforms,Q=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let G=0,z=N.length;G<z;G++){const V=Array.isArray(N[G])?N[G]:[N[G]];for(let D=0,C=V.length;D<C;D++){const B=V[D];if(M(B,G,D,Q)===!0){const ut=B.__offset,ot=Array.isArray(B.value)?B.value:[B.value];let vt=0;for(let pt=0;pt<ot.length;pt++){const k=ot[pt],at=R(k);typeof k=="number"||typeof k=="boolean"?(B.__data[0]=k,o.bufferSubData(o.UNIFORM_BUFFER,ut+vt,B.__data)):k.isMatrix3?(B.__data[0]=k.elements[0],B.__data[1]=k.elements[1],B.__data[2]=k.elements[2],B.__data[3]=0,B.__data[4]=k.elements[3],B.__data[5]=k.elements[4],B.__data[6]=k.elements[5],B.__data[7]=0,B.__data[8]=k.elements[6],B.__data[9]=k.elements[7],B.__data[10]=k.elements[8],B.__data[11]=0):(k.toArray(B.__data,vt),vt+=at.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ut,B.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(P,O,N,Q){const G=P.value,z=O+"_"+N;if(Q[z]===void 0)return typeof G=="number"||typeof G=="boolean"?Q[z]=G:Q[z]=G.clone(),!0;{const V=Q[z];if(typeof G=="number"||typeof G=="boolean"){if(V!==G)return Q[z]=G,!0}else if(V.equals(G)===!1)return V.copy(G),!0}return!1}function b(P){const O=P.uniforms;let N=0;const Q=16;for(let z=0,V=O.length;z<V;z++){const D=Array.isArray(O[z])?O[z]:[O[z]];for(let C=0,B=D.length;C<B;C++){const ut=D[C],ot=Array.isArray(ut.value)?ut.value:[ut.value];for(let vt=0,pt=ot.length;vt<pt;vt++){const k=ot[vt],at=R(k),Z=N%Q,ht=Z%at.boundary,St=Z+ht;N+=ht,St!==0&&Q-St<at.storage&&(N+=Q-St),ut.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),ut.__offset=N,N+=at.storage}}}const G=N%Q;return G>0&&(N+=Q-G),P.__size=N,P.__cache={},this}function R(P){const O={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(O.boundary=4,O.storage=4):P.isVector2?(O.boundary=8,O.storage=8):P.isVector3||P.isColor?(O.boundary=16,O.storage=12):P.isVector4?(O.boundary=16,O.storage=16):P.isMatrix3?(O.boundary=48,O.storage=48):P.isMatrix4?(O.boundary=64,O.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),O}function y(P){const O=P.target;O.removeEventListener("dispose",y);const N=h.indexOf(O.__bindingPointIndex);h.splice(N,1),o.deleteBuffer(u[O.id]),delete u[O.id],delete f[O.id]}function x(){for(const P in u)o.deleteBuffer(u[P]);h=[],u={},f={}}return{bind:m,update:_,dispose:x}}class aC{constructor(n={}){const{canvas:a=PE(),context:s=null,depth:u=!0,stencil:f=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:_=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:S=!1}=n;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),R=new Int32Array(4);let y=null,x=null;const P=[],O=[];this.domElement=a,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=si,this.toneMapping=sr,this.toneMappingExposure=1;const N=this;let Q=!1,G=0,z=0,V=null,D=-1,C=null;const B=new He,ut=new He;let ot=null;const vt=new de(0);let pt=0,k=a.width,at=a.height,Z=1,ht=null,St=null;const Gt=new He(0,0,k,at),ee=new He(0,0,k,at);let Me=!1;const w=new Bp;let j=!1,gt=!1;this.transmissionResolutionScale=1;const ct=new Ze,At=new Ze,Nt=new tt,Ft=new He,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ct=!1;function De(){return V===null?Z:1}let F=s;function cn(A,W){return a.getContext(A,W)}try{const A={alpha:!0,depth:u,stencil:f,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:_,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${wp}`),a.addEventListener("webglcontextlost",xt,!1),a.addEventListener("webglcontextrestored",Pt,!1),a.addEventListener("webglcontextcreationerror",Bt,!1),F===null){const W="webgl2";if(F=cn(W,A),F===null)throw cn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ae,Kt,wt,ve,qt,U,T,et,_t,yt,mt,Yt,Ot,It,pe,Et,Xt,Qt,te,Vt,he,se,Ie,H;function zt(){ae=new dA(F),ae.init(),se=new ZR(F,ae),Kt=new oA(F,ae,n,se),wt=new WR(F,ae),Kt.reverseDepthBuffer&&S&&wt.buffers.depth.setReversed(!0),ve=new gA(F),qt=new OR,U=new jR(F,ae,wt,qt,Kt,se,ve),T=new uA(N),et=new hA(N),_t=new ET(F),Ie=new rA(F,_t),yt=new pA(F,_t,ve,Ie),mt=new vA(F,yt,_t,ve),te=new _A(F,Kt,U),Et=new lA(qt),Yt=new LR(N,T,et,ae,Kt,Ie,Et),Ot=new nC(N,qt),It=new PR,pe=new VR(ae),Qt=new aA(N,T,et,wt,mt,M,m),Xt=new qR(N,mt,Kt),H=new iC(F,ve,Kt,wt),Vt=new sA(F,ae,ve),he=new mA(F,ae,ve),ve.programs=Yt.programs,N.capabilities=Kt,N.extensions=ae,N.properties=qt,N.renderLists=It,N.shadowMap=Xt,N.state=wt,N.info=ve}zt();const lt=new tC(N,F);this.xr=lt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=ae.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ae.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(k,at,!1))},this.getSize=function(A){return A.set(k,at)},this.setSize=function(A,W,it=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=A,at=W,a.width=Math.floor(A*Z),a.height=Math.floor(W*Z),it===!0&&(a.style.width=A+"px",a.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(k*Z,at*Z).floor()},this.setDrawingBufferSize=function(A,W,it){k=A,at=W,Z=it,a.width=Math.floor(A*it),a.height=Math.floor(W*it),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(Gt)},this.setViewport=function(A,W,it,rt){A.isVector4?Gt.set(A.x,A.y,A.z,A.w):Gt.set(A,W,it,rt),wt.viewport(B.copy(Gt).multiplyScalar(Z).round())},this.getScissor=function(A){return A.copy(ee)},this.setScissor=function(A,W,it,rt){A.isVector4?ee.set(A.x,A.y,A.z,A.w):ee.set(A,W,it,rt),wt.scissor(ut.copy(ee).multiplyScalar(Z).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(A){wt.setScissorTest(Me=A)},this.setOpaqueSort=function(A){ht=A},this.setTransparentSort=function(A){St=A},this.getClearColor=function(A){return A.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor.apply(Qt,arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha.apply(Qt,arguments)},this.clear=function(A=!0,W=!0,it=!0){let rt=0;if(A){let K=!1;if(V!==null){const Mt=V.texture.format;K=Mt===zp||Mt===Op||Mt===Lp}if(K){const Mt=V.texture.type,Rt=Mt===Ea||Mt===qr||Mt===cl||Mt===no||Mt===Up||Mt===Np,bt=Qt.getClearColor(),Ut=Qt.getClearAlpha(),Jt=bt.r,ne=bt.g,Zt=bt.b;Rt?(b[0]=Jt,b[1]=ne,b[2]=Zt,b[3]=Ut,F.clearBufferuiv(F.COLOR,0,b)):(R[0]=Jt,R[1]=ne,R[2]=Zt,R[3]=Ut,F.clearBufferiv(F.COLOR,0,R))}else rt|=F.COLOR_BUFFER_BIT}W&&(rt|=F.DEPTH_BUFFER_BIT),it&&(rt|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){a.removeEventListener("webglcontextlost",xt,!1),a.removeEventListener("webglcontextrestored",Pt,!1),a.removeEventListener("webglcontextcreationerror",Bt,!1),Qt.dispose(),It.dispose(),pe.dispose(),qt.dispose(),T.dispose(),et.dispose(),mt.dispose(),Ie.dispose(),H.dispose(),Yt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Nn),lt.removeEventListener("sessionend",vl),Zi.stop()};function xt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Q=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),Q=!1;const A=ve.autoReset,W=Xt.enabled,it=Xt.autoUpdate,rt=Xt.needsUpdate,K=Xt.type;zt(),ve.autoReset=A,Xt.enabled=W,Xt.autoUpdate=it,Xt.needsUpdate=rt,Xt.type=K}function Bt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function re(A){const W=A.target;W.removeEventListener("dispose",re),Ke(W)}function Ke(A){gn(A),qt.remove(A)}function gn(A){const W=qt.get(A).programs;W!==void 0&&(W.forEach(function(it){Yt.releaseProgram(it)}),A.isShaderMaterial&&Yt.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,it,rt,K,Mt){W===null&&(W=Tt);const Rt=K.isMesh&&K.matrixWorld.determinant()<0,bt=Rc(A,W,it,rt,K);wt.setMaterial(rt,Rt);let Ut=it.index,Jt=1;if(rt.wireframe===!0){if(Ut=yt.getWireframeAttribute(it),Ut===void 0)return;Jt=2}const ne=it.drawRange,Zt=it.attributes.position;let Te=ne.start*Jt,Re=(ne.start+ne.count)*Jt;Mt!==null&&(Te=Math.max(Te,Mt.start*Jt),Re=Math.min(Re,(Mt.start+Mt.count)*Jt)),Ut!==null?(Te=Math.max(Te,0),Re=Math.min(Re,Ut.count)):Zt!=null&&(Te=Math.max(Te,0),Re=Math.min(Re,Zt.count));const ke=Re-Te;if(ke<0||ke===1/0)return;Ie.setup(K,rt,bt,it,Ut);let Ge,me=Vt;if(Ut!==null&&(Ge=_t.get(Ut),me=he,me.setIndex(Ge)),K.isMesh)rt.wireframe===!0?(wt.setLineWidth(rt.wireframeLinewidth*De()),me.setMode(F.LINES)):me.setMode(F.TRIANGLES);else if(K.isLine){let Wt=rt.linewidth;Wt===void 0&&(Wt=1),wt.setLineWidth(Wt*De()),K.isLineSegments?me.setMode(F.LINES):K.isLineLoop?me.setMode(F.LINE_LOOP):me.setMode(F.LINE_STRIP)}else K.isPoints?me.setMode(F.POINTS):K.isSprite&&me.setMode(F.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)me.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))me.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Wt=K._multiDrawStarts,Qe=K._multiDrawCounts,xe=K._multiDrawCount,vn=Ut?_t.get(Ut).bytesPerElement:1,je=qt.get(rt).currentProgram.getUniforms();for(let Ln=0;Ln<xe;Ln++)je.setValue(F,"_gl_DrawID",Ln),me.render(Wt[Ln]/vn,Qe[Ln])}else if(K.isInstancedMesh)me.renderInstances(Te,ke,K.count);else if(it.isInstancedBufferGeometry){const Wt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Qe=Math.min(it.instanceCount,Wt);me.renderInstances(Te,ke,Qe)}else me.render(Te,ke)};function Ee(A,W,it){A.transparent===!0&&A.side===xa&&A.forceSinglePass===!1?(A.side=jn,A.needsUpdate=!0,Qi(A,W,it),A.side=or,A.needsUpdate=!0,Qi(A,W,it),A.side=xa):Qi(A,W,it)}this.compile=function(A,W,it=null){it===null&&(it=A),x=pe.get(it),x.init(W),O.push(x),it.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),A!==it&&A.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),x.setupLights();const rt=new Set;return A.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Mt=K.material;if(Mt)if(Array.isArray(Mt))for(let Rt=0;Rt<Mt.length;Rt++){const bt=Mt[Rt];Ee(bt,it,K),rt.add(bt)}else Ee(Mt,it,K),rt.add(Mt)}),O.pop(),x=null,rt},this.compileAsync=function(A,W,it=null){const rt=this.compile(A,W,it);return new Promise(K=>{function Mt(){if(rt.forEach(function(Rt){qt.get(Rt).currentProgram.isReady()&&rt.delete(Rt)}),rt.size===0){K(A);return}setTimeout(Mt,10)}ae.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let We=null;function _n(A){We&&We(A)}function Nn(){Zi.stop()}function vl(){Zi.start()}const Zi=new Gx;Zi.setAnimationLoop(_n),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(A){We=A,lt.setAnimationLoop(A),A===null?Zi.stop():Zi.start()},lt.addEventListener("sessionstart",Nn),lt.addEventListener("sessionend",vl),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Q===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(W),W=lt.getCamera()),A.isScene===!0&&A.onBeforeRender(N,A,W,V),x=pe.get(A,O.length),x.init(W),O.push(x),At.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),w.setFromProjectionMatrix(At),gt=this.localClippingEnabled,j=Et.init(this.clippingPlanes,gt),y=It.get(A,P.length),y.init(),P.push(y),lt.enabled===!0&&lt.isPresenting===!0){const Mt=N.xr.getDepthSensingMesh();Mt!==null&&lo(Mt,W,-1/0,N.sortObjects)}lo(A,W,0,N.sortObjects),y.finish(),N.sortObjects===!0&&y.sort(ht,St),Ct=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,Ct&&Qt.addToRenderList(y,A),this.info.render.frame++,j===!0&&Et.beginShadows();const it=x.state.shadowsArray;Xt.render(it,A,W),j===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=y.opaque,K=y.transmissive;if(x.setupLights(),W.isArrayCamera){const Mt=W.cameras;if(K.length>0)for(let Rt=0,bt=Mt.length;Rt<bt;Rt++){const Ut=Mt[Rt];fr(rt,K,A,Ut)}Ct&&Qt.render(A);for(let Rt=0,bt=Mt.length;Rt<bt;Rt++){const Ut=Mt[Rt];cr(y,A,Ut,Ut.viewport)}}else K.length>0&&fr(rt,K,A,W),Ct&&Qt.render(A),cr(y,A,W);V!==null&&z===0&&(U.updateMultisampleRenderTarget(V),U.updateRenderTargetMipmap(V)),A.isScene===!0&&A.onAfterRender(N,A,W),Ie.resetDefaultState(),D=-1,C=null,O.pop(),O.length>0?(x=O[O.length-1],j===!0&&Et.setGlobalState(N.clippingPlanes,x.state.camera)):x=null,P.pop(),P.length>0?y=P[P.length-1]:y=null};function lo(A,W,it,rt){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)it=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)x.pushLight(A),A.castShadow&&x.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||w.intersectsSprite(A)){rt&&Ft.setFromMatrixPosition(A.matrixWorld).applyMatrix4(At);const Rt=mt.update(A),bt=A.material;bt.visible&&y.push(A,Rt,bt,it,Ft.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||w.intersectsObject(A))){const Rt=mt.update(A),bt=A.material;if(rt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ft.copy(A.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Ft.copy(Rt.boundingSphere.center)),Ft.applyMatrix4(A.matrixWorld).applyMatrix4(At)),Array.isArray(bt)){const Ut=Rt.groups;for(let Jt=0,ne=Ut.length;Jt<ne;Jt++){const Zt=Ut[Jt],Te=bt[Zt.materialIndex];Te&&Te.visible&&y.push(A,Rt,Te,it,Ft.z,Zt)}}else bt.visible&&y.push(A,Rt,bt,it,Ft.z,null)}}const Mt=A.children;for(let Rt=0,bt=Mt.length;Rt<bt;Rt++)lo(Mt[Rt],W,it,rt)}function cr(A,W,it,rt){const K=A.opaque,Mt=A.transmissive,Rt=A.transparent;x.setupLightsView(it),j===!0&&Et.setGlobalState(N.clippingPlanes,it),rt&&wt.viewport(B.copy(rt)),K.length>0&&Ki(K,W,it),Mt.length>0&&Ki(Mt,W,it),Rt.length>0&&Ki(Rt,W,it),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function fr(A,W,it,rt){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[rt.id]===void 0&&(x.state.transmissionRenderTarget[rt.id]=new Yr(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?fl:Ea,minFilter:kr,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const Mt=x.state.transmissionRenderTarget[rt.id],Rt=rt.viewport||B;Mt.setSize(Rt.z*N.transmissionResolutionScale,Rt.w*N.transmissionResolutionScale);const bt=N.getRenderTarget();N.setRenderTarget(Mt),N.getClearColor(vt),pt=N.getClearAlpha(),pt<1&&N.setClearColor(16777215,.5),N.clear(),Ct&&Qt.render(it);const Ut=N.toneMapping;N.toneMapping=sr;const Jt=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),x.setupLightsView(rt),j===!0&&Et.setGlobalState(N.clippingPlanes,rt),Ki(A,it,rt),U.updateMultisampleRenderTarget(Mt),U.updateRenderTargetMipmap(Mt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let Zt=0,Te=W.length;Zt<Te;Zt++){const Re=W[Zt],ke=Re.object,Ge=Re.geometry,me=Re.material,Wt=Re.group;if(me.side===xa&&ke.layers.test(rt.layers)){const Qe=me.side;me.side=jn,me.needsUpdate=!0,Li(ke,it,rt,Ge,me,Wt),me.side=Qe,me.needsUpdate=!0,ne=!0}}ne===!0&&(U.updateMultisampleRenderTarget(Mt),U.updateRenderTargetMipmap(Mt))}N.setRenderTarget(bt),N.setClearColor(vt,pt),Jt!==void 0&&(rt.viewport=Jt),N.toneMapping=Ut}function Ki(A,W,it){const rt=W.isScene===!0?W.overrideMaterial:null;for(let K=0,Mt=A.length;K<Mt;K++){const Rt=A[K],bt=Rt.object,Ut=Rt.geometry,Jt=rt===null?Rt.material:rt,ne=Rt.group;bt.layers.test(it.layers)&&Li(bt,W,it,Ut,Jt,ne)}}function Li(A,W,it,rt,K,Mt){A.onBeforeRender(N,W,it,rt,K,Mt),A.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(N,W,it,rt,A,Mt),K.transparent===!0&&K.side===xa&&K.forceSinglePass===!1?(K.side=jn,K.needsUpdate=!0,N.renderBufferDirect(it,W,rt,K,A,Mt),K.side=or,K.needsUpdate=!0,N.renderBufferDirect(it,W,rt,K,A,Mt),K.side=xa):N.renderBufferDirect(it,W,rt,K,A,Mt),A.onAfterRender(N,W,it,rt,K,Mt)}function Qi(A,W,it){W.isScene!==!0&&(W=Tt);const rt=qt.get(A),K=x.state.lights,Mt=x.state.shadowsArray,Rt=K.state.version,bt=Yt.getParameters(A,K.state,Mt,W,it),Ut=Yt.getProgramCacheKey(bt);let Jt=rt.programs;rt.environment=A.isMeshStandardMaterial?W.environment:null,rt.fog=W.fog,rt.envMap=(A.isMeshStandardMaterial?et:T).get(A.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Jt===void 0&&(A.addEventListener("dispose",re),Jt=new Map,rt.programs=Jt);let ne=Jt.get(Ut);if(ne!==void 0){if(rt.currentProgram===ne&&rt.lightsStateVersion===Rt)return uo(A,bt),ne}else bt.uniforms=Yt.getUniforms(A),A.onBeforeCompile(bt,N),ne=Yt.acquireProgram(bt,Ut),Jt.set(Ut,ne),rt.uniforms=bt.uniforms;const Zt=rt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Zt.clippingPlanes=Et.uniform),uo(A,bt),rt.needsLights=co(A),rt.lightsStateVersion=Rt,rt.needsLights&&(Zt.ambientLightColor.value=K.state.ambient,Zt.lightProbe.value=K.state.probe,Zt.directionalLights.value=K.state.directional,Zt.directionalLightShadows.value=K.state.directionalShadow,Zt.spotLights.value=K.state.spot,Zt.spotLightShadows.value=K.state.spotShadow,Zt.rectAreaLights.value=K.state.rectArea,Zt.ltc_1.value=K.state.rectAreaLTC1,Zt.ltc_2.value=K.state.rectAreaLTC2,Zt.pointLights.value=K.state.point,Zt.pointLightShadows.value=K.state.pointShadow,Zt.hemisphereLights.value=K.state.hemi,Zt.directionalShadowMap.value=K.state.directionalShadowMap,Zt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Zt.spotShadowMap.value=K.state.spotShadowMap,Zt.spotLightMatrix.value=K.state.spotLightMatrix,Zt.spotLightMap.value=K.state.spotLightMap,Zt.pointShadowMap.value=K.state.pointShadowMap,Zt.pointShadowMatrix.value=K.state.pointShadowMatrix),rt.currentProgram=ne,rt.uniformsList=null,ne}function Ta(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=xc.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function uo(A,W){const it=qt.get(A);it.outputColorSpace=W.outputColorSpace,it.batching=W.batching,it.batchingColor=W.batchingColor,it.instancing=W.instancing,it.instancingColor=W.instancingColor,it.instancingMorph=W.instancingMorph,it.skinning=W.skinning,it.morphTargets=W.morphTargets,it.morphNormals=W.morphNormals,it.morphColors=W.morphColors,it.morphTargetsCount=W.morphTargetsCount,it.numClippingPlanes=W.numClippingPlanes,it.numIntersection=W.numClipIntersection,it.vertexAlphas=W.vertexAlphas,it.vertexTangents=W.vertexTangents,it.toneMapping=W.toneMapping}function Rc(A,W,it,rt,K){W.isScene!==!0&&(W=Tt),U.resetTextureUnits();const Mt=W.fog,Rt=rt.isMeshStandardMaterial?W.environment:null,bt=V===null?N.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:ao,Ut=(rt.isMeshStandardMaterial?et:T).get(rt.envMap||Rt),Jt=rt.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,ne=!!it.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Zt=!!it.morphAttributes.position,Te=!!it.morphAttributes.normal,Re=!!it.morphAttributes.color;let ke=sr;rt.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(ke=N.toneMapping);const Ge=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,me=Ge!==void 0?Ge.length:0,Wt=qt.get(rt),Qe=x.state.lights;if(j===!0&&(gt===!0||A!==C)){const En=A===C&&rt.id===D;Et.setState(rt,A,En)}let xe=!1;rt.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Qe.state.version||Wt.outputColorSpace!==bt||K.isBatchedMesh&&Wt.batching===!1||!K.isBatchedMesh&&Wt.batching===!0||K.isBatchedMesh&&Wt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Wt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Wt.instancing===!1||!K.isInstancedMesh&&Wt.instancing===!0||K.isSkinnedMesh&&Wt.skinning===!1||!K.isSkinnedMesh&&Wt.skinning===!0||K.isInstancedMesh&&Wt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Wt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Wt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Wt.instancingMorph===!1&&K.morphTexture!==null||Wt.envMap!==Ut||rt.fog===!0&&Wt.fog!==Mt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Et.numPlanes||Wt.numIntersection!==Et.numIntersection)||Wt.vertexAlphas!==Jt||Wt.vertexTangents!==ne||Wt.morphTargets!==Zt||Wt.morphNormals!==Te||Wt.morphColors!==Re||Wt.toneMapping!==ke||Wt.morphTargetsCount!==me)&&(xe=!0):(xe=!0,Wt.__version=rt.version);let vn=Wt.currentProgram;xe===!0&&(vn=Qi(rt,W,K));let je=!1,Ln=!1,ba=!1;const Ve=vn.getUniforms(),an=Wt.uniforms;if(wt.useProgram(vn.program)&&(je=!0,Ln=!0,ba=!0),rt.id!==D&&(D=rt.id,Ln=!0),je||C!==A){wt.buffers.depth.getReversed()?(ct.copy(A.projectionMatrix),BE(ct),FE(ct),Ve.setValue(F,"projectionMatrix",ct)):Ve.setValue(F,"projectionMatrix",A.projectionMatrix),Ve.setValue(F,"viewMatrix",A.matrixWorldInverse);const Tn=Ve.map.cameraPosition;Tn!==void 0&&Tn.setValue(F,Nt.setFromMatrixPosition(A.matrixWorld)),Kt.logarithmicDepthBuffer&&Ve.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Ve.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Ln=!0,ba=!0)}if(K.isSkinnedMesh){Ve.setOptional(F,K,"bindMatrix"),Ve.setOptional(F,K,"bindMatrixInverse");const En=K.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Ve.setValue(F,"boneTexture",En.boneTexture,U))}K.isBatchedMesh&&(Ve.setOptional(F,K,"batchingTexture"),Ve.setValue(F,"batchingTexture",K._matricesTexture,U),Ve.setOptional(F,K,"batchingIdTexture"),Ve.setValue(F,"batchingIdTexture",K._indirectTexture,U),Ve.setOptional(F,K,"batchingColorTexture"),K._colorsTexture!==null&&Ve.setValue(F,"batchingColorTexture",K._colorsTexture,U));const fn=it.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&te.update(K,it,vn),(Ln||Wt.receiveShadow!==K.receiveShadow)&&(Wt.receiveShadow=K.receiveShadow,Ve.setValue(F,"receiveShadow",K.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(an.envMap.value=Ut,an.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&W.environment!==null&&(an.envMapIntensity.value=W.environmentIntensity),Ln&&(Ve.setValue(F,"toneMappingExposure",N.toneMappingExposure),Wt.needsLights&&xl(an,ba),Mt&&rt.fog===!0&&Ot.refreshFogUniforms(an,Mt),Ot.refreshMaterialUniforms(an,rt,Z,at,x.state.transmissionRenderTarget[A.id]),xc.upload(F,Ta(Wt),an,U)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(xc.upload(F,Ta(Wt),an,U),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Ve.setValue(F,"center",K.center),Ve.setValue(F,"modelViewMatrix",K.modelViewMatrix),Ve.setValue(F,"normalMatrix",K.normalMatrix),Ve.setValue(F,"modelMatrix",K.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const En=rt.uniformsGroups;for(let Tn=0,jr=En.length;Tn<jr;Tn++){const Ji=En[Tn];H.update(Ji,vn),H.bind(Ji,vn)}}return vn}function xl(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function co(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(A,W,it){qt.get(A.texture).__webglTexture=W,qt.get(A.depthTexture).__webglTexture=it;const rt=qt.get(A);rt.__hasExternalTextures=!0,rt.__autoAllocateDepthBuffer=it===void 0,rt.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){const it=qt.get(A);it.__webglFramebuffer=W,it.__useDefaultFramebuffer=W===void 0};const hr=F.createFramebuffer();this.setRenderTarget=function(A,W=0,it=0){V=A,G=W,z=it;let rt=!0,K=null,Mt=!1,Rt=!1;if(A){const Ut=qt.get(A);if(Ut.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(F.FRAMEBUFFER,null),rt=!1;else if(Ut.__webglFramebuffer===void 0)U.setupRenderTarget(A);else if(Ut.__hasExternalTextures)U.rebindTextures(A,qt.get(A.texture).__webglTexture,qt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Zt=A.depthTexture;if(Ut.__boundDepthTexture!==Zt){if(Zt!==null&&qt.has(Zt)&&(A.width!==Zt.image.width||A.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(A)}}const Jt=A.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Rt=!0);const ne=qt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ne[W])?K=ne[W][it]:K=ne[W],Mt=!0):A.samples>0&&U.useMultisampledRTT(A)===!1?K=qt.get(A).__webglMultisampledFramebuffer:Array.isArray(ne)?K=ne[it]:K=ne,B.copy(A.viewport),ut.copy(A.scissor),ot=A.scissorTest}else B.copy(Gt).multiplyScalar(Z).floor(),ut.copy(ee).multiplyScalar(Z).floor(),ot=Me;if(it!==0&&(K=hr),wt.bindFramebuffer(F.FRAMEBUFFER,K)&&rt&&wt.drawBuffers(A,K),wt.viewport(B),wt.scissor(ut),wt.setScissorTest(ot),Mt){const Ut=qt.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ut.__webglTexture,it)}else if(Rt){const Ut=qt.get(A.texture),Jt=W;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ut.__webglTexture,it,Jt)}else if(A!==null&&it!==0){const Ut=qt.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ut.__webglTexture,it)}D=-1},this.readRenderTargetPixels=function(A,W,it,rt,K,Mt,Rt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=qt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Rt!==void 0&&(bt=bt[Rt]),bt){wt.bindFramebuffer(F.FRAMEBUFFER,bt);try{const Ut=A.texture,Jt=Ut.format,ne=Ut.type;if(!Kt.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-rt&&it>=0&&it<=A.height-K&&F.readPixels(W,it,rt,K,se.convert(Jt),se.convert(ne),Mt)}finally{const Ut=V!==null?qt.get(V).__webglFramebuffer:null;wt.bindFramebuffer(F.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(A,W,it,rt,K,Mt,Rt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=qt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Rt!==void 0&&(bt=bt[Rt]),bt){const Ut=A.texture,Jt=Ut.format,ne=Ut.type;if(!Kt.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-rt&&it>=0&&it<=A.height-K){wt.bindFramebuffer(F.FRAMEBUFFER,bt);const Zt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Zt),F.bufferData(F.PIXEL_PACK_BUFFER,Mt.byteLength,F.STREAM_READ),F.readPixels(W,it,rt,K,se.convert(Jt),se.convert(ne),0);const Te=V!==null?qt.get(V).__webglFramebuffer:null;wt.bindFramebuffer(F.FRAMEBUFFER,Te);const Re=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await IE(F,Re,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Zt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Mt),F.deleteBuffer(Zt),F.deleteSync(Re),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,it=0){A.isTexture!==!0&&(js("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);const rt=Math.pow(2,-it),K=Math.floor(A.image.width*rt),Mt=Math.floor(A.image.height*rt),Rt=W!==null?W.x:0,bt=W!==null?W.y:0;U.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,it,0,0,Rt,bt,K,Mt),wt.unbindTexture()};const Cc=F.createFramebuffer(),Sl=F.createFramebuffer();this.copyTextureToTexture=function(A,W,it=null,rt=null,K=0,Mt=null){A.isTexture!==!0&&(js("WebGLRenderer: copyTextureToTexture function signature has changed."),rt=arguments[0]||null,A=arguments[1],W=arguments[2],Mt=arguments[3]||0,it=null),Mt===null&&(K!==0?(js("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Mt=K,K=0):Mt=0);let Rt,bt,Ut,Jt,ne,Zt,Te,Re,ke;const Ge=A.isCompressedTexture?A.mipmaps[Mt]:A.image;if(it!==null)Rt=it.max.x-it.min.x,bt=it.max.y-it.min.y,Ut=it.isBox3?it.max.z-it.min.z:1,Jt=it.min.x,ne=it.min.y,Zt=it.isBox3?it.min.z:0;else{const fn=Math.pow(2,-K);Rt=Math.floor(Ge.width*fn),bt=Math.floor(Ge.height*fn),A.isDataArrayTexture?Ut=Ge.depth:A.isData3DTexture?Ut=Math.floor(Ge.depth*fn):Ut=1,Jt=0,ne=0,Zt=0}rt!==null?(Te=rt.x,Re=rt.y,ke=rt.z):(Te=0,Re=0,ke=0);const me=se.convert(W.format),Wt=se.convert(W.type);let Qe;W.isData3DTexture?(U.setTexture3D(W,0),Qe=F.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(U.setTexture2DArray(W,0),Qe=F.TEXTURE_2D_ARRAY):(U.setTexture2D(W,0),Qe=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const xe=F.getParameter(F.UNPACK_ROW_LENGTH),vn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),je=F.getParameter(F.UNPACK_SKIP_PIXELS),Ln=F.getParameter(F.UNPACK_SKIP_ROWS),ba=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ge.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ge.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Jt),F.pixelStorei(F.UNPACK_SKIP_ROWS,ne),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Zt);const Ve=A.isDataArrayTexture||A.isData3DTexture,an=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const fn=qt.get(A),En=qt.get(W),Tn=qt.get(fn.__renderTarget),jr=qt.get(En.__renderTarget);wt.bindFramebuffer(F.READ_FRAMEBUFFER,Tn.__webglFramebuffer),wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,jr.__webglFramebuffer);for(let Ji=0;Ji<Ut;Ji++)Ve&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,qt.get(A).__webglTexture,K,Zt+Ji),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,qt.get(W).__webglTexture,Mt,ke+Ji)),F.blitFramebuffer(Jt,ne,Rt,bt,Te,Re,Rt,bt,F.DEPTH_BUFFER_BIT,F.NEAREST);wt.bindFramebuffer(F.READ_FRAMEBUFFER,null),wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(K!==0||A.isRenderTargetTexture||qt.has(A)){const fn=qt.get(A),En=qt.get(W);wt.bindFramebuffer(F.READ_FRAMEBUFFER,Cc),wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Sl);for(let Tn=0;Tn<Ut;Tn++)Ve?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,fn.__webglTexture,K,Zt+Tn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,fn.__webglTexture,K),an?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,En.__webglTexture,Mt,ke+Tn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,En.__webglTexture,Mt),K!==0?F.blitFramebuffer(Jt,ne,Rt,bt,Te,Re,Rt,bt,F.COLOR_BUFFER_BIT,F.NEAREST):an?F.copyTexSubImage3D(Qe,Mt,Te,Re,ke+Tn,Jt,ne,Rt,bt):F.copyTexSubImage2D(Qe,Mt,Te,Re,Jt,ne,Rt,bt);wt.bindFramebuffer(F.READ_FRAMEBUFFER,null),wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else an?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(Qe,Mt,Te,Re,ke,Rt,bt,Ut,me,Wt,Ge.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(Qe,Mt,Te,Re,ke,Rt,bt,Ut,me,Ge.data):F.texSubImage3D(Qe,Mt,Te,Re,ke,Rt,bt,Ut,me,Wt,Ge):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Mt,Te,Re,Rt,bt,me,Wt,Ge.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Mt,Te,Re,Ge.width,Ge.height,me,Ge.data):F.texSubImage2D(F.TEXTURE_2D,Mt,Te,Re,Rt,bt,me,Wt,Ge);F.pixelStorei(F.UNPACK_ROW_LENGTH,xe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,vn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,je),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ln),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ba),Mt===0&&W.generateMipmaps&&F.generateMipmap(Qe),wt.unbindTexture()},this.copyTextureToTexture3D=function(A,W,it=null,rt=null,K=0){return A.isTexture!==!0&&(js("WebGLRenderer: copyTextureToTexture3D function signature has changed."),it=arguments[0]||null,rt=arguments[1]||null,A=arguments[2],W=arguments[3],K=arguments[4]||0),js('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,it,rt,K)},this.initRenderTarget=function(A){qt.get(A).__webglFramebuffer===void 0&&U.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?U.setTextureCube(A,0):A.isData3DTexture?U.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?U.setTexture2DArray(A,0):U.setTexture2D(A,0),wt.unbindTexture()},this.resetState=function(){G=0,z=0,V=null,wt.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ya}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const a=this.getContext();a.drawingBufferColorspace=we._getDrawingBufferColorSpace(n),a.unpackColorSpace=we._getUnpackColorSpace()}}const ox={waiting:"#69a0ff",pass:"#42e4b0",reject:"#ff718b",changed:"#bd91ff"},rC=["SOURCE","OPERATION","TERMINAL","RESULT"],sC=["Input collection","Process each value","Execute the stream","Final output"];function oC({operation:o,tokens:n,playing:a,onSelectToken:s}){const u=dn.useRef(null),[f,h]=dn.useState(1);dn.useEffect(()=>{const _=u.current;if(!_)return;const v=new lT;v.background=new de("#080f1d"),v.fog=new Ip("#080f1d",18,48);const g=new oi(42,1,.1,100);g.position.set(0,5.5,20),g.lookAt(0,0,0);const S=new aC({antialias:!0,alpha:!1});S.setPixelRatio(Math.min(window.devicePixelRatio,2)),S.outputColorSpace=si,S.toneMapping=hx,S.toneMappingExposure=1.15,S.domElement.style.position="absolute",S.domElement.style.inset="0",S.domElement.style.width="100%",S.domElement.style.height="100%",S.domElement.style.zIndex="0",_.appendChild(S.domElement),v.add(new gT(10140415,1120812,1.8));const M=new zv(3571199,45,30);M.position.set(-4,7,5),v.add(M);const b=new zv(9063679,38,24);b.position.set(5,2,-2),v.add(b);const R=new Di(new _l(60,45),new dT({color:660518,metalness:.35,roughness:.58}));R.rotation.x=-Math.PI/2,R.position.y=-2.6,v.add(R);const y=new yT(48,40,2378620,1518665);y.position.y=-2.57,v.add(y);const x=[];for(let ht=0;ht<240;ht+=1)x.push((Math.random()-.5)*32,Math.random()*11-.2,(Math.random()-.5)*18-4);const P=new Ni;P.setAttribute("position",new vi(x,3));const O=new Dv(P,new Bx({color:8825312,size:.035,transparent:!0,opacity:.6}));v.add(O);let N=0,Q=0,G=!1,z=0,V=0,D=0,C=0,B=1;const ut=()=>{const ht=_.clientWidth||900,St=_.clientHeight||480;S.setSize(ht,St,!1),g.aspect=ht/St,g.updateProjectionMatrix()},ot=new ResizeObserver(ut);ot.observe(_),ut();const vt=ht=>{ht.target.closest('[data-pipeline-ui="true"]')||(G=!0,z=ht.clientX,V=ht.clientY)},pt=ht=>{G&&(D+=(ht.clientX-z)*.004,C+=(ht.clientY-V)*.002,C=Math.max(-.22,Math.min(.28,C)),z=ht.clientX,V=ht.clientY)},k=()=>{G=!1},at=ht=>{ht.target.closest('[data-pipeline-ui="true"]')||(ht.preventDefault(),B=Math.max(.8,Math.min(1.35,B+(ht.deltaY>0?-.04:.04))),g.position.set(0,5.5/B,20/B),g.lookAt(0,0,0))};_.addEventListener("pointerdown",vt),window.addEventListener("pointermove",pt),window.addEventListener("pointerup",k),_.addEventListener("wheel",at,{passive:!1});const Z=()=>{Q=requestAnimationFrame(Z),N+=.008,O.rotation.y=D+Math.sin(N*.5)*(a?.025:.008),O.rotation.x=C,S.render(v,g)};return Z(),()=>{cancelAnimationFrame(Q),ot.disconnect(),_.removeEventListener("pointerdown",vt),window.removeEventListener("pointermove",pt),window.removeEventListener("pointerup",k),_.removeEventListener("wheel",at),S.dispose(),v.traverse(ht=>{if(ht instanceof Di||ht instanceof Dv){ht.geometry.dispose();const St=ht.material;Array.isArray(St)?St.forEach(Gt=>Gt.dispose()):St.dispose()}}),S.domElement.parentElement===_&&_.removeChild(S.domElement)}},[a]);const d=Math.max(.8,Math.min(1.25,f)),m=o.replace(/\(\)$/,"").toUpperCase();return st.jsxs("div",{className:"scene-wrap",style:{overflow:"hidden",background:"#080f1d"},children:[st.jsxs("div",{ref:u,className:"three-host",style:{position:"relative",height:"min(540px, 62vw)",minHeight:410,overflow:"hidden",touchAction:"pan-y",background:"radial-gradient(ellipse at 50% 40%, #132647 0%, #080f1d 72%)"},children:[st.jsx("div",{style:{position:"absolute",inset:0,zIndex:1,pointerEvents:"none",background:"linear-gradient(180deg, rgba(7,14,27,.15), rgba(7,14,27,.06) 50%, rgba(7,14,27,.4))"}}),st.jsxs("div",{"data-pipeline-ui":"true",style:{position:"absolute",zIndex:2,inset:0,display:"flex",flexDirection:"column",justifyContent:"center",padding:"42px clamp(12px, 3vw, 38px) 24px",transform:`scale(${d})`,transformOrigin:"center center",transition:"transform 180ms ease",pointerEvents:"none"},children:[st.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",alignItems:"center",gap:0,width:"100%",position:"relative"},children:rC.map((_,v)=>{const g=v===1,S=v===3,M=v===1?m:_;return st.jsxs("div",{style:{position:"relative",minWidth:0,display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[st.jsxs("div",{style:{width:"100%",maxWidth:220,minHeight:126,boxSizing:"border-box",borderRadius:16,padding:"17px 8px 14px",background:g?"linear-gradient(150deg, rgba(32,82,171,.97), rgba(13,31,64,.98))":S?"linear-gradient(150deg, rgba(14,65,67,.97), rgba(10,29,40,.98))":"linear-gradient(150deg, rgba(20,37,62,.98), rgba(9,20,37,.98))",border:`1px solid ${g?"#78aaff":S?"#43dcb4":"#466387"}`,boxShadow:g?"0 0 0 1px rgba(86,145,255,.16), 0 12px 34px rgba(28,91,220,.28)":S?"0 12px 30px rgba(23,194,155,.12)":"0 12px 28px rgba(0,0,0,.24)",textAlign:"center",position:"relative",overflow:"hidden"},children:[st.jsxs("div",{style:{font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",color:g?"#b9d4ff":"#7e9bc3",letterSpacing:"1.6px",marginBottom:13},children:["STEP 0",v+1]}),st.jsx("div",{title:M,style:{color:"#f3f7ff",fontSize:"clamp(11px, 1.15vw, 16px)",lineHeight:1.25,fontWeight:800,letterSpacing:".25px",overflowWrap:"anywhere",textShadow:g?"0 0 18px rgba(120,170,255,.45)":"none"},children:M}),st.jsx("div",{style:{color:"#a4b8d6",fontSize:"clamp(9px, .85vw, 11px)",lineHeight:1.4,marginTop:8},children:sC[v]}),st.jsx("div",{style:{position:"absolute",left:12,right:12,bottom:0,height:3,borderRadius:3,background:g?"#70a5ff":S?"#42e4b0":"#29466c"}})]}),v<3&&st.jsx("div",{style:{position:"absolute",top:62,left:"calc(50% + 50px)",width:"calc(100% - 100px)",height:2,background:"linear-gradient(90deg, #527fb7, #8bb8ff)",boxShadow:"0 0 10px rgba(105,160,255,.45)",zIndex:-1}})]},_)})}),st.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:8,marginTop:26,color:"#91a9ce",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace",letterSpacing:".7px"},children:[st.jsx("span",{children:"DATA FLOW"}),st.jsxs("span",{children:[n.length," ELEMENT",n.length===1?"":"S"]})]}),st.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:10,alignItems:"center",justifyContent:"center",marginTop:18},children:n.map(_=>{const v=ox[_.status];return st.jsxs("div",{title:`${_.label} · ${_.status}`,style:{display:"flex",alignItems:"center",gap:9,maxWidth:"100%",padding:"9px 13px 9px 9px",borderRadius:999,background:"rgba(8,17,32,.96)",border:`1px solid ${v}`,boxShadow:`0 0 18px ${v}22`,color:"#f4f7ff",fontSize:12,fontWeight:700,lineHeight:1.2,overflowWrap:"anywhere",pointerEvents:s?"auto":"none",cursor:s?"pointer":"default"},onClick:()=>s==null?void 0:s(_.id),children:[st.jsx("span",{style:{width:19,height:19,borderRadius:"50%",flex:"0 0 auto",background:`radial-gradient(circle at 35% 30%, #ffffff, ${v} 45%, ${v}88)`,boxShadow:`0 0 12px ${v}88`}}),st.jsx("span",{children:_.label}),st.jsx("span",{style:{color:v,font:"9px ui-monospace, SFMono-Regular, Menlo, monospace",textTransform:"uppercase"},children:_.status})]},_.id)})})]}),st.jsx("div",{style:{position:"absolute",zIndex:3,top:12,left:14,color:"#8da8d2",font:"9px ui-monospace, SFMono-Regular, Menlo, monospace",letterSpacing:"1px",pointerEvents:"none"},children:"3D DATA JOURNEY · SCENE DEPTH ACTIVE"}),st.jsxs("div",{"data-pipeline-ui":"true",style:{position:"absolute",zIndex:3,right:12,bottom:12,display:"flex",alignItems:"center",gap:7},children:[st.jsx("button",{type:"button",onClick:()=>h(_=>Math.max(.8,+(_-.1).toFixed(2))),"aria-label":"Zoom out",style:Fd,children:"−"}),st.jsxs("span",{style:{color:"#9ab0d1",fontSize:10,minWidth:38,textAlign:"center"},children:[Math.round(d*100),"%"]}),st.jsx("button",{type:"button",onClick:()=>h(_=>Math.min(1.25,+(_+.1).toFixed(2))),"aria-label":"Zoom in",style:Fd,children:"+"}),st.jsx("button",{type:"button",onClick:()=>h(1),style:Fd,children:"Reset"})]})]}),st.jsxs("div",{className:"scene-legend",style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:16,padding:"12px 15px",borderTop:"1px solid #20314b",background:"#0b1424"},children:[[["waiting","Waiting"],["pass","Passed"],["reject","Rejected"],["changed","Transformed"]].map(([_,v])=>st.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:7,color:"#a0b3d0",font:"10px ui-monospace, SFMono-Regular, Menlo, monospace"},children:[st.jsx("i",{style:{width:7,height:7,borderRadius:"50%",display:"inline-block",background:ox[_]}}),v]},_)),st.jsx("span",{style:{marginLeft:"auto",color:"#718cb4",fontSize:10},children:"React UI + Three.js depth scene"})]})]})}const Fd={minWidth:29,height:28,borderRadius:6,border:"1px solid #36547c",background:"#12213a",color:"#e6efff",fontSize:12,cursor:"pointer"},dc=[...["Collection.stream()","Arrays.stream(array)","Stream.of(values)","Stream.builder()","parallelStream()","IntStream.range()","IntStream.rangeClosed()"].map((o,n)=>({key:["create","arrays","of","builder","parallel","range","rangeClosed"][n],name:o,desc:"Create a stream source",group:"Create streams"})),...["filter()","map() uppercase","map() lowercase","mapToInt()","flatMap()","distinct()","sorted()","peek()","limit()","skip()"].map((o,n)=>({key:["filter","mapUpper","mapLower","mapToInt","flatMap","distinct","sorted","peek","limit","skip"][n],name:o,desc:["Keep matching values","Transform each value","Transform each value","Convert values to lengths","Flatten nested values","Remove duplicates","Sort values","Inspect elements","Keep first N","Skip first N"][n],group:"Intermediate operations"})),...["forEach()","forEachOrdered()","toList()","toSet()","collect()","count()","anyMatch()","allMatch()","noneMatch()","findFirst()","findAny()","reduce()"].map((o,n)=>({key:["forEach","forEachOrdered","toList","toSet","collect","count","anyMatch","allMatch","noneMatch","findFirst","findAny","reduce"][n],name:o,desc:"Terminal operation",group:"Terminal operations"})),...["IntStream","LongStream","DoubleStream"].map((o,n)=>({key:["intStream","longStream","doubleStream"][n],name:o,desc:"Primitive numeric stream",group:"Primitive streams"})),...["joining()","groupingBy()","partitioningBy()","counting()","summarizingInt()"].map((o,n)=>({key:["joining","groupingBy","partitioningBy","counting","summarizingInt"][n],name:o,desc:"Collector operation",group:"Collectors"})),...["Lazy evaluation","Pipeline","Non-interfering","Stateless"].map((o,n)=>({key:["lazy","pipeline","nonInterfering","stateless"][n],name:o,desc:"Stream concept",group:"Characteristics"}))],lx="apple, ant, banana, apricot, berry";function lC(o,n,a,s){const u=f=>({startsA:f.toLowerCase().startsWith("a"),startsB:f.toLowerCase().startsWith("b"),containsA:f.toLowerCase().includes("a"),longer3:f.length>3,length5:f.length>=5,endsY:f.toLowerCase().endsWith("y")})[a]??!0;switch(n){case"filter":return o.filter(u);case"mapUpper":return o.map(f=>f.toUpperCase());case"mapLower":return o.map(f=>f.toLowerCase());case"mapToInt":return o.map(f=>String(f.length));case"flatMap":return o.flatMap(f=>f.split(/\s+/).filter(Boolean));case"distinct":case"toSet":return[...new Set(o)];case"sorted":return[...o].sort((f,h)=>f.localeCompare(h));case"limit":return o.slice(0,Math.max(0,s));case"skip":return o.slice(Math.max(0,s));case"count":case"counting":return[String(o.length)];case"joining":return[o.join(", ")];case"anyMatch":return[String(o.some(u))];case"allMatch":return[String(o.every(u))];case"noneMatch":return[String(o.every(f=>!u(f)))];case"findFirst":case"findAny":return o.slice(0,1);case"reduce":return[o.join("")];case"groupingBy":{const f=new Map;return o.forEach(h=>f.set(h.length,[...f.get(h.length)||[],h])),[...f].map(([h,d])=>`${h}: [${d.join(", ")}]`)}case"partitioningBy":return[`true: [${o.filter(f=>f.startsWith("a")).join(", ")}]`,`false: [${o.filter(f=>!f.startsWith("a")).join(", ")}]`];default:return o}}function uC(){const[o,n]=dn.useState("filter"),[a,s]=dn.useState(lx),[u,f]=dn.useState("startsA"),[h,d]=dn.useState(2),[m,_]=dn.useState(-1),[v,g]=dn.useState(!1),S=dn.useMemo(()=>a.split(",").map(x=>x.trim()).filter(Boolean),[a]),M=dc.find(x=>x.key===o),b=dn.useMemo(()=>lC(S,o,u,h),[S,o,u,h]);dn.useEffect(()=>{_(-1),g(!1)},[o,a,u,h]),dn.useEffect(()=>{if(!v)return;const x=window.setInterval(()=>_(P=>P>=S.length-1?(g(!1),P):P+1),700);return()=>clearInterval(x)},[v,S.length]);const R=S.map((x,P)=>({id:P,label:x,status:m<0||P>m?"waiting":o==="filter"&&!{startsA:x.toLowerCase().startsWith("a"),startsB:x.toLowerCase().startsWith("b"),containsA:x.toLowerCase().includes("a"),longer3:x.length>3,length5:x.length>=5,endsY:x.toLowerCase().endsWith("y")}[u]?"reject":["mapUpper","mapLower","mapToInt","flatMap"].includes(o)?"changed":"pass",progress:m<0?0:Math.min(1,P<=m?(P+1)/Math.max(S.length,1):0)})),y=()=>{s(lx),n("filter"),f("startsA"),d(2),_(-1),g(!1)};return st.jsxs("main",{className:"app-shell",children:[st.jsxs("header",{className:"topbar",children:[st.jsxs("div",{className:"brand",children:[st.jsx("span",{className:"brand-icon",children:st.jsx(GM,{size:23})}),st.jsxs("span",{children:["STREAM",st.jsx("span",{className:"brand-accent",children:"VERSE"}),st.jsx("small",{children:"JAVA STREAM API · INTERACTIVE 3D LAB"})]})]}),st.jsxs("div",{className:"top-status",children:[st.jsx("i",{})," THREE.JS RENDERER ",st.jsx("b",{children:"LIVE"})]})]}),st.jsxs("section",{className:"hero",children:[st.jsxs("div",{className:"eyebrow",children:[st.jsx(XM,{size:14})," VISUAL LEARNING ENVIRONMENT"]}),st.jsxs("h1",{children:["Watch your data",st.jsx("br",{}),st.jsx("em",{children:"flow in 3D."})]}),st.jsx("p",{children:"Explore Java Stream API operations as data moves through a live, rotatable three-dimensional pipeline."}),st.jsxs("div",{className:"hero-stats",children:[st.jsxs("span",{children:[st.jsx("b",{children:"40+"})," stream concepts"]}),st.jsxs("span",{children:[st.jsx("b",{children:"3D"})," WebGL scene"]}),st.jsxs("span",{children:[st.jsx("b",{children:"STEP"})," through execution"]})]})]}),st.jsxs("section",{className:"workspace",children:[st.jsxs("aside",{className:"control-panel panel",children:[st.jsx("div",{className:"section-kicker",children:"01 / CONFIGURE"}),st.jsx("h2",{children:"Build your stream"}),st.jsx("label",{children:"OPERATION"}),st.jsx("select",{value:o,onChange:x=>n(x.target.value),children:dc.map(x=>st.jsxs("option",{value:x.key,children:[x.name," — ",x.desc]},x.key))}),st.jsxs("label",{children:["INPUT VALUES ",st.jsx("small",{children:"comma-separated"})]}),st.jsx("textarea",{value:a,onChange:x=>s(x.target.value),rows:3}),o==="filter"||["anyMatch","allMatch","noneMatch"].includes(o)?st.jsxs(st.Fragment,{children:[st.jsx("label",{children:"FILTER CONDITION"}),st.jsxs("select",{value:u,onChange:x=>f(x.target.value),children:[st.jsx("option",{value:"startsA",children:"Starts with A"}),st.jsx("option",{value:"startsB",children:"Starts with B"}),st.jsx("option",{value:"containsA",children:"Contains A"}),st.jsx("option",{value:"longer3",children:"Length greater than 3"}),st.jsx("option",{value:"length5",children:"Length at least 5"}),st.jsx("option",{value:"endsY",children:"Ends with Y"})]})]}):null,["limit","skip"].includes(o)?st.jsxs(st.Fragment,{children:[st.jsx("label",{children:"N VALUE"}),st.jsx("input",{type:"number",min:"0",value:h,onChange:x=>d(Math.max(0,Number(x.target.value)))})]}):null,st.jsxs("div",{className:"button-row",children:[st.jsxs("button",{className:"primary",onClick:()=>{_(-1),g(!1)},children:[st.jsx(WM,{size:15})," Restart"]}),st.jsxs("button",{onClick:()=>_(x=>Math.min(S.length-1,x+1)),disabled:m>=S.length-1,children:[st.jsx(jM,{size:15})," Next"]}),st.jsxs("button",{onClick:()=>g(x=>!x),disabled:!S.length,children:[v?st.jsx(kM,{size:15}):st.jsx(qM,{size:15})," ",v?"Pause":"Play"]}),st.jsx("button",{className:"icon-btn",title:"Reset all",onClick:y,children:st.jsx(YM,{size:15})})]}),st.jsxs("div",{className:"progress-wrap",children:[st.jsxs("div",{className:"progress-label",children:[st.jsx("span",{children:"PROCESSING"}),st.jsxs("b",{children:[Math.max(0,m+1)," / ",S.length]})]}),st.jsx("div",{className:"progress",children:st.jsx("span",{style:{width:`${S.length?Math.max(0,m+1)/S.length*100:0}%`}})})]}),st.jsxs("div",{className:"selected-info",children:[st.jsx("span",{className:"live-dot"}),st.jsxs("div",{children:[st.jsx("b",{children:M.name}),st.jsxs("small",{children:[M.group," · ",M.desc]})]})]})]}),st.jsxs("section",{className:"visual-panel panel",children:[st.jsxs("div",{className:"panel-heading",children:[st.jsxs("div",{children:[st.jsx("div",{className:"section-kicker",children:"02 / LIVE RENDER"}),st.jsxs("h2",{children:["Stream pipeline ",st.jsx("span",{className:"live-pill",children:"LIVE"})]})]}),st.jsx("div",{className:"drag-label",children:"↗ DRAG SCENE TO ROTATE"})]}),st.jsx(oC,{operation:M.name,tokens:R,playing:v}),st.jsxs("div",{className:"scene-caption",children:[st.jsx("span",{children:"SCENE 01"}),st.jsx("span",{children:"Perspective camera · Metallic meshes · Dynamic lighting"}),st.jsx("span",{children:"WEBGL"})]})]})]}),st.jsxs("section",{className:"bottom-grid",children:[st.jsxs("section",{className:"panel result-panel",children:[st.jsx("div",{className:"section-kicker",children:"03 / OUTPUT"}),st.jsx("h2",{children:"Result stream"}),st.jsx("div",{className:"result-chips",children:b.length?b.map((x,P)=>st.jsx("span",{children:x},P)):st.jsx("small",{children:"Empty stream"})}),st.jsx("p",{children:"Final output is calculated from the input and selected operation. Use Next or Play to animate the elements through the scene."})]}),st.jsxs("section",{className:"panel code-panel",children:[st.jsxs("div",{className:"section-kicker",children:[st.jsx(VM,{size:13})," 04 / JAVA REFERENCE"]}),st.jsx("h2",{children:"Equivalent Java idea"}),st.jsx("pre",{children:`List<String> words = List.of(${S.map(x=>JSON.stringify(x)).join(", ")});\\n\\nwords.stream()\\n    .${o==="mapUpper"?"map(String::toUpperCase)":o==="mapLower"?"map(String::toLowerCase)":o==="mapToInt"?"mapToInt(String::length)":o==="distinct"?"distinct()":o==="sorted"?"sorted()":o==="limit"||o==="skip"?`${o}(${h})`:o==="count"?"count()":o==="toSet"?"collect(Collectors.toSet())":o==="joining"?'collect(Collectors.joining(", "))':o==="findFirst"?"findFirst()":o==="reduce"?'reduce("", String::concat)':o==="filter"?`filter(w -> ${u==="startsA"?'w.startsWith("a")':u==="startsB"?'w.startsWith("b")':u==="containsA"?'w.contains("a")':u==="longer3"?"w.length() > 3":u==="length5"?"w.length() >= 5":'w.endsWith("y")'})`:"toList()"};`})]})]}),st.jsxs("section",{className:"panel catalog-panel",children:[st.jsxs("div",{className:"panel-heading",children:[st.jsxs("div",{children:[st.jsx("div",{className:"section-kicker",children:"05 / EXPLORE"}),st.jsx("h2",{children:"Stream function library"})]}),st.jsxs("span",{className:"catalog-count",children:[dc.length," CONCEPTS"]})]}),st.jsx("div",{className:"catalog-grid",children:["Create streams","Intermediate operations","Terminal operations","Primitive streams","Collectors","Characteristics"].map((x,P)=>st.jsxs("div",{className:"catalog-group",children:[st.jsxs("h3",{children:[st.jsxs("span",{children:["0",P+1]}),x]}),dc.filter(O=>O.group===x).map(O=>st.jsxs("button",{className:o===O.key?"active":"",onClick:()=>n(O.key),children:[st.jsx("span",{children:O.name}),st.jsx("small",{children:O.desc})]},O.key))]},x))})]}),st.jsxs("footer",{children:["STREAMVERSE ",st.jsx("span",{children:"Built with React · TypeScript · Three.js"}),st.jsx("span",{children:"Drag the 3D scene to explore the pipeline"})]})]})}IM.createRoot(document.getElementById("root")).render(st.jsx(DM.StrictMode,{children:st.jsx(uC,{})}));
