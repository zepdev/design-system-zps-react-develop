import{j as e}from"./jsx-dev-runtime-DUe1FbZV.js";import{w as c}from"./index.es4-C7wF0uZ5.js";import{r as d}from"./index-DdHSt6jH.js";import{M as p}from"./ModalComponent-DoFTHGvq.js";import"./index-CnaUG9bL.js";import"./jsx-runtime-B3jrUL2l.js";import"./index.es36-BF3AzYXZ.js";import"./index.es32-D9mbuw9C.js";import"./index.es13-B2rJTKsB.js";import"./index.es25-CTVOSMAe.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./ZpsButton-C7MZ7TG0.js";import"./index.es17-CiSAzvV-.js";import"./index-Dp3B9jqt.js";import"./clsx-B-dksMZM.js";import"./getDataLayer-CP2Cgxnv.js";import"./getUrlWithTrailingSlash-D5oSkRKV.js";import"./linkSecurity-DjaWK124.js";import"./tw-merge-Ds6tgvmq.js";const S={title:"Components/ModalComponent",component:p,tags:["autodocs"]},u=n=>{const[i,t]=d.useState(!1),a=()=>t(!0),l=()=>{t(!1),n.onClose&&n.onClose()};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV(c,{onClick:a,children:"Open Modal"},void 0,!1,{fileName:"/home/circleci/project/src/components/modal-component/ModalComponent.stories.tsx",lineNumber:24,columnNumber:7},void 0),e.jsxDEV(p,{isOpen:i,label:"Close",onClose:l,children:e.jsxDEV("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},void 0,!1,{fileName:"/home/circleci/project/src/components/modal-component/ModalComponent.stories.tsx",lineNumber:26,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/circleci/project/src/components/modal-component/ModalComponent.stories.tsx",lineNumber:25,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/circleci/project/src/components/modal-component/ModalComponent.stories.tsx",lineNumber:23,columnNumber:5},void 0)},o=u.bind({});o.args={isOpen:!1,onClose:()=>{}};var s,r,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
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
}`,...(m=(r=o.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};const B=["Default"];export{o as Default,B as __namedExportsOrder,S as default};
