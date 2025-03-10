import{j as l}from"./jsx-dev-runtime-8ab8c10c.js";import{Z as f,l as g}from"./index.es16-0bcfc29a.js";import{c as t}from"./clsx-0839fdbe.js";import{a as o,G as a}from"./global-variants-893e06e6.js";import{R as b}from"./RichText-755c164f.js";import{Z as i,B as m}from"./ZpsButton-b9e3ba02.js";const x=({type:u,linkHref:s,linkText:n,onClick:e,headerButtonIconPosition:c,headerButtonIcon:p,variant:r=a.Zps})=>{const d={"zep-text-yellow-500":r===o.ZpsBg||r===o.CatBg,"zep-text-typography-dark-100":r===a.Cat,"zep-text-indigo-500":a.Zps},h={[a.Cat]:i.SecondaryCat,[a.Zps]:i.SecondaryZps,[o.ZpsBg]:i.Secondary,[o.CatBg]:i.Secondary};switch(u){case"link":return l.jsxDEV(f,{className:t(d,"zep-h-fit","zep-w-fit","zep-font-400","zep-whitespace-nowrap","hover:zep-underline","hover:zep-font-500","zep-cursor-pointer"),label:n||"",href:s,mode:g.Standalone,icon:"arrow-long-right"},void 0,!1,{fileName:"/home/circleci/project/src/components/header-long-component/HeaderLongComponent.tsx",lineNumber:33,columnNumber:9},globalThis);case"primary-button":return l.jsxDEV(m,{className:"zep-whitespace-nowrap sm:zep-w-fit zep-h-fit",label:n,onClick:e,variant:i.Primary,icon:p,iconPosition:c},void 0,!1,{fileName:"/home/circleci/project/src/components/header-long-component/HeaderLongComponent.tsx",lineNumber:52,columnNumber:9},globalThis);case"secondary-button":return l.jsxDEV(m,{className:"zep-whitespace-nowrap sm:zep-w-fit zep-h-fit",label:n,onClick:e,variant:h[r],icon:p,iconPosition:c},void 0,!1,{fileName:"/home/circleci/project/src/components/header-long-component/HeaderLongComponent.tsx",lineNumber:63,columnNumber:9},globalThis);default:return null}},v=({tagline:u,headline:s,description:n,variant:e=a.Zps,...c})=>{const p={"zep-text-typography-light-100":e===o.ZpsBg||e===o.CatBg,"zep-text-typography-dark-100":e===a.Cat,"zep-text-indigo-500":e===a.Zps},r={"zep-text-steel-500":e===a.Zps||e===o.ZpsBg,"zep-text-typography-dark-70 zep-opacity-70":e===a.Cat,"zep-text-typography-light-70 zep-opacity-70":e===o.CatBg};return l.jsxDEV("div",{className:t("zep-w-full","zep-flex","zep-flex-col","zep-gap-1.5","md:zep-gap-2.5","zep-items-start"),"data-testid":"header-long-component",children:[l.jsxDEV("div",{className:t("zep-w-full","zep-flex","zep-flex-col","zep-gap-0.5","zep-items-start"),children:[u&&l.jsxDEV("p",{className:t(r,"zep-typography-taglineMD","zep-break-all"),children:u},void 0,!1,{fileName:"/home/circleci/project/src/components/header-long-component/HeaderLongComponent.tsx",lineNumber:103,columnNumber:11},globalThis),l.jsxDEV("div",{className:t("zep-w-full","zep-flex","zep-flex-col","xl:zep-flex-row","xl:zep-justify-between","xl:zep-gap-2","zep-gap-1.5"),children:[l.jsxDEV("h2",{className:t(p,"zep-max-w-[944px]","zep-break-all","zep-typography-headlineLG-fluid-cqi","zep-text-start"),children:s},void 0,!1,{fileName:"/home/circleci/project/src/components/header-long-component/HeaderLongComponent.tsx",lineNumber:117,columnNumber:11},globalThis),l.jsxDEV(x,{...c,variant:e},void 0,!1,{fileName:"/home/circleci/project/src/components/header-long-component/HeaderLongComponent.tsx",lineNumber:129,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/header-long-component/HeaderLongComponent.tsx",lineNumber:106,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/header-long-component/HeaderLongComponent.tsx",lineNumber:101,columnNumber:7},globalThis),n&&l.jsxDEV(b,{content:n,variant:e},void 0,!1,{fileName:"/home/circleci/project/src/components/header-long-component/HeaderLongComponent.tsx",lineNumber:132,columnNumber:23},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/header-long-component/HeaderLongComponent.tsx",lineNumber:97,columnNumber:5},globalThis)};try{v.displayName="HeaderLongComponent",v.__docgenInfo={description:"",displayName:"HeaderLongComponent",props:{tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary-button"'},{value:'"secondary-button"'},{value:'"link"'},{value:'"none"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"location"'},{value:'"link"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"email"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"list"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"table"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"time"'},{value:'"copy"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"search"'},{value:'"delete-circle"'},{value:'"alert"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"add-circle"'},{value:'"marine-ship"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}export{v as H};
