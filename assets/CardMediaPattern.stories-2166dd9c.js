import{j as e,c as i}from"./clsx-5d9ed152.js";import{H as j}from"./HeaderLongComponent-3ac22040.js";import{C as P,f as l}from"./focus-d5debc46.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-1f646d4e.js";import"./index.es13-55dfe41f.js";import"./index.es29-7715336a.js";import"./ZpsButton-31b463d5.js";import"./index.es24-9329eeb1.js";import"./index-c0830ed4.js";import"./tw-merge-1166cefb.js";const d=({className:t,cards:v,theme:m="power-systems",imageOrientation:M="horizontal",...y})=>{const T=m==="power-systems"?"indigo":"black",S=v.map(c=>({...c,imageOrientation:M}));return e.jsxDEV("div",{className:i("zep-bg-background-medium","zep-flex","zep-flex-col","xl:zep-gap-4","sm:zep-gap-3","zep-gap-2","zep-items-start","zep-py-3","sm:zep-py-4","md:zep-py-5","zep-px-1","sm:zep-px-1.5","md:zep-px-[66px]","xl:zep-px-[122px]","zep-w-full","zep-max-w-[1920px]"),children:[e.jsxDEV(j,{type:"link",...y,textColor:T},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.tsx",lineNumber:38,columnNumber:7},globalThis),e.jsxDEV("div",{"data-testid":"cards-container",className:i("zep-w-full","zep-overflow-x-auto"),children:e.jsxDEV("div",{className:i("zep-flex","zep-gap-1","sm:zep-gap-1.5","xl:zep-gap-2","zep-w-fit"),children:S.map(c=>e.jsxDEV(P,{...c,theme:m},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.tsx",lineNumber:42,columnNumber:13},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.tsx",lineNumber:40,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.tsx",lineNumber:39,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.tsx",lineNumber:18,columnNumber:5},globalThis)};try{d.displayName="CardMediaPattern",d.__docgenInfo={description:"",displayName:"CardMediaPattern",props:{cards:{defaultValue:null,description:"",name:"cards",required:!0,type:{name:"CardMediaProps[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:{value:"power-systems"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"cat"'},{value:'"power-systems"'}]}},imageOrientation:{defaultValue:{value:"horizontal"},description:"",name:"imageOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!1,type:{name:"string"}},hasBackground:{defaultValue:null,description:"",name:"hasBackground",required:!1,type:{name:"boolean"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},buttonOnClick:{defaultValue:null,description:"",name:"buttonOnClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}}}}}catch{}const a={imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",imageAlt:"construction site",headline:"Testing",description:"Testing",linkSrc:"https://www.zeppelin.com",linkText:"Click me"},I={title:"Patterns/CardMediaPattern",component:d,tags:["autodocs"],argTypes:{}},n={decorators:[t=>e.jsxDEV("button",{className:i(l,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:e.jsxDEV(t,{},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.stories.tsx",lineNumber:24,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.stories.tsx",lineNumber:23,columnNumber:25},globalThis)],args:{cards:[a,a],headline:"Card Media with 2 cards",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."}},r={decorators:[t=>e.jsxDEV("button",{className:i(l,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:e.jsxDEV(t,{},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.stories.tsx",lineNumber:38,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.stories.tsx",lineNumber:37,columnNumber:25},globalThis)],args:{cards:[a,a],headline:"Card Media with 2 cards with vertical images",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",imageOrientation:"vertical",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."}},s={decorators:[t=>e.jsxDEV("button",{className:i(l,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:e.jsxDEV(t,{},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.stories.tsx",lineNumber:53,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.stories.tsx",lineNumber:52,columnNumber:25},globalThis)],args:{cards:[a,a,a],headline:"Card Media with 3 cards",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."}},o={decorators:[t=>e.jsxDEV("button",{className:i(l,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:e.jsxDEV(t,{},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.stories.tsx",lineNumber:67,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/card-media-pattern/CardMediaPattern.stories.tsx",lineNumber:66,columnNumber:25},globalThis)],args:{cards:[a,a,a,a,a],headline:"Card Media with 3+ cards",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."}};var u,p,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  decorators: [Story => <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>],
  args: ({
    cards: [mockCard, mockCard],
    headline: 'Card Media with 2 cards',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.'
  } as CardMediaPatternProps)
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,h,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  decorators: [Story => <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>],
  args: ({
    cards: [mockCard, mockCard],
    headline: 'Card Media with 2 cards with vertical images',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    imageOrientation: 'vertical',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.'
  } as CardMediaPatternProps)
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var x,C,z;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  decorators: [Story => <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>],
  args: ({
    cards: [mockCard, mockCard, mockCard],
    headline: 'Card Media with 3 cards',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.'
  } as CardMediaPatternProps)
}`,...(z=(C=s.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var w,N,k;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  decorators: [Story => <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>],
  args: ({
    cards: [mockCard, mockCard, mockCard, mockCard, mockCard],
    headline: 'Card Media with 3+ cards',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.'
  } as CardMediaPatternProps)
}`,...(k=(N=o.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};const W=["Default","CardMediaVertical","CardMedia3Cards","CardMedia3PlusCards"];export{s as CardMedia3Cards,o as CardMedia3PlusCards,r as CardMediaVertical,n as Default,W as __namedExportsOrder,I as default};
//# sourceMappingURL=CardMediaPattern.stories-2166dd9c.js.map
