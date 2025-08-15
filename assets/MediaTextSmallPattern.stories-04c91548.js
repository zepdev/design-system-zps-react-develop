import{a as g,G as a}from"./global-variants-893e06e6.js";import{a as e}from"./mocks-dd8b5ca4.js";import{j as l,c as f}from"./clsx-24df0f47.js";import{M as J}from"./MediaTextSmall-215e5b15.js";import{b as K}from"./commonCSS-cc68a568.js";import{H as Q}from"./HeaderLongComponent-6933c0a9.js";import{L as U}from"./Layout-ecccc0bb.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./index-1a504dbd.js";import"./RichText-c22d138c.js";import"./jsx-runtime-6f6342d7.js";import"./index.es16-c80ee037.js";import"./index.es32-95f1013f.js";import"./index.es13-aa933637.js";import"./index.es17-40e95622.js";import"./index.es18-26f46603.js";import"./getUrlWithTrailingSlash-c6e10e92.js";import"./ZpsButton-cbdba7f3.js";import"./index.es25-c99d3495.js";import"./index.es36-796b080a.js";import"./getDataLayer-2559cd39.js";import"./tw-merge-1166cefb.js";const v=({items:n,id:W,headline:h,variant:E=a.Zps,...G})=>{const i=n.length>12?n.slice(0,12):n,p=()=>{switch(E){case a.Cat:return g.CatBg;default:return g.ZpsBg}};return l.jsxDEV(U,{id:W,wrapperClassname:K[p()??g.ZpsBg],className:f("zep-flex","zep-flex-col","zep-py-3","sm:zep-py-4","md:zep-py-5","md:zep-gap-4","sm:zep-gap-3","zep-gap-2.5"),children:l.jsxDEV("div",{"data-testid":"media-text-small-pattern",children:[l.jsxDEV("div",{"data-testid":"media-text-small-pattern-headline",className:"zep-mb-2.5 sm:zep-mb-3 md:zep-mb-4 xl:zep-mb-5",children:h&&l.jsxDEV(Q,{variant:p(),headline:h,...G},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text-small-pattern/MediaTextSmallPattern.tsx",lineNumber:43,columnNumber:24},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text-small-pattern/MediaTextSmallPattern.tsx",lineNumber:42,columnNumber:9},globalThis),l.jsxDEV("div",{"data-testid":"media-text-small-pattern-items",children:n&&l.jsxDEV("div",{className:f("zep-grid","zep-gap-1","md:zep-gap-1.5","xl:zep-gap-2",{"xl:zep-grid-cols-3":[2,3,6,9].includes(i.length),"xl:zep-grid-cols-4":[4,5,7,8,10,11,12].includes(i.length),"md:zep-grid-cols-2":[0,1,2,4].includes(i.length),"md:zep-grid-cols-3":[3,5,6,7,8,9,10,11,12].includes(i.length),"sm:zep-grid-cols-2":!0}),children:n.map((D,O)=>l.jsxDEV(J,{variant:p(),...D},O,!1,{fileName:"/home/circleci/project/src/components/media-text-small-pattern/MediaTextSmallPattern.tsx",lineNumber:58,columnNumber:17},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text-small-pattern/MediaTextSmallPattern.tsx",lineNumber:48,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text-small-pattern/MediaTextSmallPattern.tsx",lineNumber:46,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/media-text-small-pattern/MediaTextSmallPattern.tsx",lineNumber:41,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text-small-pattern/MediaTextSmallPattern.tsx",lineNumber:32,columnNumber:5},globalThis)};try{v.displayName="MediaTextSmallPattern",v.__docgenInfo={description:"",displayName:"MediaTextSmallPattern",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"MediaTextSmallProps[]"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_self"'},{value:'"_blank"'}]}}}}}catch{}const Se={title:"Patterns/MediaTextSmallPattern",component:v,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:["Zps","Cat"]}}}},r={args:{items:new Array(2).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,linkText:"Link Text",type:"link",headerButtonIcon:"external-link",variant:"ZPS"}},t={args:{items:new Array(2).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,linkText:"Link Text",type:"link",headerButtonIcon:"arrow-long-right",variant:a.Zps}},s={args:{items:new Array(3).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,variant:a.Zps}},o={args:{items:new Array(4).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",description:e,variant:"ZPS"}},m={args:{items:new Array(5).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,variant:a.Zps}},u={args:{items:new Array(6).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,variant:a.Zps}},c={args:{items:new Array(7).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,variant:a.Zps}},d={args:{items:new Array(8).fill({headline:"Headline",description:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e,variant:a.Zps}};var x,y,S;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    items: new Array(2).fill({
      headline: 'Headline',
      description: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText,
    linkText: 'Link Text',
    type: 'link',
    headerButtonIcon: 'external-link',
    variant: 'ZPS'
  } as MediaTextSmallPatternProps
}`,...(S=(y=r.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var w,T,k;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    items: new Array(2).fill({
      headline: 'Headline',
      description: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText,
    linkText: 'Link Text',
    type: 'link',
    headerButtonIcon: 'arrow-long-right',
    variant: GlobalVariants.Zps
  } as MediaTextSmallPatternProps
}`,...(k=(T=t.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var P,b,M;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    items: new Array(3).fill({
      headline: 'Headline',
      description: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText,
    variant: GlobalVariants.Zps
  } as MediaTextSmallPatternProps
}`,...(M=(b=s.parameters)==null?void 0:b.docs)==null?void 0:M.source}}};var Z,A,V;o.parameters={...o.parameters,docs:{...(Z=o.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    items: new Array(4).fill({
      headline: 'Headline',
      description: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    description: mockRichText,
    variant: 'ZPS'
  } as MediaTextSmallPatternProps
}`,...(V=(A=o.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var _,N,L;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    items: new Array(5).fill({
      headline: 'Headline',
      description: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText,
    variant: GlobalVariants.Zps
  } as MediaTextSmallPatternProps
}`,...(L=(N=m.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var z,H,I;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    items: new Array(6).fill({
      headline: 'Headline',
      description: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText,
    variant: GlobalVariants.Zps
  } as MediaTextSmallPatternProps
}`,...(I=(H=u.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var C,R,j;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    items: new Array(7).fill({
      headline: 'Headline',
      description: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText,
    variant: GlobalVariants.Zps
  } as MediaTextSmallPatternProps
}`,...(j=(R=c.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var F,B,q;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    items: new Array(8).fill({
      headline: 'Headline',
      description: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText,
    variant: GlobalVariants.Zps
  } as MediaTextSmallPatternProps
}`,...(q=(B=d.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};const we=["Default","WithHeadline","With3Items","With4Items","With5Items","With6Items","With7Items","With8Items"];export{r as Default,s as With3Items,o as With4Items,m as With5Items,u as With6Items,c as With7Items,d as With8Items,t as WithHeadline,we as __namedExportsOrder,Se as default};
