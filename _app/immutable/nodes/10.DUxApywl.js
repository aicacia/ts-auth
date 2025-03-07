import{a as C,t as M,c as $e}from"../chunks/disclose-version.DAXeEFki.js";import{p as J,w as y,i as e,x as s,t as d,a as K,c as a,s as l,r as t,k as G,f as ee,ah as We,$ as Xe}from"../chunks/runtime.Dxz2USVk.js";import{d as Q,e as _e,s as m,h as Ye}from"../chunks/render.BT-HGqxZ.js";import{d as me,e as be,r as pe,s as re,b as he,$ as Be,a0 as et,n as tt,a1 as at,a2 as rt,a3 as nt,a4 as st,u as it,v as lt,a5 as ot,a6 as dt,a7 as ut,a8 as vt,a9 as ct,aa as ft,ab as _t,ac as mt,ad as bt,ae as pt,af as ht,ag as gt}from"../chunks/debounce.ZLRl6Ahz.js";import{p as w}from"../chunks/proxy.wnGPLs2U.js";import{p as xt,b as yt}from"../chunks/props.VGTkXN6c.js";import{D as wt,g as kt}from"../chunks/Dropdown.deJfGaB5.js";import{b as Ct}from"../chunks/paths.DxZnsL0E.js";import{i as H}from"../chunks/runtime.CpXx6LBu.js";import{o as It}from"../chunks/index-client.ClaMtOFT.js";import{u as ne}from"../chunks/index.Bg6CL-Uu.js";import{M as fe,P as Ut,T as St,E as At,a as Dt}from"../chunks/Modal.Djv8yqq0.js";import{I as ge,b as xe,G as ye,m as we,C as te,v as ae,S as ke,h as Ce,a as Ie}from"../chunks/InputResults.BZck2DBY.js";import{C as jt}from"../chunks/chevron-left.Bu43mO8U.js";const Et=()=>ye((c={},r)=>{r.length&&(we(r),te("username",be(),()=>{ae(c.username).isNotBlank()}))});function Tt(c,r,n){r.add(c.currentTarget.name),n()}var Pt=M('<div class="mr-2 flex flex-row justify-center"><div class="inline-block h-6 w-6"><!></div></div>'),Mt=M('<form><div class="mb-2"><input type="text" name="username"> <!></div> <div class="flex flex-row justify-end"><button type="submit" class="btn primary flex flex-shrink"><!> </button></div></form>');function Ot(c,r){J(r,!0);let n=y(""),j=Et(),b=y(w(j.get())),p=y(!1),N=G(()=>e(p)),O=G(()=>Ie(e(b),{untested:"untested",tested:"tested",invalid:"invalid",valid:"valid",warning:"warning"}));const _=new Set,x=me(()=>{j({username:e(n)},Array.from(_)).done(u=>{s(b,w(u))}),_.clear()},300);function I(){_.add("username"),x(),x.flush()}async function B(u){u.preventDefault();try{s(p,!0),s(n,w(e(n).trim())),I(),e(b).isValid()&&r.onCreate(await ne.createUser({active:!0,username:e(n)},r.applicationId))}catch(D){await Ce(D)}finally{s(p,!1)}}var h=Mt(),U=a(h),o=a(U);pe(o);const E=G(()=>`w-full ${e(O)("username")??""}`);d(()=>re(o,"placeholder",Be())),o.__input=[Tt,_,x];var T=l(o,2);ge(T,{name:"username",get result(){return e(b)}}),t(U);var P=l(U,2),S=a(P),A=a(S);{var F=u=>{var D=Pt(),g=a(D),L=a(g);ke(L),t(g),t(D),C(u,D)};H(A,u=>{e(p)&&u(F)})}var q=l(A);d(()=>m(q,` ${et()??""}`)),t(S),t(P),t(h),d(()=>{he(o,e(E)),S.disabled=e(N)}),_e("submit",h,B),xe(o,()=>e(n),u=>s(n,u)),C(c,h),K()}Q(["input"]);const $t=()=>ye((c={},r)=>{r.length&&(we(r),te("usernameConfirm",be(),()=>{ae(c.usernameConfirm).isNotBlank()}),te("usernameConfirm",tt(),()=>{ae(c.username===c.usernameConfirm).isTruthy()}))});function Nt(c,r,n){r.add(c.currentTarget.name),n()}var Bt=M('<div class="mr-2 flex flex-row justify-center"><div class="inline-block h-6 w-6"><!></div></div>'),Ft=M('<form><p> </p> <div class="mb-2"><input type="text" name="usernameConfirm"> <!></div> <div class="flex flex-row justify-end"><button type="submit" class="btn danger flex flex-shrink"><!> </button></div></form>');function Lt(c,r){J(r,!0);let n=y(""),j=$t(),b=y(w(j.get())),p=y(!1),N=G(()=>e(p)),O=G(()=>Ie(e(b),{untested:"untested",tested:"tested",invalid:"invalid",valid:"valid",warning:"warning"}));const _=new Set,x=me(()=>{j({username:r.username,usernameConfirm:e(n)},Array.from(_)).done(g=>{s(b,w(g))}),_.clear()},300);function I(){_.add("name"),x(),x.flush()}async function B(g){g.preventDefault();try{s(p,!0),s(n,w(e(n).trim())),I(),e(b).isValid()&&(await ne.deleteUser(r.userId,r.applicationId),r.onDelete())}catch(L){await Ce(L)}finally{s(p,!1)}}var h=Ft(),U=a(h),o=a(U,!0);d(()=>m(o,rt())),t(U);var E=l(U,2),T=a(E);pe(T);const P=G(()=>`w-full ${e(O)("usernameConfirm")??""}`);d(()=>re(T,"placeholder",at({username:r.username}))),T.__input=[Nt,_,x];var S=l(T,2);ge(S,{name:"usernameConfirm",get result(){return e(b)}}),t(E);var A=l(E,2),F=a(A),q=a(F);{var u=g=>{var L=Bt(),R=a(L),se=a(R);ke(se),t(R),t(L),C(g,L)};H(q,g=>{e(p)&&g(u)})}var D=l(q);d(()=>m(D,` ${nt()??""}`)),t(F),t(A),t(h),d(()=>{he(T,e(P)),F.disabled=e(N)}),_e("submit",h,B),xe(T,()=>e(n),g=>s(n,g)),C(c,h),K()}Q(["input"]);const Vt=()=>ye((c={},r)=>{r.length&&(we(r),te("username",be(),()=>{ae(c.username).isNotBlank()}))});function Gt(c,r,n){r.add(c.currentTarget.name),n()}var qt=M('<div class="mr-2 flex flex-row justify-center"><div class="inline-block h-6 w-6"><!></div></div>'),Rt=M('<form><div class="mb-2"><input type="text" name="username"> <!></div> <div class="flex flex-row justify-end"><button type="submit" class="btn primary flex flex-shrink"><!> </button></div></form>');function Zt(c,r){J(r,!0);let n=y(w(r.user.username)),j=Vt(),b=y(w(j.get())),p=y(!1),N=G(()=>e(p)),O=G(()=>Ie(e(b),{untested:"untested",tested:"tested",invalid:"invalid",valid:"valid",warning:"warning"}));const _=new Set,x=me(()=>{j({username:e(n)},Array.from(_)).done(u=>{s(b,w(u))}),_.clear()},300);function I(){_.add("username"),x(),x.flush()}async function B(u){u.preventDefault();try{s(p,!0),s(n,w(e(n).trim())),I(),e(b).isValid()&&r.onEdit(await ne.updateUser(r.user.id,{username:e(n)},r.applicationId))}catch(D){await Ce(D)}finally{s(p,!1)}}var h=Rt(),U=a(h),o=a(U);pe(o);const E=G(()=>`w-full ${e(O)("username")??""}`);d(()=>re(o,"placeholder",Be())),o.__input=[Gt,_,x];var T=l(o,2);ge(T,{name:"username",get result(){return e(b)}}),t(U);var P=l(U,2),S=a(P),A=a(S);{var F=u=>{var D=qt(),g=a(D),L=a(g);ke(L),t(g),t(D),C(u,D)};H(A,u=>{e(p)&&u(F)})}var q=l(A);d(()=>m(q,` ${st()??""}`)),t(S),t(P),t(h),d(()=>{he(o,e(E)),S.disabled=e(N)}),_e("submit",h,B),xe(o,()=>e(n),u=>s(n,u)),C(c,h),K()}Q(["input"]);const Ne=20;var zt=M('<button class="btn secondary icon lg"><!></button>'),Ht=M('<button class="flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"><!><span class="ms-4"> </span></button> <button class="flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"><!><span class="ms-4"> </span></button>',1),Jt=M('<tr class="group"><td> </td><td> </td><td> </td><td> </td><td> </td><td class="flex justify-end"><div class="flex flex-shrink"><!></div></td></tr>'),Kt=M("<h3> </h3>"),Qt=M("<h3> </h3>"),Wt=M("<h3> </h3>"),Xt=M('<table class="table-auto w-full"><thead><tr class="text-left border-b"><th> </th><th> </th><th> </th><th> </th><th> </th><th></th></tr></thead><tbody></tbody></table> <!> <!> <!>',1);function Yt(c,r){J(r,!0);let n=xt(r,"users",31,()=>w([])),j=y(0),b=y(!0),p=y(!1);It(N);async function N(){if(!e(b)||e(p))return;let v;s(p,!0);try{v=await ne.allUsers(e(j)*Ne,Ne,r.applicationId)}finally{s(p,!1)}s(b,w(v.hasMore)),s(j,e(j)+1),n().push(...v.items)}let O=y(!1);function _(){s(O,!0)}function x(v){n().unshift(v),s(O,!1)}let I=y(void 0),B=y(!1);function h(v){return()=>{s(I,w(v)),s(B,!0)}}function U(v){const i=n().findIndex(f=>f.id===(v==null?void 0:v.id));i!==-1&&n(n()[i]=v,!0),s(I,void 0),s(B,!1)}let o=y(void 0),E=y(!1);function T(v){return()=>{s(o,w(v)),s(E,!0)}}function P(){const v=n().findIndex(i=>{var f;return i.id===((f=e(o))==null?void 0:f.id)});v!==-1&&n().splice(v,1),s(o,void 0),s(E,!1)}var S=Xt(),A=ee(S),F=a(A),q=a(F),u=a(q),D=a(u,!0);d(()=>m(D,ut())),t(u);var g=l(u),L=a(g,!0);d(()=>m(L,vt())),t(g);var R=l(g),se=a(R,!0);d(()=>m(se,ct())),t(R);var ie=l(R),Fe=a(ie,!0);d(()=>m(Fe,ft())),t(ie);var Ue=l(ie),Le=a(Ue,!0);d(()=>m(Le,_t())),t(Ue),We(),t(q),t(F);var Se=l(F);it(Se,23,n,v=>v.id,(v,i,f)=>{var k=Jt(),$=a(k),Z=a($,!0);t($);var V=l($),Ge=a(V,!0);t(V);var le=l(V),qe=a(le,!0);t(le);var oe=l(le),Re=a(oe,!0);d(()=>m(Re,e(i).updatedAt.toLocaleString())),t(oe);var de=l(oe),Ze=a(de,!0);d(()=>m(Ze,e(i).createdAt.toLocaleString())),t(de);var je=l(de),Ee=a(je),ze=a(Ee);wt(ze,{position:"top-right",anchorPosition:"bottom-right",button:ue=>{var W=zt(),X=a(W);At(X,{}),t(W),C(ue,W)},children:(ue,W)=>{var X=Ht(),Y=ee(X),He=G(()=>h(e(i)));Y.__click=function(...ce){var z;(z=e(He))==null||z.apply(this,ce)};var Te=a(Y);Ut(Te,{});var Pe=l(Te),Je=a(Pe,!0);d(()=>m(Je,mt())),t(Pe),t(Y);var ve=l(Y,2),Ke=G(()=>T(e(i)));ve.__click=function(...ce){var z;(z=e(Ke))==null||z.apply(this,ce)};var Me=a(ve);St(Me,{});var Oe=l(Me),Qe=a(Oe,!0);d(()=>m(Qe,bt())),t(Oe),t(ve),C(ue,X)},$$slots:{button:!0,default:!0}}),t(Ee),t(je),t(k),d(()=>{lt(k,"border-b",e(f)<n().length-1),m(Z,e(i).id),m(Ge,e(i).username),m(qe,e(i).active)}),C(v,k)}),t(Se),t(A);var Ae=l(A,2);fe(Ae,{get open(){return e(O)},set open(i){s(O,w(i))},title:i=>{var f=Kt(),k=a(f,!0);d(()=>m(k,pt())),t(f),C(i,f)},children:(i,f)=>{Ot(i,{get applicationId(){return r.applicationId},onCreate:x})},$$slots:{title:!0,default:!0}});var De=l(Ae,2);fe(De,{get open(){return e(B)},set open(i){s(B,w(i))},title:i=>{var f=Qt(),k=a(f,!0);d(()=>{var $;return m(k,ot({username:(($=e(I))==null?void 0:$.username)||""}))}),t(f),C(i,f)},children:(i,f)=>{var k=$e(),$=ee(k);{var Z=V=>{Zt(V,{get applicationId(){return r.applicationId},get user(){return e(I)},onEdit:U})};H($,V=>{e(I)&&V(Z)})}C(i,k)},$$slots:{title:!0,default:!0}});var Ve=l(De,2);return fe(Ve,{get open(){return e(E)},set open(i){s(E,w(i))},title:i=>{var f=Wt(),k=a(f,!0);d(()=>{var $;return m(k,dt({username:(($=e(o))==null?void 0:$.username)||""}))}),t(f),C(i,f)},children:(i,f)=>{var k=$e(),$=ee(k);{var Z=V=>{Lt(V,{get applicationId(){return r.applicationId},get userId(){return e(o).id},get username(){return e(o).username},onDelete:P})};H($,V=>{e(o)&&V(Z)})}C(i,k)},$$slots:{title:!0,default:!0}}),C(c,S),K({loadMore:N,onCreate:_})}Q(["click"]);var ea=M('<div class="container mx-auto my-4"><div class="bg-white dark:bg-gray-800 shadow-lg p-4 rounded-lg"><div class="flex flex-grow justify-between"><a class="flex flex-row items-center"><button class="btn primary icon"><!></button> <span class="ms-2"> </span></a> <button class="btn primary icon lg"><!></button></div> <!></div></div>');function ba(c,r){J(r,!0);let n=y(void 0);const j=kt(),[b,p]=j;var N=ea();Ye(P=>{d(()=>Xe.title=ht())});var O=a(N),_=a(O),x=a(_);d(()=>re(x,"href",b(`${Ct}/`,void 0)));var I=a(x),B=a(I);jt(B,{}),t(I);var h=l(I,2),U=a(h,!0);d(()=>m(U,gt())),t(h),t(x);var o=l(x,2);o.__click=function(...P){var S,A;(A=(S=e(n))==null?void 0:S.onCreate)==null||A.apply(this,P)};var E=a(o);Dt(E,{}),t(o),t(_);var T=l(_,2);yt(Yt(T,{get applicationId(){return r.data.applicationId}}),P=>s(n,w(P)),()=>e(n)),t(O),t(N),C(c,N),K()}Q(["click"]);export{ba as component};
