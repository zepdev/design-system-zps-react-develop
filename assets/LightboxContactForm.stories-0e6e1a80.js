import{j as n}from"./jsx-dev-runtime-8ab8c10c.js";import{L as p}from"./global-variants-893e06e6.js";import{c as o}from"./Radio-9e6a7071.js";import{M as g}from"./ModalComponent-5e2d83c7.js";import{C as f}from"./ContactForm-24af3930.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./index.es13-373f5050.js";import"./jsx-runtime-6f6342d7.js";import"./clsx-0839fdbe.js";import"./focus-d7245c50.js";import"./index-bc8ef2d0.js";import"./index.es16-c93e1849.js";import"./index.es31-95f1013f.js";import"./ZpsButton-d85446e8.js";import"./index.es24-551679ca.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./getUrlWithTrailingSlash-6cb3eda2.js";import"./tw-merge-1166cefb.js";import"./MultiLinkList-6cdd971e.js";import"./Layout-565dd17b.js";import"./HeaderLongComponent-d645f2b0.js";import"./RichText-5396abc0.js";import"./index.es18-4e559a5f.js";import"./LinkListItem-1f312b8c.js";import"./index.es2-ef205e1c.js";import"./index.es32-fbb642fb.js";import"./commonCSS-cc68a568.js";const a=({onSubmit:r,locale:e,isOpen:u,setIsOpen:d,loading:h,contactArea:l,contactList:t,privacyPolicyUrl:b})=>n.jsxDEV(g,{isOpen:u,label:o[e].close,onClose:()=>d(!1),children:n.jsxDEV(f,{onSubmit:r,locale:e,headline:l?`${o[e].lightboxHeadline} ${l}`:o[e].lightboxHeadlineFallback,tagline:o[e].lightboxTagline,linkLists:t&&(t==null?void 0:t.length)>0?t:[{headline:o[e].linkListGermany,links:[{label:"0800 - 5892787",icon:"phone",href:"tel:0800-5892787"}]},{headline:o[e].linkListInternational,links:[{label:"+49 40 853 151-222",icon:"phone",href:"tel:+49 40 853 151-222"}]}],loading:h,privacyPolicyUrl:b},void 0,!1,{fileName:"/home/circleci/project/src/components/lightbox-contact-form/LightboxContactForm.tsx",lineNumber:19,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/lightbox-contact-form/LightboxContactForm.tsx",lineNumber:18,columnNumber:5},globalThis);try{a.displayName="LightboxContactForm",a.__docgenInfo={description:"",displayName:"LightboxContactForm",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(data: unknown) => void"}},locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"enum",value:[{value:'"en"'},{value:'"de"'},{value:'"de-AT"'}]}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},setIsOpen:{defaultValue:null,description:"",name:"setIsOpen",required:!0,type:{name:"(x: boolean) => void"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},contactArea:{defaultValue:null,description:"",name:"contactArea",required:!1,type:{name:"string"}},contactList:{defaultValue:null,description:"",name:"contactList",required:!1,type:{name:"LinkListItemProps[]"}},privacyPolicyUrl:{defaultValue:null,description:"",name:"privacyPolicyUrl",required:!0,type:{name:"string"}}}}}catch{}const J={title:"Patterns/LightboxContactForm",component:a,tags:["autodocs"],argTypes:{locale:{control:{type:"radio",options:Object.keys(p)}}}},i={decorators:[r=>n.jsxDEV("div",{className:"zep-h-[800px]",children:n.jsxDEV(r,{},void 0,!1,{fileName:"/home/circleci/project/src/components/lightbox-contact-form/LightboxContactForm.stories.tsx",lineNumber:27,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/lightbox-contact-form/LightboxContactForm.stories.tsx",lineNumber:26,columnNumber:7},globalThis)],args:{locale:p.EN,isOpen:!0,privacyPolicyUrl:"https://www.google.com",contactList:[{headline:"Germany",links:[{label:"0800 5892787",icon:"phone",href:"tel:0800-5892787"}]}]}};var m,s,c;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(s=i.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const K=["Default"];export{i as Default,K as __namedExportsOrder,J as default};
