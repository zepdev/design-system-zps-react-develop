import{j as a}from"./jsx-dev-runtime-8ab8c10c.js";import{N as f,a as m,l as g}from"./index.es16-fae182fa.js";import{c as i}from"./clsx-0839fdbe.js";import{a as o,G as l}from"./global-variants-893e06e6.js";import{g as b}from"./getUrlWithTrailingSlash-1f1feb13.js";import{R as x}from"./RichText-f78130c7.js";import{Z as c,B as y}from"./ZpsButton-55c033fb.js";const z=({type:r,linkHref:n,linkText:t,onClick:e,headerButtonIconPosition:p,headerButtonIcon:s,variant:u=l.Zps})=>{const d={"zep-text-yellow-500":u===o.ZpsBg||u===o.CatBg,"zep-text-typography-dark-100":u===l.Cat,"zep-text-indigo-500":l.Zps},h={[l.Cat]:c.SecondaryCat,[l.Zps]:c.SecondaryZps,[o.ZpsBg]:c.Secondary,[o.CatBg]:c.Secondary};switch(r){case"link":return a.jsxDEV(f,{target:n!=null&&n.startsWith("http")?m.Blank:m.Self,className:i(d,"zep-h-fit","zep-w-fit","zep-font-400","zep-whitespace-nowrap","hover:zep-underline","hover:zep-font-500","zep-cursor-pointer"),label:t||"",href:b(n),iconPlacement:"after",mode:g.Standalone,icon:"arrow-long-right"},void 0,!1,{fileName:"/home/circleci/project/src/components/header-long-component/HeaderLongComponent.tsx",lineNumber:34,columnNumber:9},globalThis);case"primary-button":case"secondary-button":return a.jsxDEV(y,{href:n,className:"zep-whitespace-nowrap sm:zep-w-fit zep-h-fit",label:t,variant:r==="primary-button"?c.Primary:h[u],icon:s,onClick:e,iconPosition:p},void 0,!1,{fileName:"/home/circleci/project/src/components/header-long-component/HeaderLongComponent.tsx",lineNumber:56,columnNumber:9},globalThis);default:return null}},v=({tagline:r,headline:n,description:t,variant:e=l.Zps,...p})=>{const s={"zep-text-typography-light-100":e===o.ZpsBg||e===o.CatBg,"zep-text-typography-dark-100":e===l.Cat,"zep-text-indigo-500":e===l.Zps},u={"zep-text-steel-500":e===l.Zps||e===o.ZpsBg,"zep-text-typography-dark-70 zep-opacity-70":e===l.Cat,"zep-text-typography-light-70 zep-opacity-70":e===o.CatBg};return a.jsxDEV("div",{className:i("zep-w-full","zep-flex","zep-flex-col","zep-gap-1.5","md:zep-gap-2.5","zep-items-start"),"data-testid":"header-long-component",children:[a.jsxDEV("div",{className:i("zep-w-full","zep-flex","zep-flex-col","zep-gap-0.5","zep-items-start"),children:[r&&a.jsxDEV("p",{className:i(u,"zep-typography-tagline","zep-hyphens-auto","zep-break-normal"),children:r},void 0,!1,{fileName:"/home/circleci/project/src/components/header-long-component/HeaderLongComponent.tsx",lineNumber:96,columnNumber:21},globalThis),a.jsxDEV("div",{className:i("zep-w-full","zep-flex","zep-flex-col","xl:zep-flex-row","xl:zep-justify-between","xl:zep-gap-2","zep-gap-1.5"),children:[a.jsxDEV("h2",{className:i(s,"zep-max-w-[944px]","zep-hyphens-auto","zep-break-normal","zep-typography-headlineLG-fluid-cqi","zep-text-start"),children:n},void 0,!1,{fileName:"/home/circleci/project/src/components/header-long-component/HeaderLongComponent.tsx",lineNumber:109,columnNumber:11},globalThis),a.jsxDEV(z,{...p,variant:e},void 0,!1,{fileName:"/home/circleci/project/src/components/header-long-component/HeaderLongComponent.tsx",lineNumber:122,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/header-long-component/HeaderLongComponent.tsx",lineNumber:98,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/header-long-component/HeaderLongComponent.tsx",lineNumber:95,columnNumber:7},globalThis),t&&t.length>0&&a.jsxDEV(x,{content:t,variant:e},void 0,!1,{fileName:"/home/circleci/project/src/components/header-long-component/HeaderLongComponent.tsx",lineNumber:125,columnNumber:51},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/header-long-component/HeaderLongComponent.tsx",lineNumber:91,columnNumber:5},globalThis)};try{v.displayName="HeaderLongComponent",v.__docgenInfo={description:"",displayName:"HeaderLongComponent",props:{tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}export{v as H};
