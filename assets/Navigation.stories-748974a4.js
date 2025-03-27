import{j as e}from"./jsx-dev-runtime-8ab8c10c.js";import{N as j,l as y}from"./index.es16-fae182fa.js";import{r as o}from"./index-b1e7e93e.js";import{L as F}from"./global-variants-893e06e6.js";import{g as J}from"./getDataLayer-1420585a.js";import{h as q}from"./index.es13-373f5050.js";import"./jsx-runtime-6f6342d7.js";import"./index.es31-95f1013f.js";import"./_commonjsHelpers-de833af9.js";const re=""+new URL("zep-cat-logo-7a4ba8ca.svg",import.meta.url).href,oe=""+new URL("burger-fe2d6553.svg",import.meta.url).href,Q=""+new URL("language-icon-fedf31c2.svg",import.meta.url).href,T=({selectedLocale:r,setLocaleSwitcherMenu:t,locales:c,header:S,labelBack:p,setLanguageSwitcher:v,setSelectedLocale:d})=>{var f,w;const[b,x]=o.useState(!1),[h,u]=o.useState(!1);o.useEffect(()=>{x(!0)},[]),o.useEffect(()=>(b?document.body.classList.add("zep-overflow-hidden"):document.body.classList.remove("zep-overflow-hidden"),()=>{document.body.classList.remove("zep-overflow-hidden")}),[b]);const N=()=>{setTimeout(()=>{t&&t(!1)},500),x(!1)},g=c==null?void 0:c.reduce((n,s)=>(n[s.country]||(n[s.country]=[]),n[s.country].push(s),n),{});return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{className:`${h?"zep-animate-slide-out":""} md:zep-hidden`,children:[e.jsxDEV("div",{className:"zep-text-typography-light-100 zep-mb-2.5 zep-flex zep-gap-0.5 zep-items-center",children:e.jsxDEV(j,{mode:y.Standalone,label:p,iconPlacement:"before",icon:"arrow-long-left",onClick:n=>{n.preventDefault(),u(!0),setTimeout(()=>{u(!1),v&&v(!1)},300)}},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/LanguageSwitcher.tsx",lineNumber:53,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/LanguageSwitcher.tsx",lineNumber:52,columnNumber:9},globalThis),e.jsxDEV("h4",{className:"zep-text-headlineXS-fluid-cqi zep-text-typography-light-100 zep-mb-2",children:S},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/LanguageSwitcher.tsx",lineNumber:71,columnNumber:9},globalThis),g&&((f=Object.keys(g))==null?void 0:f.map((n,s)=>{var l;return e.jsxDEV("div",{className:"zep-mb-3",children:[e.jsxDEV("p",{className:"zep-mb-1.5 zep-typography-bodyText zep-text-typography-light-100",children:n},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/LanguageSwitcher.tsx",lineNumber:75,columnNumber:15},globalThis),(l=g[n])==null?void 0:l.map(a=>e.jsxDEV("div",{className:"zep-flex zep-gap-1 zep-mb-1.5 zep-items-center",onClick:()=>d&&d(a),children:[e.jsxDEV("div",{className:"zep-w-1.5 zep-h-1.5 zep-bg-typography-light-100 zep-flex zep-justify-center zep-items-center zep-rounded-full",children:(r==null?void 0:r.value)===(a==null?void 0:a.value)&&e.jsxDEV("div",{className:"zep-w-0.75 zep-h-0.75 zep-bg-neutral-dark-default zep-rounded-full"},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/LanguageSwitcher.tsx",lineNumber:84,columnNumber:23},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/LanguageSwitcher.tsx",lineNumber:82,columnNumber:19},globalThis),e.jsxDEV("p",{className:"zep-typography-bodyText zep-text-typography-light-100",children:a==null?void 0:a.label},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/LanguageSwitcher.tsx",lineNumber:87,columnNumber:19},globalThis)]},a.value,!0,{fileName:"/home/circleci/project/src/components/navigation/LanguageSwitcher.tsx",lineNumber:77,columnNumber:17},globalThis))]},`${n}${s}`,!0,{fileName:"/home/circleci/project/src/components/navigation/LanguageSwitcher.tsx",lineNumber:74,columnNumber:13},globalThis)}))]},void 0,!0,{fileName:"/home/circleci/project/src/components/navigation/LanguageSwitcher.tsx",lineNumber:51,columnNumber:7},globalThis),e.jsxDEV("div",{className:"zep-hidden md:zep-block",children:[e.jsxDEV("div",{className:`zep-fixed zep-top-[0px] zep-right-[0px] md:zep-w-[440px] lg:zep-w-[480px] zep-pl-3 zep-pt-2 zep-pr-2 zep-bg-background-dark zep-ease-out zep-w-[0px] zep-duration-500 zep-h-screen zep-z-[1000] ${b?"zep-translate-x-0 ":"zep-translate-x-full"}`,children:e.jsxDEV("div",{className:`${b?"zep-block zep-overflow-hidden":""}`,children:[e.jsxDEV("div",{className:"zep-flex zep-justify-end zep-mb-2",children:e.jsxDEV(q,{name:"close",color:"#fff",size:24,onClick:N,className:"zep-cursor-pointer"},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/LanguageSwitcher.tsx",lineNumber:103,columnNumber:15},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/LanguageSwitcher.tsx",lineNumber:102,columnNumber:13},globalThis),e.jsxDEV("h4",{className:"zep-text-headlineXS-fluid-cqi zep-text-typography-light-100 zep-mb-3",children:S},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/LanguageSwitcher.tsx",lineNumber:111,columnNumber:13},globalThis),g&&((w=Object.keys(g))==null?void 0:w.map((n,s)=>{var l;return e.jsxDEV("div",{className:"zep-mb-3",children:[e.jsxDEV("p",{className:"zep-mb-1.5 zep-typography-bodyText zep-text-typography-light-100",children:n},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/LanguageSwitcher.tsx",lineNumber:115,columnNumber:19},globalThis),(l=g[n])==null?void 0:l.map(a=>e.jsxDEV("div",{className:"zep-flex zep-gap-1 zep-mb-1.5 zep-items-center",onClick:()=>d&&d(a),children:[e.jsxDEV("div",{className:"zep-w-1.5 zep-h-1.5 zep-bg-typography-light-100 zep-flex zep-justify-center zep-items-center zep-rounded-full",children:(r==null?void 0:r.value)===(a==null?void 0:a.value)&&e.jsxDEV("div",{className:"zep-w-0.75 zep-h-0.75 zep-bg-neutral-dark-default zep-rounded-full"},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/LanguageSwitcher.tsx",lineNumber:124,columnNumber:27},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/LanguageSwitcher.tsx",lineNumber:122,columnNumber:23},globalThis),e.jsxDEV("p",{className:"zep-typography-bodyText zep-text-typography-light-100",children:a==null?void 0:a.label},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/LanguageSwitcher.tsx",lineNumber:127,columnNumber:23},globalThis)]},a.value,!0,{fileName:"/home/circleci/project/src/components/navigation/LanguageSwitcher.tsx",lineNumber:117,columnNumber:21},globalThis))]},`${n}${s}`,!0,{fileName:"/home/circleci/project/src/components/navigation/LanguageSwitcher.tsx",lineNumber:114,columnNumber:17},globalThis)}))]},void 0,!0,{fileName:"/home/circleci/project/src/components/navigation/LanguageSwitcher.tsx",lineNumber:101,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/LanguageSwitcher.tsx",lineNumber:96,columnNumber:9},globalThis),e.jsxDEV("div",{onClick:N,className:`zep-fixed zep-top-[0px] zep-left-[0px] zep-bg-[#000] transition-all zep-duration-500  zep-w-screen zep-h-screen zep-z-[500] ${b?"zep-opacity-70":"zep-opacity-[0]"}`},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/LanguageSwitcher.tsx",lineNumber:134,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/navigation/LanguageSwitcher.tsx",lineNumber:95,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/navigation/LanguageSwitcher.tsx",lineNumber:49,columnNumber:5},globalThis)};try{T.displayName="LanguageSwitcher",T.__docgenInfo={description:"",displayName:"LanguageSwitcher",props:{header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"string"}},labelBack:{defaultValue:null,description:"",name:"labelBack",required:!0,type:{name:"string"}},setLocaleSwitcherMenu:{defaultValue:null,description:"",name:"setLocaleSwitcherMenu",required:!1,type:{name:"((x: boolean) => void)"}},selectedLocale:{defaultValue:null,description:"",name:"selectedLocale",required:!1,type:{name:"Locale"}},setLanguageSwitcher:{defaultValue:null,description:"",name:"setLanguageSwitcher",required:!1,type:{name:"((x: boolean) => void)"}},locales:{defaultValue:null,description:"",name:"locales",required:!1,type:{name:"Locale[]"}},setSelectedLocale:{defaultValue:null,description:"",name:"setSelectedLocale",required:!1,type:{name:"((x: Locale) => void)"}}}}}catch{}const B=({navItems:r,setOpen:t,initialPath:c,setInitialPath:S,selectedLocale:p,locales:v,header:d="",labelBack:b,setSelectedLocale:x,navigationUtilityItems:h})=>{var a;const[u,N]=o.useState(!1),[g,f]=o.useState(!1),[w,n]=o.useState(!1);o.useEffect(()=>{N(!0)},[]),o.useEffect(()=>(u?document.body.classList.add("zep-overflow-hidden"):document.body.classList.remove("zep-overflow-hidden"),()=>{document.body.classList.remove("zep-overflow-hidden")}),[u]);const s=()=>{setTimeout(()=>{S([]),t(!1)},500),N(!1)},l=({items:z,children:$})=>{var U,G;const[V,k]=o.useState(c||[]),[I,A]=o.useState(c?c[0]:"1"),[Y,M]=o.useState(!1),[Z,P]=o.useState(!1);o.useEffect(()=>{c&&(c==null?void 0:c.length)>0&&k(c)},[]);const ee=(i,m)=>{k(E=>[...E.slice(0,m),i])},ae=()=>{k(i=>{const m=i.slice(0,-1);return A(m.length>0?m[m.length-1]:"1"),m})},O=(i,m)=>{let E=i;for(const R of m){const _=E.find(le=>le.navId===R);if(_&&_.children)E=_.children;else break}return E},ne=O(z,V),L=O(z,V.slice(0,-1)),ie=J();return e.jsxDEV("div",{className:Y?"zep-animate-slide-in":Z?"zep-animate-slide-out":"",children:[V.length>0&&e.jsxDEV("div",{className:"zep-text-typography-light-100 zep-mb-2.5 zep-flex zep-gap-0.5 zep-items-center",children:e.jsxDEV(j,{mode:y.Standalone,label:b,iconPlacement:"before",icon:"arrow-long-left",onClick:i=>{i.preventDefault(),P(!0),setTimeout(()=>{P(!1),ae()},300)}},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:97,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:96,columnNumber:11},globalThis),e.jsxDEV("ul",{children:[V.length>0&&e.jsxDEV("li",{className:"zep-flex zep-gap-0.5",children:e.jsxDEV(j,{label:(U=L[Number(I)-1])==null?void 0:U.label,href:(G=L[Number(I)-1])==null?void 0:G.link,className:"zep-mb-1.5 zep-text-typography-light-100",icon:"home",iconPlacement:"before",mode:y.Standalone},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:117,columnNumber:15},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:115,columnNumber:13},globalThis),ne.map(i=>e.jsxDEV("li",{className:`${V.length>0?"zep-pl-2":""}`,children:i.children&&i.children.length>0?e.jsxDEV("div",{className:"zep-flex zep-gap-0.5 zep-items-center zep-mb-1.5 ",children:e.jsxDEV(j,{label:i.label,className:"zep-text-typography-light-100",mode:y.Standalone,href:i.link,iconPlacement:"before",icon:"arrow-long-right",onClick:m=>{m.preventDefault(),A(i.navId),M(!0),ee(i.navId,V.length),setTimeout(()=>M(!1),300)}},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:131,columnNumber:19},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:130,columnNumber:17},globalThis):e.jsxDEV(j,{label:i.label,className:"zep-mb-1.5 zep-text-typography-light-100  zep-justify-end",iconPlacement:"before",mode:y.Standalone,onClickCapture:()=>{var m;ie.push({event:"interaction_nav",link_text:i.label,link_type:"main_nav",link_section:(m=L[Number(I)-1])==null?void 0:m.label})},href:i.link},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:148,columnNumber:17},globalThis)},`${i.navId}-${i.label}`,!1,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:128,columnNumber:13},globalThis))]},void 0,!0,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:113,columnNumber:9},globalThis),$&&e.jsxDEV("div",{children:$},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:168,columnNumber:22},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:94,columnNumber:7},globalThis)};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{className:"md:zep-hidden",children:e.jsxDEV("div",{className:`zep-fixed zep-top-[0px] zep-left-[0px] zep-py-1 sm:zep-py-2 zep-bg-background-dark zep-z-[1000] zep-ease-in-out zep-h-screen zep-duration-500 ${u?"zep-w-full md:zep-transform zep-translate-x-0 lg:zep-transform zep-translate-x-0":"-zep-translate-x-full"}`,children:e.jsxDEV("div",{className:`${u?"zep-block":""} zep-h-[calc(100svh-40px)] zep-overflow-auto`,children:[e.jsxDEV("div",{className:"zep-flex zep-justify-end zep-mb-1 zep-mr-1 sm:zep-mr-2",children:e.jsxDEV(q,{name:"close",color:"#fff",size:24,onClick:s},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:186,columnNumber:15},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:185,columnNumber:13},globalThis),e.jsxDEV("div",{className:`${w?"zep-animate-slide-in":""}`,children:g?e.jsxDEV("div",{className:"zep-px-1.5 sm:zep-px-3",children:e.jsxDEV(T,{locales:v,header:d,labelBack:b,selectedLocale:p,setLanguageSwitcher:f,setSelectedLocale:x},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:191,columnNumber:19},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:190,columnNumber:17},globalThis):e.jsxDEV("div",{children:e.jsxDEV("div",{className:"zep-px-1.5 sm:zep-px-3",children:e.jsxDEV(l,{items:r,children:[e.jsxDEV("div",{className:"zep-w-full zep-h-[1px] zep-bg-greyscale-700 zep-mt-2.5 zep-mb-2.5"},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:204,columnNumber:23},globalThis),e.jsxDEV("div",{className:"",children:h==null?void 0:h.map(z=>e.jsxDEV(j,{label:z.label,href:"",mode:y.Standalone,className:"zep-text-typography-light-100 zep-mb-1.5"},z.label,!1,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:207,columnNumber:27},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:205,columnNumber:23},globalThis),e.jsxDEV("div",{className:"zep-flex zep-gap-0.5 zep-items-center zep-mb-3",onClick:z=>{z.preventDefault(),f(!0),n(!0),setTimeout(()=>n(!1),300)},children:[e.jsxDEV("img",{alt:"Language switch icon",src:Q,className:"zep-w-1"},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:225,columnNumber:25},globalThis),e.jsxDEV("p",{className:"zep-text-typography-light-100 zep-font-500",children:`${p==null?void 0:p.country} | ${(a=p==null?void 0:p.langAbbrev)==null?void 0:a.toUpperCase()}`},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:226,columnNumber:25},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:216,columnNumber:23},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:203,columnNumber:21},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:202,columnNumber:19},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:201,columnNumber:17},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:188,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:184,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:177,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:176,columnNumber:7},globalThis),e.jsxDEV("div",{className:"zep-hidden md:zep-block",children:[e.jsxDEV("div",{className:`zep-fixed zep-top-[0px] zep-left-[0px] md:zep-w-[440px] lg:zep-w-[500px] zep-pt-2 zep-bg-background-dark zep-ease-in-out zep-w-[0px] zep-duration-500 zep-h-screen zep-z-[1000] ${u?"md:zep-transform zep-translate-x-0 lg:zep-transform zep-translate-x-0":"-zep-translate-x-full"}`,children:e.jsxDEV("div",{className:`${u?"zep-block":""} zep-h-[calc(100svh-40px)] zep-overflow-auto`,children:[e.jsxDEV("div",{className:"zep-flex zep-justify-end zep-pr-2 zep-mb-2",children:e.jsxDEV(q,{name:"close",color:"#fff",size:24,onClick:s,className:"zep-cursor-pointer"},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:248,columnNumber:15},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:247,columnNumber:13},globalThis),e.jsxDEV("div",{className:"zep-px-3",children:e.jsxDEV(l,{items:r},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:257,columnNumber:15},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:256,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:246,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:241,columnNumber:9},globalThis),e.jsxDEV("div",{onClick:s,className:`zep-fixed zep-top-[0px] zep-left-[0px] zep-bg-[#000] transition-all zep-duration-500  zep-w-screen zep-h-screen zep-z-[500] ${u?"zep-opacity-70":"zep-opacity-[0]"}`},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:261,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:240,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/navigation/Sidebar.tsx",lineNumber:174,columnNumber:5},globalThis)};try{B.displayName="Sidebar",B.__docgenInfo={description:"",displayName:"Sidebar",props:{navItems:{defaultValue:null,description:"",name:"navItems",required:!0,type:{name:"NavigationItem[]"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},setOpen:{defaultValue:null,description:"",name:"setOpen",required:!0,type:{name:"(x: boolean) => void"}},initialPath:{defaultValue:null,description:"",name:"initialPath",required:!1,type:{name:"string[]"}},setInitialPath:{defaultValue:null,description:"",name:"setInitialPath",required:!0,type:{name:"(x: string[]) => void"}},selectedLocale:{defaultValue:null,description:"",name:"selectedLocale",required:!1,type:{name:"Locale"}},locales:{defaultValue:null,description:"",name:"locales",required:!1,type:{name:"Locale[]"}},header:{defaultValue:{value:""},description:"",name:"header",required:!1,type:{name:"string"}},labelBack:{defaultValue:null,description:"",name:"labelBack",required:!0,type:{name:"string"}},setSelectedLocale:{defaultValue:null,description:"",name:"setSelectedLocale",required:!1,type:{name:"((x: Locale) => void)"}},navigationUtilityItems:{defaultValue:null,description:"",name:"navigationUtilityItems",required:!1,type:{name:"NavUtilityItem[]"}}}}}catch{}const C=({navigationUtilityItems:r,selectedLocale:t,setSelectedLocale:c,logo:S,header:p,labelBack:v,navigationItems:d,locales:b})=>{var s;const[x,h]=o.useState(!1),[u,N]=o.useState([]),[g,f]=o.useState(!1),w=()=>{switch(t==null?void 0:t.value){case F.EN:return"/de/en/";case F.DE_AT:return"/at/de/";default:return"/de/de/"}},n=J();return e.jsxDEV("div",{className:"zep-bg-background-dark",children:[e.jsxDEV("div",{className:"zep-hidden md:zep-flex zep-justify-end zep-px-1 sm:zep-px-1.5 md:zep-px-[66px] lg:zep-px-[122px] md:zep-py-0.75 zep-border-b-1 zep-border-greyscale-700",children:[e.jsxDEV("div",{className:"zep-flex zep-gap-2 zep-mr-3",children:r==null?void 0:r.map((l,a)=>e.jsxDEV(j,{label:l.label,href:l.link||"",mode:y.Standalone,onClickCapture:()=>{n.push({event:"interaction_nav",link_text:l.label,link_type:"top_nav"})},className:"zep-text-typography-light-100 zep-text-0.875"},`${l.label}${a}`,!1,{fileName:"/home/circleci/project/src/components/navigation/Navigation.tsx",lineNumber:41,columnNumber:13},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Navigation.tsx",lineNumber:39,columnNumber:9},globalThis),e.jsxDEV("div",{className:"zep-flex zep-gap-0.5 zep-items-center zep-cursor-pointer zep-group",onClick:()=>f(!0),children:[e.jsxDEV("img",{className:"zep-size-[18px]",alt:"Language switch icon",src:Q},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Navigation.tsx",lineNumber:61,columnNumber:11},globalThis),e.jsxDEV("p",{className:"zep-text-typography-light-100 zep-font-500 zep-text-0.875 group-hover:zep-underline",children:`${t==null?void 0:t.country} | ${(s=t==null?void 0:t.langAbbrev)==null?void 0:s.toUpperCase()}`},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Navigation.tsx",lineNumber:62,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/navigation/Navigation.tsx",lineNumber:57,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/navigation/Navigation.tsx",lineNumber:38,columnNumber:7},globalThis),e.jsxDEV("div",{className:"zep-p-1 sm:zep-px-1.5 md:zep-px-[66px] lg:zep-px-[122px] md:zep-py-1.5 zep-flex zep-justify-between md:zep-justify-start zep-items-center zep-border-b-1 zep-border-greyscale-700",children:[e.jsxDEV("a",{href:w(),children:e.jsxDEV("img",{alt:"logo",src:S,className:"md:zep-mr-3 xl:zep-mr-4"},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Navigation.tsx",lineNumber:69,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Navigation.tsx",lineNumber:68,columnNumber:9},globalThis),e.jsxDEV("img",{alt:"hamburger_menu",src:oe,className:"md:zep-hidden",onClick:()=>h(!0)},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Navigation.tsx",lineNumber:71,columnNumber:9},globalThis),e.jsxDEV("div",{className:"zep-hidden md:zep-flex md:zep-gap-2.5 lg:zep-gap-3.5",children:d==null?void 0:d.map((l,a)=>e.jsxDEV("div",{onClick:()=>{h(!0),l.children&&N([l.navId])},className:"zep-group zep-relative zep-cursor-pointer",children:[e.jsxDEV("p",{className:"zep-typography-navigation zep-text-typography-light-100 zep-uppercase zep-py-0.25",children:l.label},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Navigation.tsx",lineNumber:82,columnNumber:15},globalThis),e.jsxDEV("div",{className:"zep-hidden group-hover:zep-block group-hover:zep-absolute zep-w-full",children:e.jsxDEV("div",{className:"zep-w-[24px] zep-h-[2px] zep-bg-yellow-500 zep-mx-auto"},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Navigation.tsx",lineNumber:86,columnNumber:17},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Navigation.tsx",lineNumber:85,columnNumber:15},globalThis)]},`${l.label}${a}`,!0,{fileName:"/home/circleci/project/src/components/navigation/Navigation.tsx",lineNumber:74,columnNumber:13},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Navigation.tsx",lineNumber:72,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/navigation/Navigation.tsx",lineNumber:67,columnNumber:7},globalThis),x&&e.jsxDEV(B,{initialPath:u,setInitialPath:N,navItems:d,open:x,setOpen:h,selectedLocale:t,header:p,labelBack:v,locales:b,setSelectedLocale:c,navigationUtilityItems:r},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Navigation.tsx",lineNumber:112,columnNumber:9},globalThis),g&&e.jsxDEV(T,{setLocaleSwitcherMenu:f,locales:b,labelBack:v,header:p,selectedLocale:t,setSelectedLocale:c},void 0,!1,{fileName:"/home/circleci/project/src/components/navigation/Navigation.tsx",lineNumber:127,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/navigation/Navigation.tsx",lineNumber:37,columnNumber:5},globalThis)};try{C.displayName="Navigation",C.__docgenInfo={description:"",displayName:"Navigation",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},navigationUtilityItems:{defaultValue:null,description:"",name:"navigationUtilityItems",required:!1,type:{name:"NavUtilityItem[]"}},navigationItems:{defaultValue:null,description:"",name:"navigationItems",required:!0,type:{name:"NavigationItem[]"}},selectedLocale:{defaultValue:null,description:"",name:"selectedLocale",required:!1,type:{name:"Locale"}},setSelectedLocale:{defaultValue:null,description:"",name:"setSelectedLocale",required:!1,type:{name:"((locale: Locale) => void)"}},locales:{defaultValue:null,description:"",name:"locales",required:!1,type:{name:"Locale[]"}},logo:{defaultValue:null,description:"",name:"logo",required:!0,type:{name:"string"}},header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"string"}},labelBack:{defaultValue:null,description:"",name:"labelBack",required:!0,type:{name:"string"}}}}}catch{}const he={title:"Components/Navigation",component:C,tags:["autodocs"],argTypes:{}},K=[{label:"Deutsch",value:"de",country:"Deutsch",langAbbrev:"DE"},{label:"English",value:"en",country:"Germany",langAbbrev:"EN"},{label:"Deutsch",value:"de-AT",country:"Österreich",langAbbrev:"DE"}],D={args:{logo:re,navigationItems:[{navId:"1",label:"Marine",link:"/Marine",children:[{navId:"1",label:"Loesungen",link:"/Loesungen",children:[{navId:"1",label:"Bratwurst",link:"/Bratwurst",children:[{navId:"1",label:"Bratwurst 1",link:"https://www.google.co.uk/"}]},{navId:"2",label:"Marine 1-2"}]},{navId:"2",label:"Power and heat",link:"/Ppower-and-heat",children:[{navId:"1",label:"Bratwurst",children:[{navId:"1",label:"Bratwurst 1",link:"https://www.google.co.uk/"}]},{navId:"2",label:"Marine 1-2"}]},{navId:"3",label:"LILA",link:"",children:[{navId:"1",label:"Bratwurst",children:[{navId:"1",label:"Bratwurst 1",link:"https://www.google.co.uk/"}]},{navId:"2",label:"Marine 1-2"}]}]},{navId:"2",label:"Strom & Wärme",children:[{navId:"1",label:"Strom 1"}]},{navId:"3",label:"Industrie",children:[{label:"Industrie 1"}]},{navId:"4",label:"Öl & Gas"},{navId:"5",label:"Schiene"},{navId:"6",label:"Gebrauchtmaschinen"}],locales:K,header:" Select preferred country and language",labelBack:"Back",selectedLocale:K[0],navigationUtilityItems:[{label:"Services"},{label:"Unternehmen"},{label:"Kontakt & Standorte"}]}};var W,X,H;D.parameters={...D.parameters,docs:{...(W=D.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    logo: zepCatLogo,
    navigationItems: [{
      navId: '1',
      label: 'Marine',
      link: '/Marine',
      children: [{
        navId: '1',
        label: 'Loesungen',
        link: '/Loesungen',
        children: [{
          navId: '1',
          label: 'Bratwurst',
          link: '/Bratwurst',
          children: [{
            navId: '1',
            label: 'Bratwurst 1',
            link: 'https://www.google.co.uk/'
          }]
        }, {
          navId: '2',
          label: 'Marine 1-2'
        }]
      }, {
        navId: '2',
        label: 'Power and heat',
        link: '/Ppower-and-heat',
        children: [{
          navId: '1',
          label: 'Bratwurst',
          children: [{
            navId: '1',
            label: 'Bratwurst 1',
            link: 'https://www.google.co.uk/'
          }]
        }, {
          navId: '2',
          label: 'Marine 1-2'
        }]
      }, {
        navId: '3',
        label: 'LILA',
        link: '',
        children: [{
          navId: '1',
          label: 'Bratwurst',
          children: [{
            navId: '1',
            label: 'Bratwurst 1',
            link: 'https://www.google.co.uk/'
          }]
        }, {
          navId: '2',
          label: 'Marine 1-2'
        }]
      }]
    }, {
      navId: '2',
      label: 'Strom & Wärme',
      children: [{
        navId: '1',
        label: 'Strom 1'
      }]
    }, {
      navId: '3',
      label: 'Industrie',
      children: [{
        label: 'Industrie 1'
      }]
    }, {
      navId: '4',
      label: 'Öl & Gas'
    }, {
      navId: '5',
      label: 'Schiene'
    }, {
      navId: '6',
      label: 'Gebrauchtmaschinen'
    }],
    locales: locales,
    header: ' Select preferred country and language',
    labelBack: 'Back',
    selectedLocale: locales[0],
    navigationUtilityItems: [{
      label: 'Services'
    }, {
      label: 'Unternehmen'
    }, {
      label: 'Kontakt & Standorte'
    }]
  } as NavigationProps
}`,...(H=(X=D.parameters)==null?void 0:X.docs)==null?void 0:H.source}}};const Ne=["Default"];export{D as Default,Ne as __namedExportsOrder,he as default};
