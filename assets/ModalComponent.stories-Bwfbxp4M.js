import{j as e}from"./jsx-dev-runtime-DxtWBBhT.js";import{w as c}from"./index.es4-BZclvubd.js";import{r as d}from"./index-cDoxnID5.js";import{M as a}from"./ModalComponent-D486C3QZ.js";import"./jsx-runtime-CNPC69dV.js";import"./index.es36-BF3AzYXZ.js";import"./index.es32-D9mbuw9C.js";import"./index.es13-DvMMQ7IO.js";import"./index.es25-C4EHCV_l.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ZpsButton-D11UPFc7.js";import"./index.es17-CiSAzvV-.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./getDataLayer-CP2Cgxnv.js";import"./getUrlWithTrailingSlash-D5oSkRKV.js";import"./linkSecurity-DjaWK124.js";import"./tw-merge-Ds6tgvmq.js";const L={title:"Components/ModalComponent",component:a,tags:["autodocs"]},u=n=>{const[l,t]=d.useState(!1),p=()=>t(!0),i=()=>{t(!1),n.onClose&&n.onClose()};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(c,{onClick:p,children:"Open Modal"},void 0,!1,{fileName:"/home/circleci/project/src/components/modal-component/ModalComponent.stories.tsx",lineNumber:24,columnNumber:7},globalThis),e.jsxDEV(a,{isOpen:l,label:"Close",onClose:i,children:e.jsxDEV("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},void 0,!1,{fileName:"/home/circleci/project/src/components/modal-component/ModalComponent.stories.tsx",lineNumber:26,columnNumber:9},globalThis)},void 0,!1,{fileName:"/home/circleci/project/src/components/modal-component/ModalComponent.stories.tsx",lineNumber:25,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/home/circleci/project/src/components/modal-component/ModalComponent.stories.tsx",lineNumber:23,columnNumber:5},globalThis)},o=u.bind({});o.args={isOpen:!1,onClose:()=>{}};var s,r,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
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
}`,...(m=(r=o.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};const V=["Default"];export{o as Default,V as __namedExportsOrder,L as default};
