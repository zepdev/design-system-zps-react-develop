import{j as o}from"./jsx-dev-runtime-8ab8c10c.js";import{b as g,l as f}from"./index.es16-559b0725.js";import{c as l}from"./clsx-0839fdbe.js";import{a,G as n}from"./global-variants-71b69725.js";import{Z as s,B as u}from"./ZpsButton-8ba9b2c3.js";const h=({type:p,linkHref:c,linkText:t,onClick:e,variant:r=n.Zps})=>{const i={"zep-text-yellow-500":r===a.ZpsBg||r===a.CatBg,"zep-text-typography-dark-100":r===n.Cat,"zep-text-indigo-500":n.Zps},m={[n.Cat]:s.SecondaryCat,[n.Zps]:s.SecondaryZps,[a.ZpsBg]:s.Secondary,[a.CatBg]:s.Secondary};switch(p){case"link":return o.jsxDEV(g,{className:l(i,"zep-h-fit","zep-font-400","zep-whitespace-nowrap","hover:zep-underline","hover:zep-font-500","zep-cursor-pointer"),label:t||"",hasIcon:!0,href:c,mode:f.Standalone},void 0,!1,{fileName:"/home/circleci/project/src/components/header-long-component/HeaderLongComponent.tsx",lineNumber:24,columnNumber:9},globalThis);case"primary-button":return o.jsxDEV(u,{className:"zep-whitespace-nowrap sm:zep-w-fit zep-h-fit",label:t,onClick:e,variant:s.Primary},void 0,!1,{fileName:"/home/circleci/project/src/components/header-long-component/HeaderLongComponent.tsx",lineNumber:42,columnNumber:9},globalThis);case"secondary-button":return o.jsxDEV(u,{className:"zep-whitespace-nowrap sm:zep-w-fit zep-h-fit",label:t,onClick:e,variant:m[r]},void 0,!1,{fileName:"/home/circleci/project/src/components/header-long-component/HeaderLongComponent.tsx",lineNumber:51,columnNumber:9},globalThis);default:return null}},d=({tagline:p,headline:c,description:t,variant:e=n.Zps,...r})=>{const i={"zep-text-typography-light-100":e===a.ZpsBg||e===a.CatBg,"zep-text-typography-dark-100":e===n.Cat,"zep-text-indigo-500":e===n.Zps},m={"zep-text-steel-500":e===n.Zps||e===a.ZpsBg,"zep-text-typography-dark-70 zep-opacity-70":e===n.Cat,"zep-text-typography-light-70 zep-opacity-70":e===a.CatBg};return o.jsxDEV("div",{className:l("zep-w-full","zep-flex","zep-flex-col","zep-gap-1.5","md:zep-gap-2.5","zep-items-start"),"data-testid":"header-long-component",children:[o.jsxDEV("div",{className:l("zep-w-full","zep-flex","zep-flex-col","zep-gap-0.5","zep-items-start"),children:[p&&o.jsxDEV("h3",{className:l(m,"zep-typography-taglineMD","zep-break-all"),children:p},void 0,!1,{fileName:"/home/circleci/project/src/components/header-long-component/HeaderLongComponent.tsx",lineNumber:89,columnNumber:11},globalThis),o.jsxDEV("div",{className:l("zep-w-full","zep-flex","zep-flex-col","xl:zep-flex-row","xl:zep-justify-between","xl:zep-gap-2","zep-gap-1.5"),children:[o.jsxDEV("h2",{className:l(i,"zep-max-w-[944px]","zep-break-all","zep-typography-headlineLG-fluid-cqi","zep-text-start"),children:c},void 0,!1,{fileName:"/home/circleci/project/src/components/header-long-component/HeaderLongComponent.tsx",lineNumber:103,columnNumber:11},globalThis),o.jsxDEV(h,{...r,variant:e},void 0,!1,{fileName:"/home/circleci/project/src/components/header-long-component/HeaderLongComponent.tsx",lineNumber:115,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/header-long-component/HeaderLongComponent.tsx",lineNumber:92,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/header-long-component/HeaderLongComponent.tsx",lineNumber:87,columnNumber:7},globalThis),t&&o.jsxDEV("p",{className:l(i,"zep-text-start","zep-max-w-[944px]","zep-break-all"),children:t},void 0,!1,{fileName:"/home/circleci/project/src/components/header-long-component/HeaderLongComponent.tsx",lineNumber:119,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/header-long-component/HeaderLongComponent.tsx",lineNumber:83,columnNumber:5},globalThis)};try{d.displayName="HeaderLongComponent",d.__docgenInfo={description:"",displayName:"HeaderLongComponent",props:{tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary-button"'},{value:'"secondary-button"'},{value:'"link"'},{value:'"none"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{d as H};