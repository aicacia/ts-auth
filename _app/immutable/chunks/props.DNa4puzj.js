import{X as G,Y as q,n as T,A as F,w as f,O as Z,Q as O,Z as $,_ as z,a0 as K,a1 as H,u as D,a2 as L,a3 as d,S as N,a4 as y,a5 as Q,a6 as V,a7 as g,a8 as X,K as J,a9 as W,aa as k,y as B,ab as ee,R as C,ac as re}from"./runtime.DCDhZAS9.js";import{p as ne}from"./proxy.B60m95XX.js";import{s as se}from"./utils.BiFMrRj3.js";let v=!1;function ce(e,r,s){const n=s[r]??(s[r]={store:null,source:q(void 0),unsubscribe:T});if(n.store!==e)if(n.unsubscribe(),n.store=e,e==null)n.source.v=void 0,n.unsubscribe=T;else{var i=!0;n.unsubscribe=se(e,a=>{i?n.source.v=a:F(n.source,a)}),i=!1}return f(n.source)}function pe(){const e={};return G(()=>{for(var r in e)e[r].unsubscribe()}),e}function ue(e){var r=v;try{return v=!1,[e(),v]}finally{v=r}}const ie={get(e,r){if(!e.exclude.includes(r))return f(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,s){return r in e.special||(e.special[r]=te({get[r](){return e.props[r]}},r,K)),e.special[r](s),L(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),L(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function _e(e,r){return new Proxy({props:e,exclude:r,special:{},version:Z(0)},ie)}const ae={get(e,r){let s=e.props.length;for(;s--;){let n=e.props[s];if(d(n)&&(n=n()),typeof n=="object"&&n!==null&&r in n)return n[r]}},set(e,r,s){let n=e.props.length;for(;n--;){let i=e.props[n];d(i)&&(i=i());const a=O(i,r);if(a&&a.set)return a.set(s),!0}return!1},getOwnPropertyDescriptor(e,r){let s=e.props.length;for(;s--;){let n=e.props[s];if(d(n)&&(n=n()),typeof n=="object"&&n!==null&&r in n){const i=O(n,r);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,r){if(r===N||r===y)return!1;for(let s of e.props)if(d(s)&&(s=s()),s!=null&&r in s)return!0;return!1},ownKeys(e){const r=[];for(let s of e.props){d(s)&&(s=s());for(const n in s)r.includes(n)||r.push(n)}return r}};function de(...e){return new Proxy({props:e},ae)}function Y(e){for(var r=C,s=C;r!==null&&!(r.f&(Q|V));)r=r.parent;try{return g(r),e()}finally{g(s)}}function te(e,r,s,n){var A;var i=(s&X)!==0,a=!J||(s&W)!==0,b=(s&k)!==0,M=(s&re)!==0,R=!1,l;b?[l,R]=ue(()=>e[r]):l=e[r];var U=N in e||y in e,p=b&&(((A=O(e,r))==null?void 0:A.set)??(U&&r in e&&(u=>e[r]=u)))||void 0,t=n,P=!0,h=!1,I=()=>(h=!0,P&&(P=!1,M?t=D(n):t=n),t);l===void 0&&n!==void 0&&(p&&a&&$(),l=I(),p&&p(l));var o;if(a)o=()=>{var u=e[r];return u===void 0?I():(P=!0,h=!1,u)};else{var m=Y(()=>(i?B:ee)(()=>e[r]));m.f|=z,o=()=>{var u=f(m);return u!==void 0&&(t=void 0),u===void 0?t:u}}if(!(s&K))return o;if(p){var j=e.$$legacy;return function(u,c){return arguments.length>0?((!a||!c||j||R)&&p(c?o():u),u):o()}}var w=!1,x=!1,S=q(l),_=Y(()=>B(()=>{var u=o(),c=f(S);return w?(w=!1,x=!0,c):(x=!1,S.v=u)}));return i||(_.equals=H),function(u,c){if(arguments.length>0){const E=c?f(_):a&&b?ne(u):u;return _.equals(E)||(w=!0,F(S,E),h&&t!==void 0&&(t=E),D(()=>f(_))),u}return f(_)}}export{pe as a,ce as b,_e as l,te as p,de as s};
