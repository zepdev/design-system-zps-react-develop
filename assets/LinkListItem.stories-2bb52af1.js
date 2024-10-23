import{j as e,c as i}from"./clsx-5d9ed152.js";import{L as u,e as g,l as w}from"./index.es16-5d8ea6d0.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./index.es13-7ff7a9e3.js";import"./index.es29-7715336a.js";const s=({headline:n,description:r,theme:p="power-systems",links:h})=>{const l=p==="power-systems"?"zep-text-primary-default":"zep-text-typography-dark-100";return e.jsxDEV("div",{className:i("zep-flex","zep-gap-1.5","zep-p-1.5","sm:zep-p-2","md:zep-p-2.5","zep-1.5","zep-flex-col","zep-items-start","zep-max-w-[774px]","zep-min-w-[290px]","zep-bg-background-medium"),"data-testid":"zep-link-list",children:[n&&e.jsxDEV("h4",{"data-testid":"link-list-headline",className:i("zep-typography-headlineSM-fluid-cqi","zep-break-all",l),children:n},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:27,columnNumber:9},globalThis),r&&e.jsxDEV("p",{"data-testid":"link-list-description",className:i("zep-typography-bodyText","zep-break-all",l),children:r},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:35,columnNumber:9},globalThis),e.jsxDEV("div",{"data-testid":"link-list-links",className:i("zep-flex","zep-flex-col","zep-gap-1",l),children:h.map((o,d)=>e.jsxDEV(u,{label:o.label,icon:o.icon,href:o.href,iconPlacement:"before",hasIcon:!0,target:g.Blank,mode:w.Inline},d,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:47,columnNumber:11},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:42,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/link-list-item/LinkListItem.tsx",lineNumber:10,columnNumber:5},globalThis)};try{s.displayName="LinkListItem",s.__docgenInfo={description:"",displayName:"LinkListItem",props:{headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},links:{defaultValue:null,description:"",name:"links",required:!0,type:{name:"LinkProps[]"}},theme:{defaultValue:{value:"power-systems"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"cat"'},{value:'"power-systems"'}]}}}}}catch{}const N={title:"Components/LinkListItem",component:s,tags:["autodocs"],argTypes:{theme:{children:{control:{type:"select",options:["cat","power-systems"]}}}}},t={args:{links:[{icon:"arrow-right",href:"https://www.google.com",label:"link inline",hasIcon:!0},{icon:"arrow-right",href:"https://www.google.com",label:"link inline",hasIcon:!0},{icon:"arrow-right",href:"https://www.google.com",label:"link inline",hasIcon:!0},{icon:"arrow-right",href:"https://www.google.com",label:"link inline",hasIcon:!0}],headline:"Headline optional",description:"Description optional",theme:"power-systems"}};var a,c,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    links: [{
      icon: 'arrow-right',
      href: 'https://www.google.com',
      label: 'link inline',
      hasIcon: true
    }, {
      icon: 'arrow-right',
      href: 'https://www.google.com',
      label: 'link inline',
      hasIcon: true
    }, {
      icon: 'arrow-right',
      href: 'https://www.google.com',
      label: 'link inline',
      hasIcon: true
    }, {
      icon: 'arrow-right',
      href: 'https://www.google.com',
      label: 'link inline',
      hasIcon: true
    }],
    headline: 'Headline optional',
    description: 'Description optional',
    theme: 'power-systems'
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const I=["Default"];export{t as Default,I as __namedExportsOrder,N as default};
//# sourceMappingURL=LinkListItem.stories-2bb52af1.js.map
