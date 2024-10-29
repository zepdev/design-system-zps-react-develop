import{j as e,c as h}from"./clsx-5d9ed152.js";import{L as F,l as U,e as $}from"./index.es16-1f646d4e.js";import{j as b}from"./index.es13-55dfe41f.js";import{a as D}from"./index.es29-7715336a.js";import{r as V}from"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";const C=V.createContext({type:"bullet"}),f=({type:t="bullet",children:s,className:i})=>{const r=t==="bullet"?"ul":"ol";return b.jsx(C.Provider,{value:{type:t},children:b.jsx(r,{className:D("zep-typography-bodyText","zep-list-none","[&_ul]:zep-pl-2","[&_ol]:zep-pl-2","[counter-reset:section]",i),children:s})})},H=({children:t})=>{const{type:s}=V.useContext(C);return b.jsx("li",{className:D("zep-relative","zep-flex","zep-items-baseline","zep-py-0.5","[counter-increment:section]","before:zep-w-1.5","before:zep-h-1.5","before:zep-mr-0.75","before:zep-text-center","before:zep-shrink-0",{'before:[content:"•"]':s==="bullet"},{"before:[content:counter(section,lower-alpha)]":s==="alphabetical"},{"before:[content:counter(section)]":s==="numeric"}),children:t})};f.Item=H;const K=({level:t,children:s})=>{const i=t==="header-three"?"zep-typography-headlineSM-fluid-cqi zep-mb-1":"zep-typography-headlineMD-fluid-cqi zep-mb-2";return t==="header-three"?e.jsxDEV("h3",{className:h(i),children:s},void 0,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:16,columnNumber:5},globalThis):e.jsxDEV("h4",{className:h(i),children:s},void 0,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:18,columnNumber:5},globalThis)},G=({children:t})=>e.jsxDEV("p",{className:"zep-mb-2",children:t},void 0,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:24,columnNumber:3},globalThis),J=({ordered:t,items:s})=>e.jsxDEV(f,{className:"zep-mb-2",type:t?"numeric":"bullet",children:s.map((i,r)=>e.jsxDEV(f.Item,{children:i},r,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:31,columnNumber:7},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:29,columnNumber:3},globalThis),g=({content:t,children:s,textColor:i})=>{const r=i==="white"?"!zep-text-typography-light-100":i==="black"?"!zep-text-typography-dark-100":"zep-text-indigo-500",S=(m,c,L)=>{const{type:N,text:w,inlineStyleRanges:_=[],entityRanges:k=[],items:q=[],ordered:O}=m,T=(l,n,d,o="style")=>{let a=[],p=0;return n.forEach(({offset:u,length:j,style:I,key:R})=>{u>p&&a.push({text:l.slice(p,u),style:null,url:null});const M=l.slice(u,u+j),B=o==="style"&&I||null,P=o==="entity"&&R!==void 0&&d?d[R].data.url:null;a.push({text:M,style:B,url:P}),p=u+j}),p<l.length&&a.push({text:l.slice(p),style:null,url:null}),a},A=T(w||"",k,L,"entity").flatMap((l,n)=>l.url?e.jsxDEV(e.Fragment,{children:e.jsxDEV(F,{href:l.url,as:"span",hasIcon:!1,label:l.text,mode:U.Inline,target:$.Blank},n,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:74,columnNumber:13},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:73,columnNumber:11},globalThis):T(l.text,_,void 0,"style").map((o,a)=>o.style==="BOLD"?e.jsxDEV("span",{className:"zep-typography-bodyStrong",children:o.text},n+"-"+a,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:90,columnNumber:13},globalThis):o.style==="ITALIC"?e.jsxDEV("span",{className:"zep-italic",children:o.text},n+"-"+a,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:96,columnNumber:13},globalThis):e.jsxDEV("span",{children:o.text},n+"-"+a,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:101,columnNumber:16},globalThis))),y=e.jsxDEV("span",{className:h(r),children:A.map((l,n)=>e.jsxDEV("span",{children:l},`${c}-${n}`,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:109,columnNumber:11},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:107,columnNumber:7},globalThis);switch(N){case"header-three":case"header-four":return e.jsxDEV(K,{className:h(r,"zep-font-500"),level:N,children:y},c,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:118,columnNumber:11},globalThis);case"unstyled":return e.jsxDEV(G,{className:r,children:y},c,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:124,columnNumber:11},globalThis);case"list":return e.jsxDEV(J,{className:r,ordered:!!O,items:q},c,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:129,columnNumber:16},globalThis);default:return null}};return e.jsxDEV("div",{className:h(r,"zep-container","md:zep-w-[944px]","zep-mx-auto"),"data-testid":"zep-richtext",children:[t.blocks.map((m,c)=>S(m,c,t.entityMap)),t.images.map((m,c)=>e.jsxDEV("div",{children:e.jsxDEV("img",{className:"zep-h-auto zep-max-w-full zep-mb-1",src:m.src,alt:m.alt},void 0,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:143,columnNumber:11},globalThis)},c,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:142,columnNumber:9},globalThis)),s]},void 0,!0,{fileName:"/home/circleci/project/src/components/richText/RichText.tsx",lineNumber:136,columnNumber:5},globalThis)};try{g.displayName="RichText",g.__docgenInfo={description:"",displayName:"RichText",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"Content"}},textColor:{defaultValue:null,description:"",name:"textColor",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"indigo"'},{value:'"black"'}]}}}}}catch{}const le={title:"Components/RichText",component:g,tags:["autodocs"],argTypes:{textColor:{control:{type:"radio",options:["indigo","white","black"]}}}},Q={blocks:[{type:"header-three",depth:0,text:"Li Europan lingues tot Europa",inlineStyleRanges:[],entityRanges:[],items:[],ordered:!1},{type:"header-four",depth:0,text:"Li Europan lingues",inlineStyleRanges:[],entityRanges:[],items:[],ordered:!1},{type:"unstyled",depth:0,text:"existent ae tareie eun myth Por ie ntiemusic sport etc, tot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular",inlineStyleRanges:[{offset:12,length:10,style:"BOLD"}],entityRanges:[{offset:12,length:10,key:0}],items:[],ordered:!1},{type:"list",ordered:!0,items:["First ordered item","Second ordered item","Third ordered item"],depth:0,text:"",inlineStyleRanges:[],entityRanges:[]},{type:"list",ordered:!1,items:["On refusa continuar payar custosi traductores.","pronunciation e plu commun paroles payar custosi traductores.","At solmen va esser grammatica, pronunciation e plu commun paroles."],depth:0,text:"",inlineStyleRanges:[],entityRanges:[]}],entityMap:{0:{type:"LINK",mutability:"MUTABLE",data:{url:"https://www.google.com"}}},images:[{src:"https://via.placeholder.com/600x400",alt:"Example Image",width:"600px",height:"400px"}],unstyled:[{type:"unstyled",depth:0,text:"Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic. Li franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental; in fact, it va esser Occidental. A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.",inlineStyleRanges:[],entityRanges:[]}]},x={args:{textColor:"indigo",content:Q,children:e.jsxDEV("p",{className:"zep-mb-1",children:"This is Custom"},void 0,!1,{fileName:"/home/circleci/project/src/components/richText/RichText.stories.tsx",lineNumber:98,columnNumber:15},globalThis)}};var z,E,v;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: ({
    textColor: 'indigo',
    content: sampleContent,
    children: <p className="zep-mb-1">This is Custom</p>
  } as RichTextProps)
}`,...(v=(E=x.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};const ie=["Default"];export{x as Default,ie as __namedExportsOrder,le as default};
//# sourceMappingURL=RichText.stories-1e75f3b6.js.map
