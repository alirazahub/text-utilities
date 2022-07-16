(this.webpackJsonpmyfirstapp=this.webpackJsonpmyfirstapp||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(16),o=a.n(n),l=(a(22),a(10)),r=(a(23),a(7)),i=a(0);function d(e){return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)(r.b,{className:"navbar-brand",to:"/",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{className:"nav-link",to:"/about",children:"About"})})]}),Object(i.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(i.jsx)("input",{className:"form-check-input",onClick:e.toggle,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable DarkMode"})]})]})]})})}function b(e){var t=Object(c.useState)("Enter Text Here"),a=Object(l.a)(t,2),s=a[0],n=a[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("h1",{children:e.heading}),Object(i.jsx)("textarea",{className:"form-control",id:"myBox",rows:"8",value:s,style:{backgroundColor:"dark"===e.mode?"\t#989898":"white",color:"dark"===e.mode?"white":"black"},onChange:function(e){n(e.target.value)}}),Object(i.jsxs)("p",{children:[0===s.length?0:s.trim().split(/\n| /).length," Total Words and ",s.length," Total Characters"]}),Object(i.jsx)("button",{className:"btn btn-outline-danger my-2 mx-2",onClick:function(){var t=s.toUpperCase();n(t),e.showAlert("Converted to Upper Case","success")},children:"Convert to UPPER-CASE"}),Object(i.jsx)("button",{className:"btn btn-outline-danger my-2 mx-2",onClick:function(){var e=s.toLowerCase();n(e)},children:"Convert to Lower-Case"}),Object(i.jsx)("button",{className:"btn btn-outline-danger my-2 mx-2",onClick:function(){n("")},children:"Clear"}),Object(i.jsx)("button",{className:"btn btn-outline-danger my-2 mx-2",onClick:function(){var e=document.getElementById("myBox");e.select(),navigator.clipboard.writeText(e.value)},children:"Copy text"}),Object(i.jsx)("button",{className:"btn btn-outline-danger my-2 mx-2",onClick:function(){var e=s.split(/[ ]+/);n(e.join(" "))},children:"Remove Extra Space"})]})}),Object(i.jsx)("div",{className:"container"})]})}function h(e){return e.alert&&Object(i.jsxs)("div",{className:"alert container alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(i.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.message,Object(i.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})}function j(){return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{className:"text-center my-5",children:"About"}),Object(i.jsxs)("table",{class:"table",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"col",children:"#"}),Object(i.jsx)("th",{scope:"col",children:"First"}),Object(i.jsx)("th",{scope:"col",children:"Last"}),Object(i.jsx)("th",{scope:"col",children:"Handle"})]})}),Object(i.jsxs)("tbody",{children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:"1"}),Object(i.jsx)("td",{children:"Mark"}),Object(i.jsx)("td",{children:"Otto"}),Object(i.jsx)("td",{children:"@mdo"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:"2"}),Object(i.jsx)("td",{children:"Jacob"}),Object(i.jsx)("td",{children:"Thornton"}),Object(i.jsx)("td",{children:"@fat"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"row",children:"3"}),Object(i.jsx)("td",{colspan:"2",children:"Larry the Bird"}),Object(i.jsx)("td",{children:"@twitter"})]})]})]}),Object(i.jsx)("h1",{className:"text-center my-5",children:"Accordian"}),Object(i.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(i.jsx)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Accordion Item #1"})}),Object(i.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",children:[Object(i.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(i.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Accordion Item #2"})}),Object(i.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",children:[Object(i.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(i.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Accordion Item #3"})}),Object(i.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",children:[Object(i.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]})]})}d.defaultProps={title:"TITLE"};var m=a(2);var x=function(){var e=Object(m.f)();return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("nav",{"aria-label":"breadcrumb",children:Object(i.jsxs)("ol",{className:"breadcrumb",children:[Object(i.jsx)(r.b,{to:"/",children:" Home "}),Object(i.jsxs)("li",{className:"breadcrumb-item ",children:[" ",e.pathname," "]})]})}),Object(i.jsx)("div",{className:"display-1 notFound text-center",children:"Not Found! 404"}),Object(i.jsx)(r.b,{to:"/",className:"btn btn-outline-primary",children:"Go Back to HOME PAGE"})]})};var u=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(null),o=Object(l.a)(n,2),u=o[0],p=o[1],O=function(e,t){p({message:e,type:t})};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(r.a,{children:[Object(i.jsx)(d,{title:"New Project",mode:a,toggle:function(){"dark"===a?(s("light"),document.body.style.backgroundColor="white",O("Dark mode has been enabled","danger"),document.title="TextUtils - LightMode"):(s("dark"),document.body.style.backgroundColor="grey",O("Light mode has been enabled","danger"),document.title="TextUtils - DarkMode")}}),Object(i.jsx)(h,{alert:u}),Object(i.jsxs)(m.c,{children:[Object(i.jsx)(m.a,{exact:!0,path:"/about",children:Object(i.jsx)(j,{})}),Object(i.jsx)(m.a,{exact:!0,path:"/",children:Object(i.jsx)(b,{showAlert:O,heading:"Enter Text To Update",mode:a})})]}),Object(i.jsx)(m.a,{exact:!0,path:"/:opt1/:opt2",children:Object(i.jsx)(x,{})}),Object(i.jsx)(m.a,{exact:!0,path:"/:opt1",children:Object(i.jsx)(x,{})})]})})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,o=t.getTTFB;a(e),c(e),s(e),n(e),o(e)}))};o.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(u,{})}),document.getElementById("root")),p()}},[[30,1,2]]]);
//# sourceMappingURL=main.c5276eb2.chunk.js.map