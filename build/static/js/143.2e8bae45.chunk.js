(this["webpackJsonpminton-react"]=this["webpackJsonpminton-react"]||[]).push([[143],{1123:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(116),i=s(1020);var c=Object(i.a)("https://gwhovacxfzwbvrzrxbbm.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3aG92YWN4Znp3YnZyenJ4YmJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU4MzI1NzAsImV4cCI6MjAyMTQwODU3MH0.XafXiDCUc_F4KiZmkSlWPnpZJUikk-ZF25O8ymYmDfI"),r=s(2);var o=e=>{let{empId:t,empName:s,designation:n,empTagBattery:i,empStatus:o,sensorId:l,sensorStatus:d,lastUpdate:p}=e;const j={container:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%",padding:"50px",backgroundColor:"#f8f9fa",borderRadius:"5px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.1)"},title:{marginBottom:"20px"},info:{display:"flex",justifyContent:"space-between",width:"100%",marginBottom:"10px"},button:{marginTop:"20px",padding:"10px 20px",backgroundColor:"#007bff",color:"#fff",border:"none",borderRadius:"5px",cursor:"pointer"}},[b,m]=Object(a.useState)(""),[h,x]=Object(a.useState)(""),O={marginBottom:"60px",border:"1px solid blue",padding:"30px"};return Object(a.useEffect)((()=>{(async()=>{try{const{data:e,error:t}=await c.from("main").select("*").order("Timestamp",{ascending:!1});if(t)throw t;if(e){const t=new Map;e.forEach((e=>{const s=e.Employee_Name.trim();(!t.has(s)||e.Timestamp>t.get(s).Timestamp)&&t.set(s,e)}));const s=Array.from(t.values());x(s),m(""),console.log(s)}}catch(e){m("Could not fetch data"),console.error(e)}})()}),[]),Object(r.jsxs)("div",{style:j.container,children:[Object(r.jsx)("h1",{style:j.title,children:"Live Tracking"}),b&&Object(r.jsx)("p",{children:b}),h&&Object(r.jsx)("div",{style:{width:"100%"},children:h.map((e=>Object(r.jsxs)("div",{style:O,children:[Object(r.jsxs)("div",{style:j.info,children:[Object(r.jsx)("span",{children:"Emp Name:"}),Object(r.jsx)("span",{style:{fontSize:"30px"},children:e.Employee_Name})]}),Object(r.jsxs)("div",{style:j.info,children:[Object(r.jsx)("span",{children:"Designation:"}),Object(r.jsx)("span",{children:"Worker"})]}),Object(r.jsxs)("div",{style:j.info,children:[Object(r.jsx)("span",{children:"Emp Tag Battery:"}),Object(r.jsx)("span",{style:{color:"green"},children:"80%"})]}),Object(r.jsxs)("div",{style:j.info,children:[Object(r.jsx)("span",{children:"Location:"}),Object(r.jsx)("span",{style:{color:"red"},children:e.RSSI>=-65?"Warehouse":"Not Assigned at any location"})]}),Object(r.jsxs)("div",{style:j.info,children:[Object(r.jsx)("span",{children:"Employee Status:"}),Object(r.jsx)("span",{style:{color:"green"},children:e.RSSI>=-65?"Active":"Offline"})]})]},e.id)))})]})};t.default=()=>{const[e,t]=Object(a.useState)(!0);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(n.a,{breadCrumbItems:[{label:"Tracking",path:"/dashboard/analytics"},{label:"Employees Tracking",path:"dashboard/analytics",active:!0}],title:"Employees Tracking"}),Object(r.jsx)(o,{empId:"1412",empName:"Raza",designation:"Support",empTagBattery:"80%",empStatus:"Not at assigned location",sensorId:"S12T25",sensorStatus:"Active",lastUpdate:"23 Feb 2023 10:23:06"})]})}},116:function(e,t,s){"use strict";s(0);var a=s(128),n=s(137),i=s(135),c=s(44),r=s.n(c),o=s(23),l=s(14),d=s(2);t.a=e=>{const{appSelector:t}=Object(o.b)(),{layoutType:s}=t((e=>({layoutType:e.Layout.layoutType})));return Object(d.jsx)(a.a,{children:Object(d.jsx)(n.a,{xs:12,children:Object(d.jsxs)("div",{className:r()("page-title-box",{"page-title-box-alt":s===l.a.LAYOUT_HORIZONTAL||s===l.a.LAYOUT_DETACHED}),children:[Object(d.jsx)("h4",{className:"page-title",children:e.title}),Object(d.jsx)("div",{className:"page-title-right",children:Object(d.jsxs)(i.a,{listProps:{className:"m-0"},children:[Object(d.jsx)(i.a.Item,{href:"/",children:"Minton"}),(e.breadCrumbItems||[]).map(((e,t)=>e.active?Object(d.jsx)(i.a.Item,{active:!0,children:e.label},t):Object(d.jsx)(i.a.Item,{href:e.path,children:e.label},t)))]})})]})})})}}}]);
//# sourceMappingURL=143.2e8bae45.chunk.js.map