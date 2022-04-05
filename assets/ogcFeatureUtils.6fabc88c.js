var X=Object.defineProperty,Y=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var W=(n,e,t)=>e in n?X(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,p=(n,e)=>{for(var t in e||(e={}))ne.call(e,t)&&W(n,t,e[t]);if(R)for(var t of R(e))te.call(e,t)&&W(n,t,e[t]);return n},y=(n,e)=>Y(n,ee(e));import{aB as ie,V as b,b4 as w,bU as k,p1 as ae,i0 as se,k as $,pE as re,aG as oe,O as x,gj as le,p2 as ce,fJ as Z,oy as de,pF as ue}from"./vendor.c28ea743.js";import{O as fe,T as pe,L as me}from"./geojson.13543b07.js";import{n as ge}from"./clientSideDefaults.21e4ad53.js";const M=ie.getLogger("esri.layers.graphics.sources.ogcfeature"),K="http://www.opengis.net/def/crs/",$e=`${K}OGC/1.3/CRS84`;async function xe(n,e,t={},i=5){const{links:o}=n,l=m(o,"items","application/geo+json")||m(o,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(b(l))throw new w("ogc-feature-layer:missing-items-page","Missing items url");const{data:d}=await k(l.href,{signal:t.signal,query:y(p({limit:i},t.customParameters),{token:t.apiKey}),headers:{accept:"application/geo+json"}});await fe(d);const s=pe(d,{geometryType:e.geometryType}),f=e.fields||s.fields||[],S=e.hasZ!=null?e.hasZ:s.hasZ,T=s.geometryType,g=e.objectIdField||s.objectIdFieldName||"OBJECTID";let r=e.timeInfo;const h=f.find(a=>a.name===g);if(h)h.type="esriFieldTypeOID",h.editable=!1,h.nullable=!1;else{if(!s.objectIdFieldType)throw new w("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");f.unshift({name:g,alias:g,type:"esriFieldTypeOID",editable:!1,nullable:!1})}if(g!==s.objectIdFieldName){const a=f.find(c=>c.name===s.objectIdFieldName);a&&(a.type="esriFieldTypeInteger")}f===s.fields&&s.unknownFields.length>0&&M.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:s.unknownFields}});for(const a of f){if(a.name==null&&(a.name=a.alias),a.alias==null&&(a.alias=a.name),a.type!=="esriFieldTypeOID"&&a.type!=="esriFieldTypeGlobalID"&&(a.editable=a.editable==null||!!a.editable,a.nullable=a.nullable==null||!!a.nullable),!a.name)throw new w("ogc-feature-layer:invalid-field-name","field name is missing",{field:a});if(ae.jsonValues.indexOf(a.type)===-1)throw new w("ogc-feature-layer:invalid-field-type",`invalid type for field "${a.name}"`,{field:a})}if(r){const a=new se(f);if(r.startTimeField){const c=a.get(r.startTimeField);c?(r.startTimeField=c.name,c.type="esriFieldTypeDate"):r.startTimeField=null}if(r.endTimeField){const c=a.get(r.endTimeField);c?(r.endTimeField=c.name,c.type="esriFieldTypeDate"):r.endTimeField=null}if(r.trackIdField){const c=a.get(r.trackIdField);c?r.trackIdField=c.name:(r.trackIdField=null,M.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:r}}))}r.startTimeField||r.endTimeField||(M.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:r}}),r=null)}return{drawingInfo:T?ge(T):null,geometryType:T,fields:f,hasZ:!!S,objectIdField:g,timeInfo:r}}async function Se(n,e={}){const{links:t}=n,i=m(t,"data","application/json")||m(t,"http://www.opengis.net/def/rel/ogc/1.0/data","application/json");if(b(i))throw new w("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:o,customParameters:l,signal:d}=e,{data:s}=await k(i.href,{signal:d,headers:{accept:"application/json"},query:y(p({},l),{token:o})});return s}async function ve(n,e={}){const{links:t}=n,i=m(t,"conformance","application/json")||m(t,"http://www.opengis.net/def/rel/ogc/1.0/conformance","application/json");if(b(i))throw new w("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:o,customParameters:l,signal:d}=e,{data:s}=await k(i.href,{signal:d,headers:{accept:"application/json"},query:y(p({},l),{token:o})});return s}async function Ne(n,e={}){const{apiKey:t,customParameters:i,signal:o}=e,{data:l}=await k(n,{signal:o,headers:{accept:"application/json"},query:y(p({},i),{token:t})});return l}async function Oe(n,e={}){const t="application/vnd.oai.openapi+json;version=3.0",i=m(n.links,"service-desc",t);if(b(i))return M.warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:o,customParameters:l,signal:d}=e,{data:s}=await k(i.href,{signal:d,headers:{accept:t},query:y(p({},l),{token:o})});return s}function Me(n){const e=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(n),t=e==null?void 0:e.groups;if(!t)return null;const{authority:i,code:o}=t;switch(i.toLowerCase()){case"ogc":switch(o.toLowerCase()){case"crs27":return $.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return $.WGS84.wkid;default:return null}case"esri":case"epsg":{const l=Number.parseInt(o,10);return Number.isNaN(l)?null:l}default:return null}}async function qe(n,e,t){const i=await ye(n,e,t);return re(i)}async function ye(n,e,t){const{capabilities:{query:{maxRecordCount:i}},collection:o,layerDefinition:l,queryParameters:{apiKey:d,customParameters:s},spatialReference:f,supportedCrs:S}=n,{links:T}=o,g=m(T,"items","application/geo+json")||m(T,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(b(g))throw new w("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:r,num:h,start:a,timeExtent:c,where:J}=e;if(e.objectIds)throw new w("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");const A=$.fromJSON(f),j=oe(e.outSpatialReference,A),v=j.isWGS84?null:L(j,S),E=Fe(r,S),B=be(c),V=he(J),_=h!=null?h:a!=null&&a!==void 0?10:i,{data:F}=await k(g.href,y(p({},t),{query:y(p(p({},s),E),{crs:v,datetime:B,query:V,limit:_,startindex:a,token:d}),headers:{accept:"application/geo+json"}}));let N=!1;F.links&&(N=!!F.links.find(O=>O.rel==="next")),!N&&Number.isInteger(F.numberMatched)&&Number.isInteger(F.numberReturned)&&(N=F.numberReturned<F.numberMatched);const{fields:Q,globalIdField:U,hasM:z,hasZ:q,objectIdField:C}=l,G=l.geometryType,D=me(F,{geometryType:G,hasZ:q,objectIdField:C});if(!v&&j.isWebMercator){for(const I of D)if(x(I.geometry)){const O=le(I.geometry,G,q,!1);O.spatialReference=$.WGS84,I.geometry=ce(Z(O,j))}}for(const I of D)I.objectId=I.attributes[C];const H=v||!v&&j.isWebMercator?j.toJSON():de,u=new ue;return u.exceededTransferLimit=N,u.features=D,u.fields=Q,u.geometryType=G,u.globalIdFieldName=U,u.hasM=z,u.hasZ=q,u.objectIdFieldName=C,u.spatialReference=H,u}function we(n){return x(n)&&n.type==="extent"}function L(n,e){var t,i,o;const{isWebMercator:l,wkid:d}=n;if(!d)return null;const s=l?(t=(i=(o=e[3857])!=null?o:e[102100])!=null?i:e[102113])!=null?t:e[900913]:e[n.wkid];return s?`${K}${s}`:null}function P(n){if(b(n))return"";const{xmin:e,ymin:t,xmax:i,ymax:o}=n;return`${e},${t},${i},${o}`}function be(n){if(b(n))return null;const{start:e,end:t}=n;return`${x(e)?e.toISOString():".."}/${x(t)?t.toISOString():".."}`}function he(n){return b(n)||!n||n==="1=1"?null:n}function Fe(n,e){if(!we(n))return null;const{spatialReference:t}=n;if(!t||t.isWGS84)return{bbox:P(n)};const i=L(t,e);return x(i)?{bbox:P(n),"bbox-crs":i}:t.isWebMercator?{bbox:P(Z(n,$.WGS84))}:null}function m(n,e,t){return n.find(i=>i.rel===e&&i.type===t)||n.find(i=>i.rel===e&&!i.type)}export{$e as F,xe as I,qe as N,Oe as S,Se as T,K as j,ve as k,ye as q,Me as v,Ne as x};