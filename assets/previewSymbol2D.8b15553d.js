var B=Object.defineProperty,R=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var Z=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var E=(t,e,i)=>e in t?B(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,q=(t,e)=>{for(var i in e||(e={}))G.call(e,i)&&E(t,i,e[i]);if(Z)for(var i of Z(e))U.call(e,i)&&E(t,i,e[i]);return t},S=(t,e)=>R(t,W(e));import{qe as k,fB as p,qF as I,qG as J,l as K,b4 as N,qh as O,qH as H,qt as Q,b$ as X}from"./vendor.c28ea743.js";import{l as Y}from"./renderUtils.5dca719b.js";import"./colorUtils.7c4b6dc5.js";const D="picture-fill",_="picture-marker",$="simple-fill",ee="simple-line",te="simple-marker",le="text",ae="Aa",ne=k.size,L=k.maxSize,T=k.maxOutlineSize,oe=k.lineWidth,ie=document.createElement("canvas");function se(t,e){const i=ie.getContext("2d"),f=[];return e&&(e.weight&&f.push(e.weight),e.size&&f.push(e.size+"px"),e.family&&f.push(e.family)),i.font=f.join(" "),i.measureText(t).width}const ue=7.2/2.54,ce=72/2.54;function me(t){if(t.length===0)return 0;if(t.length>2){const e=X(1),i=parseFloat(t);switch(t.slice(-2)){case"px":return i;case"pt":return i*e;case"in":return 72*i*e;case"pc":return 12*i*e;case"mm":return i*ue*e;case"cm":return i*ce*e}}return parseFloat(t)}function V(t){const e=t==null?void 0:t.size;return{width:e!=null&&typeof e=="object"&&"width"in e?p(e.width):null,height:e!=null&&typeof e=="object"&&"height"in e?p(e.height):null}}function fe(t,e){var i,f;const j=typeof(e==null?void 0:e.size)=="number"?e==null?void 0:e.size:null,h=j!=null?p(j):null,b=(e==null?void 0:e.maxSize)!=null?p(e.maxSize):null,A=(e==null?void 0:e.opacity)!=null?e.opacity:null,y=(e==null?void 0:e.rotation)!=null?e.rotation:"angle"in t?t.angle:null,v=I(t);let d=J(t);if(v&&!d){const o="type"in v?null:new K(v);(o?o.toHex():null)==="#ffffff"&&(d={color:"#bdc3c7",width:.75})}const u={shape:null,fill:null,stroke:d,offset:[0,0]};(i=d)!=null&&i.width&&(d.width=Math.min(d.width,T));const c=((f=d)==null?void 0:f.width)||0;let r=(e==null?void 0:e.size)!=null&&((e==null?void 0:e.scale)==null||(e==null?void 0:e.scale)),l=0,a=0,w=!1;switch(t.type){case te:{const o=t.style,s=Math.min(h!=null?h:p(t.size),b||L);switch(l=s,a=s,o){case"circle":u.shape={type:"circle",cx:0,cy:0,r:.5*s},r||(l+=c,a+=c);break;case"cross":u.shape={type:"path",path:[{command:"M",values:[0,.5*a]},{command:"L",values:[l,.5*a]},{command:"M",values:[.5*l,0]},{command:"L",values:[.5*l,a]}]};break;case"diamond":u.shape={type:"path",path:[{command:"M",values:[0,.5*a]},{command:"L",values:[.5*l,0]},{command:"L",values:[l,.5*a]},{command:"L",values:[.5*l,a]},{command:"Z",values:[]}]},r||(l+=c,a+=c);break;case"square":u.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[l,0]},{command:"L",values:[l,a]},{command:"L",values:[0,a]},{command:"Z",values:[]}]},r||(l+=c,a+=c),y&&(w=!0);break;case"triangle":u.shape={type:"path",path:[{command:"M",values:[.5*l,0]},{command:"L",values:[l,a]},{command:"L",values:[0,a]},{command:"Z",values:[]}]},r||(l+=c,a+=c),y&&(w=!0);break;case"x":u.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[l,a]},{command:"M",values:[l,0]},{command:"L",values:[0,a]}]},y&&(w=!0);break;case"path":u.shape={type:"path",path:t.path||""},r||(l+=c,a+=c),y&&(w=!0),r=!0}break}case ee:{var C;const{width:o,height:s}=V(e),n=s!=null?s:Math.min(h!=null?h:c,b||T),m=o!=null?o:oe;d.width=n,l=m,a=n;const M=(u==null||(C=u.stroke)==null?void 0:C.cap)||"butt",x=M==="round";r=!0,u.stroke.cap=M==="butt"?"square":M,u.shape={type:"path",path:[{command:"M",values:[x?n/2:0,a/2]},{command:"L",values:[x?l-n/2:l,a/2]}]};break}case D:case $:{const o=typeof(e==null?void 0:e.symbolConfig)=="object"&&(e==null?void 0:e.symbolConfig.isSquareFill),{width:s,height:n}=V(e);l=o&&s!=null?s:h!=null?h:ne,a=o&&n!=null?n:l,r||(l+=c,a+=c),r=!0,u.shape=o?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[l,0]},{command:"L",values:[l,a]},{command:"L",values:[0,a]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:Q.fill[0];break}case _:{let o=p(t.width),s=p(t.height);const n=h!=null?h:Math.max(o,s),m=o/s;o=m<=1?Math.ceil(n*m):n,s=m<=1?n:Math.ceil(n/m),l=Math.min(o,b||L),a=Math.min(s,b||L),u.shape={type:"image",x:-Math.round(l/2),y:-Math.round(a/2),width:l,height:a,src:t.url||""},y&&(w=!0);break}case le:{const o=t,s=o.text||ae,n=o.font,m=Math.min(h!=null?h:p(n.size),b||L),M=se(s,{weight:n.weight,size:m,family:n.family}),x=/[\uE600-\uE6FF]/.test(s);l=x?m:M,a=m;let P=.25*me((n?m:0).toString());x&&(P+=5),u.shape={type:"text",text:s,x:0,y:P,align:"middle",decoration:n&&n.decoration,rotated:o.rotated,kerning:o.kerning},u.font=n&&{size:m,style:n.style,decoration:n.decoration,weight:n.weight,family:n.family};break}}if(!u.shape)return Promise.reject(new N("symbolPreview: renderPreviewHTML2D","symbol not supported."));const g=v,F=t.color;let z=null;return g&&g.type==="pattern"&&F&&t.type!==D?z=O(g.src,F.toCss(!0)).then(o=>(g.src=o,u.fill=g,u)):(u.fill=v,z=Promise.resolve(u)),z.then(o=>{const s=[[o]];if(typeof(e==null?void 0:e.symbolConfig)=="object"&&e!=null&&e.symbolConfig.applyColorModulation){const n=.6*l;s.unshift([S(q({},o),{offset:[-n,0],fill:H(v,-.3)})]),s.push([S(q({},o),{offset:[n,0],fill:H(v,.3)})]),l+=2*n,r=!1}return Y(s,[l,a],{node:e&&e.node,scale:r,opacity:A,rotation:y,useRotationSize:w,effectView:e==null?void 0:e.effectView})})}export{fe as previewSymbol2D};