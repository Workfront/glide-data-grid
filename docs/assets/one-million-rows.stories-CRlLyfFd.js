import{R as e}from"./iframe-D6kSd-sq.js";import{D as l}from"./data-editor-all-BR2bM7Ah.js";import{B as i,D as m,u as p,d as c}from"./utils-D3U6Mryq.js";import{S as u}from"./story-utils-7Bd-fb3a.js";import"./image-window-loader-BJ-nK6tk.js";import"./throttle-Giw0dgM7.js";import"./marked.esm-BE4bkcsn.js";import"./flatten-Bfd1RxXH.js";import"./scrolling-data-grid-xJAvs0bX.js";import"./index-D_kXk1yT.js";import"./index.esm-CX8xY78Z.js";import"./index-Ctd4FlUz.js";const O={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e.createElement(u,null,e.createElement(i,{title:"One Million Rows",description:e.createElement(m,null,"Data grid supports over 1 million rows. Your limit is mostly RAM.")},e.createElement(t,null)))]},r=()=>{const{cols:t,getCellContent:n}=p(6);return e.createElement(l,{...c,getCellContent:n,columns:t,rowHeight:31,rows:1e6,rowMarkers:"number"})};var o,s,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(6);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rowHeight={31} rows={1_000_000} rowMarkers="number" />;
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const h=["OneMillionRows"];export{r as OneMillionRows,h as __namedExportsOrder,O as default};
