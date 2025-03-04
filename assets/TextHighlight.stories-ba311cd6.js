import{j as e}from"./jsx-dev-runtime-8ab8c10c.js";import{m as s}from"./mocks-dd8b5ca4.js";import{E as R}from"./index.es2-93a43d22.js";import{I as F}from"./index.es25-ad9de5a3.js";import{c as l}from"./clsx-0839fdbe.js";import{r as S}from"./index-b1e7e93e.js";import{G as D}from"./global-variants-893e06e6.js";import{t as x}from"./commonCSS-cc68a568.js";import{H as _}from"./HeaderLongComponent-e8a453a7.js";import{R as d}from"./RichText-755c164f.js";import{B as C,Z as A}from"./ZpsButton-5c2a76e8.js";import{L}from"./Layout-a8c3c09c.js";import"./jsx-runtime-6f6342d7.js";import"./index.es31-95f1013f.js";import"./index.es13-cfbbaaf2.js";import"./index.es32-fbb642fb.js";import"./index.es74-f825366a.js";import"./index.es24-551679ca.js";import"./index.es35-79e31a69.js";import"./index.es36-e8d10e84.js";import"./index.es4-8a3ee888.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-0bcfc29a.js";import"./index.es18-4e559a5f.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";const q=S.createContext({variant:D.Zps,message:"",buttonText:"",buttonOnClick:()=>{}}),v=()=>S.useContext(q),O=({content:i})=>{const{variant:t,message:n,buttonText:r,buttonOnClick:o}=v();return e.jsxDEV("div",{className:l("zep-flex","zep-flex-col","zep-gap-1.5","md:zep-px-[0px]","sm:zep-px-1.5","zep-px-1"),children:[e.jsxDEV(d,{content:i,variant:t},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:38,columnNumber:7},globalThis),e.jsxDEV("div",{className:l("zep-flex","zep-flex-col","zep-gap-2","zep-pt-1.5","zep-border-t-1","zep-border-t-greyscale-400"),children:[e.jsxDEV("p",{className:l(x[t],"zep-typography-bodyText"),children:n},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:49,columnNumber:9},globalThis),e.jsxDEV(C,{onClick:o,className:"zep-w-full sm:zep-w-fit",variant:A.Primary,children:r},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:50,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:39,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:28,columnNumber:5},globalThis)},P=({contents:i})=>{const{variant:t,message:n,buttonText:r,buttonOnClick:o}=v();return e.jsxDEV("div",{className:l("zep-flex","zep-flex-col","zep-gap-1.5","md:zep-px-[0px]","sm:zep-px-1.5","zep-px-1"),children:[e.jsxDEV("div",{children:e.jsxDEV(R,{className:x[t],items:i.map(c=>({title:c.title,content:e.jsxDEV("div",{className:"zep-relative",children:e.jsxDEV(d,{className:"xl:zep-mx-[0]",content:c.accordionContent,variant:t},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:79,columnNumber:17},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:78,columnNumber:15},globalThis)}))},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:73,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:72,columnNumber:7},globalThis),e.jsxDEV("div",{className:l("zep-flex","zep-flex-col","zep-gap-2"),children:[e.jsxDEV("p",{className:l(x[t],"zep-typography-bodyText"),children:n},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:86,columnNumber:9},globalThis),e.jsxDEV(C,{onClick:o,className:"zep-w-full sm:zep-w-fit",variant:A.Primary,children:r},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:87,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:85,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:62,columnNumber:5},globalThis)},K=({columns:i,dataSource:t})=>{const{variant:n,buttonText:r,message:o,buttonOnClick:c}=v();return e.jsxDEV("div",{className:l("md:zep-px-[0px]","sm:zep-px-1.5","zep-px-1"),children:e.jsxDEV(F,{variant:n,columns:i,dataSource:t,buttonLabel:r,tableButtonOnClick:c,descriptionBottom:o,fullWidth:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:106,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:99,columnNumber:5},globalThis)},a=({buttonText:i,children:t,imageAlt:n,imageSrc:r,message:o,buttonOnClick:c,variant:u=D.Zps,imageAlignment:g="left",headline:f,bottomDescription:b,topDescription:N,id:I,...M})=>{const B=g==="right"?"md:zep-flex-row-reverse":"md:zep-flex-row";return e.jsxDEV(L,{id:I,className:"zep-flex zep-flex-col zep-gap-2.5 sm:zep-gap-3 md:zep-gap-4 xl:zep-overflow-x-visible !zep-pl-[0] zep-pr-1 sm:zep-pr-1.5 md:zep-pr-[66px] xl:zep-pr-[122px]",testId:"text-highlight",children:[f&&e.jsxDEV("div",{className:l("zep-max-w-[1920px]","zep-w-full","zep-px-1","sm:zep-px-1.5","md:zep-px-[66px]","xl:zep-px-[122px]"),children:e.jsxDEV(_,{headline:f,variant:u,...M},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:153,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:143,columnNumber:9},globalThis),e.jsxDEV("div",{className:l("zep-flex",B,"zep-flex-col","xl:zep-gap-4","sm:zep-gap-2","md:zep-gap-3","zep-gap-1.5"),children:[e.jsxDEV("div",{className:"zep-max-w-[2042px] md:zep-w-[30%] zep-w-full xl:zep-overflow-x-visible md:zep-h-[645px] xl:zep-h-[1074px] zep-aspect-[4/3] xl:zep-relative",children:e.jsxDEV("div",{className:l("xl:zep-absolute",g==="left"?"xl:zep-right-[0]":"xl:zep-left-[0]","zep-h-full","xl:zep-w-fit","zep-w-full","xl:zep-aspect-[4/3]"),children:e.jsxDEV("img",{className:l("zep-w-full","zep-h-full","zep-aspect-[4/3]","zep-object-cover",g==="left"?"md:zep-object-right":"md:zep-object-left"),src:r,alt:n},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:178,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:168,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:167,columnNumber:9},globalThis),e.jsxDEV(q.Provider,{value:{variant:u,buttonText:i,message:o,buttonOnClick:c},children:e.jsxDEV("div",{className:"zep-flex zep-flex-col zep-gap-1.5 md:zep-gap-2 md:zep-w-[calc(70%-48px)] md:zep-mt-2 xl:zep-w-[calc(70%-64px)]",children:[N&&e.jsxDEV("div",{className:"zep-block","data-testid":"texthighlight-pattern-topDescription",children:e.jsxDEV(d,{content:N,variant:u},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:195,columnNumber:17},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:194,columnNumber:15},globalThis),t,b&&e.jsxDEV("div",{className:"zep-block","data-testid":"texthighlight-pattern-bottomDescription",children:e.jsxDEV(d,{content:b,variant:u},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:201,columnNumber:17},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:200,columnNumber:15},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:192,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:191,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:156,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:137,columnNumber:5},globalThis)};a.Accordion=P;a.Table=K;a.RichText=O;try{a.displayName="TextHighlight",a.__docgenInfo={description:"",displayName:"TextHighlight",props:{imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!0,type:{name:"string"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},imageAlignment:{defaultValue:{value:"left"},description:"",name:"imageAlignment",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},topDescription:{defaultValue:null,description:"",name:"topDescription",required:!1,type:{name:"BlocksContent"}},bottomDescription:{defaultValue:null,description:"",name:"bottomDescription",required:!1,type:{name:"BlocksContent"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"add-circle"'},{value:'"marine-ship"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!0,type:{name:"string"}},buttonOnClick:{defaultValue:null,description:"",name:"buttonOnClick",required:!0,type:{name:"(ev: MouseEvent<HTMLElement, MouseEvent>) => void"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}}}}}catch{}const Z=[{key:"1",title:"",dataIndex:"type"},{key:"aec",title:"Active Equipment Connect",dataIndex:"aec"},{key:"foc",title:"Fleet Operations Center",dataIndex:"foc"},{key:"catVL",title:"CAT VisionLink",dataIndex:"catVL"}],G=Array.from({length:10}).map((i,t)=>({id:t,type:"Standard Funktionen",aec:"Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement",foc:"Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement",catVL:"Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement"})),W=[{title:"Title one",accordionContent:s},{title:"Title two",accordionContent:s},{title:"Title three",accordionContent:s},{title:"Title four",accordionContent:s}],$=[{type:"heading",level:4,children:[{type:"text",text:"Service-Modul für Verfügbarkeit & Reaktionszeit"}]},{type:"list",format:"unordered",children:[{type:"list-item",children:[{type:"text",text:"Individuelle Reaktionszeiten auf Störmeldungen"},{type:"text",text:"Verfügbarkeit von Servicetechnikern vor Ort"},{type:"text",text:"Garantierte Erreichbarkeit per Telefon oder E-Mail"},{type:"text",text:"Schnelle Störungsbeseitigung"},{type:"text",text:"Maximale Verfügbarkeit und Erhöhung der Betriebsbereitschaft"},{type:"text",text:"Minimierung von Kosten bei ungeplanten Ausfällen"}]}]}],Te={title:"Patterns/TextHighlight",component:a,tags:["autodocs"],argTypes:{}},m={args:{buttonText:"Kontaktieren Sie unsere Experten",imageSrc:"https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg",imageAlt:"cat",children:e.jsxDEV(a.RichText,{content:$},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.stories.tsx",lineNumber:81,columnNumber:15},globalThis),message:"Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?",topDescription:s}},h={args:{headline:"asdad",buttonText:"Kontaktieren Sie unsere Experten",imageSrc:"https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg",imageAlt:"cat",children:e.jsxDEV(a.Table,{columns:Z,dataSource:G},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.stories.tsx",lineNumber:94,columnNumber:15},globalThis),message:"Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?"}},p={args:{buttonText:"Kontaktieren Sie unsere Experten",imageSrc:"https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg",imageAlt:"cat",children:e.jsxDEV(a.Accordion,{contents:W},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.stories.tsx",lineNumber:105,columnNumber:15},globalThis),message:"Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?"}};var T,z,j;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    buttonText: 'Kontaktieren Sie unsere Experten',
    imageSrc: 'https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg',
    imageAlt: 'cat',
    children: <TextHighlight.RichText content={content} />,
    message: 'Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?',
    topDescription: mockRichTextShort
  }
}`,...(j=(z=m.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var V,y,w;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    headline: 'asdad',
    buttonText: 'Kontaktieren Sie unsere Experten',
    imageSrc: 'https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg',
    imageAlt: 'cat',
    children: <TextHighlight.Table columns={columns} dataSource={data} />,
    message: 'Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?'
  }
}`,...(w=(y=h.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var E,k,H;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    buttonText: 'Kontaktieren Sie unsere Experten',
    imageSrc: 'https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg',
    imageAlt: 'cat',
    children: <TextHighlight.Accordion contents={accordionContents} />,
    message: 'Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?'
  }
}`,...(H=(k=p.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};const ze=["TextHighlightRichText","TextHighlightTable","TextHighlightAccordion"];export{p as TextHighlightAccordion,m as TextHighlightRichText,h as TextHighlightTable,ze as __namedExportsOrder,Te as default};
