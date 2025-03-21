import{j as e}from"./jsx-dev-runtime-8ab8c10c.js";import{z as l,c as t,u as D,R as V,P as F,I as T,C as q,t as k}from"./Radio-f84809b3.js";import{H as A}from"./HeaderLongComponent-165408a3.js";import{M as _}from"./MultiLinkList-62eadd0f.js";import{h as w}from"./index.es13-373f5050.js";import{c as N}from"./clsx-0839fdbe.js";import{r as C}from"./index-b1e7e93e.js";import{B as S,Z as L}from"./ZpsButton-0f3be8a2.js";const y=C.forwardRef(({disabled:i=!1,label:u,message:p,placeholder:g,readOnly:s=!1,state:r="default",totalCharacters:d=500,...a},z)=>{const o=r==="error",[c,v]=C.useState(""),f=n=>{var x;(x=a.onChange)==null||x.call(a,n),v(n.target.value)},m=i||s,b=o?"zep-text-error":r==="info"?"zep-text-info":"",h=N("zep-block","zep-justify-between","zep-border-solid","zep-pl-1","zep-py-0.75","zep-font-roboto","zep-w-full","zep-outline-none","placeholder:zep-text-typography-dark-100/70","zep-text-primary-default",o?"zep-border-2":"zep-border-1","zep-pr-0.75",i?"zep-text-opacity-disabled":"zep-text-primary-default",{"zep-bg-background-medium":s},{"zep-border-primary-default":!i&&!o},{"zep-border-opacity-disabled":i},{"zep-border-error":o},{"zep-active:ring":!m},{"zep-ring-offset-1":!m},{"focus-visible:zep-ring":!m},{"zep-ring-focus":!m},{"zep-cursor-not-allowed":m},a==null?void 0:a.className);return e.jsxDEV("div",{className:N("zep-relative zep-inline-block zep-text-left zep-w-full",{"zep-cursor-not-allowed zep-opacity-disabled":i}),"data-testid":"zep-text-area",children:[u&&e.jsxDEV("div",{className:"zep-block zep-mb-0.5 zep-text-primary-default",children:[u,!a.required&&e.jsxDEV("span",{className:"zep-ml-0.25",children:"(optional)"},void 0,!1,{fileName:"/home/circleci/project/src/components/form-fields/text-area/TextArea.tsx",lineNumber:70,columnNumber:33},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/form-fields/text-area/TextArea.tsx",lineNumber:68,columnNumber:11},globalThis),e.jsxDEV("textarea",{id:a.id,ref:z,maxLength:500,autoComplete:"off",placeholder:s?void 0:g,readOnly:s,disabled:i||s,"data-testid":"zep-text-area-input",...a,onChange:f,className:h},void 0,!1,{fileName:"/home/circleci/project/src/components/form-fields/text-area/TextArea.tsx",lineNumber:73,columnNumber:9},globalThis),e.jsxDEV("div",{className:N("zep-mt-0.25","zep-text-primary-default","zep-text-0.875","zep-flex zep-h-[40px]",b),children:[p&&e.jsxDEV("div",{className:N("zep-flex",{"zep-text-error":o}),children:[r!=="default"&&e.jsxDEV(w,{name:o?"warning-triangle-filled":"info-circle-filled",role:"img",size:24,className:"zep-mr-0.5 zep-shrink-0"},void 0,!1,{fileName:"/home/circleci/project/src/components/form-fields/text-area/TextArea.tsx",lineNumber:98,columnNumber:17},globalThis),e.jsxDEV("span",{className:"zep-mt-0.125",children:p},void 0,!1,{fileName:"/home/circleci/project/src/components/form-fields/text-area/TextArea.tsx",lineNumber:105,columnNumber:15},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/form-fields/text-area/TextArea.tsx",lineNumber:96,columnNumber:13},globalThis),e.jsxDEV("div",{className:"zep-ml-auto zep-mt-0.125 zep-pl-0.5 zep-flex-shrink-0 zep-text-primary-default zep-mb-4","data-testid":"zep-text-area-length-indicator",children:[c.length," / ",d]},void 0,!0,{fileName:"/home/circleci/project/src/components/form-fields/text-area/TextArea.tsx",lineNumber:108,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/form-fields/text-area/TextArea.tsx",lineNumber:86,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/form-fields/text-area/TextArea.tsx",lineNumber:61,columnNumber:7},globalThis)});try{y.displayName="TextArea",y.__docgenInfo={description:"",displayName:"TextArea",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"info"'}]}},totalCharacters:{defaultValue:{value:"500"},description:"",name:"totalCharacters",required:!1,type:{name:"number"}}}}}catch{}const E=({privacyPolicyUrl:i,onSubmit:u,headline:p,tagline:g,linkLists:s,locale:r,loading:d})=>{var f,m,b,j,h,n;const a=l.object({sex:l.string().min(1,{message:"Req"}),name:l.string().min(1,{message:t[r]["Dieses Feld ist erforderlich"]}),email:l.string().min(1,{message:t[r]["Dieses Feld ist erforderlich"]}).email({message:"Email is not in valid format"}),phone:l.string().min(5,{message:t[r]["Dieses Feld ist erforderlich"]}),message:l.string().optional(),privacyCheck:l.literal(!0,{errorMap:()=>({message:"You must accept Privacy."})}),honeypot:l.union([l.string(),l.undefined()])}),{handleSubmit:z,register:o,formState:{errors:c}}=D({resolver:k(a)}),v=async x=>{u(x)};return e.jsxDEV("div",{"data-testid":"zep-contact-form-wrapper",children:[e.jsxDEV(A,{headline:p,tagline:g},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:47,columnNumber:7},globalThis),e.jsxDEV("p",{className:"zep-typography-headlineSM-fluid-cqi zep-mt-2.5 sm:zep-mt-3 zep-mb-1.5 zep-text-primary-default",children:t[r]["24/7"]},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:48,columnNumber:7},globalThis),e.jsxDEV(_,{isPatternPart:!0,className:"zep-mb-2.5 sm:zep-mb-3 md:zep-mb-4",linkLists:s||[]},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:51,columnNumber:7},globalThis),e.jsxDEV("form",{onSubmit:z(v),children:[e.jsxDEV("input",{type:"text",style:{display:"none"},...o("honeypot")},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:54,columnNumber:9},globalThis),e.jsxDEV("p",{className:"zep-typography-headlineSM-fluid-cqi zep-mt-1 md:zep-mt-2 zep-mb-2 zep-text-primary-default",children:t[r]["Schreiben Sie uns eine Nachricht"]},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:55,columnNumber:9},globalThis),e.jsxDEV(y,{label:t[r]["Ihre Nachricht"],...o("message"),className:"zep-h-[126px]"},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:59,columnNumber:9},globalThis),e.jsxDEV("p",{className:"zep-mb-0.5 zep-text-primary-default",children:t[r].Anrede},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:65,columnNumber:9},globalThis),e.jsxDEV("div",{className:"zep-flex zep-gap-2 zep-mb-2",children:[e.jsxDEV(V,{id:"Frau",label:t[r].Frau,...o("sex"),error:!!((f=c.sex)!=null&&f.message)},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:67,columnNumber:11},globalThis),e.jsxDEV(V,{id:"Herr",label:t[r].Herr,...o("sex"),error:!!((m=c.sex)!=null&&m.message)},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:73,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:66,columnNumber:9},globalThis),e.jsxDEV(F,{required:!0,...o("phone"),label:t[r].Telefonnummer,error:((b=c.phone)==null?void 0:b.message)&&t[r]["Dieses Feld ist erforderlich"]},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:81,columnNumber:9},globalThis),e.jsxDEV(T,{className:"zep-w-full",label:t[r]["Vor und Nachname"],...o("name"),error:(j=c.name)==null?void 0:j.message,required:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:87,columnNumber:9},globalThis),e.jsxDEV(T,{error:(h=c.email)==null?void 0:h.message,className:"zep-w-full",label:t[r]["E-Mail-Adresse"],...o("email"),required:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:94,columnNumber:9},globalThis),e.jsxDEV("div",{className:"zep-flex zep-items-center zep-text-primary-default",children:[e.jsxDEV(q,{...o("privacyCheck"),error:(n=c.privacyCheck)==null?void 0:n.message},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:103,columnNumber:11},globalThis),e.jsxDEV("p",{children:[`${t[r].privacy} `,e.jsxDEV("u",{children:e.jsxDEV("a",{href:i,children:t[r].privacyPolicy},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:110,columnNumber:15},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:109,columnNumber:13},globalThis),"."]},void 0,!0,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:107,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:102,columnNumber:9},globalThis),e.jsxDEV(S,{disabled:d,variant:L.Primary,className:"!zep-w-full zep-mb-2",type:"submit",children:d?t[r].Einreichung:t[r]["Anfrage Senden"]},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:116,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:53,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:46,columnNumber:5},globalThis)};try{E.displayName="ContactForm",E.__docgenInfo={description:"",displayName:"ContactForm",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(data: unknown) => void"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkLists:{defaultValue:null,description:"",name:"linkLists",required:!1,type:{name:"LinkListItemProps[]"}},locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"enum",value:[{value:'"en"'},{value:'"de"'},{value:'"de-AT"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},privacyPolicyUrl:{defaultValue:null,description:"",name:"privacyPolicyUrl",required:!0,type:{name:"string"}}}}}catch{}export{E as C};
