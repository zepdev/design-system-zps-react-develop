import{G as l}from"./global-variants-71b69725.js";import{j as a}from"./jsx-dev-runtime-8ab8c10c.js";import{r as L}from"./index-b1e7e93e.js";import{H as j}from"./HeaderLongComponent-1a6e7fe0.js";import{C}from"./CardEvent-1f744350.js";import{B as N,Z as P}from"./ZpsButton-5c2a76e8.js";import{L as _}from"./Layout-a8c3c09c.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-0bcfc29a.js";import"./jsx-runtime-6f6342d7.js";import"./index.es31-95f1013f.js";import"./index.es13-cfbbaaf2.js";import"./clsx-0839fdbe.js";import"./RichText-c06f2dc1.js";import"./index.es18-4e559a5f.js";import"./commonCSS-0b9dd3ad.js";import"./index.es24-551679ca.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";const o=({items:t,variant:n,headline:f,buttonLabel:x,...w})=>{const[m,S]=L.useState(10),z=()=>{S(e=>Math.min(e+10,t.length))},E=t.slice(0,m);return a.jsxDEV(_,{className:"zep-inline-grid zep-gap-2.5 sm:zep-gap-3 md:zep-gap-4 zep-justify-center zep-bg-greyscale-100",children:[a.jsxDEV(j,{headline:f,variant:n,...w},void 0,!1,{fileName:"/home/circleci/project/src/components/card-event-pattern/CardEventPattern.tsx",lineNumber:26,columnNumber:7},globalThis),a.jsxDEV("div",{"data-testid":"zep-card-event",children:E.map((e,p)=>a.jsxDEV("div",{className:"zep-mb-1 sm:zep-mb-1.5 xl:zep-mb-2  zep-bg-greyscale-0",children:a.jsxDEV(C,{headline:e.headline,imageSrc:e.imageSrc,imageAlt:e.imageAlt,description:e.description,location:e.location,date:e.date,variant:n,linkSrc:e.linkSrc,linkLabel:e.linkLabel},p,!1,{fileName:"/home/circleci/project/src/components/card-event-pattern/CardEventPattern.tsx",lineNumber:37,columnNumber:13},globalThis)},p,!1,{fileName:"/home/circleci/project/src/components/card-event-pattern/CardEventPattern.tsx",lineNumber:33,columnNumber:11},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/card-event-pattern/CardEventPattern.tsx",lineNumber:31,columnNumber:7},globalThis),m<t.length&&a.jsxDEV("div",{className:"zep-justify-center zep-items-center zep-flex",children:a.jsxDEV(N,{label:x,onClick:z,variant:P.SecondaryZps},void 0,!1,{fileName:"/home/circleci/project/src/components/card-event-pattern/CardEventPattern.tsx",lineNumber:56,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card-event-pattern/CardEventPattern.tsx",lineNumber:55,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/card-event-pattern/CardEventPattern.tsx",lineNumber:25,columnNumber:5},globalThis)};try{o.displayName="CardEventPattern",o.__docgenInfo={description:"",displayName:"CardEventPattern",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:'Omit<CardEventProps, "variant">[]'}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},buttonLabel:{defaultValue:null,description:"",name:"buttonLabel",required:!0,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Y={title:"Patterns/CardEventPattern",component:o,tags:["autodocs"],argTypes:{items:{control:{type:"array"}},variant:{control:{type:"radio",options:Object.keys(l)}}}},i={args:{headline:"main headline",items:new Array(5).fill(null).map((t,n)=>({headline:`Headline ${n+1}`,imageSrc:"https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg",imageAlt:"worker img",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",location:"Berlin",date:"24.12.2023",linkSrc:"https://google.com",linkLabel:"Click me"})),variant:l.Zps,buttonLabel:"Weitere Ergebnisse anzeigen"}},r={args:{headline:"main headline",items:new Array(20).fill(null).map((t,n)=>({headline:`Headline ${n+1}`,imageSrc:"https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg",imageAlt:"worker img",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",location:"Berlin",date:"24.12.2023",linkSrc:"https://google.com",linkLabel:"Click me"})),buttonLabel:"Weitere Ergebnisse anzeigen",variant:l.Zps,tagline:"Zeppelin Power Systems",linkText:"Alle Lösungen für Marine anzeigen",type:"link"}},s={args:{headline:"main headline",items:new Array(100).fill(null).map((t,n)=>({headline:`Headline ${n+1}`,imageSrc:"https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg",imageAlt:"worker img",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",location:"Berlin",date:"24.12.2023",linkSrc:"https://google.com",linkLabel:"Click me"})),buttonLabel:"Weitere Ergebnisse anzeigen",variant:l.Zps,tagline:"Zeppelin Power Systems",linkText:"Alle Lösungen für Marine anzeigen",type:"link"}};var c,d,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,h,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var y,v,k;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(k=(v=s.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};const ee=["With5Items","With20Items","With100Items"];export{s as With100Items,r as With20Items,i as With5Items,ee as __namedExportsOrder,Y as default};
