import{j as a}from"./jsx-dev-runtime-8ab8c10c.js";import{L as k}from"./Layout-565dd17b.js";import{G as v}from"./global-variants-893e06e6.js";import{p as V}from"./index.es25-7576d55a.js";import{H as x}from"./HeaderLongComponent-51192d71.js";import{R as T}from"./RichText-c9ca3574.js";import{B as P}from"./ZpsButton-960e22a4.js";import{m as B}from"./mocks-dd8b5ca4.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-0839fdbe.js";import"./jsx-runtime-6f6342d7.js";import"./index.es35-79e31a69.js";import"./index.es31-95f1013f.js";import"./index.es13-373f5050.js";import"./index.es4-97fd14ec.js";import"./index.es24-551679ca.js";import"./index.es16-fae182fa.js";import"./getUrlWithTrailingSlash-bc205b91.js";import"./index.es18-4e559a5f.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";const n=({variant:e=v.Zps,content:l,tableButtonIcon:c,tableButtonLabel:r,tableButtonOnClick:s,tableButtonIconPosition:d,tableButtonUrl:m,tableButtonVariant:p,headline:f,columns:h,dataSource:g,id:b,message:w,...y})=>a.jsxDEV(k,{id:b,className:"zep-flex zep-flex-col zep-items-start zep-justify-start zep-gap-2.5 sm:zep-gap-3 md:zep-gap-4",children:[a.jsxDEV(x,{variant:e,headline:f,...y},void 0,!1,{fileName:"/home/circleci/project/src/components/table-pattern/TablePattern.tsx",lineNumber:28,columnNumber:7},globalThis),a.jsxDEV(V,{variant:e,columns:h,dataSource:g,fullWidth:!0,descriptionBottom:w},void 0,!1,{fileName:"/home/circleci/project/src/components/table-pattern/TablePattern.tsx",lineNumber:29,columnNumber:7},globalThis),l&&a.jsxDEV(T,{content:l,variant:e},void 0,!1,{fileName:"/home/circleci/project/src/components/table-pattern/TablePattern.tsx",lineNumber:36,columnNumber:19},globalThis),r&&a.jsxDEV(P,{variant:p,icon:c,href:m,iconPosition:d,onClick:s,children:r},void 0,!1,{fileName:"/home/circleci/project/src/components/table-pattern/TablePattern.tsx",lineNumber:38,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/table-pattern/TablePattern.tsx",lineNumber:27,columnNumber:5},globalThis);try{n.displayName="TablePattern",n.__docgenInfo={description:"",displayName:"TablePattern",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"TableColumn<object>[]"}},dataSource:{defaultValue:null,description:"",name:"dataSource",required:!0,type:{name:"object[]"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"BlocksContent"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},tableButtonLabel:{defaultValue:null,description:"",name:"tableButtonLabel",required:!1,type:{name:"string"}},tableButtonOnClick:{defaultValue:null,description:"",name:"tableButtonOnClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},tableButtonVariant:{defaultValue:null,description:"",name:"tableButtonVariant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"secondary-cat"'},{value:'"secondary-zps"'},{value:'"tertiary"'}]}},tableButtonIcon:{defaultValue:null,description:"",name:"tableButtonIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},tableButtonIconPosition:{defaultValue:null,description:"",name:"tableButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},tableButtonUrl:{defaultValue:null,description:"",name:"tableButtonUrl",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const q=[{key:"1",title:"",dataIndex:"type"},{key:"aec",title:"Active Equipment Connect",dataIndex:"aec"},{key:"foc",title:"Fleet Operations Center",dataIndex:"foc"},{key:"catVL",title:"CAT VisionLink",dataIndex:"catVL"}],E=Array.from({length:10}).map((e,l)=>({id:l,type:"Standard Funktionen",aec:"Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement",foc:"Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement",catVL:"Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement"})),X={title:"Patterns/TablePattern",component:n,tags:["autodocs"],argTypes:{}},u={args:{columns:q,dataSource:E,headline:"Leistungsübersicht Cat Ersatzmotoren",description:B,tagline:"Zeppelin Power Systems Produkte für Schiene",tableButtonLabel:"Kontaktiere Sie unsere Experten",tableButtonOnClick:()=>console.log("click"),variant:v.Zps}};var t,o,i;u.parameters={...u.parameters,docs:{...(t=u.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    columns: columns,
    dataSource: data,
    headline: 'Leistungsübersicht Cat Ersatzmotoren',
    description: mockRichTextShort,
    tagline: 'Zeppelin Power Systems Produkte für Schiene',
    tableButtonLabel: 'Kontaktiere Sie unsere Experten',
    tableButtonOnClick: () => console.log('click'),
    variant: GlobalVariants.Zps
  } as TablePatternProps
}`,...(i=(o=u.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const Y=["Default"];export{u as Default,Y as __namedExportsOrder,X as default};
