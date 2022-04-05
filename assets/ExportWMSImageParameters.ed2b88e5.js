import{cs as h,M as m,J as a,K as t,L as b}from"./vendor.c28ea743.js";const v={visible:"visibleSublayers"};let r=class extends h(m){constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.sublayers.on("change",()=>this.notifyChange("visibleSublayers")),e.on("wms-sublayer-update",s=>this.notifyChange(v[s.propertyName]))],"layer"))}get layers(){const{visibleSublayers:e}=this;return e.filter(s=>s.name).map(s=>s.name).join(",")}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:s}=this,l=e==null?void 0:e.sublayers,i=[],o=n=>{const{minScale:y,maxScale:p,sublayers:u,visible:c}=n;c&&(s===0||(y===0||s<=y)&&(p===0||s>=p))&&(u?u.forEach(o):i.unshift(n))};return l==null||l.forEach(o),i}toJSON(){const{layer:e,layers:s}=this,{imageFormat:l,imageTransparency:i,version:o}=e;return{format:l,request:"GetMap",service:"WMS",styles:"",transparent:i?"TRUE":"FALSE",version:o,layers:s}}};a([t()],r.prototype,"layer",null),a([t({readOnly:!0})],r.prototype,"layers",null),a([t({type:Number})],r.prototype,"scale",void 0),a([t({readOnly:!0})],r.prototype,"version",null),a([t({readOnly:!0})],r.prototype,"visibleSublayers",null),r=a([b("esri.layers.support.ExportWMSImageParameters")],r);export{r as l};