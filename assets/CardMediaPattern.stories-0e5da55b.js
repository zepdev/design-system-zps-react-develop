import{j as e}from"./jsx-dev-runtime-8ab8c10c.js";import{c as r}from"./clsx-0839fdbe.js";import{G as V}from"./global-variants-893e06e6.js";import{L as P}from"./Layout-565dd17b.js";import{H as j}from"./HeaderLongComponent-6dfe072b.js";import{C as E}from"./CardMedia-a22ad33e.js";import{S as D}from"./Scrollbar-75feef59.js";import{f as s}from"./focus-d7245c50.js";import{m as c}from"./mocks-dd8b5ca4.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-315dd9a2.js";import"./jsx-runtime-6f6342d7.js";import"./index.es31-95f1013f.js";import"./index.es13-373f5050.js";import"./getUrlWithTrailingSlash-bc205b91.js";import"./RichText-09e4979a.js";import"./index.es18-4e559a5f.js";import"./ZpsButton-960e22a4.js";import"./index.es24-551679ca.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";import"./commonCSS-cc68a568.js";const u=({cards:l,variant:d=V.Zps,imageOrientation:T="horizontal",id:M,...S})=>e.jsxDEV(P,{id:M,wrapperClassname:"zep-bg-background-medium",className:r("zep-flex","zep-flex-col","zep-justify-start","lg:zep-gap-4","sm:zep-gap-3","zep-gap-2","zep-py-3","sm:zep-py-4","md:zep-py-5","zep-items-start"),children:[e.jsxDEV(j,{...S,variant:d},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.tsx",lineNumber:34,columnNumber:7},globalThis),e.jsxDEV(D,{scrollOrientation:"horizontal",dataTestId:"cards-container",controlId:"card-media-scrollbar",className:r("zep-flex","zep-gap-1","sm:zep-gap-1.5","lg:zep-gap-2"),children:l.map(m=>e.jsxDEV(E,{...m,variant:d,imageOrientation:T},m.headline,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.tsx",lineNumber:42,columnNumber:11},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.tsx",lineNumber:35,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.tsx",lineNumber:18,columnNumber:5},globalThis);try{u.displayName="CardMediaPattern",u.__docgenInfo={description:"",displayName:"CardMediaPattern",props:{cards:{defaultValue:null,description:"",name:"cards",required:!0,type:{name:"CardMediaProps[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},imageOrientation:{defaultValue:{value:"horizontal"},description:"",name:"imageOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const a={imageSrc:"https://www.khplant.co.za/wp-content/uploads/2015/08/cat-logo.jpg",imageAlt:"construction site",headline:"Testing",description:"Testing",linkSrc:"https://www.zeppelin.com",linkText:"Click me"},p={...a,imageSrc:"https://www.zeppelin-cat.at/content/dam/zeppelin/baumaschinen/at/sonderangebote/Brosch%C3%BCre.JPG.imagethumb.original.jpg"},ne={title:"Patterns/CardMediaPattern",component:u,tags:["autodocs"],argTypes:{}},n={decorators:[l=>e.jsxDEV("button",{className:r(s,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:e.jsxDEV(l,{},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.stories.tsx",lineNumber:33,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.stories.tsx",lineNumber:32,columnNumber:7},globalThis)],args:{cards:[a,a],headline:"Card Media with 2 cards",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",description:c}},t={decorators:[l=>e.jsxDEV("button",{className:r(s,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:e.jsxDEV(l,{},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.stories.tsx",lineNumber:52,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.stories.tsx",lineNumber:51,columnNumber:7},globalThis)],args:{cards:[p,p],headline:"Card Media with 2 cards with vertical images",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",imageOrientation:"vertical",description:c}},i={decorators:[l=>e.jsxDEV("button",{className:r(s,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:e.jsxDEV(l,{},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.stories.tsx",lineNumber:72,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.stories.tsx",lineNumber:71,columnNumber:7},globalThis)],args:{cards:[a,a,a],headline:"Card Media with 3 cards",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",description:c}},o={decorators:[l=>e.jsxDEV("button",{className:r(s,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:e.jsxDEV(l,{},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.stories.tsx",lineNumber:91,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.stories.tsx",lineNumber:90,columnNumber:7},globalThis)],args:{cards:[a,a,a,a,a],headline:"Card Media with 3+ cards",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",description:c}};var v,h,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  decorators: [Story => <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>],
  args: {
    cards: [mockCard, mockCard],
    headline: 'Card Media with 2 cards',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    description: mockRichTextShort
  } as CardMediaPatternProps
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var g,w,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  decorators: [Story => <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>],
  args: {
    cards: [mockCardVertical, mockCardVertical],
    headline: 'Card Media with 2 cards with vertical images',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    imageOrientation: 'vertical',
    description: mockRichTextShort
  } as CardMediaPatternProps
}`,...(b=(w=t.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var k,z,C;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  decorators: [Story => <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>],
  args: {
    cards: [mockCard, mockCard, mockCard],
    headline: 'Card Media with 3 cards',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    description: mockRichTextShort
  } as CardMediaPatternProps
}`,...(C=(z=i.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var x,N,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  decorators: [Story => <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>],
  args: {
    cards: [mockCard, mockCard, mockCard, mockCard, mockCard],
    headline: 'Card Media with 3+ cards',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    description: mockRichTextShort
  } as CardMediaPatternProps
}`,...(y=(N=o.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};const te=["Default","CardMediaVertical","CardMedia3Cards","CardMedia3PlusCards"];export{i as CardMedia3Cards,o as CardMedia3PlusCards,t as CardMediaVertical,n as Default,te as __namedExportsOrder,ne as default};
