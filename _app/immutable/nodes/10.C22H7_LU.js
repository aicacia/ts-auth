import{a as O,t as G,c as ha,b as xa}from"../chunks/disclose-version.B1Ir2FOR.js";import{p as ye,x as c,j as e,y as s,t as n,a as we,c as t,r as a,s as r,l as N,f as Ie,aj as Ha,$ as Ja}from"../chunks/runtime.psM0e5Y8.js";import{d as ke,e as ea,s as v,h as Ka}from"../chunks/render.Cjq5XT8C.js";import{d as Ge,e as Pe,r as $,s as te,c as X,be as Ia,ag as Ye,bf as Ua,bg as Pa,bh as Qa,n as Wa,bi as Xa,bj as Ya,bk as $a,b as ya,bl as et,bm as at,bn as tt,bo as rt,bp as it,bq as lt,br as nt,bs as st,bt as dt,bu as ot,bv as ut,bw as vt,bx as _t,by as ct,bz as mt,bA as ft,bB as bt,bC as pt,bD as gt,bE as ht,bF as xt,bG as yt,bH as wt,bI as kt,bJ as Nt,bK as It,bL as Ut,bM as Pt,bN as Ct,bO as Et,u as Ca,bP as St,bQ as At,bR as jt,v as zt,bS as Dt,bT as qt,bU as Tt,bV as Bt,bW as Vt,bX as Ot,bY as Ft,bZ as Lt,b_ as Mt,b$ as Rt,c0 as Gt,c1 as Zt,c2 as Ht,c3 as Jt}from"../chunks/debounce.BEz6Z4H2.js";import{p as d}from"../chunks/proxy.BhkZ7AL-.js";import{p as W,b as Ea}from"../chunks/props.DuEunOx7.js";import{D as Kt,g as Qt}from"../chunks/Dropdown.CJDi6FvW.js";import{b as Wt}from"../chunks/paths.DJSOlt8t.js";import{i as he}from"../chunks/runtime.CsaQGn2V.js";import{o as ba}from"../chunks/index-client.DYF3A4K-.js";import{u as Ue}from"../chunks/index.L-oD7LBY.js";import{a as Sa,M as ca,P as Xt,T as Yt,E as $t}from"../chunks/Modal.7lH2VM8Q.js";import{I as Y,b as ne,c as $e,G as Ze,m as He,C as me,v as fe,S as aa,h as ta,a as Je,N as ma}from"../chunks/InputResults.vu2d9lBE.js";import{b as er}from"../chunks/select.Cn-LvQI6.js";import"../chunks/isURL.production.FVPybhg7.js";import{C as ar}from"../chunks/chevron-left.UNtsOIeZ.js";const tr=()=>Ze((u={},i)=>{i.length&&(He(i),me("username",Pe(),()=>{fe(u.username).isNotBlank()}),me("active",Pe(),()=>{fe(u.active).isNotBlank()}))});function wa(u,i,l){i.add(u.currentTarget.name),l()}var rr=G('<div class="mr-2 flex flex-row justify-center"><div class="inline-block h-6 w-6"><!></div></div>'),ir=G('<form><div class="mb-2"><label for="username"> </label> <input type="text" name="username"> <!></div> <div class="mb-2"><label for="active"> <input type="checkbox" name="active"></label> <!></div> <div class="flex flex-row justify-end"><button type="submit" class="btn primary flex flex-shrink"><!> </button></div></form>');function lr(u,i){ye(i,!0);let l=c(""),h=c(!0),U=tr(),j=c(d(U.get())),D=c(!1),P=N(()=>e(D)),C=N(()=>Je(e(j),{untested:"untested",tested:"tested",invalid:"invalid",valid:"valid",warning:"warning"}));const f=new Set,w=Ge(()=>{U({username:e(l),active:e(h)},Array.from(f)).done(V=>{s(j,d(V))}),f.clear()},300);function M(){f.add("username"),f.add("active"),w(),w.flush()}async function F(V){V.preventDefault();try{s(D,!0),s(l,d(e(l).trim())),M(),e(j).isValid()&&i.onCreate(await Ue.createUser({active:e(h),username:e(l)},i.applicationId))}catch(R){await ta(R)}finally{s(D,!1)}}var q=ir(),k=t(q),T=t(k),E=t(T,!0);n(()=>v(E,Ua())),a(T);var m=r(T,2);$(m);const S=N(()=>`w-full ${e(C)("username")??""}`);n(()=>te(m,"placeholder",Ia())),m.__input=[wa,f,w];var o=r(m,2);Y(o,{name:"username",get result(){return e(j)}}),a(k);var b=r(k,2),Z=t(b),H=t(Z);n(()=>v(H,`${Pa()??""} `));var B=r(H);$(B);const z=N(()=>Ye(e(C)("active")));B.__input=[wa,f,w],a(Z);var A=r(Z,2);Y(A,{name:"active",get result(){return e(j)}}),a(b);var g=r(b,2),x=t(g),J=t(x);{var K=V=>{var R=rr(),L=t(R),se=t(L);aa(se),a(L),a(R),O(V,R)};he(J,V=>{e(D)&&V(K)})}var le=r(J);n(()=>v(le,` ${Qa()??""}`)),a(x),a(g),a(q),n(()=>{X(m,e(S)),X(B,e(z)),x.disabled=e(P)}),ea("submit",q,F),ne(m,()=>e(l),V=>s(l,V)),$e(B,()=>e(h),V=>s(h,V)),O(u,q),we()}ke(["input"]);const nr=()=>Ze((u={},i)=>{i.length&&(He(i),me("usernameConfirm",Pe(),()=>{fe(u.usernameConfirm).isNotBlank()}),me("usernameConfirm",Wa(),()=>{fe(u.username===u.usernameConfirm).isTruthy()}))});function sr(u,i,l){i.add(u.currentTarget.name),l()}var dr=G('<div class="mr-2 flex flex-row justify-center"><div class="inline-block h-6 w-6"><!></div></div>'),or=G('<form><p> </p> <div class="mb-2"><input type="text" name="usernameConfirm"> <!></div> <div class="flex flex-row justify-end"><button type="submit" class="btn danger flex flex-shrink"><!> </button></div></form>');function ur(u,i){ye(i,!0);let l=c(""),h=nr(),U=c(d(h.get())),j=c(!1),D=N(()=>e(j)),P=N(()=>Je(e(U),{untested:"untested",tested:"tested",invalid:"invalid",valid:"valid",warning:"warning"}));const C=new Set,f=Ge(()=>{h({username:i.username,usernameConfirm:e(l)},Array.from(C)).done(z=>{s(U,d(z))}),C.clear()},300);function w(){C.add("name"),f(),f.flush()}async function M(z){z.preventDefault();try{s(j,!0),s(l,d(e(l).trim())),w(),e(U).isValid()&&(await Ue.deleteUser(i.userId,i.applicationId),i.onDelete())}catch(A){await ta(A)}finally{s(j,!1)}}var F=or(),q=t(F),k=t(q,!0);n(()=>v(k,Ya())),a(q);var T=r(q,2),E=t(T);$(E);const m=N(()=>`w-full ${e(P)("usernameConfirm")??""}`);n(()=>te(E,"placeholder",Xa({username:i.username}))),E.__input=[sr,C,f];var S=r(E,2);Y(S,{name:"usernameConfirm",get result(){return e(U)}}),a(T);var o=r(T,2),b=t(o),Z=t(b);{var H=z=>{var A=dr(),g=t(A),x=t(g);aa(x),a(g),a(A),O(z,A)};he(Z,z=>{e(j)&&z(H)})}var B=r(Z);n(()=>v(B,` ${$a()??""}`)),a(b),a(o),a(F),n(()=>{X(E,e(m)),b.disabled=e(D)}),ea("submit",F,M),ne(E,()=>e(l),z=>s(l,z)),O(u,F),we()}ke(["input"]);const vr=()=>Ze((u,i)=>{i.length&&(He(i),ma(!u.profilePicture,()=>{me("profilePicture",ya(),()=>{fe(u.profilePicture).isURL({require_tld:!1,require_protocol:!1,require_host:!1,require_port:!1,require_valid_protocol:!1,allow_underscores:!0,allow_trailing_dot:!0,allow_protocol_relative_urls:!0,allow_fragments:!0,allow_query_components:!0})})}),ma(!u.website,()=>{me("website",ya(),()=>{fe(u.website).isURL({require_tld:!1,require_protocol:!1,require_host:!1,require_port:!1,require_valid_protocol:!1,allow_underscores:!0,allow_trailing_dot:!0,allow_protocol_relative_urls:!0,allow_fragments:!0,allow_query_components:!0})})}),ma(!u.birthdate,()=>{me("birthdate",Pe(),()=>{fe(u.birthdate).isNotBlank()})}))});function ce(u,i,l){i.add(u.currentTarget.name),l()}function _r(u,i,l,h,U){i.add(u.currentTarget.name),l(),h(new Date(e(U)))}var cr=G('<div class="mb-2"><label for="name"> </label> <input type="text" name="name"> <!></div> <div class="mb-2"><label for="givenName"> </label> <input type="text" name="givenName"> <!></div> <div class="mb-2"><label for="familyName"> </label> <input type="text" name="familyName"> <!></div> <div class="mb-2"><label for="middleName"> </label> <input type="text" name="middleName"> <!></div> <div class="mb-2"><label for="nickname"> </label> <input type="text" name="nickname"> <!></div> <div class="mb-2"><label for="profilePicture"> </label> <input type="text" name="profilePicture"> <!></div> <div class="mb-2"><label for="website"> </label> <input type="text" name="website"> <!></div> <div class="mb-2"><label for="gender"> </label> <select name="gender"><option> </option><option> </option></select> <!></div> <div class="mb-2"><label for="birthdate"> </label> <input type="date" name="birthdate"> <!></div> <div class="mb-2"><label for="zoneInfo"> </label> <input type="text" name="zoneInfo"> <!></div> <div class="mb-2"><label for="locale"> </label> <input type="text" name="locale"> <!></div> <div class="mb-2"><label for="address"> </label> <input type="text" name="address"> <!></div>',1);function mr(u,i){var ga;ye(i,!0);let l=W(i,"name",15),h=W(i,"givenName",15),U=W(i,"familyName",15),j=W(i,"middleName",15),D=W(i,"nickname",15),P=W(i,"profilePicture",15),C=W(i,"website",15),f=W(i,"gender",15),w=W(i,"birthdate",15),M=W(i,"zoneInfo",15),F=W(i,"locale",15),q=W(i,"address",15),k=W(i,"valid",15,!1),T=c(d((ga=w())==null?void 0:ga.toISOString().substring(0,10))),E=vr(),m=c(d(E.get())),S=N(()=>Je(e(m),{untested:"untested",tested:"tested",invalid:"invalid",valid:"valid",warning:"warning"}));const o=new Set,b=Ge(()=>{E({name:l(),givenName:h(),familyName:U(),middleName:j(),nickname:D(),profilePicture:P(),website:C(),gender:f(),birthdate:w(),zoneInfo:M(),locale:F(),address:q()},Array.from(o)).done(_a=>{s(m,d(_a)),console.log(e(m)),k(e(m).isValid())}),o.clear()},300);function Z(){o.add("name"),o.add("givenName"),o.add("familyName"),o.add("middleName"),o.add("nickname"),o.add("profilePicture"),o.add("website"),o.add("gender"),o.add("birthdate"),o.add("zoneInfo"),o.add("locale"),o.add("address"),b(),b.flush()}ba(Z);var H=cr(),B=Ie(H),z=t(B),A=t(z,!0);n(()=>v(A,_t())),a(z);var g=r(z,2);$(g);const x=N(()=>`w-full ${e(S)("name")??""}`);n(()=>te(g,"placeholder",et())),g.__input=[ce,o,b];var J=r(g,2);Y(J,{name:"name",get result(){return e(m)}}),a(B);var K=r(B,2),le=t(K),V=t(le,!0);n(()=>v(V,ct())),a(le);var R=r(le,2);$(R);const L=N(()=>`w-full ${e(S)("givenName")??""}`);n(()=>te(R,"placeholder",at())),R.__input=[ce,o,b];var se=r(R,2);Y(se,{name:"givenName",get result(){return e(m)}}),a(K);var oe=r(K,2),y=t(oe),p=t(y,!0);n(()=>v(p,mt())),a(y);var I=r(y,2);$(I);const Q=N(()=>`w-full ${e(S)("familyName")??""}`);n(()=>te(I,"placeholder",tt())),I.__input=[ce,o,b];var ee=r(I,2);Y(ee,{name:"familyName",get result(){return e(m)}}),a(oe);var ue=r(oe,2),ae=t(ue),Ne=t(ae,!0);n(()=>v(Ne,ft())),a(ae);var de=r(ae,2);$(de);const Be=N(()=>`w-full ${e(S)("middleName")??""}`);n(()=>te(de,"placeholder",rt())),de.__input=[ce,o,b];var Ve=r(de,2);Y(Ve,{name:"middleName",get result(){return e(m)}}),a(ue);var _=r(ue,2),re=t(_),Ce=t(re,!0);n(()=>v(Ce,bt())),a(re);var ve=r(re,2);$(ve);const ra=N(()=>`w-full ${e(S)("nickname")??""}`);n(()=>te(ve,"placeholder",it())),ve.__input=[ce,o,b];var Ke=r(ve,2);Y(Ke,{name:"nickname",get result(){return e(m)}}),a(_);var Ee=r(_,2),Oe=t(Ee),be=t(Oe,!0);n(()=>v(be,pt())),a(Oe);var ie=r(Oe,2);$(ie);const Se=N(()=>`w-full ${e(S)("profilePicture")??""}`);n(()=>te(ie,"placeholder",lt())),ie.__input=[ce,o,b];var Ae=r(ie,2);Y(Ae,{name:"profilePicture",get result(){return e(m)}}),a(Ee);var xe=r(Ee,2),Fe=t(xe),Qe=t(Fe,!0);n(()=>v(Qe,gt())),a(Fe);var pe=r(Fe,2);$(pe);const ia=N(()=>`w-full ${e(S)("website")??""}`);n(()=>te(pe,"placeholder",nt())),pe.__input=[ce,o,b];var Le=r(pe,2);Y(Le,{name:"website",get result(){return e(m)}}),a(xe);var Me=r(xe,2),je=t(Me),We=t(je,!0);n(()=>v(We,ht())),a(je);var ge=r(je,2);const Re=N(()=>`w-full ${e(S)("gender")??""}`);n(()=>te(ge,"placeholder",st())),ge.__input=[ce,o,b];var _e=t(ge);_e.value=(_e.__value="male")==null?"":"male";var Aa=t(_e,!0);n(()=>v(Aa,xt())),a(_e);var Xe=r(_e);Xe.value=(Xe.__value="female")==null?"":"female";var ja=t(Xe,!0);n(()=>v(ja,yt())),a(Xe),a(ge);var za=r(ge,2);Y(za,{name:"gender",get result(){return e(m)}}),a(Me);var la=r(Me,2),na=t(la),Da=t(na,!0);n(()=>v(Da,wt())),a(na);var ze=r(na,2);$(ze);const qa=N(()=>`w-full ${e(S)("birthdate")??""}`);n(()=>te(ze,"placeholder",dt())),ze.__input=[_r,o,b,w,T];var Ta=r(ze,2);Y(Ta,{name:"birthdate",get result(){return e(m)}}),a(la);var sa=r(la,2),da=t(sa),Ba=t(da,!0);n(()=>v(Ba,kt())),a(da);var De=r(da,2);$(De);const Va=N(()=>`w-full ${e(S)("zoneInfo")??""}`);n(()=>te(De,"placeholder",ot())),De.__input=[ce,o,b];var Oa=r(De,2);Y(Oa,{name:"zoneInfo",get result(){return e(m)}}),a(sa);var oa=r(sa,2),ua=t(oa),Fa=t(ua,!0);n(()=>v(Fa,Nt())),a(ua);var qe=r(ua,2);$(qe);const La=N(()=>`w-full ${e(S)("locale")??""}`);n(()=>te(qe,"placeholder",ut())),qe.__input=[ce,o,b];var Ma=r(qe,2);Y(Ma,{name:"locale",get result(){return e(m)}}),a(oa);var pa=r(oa,2),va=t(pa),Ra=t(va,!0);n(()=>v(Ra,It())),a(va);var Te=r(va,2);$(Te);const Ga=N(()=>`w-full ${e(S)("address")??""}`);n(()=>te(Te,"placeholder",vt())),Te.__input=[ce,o,b];var Za=r(Te,2);Y(Za,{name:"address",get result(){return e(m)}}),a(pa),n(()=>{X(g,e(x)),X(R,e(L)),X(I,e(Q)),X(de,e(Be)),X(ve,e(ra)),X(ie,e(Se)),X(pe,e(ia)),X(ge,e(Re)),X(ze,e(qa)),X(De,e(Va)),X(qe,e(La)),X(Te,e(Ga))}),ne(g,l),ne(R,h),ne(I,U),ne(de,j),ne(ve,D),ne(ie,P),ne(pe,C),er(ge,f),ne(ze,()=>e(T),_a=>s(T,_a)),ne(De,M),ne(qe,F),ne(Te,q),O(u,H),we()}ke(["input"]);const fr=()=>Ze((u,i)=>{i.length&&(He(i),me("email",Pe(),()=>{fe(u.email).isNotBlank()}))});function fa(u,i,l){i.add(u.currentTarget.name),l()}var br=G('<div class="mb-2"><label for="email"> </label> <input type="email" name="email"> <!></div> <div class="flex flex-row mb-2"><div><label for="primary"> <input type="checkbox" name="primary"></label> <!></div> <div class="ml-2"><label for="verified"> <input type="checkbox" name="verified"></label> <!></div></div>',1);function pr(u,i){ye(i,!0);let l=W(i,"email",15,""),h=W(i,"primary",15,!1),U=W(i,"verified",15,!1),j=W(i,"valid",15,!1),D=fr(),P=c(d(D.get())),C=N(()=>Je(e(P),{untested:"untested",tested:"tested",invalid:"invalid",valid:"valid",warning:"warning"}));const f=new Set,w=Ge(()=>{D({email:l(),primary:h(),verified:U()},Array.from(f)).done(R=>{s(P,d(R)),j(e(P).isValid())}),f.clear()},300);function M(){f.add("email"),f.add("primary"),f.add("verified"),w(),w.flush()}ba(M);var F=br(),q=Ie(F),k=t(q),T=t(k,!0);n(()=>v(T,Pt())),a(k);var E=r(k,2);$(E);const m=N(()=>`w-full ${e(C)("email")??""}`);n(()=>te(E,"placeholder",Ut())),E.__input=[fa,f,w];var S=r(E,2);Y(S,{name:"email",get result(){return e(P)}}),a(q);var o=r(q,2),b=t(o),Z=t(b),H=t(Z);n(()=>v(H,`${Ct()??""} `));var B=r(H);$(B);const z=N(()=>Ye(e(C)("primary")));B.__input=[fa,f,w],a(Z);var A=r(Z,2);Y(A,{name:"primary",get result(){return e(P)}}),a(b);var g=r(b,2),x=t(g),J=t(x);n(()=>v(J,`${Et()??""} `));var K=r(J);$(K);const le=N(()=>Ye(e(C)("verified")));K.__input=[fa,f,w],a(x);var V=r(x,2);return Y(V,{name:"verified",get result(){return e(P)}}),a(g),a(o),n(()=>{X(E,e(m)),X(B,e(z)),X(K,e(le))}),ne(E,l),$e(B,h),$e(K,U),O(u,F),we({validateAll:M})}ke(["input"]);function gr(u,i){u.preventDefault(),s(i,!0)}var hr=G('<div class="mr-2 flex flex-row justify-center"><div class="inline-block h-6 w-6"><!></div></div>'),xr=G('<form><!> <div class="flex flex-row justify-end"><button type="submit" class="btn primary flex flex-shrink"><!> </button></div></form>'),yr=G("<div> </div>"),wr=G("<div> </div>"),kr=G('<div class="flex flex-row justify-between"><h5> </h5> <div class="flex flex-col justify-center"><button class="btn primary icon"><!></button></div></div> <!> <div class="flex flex-col"><!> <!></div>',1);function Nr(u,i){ye(i,!0);let l=W(i,"user",15),h=c(void 0),U=c(!1),j=c(""),D=c(!1),P=c(!1),C=c(!1),f=c(!1),w=N(()=>e(f)||!e(C));async function M(A){var g;if(A.preventDefault(),(g=e(h))==null||g.validateAll(),e(C))try{s(f,!0);const x=await Ue.createUserEmail(l().id,{email:e(j),primary:e(D),verified:e(P)},i.applicationId);x.primary?(l().email&&l().emails.push(l().email),l(l().email=x,!0)):l().emails.push(x)}catch(x){ta(x)}finally{s(f,!1)}}var F=kr(),q=Ie(F),k=t(q),T=t(k,!0);n(()=>v(T,St())),a(k);var E=r(k,2),m=t(E);m.__click=[gr,U];var S=t(m);Sa(S,{}),a(m),a(E),a(q);var o=r(q,2);{var b=A=>{var g=xr(),x=t(g);Ea(pr(x,{get email(){return e(j)},set email(L){s(j,d(L))},get primary(){return e(D)},set primary(L){s(D,d(L))},get verified(){return e(P)},set verified(L){s(P,d(L))},get valid(){return e(C)},set valid(L){s(C,d(L))}}),L=>s(h,d(L)),()=>e(h));var J=r(x,2),K=t(J),le=t(K);{var V=L=>{var se=hr(),oe=t(se),y=t(oe);aa(y),a(oe),a(se),O(L,se)};he(le,L=>{e(f)&&L(V)})}var R=r(le);n(()=>v(R,` ${At()??""}`)),a(K),a(J),a(g),n(()=>K.disabled=e(w)),ea("submit",g,M),O(A,g)};he(o,A=>{e(U)&&A(b)})}var Z=r(o,2),H=t(Z);{var B=A=>{var g=yr(),x=t(g,!0);a(g),n(()=>v(x,l().email.email)),O(A,g)};he(H,A=>{l().email&&A(B)})}var z=r(H,2);Ca(z,17,()=>l().emails,A=>A.id,(A,g)=>{var x=wr(),J=t(x,!0);a(x),n(()=>v(J,e(g).email)),O(A,x)}),a(Z),O(u,F),we()}ke(["click"]);const Ir=()=>Ze((u,i)=>{i.length&&(He(i),me("username",Pe(),()=>{fe(u.username).isNotBlank()}),me("active",Pe(),()=>{fe(u.active).isNotBlank()}))});function ka(u,i,l){i.add(u.currentTarget.name),l()}var Ur=G('<div class="mr-2 flex flex-row justify-center"><div class="inline-block h-6 w-6"><!></div></div>'),Pr=G('<form><div class="mb-2"><label for="username"> </label> <input type="text" name="username"> <!></div> <div class="mb-2"><label for="active"> <input type="checkbox" name="active"></label> <!></div> <!> <!> <div class="flex flex-row justify-end"><button type="submit" class="btn primary flex flex-shrink"><!> </button></div></form>');function Cr(u,i){ye(i,!0);let l=W(i,"user",15),h=c(d(l().username)),U=c(d(l().active)),j=c(d(l().info.address)),D=c(d(l().info.familyName)),P=c(d(l().info.gender)),C=c(d(l().info.givenName)),f=c(d(l().info.locale)),w=c(d(l().info.middleName)),M=c(d(l().info.name)),F=c(d(l().info.nickname)),q=c(d(l().info.profilePicture)),k=c(d(l().info.website)),T=c(d(l().info.birthdate)),E=c(d(l().info.zoneInfo)),m=c(!1),S=Ir(),o=c(d(S.get())),b=c(!1),Z=N(()=>e(b)),H=N(()=>Je(e(o),{untested:"untested",tested:"tested",invalid:"invalid",valid:"valid",warning:"warning"}));const B=new Set,z=Ge(()=>{S({username:e(h),active:e(U)},Array.from(B)).done(_=>{s(o,d(_))}),B.clear()},300);function A(){B.add("username"),B.add("active"),z(),z.flush()}async function g(_){_.preventDefault();try{if(s(b,!0),s(h,d(e(h).trim())),A(),e(o).isValid()){const re=await Ue.updateUser(l().id,{username:e(h),active:e(U)},i.applicationId);re.info=await Ue.updateUserInfo(re.id,{name:e(M),givenName:e(C),familyName:e(D),middleName:e(w),nickname:e(F),profilePicture:e(q),website:e(k),gender:e(P),birthdate:e(T),zoneInfo:e(E),locale:e(f),address:e(j)},i.applicationId),i.onEdit(await Ue.updateUser(l().id,{username:e(h),active:e(U)},i.applicationId))}}catch(re){await ta(re)}finally{s(b,!1)}}var x=Pr(),J=t(x),K=t(J),le=t(K,!0);n(()=>v(le,Ua())),a(K);var V=r(K,2);$(V);const R=N(()=>`w-full ${e(H)("username")??""}`);n(()=>te(V,"placeholder",Ia())),V.__input=[ka,B,z];var L=r(V,2);Y(L,{name:"username",get result(){return e(o)}}),a(J);var se=r(J,2),oe=t(se),y=t(oe);n(()=>v(y,`${Pa()??""} `));var p=r(y);$(p);const I=N(()=>Ye(e(H)("active")));p.__input=[ka,B,z],a(oe);var Q=r(oe,2);Y(Q,{name:"active",get result(){return e(o)}}),a(se);var ee=r(se,2);Nr(ee,{get applicationId(){return i.applicationId},get user(){return l()},set user(_){l(_)}});var ue=r(ee,2);mr(ue,{get address(){return e(j)},set address(_){s(j,d(_))},get familyName(){return e(D)},set familyName(_){s(D,d(_))},get gender(){return e(P)},set gender(_){s(P,d(_))},get givenName(){return e(C)},set givenName(_){s(C,d(_))},get locale(){return e(f)},set locale(_){s(f,d(_))},get middleName(){return e(w)},set middleName(_){s(w,d(_))},get name(){return e(M)},set name(_){s(M,d(_))},get nickname(){return e(F)},set nickname(_){s(F,d(_))},get profilePicture(){return e(q)},set profilePicture(_){s(q,d(_))},get birthdate(){return e(T)},set birthdate(_){s(T,d(_))},get website(){return e(k)},set website(_){s(k,d(_))},get zoneInfo(){return e(E)},set zoneInfo(_){s(E,d(_))},get valid(){return e(m)},set valid(_){s(m,d(_))}});var ae=r(ue,2),Ne=t(ae),de=t(Ne);{var Be=_=>{var re=Ur(),Ce=t(re),ve=t(Ce);aa(ve),a(Ce),a(re),O(_,re)};he(de,_=>{e(b)&&_(Be)})}var Ve=r(de);n(()=>v(Ve,` ${jt()??""}`)),a(Ne),a(ae),a(x),n(()=>{X(V,e(R)),X(p,e(I)),Ne.disabled=e(Z)}),ea("submit",x,g),ne(V,()=>e(h),_=>s(h,_)),$e(p,()=>e(U),_=>s(U,_)),O(u,x),we()}ke(["input"]);const Na=20;var Er=G('<button class="btn secondary icon lg"><!></button>'),Sr=G('<button class="flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"><!><span class="ms-4"> </span></button> <button class="flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"><!><span class="ms-4"> </span></button>',1),Ar=G('<tr class="group"><td> </td><td> </td><td><!></td><td> </td><td> </td><td class="flex justify-end"><div class="flex flex-shrink"><!></div></td></tr>'),jr=G("<h3> </h3>"),zr=G("<h3> </h3>"),Dr=G("<h3> </h3>"),qr=G('<table class="table-auto w-full"><thead><tr class="text-left border-b"><th> </th><th> </th><th> </th><th> </th><th> </th><th></th></tr></thead><tbody></tbody></table> <!> <!> <!>',1);function Tr(u,i){ye(i,!0);let l=W(i,"users",31,()=>d([])),h=c(0),U=c(!0),j=c(!1);ba(D);async function D(){if(!e(U)||e(j))return;let y;s(j,!0);try{y=await Ue.allUsers(e(h)*Na,Na,i.applicationId)}finally{s(j,!1)}s(U,d(y.hasMore)),s(h,e(h)+1),l().push(...y.items)}let P=c(!1);function C(){s(P,!0)}function f(y){l().unshift(y),s(P,!1)}let w=c(void 0),M=c(!1);function F(y){return()=>{s(w,d(y)),s(M,!0)}}function q(y){const p=l().findIndex(I=>I.id===(y==null?void 0:y.id));p!==-1&&l(l()[p]=y,!0),s(w,void 0),s(M,!1)}let k=c(void 0),T=c(!1);function E(y){return()=>{s(k,d(y)),s(T,!0)}}function m(){const y=l().findIndex(p=>{var I;return p.id===((I=e(k))==null?void 0:I.id)});y!==-1&&l().splice(y,1),s(k,void 0),s(T,!1)}var S=qr(),o=Ie(S),b=t(o),Z=t(b),H=t(Z),B=t(H,!0);n(()=>v(B,Tt())),a(H);var z=r(H),A=t(z,!0);n(()=>v(A,Bt())),a(z);var g=r(z),x=t(g,!0);n(()=>v(x,Vt())),a(g);var J=r(g),K=t(J,!0);n(()=>v(K,Ot())),a(J);var le=r(J),V=t(le,!0);n(()=>v(V,Ft())),a(le),Ha(),a(Z),a(b);var R=r(b);Ca(R,23,l,y=>y.id,(y,p,I)=>{var Q=Ar(),ee=t(Q),ue=t(ee,!0);a(ee);var ae=r(ee),Ne=t(ae,!0);a(ae);var de=r(ae),Be=t(de);{var Ve=be=>{var ie=xa();n(()=>v(ie,Lt())),O(be,ie)},_=be=>{var ie=xa();n(()=>v(ie,Mt())),O(be,ie)};he(Be,be=>{e(p).active?be(Ve):be(_,!1)})}a(de);var re=r(de),Ce=t(re,!0);n(()=>v(Ce,e(p).updatedAt.toLocaleString())),a(re);var ve=r(re),ra=t(ve,!0);n(()=>v(ra,e(p).createdAt.toLocaleString())),a(ve);var Ke=r(ve),Ee=t(Ke),Oe=t(Ee);Kt(Oe,{position:"top-right",anchorPosition:"bottom-right",button:ie=>{var Se=Er(),Ae=t(Se);$t(Ae,{}),a(Se),O(ie,Se)},children:(ie,Se)=>{var Ae=Sr(),xe=Ie(Ae),Fe=N(()=>F(e(p)));xe.__click=function(...Re){var _e;(_e=e(Fe))==null||_e.apply(this,Re)};var Qe=t(xe);Xt(Qe,{});var pe=r(Qe),ia=t(pe,!0);n(()=>v(ia,Rt())),a(pe),a(xe);var Le=r(xe,2),Me=N(()=>E(e(p)));Le.__click=function(...Re){var _e;(_e=e(Me))==null||_e.apply(this,Re)};var je=t(Le);Yt(je,{});var We=r(je),ge=t(We,!0);n(()=>v(ge,Gt())),a(We),a(Le),O(ie,Ae)},$$slots:{button:!0,default:!0}}),a(Ee),a(Ke),a(Q),n(()=>{zt(Q,"border-b",e(I)<l().length-1),v(ue,e(p).id),v(Ne,e(p).username)}),O(y,Q)}),a(R),a(o);var L=r(o,2);ca(L,{get open(){return e(P)},set open(p){s(P,d(p))},title:p=>{var I=jr(),Q=t(I,!0);n(()=>v(Q,Zt())),a(I),O(p,I)},children:(p,I)=>{lr(p,{get applicationId(){return i.applicationId},onCreate:f})},$$slots:{title:!0,default:!0}});var se=r(L,2);ca(se,{get open(){return e(M)},set open(p){s(M,d(p))},title:p=>{var I=zr(),Q=t(I,!0);n(()=>{var ee;return v(Q,Dt({username:((ee=e(w))==null?void 0:ee.username)||""}))}),a(I),O(p,I)},children:(p,I)=>{var Q=ha(),ee=Ie(Q);{var ue=ae=>{Cr(ae,{get applicationId(){return i.applicationId},get user(){return e(w)},onEdit:q})};he(ee,ae=>{e(w)&&ae(ue)})}O(p,Q)},$$slots:{title:!0,default:!0}});var oe=r(se,2);return ca(oe,{get open(){return e(T)},set open(p){s(T,d(p))},title:p=>{var I=Dr(),Q=t(I,!0);n(()=>{var ee;return v(Q,qt({username:((ee=e(k))==null?void 0:ee.username)||""}))}),a(I),O(p,I)},children:(p,I)=>{var Q=ha(),ee=Ie(Q);{var ue=ae=>{ur(ae,{get applicationId(){return i.applicationId},get userId(){return e(k).id},get username(){return e(k).username},onDelete:m})};he(ee,ae=>{e(k)&&ae(ue)})}O(p,Q)},$$slots:{title:!0,default:!0}}),O(u,S),we({loadMore:D,onCreate:C})}ke(["click"]);var Br=G('<div class="container mx-auto my-4"><div class="bg-white dark:bg-gray-800 shadow-lg p-4 rounded-lg"><div class="flex flex-grow justify-between"><a class="flex flex-row items-center"><button class="btn primary icon"><!></button> <span class="ms-2"> </span></a> <button class="btn primary icon lg"><!></button></div> <!></div></div>');function ei(u,i){ye(i,!0);let l=c(void 0);const h=Qt(),[U,j]=h;var D=Br();Ka(m=>{n(()=>Ja.title=Ht())});var P=t(D),C=t(P),f=t(C);n(()=>te(f,"href",U(`${Wt}/`,void 0)));var w=t(f),M=t(w);ar(M,{}),a(w);var F=r(w,2),q=t(F,!0);n(()=>v(q,Jt())),a(F),a(f);var k=r(f,2);k.__click=function(...m){var S,o;(o=(S=e(l))==null?void 0:S.onCreate)==null||o.apply(this,m)};var T=t(k);Sa(T,{}),a(k),a(C);var E=r(C,2);Ea(Tr(E,{get applicationId(){return i.data.applicationId}}),m=>s(l,d(m)),()=>e(l)),a(P),a(D),O(u,D),we()}ke(["click"]);export{ei as component};
