import{R as e}from"./index.a07aa4d5.js";import{c as r}from"./notifications.a2f93f53.js";async function f(o){if(o instanceof e){const s=await o.response.json();if(s)return i(s),s}throw console.error(o),r("Application Error, if it presists please contact support."),o}async function i(o){for(const[s,t]of Object.entries(o))for(const n of t)r(`${s}: ${n.key}`)}export{f as h};