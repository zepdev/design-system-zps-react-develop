import{j as e}from"./jsx-dev-runtime-8ab8c10c.js";import{c as o}from"./clsx-0839fdbe.js";import{b as x,e as v,l as z}from"./index.es16-55d8eb1a.js";import{G as I}from"./global-variants-0f433d85.js";import{H as j}from"./HeaderLongComponent-e0db3b7f.js";import{L}from"./Layout-cb684865.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./index.es13-b84986ab.js";import"./index.es29-7715336a.js";import"./ZpsButton-31f62599.js";import"./index.es24-1cd7062f.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";const s=({linkChain:r,contentItems:a,headline:c,variant:k=I.Zps,...f})=>e.jsxDEV(L,{className:"zep-flex zep-flex-col md:zep-gap-4 sm:zep-gap-3 zep-gap-2.5 zep-w-full",children:[c&&e.jsxDEV(j,{headline:c,...f,variant:k},void 0,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:18,columnNumber:20},globalThis),e.jsxDEV("div",{className:"zep-w-full zep-overflow-x-auto",children:e.jsxDEV("div",{className:"zep-w-fit zep-flex zep-items-stretch",children:a.map(({linkItems:b=[],headline:C,listItems:N=[]},m)=>e.jsxDEV("div",{className:o("[&:not(:last-child)]:zep-mr-2","[&:not(:last-child)]:md:zep-mr-2.5"),children:e.jsxDEV("div",{className:o("zep-relative zep-bg-indigo-500 zep-text-greyscale-0 zep-w-[300px] zep-p-1.5 zep-h-full"),children:[e.jsxDEV("div",{className:o("zep-flex","zep-flex-col","zep-items-start"),children:[e.jsxDEV("h4",{"data-testid":"process-chain-headline",className:"zep-typography-headlineSM-fluid-cqi  zep-break-all",children:C},void 0,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:26,columnNumber:19},globalThis),r?b.map((i,l)=>e.jsxDEV("div",{className:"zep-mt-1 ",children:e.jsxDEV(x,{label:"inline link",iconPlacement:"before",icon:i.icon,href:i.link,hasIcon:!0,target:v.Blank,mode:z.Inline},void 0,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:33,columnNumber:25},globalThis)},l,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:32,columnNumber:23},globalThis)):N.map((i,l)=>e.jsxDEV("ul",{className:"zep-mt-1 zep-pl-1.5 ",children:e.jsxDEV("li",{className:"zep-list-disc",children:i},void 0,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:46,columnNumber:25},globalThis)},l,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:45,columnNumber:23},globalThis))]},void 0,!0,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:25,columnNumber:17},globalThis),m<a.length-1&&e.jsxDEV("div",{className:"zep-mr-1.5 zep-absolute zep-border-t-transparent zep-border-b-transparent zep-border-t-[18px] zep-border-b-[18px] zep-top-1/3 zep-left-[300px] zep-border-l-[16px] zep-border-l-indigo-500 zep-translate-y-1/2"},void 0,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:51,columnNumber:19},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:23,columnNumber:15},globalThis)},m,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:22,columnNumber:13},globalThis))},void 0,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:20,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:19,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/process-chain/ProcessChain.tsx",lineNumber:17,columnNumber:5},globalThis);try{s.displayName="ProcessChain",s.__docgenInfo={description:"",displayName:"ProcessChain",props:{contentItems:{defaultValue:null,description:"",name:"contentItems",required:!0,type:{name:"ContentItem[]"}},linkChain:{defaultValue:null,description:"",name:"linkChain",required:!0,type:{name:"boolean"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}}}}}catch{}const B={title:"Components/ProcessChain",component:s,tags:["autodocs"],argTypes:{}},n={args:{linkChain:!0,contentItems:[{headline:"Link Chain 1",linkItems:[{icon:"arrow-long-right",link:"https://www.google.com"},{icon:"arrow-long-right",link:"https://www.example.com"},{icon:"arrow-long-right",link:"https://www.stackoverflow.com"}]},{headline:"Link Chain  2",linkItems:[{icon:"arrow-long-right",link:"https://www.github.com"},{icon:"arrow-long-right",link:"https://www.gitlab.com"},{icon:"arrow-long-right",link:"https://www.gitlab.com"},{icon:"arrow-long-right",link:"https://www.gitlab.com"}]},{headline:"Link Chain  3",linkItems:[{icon:"arrow-long-right",link:"https://www.stackoverflow.com"},{icon:"arrow-long-right",link:"https://www.stackoverflow.com"},{icon:"arrow-long-right",link:"https://www.stackoverflow.com"}]},{headline:"Link Chain  4",linkItems:[{icon:"arrow-long-right",link:"https://www.linkedin.com"},{icon:"arrow-long-right",link:"https://www.twitter.com"},{icon:"arrow-long-right",link:"https://www.gitlab.com"}]},{headline:"Link Chain  5",linkItems:[{icon:"arrow-long-right",link:"https://www.linkedin.com"},{icon:"arrow-long-right",link:"https://www.twitter.com"},{icon:"arrow-long-right",link:"https://www.gitlab.com"}]}]}},t={args:{linkChain:!1,contentItems:[{headline:"List Chain 1",listItems:["list item","list item","list item"]},{headline:"List Chain 2",listItems:["list item","list item","list item"]},{headline:"List Chain 3",listItems:["list item","list item","list item","list item"]},{headline:"List Chain 4",listItems:["list item","list item","list item"]},{headline:"List Chain 5",listItems:["list item","list item","list item"]}]}};var h,p,w;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    linkChain: true,
    contentItems: [{
      headline: 'Link Chain 1',
      linkItems: [{
        icon: 'arrow-long-right',
        link: 'https://www.google.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.example.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.stackoverflow.com'
      }]
    }, {
      headline: 'Link Chain  2',
      linkItems: [{
        icon: 'arrow-long-right',
        link: 'https://www.github.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.gitlab.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.gitlab.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.gitlab.com'
      }]
    }, {
      headline: 'Link Chain  3',
      linkItems: [{
        icon: 'arrow-long-right',
        link: 'https://www.stackoverflow.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.stackoverflow.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.stackoverflow.com'
      }]
    }, {
      headline: 'Link Chain  4',
      linkItems: [{
        icon: 'arrow-long-right',
        link: 'https://www.linkedin.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.twitter.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.gitlab.com'
      }]
    }, {
      headline: 'Link Chain  5',
      linkItems: [{
        icon: 'arrow-long-right',
        link: 'https://www.linkedin.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.twitter.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.gitlab.com'
      }]
    }]
  }
}`,...(w=(p=n.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};var d,g,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    linkChain: false,
    contentItems: [{
      headline: 'List Chain 1',
      listItems: ['list item', 'list item', 'list item']
    }, {
      headline: 'List Chain 2',
      listItems: ['list item', 'list item', 'list item']
    }, {
      headline: 'List Chain 3',
      listItems: ['list item', 'list item', 'list item', 'list item']
    }, {
      headline: 'List Chain 4',
      listItems: ['list item', 'list item', 'list item']
    }, {
      headline: 'List Chain 5',
      listItems: ['list item', 'list item', 'list item']
    }]
  }
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const O=["LinkChain","ListChain"];export{n as LinkChain,t as ListChain,O as __namedExportsOrder,B as default};
