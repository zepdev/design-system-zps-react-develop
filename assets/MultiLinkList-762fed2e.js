import{j as l,c as n}from"./clsx-24df0f47.js";import{G as v}from"./global-variants-893e06e6.js";import{H as m}from"./HeaderLongComponent-884ead23.js";import{L as d}from"./LinkListItem-6eb02399.js";import{L as p}from"./Layout-ecccc0bb.js";const o=({headline:u,linkLists:e,variant:i=v.Zps,linkListItemClassname:r,isFooterList:a,...s})=>l.jsxDEV(l.Fragment,{children:[u?l.jsxDEV(m,{headline:u,variant:i,...s},void 0,!1,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:19,columnNumber:19},globalThis):null,l.jsxDEV("div",{className:n("zep-grid","zep-gap-1",{"xl:zep-grid-cols-4":[4,7,8,11,12].includes(e.length),"xl:zep-grid-cols-5":[5,9,10].includes(e.length)||e.length>=13,"lg:zep-grid-cols-2":e.length===2,"lg:zep-grid-cols-3":[3,5,6].includes(e.length),"lg:zep-grid-cols-4":e.length===4||e.length>=7,"lg:zep-gap-2 md:zep-gap-1.5":!a,"lg:zep-gap-x-2 md:zep-gap-x-1.5 md:zep-gap-y-3 xl:zep-gap-y-3.5":a,"md:zep-grid-cols-2":[2,4].includes(e.length),"md:zep-grid-cols-3":e.length===3||e.length>=5}),children:e.map(t=>l.jsxDEV(d,{className:n("zep-w-full",r,{"!zep-py-[0]":a}),...t,variant:i,isMultiListItem:!0,isFooterList:a},t.headline,!1,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:34,columnNumber:11},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:20,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:18,columnNumber:5},globalThis),c=({isFooterList:u=!1,isPatternPart:e=!1,className:i,id:r,...a})=>e?l.jsxDEV("div",{className:n("zep-flex-col","zep-flex","zep-gap-2","sm:zep-gap-3","xl:zep-gap-4",i),children:l.jsxDEV(o,{...a,isPatternPart:e,isFooterList:u},void 0,!1,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:58,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:57,columnNumber:7},globalThis):l.jsxDEV(p,{id:r,className:n("zep-flex-col","zep-flex","zep-gap-2","sm:zep-gap-3","xl:zep-gap-4",i),children:l.jsxDEV(o,{...a,isPatternPart:e,isFooterList:u},void 0,!1,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:65,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:64,columnNumber:5},globalThis);try{c.displayName="MultiLinkList",c.__docgenInfo={description:"",displayName:"MultiLinkList",props:{linkLists:{defaultValue:null,description:"",name:"linkLists",required:!0,type:{name:"LinkListItemProps[]"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},isPatternPart:{defaultValue:{value:"false"},description:"",name:"isPatternPart",required:!1,type:{name:"boolean"}},linkListItemClassname:{defaultValue:null,description:"",name:"linkListItemClassname",required:!1,type:{name:"string"}},isFooterList:{defaultValue:{value:"false"},description:"",name:"isFooterList",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'},{value:'"none"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"email"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"location"'},{value:'"list"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"table"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"time"'},{value:'"copy"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"search"'},{value:'"delete-circle"'},{value:'"alert"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}export{c as M};
