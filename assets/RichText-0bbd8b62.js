import{j as o}from"./jsx-dev-runtime-8ab8c10c.js";import{c as m}from"./clsx-0839fdbe.js";import{j as r}from"./index.es13-b84986ab.js";import{r as p}from"./index-b1e7e93e.js";import{b as v,l as C,e as R}from"./index.es16-c4bf1dde.js";import{i as N}from"./index.es30-95f1013f.js";import{a as u,G as h}from"./global-variants-0f433d85.js";const g=p.createContext({type:"bullet"}),f=({type:e="bullet",children:t,className:s})=>{const l=e==="bullet"?"ul":"ol";return r.jsx(g.Provider,{value:{type:e},children:r.jsx(l,{className:N("zep-typography-bodyText","zep-list-none","[&_ul]:zep-pl-2","[&_ol]:zep-pl-2","[counter-reset:section]",s),children:t})})},V=({children:e,className:t})=>{const{type:s}=p.useContext(g);return r.jsx("li",{className:N("zep-relative","zep-flex","zep-items-baseline","zep-py-0.5","[counter-increment:section]","before:zep-w-1.5","before:zep-h-1.5","before:zep-mr-0.75","before:zep-text-center","before:zep-shrink-0",{'before:[content:"•"]':s==="bullet"},{"before:[content:counter(section,lower-alpha)]":s==="alphabetical"},{'before:[content:counter(section)"."]':s==="numeric"},t),children:e})};f.Item=V;const E=({text:e,...t})=>{const{modifiers:s,missingModifierTypes:l}=z();return Object.keys(t).reduce((a,c)=>{if(!t[c])return a;const i=s[c];return i?r.jsx(i,{children:a}):(l.includes(c)||(console.warn(`[@strapi/block-react-renderer] No component found for modifier "${c}"`),l.push(c)),a)},r.jsx(r.Fragment,{children:e}))},D=["image"],B=e=>{const{children:t,type:s,...l}=e;if(s==="code"){const n=a=>a.reduce((c,i)=>i.type==="text"?c.concat(i.text):i.type==="link"?c.concat(n(i.children)):c,"");return{...l,plainText:n(e.children)}}return l},y=({content:e})=>{const{children:t,type:s,...l}=e,{blocks:n,missingBlockTypes:a}=z(),c=n[s];if(!c)return a.includes(s)||(console.warn(`[@strapi/block-react-renderer] No component found for block type "${s}"`),a.push(s)),null;if(D.includes(s))return r.jsx(c,{...l});if(s==="paragraph"&&t.length===1&&t[0].type==="text"&&t[0].text==="")return r.jsx("br",{});const i=B(e);return r.jsx(c,{...i,children:t.map((x,b)=>{if(x.type==="text"){const{type:q,...k}=x;return p.createElement(E,{...k,key:b})}return r.jsx(y,{content:x},b)})})},d={blocks:{paragraph:e=>r.jsx("p",{children:e.children}),quote:e=>r.jsx("blockquote",{children:e.children}),code:e=>r.jsx("pre",{children:r.jsx("code",{children:e.plainText})}),heading:({level:e,children:t})=>{switch(e){case 1:return r.jsx("h1",{children:t});case 2:return r.jsx("h2",{children:t});case 3:return r.jsx("h3",{children:t});case 4:return r.jsx("h4",{children:t});case 5:return r.jsx("h5",{children:t});case 6:return r.jsx("h6",{children:t})}},link:e=>r.jsx("a",{href:e.url,children:e.children}),list:e=>e.format==="ordered"?r.jsx("ol",{children:e.children}):r.jsx("ul",{children:e.children}),"list-item":e=>r.jsx("li",{children:e.children}),image:e=>r.jsx("img",{src:e.image.url,alt:e.image.alternativeText||void 0})},modifiers:{bold:e=>r.jsx("strong",{children:e.children}),italic:e=>r.jsx("em",{children:e.children}),underline:e=>r.jsx("u",{children:e.children}),strikethrough:e=>r.jsx("del",{children:e.children}),code:e=>r.jsx("code",{children:e.children})},missingBlockTypes:[],missingModifierTypes:[]},T=p.createContext(d),_=({children:e,value:t=d})=>{const s=p.useMemo(()=>t,[t]);return r.jsx(T.Provider,{value:s,children:e})};function z(){return p.useContext(T)}const w=e=>{const t={...d.blocks,...e.blocks},s={...d.modifiers,...e.modifiers},l=p.useRef([]),n=p.useRef([]);return r.jsx(_,{value:{blocks:t,modifiers:s,missingBlockTypes:l.current,missingModifierTypes:n.current},children:e.content.map((a,c)=>r.jsx(y,{content:a},c))})},M=({level:e,children:t,className:s})=>e<=3?o.jsxDEV("h3",{className:m("zep-typography-headlineMD-fluid-cqi","[&:not(:last-child)]:zep-pb-2",s),children:t},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:14,columnNumber:5},globalThis):o.jsxDEV("h4",{className:m("zep-typography-headlineSM-fluid-cqi","[&:not(:last-child)]:zep-pb-1",s),children:t},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:16,columnNumber:5},globalThis),P=({children:e,className:t})=>o.jsxDEV("p",{className:m("[&:not(:last-child)]:zep-pb-2","zep-typography-bodyText",t),children:e},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:22,columnNumber:3},globalThis),Z=({ordered:e,items:t})=>o.jsxDEV(f,{className:"[&:not(:last-child)]:zep-pb-2",type:e?"numeric":"bullet",children:t},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:27,columnNumber:3},globalThis),j=({content:e,children:t,variant:s=h.Zps,className:l})=>{const n={"zep-text-typography-light-100":s===u.ZpsBg||s===u.CatBg,"zep-text-typography-dark-100":s===h.Cat,"zep-text-primary-default":s===h.Zps},a={"zep-text-yellow-500":s===u.CatBg||s===u.ZpsBg,"zep-text-typography-dark-100":s===h.Cat,"zep-text-primary-default":s===h.Zps};return o.jsxDEV("div",{className:m(n,"zep-container","zep-max-w-[944px]","xl:zep-mx-auto",l),"data-testid":"zep-richtext",children:[o.jsxDEV(w,{content:e,blocks:{paragraph:({children:c})=>o.jsxDEV(P,{className:m(n),children:c},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:55,columnNumber:13},globalThis),heading:({children:c,level:i})=>o.jsxDEV(M,{className:m(n,"zep-font-500"),level:i,children:c},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:60,columnNumber:13},globalThis),link:({children:c,url:i})=>o.jsxDEV(v,{as:"span",className:m(a),href:i,hasIcon:!1,label:c,mode:C.Inline,target:R.Blank},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:65,columnNumber:13},globalThis),"list-item":({children:c})=>o.jsxDEV(f.Item,{children:o.jsxDEV("span",{className:"zep-break-all zep-w-full",children:c},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:75,columnNumber:53},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:75,columnNumber:42},globalThis),list:({children:c,format:i})=>o.jsxDEV(Z,{className:m(n),ordered:i==="ordered",items:c},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:77,columnNumber:13},globalThis)},modifiers:{bold:({children:c})=>o.jsxDEV("span",{className:"zep-typography-bodyStrong",children:c},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:81,columnNumber:35},globalThis),italic:({children:c})=>o.jsxDEV("span",{className:"zep-italic",children:c},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:82,columnNumber:37},globalThis)}},void 0,!1,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:50,columnNumber:7},globalThis),t]},void 0,!0,{fileName:"/home/circleci/project/src/components/rich-text/RichText.tsx",lineNumber:46,columnNumber:5},globalThis)};try{j.displayName="RichText",j.__docgenInfo={description:"",displayName:"RichText",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"BlocksContent"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{j as R};
