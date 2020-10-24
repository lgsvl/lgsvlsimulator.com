(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{N3r7:function(n,e,t){"use strict";var a=t("zLVn"),c=t("nKUr"),r=t("hlFM"),i=t("+zGO"),s=(t("q1tI"),t("vOnD")),o=t("t3i7"),l=Object(i.a)(Object(s.b)((function(n){n.xs,n.sm,n.md,n.lg,n.xl,n.spacing;var e=Object(a.a)(n,["xs","sm","md","lg","xl","spacing"]);return Object(c.jsx)(r.a,Object.assign({},e))})).withConfig({displayName:"LayoutGrid__StyledBox",componentId:"vx872q-0"})(["",""],(function(n){var e=n.theme,t=n.xs,a=n.sm,c=n.md,r=n.lg,i=n.xl,s=n.spacing;return"\n  display: grid;\n  grid-gap: "+Object(o.a)(e.spacing(s))+";\n  // grid-template-columns: repeat(4, 1fr);\n\n  "+(t&&e.breakpoints.up("xs"))+" {\n    grid-template-columns: repeat("+t+", 1fr);\n  }\n  "+(a&&e.breakpoints.up("sm"))+" {\n    grid-template-columns: repeat("+a+", 1fr);\n  }\n  "+(c&&e.breakpoints.up("md"))+" {\n    grid-template-columns: repeat("+c+", 1fr);\n  }\n  "+(r&&e.breakpoints.up("lg"))+" {\n    grid-template-columns: repeat("+r+", 1fr);\n  }\n  "+(i&&e.breakpoints.up("xl"))+" {\n    grid-template-columns: repeat("+t+", 1fr);\n  }\n"})));e.a=function(n){return Object(c.jsx)(l,Object.assign({},n))}},NOKo:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return O}));var a=t("zLVn"),c=t("nKUr"),r=t("+zGO"),i=t("kKAo"),s=t("ofer"),o=(t("q1tI"),t("NqE+")),l=t("N3r7"),d=t("/TFN"),p=t("t3i7"),j=t("vOnD"),b={news:"",event:"rgba(0, 0, 255, 0.05)",article:"rgba(255, 255, 0, 0.05)",announcement:"rgba(0, 255, 0, 0.05)"},g=Object(r.a)(Object(j.b)(i.a).withConfig({displayName:"news__StyledNewsBox",componentId:"sc-1k555mx-0"})(["",""],(function(n){var e=n.theme,t=n.category,a=n.colSpan,c=n.rowSpan;return"\n  grid-column-end: "+(a?"span "+a:"auto")+";\n  grid-row-end: "+(c?"span "+c:"auto")+";\n  padding: "+Object(p.a)(e.spacing(1))+";\n  background-color: "+b[t]+";\n\n  "+e.breakpoints.only("sm")+" {\n    grid-column-end: "+(a>2?"auto":"span "+a)+";\n  }\n  "+e.breakpoints.only("xs")+" {\n    grid-column-end: "+(a>1?"auto":"span "+a)+";\n  }\n  "}))),u=function(n){var e=n.children,t=n.category,r=void 0===t?"news":t,i=n.colSpan,o=void 0===i?1:i,l=n.rowSpan,p=void 0===l?1:l,j=n.title,b=Object(a.a)(n,["children","category","colSpan","rowSpan","title"]),u=Object(d.a)().t;return Object(c.jsxs)(g,Object.assign({elevation:4},b,{category:r,colSpan:o,rowSpan:p,children:[Object(c.jsx)(s.a,{variant:"caption",children:u("news.categories."+r)}),j&&Object(c.jsx)(s.a,{variant:"h3",children:j}),e]}))};function O(){var n=Object(d.a)().t;return Object(c.jsxs)(o.a,{title:n("news.title"),children:[Object(c.jsx)(s.a,{variant:"h1",children:n("news.title")}),Object(c.jsxs)(l.a,{sm:2,md:4,spacing:2,children:[Object(c.jsx)(u,{title:"News 1",children:Object(c.jsx)(s.a,{children:"News 1 Body"})}),Object(c.jsx)(u,{category:"event",children:Object(c.jsx)(s.a,{children:"News 2"})}),Object(c.jsx)(u,{colSpan:2,category:"article",children:Object(c.jsx)(s.a,{children:"News 3"})}),Object(c.jsx)(u,{colSpan:2,category:"announcement",children:Object(c.jsx)(s.a,{children:"News 4"})}),Object(c.jsx)(u,{category:"news",children:Object(c.jsx)(s.a,{children:"News 5"})}),Object(c.jsx)(u,{category:"article",children:Object(c.jsx)(s.a,{children:"News 6"})})]})]})}}}]);
//# sourceMappingURL=component---src-pages-news-tsx-b49bab5d23f356c80eb1.js.map