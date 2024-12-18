import{j as a}from"./jsx-dev-runtime-8ab8c10c.js";import{r as w}from"./index-b1e7e93e.js";import{c as m}from"./clsx-0839fdbe.js";import{A as ne}from"./index.es2-2d3a24ee.js";import{j as t}from"./jsx-runtime-6f6342d7.js";import{j as V}from"./index.es34-79e31a69.js";import{i as y}from"./index.es31-95f1013f.js";import{h as le}from"./index.es13-1255b6fb.js";import{i as E,S as se,y as M}from"./index.es4-e50e2d6c.js";import{f as oe}from"./index.es24-26db34bb.js";import{G as J}from"./global-variants-71b69725.js";import{t as C}from"./commonCSS-0b9dd3ad.js";import{H as ce}from"./HeaderLongComponent-0d038140.js";import{R as Q}from"./RichText-93b9a500.js";import{B as U,Z as X}from"./ZpsButton-b976f6f0.js";import{L as pe}from"./Layout-fc099938.js";import{b as N}from"./mocks-b7644162.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-2de7d931.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";var o=(e=>(e.Zps="ZPS",e.Cat="CAT",e))(o||{}),A=(e=>(e.Text="text",e.Button="button",e))(A||{}),x=(e=>(e.Primary="primary",e.Secondary="secondary",e.SecondaryCat="secondary-cat",e.SecondaryZps="secondary-zps",e))(x||{});const me={[x.Primary]:["zep-bg-secondary-default","zep-text-secondary-contrast","enabled:hover:zep-bg-secondary-hover","enabled:hover:zep-text-secondary-contrast","enabled:active:zep-bg-secondary-active","enabled:active:zep-text-secondary-contrast","disabled:zep-opacity-disabled"],[x.SecondaryZps]:["zep-bg-transparent","zep-text-typography-primary-default","enabled:hover:zep-bg-primary-hover","enabled:hover:zep-text-primary-contrast","enabled:active:zep-bg-primary-active","enabled:active:zep-text-primary-contrast","disabled:zep-opacity-disabled","zep-ring-2","zep-ring-inset","zep-ring-primary-default","enabled:hover:zep-ring-0","enabled:active:zep-ring-0","disabled:zep-ring-opacity-disabled"],[x.Secondary]:["zep-bg-transparent","zep-ring-2","zep-ring-inset","zep-text-secondary-default","zep-ring-secondary-default","enabled:hover:zep-bg-secondary-hover","enabled:hover:zep-ring-0","enabled:hover:zep-text-secondary-contrast","enabled:active:zep-bg-secondary-active","enabled:active:zep-text-secondary-contrast","enabled:active:zep-ring-0","disabled:zep-opacity-disabled"],[x.SecondaryCat]:["zep-bg-transparent","zep-ring-2","zep-ring-inset","zep-ring-neutral-dark-default","zep-text-neutral-dark-default","enabled:hover:zep-text-primary-contrast","enabled:hover:zep-ring-0","enabled:active:zep-ring-0","enabled:hover:zep-bg-neutral-dark-hover","enabled:active:zep-bg-neutral-dark-active","enabled:active:zep-text-primary-contrast","disabled:zep-bg-opacity-disabled"]},P=V(["zep-typography-button","zep-rounded-button","zep-px-1","zep-py-0.75","zep-flex","zep-gap-0.5","zep-justify-center","focus-visible:zep-outline","focus-visible:zep-outline-3","focus-visible:zep-outline-offset-1","focus-visible:zep-outline-focus"],{variants:{variant:me},defaultVariants:{variant:x.Primary}}),de=({className:e,variant:i,isLoading:r=!1,label:n,children:s,icon:l,labelClass:p,iconPosition:d="left",...b})=>{const z=!n||n===""?P({variant:i}).replace("zep-px-1","zep-px-0.75"):P({variant:i});return t.jsxs("button",{className:E(z,e,"zep-w-full sm:zep-w-auto"),...b,children:[r&&t.jsx("i",{className:"mr-zep-0_5","data-testid":"loading-icon",children:"loading icon"}),t.jsxs(oe,{gap:"0.5",className:d==="left"?`zep-flex-row-reverse ${p}`:`${p}`,children:[n??s,l&&t.jsx(le,{name:l})]})]})},Y=w.createContext({variant:o.Zps}),D=()=>w.useContext(Y),he=({children:e,...i})=>t.jsx("tbody",{...i,children:e}),ge=({children:e,className:i,isFirstRow:r,align:n,...s})=>{const{variant:l}=D(),p={[o.Zps]:["zep-text-typography-primary-default "],[o.Cat]:["zep-text-typography-dark-100"]},d=V([`
    zep-inline-block
    zep-text-right
    sm:zep-text-unset
    sm:zep-py-0.5
    zep-w-full
   zep-typography-bodyText
      `],{variants:{variant:p},defaultVariants:{variant:o.Zps}});return t.jsxs("td",{className:y("zep-justify-between sm:zep-table-cell zep-relative md:zep-px-1.5 zep-p-0.75 sm:zep-p-0.5 zep-bg-greyscale-0  lg:zep-whitespace-nowrap zep-group",i),style:{textAlign:n},...s,children:[t.jsx("span",{className:E(d({variant:l}),l===o.Zps?"[&svg]:zep-fill-indigo-500":"[&svg]:zep-fill-darkgrey-500"),children:e}),t.jsx("hr",{className:"group-first:zep-block zep-absolute zep-h-[1px] zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-400"})]})},ue=({children:e,className:i,...r})=>{const{variant:n}=D(),s={[o.Zps]:["zep-bg-indigo-500"],[o.Cat]:["zep-bg-yellow-500"]},l=V([`
      sm:zep-table-row-group`],{variants:{variant:s},defaultVariants:{variant:o.Zps}});return t.jsx("thead",{className:E(l({variant:n,className:i})),...r,children:e})},xe=({children:e,className:i,align:r="left",...n})=>{const{variant:s}=D(),l={[o.Zps]:["zep-text-typography-light-100"],[o.Cat]:["zep-text-typography-dark-100"]},p=V([`
      zep-inline-block
      lg:zep-py-0.5
      zep-w-full
      zep-typography-bodyStrong`],{variants:{variant:l},defaultVariants:{variant:o.Zps}});return t.jsxs("th",{className:y("zep-relative md:zep-px-1.5 zep-p-0.75 sm:zep-p-0.5 lg:zep-whitespace-nowrap",i),style:{textAlign:r},...n,children:[t.jsx("span",{className:E(p({variant:s})),children:e}),t.jsx("hr",{className:"zep-absolute zep-border-t-2 zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-900"})]})},R=({children:e,className:i,...r})=>t.jsx("tr",{className:y(" zep-mb-2 zep-table-row sm:zep-sm-[0px]",i),...r,children:e}),be=({children:e,className:i,variant:r=o.Zps,maxWidth:n,maxHeight:s,fullWidth:l,textTop:p=!0,buttonLabel:d,descriptionBottom:b,descriptionTop:z,dataSource:H,columns:$,align:f,tableButtonOnClick:te,...ie})=>{const ae=(u,g,v,S,c)=>{switch(S){case A.Button:return t.jsx(se,{icon:c==null?void 0:c.iconName,variant:r===o.Zps?M.Tertiary:M.DarkTertiary,onClick:(c==null?void 0:c.onClick)===void 0?void 0:()=>c.onClick(u,g,v),children:c==null?void 0:c.title});case A.Text:default:return t.jsx("p",{children:u})}};return t.jsx(Y.Provider,{value:{variant:r},children:t.jsxs(t.Fragment,{children:[p&&t.jsx("div",{className:`zep-mb-2.5 ${r===o.Zps?"zep-text-typography-primary-default":"zep-text-typography-dark-100"}`,children:t.jsx("p",{children:z})}),t.jsx("div",{className:y("zep-overflow-scroll zep-w-full sm:zep-w-auto",i,{"sm:zep-w-full":l}),style:{maxWidth:n,maxHeight:s},"data-testid":"zep-table",children:t.jsxs("table",{className:y("zep-table zep-w-full sm:zep-w-auto",{"sm:zep-w-full":l}),...ie,children:[t.jsx(ue,{children:t.jsx(R,{children:$.map(({title:u,key:g},v)=>t.jsx(xe,{className:v===0?`zep-sticky zep-left-[0] zep-z-20  zep-drop-shadow-lg zep-min-w-[100px] ${r===o.Zps?"zep-bg-indigo-500":"zep-bg-yellow-500"}`:"",align:f,children:u},`table-align-${f}-head-cell-${g}`))})}),t.jsx(he,{children:H.map((u,g)=>t.jsx(R,{children:$.map(({key:v,dataIndex:S,props:c,renderAs:re},q)=>t.jsx(ge,{align:f,isFirstRow:g===0,className:q===0?"zep-sticky zep-left-[0] zep-z-20  zep-drop-shadow-lg zep-min-w-[100px]":"",children:ae(u[S],u,g,re,c)},`table-align-${f}-cell-${g}-${v}-${q}`))},`table-align-${f}-row-${g}`))})]})}),t.jsx("div",{className:`zep-my-2.5 ${r===o.Zps?"zep-text-typography-primary-default":"zep-text-typography-dark-100"}`,children:t.jsx("p",{children:b})}),t.jsx("div",{children:t.jsx(de,{label:d,variant:x.Primary,labelClass:"zep-text-indigo-500",onClick:te})})]})})},ee=w.createContext({variant:J.Zps,message:"",buttonText:"",buttonOnClick:()=>{}}),Z=()=>w.useContext(ee),ze=({content:e})=>{const{variant:i,message:r,buttonText:n,buttonOnClick:s}=Z();return a.jsxDEV("div",{className:m("zep-flex","zep-flex-col","zep-gap-1.5","md:zep-px-[0px]","sm:zep-px-1.5","zep-px-1","md:zep-w-[calc(70%-48px)]","xl:zep-w-[calc(70%-64px)]"),children:[a.jsxDEV(Q,{content:e,variant:i},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:34,columnNumber:7},globalThis),a.jsxDEV("div",{className:m("zep-flex","zep-flex-col","zep-gap-2","zep-pt-1.5","zep-border-t-1","zep-border-t-greyscale-400"),children:[a.jsxDEV("p",{className:m(C[i],"zep-typography-bodyText"),children:r},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:37,columnNumber:9},globalThis),a.jsxDEV(U,{onClick:s,className:"zep-w-full sm:zep-w-fit",variant:X.Primary,children:n},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:38,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:35,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:24,columnNumber:5},globalThis)},fe=({contents:e})=>{const{variant:i,message:r,buttonText:n,buttonOnClick:s}=Z();return a.jsxDEV("div",{className:m("zep-flex","zep-flex-col","zep-gap-1.5","md:zep-px-[0px]","sm:zep-px-1.5","zep-px-1","md:zep-w-[calc(70%-48px)]","xl:zep-w-[calc(70%-64px)]"),children:[a.jsxDEV("div",{children:a.jsxDEV(ne,{className:C[i],items:e.map(l=>({title:l.title,content:a.jsxDEV("div",{className:"zep-relative",children:a.jsxDEV(Q,{className:"xl:zep-mx-[0]",content:l.accordionContent,variant:i},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:65,columnNumber:17},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:64,columnNumber:15},globalThis)}))},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:59,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:58,columnNumber:7},globalThis),a.jsxDEV("div",{className:m("zep-flex","zep-flex-col","zep-gap-2"),children:[a.jsxDEV("p",{className:m(C[i],"zep-typography-bodyText"),children:r},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:73,columnNumber:9},globalThis),a.jsxDEV(U,{onClick:s,className:"zep-w-full sm:zep-w-fit",variant:X.Primary,children:n},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:74,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:71,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:48,columnNumber:5},globalThis)},ve=({columns:e,dataSource:i})=>{const{variant:r,buttonText:n,message:s,buttonOnClick:l}=Z();return a.jsxDEV("div",{className:m("md:zep-px-[0px]","sm:zep-px-1.5","zep-px-1","md:zep-w-[calc(70%-48px)]","xl:zep-w-[calc(70%-64px)]"),children:a.jsxDEV(be,{textTop:!1,variant:r,columns:e,dataSource:i,buttonLabel:n,tableButtonOnClick:l,descriptionBottom:s,fullWidth:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:91,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:84,columnNumber:5},globalThis)},h=({buttonText:e,children:i,imageAlt:r,imageSrc:n,message:s,buttonOnClick:l,variant:p=J.Zps,imageAlignment:d="left",headline:b,...z})=>{const H=d==="right"?"md:zep-flex-row-reverse":"md:zep-flex-row";return a.jsxDEV(pe,{className:"zep-flex zep-flex-col zep-gap-2.5 sm:zep-gap-3 md:zep-gap-4 xl:zep-overflow-x-visible zep-px-[0] sm:zep-px-[0] md:zep-px-[0] xl:zep-px-[0]",testId:"text-highlight",children:[b&&a.jsxDEV(ce,{headline:b,variant:p,...z},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:124,columnNumber:20},globalThis),a.jsxDEV("div",{className:m("zep-flex",H,"zep-flex-col","xl:zep-gap-4","sm:zep-gap-2","md:zep-gap-3","zep-gap-1.5"),children:[a.jsxDEV("div",{className:"zep-max-w-[2042px] md:zep-w-[30%] zep-w-full xl:zep-overflow-x-visible md:zep-h-[645px] xl:zep-h-[1074px] zep-aspect-[4/3] xl:zep-relative",children:a.jsxDEV("div",{className:m("xl:zep-absolute",d==="left"?"xl:zep-right-[0]":"xl:zep-left-[0]","zep-h-full","xl:zep-w-fit","zep-w-full","xl:zep-aspect-[4/3]"),children:a.jsxDEV("img",{className:m("zep-w-full","zep-h-full","zep-aspect-[4/3]","zep-object-cover",d==="left"?"md:zep-object-right":"md:zep-object-left"),src:n,alt:r},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:145,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:137,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:136,columnNumber:9},globalThis),a.jsxDEV(ee.Provider,{value:{variant:p,buttonText:e,message:s,buttonOnClick:l},children:i},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:158,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:125,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:120,columnNumber:5},globalThis)};h.Accordion=fe;h.Table=ve;h.RichText=ze;try{h.displayName="TextHighlight",h.__docgenInfo={description:"",displayName:"TextHighlight",props:{imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!0,type:{name:"string"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},imageAlignment:{defaultValue:{value:"left"},description:"",name:"imageAlignment",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!0,type:{name:"string"}},buttonOnClick:{defaultValue:null,description:"",name:"buttonOnClick",required:!0,type:{name:"(ev: MouseEvent<HTMLElement, MouseEvent>) => void"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}}}}}catch{}const ye=[{key:"1",title:"",dataIndex:"type"},{key:"aec",title:"Active Equipment Connect",dataIndex:"aec"},{key:"foc",title:"Fleet Operations Center",dataIndex:"foc"},{key:"catVL",title:"CAT VisionLink",dataIndex:"catVL"}],Ne=Array.from({length:10}).map((e,i)=>({id:i,type:"Standard Funktionen",aec:"Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement",foc:"Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement",catVL:"Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement"})),Te=[{title:"Title one",accordionContent:N},{title:"Title two",accordionContent:N},{title:"Title three",accordionContent:N},{title:"Title four",accordionContent:N}],je=[{type:"heading",level:4,children:[{type:"text",text:"Service-Modul für Verfügbarkeit & Reaktionszeit"}]},{type:"list",format:"unordered",children:[{type:"list-item",children:[{type:"text",text:"Individuelle Reaktionszeiten auf Störmeldungen"},{type:"text",text:"Verfügbarkeit von Servicetechnikern vor Ort"},{type:"text",text:"Garantierte Erreichbarkeit per Telefon oder E-Mail"},{type:"text",text:"Schnelle Störungsbeseitigung"},{type:"text",text:"Maximale Verfügbarkeit und Erhöhung der Betriebsbereitschaft"},{type:"text",text:"Minimierung von Kosten bei ungeplanten Ausfällen"}]}]}],Ke={title:"Patterns/TextHighlight",component:h,tags:["autodocs"],argTypes:{}},T={args:{buttonText:"Kontaktieren Sie unsere Experten",imageSrc:"https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg",imageAlt:"cat",children:a.jsxDEV(h.RichText,{content:je},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.stories.tsx",lineNumber:79,columnNumber:15},globalThis),message:"Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?"}},j={args:{buttonText:"Kontaktieren Sie unsere Experten",imageSrc:"https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg",imageAlt:"cat",children:a.jsxDEV(h.Table,{columns:ye,dataSource:Ne},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.stories.tsx",lineNumber:89,columnNumber:15},globalThis),message:"Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?"}},k={args:{buttonText:"Kontaktieren Sie unsere Experten",imageSrc:"https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg",imageAlt:"cat",children:a.jsxDEV(h.Accordion,{contents:Te},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.stories.tsx",lineNumber:99,columnNumber:15},globalThis),message:"Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?"}};var F,I,L;T.parameters={...T.parameters,docs:{...(F=T.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    buttonText: 'Kontaktieren Sie unsere Experten',
    imageSrc: 'https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg',
    imageAlt: 'cat',
    children: <TextHighlight.RichText content={content} />,
    message: 'Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?'
  }
}`,...(L=(I=T.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var _,O,B;j.parameters={...j.parameters,docs:{...(_=j.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    buttonText: 'Kontaktieren Sie unsere Experten',
    imageSrc: 'https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg',
    imageAlt: 'cat',
    children: <TextHighlight.Table columns={columns} dataSource={data} />,
    message: 'Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?'
  }
}`,...(B=(O=j.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var K,W,G;k.parameters={...k.parameters,docs:{...(K=k.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    buttonText: 'Kontaktieren Sie unsere Experten',
    imageSrc: 'https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg',
    imageAlt: 'cat',
    children: <TextHighlight.Accordion contents={accordionContents} />,
    message: 'Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?'
  }
}`,...(G=(W=k.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};const We=["TextHighlightRichText","TextHighlightTable","TextHighlightAccordion"];export{k as TextHighlightAccordion,T as TextHighlightRichText,j as TextHighlightTable,We as __namedExportsOrder,Ke as default};
