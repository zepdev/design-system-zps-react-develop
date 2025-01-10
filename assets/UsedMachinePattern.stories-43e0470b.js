import{j as O}from"./jsx-dev-runtime-8ab8c10c.js";import{r as u,R as Y}from"./index-b1e7e93e.js";import{j as S}from"./jsx-runtime-6f6342d7.js";import{i as $}from"./index.es31-95f1013f.js";import{h as me}from"./index.es13-cfbbaaf2.js";import{i as Ve}from"./index.es35-e8d10e84.js";import{f as se,e as Q,l as g,t as Le,o as k,I as U,C as G,A as xe,m as W,i as He,s as ie,N as qe,b as ce,p as Ye,d as Qe,c as M,r as Ke}from"./index.es73-f825366a.js";import{u as We,b as Re,M as T,a as I,c as C,d as P}from"./used-machine-locales-cdbf9647.js";import{U as ye}from"./UsedMachineFilters-943ad56b.js";import{U as Ze}from"./UsedMachineCard-b18e3e2f.js";import{B as Se,Z as Ne}from"./ZpsButton-441d7925.js";import{L as Xe}from"./Layout-fc099938.js";import{L}from"./global-variants-71b69725.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-0839fdbe.js";import"./index.es32-fbb642fb.js";import"./index.es16-559b0725.js";import"./Slider-667a003e.js";import"./index.es24-26db34bb.js";import"./index.es34-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";const Je=e=>{if(!e)return 0;const n=e.getBoundingClientRect().bottom;return window.innerHeight-n};function Ce(e,n){let[t,r]=u.useState(e),i=se(e);return Q(()=>r(i.current),[i,r,...n]),t}function et(e,n,t){let[r,i]=u.useState(t),a=e!==void 0,o=u.useRef(a),l=u.useRef(!1),s=u.useRef(!1);return a&&!o.current&&!l.current?(l.current=!0,o.current=a,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!a&&o.current&&!s.current&&(s.current=!0,o.current=a,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[a?e:r,g(d=>(a||i(d),n==null?void 0:n(d)))]}function tt(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(n=>setTimeout(()=>{throw n}))}function K(){let e=[],n={addEventListener(t,r,i,a){return t.addEventListener(r,i,a),n.add(()=>t.removeEventListener(r,i,a))},requestAnimationFrame(...t){let r=requestAnimationFrame(...t);return n.add(()=>cancelAnimationFrame(r))},nextFrame(...t){return n.requestAnimationFrame(()=>n.requestAnimationFrame(...t))},setTimeout(...t){let r=setTimeout(...t);return n.add(()=>clearTimeout(r))},microTask(...t){let r={current:!0};return tt(()=>{r.current&&t[0]()}),n.add(()=>{r.current=!1})},style(t,r,i){let a=t.style.getPropertyValue(r);return Object.assign(t.style,{[r]:i}),this.add(()=>{Object.assign(t.style,{[r]:a})})},group(t){let r=K();return t(r),this.add(()=>r.dispose())},add(t){return e.push(t),()=>{let r=e.indexOf(t);if(r>=0)for(let i of e.splice(r,1))i()}},dispose(){for(let t of e.splice(0))t()}};return n}function oe(){let[e]=u.useState(K);return u.useEffect(()=>()=>e.dispose(),[e]),e}let Ee=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var rt=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(rt||{}),nt=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(nt||{}),at=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(at||{}),he=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(he||{});function Ie(e,n=0){var t;return e===((t=Le(e))==null?void 0:t.body)?!1:k(n,{0(){return e.matches(Ee)},1(){let r=e;for(;r!==null;){if(r.matches(Ee))return!0;r=r.parentElement}return!1}})}var it=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(it||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function ot(e,n=t=>t){return e.slice().sort((t,r)=>{let i=n(t),a=n(r);if(i===null||a===null)return 0;let o=i.compareDocumentPosition(a);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function lt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function st(){return/Android/gi.test(window.navigator.userAgent)}function ct(){return lt()||st()}function ne(e,n,t){let r=se(n);u.useEffect(()=>{function i(a){r.current(a)}return document.addEventListener(e,i,t),()=>document.removeEventListener(e,i,t)},[e,t])}function ut(e,n,t){let r=se(n);u.useEffect(()=>{function i(a){r.current(a)}return window.addEventListener(e,i,t),()=>window.removeEventListener(e,i,t)},[e,t])}function dt(e,n,t=!0){let r=u.useRef(!1);u.useEffect(()=>{requestAnimationFrame(()=>{r.current=t})},[t]);function i(o,l){if(!r.current||o.defaultPrevented)return;let s=l(o);if(s===null||!s.getRootNode().contains(s)||!s.isConnected)return;let d=function f(p){return typeof p=="function"?f(p()):Array.isArray(p)||p instanceof Set?p:[p]}(e);for(let f of d){if(f===null)continue;let p=f instanceof HTMLElement?f:f.current;if(p!=null&&p.contains(s)||o.composed&&o.composedPath().includes(p))return}return!Ie(s,he.Loose)&&s.tabIndex!==-1&&o.preventDefault(),n(o,s)}let a=u.useRef(null);ne("pointerdown",o=>{var l,s;r.current&&(a.current=((s=(l=o.composedPath)==null?void 0:l.call(o))==null?void 0:s[0])||o.target)},!0),ne("mousedown",o=>{var l,s;r.current&&(a.current=((s=(l=o.composedPath)==null?void 0:l.call(o))==null?void 0:s[0])||o.target)},!0),ne("click",o=>{ct()||a.current&&(i(o,()=>a.current),a.current=null)},!0),ne("touchend",o=>i(o,()=>o.target instanceof HTMLElement?o.target:null),!0),ut("blur",o=>i(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}let ze=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function Me(e){var n,t;let r=(n=e.innerText)!=null?n:"",i=e.cloneNode(!0);if(!(i instanceof HTMLElement))return r;let a=!1;for(let l of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))l.remove(),a=!0;let o=a?(t=i.innerText)!=null?t:"":r;return ze.test(o)&&(o=o.replace(ze,"")),o}function pt(e){let n=e.getAttribute("aria-label");if(typeof n=="string")return n.trim();let t=e.getAttribute("aria-labelledby");if(t){let r=t.split(" ").map(i=>{let a=document.getElementById(i);if(a){let o=a.getAttribute("aria-label");return typeof o=="string"?o.trim():Me(a).trim()}return null}).filter(Boolean);if(r.length>0)return r.join(", ")}return Me(e).trim()}function mt(e){let n=u.useRef(""),t=u.useRef("");return g(()=>{let r=e.current;if(!r)return"";let i=r.innerText;if(n.current===i)return t.current;let a=pt(r).trim().toLowerCase();return n.current=i,t.current=a,a})}function Oe(e){return[e.screenX,e.screenY]}function ft(){let e=u.useRef([-1,-1]);return{wasMoved(n){let t=Oe(n);return e.current[0]===t[0]&&e.current[1]===t[1]?!1:(e.current=t,!0)},update(n){e.current=Oe(n)}}}let ht="div";var Pe=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(Pe||{});function bt(e,n){var t;let{features:r=1,...i}=e,a={ref:n,"aria-hidden":(r&2)===2?!0:(t=i["aria-hidden"])!=null?t:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return G({ourProps:a,theirProps:i,slot:{},defaultTag:ht,name:"Hidden"})}let gt=U(bt);function vt(e){throw new Error("Unexpected object: "+e)}var R=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(R||{});function xt(e,n){let t=n.resolveItems();if(t.length<=0)return null;let r=n.resolveActiveIndex(),i=r??-1;switch(e.focus){case 0:{for(let a=0;a<t.length;++a)if(!n.resolveDisabled(t[a],a,t))return a;return r}case 1:{for(let a=i-1;a>=0;--a)if(!n.resolveDisabled(t[a],a,t))return a;return r}case 2:{for(let a=i+1;a<t.length;++a)if(!n.resolveDisabled(t[a],a,t))return a;return r}case 3:{for(let a=t.length-1;a>=0;--a)if(!n.resolveDisabled(t[a],a,t))return a;return r}case 4:{for(let a=0;a<t.length;++a)if(n.resolveId(t[a],a,t)===e.id)return a;return r}case 5:return null;default:vt(e)}}function je(e={},n=null,t=[]){for(let[r,i]of Object.entries(e))Fe(t,Ae(n,r),i);return t}function Ae(e,n){return e?e+"["+n+"]":n}function Fe(e,n,t){if(Array.isArray(t))for(let[r,i]of t.entries())Fe(e,Ae(n,r.toString()),i);else t instanceof Date?e.push([n,t.toISOString()]):typeof t=="boolean"?e.push([n,t?"1":"0"]):typeof t=="string"?e.push([n,t]):typeof t=="number"?e.push([n,`${t}`]):t==null?e.push([n,""]):je(t,n,e)}var yt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(yt||{}),St=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(St||{}),Nt=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Nt||{}),Et=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.GoToOption=2]="GoToOption",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterOption=5]="RegisterOption",e[e.UnregisterOption=6]="UnregisterOption",e[e.RegisterLabel=7]="RegisterLabel",e))(Et||{});function fe(e,n=t=>t){let t=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,r=ot(n(e.options.slice()),a=>a.dataRef.current.domRef.current),i=t?r.indexOf(t):null;return i===-1&&(i=null),{options:r,activeOptionIndex:i}}let zt={1(e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},0(e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let n=e.activeOptionIndex,{isSelected:t}=e.dataRef.current,r=e.options.findIndex(i=>t(i.dataRef.current.value));return r!==-1&&(n=r),{...e,listboxState:0,activeOptionIndex:n}},2(e,n){var t;if(e.dataRef.current.disabled||e.listboxState===1)return e;let r=fe(e),i=xt(n,{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:a=>a.id,resolveDisabled:a=>a.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeOptionIndex:i,activationTrigger:(t=n.trigger)!=null?t:1}},3:(e,n)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let t=e.searchQuery!==""?0:1,r=e.searchQuery+n.value.toLowerCase(),i=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+t).concat(e.options.slice(0,e.activeOptionIndex+t)):e.options).find(o=>{var l;return!o.dataRef.current.disabled&&((l=o.dataRef.current.textValue)==null?void 0:l.startsWith(r))}),a=i?e.options.indexOf(i):-1;return a===-1||a===e.activeOptionIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeOptionIndex:a,activationTrigger:1}},4(e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},5:(e,n)=>{let t={id:n.id,dataRef:n.dataRef},r=fe(e,i=>[...i,t]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(n.dataRef.current.value)&&(r.activeOptionIndex=r.options.indexOf(t)),{...e,...r}},6:(e,n)=>{let t=fe(e,r=>{let i=r.findIndex(a=>a.id===n.id);return i!==-1&&r.splice(i,1),r});return{...e,...t,activationTrigger:1}},7:(e,n)=>({...e,labelId:n.id})},be=u.createContext(null);be.displayName="ListboxActionsContext";function Z(e){let n=u.useContext(be);if(n===null){let t=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Z),t}return n}let ge=u.createContext(null);ge.displayName="ListboxDataContext";function X(e){let n=u.useContext(ge);if(n===null){let t=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,X),t}return n}function Mt(e,n){return k(n.type,zt,e,n)}let Ot=u.Fragment;function Tt(e,n){let{value:t,defaultValue:r,form:i,name:a,onChange:o,by:l=(m,h)=>m===h,disabled:s=!1,horizontal:d=!1,multiple:f=!1,...p}=e;const E=d?"horizontal":"vertical";let w=W(n),[v=f?[]:void 0,y]=et(t,o,r),[b,c]=u.useReducer(Mt,{dataRef:u.createRef(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),N=u.useRef({static:!1,hold:!1}),j=u.useRef(null),F=u.useRef(null),_=u.useRef(null),z=g(typeof l=="string"?(m,h)=>{let D=l;return(m==null?void 0:m[D])===(h==null?void 0:h[D])}:l),A=u.useCallback(m=>k(x.mode,{1:()=>v.some(h=>z(h,m)),0:()=>z(v,m)}),[v]),x=u.useMemo(()=>({...b,value:v,disabled:s,mode:f?1:0,orientation:E,compare:z,isSelected:A,optionsPropsRef:N,labelRef:j,buttonRef:F,optionsRef:_}),[v,s,f,b]);Q(()=>{b.dataRef.current=x},[x]),dt([x.buttonRef,x.optionsRef],(m,h)=>{var D;c({type:1}),Ie(h,he.Loose)||(m.preventDefault(),(D=x.buttonRef.current)==null||D.focus())},x.listboxState===0);let ue=u.useMemo(()=>({open:x.listboxState===0,disabled:s,value:v}),[x,s,v]),J=g(m=>{let h=x.options.find(D=>D.id===m);h&&pe(h.dataRef.current.value)}),ee=g(()=>{if(x.activeOptionIndex!==null){let{dataRef:m,id:h}=x.options[x.activeOptionIndex];pe(m.current.value),c({type:2,focus:R.Specific,id:h})}}),te=g(()=>c({type:0})),B=g(()=>c({type:1})),V=g((m,h,D)=>m===R.Specific?c({type:2,focus:R.Specific,id:h,trigger:D}):c({type:2,focus:m,trigger:D})),de=g((m,h)=>(c({type:5,id:m,dataRef:h}),()=>c({type:6,id:m}))),$e=g(m=>(c({type:7,id:m}),()=>c({type:7,id:null}))),pe=g(m=>k(x.mode,{0(){return y==null?void 0:y(m)},1(){let h=x.value.slice(),D=h.findIndex(H=>z(H,m));return D===-1?h.push(m):h.splice(D,1),y==null?void 0:y(h)}})),ke=g(m=>c({type:3,value:m})),Be=g(()=>c({type:4})),Ue=u.useMemo(()=>({onChange:pe,registerOption:de,registerLabel:$e,goToOption:V,closeListbox:B,openListbox:te,selectActiveOption:ee,selectOption:J,search:ke,clearSearch:Be}),[]),Ge={ref:w},re=u.useRef(null),_e=oe();return u.useEffect(()=>{re.current&&r!==void 0&&_e.addEventListener(re.current,"reset",()=>{y==null||y(r)})},[re,y]),Y.createElement(be.Provider,{value:Ue},Y.createElement(ge.Provider,{value:x},Y.createElement(He,{value:k(x.listboxState,{0:ie.Open,1:ie.Closed})},a!=null&&v!=null&&je({[a]:v}).map(([m,h],D)=>Y.createElement(gt,{features:Pe.Hidden,ref:D===0?H=>{var ve;re.current=(ve=H==null?void 0:H.closest("form"))!=null?ve:null}:void 0,...qe({key:m,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:i,disabled:s,name:m,value:h})})),G({ourProps:Ge,theirProps:p,slot:ue,defaultTag:Ot,name:"Listbox"}))))}let wt="button";function Dt(e,n){var t;let r=ce(),{id:i=`headlessui-listbox-button-${r}`,...a}=e,o=X("Listbox.Button"),l=Z("Listbox.Button"),s=W(o.buttonRef,n),d=oe(),f=g(b=>{switch(b.key){case M.Space:case M.Enter:case M.ArrowDown:b.preventDefault(),l.openListbox(),d.nextFrame(()=>{o.value||l.goToOption(R.First)});break;case M.ArrowUp:b.preventDefault(),l.openListbox(),d.nextFrame(()=>{o.value||l.goToOption(R.Last)});break}}),p=g(b=>{switch(b.key){case M.Space:b.preventDefault();break}}),E=g(b=>{if(Ke(b.currentTarget))return b.preventDefault();o.listboxState===0?(l.closeListbox(),d.nextFrame(()=>{var c;return(c=o.buttonRef.current)==null?void 0:c.focus({preventScroll:!0})})):(b.preventDefault(),l.openListbox())}),w=Ce(()=>{if(o.labelId)return[o.labelId,i].join(" ")},[o.labelId,i]),v=u.useMemo(()=>({open:o.listboxState===0,disabled:o.disabled,value:o.value}),[o]),y={ref:s,id:i,type:Ye(e,o.buttonRef),"aria-haspopup":"listbox","aria-controls":(t=o.optionsRef.current)==null?void 0:t.id,"aria-expanded":o.listboxState===0,"aria-labelledby":w,disabled:o.disabled,onKeyDown:f,onKeyUp:p,onClick:E};return G({ourProps:y,theirProps:a,slot:v,defaultTag:wt,name:"Listbox.Button"})}let Lt="label";function Rt(e,n){let t=ce(),{id:r=`headlessui-listbox-label-${t}`,...i}=e,a=X("Listbox.Label"),o=Z("Listbox.Label"),l=W(a.labelRef,n);Q(()=>o.registerLabel(r),[r]);let s=g(()=>{var f;return(f=a.buttonRef.current)==null?void 0:f.focus({preventScroll:!0})}),d=u.useMemo(()=>({open:a.listboxState===0,disabled:a.disabled}),[a]);return G({ourProps:{ref:l,id:r,onClick:s},theirProps:i,slot:d,defaultTag:Lt,name:"Listbox.Label"})}let Ct="ul",It=xe.RenderStrategy|xe.Static;function Pt(e,n){var t;let r=ce(),{id:i=`headlessui-listbox-options-${r}`,...a}=e,o=X("Listbox.Options"),l=Z("Listbox.Options"),s=W(o.optionsRef,n),d=oe(),f=oe(),p=Qe(),E=(()=>p!==null?(p&ie.Open)===ie.Open:o.listboxState===0)();u.useEffect(()=>{var c;let N=o.optionsRef.current;N&&o.listboxState===0&&N!==((c=Le(N))==null?void 0:c.activeElement)&&N.focus({preventScroll:!0})},[o.listboxState,o.optionsRef]);let w=g(c=>{switch(f.dispose(),c.key){case M.Space:if(o.searchQuery!=="")return c.preventDefault(),c.stopPropagation(),l.search(c.key);case M.Enter:if(c.preventDefault(),c.stopPropagation(),o.activeOptionIndex!==null){let{dataRef:N}=o.options[o.activeOptionIndex];l.onChange(N.current.value)}o.mode===0&&(l.closeListbox(),K().nextFrame(()=>{var N;return(N=o.buttonRef.current)==null?void 0:N.focus({preventScroll:!0})}));break;case k(o.orientation,{vertical:M.ArrowDown,horizontal:M.ArrowRight}):return c.preventDefault(),c.stopPropagation(),l.goToOption(R.Next);case k(o.orientation,{vertical:M.ArrowUp,horizontal:M.ArrowLeft}):return c.preventDefault(),c.stopPropagation(),l.goToOption(R.Previous);case M.Home:case M.PageUp:return c.preventDefault(),c.stopPropagation(),l.goToOption(R.First);case M.End:case M.PageDown:return c.preventDefault(),c.stopPropagation(),l.goToOption(R.Last);case M.Escape:return c.preventDefault(),c.stopPropagation(),l.closeListbox(),d.nextFrame(()=>{var N;return(N=o.buttonRef.current)==null?void 0:N.focus({preventScroll:!0})});case M.Tab:c.preventDefault(),c.stopPropagation();break;default:c.key.length===1&&(l.search(c.key),f.setTimeout(()=>l.clearSearch(),350));break}}),v=Ce(()=>{var c;return(c=o.buttonRef.current)==null?void 0:c.id},[o.buttonRef.current]),y=u.useMemo(()=>({open:o.listboxState===0}),[o]),b={"aria-activedescendant":o.activeOptionIndex===null||(t=o.options[o.activeOptionIndex])==null?void 0:t.id,"aria-multiselectable":o.mode===1?!0:void 0,"aria-labelledby":v,"aria-orientation":o.orientation,id:i,onKeyDown:w,role:"listbox",tabIndex:0,ref:s};return G({ourProps:b,theirProps:a,slot:y,defaultTag:Ct,features:It,visible:E,name:"Listbox.Options"})}let jt="li";function At(e,n){let t=ce(),{id:r=`headlessui-listbox-option-${t}`,disabled:i=!1,value:a,...o}=e,l=X("Listbox.Option"),s=Z("Listbox.Option"),d=l.activeOptionIndex!==null?l.options[l.activeOptionIndex].id===r:!1,f=l.isSelected(a),p=u.useRef(null),E=mt(p),w=se({disabled:i,value:a,domRef:p,get textValue(){return E()}}),v=W(n,p);Q(()=>{if(l.listboxState!==0||!d||l.activationTrigger===0)return;let z=K();return z.requestAnimationFrame(()=>{var A,x;(x=(A=p.current)==null?void 0:A.scrollIntoView)==null||x.call(A,{block:"nearest"})}),z.dispose},[p,d,l.listboxState,l.activationTrigger,l.activeOptionIndex]),Q(()=>s.registerOption(r,w),[w,r]);let y=g(z=>{if(i)return z.preventDefault();s.onChange(a),l.mode===0&&(s.closeListbox(),K().nextFrame(()=>{var A;return(A=l.buttonRef.current)==null?void 0:A.focus({preventScroll:!0})}))}),b=g(()=>{if(i)return s.goToOption(R.Nothing);s.goToOption(R.Specific,r)}),c=ft(),N=g(z=>c.update(z)),j=g(z=>{c.wasMoved(z)&&(i||d||s.goToOption(R.Specific,r,0))}),F=g(z=>{c.wasMoved(z)&&(i||d&&s.goToOption(R.Nothing))}),_=u.useMemo(()=>({active:d,selected:f,disabled:i}),[d,f,i]);return G({ourProps:{id:r,ref:v,role:"option",tabIndex:i===!0?void 0:-1,"aria-disabled":i===!0?!0:void 0,"aria-selected":f,disabled:void 0,onClick:y,onFocus:b,onPointerEnter:N,onMouseEnter:N,onPointerMove:j,onMouseMove:j,onPointerLeave:F,onMouseLeave:F},theirProps:o,slot:_,defaultTag:jt,name:"Listbox.Option"})}let Ft=U(Tt),$t=U(Dt),kt=U(Rt),Bt=U(Pt),Ut=U(At),q=Object.assign(Ft,{Button:$t,Label:kt,Options:Bt,Option:Ut});const Gt=268,_t=(e,n)=>$("zep-flex zep-w-full zep-items-center zep-justify-between zep-bg-background-light zep-px-1 zep-py-0.75",{"zep-bg-greyscale-200":e},{"zep-bg-greyscale-300":n},{"zep-pr-3":n}),Vt=u.forwardRef(({disabled:e=!1,items:n,message:t,label:r,placeholder:i,required:a,notRequiredHint:o="(optional)",readOnly:l=!1,state:s="default",...d},f)=>{const[p,E]=u.useState(null),w=Y.useRef(null),v=u.useMemo(()=>s==="error",[s]),y=u.useMemo(()=>s==="info",[s]),b=u.useMemo(()=>e||l,[e,l]),c=u.useMemo(()=>v?"zep-text-error":y?"zep-text-info":"",[v,y]),N=j=>{d!=null&&d.onChange&&(d==null||d.onChange(j)),E(j)};return S.jsxs("div",{className:Ve($("zep-relative","zep-inline-block","zep-text-left","zep-w-full",{"zep-cursor-not-allowed zep-opacity-disabled":e},d.className)),"data-testid":"zep-drop-down",children:[S.jsx(q,{disabled:b,...d,onChange:N,value:(d==null?void 0:d.value)||p,ref:f,children:({open:j})=>{var J,ee,te;const F=Je(w.current)<Gt,_=l?void 0:i,z=((J=d==null?void 0:d.value)==null?void 0:J.name)||(p==null?void 0:p.name)||_,A=$("zep-bg-background-light","zep-inline-flex","zep-justify-between","zep-border-solid","zep-pl-1","zep-pr-0.75","zep-py-0.75","zep-font-roboto","zep-w-full","zep-outline-none",{"zep-text-opacity-disabled":e,"zep-text-typography-dark-100/70":!((ee=d==null?void 0:d.value)!=null&&ee.name||p!=null&&p.name||l)&&!e,"zep-text-typography-dark-100":(((te=d==null?void 0:d.value)==null?void 0:te.name)||(p==null?void 0:p.name)||l)&&!e,"zep-bg-background-medium":l,"zep-ring":j,"zep-active:zep-ring zep-ring-focus zep-ring-offset-1 focus-visible:zep-ring":!b,"zep-cursor-not-allowed":b,"zep-border-2 zep-border-error":v,"zep-border-1 zep-border-neutral-dark-default":!v}),x=$("zep-absolute","zep-shadow-[0_0_4px_rgba(0,0,0,0.24)]","zep-py-0.25","zep-z-10","zep-w-full","zep-max-h-[268px]","zep-origin-top-right","zep-rounded-4","zep-bg-background-light","focus:zep-outline-none","zep-overflow-hidden","zep-overflow-y-auto",{"zep-bottom-full zep-mb-[-25px]":F,"zep-mt-0.25":!F}),ue=$("zep-shrink-0","zep-transition-transform","zep-duration-300",{"zep-rotate-180":j,"zep-text-opacity-disabled":b,"zep-text-typography-dark-100":!b});return S.jsxs(S.Fragment,{children:[r&&S.jsxs(q.Label,{className:$("zep-block","zep-mb-0.5",{"zep-text-opacity-disabled":e}),children:[r,!a&&S.jsx("span",{className:"zep-ml-0.25",children:o})]}),S.jsx(q.Button,{className:A,ref:w,title:z,"data-testid":"zep-drop-down-button",children:S.jsxs(S.Fragment,{children:[S.jsx("span",{className:"zep-truncate",children:z}),S.jsx(me,{className:ue,name:"chevron-mini-down",role:"img",size:24})]})}),S.jsx(q.Options,{className:x,"data-testid":"zep-drop-down-menu",children:n.map(B=>S.jsx(q.Option,{value:B,title:B.name,className:({active:V,selected:de})=>_t(V,de),children:({selected:V})=>S.jsxs(S.Fragment,{children:[S.jsx("span",{className:"zep-truncate",children:B.name}),V&&S.jsx(me,{name:"check",role:"img",size:24,className:"zep-absolute zep-right-1"})]})},B.id))})]})}}),t&&S.jsxs("div",{className:$("zep-mt-0.25",{"zep-text-typography-dark-100":!v&&!y},"zep-text-0.875","zep-flex",c),children:[s!=="default"&&S.jsx(me,{name:v?"warning-triangle-filled":"info-circle-filled",role:"img",size:24,className:"zep-mr-0.5 zep-shrink-0"}),S.jsx("span",{className:"zep-mt-0.125",children:t})]})]})}),le=({setFilters:e,locale:n,filters:t,powerOptions:r,cards:i,total:a,currentTotal:o,setCurrentTotal:l})=>{const s=u.useMemo(()=>We[n],[n]),d=Object.values(Re).map(E=>({id:E,name:s[E]})),f=E=>{e(w=>({...w,sort:E.id}))},p=()=>{l(E=>E+10)};return O.jsxDEV(Xe,{testId:"zep-used-machine-pattern",className:"md:zep-flex xl:zep-gap-5 md:zep-gap-3",wrapperClassname:"zep-bg-greyscale-200",children:[O.jsxDEV(ye,{className:"zep-hidden md:zep-flex",setFilters:e,locale:n,filters:t,powerOptions:r},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:33,columnNumber:7},globalThis),O.jsxDEV("div",{className:"zep-grow zep-flex zep-flex-col zep-gap-2",children:[O.jsxDEV("div",{className:"zep-flex zep-w-full zep-justify-between md:zep-items-end zep-items-center zep-text-primary-default",children:[O.jsxDEV("span",{className:"zep-typography-bodyStrong",children:`${a} ${s.results}`},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:36,columnNumber:11},globalThis),O.jsxDEV(ye,{className:"md:zep-hidden",setFilters:e,locale:n,filters:t,powerOptions:r},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:37,columnNumber:11},globalThis),O.jsxDEV(Vt,{label:s.sortBy,required:!0,className:"!zep-w-[334px] zep-hidden md:zep-block",items:d,placeholder:s.sortBy,onChange:f,value:{id:t.sort?t.sort:"",name:t.sort?s[t.sort]:s.sortBy}},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:38,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:35,columnNumber:9},globalThis),a>0?i.map((E,w)=>O.jsxDEV(Ze,{...E},w,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:49,columnNumber:11},globalThis)):O.jsxDEV("div",{className:"zep-flex zep-flex-col zep-gap-3",children:[O.jsxDEV("div",{className:"zep-text-primary-default zep-flex zep-flex-col zep-gap-2.5",children:[O.jsxDEV("h3",{className:"zep-typography-headlineLG-fluid-cqi",children:s.zeroResultsFoundTitle},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:53,columnNumber:15},globalThis),O.jsxDEV("p",{className:"zep-typography-bodyText",children:s.zeroResultsFoundDescription},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:54,columnNumber:15},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:52,columnNumber:13},globalThis),O.jsxDEV(Se,{className:"sm:!zep-w-fit",variant:Ne.Primary,children:s.contactExperts},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:56,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:51,columnNumber:11},globalThis),o<a&&O.jsxDEV(Se,{className:"sm:!zep-w-fit zep-self-center",variant:Ne.SecondaryZps,onClick:p,children:"Load More"},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:60,columnNumber:34},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:34,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:32,columnNumber:5},globalThis)};try{le.displayName="UsedMachinePattern",le.__docgenInfo={description:"",displayName:"UsedMachinePattern",props:{cards:{defaultValue:null,description:"",name:"cards",required:!0,type:{name:"UsedMachineCardProps[]"}},total:{defaultValue:null,description:"",name:"total",required:!0,type:{name:"number"}},currentTotal:{defaultValue:null,description:"",name:"currentTotal",required:!0,type:{name:"number"}},setCurrentTotal:{defaultValue:null,description:"",name:"setCurrentTotal",required:!0,type:{name:"Dispatch<SetStateAction<number>>"}},setFilters:{defaultValue:null,description:"",name:"setFilters",required:!0,type:{name:"Dispatch<SetStateAction<UsedMachineFiltersType>>"}},locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"enum",value:[{value:'"en"'},{value:'"de"'},{value:'"de_au"'}]}},filters:{defaultValue:null,description:"",name:"filters",required:!0,type:{name:"UsedMachineFiltersType"}},powerOptions:{defaultValue:null,description:"",name:"powerOptions",required:!1,type:{name:'Omit<SliderProps, "value" | "label">'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Ht=[{isMarine:!0,category:T.GEN_SET,locale:L.DE,year:2020,location:{city:"Berlin",country:"Deutschland"},operatingHours:1e4,rating:I.STAND_BY,fuel:C.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:P.MOBILE},{isMarine:!0,category:T.GEN_SET,locale:L.DE,year:2020,location:{city:"Berlin",country:"Deutschland"},operatingHours:1e4,rating:I.CONTINUOUS,fuel:C.GAS,power:2e3,name:"Gen Set Machine 2",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:P.STATIONARY},{isMarine:!0,category:T.ENGINE,locale:L.DE,year:2020,location:{city:"Berlin",country:"Deutschland"},operatingHours:1e4,fuel:C.DIESEL,power:2e3,name:"Engine Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61"},{category:T.GEN_SET,locale:L.DE,year:2020,location:{city:"Berlin",country:"Deutschland"},operatingHours:1e4,rating:I.PRIME,fuel:C.DUAL_FUEL,power:3e3,name:"Gen Set Machine 3",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:P.MOBILE},{isMarine:!0,category:T.GEN_SET,locale:L.DE,year:2020,location:{city:"Berlin",country:"Deutschland"},operatingHours:1e4,fuel:C.DIESEL,power:4e3,rating:I.CONTINUOUS,name:"Gen Set Machine 4",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:P.STATIONARY},{category:T.ACCESSORY,locale:L.DE,year:2020,location:{city:"Berlin",country:"Deutschland"},name:"Accessory",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61"},{isMarine:!0,category:T.GEN_SET,locale:L.DE,year:2020,location:{city:"Berlin",country:"Deutschland"},operatingHours:1e4,rating:I.STAND_BY,fuel:C.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:P.MOBILE},{isMarine:!0,category:T.GEN_SET,locale:L.DE,year:2020,location:{city:"Berlin",country:"Deutschland"},operatingHours:1e4,rating:I.STAND_BY,fuel:C.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:P.MOBILE},{isMarine:!0,category:T.GEN_SET,locale:L.DE,year:2020,location:{city:"Berlin",country:"Deutschland"},operatingHours:1e4,rating:I.STAND_BY,fuel:C.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:P.MOBILE},{isMarine:!0,category:T.GEN_SET,locale:L.DE,year:2020,location:{city:"Berlin",country:"Deutschland"},operatingHours:1e4,rating:I.STAND_BY,fuel:C.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:P.MOBILE},{isMarine:!0,category:T.GEN_SET,locale:L.DE,year:2020,location:{city:"Berlin",country:"Deutschland"},operatingHours:1e4,rating:I.STAND_BY,fuel:C.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:P.MOBILE},{isMarine:!0,category:T.GEN_SET,locale:L.DE,year:2020,location:{city:"Berlin",country:"Deutschland"},operatingHours:1e4,rating:I.STAND_BY,fuel:C.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:P.MOBILE},{isMarine:!0,category:T.GEN_SET,locale:L.DE,year:2020,location:{city:"Berlin",country:"Deutschland"},operatingHours:1e4,rating:I.STAND_BY,fuel:C.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:P.MOBILE}],qt=(e,n)=>{let t=Ht.filter(({category:i})=>i===e.category);e.category!==T.ACCESSORY&&(e.rating&&e.rating.length>0&&(t=t.filter(({rating:i})=>{var a;return i&&((a=e.rating)==null?void 0:a.includes(i))})),e.fuel&&e.fuel.length>0&&(t=t.filter(({fuel:i})=>{var a;return i&&((a=e.fuel)==null?void 0:a.includes(i))})),e.type&&e.category===T.GEN_SET&&e.type.length>0&&(t=t.filter(({type:i})=>{var a;return i&&((a=e.type)==null?void 0:a.includes(i))})),e.power&&(t=t.filter(({power:i})=>i&&i>=e.power.min&&i<=e.power.max))),e.sort&&(e.sort===Re.POWER_ASCENDING?t=t.sort(({power:i=0},{power:a=0})=>i-a):t=t.sort(({power:i=0},{power:a=0})=>a-i));const r=t.length;return t=t.slice(0,n),{cards:t,total:r}},hr={title:"Patterns/UsedMachinePattern",component:le,tags:["autodocs"],argTypes:{},decorators:[e=>{const[n,t]=u.useState({category:T.GEN_SET,power:{min:100,max:1e4},type:[],sort:void 0,rating:[],fuel:[]}),[r,i]=u.useState(10),{cards:a,total:o}=u.useMemo(()=>qt(n,r),[n,r]);return O.jsxDEV(e,{cards:a,total:o,filters:n,setFilters:t,setCurrentTotal:i,currentTotal:r},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.stories.tsx",lineNumber:232,columnNumber:9},globalThis)}]},ae={args:{locale:L.DE,powerOptions:{min:100,max:1e4,step:1}},render:(e,{filters:n,currentTotal:t,setFilters:r,cards:i,total:a,setCurrentTotal:o})=>O.jsxDEV(le,{setCurrentTotal:o,currentTotal:t,total:a,cards:i,powerOptions:e.powerOptions,setFilters:r,locale:e.locale,filters:n},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.stories.tsx",lineNumber:258,columnNumber:5},globalThis)};var Te,we,De;ae.parameters={...ae.parameters,docs:{...(Te=ae.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    locale: LocaleVariants.DE,
    powerOptions: {
      min: 100,
      max: 10000,
      step: 1
    }
  } as unknown as UsedMachinePatternProps,
  render: (args, {
    filters,
    currentTotal,
    setFilters,
    cards,
    total,
    setCurrentTotal
  }) => <UsedMachinePattern setCurrentTotal={setCurrentTotal} currentTotal={currentTotal} total={total} cards={cards} powerOptions={args.powerOptions} setFilters={setFilters} locale={args.locale} filters={filters} />
}`,...(De=(we=ae.parameters)==null?void 0:we.docs)==null?void 0:De.source}}};const br=["Default"];export{ae as Default,br as __namedExportsOrder,hr as default};