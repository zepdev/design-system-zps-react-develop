import{G as e}from"./global-variants-BqXUcqLU.js";import{j as i}from"./jsx-dev-runtime-DUe1FbZV.js";import{c as y}from"./clsx-B-dksMZM.js";import{L as ce}from"./Layout-DQviVSF1.js";import{H as pe}from"./HeaderLongComponent-FKvPUCt-.js";import{S as me}from"./Scrollbar-b4EQ7nbR.js";import{C as de}from"./CardSquare-3r7tvowp.js";import"./index-CnaUG9bL.js";import"./index.es16-Cou3dY5t.js";import"./jsx-runtime-B3jrUL2l.js";import"./index.es32-D9mbuw9C.js";import"./index.es13-B2rJTKsB.js";import"./index.es17-CiSAzvV-.js";import"./getUrlWithTrailingSlash-BtqMQXK9.js";import"./linkSecurity-DjaWK124.js";import"./RichText-BQeM_ES-.js";import"./index-DdHSt6jH.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index.es18-D9ixYGCI.js";import"./ZpsButton--kieaf-Q.js";import"./index.es25-CTVOSMAe.js";import"./index.es36-BF3AzYXZ.js";import"./index-Dp3B9jqt.js";import"./getDataLayer-CP2Cgxnv.js";import"./tw-merge-Ds6tgvmq.js";import"./useContainerDimensions-DFX65AyQ.js";import"./commonCSS-CYdk8Zlu.js";import"./AiBadge-Ce5eJvsa.js";const w=({items:a,variant:f,headline:v,id:S,...ue})=>i.jsxDEV(ce,{id:S,className:y("zep-flex","zep-flex-col","md:zep-gap-4","sm:zep-gap-3","zep-gap-2.5"),children:[v&&i.jsxDEV(pe,{headline:v,...ue,variant:f},void 0,!1,{fileName:"/home/circleci/project/src/components/card-square-list/CardSquareList.tsx",lineNumber:18,columnNumber:20},void 0),i.jsxDEV(me,{scrollOrientation:"horizontal",dataTestId:"zep-card-square-list",ariaLabel:"Card list",className:y("zep-flex","lg:zep-overflow-hidden","lg:zep-grid","lg:zep-grid-flow-row","zep-gap-1","md:zep-gap-1.5","xl:zep-gap-2",{"lg:zep-grid-cols-2 xl:zep-flex":a.length<=2,"lg:zep-grid-cols-3":a.length>=3,"xl:zep-grid-cols-3":[3,5,6,9].includes(a.length),"xl:zep-grid-cols-4":[4,7,8].includes(a.length)||a.length>=10},"theme_zes:lg:zep-grid theme_zes:lg:zep-grid-cols-2"),controlId:"zep-card-square-scrollbar",children:a==null?void 0:a.map(k=>i.jsxDEV(de,{...k,variant:f,gtmHeadline:v,gtmId:S},k.headline,!1,{fileName:"/home/circleci/project/src/components/card-square-list/CardSquareList.tsx",lineNumber:43,columnNumber:11},void 0))},void 0,!1,{fileName:"/home/circleci/project/src/components/card-square-list/CardSquareList.tsx",lineNumber:19,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/circleci/project/src/components/card-square-list/CardSquareList.tsx",lineNumber:17,columnNumber:5},void 0);try{w.displayName="CardSquareList",w.__docgenInfo={description:"",displayName:"CardSquareList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:'Omit<CardSquareProps, "variant">[]'}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},containerClassName:{defaultValue:null,description:"Classes for the outer wrapper (the link's `className` is for the link).",name:"containerClassName",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary-button"'},{value:'"secondary-button"'},{value:'"link"'},{value:'"none"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"email"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"location"'},{value:'"list"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"table"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"time"'},{value:'"copy"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"search"'},{value:'"delete-circle"'},{value:'"alert"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_self"'},{value:'"_blank"'}]}}}}}catch{}const De={title:"Patterns/CardSquareList",component:w,tags:["autodocs"],argTypes:{items:{control:{type:"array"}},variant:{control:{type:"radio",options:Object.keys(e)}}}},n={args:{items:new Array(2).fill({headline:"Headline",imageSrc:"https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},s={args:{items:new Array(2).fill({headline:"Headline ",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps,headline:"Zukunftsweisende Antriebslösungen und mehr für die moderne Schifffahrt",tagline:"Zeppelin Power Systems Lösungen für Marine",linkText:"Alle Lösungen für Marine anzeigen",type:"link"}},l={args:{items:new Array(3).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},t={args:{items:new Array(4).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},o={args:{items:new Array(5).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},u={args:{items:new Array(6).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},c={args:{items:new Array(7).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},p={args:{items:new Array(8).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},m={args:{items:new Array(9).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},d={args:{items:new Array(10).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},g={args:{items:new Array(11).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},h={args:{items:new Array(12).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description",url:"https://www.google.com"}),variant:e.Zps}},r={args:{headline:"Our approach",items:["One partner","Start with your requirements","From design to installation","Support"].map(a=>({headline:a,imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description"})),variant:e.Zps}};var A,b,q;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(q=(b=n.parameters)==null?void 0:b.docs)==null?void 0:q.source}}};var C,x,T;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(T=(x=s.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var z,V,Z;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(Z=(V=l.parameters)==null?void 0:V.docs)==null?void 0:Z.source}}};var H,I,L;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(L=(I=t.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var W,N,P;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(P=(N=o.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var _,j,G;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(G=(j=u.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var E,O,D;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(D=(O=c.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var F,M,B;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(B=(M=p.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var R,J,K;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(U=d.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,$,ee;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,re,ie;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ie=(re=h.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var ne,se,le,te,oe;r.parameters={...r.parameters,docs:{...(ne=r.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    headline: 'Our approach',
    items: ['One partner', 'Start with your requirements', 'From design to installation', 'Support'].map(headline => ({
      headline,
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description'
    })),
    variant: GlobalVariants.Zps
  } as CardSquareListProps
}`,...(le=(se=r.parameters)==null?void 0:se.docs)==null?void 0:le.source},description:{story:'4 static cards with a headline: the ZES "Our approach" section (2 × 2 on ZES).',...(oe=(te=r.parameters)==null?void 0:te.docs)==null?void 0:oe.description}}};const Fe=["Default","WithHeadline","With3Items","With4Items","With5Items","With6Items","With7Items","With8Items","With9Items","With10Items","With11Items","With12Items","With4StaticItems"];export{n as Default,d as With10Items,g as With11Items,h as With12Items,l as With3Items,t as With4Items,r as With4StaticItems,o as With5Items,u as With6Items,c as With7Items,p as With8Items,m as With9Items,s as WithHeadline,Fe as __namedExportsOrder,De as default};
