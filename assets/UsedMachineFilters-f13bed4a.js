import{j as r}from"./jsx-dev-runtime-8ab8c10c.js";import{r as m}from"./index-b1e7e93e.js";import{c as w}from"./clsx-0839fdbe.js";import{j as u}from"./jsx-runtime-6f6342d7.js";import{i as h}from"./index.es31-95f1013f.js";import{h as G}from"./index.es13-cfbbaaf2.js";import{e as _}from"./index.es32-fbb642fb.js";import{Z as W}from"./index.es16-0bcfc29a.js";import{u as K,M as v,b as Y,c as J,a as Q,d as X}from"./used-machine-locales-b3df33e6.js";import{B as j,Z as y}from"./ZpsButton-3f33b2b2.js";import{S as $}from"./Slider-667a003e.js";const U=m.forwardRef(({id:i,name:d,className:c,disabled:a=!1,error:l=!1,label:t,children:g,onChange:f,value:o=i,...b},z)=>u.jsxs("span",{className:h("zep-group","zep-relative","zep-inline-flex","zep-flex-row","zep-flex-wrap","zep-items-center","zep-justify-start",{"[&>svg]:hover:zep-bg-primary-hover":!a&&!l,"zep-cursor-not-allowed":a},c),"data-testid":"zep-checkbox",children:[u.jsx("input",{id:i,ref:z,name:d,value:o,type:"checkbox",onChange:a?void 0:f,className:h(_,"sr-only","zep-peer","zep-absolute","zep-top-[0]","zep-appearance-none","focus-visible:zep-ring-offset-1","zep-w-1.5","zep-h-1.5","zep-border-1","zep-bg-greyscale-0","checked:zep-border-none checked:zep-bg-primary-default",{"checked:zep-bg-opacity-disabled zep-border-neutral-dark-default zep-border-opacity-disabled":a,"zep-border-2 zep-border-error":l,"zep-border-neutral-dark-default group-hover:zep-border-primary-hover group-hover:zep-border-2 zep-transition-all":!l&&!a}),disabled:a,"data-testid":"zep-checkbox-input",...b}),u.jsx("label",{dangerouslySetInnerHTML:{__html:t?`${t}`:""},htmlFor:i,className:h("zep-text-primary-default zep-relative zep-pl-[36px]",[a?"zep-cursor-not-allowed zep-text-opacity-disabled":"zep-cursor-pointer"])}),u.jsx(G,{name:"check",className:h("zep-hidden peer-checked:zep-block","zep-text-neutral-dark-contrast","zep-pointer-events-none","zep-w-1.5","zep-h-1.5","zep-z-10","zep-absolute","zep-top-[-0.1px]","zep-left-[-0.1px]",{"zep-bg-transparent":!l&&!a,"zep-border-opacity-disabled zep-bg-opacity-disabled":a,"zep-bg-error":l})})]})),ee=m.forwardRef(({id:i,name:d,value:c=i,required:a=!1,disabled:l=!1,error:t=!1,label:g,tabIndex:f=0,onChange:o,...b},z)=>u.jsxs("span",{className:h("zep-inline-flex","zep-flex-row","zep-flex-wrap","zep-items-center","zep-justify-start","zep-relative",{"[&>input]:hover:zep-border-primary-hover [&>span]:hover:zep-bg-primary-hover [&>input]:hover:zep-border-2 [&>span]:hover:zep-bg-2":!l&&!t},{"zep-cursor-not-allowed zep-opacity-disabled":l}),"data-testid":"zep-radio",children:[u.jsx("input",{id:i,ref:z,value:c,name:d,type:"radio",tabIndex:f,required:a,onChange:l?void 0:o,className:h(_,"sr-only","zep-peer","zep-transition-all","zep-absolute","zep-border-1","zep-appearance-none","focus-visible:zep-ring-offset-1","zep-w-1.5","zep-h-1.5","zep-rounded-full",{"zep-border-primary-default":!t},{"zep-border-2":t},{"checked:zep-error zep-border-error":t},{"zep-border-error":t}),disabled:l,"data-testid":"zep-radio-input",...b}),u.jsx("label",{htmlFor:i,className:h("zep-relative zep-z-20 zep-pl-[36px] zep-text-primary-default",[{"zep-cursor-pointer":!l}]),children:g}),u.jsx("span",{className:h("zep-hidden peer-checked:zep-block","zep-absolute","zep-z-10","zep-rounded-full","zep-border-greyscale-0",{"zep-left-[1px] zep-top-[1px] zep-h-[22px] zep-w-[22px] zep-border-[6px]":!t},{"zep-left-0.125 zep-top-0.125 zep-h-[20px] zep-w-[20px] zep-border-[5px]":t},[t?"zep-bg-error":"zep-bg-primary-default"]),"data-testid":"zep-radio-checked"})]})),re=()=>{const[i,d]=m.useState({width:window.innerWidth,height:window.innerHeight});return m.useEffect(()=>{const c=()=>{d({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}},[]),i},N=({children:i,label:d,className:c})=>r.jsxDEV("div",{className:w("zep-flex zep-flex-col zep-gap-1.5",c),children:[r.jsxDEV("p",{className:"zep-typography-headlineMD-fluid-cqi",children:d},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/used-machine-filters/UsedMachineFilters.tsx",lineNumber:14,columnNumber:7},globalThis),r.jsxDEV("div",{className:"zep-flex zep-flex-col zep-gap-1.5",children:i},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/used-machine-filters/UsedMachineFilters.tsx",lineNumber:15,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/used-machine-pattern/used-machine-filters/UsedMachineFilters.tsx",lineNumber:13,columnNumber:5},globalThis),C=({locale:i,filters:d,powerOptions:{min:c,max:a,step:l}={min:0,max:100,step:1},setFilters:t,className:g})=>{const[f,o]=m.useState(d),{power:b,fuel:z,rating:F,category:x,type:M,sort:k}=f,s=m.useMemo(()=>K[i],[i]),[D,E]=m.useState(!1),{width:T}=re(),O=()=>{o({category:x,power:{min:c,max:a},type:[],rating:[],fuel:[],sort:void 0})},V=(e,n)=>{let p=e;return p.includes(n)?p=p.filter(B=>B!==n):p=[...p,n],p},R=()=>{o(d),E(!1)},q=()=>{E(!0)},L=e=>{o(()=>({category:e,power:{min:c,max:a},type:[],rating:[],fuel:[],sort:void 0}))},I=e=>{o(n=>({...n,power:e}))},P=e=>{const n=V(z,e);o(p=>({...p,fuel:n}))},Z=e=>{const n=V(F,e);o(p=>({...p,rating:n}))},A=e=>{const n=V(M,e);o(p=>({...p,type:n}))},H=e=>{o(n=>({...n,sort:e}))},S=()=>{t({category:x,power:b,fuel:z,sort:k,type:M,rating:F}),T<1024&&E(!1)};return m.useEffect(()=>{T>=1024&&S()},[f,T]),r.jsxDEV("div",{className:w("zep-relative md:zep-static md:zep-w-[25%] md:zep-max-w-[500px]",g),"data-testid":"zep-used-machine-filters",children:[r.jsxDEV(j,{variant:y.SecondaryZps,iconPosition:"right",onClick:q,className:"zep-block md:zep-hidden !zep-w-fit sm:!zep-w-[122px] zep-py-0.625 [&svg]:zep-w-0.75",icon:"tune",children:s.filter},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/used-machine-filters/UsedMachineFilters.tsx",lineNumber:110,columnNumber:7},globalThis),r.jsxDEV("div",{className:w("md:zep-block md:zep-h-auto md:zep-bg-transparent md:zep-static zep-pb-[0]",{"zep-hidden":!D,"zep-fixed zep-bg-greyscale-0 zep-z-[1000] zep-flex zep-flex-col zep-gap-2 zep-h-screen zep-top-[0] zep-left-[0] zep-right-[0] zep-overflow-y-scroll zep-pb-[208px]":D}),children:[r.jsxDEV("div",{className:"md:zep-hidden zep-flex zep-flex-row zep-justify-between zep-pt-1 zep-px-1 md:zep-p-[0]",children:[r.jsxDEV(j,{variant:y.SecondaryZps,className:"!zep-w-fit sm:!zep-w-fit",icon:"arrow-left",onClick:R},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/used-machine-filters/UsedMachineFilters.tsx",lineNumber:126,columnNumber:11},globalThis),r.jsxDEV(j,{variant:y.Tertiary,className:"!zep-w-fit sm:!zep-w-fit",onClick:O,children:s.resetFilters},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/used-machine-filters/UsedMachineFilters.tsx",lineNumber:127,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/used-machine-pattern/used-machine-filters/UsedMachineFilters.tsx",lineNumber:125,columnNumber:9},globalThis),r.jsxDEV("div",{className:"zep-flex zep-px-1 sm:zep-px-2 md:zep-p-[0] zep-flex-col md:zep-gap-4 zep-gap-2 zep-text-primary-default zep-w-full",children:[r.jsxDEV(N,{label:s.category,children:Object.values(v).map(e=>r.jsxDEV(W,{className:w("zep-self-start","zep-text-primary-default",{"zep-text-primary-active zep-link-filter-active":x===e}),iconPlacement:"before",label:s[e],onClick:()=>L(e)},e,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/used-machine-filters/UsedMachineFilters.tsx",lineNumber:132,columnNumber:15},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/used-machine-filters/UsedMachineFilters.tsx",lineNumber:130,columnNumber:11},globalThis),r.jsxDEV(N,{label:s.sort,className:"md:zep-hidden zep-py-2 zep-border-y-1 zep-border-y-greyscale-400",children:Object.values(Y).map(e=>r.jsxDEV(ee,{id:e,name:e,label:s[e],checked:k===e,onChange:()=>H(e)},e,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/used-machine-filters/UsedMachineFilters.tsx",lineNumber:143,columnNumber:15},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/used-machine-filters/UsedMachineFilters.tsx",lineNumber:141,columnNumber:11},globalThis),x!==v.ACCESSORY&&r.jsxDEV(r.Fragment,{children:[r.jsxDEV(N,{label:s.fuel,children:Object.values(J).map(e=>r.jsxDEV(U,{className:"zep-mb-[0]",id:e,checked:z.includes(e),onChange:()=>P(e),label:s[e]},e,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/used-machine-filters/UsedMachineFilters.tsx",lineNumber:157,columnNumber:19},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/used-machine-filters/UsedMachineFilters.tsx",lineNumber:155,columnNumber:15},globalThis),r.jsxDEV(N,{label:s.power,children:r.jsxDEV($,{onChange:I,label:x===v.GEN_SET?s.powerInKVA:s.powerInKW,max:a,min:c,value:b,step:l},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/used-machine-filters/UsedMachineFilters.tsx",lineNumber:168,columnNumber:17},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/used-machine-filters/UsedMachineFilters.tsx",lineNumber:167,columnNumber:15},globalThis),x===v.GEN_SET&&r.jsxDEV(N,{label:s.rating,children:Object.values(Q).map(e=>r.jsxDEV(U,{className:"zep-mb-[0]",id:e,checked:F.includes(e),onChange:()=>Z(e),label:s[e]},e,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/used-machine-filters/UsedMachineFilters.tsx",lineNumber:180,columnNumber:21},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/used-machine-filters/UsedMachineFilters.tsx",lineNumber:178,columnNumber:17},globalThis),r.jsxDEV(N,{label:s.type,children:Object.values(X).map(e=>r.jsxDEV(U,{className:"zep-mb-[0]",id:e,checked:M.includes(e),onChange:()=>A(e),label:s[e]},e,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/used-machine-filters/UsedMachineFilters.tsx",lineNumber:193,columnNumber:19},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/used-machine-filters/UsedMachineFilters.tsx",lineNumber:191,columnNumber:15},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/used-machine-pattern/used-machine-filters/UsedMachineFilters.tsx",lineNumber:154,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/used-machine-pattern/used-machine-filters/UsedMachineFilters.tsx",lineNumber:129,columnNumber:9},globalThis),r.jsxDEV("div",{className:"md:zep-hidden zep-z-[1020] zep-fixed zep-bottom-[0] zep-left-[0] zep-right-[0] zep-bg-greyscale-0 zep-shadow-[0_0_4px_rgba(0,0,0,0.24)] zep-p-1",children:r.jsxDEV(j,{variant:y.Primary,className:"sm:zep-w-full",onClick:S,children:s.apply},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/used-machine-filters/UsedMachineFilters.tsx",lineNumber:207,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/used-machine-filters/UsedMachineFilters.tsx",lineNumber:206,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/used-machine-pattern/used-machine-filters/UsedMachineFilters.tsx",lineNumber:119,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/used-machine-pattern/used-machine-filters/UsedMachineFilters.tsx",lineNumber:109,columnNumber:5},globalThis)};try{C.displayName="UsedMachineFilters",C.__docgenInfo={description:"",displayName:"UsedMachineFilters",props:{setFilters:{defaultValue:null,description:"",name:"setFilters",required:!0,type:{name:"Dispatch<SetStateAction<UsedMachineFiltersType>>"}},locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"enum",value:[{value:'"en"'},{value:'"de"'},{value:'"de_au"'}]}},filters:{defaultValue:null,description:"",name:"filters",required:!0,type:{name:"UsedMachineFiltersType"}},powerOptions:{defaultValue:null,description:"",name:"powerOptions",required:!1,type:{name:'Omit<SliderProps, "value" | "label">'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{C as U};
