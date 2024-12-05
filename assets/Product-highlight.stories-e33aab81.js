import{j as e}from"./jsx-dev-runtime-8ab8c10c.js";import{c as a}from"./clsx-0839fdbe.js";import{G as P}from"./global-variants-0f433d85.js";import{H as w}from"./HeaderLongComponent-dd3d8053.js";import{R as q}from"./RichText-c001a5e0.js";import{B as A,Z as o}from"./ZpsButton-90c6f31d.js";import{L as B}from"./Layout-cb684865.js";import{b as t}from"./mocks-b7644162.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-55d8eb1a.js";import"./index.es13-b84986ab.js";import"./index.es29-7715336a.js";import"./index.es24-1cd7062f.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";const l=({productDetails:n,imageAlt:x,imageSrc:b,buttonTitle:y,buttonText:z,imageAlignment:s,buttonVariant:V,onClick:N,variant:m=P.Zps,headline:c,...v})=>{const T=s==="right"?"md:zep-order-1":"",j=s==="right"?"md:-zep-mr-[114px] xl:-zep-mr-[244px]":"md:-zep-ml-[114px] xl:-zep-ml-[244px]";return e.jsxDEV(B,{className:"zep-flex zep-flex-col zep-gap-2.5 sm:zep-gap-3 md:zep-gap-4",children:[c&&e.jsxDEV(w,{headline:c,...v,variant:m},void 0,!1,{fileName:"/home/circleci/project/src/components/product-highlight/Product-highlight.tsx",lineNumber:30,columnNumber:20},globalThis),e.jsxDEV("div",{className:a(j,"zep-flex","md:zep-flex-row","zep-flex-col","xl:zep-gap-2","sm:zep-gap-1.5","zep-gap-1"),children:[e.jsxDEV("div",{className:a(T,"zep-max-w-[2042px]"),children:e.jsxDEV("img",{className:a("zep-aspect-[4/3]"),src:b,alt:x},void 0,!1,{fileName:"/home/circleci/project/src/components/product-highlight/Product-highlight.tsx",lineNumber:33,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/product-highlight/Product-highlight.tsx",lineNumber:32,columnNumber:9},globalThis),e.jsxDEV("div",{className:"zep-px-1 sm:zep-px-1.5 lg:zep-px-2 zep-flex zep-flex-col xl:zep-gap-3 sm:zep-gap-2 zep-gap-1",children:[e.jsxDEV("div",{className:"zep-flex zep-flex-col zep-gap-1 sm:zep-gap-1.5 md:zep-gap-1 xl:zep-gap-1.5",children:n.map((D,H)=>e.jsxDEV("div",{className:"zep-border-b-1 zep-border-b-greyscale-400 last:zep-border-b-[0] first:zep-pt-[0] last:zep-pb-[0] zep-py-1 sm:zep-py-1.5 md:zep-py-1 xl:zep-py-1.5",children:e.jsxDEV(q,{content:D,variant:m},void 0,!1,{fileName:"/home/circleci/project/src/components/product-highlight/Product-highlight.tsx",lineNumber:43,columnNumber:19},globalThis)},H,!1,{fileName:"/home/circleci/project/src/components/product-highlight/Product-highlight.tsx",lineNumber:39,columnNumber:17},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/product-highlight/Product-highlight.tsx",lineNumber:36,columnNumber:11},globalThis),e.jsxDEV(A,{className:"md:zep-w-fit zep-w-full",variant:V,label:z,title:y,onClick:N},void 0,!1,{fileName:"/home/circleci/project/src/components/product-highlight/Product-highlight.tsx",lineNumber:48,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/product-highlight/Product-highlight.tsx",lineNumber:35,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/product-highlight/Product-highlight.tsx",lineNumber:31,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/product-highlight/Product-highlight.tsx",lineNumber:29,columnNumber:5},globalThis)};try{l.displayName="ProductHighLight",l.__docgenInfo={description:"",displayName:"ProductHighLight",props:{imageAlignment:{defaultValue:null,description:"",name:"imageAlignment",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!0,type:{name:"string"}},productDetails:{defaultValue:null,description:"",name:"productDetails",required:!0,type:{name:"BlocksContent[]"}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!0,type:{name:"string"}},buttonTitle:{defaultValue:null,description:"",name:"buttonTitle",required:!1,type:{name:"string"}},buttonVariant:{defaultValue:null,description:"",name:"buttonVariant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"secondary-cat"'},{value:'"secondary-zps"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary-button"'},{value:'"secondary-button"'},{value:'"link"'},{value:'"none"'}]}}}}}catch{}const K={title:"Components/ProductHighLight",component:l,tags:["autodocs"],argTypes:{buttonVariant:{control:{type:"radio",options:Object.keys(o)}}}},i={args:{productDetails:[t,t,t],imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",alt:"Lorem ipsum dolor sit ",imageAlt:"alt text",buttonText:"Button",buttonTitle:"button title",buttonVariant:o.Primary,imageAlignment:"left"}},r={args:{productDetails:[t,t,t],imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",imageAlt:"alt text",buttonText:"Button",buttonTitle:"button title",imageAlignment:"right",buttonVariant:o.Primary}};var u,p,d;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(d=(p=i.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,h,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    productDetails: [mockRichTextShort, mockRichTextShort, mockRichTextShort],
    imageSrc: 'https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    imageAlt: 'alt text',
    buttonText: 'Button',
    buttonTitle: 'button title',
    imageAlignment: 'right',
    buttonVariant: ZpsButtonVariant.Primary
  } as ProductHighLightProps
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const Q=["Default","RightImageAlignment"];export{i as Default,r as RightImageAlignment,Q as __namedExportsOrder,K as default};
