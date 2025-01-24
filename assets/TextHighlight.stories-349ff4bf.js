import{j as a}from"./jsx-dev-runtime-8ab8c10c.js";import{r as w}from"./index-b1e7e93e.js";import{c as d}from"./clsx-0839fdbe.js";import{A as le}from"./index.es2-ce4fb7d0.js";import{j as t}from"./jsx-runtime-6f6342d7.js";import{j as V}from"./index.es34-79e31a69.js";import{i as z}from"./index.es31-95f1013f.js";import{h as ne}from"./index.es13-cfbbaaf2.js";import{i as E}from"./index.es35-e8d10e84.js";import{f as se}from"./index.es24-26db34bb.js";import{S as oe,y as P}from"./index.es4-c6079a4f.js";import{G as Q}from"./global-variants-71b69725.js";import{t as C}from"./commonCSS-0b9dd3ad.js";import{H as ce}from"./HeaderLongComponent-7c96607c.js";import{R as U}from"./RichText-724c50a7.js";import{B as X,Z as Y}from"./ZpsButton-441d7925.js";import{L as pe}from"./Layout-ac6d9e38.js";import{b as N}from"./mocks-b7644162.js";import"./_commonjsHelpers-de833af9.js";import"./index.es32-fbb642fb.js";import"./index.es73-f825366a.js";import"./index.es16-559b0725.js";import"./index.es18-4e559a5f.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";var r=(e=>(e.Zps="ZPS",e.Cat="CAT",e.Zsd="ZSD",e.Default="Default",e))(r||{}),D=(e=>(e.Text="text",e.Button="button",e))(D||{}),b=(e=>(e.Primary="primary",e.Secondary="secondary",e.SecondaryCat="secondary-cat",e.SecondaryZps="secondary-zps",e))(b||{});const me={[b.Primary]:["zep-bg-secondary-default","zep-text-secondary-contrast","enabled:hover:zep-bg-secondary-hover","enabled:hover:zep-text-secondary-contrast","enabled:active:zep-bg-secondary-active","enabled:active:zep-text-secondary-contrast","disabled:zep-opacity-disabled"],[b.SecondaryZps]:["zep-bg-transparent","zep-text-typography-primary-default","enabled:hover:zep-bg-primary-hover","enabled:hover:zep-text-primary-contrast","enabled:active:zep-bg-primary-active","enabled:active:zep-text-primary-contrast","disabled:zep-opacity-disabled","zep-ring-2","zep-ring-inset","zep-ring-primary-default","enabled:hover:zep-ring-0","enabled:active:zep-ring-0","disabled:zep-ring-opacity-disabled"],[b.Secondary]:["zep-bg-transparent","zep-ring-2","zep-ring-inset","zep-text-secondary-default","zep-ring-secondary-default","enabled:hover:zep-bg-secondary-hover","enabled:hover:zep-ring-0","enabled:hover:zep-text-secondary-contrast","enabled:active:zep-bg-secondary-active","enabled:active:zep-text-secondary-contrast","enabled:active:zep-ring-0","disabled:zep-opacity-disabled"],[b.SecondaryCat]:["zep-bg-transparent","zep-ring-2","zep-ring-inset","zep-ring-neutral-dark-default","zep-text-neutral-dark-default","enabled:hover:zep-text-primary-contrast","enabled:hover:zep-ring-0","enabled:active:zep-ring-0","enabled:hover:zep-bg-neutral-dark-hover","enabled:active:zep-bg-neutral-dark-active","enabled:active:zep-text-primary-contrast","disabled:zep-bg-opacity-disabled"]},R=V(["zep-typography-button","zep-rounded-button","zep-px-1","zep-py-0.75","zep-flex","zep-gap-0.5","zep-justify-center","focus-visible:zep-outline","focus-visible:zep-outline-3","focus-visible:zep-outline-offset-1","focus-visible:zep-outline-focus"],{variants:{variant:me},defaultVariants:{variant:b.Primary}}),de=({className:e,variant:i,isLoading:l=!1,label:n,children:o,icon:s,labelClass:p,iconPosition:m="left",...u})=>{const f=!n||n===""?R({variant:i}).replace("zep-px-1","zep-px-0.75"):R({variant:i});return t.jsxs("button",{className:E(f,e,"zep-w-full sm:zep-w-auto"),...u,children:[l&&t.jsx("i",{className:"mr-zep-0_5","data-testid":"loading-icon",children:"loading icon"}),t.jsxs(se,{gap:"0.5",className:m==="left"?`zep-flex-row-reverse ${p}`:`${p}`,children:[n??o,s&&t.jsx(ne,{name:s})]})]})},ee=w.createContext({variant:r.Zps}),Z=()=>w.useContext(ee),he=({children:e,...i})=>t.jsx("tbody",{...i,children:e}),ge=({children:e,className:i,isFirstRow:l,align:n,...o})=>{const{variant:s}=Z(),p={[r.Zps]:["zep-text-typography-primary-default "],[r.Cat]:["zep-text-typography-dark-100"],[r.Zsd]:["zep-text-typography-dark-100"],[r.Default]:["zep-text-typography-dark-100"]},m=V([`
    zep-inline-block
    zep-text-right
    sm:zep-text-unset
    sm:zep-py-0.5
    zep-w-full
   zep-typography-bodyText
      `],{variants:{variant:p},defaultVariants:{variant:r.Zps}});return t.jsxs("td",{className:z("zep-justify-between sm:zep-table-cell zep-relative md:zep-px-1.5 zep-p-0.75 sm:zep-p-0.5 zep-bg-greyscale-0  lg:zep-whitespace-nowrap zep-group",i),style:{textAlign:n},...o,children:[t.jsx("span",{className:E(m({variant:s}),s===r.Zps?"[&svg]:zep-fill-indigo-500":"[&svg]:zep-fill-darkgrey-500"),children:e}),t.jsx("hr",{className:"group-first:zep-block zep-absolute zep-h-[1px] zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-400"})]})},ue=({children:e,className:i,...l})=>{const{variant:n}=Z(),o={[r.Zps]:["zep-bg-indigo-500"],[r.Cat]:["zep-bg-yellow-500"],[r.Zsd]:["zep-bg-greyscale-200"],[r.Default]:["zep-bg-greyscale-0"]},s=V([`
      sm:zep-table-row-group`],{variants:{variant:o},defaultVariants:{variant:r.Zps}});return t.jsx("thead",{className:E(s({variant:n,className:i})),...l,children:e})},xe=({children:e,className:i,align:l="left",...n})=>{const{variant:o}=Z(),s={[r.Zps]:["zep-text-typography-light-100"],[r.Cat]:["zep-text-typography-dark-100"],[r.Zsd]:["zep-text-typography-dark-100"],[r.Default]:["zep-text-typography-dark-100"]},p=V([`
      zep-inline-block
      lg:zep-py-0.5
      zep-w-full
      zep-typography-bodyStrong`],{variants:{variant:s},defaultVariants:{variant:r.Zps}});return t.jsxs("th",{className:z("zep-relative md:zep-px-1.5 zep-p-0.75 sm:zep-p-0.5 lg:zep-whitespace-nowrap",i),style:{textAlign:l},...n,children:[t.jsx("span",{className:E(p({variant:o})),children:e}),t.jsx("hr",{className:"zep-absolute zep-border-t-2 zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-900"})]})},F=({children:e,className:i,...l})=>t.jsx("tr",{className:z(" zep-mb-2 zep-table-row sm:zep-sm-[0px]",i),...l,children:e}),be=({children:e,className:i,variant:l=r.Zps,maxWidth:n,maxHeight:o,fullWidth:s,textTop:p=!0,buttonLabel:m,descriptionBottom:u,descriptionTop:f,dataSource:S,columns:$,align:v,tableButtonOnClick:q,...ie})=>{const ae=(x,g,y,H,c)=>{switch(H){case D.Button:return t.jsx(oe,{icon:c==null?void 0:c.iconName,variant:l===r.Zps?P.Tertiary:P.DarkTertiary,onClick:(c==null?void 0:c.onClick)===void 0?void 0:()=>c.onClick(x,g,y),children:c==null?void 0:c.title});case D.Text:default:return t.jsx("p",{children:x})}};return t.jsx(ee.Provider,{value:{variant:l},children:t.jsxs(t.Fragment,{children:[p&&t.jsx("div",{className:`zep-mb-2.5 ${l===r.Zps?"zep-text-typography-primary-default":"zep-text-typography-dark-100"}`,children:t.jsx("p",{children:f})}),t.jsx("div",{className:z("zep-overflow-scroll zep-w-full sm:zep-w-auto",i,{"sm:zep-w-full":s}),style:{maxWidth:n,maxHeight:o},"data-testid":"zep-table",children:t.jsxs("table",{className:z("zep-table zep-w-full sm:zep-w-auto",{"sm:zep-w-full":s}),...ie,children:[t.jsx(ue,{children:t.jsx(F,{children:$.map(({title:x,key:g},y)=>t.jsx(xe,{className:z({"zep-sticky zep-left-[0] zep-z-20 zep-drop-shadow-lg zep-min-w-[100px]":y===0,"zep-bg-indigo-500":l===r.Zps,"zep-bg-yellow-500":l===r.Cat,"zep-bg-greyscale-200":l===r.Zsd}),align:v,children:x},`table-align-${v}-head-cell-${g}`))})}),t.jsx(he,{children:S.map((x,g)=>t.jsx(F,{children:$.map(({key:y,dataIndex:H,props:c,renderAs:re},M)=>t.jsx(ge,{align:v,isFirstRow:g===0,className:M===0?"zep-sticky zep-left-[0] zep-z-20  zep-drop-shadow-lg zep-min-w-[100px]":"",children:ae(x[H],x,g,re,c)},`table-align-${v}-cell-${g}-${y}-${M}`))},`table-align-${v}-row-${g}`))})]})}),u&&t.jsx("div",{className:`zep-my-2.5 ${l===r.Zps?"zep-text-typography-primary-default":"zep-text-typography-dark-100"}`,children:t.jsx("p",{children:u})}),m&&q&&t.jsx("div",{children:t.jsx(de,{label:m,variant:b.Primary,labelClass:"zep-text-indigo-500",onClick:q})})]})})},te=w.createContext({variant:Q.Zps,message:"",buttonText:"",buttonOnClick:()=>{}}),A=()=>w.useContext(te),ze=({content:e})=>{const{variant:i,message:l,buttonText:n,buttonOnClick:o}=A();return a.jsxDEV("div",{className:d("zep-flex","zep-flex-col","zep-gap-1.5","md:zep-px-[0px]","sm:zep-px-1.5","zep-px-1","md:zep-w-[calc(70%-48px)]","xl:zep-w-[calc(70%-64px)]"),children:[a.jsxDEV(U,{content:e,variant:i},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:34,columnNumber:7},globalThis),a.jsxDEV("div",{className:d("zep-flex","zep-flex-col","zep-gap-2","zep-pt-1.5","zep-border-t-1","zep-border-t-greyscale-400"),children:[a.jsxDEV("p",{className:d(C[i],"zep-typography-bodyText"),children:l},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:37,columnNumber:9},globalThis),a.jsxDEV(X,{onClick:o,className:"zep-w-full sm:zep-w-fit",variant:Y.Primary,children:n},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:38,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:35,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:24,columnNumber:5},globalThis)},fe=({contents:e})=>{const{variant:i,message:l,buttonText:n,buttonOnClick:o}=A();return a.jsxDEV("div",{className:d("zep-flex","zep-flex-col","zep-gap-1.5","md:zep-px-[0px]","sm:zep-px-1.5","zep-px-1","md:zep-w-[calc(70%-48px)]","xl:zep-w-[calc(70%-64px)]"),children:[a.jsxDEV("div",{children:a.jsxDEV(le,{className:C[i],items:e.map(s=>({title:s.title,content:a.jsxDEV("div",{className:"zep-relative",children:a.jsxDEV(U,{className:"xl:zep-mx-[0]",content:s.accordionContent,variant:i},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:65,columnNumber:17},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:64,columnNumber:15},globalThis)}))},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:59,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:58,columnNumber:7},globalThis),a.jsxDEV("div",{className:d("zep-flex","zep-flex-col","zep-gap-2"),children:[a.jsxDEV("p",{className:d(C[i],"zep-typography-bodyText"),children:l},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:73,columnNumber:9},globalThis),a.jsxDEV(X,{onClick:o,className:"zep-w-full sm:zep-w-fit",variant:Y.Primary,children:n},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:74,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:71,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:48,columnNumber:5},globalThis)},ve=({columns:e,dataSource:i})=>{const{variant:l,buttonText:n,message:o,buttonOnClick:s}=A();return a.jsxDEV("div",{className:d("md:zep-px-[0px]","sm:zep-px-1.5","zep-px-1","md:zep-w-[calc(70%-48px)]","xl:zep-w-[calc(70%-64px)]"),children:a.jsxDEV(be,{textTop:!1,variant:l,columns:e,dataSource:i,buttonLabel:n,tableButtonOnClick:s,descriptionBottom:o,fullWidth:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:91,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:84,columnNumber:5},globalThis)},h=({buttonText:e,children:i,imageAlt:l,imageSrc:n,message:o,buttonOnClick:s,variant:p=Q.Zps,imageAlignment:m="left",headline:u,...f})=>{const S=m==="right"?"md:zep-flex-row-reverse":"md:zep-flex-row";return a.jsxDEV(pe,{className:"zep-flex zep-flex-col zep-gap-2.5 sm:zep-gap-3 md:zep-gap-4 xl:zep-overflow-x-visible !zep-px-[0]",testId:"text-highlight",children:[u&&a.jsxDEV(ce,{headline:u,variant:p,...f},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:124,columnNumber:20},globalThis),a.jsxDEV("div",{className:d("zep-flex",S,"zep-flex-col","xl:zep-gap-4","sm:zep-gap-2","md:zep-gap-3","zep-gap-1.5"),children:[a.jsxDEV("div",{className:"zep-max-w-[2042px] md:zep-w-[30%] zep-w-full xl:zep-overflow-x-visible md:zep-h-[645px] xl:zep-h-[1074px] zep-aspect-[4/3] xl:zep-relative",children:a.jsxDEV("div",{className:d("xl:zep-absolute",m==="left"?"xl:zep-right-[0]":"xl:zep-left-[0]","zep-h-full","xl:zep-w-fit","zep-w-full","xl:zep-aspect-[4/3]"),children:a.jsxDEV("img",{className:d("zep-w-full","zep-h-full","zep-aspect-[4/3]","zep-object-cover",m==="left"?"md:zep-object-right":"md:zep-object-left"),src:n,alt:l},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:145,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:137,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:136,columnNumber:9},globalThis),a.jsxDEV(te.Provider,{value:{variant:p,buttonText:e,message:o,buttonOnClick:s},children:i},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:158,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:125,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:120,columnNumber:5},globalThis)};h.Accordion=fe;h.Table=ve;h.RichText=ze;try{h.displayName="TextHighlight",h.__docgenInfo={description:"",displayName:"TextHighlight",props:{imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!0,type:{name:"string"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},imageAlignment:{defaultValue:{value:"left"},description:"",name:"imageAlignment",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!0,type:{name:"string"}},buttonOnClick:{defaultValue:null,description:"",name:"buttonOnClick",required:!0,type:{name:"(ev: MouseEvent<HTMLElement, MouseEvent>) => void"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}}}}}catch{}const ye=[{key:"1",title:"",dataIndex:"type"},{key:"aec",title:"Active Equipment Connect",dataIndex:"aec"},{key:"foc",title:"Fleet Operations Center",dataIndex:"foc"},{key:"catVL",title:"CAT VisionLink",dataIndex:"catVL"}],Ne=Array.from({length:10}).map((e,i)=>({id:i,type:"Standard Funktionen",aec:"Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement",foc:"Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement",catVL:"Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement"})),Te=[{title:"Title one",accordionContent:N},{title:"Title two",accordionContent:N},{title:"Title three",accordionContent:N},{title:"Title four",accordionContent:N}],je=[{type:"heading",level:4,children:[{type:"text",text:"Service-Modul für Verfügbarkeit & Reaktionszeit"}]},{type:"list",format:"unordered",children:[{type:"list-item",children:[{type:"text",text:"Individuelle Reaktionszeiten auf Störmeldungen"},{type:"text",text:"Verfügbarkeit von Servicetechnikern vor Ort"},{type:"text",text:"Garantierte Erreichbarkeit per Telefon oder E-Mail"},{type:"text",text:"Schnelle Störungsbeseitigung"},{type:"text",text:"Maximale Verfügbarkeit und Erhöhung der Betriebsbereitschaft"},{type:"text",text:"Minimierung von Kosten bei ungeplanten Ausfällen"}]}]}],Qe={title:"Patterns/TextHighlight",component:h,tags:["autodocs"],argTypes:{}},T={args:{buttonText:"Kontaktieren Sie unsere Experten",imageSrc:"https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg",imageAlt:"cat",children:a.jsxDEV(h.RichText,{content:je},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.stories.tsx",lineNumber:79,columnNumber:15},globalThis),message:"Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?"}},j={args:{buttonText:"Kontaktieren Sie unsere Experten",imageSrc:"https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg",imageAlt:"cat",children:a.jsxDEV(h.Table,{columns:ye,dataSource:Ne},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.stories.tsx",lineNumber:89,columnNumber:15},globalThis),message:"Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?"}},k={args:{buttonText:"Kontaktieren Sie unsere Experten",imageSrc:"https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg",imageAlt:"cat",children:a.jsxDEV(h.Accordion,{contents:Te},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.stories.tsx",lineNumber:99,columnNumber:15},globalThis),message:"Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?"}};var I,L,_;T.parameters={...T.parameters,docs:{...(I=T.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    buttonText: 'Kontaktieren Sie unsere Experten',
    imageSrc: 'https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg',
    imageAlt: 'cat',
    children: <TextHighlight.RichText content={content} />,
    message: 'Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?'
  }
}`,...(_=(L=T.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var O,B,K;j.parameters={...j.parameters,docs:{...(O=j.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    buttonText: 'Kontaktieren Sie unsere Experten',
    imageSrc: 'https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg',
    imageAlt: 'cat',
    children: <TextHighlight.Table columns={columns} dataSource={data} />,
    message: 'Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?'
  }
}`,...(K=(B=j.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};var W,G,J;k.parameters={...k.parameters,docs:{...(W=k.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    buttonText: 'Kontaktieren Sie unsere Experten',
    imageSrc: 'https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg',
    imageAlt: 'cat',
    children: <TextHighlight.Accordion contents={accordionContents} />,
    message: 'Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?'
  }
}`,...(J=(G=k.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const Ue=["TextHighlightRichText","TextHighlightTable","TextHighlightAccordion"];export{k as TextHighlightAccordion,T as TextHighlightRichText,j as TextHighlightTable,Ue as __namedExportsOrder,Qe as default};
