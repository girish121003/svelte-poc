import{a0 as E,a1 as b,a2 as P,D as S,Q as Y,a3 as q,R as W,H as B,a4 as L,Y as C,J as $,a5 as j,a6 as T,N as w,M as O,I as J,c as p,a7 as Q,a8 as X,a9 as z,aa as F,ab as G,ac as K,X as U,a as Z,p as x,e as tt,h as N,q as et}from"./B4Mao2Qk.js";import{b as rt}from"./BWTyLByg.js";const at=["touchstart","touchmove"];function nt(t){return at.includes(t)}let A=!1;function st(){A||(A=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const a of t.target.elements)(e=a.__on_r)==null||e.call(a)})},{capture:!0}))}function k(t){var e=P,a=S;E(null),b(null);try{return t()}finally{E(e),b(a)}}function _t(t,e,a,i=a){t.addEventListener(e,()=>k(a));const n=t.__on_r;n?t.__on_r=()=>{n(),i(!0)}:t.__on_r=()=>i(!0),st()}const it=new Set,I=new Set;function ot(t,e,a,i={}){function n(r){if(i.capture||y.call(e,r),!r.cancelBubble)return k(()=>a==null?void 0:a.call(this,r))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?q(()=>{e.addEventListener(t,n,i)}):e.addEventListener(t,n,i),n}function lt(t,e,a,i,n){var r={capture:i,passive:n},u=ot(t,e,a,r);(e===document.body||e===window||e===document)&&Y(()=>{e.removeEventListener(t,u,r)})}function y(t){var D;var e=this,a=e.ownerDocument,i=t.type,n=((D=t.composedPath)==null?void 0:D.call(t))||[],r=n[0]||t.target,u=0,d=t.__root;if(d){var _=n.indexOf(d);if(_!==-1&&(e===document||e===window)){t.__root=e;return}var v=n.indexOf(e);if(v===-1)return;_<=v&&(u=_)}if(r=n[u]||t.target,r!==e){W(t,"currentTarget",{configurable:!0,get(){return r||a}});var m=P,f=S;E(null),b(null);try{for(var s,o=[];r!==null;){var c=r.assignedSlot||r.parentNode||r.host||null;try{var l=r["__"+i];if(l!==void 0&&(!r.disabled||t.target===r))if(B(l)){var[M,...V]=l;M.apply(r,[t,...V])}else l.call(r,t)}catch(g){s?o.push(g):s=g}if(t.cancelBubble||c===e||c===null)break;r=c}if(s){for(let g of o)queueMicrotask(()=>{throw g});throw s}}finally{t.__root=e,delete t.currentTarget,E(m),b(f)}}}function dt(t,e){var a=e==null?"":typeof e=="object"?e+"":e;a!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=a,t.nodeValue=a+"")}function ut(t,e){return H(t,e)}function vt(t,e){L(),e.intro=e.intro??!1;const a=e.target,i=N,n=p;try{for(var r=C(a);r&&(r.nodeType!==8||r.data!==$);)r=j(r);if(!r)throw T;w(!0),O(r),J();const u=H(t,{...e,anchor:r});if(p===null||p.nodeType!==8||p.data!==Q)throw X(),T;return w(!1),u}catch(u){if(u===T)return e.recover===!1&&z(),L(),F(a),w(!1),ut(t,e);throw u}finally{w(i),O(n)}}const h=new Map;function H(t,{target:e,anchor:a,props:i={},events:n,context:r,intro:u=!0}){L();var d=new Set,_=f=>{for(var s=0;s<f.length;s++){var o=f[s];if(!d.has(o)){d.add(o);var c=nt(o);e.addEventListener(o,y,{passive:c});var l=h.get(o);l===void 0?(document.addEventListener(o,y,{passive:c}),h.set(o,1)):h.set(o,l+1)}}};_(G(it)),I.add(_);var v=void 0,m=K(()=>{var f=a??e.appendChild(U());return Z(()=>{if(r){x({});var s=tt;s.c=r}n&&(i.$$events=n),N&&rt(f,null),v=t(f,i)||{},N&&(S.nodes_end=p),r&&et()}),()=>{var c;for(var s of d){e.removeEventListener(s,y);var o=h.get(s);--o===0?(document.removeEventListener(s,y),h.delete(s)):h.set(s,o)}I.delete(_),f!==a&&((c=f.parentNode)==null||c.removeChild(f))}});return R.set(v,m),v}let R=new WeakMap;function ht(t,e){const a=R.get(t);return a?(R.delete(t),a(e)):Promise.resolve()}export{st as a,lt as e,vt as h,_t as l,ut as m,dt as s,ht as u};
