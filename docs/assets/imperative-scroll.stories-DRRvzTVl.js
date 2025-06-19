import{R as e}from"./iframe-D6kSd-sq.js";import{D as u}from"./data-editor-all-BR2bM7Ah.js";import{a as g,B as f,D as C,P as v,M as E,d as b}from"./utils-D3U6Mryq.js";import{S as h}from"./story-utils-7Bd-fb3a.js";import"./image-window-loader-BJ-nK6tk.js";import"./throttle-Giw0dgM7.js";import"./marked.esm-BE4bkcsn.js";import"./flatten-Bfd1RxXH.js";import"./scrolling-data-grid-xJAvs0bX.js";import"./index-D_kXk1yT.js";import"./index.esm-CX8xY78Z.js";import"./index-Ctd4FlUz.js";const z={title:"Glide-Data-Grid/DataEditor Demos",decorators:[o=>e.createElement(h,null,e.createElement(o,null))]},t=o=>{const{cols:s,getCellContent:c,onColumnResize:p,setCellValue:m}=g(),n=e.useRef(null),d=()=>{var l;(l=n.current)==null||l.scrollTo(4,99,"both",o.paddingX,o.paddingY,{vAlign:o.vAlign,hAlign:o.hAlign,behavior:o.behavior})};return e.createElement(f,{title:"Imperative scrolling",description:e.createElement(e.Fragment,null,e.createElement(C,null,"You can imperatively scroll to a cell by calling ",e.createElement(v,null,"scrollTo")," on a DataEditor ref."),e.createElement(E,null,"Click ",e.createElement("button",{onClick:d},"Here")," to scroll to column 4 row 100"))},e.createElement(u,{...b,ref:n,rowMarkers:"clickable-number",getCellContent:c,columns:s,onCellEdited:m,onColumnResize:p,rows:1e4}))};t.args={paddingY:0,paddingX:0,vAlign:"start",hAlign:"start",behavior:"auto"};t.argTypes={paddingY:0,paddingX:0,vAlign:{control:{type:"select"},options:["start","center","end",void 0]},hAlign:{control:{type:"select"},options:["start","center","end",void 0]},behavior:{control:{type:"select"},options:["smooth","instant","auto",void 0]}};var r,a,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`p => {
  const {
    cols,
    getCellContent,
    onColumnResize,
    setCellValue
  } = useAllMockedKinds();
  const ref = React.useRef<DataEditorRef>(null);
  const onClick = () => {
    ref.current?.scrollTo(4, 99, "both", p.paddingX, p.paddingY, {
      vAlign: p.vAlign,
      hAlign: p.hAlign,
      behavior: p.behavior
    });
  };
  return <BeautifulWrapper title="Imperative scrolling" description={<>
                    <Description>
                        You can imperatively scroll to a cell by calling <PropName>scrollTo</PropName> on a DataEditor
                        ref.
                    </Description>
                    <MoreInfo>
                        Click <button onClick={onClick}>Here</button> to scroll to column 4 row 100
                    </MoreInfo>
                </>}>
            <DataEditor {...defaultProps} ref={ref} rowMarkers="clickable-number" getCellContent={getCellContent} columns={cols} onCellEdited={setCellValue} onColumnResize={onColumnResize} rows={10_000} />
        </BeautifulWrapper>;
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const B=["ImperativeScroll"];export{t as ImperativeScroll,B as __namedExportsOrder,z as default};
