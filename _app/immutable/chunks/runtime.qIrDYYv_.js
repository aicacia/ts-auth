import{l as N,q as o,J as I,E as O,K as R,L as k,M as P,N as d,O as T,m as h,P as v,v as j,U as q}from"./runtime.BOcB0i4C.js";function D(e,s,E=!1){o&&I();var a=e,n=null,t=null,l=q,p=E?O:0,g=!1;const S=(i,r=!0)=>{g=!0,c(r,i)},c=(i,r)=>{if(l===(l=i))return;let _=!1;if(o){const A=a.data===R;!!l===A&&(a=k(),P(a),d(!1),_=!0)}l?(n?T(n):r&&(n=h(()=>r(a))),t&&v(t,()=>{t=null})):(t?T(t):r&&(t=h(()=>r(a))),n&&v(n,()=>{n=null})),_&&d(!0)};N(()=>{g=!1,s(S),g||c(null,null)},p),o&&(a=j)}let f;const L="en",m=["en"];let u=()=>L;const w=e=>{typeof e=="function"?u=b(e):u=b(()=>e),f!==void 0&&f(u())};function b(e){return()=>{const s=e();if(!y(s))throw new Error("languageTag() didn't return a valid language tag. Check your setLanguageTag call");return s}}const x=e=>{f=e};function y(e){return m.includes(e)}const F=Object.freeze(Object.defineProperty({__proto__:null,availableLanguageTags:m,isAvailableLanguageTag:y,get languageTag(){return u},onSetLanguageTag:x,setLanguageTag:w,sourceLanguageTag:L},Symbol.toStringTag,{value:"Module"}));export{D as i,u as l,F as r};
