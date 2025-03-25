import{n as C,d as oe,T as pe,F as be,I as xe,g as _e}from"./DocsRenderer-NNNQARDV-53912bb8.js";import{R as c,r as m}from"./index-b1e7e93e.js";import{c as _}from"./index-03bbf7d1.js";import{g as Ee}from"./_commonjsHelpers-de833af9.js";import{_ as we,i as G}from"./_baseIsEqual-0d239887.js";import{i as ye}from"./_getPrototype-d0cd0f0a.js";import"./iframe-b0ef0df9.js";import"../sb-preview/runtime.js";import"./react-18-79c62aee.js";import"./index-1b441bc2.js";import"./index-356e4a49.js";function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function K(e,t){if(e==null)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(a[r]=e[r]);return a}function X(e){var t=m.useRef(e),r=m.useRef(function(n){t.current&&t.current(n)});return t.current=e,r.current}var S=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=1),e>r?r:e<t?t:e},T=function(e){return"touches"in e},F=function(e){return e&&e.ownerDocument.defaultView||self},J=function(e,t,r){var n=e.getBoundingClientRect(),a=T(t)?function(i,l){for(var o=0;o<i.length;o++)if(i[o].identifier===l)return i[o];return i[0]}(t.touches,r):t;return{left:S((a.pageX-(n.left+F(e).pageXOffset))/n.width),top:S((a.pageY-(n.top+F(e).pageYOffset))/n.height)}},Q=function(e){!T(e)&&e.preventDefault()},q=c.memo(function(e){var t=e.onMove,r=e.onKey,n=K(e,["onMove","onKey"]),a=m.useRef(null),i=X(t),l=X(r),o=m.useRef(null),u=m.useRef(!1),s=m.useMemo(function(){var E=function(p){Q(p),(T(p)?p.touches.length>0:p.buttons>0)&&a.current?i(J(a.current,p,o.current)):w(!1)},N=function(){return w(!1)};function w(p){var h=u.current,x=F(a.current),$=p?x.addEventListener:x.removeEventListener;$(h?"touchmove":"mousemove",E),$(h?"touchend":"mouseup",N)}return[function(p){var h=p.nativeEvent,x=a.current;if(x&&(Q(h),!function(B,M){return M&&!T(B)}(h,u.current)&&x)){if(T(h)){u.current=!0;var $=h.changedTouches||[];$.length&&(o.current=$[0].identifier)}x.focus(),i(J(x,h,o.current)),w(!0)}},function(p){var h=p.which||p.keyCode;h<37||h>40||(p.preventDefault(),l({left:h===39?.05:h===37?-.05:0,top:h===40?.05:h===38?-.05:0}))},w]},[l,i]),g=s[0],d=s[1],f=s[2];return m.useEffect(function(){return f},[f]),c.createElement("div",k({},n,{onTouchStart:g,onMouseDown:g,className:"react-colorful__interactive",ref:a,onKeyDown:d,tabIndex:0,role:"slider"}))}),O=function(e){return e.filter(Boolean).join(" ")},U=function(e){var t=e.color,r=e.left,n=e.top,a=n===void 0?.5:n,i=O(["react-colorful__pointer",e.className]);return c.createElement("div",{className:i,style:{top:100*a+"%",left:100*r+"%"}},c.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},b=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=Math.pow(10,t)),Math.round(r*e)/r},Ce={grad:.9,turn:360,rad:360/(2*Math.PI)},$e=function(e){return ue(D(e))},D=function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?b(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?b(parseInt(e.substring(6,8),16)/255,2):1}},ke=function(e,t){return t===void 0&&(t="deg"),Number(e)*(Ce[t]||1)},Ne=function(e){var t=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?Ie({h:ke(t[1],t[2]),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)}):{h:0,s:0,v:0,a:1}},Ie=function(e){var t=e.s,r=e.l;return{h:e.h,s:(t*=(r<50?r:100-r)/100)>0?2*t/(r+t)*100:0,v:r+t,a:e.a}},Se=function(e){return Re(le(e))},ie=function(e){var t=e.s,r=e.v,n=e.a,a=(200-t)*r/100;return{h:b(e.h),s:b(a>0&&a<200?t*r/100/(a<=100?a:200-a)*100:0),l:b(a/2),a:b(n,2)}},V=function(e){var t=ie(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},z=function(e){var t=ie(e);return"hsla("+t.h+", "+t.s+"%, "+t.l+"%, "+t.a+")"},le=function(e){var t=e.h,r=e.s,n=e.v,a=e.a;t=t/360*6,r/=100,n/=100;var i=Math.floor(t),l=n*(1-r),o=n*(1-(t-i)*r),u=n*(1-(1-t+i)*r),s=i%6;return{r:b(255*[n,o,l,l,u,n][s]),g:b(255*[u,n,n,o,l,l][s]),b:b(255*[l,l,u,n,n,o][s]),a:b(a,2)}},Me=function(e){var t=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?ue({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):{h:0,s:0,v:0,a:1}},H=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},Re=function(e){var t=e.r,r=e.g,n=e.b,a=e.a,i=a<1?H(b(255*a)):"";return"#"+H(t)+H(r)+H(n)+i},ue=function(e){var t=e.r,r=e.g,n=e.b,a=e.a,i=Math.max(t,r,n),l=i-Math.min(t,r,n),o=l?i===t?(r-n)/l:i===r?2+(n-t)/l:4+(t-r)/l:0;return{h:b(60*(o<0?o+6:o)),s:b(i?l/i*100:0),v:b(i/255*100),a}},se=c.memo(function(e){var t=e.hue,r=e.onChange,n=O(["react-colorful__hue",e.className]);return c.createElement("div",{className:n},c.createElement(q,{onMove:function(a){r({h:360*a.left})},onKey:function(a){r({h:S(t+360*a.left,0,360)})},"aria-label":"Hue","aria-valuenow":b(t),"aria-valuemax":"360","aria-valuemin":"0"},c.createElement(U,{className:"react-colorful__hue-pointer",left:t/360,color:V({h:t,s:100,v:100,a:1})})))}),ce=c.memo(function(e){var t=e.hsva,r=e.onChange,n={backgroundColor:V({h:t.h,s:100,v:100,a:1})};return c.createElement("div",{className:"react-colorful__saturation",style:n},c.createElement(q,{onMove:function(a){r({s:100*a.left,v:100-100*a.top})},onKey:function(a){r({s:S(t.s+100*a.left,0,100),v:S(t.v-100*a.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+b(t.s)+"%, Brightness "+b(t.v)+"%"},c.createElement(U,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:V(t)})))}),fe=function(e,t){if(e===t)return!0;for(var r in e)if(e[r]!==t[r])return!1;return!0},de=function(e,t){return e.replace(/\s/g,"")===t.replace(/\s/g,"")},Te=function(e,t){return e.toLowerCase()===t.toLowerCase()||fe(D(e),D(t))};function he(e,t,r){var n=X(r),a=m.useState(function(){return e.toHsva(t)}),i=a[0],l=a[1],o=m.useRef({color:t,hsva:i});m.useEffect(function(){if(!e.equal(t,o.current.color)){var s=e.toHsva(t);o.current={hsva:s,color:t},l(s)}},[t,e]),m.useEffect(function(){var s;fe(i,o.current.hsva)||e.equal(s=e.fromHsva(i),o.current.color)||(o.current={hsva:i,color:s},n(s))},[i,e,n]);var u=m.useCallback(function(s){l(function(g){return Object.assign({},g,s)})},[]);return[i,u]}var Oe=typeof window<"u"?m.useLayoutEffect:m.useEffect,He=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},Z=new Map,me=function(e){Oe(function(){var t=e.current?e.current.ownerDocument:document;if(t!==void 0&&!Z.has(t)){var r=t.createElement("style");r.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,Z.set(t,r);var n=He();n&&r.setAttribute("nonce",n),t.head.appendChild(r)}},[])},Le=function(e){var t=e.className,r=e.colorModel,n=e.color,a=n===void 0?r.defaultColor:n,i=e.onChange,l=K(e,["className","colorModel","color","onChange"]),o=m.useRef(null);me(o);var u=he(r,a,i),s=u[0],g=u[1],d=O(["react-colorful",t]);return c.createElement("div",k({},l,{ref:o,className:d}),c.createElement(ce,{hsva:s,onChange:g}),c.createElement(se,{hue:s.h,onChange:g,className:"react-colorful__last-control"}))},Pe={defaultColor:"000",toHsva:$e,fromHsva:function(e){return Se({h:e.h,s:e.s,v:e.v,a:1})},equal:Te},ze=function(e){return c.createElement(Le,k({},e,{colorModel:Pe}))},je=function(e){var t=e.className,r=e.hsva,n=e.onChange,a={backgroundImage:"linear-gradient(90deg, "+z(Object.assign({},r,{a:0}))+", "+z(Object.assign({},r,{a:1}))+")"},i=O(["react-colorful__alpha",t]),l=b(100*r.a);return c.createElement("div",{className:i},c.createElement("div",{className:"react-colorful__alpha-gradient",style:a}),c.createElement(q,{onMove:function(o){n({a:o.left})},onKey:function(o){n({a:S(r.a+o.left)})},"aria-label":"Alpha","aria-valuetext":l+"%","aria-valuenow":l,"aria-valuemin":"0","aria-valuemax":"100"},c.createElement(U,{className:"react-colorful__alpha-pointer",left:r.a,color:z(r)})))},ge=function(e){var t=e.className,r=e.colorModel,n=e.color,a=n===void 0?r.defaultColor:n,i=e.onChange,l=K(e,["className","colorModel","color","onChange"]),o=m.useRef(null);me(o);var u=he(r,a,i),s=u[0],g=u[1],d=O(["react-colorful",t]);return c.createElement("div",k({},l,{ref:o,className:d}),c.createElement(ce,{hsva:s,onChange:g}),c.createElement(se,{hue:s.h,onChange:g}),c.createElement(je,{hsva:s,onChange:g,className:"react-colorful__last-control"}))},Be={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:Ne,fromHsva:z,equal:de},We=function(e){return c.createElement(ge,k({},e,{colorModel:Be}))},Xe={defaultColor:"rgba(0, 0, 0, 1)",toHsva:Me,fromHsva:function(e){var t=le(e);return"rgba("+t.r+", "+t.g+", "+t.b+", "+t.a+")"},equal:de},Fe=function(e){return c.createElement(ge,k({},e,{colorModel:Xe}))},De=we,Ve=function(){return De.Date.now()},Ae=Ve,Ge=/\s/;function Ke(e){for(var t=e.length;t--&&Ge.test(e.charAt(t)););return t}var qe=Ke,Ue=qe,Ye=/^\s+/;function Je(e){return e&&e.slice(0,Ue(e)+1).replace(Ye,"")}var Qe=Je,Ze=Qe,ee=G,et=ye,te=0/0,tt=/^[-+]0x[0-9a-f]+$/i,rt=/^0b[01]+$/i,nt=/^0o[0-7]+$/i,at=parseInt;function ot(e){if(typeof e=="number")return e;if(et(e))return te;if(ee(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ee(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Ze(e);var r=rt.test(e);return r||nt.test(e)?at(e.slice(2),r?2:8):tt.test(e)?te:+e}var it=ot,lt=G,W=Ae,re=it,ut="Expected a function",st=Math.max,ct=Math.min;function ft(e,t,r){var n,a,i,l,o,u,s=0,g=!1,d=!1,f=!0;if(typeof e!="function")throw new TypeError(ut);t=re(t)||0,lt(r)&&(g=!!r.leading,d="maxWait"in r,i=d?st(re(r.maxWait)||0,t):i,f="trailing"in r?!!r.trailing:f);function E(v){var y=n,R=a;return n=a=void 0,s=v,l=e.apply(R,y),l}function N(v){return s=v,o=setTimeout(h,t),g?E(v):l}function w(v){var y=v-u,R=v-s,Y=t-y;return d?ct(Y,i-R):Y}function p(v){var y=v-u,R=v-s;return u===void 0||y>=t||y<0||d&&R>=i}function h(){var v=W();if(p(v))return x(v);o=setTimeout(h,w(v))}function x(v){return o=void 0,f&&n?E(v):(n=a=void 0,l)}function $(){o!==void 0&&clearTimeout(o),s=0,n=u=a=o=void 0}function B(){return o===void 0?l:x(W())}function M(){var v=W(),y=p(v);if(n=arguments,a=this,u=v,y){if(o===void 0)return N(u);if(d)return clearTimeout(o),o=setTimeout(h,t),E(u)}return o===void 0&&(o=setTimeout(h,t)),l}return M.cancel=$,M.flush=B,M}var dt=ft,ht=dt,mt=G,gt="Expected a function";function vt(e,t,r){var n=!0,a=!0;if(typeof e!="function")throw new TypeError(gt);return mt(r)&&(n="leading"in r?!!r.leading:n,a="trailing"in r?!!r.trailing:a),ht(e,t,{leading:n,maxWait:t,trailing:a})}var pt=vt;const bt=Ee(pt);var xt=C.div({position:"relative",maxWidth:250}),_t=C(oe)({position:"absolute",zIndex:1,top:4,left:4}),Et=C.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),wt=C(pe)(({theme:e})=>({fontFamily:e.typography.fonts.base})),yt=C.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),Ct=C.div(({theme:e,active:t})=>({width:16,height:16,boxShadow:t?`${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`:`${e.appBorderColor} 0 0 0 1px inset`,borderRadius:e.appBorderRadius})),$t=`url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,ne=({value:e,active:t,onClick:r,style:n,...a})=>{let i=`linear-gradient(${e}, ${e}), ${$t}, linear-gradient(#fff, #fff)`;return c.createElement(Ct,{...a,active:t,onClick:r,style:{...n,backgroundImage:i}})},kt=C(be.Input)(({theme:e})=>({width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:e.typography.fonts.base})),Nt=C(xe)(({theme:e})=>({position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:e.input.color})),ve=(e=>(e.RGB="rgb",e.HSL="hsl",e.HEX="hex",e))(ve||{}),L=Object.values(ve),It=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,St=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,Mt=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,A=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,Rt=/^\s*#?([0-9a-f]{3})\s*$/i,Tt={hex:ze,rgb:Fe,hsl:We},P={hex:"transparent",rgb:"rgba(0, 0, 0, 0)",hsl:"hsla(0, 0%, 0%, 0)"},ae=e=>{let t=e==null?void 0:e.match(It);if(!t)return[0,0,0,1];let[,r,n,a,i=1]=t;return[r,n,a,i].map(Number)},I=e=>{if(!e)return;let t=!0;if(St.test(e)){let[l,o,u,s]=ae(e),[g,d,f]=_.rgb.hsl([l,o,u])||[0,0,0];return{valid:t,value:e,keyword:_.rgb.keyword([l,o,u]),colorSpace:"rgb",rgb:e,hsl:`hsla(${g}, ${d}%, ${f}%, ${s})`,hex:`#${_.rgb.hex([l,o,u]).toLowerCase()}`}}if(Mt.test(e)){let[l,o,u,s]=ae(e),[g,d,f]=_.hsl.rgb([l,o,u])||[0,0,0];return{valid:t,value:e,keyword:_.hsl.keyword([l,o,u]),colorSpace:"hsl",rgb:`rgba(${g}, ${d}, ${f}, ${s})`,hsl:e,hex:`#${_.hsl.hex([l,o,u]).toLowerCase()}`}}let r=e.replace("#",""),n=_.keyword.rgb(r)||_.hex.rgb(r),a=_.rgb.hsl(n),i=e;if(/[^#a-f0-9]/i.test(e)?i=r:A.test(e)&&(i=`#${r}`),i.startsWith("#"))t=A.test(i);else try{_.keyword.hex(i)}catch{t=!1}return{valid:t,value:i,keyword:_.rgb.keyword(n),colorSpace:"hex",rgb:`rgba(${n[0]}, ${n[1]}, ${n[2]}, 1)`,hsl:`hsla(${a[0]}, ${a[1]}%, ${a[2]}%, 1)`,hex:i}},Ot=(e,t,r)=>{if(!e||!(t!=null&&t.valid))return P[r];if(r!=="hex")return(t==null?void 0:t[r])||P[r];if(!t.hex.startsWith("#"))try{return`#${_.keyword.hex(t.hex)}`}catch{return P.hex}let n=t.hex.match(Rt);if(!n)return A.test(t.hex)?t.hex:P.hex;let[a,i,l]=n[1].split("");return`#${a}${a}${i}${i}${l}${l}`},Ht=(e,t)=>{let[r,n]=m.useState(e||""),[a,i]=m.useState(()=>I(r)),[l,o]=m.useState((a==null?void 0:a.colorSpace)||"hex");m.useEffect(()=>{let d=e||"",f=I(d);n(d),i(f),o((f==null?void 0:f.colorSpace)||"hex")},[e]);let u=m.useMemo(()=>Ot(r,a,l).toLowerCase(),[r,a,l]),s=m.useCallback(d=>{let f=I(d),E=(f==null?void 0:f.value)||d||"";n(E),E===""&&(i(void 0),t(void 0)),f&&(i(f),o(f.colorSpace),t(f.value))},[t]),g=m.useCallback(()=>{let d=L.indexOf(l)+1;d>=L.length&&(d=0),o(L[d]);let f=(a==null?void 0:a[L[d]])||"";n(f),t(f)},[a,l,t]);return{value:r,realValue:u,updateValue:s,color:a,colorSpace:l,cycleColorSpace:g}},j=e=>e.replace(/\s*/,"").toLowerCase(),Lt=(e,t,r)=>{let[n,a]=m.useState(t!=null&&t.valid?[t]:[]);m.useEffect(()=>{t===void 0&&a([])},[t]);let i=m.useMemo(()=>(e||[]).map(o=>typeof o=="string"?I(o):o.title?{...I(o.color),keyword:o.title}:I(o.color)).concat(n).filter(Boolean).slice(-27),[e,n]),l=m.useCallback(o=>{o!=null&&o.valid&&(i.some(u=>j(u[r])===j(o[r]))||a(u=>u.concat(o)))},[r,i]);return{presets:i,addPreset:l}},Pt=({name:e,value:t,onChange:r,onFocus:n,onBlur:a,presetColors:i,startOpen:l=!1})=>{let o=m.useCallback(bt(r,200),[r]),{value:u,realValue:s,updateValue:g,color:d,colorSpace:f,cycleColorSpace:E}=Ht(t,o),{presets:N,addPreset:w}=Lt(i,d,f),p=Tt[f];return c.createElement(xt,null,c.createElement(_t,{startOpen:l,closeOnOutsideClick:!0,onVisibleChange:()=>w(d),tooltip:c.createElement(Et,null,c.createElement(p,{color:s==="transparent"?"#000000":s,onChange:g,onFocus:n,onBlur:a}),N.length>0&&c.createElement(yt,null,N.map((h,x)=>c.createElement(oe,{key:`${h.value}-${x}`,hasChrome:!1,tooltip:c.createElement(wt,{note:h.keyword||h.value})},c.createElement(ne,{value:h[f],active:d&&j(h[f])===j(d[f]),onClick:()=>g(h.value)})))))},c.createElement(ne,{value:s,style:{margin:4}})),c.createElement(kt,{id:_e(e),value:u,onChange:h=>g(h.target.value),onFocus:h=>h.target.select(),placeholder:"Choose color..."}),u?c.createElement(Nt,{icon:"markup",onClick:E}):null)},qt=Pt;export{Pt as ColorControl,qt as default};
