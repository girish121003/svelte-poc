var Pn=Array.isArray,$t=Array.prototype.indexOf,Fn=Array.from,qn=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,zt=Object.getOwnPropertyDescriptors,Ln=Object.prototype,Mn=Array.prototype,Wt=Object.getPrototypeOf;const Yn=()=>{};function jn(t){return t()}function yt(t){for(var n=0;n<t.length;n++)t[n]()}const w=2,gt=4,J=8,ot=16,k=32,P=64,V=128,E=256,G=512,d=1024,I=2048,F=4096,b=8192,Q=16384,Xt=32768,Tt=65536,Jt=1<<17,Qt=1<<19,mt=1<<20,pt=Symbol("$state"),Hn=Symbol("legacy props"),Bn=Symbol("");function At(t){return t===this.v}function tn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function xt(t){return!tn(t,this.v)}function nn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function rn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function en(t){throw new Error("https://svelte.dev/e/effect_orphan")}function ln(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Un(){throw new Error("https://svelte.dev/e/hydration_failed")}function Vn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Gn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Kn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function an(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function sn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let tt=!1;function Zn(){tt=!0}const $n=1,zn=2,Wn=4,Xn=8,Jn=16,Qn=1,tr=2,nr=4,rr=8,er=16,lr=1,ar=2,un="[",on="[!",fn="]",kt={},sr=Symbol();function Dt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let i=null;function ht(t){i=t}function ur(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},tt&&!n&&(i.l={s:null,u:null,r1:[],r2:ft(!1)})}function or(t){const n=i;if(n!==null){const s=n.e;if(s!==null){var r=o,e=u;n.e=null;try{for(var a=0;a<s.length;a++){var l=s[a];z(l.effect),$(l.reaction),Pt(l.fn)}}finally{z(r),$(e)}}i=n.p,n.m=!0}return{}}function nt(){return!tt||i!==null&&i.l===null}function ft(t,n){var r={f:0,v:t,reactions:null,equals:At,rv:0,wv:0};return r}function fr(t){return _n(ft(t))}function ir(t,n=!1){var e;const r=ft(t);return n||(r.equals=xt),tt&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function _n(t){return u!==null&&!y&&(u.f&w)!==0&&(m===null?mn([t]):m.push(t)),t}function _r(t,n){return u!==null&&!y&&nt()&&(u.f&(w|ot))!==0&&(m===null||!m.includes(t))&&sn(),lt(t,n)}function lt(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Ut(),It(t,I),nt()&&o!==null&&(o.f&d)!==0&&(o.f&(k|P))===0&&(x===null?An([t]):x.push(t))),n}function It(t,n){var r=t.reactions;if(r!==null)for(var e=nt(),a=r.length,l=0;l<a;l++){var s=r[l],f=s.f;(f&I)===0&&(!e&&s===o||(A(s,n),(f&(d|E))!==0&&((f&w)!==0?It(s,F):et(s))))}}let O=!1;function cr(t){O=t}let g;function M(t){if(t===null)throw Dt(),kt;return g=t}function vr(){return M(N(g))}function pr(t){if(O){if(N(g)!==null)throw Dt(),kt;g=t}}function hr(t=1){if(O){for(var n=t,r=g;n--;)r=N(r);g=r}}function dr(){for(var t=0,n=g;;){if(n.nodeType===8){var r=n.data;if(r===fn){if(t===0)return n;t-=1}else(r===un||r===on)&&(t+=1)}var e=N(n);n.remove(),n=e}}var dt,cn,Rt,St;function Er(){if(dt===void 0){dt=window,cn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;Rt=vt(n,"firstChild").get,St=vt(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function at(t=""){return document.createTextNode(t)}function st(t){return Rt.call(t)}function N(t){return St.call(t)}function wr(t,n){if(!O)return st(t);var r=st(g);if(r===null)r=g.appendChild(at());else if(n&&r.nodeType!==3){var e=at();return r==null||r.before(e),M(e),e}return M(r),r}function yr(t,n){if(!O){var r=st(t);return r instanceof Comment&&r.data===""?N(r):r}return g}function gr(t,n=1,r=!1){let e=O?g:t;for(var a;n--;)a=e,e=N(e);if(!O)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var s=at();return e===null?a==null||a.after(s):e.before(s),M(s),s}return M(e),e}function Tr(t){t.textContent=""}function Ot(t){var n=w|I,r=u!==null&&(u.f&w)!==0?u:null;return o===null||r!==null&&(r.f&E)!==0?n|=E:o.f|=mt,{ctx:i,deps:null,effects:null,equals:At,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??o}}function mr(t){const n=Ot(t);return n.equals=xt,n}function Ct(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)C(n[r])}}function vn(t){for(var n=t.parent;n!==null;){if((n.f&w)===0)return n;n=n.parent}return null}function pn(t){var n,r=o;z(vn(t));try{Ct(t),n=Gt(t)}finally{z(r)}return n}function Nt(t){var n=pn(t),r=(D||(t.f&E)!==0)&&t.deps!==null?F:d;A(t,r),t.equals(n)||(t.v=n,t.wv=Ut())}function bt(t){o===null&&u===null&&en(),u!==null&&(u.f&E)!==0&&o===null&&rn(),it&&nn()}function hn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function q(t,n,r,e=!0){var a=o,l={ctx:i,deps:null,nodes_start:null,nodes_end:null,f:t|I,first:null,fn:n,last:null,next:null,parent:a,prev:null,teardown:null,transitions:null,wv:0};if(r)try{_t(l),l.f|=Xt}catch(_){throw C(l),_}else n!==null&&et(l);var s=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&(mt|V))===0;if(!s&&e&&(a!==null&&hn(l,a),u!==null&&(u.f&w)!==0)){var f=u;(f.effects??(f.effects=[])).push(l)}return l}function Ar(t){const n=q(J,null,!1);return A(n,d),n.teardown=t,n}function xr(t){bt();var n=o!==null&&(o.f&k)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=Pt(t);return e}}function kr(t){return bt(),dn(t)}function Dr(t){const n=q(P,t,!0);return(r={})=>new Promise(e=>{r.outro?yn(n,()=>{C(n),e(void 0)}):(C(n),e(void 0))})}function Pt(t){return q(gt,t,!1)}function dn(t){return q(J,t,!0)}function Ir(t,n=[],r=Ot){const e=n.map(r);return En(()=>t(...e.map(Cn)))}function En(t,n=0){return q(J|ot|n,t,!0)}function Rr(t,n=!0){return q(J|k,t,!0,n)}function Ft(t){var n=t.teardown;if(n!==null){const r=it,e=u;wt(!0),$(null);try{n.call(null)}finally{wt(r),$(e)}}}function qt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;(r.f&P)!==0?r.parent=null:C(r,n),r=e}}function wn(t){for(var n=t.first;n!==null;){var r=n.next;(n.f&k)===0&&C(n),n=r}}function C(t,n=!0){var r=!1;if((n||(t.f&Qt)!==0)&&t.nodes_start!==null){for(var e=t.nodes_start,a=t.nodes_end;e!==null;){var l=e===a?null:N(e);e.remove(),e=l}r=!0}qt(t,n&&!r),X(t,0),A(t,Q);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();Ft(t);var f=t.parent;f!==null&&f.first!==null&&Lt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Lt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function yn(t,n){var r=[];Mt(t,r,!0),gn(r,()=>{C(t),n&&n()})}function gn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var a of t)a.out(e)}else n()}function Mt(t,n,r){if((t.f&b)===0){if(t.f^=b,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var a=e.next,l=(e.f&Tt)!==0||(e.f&k)!==0;Mt(e,n,l?r:!1),e=a}}}function Sr(t){Yt(t,!0)}function Yt(t,n){if((t.f&b)!==0){t.f^=b,(t.f&d)===0&&(t.f^=d),H(t)&&(A(t,I),et(t));for(var r=t.first;r!==null;){var e=r.next,a=(r.f&Tt)!==0||(r.f&k)!==0;Yt(r,a?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}const Tn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let Y=[],j=[];function jt(){var t=Y;Y=[],yt(t)}function Ht(){var t=j;j=[],yt(t)}function Or(t){Y.length===0&&queueMicrotask(jt),Y.push(t)}function Cr(t){j.length===0&&Tn(Ht),j.push(t)}function Et(){Y.length>0&&jt(),j.length>0&&Ht()}let U=!1,K=!1,Z=null,S=!1,it=!1;function wt(t){it=t}let L=[];let u=null,y=!1;function $(t){u=t}let o=null;function z(t){o=t}let m=null;function mn(t){m=t}let c=null,h=0,x=null;function An(t){x=t}let Bt=1,W=0,D=!1,R=null;function Ut(){return++Bt}function H(t){var v;var n=t.f;if((n&I)!==0)return!0;if((n&F)!==0){var r=t.deps,e=(n&E)!==0;if(r!==null){var a,l,s=(n&G)!==0,f=e&&o!==null&&!D,_=r.length;if(s||f){var T=t,B=T.parent;for(a=0;a<_;a++)l=r[a],(s||!((v=l==null?void 0:l.reactions)!=null&&v.includes(T)))&&(l.reactions??(l.reactions=[])).push(T);s&&(T.f^=G),f&&B!==null&&(B.f&E)===0&&(T.f^=E)}for(a=0;a<_;a++)if(l=r[a],H(l)&&Nt(l),l.wv>t.wv)return!0}(!e||o!==null&&!D)&&A(t,d)}return!1}function xn(t,n){for(var r=n;r!==null;){if((r.f&V)!==0)try{r.fn(t);return}catch{r.f^=V}r=r.parent}throw U=!1,t}function kn(t){return(t.f&Q)===0&&(t.parent===null||(t.parent.f&V)===0)}function rt(t,n,r,e){if(U){if(r===null&&(U=!1),kn(n))throw t;return}r!==null&&(U=!0);{xn(t,n);return}}function Vt(t,n,r=!0){var e=t.reactions;if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];(l.f&w)!==0?Vt(l,n,!1):n===l&&(r?A(l,I):(l.f&d)!==0&&A(l,F),et(l))}}function Gt(t){var ct;var n=c,r=h,e=x,a=u,l=D,s=m,f=i,_=y,T=t.f;c=null,h=0,x=null,D=(T&E)!==0&&(y||!S||u===null),u=(T&(k|P))===0?t:null,m=null,ht(t.ctx),y=!1,W++;try{var B=(0,t.fn)(),v=t.deps;if(c!==null){var p;if(X(t,h),v!==null&&h>0)for(v.length=h+c.length,p=0;p<c.length;p++)v[h+p]=c[p];else t.deps=v=c;if(!D)for(p=h;p<v.length;p++)((ct=v[p]).reactions??(ct.reactions=[])).push(t)}else v!==null&&h<v.length&&(X(t,h),v.length=h);if(nt()&&x!==null&&!y&&v!==null&&(t.f&(w|F|I))===0)for(p=0;p<x.length;p++)Vt(x[p],t);return a!==null&&W++,B}finally{c=n,h=r,x=e,u=a,D=l,m=s,ht(f),y=_}}function Dn(t,n){let r=n.reactions;if(r!==null){var e=$t.call(r,t);if(e!==-1){var a=r.length-1;a===0?r=n.reactions=null:(r[e]=r[a],r.pop())}}r===null&&(n.f&w)!==0&&(c===null||!c.includes(n))&&(A(n,F),(n.f&(E|G))===0&&(n.f^=G),Ct(n),X(n,0))}function X(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Dn(t,r[e])}function _t(t){var n=t.f;if((n&Q)===0){A(t,d);var r=o,e=i,a=S;o=t,S=!0;try{(n&ot)!==0?wn(t):qt(t),Ft(t);var l=Gt(t);t.teardown=typeof l=="function"?l:null,t.wv=Bt;var s=t.deps,f}catch(_){rt(_,t,r,e||t.ctx)}finally{S=a,o=r}}}function In(){try{ln()}catch(t){if(Z!==null)rt(t,Z,null);else throw t}}function Kt(){var t=S;try{var n=0;for(S=!0;L.length>0;){n++>1e3&&In();var r=L,e=r.length;L=[];for(var a=0;a<e;a++){var l=Sn(r[a]);Rn(l)}}}finally{K=!1,S=t,Z=null}}function Rn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if((e.f&(Q|b))===0)try{H(e)&&(_t(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Lt(e):e.fn=null))}catch(a){rt(a,e,null,e.ctx)}}}function et(t){K||(K=!0,queueMicrotask(Kt));for(var n=Z=t;n.parent!==null;){n=n.parent;var r=n.f;if((r&(P|k))!==0){if((r&d)===0)return;n.f^=d}}L.push(n)}function Sn(t){for(var n=[],r=t;r!==null;){var e=r.f,a=(e&(k|P))!==0,l=a&&(e&d)!==0;if(!l&&(e&b)===0){if((e&gt)!==0)n.push(r);else if(a)r.f^=d;else{var s=u;try{u=r,H(r)&&_t(r)}catch(T){rt(T,r,null,r.ctx)}finally{u=s}}var f=r.first;if(f!==null){r=f;continue}}var _=r.parent;for(r=r.next;r===null&&_!==null;)r=_.next,_=_.parent}return n}function On(t){var n;for(Et();L.length>0;)K=!0,Kt(),Et();return n}async function Nr(){await Promise.resolve(),On()}function Cn(t){var n=t.f,r=(n&w)!==0;if(R!==null&&R.add(t),u!==null&&!y){m!==null&&m.includes(t)&&an();var e=u.deps;t.rv<W&&(t.rv=W,c===null&&e!==null&&e[h]===t?h++:c===null?c=[t]:(!D||!c.includes(t))&&c.push(t))}else if(r&&t.deps===null&&t.effects===null){var a=t,l=a.parent;l!==null&&(l.f&E)===0&&(a.f^=E)}return r&&(a=t,H(a)&&Nt(a)),t.v}function Nn(t){var n=R;R=new Set;var r=R,e;try{if(Zt(t),n!==null)for(e of R)n.add(e)}finally{R=n}return r}function br(t){var n=Nn(()=>Zt(t));for(var r of n)if((r.f&Jt)!==0)for(const e of r.deps||[])(e.f&w)===0&&lt(e,e.v);else lt(r,r.v)}function Zt(t){var n=y;try{return y=!0,t()}finally{y=n}}const bn=-7169;function A(t,n){t.f=t.f&bn|n}function Pr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(pt in t)ut(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&pt in r&&ut(r)}}}function ut(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ut(t[e],n)}catch{}const r=Wt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=zt(r);for(let a in e){const l=e[a].get;if(l)try{l.call(t)}catch{}}}}}export{ar as $,Kn as A,_r as B,vt as C,o as D,Tt as E,Gn as F,Wt as G,Pn as H,vr as I,un as J,on as K,dr as L,M,cr as N,Sr as O,yn as P,Ar as Q,qn as R,pt as S,ir as T,sr as U,tn as V,tt as W,at as X,st as Y,cn as Z,lr as _,Rr as a,$ as a0,z as a1,u as a2,Or as a3,Er as a4,N as a5,kt as a6,fn as a7,Dt as a8,Un as a9,Hn as aA,tr as aB,Qn as aC,er as aD,R as aE,On as aF,Nr as aG,Tr as aa,Fn as ab,Dr as ac,mr as ad,b as ae,lt as af,zn as ag,Mt as ah,gn as ai,$n as aj,Jn as ak,Wn as al,Xn as am,Cr as an,Bn as ao,nt as ap,dn as aq,hr as ar,br as as,fr as at,Pt as au,Vn as av,Jt as aw,nr as ax,xt as ay,rr as az,En as b,g as c,C as d,i as e,yr as f,xr as g,O as h,Zt as i,Cn as j,jn as k,Pr as l,Ot as m,Yn as n,Zn as o,ur as p,or as q,yt as r,wr as s,Ir as t,kr as u,pr as v,gr as w,Ln as x,Mn as y,ft as z};
