import{a as $,t as S,c as qt}from"../chunks/disclose-version.DajeB4c4.js";import{p as L,x as k,y as s,j as t,t as o,a as V,c as a,s as l,r as e,l as F,f as nt,ah as ce,$ as pe}from"../chunks/runtime.C60yeaJP.js";import{d as ot,e as gt,s as x,h as fe}from"../chunks/render.BbZuB7Dm.js";import{p as C}from"../chunks/proxy.B95Q3zQB.js";import{p as it,b as _e}from"../chunks/props.DztJVflq.js";import{d as Rt,e as xt,r as Ut,s as W,b as Zt,O as me,P as be,q as he,Q as ge,R as xe,S as ye,T as we,y as ke,z as Ae,U as $e,V as Ce,W as je,X as Se,Y as Ee,Z as De,_ as Te,$ as Ie,a0 as Pe,a1 as Me,a2 as Oe,a3 as Fe,a4 as Ne}from"../chunks/debounce.C_WMaB_z.js";import{i as X}from"../chunks/runtime.Cwx_xcDz.js";import{o as zt}from"../chunks/index-client.ClR-EJ5X.js";import{g as Be,D as Le}from"../chunks/Dropdown.BnBMSDuX.js";import{a as dt}from"../chunks/index.u_6ZM-6x.js";import{b as mt}from"../chunks/paths.BR2SyuFJ.js";import{M as bt,P as Ve,T as qe,E as Ge,a as Re}from"../chunks/Modal.CUdo-sfi.js";import{I as Qt,b as Wt,G as yt,m as wt,C as st,v as lt,a as Xt,S as kt,h as At}from"../chunks/InputResults.DOY8a8ew.js";import{E as ht}from"../chunks/external-link.CcEfDvgN.js";const Ue=()=>yt((u={},r)=>{r.length&&(wt(r),st("name",xt(),()=>{lt(u.name).isNotBlank()}))});function Ze(u,r,n){r.add(u.currentTarget.name),n()}var ze=S('<div class="mb-2"><input type="text" name="name"> <!></div>');function Yt(u,r){L(r,!0);let n=it(r,"name",15),y=it(r,"valid",15,!1),c=Ue(),p=k(C(c.get())),E=F(()=>Xt(t(p),{untested:"untested",tested:"tested",invalid:"invalid",valid:"valid",warning:"warning"}));const h=new Set,g=Rt(()=>{c({name:n()},Array.from(h)).done(_=>{s(p,C(_)),y(t(p).isValid())}),h.clear()},300);function w(){h.add("name"),g(),g.flush()}zt(w);var m=ze(),f=a(m);Ut(f);const D=F(()=>`w-full ${t(E)("name")??""}`);o(()=>W(f,"placeholder",me())),f.__input=[Ze,h,g];var P=l(f,2);Qt(P,{name:"name",get result(){return t(p)}}),e(m),o(()=>Zt(f,t(D))),Wt(f,n),$(u,m),V()}ot(["input"]);const Qe=()=>yt((u={},r)=>{r.length&&(wt(r),st("name",xt(),()=>{lt(u.name).isNotBlank()}))});var We=S('<div class="mr-2 flex flex-row justify-center"><div class="inline-block h-6 w-6"><!></div></div>'),Xe=S('<form><!> <div class="flex flex-row justify-end"><button type="submit" class="btn primary flex flex-shrink"><!> </button></div></form>');function Ye(u,r){L(r,!0);let n=k(""),y=Qe();C(y.get());let c=k(!1),p=k(!1),E=F(()=>t(p)||!t(c));async function h(d){d.preventDefault();try{s(p,!0),t(c)&&r.onCreate(await dt.createApplication({name:t(n)}))}catch(A){await At(A)}finally{s(p,!1)}}var g=Xe(),w=a(g);Yt(w,{get name(){return t(n)},set name(d){s(n,C(d))},get valid(){return t(c)},set valid(d){s(c,C(d))}});var m=l(w,2),f=a(m),D=a(f);{var P=d=>{var A=We(),N=a(A),q=a(N);kt(q),e(N),e(A),$(d,A)};X(D,d=>{t(p)&&d(P)})}var _=l(D);o(()=>x(_,` ${be()??""}`)),e(f),e(m),e(g),o(()=>f.disabled=t(E)),gt("submit",g,h),$(u,g),V()}const He=()=>yt((u={},r)=>{r.length&&(wt(r),st("nameConfirm",xt(),()=>{lt(u.nameConfirm).isNotBlank()}),st("nameConfirm",he(),()=>{lt(u.name===u.nameConfirm).isTruthy()}))});function Je(u,r,n){r.add(u.currentTarget.name),n()}var Ke=S('<div class="mr-2 flex flex-row justify-center"><div class="inline-block h-6 w-6"><!></div></div>'),ta=S('<form><p> </p> <div class="mb-2"><input type="text" name="nameConfirm"> <!></div> <div class="flex flex-row justify-end"><button type="submit" class="btn danger flex flex-shrink"><!> </button></div></form>');function ea(u,r){L(r,!0);let n=k(""),y=He(),c=k(C(y.get())),p=k(!1),E=F(()=>t(p)),h=F(()=>Xt(t(c),{untested:"untested",tested:"tested",invalid:"invalid",valid:"valid",warning:"warning"}));const g=new Set,w=Rt(()=>{y({name:r.name,nameConfirm:t(n)},Array.from(g)).done(I=>{s(c,C(I))}),g.clear()},300);function m(){g.add("name"),w(),w.flush()}async function f(I){I.preventDefault();try{s(p,!0),s(n,C(t(n).trim())),m(),t(c).isValid()&&(await dt.deleteApplication(r.applicationId),r.onDelete())}catch(O){await At(O)}finally{s(p,!1)}}var D=ta(),P=a(D),_=a(P,!0);o(()=>x(_,xe())),e(P);var d=l(P,2),A=a(d);Ut(A);const N=F(()=>`w-full ${t(h)("nameConfirm")??""}`);o(()=>W(A,"placeholder",ge({name:r.name}))),A.__input=[Je,g,w];var q=l(A,2);Qt(q,{name:"nameConfirm",get result(){return t(c)}}),e(d);var B=l(d,2),Y=a(B),G=a(Y);{var R=I=>{var O=Ke(),H=a(O),Z=a(H);kt(Z),e(H),e(O),$(I,O)};X(G,I=>{t(p)&&I(R)})}var U=l(G);o(()=>x(U,` ${ye()??""}`)),e(Y),e(B),e(D),o(()=>{Zt(A,t(N)),Y.disabled=t(E)}),gt("submit",D,f),Wt(A,()=>t(n),I=>s(n,I)),$(u,D),V()}ot(["input"]);var aa=S('<div class="mr-2 flex flex-row justify-center"><div class="inline-block h-6 w-6"><!></div></div>'),ra=S('<form><!> <div class="flex flex-row justify-end"><button type="submit" class="btn primary flex flex-shrink"><!> </button></div></form>');function na(u,r){L(r,!0);let n=it(r,"name",15,""),y=k(!1),c=k(!1),p=F(()=>t(c)||!t(y));async function E(_){_.preventDefault();try{s(c,!0),t(y)&&r.onEdit(await dt.updateApplication(r.applicationId,{name:n()}))}catch(d){await At(d)}finally{s(c,!1)}}var h=ra(),g=a(h);Yt(g,{get name(){return n()},set name(_){n(_)},get valid(){return t(y)},set valid(_){s(y,C(_))}});var w=l(g,2),m=a(w),f=a(m);{var D=_=>{var d=aa(),A=a(d),N=a(A);kt(N),e(A),e(d),$(_,d)};X(f,_=>{t(c)&&_(D)})}var P=l(f);o(()=>x(P,` ${we()??""}`)),e(m),e(w),e(h),o(()=>m.disabled=t(p)),gt("submit",h,E),$(u,h),V()}const Gt=20;var ia=S('<button class="btn secondary icon lg"><!></button>'),sa=S('<a class="flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"><!><span class="ms-4"> </span></a> <a class="flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"><!><span class="ms-4"> </span></a> <a class="flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"><!><span class="ms-4"> </span></a> <button class="flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"><!><span class="ms-4"> </span></button> <button class="flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"><!><span class="ms-4"> </span></button>',1),la=S('<tr class="group"><td> </td><td> </td><td> </td><td> </td><td class="flex justify-end"><div class="flex flex-shrink"><!></div></td></tr>'),oa=S("<h3> </h3>"),da=S("<h3> </h3>"),va=S("<h3> </h3>"),ua=S('<table class="table-auto w-full"><thead><tr class="text-left border-b"><th> </th><th> </th><th> </th><th> </th><th></th></tr></thead><tbody></tbody></table> <!> <!> <!>',1);function ca(u,r){L(r,!0);let n=it(r,"applications",31,()=>C([])),y=k(0),c=k(!0),p=k(!1);zt(E);async function E(){if(!t(c))return;let v;s(p,!0);try{v=await dt.allApplications(t(y)*Gt,Gt)}finally{s(p,!1)}s(c,C(v.hasMore)),s(y,t(y)+1),n().push(...v.items)}let h=k(!1);function g(){s(h,!0)}function w(v){n().unshift(v),s(h,!1)}let m=k(void 0),f=k(!1);function D(v){return()=>{s(m,C(v)),s(f,!0)}}function P(v){const i=n().findIndex(b=>b.id===(v==null?void 0:v.id));i!==-1&&n(n()[i]=v,!0),s(m,void 0),s(f,!1)}let _=k(void 0),d=k(!1);function A(v){return()=>{s(_,C(v)),s(d,!0)}}function N(){const v=n().findIndex(i=>{var b;return i.id===((b=t(_))==null?void 0:b.id)});v!==-1&&n().splice(v,1),s(_,void 0),s(d,!1)}const q=Be(),[B,Y]=q;var G=ua(),R=nt(G),U=a(R),I=a(U),O=a(I),H=a(O,!0);o(()=>x(H,je())),e(O);var Z=l(O),Ht=a(Z,!0);o(()=>x(Ht,Se())),e(Z);var vt=l(Z),Jt=a(vt,!0);o(()=>x(Jt,Ee())),e(vt);var $t=l(vt),Kt=a($t,!0);o(()=>x(Kt,De())),e($t),ce(),e(I),e(U);var Ct=l(U);ke(Ct,23,n,v=>v.id,(v,i,b)=>{var j=la(),T=a(j),z=a(T,!0);e(T);var M=l(T),ee=a(M,!0);e(M);var ut=l(M),ae=a(ut,!0);o(()=>x(ae,t(i).updatedAt.toLocaleString())),e(ut);var ct=l(ut),re=a(ct,!0);o(()=>x(re,t(i).createdAt.toLocaleString())),e(ct);var Et=l(ct),Dt=a(Et),ne=a(Dt);Le(ne,{position:"top-right",anchorPosition:"bottom-right",button:pt=>{var J=ia(),K=a(J);Ge(K,{}),e(J),$(pt,J)},children:(pt,J)=>{var K=sa(),tt=nt(K);o(()=>W(tt,"href",B(`${mt}/applications/${t(i).id}/users`,void 0)));var Tt=a(tt);ht(Tt,{});var It=l(Tt),ie=a(It,!0);o(()=>x(ie,Te())),e(It),e(tt);var et=l(tt,2);o(()=>W(et,"href",B(`${mt}/applications/${t(i).id}/service-accounts`,void 0)));var Pt=a(et);ht(Pt,{});var Mt=l(Pt),se=a(Mt,!0);o(()=>x(se,Ie())),e(Mt),e(et);var at=l(et,2);o(()=>W(at,"href",B(`${mt}/applications/${t(i).id}/tenants`,void 0)));var Ot=a(at);ht(Ot,{});var Ft=l(Ot),le=a(Ft,!0);o(()=>x(le,Pe())),e(Ft),e(at);var rt=l(at,2),oe=F(()=>D(t(i)));rt.__click=function(..._t){var Q;(Q=t(oe))==null||Q.apply(this,_t)};var Nt=a(rt);Ve(Nt,{});var Bt=l(Nt),de=a(Bt,!0);o(()=>x(de,Me())),e(Bt),e(rt);var ft=l(rt,2),ve=F(()=>A(t(i)));ft.__click=function(..._t){var Q;(Q=t(ve))==null||Q.apply(this,_t)};var Lt=a(ft);qe(Lt,{});var Vt=l(Lt),ue=a(Vt,!0);o(()=>x(ue,Oe())),e(Vt),e(ft),$(pt,K)},$$slots:{button:!0,default:!0}}),e(Dt),e(Et),e(j),o(()=>{Ae(j,"border-b",t(b)<n().length-1),x(z,t(i).id),x(ee,t(i).name)}),$(v,j)}),e(Ct),e(R);var jt=l(R,2);bt(jt,{get open(){return t(h)},set open(i){s(h,C(i))},title:i=>{var b=oa(),j=a(b,!0);o(()=>x(j,Fe())),e(b),$(i,b)},children:(i,b)=>{Ye(i,{onCreate:w})},$$slots:{title:!0,default:!0}});var St=l(jt,2);bt(St,{get open(){return t(f)},set open(i){s(f,C(i))},title:i=>{var b=da(),j=a(b,!0);o(()=>{var T;return x(j,$e({name:((T=t(m))==null?void 0:T.name)||""}))}),e(b),$(i,b)},children:(i,b)=>{var j=qt(),T=nt(j);{var z=M=>{na(M,{get applicationId(){return t(m).id},get name(){return t(m).name},onEdit:P})};X(T,M=>{t(m)&&M(z)})}$(i,j)},$$slots:{title:!0,default:!0}});var te=l(St,2);return bt(te,{get open(){return t(d)},set open(i){s(d,C(i))},title:i=>{var b=va(),j=a(b,!0);o(()=>{var T;return x(j,Ce({name:((T=t(_))==null?void 0:T.name)||""}))}),e(b),$(i,b)},children:(i,b)=>{var j=qt(),T=nt(j);{var z=M=>{ea(M,{get applicationId(){return t(_).id},get name(){return t(_).name},onDelete:N})};X(T,M=>{t(_)&&M(z)})}$(i,j)},$$slots:{title:!0,default:!0}}),$(u,G),V({onCreate:g})}ot(["click"]);var pa=S('<div class="container mx-auto my-4"><div class="bg-white dark:bg-gray-800 shadow-lg p-4 rounded-lg"><div class="flex flex-grow justify-end"><button class="btn primary icon lg"><!></button></div> <!></div></div>');function Ea(u,r){L(r,!0);let n=k(void 0);var y=pa();fe(w=>{o(()=>pe.title=Ne())});var c=a(y),p=a(c),E=a(p);E.__click=function(...w){var m,f;(f=(m=t(n))==null?void 0:m.onCreate)==null||f.apply(this,w)};var h=a(E);Re(h,{}),e(E),e(p);var g=l(p,2);_e(ca(g,{}),w=>s(n,C(w)),()=>t(n)),e(c),e(y),$(u,y),V()}ot(["click"]);export{Ea as component};
