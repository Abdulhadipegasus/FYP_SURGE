(this["webpackJsonpminton-react"]=this["webpackJsonpminton-react"]||[]).push([[112],{1047:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(26),r=a(128),l=a(137),i=a(146),o=a(174),d=a(44),u=a.n(d),b=a(117),j=a(502),m=a(629),p=a(2);const g=[{Header:"Customer",accessor:"name",sort:!0,Cell:e=>{let{row:t}=e;return Object(p.jsxs)("div",{className:"d-flex",children:[t.original.avatar?Object(p.jsx)("img",{src:t.original.avatar,alt:"",className:"me-3 rounded-circle avatar-sm"}):Object(p.jsx)("div",{className:"avatar-sm me-3",children:Object(p.jsx)("div",{className:"avatar-title rounded-circle bg-soft-primary fw-medium text-primary",children:t.original.name[0]})}),Object(p.jsxs)("div",{className:"flex-1",children:[Object(p.jsx)("h5",{className:"mt-0 mb-1",children:Object(p.jsx)(c.b,{to:"#",className:"text-dark",children:t.original.name})}),Object(p.jsxs)("p",{className:"mb-0 font-13",children:["ID: ",t.original.id]})]})]})},classes:"table-user"},{Header:"Phone",accessor:"phone",sort:!0},{Header:"Balance",accessor:"balance",sort:!0},{Header:"Orders",accessor:"orders",sort:!0},{Header:"Last Order",accessor:"last_order",sort:!0},{Header:"Status",accessor:"status",sort:!0,Cell:e=>{let{row:t}=e;return Object(p.jsx)(n.a.Fragment,{children:Object(p.jsx)("span",{className:u()("badge",{"badge-soft-success":"Active"===t.original.status,"badge-soft-danger":"Blocked"===t.original.status}),children:t.original.status})})}},{Header:"Action",accessor:"action",sort:!1,Cell:()=>Object(p.jsxs)(n.a.Fragment,{children:[Object(p.jsxs)(c.b,{to:"#",className:"action-icon",children:[" ",Object(p.jsx)("i",{className:"mdi mdi-square-edit-outline"})]}),Object(p.jsxs)(c.b,{to:"#",className:"action-icon",children:[" ",Object(p.jsx)("i",{className:"mdi mdi-delete"})]})]})}],O=[{text:"10",value:10},{text:"25",value:25},{text:"All",value:m.b.length}];t.default=()=>Object(p.jsxs)(n.a.Fragment,{children:[Object(p.jsx)(b.a,{breadCrumbItems:[{label:"eCommerce",path:"/apps/ecommerce/customers"},{label:"Customers",path:"/apps/ecommerce/customers",active:!0}],title:"Customers"}),Object(p.jsx)(r.a,{children:Object(p.jsx)(l.a,{xs:12,children:Object(p.jsx)(i.a,{children:Object(p.jsxs)(i.a.Body,{children:[Object(p.jsxs)(r.a,{className:"mb-2",children:[Object(p.jsx)(l.a,{sm:4,children:Object(p.jsxs)(o.a,{className:"btn btn-danger mb-2",children:[Object(p.jsx)("i",{className:"mdi mdi-plus-circle me-1"})," Add Customers"]})}),Object(p.jsx)(l.a,{sm:8,children:Object(p.jsxs)("div",{className:"text-sm-end",children:[Object(p.jsx)(o.a,{className:"btn btn-success mb-2 me-1",children:Object(p.jsx)("i",{className:"mdi mdi-cog"})}),Object(p.jsx)(o.a,{className:"btn btn-light mb-2 me-1",children:"Import"}),Object(p.jsx)(o.a,{className:"btn btn-light mb-2",children:"Export"})]})})]}),Object(p.jsx)("div",{className:"table-responsive",children:Object(p.jsx)(j.a,{columns:g,data:m.b,pageSize:10,sizePerPageList:O,isSortable:!0,pagination:!0,isSelectable:!0,isSearchable:!0,tableClass:"table-centered dt-responsive nowrap w-100",theadClass:"table-light",searchBoxClass:"mb-2"})})]})})})})]})},107:function(e,t,a){"use strict";var s=a(0);t.a=function(e){var t=Object(s.useRef)(e);return Object(s.useEffect)((function(){t.current=e}),[e]),t}},108:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var s=a(0),n=a(107);function c(e){var t=Object(n.a)(e);return Object(s.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},109:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var s=a(44),n=a.n(s),c=/-(.)/g;var r=a(0),l=a(45),i=a(2);const o=e=>{return e[0].toUpperCase()+(t=e,t.replace(c,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function d(e){let{displayName:t=o(e),Component:a,defaultProps:s}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const c=r.forwardRef(((t,s)=>{let{className:c,bsPrefix:r,as:o=a||"div",...d}=t;const u=Object(l.a)(r,e);return Object(i.jsx)(o,{ref:s,className:n()(c,u),...d})}));return c.defaultProps=s,c.displayName=t,c}},110:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var s=a(0),n=a(108);function c(e,t,a,c){void 0===c&&(c=!1);var r=Object(n.a)(a);Object(s.useEffect)((function(){var a="function"===typeof e?e():e;return a.addEventListener(t,r,c),function(){return a.removeEventListener(t,r,c)}}),[e])}},111:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var s=a(0);function n(){var e=Object(s.useRef)(!0),t=Object(s.useRef)((function(){return e.current}));return Object(s.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},112:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var s=a(0);function n(e){var t=Object(s.useRef)(null);return Object(s.useEffect)((function(){t.current=e})),t.current}},113:function(e,t,a){"use strict";var s=a(0),n=(a(115),a(107),a(108));a(110),a(118);a(111),a(112);a(126),new WeakMap;var c=a(116),r=a(2);const l=["onKeyDown"];const i=s.forwardRef(((e,t)=>{let{onKeyDown:a}=e,s=function(e,t){if(null==e)return{};var a,s,n={},c=Object.keys(e);for(s=0;s<c.length;s++)a=c[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,l);const[i]=Object(c.b)(Object.assign({tagName:"a"},s)),o=Object(n.a)((e=>{i.onKeyDown(e),null==a||a(e)}));return((d=s.href)&&"#"!==d.trim()||s.role)&&"button"!==s.role?Object(r.jsx)("a",Object.assign({ref:t},s,{onKeyDown:a})):Object(r.jsx)("a",Object.assign({ref:t},s,i,{onKeyDown:o}));var d}));i.displayName="Anchor";t.a=i},115:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var s=a(0);function n(){return Object(s.useState)(null)}},116:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var s=a(0),n=a(2);const c=["as","disabled"];function r(e){let{tagName:t,disabled:a,href:s,target:n,rel:c,onClick:r,tabIndex:l=0,type:i}=e;t||(t=null!=s||null!=n||null!=c?"a":"button");const o={tagName:t};if("button"===t)return[{type:i||"button",disabled:a},o];const d=e=>{(a||"a"===t&&function(e){return!e||"#"===e.trim()}(s))&&e.preventDefault(),a?e.stopPropagation():null==r||r(e)};return[{role:"button",disabled:void 0,tabIndex:a?void 0:l,href:"a"===t&&a?void 0:s,target:"a"===t?n:void 0,"aria-disabled":a||void 0,rel:"a"===t?c:void 0,onClick:d,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),d(e))}},o]}const l=s.forwardRef(((e,t)=>{let{as:a,disabled:s}=e,l=function(e,t){if(null==e)return{};var a,s,n={},c=Object.keys(e);for(s=0;s<c.length;s++)a=c[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,c);const[i,{tagName:o}]=r(Object.assign({tagName:a,disabled:s},l));return Object(n.jsx)(o,Object.assign({},l,i,{ref:t}))}));l.displayName="Button",t.a=l},118:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var s=a(110),n=a(0);function c(e,t,a){void 0===a&&(a=!1);var c=Object(n.useCallback)((function(){return document}),[]);return Object(s.a)(c,e,t,a)}},126:function(e,t,a){"use strict";(function(e){var s=a(0),n="undefined"!==typeof e&&e.navigator&&"ReactNative"===e.navigator.product,c="undefined"!==typeof document;t.a=c||n?s.useLayoutEffect:s.useEffect}).call(this,a(69))},174:function(e,t,a){"use strict";var s=a(44),n=a.n(s),c=a(0),r=a(116),l=a(45),i=a(2);const o=c.forwardRef(((e,t)=>{let{as:a,bsPrefix:s,variant:c,size:o,active:d,className:u,...b}=e;const j=Object(l.a)(s,"btn"),[m,{tagName:p}]=Object(r.b)({tagName:a,...b}),g=p;return Object(i.jsx)(g,{...b,...m,ref:t,className:n()(u,j,d&&"active",c&&"".concat(j,"-").concat(c),o&&"".concat(j,"-").concat(o),b.href&&b.disabled&&"disabled")})}));o.displayName="Button",o.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=o},502:function(e,t,a){"use strict";var s=a(0),n=a.n(s),c=a(640),r=a(44),l=a.n(r),i=a(26),o=a(2);var d=e=>{let{tableProps:t,sizePerPageList:a}=e;const[c,r]=Object(s.useState)(t.pageCount),[d,u]=Object(s.useState)(t.state.pageIndex);Object(s.useEffect)((()=>{r(t.pageCount),u(t.state.pageIndex)}),[t.pageCount,t.state.pageIndex]);const b=Object(s.useCallback)(((e,t)=>e.filter((e=>e<=c))),[c]),j=Object(s.useCallback)(((e,t)=>t<7?b([1,2,3,4,5,6],t):e%5>=0&&e>4&&e+2<t?[1,e-1,e,e+1,t]:e%5>=0&&e>4&&e+2>=t?[1,t-3,t-2,t-1,t]:[1,2,3,4,5,t]),[b]),m=e=>{if(e===d+1)return;const a=j(e,c);g(b(a,c)),t.gotoPage(e-1)};Object(s.useEffect)((()=>{const e=j(null,c);g(e)}),[c,j]);const[p,g]=Object(s.useState)(j(null,c)),O=d+1;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"d-lg-flex align-items-center text-center pb-1",children:[a.length>0&&Object(o.jsxs)("div",{className:"d-inline-block me-3",children:[Object(o.jsx)("label",{className:"me-1",children:"Display :"}),Object(o.jsx)("select",{value:t.state.pageSize,onChange:e=>{t.setPageSize(Number(e.target.value))},className:"form-select d-inline-block w-auto",children:(a||[]).map(((e,t)=>Object(o.jsx)("option",{value:e.value,children:e.text},t)))})]}),Object(o.jsxs)("span",{className:"me-3",children:["Page"," ",Object(o.jsxs)("strong",{children:[d+1," of ",t.pageOptions.length]})," "]}),Object(o.jsxs)("span",{className:"d-inline-block align-items-center text-sm-start text-center my-sm-0 my-2",children:[Object(o.jsx)("label",{children:"Go to page : "}),Object(o.jsx)("input",{type:"number",value:d+1,min:"1",onChange:e=>{const a=e.target.value?Number(e.target.value)-1:0;t.gotoPage(a),u(t.state.pageIndex)},className:"form-control w-25 ms-1 d-inline-block"})]}),Object(o.jsxs)("ul",{className:"pagination pagination-rounded d-inline-flex ms-auto align-item-center mb-0",children:[Object(o.jsx)("li",{className:l()("page-item","paginate_button","previous",{disabled:1===O}),onClick:()=>{1!==O&&m(O-1)},children:Object(o.jsx)(i.b,{to:"#",className:"page-link",children:Object(o.jsx)("i",{className:"mdi mdi-chevron-left"})})},"prevpage"),(p||[]).map(((e,t,a)=>a[t-1]+1<e?Object(o.jsxs)(n.a.Fragment,{children:[Object(o.jsx)("li",{className:"page-item disabled d-none d-xl-inline-block",children:Object(o.jsx)(i.b,{to:"#",className:"page-link",children:"..."})}),Object(o.jsx)("li",{className:l()("page-item","d-none","d-xl-inline-block",{active:O===e}),onClick:t=>m(e),children:Object(o.jsx)(i.b,{to:"#",className:"page-link",children:e})})]},e):Object(o.jsx)("li",{className:l()("page-item","d-none","d-xl-inline-block",{active:O===e}),onClick:t=>m(e),children:Object(o.jsx)(i.b,{to:"#",className:"page-link",children:e})},e))),Object(o.jsx)("li",{className:l()("page-item","paginate_button","next",{disabled:O===t.pageCount}),onClick:()=>{O!==t.pageCount&&m(O+1)},children:Object(o.jsx)(i.b,{to:"#",className:"page-link",children:Object(o.jsx)("i",{className:"mdi mdi-chevron-right"})})},"nextpage")]})]})})};const u=e=>{let{preGlobalFilteredRows:t,globalFilter:a,setGlobalFilter:n,searchBoxClass:r}=e;const i=t.length,[d,u]=Object(s.useState)(a),b=Object(c.useAsyncDebounce)((e=>{n(e||void 0)}),200);return Object(o.jsx)("div",{className:l()(r),children:Object(o.jsxs)("span",{className:"d-flex align-items-center",children:["Search :"," ",Object(o.jsx)("input",{type:"search",value:d||"",onChange:e=>{u(e.target.value),b(e.target.value)},placeholder:"".concat(i," records..."),className:"form-control react-table-search ms-1"})]})})},b=Object(s.forwardRef)(((e,t)=>{let{indeterminate:a,...n}=e;const c=Object(s.useRef)(),r=t||c;return Object(s.useEffect)((()=>{r.current.indeterminate=a}),[r,a]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"form-check font-16 mb-0",children:[Object(o.jsx)("input",{type:"checkbox",className:"form-check-input",ref:r,...n}),Object(o.jsx)("label",{htmlFor:"form-check-input",className:"form-check-label"})]})})}));t.a=e=>{const t=e.isSearchable||!1,a=e.isSortable||!1,s=e.pagination||!1,n=e.isSelectable||!1,r=e.isExpandable||!1,i=e.sizePerPageList||[];let j={};t&&(j.useGlobalFilter=c.useGlobalFilter),a&&(j.useSortBy=c.useSortBy),r&&(j.useExpanded=c.useExpanded),s&&(j.usePagination=c.usePagination),n&&(j.useRowSelect=c.useRowSelect);const m=Object(c.useTable)({columns:e.columns,data:e.data,initialState:{pageSize:e.pageSize||10}},j.hasOwnProperty("useGlobalFilter")&&j.useGlobalFilter,j.hasOwnProperty("useSortBy")&&j.useSortBy,j.hasOwnProperty("useExpanded")&&j.useExpanded,j.hasOwnProperty("usePagination")&&j.usePagination,j.hasOwnProperty("useRowSelect")&&j.useRowSelect,(e=>{n&&e.visibleColumns.push((e=>[{id:"selection",Header:e=>{let{getToggleAllPageRowsSelectedProps:t}=e;return Object(o.jsx)("div",{children:Object(o.jsx)(b,{...t()})})},Cell:e=>{let{row:t}=e;return Object(o.jsx)("div",{children:Object(o.jsx)(b,{...t.getToggleRowSelectedProps()})})}},...e])),r&&e.visibleColumns.push((e=>[{id:"expander",Header:e=>{let{getToggleAllRowsExpandedProps:t,isAllRowsExpanded:a}=e;return Object(o.jsx)("span",{...t(),children:a?"-":"+"})},Cell:e=>{let{row:t}=e;return t.canExpand?Object(o.jsx)("span",{...t.getToggleRowExpandedProps({style:{paddingLeft:"".concat(2*t.depth,"rem")}}),children:t.isExpanded?"-":"+"}):null}},...e]))}));let p=s?m.page:m.rows;return Object(o.jsxs)(o.Fragment,{children:[t&&Object(o.jsx)(u,{preGlobalFilteredRows:m.preGlobalFilteredRows,globalFilter:m.state.globalFilter,setGlobalFilter:m.setGlobalFilter,searchBoxClass:e.searchBoxClass}),Object(o.jsx)("div",{className:"table-responsive",children:Object(o.jsxs)("table",{...m.getTableProps(),className:l()("table table-centered react-table",e.tableClass),children:[Object(o.jsx)("thead",{className:e.theadClass,children:(m.headerGroups||[]).map((e=>Object(o.jsx)("tr",{...e.getHeaderGroupProps(),children:(e.headers||[]).map((e=>Object(o.jsx)("th",{...e.getHeaderProps(e.sort&&e.getSortByToggleProps()),className:l()({sorting_desc:!0===e.isSortedDesc,sorting_asc:!1===e.isSortedDesc,sortable:!0===e.sort}),children:e.render("Header")})))})))}),Object(o.jsx)("tbody",{...m.getTableBodyProps(),children:(p||[]).map(((e,t)=>(m.prepareRow(e),Object(o.jsx)("tr",{...e.getRowProps(),children:(e.cells||[]).map((e=>Object(o.jsx)("td",{...e.getCellProps([{className:e.column.className}]),children:e.render("Cell")})))}))))})]})}),s&&Object(o.jsx)(d,{tableProps:m,sizePerPageList:i})]})}}}]);
//# sourceMappingURL=112.638ca823.chunk.js.map