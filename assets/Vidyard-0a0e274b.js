import{g}from"./_commonjsHelpers-de833af9.js";import{r as v}from"./index-b1e7e93e.js";import{u as b,p as O}from"./Video.stories-876f9564.js";function V(t,e){for(var r=0;r<e.length;r++){const o=e[r];if(typeof o!="string"&&!Array.isArray(o)){for(const a in o)if(a!=="default"&&!(a in t)){const i=Object.getOwnPropertyDescriptor(o,a);i&&Object.defineProperty(t,a,i.get?i:{enumerable:!0,get:()=>o[a]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var D=Object.create,n=Object.defineProperty,j=Object.getOwnPropertyDescriptor,w=Object.getOwnPropertyNames,S=Object.getPrototypeOf,M=Object.prototype.hasOwnProperty,A=(t,e,r)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,E=(t,e)=>{for(var r in e)n(t,r,{get:e[r],enumerable:!0})},h=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of w(e))!M.call(t,a)&&a!==r&&n(t,a,{get:()=>e[a],enumerable:!(o=j(e,a))||o.enumerable});return t},L=(t,e,r)=>(r=t!=null?D(S(t)):{},h(e||!t||!t.__esModule?n(r,"default",{value:t,enumerable:!0}):r,t)),R=t=>h(n({},"__esModule",{value:!0}),t),s=(t,e,r)=>(A(t,typeof e!="symbol"?e+"":e,r),r),_={};E(_,{default:()=>y});var f=R(_),c=L(v),d=b,P=O;const x="https://play.vidyard.com/embed/v4.js",C="VidyardV4",N="onVidyardAPI";class y extends c.Component{constructor(){super(...arguments),s(this,"callPlayer",d.callPlayer),s(this,"mute",()=>{this.setVolume(0)}),s(this,"unmute",()=>{this.props.volume!==null&&this.setVolume(this.props.volume)}),s(this,"ref",e=>{this.container=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){const{playing:r,config:o,onError:a,onDuration:i}=this.props,l=e&&e.match(P.MATCH_URL_VIDYARD)[1];this.player&&this.stop(),(0,d.getSDK)(x,C,N).then(p=>{this.container&&(p.api.addReadyListener((u,m)=>{this.player||(this.player=m,this.player.on("ready",this.props.onReady),this.player.on("play",this.props.onPlay),this.player.on("pause",this.props.onPause),this.player.on("seek",this.props.onSeek),this.player.on("playerComplete",this.props.onEnded))},l),p.api.renderPlayer({uuid:l,container:this.container,autoplay:r?1:0,...o.options}),p.api.getPlayerMetadata(l).then(u=>{this.duration=u.length_in_seconds,i(u.length_in_seconds)}))},a)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){window.VidyardV4.api.destroyPlayer(this.player)}seekTo(e,r=!0){this.callPlayer("seek",e),r||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setPlaybackRate(e){this.callPlayer("setPlaybackSpeed",e)}getDuration(){return this.duration}getCurrentTime(){return this.callPlayer("currentTime")}getSecondsLoaded(){return null}render(){const{display:e}=this.props,r={width:"100%",height:"100%",display:e};return c.default.createElement("div",{style:r},c.default.createElement("div",{ref:this.ref}))}}s(y,"displayName","Vidyard");s(y,"canPlay",P.canPlay.vidyard);const T=g(f),F=V({__proto__:null,default:T},[f]);export{F as V};
