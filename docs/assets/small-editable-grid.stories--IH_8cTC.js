import{R as e}from"./iframe-D6kSd-sq.js";import{D as i}from"./data-editor-all-BR2bM7Ah.js";import{B as m,D as d,u as p,d as c}from"./utils-D3U6Mryq.js";import{S as u}from"./story-utils-7Bd-fb3a.js";import"./image-window-loader-BJ-nK6tk.js";import"./throttle-Giw0dgM7.js";import"./marked.esm-BE4bkcsn.js";import"./flatten-Bfd1RxXH.js";import"./scrolling-data-grid-xJAvs0bX.js";import"./index-D_kXk1yT.js";import"./index.esm-CX8xY78Z.js";import"./index-Ctd4FlUz.js";const _={title:"Glide-Data-Grid/DataEditor Demos",decorators:[r=>e.createElement(u,null,e.createElement(m,{title:"Editable Grid",description:e.createElement(d,null,"Data grid supports overlay editors for changing values. There are bespoke editors for numbers, strings, images, booleans, markdown, and uri.")},e.createElement(r,null)))]},t=()=>{const{cols:r,getCellContent:s,setCellValue:n}=p(6,!1);return e.createElement(i,{...c,getCellContent:s,columns:r,rows:20,onCellEdited:n})};var o,a,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    setCellValue
  } = useMockDataGenerator(6, false);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rows={20} onCellEdited={setCellValue} />;
}`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const v=["SmallEditableGrid"];export{t as SmallEditableGrid,v as __namedExportsOrder,_ as default};
