import{w as _,q as t,L as m,M as p,y as l}from"./BjerbEsX.js";function a(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function v(e){t===null&&a(),p&&t.l!==null?y(t).m.push(e):_(()=>{const n=l(e);if(typeof n=="function")return n})}function w(e){t===null&&a(),v(()=>()=>l(e))}function d(e,n,{bubbles:c=!1,cancelable:s=!1}={}){return new CustomEvent(e,{detail:n,bubbles:c,cancelable:s})}function x(){const e=t;return e===null&&a(),(n,c,s)=>{var r;const o=(r=e.s.$$events)==null?void 0:r[n];if(o){const f=m(o)?o.slice():[o],u=d(n,c,s);for(const i of f)i.call(e.x,u);return!u.defaultPrevented}return!0}}function y(e){var n=e.l;return n.u??(n.u={a:[],b:[],m:[]})}export{w as a,x as c,v as o};
