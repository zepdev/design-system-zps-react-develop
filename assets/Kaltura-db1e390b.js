import{g as y}from"./_commonjsHelpers-de833af9.js";import{r as f}from"./index-b1e7e93e.js";import{u as m,p as _}from"./Video.stories-15dd8dcb.js";function P(r,e){for(var t=0;t<e.length;t++){const o=e[t];if(typeof o!="string"&&!Array.isArray(o)){for(const a in o)if(a!=="default"&&!(a in r)){const l=Object.getOwnPropertyDescriptor(o,a);l&&Object.defineProperty(r,a,l.get?l:{enumerable:!0,get:()=>o[a]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var g=Object.create,n=Object.defineProperty,b=Object.getOwnPropertyDescriptor,v=Object.getOwnPropertyNames,O=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty,j=(r,e,t)=>e in r?n(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,L=(r,e)=>{for(var t in e)n(r,t,{get:e[t],enumerable:!0})},c=(r,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of v(e))!w.call(r,a)&&a!==t&&n(r,a,{get:()=>e[a],enumerable:!(o=b(e,a))||o.enumerable});return r},K=(r,e,t)=>(t=r!=null?g(O(r)):{},c(e||!r||!r.__esModule?n(t,"default",{value:r,enumerable:!0}):t,r)),D=r=>c(n({},"__esModule",{value:!0}),r),s=(r,e,t)=>(j(r,typeof e!="symbol"?e+"":e,t),t),h={};L(h,{default:()=>i});var d=D(h),u=K(f),p=m,S=_;const T="https://cdn.embed.ly/player-0.1.0.min.js",E="playerjs";class i extends u.Component{constructor(){super(...arguments),s(this,"callPlayer",p.callPlayer),s(this,"duration",null),s(this,"currentTime",null),s(this,"secondsLoaded",null),s(this,"mute",()=>{this.callPlayer("mute")}),s(this,"unmute",()=>{this.callPlayer("unmute")}),s(this,"ref",e=>{this.iframe=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){(0,p.getSDK)(T,E).then(t=>{this.iframe&&(this.player=new t.Player(this.iframe),this.player.on("ready",()=>{setTimeout(()=>{this.player.isReady=!0,this.player.setLoop(this.props.loop),this.props.muted&&this.player.mute(),this.addListeners(this.player,this.props),this.props.onReady()},500)}))},this.props.onError)}addListeners(e,t){e.on("play",t.onPlay),e.on("pause",t.onPause),e.on("ended",t.onEnded),e.on("error",t.onError),e.on("timeupdate",({duration:o,seconds:a})=>{this.duration=o,this.currentTime=a})}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("setCurrentTime",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){const e={width:"100%",height:"100%"};return u.default.createElement("iframe",{ref:this.ref,src:this.props.url,frameBorder:"0",scrolling:"no",style:e,allow:"encrypted-media; autoplay; fullscreen;",referrerPolicy:"no-referrer-when-downgrade"})}}s(i,"displayName","Kaltura");s(i,"canPlay",S.canPlay.kaltura);const M=y(d),A=P({__proto__:null,default:M},[d]);export{A as K};
