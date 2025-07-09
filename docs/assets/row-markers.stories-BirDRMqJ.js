import{R as e}from"./iframe-C4qgPciQ.js";import{D as m}from"./data-editor-all-BXi8iBnN.js";import{B as c,D as i,P as p,u,d}from"./utils-C8m6pQQ4.js";import{S as k}from"./story-utils-Btb0ZMB4.js";import"./image-window-loader-CDjnKQys.js";import"./throttle-B6nmj_e1.js";import"./marked.esm-BiyveOQd.js";import"./flatten-1vsbmZ7M.js";import"./scrolling-data-grid-DBcpV-e5.js";import"./index-D_kXk1yT.js";import"./index.esm-0Bf7Nb_M.js";import"./index-D8kKIslO.js";const S={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e.createElement(k,null,e.createElement(c,{title:"Row markers",description:e.createElement(e.Fragment,null,e.createElement(i,null,"Row Markers can be controlled by setting the ",e.createElement(p,null,"rowMarkers")," prop."))},e.createElement(t,null)))]},r=t=>{const{cols:l,getCellContent:n}=u(10,!1);return e.createElement(m,{...d,getCellContent:n,verticalBorder:!1,rowMarkers:{kind:t.markers,checkboxStyle:"square",headerAlwaysVisible:!0,headerTheme:{textMedium:"rgba(51, 51, 51, 0.50)"}},columns:l,rows:400})};r.args={markers:"both"};r.argTypes={markers:{control:{type:"select"},options:["both","checkbox","number","none","clickable-number","checkbox-visible"]}};var a,o,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`p => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(10, false);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} verticalBorder={false} rowMarkers={{
    kind: p.markers,
    checkboxStyle: "square",
    headerAlwaysVisible: true,
    headerTheme: {
      textMedium: "rgba(51, 51, 51, 0.50)"
    }
  }} columns={cols} rows={400} />;
}`,...(s=(o=r.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const B=["RowMarkers"];export{r as RowMarkers,B as __namedExportsOrder,S as default};
