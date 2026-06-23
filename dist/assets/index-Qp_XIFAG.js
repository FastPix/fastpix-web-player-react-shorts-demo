import{r as wh,a as Xv}from"./vendor-DS5UYnvf.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))u(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&u(h)}).observe(document,{childList:!0,subtree:!0});function r(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function u(c){if(c.ep)return;c.ep=!0;const f=r(c);fetch(c.href,f)}})();var su={exports:{}},en={};var Op;function Iv(){if(Op)return en;Op=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function r(u,c,f){var h=null;if(f!==void 0&&(h=""+f),c.key!==void 0&&(h=""+c.key),"key"in c){f={};for(var v in c)v!=="key"&&(f[v]=c[v])}else f=c;return c=f.ref,{$$typeof:e,type:u,key:h,ref:c!==void 0?c:null,props:f}}return en.Fragment=n,en.jsx=r,en.jsxs=r,en}var Np;function Pv(){return Np||(Np=1,su.exports=Iv()),su.exports}var z=Pv(),F=wh(),uu={exports:{}},an={},cu={exports:{}},du={};var Vp;function Kv(){return Vp||(Vp=1,(function(e){function n(T,H){var P=T.length;T.push(H);t:for(;0<P;){var yt=P-1>>>1,dt=T[yt];if(0<c(dt,H))T[yt]=H,T[P]=dt,P=yt;else break t}}function r(T){return T.length===0?null:T[0]}function u(T){if(T.length===0)return null;var H=T[0],P=T.pop();if(P!==H){T[0]=P;t:for(var yt=0,dt=T.length,Ft=dt>>>1;yt<Ft;){var Et=2*(yt+1)-1,ft=T[Et],Rt=Et+1,N=T[Rt];if(0>c(ft,P))Rt<dt&&0>c(N,ft)?(T[yt]=N,T[Rt]=P,yt=Rt):(T[yt]=ft,T[Et]=P,yt=Et);else if(Rt<dt&&0>c(N,P))T[yt]=N,T[Rt]=P,yt=Rt;else break t}}return H}function c(T,H){var P=T.sortIndex-H.sortIndex;return P!==0?P:T.id-H.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;e.unstable_now=function(){return f.now()}}else{var h=Date,v=h.now();e.unstable_now=function(){return h.now()-v}}var B=[],R=[],O=1,A=null,M=3,G=!1,Y=!1,U=!1,Q=!1,x=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function q(T){for(var H=r(R);H!==null;){if(H.callback===null)u(R);else if(H.startTime<=T)u(R),H.sortIndex=H.expirationTime,n(B,H);else break;H=r(R)}}function I(T){if(U=!1,q(T),!Y)if(r(B)!==null)Y=!0,J||(J=!0,Dt());else{var H=r(R);H!==null&&ot(I,H.startTime-T)}}var J=!1,tt=-1,vt=5,Bt=-1;function ie(){return Q?!0:!(e.unstable_now()-Bt<vt)}function zt(){if(Q=!1,J){var T=e.unstable_now();Bt=T;var H=!0;try{t:{Y=!1,U&&(U=!1,E(tt),tt=-1),G=!0;var P=M;try{e:{for(q(T),A=r(B);A!==null&&!(A.expirationTime>T&&ie());){var yt=A.callback;if(typeof yt=="function"){A.callback=null,M=A.priorityLevel;var dt=yt(A.expirationTime<=T);if(T=e.unstable_now(),typeof dt=="function"){A.callback=dt,q(T),H=!0;break e}A===r(B)&&u(B),q(T)}else u(B);A=r(B)}if(A!==null)H=!0;else{var Ft=r(R);Ft!==null&&ot(I,Ft.startTime-T),H=!1}}break t}finally{A=null,M=P,G=!1}H=void 0}}finally{H?Dt():J=!1}}}var Dt;if(typeof _=="function")Dt=function(){_(zt)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,et=Z.port2;Z.port1.onmessage=zt,Dt=function(){et.postMessage(null)}}else Dt=function(){x(zt,0)};function ot(T,H){tt=x(function(){T(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):vt=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return M},e.unstable_next=function(T){switch(M){case 1:case 2:case 3:var H=3;break;default:H=M}var P=M;M=H;try{return T()}finally{M=P}},e.unstable_requestPaint=function(){Q=!0},e.unstable_runWithPriority=function(T,H){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var P=M;M=T;try{return H()}finally{M=P}},e.unstable_scheduleCallback=function(T,H,P){var yt=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?yt+P:yt):P=yt,T){case 1:var dt=-1;break;case 2:dt=250;break;case 5:dt=1073741823;break;case 4:dt=1e4;break;default:dt=5e3}return dt=P+dt,T={id:O++,callback:H,priorityLevel:T,startTime:P,expirationTime:dt,sortIndex:-1},P>yt?(T.sortIndex=P,n(R,T),r(B)===null&&T===r(R)&&(U?(E(tt),tt=-1):U=!0,ot(I,P-yt))):(T.sortIndex=dt,n(B,T),Y||G||(Y=!0,J||(J=!0,Dt()))),T},e.unstable_shouldYield=ie,e.unstable_wrapCallback=function(T){var H=M;return function(){var P=M;M=H;try{return T.apply(this,arguments)}finally{M=P}}}})(du)),du}var qp;function Fv(){return qp||(qp=1,cu.exports=Kv()),cu.exports}var Up;function Jv(){if(Up)return an;Up=1;var e=Fv(),n=wh(),r=Xv();function u(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)a+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){var a=t,i=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(i=a.return),t=a.return;while(t)}return a.tag===3?i:null}function h(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function v(t){if(t.tag===31){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function B(t){if(f(t)!==t)throw Error(u(188))}function R(t){var a=t.alternate;if(!a){if(a=f(t),a===null)throw Error(u(188));return a!==t?null:t}for(var i=t,l=a;;){var o=i.return;if(o===null)break;var s=o.alternate;if(s===null){if(l=o.return,l!==null){i=l;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===i)return B(o),t;if(s===l)return B(o),a;s=s.sibling}throw Error(u(188))}if(i.return!==l.return)i=o,l=s;else{for(var d=!1,p=o.child;p;){if(p===i){d=!0,i=o,l=s;break}if(p===l){d=!0,l=o,i=s;break}p=p.sibling}if(!d){for(p=s.child;p;){if(p===i){d=!0,i=s,l=o;break}if(p===l){d=!0,l=s,i=o;break}p=p.sibling}if(!d)throw Error(u(189))}}if(i.alternate!==l)throw Error(u(190))}if(i.tag!==3)throw Error(u(188));return i.stateNode.current===i?t:a}function O(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=O(t),a!==null)return a;t=t.sibling}return null}var A=Object.assign,M=Symbol.for("react.element"),G=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),E=Symbol.for("react.consumer"),_=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),tt=Symbol.for("react.memo"),vt=Symbol.for("react.lazy"),Bt=Symbol.for("react.activity"),ie=Symbol.for("react.memo_cache_sentinel"),zt=Symbol.iterator;function Dt(t){return t===null||typeof t!="object"?null:(t=zt&&t[zt]||t["@@iterator"],typeof t=="function"?t:null)}var Z=Symbol.for("react.client.reference");function et(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Z?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case x:return"Profiler";case Q:return"StrictMode";case I:return"Suspense";case J:return"SuspenseList";case Bt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Y:return"Portal";case _:return t.displayName||"Context";case E:return(t._context.displayName||"Context")+".Consumer";case q:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case tt:return a=t.displayName||null,a!==null?a:et(t.type)||"Memo";case vt:a=t._payload,t=t._init;try{return et(t(a))}catch{}}return null}var ot=Array.isArray,T=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},yt=[],dt=-1;function Ft(t){return{current:t}}function Et(t){0>dt||(t.current=yt[dt],yt[dt]=null,dt--)}function ft(t,a){dt++,yt[dt]=t.current,t.current=a}var Rt=Ft(null),N=Ft(null),j=Ft(null),Ht=Ft(null);function _t(t,a){switch(ft(j,a),ft(N,t),ft(Rt,null),a.nodeType){case 9:case 11:t=(t=a.documentElement)&&(t=t.namespaceURI)?np(t):0;break;default:if(t=a.tagName,a=a.namespaceURI)a=np(a),t=op(a,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Et(Rt),ft(Rt,t)}function It(){Et(Rt),Et(N),Et(j)}function Oe(t){t.memoizedState!==null&&ft(Ht,t);var a=Rt.current,i=op(a,t.type);a!==i&&(ft(N,t),ft(Rt,i))}function Be(t){N.current===t&&(Et(Rt),Et(N)),Ht.current===t&&(Et(Ht),Jl._currentValue=P)}var Ye,ba;function ne(t){if(Ye===void 0)try{throw Error()}catch(i){var a=i.stack.trim().match(/\n( *(at )?)/);Ye=a&&a[1]||"",ba=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ye+t+ba}var re=!1;function Ne(t,a){if(!t||re)return"";re=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var L=function(){throw Error()};if(Object.defineProperty(L.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(L,[])}catch(w){var S=w}Reflect.construct(t,[],L)}else{try{L.call()}catch(w){S=w}t.call(L.prototype)}}else{try{throw Error()}catch(w){S=w}(L=t())&&typeof L.catch=="function"&&L.catch(function(){})}}catch(w){if(w&&S&&typeof w.stack=="string")return[w.stack,S.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=l.DetermineComponentFrameRoot(),d=s[0],p=s[1];if(d&&p){var m=d.split(`
`),C=p.split(`
`);for(o=l=0;l<m.length&&!m[l].includes("DetermineComponentFrameRoot");)l++;for(;o<C.length&&!C[o].includes("DetermineComponentFrameRoot");)o++;if(l===m.length||o===C.length)for(l=m.length-1,o=C.length-1;1<=l&&0<=o&&m[l]!==C[o];)o--;for(;1<=l&&0<=o;l--,o--)if(m[l]!==C[o]){if(l!==1||o!==1)do if(l--,o--,0>o||m[l]!==C[o]){var k=`
`+m[l].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=l&&0<=o);break}}}finally{re=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?ne(i):""}function zu(t,a){switch(t.tag){case 26:case 27:case 5:return ne(t.type);case 16:return ne("Lazy");case 13:return t.child!==a&&a!==null?ne("Suspense Fallback"):ne("Suspense");case 19:return ne("SuspenseList");case 0:case 15:return Ne(t.type,!1);case 11:return Ne(t.type.render,!1);case 1:return Ne(t.type,!0);case 31:return ne("Activity");default:return""}}function cn(t){try{var a="",i=null;do a+=zu(t,i),i=t,t=t.return;while(t);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Io=Object.prototype.hasOwnProperty,Po=e.unstable_scheduleCallback,Ko=e.unstable_cancelCallback,Tm=e.unstable_shouldYield,Bm=e.unstable_requestPaint,me=e.unstable_now,Em=e.unstable_getCurrentPriorityLevel,Ou=e.unstable_ImmediatePriority,Nu=e.unstable_UserBlockingPriority,dn=e.unstable_NormalPriority,_m=e.unstable_LowPriority,Vu=e.unstable_IdlePriority,km=e.log,Am=e.unstable_setDisableYieldValue,ul=null,ye=null;function ga(t){if(typeof km=="function"&&Am(t),ye&&typeof ye.setStrictMode=="function")try{ye.setStrictMode(ul,t)}catch{}}var ve=Math.clz32?Math.clz32:Lm,Dm=Math.log,Mm=Math.LN2;function Lm(t){return t>>>=0,t===0?32:31-(Dm(t)/Mm|0)|0}var fn=256,pn=262144,hn=4194304;function Fa(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function mn(t,a,i){var l=t.pendingLanes;if(l===0)return 0;var o=0,s=t.suspendedLanes,d=t.pingedLanes;t=t.warmLanes;var p=l&134217727;return p!==0?(l=p&~s,l!==0?o=Fa(l):(d&=p,d!==0?o=Fa(d):i||(i=p&~t,i!==0&&(o=Fa(i))))):(p=l&~s,p!==0?o=Fa(p):d!==0?o=Fa(d):i||(i=l&~t,i!==0&&(o=Fa(i)))),o===0?0:a!==0&&a!==o&&(a&s)===0&&(s=o&-o,i=a&-a,s>=i||s===32&&(i&4194048)!==0)?a:o}function cl(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function Rm(t,a){switch(t){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qu(){var t=hn;return hn<<=1,(hn&62914560)===0&&(hn=4194304),t}function Fo(t){for(var a=[],i=0;31>i;i++)a.push(t);return a}function dl(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Hm(t,a,i,l,o,s){var d=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var p=t.entanglements,m=t.expirationTimes,C=t.hiddenUpdates;for(i=d&~i;0<i;){var k=31-ve(i),L=1<<k;p[k]=0,m[k]=-1;var S=C[k];if(S!==null)for(C[k]=null,k=0;k<S.length;k++){var w=S[k];w!==null&&(w.lane&=-536870913)}i&=~L}l!==0&&Uu(t,l,0),s!==0&&o===0&&t.tag!==0&&(t.suspendedLanes|=s&~(d&~a))}function Uu(t,a,i){t.pendingLanes|=a,t.suspendedLanes&=~a;var l=31-ve(a);t.entangledLanes|=a,t.entanglements[l]=t.entanglements[l]|1073741824|i&261930}function ju(t,a){var i=t.entangledLanes|=a;for(t=t.entanglements;i;){var l=31-ve(i),o=1<<l;o&a|t[l]&a&&(t[l]|=a),i&=~o}}function Zu(t,a){var i=a&-a;return i=(i&42)!==0?1:Jo(i),(i&(t.suspendedLanes|a))!==0?0:i}function Jo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Wo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Yu(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:Ap(t.type))}function Gu(t,a){var i=H.p;try{return H.p=t,a()}finally{H.p=i}}var Ca=Math.random().toString(36).slice(2),Jt="__reactFiber$"+Ca,se="__reactProps$"+Ca,Ci="__reactContainer$"+Ca,$o="__reactEvents$"+Ca,zm="__reactListeners$"+Ca,Om="__reactHandles$"+Ca,Qu="__reactResources$"+Ca,fl="__reactMarker$"+Ca;function tr(t){delete t[Jt],delete t[se],delete t[$o],delete t[zm],delete t[Om]}function Si(t){var a=t[Jt];if(a)return a;for(var i=t.parentNode;i;){if(a=i[Ci]||i[Jt]){if(i=a.alternate,a.child!==null||i!==null&&i.child!==null)for(t=pp(t);t!==null;){if(i=t[Jt])return i;t=pp(t)}return a}t=i,i=t.parentNode}return null}function xi(t){if(t=t[Jt]||t[Ci]){var a=t.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return t}return null}function pl(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(u(33))}function wi(t){var a=t[Qu];return a||(a=t[Qu]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Pt(t){t[fl]=!0}var Xu=new Set,Iu={};function Ja(t,a){Ti(t,a),Ti(t+"Capture",a)}function Ti(t,a){for(Iu[t]=a,t=0;t<a.length;t++)Xu.add(a[t])}var Nm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Pu={},Ku={};function Vm(t){return Io.call(Ku,t)?!0:Io.call(Pu,t)?!1:Nm.test(t)?Ku[t]=!0:(Pu[t]=!0,!1)}function yn(t,a,i){if(Vm(a))if(i===null)t.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+i)}}function vn(t,a,i){if(i===null)t.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+i)}}function Fe(t,a,i,l){if(l===null)t.removeAttribute(i);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(a,i,""+l)}}function Ee(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fu(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function qm(t,a,i){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,a);if(!t.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var o=l.get,s=l.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return o.call(this)},set:function(d){i=""+d,s.call(this,d)}}),Object.defineProperty(t,a,{enumerable:l.enumerable}),{getValue:function(){return i},setValue:function(d){i=""+d},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function er(t){if(!t._valueTracker){var a=Fu(t)?"checked":"value";t._valueTracker=qm(t,a,""+t[a])}}function Ju(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var i=a.getValue(),l="";return t&&(l=Fu(t)?t.checked?"true":"false":t.value),t=l,t!==i?(a.setValue(t),!0):!1}function bn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Um=/[\n"\\]/g;function _e(t){return t.replace(Um,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function ar(t,a,i,l,o,s,d,p){t.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?t.type=d:t.removeAttribute("type"),a!=null?d==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+Ee(a)):t.value!==""+Ee(a)&&(t.value=""+Ee(a)):d!=="submit"&&d!=="reset"||t.removeAttribute("value"),a!=null?ir(t,d,Ee(a)):i!=null?ir(t,d,Ee(i)):l!=null&&t.removeAttribute("value"),o==null&&s!=null&&(t.defaultChecked=!!s),o!=null&&(t.checked=o&&typeof o!="function"&&typeof o!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?t.name=""+Ee(p):t.removeAttribute("name")}function Wu(t,a,i,l,o,s,d,p){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.type=s),a!=null||i!=null){if(!(s!=="submit"&&s!=="reset"||a!=null)){er(t);return}i=i!=null?""+Ee(i):"",a=a!=null?""+Ee(a):i,p||a===t.value||(t.value=a),t.defaultValue=a}l=l??o,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=p?t.checked:!!l,t.defaultChecked=!!l,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.name=d),er(t)}function ir(t,a,i){a==="number"&&bn(t.ownerDocument)===t||t.defaultValue===""+i||(t.defaultValue=""+i)}function Bi(t,a,i,l){if(t=t.options,a){a={};for(var o=0;o<i.length;o++)a["$"+i[o]]=!0;for(i=0;i<t.length;i++)o=a.hasOwnProperty("$"+t[i].value),t[i].selected!==o&&(t[i].selected=o),o&&l&&(t[i].defaultSelected=!0)}else{for(i=""+Ee(i),a=null,o=0;o<t.length;o++){if(t[o].value===i){t[o].selected=!0,l&&(t[o].defaultSelected=!0);return}a!==null||t[o].disabled||(a=t[o])}a!==null&&(a.selected=!0)}}function $u(t,a,i){if(a!=null&&(a=""+Ee(a),a!==t.value&&(t.value=a),i==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=i!=null?""+Ee(i):""}function tc(t,a,i,l){if(a==null){if(l!=null){if(i!=null)throw Error(u(92));if(ot(l)){if(1<l.length)throw Error(u(93));l=l[0]}i=l}i==null&&(i=""),a=i}i=Ee(a),t.defaultValue=i,l=t.textContent,l===i&&l!==""&&l!==null&&(t.value=l),er(t)}function Ei(t,a){if(a){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=a;return}}t.textContent=a}var jm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ec(t,a,i){var l=a.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?l?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":l?t.setProperty(a,i):typeof i!="number"||i===0||jm.has(a)?a==="float"?t.cssFloat=i:t[a]=(""+i).trim():t[a]=i+"px"}function ac(t,a,i){if(a!=null&&typeof a!="object")throw Error(u(62));if(t=t.style,i!=null){for(var l in i)!i.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var o in a)l=a[o],a.hasOwnProperty(o)&&i[o]!==l&&ec(t,o,l)}else for(var s in a)a.hasOwnProperty(s)&&ec(t,s,a[s])}function lr(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ym=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gn(t){return Ym.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Je(){}var nr=null;function or(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _i=null,ki=null;function ic(t){var a=xi(t);if(a&&(t=a.stateNode)){var i=t[se]||null;t:switch(t=a.stateNode,a.type){case"input":if(ar(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),a=i.name,i.type==="radio"&&a!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+_e(""+a)+'"][type="radio"]'),a=0;a<i.length;a++){var l=i[a];if(l!==t&&l.form===t.form){var o=l[se]||null;if(!o)throw Error(u(90));ar(l,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(a=0;a<i.length;a++)l=i[a],l.form===t.form&&Ju(l)}break t;case"textarea":$u(t,i.value,i.defaultValue);break t;case"select":a=i.value,a!=null&&Bi(t,!!i.multiple,a,!1)}}}var rr=!1;function lc(t,a,i){if(rr)return t(a,i);rr=!0;try{var l=t(a);return l}finally{if(rr=!1,(_i!==null||ki!==null)&&(oo(),_i&&(a=_i,t=ki,ki=_i=null,ic(a),t)))for(a=0;a<t.length;a++)ic(t[a])}}function hl(t,a){var i=t.stateNode;if(i===null)return null;var l=i[se]||null;if(l===null)return null;i=l[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(u(231,a,typeof i));return i}var We=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sr=!1;if(We)try{var ml={};Object.defineProperty(ml,"passive",{get:function(){sr=!0}}),window.addEventListener("test",ml,ml),window.removeEventListener("test",ml,ml)}catch{sr=!1}var Sa=null,ur=null,Cn=null;function nc(){if(Cn)return Cn;var t,a=ur,i=a.length,l,o="value"in Sa?Sa.value:Sa.textContent,s=o.length;for(t=0;t<i&&a[t]===o[t];t++);var d=i-t;for(l=1;l<=d&&a[i-l]===o[s-l];l++);return Cn=o.slice(t,1<l?1-l:void 0)}function Sn(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function xn(){return!0}function oc(){return!1}function ue(t){function a(i,l,o,s,d){this._reactName=i,this._targetInst=o,this.type=l,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var p in t)t.hasOwnProperty(p)&&(i=t[p],this[p]=i?i(s):s[p]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xn:oc,this.isPropagationStopped=oc,this}return A(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=xn)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=xn)},persist:function(){},isPersistent:xn}),a}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wn=ue(Wa),yl=A({},Wa,{view:0,detail:0}),Gm=ue(yl),cr,dr,vl,Tn=A({},yl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==vl&&(vl&&t.type==="mousemove"?(cr=t.screenX-vl.screenX,dr=t.screenY-vl.screenY):dr=cr=0,vl=t),cr)},movementY:function(t){return"movementY"in t?t.movementY:dr}}),rc=ue(Tn),Qm=A({},Tn,{dataTransfer:0}),Xm=ue(Qm),Im=A({},yl,{relatedTarget:0}),fr=ue(Im),Pm=A({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),Km=ue(Pm),Fm=A({},Wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Jm=ue(Fm),Wm=A({},Wa,{data:0}),sc=ue(Wm),$m={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ty={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ey={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ay(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=ey[t])?!!a[t]:!1}function pr(){return ay}var iy=A({},yl,{key:function(t){if(t.key){var a=$m[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=Sn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ty[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pr,charCode:function(t){return t.type==="keypress"?Sn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ly=ue(iy),ny=A({},Tn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uc=ue(ny),oy=A({},yl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pr}),ry=ue(oy),sy=A({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),uy=ue(sy),cy=A({},Tn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dy=ue(cy),fy=A({},Wa,{newState:0,oldState:0}),py=ue(fy),hy=[9,13,27,32],hr=We&&"CompositionEvent"in window,bl=null;We&&"documentMode"in document&&(bl=document.documentMode);var my=We&&"TextEvent"in window&&!bl,cc=We&&(!hr||bl&&8<bl&&11>=bl),dc=" ",fc=!1;function pc(t,a){switch(t){case"keyup":return hy.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hc(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ai=!1;function yy(t,a){switch(t){case"compositionend":return hc(a);case"keypress":return a.which!==32?null:(fc=!0,dc);case"textInput":return t=a.data,t===dc&&fc?null:t;default:return null}}function vy(t,a){if(Ai)return t==="compositionend"||!hr&&pc(t,a)?(t=nc(),Cn=ur=Sa=null,Ai=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return cc&&a.locale!=="ko"?null:a.data;default:return null}}var by={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mc(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!by[t.type]:a==="textarea"}function yc(t,a,i,l){_i?ki?ki.push(l):ki=[l]:_i=l,a=ho(a,"onChange"),0<a.length&&(i=new wn("onChange","change",null,i,l),t.push({event:i,listeners:a}))}var gl=null,Cl=null;function gy(t){$f(t,0)}function Bn(t){var a=pl(t);if(Ju(a))return t}function vc(t,a){if(t==="change")return a}var bc=!1;if(We){var mr;if(We){var yr="oninput"in document;if(!yr){var gc=document.createElement("div");gc.setAttribute("oninput","return;"),yr=typeof gc.oninput=="function"}mr=yr}else mr=!1;bc=mr&&(!document.documentMode||9<document.documentMode)}function Cc(){gl&&(gl.detachEvent("onpropertychange",Sc),Cl=gl=null)}function Sc(t){if(t.propertyName==="value"&&Bn(Cl)){var a=[];yc(a,Cl,t,or(t)),lc(gy,a)}}function Cy(t,a,i){t==="focusin"?(Cc(),gl=a,Cl=i,gl.attachEvent("onpropertychange",Sc)):t==="focusout"&&Cc()}function Sy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bn(Cl)}function xy(t,a){if(t==="click")return Bn(a)}function wy(t,a){if(t==="input"||t==="change")return Bn(a)}function Ty(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var be=typeof Object.is=="function"?Object.is:Ty;function Sl(t,a){if(be(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var i=Object.keys(t),l=Object.keys(a);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var o=i[l];if(!Io.call(a,o)||!be(t[o],a[o]))return!1}return!0}function xc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wc(t,a){var i=xc(t);t=0;for(var l;i;){if(i.nodeType===3){if(l=t+i.textContent.length,t<=a&&l>=a)return{node:i,offset:a-t};t=l}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=xc(i)}}function Tc(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?Tc(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function Bc(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=bn(t.document);a instanceof t.HTMLIFrameElement;){try{var i=typeof a.contentWindow.location.href=="string"}catch{i=!1}if(i)t=a.contentWindow;else break;a=bn(t.document)}return a}function vr(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}var By=We&&"documentMode"in document&&11>=document.documentMode,Di=null,br=null,xl=null,gr=!1;function Ec(t,a,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;gr||Di==null||Di!==bn(l)||(l=Di,"selectionStart"in l&&vr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),xl&&Sl(xl,l)||(xl=l,l=ho(br,"onSelect"),0<l.length&&(a=new wn("onSelect","select",null,a,i),t.push({event:a,listeners:l}),a.target=Di)))}function $a(t,a){var i={};return i[t.toLowerCase()]=a.toLowerCase(),i["Webkit"+t]="webkit"+a,i["Moz"+t]="moz"+a,i}var Mi={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},Cr={},_c={};We&&(_c=document.createElement("div").style,"AnimationEvent"in window||(delete Mi.animationend.animation,delete Mi.animationiteration.animation,delete Mi.animationstart.animation),"TransitionEvent"in window||delete Mi.transitionend.transition);function ti(t){if(Cr[t])return Cr[t];if(!Mi[t])return t;var a=Mi[t],i;for(i in a)if(a.hasOwnProperty(i)&&i in _c)return Cr[t]=a[i];return t}var kc=ti("animationend"),Ac=ti("animationiteration"),Dc=ti("animationstart"),Ey=ti("transitionrun"),_y=ti("transitionstart"),ky=ti("transitioncancel"),Mc=ti("transitionend"),Lc=new Map,Sr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Sr.push("scrollEnd");function Ve(t,a){Lc.set(t,a),Ja(a,[t])}var En=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ke=[],Li=0,xr=0;function _n(){for(var t=Li,a=xr=Li=0;a<t;){var i=ke[a];ke[a++]=null;var l=ke[a];ke[a++]=null;var o=ke[a];ke[a++]=null;var s=ke[a];if(ke[a++]=null,l!==null&&o!==null){var d=l.pending;d===null?o.next=o:(o.next=d.next,d.next=o),l.pending=o}s!==0&&Rc(i,o,s)}}function kn(t,a,i,l){ke[Li++]=t,ke[Li++]=a,ke[Li++]=i,ke[Li++]=l,xr|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function wr(t,a,i,l){return kn(t,a,i,l),An(t)}function ei(t,a){return kn(t,null,null,a),An(t)}function Rc(t,a,i){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i);for(var o=!1,s=t.return;s!==null;)s.childLanes|=i,l=s.alternate,l!==null&&(l.childLanes|=i),s.tag===22&&(t=s.stateNode,t===null||t._visibility&1||(o=!0)),t=s,s=s.return;return t.tag===3?(s=t.stateNode,o&&a!==null&&(o=31-ve(i),t=s.hiddenUpdates,l=t[o],l===null?t[o]=[a]:l.push(a),a.lane=i|536870912),s):null}function An(t){if(50<Gl)throw Gl=0,Ls=null,Error(u(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var Ri={};function Ay(t,a,i,l){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ge(t,a,i,l){return new Ay(t,a,i,l)}function Tr(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $e(t,a){var i=t.alternate;return i===null?(i=ge(t.tag,a,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=a,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&65011712,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,a=t.dependencies,i.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function Hc(t,a){t.flags&=65011714;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,a=i.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function Dn(t,a,i,l,o,s){var d=0;if(l=t,typeof t=="function")Tr(t)&&(d=1);else if(typeof t=="string")d=Hv(t,i,Rt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Bt:return t=ge(31,i,a,o),t.elementType=Bt,t.lanes=s,t;case U:return ai(i.children,o,s,a);case Q:d=8,o|=24;break;case x:return t=ge(12,i,a,o|2),t.elementType=x,t.lanes=s,t;case I:return t=ge(13,i,a,o),t.elementType=I,t.lanes=s,t;case J:return t=ge(19,i,a,o),t.elementType=J,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:d=10;break t;case E:d=9;break t;case q:d=11;break t;case tt:d=14;break t;case vt:d=16,l=null;break t}d=29,i=Error(u(130,t===null?"null":typeof t,"")),l=null}return a=ge(d,i,a,o),a.elementType=t,a.type=l,a.lanes=s,a}function ai(t,a,i,l){return t=ge(7,t,l,a),t.lanes=i,t}function Br(t,a,i){return t=ge(6,t,null,a),t.lanes=i,t}function zc(t){var a=ge(18,null,null,0);return a.stateNode=t,a}function Er(t,a,i){return a=ge(4,t.children!==null?t.children:[],t.key,a),a.lanes=i,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}var Oc=new WeakMap;function Ae(t,a){if(typeof t=="object"&&t!==null){var i=Oc.get(t);return i!==void 0?i:(a={value:t,source:a,stack:cn(a)},Oc.set(t,a),a)}return{value:t,source:a,stack:cn(a)}}var Hi=[],zi=0,Mn=null,wl=0,De=[],Me=0,xa=null,Ge=1,Qe="";function ta(t,a){Hi[zi++]=wl,Hi[zi++]=Mn,Mn=t,wl=a}function Nc(t,a,i){De[Me++]=Ge,De[Me++]=Qe,De[Me++]=xa,xa=t;var l=Ge;t=Qe;var o=32-ve(l)-1;l&=~(1<<o),i+=1;var s=32-ve(a)+o;if(30<s){var d=o-o%5;s=(l&(1<<d)-1).toString(32),l>>=d,o-=d,Ge=1<<32-ve(a)+o|i<<o|l,Qe=s+t}else Ge=1<<s|i<<o|l,Qe=t}function _r(t){t.return!==null&&(ta(t,1),Nc(t,1,0))}function kr(t){for(;t===Mn;)Mn=Hi[--zi],Hi[zi]=null,wl=Hi[--zi],Hi[zi]=null;for(;t===xa;)xa=De[--Me],De[Me]=null,Qe=De[--Me],De[Me]=null,Ge=De[--Me],De[Me]=null}function Vc(t,a){De[Me++]=Ge,De[Me++]=Qe,De[Me++]=xa,Ge=a.id,Qe=a.overflow,xa=t}var Wt=null,kt=null,ut=!1,wa=null,Le=!1,Ar=Error(u(519));function Ta(t){var a=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Tl(Ae(a,t)),Ar}function qc(t){var a=t.stateNode,i=t.type,l=t.memoizedProps;switch(a[Jt]=t,a[se]=l,i){case"dialog":nt("cancel",a),nt("close",a);break;case"iframe":case"object":case"embed":nt("load",a);break;case"video":case"audio":for(i=0;i<Xl.length;i++)nt(Xl[i],a);break;case"source":nt("error",a);break;case"img":case"image":case"link":nt("error",a),nt("load",a);break;case"details":nt("toggle",a);break;case"input":nt("invalid",a),Wu(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":nt("invalid",a);break;case"textarea":nt("invalid",a),tc(a,l.value,l.defaultValue,l.children)}i=l.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||a.textContent===""+i||l.suppressHydrationWarning===!0||ip(a.textContent,i)?(l.popover!=null&&(nt("beforetoggle",a),nt("toggle",a)),l.onScroll!=null&&nt("scroll",a),l.onScrollEnd!=null&&nt("scrollend",a),l.onClick!=null&&(a.onclick=Je),a=!0):a=!1,a||Ta(t,!0)}function Uc(t){for(Wt=t.return;Wt;)switch(Wt.tag){case 5:case 31:case 13:Le=!1;return;case 27:case 3:Le=!0;return;default:Wt=Wt.return}}function Oi(t){if(t!==Wt)return!1;if(!ut)return Uc(t),ut=!0,!1;var a=t.tag,i;if((i=a!==3&&a!==27)&&((i=a===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||Is(t.type,t.memoizedProps)),i=!i),i&&kt&&Ta(t),Uc(t),a===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(u(317));kt=fp(t)}else if(a===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(u(317));kt=fp(t)}else a===27?(a=kt,Va(t.type)?(t=Ws,Ws=null,kt=t):kt=a):kt=Wt?He(t.stateNode.nextSibling):null;return!0}function ii(){kt=Wt=null,ut=!1}function Dr(){var t=wa;return t!==null&&(pe===null?pe=t:pe.push.apply(pe,t),wa=null),t}function Tl(t){wa===null?wa=[t]:wa.push(t)}var Mr=Ft(null),li=null,ea=null;function Ba(t,a,i){ft(Mr,a._currentValue),a._currentValue=i}function aa(t){t._currentValue=Mr.current,Et(Mr)}function Lr(t,a,i){for(;t!==null;){var l=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),t===i)break;t=t.return}}function Rr(t,a,i,l){var o=t.child;for(o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){var d=o.child;s=s.firstContext;t:for(;s!==null;){var p=s;s=o;for(var m=0;m<a.length;m++)if(p.context===a[m]){s.lanes|=i,p=s.alternate,p!==null&&(p.lanes|=i),Lr(s.return,i,t),l||(d=null);break t}s=p.next}}else if(o.tag===18){if(d=o.return,d===null)throw Error(u(341));d.lanes|=i,s=d.alternate,s!==null&&(s.lanes|=i),Lr(d,i,t),d=null}else d=o.child;if(d!==null)d.return=o;else for(d=o;d!==null;){if(d===t){d=null;break}if(o=d.sibling,o!==null){o.return=d.return,d=o;break}d=d.return}o=d}}function Ni(t,a,i,l){t=null;for(var o=a,s=!1;o!==null;){if(!s){if((o.flags&524288)!==0)s=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var d=o.alternate;if(d===null)throw Error(u(387));if(d=d.memoizedProps,d!==null){var p=o.type;be(o.pendingProps.value,d.value)||(t!==null?t.push(p):t=[p])}}else if(o===Ht.current){if(d=o.alternate,d===null)throw Error(u(387));d.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(t!==null?t.push(Jl):t=[Jl])}o=o.return}t!==null&&Rr(a,t,i,l),a.flags|=262144}function Ln(t){for(t=t.firstContext;t!==null;){if(!be(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ni(t){li=t,ea=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function $t(t){return jc(li,t)}function Rn(t,a){return li===null&&ni(t),jc(t,a)}function jc(t,a){var i=a._currentValue;if(a={context:a,memoizedValue:i,next:null},ea===null){if(t===null)throw Error(u(308));ea=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else ea=ea.next=a;return i}var Dy=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(i,l){t.push(l)}};this.abort=function(){a.aborted=!0,t.forEach(function(i){return i()})}},My=e.unstable_scheduleCallback,Ly=e.unstable_NormalPriority,jt={$$typeof:_,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hr(){return{controller:new Dy,data:new Map,refCount:0}}function Bl(t){t.refCount--,t.refCount===0&&My(Ly,function(){t.controller.abort()})}var El=null,zr=0,Vi=0,qi=null;function Ry(t,a){if(El===null){var i=El=[];zr=0,Vi=Vs(),qi={status:"pending",value:void 0,then:function(l){i.push(l)}}}return zr++,a.then(Zc,Zc),a}function Zc(){if(--zr===0&&El!==null){qi!==null&&(qi.status="fulfilled");var t=El;El=null,Vi=0,qi=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function Hy(t,a){var i=[],l={status:"pending",value:null,reason:null,then:function(o){i.push(o)}};return t.then(function(){l.status="fulfilled",l.value=a;for(var o=0;o<i.length;o++)(0,i[o])(a)},function(o){for(l.status="rejected",l.reason=o,o=0;o<i.length;o++)(0,i[o])(void 0)}),l}var Yc=T.S;T.S=function(t,a){_f=me(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&Ry(t,a),Yc!==null&&Yc(t,a)};var oi=Ft(null);function Or(){var t=oi.current;return t!==null?t:Tt.pooledCache}function Hn(t,a){a===null?ft(oi,oi.current):ft(oi,a.pool)}function Gc(){var t=Or();return t===null?null:{parent:jt._currentValue,pool:t}}var Ui=Error(u(460)),Nr=Error(u(474)),zn=Error(u(542)),On={then:function(){}};function Qc(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Xc(t,a,i){switch(i=t[i],i===void 0?t.push(a):i!==a&&(a.then(Je,Je),a=i),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,Pc(t),t;default:if(typeof a.status=="string")a.then(Je,Je);else{if(t=Tt,t!==null&&100<t.shellSuspendCounter)throw Error(u(482));t=a,t.status="pending",t.then(function(l){if(a.status==="pending"){var o=a;o.status="fulfilled",o.value=l}},function(l){if(a.status==="pending"){var o=a;o.status="rejected",o.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,Pc(t),t}throw si=a,Ui}}function ri(t){try{var a=t._init;return a(t._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(si=i,Ui):i}}var si=null;function Ic(){if(si===null)throw Error(u(459));var t=si;return si=null,t}function Pc(t){if(t===Ui||t===zn)throw Error(u(483))}var ji=null,_l=0;function Nn(t){var a=_l;return _l+=1,ji===null&&(ji=[]),Xc(ji,t,a)}function kl(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function Vn(t,a){throw a.$$typeof===M?Error(u(525)):(t=Object.prototype.toString.call(a),Error(u(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function Kc(t){function a(b,y){if(t){var g=b.deletions;g===null?(b.deletions=[y],b.flags|=16):g.push(y)}}function i(b,y){if(!t)return null;for(;y!==null;)a(b,y),y=y.sibling;return null}function l(b){for(var y=new Map;b!==null;)b.key!==null?y.set(b.key,b):y.set(b.index,b),b=b.sibling;return y}function o(b,y){return b=$e(b,y),b.index=0,b.sibling=null,b}function s(b,y,g){return b.index=g,t?(g=b.alternate,g!==null?(g=g.index,g<y?(b.flags|=67108866,y):g):(b.flags|=67108866,y)):(b.flags|=1048576,y)}function d(b){return t&&b.alternate===null&&(b.flags|=67108866),b}function p(b,y,g,D){return y===null||y.tag!==6?(y=Br(g,b.mode,D),y.return=b,y):(y=o(y,g),y.return=b,y)}function m(b,y,g,D){var W=g.type;return W===U?k(b,y,g.props.children,D,g.key):y!==null&&(y.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===vt&&ri(W)===y.type)?(y=o(y,g.props),kl(y,g),y.return=b,y):(y=Dn(g.type,g.key,g.props,null,b.mode,D),kl(y,g),y.return=b,y)}function C(b,y,g,D){return y===null||y.tag!==4||y.stateNode.containerInfo!==g.containerInfo||y.stateNode.implementation!==g.implementation?(y=Er(g,b.mode,D),y.return=b,y):(y=o(y,g.children||[]),y.return=b,y)}function k(b,y,g,D,W){return y===null||y.tag!==7?(y=ai(g,b.mode,D,W),y.return=b,y):(y=o(y,g),y.return=b,y)}function L(b,y,g){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=Br(""+y,b.mode,g),y.return=b,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case G:return g=Dn(y.type,y.key,y.props,null,b.mode,g),kl(g,y),g.return=b,g;case Y:return y=Er(y,b.mode,g),y.return=b,y;case vt:return y=ri(y),L(b,y,g)}if(ot(y)||Dt(y))return y=ai(y,b.mode,g,null),y.return=b,y;if(typeof y.then=="function")return L(b,Nn(y),g);if(y.$$typeof===_)return L(b,Rn(b,y),g);Vn(b,y)}return null}function S(b,y,g,D){var W=y!==null?y.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return W!==null?null:p(b,y,""+g,D);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case G:return g.key===W?m(b,y,g,D):null;case Y:return g.key===W?C(b,y,g,D):null;case vt:return g=ri(g),S(b,y,g,D)}if(ot(g)||Dt(g))return W!==null?null:k(b,y,g,D,null);if(typeof g.then=="function")return S(b,y,Nn(g),D);if(g.$$typeof===_)return S(b,y,Rn(b,g),D);Vn(b,g)}return null}function w(b,y,g,D,W){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return b=b.get(g)||null,p(y,b,""+D,W);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case G:return b=b.get(D.key===null?g:D.key)||null,m(y,b,D,W);case Y:return b=b.get(D.key===null?g:D.key)||null,C(y,b,D,W);case vt:return D=ri(D),w(b,y,g,D,W)}if(ot(D)||Dt(D))return b=b.get(g)||null,k(y,b,D,W,null);if(typeof D.then=="function")return w(b,y,g,Nn(D),W);if(D.$$typeof===_)return w(b,y,g,Rn(y,D),W);Vn(y,D)}return null}function X(b,y,g,D){for(var W=null,pt=null,K=y,it=y=0,st=null;K!==null&&it<g.length;it++){K.index>it?(st=K,K=null):st=K.sibling;var ht=S(b,K,g[it],D);if(ht===null){K===null&&(K=st);break}t&&K&&ht.alternate===null&&a(b,K),y=s(ht,y,it),pt===null?W=ht:pt.sibling=ht,pt=ht,K=st}if(it===g.length)return i(b,K),ut&&ta(b,it),W;if(K===null){for(;it<g.length;it++)K=L(b,g[it],D),K!==null&&(y=s(K,y,it),pt===null?W=K:pt.sibling=K,pt=K);return ut&&ta(b,it),W}for(K=l(K);it<g.length;it++)st=w(K,b,it,g[it],D),st!==null&&(t&&st.alternate!==null&&K.delete(st.key===null?it:st.key),y=s(st,y,it),pt===null?W=st:pt.sibling=st,pt=st);return t&&K.forEach(function(Ya){return a(b,Ya)}),ut&&ta(b,it),W}function $(b,y,g,D){if(g==null)throw Error(u(151));for(var W=null,pt=null,K=y,it=y=0,st=null,ht=g.next();K!==null&&!ht.done;it++,ht=g.next()){K.index>it?(st=K,K=null):st=K.sibling;var Ya=S(b,K,ht.value,D);if(Ya===null){K===null&&(K=st);break}t&&K&&Ya.alternate===null&&a(b,K),y=s(Ya,y,it),pt===null?W=Ya:pt.sibling=Ya,pt=Ya,K=st}if(ht.done)return i(b,K),ut&&ta(b,it),W;if(K===null){for(;!ht.done;it++,ht=g.next())ht=L(b,ht.value,D),ht!==null&&(y=s(ht,y,it),pt===null?W=ht:pt.sibling=ht,pt=ht);return ut&&ta(b,it),W}for(K=l(K);!ht.done;it++,ht=g.next())ht=w(K,b,it,ht.value,D),ht!==null&&(t&&ht.alternate!==null&&K.delete(ht.key===null?it:ht.key),y=s(ht,y,it),pt===null?W=ht:pt.sibling=ht,pt=ht);return t&&K.forEach(function(Qv){return a(b,Qv)}),ut&&ta(b,it),W}function xt(b,y,g,D){if(typeof g=="object"&&g!==null&&g.type===U&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case G:t:{for(var W=g.key;y!==null;){if(y.key===W){if(W=g.type,W===U){if(y.tag===7){i(b,y.sibling),D=o(y,g.props.children),D.return=b,b=D;break t}}else if(y.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===vt&&ri(W)===y.type){i(b,y.sibling),D=o(y,g.props),kl(D,g),D.return=b,b=D;break t}i(b,y);break}else a(b,y);y=y.sibling}g.type===U?(D=ai(g.props.children,b.mode,D,g.key),D.return=b,b=D):(D=Dn(g.type,g.key,g.props,null,b.mode,D),kl(D,g),D.return=b,b=D)}return d(b);case Y:t:{for(W=g.key;y!==null;){if(y.key===W)if(y.tag===4&&y.stateNode.containerInfo===g.containerInfo&&y.stateNode.implementation===g.implementation){i(b,y.sibling),D=o(y,g.children||[]),D.return=b,b=D;break t}else{i(b,y);break}else a(b,y);y=y.sibling}D=Er(g,b.mode,D),D.return=b,b=D}return d(b);case vt:return g=ri(g),xt(b,y,g,D)}if(ot(g))return X(b,y,g,D);if(Dt(g)){if(W=Dt(g),typeof W!="function")throw Error(u(150));return g=W.call(g),$(b,y,g,D)}if(typeof g.then=="function")return xt(b,y,Nn(g),D);if(g.$$typeof===_)return xt(b,y,Rn(b,g),D);Vn(b,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,y!==null&&y.tag===6?(i(b,y.sibling),D=o(y,g),D.return=b,b=D):(i(b,y),D=Br(g,b.mode,D),D.return=b,b=D),d(b)):i(b,y)}return function(b,y,g,D){try{_l=0;var W=xt(b,y,g,D);return ji=null,W}catch(K){if(K===Ui||K===zn)throw K;var pt=ge(29,K,null,b.mode);return pt.lanes=D,pt.return=b,pt}}}var ui=Kc(!0),Fc=Kc(!1),Ea=!1;function Vr(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qr(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function _a(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ka(t,a,i){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(mt&2)!==0){var o=l.pending;return o===null?a.next=a:(a.next=o.next,o.next=a),l.pending=a,a=An(t),Rc(t,null,i),a}return kn(t,l,a,i),An(t)}function Al(t,a,i){if(a=a.updateQueue,a!==null&&(a=a.shared,(i&4194048)!==0)){var l=a.lanes;l&=t.pendingLanes,i|=l,a.lanes=i,ju(t,i)}}function Ur(t,a){var i=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var o=null,s=null;if(i=i.firstBaseUpdate,i!==null){do{var d={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};s===null?o=s=d:s=s.next=d,i=i.next}while(i!==null);s===null?o=s=a:s=s.next=a}else o=s=a;i={baseState:l.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:l.shared,callbacks:l.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=a:t.next=a,i.lastBaseUpdate=a}var jr=!1;function Dl(){if(jr){var t=qi;if(t!==null)throw t}}function Ml(t,a,i,l){jr=!1;var o=t.updateQueue;Ea=!1;var s=o.firstBaseUpdate,d=o.lastBaseUpdate,p=o.shared.pending;if(p!==null){o.shared.pending=null;var m=p,C=m.next;m.next=null,d===null?s=C:d.next=C,d=m;var k=t.alternate;k!==null&&(k=k.updateQueue,p=k.lastBaseUpdate,p!==d&&(p===null?k.firstBaseUpdate=C:p.next=C,k.lastBaseUpdate=m))}if(s!==null){var L=o.baseState;d=0,k=C=m=null,p=s;do{var S=p.lane&-536870913,w=S!==p.lane;if(w?(rt&S)===S:(l&S)===S){S!==0&&S===Vi&&(jr=!0),k!==null&&(k=k.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});t:{var X=t,$=p;S=a;var xt=i;switch($.tag){case 1:if(X=$.payload,typeof X=="function"){L=X.call(xt,L,S);break t}L=X;break t;case 3:X.flags=X.flags&-65537|128;case 0:if(X=$.payload,S=typeof X=="function"?X.call(xt,L,S):X,S==null)break t;L=A({},L,S);break t;case 2:Ea=!0}}S=p.callback,S!==null&&(t.flags|=64,w&&(t.flags|=8192),w=o.callbacks,w===null?o.callbacks=[S]:w.push(S))}else w={lane:S,tag:p.tag,payload:p.payload,callback:p.callback,next:null},k===null?(C=k=w,m=L):k=k.next=w,d|=S;if(p=p.next,p===null){if(p=o.shared.pending,p===null)break;w=p,p=w.next,w.next=null,o.lastBaseUpdate=w,o.shared.pending=null}}while(!0);k===null&&(m=L),o.baseState=m,o.firstBaseUpdate=C,o.lastBaseUpdate=k,s===null&&(o.shared.lanes=0),Ra|=d,t.lanes=d,t.memoizedState=L}}function Jc(t,a){if(typeof t!="function")throw Error(u(191,t));t.call(a)}function Wc(t,a){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)Jc(i[t],a)}var Zi=Ft(null),qn=Ft(0);function $c(t,a){t=da,ft(qn,t),ft(Zi,a),da=t|a.baseLanes}function Zr(){ft(qn,da),ft(Zi,Zi.current)}function Yr(){da=qn.current,Et(Zi),Et(qn)}var Ce=Ft(null),Re=null;function Aa(t){var a=t.alternate;ft(qt,qt.current&1),ft(Ce,t),Re===null&&(a===null||Zi.current!==null||a.memoizedState!==null)&&(Re=t)}function Gr(t){ft(qt,qt.current),ft(Ce,t),Re===null&&(Re=t)}function td(t){t.tag===22?(ft(qt,qt.current),ft(Ce,t),Re===null&&(Re=t)):Da()}function Da(){ft(qt,qt.current),ft(Ce,Ce.current)}function Se(t){Et(Ce),Re===t&&(Re=null),Et(qt)}var qt=Ft(0);function Un(t){for(var a=t;a!==null;){if(a.tag===13){var i=a.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Fs(i)||Js(i)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var ia=0,at=null,Ct=null,Zt=null,jn=!1,Yi=!1,ci=!1,Zn=0,Ll=0,Gi=null,zy=0;function Ot(){throw Error(u(321))}function Qr(t,a){if(a===null)return!1;for(var i=0;i<a.length&&i<t.length;i++)if(!be(t[i],a[i]))return!1;return!0}function Xr(t,a,i,l,o,s){return ia=s,at=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,T.H=t===null||t.memoizedState===null?Nd:rs,ci=!1,s=i(l,o),ci=!1,Yi&&(s=ad(a,i,l,o)),ed(t),s}function ed(t){T.H=zl;var a=Ct!==null&&Ct.next!==null;if(ia=0,Zt=Ct=at=null,jn=!1,Ll=0,Gi=null,a)throw Error(u(300));t===null||Yt||(t=t.dependencies,t!==null&&Ln(t)&&(Yt=!0))}function ad(t,a,i,l){at=t;var o=0;do{if(Yi&&(Gi=null),Ll=0,Yi=!1,25<=o)throw Error(u(301));if(o+=1,Zt=Ct=null,t.updateQueue!=null){var s=t.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}T.H=Vd,s=a(i,l)}while(Yi);return s}function Oy(){var t=T.H,a=t.useState()[0];return a=typeof a.then=="function"?Rl(a):a,t=t.useState()[0],(Ct!==null?Ct.memoizedState:null)!==t&&(at.flags|=1024),a}function Ir(){var t=Zn!==0;return Zn=0,t}function Pr(t,a,i){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~i}function Kr(t){if(jn){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}jn=!1}ia=0,Zt=Ct=at=null,Yi=!1,Ll=Zn=0,Gi=null}function oe(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?at.memoizedState=Zt=t:Zt=Zt.next=t,Zt}function Ut(){if(Ct===null){var t=at.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var a=Zt===null?at.memoizedState:Zt.next;if(a!==null)Zt=a,Ct=t;else{if(t===null)throw at.alternate===null?Error(u(467)):Error(u(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Zt===null?at.memoizedState=Zt=t:Zt=Zt.next=t}return Zt}function Yn(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Rl(t){var a=Ll;return Ll+=1,Gi===null&&(Gi=[]),t=Xc(Gi,t,a),a=at,(Zt===null?a.memoizedState:Zt.next)===null&&(a=a.alternate,T.H=a===null||a.memoizedState===null?Nd:rs),t}function Gn(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Rl(t);if(t.$$typeof===_)return $t(t)}throw Error(u(438,String(t)))}function Fr(t){var a=null,i=at.updateQueue;if(i!==null&&(a=i.memoCache),a==null){var l=at.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(o){return o.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),i===null&&(i=Yn(),at.updateQueue=i),i.memoCache=a,i=a.data[a.index],i===void 0)for(i=a.data[a.index]=Array(t),l=0;l<t;l++)i[l]=ie;return a.index++,i}function la(t,a){return typeof a=="function"?a(t):a}function Qn(t){var a=Ut();return Jr(a,Ct,t)}function Jr(t,a,i){var l=t.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=i;var o=t.baseQueue,s=l.pending;if(s!==null){if(o!==null){var d=o.next;o.next=s.next,s.next=d}a.baseQueue=o=s,l.pending=null}if(s=t.baseState,o===null)t.memoizedState=s;else{a=o.next;var p=d=null,m=null,C=a,k=!1;do{var L=C.lane&-536870913;if(L!==C.lane?(rt&L)===L:(ia&L)===L){var S=C.revertLane;if(S===0)m!==null&&(m=m.next={lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),L===Vi&&(k=!0);else if((ia&S)===S){C=C.next,S===Vi&&(k=!0);continue}else L={lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},m===null?(p=m=L,d=s):m=m.next=L,at.lanes|=S,Ra|=S;L=C.action,ci&&i(s,L),s=C.hasEagerState?C.eagerState:i(s,L)}else S={lane:L,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},m===null?(p=m=S,d=s):m=m.next=S,at.lanes|=L,Ra|=L;C=C.next}while(C!==null&&C!==a);if(m===null?d=s:m.next=p,!be(s,t.memoizedState)&&(Yt=!0,k&&(i=qi,i!==null)))throw i;t.memoizedState=s,t.baseState=d,t.baseQueue=m,l.lastRenderedState=s}return o===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Wr(t){var a=Ut(),i=a.queue;if(i===null)throw Error(u(311));i.lastRenderedReducer=t;var l=i.dispatch,o=i.pending,s=a.memoizedState;if(o!==null){i.pending=null;var d=o=o.next;do s=t(s,d.action),d=d.next;while(d!==o);be(s,a.memoizedState)||(Yt=!0),a.memoizedState=s,a.baseQueue===null&&(a.baseState=s),i.lastRenderedState=s}return[s,l]}function id(t,a,i){var l=at,o=Ut(),s=ut;if(s){if(i===void 0)throw Error(u(407));i=i()}else i=a();var d=!be((Ct||o).memoizedState,i);if(d&&(o.memoizedState=i,Yt=!0),o=o.queue,es(od.bind(null,l,o,t),[t]),o.getSnapshot!==a||d||Zt!==null&&Zt.memoizedState.tag&1){if(l.flags|=2048,Qi(9,{destroy:void 0},nd.bind(null,l,o,i,a),null),Tt===null)throw Error(u(349));s||(ia&127)!==0||ld(l,a,i)}return i}function ld(t,a,i){t.flags|=16384,t={getSnapshot:a,value:i},a=at.updateQueue,a===null?(a=Yn(),at.updateQueue=a,a.stores=[t]):(i=a.stores,i===null?a.stores=[t]:i.push(t))}function nd(t,a,i,l){a.value=i,a.getSnapshot=l,rd(a)&&sd(t)}function od(t,a,i){return i(function(){rd(a)&&sd(t)})}function rd(t){var a=t.getSnapshot;t=t.value;try{var i=a();return!be(t,i)}catch{return!0}}function sd(t){var a=ei(t,2);a!==null&&he(a,t,2)}function $r(t){var a=oe();if(typeof t=="function"){var i=t;if(t=i(),ci){ga(!0);try{i()}finally{ga(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:t},a}function ud(t,a,i,l){return t.baseState=i,Jr(t,Ct,typeof l=="function"?l:la)}function Ny(t,a,i,l,o){if(Pn(t))throw Error(u(485));if(t=a.action,t!==null){var s={payload:o,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){s.listeners.push(d)}};T.T!==null?i(!0):s.isTransition=!1,l(s),i=a.pending,i===null?(s.next=a.pending=s,cd(a,s)):(s.next=i.next,a.pending=i.next=s)}}function cd(t,a){var i=a.action,l=a.payload,o=t.state;if(a.isTransition){var s=T.T,d={};T.T=d;try{var p=i(o,l),m=T.S;m!==null&&m(d,p),dd(t,a,p)}catch(C){ts(t,a,C)}finally{s!==null&&d.types!==null&&(s.types=d.types),T.T=s}}else try{s=i(o,l),dd(t,a,s)}catch(C){ts(t,a,C)}}function dd(t,a,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(l){fd(t,a,l)},function(l){return ts(t,a,l)}):fd(t,a,i)}function fd(t,a,i){a.status="fulfilled",a.value=i,pd(a),t.state=i,a=t.pending,a!==null&&(i=a.next,i===a?t.pending=null:(i=i.next,a.next=i,cd(t,i)))}function ts(t,a,i){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=i,pd(a),a=a.next;while(a!==l)}t.action=null}function pd(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function hd(t,a){return a}function md(t,a){if(ut){var i=Tt.formState;if(i!==null){t:{var l=at;if(ut){if(kt){e:{for(var o=kt,s=Le;o.nodeType!==8;){if(!s){o=null;break e}if(o=He(o.nextSibling),o===null){o=null;break e}}s=o.data,o=s==="F!"||s==="F"?o:null}if(o){kt=He(o.nextSibling),l=o.data==="F!";break t}}Ta(l)}l=!1}l&&(a=i[0])}}return i=oe(),i.memoizedState=i.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hd,lastRenderedState:a},i.queue=l,i=Hd.bind(null,at,l),l.dispatch=i,l=$r(!1),s=os.bind(null,at,!1,l.queue),l=oe(),o={state:a,dispatch:null,action:t,pending:null},l.queue=o,i=Ny.bind(null,at,o,s,i),o.dispatch=i,l.memoizedState=t,[a,i,!1]}function yd(t){var a=Ut();return vd(a,Ct,t)}function vd(t,a,i){if(a=Jr(t,a,hd)[0],t=Qn(la)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=Rl(a)}catch(d){throw d===Ui?zn:d}else l=a;a=Ut();var o=a.queue,s=o.dispatch;return i!==a.memoizedState&&(at.flags|=2048,Qi(9,{destroy:void 0},Vy.bind(null,o,i),null)),[l,s,t]}function Vy(t,a){t.action=a}function bd(t){var a=Ut(),i=Ct;if(i!==null)return vd(a,i,t);Ut(),a=a.memoizedState,i=Ut();var l=i.queue.dispatch;return i.memoizedState=t,[a,l,!1]}function Qi(t,a,i,l){return t={tag:t,create:i,deps:l,inst:a,next:null},a=at.updateQueue,a===null&&(a=Yn(),at.updateQueue=a),i=a.lastEffect,i===null?a.lastEffect=t.next=t:(l=i.next,i.next=t,t.next=l,a.lastEffect=t),t}function gd(){return Ut().memoizedState}function Xn(t,a,i,l){var o=oe();at.flags|=t,o.memoizedState=Qi(1|a,{destroy:void 0},i,l===void 0?null:l)}function In(t,a,i,l){var o=Ut();l=l===void 0?null:l;var s=o.memoizedState.inst;Ct!==null&&l!==null&&Qr(l,Ct.memoizedState.deps)?o.memoizedState=Qi(a,s,i,l):(at.flags|=t,o.memoizedState=Qi(1|a,s,i,l))}function Cd(t,a){Xn(8390656,8,t,a)}function es(t,a){In(2048,8,t,a)}function qy(t){at.flags|=4;var a=at.updateQueue;if(a===null)a=Yn(),at.updateQueue=a,a.events=[t];else{var i=a.events;i===null?a.events=[t]:i.push(t)}}function Sd(t){var a=Ut().memoizedState;return qy({ref:a,nextImpl:t}),function(){if((mt&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}function xd(t,a){return In(4,2,t,a)}function wd(t,a){return In(4,4,t,a)}function Td(t,a){if(typeof a=="function"){t=t();var i=a(t);return function(){typeof i=="function"?i():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function Bd(t,a,i){i=i!=null?i.concat([t]):null,In(4,4,Td.bind(null,a,t),i)}function as(){}function Ed(t,a){var i=Ut();a=a===void 0?null:a;var l=i.memoizedState;return a!==null&&Qr(a,l[1])?l[0]:(i.memoizedState=[t,a],t)}function _d(t,a){var i=Ut();a=a===void 0?null:a;var l=i.memoizedState;if(a!==null&&Qr(a,l[1]))return l[0];if(l=t(),ci){ga(!0);try{t()}finally{ga(!1)}}return i.memoizedState=[l,a],l}function is(t,a,i){return i===void 0||(ia&1073741824)!==0&&(rt&261930)===0?t.memoizedState=a:(t.memoizedState=i,t=Af(),at.lanes|=t,Ra|=t,i)}function kd(t,a,i,l){return be(i,a)?i:Zi.current!==null?(t=is(t,i,l),be(t,a)||(Yt=!0),t):(ia&42)===0||(ia&1073741824)!==0&&(rt&261930)===0?(Yt=!0,t.memoizedState=i):(t=Af(),at.lanes|=t,Ra|=t,a)}function Ad(t,a,i,l,o){var s=H.p;H.p=s!==0&&8>s?s:8;var d=T.T,p={};T.T=p,os(t,!1,a,i);try{var m=o(),C=T.S;if(C!==null&&C(p,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var k=Hy(m,l);Hl(t,a,k,Te(t))}else Hl(t,a,l,Te(t))}catch(L){Hl(t,a,{then:function(){},status:"rejected",reason:L},Te())}finally{H.p=s,d!==null&&p.types!==null&&(d.types=p.types),T.T=d}}function Uy(){}function ls(t,a,i,l){if(t.tag!==5)throw Error(u(476));var o=Dd(t).queue;Ad(t,o,a,P,i===null?Uy:function(){return Md(t),i(l)})}function Dd(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:P},next:null};var i={};return a.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:i},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function Md(t){var a=Dd(t);a.next===null&&(a=t.alternate.memoizedState),Hl(t,a.next.queue,{},Te())}function ns(){return $t(Jl)}function Ld(){return Ut().memoizedState}function Rd(){return Ut().memoizedState}function jy(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var i=Te();t=_a(i);var l=ka(a,t,i);l!==null&&(he(l,a,i),Al(l,a,i)),a={cache:Hr()},t.payload=a;return}a=a.return}}function Zy(t,a,i){var l=Te();i={lane:l,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Pn(t)?zd(a,i):(i=wr(t,a,i,l),i!==null&&(he(i,t,l),Od(i,a,l)))}function Hd(t,a,i){var l=Te();Hl(t,a,i,l)}function Hl(t,a,i,l){var o={lane:l,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(Pn(t))zd(a,o);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=a.lastRenderedReducer,s!==null))try{var d=a.lastRenderedState,p=s(d,i);if(o.hasEagerState=!0,o.eagerState=p,be(p,d))return kn(t,a,o,0),Tt===null&&_n(),!1}catch{}if(i=wr(t,a,o,l),i!==null)return he(i,t,l),Od(i,a,l),!0}return!1}function os(t,a,i,l){if(l={lane:2,revertLane:Vs(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Pn(t)){if(a)throw Error(u(479))}else a=wr(t,i,l,2),a!==null&&he(a,t,2)}function Pn(t){var a=t.alternate;return t===at||a!==null&&a===at}function zd(t,a){Yi=jn=!0;var i=t.pending;i===null?a.next=a:(a.next=i.next,i.next=a),t.pending=a}function Od(t,a,i){if((i&4194048)!==0){var l=a.lanes;l&=t.pendingLanes,i|=l,a.lanes=i,ju(t,i)}}var zl={readContext:$t,use:Gn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useLayoutEffect:Ot,useInsertionEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useSyncExternalStore:Ot,useId:Ot,useHostTransitionStatus:Ot,useFormState:Ot,useActionState:Ot,useOptimistic:Ot,useMemoCache:Ot,useCacheRefresh:Ot};zl.useEffectEvent=Ot;var Nd={readContext:$t,use:Gn,useCallback:function(t,a){return oe().memoizedState=[t,a===void 0?null:a],t},useContext:$t,useEffect:Cd,useImperativeHandle:function(t,a,i){i=i!=null?i.concat([t]):null,Xn(4194308,4,Td.bind(null,a,t),i)},useLayoutEffect:function(t,a){return Xn(4194308,4,t,a)},useInsertionEffect:function(t,a){Xn(4,2,t,a)},useMemo:function(t,a){var i=oe();a=a===void 0?null:a;var l=t();if(ci){ga(!0);try{t()}finally{ga(!1)}}return i.memoizedState=[l,a],l},useReducer:function(t,a,i){var l=oe();if(i!==void 0){var o=i(a);if(ci){ga(!0);try{i(a)}finally{ga(!1)}}}else o=a;return l.memoizedState=l.baseState=o,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:o},l.queue=t,t=t.dispatch=Zy.bind(null,at,t),[l.memoizedState,t]},useRef:function(t){var a=oe();return t={current:t},a.memoizedState=t},useState:function(t){t=$r(t);var a=t.queue,i=Hd.bind(null,at,a);return a.dispatch=i,[t.memoizedState,i]},useDebugValue:as,useDeferredValue:function(t,a){var i=oe();return is(i,t,a)},useTransition:function(){var t=$r(!1);return t=Ad.bind(null,at,t.queue,!0,!1),oe().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,i){var l=at,o=oe();if(ut){if(i===void 0)throw Error(u(407));i=i()}else{if(i=a(),Tt===null)throw Error(u(349));(rt&127)!==0||ld(l,a,i)}o.memoizedState=i;var s={value:i,getSnapshot:a};return o.queue=s,Cd(od.bind(null,l,s,t),[t]),l.flags|=2048,Qi(9,{destroy:void 0},nd.bind(null,l,s,i,a),null),i},useId:function(){var t=oe(),a=Tt.identifierPrefix;if(ut){var i=Qe,l=Ge;i=(l&~(1<<32-ve(l)-1)).toString(32)+i,a="_"+a+"R_"+i,i=Zn++,0<i&&(a+="H"+i.toString(32)),a+="_"}else i=zy++,a="_"+a+"r_"+i.toString(32)+"_";return t.memoizedState=a},useHostTransitionStatus:ns,useFormState:md,useActionState:md,useOptimistic:function(t){var a=oe();a.memoizedState=a.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=i,a=os.bind(null,at,!0,i),i.dispatch=a,[t,a]},useMemoCache:Fr,useCacheRefresh:function(){return oe().memoizedState=jy.bind(null,at)},useEffectEvent:function(t){var a=oe(),i={impl:t};return a.memoizedState=i,function(){if((mt&2)!==0)throw Error(u(440));return i.impl.apply(void 0,arguments)}}},rs={readContext:$t,use:Gn,useCallback:Ed,useContext:$t,useEffect:es,useImperativeHandle:Bd,useInsertionEffect:xd,useLayoutEffect:wd,useMemo:_d,useReducer:Qn,useRef:gd,useState:function(){return Qn(la)},useDebugValue:as,useDeferredValue:function(t,a){var i=Ut();return kd(i,Ct.memoizedState,t,a)},useTransition:function(){var t=Qn(la)[0],a=Ut().memoizedState;return[typeof t=="boolean"?t:Rl(t),a]},useSyncExternalStore:id,useId:Ld,useHostTransitionStatus:ns,useFormState:yd,useActionState:yd,useOptimistic:function(t,a){var i=Ut();return ud(i,Ct,t,a)},useMemoCache:Fr,useCacheRefresh:Rd};rs.useEffectEvent=Sd;var Vd={readContext:$t,use:Gn,useCallback:Ed,useContext:$t,useEffect:es,useImperativeHandle:Bd,useInsertionEffect:xd,useLayoutEffect:wd,useMemo:_d,useReducer:Wr,useRef:gd,useState:function(){return Wr(la)},useDebugValue:as,useDeferredValue:function(t,a){var i=Ut();return Ct===null?is(i,t,a):kd(i,Ct.memoizedState,t,a)},useTransition:function(){var t=Wr(la)[0],a=Ut().memoizedState;return[typeof t=="boolean"?t:Rl(t),a]},useSyncExternalStore:id,useId:Ld,useHostTransitionStatus:ns,useFormState:bd,useActionState:bd,useOptimistic:function(t,a){var i=Ut();return Ct!==null?ud(i,Ct,t,a):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:Fr,useCacheRefresh:Rd};Vd.useEffectEvent=Sd;function ss(t,a,i,l){a=t.memoizedState,i=i(l,a),i=i==null?a:A({},a,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var us={enqueueSetState:function(t,a,i){t=t._reactInternals;var l=Te(),o=_a(l);o.payload=a,i!=null&&(o.callback=i),a=ka(t,o,l),a!==null&&(he(a,t,l),Al(a,t,l))},enqueueReplaceState:function(t,a,i){t=t._reactInternals;var l=Te(),o=_a(l);o.tag=1,o.payload=a,i!=null&&(o.callback=i),a=ka(t,o,l),a!==null&&(he(a,t,l),Al(a,t,l))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var i=Te(),l=_a(i);l.tag=2,a!=null&&(l.callback=a),a=ka(t,l,i),a!==null&&(he(a,t,i),Al(a,t,i))}};function qd(t,a,i,l,o,s,d){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,s,d):a.prototype&&a.prototype.isPureReactComponent?!Sl(i,l)||!Sl(o,s):!0}function Ud(t,a,i,l){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(i,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(i,l),a.state!==t&&us.enqueueReplaceState(a,a.state,null)}function di(t,a){var i=a;if("ref"in a){i={};for(var l in a)l!=="ref"&&(i[l]=a[l])}if(t=t.defaultProps){i===a&&(i=A({},i));for(var o in t)i[o]===void 0&&(i[o]=t[o])}return i}function jd(t){En(t)}function Zd(t){console.error(t)}function Yd(t){En(t)}function Kn(t,a){try{var i=t.onUncaughtError;i(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function Gd(t,a,i){try{var l=t.onCaughtError;l(i.value,{componentStack:i.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function cs(t,a,i){return i=_a(i),i.tag=3,i.payload={element:null},i.callback=function(){Kn(t,a)},i}function Qd(t){return t=_a(t),t.tag=3,t}function Xd(t,a,i,l){var o=i.type.getDerivedStateFromError;if(typeof o=="function"){var s=l.value;t.payload=function(){return o(s)},t.callback=function(){Gd(a,i,l)}}var d=i.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(t.callback=function(){Gd(a,i,l),typeof o!="function"&&(Ha===null?Ha=new Set([this]):Ha.add(this));var p=l.stack;this.componentDidCatch(l.value,{componentStack:p!==null?p:""})})}function Yy(t,a,i,l,o){if(i.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=i.alternate,a!==null&&Ni(a,i,o,!0),i=Ce.current,i!==null){switch(i.tag){case 31:case 13:return Re===null?ro():i.alternate===null&&Nt===0&&(Nt=3),i.flags&=-257,i.flags|=65536,i.lanes=o,l===On?i.flags|=16384:(a=i.updateQueue,a===null?i.updateQueue=new Set([l]):a.add(l),zs(t,l,o)),!1;case 22:return i.flags|=65536,l===On?i.flags|=16384:(a=i.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},i.updateQueue=a):(i=a.retryQueue,i===null?a.retryQueue=new Set([l]):i.add(l)),zs(t,l,o)),!1}throw Error(u(435,i.tag))}return zs(t,l,o),ro(),!1}if(ut)return a=Ce.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=o,l!==Ar&&(t=Error(u(422),{cause:l}),Tl(Ae(t,i)))):(l!==Ar&&(a=Error(u(423),{cause:l}),Tl(Ae(a,i))),t=t.current.alternate,t.flags|=65536,o&=-o,t.lanes|=o,l=Ae(l,i),o=cs(t.stateNode,l,o),Ur(t,o),Nt!==4&&(Nt=2)),!1;var s=Error(u(520),{cause:l});if(s=Ae(s,i),Yl===null?Yl=[s]:Yl.push(s),Nt!==4&&(Nt=2),a===null)return!0;l=Ae(l,i),i=a;do{switch(i.tag){case 3:return i.flags|=65536,t=o&-o,i.lanes|=t,t=cs(i.stateNode,l,t),Ur(i,t),!1;case 1:if(a=i.type,s=i.stateNode,(i.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Ha===null||!Ha.has(s))))return i.flags|=65536,o&=-o,i.lanes|=o,o=Qd(o),Xd(o,t,i,l),Ur(i,o),!1}i=i.return}while(i!==null);return!1}var ds=Error(u(461)),Yt=!1;function te(t,a,i,l){a.child=t===null?Fc(a,null,i,l):ui(a,t.child,i,l)}function Id(t,a,i,l,o){i=i.render;var s=a.ref;if("ref"in l){var d={};for(var p in l)p!=="ref"&&(d[p]=l[p])}else d=l;return ni(a),l=Xr(t,a,i,d,s,o),p=Ir(),t!==null&&!Yt?(Pr(t,a,o),na(t,a,o)):(ut&&p&&_r(a),a.flags|=1,te(t,a,l,o),a.child)}function Pd(t,a,i,l,o){if(t===null){var s=i.type;return typeof s=="function"&&!Tr(s)&&s.defaultProps===void 0&&i.compare===null?(a.tag=15,a.type=s,Kd(t,a,s,l,o)):(t=Dn(i.type,null,l,a,a.mode,o),t.ref=a.ref,t.return=a,a.child=t)}if(s=t.child,!gs(t,o)){var d=s.memoizedProps;if(i=i.compare,i=i!==null?i:Sl,i(d,l)&&t.ref===a.ref)return na(t,a,o)}return a.flags|=1,t=$e(s,l),t.ref=a.ref,t.return=a,a.child=t}function Kd(t,a,i,l,o){if(t!==null){var s=t.memoizedProps;if(Sl(s,l)&&t.ref===a.ref)if(Yt=!1,a.pendingProps=l=s,gs(t,o))(t.flags&131072)!==0&&(Yt=!0);else return a.lanes=t.lanes,na(t,a,o)}return fs(t,a,i,l,o)}function Fd(t,a,i,l){var o=l.children,s=t!==null?t.memoizedState:null;if(t===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((a.flags&128)!==0){if(s=s!==null?s.baseLanes|i:i,t!==null){for(l=a.child=t.child,o=0;l!==null;)o=o|l.lanes|l.childLanes,l=l.sibling;l=o&~s}else l=0,a.child=null;return Jd(t,a,s,i,l)}if((i&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&Hn(a,s!==null?s.cachePool:null),s!==null?$c(a,s):Zr(),td(a);else return l=a.lanes=536870912,Jd(t,a,s!==null?s.baseLanes|i:i,i,l)}else s!==null?(Hn(a,s.cachePool),$c(a,s),Da(),a.memoizedState=null):(t!==null&&Hn(a,null),Zr(),Da());return te(t,a,o,i),a.child}function Ol(t,a){return t!==null&&t.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Jd(t,a,i,l,o){var s=Or();return s=s===null?null:{parent:jt._currentValue,pool:s},a.memoizedState={baseLanes:i,cachePool:s},t!==null&&Hn(a,null),Zr(),td(a),t!==null&&Ni(t,a,l,!0),a.childLanes=o,null}function Fn(t,a){return a=Wn({mode:a.mode,children:a.children},t.mode),a.ref=t.ref,t.child=a,a.return=t,a}function Wd(t,a,i){return ui(a,t.child,null,i),t=Fn(a,a.pendingProps),t.flags|=2,Se(a),a.memoizedState=null,t}function Gy(t,a,i){var l=a.pendingProps,o=(a.flags&128)!==0;if(a.flags&=-129,t===null){if(ut){if(l.mode==="hidden")return t=Fn(a,l),a.lanes=536870912,Ol(null,t);if(Gr(a),(t=kt)?(t=dp(t,Le),t=t!==null&&t.data==="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:xa!==null?{id:Ge,overflow:Qe}:null,retryLane:536870912,hydrationErrors:null},i=zc(t),i.return=a,a.child=i,Wt=a,kt=null)):t=null,t===null)throw Ta(a);return a.lanes=536870912,null}return Fn(a,l)}var s=t.memoizedState;if(s!==null){var d=s.dehydrated;if(Gr(a),o)if(a.flags&256)a.flags&=-257,a=Wd(t,a,i);else if(a.memoizedState!==null)a.child=t.child,a.flags|=128,a=null;else throw Error(u(558));else if(Yt||Ni(t,a,i,!1),o=(i&t.childLanes)!==0,Yt||o){if(l=Tt,l!==null&&(d=Zu(l,i),d!==0&&d!==s.retryLane))throw s.retryLane=d,ei(t,d),he(l,t,d),ds;ro(),a=Wd(t,a,i)}else t=s.treeContext,kt=He(d.nextSibling),Wt=a,ut=!0,wa=null,Le=!1,t!==null&&Vc(a,t),a=Fn(a,l),a.flags|=4096;return a}return t=$e(t.child,{mode:l.mode,children:l.children}),t.ref=a.ref,a.child=t,t.return=a,t}function Jn(t,a){var i=a.ref;if(i===null)t!==null&&t.ref!==null&&(a.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(u(284));(t===null||t.ref!==i)&&(a.flags|=4194816)}}function fs(t,a,i,l,o){return ni(a),i=Xr(t,a,i,l,void 0,o),l=Ir(),t!==null&&!Yt?(Pr(t,a,o),na(t,a,o)):(ut&&l&&_r(a),a.flags|=1,te(t,a,i,o),a.child)}function $d(t,a,i,l,o,s){return ni(a),a.updateQueue=null,i=ad(a,l,i,o),ed(t),l=Ir(),t!==null&&!Yt?(Pr(t,a,s),na(t,a,s)):(ut&&l&&_r(a),a.flags|=1,te(t,a,i,s),a.child)}function tf(t,a,i,l,o){if(ni(a),a.stateNode===null){var s=Ri,d=i.contextType;typeof d=="object"&&d!==null&&(s=$t(d)),s=new i(l,s),a.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=us,a.stateNode=s,s._reactInternals=a,s=a.stateNode,s.props=l,s.state=a.memoizedState,s.refs={},Vr(a),d=i.contextType,s.context=typeof d=="object"&&d!==null?$t(d):Ri,s.state=a.memoizedState,d=i.getDerivedStateFromProps,typeof d=="function"&&(ss(a,i,d,l),s.state=a.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(d=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),d!==s.state&&us.enqueueReplaceState(s,s.state,null),Ml(a,l,s,o),Dl(),s.state=a.memoizedState),typeof s.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(t===null){s=a.stateNode;var p=a.memoizedProps,m=di(i,p);s.props=m;var C=s.context,k=i.contextType;d=Ri,typeof k=="object"&&k!==null&&(d=$t(k));var L=i.getDerivedStateFromProps;k=typeof L=="function"||typeof s.getSnapshotBeforeUpdate=="function",p=a.pendingProps!==p,k||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(p||C!==d)&&Ud(a,s,l,d),Ea=!1;var S=a.memoizedState;s.state=S,Ml(a,l,s,o),Dl(),C=a.memoizedState,p||S!==C||Ea?(typeof L=="function"&&(ss(a,i,L,l),C=a.memoizedState),(m=Ea||qd(a,i,m,l,S,C,d))?(k||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(a.flags|=4194308)):(typeof s.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=C),s.props=l,s.state=C,s.context=d,l=m):(typeof s.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{s=a.stateNode,qr(t,a),d=a.memoizedProps,k=di(i,d),s.props=k,L=a.pendingProps,S=s.context,C=i.contextType,m=Ri,typeof C=="object"&&C!==null&&(m=$t(C)),p=i.getDerivedStateFromProps,(C=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==L||S!==m)&&Ud(a,s,l,m),Ea=!1,S=a.memoizedState,s.state=S,Ml(a,l,s,o),Dl();var w=a.memoizedState;d!==L||S!==w||Ea||t!==null&&t.dependencies!==null&&Ln(t.dependencies)?(typeof p=="function"&&(ss(a,i,p,l),w=a.memoizedState),(k=Ea||qd(a,i,k,l,S,w,m)||t!==null&&t.dependencies!==null&&Ln(t.dependencies))?(C||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(l,w,m),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(l,w,m)),typeof s.componentDidUpdate=="function"&&(a.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof s.componentDidUpdate!="function"||d===t.memoizedProps&&S===t.memoizedState||(a.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===t.memoizedProps&&S===t.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=w),s.props=l,s.state=w,s.context=m,l=k):(typeof s.componentDidUpdate!="function"||d===t.memoizedProps&&S===t.memoizedState||(a.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===t.memoizedProps&&S===t.memoizedState||(a.flags|=1024),l=!1)}return s=l,Jn(t,a),l=(a.flags&128)!==0,s||l?(s=a.stateNode,i=l&&typeof i.getDerivedStateFromError!="function"?null:s.render(),a.flags|=1,t!==null&&l?(a.child=ui(a,t.child,null,o),a.child=ui(a,null,i,o)):te(t,a,i,o),a.memoizedState=s.state,t=a.child):t=na(t,a,o),t}function ef(t,a,i,l){return ii(),a.flags|=256,te(t,a,i,l),a.child}var ps={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hs(t){return{baseLanes:t,cachePool:Gc()}}function ms(t,a,i){return t=t!==null?t.childLanes&~i:0,a&&(t|=we),t}function af(t,a,i){var l=a.pendingProps,o=!1,s=(a.flags&128)!==0,d;if((d=s)||(d=t!==null&&t.memoizedState===null?!1:(qt.current&2)!==0),d&&(o=!0,a.flags&=-129),d=(a.flags&32)!==0,a.flags&=-33,t===null){if(ut){if(o?Aa(a):Da(),(t=kt)?(t=dp(t,Le),t=t!==null&&t.data!=="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:xa!==null?{id:Ge,overflow:Qe}:null,retryLane:536870912,hydrationErrors:null},i=zc(t),i.return=a,a.child=i,Wt=a,kt=null)):t=null,t===null)throw Ta(a);return Js(t)?a.lanes=32:a.lanes=536870912,null}var p=l.children;return l=l.fallback,o?(Da(),o=a.mode,p=Wn({mode:"hidden",children:p},o),l=ai(l,o,i,null),p.return=a,l.return=a,p.sibling=l,a.child=p,l=a.child,l.memoizedState=hs(i),l.childLanes=ms(t,d,i),a.memoizedState=ps,Ol(null,l)):(Aa(a),ys(a,p))}var m=t.memoizedState;if(m!==null&&(p=m.dehydrated,p!==null)){if(s)a.flags&256?(Aa(a),a.flags&=-257,a=vs(t,a,i)):a.memoizedState!==null?(Da(),a.child=t.child,a.flags|=128,a=null):(Da(),p=l.fallback,o=a.mode,l=Wn({mode:"visible",children:l.children},o),p=ai(p,o,i,null),p.flags|=2,l.return=a,p.return=a,l.sibling=p,a.child=l,ui(a,t.child,null,i),l=a.child,l.memoizedState=hs(i),l.childLanes=ms(t,d,i),a.memoizedState=ps,a=Ol(null,l));else if(Aa(a),Js(p)){if(d=p.nextSibling&&p.nextSibling.dataset,d)var C=d.dgst;d=C,l=Error(u(419)),l.stack="",l.digest=d,Tl({value:l,source:null,stack:null}),a=vs(t,a,i)}else if(Yt||Ni(t,a,i,!1),d=(i&t.childLanes)!==0,Yt||d){if(d=Tt,d!==null&&(l=Zu(d,i),l!==0&&l!==m.retryLane))throw m.retryLane=l,ei(t,l),he(d,t,l),ds;Fs(p)||ro(),a=vs(t,a,i)}else Fs(p)?(a.flags|=192,a.child=t.child,a=null):(t=m.treeContext,kt=He(p.nextSibling),Wt=a,ut=!0,wa=null,Le=!1,t!==null&&Vc(a,t),a=ys(a,l.children),a.flags|=4096);return a}return o?(Da(),p=l.fallback,o=a.mode,m=t.child,C=m.sibling,l=$e(m,{mode:"hidden",children:l.children}),l.subtreeFlags=m.subtreeFlags&65011712,C!==null?p=$e(C,p):(p=ai(p,o,i,null),p.flags|=2),p.return=a,l.return=a,l.sibling=p,a.child=l,Ol(null,l),l=a.child,p=t.child.memoizedState,p===null?p=hs(i):(o=p.cachePool,o!==null?(m=jt._currentValue,o=o.parent!==m?{parent:m,pool:m}:o):o=Gc(),p={baseLanes:p.baseLanes|i,cachePool:o}),l.memoizedState=p,l.childLanes=ms(t,d,i),a.memoizedState=ps,Ol(t.child,l)):(Aa(a),i=t.child,t=i.sibling,i=$e(i,{mode:"visible",children:l.children}),i.return=a,i.sibling=null,t!==null&&(d=a.deletions,d===null?(a.deletions=[t],a.flags|=16):d.push(t)),a.child=i,a.memoizedState=null,i)}function ys(t,a){return a=Wn({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function Wn(t,a){return t=ge(22,t,null,a),t.lanes=0,t}function vs(t,a,i){return ui(a,t.child,null,i),t=ys(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function lf(t,a,i){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a),Lr(t.return,a,i)}function bs(t,a,i,l,o,s){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:o,treeForkCount:s}:(d.isBackwards=a,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=i,d.tailMode=o,d.treeForkCount=s)}function nf(t,a,i){var l=a.pendingProps,o=l.revealOrder,s=l.tail;l=l.children;var d=qt.current,p=(d&2)!==0;if(p?(d=d&1|2,a.flags|=128):d&=1,ft(qt,d),te(t,a,l,i),l=ut?wl:0,!p&&t!==null&&(t.flags&128)!==0)t:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lf(t,i,a);else if(t.tag===19)lf(t,i,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break t;for(;t.sibling===null;){if(t.return===null||t.return===a)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(o){case"forwards":for(i=a.child,o=null;i!==null;)t=i.alternate,t!==null&&Un(t)===null&&(o=i),i=i.sibling;i=o,i===null?(o=a.child,a.child=null):(o=i.sibling,i.sibling=null),bs(a,!1,o,i,s,l);break;case"backwards":case"unstable_legacy-backwards":for(i=null,o=a.child,a.child=null;o!==null;){if(t=o.alternate,t!==null&&Un(t)===null){a.child=o;break}t=o.sibling,o.sibling=i,i=o,o=t}bs(a,!0,i,null,s,l);break;case"together":bs(a,!1,null,null,void 0,l);break;default:a.memoizedState=null}return a.child}function na(t,a,i){if(t!==null&&(a.dependencies=t.dependencies),Ra|=a.lanes,(i&a.childLanes)===0)if(t!==null){if(Ni(t,a,i,!1),(i&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(u(153));if(a.child!==null){for(t=a.child,i=$e(t,t.pendingProps),a.child=i,i.return=a;t.sibling!==null;)t=t.sibling,i=i.sibling=$e(t,t.pendingProps),i.return=a;i.sibling=null}return a.child}function gs(t,a){return(t.lanes&a)!==0?!0:(t=t.dependencies,!!(t!==null&&Ln(t)))}function Qy(t,a,i){switch(a.tag){case 3:_t(a,a.stateNode.containerInfo),Ba(a,jt,t.memoizedState.cache),ii();break;case 27:case 5:Oe(a);break;case 4:_t(a,a.stateNode.containerInfo);break;case 10:Ba(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Gr(a),null;break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(Aa(a),a.flags|=128,null):(i&a.child.childLanes)!==0?af(t,a,i):(Aa(a),t=na(t,a,i),t!==null?t.sibling:null);Aa(a);break;case 19:var o=(t.flags&128)!==0;if(l=(i&a.childLanes)!==0,l||(Ni(t,a,i,!1),l=(i&a.childLanes)!==0),o){if(l)return nf(t,a,i);a.flags|=128}if(o=a.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ft(qt,qt.current),l)break;return null;case 22:return a.lanes=0,Fd(t,a,i,a.pendingProps);case 24:Ba(a,jt,t.memoizedState.cache)}return na(t,a,i)}function of(t,a,i){if(t!==null)if(t.memoizedProps!==a.pendingProps)Yt=!0;else{if(!gs(t,i)&&(a.flags&128)===0)return Yt=!1,Qy(t,a,i);Yt=(t.flags&131072)!==0}else Yt=!1,ut&&(a.flags&1048576)!==0&&Nc(a,wl,a.index);switch(a.lanes=0,a.tag){case 16:t:{var l=a.pendingProps;if(t=ri(a.elementType),a.type=t,typeof t=="function")Tr(t)?(l=di(t,l),a.tag=1,a=tf(null,a,t,l,i)):(a.tag=0,a=fs(null,a,t,l,i));else{if(t!=null){var o=t.$$typeof;if(o===q){a.tag=11,a=Id(null,a,t,l,i);break t}else if(o===tt){a.tag=14,a=Pd(null,a,t,l,i);break t}}throw a=et(t)||t,Error(u(306,a,""))}}return a;case 0:return fs(t,a,a.type,a.pendingProps,i);case 1:return l=a.type,o=di(l,a.pendingProps),tf(t,a,l,o,i);case 3:t:{if(_t(a,a.stateNode.containerInfo),t===null)throw Error(u(387));l=a.pendingProps;var s=a.memoizedState;o=s.element,qr(t,a),Ml(a,l,null,i);var d=a.memoizedState;if(l=d.cache,Ba(a,jt,l),l!==s.cache&&Rr(a,[jt],i,!0),Dl(),l=d.element,s.isDehydrated)if(s={element:l,isDehydrated:!1,cache:d.cache},a.updateQueue.baseState=s,a.memoizedState=s,a.flags&256){a=ef(t,a,l,i);break t}else if(l!==o){o=Ae(Error(u(424)),a),Tl(o),a=ef(t,a,l,i);break t}else for(t=a.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,kt=He(t.firstChild),Wt=a,ut=!0,wa=null,Le=!0,i=Fc(a,null,l,i),a.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(ii(),l===o){a=na(t,a,i);break t}te(t,a,l,i)}a=a.child}return a;case 26:return Jn(t,a),t===null?(i=vp(a.type,null,a.pendingProps,null))?a.memoizedState=i:ut||(i=a.type,t=a.pendingProps,l=mo(j.current).createElement(i),l[Jt]=a,l[se]=t,ee(l,i,t),Pt(l),a.stateNode=l):a.memoizedState=vp(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return Oe(a),t===null&&ut&&(l=a.stateNode=hp(a.type,a.pendingProps,j.current),Wt=a,Le=!0,o=kt,Va(a.type)?(Ws=o,kt=He(l.firstChild)):kt=o),te(t,a,a.pendingProps.children,i),Jn(t,a),t===null&&(a.flags|=4194304),a.child;case 5:return t===null&&ut&&((o=l=kt)&&(l=Sv(l,a.type,a.pendingProps,Le),l!==null?(a.stateNode=l,Wt=a,kt=He(l.firstChild),Le=!1,o=!0):o=!1),o||Ta(a)),Oe(a),o=a.type,s=a.pendingProps,d=t!==null?t.memoizedProps:null,l=s.children,Is(o,s)?l=null:d!==null&&Is(o,d)&&(a.flags|=32),a.memoizedState!==null&&(o=Xr(t,a,Oy,null,null,i),Jl._currentValue=o),Jn(t,a),te(t,a,l,i),a.child;case 6:return t===null&&ut&&((t=i=kt)&&(i=xv(i,a.pendingProps,Le),i!==null?(a.stateNode=i,Wt=a,kt=null,t=!0):t=!1),t||Ta(a)),null;case 13:return af(t,a,i);case 4:return _t(a,a.stateNode.containerInfo),l=a.pendingProps,t===null?a.child=ui(a,null,l,i):te(t,a,l,i),a.child;case 11:return Id(t,a,a.type,a.pendingProps,i);case 7:return te(t,a,a.pendingProps,i),a.child;case 8:return te(t,a,a.pendingProps.children,i),a.child;case 12:return te(t,a,a.pendingProps.children,i),a.child;case 10:return l=a.pendingProps,Ba(a,a.type,l.value),te(t,a,l.children,i),a.child;case 9:return o=a.type._context,l=a.pendingProps.children,ni(a),o=$t(o),l=l(o),a.flags|=1,te(t,a,l,i),a.child;case 14:return Pd(t,a,a.type,a.pendingProps,i);case 15:return Kd(t,a,a.type,a.pendingProps,i);case 19:return nf(t,a,i);case 31:return Gy(t,a,i);case 22:return Fd(t,a,i,a.pendingProps);case 24:return ni(a),l=$t(jt),t===null?(o=Or(),o===null&&(o=Tt,s=Hr(),o.pooledCache=s,s.refCount++,s!==null&&(o.pooledCacheLanes|=i),o=s),a.memoizedState={parent:l,cache:o},Vr(a),Ba(a,jt,o)):((t.lanes&i)!==0&&(qr(t,a),Ml(a,null,null,i),Dl()),o=t.memoizedState,s=a.memoizedState,o.parent!==l?(o={parent:l,cache:l},a.memoizedState=o,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=o),Ba(a,jt,l)):(l=s.cache,Ba(a,jt,l),l!==o.cache&&Rr(a,[jt],i,!0))),te(t,a,a.pendingProps.children,i),a.child;case 29:throw a.pendingProps}throw Error(u(156,a.tag))}function oa(t){t.flags|=4}function Cs(t,a,i,l,o){if((a=(t.mode&32)!==0)&&(a=!1),a){if(t.flags|=16777216,(o&335544128)===o)if(t.stateNode.complete)t.flags|=8192;else if(Rf())t.flags|=8192;else throw si=On,Nr}else t.flags&=-16777217}function rf(t,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!xp(a))if(Rf())t.flags|=8192;else throw si=On,Nr}function $n(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?qu():536870912,t.lanes|=a,Ki|=a)}function Nl(t,a){if(!ut)switch(t.tailMode){case"hidden":a=t.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function At(t){var a=t.alternate!==null&&t.alternate.child===t.child,i=0,l=0;if(a)for(var o=t.child;o!==null;)i|=o.lanes|o.childLanes,l|=o.subtreeFlags&65011712,l|=o.flags&65011712,o.return=t,o=o.sibling;else for(o=t.child;o!==null;)i|=o.lanes|o.childLanes,l|=o.subtreeFlags,l|=o.flags,o.return=t,o=o.sibling;return t.subtreeFlags|=l,t.childLanes=i,a}function Xy(t,a,i){var l=a.pendingProps;switch(kr(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return At(a),null;case 1:return At(a),null;case 3:return i=a.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),aa(jt),It(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Oi(a)?oa(a):t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Dr())),At(a),null;case 26:var o=a.type,s=a.memoizedState;return t===null?(oa(a),s!==null?(At(a),rf(a,s)):(At(a),Cs(a,o,null,l,i))):s?s!==t.memoizedState?(oa(a),At(a),rf(a,s)):(At(a),a.flags&=-16777217):(t=t.memoizedProps,t!==l&&oa(a),At(a),Cs(a,o,t,l,i)),null;case 27:if(Be(a),i=j.current,o=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==l&&oa(a);else{if(!l){if(a.stateNode===null)throw Error(u(166));return At(a),null}t=Rt.current,Oi(a)?qc(a):(t=hp(o,l,i),a.stateNode=t,oa(a))}return At(a),null;case 5:if(Be(a),o=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==l&&oa(a);else{if(!l){if(a.stateNode===null)throw Error(u(166));return At(a),null}if(s=Rt.current,Oi(a))qc(a);else{var d=mo(j.current);switch(s){case 1:s=d.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:s=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":s=d.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":s=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":s=d.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof l.is=="string"?d.createElement("select",{is:l.is}):d.createElement("select"),l.multiple?s.multiple=!0:l.size&&(s.size=l.size);break;default:s=typeof l.is=="string"?d.createElement(o,{is:l.is}):d.createElement(o)}}s[Jt]=a,s[se]=l;t:for(d=a.child;d!==null;){if(d.tag===5||d.tag===6)s.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===a)break t;for(;d.sibling===null;){if(d.return===null||d.return===a)break t;d=d.return}d.sibling.return=d.return,d=d.sibling}a.stateNode=s;t:switch(ee(s,o,l),o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&oa(a)}}return At(a),Cs(a,a.type,t===null?null:t.memoizedProps,a.pendingProps,i),null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==l&&oa(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(u(166));if(t=j.current,Oi(a)){if(t=a.stateNode,i=a.memoizedProps,l=null,o=Wt,o!==null)switch(o.tag){case 27:case 5:l=o.memoizedProps}t[Jt]=a,t=!!(t.nodeValue===i||l!==null&&l.suppressHydrationWarning===!0||ip(t.nodeValue,i)),t||Ta(a,!0)}else t=mo(t).createTextNode(l),t[Jt]=a,a.stateNode=t}return At(a),null;case 31:if(i=a.memoizedState,t===null||t.memoizedState!==null){if(l=Oi(a),i!==null){if(t===null){if(!l)throw Error(u(318));if(t=a.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(u(557));t[Jt]=a}else ii(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;At(a),t=!1}else i=Dr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),t=!0;if(!t)return a.flags&256?(Se(a),a):(Se(a),null);if((a.flags&128)!==0)throw Error(u(558))}return At(a),null;case 13:if(l=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(o=Oi(a),l!==null&&l.dehydrated!==null){if(t===null){if(!o)throw Error(u(318));if(o=a.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(u(317));o[Jt]=a}else ii(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;At(a),o=!1}else o=Dr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=o),o=!0;if(!o)return a.flags&256?(Se(a),a):(Se(a),null)}return Se(a),(a.flags&128)!==0?(a.lanes=i,a):(i=l!==null,t=t!==null&&t.memoizedState!==null,i&&(l=a.child,o=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(o=l.alternate.memoizedState.cachePool.pool),s=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(s=l.memoizedState.cachePool.pool),s!==o&&(l.flags|=2048)),i!==t&&i&&(a.child.flags|=8192),$n(a,a.updateQueue),At(a),null);case 4:return It(),t===null&&Zs(a.stateNode.containerInfo),At(a),null;case 10:return aa(a.type),At(a),null;case 19:if(Et(qt),l=a.memoizedState,l===null)return At(a),null;if(o=(a.flags&128)!==0,s=l.rendering,s===null)if(o)Nl(l,!1);else{if(Nt!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(s=Un(t),s!==null){for(a.flags|=128,Nl(l,!1),t=s.updateQueue,a.updateQueue=t,$n(a,t),a.subtreeFlags=0,t=i,i=a.child;i!==null;)Hc(i,t),i=i.sibling;return ft(qt,qt.current&1|2),ut&&ta(a,l.treeForkCount),a.child}t=t.sibling}l.tail!==null&&me()>lo&&(a.flags|=128,o=!0,Nl(l,!1),a.lanes=4194304)}else{if(!o)if(t=Un(s),t!==null){if(a.flags|=128,o=!0,t=t.updateQueue,a.updateQueue=t,$n(a,t),Nl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!ut)return At(a),null}else 2*me()-l.renderingStartTime>lo&&i!==536870912&&(a.flags|=128,o=!0,Nl(l,!1),a.lanes=4194304);l.isBackwards?(s.sibling=a.child,a.child=s):(t=l.last,t!==null?t.sibling=s:a.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=me(),t.sibling=null,i=qt.current,ft(qt,o?i&1|2:i&1),ut&&ta(a,l.treeForkCount),t):(At(a),null);case 22:case 23:return Se(a),Yr(),l=a.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(i&536870912)!==0&&(a.flags&128)===0&&(At(a),a.subtreeFlags&6&&(a.flags|=8192)):At(a),i=a.updateQueue,i!==null&&$n(a,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==i&&(a.flags|=2048),t!==null&&Et(oi),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),a.memoizedState.cache!==i&&(a.flags|=2048),aa(jt),At(a),null;case 25:return null;case 30:return null}throw Error(u(156,a.tag))}function Iy(t,a){switch(kr(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return aa(jt),It(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return Be(a),null;case 31:if(a.memoizedState!==null){if(Se(a),a.alternate===null)throw Error(u(340));ii()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 13:if(Se(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(u(340));ii()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return Et(qt),null;case 4:return It(),null;case 10:return aa(a.type),null;case 22:case 23:return Se(a),Yr(),t!==null&&Et(oi),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return aa(jt),null;case 25:return null;default:return null}}function sf(t,a){switch(kr(a),a.tag){case 3:aa(jt),It();break;case 26:case 27:case 5:Be(a);break;case 4:It();break;case 31:a.memoizedState!==null&&Se(a);break;case 13:Se(a);break;case 19:Et(qt);break;case 10:aa(a.type);break;case 22:case 23:Se(a),Yr(),t!==null&&Et(oi);break;case 24:aa(jt)}}function Vl(t,a){try{var i=a.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var o=l.next;i=o;do{if((i.tag&t)===t){l=void 0;var s=i.create,d=i.inst;l=s(),d.destroy=l}i=i.next}while(i!==o)}}catch(p){gt(a,a.return,p)}}function Ma(t,a,i){try{var l=a.updateQueue,o=l!==null?l.lastEffect:null;if(o!==null){var s=o.next;l=s;do{if((l.tag&t)===t){var d=l.inst,p=d.destroy;if(p!==void 0){d.destroy=void 0,o=a;var m=i,C=p;try{C()}catch(k){gt(o,m,k)}}}l=l.next}while(l!==s)}}catch(k){gt(a,a.return,k)}}function uf(t){var a=t.updateQueue;if(a!==null){var i=t.stateNode;try{Wc(a,i)}catch(l){gt(t,t.return,l)}}}function cf(t,a,i){i.props=di(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(l){gt(t,a,l)}}function ql(t,a){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof i=="function"?t.refCleanup=i(l):i.current=l}}catch(o){gt(t,a,o)}}function Xe(t,a){var i=t.ref,l=t.refCleanup;if(i!==null)if(typeof l=="function")try{l()}catch(o){gt(t,a,o)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(o){gt(t,a,o)}else i.current=null}function df(t){var a=t.type,i=t.memoizedProps,l=t.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":i.autoFocus&&l.focus();break t;case"img":i.src?l.src=i.src:i.srcSet&&(l.srcset=i.srcSet)}}catch(o){gt(t,t.return,o)}}function Ss(t,a,i){try{var l=t.stateNode;mv(l,t.type,i,a),l[se]=a}catch(o){gt(t,t.return,o)}}function ff(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Va(t.type)||t.tag===4}function xs(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||ff(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Va(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ws(t,a,i){var l=t.tag;if(l===5||l===6)t=t.stateNode,a?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(t,a):(a=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,a.appendChild(t),i=i._reactRootContainer,i!=null||a.onclick!==null||(a.onclick=Je));else if(l!==4&&(l===27&&Va(t.type)&&(i=t.stateNode,a=null),t=t.child,t!==null))for(ws(t,a,i),t=t.sibling;t!==null;)ws(t,a,i),t=t.sibling}function to(t,a,i){var l=t.tag;if(l===5||l===6)t=t.stateNode,a?i.insertBefore(t,a):i.appendChild(t);else if(l!==4&&(l===27&&Va(t.type)&&(i=t.stateNode),t=t.child,t!==null))for(to(t,a,i),t=t.sibling;t!==null;)to(t,a,i),t=t.sibling}function pf(t){var a=t.stateNode,i=t.memoizedProps;try{for(var l=t.type,o=a.attributes;o.length;)a.removeAttributeNode(o[0]);ee(a,l,i),a[Jt]=t,a[se]=i}catch(s){gt(t,t.return,s)}}var ra=!1,Gt=!1,Ts=!1,hf=typeof WeakSet=="function"?WeakSet:Set,Kt=null;function Py(t,a){if(t=t.containerInfo,Qs=xo,t=Bc(t),vr(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else t:{i=(i=t.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var o=l.anchorOffset,s=l.focusNode;l=l.focusOffset;try{i.nodeType,s.nodeType}catch{i=null;break t}var d=0,p=-1,m=-1,C=0,k=0,L=t,S=null;e:for(;;){for(var w;L!==i||o!==0&&L.nodeType!==3||(p=d+o),L!==s||l!==0&&L.nodeType!==3||(m=d+l),L.nodeType===3&&(d+=L.nodeValue.length),(w=L.firstChild)!==null;)S=L,L=w;for(;;){if(L===t)break e;if(S===i&&++C===o&&(p=d),S===s&&++k===l&&(m=d),(w=L.nextSibling)!==null)break;L=S,S=L.parentNode}L=w}i=p===-1||m===-1?null:{start:p,end:m}}else i=null}i=i||{start:0,end:0}}else i=null;for(Xs={focusedElem:t,selectionRange:i},xo=!1,Kt=a;Kt!==null;)if(a=Kt,t=a.child,(a.subtreeFlags&1028)!==0&&t!==null)t.return=a,Kt=t;else for(;Kt!==null;){switch(a=Kt,s=a.alternate,t=a.flags,a.tag){case 0:if((t&4)!==0&&(t=a.updateQueue,t=t!==null?t.events:null,t!==null))for(i=0;i<t.length;i++)o=t[i],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&s!==null){t=void 0,i=a,o=s.memoizedProps,s=s.memoizedState,l=i.stateNode;try{var X=di(i.type,o);t=l.getSnapshotBeforeUpdate(X,s),l.__reactInternalSnapshotBeforeUpdate=t}catch($){gt(i,i.return,$)}}break;case 3:if((t&1024)!==0){if(t=a.stateNode.containerInfo,i=t.nodeType,i===9)Ks(t);else if(i===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ks(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(u(163))}if(t=a.sibling,t!==null){t.return=a.return,Kt=t;break}Kt=a.return}}function mf(t,a,i){var l=i.flags;switch(i.tag){case 0:case 11:case 15:ua(t,i),l&4&&Vl(5,i);break;case 1:if(ua(t,i),l&4)if(t=i.stateNode,a===null)try{t.componentDidMount()}catch(d){gt(i,i.return,d)}else{var o=di(i.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(o,a,t.__reactInternalSnapshotBeforeUpdate)}catch(d){gt(i,i.return,d)}}l&64&&uf(i),l&512&&ql(i,i.return);break;case 3:if(ua(t,i),l&64&&(t=i.updateQueue,t!==null)){if(a=null,i.child!==null)switch(i.child.tag){case 27:case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}try{Wc(t,a)}catch(d){gt(i,i.return,d)}}break;case 27:a===null&&l&4&&pf(i);case 26:case 5:ua(t,i),a===null&&l&4&&df(i),l&512&&ql(i,i.return);break;case 12:ua(t,i);break;case 31:ua(t,i),l&4&&bf(t,i);break;case 13:ua(t,i),l&4&&gf(t,i),l&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=iv.bind(null,i),wv(t,i))));break;case 22:if(l=i.memoizedState!==null||ra,!l){a=a!==null&&a.memoizedState!==null||Gt,o=ra;var s=Gt;ra=l,(Gt=a)&&!s?ca(t,i,(i.subtreeFlags&8772)!==0):ua(t,i),ra=o,Gt=s}break;case 30:break;default:ua(t,i)}}function yf(t){var a=t.alternate;a!==null&&(t.alternate=null,yf(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&tr(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Mt=null,ce=!1;function sa(t,a,i){for(i=i.child;i!==null;)vf(t,a,i),i=i.sibling}function vf(t,a,i){if(ye&&typeof ye.onCommitFiberUnmount=="function")try{ye.onCommitFiberUnmount(ul,i)}catch{}switch(i.tag){case 26:Gt||Xe(i,a),sa(t,a,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Gt||Xe(i,a);var l=Mt,o=ce;Va(i.type)&&(Mt=i.stateNode,ce=!1),sa(t,a,i),Pl(i.stateNode),Mt=l,ce=o;break;case 5:Gt||Xe(i,a);case 6:if(l=Mt,o=ce,Mt=null,sa(t,a,i),Mt=l,ce=o,Mt!==null)if(ce)try{(Mt.nodeType===9?Mt.body:Mt.nodeName==="HTML"?Mt.ownerDocument.body:Mt).removeChild(i.stateNode)}catch(s){gt(i,a,s)}else try{Mt.removeChild(i.stateNode)}catch(s){gt(i,a,s)}break;case 18:Mt!==null&&(ce?(t=Mt,up(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),il(t)):up(Mt,i.stateNode));break;case 4:l=Mt,o=ce,Mt=i.stateNode.containerInfo,ce=!0,sa(t,a,i),Mt=l,ce=o;break;case 0:case 11:case 14:case 15:Ma(2,i,a),Gt||Ma(4,i,a),sa(t,a,i);break;case 1:Gt||(Xe(i,a),l=i.stateNode,typeof l.componentWillUnmount=="function"&&cf(i,a,l)),sa(t,a,i);break;case 21:sa(t,a,i);break;case 22:Gt=(l=Gt)||i.memoizedState!==null,sa(t,a,i),Gt=l;break;default:sa(t,a,i)}}function bf(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{il(t)}catch(i){gt(a,a.return,i)}}}function gf(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{il(t)}catch(i){gt(a,a.return,i)}}function Ky(t){switch(t.tag){case 31:case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new hf),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new hf),a;default:throw Error(u(435,t.tag))}}function eo(t,a){var i=Ky(t);a.forEach(function(l){if(!i.has(l)){i.add(l);var o=lv.bind(null,t,l);l.then(o,o)}})}function de(t,a){var i=a.deletions;if(i!==null)for(var l=0;l<i.length;l++){var o=i[l],s=t,d=a,p=d;t:for(;p!==null;){switch(p.tag){case 27:if(Va(p.type)){Mt=p.stateNode,ce=!1;break t}break;case 5:Mt=p.stateNode,ce=!1;break t;case 3:case 4:Mt=p.stateNode.containerInfo,ce=!0;break t}p=p.return}if(Mt===null)throw Error(u(160));vf(s,d,o),Mt=null,ce=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)Cf(a,t),a=a.sibling}var qe=null;function Cf(t,a){var i=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:de(a,t),fe(t),l&4&&(Ma(3,t,t.return),Vl(3,t),Ma(5,t,t.return));break;case 1:de(a,t),fe(t),l&512&&(Gt||i===null||Xe(i,i.return)),l&64&&ra&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?l:i.concat(l))));break;case 26:var o=qe;if(de(a,t),fe(t),l&512&&(Gt||i===null||Xe(i,i.return)),l&4){var s=i!==null?i.memoizedState:null;if(l=t.memoizedState,i===null)if(l===null)if(t.stateNode===null){t:{l=t.type,i=t.memoizedProps,o=o.ownerDocument||o;e:switch(l){case"title":s=o.getElementsByTagName("title")[0],(!s||s[fl]||s[Jt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=o.createElement(l),o.head.insertBefore(s,o.querySelector("head > title"))),ee(s,l,i),s[Jt]=t,Pt(s),l=s;break t;case"link":var d=Cp("link","href",o).get(l+(i.href||""));if(d){for(var p=0;p<d.length;p++)if(s=d[p],s.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&s.getAttribute("rel")===(i.rel==null?null:i.rel)&&s.getAttribute("title")===(i.title==null?null:i.title)&&s.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){d.splice(p,1);break e}}s=o.createElement(l),ee(s,l,i),o.head.appendChild(s);break;case"meta":if(d=Cp("meta","content",o).get(l+(i.content||""))){for(p=0;p<d.length;p++)if(s=d[p],s.getAttribute("content")===(i.content==null?null:""+i.content)&&s.getAttribute("name")===(i.name==null?null:i.name)&&s.getAttribute("property")===(i.property==null?null:i.property)&&s.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&s.getAttribute("charset")===(i.charSet==null?null:i.charSet)){d.splice(p,1);break e}}s=o.createElement(l),ee(s,l,i),o.head.appendChild(s);break;default:throw Error(u(468,l))}s[Jt]=t,Pt(s),l=s}t.stateNode=l}else Sp(o,t.type,t.stateNode);else t.stateNode=gp(o,l,t.memoizedProps);else s!==l?(s===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):s.count--,l===null?Sp(o,t.type,t.stateNode):gp(o,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Ss(t,t.memoizedProps,i.memoizedProps)}break;case 27:de(a,t),fe(t),l&512&&(Gt||i===null||Xe(i,i.return)),i!==null&&l&4&&Ss(t,t.memoizedProps,i.memoizedProps);break;case 5:if(de(a,t),fe(t),l&512&&(Gt||i===null||Xe(i,i.return)),t.flags&32){o=t.stateNode;try{Ei(o,"")}catch(X){gt(t,t.return,X)}}l&4&&t.stateNode!=null&&(o=t.memoizedProps,Ss(t,o,i!==null?i.memoizedProps:o)),l&1024&&(Ts=!0);break;case 6:if(de(a,t),fe(t),l&4){if(t.stateNode===null)throw Error(u(162));l=t.memoizedProps,i=t.stateNode;try{i.nodeValue=l}catch(X){gt(t,t.return,X)}}break;case 3:if(bo=null,o=qe,qe=yo(a.containerInfo),de(a,t),qe=o,fe(t),l&4&&i!==null&&i.memoizedState.isDehydrated)try{il(a.containerInfo)}catch(X){gt(t,t.return,X)}Ts&&(Ts=!1,Sf(t));break;case 4:l=qe,qe=yo(t.stateNode.containerInfo),de(a,t),fe(t),qe=l;break;case 12:de(a,t),fe(t);break;case 31:de(a,t),fe(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,eo(t,l)));break;case 13:de(a,t),fe(t),t.child.flags&8192&&t.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(io=me()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,eo(t,l)));break;case 22:o=t.memoizedState!==null;var m=i!==null&&i.memoizedState!==null,C=ra,k=Gt;if(ra=C||o,Gt=k||m,de(a,t),Gt=k,ra=C,fe(t),l&8192)t:for(a=t.stateNode,a._visibility=o?a._visibility&-2:a._visibility|1,o&&(i===null||m||ra||Gt||fi(t)),i=null,a=t;;){if(a.tag===5||a.tag===26){if(i===null){m=i=a;try{if(s=m.stateNode,o)d=s.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{p=m.stateNode;var L=m.memoizedProps.style,S=L!=null&&L.hasOwnProperty("display")?L.display:null;p.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(X){gt(m,m.return,X)}}}else if(a.tag===6){if(i===null){m=a;try{m.stateNode.nodeValue=o?"":m.memoizedProps}catch(X){gt(m,m.return,X)}}}else if(a.tag===18){if(i===null){m=a;try{var w=m.stateNode;o?cp(w,!0):cp(m.stateNode,!1)}catch(X){gt(m,m.return,X)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;i===a&&(i=null),a=a.return}i===a&&(i=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=t.updateQueue,l!==null&&(i=l.retryQueue,i!==null&&(l.retryQueue=null,eo(t,i))));break;case 19:de(a,t),fe(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,eo(t,l)));break;case 30:break;case 21:break;default:de(a,t),fe(t)}}function fe(t){var a=t.flags;if(a&2){try{for(var i,l=t.return;l!==null;){if(ff(l)){i=l;break}l=l.return}if(i==null)throw Error(u(160));switch(i.tag){case 27:var o=i.stateNode,s=xs(t);to(t,s,o);break;case 5:var d=i.stateNode;i.flags&32&&(Ei(d,""),i.flags&=-33);var p=xs(t);to(t,p,d);break;case 3:case 4:var m=i.stateNode.containerInfo,C=xs(t);ws(t,C,m);break;default:throw Error(u(161))}}catch(k){gt(t,t.return,k)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function Sf(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;Sf(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function ua(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)mf(t,a.alternate,a),a=a.sibling}function fi(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:Ma(4,a,a.return),fi(a);break;case 1:Xe(a,a.return);var i=a.stateNode;typeof i.componentWillUnmount=="function"&&cf(a,a.return,i),fi(a);break;case 27:Pl(a.stateNode);case 26:case 5:Xe(a,a.return),fi(a);break;case 22:a.memoizedState===null&&fi(a);break;case 30:fi(a);break;default:fi(a)}t=t.sibling}}function ca(t,a,i){for(i=i&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,o=t,s=a,d=s.flags;switch(s.tag){case 0:case 11:case 15:ca(o,s,i),Vl(4,s);break;case 1:if(ca(o,s,i),l=s,o=l.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(C){gt(l,l.return,C)}if(l=s,o=l.updateQueue,o!==null){var p=l.stateNode;try{var m=o.shared.hiddenCallbacks;if(m!==null)for(o.shared.hiddenCallbacks=null,o=0;o<m.length;o++)Jc(m[o],p)}catch(C){gt(l,l.return,C)}}i&&d&64&&uf(s),ql(s,s.return);break;case 27:pf(s);case 26:case 5:ca(o,s,i),i&&l===null&&d&4&&df(s),ql(s,s.return);break;case 12:ca(o,s,i);break;case 31:ca(o,s,i),i&&d&4&&bf(o,s);break;case 13:ca(o,s,i),i&&d&4&&gf(o,s);break;case 22:s.memoizedState===null&&ca(o,s,i),ql(s,s.return);break;case 30:break;default:ca(o,s,i)}a=a.sibling}}function Bs(t,a){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&Bl(i))}function Es(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Bl(t))}function Ue(t,a,i,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)xf(t,a,i,l),a=a.sibling}function xf(t,a,i,l){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ue(t,a,i,l),o&2048&&Vl(9,a);break;case 1:Ue(t,a,i,l);break;case 3:Ue(t,a,i,l),o&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Bl(t)));break;case 12:if(o&2048){Ue(t,a,i,l),t=a.stateNode;try{var s=a.memoizedProps,d=s.id,p=s.onPostCommit;typeof p=="function"&&p(d,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(m){gt(a,a.return,m)}}else Ue(t,a,i,l);break;case 31:Ue(t,a,i,l);break;case 13:Ue(t,a,i,l);break;case 23:break;case 22:s=a.stateNode,d=a.alternate,a.memoizedState!==null?s._visibility&2?Ue(t,a,i,l):Ul(t,a):s._visibility&2?Ue(t,a,i,l):(s._visibility|=2,Xi(t,a,i,l,(a.subtreeFlags&10256)!==0||!1)),o&2048&&Bs(d,a);break;case 24:Ue(t,a,i,l),o&2048&&Es(a.alternate,a);break;default:Ue(t,a,i,l)}}function Xi(t,a,i,l,o){for(o=o&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var s=t,d=a,p=i,m=l,C=d.flags;switch(d.tag){case 0:case 11:case 15:Xi(s,d,p,m,o),Vl(8,d);break;case 23:break;case 22:var k=d.stateNode;d.memoizedState!==null?k._visibility&2?Xi(s,d,p,m,o):Ul(s,d):(k._visibility|=2,Xi(s,d,p,m,o)),o&&C&2048&&Bs(d.alternate,d);break;case 24:Xi(s,d,p,m,o),o&&C&2048&&Es(d.alternate,d);break;default:Xi(s,d,p,m,o)}a=a.sibling}}function Ul(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var i=t,l=a,o=l.flags;switch(l.tag){case 22:Ul(i,l),o&2048&&Bs(l.alternate,l);break;case 24:Ul(i,l),o&2048&&Es(l.alternate,l);break;default:Ul(i,l)}a=a.sibling}}var jl=8192;function Ii(t,a,i){if(t.subtreeFlags&jl)for(t=t.child;t!==null;)wf(t,a,i),t=t.sibling}function wf(t,a,i){switch(t.tag){case 26:Ii(t,a,i),t.flags&jl&&t.memoizedState!==null&&zv(i,qe,t.memoizedState,t.memoizedProps);break;case 5:Ii(t,a,i);break;case 3:case 4:var l=qe;qe=yo(t.stateNode.containerInfo),Ii(t,a,i),qe=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=jl,jl=16777216,Ii(t,a,i),jl=l):Ii(t,a,i));break;default:Ii(t,a,i)}}function Tf(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function Zl(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var i=0;i<a.length;i++){var l=a[i];Kt=l,Ef(l,t)}Tf(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Bf(t),t=t.sibling}function Bf(t){switch(t.tag){case 0:case 11:case 15:Zl(t),t.flags&2048&&Ma(9,t,t.return);break;case 3:Zl(t);break;case 12:Zl(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&2&&(t.return===null||t.return.tag!==13)?(a._visibility&=-3,ao(t)):Zl(t);break;default:Zl(t)}}function ao(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var i=0;i<a.length;i++){var l=a[i];Kt=l,Ef(l,t)}Tf(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:Ma(8,a,a.return),ao(a);break;case 22:i=a.stateNode,i._visibility&2&&(i._visibility&=-3,ao(a));break;default:ao(a)}t=t.sibling}}function Ef(t,a){for(;Kt!==null;){var i=Kt;switch(i.tag){case 0:case 11:case 15:Ma(8,i,a);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var l=i.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Bl(i.memoizedState.cache)}if(l=i.child,l!==null)l.return=i,Kt=l;else t:for(i=t;Kt!==null;){l=Kt;var o=l.sibling,s=l.return;if(yf(l),l===i){Kt=null;break t}if(o!==null){o.return=s,Kt=o;break t}Kt=s}}}var Fy={getCacheForType:function(t){var a=$t(jt),i=a.data.get(t);return i===void 0&&(i=t(),a.data.set(t,i)),i},cacheSignal:function(){return $t(jt).controller.signal}},Jy=typeof WeakMap=="function"?WeakMap:Map,mt=0,Tt=null,lt=null,rt=0,bt=0,xe=null,La=!1,Pi=!1,_s=!1,da=0,Nt=0,Ra=0,pi=0,ks=0,we=0,Ki=0,Yl=null,pe=null,As=!1,io=0,_f=0,lo=1/0,no=null,Ha=null,Xt=0,za=null,Fi=null,fa=0,Ds=0,Ms=null,kf=null,Gl=0,Ls=null;function Te(){return(mt&2)!==0&&rt!==0?rt&-rt:T.T!==null?Vs():Yu()}function Af(){if(we===0)if((rt&536870912)===0||ut){var t=pn;pn<<=1,(pn&3932160)===0&&(pn=262144),we=t}else we=536870912;return t=Ce.current,t!==null&&(t.flags|=32),we}function he(t,a,i){(t===Tt&&(bt===2||bt===9)||t.cancelPendingCommit!==null)&&(Ji(t,0),Oa(t,rt,we,!1)),dl(t,i),((mt&2)===0||t!==Tt)&&(t===Tt&&((mt&2)===0&&(pi|=i),Nt===4&&Oa(t,rt,we,!1)),Ie(t))}function Df(t,a,i){if((mt&6)!==0)throw Error(u(327));var l=!i&&(a&127)===0&&(a&t.expiredLanes)===0||cl(t,a),o=l?tv(t,a):Hs(t,a,!0),s=l;do{if(o===0){Pi&&!l&&Oa(t,a,0,!1);break}else{if(i=t.current.alternate,s&&!Wy(i)){o=Hs(t,a,!1),s=!1;continue}if(o===2){if(s=a,t.errorRecoveryDisabledLanes&s)var d=0;else d=t.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){a=d;t:{var p=t;o=Yl;var m=p.current.memoizedState.isDehydrated;if(m&&(Ji(p,d).flags|=256),d=Hs(p,d,!1),d!==2){if(_s&&!m){p.errorRecoveryDisabledLanes|=s,pi|=s,o=4;break t}s=pe,pe=o,s!==null&&(pe===null?pe=s:pe.push.apply(pe,s))}o=d}if(s=!1,o!==2)continue}}if(o===1){Ji(t,0),Oa(t,a,0,!0);break}t:{switch(l=t,s=o,s){case 0:case 1:throw Error(u(345));case 4:if((a&4194048)!==a)break;case 6:Oa(l,a,we,!La);break t;case 2:pe=null;break;case 3:case 5:break;default:throw Error(u(329))}if((a&62914560)===a&&(o=io+300-me(),10<o)){if(Oa(l,a,we,!La),mn(l,0,!0)!==0)break t;fa=a,l.timeoutHandle=rp(Mf.bind(null,l,i,pe,no,As,a,we,pi,Ki,La,s,"Throttled",-0,0),o);break t}Mf(l,i,pe,no,As,a,we,pi,Ki,La,s,null,-0,0)}}break}while(!0);Ie(t)}function Mf(t,a,i,l,o,s,d,p,m,C,k,L,S,w){if(t.timeoutHandle=-1,L=a.subtreeFlags,L&8192||(L&16785408)===16785408){L={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Je},wf(a,s,L);var X=(s&62914560)===s?io-me():(s&4194048)===s?_f-me():0;if(X=Ov(L,X),X!==null){fa=s,t.cancelPendingCommit=X(qf.bind(null,t,a,s,i,l,o,d,p,m,k,L,null,S,w)),Oa(t,s,d,!C);return}}qf(t,a,s,i,l,o,d,p,m)}function Wy(t){for(var a=t;;){var i=a.tag;if((i===0||i===11||i===15)&&a.flags&16384&&(i=a.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var l=0;l<i.length;l++){var o=i[l],s=o.getSnapshot;o=o.value;try{if(!be(s(),o))return!1}catch{return!1}}if(i=a.child,a.subtreeFlags&16384&&i!==null)i.return=a,a=i;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Oa(t,a,i,l){a&=~ks,a&=~pi,t.suspendedLanes|=a,t.pingedLanes&=~a,l&&(t.warmLanes|=a),l=t.expirationTimes;for(var o=a;0<o;){var s=31-ve(o),d=1<<s;l[s]=-1,o&=~d}i!==0&&Uu(t,i,a)}function oo(){return(mt&6)===0?(Ql(0),!1):!0}function Rs(){if(lt!==null){if(bt===0)var t=lt.return;else t=lt,ea=li=null,Kr(t),ji=null,_l=0,t=lt;for(;t!==null;)sf(t.alternate,t),t=t.return;lt=null}}function Ji(t,a){var i=t.timeoutHandle;i!==-1&&(t.timeoutHandle=-1,bv(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),fa=0,Rs(),Tt=t,lt=i=$e(t.current,null),rt=a,bt=0,xe=null,La=!1,Pi=cl(t,a),_s=!1,Ki=we=ks=pi=Ra=Nt=0,pe=Yl=null,As=!1,(a&8)!==0&&(a|=a&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=a;0<l;){var o=31-ve(l),s=1<<o;a|=t[o],l&=~s}return da=a,_n(),i}function Lf(t,a){at=null,T.H=zl,a===Ui||a===zn?(a=Ic(),bt=3):a===Nr?(a=Ic(),bt=4):bt=a===ds?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,xe=a,lt===null&&(Nt=1,Kn(t,Ae(a,t.current)))}function Rf(){var t=Ce.current;return t===null?!0:(rt&4194048)===rt?Re===null:(rt&62914560)===rt||(rt&536870912)!==0?t===Re:!1}function Hf(){var t=T.H;return T.H=zl,t===null?zl:t}function zf(){var t=T.A;return T.A=Fy,t}function ro(){Nt=4,La||(rt&4194048)!==rt&&Ce.current!==null||(Pi=!0),(Ra&134217727)===0&&(pi&134217727)===0||Tt===null||Oa(Tt,rt,we,!1)}function Hs(t,a,i){var l=mt;mt|=2;var o=Hf(),s=zf();(Tt!==t||rt!==a)&&(no=null,Ji(t,a)),a=!1;var d=Nt;t:do try{if(bt!==0&&lt!==null){var p=lt,m=xe;switch(bt){case 8:Rs(),d=6;break t;case 3:case 2:case 9:case 6:Ce.current===null&&(a=!0);var C=bt;if(bt=0,xe=null,Wi(t,p,m,C),i&&Pi){d=0;break t}break;default:C=bt,bt=0,xe=null,Wi(t,p,m,C)}}$y(),d=Nt;break}catch(k){Lf(t,k)}while(!0);return a&&t.shellSuspendCounter++,ea=li=null,mt=l,T.H=o,T.A=s,lt===null&&(Tt=null,rt=0,_n()),d}function $y(){for(;lt!==null;)Of(lt)}function tv(t,a){var i=mt;mt|=2;var l=Hf(),o=zf();Tt!==t||rt!==a?(no=null,lo=me()+500,Ji(t,a)):Pi=cl(t,a);t:do try{if(bt!==0&&lt!==null){a=lt;var s=xe;e:switch(bt){case 1:bt=0,xe=null,Wi(t,a,s,1);break;case 2:case 9:if(Qc(s)){bt=0,xe=null,Nf(a);break}a=function(){bt!==2&&bt!==9||Tt!==t||(bt=7),Ie(t)},s.then(a,a);break t;case 3:bt=7;break t;case 4:bt=5;break t;case 7:Qc(s)?(bt=0,xe=null,Nf(a)):(bt=0,xe=null,Wi(t,a,s,7));break;case 5:var d=null;switch(lt.tag){case 26:d=lt.memoizedState;case 5:case 27:var p=lt;if(d?xp(d):p.stateNode.complete){bt=0,xe=null;var m=p.sibling;if(m!==null)lt=m;else{var C=p.return;C!==null?(lt=C,so(C)):lt=null}break e}}bt=0,xe=null,Wi(t,a,s,5);break;case 6:bt=0,xe=null,Wi(t,a,s,6);break;case 8:Rs(),Nt=6;break t;default:throw Error(u(462))}}ev();break}catch(k){Lf(t,k)}while(!0);return ea=li=null,T.H=l,T.A=o,mt=i,lt!==null?0:(Tt=null,rt=0,_n(),Nt)}function ev(){for(;lt!==null&&!Tm();)Of(lt)}function Of(t){var a=of(t.alternate,t,da);t.memoizedProps=t.pendingProps,a===null?so(t):lt=a}function Nf(t){var a=t,i=a.alternate;switch(a.tag){case 15:case 0:a=$d(i,a,a.pendingProps,a.type,void 0,rt);break;case 11:a=$d(i,a,a.pendingProps,a.type.render,a.ref,rt);break;case 5:Kr(a);default:sf(i,a),a=lt=Hc(a,da),a=of(i,a,da)}t.memoizedProps=t.pendingProps,a===null?so(t):lt=a}function Wi(t,a,i,l){ea=li=null,Kr(a),ji=null,_l=0;var o=a.return;try{if(Yy(t,o,a,i,rt)){Nt=1,Kn(t,Ae(i,t.current)),lt=null;return}}catch(s){if(o!==null)throw lt=o,s;Nt=1,Kn(t,Ae(i,t.current)),lt=null;return}a.flags&32768?(ut||l===1?t=!0:Pi||(rt&536870912)!==0?t=!1:(La=t=!0,(l===2||l===9||l===3||l===6)&&(l=Ce.current,l!==null&&l.tag===13&&(l.flags|=16384))),Vf(a,t)):so(a)}function so(t){var a=t;do{if((a.flags&32768)!==0){Vf(a,La);return}t=a.return;var i=Xy(a.alternate,a,da);if(i!==null){lt=i;return}if(a=a.sibling,a!==null){lt=a;return}lt=a=t}while(a!==null);Nt===0&&(Nt=5)}function Vf(t,a){do{var i=Iy(t.alternate,t);if(i!==null){i.flags&=32767,lt=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!a&&(t=t.sibling,t!==null)){lt=t;return}lt=t=i}while(t!==null);Nt=6,lt=null}function qf(t,a,i,l,o,s,d,p,m){t.cancelPendingCommit=null;do uo();while(Xt!==0);if((mt&6)!==0)throw Error(u(327));if(a!==null){if(a===t.current)throw Error(u(177));if(s=a.lanes|a.childLanes,s|=xr,Hm(t,i,s,d,p,m),t===Tt&&(lt=Tt=null,rt=0),Fi=a,za=t,fa=i,Ds=s,Ms=o,kf=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,nv(dn,function(){return Gf(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=T.T,T.T=null,o=H.p,H.p=2,d=mt,mt|=4;try{Py(t,a,i)}finally{mt=d,H.p=o,T.T=l}}Xt=1,Uf(),jf(),Zf()}}function Uf(){if(Xt===1){Xt=0;var t=za,a=Fi,i=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||i){i=T.T,T.T=null;var l=H.p;H.p=2;var o=mt;mt|=4;try{Cf(a,t);var s=Xs,d=Bc(t.containerInfo),p=s.focusedElem,m=s.selectionRange;if(d!==p&&p&&p.ownerDocument&&Tc(p.ownerDocument.documentElement,p)){if(m!==null&&vr(p)){var C=m.start,k=m.end;if(k===void 0&&(k=C),"selectionStart"in p)p.selectionStart=C,p.selectionEnd=Math.min(k,p.value.length);else{var L=p.ownerDocument||document,S=L&&L.defaultView||window;if(S.getSelection){var w=S.getSelection(),X=p.textContent.length,$=Math.min(m.start,X),xt=m.end===void 0?$:Math.min(m.end,X);!w.extend&&$>xt&&(d=xt,xt=$,$=d);var b=wc(p,$),y=wc(p,xt);if(b&&y&&(w.rangeCount!==1||w.anchorNode!==b.node||w.anchorOffset!==b.offset||w.focusNode!==y.node||w.focusOffset!==y.offset)){var g=L.createRange();g.setStart(b.node,b.offset),w.removeAllRanges(),$>xt?(w.addRange(g),w.extend(y.node,y.offset)):(g.setEnd(y.node,y.offset),w.addRange(g))}}}}for(L=[],w=p;w=w.parentNode;)w.nodeType===1&&L.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<L.length;p++){var D=L[p];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}xo=!!Qs,Xs=Qs=null}finally{mt=o,H.p=l,T.T=i}}t.current=a,Xt=2}}function jf(){if(Xt===2){Xt=0;var t=za,a=Fi,i=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||i){i=T.T,T.T=null;var l=H.p;H.p=2;var o=mt;mt|=4;try{mf(t,a.alternate,a)}finally{mt=o,H.p=l,T.T=i}}Xt=3}}function Zf(){if(Xt===4||Xt===3){Xt=0,Bm();var t=za,a=Fi,i=fa,l=kf;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Xt=5:(Xt=0,Fi=za=null,Yf(t,t.pendingLanes));var o=t.pendingLanes;if(o===0&&(Ha=null),Wo(i),a=a.stateNode,ye&&typeof ye.onCommitFiberRoot=="function")try{ye.onCommitFiberRoot(ul,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=T.T,o=H.p,H.p=2,T.T=null;try{for(var s=t.onRecoverableError,d=0;d<l.length;d++){var p=l[d];s(p.value,{componentStack:p.stack})}}finally{T.T=a,H.p=o}}(fa&3)!==0&&uo(),Ie(t),o=t.pendingLanes,(i&261930)!==0&&(o&42)!==0?t===Ls?Gl++:(Gl=0,Ls=t):Gl=0,Ql(0)}}function Yf(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,Bl(a)))}function uo(){return Uf(),jf(),Zf(),Gf()}function Gf(){if(Xt!==5)return!1;var t=za,a=Ds;Ds=0;var i=Wo(fa),l=T.T,o=H.p;try{H.p=32>i?32:i,T.T=null,i=Ms,Ms=null;var s=za,d=fa;if(Xt=0,Fi=za=null,fa=0,(mt&6)!==0)throw Error(u(331));var p=mt;if(mt|=4,Bf(s.current),xf(s,s.current,d,i),mt=p,Ql(0,!1),ye&&typeof ye.onPostCommitFiberRoot=="function")try{ye.onPostCommitFiberRoot(ul,s)}catch{}return!0}finally{H.p=o,T.T=l,Yf(t,a)}}function Qf(t,a,i){a=Ae(i,a),a=cs(t.stateNode,a,2),t=ka(t,a,2),t!==null&&(dl(t,2),Ie(t))}function gt(t,a,i){if(t.tag===3)Qf(t,t,i);else for(;a!==null;){if(a.tag===3){Qf(a,t,i);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ha===null||!Ha.has(l))){t=Ae(i,t),i=Qd(2),l=ka(a,i,2),l!==null&&(Xd(i,l,a,t),dl(l,2),Ie(l));break}}a=a.return}}function zs(t,a,i){var l=t.pingCache;if(l===null){l=t.pingCache=new Jy;var o=new Set;l.set(a,o)}else o=l.get(a),o===void 0&&(o=new Set,l.set(a,o));o.has(i)||(_s=!0,o.add(i),t=av.bind(null,t,a,i),a.then(t,t))}function av(t,a,i){var l=t.pingCache;l!==null&&l.delete(a),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,Tt===t&&(rt&i)===i&&(Nt===4||Nt===3&&(rt&62914560)===rt&&300>me()-io?(mt&2)===0&&Ji(t,0):ks|=i,Ki===rt&&(Ki=0)),Ie(t)}function Xf(t,a){a===0&&(a=qu()),t=ei(t,a),t!==null&&(dl(t,a),Ie(t))}function iv(t){var a=t.memoizedState,i=0;a!==null&&(i=a.retryLane),Xf(t,i)}function lv(t,a){var i=0;switch(t.tag){case 31:case 13:var l=t.stateNode,o=t.memoizedState;o!==null&&(i=o.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(a),Xf(t,i)}function nv(t,a){return Po(t,a)}var co=null,$i=null,Os=!1,fo=!1,Ns=!1,Na=0;function Ie(t){t!==$i&&t.next===null&&($i===null?co=$i=t:$i=$i.next=t),fo=!0,Os||(Os=!0,rv())}function Ql(t,a){if(!Ns&&fo){Ns=!0;do for(var i=!1,l=co;l!==null;){if(t!==0){var o=l.pendingLanes;if(o===0)var s=0;else{var d=l.suspendedLanes,p=l.pingedLanes;s=(1<<31-ve(42|t)+1)-1,s&=o&~(d&~p),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(i=!0,Ff(l,s))}else s=rt,s=mn(l,l===Tt?s:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(s&3)===0||cl(l,s)||(i=!0,Ff(l,s));l=l.next}while(i);Ns=!1}}function ov(){If()}function If(){fo=Os=!1;var t=0;Na!==0&&vv()&&(t=Na);for(var a=me(),i=null,l=co;l!==null;){var o=l.next,s=Pf(l,a);s===0?(l.next=null,i===null?co=o:i.next=o,o===null&&($i=i)):(i=l,(t!==0||(s&3)!==0)&&(fo=!0)),l=o}Xt!==0&&Xt!==5||Ql(t),Na!==0&&(Na=0)}function Pf(t,a){for(var i=t.suspendedLanes,l=t.pingedLanes,o=t.expirationTimes,s=t.pendingLanes&-62914561;0<s;){var d=31-ve(s),p=1<<d,m=o[d];m===-1?((p&i)===0||(p&l)!==0)&&(o[d]=Rm(p,a)):m<=a&&(t.expiredLanes|=p),s&=~p}if(a=Tt,i=rt,i=mn(t,t===a?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,i===0||t===a&&(bt===2||bt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Ko(l),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||cl(t,i)){if(a=i&-i,a===t.callbackPriority)return a;switch(l!==null&&Ko(l),Wo(i)){case 2:case 8:i=Nu;break;case 32:i=dn;break;case 268435456:i=Vu;break;default:i=dn}return l=Kf.bind(null,t),i=Po(i,l),t.callbackPriority=a,t.callbackNode=i,a}return l!==null&&l!==null&&Ko(l),t.callbackPriority=2,t.callbackNode=null,2}function Kf(t,a){if(Xt!==0&&Xt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(uo()&&t.callbackNode!==i)return null;var l=rt;return l=mn(t,t===Tt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Df(t,l,a),Pf(t,me()),t.callbackNode!=null&&t.callbackNode===i?Kf.bind(null,t):null)}function Ff(t,a){if(uo())return null;Df(t,a,!0)}function rv(){gv(function(){(mt&6)!==0?Po(Ou,ov):If()})}function Vs(){if(Na===0){var t=Vi;t===0&&(t=fn,fn<<=1,(fn&261888)===0&&(fn=256)),Na=t}return Na}function Jf(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:gn(""+t)}function Wf(t,a){var i=a.ownerDocument.createElement("input");return i.name=a.name,i.value=a.value,t.id&&i.setAttribute("form",t.id),a.parentNode.insertBefore(i,a),t=new FormData(t),i.parentNode.removeChild(i),t}function sv(t,a,i,l,o){if(a==="submit"&&i&&i.stateNode===o){var s=Jf((o[se]||null).action),d=l.submitter;d&&(a=(a=d[se]||null)?Jf(a.formAction):d.getAttribute("formAction"),a!==null&&(s=a,d=null));var p=new wn("action","action",null,l,o);t.push({event:p,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Na!==0){var m=d?Wf(o,d):new FormData(o);ls(i,{pending:!0,data:m,method:o.method,action:s},null,m)}}else typeof s=="function"&&(p.preventDefault(),m=d?Wf(o,d):new FormData(o),ls(i,{pending:!0,data:m,method:o.method,action:s},s,m))},currentTarget:o}]})}}for(var qs=0;qs<Sr.length;qs++){var Us=Sr[qs],uv=Us.toLowerCase(),cv=Us[0].toUpperCase()+Us.slice(1);Ve(uv,"on"+cv)}Ve(kc,"onAnimationEnd"),Ve(Ac,"onAnimationIteration"),Ve(Dc,"onAnimationStart"),Ve("dblclick","onDoubleClick"),Ve("focusin","onFocus"),Ve("focusout","onBlur"),Ve(Ey,"onTransitionRun"),Ve(_y,"onTransitionStart"),Ve(ky,"onTransitionCancel"),Ve(Mc,"onTransitionEnd"),Ti("onMouseEnter",["mouseout","mouseover"]),Ti("onMouseLeave",["mouseout","mouseover"]),Ti("onPointerEnter",["pointerout","pointerover"]),Ti("onPointerLeave",["pointerout","pointerover"]),Ja("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ja("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ja("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ja("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ja("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ja("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xl));function $f(t,a){a=(a&4)!==0;for(var i=0;i<t.length;i++){var l=t[i],o=l.event;l=l.listeners;t:{var s=void 0;if(a)for(var d=l.length-1;0<=d;d--){var p=l[d],m=p.instance,C=p.currentTarget;if(p=p.listener,m!==s&&o.isPropagationStopped())break t;s=p,o.currentTarget=C;try{s(o)}catch(k){En(k)}o.currentTarget=null,s=m}else for(d=0;d<l.length;d++){if(p=l[d],m=p.instance,C=p.currentTarget,p=p.listener,m!==s&&o.isPropagationStopped())break t;s=p,o.currentTarget=C;try{s(o)}catch(k){En(k)}o.currentTarget=null,s=m}}}}function nt(t,a){var i=a[$o];i===void 0&&(i=a[$o]=new Set);var l=t+"__bubble";i.has(l)||(tp(a,t,2,!1),i.add(l))}function js(t,a,i){var l=0;a&&(l|=4),tp(i,t,l,a)}var po="_reactListening"+Math.random().toString(36).slice(2);function Zs(t){if(!t[po]){t[po]=!0,Xu.forEach(function(i){i!=="selectionchange"&&(dv.has(i)||js(i,!1,t),js(i,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[po]||(a[po]=!0,js("selectionchange",!1,a))}}function tp(t,a,i,l){switch(Ap(a)){case 2:var o=qv;break;case 8:o=Uv;break;default:o=iu}i=o.bind(null,a,i,t),o=void 0,!sr||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(o=!0),l?o!==void 0?t.addEventListener(a,i,{capture:!0,passive:o}):t.addEventListener(a,i,!0):o!==void 0?t.addEventListener(a,i,{passive:o}):t.addEventListener(a,i,!1)}function Ys(t,a,i,l,o){var s=l;if((a&1)===0&&(a&2)===0&&l!==null)t:for(;;){if(l===null)return;var d=l.tag;if(d===3||d===4){var p=l.stateNode.containerInfo;if(p===o)break;if(d===4)for(d=l.return;d!==null;){var m=d.tag;if((m===3||m===4)&&d.stateNode.containerInfo===o)return;d=d.return}for(;p!==null;){if(d=Si(p),d===null)return;if(m=d.tag,m===5||m===6||m===26||m===27){l=s=d;continue t}p=p.parentNode}}l=l.return}lc(function(){var C=s,k=or(i),L=[];t:{var S=Lc.get(t);if(S!==void 0){var w=wn,X=t;switch(t){case"keypress":if(Sn(i)===0)break t;case"keydown":case"keyup":w=ly;break;case"focusin":X="focus",w=fr;break;case"focusout":X="blur",w=fr;break;case"beforeblur":case"afterblur":w=fr;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=rc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Xm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=ry;break;case kc:case Ac:case Dc:w=Km;break;case Mc:w=uy;break;case"scroll":case"scrollend":w=Gm;break;case"wheel":w=dy;break;case"copy":case"cut":case"paste":w=Jm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=uc;break;case"toggle":case"beforetoggle":w=py}var $=(a&4)!==0,xt=!$&&(t==="scroll"||t==="scrollend"),b=$?S!==null?S+"Capture":null:S;$=[];for(var y=C,g;y!==null;){var D=y;if(g=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||g===null||b===null||(D=hl(y,b),D!=null&&$.push(Il(y,D,g))),xt)break;y=y.return}0<$.length&&(S=new w(S,X,null,i,k),L.push({event:S,listeners:$}))}}if((a&7)===0){t:{if(S=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",S&&i!==nr&&(X=i.relatedTarget||i.fromElement)&&(Si(X)||X[Ci]))break t;if((w||S)&&(S=k.window===k?k:(S=k.ownerDocument)?S.defaultView||S.parentWindow:window,w?(X=i.relatedTarget||i.toElement,w=C,X=X?Si(X):null,X!==null&&(xt=f(X),$=X.tag,X!==xt||$!==5&&$!==27&&$!==6)&&(X=null)):(w=null,X=C),w!==X)){if($=rc,D="onMouseLeave",b="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&($=uc,D="onPointerLeave",b="onPointerEnter",y="pointer"),xt=w==null?S:pl(w),g=X==null?S:pl(X),S=new $(D,y+"leave",w,i,k),S.target=xt,S.relatedTarget=g,D=null,Si(k)===C&&($=new $(b,y+"enter",X,i,k),$.target=g,$.relatedTarget=xt,D=$),xt=D,w&&X)e:{for($=fv,b=w,y=X,g=0,D=b;D;D=$(D))g++;D=0;for(var W=y;W;W=$(W))D++;for(;0<g-D;)b=$(b),g--;for(;0<D-g;)y=$(y),D--;for(;g--;){if(b===y||y!==null&&b===y.alternate){$=b;break e}b=$(b),y=$(y)}$=null}else $=null;w!==null&&ep(L,S,w,$,!1),X!==null&&xt!==null&&ep(L,xt,X,$,!0)}}t:{if(S=C?pl(C):window,w=S.nodeName&&S.nodeName.toLowerCase(),w==="select"||w==="input"&&S.type==="file")var pt=vc;else if(mc(S))if(bc)pt=wy;else{pt=Sy;var K=Cy}else w=S.nodeName,!w||w.toLowerCase()!=="input"||S.type!=="checkbox"&&S.type!=="radio"?C&&lr(C.elementType)&&(pt=vc):pt=xy;if(pt&&(pt=pt(t,C))){yc(L,pt,i,k);break t}K&&K(t,S,C),t==="focusout"&&C&&S.type==="number"&&C.memoizedProps.value!=null&&ir(S,"number",S.value)}switch(K=C?pl(C):window,t){case"focusin":(mc(K)||K.contentEditable==="true")&&(Di=K,br=C,xl=null);break;case"focusout":xl=br=Di=null;break;case"mousedown":gr=!0;break;case"contextmenu":case"mouseup":case"dragend":gr=!1,Ec(L,i,k);break;case"selectionchange":if(By)break;case"keydown":case"keyup":Ec(L,i,k)}var it;if(hr)t:{switch(t){case"compositionstart":var st="onCompositionStart";break t;case"compositionend":st="onCompositionEnd";break t;case"compositionupdate":st="onCompositionUpdate";break t}st=void 0}else Ai?pc(t,i)&&(st="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(st="onCompositionStart");st&&(cc&&i.locale!=="ko"&&(Ai||st!=="onCompositionStart"?st==="onCompositionEnd"&&Ai&&(it=nc()):(Sa=k,ur="value"in Sa?Sa.value:Sa.textContent,Ai=!0)),K=ho(C,st),0<K.length&&(st=new sc(st,t,null,i,k),L.push({event:st,listeners:K}),it?st.data=it:(it=hc(i),it!==null&&(st.data=it)))),(it=my?yy(t,i):vy(t,i))&&(st=ho(C,"onBeforeInput"),0<st.length&&(K=new sc("onBeforeInput","beforeinput",null,i,k),L.push({event:K,listeners:st}),K.data=it)),sv(L,t,C,i,k)}$f(L,a)})}function Il(t,a,i){return{instance:t,listener:a,currentTarget:i}}function ho(t,a){for(var i=a+"Capture",l=[];t!==null;){var o=t,s=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||s===null||(o=hl(t,i),o!=null&&l.unshift(Il(t,o,s)),o=hl(t,a),o!=null&&l.push(Il(t,o,s))),t.tag===3)return l;t=t.return}return[]}function fv(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ep(t,a,i,l,o){for(var s=a._reactName,d=[];i!==null&&i!==l;){var p=i,m=p.alternate,C=p.stateNode;if(p=p.tag,m!==null&&m===l)break;p!==5&&p!==26&&p!==27||C===null||(m=C,o?(C=hl(i,s),C!=null&&d.unshift(Il(i,C,m))):o||(C=hl(i,s),C!=null&&d.push(Il(i,C,m)))),i=i.return}d.length!==0&&t.push({event:a,listeners:d})}var pv=/\r\n?/g,hv=/\u0000|\uFFFD/g;function ap(t){return(typeof t=="string"?t:""+t).replace(pv,`
`).replace(hv,"")}function ip(t,a){return a=ap(a),ap(t)===a}function St(t,a,i,l,o,s){switch(i){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||Ei(t,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&Ei(t,""+l);break;case"className":vn(t,"class",l);break;case"tabIndex":vn(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":vn(t,i,l);break;case"style":ac(t,l,s);break;case"data":if(a!=="object"){vn(t,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||i!=="href")){t.removeAttribute(i);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(i);break}l=gn(""+l),t.setAttribute(i,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(i==="formAction"?(a!=="input"&&St(t,a,"name",o.name,o,null),St(t,a,"formEncType",o.formEncType,o,null),St(t,a,"formMethod",o.formMethod,o,null),St(t,a,"formTarget",o.formTarget,o,null)):(St(t,a,"encType",o.encType,o,null),St(t,a,"method",o.method,o,null),St(t,a,"target",o.target,o,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(i);break}l=gn(""+l),t.setAttribute(i,l);break;case"onClick":l!=null&&(t.onclick=Je);break;case"onScroll":l!=null&&nt("scroll",t);break;case"onScrollEnd":l!=null&&nt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(i=l.__html,i!=null){if(o.children!=null)throw Error(u(60));t.innerHTML=i}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}i=gn(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(i,""+l):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":l===!0?t.setAttribute(i,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(i,l):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(i,l):t.removeAttribute(i);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(i):t.setAttribute(i,l);break;case"popover":nt("beforetoggle",t),nt("toggle",t),yn(t,"popover",l);break;case"xlinkActuate":Fe(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Fe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Fe(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Fe(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Fe(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Fe(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Fe(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Fe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Fe(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":yn(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=Zm.get(i)||i,yn(t,i,l))}}function Gs(t,a,i,l,o,s){switch(i){case"style":ac(t,l,s);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(i=l.__html,i!=null){if(o.children!=null)throw Error(u(60));t.innerHTML=i}}break;case"children":typeof l=="string"?Ei(t,l):(typeof l=="number"||typeof l=="bigint")&&Ei(t,""+l);break;case"onScroll":l!=null&&nt("scroll",t);break;case"onScrollEnd":l!=null&&nt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Je);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Iu.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(o=i.endsWith("Capture"),a=i.slice(2,o?i.length-7:void 0),s=t[se]||null,s=s!=null?s[i]:null,typeof s=="function"&&t.removeEventListener(a,s,o),typeof l=="function")){typeof s!="function"&&s!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(a,l,o);break t}i in t?t[i]=l:l===!0?t.setAttribute(i,""):yn(t,i,l)}}}function ee(t,a,i){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":nt("error",t),nt("load",t);var l=!1,o=!1,s;for(s in i)if(i.hasOwnProperty(s)){var d=i[s];if(d!=null)switch(s){case"src":l=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,a));default:St(t,a,s,d,i,null)}}o&&St(t,a,"srcSet",i.srcSet,i,null),l&&St(t,a,"src",i.src,i,null);return;case"input":nt("invalid",t);var p=s=d=o=null,m=null,C=null;for(l in i)if(i.hasOwnProperty(l)){var k=i[l];if(k!=null)switch(l){case"name":o=k;break;case"type":d=k;break;case"checked":m=k;break;case"defaultChecked":C=k;break;case"value":s=k;break;case"defaultValue":p=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(u(137,a));break;default:St(t,a,l,k,i,null)}}Wu(t,s,p,m,C,d,o,!1);return;case"select":nt("invalid",t),l=d=s=null;for(o in i)if(i.hasOwnProperty(o)&&(p=i[o],p!=null))switch(o){case"value":s=p;break;case"defaultValue":d=p;break;case"multiple":l=p;default:St(t,a,o,p,i,null)}a=s,i=d,t.multiple=!!l,a!=null?Bi(t,!!l,a,!1):i!=null&&Bi(t,!!l,i,!0);return;case"textarea":nt("invalid",t),s=o=l=null;for(d in i)if(i.hasOwnProperty(d)&&(p=i[d],p!=null))switch(d){case"value":l=p;break;case"defaultValue":o=p;break;case"children":s=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(u(91));break;default:St(t,a,d,p,i,null)}tc(t,l,o,s);return;case"option":for(m in i)i.hasOwnProperty(m)&&(l=i[m],l!=null)&&(m==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":St(t,a,m,l,i,null));return;case"dialog":nt("beforetoggle",t),nt("toggle",t),nt("cancel",t),nt("close",t);break;case"iframe":case"object":nt("load",t);break;case"video":case"audio":for(l=0;l<Xl.length;l++)nt(Xl[l],t);break;case"image":nt("error",t),nt("load",t);break;case"details":nt("toggle",t);break;case"embed":case"source":case"link":nt("error",t),nt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in i)if(i.hasOwnProperty(C)&&(l=i[C],l!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,a));default:St(t,a,C,l,i,null)}return;default:if(lr(a)){for(k in i)i.hasOwnProperty(k)&&(l=i[k],l!==void 0&&Gs(t,a,k,l,i,void 0));return}}for(p in i)i.hasOwnProperty(p)&&(l=i[p],l!=null&&St(t,a,p,l,i,null))}function mv(t,a,i,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,s=null,d=null,p=null,m=null,C=null,k=null;for(w in i){var L=i[w];if(i.hasOwnProperty(w)&&L!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":m=L;default:l.hasOwnProperty(w)||St(t,a,w,null,l,L)}}for(var S in l){var w=l[S];if(L=i[S],l.hasOwnProperty(S)&&(w!=null||L!=null))switch(S){case"type":s=w;break;case"name":o=w;break;case"checked":C=w;break;case"defaultChecked":k=w;break;case"value":d=w;break;case"defaultValue":p=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(u(137,a));break;default:w!==L&&St(t,a,S,w,l,L)}}ar(t,d,p,m,C,k,s,o);return;case"select":w=d=p=S=null;for(s in i)if(m=i[s],i.hasOwnProperty(s)&&m!=null)switch(s){case"value":break;case"multiple":w=m;default:l.hasOwnProperty(s)||St(t,a,s,null,l,m)}for(o in l)if(s=l[o],m=i[o],l.hasOwnProperty(o)&&(s!=null||m!=null))switch(o){case"value":S=s;break;case"defaultValue":p=s;break;case"multiple":d=s;default:s!==m&&St(t,a,o,s,l,m)}a=p,i=d,l=w,S!=null?Bi(t,!!i,S,!1):!!l!=!!i&&(a!=null?Bi(t,!!i,a,!0):Bi(t,!!i,i?[]:"",!1));return;case"textarea":w=S=null;for(p in i)if(o=i[p],i.hasOwnProperty(p)&&o!=null&&!l.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:St(t,a,p,null,l,o)}for(d in l)if(o=l[d],s=i[d],l.hasOwnProperty(d)&&(o!=null||s!=null))switch(d){case"value":S=o;break;case"defaultValue":w=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(u(91));break;default:o!==s&&St(t,a,d,o,l,s)}$u(t,S,w);return;case"option":for(var X in i)S=i[X],i.hasOwnProperty(X)&&S!=null&&!l.hasOwnProperty(X)&&(X==="selected"?t.selected=!1:St(t,a,X,null,l,S));for(m in l)S=l[m],w=i[m],l.hasOwnProperty(m)&&S!==w&&(S!=null||w!=null)&&(m==="selected"?t.selected=S&&typeof S!="function"&&typeof S!="symbol":St(t,a,m,S,l,w));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $ in i)S=i[$],i.hasOwnProperty($)&&S!=null&&!l.hasOwnProperty($)&&St(t,a,$,null,l,S);for(C in l)if(S=l[C],w=i[C],l.hasOwnProperty(C)&&S!==w&&(S!=null||w!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(u(137,a));break;default:St(t,a,C,S,l,w)}return;default:if(lr(a)){for(var xt in i)S=i[xt],i.hasOwnProperty(xt)&&S!==void 0&&!l.hasOwnProperty(xt)&&Gs(t,a,xt,void 0,l,S);for(k in l)S=l[k],w=i[k],!l.hasOwnProperty(k)||S===w||S===void 0&&w===void 0||Gs(t,a,k,S,l,w);return}}for(var b in i)S=i[b],i.hasOwnProperty(b)&&S!=null&&!l.hasOwnProperty(b)&&St(t,a,b,null,l,S);for(L in l)S=l[L],w=i[L],!l.hasOwnProperty(L)||S===w||S==null&&w==null||St(t,a,L,S,l,w)}function lp(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function yv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,a=0,i=performance.getEntriesByType("resource"),l=0;l<i.length;l++){var o=i[l],s=o.transferSize,d=o.initiatorType,p=o.duration;if(s&&p&&lp(d)){for(d=0,p=o.responseEnd,l+=1;l<i.length;l++){var m=i[l],C=m.startTime;if(C>p)break;var k=m.transferSize,L=m.initiatorType;k&&lp(L)&&(m=m.responseEnd,d+=k*(m<p?1:(p-C)/(m-C)))}if(--l,a+=8*(s+d)/(o.duration/1e3),t++,10<t)break}}if(0<t)return a/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Qs=null,Xs=null;function mo(t){return t.nodeType===9?t:t.ownerDocument}function np(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function op(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function Is(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Ps=null;function vv(){var t=window.event;return t&&t.type==="popstate"?t===Ps?!1:(Ps=t,!0):(Ps=null,!1)}var rp=typeof setTimeout=="function"?setTimeout:void 0,bv=typeof clearTimeout=="function"?clearTimeout:void 0,sp=typeof Promise=="function"?Promise:void 0,gv=typeof queueMicrotask=="function"?queueMicrotask:typeof sp<"u"?function(t){return sp.resolve(null).then(t).catch(Cv)}:rp;function Cv(t){setTimeout(function(){throw t})}function Va(t){return t==="head"}function up(t,a){var i=a,l=0;do{var o=i.nextSibling;if(t.removeChild(i),o&&o.nodeType===8)if(i=o.data,i==="/$"||i==="/&"){if(l===0){t.removeChild(o),il(a);return}l--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")l++;else if(i==="html")Pl(t.ownerDocument.documentElement);else if(i==="head"){i=t.ownerDocument.head,Pl(i);for(var s=i.firstChild;s;){var d=s.nextSibling,p=s.nodeName;s[fl]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&s.rel.toLowerCase()==="stylesheet"||i.removeChild(s),s=d}}else i==="body"&&Pl(t.ownerDocument.body);i=o}while(i);il(a)}function cp(t,a){var i=t;t=0;do{var l=i.nextSibling;if(i.nodeType===1?a?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(a?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),l&&l.nodeType===8)if(i=l.data,i==="/$"){if(t===0)break;t--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;i=l}while(i)}function Ks(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var i=a;switch(a=a.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Ks(i),tr(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function Sv(t,a,i,l){for(;t.nodeType===1;){var o=i;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[fl])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(s=t.getAttribute("rel"),s==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(s!==o.rel||t.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||t.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||t.getAttribute("title")!==(o.title==null?null:o.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(s=t.getAttribute("src"),(s!==(o.src==null?null:o.src)||t.getAttribute("type")!==(o.type==null?null:o.type)||t.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&s&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var s=o.name==null?null:""+o.name;if(o.type==="hidden"&&t.getAttribute("name")===s)return t}else return t;if(t=He(t.nextSibling),t===null)break}return null}function xv(t,a,i){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=He(t.nextSibling),t===null))return null;return t}function dp(t,a){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=He(t.nextSibling),t===null))return null;return t}function Fs(t){return t.data==="$?"||t.data==="$~"}function Js(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function wv(t,a){var i=t.ownerDocument;if(t.data==="$~")t._reactRetry=a;else if(t.data!=="$?"||i.readyState!=="loading")a();else{var l=function(){a(),i.removeEventListener("DOMContentLoaded",l)};i.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function He(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return t}var Ws=null;function fp(t){t=t.nextSibling;for(var a=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"||i==="/&"){if(a===0)return He(t.nextSibling);a--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||a++}t=t.nextSibling}return null}function pp(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(a===0)return t;a--}else i!=="/$"&&i!=="/&"||a++}t=t.previousSibling}return null}function hp(t,a,i){switch(a=mo(i),t){case"html":if(t=a.documentElement,!t)throw Error(u(452));return t;case"head":if(t=a.head,!t)throw Error(u(453));return t;case"body":if(t=a.body,!t)throw Error(u(454));return t;default:throw Error(u(451))}}function Pl(t){for(var a=t.attributes;a.length;)t.removeAttributeNode(a[0]);tr(t)}var ze=new Map,mp=new Set;function yo(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var pa=H.d;H.d={f:Tv,r:Bv,D:Ev,C:_v,L:kv,m:Av,X:Mv,S:Dv,M:Lv};function Tv(){var t=pa.f(),a=oo();return t||a}function Bv(t){var a=xi(t);a!==null&&a.tag===5&&a.type==="form"?Md(a):pa.r(t)}var tl=typeof document>"u"?null:document;function yp(t,a,i){var l=tl;if(l&&typeof a=="string"&&a){var o=_e(a);o='link[rel="'+t+'"][href="'+o+'"]',typeof i=="string"&&(o+='[crossorigin="'+i+'"]'),mp.has(o)||(mp.add(o),t={rel:t,crossOrigin:i,href:a},l.querySelector(o)===null&&(a=l.createElement("link"),ee(a,"link",t),Pt(a),l.head.appendChild(a)))}}function Ev(t){pa.D(t),yp("dns-prefetch",t,null)}function _v(t,a){pa.C(t,a),yp("preconnect",t,a)}function kv(t,a,i){pa.L(t,a,i);var l=tl;if(l&&t&&a){var o='link[rel="preload"][as="'+_e(a)+'"]';a==="image"&&i&&i.imageSrcSet?(o+='[imagesrcset="'+_e(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(o+='[imagesizes="'+_e(i.imageSizes)+'"]')):o+='[href="'+_e(t)+'"]';var s=o;switch(a){case"style":s=el(t);break;case"script":s=al(t)}ze.has(s)||(t=A({rel:"preload",href:a==="image"&&i&&i.imageSrcSet?void 0:t,as:a},i),ze.set(s,t),l.querySelector(o)!==null||a==="style"&&l.querySelector(Kl(s))||a==="script"&&l.querySelector(Fl(s))||(a=l.createElement("link"),ee(a,"link",t),Pt(a),l.head.appendChild(a)))}}function Av(t,a){pa.m(t,a);var i=tl;if(i&&t){var l=a&&typeof a.as=="string"?a.as:"script",o='link[rel="modulepreload"][as="'+_e(l)+'"][href="'+_e(t)+'"]',s=o;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=al(t)}if(!ze.has(s)&&(t=A({rel:"modulepreload",href:t},a),ze.set(s,t),i.querySelector(o)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Fl(s)))return}l=i.createElement("link"),ee(l,"link",t),Pt(l),i.head.appendChild(l)}}}function Dv(t,a,i){pa.S(t,a,i);var l=tl;if(l&&t){var o=wi(l).hoistableStyles,s=el(t);a=a||"default";var d=o.get(s);if(!d){var p={loading:0,preload:null};if(d=l.querySelector(Kl(s)))p.loading=5;else{t=A({rel:"stylesheet",href:t,"data-precedence":a},i),(i=ze.get(s))&&$s(t,i);var m=d=l.createElement("link");Pt(m),ee(m,"link",t),m._p=new Promise(function(C,k){m.onload=C,m.onerror=k}),m.addEventListener("load",function(){p.loading|=1}),m.addEventListener("error",function(){p.loading|=2}),p.loading|=4,vo(d,a,l)}d={type:"stylesheet",instance:d,count:1,state:p},o.set(s,d)}}}function Mv(t,a){pa.X(t,a);var i=tl;if(i&&t){var l=wi(i).hoistableScripts,o=al(t),s=l.get(o);s||(s=i.querySelector(Fl(o)),s||(t=A({src:t,async:!0},a),(a=ze.get(o))&&tu(t,a),s=i.createElement("script"),Pt(s),ee(s,"link",t),i.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(o,s))}}function Lv(t,a){pa.M(t,a);var i=tl;if(i&&t){var l=wi(i).hoistableScripts,o=al(t),s=l.get(o);s||(s=i.querySelector(Fl(o)),s||(t=A({src:t,async:!0,type:"module"},a),(a=ze.get(o))&&tu(t,a),s=i.createElement("script"),Pt(s),ee(s,"link",t),i.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(o,s))}}function vp(t,a,i,l){var o=(o=j.current)?yo(o):null;if(!o)throw Error(u(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(a=el(i.href),i=wi(o).hoistableStyles,l=i.get(a),l||(l={type:"style",instance:null,count:0,state:null},i.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=el(i.href);var s=wi(o).hoistableStyles,d=s.get(t);if(d||(o=o.ownerDocument||o,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(t,d),(s=o.querySelector(Kl(t)))&&!s._p&&(d.instance=s,d.state.loading=5),ze.has(t)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},ze.set(t,i),s||Rv(o,t,i,d.state))),a&&l===null)throw Error(u(528,""));return d}if(a&&l!==null)throw Error(u(529,""));return null;case"script":return a=i.async,i=i.src,typeof i=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=al(i),i=wi(o).hoistableScripts,l=i.get(a),l||(l={type:"script",instance:null,count:0,state:null},i.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,t))}}function el(t){return'href="'+_e(t)+'"'}function Kl(t){return'link[rel="stylesheet"]['+t+"]"}function bp(t){return A({},t,{"data-precedence":t.precedence,precedence:null})}function Rv(t,a,i,l){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=t.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),ee(a,"link",i),Pt(a),t.head.appendChild(a))}function al(t){return'[src="'+_e(t)+'"]'}function Fl(t){return"script[async]"+t}function gp(t,a,i){if(a.count++,a.instance===null)switch(a.type){case"style":var l=t.querySelector('style[data-href~="'+_e(i.href)+'"]');if(l)return a.instance=l,Pt(l),l;var o=A({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Pt(l),ee(l,"style",o),vo(l,i.precedence,t),a.instance=l;case"stylesheet":o=el(i.href);var s=t.querySelector(Kl(o));if(s)return a.state.loading|=4,a.instance=s,Pt(s),s;l=bp(i),(o=ze.get(o))&&$s(l,o),s=(t.ownerDocument||t).createElement("link"),Pt(s);var d=s;return d._p=new Promise(function(p,m){d.onload=p,d.onerror=m}),ee(s,"link",l),a.state.loading|=4,vo(s,i.precedence,t),a.instance=s;case"script":return s=al(i.src),(o=t.querySelector(Fl(s)))?(a.instance=o,Pt(o),o):(l=i,(o=ze.get(s))&&(l=A({},i),tu(l,o)),t=t.ownerDocument||t,o=t.createElement("script"),Pt(o),ee(o,"link",l),t.head.appendChild(o),a.instance=o);case"void":return null;default:throw Error(u(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,vo(l,i.precedence,t));return a.instance}function vo(t,a,i){for(var l=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=l.length?l[l.length-1]:null,s=o,d=0;d<l.length;d++){var p=l[d];if(p.dataset.precedence===a)s=p;else if(s!==o)break}s?s.parentNode.insertBefore(t,s.nextSibling):(a=i.nodeType===9?i.head:i,a.insertBefore(t,a.firstChild))}function $s(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function tu(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var bo=null;function Cp(t,a,i){if(bo===null){var l=new Map,o=bo=new Map;o.set(i,l)}else o=bo,l=o.get(i),l||(l=new Map,o.set(i,l));if(l.has(t))return l;for(l.set(t,null),i=i.getElementsByTagName(t),o=0;o<i.length;o++){var s=i[o];if(!(s[fl]||s[Jt]||t==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var d=s.getAttribute(a)||"";d=t+d;var p=l.get(d);p?p.push(s):l.set(d,[s])}}return l}function Sp(t,a,i){t=t.ownerDocument||t,t.head.insertBefore(i,a==="title"?t.querySelector("head > title"):null)}function Hv(t,a,i){if(i===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(t=a.disabled,typeof a.precedence=="string"&&t==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function xp(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function zv(t,a,i,l){if(i.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var o=el(l.href),s=a.querySelector(Kl(o));if(s){a=s._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(t.count++,t=go.bind(t),a.then(t,t)),i.state.loading|=4,i.instance=s,Pt(s);return}s=a.ownerDocument||a,l=bp(l),(o=ze.get(o))&&$s(l,o),s=s.createElement("link"),Pt(s);var d=s;d._p=new Promise(function(p,m){d.onload=p,d.onerror=m}),ee(s,"link",l),i.instance=s}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,a),(a=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=go.bind(t),a.addEventListener("load",i),a.addEventListener("error",i))}}var eu=0;function Ov(t,a){return t.stylesheets&&t.count===0&&So(t,t.stylesheets),0<t.count||0<t.imgCount?function(i){var l=setTimeout(function(){if(t.stylesheets&&So(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4+a);0<t.imgBytes&&eu===0&&(eu=62500*yv());var o=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&So(t,t.stylesheets),t.unsuspend)){var s=t.unsuspend;t.unsuspend=null,s()}},(t.imgBytes>eu?50:800)+a);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(o)}}:null}function go(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)So(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Co=null;function So(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Co=new Map,a.forEach(Nv,t),Co=null,go.call(t))}function Nv(t,a){if(!(a.state.loading&4)){var i=Co.get(t);if(i)var l=i.get(null);else{i=new Map,Co.set(t,i);for(var o=t.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<o.length;s++){var d=o[s];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(i.set(d.dataset.precedence,d),l=d)}l&&i.set(null,l)}o=a.instance,d=o.getAttribute("data-precedence"),s=i.get(d)||l,s===l&&i.set(null,o),i.set(d,o),this.count++,l=go.bind(this),o.addEventListener("load",l),o.addEventListener("error",l),s?s.parentNode.insertBefore(o,s.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(o,t.firstChild)),a.state.loading|=4}}var Jl={$$typeof:_,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function Vv(t,a,i,l,o,s,d,p,m){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Fo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fo(0),this.hiddenUpdates=Fo(null),this.identifierPrefix=l,this.onUncaughtError=o,this.onCaughtError=s,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function wp(t,a,i,l,o,s,d,p,m,C,k,L){return t=new Vv(t,a,i,d,m,C,k,L,p),a=1,s===!0&&(a|=24),s=ge(3,null,null,a),t.current=s,s.stateNode=t,a=Hr(),a.refCount++,t.pooledCache=a,a.refCount++,s.memoizedState={element:l,isDehydrated:i,cache:a},Vr(s),t}function Tp(t){return t?(t=Ri,t):Ri}function Bp(t,a,i,l,o,s){o=Tp(o),l.context===null?l.context=o:l.pendingContext=o,l=_a(a),l.payload={element:i},s=s===void 0?null:s,s!==null&&(l.callback=s),i=ka(t,l,a),i!==null&&(he(i,t,a),Al(i,t,a))}function Ep(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<a?i:a}}function au(t,a){Ep(t,a),(t=t.alternate)&&Ep(t,a)}function _p(t){if(t.tag===13||t.tag===31){var a=ei(t,67108864);a!==null&&he(a,t,67108864),au(t,67108864)}}function kp(t){if(t.tag===13||t.tag===31){var a=Te();a=Jo(a);var i=ei(t,a);i!==null&&he(i,t,a),au(t,a)}}var xo=!0;function qv(t,a,i,l){var o=T.T;T.T=null;var s=H.p;try{H.p=2,iu(t,a,i,l)}finally{H.p=s,T.T=o}}function Uv(t,a,i,l){var o=T.T;T.T=null;var s=H.p;try{H.p=8,iu(t,a,i,l)}finally{H.p=s,T.T=o}}function iu(t,a,i,l){if(xo){var o=lu(l);if(o===null)Ys(t,a,l,wo,i),Dp(t,l);else if(Zv(o,t,a,i,l))l.stopPropagation();else if(Dp(t,l),a&4&&-1<jv.indexOf(t)){for(;o!==null;){var s=xi(o);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var d=Fa(s.pendingLanes);if(d!==0){var p=s;for(p.pendingLanes|=2,p.entangledLanes|=2;d;){var m=1<<31-ve(d);p.entanglements[1]|=m,d&=~m}Ie(s),(mt&6)===0&&(lo=me()+500,Ql(0))}}break;case 31:case 13:p=ei(s,2),p!==null&&he(p,s,2),oo(),au(s,2)}if(s=lu(l),s===null&&Ys(t,a,l,wo,i),s===o)break;o=s}o!==null&&l.stopPropagation()}else Ys(t,a,l,null,i)}}function lu(t){return t=or(t),nu(t)}var wo=null;function nu(t){if(wo=null,t=Si(t),t!==null){var a=f(t);if(a===null)t=null;else{var i=a.tag;if(i===13){if(t=h(a),t!==null)return t;t=null}else if(i===31){if(t=v(a),t!==null)return t;t=null}else if(i===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return wo=t,null}function Ap(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Em()){case Ou:return 2;case Nu:return 8;case dn:case _m:return 32;case Vu:return 268435456;default:return 32}default:return 32}}var ou=!1,qa=null,Ua=null,ja=null,Wl=new Map,$l=new Map,Za=[],jv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dp(t,a){switch(t){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":Wl.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":$l.delete(a.pointerId)}}function tn(t,a,i,l,o,s){return t===null||t.nativeEvent!==s?(t={blockedOn:a,domEventName:i,eventSystemFlags:l,nativeEvent:s,targetContainers:[o]},a!==null&&(a=xi(a),a!==null&&_p(a)),t):(t.eventSystemFlags|=l,a=t.targetContainers,o!==null&&a.indexOf(o)===-1&&a.push(o),t)}function Zv(t,a,i,l,o){switch(a){case"focusin":return qa=tn(qa,t,a,i,l,o),!0;case"dragenter":return Ua=tn(Ua,t,a,i,l,o),!0;case"mouseover":return ja=tn(ja,t,a,i,l,o),!0;case"pointerover":var s=o.pointerId;return Wl.set(s,tn(Wl.get(s)||null,t,a,i,l,o)),!0;case"gotpointercapture":return s=o.pointerId,$l.set(s,tn($l.get(s)||null,t,a,i,l,o)),!0}return!1}function Mp(t){var a=Si(t.target);if(a!==null){var i=f(a);if(i!==null){if(a=i.tag,a===13){if(a=h(i),a!==null){t.blockedOn=a,Gu(t.priority,function(){kp(i)});return}}else if(a===31){if(a=v(i),a!==null){t.blockedOn=a,Gu(t.priority,function(){kp(i)});return}}else if(a===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function To(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var i=lu(t.nativeEvent);if(i===null){i=t.nativeEvent;var l=new i.constructor(i.type,i);nr=l,i.target.dispatchEvent(l),nr=null}else return a=xi(i),a!==null&&_p(a),t.blockedOn=i,!1;a.shift()}return!0}function Lp(t,a,i){To(t)&&i.delete(a)}function Yv(){ou=!1,qa!==null&&To(qa)&&(qa=null),Ua!==null&&To(Ua)&&(Ua=null),ja!==null&&To(ja)&&(ja=null),Wl.forEach(Lp),$l.forEach(Lp)}function Bo(t,a){t.blockedOn===a&&(t.blockedOn=null,ou||(ou=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Yv)))}var Eo=null;function Rp(t){Eo!==t&&(Eo=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Eo===t&&(Eo=null);for(var a=0;a<t.length;a+=3){var i=t[a],l=t[a+1],o=t[a+2];if(typeof l!="function"){if(nu(l||i)===null)continue;break}var s=xi(i);s!==null&&(t.splice(a,3),a-=3,ls(s,{pending:!0,data:o,method:i.method,action:l},l,o))}}))}function il(t){function a(m){return Bo(m,t)}qa!==null&&Bo(qa,t),Ua!==null&&Bo(Ua,t),ja!==null&&Bo(ja,t),Wl.forEach(a),$l.forEach(a);for(var i=0;i<Za.length;i++){var l=Za[i];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Za.length&&(i=Za[0],i.blockedOn===null);)Mp(i),i.blockedOn===null&&Za.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(l=0;l<i.length;l+=3){var o=i[l],s=i[l+1],d=o[se]||null;if(typeof s=="function")d||Rp(i);else if(d){var p=null;if(s&&s.hasAttribute("formAction")){if(o=s,d=s[se]||null)p=d.formAction;else if(nu(o)!==null)continue}else p=d.action;typeof p=="function"?i[l+1]=p:(i.splice(l,3),l-=3),Rp(i)}}}function Hp(){function t(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(d){return o=d})},focusReset:"manual",scroll:"manual"})}function a(){o!==null&&(o(),o=null),l||setTimeout(i,20)}function i(){if(!l&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,o=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(i,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),o!==null&&(o(),o=null)}}}function ru(t){this._internalRoot=t}_o.prototype.render=ru.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(u(409));var i=a.current,l=Te();Bp(i,l,t,a,null,null)},_o.prototype.unmount=ru.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;Bp(t.current,2,null,t,null,null),oo(),a[Ci]=null}};function _o(t){this._internalRoot=t}_o.prototype.unstable_scheduleHydration=function(t){if(t){var a=Yu();t={blockedOn:null,target:t,priority:a};for(var i=0;i<Za.length&&a!==0&&a<Za[i].priority;i++);Za.splice(i,0,t),i===0&&Mp(t)}};var zp=n.version;if(zp!=="19.2.4")throw Error(u(527,zp,"19.2.4"));H.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(u(188)):(t=Object.keys(t).join(","),Error(u(268,t)));return t=R(a),t=t!==null?O(t):null,t=t===null?null:t.stateNode,t};var Gv={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ko.isDisabled&&ko.supportsFiber)try{ul=ko.inject(Gv),ye=ko}catch{}}return an.createRoot=function(t,a){if(!c(t))throw Error(u(299));var i=!1,l="",o=jd,s=Zd,d=Yd;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(d=a.onRecoverableError)),a=wp(t,1,!1,null,null,i,l,null,o,s,d,Hp),t[Ci]=a.current,Zs(t),new ru(a)},an.hydrateRoot=function(t,a,i){if(!c(t))throw Error(u(299));var l=!1,o="",s=jd,d=Zd,p=Yd,m=null;return i!=null&&(i.unstable_strictMode===!0&&(l=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(s=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(p=i.onRecoverableError),i.formState!==void 0&&(m=i.formState)),a=wp(t,1,!0,a,i??null,l,o,m,s,d,p,Hp),a.context=Tp(null),i=a.current,l=Te(),l=Jo(l),o=_a(l),o.callback=null,ka(i,o,l),i=l,a.current.lanes=i,dl(a,i),Ie(a),t[Ci]=a.current,Zs(t),new _o(a)},an.version="19.2.4",an}var jp;function Wv(){if(jp)return uu.exports;jp=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),uu.exports=Jv(),uu.exports}var $v=Wv(),t0="https://cdn.jsdelivr.net/npm/hls.js@1/dist/hls.min.js",Zp="data-fp-hls-loader",Ao=null;function e0(){return typeof window>"u"||window.Hls?Promise.resolve():Ao||(Ao=new Promise((e,n)=>{let r=f=>{f.addEventListener("load",()=>e(),{once:!0}),f.addEventListener("error",()=>{Ao=null,n(new Error("Failed to load hls.js from CDN"))},{once:!0})},u=document.querySelector(`script[${Zp}]`);if(u){if(window.Hls){e();return}r(u);return}let c=document.createElement("script");c.src=t0,c.async=!0,c.crossOrigin="anonymous",c.setAttribute(Zp,"1"),r(c),(document.head??document.documentElement).appendChild(c)}),Ao)}function on(){let e=window.Hls;if(!e)throw new Error("Hls is not available; call loadHlsFromCdn() first");return e}var Bu=class{removeEventListener(e,n,r){}addEventListener(e,n,r){}dispatchEvent(e){return!0}};function Th(){return class extends Bu{}}function a0(){return class extends Bu{}}var i0={get(e){},define(e,n,r){},upgrade(e){},getName(e){throw new Error("Function not implemented.")},whenDefined(e){throw new Error("Function not implemented.")}};function l0(){return class{constructor(e,n={}){this.eventDetail=n?.detail}get detail(){return this.eventDetail}}}function n0(e,n){return new(Th())}function o0(){let e=a0();return{document:{createElement:n0},DocumentFragment:e,customElements:i0,CustomEvent:l0(),EventHandler:Bu,HTMLElement:Th()}}var Bh=typeof window>"u"||globalThis.customElements===void 0,Eh=Bh?o0():globalThis,yu=Eh,V=Bh?Eh.document:globalThis.document;function Xa(e){if(!e.initialPlayClick)return;e.progressBarContainer.querySelectorAll(".chapter-marker, .chapter-marker-end").forEach(c=>c.remove());let n=e.progressBar.getBoundingClientRect().width,r=e.video.offsetWidth,u;r<170||r>=171&&r<=500?u="chapter-marker-mini":r>=471&&r<=950?u="chapter-marker-md":u="chapter-marker-lg",e.chapters.forEach(c=>{let f=V.createElement("div");f.className=`chapter-marker ${u}`;let h=c.startTime/e.video.duration*n;if(f.style.left=`${h+20}px`,e.progressBarContainer.appendChild(f),c.endTime!==void 0){let v=V.createElement("div");v.className=`chapter-marker-end ${u}`;let B=c.endTime/e.video.duration*n;v.style.left=`${B+20}px`,e.progressBarContainer.appendChild(v)}})}function Yp(e){let n=e.video.currentTime,r=e.chapters.find(c=>n>=c.startTime&&n<(c.endTime??1/0)),u=r?{startTime:r.startTime,endTime:r.endTime,value:r.value}:null;return(!e.previousChapter&&u||e.previousChapter&&u&&(e.previousChapter.startTime!==u.startTime||e.previousChapter.endTime!==u.endTime||e.previousChapter.value!==u.value))&&(e.previousChapter=u,e.dispatchEvent(new Event("chapterchange"))),u}function r0(e){e.chapters.length>0?(e.thumbnail.classList.add("chapters"),e.thumbnail.appendChild(e.chapterDisplay)):e.thumbnail.classList.remove("chapters")}var rl=`<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9.00047V15.0005H7L12 20.0005V4.00047L7 9.00047H3ZM10 8.83047V15.1705L7.83 13.0005H5V11.0005H7.83L10 8.83047ZM16.5 12.0005C16.5 10.2305 15.48 8.71047 14 7.97047V16.0205C15.48 15.2905 16.5 13.7705 16.5 12.0005ZM14 3.23047V5.29047C16.89 6.15047 19 8.83047 19 12.0005C19 15.1705 16.89 17.8505 14 18.7105V20.7705C18.01 19.8605 21 16.2805 21 12.0005C21 7.72047 18.01 4.14047 14 3.23047Z" fill="currentColor"/>
  </svg>`,nl=`<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.33999 2.93457L2.92999 4.34457L7.28999 8.70457L6.99999 9.00457H2.99999V15.0046H6.99999L12 20.0046V13.4146L16.18 17.5946C15.53 18.0846 14.8 18.4746 14 18.7046V20.7646C15.34 20.4646 16.57 19.8446 17.61 19.0146L19.66 21.0646L21.07 19.6546L4.33999 2.93457ZM9.99999 15.1746L7.82999 13.0046H4.99999V11.0046H7.82999L8.70999 10.1246L9.99999 11.4146V15.1746ZM19 12.0046C19 12.8246 18.85 13.6146 18.59 14.3446L20.12 15.8746C20.68 14.7046 21 13.3946 21 12.0046C21 7.72457 18.01 4.14457 14 3.23457V5.29457C16.89 6.15457 19 8.83457 19 12.0046ZM12 4.00457L10.12 5.88457L12 7.76457V4.00457ZM16.5 12.0046C16.5 10.2346 15.48 8.71457 14 7.97457V9.76457L16.48 12.2446C16.49 12.1646 16.5 12.0846 16.5 12.0046Z" fill="currentColor"/>
    </svg>`,s0=`<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.25 7.97V16.02C17.73 15.29 18.75 13.77 18.75 12C18.75 10.23 17.73 8.71 16.25 7.97ZM5.25 9V15H9.25L14.25 20V4L9.25 9H5.25ZM12.25 8.83V15.17L10.08 13H7.25V11H10.08L12.25 8.83Z" fill="currentColor"/>
</svg>`,_h=`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32" fill="none">
<path d="M5 14.0006V16.0006C9.97002 16.0006 14 20.0306 14 25.0006H16C16 18.9256 11.075 14.0006 5 14.0006Z" fill="currentColor"/>
<path d="M5 18.0006V20.0006C7.76 20.0006 10 22.2406 10 25.0006H12C12 21.1356 8.86499 18.0006 5 18.0006ZM5 22.0006V25.0006H8C8 23.3456 6.65502 22.0006 5 22.0006ZM25 7.00061H7.00002C5.89499 7.00061 5 7.8956 5 9.00058V12.0006H7.00002V9.00058H25V23.0006H18V25.0006H25C26.105 25.0006 27 24.1056 27 23.0006V9.00058C27 7.8956 26.105 7.00061 25 7.00061Z" fill="currentColor"/>
<path d="M23 11.0006H9V12.6356C12.96 13.9156 16.085 17.0406 17.365 21.0006H23V11.0006Z" fill="currentColor"/>
</svg>`,kh=`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32" fill="none">
<path d="M25 7H7C5.9 7 5 7.9 5 9V12H7V9H25V23H18V25H25C26.1 25 27 24.1 27 23V9C27 7.9 26.1 7 25 7ZM5 22V25H8C8 23.3 6.7 22 5 22ZM5 18V20C7.8 20 10 22.2 10 25H12C12 21.1 8.9 18 5 18ZM5 14V16C10 16 14 20 14 25H16C16 18.9 11.1 14 5 14Z" fill="currentColor"/>
</svg>`,un=`<svg width="100%" height="100%" id="initialPlayButton" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.5 14C3.36739 14 3.24021 13.9473 3.14645 13.8536C3.05268 13.7598 3 13.6326 3 13.5V2.5C3.00001 2.41312 3.02267 2.32773 3.06573 2.25227C3.1088 2.17681 3.17078 2.11387 3.24558 2.06966C3.32037 2.02545 3.4054 2.00149 3.49227 2.00015C3.57915 1.9988 3.66487 2.02012 3.741 2.062L13.741 7.562C13.8194 7.60516 13.8848 7.66857 13.9303 7.74562C13.9758 7.82266 13.9998 7.91051 13.9998 8C13.9998 8.08949 13.9758 8.17734 13.9303 8.25438C13.8848 8.33143 13.8194 8.39484 13.741 8.438L3.741 13.938C3.66718 13.9786 3.58427 14 3.5 14Z" fill="currentColor"/>
</svg>`,Go=`<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 19H10V5H6V19ZM14 5V19H18V5H14Z" fill="currentColor"></path>
</svg>`;function Ah(e,n){e&&new IntersectionObserver((r,u)=>{r.forEach(c=>{c.isIntersecting&&(n(),u.disconnect())})}).observe(e)}var Gp=e=>{e.attachShadow({mode:"open"}),e.shadowRoot.appendChild(e.wrapper),e.shadowRoot.appendChild(e.customStyle)};async function u0(e,n){e.hasAttribute("enable-lazy-loading")?Ah(e,async()=>{Gp(e);let r=await n();e.streamUrlFinal=r}):(Gp(e),e.streamUrlFinal=await n())}var c0=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","encrypted","waitingforkey"],Dh=null;function d0(e,n){n&&Array.isArray(n)&&n.forEach(r=>{switch(r.field){case"playbackId":ct(e,"Error loading the media. This can happen due to invalid Playback ID.");break;case"minResolution":ct(e,"Error loading the media. This can happen due to invalid Minimum resolution.");break;case"maxResolution":ct(e,"Error loading the media. This can happen due to invalid Maximum resolution.");break;case"resolution":ct(e,"Error loading the media. This can happen due to invalid resolution.");break;case"order":ct(e,'Error loading the media. This can happen due to invalid renditionOrder, it should be either "asc" or "desc".');break}})}function Qp(e,n){let r=[];if(e.hasAttribute("min-resolution")){let u=e.getAttribute("min-resolution");r.push(`minResolution=${u}`)}if(e.hasAttribute("max-resolution")){let u=e.getAttribute("max-resolution");r.push(`maxResolution=${u}`)}if(e.hasAttribute("resolution")){let u=e.getAttribute("resolution");r.push(`resolution=${u}`)}if(e.hasAttribute("rendition-order")){let u=e.getAttribute("rendition-order");r.push(`renditionOrder=${u}`)}if(r.length>0){let u=r.join("&");return n.includes("?")?`${n}&${u}`:`${n}?${u}`}return n}var f0=(e,n,r,u)=>{let c={422:()=>d0(e,u),401:()=>ct(e,"Error loading the video. Incorrect playback ID or token."),400:()=>ct(e,r?.includes("ready")?"The media is currently unavailable. Please wait until it's ready and then refresh the page.":"Invalid Playback URL. The provided playback URL is invalid or incorrectly formatted.")};[403,404].forEach(f=>{c[f]=()=>ct(e,"Stream details not found. Playback ID is missing or invalid.")}),(c[n]||(()=>ct(e,"Video stream couldn't be fetched. Please check your playback ID or internet connection.")))()},Xp=async(e,n)=>{let r=await p0(e,n);return r.status===200?(e._src=n,n):(f0(e,r.status,r.errorMessage,r.errorFields),null)};async function p0(e,n){if(e.cache.has(n))return{status:e.cache.get(n),errorFields:null,errorMessage:null};try{let r=await fetch(n),u=r.headers.get("Content-Type")??"",c=await r.text();if(u.includes("application/json"))try{let f=JSON.parse(c);if(f?.success)return e._src=n,{status:r.status,errorFields:null,errorMessage:null};let h=f?.error?.message??"Unknown error occurred.",v=f?.error?.fields??null;return r.status===401&&n.includes("token")&&ct(e,"Invalid playback URL. Please check the playback URL or verify if the token is invalid."),{status:r.status,errorFields:v,errorMessage:h}}catch{}return u.includes("application/vnd.apple.mpegurl")||u.includes("text/plain")?{status:r.status,playlist:c,errorMessage:null}:{status:r.status,errorFields:null,errorMessage:"Unexpected content type."}}catch{return ct(e,"Network Error. Please check your internet connection and try refreshing the page."),{status:null,errorFields:null,errorMessage:"Network Error"}}}var Mh=async(e,n,r,u)=>{let c=Qp(e,`${u}/${n}.m3u8`),f=r?Qp(e,`${u}/${n}.m3u8?token=${r}`):null;try{if(f&&r){let h=await Xp(e,f);if(h)return h}return await Xp(e,c)}catch{return ct(e,"Network Error. Please check your internet connection and try refreshing the page."),null}};function h0(){let e=navigator.userAgent,n=/Chrome/.exec(e)||/CriOS/.exec(e),r=/Edg/.exec(e),u=/OPR|Opera/.exec(e);return!!window.chrome&&!!n&&!r&&!u}function Eu(e){let n=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;return e.isiOS=n,n}function ma(e){Array.isArray(e.playlist)&&(e.playlistPanel.innerHTML="",e.playlist.forEach((n,r)=>{let u=document.createElement("div");u.className="playlist-item",n.playbackId===e.playbackId&&u.classList.add("selected");let c=document.createElement("div");c.className="thumb",c.style.backgroundImage=`url('${n.thumbnail}')`;let f=document.createElement("div");f.className="info";let h=document.createElement("div");if(h.className="playlist-title",h.textContent=n.title,f.appendChild(h),n.duration){let v=document.createElement("div");v.className="playlist-item-duration",v.textContent=n.duration,f.appendChild(v)}u.appendChild(c),u.appendChild(f),u.addEventListener("click",v=>{if(v.preventDefault(),v.stopPropagation(),u.classList.contains("selected")){e.playlistPanel.classList.remove("open"),e.playlistPanel.classList.add("closing"),setTimeout(()=>{e.playlistPanel.classList.remove("closing")},200);return}e.selectEpisodeByPlaybackId(n.playbackId),e.playlistPanel.classList.remove("open"),e.playlistPanel.classList.add("closing"),setTimeout(()=>{e.playlistPanel.classList.remove("closing")},200)}),e.playlistPanel.appendChild(u)}))}var m0=(e,n,r,u)=>Mh(e,n,r,u),y0=(e,n,r,u)=>Mh(e,n,r,u);async function v0(e,n,r,u,c){return c==="on-demand"?await m0(e,n,r,u):c==="live-stream"?await y0(e,n,r,u):(ct(e,"Unsupported stream type"),e.video.poster="",null)}async function Ip(e,n,r,u,c){let f=await v0(e,n,r,u,c);return f?(Dh=f,b0(e,f,c),f):null}function Pp(){return Dh}function b0(e,n,r){e.hasAttribute("enable-lazy-loading")?Ah(e.video,()=>{rh(e,n,r)}):rh(e,n,r)}function Ia(e){let n=Math.floor(e/3600),r=Math.floor(e%3600/60),u=Math.floor(e%60),c=n>0?`${n}:`:"",f=r.toString().padStart(2,"0"),h=u.toString().padStart(2,"0");return`${c}${f}:${h}`}function Kp(e,n){let r=["progressBarContainer","volumeControl","volumeButton","pipButton","fullScreenButton","ccButton","fastForwardButton","rewindBackButton","playPauseButton","timeDisplay","parentVolumeDiv","playbackRateButton","volumeiOSButton","resolutionMenuButton","audioMenuButton","titleElement","mobileControls","leftControls","resolutionMenu","playbackRateDiv","liveStreamDisplay","subtitleMenu","playlistButton","castButton","playlistSlot"],u=n?"1":"0",c=n?"opacity 0.9s ease":"";r.forEach(f=>{let h=e[f];if(h){if(f==="playlistSlot"){let v=n&&!!e.externalPlaylistOpen;h.style.opacity=v?"1":"0",h.style.transition=c;return}h.style.opacity=u,h.style.transition=c}})}function rn(e,n){if(ae())J0(n);else{let r=Math.min(Math.max(e.video.currentTime+n,0),e.video.duration);e.video.currentTime=r}}function g0(e,n){return Number.isNaN(e)?Number.isNaN(n)?"0:00":Ia(n):Ia(e)}function ha(e){let n=e?.video?.duration;return typeof n=="number"&&!Number.isNaN(n)&&(n>0||n===1/0)}function Oo(e){let n;ae()?n=Math.floor(Uh()):n=Math.floor(e.video.currentTime);let r=Math.floor(e.video.duration),u=e.getAttribute("default-show-remaining-time")!==null,c,f;if(u){let h=r-n,v=!Number.isNaN(h);c=v?"-"+Ia(h):"0:00",f=v?Ia(r):"0:00"}else c=Number.isNaN(n)?"0:00":Ia(n),f=g0(r,e.defaultDuration);if(e.timeDisplay.textContent=`${c} / ${f}`,e.video.buffered.length>0){let h=e.video.buffered.end(0)/r*100;e.bufferedRange.style.width=`${h}%`}}function C0(e){let n=e.length;for(;n>0&&e[n-1]==="/";)n--;return e.slice(0,n)}function S0(e){e.mutedAttribute=e.hasAttribute("muted"),e.hasAutoPlayAttribute=e.hasAttribute("auto-play"),e.loopAttribute=e.hasAttribute("loop"),e.disableVideoClickAttr=e.hasAttribute("disable-video-click"),e.enableCacheBusting=e.hasAttribute("enable-cache-busting"),e.controlsContainerValue=$1(e),e.hideControlAttr=e.hasAttribute("hide-controls"),e.loopPlaylistTillEnd=e.hasAttribute("loop-next"),e.token=e.getAttribute("token"),e.drmToken=e.getAttribute("drm-token"),e.playbackId=e.getAttribute("playback-id"),e.defaultPlaybackId=e.getAttribute("default-playback-id"),e.defaultStreamType=e.getAttribute("default-stream-type")??"on-demand",e.streamType=e.getAttribute("stream-type")??e.defaultStreamType??"on-demand",e.debugAttribute=e.hasAttribute("debug"),e.startTimeAttribute=e.hasAttribute("start-time")?e.getAttribute("start-time"):0,e.hideDefaultPlaylistPanel=e.hasAttribute("hide-default-playlist-panel"),e.thumbnailTime=e.getAttribute("thumbnail-time")??e.startTimeAttribute,e.getThumbnailAttribute=e.getAttribute("thumbnail-time"),e.thumbnailTimeAttribute=Number.parseFloat(e.getThumbnailAttribute)||Number.parseFloat(e.thumbnailTime),e.posterAttribute=e.getAttribute("poster"),e.placeholderAttribute=e.getAttribute("placeholder"),e.thumbnailUrlAttribute=e.getAttribute("spritesheet-src");let n=C0((e.thumbnailUrlAttribute??"images.fastpix.com").trim());e.thumbnailUrlFinal=/^https?:\/\//i.test(n)?n:`https://${n.replace(/^\/+/,"")}`,e.useAdvancedSpritesheet=e.hasAttribute("enable-advanced-spritesheet");let r=e.getAttribute("advanced-spritesheet-interval");if(r!=null){let G=Math.floor(Number(r));Number.isFinite(G)&&G>=1&&G<=10&&(e.advancedSpritesheetInterval=G)}e.playbackRatesAttribute=e.getAttribute("playback-rates"),e.defaultPlaybackRateAttribute=e.getAttribute("default-playback-rate"),e.titleText=e.getAttribute("title"),e.preloadAttribute=e.getAttribute("preload"),e.crossoriginAttribute=e.getAttribute("crossorigin");let u="#5D09C7",c="#F5F5F5",f="transparent";e.accentColor=e.getAttribute("accent-color")??u,e.primaryColor=e.getAttribute("primary-color")??c,e.secondaryColor=e.getAttribute("secondary-color")??f,e.style.setProperty("--accent-color",e.accentColor),e.style.setProperty("--primary-color",e.primaryColor),e.style.setProperty("--secondary-color",e.secondaryColor),e.defaultDuration=e.getAttribute("default-duration"),e.disableKeyboardControls=e.hasAttribute("disable-keyboard-controls")&&e.getAttribute("disable-keyboard-controls")!=="false";let h=e.getAttribute("hot-keys");e.hotKeys=e.hasAttribute("hot-keys")?h?.split(" "):[],e.forwardSeekAttribute=e.getAttribute("forward-seek-offset"),e.backwardSeekAttribute=e.getAttribute("backward-seek-offset");let v=e.getAttribute("skip-intro-start"),B=e.getAttribute("skip-intro-end"),R=v==null?Number.NaN:Number.parseFloat(v),O=B==null?Number.NaN:Number.parseFloat(B);e.skipIntroStart=Number.isFinite(R)?R:null,e.skipIntroEnd=Number.isFinite(O)?O:null;let A=e.getAttribute("next-episode-button-overlay"),M=A==null?Number.NaN:Number.parseFloat(A);e.nextEpisodeOverlayStart=Number.isFinite(M)?M:null}function Fp(e){e.config.drmSystems["com.widevine.alpha"].licenseUrl=`https://api.fastpix.com/v1/on-demand/drm/license/widevine/${e.playbackId}?token=${e.drmToken}`,e.config.drmSystems["com.apple.fps"].licenseUrl=`https://api.fastpix.com/v1/on-demand/drm/license/fairplay/${e.playbackId}?token=${e.drmToken}`,e.config.drmSystems["com.apple.fps"].serverCertificateUrl=`https://api.fastpix.com/v1/on-demand/drm/cert/fairplay/${e.playbackId}?token=${e.drmToken}`}var vu=`<svg width="100%" height="100%" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.2227 21.334H14.6671V16.0007H19.556V13.334H12.2227V21.334Z" fill="currentColor"/>
    <path d="M12.2227 21.334H14.6671V16.0007H19.556V13.334H12.2227V21.334Z" fill="currentColor"/>
    <path d="M24.4443 13.334V16.0007H29.3332V21.334H31.7777V13.334H24.4443Z" fill="currentColor"/>
    <path d="M29.3332 31.9993H24.4443V34.666H31.7777V26.666H29.3332V31.9993Z" fill="currentColor"/>
    <path d="M29.3332 31.9993H24.4443V34.666H31.7777V26.666H29.3332V31.9993Z" fill="currentColor"/>
    <path d="M14.6671 26.666H12.2227V34.666H19.556V31.9993H14.6671V26.666Z" fill="currentColor"/>
    <path d="M14.6671 26.666H12.2227V34.666H19.556V31.9993H14.6671V26.666Z" fill="currentColor"/>
    <path d="M24.4443 13.334V16.0007H29.3332V21.334H31.7777V13.334H24.4443Z" fill="currentColor"/>
</svg>`,x0=`<svg width = "100%" height = "100%" viewBox = "0 0 49 48" fill = "none" xmlns = "http://www.w3.org/2000/svg" ><path d="M19.6115 18.6673H14.7227V21.334H22.056V13.334H19.6115V18.6673Z" fill="currentColor"/><path d="M18.6115 13.334V17.6673H14.7227H13.7227V18.6673V21.334V22.334H14.7227H22.056H23.056V21.334V13.334V12.334H22.056H19.6115H18.6115V13.334Z" stroke="black" stroke-opacity="0.15" stroke-width="2"/><path d="M19.6115 18.6673H14.7227V21.334H22.056V13.334H19.6115V18.6673Z" fill="currentColor"/><path d="M18.6115 13.334V17.6673H14.7227H13.7227V18.6673V21.334V22.334H14.7227H22.056H23.056V21.334V13.334V12.334H22.056H19.6115H18.6115V13.334Z" stroke="black" stroke-opacity="0.15" stroke-width="2"/><path d="M29.3888 18.6673V13.334H26.9443V21.334H34.2777V18.6673H29.3888Z" fill="currentColor"/><path d="M34.2777 17.6673H30.3888V13.334V12.334H29.3888H26.9443H25.9443V13.334V21.334V22.334H26.9443H34.2777H35.2777V21.334V18.6673V17.6673H34.2777Z" stroke="black" stroke-opacity="0.15" stroke-width="2"/><path d="M29.3888 18.6673V13.334H26.9443V21.334H34.2777V18.6673H29.3888Z" fill="currentColor"/><path d="M34.2777 17.6673H30.3888V13.334V12.334H29.3888H26.9443H25.9443V13.334V21.334V22.334H26.9443H34.2777H35.2777V21.334V18.6673V17.6673H34.2777Z" stroke="black" stroke-opacity="0.15" stroke-width="2"/><path d="M26.9443 34.666H29.3888V29.3327H34.2777V26.666H26.9443V34.666Z" fill="currentColor"/><path d="M25.9443 34.666V35.666H26.9443H29.3888H30.3888V34.666V30.3327H34.2777H35.2777V29.3327V26.666V25.666H34.2777H26.9443H25.9443V26.666V34.666Z" stroke="black" stroke-opacity="0.15" stroke-width="2"/><path d="M26.9443 34.666H29.3888V29.3327H34.2777V26.666H26.9443V34.666Z" fill="currentColor"/><path d="M25.9443 34.666V35.666H26.9443H29.3888H30.3888V34.666V30.3327H34.2777H35.2777V29.3327V26.666V25.666H34.2777H26.9443H25.9443V26.666V34.666Z" stroke="black" stroke-opacity="0.15" stroke-width="2"/><path d="M14.7227 29.3327H19.6115V34.666H22.056V26.666H14.7227V29.3327Z" fill="currentColor"/><path d="M13.7227 29.3327V30.3327H14.7227H18.6115V34.666V35.666H19.6115H22.056H23.056V34.666V26.666V25.666H22.056H14.7227H13.7227V26.666V29.3327Z" stroke="black" stroke-opacity="0.15" stroke-width="2"/>
    <path d="M13.7227 29.3327V30.3327H14.7227H18.6115V34.666V35.666H19.6115H22.056H23.056V34.666V26.666V25.666H22.056H14.7227H13.7227V26.666V29.3327Z" stroke="black" stroke-opacity="0.15" stroke-width="2"/>
    <path d="M14.7227 29.3327H19.6115V34.666H22.056V26.666H14.7227V29.3327Z" fill="currentColor"/>
</svg >`;function w0(e){Array.from(e.video.textTracks).forEach(n=>{(n.kind==="subtitles"||n.kind==="captions")&&(n.mode="hidden")})}function T0(e){let n=Array.from(e.video.textTracks);for(let u of n)u.mode="hidden";let r=V.createElement("style");r.textContent=`
    /* Hide cues in all browsers */
    video::cue {
      display: none !important;
    }

    /* WebKit-based browsers (Chrome, Safari) */
    video::-webkit-media-text-track-display {
      display: none !important;
      background: none !important;
      color: red !important;
      text-shadow: none !important;
      box-shadow: none !important;
      border: none !important;
      outline: none !important;
    }

    /* Firefox */
    video::cue {
      background: none !important;
      color: red !important;
      text-shadow: none !important;
      box-shadow: none !important;
      border: none !important;
      outline: none !important;
  }`,document.head.appendChild(r)}function Jp(e,n){n.length>0&&(n[0].mode="showing",n[0].default=!0,e.currentSubtitleTrackIndex=0,localStorage.setItem("subtitleLang",n[0].language))}function B0(e){e.wrapper.classList.add("subtitles-up")}function E0(e){e.wrapper.classList.remove("subtitles-up")}function _u(e,n){let r=Array.from(e.video.textTracks);for(let u of r)u.mode="disabled";if(e.subtitleContainer&&(e.subtitleContainer.innerHTML="",e.subtitleContainer.classList.remove("contained")),localStorage.removeItem("subtitleLang"),n?.emitEvent)try{let u=typeof e.getSubtitleTracks=="function"?e.getSubtitleTracks():[],c=e.currentSubtitleTrackId===void 0?null:e.currentSubtitleTrackId;e.dispatchEvent(new CustomEvent("fastpixsubtitlechange",{detail:{tracks:u,currentId:c,currentTrack:null}}))}catch{}}function Lh(e,n,r){e.subtitleMenu.style.display="none";let u=Array.from(e.video.textTracks);for(let c=0;c<u.length;c++){let f=u[c];c===n?(f.mode="showing",e.currentSubtitleTrackIndex=n):f.mode="disabled"}if(r?.emitEvent)try{let c=typeof e.getSubtitleTracks=="function"?e.getSubtitleTracks():[],f=e.currentSubtitleTrackId===void 0?null:e.currentSubtitleTrackId,h=Array.isArray(c)?c.find(v=>v?.isCurrent)??null:null;e.dispatchEvent(new CustomEvent("fastpixsubtitlechange",{detail:{tracks:c,currentId:f,currentTrack:h}}))}catch{}}function _0(e,n){let r=Object.values(n).filter(u=>u!==null&&typeof u=="object"&&"mode"in u&&"kind"in u&&"label"in u&&"language"in u);e.subtitleContainer&&(e.subtitleContainer.innerHTML="",e.subtitleContainer.classList.remove("contained")),r.forEach((u,c)=>{let f=document.getElementById(`track-${c}`);f&&(u.mode==="showing"?f.classList.add("active"):f.classList.remove("active"))})}function k0(e){let n=Array.from(e.video.textTracks),r=e.currentSubtitleTrackIndex;if(r===-1)return;let u=n[r];u.mode==="showing"?u.mode="disabled":u.mode="showing",_0(e,n)}function Rh(e){let n=e.wrapper;document.fullscreenElement?(document.exitFullscreen(),n.classList.remove("fullscreen")):(n.requestFullscreen().catch(r=>{ct(e,"Error attempting to enable full-screen mode:")}),e.fullScreenButton.innerHTML=vu,n.classList.add("fullscreen"))}function Hh(e){e.audioMenu.style.display==="none"?e.audioMenu.style.display="flex":e.audioMenu.style.display="none"}function ku(e){e.resolutionMenu.style.display==="none"?e.resolutionMenu.style.display="flex":e.resolutionMenu.style.display="none"}function A0(e){e.playbackRateDiv.style.display==="none"?e.playbackRateDiv.style.display="flex":e.playbackRateDiv.style.display="none"}function zh(e){e.wrapper.classList.add("initialized"),e.playPauseButton.classList.add("initialized"),e.bottomRightDiv.classList.add("initialized"),e.titleElement.classList.add("initialized"),e.leftControls.classList.add("initialized"),e.progressBar.classList.add("initialized"),e.parentVolumeDiv.classList.add("initialized")}function Au(e){if(!window?.cast?.framework?.RemotePlayer)return{remotePlayer:null,remotePlayerController:null};let n=new window.cast.framework.RemotePlayer,r=new window.cast.framework.RemotePlayerController(n);return{remotePlayer:n,remotePlayerController:r}}function D0(e){let{remotePlayer:n,remotePlayerController:r}=Au();n?.playerState==="PAUSED"&&n?.isPaused&&n?.playerState!=="PLAYING"?(r.playOrPause(),e.pausedOnCasting=!1,e.playPauseButton.innerHTML=Go,localStorage.setItem("pausedOnCasting","false")):(r.playOrPause(),e.pausedOnCasting=!0,e.playPauseButton.innerHTML=un,localStorage.setItem("pausedOnCasting","true"))}function Wp(e,n,r,u){zh(e),!e.isLoading&&(e.video.paused?(e.initialPlayClick||(le(e),Yh(e)),e.video.readyState>=3?e.video.play().then(()=>{Vt(e),e.initialPlayClick=!0,fu(e,e.video.offsetWidth,n,r,u)}).catch(c=>{Vt(e)}):e.video.addEventListener("canplay",()=>{e.video.play().then(()=>{Vt(e),e.initialPlayClick=!0,fu(e,e.video.offsetWidth,n,e.thumbnailUrlFinal,u)}).catch(c=>{Vt(e)})},{once:!0}),e.playPauseButton.innerHTML=Go):(e.video.pause(),e.playPauseButton.innerHTML=un),e.video.addEventListener("canplay",()=>{e.isLoading=!1,ha(e)&&Vt(e),e.initialPlayClick&&fu(e,e.video.offsetWidth,n,e.thumbnailUrlFinal,u)}))}function M0(e){e.nextButton.addEventListener("click",()=>{try{if(typeof e.customNext=="function"){e.customNext(e);return}}catch{}e.next()})}function L0(e){e.prevButton.addEventListener("click",()=>{try{if(typeof e.customPrev=="function"){e.customPrev(e);return}}catch{}e.previous()})}function R0(e){e._externalPlaylistOutsideHandlerRegistered||(e.wrapper.addEventListener("click",n=>{if(!e.hideDefaultPlaylistPanel||!e.externalPlaylistOpen)return;let r=n.target,u=r===e.playlistButton||e.playlistButton.contains(r),c=e.playlistSlot?Array.from(e.playlistSlot.children):[],f=c.some(h=>h.contains(r));!u&&!f&&(e.externalPlaylistOpen=!1,c.forEach(h=>h.style.pointerEvents="none"),e.dispatchEvent(new CustomEvent("playlisttoggle",{detail:{open:!1,hasPlaylist:Array.isArray(e.playlist)&&e.playlist.length>0,currentIndex:e.currentIndex,totalItems:Array.isArray(e.playlist)?e.playlist.length:0,playbackId:e.playbackId??null},bubbles:!0,composed:!0})))},!0),e._externalPlaylistOutsideHandlerRegistered=!0),e.playlistButton.addEventListener("click",()=>{if(e.hideDefaultPlaylistPanel||!e.playlistPanel){let n=!e.externalPlaylistOpen;e.externalPlaylistOpen=n,(e.playlistSlot?Array.from(e.playlistSlot.children):[]).forEach(r=>r.style.pointerEvents=n?"auto":"none"),e.dispatchEvent(new CustomEvent("playlisttoggle",{detail:{open:n,hasPlaylist:Array.isArray(e.playlist)&&e.playlist.length>0,currentIndex:e.currentIndex,totalItems:Array.isArray(e.playlist)?e.playlist.length:0,playbackId:e.playbackId??null},bubbles:!0,composed:!0}));return}e.playlistPanel.classList.contains("open")?(e.playlistPanel.classList.remove("open"),e.playlistPanel.classList.add("closing"),setTimeout(()=>{e.playlistPanel.classList.remove("closing")},200)):(Qt(e),ma(e),e.playlistPanel&&(e.playlistPanel.style.display="block",e.playlistPanel.classList.add("open")))})}function yi(e,n,r,u){let c=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),f=Eu(e),h=Z0(),v=f?null:gi(),{remotePlayer:B}=f?{remotePlayer:null}:Au();if(c||!h){Wp(e,n,r,u);return}if(!f&&h&&B?.canSeek!==!1){D0(e);return}localStorage.removeItem("pausedOnCasting"),!f&&v&&v.endCurrentSession(!0),Wp(e,n,r,u)}function H0(e){if(e.subtitleMenu.style.display==="flex"){e.subtitleMenu.style.display="none";return}if(!e.video?.textTracks)return;for(;e.subtitleMenu.firstChild;)e.subtitleMenu.firstChild.remove();let n=V.createElement("button");n.textContent="Off",n.className="offSubtitles",n.addEventListener("click",()=>{_u(e,{emitEvent:!0}),e.subtitleMenu.style.display="none"}),e.subtitleMenu.appendChild(n);let r=Array.from(e.video.textTracks),u=r.some(c=>c.mode==="showing");for(let c=0;c<r.length;c++){let f=r[c],h=V.createElement("button");h.className="subtitleSelectorButtons",h.textContent=f.label??`Language ${c+1}`,h.addEventListener("click",()=>{Lh(e,c,{emitEvent:!0})}),f.mode==="showing"&&(h.classList.add("active"),e.currentSubtitleTrackIndex=c),e.subtitleMenu.appendChild(h)}u||n.classList.add("active"),e.subtitleMenu.style.display="flex",e.subtitleMenu.className="subtitle-menu",e.subtitleMenu.style.flexDirection="column",e.subtitleMenu.style.color="#000"}var bu="[Cast]",z0=!1;function O0(e){z0=!!e?.debugAttribute}function vi(...e){}function N0(...e){}function $p(...e){vi(...e)}var th=!1;function V0(){if(window?.cast?.framework||window.__fastpixCastLoading||th||document.querySelector('script[src*="cast_sender.js"][data-fastpix-cast="true"]'))return;let e=document.createElement("script");e.src="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1",e.async=!0,e.defer=!0,e.dataset.fastpixCast="true",window.__fastpixCastLoading=!0,th=!0,e.onload=()=>{window.__fastpixCastLoading=!1},e.onerror=()=>{window.__fastpixCastLoading=!1},document.head.appendChild(e)}var Do=!1,nn=null,Du=null;function q0(){nn!==null&&(clearInterval(nn),nn=null),Du=null}function U0(e,n,r,u){O0(u),!Eu(u)&&(window.__onGCastApiAvailable=()=>{Y0(e,n,r,u)})}function j0(){return!!window.chrome?.cast&&!!window.chrome.cast.isAvailable}var Z0=()=>{let e=window?.cast?.framework?.CastContext?.getInstance?.();if(!e)return!1;let n=e.getCastState?.();return n==="AVAILABLE"||n==="CONNECTED"};function Y0(e,n,r,u){Eu(u)||(j0()?K0(e,n,r,u):void 0)}function ae(){return!!gi()?.getCurrentSession()}function Oh(e,n){n.__fpCastFreezeProgressInterval!=null&&(clearInterval(n.__fpCastFreezeProgressInterval),n.__fpCastFreezeProgressInterval=null);function r(){if(!ae())return;let u=window.cast.framework.CastContext.getInstance().getCurrentSession();if(u){let c=u.getMediaSession();if(c){let f=c.getEstimatedTime();n.progressBar.value=f/e.duration*100,n.textContent=Ia(f)}}}n.__fpCastFreezeProgressInterval=window.setInterval(()=>{requestAnimationFrame(r)},1e3)}function gu(e){let n=window.cast.framework.CastContext.getInstance().getCurrentSession();if(!n)return;let r=n.getMediaSession();if(r){let u=new window.chrome.cast.media.SeekRequest;u.currentTime=e,r.seek(u,()=>{},c=>vi("[Cast] Seek failed",c))}}function G0(e){let n=Du;if(!n)return;let r=gi()?.getCurrentSession?.()?.getMediaSession?.();if(!r)return;let u=n.playerContext,c=n.video,f=Au().remotePlayer,h=r.playerState;h!==e.current&&(r.getEstimatedTime?.(),e.current=h),Ke=r.getEstimatedTime(),r.playerState==="BUFFERING"?le(u):Vt(u),u.pausedOnCasting=r.playerState==="PAUSED";let v=u.loopEnabled??f?.isLoopingEnabled;if(f?.duration&&Math.floor(Ke)>=Math.floor(f.duration)&&!v&&!Do){let B=new Event("ended");c.dispatchEvent(B),Do=!0,Yh(u),le(u),localStorage.setItem("chromecastFinished","true"),localStorage.setItem("chromecastActive","false"),le(u)}f?.duration&&Math.floor(Ke)<Math.floor(f.duration)&&Do&&(Do=!1),c.dispatchEvent(new Event("timeupdate"))}function Q0(e,n,r,u){if(r.currentCastSession=e,u!=null&&u!==r){n.pause();return}if(nn!==null){n.pause();return}let{isMuted:c,mediaVolume:f}=Nh(r),h=Math.min(Math.max(f,0),1);localStorage.setItem("chromecastFinished","false"),Ke=n.currentTime,localStorage.setItem("chromecastActive","true"),Oh(n,r),ya(h,c),n.pause(),Du={video:n,playerContext:r};let v={current:null};nn=window.setInterval(()=>{requestAnimationFrame(()=>G0(v))},1e3)}function X0(e,n,r,u){let c=e?.getMediaSession();c?.getEstimatedTime?.(),localStorage.getItem("chromecastActive")==="true"&&localStorage.setItem("chromecastActive","false"),Ke=c?.getEstimatedTime()??Ke,r.currentCastSession=null;let f=u.__fastpixCastingPlayerContext,h=u.__fastpixCastingVideo;if(f==null||f===r){f?.__fpCastFreezeProgressInterval!=null&&(clearInterval(f.__fpCastFreezeProgressInterval),f.__fpCastFreezeProgressInterval=null),q0();let v=h??n;v.currentTime=Ke,localStorage.setItem("media-volume",v.volume.toString()),u.__fastpixCastingPlayerContext=null,u.__fastpixCastingVideo=null}r.pausedOnCasting?n.pause():n.play()}function I0(e,n){let r=gi(),u=window.cast.framework.SessionState;r.addEventListener(window.cast.framework.CastContextEventType.SESSION_STATE_CHANGED,c=>{let f=r.getCurrentSession(),h=window,v=h.__fastpixCastingPlayerContext;switch(c.sessionState,f?.getMediaSession?.(),c.sessionState){case u.SESSION_STARTED:case u.SESSION_RESUMED:Q0(f,e,n,v);break;case u.SESSION_ENDED:X0(f,e,n,h);break}})}function Nh(e){let n=localStorage.getItem("media-volume"),r=n===null?1:Number.parseFloat(n),u=r===0;return e.isMuted=u,{isMuted:u,mediaVolume:r}}function ya(e,n){if(!ae())return;let r=window.chrome.cast,u=window.cast.framework.CastContext.getInstance().getCurrentSession(),c=10,f=0,h=()=>{if(!u)return;let v=u.getMediaSession();if(v!==null){let B=new r.media.VolumeRequest(new r.Volume);B.volume.level=e,B.volume.muted=n,v.setVolume(B,()=>{},R=>vi("❌ Chromecast: Volume update failed",R))}else f<c&&(f++,setTimeout(h,300))};h()}function P0(e){let n=window.cast.framework.CastContext.getInstance().getCurrentSession();n&&n.setVolume(e).then(()=>{}).catch(r=>vi("Volume change error:",r))}function K0(e,n,r,u){let c=gi(),f=window.chrome?.cast;if(!c||!f)return;I0(n,u);let h=u.castReceiverAppId??"CC1AD845";c.setOptions({receiverApplicationId:h,autoJoinPolicy:f.AutoJoinPolicy.ORIGIN_SCOPED,androidReceiverCompatible:!0,language:"en-US",resumeSavedSession:!0}),c.addEventListener(window.cast.framework.CastContextEventType.CAST_STATE_CHANGED,v=>eh(e,v.castState,u)),eh(e,c.getCastState(),u),e.addEventListener("click",()=>F0(c,e,n,r,u))}function eh(e,n,r){let u=window.cast?.framework,c=u?.CastState?.NO_DEVICES_AVAILABLE,f=u?.CastState?.NOT_SUPPORTED,h=n!==c&&n!==f&&(n===u?.CastState?.CONNECTED||n===u?.CastState?.NOT_CONNECTED||n===u?.CastState?.CONNECTING);r?.castButton?.style?.setProperty("--cast-button-display",h?"flex":"none"),e.innerHTML=n===u?.CastState?.CONNECTED?_h:kh}function gi(){return window.cast?.framework?.CastContext?.getInstance()}function F0(e,n,r,u,c){let f=gi(),h=f.getCurrentSession();r.currentSrc||r.src,Qt(c),h?f.requestSession().catch(v=>vi(bu,"Error opening session menu",v)):(window.__fastpixCastingPlayerContext=c,window.__fastpixCastingVideo=r,f.requestSession().then(()=>e1(e,r,u,n,c)).catch(v=>{let B=String(v?.message||v).toLowerCase();B==="cancel"||B.includes("cancel")||vi(bu,"Unable to start casting session",v)}))}function No(e,n){let r=window.cast.framework.CastContext.getInstance().getCurrentSession();if(!r)return;let u=r.getMediaSession();u&&(e==="play"?(u.play(null,()=>{},$p),n.playPauseButton.innerHTML=Go):(u.pause(null,()=>{},$p),n.playPauseButton.innerHTML=un))}var Ke=0;function J0(e){let n=gi().getCurrentSession();if(n){let r=n.getMediaSession();if(r){let u=r.getEstimatedTime(),c=Math.max(0,u+e),f=new window.chrome.cast.media.SeekRequest;f.currentTime=c,r.seek(f,()=>{},h=>vi("Chromecast: Seek failed",h))}}}function W0(e){try{let n=e?.config?.drmSystems;if(!n)return null;let r=n["com.widevine.alpha"],u=n["com.microsoft.playready"];if(!r&&!u)return null;let c={};return r?.licenseUrl&&(c.widevineLicenseUrl=r.licenseUrl,r.licenseUrl.substring(0,80)),u?.licenseUrl&&(c.playReadyLicenseUrl=u.licenseUrl),c}catch{return null}}function $0(e){let n={};return(e.widevineLicenseUrl||e.playReadyLicenseUrl)&&(n.drm={},e.widevineLicenseUrl&&(n.drm.widevine={licenseUrl:e.widevineLicenseUrl},e.licenseRequestHeaders&&(n.drm.widevine.headers=e.licenseRequestHeaders),e.licenseRequestData&&(n.drm.widevine.licenseRequestData=e.licenseRequestData),e.widevineLicenseUrl.substring(0,80),e.licenseRequestHeaders),e.playReadyLicenseUrl&&(n.drm.playready={licenseUrl:e.playReadyLicenseUrl},e.licenseRequestHeaders&&(n.drm.playready.headers=e.licenseRequestHeaders))),n}function Vh(e,n){e&&(e.playerState,e.getEstimatedTime?.(),e.idleReason!=null&&e.idleReason)}function t1(e){let n=0,r=window.setInterval(()=>{requestAnimationFrame(()=>{let u=e.getMediaSession();u?(Vh(u,`TV status #${++n}`),u.playerState==="PLAYING"&&window.clearInterval(r),typeof u.addUpdateListener=="function"&&n===1&&u.addUpdateListener(c=>{u.playerState,u.idleReason})):++n,n>=10&&window.clearInterval(r)})},2e3)}function qh(e,n,r){let u=e.getMediaSession();if(u){if(Vh(u),u.playerState==="PLAYING"){n>0&&setTimeout(()=>gu(n),300);return}u.play(null,()=>{n>0&&setTimeout(()=>gu(n),300)},c=>N0(bu,"media.play() error",c))}else r<6&&setTimeout(()=>qh(e,n,r+1),600)}function e1(e,n,r,u,c){let f=e.getCurrentSession();if(!f)return;let h=c.hls&&typeof c.hls.url=="string"?c.hls.url:"",v;if(h&&h.trim()!==""?v=h:r&&String(r).trim()!==""?v=r:v=n.currentSrc||n.src,!v||v.trim()==="")return;Ke=n.currentTime,window.__fastpixCastingPlayerContext=c,window.__fastpixCastingVideo=n;let B=!0,R=v;(function(){R.substring(0,90)+(R.length>90?"...":""),R.toLowerCase().includes(".m3u8"),R.substring(0,80)+(R.length>80?"...":"");let O=window.chrome.cast,A=new O.media.MediaInfo(R,"application/vnd.apple.mpegurl");A.streamType=O.media.StreamType.BUFFERED,A.metadata=new O.media.GenericMediaMetadata,A.hlsSegmentFormat=O.media.HlsSegmentFormat.FMP4,A.hlsVideoSegmentFormat=O.media.HlsVideoSegmentFormat.FMP4;let M=c.drmConfig;if(!M&&c.hls&&(M=W0(c.hls)??void 0),M&&(M.widevineLicenseUrl||M.playReadyLicenseUrl)){let x=$0(M);A.customData=x,x.drm?.widevine,x.drm?.playready}let G=Array.from(n.textTracks),Y=Array.from(n.querySelectorAll("track")),U=[];if(Y.length>0)for(let x=0;x<Y.length;x++){let E=Y[x],_=new O.media.Track(x+1,O.media.TrackType.TEXT);_.trackContentId=E.src||"",_.trackContentType="text/vtt",_.name=E.label||`Subtitle ${x+1}`,_.language=E.srclang||"en",_.subtype=O.media.TextTrackType.SUBTITLES,U.push(_)}else if(G.length>0)for(let x=0;x<G.length;x++){let E=G[x],_=new O.media.Track(x+1,O.media.TrackType.TEXT);_.trackContentId="",_.trackContentType="text/vtt",_.name=E.label||`Subtitle ${x+1}`,_.language=E.language||"en",_.subtype=O.media.TextTrackType.SUBTITLES,U.push(_)}U.length>0&&(A.tracks=U,c.currentCastSession=f);let Q=new O.media.LoadRequest(A);Q.currentTime=0,Q.autoplay=B,Q.currentTime,Q.autoplay,M?.widevineLicenseUrl||M?.playReadyLicenseUrl,f.loadMedia(Q).then(()=>{u.innerHTML=_h,n.pause(),Oh(n,c),t1(f),qh(f,Ke,0);let{mediaVolume:x,isMuted:E}=Nh(c);ya(x,E);let _=new window.cast.framework.RemotePlayer,q=new window.cast.framework.RemotePlayerController(_);_.volumeLevel!==x&&(_.volumeLevel=x,q.setVolumeLevel())}).catch(x=>{String(x?.message||x)})})()}function Uh(){return Ke}function ah(e){let n;return ae()?n=Uh():n=e.video.currentTime,n}function sl(e){return e.streamType==="live-stream"?"none":""}function Ga(e,n){e&&n&&e.contains(n)&&n.remove()}function ih(e){e&&(e.style.display="none")}function a1(e){e.cartButton&&(e.getAttribute?e.getAttribute("theme"):null)!=="shoppable-shorts"&&(e.cartButton.style.display="none")}function i1(e){window.innerWidth>768||(Ga(e.leftControls,e.parentVolumeDiv),Ga(e.leftControls,e.forwardRewindControlsWrapper),Ga(e.leftControls,e.prevButton),Ga(e.leftControls,e.nextButton),Ga(e.leftControls,e.timeDisplay),Ga(e.mobileControlButtonsBlock,e.forwardRewindControlsWrapper),Ga(e.forwardRewindControlsWrapper,e.rewindBackButton),Ga(e.forwardRewindControlsWrapper,e.fastForwardButton),a1(e),ih(e.subtitleContainer),ih(e.forwardRewindControlsWrapper))}function l1(e){window.innerWidth>768||(e.leftControls.contains(e.forwardRewindControlsWrapper)&&e.forwardRewindControlsWrapper.remove(),e.mobileControlButtonsBlock.contains(e.forwardRewindControlsWrapper)&&e.forwardRewindControlsWrapper.remove(),e.leftControls.contains(e.timeDisplay)&&e.timeDisplay.remove(),e.forwardRewindControlsWrapper.contains(e.rewindBackButton)&&e.rewindBackButton.remove(),e.forwardRewindControlsWrapper.hasChildNodes(e.fastForwardButton)&&e.fastForwardButton.remove(),e.cartButton&&(e.cartButton.style.display="flex"),e.subtitleContainer&&(e.subtitleContainer.style.display="block"),e.forwardRewindControlsWrapper&&(e.forwardRewindControlsWrapper.style.display="none"))}function n1(e){e.controlsContainer.getElementsByClassName("timeDisplay").length>0&&e.timeDisplay.remove(),e.forwardRewindControlsWrapper.hasChildNodes(e.rewindBackButton)&&e.rewindBackButton.remove(),e.forwardRewindControlsWrapper.hasChildNodes(e.fastForwardButton)&&e.fastForwardButton.remove(),e.cartButton&&(e.cartButton.style.display="flex"),e.subtitleContainer&&(e.subtitleContainer.style.display="block"),e.forwardRewindControlsWrapper&&(e.forwardRewindControlsWrapper.style.display="none")}function jh(e){e.controlsContainer.hasChildNodes(e.mobileControls)&&e.mobileControls.remove()}function o1(e){e.controlsContainer.appendChild(e.mobileControls),e.mobileControls.appendChild(e.mobileControlButtonsBlock),e.mobileControlButtonsBlock.appendChild(e.rewindBackButton),e.mobileControlButtonsBlock.appendChild(e.fastForwardButton);let n=getComputedStyle(e.mobileControlButtonsBlock).getPropertyValue("--forward-skip-button").trim(),r=getComputedStyle(e.mobileControlButtonsBlock).getPropertyValue("--backward-skip-button").trim(),u=getComputedStyle(e.mobileControlButtonsBlock).getPropertyValue("--next-episode-button").trim(),c=getComputedStyle(e.mobileControlButtonsBlock).getPropertyValue("--previous-episode-button").trim();n==="none"&&e.mobileControls.classList.add("forwardSkipButtonHidden"),r==="none"&&e.mobileControls.classList.add("rewindBackButtonHidden"),u==="none"&&e.mobileControls.classList.add("nextButtonDisabledMobile"),c==="none"&&e.mobileControls.classList.add("prevButtonDisabledMobile"),e.controlsContainer.classList.contains("hasPlaylist")&&(e.mobileControlButtonsBlock.prepend(e.prevButton),e.mobileControlButtonsBlock.appendChild(e.nextButton))}function r1(e){e.video.muted?e.volumeiOSButton.innerHTML=nl:e.volumeiOSButton.innerHTML=rl,/iPad|iPhone|iPod/.test(navigator.userAgent)&&typeof window<"u"&&!window.MSStream?(e.parentVolumeDiv.classList.add("volumeControliOS"),e.volumeiOSButton.style.display="flex"):(e.parentVolumeDiv.classList.remove("volumeControliOS"),e.volumeControl.style.display="flex",e.volumeButton.style.display="flex",e.volumeiOSButton.style.display="none")}function s1(e){if(ae()){let n=e.video;n.paused||n.pause()}}var Qa=(e,n,r)=>{e.style.maxHeight=`${r-n}px`};function u1(e){let n=e.video.offsetHeight;Qa(e.resolutionMenu,59,n),Qa(e.audioMenu,79,n),Qa(e.subtitleMenu,79,n),Qa(e.thumbnail,59,n)}function c1(e){!e.controlsContainer.classList.contains("hasPlaylist")&&e.bottomRightDiv.contains(e.playlistButton)&&e.playlistButton.remove()}function d1(e,n,r,u,c){e.forwardRewindControlsWrapper.id="forwardRewindControlsWrapperMini",e.forwardRewindControlsWrapper.style.bottom="50%",e.forwardRewindControlsWrapper.style.display="none",e.forwardRewindControlsWrapper.style.opacity="0",e.mobileControls.style.display="flex",e.mobileControlButtonsBlock.style.display="flex",e.rewindBackButton.style.opacity=1,e.fastForwardButton.style.opacity=1,e.progressBar.id="progressBarMini",e.bottomRightDiv.id="bottomRightDivMini",e.parentVolumeDiv.id="parentVolumeMini",i1(e),e.leftControls.classList.add("mobile"),e.playPauseButton.classList.add("mobile"),e.titleElement.classList.add("mobile"),e.bottomRightDiv.classList.add("mobile"),e.subtitleContainer.classList.add("mobile"),e.progressBarContainer.classList.add("mobile"),e.progressBar.classList.add("mobile"),e.parentVolumeDiv.classList.add("mobile"),e.playlistPanel&&Qa(e.playlistPanel,20,n),e.subtitleContainer.classList.add("medium"),e.subtitleContainer.classList.remove("large"),e.progressBarContainer.classList.remove("mobile"),e.progressBar.classList.remove("mobile"),c.forEach(f=>f.classList.add("chapter-marker-mini")),c.forEach(f=>f.classList.remove("chapter-marker-md")),c.forEach(f=>f.classList.remove("chapter-marker-lg")),e.controlsContainer.classList.add("mobile")}function f1(e,n,r,u,c){e.forwardRewindControlsWrapper.id="forwardRewindControlsWrapperMini",e.forwardRewindControlsWrapper.style.bottom="50%",e.forwardRewindControlsWrapper.style.display="none",e.forwardRewindControlsWrapper.style.opacity="0",e.mobileControlButtonsBlock.style.display="flex",e.progressBar.id="progressBarMini",e.bottomRightDiv.id="bottomRightDivMini",e.parentVolumeDiv.id="parentVolumeMini",e.leftControls.appendChild(e.parentVolumeDiv),e.leftControls.classList.add("mobile"),e.playPauseButton.classList.add("mobile"),e.titleElement.classList.add("mobile"),e.bottomRightDiv.classList.add("mobile"),e.subtitleContainer.classList.add("mobile"),e.progressBarContainer.classList.add("mobile"),e.progressBar.classList.add("mobile"),e.parentVolumeDiv.classList.add("mobile"),e.playlistPanel&&Qa(e.playlistPanel,20,n),l1(e),e.subtitleContainer.classList.add("medium"),e.subtitleContainer.classList.remove("large"),e.progressBar.classList.remove("mobile"),c.forEach(f=>f.classList.add("chapter-marker-mini")),c.forEach(f=>f.classList.remove("chapter-marker-md")),c.forEach(f=>f.classList.remove("chapter-marker-lg")),e.controlsContainer.classList.add("mobile")}function p1(e,n,r,u,c){e.progressBar.id="progressBarResponsive",e.bottomRightDiv.id="bottomRightDivResponsive",e.forwardRewindControlsWrapper.id="forwardRewindControlsWrapperResponsive",e.forwardRewindControlsWrapper.style.bottom="50%",e.mobileControlButtonsBlock.style.display="flex",e.timeDisplay.id="timeDisplayResponsive",e.parentVolumeDiv.id="parentVolumeResponsive",e.leftControls.appendChild(e.parentVolumeDiv),e.leftControls.appendChild(e.volumeiOSButton),n1(e),e.playlistPanel&&Qa(e.playlistPanel,79,n),e.leftControls.classList.add("mobile"),e.playPauseButton.classList.add("mobile"),e.titleElement.classList.add("mobile"),e.bottomRightDiv.classList.add("mobile"),e.subtitleContainer.classList.add("mobile"),e.progressBarContainer.classList.add("mobile"),e.progressBar.classList.add("mobile"),e.subtitleContainer.classList.remove("medium","large"),e.progressBarContainer.classList.remove("medium"),c.forEach(f=>f.classList.add("chapter-marker-mini")),c.forEach(f=>f.classList.remove("chapter-marker-md")),c.forEach(f=>f.classList.remove("chapter-marker-lg")),e.controlsContainer.classList.add("mobile")}function h1(e,n,r,u,c){e.ccButton.style.display==="none"?e.playbackRateButton.classList.remove("showPlaybackrateButton"):e.playbackRateButton.classList.add("showPlaybackrateButton"),e.progressBar.id="progressBarResponsiveMd",e.bottomRightDiv.id="bottomRightDivMd",e.forwardRewindControlsWrapper.id="forwardRewindControlsWrapperMd",e.forwardRewindControlsWrapper.style.bottom="10px",e.parentVolumeDiv.id="parentVolumeResponsiveMd",e.playPauseButton.id="playPauseButtonMd",e.playlistPanel&&Qa(e.playlistPanel,100,n),e.leftControls.prepend(e.forwardRewindControlsWrapper),e.controlsContainer.classList.contains("hasPlaylist")&&(e.forwardRewindControlsWrapper.prepend(e.nextButton),e.forwardRewindControlsWrapper.prepend(e.prevButton)),e.forwardRewindControlsWrapper.style.display="inline-flex",e.forwardRewindControlsWrapper.style.opacity="1",e.leftControls.appendChild(e.timeDisplay),e.timeDisplay.style.opacity="1",e.timeDisplay.style.display=sl(e),e.forwardRewindControlsWrapper.appendChild(e.rewindBackButton),e.rewindBackButton.style.opacity=1,e.forwardRewindControlsWrapper.appendChild(e.fastForwardButton),e.fastForwardButton.style.opacity=1,e.leftControls.appendChild(e.parentVolumeDiv),e.leftControls.appendChild(e.volumeiOSButton),e.controlsContainer.hasChildNodes(e.mobileControls)&&e.mobileControls.remove(),e.subtitleContainer.classList.add("medium"),e.subtitleContainer.classList.remove("large"),e.leftControls.classList.remove("mobile"),e.playPauseButton.classList.remove("mobile"),e.titleElement.classList.remove("mobile"),e.bottomRightDiv.classList.remove("mobile"),e.subtitleContainer.classList.remove("mobile"),e.progressBarContainer.classList.remove("mobile"),e.progressBar.classList.remove("mobile"),e.parentVolumeDiv.classList.remove("mobile"),e.progressBarContainer.classList.add("medium"),e.progressBarContainer.classList.remove("large"),c.forEach(f=>f.classList.remove("chapter-marker-mini")),c.forEach(f=>f.classList.add("chapter-marker-md")),c.forEach(f=>f.classList.remove("chapter-marker-lg")),e.controlsContainer.classList.remove("mobile"),e.cartButton&&(e.cartButton.style.display="flex"),e.subtitleContainer&&(e.subtitleContainer.style.display="block"),e.forwardRewindControlsWrapper&&(e.forwardRewindControlsWrapper.style.display="inline-flex")}function m1(e,n,r,u,c){e.progressBar.id="progressBarResponsiveHeightWidth",e.parentVolumeDiv.id="parentVolumeHeightWidth",e.bottomRightDiv.id="bottomRightDivHeightWidth",e.leftControls.classList.remove("mobile"),e.titleElement.classList.remove("mobile"),e.progressBarContainer.classList.remove("mobile"),e.progressBar.classList.remove("mobile"),e.subtitleContainer.classList.remove("large"),e.subtitleContainer.classList.add("medium"),e.leftControls.prepend(e.forwardRewindControlsWrapper),e.forwardRewindControlsWrapper.style.display="inline-flex",e.forwardRewindControlsWrapper.style.opacity="1",e.leftControls.appendChild(e.timeDisplay),e.timeDisplay.style.opacity="1",e.timeDisplay.style.display=sl(e),e.controlsContainer.classList.contains("hasPlaylist")&&(e.leftControls.appendChild(e.prevButton),e.leftControls.appendChild(e.nextButton)),e.forwardRewindControlsWrapper.appendChild(e.rewindBackButton),e.rewindBackButton.style.opacity=1,e.forwardRewindControlsWrapper.appendChild(e.fastForwardButton),e.fastForwardButton.style.opacity=1,e.leftControls.appendChild(e.parentVolumeDiv),e.leftControls.appendChild(e.volumeiOSButton),jh(e),e.leftControls.classList.remove("mobile"),e.playPauseButton.classList.remove("mobile"),e.titleElement.classList.remove("mobile"),e.bottomRightDiv.classList.remove("mobile"),e.wrapper.classList.remove("mobile"),e.progressBarContainer.classList.remove("mobile"),e.progressBar.classList.remove("mobile"),e.parentVolumeDiv.classList.remove("mobile"),c.forEach(f=>f.classList.remove("chapter-marker-mini")),c.forEach(f=>f.classList.remove("chapter-marker-md")),c.forEach(f=>f.classList.remove("chapter-marker-lg")),e.controlsContainer.classList.remove("mobile"),e.cartButton&&(e.cartButton.style.display="flex"),e.subtitleContainer&&(e.subtitleContainer.style.display="block"),e.forwardRewindControlsWrapper&&(e.forwardRewindControlsWrapper.style.display="inline-flex")}function y1(e){let n=e.leftControls,r=e.bottomRightDiv;if(!n||!r)return!1;let u=n.getBoundingClientRect(),c=r.getBoundingClientRect();return!(u.right<c.left||u.left>c.right||u.bottom<c.top||u.top>c.bottom)}function v1(e){let n=e.leftControls,r=e.bottomRightDiv;if(!n||!r)return 0;let u=n.getBoundingClientRect(),c=r.getBoundingClientRect(),f=Math.max(u.left,c.left),h=Math.min(u.right,c.right);return Math.max(0,h-f)}function b1(e){if(!e.isHotspotVisible)return;let n=e.wrapper?.querySelectorAll(".hotspot");!n||n.length===0||n.forEach(r=>{let u=r.dataset.xPercent||r.dataset.x,c=r.dataset.yPercent||r.dataset.y;u!==void 0&&c!==void 0&&e.positionHotspot(r,Number(u),Number(c))})}function g1(e,n){e.progressBar.id="progressBar",e.parentVolumeDiv.id="parentVolume",e.bottomRightDiv.id="bottomRightDiv",e.forwardRewindControlsWrapper.id="forwardRewindControlsWrapperLg",e.forwardRewindControlsWrapper.style.bottom="6px",e.leftControls.classList.remove("mobile"),e.progressBarContainer.classList.remove("mobile"),e.progressBar.classList.remove("mobile"),e.leftControls.prepend(e.forwardRewindControlsWrapper),e.forwardRewindControlsWrapper.style.display="inline-flex",e.forwardRewindControlsWrapper.style.opacity="1",e.leftControls.appendChild(e.timeDisplay),e.timeDisplay.style.opacity="1",e.timeDisplay.style.display=sl(e),e.controlsContainer.classList.contains("hasPlaylist")&&(e.forwardRewindControlsWrapper.prepend(e.nextButton),e.forwardRewindControlsWrapper.prepend(e.prevButton),e.prevButton.id="prevButtonLg",e.nextButton.id="nextButtonLg",e.prevButton.classList.add("prevButtonLg"),e.nextButton.classList.add("nextButtonLg")),e.subtitleContainer.classList.remove("medium","mobile"),e.subtitleContainer.classList.add("large"),e.progressBarContainer.classList.remove("medium"),e.forwardRewindControlsWrapper.appendChild(e.rewindBackButton),e.rewindBackButton.style.opacity=1,e.forwardRewindControlsWrapper.appendChild(e.fastForwardButton),e.fastForwardButton.style.opacity=1,e.leftControls.appendChild(e.parentVolumeDiv),e.leftControls.appendChild(e.volumeiOSButton),jh(e),[e.leftControls,e.playPauseButton,e.titleElement,e.bottomRightDiv,e.wrapper,e.parentVolumeDiv,e.controlsContainer].forEach(r=>r?.classList?.remove("mobile")),e.cartButton&&(e.cartButton.style.display="flex"),e.subtitleContainer&&(e.subtitleContainer.style.display="block"),e.forwardRewindControlsWrapper&&(e.forwardRewindControlsWrapper.style.display="inline-flex"),n.forEach(r=>{r.classList.remove("chapter-marker-mini","chapter-marker-md"),r.classList.add("chapter-marker-lg")})}function C1(e,n,r){if(n<600||n>800)return;let u=e.timeDisplay,c=e.volumeControl;r?(u&&(u.style.display="none"),c&&(c.style.display="none")):(u&&(u.style.display=sl(e)),c&&(c.style.display=""))}function S1(e,n,r){if(n<488||n>615)return;let u=e.timeDisplay,c=e.volumeControl;r?(u&&(u.style.display="none"),c&&(c.style.display="none")):(u&&(u.style.display=sl(e)),c&&(c.style.display=""))}function x1(e){return[e.audioButton,e.castButton,e.playlistButton,e.ccButton].filter(n=>n&&n.style.display!=="none").length}function Ho(e,n,r,u){e.style.display=r?"":"none",n&&(n.style.display=u?"":"none")}function w1(e,n,r,u){let c=x1(e);c>=2?Ho(n,r,!1,!1):c===0?Ho(n,r,!0,!0):Ho(n,r,!0,!1)}function T1(e,n){let r=e.pipButton,u=e.playbackRateButton;if(r){if(n<=471){r.style.display="none";return}n<=600?w1(e,r,u):Ho(r,u,!0,!0)}}function B1(e,n){n<485||n>510||(e.leftControls&&e.leftControls.classList.add("medium"),e.progressBarContainer&&e.progressBarContainer.classList.add("medium"),e.progressBar&&e.progressBar.classList.add("medium"),e.subtitleContainer&&e.subtitleContainer.classList.add("medium"),e.bottomRightDiv&&e.bottomRightDiv.classList.add("medium"),e.wrapper&&e.wrapper.classList.add("medium"))}function E1(e,n){n>=600&&n<=800||n>=488&&n<=615||(e.timeDisplay&&(e.timeDisplay.style.display=sl(e)),e.volumeControl&&(e.volumeControl.style.display=""))}function _1(e,n){n>471||e.progressBar?.classList?.contains("cartSidebarOpen-progress-bar")&&e.bottomRightDiv&&e.bottomRightDiv.classList.add("mobile")}function k1(e,n){let r=!!e.isCartOpen;C1(e,n,r),S1(e,n,r),E1(e,n),B1(e,n),_1(e,n)}function A1(e,n){let r=e.cartSidebar?.querySelector(".cartSidebarProducts");r&&(n<=471?r.classList.add("mobile"):r.classList.remove("mobile"))}function D1(e,n){let r=e.forwardRewindControlsWrapper;if(r)if(n>=472)r.style.display="inline-flex",r.style.opacity="1";else{r.style.display="none",r.style.opacity="0";let u=r.parentElement;u&&u!==e.mobileControlButtonsBlock&&r.remove()}}function M1(e,n){return e<150?{scalingFactor:.6,sizeClass:"sm",deviceType:"mini"}:e>=150&&e<=244?{scalingFactor:.6,sizeClass:"sm",deviceType:"smallMobile"}:e>=245&&e<=471?{scalingFactor:.6,sizeClass:"sm",deviceType:"responsive"}:e>=472&&e<=950?{scalingFactor:.6,sizeClass:"md",deviceType:"tablet"}:e<n?{scalingFactor:.6,sizeClass:"md",deviceType:"portrait"}:{scalingFactor:.6,sizeClass:"lg",deviceType:"large"}}function L1(e,n,r,u){let{deviceType:c,scalingFactor:f,sizeClass:h}=n;switch(c){case"mini":d1(e,r,f,h,u);break;case"smallMobile":f1(e,r,f,h,u);break;case"responsive":p1(e,r,f,h,u);break;case"tablet":h1(e,r,f,h,u);break;case"portrait":m1(e,r,f,h,u);break;case"large":g1(e,u);break}}function bi(e){s1(e);let n=e.video,r=n.offsetWidth,u=n.offsetHeight;u1(e);let c=e.progressBarContainer.querySelectorAll(".chapter-marker");o1(e),r1(e),c1(e);let f=M1(r,u);if(L1(e,f,u,c),e.playlistSlot){let v=e.playlistSlot;v.classList.remove("playlistSlot-sm","playlistSlot-md","playlistSlot-lg","device-mini","device-smallMobile","device-responsive","device-tablet","device-portrait","device-large"),v.classList.add(`playlistSlot-${f.sizeClass}`,`device-${f.deviceType}`)}k1(e,r),A1(e,r),D1(e,r),T1(e,r),e.thumbnail.style.setProperty("--scaling-factor",f.scalingFactor),e.thumbnail.classList.remove("lg","md","sm"),e.thumbnail.classList.add(f.sizeClass),b1(e);let h=y1(e);v1(e),h&&e.debugAttribute}function R1(e){let n=e.thumbnail.querySelector(".thumbnailTimeDisplay");for(;e.thumbnail.firstChild;)e.thumbnail.firstChild.remove();n&&e.thumbnail.appendChild(n)}function lh(e,n,r){e.progressBar.addEventListener("mousemove",u=>{n(u.clientX)}),e.progressBar.addEventListener("mousedown",u=>{n(u.clientX)}),e.progressBar.addEventListener("click",u=>{n(u.clientX)}),e.progressBar.addEventListener("mouseleave",()=>{r.style.display="none",e.thumbnail.classList.remove("show")}),e.progressBar.addEventListener("touchmove",u=>{let c=u.touches[0];n(c.clientX)},{passive:!0}),e.progressBar.addEventListener("touchend",()=>{Zh(e)})}function H1(e){let n=e.tile_width??e.tileWidth??0,r=e.tile_height??e.tileHeight??0,u=Number(e.sheetWidth)||0,c=Number(e.sheetHeight)||0;if(!u||!c)for(let f of e.tiles)f.x+n>u&&(u=f.x+n),f.y+r>c&&(c=f.y+r);return{url:typeof e.url=="string"?e.url:"",tile_width:n,tile_height:r,sheet_width:u,sheet_height:c,tiles:e.tiles}}function z1(e){let n=Number(e.columns),r=Number(e.interval),u=Number(e.tileWidth??e.tile_width),c=Number(e.tileHeight??e.tile_height);if(!n||!r||!u||!c)return null;let f=Number(e.thumbnailCount)||n*Number(e.rows??0);if(!f)return null;let h=[];for(let v=0;v<f;v++)h.push({start:v*r,x:v%n*u,y:Math.floor(v/n)*c});return{url:typeof e.url=="string"?e.url:"",tile_width:u,tile_height:c,sheet_width:Number(e.sheetWidth)||n*u,sheet_height:Number(e.sheetHeight)||Math.ceil(f/n)*c,tiles:h}}function O1(e){return Array.isArray(e.tiles)&&e.tiles.length>0?H1(e):z1(e)}async function nh(e,n,r){if(!n||!r)return null;let u=e.useAdvancedSpritesheet?"advanced-spritesheet":"spritesheet",c=u==="advanced-spritesheet"&&typeof e.advancedSpritesheetInterval=="number"?e.advancedSpritesheetInterval:null,f=`${n}:${u}:${c??"default"}`;if(e.spritesheetCache?.[f])return e.spritesheetCache[f];e.spritesheetCache??(e.spritesheetCache={});try{let h=new URLSearchParams,v=e.token;v&&h.set("token",v),c!=null&&h.set("interval",String(c));let B=h.toString(),R=B?`?${B}`:"",O=`${r}/${n}/${u}.json${R}`,A=await fetch(O);if(!A.ok)return null;let M=await A.json();if(!M||typeof M!="object")return null;let G=O1(M);if(!G||!Array.isArray(G.tiles)||G.tiles.length===0)return null;let Y=c==null?"":`?interval=${c}`;return G.url=`${r}/${n}/${u}.jpg${Y}`,e.spritesheetCache[f]=G,G}catch{return null}}function N1(e){R1(e),e.thumbnailSeekingContainer.appendChild(e.thumbnail),e.controlsContainer.appendChild(e.thumbnailSeekingContainer),V1(e),q1(e),U1(e)}function V1(e){let n=e.thumbnail.querySelector(".thumbnailTimeDisplay")??V.createElement("div");n.classList.contains("thumbnailTimeDisplay")||(n.className="thumbnailTimeDisplay",n.textContent="00:00",e.thumbnail.appendChild(n))}function q1(e){let n=e.thumbnail.querySelector(".thumbnailSeekingArrow")??V.createElement("div");n.classList.contains("thumbnailSeekingArrow")||(n.className="thumbnailSeekingArrow",e.thumbnail.appendChild(n))}function U1(e){let n=e.controlsContainer.querySelector(".seekbarPin")??V.createElement("div");n.classList.contains("seekbarPin")||(n.className="seekbarPin",e.controlsContainer.appendChild(n))}function j1(e,n){let r=Number.parseFloat(getComputedStyle(e.thumbnail).getPropertyValue("--scaling-factor")),u=n?n.tile_width:0,c=n?n.tile_height:0;return{width:u*r,height:c*r,scalingFactor:r}}function Z1(e,n,r,u,c,f,h){let v=f?r:e.thumbnail.offsetWidth||48,B=c+v/2,R=c+u-v/2,O=c+n,A;O<=B?A=c:O>=R?A=c+u-v:A=O-v/2;let M=e.thumbnail.offsetParent,G=M?h.left-M.getBoundingClientRect().left:0;e.thumbnail.style.left=`${A+G}px`,e.thumbnail.style.right="auto",e.thumbnail.style.transform="translateX(0)"}function Y1(e,n,r,u){let c=e.thumbnail.querySelector(".thumbnailSeekingArrow");n>=u-20?(c.style.left="auto",c.style.right=`${r/2}px`):(c.style.left=`${r/2}px`,c.style.right="auto")}function G1(e,n){let r="";for(let u of e.chapters)if(n>=u.startTime&&n<=u.endTime){r=u.value??"",e.currentChapter!==u&&(e.currentChapter=u);break}e.chapterDisplay.textContent=r,e.chapterDisplay.classList.add("multi-line"),e.thumbnail.appendChild(e.chapterDisplay)}function oh(e,n,r,u){return c=>{let f=e.progressBar.getBoundingClientRect(),h=c-f.left,v=h/f.width*e.video.duration;if(Q1(v,e)){Zh(e);return}u&&(e.video.seeking||e.video.readyState<3)&&(v=e.video.currentTime),X1(e,v,h,r,n,u),G1(e,v)}}function Q1(e,n){return Number.isNaN(e)||e<0||e>n.video.duration}function Zh(e){e.thumbnail.classList.remove("show");let n=e.controlsContainer.querySelector(".seekbarPin");n&&(n.style.display="none")}function X1(e,n,r,u,c,f){let{width:h}=u,v=e.progressBar.getBoundingClientRect(),B=e.controlsContainer.getBoundingClientRect(),R=v.width,O=v.left-B.left,A=R-h/2-O;e.thumbnail.classList.add("show"),I1(e,n),Z1(e,r,h,R,O,!!f,B),Y1(e,r,h,A),P1(e,n,c,f,u);let M=e.controlsContainer.querySelector(".seekbarPin");M&&(M.style.display="block",M.style.position="fixed",M.style.left=`${v.left+r}px`,M.style.top=`${v.top+v.height/2}px`,M.style.transform="translate(-50%, -50%)")}function I1(e,n){let r=e.thumbnail.querySelector(".thumbnailTimeDisplay"),u;n<=0?u="00:00":n>=e.video.duration?u=Ia(e.video.duration):u=Ia(n),r.innerHTML!==u&&(r.innerHTML=u)}function P1(e,n,r,u,c){if(!r||!u)return;let f=K1(r,n);if(f){let{scalingFactor:h}=c,v=r.sheet_width||e.spritesheetImage?.width||0,B=r.sheet_height||e.spritesheetImage?.height||0;e.thumbnail.style.backgroundImage=`url(${u})`,e.thumbnail.style.backgroundPosition=`-${f.x*h}px -${f.y*h}px`,e.thumbnail.style.backgroundSize=`${v*h}px ${B*h}px`}}function K1(e,n){let r=e?.tiles;if(!Array.isArray(r)||r.length===0)return null;for(let u=0;u<r.length-1;u++)if(r[u].start<=n&&r[u+1].start>n)return r[u];return null}async function F1(e,n,r){let u=`spritesheetUrl-${n}-${r}`,c=sessionStorage.getItem(u),f;c?f=await nh(e,n,c):(f=await nh(e,n,r),f?.url&&sessionStorage.setItem(u,r));let h=f?.url??null;h===null?(e.thumbnail.classList.add("noThumbnail"),e.progressBar&&e.progressBar.setAttribute("title","")):e.thumbnail.classList.remove("noThumbnail"),N1(e);let v=j1(e,f),B=new Image;h&&(B.src=h,e.spritesheetImage=B,e.thumbnail.style.width=`${v.width}px`,e.thumbnail.style.height=`${v.height}px`);let R=oh(e,f,v,h);lh(e,R,e.controlsContainer.querySelector(".seekbarPin")),h&&(B.onerror=()=>{e.thumbnail.classList.add("noThumbnail"),e.thumbnail.style.width="",e.thumbnail.style.height="",e.progressBar&&e.progressBar.setAttribute("title","");let O=oh(e,f,v,null);lh(e,O,e.controlsContainer.querySelector(".seekbarPin"))})}function J1(e){let n=e.length;for(;n>0&&e[n-1]==="/";)n--;return e.slice(0,n)}function W1(e){e.placeholderAttribute&&(e.video.poster=e.placeholderAttribute);let n=e.thumbnailToken,r=e.hasAttribute("thumbnail-time"),u=e.playbackId,c=v=>{if(v==null)return"";let B=String(v).trim();return!B||B.toLowerCase()==="null"?"":J1(B)},f=v=>{let B=c(v);if(!B||!u)return"";let R=`${B}/${u}/thumbnail.jpg`;return n&&(R+=`?token=${n}`),r&&(R+=`${n?"&":"?"}time=${e.thumbnailTimeAttribute}`),R},h=c(e.thumbnailUrlFinal);if(h&&u&&!e.posterAttribute){let v=f(h);if(v){let B=new Image;B.onload=()=>{e.posterAttribute||(e.video.poster=v)},B.src=v}}e.posterAttribute&&(e.video.poster=e.posterAttribute)}function $1(e){return getComputedStyle(e).getPropertyValue("--controls").trim()}function Cu(e){e.controlsContainer.style.opacity="0",e.playbackRateButton&&(e.playbackRateButton.style.opacity="0"),e.castButton&&(e.castButton.style.opacity="0"),e.playlistSlot&&(e.playlistSlot.style.opacity="0"),e.playbackRateDiv&&(e.playbackRateDiv.style.opacity="0"),e.volumeiOSButton.style.opacity="0",e.resolutionMenuButton.style.opacity="0",e.titleElement&&(e.titleElement.style.opacity="0"),e.subtitleContainer&&(e.subtitleContainer.style.opacity="0")}function Vo(e){e.controlsContainer.style.opacity="1",e.subtitleContainer&&(e.subtitleContainer.style.opacity="1")}function tb(e){e.controlsContainerValue!=="none"&&e.controlsContainer.style.setProperty("--controls","flex")}function Yh(e){e.controlsContainer.style.setProperty("--controls","none")}function fu(e,n,r,u,c){e.controlsContainer.contains(e.mobileControlButtonsBlock)&&(e.mobileControlButtonsBlock.style.display="flex"),n>=471&&(e.playPauseButton.style.position="absolute",e.playPauseButton.id="playPauseAfterClickBreakPoint"),bi(e),c==="on-demand"&&F1(e,r,u??""),tb(e),Xa(e)}function eb(e){e.videoOverLay.classList.add("overlay-show")}function Qt(e){let n=[e.playbackRateDiv,e.resolutionMenu,e.audioMenu,e.subtitleMenu,e.playlistPanel].filter(Boolean),r=!1;try{r=n.some(u=>u?.style?.display!=="none")}catch{}r&&n.forEach(u=>{try{u?.style&&(u.style.display="none")}catch{}});try{e.playlistPanel?.classList?.contains("open")&&(e.playlistPanel.classList.remove("open"),e.playlistPanel.classList.add("closing"),setTimeout(()=>{try{e.playlistPanel?.classList?.remove("closing"),e.playlistPanel?.style&&(e.playlistPanel.style.display="none")}catch{}},500))}catch{}}function ab(e){e.videoOverLay.classList.remove("overlay-show")}function le(e){e.loader?.style.display!=="block"&&(e.loader.style.display="block",e.video?.offsetWidth<=471&&e.playPauseButton?.classList.remove("showPlayButton"))}function Vt(e){e.__fpAudioSwitchHoldActive||(e.loader.style.display="none",e.playPauseButton.classList.add("showPlayButton"))}function ib(e){e.titleText&&(e.titleElement.textContent=e.titleText,e.streamType==="live-stream"?e.titleElement.className="title":e.titleElement.className="title-on-demand",e.parentLiveTitleContainer.appendChild(e.titleElement)),e.streamType==="live-stream"&&(e.liveStreamDisplay.textContent="LIVE",e.liveStreamDisplay.className="liveTag",e.fastForwardButton.style.display="none",e.rewindBackButton.style.display="none",e.playbackRateButton.style.display="none",e.progressBarContainer.style.display="none",e.hasAttribute("target-live-window")?e.bottomRightDiv.appendChild(e.playbackRateButton):e.playbackRateButton.remove(),e.timeDisplay.style.display="none",e.parentLiveTitleContainer.appendChild(e.liveStreamDisplay))}function ct(e,n){if(e.suppressErrorUntilReady===!0||(e.isError=!0,e.wrapper.querySelector(".errorContainer")))return;let r=n.indexOf("."),u=`
        <div style="color: #F5F5F5; font-weight: bold; text-align: center; font-family: inherit;">
          ${n.substring(0,r+1)} 
        </div>
        <div style="color: #F5F5F5; text-align: center; margin-top: 10px; font-family: inherit;">
          ${n.substring(r+1).trim()}
        </div>
    `,c=V.createElement("div");c.classList.add("errorContainer"),c.style.position="absolute",c.style.top="50%",c.style.left="50%",c.style.transform="translate(-50%, -50%)",c.style.zIndex="9999",c.style.backgroundColor="rgba(0, 0, 0, 0.7)",c.style.width="100%",c.style.height="100%",c.style.display="flex",c.style.flexDirection="column",c.style.alignItems="center",c.style.justifyContent="center",c.innerHTML=u,e.wrapper.appendChild(c),typeof Cu=="function"&&Cu(e)}function Mu(e){let n=e.wrapper.querySelector(".errorContainer");e.isError=!1,n&&(n.remove(),typeof Vo=="function"&&Vo(e))}function lb(e){return typeof e.height=="number"&&e.height>e.width?e.width:e.height}function qo(e,n){let r=e.hls?.levels?.[n];if(!r)return null;let u=lb(r),c={id:n,label:`${u}p`,height:r.height,width:r.width};return typeof r.bitrate=="number"&&(c.bitrate=r.bitrate),typeof r.frameRate=="number"&&(c.frameRate=r.frameRate),c}function Gh(e){if(!e)return null;let n=e.loadLevel;if(typeof n=="number"&&n>=0)return n;let r=e.currentLevel;return typeof r=="number"&&r>=0?r:null}function Qh(e){let n=e.userSelectedLevel==null?"auto":"manual",r=e.userSelectedLevel==null?null:qo(e,e.userSelectedLevel),u=Gh(e.hls),c=u==null?null:qo(e,u);return{mode:n,lockedLevel:r,loadedLevel:c}}function nb(e){return Qh(e)}function Xh(e){let n=e.qualityLevelsOrdered;if(!Array.isArray(n)||!e.hls?.levels)return[];let r=[];for(let u of n){let c=e.hls.levels.indexOf(u);if(c<0)continue;let f=qo(e,c);f&&r.push(f)}return r}function Su(e,n,r,u){try{e.dispatchEvent(new CustomEvent("fastpixqualityfailed",{detail:{reason:n,...r===void 0?{}:{levelId:r},...u===void 0?{}:{raw:u}}}))}catch{}}function sn(e){let n=Qh(e),r=e._lastQualityEmitLoadedId,u=typeof r=="number"&&r>=0?qo(e,r):null;try{e.dispatchEvent(new CustomEvent("fastpixqualitychange",{detail:{mode:n.mode,lockedLevel:n.lockedLevel,loadedLevel:n.loadedLevel,previousLoadedLevel:u}}))}catch{}let c=Gh(e.hls);e._lastQualityEmitLoadedId=typeof c=="number"&&c>=0?c:null}function ob(e){try{let n=Xh(e);e.dispatchEvent(new CustomEvent("fastpixqualitylevelsready",{detail:{levels:n}}))}catch{}}function rb(e,n){let r=e.qualityLevelsOrdered;if(!Array.isArray(r)||!e.hls?.levels)return n;let u=r[n];if(!u)return n;let c=e.hls.levels.indexOf(u);return c>=0?c:n}function Ih(e,n){if(!e.hls?.levels)return;e.resolutionSwitching=!0,e.wasPausedBeforeSwitch=e.video.paused,e.wasPausedBeforeSwitch||(e.video.pause(),le(e)),e.resolutionFlagPause=!0,e.isBufferFlushed=!1;let r=rb(e,n);e.hls.currentLevel=r,e.userSelectedLevel=r}function Ph(e,n){Array.from(n).forEach(r=>r.classList.remove("active")),e.classList.add("active")}function Kh(e){e.hls&&(le(e),e.hls.nextLevel=-1,e.userSelectedLevel=null,e.autoResolutionButton&&e.resolutionButtons&&Ph(e.autoResolutionButton,[...e.resolutionButtons,e.autoResolutionButton]),sn(e))}function sb(e,n){if(!e.hls?.levels)return;let r=e.hls.levels.length;if(!Number.isFinite(n)||n<0||n>=r||Math.floor(n)!==n){Su(e,"invalid levelId",n);return}let u=Array.isArray(e.qualityLevelsOrdered)?e.qualityLevelsOrdered.findIndex(c=>e.hls.levels.indexOf(c)===n):-1;if(u<0){Su(e,"levelId not in manifest order",n);return}Ih(e,u),e.resolutionButtons?.[u]&&e.autoResolutionButton&&Ph(e.resolutionButtons[u],[...e.resolutionButtons,e.autoResolutionButton]),sn(e)}function wt(){return on()}function Ka(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}function Fh(e){return e==="on-demand"}var ub={maxMaxBufferLength:120,autoStartLoad:!0,debug:!1,enableWorker:!1,startLevel:-1,backBufferLength:90,emeEnabled:!0,lowLatencyMode:!0,capLevelToPlayerSize:!0,abrMaxWithRealBitrate:!0,abrEwmaFastLive:2,abrEwmaSlowLive:8,abrEwmaFastVoD:3,abrEwmaSlowVoD:9,abrBandWidthUpFactor:.85,abrBandWidthFactor:.8,drmSystems:{"com.widevine.alpha":{robustness:"SW_SECURE_CRYPTO"},"com.apple.fps":{robustness:"SW_SECURE_CRYPTO"}}};async function cb(e){let n=e.config.drmSystems["com.apple.fps"];if(n?.licenseUrl){try{try{let r=await(await navigator.requestMediaKeySystemAccess("com.apple.fps.1_0",[{initDataTypes:["cenc"],audioCapabilities:[{contentType:'audio/mp4;codecs="mp4a.40.2"',robustness:"SW_SECURE_CRYPTO"}],videoCapabilities:[{contentType:'video/mp4;codecs="avc1.42E01E"',robustness:"SW_SECURE_CRYPTO"}]}])).createMediaKeys();await e.video.setMediaKeys(r)}catch{try{let r=await(await navigator.requestMediaKeySystemAccess("com.widevine.alpha",[{initDataTypes:["cenc"],audioCapabilities:[{contentType:'audio/mp4;codecs="mp4a.40.2"',robustness:"SW_SECURE_CRYPTO"}],videoCapabilities:[{contentType:'video/mp4;codecs="avc1.42E01E"',robustness:"SW_SECURE_CRYPTO"}]}])).createMediaKeys();await e.video.setMediaKeys(r)}catch{}}}catch{}e.video.addEventListener("loadstart",()=>{}),e.video.addEventListener("loadedmetadata",()=>{}),e.video.addEventListener("canplay",()=>{}),e.video.addEventListener("webkitkeymessage",async r=>{try{if(r.messageType==="certificate-request"){let u=n.certificateUrl||n.serverCertificateUrl;if(u){let c=await(await fetch(u)).arrayBuffer(),f=new window.WebKitMediaKeyMessageEvent("webkitkeymessage",{message:c,messageType:"certificate"});e.video.dispatchEvent(f)}}else if(r.messageType==="license-request"){let u=r.message,c=n.licenseUrl,f=await fetch(c,{method:"POST",headers:{"Content-Type":"application/octet-stream"},body:u});if(!f.ok)throw new Error(`License request failed: ${f.status} ${f.statusText}`);let h=await f.arrayBuffer(),v=new window.WebKitMediaKeyMessageEvent("webkitkeymessage",{message:h,messageType:"license"});e.video.dispatchEvent(v)}}catch{}})}}function xu(e){let n=e?.__fpHlsNetworkListenersTeardown;if(typeof n=="function")try{n()}catch{}e.__fpHlsNetworkListenersTeardown=void 0}function db(e,n){xu(e);let r=!1,u=!0,c=!1,f=()=>{let A=e?.hls;if(!(!navigator.onLine||!u||!A))try{typeof A.startLoad=="function"&&A.startLoad()}catch{}},h=()=>{requestAnimationFrame(()=>f())},v=()=>{c?(ct(e,"A fatal error occurred previously while loading a fragment. Please refresh the page to try again."),c=!1):(u=!0,Mu(e),r=!1,h())},B=()=>{e?.debugAttribute,!ae()&&(ct(e,"You are currently offline. Please connect to a network to continue watching."),u=!1)};function R(A,M){let G=wt();if((M===G.ErrorDetails.LEVEL_LOAD_ERROR||M===G.ErrorDetails.LEVEL_EMPTY_ERROR||M===G.ErrorDetails.LEVEL_LOAD_TIMEOUT)&&Su(A,String(M),void 0,M),M===wt().ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED){ct(A,"A DRM (Digital Rights Management) error occurred. The playback session cannot continue due to a session update failure.");return}if(M===wt().ErrorDetails.BUFFER_STALLED_ERROR){le(A);return}if(M.startsWith("key")){ct(A,"A DRM (Digital Rights Management) error occurred. Please check your drm-token or token for the stream.");return}M===wt().ErrorDetails.FRAG_LOAD_ERROR?(c=!0,ct(A,"An error occurred while loading a fragment. Please try refreshing the page."),A.hls.destroy()):M===wt().ErrorDetails.LEVEL_LOAD_ERROR||M===wt().ErrorDetails.LEVEL_EMPTY_ERROR?ct(A,"An Error occurred while loading the stream. Please try refreshing the page."):M===wt().ErrorDetails.LEVEL_LOAD_TIMEOUT?(A.hls.destroy(),ct(A,"An error occurred while loading the stream. Please try refreshing the page.")):M===wt().ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||M===wt().ErrorDetails.MANIFEST_PARSING_ERROR?(ct(A,"An error occurred while loading the video. Please try refreshing the page."),A.hls.destroy()):(ct(A,"An error occurred while loading the video. Playback session cannot continue, try refreshing the page."),A.hls.destroy())}function O(A,M,G){G===wt().ErrorTypes.MEDIA_ERROR&&(M===!0?ct(A,"A problem occurred while buffering media. Playback cannot continue."):setTimeout(()=>requestAnimationFrame(()=>f()),1e3)),G===wt().ErrorTypes.NETWORK_ERROR&&(!navigator.onLine&&!r?(ct(A,"You are offline. Please connect to a network to continue watching."),r=!0):(f(),r=!1))}window.addEventListener("online",v),window.addEventListener("offline",B),e.__fpHlsNetworkListenersTeardown=()=>{window.removeEventListener("online",v),window.removeEventListener("offline",B)},e.hls.on(wt().Events.ERROR,(A,M)=>{M.fatal?R(e,M.details):fb(e,M.details),n==="on-demand"?pb(e,A):(hb(e,A),O(e,M.fatal,M.type))})}function fb(e,n){n.startsWith("KEY_SYSTEM")&&(ct(e,"A DRM error occurred, but the player is attempting to recover."),e.hls.recoverMediaError())}function pb(e,n){n.fatal&&(n.response?.code===404?ct(e,"The video you are trying to access is not available."):n.response?.code===500&&ct(e,"Server error while loading the video. Please try again later."))}function hb(e,n){n.fatal&&(n.response?.code===404&&n.details===wt().ErrorDetails.MANIFEST_LOAD_ERROR?ct(e,"No live stream is currently active on this channel."):n.response?.code===403&&ct(e,"Invalid token. Please check your access rights."))}function mb(){let e=navigator.connection;if(!e||e.saveData===!0)return 0;let n=(e.effectiveType||"").toLowerCase(),r=typeof e.downlink=="number"?e.downlink:10;return n==="slow-2g"||n==="2g"||n==="3g"&&r<1?0:-1}function rh(e,n,r){let u=e.enableCacheBusting?`${n}?t=${Date.now()}`:n;if(wt().isSupported()){n&&typeof n=="string"&&(e.hls.attachMedia(e.video),e.video.loop=!!e.loopAttribute,e.hasAttribute("autoplay-shorts")&&(e.hls.startLevel=mb()),e.hls.loadSource(u));let c=e.hasAttribute("auto-play")||e.hasAttribute("autoplay-shorts")||e.hasAttribute("loop-next");e.hls.on(wt().Events.FRAG_LOADED,()=>{c||Vt(e)}),db(e,r),e.hls.on(wt().Events.FRAG_BUFFERED,()=>{c||Vt(e)})}else e.video.canPlayType("application/vnd.apple.mpegurl")?(e.debugAttribute,cb(e),e._src=u,e.video.src=u,e.video.loop=!!e.loopAttribute):ct(e,"HLS is not supported, and the browser does not support the HLS format.")}function Jh(e){e.hls.on(wt().Events.RECOVERED,()=>{Mu(e)}),e.hls.on(wt().Events.MANIFEST_PARSED,()=>{e.hls.attachMedia(e.video)})}function yb(e){e.hls.on(wt().Events.MANIFEST_PARSED,(n,r)=>{e._lastQualityEmitLoadedId=null;let u=r.levels,c=r.subtitleTracks;e.audioTracksRetrieved=r.audioTracks;let f=e.getAttribute("rendition-order")==="desc"?[...u].reverse():u;vb(e,f),wb(e,e.audioTracksRetrieved),em(e),kb(e,c),Ab(e);try{let{audioTracks:h,currentAudioTrackId:v}=Qo(e),{subtitleTracks:B,currentSubtitleTrackId:R}=tm(e),O=Array.isArray(h)?h.find(M=>M?.isCurrent)??null:null,A=Array.isArray(B)?B.find(M=>M?.isCurrent)??null:null;e.dispatchEvent(new CustomEvent("fastpixtracksready",{detail:{audioTracks:h,subtitleTracks:B,currentAudioId:v,currentSubtitleId:R,currentAudioTrackLoaded:O,currentSubtitleLoaded:A}}))}catch{}try{ob(e),sn(e)}catch{}}),e.hls.on(wt().Events.LEVEL_SWITCHED,()=>{sn(e)}),e.hls.on(wt().Events.BUFFER_FLUSHED,()=>Db(e))}function vb(e,n){if(e.qualityLevelsOrdered=Array.isArray(n)?n:[],e.resolutionMenu)for(;e.resolutionMenu.firstChild;)e.resolutionMenu.firstChild.remove();if(e.resolutionButtons=[],n.map(r=>r.height)[0]===0){e.resolutionMenuButton.remove(),e.pipButton.remove();return}e.autoResolutionButton=sh("Auto",()=>{Kh(e),ku(e)}),e.resolutionMenu.appendChild(e.autoResolutionButton),e.resolutionButtons=n.map((r,u)=>{let c=typeof r.height=="number"&&r.height>r.width?r.width:r.height,f=sh(`${c}p`,()=>bb(e,u));return e.resolutionMenu.appendChild(f),f}),Xo(e.autoResolutionButton,[...e.resolutionButtons,e.autoResolutionButton])}function sh(e,n){let r=V.createElement("button");return r.className="qualitySelectorButtons",r.textContent=e,r.title=e,r.addEventListener("click",n),r}function bb(e,n,r){Ih(e,n),Xo(e.resolutionButtons[n],[...e.resolutionButtons,e.autoResolutionButton]),ku(e),sn(e)}function gb(e){return(e||"").toString().trim().toLowerCase()}function Wh(e){let n=[],r=new Map;for(let u of e){let c=gb(u.label);if(!c){n.push(u);continue}let f=r.get(c);if(f===void 0){r.set(c,n.length),n.push(u);continue}!n[f].isCurrent&&u.isCurrent&&(n[f]=u)}return n}function Cb(e,n){let r=e.getAttribute?.("default-audio-track");if(typeof r=="string"&&r.trim()){let u=r.trim().toLowerCase();return n.findIndex(c=>(c?.name??"").toString().trim().toLowerCase()===u)}return-1}function $h(e,n){if(!Array.isArray(n)||n.length===0)return-1;let r=Cb(e,n);if(r>=0)return r;let u=n.findIndex(f=>f?.default===!0);if(u>=0)return u;let c=n.findIndex(f=>(f?.name??"").toString().toLowerCase()==="default");return c>=0?c:0}function Sb(e,n,r){return typeof n?.audioTrack=="number"&&n.audioTrack>=0?n.audioTrack:$h(e,r)}function xb(e,n,r){let u=(e?.lang??"").toString().trim();return{id:n,label:(e?.name??"").toString().trim()||u||`Track ${n+1}`,language:u||void 0,isDefault:!!e?.default,isCurrent:n===r}}function Qo(e){let n=e.hls,r=[];Array.isArray(e.audioTracksRetrieved)?r=e.audioTracksRetrieved:Array.isArray(n?.audioTracks)&&(r=n.audioTracks);let u=Sb(e,n,r),c=r.map((B,R)=>xb(B,R,u)),f=Wh(c),h=c.find(B=>B.isCurrent),v=h?h.id:null;return{audioTracks:f,currentAudioTrackId:v}}function tm(e){let n=e.video;if(!n?.textTracks)return{subtitleTracks:[],currentSubtitleTrackId:null};let r=Array.from(n.textTracks||[]).map((h,v)=>({track:h,index:v})).filter(({track:h})=>h.kind==="subtitles"||h.kind==="captions").map(({track:h,index:v})=>{let B=(h.language||"").toString().trim();return{id:v,label:(h.label||B||"").toString().trim()||`Track ${v+1}`,language:B||void 0,isDefault:h.mode==="showing",isCurrent:h.mode==="showing"}}),u=Wh(r),c=r.find(h=>h.isCurrent),f=c?c.id:null;return{subtitleTracks:u,currentSubtitleTrackId:f}}function em(e){let{audioTracks:n,currentAudioTrackId:r}=Qo(e);e.audioTracks=n,e.currentAudioTrackId=r}function Uo(e){if(!e?.audioMenu)return;em(e);let{audioTracks:n}=Qo(e);e.audioMenu.innerHTML="";let r=(n||[]).map(c=>_b(e,c.label,c.id,!!c.isCurrent));e.audioMenu.append(...r);let u=(n||[]).findIndex(c=>c?.isCurrent);u>=0&&r[u]&&Xo(r[u],e.audioMenu.children),e.audioMenuButton.style.display=(n||[]).length>1?e.audioMenuButton.classList.add("audioMenuButtonShow"):e.audioMenuButton.classList.remove("audioMenuButtonShow")}function wb(e,n){let r=$h(e,n);if(r>=0&&Array.isArray(n)&&n.length>0)try{e.hls.audioTrack=r,setTimeout(()=>{Ka(()=>{try{e.hls?.audioTrack!==r&&(e.hls.audioTrack=r)}catch{}})},0)}catch{}Uo(e)}function Lt(e,...n){try{e?.debugAttribute}catch{}}function jo(e,n,r,u){Lt(e,"audio-switch loader display time (ms)",{ms:r,sessionId:n,reason:u})}function mi(e,n,r){let u=e?.__fpAudioSwitchT0;if(typeof u!="number")return;let c=Math.round((performance.now()-u)/10)/100;Lt(e,"audio-switch timing (s)",{phase:n,elapsedSec:c,...r})}function wu(e,n){let r=e?.__fpAudioSwitchT0;if(typeof r!="number")return;let u=Math.round((performance.now()-r)/10)/100,c=e.__fpAudioSwitchMeta;Lt(e,"audio-switch TOTAL duration (request → this point)",{totalSec:u,path:n,fromTrackIndex:c?.from,toTrackIndex:c?.to}),e.__fpAudioSwitchMeta=void 0}function ln(e,n){let r=n??e?.video;!r||e?.__fpAudioSwitchUserHadPaused||r.play().catch(()=>{})}function Tb(e){clearTimeout(e.__fpAudioSwitchHideTimer),e.__fpAudioSwitchSession=(e.__fpAudioSwitchSession||0)+1;let n=e.__fpAudioSwitchSession;return le(e),e.__fpAudioSwitchLoaderShownAt=performance.now(),n}function uh(e,n){n<0||(clearTimeout(e.__fpAudioSwitchHideTimer),e.__fpAudioSwitchHideTimer=setTimeout(()=>{Ka(()=>{if(e.__fpAudioSwitchSession!==n)return;let r=e.__fpAudioSwitchLoaderShownAt;typeof r=="number"?(jo(e,n,Math.round(performance.now()-r),"hide-after-switch"),e.__fpAudioSwitchLoaderShownAt=void 0):jo(e,n,0,"hide-after-switch (no show timestamp)"),Vt(e),mi(e,"switch-complete (heavy: ui-loader-hidden)",{sessionId:n,note:"elapsed since switch-requested; includes 280ms post-SWITCHED debounce"});let u=e.__fpAudioSwitchOutcomePath??"heavy";e.__fpAudioSwitchOutcomePath=void 0,wu(e,u==="heavy-fallback"?"heavy-fallback":"heavy"),e.__fpAudioSwitchT0=void 0,e.__fpAudioSwitchUserHadPaused=void 0})},280))}function Zo(e,n){try{let r=e?.audioTracks,u=(Array.isArray(r)?r[n]:null)?.url;if(!u)return!1;let c=e?.loadLevelObj?.uri;return u!==c}catch{return!1}}function am(e,n,r){let u=e;return!u||r<0?!0:!(typeof n=="number"&&n>=0&&Zo(u,n)&&!Zo(u,r))}function Bb(e){let n=e?.video;if(!(!n||!Number.isFinite(n.currentTime)||n.paused)){try{let r=n.currentTime,u=n.duration,c=r+.001;n.currentTime=Number.isFinite(u)&&c>=u?Math.max(0,r-.001):c}catch{}requestAnimationFrame(()=>{n.play().catch(()=>{})})}}function ch(e){let n=e?.hls,r=e?.video;if(!(!n||!r||!Number.isFinite(r.currentTime)))try{typeof n.startLoad=="function"&&n.startLoad(r.currentTime,!0)}catch{}}function ll(e,n){let r=e?.hls,u=e?.video;if(!r||!u||!Number.isFinite(u.currentTime)){Lt(e,"directResume: skip (no hls/video/time)");return}let c=Date.now();e.__fpDirectResumeAt,e.__fpDirectResumeAt=c;let f=(h,v)=>{if(!Number.isFinite(u.currentTime))return;let B=u.currentTime;if(Lt(e,`directResume: ${h}`,{t:B,muted:u.muted,paused:u.paused,hlsAudioTrack:r.audioTrack,force:!0,withStartLoad:v}),v)try{typeof r.startLoad=="function"&&r.startLoad(B,!0)}catch(R){Lt(e,"directResume: startLoad error",R)}if(!u.paused){try{let R=u.duration,O=B+.001;u.currentTime=Number.isFinite(R)&&O>=R?Math.max(0,B-.001):O}catch{}u.play().catch(()=>{})}};queueMicrotask(()=>f("1",!0)),setTimeout(()=>Ka(()=>f("2",!1)),90)}function im(e,n,r,u){let c=e?.video,f=n??e?.hls;if(!c||!Number.isFinite(c.currentTime)||!f||typeof f.on!="function"||typeof f.off!="function"||r<0){Lt(e,"nudge: skip register (missing deps or invalid id)");return}let h=typeof u=="number"&&u>=0&&Zo(f,u)&&!Zo(f,r),v=!h,B=q=>{if(Lt(e,`nudge wave (${q})`,{muted:c.muted,paused:c.paused}),c.paused){ll(e);return}Bb(e)},R=e.__fpAudioTrackSwitchNudgeCleanup;if(typeof R=="function")try{R()}catch{}e.__fpAudioSwitchUserHadPaused=c.paused,e.__fpAudioSwitchHoldActive&&(e.__fpAudioSwitchHoldActive=!1,ln(e,c));let O=v?-1:Tb(e);e.__fpAudioSwitchT0=performance.now(),e.__fpAudioSwitchSwitchingAt=void 0,e.__fpAudioSwitchMeta={from:u,to:r},Lt(e,"audio-switch timing (s)",{phase:"switch-requested",elapsedSec:0,from:u,to:r,lightweightAudioSwitch:v,altToMain:h});let A=!1,M=!1,G,Y,U=(q,I)=>{if(A||M)return;let J=I?.id,tt=f.audioTrack;if(!(J!=r&&tt!=r)){if(M=!0,e.__fpAudioSwitchSwitchingAt=performance.now(),mi(e,"hls-AUDIO_TRACK_SWITCHING",{id:J,name:I?.name}),v){Lt(e,"AUDIO_TRACK_SWITCHING: lightweight — no early startLoad (hls default)");return}Lt(e,"AUDIO_TRACK_SWITCHING: early startLoad at playhead"),ch(e)}},Q=()=>{try{f.off(wt().Events.BUFFER_FLUSHED,Q)}catch{}A||f.audioTrack==r&&(Lt(e,"BUFFER_FLUSHED after alt→main, nudge"),mi(e,"hls-BUFFER_FLUSHED (alt→main only)",{altToMain:h}),h&&!c.paused&&!e.__fpAudioSwitchHoldActive&&(e.__fpAudioSwitchHoldActive=!0,e.__fpAudioSwitchHoldTime=c.currentTime,Lt(e,"hold: pause playhead while main audio buffer rebuilds (avoids silent skip)"),le(e),c.pause()),B("buffer-flushed"),queueMicrotask(()=>{ch(e),ll(e)}))},x=()=>{if(!A){A=!0,e.__fpAudioSwitchSwitchingAt=void 0;try{f.off(wt().Events.AUDIO_TRACK_SWITCHING,U)}catch{}try{f.off(wt().Events.AUDIO_TRACK_SWITCHED,_)}catch{}try{f.off(wt().Events.BUFFER_FLUSHED,Q)}catch{}G!==void 0&&clearTimeout(G),Y!==void 0&&clearTimeout(Y),e.__fpAudioTrackSwitchNudgeCleanup===E&&(e.__fpAudioTrackSwitchNudgeCleanup=void 0)}},E=()=>{x()},_=(q,I)=>{let J=I?.id,tt=f.audioTrack;if(J!=r&&tt!=r){Lt(e,"AUDIO_TRACK_SWITCHED ignored",{evId:J,hlsAt:tt,expected:r,name:I?.name});return}Lt(e,"AUDIO_TRACK_SWITCHED matched",{evId:J,hlsAt:tt,expected:r,muted:c.muted}),mi(e,"hls-AUDIO_TRACK_SWITCHED",{id:J,name:I?.name});let vt=e.__fpAudioSwitchSwitchingAt;if(typeof vt=="number"){let Bt=Math.round((performance.now()-vt)/10)/100;Lt(e,"audio-switch HLS window (SWITCHING→SWITCHED, mux-equivalent)",{engineWindowSec:Bt,id:J,name:I?.name})}if(x(),Uo(e),e.__fpAudioSwitchHoldActive){e.__fpAudioSwitchHoldActive=!1;let Bt=e.__fpAudioSwitchHoldTime;if(typeof Bt=="number"&&Number.isFinite(Bt))try{c.currentTime=Bt}catch{}Lt(e,"hold: resume after audio track ready")}if(v){Lt(e,"AUDIO_TRACK_SWITCHED: lightweight path (no loader / no directResume)"),jo(e,null,0,"lightweight-no-loader"),mi(e,"switch-complete (lightweight total)",{note:"no blocking loader"}),wu(e,"lightweight"),e.__fpAudioSwitchT0=void 0,queueMicrotask(()=>{ln(e,c),e.__fpAudioSwitchUserHadPaused=void 0});return}B("switched"),queueMicrotask(()=>{e.__fpAudioSwitchOutcomePath="heavy",ll(e),uh(e,O),ln(e,c),e.__fpAudioSwitchUserHadPaused=void 0})};f.on(wt().Events.AUDIO_TRACK_SWITCHING,U),f.on(wt().Events.AUDIO_TRACK_SWITCHED,_),e.__fpAudioTrackSwitchNudgeCleanup=E,Lt(e,"listening for AUDIO_TRACK_SWITCHING / SWITCHED",{expected:r,previous:u,altToMain:h,lightweightAudioSwitch:v,muted:c.muted,paused:c.paused}),h&&f.on(wt().Events.BUFFER_FLUSHED,Q),v||(G=setTimeout(()=>{Ka(()=>{A||f.audioTrack==r&&(Lt(e,"nudge mid-fallback @650ms (still listening for SWITCHED)"),B("fallback-mid"))})},650)),Y=setTimeout(()=>{Ka(()=>{if(A)return;let q=f.audioTrack==r;if(Lt(e,v?"lightweight audio switch final cleanup @3s":"nudge final-fallback @4s (stop listening)",{ok:q}),x(),Uo(e),e.__fpAudioSwitchHoldActive){e.__fpAudioSwitchHoldActive=!1;let I=e.__fpAudioSwitchHoldTime;if(typeof I=="number"&&Number.isFinite(I))try{c.currentTime=I}catch{}Lt(e,"hold: resume (final fallback)")}if(v){jo(e,null,0,"lightweight-fallback-timer-no-loader"),mi(e,"fallback-3s (!SWITCHED) lightweight",{ok:q}),wu(e,"lightweight-fallback"),e.__fpAudioSwitchT0=void 0,ln(e,c),e.__fpAudioSwitchUserHadPaused=void 0;return}mi(e,"fallback-4s (!SWITCHED yet) heavy path → schedule loader hide",{ok:q}),q&&B("fallback-final"),ll(e),e.__fpAudioSwitchOutcomePath="heavy-fallback",uh(e,O),ln(e,c),e.__fpAudioSwitchUserHadPaused=void 0})},v?3e3:4e3)}function Eb(e){try{let n=typeof e.getAudioTracks=="function"?e.getAudioTracks():[],r=e.currentAudioTrackId===void 0?null:e.currentAudioTrackId,u=Array.isArray(n)?n.find(c=>c?.isCurrent)??null:null;e.dispatchEvent(new CustomEvent("fastpixaudiochange",{detail:{tracks:n,currentId:r,currentTrack:u}}))}catch{}}function _b(e,n,r,u){let c=V.createElement("button");c.className="audioSelectorButtons";let f=(n??"").toString().toLowerCase()==="default"?"Default":(n??"").toString();return c.textContent=f,c.title=f,u&&c.classList.add("active"),c.addEventListener("click",h=>{let v=r;Lt(e,"audio UI: switch request",{to:v,from:e.hls?.audioTrack,muted:e.video?.muted,paused:e.video?.paused});let B=typeof e.hls?.audioTrack=="number"?e.hls.audioTrack:-1;im(e,e.hls,v,B),e.hls.audioTrack=v,am(e.hls,B,v)||ll(e),setTimeout(()=>{Ka(()=>{try{e.hls?.audioTrack!==v&&(Lt(e,"audio UI: re-apply track index"),e.hls.audioTrack=v)}catch{}})},0),Xo(c,e.audioMenu.children),Hh(e),Eb(e),h.stopPropagation()}),c}function kb(e,n){e.ccButton.style.display=n.length>0?e.ccButton.classList.add("ccButtonLength"):e.ccButton.classList.remove("ccButtonLength")}function Ab(e){let n=e.resolutionMenuButton,r=n.cloneNode(!0);n.parentNode.replaceChild(r,n),e.resolutionMenuButton=r,e.resolutionMenuButton.addEventListener("click",()=>{if(e.resolutionMenu&&e.resolutionMenu.style.display!=="none"){e.resolutionMenu.style.display="none";return}Qt(e),ku(e)})}function Db(e){if(!e.resolutionSwitching||!e.initialPlayClick)return;if(e.isBufferFlushed){e.resolutionSwitching=!1;return}let n=e.video.currentTime;e.video.currentTime=n+.001,e.wasPausedBeforeSwitch?(Vt(e),e.resolutionSwitching=!1):e.video.play().then(()=>{e.isBufferFlushed=!0,Vt(e),e.resolutionSwitching=!1}).catch(r=>{r?.name,Vt(e),e.isBufferFlushed=!0,e.resolutionSwitching=!1})}function Xo(e,n){Array.from(n).forEach(r=>r.classList.remove("active")),e.classList.add("active")}async function Mb(e){if(await e0(),e.hls)return;let n=on();e.config={...e.config,startFragPrefetch:Fh(e.streamType)},e.hls=new n(e.config),Jh(e),yb(e)}function je(e){e.primaryColor=e.getAttribute("primary-color")??"#F5F5F5";let n=e.volumeControl.value,r=`linear-gradient(to right, ${e.primaryColor} 0%, ${e.primaryColor} ${(n*100).toFixed(2)}%, rgba(255, 255, 255, 0.1) ${(n*100).toFixed(2)}%, rgba(255, 255, 255, 0.1) 100%)`;e.volumeControl.style.background=r}function Lu(e){e.video.muted?e.volumeiOSButton.innerHTML=nl:e.volumeiOSButton.innerHTML=rl}function Ze(e){let n=Number.parseFloat(e.volumeControl.value);e.hasAttribute("no-volume-pref")?localStorage.removeItem("savedVolumeIcon"):localStorage.setItem("savedVolumeIcon",e.volumeButton.innerHTML),e.video.muted||n===0?e.volumeButton.innerHTML=nl:n>=.1&&n<=.6?e.volumeButton.innerHTML=s0:e.volumeButton.innerHTML=rl}function Lb(e){e.isiOS=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,e.video.setAttribute("playsinline",""),e.video.removeAttribute("controls"),Vo(e),e.fullScreenButton.addEventListener("click",()=>{e.video.webkitDisplayingFullscreen?(e.video.setAttribute("controls","true"),Cu(e)):(e.video.removeAttribute("controls"),Vo(e)),e.video.webkitEnterFullscreen&&e.video.webkitEnterFullscreen()});let n=e.hasAttribute("no-volume-pref");localStorage.getItem("savedVolume")==="0"&&(e.video.muted=!0,Lu(e)),e.volumeiOSButton.addEventListener("click",()=>{lm(e,n),Qt(e)})}function dh(e,n,r){let u=Math.min(1,Math.max(0,e.video.volume+n));e.video.volume=u,e.video.muted&&u>0&&(e.video.muted=!1),e.volumeControl.value=u.toString(),je(e),Ze(e),r?(localStorage.removeItem("savedVolumeIcon"),localStorage.removeItem("savedVolume")):(localStorage.setItem("savedVolumeIcon",e.volumeButton.innerHTML),localStorage.setItem("savedVolume",u.toString())),ae()&&ya(e.video.volume,e.video.muted)}function Rb(e){let n=localStorage.getItem("savedVolume");if(n!==null){e.primaryColor=e.getAttribute("primary-color")??"#F5F5F5",e.video.volume=Number.parseFloat(n),e.volumeControl.value=n;let r=`linear-gradient(to right, ${e.primaryColor} 0%, ${e.primaryColor} ${(n*100).toFixed(2)}%, rgba(255, 255, 255, 0.1) ${(n*100).toFixed(2)}%, rgba(255, 255, 255, 0.1) 100%)`;e.volumeControl.style.background=r}}function lm(e,n){n?localStorage.removeItem("savedVolumeIcon"):localStorage.setItem("savedVolumeIcon",e.volumeButton.innerHTML);let r=localStorage.getItem("savedVolume");e.video.muted??r==="0"?(e.video.muted=!1,e.volumeButton.innerHTML=nl,e.volumeControl.value="1",e.video.volume=1):(e.video.muted=!0,e.volumeButton.innerHTML=rl,e.volumeControl.value="0",e.video.volume=0),je(e),Ze(e),Lu(e),n?(localStorage.removeItem("savedVolume"),localStorage.removeItem("savedVolumeIcon")):(localStorage.setItem("savedVolume",e.video.muted?"0":e.video.volume.toString()),localStorage.setItem("savedVolumeIcon",e.volumeButton.innerHTML))}function nm(e){return e&&typeof e.seekTime=="number"&&typeof e.x=="number"&&typeof e.y=="number"&&typeof e.tooltipPosition=="string"&&typeof e.link=="string"}function Hb(e,n,r){if(n.onProductClick?.type!=="openLink")return!1;n.onProductClick.shouldPause&&e.video.pause();let u=n.onProductClick.params?.targetUrl;return u&&window.open(u,"_blank","noopener,noreferrer"),e.triggerCartIconDance(),!0}function om(e,n,r,u="1200"){let c=V.createElement("div");c.className="hotspot",c.style.position="absolute",c.style.width="32px",c.style.height="32px",c.style.cursor="pointer",c.style.zIndex=u,c.dataset.xPercent=String(n.x),c.dataset.yPercent=String(n.y),e.positionHotspot(c,Number(n.x),Number(n.y));let f=V.createElement("div");f.className="hotspot-dot",c.appendChild(f);let h=zb(n,r);return c.appendChild(h),c.onmouseenter=()=>h.style.opacity="1",c.onmouseleave=()=>h.style.opacity="0",c}function zb(e,n){let r=V.createElement("div");return r.className="hotspot-tooltip",r.innerText=String(n??"").replace(/\s+/g," ").trim(),r.style.position="absolute",r.style.whiteSpace="nowrap",r.style.background="#222",r.style.color="#fff",r.style.padding="6px 12px",r.style.borderRadius="6px",r.style.fontSize="0.95em",r.style.pointerEvents="none",r.style.opacity="0",r.style.transition="opacity 0.2s",Ob(r,e?.tooltipPosition),r}function Ob(e,n="bottom"){switch(n){case"left":e.style.right="110%",e.style.top="50%",e.style.transform="translateY(-50%)";break;case"right":e.style.left="110%",e.style.top="50%",e.style.transform="translateY(-50%)";break;case"top":e.style.left="50%",e.style.bottom="110%",e.style.transform="translateX(-50%)";break;default:e.style.left="50%",e.style.top="110%",e.style.transform="translateX(-50%)";break}}function rm(e,n){e.onclick=r=>{(r.target===e||e.contains(r.target))&&(r.stopPropagation(),window.open(n.link,"_blank","noopener,noreferrer"))}}function Nb(e,n){if(nm(n))return n.seekTime;if(e.onProductClick?.params?.seekTime&&typeof e.onProductClick.params.seekTime=="number")return e.onProductClick.params.seekTime}function Vb(e,n){if(n.onProductClick?.type!=="seek")return!1;let r=n?.markers[0],u=Nb(n,r);if(typeof u!="number"||!r)return!1;e.video.currentTime=u,e.video.pause(),e.removeAllHotspots();let c=om(e,r,n.name,"1200");rm(c,r),e.wrapper.appendChild(c),e.isHotspotVisible=!0;let f=Number(n.onProductClick?.waitTillPause);return fm(e,c,f),!0}function qb(e,n){if(!n.markers?.length)return!1;let r=n.markers[0];if(!nm(r))return!1;e.video.currentTime=r.seekTime,e.video.pause(),e.removeAllHotspots();let u=om(e,r,n.name,"1");rm(u,r),e.wrapper.appendChild(u),e.isHotspotVisible=!0;let c=Number(n.onProductClick?.waitTillPause);return fm(e,u,c),!0}function sm(e,n,r){if(n.onProductHover?.type!=="overlay")return;let u=V.createElement("div"),c=e.querySelector(".thumbWrap"),f=c||e,h=!!c;u.className=`product-hover-overlay${h?" post-play":""}`,u.style.position="absolute",u.style.background="rgba(34,34,34,0.85)",u.style.color="#fff",u.style.display="flex",u.style.alignItems="center",u.style.justifyContent="center",u.style.textAlign="center",u.style.fontSize="1em",u.style.boxSizing="border-box",u.style.zIndex="10",u.style.pointerEvents="none",u.style.opacity="0",u.style.transition="opacity 0.2s",u.innerText=n.onProductHover.params.description||"",f.appendChild(u),e.onmouseenter=()=>{u.style.opacity="1",r.dispatchEvent(new CustomEvent("productHoverPost",{detail:{product:n}}))},e.onmouseleave=()=>{u.style.opacity="0"}}function um(e,n,r){if(n.onProductHover?.type!=="swap")return;let u=e.querySelector("img");if(!u)return;let c=String(n.thumbnail),f=String(n.onProductHover?.params?.switchImage??n.thumbnail);try{let h=new Image;h.src=f}catch{}e.onmouseenter=()=>{u&&(u.src=f),r.dispatchEvent(new CustomEvent("productHover",{detail:{product:n}}))},e.onmouseleave=()=>{u&&(u.src=c)}}function cm(e,n,r){e.onclick=u=>{u.stopPropagation(),r.dispatchEvent(new CustomEvent("productClick",{detail:{product:n}})),dm(r),r.closeCartSidebar(),!Hb(r,n)&&(Vb(r,n)||qb(r,n))}}function dm(e){let n=e.wrapper.querySelector(".post-play-overlay");n&&n.remove(),e.controlsContainer&&(e.controlsContainer.style.display="")}function fm(e,n,r){r<=0||(e.playPauseButton.disabled=!1,e.hotspotPauseTimeout=setTimeout(()=>{e.wrapper.contains(n)&&(e.video.play(),e.removeAllHotspots())},r*1e3))}function Ub(e){if(e.getAttribute?.("theme")!=="shoppable-video-player")return;let n=e.wrapper.querySelector(".post-play-overlay");n&&n.remove(),e.controlsContainer&&(e.controlsContainer.style.display="none");let r=V.createElement("div");r.className="post-play-overlay",r.style.position="absolute",r.style.top="0",r.style.left="0",r.style.width="100%",r.style.height="100%",r.style.display="flex",r.style.alignItems="center",r.style.justifyContent="center",r.style.zIndex="2000",r.style.backdropFilter="blur(8px)",r.style.background="rgba(0,0,0,0.35)",r.style.overflow="hidden";let u=V.createElement("div");u.className="post-play-products-row",u.style.display="flex",u.style.flexDirection="row",u.style.gap="16px",u.style.flexWrap="wrap",u.style.alignItems="center",u.style.justifyContent="center",u.style.alignContent="flex-start",u.style.boxSizing="border-box",u.style.padding="8px",u.style.maxHeight="calc(100% - 96px)",u.style.overflowY="auto";let c=e.wrapper.clientWidth||e.wrapper.offsetWidth||0,f=16,h=2;c>360&&(h=3),c>600&&(h=4),c>1e3&&(h=5);let v=Math.max(100,Math.floor((c-(h-1)*f)/h)),B=Math.max(80,Math.floor(v*.72));e.cartData.products.forEach(A=>{let M=V.createElement("div");M.className="cartProduct",M.style.display="flex",M.style.flexDirection="column",M.style.alignItems="center",M.style.justifyContent="flex-start",M.style.flex=`0 1 ${v}px`,M.style.width=`${v}px`,M.style.minWidth="0",M.style.boxSizing="border-box",M.style.padding="0",M.innerHTML=`
      <div class="thumbWrap" style="position:relative;width:100%;height:${B}px;overflow:hidden;border-radius:8px 8px 0 0;">
        <img src="${A.thumbnail}" class="cartProductImage" alt="${A.name}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:8px 8px 0 0;"/>
      </div>
      <div style="margin-top:8px;font-weight:600;color:#222;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%;box-sizing:border-box;padding:0 8px 8px;font-size:14px">${A.name}</div>
    `,cm(M,A,e),sm(M,A,e),um(M,A,e),u.appendChild(M)});let R=V.createElement("button");R.innerText="Replay",R.style.marginTop="16px",R.style.marginBottom="4px",R.style.padding="12px 32px",R.style.fontSize="1.1em",R.style.borderRadius="8px",R.style.border="none",R.style.background="var(--accent-color)",R.style.color="var(--primary-color)",R.style.cursor="pointer",R.style.boxShadow="0 2px 8px rgba(0,0,0,0.10)",R.style.transition="background 0.2s",R.onmouseenter=()=>{R.style.background="var(--primary-color)",R.style.color="var(--accent-color)"},R.onmouseleave=()=>{R.style.background="var(--accent-color)",R.style.color="var(--primary-color)"},R.onclick=()=>{e.hasAutoClosedSidebar=!1,e.video.currentTime=0,e.video.play(),r.remove(),e.controlsContainer&&(e.controlsContainer.style.display=""),e.dispatchEvent(new CustomEvent("replay"))};let O=V.createElement("div");O.style.display="flex",O.style.flexDirection="column",O.style.alignItems="center",O.style.maxHeight="100%",O.style.overflow="auto",O.appendChild(u),O.appendChild(R),r.appendChild(O),e.wrapper.appendChild(r)}function jb(e){e.cartSidebar||(e.cartSidebar=V.createElement("div")),e.cartSidebar.className="cartSidebar",e.cartSidebar.style.cssText=`
    position: absolute;
    top: 0; right: 0; height: 100%;
    width: 0; background: var(--shoppable-sidebar-background-color); box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
    z-index: 1300; overflow: hidden; transition: width 0.2s ease;backdrop-filter: blur(4px);
    display: flex; flex-direction: column; align-items: stretch;
  `,e.cartSidebar.innerHTML=`
    <div class="cartSidebarProducts" style="flex:1;overflow-y:auto;padding:0 16px;"></div>
  `,e.wrapper.contains(e.cartSidebar)||e.wrapper.appendChild(e.cartSidebar),e.isSidebarHovered=!1,e.cartSidebar.addEventListener("mouseenter",()=>{e.isSidebarHovered=!0}),e.cartSidebar.addEventListener("mouseleave",()=>{e.isSidebarHovered=!1}),e.cartGotoLink=e.getAttribute("product-link")||void 0}function fh(e){e.cartButton.onclick=n=>{n.stopPropagation();let r=e.getAttribute?e.getAttribute("theme"):null;if(r==="shoppable-shorts"){let u=e.cartGotoLink||"https://www.fastpix.com";window.open(u,"_blank","noopener,noreferrer");return}r==="shoppable-video-player"&&(e.isCartOpen?e.closeCartSidebar():e.openCartSidebar())}}function Tu(e){let n=e.cartSidebar?.querySelector(".cartSidebarProducts");n&&(n.innerHTML="",e.cartData.products.forEach(r=>{let u=V.createElement("div");u.className="cartProduct",u.style.cssText=`
      display:flex;
      padding: 10px;
      margin-bottom:16px;
      cursor:pointer;
      align-items:center;
      justify-content:center;
      position: relative;
    `,u.innerHTML=`
      <img src="${r.thumbnail}" class="cartProductImage" alt="${r.name}" style="width:100%;height:auto;object-fit:cover;border-radius:8px;"/>
    `,typeof r.startTime=="number"&&(u.dataset.startTime=String(r.startTime)),typeof r.endTime=="number"&&(u.dataset.endTime=String(r.endTime)),sm(u,r,e),um(u,r,e),cm(u,r,e),n.appendChild(u)}))}function ph(e){let n=e.getAttribute("theme")==="shoppable-video-player",r=e.cartData.productSidebarConfig?.startState==="openOnPlay";if(n&&r){let f=()=>{e._openOnPlayDone||(e.hasAutoClosedSidebar||e.openCartSidebar(),e._openOnPlayDone=!0)};if(e.video&&!e.video.paused&&e.video.readyState>=2)setTimeout(f,0);else{e.video.addEventListener("playing",f,{once:!0}),e.video.addEventListener("play",f,{once:!0});let h=()=>{(e.video?.currentTime||0)>0&&(f(),e.video.removeEventListener("timeupdate",h))};e.video.addEventListener("timeupdate",h)}}if(!n)return;try{e._openCloseTUHandler&&e.video.removeEventListener("timeupdate",e._openCloseTUHandler)}catch{}let u=typeof e.cartData.productSidebarConfig?.autoClose=="number"?Number(e.cartData.productSidebarConfig.autoClose):null,c=()=>{Yb(e),u!==null&&e.isCartOpen&&!e.hasAutoClosedSidebar&&(e.video?.currentTime??0)>=u&&!e.isSidebarHovered&&(e.closeCartSidebar(),e.hasAutoClosedSidebar=!0)};e._openCloseTUHandler=c,e.video.addEventListener("timeupdate",c)}function Zb(e){e.video.addEventListener("ended",()=>{e.showPostPlayOverlay&&Ub(e)})}function pu(e){if(e._initShoppableRequested)return;e._initShoppableRequested=!0;let n=e.getAttribute?e.getAttribute("theme"):null;if(!(n!=="shoppable-video-player"&&n!=="shoppable-shorts"))if(e.wrapper.contains(e.cartButton)||e.wrapper.appendChild(e.cartButton),e.cartButton&&(e.cartButton.style.display="flex",e.cartButton.style.position="absolute",e.cartButton.style.top="16px",e.cartButton.style.right="16px",e.cartButton.style.zIndex="1600",e.cartButton.style.background="#fff",e.cartButton.style.borderRadius="50%",e.cartButton.style.boxShadow="0 2px 8px rgba(0,0,0,0.10)",e.cartButton.style.width="40px",e.cartButton.style.height="40px",e.cartButton.style.alignItems="center",e.cartButton.style.justifyContent="center",e.cartButton.style.border="none",e.cartButton.style.cursor="pointer",e.cartButton.style.opacity="0.6",n==="shoppable-shorts"&&(e.cartButton.style.visibility="visible",e.cartButton.style.opacity="1")),n==="shoppable-video-player"){jb(e),fh(e),Tu(e),ph(e),Zb(e);try{e.addEventListener("shoppabledatachange",()=>{try{e._openOnPlayDone=!1,e.hasAutoClosedSidebar=!1}catch{}ph(e),e.cartSidebar&&Tu(e)})}catch{}}else n==="shoppable-shorts"&&fh(e)}function Yb(e){let n=e.cartSidebar?.querySelector(".cartSidebarProducts");if(!n)return;let r=e.video?.currentTime??0,u=null;if(Array.from(n.querySelectorAll(".cartProduct")).forEach(c=>{let f=Number(c.dataset?.startTime??Number.NaN),h=Number(c.dataset?.endTime??Number.NaN),v=!Number.isNaN(f)&&!Number.isNaN(h)&&r>=f&&r<=h,B=c.querySelector("img");v?(B&&(B.style.boxShadow="0 0 12px var(--accent-color)",B.style.border="2px solid var(--accent-color)",B.style.borderRadius="8px"),u??(u=c)):B&&(B.style.boxShadow="",B.style.border="")}),u&&e._lastActiveProductEl!==u){try{u.scrollIntoView({behavior:"smooth",block:"nearest"})}catch{}e._lastActiveProductEl=u}}function hh(e){return Array.isArray(e)?e.find(n=>n?.isCurrent)??null:null}function Gb(e){h0()||e.castButton&&e.bottomRightDiv&&e.castButton.parentElement===e.bottomRightDiv&&e.castButton.remove()}function Qb(e,n){return e.findIndex(r=>!r||r.kind!=="subtitles"&&r.kind!=="captions"?!1:(r.label||"").toString().trim().toLowerCase()===n)}function Xb(e,n){if(e.hasAttribute("disable-hidden-captions")){_u(e,{emitEvent:!1});return}if(!e.isOnline)return;let r=e.getAttribute?.("default-subtitle-track");if(typeof r!="string"||!r.trim()){Jp(e,n);return}let u=r.trim().toLowerCase(),c=Qb(n,u);if(c===-1){Jp(e,n);return}Lh(e,c,{emitEvent:!1});try{let f=n[c]?.language;f&&localStorage.setItem("subtitleLang",f)}catch{}}function Ib(e){try{let n=e;if(typeof n.getSubtitleTracks!="function")return;let r=n.getSubtitleTracks(),u=Array.isArray(r)?r.length:0,c=typeof n._lastTracksReadySubtitleCount=="number"?n._lastTracksReadySubtitleCount:0;if(n._lastTracksReadySubtitleCount=u,u>0&&c===0&&typeof n.dispatchEvent=="function"){let f=typeof n.getAudioTracks=="function"?n.getAudioTracks():[];n.dispatchEvent(new CustomEvent("fastpixtracksready",{detail:{audioTracks:f,subtitleTracks:r,currentAudioId:typeof n.currentAudioTrackId=="number"?n.currentAudioTrackId:null,currentSubtitleId:typeof n.currentSubtitleTrackId=="number"?n.currentSubtitleTrackId:null,currentAudioTrackLoaded:hh(f),currentSubtitleLoaded:hh(r)}}))}}catch{}}function Pb(e){try{setTimeout(()=>{requestAnimationFrame(()=>Ib(e))},0)}catch{}}function Kb(e,n){e.skipIntroButton&&e.skipIntroStart!=null&&e.skipIntroEnd!=null?Number.isFinite(e.skipIntroStart)&&Number.isFinite(e.skipIntroEnd)&&n>=e.skipIntroStart&&n<=e.skipIntroEnd?e.skipIntroButton.style.display="block":e.skipIntroButton.style.display="none":e.skipIntroButton&&(e.skipIntroButton.style.display="none")}function Fb(e,n){e.nextEpisodeButton&&e.nextEpisodeOverlayStart!=null&&Number.isFinite(e.nextEpisodeOverlayStart)?Array.isArray(e.playlist)&&e.currentIndex<(e.playlist?.length??0)-1&&n>=e.nextEpisodeOverlayStart?e.nextEpisodeButton.style.display="block":e.nextEpisodeButton.style.display="none":e.nextEpisodeButton&&(e.nextEpisodeButton.style.display="none")}var Jb=e=>{if(e){let n=function(){let x=e.video,E=x.duration;if(!E||!Number.isFinite(E))return;let _=ah(e),q=x.buffered.length>0?x.buffered.end(x.buffered.length-1):0,I=Math.min(_/E*100,100),J=Math.min(q/E*100,100),tt=Y();e.progressBar.style.background=`linear-gradient(to right, ${e.accentColor} 0%, ${e.accentColor} ${I}%, ${e.primaryColor} ${I}%, ${e.primaryColor} ${J}%, ${tt} ${J}%, ${tt} 100%)`,e.progressBar.value=I,e.progressBar.style.setProperty("--progressBar-thumb-position",`${I}%`)},r=function(){if(U!==null)return;function x(){n(),U=requestAnimationFrame(x)}U=requestAnimationFrame(x)},u=function(){U!==null&&(cancelAnimationFrame(U),U=null),n()},c=function(x){return x.hasAttribute("disable-keyboard-controls")&&x.getAttribute("disable-keyboard-controls")!=="false"},f=function(x,E){let _=x==="ArrowRight"?h(E,"forward-seek-offset",10):-h(E,"backward-seek-offset",10);rn(E,_)},h=function(x,E,_){return x.hasAttribute(E)&&Number.parseInt(x.getAttribute(E))||_},v=function(x,E){let _=x==="ArrowUp"?Math.min(1,E.video.volume+.1):Math.max(0,E.video.volume-.1);B(E,_)},B=function(x,E){x.video.volume=E,x.video.muted&&E>0&&(x.video.muted=!1),x.hasAttribute("no-volume-pref")||localStorage.setItem("savedVolume",E.toString()),x.volumeControl.value=E,je(x),Ze(x)},R=function(x,E,_){let q=Y();x.progressBar.style.background=`linear-gradient(to right, ${x.accentColor} 0%, ${x.accentColor} ${E}%, ${x.primaryColor} ${E}%, ${x.primaryColor} ${_}%, ${q} ${_}%, ${q} 100%)`,x.progressBar.style.setProperty("--progressBar-thumb-position",`${E}%`)},O=function(x){ae()&&gu(x)},A=function(x,E,_){Number.isFinite(E)&&(E>_&&le(x),E<_&&x.hls.trigger(on().Events.BUFFER_FLUSHING,{startOffset:E,endOffset:Number.POSITIVE_INFINITY}),x.video.currentTime=E)},M=function(x){x.video.paused&&!x.userPaused?x.video.pause():x.video.paused||x.video.play().catch(E=>{})},G=function(x,E,_){x<=E&&Vt(_)};e.isWaitingForKey=!1,e.video.addEventListener("loadedmetadata",()=>{Gb(e),w0(e);let x=Array.from(e.video.textTracks);Xb(e,x),Pb(e)}),e.video.addEventListener("loadedmetadata",()=>{e.dispatchEvent(new Event("loadedmetadata"))}),e.video.addEventListener("volumechange",()=>{e.volumeControl.value=e.video.volume;let x=e.video.volume,E=e.video.muted;E&&(e.video.volume=0,e.volumeControl.value="0"),Ze(e),je(e),Lu(e),localStorage.setItem("media-volume",String(e.video.volume)),ya(x,E),ae()&&P0(x)}),e.addEventListener("playbackidchange",x=>{try{document.pictureInPictureElement&&(e._reenterPiPOnReady=!0,document.exitPictureInPicture?.())}catch{}e.controlsContainer.style.setProperty("--controls","none");let E=x.detail.playbackId;e.playlistPanel?.querySelectorAll(".playlist-item.selected").forEach(q=>q.classList.remove("selected"));let _=e.playlistPanel?.querySelector(`[data-playback-id="${E}"]`);_&&(_.classList.add("selected"),_.scrollIntoView({behavior:"smooth",block:"nearest"}))}),e.video.addEventListener("pause",()=>{ae()?No("pause",e):e.__fpAudioSwitchHoldActive||(e.playPauseButton.innerHTML=un,e.wasManuallyPaused=!0),e.playPauseButton.disabled=!1}),e.video.addEventListener("play",()=>{ae()?No("play",e):(e.playPauseButton.innerHTML=Go,e.wasManuallyPaused=!1);let x=e.wrapper?.querySelectorAll(".hotspot");x&&x.length>0&&(x.forEach(E=>E.remove()),e.isHotspotVisible=!1),e.hotspotPauseTimeout&&(clearTimeout(e.hotspotPauseTimeout),e.hotspotPauseTimeout=null)}),e.video.addEventListener("waiting",()=>{e.isLoading=!0,e.isBuffering=!0,le(e),e.playPauseButton.disabled=!1}),e.video.addEventListener("loadstart",()=>{(e.hasAttribute("autoplay-shorts")||e.hasAttribute("auto-play")||e.hasAttribute("loop-next"))&&(e.video.muted=!1,e.video.volume=1,e.controlsContainer.style.setProperty("--initial-play-button","none"))}),e.video.addEventListener("emptied",()=>{(e.hasAttribute("autoplay-shorts")||e.hasAttribute("auto-play")||e.hasAttribute("loop-next"))&&le(e)}),e.video.addEventListener("playing",()=>{e.isError&&Mu(e),ha(e)&&Vt(e),!e.video.paused&&e.video.readyState>=2&&ha(e)&&Vt(e),!e.isBuffering&&ha(e)&&Vt(e),dm(e),e.playPauseButton.disabled=!1,e.pauseAfterLoading&&!e.resolutionSwitching&&(e.video.pause(),e.pauseAfterLoading=!1)}),e.video.addEventListener("canplay",()=>{e.isBuffering=!1,e.isLoading=!1,!(e.hasAttribute("auto-play")||e.hasAttribute("autoplay-shorts")||e.hasAttribute("loop-next"))&&ha(e)&&setTimeout(()=>Vt(e),10)}),e.video.addEventListener("canplaythrough",()=>{e.isBuffering=!1,e.isLoading=!1,!(e.hasAttribute("auto-play")||e.hasAttribute("autoplay-shorts")||e.hasAttribute("loop-next"))&&ha(e)&&setTimeout(()=>Vt(e),10)}),e.video.addEventListener("durationchange",()=>{!(e.hasAttribute("auto-play")||e.hasAttribute("autoplay-shorts")||e.hasAttribute("loop-next"))&&ha(e)&&Vt(e)}),e.video.addEventListener("loadedmetadata",()=>{if(Oo(e),e.hasAutoPlayAttribute===!0){let x=e.hasAttribute("auto-play"),E=e.hasAttribute("loop-next");e.video.setAttribute("playsinline",""),e.video.setAttribute("webkit-playsinline",""),e.video.playsInline=!0,e.video.autoplay=!0,!x&&!E?(e.video.muted=!0,e.video.volume=0):(e.video.muted=!1,e.video.volume=1),yi(e,e.playbackId,e.thumbnailUrlFinal,e.streamType),e.volumeControl.value=e.video.volume,je(e),Ze(e),localStorage.setItem("savedVolume",e.volumeControl.value),localStorage.setItem("savedVolumeIcon",e.volumeButton.innerHTML)}if(e.mutedAttribute===!0)e.video.muted=!0,e.video.volume=0,e.volumeControl.value=e.video.volume,je(e),Ze(e),localStorage.setItem("savedVolume",e.volumeControl.value),localStorage.setItem("savedVolumeIcon",e.volumeButton.innerHTML);else{localStorage.removeItem("muted");let x=localStorage.getItem("savedVolume");x!==null&&(e.video.volume=Number.parseFloat(x),e.volumeControl.value=e.video.volume,je(e),Ze(e));let E=localStorage.getItem("savedVolumeIcon");E!==null&&(e.volumeButton.innerHTML=E)}});let Y=()=>getComputedStyle(e).getPropertyValue("--progress-bar-track-unfilled").trim()||"rgba(255,255,255,0.14)",U=null;e.video.addEventListener("play",r),e.video.addEventListener("playing",r),e.video.addEventListener("pause",u),e.video.addEventListener("ended",u),e.video.addEventListener("seeking",n),e.video.addEventListener("seeked",n);let Q=null;e.video.addEventListener("timeupdate",()=>{Q===null&&(Q=requestAnimationFrame(()=>{Q=null,!e.video.paused&&e.video.readyState>=2&&ha(e)&&Vt(e);let x=ah(e);Kb(e,x),Fb(e,x),Oo(e),Yp(e)}))}),e.video.addEventListener("progress",n),e.video.addEventListener("ended",()=>{if(e.hasAttribute("loop")){e.videoEnded=!1;return}e.videoEnded=!0,e.liveStreamDisplay.addEventListener("click",()=>{e.video.play(),e.videoEnded=!1}),e.loopPlaylistTillEnd&&(e.next(),e.videoEnded=!1)}),e.progressBar.addEventListener("keydown",x=>{if(!c(e))switch(x.code){case"ArrowLeft":case"ArrowRight":f(x.code,e);break;case"ArrowUp":case"ArrowDown":v(x.code,e);break}}),e.progressBar.addEventListener("input",()=>{let x=e.video.duration;if(!Number.isFinite(x))return;let E=e.progressBar.value,_=E/100*x,q=e.video.buffered.length>0?e.video.buffered.end(e.video.buffered.length-1):0,I=q/x*100;R(e,E,I),O(_),ae()||(A(e,_,q),M(e),G(_,q,e)),Qt(e),e.chapters>0&&(Xa(e),Yp(e))}),e.skipIntroButton&&e.skipIntroButton.addEventListener("click",()=>{if(e.skipIntroEnd==null)return;let x=e.video.duration,E=Math.min((Number(e.skipIntroEnd)||0)+1,Number.isFinite(x)?Math.max(0,x-.1):(Number(e.skipIntroEnd)||0)+1),_=e.video.buffered.length>0?e.video.buffered.end(e.video.buffered.length-1):0;O(E),ae()||(A(e,E,_),M(e),G(E,_,e))}),e.volumeControl.addEventListener("input",()=>{let x=e.getAttribute("primary-color")??"#F5F5F5",E=e.volumeControl.value,_=`linear-gradient(to right, ${x} 0%, ${x} ${(E*100).toFixed(2)}%, rgba(255, 255, 255, 0.1) ${(E*100).toFixed(2)}%, rgba(255, 255, 255, 0.1) 100%)`;e.volumeControl.style.background=_;let q=e.hasAttribute("no-volume-pref");q?localStorage.removeItem("savedVolumeIcon"):localStorage.setItem("savedVolumeIcon",e.volumeButton.innerHTML),e.video.volume=E,E==="0"?e.video.muted=!0:e.video.muted=!1,e.volumeControl.value=E,je(e),Ze(e),ya(E,e.video.muted),q?(localStorage.removeItem("savedVolumeIcon"),localStorage.removeItem("savedVolume")):(localStorage.setItem("savedVolumeIcon",e.volumeButton.innerHTML),localStorage.setItem("savedVolume",e.video.volume.toString())),Qt(e)}),e.video.addEventListener("loadedmetadata",async()=>{r0(e);let x=localStorage.getItem("savedVolume");if(x!==null&&!e.hasAttribute("no-volume-pref")){let E=Number.parseFloat(x);e.video.volume=E,e.volumeControl.value=E.toString(),je(e),Ze(e)}else e.video.volume=1,e.volumeControl.value="1",je(e),Ze(e);e.video.playbackRate=e.defaultPlaybackRate,e.preloadAttribute==="auto"||e.preloadAttribute==="none"||e.preloadAttribute!==null?e.video.preload=e.preloadAttribute:e.video.preload="metadata",e.crossoriginAttribute===null?e.video.crossOrigin="":e.video.crossOrigin=e.crossoriginAttribute,bi(e)})}};function Wb(e){localStorage.getItem("chromecastActive")==="true"&&(e.initialPlayClick=!0,le(e),e.controlsContainer.style.setProperty("--initial-play-button","none"),setTimeout(()=>{Ka(()=>{zh(e);let n=localStorage.getItem("pausedOnCasting")==="true";e.pausedOnCasting=n,e.pausedOnCasting?No("pause",e):No("play",e),Vt(e)})},1200))}function $b(e){e.ccButton.addEventListener("click",()=>{if(e.subtitleMenu&&e.subtitleMenu.style.display!=="none"){e.subtitleMenu.style.display="none";return}Qt(e),H0(e)})}function tg(e){e.audioMenuButton.addEventListener("click",()=>{if(e.audioMenu&&e.audioMenu.style.display!=="none"){e.audioMenu.style.display="none";return}Qt(e),Hh(e)})}function eg(e){e.fullScreenButton.addEventListener("click",()=>{Qt(e),Rh(e)})}function pm(e){e.forwardSeekOffset=e.forwardSeekAttribute?Number.parseInt(e.forwardSeekAttribute):10,rn(e,e.forwardSeekOffset),Qt(e)}function hm(e){e.backwardSeekOffset=e.backwardSeekAttribute?Number.parseInt(e.backwardSeekAttribute):10,rn(e,-e.backwardSeekOffset),Qt(e)}function ag(e){e.fastForwardButton.addEventListener("click",()=>{pm(e)}),e.rewindBackButton.addEventListener("click",()=>{hm(e)})}function ig(e){e.volumeButton.addEventListener("click",()=>{let n=e.hasAttribute("no-volume-pref");n?localStorage.removeItem("savedVolumeIcon"):localStorage.setItem("savedVolumeIcon",e.volumeButton.innerHTML);let r=Number.parseFloat(localStorage.getItem("savedVolume")??"1");e.video.muted||r===0?(e.video.muted=!1,e.volumeButton.innerHTML=rl,e.volumeControl.value="1",e.video.volume=1):(e.video.muted=!0,e.volumeButton.innerHTML=nl,e.volumeControl.value=0,e.video.volume=0),je(e),Ze(e),n?(localStorage.removeItem("savedVolume"),localStorage.removeItem("savedVolumeIcon")):(localStorage.setItem("savedVolume",e.video.volume.toString()),localStorage.setItem("savedVolumeIcon",e.volumeButton.innerHTML)),ya(e.video.volume,e.video.muted),Qt(e)})}function lg(e){e.pipButton.addEventListener("click",()=>{document.pictureInPictureEnabled&&!e.video.disablePictureInPicture?document.pictureInPictureElement?document.exitPictureInPicture().then(()=>{}).catch(n=>{ct(e,"Error exiting Picture-in-Picture")}):e.video.requestPictureInPicture().then(()=>{}).catch(n=>{ct(e,"Error entering Picture-in-Picture")}):ct(e,"Picture-in-Picture is not supported in this browser."),Qt(e)})}function ng(e){e.playbackRateButton.addEventListener("click",()=>{if(e.playbackRateDiv&&e.playbackRateDiv.style.display!=="none"){e.playbackRateDiv.style.display="none";return}Qt(e),A0(e)})}var og=e=>[e.progressBarContainer,e.volumeControl,e.pipButton,e.fullScreenButton,e.fastForwardButton,e.rewindBackButton,e.playPauseButton,e.timeDisplay,e.volumeButton,e.volumeiOSButton,e.skipIntroButton,e.nextEpisodeButton,e.resolutionMenu,e.resolutionMenuButton,e.playbackRateDiv,e.playbackRateButton,e.nextButton,e.prevButton,e.playlistButton,e.castButton].some(n=>n?.matches(":hover")),hu=e=>{e.progressBarContainer.style.opacity="1",e.volumeControl.style.opacity="1",e.pipButton.style.opacity="1",e.fullScreenButton.style.opacity="1",e.ccButton.style.opacity="1",e.fastForwardButton.style.opacity="1",e.rewindBackButton.style.opacity="1",e.playPauseButton.style.opacity="1",e.timeDisplay.style.opacity="1",e.parentVolumeDiv.style.opacity="1",e.volumeButton.style.opacity="1",e.playbackRateButton.style.opacity="1",e.volumeiOSButton.style.opacity="1",e.skipIntroButton.style.opacity="1",e.nextEpisodeButton.style.opacity="1",e.resolutionMenuButton.style.opacity="1",e.titleElement.style.opacity="1",e.controlsContainer.contains(e.mobileControls)&&(e.mobileControls.style.opacity="1"),e.controlsContainer.contains(e.castButton)&&(e.castButton.style.opacity="1"),e.controlsContainer.contains(e.playlistButton)&&(e.playlistButton.style.opacity="1"),e.controlsContainer.contains(e.playlistSlot)&&(e.playlistSlot.style.opacity="1"),e.leftControls.style.opacity="1",e.resolutionMenu.style.opacity="1",e.playbackRateDiv.style.opacity="1",e.liveStreamDisplay.style.opacity="1",e.titleElement.style.opacity="1",e.audioMenuButton.style.opacity="1",e.subtitleMenu.style.opacity="1",B0(e),eb(e),e.resetHideControlsTimer()},rg=e=>{e.lastInteractionTimestamp=Date.now(),e.lastKeyPressTimestamp=Date.now(),e.wrapper.addEventListener("keydown",()=>{hu(e),e.resetHideControlsTimer()}),e.resetHideControlsTimer=()=>{clearTimeout(e.hideControlsTimer),e.hideControlsTimer=setTimeout(n,3e3)};let n=()=>{if(e.initialPlayClick&&!e.video.paused&&!og(e)){let u=Date.now()-e.lastInteractionTimestamp;u>=3e3||r()?(Kp(e,!0),Kp(e,!1),E0(e),ab(e)):(clearTimeout(e.hideControlsTimer),e.hideControlsTimer=setTimeout(n,3e3-u))}},r=()=>Date.now()-e.lastKeyPressTimestamp<3e3;e.addEventListener("mousemove",()=>{hu(e)}),e.addEventListener("mouseout",u=>{setTimeout(()=>{e.contains(u?.relatedTarget)||n()},200)}),hu(e),e.video.addEventListener("click",()=>{yi(e,e.playbackId,e.thumbnailUrlFinal,e.streamType),Qt(e)}),e.disableKeyboardControls||document.addEventListener("keydown",u=>{if(e.lastKeyPressTimestamp=Date.now(),e.hotKeys?.includes(u.code)){u.preventDefault();return}if(!e.initialPlayClick||e.retryButtonVisible)return;let c=e.hasAttribute("no-volume-pref");({KeyK:()=>{e.isLoading?e.pauseAfterLoading=e.video.paused:(yi(e,e.playbackId,e.thumbnailUrlFinal,e.streamType),Qt(e))},ArrowUp:()=>e.video.volume<1&&dh(e,.1,c),ArrowDown:()=>e.video.volume>0&&dh(e,-.1,c),ArrowRight:()=>e.streamType!=="live-stream"&&(u.preventDefault(),pm(e)),ArrowLeft:()=>e.streamType!=="live-stream"&&(u.preventDefault(),hm(e)),KeyM:()=>lm(e,c),KeyF:()=>Rh(e),KeyC:()=>k0(e)})[u.code]?.()})};function sg(e){let n,r=()=>{bi(e),e.video.readyState>=1?Xa(e):e.video.addEventListener("loadedmetadata",()=>Xa(e),{once:!0}),e.video.offsetWidth>=471&&e.initialPlayClick&&(e.playPauseButton.style.position="absolute")};window.addEventListener("resize",()=>{clearTimeout(n),n=setTimeout(()=>{n=void 0,requestAnimationFrame(r)},120)}),window.addEventListener("load",()=>{requestAnimationFrame(()=>{bi(e),Xa(e),Wb(e)})}),window.addEventListener("DOMContentLoaded",()=>{let u=Number.parseFloat(localStorage.getItem("savedVolume")??"0.6"),c=localStorage.getItem("savedVolumeIcon")??"";e.volumeControl.value=u.toString(),e.video.volume=u,c&&(e.volumeButton.innerHTML=c)})}var ug=`<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_822_31051)">
    <path d="M7.44444 6.66675C6.1 6.66675 5 7.86675 5 9.33341V22.6667C5 24.1334 6.1 25.3334 7.44444 25.3334H24.5556C25.9 25.3334 27 24.1334 27 22.6667V9.33341C27 7.86675 25.9 6.66675 24.5556 6.66675H7.44444ZM7.44444 14.6667H11.1111V17.3334H7.44444V14.6667ZM18.4444 22.6667H7.44444V20.0001H18.4444V22.6667ZM24.5556 22.6667H20.8889V20.0001H24.5556V22.6667ZM24.5556 17.3334H13.5556V14.6667H24.5556V17.3334Z" fill="currentColor"/>
    <path d="M7.44444 5.66675C5.46759 5.66675 4 7.39815 4 9.33341V22.6667C4 24.602 5.46759 26.3334 7.44444 26.3334H24.5556C26.5324 26.3334 28 24.602 28 22.6667V9.33341C28 7.39815 26.5324 5.66675 24.5556 5.66675H7.44444ZM8.44444 15.6667H10.1111V16.3334H8.44444V15.6667ZM17.4444 21.6667H8.44444V21.0001H17.4444V21.6667ZM23.5556 21.6667H21.8889V21.0001H23.5556V21.6667ZM23.5556 16.3334H14.5556V15.6667H23.5556V16.3334Z" stroke="black" stroke-opacity="0.15" stroke-width="0"/>
    </g>
    <defs>
    <clipPath id="clip0_822_31051">
    <rect width="32" height="32" fill="currentColor"/>
    </clipPath>
    </defs>
</svg>`,cg=`<svg width="100%" height = "100%" viewBox = "0 0 24 24" fill = "none" xmlns = "https://www.w3.org/2000/svg">
    <path d="M13.8 4.1421C13.8 3.5112 13.2888 3 12.6579 3H11.343C10.7112 3 10.2 3.5112 10.2 4.1421C10.2 4.6623 9.8436 5.1087 9.3585 5.2995C9.282 5.3301 9.2055 5.3625 9.1308 5.3949C8.6529 5.6019 8.085 5.5389 7.716 5.1708C7.50184 4.95679 7.21146 4.83657 6.9087 4.83657C6.60594 4.83657 6.31556 4.95679 6.1014 5.1708L5.1708 6.1014C4.95679 6.31556 4.83657 6.60594 4.83657 6.9087C4.83657 7.21146 4.95679 7.50184 5.1708 7.716C5.5398 8.085 5.6028 8.652 5.394 9.1308C5.36119 9.20615 5.32969 9.28206 5.2995 9.3585C5.1087 9.8436 4.6623 10.2 4.1421 10.2C3.5112 10.2 3 10.7112 3 11.3421V12.6579C3 13.2888 3.5112 13.8 4.1421 13.8C4.6623 13.8 5.1087 14.1564 5.2995 14.6415C5.3301 14.718 5.3625 14.7945 5.394 14.8692C5.6019 15.3471 5.5389 15.915 5.1708 16.284C4.95679 16.4982 4.83657 16.7885 4.83657 17.0913C4.83657 17.3941 4.95679 17.6844 5.1708 17.8986L6.1014 18.8292C6.31556 19.0432 6.60594 19.1634 6.9087 19.1634C7.21146 19.1634 7.50184 19.0432 7.716 18.8292C8.085 18.4602 8.652 18.3972 9.1308 18.6051C9.2055 18.6384 9.282 18.6699 9.3585 18.7005C9.8436 18.8913 10.2 19.3377 10.2 19.8579C10.2 20.4888 10.7112 21 11.3421 21H12.6579C13.2888 21 13.8 20.4888 13.8 19.8579C13.8 19.3377 14.1564 18.8913 14.6415 18.6996C14.718 18.6699 14.7945 18.6384 14.8692 18.606C15.3471 18.3972 15.915 18.4611 16.2831 18.8292C16.3892 18.9353 16.5151 19.0195 16.6537 19.0769C16.7923 19.1343 16.9408 19.1639 17.0908 19.1639C17.2409 19.1639 17.3894 19.1343 17.528 19.0769C17.6666 19.0195 17.7925 18.9353 17.8986 18.8292L18.8292 17.8986C19.0432 17.6844 19.1634 17.3941 19.1634 17.0913C19.1634 16.7885 19.0432 16.4982 18.8292 16.284C18.4602 15.915 18.3972 15.348 18.6051 14.8692C18.6384 14.7945 18.6699 14.718 18.7005 14.6415C18.8913 14.1564 19.3377 13.8 19.8579 13.8C20.4888 13.8 21 13.2888 21 12.6579V11.343C21 10.7121 20.4888 10.2009 19.8579 10.2009C19.3377 10.2009 18.8913 9.8445 18.6996 9.3594C18.6694 9.28295 18.6379 9.20704 18.6051 9.1317C18.3981 8.6538 18.4611 8.0859 18.8292 7.7169C19.0432 7.50274 19.1634 7.21236 19.1634 6.9096C19.1634 6.60684 19.0432 6.31646 18.8292 6.1023L17.8986 5.1717C17.6844 4.95769 17.3941 4.83747 17.0913 4.83747C16.7885 4.83747 16.4982 4.95769 16.284 5.1717C15.915 5.5407 15.348 5.6037 14.8692 5.3958C14.7939 5.36269 14.7179 5.33088 14.6415 5.3004C14.1564 5.1087 13.8 4.6614 13.8 4.1421Z" stroke = "currentColor" stroke - width="1.5" stroke - line - cap="round" stroke - line - join="round" />
    <path d="M15.6 12C15.6 12.9548 15.2207 13.8705 14.5456 14.5456C13.8705 15.2207 12.9548 15.6 12 15.6C11.0452 15.6 10.1295 15.2207 9.45442 14.5456C8.77928 13.8705 8.4 12.9548 8.4 12C8.4 11.0452 8.77928 10.1295 9.45442 9.45442C10.1295 8.77928 11.0452 8.4 12 8.4C12.9548 8.4 13.8705 8.77928 14.5456 9.45442C15.2207 10.1295 15.6 11.0452 15.6 12Z" stroke = "currentColor" stroke - width="1.5" stroke - line - cap="round" stroke - line - join="round" />
</svg>`,dg=`<svg width="100%" height = "100%" viewBox = "0 0 24 24" fill = "none" xmlns = "http://www.w3.org/2000/svg" >
    <path d="M9.5 14C11.71 14 13.5 12.21 13.5 10C13.5 7.79 11.71 6 9.5 6C7.29 6 5.5 7.79 5.5 10C5.5 12.21 7.29 14 9.5 14ZM9.5 8C10.6 8 11.5 8.9 11.5 10C11.5 11.1 10.6 12 9.5 12C8.4 12 7.5 11.1 7.5 10C7.5 8.9 8.4 8 9.5 8Z" fill = "currentColor" stroke = "currentColor" stroke-width="0" />
    <path d="M15.89 16.56C14.21 15.7 12.03 15 9.5 15C6.97 15 4.79 15.7 3.11 16.56C2.11 17.07 1.5 18.1 1.5 19.22V22H17.5V19.22C17.5 18.1 16.89 17.07 15.89 16.56ZM15.5 20H3.5V19.22C3.5 18.84 3.7 18.5 4.02 18.34C5.21 17.73 7.13 17 9.5 17C11.87 17 13.79 17.73 14.98 18.34C15.3 18.5 15.5 18.84 15.5 19.22V20Z" fill="currentColor" stroke="currentColor" stroke-width="0" />
    <path d="M15.5 2H13.5C13.5 6.97 17.53 11 22.5 11V9C18.64 9 15.5 5.86 15.5 2Z" fill = "currentColor" stroke = "currentColor" stroke-width="0" />
    <path d="M19.5 2H17.5C17.5 4.76 19.74 7 22.5 7V5C20.85 5 19.5 3.65 19.5 2Z" fill = "currentColor" stroke = "currentColor" stroke-width="0" />
</svg>`,fg=`<svg width="100%" height="100%" id="pipButtonSvg" viewBox="0 0 41 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.2778 22.8889H19.3889V29.5556H28.2778V22.8889ZM32.7223 31.7778V16.2C32.7223 14.9778 31.7223 14 30.5001 14H10.5001C9.27783 14 8.27783 14.9778 8.27783 16.2V31.7778C8.27783 33 9.27783 34 10.5001 34H30.5001C31.7223 34 32.7223 33 32.7223 31.7778ZM30.5001 31.8H10.5001V16.1889H30.5001V31.8Z" fill="currentColor"/>
  <path d="M28.2778 22.8889H19.3889V29.5556H28.2778V22.8889ZM32.7223 31.7778V16.2C32.7223 14.9778 31.7223 14 30.5001 14H10.5001C9.27783 14 8.27783 14.9778 8.27783 16.2V31.7778C8.27783 33 9.27783 34 10.5001 34H30.5001C31.7223 34 32.7223 33 32.7223 31.7778ZM30.5001 31.8H10.5001V16.1889H30.5001V31.8Z" fill="currentColor"/>
</svg>`,pg=`<svg id="forwardSeekBtnSvg" width="24" height="24" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.5 18.6667C24.5 23.08 20.9133 26.6667 16.5 26.6667C12.0867 26.6667 8.50001 23.08 8.50001 18.6667C8.50001 14.2533 12.0867 10.6667 16.5 10.6667V16L23.1667 9.33332L16.5 2.66666V7.99999C10.6067 7.99999 5.83334 12.7733 5.83334 18.6667C5.83334 24.56 10.6067 29.3333 16.5 29.3333C22.3933 29.3333 27.1667 24.56 27.1667 18.6667H24.5Z" fill="currentColor"/>
    <path d="M15.0333 22.6667V16.9733H14.9133L12.5533 17.8133V18.7333L13.9 18.32V22.6667H15.0333Z" fill="currentColor"/>
    <path d="M19.5933 17.04C19.3533 16.9467 19.1 16.9067 18.8067 16.9067C18.5133 16.9067 18.26 16.9467 18.02 17.04C17.78 17.1333 17.58 17.28 17.42 17.48C17.26 17.68 17.1133 17.9333 17.0333 18.24C16.9533 18.5467 16.9 18.9067 16.9 19.3333V20.32C16.9 20.7467 16.9533 21.12 17.0467 21.4133C17.14 21.7067 17.2733 21.9733 17.4467 22.1733C17.62 22.3733 17.82 22.52 18.06 22.6133C18.3 22.7067 18.5533 22.7467 18.8467 22.7467C19.14 22.7467 19.3933 22.7067 19.6333 22.6133C19.8733 22.52 20.0733 22.3733 20.2333 22.1733C20.3933 21.9733 20.5267 21.72 20.62 21.4133C20.7133 21.1067 20.7533 20.7467 20.7533 20.32V19.3333C20.7533 18.9067 20.7 18.5333 20.6067 18.24C20.5133 17.9467 20.38 17.68 20.2067 17.48C20.0333 17.28 19.82 17.1333 19.5933 17.04ZM19.6067 20.4667C19.6067 20.72 19.5933 20.9333 19.5533 21.1067C19.5133 21.28 19.4733 21.4267 19.4067 21.5333C19.34 21.64 19.26 21.72 19.1533 21.76C19.0467 21.8 18.94 21.8267 18.82 21.8267C18.7 21.8267 18.58 21.8 18.4867 21.76C18.3933 21.72 18.3 21.64 18.2333 21.5333C18.1667 21.4267 18.1133 21.28 18.0733 21.1067C18.0333 20.9333 18.02 20.72 18.02 20.4667V19.1733C18.02 18.92 18.0333 18.7067 18.0733 18.5333C18.1133 18.36 18.1533 18.2267 18.2333 18.12C18.3133 18.0133 18.38 17.9333 18.4867 17.8933C18.5933 17.8533 18.7 17.8267 18.82 17.8267C18.94 17.8267 19.06 17.8533 19.1533 17.8933C19.2467 17.9333 19.34 18.0133 19.4067 18.12C19.4733 18.2267 19.5267 18.36 19.5667 18.5333C19.6067 18.7067 19.62 18.92 19.62 19.1733V20.4667H19.6067Z" fill="currentColor"/>
</svg>`,hg=`<svg width="24" height="24" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.5 7.99999V2.66666L9.83334 9.33332L16.5 16V10.6667C20.9133 10.6667 24.5 14.2533 24.5 18.6667C24.5 23.08 20.9133 26.6667 16.5 26.6667C12.0867 26.6667 8.50001 23.08 8.50001 18.6667H5.83334C5.83334 24.56 10.6067 29.3333 16.5 29.3333C22.3933 29.3333 27.1667 24.56 27.1667 18.6667C27.1667 12.7733 22.3933 7.99999 16.5 7.99999ZM15.0333 22.6667H13.9V18.32L12.5533 18.7333V17.8133L14.9133 16.9733H15.0333V22.6667ZM20.74 20.32C20.74 20.7467 20.7 21.12 20.6067 21.4133C20.5133 21.7067 20.38 21.9733 20.22 22.1733C20.06 22.3733 19.8467 22.52 19.62 22.6133C19.3933 22.7067 19.1267 22.7467 18.8333 22.7467C18.54 22.7467 18.2867 22.7067 18.0467 22.6133C17.8067 22.52 17.6067 22.3733 17.4333 22.1733C17.26 21.9733 17.1267 21.72 17.0333 21.4133C16.94 21.1067 16.8867 20.7467 16.8867 20.32V19.3333C16.8867 18.9067 16.9267 18.5333 17.02 18.24C17.1133 17.9467 17.2467 17.68 17.4067 17.48C17.5667 17.28 17.78 17.1333 18.0067 17.04C18.2333 16.9467 18.5 16.9067 18.7933 16.9067C19.0867 16.9067 19.34 16.9467 19.58 17.04C19.82 17.1333 20.02 17.28 20.1933 17.48C20.3667 17.68 20.5 17.9333 20.5933 18.24C20.6867 18.5467 20.74 18.9067 20.74 19.3333V20.32ZM19.6067 19.1733C19.6067 18.92 19.5933 18.7067 19.5533 18.5333C19.5133 18.36 19.46 18.2267 19.3933 18.12C19.3267 18.0133 19.2467 17.9333 19.14 17.8933C19.0333 17.8533 18.9267 17.8267 18.8067 17.8267C18.6867 17.8267 18.5667 17.8533 18.4733 17.8933C18.38 17.9333 18.2867 18.0133 18.22 18.12C18.1533 18.2267 18.1 18.36 18.06 18.5333C18.02 18.7067 18.0067 18.92 18.0067 19.1733V20.4667C18.0067 20.72 18.02 20.9333 18.06 21.1067C18.1 21.28 18.1533 21.4267 18.22 21.5333C18.2867 21.64 18.3667 21.72 18.4733 21.76C18.58 21.8 18.6867 21.8267 18.8067 21.8267C18.9267 21.8267 19.0467 21.8 19.14 21.76C19.2333 21.72 19.3267 21.64 19.3933 21.5333C19.46 21.4267 19.5133 21.28 19.54 21.1067C19.5667 20.9333 19.5933 20.72 19.5933 20.4667V19.1733H19.6067Z" fill="currentColor"/>
</svg>`,mg=`

/* Register --progressBar-thumb-position as a typed property so CSS can
   interpolate it smoothly when the value changes (e.g. during seeks). */
@property --progressBar-thumb-position {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 0%;
}

/* CSS Variables */
:host {
    --icon-width: 24px;
    --icon-height: 30px;
    --icon-big-width: 30px;
    --icon-big-height: 30px;
    --button-width: 32px;
    --button-height: 32px;
    --button-big-width: 64px;
    --button-big-height: 64px;
    --font-size: 16px;
    --border-radius: 3px;
    --media-object-fit: cover;
    --media-object-position: center;
    --accent-color: #5D09C7;
    --primary-color: #F5F5F5;
    --secondary-color: #000;
    --thumbnail-max-width: 150px;
    --cast-button-display: flex;
    --previous-episode-button: flex;
    --shoppable-sidebar-width: 30%;
    --shoppable-sidebar-background-color: rgba(255, 255, 255, 0.75);
    /* User slot overlay (see SLOTS_DEVELOPER_GUIDE.md) */
    --user-slot-z: 6;
    /* Avoid vh in default — mobile URL bar and early layout make vh-based padding jump. Override per app. */
    --user-slot-bottom-clearance: 64px;
    --play-button-initialized: flex;
    --mobile-play-button: flex;
    --mobile-play-button-initialized: flex;
    --player-border-radius: 0px;
    --progress-bar-track-unfilled: rgba(255, 255, 255, 0.14);
    aspect-ratio: 16 / 9;
    display: block; /* Ensure the custom element is a block-level element */
    font-family: Arial, sans-serif;
    aspect-ratio: var(--aspect-ratio); /* Use the aspect ratio variable */
    /* Lets page CSS and integrators use @container queries against player width (not just the viewport). */
    container-type: inline-size;
    container-name: fp-player;
}

:host(:focus) {
    outline: none;
}
        
video {
    width: 100%;
    height: 100%;
    display: block;
    // max-width: 100% !important; /* Ensure the video does not exceed its container */
    // max-height: 100% !important; /* Ensure the video does not exceed its container */
    object-fit: contain; /* Adjust this based on your requirement */
    overflow: hidden;
    background-color: #000; /* Fallback color */
    border-radius: var(--player-border-radius);
    /* WebKit: video composits in its own layer and can paint above later siblings unless z-order is explicit */
    position: relative;
    z-index: 0;
}

google-cast-launcher {
  width: 40px;
  height: 40px;
  cursor: pointer;
  color: #fff;
}

  
.video-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none; /* Allow clicks to pass through the overlay to the video */
}

/* Declarative slots: light-DOM children with slot="top-right" (etc.) compose here. */
.fastpix-user-slots {
    position: absolute;
    inset: 0;
    z-index: var(--user-slot-z, 6);
    pointer-events: none;
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    grid-template-rows: auto minmax(0, 1fr) auto;
    box-sizing: border-box;
    padding: 8px 8px calc(8px + var(--user-slot-bottom-clearance, 64px)) 8px;
    transition: none;
}

.fastpix-slot-region {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 6px;
    max-width: 100%;
    min-width: 0; /* allow shrinking inside grid / flex so slotted UI can respond to narrow hosts */
    pointer-events: none;
}

.fastpix-slot-region ::slotted(*) {
    pointer-events: auto;
}

.fastpix-slot-top-left {
    grid-column: 1;
    grid-row: 1;
    align-self: start;
    justify-self: start;
}

.fastpix-slot-top-center {
    grid-column: 2;
    grid-row: 1;
    align-self: start;
    justify-self: center;
    justify-content: center;
}

.fastpix-slot-top-right {
    grid-column: 3;
    grid-row: 1;
    align-self: start;
    justify-self: end;
    justify-content: flex-end;
}

.fastpix-slot-center-left {
    grid-column: 1;
    grid-row: 2;
    align-self: center;
    justify-self: start;
    align-content: center;
}

.fastpix-slot-center-right {
    grid-column: 3;
    grid-row: 2;
    align-self: center;
    justify-self: end;
    justify-content: flex-end;
    align-content: center;
}

.fastpix-slot-bottom-left {
    grid-column: 1;
    grid-row: 3;
    align-self: end;
    justify-self: start;
    align-items: flex-end;
}

.fastpix-slot-bottom-center {
    grid-column: 2;
    grid-row: 3;
    align-self: end;
    justify-self: center;
    justify-content: center;
    align-items: flex-end;
}

.fastpix-slot-bottom-right {
    grid-column: 3;
    grid-row: 3;
    align-self: end;
    justify-self: end;
    justify-content: flex-end;
    align-items: flex-end;
}

/* Narrow player: tighter slot chrome (uses host container from :host). */
@container fp-player (max-width: 520px) {
    .fastpix-user-slots {
        padding: 5px 5px calc(5px + var(--user-slot-bottom-clearance, 64px)) 5px;
    }
    .fastpix-slot-region {
        gap: 4px;
    }
}

@container fp-player (max-width: 380px) {
    .fastpix-user-slots {
        padding: 3px 3px calc(3px + var(--user-slot-bottom-clearance, 64px)) 3px;
    }
    .fastpix-slot-region {
        gap: 3px;
    }
}

.overlay-show {
    background-color: var(--backdrop-color, transparent);
}

.parent.subtitle-container {
    opacity: 0;
}

.parent.initialized .subtitle-container {
    opacity: 1;
}

.subtitle-container.contained {
    position: absolute;
    bottom: 10%; /* Adjust this value as needed to position the subtitles */
    left: 50%;
    transform: translateX(-50%);
    width: auto; /* Allows the width to adjust based on content */
    pointer-events: none; /* Allows interaction with the video element */
    transition: bottom 0.6s ease; /* Smooth transition */
    text-align: center;
    background: rgba(0, 0, 0, 0.4); /* Semi-transparent black background */
    color: white;
    padding: 0.25em 0.5em; /* Adds some padding for better readability */
    border-radius: 3px; /* Optional: adds a slight border-radius */
    overflow-y: hidden;
}

/* Default subtitle position */
.subtitle-container.large {
    bottom: 20px; /* Adjust this value to set the default position */
    font-size: 24px;
}

/* Class to move subtitles up */
.subtitles-up .subtitle-container.large {
    bottom: 98px; /* Adjust this value to move subtitles up */
    font-size: 24px;
}

.subtitle-container.medium {
    bottom: 20px; /* Adjust this value to set the default position */
    font-size: 14px;
}

/* Class to move subtitles up */
.subtitles-up .subtitle-container.medium {
    bottom: 70px; /* Adjust this value to move subtitles up */
    font-size: 14px;
    max-height: 150px;
}

.subtitle-container.mobile {
    bottom: 20px;
    font-size: 8px;
}

.subtitles-up .subtitle-container.mobile {
    bottom: 50px; /* Adjust this value to move subtitles up */
    font-size: 8px;
    max-height: 90px;
    position: absolute;
    width: calc(100% - 100px);
}
    
/* General ::cue styling */
::cue {
    display: none !important;
    background: none !important;
    color: transparent !important;
    text-shadow: none !important;
    box-shadow: none !important;
    border: none !important;
    outline: none !important;
}

/* Specific video::cue styling */
video::cue {
    display: none !important;
    background: none !important;
    color: transparent !important;
    text-shadow: none !important;
    box-shadow: none !important;
    border: none !important;
    outline: none !important;
}

/* Fallback for Webkit-based browsers */
video::-webkit-media-text-track-display {
    display: none !important;
    background: none !important;
    color: transparent !important;
    text-shadow: none !important;
    box-shadow: none !important;
    border: none !important;
    outline: none !important;
}

.leftControls.initialized {
    display: var(--left-controls-bottom, flex)
}

.leftControls.mobile.initialized {
    display: var(--left-controls-bottom-mobile, flex);
    bottom: 3px;
    position: absolute;
}

.bottomRightContainer.mobile.initialized {
    display: var(--bottom-right-controls-mobile, flex)
}

.controlsContainer {
    display: var(--controls, flex);
    /* Stack above WebKit video layer; fill parent so absolute children align to the player */
    position: absolute;
    inset: 0;
    z-index: 2;
    /* Full-cover layer would steal taps from <video>; pass through except on real controls */
    pointer-events: none;
}

.controlsContainer * {
    pointer-events: auto;
}

/* Inert flex row — must not block tap-to-toggle on the video */
.controlsContainer .bottomCenterDiv {
    pointer-events: none;
}

.volumeiOSButton {
    display: var(--volume-iOS-button, flex)
}

.castButton {
    display: var(--cast-button-display, flex);
}
    
.playlistButtonVisible {
    display: var(--playlist-button-visible, flex);
}

#decreaseTimeBtn,
#increaseTimeBtn,
.timeDisplay,
.parentVolumeDiv,
.initialplayPauseButtonStyle,
.castButton {
    border-radius: var(--border-radius);
}

#forwardSeekBtnSvg {
    height: 24px;
     width: 24px;
}

.roundedCorners {
     border-radius: 50%;
}

.bottomCenterDiv {
    display: flex
}

.initialplayPauseButtonStyle {
    display: flex;
    align-items: center;
    justify-content: center;
}

.playbackRateButtonInitial {
    height: var(--icon-height);
    width: var(--icon-width);
    color: var(--primary-color);
    font-size: 14px;
}

.playbackRateButtonInitial:hover,
.audioMenuButton:hover,
.castButton:hover,
.playlistButton:hover,
.playlistPrevButton:hover {
    background-color: var(--accent-color); /* Color on hover */
    border-radius: 2px;
}

.playbackRateButton {
    border: 1px solid transparent;
    margin-right: 3px;
    color: #100023;
}

.playbackRateButton.active {
    background-color: var(--accent-color); /* Color on hover */
    color: var(--primary-color);
    border-radius: 2px;
}

.volumeiOSButton {
    color: var(--primary-color);
}

.parent.mobile.resolution-menu {
    bottom: 36px;
    right: 0;
}

.resolution-menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: var(--primary-color);
    padding: 5px 7px;
    border-radius: 2px;
    font-size: 14px;
    color: #100023;
    bottom: 46px;
    overflow-y: auto;
    left: 0;
    right: auto;
}

.title,
.title-on-demand {
    display: none;
    color: var(--primary-color);
}

.title-on-demand.initialized {
    display: var(--title, flex);
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    font-weight: 600;
}

.title-on-demand.mobile.initialized {
     display: none;
 }

.title.initialized {
    display: var(--title, flex);
    align-items: center;
    justify-content: center;
    margin-left: 60px;
    font-weight: 600;
    font-size: 14px;
}

.liveTag {
    position: absolute;
    color: #F5F5F5;
    margin-right:90px;
    padding: 2px 12px;
    font-size: 14px;
    font-weight: 600;
}

.liveTag::before {
    display: block;
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    position: absolute;
    left: 0px;
    top: calc(50% - 3px);
    background-color: red;
}

.parentTextContainer {
    display: none;
    position: absolute;
    padding: 10px 20px;
    left: 0;
    top: 10px;}

.parent.initialized .parentTextContainer {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}

.title.initialized {
    display: var(--title, flex);
    align-items: center;
    justify-content: center;
}

.qualitySelectorButtons,
.audioSelectorButtons,
.subtitleSelectorButtons,
.offSubtitles {
    padding: 6px 10px 6px 20px;
    position: relative;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-transform: capitalize; 
}

.parent.initialized.mobile .qualitySelectorButtons,
.parent.initialized.mobile .audioSelectorButtons,
.parent.initialized.mobile .subtitleSelectorButtons,
.parent.initialized.mobile .offSubtitles {
    padding: 6px 10px 6px 15px;
}

.qualitySelectorButtons:hover,
.audioSelectorButtons:hover,
.subtitleSelectorButtons:hover,
.offSubtitles:hover {
    border-radius: 2px;
    background: var(--accent-color);
    color: var(--primary-color);
}

.playbackRateButton {
    color: #10023;
}

.playbackRateButton:hover {
    border-color: var(--accent-color); /* Color on hover */
    border-radius: 2px;
}

#playPauseAferClickBreakPoint {
    align-items: center;
    justify-content: center;
}

#playPauseAferClickBreakPoint:hover {
    border-radius:2px;
    transition: background-color 0.2s ease-in;
}

.parent {
    position: relative;             /* Anchor bottom gradient to the player */
    display: flex;
    row-gap: 1.875rem;
    height: 100%;
    overflow: hidden;               /* Keep gradient inside rounded corners */
    /* Do not transition layout properties: animating width/height on load made absolute overlays (user slots) drift. */
    transition: none;
}

.parent::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80px; /* Softer scrim, keeps controls colors closer to original */
    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.45),
        rgba(0, 0, 0, 0.20),
        rgba(0, 0, 0, 0)
    ); /* Bottom gradient shadow similar to Mux */
    pointer-events: none; /* Allow clicks to pass through the gradient background */
    border-radius: 0 0 10px 10px; /* Apply border-radius to match the video's border-radius */
}

#playPauseButtonId:hover {
    background-color: blue;
    border-radius: 2px;
    transition: background-color 0.3s ease-in;
}

.playbackRatesButton:hover,
.playlistNextButton:hover {
    background-color: var(--accent-color);
    color: var(--primary-color);
}
    
.parentVolumeDiv {
    display: none;
    flex-direction: row;
    /* position: absolute; */
    width: auto;
    justify-content: space-between;
    align-items: center;
}

#parentVolumeDivResponse {
    display: flex;
    flex-direction: row;
    position: absolute;
    left: 5%;
    width: auto;
    justify-content: space-between;
     align-items: center;
    bottom: 0;
}

#forwardRewindControlsWrapperResponsive,
#forwardRewindControlsWrapperMini {
    z-index: 1;
    position: absolute;
    width: 120px;
    left: 50%;
    bottom: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
}

#forwardRewindControlsWrapperMd {
    display: flex;
    flex-direction: row;
}

.qualitySelectorButtons.active::before,
.audioSelectorButtons.active::before,
.subtitleSelectorButtons.active::before,
.offSubtitles.active::before {
    display: block;
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    position: absolute;
    left: 5px;
    top: calc(50% - 3px);
    background-color: var(--accent-color);
}

.qualitySelectorButtons.active:hover::before,
.audioSelectorButtons.active:hover::before,
.subtitleSelectorButtons:hover::before,
.offSubtitles.active:hover::before {
    background-color: var(--primary-color);
}

.qualitySelectorButtons.active,
.audioSelectorButtons.active,
.subtitleSelectorButtons.active,
.offSubtitles.active {
    font-weight: bold;
}

.forwardRewindControlsWrapper {
    display: flex;
}

.playPauseBeforeClick {
    display:flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 50%;
    left: 45%;
    color: var(--primary-color);
    height: 40px;
    width: 40px;
    border-radius: 50%;
}

.playPauseBeforeClick:hover,
.resolutionMenuButton:hover {
    background-color: var(--accent-color);
}

.volumeButton {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius);
}

.volumeButton:hover {
    background-color: var(--accent-color);
}

.bottomRightContainer {
    display: none;
    flex-direction: row;
    position: absolute;
    right: 20px;
    width: auto;
    justify-content: space-between;
    align-items: center;
    bottom: 0;
    z-index: 8;
}

.bottomRightContainer.initialized {
    display: var(--bottom-right-controls, flex);
}

#bottomRightDivMd {
bottom: 10px;
    right: 18px;
}

#increaseTimeBtn,
#decreaseTimeBtn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}

#increaseTimeBtn:hover,#decreaseTimeBtn:hover {
    background-color: var(--accent-color);
    border-radius: 2px;
}

.subtitle-menu,
.audio-menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: var(--primary-color);
    padding: 5px 7px;
    border-radius: 2px;
    font-size: 14px;
    color: #100023;
    bottom: 46px;
    overflow-y: auto;
    left: 32px;
    right: auto;
    max-width: 116px;
    overflow-y: auto;
    white-space: nowrap;
    text-overflow: ellipsis;        
}

.timeDisplay {
    font-family: sans-serif;
    font-size: 0.875rem;
    color: var(--primary-color);
    padding: 0px 5px;
    white-space: nowrap;
    border-radius: var(--border-radius);
}

#playPauseButtonHeightWidth {
    position: absolute;
    bottom: 50%;
}

/* Additional styling for each button */
.fullScreenButton:hover,
.pipButton:hover,
.ccButton:hover {
    background-color: var(--accent-color);}

.spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: var(--accent-color);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 0.5s linear infinite; /* Changed duration to 0.5s */
    position: absolute; /* Position the spinner relative to the viewport */
    top: 50%; /* Align the spinner vertically at the center of the viewport */
    left: 50%; /* Align the spinner horizontally at the center of the viewport */
    transform: translate(-50%, -50%); /* Center the spinner precisely */
    z-index: 9999; /* Ensure the spinner is on top of other elements */
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.retryButton {
    color: var(--accent-color);
}


/* Default styles for volume controls */
.volumeControl {
    width: 3.5rem; /* Adjust width as needed */
    display: inline-block;
    -webkit-appearance: none;
    border-radius: 0.313rem;
    height: 3px;
    background: linear-gradient(to right, var(--primary-color) 0%, var(--primary-color) 100%, #ddd 50%, #ddd 100%);
}

/* iOS volume mode: when iOS-specific button is active, hide standard slider/button */
.parentVolumeDiv.volumeControliOS .volumeControl,
.parentVolumeDiv.volumeControliOS .volumeButton {
    display: none !important;
}
.parentVolumeDiv.volumeControliOS .volumeiOSButton {
    display: flex !important;
}

/* Styling the volume control thumb */
.volumeControl::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 10px; /* Adjust thumb width as needed */
    height: 10px; /* Adjust thumb height as needed */
    background-color: var(--primary-color); /* Thumb color */
    border-radius: 50%; /* Make thumb round */
    cursor: pointer; /* Show pointer cursor */
    position: relative; /* Required for positioning the dot */
}

/* Styling the volume control thumb on hover */
.volumeControl:hover::-webkit-slider-thumb {
    visibility: visible; /* Show the thumb on hover */
}

/* Additional styles for the thumb */
.volumeControl::-webkit-slider-thumb::before {
    content: ""; /* No content for the pseudo-element */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6px; /* Adjust the size of the dot as needed */
    height: 6px; /* Adjust the size of the dot as needed */
    background-color: white; /* Color of the dot */
    border-radius: 50%;
 }

/* Styling the volume control thumb for Firefox */
.volumeControl::-moz-range-thumb {
    width: 10px; /* Adjust thumb width as needed */
    height: 10px; /* Adjust thumb height as needed */
    background-color: var(--primary-color); /* Thumb color */
    border-radius: 50%; /* Make thumb round */
    cursor: pointer; /* Show pointer cursor */
    border: none; /* Remove default border */
    -moz-appearance: none; /* Remove default styling */}

/* Additional styles for the thumb */
.volumeControl::-moz-range-thumb::before {
    content: ""; /* No content for the pseudo-element */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6px; /* Adjust the size of the dot as needed */
    height: 6px; /* Adjust the size of the dot as needed */
    background-color: var(--accent-color); /* Color of the dot */
    border-radius: 50%;
}

.playPauseButton {
    background-color: rgba(255, 255, 255, 0.1);
    border: none;
    cursor: pointer;
    fill: white;
    outline: none;
    width: 3.75rem;
    height: 3.75rem;
    border-radius: 50%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 45%;
}

.playPauseButton:hover {
    background-color: var(--accent-color);
}

#playBackAfterClick {
    background-color: rgba(255, 255, 255, 0.1)
    right: 45%;
    width: 2.5rem;
    height: 2.5rem;
    bottom: 0%;
}

#playBackAfterClick:hover {
    background-color: var(--accent-color);
}

.timeDisplay:hover {
    background-color: var(--accent-color);
}

/* Skip Intro button */
.skipIntroButton,
.nextEpisodeButton {
    position: absolute;
    bottom: 60px; /* slightly above the progress bar */
    background-color: #f5f5f5;
    color: black;
    font-weight: 600;
    padding: 6px 12px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    display: none;
    z-index: 1500;
    font-size: 14px;
    transition: background-color 150ms ease, color 150ms ease;
}



.controlsContainer .skipIntroButton:hover,
.controlsContainer .nextEpisodeButton:hover {
  background-color: var(--accent-color);
  color: #f5f5f5;
}

.skipIntroButton {
    left: 20px;
}

.nextEpisodeButton {
    right: 20px;
}

.progressBar.initialized {
    display: var(--progress-bar, flex);
    /* When --progress-bar-invisible: 1, bar is hidden but still receives hover/click for timestamp preview */
    opacity: calc(1 - var(--progress-bar-invisible, 0));
    pointer-events: auto;
 }

.progressBar.initialized.mobile {
    display: var(--progress-bar, flex);
    opacity: calc(1 - var(--progress-bar-invisible, 0));
    pointer-events: auto;
}

/* Only Firefox */
@supports (-moz-appearance:none) {
    .pipButton {
        display: var(--pip-button, none) !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
    }
}

#progressBar {
    position: absolute;
    height: 4.5px;
    bottom: var(--seekbar-bottom, 46px);
    left: 20px;
    right: 20px;
    margin: 0;
    padding: 0;
    cursor: pointer;
    -moz-appearance: none;
}

#progressBarResponsiveMd {
    position: absolute;
    height: 3.5px;
    bottom: var(--seekbar-bottom, 46px);
    left: 20px;
    right: 20px;
    cursor: pointer;
    width: calc(100% - 40px);
}

.chapter-marker-mini {
    height: 4.5px;
    bottom: 35px;
    position: absolute;
    left: 0;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.4);
}

.chapter-marker-md {
    bottom: 47px;
    height: 4.5px;
    position: absolute;
    left: 0;
    width: 2.5px;
    background-color: rgba(0, 0, 0, 0.4); 
}

.chapter-marker-lg {
    bottom: 46px;
    height: 4.5px;
    position: absolute;
    left: 0;
    width: 2.5px;
    background-color: rgba(0, 0, 0, 0.4);
} 

.progressBar {
    display: none;
    -webkit-appearance: none;
    border-radius: 0.313rem;
    height: 3px;
    width: calc(100% - 40px);
    -moz-appearance: none;
    cursor: pointer;
    background-color: var(--progress-bar-track-unfilled);
}

/* Seekbar thumb — WebKit */
.progressBar::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    background-color: var(--accent-color);
    border-radius: 50%;
    cursor: pointer;
    visibility: hidden;
    /* Center the 12px thumb on the 3px track */
    margin-top: -2px;
}

/* Show thumb on hover */
.progressBar:hover::-webkit-slider-thumb {
    visibility: visible;
}

/* Seekbar thumb — Firefox */
.progressBar::-moz-range-thumb {
    -moz-appearance: none;
    width: 12px;
    height: 12px;
    background-color: var(--accent-color);
    border-radius: 50%;
    cursor: pointer;
    visibility: hidden;
    border: none;
}

/* Show thumb on hover — Firefox */
.progressBar:hover::-moz-range-thumb {
    visibility: visible;
    -moz-appearance: none;
}

/* Additional styles for the thumb in Firefox */
.progressBar::-moz-range-thumb::before {
    content: ""; /* No content for the pseudo-element */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6px; /* Adjust the size of the dot as needed */
    height: 6px; /* Adjust the size of the dot as needed */
    background-color: var(--accent-color); /* Color of the dot */
    border-radius: 50%;
    -moz-appearance: none;
}

#mediaFullScreenResponsiveMd {
    position: absolute;
    bottom: 9.1px;
    right: 0;
    height: 24px;
    width: 30px;
    border-radius: 2px;
}

#mediaFullScreenResponsiveMd:hover {
    background-color: var(--accent-color);
}

#pipButtonResponsiveMd {
    position: absolute;
    bottom: 9.1px;
    right: 0;
    height: 24px;
width: 30px;
}

#pipButtonResponsiveMd:hover {
    background-color: #
}

#bottomRightDivResponsive {
    position: absolute;
    right: 10px;
    bottom: 10px;
}

.mobile #bottomRightDivResponsive {
    bottom: 3px;
}

.mobile #bottomRightDivResponsive .pipButton,
.mobile #bottomRightDivResponsive .playbackRateButtonInitial {
    display: none;
}

.mobile #progressBarResponsive {
    bottom: var(--seekbar-bottom, 33px) !important;
}

#timeDisplayResponsiveMd {
    position: absolute;
    bottom: 8px;
    font-size: 0.875rem;
    left: 126px;
    color: var(--primary-color);
    font-family: Arial, sans-serif;
    padding: 4px;
    border-radius: 2px;
}

#timeDisplayResponsiveMd:hover {
    background-color: var(--accent-color);
}

#forwardSeekInHeightWidth {
    position: absolute;
    bottom: 1px;
    left: 60%;
}

#backwardSeekInHeightWidth {
    position: absolute;
    bottom: 50%;
    right: 60%;
}

#mediaFullScreenResponsiveHeightWidth,
#pipButtonHeightWidth {
    bottom: 0%;
}

#progressBar:hover {
    cursor: pointer;
}

#progressBarResponsive {
    position: absolute;
    bottom: var(--seekbar-bottom, 2.5rem);
    height: 4px;
    left: 20px;
    right: 20px;
}

#playPauseButtonResponsive {
    display:flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 45%;
    left: 45%;
    color: var(--primary-color);
    height: 40px;
    width: 40px;
    border-radius: 50%;
}

#initialPlayButton {
    display: flex;
     align-items: center;
    justify-items: center;
}

#progressBarMini {
    position: absolute;
    height: 3px;
    width: 84%;
    bottom: var(--seekbar-bottom, 40px);
    display: none;
}

#bottomRightDivMini {
    display: none;
}

#parentVolumeMini {
    bottom: 0;
}

#pipButtonMini, #fullScreenButtonMini {
    position: absolute;
    bottom: 1px;
}

#bottomRightContainerMini {
    bottom: 40px;
}

#progressBarResponsiveHeightWidth {
    position: absolute;
    bottom: 3.75rem;
    height: 0.25 rem;
    width: 96%;
    right: 2%;
    left: 2%;
}

#timeDisplayHeightWidth {
    position: absolute;
    bottom: 3.75rem;
    font-size: 0.875rem;
    right: 2%;
    color: var(--primary-color);
    font-family: Arial, sans-serif;
    display: none; /* Legacy click timestamp UI – disabled in favor of hover pill */
}

#bottomRightDiv {
    position: absolute;
    bottom: 10px;
}

/* for screens/video width less <=481 */
#pipButtonResponsive {
    position: absolute;
    bottom: 12px;
    right: 0;
    height: 24px;
    width: 30px;
}

#pipButtonResponsive:hover {
    background-color: var(--accent-color);
}

#mediaFullScreenResponsive {
    bottom: 12px;
    right: 0;
    height: 24px;
    width: 30px;
}

#mediaFullScreenResponsive:hover {
    background-color: var(--accent-color);
}

#play:hover,
#pause:hover {
    background-color: rgba(255, 255, 255, 0.1)
}

#fowardSeekInsecs {
    background-color: transparent;
    border: gray
    cursor: pointer;
    fill: green;
    outline: none;
    width: 24px;
    height: 30px;
    border-radius: 50%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.875;
    position: absolute;
    bottom: 50%; /* Default bottom position */
    left: 54%;
}

#backwardSeekInsecs {
    position: absolute;
    bottom: 50%;
    right: 57%;
    height: 30px;
}

#playPauseButtonResponsiveMd {
    position: absolute;
    bottom: 45%;
    left: 45%;
    color: var(--primary-color);
    height: 2.875rem;
    width: 2.875rem;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
}

#backwardSeekInsecsMd {
    position: absolute;
    bottom: 10px;
    left: 61px;
    height: 24px;
    width: 30px;
}

#backwardSeekInsecsMd:hover {
    background-color: var(--accent-color);
}

#fowardSeekInsecsMd {
    border: gray;
    cursor: pointer;
    fill: green;
    outline: none;
    height: 24px;
    width: 30px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.875;
    position: absolute;
    bottom: 10px; /* Default bottom position */
    left: 93px;
}

#fowardSeekInsecsMd:hover {
    background-color: var(--accent-color);
}

#mediaFullScreenLandscape {
    background-color: transparent;
    border: gray;
    cursor: pointer;
    fill: white;
    outline: none;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 20%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

#timeControlButtonIncrease {
    background-color: transparent;
    border: gray;
    cursor: pointer;
    outline: none;
    border-radius: 2px;
    width: 30px;
    height: 24px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 10px;
    left: 8.5%;
    font-size: 0.875rem;
}

#timeControlButtonDecrease {
    background-color: transparent;
    border: gray;
    cursor: pointer;
    outline: none;
    border-radius: 2px;
    width: 30px;
    height: 24px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 10px;
    left: 6%;
    font-size: 0.875rem;
}

#timeControlButtonIncrease:hover,
#timeControlButtonDecrease:hover {
    background-color: var(--accent-color);
}

.retryButton, button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    cursor: pointer;
    outline: none; /* Prevents default focus outline */
}

.leftControls {
    display: none;
    position: absolute;
    left: 50px;
    bottom: 10px;
    flex-direction: row;
    align-items: center;
    z-index: 4;
}

.leftControls.mobile {
    display: none;
    position: absolute;
    left: 10px;
    bottom: 3px;
    flex-direction: row;
    align-items: center;
    z-index: 4;
}

.mobileControls {
     display: none;
    position: absolute;
    width: 100%;
    height: 40px;
    bottom: calc(50% - 18px);
    align-items: center;
    justify-content: center;
    left: 0;
}

.parent.initialized .mobileControls {
    display: var(--middle-controls-mobile, flex);
}

.parent.mobile.initialized .title {
    display: none;
}

.parent.mobile.initialized .title-on-demand {
    display: none;
}

.mobile .title {
     display: none;
}

.mobile .playbackRateButtonInitial,
.mobile .pipButton {
    display: none;
}

.pipButton {
display: none;
}

.live-stream {
    --backward-button: none;
    --forward-button: none;
}
    
.mobileControlsButtonsBlock {
    display: none;
    flex-direction: row;
    align-items: center;
}

.mobileControlsButtonsBlock #increaseTimeBtn,
.mobileControlsButtonsBlock #decreaseTimeBtn,
.mobileControlsButtonsBlock #increaseTimeBtn svg,
.mobileControlsButtonsBlock #decreaseTimeBtn svg,
.mobileControlsButtonsBlock .playlistPrevButton,
.mobileControlsButtonsBlock .playlistNextButton,
.mobileControlsButtonsBlock .playlistPrevButton svg,
.mobileControlsButtonsBlock .playlistNextButton svg,
.castButton svg {
    width: 30px !important;
    height: 30px !important;
}

.mobileControlsButtonsBlock #increaseTimeBtn  {
    margin-left: 25px;
}

.mobileControlsButtonsBlock #decreaseTimeBtn {
    margin-right: 25px;
}

.mobileControlsButtonsBlock .playlistPrevButton {
    margin-right: 20px;
}
.mobileControlsButtonsBlock .playlistNextButton {
 margin-left: 20px;
}


.timeDisplay {
    height: var(--button-height);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--secondary-color);
}

/* All Icons */
.initialPlayBigButton.initialized svg,
#decreaseTimeBtn svg,
#increaseTimeBtn svg,
.parentVolumeDiv svg,
.playbackRateButtonInitial svg,
.ccButton svg,
.pipButton svg,
.fullScreenButton svg,
.resolutionMenuButton svg,
#audioMenuButton svg,
.default-icon,
.castButton svg,
.playlistNextButton svg,
.playlistPrevButton svg,
.playlistButton svg,
.volumeiOSButton {
     width: var(--icon-width);
     height: var(--icon-height);
}

/* All Icon Buttons */
.initialPlayBigButton.initialized:not(.mobile),
#decreaseTimeBtn,
#increaseTimeBtn,
.playbackRateButtonInitial,
.ccButton,
.pipButton,
.fullScreenButton,
.volumeButton,
.resolutionMenuButton,
.audioMenuButton,
.castButton,
.playlistNextButton,
.playlistButton,
.playlistPrevButton,
.default-button {
    width: var(--button-width);
    height: var(--button-height);
    background-color: var(--secondary-color);
    border-radius: var(--border-radius);
    color: var(--primary-color);
    bottom: 10px;
}

.initialplayPauseButtonStyle svg,
#decreaseTimeBtn svg,
#increaseTimeBtn svg,
.parentVolumeDiv svg,
.playbackRateButtonInitial svg,
.ccButton svg,
.pipButton svg,
.fullScreenButton svg,
.volumeiOSButton svg,
.playlistNextButton svg,
.playlistButton svg,
.timeDisplay {
    color: var(--primary-color);
}

.initialPlayBigButton:not(.initialized),
.initialPlayBigButton.initialized.mobile {
    width: var(--button-big-width);
    height: var(--button-big-height);
    border-radius: 50%;
    display: var(--initial-play-button, flex);
    align-items: center;
    justify-content: center;
    left: calc(50% - (var(--button-big-width) / 2));
    bottom: calc(50% - (var(--button-big-height) / 2));
    background-color: transparent;
}

.initialPlayBigButton.initialplayPauseButtonStyle.initialized.showPlayButton {
    display: var(--play-button-initialized, flex) !important;
}

.initialPlayBigButton.initialplayPauseButtonStyle.initialized.showPlayButton.mobile {
    display: var(--mobile-play-button-initialized, flex) !important;
}

.initialPlayBigButton.initialized:not(.mobile) {
    left: 20px;
}

.initialPlayBigButton svg {
    width: var(--icon-big-width);
    height: var(--icon-big-height);
}

.initialPlayBigButton.initialized svg {
    width: var(--icon-width);
    height: var(--icon-height);
}

.initialPlayBigButton:hover,
.initialPlayBigButton.initialized:hover {
    background-color: var(--accent-color);
}

.spinner {
    display: var(--loading-indicator, flex);
    align-items: center;
    justify-content: center;
}

.resolutionMenuButton {
    display: var(--resolution-selector, flex);
    align-items: center;
    justify-content: center;
}

.playlistButton {
    display: var(--playlist, flex);
}

.audioMenuButton {
    display: none;
    align-items: center;
    justify-content: center;
    color: var(--primary-color);
}

.initialplayPauseButton.showPlayButton {
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Mobile hide on hover status */
.mobile .initialPlayBigButton:hover,
.mobile #decreaseTimeBtn:hover,
.mobile #increaseTimeBtn:hover,
.mobile .playbackRateButtonInitial:hover,
.mobile .ccButton:hover,
.mobile .pipButton:hover,
.mobile .fullScreenButton:hover,
.mobile .volumeButton:hover,
.mobile .default-button:hover,
.mobile #audioMenuButton:hover,
.mobile .resolutionMenuButton:hover {
    background-color: transparent !important;
}

#decreaseTimeBtn {
    display: var(--backward-skip-button, flex);
    align-items: center;
    justify-content: center;
}

.playlistNextButton,
.playlistPrevButton,
.playlistButton {
    align-items: center;
    justify-content: center;
    color: var(--primary-color);
    background-color: var(--secondary-color);
}

.playlistPrevButton {
display: var(--previous-episode-button, flex);
}

.playlistNextButton {
display: var(--next-episode-button, flex);
}


#increaseTimeBtn {
    display: var(--forward-skip-button, flex);
    align-items: center;
    justify-content: center;
 }

.parentVolumeDiv.initialized {
    display: var(--volume-control, flex);
    align-items: center;
    justify-content: center;
}

.parentVolumeDiv.initialized.mobile {
    display: var(--volume-control-mobile, flex);
    align-items: center;
    justify-content: center;
}

.playbackRateButtonInitial {
    display: var(--playback-rate-button, flex);
    align-items: center;
    justify-content: center;
}

.playbackRate-menu {
    position: absolute;
    right: 0;
    bottom: 50px;
    padding: 6px;
    background-color: var(--primary-color);
    flex-direction: row;
    border-radius: 2px;
}

.ccButton {
    display: none;
}

.audioMenuButtonShow {
    display: var(--audio-track-button, flex);
}

.ccButtonLength {
    display: var(--cc-button, flex);
    align-items: center !important;
justify-content: center !important;

}

.ccButton.disabled {
    display: none;
}

.pip-firefox {
    display: none;
}


.pipButton {
    display: var(--pip-button, flex);
    align-items: center;
    justify-content: center;
}

.fullScreenButton {
    display: var(--full-screen-button, flex);
    align-items: center;
    justify-content: center;
}

.timeDisplay {
    display: var(--time-display, flex);
    align-items: center;
    justify-content: center;
}

.thumbnailSeeking {
   position: absolute;
   z-index: 99;
   bottom: calc(20px + var(--seekbar-bottom, 2.5rem));
   border-color: var(--primary-color);
   border-radius: 3px;
   border-style: solid;
   border-width: 2px 2px 20px 2px; /* bottom border creates the white bar under the frame */
   display: none;
   opacity: 0;
   cursor: pointer;
}

.seekbarPin {
    display: none;
    position: fixed; /* fixed so rect.left + x maps directly to viewport coords */
    width: 2px;
    height: 4px;
    background-color: var(--accent-color);
    border-radius: 1px;
    pointer-events: none;
    z-index: 100;
    /* JS sets left, top, and transform on every mousemove */
}

.thumbnailSeeking.noThumbnail {
   border-color: transparent;
   border-width: 0;
   padding: 0;
   background: none;
   position: absolute;
   /* JS sets left + transform on every mousemove — do not set them here */
   white-space: nowrap;
}

/* Hide chapter text inside the timestamp pill — it has no context without a thumbnail frame */
.thumbnailSeeking.noThumbnail .thumbnailChapterDisplay {
    display: none;
}

.thumbnailSeeking.chapters.noThumbnail {
   border-width: 4px;
   bottom: 100px;
}

.thumbnailSeeking.show {
   opacity: 1;
   display: flex;
}

.thumbnailSeeking.chapters.lg.noThumbnail.show .thumbnailChapterDisplay.multi-line {
    bottom: -45px;
}

.thumbnailSeeking.chapters.sm.noThumbnail.show .thumbnailChapterDisplay.multi-line {
    bottom: 25px;
    min-width: auto;
    padding: 2px;
}

.thumbnailSeeking.chapters.md.noThumbnail.show .thumbnailChapterDisplay.multi-line {
    bottom: 25px;
    min-width: auto;
    padding: 4px;
}

.thumbnailSeeking.lg.noThumbnail.show .thumbnailTimeDisplay,
.thumbnailSeeking.md.noThumbnail.show .thumbnailTimeDisplay,
.thumbnailSeeking.sm.noThumbnail.show .thumbnailTimeDisplay {
    padding: 5px 10px;
}


.thumbnailSeeking.show.lg,
.thumbnailSeeking.md.show {
    bottom: calc(30px + var(--seekbar-bottom, 2.5rem));
}

.thumbnailSeeking.show.lg.chapters {
    bottom: calc(60px + var(--seekbar-bottom, 2.5rem));
}

.thumbnailSeeking.show.lg.chapters.noThumbnail {
    bottom: calc(60px + var(--seekbar-bottom, 2.5rem));
}

.thumbnailSeeking.show.sm.chapters.noThumbnail {
    bottom: calc(5px + var(--seekbar-bottom, 2.5rem));
}

.thumbnailSeeking.show.md.chapters.noThumbnail {
    bottom: calc(20px + var(--seekbar-bottom, 2.5rem));
}

.thumbnailSeeking.sm.show {
    bottom: calc(10px + var(--seekbar-bottom, 2.5rem));
}

.thumbnailSeeking.chapters {
   border-width: 2px 2px 20px 2px;
   bottom: calc(60px + var(--seekbar-bottom, 2.5rem));
}

.thumbnailTimeDisplay {
   font-size: 13px;
   text-align: center;
   position: absolute;
   left: 0;
   width: 100%;
   transform: translateX(0);
   bottom: -18px; /* Adjust as needed */
   color: grey;
   z-index: 9;
}

/* noThumbnail / spritesheet-fail state — pill is the timestamp’s background */
.thumbnailSeeking.noThumbnail .thumbnailTimeDisplay {
   position: static;
   width: auto;
   left: auto;
   transform: none;
   bottom: auto;
   color: #fff;
   font-size: 13px;
   font-weight: 600;
   text-align: center;
   background-color: rgba(0, 0, 0, 0.55);
   padding: 5px 10px;
   border-radius: 4px;
}

.thumbnailChapterDisplay {
    position: absolute;
    bottom: -56px; /* Adjust bottom position to ensure no contact with thumbnailSeeking */
    left: 50%;
    transform: translateX(-50%); /* Center horizontally */
    max-width: var(--thumbnail-max-width); /* Set max-width */
    color: #FFF;
    border-radius: var(--border-radius);
    font-size: 13px;
    text-align: center;
    overflow: hidden; /* Hide overflow text */
    text-overflow: ellipsis; /* Add ellipsis for overflow text */
}

.thumbnailChapterDisplay.noThumbnail {
    position: absolute;
    bottom: -41px;
}

.thumbnailChapterDisplay.single-line {
    white-space: nowrap; /* Prevent text wrapping */
    text-overflow: ellipsis; /* Add ellipsis for overflow text */
}

.thumbnailChapterDisplay.multi-line {
    display: -webkit-box; /* Use a flexbox for multi-line truncation */
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* Clamp to two lines */
    line-clamp: 2; /* Fallback for non-WebKit browsers */
    max-height: calc(3.2em * 2); /* Adjust height to show up to two lines */
    min-width: 157.59px;
}

.thumbnailSeeking.chapters.md.show .thumbnailChapterDisplay.multi-line {
    min-width: 157.59px;
    font-size: 14px;
    bottom: -57px;
    color: var(--primary-color);
}

.thumbnailSeeking.chapters.sm.show .thumbnailTimeDisplay {
    font-size: 10px;
    bottom: -16px;
}

.thumbnailSeeking.chapters.md.show .thumbnailTimeDisplay {
    font-size: 12px;
    bottom: -16px;
}


.thumbnailSeeking.chapters.sm.show .thumbnailChapterDisplay.multi-line {
    min-width: 157.59px;
    font-size: 12px;
    bottom: -40px;
    color: var(--primary-color);
}

.thumbnailSeeking.chapters.sm.show {
    bottom: calc(1.5rem + var(--seekbar-bottom, 2.5rem));
}

.thumbnailSeeking.chapters.md.show {
    bottom: calc(3.8rem + var(--seekbar-bottom, 2.5rem));
}

.chapter-mark {
    position: absolute;
    height: 100%;
    width: 2px;
    cursor: pointer;
}

.chapter-tooltip {
    display: none;
    position: absolute;
    background-color: black;
    color: white;
    padding: 2px 5px;
    border-radius: 3px;
    white-space: nowrap;
    transform: translateX(-50%);
}

.chapter-mark:hover .chapter-tooltip {
  display: block;
}

.playlistPrevButton.playlistButtonHidden,
.playlistNextButton.playlistButtonHidden {
  display: none !important;
}

.playlistPrevButton.playlistButtonHidden,
.playlistNextButton.playlistButtonHidden {
  display: none !important;
}
.playlist-panel {
  position: absolute;
  bottom: 60px;
  right: 60px; /* offset from button to avoid hover overlap */
  width: 300px;
  overflow-y: auto;
  background: var(--primary-color);
  border: 1px solid #aaa;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  z-index: 1000;
  padding: 10px;
  display: flex;
  flex-direction: column;
  /* Smooth open/close */
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.2s ease, transform 0.2s ease;
  /* Prevent interaction while hidden */
  pointer-events: none;
}

.playlist-panel.open {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.playlist-panel.closing {
  opacity: 0;
  transform: translateY(8px);
  pointer-events: none;
}

.playlist-item {
  display: flex;
  gap: 10px;
  margin-bottom: 8px;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  color: #555;
  border: 2px solid transparent; /* 🧩 Always reserve space for border */
  transition: background 0.2s ease, border 0.2s ease, color 0.2s ease;
}

.playlist-item:hover {
  background: var(--primary-color);
  border: 2px solid var(--accent-color);
}

.playlist-item.selected,
.playlist-item.selected:hover {
  background: var(--accent-color);
  color: var(--primary-color);
}

.thumb {
  width: 80px;
  height: 50px;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  flex-shrink: 0;
}


.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.playlist-title {
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 4px;
  text-align: left;
}

.desc {
  font-size: 0.85em;
  text-align: left;          
  word-break: break-word;    
  line-height: 1.4;         
}

.playlist-item-duration {
    font-size: 12px;
    text-align: left;          
  word-break: break-word;    
  line-height: 1.4;         
}

.bottomRightContainer.mobile.initialized .playlist-panel {
z-index: 1600;
right: 0px;
bottom: 46px;
}

.controlsContainer.hasPlaylist .showPlayButton.initialized:not(.mobile) {
    left: 50px;
}

.controlsContainer.hasPlaylist .showPlayButton.initialized:not(.mobile).playlistPrevButtonDisabledByCSS {
    left: 20px;
}


.controlsContainer.hasPlaylist .leftControls {
    left: 20px;
}

.controlsContainer.hasPlaylist .leftControls .playlistNextButton {
    margin-left: 30px;
}

.controlsContainer.hasPlaylist #nextButtonMd {
    margin-left: 40px;
}

.controlsContainer.hasPlaylist .showPlayButton.initialized:not(.mobile) .playlistPrevButtonDisabledByCSS {
    left: 20px;
    
}

.forwardRewindControlsWrapper.playlistPrevButtonDisabledByCSS,
.forwardRewindControlsWrapper.playlistNextButtonDisabledByCSS {

}

.forwardRewindControlsWrapper.playlistNextButtonDisabledByCSS .playlistButtonVisible {
    margin-right: 30px;
}

.forwardRewindControlsWrapper.playlistPrevButtonDisabledByCSS .playlistButtonVisible {
    margin-right: 0px !important;
}

.controlsContainer.hasPlaylist .leftControls .playlistNextButton {
    margin-left: 30px;
}

.forwardRewindControlsWrapper.playlistPrevButtonDisabledByCSS.playlistNextButtonDisabledByCSS {
    margin-right: 0px;
    margin-left: 30px;
}

.mobileControls.nextButtonDisabledMobile,
.mobileControls.forwardSkipButtonHidden {
    left: -24px;
}

.mobileControls.prevButtonDisabledMobile,
.mobileControls.rewindBackButtonHidden {
    left: 24px;
}

.mobileControls.forwardSkipButtonHidden.rewindBackButtonHidden.nextButtonDisabledMobile {
    left: -24px;
    bottom: 84px;
}

.mobileControls.nextButtonDisabledMobile.prevButtonDisabledMobile {
    left: 0px;
}

// shoppable content

// .hotspot {
//   position: absolute;
//   width: 32px;
//   height: 32px;
//   background: transparent;
//   border-radius: 50%;
//   z-index: 1000;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
// }

// .hotspot .hotspot-dot {
//   position: relative;
//   width: 12px;
//   height: 12px;
//   background-color: var(--accent-color);
//   border-radius: 50%;
//   z-index: 2;
//   box-shadow: 0 0 0 2px #fff;
// }

// /* Pulsating rings */
// .hotspot .hotspot-dot::before,
// .hotspot .hotspot-dot::after {
//   content: '';
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   width: 16px;  /* starts outside the 12px dot */
//   height: 16px;
//   border: 2px solid var(--accent-color);
//   border-radius: 50%;
//   transform: translate(-50%, -50%) scale(1);
//   animation: pulse-ring 3.4s infinite ease-out;
//   z-index: 1;
// }

// @keyframes pulse-ring {
//   0% {
//     transform: translate(-50%, -50%) scale(1);
//     opacity: 0.7;
//   }
//   100% {
//     transform: translate(-50%, -50%) scale(2);
//     opacity: 0;
//   }
// }

.hotspot {
  position: absolute;
  width: 32px;
  height: 32px;
  background: transparent;
  border-radius: 50%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.hotspot .hotspot-dot {
  position: relative;
  width: 12px;
  height: 12px;
  background-color: var(--accent-color);
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 0 0 2px #fff;
}

/* Pulsating rings */
.hotspot .hotspot-dot::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 16px;
  height: 16px;
  border: 2px solid var(--primary-color);
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(1);
  transform-origin: center;
  animation: pulse-ring 1s infinite ease-out;
  will-change: transform, opacity;
  z-index: 1;
  opacity: 0.6;
}
.hotspot:hover .hotspot-dot::after,
.hotspot:focus .hotspot-dot::after,
.hotspot .hotspot-dot:hover::after,
.hotspot .hotspot-dot:focus::after {
  animation-play-state: paused;
}

@keyframes pulse-ring {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.6;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.4); /* ends around 33.6px */
    opacity: 0;
  }
}

.hotspot-tooltip {
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s;
  z-index: 1300;
  position: absolute;
  background: #222;
  color: #fff;
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 0.97em;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0,0,0,0.18);
}
  
.hotspot:focus .hotspot-tooltip {
  opacity: 1;
}

.cartProduct {
  position: relative;
}

@keyframes cart-dance {
  0% { transform: scale(1) rotate(0deg); }
  20% { transform: scale(1.2) rotate(-10deg); }
  40% { transform: scale(0.9) rotate(10deg); }
  60% { transform: scale(1.1) rotate(-8deg); }
  80% { transform: scale(1.05) rotate(8deg); }
  100% { transform: scale(1) rotate(0deg); }
}
.cart-dance {
  animation: cart-dance 0.5s cubic-bezier(.4,2,.6,1);
}

.post-play-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  backdrop-filter: blur(8px);
  background: rgba(0,0,0,0.35);
}
.post-play-products-row {
  display: flex;
  flex-direction: row;
  gap: 32px;
  align-items: center;
  justify-content: center;
}
.post-play-overlay .cartProduct {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.10);
  min-width: 120px;
  max-width: 180px;
  cursor: pointer;
}
.post-play-overlay button {
  margin-top: 32px;
  padding: 12px 32px;
  font-size: 1.1em;
  border-radius: 8px;
  border: none;
  background: var(--primary-color, #ff4081);
  color: #fff;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  transition: background 0.2s;
}
.post-play-overlay button:hover {
  background: #e73370;
}

.cartSidebarOpen-progress-bar.progressBar.initialized:not(.bottomRightDivMedium) {
  width: calc(100% - var(--shoppable-sidebar-width) - 40px) !important;
}



.bottomRightContainer.initialized.cartSidebarOpen-bottom-right-div {
  right: calc(var(--shoppable-sidebar-width) + 20px) !important;
}

.bottomRightContainer.initialized.cartSidebarOpen-bottom-right-div.mobile,
.bottomRightContainer.initialized.cartSidebarOpen-bottom-right-div.medium {
    right: 10px !important;
}

.progressBar.mobile.initialized.cartSidebarOpen-progress-bar {
    width: 100% !important;
}

.cartSidebarProducts {
flex:1;
overflow-y:auto;
padding:0 16px;
}

.cartSidebarProducts.mobile {
padding: 0 !important;
}

.cartProduct {
display:flex;
padding: 10px;
cursor:pointer;
align-items:center;
justify-content:center;
position: relative;
}

.cartProduct .cartSidebarProducts.mobile {
margin-bottom: 6px;
}

.mobileControlsButtonsBlock .decreaseTimeBtn.forwardSkipButtonHidden {
    margin-right: 70px !important;
}

.mobileControlsButtonsBlock .increaseTimeBtn.rewindBackButtonHidden {
    margin-left: 70px !important;
}

.product-hover-overlay.post-play {
  border-radius: 8px 8px 0px 0px;
  padding: 10px;
  inset:0;
}
  .product-hover-overlay {
  border-radius: 8px;
  padding: 10px;
  inset:10px;
}
`;function Mo(e){let n=e.wrapper.querySelector("video"),r=document.fullscreenElement??document.webkitFullscreenElement??document.mozFullScreenElement??document.msFullscreenElement;r&&r===n?e.progressBar.style.height="1.875rem":e.progressBar.style.backgroundColor=""}function yg(e){function n(){e.video.readyState>=1?Xa(e):e.video.addEventListener("loadedmetadata",()=>Xa(e),{once:!0})}V.addEventListener("fullscreenchange",()=>{document.fullscreenElement&&bi(e),n()}),V.addEventListener("fullscreenchange",()=>Mo(e)),V.addEventListener("webkitfullscreenchange",()=>{Mo(e),n()}),V.addEventListener("mozfullscreenchange",()=>{Mo(e),n()}),V.addEventListener("MSFullscreenChange",()=>{Mo(e),n()})}function vg(e,n,r){e.video.playbackRate=n,e.lastClickedPlaybackRateButton!==null&&(e.lastClickedPlaybackRateButton.style.fontWeight="normal",e.lastClickedPlaybackRateButton.classList.remove("active")),r.classList.add("active"),e.playbackRateButton.textContent=`${n}x`,e.playbackRateButton.title=`${n}x`,e.lastClickedPlaybackRateButton=r,e.playbackRateDiv.style.display="none"}function bg(e){if(e!==null){let n=e.trim().split(" ");if(n.length===1&&!Number.isNaN(Number.parseFloat(n[0])))return n[0]}return null}var mm="000000",ym=function(){let e=(crypto.getRandomValues(new Uint32Array(1))[0]/4294967296).toString(36).replace("0.","").slice(0,6);return mm.slice(e.length)+e};function gg(){let e=new Uint8Array(16);crypto.getRandomValues(e);let n=0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,r=>{let u=n%2===0?e[n>>1]>>4:e[n>>1]&15;return n++,(r==="x"?u:u&3|8).toString(16)})}var ol=function(){return typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():gg()},Cg=function(){let e=crypto.getRandomValues(new Uint32Array(1))[0]%Math.trunc(Math.pow(36,6));return(mm+e.toString(36)).slice(-6)},Ru=e=>{if(!e)return["localhost","localhost"];try{let n=new URL(e).hostname,r=n.split("."),u=r.length>=2?r.slice(-2).join("."):n;return[n,u]}catch{}return["localhost","localhost"]},Pe=e=>Ru(e)[0],Hu=e=>Ru(e)[1],Sg=e=>{if(e&&e.nodeName)return e.uniqueId??(e.uniqueId=ym());try{let n=document.querySelector(e);return n&&!n.uniqueId&&(n.uniqueId=e),n?.uniqueId??e}catch{}return e},xg=e=>{let n=null;e&&e.nodeName!==void 0?(n=e,e=Sg(n)):n=document.querySelector(e);let r=n?.nodeName?.toLowerCase()||"";return[n,e,r]},mh=e=>{let n=null;if(e&&e.nodeName!==void 0)return e.elementId??(e.elementId=Cg()),e.elementId;try{n=document.querySelector(e)}catch{}return n&&!n.elementId&&(n.elementId=e),n?.elementId??e};function wg(...e){return e.reduce((n,r)=>{for(let[u,c]of Object.entries(r))c!==void 0&&(n[u]=c);return n},{})}function Yo(e,n,r=1){e[n]=(e[n]??0)+r}function Tg(e,n){let{beaconDomain:r}=n;return`https://${e??"collector"}.${r??"anlytix.io"}`}function vm(){let e=navigator.doNotTrack??window.doNotTrack??navigator.msDoNotTrack;return e==="1"||e==="yes"}var Bg=class{constructor(){this.events={}}on(e,n){this.events[e]||(this.events[e]=[]),this.events[e].push(n)}off(e,n){this.events[e]&&(this.events[e]=this.events[e].filter(r=>r!==n))}emit(e,n){this.events[e]&&this.events[e].forEach(r=>{r(n)})}},Pa={now:function(){return Date.now()}},zo={isPerformanceAvailable:function(){return window.performance?.timing!==void 0},getDomContentLoadedEnd:function(){let e=window.performance?.timing;return e?e.domContentLoadedEventEnd:null},getNavigationStartTime:function(){let e=window.performance?.timing;return e?e.navigationStart:null}};function Eg(e){if(!e)return{};let n=zo.getNavigationStartTime(),{loading:r,trequest:u,tfirst:c,tload:f,total:h}=e,v=r?r.start:u,B=r?r.first:c,R=r?r.end:f;return{bytesLoaded:h,requestStart:Math.round(n+v),responseStart:Math.round(n+B),responseEnd:Math.round(n+R)}}var _g=()=>{let e=navigator;return(e?.connection??e?.mozConnection??e?.webkitConnection)?.type},kg=()=>{switch(_g()){case"cellular":return"cellular";case"ethernet":return"wired";case"wifi":return"wifi";case void 0:break;default:return"other"}},Ag=["x-cdn","content-type","content-length","last-modified","server","x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"];function Dg(e){let n={},r=new Set(Ag.map(u=>u.toLowerCase()));return!e||typeof e!="string"?{}:(e.trim().split(/[\r\n]+/).forEach(u=>{let[c,...f]=u.split(": "),h=f.join(": ");c&&r.has(c.toLowerCase())&&(n[c]=h)}),n)}var Lo=function(e){if(e&&typeof e.getAllResponseHeaders=="function")return Dg(e.getAllResponseHeaders())},Mg={convertSecToMs:function(e){return Math.floor(1e3*e)},isolateHostAndDomainName:Ru,fetchDomain:Hu,fetchHost:Pe,generateIdToken:ym,buildUUID:ol,now:Pa.now},Lg=class{constructor(e,n){this.params=e,this.emitter=n,e.allowRebufferTracking||this.initEventListeners()}initEventListeners(){this.emitter.on("pulseStart",e=>this.processBufferMetrics(e)),this.emitter.on("buffering",e=>this.handleBufferingStart(e)),this.emitter.on("buffered",e=>this.handleBufferingEnd(e)),this.emitter.on("configureView",()=>this.resetTimer())}handleBufferingStart(e){this.startTimer||(this.params.data.view_rebuffer_count=(this.params.data.view_rebuffer_count??0)+1,this.startTimer=e.viewer_timestamp)}handleBufferingEnd(e){this.processBufferMetrics(e),this.startTimer=void 0}processBufferMetrics(e){if(this.startTimer){let n=e.viewer_timestamp-this.startTimer;this.params.data.view_rebuffer_duration=(this.params.data.view_rebuffer_duration??0)+n,this.startTimer=e.viewer_timestamp,this.params.data.view_rebuffer_duration>3e5&&this.delayBufferDestroyer()}this.params.data.view_watch_time&&this.params.data.view_watch_time>=0&&this.params.data.view_rebuffer_count&&this.params.data.view_rebuffer_count>0&&(this.params.data.view_rebuffer_frequency=this.params.data.view_rebuffer_count/this.params.data.view_watch_time,this.params.data.view_rebuffer_duration&&(this.params.data.view_rebuffer_percentage=this.params.data.view_rebuffer_duration/this.params.data.view_watch_time))}delayBufferDestroyer(){this.params.dispatch("viewCompleted"),this.params.filterData("viewCompleted"),this.params?.userConfigData?.actionableData?.debug}resetTimer(){this.startTimer=void 0}},Rg=class{constructor(e,n){this.waiter=e,this.emitter=n,this.isWaiting=!1,this.lastCheckedTime=null,this.lastPlayheadTime=null,this.lastUpdatedTime=null,!e.allowRebufferTracking&&!e.disablePlayheadRebufferTracking&&this.setupEventListeners()}setupEventListeners(){this.emitter.on("pulseStart",e=>this.checkForBuffering(e)),this.emitter.on("pulseEnd",e=>this.handleBufferingEnd(e)),this.emitter.on("seeking",e=>this.handleBufferingEnd(e)),this.emitter.on("viewCompleted",e=>this.handleBufferingEnd(e))}checkForBuffering(e){if(this.shouldResetBuffering()){this.handleBufferingEnd(e);return}if(this.lastCheckedTime===null){this.startBuffering(e.viewer_timestamp);return}this.isPlayheadStuck()?(e.viewer_timestamp-(this.lastUpdatedTime??0)>=1e3&&!this.isWaiting&&this.triggerBuffering(e),this.lastCheckedTime=e.viewer_timestamp):this.handleBufferingEnd(e,!0)}shouldResetBuffering(){return!!this.waiter.gripper?.videoDragged||!this.waiter.playheadProgressing}isPlayheadStuck(){return this.lastPlayheadTime===this.waiter.data.player_playhead_time}startBuffering(e){this.lastCheckedTime=e,this.lastPlayheadTime=this.waiter.data.player_playhead_time,this.lastUpdatedTime=e}triggerBuffering(e){this.isWaiting=!0,this.waiter.dispatch("buffering",{viewer_timestamp:this.lastUpdatedTime})}handleBufferingEnd(e,n=!1){if(this.isWaiting)this.endBuffering(e);else{if(this.lastCheckedTime===null)return;this.hasSignificantProgress(e)&&this.recalibrateBuffering(e)}n?this.startBuffering(e?.viewer_timestamp??0):this.clearBufferingState()}endBuffering(e){this.isWaiting=!1,this.waiter.dispatch("buffered",{viewer_timestamp:e?.viewer_timestamp})}hasSignificantProgress(e){let n=this.waiter.data.player_playhead_time-(this.lastPlayheadTime??0),r=(e?.viewer_timestamp??0)-(this.lastUpdatedTime??0);return n>0&&r-n>250}recalibrateBuffering(e){let n=this.waiter.data.player_playhead_time-(this.lastPlayheadTime??0),r=(e?.viewer_timestamp??0)-(this.lastUpdatedTime??0);this.waiter.dispatch("buffering",{viewer_timestamp:this.lastUpdatedTime}),this.waiter.dispatch("buffered",{viewer_timestamp:(this.lastUpdatedTime??0)+r-n}),this.lastCheckedTime=null}clearBufferingState(){this.lastCheckedTime=null,this.lastPlayheadTime=null,this.lastUpdatedTime=null}},Hg=class{constructor(e,n){this.accuracy=e,this.eventEmitter=n,this.hasErrorOccurred=!1,this.setupEventListeners()}setupEventListeners(){this.eventEmitter.on("configureView",()=>{this.hasErrorOccurred=!1}),this.eventEmitter.on("error",e=>{try{e?.player_error_code||e.player_error_message||e.player_error_context?(this.accuracy.data.player_error_code=e.player_error_code??"",this.accuracy.data.player_error_message=e.player_error_message??"",this.accuracy.data.player_error_context=e.player_error_context??"",this.hasErrorOccurred=!0):(delete this.accuracy.data.player_error_code,delete this.accuracy.data.player_error_message,delete this.accuracy.data.player_error_context)}catch{this.accuracy.userConfigData?.actionableData?.debug,this.hasErrorOccurred=!0}})}},bm="FastPixData",zg=function(e){let n=document.cookie.split(";");for(let r of n){let u=r.trim();if(u.startsWith(e+"=")){let c=decodeURIComponent(u.substring(e.length+1)),f={};return c.split("&").forEach(h=>{let[v,B]=h.split("=");f[v]=B}),f}}return{}},Og=(e,n,r)=>{let u=new Date(Date.now()+r*864e5).toUTCString();document.cookie=`${e}=${n}; expires=${u}; path=/`},gm=()=>zg(bm)??{},Cm=e=>{let n=`fpviid=${e?.fpviid}&fpsanu=${e?.fpsanu}&snid=${e?.snid}&snepti=${e?.snepti}&snst=${e.snst}`;Og(bm,n,365)},Ng=()=>{let e=gm(),n=e.fpviid!=="undefined"&&e.fpviid?e.fpviid:ol(),r=e.fpsanu!=="undefined"&&e.fpsanu?e.fpsanu:crypto.getRandomValues(new Uint32Array(1))[0]/4294967296;return e.fpviid=n,e.fpsanu=r,Cm(e),{fastpix_viewer_id:e.fpviid,fastpix_sample_number:e.fpsanu}},yh=async(e,n,r,u)=>{try{r&&navigator.sendBeacon?.(e,n)&&u();try{let c=await fetch(e,{method:"POST",body:n,headers:{"Content-Type":"text/plain"}});return u(null,c.ok?null:"Error")}catch(c){let f=c instanceof Error?c.message:"Fetch error";return u(null,f)}}catch(c){let f=c instanceof Error?c.message:"Fetch error";return u(null,f)}},Vg=class{constructor(e,n){this.postApiUrl=e,this.actionableData=n,this.eventStack=[],this.checkPostData=!1,this.callPostTimer=null,this.destroyed=!1}scheduleEvent(e){let n={...e};this.eventStack.push(n),this.destroyed=!1,this.callPostTimer||this.triggerBeaconDispatch()}processEventQueue(){this.emitBeaconQueue(),this.triggerBeaconDispatch()}destroy(e){this.destroyed=!0,e?this.purgeBeaconQueue():this.processEventQueue(),this.callPostTimer&&clearTimeout(this.callPostTimer)}purgeBeaconQueue(){let e=this.eventStack.length-200,n=this.eventStack.slice(Math.max(0,e)),r=this.generatePayload(n);this.actionableData?.actionableData?.respectDoNotTrack||yh(this.postApiUrl,r,!0,()=>{})}emitBeaconQueue(){if(!this.checkPostData){let e=this.eventStack.slice(0,200),n=this.generatePayload(e),r=Pa.now();this.eventStack=this.eventStack.slice(200),this.checkPostData=!0,this.actionableData?.actionableData?.respectDoNotTrack||yh(this.postApiUrl,n,!1,(u,c)=>{c&&(this.eventStack=e.concat(this.eventStack)),this.chunkTimer=Pa.now()-r,this.checkPostData=!1})}}triggerBeaconDispatch(){this.callPostTimer&&clearTimeout(this.callPostTimer),this.destroyed||(this.callPostTimer=setTimeout(()=>{this.eventStack.length&&this.emitBeaconQueue(),this.triggerBeaconDispatch()},1e4))}generatePayload(e){let n={transmission_timestamp:Math.round(Pa.now())};this.chunkTimer&&(n.rtt_ms=Math.round(this.chunkTimer));let r=c=>({payload:JSON.stringify({metadata:n,events:c})}),{payload:u}=r(e);return u}},vh={ad:"ad",aggregate:"ag",api:"ai",application:"ap",architecture:"ar",asset:"as",autoplay:"au",avg:"av",beacon:"be",bitrate:"bi",break:"bk",browser:"br",bytes:"by",cancel:"ca",codec:"cc",code:"cd",counter:"ce",config:"cf",category:"cg",changed:"ch",connection:"ci",clicked:"ck",canceled:"cl",custom:"cm",cdn:"cn",count:"co",complete:"cp",creative:"cr",continuous:"cs",content:"ct",current:"cu",context:"cx",device:"de",downscaling:"dg",drm:"dm",domain:"dn",downscale:"do",dropped:"dr",duration:"du",errorcode:"ec",end:"ed",edge:"eg",engine:"ei",embed:"em",encoding:"eo",expiry:"ep",error:"er",experiments:"es",errortext:"et",event:"ev",experiment:"ex",failed:"fa",first:"fi",fullscreen:"fl",format:"fm",fastpix:"fp",frequency:"fq",frame:"fr",fps:"fs",family:"fy",has:"ha",holdback:"hb",hostname:"hn",host:"ho",headers:"hs",height:"ht",id:"id",internal:"il",instance:"in",ip:"ip",is:"is",init:"it",key:"ke",labeled:"lb",loaded:"ld",level:"le",live:"li",language:"ln",load:"lo",lists:"ls",latency:"lt",max:"ma",media:"me",manifest:"mf",mime:"mi",midroll:"ml",min:"mn",model:"mo",manufacturer:"mr",message:"ms",name:"na",newest:"ne",number:"nu",on:"on",os:"os",page:"pa",playback:"pb",producer:"pd",preroll:"pe",percentage:"pg",playhead:"ph",plugin:"pi",player:"pl",program:"pm",playing:"pn",poster:"po",property:"pp",preload:"pr",position:"ps",part:"pt",paused:"pu",played:"py",ratio:"ra",rebuffer:"rb",requested:"rd",rate:"re",resolution:"rl",remote:"rm",rendition:"rn",response:"rp",request:"rq",requests:"rs",sample:"sa",sdk:"sd",seek:"se",skipped:"sk",stream:"sm",session:"sn",source:"so",startup:"sp",sequence:"sq",series:"sr",start:"st",sub:"su",server:"sv",software:"sw",tag:"ta",tech:"tc",text:"te",target:"tg",throughput:"th",time:"ti",total:"tl",to:"to",timestamp:"tp",title:"tt",type:"ty",upscaling:"ug",universal:"un",upscale:"up",url:"ur",user:"us",used:"ud",variant:"va",video:"vd",view:"ve",viewer:"vi",version:"vn",viewed:"vw",watch:"wa",waiting:"wg",width:"wt",workspace:"ws"},qg=function(e){let n={};for(let r in e){let u=r.split("_"),c="";u.forEach(f=>{vh[f]?c+=vh[f]:Number(f)&&Math.floor(Number(f))===Number(f)?c+=f:c+=`_${f}_`}),n[c]=e[r]}return n},Ug=["workspace_id","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_timestamp","event_name","video_id","player_instance_id"],jg=new Set(["player_is_paused","player_width","player_height","player_autoplay_on","player_preload_on","player_is_fullscreen","video_source_height","video_source_width","video_source_url","video_source_domain","video_source_hostname","video_source_duration","video_poster_url","player_language_code","view_dropped_frame_count"]),Zg=new Set(["viewBegin","error","ended","viewCompleted"]),bh={},Yg=class{constructor(e={},n="",r={}){this.fp=e,this.tokenId=n,this.actionableData=r??{},this.debug=this.actionableData?.debug??!1,this.sampleRate=this.actionableData?.sampleRate??1,this.disableCookies=this.actionableData?.disableCookies??!1,this.respectDoNotTrack=this.actionableData?.respectDoNotTrack??!1,this.eventQueue=new Vg(Tg(this.tokenId,this.actionableData),this.actionableData),this.previousBeaconData=null,this.sdkPageDetails={viewer_connection_type:kg(),page_url:window===void 0?"":window?.location?.href};let u=document!==void 0;this.userData=!this.disableCookies&&u?Ng():{}}sendData(e,n){if(!e||!n?.view_id||this.shouldRespectDoNotTrack(e)||!this.validateEventData(n)||!this.tokenId&&this.debug&&!this.actionableData?.actionableData?.beaconCollectionDomain)return;let r=this.prepareEventData(e,n);r=Object.fromEntries(Object.entries(r).filter(([u,c])=>c!==void 0&&!Number.isNaN(c))),this.eventQueue.scheduleEvent(r),e==="viewCompleted"?this.eventQueue.destroy(!0):Zg.has(e)&&this.eventQueue.processEventQueue()}shouldRespectDoNotTrack(e){return this.respectDoNotTrack&&vm()?(this.debug,!0):!1}validateEventData(e){return!e||typeof e!="object"?(this.debug,!1):!0}prepareEventData(e,n){let r=this.disableCookies||document===void 0?{}:this.updateCookies(),u=wg(this.sdkPageDetails,n,r,this.userData,{event_name:e,workspace_id:this.tokenId});return qg(this.cloneBeaconData(e,u))}destroy(){this.eventQueue.destroy(!1)}cloneBeaconData(e,n){let r={};if(e==="viewBegin"||e==="viewCompleted"?(r=Object.assign(r,n),e==="viewCompleted"&&(this.previousBeaconData=null),this.previousBeaconData=r):(Ug.forEach(u=>r[u]=n[u]),Object.assign(r,this.getTrimmedState(n)),["requestCompleted","requestFailed","requestCanceled"].includes(e)&&Object.entries(n).forEach(([u,c])=>{u.startsWith("request")&&(r[u]=c)}),e==="variantChanged"&&Object.entries(n).forEach(([u,c])=>{u.startsWith("video_source")&&(r[u]=c)}),this.previousBeaconData=r),e==="viewCompleted"){let u={};return Object.keys(r).forEach(c=>{jg.has(c)||(u[c]=r[c])}),this.previousBeaconData=u,u}return r}getTrimmedState(e){if(JSON.stringify(this.previousBeaconData)!==JSON.stringify(e)){let n={};for(let r in e)e[r]!==bh[r]&&(n[r]=e[r]);return bh=e,n}}updateCookies(){if(document===void 0)return{};let e=gm(),n=Date.now();return(!e.fpviid||!e.fpsanu||e.fpviid==="undefined"||e.fpsanu==="undefined")&&(e.fpviid=ol(),e.fpsanu=crypto.getRandomValues(new Uint32Array(1))[0]/4294967296),(!e.snst||!e.snid||e.snid==="undefined"||e.snst==="undefined"||n-Number.parseInt(e.snst,10)>864e5)&&(e.snst=n,e.snid=ol()),e.snepti=n+15e5,Cm(e),{session_id:e.snid,session_start:e.snst,session_expiry_time:e.snepti}}},Gg=class{constructor(e,n){this.playbackTimeTrackerLastPosition=-1,this.prevPlaybackTime=Pa.now(),this.playbackProgressCallback=null,this.prevProgressPlaybackTime=0,this.emitter=n,this.playback=e,this.initialize()}initialize(){this.emitter.on("playing",()=>{this.initiatePlaybackMonitoring()}),this.emitter.on("seeked",()=>{this.initiatePlaybackMonitoring()}),this.emitter.on("seeking",()=>{this.stopPlaybackMonitoring()}),this.emitter.on("pulseEnd",()=>{this.stopPlaybackMonitoring()}),this.emitter.on("configureView",()=>{this.resetState()})}resetState(){this.playbackTimeTrackerLastPosition=-1,this.prevPlaybackTime=Pa.now(),this.playbackProgressCallback=null,this.prevProgressPlaybackTime=0}initiatePlaybackMonitoring(){this.playbackProgressCallback===null&&(this.playbackProgressCallback=this.refreshPlaybackMonitoring(),this.playbackTimeTrackerLastPosition=this.playback.data.player_playhead_time,this.emitter.on("pulseStart",()=>{this.refreshPlaybackMonitoring()}))}stopPlaybackMonitoring(){this.playbackProgressCallback!==null&&(this.refreshPlaybackMonitoring(),this.playbackProgressCallback=null,this.playbackTimeTrackerLastPosition=-1,this.prevProgressPlaybackTime=0)}refreshPlaybackMonitoring(){let e=this.playback.data.player_playhead_time,n=Pa.now(),r=-1;return this.playbackTimeTrackerLastPosition>=0&&e>this.playbackTimeTrackerLastPosition&&(r=e-this.playbackTimeTrackerLastPosition),r>0&&r<=1e3&&Yo(this.playback.data,"view_content_playback_time",r),this.playbackTimeTrackerLastPosition=e,this.prevPlaybackTime=n,()=>{}}},Qg=class{constructor(e,n){this.timer=e,this.emitter=n,this.initializeEventListeners()}initializeEventListeners(){this.emitter.on("timeupdate",e=>this.handleCurrentPosition(e)),this.emitter.on("pulseStart",e=>this.handleCurrentPosition(e)),this.emitter.on("pulseEnd",e=>this.handleCurrentPosition(e))}handleMaxPosition(){this.timer.data.view_max_playhead_position=this.timer.data.view_max_playhead_position===void 0?this.timer.data.player_playhead_time:Math.max(this.timer.data.view_max_playhead_position,this.timer.data.player_playhead_time)}handleCurrentPosition(e){if(e?.player_playhead_time!==void 0)this.timer.data.player_playhead_time=e.player_playhead_time,this.handleMaxPosition();else if(this.timer.fetchPlayheadTime){let n=this.timer.fetchPlayheadTime();n!==void 0&&(this.timer.data.player_playhead_time=n,this.handleMaxPosition())}}},Xg=class{constructor(e,n){this.playheadProgressing=!1,this.pulseIntervalId=null,this.handlePlay=()=>{this.callPulseInterval()},this.handlePlaying=()=>{this.pulse.playheadProgressing=!0,this.callPulseInterval()},this.handleSeeked=()=>{this.pulse.data?.player_is_paused?this.endPulseInterval():this.callPulseInterval()},this.handleTimeUpdate=()=>{this.pulseIntervalId&&this.pulse.dispatch("pulseStart")},this.pulse=e,this.emitter=n,this.initialize()}callPulseInterval(){this.pulseIntervalId||(this.pulse.dispatch("pulseStart"),this.pulseIntervalId=setInterval(()=>{this.pulse.dispatch("pulseStart")},25))}endPulseInterval(){this.pulse.playheadProgressing=!1,this.pulseIntervalId&&(clearInterval(this.pulseIntervalId),this.pulse.dispatch("pulseEnd"),this.pulseIntervalId=null)}initialize(){this.emitter.on("play",this.handlePlay),this.emitter.on("playing",this.handlePlaying),this.emitter.on("viewBegin",this.callPulseInterval.bind(this)),this.emitter.on("buffering",this.callPulseInterval.bind(this)),this.emitter.on("ended",this.endPulseInterval.bind(this)),this.emitter.on("pause",this.endPulseInterval.bind(this)),this.emitter.on("viewCompleted",this.endPulseInterval.bind(this)),this.emitter.on("error",this.endPulseInterval.bind(this)),this.emitter.on("seeked",this.handleSeeked.bind(this)),this.emitter.on("timeupdate",this.handleTimeUpdate.bind(this))}},Ig=class{constructor(e,n){this.totalLatency=0,this.totalBytes=0,this.totalTime=0,this.requestCount=0,this.processedChunks=0,this.failedRequests=0,this.canceledRequests=0,this.req=e,this.emitter=n,this.initializeEventListeners()}initializeEventListeners(){this.emitter.on("requestCompleted",e=>this.handleRequestCompleted(e)),this.emitter.on("requestFailed",()=>this.handleRequestFailed()),this.emitter.on("requestCanceled",()=>this.handleRequestCanceled())}handleRequestCompleted(e){let n=e?.request_start??0,r=e?.request_response_start??0,u=e?.request_response_end??0,c=e?.request_bytes_loaded??0,f=r-n,h=u-(r??n);if(this.requestCount++,h>0&&c>0){this.processedChunks++,this.totalBytes+=c,this.totalTime+=h;let v=c/h*8e3;this.req.data.view_min_request_throughput=Math.min(this.req.data.view_min_request_throughput??1/0,v),this.req.data.view_avg_request_throughput=this.totalBytes/this.totalTime*8e3,this.req.data.view_request_count=this.requestCount,f>0&&(this.totalLatency+=f,this.req.data.view_max_request_latency=Math.max(this.req.data.view_max_request_latency??0,f),this.req.data.view_avg_request_latency=this.totalLatency/this.processedChunks)}}handleRequestFailed(){this.requestCount++,this.failedRequests++,this.req.data.view_request_count=this.requestCount,this.req.data.view_request_failed_count=this.failedRequests}handleRequestCanceled(){this.requestCount++,this.canceledRequests++,this.req.data.view_request_count=this.requestCount,this.req.data.view_request_canceled_count=this.canceledRequests}},Pg=class{constructor(e,n){this.state={previousPlayheadPosition:-1,prevPlayerWidth:-1,prevVideoWidth:-1,prevPlayerHeight:-1,prevVideoHeight:-1},this.scaler=e,this.emitter=n,this.initialize()}resetPlayheadPosition(){this.state.previousPlayheadPosition=-1}handleEvent(e){this.emitter.on(e,()=>{let{state:n,scaler:r}=this;if(n.previousPlayheadPosition>=0&&r.data.player_playhead_time>=0&&n.prevPlayerWidth>=0&&n.prevVideoWidth>0&&n.prevPlayerHeight>=0&&n.prevVideoHeight>0){let u=r.data.player_playhead_time-n.previousPlayheadPosition;if(u<0)return this.resetPlayheadPosition();let c=Math.min(n.prevPlayerWidth/n.prevVideoWidth,n.prevPlayerHeight/n.prevVideoHeight),f=Math.max(0,c-1),h=Math.max(0,1-c);r.data.view_max_upscale_percentage=Math.max(r.data.view_max_upscale_percentage??0,f),r.data.view_max_downscale_percentage=Math.max(r.data.view_max_downscale_percentage??0,h),r.data.view_total_content_playback_time=(r.data.view_total_content_playback_time??0)+u,r.data.view_total_upscaling=(r.data.view_total_upscaling??0)+f*u,r.data.view_total_downscaling=(r.data.view_total_downscaling??0)+h*u}this.resetPlayheadPosition()})}setPlayheadPosition(e){this.emitter.on(e,()=>{let{state:n,scaler:r}=this;n.previousPlayheadPosition=r.data.player_playhead_time,n.prevPlayerWidth=r.data.player_width,n.prevPlayerHeight=r.data.player_height,n.prevVideoWidth=r.data.video_source_width,n.prevVideoHeight=r.data.video_source_height})}initialize(){this.emitter.on("configureView",()=>this.resetPlayheadPosition()),["pause","buffering","seeking","error","pulse"].forEach(e=>this.handleEvent(e)),["playing","pulse"].forEach(e=>this.setPlayheadPosition(e))}},Kg=class{constructor(e,n){this.videoDragged=!1,this.seekerElapsedTime=-1,this.dragger=e,this.emitter=n,this.initialize()}initialize(){this.emitter.on("seeking",e=>{this.handleSeeking(e)}),this.emitter.on("seeked",()=>{this.handleSeeked()}),this.emitter.on("viewCompleted",()=>{this.handleViewCompleted()})}handleSeeking(e){Object.assign(this.dragger.data,e),this.videoDragged&&e.viewer_timestamp-this.seekerElapsedTime<=2e3?this.seekerElapsedTime=e.viewer_timestamp:(this.videoDragged&&this.seeker(),this.videoDragged=!0,this.seekerElapsedTime=e.viewer_timestamp,Yo(this.dragger.data,"view_seek_count",1),this.dragger.filterData("seeking"))}handleSeeked(){this.seeker()}handleViewCompleted(){this.videoDragged&&(this.seeker(),this.dragger.filterData("seeked")),this.videoDragged=!1,this.seekerElapsedTime=-1}seeker(){let e=Pa.now(),n=(this.dragger.data.viewer_timestamp??e)-(this.seekerElapsedTime??e);Yo(this.dragger.data,"view_seek_duration",n),this.dragger.data.view_max_seek_time=Math.max(this.dragger.data.view_max_seek_time??0,n),this.videoDragged=!1,this.seekerElapsedTime=-1}},Fg=class{constructor(e,n){this.launcher=e,this.emitter=n,this.initEventListeners()}initEventListeners(){this.emitter.on("playing",e=>{this.launcher.data.view_time_to_first_frame===void 0&&this.handleTimeFrame(e)}),this.emitter.on("configureView",()=>{this.launcher.data.view_time_to_first_frame=void 0})}handleTimeFrame(e){if(this.launcher.trackTimer.captureViewingProgress(this.launcher,e),this.launcher.data.view_watch_time>0)this.launcher.data.view_time_to_first_frame=this.launcher.data.view_watch_time;else if(this.launcher.data.view_start){let n=e.viewer_timestamp-this.launcher.data.view_start;this.launcher.data.view_time_to_first_frame=n,this.launcher.data.view_watch_time=n}}},Jg=class{constructor(e,n){this.lastTrackedWallClockTime=null,this.clock=e,this.emitter=n,this.initialize()}initialize(){this.emitter.on("pulseStart",e=>this.captureViewingProgress(this.clock,e)),this.emitter.on("pulseEnd",e=>this.demolishViewingProgress(this.clock,e))}captureViewingProgress(e,n){let r=n?.viewer_timestamp;if(this.lastTrackedWallClockTime===null)this.lastTrackedWallClockTime=r;else if(r){let u=r-this.lastTrackedWallClockTime;e.data.view_watch_time=(e.data.view_watch_time??0)+u,this.lastTrackedWallClockTime=r}}demolishViewingProgress(e,n){this.captureViewingProgress(e,n),this.lastTrackedWallClockTime=null}},gh=["viewBegin","ended","loadstart","pause","play","playing","waiting","buffering","buffered","seeked","error","pulse","requestCompleted","requestFailed","requestCanceled"];function Wg(e){e.resolutionState||(e.resolutionState={prev_source_width:e.data.video_source_width??0,video_source_resolution_dropped_count:0},e.data.video_source_resolution_dropped_count=0)}function $g(e){e.resolutionState.prev_source_width>e.data.video_source_width?(e.resolutionState.prev_source_width=e.data.video_source_width,e.data.video_source_resolution_dropped_count++):e.resolutionState.prev_source_width=e.data.video_source_width}function va(e,n,r){let u=new Bg;this.NavigationStart=zo.getNavigationStartTime(),this.fp=e,this.id=n,r={debug:r?.debug??!1,beaconDomain:r.configDomain??"anlytix.io",disableCookies:r.disableCookies??!1,respectDoNotTrack:r.respectDoNotTrack??!1,allowRebufferTracking:!1,disablePlayheadRebufferTracking:r.disablePlayheadRebufferTracking??!1,errorConverter:function(h){return h},actionableData:r},this.userConfigData=r,this.fetchPlayheadTime=r.actionableData.fetchPlayheadTime,this.fetchStateData=r.actionableData.fetchStateData??function(){return{}},this.allowRebufferTracking=r.allowRebufferTracking,this.disablePlayheadRebufferTracking=r.disablePlayheadRebufferTracking,this.errorConverter=r.errorConverter,this.eventsDispatcher=new Yg(e,r.actionableData.data.workspace_id,r),this.data={player_instance_id:ol(),beacon_domain:r.beaconCollectionDomain??r.beaconDomain},this.data.view_sequence_number=1,this.data.player_sequence_number=1,this.lastCheckedEventTime=void 0,this.throbTimeoutId=void 0,this.dispatch=(h,v)=>{let B=Date.now();if(this.lastCheckedEventTime&&B-this.lastCheckedEventTime>36e5){r?.debug;let O={viewer_timestamp:this.fp.utilityMethods.now()};Object.assign(this.data,O),u.emit("configureView",O),this.lastCheckedEventTime=B}if(h==="play"&&this.data.view_start===void 0){let O={view_start:this.fp.utilityMethods.now()};Object.assign(this.data,O),u.emit("viewBegin",O),this.lastCheckedEventTime=B}gh.includes(h)&&this.appendVideoState();let R={viewer_timestamp:this.fp.utilityMethods.now(),...v};h!=="videoChange"&&h!=="programChange"&&Object.assign(this.data,R),u.emit(h,R),this.lastCheckedEventTime=B},this.playerDestroyed=void 0,this.initiatePulse=void 0;let c=()=>{this.demolishView()};window?.addEventListener!==void 0&&(window.addEventListener("pagehide",h=>{h.persisted||c()},!1),window.addEventListener("beforeunload",()=>{c()})),u.on("destroy",()=>{c()});let f=h=>{this.dispatch("viewCompleted"),this.filterData("viewCompleted"),this.dispatch("configureView",h),Object.assign(this.data,h)};u.on("videoChange",h=>{f(h)}),u.on("programChange",h=>{let v={...h};f(v),this.dispatch("play"),this.dispatch("playing")}),u.on("configureView",()=>{this.refreshViewData(),this.refreshVideoData(),this.appendVideoState(),Object.assign(this.data,r.actionableData.data),this.initializeView()}),this.warning=new Hg(this,u),this.gripper=new Kg(this,u),this.throughput=new Ig(this,u),this.playheadHandler=new Qg(this,u),this.handlePulse=new Xg(this,u),this.handleScaling=new Pg(this,u),this.trackTimer=new Jg(this,u),this.playbackManager=new Gg(this,u),this.eventWaiting=new Rg(this,u),this.loaderProps=new Lg(this,u),this.metricCommencement=new Fg(this,u),u.on("variantChanged",()=>{this.data.video_source_width&&(Wg(this),$g(this)),this.appendVideoState(),this.validateData(),this.filterData("variantChanged")}),u.on("playerReady",()=>{let h=this.fp.utilityMethods.now();if(this.data.player_init_time){let v=h-this.data.player_init_time;this.data.player_startup_time=Math.max(0,v)}if(this.NavigationStart&&(this.data.player_init_time??zo.getDomContentLoadedEnd())){let v=Math.min(this.data.player_init_time??1/0,zo.getDomContentLoadedEnd()??1/0)-this.NavigationStart;this.data.page_load_time=Math.max(0,v)}this.appendVideoState(),this.validateData(),this.filterData("playerReady")}),gh.forEach(h=>{u.on(h,()=>{this.appendVideoState(),this.validateData(),this.filterData(h)})}),this.dispatch("configureView")}va.prototype.demolishView=function(){this.playerDestroyed||(this.playerDestroyed=!0,this.data.view_start!==void 0&&(this.dispatch("viewCompleted"),this.filterData("viewCompleted"),this.eventsDispatcher.destroy()))};va.prototype.initializeView=function(){this.data.view_id=ol(),Yo(this.data,"player_view_count",1)};va.prototype.appendVideoState=function(){Object.assign(this.data,this.fetchStateData()),this.playheadHandler.handleCurrentPosition(this),this.validateData()};va.prototype.validateData=function(){let e=["player_width","player_height","video_source_width","video_source_height","video_source_bitrate"],n=["player_source_url","video_source_url"];e.forEach(r=>this.data[r]=Number.parseInt(this.data[r],10)??void 0),n.forEach(r=>{let u=(this.data[r]??"").toLowerCase();(u.startsWith("data:")||u.startsWith("blob:"))&&(this.data[r]="MSE style URL")})};va.prototype.filterData=function(e){if(this.data.view_id){this.data.player_source_duration>0||this.data.video_source_duration>0?this.data.video_source_is_live=!1:this.data.video_source_duration===void 0&&(this.data.video_source_is_live=!0);let n=this.data.video_source_url??this.data.player_source_url;n&&(this.data.video_source_domain=Hu(n),this.data.video_source_hostname=Pe(n));let r={...this.data};this.eventsDispatcher.sendData(e,r),this.data.view_sequence_number++,this.data.player_sequence_number++,this.handlePulseEvent(this),e==="viewCompleted"&&delete this.data.view_id}};va.prototype.handlePulseEvent=e=>{e.throbTimeoutId&&clearTimeout(e.throbTimeoutId),e.warning.hasErrorOccurred||(e.throbTimeoutId=setTimeout(()=>{e.data.player_is_paused||e.dispatch("pulse")},1e4))};va.prototype.refreshViewData=function(){Object.keys(this.data).forEach(e=>{e.indexOf("view_")===0&&delete this.data[e]}),this.data.view_sequence_number=1};va.prototype.refreshVideoData=function(){Object.keys(this.data).forEach(e=>{e.indexOf("video_")===0&&delete this.data[e]})};var t2=(e,n,r,u,c)=>{let f=Y=>Eg(Y),h=(Y,U,Q,x,E={})=>{let _=f(U);return{request_event_type:Y,request_bytes_loaded:_.bytesLoaded,request_start:_.requestStart,request_response_start:_.responseStart,request_response_end:_.responseEnd,request_type:"manifest",request_hostname:Pe(Q),request_url:Q??"",request_response_headers:x,...E}},v=(Y,U)=>{let Q=U.levels.map(_=>({width:_.width,height:_.height,bitrate:_.bitrate,attrs:_.attrs})),x=U.audioTracks.map(_=>({name:_.name,language:_.lang,bitrate:_.bitrate})),E=h(Y,U.stats,U.url,Lo(U.networkDetails),{request_rendition_lists:{media:Q,audio:x,video:{}}});c("requestCompleted",E)},B=(Y,U)=>{let Q=U.details,x=h(Y,U.stats,Q.url,Lo(U.networkDetails),{video_source_is_live:Q.live});c("requestCompleted",x)},R=(Y,U)=>{let Q=h(Y,U.stats,U.details.url,Lo(U.networkDetails));c("requestCompleted",Q)},O=(Y,U)=>{let Q=U.frag,x=h(Y,U.stats??Q.stats,U.networkDetails?.responseURL,Lo(U.networkDetails),{request_type:Q.type==="main"?"media":Q.type,request_video_width:e.levels[Q.level]?.width,request_video_height:e.levels[Q.level]?.height});c("requestCompleted",x)},A=(Y,U)=>{let Q=e.levels[U.level];if(!Q?.attrs?.BANDWIDTH)return;let x={video_source_fps:Number.parseFloat(Q.attrs["FRAME-RATE"])||void 0,video_source_bitrate:Q.attrs.BANDWIDTH,video_source_width:Q.width,video_source_height:Q.height,video_source_rendition_name:Q.name,video_source_codec:Q.videoCodec};c("variantChanged",x)},M=(Y,U)=>{let Q=U.frag?._url||"";c("requestCanceled",{request_event_type:Y,request_url:Q,request_type:"media",request_hostname:Pe(Q)})},G=(Y,U)=>{let{type:Q,details:x,frag:E,url:_,response:q,fatal:I,reason:J,level:tt,error:vt,event:Bt,err:ie}=U,zt=E?.url??_??"",Dt=[zt?`url: ${zt}`:"",q?.code||q?.text?`response: ${q.code}, ${q.text}`:"",J?`failure reason: ${J}`:"",tt?`level: ${tt}`:"",vt?`error: ${vt}`:"",Bt?`event: ${Bt}`:"",ie?.message?`error message: ${ie.message}`:""].filter(Boolean).join(`
`);if(I&&u?.automaticErrorTracking){c("error",{player_error_code:Q,player_error_message:x,player_error_context:Dt});return}if(new Set([n.ErrorDetails.MANIFEST_LOAD_ERROR,n.ErrorDetails.MANIFEST_LOAD_TIMEOUT,n.ErrorDetails.FRAG_LOAD_ERROR,n.ErrorDetails.FRAG_LOAD_TIMEOUT,n.ErrorDetails.LEVEL_LOAD_ERROR,n.ErrorDetails.LEVEL_LOAD_TIMEOUT,n.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,n.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT,n.ErrorDetails.SUBTITLE_LOAD_ERROR,n.ErrorDetails.SUBTITLE_LOAD_TIMEOUT,n.ErrorDetails.KEY_LOAD_ERROR,n.ErrorDetails.KEY_LOAD_TIMEOUT]).has(x)){let Z={[n.ErrorDetails.FRAG_LOAD_ERROR]:"media",[n.ErrorDetails.FRAG_LOAD_TIMEOUT]:"media",[n.ErrorDetails.AUDIO_TRACK_LOAD_ERROR]:"audio",[n.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT]:"audio",[n.ErrorDetails.SUBTITLE_LOAD_ERROR]:"subtitle",[n.ErrorDetails.SUBTITLE_LOAD_TIMEOUT]:"subtitle",[n.ErrorDetails.KEY_LOAD_ERROR]:"encryption",[n.ErrorDetails.KEY_LOAD_TIMEOUT]:"encryption"}[Q]??"manifest";c("requestFailed",{request_error:x,request_url:zt,request_hostname:Pe(zt),request_type:Z,request_error_code:q?.code,request_error_text:q?.text})}};r?.fp&&(r.fp.destroyHlsMonitoring=()=>{e.off(n.Events.MANIFEST_LOADED,v),e.off(n.Events.LEVEL_LOADED,B),e.off(n.Events.AUDIO_TRACK_LOADED,R),e.off(n.Events.FRAG_LOADED,O),e.off(n.Events.LEVEL_SWITCHED,A),e.off(n.Events.FRAG_LOAD_EMERGENCY_ABORTED,M),e.off(n.Events.ERROR,G),e.off(n.Events.DESTROYING,r.fp?.destroyHlsMonitoring),delete r.fp?.destroyHlsMonitoring}),e.on(n.Events.MANIFEST_LOADED,v),e.on(n.Events.LEVEL_LOADED,B),e.on(n.Events.AUDIO_TRACK_LOADED,R),e.on(n.Events.FRAG_LOADED,O),e.on(n.Events.LEVEL_SWITCHED,A),e.on(n.Events.FRAG_LOAD_EMERGENCY_ABORTED,M),e.on(n.Events.ERROR,G),e.on(n.Events.DESTROYING,r.fp?.destroyHlsMonitoring)},e2=(e,n,r,u)=>{let c=new Set(["x-cdn","content-type","content-length","last-modified","server","x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"]);function f(E=""){let _={};return E.trim().split(/[\r\n]+/).forEach(q=>{if(!q)return;let[I,...J]=q.split(": ");if(!I)return;let tt=I.toLowerCase(),vt=J.join(": ");(c.has(tt)||tt.startsWith("x-litix-"))&&(_[I]=vt)}),_}let h=(E,_)=>{if(!(E?.endDate??E?.requestEndDate))return{};let{url:q,bytesLoaded:I,requestStartDate:J,requestEndDate:tt,startDate:vt,firstByteDate:Bt,endDate:ie,mediaType:zt}=E,Dt=Pe(q),Z=new Date(vt??J).getTime(),et=new Date(Bt).getTime(),ot=new Date(ie??tt).getTime(),T=typeof _.getMetricsFor=="function"?_.getMetricsFor(zt).HttpList:_.getDashMetrics().getHttpRequests(zt),H=T?.[T.length-1],P=H?f(H._responseHeaders??""):void 0;return{requestStart:Z,requestResponseStart:et,requestResponseEnd:ot,requestBytesLoaded:I,requestResponseHeaders:P,requestHostname:Dt,requestUrl:q}},v=(E,_,q)=>{u("requestCompleted",{request_event_type:E,request_start:_.requestStart,request_response_start:_.requestResponseStart,request_response_end:_.requestResponseEnd,request_bytes_loaded:_.requestBytesLoaded??-1,request_type:q,request_response_headers:_.requestResponseHeaders,request_hostname:_.requestHostname,request_url:_.requestUrl})},B=()=>{let E=e.getDashMetrics().getHttpRequests("Manifest"),_=E[E.length-1];if(_?._responseHeaders)return _._responseHeaders.split(`
`).find(q=>q.toLowerCase().startsWith("content-type:"))?.split(":")[1]?.trim()},R=E=>{let{type:_,data:q}=E,I=q?.url;B();let J={requestStart:0,requestResponseStart:0,requestResponseEnd:0,requestBytesLoaded:-1,requestResponseHeaders:void 0,requestHostname:Pe(I),requestUrl:I};v(_,J,"manifest")},O=E=>{let _=h(E.request,e),q=`${E.chunk?.mediaInfo?.type}_init`;v(E.type,_,q)},A=E=>{let{type:_,request:q,chunk:I}=E,J=I?.mediaInfo?.type,tt=h(q,e);v(_,tt,J)},M={},G=E=>{let _=/codecs\*?="([^"]*)"/.exec(E);return _?_[1]:void 0},Y=()=>{let{video:E,audio:_,totalBitrate:q}=M;if(E&&typeof E.bitrate=="number"){if(!E.width||!E.height)return;let I=E.bitrate;if(_&&typeof _.bitrate=="number"&&(I+=_.bitrate),I!==q)return M.totalBitrate=I,{video_source_bitrate:I,video_source_height:E.height,video_source_width:E.width,video_source_codec:G(E.codec??"")}}},U=E=>{let{mediaType:_,newRepresentation:q,newQuality:I}=E;if(_==="video"&&typeof q=="object"){n?.fp?.dispatch("variantChanged",{video_source_bitrate:q.bandwidth,video_source_height:q.height,video_source_width:q.width,video_source_codec:q.codecs});return}if(typeof I=="number"&&(_==="video"||_==="audio")){let J=e.getBitrateInfoListFor(_).find(vt=>vt.qualityIndex===I);if(!J||typeof J.bitrate!="number")return;M[_]={...J,codec:e.getCurrentTrackFor(_)?.codec};let tt=Y();tt&&n?.fp?.dispatch("variantChanged",tt)}},Q=E=>{let _=E.request,q=E.mediaType,I=_?.action,J=_?.url,tt=J?Pe(J):"";n?.fp?.dispatch("requestCanceled",{request_event_type:I,request_url:J,request_type:q,request_hostname:tt})},x=function(E){let _="",{error:q}=E;if(!q)return;let{data:I}=q,J=I?.request??{},tt=I?.response??{};if(q.code===27&&n?.fp.dispatch("requestFailed",{request_error:`${J.type}_${J.action}`,request_url:J.url,request_hostname:J.url?Pe(J.url):"",request_type:J.mediaType,request_error_code:tt.status,request_error_text:tt.statusText}),J.url&&(_+="url: "+J.url+`
`),tt.status||tt.statusText){let vt=tt.status??"",Bt=tt.statusText??"";_+="response: "+vt+", "+Bt+`
`}r?.automaticErrorTracking&&n?.fp.dispatch("error",{player_error_code:q.code,player_error_message:q.message,player_error_context:_})};n?.fp&&(n.fp.destroyDashMonitoring=()=>{e.off("error",x),e.off("fragmentLoadingAbandoned",Q),e.off("qualityChangeRendered",U),e.off("manifestLoaded",R),e.off("initFragmentLoaded",O),e.off("mediaFragmentLoaded",A),delete n.fp?.destroyDashMonitoring}),e.on("error",x),e.on("fragmentLoadingAbandoned",Q),e.on("qualityChangeRendered",U),e.on("manifestLoaded",R),e.on("initFragmentLoaded",O),e.on("mediaFragmentLoaded",A)},Ro={},a2=["loadstart","pause","play","playing","seeking","seeked","timeupdate","waiting","error","ended"],i2={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"},l2=function(e){return["auto","metadata"].includes(e)},Sm={tracker:function(e,n){let r=xg(e),u=r[0],c=r[2],f=n.hlsjs,h=n.dashPlayer,v=n.Hls??window.Hls,B=n.dashjs??window.dashjs,R="unknown";if(v?R="hls":B&&(R="dash"),!u||c!=="video"&&c!=="audio")return;u?.fp&&u.fp.destroy();let O=r[1],A={automaticErrorTracking:n.automaticErrorTracking??!0},M={hls:{name:"hls.js Player",version:v?.version??"",sdk:"fastpix-hls-monitoring"},dash:{name:"dash.js Player",version:B?.Version??"",sdk:"fastpix-dash-monitoring"},unknown:{name:"",version:"",sdk:"fastpix-data-monitoring"}}[R];n={...n,...A},n.data={player_software_name:M.name,player_software_version:M.version,player_fastpix_sdk_name:M.sdk,player_fastpix_sdk_version:"1.0.5",...n.data},n.fetchPlayheadTime=function(){return Math.floor(1e3*u.currentTime)},n.fetchStateData=function(){let Y,U,Q=f?.url,x=h&&typeof h.getSource=="function"&&h.getSource();return{player_is_paused:u.paused,player_width:u.offsetWidth,player_height:u.offsetHeight,player_autoplay_on:u.autoplay,player_preload_on:l2(u.preload),player_is_fullscreen:document&&!!(document.fullscreenElement??document?.webkitFullscreenElement??document?.mozFullScreenElement??document?.msFullscreenElement),video_source_height:u.videoHeight,video_source_width:u.videoWidth,video_source_url:Q??x??u.currentSrc,video_source_domain:Hu(Q??x??u.currentSrc),video_source_hostname:Pe(Q??x??u.currentSrc),video_source_duration:Math.floor(1e3*u.duration),video_poster_url:u.poster,player_language_code:u.lang,view_dropped_frame_count:(Y=u)===null||Y===void 0||(U=Y.getVideoPlaybackQuality)===null||U===void 0?void 0:U.call(Y).droppedVideoFrames}},u.fp=u.fp??{},u.fp.dispatch=(Y,U)=>{this.dispatch(O,Y,U)},u.fp.listeners={},u.fp.deleted=!1,u.fp.destroy=function(){Object.keys(u.fp.listeners).forEach(function(Y){u.removeEventListener(Y,u.fp.listeners[Y],!1)}),delete u.fp.listeners,R==="hls"&&u.fp?.destroyHlsMonitoring?u.fp?.destroyHlsMonitoring():R==="dash"&&u.fp?.destroyDashMonitoring&&u.fp?.destroyDashMonitoring(),u.fp.deleted=!0,u.fp.dispatch("destroy"),delete u?.fp},this.configure(O,n),this.dispatch(O,"playerReady"),u.paused||(this.dispatch(O,"play"),u.readyState>2&&this.dispatch(O,"playing")),a2.forEach(Y=>{(Y!=="error"||n.automaticErrorTracking)&&(u.fp.listeners[Y]=()=>{let U={};if(Y==="error"){if(!u.error||u.error?.code===1)return;U.player_error_code=u.error?.code,U.player_error_message=i2[u.error?.code]??u.error?.message}this.dispatch(O,Y,U)},u.addEventListener(Y,u.fp.listeners[Y],!1))});let G=(Y,U)=>u.fp.dispatch(Y,U);f&&t2(f,v,u,A,G),h?.on&&e2(h,u,A,G)},utilityMethods:Mg,configure:function(e,n){if(vm()&&n?.respectDoNotTrack&&n?.debug,e){let r=mh(e);r&&(Ro[r]=new va(this,r,n))}},dispatch:function(e,n,r){if(e&&n){let u=mh(e);u&&Ro[u]&&(Ro[u].dispatch(n,r),n==="destroy"&&delete Ro[u])}}},n2=Sm;window!==void 0&&(window.fastpixMetrix=Sm);var o2="1.0.20",r2=e=>{let n={"metadata-workspace-key":"workspace_id","metadata-video-title":"video_title","metadata-viewer-user-id":"viewer_id","metadata-video-id":"video_id","metadata-experiment-name":"experiment_name","metadata-player-name":"player_name","metadata-player-version":"player_version","metadata-video-duration":"video_duration","metadata-view-session-id":"view_session_id","metadata-page-context":"page_context","metadata-sub-property-id":"sub_property_id","metadata-video-content-type":"video_content_type","metadata-player-poster":"player_poster","metadata-video-drm-type":"video_drm_type","metadata-video-encoding-variant":"video_encoding_variant","metadata-video-language-code":"video_language_code","metadata-video-producer":"video_producer","metadata-video-variant-name":"video_variant_name","metadata-video-cdn":"video_cdn","metadata-cdn":"cdn","metadata-beacon-domain":"beacon_domain","metadata-video-variant-id":"video_variant_id","metadata-video-series":"video_series","metadata-video-poster-url":"video_poster_url","metadata-player-softer-name":"player_software_name","metadata-player-software-version":"player_software_version","metadata-custom-1":"custom_1","metadata-custom-2":"custom_2","metadata-custom-3":"custom_3","metadata-custom-4":"custom_4","metadata-custom-5":"custom_5","metadata-custom-6":"custom_6","metadata-custom-7":"custom_7","metadata-custom-8":"custom_8","metadata-custom-9":"custom_9","metadata-custom-10":"custom_10","metadata-browser-name":"browser_name","metadata-os-name":"os_name","metadata-os-version":"os_version","metadata-player-init-time":"player_init_time"},r={};return Object.entries(n).forEach(([u,c])=>{let f=e.getAttribute(u);f!==null&&(r[c]=f)}),e.streamType&&(r.video_stream_type=e.streamType),r};function s2(e,n,r,u){let c=r2(e);c={...c,player_software_name:"fastpix-player-data-monitoring",player_software_version:o2};let f=e.hasAttribute("enable-debug"),h=e.hasAttribute("disable-cookies"),v=e.hasAttribute("respect-do-not-track"),B=e.hasAttribute("disable-data-monitoring"),R=e.getAttribute("metadata-workspace-key"),O=!B&&!!R,A=e.getAttribute("config-domain")||"anlytix.io";O&&n2.tracker(n,{debug:f,hlsjs:r,Hls:u,disableCookies:h,data:c,respectDoNotTrack:v,configDomain:A})}var u2=`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 33 33" fill="none">
<g clip-path="url(#clip0_13552_13979)">
<path d="M27.3965 12.1973V9.57227C27.3965 8.87607 27.1199 8.20839 26.6276 7.71611C26.1354 7.22383 25.4677 6.94727 24.7715 6.94727V6.07227C24.7715 5.37607 24.4949 4.70839 24.0026 4.21611C23.5104 3.72383 22.8427 3.44727 22.1465 3.44727H11.6465C10.9503 3.44727 10.2826 3.72383 9.79033 4.21611C9.29805 4.70839 9.02148 5.37607 9.02148 6.07227V6.94727C8.32529 6.94727 7.65761 7.22383 7.16533 7.71611C6.67305 8.20839 6.39648 8.87607 6.39648 9.57227V12.1973C5.70029 12.1973 5.03261 12.4738 4.54033 12.9661C4.04805 13.4584 3.77148 14.1261 3.77148 14.8223V27.0723C3.77148 27.7685 4.04805 28.4361 4.54033 28.9284C5.03261 29.4207 5.70029 29.6973 6.39648 29.6973H27.3965C28.0927 29.6973 28.7604 29.4207 29.2526 28.9284C29.7449 28.4361 30.0215 27.7685 30.0215 27.0723V14.8223C30.0215 14.1261 29.7449 13.4584 29.2526 12.9661C28.7604 12.4738 28.0927 12.1973 27.3965 12.1973ZM10.7715 6.07227C10.7715 5.8402 10.8637 5.61764 11.0278 5.45355C11.1919 5.28945 11.4144 5.19727 11.6465 5.19727H22.1465C22.3785 5.19727 22.6011 5.28945 22.7652 5.45355C22.9293 5.61764 23.0215 5.8402 23.0215 6.07227V6.94727H10.7715V6.07227ZM8.14648 9.57227C8.14648 9.3402 8.23867 9.11764 8.40277 8.95355C8.56686 8.78945 8.78942 8.69727 9.02148 8.69727H24.7715C25.0035 8.69727 25.2261 8.78945 25.3902 8.95355C25.5543 9.11764 25.6465 9.3402 25.6465 9.57227V12.1973H8.14648V9.57227ZM28.2715 27.0723C28.2715 27.3043 28.1793 27.5269 28.0152 27.691C27.8511 27.8551 27.6285 27.9473 27.3965 27.9473H6.39648C6.16442 27.9473 5.94186 27.8551 5.77777 27.691C5.61367 27.5269 5.52148 27.3043 5.52148 27.0723V14.8223C5.52148 14.5902 5.61367 14.3676 5.77777 14.2035C5.94186 14.0395 6.16442 13.9473 6.39648 13.9473H27.3965C27.6285 13.9473 27.8511 14.0395 28.0152 14.2035C28.1793 14.3676 28.2715 14.5902 28.2715 14.8223V27.0723Z" fill="currentColor"/>
<path d="M21.2715 19.3723L16.2402 16.2223C15.958 16.0478 15.6344 15.9519 15.3027 15.9443C14.971 15.9368 14.6433 16.0179 14.3534 16.1793C14.0636 16.3408 13.8221 16.5766 13.6538 16.8626C13.4856 17.1486 13.3968 17.4743 13.3965 17.8061V24.0886C13.3954 24.4203 13.4833 24.7463 13.6511 25.0326C13.8188 25.3188 14.0603 25.5549 14.3502 25.7161C14.6406 25.878 14.9689 25.9593 15.3012 25.9516C15.6335 25.9439 15.9577 25.8475 16.2402 25.6723L21.2715 22.5223C21.5392 22.3558 21.76 22.1237 21.9131 21.8482C22.0662 21.5726 22.1465 21.2625 22.1465 20.9473C22.1465 20.6321 22.0662 20.322 21.9131 20.0464C21.76 19.7709 21.5392 19.5388 21.2715 19.3723ZM20.344 21.0436L15.3127 24.1848C15.2958 24.1937 15.2768 24.1981 15.2576 24.1977C15.2385 24.1972 15.2197 24.192 15.2032 24.1824C15.1866 24.1728 15.1727 24.1591 15.1628 24.1427C15.1529 24.1263 15.1473 24.1077 15.1465 24.0886V17.8061C15.1444 17.7866 15.1483 17.7669 15.1577 17.7497C15.1671 17.7325 15.1815 17.7186 15.199 17.7098C15.2189 17.7031 15.2404 17.7031 15.2602 17.7098H15.3127L20.344 20.8511C20.3603 20.8613 20.3737 20.8755 20.383 20.8923C20.3922 20.9092 20.3971 20.9281 20.3971 20.9473C20.3971 20.9665 20.3922 20.9854 20.383 21.0023C20.3737 21.0191 20.3603 21.0333 20.344 21.0436Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_13552_13979">
<rect width="28" height="28" fill="currentColor" transform="translate(2.89648 2.57227)"/>
</clipPath>
</defs>
</svg>`,c2=`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 33 33" fill="none">
<path d="M24.2648 27.3409C23.9891 27.3409 23.7247 27.2314 23.5298 27.0365C23.3348 26.8415 23.2253 26.5771 23.2253 26.3014V6.84517C23.2253 6.56948 23.3348 6.30508 23.5298 6.11013C23.7247 5.91518 23.9891 5.80566 24.2648 5.80566H25.8394C26.1151 5.80566 26.3795 5.91518 26.5744 6.11013C26.7694 6.30508 26.8789 6.56948 26.8789 6.84517V26.3014C26.8789 26.5771 26.7694 26.8415 26.5744 27.0365C26.3795 27.2314 26.1151 27.3409 25.8394 27.3409H24.2648ZM5.04944 7.19029V25.8945C5.04944 26.7383 6.00215 27.2305 6.69057 26.7422L20.2364 17.1335C20.8297 16.7125 20.8186 15.8281 20.2143 15.4227L6.66848 6.32698C5.97798 5.86362 5.04944 6.35816 5.04944 7.19029Z" fill="currentColor"/>
</svg>`,d2=`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 33 33" fill="none">
<path d="M7.90513 27.3409C8.18082 27.3409 8.44522 27.2314 8.64017 27.0365C8.83512 26.8415 8.94464 26.5771 8.94464 26.3014V6.84517C8.94464 6.56948 8.83512 6.30508 8.64017 6.11013C8.44522 5.91518 8.18082 5.80566 7.90513 5.80566H6.33053C6.05483 5.80566 5.79043 5.91518 5.59548 6.11013C5.40054 6.30508 5.29102 6.56948 5.29102 6.84517V26.3014C5.29102 26.5771 5.40054 26.8415 5.59548 27.0365C5.79043 27.2314 6.05483 27.3409 6.33053 27.3409H7.90513ZM27.1205 7.19029V25.8945C27.1205 26.7383 26.1678 27.2305 25.4794 26.7422L11.9335 17.1335C11.3402 16.7125 11.3514 15.8281 11.9556 15.4227L25.5014 6.32698C26.1919 5.86362 27.1205 6.35816 27.1205 7.19029Z" fill="currentColor"/>`;function f2(e){e.prevButton=e.prevButton||document.createElement("button"),e.prevButton.innerHTML=d2,e.prevButton.className=e.prevButton.className||"playlistPrevButton playlistButtonHidden",e.nextButton=e.nextButton||document.createElement("button"),e.nextButton.innerHTML=c2,e.nextButton.className=e.nextButton.className||"playlistNextButton playlistButtonHidden",e.leftControls.contains(e.prevButton)||e.leftControls.appendChild(e.prevButton),e.leftControls.contains(e.nextButton)||e.leftControls.appendChild(e.nextButton),e.updatePlaylistControlsVisibility=()=>{let n=Array.isArray(e.playlist)&&e.playlist.length>0,r=getComputedStyle(e.leftControls).getPropertyValue("--previous-episode-button").trim(),u=getComputedStyle(e.leftControls).getPropertyValue("--next-episode-button").trim(),c=r==="none",f=u==="none";n?(e.controlsContainer.classList.add("hasPlaylist"),e.prevButton.classList.remove("playlistButtonHidden"),e.prevButton.classList.add("playlistButtonVisible"),e.nextButton.classList.remove("playlistButtonHidden"),e.nextButton.classList.add("playlistButtonVisible")):(e.controlsContainer.classList.remove("hasPlaylist"),e.prevButton.classList.remove("playlistButtonVisible"),e.prevButton.classList.add("playlistButtonHidden"),e.nextButton.classList.remove("playlistButtonVisible"),e.nextButton.classList.add("playlistButtonHidden")),e.prevButton.classList.toggle("playlistPrevButtonDisabledByCSS",c),e.playPauseButton.classList.toggle("playlistPrevButtonDisabledByCSS",c),e.forwardRewindControlsWrapper.classList.toggle("playlistPrevButtonDisabledByCSS",c),e.forwardRewindControlsWrapper.classList.toggle("playlistNextButtonDisabledByCSS",f),e.nextButton.classList.toggle("playlistNextButtonDisabledByCSS",f)},e.updatePlaylistControlsVisibility()}function p2(){if(typeof document>"u"||document.getElementById("fastpix-ce-slot-fouc"))return;let e=document.createElement("style");e.id="fastpix-ce-slot-fouc",e.textContent="fastpix-player:not(:defined) > * { display: none !important; }",document.head.appendChild(e)}p2();function h2(e){return e.map(n=>{let r=n.playbackId??n["playback-id"];return r?{playbackId:r,token:n.token??n.token,drmToken:n.drmToken??n["drm-token"],customDomain:n.customDomain??n["custom-domain"],skipIntroStart:n.skipIntroStart??n["skip-intro-start"],skipIntroEnd:n.skipIntroEnd??n["skip-intro-end"],nextEpisodeOverlay:n.nextEpisodeOverlay??n["next-episode-button-overlay"],title:n.title,thumbnail:n.thumbnail,duration:n.duration}:null}).filter(Boolean)}function m2(e){let n=e.defaultPlaybackId??null;if(!n)return 0;let r=e.playlist.findIndex(u=>u.playbackId===n);return Math.max(r,0)}function y2(e){if(!e.playPauseButton)return;let n=e.hasAttribute("auto-play")||e.hasAttribute("loop-next"),r=getComputedStyle(e).getPropertyValue("--initial-play-button").trim();Array.isArray(e.playlist)&&e.playlist.length>0?n||r==="none"?e.playPauseButton.style.setProperty("display","none"):e.playPauseButton.style.setProperty("display","flex"):e.playPauseButton.style.setProperty("display","var(--initial-play-button, flex)")}function v2(e){let n=e.playlist[e.currentIndex];n?.playbackId&&((e.hasAttribute("auto-play")||e.hasAttribute("loop-next"))&&le(e),e.loadByPlaybackId(n.playbackId,{token:n.token,drmToken:n.drmToken,customDomain:n.customDomain}),!e.hideDefaultPlaylistPanel&&typeof ma=="function"&&e.playlistPanel&&ma(e))}function b2(e,n){let r=e.subtitleContainer;if(e.hasAttribute("hide-native-subtitles")){r.innerHTML="",r.classList.remove("contained");return}let u=n.activeCues&&n.activeCues.length>0?n.activeCues[0]:null;u&&e.initialPlayClick?(r.innerHTML=u.text??"",r.classList.add("contained")):(r.innerHTML="",r.classList.remove("contained"))}function g2(e,n){try{let r=n.activeCues&&n.activeCues.length>0?n.activeCues[0].text??"":"",u=n.activeCues?n.activeCues[0]:null;e.dispatchEvent(new CustomEvent("fastpixsubtitlecue",{detail:{text:r,language:n.language||void 0,startTime:typeof u?.startTime=="number"?u.startTime:void 0,endTime:typeof u?.endTime=="number"?u.endTime:void 0}}))}catch{}}function C2(e){if(e.playbackRatesAttribute===null)e.playbackRates=[1,1.2,1.5,1.7,2];else{let r=e.playbackRatesAttribute.split(" ").map(c=>Number.parseFloat(c)),u=[...new Set(r)];e.playbackRates.splice(0,e.playbackRates.length,...u)}e.playbackRateDiv=V.createElement("div"),e.playbackRateDiv.className="playbackRate-menu",e.playbackRateDiv.style.display="none";let n=bg(e.defaultPlaybackRateAttribute);n&&(e.defaultPlaybackRate=n),e.playbackRates.forEach(r=>{let u=V.createElement("button");u.style.padding="5px 6px",u.textContent=`${r}x`,u.title=`${r}x`,u.className="playbackRateButton",String(r)===String(e.defaultPlaybackRate)&&(u.classList.add("active"),e.lastClickedPlaybackRateButton=u),u.addEventListener("click",()=>{try{e.playbackRateDiv?.querySelectorAll(".playbackRateButton.active")?.forEach(c=>c.classList.remove("active"))}catch{}vg(e,r,u)}),e.playbackRateDiv?.appendChild(u)})}function S2(e){if(!e.hideDefaultPlaylistPanel){e.playlistPanel=document.createElement("div"),e.playlistPanel.className="playlist-panel",e.playlistPanel.style.maxHeight="400px";let n=document.createElement("div");n.className="playlist-header",n.textContent="Episode List",e.playlistItems=document.createElement("div"),e.playlistItems.className="playlist-items-wrapper",e.playlistPanel.appendChild(n),e.bottomRightDiv.appendChild(e.playlistPanel);return}e.playlistSlot=document.createElement("div"),e.playlistSlot.className="playlist-slot",e.playlistSlot.style.position="absolute",e.playlistSlot.style.top="0",e.playlistSlot.style.left="0",e.playlistSlot.style.right="0",e.playlistSlot.style.bottom="0",e.playlistSlot.style.opacity="0",e.playlistSlot.style.transition="opacity 0.9s ease",e.playlistSlot.style.pointerEvents="none",e.playlistSlot.style.zIndex="9999",e.controlsContainer.appendChild(e.playlistSlot),Array.from(e.children).filter(n=>{let r=n.getAttribute("slot"),u=n.dataset.fastpixSlot;return r==="playlist-panel"||u==="playlist-panel"}).forEach(n=>e.playlistSlot?.appendChild(n))}function xm(e,n){try{let r=n?.skipIntroStart==null?Number.NaN:Number.parseFloat(n.skipIntroStart),u=n?.skipIntroEnd==null?Number.NaN:Number.parseFloat(n.skipIntroEnd),c=n?.nextEpisodeOverlay==null?Number.NaN:Number.parseFloat(n.nextEpisodeOverlay);e.removeAttribute("skip-intro-start"),e.removeAttribute("skip-intro-end"),e.removeAttribute("next-episode-button-overlay"),Number.isFinite(r)?(e.setAttribute("skip-intro-start",String(r)),e.skipIntroStart=r):e.skipIntroStart=null,Number.isFinite(u)?(e.setAttribute("skip-intro-end",String(u)),e.skipIntroEnd=u):e.skipIntroEnd=null,Number.isFinite(c)?(e.setAttribute("next-episode-button-overlay",String(c)),e.nextEpisodeOverlayStart=c):e.nextEpisodeOverlayStart=null}catch{}}function Ch(e,n){if(n?.playbackId){e.destroy();try{document.pictureInPictureElement&&(e._reenterPiPOnReady=!0,document.exitPictureInPicture?.())}catch{}e.controlsContainer&&e.controlsContainer.style.setProperty("--controls","none"),le(e),xm(e,n),e.loadByPlaybackId(n.playbackId,{token:n.token,drmToken:n.drmToken,customDomain:n.customDomain}),!e.hideDefaultPlaylistPanel&&typeof ma=="function"&&e.playlistPanel&&ma(e)}}function x2(e){!e.hideDefaultPlaylistPanel||!e.externalPlaylistOpen||(e.externalPlaylistOpen=!1,(e.playlistSlot?Array.from(e.playlistSlot.children):[]).forEach(n=>n.style.pointerEvents="none"),e.dispatchEvent(new CustomEvent("playlisttoggle",{detail:{open:!1,hasPlaylist:Array.isArray(e.playlist)&&e.playlist.length>0,currentIndex:e.currentIndex,totalItems:Array.isArray(e.playlist)?e.playlist.length:0,playbackId:e.playbackId??null},bubbles:!0,composed:!0})))}function Sh(e){let[n,r,u]=e.split(":").map(Number);return n*3600+r*60+u}var w2=class extends yu.HTMLElement{constructor(){super(),this.playlist=[],this.currentIndex=0,this.audioTracks=[],this.subtitleTracks=[],this.currentAudioTrackId=null,this.currentSubtitleTrackId=null,this.hideDefaultPlaylistPanel=!1,this.externalPlaylistOpen=!1,this.isCartOpen=!1,this.isSidebarHovered=!1,this._initShoppableRequested=!1,this._reenterPiPOnReady=!1,this.isHotspotVisible=!1,this.cartData={productSidebarConfig:{},products:[]},this.hotspotPauseTimeout=null,this.hasAutoClosedSidebar=!1,this._lastActiveProductEl=null,this.openCartSidebar=()=>{try{this.playbackRateDiv&&this.playbackRateDiv.style?.display!=="none"&&(this.playbackRateDiv.style.display="none"),this.resolutionMenu&&this.resolutionMenu.style?.display!=="none"&&(this.resolutionMenu.style.display="none"),this.subtitleMenu&&this.subtitleMenu.style?.display!=="none"&&(this.subtitleMenu.style.display="none"),this.audioMenu&&this.audioMenu.style?.display!=="none"&&(this.audioMenu.style.display="none")}catch{}this.cartSidebar&&(this.cartSidebar.style.display="flex",this.cartSidebar.getBoundingClientRect(),this.cartSidebar.style.width="var(--shoppable-sidebar-width)",this.isCartOpen=!0,this.cartButton.innerHTML='<svg width="24" height="24" viewBox="0 0 24 24"><path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z"/></svg>',this.progressBar.classList.add("cartSidebarOpen-progress-bar"),this.bottomRightDiv.classList.add("cartSidebarOpen-bottom-right-div"),this.dispatchEvent(new CustomEvent("productBarMax",{detail:{opened:!0}})),bi(this))},this.closeCartSidebar=()=>{let n=this.isCartOpen;this.cartSidebar&&(this.cartSidebar.style.width="0",this.cartSidebar.style.display="none",this.isCartOpen=!1,this.cartButton.innerHTML='<svg width="24" height="24" viewBox="0 0 24 24"><path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zM7.334 16h9.332c.822 0 1.542-.502 1.847-1.264l3.479-8.12A1 1 0 0 0 21 5H5.21l-.94-2.342A1 1 0 0 0 3.333 2H1a1 1 0 1 0 0 2h1.333l3.6 8.982-1.35 2.44C3.52 16.14 4.477 18 6 18h12a1 1 0 1 0 0-2H7.334z"/></svg>',this.progressBar.classList.remove("cartSidebarOpen-progress-bar"),this.bottomRightDiv.classList.remove("cartSidebarOpen-bottom-right-div"),this.bottomRightDiv&&(this.bottomRightDiv.style.right=""),this.dispatchEvent(new CustomEvent("productBarMin",{detail:{opened:!1}})),bi(this),n&&this.triggerCartIconDance())},this.showCartButton=()=>{this.cartButton&&(this.cartButton.style.display="flex",this.cartButton.style.visibility="visible",this.cartButton.style.opacity="1")},this.ensureShoppableShortsCartButton=()=>{(this.getAttribute?this.getAttribute("theme"):null)==="shoppable-shorts"&&this.cartButton&&(this.cartButton.style.display="flex",this.cartButton.style.visibility="visible",this.cartButton.style.opacity="1",this.cartButton.style.position="absolute",this.cartButton.style.top="16px",this.cartButton.style.right="16px",this.cartButton.style.zIndex="1600")},this.triggerCartIconDance=()=>{let n=this.cartButton;if(n)try{n.classList.remove("cart-dance"),n.getBoundingClientRect(),n.classList.add("cart-dance"),window.setTimeout(()=>n.classList.remove("cart-dance"),600)}catch{}},this._readyState=0,this.config=ub,this.hls=null,this.video=V.createElement("video"),this.resolutionFlagPause=!1,this.isLoading=!1,this.isOnline=navigator.onLine,this.userSelectedLevel=null,this.isBufferFlushed=!1,this.isBuffering=!1,this.pauseAfterLoading=!1,this.resolutionSwitching=!1,this.disabledAllCaptions=!1,this.wasManuallyPaused=!1,this.video.controls=!1,this.progressBarVisible=!1,this.isError=!1,this.cache=new Map,this.initialPlayClick=!1,this.defaultPlaybackRate="1",this.lastClickedPlaybackRateButton=null,this.playbackRates=[],this.isInitialLoad=!0,this.videoEnded=!1,this.pausedOnCasting=!1,this.currentCastSession=null,this.castMediaDuration=null,this.currentSubtitleTrackIndex=-1,this.chapters=[],this._src=null,this.isMuted=!1,this.previousChapter=null,this.retryButtonVisible=!1,T0(this),this.showPostPlayOverlay=!!(this.cartData.productSidebarConfig?.showPostPlayOverlay??!1),this.wrapper=V.createElement("div"),this.wrapper.style.position="relative",this.controlsContainer=V.createElement("div"),this.controlsContainer.className="controlsContainer",this.leftControls=V.createElement("div"),this.leftControls.className="leftControls",this.mobileControls=V.createElement("div"),this.mobileControls.className="mobileControls",this.mobileControlButtonsBlock=V.createElement("div"),this.mobileControlButtonsBlock.className="mobileControlsButtonsBlock",this.timeDisplay=V.createElement("div"),this.timeDisplay.className="timeDisplay",this.subtitleMenu=V.createElement("div"),this.subtitleMenu.style.display="none",this.ccButton=V.createElement("button"),this.ccButton.className="ccButton",this.ccButton.innerHTML=ug,this.castButton=V.createElement("button"),this.castButton.className="castButton",this.castButton.innerHTML=kh,this.castButton.style.setProperty("--cast-button-display","none"),$b(this),this.retryButton=V.createElement("button"),this.retryButton.innerHTML=`<svg width="25%" height="25%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 6V2L7 7L12 12V8C15.31 8 18 10.69 18 14C18 17.31 15.31 20 12 20C8.69 20 6 17.31 6 14H4C4 18.42 7.58 22 12 22C16.42 22 20 18.42 20 14C20 9.58 16.42 6 12 6Z" fill="currentColor"/>
        </svg>`,this.retryButton.className="retryButton",this.retryButton.style.position="absolute",this.retryButton.style.top="50%",this.retryButton.style.left="50%",this.retryButton.style.transform="translate(-50%, -50%)",this.retryButton.style.display="none",this.retryButton.style.background="transparent",this.forwardRewindControlsWrapper=V.createElement("div"),this.forwardRewindControlsWrapper.className="forwardRewindControlsWrapper",this.progressBarContainer=V.createElement("div"),this.progressBarContainer.className="progressBarContainer",this.controlsContainer.appendChild(this.progressBarContainer),this.skipIntroButton=V.createElement("button"),this.skipIntroButton.className="skipIntroButton",this.skipIntroButton.textContent="Skip intro",this.skipIntroButton.style.display="none",this.controlsContainer.appendChild(this.skipIntroButton),this.nextEpisodeButton=V.createElement("button"),this.nextEpisodeButton.className="nextEpisodeButton",this.nextEpisodeButton.textContent="Next episode",this.nextEpisodeButton.style.display="none",this.controlsContainer.appendChild(this.nextEpisodeButton),this.thumbnail=V.createElement("div"),this.thumbnail.className="thumbnailSeeking",this.thumbnailSeekingContainer=V.createElement("div"),this.thumbnailSeekingContainer.className="thumbnailSeekingContainer",this.chapterDisplay=V.createElement("div"),this.chapterDisplay.className="thumbnailChapterDisplay",this.progressBar=V.createElement("input"),this.progressBar.className="progressBar",this.progressBar.type="range",this.progressBar.min="0",this.progressBar.value="0",this.progressBar.step="0.01",this.progressBarContainer.appendChild(this.progressBar),this.playPauseButton=V.createElement("button"),this.playPauseButton.style.zIndex="1500",this.playPauseButton.style.position="absolute",this.playPauseButton.classList.add("initialPlayBigButton","initialplayPauseButtonStyle"),this.bottomRightDiv=V.createElement("div"),this.bottomRightDiv.className="bottomRightContainer",this.resolutionMenuButton=V.createElement("button"),this.resolutionMenuButton.innerHTML=cg,this.resolutionMenuButton.className="resolutionMenuButton",this.resolutionMenuButton.style.zIndex="2px",this.bottomRightDiv.appendChild(this.resolutionMenuButton),this.resolutionMenu=V.createElement("div"),this.resolutionMenu.classList.add("resolution-menu"),this.resolutionMenu.style.display="none",this.bottomRightDiv.appendChild(this.resolutionMenu),this.video.textTracks.addEventListener("addtrack",n=>{let r=n.track;(r.kind==="subtitles"||r.kind==="captions")&&(r.mode="hidden",r.addEventListener("cuechange",()=>{b2(this,r),g2(this,r)}))}),this.wasPausedBeforeSwitch=!1,this.audioMenuButton=V.createElement("button"),this.audioMenuButton.innerHTML=dg,this.audioMenuButton.className="audioMenuButton",this.audioMenuButton.id="audioMenuButton",this.audioMenuButton.style.zIndex="2px",this.audioMenu=V.createElement("div"),this.audioMenu.style.display="none",this.audioMenu.classList.add("audio-menu"),this.bottomRightDiv.appendChild(this.audioMenuButton),this.audioMenuButton.appendChild(this.audioMenu),tg(this),this.subtitleContainer=V.createElement("div"),this.subtitleContainer.id="subtitleContainer",this.subtitleContainer.classList.add("subtitle-container"),this.videoOverLay=V.createElement("div"),this.videoOverLay.className="video-overlay",this.wrapper.appendChild(this.video),this.wrapper.appendChild(this.videoOverLay),this.userSlotsOverlay=V.createElement("div"),this.userSlotsOverlay.className="fastpix-user-slots",this.userSlotsOverlay.setAttribute("part","user-slots"),this.userSlotsOverlay.setAttribute("aria-hidden","true");let e=["top-left","top-center","top-right","center-left","center-right","bottom-left","bottom-center","bottom-right"];for(let n of e){let r=V.createElement("div");r.className=`fastpix-slot-region fastpix-slot-${n}`,r.dataset.slot=n;let u=V.createElement("slot");u.name=n,r.appendChild(u),this.userSlotsOverlay.appendChild(r)}this.wrapper.appendChild(this.userSlotsOverlay),this.pipButton=V.createElement("button"),this.pipButton.className="pipButton",this.pipButton.innerHTML=fg,this.fullScreenButton=V.createElement("button"),this.fullScreenButton.className="fullScreenButton",this.fullScreenButton.innerHTML=vu,this.fastForwardButton=V.createElement("button"),this.fastForwardButton.innerHTML=pg,this.fastForwardButton.id="increaseTimeBtn",this.fastForwardButton.className="increaseTimeBtn",this.rewindBackButton=V.createElement("button"),this.rewindBackButton.innerHTML=hg,this.rewindBackButton.id="decreaseTimeBtn",this.rewindBackButton.className="decreaseTimeBtn",eg(this),this.playPauseButton.innerHTML=un,this.parentVolumeDiv=V.createElement("div"),this.parentVolumeDiv.className="parentVolumeDiv",this.parentVolumeDiv.style.zIndex="1",this.volumeButton=V.createElement("button"),this.volumeButton.className="volumeButton",this.volumeButton.innerHTML=rl,this.volumeButton.style.display="none",this.volumeiOSButton=V.createElement("button"),this.volumeiOSButton.className="volumeiOSButton",ig(this),this.volumeControl=V.createElement("input"),this.volumeControl.className="volumeControl",this.volumeControl.type="range",this.volumeControl.min="0",this.volumeControl.max="1",this.volumeControl.step="0.2",this.volumeControl.value="1",this.volumeControl.style.display="none",this.volumeControl.style.borderRadius="0.313rem",lg(this),document.addEventListener("fullscreenchange",()=>{let n=!!document.fullscreenElement;this.fullScreenButton.innerHTML=n?x0:vu}),this.loader=V.createElement("div"),this.loader.className="spinner",this.loader.style.position="absolute",this.loader.style.bottom="50%",this.loader.style.left="50%",this.loader.style.marginLeft="-20px",this.loader.style.marginTop="-20px",this.loader.style.display="none",this.bottomCenterDiv=V.createElement("div"),this.bottomCenterDiv.className="bottomCenterDiv",this.spacer=V.createElement("div"),this.spacer.className="spacer",this.wrapper.className="parent",this.controlsContainer.appendChild(this.leftControls),this.controlsContainer.appendChild(this.bottomCenterDiv),this.controlsContainer.appendChild(this.playPauseButton),this.controlsContainer.appendChild(this.bottomRightDiv),this.wrapper.appendChild(this.loader),this.wrapper.appendChild(this.controlsContainer),this.wrapper.appendChild(this.subtitleContainer),this.cartButton=V.createElement("button"),this.cartButton.className="cartButton",this.cartButton.innerHTML='<svg width="24" height="24" viewBox="0 0 24 24"><path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zM7.334 16h9.332c.822 0 1.542-.502 1.847-1.264l3.479-8.12A1 1 0 0 0 21 5H5.21l-.94-2.342A1 1 0 0 0 3.333 2H1a1 1 0 1 0 0 2h1.333l3.6 8.982-1.35 2.44C3.52 16.14 4.477 18 6 18h12a1 1 0 1 0 0-2H7.334z"/></svg>',this.cartButton.style.position="absolute",this.cartButton.style.top="16px",this.cartButton.style.right="16px",this.cartButton.style.zIndex="1600",this.cartButton.style.background="#fff",this.cartButton.style.borderRadius="50%",this.cartButton.style.boxShadow="0 2px 8px rgba(0,0,0,0.10)",this.cartButton.style.width="40px",this.cartButton.style.height="40px",this.cartButton.style.display="flex",this.cartButton.style.alignItems="center",this.cartButton.style.justifyContent="center",this.cartButton.style.border="none",this.cartButton.style.cursor="pointer",this.cartButton.style.opacity="0.6",this.cartGotoLink=this.getAttribute("product-link")||void 0,this.cartButton.onclick=n=>{if(n.stopPropagation(),this.getAttribute("theme")==="shoppable-shorts"){let r=this.cartGotoLink||"https://www.fastpix.io";window.open(r,"_blank","noopener,noreferrer");return}this.getAttribute("theme")==="shoppable-video-player"&&(this.isCartOpen?this.closeCartSidebar():this.openCartSidebar())}}get readyState(){return this._readyState}get currentTime(){return this.video?this.video.currentTime:0}get buffered(){return this.video?this.video.buffered:0}get duration(){return this.video?this.video.duration:0}get paused(){return this.video?this.video.paused:!0}get ended(){return this.video?this.video.ended:!1}get volume(){return this.video?this.video.volume:1}get muted(){return this.video?this.video.muted:!1}set muted(e){if(!this.video)return;let n=!!e;this.video.muted=n,n?(this.setAttribute("muted",""),this.mutedAttribute=!0):(this.removeAttribute("muted"),this.mutedAttribute=!1),ae()&&ya(this.video.volume,n)}get seeking(){return this.video?this.video.seeking:!1}get src(){return this._src}set src(e){this._src=e,this.video&&(this.video.src=e||"")}get currentSrc(){return this.src??"Default src"}get networkState(){return this.video?this.video.networkState:0}get error(){return this.video?this.video.error:null}get videoWidth(){let e=this.video.offsetWidth;return this.video?e:0}get videoHeight(){let e=this.video.offsetHeight;return this.video?e:0}get playbackRate(){return this.video?this.video.playbackRate:1}get controls(){return this.video?this.video.controls:!1}get poster(){return this.video?this.video.poster:""}get autoplay(){let e=this.hasAttribute("auto-play");return this.video?e:!1}set autoplay(e){let n=!!e;n?(this.setAttribute("auto-play",""),this.hasAutoPlayAttribute=!0):(this.removeAttribute("auto-play"),this.hasAutoPlayAttribute=!1),this.video&&(this.video.autoplay=n)}get loop(){let e=this.hasAttribute("loop");return this.video?e:!1}set loop(e){let n=!!e;n?(this.setAttribute("loop",""),this.loopAttribute=!0,this.loopEnabled=!0):(this.removeAttribute("loop"),this.loopAttribute=!1,this.loopEnabled=!1),this.video&&(this.video.loop=n)}play(){return this.video?.play?.()??Promise.reject(new Error("Video not ready"))}pause(){this.video?.pause?.()}mute(){this.video&&(this.setAttribute("muted",""),this.mutedAttribute=!0,this.video.muted=!0,ae()&&ya(this.video.volume,!0))}unmute(){this.video&&(this.removeAttribute("muted"),this.mutedAttribute=!1,this.video.muted=!1,this.video.volume=1,ae()&&ya(1,!1))}enableAutoplay(){this.setAttribute("auto-play",""),this.hasAutoPlayAttribute=!0,this.video&&(this.video.autoplay=!0)}disableAutoplay(){this.removeAttribute("auto-play"),this.hasAutoPlayAttribute=!1,this.video&&(this.video.autoplay=!1)}enableLoop(){this.video&&(this.setAttribute("loop",""),this.loopAttribute=!0,this.loopEnabled=!0,this.video.loop=!0)}disableLoop(){this.video&&(this.removeAttribute("loop"),this.loopAttribute=!1,this.loopEnabled=!1,this.video.loop=!1)}addChapters(e){e.sort((n,r)=>n.startTime-r.startTime),e.forEach((n,r)=>{n.endTime??(n.endTime=r<e.length-1?e[r+1].startTime:this.video.duration)}),this.chapters=e,Xa(this)}addShoppableData(e){if(!e||typeof e!="object")return;let n={...this.cartData?.productSidebarConfig,...e.productSidebarConfig},r=Array.isArray(e.products)?e.products:this.cartData?.products??[];this.cartData={productSidebarConfig:n,products:r},this.showPostPlayOverlay=!!this.cartData.productSidebarConfig?.showPostPlayOverlay;let u=this.getAttribute?this.getAttribute("theme"):null;(u==="shoppable-video-player"||u==="shoppable-shorts")&&!this._initShoppableRequested&&pu(this),this.cartSidebar&&Tu(this),this.dispatchEvent(new CustomEvent("shoppabledatachange",{detail:this.cartData}))}activeChapter(){let e=this.video.currentTime,n=this.chapters.find(u=>e>=u.startTime&&e<(u.endTime??1/0)),r=n?{startTime:n.startTime,endTime:n.endTime,value:n.value}:null;return(!this.previousChapter&&r||this.previousChapter&&r&&(this.previousChapter.startTime!==r.startTime||this.previousChapter.endTime!==r.endTime||this.previousChapter.value!==r.value))&&(this.previousChapter=r,this.dispatchEvent(new Event("chapterchange"))),r}convertChaptersToPlayerFormat(e){return e.chapters.map(n=>{let r=Sh(n.startTime),u=n.endTime?Sh(n.endTime):void 0;return{startTime:r,endTime:u,value:n.title,summary:n.summary}})}convertOpenAIChapters(e){return e.map(n=>{let r=n.start.split(":");return{startTime:Number.parseInt(r[0])*3600+Number.parseInt(r[1])*60+Number.parseInt(r[2]),value:n.title}})}addPlaylist(e){if(Array.isArray(e)){this.playlist=h2(e),this.currentIndex=m2(this);try{let n=this.playlist[this.currentIndex]??{},r=n?.skipIntroStart==null?Number.NaN:Number.parseFloat(n.skipIntroStart),u=n?.skipIntroEnd==null?Number.NaN:Number.parseFloat(n.skipIntroEnd),c=n?.nextEpisodeOverlay==null?Number.NaN:Number.parseFloat(n.nextEpisodeOverlay);this.removeAttribute("skip-intro-start"),this.removeAttribute("skip-intro-end"),this.removeAttribute("next-episode-button-overlay"),Number.isFinite(r)?(this.setAttribute("skip-intro-start",String(r)),this.skipIntroStart=r):this.skipIntroStart=null,Number.isFinite(u)?(this.setAttribute("skip-intro-end",String(u)),this.skipIntroEnd=u):this.skipIntroEnd=null,Number.isFinite(c)?(this.setAttribute("next-episode-button-overlay",String(c)),this.nextEpisodeOverlayStart=c):this.nextEpisodeOverlayStart=null}catch{}typeof this.updatePlaylistControlsVisibility=="function"&&this.updatePlaylistControlsVisibility(),y2(this),v2(this)}}next(){this.currentIndex<this.playlist.length-1&&(this.currentIndex++,Ch(this,this.playlist[this.currentIndex])),this.hasAutoClosedSidebar=!1}previous(){this.currentIndex>0&&(this.currentIndex--,Ch(this,this.playlist[this.currentIndex])),this.hasAutoClosedSidebar=!1}async loadByPlaybackId(e,n){try{this.subtitleContainer&&(this.subtitleContainer.innerHTML="",this.subtitleContainer.classList.remove("contained")),Array.from(this.video?.textTracks??[]).forEach(c=>c.mode="disabled"),this.subtitleMenu&&(this.subtitleMenu.style.display="none"),this.currentSubtitleTrackIndex=-1}catch{}this.playbackId=e,n?.token&&(this.token=n.token),n?.drmToken&&(this.drmToken=n.drmToken),n?.customDomain&&this.setAttribute("custom-domain",n.customDomain);let r=n?.customDomain||this.getAttribute("custom-domain"),u=null;(this.streamType==="on-demand"||this.streamType==="live-stream")&&(u=r?`https://stream.${r}`:"https://stream.fastpix.com"),n?.drmToken&&Fp(this),await Ip(this,e,n?.token??this.token??null,u??void 0,this.streamType??null),this._src=Pp(),this.video.src=this._src??"",this.video.load(),this.video.addEventListener("canplay",()=>{ha(this)&&Vt(this),this.controlsContainer&&this.controlsContainer.style.setProperty("--controls","flex");try{this._reenterPiPOnReady&&!document.pictureInPictureElement&&this.video?.requestPictureInPicture?.().catch(()=>{})}finally{this._reenterPiPOnReady=!1}this.suppressErrorUntilReady=!1,yi(this,this.playbackId??"",this.thumbnailUrlFinal??"",this.streamType??""),!this.hideDefaultPlaylistPanel&&typeof ma=="function"&&this.playlistPanel&&ma(this)},{once:!0}),n?.emitPlaybackChange&&this.dispatchEvent(new CustomEvent("playbackidchange",{detail:{playbackId:e,isFromPlaylist:this.playlist.length>0,currentIndex:this.currentIndex,totalItems:this.playlist.length,status:"ready"}}))}selectEpisodeByPlaybackId(e){let n=this.playlist.findIndex(u=>u.playbackId===e);if(n===-1){this.hasAutoClosedSidebar=!1;return}this.currentIndex=n;let r=this.playlist[this.currentIndex];xm(this,r),this.loadByPlaybackId(e,{token:r.token,drmToken:r.drmToken,customDomain:r.customDomain,emitPlaybackChange:!0}),!this.hideDefaultPlaylistPanel&&typeof ma=="function"&&this.playlistPanel&&ma(this),x2(this),this.hasAutoClosedSidebar=!1}handleVideoEvent(e){this.dispatchEvent(new CustomEvent(e.type,{detail:e,bubbles:!0,composed:!0}))}onFragmentParsed(e){e.frag&&this.debugAttribute}updateEpisodeControls(){if(this.episodeType==="episodic"&&this.episodes&&this.currentEpisodeIndex!==void 0){this.episodeControlsContainer.style.display="inline-flex",this.episodeControlsContainer.style.alignItems="center",this.episodeControlsContainer.style.gap="8px",this.episodeControlsContainer.style.marginLeft="12px";let e=this.currentEpisodeIndex===0,n=this.currentEpisodeIndex===this.episodes.length-1;this.prevEpisodeButton.disabled=e,this.nextEpisodeButton.disabled=n,this.prevEpisodeButton.style.opacity=e?"0.5":"1",this.nextEpisodeButton.style.opacity=n?"0.5":"1"}else this.episodeControlsContainer.style.display="none"}destroy(){try{xu(this);try{Qt(this)}catch{}this.hotspotPauseTimeout&&(clearTimeout(this.hotspotPauseTimeout),this.hotspotPauseTimeout=null);try{document.pictureInPictureElement&&(this._reenterPiPOnReady=!0,document.exitPictureInPicture?.())}catch{}try{this.video?.pause?.()}catch{}try{this.hls?.destroy?.(),this.video.fp&&this.video.fp.destroy();let e=on();this.config={...this.config,startFragPrefetch:Fh(this.streamType)},this.hls=new e(this.config),Jh(this)}catch{}}catch{}}seekForward(e){rn(this,e)}seekBackward(e){rn(this,-e)}async connectedCallback(){let e=this.getAttribute("custom-domain");S0(this),await Mb(this),(this.hasAttribute("auto-play")||this.hasAttribute("autoplay-shorts")||this.hasAttribute("loop-next"))&&this.controlsContainer?.style.setProperty("--initial-play-button","none"),this.customStyle=V.createElement("style"),this.customStyle.innerHTML=mg,Oo(this),ag(this),u0(this,async()=>{if(!this.playbackId||Array.isArray(this.playlist)&&this.playlist.length>0){this.suppressErrorUntilReady=!0;return}(this.hasAttribute("auto-play")||this.hasAttribute("autoplay-shorts")||this.hasAttribute("loop-next"))&&le(this);let f=null;(this.streamType==="on-demand"||this.streamType==="live-stream")&&(f=e?`https://stream.${e}`:"https://stream.fastpix.com");let h=!1;this.drmToken&&(h=!0),h&&Fp(this),await Ip(this,this.playbackId??null,this.token??null,f??void 0,this.streamType??null),this._src=Pp(),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(V0(),this.castButton?.innerHTML?.trim()&&U0(this.castButton,this.video,this._src??"",this))}),c0.forEach(f=>{this.video.addEventListener(f,this.handleVideoEvent.bind(this))}),Jb(this),Oo(this),sg(this),Lb(this),yg(this),this.playPauseButton.addEventListener("click",()=>{this.videoEnded=!1,Qt(this),yi(this,this.playbackId??"",this.thumbnailUrlFinal??"",this.streamType??"")}),this.nextEpisodeButton&&this.nextEpisodeButton.addEventListener("click",()=>{try{if(typeof this.customNext=="function"){this.customNext.call(this,this);return}else this.next()}catch{}this.next()}),this.wrapper.addEventListener("click",f=>{(f.target===this.playPauseButton||this.playPauseButton.contains(f.target))&&(f.stopImmediatePropagation(),this.videoEnded=!1,Qt(this),yi(this,this.playbackId??"",this.thumbnailUrlFinal??"",this.streamType??""))},!0);let n="100%",r="100%";this.loadStartTime=performance.now(),this.hasAttribute("autoplay-shorts")&&(this.video.load(),this.video.addEventListener("canplay",()=>{yi(this,this.playbackId??"",this.thumbnailUrlFinal??"",this.streamType??"")},{once:!0})),C2(this),this.playbackRateButton=V.createElement("button"),this.playbackRateButton.textContent=`${this.defaultPlaybackRate}x`,this.playbackRateButton.className="playbackRateButtonInitial",this.playlistButton=V.createElement("button"),this.playlistButton.innerHTML=u2,this.playlistButton.className="playlistButton",S2(this),ng(this),this.bottomRightDiv.appendChild(this.playlistButton),this.bottomRightDiv.appendChild(this.ccButton),this.bottomRightDiv.appendChild(this.playbackRateButton),this.castButton?.innerHTML?.trim()&&this.bottomRightDiv.appendChild(this.castButton),this.bottomRightDiv.appendChild(this.pipButton),this.bottomRightDiv.appendChild(this.fullScreenButton),this.bottomRightDiv.appendChild(this.subtitleMenu),this.bottomRightDiv.appendChild(this.playbackRateDiv),R0(this);try{this.addEventListener("playlisttoggle",f=>{let h=!!f?.detail?.open;if(this.hideDefaultPlaylistPanel){try{Qt(this)}catch{}this.externalPlaylistOpen=h,(this.playlistSlot?Array.from(this.playlistSlot.children):[]).forEach(v=>v.style.pointerEvents=h?"auto":"none"),this.playlistSlot&&this.playlistSlot.style&&(this.playlistSlot.style.opacity=h?"1":"0",this.playlistSlot.style.transition="opacity 0.9s ease")}})}catch{}let u=Number.parseFloat(this.startTimeAttribute)||0;this.video.currentTime=u,this.wrapper.style.width=n,this.wrapper.style.height=r,this.wrapper.style.position="relative",this.video.style.display="flex",this.video.style.alignItems="center",this.video.style.justifyContent="center",W1(this),this.parentLiveTitleContainer=V.createElement("div"),this.parentLiveTitleContainer.className="parentTextContainer",this.titleElement=V.createElement("div"),this.liveStreamDisplay=V.createElement("button"),ib(this),this.controlsContainer.appendChild(this.parentLiveTitleContainer),s2(this,this.video,this.hls,on()),this.video.loop=!!this.loopAttribute,this.bufferedRange=V.createElement("div"),this.bufferedRange.style.position="absolute",this.bufferedRange.style.top="0",this.bufferedRange.style.left="0",this.bufferedRange.style.height="100%",this.bufferedRange.style.width="0",this.progressBar.appendChild(this.bufferedRange),this.parentVolumeDiv.appendChild(this.volumeButton),this.parentVolumeDiv.appendChild(this.volumeControl),rg(this),Rb(this),f2(this),M0(this),L0(this);try{this.addEventListener("playbackidchange",()=>{typeof this.updatePlaylistControlsVisibility=="function"&&this.updatePlaylistControlsVisibility()}),this.mutationObserver||(this.mutationObserver=new MutationObserver(f=>{for(let h of f)h.type==="attributes"&&h.attributeName==="style"&&typeof this.updatePlaylistControlsVisibility=="function"&&this.updatePlaylistControlsVisibility()}),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["style"]}))}catch{}let c=this.getAttribute?this.getAttribute("theme"):null;(c==="shoppable-video-player"||c==="shoppable-shorts")&&(pu(this),c==="shoppable-shorts"&&setTimeout(()=>{requestAnimationFrame(()=>this.ensureShoppableShortsCartButton())},100))}disconnectedCallback(){xu(this),this.hls?.destroy(),this.video.fp&&this.video.fp.destroy()}static get observedAttributes(){return["theme"]}attributeChangedCallback(e,n,r){e==="theme"&&r&&(r==="shoppable-video-player"||r==="shoppable-shorts")&&(this._initShoppableRequested=!1,pu(this))}positionHotspot(e,n,r,u){let c=u??this.wrapper,f=c?.clientWidth||c?.offsetWidth||0,h=c?.clientHeight||c?.offsetHeight||0,v=32,B=32,R=Math.min(Math.max(Number(n)||0,0),100),O=Math.min(Math.max(Number(r)||0,0),100);if(!f||!h){e.style.left=`${R}%`,e.style.top=`${O}%`;return}let A=R/100*f,M=O/100*h,G=A-v/2,Y=M-B/2,U=Math.max(0,Math.min(f-v,Math.round(G))),Q=Math.max(0,Math.min(h-B,Math.round(Y)));e.style.left=`${U}px`,e.style.top=`${Q}px`}removeAllHotspots(){this.wrapper.querySelectorAll(".hotspot").forEach(e=>{e.parentNode&&e.remove()}),this.isHotspotVisible=!1}getPlaylistSlot(){return this.playlistSlot??null}getVideoOverlay(){return this.videoOverLay??null}getUserSlotsOverlay(){return this.userSlotsOverlay??null}setNextHandler(e){typeof e=="function"&&(this.customNext=e)}setPrevHandler(e){typeof e=="function"&&(this.customPrev=e)}getAudioTracks(){let{audioTracks:e,currentAudioTrackId:n}=Qo(this);return this.audioTracks=e,this.currentAudioTrackId=n,this.audioTracks}getSubtitleTracks(){let{subtitleTracks:e,currentSubtitleTrackId:n}=tm(this);return this.subtitleTracks=e,this.currentSubtitleTrackId=n,this.subtitleTracks}setAudioTrack(e){let n=this.hls;if(!n||!Array.isArray(n.audioTracks)||typeof e!="string")return;let r=e.trim().toLowerCase();if(!r)return;let u=Array.isArray(n.audioTracks)?n.audioTracks:[],c=Array.isArray(this.audioTracksRetrieved)?this.audioTracksRetrieved:[],f=v=>{if(!Array.isArray(v)||v.length===0)return-1;let B=v.findIndex(R=>(R?.name??"").toString().trim().toLowerCase()===r);return B>=0||(B=v.findIndex(R=>(R?.lang??"").toString().trim().toLowerCase()===r)),B},h=f(u);if(h<0){let v=f(c);v>=0&&v<u.length&&(h=v)}if(!(h<0||h>=u.length||u.length===0))try{this.debugAttribute;let v=typeof n.audioTrack=="number"?n.audioTrack:-1;im(this,this.hls,h,v),n.audioTrack=h,am(this.hls,v,h)||ll(this,!0),queueMicrotask(()=>{Ka(()=>{try{n?.audioTrack!==h&&(n.audioTrack=h),Uo(this)}catch{}})});let B=this.getAudioTracks(),R=this.currentAudioTrackId;this.dispatchEvent(new CustomEvent("fastpixaudiochange",{detail:{tracks:B,currentId:R,currentTrack:Array.isArray(B)?B.find(O=>O?.isCurrent)??null:null}}))}catch{}}setSubtitleTrack(e){if(!this.video?.textTracks)return;let n=Array.from(this.video.textTracks||[]).map((c,f)=>({track:c,index:f})).filter(({track:c})=>c.kind==="subtitles"||c.kind==="captions");if(e===null)n.forEach(({track:c})=>{c.mode="disabled"});else{if(typeof e!="string")return;let c=e.trim().toLowerCase();if(!c)return;let f=n.find(({track:v})=>(v?.label??"").toString().trim().toLowerCase()===c),h=f&&typeof f.index=="number"?f.index:-1;if(h<0)return;n.forEach(({track:v,index:B})=>{v.mode=B===h?"showing":"disabled"})}let r=this.getSubtitleTracks(),u=this.currentSubtitleTrackId;this.dispatchEvent(new CustomEvent("fastpixsubtitlechange",{detail:{tracks:r,currentId:u,currentTrack:Array.isArray(r)?r.find(c=>c?.isCurrent)??null:null}}))}disableSubtitles(){_u(this);let e=this.getSubtitleTracks(),n=this.currentSubtitleTrackId;this.dispatchEvent(new CustomEvent("fastpixsubtitlechange",{detail:{tracks:e,currentId:n}})),this.subtitleMenu&&this.subtitleMenu.style?.display!=="none"&&(this.subtitleMenu.style.display="none")}getQualityLevels(){return Xh(this)}setQualityLevel(e){sb(this,e)}setQualityAuto(){Kh(this)}getPlaybackQuality(){return nb(this)}};yu.customElements.get("fastpix-player")||yu.customElements.define("fastpix-player",w2);const hi=[{id:"e089311f-e6a5-48fa-ac92-3bbe3fec31eb",creator:"telugubeats",title:"Ragili Chedipotnunna 🎵",likes:"12.4K",comments:"342",shares:"891"},{id:"2125094c-db43-4748-90e1-18539f2ccf98",creator:"tollywood_edits",title:"Mahaan Beats 🔥 | Best Telugu BGM",likes:"8.7K",comments:"201",shares:"543"},{id:"e1f32b9b-ac57-4582-a7c5-90aa6f96baac",creator:"prima_music",title:"Telugu Prima 🎶 | Feel the vibe",likes:"21K",comments:"987",shares:"2.1K"},{id:"c655164e-2f08-47d5-a3eb-4e3bf2d444df",creator:"helu_tunes",title:"Helu Vibes 💫 | Trending Now",likes:"5.3K",comments:"118",shares:"310"}],T2=()=>z.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{flexShrink:0},children:[z.jsx("path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}),z.jsx("polyline",{points:"16 6 12 2 8 6"}),z.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"15"})]}),mu=({icon:e,label:n,onClick:r,active:u=!1,useShareIcon:c=!1})=>z.jsxs("button",{type:"button",onClick:f=>{f.stopPropagation(),r?.()},style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,background:"none",border:"none",cursor:"pointer",padding:0,color:u?"#b16cea":"rgba(255,255,255,0.95)",transition:"color 0.2s, transform 0.15s",transform:u?"scale(1.15)":"scale(1)"},children:[z.jsx("span",{style:{width:44,height:44,borderRadius:"50%",background:"rgba(255,255,255,0.12)",backdropFilter:"blur(10px)",border:`1.5px solid ${u?"rgba(177,108,234,0.6)":"rgba(255,255,255,0.18)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18},children:c?z.jsx(T2,{}):e}),n&&z.jsx("span",{style:{fontSize:11,fontWeight:600,letterSpacing:"0.02em",color:"rgba(255,255,255,0.9)",textShadow:"0 1px 4px rgba(0,0,0,0.8)",minWidth:56,textAlign:"center",display:"block"},children:n})]});function B2(e){const n=String(e);if(n.endsWith("K")){const r=Number.parseFloat(n)+.1;return`${Math.round(r*10)/10}K`}if(n.endsWith("M")){const r=Number.parseFloat(n)+.1;return`${Math.round(r*10)/10}M`}return String(Number.parseInt(n,10)+1)}const E2=({playbackId:e,metadata:n,itemIndex:r,preload:u,registerPlayer:c,onToggleMute:f,isMuted:h,onRequestFullscreen:v,onScrollPrev:B,onScrollNext:R,onShare:O,isActive:A})=>{const M=F.useRef(null),G=F.useRef(null),[Y,U]=F.useState(!1),[Q,x]=F.useState(!1),[E,_]=F.useState(0),[q,I]=F.useState(!1),[J,tt]=F.useState(!1),[vt,Bt]=F.useState("#5D09C7"),[ie,zt]=F.useState([]),[Dt,Z]=F.useState([]),[et,ot]=F.useState(!1),[T,H]=F.useState("");F.useEffect(()=>{const N=M.current;if(!N||G.current)return;const j=document.createElement("fastpix-player");return j.setAttribute("playback-id",e),j.setAttribute("autoplay-shorts",""),j.setAttribute("muted",""),j.setAttribute("loop",""),j.setAttribute("disable-keyboard-controls",""),j.setAttribute("preload",u),j.setAttribute("hide-native-subtitles",""),j.style.width="100%",j.style.height="100%",j.style.objectFit="cover",N.appendChild(j),G.current=j,G.current?.video&&G.current.video.setAttribute("playback-rate","3"),c(r,j),()=>{c(r,null);try{typeof j.destroy=="function"&&j.destroy()}catch{}j.remove(),G.current=null}},[e,r,c]),F.useEffect(()=>{const N=G.current;N&&(N.setAttribute("preload",u),N.video&&(N.video.preload=u))},[u]),F.useEffect(()=>{const N=()=>{const j=document;I(!!j.fullscreenElement||!!j.webkitFullscreenElement)};return document.addEventListener("fullscreenchange",N),document.addEventListener("webkitfullscreenchange",N),()=>{document.removeEventListener("fullscreenchange",N),document.removeEventListener("webkitfullscreenchange",N)}},[]),F.useEffect(()=>{const j=G.current?.video;if(!j)return;const Ht=()=>tt(!0),_t=()=>tt(!1);return tt(!j.paused),j.addEventListener("play",Ht),j.addEventListener("pause",_t),()=>{j.removeEventListener("play",Ht),j.removeEventListener("pause",_t)}},[e]),F.useEffect(()=>{const N=G.current;if(!N||!A){H("");return}const j=Ht=>{const _t=Ht.detail??{},It=_t.text??"";console.log("[fastpixsubtitlecue]",{text:It,language:_t.language,startTime:_t.startTime,endTime:_t.endTime,playbackId:e}),H(It)};return N.addEventListener("fastpixsubtitlecue",j),()=>{N.removeEventListener("fastpixsubtitlecue",j)}},[e,A]),F.useEffect(()=>{const N=G.current;if(!N)return;const j=()=>{const _t=N.getAttribute("accent-color");if(_t){Bt(_t);return}const It=getComputedStyle(N).getPropertyValue("--accent-color").trim();It&&Bt(It)};j();const Ht=setTimeout(j,100);return()=>clearTimeout(Ht)},[e]),F.useEffect(()=>{const j=G.current?.video;if(!j)return;const Ht=()=>{const Ye=j.duration;Ye>0&&Number.isFinite(Ye)?_(j.currentTime/Ye*100):_(0)};let _t=null;const It=()=>{Ht(),_t=requestAnimationFrame(It)},Oe=()=>{_t??=requestAnimationFrame(It)},Be=()=>{_t!=null&&(cancelAnimationFrame(_t),_t=null),Ht()};return Ht(),j.addEventListener("play",Oe),j.addEventListener("playing",Oe),j.addEventListener("pause",Be),j.addEventListener("ended",Be),j.addEventListener("seeking",Ht),j.addEventListener("seeked",Ht),()=>{_t!=null&&cancelAnimationFrame(_t),j.removeEventListener("play",Oe),j.removeEventListener("playing",Oe),j.removeEventListener("pause",Be),j.removeEventListener("ended",Be),j.removeEventListener("seeking",Ht),j.removeEventListener("seeked",Ht)}},[]),F.useEffect(()=>{const N=G.current;if(!N)return;const j=()=>N.getAudioTracks?.()??[],Ht=()=>N.getSubtitleTracks?.()??[],_t=ba=>{const ne=ba.detail??{},re=ne.audioTracks??j(),Ne=ne.subtitleTracks??Ht();console.log("[fastpixtracksready]",{playbackId:e,detail:ne,audioTracks:Array.isArray(re)?re:[],subtitleTracks:Array.isArray(Ne)?Ne:[]}),zt(Array.isArray(re)?re:[]),Z(Array.isArray(Ne)?Ne:[])},It=ba=>{const re=(ba.detail??{}).tracks??j();zt(Array.isArray(re)?re:[])},Oe=ba=>{const ne=ba.detail??{},re=ne.tracks??Ht(),Ne=Array.isArray(re)?re:[];Z(Ne),ne.currentTrack||Ne.some(cn=>cn?.isCurrent)||H("")};N.addEventListener("fastpixtracksready",_t),N.addEventListener("fastpixaudiochange",It),N.addEventListener("fastpixsubtitlechange",Oe);const Be=j();Be.length&&zt(Be);const Ye=Ht();return Ye.length&&Z(Ye),()=>{N.removeEventListener("fastpixtracksready",_t),N.removeEventListener("fastpixaudiochange",It),N.removeEventListener("fastpixsubtitlechange",Oe)}},[e]);const P=ie.length>1,yt=Dt.length>0,dt=Dt.find(N=>N.isCurrent)??null,Ft=N=>{G.current?.setAudioTrack?.(N)},Et=N=>{const j=G.current;if(j){if(N==null){typeof j.disableAllSubtitles=="function"?j.disableAllSubtitles():typeof j.setSubtitleTrack=="function"&&j.setSubtitleTrack(null),H("");return}typeof j.setSubtitleTrack=="function"&&j.setSubtitleTrack(N)}},ft=Y?B2(n.likes):n.likes,Rt={width:40,height:40,borderRadius:"50%",border:"none",background:"rgba(0,0,0,0.4)",color:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",padding:0};return z.jsx("div",{style:{width:"100%",height:"100vh",flexShrink:0,scrollSnapAlign:"start",scrollSnapStop:"always",padding:"10px 8px",boxSizing:"border-box",background:"transparent"},children:z.jsxs("div",{className:"short-item",style:{position:"relative",width:"100%",height:"100%",background:"#000",borderRadius:16,overflow:"hidden"},children:[z.jsx("div",{ref:M,style:{position:"absolute",inset:0}}),z.jsxs("div",{style:{position:"absolute",top:24,left:0,right:0,height:48,zIndex:2,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px",boxSizing:"border-box",pointerEvents:"none"},children:[z.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,pointerEvents:"auto"},children:[z.jsx("button",{type:"button",onClick:N=>{N.stopPropagation();const j=G.current?.video;j&&(j.paused?j.play():j.pause())},"aria-label":J?"Pause":"Play",style:Rt,children:J?z.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",stroke:"none",children:[z.jsx("rect",{x:"6",y:"4",width:"4",height:"16",rx:"1"}),z.jsx("rect",{x:"14",y:"4",width:"4",height:"16",rx:"1"})]}):z.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",stroke:"none",children:z.jsx("path",{d:"M8 5v14l11-7z"})})}),z.jsx("button",{type:"button",onClick:N=>{N.stopPropagation(),f?.()},"aria-label":h?"Unmute":"Mute",style:Rt,children:h?z.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[z.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),z.jsx("line",{x1:"23",y1:"9",x2:"17",y2:"15"}),z.jsx("line",{x1:"17",y1:"9",x2:"23",y2:"15"})]}):z.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[z.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),z.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"})]})})]}),z.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,pointerEvents:"auto"},children:[z.jsx("button",{type:"button",onClick:N=>{N.stopPropagation(),v?.()},"aria-label":q?"Exit fullscreen":"Fullscreen",style:{...Rt,justifyContent:"center",alignItems:"center"},children:z.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{transform:q?"rotate(180deg)":"none"},children:[z.jsx("polyline",{points:"15 3 21 3 21 9"}),z.jsx("polyline",{points:"9 21 3 21 3 15"}),z.jsx("line",{x1:"21",y1:"3",x2:"14",y2:"10"}),z.jsx("line",{x1:"3",y1:"21",x2:"10",y2:"14"})]})}),(P||yt)&&z.jsxs("div",{style:{position:"relative"},children:[z.jsx("button",{type:"button",onClick:N=>{N.stopPropagation(),ot(j=>!j)},"aria-label":"Track settings",style:Rt,children:z.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",stroke:"none",children:[z.jsx("circle",{cx:"5",cy:"12",r:"1.6"}),z.jsx("circle",{cx:"12",cy:"12",r:"1.6"}),z.jsx("circle",{cx:"19",cy:"12",r:"1.6"})]})}),et&&z.jsxs("div",{style:{position:"absolute",top:48,right:0,minWidth:180,padding:"8px 10px",borderRadius:10,background:"rgba(0,0,0,0.85)",border:"1px solid rgba(255,255,255,0.1)",boxShadow:"0 8px 16px rgba(0,0,0,0.6)",display:"flex",flexDirection:"column",gap:6,pointerEvents:"auto"},children:[P&&z.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[z.jsx("div",{style:{fontSize:11,textTransform:"uppercase",letterSpacing:.5,color:"rgba(255,255,255,0.6)"},children:"Audio"}),z.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4},children:ie.map(N=>z.jsxs("button",{type:"button",onClick:()=>{Ft(N.label),ot(!1)},style:{padding:"3px 6px",borderRadius:8,border:N.isCurrent?"2px solid rgba(255,255,255,0.9)":"1px solid rgba(255,255,255,0.4)",background:N.isCurrent?"rgba(255,255,255,0.12)":"transparent",color:"#fff",fontSize:11},children:[N.label,N.language?` (${N.language})`:""]},N.id))})]}),yt&&z.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[z.jsx("div",{style:{fontSize:11,textTransform:"uppercase",letterSpacing:.5,color:"rgba(255,255,255,0.6)",marginTop:P?4:0},children:"Subtitles"}),z.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:4},children:[z.jsx("button",{type:"button",onClick:()=>{Et(null),ot(!1)},style:{padding:"3px 6px",borderRadius:8,border:dt?"1px solid rgba(255,255,255,0.4)":"2px solid rgba(255,255,255,0.9)",background:dt?"transparent":"rgba(255,255,255,0.12)",color:"#fff",fontSize:11},children:"Off"}),Dt.map(N=>z.jsxs("button",{type:"button",onClick:()=>{Et(N.label),ot(!1)},style:{padding:"3px 6px",borderRadius:8,border:N.isCurrent?"2px solid rgba(255,255,255,0.9)":"1px solid rgba(255,255,255,0.4)",background:N.isCurrent?"rgba(255,255,255,0.12)":"transparent",color:"#fff",fontSize:11},children:[N.label,N.language?` (${N.language})`:""]},N.id))]})]})]})]})]})]}),z.jsxs("div",{style:{position:"absolute",bottom:24,left:16,right:72,zIndex:2,userSelect:"none"},children:[z.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:6,flexWrap:"wrap"},children:[z.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:6,pointerEvents:"none"},children:[z.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:"linear-gradient(135deg, #b16cea 0%, #5d09c7 100%)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:700,color:"#fff",flexShrink:0},children:n.creator.charAt(0).toUpperCase()}),z.jsxs("span",{style:{color:"#fff",fontWeight:700,fontSize:14},children:["@",n.creator]})]}),z.jsx("button",{type:"button",onClick:()=>x(N=>!N),style:{pointerEvents:"auto",padding:"6px 0",width:120,borderRadius:18,border:"none",background:"rgba(255,255,255,0.2)",color:"#fff",fontWeight:600,fontSize:13,cursor:"pointer",textAlign:"center",transition:"background 0.2s, color 0.2s, transform 0.15s"},children:Q?"Following":"Subscribe"})]}),z.jsx("p",{style:{margin:0,color:"rgba(255,255,255,0.9)",fontSize:13,lineHeight:1.4,textShadow:"0 1px 4px rgba(0,0,0,0.8)",pointerEvents:"none"},children:n.title})]}),T&&z.jsx("div",{style:{position:"absolute",left:"50%",bottom:"100px",transform:"translateX(-50%)",maxWidth:"80%",padding:"6px 12px",borderRadius:10,background:"rgba(0, 0, 0, 0.75)",color:"#fff",fontSize:14,lineHeight:1.4,textAlign:"center",pointerEvents:"none",zIndex:3,boxShadow:"0 4px 12px rgba(0,0,0,0.6)"},children:T}),z.jsx("div",{style:{position:"absolute",bottom:0,left:20,right:20,height:3,zIndex:3,background:"rgba(255,255,255,0.2)",pointerEvents:"none",borderRadius:"0 0 16px 16px"},children:z.jsx("div",{style:{height:"100%",width:`${E}%`,background:vt,borderRadius:"inherit",transition:"none"}})}),z.jsxs("div",{style:{position:"absolute",right:12,bottom:32,zIndex:2,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",gap:16},children:[z.jsx("button",{type:"button",onClick:N=>{N.stopPropagation(),B?.()},"aria-label":"Previous short",style:{width:44,height:44,borderRadius:"50%",background:"rgba(255,255,255,0.15)",backdropFilter:"blur(10px)",border:"1.5px solid rgba(255,255,255,0.2)",color:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:z.jsx("span",{style:{fontSize:18},children:"↑"})}),z.jsx("button",{type:"button",onClick:N=>{N.stopPropagation(),R?.()},"aria-label":"Next short",style:{width:44,height:44,borderRadius:"50%",background:"rgba(255,255,255,0.15)",backdropFilter:"blur(10px)",border:"1.5px solid rgba(255,255,255,0.2)",color:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:z.jsx("span",{style:{fontSize:18},children:"↓"})}),z.jsx(mu,{icon:"♥",label:ft,active:Y,onClick:()=>U(N=>!N)}),z.jsx(mu,{useShareIcon:!0,label:"Share",onClick:()=>O?.(e,n)}),z.jsx(mu,{icon:Q?"✓":"+",label:Q?"Following":"Follow",active:Q,onClick:()=>x(N=>!N)})]})]})})},xh=performance.now(),_2=160;function k2(e,n){return e===n?"auto":Math.abs(e-n)===1?"metadata":"none"}function A2(){const[e,n]=F.useState(0),[r,u]=F.useState(!0),c=F.useRef(null),f=F.useRef(!1),h=F.useRef(0),v=F.useRef(!0),B=F.useRef({}),R=F.useRef(null),O=F.useRef(!1),A=F.useRef(null),M=F.useRef(null),G=F.useRef(!1),Y=F.useRef(null);F.useEffect(()=>{h.current=e},[e]),F.useEffect(()=>{v.current=r},[r]);const U=F.useCallback(()=>{f.current||(f.current=!0)},[]),Q=F.useCallback((Z,et)=>{et?B.current[Z]=et:delete B.current[Z]},[]),x=F.useCallback((Z,et)=>{const ot=()=>{h.current===et&&Z.play?.()?.catch?.(()=>{})};Z.play?.()?.catch?.(()=>requestAnimationFrame(ot))},[]),E=F.useCallback((Z,et={})=>{const{resetTime:ot=!0,force:T=!1}=et;if(!T&&Y.current===Z)return;Object.entries(B.current).forEach(([P,yt])=>{const dt=yt;dt&&Number(P)!==Z&&(dt.mute?.(),dt.pause?.())});const H=B.current[Z];if(H){if(ot&&H.video&&(H.video.currentTime=0),!f.current||v.current?H.mute?.():H.unmute?.(),x(H,Z),!G.current){G.current=!0;const P=performance.now();console.log("[perf] First short started playing:",(P-xh).toFixed(1),"ms since load (index",Z,")")}Y.current=Z}},[x]),_=F.useCallback(()=>{const Z=B.current[h.current];Z&&(r?(U(),Z.unmute?.(),x(Z,h.current),u(!1)):(Z.mute?.(),u(!0)))},[U,r,x]),q=F.useCallback(()=>{const Z=c.current;if(!Z)return;const et=document,T=et.fullscreenElement??et.webkitFullscreenElement?(et.exitFullscreen||et.webkitExitFullscreen)?.call(et):(Z.requestFullscreen||Z.webkitRequestFullscreen)?.call(Z);Promise.resolve(T).catch(H=>{console.warn("Fullscreen not supported",H)})},[]),I=F.useCallback(Z=>{const et=Math.max(0,Math.min(Z,hi.length-1)),ot=c.current;if(!ot)return;R.current?.();const T=ot.scrollTop,H=et*globalThis.innerHeight;h.current=et,n(et),E(et),T!==H&&ot.scrollTo({top:H,behavior:"smooth"})},[E]),J=F.useCallback(()=>{I(h.current-1)},[I]),tt=F.useCallback(()=>{I(h.current+1)},[I]),vt=F.useCallback((Z,et)=>{const ot=`${globalThis.location.origin}${globalThis.location.pathname}${globalThis.location.search}#short/${Z}`,T=et?.title?`${et.title} | @${et?.creator??""}`:"Short",H=et?.title??T;typeof navigator.share=="function"?navigator.share({title:T,text:H,url:ot}).catch(()=>{navigator.clipboard?.writeText(ot).catch(()=>{})}):navigator.clipboard?.writeText(ot).catch(()=>{})},[]),Bt=F.useCallback(()=>{M.current&&clearTimeout(M.current),M.current=setTimeout(()=>{const Z=c.current;if(!Z)return;const et=Math.round(Z.scrollTop/globalThis.innerHeight),ot=Math.max(0,Math.min(et,hi.length-1));ot!==h.current&&(h.current=ot,n(ot),E(ot))},80)},[E]),ie=F.useCallback(Z=>{A.current&&clearTimeout(A.current),A.current=setTimeout(()=>{O.current=!1},_2),!O.current&&Z.deltaY!==0&&(O.current=!0,I(h.current+(Z.deltaY>0?1:-1)))},[I]),zt=F.useCallback(Z=>{Z.key!=="ArrowDown"&&Z.key!=="ArrowUp"||(Z.preventDefault(),I(h.current+(Z.key==="ArrowDown"?1:-1)))},[I]),Dt=F.useCallback(Z=>{Z.target.closest?.("fastpix-player")||E(h.current,{resetTime:!1})},[E]);return F.useEffect(()=>{const Z=performance.now();console.log("[perf] ShortsApp first render:",(Z-xh).toFixed(1),"ms since load")},[]),F.useEffect(()=>{const Z=()=>{const et=c.current;et&&(et.scrollTop=h.current*globalThis.innerHeight)};return globalThis.addEventListener("resize",Z),()=>globalThis.removeEventListener("resize",Z)},[]),F.useEffect(()=>{const Z=c.current;if(Z)return Z.addEventListener("wheel",ie,{passive:!1}),()=>Z.removeEventListener("wheel",ie)},[ie]),F.useEffect(()=>{const Z=c.current;if(Z)return Z.addEventListener("scroll",Bt,{passive:!0}),()=>Z.removeEventListener("scroll",Bt)},[Bt]),F.useEffect(()=>{const Z=c.current;if(Z)return Z.addEventListener("click",Dt),()=>Z.removeEventListener("click",Dt)},[Dt]),F.useEffect(()=>(globalThis.addEventListener("keydown",zt),()=>globalThis.removeEventListener("keydown",zt)),[zt]),F.useEffect(()=>()=>{R.current?.(),A.current&&clearTimeout(A.current),M.current&&clearTimeout(M.current)},[]),z.jsxs("div",{style:{width:"100vw",height:"100dvh",display:"flex",justifyContent:"center",overflow:"hidden",background:"#000"},children:[z.jsx("style",{precedence:"default",href:"shorts-styles",children:`
        .shorts-scroll::-webkit-scrollbar { display: none; }
        .shorts-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        .shorts-scroll:fullscreen,
        .shorts-scroll:-webkit-full-screen {
          width: 100vw;
          height: 100dvh;
          background: #000;
        }
        .short-item fastpix-player {
          --aspect-ratio: 9/16;
          --player-border-radius: 16px;
        }
      `}),z.jsx("div",{style:{position:"relative",width:"min(100vw, 56.25vh)",height:"100dvh"},children:z.jsx("div",{ref:c,className:"shorts-scroll",style:{width:"100%",height:"100%",overflowY:"scroll",overflowX:"hidden",scrollSnapType:"y mandatory"},children:z.jsx("div",{style:{position:"relative",height:`${hi.length*100}vh`},children:(()=>{const et=Math.max(0,e-2),ot=Math.min(hi.length-1,e+2);return hi.slice(et,ot+1).map((T,H)=>{const P=et+H;return z.jsx("div",{style:{position:"absolute",top:`${P*100}vh`,left:0,right:0,height:"100vh"},children:z.jsx(E2,{playbackId:T.id,metadata:T,itemIndex:P,preload:k2(P,e),registerPlayer:Q,onToggleMute:_,isMuted:r,onRequestFullscreen:q,onScrollPrev:J,onScrollNext:tt,onShare:vt,isActive:P===e})},T.id)})})()})})}),z.jsxs("div",{style:{position:"fixed",top:0,left:0,right:0,zIndex:10,display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 20px",background:"linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)",pointerEvents:"none"},children:[z.jsx("div",{style:{display:"flex",alignItems:"center",gap:8},children:z.jsx("img",{src:"https://dashboard.fastpix.io/images/fastpix.png",alt:"FastPix",style:{height:24,width:"auto",objectFit:"contain"}})}),z.jsx("div",{style:{display:"flex",alignItems:"center",gap:8,pointerEvents:"auto"},children:z.jsx("div",{style:{padding:"4px 10px",borderRadius:20,background:"rgba(255,255,255,0.15)",backdropFilter:"blur(8px)",border:"1px solid rgba(255,255,255,0.2)"},children:z.jsxs("span",{style:{color:"#fff",fontSize:12,fontWeight:600,letterSpacing:"0.04em"},children:[e+1," ",z.jsxs("span",{style:{opacity:.5},children:["/ ",hi.length]})]})})})]}),z.jsx("div",{style:{position:"fixed",right:20,top:"50%",transform:"translateY(-50%)",display:"flex",flexDirection:"column",gap:6,pointerEvents:"none",zIndex:10},children:hi.map((Z,et)=>z.jsx("div",{style:{width:4,height:et===e?24:8,borderRadius:4,background:et===e?"#b16cea":"rgba(255,255,255,0.35)",transition:"height 0.25s ease, background 0.25s ease"}},Z.id))})]})}const wm=document.getElementById("root");if(!wm)throw new Error('Root element "#root" was not found in the document.');$v.createRoot(wm).render(z.jsx(F.StrictMode,{children:z.jsx(A2,{})}));
