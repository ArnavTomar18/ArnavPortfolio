import{r as b,j as i,m as X,A as Ue,R as Pt}from"./motion-BwLpCJQ6.js";import{r as Lt}from"./vendor-B74eXnkj.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var ke={},Be=Lt;ke.createRoot=Be.createRoot,ke.hydrateRoot=Be.hydrateRoot;var T=[];for(var je=0;je<256;++je)T.push((je+256).toString(16).slice(1));function _t(e,t=0){return(T[e[t+0]]+T[e[t+1]]+T[e[t+2]]+T[e[t+3]]+"-"+T[e[t+4]]+T[e[t+5]]+"-"+T[e[t+6]]+T[e[t+7]]+"-"+T[e[t+8]]+T[e[t+9]]+"-"+T[e[t+10]]+T[e[t+11]]+T[e[t+12]]+T[e[t+13]]+T[e[t+14]]+T[e[t+15]]).toLowerCase()}var le,Dt=new Uint8Array(16);function It(){if(!le&&(le=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!le))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return le(Dt)}var Mt=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const ze={randomUUID:Mt};function Re(e,t,n){if(ze.randomUUID&&!e)return ze.randomUUID();e=e||{};var s=e.random||(e.rng||It)();return s[6]=s[6]&15|64,s[8]=s[8]&63|128,_t(s)}/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),at=(...e)=>e.filter((t,n,s)=>!!t&&s.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ut={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=b.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:r="",children:o,iconNode:a,...c},f)=>b.createElement("svg",{ref:f,...Ut,width:t,height:t,stroke:e,strokeWidth:s?Number(n)*24/Number(t):n,className:at("lucide",r),...c},[...a.map(([u,d])=>b.createElement(u,d)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=(e,t)=>{const n=b.forwardRef(({className:s,...r},o)=>b.createElement(Bt,{ref:o,iconNode:t,className:at(`lucide-${Ft(e)}`,s),...r}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=D("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=D("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=D("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=D("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=D("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=D("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=D("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=D("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=D("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=D("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=D("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=D("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=D("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function Qt({project:e}){const{title:t,description:n,tech_stack:s=[],github:r,live_demo:o,highlights:a=[]}=e;return i.jsxs(X.div,{className:"project-card",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:300,damping:28},children:[i.jsxs("div",{className:"pc-header",children:[i.jsxs("div",{className:"pc-badge",children:[i.jsx(Zt,{size:11}),"Project"]}),i.jsx("h3",{className:"pc-title",children:t})]}),i.jsx("p",{className:"pc-desc",children:n}),a&&a.length>0&&i.jsx("ul",{className:"pc-highlights",children:a.slice(0,3).map((c,f)=>i.jsxs("li",{children:[i.jsx("span",{className:"bullet",children:"▸"}),c]},f))}),s.length>0&&i.jsx("div",{className:"pc-stack",children:s.map(c=>i.jsx("span",{className:"tech-tag",children:c},c))}),(r||o)&&i.jsxs("div",{className:"pc-links",children:[r&&i.jsxs("a",{href:r.startsWith("http")?r:`https://${r}`,target:"_blank",rel:"noopener noreferrer",className:"pc-link pc-link-ghost",children:[i.jsx(qt,{size:14}),"GitHub"]}),o&&i.jsxs("a",{href:o.startsWith("http")?o:`https://${o}`,target:"_blank",rel:"noopener noreferrer",className:"pc-link pc-link-primary",children:[i.jsx(zt,{size:14}),"Live Demo"]})]}),i.jsx("style",{children:`
        .project-card {
          background: linear-gradient(135deg, rgba(59,130,246,0.06), rgba(139,92,246,0.04));
          border: 1px solid rgba(59,130,246,0.2);
          border-radius: 16px;
          padding: 1.1rem 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          max-width: 420px;
          position: relative;
          overflow: hidden;
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
        }

        .pc-header {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .pc-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #60a5fa;
        }

        .pc-title {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: #f0f0f8;
          line-height: 1.3;
        }

        .pc-desc {
          font-size: 0.83rem;
          color: #a0a0b8;
          line-height: 1.6;
        }

        .pc-highlights {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .pc-highlights li {
          font-size: 0.8rem;
          color: #c8c8e0;
          display: flex;
          align-items: flex-start;
          gap: 0.4rem;
          line-height: 1.5;
        }

        .bullet {
          color: #3b82f6;
          flex-shrink: 0;
          font-size: 0.7rem;
          margin-top: 0.1rem;
        }

        .pc-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }

        .tech-tag {
          background: rgba(139,92,246,0.1);
          border: 1px solid rgba(139,92,246,0.2);
          color: #c4b5fd;
          padding: 0.2rem 0.6rem;
          border-radius: 6px;
          font-size: 0.73rem;
          font-weight: 500;
        }

        .pc-links {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.1rem;
        }

        .pc-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.4rem 0.9rem;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.15s;
          font-family: 'DM Sans', sans-serif;
        }

        .pc-link-ghost {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          color: #a0a0b8;
        }
        .pc-link-ghost:hover {
          border-color: rgba(255,255,255,0.2);
          color: #f0f0f8;
          background: rgba(255,255,255,0.04);
        }

        .pc-link-primary {
          background: rgba(59,130,246,0.15);
          border: 1px solid rgba(59,130,246,0.3);
          color: #93c5fd;
        }
        .pc-link-primary:hover {
          background: rgba(59,130,246,0.25);
          border-color: rgba(59,130,246,0.5);
          color: #bfdbfe;
        }
      `})]})}function en({message:e}){const t=e.role==="user",{response:n}=e;return i.jsxs(X.div,{className:`bubble-row ${t?"bubble-user":"bubble-ai"}`,initial:{opacity:0,y:12,scale:.96},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,scale:.9},transition:{type:"spring",stiffness:350,damping:30},children:[!t&&i.jsx("div",{className:"msg-avatar",children:i.jsx(ct,{size:14})}),i.jsxs("div",{className:"bubble-content",children:[t&&i.jsx("div",{className:"bubble bubble-user-msg",children:n.content}),!t&&n.type==="text"&&i.jsx("div",{className:"bubble bubble-ai-msg",children:i.jsx(tn,{text:n.content})}),!t&&n.type==="project"&&i.jsx(Qt,{project:n}),i.jsx("span",{className:`bubble-time ${t?"time-right":"time-left"}`,children:nn(e.timestamp)})]}),t&&i.jsx("div",{className:"msg-avatar msg-avatar-user",children:i.jsx(Kt,{size:14})}),i.jsx("style",{children:`
        .bubble-row {
          display: flex;
          align-items: flex-end;
          gap: 0.6rem;
          max-width: 100%;
        }
        .bubble-user { flex-direction: row-reverse; }
        .bubble-ai { flex-direction: row; }

        .msg-avatar {
          width: 28px; height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          display: flex; align-items: center; justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .msg-avatar-user {
          background: linear-gradient(135deg, #374151, #1f2937);
        }

        .bubble-content {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          max-width: calc(100% - 40px);
        }

        .bubble {
          padding: 0.7rem 1rem;
          border-radius: 16px;
          font-size: 0.88rem;
          line-height: 1.65;
          word-break: break-word;
        }

        .bubble-user-msg {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: white;
          border-bottom-right-radius: 4px;
          margin-left: auto;
        }

        .bubble-ai-msg {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.07);
          color: #e2e2f0;
          border-bottom-left-radius: 4px;
        }

        .bubble-time {
          font-size: 0.68rem;
          color: rgba(136,136,160,0.5);
        }
        .time-right { text-align: right; }
        .time-left { text-align: left; }

        /* Formatted text */
        .fmt-text strong { color: #93c5fd; font-weight: 600; }
        .fmt-text em { color: #c4b5fd; font-style: italic; }
        .fmt-text .fmt-line { display: block; }
      `})]})}function tn({text:e}){const t=e.split(`
`);return i.jsx("span",{className:"fmt-text",children:t.map((n,s)=>{const r=n.split(/(\*\*[^*]+\*\*)/g).map((o,a)=>o.startsWith("**")&&o.endsWith("**")?i.jsx("strong",{children:o.slice(2,-2)},a):o);return i.jsxs("span",{className:"fmt-line",children:[r,s<t.length-1&&`
`]},s)})})}function nn(e){return new Date(e).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}function sn(){return i.jsxs(X.div,{className:"typing-row",initial:{opacity:0,y:8},animate:{opacity:1,y:0},exit:{opacity:0,y:-4},transition:{type:"spring",stiffness:300,damping:30},children:[i.jsx("div",{className:"typing-avatar",children:i.jsx(ct,{size:14})}),i.jsxs("div",{className:"typing-bubble",children:[i.jsx("span",{className:"dot",style:{animationDelay:"0ms"}}),i.jsx("span",{className:"dot",style:{animationDelay:"160ms"}}),i.jsx("span",{className:"dot",style:{animationDelay:"320ms"}})]}),i.jsx("style",{children:`
        .typing-row {
          display: flex;
          align-items: flex-end;
          gap: 0.6rem;
        }
        .typing-avatar {
          width: 28px; height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          display: flex; align-items: center; justify-content: center;
          color: white; flex-shrink: 0;
        }
        .typing-bubble {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          border-bottom-left-radius: 4px;
          padding: 0.75rem 1rem;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #3b82f6;
          display: inline-block;
          animation: typing-bounce 1s ease-in-out infinite;
          opacity: 0.6;
        }
        @keyframes typing-bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40% { transform: translateY(-5px); opacity: 1; }
        }
      `})]})}function lt(e,t){return function(){return e.apply(t,arguments)}}const{toString:rn}=Object.prototype,{getPrototypeOf:Pe}=Object,{iterator:me,toStringTag:dt}=Symbol,ge=(e=>t=>{const n=rn.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),F=e=>(e=e.toLowerCase(),t=>ge(t)===e),be=e=>t=>typeof t===e,{isArray:Z}=Array,Y=be("undefined");function te(e){return e!==null&&!Y(e)&&e.constructor!==null&&!Y(e.constructor)&&L(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ut=F("ArrayBuffer");function on(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ut(e.buffer),t}const an=be("string"),L=be("function"),ft=be("number"),ne=e=>e!==null&&typeof e=="object",cn=e=>e===!0||e===!1,ue=e=>{if(ge(e)!=="object")return!1;const t=Pe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(dt in e)&&!(me in e)},ln=e=>{if(!ne(e)||te(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},dn=F("Date"),un=F("File"),fn=e=>!!(e&&typeof e.uri<"u"),pn=e=>e&&typeof e.getParts<"u",hn=F("Blob"),mn=F("FileList"),gn=e=>ne(e)&&L(e.pipe);function bn(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const qe=bn(),He=typeof qe.FormData<"u"?qe.FormData:void 0,xn=e=>{let t;return e&&(He&&e instanceof He||L(e.append)&&((t=ge(e))==="formdata"||t==="object"&&L(e.toString)&&e.toString()==="[object FormData]"))},yn=F("URLSearchParams"),[wn,jn,vn,Nn]=["ReadableStream","Request","Response","Headers"].map(F),Sn=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function se(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let s,r;if(typeof e!="object"&&(e=[e]),Z(e))for(s=0,r=e.length;s<r;s++)t.call(null,e[s],s,e);else{if(te(e))return;const o=n?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;let c;for(s=0;s<a;s++)c=o[s],t.call(null,e[c],c,e)}}function pt(e,t){if(te(e))return null;t=t.toLowerCase();const n=Object.keys(e);let s=n.length,r;for(;s-- >0;)if(r=n[s],t===r.toLowerCase())return r;return null}const $=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ht=e=>!Y(e)&&e!==$;function Ae(){const{caseless:e,skipUndefined:t}=ht(this)&&this||{},n={},s=(r,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const a=e&&pt(n,o)||o;ue(n[a])&&ue(r)?n[a]=Ae(n[a],r):ue(r)?n[a]=Ae({},r):Z(r)?n[a]=r.slice():(!t||!Y(r))&&(n[a]=r)};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&se(arguments[r],s);return n}const En=(e,t,n,{allOwnKeys:s}={})=>(se(t,(r,o)=>{n&&L(r)?Object.defineProperty(e,o,{value:lt(r,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,o,{value:r,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:s}),e),kn=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Rn=(e,t,n,s)=>{e.prototype=Object.create(t.prototype,s),Object.defineProperty(e.prototype,"constructor",{value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},An=(e,t,n,s)=>{let r,o,a;const c={};if(t=t||{},e==null)return t;do{for(r=Object.getOwnPropertyNames(e),o=r.length;o-- >0;)a=r[o],(!s||s(a,e,t))&&!c[a]&&(t[a]=e[a],c[a]=!0);e=n!==!1&&Pe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Tn=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const s=e.indexOf(t,n);return s!==-1&&s===n},On=e=>{if(!e)return null;if(Z(e))return e;let t=e.length;if(!ft(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Cn=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Pe(Uint8Array)),Pn=(e,t)=>{const s=(e&&e[me]).call(e);let r;for(;(r=s.next())&&!r.done;){const o=r.value;t.call(e,o[0],o[1])}},Ln=(e,t)=>{let n;const s=[];for(;(n=e.exec(t))!==null;)s.push(n);return s},_n=F("HTMLFormElement"),Dn=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,s,r){return s.toUpperCase()+r}),$e=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),In=F("RegExp"),mt=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),s={};se(n,(r,o)=>{let a;(a=t(r,o,e))!==!1&&(s[o]=a||r)}),Object.defineProperties(e,s)},Mn=e=>{mt(e,(t,n)=>{if(L(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const s=e[n];if(L(s)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Fn=(e,t)=>{const n={},s=r=>{r.forEach(o=>{n[o]=!0})};return Z(e)?s(e):s(String(e).split(t)),n},Un=()=>{},Bn=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function zn(e){return!!(e&&L(e.append)&&e[dt]==="FormData"&&e[me])}const qn=e=>{const t=new Array(10),n=(s,r)=>{if(ne(s)){if(t.indexOf(s)>=0)return;if(te(s))return s;if(!("toJSON"in s)){t[r]=s;const o=Z(s)?[]:{};return se(s,(a,c)=>{const f=n(a,r+1);!Y(f)&&(o[c]=f)}),t[r]=void 0,o}}return s};return n(e,0)},Hn=F("AsyncFunction"),$n=e=>e&&(ne(e)||L(e))&&L(e.then)&&L(e.catch),gt=((e,t)=>e?setImmediate:t?((n,s)=>($.addEventListener("message",({source:r,data:o})=>{r===$&&o===n&&s.length&&s.shift()()},!1),r=>{s.push(r),$.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",L($.postMessage)),Vn=typeof queueMicrotask<"u"?queueMicrotask.bind($):typeof process<"u"&&process.nextTick||gt,Wn=e=>e!=null&&L(e[me]),l={isArray:Z,isArrayBuffer:ut,isBuffer:te,isFormData:xn,isArrayBufferView:on,isString:an,isNumber:ft,isBoolean:cn,isObject:ne,isPlainObject:ue,isEmptyObject:ln,isReadableStream:wn,isRequest:jn,isResponse:vn,isHeaders:Nn,isUndefined:Y,isDate:dn,isFile:un,isReactNativeBlob:fn,isReactNative:pn,isBlob:hn,isRegExp:In,isFunction:L,isStream:gn,isURLSearchParams:yn,isTypedArray:Cn,isFileList:mn,forEach:se,merge:Ae,extend:En,trim:Sn,stripBOM:kn,inherits:Rn,toFlatObject:An,kindOf:ge,kindOfTest:F,endsWith:Tn,toArray:On,forEachEntry:Pn,matchAll:Ln,isHTMLForm:_n,hasOwnProperty:$e,hasOwnProp:$e,reduceDescriptors:mt,freezeMethods:Mn,toObjectSet:Fn,toCamelCase:Dn,noop:Un,toFiniteNumber:Bn,findKey:pt,global:$,isContextDefined:ht,isSpecCompliantForm:zn,toJSONObject:qn,isAsyncFn:Hn,isThenable:$n,setImmediate:gt,asap:Vn,isIterable:Wn};let x=class bt extends Error{static from(t,n,s,r,o,a){const c=new bt(t.message,n||t.code,s,r,o);return c.cause=t,c.name=t.name,t.status!=null&&c.status==null&&(c.status=t.status),a&&Object.assign(c,a),c}constructor(t,n,s,r,o){super(t),Object.defineProperty(this,"message",{value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),s&&(this.config=s),r&&(this.request=r),o&&(this.response=o,this.status=o.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:l.toJSONObject(this.config),code:this.code,status:this.status}}};x.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";x.ERR_BAD_OPTION="ERR_BAD_OPTION";x.ECONNABORTED="ECONNABORTED";x.ETIMEDOUT="ETIMEDOUT";x.ERR_NETWORK="ERR_NETWORK";x.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";x.ERR_DEPRECATED="ERR_DEPRECATED";x.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";x.ERR_BAD_REQUEST="ERR_BAD_REQUEST";x.ERR_CANCELED="ERR_CANCELED";x.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";x.ERR_INVALID_URL="ERR_INVALID_URL";const Jn=null;function Te(e){return l.isPlainObject(e)||l.isArray(e)}function xt(e){return l.endsWith(e,"[]")?e.slice(0,-2):e}function ve(e,t,n){return e?e.concat(t).map(function(r,o){return r=xt(r),!n&&o?"["+r+"]":r}).join(n?".":""):t}function Kn(e){return l.isArray(e)&&!e.some(Te)}const Gn=l.toFlatObject(l,{},null,function(t){return/^is[A-Z]/.test(t)});function xe(e,t,n){if(!l.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=l.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(g,m){return!l.isUndefined(m[g])});const s=n.metaTokens,r=n.visitor||d,o=n.dots,a=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&l.isSpecCompliantForm(t);if(!l.isFunction(r))throw new TypeError("visitor must be a function");function u(p){if(p===null)return"";if(l.isDate(p))return p.toISOString();if(l.isBoolean(p))return p.toString();if(!f&&l.isBlob(p))throw new x("Blob is not supported. Use a Buffer instead.");return l.isArrayBuffer(p)||l.isTypedArray(p)?f&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function d(p,g,m){let v=p;if(l.isReactNative(t)&&l.isReactNativeBlob(p))return t.append(ve(m,g,o),u(p)),!1;if(p&&!m&&typeof p=="object"){if(l.endsWith(g,"{}"))g=s?g:g.slice(0,-2),p=JSON.stringify(p);else if(l.isArray(p)&&Kn(p)||(l.isFileList(p)||l.endsWith(g,"[]"))&&(v=l.toArray(p)))return g=xt(g),v.forEach(function(E,O){!(l.isUndefined(E)||E===null)&&t.append(a===!0?ve([g],O,o):a===null?g:g+"[]",u(E))}),!1}return Te(p)?!0:(t.append(ve(m,g,o),u(p)),!1)}const h=[],y=Object.assign(Gn,{defaultVisitor:d,convertValue:u,isVisitable:Te});function j(p,g){if(!l.isUndefined(p)){if(h.indexOf(p)!==-1)throw Error("Circular reference detected in "+g.join("."));h.push(p),l.forEach(p,function(v,R){(!(l.isUndefined(v)||v===null)&&r.call(t,v,l.isString(R)?R.trim():R,g,y))===!0&&j(v,g?g.concat(R):[R])}),h.pop()}}if(!l.isObject(e))throw new TypeError("data must be an object");return j(e),t}function Ve(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(s){return t[s]})}function Le(e,t){this._pairs=[],e&&xe(e,this,t)}const yt=Le.prototype;yt.append=function(t,n){this._pairs.push([t,n])};yt.toString=function(t){const n=t?function(s){return t.call(this,s,Ve)}:Ve;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function Xn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function wt(e,t,n){if(!t)return e;const s=n&&n.encode||Xn,r=l.isFunction(n)?{serialize:n}:n,o=r&&r.serialize;let a;if(o?a=o(t,r):a=l.isURLSearchParams(t)?t.toString():new Le(t,r).toString(s),a){const c=e.indexOf("#");c!==-1&&(e=e.slice(0,c)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}class We{constructor(){this.handlers=[]}use(t,n,s){return this.handlers.push({fulfilled:t,rejected:n,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){l.forEach(this.handlers,function(s){s!==null&&t(s)})}}const _e={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Yn=typeof URLSearchParams<"u"?URLSearchParams:Le,Zn=typeof FormData<"u"?FormData:null,Qn=typeof Blob<"u"?Blob:null,es={isBrowser:!0,classes:{URLSearchParams:Yn,FormData:Zn,Blob:Qn},protocols:["http","https","file","blob","url","data"]},De=typeof window<"u"&&typeof document<"u",Oe=typeof navigator=="object"&&navigator||void 0,ts=De&&(!Oe||["ReactNative","NativeScript","NS"].indexOf(Oe.product)<0),ns=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",ss=De&&window.location.href||"http://localhost",rs=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:De,hasStandardBrowserEnv:ts,hasStandardBrowserWebWorkerEnv:ns,navigator:Oe,origin:ss},Symbol.toStringTag,{value:"Module"})),C={...rs,...es};function is(e,t){return xe(e,new C.classes.URLSearchParams,{visitor:function(n,s,r,o){return C.isNode&&l.isBuffer(n)?(this.append(s,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)},...t})}function os(e){return l.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function as(e){const t={},n=Object.keys(e);let s;const r=n.length;let o;for(s=0;s<r;s++)o=n[s],t[o]=e[o];return t}function jt(e){function t(n,s,r,o){let a=n[o++];if(a==="__proto__")return!0;const c=Number.isFinite(+a),f=o>=n.length;return a=!a&&l.isArray(r)?r.length:a,f?(l.hasOwnProp(r,a)?r[a]=[r[a],s]:r[a]=s,!c):((!r[a]||!l.isObject(r[a]))&&(r[a]=[]),t(n,s,r[a],o)&&l.isArray(r[a])&&(r[a]=as(r[a])),!c)}if(l.isFormData(e)&&l.isFunction(e.entries)){const n={};return l.forEachEntry(e,(s,r)=>{t(os(s),r,n,0)}),n}return null}function cs(e,t,n){if(l.isString(e))try{return(t||JSON.parse)(e),l.trim(e)}catch(s){if(s.name!=="SyntaxError")throw s}return(n||JSON.stringify)(e)}const re={transitional:_e,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const s=n.getContentType()||"",r=s.indexOf("application/json")>-1,o=l.isObject(t);if(o&&l.isHTMLForm(t)&&(t=new FormData(t)),l.isFormData(t))return r?JSON.stringify(jt(t)):t;if(l.isArrayBuffer(t)||l.isBuffer(t)||l.isStream(t)||l.isFile(t)||l.isBlob(t)||l.isReadableStream(t))return t;if(l.isArrayBufferView(t))return t.buffer;if(l.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(s.indexOf("application/x-www-form-urlencoded")>-1)return is(t,this.formSerializer).toString();if((c=l.isFileList(t))||s.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return xe(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||r?(n.setContentType("application/json",!1),cs(t)):t}],transformResponse:[function(t){const n=this.transitional||re.transitional,s=n&&n.forcedJSONParsing,r=this.responseType==="json";if(l.isResponse(t)||l.isReadableStream(t))return t;if(t&&l.isString(t)&&(s&&!this.responseType||r)){const a=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(t,this.parseReviver)}catch(c){if(a)throw c.name==="SyntaxError"?x.from(c,x.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:C.classes.FormData,Blob:C.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};l.forEach(["delete","get","head","post","put","patch"],e=>{re.headers[e]={}});const ls=l.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ds=e=>{const t={};let n,s,r;return e&&e.split(`
`).forEach(function(a){r=a.indexOf(":"),n=a.substring(0,r).trim().toLowerCase(),s=a.substring(r+1).trim(),!(!n||t[n]&&ls[n])&&(n==="set-cookie"?t[n]?t[n].push(s):t[n]=[s]:t[n]=t[n]?t[n]+", "+s:s)}),t},Je=Symbol("internals");function ee(e){return e&&String(e).trim().toLowerCase()}function fe(e){return e===!1||e==null?e:l.isArray(e)?e.map(fe):String(e)}function us(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=n.exec(e);)t[s[1]]=s[2];return t}const fs=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ne(e,t,n,s,r){if(l.isFunction(s))return s.call(this,t,n);if(r&&(t=n),!!l.isString(t)){if(l.isString(s))return t.indexOf(s)!==-1;if(l.isRegExp(s))return s.test(t)}}function ps(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,s)=>n.toUpperCase()+s)}function hs(e,t){const n=l.toCamelCase(" "+t);["get","set","has"].forEach(s=>{Object.defineProperty(e,s+n,{value:function(r,o,a){return this[s].call(this,t,r,o,a)},configurable:!0})})}let _=class{constructor(t){t&&this.set(t)}set(t,n,s){const r=this;function o(c,f,u){const d=ee(f);if(!d)throw new Error("header name must be a non-empty string");const h=l.findKey(r,d);(!h||r[h]===void 0||u===!0||u===void 0&&r[h]!==!1)&&(r[h||f]=fe(c))}const a=(c,f)=>l.forEach(c,(u,d)=>o(u,d,f));if(l.isPlainObject(t)||t instanceof this.constructor)a(t,n);else if(l.isString(t)&&(t=t.trim())&&!fs(t))a(ds(t),n);else if(l.isObject(t)&&l.isIterable(t)){let c={},f,u;for(const d of t){if(!l.isArray(d))throw TypeError("Object iterator must return a key-value pair");c[u=d[0]]=(f=c[u])?l.isArray(f)?[...f,d[1]]:[f,d[1]]:d[1]}a(c,n)}else t!=null&&o(n,t,s);return this}get(t,n){if(t=ee(t),t){const s=l.findKey(this,t);if(s){const r=this[s];if(!n)return r;if(n===!0)return us(r);if(l.isFunction(n))return n.call(this,r,s);if(l.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=ee(t),t){const s=l.findKey(this,t);return!!(s&&this[s]!==void 0&&(!n||Ne(this,this[s],s,n)))}return!1}delete(t,n){const s=this;let r=!1;function o(a){if(a=ee(a),a){const c=l.findKey(s,a);c&&(!n||Ne(s,s[c],c,n))&&(delete s[c],r=!0)}}return l.isArray(t)?t.forEach(o):o(t),r}clear(t){const n=Object.keys(this);let s=n.length,r=!1;for(;s--;){const o=n[s];(!t||Ne(this,this[o],o,t,!0))&&(delete this[o],r=!0)}return r}normalize(t){const n=this,s={};return l.forEach(this,(r,o)=>{const a=l.findKey(s,o);if(a){n[a]=fe(r),delete n[o];return}const c=t?ps(o):String(o).trim();c!==o&&delete n[o],n[c]=fe(r),s[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return l.forEach(this,(s,r)=>{s!=null&&s!==!1&&(n[r]=t&&l.isArray(s)?s.join(", "):s)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const s=new this(t);return n.forEach(r=>s.set(r)),s}static accessor(t){const s=(this[Je]=this[Je]={accessors:{}}).accessors,r=this.prototype;function o(a){const c=ee(a);s[c]||(hs(r,a),s[c]=!0)}return l.isArray(t)?t.forEach(o):o(t),this}};_.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);l.reduceDescriptors(_.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(s){this[n]=s}}});l.freezeMethods(_);function Se(e,t){const n=this||re,s=t||n,r=_.from(s.headers);let o=s.data;return l.forEach(e,function(c){o=c.call(n,o,r.normalize(),t?t.status:void 0)}),r.normalize(),o}function vt(e){return!!(e&&e.__CANCEL__)}let ie=class extends x{constructor(t,n,s){super(t??"canceled",x.ERR_CANCELED,n,s),this.name="CanceledError",this.__CANCEL__=!0}};function Nt(e,t,n){const s=n.config.validateStatus;!n.status||!s||s(n.status)?e(n):t(new x("Request failed with status code "+n.status,[x.ERR_BAD_REQUEST,x.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function ms(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function gs(e,t){e=e||10;const n=new Array(e),s=new Array(e);let r=0,o=0,a;return t=t!==void 0?t:1e3,function(f){const u=Date.now(),d=s[o];a||(a=u),n[r]=f,s[r]=u;let h=o,y=0;for(;h!==r;)y+=n[h++],h=h%e;if(r=(r+1)%e,r===o&&(o=(o+1)%e),u-a<t)return;const j=d&&u-d;return j?Math.round(y*1e3/j):void 0}}function bs(e,t){let n=0,s=1e3/t,r,o;const a=(u,d=Date.now())=>{n=d,r=null,o&&(clearTimeout(o),o=null),e(...u)};return[(...u)=>{const d=Date.now(),h=d-n;h>=s?a(u,d):(r=u,o||(o=setTimeout(()=>{o=null,a(r)},s-h)))},()=>r&&a(r)]}const he=(e,t,n=3)=>{let s=0;const r=gs(50,250);return bs(o=>{const a=o.loaded,c=o.lengthComputable?o.total:void 0,f=a-s,u=r(f),d=a<=c;s=a;const h={loaded:a,total:c,progress:c?a/c:void 0,bytes:f,rate:u||void 0,estimated:u&&c&&d?(c-a)/u:void 0,event:o,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(h)},n)},Ke=(e,t)=>{const n=e!=null;return[s=>t[0]({lengthComputable:n,total:e,loaded:s}),t[1]]},Ge=e=>(...t)=>l.asap(()=>e(...t)),xs=C.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,C.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(C.origin),C.navigator&&/(msie|trident)/i.test(C.navigator.userAgent)):()=>!0,ys=C.hasStandardBrowserEnv?{write(e,t,n,s,r,o,a){if(typeof document>"u")return;const c=[`${e}=${encodeURIComponent(t)}`];l.isNumber(n)&&c.push(`expires=${new Date(n).toUTCString()}`),l.isString(s)&&c.push(`path=${s}`),l.isString(r)&&c.push(`domain=${r}`),o===!0&&c.push("secure"),l.isString(a)&&c.push(`SameSite=${a}`),document.cookie=c.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function ws(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function js(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function St(e,t,n){let s=!ws(t);return e&&(s||n==!1)?js(e,t):t}const Xe=e=>e instanceof _?{...e}:e;function W(e,t){t=t||{};const n={};function s(u,d,h,y){return l.isPlainObject(u)&&l.isPlainObject(d)?l.merge.call({caseless:y},u,d):l.isPlainObject(d)?l.merge({},d):l.isArray(d)?d.slice():d}function r(u,d,h,y){if(l.isUndefined(d)){if(!l.isUndefined(u))return s(void 0,u,h,y)}else return s(u,d,h,y)}function o(u,d){if(!l.isUndefined(d))return s(void 0,d)}function a(u,d){if(l.isUndefined(d)){if(!l.isUndefined(u))return s(void 0,u)}else return s(void 0,d)}function c(u,d,h){if(h in t)return s(u,d);if(h in e)return s(void 0,u)}const f={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c,headers:(u,d,h)=>r(Xe(u),Xe(d),h,!0)};return l.forEach(Object.keys({...e,...t}),function(d){if(d==="__proto__"||d==="constructor"||d==="prototype")return;const h=l.hasOwnProp(f,d)?f[d]:r,y=h(e[d],t[d],d);l.isUndefined(y)&&h!==c||(n[d]=y)}),n}const Et=e=>{const t=W({},e);let{data:n,withXSRFToken:s,xsrfHeaderName:r,xsrfCookieName:o,headers:a,auth:c}=t;if(t.headers=a=_.from(a),t.url=wt(St(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),c&&a.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),l.isFormData(n)){if(C.hasStandardBrowserEnv||C.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(l.isFunction(n.getHeaders)){const f=n.getHeaders(),u=["content-type","content-length"];Object.entries(f).forEach(([d,h])=>{u.includes(d.toLowerCase())&&a.set(d,h)})}}if(C.hasStandardBrowserEnv&&(s&&l.isFunction(s)&&(s=s(t)),s||s!==!1&&xs(t.url))){const f=r&&o&&ys.read(o);f&&a.set(r,f)}return t},vs=typeof XMLHttpRequest<"u",Ns=vs&&function(e){return new Promise(function(n,s){const r=Et(e);let o=r.data;const a=_.from(r.headers).normalize();let{responseType:c,onUploadProgress:f,onDownloadProgress:u}=r,d,h,y,j,p;function g(){j&&j(),p&&p(),r.cancelToken&&r.cancelToken.unsubscribe(d),r.signal&&r.signal.removeEventListener("abort",d)}let m=new XMLHttpRequest;m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout;function v(){if(!m)return;const E=_.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),P={data:!c||c==="text"||c==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:E,config:e,request:m};Nt(function(N){n(N),g()},function(N){s(N),g()},P),m=null}"onloadend"in m?m.onloadend=v:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(v)},m.onabort=function(){m&&(s(new x("Request aborted",x.ECONNABORTED,e,m)),m=null)},m.onerror=function(O){const P=O&&O.message?O.message:"Network Error",M=new x(P,x.ERR_NETWORK,e,m);M.event=O||null,s(M),m=null},m.ontimeout=function(){let O=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const P=r.transitional||_e;r.timeoutErrorMessage&&(O=r.timeoutErrorMessage),s(new x(O,P.clarifyTimeoutError?x.ETIMEDOUT:x.ECONNABORTED,e,m)),m=null},o===void 0&&a.setContentType(null),"setRequestHeader"in m&&l.forEach(a.toJSON(),function(O,P){m.setRequestHeader(P,O)}),l.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),c&&c!=="json"&&(m.responseType=r.responseType),u&&([y,p]=he(u,!0),m.addEventListener("progress",y)),f&&m.upload&&([h,j]=he(f),m.upload.addEventListener("progress",h),m.upload.addEventListener("loadend",j)),(r.cancelToken||r.signal)&&(d=E=>{m&&(s(!E||E.type?new ie(null,e,m):E),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(d),r.signal&&(r.signal.aborted?d():r.signal.addEventListener("abort",d)));const R=ms(r.url);if(R&&C.protocols.indexOf(R)===-1){s(new x("Unsupported protocol "+R+":",x.ERR_BAD_REQUEST,e));return}m.send(o||null)})},Ss=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let s=new AbortController,r;const o=function(u){if(!r){r=!0,c();const d=u instanceof Error?u:this.reason;s.abort(d instanceof x?d:new ie(d instanceof Error?d.message:d))}};let a=t&&setTimeout(()=>{a=null,o(new x(`timeout of ${t}ms exceeded`,x.ETIMEDOUT))},t);const c=()=>{e&&(a&&clearTimeout(a),a=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(o):u.removeEventListener("abort",o)}),e=null)};e.forEach(u=>u.addEventListener("abort",o));const{signal:f}=s;return f.unsubscribe=()=>l.asap(c),f}},Es=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let s=0,r;for(;s<n;)r=s+t,yield e.slice(s,r),s=r},ks=async function*(e,t){for await(const n of Rs(e))yield*Es(n,t)},Rs=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:s}=await t.read();if(n)break;yield s}}finally{await t.cancel()}},Ye=(e,t,n,s)=>{const r=ks(e,t);let o=0,a,c=f=>{a||(a=!0,s&&s(f))};return new ReadableStream({async pull(f){try{const{done:u,value:d}=await r.next();if(u){c(),f.close();return}let h=d.byteLength;if(n){let y=o+=h;n(y)}f.enqueue(new Uint8Array(d))}catch(u){throw c(u),u}},cancel(f){return c(f),r.return()}},{highWaterMark:2})},Ze=64*1024,{isFunction:de}=l,As=(({Request:e,Response:t})=>({Request:e,Response:t}))(l.global),{ReadableStream:Qe,TextEncoder:et}=l.global,tt=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Ts=e=>{e=l.merge.call({skipUndefined:!0},As,e);const{fetch:t,Request:n,Response:s}=e,r=t?de(t):typeof fetch=="function",o=de(n),a=de(s);if(!r)return!1;const c=r&&de(Qe),f=r&&(typeof et=="function"?(p=>g=>p.encode(g))(new et):async p=>new Uint8Array(await new n(p).arrayBuffer())),u=o&&c&&tt(()=>{let p=!1;const g=new n(C.origin,{body:new Qe,method:"POST",get duplex(){return p=!0,"half"}}).headers.has("Content-Type");return p&&!g}),d=a&&c&&tt(()=>l.isReadableStream(new s("").body)),h={stream:d&&(p=>p.body)};r&&["text","arrayBuffer","blob","formData","stream"].forEach(p=>{!h[p]&&(h[p]=(g,m)=>{let v=g&&g[p];if(v)return v.call(g);throw new x(`Response type '${p}' is not supported`,x.ERR_NOT_SUPPORT,m)})});const y=async p=>{if(p==null)return 0;if(l.isBlob(p))return p.size;if(l.isSpecCompliantForm(p))return(await new n(C.origin,{method:"POST",body:p}).arrayBuffer()).byteLength;if(l.isArrayBufferView(p)||l.isArrayBuffer(p))return p.byteLength;if(l.isURLSearchParams(p)&&(p=p+""),l.isString(p))return(await f(p)).byteLength},j=async(p,g)=>{const m=l.toFiniteNumber(p.getContentLength());return m??y(g)};return async p=>{let{url:g,method:m,data:v,signal:R,cancelToken:E,timeout:O,onDownloadProgress:P,onUploadProgress:M,responseType:N,headers:Q,withCredentials:H="same-origin",fetchOptions:J}=Et(p),oe=t||fetch;N=N?(N+"").toLowerCase():"text";let z=Ss([R,E&&E.toAbortSignal()],O),w=null;const k=z&&z.unsubscribe&&(()=>{z.unsubscribe()});let K;try{if(M&&u&&m!=="get"&&m!=="head"&&(K=await j(Q,v))!==0){let q=new n(g,{method:"POST",body:v,duplex:"half"}),G;if(l.isFormData(v)&&(G=q.headers.get("content-type"))&&Q.setContentType(G),q.body){const[we,ce]=Ke(K,he(Ge(M)));v=Ye(q.body,Ze,we,ce)}}l.isString(H)||(H=H?"include":"omit");const A=o&&"credentials"in n.prototype,U={...J,signal:z,method:m.toUpperCase(),headers:Q.normalize().toJSON(),body:v,duplex:"half",credentials:A?H:void 0};w=o&&new n(g,U);let B=await(o?oe(w,J):oe(g,U));const ae=d&&(N==="stream"||N==="response");if(d&&(P||ae&&k)){const q={};["status","statusText","headers"].forEach(Fe=>{q[Fe]=B[Fe]});const G=l.toFiniteNumber(B.headers.get("content-length")),[we,ce]=P&&Ke(G,he(Ge(P),!0))||[];B=new s(Ye(B.body,Ze,we,()=>{ce&&ce(),k&&k()}),q)}N=N||"text";let Ct=await h[l.findKey(h,N)||"text"](B,p);return!ae&&k&&k(),await new Promise((q,G)=>{Nt(q,G,{data:Ct,headers:_.from(B.headers),status:B.status,statusText:B.statusText,config:p,request:w})})}catch(A){throw k&&k(),A&&A.name==="TypeError"&&/Load failed|fetch/i.test(A.message)?Object.assign(new x("Network Error",x.ERR_NETWORK,p,w,A&&A.response),{cause:A.cause||A}):x.from(A,A&&A.code,p,w,A&&A.response)}}},Os=new Map,kt=e=>{let t=e&&e.env||{};const{fetch:n,Request:s,Response:r}=t,o=[s,r,n];let a=o.length,c=a,f,u,d=Os;for(;c--;)f=o[c],u=d.get(f),u===void 0&&d.set(f,u=c?new Map:Ts(t)),d=u;return u};kt();const Ie={http:Jn,xhr:Ns,fetch:{get:kt}};l.forEach(Ie,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const nt=e=>`- ${e}`,Cs=e=>l.isFunction(e)||e===null||e===!1;function Ps(e,t){e=l.isArray(e)?e:[e];const{length:n}=e;let s,r;const o={};for(let a=0;a<n;a++){s=e[a];let c;if(r=s,!Cs(s)&&(r=Ie[(c=String(s)).toLowerCase()],r===void 0))throw new x(`Unknown adapter '${c}'`);if(r&&(l.isFunction(r)||(r=r.get(t))))break;o[c||"#"+a]=r}if(!r){const a=Object.entries(o).map(([f,u])=>`adapter ${f} `+(u===!1?"is not supported by the environment":"is not available in the build"));let c=n?a.length>1?`since :
`+a.map(nt).join(`
`):" "+nt(a[0]):"as no adapter specified";throw new x("There is no suitable adapter to dispatch the request "+c,"ERR_NOT_SUPPORT")}return r}const Rt={getAdapter:Ps,adapters:Ie};function Ee(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ie(null,e)}function st(e){return Ee(e),e.headers=_.from(e.headers),e.data=Se.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Rt.getAdapter(e.adapter||re.adapter,e)(e).then(function(s){return Ee(e),s.data=Se.call(e,e.transformResponse,s),s.headers=_.from(s.headers),s},function(s){return vt(s)||(Ee(e),s&&s.response&&(s.response.data=Se.call(e,e.transformResponse,s.response),s.response.headers=_.from(s.response.headers))),Promise.reject(s)})}const At="1.13.6",ye={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ye[e]=function(s){return typeof s===e||"a"+(t<1?"n ":" ")+e}});const rt={};ye.transitional=function(t,n,s){function r(o,a){return"[Axios v"+At+"] Transitional option '"+o+"'"+a+(s?". "+s:"")}return(o,a,c)=>{if(t===!1)throw new x(r(a," has been removed"+(n?" in "+n:"")),x.ERR_DEPRECATED);return n&&!rt[a]&&(rt[a]=!0,console.warn(r(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,a,c):!0}};ye.spelling=function(t){return(n,s)=>(console.warn(`${s} is likely a misspelling of ${t}`),!0)};function Ls(e,t,n){if(typeof e!="object")throw new x("options must be an object",x.ERR_BAD_OPTION_VALUE);const s=Object.keys(e);let r=s.length;for(;r-- >0;){const o=s[r],a=t[o];if(a){const c=e[o],f=c===void 0||a(c,o,e);if(f!==!0)throw new x("option "+o+" must be "+f,x.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new x("Unknown option "+o,x.ERR_BAD_OPTION)}}const pe={assertOptions:Ls,validators:ye},I=pe.validators;let V=class{constructor(t){this.defaults=t||{},this.interceptors={request:new We,response:new We}}async request(t,n){try{return await this._request(t,n)}catch(s){if(s instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const o=r.stack?r.stack.replace(/^.+\n/,""):"";try{s.stack?o&&!String(s.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+o):s.stack=o}catch{}}throw s}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=W(this.defaults,n);const{transitional:s,paramsSerializer:r,headers:o}=n;s!==void 0&&pe.assertOptions(s,{silentJSONParsing:I.transitional(I.boolean),forcedJSONParsing:I.transitional(I.boolean),clarifyTimeoutError:I.transitional(I.boolean),legacyInterceptorReqResOrdering:I.transitional(I.boolean)},!1),r!=null&&(l.isFunction(r)?n.paramsSerializer={serialize:r}:pe.assertOptions(r,{encode:I.function,serialize:I.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),pe.assertOptions(n,{baseUrl:I.spelling("baseURL"),withXsrfToken:I.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=o&&l.merge(o.common,o[n.method]);o&&l.forEach(["delete","get","head","post","put","patch","common"],p=>{delete o[p]}),n.headers=_.concat(a,o);const c=[];let f=!0;this.interceptors.request.forEach(function(g){if(typeof g.runWhen=="function"&&g.runWhen(n)===!1)return;f=f&&g.synchronous;const m=n.transitional||_e;m&&m.legacyInterceptorReqResOrdering?c.unshift(g.fulfilled,g.rejected):c.push(g.fulfilled,g.rejected)});const u=[];this.interceptors.response.forEach(function(g){u.push(g.fulfilled,g.rejected)});let d,h=0,y;if(!f){const p=[st.bind(this),void 0];for(p.unshift(...c),p.push(...u),y=p.length,d=Promise.resolve(n);h<y;)d=d.then(p[h++],p[h++]);return d}y=c.length;let j=n;for(;h<y;){const p=c[h++],g=c[h++];try{j=p(j)}catch(m){g.call(this,m);break}}try{d=st.call(this,j)}catch(p){return Promise.reject(p)}for(h=0,y=u.length;h<y;)d=d.then(u[h++],u[h++]);return d}getUri(t){t=W(this.defaults,t);const n=St(t.baseURL,t.url,t.allowAbsoluteUrls);return wt(n,t.params,t.paramsSerializer)}};l.forEach(["delete","get","head","options"],function(t){V.prototype[t]=function(n,s){return this.request(W(s||{},{method:t,url:n,data:(s||{}).data}))}});l.forEach(["post","put","patch"],function(t){function n(s){return function(o,a,c){return this.request(W(c||{},{method:t,headers:s?{"Content-Type":"multipart/form-data"}:{},url:o,data:a}))}}V.prototype[t]=n(),V.prototype[t+"Form"]=n(!0)});let _s=class Tt{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const s=this;this.promise.then(r=>{if(!s._listeners)return;let o=s._listeners.length;for(;o-- >0;)s._listeners[o](r);s._listeners=null}),this.promise.then=r=>{let o;const a=new Promise(c=>{s.subscribe(c),o=c}).then(r);return a.cancel=function(){s.unsubscribe(o)},a},t(function(o,a,c){s.reason||(s.reason=new ie(o,a,c),n(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=s=>{t.abort(s)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Tt(function(r){t=r}),cancel:t}}};function Ds(e){return function(n){return e.apply(null,n)}}function Is(e){return l.isObject(e)&&e.isAxiosError===!0}const Ce={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Ce).forEach(([e,t])=>{Ce[t]=e});function Ot(e){const t=new V(e),n=lt(V.prototype.request,t);return l.extend(n,V.prototype,t,{allOwnKeys:!0}),l.extend(n,t,null,{allOwnKeys:!0}),n.create=function(r){return Ot(W(e,r))},n}const S=Ot(re);S.Axios=V;S.CanceledError=ie;S.CancelToken=_s;S.isCancel=vt;S.VERSION=At;S.toFormData=xe;S.AxiosError=x;S.Cancel=S.CanceledError;S.all=function(t){return Promise.all(t)};S.spread=Ds;S.isAxiosError=Is;S.mergeConfig=W;S.AxiosHeaders=_;S.formToJSON=e=>jt(l.isHTMLForm(e)?new FormData(e):e);S.getAdapter=Rt.getAdapter;S.HttpStatusCode=Ce;S.default=S;const{Axios:cr,AxiosError:lr,CanceledError:dr,isCancel:ur,CancelToken:fr,VERSION:pr,all:hr,Cancel:mr,isAxiosError:gr,spread:br,toFormData:xr,AxiosHeaders:yr,HttpStatusCode:wr,formToJSON:jr,getAdapter:vr,mergeConfig:Nr}=S,Ms="http://localhost:8000",Me=S.create({baseURL:Ms,timeout:3e4,headers:{"Content-Type":"application/json"}});Me.interceptors.request.use(e=>e,e=>Promise.reject(e));Me.interceptors.response.use(e=>e,e=>{var n,s;if(e.code==="ECONNABORTED")throw new Error("Request timed out. Please try again.");if(!e.response)throw new Error("Cannot connect to the server. Please check your connection.");if(e.response.status===429)throw new Error("Too many messages. Please wait a moment and try again.");if(e.response.status===503)throw new Error("AI service is temporarily unavailable. Please try again later.");const t=((s=(n=e.response)==null?void 0:n.data)==null?void 0:s.detail)||"An unexpected error occurred.";throw new Error(t)});const Fs=async(e,t)=>(await Me.post("/api/chat",{message:e,session_id:t})).data,it="arnav_portfolio_session_id",Us=["Why should I hire Arnav?","Tell me about his AI projects","What's his tech stack?","Show me IntelliSearch project","What's his experience?"];function Bs(){let e=sessionStorage.getItem(it);return e||(e=Re().replace(/-/g,"").slice(0,32),sessionStorage.setItem(it,e)),e}const zs={id:"welcome",role:"assistant",response:{type:"text",content:"Hey! 👋 I'm Arnav's AI assistant. I know everything about his skills, projects, and experience. Ask me anything — from his tech stack to specific projects. What would you like to know?"},timestamp:Date.now()};function qs({floating:e,onClose:t}){const[n,s]=b.useState([zs]),[r,o]=b.useState(""),[a,c]=b.useState(!1),[f,u]=b.useState(null),[d]=b.useState(Bs),[h,y]=b.useState(!1),[j,p]=b.useState(!1),[g,m]=b.useState(!1),[v,R]=b.useState(!1),[E,O]=b.useState(!0),P=b.useRef(null),M=b.useRef(null),N=b.useRef(null);b.useEffect(()=>{var w;(w=P.current)==null||w.scrollIntoView({behavior:"smooth"})},[n,a]),b.useEffect(()=>{var w;h||(w=M.current)==null||w.focus()},[h]),b.useEffect(()=>{const w=window.SpeechRecognition||window.webkitSpeechRecognition;w&&(N.current=new w,N.current.continuous=!1,N.current.interimResults=!1,N.current.lang="en-US",N.current.onresult=k=>{const K=k.results[0][0].transcript;o(K),R(!1)},N.current.onerror=()=>R(!1),N.current.onend=()=>R(!1))},[]);const Q=b.useCallback(()=>{N.current&&(v?(N.current.stop(),R(!1)):(N.current.start(),R(!0)))},[v]),H=b.useCallback(w=>{if(!j||!window.speechSynthesis)return;window.speechSynthesis.cancel();const k=new SpeechSynthesisUtterance(w);k.rate=1,k.pitch=1,k.onstart=()=>m(!0),k.onend=()=>m(!1),window.speechSynthesis.speak(k)},[j]),J=b.useCallback(async w=>{var A;const k=(w||r).trim();if(!k||a)return;o(""),u(null),O(!1);const K={id:Re(),role:"user",response:{type:"text",content:k},timestamp:Date.now()};s(U=>[...U,K]),c(!0);try{const U=await Fs(k,d),B={id:Re(),role:"assistant",response:U.response,timestamp:Date.now()};s(ae=>[...ae,B]),U.response.type==="text"&&H(U.response.content)}catch(U){u(U.message||"Something went wrong. Please try again.")}finally{c(!1),(A=M.current)==null||A.focus()}},[r,a,d,H]),oe=w=>{w.key==="Enter"&&!w.shiftKey&&(w.preventDefault(),J())},z=e&&h;return i.jsxs(X.div,{className:`chat-window ${e?"chat-floating":"chat-fullscreen"} ${z?"chat-minimized":""}`,initial:e?{opacity:0,scale:.8,y:20}:{opacity:0},animate:e?z?{opacity:1,scale:.6,y:0}:{opacity:1,scale:1,y:0}:{opacity:1},exit:e?{opacity:0,scale:.8,y:20}:{opacity:0},transition:{type:"spring",stiffness:300,damping:30},children:[i.jsxs("div",{className:"chat-header",children:[i.jsxs("div",{className:"header-left",children:[i.jsxs("div",{className:"avatar",children:[i.jsx("span",{children:"AT"}),i.jsx("div",{className:"avatar-online"})]}),i.jsxs("div",{className:"header-info",children:[i.jsx("span",{className:"header-name",children:"Arnav's AI"}),i.jsx("span",{className:"header-status",children:a?"Thinking...":"Online"})]})]}),i.jsxs("div",{className:"header-actions",children:[i.jsx("button",{className:"header-btn",onClick:()=>p(!j),title:j?"Disable voice":"Enable voice",children:j?i.jsx(Gt,{size:16}):i.jsx(Xt,{size:16})}),e&&i.jsx("button",{className:"header-btn",onClick:()=>y(!h),children:h?i.jsx(Ht,{size:16}):i.jsx(Wt,{size:16})}),i.jsx("button",{className:"header-btn header-close",onClick:t,children:i.jsx(Yt,{size:16})})]})]}),!z&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"chat-messages",children:[i.jsx(Ue,{initial:!1,children:n.map(w=>i.jsx(en,{message:w},w.id))}),a&&i.jsx(sn,{}),i.jsx(Ue,{children:E&&n.length<=1&&!a&&i.jsx(X.div,{className:"suggestions",initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0},transition:{delay:.5},children:Us.map(w=>i.jsx("button",{className:"suggestion-pill",onClick:()=>J(w),children:w},w))})}),f&&i.jsxs(X.div,{className:"error-banner",initial:{opacity:0},animate:{opacity:1},children:["⚠️ ",f,i.jsx("button",{onClick:()=>u(null),className:"error-dismiss",children:"×"})]}),i.jsx("div",{ref:P})]}),i.jsxs("div",{className:"chat-input-area",children:[i.jsxs("div",{className:"input-wrapper",children:[i.jsx("textarea",{ref:M,className:"chat-input",placeholder:"Ask about Arnav's skills, projects, experience...",value:r,onChange:w=>o(w.target.value),onKeyDown:oe,rows:1,maxLength:2e3}),i.jsxs("div",{className:"input-actions",children:[(window.SpeechRecognition||window.webkitSpeechRecognition)&&i.jsx("button",{className:`input-btn ${v?"input-btn-active":""}`,onClick:Q,title:"Voice input",children:v?i.jsx($t,{size:17}):i.jsx(Vt,{size:17})}),i.jsx("button",{className:`input-btn send-btn ${r.trim()&&!a?"send-active":""}`,onClick:()=>J(),disabled:!r.trim()||a,children:i.jsx(Jt,{size:17})})]})]}),i.jsx("p",{className:"input-hint",children:"Enter to send · Shift+Enter for new line"})]})]}),i.jsx("style",{children:`
        :root {
          --bg: #050508;
          --surface: #0d0d15;
          --surface2: #13131f;
          --border: rgba(255,255,255,0.07);
          --accent: #3b82f6;
          --accent2: #8b5cf6;
          --text: #f0f0f8;
          --text2: #8888a0;
        }

        .chat-window {
          background: rgba(13,13,21,0.95);
          backdrop-filter: blur(20px);
          border: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          z-index: 200;
        }

        .chat-fullscreen {
          position: fixed;
          inset: 0;
          margin: auto;
          width: min(760px, 100vw);
          height: min(680px, 100vh);
          border-radius: 24px;
          box-shadow: 0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(59,130,246,0.1);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .chat-floating {
          position: fixed;
          bottom: 5.5rem;
          right: 1.5rem;
          width: 380px;
          height: 560px;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(59,130,246,0.1);
        }

        .chat-minimized {
          height: 64px !important;
        }

        .chat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.2rem;
          border-bottom: 1px solid var(--border);
          background: rgba(255,255,255,0.02);
          flex-shrink: 0;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .avatar {
          width: 38px; height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent), var(--accent2));
          display: flex; align-items: center; justify-content: center;
          font-family: 'Syne', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          color: white;
          position: relative;
          flex-shrink: 0;
        }

        .avatar-online {
          position: absolute; bottom: 1px; right: 1px;
          width: 9px; height: 9px;
          background: #10b981;
          border-radius: 50%;
          border: 2px solid var(--surface);
        }

        .header-info { display: flex; flex-direction: column; gap: 1px; }
        .header-name { font-weight: 600; font-size: 0.9rem; color: var(--text); font-family: 'Syne', sans-serif; }
        .header-status { font-size: 0.74rem; color: var(--text2); }

        .header-actions { display: flex; align-items: center; gap: 0.3rem; }

        .header-btn {
          background: transparent;
          border: 1px solid transparent;
          color: var(--text2);
          padding: 0.4rem;
          border-radius: 8px;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.15s;
        }
        .header-btn:hover { background: rgba(255,255,255,0.06); color: var(--text); border-color: var(--border); }
        .header-close:hover { color: #f87171; border-color: rgba(248,113,113,0.2); }

        /* Messages area */
        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          scroll-behavior: smooth;
        }

        .chat-messages::-webkit-scrollbar { width: 4px; }
        .chat-messages::-webkit-scrollbar-track { background: transparent; }
        .chat-messages::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }

        /* Suggestions */
        .suggestions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          padding: 0.5rem 0;
        }

        .suggestion-pill {
          background: rgba(59,130,246,0.08);
          border: 1px solid rgba(59,130,246,0.2);
          color: #93c5fd;
          padding: 0.4rem 0.9rem;
          border-radius: 100px;
          font-size: 0.8rem;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          transition: all 0.15s;
          white-space: nowrap;
        }

        .suggestion-pill:hover {
          background: rgba(59,130,246,0.15);
          border-color: rgba(59,130,246,0.4);
          color: #bfdbfe;
          transform: translateY(-1px);
        }

        /* Error */
        .error-banner {
          background: rgba(239,68,68,0.1);
          border: 1px solid rgba(239,68,68,0.2);
          color: #fca5a5;
          padding: 0.7rem 1rem;
          border-radius: 10px;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
        }

        .error-dismiss {
          background: none; border: none; color: #fca5a5;
          cursor: pointer; font-size: 1.1rem; line-height: 1;
        }

        /* Input */
        .chat-input-area {
          padding: 0.9rem 1.2rem 1rem;
          border-top: 1px solid var(--border);
          flex-shrink: 0;
        }

        .input-wrapper {
          display: flex;
          align-items: flex-end;
          gap: 0.5rem;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 0.6rem 0.6rem 0.6rem 1rem;
          transition: border-color 0.2s;
        }

        .input-wrapper:focus-within {
          border-color: rgba(59,130,246,0.4);
          box-shadow: 0 0 0 3px rgba(59,130,246,0.07);
        }

        .chat-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text);
          font-size: 0.9rem;
          font-family: 'DM Sans', sans-serif;
          resize: none;
          line-height: 1.5;
          max-height: 120px;
          overflow-y: auto;
        }

        .chat-input::placeholder { color: var(--text2); }

        .input-actions {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          flex-shrink: 0;
        }

        .input-btn {
          background: transparent;
          border: 1px solid transparent;
          color: var(--text2);
          padding: 0.45rem;
          border-radius: 8px;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.15s;
        }

        .input-btn:hover { background: rgba(255,255,255,0.06); color: var(--text); }
        .input-btn-active { color: #f87171 !important; background: rgba(248,113,113,0.1) !important; }

        .send-btn { opacity: 0.3; }
        .send-active {
          opacity: 1 !important;
          background: var(--accent) !important;
          color: white !important;
          border-color: transparent !important;
        }
        .send-active:hover { background: #2563eb !important; }

        .input-hint {
          font-size: 0.72rem;
          color: rgba(136,136,160,0.5);
          margin-top: 0.4rem;
          padding-left: 0.2rem;
        }

        @media (max-width: 480px) {
          .chat-fullscreen {
            width: 100vw !important;
            height: 100dvh !important;
            border-radius: 0 !important;
            inset: 0 !important;
            top: 0 !important; left: 0 !important;
            transform: none !important;
          }
          .chat-floating { width: calc(100vw - 1rem); right: 0.5rem; }
        }
      `})]})}function Hs(){const e=b.useRef(null),t=b.useRef(null),n=b.useRef(0),s=b.useRef(0),r=b.useRef(0),o=b.useRef(0);return b.useEffect(()=>{const a=e.current,c=t.current;if(!a||!c)return;const f=window.matchMedia("(hover: hover)").matches,u=window.innerWidth>768;if(!f||!u){a.style.display="none",c.style.display="none";return}a.style.opacity="1",c.style.opacity="1";const d=g=>{n.current=g.clientX,s.current=g.clientY,a.style.left=g.clientX+"px",a.style.top=g.clientY+"px"};document.addEventListener("mousemove",d);let h;const y=()=>{r.current+=(n.current-r.current)*.1,o.current+=(s.current-o.current)*.1,c.style.left=r.current+"px",c.style.top=o.current+"px",h=requestAnimationFrame(y)};y();const j=g=>{g.target.closest("a, button, [data-hover]")&&(a.classList.add("hover"),c.classList.add("hover"))},p=g=>{g.target.closest("a, button, [data-hover]")&&(a.classList.remove("hover"),c.classList.remove("hover"))};return document.addEventListener("mouseover",j),document.addEventListener("mouseout",p),()=>{document.removeEventListener("mousemove",d),document.removeEventListener("mouseover",j),document.removeEventListener("mouseout",p),cancelAnimationFrame(h)}},[]),i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"cursor",ref:e}),i.jsx("div",{className:"cursor-follower",ref:t}),i.jsx("div",{className:"bg-grid"}),i.jsx("div",{className:"bg-radial-glow"})]})}function $s(){const[e,t]=b.useState(!1),[n,s]=b.useState(!1),[r,o]=b.useState("home");b.useEffect(()=>{const f=()=>{t(window.scrollY>50);const u=document.querySelectorAll("section");let d="";u.forEach(h=>{window.pageYOffset>=h.offsetTop-200&&(d=h.id)}),o(d)};return window.addEventListener("scroll",f),()=>window.removeEventListener("scroll",f)},[]);const a=f=>{var u;(u=document.getElementById(f))==null||u.scrollIntoView({behavior:"smooth"}),s(!1)},c=[{id:"about",label:"About"},{id:"experience",label:"Experience"},{id:"projects",label:"Projects"},{id:"skills",label:"Skills"},{id:"services",label:"Certifications"}];return i.jsxs("nav",{className:`navbar ${e?"scrolled":""}`,children:[i.jsxs("div",{className:"nav-container",children:[i.jsxs("div",{className:"nav-logo",children:[i.jsx("div",{className:"logo-circle",children:"𝔸╥"}),i.jsx("span",{className:"logo-text",children:"Arnav Tomar"})]}),i.jsxs("div",{className:"nav-menu",children:[c.map(f=>i.jsx("a",{href:`#${f.id}`,className:`nav-link ${r===f.id?"active":""}`,onClick:u=>{u.preventDefault(),a(f.id)},children:f.label},f.id)),i.jsx("button",{className:"cta-button",onClick:()=>a("contact"),children:"Let's Connect"})]}),i.jsx("button",{className:"mobile-menu-btn",onClick:()=>s(f=>!f),children:i.jsx("i",{className:`fas fa-${n?"times":"bars"}`})})]}),i.jsxs("div",{className:`mobile-menu ${n?"active":""}`,children:[c.map(f=>i.jsx("a",{href:`#${f.id}`,className:"mobile-nav-link",onClick:u=>{u.preventDefault(),a(f.id)},children:f.label},f.id)),i.jsx("button",{className:"mobile-cta-button",onClick:()=>a("contact"),children:"Let's Connect"})]})]})}const ot=[{text:"Data Analyst",description:"Transforming data into actionable insights using Python, SQL, and visualization tools."},{text:"DSA & Problem Solving Enthusiast",description:"Sharpening logic and algorithms to write efficient, optimized solutions."},{text:"Power BI Developer",description:"Designing interactive dashboards and visual reports for data-driven decision-making."},{text:"Frontend Developer (Beginner)",description:"Building simple, functional web applications using HTML, CSS, JavaScript, and Node.js."},{text:"AI & ML Tools Enthusiast",description:"Exploring AI tools, crafting prompts, and integrating APIs for practical solutions."}];function Vs(){const[e,t]=b.useState(""),[n,s]=b.useState(""),[r,o]=b.useState(!1),[a,c]=b.useState(0),[f,u]=b.useState(!1);return b.useEffect(()=>{const d=ot[a];let h;return!f&&e===d.text?(s(d.description),o(!0),h=setTimeout(()=>u(!0),2e3)):f&&e===""?(u(!1),o(!1),c(y=>(y+1)%ot.length),h=setTimeout(()=>{},500)):f?h=setTimeout(()=>t(y=>y.slice(0,-1)),50):h=setTimeout(()=>t(d.text.slice(0,e.length+1)),100),()=>clearTimeout(h)},[e,f,a]),i.jsxs("section",{id:"home",className:"hero",children:[i.jsx("div",{className:"hero-background"}),i.jsxs("div",{className:"hero-content",children:[i.jsx("div",{className:"profile-image-container",children:i.jsx("img",{src:"/img/20250330_235455.jpg",alt:"Arnav Tomar",className:"profile-image"})}),i.jsxs("h1",{className:"hero-title",children:["Hi, I'm ",i.jsx("span",{className:"highlight",children:"Arnav Tomar"})]}),i.jsxs("div",{className:"typewriter-container",children:[i.jsx("div",{className:"typewriter-text",children:e}),i.jsx("div",{className:"typewriter-description",style:{opacity:r?1:0},children:n})]}),i.jsxs("div",{className:"hero-buttons",children:[i.jsxs("a",{href:"https://github.com/sea-of-codes",className:"hero-btn primary",target:"_blank",rel:"noreferrer",children:[i.jsx("i",{className:"fas fa-code"})," View My Work"]}),i.jsxs("a",{href:"https://drive.google.com/file/d/1uCP92keu6DWzv7F38emGGxBuhxJl-h4I/view?usp=sharing",className:"hero-btn secondary",target:"_blank",rel:"noreferrer",children:[i.jsx("i",{className:"fas fa-download"})," View Resume"]}),i.jsxs("a",{href:"#contact",className:"hero-btn tertiary",onClick:d=>{var h;d.preventDefault(),(h=document.getElementById("contact"))==null||h.scrollIntoView({behavior:"smooth"})},children:[i.jsx("i",{className:"fas fa-hand-sparkles"})," Say Hello 👋"]})]})]})]})}function Ws(){const e=b.useRef(null);return b.useEffect(()=>{var n;const t=new IntersectionObserver(s=>{s.forEach(r=>r.isIntersecting&&r.target.classList.add("fade-in-up"))},{threshold:.1});return(n=e.current)==null||n.querySelectorAll(".observe-me").forEach(s=>t.observe(s)),()=>t.disconnect()},[]),i.jsx("section",{id:"about",className:"about",ref:e,children:i.jsxs("div",{className:"container",children:[i.jsx("div",{className:"section-header observe-me",children:i.jsx("h2",{className:"section-title",children:"About Me"})}),i.jsxs("div",{className:"about-content",children:[i.jsxs("div",{className:"about-text observe-me",children:[i.jsx("p",{children:i.jsx("strong",{children:"👋 Hi, I'm Arnav Tomar — A Passionate Tech Explorer"})}),i.jsx("p",{children:"I'm a Computer Science undergraduate at SRMIST Delhi NCR, driven by a deep passion for building impactful solutions through technology. Whether it's analyzing real-world data, developing intelligent systems, or creating sleek backend logic, I thrive at the intersection of code and creativity."}),i.jsx("p",{children:"Currently exploring Data Science, AI/ML, and Software Engineering. I'm not just learning to code — I'm learning to solve problems that matter."})]}),i.jsxs("div",{className:"about-photo observe-me",children:[i.jsx("img",{src:"/img/photo1.png",alt:"Arnav Tomar",className:"photo front"}),i.jsx("img",{src:"/img/photo2.png",alt:"Arnav Tomar alternate",className:"photo back"})]})]}),i.jsx("div",{className:"stats-grid",children:[{number:"10+",label:"Projects"},{number:"1+",label:"Years"},{number:"85%",label:"Satisfaction"}].map(t=>i.jsxs("div",{className:"stat-item observe-me",children:[i.jsx("div",{className:"stat-number",children:t.number}),i.jsx("div",{className:"stat-label",children:t.label})]},t.label))})]})})}function Js(){const e=b.useRef(null);return b.useEffect(()=>{var n;const t=new IntersectionObserver(s=>{s.forEach(r=>r.isIntersecting&&r.target.classList.add("fade-in-up"))},{threshold:.1});return(n=e.current)==null||n.querySelectorAll(".observe-me").forEach(s=>t.observe(s)),()=>t.disconnect()},[]),i.jsx("section",{id:"experience",className:"experience",ref:e,children:i.jsxs("div",{className:"container",children:[i.jsx("div",{className:"section-header observe-me",children:i.jsx("h2",{className:"section-title",children:"Experience"})}),i.jsxs("div",{className:"timeline",children:[i.jsx("div",{className:"timeline-item observe-me",children:i.jsxs("div",{className:"timeline-content",children:[i.jsx("h3",{children:"Data Analyst Intern"}),i.jsx("h4",{children:"Ashna.AI"}),i.jsx("div",{className:"timeline-period",children:"April 7 – July 7, 2025"}),i.jsx("p",{children:"Working on real-world datasets to generate insights, build visual dashboards, and support data-driven decisions using Python, SQL, and data visualization tools."})]})}),i.jsx("div",{className:"timeline-item observe-me",children:i.jsxs("div",{className:"timeline-content",children:[i.jsx("h3",{children:"OpenAI NextWave Hackathon"}),i.jsx("h4",{children:"Project: Focus Plus"}),i.jsx("div",{className:"timeline-period",children:"September 2025"}),i.jsxs("p",{children:["Focus Plus is an AI-powered focus tracker built during a Hackathon by ",i.jsx("strong",{children:"Team Tech Catalysts"}),"."]}),i.jsxs("ul",{children:[i.jsxs("li",{children:["📊 ",i.jsx("strong",{children:"Focus Detection Dashboard"})," — Modern, responsive UI with real-time tracking."]}),i.jsx("li",{children:"✨ Real-time Face Detection, Attention Monitoring & Live Statistics."})]}),i.jsx("div",{className:"project-links",children:i.jsxs("a",{href:"https://github.com/sea-of-codes/Focus_plus",target:"_blank",rel:"noreferrer",className:"project-link",children:[i.jsx("i",{className:"fab fa-github"})," View Project"]})})]})}),i.jsx("div",{className:"timeline-item observe-me",children:i.jsxs("div",{className:"timeline-content",children:[i.jsx("h3",{children:"Genignite 24-Hour Hackathon"}),i.jsx("h4",{children:"Inderprastha Engineering College, Ghaziabad"}),i.jsx("div",{className:"timeline-period",children:"October 2025"}),i.jsxs("p",{children:["Participated in the Genignite 24-Hour Hackathon as part of ",i.jsx("strong",{children:"Team Tech Catalysts"}),", building a real-world tech solution under tight deadlines. Focused on collaboration, UI design, and efficient problem-solving throughout the event."]})]})})]})]})})}const Ks=[{title:"OTT Dashboard & Recommender",desc:"Interactive dashboard analyzing OTT trends and recommending shows using ML",tags:["Python","Pandas","Scikit-learn","Plotly","Matplotlib"],live:"https://github.com/sea-of-codes/OTT-Show-Recommender",code:"https://github.com/sea-of-codes/OTT-Show-Recommender",gradient:"gradient-blue"},{title:"Sentiment Analysis Model",desc:"Machine Learning model to classify customer reviews as Positive or Negative using Logistic Regression and NLP.",tags:["Python","Pandas","Scikit-learn","NLTK","Matplotlib"],live:"https://github.com/sea-of-codes/Sentiment_analysis",code:"https://github.com/sea-of-codes/Sentiment_analysis",gradient:"gradient-blue"},{title:"Fake News Detection",desc:"Detect fake or real news using Natural Language Processing (NLP) and Machine Learning. A complete end-to-end text classification project built in Python.",tags:["Python","Colab","Scikit-learn","NLP"],live:"https://github.com/sea-of-codes/Fake_News_Detection",code:"https://github.com/sea-of-codes/Fake_News_Detection",gradient:"gradient-pink"}];function Gs(){const e=b.useRef(null);b.useEffect(()=>{var s;const n=new IntersectionObserver(r=>{r.forEach(o=>o.isIntersecting&&o.target.classList.add("fade-in-up"))},{threshold:.1});return(s=e.current)==null||s.querySelectorAll(".observe-me").forEach(r=>n.observe(r)),()=>n.disconnect()},[]);const t=(n,s)=>{n.preventDefault();const r=n.currentTarget.querySelector("i");if(!r)return window.open(s,"_blank");const o=r.className;r.className="fas fa-spinner fa-spin",setTimeout(()=>{r.className=o,window.open(s,"_blank")},800)};return i.jsx("section",{id:"projects",className:"projects",ref:e,children:i.jsxs("div",{className:"container",children:[i.jsx("div",{className:"section-header observe-me",children:i.jsx("h2",{className:"section-title",children:"Projects"})}),i.jsx("div",{className:"projects-grid",children:Ks.map(n=>i.jsx("div",{className:`project-card ${n.gradient} observe-me`,children:i.jsxs("div",{className:"project-content",children:[i.jsx("h3",{children:n.title}),i.jsx("p",{children:n.desc}),i.jsx("div",{className:"tech-stack",children:n.tags.map(s=>i.jsx("span",{className:"tech-tag",children:s},s))}),i.jsxs("div",{className:"project-links",children:[i.jsxs("a",{href:n.live,className:"project-link",onClick:s=>t(s,n.live),children:[i.jsx("i",{className:"fas fa-external-link-alt"})," Live"]}),i.jsxs("a",{href:n.code,className:"project-link",onClick:s=>t(s,n.code),children:[i.jsx("i",{className:"fab fa-github"})," Code"]})]})]})},n.title))})]})})}const Xs=[{title:"Technical Skills",skills:[{label:"C++"},{label:"C"},{label:"Python",tooltip:`Pandas, NumPy,
Matplotlib, Seaborn, Scikit-learn`},{label:"HTML"},{label:"CSS"},{label:"Power BI"},{label:"Microsoft Office Suite"}]},{title:"Soft Skills",skills:[{label:"Problem Solving"},{label:"Adaptability"},{label:"Critical Thinking"},{label:"Time Management"},{label:"Team Work"},{label:"Communication"}]},{title:"Conceptual Skills",skills:[{label:"Data Analysis"},{label:"AutoCAD"},{label:"Data Cleaning & Processing"},{label:"Database Design"},{label:"OOP Principles"},{label:"Machine Learning Basics"}]}];function Ys(){const e=b.useRef(null);return b.useEffect(()=>{var n;const t=new IntersectionObserver(s=>{s.forEach(r=>r.isIntersecting&&r.target.classList.add("fade-in-up"))},{threshold:.1});return(n=e.current)==null||n.querySelectorAll(".observe-me").forEach(s=>t.observe(s)),()=>t.disconnect()},[]),i.jsx("section",{id:"skills",className:"skills",ref:e,children:i.jsxs("div",{className:"container",children:[i.jsx("div",{className:"section-header observe-me",children:i.jsx("h2",{className:"section-title",children:"Skills"})}),i.jsx("div",{className:"skills-grid",children:Xs.map(t=>i.jsxs("div",{className:"skill-category observe-me",children:[i.jsx("h3",{children:t.title}),i.jsx("div",{className:"skill-tags",children:t.skills.map(n=>i.jsxs("span",{className:`skill-tag ${n.tooltip?"python-skill":""}`,children:[n.label,n.tooltip&&i.jsx("span",{className:"tooltip",children:n.tooltip.split(`
`).map((s,r)=>i.jsxs("span",{children:[s,i.jsx("br",{})]},r))})]},n.label))})]},t.title))})]})})}const Zs=[{icon:"fa-certificate",img:"/img/Arnav Tomar_internship_Certificate.jpg",title:"Ashna AI Internship Completion",desc:"Completed internship focused on AI development and applied ML projects."},{icon:"fa-award",img:"/img/Openaihackathon.jpg",title:"OpenAI Hackathon Certification",desc:"Recognized for participating in OpenAI's NextWave Hackathon – Sep 2025."},{icon:"fa-database",img:"/img/eCertificate_Oracle.jpg",title:"Oracle Data Science Professional Certificate",desc:"Issued Oct 2025 — Demonstrated proficiency in data analysis and ML workflows."},{icon:"fa-chart-line",img:"/img/deloitte_analyist.jpg",title:"Deloitte Australia – Data Analytics Job Simulation",desc:"Forage Program — Completed Aug 2025 showcasing business data insights."},{icon:"fa-brain",img:"/img/Coursera_project1.jpg",title:"Python Case Study – Sentiment Analysis",desc:"Infosys Springboard | Completed Jun 2025 — Applied NLP for sentiment prediction."},{icon:"fa-comment-dots",img:"/img/SpringBoard.jpg",title:"NLP: Twitter Sentiment Analysis",desc:"Coursera | Completed May 2025 — Text classification using NLP techniques."}];function Qs(){const e=b.useRef(null);return b.useEffect(()=>{var n;const t=new IntersectionObserver(s=>{s.forEach(r=>r.isIntersecting&&r.target.classList.add("fade-in-up"))},{threshold:.1});return(n=e.current)==null||n.querySelectorAll(".observe-me").forEach(s=>t.observe(s)),()=>t.disconnect()},[]),i.jsx("section",{id:"services",className:"services",ref:e,children:i.jsxs("div",{className:"container",children:[i.jsx("div",{className:"section-header observe-me",children:i.jsx("h2",{className:"section-title",children:"Certifications"})}),i.jsx("div",{className:"services-grid",children:Zs.map(t=>i.jsxs("div",{className:"service-card observe-me",children:[i.jsx("div",{className:"service-icon",children:i.jsx("i",{className:`fas ${t.icon}`})}),i.jsx("img",{src:t.img,alt:t.title}),i.jsx("h3",{children:t.title}),i.jsx("p",{children:t.desc})]},t.title))})]})})}function er(){const e=b.useRef(null);b.useEffect(()=>{var s;const n=new IntersectionObserver(r=>{r.forEach(o=>o.isIntersecting&&o.target.classList.add("fade-in-up"))},{threshold:.1});return(s=e.current)==null||s.querySelectorAll(".observe-me").forEach(r=>n.observe(r)),()=>n.disconnect()},[]);const t=async n=>{n.preventDefault();const s=n.target.name.value.trim(),r=n.target.email.value.trim(),o=n.target.message.value.trim(),a=n.target.querySelector(".form-submit-btn"),c=a.innerHTML;if(!s||!r||!o)return alert("Please fill in all fields.");try{a.innerHTML='<i class="fas fa-spinner fa-spin"></i> Sending...',a.disabled=!0,window.emailjs&&await window.emailjs.send("service_xdlp08c","template_ze8uqgn",{from_name:s,from_email:r,message:o}),alert("✅ Message sent successfully! I'll get back to you soon."),n.target.reset()}catch(f){console.error(f),alert("❌ Failed to send message. Please try again later.")}finally{a.innerHTML=c,a.disabled=!1}};return i.jsx("section",{id:"contact",className:"contact",ref:e,children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"section-header observe-me",children:[i.jsx("h2",{className:"section-title",children:"Get In Touch"}),i.jsx("p",{className:"section-subtitle",children:"Let's work together!"}),i.jsx("p",{className:"contact-description",children:"I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to collaborate!"})]}),i.jsxs("div",{className:"contact-content",children:[i.jsxs("div",{className:"contact-info observe-me",children:[i.jsxs("div",{className:"contact-details",children:[i.jsxs("div",{className:"contact-item",children:[i.jsx("i",{className:"fas fa-envelope"}),i.jsx("span",{children:"arnavtomar1812007@gmail.com"})]}),i.jsxs("div",{className:"contact-item",children:[i.jsx("i",{className:"fas fa-phone"}),i.jsx("span",{children:"+91 8871687348"})]}),i.jsxs("div",{className:"contact-item",children:[i.jsx("i",{className:"fas fa-map-marker-alt"}),i.jsx("span",{children:"SRMIST Delhi-NCR"})]})]}),i.jsxs("div",{className:"social-section",children:[i.jsx("h3",{className:"social-title",children:"Follow Me"}),i.jsxs("div",{className:"social-icons",children:[i.jsx("a",{href:"https://github.com/sea-of-codes",target:"_blank",rel:"noreferrer",className:"social-icon",title:"GitHub",children:i.jsx("i",{className:"fab fa-github"})}),i.jsx("a",{href:"https://www.linkedin.com/in/arnavtomar18",target:"_blank",rel:"noreferrer",className:"social-icon",title:"LinkedIn",children:i.jsx("i",{className:"fab fa-linkedin"})}),i.jsx("a",{href:"https://www.instagram.com/arnav_tomar.18",target:"_blank",rel:"noreferrer",className:"social-icon",title:"Instagram",children:i.jsx("i",{className:"fab fa-instagram"})})]})]})]}),i.jsxs("form",{className:"contact-form observe-me",onSubmit:t,children:[i.jsx("input",{type:"text",name:"name",placeholder:"Your Name",required:!0}),i.jsx("input",{type:"email",name:"email",placeholder:"Your Email",required:!0}),i.jsx("textarea",{name:"message",rows:"4",placeholder:"Your Message",required:!0}),i.jsxs("button",{type:"submit",className:"form-submit-btn",children:[i.jsx("i",{className:"fas fa-paper-plane"})," Send Message"]})]})]})]})})}function tr(){const[e,t]=b.useState(!1),n=()=>{const s=document.body,r=document.documentElement;s.classList.toggle("light"),r.classList.toggle("light");const o=s.classList.contains("light");localStorage.setItem("theme",o?"light":"dark"),t(o)};return i.jsxs(i.Fragment,{children:[i.jsx("button",{className:"theme-toggle",onClick:n,children:i.jsx("i",{className:`fas fa-${e?"sun":"moon"}`})}),i.jsx("footer",{className:"footer",children:i.jsx("div",{className:"container",children:i.jsx("p",{children:"© 2025 Arnav Tomar. All rights reserved."})})})]})}function nr(){b.useEffect(()=>{localStorage.getItem("theme")==="light"&&document.body.classList.add("light")},[]);const[e,t]=b.useState(!1),[n,s]=b.useState(!1);return b.useCallback((r=!1)=>{s(r),t(!0)},[]),i.jsxs(i.Fragment,{children:[i.jsx(Hs,{}),i.jsx($s,{}),i.jsx(Vs,{}),i.jsx(Ws,{}),i.jsx(Js,{}),i.jsx(Gs,{}),i.jsx(Ys,{}),i.jsx(Qs,{}),i.jsx(er,{}),i.jsx(qs,{}),i.jsx(tr,{})]})}ke.createRoot(document.getElementById("root")).render(i.jsx(Pt.StrictMode,{children:i.jsx(nr,{})}));
