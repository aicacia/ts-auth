import{j as ue,r as oe}from"./utils.C9MzFJhm.js";import{S as fe,i as ce,g as v,s as V,r as x,h as b,j as L,G as $,c as A,u as H,f as g,k as s,a as J,C as p,J as G,v as Q,D as q,K as me,d as B,p as de,t as K,b as pe,w as W,m as ie,n as se}from"./index.Cgbm_bxH.js";import{I as ee,d as _e,i as he,S as ve,K as be,V as ge,v as te,w as ne}from"./Spinner.tRxFEDtF.js";import{h as we}from"./errors.21Pt_TCp.js";import{b as ae}from"./index.meplm-_N.js";import{t as le}from"./notifications.-K1MDeUC.js";import{i as ke}from"./navigation.8QQJ154a.js";import{b as ye}from"./paths.eUxvDbcf.js";function re(l){let t,e,i,w;return i=new ve({}),{c(){t=v("div"),e=v("div"),x(i.$$.fragment),this.h()},l(u){t=b(u,"DIV",{class:!0});var a=L(t);e=b(a,"DIV",{class:!0});var f=L(e);H(i.$$.fragment,f),f.forEach(g),a.forEach(g),this.h()},h(){s(e,"class","inline-block w-6 h-6"),s(t,"class","flex flex-row justify-center mr-2")},m(u,a){J(u,t,a),p(t,e),Q(i,e,null),w=!0},i(u){w||(B(i.$$.fragment,u),w=!0)},o(u){K(i.$$.fragment,u),w=!1},d(u){u&&g(t),W(i)}}}function Ce(l){let t;return{c(){t=ie("Update")},l(e){t=se(e,"Update")},m(e,i){J(e,t,i)},d(e){e&&g(t)}}}function Se(l){let t;return{c(){t=ie("Create")},l(e){t=se(e,"Create")},m(e,i){J(e,t,i)},d(e){e&&g(t)}}}function Ee(l){let t,e,i,w="Name",u,a,f,N,_,E,m,h,O="URL Safe Short Name",R,d,j,D,k,T,I,n,P,U,M,X;_=new ee({props:{name:"name",result:l[3]}}),k=new ee({props:{name:"uri",result:l[3]}});let o=l[4]&&re();function Y(r,c){return r[2]==null?Se:Ce}let z=Y(l),y=z(l);return{c(){t=v("form"),e=v("div"),i=v("label"),i.textContent=w,u=V(),a=v("input"),N=V(),x(_.$$.fragment),E=V(),m=v("div"),h=v("label"),h.textContent=O,R=V(),d=v("input"),D=V(),x(k.$$.fragment),T=V(),I=v("div"),n=v("button"),o&&o.c(),P=V(),y.c(),this.h()},l(r){t=b(r,"FORM",{class:!0});var c=L(t);e=b(c,"DIV",{class:!0});var C=L(e);i=b(C,"LABEL",{for:!0,"data-svelte-h":!0}),$(i)!=="svelte-19zvblj"&&(i.textContent=w),u=A(C),a=b(C,"INPUT",{id:!0,class:!0,type:!0,name:!0,placeholder:!0}),N=A(C),H(_.$$.fragment,C),C.forEach(g),E=A(c),m=b(c,"DIV",{class:!0});var S=L(m);h=b(S,"LABEL",{for:!0,"data-svelte-h":!0}),$(h)!=="svelte-10oskxe"&&(h.textContent=O),R=A(S),d=b(S,"INPUT",{id:!0,class:!0,type:!0,name:!0,placeholder:!0}),D=A(S),H(k.$$.fragment,S),S.forEach(g),T=A(c),I=b(c,"DIV",{class:!0});var Z=L(I);n=b(Z,"BUTTON",{type:!0,class:!0});var F=L(n);o&&o.l(F),P=A(F),y.l(F),F.forEach(g),Z.forEach(g),c.forEach(g),this.h()},h(){s(i,"for","application-name"),s(a,"id","application-name"),s(a,"class",f="w-full "+l[5]("name")),s(a,"type","text"),s(a,"name","name"),s(a,"placeholder","Name"),s(e,"class","mb-2"),s(h,"for","application-uri"),s(d,"id","application-uri"),s(d,"class",j="w-full "+l[5]("uri")),s(d,"type","text"),s(d,"name","uri"),s(d,"placeholder","URL Safe Short Name"),s(m,"class","mb-2"),s(n,"type","submit"),s(n,"class","btn primary flex flex-shrink"),n.disabled=l[6],s(I,"class","flex flex-row justify-end"),s(t,"class","flex flex-col flex-grow")},m(r,c){J(r,t,c),p(t,e),p(e,i),p(e,u),p(e,a),G(a,l[0]),p(e,N),Q(_,e,null),p(t,E),p(t,m),p(m,h),p(m,R),p(m,d),G(d,l[1]),p(m,D),Q(k,m,null),p(t,T),p(t,I),p(I,n),o&&o.m(n,null),p(n,P),y.m(n,null),U=!0,M||(X=[q(a,"input",l[11]),q(a,"input",l[7]),q(d,"input",l[12]),q(d,"input",l[8]),q(t,"submit",me(l[9]))],M=!0)},p(r,[c]){(!U||c&32&&f!==(f="w-full "+r[5]("name")))&&s(a,"class",f),c&1&&a.value!==r[0]&&G(a,r[0]);const C={};c&8&&(C.result=r[3]),_.$set(C),(!U||c&32&&j!==(j="w-full "+r[5]("uri")))&&s(d,"class",j),c&2&&d.value!==r[1]&&G(d,r[1]);const S={};c&8&&(S.result=r[3]),k.$set(S),r[4]?o?c&16&&B(o,1):(o=re(),o.c(),B(o,1),o.m(n,P)):o&&(de(),K(o,1,1,()=>{o=null}),pe()),z!==(z=Y(r))&&(y.d(1),y=z(r),y&&(y.c(),y.m(n,null))),(!U||c&64)&&(n.disabled=r[6])},i(r){U||(B(_.$$.fragment,r),B(k.$$.fragment,r),B(o),U=!0)},o(r){K(_.$$.fragment,r),K(k.$$.fragment,r),K(o),U=!1},d(r){r&&g(t),W(_),W(k),o&&o.d(),y.d(),M=!1,oe(X)}}}const De=()=>be((l={},t)=>{t.length&&(ge(t),te("name","required",()=>{ne(l.name).isNotBlank()}),te("uri","required",()=>{ne(l.uri).isNotBlank()}))});function Ie(l,t,e){let i,w,{id:u=void 0}=t,{name:a=""}=t,{uri:f=""}=t,{onDone:N}=t;const _=De();let E=_.get();const m=new Set,h=_e(()=>{_({name:a,uri:f},Array.from(m)).done(n=>{e(3,E=n)}),m.clear()},300);function O(){m.add("name"),m.add("uri"),h(),h.flush()}function R(n){m.add(n.currentTarget.name),h()}function d(n){e(1,f=le(a)),R(n)}function j(n){e(1,f=le(f)),R(n)}let D=!1;async function k(){try{if(e(4,D=!0),O(),E.isValid()){const n=u==null?await ae.create({name:a,uri:f}):await ae.update(u,{name:a,uri:f});u==null&&await ke(`${ye}/applications`),N(n),_.reset()}}catch(n){await we(n)}finally{e(4,D=!1)}}function T(){a=this.value,e(0,a)}function I(){f=this.value,e(1,f)}return l.$$set=n=>{"id"in n&&e(2,u=n.id),"name"in n&&e(0,a=n.name),"uri"in n&&e(1,f=n.uri),"onDone"in n&&e(10,N=n.onDone)},l.$$.update=()=>{l.$$.dirty&16&&e(6,i=D),l.$$.dirty&8&&e(5,w=he(E,{untested:"untested",tested:"tested",invalid:"invalid",valid:"valid",warning:"warning"}))},[a,f,u,E,D,w,i,d,j,k,N,T,I]}class Te extends fe{constructor(t){super(),ce(this,t,Ie,Ee,ue,{id:2,name:0,uri:1,onDone:10})}}export{Te as A};
