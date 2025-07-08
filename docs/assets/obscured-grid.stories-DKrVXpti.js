import{R as t}from"./iframe-BP3_vWhA.js";import{D as c}from"./data-editor-all-DyzA-o8_.js";import{B as d,D as u,M as m,u as C,d as p}from"./utils-DBkIMe1x.js";import{S as g}from"./story-utils-D7tohlIq.js";import"./image-window-loader-Cl_0oGEe.js";import"./throttle-CBl_kIso.js";import"./marked.esm-ZC1ceR6y.js";import"./flatten-oVtbvkMl.js";import"./scrolling-data-grid-DNdFRgOZ.js";import"./index-D_kXk1yT.js";import"./index.esm-DSbkiruP.js";import"./index-DmJ9S4Kq.js";const O={title:"Glide-Data-Grid/DataEditor Demos",decorators:[n=>t.createElement(g,null,t.createElement(d,{title:"Obscured Data Grid",description:t.createElement(t.Fragment,null,t.createElement(u,null,"The data grid should respect being obscured by other elements"),t.createElement(m,null,"This is mostly a test area because its hard to test with unit tests."))},t.createElement(n,null),t.createElement("div",{style:{position:"absolute",top:0,left:"50%",width:"50%",height:"100%",background:"rgba(0,0,0,0.5)",zIndex:100}})))]},o=()=>{const{cols:n,getCellContent:s,setCellValue:i}=C(60,!1);return t.createElement(c,{...p,getCellContent:s,onItemHovered:e=>console.log("onItemHovered",e),onCellClicked:e=>console.log("onCellClicked",e),onHeaderClicked:e=>console.log("onHeaderClicked",e),onCellContextMenu:e=>console.log("onCellContextMenu",e),onHeaderContextMenu:e=>console.log("onHeaderContextMenu",e),columns:n,rowMarkers:"both",onPaste:!0,onCellEdited:i,trailingRowOptions:{sticky:!0,tint:!0,hint:"New row..."},rows:1e4})};var l,r,a;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    setCellValue
  } = useMockDataGenerator(60, false);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} onItemHovered={x => console.log("onItemHovered", x)} onCellClicked={x => console.log("onCellClicked", x)} onHeaderClicked={x => console.log("onHeaderClicked", x)} onCellContextMenu={x => console.log("onCellContextMenu", x)} onHeaderContextMenu={x => console.log("onHeaderContextMenu", x)} columns={cols} rowMarkers={"both"} onPaste={true} // we want to allow paste to just call onCellEdited
  onCellEdited={setCellValue} // Sets the mock cell content
  trailingRowOptions={{
    // How to get the trailing row to look right
    sticky: true,
    tint: true,
    hint: "New row..."
  }} rows={10_000} />;
}`,...(a=(r=o.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const v=["ObscuredDataGrid"];export{o as ObscuredDataGrid,v as __namedExportsOrder,O as default};
