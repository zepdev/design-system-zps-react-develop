import{j as s}from"./jsx-dev-runtime-8ab8c10c.js";import{r as g}from"./index-b1e7e93e.js";import{L as A}from"./Layout-565dd17b.js";import{u as G,M as n,a as l,b as o,c as p,d as z}from"./used-machine-locales-ee9b1693.js";import{U as w}from"./UsedMachineCard-62e6f7a0.js";import{U as N}from"./UsedMachineFilters-b7c87ed8.js";import{B as M,Z as E}from"./ZpsButton-5a48c68b.js";import{L as i}from"./global-variants-893e06e6.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-0839fdbe.js";import"./UsedMachineDescription-2dc70d3e.js";import"./getUrlWithTrailingSlash-6cb3eda2.js";import"./jsx-runtime-6f6342d7.js";import"./index.es31-95f1013f.js";import"./index.es13-373f5050.js";import"./index.es32-fbb642fb.js";import"./index.es16-315dd9a2.js";import"./Slider-667a003e.js";import"./index.es24-551679ca.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";const y=({setFilters:e,locale:c,filters:r,powerOptions:m,cards:a,total:t,currentTotal:u,setCurrentTotal:C})=>{const d=g.useMemo(()=>G[c],[c]),D=()=>{C(b=>b+10)};return s.jsxDEV(A,{testId:"zep-used-machine-pattern",className:"md:zep-flex xl:zep-gap-5 md:zep-gap-3 zep-py-3 sm:zep-py-4 md:zep-py-5",wrapperClassname:"zep-bg-greyscale-200",children:[s.jsxDEV(N,{className:"zep-hidden md:zep-flex",setFilters:e,locale:c,filters:r,powerOptions:m},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:36,columnNumber:7},globalThis),s.jsxDEV("div",{className:"zep-grow zep-flex zep-flex-col zep-gap-2",children:[s.jsxDEV("div",{className:"md:zep-hidden zep-flex zep-w-full zep-justify-between md:zep-items-end zep-items-center zep-text-primary-default",children:s.jsxDEV(N,{setFilters:e,locale:c,filters:r,powerOptions:m},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:48,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:44,columnNumber:9},globalThis),t>0?a.map((b,x)=>s.jsxDEV(w,{...b},x,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:65,columnNumber:11},globalThis)):s.jsxDEV("div",{className:"zep-flex zep-flex-col zep-gap-3",children:[s.jsxDEV("div",{className:"zep-text-primary-default zep-flex zep-flex-col zep-gap-2.5",children:[s.jsxDEV("h3",{className:"zep-typography-headlineLG-fluid-cqi",children:d.zeroResultsFoundTitle},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:69,columnNumber:15},globalThis),s.jsxDEV("p",{className:"zep-typography-bodyText",children:d.zeroResultsFoundDescription},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:70,columnNumber:15},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:68,columnNumber:13},globalThis),s.jsxDEV(M,{className:"sm:!zep-w-fit",variant:E.Primary,children:d.contactExperts},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:72,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:67,columnNumber:11},globalThis),u<t&&s.jsxDEV(M,{className:"sm:!zep-w-fit zep-self-center",variant:E.SecondaryZps,onClick:D,children:d.loadMore},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:77,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:43,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.tsx",lineNumber:31,columnNumber:5},globalThis)};try{y.displayName="UsedMachinePattern",y.__docgenInfo={description:"",displayName:"UsedMachinePattern",props:{cards:{defaultValue:null,description:"",name:"cards",required:!0,type:{name:"UsedMachineCardProps[]"}},total:{defaultValue:null,description:"",name:"total",required:!0,type:{name:"number"}},currentTotal:{defaultValue:null,description:"",name:"currentTotal",required:!0,type:{name:"number"}},setCurrentTotal:{defaultValue:null,description:"",name:"setCurrentTotal",required:!0,type:{name:"Dispatch<SetStateAction<number>>"}},setFilters:{defaultValue:null,description:"",name:"setFilters",required:!0,type:{name:"Dispatch<SetStateAction<UsedMachineFiltersType>>"}},locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"enum",value:[{value:'"en"'},{value:'"de"'},{value:'"de-AT"'}]}},filters:{defaultValue:null,description:"",name:"filters",required:!0,type:{name:"UsedMachineFiltersType"}},powerOptions:{defaultValue:null,description:"",name:"powerOptions",required:!1,type:{name:'Omit<SliderProps, "value" | "label">'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const B=[{isMarine:!0,category:n.GEN_SET,locale:i.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:l.STAND_BY,fuel:o.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:p.MOBILE,url:"",brand:"CAT"},{isMarine:!0,category:n.GEN_SET,locale:i.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:l.CONTINUOUS,fuel:o.GAS,power:2e3,name:"Gen Set Machine 2",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:p.STATIONARY,url:"",brand:"CAT"},{isMarine:!0,category:n.ENGINE,locale:i.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,fuel:o.DIESEL,power:2e3,name:"Engine Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",url:"",brand:"CAT"},{category:n.GEN_SET,locale:i.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:l.PRIME,fuel:o.DUAL_FUEL,power:3e3,name:"Gen Set Machine 3",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:p.MOBILE,url:"",brand:"CAT"},{isMarine:!0,category:n.GEN_SET,locale:i.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,fuel:o.DIESEL,power:4e3,rating:l.CONTINUOUS,name:"Gen Set Machine 4",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:p.STATIONARY,url:"",brand:"CAT"},{category:n.ACCESSORY,locale:i.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,name:"Accessory",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",url:"",brand:"CAT"},{isMarine:!0,category:n.GEN_SET,locale:i.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:l.STAND_BY,fuel:o.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:p.MOBILE,url:"",brand:"CAT"},{isMarine:!0,category:n.GEN_SET,locale:i.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:l.STAND_BY,fuel:o.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:p.MOBILE,url:"",brand:"CAT"},{isMarine:!0,category:n.GEN_SET,locale:i.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:l.STAND_BY,fuel:o.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:p.MOBILE,url:"",brand:"CAT"},{isMarine:!0,category:n.GEN_SET,locale:i.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:l.STAND_BY,fuel:o.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:p.MOBILE,url:"",brand:"CAT"},{isMarine:!0,category:n.GEN_SET,locale:i.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:l.STAND_BY,fuel:o.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:p.MOBILE,url:"",brand:"CAT"},{isMarine:!0,category:n.GEN_SET,locale:i.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:l.STAND_BY,fuel:o.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:p.MOBILE,url:"",brand:"CAT"},{isMarine:!0,category:n.GEN_SET,locale:i.DE,year:2020,city:"Berlin",country:"Deutschland",postalCode:28217,operatingHours:1e4,rating:l.STAND_BY,fuel:o.GAS,power:5e3,name:"Gen Set Machine 1",imageSrc:"https://s7d2.scene7.com/is/image/Caterpillar/CM20200316-95a5b-c7b61",type:p.MOBILE,url:"",brand:"CAT"}],U=(e,c)=>{let r=B.filter(({category:a})=>a===e.category);e.category!==n.ACCESSORY&&(e.rating&&e.rating.length>0&&(r=r.filter(({rating:a})=>{var t;return a&&((t=e.rating)==null?void 0:t.includes(a))})),e.fuel&&e.fuel.length>0&&(r=r.filter(({fuel:a})=>{var t;return a&&((t=e.fuel)==null?void 0:t.includes(a))})),e.type&&e.category===n.GEN_SET&&e.type.length>0&&(r=r.filter(({type:a})=>{var t;return a&&((t=e.type)==null?void 0:t.includes(a))})),e.power&&(r=r.filter(({power:a})=>a&&a>=e.power.min&&a<=e.power.max))),e.sort&&(e.sort===z.POWER_ASCENDING?r=r.sort(({power:a=0},{power:t=0})=>a-t):r=r.sort(({power:a=0},{power:t=0})=>t-a));const m=r.length;return r=r.slice(0,c),{cards:r,total:m}},ae={title:"Patterns/UsedMachinePattern",component:y,tags:["autodocs"],argTypes:{},decorators:[e=>{const[c,r]=g.useState({category:n.GEN_SET,power:{min:100,max:1e4},type:[],sort:void 0,rating:[],fuel:[]}),[m,a]=g.useState(10),{cards:t,total:u}=g.useMemo(()=>U(c,m),[c,m]);return s.jsxDEV(e,{cards:t,total:u,filters:c,setFilters:r,setCurrentTotal:a,currentTotal:m},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.stories.tsx",lineNumber:284,columnNumber:9},globalThis)}]},h={args:{locale:i.DE,powerOptions:{min:100,max:1e4,step:1}},render:(e,{filters:c,currentTotal:r,setFilters:m,cards:a,total:t,setCurrentTotal:u})=>s.jsxDEV(y,{setCurrentTotal:u,currentTotal:r,total:t,cards:a,powerOptions:e.powerOptions,setFilters:m,locale:e.locale,filters:c},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-pattern/UsedMachinePattern.stories.tsx",lineNumber:310,columnNumber:5},globalThis)};var f,S,T;h.parameters={...h.parameters,docs:{...(f=h.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    locale: LocaleVariants.DE,
    powerOptions: {
      min: 100,
      max: 10000,
      step: 1
    }
  } as unknown as UsedMachinePatternProps,
  render: (args, {
    filters,
    currentTotal,
    setFilters,
    cards,
    total,
    setCurrentTotal
  }) => <UsedMachinePattern setCurrentTotal={setCurrentTotal} currentTotal={currentTotal} total={total} cards={cards} powerOptions={args.powerOptions} setFilters={setFilters} locale={args.locale} filters={filters} />
}`,...(T=(S=h.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const re=["Default"];export{h as Default,re as __namedExportsOrder,ae as default};
