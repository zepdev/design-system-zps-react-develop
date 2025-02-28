import{j as e}from"./jsx-dev-runtime-8ab8c10c.js";import{m as s}from"./mocks-dd8b5ca4.js";import{E as F}from"./index.es2-b7e588bc.js";import{e as _}from"./index.es25-edba3094.js";import{c as i}from"./clsx-0839fdbe.js";import{r as D}from"./index-b1e7e93e.js";import{G as C}from"./global-variants-71b69725.js";import{t as x}from"./commonCSS-0b9dd3ad.js";import{L}from"./Layout-a8c3c09c.js";import{H as O}from"./HeaderLongComponent-1a6e7fe0.js";import{R as u}from"./RichText-c06f2dc1.js";import{B as w,Z as A}from"./ZpsButton-5c2a76e8.js";import"./jsx-runtime-6f6342d7.js";import"./index.es31-95f1013f.js";import"./index.es13-cfbbaaf2.js";import"./index.es32-fbb642fb.js";import"./index.es74-f825366a.js";import"./index.es24-551679ca.js";import"./index.es35-79e31a69.js";import"./index.es36-e8d10e84.js";import"./index.es4-8a3ee888.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-0bcfc29a.js";import"./index.es18-4e559a5f.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";const q=D.createContext({variant:C.Zps,message:"",buttonText:"",buttonOnClick:()=>{}}),f=()=>D.useContext(q),B=({content:l})=>{const{variant:t,message:r,buttonText:a,buttonOnClick:o}=f();return e.jsxDEV("div",{className:i("zep-flex","zep-flex-col","zep-gap-1.5","md:zep-px-[0px]","sm:zep-px-1.5","zep-px-1"),children:[e.jsxDEV(u,{content:l,variant:t},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:38,columnNumber:7},globalThis),e.jsxDEV("div",{className:i("zep-flex","zep-flex-col","zep-gap-2","zep-pt-1.5","zep-border-t-1","zep-border-t-greyscale-400"),children:[e.jsxDEV("p",{className:i(x[t],"zep-typography-bodyText"),children:r},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:49,columnNumber:9},globalThis),e.jsxDEV(w,{onClick:o,className:"zep-w-full sm:zep-w-fit",variant:A.Primary,children:a},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:50,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:39,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:28,columnNumber:5},globalThis)},P=({contents:l})=>{const{variant:t,message:r,buttonText:a,buttonOnClick:o}=f();return e.jsxDEV("div",{className:i("zep-flex","zep-flex-col","zep-gap-1.5","md:zep-px-[0px]","sm:zep-px-1.5","zep-px-1"),children:[e.jsxDEV("div",{children:e.jsxDEV(F,{className:x[t],items:l.map(c=>({title:c.title,content:e.jsxDEV("div",{className:"zep-relative",children:e.jsxDEV(u,{className:"xl:zep-mx-[0]",content:c.accordionContent,variant:t},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:79,columnNumber:17},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:78,columnNumber:15},globalThis)}))},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:73,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:72,columnNumber:7},globalThis),e.jsxDEV("div",{className:i("zep-flex","zep-flex-col","zep-gap-2"),children:[e.jsxDEV("p",{className:i(x[t],"zep-typography-bodyText"),children:r},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:86,columnNumber:9},globalThis),e.jsxDEV(w,{onClick:o,className:"zep-w-full sm:zep-w-fit",variant:A.Primary,children:a},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:87,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:85,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:62,columnNumber:5},globalThis)},K=({columns:l,dataSource:t})=>{const{variant:r,buttonText:a,message:o,buttonOnClick:c}=f();return e.jsxDEV("div",{className:i("md:zep-px-[0px]","sm:zep-px-1.5","zep-px-1"),children:e.jsxDEV(_,{textTop:!1,variant:r,columns:l,dataSource:t,buttonLabel:a,tableButtonOnClick:c,descriptionBottom:o,fullWidth:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:106,columnNumber:7},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:99,columnNumber:5},globalThis)},n=({buttonText:l,children:t,imageAlt:r,imageSrc:a,message:o,buttonOnClick:c,variant:m=C.Zps,imageAlignment:d="left",headline:b,bottomDescription:T,topDescription:N,id:M,...I})=>{const R=d==="right"?"md:zep-flex-row-reverse":"md:zep-flex-row";return e.jsxDEV(L,{id:M,className:"zep-flex zep-flex-col zep-gap-2.5 sm:zep-gap-3 md:zep-gap-4 xl:zep-overflow-x-visible !zep-pl-[0] zep-pr-1 sm:zep-pr-1.5 md:zep-pr-[66px] xl:zep-pr-[122px]",testId:"text-highlight",children:[b&&e.jsxDEV("div",{className:i("zep-max-w-[1920px]","zep-w-full","zep-px-1","sm:zep-px-1.5","md:zep-px-[66px]","xl:zep-px-[122px]"),children:e.jsxDEV(O,{headline:b,variant:m,...I},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:154,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:144,columnNumber:9},globalThis),e.jsxDEV("div",{className:i("zep-flex",R,"zep-flex-col","xl:zep-gap-4","sm:zep-gap-2","md:zep-gap-3","zep-gap-1.5"),children:[e.jsxDEV("div",{className:"zep-max-w-[2042px] md:zep-w-[30%] zep-w-full xl:zep-overflow-x-visible md:zep-h-[645px] xl:zep-h-[1074px] zep-aspect-[4/3] xl:zep-relative",children:e.jsxDEV("div",{className:i("xl:zep-absolute",d==="left"?"xl:zep-right-[0]":"xl:zep-left-[0]","zep-h-full","xl:zep-w-fit","zep-w-full","xl:zep-aspect-[4/3]"),children:e.jsxDEV("img",{className:i("zep-w-full","zep-h-full","zep-aspect-[4/3]","zep-object-cover",d==="left"?"md:zep-object-right":"md:zep-object-left"),src:a,alt:r},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:179,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:169,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:168,columnNumber:9},globalThis),e.jsxDEV(q.Provider,{value:{variant:m,buttonText:l,message:o,buttonOnClick:c},children:e.jsxDEV("div",{className:"zep-flex zep-flex-col zep-gap-1.5 md:zep-gap-2 md:zep-w-[calc(70%-48px)] md:zep-mt-2 xl:zep-w-[calc(70%-64px)]",children:[N&&e.jsxDEV("div",{className:"zep-block","data-testid":"texthighlight-pattern-topDescription",children:e.jsxDEV(u,{content:N,variant:m},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:196,columnNumber:17},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:195,columnNumber:15},globalThis),t,T&&e.jsxDEV("div",{className:"zep-block","data-testid":"texthighlight-pattern-bottomDescription",children:e.jsxDEV(u,{content:T,variant:m},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:202,columnNumber:17},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:201,columnNumber:15},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:193,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:192,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:157,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.tsx",lineNumber:138,columnNumber:5},globalThis)};n.Accordion=P;n.Table=K;n.RichText=B;try{n.displayName="TextHighlight",n.__docgenInfo={description:"",displayName:"TextHighlight",props:{imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!0,type:{name:"string"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},imageAlignment:{defaultValue:{value:"left"},description:"",name:"imageAlignment",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},topDescription:{defaultValue:null,description:"",name:"topDescription",required:!1,type:{name:"BlocksContent"}},bottomDescription:{defaultValue:null,description:"",name:"bottomDescription",required:!1,type:{name:"BlocksContent"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!0,type:{name:"string"}},buttonOnClick:{defaultValue:null,description:"",name:"buttonOnClick",required:!0,type:{name:"(ev: MouseEvent<HTMLElement, MouseEvent>) => void"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}}}}}catch{}const Z=[{key:"1",title:"",dataIndex:"type"},{key:"aec",title:"Active Equipment Connect",dataIndex:"aec"},{key:"foc",title:"Fleet Operations Center",dataIndex:"foc"},{key:"catVL",title:"CAT VisionLink",dataIndex:"catVL"}],G=Array.from({length:10}).map((l,t)=>({id:t,type:"Standard Funktionen",aec:"Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement",foc:"Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement",catVL:"Fernüberwachung, Echtzeitdaten, Fehlerdiagnose, Proaktive Wartung, Anlagenmanagement"})),W=[{title:"Title one",accordionContent:s},{title:"Title two",accordionContent:s},{title:"Title three",accordionContent:s},{title:"Title four",accordionContent:s}],$=[{type:"heading",level:4,children:[{type:"text",text:"Service-Modul für Verfügbarkeit & Reaktionszeit"}]},{type:"list",format:"unordered",children:[{type:"list-item",children:[{type:"text",text:"Individuelle Reaktionszeiten auf Störmeldungen"},{type:"text",text:"Verfügbarkeit von Servicetechnikern vor Ort"},{type:"text",text:"Garantierte Erreichbarkeit per Telefon oder E-Mail"},{type:"text",text:"Schnelle Störungsbeseitigung"},{type:"text",text:"Maximale Verfügbarkeit und Erhöhung der Betriebsbereitschaft"},{type:"text",text:"Minimierung von Kosten bei ungeplanten Ausfällen"}]}]}],ve={title:"Patterns/TextHighlight",component:n,tags:["autodocs"],argTypes:{}},p={args:{buttonText:"Kontaktieren Sie unsere Experten",imageSrc:"https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg",imageAlt:"cat",children:e.jsxDEV(n.RichText,{content:$},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.stories.tsx",lineNumber:81,columnNumber:15},globalThis),message:"Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?",topDescription:s}},h={args:{headline:"asdad",buttonText:"Kontaktieren Sie unsere Experten",imageSrc:"https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg",imageAlt:"cat",children:e.jsxDEV(n.Table,{columns:Z,dataSource:G},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.stories.tsx",lineNumber:94,columnNumber:15},globalThis),message:"Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?"}},g={args:{buttonText:"Kontaktieren Sie unsere Experten",imageSrc:"https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg",imageAlt:"cat",children:e.jsxDEV(n.Accordion,{contents:W},void 0,!1,{fileName:"/home/circleci/project/src/components/text-highlight/TextHighlight.stories.tsx",lineNumber:105,columnNumber:15},globalThis),message:"Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?"}};var v,z,j;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    buttonText: 'Kontaktieren Sie unsere Experten',
    imageSrc: 'https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg',
    imageAlt: 'cat',
    children: <TextHighlight.RichText content={content} />,
    message: 'Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?',
    topDescription: mockRichTextShort
  }
}`,...(j=(z=p.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var V,E,y;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    headline: 'asdad',
    buttonText: 'Kontaktieren Sie unsere Experten',
    imageSrc: 'https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg',
    imageAlt: 'cat',
    children: <TextHighlight.Table columns={columns} dataSource={data} />,
    message: 'Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?'
  }
}`,...(y=(E=h.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var H,k,S;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    buttonText: 'Kontaktieren Sie unsere Experten',
    imageSrc: 'https://images-cdn-live.zepdev.net/2b180439-8f0c-4481-afa9-76d216a96dda.jpg',
    imageAlt: 'cat',
    children: <TextHighlight.Accordion contents={accordionContents} />,
    message: 'Sie möchten sich beraten lassen und weitere Informationen zu unseren Modularen Serviceverträgen erhalten?'
  }
}`,...(S=(k=g.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const ze=["TextHighlightRichText","TextHighlightTable","TextHighlightAccordion"];export{g as TextHighlightAccordion,p as TextHighlightRichText,h as TextHighlightTable,ze as __namedExportsOrder,ve as default};
