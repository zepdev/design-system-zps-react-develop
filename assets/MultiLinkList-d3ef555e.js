import{j as l}from"./jsx-dev-runtime-8ab8c10c.js";import{c as s}from"./clsx-0839fdbe.js";import{G as c}from"./global-variants-71b69725.js";import{H as u}from"./HeaderShortComponent-92fd3cd1.js";import{L as p}from"./LinkListItem-e122397b.js";import{L as d}from"./Layout-ac6d9e38.js";const a=({headline:i,linkLists:e,tagline:t,variant:n=c.Zps})=>{const m=e.length>15?e.slice(0,15):e;return l.jsxDEV(l.Fragment,{children:[i?l.jsxDEV(u,{headline:i,tagline:t,variant:n},void 0,!1,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:20,columnNumber:11},globalThis):null,l.jsxDEV("div",{className:s("zep-grid","zep-gap-1","md:zep-gap-1.5","xl:zep-gap-2",{"xl:zep-grid-cols-2":e.length===2,"xl:zep-grid-cols-4":[4,7,8,11,12].includes(e.length),"xl:zep-grid-cols-5":[5,9,10,13,14,15].includes(e.length),"md:zep-grid-cols-2":[2,4].includes(e.length),"md:zep-grid-cols-3":[3,5,6,7,8,9,10,11,12,13,14,15].includes(e.length)}),children:m.map(r=>l.jsxDEV(p,{className:"zep-w-full",...r,variant:n,isMultiListItem:!0},r.headline,!1,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:33,columnNumber:11},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:23,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:17,columnNumber:5},globalThis)},o=({isPatternPart:i=!1,className:e,...t})=>i?l.jsxDEV("div",{className:s("zep-flex-col","zep-flex","zep-gap-2","sm:zep-gap-3","xl:zep-gap-4",e),children:l.jsxDEV(a,{...t,isPatternPart:i},void 0,!1,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:54,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:53,columnNumber:7},globalThis):l.jsxDEV(d,{className:s("zep-flex-col","zep-flex","zep-gap-2","sm:zep-gap-3","xl:zep-gap-4",e),children:l.jsxDEV(a,{...t,isPatternPart:i},void 0,!1,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:61,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:60,columnNumber:5},globalThis);try{o.displayName="MultiLinkList",o.__docgenInfo={description:"",displayName:"MultiLinkList",props:{linkLists:{defaultValue:null,description:"",name:"linkLists",required:!0,type:{name:"LinkListItemProps[]"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},isPatternPart:{defaultValue:{value:"false"},description:"",name:"isPatternPart",required:!1,type:{name:"boolean"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},showArrow:{defaultValue:null,description:"",name:"showArrow",required:!1,type:{name:"boolean"}}}}}catch{}export{o as M};