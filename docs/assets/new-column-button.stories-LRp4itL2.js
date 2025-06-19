import{R as t}from"./iframe-D6kSd-sq.js";import{D as c}from"./data-editor-all-BR2bM7Ah.js";import{B as u,D as i,P as p,u as d,d as C,C as E}from"./utils-D3U6Mryq.js";import{S as w}from"./story-utils-7Bd-fb3a.js";import"./image-window-loader-BJ-nK6tk.js";import"./throttle-Giw0dgM7.js";import"./marked.esm-BE4bkcsn.js";import"./flatten-Bfd1RxXH.js";import"./scrolling-data-grid-xJAvs0bX.js";import"./index-D_kXk1yT.js";import"./index.esm-CX8xY78Z.js";import"./index-Ctd4FlUz.js";const R={title:"Glide-Data-Grid/DataEditor Demos",decorators:[e=>t.createElement(w,null,t.createElement(u,{title:"New column button",description:t.createElement(i,null,"A new column button can be created using the ",t.createElement(p,null,"rightElement"),".")},t.createElement(e,null)))]},o=()=>{const{cols:e,getCellContent:a}=d(10,!0),s=t.useMemo(()=>e.map(m=>({...m,grow:1})),[e]);return t.createElement(c,{...C,getCellContent:a,columns:s,rightElement:t.createElement(E,null,t.createElement("button",{onClick:()=>window.alert("Add a column!")},"+")),rightElementProps:{fill:!1,sticky:!1},rows:3e3,rowMarkers:"both"})};var n,r,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(10, true);
  const columns = React.useMemo(() => cols.map(c => ({
    ...c,
    grow: 1
  })), [cols]);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={columns} rightElement={<ColumnAddButton>
                    <button onClick={() => window.alert("Add a column!")}>+</button>
                </ColumnAddButton>} rightElementProps={{
    fill: false,
    sticky: false
  }} rows={3000} rowMarkers="both" />;
}`,...(l=(r=o.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const S=["NewColumnButton"];export{o as NewColumnButton,S as __namedExportsOrder,R as default};
