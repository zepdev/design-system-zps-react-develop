import{j as w}from"./index.es13-55dfe41f.js";import{a as v}from"./index.es29-7715336a.js";const f=t=>typeof t=="boolean"?"".concat(t):t===0?"0":t,d=v,x=(t,s)=>e=>{var c;if((s==null?void 0:s.variants)==null)return d(t,e==null?void 0:e.class,e==null?void 0:e.className);const{variants:n,defaultVariants:r}=s,l=Object.keys(n).map(a=>{const p=e==null?void 0:e[a],o=r==null?void 0:r[a];if(p===null)return null;const i=f(p)||f(o);return n[a][i]}),z=e&&Object.entries(e).reduce((a,p)=>{let[o,i]=p;return i===void 0||(a[o]=i),a},{}),g=s==null||(c=s.compoundVariants)===null||c===void 0?void 0:c.reduce((a,p)=>{let{class:o,className:i,...y}=p;return Object.entries(y).every(j=>{let[m,u]=j;return Array.isArray(u)?u.includes({...r,...z}[m]):{...r,...z}[m]===u})?[...a,o,i]:a},[]);return d(t,l,g,e==null?void 0:e.class,e==null?void 0:e.className)},b=x("zep-flex",{variants:{direction:{row:"zep-flex-row",column:"zep-flex-col"},gap:{0:"","0.25":"zep-gap-0.25","0.5":"zep-gap-0.5","0.75":"zep-gap-0.75",1:"zep-gap-1","1.5":"zep-gap-1.5",2:"zep-gap-2","2.5":"zep-gap-2.5",3:"zep-gap-3","3.75":"zep-gap-3.75",4:"zep-gap-4"},justifyContent:{start:"zep-justify-start",end:"zep-justify-end",center:"zep-justify-center",between:"zep-justify-between",around:"zep-justify-around",evenly:"zep-justify-evenly"},alignItems:{start:"zep-items-start",end:"zep-items-end",center:"zep-items-center",baseline:"zep-items-baseline",stretch:"zep-items-stretch"},wrap:{wrap:"zep-flex-wrap",nowrap:"zep-flex-nowrap"}}}),C=({children:t,direction:s="row",gap:e="0.25",justifyContent:c="start",alignItems:n="stretch",wrap:r="wrap",className:l})=>w.jsx("div",{className:`${b({direction:s,gap:e,justifyContent:c,alignItems:n,wrap:r,className:l})} max-sm:[&>*]:zep-grow`,"data-testid":"zep-spacing",children:t});export{C as f};
//# sourceMappingURL=index.es24-9329eeb1.js.map
