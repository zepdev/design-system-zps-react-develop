import{j as e}from"./jsx-dev-runtime-8ab8c10c.js";import{f as M}from"./index.es24-551679ca.js";import{c as b}from"./index-ff2c9236.js";import{c as r}from"./clsx-0839fdbe.js";import{r as h}from"./index-b1e7e93e.js";import{G as a,a as d}from"./global-variants-893e06e6.js";import{b as f}from"./commonCSS-cc68a568.js";import{t as N}from"./tw-merge-1166cefb.js";import{R as D}from"./RichText-8087e489.js";import{B as s,Z as c}from"./ZpsButton-237503bb.js";const z=h.createContext({imageAlignment:"left",variant:a.Zps}),T=()=>h.useContext(z),E={[a.Zps]:["zep-text-typography-brand-steel"],[a.Cat]:["zep-text-typography-light-70 zep-opacity-70"]},C=b(["zep-typography-taglineMD zep-mb-0.5"],{variants:{variant:E},defaultVariants:{variant:a.Zps}}),g=({imageAlignment:m="left",variant:t=a.Zps,headline:i="",tagline:l="",content:p,labelSecondary:o,labelPrimary:n,onClickSecondary:v,onClickPrimary:j,src:V,alt:y,urlPrimary:u,urlSecondary:x})=>e.jsxDEV(z.Provider,{value:{imageAlignment:m,variant:t},children:e.jsxDEV("div",{className:r("zep-container","md:zep-grid","md:zep-grid-cols-14","md:zep-gap-x-1.5","xl:zep-gap-x-2","xl:zep-grid-cols-12","md:[grid-template-area:'pile']","zep-max-w-[1920px]","zep-relative","zep-flex","zep-flex-col"),"data-testid":"zep-mediaText-simple",children:[e.jsxDEV(q,{src:V,alt:y},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:65,columnNumber:9},globalThis),e.jsxDEV(k,{children:[e.jsxDEV("div",{className:r("zep-flex zep-flex-col zep-gap-0.5",{"zep-hidden":!(l&&i)}),children:[l&&e.jsxDEV("p",{"data-testid":"zep-MediaText-tagline",className:N(C({variant:t}),"zep-break-words"),children:l},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:69,columnNumber:15},globalThis),i&&e.jsxDEV("h3",{"data-testid":"zep-MediaText-headline",className:r("zep-text-typography-light-100","zep-typography-headlineMD-fluid-cqi","after:zep-text-[0.23em]","zep-text-left","zep-break-words","zep-break-all","zep-hyphens-auto"),children:i},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:77,columnNumber:15},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:67,columnNumber:11},globalThis),e.jsxDEV(D,{content:p,variant:t===a.Cat?d.CatBg:d.ZpsBg},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:93,columnNumber:11},globalThis),e.jsxDEV("div",{className:"zep-block","data-testid":"zep-mediatext-buttons",children:e.jsxDEV(M,{className:r("max-md:zep-flex","md:zep-flex-row zep-gap-1.5 md:zep-gap-2"),direction:"column",children:[o&&!x&&e.jsxDEV(s,{label:o,onClick:v,variant:c.Secondary},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:103,columnNumber:17},globalThis),n&&!u&&e.jsxDEV(s,{onClick:j,label:n,variant:c.Primary},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:106,columnNumber:17},globalThis),o&&x&&e.jsxDEV("a",{href:x,children:e.jsxDEV(s,{label:o,variant:c.Secondary},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:111,columnNumber:19},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:110,columnNumber:17},globalThis),n&&u&&e.jsxDEV("a",{href:u,children:e.jsxDEV(s,{label:n,variant:c.Primary},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:116,columnNumber:19},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:115,columnNumber:17},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:98,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:97,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:66,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:49,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:48,columnNumber:5},globalThis),q=({src:m,alt:t})=>{const{imageAlignment:i}=T(),l=i==="left"?"md:[grid-column:1/8]":"md:[grid-column:8/15] xl:[grid-column:6/13]";return e.jsxDEV("div",{"data-testid":"zep-mediaText-image",className:r("md:[grid-area:pile]","md:zep-grid-rows-1","zep-justify-center",l),children:e.jsxDEV("div",{className:r("zep-aspect-[4/3]"),children:e.jsxDEV("img",{alt:t,src:m,className:r("zep-w-full zep-h-full zep-object-cover")},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:142,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:141,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:132,columnNumber:5},globalThis)},k=({children:m})=>{const{imageAlignment:t,variant:i}=T(),l=t==="left"?"md:[grid-column:7/15] xl:[grid-column:7/13]":"md:[grid-column:1/9] xl:[grid-column:1/7]",p={[a.Zps]:f[d.ZpsBg],[a.Cat]:f[d.CatBg]},o=b([`
        md:[grid-area:pile]
        md:zep-grid-rows-1
        md:zep-mt-[60px]
        xl:zep-mt-[120px]
        zep-h-[max-content]
        zep-z-10
        zep-p-1
        sm:zep-p-2.5
        md:zep-p-2
        xl:zep-p-5
        zep-max-w-fit
        md:zep-min-w-[499px]
        xl:zep-min-w-[700px]
        zep-flex
        zep-flex-col
        zep-gap-1.5
        xl:zep-gap-2
      `,l],{variants:{variant:p},defaultVariants:{variant:a.Zps}});return e.jsxDEV("div",{className:N(o({variant:i})),"data-testid":"zep-mediaText-body",children:m},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:194,columnNumber:5},globalThis)};try{g.displayName="MediaText",g.__docgenInfo={description:"",displayName:"MediaText",props:{headline:{defaultValue:{value:""},description:"",name:"headline",required:!1,type:{name:"string"}},tagline:{defaultValue:{value:""},description:"",name:"tagline",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"BlocksContent"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},imageAlignment:{defaultValue:{value:"left"},description:"",name:"imageAlignment",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},labelPrimary:{defaultValue:null,description:"",name:"labelPrimary",required:!1,type:{name:"string"}},labelSecondary:{defaultValue:null,description:"",name:"labelSecondary",required:!1,type:{name:"string"}},onClickPrimary:{defaultValue:null,description:"",name:"onClickPrimary",required:!1,type:{name:"(() => void)"}},onClickSecondary:{defaultValue:null,description:"",name:"onClickSecondary",required:!1,type:{name:"(() => void)"}},urlPrimary:{defaultValue:null,description:"",name:"urlPrimary",required:!1,type:{name:"string"}},urlSecondary:{defaultValue:null,description:"",name:"urlSecondary",required:!1,type:{name:"string"}}}}}catch{}export{g as M};
