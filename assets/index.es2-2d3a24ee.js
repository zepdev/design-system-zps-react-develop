import{j as v}from"./jsx-runtime-6f6342d7.js";import{i as z}from"./index.es31-95f1013f.js";import{r as o,R as E,a as K}from"./index-b1e7e93e.js";import{h as ee}from"./index.es13-1255b6fb.js";import{f as te}from"./index.es24-26db34bb.js";const ne="focus-visible:zep-ring zep-ring-focus zep-outline-none";var re=Object.defineProperty,oe=(e,t,n)=>t in e?re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,D=(e,t,n)=>(oe(e,typeof t!="symbol"?t+"":t,n),n);let le=class{constructor(){D(this,"current",this.detect()),D(this,"handoffState","pending"),D(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},w=new le,C=(e,t)=>{w.isServer?o.useEffect(e,t):o.useLayoutEffect(e,t)};function ae(e){let t=o.useRef(e);return C(()=>{t.current=e},[e]),t}let x=function(e){let t=ae(e);return E.useCallback((...n)=>t.current(...n),[t])};function se(){let e=typeof document>"u";return"useSyncExternalStore"in K?(t=>t.useSyncExternalStore)(K)(()=>()=>{},()=>!1,()=>!e):!1}function ie(){let e=se(),[t,n]=o.useState(w.isHandoffComplete);return t&&w.isHandoffComplete===!1&&n(!1),o.useEffect(()=>{t!==!0&&n(!0)},[t]),o.useEffect(()=>w.handoff(),[]),e?!1:t}var W;let V=(W=E.useId)!=null?W:function(){let e=ie(),[t,n]=E.useState(e?()=>w.nextId():null);return C(()=>{t===null&&n(w.nextId())},[t]),t!=null?""+t:void 0};function X(e){var t;if(e.type)return e.type;let n=(t=e.as)!=null?t:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function ue(e,t){let[n,r]=o.useState(()=>X(e));return C(()=>{r(X(e))},[e.type,e.as]),C(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}let Y=Symbol();function ce(e,t=!0){return Object.assign(e,{[Y]:t})}function T(...e){let t=o.useRef(e);o.useEffect(()=>{t.current=e},[e]);let n=x(r=>{for(let l of t.current)l!=null&&(typeof l=="function"?l(r):l.current=r)});return e.every(r=>r==null||(r==null?void 0:r[Y]))?void 0:n}let A=o.createContext(null);A.displayName="OpenClosedContext";var k=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(k||{});function fe(){return o.useContext(A)}function de({value:e,children:t}){return E.createElement(A.Provider,{value:e},t)}function pe(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&me(n)?!1:r}function me(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}function j(e,t,...n){if(e in t){let l=t[e];return typeof l=="function"?l(...n):l}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(l=>`"${l}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,j),r}function ye(e){return w.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}function q(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}var R=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(R||{}),he=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(he||{});function H({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:l,visible:s=!0,name:i,mergeRefs:f}){f=f??ge;let a=Q(t,e);if(s)return I(a,n,r,i,f);let d=l??0;if(d&2){let{static:u=!1,...m}=a;if(u)return I(m,n,r,i,f)}if(d&1){let{unmount:u=!0,...m}=a;return j(u?0:1,{0(){return null},1(){return I({...m,hidden:!0,style:{display:"none"}},n,r,i,f)}})}return I(a,n,r,i,f)}function I(e,t={},n,r,l){let{as:s=n,children:i,refName:f="ref",...a}=N(e,["unmount","static"]),d=e.ref!==void 0?{[f]:e.ref}:{},u=typeof i=="function"?i(t):i;"className"in a&&a.className&&typeof a.className=="function"&&(a.className=a.className(t));let m={};if(t){let c=!1,h=[];for(let[g,y]of Object.entries(t))typeof y=="boolean"&&(c=!0),y===!0&&h.push(g);c&&(m["data-headlessui-state"]=h.join(" "))}if(s===o.Fragment&&Object.keys(G(a)).length>0){if(!o.isValidElement(u)||Array.isArray(u)&&u.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(a).map(y=>`  - ${y}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(y=>`  - ${y}`).join(`
`)].join(`
`));let c=u.props,h=typeof(c==null?void 0:c.className)=="function"?(...y)=>q(c==null?void 0:c.className(...y),a.className):q(c==null?void 0:c.className,a.className),g=h?{className:h}:{};return o.cloneElement(u,Object.assign({},Q(u.props,G(N(a,["ref"]))),m,d,{ref:l(u.ref,d.ref)},g))}return o.createElement(s,Object.assign({},N(a,["ref"]),s!==o.Fragment&&d,s!==o.Fragment&&m),u)}function _(){let e=o.useRef([]),t=o.useCallback(n=>{for(let r of e.current)r!=null&&(typeof r=="function"?r(n):r.current=n)},[]);return(...n)=>{if(!n.every(r=>r==null))return e.current=n,t}}function ge(...e){return e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}function Q(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let l in r)l.startsWith("on")&&typeof r[l]=="function"?(n[l]!=null||(n[l]=[]),n[l].push(r[l])):t[l]=r[l];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](l,...s){let i=n[r];for(let f of i){if((l instanceof Event||(l==null?void 0:l.nativeEvent)instanceof Event)&&l.defaultPrevented)return;f(l,...s)}}});return t}function L(e){var t;return Object.assign(o.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function G(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function N(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}var J;let be=(J=E.startTransition)!=null?J:function(e){e()};var S=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(S||{}),ve=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ve||{}),Ee=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(Ee||{});let we={0:e=>({...e,disclosureState:j(e.disclosureState,{0:1,1:0})}),1:e=>e.disclosureState===1?e:{...e,disclosureState:1},4(e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},5(e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},2(e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},3(e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},B=o.createContext(null);B.displayName="DisclosureContext";function M(e){let t=o.useContext(B);if(t===null){let n=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,M),n}return t}let F=o.createContext(null);F.displayName="DisclosureAPIContext";function Z(e){let t=o.useContext(F);if(t===null){let n=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Z),n}return t}let U=o.createContext(null);U.displayName="DisclosurePanelContext";function Se(){return o.useContext(U)}function Pe(e,t){return j(t.type,we,e,t)}let $e=o.Fragment;function ze(e,t){let{defaultOpen:n=!1,...r}=e,l=o.useRef(null),s=T(t,ce(b=>{l.current=b},e.as===void 0||e.as===o.Fragment)),i=o.useRef(null),f=o.useRef(null),a=o.useReducer(Pe,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:f,panelRef:i,buttonId:null,panelId:null}),[{disclosureState:d,buttonId:u},m]=a,c=x(b=>{m({type:1});let P=ye(l);if(!P||!u)return;let p=(()=>b?b instanceof HTMLElement?b:b.current instanceof HTMLElement?b.current:P.getElementById(u):P.getElementById(u))();p==null||p.focus()}),h=o.useMemo(()=>({close:c}),[c]),g=o.useMemo(()=>({open:d===0,close:c}),[d,c]),y={ref:s};return E.createElement(B.Provider,{value:a},E.createElement(F.Provider,{value:h},E.createElement(de,{value:j(d,{0:k.Open,1:k.Closed})},H({ourProps:y,theirProps:r,slot:g,defaultTag:$e,name:"Disclosure"}))))}let xe="button";function ke(e,t){let n=V(),{id:r=`headlessui-disclosure-button-${n}`,...l}=e,[s,i]=M("Disclosure.Button"),f=Se(),a=f===null?!1:f===s.panelId,d=o.useRef(null),u=T(d,t,a?null:s.buttonRef),m=_();o.useEffect(()=>{if(!a)return i({type:2,buttonId:r}),()=>{i({type:2,buttonId:null})}},[r,i,a]);let c=x(p=>{var $;if(a){if(s.disclosureState===1)return;switch(p.key){case S.Space:case S.Enter:p.preventDefault(),p.stopPropagation(),i({type:0}),($=s.buttonRef.current)==null||$.focus();break}}else switch(p.key){case S.Space:case S.Enter:p.preventDefault(),p.stopPropagation(),i({type:0});break}}),h=x(p=>{switch(p.key){case S.Space:p.preventDefault();break}}),g=x(p=>{var $;pe(p.currentTarget)||e.disabled||(a?(i({type:0}),($=s.buttonRef.current)==null||$.focus()):i({type:0}))}),y=o.useMemo(()=>({open:s.disclosureState===0}),[s]),b=ue(e,d),P=a?{ref:u,type:b,onKeyDown:c,onClick:g}:{ref:u,id:r,type:b,"aria-expanded":s.disclosureState===0,"aria-controls":s.linkedPanel?s.panelId:void 0,onKeyDown:c,onKeyUp:h,onClick:g};return H({mergeRefs:m,ourProps:P,theirProps:l,slot:y,defaultTag:xe,name:"Disclosure.Button"})}let je="div",Ie=R.RenderStrategy|R.Static;function Ce(e,t){let n=V(),{id:r=`headlessui-disclosure-panel-${n}`,...l}=e,[s,i]=M("Disclosure.Panel"),{close:f}=Z("Disclosure.Panel"),a=_(),d=T(t,s.panelRef,g=>{be(()=>i({type:g?4:5}))});o.useEffect(()=>(i({type:3,panelId:r}),()=>{i({type:3,panelId:null})}),[r,i]);let u=fe(),m=(()=>u!==null?(u&k.Open)===k.Open:s.disclosureState===0)(),c=o.useMemo(()=>({open:s.disclosureState===0,close:f}),[s,f]),h={ref:d,id:r};return E.createElement(U.Provider,{value:s.panelId},H({mergeRefs:a,ourProps:h,theirProps:l,slot:c,defaultTag:je,features:Ie,visible:m,name:"Disclosure.Panel"}))}let De=L(ze),Ne=L(ke),Oe=L(Ce),O=Object.assign(De,{Button:Ne,Panel:Oe});const Me=o.forwardRef(({items:e,className:t,...n},r)=>v.jsx(v.Fragment,{children:e.map((l,s)=>{const{title:i,content:f,disabled:a}=l;return v.jsx(O,{children:({open:d})=>{const u=z("zep-transition-transform","zep-shrink-0",{"zep-rotate-180":d});return v.jsxs("div",{"data-disabled":a,className:z("zep-@container","first:zep-border-t-[0]","zep-border-t-1","last:zep-border-b-1","zep-border-greyscale-400","[&[data-disabled]]:zep-border-t-greyscale-400/40","[&[data-disabled]+*]:zep-border-t-greyscale-400/40","[&[data-disabled]]:last:zep-border-b-greyscale-400/40",{"[&+*]:hover:!zep-border-t-neutral-dark-active":!a},{"hover:!zep-border-neutral-dark-active":!a},t),children:[v.jsx(O.Button,{disabled:a,className:z("zep-typography-headlineXS-fluid-cqi","zep-w-full",ne,"focus-visible:zep-ring-offset-1","zep-py-0.75","zep-px-0.5","sm:zep-py-1.25","sm:zep-px-1",{"zep-cursor-not-allowed":a},{"zep-opacity-disabled":a}),...n,ref:r,"data-testid":`zep-accordion-button-${s}`,children:v.jsxs(te,{direction:"row",justifyContent:"between",gap:"1.5",wrap:"nowrap",className:"zep-w-full",children:[v.jsx("span",{className:"zep-text-left",children:i}),v.jsx(ee,{className:z("zep-min-w-[24px] !zep-grow-0 zep-justify-end",u),name:"chevron-mini-down"})]})}),v.jsx(O.Panel,{className:z({"zep-hidden":!d},"zep-text-typography-dark-100","zep-pt-0.75","zep-pb-2","zep-px-0.5","sm:zep-pt-1.25","sm:zep-pb-2.5","sm:zep-px-1","zep-typography-bodyText"),children:f})]})}},`${i}-${s}`)})}));export{Me as A};