import{m as l}from"./mocks-dd8b5ca4.js";import{j as e}from"./jsx-dev-runtime-8ab8c10c.js";import{c as o}from"./clsx-0839fdbe.js";import{G as g}from"./global-variants-893e06e6.js";import{Z as A,l as S}from"./index.es16-e5ab9e8b.js";import{g as E}from"./getUrlWithoutTrailingSlash-e7815512.js";import{H as M}from"./HeaderLongComponent-cca936b8.js";import{R as L}from"./RichText-ba39bdec.js";import{B as R,Z as c}from"./ZpsButton-e62a4611.js";import{L as G}from"./Layout-da978b47.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-6f6342d7.js";import"./index.es31-95f1013f.js";import"./index.es13-29543acb.js";import"./index.es18-4e559a5f.js";import"./index.es24-551679ca.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";const n=({productDetails:v,imageAlt:N,imageSrc:k,buttonText:a,imageAlignment:s,buttonVariant:t,onClick:T,buttonIcon:m,buttonIconPosition:p="left",buttonType:d="default",variant:i=g.Zps,headline:h,buttonUrl:f,id:j,...P})=>{const D=s==="right"?"md:zep-flex-row-reverse":"md:zep-flex-row",q=s==="right"?"md:-zep-mr-[114px] xl:-zep-mr-[244px]":"md:-zep-ml-[114px] xl:-zep-ml-[244px]";return e.jsxDEV(G,{id:j,className:"zep-flex zep-flex-col zep-gap-2.5 sm:zep-gap-3 md:zep-gap-4 xl:zep-overflow-x-visible zep-overflow-x-hidden",children:[h&&e.jsxDEV(M,{headline:h,...P,variant:i},void 0,!1,{fileName:"/home/circleci/project/src/components/product-highlight/Product-highlight.tsx",lineNumber:38,columnNumber:20},globalThis),e.jsxDEV("div",{className:o(q,"zep-flex",D,"zep-flex-col","xl:zep-gap-2","sm:zep-gap-1.5","zep-gap-1"),children:[e.jsxDEV("div",{className:o("zep-w-full zep-relative"),children:e.jsxDEV("img",{className:o("zep-aspect-[4/3]","zep-w-full","zep-object-cover"),src:k,alt:N},void 0,!1,{fileName:"/home/circleci/project/src/components/product-highlight/Product-highlight.tsx",lineNumber:51,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/product-highlight/Product-highlight.tsx",lineNumber:50,columnNumber:9},globalThis),e.jsxDEV("div",{className:"zep-px-1 sm:zep-px-1.5 lg:zep-px-2 zep-flex zep-flex-col xl:zep-gap-3 sm:zep-gap-2 zep-gap-1 md:zep-min-w-[35%]",children:[e.jsxDEV("div",{className:"zep-flex zep-flex-col zep-gap-1 sm:zep-gap-1.5 md:zep-gap-1 xl:zep-gap-1.5",children:v.map((B,H)=>e.jsxDEV("div",{className:"zep-border-b-1 zep-border-b-greyscale-400 last:zep-border-b-[0] first:zep-pt-[0] last:zep-pb-[0] zep-py-1 sm:zep-py-1.5 md:zep-py-1 xl:zep-py-1.5",children:e.jsxDEV(L,{content:B,variant:i},void 0,!1,{fileName:"/home/circleci/project/src/components/product-highlight/Product-highlight.tsx",lineNumber:61,columnNumber:19},globalThis)},H,!1,{fileName:"/home/circleci/project/src/components/product-highlight/Product-highlight.tsx",lineNumber:57,columnNumber:17},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/product-highlight/Product-highlight.tsx",lineNumber:54,columnNumber:11},globalThis),a&&t==="link"&&e.jsxDEV(A,{className:i===g.Zps?"zep-text-indigo-500":"zep-text-typography-dark-100",label:a,mode:S.Inline,icon:m,iconPlacement:p==="left"?"before":"after",download:d==="download",href:E(f)},void 0,!1,{fileName:"/home/circleci/project/src/components/product-highlight/Product-highlight.tsx",lineNumber:67,columnNumber:13},globalThis),a&&t!=="link"&&e.jsxDEV(R,{icon:m,iconPosition:p,label:a,buttonType:d,onClick:T,variant:t,href:f},void 0,!1,{fileName:"/home/circleci/project/src/components/product-highlight/Product-highlight.tsx",lineNumber:78,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/product-highlight/Product-highlight.tsx",lineNumber:53,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/product-highlight/Product-highlight.tsx",lineNumber:39,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/product-highlight/Product-highlight.tsx",lineNumber:34,columnNumber:5},globalThis)};try{n.displayName="ProductHighLight",n.__docgenInfo={description:"",displayName:"ProductHighLight",props:{imageAlignment:{defaultValue:null,description:"",name:"imageAlignment",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!0,type:{name:"string"}},productDetails:{defaultValue:null,description:"",name:"productDetails",required:!0,type:{name:"BlocksContent[]"}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!1,type:{name:"string"}},buttonVariant:{defaultValue:null,description:"",name:"buttonVariant",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"primary"'},{value:'"secondary"'},{value:'"secondary-cat"'},{value:'"secondary-zps"'},{value:'"tertiary"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},buttonUrl:{defaultValue:null,description:"",name:"buttonUrl",required:!1,type:{name:"string"}},buttonType:{defaultValue:{value:"default"},description:"",name:"buttonType",required:!1,type:{name:"enum",value:[{value:'"download"'},{value:'"default"'}]}},buttonIcon:{defaultValue:null,description:"",name:"buttonIcon",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"email"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"location"'},{value:'"list"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"table"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"time"'},{value:'"copy"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"search"'},{value:'"delete-circle"'},{value:'"alert"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"add-circle"'},{value:'"marine-ship"'}]}},buttonIconPosition:{defaultValue:{value:"left"},description:"",name:"buttonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary-button"'},{value:'"secondary-button"'},{value:'"link"'},{value:'"none"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"email"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"location"'},{value:'"list"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"table"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"time"'},{value:'"copy"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"search"'},{value:'"delete-circle"'},{value:'"alert"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"add-circle"'},{value:'"marine-ship"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const ie={title:"Components/ProductHighLight",component:n,tags:["autodocs"],argTypes:{buttonVariant:{control:{type:"radio",options:Object.keys(c)}}}},u={args:{productDetails:[l,l,l],imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",alt:"Lorem ipsum dolor sit ",imageAlt:"alt text",buttonText:"Button",buttonTitle:"button title",buttonVariant:c.Primary,imageAlignment:"left"}},r={args:{productDetails:[l,l,l],imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",imageAlt:"alt text",buttonText:"Button",buttonTitle:"button title",imageAlignment:"right",buttonVariant:c.Primary,buttonUrl:"url button"}};var b,x,w;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    productDetails: [mockRichTextShort, mockRichTextShort, mockRichTextShort],
    imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    alt: 'Lorem ipsum dolor sit ',
    imageAlt: 'alt text',
    buttonText: 'Button',
    buttonTitle: 'button title',
    buttonVariant: ZpsButtonVariant.Primary,
    imageAlignment: 'left'
  } as ProductHighLightProps
}`,...(w=(x=u.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var y,z,V;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    productDetails: [mockRichTextShort, mockRichTextShort, mockRichTextShort],
    imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    imageAlt: 'alt text',
    buttonText: 'Button',
    buttonTitle: 'button title',
    imageAlignment: 'right',
    buttonVariant: ZpsButtonVariant.Primary,
    buttonUrl: 'url button'
  } as ProductHighLightProps
}`,...(V=(z=r.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};const oe=["Default","RightImageAlignment"];export{u as Default,r as RightImageAlignment,oe as __namedExportsOrder,ie as default};
