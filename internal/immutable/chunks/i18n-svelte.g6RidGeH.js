import{w as f}from"./index.ltnQeb78.js";var y=r=>!!r,L=r=>Array.from(new Set(r)),E=(r,e,...t)=>{for(let s of t){let n=w(e,s);if(n)return n}return r},w=(r,e)=>{let t=e().map(o=>o.toLowerCase()),s=L(t.flatMap(o=>[o,o.split("-")[0]])),n=r.map(o=>o.toLowerCase());return s.map(o=>{let a=n.findIndex(i=>i===o);return a>=0&&r[a]}).find(y)};const O="en",k=["en"],h={},j={},M=(...r)=>E(O,k,...r);var b=()=>new Proxy(Object.assign(()=>"",{}),{get:(r,e)=>e==="length"?0:b()}),A=r=>Object.fromEntries(Object.entries(r).map(([e,t])=>e!=="i"&&t&&t!="0"&&[e,t]).filter(Boolean)),_=r=>Object.fromEntries(Object.keys(r).map(e=>{const t=r[e];return[e,Array.isArray(t)?t.map(s=>s?.trim()):t===!!t?t:t?.trim()]})),S=r=>{const[e="",...t]=r.split("|"),[s="",n]=e.split(":"),[o,a]=s.split("?");return{k:o,i:n,n:a==="",f:t}},I=r=>!!(r.o||r.r),R=(r,e)=>{let[t,s]=r.split(":");s||(s=t,t=e);const n=s.split("|"),[o,a,i,l,g,d]=n,c=n.filter(P=>P!==void 0).length;return c===1?{k:t,r:o}:c===2?{k:t,o,r:a}:c===3?{k:t,z:o,o:a,r:i}:{k:t,z:o,o:a,t:i,f:l,m:g,r:d}},C=/^\{.*\}$/,T=r=>Object.fromEntries(u(r).split(",").map(e=>e.split(":")).reduce((e,t)=>t.length===2?[...e,t.map(s=>s.trim())]:(e[e.length-1][1]+=","+t[0],e),[])),m=/(\{(?:[^{}]+|\{(?:[^{}]+)*\})*\})/g,u=r=>r.substring(1,r.length-1),V=(r,e=!0,t="",s="")=>r.split(m).map(n=>{if(!n.match(m))return n;const o=u(n);if(o.startsWith("{"))return R(u(o),s);const a=S(o);return s=a.k||s,!t&&(t=s),a}).map(n=>{if(typeof n=="string")return n;n.k||(n.k=t||"0");const o=_(n);return e?A(o):o}),z=(r,e,t)=>e.reduce((s,n)=>(n.match(C)?(o=>o[s]??o["*"])(T(n)):r[n]?.(s))??s,t),B=(r,{z:e,o:t,t:s,f:n,m:o,r:a},i)=>{switch(e&&i==0?"zero":r.select(i)){case"zero":return e;case"one":return t;case"two":return s;case"few":return n??a;case"many":return o??a;default:return a}},x=/\?\?/g,G=(r,e,t,s)=>r.map(n=>{if(typeof n=="string")return n;const{k:o="0",f:a=[]}=n,i=s[o];return I(n)?((typeof i=="boolean"?i?n.o:n.r:B(e,n,i))||"").replace(x,i):(""+((a.length?z(t,a,i):i)??"")).trim()}).join(""),N=(r,e,t,s)=>{const n=s[0],o=n&&typeof n=="object"&&n.constructor===Object,a=s.length===1&&o?n:s;return G(r,e,t,a)},W=(r,e)=>r[e]||(r[e]=V(e)),X=(r,e)=>{const t={},s=new Intl.PluralRules(r);return(n,...o)=>N(W(t,n),s,e,o)};function F(r,e,t={}){return v(e,X(r,t))}var p=(r={},e)=>typeof r=="string"?e.bind(null,r):Object.assign(Object.defineProperty(()=>"","name",{writable:!0}),r),v=(r,e)=>new Proxy(p(r,e),{get:(t,s)=>s===Symbol.iterator?[][Symbol.iterator].bind(Object.values(t).map(n=>p(n,e))):v(t[s],e)}),U=(r,e={})=>{const t=f(),s=f(b()),n=H(t),o=new Proxy({},{get:(i,l)=>l==="subscribe"?s.subscribe:s[l]});return{locale:n,LL:o,setLocale:i=>{t.set(i),s.set(F(i,r[i],e[i]))}}};function H(r){return{subscribe:r.subscribe.bind(r)}}const{locale:$,LL:q,setLocale:D}=U(h,j);export{q as L,h as a,M as d,j as l,D as s};