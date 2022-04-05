var Z=Object.defineProperty,A=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var O=(f,e,t)=>e in f?Z(f,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):f[e]=t,D=(f,e)=>{for(var t in e||(e={}))k.call(e,t)&&O(f,t,e[t]);if(R)for(var t of R(e))C.call(e,t)&&O(f,t,e[t]);return f},w=(f,e)=>A(f,P(e));import{b4 as I,p1 as G,ou as z,i0 as W,jq as _,V as L,jp as b,m9 as Q,O as E,jz as j,p3 as S,p4 as V,p5 as B,oy as M}from"./vendor.c28ea743.js";import{t as U,n as H}from"./objectIdUtils.924cdb7f.js";import{m as J}from"./FeatureStore.c47b839a.js";import{V as K}from"./QueryEngine.127c8abc.js";import{a as N,n as X,l as Y}from"./clientSideDefaults.21e4ad53.js";import{y as ee,u as g,d as x,c as T,h as v}from"./sourceUtils.27b0216d.js";import"./PooledRBush.8877f027.js";import"./quickselect.02d2bace.js";import"./optimizedFeatureQueryEngineAdapter.fb87930e.js";import"./QueryEngineCapabilities.650d7541.js";const te=M,ie={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:M},se={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function ne(f){return Q(f)?f.z!=null:!!f.hasZ}function re(f){return Q(f)?f.m!=null:!!f.hasM}class ge{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[],{features:r}=e,i=this._inferLayerProperties(r,e.fields),o=e.fields||[],p=e.hasM!=null?e.hasM:i.hasM,c=e.hasZ!=null?e.hasZ:i.hasZ,y=!e.spatialReference&&!i.spatialReference,d=y?te:e.spatialReference||i.spatialReference,a=y?ie:null,s=e.geometryType||i.geometryType,m=!s;let u=e.objectIdField||i.objectIdField,l=e.timeInfo;if(!m&&(y&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!s))throw new I("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!u)throw new I("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(i.objectIdField&&u!==i.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${u}" doesn't match the field name "${i.objectIdField}", found in the provided fields`}),u=i.objectIdField),u&&!i.objectIdField){let n=null;o.some(h=>h.name===u&&(n=h,!0))?(n.type="esriFieldTypeOID",n.editable=!1,n.nullable=!1):o.unshift({alias:u,name:u,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const n of o){if(n.name==null&&(n.name=n.alias),n.alias==null&&(n.alias=n.name),!n.name)throw new I("feature-layer:invalid-field-name","field name is missing",{field:n});if(n.name===u&&(n.type="esriFieldTypeOID"),G.jsonValues.indexOf(n.type)===-1)throw new I("feature-layer:invalid-field-type",`invalid type for field "${n.name}"`,{field:n})}const F={};for(const n of o)if(n.type!=="esriFieldTypeOID"&&n.type!=="esriFieldTypeGlobalID"){const h=z(n);h!==void 0&&(F[n.name]=h)}if(this._fieldsIndex=new W(o),this._createDefaultAttributes=N(F,u),l){if(l.startTimeField){const n=this._fieldsIndex.get(l.startTimeField);n?(l.startTimeField=n.name,n.type="esriFieldTypeDate"):l.startTimeField=null}if(l.endTimeField){const n=this._fieldsIndex.get(l.endTimeField);n?(l.endTimeField=n.name,n.type="esriFieldTypeDate"):l.endTimeField=null}if(l.trackIdField){const n=this._fieldsIndex.get(l.trackIdField);n?l.trackIdField=n.name:(l.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:l}}))}l.startTimeField||l.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:l}}),l=null)}const q={warnings:t,featureErrors:[],layerDefinition:w(D({},se),{drawingInfo:X(s),templates:Y(F),extent:a,geometryType:s,objectIdField:u,fields:o,hasZ:!!c,hasM:!!p,timeInfo:l}),assignedObjectIds:{}};if(this._queryEngine=new K({fields:o,geometryType:s,hasM:p,hasZ:c,objectIdField:u,spatialReference:d,featureStore:new J({geometryType:s,hasM:p,hasZ:c}),timeInfo:l,cacheSpatialQueries:!0}),!r||!r.length)return this._nextObjectId=U,q;const $=H(u,r);return this._nextObjectId=$+1,await _(r,d),this._loadInitialFeatures(q,r)}async applyEdits(e){const{spatialReference:t,geometryType:r}=this._queryEngine;return await Promise.all([ee(t,r),_(e.adds,t),_(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let r,i,o=null,p=null,c=null;for(const y of e){const d=y.geometry;if(!L(d)&&(o||(o=b(d)),p||(p=d.spatialReference),r==null&&(r=ne(d)),i==null&&(i=re(d)),o&&p&&r!=null&&i!=null))break}if(t&&t.length){let y=null;t.some(d=>{const a=d.type==="esriFieldTypeOID",s=!d.type&&d.name&&d.name.toLowerCase()==="objectid";return y=d,a||s})&&(c=y.name)}return{geometryType:o,spatialReference:p,objectIdField:c,hasM:i,hasZ:r}}_loadInitialFeatures(e,t){const{geometryType:r,hasM:i,hasZ:o,objectIdField:p,spatialReference:c,featureStore:y}=this._queryEngine,d=[];for(const a of t){if(a.uid!=null&&(e.assignedObjectIds[a.uid]=-1),a.geometry&&r!==b(a.geometry)){e.featureErrors.push(g("Incorrect geometry type."));continue}const s=this._createDefaultAttributes(),m=x(this._fieldsIndex,s,a.attributes,!0,e.warnings);m?e.featureErrors.push(m):(this._assignObjectId(s,a.attributes,!0),a.attributes=s,a.uid!=null&&(e.assignedObjectIds[a.uid]=a.attributes[p]),E(a.geometry)&&(a.geometry=j(a.geometry,a.geometry.spatialReference,c)),d.push(a))}if(y.addMany(S([],d,r,o,i,p)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:a,end:s}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[a,s]}return e}_applyEdits(e){const{adds:t,updates:r,deletes:i}=e,o={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(o,t),r&&r.length&&this._applyUpdateEdits(o,r),i&&i.length){for(const p of i)o.deleteResults.push(T(p));this._queryEngine.featureStore.removeManyById(i)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:o}}_applyAddEdits(e,t){const{addResults:r}=e,{geometryType:i,hasM:o,hasZ:p,objectIdField:c,spatialReference:y,featureStore:d}=this._queryEngine,a=[];for(const s of t){if(s.geometry&&i!==b(s.geometry)){r.push(g("Incorrect geometry type."));continue}const m=this._createDefaultAttributes(),u=x(this._fieldsIndex,m,s.attributes);if(u)r.push(u);else{if(this._assignObjectId(m,s.attributes),s.attributes=m,s.uid!=null){const l=s.attributes[c];e.uidToObjectId[s.uid]=l}E(s.geometry)&&(s.geometry=j(v(s.geometry,y),s.geometry.spatialReference,y)),a.push(s),r.push(T(s.attributes[c]))}}d.addMany(S([],a,i,p,o,c))}_applyUpdateEdits({updateResults:e},t){const{geometryType:r,hasM:i,hasZ:o,objectIdField:p,spatialReference:c,featureStore:y}=this._queryEngine;for(const d of t){const{attributes:a,geometry:s}=d,m=a&&a[p];if(m==null){e.push(g(`Identifier field ${p} missing`));continue}if(!y.has(m)){e.push(g(`Feature with object id ${m} missing`));continue}const u=V(y.getFeature(m),r,o,i);if(E(s)){if(r!==b(s)){e.push(g("Incorrect geometry type."));continue}u.geometry=j(v(s,c),s.spatialReference,c)}if(a){const l=x(this._fieldsIndex,u.attributes,a);if(l){e.push(l);continue}}y.add(B(u,r,o,i,p)),e.push(T(m))}}_assignObjectId(e,t,r=!1){const i=this._queryEngine.objectIdField;r&&t&&isFinite(t[i])?e[i]=t[i]:e[i]=this._nextObjectId++}}export{ge as default};