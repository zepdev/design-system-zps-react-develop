import{j as l}from"./clsx-24df0f47.js";import{S as h}from"./SingleLinkList-bb4bf84c.js";import{G as f}from"./global-variants-893e06e6.js";import{M as k}from"./MultiLinkList-bf7898cf.js";import{m as g}from"./mocks-dd8b5ca4.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./Layout-ecccc0bb.js";import"./HeaderShortComponent-81529120.js";import"./index-1a504dbd.js";import"./moving-forward-arrow-a1f6b1da.js";import"./LinkListItem-6eb02399.js";import"./index.es2-ef205e1c.js";import"./jsx-runtime-6f6342d7.js";import"./index.es31-95f1013f.js";import"./index.es13-373f5050.js";import"./index.es32-fbb642fb.js";import"./index.es24-551679ca.js";import"./index.es35-79e31a69.js";import"./index.es16-1f4fc36d.js";import"./index.es17-40e95622.js";import"./commonCSS-cc68a568.js";import"./getDataLayer-1420585a.js";import"./getUrlWithTrailingSlash-1f1feb13.js";import"./RichText-1af2ae67.js";import"./index.es18-4e559a5f.js";import"./HeaderLongComponent-a3ed6c1e.js";import"./ZpsButton-2b3c8e05.js";import"./tw-merge-1166cefb.js";const t=({id:r,variant:a=f.Zps,linkLists:e,headline:o})=>e.length===0?null:e.length===1?l.jsxDEV(h,{title:o,...e[0],variant:a},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-section/ContactSection.tsx",lineNumber:13,columnNumber:12},globalThis):l.jsxDEV(k,{id:r,headline:o,linkLists:e,variant:a},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-section/ContactSection.tsx",lineNumber:17,columnNumber:5},globalThis);try{t.displayName="ContactSection",t.__docgenInfo={description:"",displayName:"ContactSection",props:{variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},linkLists:{defaultValue:null,description:"",name:"linkLists",required:!0,type:{name:"LinkListItemProps[]"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const H={title:"Patterns/ContactSection",component:t,tags:["autodocs"],argTypes:{}},n={args:{headline:"Pressekontakt",linkLists:[{headline:"Sina Koch",description:g,links:[{href:"",label:"inline link"},{href:"",label:"inline link"}]}]}},i={args:{headline:"Sie brauchen Unterstützung - wir helfen Ihnen gerne",linkLists:[{headline:"Deutschland",links:[{href:"",label:"inline link"}]},{headline:"International",links:[{href:"",label:"inline link"}]}]}};var s,c,m;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    headline: 'Pressekontakt',
    linkLists: [{
      headline: 'Sina Koch',
      description: mockRichTextShort,
      links: [{
        href: '',
        label: 'inline link'
      }, {
        href: '',
        label: 'inline link'
      }]
    }]
  }
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,u,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    headline: 'Sie brauchen Unterstützung - wir helfen Ihnen gerne',
    linkLists: [{
      headline: 'Deutschland',
      links: [{
        href: '',
        label: 'inline link'
      }]
    }, {
      headline: 'International',
      links: [{
        href: '',
        label: 'inline link'
      }]
    }]
  }
}`,...(d=(u=i.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const J=["Single","Multi"];export{i as Multi,n as Single,J as __namedExportsOrder,H as default};
