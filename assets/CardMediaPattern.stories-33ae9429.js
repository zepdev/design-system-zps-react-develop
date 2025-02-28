import{j as e}from"./jsx-dev-runtime-8ab8c10c.js";import{c as t}from"./clsx-0839fdbe.js";import{G as P}from"./global-variants-71b69725.js";import{H as V}from"./HeaderLongComponent-875e2e37.js";import{C as j}from"./CardMedia-c3f6cb63.js";import{L as E}from"./Layout-a8c3c09c.js";import{S as D}from"./Scrollbar-1d4c17ad.js";import{f as l}from"./focus-d7245c50.js";import{m as c}from"./mocks-dd8b5ca4.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-0bcfc29a.js";import"./jsx-runtime-6f6342d7.js";import"./index.es31-95f1013f.js";import"./index.es13-cfbbaaf2.js";import"./RichText-c06f2dc1.js";import"./index.es18-4e559a5f.js";import"./ZpsButton-b3e102e1.js";import"./index.es24-551679ca.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";import"./commonCSS-0b9dd3ad.js";const d=({cards:r,variant:m=P.Zps,imageOrientation:S="horizontal",id:v,...y})=>e.jsxDEV(E,{id:v,wrapperClassname:"zep-bg-background-medium",className:t("zep-flex","zep-flex-col","xl:zep-gap-4","sm:zep-gap-3","zep-gap-2","zep-py-3","sm:zep-py-4","md:zep-py-5","zep-items-start"),children:[e.jsxDEV(V,{type:"link",...y,variant:m},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.tsx",lineNumber:33,columnNumber:7},globalThis),e.jsxDEV(D,{scrollOrientation:"horizontal",dataTestId:"cards-container",controlId:"card-media-scrollbar",className:t("zep-flex","zep-gap-1","sm:zep-gap-1.5","xl:zep-gap-2"),children:r.map(p=>e.jsxDEV(j,{...p,variant:m,imageOrientation:S},p.headline,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.tsx",lineNumber:41,columnNumber:11},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.tsx",lineNumber:34,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.tsx",lineNumber:18,columnNumber:5},globalThis);try{d.displayName="CardMediaPattern",d.__docgenInfo={description:"",displayName:"CardMediaPattern",props:{cards:{defaultValue:null,description:"",name:"cards",required:!0,type:{name:"CardMediaProps[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},imageOrientation:{defaultValue:{value:"horizontal"},description:"",name:"imageOrientation",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}}}}}catch{}const a={imageSrc:"https://www.khplant.co.za/wp-content/uploads/2015/08/cat-logo.jpg",imageAlt:"construction site",headline:"Testing",description:"Testing",linkSrc:"https://www.zeppelin.com",linkText:"Click me"},u={...a,imageSrc:"https://www.zeppelin-cat.at/content/dam/zeppelin/baumaschinen/at/sonderangebote/Brosch%C3%BCre.JPG.imagethumb.original.jpg"},te={title:"Patterns/CardMediaPattern",component:d,tags:["autodocs"],argTypes:{}},n={decorators:[r=>e.jsxDEV("button",{className:t(l,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:e.jsxDEV(r,{},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.stories.tsx",lineNumber:33,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.stories.tsx",lineNumber:32,columnNumber:7},globalThis)],args:{cards:[a,a],headline:"Card Media with 2 cards",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",description:c}},i={decorators:[r=>e.jsxDEV("button",{className:t(l,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:e.jsxDEV(r,{},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.stories.tsx",lineNumber:52,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.stories.tsx",lineNumber:51,columnNumber:7},globalThis)],args:{cards:[u,u],headline:"Card Media with 2 cards with vertical images",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",imageOrientation:"vertical",description:c}},o={decorators:[r=>e.jsxDEV("button",{className:t(l,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:e.jsxDEV(r,{},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.stories.tsx",lineNumber:72,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.stories.tsx",lineNumber:71,columnNumber:7},globalThis)],args:{cards:[a,a,a],headline:"Card Media with 3 cards",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",description:c}},s={decorators:[r=>e.jsxDEV("button",{className:t(l,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:e.jsxDEV(r,{},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.stories.tsx",lineNumber:91,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.stories.tsx",lineNumber:90,columnNumber:7},globalThis)],args:{cards:[a,a,a,a,a],headline:"Card Media with 3+ cards",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",description:c}};var h,f,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var b,C,z;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(z=(C=i.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var w,k,x;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(x=(k=o.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var N,T,M;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(M=(T=s.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};const ne=["Default","CardMediaVertical","CardMedia3Cards","CardMedia3PlusCards"];export{o as CardMedia3Cards,s as CardMedia3PlusCards,i as CardMediaVertical,n as Default,ne as __namedExportsOrder,te as default};
