import{G as t}from"./global-variants-BqXUcqLU.js";import{j as a}from"./jsx-dev-runtime-DxtWBBhT.js";import{c as y}from"./index-Dp3B9jqt.js";import{c as m}from"./clsx-B-dksMZM.js";import{L as b}from"./Layout-_5mG8bmf.js";import{t as P}from"./tw-merge-Ds6tgvmq.js";import"./index-cDoxnID5.js";import"./_commonjsHelpers-BosuxZz1.js";const n=({id:s,headline:v,partners:o,variant:x})=>{const z={[t.Zps]:["zep-text-typography-primary-default"],[t.Cat]:["zep-text-typography-dark-100"]},h=y([`zep-py-2
       sm:zep-py-2.5 
       md:zep-py-2 
       lg:zep-py-3 
       zep-gap-1.5 
       sm:zep-gap-2 
       lg:zep-gap-3.5
       zep-flex-col 
       zep-flex 
       zep-items-center 
       md:zep-flex-row
       `],{variants:{variant:z},defaultVariants:{variant:t.Zps}});return a.jsxDEV(b,{id:s,testId:"zep-partner-communication",wrapperClassname:"zep-bg-background-medium",className:P(h({variant:x})),children:[a.jsxDEV("h4",{className:m("md:zep-w-1/3","zep-text-center","md:zep-text-left","zep-typography-headlineMD-fluid-cqi","zep-break-words"),children:v},void 0,!1,{fileName:"/home/circleci/project/src/components/partner-communication/PartnerCommunication.tsx",lineNumber:46,columnNumber:7},globalThis),a.jsxDEV("div",{className:m("zep-w-full","zep-flex-1","md:zep-flex-wrap"),children:a.jsxDEV("div",{className:"zep-flex zep-flex-wrap zep-items-center zep-justify-center zep-text-center zep-gap-1.5 xl:zep-gap-2",children:o==null?void 0:o.map((e,N)=>a.jsxDEV("div",{className:"zep-flex zep-items-center zep-justify-center",children:a.jsxDEV("img",{loading:"lazy",title:e==null?void 0:e.imageAlt,alt:e==null?void 0:e.imageAlt,className:"zep-h-[32px] sm:zep-h-[40px] xl:zep-h-[56px]",src:e==null?void 0:e.image},void 0,!1,{fileName:"/home/circleci/project/src/components/partner-communication/PartnerCommunication.tsx",lineNumber:55,columnNumber:15},globalThis)},N,!1,{fileName:"/home/circleci/project/src/components/partner-communication/PartnerCommunication.tsx",lineNumber:54,columnNumber:13},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/partner-communication/PartnerCommunication.tsx",lineNumber:52,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/partner-communication/PartnerCommunication.tsx",lineNumber:51,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/partner-communication/PartnerCommunication.tsx",lineNumber:40,columnNumber:5},globalThis)};try{n.displayName="PartnerCommunication",n.__docgenInfo={description:"",displayName:"PartnerCommunication",props:{headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},partners:{defaultValue:null,description:"",name:"partners",required:!1,type:{name:"{ image: string; imageAlt: string; }[]"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const f=[{imageAlt:"partnerlogo CAT",image:"./assets/Logo_cat.svg"},{imageAlt:"partnerlogo KBB",image:"./assets/Logo_KBB.svg"},{imageAlt:"partnerlogo Turbolader",image:"./assets/Logo_Turbolader.svg"},{imageAlt:"partnerlogo Napier",image:"./assets/Logo_Napier.svg"},{imageAlt:"partnerlogo MAK",image:"./assets/Logo_MAK.svg"}],L={title:"Components/Partner Communication",component:n,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:[...Object.keys(t),"default"]}}}},r={args:{headline:"Wir sind exklusive Service-Partner von diesen Herstellern:",variant:"ZPS",partners:f}},i={args:{headline:"Wir sind exklusive Service-Partner von diesen Herstellern:",variant:"ZPS",partners:f}};var l,c,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    headline: 'Wir sind exklusive Service-Partner von diesen Herstellern:',
    variant: 'ZPS',
    partners: logos
  } as PartnerCommunicationProps
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,d,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    headline: 'Wir sind exklusive Service-Partner von diesen Herstellern:',
    variant: 'ZPS',
    partners: logos
  } as PartnerCommunicationProps
}`,...(g=(d=i.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const k=["Default","With10Logos"];export{r as Default,i as With10Logos,k as __namedExportsOrder,L as default};
