import{a as z,t as M}from"../chunks/disclose-version.CyzBF5DE.js";import{p as re,z as b,t as v,a as se,w as e,A as i,$ as ie,c as a,r,s as m,y as g}from"../chunks/runtime.DCDhZAS9.js";import{d as le,h as ne,e as de,s as D}from"../chunks/render.GuxJiPpJ.js";import{i as oe}from"../chunks/if.CrJYGNN5.js";import{c as j,e as E,r as R,a as T,d as ce,f as ue}from"../chunks/messages.DrdQHzfr.js";import{d as ve,s as V}from"../chunks/debounce.B0m-GfvZ.js";import{I as F,b as H,G as me,m as fe,C as J,v as K,S as pe,h as _e,a as he}from"../chunks/InputResults.ChgnQGK3.js";import{p as x}from"../chunks/proxy.B60m95XX.js";import{g as be}from"../chunks/entry.BSPsT9s3.js";import{b as ge}from"../chunks/paths.DBv2nKNz.js";import{s as xe}from"../chunks/token.svelte.CwleyiSZ.js";const we=()=>me((l={},n)=>{n.length&&(fe(n),J("clientId",E(),()=>{K(l.clientId).isNotBlank()}),J("clientSecret",E(),()=>{K(l.clientSecret).isNotBlank()}))});function L(l,n,s){n.add(l.currentTarget.name),s()}var ye=M('<div class="mr-2 flex flex-row justify-center"><div class="inline-block h-6 w-6"><!></div></div>'),Se=M('<div class="flex flex-grow flex-col justify-end p-4 sm:justify-start"><div class="card mx-auto my-10 flex w-full flex-shrink flex-col sm:w-72"><h1 class="mb-1"> </h1> <form><div class="mb-2"><input type="text" name="clientId" autocomplete="username"> <!></div> <div class="mb-2"><input type="password" name="clientSecret" autocomplete="current-password"> <!></div> <div class="flex flex-row justify-end"><button type="submit" class="btn primary flex flex-shrink"><!> </button></div></form></div></div>');function De(l,n){re(n,!0);let s=b(""),d=b(""),A=we(),f=b(x(A.get())),_=b(!1),O=g(()=>e(_)),C=g(()=>he(e(f),{untested:"untested",tested:"tested",invalid:"invalid",valid:"valid",warning:"warning"}));const o=new Set,h=ve(()=>{A({clientId:e(s),clientSecret:e(d)},Array.from(o)).done(t=>{i(f,x(t))}),o.clear()},300);function P(){o.add("clientId"),o.add("clientSecret"),h(),h.flush()}async function Q(t){t.preventDefault();try{i(_,!0),i(s,x(e(s).trim())),i(d,x(e(d).trim())),P(),e(f).isValid()&&(await xe(e(s),e(d)),await be(`${ge}/`))}catch(p){await _e(p)}finally{i(_,!1)}}var w=Se();ne(t=>{v(()=>ie.title=j())});var B=a(w),y=a(B),U=a(y,!0);v(()=>D(U,j())),r(y);var S=m(y,2),I=a(S),c=a(I);R(c);const W=g(()=>`w-full ${e(C)("clientId")??""}`);v(()=>T(c,"placeholder",ce())),c.__input=[L,o,h];var X=m(c,2);F(X,{name:"clientId",get result(){return e(f)}}),r(I);var $=m(I,2),u=a($);R(u);const Y=g(()=>`w-full ${e(C)("clientSecret")??""}`);v(()=>T(u,"placeholder",ue())),u.__input=[L,o,h];var Z=m(u,2);F(Z,{name:"clientSecret",get result(){return e(f)}}),r($);var G=m($,2),k=a(G),N=a(k);{var ee=t=>{var p=ye(),q=a(p),ae=a(q);pe(ae),r(q),r(p),z(t,p)};oe(N,t=>{e(_)&&t(ee)})}var te=m(N);v(()=>D(te,` ${j()??""}`)),r(k),r(G),r(S),r(B),r(w),v(()=>{V(c,e(W)),V(u,e(Y)),k.disabled=e(O)}),de("submit",S,Q),H(c,()=>e(s),t=>i(s,t)),H(u,()=>e(d),t=>i(d,t)),z(l,w),se()}le(["input"]);export{De as component};
