import{j as e}from"./clsx-24df0f47.js";import{S as c}from"./index.es4-a1cf181a.js";import{r as d}from"./index-b1e7e93e.js";import{M as a}from"./ModalComponent-f20c4b6d.js";import"./jsx-runtime-6f6342d7.js";import"./index.es36-796b080a.js";import"./index.es32-95f1013f.js";import"./index.es13-373f5050.js";import"./index.es25-c99d3495.js";import"./_commonjsHelpers-de833af9.js";import"./ZpsButton-81ea19f1.js";import"./index.es17-40e95622.js";import"./index-1a504dbd.js";import"./getDataLayer-2559cd39.js";import"./getUrlWithTrailingSlash-1f1feb13.js";import"./tw-merge-1166cefb.js";const w={title:"Components/ModalComponent",component:a,tags:["autodocs"]},u=n=>{const[l,t]=d.useState(!1),p=()=>t(!0),i=()=>{t(!1),n.onClose&&n.onClose()};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(c,{onClick:p,children:"Open Modal"},void 0,!1,{fileName:"/home/circleci/project/src/components/modal-component/ModalComponent.stories.tsx",lineNumber:24,columnNumber:7},globalThis),e.jsxDEV(a,{isOpen:l,label:"Close",onClose:i,children:e.jsxDEV("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},void 0,!1,{fileName:"/home/circleci/project/src/components/modal-component/ModalComponent.stories.tsx",lineNumber:26,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/modal-component/ModalComponent.stories.tsx",lineNumber:25,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/modal-component/ModalComponent.stories.tsx",lineNumber:23,columnNumber:5},globalThis)},o=u.bind({});o.args={isOpen:!1,onClose:()=>{}};var s,r,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    if (args.onClose) args.onClose();
  };
  return <>
      <Button onClick={handleOpen}>Open Modal</Button>
      <ModalComponent isOpen={open} label='Close' onClose={handleClose}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </ModalComponent>
    </>;
}`,...(m=(r=o.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};const I=["Default"];export{o as Default,I as __namedExportsOrder,w as default};
