(this["webpackJsonpminton-react"]=this["webpackJsonpminton-react"]||[]).push([[77],{1065:function(e,t,a){"use strict";a.r(t);a(0);var c=a(128),r=a(137),s=a(146),n=a(116),i=a(2);t.default=()=>Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(n.a,{breadCrumbItems:[{label:"Base UI",path:"/ui/embedvideo"},{label:"Embed Video",path:"/ui/embedvideo",active:!0}],title:"Embed Video"}),Object(i.jsxs)(c.a,{children:[Object(i.jsx)(r.a,{lg:6,children:Object(i.jsx)(s.a,{children:Object(i.jsxs)(s.a.Body,{children:[Object(i.jsx)("h4",{className:"header-title",children:"Ratios video 21:9"}),Object(i.jsxs)("p",{className:"sub-header",children:["Use class ",Object(i.jsx)("code",{children:".ratio-21x9"})]}),Object(i.jsx)("div",{className:"ratio ratio-21x9",children:Object(i.jsx)("iframe",{src:"https://www.youtube.com/embed/PrUxWZiQfy4?autohide=0&showinfo=0&controls=0",title:"iframe"})})]})})}),Object(i.jsx)(r.a,{lg:6,children:Object(i.jsx)(s.a,{children:Object(i.jsxs)(s.a.Body,{children:[Object(i.jsx)("h4",{className:"header-title",children:"Ratios video 16:9"}),Object(i.jsxs)("p",{className:"sub-header",children:["Use class ",Object(i.jsx)("code",{children:".ratio-16x9"})]}),Object(i.jsx)("div",{className:"ratio ratio-16x9",children:Object(i.jsx)("iframe",{src:"https://www.youtube.com/embed/PrUxWZiQfy4?autohide=0&showinfo=0&controls=0",title:"iframe"})})]})})})]}),Object(i.jsxs)(c.a,{children:[Object(i.jsx)(r.a,{lg:6,children:Object(i.jsx)(s.a,{children:Object(i.jsxs)(s.a.Body,{children:[Object(i.jsx)("h4",{className:"header-title",children:"Ratios video 4:3"}),Object(i.jsxs)("p",{className:"sub-header",children:["Use class ",Object(i.jsx)("code",{children:".ratio-4x3"})]}),Object(i.jsx)("div",{className:"ratio ratio-4x3",children:Object(i.jsx)("iframe",{src:"https://www.youtube.com/embed/PrUxWZiQfy4?ecver=1",title:"iframe"})})]})})}),Object(i.jsx)(r.a,{lg:6,children:Object(i.jsx)(s.a,{children:Object(i.jsxs)(s.a.Body,{children:[Object(i.jsx)("h4",{className:"header-title",children:"Ratios video 1:1"}),Object(i.jsxs)("p",{className:"sub-header",children:["Use class ",Object(i.jsx)("code",{children:".ratio-1x1"})]}),Object(i.jsx)("div",{className:"ratio ratio-1x1",children:Object(i.jsx)("iframe",{src:"https://www.youtube.com/embed/PrUxWZiQfy4?ecver=1",title:"iframe"})})]})})})]})]})},107:function(e,t,a){"use strict";var c=a(0);t.a=function(e){var t=Object(c.useRef)(e);return Object(c.useEffect)((function(){t.current=e}),[e]),t}},108:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var c=a(0),r=a(107);function s(e){var t=Object(r.a)(e);return Object(c.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},109:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var c=a(44),r=a.n(c),s=/-(.)/g;var n=a(0),i=a(45),o=a(2);const l=e=>{return e[0].toUpperCase()+(t=e,t.replace(s,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function d(e){let{displayName:t=l(e),Component:a,defaultProps:c}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const s=n.forwardRef(((t,c)=>{let{className:s,bsPrefix:n,as:l=a||"div",...d}=t;const u=Object(i.a)(n,e);return Object(o.jsx)(l,{ref:c,className:r()(s,u),...d})}));return s.defaultProps=c,s.displayName=t,s}},110:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var c=a(0),r=a(108);function s(e,t,a,s){void 0===s&&(s=!1);var n=Object(r.a)(a);Object(c.useEffect)((function(){var a="function"===typeof e?e():e;return a.addEventListener(t,n,s),function(){return a.removeEventListener(t,n,s)}}),[e])}},111:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var c=a(0);function r(){var e=Object(c.useRef)(!0),t=Object(c.useRef)((function(){return e.current}));return Object(c.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},112:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var c=a(0);function r(e){var t=Object(c.useRef)(null);return Object(c.useEffect)((function(){t.current=e})),t.current}},113:function(e,t,a){"use strict";var c=a(0),r=(a(115),a(107),a(108));a(110),a(118);a(111),a(112);a(126),new WeakMap;var s=a(117),n=a(2);const i=["onKeyDown"];const o=c.forwardRef(((e,t)=>{let{onKeyDown:a}=e,c=function(e,t){if(null==e)return{};var a,c,r={},s=Object.keys(e);for(c=0;c<s.length;c++)a=s[c],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,i);const[o]=Object(s.b)(Object.assign({tagName:"a"},c)),l=Object(r.a)((e=>{o.onKeyDown(e),null==a||a(e)}));return((d=c.href)&&"#"!==d.trim()||c.role)&&"button"!==c.role?Object(n.jsx)("a",Object.assign({ref:t},c,{onKeyDown:a})):Object(n.jsx)("a",Object.assign({ref:t},c,o,{onKeyDown:l}));var d}));o.displayName="Anchor";t.a=o},115:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var c=a(0);function r(){return Object(c.useState)(null)}},116:function(e,t,a){"use strict";a(0);var c=a(128),r=a(137),s=a(135),n=a(44),i=a.n(n),o=a(23),l=a(14),d=a(2);t.a=e=>{const{appSelector:t}=Object(o.b)(),{layoutType:a}=t((e=>({layoutType:e.Layout.layoutType})));return Object(d.jsx)(c.a,{children:Object(d.jsx)(r.a,{xs:12,children:Object(d.jsxs)("div",{className:i()("page-title-box",{"page-title-box-alt":a===l.a.LAYOUT_HORIZONTAL||a===l.a.LAYOUT_DETACHED}),children:[Object(d.jsx)("h4",{className:"page-title",children:e.title}),Object(d.jsx)("div",{className:"page-title-right",children:Object(d.jsxs)(s.a,{listProps:{className:"m-0"},children:[Object(d.jsx)(s.a.Item,{href:"/",children:"Minton"}),(e.breadCrumbItems||[]).map(((e,t)=>e.active?Object(d.jsx)(s.a.Item,{active:!0,children:e.label},t):Object(d.jsx)(s.a.Item,{href:e.path,children:e.label},t)))]})})]})})})}},117:function(e,t,a){"use strict";a.d(t,"b",(function(){return n}));var c=a(0),r=a(2);const s=["as","disabled"];function n(e){let{tagName:t,disabled:a,href:c,target:r,rel:s,onClick:n,tabIndex:i=0,type:o}=e;t||(t=null!=c||null!=r||null!=s?"a":"button");const l={tagName:t};if("button"===t)return[{type:o||"button",disabled:a},l];const d=e=>{(a||"a"===t&&function(e){return!e||"#"===e.trim()}(c))&&e.preventDefault(),a?e.stopPropagation():null==n||n(e)};return[{role:"button",disabled:void 0,tabIndex:a?void 0:i,href:"a"===t&&a?void 0:c,target:"a"===t?r:void 0,"aria-disabled":a||void 0,rel:"a"===t?s:void 0,onClick:d,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),d(e))}},l]}const i=c.forwardRef(((e,t)=>{let{as:a,disabled:c}=e,i=function(e,t){if(null==e)return{};var a,c,r={},s=Object.keys(e);for(c=0;c<s.length;c++)a=s[c],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,s);const[o,{tagName:l}]=n(Object.assign({tagName:a,disabled:c},i));return Object(r.jsx)(l,Object.assign({},i,o,{ref:t}))}));i.displayName="Button",t.a=i},118:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var c=a(110),r=a(0);function s(e,t,a){void 0===a&&(a=!1);var s=Object(r.useCallback)((function(){return document}),[]);return Object(c.a)(s,e,t,a)}},119:function(e,t,a){"use strict";var c=a(0),r=a(44),s=a.n(r),n=a(2);t.a=e=>c.forwardRef(((t,a)=>Object(n.jsx)("div",{...t,ref:a,className:s()(t.className,e)})))},120:function(e,t,a){"use strict";var c=a(0);const r=c.createContext(null);r.displayName="CardHeaderContext",t.a=r},126:function(e,t,a){"use strict";(function(e){var c=a(0),r="undefined"!==typeof e&&e.navigator&&"ReactNative"===e.navigator.product,s="undefined"!==typeof document;t.a=s||r?c.useLayoutEffect:c.useEffect}).call(this,a(69))},128:function(e,t,a){"use strict";var c=a(44),r=a.n(c),s=a(0),n=a(45),i=a(2);const o=["xxl","xl","lg","md","sm","xs"],l=s.forwardRef(((e,t)=>{let{bsPrefix:a,className:c,as:s="div",...l}=e;const d=Object(n.a)(a,"row"),u="".concat(d,"-cols"),b=[];return o.forEach((e=>{const t=l[e];let a;delete l[e],null!=t&&"object"===typeof t?({cols:a}=t):a=t;const c="xs"!==e?"-".concat(e):"";null!=a&&b.push("".concat(u).concat(c,"-").concat(a))})),Object(i.jsx)(s,{ref:t,...l,className:r()(c,d,...b)})}));l.displayName="Row",t.a=l},135:function(e,t,a){"use strict";var c=a(44),r=a.n(c),s=a(0),n=a(45),i=a(113),o=a(2);const l=s.forwardRef(((e,t)=>{let{bsPrefix:a,active:c,children:s,className:l,as:d="li",linkAs:u=i.a,linkProps:b,href:j,title:f,target:m,...O}=e;const x=Object(n.a)(a,"breadcrumb-item");return Object(o.jsx)(d,{ref:t,...O,className:r()(x,l,{active:c}),"aria-current":c?"page":void 0,children:c?s:Object(o.jsx)(u,{...b,href:j,title:f,target:m,children:s})})}));l.displayName="BreadcrumbItem",l.defaultProps={active:!1,linkProps:{}};var d=l;const u=s.forwardRef(((e,t)=>{let{bsPrefix:a,className:c,listProps:s,children:i,label:l,as:d="nav",...u}=e;const b=Object(n.a)(a,"breadcrumb");return Object(o.jsx)(d,{"aria-label":l,className:c,ref:t,...u,children:Object(o.jsx)("ol",{...s,className:r()(b,null==s?void 0:s.className),children:i})})}));u.displayName="Breadcrumb",u.defaultProps={label:"breadcrumb",listProps:{}};t.a=Object.assign(u,{Item:d})},137:function(e,t,a){"use strict";a.d(t,"b",(function(){return l}));var c=a(44),r=a.n(c),s=a(0),n=a(45),i=a(2);const o=["xxl","xl","lg","md","sm","xs"];function l(e){let{as:t,bsPrefix:a,className:c,...s}=e;a=Object(n.a)(a,"col");const i=[],l=[];return o.forEach((e=>{const t=s[e];let c,r,n;delete s[e],"object"===typeof t&&null!=t?({span:c,offset:r,order:n}=t):c=t;const o="xs"!==e?"-".concat(e):"";c&&i.push(!0===c?"".concat(a).concat(o):"".concat(a).concat(o,"-").concat(c)),null!=n&&l.push("order".concat(o,"-").concat(n)),null!=r&&l.push("offset".concat(o,"-").concat(r))})),[{...s,className:r()(c,...i,...l)},{as:t,bsPrefix:a,spans:i}]}const d=s.forwardRef(((e,t)=>{const[{className:a,...c},{as:s="div",bsPrefix:n,spans:o}]=l(e);return Object(i.jsx)(s,{...c,ref:t,className:r()(a,!o.length&&n)})}));d.displayName="Col",t.a=d},146:function(e,t,a){"use strict";var c=a(44),r=a.n(c),s=a(0),n=a(45),i=a(109),o=a(119),l=a(2);const d=s.forwardRef(((e,t)=>{let{bsPrefix:a,className:c,variant:s,as:i="img",...o}=e;const d=Object(n.a)(a,"card-img");return Object(l.jsx)(i,{ref:t,className:r()(s?"".concat(d,"-").concat(s):d,c),...o})}));d.displayName="CardImg";var u=d,b=a(120);const j=s.forwardRef(((e,t)=>{let{bsPrefix:a,className:c,as:i="div",...o}=e;const d=Object(n.a)(a,"card-header"),u=Object(s.useMemo)((()=>({cardHeaderBsPrefix:d})),[d]);return Object(l.jsx)(b.a.Provider,{value:u,children:Object(l.jsx)(i,{ref:t,...o,className:r()(c,d)})})}));j.displayName="CardHeader";var f=j;const m=Object(o.a)("h5"),O=Object(o.a)("h6"),x=Object(i.a)("card-body"),h=Object(i.a)("card-title",{Component:m}),v=Object(i.a)("card-subtitle",{Component:O}),p=Object(i.a)("card-link",{Component:"a"}),N=Object(i.a)("card-text",{Component:"p"}),y=Object(i.a)("card-footer"),g=Object(i.a)("card-img-overlay"),w=s.forwardRef(((e,t)=>{let{bsPrefix:a,className:c,bg:s,text:i,border:o,body:d,children:u,as:b="div",...j}=e;const f=Object(n.a)(a,"card");return Object(l.jsx)(b,{ref:t,...j,className:r()(c,f,s&&"bg-".concat(s),i&&"text-".concat(i),o&&"border-".concat(o)),children:d?Object(l.jsx)(x,{children:u}):u})}));w.displayName="Card",w.defaultProps={body:!1};t.a=Object.assign(w,{Img:u,Title:h,Subtitle:v,Body:x,Link:p,Text:N,Header:f,Footer:y,ImgOverlay:g})}}]);
//# sourceMappingURL=77.ae6ad62f.chunk.js.map