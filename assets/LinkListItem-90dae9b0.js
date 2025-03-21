import{j as e}from"./jsx-dev-runtime-8ab8c10c.js";import{E as x}from"./index.es2-ef205e1c.js";import{Z as N,a as u,l as k}from"./index.es16-c93e1849.js";import{c as L}from"./index-ff2c9236.js";import{c as o}from"./clsx-0839fdbe.js";import{G as r}from"./global-variants-893e06e6.js";import{t as z}from"./commonCSS-cc68a568.js";import{g}from"./getUrlWithoutTrailingSlash-e7815512.js";const a=L([],{variants:{variant:z},defaultVariants:{variant:r.Zps}}),j=({variant:t,headline:l})=>l?e.jsxDEV("h4",{"data-testid":"link-list-headline",className:o("zep-typography-headlineSM-fluid-cqi","zep-break-all",a({variant:t})),children:l},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:22,columnNumber:7},globalThis):null,d=({variant:t,description:l})=>l?e.jsxDEV("p",{"data-testid":"link-list-description",className:o("zep-typography-bodyText","zep-break-all",a({variant:t})),children:l},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:37,columnNumber:7},globalThis):null,f=({links:t,variant:l,type:i})=>e.jsxDEV("div",{"data-testid":"link-list-links",className:o("zep-flex","zep-flex-col","zep-items-start","zep-gap-1",a({variant:l})),children:t.map((s,n)=>{var m;return e.jsxDEV(N,{target:(m=s.href)!=null&&m.startsWith("http")?u.Blank:u.Self,label:s.label,icon:s.icon,download:i==="download",href:g(s.href),iconPlacement:"before",mode:k.Inline},n,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:56,columnNumber:9},globalThis)})},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:51,columnNumber:5},globalThis),b=({headline:t,description:l,variant:i=r.Zps,links:s,isMultiListItem:n=!1,className:m,isFooterList:c=!1})=>{const h=n?"md:zep-flex zep-hidden zep-min-w-[210px]":"zep-flex md:zep-max-w-[774px] zep-min-w-[290px]",p=i===r.Cat||i===r.Zps?"zep-bg-background-medium":"";return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{className:o("zep-gap-1.5","zep-flex-col","zep-items-start","zep-p-1.5","sm:zep-p-2","md:zep-p-2.5",a({variant:i}),p,h,{"md:zep-min-w-[280px]":!c},m),"data-testid":"zep-link-list",children:[e.jsxDEV(j,{headline:t,variant:i},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:104,columnNumber:9},globalThis),e.jsxDEV(d,{description:l,variant:i},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:105,columnNumber:9},globalThis),e.jsxDEV(f,{links:s,variant:i},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:106,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:88,columnNumber:7},globalThis),e.jsxDEV(x,{className:o("zep-w-full",{"zep-hidden":!n,"md:zep-hidden zep-min-w-[280px] zep-border-none":n},a({variant:i}),p,m,{"!zep-px-[0] [&>button]:!zep-px-[0] [&>div]:!zep-px-[0]":c}),items:[{title:t||"",content:e.jsxDEV("div",{className:"zep-flex zep-flex-col zep-gap-1",children:[e.jsxDEV(d,{description:l,variant:i},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:127,columnNumber:17},globalThis),e.jsxDEV(f,{links:s,variant:i},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:128,columnNumber:17},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:126,columnNumber:15},globalThis)}]},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:108,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:87,columnNumber:5},globalThis)};try{b.displayName="LinkListItem",b.__docgenInfo={description:"",displayName:"LinkListItem",props:{headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},links:{defaultValue:null,description:"",name:"links",required:!0,type:{name:"LinkProps[]"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},isMultiListItem:{defaultValue:{value:"false"},description:"",name:"isMultiListItem",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isFooterList:{defaultValue:{value:"false"},description:"",name:"isFooterList",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"download"'},{value:'"default"'}]}}}}}catch{}export{b as L};
