import{b as f}from"../chunks/paths.eUxvDbcf.js";import{E as u,i as c}from"../chunks/user.KYivON0R.js";import{r as d}from"../chunks/index.qPAo0Isn.js";import{P as p,a as m}from"../chunks/index.meplm-_N.js";import{h as _}from"../chunks/errors.21Pt_TCp.js";import{d as g,w as h}from"../chunks/index.ltnQeb78.js";import{g as M,s as U,d as b,u as w,f as $,h as v}from"../chunks/utils.C9MzFJhm.js";import{S as y,i as P,d as S,t as I}from"../chunks/index.Cgbm_bxH.js";const r=h({enabled:!1,password:!1}),i=new u;let l=!1;const E=g(r,e=>e);function L(){return l?Promise.resolve(M(E)):new Promise(e=>i.once("signUpMethods",e))}async function A(){try{const e=await m.signUpMethods(p);r.set(e),l=!0,i.emit("signUpMethods",e)}catch(e){await _(e)}}A();const C=async()=>{const e=await L();if(c())d(302,`${f}/`);else return{signUpMethods:e}},k=Object.freeze(Object.defineProperty({__proto__:null,load:C},Symbol.toStringTag,{value:"Module"}));function O(e){let o;const a=e[1].default,s=b(a,e,e[0],null);return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,n){s&&s.m(t,n),o=!0},p(t,[n]){s&&s.p&&(!o||n&1)&&w(s,a,t,t[0],o?v(a,t[0],n,null):$(t[0]),null)},i(t){o||(S(s,t),o=!0)},o(t){I(s,t),o=!1},d(t){s&&s.d(t)}}}function j(e,o,a){let{$$slots:s={},$$scope:t}=o;return e.$$set=n=>{"$$scope"in n&&a(0,t=n.$$scope)},[t,s]}class G extends y{constructor(o){super(),P(this,o,j,O,U,{})}}export{G as component,k as universal};
