import{_ as N}from"./iframe-d355d45a.js";import"../sb-preview/runtime.js";const{global:T}=__STORYBOOK_MODULE_GLOBAL__,{addons:y}=__STORYBOOK_MODULE_PREVIEW_API__;var n="storybook/a11y",U=`${n}/result`,f=`${n}/request`,g=`${n}/running`,p=`${n}/error`,w=`${n}/manual`,a={RESULT:U,REQUEST:f,RUNNING:g,ERROR:p,MANUAL:w},{document:L,window:d}=T,r=y.getChannel(),o=!1,_,A=async t=>{let{manual:e}=await s(t);e||await l(t)},l=async t=>{_=t;try{let e=await s(t);if(!o){o=!0,r.emit(a.RUNNING);let i=(await N(()=>import("./axe-0438dd3e.js").then(S=>S.a),["./axe-0438dd3e.js","./_commonjsHelpers-de833af9.js"],import.meta.url)).default,{element:u="#storybook-root",config:O,options:E={}}=e,R=L.querySelector(u);if(!R)return;i.reset(),O&&i.configure(O);let m=await i.run(R,E),c=JSON.parse(JSON.stringify(m));_===t?r.emit(a.RESULT,c):(o=!1,l(_))}}catch(e){r.emit(a.ERROR,e)}finally{o=!1}},s=async t=>{let{parameters:e}=await d.__STORYBOOK_STORY_STORE__.loadStory({storyId:t})||{};return e.a11y||{config:{},options:{}}};r.on(a.REQUEST,A);r.on(a.MANUAL,l);
