import{j as n,c as s}from"./clsx-24df0f47.js";import{r as o}from"./index-b1e7e93e.js";const O=({children:y,className:$,controlId:k,dataTestId:A="zep-scrollbar",theme:z="dark",scrollOrientation:b="both"})=>{const l=o.useRef(null),m=o.useRef(null),h=o.useRef(null),E=o.useRef(null),M=o.useRef(null),j=o.useRef(null),[d,V]=o.useState(20),[f,X]=o.useState(20),[a,Y]=o.useState(!1),[i,L]=o.useState(!1),[B,F]=o.useState(0),[U,G]=o.useState(0),[J,K]=o.useState(0),[Q,Z]=o.useState(0),[N,R]=o.useState(!1),[x,C]=o.useState(!1),S={light:{thumb:"zep-bg-greyscale-500",track:"zep-bg-greyscale-200"},dark:{thumb:"zep-bg-primary-default",track:"zep-bg-greyscale-400"}},ee=()=>{if(l.current){if(m.current&&l.current){const{clientWidth:e}=m.current,{clientWidth:r,scrollWidth:t}=l.current,c=r>=t;V(c?0:Math.max(r/t*e,20))}if(h.current){const{clientHeight:e}=h.current,{clientHeight:r,scrollHeight:t}=l.current,c=r>=t;X(c?0:Math.max(r/t*e,20))}}},W=()=>{if(!l.current||!m.current||!M.current||!E.current||!h.current)return;const{scrollLeft:e,scrollWidth:r,scrollHeight:t,scrollTop:c}=l.current,{clientWidth:T}=m.current,{clientHeight:D}=h.current;let u=e/r*T,p=c/t*D;u=Math.min(u,T-d),p=Math.min(p,D-f);const v=M.current,g=E.current;requestAnimationFrame(()=>{v.style.left=`${u}px`,g.style.top=`${p}px`})};o.useEffect(()=>{var e;if(l.current){const r=l.current;return j.current=new ResizeObserver(()=>{ee()}),(e=j.current)==null||e.observe(r),r.addEventListener("scroll",W),()=>{var t;(t=j.current)==null||t.unobserve(r),r.removeEventListener("scroll",W)}}},[]);const te=e=>{e.preventDefault(),e.stopPropagation(),F(e.clientX),l.current&&K(l.current.scrollLeft),L(!0)},re=e=>{e.preventDefault(),e.stopPropagation(),G(e.clientY),l.current&&Z(l.current.scrollTop),Y(!0)},w=e=>{e.preventDefault(),e.stopPropagation(),a&&Y(!1),i&&L(!1)},H=e=>{if(l.current){if(e.preventDefault(),e.stopPropagation(),i){const{scrollWidth:r,clientWidth:t}=l.current,c=(e.clientX-B)*(t/d);l.current.scrollLeft=Math.min(J+c,r-t)}if(a){const{scrollHeight:r,clientHeight:t}=l.current,c=(e.clientY-U)*(t/f);l.current.scrollTop=Math.min(Q+c,r-t)}}},P=e=>{e.preventDefault(),R(!0)},I=e=>{e.preventDefault(),N&&R(!1)},_=e=>{e.preventDefault(),C(!0)},q=e=>{e.preventDefault(),x&&C(!1)};o.useEffect(()=>(document.addEventListener("mousemove",H),document.addEventListener("mouseup",w),()=>{document.removeEventListener("mousemove",H),document.removeEventListener("mouseup",w)}),[H,w]);const le=e=>{e.preventDefault(),e.stopPropagation();const{current:r}=m,{current:t}=l;if(r&&t){const{clientX:c}=e,u=e.target.getBoundingClientRect().left,p=-(d/2),v=(c-u+p)/r.clientWidth,g=Math.floor(v*t.scrollWidth);t.scrollTo({left:g,behavior:"smooth"})}},oe=e=>{e.preventDefault(),e.stopPropagation();const{current:r}=h,{current:t}=l;if(t&&r){const{clientY:c}=e,u=e.target.getBoundingClientRect().top,p=-(f/2),v=(c-u+p)/r.clientHeight,g=Math.floor(v*t.scrollHeight);t.scrollTo({top:g,behavior:"smooth"})}};return n.jsxDEV("div",{className:s("zep-relative","zep-w-full","zep-overflow-x-visible"),"data-testid":A,children:[n.jsxDEV("div",{className:s("zep-flex zep-overflow-x-visible","zep-w-[calc(100%+16px)]","sm:zep-w-[calc(100%+24px)]","md:zep-w-[calc(100%+66px)]","lg:zep-w-[calc(100%+120px)]"),children:[n.jsxDEV("div",{className:s("zep-scrollable-content","zep-w-full","zep-pr-1","sm:zep-pr-1.5","md:zep-pr-[66px]","lg:zep-pr-[122px]",$,{"zep-mb-2":b!=="vertical"}),id:k,ref:l,children:y},void 0,!1,{fileName:"/home/circleci/project/src/components/scrollbar/Scrollbar.tsx",lineNumber:255,columnNumber:9},globalThis),n.jsxDEV("div",{className:s("zep-pl-2","zep-vertical-scrollbar",{"zep-hidden":f===0||b==="horizontal"}),"data-testid":"vertical-scrollbar",children:n.jsxDEV("div",{className:s("zep-block zep-relative zep-h-full",a||x?"!zep-w-0.75":"!zep-w-0.5"),"aria-controls":k,role:"scrollbar",children:[n.jsxDEV("div",{className:s("zep-top-0 zep-absolute zep-bottom-0 zep-h-full zep-rounded-[100px]",a||x?"!zep-w-0.75":"!zep-w-0.5",S[z].track),ref:h,onClick:oe,onMouseEnter:_,onMouseLeave:q,style:{cursor:a?"grabbing":void 0}},void 0,!1,{fileName:"/home/circleci/project/src/components/scrollbar/Scrollbar.tsx",lineNumber:277,columnNumber:13},globalThis),n.jsxDEV("div",{className:s("zep-absolute zep-rounded-[100px]",a||x?"!zep-w-0.75":"!zep-w-0.5",S[z].thumb),ref:E,onMouseDown:re,onMouseEnter:_,onMouseLeave:q,style:{height:`${f}px`,cursor:a?"grabbing":"grab"}},void 0,!1,{fileName:"/home/circleci/project/src/components/scrollbar/Scrollbar.tsx",lineNumber:291,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/scrollbar/Scrollbar.tsx",lineNumber:272,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/scrollbar/Scrollbar.tsx",lineNumber:271,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/scrollbar/Scrollbar.tsx",lineNumber:248,columnNumber:7},globalThis),n.jsxDEV("div",{className:s("zep-horizontal-scrollbar",{"zep-hidden":d===0||b==="vertical","zep-pr-0.5":b==="both"&&!a,"zep-pr-0.75":b==="both"&&a}),"data-testid":"horizontal-scrollbar",children:n.jsxDEV("div",{className:s("zep-block zep-relative zep-w-full",i||N?"!zep-h-0.75":"!zep-h-0.5"),"aria-controls":k,role:"scrollbar",children:[n.jsxDEV("div",{className:s("zep-absolute zep-w-full zep-rounded-[100px]",i||N?"!zep-h-0.75":"!zep-h-0.5",S[z].track),ref:m,onClick:le,onMouseEnter:P,onMouseLeave:I,style:{cursor:i?"grabbing":void 0}},void 0,!1,{fileName:"/home/circleci/project/src/components/scrollbar/Scrollbar.tsx",lineNumber:322,columnNumber:11},globalThis),n.jsxDEV("div",{className:s("zep-absolute zep-rounded-[100px]",i||N?"!zep-h-0.75":"!zep-h-0.5",S[z].thumb),ref:M,onMouseDown:te,onMouseEnter:P,onMouseLeave:I,style:{width:`${d}px`,cursor:i?"grabbing":"grab"}},void 0,!1,{fileName:"/home/circleci/project/src/components/scrollbar/Scrollbar.tsx",lineNumber:336,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/scrollbar/Scrollbar.tsx",lineNumber:317,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/scrollbar/Scrollbar.tsx",lineNumber:309,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/scrollbar/Scrollbar.tsx",lineNumber:247,columnNumber:5},globalThis)};try{O.displayName="Scrollbar",O.__docgenInfo={description:"",displayName:"Scrollbar",props:{controlId:{defaultValue:null,description:"",name:"controlId",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},dataTestId:{defaultValue:{value:"zep-scrollbar"},description:"",name:"dataTestId",required:!1,type:{name:"string"}},theme:{defaultValue:{value:"dark"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},scrollOrientation:{defaultValue:{value:"both"},description:"",name:"scrollOrientation",required:!1,type:{name:"enum",value:[{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}export{O as S};
