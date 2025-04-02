import{j as e}from"./jsx-dev-runtime-8ab8c10c.js";import{E as h}from"./index.es2-ef205e1c.js";import{N,a as d,l as k}from"./index.es16-fae182fa.js";import{c as L}from"./index-ff2c9236.js";import{c}from"./clsx-0839fdbe.js";import{G as r}from"./global-variants-893e06e6.js";import{t as z}from"./commonCSS-cc68a568.js";import{g}from"./getDataLayer-1420585a.js";import{g as j}from"./getUrlWithTrailingSlash-1f1feb13.js";import{R as v}from"./RichText-f78130c7.js";const p=L([],{variants:{variant:z},defaultVariants:{variant:r.Zps}}),V=({variant:i,headline:t})=>t?e.jsxDEV("h4",{"data-testid":"link-list-headline",className:c("zep-typography-headlineSM-fluid-cqi","zep-hyphens-auto","zep-break-normal",p({variant:i})),children:t},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:24,columnNumber:7},globalThis):null,f=({variant:i,description:t})=>t?e.jsxDEV(v,{content:t,variant:i},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:43,columnNumber:12},globalThis):null,b=({links:i,variant:t,type:l,headline:o,isFooterList:n})=>{const a=g();return e.jsxDEV("div",{"data-testid":"link-list-links",className:c("zep-flex","zep-flex-col","zep-items-start","zep-gap-1",p({variant:t})),children:i.map((s,u)=>{var m;return e.jsxDEV(N,{target:(m=s.href)!=null&&m.startsWith("http")?d.Blank:d.Self,label:s.label,icon:s.icon,download:l==="download",href:j(s.href),iconPlacement:"before",onClickCapture:()=>{a.push({event:n?"interaction_footer":"interaction_linklist",link_text:s.label,link_context:o,link_section:n?"footer":o})},mode:k.Inline},u,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:57,columnNumber:9},globalThis)})},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:52,columnNumber:5},globalThis)},x=({headline:i,description:t,variant:l=r.Zps,links:o,isMultiListItem:n=!1,className:a,isFooterList:s=!1})=>{const u=n?"md:zep-flex zep-hidden zep-min-w-[210px]":"zep-flex md:zep-max-w-[774px] zep-min-w-[290px]",m=l===r.Cat||l===r.Zps?"zep-bg-background-medium":"";return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{className:c("zep-gap-1.5","zep-flex-col","zep-items-start","zep-p-1.5","sm:zep-p-2","md:zep-p-2.5",p({variant:l}),m,u,{"md:zep-min-w-[280px]":!s},a),"data-testid":"zep-link-list",children:[e.jsxDEV(V,{headline:i,variant:l},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:113,columnNumber:9},globalThis),e.jsxDEV(f,{description:t,variant:l},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:114,columnNumber:9},globalThis),e.jsxDEV(b,{links:o,variant:l,headline:i,isFooterList:s},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:115,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:97,columnNumber:7},globalThis),e.jsxDEV(h,{className:c("zep-w-full",{"zep-hidden":!n,"md:zep-hidden zep-min-w-[280px] zep-border-none":n},p({variant:l}),m,a,{"!zep-px-[0] [&>button]:!zep-px-[0] [&>div]:!zep-px-[0]":s}),items:[{title:i||"",content:e.jsxDEV("div",{className:"zep-flex zep-flex-col zep-gap-1",children:[e.jsxDEV(f,{description:t,variant:l},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:136,columnNumber:17},globalThis),e.jsxDEV(b,{links:o,variant:l,headline:i,isFooterList:s},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:137,columnNumber:17},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:135,columnNumber:15},globalThis)}]},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:117,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:96,columnNumber:5},globalThis)};try{x.displayName="LinkListItem",x.__docgenInfo={description:"",displayName:"LinkListItem",props:{headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},links:{defaultValue:null,description:"",name:"links",required:!0,type:{name:"LinkProps[]"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},isMultiListItem:{defaultValue:{value:"false"},description:"",name:"isMultiListItem",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isFooterList:{defaultValue:{value:"false"},description:"",name:"isFooterList",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"download"'}]}}}}}catch{}export{x as L};
