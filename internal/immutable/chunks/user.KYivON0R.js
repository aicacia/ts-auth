import{d as x,w as D}from"./index.ltnQeb78.js";import{l as U}from"./localstorageWritable._JYoYNm1.js";import{g as E}from"./utils.C9MzFJhm.js";import{c as B,s as I,u as _,a as P,P as j}from"./index.meplm-_N.js";import{g as F}from"./navigation.8QQJ154a.js";import{b as M}from"./paths.eUxvDbcf.js";const k=D(typeof navigator=="object"?navigator.onLine:!1),$=x(k,e=>e);function q(){return E($)}function z(){k.set(!0)}function G(){k.set(!1)}window.addEventListener("online",z),window.addEventListener("offline",G);function H(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var T={exports:{}};(function(e){var i=Object.prototype.hasOwnProperty,t="~";function a(){}Object.create&&(a.prototype=Object.create(null),new a().__proto__||(t=!1));function d(l,s,r){this.fn=l,this.context=s,this.once=r||!1}function A(l,s,r,o,m){if(typeof r!="function")throw new TypeError("The listener must be a function");var p=new d(r,o||l,m),c=t?t+s:s;return l._events[c]?l._events[c].fn?l._events[c]=[l._events[c],p]:l._events[c].push(p):(l._events[c]=p,l._eventsCount++),l}function b(l,s){--l._eventsCount===0?l._events=new a:delete l._events[s]}function u(){this._events=new a,this._eventsCount=0}u.prototype.eventNames=function(){var s=[],r,o;if(this._eventsCount===0)return s;for(o in r=this._events)i.call(r,o)&&s.push(t?o.slice(1):o);return Object.getOwnPropertySymbols?s.concat(Object.getOwnPropertySymbols(r)):s},u.prototype.listeners=function(s){var r=t?t+s:s,o=this._events[r];if(!o)return[];if(o.fn)return[o.fn];for(var m=0,p=o.length,c=new Array(p);m<p;m++)c[m]=o[m].fn;return c},u.prototype.listenerCount=function(s){var r=t?t+s:s,o=this._events[r];return o?o.fn?1:o.length:0},u.prototype.emit=function(s,r,o,m,p,c){var v=t?t+s:s;if(!this._events[v])return!1;var n=this._events[v],w=arguments.length,y,f;if(n.fn){switch(n.once&&this.removeListener(s,n.fn,void 0,!0),w){case 1:return n.fn.call(n.context),!0;case 2:return n.fn.call(n.context,r),!0;case 3:return n.fn.call(n.context,r,o),!0;case 4:return n.fn.call(n.context,r,o,m),!0;case 5:return n.fn.call(n.context,r,o,m,p),!0;case 6:return n.fn.call(n.context,r,o,m,p,c),!0}for(f=1,y=new Array(w-1);f<w;f++)y[f-1]=arguments[f];n.fn.apply(n.context,y)}else{var S=n.length,g;for(f=0;f<S;f++)switch(n[f].once&&this.removeListener(s,n[f].fn,void 0,!0),w){case 1:n[f].fn.call(n[f].context);break;case 2:n[f].fn.call(n[f].context,r);break;case 3:n[f].fn.call(n[f].context,r,o);break;case 4:n[f].fn.call(n[f].context,r,o,m);break;default:if(!y)for(g=1,y=new Array(w-1);g<w;g++)y[g-1]=arguments[g];n[f].fn.apply(n[f].context,y)}}return!0},u.prototype.on=function(s,r,o){return A(this,s,r,o,!1)},u.prototype.once=function(s,r,o){return A(this,s,r,o,!0)},u.prototype.removeListener=function(s,r,o,m){var p=t?t+s:s;if(!this._events[p])return this;if(!r)return b(this,p),this;var c=this._events[p];if(c.fn)c.fn===r&&(!m||c.once)&&(!o||c.context===o)&&b(this,p);else{for(var v=0,n=[],w=c.length;v<w;v++)(c[v].fn!==r||m&&!c[v].once||o&&c[v].context!==o)&&n.push(c[v]);n.length?this._events[p]=n.length===1?n[0]:n:b(this,p)}return this},u.prototype.removeAllListeners=function(s){var r;return s?(r=t?t+s:s,this._events[r]&&b(this,r)):(this._events=new a,this._eventsCount=0),this},u.prototype.off=u.prototype.removeListener,u.prototype.addListener=u.prototype.on,u.prefixed=t,u.EventEmitter=u,e.exports=u})(T);var J=T.exports;const K=H(J),O=U("token",null),h=U("user",null),Q=x(h,e=>e),te=x(h,e=>!!e),ne=x(h,e=>e?.permissions.includes("admin")===!0),L=new K;function ie(){return!!E(Q)&&!!E(O)}async function se(e,i){const t=await P.signInWithPassword({application_id:j,username_or_email:e,password:i});return N(t)}async function re(e,i,t,a){const d=await P.signUpWithPassword({application_id:j,username:e,email:a,password:i,password_confirmation:t});return N(d)}async function N(e){I(e);const i=await _.current();return h.set(i),O.set(e),L.emit("user",i),i}function C(){h.set(null),O.set(null),I(void 0)}async function oe(e){await _.changeUsername({username:e}),h.update(i=>i?{...i,username:e}:null)}async function ae(e){await _.setPrimaryEmail(e),h.update(i=>{if(i){const t=i.emails.findIndex(a=>a.id===e);if(t!==-1){const a=i.emails.slice(),d=a[t];return i.email?a[t]=i.email:a.splice(t,1),{...i,email:d,emails:a}}}return i})}async function le(e){await _.deleteEmail(e),h.update(i=>{if(i){const t=i.emails.findIndex(a=>a.id===e);if(t!==-1){const a=i.emails.slice();return a.splice(t,1),{...i,emails:a}}}return i})}async function ce(e,i){await P.confirmEmail(i),h.update(t=>{if(t){if(t.email?.id===e)return{...t,email:{...t.email,confirmed:!0}};const a=t.emails.findIndex(d=>d.id===e);if(a!==-1){const d=t.emails.slice();return d[a]={...d[a],confirmed:!0},{...t,emails:d}}}return t})}async function fe(e){const i=await _.createEmail({email:e});h.update(t=>{if(t){const a=t.emails.slice();return a.push(i),{...t,emails:a}}return t})}let W=!0;async function ue(){try{let e=E(h);if(W){if(q()){const i=E(O);i?(I(i),e=await _.current(),h.set(e),L.emit("user",e)):(C(),e=null)}else e&&L.emit("user",e);W=!1}return e}catch(e){return console.error(e),C(),null}}B.middleware?.push({async post(e){e.response.status===401&&(C(),await F(`${M}/signin`))}});export{K as E,ne as a,C as b,ae as c,le as d,ce as e,fe as f,ue as g,oe as h,ie as i,se as j,re as k,te as s,Q as u};
