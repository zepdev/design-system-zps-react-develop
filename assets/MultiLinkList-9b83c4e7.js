import{j as l}from"./jsx-dev-runtime-8ab8c10c.js";import{c as a}from"./clsx-0839fdbe.js";import{G as m}from"./global-variants-0f433d85.js";import{H as c}from"./HeaderShortComponent-11eb512b.js";import{L as p}from"./LinkListItem-3f4326dc.js";const r=({headline:i,className:n,linkLists:e,variant:t=m.Zps})=>{const o=e.length>10?e.slice(0,10):e;return l.jsxDEV("div",{className:a("zep-flex-col","zep-flex","zep-gap-2","sm:zep-gap-3","xl:zep-gap-4",n),children:[i?l.jsxDEV(c,{className:"zep-w-[35%]",headline:i,variant:t},void 0,!1,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:18,columnNumber:19},globalThis):null,l.jsxDEV("div",{className:a("zep-grid","zep-gap-1","md:zep-gap-1.5","xl:zep-gap-2",{"xl:zep-grid-cols-2":e.length===2,"xl:zep-grid-cols-4":[4,7,8].includes(e.length),"xl:zep-grid-cols-5":[5,9,10].includes(e.length),"md:zep-grid-cols-2":[2,4].includes(e.length),"md:zep-grid-cols-3":[3,5,6,7,8,9,10].includes(e.length)}),children:o.map(s=>l.jsxDEV(p,{className:"zep-w-full",...s,variant:t,isMultiListItem:!0},s.headline,!1,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:29,columnNumber:11},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:19,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:17,columnNumber:5},globalThis)};try{r.displayName="MultiLinkList",r.__docgenInfo={description:"",displayName:"MultiLinkList",props:{linkLists:{defaultValue:null,description:"",name:"linkLists",required:!0,type:{name:"LinkListItemProps[]"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}}}}}catch{}export{r as M};
