import{j as e}from"./jsx-dev-runtime-8ab8c10c.js";import{E as N}from"./index.es2-b7e588bc.js";import{Z as h,a as k,l as L}from"./index.es16-0bcfc29a.js";import{c as z}from"./index-ff2c9236.js";import{c as n}from"./clsx-0839fdbe.js";import{G as o}from"./global-variants-893e06e6.js";import{t as g}from"./commonCSS-cc68a568.js";const m=z([],{variants:{variant:g},defaultVariants:{variant:o.Zps}}),j=({variant:t,headline:l})=>l?e.jsxDEV("h4",{"data-testid":"link-list-headline",className:n("zep-typography-headlineSM-fluid-cqi","zep-break-all",m({variant:t})),children:l},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:21,columnNumber:7},globalThis):null,u=({variant:t,description:l})=>l?e.jsxDEV("p",{"data-testid":"link-list-description",className:n("zep-typography-bodyText","zep-break-all",m({variant:t})),children:l},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:36,columnNumber:7},globalThis):null,d=({links:t,variant:l})=>e.jsxDEV("div",{"data-testid":"link-list-links",className:n("zep-flex","zep-flex-col","zep-items-start","zep-gap-1",m({variant:l})),children:t.map((i,s)=>e.jsxDEV(h,{label:i.label,icon:i.icon,href:i.href,iconPlacement:"before",target:k.Self,mode:L.Inline},s,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:55,columnNumber:9},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:50,columnNumber:5},globalThis),f=({headline:t,description:l,variant:i=o.Zps,links:s,isMultiListItem:r=!1,className:a,isFooterList:b})=>{const c=s.length>15?s.slice(0,15):s,x=r?"md:zep-flex zep-hidden zep-min-w-[280px]":"zep-flex zep-max-w-[774px] zep-min-w-[290px]",p=i===o.Cat||i===o.Zps?"zep-bg-background-medium":"";return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{className:n("zep-gap-1.5","zep-flex-col","zep-items-start","zep-p-1.5","sm:zep-p-2","md:zep-p-2.5",m({variant:i}),p,x,a),"data-testid":"zep-link-list",children:[e.jsxDEV(j,{headline:t,variant:i},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:102,columnNumber:9},globalThis),e.jsxDEV(u,{description:l,variant:i},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:103,columnNumber:9},globalThis),e.jsxDEV(d,{links:c,variant:i},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:104,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:87,columnNumber:7},globalThis),e.jsxDEV(N,{className:n("zep-w-full",{"zep-hidden":!r,"md:zep-hidden zep-min-w-[280px] zep-border-none":r},m({variant:i}),p,a,{"!zep-px-[0] [&>button]:!zep-px-[0] [&>div]:!zep-px-[0]":b}),items:[{title:t||"",content:e.jsxDEV("div",{className:"zep-flex zep-flex-col zep-gap-1",children:[e.jsxDEV(u,{description:l,variant:i},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:125,columnNumber:17},globalThis),e.jsxDEV(d,{links:c,variant:i},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:126,columnNumber:17},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:124,columnNumber:15},globalThis)}]},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:106,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:86,columnNumber:5},globalThis)};try{f.displayName="LinkListItem",f.__docgenInfo={description:"",displayName:"LinkListItem",props:{headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},links:{defaultValue:null,description:"",name:"links",required:!0,type:{name:"LinkProps[]"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},isMultiListItem:{defaultValue:{value:"false"},description:"",name:"isMultiListItem",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isFooterList:{defaultValue:null,description:"",name:"isFooterList",required:!1,type:{name:"boolean"}}}}}catch{}export{f as L};
