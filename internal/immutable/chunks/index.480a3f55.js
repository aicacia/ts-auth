var _=Object.defineProperty;var U=(t,e,n)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var d=(t,e,n)=>(U(t,typeof e!="symbol"?e+"":e,n),n);const S="http://localhost".replace(/\/+$/,"");class q{constructor(e={}){this.configuration=e}set config(e){this.configuration=e}get basePath(){return this.configuration.basePath!=null?this.configuration.basePath:S}get fetchApi(){return this.configuration.fetchApi}get middleware(){return this.configuration.middleware||[]}get queryParamsStringify(){return this.configuration.queryParamsStringify||P}get username(){return this.configuration.username}get password(){return this.configuration.password}get apiKey(){const e=this.configuration.apiKey;if(e)return typeof e=="function"?e:()=>e}get accessToken(){const e=this.configuration.accessToken;if(e)return typeof e=="function"?e:async()=>e}get headers(){return this.configuration.headers}get credentials(){return this.configuration.credentials}}const I=new q,g=class g{constructor(e=I){d(this,"middleware");d(this,"fetchApi",async(e,n)=>{let i={url:e,init:n};for(const r of this.middleware)r.pre&&(i=await r.pre({fetch:this.fetchApi,...i})||i);let a;try{a=await(this.configuration.fetchApi||fetch)(i.url,i.init)}catch(r){for(const s of this.middleware)s.onError&&(a=await s.onError({fetch:this.fetchApi,url:i.url,init:i.init,error:r,response:a?a.clone():void 0})||a);if(a===void 0)throw r instanceof Error?new O(r,"The request failed and the interceptors did not return an alternative response"):r}for(const r of this.middleware)r.post&&(a=await r.post({fetch:this.fetchApi,url:i.url,init:i.init,response:a.clone()})||a);return a});this.configuration=e,this.middleware=e.middleware}withMiddleware(...e){const n=this.clone();return n.middleware=n.middleware.concat(...e),n}withPreMiddleware(...e){const n=e.map(i=>({pre:i}));return this.withMiddleware(...n)}withPostMiddleware(...e){const n=e.map(i=>({post:i}));return this.withMiddleware(...n)}isJsonMime(e){return e?g.jsonRegex.test(e):!1}async request(e,n){const{url:i,init:a}=await this.createFetchParams(e,n),r=await this.fetchApi(i,a);if(r&&r.status>=200&&r.status<300)return r;throw new v(r,"Response returned an error code")}async createFetchParams(e,n){let i=this.configuration.basePath+e.path;e.query!==void 0&&Object.keys(e.query).length!==0&&(i+="?"+this.configuration.queryParamsStringify(e.query));const a=Object.assign({},this.configuration.headers,e.headers);Object.keys(a).forEach(R=>a[R]===void 0?delete a[R]:{});const r=typeof n=="function"?n:async()=>n,s={method:e.method,headers:a,body:e.body,credentials:this.configuration.credentials},o={...s,...await r({init:s,context:e})};let w;C(o.body)||o.body instanceof URLSearchParams||E(o.body)?w=o.body:this.isJsonMime(a["Content-Type"])?w=JSON.stringify(o.body):w=o.body;const k={...o,body:w};return{url:i,init:k}}clone(){const e=this.constructor,n=new e(this.configuration);return n.middleware=this.middleware.slice(),n}};d(g,"jsonRegex",new RegExp("^(:?application/json|[^;/ 	]+/[^;/ 	]+[+]json)[ 	]*(:?;.*)?$","i"));let h=g;function E(t){return typeof Blob<"u"&&t instanceof Blob}function C(t){return typeof FormData<"u"&&t instanceof FormData}class v extends Error{constructor(n,i){super(i);d(this,"name","ResponseError");this.response=n}}class O extends Error{constructor(n,i){super(i);d(this,"name","FetchError");this.cause=n}}class c extends Error{constructor(n,i){super(i);d(this,"name","RequiredError");this.field=n}}function b(t,e){const n=t[e];return n!=null}function P(t,e=""){return Object.keys(t).map(n=>T(n,t[n],e)).filter(n=>n.length>0).join("&")}function T(t,e,n=""){const i=n+(n.length?`[${t}]`:t);if(e instanceof Array){const a=e.map(r=>encodeURIComponent(String(r))).join(`&${encodeURIComponent(i)}=`);return`${encodeURIComponent(i)}=${a}`}if(e instanceof Set){const a=Array.from(e);return T(t,a,n)}return e instanceof Date?`${encodeURIComponent(i)}=${encodeURIComponent(e.toISOString())}`:e instanceof Object?P(e,i):`${encodeURIComponent(i)}=${encodeURIComponent(String(e))}`}class u{constructor(e,n=i=>i){this.raw=e,this.transformer=n}async value(){return this.transformer(await this.raw.json())}}class p{constructor(e){this.raw=e}async value(){}}class f{constructor(e){this.raw=e}async value(){return await this.raw.text()}}function m(t){return J(t)}function J(t,e){return t==null?t:{created_at:new Date(t.created_at),id:t.id,name:t.name,updated_at:new Date(t.updated_at),uri:t.uri}}function $(t){return z(t)}function z(t,e){return t==null?t:{application_id:t.application_id,created_at:new Date(t.created_at),key:t.key,name:t.name,updated_at:new Date(t.updated_at),value:t.value}}function N(t){if(t!==void 0)return t===null?null:{username:t.username}}function F(t){if(t!==void 0)return t===null?null:{email:t.email}}function y(t){return D(t)}function D(t,e){return t==null?t:{confirmed:t.confirmed,created_at:new Date(t.created_at),email:t.email,id:t.id,updated_at:new Date(t.updated_at)}}function W(t){return B(t)}function B(t,e){return t==null?t:{db:t.db}}function M(t){return x(t)}function x(t,e){return t==null?t:{data:t.data.map(m),has_more:t.has_more}}function A(t){return G(t)}function G(t,e){return t==null?t:{created_at:new Date(t.created_at),email:b(t,"email")?y(t.email):void 0,emails:t.emails.map(y),id:t.id,permissions:t.permissions,updated_at:new Date(t.updated_at),username:t.username}}function H(t){return L(t)}function L(t,e){return t==null?t:{data:t.data.map(A),has_more:t.has_more}}function V(t){if(t!==void 0)return t===null?null:{application_id:t.application_id,email:t.email}}function K(t){if(t!==void 0)return t===null?null:{application_id:t.application_id,password:t.password,password_confirmation:t.password_confirmation,reset_password_token:t.reset_password_token}}function Q(t){if(t!==void 0)return t===null?null:{password:t.password,password_confirmation:t.password_confirmation}}function X(t){if(t!==void 0)return t===null?null:{application_id:t.application_id,password:t.password,username_or_email:t.username_or_email}}function Y(t){return Z(t)}function Z(t,e){return t==null?t:{enabled:t.enabled,password:t.password}}function j(t){if(t!==void 0)return t===null?null:{application_id:t.application_id,email:t.email,password:t.password,password_confirmation:t.password_confirmation,username:t.username}}function ee(t){if(t!==void 0)return t===null?null:{key:t.key,value:t.value}}function te(t){if(t!==void 0)return t===null?null:{name:t.name,uri:t.uri}}function ne(t){return ie(t)}function ie(t,e){return t==null?t:{version:t.version}}class ae extends h{async configRaw(e,n){if(e.applicationId===null||e.applicationId===void 0)throw new c("applicationId","Required parameter requestParameters.applicationId was null or undefined when calling config.");const i={},a={};if(this.configuration&&this.configuration.accessToken){const s=this.configuration.accessToken,o=await s("Authorization",[]);o&&(a.Authorization=`Bearer ${o}`)}const r=await this.request({path:"/applications/{application_id}/config".replace("{application_id}",encodeURIComponent(String(e.applicationId))),method:"GET",headers:a,query:i},n);return new u(r,s=>s.map($))}async config(e,n){return await(await this.configRaw({applicationId:e},n)).value()}async indexRaw(e){const n={},i={};if(this.configuration&&this.configuration.accessToken){const r=this.configuration.accessToken,s=await r("Authorization",[]);s&&(i.Authorization=`Bearer ${s}`)}const a=await this.request({path:"/applications",method:"GET",headers:i,query:n},e);return new u(a,r=>M(r))}async index(e){return await(await this.indexRaw(e)).value()}async showRaw(e,n){if(e.applicationId===null||e.applicationId===void 0)throw new c("applicationId","Required parameter requestParameters.applicationId was null or undefined when calling show.");const i={},a={};if(this.configuration&&this.configuration.accessToken){const s=this.configuration.accessToken,o=await s("Authorization",[]);o&&(a.Authorization=`Bearer ${o}`)}const r=await this.request({path:"/applications/{application_id}".replace("{application_id}",encodeURIComponent(String(e.applicationId))),method:"GET",headers:a,query:i},n);return new u(r,s=>m(s))}async show(e,n){return await(await this.showRaw({applicationId:e},n)).value()}async updateRaw(e,n){if(e.applicationId===null||e.applicationId===void 0)throw new c("applicationId","Required parameter requestParameters.applicationId was null or undefined when calling update.");if(e.updateApplicationRequest===null||e.updateApplicationRequest===void 0)throw new c("updateApplicationRequest","Required parameter requestParameters.updateApplicationRequest was null or undefined when calling update.");const i={},a={};if(a["Content-Type"]="application/json",this.configuration&&this.configuration.accessToken){const s=this.configuration.accessToken,o=await s("Authorization",[]);o&&(a.Authorization=`Bearer ${o}`)}const r=await this.request({path:"/applications/{application_id}".replace("{application_id}",encodeURIComponent(String(e.applicationId))),method:"PATCH",headers:a,query:i,body:te(e.updateApplicationRequest)},n);return new u(r,s=>m(s))}async update(e,n,i){return await(await this.updateRaw({applicationId:e,updateApplicationRequest:n},i)).value()}async updateConfigRaw(e,n){if(e.applicationId===null||e.applicationId===void 0)throw new c("applicationId","Required parameter requestParameters.applicationId was null or undefined when calling updateConfig.");if(e.updateApplicationConfigRequest===null||e.updateApplicationConfigRequest===void 0)throw new c("updateApplicationConfigRequest","Required parameter requestParameters.updateApplicationConfigRequest was null or undefined when calling updateConfig.");const i={},a={};if(a["Content-Type"]="application/json",this.configuration&&this.configuration.accessToken){const s=this.configuration.accessToken,o=await s("Authorization",[]);o&&(a.Authorization=`Bearer ${o}`)}const r=await this.request({path:"/applications/{application_id}/config".replace("{application_id}",encodeURIComponent(String(e.applicationId))),method:"PATCH",headers:a,query:i,body:ee(e.updateApplicationConfigRequest)},n);return new p(r)}async updateConfig(e,n,i){await this.updateConfigRaw({applicationId:e,updateApplicationConfigRequest:n},i)}}class re extends h{async confirmEmailRaw(e,n){if(e.confirmationToken===null||e.confirmationToken===void 0)throw new c("confirmationToken","Required parameter requestParameters.confirmationToken was null or undefined when calling confirmEmail.");const i={},a={},r=await this.request({path:"/auth/confirm-email/{confirmation_token}".replace("{confirmation_token}",encodeURIComponent(String(e.confirmationToken))),method:"PUT",headers:a,query:i},n);return new p(r)}async confirmEmail(e,n){await this.confirmEmailRaw({confirmationToken:e},n)}async requestResetPasswordRaw(e,n){if(e.requestResetPasswordRequest===null||e.requestResetPasswordRequest===void 0)throw new c("requestResetPasswordRequest","Required parameter requestParameters.requestResetPasswordRequest was null or undefined when calling requestResetPassword.");const i={},a={};a["Content-Type"]="application/json";const r=await this.request({path:"/auth/request-reset-password",method:"POST",headers:a,query:i,body:V(e.requestResetPasswordRequest)},n);return new p(r)}async requestResetPassword(e,n){await this.requestResetPasswordRaw({requestResetPasswordRequest:e},n)}async resetPasswordWithTokenRaw(e,n){if(e.resetPasswordRequest===null||e.resetPasswordRequest===void 0)throw new c("resetPasswordRequest","Required parameter requestParameters.resetPasswordRequest was null or undefined when calling resetPasswordWithToken.");const i={},a={};a["Content-Type"]="application/json";const r=await this.request({path:"/auth/reset-password",method:"POST",headers:a,query:i,body:K(e.resetPasswordRequest)},n);return this.isJsonMime(r.headers.get("content-type"))?new u(r):new f(r)}async resetPasswordWithToken(e,n){return await(await this.resetPasswordWithTokenRaw({resetPasswordRequest:e},n)).value()}async signInWithPasswordRaw(e,n){if(e.signInWithPasswordRequest===null||e.signInWithPasswordRequest===void 0)throw new c("signInWithPasswordRequest","Required parameter requestParameters.signInWithPasswordRequest was null or undefined when calling signInWithPassword.");const i={},a={};a["Content-Type"]="application/json";const r=await this.request({path:"/auth/sign-in/password",method:"POST",headers:a,query:i,body:X(e.signInWithPasswordRequest)},n);return this.isJsonMime(r.headers.get("content-type"))?new u(r):new f(r)}async signInWithPassword(e,n){return await(await this.signInWithPasswordRaw({signInWithPasswordRequest:e},n)).value()}async signUpMethodsRaw(e,n){if(e.applicationId===null||e.applicationId===void 0)throw new c("applicationId","Required parameter requestParameters.applicationId was null or undefined when calling signUpMethods.");const i={},a={};if(this.configuration&&this.configuration.accessToken){const s=this.configuration.accessToken,o=await s("Authorization",[]);o&&(a.Authorization=`Bearer ${o}`)}const r=await this.request({path:"/auth/sign-up-methods/{application_id}".replace("{application_id}",encodeURIComponent(String(e.applicationId))),method:"GET",headers:a,query:i},n);return new u(r,s=>Y(s))}async signUpMethods(e,n){return await(await this.signUpMethodsRaw({applicationId:e},n)).value()}async signUpWithPasswordRaw(e,n){if(e.signUpWithPasswordRequest===null||e.signUpWithPasswordRequest===void 0)throw new c("signUpWithPasswordRequest","Required parameter requestParameters.signUpWithPasswordRequest was null or undefined when calling signUpWithPassword.");const i={},a={};a["Content-Type"]="application/json";const r=await this.request({path:"/auth/sign-up/password",method:"POST",headers:a,query:i,body:j(e.signUpWithPasswordRequest)},n);return this.isJsonMime(r.headers.get("content-type"))?new u(r):new f(r)}async signUpWithPassword(e,n){return await(await this.signUpWithPasswordRaw({signUpWithPasswordRequest:e},n)).value()}}class se extends h{async applicationsRaw(e){const n={},i={};if(this.configuration&&this.configuration.accessToken){const r=this.configuration.accessToken,s=await r("Authorization",[]);s&&(i.Authorization=`Bearer ${s}`)}const a=await this.request({path:"/users/applications",method:"GET",headers:i,query:n},e);return new u(a,r=>r.map(m))}async applications(e){return await(await this.applicationsRaw(e)).value()}async changeUsernameRaw(e,n){if(e.changeUsernameRequest===null||e.changeUsernameRequest===void 0)throw new c("changeUsernameRequest","Required parameter requestParameters.changeUsernameRequest was null or undefined when calling changeUsername.");const i={},a={};if(a["Content-Type"]="application/json",this.configuration&&this.configuration.accessToken){const s=this.configuration.accessToken,o=await s("Authorization",[]);o&&(a.Authorization=`Bearer ${o}`)}const r=await this.request({path:"/users/change-username",method:"PUT",headers:a,query:i,body:N(e.changeUsernameRequest)},n);return new p(r)}async changeUsername(e,n){await this.changeUsernameRaw({changeUsernameRequest:e},n)}async createEmailRaw(e,n){if(e.createUserEmailRequest===null||e.createUserEmailRequest===void 0)throw new c("createUserEmailRequest","Required parameter requestParameters.createUserEmailRequest was null or undefined when calling createEmail.");const i={},a={};if(a["Content-Type"]="application/json",this.configuration&&this.configuration.accessToken){const s=this.configuration.accessToken,o=await s("Authorization",[]);o&&(a.Authorization=`Bearer ${o}`)}const r=await this.request({path:"/users/emails",method:"POST",headers:a,query:i,body:F(e.createUserEmailRequest)},n);return new u(r,s=>y(s))}async createEmail(e,n){return await(await this.createEmailRaw({createUserEmailRequest:e},n)).value()}async currentRaw(e){const n={},i={};if(this.configuration&&this.configuration.accessToken){const r=this.configuration.accessToken,s=await r("Authorization",[]);s&&(i.Authorization=`Bearer ${s}`)}const a=await this.request({path:"/users/current",method:"GET",headers:i,query:n},e);return new u(a,r=>A(r))}async current(e){return await(await this.currentRaw(e)).value()}async deleteEmailRaw(e,n){if(e.emailId===null||e.emailId===void 0)throw new c("emailId","Required parameter requestParameters.emailId was null or undefined when calling deleteEmail.");const i={},a={};if(this.configuration&&this.configuration.accessToken){const s=this.configuration.accessToken,o=await s("Authorization",[]);o&&(a.Authorization=`Bearer ${o}`)}const r=await this.request({path:"/users/emails/{email_id}".replace("{email_id}",encodeURIComponent(String(e.emailId))),method:"DELETE",headers:a,query:i},n);return new p(r)}async deleteEmail(e,n){await this.deleteEmailRaw({emailId:e},n)}async resetPasswordRaw(e,n){if(e.resetUserPasswordRequest===null||e.resetUserPasswordRequest===void 0)throw new c("resetUserPasswordRequest","Required parameter requestParameters.resetUserPasswordRequest was null or undefined when calling resetPassword.");const i={},a={};if(a["Content-Type"]="application/json",this.configuration&&this.configuration.accessToken){const s=this.configuration.accessToken,o=await s("Authorization",[]);o&&(a.Authorization=`Bearer ${o}`)}const r=await this.request({path:"/users/reset-password",method:"PUT",headers:a,query:i,body:Q(e.resetUserPasswordRequest)},n);return this.isJsonMime(r.headers.get("content-type"))?new u(r):new f(r)}async resetPassword(e,n){return await(await this.resetPasswordRaw({resetUserPasswordRequest:e},n)).value()}async sendConfirmationEmailRaw(e,n){if(e.emailId===null||e.emailId===void 0)throw new c("emailId","Required parameter requestParameters.emailId was null or undefined when calling sendConfirmationEmail.");const i={},a={};if(this.configuration&&this.configuration.accessToken){const s=this.configuration.accessToken,o=await s("Authorization",[]);o&&(a.Authorization=`Bearer ${o}`)}const r=await this.request({path:"/users/send-confirmation/{email_id}".replace("{email_id}",encodeURIComponent(String(e.emailId))),method:"PUT",headers:a,query:i},n);return new p(r)}async sendConfirmationEmail(e,n){await this.sendConfirmationEmailRaw({emailId:e},n)}async setPrimaryEmailRaw(e,n){if(e.emailId===null||e.emailId===void 0)throw new c("emailId","Required parameter requestParameters.emailId was null or undefined when calling setPrimaryEmail.");const i={},a={};if(this.configuration&&this.configuration.accessToken){const s=this.configuration.accessToken,o=await s("Authorization",[]);o&&(a.Authorization=`Bearer ${o}`)}const r=await this.request({path:"/users/emails/{email_id}/set-primary-email".replace("{email_id}",encodeURIComponent(String(e.emailId))),method:"PUT",headers:a,query:i},n);return new p(r)}async setPrimaryEmail(e,n){await this.setPrimaryEmailRaw({emailId:e},n)}async usersRaw(e){const n={},i={};if(this.configuration&&this.configuration.accessToken){const r=this.configuration.accessToken,s=await r("Authorization",[]);s&&(i.Authorization=`Bearer ${s}`)}const a=await this.request({path:"/users",method:"GET",headers:i,query:n},e);return new u(a,r=>H(r))}async users(e){return await(await this.usersRaw(e)).value()}}class oe extends h{async healthRaw(e){const n={},i={},a=await this.request({path:"/health",method:"GET",headers:i,query:n},e);return new u(a,r=>W(r))}async health(e){return await(await this.healthRaw(e)).value()}async versionRaw(e){const n={},i={},a=await this.request({path:"/version",method:"GET",headers:i,query:n},e);return new u(a,r=>ne(r))}async version(e){return await(await this.versionRaw(e)).value()}}const ce="https://api.auth.aicacia.com",ue={middleware:[{pre:async t=>({...t,init:{...t.init,mode:"cors"}})}],credentials:"same-origin"},de={...ue,basePath:typeof __DEV_AUTH_API_URL__<"u"?__DEV_AUTH_API_URL__:ce},l=new q(de);new oe(l);const he=new re(l),le=new se(l),we=new ae(l);function fe(t){l.configuration.accessToken=t}export{v as R,we as a,he as b,fe as s,le as u};
