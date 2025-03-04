import{j as e}from"./jsx-dev-runtime-8ab8c10c.js";import{z as m,c as t,u as E,R as T,P as F,I as V,C as q,t as k}from"./Radio-28d9dd5f.js";import{H as _}from"./HeaderLongComponent-5d26619f.js";import{M as A}from"./MultiLinkList-6331df16.js";import{h as S}from"./index.es13-cfbbaaf2.js";import{c as x}from"./clsx-0839fdbe.js";import{r as C}from"./index-b1e7e93e.js";import{B as w,Z as L}from"./ZpsButton-237503bb.js";const j=C.forwardRef(({disabled:i=!1,label:c,message:u,placeholder:N,readOnly:r=!1,state:n="default",totalCharacters:g=500,...o},l)=>{const a=n==="error",[z,p]=C.useState(""),d=h=>{var y;(y=o.onChange)==null||y.call(o,h),p(h.target.value)},s=i||r,f=a?"zep-text-error":n==="info"?"zep-text-info":"",b=x("zep-block","zep-justify-between","zep-border-solid","zep-pl-1","zep-py-0.75","zep-font-roboto","zep-w-full","zep-outline-none","placeholder:zep-text-typography-dark-100/70","zep-text-primary-default",a?"zep-border-2":"zep-border-1","zep-pr-0.75",i?"zep-text-opacity-disabled":"zep-text-primary-default",{"zep-bg-background-medium":r},{"zep-border-primary-default":!i&&!a},{"zep-border-opacity-disabled":i},{"zep-border-error":a},{"zep-active:ring":!s},{"zep-ring-offset-1":!s},{"focus-visible:zep-ring":!s},{"zep-ring-focus":!s},{"zep-cursor-not-allowed":s},o==null?void 0:o.className);return e.jsxDEV("div",{className:x("zep-relative zep-inline-block zep-text-left zep-w-full",{"zep-cursor-not-allowed zep-opacity-disabled":i}),"data-testid":"zep-text-area",children:[c&&e.jsxDEV("div",{className:"zep-block zep-mb-0.5 zep-text-primary-default",children:[c,!o.required&&e.jsxDEV("span",{className:"zep-ml-0.25",children:"(optional)"},void 0,!1,{fileName:"/home/circleci/project/src/components/form-fields/text-area/TextArea.tsx",lineNumber:70,columnNumber:33},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/form-fields/text-area/TextArea.tsx",lineNumber:68,columnNumber:11},globalThis),e.jsxDEV("textarea",{id:o.id,ref:l,maxLength:500,autoComplete:"off",placeholder:r?void 0:N,readOnly:r,disabled:i||r,"data-testid":"zep-text-area-input",...o,onChange:d,className:b},void 0,!1,{fileName:"/home/circleci/project/src/components/form-fields/text-area/TextArea.tsx",lineNumber:73,columnNumber:9},globalThis),e.jsxDEV("div",{className:x("zep-mt-0.25","zep-text-primary-default","zep-text-0.875","zep-flex zep-h-[40px]",f),children:[u&&e.jsxDEV("div",{className:x("zep-flex",{"zep-text-error":a}),children:[n!=="default"&&e.jsxDEV(S,{name:a?"warning-triangle-filled":"info-circle-filled",role:"img",size:24,className:"zep-mr-0.5 zep-shrink-0"},void 0,!1,{fileName:"/home/circleci/project/src/components/form-fields/text-area/TextArea.tsx",lineNumber:98,columnNumber:17},globalThis),e.jsxDEV("span",{className:"zep-mt-0.125",children:u},void 0,!1,{fileName:"/home/circleci/project/src/components/form-fields/text-area/TextArea.tsx",lineNumber:105,columnNumber:15},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/form-fields/text-area/TextArea.tsx",lineNumber:96,columnNumber:13},globalThis),e.jsxDEV("div",{className:"zep-ml-auto zep-mt-0.125 zep-pl-0.5 zep-flex-shrink-0 zep-text-primary-default zep-mb-4","data-testid":"zep-text-area-length-indicator",children:[z.length," / ",g]},void 0,!0,{fileName:"/home/circleci/project/src/components/form-fields/text-area/TextArea.tsx",lineNumber:108,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/form-fields/text-area/TextArea.tsx",lineNumber:86,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/form-fields/text-area/TextArea.tsx",lineNumber:61,columnNumber:7},globalThis)});try{j.displayName="TextArea",j.__docgenInfo={description:"",displayName:"TextArea",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},state:{defaultValue:{value:"default"},description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"info"'}]}},totalCharacters:{defaultValue:{value:"500"},description:"",name:"totalCharacters",required:!1,type:{name:"number"}}}}}catch{}const D=({onSubmit:i,headline:c,tagline:u,linkLists:N,locale:r,loading:n})=>{var p,d,s,f,v,b;const g=m.object({sex:m.string().min(1,{message:"Req"}),name:m.string().min(1,{message:t[r]["Dieses Feld ist erforderlich"]}),email:m.string().min(1,{message:t[r]["Dieses Feld ist erforderlich"]}).email({message:"Email is not in valid format"}),phone:m.string().min(5,{message:t[r]["Dieses Feld ist erforderlich"]}),message:m.string().optional(),privacyCheck:m.literal(!0,{errorMap:()=>({message:"You must accept Privacy."})})}),{handleSubmit:o,register:l,formState:{errors:a}}=E({resolver:k(g)}),z=async h=>{i(h)};return e.jsxDEV("div",{"data-testid":"zep-contact-form-wrapper",children:[e.jsxDEV(_,{headline:c,tagline:u},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:46,columnNumber:7},globalThis),e.jsxDEV("p",{className:"zep-typography-headlineSM-fluid-cqi zep-mt-2.5 sm:zep-mt-3 zep-mb-1.5 zep-text-primary-default",children:t[r]["24/7"]},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:47,columnNumber:7},globalThis),e.jsxDEV(A,{isPatternPart:!0,className:"zep-mb-2.5 sm:zep-mb-3 md:zep-mb-4",linkLists:N||[]},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:50,columnNumber:7},globalThis),e.jsxDEV("form",{onSubmit:o(z),children:[e.jsxDEV("p",{className:"zep-typography-headlineSM-fluid-cqi zep-mt-1 md:zep-mt-2 zep-mb-2 zep-text-primary-default",children:t[r]["Schreiben Sie uns eine Nachricht"]},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:53,columnNumber:9},globalThis),e.jsxDEV(j,{label:t[r]["Ihre Nachricht"],...l("message"),className:"zep-h-[126px]"},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:57,columnNumber:9},globalThis),e.jsxDEV("p",{className:"zep-mb-0.5 zep-text-primary-default",children:t[r].Anrede},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:63,columnNumber:9},globalThis),e.jsxDEV("div",{className:"zep-flex zep-gap-2 zep-mb-2",children:[e.jsxDEV(T,{id:"Frau",label:t[r].Frau,...l("sex"),error:!!((p=a.sex)!=null&&p.message)},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:65,columnNumber:11},globalThis),e.jsxDEV(T,{id:"Herr",label:t[r].Herr,...l("sex"),error:!!((d=a.sex)!=null&&d.message)},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:71,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:64,columnNumber:9},globalThis),e.jsxDEV(F,{required:!0,...l("phone"),label:t[r].Telefonnummer,error:((s=a.phone)==null?void 0:s.message)&&t[r]["Dieses Feld ist erforderlich"]},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:79,columnNumber:9},globalThis),e.jsxDEV(V,{className:"zep-w-full",label:t[r]["Vor und Nachname"],...l("name"),error:(f=a.name)==null?void 0:f.message,required:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:85,columnNumber:9},globalThis),e.jsxDEV(V,{error:(v=a.email)==null?void 0:v.message,className:"zep-w-full",label:t[r]["E-Mail-Adresse"],...l("email"),required:!0},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:92,columnNumber:9},globalThis),e.jsxDEV(q,{...l("privacyCheck"),error:(b=a.privacyCheck)==null?void 0:b.message,labelhtml:'<p>Informationen zum Umgang mit Ihren personenbezogenen Daten finden Sie in unserer <u><a href="datensuc" target="_blank">Datenschutzerklärung</a></u>.</p>'},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:100,columnNumber:9},globalThis),e.jsxDEV(w,{disabled:n,variant:L.Primary,className:"!zep-w-full zep-mb-2",type:"submit",children:n?t[r].Einreichung:t[r]["Anfrage Senden"]},void 0,!1,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:106,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:52,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/contact-form/ContactForm.tsx",lineNumber:45,columnNumber:5},globalThis)};try{D.displayName="ContactForm",D.__docgenInfo={description:"",displayName:"ContactForm",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(data: unknown) => void"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkLists:{defaultValue:null,description:"",name:"linkLists",required:!1,type:{name:"LinkListItemProps[]"}},locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"enum",value:[{value:'"en"'},{value:'"de"'},{value:'"de-AT"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}}}}}catch{}export{D as C};
