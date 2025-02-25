import{j as l}from"./jsx-dev-runtime-8ab8c10c.js";import{c as a}from"./clsx-0839fdbe.js";import{G as p}from"./global-variants-71b69725.js";import{L as d}from"./Layout-ac6d9e38.js";import{H as f}from"./HeaderShortComponent-0928bf92.js";import{L as g}from"./LinkListItem-785f9c23.js";const r=({headline:i,linkLists:e,tagline:s,variant:t=p.Zps,linkListItemClassname:m,isFooterList:u})=>{const c=e.length>15?e.slice(0,15):e;return l.jsxDEV(l.Fragment,{children:[i?l.jsxDEV(f,{headline:i,tagline:s,variant:t},void 0,!1,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:20,columnNumber:19},globalThis):null,l.jsxDEV("div",{className:a("zep-grid","zep-gap-1","md:zep-gap-1.5","xl:zep-gap-2",{"xl:zep-grid-cols-2":e.length===2,"xl:zep-grid-cols-4":[4,7,8,11,12].includes(e.length),"xl:zep-grid-cols-5":[5,9,10,13,14,15].includes(e.length),"md:zep-grid-cols-2":[2,4].includes(e.length),"md:zep-grid-cols-3":[3,5,6,7,8,9,10,11,12,13,14,15].includes(e.length)}),children:c.map(n=>l.jsxDEV(g,{className:a("zep-w-full",m),...n,variant:t,isMultiListItem:!0,isFooterList:u},n.headline,!1,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:31,columnNumber:11},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:21,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:19,columnNumber:5},globalThis)},o=({isFooterList:i=!1,isPatternPart:e=!1,className:s,...t})=>e?l.jsxDEV("div",{className:a("zep-flex-col","zep-flex","zep-gap-2","sm:zep-gap-3","xl:zep-gap-4",s),children:l.jsxDEV(r,{...t,isPatternPart:e,isFooterList:i},void 0,!1,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:54,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:53,columnNumber:7},globalThis):l.jsxDEV(d,{className:a("zep-flex-col","zep-flex","zep-gap-2","sm:zep-gap-3","xl:zep-gap-4",s),children:l.jsxDEV(r,{...t,isPatternPart:e,isFooterList:i},void 0,!1,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:61,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:60,columnNumber:5},globalThis);try{o.displayName="MultiLinkList",o.__docgenInfo={description:"",displayName:"MultiLinkList",props:{linkLists:{defaultValue:null,description:"",name:"linkLists",required:!0,type:{name:"LinkListItemProps[]"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},isPatternPart:{defaultValue:{value:"false"},description:"",name:"isPatternPart",required:!1,type:{name:"boolean"}},linkListItemClassname:{defaultValue:null,description:"",name:"linkListItemClassname",required:!1,type:{name:"string"}},isFooterList:{defaultValue:{value:"false"},description:"",name:"isFooterList",required:!1,type:{name:"boolean"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},showArrow:{defaultValue:null,description:"",name:"showArrow",required:!1,type:{name:"boolean"}}}}}catch{}export{o as M};
