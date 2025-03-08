import{a as P,t as H,c as tt}from"../chunks/disclose-version.DajeB4c4.js";import{p as me,x as c,y as s,j as e,f as je,t as l,a as he,c as a,r as t,s as i,l as O,ah as _t,$ as ft}from"../chunks/runtime.C60yeaJP.js";import{d as Le,s as _,e as We,h as pt}from"../chunks/render.BbZuB7Dm.js";import{d as rt,y as nt,e as $,r as ve,s as Z,b as se,a5 as bt,a6 as mt,a7 as ht,a8 as gt,a9 as xt,aa as yt,ab as It,ac as wt,ad as St,ae as kt,af as Kt,ag as Et,ah as Tt,ai as Ct,aj as Nt,ak as jt,al as At,q as Bt,am as Dt,an as Pt,ao as Ot,ap as Mt,z as Ht,aq as Ft,ar as Lt,as as qt,at as Gt,au as zt,av as Rt,aw as Ut,ax as Vt,ay as Yt,az as Zt,aA as Jt,aB as Qt,aC as Wt}from"../chunks/debounce.C_WMaB_z.js";import{p as d}from"../chunks/proxy.B95Q3zQB.js";import{p as R,b as Xt}from"../chunks/props.DztJVflq.js";import{g as it,D as $t}from"../chunks/Dropdown.BnBMSDuX.js";import{b as st}from"../chunks/paths.BR2SyuFJ.js";import{i as Ae}from"../chunks/runtime.Cwx_xcDz.js";import{o as lt}from"../chunks/index-client.ClR-EJ5X.js";import{A as Qe,t as qe}from"../chunks/index.u_6ZM-6x.js";import{M as Ze,P as ea,T as ta,E as aa,a as ra}from"../chunks/Modal.CUdo-sfi.js";import{I as ee,b as _e,G as dt,m as ot,C as V,v as Y,N as Je,a as ut,S as Xe,h as $e}from"../chunks/InputResults.DOY8a8ew.js";import{b as na}from"../chunks/select.l6sb6yA8.js";import{P as ia}from"../chunks/Password.BMUkHWIF.js";import{E as sa}from"../chunks/external-link.CcEfDvgN.js";import{C as la}from"../chunks/chevron-left.Dc8mGGX_.js";const ct=["HS256","HS384","HS512"],da=()=>dt((f,n)=>{n.length&&(ot(n),V("algorithm",$(),()=>{Y(f.algorithm).isNotBlank()}),Je(!f.audience,()=>{V("audience",$(),()=>{Y(f.audience).isNotBlank()})}),V("expiresInSeconds",$(),()=>{Y(f.expiresInSeconds).isNotBlank()}),V("issuer",$(),()=>{Y(f.issuer).isNotBlank()}),Je(f.isNew,()=>{V("clientId",$(),()=>{Y(f.clientId).isNotBlank()}),V("privateKey",$(),()=>{Y(f.privateKey).isNotBlank()})}),Je(ct.includes(f.algorithm),()=>{V("publicKey",$(),()=>{Y(f.publicKey).isNotBlank()})}),V("refreshExpiresInSeconds",$(),()=>{Y(f.refreshExpiresInSeconds).isNotBlank()}))});var oa=H("<option> </option>"),ua=H('<div class="mb-2"><label for="algorithm"> </label> <select name="algorithm"></select> <!></div> <div class="mb-2"><label for="audience"> </label> <input type="text" name="audience"> <!></div> <div class="mb-2"><label for="clientId"> </label> <input type="text" name="clientId"> <!></div> <div class="mb-2"><label for="expiresInSeconds"> </label> <input type="number" min="0" name="expiresInSeconds"> <!></div> <div class="mb-2"><label for="issuer"> </label> <input type="text" name="issuer"> <!></div> <div class="mb-2"><label for="publicKey"> </label> <input type="text" name="publicKey"> <!></div> <div class="mb-2"><label for="privateKey"> </label> <!> <!></div> <div class="mb-2"><label for="refreshExpiresInSeconds"> </label> <input type="number" min="0" name="refreshExpiresInSeconds"> <!></div>',1);function vt(f,n){me(n,!0);let o=R(n,"algorithm",31,()=>d(Qe.Hs256)),I=R(n,"audience",15),M=R(n,"clientId",15),K=R(n,"expiresInSeconds",15,86400),A=R(n,"issuer",15,""),m=R(n,"privateKey",15,""),w=R(n,"publicKey",15),S=R(n,"refreshExpiresInSeconds",15,604800),h=R(n,"isNew",3,!1),E=R(n,"valid",15,!1),T=da(),g=c(d(T.get())),v=O(()=>ut(e(g),{untested:"untested",tested:"tested",invalid:"invalid",valid:"valid",warning:"warning"}));const p=new Set,C=rt(()=>{T({algorithm:o(),audience:I(),clientId:M(),expiresInSeconds:K(),issuer:A(),privateKey:m(),publicKey:w(),refreshExpiresInSeconds:S(),isNew:h()},Array.from(p)).done(z=>{s(g,d(z)),E(e(g).isValid())}),p.clear()},300);function B(){p.add("algorithm"),p.add("audience"),p.add("clientId"),p.add("expiresInSeconds"),p.add("issuer"),p.add("privateKey"),p.add("publicKey"),p.add("refreshExpiresInSeconds"),C(),C.flush()}function k(z){p.add(z.currentTarget.name),C()}lt(B);var q=ua(),G=je(q),r=a(G),N=a(r,!0);l(()=>_(N,St())),t(r);var j=i(r,2);const D=O(()=>`w-full ${e(v)("algorithm")??""}`);l(()=>Z(j,"placeholder",bt())),j.__input=k,nt(j,20,()=>Object.values(Qe),z=>z,(z,ce)=>{var ie=oa(),Fe={},Ce=a(ie,!0);t(ie),l(()=>{Fe!==(Fe=ce)&&(ie.value=(ie.__value=ce)==null?"":ce),_(Ce,ce)}),P(z,ie)}),t(j);var fe=i(j,2);ee(fe,{name:"algorithm",get result(){return e(g)}}),t(G);var J=i(G,2),ge=a(J),xe=a(ge,!0);l(()=>_(xe,kt())),t(ge);var te=i(ge,2);ve(te);const ye=O(()=>`w-full ${e(v)("audience")??""}`);l(()=>Z(te,"placeholder",mt())),te.__input=k;var Ge=i(te,2);ee(Ge,{name:"audience",get result(){return e(g)}}),t(J);var pe=i(J,2),Ie=a(pe),Be=a(Ie,!0);l(()=>_(Be,Kt())),t(Ie);var Q=i(Ie,2);ve(Q);const De=O(()=>`w-full ${e(v)("clientId")??""}`);l(()=>Z(Q,"placeholder",ht())),Q.__input=k;var ze=i(Q,2);ee(ze,{name:"clientId",get result(){return e(g)}}),t(pe);var b=i(pe,2),u=a(b),x=a(u,!0);l(()=>_(x,Et())),t(u);var y=i(u,2);ve(y);const F=O(()=>`w-full ${e(v)("expiresInSeconds")??""}`);l(()=>Z(y,"placeholder",gt())),y.__input=k;var le=i(y,2);ee(le,{name:"expiresInSeconds",get result(){return e(g)}}),t(b);var L=i(b,2),we=a(L),Se=a(we,!0);l(()=>_(Se,Tt())),t(we);var ae=i(we,2);ve(ae);const ke=O(()=>`w-full ${e(v)("issuer")??""}`);l(()=>Z(ae,"placeholder",xt())),ae.__input=k;var Re=i(ae,2);ee(Re,{name:"issuer",get result(){return e(g)}}),t(L);var re=i(L,2);l(()=>re.hidden=ct.includes(o()));var Ke=a(re),Pe=a(Ke,!0);l(()=>_(Pe,Ct())),t(Ke);var W=i(Ke,2);ve(W);const Ue=O(()=>`w-full ${e(v)("publicKey")??""}`);l(()=>Z(W,"placeholder",yt())),W.__input=k;var et=i(W,2);ee(et,{name:"publicKey",get result(){return e(g)}}),t(re);var de=i(re,2),ne=a(de),be=a(ne,!0);l(()=>_(be,Nt())),t(ne);var oe=i(ne,2),Oe=O(()=>`w-full ${e(v)("privateKey")??""}`),Me=O(()=>It());ia(oe,{get class(){return e(Oe)},name:"privateKey",get placeholder(){return e(Me)},oninput:k,get value(){return m()},set value(z){m(z)}});var Ve=i(oe,2);ee(Ve,{name:"privateKey",get result(){return e(g)}}),t(de);var ue=i(de,2),Ee=a(ue),He=a(Ee,!0);l(()=>_(He,jt())),t(Ee);var X=i(Ee,2);ve(X);const Ye=O(()=>`w-full ${e(v)("refreshExpiresInSeconds")??""}`);l(()=>Z(X,"placeholder",wt())),X.__input=k;var Te=i(X,2);ee(Te,{name:"refreshExpiresInSeconds",get result(){return e(g)}}),t(ue),l(()=>{se(j,e(D)),se(te,e(ye)),se(Q,e(De)),se(y,e(F)),se(ae,e(ke)),se(W,e(Ue)),se(X,e(Ye))}),na(j,o),_e(te,I),_e(Q,M),_e(y,K),_e(ae,A),_e(W,w),_e(X,S),P(f,q),he()}Le(["input"]);var ca=H('<div class="mr-2 flex flex-row justify-center"><div class="inline-block h-6 w-6"><!></div></div>'),va=H('<form><!> <div class="flex flex-row justify-end"><button type="submit" class="btn primary flex flex-shrink"><!> </button></div></form>');function _a(f,n){me(n,!0);let o=c(!1),I=c(!1),M=O(()=>e(o)||!e(I)),K=c(d(Qe.Hs256)),A=c(""),m=c(""),w=c(86400),S=c(""),h=c(""),E=c(""),T=c(604800);async function g(r){r.preventDefault();try{s(o,!0),e(I)&&n.onCreate(await qe.createTenant({algorithm:e(K),audience:e(A),clientId:e(m)?e(m):void 0,expiresInSeconds:e(w),issuer:e(S),privateKey:e(h)?e(h):void 0,publicKey:e(E)?e(E):void 0,refreshExpiresInSeconds:e(T)},n.applicationId))}catch(N){await $e(N)}finally{s(o,!1)}}var v=va(),p=a(v);vt(p,{isNew:!0,get algorithm(){return e(K)},set algorithm(r){s(K,d(r))},get audience(){return e(A)},set audience(r){s(A,d(r))},get clientId(){return e(m)},set clientId(r){s(m,d(r))},get expiresInSeconds(){return e(w)},set expiresInSeconds(r){s(w,d(r))},get issuer(){return e(S)},set issuer(r){s(S,d(r))},get privateKey(){return e(h)},set privateKey(r){s(h,d(r))},get publicKey(){return e(E)},set publicKey(r){s(E,d(r))},get refreshExpiresInSeconds(){return e(T)},set refreshExpiresInSeconds(r){s(T,d(r))},get valid(){return e(I)},set valid(r){s(I,d(r))}});var C=i(p,2),B=a(C),k=a(B);{var q=r=>{var N=ca(),j=a(N),D=a(j);Xe(D),t(j),t(N),P(r,N)};Ae(k,r=>{e(o)&&r(q)})}var G=i(k);l(()=>_(G,` ${At()??""}`)),t(B),t(C),t(v),l(()=>B.disabled=e(M)),We("submit",v,g),P(f,v),he()}const fa=()=>dt((f={},n)=>{n.length&&(ot(n),V("issuerConfirm",$(),()=>{Y(f.issuerConfirm).isNotBlank()}),V("issuerConfirm",Bt(),()=>{Y(f.issuer===f.issuerConfirm).isTruthy()}))});function pa(f,n,o){n.add(f.currentTarget.name),o()}var ba=H('<div class="mr-2 flex flex-row justify-center"><div class="inline-block h-6 w-6"><!></div></div>'),ma=H('<form><p> </p> <div class="mb-2"><input type="text" name="issuerConfirm"> <!></div> <div class="flex flex-row justify-end"><button type="submit" class="btn danger flex flex-shrink"><!> </button></div></form>');function ha(f,n){me(n,!0);let o=c(""),I=fa(),M=c(d(I.get())),K=c(!1),A=O(()=>e(K)),m=O(()=>ut(e(M),{untested:"untested",tested:"tested",invalid:"invalid",valid:"valid",warning:"warning"}));const w=new Set,S=rt(()=>{I({issuer:n.issuer,issuerConfirm:e(o)},Array.from(w)).done(D=>{s(M,d(D))}),w.clear()},300);function h(){w.add("name"),S(),S.flush()}async function E(D){D.preventDefault();try{s(K,!0),s(o,d(e(o).trim())),h(),e(M).isValid()&&(await qe.deleteTenant(n.tenantId,n.applicationId),n.onDelete())}catch(U){await $e(U)}finally{s(K,!1)}}var T=ma(),g=a(T),v=a(g,!0);l(()=>_(v,Pt())),t(g);var p=i(g,2),C=a(p);ve(C);const B=O(()=>`w-full ${e(m)("issuerConfirm")??""}`);l(()=>Z(C,"placeholder",Dt({issuer:n.issuer}))),C.__input=[pa,w,S];var k=i(C,2);ee(k,{name:"issuerConfirm",get result(){return e(M)}}),t(p);var q=i(p,2),G=a(q),r=a(G);{var N=D=>{var U=ba(),fe=a(U),J=a(fe);Xe(J),t(fe),t(U),P(D,U)};Ae(r,D=>{e(K)&&D(N)})}var j=i(r);l(()=>_(j,` ${Ot()??""}`)),t(G),t(q),t(T),l(()=>{se(C,e(B)),G.disabled=e(A)}),We("submit",T,E),_e(C,()=>e(o),D=>s(o,D)),P(f,T),he()}Le(["input"]);var ga=H('<div class="mr-2 flex flex-row justify-center"><div class="inline-block h-6 w-6"><!></div></div>'),xa=H('<form><!> <div class="flex flex-row justify-end"><button type="submit" class="btn primary flex flex-shrink"><!> </button></div></form>');function ya(f,n){me(n,!0);let o=c(!1),I=c(!1),M=O(()=>e(o)||!e(I)),K=c(d(n.tenant.algorithm)),A=c(d(n.tenant.audience)),m=c(d(n.tenant.clientId)),w=c(d(n.tenant.expiresInSeconds)),S=c(d(n.tenant.issuer)),h=c(d(n.tenant.privateKey)),E=c(d(n.tenant.publicKey)),T=c(d(n.tenant.refreshExpiresInSeconds));async function g(r){r.preventDefault();try{s(o,!0),e(I)&&n.onEdit(await qe.updateTenant(n.tenant.id,{algorithm:e(K),audience:e(A),clientId:e(m)?e(m):void 0,expiresInSeconds:e(w),issuer:e(S),privateKey:e(h)?e(h):void 0,publicKey:e(E)?e(E):void 0,refreshExpiresInSeconds:e(T)},n.applicationId))}catch(N){await $e(N)}finally{s(o,!1)}}var v=xa(),p=a(v);vt(p,{get algorithm(){return e(K)},set algorithm(r){s(K,d(r))},get audience(){return e(A)},set audience(r){s(A,d(r))},get clientId(){return e(m)},set clientId(r){s(m,d(r))},get expiresInSeconds(){return e(w)},set expiresInSeconds(r){s(w,d(r))},get issuer(){return e(S)},set issuer(r){s(S,d(r))},get privateKey(){return e(h)},set privateKey(r){s(h,d(r))},get publicKey(){return e(E)},set publicKey(r){s(E,d(r))},get refreshExpiresInSeconds(){return e(T)},set refreshExpiresInSeconds(r){s(T,d(r))},get valid(){return e(I)},set valid(r){s(I,d(r))}});var C=i(p,2),B=a(C),k=a(B);{var q=r=>{var N=ga(),j=a(N),D=a(j);Xe(D),t(j),t(N),P(r,N)};Ae(k,r=>{e(o)&&r(q)})}var G=i(k);l(()=>_(G,` ${Mt()??""}`)),t(B),t(C),t(v),l(()=>B.disabled=e(M)),We("submit",v,g),P(f,v),he()}const at=20;var Ia=H('<button class="btn secondary icon lg"><!></button>'),wa=H('<a class="flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"><!><span class="ms-4"> </span></a> <button class="flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"><!><span class="ms-4"> </span></button> <button class="flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"><!><span class="ms-4"> </span></button>',1),Sa=H('<tr class="group"><td> </td><td> </td><td> </td><td> </td><td> </td><td class="flex justify-end"><div class="flex flex-shrink"><!></div></td></tr>'),ka=H("<h3> </h3>"),Ka=H("<h3> </h3>"),Ea=H("<h3> </h3>"),Ta=H('<table class="table-auto w-full"><thead><tr class="text-left border-b"><th> </th><th> </th><th> </th><th> </th><th> </th><th></th></tr></thead><tbody></tbody></table> <!> <!> <!>',1);function Ca(f,n){me(n,!0);let o=R(n,"tenants",31,()=>d([])),I=c(0),M=c(!0),K=c(!1);lt(A);async function A(){if(!e(M)||e(K))return;let b;s(K,!0);try{b=await qe.allTenants(e(I)*at,at,!0,n.applicationId)}finally{s(K,!1)}s(M,d(b.hasMore)),s(I,e(I)+1),o().push(...b.items)}let m=c(!1);function w(){s(m,!0)}function S(b){o().unshift(b),s(m,!1)}let h=c(void 0),E=c(!1);function T(b){return()=>{s(h,d(b)),s(E,!0)}}function g(b){const u=o().findIndex(x=>x.id===(b==null?void 0:b.id));u!==-1&&o(o()[u]=b,!0),s(h,void 0),s(E,!1)}let v=c(void 0),p=c(!1);function C(b){return()=>{s(v,d(b)),s(p,!0)}}function B(){const b=o().findIndex(u=>{var x;return u.id===((x=e(v))==null?void 0:x.id)});b!==-1&&o().splice(b,1),s(v,void 0),s(p,!1)}const k=it(),[q,G]=k;var r=Ta(),N=je(r),j=a(N),D=a(j),U=a(D),fe=a(U,!0);l(()=>_(fe,qt())),t(U);var J=i(U),ge=a(J,!0);l(()=>_(ge,Gt())),t(J);var xe=i(J),te=a(xe,!0);l(()=>_(te,zt())),t(xe);var ye=i(xe),Ge=a(ye,!0);l(()=>_(Ge,Rt())),t(ye);var pe=i(ye),Ie=a(pe,!0);l(()=>_(Ie,Ut())),t(pe),_t(),t(D),t(j);var Be=i(j);nt(Be,23,o,b=>b.id,(b,u,x)=>{var y=Sa(),F=a(y),le=a(F,!0);t(F);var L=i(F),we=a(L,!0);t(L);var Se=i(L),ae=a(Se,!0);t(Se);var ke=i(Se),Re=a(ke,!0);l(()=>_(Re,e(u).updatedAt.toLocaleString())),t(ke);var re=i(ke),Ke=a(re,!0);l(()=>_(Ke,e(u).createdAt.toLocaleString())),t(re);var Pe=i(re),W=a(Pe),Ue=a(W);$t(Ue,{position:"top-right",anchorPosition:"bottom-right",button:de=>{var ne=Ia(),be=a(ne);aa(be,{}),t(ne),P(de,ne)},children:(de,ne)=>{var be=wa(),oe=je(be);l(()=>Z(oe,"href",q(`${st}/applications/${n.applicationId}/tenants/${e(u).id}/oauth2-providers`,void 0)));var Oe=a(oe);sa(Oe,{});var Me=i(Oe),Ve=a(Me,!0);l(()=>_(Ve,Vt())),t(Me),t(oe);var ue=i(oe,2),Ee=O(()=>T(e(u)));ue.__click=function(...Ce){var Ne;(Ne=e(Ee))==null||Ne.apply(this,Ce)};var He=a(ue);ea(He,{});var X=i(He),Ye=a(X,!0);l(()=>_(Ye,Yt())),t(X),t(ue);var Te=i(ue,2),z=O(()=>C(e(u)));Te.__click=function(...Ce){var Ne;(Ne=e(z))==null||Ne.apply(this,Ce)};var ce=a(Te);ta(ce,{});var ie=i(ce),Fe=a(ie,!0);l(()=>_(Fe,Zt())),t(ie),t(Te),P(de,be)},$$slots:{button:!0,default:!0}}),t(W),t(Pe),t(y),l(()=>{Ht(y,"border-b",e(x)<o().length-1),_(le,e(u).id),_(we,e(u).issuer),_(ae,e(u).clientId)}),P(b,y)}),t(Be),t(N);var Q=i(N,2);Ze(Q,{get open(){return e(m)},set open(u){s(m,d(u))},title:u=>{var x=ka(),y=a(x,!0);l(()=>_(y,Jt())),t(x),P(u,x)},children:(u,x)=>{_a(u,{get applicationId(){return n.applicationId},onCreate:S})},$$slots:{title:!0,default:!0}});var De=i(Q,2);Ze(De,{get open(){return e(E)},set open(u){s(E,d(u))},title:u=>{var x=Ka(),y=a(x,!0);l(()=>{var F;return _(y,Ft({issuer:((F=e(h))==null?void 0:F.issuer)||""}))}),t(x),P(u,x)},children:(u,x)=>{var y=tt(),F=je(y);{var le=L=>{ya(L,{get applicationId(){return n.applicationId},get tenant(){return e(h)},onEdit:g})};Ae(F,L=>{e(h)&&L(le)})}P(u,y)},$$slots:{title:!0,default:!0}});var ze=i(De,2);return Ze(ze,{get open(){return e(p)},set open(u){s(p,d(u))},title:u=>{var x=Ea(),y=a(x,!0);l(()=>{var F;return _(y,Lt({issuer:((F=e(v))==null?void 0:F.issuer)||""}))}),t(x),P(u,x)},children:(u,x)=>{var y=tt(),F=je(y);{var le=L=>{ha(L,{get applicationId(){return n.applicationId},get tenantId(){return e(v).id},get issuer(){return e(v).issuer},onDelete:B})};Ae(F,L=>{e(v)&&L(le)})}P(u,y)},$$slots:{title:!0,default:!0}}),P(f,r),he({onCreate:w})}Le(["click"]);var Na=H('<div class="container mx-auto my-4"><div class="bg-white dark:bg-gray-800 shadow-lg p-4 rounded-lg"><div class="flex flex-grow justify-between"><a class="flex flex-row items-center"><button class="btn primary icon"><!></button> <span class="ms-2"> </span></a> <button class="btn primary icon lg"><!></button></div> <!></div></div>');function Za(f,n){me(n,!0);let o=c(void 0);const I=it(),[M,K]=I;var A=Na();pt(B=>{l(()=>ft.title=Qt())});var m=a(A),w=a(m),S=a(w);l(()=>Z(S,"href",M(`${st}/`,void 0)));var h=a(S),E=a(h);la(E,{}),t(h);var T=i(h,2),g=a(T,!0);l(()=>_(g,Wt())),t(T),t(S);var v=i(S,2);v.__click=function(...B){var k,q;(q=(k=e(o))==null?void 0:k.onCreate)==null||q.apply(this,B)};var p=a(v);ra(p,{}),t(v),t(w);var C=i(w,2);Xt(Ca(C,{get applicationId(){return n.data.applicationId}}),B=>s(o,d(B)),()=>e(o)),t(m),t(A),P(f,A),he()}Le(["click"]);export{Za as component};
