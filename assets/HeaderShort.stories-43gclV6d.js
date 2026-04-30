import{G as e,a as N}from"./global-variants-BqXUcqLU.js";import{j as c}from"./jsx-dev-runtime-DUe1FbZV.js";import{c as m}from"./clsx-B-dksMZM.js";import{b as B}from"./commonCSS-CNzj537C.js";import{L as k}from"./Layout-6G12aQd_.js";import{H as j}from"./HeaderShortComponent-BCQtxrlT.js";import"./index-CnaUG9bL.js";import"./index-Dp3B9jqt.js";import"./moving-forward-arrow-Bgb4mb4Z.js";const i=({className:l,variant:d=e.Zps,...p})=>{const _=p.showArrow?"md:zep-w-[40%]":"md:zep-w-[35%]";return c.jsxDEV(k,{className:m(B[d],l,"zep-py-3","sm:zep-py-4","md:zep-py-5"),testId:"header-short",children:c.jsxDEV(j,{...p,variant:d,className:m("zep-w-full",_)},void 0,!1,{fileName:"/home/circleci/project/src/components/header-short/HeaderShort.tsx",lineNumber:27,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/circleci/project/src/components/header-short/HeaderShort.tsx",lineNumber:17,columnNumber:5},void 0)};try{i.displayName="HeaderShort",i.__docgenInfo={description:"",displayName:"HeaderShort",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},showArrow:{defaultValue:null,description:"",name:"showArrow",required:!1,type:{name:"boolean"}}}}}catch{}const F={title:"Patterns/HeaderShort",component:i,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:[...Object.keys(e),"default"]}}}},a={args:{variant:e.Zps,headline:"Headline",tagline:"Tagline",showArrow:!0}},r={args:{variant:e.Zps,headline:"Headline is longer than expected, This is just a long sample.",tagline:"Tagline",showArrow:!0}},o={args:{variant:e.Zps,headline:"Component without Tagline",showArrow:!0}},n={args:{variant:e.Zps,tagline:"Tagline",headline:"Component without Arrow",showArrow:!1}},t={args:{variant:N.ZpsBg,tagline:"Tagline",headline:"Component with background ZPS",showArrow:!1}},s={args:{variant:N.CatBg,tagline:"Tagline",headline:"Component with background CAT",showArrow:!1}};var u,h,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    headline: 'Headline',
    tagline: 'Tagline',
    showArrow: true
  } as HeaderShortProps
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var w,f,C;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    headline: 'Headline is longer than expected, This is just a long sample.',
    tagline: 'Tagline',
    showArrow: true
  } as HeaderShortProps
}`,...(C=(f=r.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var S,A,v;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    headline: 'Component without Tagline',
    showArrow: true
  } as HeaderShortProps
}`,...(v=(A=o.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var b,T,H;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    tagline: 'Tagline',
    headline: 'Component without Arrow',
    showArrow: false
  } as HeaderShortProps
}`,...(H=(T=n.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var Z,y,V;t.parameters={...t.parameters,docs:{...(Z=t.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariantExtended.ZpsBg,
    tagline: 'Tagline',
    headline: 'Component with background ZPS',
    showArrow: false
  } as HeaderShortProps
}`,...(V=(y=t.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};var x,P,G;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariantExtended.CatBg,
    tagline: 'Tagline',
    headline: 'Component with background CAT',
    showArrow: false
  } as HeaderShortProps
}`,...(G=(P=s.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};const J=["Default","LongHeadline","ComponentWithoutTagline","ComponentWithoutArrow","ComponentWithBackgroundZPS","ComponentWithBackgroundCat"];export{s as ComponentWithBackgroundCat,t as ComponentWithBackgroundZPS,n as ComponentWithoutArrow,o as ComponentWithoutTagline,a as Default,r as LongHeadline,J as __namedExportsOrder,F as default};
