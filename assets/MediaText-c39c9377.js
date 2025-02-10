import{j as e}from"./jsx-dev-runtime-8ab8c10c.js";import{f as j}from"./index.es24-551679ca.js";import{c as f}from"./index-ff2c9236.js";import{c as m}from"./clsx-0839fdbe.js";import{r as z}from"./index-b1e7e93e.js";import{G as t,a as c}from"./global-variants-71b69725.js";import{b as p}from"./commonCSS-0b9dd3ad.js";import{t as b}from"./tw-merge-1166cefb.js";import{R as V}from"./RichText-ae982a07.js";import{B as d,Z as u}from"./ZpsButton-5c2a76e8.js";const g=z.createContext({imageAlignment:"left",variant:t.Zps}),h=()=>z.useContext(g),M={[t.Zps]:["zep-text-typography-brand-steel"],[t.Cat]:["zep-text-typography-light-70 zep-opacity-70"]},C=f(["zep-typography-taglineMD zep-mb-0.5"],{variants:{variant:M},defaultVariants:{variant:t.Zps}}),x=({imageAlignment:l="left",variant:a=t.Zps,headline:i="",tagline:r="",content:o,labelSecondary:n,labelPrimary:s,onClickSecondary:N,onClickPrimary:v,src:T,alt:y})=>e.jsxDEV(g.Provider,{value:{imageAlignment:l,variant:a},children:e.jsxDEV("div",{className:m("zep-container","zep-max-w-[1920px]","zep-relative","zep-flex","zep-flex-col","md:zep-block"),"data-testid":"zep-mediaText-simple",children:[e.jsxDEV(D,{src:T,alt:y},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:58,columnNumber:9},globalThis),e.jsxDEV(E,{children:[e.jsxDEV("div",{className:"zep-flex zep-flex-col zep-gap-0.5",children:[r&&e.jsxDEV("p",{"data-testid":"zep-MediaText-tagline",className:b(C({variant:a}),"zep-break-words"),children:r},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:62,columnNumber:15},globalThis),i&&e.jsxDEV("h4",{"data-testid":"zep-MediaText-headline",className:m("zep-text-typography-light-100","zep-typography-headlineMD-fluid-cqi","after:zep-text-[0.23em]","zep-text-left","zep-break-words"),children:i},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:70,columnNumber:15},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:60,columnNumber:11},globalThis),e.jsxDEV(V,{content:o,variant:a===t.Cat?c.CatBg:c.ZpsBg},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:84,columnNumber:11},globalThis),e.jsxDEV("div",{className:"zep-block","data-testid":"zep-mediatext-buttons",children:e.jsxDEV(j,{gap:"1.5",className:m("max-md:zep-flex","md:zep-flex-row zep-gap-1.5 md:zep-gap-2 xl:zep-gap-1.5"),direction:"column",children:[n&&e.jsxDEV(d,{label:n,onClick:N,variant:u.Secondary},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:95,columnNumber:17},globalThis),s&&e.jsxDEV(d,{onClick:v,label:s,variant:u.Primary},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:98,columnNumber:17},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:89,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:88,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:59,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:47,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:46,columnNumber:5},globalThis),D=({src:l,alt:a})=>{const{imageAlignment:i}=h(),r=i==="left"?"md:zep-order-1":"",o=i==="left"?"zep-left-[0]":"zep-right-[0]";return e.jsxDEV("div",{"data-testid":"zep-mediaText-image",className:m("md:zep-w-[50%]","xl:zep-w-[58%]","md:zep-absolute","zep-justify-center",r,o),children:e.jsxDEV("div",{className:m("zep-relative"),children:e.jsxDEV("img",{alt:a,src:l,className:m("zep-w-full zep-aspect-[5/4] zep-h-full zep-object-cover md:zep-w-full md:zep-h-full md:zep-max-w-full")},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:125,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:124,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:113,columnNumber:5},globalThis)},E=({children:l})=>{const{imageAlignment:a,variant:i}=h(),r=a==="left"?"":"md:zep-order-1",o=a==="left"?"zep-ml-auto":"zep-mr-auto",n={[t.Zps]:p[c.ZpsBg],[t.Cat]:p[c.CatBg]},s=f([` md:zep-w-[57%]
        xl:zep-w-[50%]
        md:zep-mt-[60px]
        xl:zep-mt-[120px]
        zep-relative
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
        ${r},
        ${o}`],{variants:{variant:n},defaultVariants:{variant:t.Zps}});return e.jsxDEV("div",{className:b(s({variant:i})),"data-testid":"zep-mediaText-body",children:l},void 0,!1,{fileName:"/home/circleci/project/src/components/media-text/MediaText.tsx",lineNumber:180,columnNumber:5},globalThis)};try{x.displayName="MediaText",x.__docgenInfo={description:"",displayName:"MediaText",props:{headline:{defaultValue:{value:""},description:"",name:"headline",required:!1,type:{name:"string"}},tagline:{defaultValue:{value:""},description:"",name:"tagline",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"BlocksContent"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},imageAlignment:{defaultValue:{value:"left"},description:"",name:"imageAlignment",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},labelPrimary:{defaultValue:null,description:"",name:"labelPrimary",required:!1,type:{name:"string"}},labelSecondary:{defaultValue:null,description:"",name:"labelSecondary",required:!1,type:{name:"string"}},onClickPrimary:{defaultValue:null,description:"",name:"onClickPrimary",required:!1,type:{name:"(() => void)"}},onClickSecondary:{defaultValue:null,description:"",name:"onClickSecondary",required:!1,type:{name:"(() => void)"}}}}}catch{}export{x as M};
