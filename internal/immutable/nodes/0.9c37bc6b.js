import{n as q,i as de,c as se,d as me,s as W,e as k,f as j,g as B,u as P,h as z,j as R,k as x,l as Y,m as $e,b as _e,p as pe,r as fe}from"../chunks/scheduler.1587348c.js";import{x as ge,y as he,z as ve,A as be,S as L,i as O,r as M,u as I,v as E,d as g,t as h,w as A,g as N,s as U,m as we,h as C,j as V,f as v,c as T,n as ke,k as b,B as H,a as S,C as D,D as Q,p as ee,b as te,o as ye,E as Ne,F as Ce,G as J,H as Me}from"../chunks/index.1e570738.js";import{l as Ie,s as Ee,a as Ae,b as Se}from"../chunks/user.5abd493f.js";import{d as De}from"../chunks/index.35df97eb.js";import{e as le,u as je,f as Ve}from"../chunks/each.4aed8223.js";import{r as He,n as Le}from"../chunks/notifications.f5ca8515.js";import{I as F,g as G,a as X}from"../chunks/Icon.9bc2a10a.js";import{C as Oe,D as Ue}from"../chunks/Dropdown.fc895c8c.js";import{g as Te}from"../chunks/navigation.d1fa10ea.js";import{b as K}from"../chunks/paths.9fe61c8a.js";import{p as Be}from"../chunks/stores.84da441d.js";function Pe(r,e,l,t){if(!e)return q;const n=r.getBoundingClientRect();if(e.left===n.left&&e.right===n.right&&e.top===n.top&&e.bottom===n.bottom)return q;const{delay:s=0,duration:o=300,easing:a=de,start:c=ge()+s,end:f=c+o,tick:i=q,css:d}=l(r,{from:e,to:n},t);let w=!0,u=!1,p;function _(){d&&(p=ve(r,0,1,o,s,a,d)),s||(u=!0)}function m(){d&&be(r,p),w=!1}return he($=>{if(!u&&$>=c&&(u=!0),u&&$>=f&&(i(1,0),m()),!w)return!1;if(u){const y=$-c,Z=0+1*a(y/o);i(Z,1-Z)}return!0}),_(),i(0,1),m}function ze(r){const e=getComputedStyle(r);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:l,height:t}=e,n=r.getBoundingClientRect();r.style.position="absolute",r.style.width=l,r.style.height=t,ce(r,n)}}function ce(r,e){const l=r.getBoundingClientRect();if(e.left!==l.left||e.top!==l.top){const t=getComputedStyle(r),n=t.transform==="none"?"":t.transform;r.style.transform=`${n} translate(${e.left-l.left}px, ${e.top-l.top}px)`}}const Re=!1,qe=!1,fn=Object.freeze(Object.defineProperty({__proto__:null,prerender:Re,ssr:qe},Symbol.toStringTag,{value:"Module"})),ne=Ie("theme",null),We=De(ne,r=>r);We.subscribe(r=>{const e=document.documentElement.classList;r==="light"?(e.remove("dark"),e.add("light")):(r==="dark"||window.matchMedia("(prefers-color-scheme: dark)").matches)&&(e.remove("light"),e.add("dark"))});localStorage.getItem("theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?ne.set("dark"):ne.set("light"));function ue(r){const e=r-1;return e*e*e+1}function re(r,{delay:e=0,duration:l=400,easing:t=ue,x:n=0,y:s=0,opacity:o=0}={}){const a=getComputedStyle(r),c=+a.opacity,f=a.transform==="none"?"":a.transform,i=c*(1-o),[d,w]=se(n),[u,p]=se(s);return{delay:e,duration:l,easing:t,css:(_,m)=>`
			transform: ${f} translate(${(1-_)*d}${w}, ${(1-_)*u}${p});
			opacity: ${c-i*m}`}}function Fe(r,{from:e,to:l},t={}){const n=getComputedStyle(r),s=n.transform==="none"?"":n.transform,[o,a]=n.transformOrigin.split(" ").map(parseFloat),c=e.left+e.width*o/l.width-(l.left+o),f=e.top+e.height*a/l.height-(l.top+a),{delay:i=0,duration:d=u=>Math.sqrt(u)*120,easing:w=ue}=t;return{delay:i,duration:me(d)?d(Math.sqrt(c*c+f*f)):d,easing:w,css:(u,p)=>{const _=p*c,m=p*f,$=u+p*e.width/l.width,y=u+p*e.height/l.height;return`transform: ${s} translate(${_}px, ${m}px) scale(${$}, ${y});`}}}function Ge(r){let e;const l=r[2].default,t=B(l,r,r[3],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,s){t&&t.m(n,s),e=!0},p(n,s){t&&t.p&&(!e||s&8)&&P(t,l,n,n[3],e?R(l,n[3],s,null):z(n[3]),null)},i(n){e||(g(t,n),e=!0)},o(n){h(t,n),e=!1},d(n){t&&t.d(n)}}}function Xe(r){let e,l;const t=[{name:"x-circle"},r[1],{iconNode:r[0]}];let n={$$slots:{default:[Ge]},$$scope:{ctx:r}};for(let s=0;s<t.length;s+=1)n=k(n,t[s]);return e=new F({props:n}),{c(){M(e.$$.fragment)},l(s){I(e.$$.fragment,s)},m(s,o){E(e,s,o),l=!0},p(s,[o]){const a=o&3?G(t,[t[0],o&2&&X(s[1]),o&1&&{iconNode:s[0]}]):{};o&8&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){l||(g(e.$$.fragment,s),l=!0)},o(s){h(e.$$.fragment,s),l=!1},d(s){A(e,s)}}}function Ze(r,e,l){let{$$slots:t={},$$scope:n}=e;const s=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];return r.$$set=o=>{l(1,e=k(k({},e),j(o))),"$$scope"in o&&l(3,n=o.$$scope)},e=j(e),[s,e,t,n]}class Je extends L{constructor(e){super(),O(this,e,Ze,Xe,W,{})}}const Ke=Je;function Qe(r){let e;const l=r[2].default,t=B(l,r,r[3],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,s){t&&t.m(n,s),e=!0},p(n,s){t&&t.p&&(!e||s&8)&&P(t,l,n,n[3],e?R(l,n[3],s,null):z(n[3]),null)},i(n){e||(g(t,n),e=!0)},o(n){h(t,n),e=!1},d(n){t&&t.d(n)}}}function Ye(r){let e,l;const t=[{name:"info"},r[1],{iconNode:r[0]}];let n={$$slots:{default:[Qe]},$$scope:{ctx:r}};for(let s=0;s<t.length;s+=1)n=k(n,t[s]);return e=new F({props:n}),{c(){M(e.$$.fragment)},l(s){I(e.$$.fragment,s)},m(s,o){E(e,s,o),l=!0},p(s,[o]){const a=o&3?G(t,[t[0],o&2&&X(s[1]),o&1&&{iconNode:s[0]}]):{};o&8&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){l||(g(e.$$.fragment,s),l=!0)},o(s){h(e.$$.fragment,s),l=!1},d(s){A(e,s)}}}function xe(r,e,l){let{$$slots:t={},$$scope:n}=e;const s=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];return r.$$set=o=>{l(1,e=k(k({},e),j(o))),"$$scope"in o&&l(3,n=o.$$scope)},e=j(e),[s,e,t,n]}class et extends L{constructor(e){super(),O(this,e,xe,Ye,W,{})}}const tt=et;function nt(r){let e;const l=r[2].default,t=B(l,r,r[3],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,s){t&&t.m(n,s),e=!0},p(n,s){t&&t.p&&(!e||s&8)&&P(t,l,n,n[3],e?R(l,n[3],s,null):z(n[3]),null)},i(n){e||(g(t,n),e=!0)},o(n){h(t,n),e=!1},d(n){t&&t.d(n)}}}function st(r){let e,l;const t=[{name:"alert-triangle"},r[1],{iconNode:r[0]}];let n={$$slots:{default:[nt]},$$scope:{ctx:r}};for(let s=0;s<t.length;s+=1)n=k(n,t[s]);return e=new F({props:n}),{c(){M(e.$$.fragment)},l(s){I(e.$$.fragment,s)},m(s,o){E(e,s,o),l=!0},p(s,[o]){const a=o&3?G(t,[t[0],o&2&&X(s[1]),o&1&&{iconNode:s[0]}]):{};o&8&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){l||(g(e.$$.fragment,s),l=!0)},o(s){h(e.$$.fragment,s),l=!1},d(s){A(e,s)}}}function lt(r,e,l){let{$$slots:t={},$$scope:n}=e;const s=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];return r.$$set=o=>{l(1,e=k(k({},e),j(o))),"$$scope"in o&&l(3,n=o.$$scope)},e=j(e),[s,e,t,n]}class rt extends L{constructor(e){super(),O(this,e,lt,st,W,{})}}const ot=rt;function it(r){let e,l;return e=new ot({}),{c(){M(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,n){E(e,t,n),l=!0},i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){h(e.$$.fragment,t),l=!1},d(t){A(e,t)}}}function at(r){let e,l;return e=new tt({}),{c(){M(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,n){E(e,t,n),l=!0},i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){h(e.$$.fragment,t),l=!1},d(t){A(e,t)}}}function ft(r){let e,l;return e=new Oe({}),{c(){M(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,n){E(e,t,n),l=!0},i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){h(e.$$.fragment,t),l=!1},d(t){A(e,t)}}}function ct(r){let e,l;return e=new Ke({}),{c(){M(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,n){E(e,t,n),l=!0},i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){h(e.$$.fragment,t),l=!1},d(t){A(e,t)}}}function ut(r){let e,l,t,n,s,o,a=r[0].message+"",c,f,i,d;const w=[ct,ft,at,it],u=[];function p(_,m){return _[0].type==="error"?0:_[0].type==="success"?1:_[0].type==="info"?2:_[0].type==="warning"?3:-1}return~(t=p(r))&&(n=u[t]=w[t](r)),{c(){e=N("button"),l=N("div"),n&&n.c(),s=U(),o=N("div"),c=we(a),this.h()},l(_){e=C(_,"BUTTON",{class:!0});var m=V(e);l=C(m,"DIV",{class:!0});var $=V(l);n&&n.l($),$.forEach(v),s=T(m),o=C(m,"DIV",{class:!0});var y=V(o);c=ke(y,a),y.forEach(v),m.forEach(v),this.h()},h(){b(l,"class","w-6 h-6 mr-2 text-white"),b(o,"class","text-white flex-grow text-left"),b(e,"class","flex flex-row flex-grow items-center py-2 px-3 m-1 cursor-pointer shadow"),H(e,"bg-green-600",r[0].type==="success"),H(e,"bg-red-600",r[0].type==="error"),H(e,"bg-blue-600",r[0].type==="info"),H(e,"bg-yellow-600",r[0].type==="warning")},m(_,m){S(_,e,m),D(e,l),~t&&u[t].m(l,null),D(e,s),D(e,o),D(o,c),f=!0,i||(d=Q(e,"click",r[1]),i=!0)},p(_,[m]){let $=t;t=p(_),t!==$&&(n&&(ee(),h(u[$],1,1,()=>{u[$]=null}),te()),~t?(n=u[t],n||(n=u[t]=w[t](_),n.c()),g(n,1),n.m(l,null)):n=null),(!f||m&1)&&a!==(a=_[0].message+"")&&ye(c,a),(!f||m&1)&&H(e,"bg-green-600",_[0].type==="success"),(!f||m&1)&&H(e,"bg-red-600",_[0].type==="error"),(!f||m&1)&&H(e,"bg-blue-600",_[0].type==="info"),(!f||m&1)&&H(e,"bg-yellow-600",_[0].type==="warning")},i(_){f||(g(n),f=!0)},o(_){h(n),f=!1},d(_){_&&v(e),~t&&u[t].d(),i=!1,d()}}}function dt(r,e,l){let{notification:t}=e;function n(){He(t.id)}return r.$$set=s=>{"notification"in s&&l(0,t=s.notification)},[t,n]}class mt extends L{constructor(e){super(),O(this,e,dt,ut,x,{notification:0})}}function oe(r,e,l){const t=r.slice();return t[1]=e[l],t}function ie(r,e){let l,t,n,s,o,a,c=q,f;return t=new mt({props:{notification:e[1]}}),{key:r,first:null,c(){l=N("div"),M(t.$$.fragment),n=U(),this.h()},l(i){l=C(i,"DIV",{});var d=V(l);I(t.$$.fragment,d),n=T(d),d.forEach(v),this.h()},h(){this.first=l},m(i,d){S(i,l,d),E(t,l,null),D(l,n),f=!0},p(i,d){e=i;const w={};d&1&&(w.notification=e[1]),t.$set(w)},r(){a=l.getBoundingClientRect()},f(){ze(l),c(),ce(l,a)},a(){c(),c=Pe(l,a,Fe,{})},i(i){f||(g(t.$$.fragment,i),i&&$e(()=>{f&&(o&&o.end(1),s=Ne(l,re,{y:-64,duration:300}),s.start())}),f=!0)},o(i){h(t.$$.fragment,i),s&&s.invalidate(),i&&(o=Ce(l,re,{y:-64,duration:300})),f=!1},d(i){i&&v(l),A(t),i&&o&&o.end()}}}function $t(r){let e,l,t=[],n=new Map,s,o=le(r[0]);const a=c=>c[1].id;for(let c=0;c<o.length;c+=1){let f=oe(r,o,c),i=a(f);n.set(i,t[c]=ie(i,f))}return{c(){e=N("div"),l=N("div");for(let c=0;c<t.length;c+=1)t[c].c();this.h()},l(c){e=C(c,"DIV",{class:!0});var f=V(e);l=C(f,"DIV",{class:!0});var i=V(l);for(let d=0;d<t.length;d+=1)t[d].l(i);i.forEach(v),f.forEach(v),this.h()},h(){b(l,"class","container flex flex-col items-center mx-auto"),b(e,"class","fixed top-0 left-0 z-[100000] w-full")},m(c,f){S(c,e,f),D(e,l);for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(l,null);s=!0},p(c,[f]){if(f&1){o=le(c[0]),ee();for(let i=0;i<t.length;i+=1)t[i].r();t=je(t,f,a,1,c,o,n,l,Ve,ie,null,oe);for(let i=0;i<t.length;i+=1)t[i].a();te()}},i(c){if(!s){for(let f=0;f<o.length;f+=1)g(t[f]);s=!0}},o(c){for(let f=0;f<t.length;f+=1)h(t[f]);s=!1},d(c){c&&v(e);for(let f=0;f<t.length;f+=1)t[f].d()}}}function _t(r,e,l){let t;return Y(r,Le,n=>l(0,t=n)),[t]}class pt extends L{constructor(e){super(),O(this,e,_t,$t,x,{})}}function gt(r){let e;const l=r[2].default,t=B(l,r,r[3],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,s){t&&t.m(n,s),e=!0},p(n,s){t&&t.p&&(!e||s&8)&&P(t,l,n,n[3],e?R(l,n[3],s,null):z(n[3]),null)},i(n){e||(g(t,n),e=!0)},o(n){h(t,n),e=!1},d(n){t&&t.d(n)}}}function ht(r){let e,l;const t=[{name:"log-out"},r[1],{iconNode:r[0]}];let n={$$slots:{default:[gt]},$$scope:{ctx:r}};for(let s=0;s<t.length;s+=1)n=k(n,t[s]);return e=new F({props:n}),{c(){M(e.$$.fragment)},l(s){I(e.$$.fragment,s)},m(s,o){E(e,s,o),l=!0},p(s,[o]){const a=o&3?G(t,[t[0],o&2&&X(s[1]),o&1&&{iconNode:s[0]}]):{};o&8&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){l||(g(e.$$.fragment,s),l=!0)},o(s){h(e.$$.fragment,s),l=!1},d(s){A(e,s)}}}function vt(r,e,l){let{$$slots:t={},$$scope:n}=e;const s=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}],["polyline",{points:"16 17 21 12 16 7"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12"}]];return r.$$set=o=>{l(1,e=k(k({},e),j(o))),"$$scope"in o&&l(3,n=o.$$scope)},e=j(e),[s,e,t,n]}class bt extends L{constructor(e){super(),O(this,e,vt,ht,W,{})}}const wt=bt;function kt(r){let e;const l=r[2].default,t=B(l,r,r[3],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,s){t&&t.m(n,s),e=!0},p(n,s){t&&t.p&&(!e||s&8)&&P(t,l,n,n[3],e?R(l,n[3],s,null):z(n[3]),null)},i(n){e||(g(t,n),e=!0)},o(n){h(t,n),e=!1},d(n){t&&t.d(n)}}}function yt(r){let e,l;const t=[{name:"menu"},r[1],{iconNode:r[0]}];let n={$$slots:{default:[kt]},$$scope:{ctx:r}};for(let s=0;s<t.length;s+=1)n=k(n,t[s]);return e=new F({props:n}),{c(){M(e.$$.fragment)},l(s){I(e.$$.fragment,s)},m(s,o){E(e,s,o),l=!0},p(s,[o]){const a=o&3?G(t,[t[0],o&2&&X(s[1]),o&1&&{iconNode:s[0]}]):{};o&8&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){l||(g(e.$$.fragment,s),l=!0)},o(s){h(e.$$.fragment,s),l=!1},d(s){A(e,s)}}}function Nt(r,e,l){let{$$slots:t={},$$scope:n}=e;const s=[["line",{x1:"4",x2:"20",y1:"12",y2:"12"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18"}]];return r.$$set=o=>{l(1,e=k(k({},e),j(o))),"$$scope"in o&&l(3,n=o.$$scope)},e=j(e),[s,e,t,n]}class Ct extends L{constructor(e){super(),O(this,e,Nt,yt,W,{})}}const Mt=Ct;function It(r){let e;const l=r[2].default,t=B(l,r,r[3],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,s){t&&t.m(n,s),e=!0},p(n,s){t&&t.p&&(!e||s&8)&&P(t,l,n,n[3],e?R(l,n[3],s,null):z(n[3]),null)},i(n){e||(g(t,n),e=!0)},o(n){h(t,n),e=!1},d(n){t&&t.d(n)}}}function Et(r){let e,l;const t=[{name:"user"},r[1],{iconNode:r[0]}];let n={$$slots:{default:[It]},$$scope:{ctx:r}};for(let s=0;s<t.length;s+=1)n=k(n,t[s]);return e=new F({props:n}),{c(){M(e.$$.fragment)},l(s){I(e.$$.fragment,s)},m(s,o){E(e,s,o),l=!0},p(s,[o]){const a=o&3?G(t,[t[0],o&2&&X(s[1]),o&1&&{iconNode:s[0]}]):{};o&8&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){l||(g(e.$$.fragment,s),l=!0)},o(s){h(e.$$.fragment,s),l=!1},d(s){A(e,s)}}}function At(r,e,l){let{$$slots:t={},$$scope:n}=e;const s=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];return r.$$set=o=>{l(1,e=k(k({},e),j(o))),"$$scope"in o&&l(3,n=o.$$scope)},e=j(e),[s,e,t,n]}class St extends L{constructor(e){super(),O(this,e,At,Et,W,{})}}const Dt=St;function jt(r){let e;const l=r[2].default,t=B(l,r,r[3],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,s){t&&t.m(n,s),e=!0},p(n,s){t&&t.p&&(!e||s&8)&&P(t,l,n,n[3],e?R(l,n[3],s,null):z(n[3]),null)},i(n){e||(g(t,n),e=!0)},o(n){h(t,n),e=!1},d(n){t&&t.d(n)}}}function Vt(r){let e,l;const t=[{name:"users"},r[1],{iconNode:r[0]}];let n={$$slots:{default:[jt]},$$scope:{ctx:r}};for(let s=0;s<t.length;s+=1)n=k(n,t[s]);return e=new F({props:n}),{c(){M(e.$$.fragment)},l(s){I(e.$$.fragment,s)},m(s,o){E(e,s,o),l=!0},p(s,[o]){const a=o&3?G(t,[t[0],o&2&&X(s[1]),o&1&&{iconNode:s[0]}]):{};o&8&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){l||(g(e.$$.fragment,s),l=!0)},o(s){h(e.$$.fragment,s),l=!1},d(s){A(e,s)}}}function Ht(r,e,l){let{$$slots:t={},$$scope:n}=e;const s=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]];return r.$$set=o=>{l(1,e=k(k({},e),j(o))),"$$scope"in o&&l(3,n=o.$$scope)},e=j(e),[s,e,t,n]}class Lt extends L{constructor(e){super(),O(this,e,Ht,Vt,W,{})}}const Ot=Lt;function Ut(r){let e;const l=r[2].default,t=B(l,r,r[3],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,s){t&&t.m(n,s),e=!0},p(n,s){t&&t.p&&(!e||s&8)&&P(t,l,n,n[3],e?R(l,n[3],s,null):z(n[3]),null)},i(n){e||(g(t,n),e=!0)},o(n){h(t,n),e=!1},d(n){t&&t.d(n)}}}function Tt(r){let e,l;const t=[{name:"app-window"},r[1],{iconNode:r[0]}];let n={$$slots:{default:[Ut]},$$scope:{ctx:r}};for(let s=0;s<t.length;s+=1)n=k(n,t[s]);return e=new F({props:n}),{c(){M(e.$$.fragment)},l(s){I(e.$$.fragment,s)},m(s,o){E(e,s,o),l=!0},p(s,[o]){const a=o&3?G(t,[t[0],o&2&&X(s[1]),o&1&&{iconNode:s[0]}]):{};o&8&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){l||(g(e.$$.fragment,s),l=!0)},o(s){h(e.$$.fragment,s),l=!1},d(s){A(e,s)}}}function Bt(r,e,l){let{$$slots:t={},$$scope:n}=e;const s=[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}],["path",{d:"M10 4v4"}],["path",{d:"M2 8h20"}],["path",{d:"M6 4v4"}]];return r.$$set=o=>{l(1,e=k(k({},e),j(o))),"$$scope"in o&&l(3,n=o.$$scope)},e=j(e),[s,e,t,n]}class Pt extends L{constructor(e){super(),O(this,e,Bt,Tt,W,{})}}const zt=Pt;function Rt(r){let e,l="Sign in";return{c(){e=N("a"),e.textContent=l,this.h()},l(t){e=C(t,"A",{href:!0,class:!0,"data-svelte-h":!0}),J(e)!=="svelte-hb4yio"&&(e.textContent=l),this.h()},h(){b(e,"href",`${K}/signin`),b(e,"class","svelte-8fpvvm")},m(t,n){S(t,e,n)},p:q,i:q,o:q,d(t){t&&v(e)}}}function qt(r){let e,l,t;function n(o){r[6](o)}let s={$$slots:{button:[Ft],default:[Wt]},$$scope:{ctx:r}};return r[0]!==void 0&&(s.open=r[0]),e=new Ue({props:s}),_e.push(()=>Me(e,"open",n)),{c(){M(e.$$.fragment)},l(o){I(e.$$.fragment,o)},m(o,a){E(e,o,a),t=!0},p(o,a){const c={};a&140&&(c.$$scope={dirty:a,ctx:o}),!l&&a&1&&(l=!0,c.open=o[0],pe(()=>l=!1)),e.$set(c)},i(o){t||(g(e.$$.fragment,o),t=!0)},o(o){h(e.$$.fragment,o),t=!1},d(o){A(e,o)}}}function ae(r){let e,l,t,n="Applications",s,o,a,c,f="Users",i,d,w;return l=new zt({}),a=new Ot({}),{c(){e=N("a"),M(l.$$.fragment),t=N("span"),t.textContent=n,s=U(),o=N("a"),M(a.$$.fragment),c=N("span"),c.textContent=f,this.h()},l(u){e=C(u,"A",{href:!0,class:!0});var p=V(e);I(l.$$.fragment,p),t=C(p,"SPAN",{class:!0,"data-svelte-h":!0}),J(t)!=="svelte-1t6w5xj"&&(t.textContent=n),p.forEach(v),s=T(u),o=C(u,"A",{href:!0,class:!0});var _=V(o);I(a.$$.fragment,_),c=C(_,"SPAN",{class:!0,"data-svelte-h":!0}),J(c)!=="svelte-jyupdy"&&(c.textContent=f),_.forEach(v),this.h()},h(){b(t,"class","ms-4 svelte-8fpvvm"),b(e,"href",`${K}/applications`),b(e,"class","default flex flex-row justify-between p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 svelte-8fpvvm"),H(e,"active",r[3].route.id==="/(authed)/applications"),b(c,"class","ms-4 svelte-8fpvvm"),b(o,"href",`${K}/users`),b(o,"class","default flex flex-row justify-between p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 svelte-8fpvvm"),H(o,"active",r[3].route.id==="/(authed)/users")},m(u,p){S(u,e,p),E(l,e,null),D(e,t),S(u,s,p),S(u,o,p),E(a,o,null),D(o,c),i=!0,d||(w=[Q(e,"click",r[5]),Q(o,"click",r[5])],d=!0)},p(u,p){(!i||p&8)&&H(e,"active",u[3].route.id==="/(authed)/applications"),(!i||p&8)&&H(o,"active",u[3].route.id==="/(authed)/users")},i(u){i||(g(l.$$.fragment,u),g(a.$$.fragment,u),i=!0)},o(u){h(l.$$.fragment,u),h(a.$$.fragment,u),i=!1},d(u){u&&(v(e),v(s),v(o)),A(l),A(a),d=!1,fe(w)}}}function Wt(r){let e,l,t,n,s="Profile",o,a,c,f,i,d,w="Sign out",u,p,_,m=r[2]&&ae(r);return t=new Dt({}),i=new wt({}),{c(){m&&m.c(),e=U(),l=N("a"),M(t.$$.fragment),n=N("span"),n.textContent=s,o=U(),a=N("hr"),c=U(),f=N("li"),M(i.$$.fragment),d=N("span"),d.textContent=w,this.h()},l($){m&&m.l($),e=T($),l=C($,"A",{href:!0,class:!0});var y=V(l);I(t.$$.fragment,y),n=C(y,"SPAN",{class:!0,"data-svelte-h":!0}),J(n)!=="svelte-1u9iybz"&&(n.textContent=s),y.forEach(v),o=T($),a=C($,"HR",{class:!0}),c=T($),f=C($,"LI",{class:!0});var Z=V(f);I(i.$$.fragment,Z),d=C(Z,"SPAN",{class:!0,"data-svelte-h":!0}),J(d)!=="svelte-1dpdhj9"&&(d.textContent=w),Z.forEach(v),this.h()},h(){b(n,"class","ms-4 svelte-8fpvvm"),b(l,"href",`${K}/profile`),b(l,"class","default flex flex-row justify-between p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 svelte-8fpvvm"),H(l,"active",r[3].route.id==="/(authed)/profile"),b(a,"class","svelte-8fpvvm"),b(d,"class","ms-4 svelte-8fpvvm"),b(f,"class","flex flex-row justify-between p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 svelte-8fpvvm")},m($,y){m&&m.m($,y),S($,e,y),S($,l,y),E(t,l,null),D(l,n),S($,o,y),S($,a,y),S($,c,y),S($,f,y),E(i,f,null),D(f,d),u=!0,p||(_=[Q(l,"click",r[5]),Q(f,"click",r[4])],p=!0)},p($,y){$[2]?m?(m.p($,y),y&4&&g(m,1)):(m=ae($),m.c(),g(m,1),m.m(e.parentNode,e)):m&&(ee(),h(m,1,1,()=>{m=null}),te()),(!u||y&8)&&H(l,"active",$[3].route.id==="/(authed)/profile")},i($){u||(g(m),g(t.$$.fragment,$),g(i.$$.fragment,$),u=!0)},o($){h(m),h(t.$$.fragment,$),h(i.$$.fragment,$),u=!1},d($){$&&(v(e),v(l),v(o),v(a),v(c),v(f)),m&&m.d($),A(t),A(i),p=!1,fe(_)}}}function Ft(r){let e,l;return e=new Mt({props:{slot:"button"}}),{c(){M(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,n){E(e,t,n),l=!0},p:q,i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){h(e.$$.fragment,t),l=!1},d(t){A(e,t)}}}function Gt(r){let e,l,t=`<a class="btn text-lg svelte-8fpvvm" href="${`${K}/applications`}">Auth</a>`,n,s,o,a,c,f;const i=[qt,Rt],d=[];function w(u,p){return u[1]?0:1}return a=w(r),c=d[a]=i[a](r),{c(){e=N("div"),l=N("div"),l.innerHTML=t,n=U(),s=N("div"),o=N("div"),c.c(),this.h()},l(u){e=C(u,"DIV",{class:!0});var p=V(e);l=C(p,"DIV",{class:!0,"data-svelte-h":!0}),J(l)!=="svelte-wfkaib"&&(l.innerHTML=t),n=T(p),s=C(p,"DIV",{class:!0});var _=V(s);o=C(_,"DIV",{class:!0});var m=V(o);c.l(m),m.forEach(v),_.forEach(v),p.forEach(v),this.h()},h(){b(l,"class","flex flex-row flex-shrink ms-2 svelte-8fpvvm"),b(o,"class","flex flex-col justify-center content-center svelte-8fpvvm"),b(s,"class","flex flex-row flex-shrink me-2 svelte-8fpvvm"),b(e,"class","flex flex-row flex-shrink justify-between bg-white dark:bg-gray-800 shadow z-20 svelte-8fpvvm")},m(u,p){S(u,e,p),D(e,l),D(e,n),D(e,s),D(s,o),d[a].m(o,null),f=!0},p(u,[p]){let _=a;a=w(u),a===_?d[a].p(u,p):(ee(),h(d[_],1,1,()=>{d[_]=null}),te(),c=d[a],c?c.p(u,p):(c=d[a]=i[a](u),c.c()),g(c,1),c.m(o,null))},i(u){f||(g(c),f=!0)},o(u){h(c),f=!1},d(u){u&&v(e),d[a].d()}}}function Xt(r,e,l){let t,n,s;Y(r,Ee,i=>l(1,t=i)),Y(r,Ae,i=>l(2,n=i)),Y(r,Be,i=>l(3,s=i));async function o(){Se(),c(),await Te(`${K}/signin`)}let a=!1;function c(){l(0,a=!1)}function f(i){a=i,l(0,a)}return[a,t,n,s,o,c,f]}class Zt extends L{constructor(e){super(),O(this,e,Xt,Gt,x,{})}}function Jt(r){let e,l,t,n,s,o,a;l=new Zt({});const c=r[1].default,f=B(c,r,r[0],null);return o=new pt({}),{c(){e=N("div"),M(l.$$.fragment),t=U(),n=N("div"),f&&f.c(),s=U(),M(o.$$.fragment),this.h()},l(i){e=C(i,"DIV",{class:!0});var d=V(e);I(l.$$.fragment,d),t=T(d),n=C(d,"DIV",{class:!0});var w=V(n);f&&f.l(w),w.forEach(v),d.forEach(v),s=T(i),I(o.$$.fragment,i),this.h()},h(){b(n,"class","flex flex-col flex-grow overflow-x-hidden overflow-y-auto"),b(e,"class","flex flex-col w-full h-full")},m(i,d){S(i,e,d),E(l,e,null),D(e,t),D(e,n),f&&f.m(n,null),S(i,s,d),E(o,i,d),a=!0},p(i,[d]){f&&f.p&&(!a||d&1)&&P(f,c,i,i[0],a?R(c,i[0],d,null):z(i[0]),null)},i(i){a||(g(l.$$.fragment,i),g(f,i),g(o.$$.fragment,i),a=!0)},o(i){h(l.$$.fragment,i),h(f,i),h(o.$$.fragment,i),a=!1},d(i){i&&(v(e),v(s)),A(l),f&&f.d(i),A(o,i)}}}function Kt(r,e,l){let{$$slots:t={},$$scope:n}=e;return r.$$set=s=>{"$$scope"in s&&l(0,n=s.$$scope)},[n,t]}class cn extends L{constructor(e){super(),O(this,e,Kt,Jt,x,{})}}export{cn as component,fn as universal};
