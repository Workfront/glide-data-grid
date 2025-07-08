import{R as e}from"./iframe-BP3_vWhA.js";import{D as m}from"./data-editor-all-DyzA-o8_.js";import{B as u,D as i,P as c,u as p,d as f}from"./utils-DBkIMe1x.js";import{S as C}from"./story-utils-D7tohlIq.js";import"./image-window-loader-Cl_0oGEe.js";import"./throttle-CBl_kIso.js";import"./marked.esm-ZC1ceR6y.js";import"./flatten-oVtbvkMl.js";import"./scrolling-data-grid-DNdFRgOZ.js";import"./index-D_kXk1yT.js";import"./index.esm-DSbkiruP.js";import"./index-DmJ9S4Kq.js";const x={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e.createElement(C,null,e.createElement(u,{title:"Freeze columns",description:e.createElement(i,null,"Columns at the start of your grid can be frozen in place by settings"," ",e.createElement(c,null,"freezeColumns")," to a number greater than 0.")},e.createElement(t,null)))]},r=t=>{const{cols:a,getCellContent:l}=p(100);return e.createElement(m,{...f,rowMarkers:"both",freezeColumns:[t.freezeLeftColumns,t.freezeRightColumns],getCellContent:l,columns:a,verticalBorder:!1,rows:1e3})};r.argTypes={freezeLeftColumns:{control:{type:"range",min:0,max:10}},freezeRightColumns:{control:{type:"range",min:0,max:10}}};r.args={freezeLeftColumns:1,freezeRightColumns:1};var o,n,s;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`(p: {
  freezeLeftColumns: number;
  freezeRightColumns: number;
}) => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100);
  return <DataEditor {...defaultProps} rowMarkers="both" freezeColumns={[p.freezeLeftColumns, p.freezeRightColumns]} getCellContent={getCellContent} columns={cols} verticalBorder={false} rows={1000} />;
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const B=["FreezeColumns"];export{r as FreezeColumns,B as __namedExportsOrder,x as default};
