import{j as i,c as p}from"./clsx-24df0f47.js";import{E as h}from"./index.es2-ef205e1c.js";import{N}from"./index.es16-1f4fc36d.js";import{a as d,l as L}from"./index.es17-40e95622.js";import{c as k}from"./index-1a504dbd.js";import{G as c}from"./global-variants-893e06e6.js";import{t as z}from"./commonCSS-cc68a568.js";import{g}from"./getDataLayer-1420585a.js";import{g as j}from"./getUrlWithTrailingSlash-1f1feb13.js";import{R as v}from"./RichText-1af2ae67.js";const u=k([],{variants:{variant:z},defaultVariants:{variant:c.Zps}}),V=({variant:l,headline:s})=>s?i.jsxDEV("h4",{"data-testid":"link-list-headline",className:p("zep-typography-headlineSM-fluid-cqi","zep-hyphens-auto","zep-break-normal",u({variant:l})),children:s},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:24,columnNumber:7},globalThis):null,f=({variant:l,description:s})=>s?i.jsxDEV(v,{content:s,variant:l},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:43,columnNumber:12},globalThis):null,b=({links:l,variant:s,headline:t,isFooterList:o})=>{const m=g();return i.jsxDEV("div",{"data-testid":"link-list-links",className:p("zep-flex","zep-flex-col","zep-items-start","zep-gap-1",u({variant:s})),children:l.map((e,n)=>{var a;return i.jsxDEV(N,{target:(a=e.href)!=null&&a.startsWith("http")?d.Blank:d.Self,label:e.label,icon:e.icon,onClick:r=>{e!=null&&e.onClick&&(r.preventDefault(),e.onClick(r))},download:e.linkType==="download",href:j(e.href),iconPlacement:(e==null?void 0:e.iconPlacement)??"before",onClickCapture:()=>{m.push({event:o?"interaction_footer":"interaction_linklist",link_text:e.label,link_context:t,link_section:o?"footer":t})},mode:L.Inline},n,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:57,columnNumber:9},globalThis)})},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:52,columnNumber:5},globalThis)},x=({headline:l,description:s,variant:t=c.Zps,links:o,isMultiListItem:m=!1,className:e,isFooterList:n=!1})=>{const a=m?"md:zep-flex zep-hidden zep-min-w-[210px]":"zep-flex md:zep-max-w-[774px] zep-min-w-[290px]",r=t===c.Cat||t===c.Zps?"zep-bg-background-medium":"";return i.jsxDEV(i.Fragment,{children:[i.jsxDEV("div",{className:p("zep-gap-1.5","zep-flex-col","zep-items-start","zep-p-1.5","sm:zep-p-2","md:zep-p-2.5",u({variant:t}),r,a,{"md:zep-min-w-[280px]":!n},e),"data-testid":"zep-link-list",children:[i.jsxDEV(V,{headline:l,variant:t},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:119,columnNumber:9},globalThis),i.jsxDEV(f,{description:s,variant:t},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:120,columnNumber:9},globalThis),i.jsxDEV(b,{links:o,variant:t,headline:l,isFooterList:n},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:121,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:103,columnNumber:7},globalThis),i.jsxDEV(h,{className:p("zep-w-full",{"zep-hidden":!m,"md:zep-hidden zep-min-w-[280px] zep-border-none":m},u({variant:t}),r,e,{"!zep-px-[0] [&>button]:!zep-px-[0] [&>div]:!zep-px-[0]":n}),items:[{title:l||"",content:i.jsxDEV("div",{className:"zep-flex zep-flex-col zep-gap-1",children:[i.jsxDEV(f,{description:s,variant:t},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:142,columnNumber:17},globalThis),i.jsxDEV(b,{links:o,variant:t,headline:l,isFooterList:n},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:143,columnNumber:17},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:141,columnNumber:15},globalThis)}]},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:123,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:102,columnNumber:5},globalThis)};try{x.displayName="LinkListItem",x.__docgenInfo={description:"",displayName:"LinkListItem",props:{headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},links:{defaultValue:null,description:"",name:"links",required:!0,type:{name:"LinkListLink[]"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},isMultiListItem:{defaultValue:{value:"false"},description:"",name:"isMultiListItem",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isFooterList:{defaultValue:{value:"false"},description:"",name:"isFooterList",required:!1,type:{name:"boolean"}}}}}catch{}export{x as L};
