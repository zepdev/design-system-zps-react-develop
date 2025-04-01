import{j as e}from"./jsx-runtime-6f6342d7.js";import{j as h}from"./index.es35-79e31a69.js";import{i as m}from"./index.es31-95f1013f.js";import{r as T}from"./index-b1e7e93e.js";import{h as D,M as E}from"./index.es13-373f5050.js";import{i as v,S as F,y as $}from"./index.es4-97fd14ec.js";import{f as R}from"./index.es24-551679ca.js";var t=(a=>(a.Zps="ZPS",a.Cat="CAT",a.Zsd="ZSD",a.Default="Default",a))(t||{}),j=(a=>(a.Text="text",a.Button="button",a))(j||{}),c=(a=>(a.Primary="primary",a.Secondary="secondary",a.SecondaryCat="secondary-cat",a.SecondaryZps="secondary-zps",a))(c||{});const W={[c.Primary]:["zep-bg-secondary-default","zep-text-secondary-contrast","enabled:hover:zep-bg-secondary-hover","enabled:hover:zep-text-secondary-contrast","enabled:active:zep-bg-secondary-active","enabled:active:zep-text-secondary-contrast","disabled:zep-opacity-disabled"],[c.SecondaryZps]:["zep-bg-transparent","zep-text-typography-primary-default","enabled:hover:zep-bg-primary-hover","enabled:hover:zep-text-primary-contrast","enabled:active:zep-bg-primary-active","enabled:active:zep-text-primary-contrast","disabled:zep-opacity-disabled","zep-ring-2","zep-ring-inset","zep-ring-primary-default","enabled:hover:zep-ring-0","enabled:active:zep-ring-0","disabled:zep-ring-opacity-disabled"],[c.Secondary]:["zep-bg-transparent","zep-ring-2","zep-ring-inset","zep-text-secondary-default","zep-ring-secondary-default","enabled:hover:zep-bg-secondary-hover","enabled:hover:zep-ring-0","enabled:hover:zep-text-secondary-contrast","enabled:active:zep-bg-secondary-active","enabled:active:zep-text-secondary-contrast","enabled:active:zep-ring-0","disabled:zep-opacity-disabled"],[c.SecondaryCat]:["zep-bg-transparent","zep-ring-2","zep-ring-inset","zep-ring-neutral-dark-default","zep-text-neutral-dark-default","enabled:hover:zep-text-primary-contrast","enabled:hover:zep-ring-0","enabled:active:zep-ring-0","enabled:hover:zep-bg-neutral-dark-hover","enabled:active:zep-bg-neutral-dark-active","enabled:active:zep-text-primary-contrast","disabled:zep-bg-opacity-disabled"]},C=h(["zep-typography-button","zep-rounded-button","zep-px-1","zep-py-0.75","zep-flex","zep-gap-0.5","zep-justify-center","focus-visible:zep-outline","focus-visible:zep-outline-3","focus-visible:zep-outline-offset-1","focus-visible:zep-outline-focus"],{variants:{variant:W},defaultVariants:{variant:c.Primary}}),H=({className:a,variant:p,isLoading:r=!1,label:n,children:l,icon:s,labelClass:o,iconPosition:y="left",...g})=>{const u=!n||n===""?C({variant:p}).replace("zep-px-1","zep-px-0.75"):C({variant:p});return e.jsxs("button",{className:v(u,a,"zep-w-full sm:zep-w-auto"),...g,children:[r&&e.jsx("i",{className:"mr-zep-0_5","data-testid":"loading-icon",children:"loading icon"}),e.jsxs(R,{gap:"0.5",className:y==="left"?`zep-flex-row-reverse ${o}`:`${o}`,children:[n??l,s&&e.jsx(D,{name:s})]})]})},P=T.createContext({variant:t.Zps}),w=()=>T.useContext(P),L=({children:a,...p})=>e.jsx("tbody",{...p,children:a}),O=({children:a,className:p,isFirstRow:r,align:n,...l})=>{const{variant:s}=w(),o={[t.Zps]:["zep-text-typography-primary-default "],[t.Cat]:["zep-text-typography-dark-100"],[t.Zsd]:["zep-text-typography-dark-100"],[t.Default]:["zep-text-typography-dark-100"]},y=h([` zep-inline-block
        sm:zep-text-unset
        sm:zep-py-0.5
        zep-typography-bodyText
        zep-whitespace-normal
        zep-max-w-[250px]
        lg:zep-max-w-[400px]
      `],{variants:{variant:o},defaultVariants:{variant:t.Zps}});return e.jsxs("td",{className:m("zep-justify-between zep-break-words zep-whitespace-normal sm:zep-table-cell zep-relative zep-py-0.75 sm:zep-py-0.5 zep-px-1 md:zep-px-1.5 zep-bg-greyscale-0 lg:zep-max-w- zep-group",p),style:{textAlign:n},...l,children:[e.jsx("span",{style:{width:"max-content"},className:v(y({variant:s}),s===t.Zps?"[&svg]:zep-fill-indigo-500":"[&svg]:zep-fill-darkgrey-500"),children:a}),e.jsx("hr",{className:"group-first:zep-block zep-absolute zep-h-[1px] zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-400"})]})},G=({children:a,className:p,...r})=>{const{variant:n}=w(),l={[t.Zps]:["zep-bg-indigo-500"],[t.Cat]:["zep-bg-yellow-500"],[t.Zsd]:["zep-bg-greyscale-200"],[t.Default]:["zep-bg-greyscale-0"]},s=h([`
      sm:zep-table-row-group`],{variants:{variant:l},defaultVariants:{variant:t.Zps}});return e.jsx("thead",{className:v(s({variant:n,className:p})),...r,children:a})},I=({children:a,className:p,align:r="left",...n})=>{const{variant:l}=w(),s={[t.Zps]:["zep-text-typography-light-100"],[t.Cat]:["zep-text-typography-dark-100"],[t.Zsd]:["zep-text-typography-dark-100"],[t.Default]:["zep-text-typography-dark-100"]},o=h([`zep-inline-block
      sm:zep-text-unset
      sm:zep-py-0.5
      zep-typography-bodyText
      zep-break-words
      zep-whitespace-normal
      zep-max-w-[250px]
      lg:zep-max-w-[400px]
      `],{variants:{variant:s},defaultVariants:{variant:t.Zps}});return e.jsxs("th",{className:m("zep-w-auto zep-relative zep-py-0.75 sm:zep-py-0.5 zep-px-1 md:zep-px-1.5  lg:zep-break-words",p),style:{textAlign:r},...n,children:[e.jsx("span",{style:{width:"max-content"},className:v(o({variant:l})),children:a}),e.jsx("hr",{className:"zep-absolute zep-border-t-2 zep-bottom-[0] zep-left-[0] zep-right-[0] zep-text-greyscale-900"})]})},S=({children:a,className:p,...r})=>e.jsx("tr",{className:m(" zep-mb-2 zep-table-row sm:zep-sm-[0px]",p),...r,children:a}),X=({children:a,className:p,variant:r=t.Zps,maxWidth:n,maxHeight:l,fullWidth:s,buttonLabel:o,descriptionBottom:y,descriptionTop:g,dataSource:u,columns:k,align:x,tableButtonOnClick:N,...A})=>{const B=(d,z,b,f,i)=>{switch(f){case j.Button:return e.jsx(F,{icon:i==null?void 0:i.iconName,variant:r===t.Zps?$.Tertiary:$.DarkTertiary,onClick:(i==null?void 0:i.onClick)===void 0?void 0:()=>i.onClick(d,z,b),children:i==null?void 0:i.title});case j.Text:default:return Object.keys(E).includes(d)?e.jsx(D,{name:d}):d}};return e.jsx(P.Provider,{value:{variant:r},children:e.jsxs(e.Fragment,{children:[g&&e.jsx("div",{className:`zep-mb-2.5 ${r===t.Zps?"zep-text-typography-primary-default":"zep-text-typography-dark-100"}`,children:e.jsx("p",{children:g})}),e.jsx("div",{className:m("zep-overflow-scroll zep-w-auto",p,{"sm:zep-w-auto":s}),style:{maxWidth:n,maxHeight:l},"data-testid":"zep-table",children:e.jsxs("table",{className:m("zep-table zep-w-auto",{"sm:zep-w-full":s},"zep-table-auto"),...A,children:[e.jsx(G,{children:e.jsx(S,{children:k.map(({title:d,key:z},b)=>e.jsx(I,{className:m({"sm:zep-sticky sm:zep-left-[0] sm:zep-z-20 sm:zep-drop-shadow-lg":b===0,"zep-bg-indigo-500":r===t.Zps,"zep-bg-yellow-500":r===t.Cat,"zep-bg-greyscale-200":r===t.Zsd}),align:x,children:d},`table-align-${x}-head-cell-${z}`))})}),e.jsx(L,{children:u.map((d,z)=>e.jsx(S,{children:k.map(({key:b,dataIndex:f,props:i,renderAs:V},Z)=>e.jsx(O,{align:x,isFirstRow:z===0,className:Z===0?"sm:zep-sticky sm:zep-left-[0] sm:zep-z-20  sm:zep-drop-shadow-lg":"",children:B(d[f],d,z,V,i)},`table-align-${x}-cell-${z}-${b}-${Z}`))},`table-align-${x}-row-${z}`))})]})}),y&&e.jsx("div",{className:`zep-my-2.5 ${r===t.Zps?"zep-text-typography-primary-default":"zep-text-typography-dark-100"}`,children:e.jsx("p",{children:y})}),o&&N&&e.jsx("div",{children:e.jsx(H,{label:o,variant:c.Primary,labelClass:"zep-text-indigo-500",onClick:N})})]})})};export{X as p,t as r};
