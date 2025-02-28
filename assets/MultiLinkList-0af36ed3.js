import{j as l}from"./jsx-dev-runtime-8ab8c10c.js";import{c as a}from"./clsx-0839fdbe.js";import{G as p}from"./global-variants-71b69725.js";import{H as d}from"./HeaderLongComponent-1a6e7fe0.js";import{L as f}from"./LinkListItem-990daaf7.js";import{L as g}from"./Layout-a8c3c09c.js";const u=({headline:i,linkLists:e,variant:n=p.Zps,linkListItemClassname:s,isFooterList:t,...m})=>{const c=e.length>15?e.slice(0,15):e;return l.jsxDEV(l.Fragment,{children:[i?l.jsxDEV(d,{headline:i,variant:n,...m},void 0,!1,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:20,columnNumber:19},globalThis):null,l.jsxDEV("div",{className:a("zep-grid","zep-gap-1","md:zep-gap-1.5","xl:zep-gap-2",{"xl:zep-grid-cols-2":e.length===2,"xl:zep-grid-cols-4":[4,7,8,11,12].includes(e.length),"xl:zep-grid-cols-5":[5,9,10,13,14,15].includes(e.length),"md:zep-grid-cols-2":[2,4].includes(e.length),"md:zep-grid-cols-3":[3,5,6,7,8,9,10,11,12,13,14,15].includes(e.length)}),children:c.map(r=>l.jsxDEV(f,{className:a("zep-w-full",s),...r,variant:n,isMultiListItem:!0,isFooterList:t},r.headline,!1,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:31,columnNumber:11},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:21,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:19,columnNumber:5},globalThis)},o=({isFooterList:i=!1,isPatternPart:e=!1,className:n,id:s,...t})=>e?l.jsxDEV("div",{className:a("zep-flex-col","zep-flex","zep-gap-2","sm:zep-gap-3","xl:zep-gap-4",n),children:l.jsxDEV(u,{...t,isPatternPart:e,isFooterList:i},void 0,!1,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:55,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:54,columnNumber:7},globalThis):l.jsxDEV(g,{id:s,className:a("zep-flex-col","zep-flex","zep-gap-2","sm:zep-gap-3","xl:zep-gap-4",n),children:l.jsxDEV(u,{...t,isPatternPart:e,isFooterList:i},void 0,!1,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:62,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:61,columnNumber:5},globalThis);try{o.displayName="MultiLinkList",o.__docgenInfo={description:"",displayName:"MultiLinkList",props:{linkLists:{defaultValue:null,description:"",name:"linkLists",required:!0,type:{name:"LinkListItemProps[]"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},isPatternPart:{defaultValue:{value:"false"},description:"",name:"isPatternPart",required:!1,type:{name:"boolean"}},linkListItemClassname:{defaultValue:null,description:"",name:"linkListItemClassname",required:!1,type:{name:"string"}},isFooterList:{defaultValue:{value:"false"},description:"",name:"isFooterList",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}}}}}catch{}export{o as M};
