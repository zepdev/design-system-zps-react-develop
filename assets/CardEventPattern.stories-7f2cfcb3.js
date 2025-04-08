import{G as o}from"./global-variants-893e06e6.js";import{j as l}from"./clsx-24df0f47.js";import{r as L}from"./index-b1e7e93e.js";import{H as j}from"./HeaderLongComponent-9a342d46.js";import{C}from"./CardEvent-014e7479.js";import{B as P,Z as N}from"./ZpsButton-b3b3ee89.js";import{L as _}from"./Layout-ecccc0bb.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-1f4fc36d.js";import"./jsx-runtime-6f6342d7.js";import"./index.es31-95f1013f.js";import"./index.es13-373f5050.js";import"./index.es17-40e95622.js";import"./getUrlWithTrailingSlash-1f1feb13.js";import"./RichText-1af2ae67.js";import"./index.es18-4e559a5f.js";import"./commonCSS-cc68a568.js";import"./index.es24-551679ca.js";import"./index.es35-79e31a69.js";import"./index-1a504dbd.js";import"./tw-merge-1166cefb.js";const s=({items:n,variant:a,headline:k,buttonLabel:w,...x})=>{const[u,z]=L.useState(10),S=()=>{z(e=>Math.min(e+10,n.length))},E=n.slice(0,u);return l.jsxDEV(_,{className:"zep-inline-grid lg:zep-py-5 md:zep-py-6 sm:zep-py-4 zep-py-3 zep-gap-2.5 sm:zep-gap-3 md:zep-gap-4 zep-justify-center zep-bg-greyscale-100",children:[l.jsxDEV(j,{headline:k,variant:a,...x},void 0,!1,{fileName:"/home/circleci/project/src/components/card-event-pattern/CardEventPattern.tsx",lineNumber:26,columnNumber:7},globalThis),l.jsxDEV("div",{"data-testid":"zep-card-event",children:E.map((e,m)=>l.jsxDEV("div",{className:"zep-mb-1 sm:zep-mb-1.5 xl:zep-mb-2  zep-bg-greyscale-0",children:l.jsxDEV(C,{headline:e.headline,imageSrc:e.imageSrc,imageAlt:e.imageAlt,description:e.description,location:e.location,date:e.date,variant:a,linkSrc:e.linkSrc,linkLabel:e.linkLabel},m,!1,{fileName:"/home/circleci/project/src/components/card-event-pattern/CardEventPattern.tsx",lineNumber:37,columnNumber:13},globalThis)},m,!1,{fileName:"/home/circleci/project/src/components/card-event-pattern/CardEventPattern.tsx",lineNumber:33,columnNumber:11},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/card-event-pattern/CardEventPattern.tsx",lineNumber:31,columnNumber:7},globalThis),u<n.length&&l.jsxDEV("div",{className:"zep-justify-center zep-items-center zep-flex",children:l.jsxDEV(P,{label:w,onClick:S,variant:N.SecondaryZps},void 0,!1,{fileName:"/home/circleci/project/src/components/card-event-pattern/CardEventPattern.tsx",lineNumber:56,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card-event-pattern/CardEventPattern.tsx",lineNumber:55,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/card-event-pattern/CardEventPattern.tsx",lineNumber:25,columnNumber:5},globalThis)};try{s.displayName="CardEventPattern",s.__docgenInfo={description:"",displayName:"CardEventPattern",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:'Omit<CardEventProps, "variant">[]'}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},buttonLabel:{defaultValue:null,description:"",name:"buttonLabel",required:!0,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const ee={title:"Patterns/CardEventPattern",component:s,tags:["autodocs"],argTypes:{items:{control:{type:"array"}},variant:{control:{type:"radio",options:Object.keys(o)}}}},t={args:{headline:"main headline",items:new Array(5).fill(null).map((n,a)=>({headline:`Headline ${a+1}`,imageSrc:"https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg",imageAlt:"worker img",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",location:"Berlin",date:"24.12.2023",linkSrc:"https://google.com",linkLabel:"Click me"})),variant:o.Zps,buttonLabel:"Weitere Ergebnisse anzeigen"}},r={args:{headline:"main headline",items:new Array(20).fill(null).map((n,a)=>({headline:`Headline ${a+1}`,imageSrc:"https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg",imageAlt:"worker img",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",location:"Berlin",date:"24.12.2023",linkSrc:"https://google.com",linkLabel:"Click me"})),buttonLabel:"Weitere Ergebnisse anzeigen",variant:o.Zps,tagline:"Zeppelin Power Systems",linkText:"Alle Lösungen für Marine anzeigen",type:"link"}},i={args:{headline:"main headline",items:new Array(100).fill(null).map((n,a)=>({headline:`Headline ${a+1}`,imageSrc:"https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg",imageAlt:"worker img",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",location:"Berlin",date:"24.12.2023",linkSrc:"https://google.com",linkLabel:"Click me"})),buttonLabel:"Weitere Ergebnisse anzeigen",variant:o.Zps,tagline:"Zeppelin Power Systems",linkText:"Alle Lösungen für Marine anzeigen",type:"link"}};var c,p,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    headline: 'main headline',
    items: new Array(5).fill(null).map((_, index) => ({
      headline: \`Headline \${index + 1}\`,
      imageSrc: 'https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg',
      imageAlt: 'worker img',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      location: 'Berlin',
      date: '24.12.2023',
      linkSrc: 'https://google.com',
      linkLabel: 'Click me'
    })),
    variant: GlobalVariants.Zps,
    buttonLabel: 'Weitere Ergebnisse anzeigen'
  } as CardEventPatternProps
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var v,g,h;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    headline: 'main headline',
    items: new Array(20).fill(null).map((_, index) => ({
      headline: \`Headline \${index + 1}\`,
      imageSrc: 'https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg',
      imageAlt: 'worker img',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      location: 'Berlin',
      date: '24.12.2023',
      linkSrc: 'https://google.com',
      linkLabel: 'Click me'
    })),
    buttonLabel: 'Weitere Ergebnisse anzeigen',
    variant: GlobalVariants.Zps,
    tagline: 'Zeppelin Power Systems',
    linkText: 'Alle Lösungen für Marine anzeigen',
    type: 'link'
  } as CardEventPatternProps
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,b,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    headline: 'main headline',
    items: new Array(100).fill(null).map((_, index) => ({
      headline: \`Headline \${index + 1}\`,
      imageSrc: 'https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg',
      imageAlt: 'worker img',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      location: 'Berlin',
      date: '24.12.2023',
      linkSrc: 'https://google.com',
      linkLabel: 'Click me'
    })),
    buttonLabel: 'Weitere Ergebnisse anzeigen',
    variant: GlobalVariants.Zps,
    tagline: 'Zeppelin Power Systems',
    linkText: 'Alle Lösungen für Marine anzeigen',
    type: 'link'
  } as CardEventPatternProps
}`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const ae=["With5Items","With20Items","With100Items"];export{i as With100Items,r as With20Items,t as With5Items,ae as __namedExportsOrder,ee as default};
