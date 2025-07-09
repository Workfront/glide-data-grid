var ce=Object.defineProperty;var ue=(n,e,t)=>e in n?ce(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var z=(n,e,t)=>ue(n,typeof e!="symbol"?e+"":e,t);import{s as I}from"./marked.esm-DMz2Pe0E.js";import{R as M,g as de,r as s}from"./iframe-u-uZSGaK.js";import{u as pe}from"./index.esm-a_Z286XL.js";import{y as A}from"./index-D_kXk1yT.js";import{q as fe,s as me,u as ge,w as Ce,x as ye,i as oe,y as he,z as be,A as ke,r as _,n as T}from"./throttle-BIWfclFY.js";import{G as m,f as Se,h as N,j as E,D as ae}from"./data-editor-all-BoqWMYjH.js";import"./index-DAIvD5fl.js";import"./flatten-CPDsTVcy.js";function ve(n){const[e,t]=M.useState([]),[o,a]=M.useState(void 0),{columns:r,onGroupHeaderClicked:i,onGridSelectionChange:f,getGroupDetails:u,gridSelection:l,freezeColumns:d=0,theme:C}=n,g=typeof d=="number"?d:d[0],c=typeof d=="number"?0:d[1],h=l??o,p=M.useMemo(()=>{const b=[];let S=[-1,-1],w;for(let F=g;F<r.length-c;F++){const D=r[F].group??"",O=e.includes(D);w!==D&&S[0]!==-1&&(b.push(S),S=[-1,-1]),O&&S[0]!==-1?S[1]+=1:O?S=[F,1]:S[0]!==-1&&(b.push(S),S=[-1,-1]),w=D}return S[0]!==-1&&b.push(S),b},[e,r,g,c]),k=M.useMemo(()=>p.length===0?r:r.map((b,S)=>{for(const[w,F]of p)if(S>=w&&S<w+F){let R=8;return S===w+F-1&&(R=36),{...b,width:R,themeOverride:{bgCell:C.bgCellMedium}}}return b}),[r,p,C.bgCellMedium]),y=M.useCallback((b,S)=>{var F;i==null||i(b,S);const w=((F=k[b])==null?void 0:F.group)??"";w!==""&&(S.preventDefault(),t(R=>R.includes(w)?R.filter(D=>D!==w):[...R,w]))},[k,i]),v=M.useCallback(b=>{if(b.current!==void 0){const S=b.current.cell[0],w=k[S];t(F=>F.includes((w==null?void 0:w.group)??"")?F.filter(R=>R!==w.group):F)}f!==void 0?f(b):a(b)},[k,f]),x=M.useCallback(b=>({...u==null?void 0:u(b),name:b,overrideTheme:e.includes(b??"")?{bgHeader:C.bgHeaderHasFocus}:void 0}),[e,u,C.bgHeaderHasFocus]);return{columns:k,onGroupHeaderClicked:y,onGridSelectionChange:v,getGroupDetails:x,gridSelection:h}}var we=me,Fe=fe;function Ae(n,e){var t=-1,o=Fe(n)?Array(n.length):[];return we(n,function(a,r,i){o[++t]=e(a,r,i)}),o}var Re=Ae;function xe(n,e){var t=n.length;for(n.sort(e);t--;)n[t]=n[t].value;return n}var Me=xe,L=ge;function Ee(n,e){if(n!==e){var t=n!==void 0,o=n===null,a=n===n,r=L(n),i=e!==void 0,f=e===null,u=e===e,l=L(e);if(!f&&!l&&!r&&n>e||r&&i&&u&&!f&&!l||o&&i&&u||!t&&u||!a)return 1;if(!o&&!r&&!l&&n<e||l&&t&&a&&!o&&!r||f&&t&&a||!i&&a||!u)return-1}return 0}var He=Ee,De=He;function Ue(n,e,t){for(var o=-1,a=n.criteria,r=e.criteria,i=a.length,f=t.length;++o<i;){var u=De(a[o],r[o]);if(u){if(o>=f)return u;var l=t[o];return u*(l=="desc"?-1:1)}}return n.index-e.index}var Ge=Ue,$=Ce,Be=he,Te=ke,Ie=Re,_e=Me,$e=be,Oe=Ge,ze=ye,Ne=oe;function Le(n,e,t){e.length?e=$(e,function(r){return Ne(r)?function(i){return Be(i,r.length===1?r[0]:r)}:r}):e=[ze];var o=-1;e=$(e,$e(Te));var a=Ie(n,function(r,i,f){var u=$(e,function(l){return l(r)});return{criteria:u,index:++o,value:r}});return _e(a,function(r,i){return Oe(r,i,t)})}var Ke=Le,Pe=Ke,K=oe;function Ve(n,e,t,o){return n==null?[]:(K(e)||(e=e==null?[]:[e]),t=o?void 0:t,K(t)||(t=t==null?[]:[t]),Pe(n,e,t))}var We=Ve;const P=de(We);function B(n){return n.id??`${n.group??""}/${n.title}`}function V(n,e){return typeof e=="string"?B(n)===e:B(n)===B(e)}function W(n,e,t){const o=e.indexOf(n);if(o===-1)return Number.MAX_SAFE_INTEGER;const a=t.findIndex(r=>V(n,r));if(a!==-1)return a;for(let r=o;r>=0;r--){const i=t.findIndex(f=>V(e[r],f));if(i!==-1)return i+.5}return-1}function Ze(n){const{columns:e,getCellContent:t,onColumnMoved:o}=n,[a,r]=s.useState(()=>e.map(B)),i=s.useMemo(()=>P(e,d=>W(d,e,a)),[a,e]),f=s.useRef(o);f.current=o;const u=s.useCallback((d,C)=>{var g;r(c=>{const h=[...c],[p]=h.splice(d,1);return h.splice(C,0,p),h}),(g=f.current)==null||g.call(f,d,C)},[]);s.useEffect(()=>{r(d=>P(e,C=>W(C,e,d)).map(B))},[e]);const l=s.useCallback(d=>{const[C,g]=d,c=i[C],h=e.indexOf(c);return t([h,g])},[i,e,t]);return{columns:i,onColumnMoved:u,getCellContent:l}}function je(n){var e,t;switch(n.kind){case m.Number:return((e=n.data)==null?void 0:e.toString())??"";case m.Boolean:return((t=n.data)==null?void 0:t.toString())??"";case m.Markdown:case m.RowID:case m.Text:case m.Uri:return n.data??"";case m.Bubble:case m.Image:return n.data.join("");case m.Drilldown:return n.data.map(o=>o.text).join("");case m.Protected:case m.Loading:return"";case m.Custom:return n.copyData}}function Z(n){if(typeof n=="number")return n;if(n.length>0){const e=Number(n);isNaN(e)||(n=e)}return n}function Ye(n,e){return n=Z(n),e=Z(e),typeof n=="string"&&typeof e=="string"?n.localeCompare(e):typeof n=="number"&&typeof e=="number"?n===e?0:n>e?1:-1:n==e?0:n>e?1:-1}function Xe(n,e){return n>e?1:n===e?0:-1}function qe(n){const{sort:e,rows:t,getCellContent:o}=n;let a=e===void 0?void 0:n.columns.findIndex(l=>e.column===l||l.id!==void 0&&e.column.id===l.id);a===-1&&(a=void 0);const r=(e==null?void 0:e.direction)??"asc",i=s.useMemo(()=>{if(a===void 0)return;const l=new Array(t),d=[a,0];for(let g=0;g<t;g++)d[1]=g,l[g]=je(o(d));let C;return(e==null?void 0:e.mode)==="raw"?C=_(t).sort((g,c)=>Xe(l[g],l[c])):(e==null?void 0:e.mode)==="smart"?C=_(t).sort((g,c)=>Ye(l[g],l[c])):C=_(t).sort((g,c)=>l[g].localeCompare(l[c])),r==="desc"&&C.reverse(),C},[o,t,e==null?void 0:e.mode,r,a]),f=s.useCallback(l=>i===void 0?l:i[l],[i]),u=s.useCallback(([l,d])=>i===void 0?o([l,d]):(d=i[d],o([l,d])),[o,i]);return i===void 0?{getCellContent:n.getCellContent,getOriginalIndex:f}:{getOriginalIndex:f,getCellContent:u}}const Je={undoHistory:[],redoHistory:[],canUndo:!1,canRedo:!1,isApplyingUndo:!1,isApplyingRedo:!1};function Qe(n,e){const t={...n};switch(e.type){case"undo":if(n.canUndo){t.undoHistory=[...n.undoHistory];const o=t.undoHistory.pop();return t.operation=o,t.canUndo=t.undoHistory.length>0,t.isApplyingUndo=!0,t}return n;case"redo":if(n.canRedo){t.redoHistory=[...n.redoHistory];const o=t.redoHistory.pop();return t.operation=o,t.canRedo=t.redoHistory.length>0,t.isApplyingRedo=!0,t}return n;case"operationApplied":return t.operation=void 0,t.isApplyingRedo=!1,t.isApplyingUndo=!1,t;case"edit":return!n.isApplyingRedo&&!n.isApplyingUndo&&(t.undoHistory=[...n.undoHistory,e.batch],t.redoHistory=[],t.canUndo=!0,t.canRedo=!1),n.isApplyingUndo&&(t.redoHistory=[...n.redoHistory,e.batch],t.canRedo=!0),n.isApplyingRedo&&(t.undoHistory=[...n.undoHistory,e.batch],t.canUndo=!0),t;default:throw new Error("Invalid action")}}function en(n,e,t,o){const[a,r]=s.useReducer(Qe,Je),i=s.useRef(null),f=s.useRef(null),u=s.useRef(!1),l=s.useRef(!1);s.useEffect(()=>{u.current=a.isApplyingUndo,l.current=a.isApplyingRedo},[a.isApplyingUndo,a.isApplyingRedo]);const[d,C]=s.useState(null),g=s.useRef(null),c=s.useCallback(y=>{C(y),g.current=y},[o]),h=s.useCallback((y,v)=>{if(!(u.current||l.current)&&g.current){clearTimeout(f.current);const b=e(y);i.current===null&&(i.current={edits:[],selection:g.current}),i.current.edits.push({cell:y,newValue:b}),f.current=setTimeout(()=>{i.current&&(r({type:"edit",batch:i.current}),i.current=null)},0)}t(y,v)},[t,e]),p=s.useCallback(()=>{r({type:"undo"})},[r]),k=s.useCallback(()=>{r({type:"redo"})},[r]);return s.useEffect(()=>{if(a.operation&&g.current&&n.current){const y=[],v={edits:[],selection:g.current};for(const x of a.operation.edits){const b=e(x.cell);v.edits.push({cell:x.cell,newValue:b}),t(x.cell,x.newValue),y.push({cell:x.cell})}C(a.operation.selection),g.current=a.operation.selection,n.current.updateCells(y),r({type:"edit",batch:v}),r({type:"operationApplied"})}},[a.operation,n,t,C,e]),s.useEffect(()=>{const y=v=>{v.key==="z"&&(v.metaKey||v.ctrlKey)&&(v.shiftKey?k():p()),v.key==="y"&&(v.metaKey||v.ctrlKey)&&k()};return window.addEventListener("keydown",y),()=>{window.removeEventListener("keydown",y)}},[p,k]),s.useMemo(()=>({undo:p,redo:k,canUndo:a.canUndo,canRedo:a.canRedo,onCellEdited:h,onGridSelectionChange:c,gridSelection:d}),[p,k,h,a.canUndo,a.canRedo,c,d])}A.seed(1337);function nn(n){return!!n}function tn(n,e){var o;const t=n.data;if(typeof t==typeof e.data)return{...e,data:t};switch(e.kind){case m.Uri:return T(t)?{...e,data:t[0]}:{...e,data:(t==null?void 0:t.toString())??""};case m.Boolean:return T(t)?{...e,data:t[0]!==void 0}:n.kind===m.Boolean?{...e,data:n.data}:{...e,data:!!nn(t)};case m.Image:return T(t)?{...e,data:[t[0]]}:{...e,data:[(t==null?void 0:t.toString())??""]};case m.Number:return{...e,data:0};case m.Text:case m.Markdown:return T(t)?{...e,data:t[0].toString()??""}:{...e,data:((o=n.data)==null?void 0:o.toString())??""};case m.Custom:return e}cn()}function rn(n){const{getContent:e,...t}=n;return t}function j(n,e){const t=[{title:"First name",id:"First name",group:e?"Name":void 0,icon:E.HeaderString,hasMenu:!1,getContent:()=>{const r=A.name.firstName();return{kind:m.Text,displayData:r,data:r,allowOverlay:!0,readonly:!0}}},{title:"Last name",id:"Last name",group:e?"Name":void 0,icon:E.HeaderString,hasMenu:!1,getContent:()=>{const r=A.name.lastName();return{kind:m.Text,displayData:r,data:r,allowOverlay:!0,readonly:!0}}},{title:"Avatar",id:"Avatar",group:e?"Info":void 0,icon:E.HeaderImage,hasMenu:!1,getContent:()=>{const r=Math.round(Math.random()*100);return{kind:m.Image,data:[`https://picsum.photos/id/${r}/900/900`],displayData:[`https://picsum.photos/id/${r}/40/40`],allowOverlay:!0,readonly:!0}}},{title:"Email",id:"Email",group:e?"Info":void 0,icon:E.HeaderString,hasMenu:!1,getContent:()=>{const r=A.internet.email();return{kind:m.Text,displayData:r,data:r,allowOverlay:!0,readonly:!0}}},{title:"Title",id:"Title",group:e?"Info":void 0,icon:E.HeaderString,hasMenu:!1,getContent:()=>{const r=A.name.jobTitle();return{kind:m.Text,displayData:r,data:r,allowOverlay:!0,readonly:!0}}},{title:"More Info",id:"More Info",group:e?"Info":void 0,icon:E.HeaderUri,hasMenu:!1,getContent:()=>{const r=A.internet.url();return{kind:m.Uri,displayData:r,data:r,allowOverlay:!0,readonly:!0}}}];if(n<t.length)return t.slice(0,n);const o=n-t.length,a=[...new Array(o)].map((r,i)=>on(i+t.length,e));return[...t,...a]}function on(n,e){return{title:`Column ${n}`,id:`Column ${n}`,group:e?`Group ${Math.round(n/3)}`:void 0,icon:E.HeaderString,hasMenu:!1,getContent:()=>{const t=A.lorem.word();return{kind:m.Text,data:t,displayData:t,allowOverlay:!0,readonly:!0}}}}class an{constructor(){z(this,"cachedContent",new Map)}get(e,t){const o=this.cachedContent.get(e);if(o!==void 0)return o[t]}set(e,t,o){let a=this.cachedContent.get(e);a===void 0&&this.cachedContent.set(e,a=[]),a[t]=o}}function sn(n,e=!0,t=!1){const o=s.useRef(new an),[a,r]=s.useState(()=>j(n,t));s.useEffect(()=>{r(j(n,t))},[t,n]);const i=s.useCallback((c,h)=>{r(p=>{const k=p.findIndex(v=>v.title===c.title),y=[...p];return y.splice(k,1,{...p[k],width:h}),y})},[]),f=s.useMemo(()=>a.map(rn),[a]),u=s.useRef(a);u.current=a;const l=s.useCallback(([c,h])=>{let p=o.current.get(c,h);return p===void 0&&(p=u.current[c].getContent(),!e&&Se(p)&&(p={...p,readonly:e}),o.current.set(c,h,p)),p},[e]),d=s.useCallback(c=>{const h=[];for(let p=c.y;p<c.y+c.height;p++){const k=[];for(let y=c.x;y<c.x+c.width;y++)k.push(l([y,p]));h.push(k)}return h},[l]),C=s.useCallback(([c,h],p)=>{o.current.set(c,h,p)},[]),g=s.useCallback(([c,h],p)=>{let k=o.current.get(c,h);if(k===void 0&&(k=a[c].getContent()),N(p)&&N(k)){const y=tn(p,k);o.current.set(c,h,{...y,displayData:typeof y.data=="string"?y.data:y.displayData,lastUpdated:performance.now()})}},[a]);return{cols:f,getCellContent:l,onColumnResize:i,setCellValue:g,getCellsForSelection:d,setCellValueRaw:C}}function ln(n="This should not happen"){throw new Error(n)}function cn(n){return ln("Hell froze over")}A.seed(1337);const un=I("div")({name:"SimpleWrapper",class:"ss4kmn3",propsAsIs:!1}),dn=n=>s.createElement(un,null,s.createElement("div",{className:"content"},n.children)),Fn={title:"Extra Packages/Source",decorators:[n=>s.createElement(dn,null,s.createElement(n,null))]},pn=I("div")({name:"BeautifulStyle",class:"bkh67gx",propsAsIs:!1}),se=n=>{const{title:e,children:t,description:o}=n,{ref:a,width:r,height:i}=pe();return s.createElement(pn,null,s.createElement("h1",null,e),o,s.createElement("div",{className:"sizer"},s.createElement("div",{className:"sizer-clip",ref:a},s.createElement("div",{style:{position:"relative",width:r??100,height:i??100}},t))))},ie=I("p")({name:"Description",class:"d1deot3s",propsAsIs:!1}),H=I("p")({name:"MoreInfo",class:"m1ml0sw1",propsAsIs:!1}),le={smoothScrollX:!0,smoothScrollY:!0,isDraggable:!1,rowMarkers:"none",width:"100%"},fn={accentColor:"#4F5DFF",accentFg:"#FFFFFF",accentLight:"rgba(62, 116, 253, 0.1)",textDark:"#313139",textMedium:"#737383",textLight:"#B2B2C0",textBubble:"#313139",bgIconHeader:"#737383",fgIconHeader:"#FFFFFF",textHeader:"#313139",textGroupHeader:"#313139BB",textHeaderSelected:"#FFFFFF",bgCell:"#FFFFFF",bgCellMedium:"#FAFAFB",bgHeader:"#F7F7F8",bgHeaderHasFocus:"#E9E9EB",bgHeaderHovered:"#EFEFF1",bgBubble:"#EDEDF3",bgBubbleSelected:"#FFFFFF",bubbleHeight:20,bubblePadding:6,bubbleMargin:4,headerIconSize:20,markerFontStyle:"13px",bgSearchResult:"#fff9e3",borderColor:"rgba(115, 116, 131, 0.16)",horizontalBorderColor:"rgba(115, 116, 131, 0.16)",drilldownBorder:"rgba(0, 0, 0, 0)",linkColor:"#4F5DFF",cellHorizontalPadding:8,cellVerticalPadding:3,headerFontStyle:"600 13px",baseFontStyle:"13px",editorFontSize:"13px",lineHeight:1.4,fontFamily:"Inter, Roboto, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, noto, arial, sans-serif"},mn=[{title:"A",width:200,group:"Group 1"},{title:"B",width:200,group:"Group 1"},{title:"C",width:200,group:"Group 2"},{title:"D",width:200,group:"Group 2"},{title:"E",width:200,group:"Group 2"}],U=()=>{const n=s.useRef({}),e=1e5,t=Ze({columns:mn,getCellContent:s.useCallback(([u,l])=>{if(u===0)return{kind:m.Text,allowOverlay:!0,data:`${l}`,displayData:`${l}`};const d=`${u},${l}`;n.current[d]===void 0&&(n.current[d]=A.name.firstName()+" "+A.name.lastName());const C=n.current[d];return{kind:m.Text,allowOverlay:!0,data:C,displayData:C}},[])}),[o,a]=s.useState(),r=qe({columns:t.columns,getCellContent:t.getCellContent,rows:e,sort:o===void 0?void 0:{column:t.columns[o],direction:"desc",mode:"smart"}}),i=ve({columns:t.columns,theme:fn,freezeColumns:0}),f=s.useCallback(u=>{a(u)},[]);return s.createElement(se,{title:"Custom source extensions",description:s.createElement(ie,null,"Fixme.")},s.createElement(ae,{...le,...t,...r,...i,rows:e,onColumnMoved:t.onColumnMoved,onHeaderClicked:f}))};U.parameters={options:{showPanel:!1}};const G=()=>{const{cols:n,getCellContent:e,setCellValue:t}=sn(6),o=s.useRef(null),{gridSelection:a,onCellEdited:r,onGridSelectionChange:i,undo:f,canRedo:u,canUndo:l,redo:d}=en(o,e,t);return s.createElement(se,{title:"Undo / Redo Support",description:s.createElement(ie,null,"A simple undo/redo implementation",s.createElement(H,null,"Use keyboard shortcuts CMD+Z and CMD+SHIFT+Z / CTRL+Z and CTRL+Y. Or click these buttons:",s.createElement("button",{onClick:f,disabled:!l,style:{opacity:l?1:.4}},"Undo"),s.createElement("button",{onClick:d,disabled:!u,style:{opacity:u?1:.4}},"Redo")),s.createElement(H,null,"It works by taking a snapshot of the content of a cell before it is edited and replaying any edits back."))},s.createElement(ae,{...le,ref:o,onCellEdited:r,getCellContent:e,gridSelection:a??void 0,onGridSelectionChange:i,columns:n,rows:1e3}))};G.parameters={options:{showPanel:!1}};var Y,X,q;H.parameters={...H.parameters,docs:{...(Y=H.parameters)==null?void 0:Y.docs,source:{originalSource:`styled.p\`
    font-size: 14px;
    flex-shrink: 0;
    margin: 0 0 20px 0;

    button {
        background-color: #f4f4f4;
        color: #2b2b2b;
        padding: 2px 6px;
        font-family: monospace;
        font-size: 14px;
        border-radius: 4px;
        box-shadow: 0px 1px 2px #00000040;
        margin: 0 0.1em;
        border: none;
        cursor: pointer;
    }
\``,...(q=(X=H.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};var J,Q,ee;U.parameters={...U.parameters,docs:{...(J=U.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  const cache = React.useRef<Record<string, string>>({});
  const rows = 100_000;
  const moveArgs = useMoveableColumns({
    columns: cols,
    getCellContent: React.useCallback(([col, row]) => {
      if (col === 0) {
        return {
          kind: GridCellKind.Text,
          allowOverlay: true,
          data: \`\${row}\`,
          displayData: \`\${row}\`
        };
      }
      const key = \`\${col},\${row}\`;
      if (cache.current[key] === undefined) {
        cache.current[key] = faker.name.firstName() + " " + faker.name.lastName();
      }
      const d = cache.current[key];
      return {
        kind: GridCellKind.Text,
        allowOverlay: true,
        data: d,
        displayData: d
      };
    }, [])
  });
  const [sort, setSort] = React.useState<number>();
  const sortArgs = useColumnSort({
    columns: moveArgs.columns,
    getCellContent: moveArgs.getCellContent,
    rows,
    sort: sort === undefined ? undefined : {
      column: moveArgs.columns[sort],
      direction: "desc",
      mode: "smart"
    }
  });
  const collapseArgs = useCollapsingGroups({
    columns: moveArgs.columns,
    theme: testTheme,
    freezeColumns: 0
  });
  const onHeaderClick = React.useCallback((index: number) => {
    setSort(index);
  }, []);
  return <BeautifulWrapper title="Custom source extensions" description={<Description>Fixme.</Description>}>
            <DataEditor {...defaultProps} {...moveArgs} {...sortArgs} {...collapseArgs} rows={rows} onColumnMoved={moveArgs.onColumnMoved} onHeaderClicked={onHeaderClick} />
        </BeautifulWrapper>;
}`,...(ee=(Q=U.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var ne,te,re;G.parameters={...G.parameters,docs:{...(ne=G.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  const {
    cols: columns,
    getCellContent,
    setCellValue
  } = useMockDataGenerator(6);
  const gridRef = React.useRef<DataEditorRef>(null);
  const {
    gridSelection,
    onCellEdited,
    onGridSelectionChange,
    undo,
    canRedo,
    canUndo,
    redo
  } = useUndoRedo(gridRef, getCellContent, setCellValue);
  return <BeautifulWrapper title="Undo / Redo Support" description={<Description>
                    A simple undo/redo implementation
                    <MoreInfo>
                        Use keyboard shortcuts CMD+Z and CMD+SHIFT+Z / CTRL+Z and CTRL+Y. Or click these buttons:
                        <button onClick={undo} disabled={!canUndo} style={{
        opacity: canUndo ? 1 : 0.4
      }}>
                            Undo
                        </button>
                        <button onClick={redo} disabled={!canRedo} style={{
        opacity: canRedo ? 1 : 0.4
      }}>
                            Redo
                        </button>
                    </MoreInfo>
                    <MoreInfo>
                        It works by taking a snapshot of the content of a cell before it is edited and replaying any
                        edits back.
                    </MoreInfo>
                </Description>}>
            <DataEditor {...defaultProps} ref={gridRef} onCellEdited={onCellEdited} getCellContent={getCellContent} gridSelection={gridSelection ?? undefined} onGridSelectionChange={onGridSelectionChange} columns={columns} rows={1000} />
        </BeautifulWrapper>;
}`,...(re=(te=G.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const An=["MoreInfo","UseDataSource","UndoRedo"];export{H as MoreInfo,G as UndoRedo,U as UseDataSource,An as __namedExportsOrder,Fn as default};
