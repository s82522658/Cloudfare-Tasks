(this["webpackJsonpblog-frontend"]=this["webpackJsonpblog-frontend"]||[]).push([[0],{15:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(9),i=n.n(s),a=(n(15),n(2)),o=n(4),j=n.n(o),u=n(5),b=n(6),d=n(1),h=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(u.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://serverless-api.signalnerve.workers.dev/api/posts");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Posts"}),n.map((function(e){return Object(d.jsx)("div",{children:Object(d.jsx)("h2",{children:Object(d.jsx)(a.a,{to:"/posts/".concat(e.id),children:e.title})})},e.id)}))]})},p=function(e){var t=e.id,n=Object(c.useState)({}),r=Object(b.a)(n,2),s=r[0],i=r[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(u.a)(j.a.mark((function e(){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://serverless-api.signalnerve.workers.dev/api/posts/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,i(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]),Object.keys(s).length?Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:s.title}),Object(d.jsx)("p",{children:s.text}),Object(d.jsx)("p",{children:Object(d.jsxs)("em",{children:["Published ",new Date(s.published_at).toLocaleString()]})}),Object(d.jsx)("p",{children:Object(d.jsx)(a.a,{to:"/",children:"Go back"})})]}):Object(d.jsx)("div",{})};var l=function(){return Object(d.jsxs)(a.b,{children:[Object(d.jsx)(h,{path:"/"}),Object(d.jsx)(p,{path:"/posts/:id"})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(l,{})}),document.getElementById("root")),f()}},[[24,1,2]]]);
//# sourceMappingURL=main.6d7dc0ab.chunk.js.map