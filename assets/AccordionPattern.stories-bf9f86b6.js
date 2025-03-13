import{G as o}from"./global-variants-893e06e6.js";import{j as a}from"./jsx-dev-runtime-8ab8c10c.js";import{E as I}from"./index.es2-93a43d22.js";import{p as O,r as T}from"./index.es25-e2e365ff.js";import{c as f}from"./clsx-0839fdbe.js";import{t as B}from"./commonCSS-cc68a568.js";import{g as V}from"./getUrlWithoutTrailingSlash-e7815512.js";import{H as Z}from"./HeaderLongComponent-65b02c25.js";import{H as _}from"./HeaderShortComponent-08eced3a.js";import{R as h}from"./RichText-94056379.js";import{B as s}from"./ZpsButton-237503bb.js";import{L}from"./Layout-da978b47.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-6f6342d7.js";import"./index.es31-95f1013f.js";import"./index.es13-cfbbaaf2.js";import"./index.es32-fbb642fb.js";import"./index.es74-f825366a.js";import"./index.es24-551679ca.js";import"./index.es35-79e31a69.js";import"./index.es36-e8d10e84.js";import"./index.es4-8a3ee888.js";import"./index.es16-0bcfc29a.js";import"./index-ff2c9236.js";import"./moving-forward-arrow-a1f6b1da.js";import"./index.es18-4e559a5f.js";import"./tw-merge-1166cefb.js";const g=({topDescription:r,bottomDescription:t,contents:v,headline:c,variant:n=o.Zps,headerPosition:u="top",buttonVariant:b,buttonOnClick:q,buttonIcon:x,buttonText:i,id:S,buttonUrl:m,...N})=>a.jsxDEV(L,{id:S,className:f("zep-flex",{"zep-flex-col zep-items-start zep-gap-2 sm:zep-gap-2.5 md:zep-gap-3 xl:zep-gap-4":u==="top","md:zep-flex-row zep-flex-col zep-items-start zep-gap-2 sm:zep-gap-2.5 md:zep-gap-1.5 xl:zep-gap-5":u==="left"}),children:[c&&u==="top"&&a.jsxDEV(Z,{variant:n,headline:c,...N},void 0,!1,{fileName:"/home/circleci/project/src/components/accrodion-pattern/AccordionPattern.tsx",lineNumber:40,columnNumber:9},globalThis),c&&u==="left"&&a.jsxDEV(_,{variant:n,headline:c,...N,className:"zep-w-full"},void 0,!1,{fileName:"/home/circleci/project/src/components/accrodion-pattern/AccordionPattern.tsx",lineNumber:43,columnNumber:9},globalThis),a.jsxDEV("div",{className:"zep-relative zep-w-full","data-testid":"zep-accordion-pattern",children:[r&&a.jsxDEV("div",{className:"zep-block zep-pb-1.5 md:zep-pb-2","data-testid":"accordion-pattern-topDescription",children:a.jsxDEV(h,{content:r,variant:n},void 0,!1,{fileName:"/home/circleci/project/src/components/accrodion-pattern/AccordionPattern.tsx",lineNumber:49,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/accrodion-pattern/AccordionPattern.tsx",lineNumber:48,columnNumber:11},globalThis),a.jsxDEV("div",{"data-testid":"accordion-pattern-titleContent",children:a.jsxDEV(I,{className:B[n],items:v==null?void 0:v.map(e=>{var k,w,y,z;return{title:e==null?void 0:e.title,content:a.jsxDEV("div",{className:"zep-relative zep-flex zep-flex-col zep-items-start zep-justify-start zep-gap-2.5",children:[(e==null?void 0:e.accordionContent)&&a.jsxDEV(h,{content:e==null?void 0:e.accordionContent,variant:n},void 0,!1,{fileName:"/home/circleci/project/src/components/accrodion-pattern/AccordionPattern.tsx",lineNumber:60,columnNumber:46},globalThis),(e==null?void 0:e.table)&&a.jsxDEV("div",{className:"zep-flex zep-w-full zep-flex-col zep-gap-1.5",children:[a.jsxDEV(O,{variant:n===o.Zps?T.Zps:T.Cat,...e==null?void 0:e.table,columns:((k=e==null?void 0:e.table)==null?void 0:k.columns)||[],dataSource:((w=e==null?void 0:e.table)==null?void 0:w.dataSource)||[]},void 0,!1,{fileName:"/home/circleci/project/src/components/accrodion-pattern/AccordionPattern.tsx",lineNumber:63,columnNumber:23},globalThis),((y=e==null?void 0:e.table)==null?void 0:y.message)&&a.jsxDEV("span",{className:f("zep-typography-supportText",`${n===o.Zps?"zep-text-indigo-500":"zep-text-typography-dark-100"}`),children:(z=e==null?void 0:e.table)==null?void 0:z.message},void 0,!1,{fileName:"/home/circleci/project/src/components/accrodion-pattern/AccordionPattern.tsx",lineNumber:70,columnNumber:25},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/accrodion-pattern/AccordionPattern.tsx",lineNumber:62,columnNumber:21},globalThis),(e==null?void 0:e.message)&&a.jsxDEV("span",{className:f("zep-typography-bodyText",`${n===o.Zps?"zep-text-indigo-500":"zep-text-typography-dark-100"}`),children:e==null?void 0:e.message},void 0,!1,{fileName:"/home/circleci/project/src/components/accrodion-pattern/AccordionPattern.tsx",lineNumber:82,columnNumber:21},globalThis),(e==null?void 0:e.buttonText)&&!(e!=null&&e.buttonUrl)&&a.jsxDEV(s,{icon:e==null?void 0:e.buttonIcon,onClick:e==null?void 0:e.buttonOnClick,variant:e==null?void 0:e.buttonVariant,children:e==null?void 0:e.buttonText},void 0,!1,{fileName:"/home/circleci/project/src/components/accrodion-pattern/AccordionPattern.tsx",lineNumber:92,columnNumber:21},globalThis),(e==null?void 0:e.buttonText)&&(e==null?void 0:e.buttonUrl)&&a.jsxDEV("a",{href:V(e.buttonUrl),children:a.jsxDEV(s,{icon:e==null?void 0:e.buttonIcon,variant:e==null?void 0:e.buttonVariant,children:e==null?void 0:e.buttonText},void 0,!1,{fileName:"/home/circleci/project/src/components/accrodion-pattern/AccordionPattern.tsx",lineNumber:98,columnNumber:23},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/accrodion-pattern/AccordionPattern.tsx",lineNumber:97,columnNumber:21},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/accrodion-pattern/AccordionPattern.tsx",lineNumber:59,columnNumber:17},globalThis)}})},void 0,!1,{fileName:"/home/circleci/project/src/components/accrodion-pattern/AccordionPattern.tsx",lineNumber:54,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/accrodion-pattern/AccordionPattern.tsx",lineNumber:53,columnNumber:9},globalThis),t&&a.jsxDEV("div",{className:"zep-block zep-pt-1.5 md:zep-pt-2","data-testid":"accordion-pattern-bottomDescription",children:a.jsxDEV(h,{content:t,variant:n},void 0,!1,{fileName:"/home/circleci/project/src/components/accrodion-pattern/AccordionPattern.tsx",lineNumber:111,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/accrodion-pattern/AccordionPattern.tsx",lineNumber:110,columnNumber:11},globalThis),i&&!m&&a.jsxDEV(s,{className:"md:zep-mt-2.5 sm:zep-mt-2 zep-mt-1.5",onClick:q,variant:b,icon:x,children:i},void 0,!1,{fileName:"/home/circleci/project/src/components/accrodion-pattern/AccordionPattern.tsx",lineNumber:115,columnNumber:11},globalThis),i&&m&&a.jsxDEV("a",{href:V(m),children:a.jsxDEV(s,{className:"md:zep-mt-2.5 sm:zep-mt-2 zep-mt-1.5",variant:b,icon:x,children:i},void 0,!1,{fileName:"/home/circleci/project/src/components/accrodion-pattern/AccordionPattern.tsx",lineNumber:126,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/accrodion-pattern/AccordionPattern.tsx",lineNumber:125,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/accrodion-pattern/AccordionPattern.tsx",lineNumber:45,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/accrodion-pattern/AccordionPattern.tsx",lineNumber:31,columnNumber:5},globalThis);try{g.displayName="AccordionPattern",g.__docgenInfo={description:"",displayName:"AccordionPattern",props:{topDescription:{defaultValue:null,description:"",name:"topDescription",required:!1,type:{name:"BlocksContent"}},bottomDescription:{defaultValue:null,description:"",name:"bottomDescription",required:!1,type:{name:"BlocksContent"}},contents:{defaultValue:null,description:"",name:"contents",required:!0,type:{name:"AccordionContent[]"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},headerPosition:{defaultValue:{value:"top"},description:"",name:"headerPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"top"'}]}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!1,type:{name:"string"}},buttonOnClick:{defaultValue:null,description:"",name:"buttonOnClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},buttonUrl:{defaultValue:null,description:"",name:"buttonUrl",required:!1,type:{name:"string"}},buttonVariant:{defaultValue:null,description:"",name:"buttonVariant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"secondary-cat"'},{value:'"secondary-zps"'},{value:'"tertiary"'}]}},buttonIcon:{defaultValue:null,description:"",name:"buttonIcon",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"email"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"location"'},{value:'"list"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"table"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"time"'},{value:'"copy"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"search"'},{value:'"delete-circle"'},{value:'"alert"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"add-circle"'},{value:'"marine-ship"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary-button"'},{value:'"secondary-button"'},{value:'"link"'},{value:'"none"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"email"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"location"'},{value:'"list"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"table"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"time"'},{value:'"copy"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"search"'},{value:'"delete-circle"'},{value:'"alert"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"add-circle"'},{value:'"marine-ship"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const F=[{key:"1",title:"",dataIndex:"type"},{key:"aec",title:"Active Equipment Connect",dataIndex:"aec"},{key:"foc",title:"Fleet Operations Center",dataIndex:"foc"},{key:"catVL",title:"CAT VisionLink",dataIndex:"catVL"}],H=Array.from({length:10}).map((r,t)=>({id:t,type:"Standard Funktionen",aec:"Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement",foc:"Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement",catVL:"Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement"})),l=[{type:"paragraph",children:[{text:"Unsere Produktkomponenten von Optimarin umfassen leistungsstarke UV-Systeme, effiziente Filter, robuste Rückspülpumpen, präzise Druckregelventile und bedienfreundliche Control Panel. Innovative Technologien gewährleisten eine effektive Entfernung von Organismen und Partikeln, hohe Durchflussraten und eine zuverlässige Leistung bei minimalem Wartungsaufwand. Damit sorgen unsere Ballastwasserbehandlungssysteme für eine nachhaltige und effiziente Ballastwasserbehandlung, die den höchsten Umweltstandards entspricht.",type:"text"}]}],ge={title:"Patterns/AccordionPattern",component:g,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:[...Object.keys(o),"default"]}}}},d={args:{topDescription:l,bottomDescription:l,contents:[{title:"Title one",accordionContent:l},{title:"Title two",accordionContent:l},{title:"Title three",accordionContent:l},{title:"Title four",accordionContent:l},{title:"Title five",accordionContent:l}],variant:o.Zps,buttonText:"Kontaktieren Sie unsere Experten",buttonOnClick:()=>console.log("click")}},p={args:{topDescription:l,bottomDescription:l,contents:[{title:"Title one",accordionContent:l},{title:"Tiwtle two",table:{columns:F,dataSource:H}}],variant:o.Zps,buttonText:"Kontaktieren Sie unsere Experten",buttonOnClick:()=>console.log("click")}};var C,j,D;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    topDescription: mockContent,
    bottomDescription: mockContent,
    contents: [{
      title: 'Title one',
      accordionContent: mockContent
    }, {
      title: 'Title two',
      accordionContent: mockContent
    }, {
      title: 'Title three',
      accordionContent: mockContent
    }, {
      title: 'Title four',
      accordionContent: mockContent
    }, {
      title: 'Title five',
      accordionContent: mockContent
    }],
    variant: GlobalVariants.Zps,
    buttonText: 'Kontaktieren Sie unsere Experten',
    buttonOnClick: () => console.log('click')
  } as AccordionPatternProps
}`,...(D=(j=d.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var E,P,A;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    topDescription: mockContent,
    bottomDescription: mockContent,
    contents: [{
      title: 'Title one',
      accordionContent: mockContent
    }, {
      title: 'Tiwtle two',
      table: {
        columns: columns,
        dataSource: data
      }
    }],
    variant: GlobalVariants.Zps,
    buttonText: 'Kontaktieren Sie unsere Experten',
    buttonOnClick: () => console.log('click')
  } as AccordionPatternProps
}`,...(A=(P=p.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};const be=["Default","WithTable"];export{d as Default,p as WithTable,be as __namedExportsOrder,ge as default};
