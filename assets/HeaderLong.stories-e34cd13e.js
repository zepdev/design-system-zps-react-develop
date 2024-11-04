import{j as o,c as l}from"./clsx-5d9ed152.js";import{H}from"./HeaderLongComponent-4a515f11.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-1f646d4e.js";import"./index.es13-55dfe41f.js";import"./index.es29-7715336a.js";import"./ZpsButton-dad0a1ae.js";import"./index.es24-9329eeb1.js";import"./index-c0830ed4.js";import"./tw-merge-1166cefb.js";const r=({theme:e="power-systems",hasBackground:a=!1,...y})=>{const w=e==="power-systems"?"indigo":"black";return o.jsxDEV("div",{className:l("zep-grid","zep-grid-cols-4","sm:zep-grid-cols-8","md:zep-grid-cols-16","zep-max-w-[1920px]","zep-gap-1","sm:zep-gap-1.5","xl:zep-gap-2","zep-px-1","sm:zep-px-1.5","md:zep-px-[0px]","zep-pb-2","zep-pt-3","sm:zep-pt-4","sm:zep-pb-3","md:zep-pb-4","md:zep-pt-5",{"zep-bg-background-gradient":a&&e==="power-systems","zep-bg-background-dark":a&&e==="cat"}),"data-testid":"zep-header-long",children:o.jsxDEV("div",{className:l("zep-col-span-4","sm:zep-col-span-8","md:zep-col-start-2","md:zep-col-span-14"),children:o.jsxDEV(H,{...y,theme:e,textColor:a?"white":w},void 0,!1,{fileName:"/home/circleci/project/src/components/header-long/HeaderLong.tsx",lineNumber:45,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/header-long/HeaderLong.tsx",lineNumber:37,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/header-long/HeaderLong.tsx",lineNumber:11,columnNumber:5},globalThis)};try{r.displayName="HeaderLong",r.__docgenInfo={description:"",displayName:"HeaderLong",props:{theme:{defaultValue:{value:"power-systems"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"cat"'},{value:'"power-systems"'}]}},hasBackground:{defaultValue:{value:"false"},description:"",name:"hasBackground",required:!1,type:{name:"boolean"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"link"'},{value:'"none"'}]}},buttonOnClick:{defaultValue:null,description:"",name:"buttonOnClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}}}}}catch{}const E={title:"Patterns/HeaderLong",component:r,tags:["autodocs"],argTypes:{}},n={args:{hasBackground:!1,theme:"power-systems",textColor:"indigo",type:"button",tagline:"Tagline",headline:"Headline Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus",linkText:"Click me",linkHref:"https://www.google.com",buttonText:"Click me",buttonOnClick:()=>{},description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."}},t={args:{theme:"power-systems",hasBackground:!0,textColor:"indigo",type:"link",tagline:"Tagline",headline:"Headline",linkText:"Click me",linkHref:"https://www.google.com",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."}},i={args:{theme:"power-systems",hasBackground:!1,textColor:"indigo",type:"link",tagline:"Tagline",headline:"Headline",linkText:"Click me",linkHref:"https://www.google.com",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."}},s={args:{hasBackground:!1,theme:"power-systems",textColor:"indigo",type:"button",tagline:"Tagline",headline:"Headline",linkText:"Click me",buttonText:"Click me",buttonOnClick:()=>{},description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."}};var m,u,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: ({
    hasBackground: false,
    theme: 'power-systems',
    textColor: 'indigo',
    type: 'button',
    tagline: 'Tagline',
    headline: 'Headline Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus',
    linkText: 'Click me',
    linkHref: 'https://www.google.com',
    buttonText: 'Click me',
    buttonOnClick: () => {},
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.'
  } as HeaderLongProps)
}`,...(c=(u=n.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var d,p,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: ({
    theme: 'power-systems',
    hasBackground: true,
    textColor: 'indigo',
    type: 'link',
    tagline: 'Tagline',
    headline: 'Headline',
    linkText: 'Click me',
    linkHref: 'https://www.google.com',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.'
  } as HeaderLongProps)
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var k,h,f;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: ({
    theme: 'power-systems',
    hasBackground: false,
    textColor: 'indigo',
    type: 'link',
    tagline: 'Tagline',
    headline: 'Headline',
    linkText: 'Click me',
    linkHref: 'https://www.google.com',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.'
  } as HeaderLongProps)
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var b,x,C;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: ({
    hasBackground: false,
    theme: 'power-systems',
    textColor: 'indigo',
    type: 'button',
    tagline: 'Tagline',
    headline: 'Headline',
    linkText: 'Click me',
    buttonText: 'Click me',
    buttonOnClick: () => {},
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.'
  } as HeaderLongProps)
}`,...(C=(x=s.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const O=["Default","WithBackground","WithLink","WithButton"];export{n as Default,t as WithBackground,s as WithButton,i as WithLink,O as __namedExportsOrder,E as default};
//# sourceMappingURL=HeaderLong.stories-e34cd13e.js.map
