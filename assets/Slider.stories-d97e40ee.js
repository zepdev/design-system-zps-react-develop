import{j as e}from"./jsx-dev-runtime-8ab8c10c.js";import{r}from"./index-b1e7e93e.js";import{c as N}from"./clsx-0839fdbe.js";import"./_commonjsHelpers-de833af9.js";const s={thumb:`
    zep-thumb
    zep-bg-transparent
    zep-absolute
    zep-w-full
    zep-pointer-events-none
    zep-top-[50%]
    zep-transform
    zep-z-10
    -zep-translate-y-[50%]
    zep-appearance-none
    zep-p-[0]
    zep-m-[0]
  `,thumbDragIndicator:`
    zep-h-[44px]
    zep-w-[44px]
    zep-rounded-full
    zep-bg-primary-default
    zep-opacity-40
    zep-absolute
  `,tooltip:`
    zep-py-0.25
    zep-w-fit
    zep-px-[12px]
    zep-rounded-[4px]
    zep-text-typography-dark-100
    zep-typography-supportText
    zep-bottom-[26px]
    zep-bg-background-medium
    zep-block
    zep-whitespace-nowrap
    zep-text-center
    zep-transform
    -zep-translate-y-[26px]
    zep-z-10
  `,tooltipWrapper:`
    zep-absolute
    zep-justify-center
    zep-w-[20px]
    zep-pointer-events-none
    after:zep-content-['']
    after:zep-w-[calc(sqrt(2)*6px)]
    after:zep-h-[calc(sqrt(2)*6px)]
    after:zep-rotate-45
    after:zep-absolute
    after:zep-top-[2px]
    after:zep-bg-background-medium
    after:zep-mx-auto
  `,sliderRange:"zep-h-[6px] zep-my-[19px] zep-rounded-full zep-absolute zep-bg-primary-default",sliderTrack:"zep-h-0.25 zep-my-[20px] zep-rounded-full zep-w-full zep-absolute zep-bg-primary-default zep-opacity-40",slider:"zep-relative zep-mt-0.5 zep-w-full zep-h-[44px]"},D=({max:n,min:o,step:T=1,onChange:u,value:x,label:k})=>{const[m,q]=r.useState(x.min),[d,L]=r.useState(x.max),[$,H]=r.useState(x.min),[X,W]=r.useState(x.max),[O,V]=r.useState(!1),[P,E]=r.useState(!1),[v,M]=r.useState(!1),[S,w]=r.useState(!1),f=r.useRef(null),c=r.useRef(null),p=r.useRef(null),a=r.useRef(null),i=r.useRef(null),b=r.useRef(null),z=r.useRef(null),g="10",h="20";r.useEffect(()=>{if(f.current&&a.current&&i.current&&z.current&&b.current){const l=`${(m-o)/(n-o)*100}%`,t=`${(n-d)/(n-o)*100}%`;f.current.style.left=l,f.current.style.right=t,f.current.style.width=`${(d-m)/(n-o)*100}%`,a.current.style.left=l,a.current.style.transform=`translateX(-${l})`,i.current.style.right=t,i.current.style.transform=`translateX(${t})`,b.current.style.left=l,b.current.style.transform=`translateX(-${l})`,z.current.style.right=t,z.current.style.transform=`translateX(${t})`}},[n,d,o,m]);const U=l=>{c&&c.current&&p&&p.current&&(c.current.style.zIndex=h,p.current.style.zIndex=g),a&&a.current&&i&&i.current&&(a.current.style.zIndex=h,i.current.style.zIndex=g);const t=Number(l==null?void 0:l.target.value);t<=d&&(q(t),H(t),u==null||u({min:t,max:d}))},A=l=>{c&&c.current&&p&&p.current&&(c.current.style.zIndex=g,p.current.style.zIndex=h),a&&a.current&&i&&i.current&&(a.current.style.zIndex=g,i.current.style.zIndex=h);const t=Number(l==null?void 0:l.target.value);t>=m&&(L(t),W(t),u==null||u({min:m,max:t}))},j=()=>{v&&M(!1),S&&w(!1)},B=()=>{M(!0)},F=()=>{w(!0)};return r.useEffect(()=>(document.addEventListener("mouseup",j),()=>{document.removeEventListener("mousemove",j)}),[j]),e.jsxDEV("div",{"data-testid":"rangeSlider",className:"zep-w-full",children:[e.jsxDEV("span",{"data-testid":"rangeSlider-label",className:"zep-text-primary-default zep-typography-bodyText",children:k},void 0,!1,{fileName:"/home/circleci/project/src/components/slider/Slider.tsx",lineNumber:179,columnNumber:7},globalThis),e.jsxDEV("div",{"data-testid":"rangeSlider-slider",className:s.slider,children:[e.jsxDEV("div",{"data-testid":"rangeSlider-slider-track",className:s.sliderTrack},void 0,!1,{fileName:"/home/circleci/project/src/components/slider/Slider.tsx",lineNumber:181,columnNumber:9},globalThis),e.jsxDEV("div",{"data-testid":"rangeSlider-slider-range",className:s.sliderRange,ref:f},void 0,!1,{fileName:"/home/circleci/project/src/components/slider/Slider.tsx",lineNumber:182,columnNumber:9},globalThis),e.jsxDEV("input",{"data-testid":"rangeSlider-slider-input-min",className:s.thumb,ref:c,onChange:U,step:T,type:"range",value:m,max:n,min:o,onMouseDown:B,onMouseEnter:()=>V(!0),onMouseLeave:()=>V(!1)},void 0,!1,{fileName:"/home/circleci/project/src/components/slider/Slider.tsx",lineNumber:183,columnNumber:9},globalThis),e.jsxDEV("input",{"data-testid":"rangeSlider-slider-input-max",className:s.thumb,ref:p,onChange:A,step:T,type:"range",value:d,max:n,min:o,onMouseDown:F,onMouseEnter:()=>E(!0),onMouseLeave:()=>E(!1)},void 0,!1,{fileName:"/home/circleci/project/src/components/slider/Slider.tsx",lineNumber:197,columnNumber:9},globalThis),e.jsxDEV("div",{"data-testid":"rangeSlider-slider-thumb-drag-indicator-wrapper-min",className:N("zep-absolute zep-z-0 zep-justify-center zep-w-[20px] zep-h-[20px]",v?"zep-flex":"zep-hidden"),ref:b,children:e.jsxDEV("div",{className:s.thumbDragIndicator},void 0,!1,{fileName:"/home/circleci/project/src/components/slider/Slider.tsx",lineNumber:216,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/slider/Slider.tsx",lineNumber:211,columnNumber:9},globalThis),e.jsxDEV("div",{"data-testid":"rangeSlider-slider-thumb-drag-indicator-wrapper-max",className:N("zep-absolute zep-z-0 zep-justify-center zep-w-[20px] zep-h-[20px]",S?"zep-flex":"zep-hidden"),ref:z,children:e.jsxDEV("div",{className:s.thumbDragIndicator},void 0,!1,{fileName:"/home/circleci/project/src/components/slider/Slider.tsx",lineNumber:223,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/slider/Slider.tsx",lineNumber:218,columnNumber:9},globalThis),e.jsxDEV("div",{"data-testid":"rangeSlider-slider-wrapper-tooltip-min",className:N(s.tooltipWrapper,v||O?"zep-flex":"zep-hidden"),ref:a,children:e.jsxDEV("div",{"data-testid":"rangeSlider-slider-tooltip-min",className:s.tooltip,children:$},void 0,!1,{fileName:"/home/circleci/project/src/components/slider/Slider.tsx",lineNumber:230,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/slider/Slider.tsx",lineNumber:225,columnNumber:9},globalThis),e.jsxDEV("div",{"data-testid":"rangeSlider-slider-wrapper-tooltip-max",className:N(s.tooltipWrapper,S||P?"zep-flex":"zep-hidden"),ref:i,children:e.jsxDEV("div",{"data-testid":"rangeSlider-slider-tooltip-max",className:s.tooltip,children:X},void 0,!1,{fileName:"/home/circleci/project/src/components/slider/Slider.tsx",lineNumber:239,columnNumber:11},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/slider/Slider.tsx",lineNumber:234,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/slider/Slider.tsx",lineNumber:180,columnNumber:7},globalThis),e.jsxDEV("div",{className:"zep-w-full zep-flex zep-justify-between","data-testid":"rangeSlider-slider-min-max-values",children:[e.jsxDEV("span",{"data-testid":"rangeSlider-min",className:"zep-typography-supportText zep-text-primary-default",children:o},void 0,!1,{fileName:"/home/circleci/project/src/components/slider/Slider.tsx",lineNumber:245,columnNumber:9},globalThis),e.jsxDEV("span",{"data-testid":"rangeSlider-max",className:"zep-typography-supportText zep-text-primary-default",children:n},void 0,!1,{fileName:"/home/circleci/project/src/components/slider/Slider.tsx",lineNumber:246,columnNumber:9},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/slider/Slider.tsx",lineNumber:244,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/slider/Slider.tsx",lineNumber:178,columnNumber:5},globalThis)};try{D.displayName="Slider",D.__docgenInfo={description:"",displayName:"Slider",props:{step:{defaultValue:{value:"1"},description:"",name:"step",required:!1,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"{ min: number; max: number; }"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: { min: number; max: number; }) => void)"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}}}catch{}const Y={title:"Components/Slider",component:D,tags:["autodocs"],argTypes:{}},y={args:{min:0,max:100,step:1,value:{min:0,max:100},label:"Label"}};var I,R,_;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    step: 1,
    value: {
      min: 0,
      max: 100
    },
    label: 'Label'
  } as SliderProps
}`,...(_=(R=y.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};const Z=["Default"];export{y as Default,Z as __namedExportsOrder,Y as default};
