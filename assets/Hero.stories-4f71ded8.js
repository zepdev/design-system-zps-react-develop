import{j as e,c as t}from"./clsx-5d9ed152.js";import{f as E}from"./index.es24-9329eeb1.js";import{G as o}from"./global-variants-0f433d85.js";import{B as c,Z as m}from"./ZpsButton-31b463d5.js";import{c as S}from"./index-c0830ed4.js";import{t as w}from"./tw-merge-1166cefb.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./index.es13-55dfe41f.js";import"./index.es29-7715336a.js";const C={[o.Zps]:["zep-bg-gradient-to-r zep-from-[rgb(32,27,52)] zep-to-[rgb(32,23,94)]"],[o.Cat]:["zep-bg-typography-dark-100"]},T=S([` 
      zep-px-1.5
      zep-py-2
      sm:zep-px-2.5
      sm:zep-py-3
      md:zep-px-[65px]
      md:zep-py-4
      xl:zep-py-5
      xl:zep-px-[122px]
      zep-items-center
      zep-w-full
      zep-relative
    `],{variants:{variant:C},defaultVariants:{variant:o.Zps}}),k=({imageSrc:r,imageAlt:l})=>r===void 0?null:e.jsxDEV("img",{alt:l,src:r,"data-testid":"zep-newhero-image",className:t("zep-w-full","zep-object-cover","zep-h-auto","sm:zep-h-[380px]","xl:zep-h-[540px]")},void 0,!1,{fileName:"/home/circleci/project/src/components/hero/Hero.tsx",lineNumber:51,columnNumber:5},globalThis),D=({children:r})=>e.jsxDEV("h4",{"data-testid":"new-hero-headline",className:t("zep-typography-headlineLG","zep-typography-headline2XL-fluid-cqi","supports-cqi:zep-typography-headline2XL-fluid-cqi","zep-text-typography-light-100","supports-cqi:after:zep-text-[0.23em]","zep-mb-2","zep-col-span-1"),children:r},void 0,!1,{fileName:"/home/circleci/project/src/components/hero/Hero.tsx",lineNumber:68,columnNumber:5},globalThis),P=()=>e.jsxDEV("div",{className:"zep-w-full zep-absolute zep-left-[0px] zep-bottom-[0px] zep-hidden md:zep-block",children:e.jsxDEV("img",{src:"./assets/moving-forward-arrow.svg",alt:"arrow",width:"18.75%","data-testid":"zep-her-arrowIcon",className:t("zep-absolute","zep-right-1","zep-mr-[3%]","zep-top-[50%]","zep-translate-y-[-50%]")},void 0,!1,{fileName:"/home/circleci/project/src/components/hero/Hero.tsx",lineNumber:88,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/hero/Hero.tsx",lineNumber:87,columnNumber:5},globalThis),i=({variant:r=o.Zps,headline:l,buttonSecondary:s,buttonPrimary:v,buttonPrimaryOnClick:N,buttonSecondaryOnClick:j,imageAlt:V,imageSrc:H})=>e.jsxDEV("div",{className:t("zep-flex-col","zep-rounded-lg","zep-shadow-lg","md:zep-flex","zep-relative","zep-max-w-[1920px]","zep-mx-auto"),"data-testid":"zep-newhero",children:[e.jsxDEV(k,{imageSrc:H,imageAlt:V},void 0,!1,{fileName:"/home/circleci/project/src/components/hero/Hero.tsx",lineNumber:128,columnNumber:7},globalThis),e.jsxDEV("div",{"data-testid":"zep-newhero-body",className:w(T({variant:r})),children:[e.jsxDEV(D,{children:l},void 0,!1,{fileName:"/home/circleci/project/src/components/hero/Hero.tsx",lineNumber:130,columnNumber:9},globalThis),e.jsxDEV("div",{className:"zep-block","data-testid":"zep-new-herobutton",children:e.jsxDEV(E,{className:t("max-md:zep-flex","sm:zep-flex-row","zep-gap-1"),direction:"column",children:[e.jsxDEV(c,{"data-testid":"zep-hero-primary-button",label:v,variant:m.Primary,onClick:N},void 0,!1,{fileName:"/home/circleci/project/src/components/hero/Hero.tsx",lineNumber:133,columnNumber:13},globalThis),s?e.jsxDEV(c,{"data-testid":"zep-hero-secondary-button",label:s,variant:m.Secondary,onClick:j},void 0,!1,{fileName:"/home/circleci/project/src/components/hero/Hero.tsx",lineNumber:135,columnNumber:17},globalThis):null]},void 0,!0,{fileName:"/home/circleci/project/src/components/hero/Hero.tsx",lineNumber:132,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/hero/Hero.tsx",lineNumber:131,columnNumber:9},globalThis),e.jsxDEV(P,{},void 0,!1,{fileName:"/home/circleci/project/src/components/hero/Hero.tsx",lineNumber:139,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/hero/Hero.tsx",lineNumber:129,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/hero/Hero.tsx",lineNumber:116,columnNumber:5},globalThis);try{i.displayName="Hero",i.__docgenInfo={description:"",displayName:"Hero",props:{variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},buttonPrimary:{defaultValue:null,description:"",name:"buttonPrimary",required:!0,type:{name:"string"}},buttonSecondary:{defaultValue:null,description:"",name:"buttonSecondary",required:!1,type:{name:"string"}},buttonPrimaryOnClick:{defaultValue:null,description:"",name:"buttonPrimaryOnClick",required:!0,type:{name:"(ev: MouseEvent<HTMLElement, MouseEvent>) => void"}},buttonSecondaryOnClick:{defaultValue:null,description:"",name:"buttonSecondaryOnClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!1,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!1,type:{name:"string"}}}}}catch{}const X={title:"Components/Hero",component:i,tags:["autodocs"],argTypes:{}},p={src:"./assets/hero_image.png",alt:"Lorem ipsum dolor sit amet consectetur."},y="Headline",z="Primary",x="Secondary",a={args:{variant:o.Zps,headline:y,buttonPrimary:z,buttonSecondary:x,buttonSecondaryOnClick:()=>null,buttonPrimaryOnClick:()=>null,imageSrc:p.src,imageAlt:p.alt}},n={args:{variant:o.Zps,headline:y,buttonPrimary:z,buttonPrimaryOnClick:()=>null,buttonSecondary:x,buttonSecondaryOnClick:()=>null}};var u,d,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    headline,
    buttonPrimary,
    buttonSecondary,
    buttonSecondaryOnClick: () => null,
    buttonPrimaryOnClick: () => null,
    imageSrc: Image.src,
    imageAlt: Image.alt
  }
}`,...(b=(d=a.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var h,f,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    headline,
    buttonPrimary,
    buttonPrimaryOnClick: () => null,
    buttonSecondary,
    buttonSecondaryOnClick: () => null
  }
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const R=["Default","HeroSimple"];export{a as Default,n as HeroSimple,R as __namedExportsOrder,X as default};
//# sourceMappingURL=Hero.stories-4f71ded8.js.map
