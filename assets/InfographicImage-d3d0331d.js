import{j as i}from"./jsx-dev-runtime-8ab8c10c.js";import{c as f}from"./index-ff2c9236.js";import{r as h}from"./index-b1e7e93e.js";import{u as _}from"./useContainerDimensions-a1b6568a.js";import{G as n}from"./global-variants-71b69725.js";import{j as o}from"./jsx-runtime-6f6342d7.js";import{y,j as N}from"./index.es34-79e31a69.js";import{c}from"./clsx-0839fdbe.js";const j=N("zep-absolute zep-flex-col zep-drop-shadow-md zep-z-[1500]",{variants:{show:{true:"zep-flex sm:zep-hidden sm:group-hover:zep-flex",false:"zep-hidden sm:zep-hidden sm:group-hover:zep-flex"},align:{start:"zep-items-start zep-justify-start",center:"zep-items-center zep-justify-center",end:"zep-items-end zep-justify-end"},position:{top:"zep-bottom-[calc(100%_+_4px)]",right:"zep-left-[calc(100%_+_14px)]",bottom:"zep-top-[calc(100%_+_4px)]",left:"zep-right-[calc(100%_+_14px)]"},color:{light:"zep-bg-greyscale-0 zep-text-typography-dark-100",dark:"zep-bg-greyscale-900 zep-text-typography-light-100",zps:"zep-bg-primary-default zep-text-typography-light-100",cat:"zep-bg-background-dark zep-text-typography-light-100"}},defaultVariants:{align:"center",color:"dark"}}),V=N("zep-flex zep-absolute zep-box-border",{variants:{align:{start:"",center:"",end:""},position:{top:"zep-top-[100%]",right:"zep-right-[calc(100%_-_11px)] zep-rotate-90",bottom:"zep-bottom-[100%] zep-rotate-180",left:"zep-left-[calc(100%_-_11px)] -zep-rotate-90"},color:{light:"zep-text-typography-light-100",dark:"zep-text-typography-dark-100",zps:"zep-text-primary-default",cat:"zep-text-typography-dark-100"}},compoundVariants:[{align:"start",position:["left","right"],className:"zep-bottom-[calc(100%_-_12px)]"},{align:"end",position:["left","right"],className:"zep-top-[calc(100%_-_12px)]"}],defaultVariants:{position:"top",color:"dark"}}),w=()=>o.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",fill:"currentColor"})}),I=()=>o.jsx("svg",{width:"26",height:"5",viewBox:"0 0 26 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M8 0L12.2929 4.29289C12.6834 4.68342 13.3166 4.68342 13.7071 4.29289L18 0H8Z",fill:"currentColor"})}),P=({className:e,label:l,description:t,position:r,color:s,align:a,onClose:m,show:d})=>o.jsxs("div",{className:y(j({align:a,color:s,position:r,show:d}),e),children:[o.jsx("button",{className:"zep-flex sm:zep-hidden zep-self-end zep-m-0.5",onClick:m,children:o.jsx(w,{})}),o.jsxs("div",{className:"zep-max-w-[300px] zep-px-1 zep-py-0.5 zep-break-words zep-w-max",children:[l&&o.jsx("p",{className:"zep-typography-headlineXS-fluid-cqi zep-mb-1",children:l}),o.jsx("p",{className:"zep-typography-supportText",children:t})]}),o.jsx("div",{className:V({position:r,color:s,align:a}),children:o.jsx(I,{})})]}),C=({children:e,label:l,description:t,className:r,color:s="dark",position:a="top",align:m="center"})=>{const[d,u]=h.useState(!1),p=v=>{v.stopPropagation(),u(!1)};return o.jsxs("div",{className:y("zep-inline-flex zep-relative zep-justify-center zep-items-center zep-group",r),"data-testid":"zep-tooltip",onClick:()=>u(!0),children:[o.jsx(P,{label:l,description:t,color:s,position:a,align:m,show:d,onClose:p,className:r}),e]})},g=({point:e,variant:l,setActivePoint:t,activePoint:r,width:s})=>{const a={[n.Zps]:["zep-bg-typography-light-100"],[n.Cat]:["zep-bg-secondary-default"]},m={[n.Zps]:[c("zep-shadow-[0_0_0_10px_rgba(39,22,111,1)] md:group-hover:zep-shadow-[0_0_0_5px_rgba(39,22,111,1)] [&>p]:zep-text-primary-default",r===e&&"zep-shadow-[0_0_0_3px_rgba(39,22,111,1)]")],[n.Cat]:[c("zep-shadow-[0_0_0_10px_rgba(38,38,38,1)] md:group-hover:zep-shadow-[0_0_0_5px_rgba(38,38,38,1)] [&>p]:zep-text-typography-primary-default",r===e&&"zep-shadow-[0_0_0_3px_rgba(38,38,38,1)]")]},d=f(["zep-absolute zep-w-2.5 zep-h-2.5 md:zep-w-3 md:zep-h-3 zep-rounded-full"],{variants:{variant:a},defaultVariants:{variant:n.Zps}}),u=f([c("zep-w-1 zep-h-1 md:zep-w-1.25 md:zep-h-1.25 zep-rounded-full zep-transition-all md:group-hover:zep-w-2 md:group-hover:zep-h-2",r===e?"zep-w-2 zep-h-2 ":"")],{variants:{variant:m},defaultVariants:{variant:n.Zps}});return i.jsxDEV("div",{onClick:()=>{s&&s<990&&t(e)},style:{left:`${e.x}%`,top:`${e.y}%`},className:c(d({variant:l})),children:[i.jsxDEV("div",{className:"zep-hidden md:zep-block",children:i.jsxDEV(C,{color:l===n.Zps?"zps":"cat",label:e.label,description:e.description,children:i.jsxDEV("div",{className:"zep-w-2.5 zep-h-2.5 md:zep-w-3 md:zep-h-3 zep-rounded-full zep-flex zep-justify-center zep-items-center zep-group",children:i.jsxDEV("div",{className:c(u({variant:l}),"zep-flex zep-justify-center zep-items-center"),children:e.step&&i.jsxDEV("p",{children:e.step},void 0,!1,{fileName:"/home/circleci/project/src/components/infographic-image/InfoPoint.tsx",lineNumber:80,columnNumber:30},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/infographic-image/InfoPoint.tsx",lineNumber:79,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/infographic-image/InfoPoint.tsx",lineNumber:78,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/infographic-image/InfoPoint.tsx",lineNumber:73,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/infographic-image/InfoPoint.tsx",lineNumber:72,columnNumber:7},globalThis),i.jsxDEV("div",{className:"md:zep-hidden zep-w-2.5 zep-h-2.5 md:zep-w-3 md:zep-h-3 zep-rounded-full zep-flex zep-justify-center zep-items-center zep-group",children:i.jsxDEV("div",{className:c(u({variant:l}),"zep-flex zep-justify-center zep-items-center"),children:e.step&&i.jsxDEV("p",{className:"zep-typography-supportText",children:e.step},void 0,!1,{fileName:"/home/circleci/project/src/components/infographic-image/InfoPoint.tsx",lineNumber:87,columnNumber:26},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/infographic-image/InfoPoint.tsx",lineNumber:86,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/infographic-image/InfoPoint.tsx",lineNumber:85,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/infographic-image/InfoPoint.tsx",lineNumber:63,columnNumber:5},globalThis)},T=g;try{g.displayName="InfoPoint",g.__docgenInfo={description:"",displayName:"InfoPoint",props:{point:{defaultValue:null,description:"",name:"point",required:!0,type:{name:"Point"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},activePoint:{defaultValue:null,description:"",name:"activePoint",required:!1,type:{name:"Point"}},setActivePoint:{defaultValue:null,description:"",name:"setActivePoint",required:!0,type:{name:"(x: Point) => void"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}}}}}catch{}const z=({point:e,variant:l,activePoint:t,setActivePoint:r})=>{const s={[n.Zps]:[c("zep-bg-primary-default zep-text-typography-light-100",t===e&&"zep-shadow-[inset_0_0_0_4px_rgba(255,204,0,1)]")],[n.Cat]:[c("zep-bg-neutral-dark-default [&>p]:zep-text-typography-light-100",t===e&&"zep-shadow-[inset_0_0_0_4px_rgba(255,204,0,1)]")]},a=f(["zep-p-1 zep-min-w-[80%] sm:zep-min-w-[60%] zep-w-full"],{variants:{variant:s},defaultVariants:{variant:n.Zps}});return i.jsxDEV("div",{id:`${e.x}${e.y}`,onClick:()=>r(e),className:c(a({variant:l}),"card",t===e&&"active","zep-snap-center"),children:[i.jsxDEV("p",{className:"zep-text-headlineXS-fluid-cqi zep-mb-1 zep-text-start",children:e.label},void 0,!1,{fileName:"/home/circleci/project/src/components/infographic-image/PointCard.tsx",lineNumber:44,columnNumber:7},globalThis),i.jsxDEV("p",{className:"zep-typography-bodyText zep-text-start",children:e.description},void 0,!1,{fileName:"/home/circleci/project/src/components/infographic-image/PointCard.tsx",lineNumber:45,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/infographic-image/PointCard.tsx",lineNumber:39,columnNumber:5},globalThis)},E=z;try{z.displayName="PointCard",z.__docgenInfo={description:"",displayName:"PointCard",props:{point:{defaultValue:null,description:"",name:"point",required:!0,type:{name:"Point"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},activePoint:{defaultValue:null,description:"",name:"activePoint",required:!1,type:{name:"Point"}},setActivePoint:{defaultValue:null,description:"",name:"setActivePoint",required:!0,type:{name:"(x: Point) => void"}}}}}catch{}const D={[n.Zps]:[],[n.Cat]:[]},x=f([""],{variants:{variant:D},defaultVariants:{variant:n.Zps}}),b=({imageUrl:e,imageAlt:l,points:t,variant:r,className:s})=>{const[a,m]=h.useState(),d=h.useRef(null),{width:u}=_(d);return h.useEffect(()=>{const p=document.getElementById(`${a==null?void 0:a.x}${a==null?void 0:a.y}`);p&&p.scrollIntoView({behavior:"smooth",inline:"center"})},[a]),i.jsxDEV("div",{className:s,children:[i.jsxDEV("div",{"data-testid":"zep-infographic-image",className:"zep-relative",ref:d,children:[i.jsxDEV("img",{src:e,alt:l},void 0,!1,{fileName:"/home/circleci/project/src/components/infographic-image/InfographicImage.tsx",lineNumber:39,columnNumber:9},globalThis),t==null?void 0:t.map(p=>i.jsxDEV(T,{width:u,variant:r,point:p,activePoint:a,setActivePoint:m},p.x,!1,{fileName:"/home/circleci/project/src/components/infographic-image/InfographicImage.tsx",lineNumber:41,columnNumber:11},globalThis))]},void 0,!0,{fileName:"/home/circleci/project/src/components/infographic-image/InfographicImage.tsx",lineNumber:38,columnNumber:7},globalThis),i.jsxDEV("div",{className:"zep-flex zep-overflow-x-scroll  md:zep-hidden zep-gap-0.5 zep-py-0.5 ",children:t.map(p=>i.jsxDEV(E,{point:p,variant:r,setActivePoint:m,activePoint:a},p.x,!1,{fileName:"/home/circleci/project/src/components/infographic-image/InfographicImage.tsx",lineNumber:53,columnNumber:11},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/infographic-image/InfographicImage.tsx",lineNumber:51,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/infographic-image/InfographicImage.tsx",lineNumber:37,columnNumber:5},globalThis)};try{x.displayName="infographicImageCva",x.__docgenInfo={description:"",displayName:"infographicImageCva",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"GlobalVariants | null"}},class:{defaultValue:null,description:"",name:"class",required:!1,type:{name:"ClassValue"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"ClassValue"}}}}}catch{}try{b.displayName="InfographicImage",b.__docgenInfo={description:"",displayName:"InfographicImage",props:{imageUrl:{defaultValue:null,description:"",name:"imageUrl",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!1,type:{name:"string"}},points:{defaultValue:null,description:"",name:"points",required:!0,type:{name:"Point[]"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{b as I};
