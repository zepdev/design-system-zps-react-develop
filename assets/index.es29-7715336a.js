function o(e){var t,f,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=o(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function i(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=o(e))&&(n&&(n+=" "),n+=t);return n}export{i as a};
//# sourceMappingURL=index.es29-7715336a.js.map