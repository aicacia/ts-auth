import{c as Fe,a as E,t as B}from"../chunks/disclose-version.CyzBF5DE.js";import{e as lt,f as pe,t as d,c as r,s,r as a,p as Pe,z as m,A as o,w as e,a as je,y as H,$ as It,ad as wt}from"../chunks/runtime.DCDhZAS9.js";import{l as St,d as ze,r as Kt,s as x,e as tt,h as kt}from"../chunks/render.GuxJiPpJ.js";import{i as be}from"../chunks/if.CrJYGNN5.js";import{r as te,a as F,t as dt,e as $,a2 as Et,a3 as Tt,a4 as Nt,a5 as Ct,a6 as At,a7 as Pt,a8 as jt,a9 as Dt,aa as Mt,ab as Bt,ac as Ot,ad as qt,ae as Ht,af as Lt,ag as Ft,ah as zt,ai as Gt,m as Rt,aj as Ut,ak as Vt,al as Yt,am as Zt,an as Jt,ao as Qt,ap as Wt,aq as Xt,ar as $t,as as ea,at as ta,au as aa,av as ra,aw as na,ax as ia,ay as sa}from"../chunks/messages.DrdQHzfr.js";import{s as Y,d as ot,t as la}from"../chunks/debounce.B0m-GfvZ.js";import{i as da,p as c}from"../chunks/proxy.B60m95XX.js";import{o as ut}from"../chunks/index-client.CpYcptp6.js";import{I as ct,s as vt,g as oa}from"../chunks/Icon.D1Cmpmcm.js";import{A as et,c as Ge}from"../chunks/index.C38_imDu.js";import{D as ua}from"../chunks/Dropdown.DnCqYh11.js";import{b as ca}from"../chunks/paths.DBv2nKNz.js";import{P as va,M as Xe,a as _a,T as fa,E as pa}from"../chunks/Modal.C3GBZGI0.js";import{b as Q,I as ee,G as _t,m as ft,C as Z,v as J,N as $e,a as pt,S as at,h as rt}from"../chunks/InputResults.ChgnQGK3.js";import{l as bt,s as mt,p as G}from"../chunks/props.DNa4puzj.js";import"../chunks/legacy.C8gm2cMg.js";import{C as ba}from"../chunks/chevron-left.DB5W1lfA.js";function ht(n,t,l){if(n.multiple)return xa(n,t);for(var p of n.options){var b=Ae(p);if(da(b,t)){p.selected=!0;return}}(!l||t!==void 0)&&(n.selectedIndex=-1)}function ma(n,t){lt(()=>{var l=new MutationObserver(()=>{var p=n.__value;ht(n,p)});return l.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{l.disconnect()}})}function ha(n,t,l=t){var p=!0;St(n,"change",b=>{var h=b?"[selected]":":checked",f;if(n.multiple)f=[].map.call(n.querySelectorAll(h),Ae);else{var g=n.querySelector(h)??n.querySelector("option:not([disabled])");f=g&&Ae(g)}l(f)}),lt(()=>{var b=t();if(ht(n,b,p),p&&b===void 0){var h=n.querySelector(":checked");h!==null&&(b=Ae(h),l(b))}n.__value=b,p=!1}),ma(n)}function xa(n,t){for(var l of n.options)l.selected=~t.indexOf(Ae(l))}function Ae(n){return"__value"in n?n.__value:n.value}function ga(n,t){const l=bt(t,["children","$$slots","$$events","$$legacy"]);ct(n,mt({name:"eye"},()=>l,{iconNode:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]],children:(b,h)=>{var f=Fe(),g=pe(f);vt(g,t,"default",{}),E(b,f)},$$slots:{default:!0}}))}function ya(n,t){const l=bt(t,["children","$$slots","$$events","$$legacy"]);ct(n,mt({name:"eye-off"},()=>l,{iconNode:[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{d:"m2 2 20 20"}]],children:(b,h)=>{var f=Fe(),g=pe(f);vt(g,t,"default",{}),E(b,f)},$$slots:{default:!0}}))}function Ia(n,t){n.stopPropagation(),n.preventDefault(),t(!t())}var wa=B("<textarea></textarea>"),Sa=B('<input type="text">'),Ka=B('<div class="flex flex-row relative"><input type="password"> <!> <button class="btn icon secondary flex flex-shrink"><!></button></div>');function ka(n,t){let l=G(t,"hidden",15,!0),p=G(t,"textarea",3,!1),b=G(t,"value",15);var h=Ka(),f=r(h);te(f),f.__input=function(...v){var u;(u=t.oninput)==null||u.apply(this,v)};var g=s(f,2);{var S=v=>{var u=wa();Kt(u),u.__input=function(...k){var A;(A=t.oninput)==null||A.apply(this,k)},d(()=>{Y(u,`flex flex-grow ${(t.class||"")??""} ${(l()?"hidden":"")??""}`),F(u,"name",t.name),F(u,"placeholder",t.placeholder)}),Q(u,b),E(v,u)},T=v=>{var u=Sa();te(u),u.__input=function(...k){var A;(A=t.oninput)==null||A.apply(this,k)},d(()=>{Y(u,`flex flex-grow ${(t.class||"")??""} ${(l()?"hidden":"")??""}`),F(u,"name",t.name),F(u,"placeholder",t.placeholder)}),Q(u,b),E(v,u)};be(g,v=>{p()?v(S):v(T,!1)})}var C=s(g,2);C.__click=[Ia,l];var O=r(C);{var w=v=>{ya(v,{})},y=v=>{ga(v,{})};be(O,v=>{l()?v(w):v(y,!1)})}a(C),a(h),d(()=>{Y(f,`flex flex-grow ${(t.class||"")??""} ${(l()?"":"hidden")??""}`),F(f,"name",t.name),F(f,"placeholder",t.placeholder)}),Q(f,b),E(n,h)}ze(["input","click"]);const xt=["HS256","HS384","HS512"],Ea=()=>_t((n,t)=>{t.length&&(ft(t),Z("algorithm",$(),()=>{J(n.algorithm).isNotBlank()}),$e(!n.audience,()=>{Z("audience",$(),()=>{J(n.audience).isNotBlank()})}),Z("expiresInSeconds",$(),()=>{J(n.expiresInSeconds).isNotBlank()}),Z("issuer",$(),()=>{J(n.issuer).isNotBlank()}),$e(n.isNew,()=>{Z("clientId",$(),()=>{J(n.clientId).isNotBlank()}),Z("privateKey",$(),()=>{J(n.privateKey).isNotBlank()})}),$e(xt.includes(n.algorithm),()=>{Z("publicKey",$(),()=>{J(n.publicKey).isNotBlank()})}),Z("refreshExpiresInSeconds",$(),()=>{J(n.refreshExpiresInSeconds).isNotBlank()}))});var Ta=B("<option> </option>"),Na=B('<div class="mb-2"><label for="algorithm"> </label> <select name="algorithm"></select> <!></div> <div class="mb-2"><label for="audience"> </label> <input type="text" name="audience"> <!></div> <div class="mb-2"><label for="clientId"> </label> <input type="text" name="clientId"> <!></div> <div class="mb-2"><label for="expiresInSeconds"> </label> <input type="number" min="0" name="expiresInSeconds"> <!></div> <div class="mb-2"><label for="issuer"> </label> <input type="text" name="issuer"> <!></div> <div class="mb-2"><label for="publicKey"> </label> <input type="text" name="publicKey"> <!></div> <div class="mb-2"><label for="privateKey"> </label> <!> <!></div> <div class="mb-2"><label for="refreshExpiresInSeconds"> </label> <input type="number" min="0" name="refreshExpiresInSeconds"> <!></div>',1);function gt(n,t){Pe(t,!0);let l=G(t,"algorithm",31,()=>c(et.Hs256)),p=G(t,"audience",15),b=G(t,"clientId",15),h=G(t,"expiresInSeconds",15,86400),f=G(t,"issuer",15,""),g=G(t,"privateKey",15,""),S=G(t,"publicKey",15),T=G(t,"refreshExpiresInSeconds",15,604800),C=G(t,"isNew",3,!1),O=G(t,"valid",15,!1),w=Ea(),y=m(c(w.get())),v=H(()=>pt(e(y),{untested:"untested",tested:"tested",invalid:"invalid",valid:"valid",warning:"warning"}));const u=new Set,k=ot(()=>{w({algorithm:l(),audience:p(),clientId:b(),expiresInSeconds:h(),issuer:f(),privateKey:g(),publicKey:S(),refreshExpiresInSeconds:T(),isNew:C()},Array.from(u)).done(U=>{o(y,c(U)),O(e(y).isValid())}),u.clear()},300);function A(){u.add("algorithm"),u.add("audience"),u.add("clientId"),u.add("expiresInSeconds"),u.add("issuer"),u.add("privateKey"),u.add("publicKey"),u.add("refreshExpiresInSeconds"),k(),k.flush()}function q(U){u.add(U.currentTarget.name),k()}ut(A);var R=Na(),L=pe(R),i=r(L),P=r(i,!0);d(()=>x(P,Mt())),a(i);var N=s(i,2);const j=H(()=>`w-full ${e(v)("algorithm")??""}`);d(()=>F(N,"placeholder",Et())),N.__input=q,dt(N,20,()=>Object.values(et),U=>U,(U,_e)=>{var fe=Ta(),ge={},Qe=r(fe,!0);a(fe),d(()=>{ge!==(ge=_e)&&(fe.value=(fe.__value=_e)==null?"":_e),x(Qe,_e)}),E(U,fe)}),a(N);var se=s(N,2);ee(se,{name:"algorithm",get result(){return e(y)}}),a(L);var le=s(L,2),de=r(le),Re=r(de,!0);d(()=>x(Re,Bt())),a(de);var W=s(de,2);te(W);const ye=H(()=>`w-full ${e(v)("audience")??""}`);d(()=>F(W,"placeholder",Tt())),W.__input=q;var De=s(W,2);ee(De,{name:"audience",get result(){return e(y)}}),a(le);var oe=s(le,2),Ie=r(oe),we=r(Ie,!0);d(()=>x(we,Ot())),a(Ie);var re=s(Ie,2);te(re);const Se=H(()=>`w-full ${e(v)("clientId")??""}`);d(()=>F(re,"placeholder",Nt())),re.__input=q;var Ue=s(re,2);ee(Ue,{name:"clientId",get result(){return e(y)}}),a(oe);var ue=s(oe,2),Ke=r(ue),Me=r(Ke,!0);d(()=>x(Me,qt())),a(Ke);var ne=s(Ke,2);te(ne);const Be=H(()=>`w-full ${e(v)("expiresInSeconds")??""}`);d(()=>F(ne,"placeholder",Ct())),ne.__input=q;var Oe=s(ne,2);ee(Oe,{name:"expiresInSeconds",get result(){return e(y)}}),a(ue);var me=s(ue,2),ke=r(me),I=r(ke,!0);d(()=>x(I,Ht())),a(ke);var _=s(ke,2);te(_);const K=H(()=>`w-full ${e(v)("issuer")??""}`);d(()=>F(_,"placeholder",At())),_.__input=q;var D=s(_,2);ee(D,{name:"issuer",get result(){return e(y)}}),a(me);var M=s(me,2);d(()=>M.hidden=xt.includes(l()));var X=r(M),z=r(X,!0);d(()=>x(z,Lt())),a(X);var ie=s(X,2);te(ie);const Ee=H(()=>`w-full ${e(v)("publicKey")??""}`);d(()=>F(ie,"placeholder",Pt())),ie.__input=q;var Ve=s(ie,2);ee(Ve,{name:"publicKey",get result(){return e(y)}}),a(M);var ce=s(M,2),Te=r(ce),Ne=r(Te,!0);d(()=>x(Ne,Ft())),a(Te);var qe=s(Te,2),He=H(()=>`w-full ${e(v)("privateKey")??""}`),Le=H(()=>jt());ka(qe,{get class(){return e(He)},name:"privateKey",get placeholder(){return e(Le)},oninput:q,get value(){return g()},set value(U){g(U)}});var Ye=s(qe,2);ee(Ye,{name:"privateKey",get result(){return e(y)}}),a(ce);var Ze=s(ce,2),ve=r(Ze),he=r(ve,!0);d(()=>x(he,zt())),a(ve);var V=s(ve,2);te(V);const xe=H(()=>`w-full ${e(v)("refreshExpiresInSeconds")??""}`);d(()=>F(V,"placeholder",Dt())),V.__input=q;var Je=s(V,2);ee(Je,{name:"refreshExpiresInSeconds",get result(){return e(y)}}),a(Ze),d(()=>{Y(N,e(j)),Y(W,e(ye)),Y(re,e(Se)),Y(ne,e(Be)),Y(_,e(K)),Y(ie,e(Ee)),Y(V,e(xe))}),ha(N,l),Q(W,p),Q(re,b),Q(ne,h),Q(_,f),Q(ie,S),Q(V,T),E(n,R),je()}ze(["input"]);var Ca=B('<div class="mr-2 flex flex-row justify-center"><div class="inline-block h-6 w-6"><!></div></div>'),Aa=B('<form><!> <div class="flex flex-row justify-end"><button type="submit" class="btn primary flex flex-shrink"><!> </button></div></form>');function Pa(n,t){Pe(t,!0);let l=m(!1),p=m(!1),b=H(()=>e(l)||!e(p)),h=m(c(et.Hs256)),f=m(""),g=m(""),S=m(86400),T=m(""),C=m(""),O=m(""),w=m(604800);async function y(i){i.preventDefault();try{o(l,!0),e(p)&&t.onCreate(await Ge.createTenant({algorithm:e(h),audience:e(f),clientId:e(g)?e(g):void 0,expiresInSeconds:e(S),issuer:e(T),privateKey:e(C)?e(C):void 0,publicKey:e(O)?e(O):void 0,refreshExpiresInSeconds:e(w)},t.applicationId))}catch(P){await rt(P)}finally{o(l,!1)}}var v=Aa(),u=r(v);gt(u,{isNew:!0,get algorithm(){return e(h)},set algorithm(i){o(h,c(i))},get audience(){return e(f)},set audience(i){o(f,c(i))},get clientId(){return e(g)},set clientId(i){o(g,c(i))},get expiresInSeconds(){return e(S)},set expiresInSeconds(i){o(S,c(i))},get issuer(){return e(T)},set issuer(i){o(T,c(i))},get privateKey(){return e(C)},set privateKey(i){o(C,c(i))},get publicKey(){return e(O)},set publicKey(i){o(O,c(i))},get refreshExpiresInSeconds(){return e(w)},set refreshExpiresInSeconds(i){o(w,c(i))},get valid(){return e(p)},set valid(i){o(p,c(i))}});var k=s(u,2),A=r(k),q=r(A);{var R=i=>{var P=Ca(),N=r(P),j=r(N);at(j),a(N),a(P),E(i,P)};be(q,i=>{e(l)&&i(R)})}var L=s(q);d(()=>x(L,` ${Gt()??""}`)),a(A),a(k),a(v),d(()=>A.disabled=e(b)),tt("submit",v,y),E(n,v),je()}const ja=()=>_t((n={},t)=>{t.length&&(ft(t),Z("issuerConfirm",$(),()=>{J(n.issuerConfirm).isNotBlank()}),Z("issuerConfirm",Rt(),()=>{J(n.issuer===n.issuerConfirm).isTruthy()}))});function Da(n,t,l){t.add(n.currentTarget.name),l()}var Ma=B('<div class="mr-2 flex flex-row justify-center"><div class="inline-block h-6 w-6"><!></div></div>'),Ba=B('<form><p> </p> <div class="mb-2"><input type="text" name="issuerConfirm"> <!></div> <div class="flex flex-row justify-end"><button type="submit" class="btn danger flex flex-shrink"><!> </button></div></form>');function Oa(n,t){Pe(t,!0);let l=m(""),p=ja(),b=m(c(p.get())),h=m(!1),f=H(()=>e(h)),g=H(()=>pt(e(b),{untested:"untested",tested:"tested",invalid:"invalid",valid:"valid",warning:"warning"}));const S=new Set,T=ot(()=>{p({issuer:t.issuer,issuerConfirm:e(l)},Array.from(S)).done(j=>{o(b,c(j))}),S.clear()},300);function C(){S.add("name"),T(),T.flush()}async function O(j){j.preventDefault();try{o(h,!0),o(l,c(e(l).trim())),C(),e(b).isValid()&&(await Ge.deleteTenant(t.tenantId,t.applicationId),t.onDelete())}catch(ae){await rt(ae)}finally{o(h,!1)}}var w=Ba(),y=r(w),v=r(y,!0);d(()=>x(v,Vt())),a(y);var u=s(y,2),k=r(u);te(k);const A=H(()=>`w-full ${e(g)("issuerConfirm")??""}`);d(()=>F(k,"placeholder",Ut({issuer:t.issuer}))),k.__input=[Da,S,T];var q=s(k,2);ee(q,{name:"issuerConfirm",get result(){return e(b)}}),a(u);var R=s(u,2),L=r(R),i=r(L);{var P=j=>{var ae=Ma(),se=r(ae),le=r(se);at(le),a(se),a(ae),E(j,ae)};be(i,j=>{e(h)&&j(P)})}var N=s(i);d(()=>x(N,` ${Yt()??""}`)),a(L),a(R),a(w),d(()=>{Y(k,e(A)),L.disabled=e(f)}),tt("submit",w,O),Q(k,()=>e(l),j=>o(l,j)),E(n,w),je()}ze(["input"]);var qa=B('<div class="mr-2 flex flex-row justify-center"><div class="inline-block h-6 w-6"><!></div></div>'),Ha=B('<form><!> <div class="flex flex-row justify-end"><button type="submit" class="btn primary flex flex-shrink"><!> </button></div></form>');function La(n,t){Pe(t,!0);let l=m(!1),p=m(!1),b=H(()=>e(l)||!e(p)),h=m(c(t.tenant.algorithm)),f=m(c(t.tenant.audience)),g=m(c(t.tenant.clientId)),S=m(c(t.tenant.expiresInSeconds)),T=m(c(t.tenant.issuer)),C=m(c(t.tenant.privateKey)),O=m(c(t.tenant.publicKey)),w=m(c(t.tenant.refreshExpiresInSeconds));async function y(i){i.preventDefault();try{o(l,!0),e(p)&&t.onEdit(await Ge.updateTenant(t.tenant.id,{algorithm:e(h),audience:e(f),clientId:e(g)?e(g):void 0,expiresInSeconds:e(S),issuer:e(T),privateKey:e(C)?e(C):void 0,publicKey:e(O)?e(O):void 0,refreshExpiresInSeconds:e(w)},t.applicationId))}catch(P){await rt(P)}finally{o(l,!1)}}var v=Ha(),u=r(v);gt(u,{get algorithm(){return e(h)},set algorithm(i){o(h,c(i))},get audience(){return e(f)},set audience(i){o(f,c(i))},get clientId(){return e(g)},set clientId(i){o(g,c(i))},get expiresInSeconds(){return e(S)},set expiresInSeconds(i){o(S,c(i))},get issuer(){return e(T)},set issuer(i){o(T,c(i))},get privateKey(){return e(C)},set privateKey(i){o(C,c(i))},get publicKey(){return e(O)},set publicKey(i){o(O,c(i))},get refreshExpiresInSeconds(){return e(w)},set refreshExpiresInSeconds(i){o(w,c(i))},get valid(){return e(p)},set valid(i){o(p,c(i))}});var k=s(u,2),A=r(k),q=r(A);{var R=i=>{var P=qa(),N=r(P),j=r(N);at(j),a(N),a(P),E(i,P)};be(q,i=>{e(l)&&i(R)})}var L=s(q);d(()=>x(L,` ${Zt()??""}`)),a(A),a(k),a(v),d(()=>A.disabled=e(b)),tt("submit",v,y),E(n,v),je()}const st=20;function Fa(n,t){o(t,!0)}var za=B('<button class="btn secondary icon lg"><!></button>'),Ga=B('<button class="flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"><!><span class="ms-4"> </span></button> <button class="flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"><!><span class="ms-4"> </span></button>',1),Ra=B('<tr class="group"><td> </td><td> </td><td> </td><td> </td><td> </td><td class="flex justify-end"><div class="flex flex-shrink"><!></div></td></tr>'),Ua=B("<h3> </h3>"),Va=B("<h3> </h3>"),Ya=B("<h3> </h3>"),Za=B('<div class="container mx-auto my-4"><div class="bg-white dark:bg-gray-800 shadow-lg p-4 rounded-lg"><div class="flex flex-grow justify-between"><a class="flex flex-row items-center"><button class="btn primary icon"><!></button> <span class="ms-2"> </span></a> <button class="btn primary icon lg"><!></button></div> <table class="table-auto w-full"><thead><tr class="text-left border-b"><th> </th><th> </th><th> </th><th> </th><th> </th><th></th></tr></thead><tbody></tbody></table></div></div> <!> <!> <!>',1);function vr(n,t){Pe(t,!0);let l=c([]),p=m(0),b=m(!0);ut(h);async function h(){if(!e(b))return;const I=await Ge.allTenants(e(p)*st,st,!0,t.data.applicationId);o(b,c(I.hasMore)),o(p,e(p)+1),l.push(...I.items)}let f=m(!1);function g(I){l.unshift(I),o(f,!1)}let S=m(void 0),T=m(!1);function C(I){return()=>{o(S,c(I)),o(T,!0)}}function O(I){const _=l.findIndex(K=>K.id===(I==null?void 0:I.id));_!==-1&&(l[_]=I),o(S,void 0),o(T,!1)}let w=m(void 0),y=m(!1);function v(I){return()=>{o(w,c(I)),o(y,!0)}}function u(){const I=l.findIndex(_=>{var K;return _.id===((K=e(w))==null?void 0:K.id)});I!==-1&&l.splice(I,1),o(w,void 0),o(y,!1)}const k=oa(),[A,q]=k;var R=Za();kt(I=>{d(()=>It.title=Jt())});var L=pe(R),i=r(L),P=r(i),N=r(P);d(()=>F(N,"href",A(`${ca}/`,void 0)));var j=r(N),ae=r(j);ba(ae,{}),a(j);var se=s(j,2),le=r(se,!0);d(()=>x(le,Xt())),a(se),a(N);var de=s(N,2);de.__click=[Fa,f];var Re=r(de);va(Re,{}),a(de),a(P);var W=s(P,2),ye=r(W),De=r(ye),oe=r(De),Ie=r(oe,!0);d(()=>x(Ie,$t())),a(oe);var we=s(oe),re=r(we,!0);d(()=>x(re,ea())),a(we);var Se=s(we),Ue=r(Se,!0);d(()=>x(Ue,ta())),a(Se);var ue=s(Se),Ke=r(ue,!0);d(()=>x(Ke,aa())),a(ue);var Me=s(ue),ne=r(Me,!0);d(()=>x(ne,ra())),a(Me),wt(),a(De),a(ye);var Be=s(ye);dt(Be,23,()=>l,I=>I.id,(I,_,K)=>{var D=Ra(),M=r(D),X=r(M,!0);a(M);var z=s(M),ie=r(z,!0);a(z);var Ee=s(z),Ve=r(Ee,!0);a(Ee);var ce=s(Ee),Te=r(ce,!0);d(()=>x(Te,e(_).updatedAt.toLocaleString())),a(ce);var Ne=s(ce),qe=r(Ne,!0);d(()=>x(qe,e(_).createdAt.toLocaleString())),a(Ne);var He=s(Ne),Le=r(He),Ye=r(Le);ua(Ye,{position:"top-right",anchorPosition:"bottom-right",button:ve=>{var he=za(),V=r(he);pa(V,{}),a(he),E(ve,he)},children:(ve,he)=>{var V=Ga(),xe=pe(V),Je=H(()=>C(e(_)));xe.__click=function(...We){var Ce;(Ce=e(Je))==null||Ce.apply(this,We)};var U=r(xe);_a(U,{});var _e=s(U),fe=r(_e,!0);d(()=>x(fe,na())),a(_e),a(xe);var ge=s(xe,2),Qe=H(()=>v(e(_)));ge.__click=function(...We){var Ce;(Ce=e(Qe))==null||Ce.apply(this,We)};var nt=r(ge);fa(nt,{});var it=s(nt),yt=r(it,!0);d(()=>x(yt,ia())),a(it),a(ge),E(ve,V)},$$slots:{button:!0,default:!0}}),a(Le),a(He),a(D),d(()=>{la(D,"border-b",e(K)<l.length-1),x(X,e(_).id),x(ie,e(_).issuer),x(Ve,e(_).clientId)}),E(I,D)}),a(Be),a(W),a(i),a(L);var Oe=s(L,2);Xe(Oe,{get open(){return e(f)},set open(_){o(f,c(_))},title:_=>{var K=Ua(),D=r(K,!0);d(()=>x(D,sa())),a(K),E(_,K)},children:(_,K)=>{Pa(_,{get applicationId(){return t.data.applicationId},onCreate:g})},$$slots:{title:!0,default:!0}});var me=s(Oe,2);Xe(me,{get open(){return e(T)},set open(_){o(T,c(_))},title:_=>{var K=Va(),D=r(K,!0);d(()=>{var M;return x(D,Qt({issuer:((M=e(S))==null?void 0:M.issuer)||""}))}),a(K),E(_,K)},children:(_,K)=>{var D=Fe(),M=pe(D);{var X=z=>{La(z,{get applicationId(){return t.data.applicationId},get tenant(){return e(S)},onEdit:O})};be(M,z=>{e(S)&&z(X)})}E(_,D)},$$slots:{title:!0,default:!0}});var ke=s(me,2);Xe(ke,{get open(){return e(y)},set open(_){o(y,c(_))},title:_=>{var K=Ya(),D=r(K,!0);d(()=>{var M;return x(D,Wt({issuer:((M=e(w))==null?void 0:M.issuer)||""}))}),a(K),E(_,K)},children:(_,K)=>{var D=Fe(),M=pe(D);{var X=z=>{Oa(z,{get applicationId(){return t.data.applicationId},get tenantId(){return e(w).id},get issuer(){return e(w).issuer},onDelete:u})};be(M,z=>{e(w)&&z(X)})}E(_,D)},$$slots:{title:!0,default:!0}}),E(n,R),je()}ze(["click"]);export{vr as component};
