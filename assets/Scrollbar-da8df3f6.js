import{j as c}from"./jsx-dev-runtime-8ab8c10c.js";import{r as l}from"./index-b1e7e93e.js";import{c as s}from"./clsx-0839fdbe.js";const O=({children:V,className:$,controlId:k,dataTestId:A="zep-scrollbar",theme:z="dark",scrollOrientation:b="both"})=>{const o=l.useRef(null),p=l.useRef(null),h=l.useRef(null),E=l.useRef(null),M=l.useRef(null),j=l.useRef(null),[d,X]=l.useState(20),[f,Y]=l.useState(20),[a,w]=l.useState(!1),[i,L]=l.useState(!1),[B,F]=l.useState(0),[U,G]=l.useState(0),[J,K]=l.useState(0),[Q,Z]=l.useState(0),[N,R]=l.useState(!1),[S,C]=l.useState(!1),x={light:{thumb:"zep-bg-greyscale-500",track:"zep-bg-greyscale-200"},dark:{thumb:"zep-bg-primary-default",track:"zep-bg-greyscale-400"}},ee=()=>{if(o.current){if(p.current&&o.current){const{clientWidth:e}=p.current,{clientWidth:r,scrollWidth:t}=o.current,n=r>=t;X(n?0:Math.max(r/t*e,20))}if(h.current){const{clientHeight:e}=h.current,{clientHeight:r,scrollHeight:t}=o.current,n=r>=t;Y(n?0:Math.max(r/t*e,20))}}},W=()=>{if(!o.current||!p.current||!M.current||!E.current||!h.current)return;const{scrollLeft:e,scrollWidth:r,scrollHeight:t,scrollTop:n}=o.current,{clientWidth:T}=p.current,{clientHeight:D}=h.current;let u=e/r*T,m=n/t*D;u=Math.min(u,T-d),m=Math.min(m,D-f);const g=M.current,v=E.current;requestAnimationFrame(()=>{g.style.left=`${u}px`,v.style.top=`${m}px`})};l.useEffect(()=>{var e;if(o.current){const r=o.current;return j.current=new ResizeObserver(()=>{ee()}),(e=j.current)==null||e.observe(r),r.addEventListener("scroll",W),()=>{var t;(t=j.current)==null||t.unobserve(r),r.removeEventListener("scroll",W)}}},[]);const te=e=>{e.preventDefault(),e.stopPropagation(),F(e.clientX),o.current&&K(o.current.scrollLeft),L(!0)},re=e=>{e.preventDefault(),e.stopPropagation(),G(e.clientY),o.current&&Z(o.current.scrollTop),w(!0)},H=e=>{e.preventDefault(),e.stopPropagation(),a&&w(!1),i&&L(!1)},y=e=>{if(o.current){if(e.preventDefault(),e.stopPropagation(),i){const{scrollWidth:r,clientWidth:t}=o.current,n=(e.clientX-B)*(t/d);o.current.scrollLeft=Math.min(J+n,r-t)}if(a){const{scrollHeight:r,clientHeight:t}=o.current,n=(e.clientY-U)*(t/f);o.current.scrollTop=Math.min(Q+n,r-t)}}},P=e=>{e.preventDefault(),R(!0)},I=e=>{e.preventDefault(),N&&R(!1)},_=e=>{e.preventDefault(),C(!0)},q=e=>{e.preventDefault(),S&&C(!1)};l.useEffect(()=>(document.addEventListener("mousemove",y),document.addEventListener("mouseup",H),()=>{document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",H)}),[y,H]);const oe=e=>{e.preventDefault(),e.stopPropagation();const{current:r}=p,{current:t}=o;if(r&&t){const{clientX:n}=e,u=e.target.getBoundingClientRect().left,m=-(d/2),g=(n-u+m)/r.clientWidth,v=Math.floor(g*t.scrollWidth);t.scrollTo({left:v,behavior:"smooth"})}},le=e=>{e.preventDefault(),e.stopPropagation();const{current:r}=h,{current:t}=o;if(t&&r){const{clientY:n}=e,u=e.target.getBoundingClientRect().top,m=-(f/2),g=(n-u+m)/r.clientHeight,v=Math.floor(g*t.scrollHeight);t.scrollTo({top:v,behavior:"smooth"})}};return c.jsxDEV("div",{className:s("zep-relative","zep-w-full"),"data-testid":A,children:[c.jsxDEV("div",{className:"zep-flex",children:[c.jsxDEV("div",{className:s("zep-scrollable-content","zep-w-full",$,{"zep-mb-2":b!=="vertical"}),id:k,ref:o,children:V},void 0,!1,{fileName:"/home/circleci/project/src/components/scrollbar/Scrollbar.tsx",lineNumber:249,columnNumber:9},globalThis),c.jsxDEV("div",{className:s("zep-pl-2","zep-vertical-scrollbar",{"zep-hidden":f===0||b==="horizontal"}),"data-testid":"vertical-scrollbar",children:c.jsxDEV("div",{className:s("zep-block zep-relative zep-h-full",a||S?"!zep-w-0.75":"!zep-w-0.5"),"aria-controls":k,role:"scrollbar",children:[c.jsxDEV("div",{className:s("zep-top-0 zep-absolute zep-bottom-0 zep-h-full zep-rounded-[100px]",a||S?"!zep-w-0.75":"!zep-w-0.5",x[z].track),ref:h,onClick:le,onMouseEnter:_,onMouseLeave:q,style:{cursor:a?"grabbing":void 0}},void 0,!1,{fileName:"/home/circleci/project/src/components/scrollbar/Scrollbar.tsx",lineNumber:262,columnNumber:13},globalThis),c.jsxDEV("div",{className:s("zep-absolute zep-rounded-[100px]",a||S?"!zep-w-0.75":"!zep-w-0.5",x[z].thumb),ref:E,onMouseDown:re,onMouseEnter:_,onMouseLeave:q,style:{height:`${f}px`,cursor:a?"grabbing":"grab"}},void 0,!1,{fileName:"/home/circleci/project/src/components/scrollbar/Scrollbar.tsx",lineNumber:276,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/scrollbar/Scrollbar.tsx",lineNumber:257,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/scrollbar/Scrollbar.tsx",lineNumber:256,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/scrollbar/Scrollbar.tsx",lineNumber:248,columnNumber:7},globalThis),c.jsxDEV("div",{className:s("zep-horizontal-scrollbar",{"zep-hidden":d===0||b==="vertical","zep-pr-0.5":b==="both"&&!a,"zep-pr-0.75":b==="both"&&a}),"data-testid":"horizontal-scrollbar",children:c.jsxDEV("div",{className:s("zep-block zep-relative zep-w-full",i||N?"!zep-h-0.75":"!zep-h-0.5"),"aria-controls":k,role:"scrollbar",children:[c.jsxDEV("div",{className:s("zep-absolute zep-w-full zep-rounded-[100px]",i||N?"!zep-h-0.75":"!zep-h-0.5",x[z].track),ref:p,onClick:oe,onMouseEnter:P,onMouseLeave:I,style:{cursor:i?"grabbing":void 0}},void 0,!1,{fileName:"/home/circleci/project/src/components/scrollbar/Scrollbar.tsx",lineNumber:307,columnNumber:11},globalThis),c.jsxDEV("div",{className:s("zep-absolute zep-rounded-[100px]",i||N?"!zep-h-0.75":"!zep-h-0.5",x[z].thumb),ref:M,onMouseDown:te,onMouseEnter:P,onMouseLeave:I,style:{width:`${d}px`,cursor:i?"grabbing":"grab"}},void 0,!1,{fileName:"/home/circleci/project/src/components/scrollbar/Scrollbar.tsx",lineNumber:321,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/scrollbar/Scrollbar.tsx",lineNumber:302,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/scrollbar/Scrollbar.tsx",lineNumber:294,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/scrollbar/Scrollbar.tsx",lineNumber:247,columnNumber:5},globalThis)};try{O.displayName="Scrollbar",O.__docgenInfo={description:"",displayName:"Scrollbar",props:{controlId:{defaultValue:null,description:"",name:"controlId",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},dataTestId:{defaultValue:{value:"zep-scrollbar"},description:"",name:"dataTestId",required:!1,type:{name:"string"}},theme:{defaultValue:{value:"dark"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},scrollOrientation:{defaultValue:{value:"both"},description:"",name:"scrollOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'},{value:'"both"'}]}}}}}catch{}export{O as S};
