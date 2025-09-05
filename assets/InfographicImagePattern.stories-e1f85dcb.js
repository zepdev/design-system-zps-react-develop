import{G as e,a as s}from"./global-variants-893e06e6.js";import{j as o}from"./clsx-24df0f47.js";import{b as g}from"./commonCSS-cc68a568.js";import{H as d}from"./HeaderLongComponent-f51b3a0a.js";import{I as f}from"./InfographicImage-d7b13222.js";import{L as b}from"./Layout-ecccc0bb.js";import"./index-b1e7e93e.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-c80ee037.js";import"./jsx-runtime-6f6342d7.js";import"./index.es32-95f1013f.js";import"./index.es13-aa933637.js";import"./index.es17-40e95622.js";import"./getUrlWithTrailingSlash-c6e10e92.js";import"./RichText-82bbe30a.js";import"./index.es18-26f46603.js";import"./ZpsButton-cbdba7f3.js";import"./index.es25-c99d3495.js";import"./index.es36-796b080a.js";import"./index-1a504dbd.js";import"./getDataLayer-2559cd39.js";import"./tw-merge-1166cefb.js";import"./useContainerDimensions-635d7c18.js";const i=({variant:a=e.Zps,header:r,infographic:n,id:u})=>{const p=()=>{switch(a){case e.Zps:return s.ZpsBg;case e.Cat:return s.CatBg}};return o.jsxDEV(b,{id:u,wrapperClassname:g[p()],className:"zep-py-3 sm:zep-py-4 md:zep-py-5",children:[r&&r.headline&&o.jsxDEV(d,{...r,variant:p()},void 0,!1,{fileName:"/home/circleci/project/src/components/infographic-image-pattern/InfographicImagePattern.tsx",lineNumber:27,columnNumber:37},globalThis),o.jsxDEV(f,{className:"zep-mt-1 sm:zep-mt-1.5 md:zep-mt-2 xl:zep-mt-4",imageUrl:n.imageUrl,imageAlt:n.imageAlt,points:n.points,variant:a},void 0,!1,{fileName:"/home/circleci/project/src/components/infographic-image-pattern/InfographicImagePattern.tsx",lineNumber:28,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/infographic-image-pattern/InfographicImagePattern.tsx",lineNumber:26,columnNumber:5},globalThis)};try{i.displayName="InfographicImagePattern",i.__docgenInfo={description:"",displayName:"InfographicImagePattern",props:{header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"HeaderLongComponentProps"}},infographic:{defaultValue:null,description:"",name:"infographic",required:!0,type:{name:"InfographicImageProps"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const G={title:"Patterns/InfographicImagePattern",component:i,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:Object.keys(e)}}}},t={args:{variant:e.Zps,header:{headline:"Die Funktionsweise der Unterbrechungsfreien Stromversorgung (USV) einfach erklärt",tagline:"Zeppelin Power Systems Lösungen für STrom & Wärme",type:"primary-button",linkHref:"",linkText:"Kontaktieren Sie unsere Experten"},infographic:{imageUrl:"https://img.buzzfeed.com/buzzfeed-static/static/2017-12/22/11/asset/buzzfeed-prod-fastlane-01/sub-buzz-13082-1513961489-5.jpg?output-format=auto&output-quality=auto",imageAlt:"Image alt",points:[{x:20,y:20,description:"Tooltip content",label:"Label"},{x:40,y:30,description:"Tooltip content",label:"Label"},{x:15,y:80,description:"Tooltip content",label:"Label"},{x:85,y:70,description:"Tooltip content",label:"Label"}]}}};var l,m,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    header: {
      headline: 'Die Funktionsweise der Unterbrechungsfreien Stromversorgung (USV) einfach erklärt',
      tagline: 'Zeppelin Power Systems Lösungen für STrom & Wärme',
      type: 'primary-button',
      linkHref: '',
      linkText: 'Kontaktieren Sie unsere Experten'
    },
    infographic: {
      imageUrl: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-12/22/11/asset/buzzfeed-prod-fastlane-01/sub-buzz-13082-1513961489-5.jpg?output-format=auto&output-quality=auto',
      imageAlt: 'Image alt',
      points: [{
        x: 20,
        y: 20,
        description: 'Tooltip content',
        label: 'Label'
      }, {
        x: 40,
        y: 30,
        description: 'Tooltip content',
        label: 'Label'
      }, {
        x: 15,
        y: 80,
        description: 'Tooltip content',
        label: 'Label'
      }, {
        x: 85,
        y: 70,
        description: 'Tooltip content',
        label: 'Label'
      }]
    }
  } as InfographicImagePatternProps
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const H=["Default"];export{t as Default,H as __namedExportsOrder,G as default};
