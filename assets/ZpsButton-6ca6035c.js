import{j as l}from"./clsx-24df0f47.js";import{h as f}from"./index.es13-373f5050.js";import{f as b}from"./index.es24-551679ca.js";import{c as h}from"./index-1a504dbd.js";import{g as z}from"./getUrlWithTrailingSlash-1f1feb13.js";import{t as g}from"./tw-merge-1166cefb.js";var a=(e=>(e.Primary="primary",e.Secondary="secondary",e.SecondaryCat="secondary-cat",e.SecondaryZps="secondary-zps",e.Tertiary="tertiary",e))(a||{});const y={[a.Primary]:["zep-bg-secondary-default","zep-text-secondary-contrast","enabled:hover:zep-bg-secondary-hover","enabled:hover:zep-text-secondary-contrast","enabled:active:zep-bg-secondary-active","enabled:active:zep-text-secondary-contrast","disabled:zep-opacity-disabled"],[a.SecondaryZps]:["zep-bg-transparent","zep-text-typography-primary-default","enabled:hover:zep-bg-primary-hover","enabled:hover:zep-text-primary-contrast","enabled:active:zep-bg-primary-active","enabled:active:zep-text-primary-contrast","disabled:zep-opacity-disabled","zep-ring-2","zep-ring-inset","zep-ring-primary-default","enabled:hover:zep-ring-0","enabled:active:zep-ring-0","disabled:zep-ring-opacity-disabled"],[a.Secondary]:["zep-bg-transparent","zep-ring-2","zep-ring-inset","zep-text-secondary-default","zep-ring-secondary-default","enabled:hover:zep-bg-secondary-hover","enabled:hover:zep-ring-0","enabled:hover:zep-text-secondary-contrast","enabled:active:zep-bg-secondary-active","enabled:active:zep-text-secondary-contrast","enabled:active:zep-ring-0","disabled:zep-opacity-disabled"],[a.SecondaryCat]:["zep-bg-transparent","zep-ring-2","zep-ring-inset","zep-ring-neutral-dark-default","zep-text-neutral-dark-default","enabled:hover:zep-text-primary-contrast","enabled:hover:zep-ring-0","enabled:active:zep-ring-0","enabled:hover:zep-bg-neutral-dark-hover","enabled:active:zep-bg-neutral-dark-active","enabled:active:zep-text-primary-contrast","disabled:zep-bg-opacity-disabled"],[a.Tertiary]:["zep-bg-transparent","zep-text-typography-primary-default","enabled:hover:zep-underline","enabled:active:zep-font-500"]},i=h(["zep-typography-button","zep-rounded-button","zep-px-1","zep-py-0.75","zep-flex","zep-gap-0.5","zep-justify-center","focus-visible:zep-outline","focus-visible:zep-outline-3","focus-visible:zep-outline-offset-1","focus-visible:zep-outline-focus","zep-font-500"],{variants:{variant:y},defaultVariants:{variant:a.Primary}}),v=({className:e,variant:t,isLoading:o=!1,label:r,children:n,icon:u,iconPosition:s="left",...c})=>{const m=(!r||r==="")&&!n?i({variant:t}).replace("zep-px-1","zep-px-0.75"):i({variant:t});return l.jsxDEV("button",{className:g(m,"zep-w-full sm:zep-w-auto",e),...c,children:[o&&l.jsxDEV("i",{className:"mr-zep-0_5","data-testid":"loading-icon",children:"loading icon"},void 0,!1,{fileName:"/home/circleci/project/src/components/zps-button/ZpsButton.tsx",lineNumber:110,columnNumber:9},globalThis),l.jsxDEV(b,{gap:"0.5",className:s==="left"?"zep-flex-row-reverse":"",children:[r??n,u&&l.jsxDEV(f,{name:u},void 0,!1,{fileName:"/home/circleci/project/src/components/zps-button/ZpsButton.tsx",lineNumber:116,columnNumber:18},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/zps-button/ZpsButton.tsx",lineNumber:114,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/zps-button/ZpsButton.tsx",lineNumber:108,columnNumber:5},globalThis)},d=({variant:e,label:t,children:o,icon:r,iconPosition:n="left",href:u,buttonType:s="default",onClick:c,...p})=>u?l.jsxDEV("a",{download:s==="download",className:"zep-w-full sm:zep-w-fit",href:z(u),children:l.jsxDEV(v,{label:t,iconPosition:n,icon:r,className:"zep-w-full sm:zep-w-fit",variant:e,...p,children:o},void 0,!1,{fileName:"/home/circleci/project/src/components/zps-button/ZpsButton.tsx",lineNumber:140,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/zps-button/ZpsButton.tsx",lineNumber:135,columnNumber:7},globalThis):l.jsxDEV(v,{label:t,iconPosition:n,icon:r,className:"zep-w-full sm:zep-w-fit",variant:e,onClick:c,...p,children:o},void 0,!1,{fileName:"/home/circleci/project/src/components/zps-button/ZpsButton.tsx",lineNumber:154,columnNumber:5},globalThis);try{i.displayName="zpsbutton",i.__docgenInfo={description:"",displayName:"zpsbutton",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"ZpsButtonVariant | null"}},class:{defaultValue:null,description:"",name:"class",required:!1,type:{name:"ClassValue"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"ClassValue"}}}}}catch{}try{d.displayName="Button",d.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"secondary-cat"'},{value:'"secondary-zps"'},{value:'"tertiary"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},iconPosition:{defaultValue:{value:"left"},description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},buttonType:{defaultValue:{value:"default"},description:"",name:"buttonType",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"download"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}}}}}catch{}export{d as B,a as Z,y as z};
