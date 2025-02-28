import{G as i,a as x}from"./global-variants-71b69725.js";import{j as s}from"./jsx-dev-runtime-8ab8c10c.js";import{c as b}from"./clsx-0839fdbe.js";import{b as C}from"./commonCSS-0b9dd3ad.js";import{H as w}from"./HeaderLongComponent-97bd3643.js";import{L}from"./Layout-a8c3c09c.js";import{m as r}from"./mocks-dd8b5ca4.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-0bcfc29a.js";import"./jsx-runtime-6f6342d7.js";import"./index.es31-95f1013f.js";import"./index.es13-cfbbaaf2.js";import"./RichText-c06f2dc1.js";import"./index.es18-4e559a5f.js";import"./ZpsButton-3f33b2b2.js";import"./index.es24-551679ca.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";const l=({variant:o=i.Zps,...v})=>s.jsxDEV(L,{className:b(C[o]),testId:"zep-header-long",children:s.jsxDEV(w,{...v,variant:o},void 0,!1,{fileName:"/home/circleci/project/src/components/header-long/HeaderLong.tsx",lineNumber:12,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/header-long/HeaderLong.tsx",lineNumber:11,columnNumber:5},globalThis);try{l.displayName="HeaderLong",l.__docgenInfo={description:"",displayName:"HeaderLong",props:{tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary-button"'},{value:'"secondary-button"'},{value:'"link"'},{value:'"none"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const J={title:"Patterns/HeaderLong",component:l,tags:["autodocs"],argTypes:{}},e={args:{variant:i.Zps,type:"primary-button",tagline:"Tagline",headline:"Headline Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus",linkText:"Click me",linkHref:"https://www.google.com",onClick:()=>{},description:r}},n={args:{variant:x.ZpsBg,type:"link",tagline:"Tagline",headline:"Headline",linkText:"Click me",linkHref:"https://www.google.com",description:r}},a={args:{variant:i.Zps,type:"link",tagline:"Tagline",headline:"Headline",linkText:"Click me",linkHref:"https://www.google.com",description:r}},t={args:{variant:i.Zps,type:"secondary-button",tagline:"Tagline",headline:"Headline",linkText:"Click me",onClick:()=>{},description:r}};var c,m,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    type: 'primary-button',
    tagline: 'Tagline',
    headline: 'Headline Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus',
    linkText: 'Click me',
    linkHref: 'https://www.google.com',
    onClick: () => {},
    description: mockRichTextShort
  } as HeaderLongProps
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,u,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariantExtended.ZpsBg,
    type: 'link',
    tagline: 'Tagline',
    headline: 'Headline',
    linkText: 'Click me',
    linkHref: 'https://www.google.com',
    description: mockRichTextShort
  } as HeaderLongProps
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var k,h,f;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    type: 'link',
    tagline: 'Tagline',
    headline: 'Headline',
    linkText: 'Click me',
    linkHref: 'https://www.google.com',
    description: mockRichTextShort
  } as HeaderLongProps
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var y,H,T;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    type: 'secondary-button',
    tagline: 'Tagline',
    headline: 'Headline',
    linkText: 'Click me',
    onClick: () => {},
    description: mockRichTextShort
  } as HeaderLongProps
}`,...(T=(H=t.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};const K=["Default","WithBackground","WithLink","WithButton"];export{e as Default,n as WithBackground,t as WithButton,a as WithLink,K as __namedExportsOrder,J as default};
