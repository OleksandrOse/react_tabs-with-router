(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{17:function(t,e,c){},18:function(t,e,c){"use strict";c.r(e);var a=c(9),n=c.n(a),s=c(4),i=c(2),b=c(6),j=c.n(b),r=c(1),l=function(t){var e=t.to,c=t.text;return Object(r.jsx)(s.c,{"data-cy":"Nav",className:function(t){var e=t.isActive;return j()("navbar-item",{"is-active":e})},to:e,children:c})},d=function(){return Object(r.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)(l,{to:"/",text:"Home"}),Object(r.jsx)(l,{to:"/tabs",text:"Tabs"})]})})})},o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],x=function(){var t=Object(i.h)("/tabs/:tabId"),e=o.find((function(e){return e.id===(null===t||void 0===t?void 0:t.params.tabId)}));return Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:e?"".concat(null===e||void 0===e?void 0:e.content):"Please select a tab"})},h=(c(15),c(16),c(17),function(){var t=Object(i.h)("/");return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d,{}),Object(r.jsx)("div",{className:"section",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(i.b,{}),!t&&Object(r.jsx)(x,{})]})})]})}),O=function(){return Object(r.jsx)("h1",{className:"title",children:"Home page"})},u=function(t){var e=t.tabs,c=t.selectedTab,a=function(t){return t.id===c};return Object(r.jsx)("ul",{className:"tabs is-boxed",children:e.map((function(t){return Object(r.jsx)("li",{"data-cy":"Tab",className:j()({"is-active":a(t)}),children:Object(r.jsx)(s.b,{to:"../".concat(t.id),children:t.title})},t.id)}))})},m=function(){var t=Object(i.h)("/tabs/:tabId");return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"Tabs page"}),Object(r.jsx)(u,{tabs:o,selectedTab:null===t||void 0===t?void 0:t.params.tabId})]})},v=function(){return Object(r.jsx)("h1",{className:"title",children:"Page not found"})};n.a.render(Object(r.jsx)(s.a,{children:Object(r.jsx)(i.e,{children:Object(r.jsxs)(i.c,{path:"/",element:Object(r.jsx)(h,{}),children:[Object(r.jsx)(i.c,{index:!0,element:Object(r.jsx)(O,{})}),Object(r.jsx)(i.c,{path:"home",element:Object(r.jsx)(i.a,{to:"/",replace:!0})}),Object(r.jsxs)(i.c,{path:"tabs",children:[Object(r.jsx)(i.c,{index:!0,element:Object(r.jsx)(m,{})}),Object(r.jsx)(i.c,{path:":slug",element:Object(r.jsx)(m,{})})]}),Object(r.jsx)(i.c,{path:"*",element:Object(r.jsx)(v,{})})]})})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.a16b39c0.chunk.js.map