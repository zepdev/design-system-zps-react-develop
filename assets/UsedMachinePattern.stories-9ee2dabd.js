import{j as O}from"./jsx-dev-runtime-8ab8c10c.js";import{r as u,R as Y}from"./index-b1e7e93e.js";import{j as S}from"./jsx-runtime-6f6342d7.js";import{i as $}from"./index.es31-95f1013f.js";import{h as me}from"./index.es13-cfbbaaf2.js";import{i as Ve}from"./index.es36-e8d10e84.js";import{f as se,e as Q,l as g,t as Ce,o as k,I as U,C as G,A as xe,m as W,i as He,s as oe,N as qe,b as ce,p as Ye,d as Qe,c as M,r as Ke}from"./index.es74-f825366a.js";import{u as We,b as Le,M as T,a as I,c as R,d as P}from"./used-machine-locales-f263dd8e.js";import{U as Ze}from"./UsedMachineCard-d642b3a5.js";import{U as ye}from"./UsedMachineFilters-312aea46.js";import{B as Se,Z as Ne}from"./ZpsButton-5c2a76e8.js";import{L as Xe}from"./Layout-da978b47.js";import{L as C}from"./global-variants-893e06e6.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-0839fdbe.js";import"./UsedMachineDescription-4f5ab372.js";import"./index.es32-fbb642fb.js";import"./index.es16-0bcfc29a.js";import"./Slider-667a003e.js";import"./index.es24-551679ca.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";const Je=e=>{if(!e)return 0;const n=e.getBoundingClientRect().bottom;return window.innerHeight-n};function Re(e,n){let[t,r]=u.useState(e),o=se(e);return Q(()=>r(o.current),[o,r,...n]),t}function et(e,n,t){let[r,o]=u.useState(t),a=e!==void 0,i=u.useRef(a),l=u.useRef(!1),s=u.useRef(!1);return a&&!i.current&&!l.current?(l.current=!0,i.current=a,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!a&&i.current&&!s.current&&(s.current=!0,i.current=a,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[a?e:r,g(d=>(a||o(d),n==null?void 0:n(d)))]}function tt(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(n=>setTimeout(()=>{throw n}))}function K(){let e=[],n={addEventListener(t,r,o,a){return t.addEventListener(r,o,a),n.add(()=>t.removeEventListener(r,o,a))},requestAnimationFrame(...t){let r=requestAnimationFrame(...t);return n.add(()=>cancelAnimationFrame(r))},nextFrame(...t){return n.requestAnimationFrame(()=>n.requestAnimationFrame(...t))},setTimeout(...t){let r=setTimeout(...t);return n.add(()=>clearTimeout(r))},microTask(...t){let r={current:!0};return tt(()=>{r.current&&t[0]()}),n.add(()=>{r.current=!1})},style(t,r,o){let a=t.style.getPropertyValue(r);return Object.assign(t.style,{[r]:o}),this.add(()=>{Object.assign(t.style,{[r]:a})})},group(t){let r=K();return t(r),this.add(()=>r.dispose())},add(t){return e.push(t),()=>{let r=e.indexOf(t);if(r>=0)for(let o of e.splice(r,1))o()}},dispose(){for(let t of e.splice(0))t()}};return n}function ie(){let[e]=u.useState(K);return u.useEffect(()=>()=>e.dispose(),[e]),e}let Ee=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var rt=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(rt||{}),nt=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(nt||{}),at=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(at||{}),he=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(he||{});function Ie(e,n=0){var t;return e===((t=Ce(e))==null?void 0:t.body)?!1:k(n,{0(){return e.matches(Ee)},1(){let r=e;for(;r!==null;){if(r.matches(Ee))return!0;r=r.parentElement}return!1}})}var ot=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(ot||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function it(e,n=t=>t){return e.slice().sort((t,r)=>{let o=n(t),a=n(r);if(o===null||a===null)return 0;let i=o.compareDocumentPosition(a);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function lt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function st(){return/Android/gi.test(window.navigator.userAgent)}function ct(){return lt()||st()}function ne(e,n,t){let r=se(n);u.useEffect(()=>{function o(a){r.current(a)}return document.addEventListener(e,o,t),()=>document.removeEventListener(e,o,t)},[e,t])}function ut(e,n,t){let r=se(n);u.useEffect(()=>{function o(a){r.current(a)}return window.addEventListener(e,o,t),()=>window.removeEventListener(e,o,t)},[e,t])}function dt(e,n,t=!0){let r=u.useRef(!1);u.useEffect(()=>{requestAnimationFrame(()=>{r.current=t})},[t]);function o(i,l){if(!r.current||i.defaultPrevented)return;let s=l(i);if(s===null||!s.getRootNode().contains(s)||!s.isConnected)return;let d=function f(p){return typeof p=="function"?f(p()):Array.isArray(p)||p instanceof Set?p:[p]}(e);for(let f of d){if(f===null)continue;let p=f instanceof HTMLElement?f:f.current;if(p!=null&&p.contains(s)||i.composed&&i.composedPath().includes(p))return}return!Ie(s,he.Loose)&&s.tabIndex!==-1&&i.preventDefault(),n(i,s)}let a=u.useRef(null);ne("pointerdown",i=>{var l,s;r.current&&(a.current=((s=(l=i.composedPath)==null?void 0:l.call(i))==null?void 0:s[0])||i.target)},!0),ne("mousedown",i=>{var l,s;r.current&&(a.current=((s=(l=i.composedPath)==null?void 0:l.call(i))==null?void 0:s[0])||i.target)},!0),ne("click",i=>{ct()||a.current&&(o(i,()=>a.current),a.current=null)},!0),ne("touchend",i=>o(i,()=>i.target instanceof HTMLElement?i.target:null),!0),ut("blur",i=>o(i,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}let ze=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function Me(e){var n,t;let r=(n=e.innerText)!=null?n:"",o=e.cloneNode(!0);if(!(o instanceof HTMLElement))return r;let a=!1;for(let l of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))l.remove(),a=!0;let i=a?(t=o.innerText)!=null?t:"":r;return ze.test(i)&&(i=i.replace(ze,"")),i}function pt(e){let n=e.getAttribute("aria-label");if(typeof n=="string")return n.trim();let t=e.getAttribute("aria-labelledby");if(t){let r=t.split(" ").map(o=>{let a=document.getElementById(o);if(a){let i=a.getAttribute("aria-label");return typeof i=="string"?i.trim():Me(a).trim()}return null}).filter(Boolean);if(r.length>0)return r.join(", ")}return Me(e).trim()}function mt(e){let n=u.useRef(""),t=u.useRef("");return g(()=>{let r=e.current;if(!r)return"";let o=r.innerText;if(n.current===o)return t.current;let a=pt(r).trim().toLowerCase();return n.current=o,t.current=a,a})}function Oe(e){return[e.screenX,e.screenY]}function ft(){let e=u.useRef([-1,-1]);return{wasMoved(n){let t=Oe(n);return e.current[0]===t[0]&&e.current[1]===t[1]?!1:(e.current=t,!0)},update(n){e.current=Oe(n)}}}let ht="div";var Pe=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(Pe||{});function bt(e,n){var t;let{features:r=1,...o}=e,a={ref:n,"aria-hidden":(r&2)===2?!0:(t=o["aria-hidden"])!=null?t:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return G({ourProps:a,theirProps:o,slot:{},defaultTag:ht,name:"Hidden"})}let gt=U(bt);function vt(e){throw new Error("Unexpected object: "+e)}var L=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(L||{});function xt(e,n){let t=n.resolveItems();if(t.length<=0)return null;let r=n.resolveActiveIndex(),o=r??-1;switch(e.focus){case 0:{for(let a=0;a<t.length;++a)if(!n.resolveDisabled(t[a],a,t))return a;return r}case 1:{for(let a=o-1;a>=0;--a)if(!n.resolveDisabled(t[a],a,t))return a;return r}case 2:{for(let a=o+1;a<t.length;++a)if(!n.resolveDisabled(t[a],a,t))return a;return r}case 3:{for(let a=t.length-1;a>=0;--a)if(!n.resolveDisabled(t[a],a,t))return a;return r}case 4:{for(let a=0;a<t.length;++a)if(n.resolveId(t[a],a,t)===e.id)return a;return r}case 5:return null;default:vt(e)}}function je(e={},n=null,t=[]){for(let[r,o]of Object.entries(e))Fe(t,Ae(n,r),o);return t}function Ae(e,n){return e?e+"["+n+"]":n}function Fe(e,n,t){if(Array.isArray(t))for(let[r,o]of t.entries())Fe(e,Ae(n,r.toString()),o);else t instanceof Date?e.push([n,t.toISOString()]):typeof t=="boolean"?e.push([n,t?"1":"0"]):typeof t=="string"?e.push([n,t]):typeof t=="number"?e.push([n,`${t}`]):t==null?e.push([n,""]):je(t,n,e)}var yt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(yt||{}),St=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(St||{}),Nt=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Nt||{}),Et=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.GoToOption=2]="GoToOption",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterOption=5]="RegisterOption",e[e.UnregisterOption=6]="UnregisterOption",e[e.RegisterLabel=7]="RegisterLabel",e))(Et||{});function fe(e,n=t=>t){let t=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,r=it(n(e.options.slice()),a=>a.dataRef.current.domRef.current),o=t?r.indexOf(t):null;return o===-1&&(o=null),{options:r,activeOptionIndex:o}}let zt={1(e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},0(e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let n=e.activeOptionIndex,{isSelected:t}=e.dataRef.current,r=e.options.findIndex(o=>t(o.dataRef.current.value));return r!==-1&&(n=r),{...e,listboxState:0,activeOptionIndex:n}},2(e,n){var t;if(e.dataRef.current.disabled||e.listboxState===1)return e;let r=fe(e),o=xt(n,{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:a=>a.id,resolveDisabled:a=>a.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeOptionIndex:o,activationTrigger:(t=n.trigger)!=null?t:1}},3:(e,n)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let t=e.searchQuery!==""?0:1,r=e.searchQuery+n.value.toLowerCase(),o=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+t).concat(e.options.slice(0,e.activeOptionIndex+t)):e.options).find(i=>{var l;return!i.dataRef.current.disabled&&((l=i.dataRef.current.textValue)==null?void 0:l.startsWith(r))}),a=o?e.options.indexOf(o):-1;return a===-1||a===e.activeOptionIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeOptionIndex:a,activationTrigger:1}},4(e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},5:(e,n)=>{let t={id:n.id,dataRef:n.dataRef},r=fe(e,o=>[...o,t]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(n.dataRef.current.value)&&(r.activeOptionIndex=r.options.indexOf(t)),{...e,...r}},6:(e,n)=>{let t=fe(e,r=>{let o=r.findIndex(a=>a.id===n.id);return o!==-1&&r.splice(o,1),r});return{...e,...t,activationTrigger:1}},7:(e,n)=>({...e,labelId:n.id})},be=u.createContext(null);be.displayName="ListboxActionsContext";function Z(e){let n=u.useContext(be);if(n===null){let t=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Z),t}return n}let ge=u.createContext(null);ge.displayName="ListboxDataContext";function X(e){let n=u.useContext(ge);if(n===null){let t=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,X),t}return n}function Mt(e,n){return k(n.type,zt,e,n)}let Ot=u.Fragment;function Tt(e,n){let{value:t,defaultValue:r,form:o,name:a,onChange:i,by:l=(m,h)=>m===h,disabled:s=!1,horizontal:d=!1,multiple:f=!1,...p}=e;const E=d?"horizontal":"vertical";let w=W(n),[v=f?[]:void 0,y]=et(t,i,r),[b,c]=u.useReducer(Mt,{dataRef:u.createRef(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),N=u.useRef({static:!1,hold:!1}),j=u.useRef(null),F=u.useRef(null),_=u.useRef(null),z=g(typeof l=="string"?(m,h)=>{let D=l;return(m==null?void 0:m[D])===(h==null?void 0:h[D])}:l),A=u.useCallback(m=>k(x.mode,{1:()=>v.some(h=>z(h,m)),0:()=>z(v,m)}),[v]),x=u.useMemo(()=>({...b,value:v,disabled:s,mode:f?1:0,orientation:E,compare:z,isSelected:A,optionsPropsRef:N,labelRef:j,buttonRef:F,optionsRef:_}),[v,s,f,b]);Q(()=>{b.dataRef.current=x},[x]),dt([x.buttonRef,x.optionsRef],(m,h)=>{var D;c({type:1}),Ie(h,he.Loose)||(m.preventDefault(),(D=x.buttonRef.current)==null||D.focus())},x.listboxState===0);let ue=u.useMemo(()=>({open:x.listboxState===0,disabled:s,value:v}),[x,s,v]),J=g(m=>{let h=x.options.find(D=>D.id===m);h&&pe(h.dataRef.current.value)}),ee=g(()=>{if(x.activeOptionIndex!==null){let{dataRef:m,id:h}=x.options[x.activeOptionIndex];pe(m.current.value),c({type:2,focus:L.Specific,id:h})}}),te=g(()=>c({type:0})),B=g(()=>c({type:1})),V=g((m,h,D)=>m===L.Specific?c({type:2,focus:L.Specific,id:h,trigger:D}):c({type:2,focus:m,trigger:D})),de=g((m,h)=>(c({type:5,id:m,dataRef:h}),()=>c({type:6,id:m}))),$e=g(m=>(c({type:7,id:m}),()=>c({type:7,id:null}))),pe=g(m=>k(x.mode,{0(){return y==null?void 0:y(m)},1(){let h=x.value.slice(),D=h.findIndex(H=>z(H,m));return D===-1?h.push(m):h.splice(D,1),y==null?void 0:y(h)}})),ke=g(m=>c({type:3,value:m})),Be=g(()=>c({type:4})),Ue=u.useMemo(()=>({onChange:pe,registerOption:de,registerLabel:$e,goToOption:V,closeListbox:B,openListbox:te,selectActiveOption:ee,selectOption:J,search:ke,clearSearch:Be}),[]),Ge={ref:w},re=u.useRef(null),_e=ie();return u.useEffect(()=>{re.current&&r!==void 0&&_e.addEventListener(re.current,"reset",()=>{y==null||y(r)})},[re,y]),Y.createElement(be.Provider,{value:Ue},Y.createElement(ge.Provider,{value:x},Y.createElement(He,{value:k(x.listboxState,{0:oe.Open,1:oe.Closed})},a!=null&&v!=null&&je({[a]:v}).map(([m,h],D)=>Y.createElement(gt,{features:Pe.Hidden,ref:D===0?H=>{var ve;re.current=(ve=H==null?void 0:H.closest("form"))!=null?ve:null}:void 0,...qe({key:m,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:o,disabled:s,name:m,value:h})})),G({ourProps:Ge,theirProps:p,slot:ue,defaultTag:Ot,name:"Listbox"}))))}let wt="button";function Dt(e,n){var t;let r=ce(),{id:o=`headlessui-listbox-button-${r}`,...a}=e,i=X("Listbox.Button"),l=Z("Listbox.Button"),s=W(i.buttonRef,n),d=ie(),f=g(b=>{switch(b.key){case M.Space:case M.Enter:case M.ArrowDown:b.preventDefault(),l.openListbox(),d.nextFrame(()=>{i.value||l.goToOption(L.First)});break;case M.ArrowUp:b.preventDefault(),l.openListbox(),d.nextFrame(()=>{i.value||l.goToOption(L.Last)});break}}),p=g(b=>{switch(b.key){case M.Space:b.preventDefault();break}}),E=g(b=>{if(Ke(b.currentTarget))return b.preventDefault();i.listboxState===0?(l.closeListbox(),d.nextFrame(()=>{var c;return(c=i.buttonRef.current)==null?void 0:c.focus({preventScroll:!0})})):(b.preventDefault(),l.openListbox())}),w=Re(()=>{if(i.labelId)return[i.labelId,o].join(" ")},[i.labelId,o]),v=u.useMemo(()=>({open:i.listboxState===0,disabled:i.disabled,value:i.value}),[i]),y={ref:s,id:o,type:Ye(e,i.buttonRef),"aria-haspopup":"listbox","aria-controls":(t=i.optionsRef.current)==null?void 0:t.id,"aria-expanded":i.listboxState===0,"aria-labelledby":w,disabled:i.disabled,onKeyDown:f,onKeyUp:p,onClick:E};return G({ourProps:y,theirProps:a,slot:v,defaultTag:wt,name:"Listbox.Button"})}let Ct="label";function Lt(e,n){let t=ce(),{id:r=`headlessui-listbox-label-${t}`,...o}=e,a=X("Listbox.Label"),i=Z("Listbox.Label"),l=W(a.labelRef,n);Q(()=>i.registerLabel(r),[r]);let s=g(()=>{var f;return(f=a.buttonRef.current)==null?void 0:f.focus({preventScroll:!0})}),d=u.useMemo(()=>({open:a.listboxState===0,disabled:a.disabled}),[a]);return G({ourProps:{ref:l,id:r,onClick:s},theirProps:o,slot:d,defaultTag:Ct,name:"Listbox.Label"})}let Rt="ul",It=xe.RenderStrategy|xe.Static;function Pt(e,n){var t;let r=ce(),{id:o=`headlessui-listbox-options-${r}`,...a}=e,i=X("Listbox.Options"),l=Z("Listbox.Options"),s=W(i.optionsRef,n),d=ie(),f=ie(),p=Qe(),E=(()=>p!==null?(p&oe.Open)===oe.Open:i.listboxState===0)();u.useEffect(()=>{var c;let N=i.optionsRef.current;N&&i.listboxState===0&&N!==((c=Ce(N))==null?void 0:c.activeElement)&&N.focus({preventScroll:!0})},[i.listboxState,i.optionsRef]);let w=g(c=>{switch(f.dispose(),c.key){case M.Space:if(i.searchQuery!=="")return c.preventDefault(),c.stopPropagation(),l.search(c.key);case M.Enter:if(c.preventDefault(),c.stopPropagation(),i.activeOptionIndex!==null){let{dataRef:N}=i.options[i.activeOptionIndex];l.onChange(N.current.value)}i.mode===0&&(l.closeListbox(),K().nextFrame(()=>{var N;return(N=i.buttonRef.current)==null?void 0:N.focus({preventScroll:!0})}));break;case k(i.orientation,{vertical:M.ArrowDown,horizontal:M.ArrowRight}):return c.preventDefault(),c.stopPropagation(),l.goToOption(L.Next);case k(i.orientation,{vertical:M.ArrowUp,horizontal:M.ArrowLeft}):return c.preventDefault(),c.stopPropagation(),l.goToOption(L.Previous);case M.Home:case M.PageUp:return c.preventDefault(),c.stopPropagation(),l.goToOption(L.First);case M.End:case M.PageDown:return c.preventDefault(),c.stopPropagation(),l.goToOption(L.Last);case M.Escape:return c.preventDefault(),c.stopPropagation(),l.closeListbox(),d.nextFrame(()=>{var N;return(N=i.buttonRef.current)==null?void 0:N.focus({preventScroll:!0})});case M.Tab:c.preventDefault(),c.stopPropagation();break;default:c.key.length===1&&(l.search(c.key),f.setTimeout(()=>l.clearSearch(),350));break}}),v=Re(()=>{var c;return(c=i.buttonRef.current)==null?void 0:c.id},[i.buttonRef.current]),y=u.useMemo(()=>({open:i.listboxState===0}),[i]),b={"aria-activedescendant":i.activeOptionIndex===null||(t=i.options[i.activeOptionIndex])==null?void 0:t.id,"aria-multiselectable":i.mode===1?!0:void 0,"aria-labelledby":v,"aria-orientation":i.orientation,id:o,onKeyDown:w,role:"listbox",tabIndex:0,ref:s};return G({ourProps:b,theirProps:a,slot:y,defaultTag:Rt,features:It,visible:E,name:"Listbox.Options"})}let jt="li";function At(e,n){let t=ce(),{id:r=`headlessui-listbox-option-${t}`,disabled:o=!1,value:a,...i}=e,l=X("Listbox.Option"),s=Z("Listbox.Option"),d=l.activeOptionIndex!==null?l.options[l.activeOptionIndex].id===r:!1,f=l.isSelected(a),p=u.useRef(null),E=mt(p),w=se({disabled:o,value:a,domRef:p,get textValue(){return E()}}),v=W(n,p);Q(()=>{if(l.listboxState!==0||!d||l.activationTrigger===0)return;let z=K();return z.requestAnimationFrame(()=>{var A,x;(x=(A=p.current)==null?void 0:A.scrollIntoView)==null||x.call(A,{block:"nearest"})}),z.dispose},[p,d,l.listboxState,l.activationTrigger,l.activeOptionIndex]),Q(()=>s.registerOption(r,w),[w,r]);let y=g(z=>{if(o)return z.preventDefault();s.onChange(a),l.mode===0&&(s.closeListbox(),K().nextFrame(()=>{var A;return(A=l.buttonRef.current)==null?void 0:A.focus({preventScroll:!0})}))}),b=g(()=>{if(o)return s.goToOption(L.Nothing);s.goToOption(L.Specific,r)}),c=ft(),N=g(z=>c.update(z)),j=g(z=>{c.wasMoved(z)&&(o||d||s.goToOption(L.Specific,r,0))}),F=g(z=>{c.wasMoved(z)&&(o||d&&s.goToOption(L.Nothing))}),_=u.useMemo(()=>({active:d,selected:f,disabled:o}),[d,f,o]);return G({ourProps:{id:r,ref:v,role:"option",tabIndex:o===!0?void 0:-1,"aria-disabled":o===!0?!0:void 0,"aria-selected":f,disabled:void 0,onClick:y,onFocus:b,onPointerEnter:N,onMouseEnter:N,onPointerMove:j,onMouseMove:j,onPointerLeave:F,onMouseLeave:F},theirProps:i,slot:_,defaultTag:jt,name:"Listbox.Option"})}let Ft=U(Tt),$t=U(Dt),kt=U(Lt),Bt=U(Pt),Ut=U(At),q=Object.assign(Ft,{Button:$t,Label:kt,Options:Bt,Option:Ut});const Gt=268,_t=(e,n)=>$("zep-flex zep-w-full zep-items-center zep-justify-between zep-bg-background-light zep-px-1 zep-py-0.75",{"zep-bg-greyscale-200":e},{"zep-bg-greyscale-300":n},{"zep-pr-3":n}),Vt=u.forwardRef(({disabled:e=!1,items:n,message:t,label:r,placeholder:o,required:a,notRequiredHint:i="(optional)",readOnly:l=!1,state:s="default",...d},f)=>{const[p,E]=u.useState(null),w=Y.useRef(null),v=u.useMemo(()=>s==="error",[s]),y=u.useMemo(()=>s==="info",[s]),b=u.useMemo(()=>e||l,[e,l]),c=u.useMemo(()=>v?"zep-text-error":y?"zep-text-info":"",[v,y]),N=j=>{d!=null&&d.onChange&&(d==null||d.onChange(j)),E(j)};return S.jsxs("div",{className:Ve($("zep-relative","zep-inline-block","zep-text-left","zep-w-full",{"zep-cursor-not-allowed zep-opacity-disabled":e},d.className)),"data-testid":"zep-drop-down",children:[S.jsx(q,{disabled:b,...d,onChange:N,value:(d==null?void 0:d.value)||p,ref:f,children:({open:j})=>{var J,ee,te;const F=Je(w.current)<Gt,_=l?void 0:o,z=((J=d==null?void 0:d.value)==null?void 0:J.name)||(p==null?void 0:p.name)||_,A=$("zep-bg-background-light","zep-inline-flex","zep-justify-between","zep-border-solid","zep-pl-1","zep-pr-0.75","zep-py-0.75","zep-font-roboto","zep-w-full","zep-outline-none",{"zep-text-opacity-disabled":e,"zep-text-typography-dark-100/70":!((ee=d==null?void 0:d.value)!=null&&ee.name||p!=null&&p.name||l)&&!e,"zep-text-typography-dark-100":(((te=d==null?void 0:d.value)==null?void 0:te.name)||(p==null?void 0:p.name)||l)&&!e,"zep-bg-background-medium":l,"zep-ring":j,"zep-active:zep-ring zep-ring-focus zep-ring-offset-1 focus-visible:zep-ring":!b,"zep-cursor-not-allowed":b,"zep-border-2 zep-border-error":v,"zep-border-1 zep-border-neutral-dark-default":!v}),x=$("zep-absolute","zep-shadow-[0_0_4px_rgba(0,0,0,0.24)]","zep-py-0.25","zep-z-10","zep-w-full","zep-max-h-[268px]","zep-origin-top-right","zep-rounded-4","zep-bg-background-light","focus:zep-outline-none","zep-overflow-hidden","zep-overflow-y-auto",{"zep-bottom-full zep-mb-[-25px]":F,"zep-mt-0.25":!F}),ue=$("zep-shrink-0","zep-transition-transform","zep-duration-300",{"zep-rotate-180":j,"zep-text-opacity-disabled":b,"zep-text-typography-dark-100":!b});return S.jsxs(S.Fragment,{children:[r&&S.jsxs(q.Label,{className:$("zep-block","zep-mb-0.5",{"zep-text-opacity-disabled":e}),children:[r,!a&&S.jsx("span",{className:"zep-ml-0.25",children:i})]}),S.jsx(q.Button,{className:A,ref:w,title:z,"data-testid":"zep-drop-down-button",children:S.jsxs(S.Fragment,{children:[S.jsx("span",{className:"zep-truncate",children:z}),S.jsx(me,{className:ue,name:"chevron-mini-down",role:"img",size:24})]})}),S.jsx(q.Options,{className:x,"data-testid":"zep-drop-down-menu",children:n.map(B=>S.jsx(q.Option,{value:B,title:B.name,className:({active:V,selected:de})=>_t(V,de),children:({selected:V})=>S.jsxs(S.Fragment,{children:[S.jsx("span",{className:"zep-truncate",children:B.name}),V&&S.jsx(me,{name:"check",role:"img",size:24,className:"zep-absolute zep-right-1"})]})},B.id))})]})}}),t&&S.jsxs("div",{className:$("zep-mt-0.25",{"zep-text-typography-dark-100":!v&&!y},"zep-text-0.875","zep-flex",c),children:[s!=="default"&&S.jsx(me,{name:v?"warning-triangle-filled":"info-circle-filled",role:"img",size:24,className:"zep-mr-0.5 zep-shrink-0"}),S.jsx("span",{className:"zep-mt-0.125",children:t})]})]})}),le=({setFilters:e,locale:n,filters:t,powerOptions:r,cards:o,total:a,currentTotal:i,setCurrentTotal:l})=>{const s=u.useMemo(()=>We[n],[n]),d=Object.values(Le).map(E=>({id:E,name:s[E]})),f=E=>{e(w=>({...w,sort:E.id}))},p=()=>{l(E=>E+10)};return O.jsxDEV(Xe,{testId:"zep-used-machine-pattern",className:"md:zep-flex xl:zep-gap-5 md:zep-gap-3 zep-py-3 sm:zep-py-4 md:zep-py-5",wrapperClassname:"zep-bg-greyscale-200",children:[O.jsxDEV(ye,{className:"zep-hidden md:zep-flex",setFilters:e,locale:n,filters:t,powerOptions:r},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:37,columnNumber:7},globalThis),O.jsxDEV("div",{className:"zep-grow zep-flex zep-flex-col zep-gap-2",children:[O.jsxDEV("div",{className:"zep-flex zep-w-full zep-justify-between md:zep-items-end zep-items-center zep-text-primary-default",children:[O.jsxDEV("span",{className:"zep-typography-bodyStrong",children:`${a} ${s.results}`},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:48,columnNumber:11},globalThis),O.jsxDEV(ye,{className:"md:zep-hidden",setFilters:e,locale:n,filters:t,powerOptions:r},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:49,columnNumber:11},globalThis),O.jsxDEV(Vt,{label:s.sortBy,required:!0,className:"!zep-w-[334px] zep-hidden md:zep-block",items:d,placeholder:s.sortBy,onChange:f,value:{id:t.sort?t.sort:"",name:t.sort?s[t.sort]:s.sortBy}},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:56,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:45,columnNumber:9},globalThis),a>0?o.map((E,w)=>O.jsxDEV(Ze,{...E},w,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:67,columnNumber:11},globalThis)):O.jsxDEV("div",{className:"zep-flex zep-flex-col zep-gap-3",children:[O.jsxDEV("div",{className:"zep-text-primary-default zep-flex zep-flex-col zep-gap-2.5",children:[O.jsxDEV("h3",{className:"zep-typography-headlineLG-fluid-cqi",children:s.zeroResultsFoundTitle},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:71,columnNumber:15},globalThis),O.jsxDEV("p",{className:"zep-typography-bodyText",children:s.zeroResultsFoundDescription},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:72,columnNumber:15},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:70,columnNumber:13},globalThis),O.jsxDEV(Se,{className:"sm:!zep-w-fit",variant:Ne.Primary,children:s.contactExperts},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:74,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:69,columnNumber:11},globalThis),i<a&&O.jsxDEV(Se,{className:"sm:!zep-w-fit zep-self-center",variant:Ne.SecondaryZps,onClick:p,children:s.loadMore},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:79,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:44,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:32,columnNumber:5},globalThis)};try{le.displayName="UsedMachinePattern",le.__docgenInfo={description:"",displayName:"UsedMachinePattern",props:{cards:{defaultValue:null,description:"",name:"cards",required:!0,type:{name:"UsedMachineCardProps[]"}},total:{defaultValue:null,description:"",name:"total",required:!0,type:{name:"number"}},currentTotal:{defaultValue:null,description:"",name:"currentTotal",required:!0,type:{name:"number"}},setCurrentTotal:{defaultValue:null,description:"",name:"setCurrentTotal",required:!0,type:{name:"Dispatch<SetStateAction<number>>"}},setFilters:{defaultValue:null,description:"",name:"setFilters",required:!0,type:{name:"Dispatch<SetStateAction<UsedMachineFiltersType>>"}},locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"enum",value:[{value:'"en"'},{value:'"de"'},{value:'"de-AT"'}]}},filters:{defaultValue:null,description:"",name:"filters",required:!0,type:{name:"UsedMachineFiltersType"}},powerOptions:{defaultValue:null,description:"",name:"powerOptions",required:!1,type:{name:'Omit<SliderProps, "label" | "value">'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Ht=[{isMarine:!0,category:T.GEN_SET,locale:C.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:I.STAND_BY,fuel:R.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:P.MOBILE},{isMarine:!0,category:T.GEN_SET,locale:C.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:I.CONTINUOUS,fuel:R.GAS,power:2e3,name:"Gen Set Machine 2",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:P.STATIONARY},{isMarine:!0,category:T.ENGINE,locale:C.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,fuel:R.DIESEL,power:2e3,name:"Engine Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61"},{category:T.GEN_SET,locale:C.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:I.PRIME,fuel:R.DUAL_FUEL,power:3e3,name:"Gen Set Machine 3",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:P.MOBILE},{isMarine:!0,category:T.GEN_SET,locale:C.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,fuel:R.DIESEL,power:4e3,rating:I.CONTINUOUS,name:"Gen Set Machine 4",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:P.STATIONARY},{category:T.ACCESSORY,locale:C.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,name:"Accessory",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61"},{isMarine:!0,category:T.GEN_SET,locale:C.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:I.STAND_BY,fuel:R.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:P.MOBILE},{isMarine:!0,category:T.GEN_SET,locale:C.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:I.STAND_BY,fuel:R.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:P.MOBILE},{isMarine:!0,category:T.GEN_SET,locale:C.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:I.STAND_BY,fuel:R.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:P.MOBILE},{isMarine:!0,category:T.GEN_SET,locale:C.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:I.STAND_BY,fuel:R.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:P.MOBILE},{isMarine:!0,category:T.GEN_SET,locale:C.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:I.STAND_BY,fuel:R.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:P.MOBILE},{isMarine:!0,category:T.GEN_SET,locale:C.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:I.STAND_BY,fuel:R.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:P.MOBILE},{isMarine:!0,category:T.GEN_SET,locale:C.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:I.STAND_BY,fuel:R.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:P.MOBILE}],qt=(e,n)=>{let t=Ht.filter(({category:o})=>o===e.category);e.category!==T.ACCESSORY&&(e.rating&&e.rating.length>0&&(t=t.filter(({rating:o})=>{var a;return o&&((a=e.rating)==null?void 0:a.includes(o))})),e.fuel&&e.fuel.length>0&&(t=t.filter(({fuel:o})=>{var a;return o&&((a=e.fuel)==null?void 0:a.includes(o))})),e.type&&e.category===T.GEN_SET&&e.type.length>0&&(t=t.filter(({type:o})=>{var a;return o&&((a=e.type)==null?void 0:a.includes(o))})),e.power&&(t=t.filter(({power:o})=>o&&o>=e.power.min&&o<=e.power.max))),e.sort&&(e.sort===Le.POWER_ASCENDING?t=t.sort(({power:o=0},{power:a=0})=>o-a):t=t.sort(({power:o=0},{power:a=0})=>a-o));const r=t.length;return t=t.slice(0,n),{cards:t,total:r}},br={title:"Patterns/UsedMachinePattern",component:le,tags:["autodocs"],argTypes:{},decorators:[e=>{const[n,t]=u.useState({category:T.GEN_SET,power:{min:100,max:1e4},type:[],sort:void 0,rating:[],fuel:[]}),[r,o]=u.useState(10),{cards:a,total:i}=u.useMemo(()=>qt(n,r),[n,r]);return O.jsxDEV(e,{cards:a,total:i,filters:n,setFilters:t,setCurrentTotal:o,currentTotal:r},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.stories.tsx",lineNumber:258,columnNumber:9},globalThis)}]},ae={args:{locale:C.DE,powerOptions:{min:100,max:1e4,step:1}},render:(e,{filters:n,currentTotal:t,setFilters:r,cards:o,total:a,setCurrentTotal:i})=>O.jsxDEV(le,{setCurrentTotal:i,currentTotal:t,total:a,cards:o,powerOptions:e.powerOptions,setFilters:r,locale:e.locale,filters:n},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.stories.tsx",lineNumber:284,columnNumber:5},globalThis)};var Te,we,De;ae.parameters={...ae.parameters,docs:{...(Te=ae.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(De=(we=ae.parameters)==null?void 0:we.docs)==null?void 0:De.source}}};const gr=["Default"];export{ae as Default,gr as __namedExportsOrder,br as default};
