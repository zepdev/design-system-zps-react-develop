import{j as i,c as t}from"./clsx-5d9ed152.js";import{G as J}from"./global-variants-42c1cda2.js";import{b as K}from"./HeaderShort-7d562a0e.js";import{L as Q}from"./LinkListItem-998ec6a5.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./index-c0830ed4.js";import"./index.es13-55dfe41f.js";import"./index.es29-7715336a.js";import"./index.es24-9329eeb1.js";import"./index.es16-1f646d4e.js";const p=({transparentLinkItem:d,headline:O,linkLists:s,variant:u=J.Zps})=>{const R=s.length>10?s.slice(0,10):s;return i.jsxDEV("div",{className:t("zep-grid","zep-grid-cols-4","sm:zep-grid-cols-8","md:zep-grid-cols-16","zep-gap-1","sm:zep-gap-1.5","xl:zep-gap-2","zep-max-w-[1920px]"),children:i.jsxDEV("div",{className:t("md:zep-col-start-2","md:zep-col-span-14","zep-col-span-4","sm:zep-col-span-8","zep-flex-col","zep-flex","zep-gap-2","sm:zep-gap-3","xl:zep-gap-4"),children:[i.jsxDEV(K,{headline:O,variant:u},void 0,!1,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:35,columnNumber:9},globalThis),i.jsxDEV("div",{className:t("zep-flex","zep-flex-col","md:zep-grid","zep-gap-1","md:zep-gap-1.5","xl:zep-gap-2","md:zep-grid-flow-row",{"xl:zep-grid-cols-2":s.length===2,"xl:zep-grid-cols-4":[4,7,8].includes(s.length),"xl:zep-grid-cols-5":[5,9,10].includes(s.length),"md:zep-grid-cols-2":[2,4].includes(s.length),"md:zep-grid-cols-3":[3,5,6,7,8,9,10].includes(s.length)}),children:R.map(B=>i.jsxDEV(Q,{className:t({"zep-bg-background-medium":!d}),...B,variant:u,isMultiListItem:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:53,columnNumber:13},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:36,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:22,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/multi-link-list/MultiLinkList.tsx",lineNumber:12,columnNumber:5},globalThis)};try{p.displayName="MultiLinkList",p.__docgenInfo={description:"",displayName:"MultiLinkList",props:{linkLists:{defaultValue:null,description:"",name:"linkLists",required:!0,type:{name:"LinkListItemProps[]"}},transparentLinkItem:{defaultValue:null,description:"",name:"transparentLinkItem",required:!1,type:{name:"boolean"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}}}}}catch{}const e={links:[{icon:"arrow-right",href:"https://www.google.com",label:"link inline",hasIcon:!0},{icon:"arrow-right",href:"https://www.google.com",label:"link inline",hasIcon:!0},{icon:"arrow-right",href:"https://www.google.com",label:"link inline",hasIcon:!0},{icon:"arrow-right",href:"https://www.google.com",label:"link inline",hasIcon:!0}],headline:"Headline optional",description:"Description optional"},re={title:"Patterns/MultiLinkList",component:p,tags:["autodocs"],argTypes:{theme:{children:{control:{type:"select",options:["cat","power-systems"]}}}}},n={args:{headline:"Two Link Lists",linkLists:[e,e],theme:"power-systems"}},o={args:{headline:"Three Link Lists",linkLists:[e,e,e],theme:"power-systems"}},r={args:{headline:"Four Link Lists",linkLists:[e,e,e,e],theme:"power-systems"}},m={args:{headline:"Five Link Lists",linkLists:[e,e,e,e,e],theme:"power-systems"}},a={args:{headline:"Six Link Lists",linkLists:[e,e,e,e,e,e],theme:"power-systems"}},c={args:{headline:"Seven Link Lists",linkLists:[e,e,e,e,e,e,e],theme:"power-systems"}},l={args:{headline:"Eight Link Lists",linkLists:[e,e,e,e,e,e,e,e],theme:"power-systems"}},L={args:{headline:"Nine Link Lists",linkLists:[e,e,e,e,e,e,e,e,e],theme:"power-systems"}},k={args:{headline:"Ten Link Lists",linkLists:[e,e,e,e,e,e,e,e,e,e],theme:"power-systems"}};var h,g,w;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    headline: 'Two Link Lists',
    linkLists: [mockLinkList, mockLinkList],
    theme: 'power-systems'
  }
}`,...(w=(g=n.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var f,x,z;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    headline: 'Three Link Lists',
    linkLists: [mockLinkList, mockLinkList, mockLinkList],
    theme: 'power-systems'
  }
}`,...(z=(x=o.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var y,I,b;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    headline: 'Four Link Lists',
    linkLists: [mockLinkList, mockLinkList, mockLinkList, mockLinkList],
    theme: 'power-systems'
  }
}`,...(b=(I=r.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var N,v,S;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    headline: 'Five Link Lists',
    linkLists: [mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList],
    theme: 'power-systems'
  }
}`,...(S=(v=m.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var T,j,E;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    headline: 'Six Link Lists',
    linkLists: [mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList],
    theme: 'power-systems'
  }
}`,...(E=(j=a.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var V,M,_;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    headline: 'Seven Link Lists',
    linkLists: [mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList],
    theme: 'power-systems'
  }
}`,...(_=(M=c.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var D,F,q;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    headline: 'Eight Link Lists',
    linkLists: [mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList],
    theme: 'power-systems'
  }
}`,...(q=(F=l.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var C,G,P;L.parameters={...L.parameters,docs:{...(C=L.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    headline: 'Nine Link Lists',
    linkLists: [mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList],
    theme: 'power-systems'
  }
}`,...(P=(G=L.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var Z,H,A;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    headline: 'Ten Link Lists',
    linkLists: [mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList],
    theme: 'power-systems'
  }
}`,...(A=(H=k.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};const me=["Default","ThreeItems","FourItems","FiveItems","SixItems","SevenItems","EightItems","NineItems","TenItems"];export{n as Default,l as EightItems,m as FiveItems,r as FourItems,L as NineItems,c as SevenItems,a as SixItems,k as TenItems,o as ThreeItems,me as __namedExportsOrder,re as default};
//# sourceMappingURL=MultiLinkList.stories-3ab4ad66.js.map
