import{G as e}from"./global-variants-893e06e6.js";import{j as i}from"./jsx-dev-runtime-8ab8c10c.js";import{c as S}from"./clsx-0839fdbe.js";import{L as ne}from"./Layout-a8c3c09c.js";import{H as se}from"./HeaderLongComponent-e8a453a7.js";import{C as te}from"./CardSquare-ffce3450.js";import{S as oe}from"./Scrollbar-75feef59.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-0bcfc29a.js";import"./jsx-runtime-6f6342d7.js";import"./index.es31-95f1013f.js";import"./index.es13-cfbbaaf2.js";import"./RichText-755c164f.js";import"./index.es18-4e559a5f.js";import"./ZpsButton-5c2a76e8.js";import"./index.es24-551679ca.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";import"./useContainerDimensions-a1b6568a.js";import"./commonCSS-cc68a568.js";const v=({items:a,variant:w,headline:f,id:ie,...le})=>{const r=a.length>12?a.slice(0,12):a;return i.jsxDEV(ne,{id:ie,className:S("zep-flex","zep-flex-col","md:zep-gap-4","sm:zep-gap-3","zep-gap-2.5"),children:[f&&i.jsxDEV(se,{headline:f,...le,variant:w},void 0,!1,{fileName:"/home/circleci/project/src/components/card-square-list/CardSquareList.tsx",lineNumber:20,columnNumber:20},globalThis),i.jsxDEV(oe,{scrollOrientation:"horizontal",dataTestId:"zep-card-square-list",className:S("zep-flex","md:zep-overflow-hidden","md:zep-grid","md:zep-grid-flow-row","zep-gap-1","md:zep-gap-1.5","xl:zep-gap-2",{"xl:zep-grid-cols-2 !zep-flex":r.length<=2,"xl:zep-grid-cols-3":[3,5,6,9].includes(r.length),"xl:zep-grid-cols-4":[4,7,8,10,11,12].includes(r.length),"md:zep-grid-cols-2":[0,1,2,4].includes(r.length),"md:zep-grid-cols-3":[3,5,6,7,8,9,10,11,12].includes(r.length)}),controlId:"zep-card-square-scrollbar",children:a==null?void 0:a.map(k=>i.jsxDEV(te,{...k,variant:w},k.headline,!1,{fileName:"/home/circleci/project/src/components/card-square-list/CardSquareList.tsx",lineNumber:43,columnNumber:11},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/card-square-list/CardSquareList.tsx",lineNumber:21,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/card-square-list/CardSquareList.tsx",lineNumber:19,columnNumber:5},globalThis)};try{v.displayName="CardSquareList",v.__docgenInfo={description:"",displayName:"CardSquareList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:'Omit<CardSquareProps, "variant">[]'}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"add-circle"'},{value:'"marine-ship"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const Le={title:"Patterns/CardSquareList",component:v,tags:["autodocs"],argTypes:{items:{control:{type:"array"}},variant:{control:{type:"radio",options:Object.keys(e)}}}},l={args:{items:new Array(2).fill({headline:"Headline",imageSrc:"https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},n={args:{items:new Array(2).fill({headline:"Headline ",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps,headline:"Zukunftsweisende Antriebslösungen und mehr für die moderne Schifffahrt",tagline:"Zeppelin Power Systems Lösungen für Marine",linkText:"Alle Lösungen für Marine anzeigen",type:"link"}},s={args:{items:new Array(3).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},t={args:{items:new Array(4).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},o={args:{items:new Array(5).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},u={args:{items:new Array(6).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},c={args:{items:new Array(7).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},p={args:{items:new Array(8).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},m={args:{items:new Array(9).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},d={args:{items:new Array(10).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},g={args:{items:new Array(11).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},h={args:{items:new Array(12).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}};var y,A,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    items: new Array(2).fill({
      headline: 'Headline',
      imageSrc: 'https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com'
    }),
    variant: GlobalVariants.Zps
  } as CardSquareListProps
}`,...(b=(A=l.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var q,T,x;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    items: new Array(2).fill({
      headline: 'Headline ',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com'
    }),
    variant: GlobalVariants.Zps,
    headline: 'Zukunftsweisende Antriebslösungen und mehr für die moderne Schifffahrt',
    tagline: 'Zeppelin Power Systems Lösungen für Marine',
    linkText: 'Alle Lösungen für Marine anzeigen',
    type: 'link'
  } as CardSquareListProps
}`,...(x=(T=n.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var C,H,z;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    items: new Array(3).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com'
    }),
    variant: GlobalVariants.Zps
  } as CardSquareListProps
}`,...(z=(H=s.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var V,L,Z;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    items: new Array(4).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com'
    }),
    variant: GlobalVariants.Zps
  } as CardSquareListProps
}`,...(Z=(L=t.parameters)==null?void 0:L.docs)==null?void 0:Z.source}}};var I,W,P;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    items: new Array(5).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com'
    }),
    variant: GlobalVariants.Zps
  } as CardSquareListProps
}`,...(P=(W=o.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var N,j,G;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    items: new Array(6).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com'
    }),
    variant: GlobalVariants.Zps
  } as CardSquareListProps
}`,...(G=(j=u.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var _,E,D;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    items: new Array(7).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com'
    }),
    variant: GlobalVariants.Zps
  } as CardSquareListProps
}`,...(D=(E=c.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var M,F,B;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    items: new Array(8).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com'
    }),
    variant: GlobalVariants.Zps
  } as CardSquareListProps
}`,...(B=(F=p.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var O,R,J;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    items: new Array(9).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com'
    }),
    variant: GlobalVariants.Zps
  } as CardSquareListProps
}`,...(J=(R=m.parameters)==null?void 0:R.docs)==null?void 0:J.source}}};var K,Q,U;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    items: new Array(10).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com'
    }),
    variant: GlobalVariants.Zps
  } as CardSquareListProps
}`,...(U=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,$;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    items: new Array(11).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com'
    }),
    variant: GlobalVariants.Zps
  } as CardSquareListProps
}`,...($=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var ee,ae,re;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    items: new Array(12).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description',
      url: 'https://www.google.com'
    }),
    variant: GlobalVariants.Zps
  } as CardSquareListProps
}`,...(re=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};const Ze=["Default","WithHeadline","With3Items","With4Items","With5Items","With6Items","With7Items","With8Items","With9Items","With10Items","With11Items","With12Items"];export{l as Default,d as With10Items,g as With11Items,h as With12Items,s as With3Items,t as With4Items,o as With5Items,u as With6Items,c as With7Items,p as With8Items,m as With9Items,n as WithHeadline,Ze as __namedExportsOrder,Le as default};
