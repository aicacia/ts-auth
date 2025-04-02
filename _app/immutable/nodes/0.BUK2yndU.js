import{a as He,t as se,b as ge}from"../chunks/token.svelte.1tKc01KO.js";import{c as G,a as u,t as N,b as le}from"../chunks/disclose-version.BdPpbG8G.js";import{aO as Ge,aW as Fe,aQ as Ve,i as qe,l as ce,N as We,V as Ze,j as Ke,m as Ye,U as Je,p as et,f as T,a as at,t as _,g as a,z as Z,o as Qe,u as At,n as Xe,c as i,r,s as f,d as U,b as x,ao as ta}from"../chunks/runtime.XTayOKyQ.js";import{s as me}from"../chunks/snippet.mxoOYLXA.js";import"../chunks/legacy.AZeTKGhb.js";import{e as Bt,k as ea,r as aa,t as vt,n as na,d as he,I as be,b as xe,G as Ht,m as Gt,C as Pt,v as St,s as ye,a as we,S as Ft,h as Vt}from"../chunks/InputResults.BHVbwuCU.js";import{I as it,s as ot,b as ra,t as de,f as ue,M as Lt,D as $e,P as ia,T as oa,E as sa,a as la}from"../chunks/trash.C2pZKfXe.js";import{h as ca,d as mt,s as w,e as qt}from"../chunks/render.CVMVLslR.js";import{i as W}from"../chunks/runtime.vqD1BrVN.js";import{a as ke,c as Ae,l as st,s as lt,p as Ct,b as da}from"../chunks/props.CLxh3Ck6.js";import{s as Ut,p as Dt,n as Le,a as Rt,i as ua}from"../chunks/i18n.BOG0A1c7.js";import{d as va,a as gt,c as fa}from"../chunks/api.svelte.DzjM_Kp1.js";import{L as _a,s as pa,a as ga,g as Pe}from"../chunks/index.BCwrhWKg.js";import{b as nt}from"../chunks/paths.BeVl75iW.js";import{i as ma,a as ha,g as Se}from"../chunks/entry.BP_E8CG1.js";import{s as rt,e as Wt,r as Ce,bR as ba,bS as xa,H as ya,bT as wa,bU as $a,bV as ka,bW as Aa,bX as La,bY as Pa,bZ as Sa,b_ as Ca,b$ as Na,c0 as ja,c1 as Ta,c2 as Ma,c3 as Ea,c4 as Ia,c5 as Oa,c6 as za,c as ve,c7 as Ua,c8 as Da,c9 as Ra,ca as Ba,j as Ha}from"../chunks/messages.wercaZ5l.js";import{p as H}from"../chunks/proxy.BKNo-OHe.js";import{p as Ga}from"../chunks/index.Xid77Hwu.js";import{s as Fa,a as fe}from"../chunks/application.svelte.dZ1RNM2S.js";import{o as Ne}from"../chunks/index-client.DhLDVXYR.js";import{a as Nt}from"../chunks/index.B-XEKY0d.js";import{E as zt}from"../chunks/external-link.CMSSYsYq.js";function Va(n,t,e){ce&&We();var c=n,o=Je,s,l=Ge()?Fe:Ve;qe(()=>{l(o,o=t())&&(s&&Ze(s),s=Ke(()=>e(c)))}),ce&&(c=Ye)}function qa(n,t){return n.protocol!==t.protocol?t.href:t.password||t.username?"//"+[t.username,t.password].filter(Boolean).join(":")+"@"+t.host+t.pathname+t.search+t.hash:n.host!==t.host?"//"+t.host+t.pathname+t.search+t.hash:t.pathname+t.search+t.hash}function Wa(n,t,e){const c=new URL(e??"/",t).pathname;return n.origin!==t.origin||!n.pathname.startsWith(c)}var Za=N('<link rel="alternate">');function Ka(n,t){et(t,!0);const e=ke(),c=()=>Ae(Dt,"$page",e),o=Z(()=>Le(nt,new URL(c().url))||"/"),s=(m,L)=>{const v=[];for(const h of t.availableLanguageTags){const A=L.getLocalisedPath(m,h),M=Ut(A,a(o),void 0),I=new URL(M,new URL(c().url)).href;v.push(I)}return v},l=Z(()=>Rt(c().url.pathname,a(o))[0]),d=Z(()=>t.strategy.getCanonicalPath(a(l),t.currentLang)),$=Z(()=>s(a(d),t.strategy));var k=G(),p=T(k);{var g=m=>{var L=G(),v=T(L);Bt(v,17,()=>a($),ea,(h,A,M)=>{var I=Za();_(()=>{rt(I,"hreflang",t.availableLanguageTags[M]),rt(I,"href",a(A))}),u(h,I)}),u(m,L)};W(p,m=>{t.availableLanguageTags.length>=1&&m(g)})}u(n,k),at()}const Ya=(n,t)=>`${_a}=${n};Path=${t};SameSite=lax;Max-Age=31557600`;function Ja(n,t){et(t,!0);const e=ke(),c=()=>Ae(Dt,"$page",e),o=Z(()=>Le(nt,new URL(c().url))||"/"),s=Z(()=>t.languageTag??t.i18n.getLanguageFromUrl(c().url));Qe(()=>{t.i18n.config.runtime.setLanguageTag(a(s)),document.documentElement.lang=a(s),document.documentElement.dir=t.i18n.config.textDirection[a(s)]??"ltr"});let l=0;At(()=>{a(s)&&(l+=1)}),At(()=>{a(s)&&(l>1||va)&&ma(ga)});function d(p,g){try{const m=new URL(ha(Dt).url),[L,v]=Rt(m.pathname,a(o)),h=t.i18n.strategy.getCanonicalPath(L,a(s)),A=new URL(m);A.pathname=Ut(h,a(o),v);const M=new URL(p,new URL(A));if(Wa(M,m,a(o))||t.i18n.config.exclude(M.pathname))return p;const I=g??a(s),[D,q]=Rt(M.pathname,a(o)),F=t.i18n.strategy.getLocalisedPath(D,I),y=new URL(M);return y.pathname=Ut(F,a(o),q),qa(m,y)}catch{return p}}pa({translateHref:d}),At(()=>{document.cookie=Ya(a(s),a(o))});var $=G();ca(p=>{var g=G(),m=T(g);{var L=v=>{Ka(v,{get availableLanguageTags(){return t.i18n.config.runtime.availableLanguageTags},get strategy(){return t.i18n.strategy},get currentLang(){return a(s)}})};W(m,v=>{t.i18n.config.seo.noAlternateLinks!==!0&&!t.i18n.config.exclude(c().url.pathname)&&v(L)})}u(p,g)});var k=T($);Va(k,()=>a(s),p=>{var g=G(),m=T(g);me(m,()=>t.children??Xe),u(p,g)}),u(n,$),at()}const Qa=!0,Xa=!0,tn=async n=>{await n.parent(),await He()},$r=Object.freeze(Object.defineProperty({__proto__:null,load:tn,prerender:Qa,ssr:Xa},Symbol.toStringTag,{value:"Module"}));function en(n){const t=n-1;return t*t*t+1}function an(n,{from:t,to:e},c={}){var{delay:o=0,duration:s=y=>Math.sqrt(y)*120,easing:l=en}=c,d=getComputedStyle(n),$=d.transform==="none"?"":d.transform,[k,p]=d.transformOrigin.split(" ").map(parseFloat);k/=n.clientWidth,p/=n.clientHeight;var g=nn(n),m=n.clientWidth/e.width/g,L=n.clientHeight/e.height/g,v=t.left+t.width*k,h=t.top+t.height*p,A=e.left+e.width*k,M=e.top+e.height*p,I=(v-A)*m,D=(h-M)*L,q=t.width/e.width,F=t.height/e.height;return{delay:o,duration:typeof s=="function"?s(Math.sqrt(I*I+D*D)):s,easing:l,css:(y,j)=>{var S=j*I,R=j*D,O=y+j*q,C=y+j*F;return`transform: ${$} translate(${S}px, ${R}px) scale(${O}, ${C});`}}}function nn(n){if("currentCSSZoom"in n)return n.currentCSSZoom;for(var t=n,e=1;t!==null;)e*=+getComputedStyle(t).zoom,t=t.parentElement;return e}function rn(n,t){const e=st(t,["children","$$slots","$$events","$$legacy"]);it(n,lt({name:"circle-x"},()=>e,{iconNode:[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]],children:(o,s)=>{var l=G(),d=T(l);ot(d,t,"default",{}),u(o,l)},$$slots:{default:!0}}))}function on(n,t){const e=st(t,["children","$$slots","$$events","$$legacy"]);it(n,lt({name:"circle-check"},()=>e,{iconNode:[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]],children:(o,s)=>{var l=G(),d=T(l);ot(d,t,"default",{}),u(o,l)},$$slots:{default:!0}}))}function sn(n,t){const e=st(t,["children","$$slots","$$events","$$legacy"]);it(n,lt({name:"info"},()=>e,{iconNode:[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]],children:(o,s)=>{var l=G(),d=T(l);ot(d,t,"default",{}),u(o,l)},$$slots:{default:!0}}))}function ln(n,t){const e=st(t,["children","$$slots","$$events","$$legacy"]);it(n,lt({name:"triangle-alert"},()=>e,{iconNode:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]],children:(o,s)=>{var l=G(),d=T(l);ot(d,t,"default",{}),u(o,l)},$$slots:{default:!0}}))}function cn(n,t){aa(t.notification.id)}var dn=N('<button class="m-1 flex flex-grow cursor-pointer flex-row items-center px-3 py-2 shadow"><div class="mr-2 h-6 w-6 text-white"><!></div> <div class="flex-grow text-left text-white"> </div></button>');function un(n,t){et(t,!0);var e=dn();e.__click=[cn,t];var c=i(e),o=i(c);{var s=k=>{rn(k,{})},l=k=>{var p=G(),g=T(p);{var m=v=>{on(v,{})},L=v=>{var h=G(),A=T(h);{var M=D=>{sn(D,{})},I=D=>{var q=G(),F=T(q);{var y=j=>{ln(j,{})};W(F,j=>{t.notification.type==="warning"&&j(y)},!0)}u(D,q)};W(A,D=>{t.notification.type==="info"?D(M):D(I,!1)},!0)}u(v,h)};W(g,v=>{t.notification.type==="success"?v(m):v(L,!1)},!0)}u(k,p)};W(o,k=>{t.notification.type==="error"?k(s):k(l,!1)})}r(c);var d=f(c,2),$=i(d,!0);r(d),r(e),_(()=>{vt(e,"bg-green-600",t.notification.type==="success"),vt(e,"bg-red-600",t.notification.type==="error"),vt(e,"bg-blue-600",t.notification.type==="info"),vt(e,"bg-yellow-600",t.notification.type==="warning"),w($,t.notification.message)}),u(n,e),at()}mt(["click"]);var vn=N("<div><!></div>"),fn=N('<div class="fixed left-1/2 top-0 z-[100000] -translate-x-1/2"><div class="flex flex-col"></div></div>');function _n(n){var t=fn(),e=i(t);Bt(e,13,()=>na,c=>c.id,(c,o)=>{var s=vn(),l=i(s);un(l,{get notification(){return a(o)}}),r(s),ra(s,()=>an,null),de(1,s,()=>ue,()=>({y:-64,duration:300})),de(2,s,()=>ue,()=>({y:-64,duration:300})),u(c,s)}),r(e),r(t),u(n,t)}function pn(n,t){const e=st(t,["children","$$slots","$$events","$$legacy"]);it(n,lt({name:"log-in"},()=>e,{iconNode:[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}],["polyline",{points:"10 17 15 12 10 7"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12"}]],children:(o,s)=>{var l=G(),d=T(l);ot(d,t,"default",{}),u(o,l)},$$slots:{default:!0}}))}function _e(n,t){const e=st(t,["children","$$slots","$$events","$$legacy"]);it(n,lt({name:"log-out"},()=>e,{iconNode:[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}],["polyline",{points:"16 17 21 12 16 7"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12"}]],children:(o,s)=>{var l=G(),d=T(l);ot(d,t,"default",{}),u(o,l)},$$slots:{default:!0}}))}function gn(n,t){const e=st(t,["children","$$slots","$$events","$$legacy"]);it(n,lt({name:"lock"},()=>e,{iconNode:[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]],children:(o,s)=>{var l=G(),d=T(l);ot(d,t,"default",{}),u(o,l)},$$slots:{default:!0}}))}function mn(n,t){const e=st(t,["children","$$slots","$$events","$$legacy"]);it(n,lt({name:"server"},()=>e,{iconNode:[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]],children:(o,s)=>{var l=G(),d=T(l);ot(d,t,"default",{}),u(o,l)},$$slots:{default:!0}}))}function hn(n,t){const e=st(t,["children","$$slots","$$events","$$legacy"]);it(n,lt({name:"server-off"},()=>e,{iconNode:[["path",{d:"M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5"}],["path",{d:"M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z"}],["path",{d:"M22 17v-1a2 2 0 0 0-2-2h-1"}],["path",{d:"M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z"}],["path",{d:"M6 18h.01"}],["path",{d:"m2 2 20 20"}]],children:(o,s)=>{var l=G(),d=T(l);ot(d,t,"default",{}),u(o,l)},$$slots:{default:!0}}))}const bn=()=>Ht((n={},t)=>{t.length&&(Gt(t),Pt("name",Wt(),()=>{St(n.name).isNotBlank()}))});function xn(n,t,e){t.add(n.currentTarget.name),e()}var yn=N('<div class="mb-2"><input type="text" name="name"> <!></div>');function je(n,t){et(t,!0);let e=Ct(t,"name",15),c=Ct(t,"valid",15,!1),o=bn(),s=U(H(o.get())),l=Z(()=>we(a(s),{untested:"untested",tested:"tested",invalid:"invalid",valid:"valid",warning:"warning"}));const d=new Set,$=he(()=>{o({name:e()},Array.from(d)).done(v=>{x(s,H(v)),c(a(s).isValid())}),d.clear()},300);function k(){d.add("name"),$(),$.flush()}Ne(k);var p=yn(),g=i(p);Ce(g);const m=Z(()=>`w-full ${a(l)("name")??""}`);_(()=>rt(g,"placeholder",ba())),g.__input=[xn,d,$];var L=f(g,2);be(L,{name:"name",get result(){return a(s)}}),r(p),_(()=>ye(g,a(m))),xe(g,e),u(n,p),at()}mt(["input"]);const wn=()=>Ht((n={},t)=>{t.length&&(Gt(t),Pt("name",Wt(),()=>{St(n.name).isNotBlank()}))});var $n=N('<div class="mr-2 flex flex-row justify-center"><div class="inline-block h-6 w-6"><!></div></div>'),kn=N('<form><!> <div class="flex flex-row justify-end"><button type="submit" class="btn primary flex flex-shrink"><!> </button></div></form>');function An(n,t){et(t,!0);let e=U(""),c=wn();H(c.get());let o=U(!1),s=U(!1),l=Z(()=>a(s)||!a(o));async function d(h){h.preventDefault();try{x(s,!0),a(o)&&t.onCreate(await Nt.createApplication({name:a(e)}))}catch(A){await Vt(A)}finally{x(s,!1)}}var $=kn(),k=i($);je(k,{get name(){return a(e)},set name(h){x(e,H(h))},get valid(){return a(o)},set valid(h){x(o,H(h))}});var p=f(k,2),g=i(p),m=i(g);{var L=h=>{var A=$n(),M=i(A),I=i(M);Ft(I),r(M),r(A),u(h,A)};W(m,h=>{a(s)&&h(L)})}var v=f(m);_(()=>w(v,` ${xa()??""}`)),r(g),r(p),r($),_(()=>g.disabled=a(l)),qt("submit",$,d),u(n,$),at()}const Ln=()=>Ht((n={},t)=>{t.length&&(Gt(t),Pt("nameConfirm",Wt(),()=>{St(n.nameConfirm).isNotBlank()}),Pt("nameConfirm",ya(),()=>{St(n.name===n.nameConfirm).isTruthy()}))});function Pn(n,t,e){t.add(n.currentTarget.name),e()}var Sn=N('<div class="mr-2 flex flex-row justify-center"><div class="inline-block h-6 w-6"><!></div></div>'),Cn=N('<form><p> </p> <div class="mb-2"><input type="text" name="nameConfirm"> <!></div> <div class="flex flex-row justify-end"><button type="submit" class="btn danger flex flex-shrink"><!> </button></div></form>');function Nn(n,t){et(t,!0);let e=U(""),c=Ln(),o=U(H(c.get())),s=U(!1),l=Z(()=>a(s)),d=Z(()=>we(a(o),{untested:"untested",tested:"tested",invalid:"invalid",valid:"valid",warning:"warning"}));const $=new Set,k=he(()=>{c({name:t.name,nameConfirm:a(e)},Array.from($)).done(S=>{x(o,H(S))}),$.clear()},300);function p(){$.add("name"),k(),k.flush()}async function g(S){S.preventDefault();try{x(s,!0),x(e,H(a(e).trim())),p(),a(o).isValid()&&(await Nt.deleteApplication(t.applicationId),t.onDelete())}catch(R){await Vt(R)}finally{x(s,!1)}}var m=Cn(),L=i(m),v=i(L,!0);_(()=>w(v,$a())),r(L);var h=f(L,2),A=i(h);Ce(A);const M=Z(()=>`w-full ${a(d)("nameConfirm")??""}`);_(()=>rt(A,"placeholder",wa({name:t.name}))),A.__input=[Pn,$,k];var I=f(A,2);be(I,{name:"nameConfirm",get result(){return a(o)}}),r(h);var D=f(h,2),q=i(D),F=i(q);{var y=S=>{var R=Sn(),O=i(R),C=i(O);Ft(C),r(O),r(R),u(S,R)};W(F,S=>{a(s)&&S(y)})}var j=f(F);_(()=>w(j,` ${ka()??""}`)),r(q),r(D),r(m),_(()=>{ye(A,a(M)),q.disabled=a(l)}),qt("submit",m,g),xe(A,()=>a(e),S=>x(e,S)),u(n,m),at()}mt(["input"]);var jn=N('<div class="mr-2 flex flex-row justify-center"><div class="inline-block h-6 w-6"><!></div></div>'),Tn=N('<form><!> <div class="flex flex-row justify-end"><button type="submit" class="btn primary flex flex-shrink"><!> </button></div></form>');function Mn(n,t){et(t,!0);let e=Ct(t,"name",15,""),c=U(!1),o=U(!1),s=Z(()=>a(o)||!a(c));async function l(v){v.preventDefault();try{x(o,!0),a(c)&&t.onEdit(await Nt.updateApplication(t.applicationId,{name:e()}))}catch(h){await Vt(h)}finally{x(o,!1)}}var d=Tn(),$=i(d);je($,{get name(){return e()},set name(v){e(v)},get valid(){return a(c)},set valid(v){x(c,H(v))}});var k=f($,2),p=i(k),g=i(p);{var m=v=>{var h=jn(),A=i(h),M=i(A);Ft(M),r(A),r(h),u(v,h)};W(g,v=>{a(o)&&v(m)})}var L=f(g);_(()=>w(L,` ${Aa()??""}`)),r(p),r(k),r(d),_(()=>p.disabled=a(s)),qt("submit",d,l),u(n,d),at()}const pe=20;var En=N('<button class="btn secondary icon lg"><!></button>'),In=N('<a class="flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"><!><span class="ms-4"> </span></a> <a class="flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"><!><span class="ms-4"> </span></a> <a class="flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"><!><span class="ms-4"> </span></a> <button class="flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"><!><span class="ms-4"> </span></button> <button class="flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"><!><span class="ms-4"> </span></button>',1),On=N('<tr class="group cursor-pointer hover:bg-opacity-25 hover:bg-black"><td> </td><td> </td><td> </td><td> </td><td class="flex justify-end"><div class="flex flex-shrink"><!></div></td></tr>'),zn=N("<h3> </h3>"),Un=N("<h3> </h3>"),Dn=N("<h3> </h3>"),Rn=N('<table class="table-auto w-full"><thead><tr class="text-left border-b"><th> </th><th> </th><th> </th><th> </th><th></th></tr></thead><tbody></tbody></table> <!> <!> <!>',1);function Bn(n,t){et(t,!0);let e=Ct(t,"applications",31,()=>H([])),c=U(0),o=U(!0),s=U(!1);Ne(l);async function l(){if(!a(o))return;let P;x(s,!0);try{P=await Nt.allApplications(a(c)*pe,pe)}finally{x(s,!1)}x(o,H(P.hasMore)),x(c,a(c)+1),e().push(...P.items)}let d=U(!1);function $(){x(d,!0)}function k(P){e().unshift(P),x(d,!1)}let p=U(void 0),g=U(!1);function m(P){return()=>{x(p,H(P)),x(g,!0)}}function L(P){const b=e().findIndex(E=>E.id===(P==null?void 0:P.id));b!==-1&&e(e()[b]=P,!0),x(p,void 0),x(g,!1)}let v=U(void 0),h=U(!1);function A(P){return()=>{x(v,H(P)),x(h,!0)}}function M(){const P=e().findIndex(b=>{var E;return b.id===((E=a(v))==null?void 0:E.id)});P!==-1&&e().splice(P,1),x(v,void 0),x(h,!1)}function I(P){return()=>{t.onSelect&&t.onSelect(P)}}const D=Pe(),[q,F]=D;var y=Rn(),j=T(y),S=i(j),R=i(S),O=i(R),C=i(O,!0);_(()=>w(C,Sa())),r(O);var ct=f(O),ft=i(ct,!0);_(()=>w(ft,Ca())),r(ct);var V=f(ct),B=i(V,!0);_(()=>w(B,Na())),r(V);var Y=f(V),Q=i(Y,!0);_(()=>w(Q,ja())),r(Y),ta(),r(R),r(S);var tt=f(S);Bt(tt,23,e,P=>P.id,(P,b,E)=>{var z=On(),K=Z(()=>I(a(b)));z.__click=function(...Yt){var ut;(ut=a(K))==null||ut.apply(this,Yt)};var X=i(z),J=i(X,!0);r(X);var dt=f(X),Tt=i(dt,!0);r(dt);var Mt=f(dt),Te=i(Mt,!0);_(()=>w(Te,a(b).updatedAt.toLocaleString())),r(Mt);var Et=f(Mt),Me=i(Et,!0);_(()=>w(Me,a(b).createdAt.toLocaleString())),r(Et);var Zt=f(Et),Kt=i(Zt),Ee=i(Kt);$e(Ee,{position:"top-right",anchorPosition:"bottom-right",button:ut=>{var bt=En(),xt=i(bt);sa(xt,{}),r(bt),u(ut,bt)},children:(ut,bt)=>{var xt=In(),yt=T(xt);_(()=>rt(yt,"href",q(`${nt}/applications/${a(b).id}/users`,void 0)));var Jt=i(yt);zt(Jt,{});var Qt=f(Jt),Ie=i(Qt,!0);_(()=>w(Ie,Ta())),r(Qt),r(yt);var wt=f(yt,2);_(()=>rt(wt,"href",q(`${nt}/applications/${a(b).id}/service-accounts`,void 0)));var Xt=i(wt);zt(Xt,{});var te=f(Xt),Oe=i(te,!0);_(()=>w(Oe,Ma())),r(te),r(wt);var $t=f(wt,2);_(()=>rt($t,"href",q(`${nt}/applications/${a(b).id}/tenants`,void 0)));var ee=i($t);zt(ee,{});var ae=f(ee),ze=i(ae,!0);_(()=>w(ze,Ea())),r(ae),r($t);var kt=f($t,2),Ue=Z(()=>m(a(b)));kt.__click=function(...Ot){var pt;(pt=a(Ue))==null||pt.apply(this,Ot)};var ne=i(kt);ia(ne,{});var re=f(ne),De=i(re,!0);_(()=>w(De,Ia())),r(re),r(kt);var It=f(kt,2),Re=Z(()=>A(a(b)));It.__click=function(...Ot){var pt;(pt=a(Re))==null||pt.apply(this,Ot)};var ie=i(It);oa(ie,{});var oe=f(ie),Be=i(oe,!0);_(()=>w(Be,Oa())),r(oe),r(It),u(ut,xt)},$$slots:{button:!0,default:!0}}),r(Kt),r(Zt),r(z),_(()=>{vt(z,"border-b",a(E)<e().length-1),w(J,a(b).id),w(Tt,a(b).name)}),u(P,z)}),r(tt),r(j);var ht=f(j,2);Lt(ht,{get open(){return a(d)},set open(b){x(d,H(b))},title:b=>{var E=zn(),z=i(E,!0);_(()=>w(z,za())),r(E),u(b,E)},children:(b,E)=>{An(b,{onCreate:k})},$$slots:{title:!0,default:!0}});var _t=f(ht,2);Lt(_t,{get open(){return a(g)},set open(b){x(g,H(b))},title:b=>{var E=Un(),z=i(E,!0);_(()=>{var K;return w(z,La({name:((K=a(p))==null?void 0:K.name)||""}))}),r(E),u(b,E)},children:(b,E)=>{var z=G(),K=T(z);{var X=J=>{Mn(J,{get applicationId(){return a(p).id},get name(){return a(p).name},onEdit:L})};W(K,J=>{a(p)&&J(X)})}u(b,z)},$$slots:{title:!0,default:!0}});var jt=f(_t,2);return Lt(jt,{get open(){return a(h)},set open(b){x(h,H(b))},title:b=>{var E=Dn(),z=i(E,!0);_(()=>{var K;return w(z,Pa({name:((K=a(v))==null?void 0:K.name)||""}))}),r(E),u(b,E)},children:(b,E)=>{var z=G(),K=T(z);{var X=J=>{Nn(J,{get applicationId(){return a(v).id},get name(){return a(v).name},onDelete:M})};W(K,J=>{a(v)&&J(X)})}u(b,z)},$$slots:{title:!0,default:!0}}),u(n,y),at({onCreate:$})}mt(["click"]);async function Hn(n,t){ge(),t(),await Se(`${nt}/signin`)}async function Gn(n,t){fa(),ge(),t(),await Se(`${nt}/api`)}function Fn(n,t){x(t,!0)}var Vn=N('<button class="btn primary ms-2"><!></button>'),qn=N('<button class="btn primary icon flex"><!></button>'),Wn=N('<div class="flex flex-col"><div class="flex flex-row justify-between content-center m-1"><span class="mr-2"> </span><code class="px-1 rounded bg-gray-950"> </code></div> <div class="flex flex-row justify-between content-center m-1"><span class="mr-2"> </span><code class="px-1 rounded bg-gray-950"> </code></div></div> <button class="flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"><!><span class="ms-4"> </span></button>',1),Zn=N('<button class="flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"><!><span class="ms-4"> </span></button>'),Kn=N('<a class="default flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600 svelte-1pg0nvr"><!><span class="ms-4"> </span></a>'),Yn=N('<!> <hr class="my-1"> <!>',1),Jn=N('<div class="flex flex-grow justify-between"><h3> </h3> <div class="flex flex-row justify-center items-start"><button class="btn primary icon lg"><!></button></div></div>'),Qn=N('<div class="flex flex-shrink flex-row justify-between border-b border-gray-100 bg-white dark:border-gray-900 dark:bg-gray-800"><div class="ms-2 flex flex-shrink flex-row items-center justify-center"><a class="btn icon"><!></a> <!></div> <div class="me-2 flex flex-shrink flex-row"><div class="flex flex-col content-center justify-center m-1"><!></div></div></div> <!>',1);function Xn(n,t){et(t,!0);let e=U(!1);function c(){x(e,!1)}let o=U(!1),s=U(void 0);async function l(F){await Fa(F),x(o,!1)}const d=Pe(),[$,k]=d;var p=Qn(),g=T(p),m=i(g),L=i(m);_(()=>rt(L,"href",$(`${nt}/`,void 0)));var v=i(L);gn(v,{}),r(L);var h=f(L,2);{var A=F=>{var y=Vn();y.__click=[Fn,o];var j=i(y);{var S=O=>{var C=le();_(()=>w(C,fe.current.name)),u(O,C)},R=O=>{var C=le();_(()=>w(C,ve())),u(O,C)};W(j,O=>{var C;(C=fe)!=null&&C.current?O(S):O(R,!1)})}r(y),u(F,y)};W(h,F=>{gt.connected&&se.validToken&&F(A)})}r(m);var M=f(m,2),I=i(M),D=i(I);$e(D,{get open(){return a(e)},set open(y){x(e,H(y))},button:y=>{var j=qn(),S=i(j);{var R=C=>{mn(C,{})},O=C=>{hn(C,{})};W(S,C=>{gt.connected?C(R):C(O,!1)})}r(j),u(y,j)},children:(y,j)=>{var S=Yn(),R=T(S);{var O=V=>{var B=Wn(),Y=T(B),Q=i(Y),tt=i(Q),ht=i(tt,!0);_(()=>w(ht,Ua())),r(tt);var _t=f(tt),jt=i(_t,!0);r(_t),r(Q);var P=f(Q,2),b=i(P),E=i(b,!0);_(()=>w(E,Da())),r(b);var z=f(b),K=i(z,!0);r(z),r(P),r(Y);var X=f(Y,2);X.__click=[Gn,c];var J=i(X);_e(J,{});var dt=f(J),Tt=i(dt,!0);_(()=>w(Tt,Ra())),r(dt),r(X),_(()=>{w(jt,gt.url),w(K,gt.tenant)}),u(V,B)};W(R,V=>{gt.connected&&V(O)})}var C=f(R,4);{var ct=V=>{var B=Zn();B.__click=[Hn,c];var Y=i(B);_e(Y,{});var Q=f(Y),tt=i(Q,!0);_(()=>w(tt,Ba())),r(Q),r(B),u(V,B)},ft=V=>{var B=Kn();_(()=>rt(B,"href",$(`${nt}/signin`,void 0))),B.__click=c;var Y=i(B);pn(Y,{});var Q=f(Y),tt=i(Q,!0);_(()=>w(tt,Ha())),r(Q),r(B),_(()=>vt(B,"active",Ga.route.id==="/[locale=locale]/(redirect)/signin")),u(V,B)};W(C,V=>{se.validToken?V(ct):V(ft,!1)})}u(y,S)},$$slots:{button:!0,default:!0}}),r(I),r(M),r(g);var q=f(g,2);Lt(q,{get open(){return a(o)},set open(y){x(o,H(y))},title:y=>{var j=Jn(),S=i(j),R=i(S,!0);_(()=>w(R,ve())),r(S);var O=f(S,2),C=i(O);C.__click=function(...ft){var V,B;(B=(V=a(s))==null?void 0:V.onCreate)==null||B.apply(this,ft)};var ct=i(C);la(ct,{}),r(C),r(O),r(j),u(y,j)},children:(y,j)=>{da(Bn(y,{onSelect:l}),S=>x(s,H(S)),()=>a(s))},$$slots:{title:!0,default:!0}}),u(n,p),at()}mt(["click"]);var tr=N("<!> <!> <!>",1);function kr(n,t){et(t,!0),At(()=>{document.body.classList.add("hydrated")}),Ja(n,{i18n:ua,children:(e,c)=>{var o=tr(),s=T(o);Xn(s,{});var l=f(s,2);me(l,()=>t.children);var d=f(l,2);_n(d),u(e,o)},$$slots:{default:!0}}),at()}export{kr as component,$r as universal};
