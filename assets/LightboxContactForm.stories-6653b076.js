import{j as n}from"./jsx-dev-runtime-8ab8c10c.js";import{L as p}from"./global-variants-893e06e6.js";import{c as o}from"./Radio-dfa34263.js";import{M as g}from"./ModalComponent-883cd4a7.js";import{C as f}from"./ContactForm-09e98a30.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./index.es13-373f5050.js";import"./jsx-runtime-6f6342d7.js";import"./clsx-0839fdbe.js";import"./focus-d7245c50.js";import"./index-bc8ef2d0.js";import"./ZpsButton-b5b12abc.js";import"./index.es24-551679ca.js";import"./index.es35-79e31a69.js";import"./index.es31-95f1013f.js";import"./index-ff2c9236.js";import"./getUrlWithTrailingSlash-bc205b91.js";import"./tw-merge-1166cefb.js";import"./getDataLayer-1420585a.js";import"./HeaderLongComponent-427231b3.js";import"./index.es16-fae182fa.js";import"./RichText-61960407.js";import"./index.es18-4e559a5f.js";import"./MultiLinkList-2eb065ea.js";import"./Layout-565dd17b.js";import"./LinkListItem-c4879771.js";import"./index.es2-ef205e1c.js";import"./index.es32-fbb642fb.js";import"./commonCSS-cc68a568.js";const a=({onSubmit:r,locale:e,isOpen:u,setIsOpen:d,loading:h,contactArea:l,contactList:t,privacyPolicyUrl:b})=>n.jsxDEV(g,{isOpen:u,label:o[e].close,onClose:()=>d(!1),children:n.jsxDEV(f,{onSubmit:r,locale:e,headline:l?`${o[e].lightboxHeadline} ${l}`:o[e].lightboxHeadlineFallback,tagline:o[e].lightboxTagline,linkLists:t&&(t==null?void 0:t.length)>0?t:[{headline:o[e].linkListGermany,links:[{label:"0800 - 5892787",icon:"phone",href:"tel:0800-5892787"}]},{headline:o[e].linkListInternational,links:[{label:"+49 40 853 151-222",icon:"phone",href:"tel:+49 40 853 151-222"}]}],loading:h,privacyPolicyUrl:b},void 0,!1,{fileName:"/home/circleci/project/src/components/lightbox-contact-form/LightboxContactForm.tsx",lineNumber:19,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/lightbox-contact-form/LightboxContactForm.tsx",lineNumber:18,columnNumber:5},globalThis);try{a.displayName="LightboxContactForm",a.__docgenInfo={description:"",displayName:"LightboxContactForm",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(data: unknown) => void"}},locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"enum",value:[{value:'"en"'},{value:'"de"'},{value:'"de-AT"'}]}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},setIsOpen:{defaultValue:null,description:"",name:"setIsOpen",required:!0,type:{name:"(x: boolean) => void"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},contactArea:{defaultValue:null,description:"",name:"contactArea",required:!1,type:{name:"string"}},contactList:{defaultValue:null,description:"",name:"contactList",required:!1,type:{name:"LinkListItemProps[]"}},privacyPolicyUrl:{defaultValue:null,description:"",name:"privacyPolicyUrl",required:!0,type:{name:"string"}}}}}catch{}const K={title:"Patterns/LightboxContactForm",component:a,tags:["autodocs"],argTypes:{locale:{control:{type:"radio",options:Object.keys(p)}}}},i={decorators:[r=>n.jsxDEV("div",{className:"zep-h-[800px]",children:n.jsxDEV(r,{},void 0,!1,{fileName:"/home/circleci/project/src/components/lightbox-contact-form/LightboxContactForm.stories.tsx",lineNumber:27,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/lightbox-contact-form/LightboxContactForm.stories.tsx",lineNumber:26,columnNumber:7},globalThis)],args:{locale:p.EN,isOpen:!0,privacyPolicyUrl:"https://www.google.com",contactList:[{headline:"Germany",links:[{label:"0800 5892787",icon:"phone",href:"tel:0800-5892787"}]}]}};var m,s,c;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  decorators: [Story => <div className="zep-h-[800px]">
        <Story />
      </div>],
  args: {
    locale: LocaleVariants.EN,
    isOpen: true,
    privacyPolicyUrl: 'https://www.google.com',
    contactList: [{
      headline: 'Germany',
      links: [{
        label: '0800 5892787',
        icon: 'phone',
        href: 'tel:0800-5892787'
      }]
    }]
  } as LightboxContactFormProps
}`,...(c=(s=i.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const Q=["Default"];export{i as Default,Q as __namedExportsOrder,K as default};
