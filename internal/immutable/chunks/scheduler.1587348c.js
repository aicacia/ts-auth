function b(){}const M=t=>t;function w(t,n){for(const e in n)t[e]=n[e];return t}function j(t){return t()}function S(){return Object.create(null)}function E(t){t.forEach(j)}function v(t){return typeof t=="function"}function A(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function B(t,n){return t!=t?n==n:t!==n}function C(t){return Object.keys(t).length===0}function y(t,...n){if(t==null){for(const o of n)o(void 0);return b}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function D(t){let n;return y(t,e=>n=e)(),n}function G(t,n,e){t.$$.on_destroy.push(y(n,e))}function P(t,n,e,o){if(t){const r=m(t,n,e,o);return t[0](r)}}function m(t,n,e,o){return t[1]&&o?w(e.ctx.slice(),t[1](o(n))):e.ctx}function U(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const a=[],f=Math.max(n.dirty.length,r.length);for(let u=0;u<f;u+=1)a[u]=n.dirty[u]|r[u];return a}return n.dirty|r}return n.dirty}function H(t,n,e,o,r,a){if(r){const f=m(n,e,o,a);t.p(f,r)}}function I(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function J(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function K(t,n){const e={};n=new Set(n);for(const o in t)!n.has(o)&&o[0]!=="$"&&(e[o]=t[o]);return e}function L(t){return t&&v(t.destroy)?t.destroy:b}function N(t){const n=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return n?[parseFloat(n[1]),n[2]||"px"]:[t,"px"]}let l;function _(t){l=t}function x(){if(!l)throw new Error("Function called outside component initialization");return l}function Q(t){x().$$.on_mount.push(t)}function R(t){x().$$.after_update.push(t)}const i=[],g=[];let c=[];const h=[],k=Promise.resolve();let p=!1;function q(){p||(p=!0,k.then(O))}function T(){return q(),k}function F(t){c.push(t)}function V(t){h.push(t)}const d=new Set;let s=0;function O(){if(s!==0)return;const t=l;do{try{for(;s<i.length;){const n=i[s];s++,_(n),z(n.$$)}}catch(n){throw i.length=0,s=0,n}for(_(null),i.length=0,s=0;g.length;)g.pop()();for(let n=0;n<c.length;n+=1){const e=c[n];d.has(e)||(d.add(e),e())}c.length=0}while(i.length);for(;h.length;)h.pop()();p=!1,d.clear(),_(t)}function z(t){if(t.fragment!==null){t.update(),E(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(F)}}function W(t){const n=[],e=[];c.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),c=n}export{C as A,W as B,l as C,_ as D,j as E,i as F,q as G,R as a,g as b,N as c,v as d,w as e,J as f,P as g,I as h,M as i,U as j,B as k,G as l,F as m,b as n,Q as o,V as p,L as q,E as r,A as s,T as t,H as u,K as v,D as w,y as x,S as y,O as z};
