(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{JI1w:function(e,t,a){"use strict";var n=a("zLVn"),r=a("+zGO"),i=a("hlFM"),o=a("q1tI"),c=a.n(o),l=a("vOnD"),s=Object(r.a)(Object(l.c)((function(e){e.fit,e.src;var t=Object(n.a)(e,["fit","src"]);return c.a.createElement(i.a,t)})).withConfig({displayName:"Image__ImageBase",componentId:"cczp3e-0"})(["background-image:url(",");background-size:",";background-position:center center;background-repeat:no-repeat;"],(function(e){return e.src}),(function(e){var t=e.fit;return void 0===t?"cover":t})));t.a=function(e){return c.a.createElement(s,Object.assign({height:1,width:1,minHeight:"100px",role:"img"},e))}},pZ2g:function(e,t,a){"use strict";var n=a("tRbT"),r=a("jHz5"),i=Object(r.a)(n.a);t.a=i},qmQJ:function(e,t,a){"use strict";a.d(t,"a",(function(){return J}));var n=a("zLVn"),r=a("hlFM"),i=a("tRbT"),o=a("ofer"),c=a("7ljp"),l=a("wd/R"),s=a.n(l),m=a("q1tI"),u=a.n(m),d=(a("E9XD"),a("wx14")),p=a("KQm4"),b=a("Ff2n"),g=(a("TOwV"),a("iuhU")),h=a("H2TA"),f=a("ye/S"),v=a("5AJ6"),O=Object(v.a)(m.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),E=a("VD++");var j=Object(h.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(f.b)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,a=Object(b.a)(e,["classes"]);return m.createElement(E.a,Object(d.a)({component:"li",className:t.root,focusRipple:!0},a),m.createElement(O,{className:t.icon}))}));var x=m.forwardRef((function(e,t){var a=e.children,n=e.classes,r=e.className,i=e.component,c=void 0===i?"nav":i,l=e.expandText,s=void 0===l?"Show path":l,u=e.itemsAfterCollapse,h=void 0===u?1:u,f=e.itemsBeforeCollapse,v=void 0===f?1:f,O=e.maxItems,E=void 0===O?8:O,x=e.separator,y=void 0===x?"/":x,w=Object(b.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),k=m.useState(!1),C=k[0],I=k[1],N=m.Children.toArray(a).filter((function(e){return m.isValidElement(e)})).map((function(e,t){return m.createElement("li",{className:n.li,key:"child-".concat(t)},e)}));return m.createElement(o.a,Object(d.a)({ref:t,component:c,color:"textSecondary",className:Object(g.a)(n.root,r)},w),m.createElement("ol",{className:n.ol},function(e,t,a){return e.reduce((function(n,r,i){return i<e.length-1?n=n.concat(r,m.createElement("li",{"aria-hidden":!0,key:"separator-".concat(i),className:t},a)):n.push(r),n}),[])}(C||E&&N.length<=E?N:function(e){return v+h>=e.length?e:[].concat(Object(p.a)(e.slice(0,v)),[m.createElement(j,{"aria-label":s,key:"ellipsis",onClick:function(e){I(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(p.a)(e.slice(e.length-h,e.length)))}(N),n.separator,y)))})),y=Object(h.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(x),w=a("nQb1"),k=a("/TFN"),C=function(e){var t=e.location,a=e.pageContext,r=Object(n.a)(e,["location","pageContext"]),i=Object(k.a)().t;if(!t)return null;var c=t.pathname.replace(/^\/\w{2}\//,"/").split("/").filter((function(e){return e})),l={"/products/cloud":i("cloud.navTitle"),"/products/digitaltwin":i("digitaltwin.navTitle"),"/products/simulation":i("simulation.navTitle"),"/news":i("news.navTitle"),"/applications":i("applications.navTitle"),"/about":i("about.navTitle")};return u.a.createElement(y,Object.assign({"aria-label":"breadcrumb",color:"textPrimary"},r),u.a.createElement(o.a,{variant:"overline"},u.a.createElement(w.b,{color:"inherit",to:"/"},i("home.navTitle"))),c.map((function(e,t){var n,r=t===c.length-1,i="/"+c.slice(0,t+1).join("/"),s=l[i]||r&&(null==a||null===(n=a.frontmatter)||void 0===n?void 0:n.title)||i.split("/").pop();return r?u.a.createElement(o.a,{variant:"overline",color:"textSecondary",key:i},s):u.a.createElement(o.a,{variant:"overline",key:i},u.a.createElement(w.b,{color:"inherit",to:i},s))})))},I=a("NqE+"),N=a("pZ2g"),T=a("JI1w"),z=a("+zGO"),S=a("3PeG"),B=a("/EAt"),L=a("sRsu"),R=m.forwardRef((function(e,t){var a=e.absolute,n=void 0!==a&&a,r=e.classes,i=e.className,o=e.component,c=void 0===o?"hr":o,l=e.flexItem,s=void 0!==l&&l,u=e.light,p=void 0!==u&&u,h=e.orientation,f=void 0===h?"horizontal":h,v=e.role,O=void 0===v?"hr"!==c?"separator":void 0:v,E=e.variant,j=void 0===E?"fullWidth":E,x=Object(b.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return m.createElement(c,Object(d.a)({className:Object(g.a)(r.root,i,"fullWidth"!==j&&r[j],n&&r.absolute,s&&r.flexItem,p&&r.light,"vertical"===f&&r.vertical),role:O,ref:t},x))})),A=Object(h.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(f.c)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(R),D=a("vOnD"),M=a("vAGP"),q=Object(z.a)(Object(D.c)(r.a).withConfig({displayName:"Substitutions__StyledOlBox",componentId:"sc-1pnzoa8-0"})(["counter-reset:list-item-counter;"])),G={h1:function(e){return u.a.createElement(o.a,Object.assign({},e,{variant:"h1"}))},h2:function(e){return u.a.createElement(o.a,Object.assign({},e,{variant:"h2",gutterBottom:!0}))},h3:function(e){return u.a.createElement(o.a,Object.assign({},e,{variant:"h3",gutterBottom:!0}))},h4:function(e){return u.a.createElement(o.a,Object.assign({},e,{variant:"h4",gutterBottom:!0}))},h5:function(e){return u.a.createElement(o.a,Object.assign({},e,{variant:"h5",gutterBottom:!0}))},h6:function(e){return u.a.createElement(o.a,Object.assign({},e,{variant:"h6",gutterBottom:!0}))},p:function(e){return u.a.createElement(o.a,Object.assign({},e,{paragraph:!0}))},table:B.a,tr:L.a,td:S.a,th:function(e){return u.a.createElement(S.a,Object.assign({},e,{component:"th",variant:"head"}))},hr:A,a:function(e){var t=e.to,a=e.href,r=void 0===a?"#":a,i=Object(n.a)(e,["to","href"]);return u.a.createElement(w.b,Object.assign({},i,{to:t||r}))},ol:function(e){return u.a.createElement(q,Object.assign({pl:3},e,{component:"ol"}))},ul:function(e){return u.a.createElement(r.a,Object.assign({pl:3},e,{component:"ul"}))},li:function(e){var t=e.children,a=Object(n.a)(e,["children"]);return u.a.createElement(M.b,a,u.a.createElement(M.a,null,t))}};function J(e){var t,a=e.children,l=e.location,m=e.pageContext,d=(Object(n.a)(e,["children","location","pageContext"]),Object(k.a)().t,m.frontmatter||{}),p=d.author,b=d.featuredImage,g=d.title,h=d.date;return h&&!isNaN(Date.parse(h))&&(t=new Date(h)),u.a.createElement(c.a,{components:G},u.a.createElement(I.c,null,u.a.createElement(I.a,{component:"section",maxWidth:"lg"},u.a.createElement(r.a,{mb:7},u.a.createElement(i.a,{container:!0,alignItems:"center"},u.a.createElement(N.a,{item:!0,xs:12,sm:9,mb:{xs:2,sm:0}},u.a.createElement(C,{location:l,pageContext:m})),p||t?u.a.createElement(i.a,{item:!0,xs:12,sm:3},u.a.createElement(r.a,{textAlign:"end"},p?u.a.createElement(o.a,{variant:"body2"},p):null,t?u.a.createElement(o.a,{variant:"body2"},u.a.createElement("time",{dateTime:t.toString()},s()(t).format("LL"))):null)):null))),u.a.createElement(I.a,{component:"section",maxWidth:"md"},u.a.createElement(r.a,null,g?u.a.createElement(r.a,{position:"relative",mb:3,py:b?3:0},u.a.createElement(T.a,{position:"absolute",top:0,left:0,src:b}),u.a.createElement(o.a,{variant:"h1"},g)):null,a))))}},vAGP:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("tVbE"),r=a("IsqK"),i=a("+zGO"),o=a("vOnD"),c=Object(i.a)(Object(o.c)(r.a).withConfig({displayName:"Li__LiText",componentId:"sc-4o4szy-0"})([".MuiTypography-displayBlock{display:inline-block;&::before{content:'–';display:inline-block;color:",";text-indent:-1.6ex;ol &{content:counter(list-item-counter) '.\x0000a0 ';text-align:right;text-indent:-8ex;}}}"],(function(e){return e.theme.palette.text.secondary}))),l=Object(i.a)(Object(o.c)(n.a).withConfig({displayName:"Li",componentId:"sc-4o4szy-1"})(["padding-top:initial;padding-bottom:initial;counter-increment:list-item-counter;.MuiListItemText-root{margin-top:initial;margin-bottom:initial;}"]));t.b=l}}]);
//# sourceMappingURL=660dab3513b3ed24b9054b5a88dd0cd3a1974348-800b16431abc7c7713fc.js.map