(this["webpackJsonpminton-react"]=this["webpackJsonpminton-react"]||[]).push([[89],{107:function(e,t,a){"use strict";var n=a(0);t.a=function(e){var t=Object(n.useRef)(e);return Object(n.useEffect)((function(){t.current=e}),[e]),t}},108:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0),c=a(107);function r(e){var t=Object(c.a)(e);return Object(n.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},1089:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(128),s=a(137),o=a(146),i=a(116),l=a(746),u=a(2);t.default=()=>Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)(i.a,{breadCrumbItems:[{label:"Forms",path:"/forms/upload"},{label:"File Upload",path:"/forms/upload",active:!0}],title:"File Upload"}),Object(u.jsx)(r.a,{children:Object(u.jsx)(s.a,{children:Object(u.jsx)(o.a,{children:Object(u.jsxs)(o.a.Body,{children:[Object(u.jsx)("h4",{className:"header-title",children:"Dropzone File Upload"}),Object(u.jsx)("p",{className:"sub-header",children:"DropzoneJS is an open source library that provides drag\u2019n\u2019drop file uploads with image previews."}),Object(u.jsx)(l.a,{onFileUpload:e=>{console.log("Uploaded files - ",e)}})]})})})})]})},109:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(44),c=a.n(n),r=/-(.)/g;var s=a(0),o=a(45),i=a(2);const l=e=>{return e[0].toUpperCase()+(t=e,t.replace(r,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function u(e){let{displayName:t=l(e),Component:a,defaultProps:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=s.forwardRef(((t,n)=>{let{className:r,bsPrefix:s,as:l=a||"div",...u}=t;const d=Object(o.a)(s,e);return Object(i.jsx)(l,{ref:n,className:c()(r,d),...u})}));return r.defaultProps=n,r.displayName=t,r}},110:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0),c=a(108);function r(e,t,a,r){void 0===r&&(r=!1);var s=Object(c.a)(a);Object(n.useEffect)((function(){var a="function"===typeof e?e():e;return a.addEventListener(t,s,r),function(){return a.removeEventListener(t,s,r)}}),[e])}},111:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0);function c(){var e=Object(n.useRef)(!0),t=Object(n.useRef)((function(){return e.current}));return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},112:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0);function c(e){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){t.current=e})),t.current}},113:function(e,t,a){"use strict";var n=a(0),c=(a(115),a(107),a(108));a(110),a(118);a(111),a(112);a(126),new WeakMap;var r=a(117),s=a(2);const o=["onKeyDown"];const i=n.forwardRef(((e,t)=>{let{onKeyDown:a}=e,n=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,o);const[i]=Object(r.b)(Object.assign({tagName:"a"},n)),l=Object(c.a)((e=>{i.onKeyDown(e),null==a||a(e)}));return((u=n.href)&&"#"!==u.trim()||n.role)&&"button"!==n.role?Object(s.jsx)("a",Object.assign({ref:t},n,{onKeyDown:a})):Object(s.jsx)("a",Object.assign({ref:t},n,i,{onKeyDown:l}));var u}));i.displayName="Anchor";t.a=i},115:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0);function c(){return Object(n.useState)(null)}},116:function(e,t,a){"use strict";a(0);var n=a(128),c=a(137),r=a(135),s=a(44),o=a.n(s),i=a(23),l=a(14),u=a(2);t.a=e=>{const{appSelector:t}=Object(i.b)(),{layoutType:a}=t((e=>({layoutType:e.Layout.layoutType})));return Object(u.jsx)(n.a,{children:Object(u.jsx)(c.a,{xs:12,children:Object(u.jsxs)("div",{className:o()("page-title-box",{"page-title-box-alt":a===l.a.LAYOUT_HORIZONTAL||a===l.a.LAYOUT_DETACHED}),children:[Object(u.jsx)("h4",{className:"page-title",children:e.title}),Object(u.jsx)("div",{className:"page-title-right",children:Object(u.jsxs)(r.a,{listProps:{className:"m-0"},children:[Object(u.jsx)(r.a.Item,{href:"/",children:"Minton"}),(e.breadCrumbItems||[]).map(((e,t)=>e.active?Object(u.jsx)(r.a.Item,{active:!0,children:e.label},t):Object(u.jsx)(r.a.Item,{href:e.path,children:e.label},t)))]})})]})})})}},117:function(e,t,a){"use strict";a.d(t,"b",(function(){return s}));var n=a(0),c=a(2);const r=["as","disabled"];function s(e){let{tagName:t,disabled:a,href:n,target:c,rel:r,onClick:s,tabIndex:o=0,type:i}=e;t||(t=null!=n||null!=c||null!=r?"a":"button");const l={tagName:t};if("button"===t)return[{type:i||"button",disabled:a},l];const u=e=>{(a||"a"===t&&function(e){return!e||"#"===e.trim()}(n))&&e.preventDefault(),a?e.stopPropagation():null==s||s(e)};return[{role:"button",disabled:void 0,tabIndex:a?void 0:o,href:"a"===t&&a?void 0:n,target:"a"===t?c:void 0,"aria-disabled":a||void 0,rel:"a"===t?r:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},l]}const o=n.forwardRef(((e,t)=>{let{as:a,disabled:n}=e,o=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,r);const[i,{tagName:l}]=s(Object.assign({tagName:a,disabled:n},o));return Object(c.jsx)(l,Object.assign({},o,i,{ref:t}))}));o.displayName="Button",t.a=o},118:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(110),c=a(0);function r(e,t,a){void 0===a&&(a=!1);var r=Object(c.useCallback)((function(){return document}),[]);return Object(n.a)(r,e,t,a)}},119:function(e,t,a){"use strict";var n=a(0),c=a(44),r=a.n(c),s=a(2);t.a=e=>n.forwardRef(((t,a)=>Object(s.jsx)("div",{...t,ref:a,className:r()(t.className,e)})))},120:function(e,t,a){"use strict";var n=a(0);const c=n.createContext(null);c.displayName="CardHeaderContext",t.a=c},126:function(e,t,a){"use strict";(function(e){var n=a(0),c="undefined"!==typeof e&&e.navigator&&"ReactNative"===e.navigator.product,r="undefined"!==typeof document;t.a=r||c?n.useLayoutEffect:n.useEffect}).call(this,a(69))},137:function(e,t,a){"use strict";a.d(t,"b",(function(){return l}));var n=a(44),c=a.n(n),r=a(0),s=a(45),o=a(2);const i=["xxl","xl","lg","md","sm","xs"];function l(e){let{as:t,bsPrefix:a,className:n,...r}=e;a=Object(s.a)(a,"col");const o=[],l=[];return i.forEach((e=>{const t=r[e];let n,c,s;delete r[e],"object"===typeof t&&null!=t?({span:n,offset:c,order:s}=t):n=t;const i="xs"!==e?"-".concat(e):"";n&&o.push(!0===n?"".concat(a).concat(i):"".concat(a).concat(i,"-").concat(n)),null!=s&&l.push("order".concat(i,"-").concat(s)),null!=c&&l.push("offset".concat(i,"-").concat(c))})),[{...r,className:c()(n,...o,...l)},{as:t,bsPrefix:a,spans:o}]}const u=r.forwardRef(((e,t)=>{const[{className:a,...n},{as:r="div",bsPrefix:s,spans:i}]=l(e);return Object(o.jsx)(r,{...n,ref:t,className:c()(a,!i.length&&s)})}));u.displayName="Col",t.a=u},146:function(e,t,a){"use strict";var n=a(44),c=a.n(n),r=a(0),s=a(45),o=a(109),i=a(119),l=a(2);const u=r.forwardRef(((e,t)=>{let{bsPrefix:a,className:n,variant:r,as:o="img",...i}=e;const u=Object(s.a)(a,"card-img");return Object(l.jsx)(o,{ref:t,className:c()(r?"".concat(u,"-").concat(r):u,n),...i})}));u.displayName="CardImg";var d=u,b=a(120);const j=r.forwardRef(((e,t)=>{let{bsPrefix:a,className:n,as:o="div",...i}=e;const u=Object(s.a)(a,"card-header"),d=Object(r.useMemo)((()=>({cardHeaderBsPrefix:u})),[u]);return Object(l.jsx)(b.a.Provider,{value:d,children:Object(l.jsx)(o,{ref:t,...i,className:c()(n,u)})})}));j.displayName="CardHeader";var f=j;const p=Object(i.a)("h5"),m=Object(i.a)("h6"),O=Object(o.a)("card-body"),h=Object(o.a)("card-title",{Component:p}),v=Object(o.a)("card-subtitle",{Component:m}),x=Object(o.a)("card-link",{Component:"a"}),g=Object(o.a)("card-text",{Component:"p"}),N=Object(o.a)("card-footer"),y=Object(o.a)("card-img-overlay"),w=r.forwardRef(((e,t)=>{let{bsPrefix:a,className:n,bg:r,text:o,border:i,body:u,children:d,as:b="div",...j}=e;const f=Object(s.a)(a,"card");return Object(l.jsx)(b,{ref:t,...j,className:c()(n,f,r&&"bg-".concat(r),o&&"text-".concat(o),i&&"border-".concat(i)),children:u?Object(l.jsx)(O,{children:d}):d})}));w.displayName="Card",w.defaultProps={body:!1};t.a=Object.assign(w,{Img:d,Title:h,Subtitle:v,Body:O,Link:x,Text:g,Header:f,Footer:N,ImgOverlay:y})},746:function(e,t,a){"use strict";var n=a(0),c=a(26),r=a(146),s=a(128),o=a(137),i=a(776),l=a(2);const u=e=>{const[t,a]=Object(n.useState)([]),u=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";const a=1024,n=t<0?0:t,c=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],r=Math.floor(Math.log(e)/Math.log(a));return parseFloat((e/Math.pow(a,r)).toFixed(n))+" "+c[r]};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i.a,{...e,onDrop:n=>(n=>{var c=n;e.showPreview&&((n||[]).map((e=>Object.assign(e,{preview:"image"===e.type.split("/")[0]?URL.createObjectURL(e):null,formattedSize:u(e.size)}))),(c=[...t]).push(...n),a(c)),e.onFileUpload&&e.onFileUpload(c)})(n),children:e=>{let{getRootProps:t,getInputProps:a}=e;return Object(l.jsx)("div",{className:"dropzone",children:Object(l.jsxs)("div",{className:"dz-message needsclick",...t(),children:[Object(l.jsx)("input",{...a()}),Object(l.jsx)("i",{className:"h2 text-muted ri-upload-2-line d-inline-block"}),Object(l.jsx)("h4",{children:"Drop files here or click to upload."})]})})}}),e.showPreview&&t.length>0&&Object(l.jsx)("div",{className:"dropzone-previews mt-3",id:"uploadPreviewTemplate",children:(t||[]).map(((n,i)=>Object(l.jsx)(r.a,{className:"mt-1 mb-0 shadow-none border",children:Object(l.jsx)("div",{className:"p-2",children:Object(l.jsxs)(s.a,{className:"align-items-center",children:[n.preview&&Object(l.jsx)(o.a,{className:"col-auto",children:Object(l.jsx)("img",{"data-dz-thumbnail":"",className:"avatar-sm rounded bg-light",alt:n.name,src:n.preview})}),!n.preview&&Object(l.jsx)(o.a,{className:"col-auto",children:Object(l.jsx)("div",{className:"avatar-sm",children:Object(l.jsx)("span",{className:"avatar-title bg-primary rounded",children:n.type.split("/")[1]})})}),Object(l.jsxs)(o.a,{className:"ps-0",children:[Object(l.jsx)(c.b,{to:"#",className:"text-muted fw-bold",children:n.name}),Object(l.jsx)("p",{className:"mb-0",children:Object(l.jsx)("strong",{children:n.formattedSize})})]}),Object(l.jsx)(o.a,{className:"col-auto",children:Object(l.jsx)(c.b,{to:"#",className:"btn btn-link btn-lg text-muted shadow-none",children:Object(l.jsx)("i",{className:"fe-x",onClick:()=>(n=>{const c=[...t];c.splice(n,1),a(c),e.onFileUpload&&e.onFileUpload(c)})(i)})})})]})})},i+"-file")))})]})};u.defaultProps={showPreview:!0},t.a=u}}]);
//# sourceMappingURL=89.cc552289.chunk.js.map