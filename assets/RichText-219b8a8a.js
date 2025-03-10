import{j as i}from"./jsx-dev-runtime-8ab8c10c.js";import{j as c}from"./jsx-runtime-6f6342d7.js";import{r as u}from"./index-b1e7e93e.js";import{Z as v,l as R,a as V}from"./index.es16-0bcfc29a.js";import{i as j}from"./index.es18-4e559a5f.js";import{c as h}from"./clsx-0839fdbe.js";import{a as d,G as x}from"./global-variants-893e06e6.js";const k=({text:e,...r})=>{const{modifiers:t,missingModifierTypes:o}=z();return Object.keys(r).reduce((n,l)=>{if(!r[l])return n;const a=t[l];return a?c.jsx(a,{children:n}):(o.includes(l)||(console.warn(`[@strapi/block-react-renderer] No component found for modifier "${l}"`),o.push(l)),n)},c.jsx(c.Fragment,{children:e}))},E=["image"],D=e=>{const{children:r,type:t,...o}=e;if(t==="code"){const p=n=>n.reduce((l,a)=>a.type==="text"?l.concat(a.text):a.type==="link"?l.concat(p(a.children)):l,"");return{...o,plainText:p(e.children)}}return o},T=({content:e})=>{const{children:r,type:t,...o}=e,{blocks:p,missingBlockTypes:n}=z(),l=p[t];if(!l)return n.includes(t)||(console.warn(`[@strapi/block-react-renderer] No component found for block type "${t}"`),n.push(t)),null;if(E.includes(t))return c.jsx(l,{...o});if(t==="paragraph"&&r.length===1&&r[0].type==="text"&&r[0].text==="")return c.jsx("br",{});const a=D(e);return c.jsx(l,{...a,children:r.map((s,m)=>{if(s.type==="text"){const{type:N,...b}=s;return u.createElement(k,{...b,key:m})}return c.jsx(T,{content:s},m)})})},f={blocks:{paragraph:e=>c.jsx("p",{children:e.children}),quote:e=>c.jsx("blockquote",{children:e.children}),code:e=>c.jsx("pre",{children:c.jsx("code",{children:e.plainText})}),heading:({level:e,children:r})=>{switch(e){case 1:return c.jsx("h1",{children:r});case 2:return c.jsx("h2",{children:r});case 3:return c.jsx("h3",{children:r});case 4:return c.jsx("h4",{children:r});case 5:return c.jsx("h5",{children:r});case 6:return c.jsx("h6",{children:r})}},link:e=>c.jsx("a",{href:e.url,children:e.children}),list:e=>e.format==="ordered"?c.jsx("ol",{children:e.children}):c.jsx("ul",{children:e.children}),"list-item":e=>c.jsx("li",{children:e.children}),image:e=>c.jsx("img",{src:e.image.url,alt:e.image.alternativeText||void 0})},modifiers:{bold:e=>c.jsx("strong",{children:e.children}),italic:e=>c.jsx("em",{children:e.children}),underline:e=>c.jsx("u",{children:e.children}),strikethrough:e=>c.jsx("del",{children:e.children}),code:e=>c.jsx("code",{children:e.children})},missingBlockTypes:[],missingModifierTypes:[]},y=u.createContext(f),C=({children:e,value:r=f})=>{const t=u.useMemo(()=>r,[r]);return c.jsx(y.Provider,{value:t,children:e})};function z(){return u.useContext(y)}const w=e=>{const r={...f.blocks,...e.blocks},t={...f.modifiers,...e.modifiers},o=u.useRef([]),p=u.useRef([]);return c.jsx(C,{value:{blocks:r,modifiers:t,missingBlockTypes:o.current,missingModifierTypes:p.current},children:e.content.map((n,l)=>c.jsx(T,{content:n},l))})},B=""+new URL("appstore-a93cecea.svg",import.meta.url).href,_=""+new URL("googleplay-7d20acaa.svg",import.meta.url).href,q=({level:e,children:r,className:t})=>{switch(e){case 1:case 2:case 3:return i.jsxDEV("h3",{className:h("zep-typography-headlineSM-fluid-cqi","zep-text-start",t),children:r},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:15,columnNumber:14},globalThis);case 4:return i.jsxDEV("h4",{className:h("zep-typography-headlineXS-fluid-cqi","zep-text-start",t),children:r},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:17,columnNumber:14},globalThis);case 5:return i.jsxDEV("h5",{className:h("zep-typography-headlineXS-fluid-cqi","zep-text-start",t),children:r},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:19,columnNumber:14},globalThis);default:return i.jsxDEV("h6",{className:h("zep-typography-headlineXS-fluid-cqi","zep-text-start",t),children:r},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:21,columnNumber:14},globalThis)}},Z=({children:e,className:r})=>i.jsxDEV("p",{className:h("zep-typography-bodyText","zep-text-start",r),children:e},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:27,columnNumber:3},globalThis),P=({ordered:e,items:r})=>i.jsxDEV(j,{className:"zep-w-full zep-flex zep-flex-col zep-gap-0.25 zep-justify-start",type:e?"numeric":"bullet",children:r},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:32,columnNumber:3},globalThis),S=({url:e,description:r,alt:t})=>i.jsxDEV("div",{className:"sm:zep-max-w-[calc(50%-16px)] zep-flex zep-flex-col",children:[i.jsxDEV("div",{className:"zep-aspect-[4/3]",children:i.jsxDEV("img",{src:e,alt:t,className:"zep-w-full zep-h-full zep-object-cover"},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:43,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:42,columnNumber:5},globalThis),i.jsxDEV("span",{className:"zep-break-all zep-bg-greyscale-200 zep-w-full zep-text-typography-dark-70 zep-opacity-70 zep-py-0.5 zep-px-1 zep-typography-bodyText",children:r},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:45,columnNumber:5},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:41,columnNumber:3},globalThis),g=({content:e,children:r,variant:t=x.Zps,appStoreUrl:o,googlePlayUrl:p,className:n})=>{const l={"zep-text-typography-light-100":t===d.ZpsBg||t===d.CatBg,"zep-text-typography-dark-100":t===x.Cat,"zep-text-primary-default":t===x.Zps},a={"zep-text-yellow-500":t===d.CatBg||t===d.ZpsBg,"zep-text-typography-dark-100":t===x.Cat,"zep-text-primary-default":t===x.Zps};return i.jsxDEV("div",{className:h(l,"zep-container","zep-max-w-[944px]","zep-flex","sm:zep-flex-row","zep-flex-col","sm:zep-flex-wrap","zep-gap-0.5",n),"data-testid":"zep-richtext",children:[i.jsxDEV(w,{content:e,blocks:{paragraph:({children:s})=>i.jsxDEV(Z,{className:h("zep-w-full",l),children:s},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:90,columnNumber:40},globalThis),heading:({children:s,level:m})=>i.jsxDEV(q,{className:h(l,"zep-w-full","zep-font-500"),level:m,children:s},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:92,columnNumber:13},globalThis),link:({children:s,url:m})=>i.jsxDEV(v,{className:h(a,"zep-inline-flex"),href:m,label:s,mode:R.Inline,target:V.Blank},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:97,columnNumber:13},globalThis),"list-item":({children:s})=>i.jsxDEV(j.Item,{className:"zep-py-[0]",children:i.jsxDEV("span",{className:"zep-break-all zep-w-full zep-inline-block",children:s},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:107,columnNumber:15},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:106,columnNumber:13},globalThis),list:({children:s,format:m})=>i.jsxDEV(P,{ordered:m==="ordered",items:s},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:111,columnNumber:13},globalThis),image:({image:{alternativeText:s,name:m,url:N,caption:b}})=>i.jsxDEV(S,{url:N,alt:s??m,description:b??m},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:114,columnNumber:13},globalThis)},modifiers:{bold:({children:s})=>i.jsxDEV("span",{className:"zep-typography-bodyStrong",children:s},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:118,columnNumber:35},globalThis),italic:({children:s})=>i.jsxDEV("span",{className:"zep-italic",children:s},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:119,columnNumber:37},globalThis)}},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:86,columnNumber:7},globalThis),i.jsxDEV("div",{className:"zep-w-full",children:r},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:122,columnNumber:7},globalThis),i.jsxDEV("div",{className:"zep-flex zep-flex-col md:zep-flex-row zep-gap-1 md:zep-gap-1.5 zep-mt-1.5 md:zep-mt-2",children:[p&&i.jsxDEV("a",{href:p,target:"_blank",rel:"noreferrer",children:i.jsxDEV("img",{src:_},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:126,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:125,columnNumber:11},globalThis),o&&i.jsxDEV("a",{href:o,target:"_blank",rel:"noreferrer",children:i.jsxDEV("img",{src:B},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:131,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:130,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:123,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:72,columnNumber:5},globalThis)};try{g.displayName="RichText",g.__docgenInfo={description:"",displayName:"RichText",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"BlocksContent"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},appStoreUrl:{defaultValue:null,description:"",name:"appStoreUrl",required:!1,type:{name:"string"}},googlePlayUrl:{defaultValue:null,description:"",name:"googlePlayUrl",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{g as R};
