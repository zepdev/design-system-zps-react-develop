import{j as a}from"./clsx-24df0f47.js";import{r as u}from"./index-b1e7e93e.js";import{E as j}from"./index.es2-ef205e1c.js";import{i as d}from"./index.es18-4e559a5f.js";import{G as z,L as V}from"./global-variants-893e06e6.js";import{u as w,a as v,M as q}from"./used-machine-locales-5665be38.js";import{G as M}from"./Gallery-67535ef0.js";import{U as E,C as I}from"./UsedMachineDescription-f58f575f.js";import{B as D,Z as T}from"./ZpsButton-b3b3ee89.js";import{L as k}from"./Layout-ecccc0bb.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-6f6342d7.js";import"./index.es31-95f1013f.js";import"./index.es13-373f5050.js";import"./index.es32-fbb642fb.js";import"./index.es24-551679ca.js";import"./index.es35-79e31a69.js";import"./index.es17-40e95622.js";import"./index-1a504dbd.js";import"./getUrlWithTrailingSlash-1f1feb13.js";import"./tw-merge-1166cefb.js";const f=({headline:r,children:o})=>a.jsxDEV("div",{className:"zep-flex zep-flex-col md:zep-flex-row zep-gap-1.5 sm:zep-gap-2.5 md:zep-gap-1.5 xl:zep-gap-5",children:[a.jsxDEV("h2",{className:"xl:zep-w-[578px] md:zep-w-[434px] zep-hyphens-auto zep-break-normal zep-w-full zep-typography-headlineMD-fluid-cqi zep-text-primary-default",children:r},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-info/UsedMachineInfo.tsx",lineNumber:13,columnNumber:7},globalThis),a.jsxDEV("div",{className:"zep-flex-grow",children:o},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-info/UsedMachineInfo.tsx",lineNumber:14,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/used-machine-info/UsedMachineInfo.tsx",lineNumber:12,columnNumber:5},globalThis),s=({items:r,onOfferClick:o,description:c,...l})=>{const n=u.useMemo(()=>w[l.locale],[l.locale]),b=u.useMemo(()=>c.split(";"),[c]),y=["generalInformation","productParameter","location"],m={generalInformation:["manufacturer","serialNumber","gNumber","status","availability","year","operatingHours","certification"],productParameter:["fuel","power","electricalPower","frequencyRange","frequency","rating","speed","voltage","weight"],location:["country","city","postalCode"]},N=(e,i)=>{switch(i){case"power":return e?`${e}kW`:"-";case"electricalPower":return e?`${e}kVA`:"-";case"operatingHours":return e?`${e}h`:"-";case"frequency":return e?`${e||"-"}hz`:"-";case"speed":return e?`${e}u/min`:"-";case"voltage":return e?`${e}V`:"-";case"fuel":case"category":case"type":case"rating":return e?n[e]:"-";default:return e||"-"}};return a.jsxDEV(k,{className:"lg:zep-mt-5 zep-mt-2.5 zep-flex zep-flex-col xl:zep-gap-7.5 md:zep-gap-5 sm:zep-gap-4 zep-gap-3.5",testId:"zep-used-machine-info",children:[a.jsxDEV("div",{className:"zep-flex md:zep-flex-row zep-flex-col xl:zep-gap-5 sm:zep-gap-2.5 zep-gap-1.5",children:[a.jsxDEV("div",{className:"xl:zep-w-[52%] md:zep-w-[56%] zep-w-full md:zep-aspect-[4/3]",children:a.jsxDEV(M,{className:"md:zep-h-full",items:r,variant:z.Cat},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-info/UsedMachineInfo.tsx",lineNumber:83,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-info/UsedMachineInfo.tsx",lineNumber:82,columnNumber:9},globalThis),a.jsxDEV("div",{className:"zep-flex-grow zep-h-fit zep-flex zep-flex-col md:zep-gap-2.5 zep-gap-1",children:[a.jsxDEV(E,{boldLabel:!0,...l},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-info/UsedMachineInfo.tsx",lineNumber:86,columnNumber:11},globalThis),a.jsxDEV("div",{className:"zep-flex zep-gap-1 sm:zep-flex-row zep-flex-col",children:a.jsxDEV(D,{onClick:o,variant:T.Primary,children:n.requestOffer},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-info/UsedMachineInfo.tsx",lineNumber:94,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-info/UsedMachineInfo.tsx",lineNumber:87,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/used-machine-info/UsedMachineInfo.tsx",lineNumber:85,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/used-machine-info/UsedMachineInfo.tsx",lineNumber:81,columnNumber:7},globalThis),a.jsxDEV(f,{headline:n.description,children:a.jsxDEV(d,{type:"bullet",children:b.map((e,i)=>a.jsxDEV(d.Item,{className:"zep-text-primary-default",children:e},i,!1,{fileName:"/home/circleci/project/src/components/used-machine-info/UsedMachineInfo.tsx",lineNumber:106,columnNumber:13},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-info/UsedMachineInfo.tsx",lineNumber:104,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-info/UsedMachineInfo.tsx",lineNumber:103,columnNumber:7},globalThis),a.jsxDEV(f,{headline:n.productSpecification,children:a.jsxDEV(j,{className:"zep-text-primary-default",items:y.map(e=>({title:n[e],content:a.jsxDEV("table",{className:"zep-w-full",children:m[e].map((i,p)=>a.jsxDEV(I,{hideBorder:p===m[e].length-1,boldLabel:!0,label:n[i],value:N(l[i],i)},p,!1,{fileName:"/home/circleci/project/src/components/used-machine-info/UsedMachineInfo.tsx",lineNumber:118,columnNumber:19},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-info/UsedMachineInfo.tsx",lineNumber:116,columnNumber:15},globalThis)}))},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-info/UsedMachineInfo.tsx",lineNumber:111,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/used-machine-info/UsedMachineInfo.tsx",lineNumber:110,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/used-machine-info/UsedMachineInfo.tsx",lineNumber:80,columnNumber:5},globalThis)};try{s.displayName="UsedMachineInfo",s.__docgenInfo={description:"",displayName:"UsedMachineInfo",props:{onExposeClick:{defaultValue:null,description:"",name:"onExposeClick",required:!0,type:{name:"(ev: MouseEvent<HTMLElement, MouseEvent>) => void"}},onOfferClick:{defaultValue:null,description:"",name:"onOfferClick",required:!0,type:{name:"(ev: MouseEvent<HTMLElement, MouseEvent>) => void"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"GalleryImage[]"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},boldLabel:{defaultValue:null,description:"",name:"boldLabel",required:!1,type:{name:"boolean"}},availability:{defaultValue:null,description:"",name:"availability",required:!1,type:{name:"string"}},category:{defaultValue:null,description:"",name:"category",required:!0,type:{name:"enum",value:[{value:'"genset"'},{value:'"engine"'},{value:'"accessory"'}]}},certification:{defaultValue:null,description:"",name:"certification",required:!1,type:{name:"string"}},city:{defaultValue:null,description:"",name:"city",required:!0,type:{name:"string"}},country:{defaultValue:null,description:"",name:"country",required:!0,type:{name:"string"}},frequency:{defaultValue:null,description:"",name:"frequency",required:!1,type:{name:"string"}},frequencyRange:{defaultValue:null,description:"",name:"frequencyRange",required:!1,type:{name:"string"}},fuel:{defaultValue:null,description:"",name:"fuel",required:!1,type:{name:"enum",value:[{value:'"diesel"'},{value:'"gas"'},{value:'"dual_fuel"'}]}},gNumber:{defaultValue:null,description:"",name:"gNumber",required:!1,type:{name:"string"}},isMarine:{defaultValue:null,description:"",name:"isMarine",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"enum",value:[{value:'"en"'},{value:'"de"'},{value:'"de-AT"'}]}},manufacturer:{defaultValue:null,description:"",name:"manufacturer",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},operatingHours:{defaultValue:null,description:"",name:"operatingHours",required:!1,type:{name:"number"}},postalCode:{defaultValue:null,description:"",name:"postalCode",required:!0,type:{name:"number"}},power:{defaultValue:null,description:"",name:"power",required:!1,type:{name:"number"}},rating:{defaultValue:null,description:"",name:"rating",required:!1,type:{name:"enum",value:[{value:'"standby"'},{value:'"continuous"'},{value:'"prime"'}]}},serialNumber:{defaultValue:null,description:"",name:"serialNumber",required:!1,type:{name:"string"}},speed:{defaultValue:null,description:"",name:"speed",required:!1,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"string"}},voltage:{defaultValue:null,description:"",name:"voltage",required:!1,type:{name:"string"}},weight:{defaultValue:null,description:"",name:"weight",required:!1,type:{name:"string"}},year:{defaultValue:null,description:"",name:"year",required:!0,type:{name:"number"}},brand:{defaultValue:null,description:"",name:"brand",required:!0,type:{name:"string"}}}}}catch{}const ae={title:"Patterns/UsedMachineInfo",component:s,tags:["autodocs"],argTypes:{}},C=[{src:"https://images.unsplash.com/photo-1458571037713-913d8b481dc6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1920",sizes:"(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",alt:"Alt 1",thumbnail:"https://images.unsplash.com/photo-1458571037713-913d8b481dc6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1920"},{src:"https://global.discourse-cdn.com/flex020/uploads/glideapps/original/2X/4/4936e0f28f79c8a2aa95582741091356d0ed61d8.jpeg",sizes:"(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",alt:"Alt 2",thumbnail:"https://global.discourse-cdn.com/flex020/uploads/glideapps/original/2X/4/4936e0f28f79c8a2aa95582741091356d0ed61d8.jpeg"},{src:"https://img.freepik.com/premium-photo/photo-random-nature-hd-wallpaper-8k4k_915071-67156.jpg",sizes:"(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",alt:"Alt 3",thumbnail:"https://img.freepik.com/premium-photo/photo-random-nature-hd-wallpaper-8k4k_915071-67156.jpg"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/800px-Altja_j%C3%B5gi_Lahemaal.jpg",sizes:"(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",alt:"Alt 4",thumbnail:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/800px-Altja_j%C3%B5gi_Lahemaal.jpg"},{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0zWifWgK-Dbh0IuyJT-LHUnBlgz1j4LQ4Jg&s",sizes:"(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",alt:"Alt 5",thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0zWifWgK-Dbh0IuyJT-LHUnBlgz1j4LQ4Jg&s"},{src:"https://w0.peakpx.com/wallpaper/935/576/HD-wallpaper-moorglade-world-space-liquitech-random-nature-abstract.jpg",sizes:"(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",alt:"Alt 6",thumbnail:"https://w0.peakpx.com/wallpaper/935/576/HD-wallpaper-moorglade-world-space-liquitech-random-nature-abstract.jpg"},{src:"https://img.freepik.com/premium-photo/random-nature-hd-wallpaper-8k4k_1272857-172676.jpg",sizes:"(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px",alt:"Alt 7",thumbnail:"https://img.freepik.com/premium-photo/random-nature-hd-wallpaper-8k4k_1272857-172676.jpg"}],t={args:{items:C,power:260,rating:v.STAND_BY,operatingHours:50,city:"Bremen",country:"Deutschland",postalCode:28217,category:q.GEN_SET,locale:V.DE,year:2018,name:"C7.1",brand:"cat",isMarine:!0,description:"G005893;CAT C7.1;SN: G9R08502;Arrg: 526-7.210;2018;0 V;0 kVA ;0;2.200 rpm;0 Hz;10 hours;condition: pre-owned"}};var h,g,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    items: galleryImages,
    power: 260,
    rating: MachineRating.STAND_BY,
    operatingHours: 50,
    city: 'Bremen',
    country: 'Deutschland',
    postalCode: 28217,
    category: MachineCategory.GEN_SET,
    locale: LocaleVariants.DE,
    year: 2018,
    name: 'C7.1',
    brand: 'cat',
    isMarine: true,
    description: 'G005893;CAT C7.1;SN: G9R08502;Arrg: 526-7.210;2018;0 V;0 kVA ;0;2.200 rpm;0 Hz;10 hours;condition: pre-owned'
  } as UsedMachineInfoProps
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const ie=["Default"];export{t as Default,ie as __namedExportsOrder,ae as default};
