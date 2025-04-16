import{c as h,j as e}from"./clsx-24df0f47.js";import{z as i,c as t,u as F,R as T,P as q,I as V,C as A,t as _}from"./Radio-cabebb1a.js";import{g as k}from"./getDataLayer-2559cd39.js";import{M as w}from"./MultiLinkList-be98d07e.js";import{H as S}from"./HeaderLongComponent-2e8410f3.js";import{h as L}from"./index.es13-373f5050.js";import{r as C}from"./index-b1e7e93e.js";import{B as P,Z as I}from"./ZpsButton-e12879ac.js";const y=C.forwardRef(({disabled:l=!1,label:d,message:n,placeholder:N,readOnly:m=!1,state:r="default",totalCharacters:f=500,...a},g)=>{const o=r==="error",[c,z]=C.useState(""),v=p=>{var u;(u=a.onChange)==null||u.call(a,p),z(p.target.value)},s=l||m,b=o?"zep-text-error":r==="info"?"zep-text-info":"",x=h("zep-block","zep-justify-between","zep-border-solid","zep-pl-1","zep-py-0.75","zep-font-roboto","zep-w-full","zep-outline-none","placeholder:zep-text-typography-dark-100/70","zep-text-primary-default",o?"zep-border-2":"zep-border-1","zep-pr-0.75",l?"zep-text-opacity-disabled":"zep-text-primary-default",{"zep-bg-background-medium":m},{"zep-border-primary-default":!l&&!o},{"zep-border-opacity-disabled":l},{"zep-border-error":o},{"zep-active:ring":!s},{"zep-ring-offset-1":!s},{"focus-visible:zep-ring":!s},{"zep-ring-focus":!s},{"zep-cursor-not-allowed":s},a==null?void 0:a.className);return e.jsxDEV("div",{className:h("zep-relative zep-inline-block zep-text-left zep-w-full",{"zep-cursor-not-allowed zep-opacity-disabled":l}),"data-testid":"zep-text-area",children:[d&&e.jsxDEV("div",{className:"zep-block zep-mb-0.5 zep-text-primary-default",children:[d,!a.required&&e.jsxDEV("span",{className:"zep-ml-0.25",children:"(optional)"},void 0,!1,{fileName:"/home/circleci/project/src/components/form-fields/text-area/TextArea.tsx",lineNumber:70,columnNumber:33},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/form-fields/text-area/TextArea.tsx",lineNumber:68,columnNumber:11},globalThis),e.jsxDEV("textarea",{id:a.id,ref:g,maxLength:500,autoComplete:"off",placeholder:m?void 0:N,readOnly:m,disabled:l||m,"data-testid":"zep-text-area-input",...a,onChange:v,className:x},void 0,!1,{fileName:"/home/circleci/project/src/components/form-fields/text-area/TextArea.tsx",lineNumber:73,columnNumber:9},globalThis),e.jsxDEV("div",{className:h("zep-mt-0.25","zep-text-primary-default","zep-text-0.875","zep-flex zep-h-[26px]",b),children:[n&&e.jsxDEV("div",{className:h("zep-flex",{"zep-text-error":o}),children:[r!=="default"&&e.jsxDEV(L,{name:o?"warning-triangle-filled":"info-circle-filled",role:"img",size:24,className:"zep-mr-0.5 zep-shrink-0"},void 0,!1,{fileName:"/home/circleci/project/src/components/form-fields/text-area/TextArea.tsx",lineNumber:98,columnNumber:17},globalThis),e.jsxDEV("span",{className:"zep-mt-0.125",children:n},void 0,!1,{fileName:"/home/circleci/project/src/components/form-fields/text-area/TextArea.tsx",lineNumber:105,columnNumber:15},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/form-fields/text-area/TextArea.tsx",lineNumber:96,columnNumber:13},globalThis),e.jsxDEV("div",{className:"zep-ml-auto zep-mt-0.125 zep-pl-0.5 zep-flex-shrink-0 zep-text-primary-default zep-mb-4","data-testid":"zep-text-area-length-indicator",children:[c.length," / ",f]},void 0,!0,{fileName:"/home/circleci/project/src/components/form-fields/text-area/TextArea.tsx",lineNumber:108,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/form-fields/text-area/TextArea.tsx",lineNumber:86,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/form-fields/text-area/TextArea.tsx",lineNumber:61,columnNumber:7},globalThis)});try{y.displayName="TextArea",y.__docgenInfo={description:"",displayName:"TextArea",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"info"'}]}},totalCharacters:{defaultValue:{value:"500"},description:"",name:"totalCharacters",required:!1,type:{name:"number"}}}}}catch{}const D=({privacyPolicyUrl:l,onSubmit:d,headline:n,tagline:N,linkLists:m,locale:r,loading:f})=>{var s,b,j,x,p,u;const a=i.object({sex:i.string().min(1,{message:"Req"}),name:i.string().min(1,{message:t[r]["Dieses Feld ist erforderlich"]}),email:i.string().min(1,{message:t[r]["Dieses Feld ist erforderlich"]}).email({message:"Email is not in valid format"}),phone:i.string().min(5,{message:t[r]["Dieses Feld ist erforderlich"]}),message:i.string().optional(),privacyCheck:i.literal(!0,{errorMap:()=>({message:"You must accept Privacy."})}),honeypot:i.union([i.string(),i.undefined()])}),{handleSubmit:g,register:o,formState:{errors:c}}=F({resolver:_(a)}),z=k(),v=async E=>{z.push({event:"generate_lead",form_context:n}),d(E)};return e.jsxDEV("div",{className:"zep-flex zep-flex-col sm:zep-gap-3 zep-gap-2","data-testid":"zep-contact-form-wrapper",children:[e.jsxDEV("div",{className:"zep-w-full zep-flex zep-flex-col zep-gap-1.5 sm:zep-gap-2 md:zep-gap-3",children:[e.jsxDEV(S,{headline:n,tagline:N},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:61,columnNumber:9},globalThis),e.jsxDEV(w,{isPatternPart:!0,linkLists:m||[]},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:62,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:60,columnNumber:7},globalThis),e.jsxDEV("form",{className:"zep-flex zep-flex-col zep-gap-1.5 sm:zep-gap-2",onSubmit:g(v),children:[e.jsxDEV("input",{type:"text",style:{display:"none"},...o("honeypot")},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:65,columnNumber:9},globalThis),e.jsxDEV("p",{className:"zep-typography-headlineSM-fluid-cqi zep-text-primary-default",children:t[r]["Schreiben Sie uns eine Nachricht"]},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:66,columnNumber:9},globalThis),e.jsxDEV("div",{className:"zep-flex zep-flex-col zep-gap-0.5 sm:zep-gap-1",children:[e.jsxDEV(y,{label:t[r]["Ihre Nachricht"],...o("message"),className:"zep-h-[126px]"},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:70,columnNumber:11},globalThis),e.jsxDEV("p",{className:"zep-typography-headlineSM-fluid-cqi zep-text-primary-default",children:t[r].Anrede},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:75,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:69,columnNumber:9},globalThis),e.jsxDEV("div",{className:"zep-flex zep-flex-col zep-gap-1.5",children:[e.jsxDEV("div",{className:"zep-flex zep-gap-2",children:[e.jsxDEV(T,{id:"Frau",label:t[r].Frau,...o("sex"),error:!!((s=c.sex)!=null&&s.message)},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:79,columnNumber:13},globalThis),e.jsxDEV(T,{id:"Herr",label:t[r].Herr,...o("sex"),error:!!((b=c.sex)!=null&&b.message)},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:85,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:78,columnNumber:11},globalThis),e.jsxDEV(q,{className:"zep-mb-[0]",required:!0,...o("phone"),label:t[r].Telefonnummer,error:((j=c.phone)==null?void 0:j.message)&&t[r]["Dieses Feld ist erforderlich"],defaultCountry:r==="de-AT"?"AT":"DE"},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:92,columnNumber:11},globalThis),e.jsxDEV(V,{className:"zep-w-full zep-mb-[0]",label:t[r]["Vor und Nachname"],...o("name"),error:(x=c.name)==null?void 0:x.message,required:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:100,columnNumber:11},globalThis),e.jsxDEV(V,{error:(p=c.email)==null?void 0:p.message,className:"zep-w-full zep-mb-[0]",label:t[r]["E-Mail-Adresse"],...o("email"),required:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:107,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:77,columnNumber:9},globalThis),e.jsxDEV("div",{className:"zep-flex zep-items-center zep-text-primary-default",children:[e.jsxDEV(A,{...o("privacyCheck"),error:(u=c.privacyCheck)==null?void 0:u.message},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:116,columnNumber:11},globalThis),e.jsxDEV("p",{children:[`${t[r].privacy} `,e.jsxDEV("u",{children:e.jsxDEV("a",{href:l,children:t[r].privacyPolicy},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:120,columnNumber:15},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:119,columnNumber:13},globalThis),"."]},void 0,!0,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:117,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:115,columnNumber:9},globalThis),e.jsxDEV(P,{disabled:f,variant:I.Primary,className:"!zep-w-full",type:"submit",children:f?t[r].Einreichung:t[r]["Anfrage Senden"]},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:125,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:64,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:59,columnNumber:5},globalThis)};try{D.displayName="ContactForm",D.__docgenInfo={description:"",displayName:"ContactForm",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(data: unknown) => void"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkLists:{defaultValue:null,description:"",name:"linkLists",required:!1,type:{name:"LinkListItemProps[]"}},locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"enum",value:[{value:'"en"'},{value:'"de"'},{value:'"de-AT"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},privacyPolicyUrl:{defaultValue:null,description:"",name:"privacyPolicyUrl",required:!0,type:{name:"string"}}}}}catch{}export{D as C};
