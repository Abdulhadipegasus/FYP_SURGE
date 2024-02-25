(this["webpackJsonpminton-react"]=this["webpackJsonpminton-react"]||[]).push([[152],{1051:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(487),r=c(174),l=c(128),i=c(137),n=c(146),d=c(26),j=c(116),o=c(622),b=c(2);const h=e=>{const t=e.summary||{};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"border p-3 mt-4 mt-lg-0 rounded",children:[Object(b.jsx)("h4",{className:"header-title mb-3",children:"Order Summary"}),Object(b.jsx)(a.a,{responsive:!0,className:"mb-0",children:Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Grand Total :"}),Object(b.jsxs)("td",{children:["$",t.gross_total.toFixed(2)]})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Discount : "}),Object(b.jsxs)("td",{children:["-$",t.discount.toFixed(2)]})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Shipping Charge :"}),Object(b.jsxs)("td",{children:["$",t.shipping_charge.toFixed(2)]})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Estimated Tax : "}),Object(b.jsxs)("td",{children:["$",t.tax.toFixed(2)]})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Total :"}),Object(b.jsxs)("th",{children:["$",t.net_total.toFixed(2)]})]})]})})]}),Object(b.jsxs)("div",{className:"alert alert-warning mt-3",role:"alert",children:["Use coupon code ",Object(b.jsx)("strong",{children:"MNTF25"})," and get 25% discount!"]}),Object(b.jsxs)("div",{className:"input-group mt-3",children:[Object(b.jsx)("input",{type:"text",className:"form-control form-control-light",placeholder:"Coupon code","aria-label":"Recipient's username"}),Object(b.jsx)(r.a,{className:"input-group-text",variant:"light",children:"Apply"})]})]})};t.default=()=>{const[e,t]=Object(s.useState)(o.a),[c,r]=Object(s.useState)({gross_total:264,discount:26,shipping_charge:24,tax:18.22,net_total:280.22}),m=e=>{var s=0;for(const t of e)s+=t.total;var a=s-c.discount+c.shipping_charge+c.tax;t(e),r({...c,gross_total:s,net_total:a})};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j.a,{breadCrumbItems:[{label:"eCommerce",path:"/apps/ecommerce/shopping-cart"},{label:"Shopping Cart",path:"/apps/ecommerce/shopping-cart",active:!0}],title:"Shopping Cart"}),Object(b.jsx)(l.a,{children:Object(b.jsx)(i.a,{xs:12,children:Object(b.jsx)(n.a,{children:Object(b.jsx)(n.a.Body,{children:Object(b.jsxs)(l.a,{children:[Object(b.jsxs)(i.a,{lg:8,children:[Object(b.jsxs)(a.a,{responsive:!0,borderless:!0,className:"table-centered mb-0",children:[Object(b.jsx)("thead",{className:"table-light",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{style:{width:"80px"},children:"Product"}),Object(b.jsx)("th",{children:"Product Desc"}),Object(b.jsx)("th",{children:"Price"}),Object(b.jsx)("th",{children:"Quantity"}),Object(b.jsx)("th",{colSpan:2,children:"Total"})]})}),Object(b.jsx)("tbody",{children:(e||[]).map(((t,c)=>Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("img",{src:t.image,alt:t.name,title:"product-img",className:"avatar-lg"})}),Object(b.jsxs)("td",{children:[Object(b.jsx)("h5",{className:"mt-0 mb-1 text-truncate",children:Object(b.jsx)(d.b,{to:"/apps/ecommerce/product-detail",className:"text-body",children:t.name})}),Object(b.jsxs)("p",{className:"mb-0",children:["Size : ",Object(b.jsx)("span",{className:"fw-medium",children:t.size})]})]}),Object(b.jsxs)("td",{children:["$",t.price]}),Object(b.jsx)("td",{children:Object(b.jsx)("input",{type:"number",min:"1",value:t.qty,className:"form-control",placeholder:"Qty",style:{width:"90px"},onChange:c=>{((t,c)=>{var s=[...e],a=s.findIndex((e=>e.id===c.id)),r=t.target.value,l=s[a].price*r;s[a]={...c,qty:r,total:l},m(s)})(c,t)}})}),Object(b.jsxs)("td",{children:["$",t.total]}),Object(b.jsx)("td",{children:Object(b.jsxs)(d.b,{to:"#",className:"action-icon text-danger",onClick:c=>{((t,c)=>{t.preventDefault();var s=e.filter((e=>e.id!==c.id));m(s)})(c,t)},children:[" ",Object(b.jsx)("i",{className:"mdi mdi-trash-can"})]})})]},c)))})]}),Object(b.jsxs)("div",{className:"mt-3",children:[Object(b.jsx)("label",{className:"form-label",htmlFor:"example-textarea",children:"Add a Note:"}),Object(b.jsx)("textarea",{className:"form-control",id:"example-textarea",rows:3,placeholder:"Write some note.."})]}),Object(b.jsxs)(l.a,{className:"mt-4",children:[Object(b.jsx)(i.a,{sm:6,children:Object(b.jsxs)(d.b,{to:"/apps/ecommerce/products",className:"btn text-muted d-none d-sm-inline-block btn-link fw-semibold",children:[Object(b.jsx)("i",{className:"mdi mdi-arrow-left"})," Continue Shopping"," "]})}),Object(b.jsx)(i.a,{sm:6,children:Object(b.jsx)("div",{className:"text-sm-end",children:Object(b.jsxs)(d.b,{to:"/apps/ecommerce/checkout",className:"btn btn-danger",children:[Object(b.jsx)("i",{className:"mdi mdi-cart-plus me-1"})," Checkout"," "]})})})]})]}),Object(b.jsx)(i.a,{lg:4,children:Object(b.jsx)(h,{summary:c})})]})})})})})]})}}}]);
//# sourceMappingURL=152.2f381881.chunk.js.map