(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"/9aa":function(e,t,n){var r=n("NykK"),a=n("ExA7");e.exports=function(e){return"symbol"==typeof e||a(e)&&"[object Symbol]"==r(e)}},"0ycA":function(e,t){e.exports=function(){return[]}},"1+5i":function(e,t,n){var r=n("w/wX"),a=n("sEf8"),o=n("mdPL"),c=o&&o.isSet,i=c?a(c):r;e.exports=i},"44Ds":function(e,t,n){var r=n("e4Nc");function a(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],o=n.cache;if(o.has(a))return o.get(a);var c=e.apply(this,r);return n.cache=o.set(a,c)||o,c};return n.cache=new(a.Cache||r),n}a.Cache=r,e.exports=a},"4Oe1":function(e,t,n){var r=n("YO3V");e.exports=function(e){return r(e)?void 0:e}},"4uTw":function(e,t,n){var r=n("Z0cm"),a=n("9ggG"),o=n("GNiM"),c=n("dt0z");e.exports=function(e,t){return r(e)?e:a(e,t)?[e]:o(c(e))}},"7GkX":function(e,t,n){var r=n("b80T"),a=n("A90E"),o=n("MMmD");e.exports=function(e){return o(e)?r(e):a(e)}},"9Nap":function(e,t,n){var r=n("/9aa");e.exports=function(e){if("string"==typeof e||r(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}},"9ggG":function(e,t,n){var r=n("Z0cm"),a=n("/9aa"),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,c=/^\w*$/;e.exports=function(e,t){if(r(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!a(e))||(c.test(e)||!o.test(e)||null!=t&&e in Object(t))}},A90E:function(e,t,n){var r=n("6sVZ"),a=n("V6Ve"),o=Object.prototype.hasOwnProperty;e.exports=function(e){if(!r(e))return a(e);var t=[];for(var n in Object(e))o.call(e,n)&&"constructor"!=n&&t.push(n);return t}},BiGR:function(e,t,n){var r=n("nmnc"),a=n("03A+"),o=n("Z0cm"),c=r?r.isConcatSpreadable:void 0;e.exports=function(e){return o(e)||a(e)||!!(c&&e&&e[c])}},CH3K:function(e,t){e.exports=function(e,t){for(var n=-1,r=t.length,a=e.length;++n<r;)e[a+n]=t[n];return e}},"Dw+G":function(e,t,n){var r=n("juv8"),a=n("mTTR");e.exports=function(e,t){return e&&r(t,a(t),e)}},EEGq:function(e,t,n){var r=n("juv8"),a=n("oCl/");e.exports=function(e,t){return r(e,a(e),t)}},G6z8:function(e,t,n){var r=n("fR/l"),a=n("oCl/"),o=n("mTTR");e.exports=function(e){return r(e,o,a)}},GNiM:function(e,t,n){var r=n("I01J"),a=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,c=r((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(a,(function(e,n,r,a){t.push(r?a.replace(o,"$1"):n||e)})),t}));e.exports=c},Gi0A:function(e,t,n){var r=n("QqLw"),a=n("ExA7");e.exports=function(e){return a(e)&&"[object Map]"==r(e)}},HOxn:function(e,t,n){var r=n("Cwc5")(n("Kz5y"),"Promise");e.exports=r},I01J:function(e,t,n){var r=n("44Ds");e.exports=function(e){var t=r(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}},KxBF:function(e,t){e.exports=function(e,t,n){var r=-1,a=e.length;t<0&&(t=-t>a?0:a+t),(n=n>a?a:n)<0&&(n+=a),a=t>n?0:n-t>>>0,t>>>=0;for(var o=Array(a);++r<a;)o[r]=e[r+t];return o}},LXxW:function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,a=0,o=[];++n<r;){var c=e[n];t(c,n,e)&&(o[a++]=c)}return o}},MvSz:function(e,t,n){var r=n("LXxW"),a=n("0ycA"),o=Object.prototype.propertyIsEnumerable,c=Object.getOwnPropertySymbols,i=c?function(e){return null==e?[]:(e=Object(e),r(c(e),(function(t){return o.call(e,t)})))}:a;e.exports=i},OBhP:function(e,t,n){var r=n("fmRc"),a=n("gFfm"),o=n("MrPd"),c=n("WwFo"),i=n("Dw+G"),u=n("5Tg0"),l=n("Q1l4"),s=n("VOtZ"),f=n("EEGq"),p=n("qZTm"),b=n("G6z8"),m=n("QqLw"),d=n("yHx3"),v=n("wrZu"),g=n("+iFO"),y=n("Z0cm"),w=n("DSRE"),j=n("zEVN"),x=n("GoyQ"),h=n("1+5i"),O=n("7GkX"),E=n("mTTR"),k={};k["[object Arguments]"]=k["[object Array]"]=k["[object ArrayBuffer]"]=k["[object DataView]"]=k["[object Boolean]"]=k["[object Date]"]=k["[object Float32Array]"]=k["[object Float64Array]"]=k["[object Int8Array]"]=k["[object Int16Array]"]=k["[object Int32Array]"]=k["[object Map]"]=k["[object Number]"]=k["[object Object]"]=k["[object RegExp]"]=k["[object Set]"]=k["[object String]"]=k["[object Symbol]"]=k["[object Uint8Array]"]=k["[object Uint8ClampedArray]"]=k["[object Uint16Array]"]=k["[object Uint32Array]"]=!0,k["[object Error]"]=k["[object Function]"]=k["[object WeakMap]"]=!1,e.exports=function e(t,n,S,A,N,G){var T,z=1&n,M=2&n,I=4&n;if(S&&(T=N?S(t,A,N,G):S(t)),void 0!==T)return T;if(!x(t))return t;var C=y(t);if(C){if(T=d(t),!z)return l(t,T)}else{var F=m(t),R="[object Function]"==F||"[object GeneratorFunction]"==F;if(w(t))return u(t,z);if("[object Object]"==F||"[object Arguments]"==F||R&&!N){if(T=M||R?{}:g(t),!z)return M?f(t,i(T,t)):s(t,c(T,t))}else{if(!k[F])return N?t:{};T=v(t,F,z)}}G||(G=new r);var B=G.get(t);if(B)return B;G.set(t,T),h(t)?t.forEach((function(r){T.add(e(r,n,S,r,t,G))})):j(t)&&t.forEach((function(r,a){T.set(a,e(r,n,S,a,t,G))}));var P=C?void 0:(I?M?b:p:M?E:O)(t);return a(P||t,(function(r,a){P&&(r=t[a=r]),o(T,a,e(r,n,S,a,t,G))})),T}},OGr7:function(e,t,n){"use strict";n.r(t),n.d(t,"queryNews",(function(){return D})),n.d(t,"default",(function(){return L}));var r,a=n("zLVn"),o=n("+zGO"),c=n("/EAt"),i=n("sRsu"),u=n("3PeG"),l=n("Uf6+"),s=n("hlFM"),f=n("kKAo"),p=n("ofer"),b=n("wd/R"),m=n.n(b),d=n("q1tI"),v=n.n(d),g=n("AaJB"),y=n("SRsN"),w=n("vOnD"),j=n("t3i7"),x=Object(o.a)(Object(w.c)((function(e){e.xs,e.sm,e.md,e.lg,e.xl,e.spacing,e.dense;var t=Object(a.a)(e,["xs","sm","md","lg","xl","spacing","dense"]);return v.a.createElement(s.a,t)})).withConfig({displayName:"LayoutGrid__StyledBox",componentId:"zyu7aj-0"})(["",""],(function(e){var t=e.theme,n=e.xs,r=e.sm,a=e.md,o=e.lg,c=e.xl,i=e.spacing,u=e.dense;return"\n  display: grid;\n  grid-gap: "+Object(j.a)(t.spacing(i))+";\n  "+(u?"grid-auto-flow: dense;":"")+"\n  // grid-template-columns: repeat(4, 1fr);\n\n  "+(n&&t.breakpoints.up("xs"))+" {\n    grid-template-columns: repeat("+n+", 1fr);\n  }\n  "+(r&&t.breakpoints.up("sm"))+" {\n    grid-template-columns: repeat("+r+", 1fr);\n  }\n  "+(a&&t.breakpoints.up("md"))+" {\n    grid-template-columns: repeat("+a+", 1fr);\n  }\n  "+(o&&t.breakpoints.up("lg"))+" {\n    grid-template-columns: repeat("+o+", 1fr);\n  }\n  "+(c&&t.breakpoints.up("xl"))+" {\n    grid-template-columns: repeat("+n+", 1fr);\n  }\n"}))),h=function(e){return v.a.createElement(x,e)},O=n("nQb1"),E=n("NqE+"),k=n("j8uL"),S=n("/TFN"),A=n("Puqe"),N=n.n(A);!function(e){e[e.news=0]="news",e.event="rgba(0, 0, 255, 0.05)",e.article="rgba(255, 255, 0, 0.05)",e.announcement="rgba(0, 255, 0, 0.05)"}(r||(r={}));var G,T,z={normal:{colSpan:1,rowSpan:1},big:{colSpan:2,rowSpan:1},biggest:{colSpan:4,rowSpan:1}},M=Object(o.a)(Object(w.c)((G=f.a,T=["theme","src","prominence","colspan","rowspan","category"],v.a.forwardRef((function(e,t){var n=Object(d.useMemo)((function(){return N()(e,T)}),[e]);return v.a.createElement(G,Object.assign({},n,{ref:t}))})))).withConfig({displayName:"news__StyledNewsBox",componentId:"sc-5f3s93-0"})(["",""],(function(e){var t=e.theme,n=e.colSpan,r=e.rowSpan,a=e.src;return"\n  grid-column-end: "+(n?"span "+n:"auto")+";\n  grid-row-end: "+(r?"span "+r:"auto")+";\n  padding: "+Object(j.a)(t.spacing(2))+";\n  background-color: transparent;\n  display: flex;\n  flex-direction: column;\n  height: 360px;\n  position: relative;\n  overflow: hidden;\n\n  &.MuiPaper-outlined {\n    border: 3px solid "+t.palette.text.primary+";\n    border-radius: 16px;\n  }\n\n  "+t.breakpoints.only("sm")+" {\n    grid-column-end: "+(n>2?"auto":"span "+n)+";\n  }\n  "+t.breakpoints.only("xs")+" {\n    grid-column-end: "+(n>1?"auto":"span "+n)+';\n  }\n\n  &::before {\n    content: "";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: '+t.palette.background.paper+";\n    background-image: url("+a+");\n    background-position: center center;\n    background-size: cover;\n    opacity: 0.4;\n    filter: blur(1px);\n    will-change: opacity, filter;\n  }\n  &:hover::before {\n    filter: blur(0);\n    opacity: 0.6;\n  }\n  "}))),I=Object(o.a)(Object(w.c)(p.a).withConfig({displayName:"news__NewsBoxTitle",componentId:"sc-5f3s93-1"})(["&.MuiTypography-h2{font-weight:400;}&.MuiTypography-h4{font-weight:600;}"])),C=Object(o.a)(Object(w.c)(s.a).withConfig({displayName:"news__FadeBox",componentId:"sc-5f3s93-2"})(["overflow:hidden;height:100%;mask-box-image:linear-gradient(to bottom,black calc(100% - 5em),transparent);mask-box-image-width:0 0 1em 0;"])),F=Object(o.a)(Object(w.c)(c.a).withConfig({displayName:"news__StyledTable",componentId:"sc-5f3s93-3"})(["border-collapse:separate;"])),R=function(e,t,n){return n instanceof Array||(n=Object.keys(n)),-1!==n.indexOf(t)||(console.error('Unknown news %s: "%s". Use one of the following: %s.',e,t,n.join(", ")),!1)},B=function(e){var t=e.children,n=e.category,o=void 0===n?"news":n,c=e.prominence,i=void 0===c?"normal":c,u=e.link,l=e.title,f=Object(a.a)(e,["children","category","prominence","link","title"]),b=Object(S.a)().t,m=z[i].colSpan||1,d=z[i].rowSpan||1;R("category",o,r);var y=u&&u.match("://");return v.a.createElement(M,Object.assign({elevation:0},f,{prominence:i,category:o,colSpan:m,rowSpan:d}),v.a.createElement(s.a,{position:"relative"},v.a.createElement(p.a,{variant:"overline"},b("news.categories."+o))),v.a.createElement(C,null,l&&v.a.createElement(I,{variant:"h5"},l),t),u?v.a.createElement(s.a,{alignSelf:"start",mt:"auto"},v.a.createElement(g.a,{buttonVariant:"outlined",to:u,target:y?"_blank":void 0},b("main.buttons.readNews"))):null)},P=function(e){var t=e.title,n=e.date,r=(e.src,e.category),a=e.link,o=Object(S.a)().t,c=a&&a.match("://"),l=(null==n?void 0:n.getFullYear())===(new Date).getFullYear()?m()(n,"LL").fromNow():m()(n).format("LL");return v.a.createElement(i.a,null,v.a.createElement(u.a,null,v.a.createElement(p.a,{variant:"overline"},o("news.categories."+r))),v.a.createElement(u.a,null,n?v.a.createElement(p.a,{variant:"overline"},v.a.createElement("time",{dateTime:n.toString()},l)):null),v.a.createElement(u.a,null,v.a.createElement(p.a,null,v.a.createElement(O.a,{to:a||"",color:"textSecondary",target:c?"_blank":void 0},t))))},D="3249392704";function L(e){var t=e.data,n=Object(S.a)().t,r=t.allFile.edges.filter((function(e){return Boolean(e.node.childMdx)})).map((function(e){return t=e.node,o=t.birthTime,c=t.childMdx,i=c.id,u=c.frontmatter,l=c.headings,s=c.excerpt,f=c.slug,p=new Date(null!=u&&u.date&&!isNaN(Date.parse(null==u?void 0:u.date))?null==u?void 0:u.date:o),b=(null==u?void 0:u.link)||(null==f?void 0:f.replace(/^pages/,""))||void 0,m="",d="",v=(null==u?void 0:u.category)||"news",g=(null==u?void 0:u.prominence)||"normal",y=(null==u||null===(n=u.featuredImage)||void 0===n||null===(r=n.childImageSharp)||void 0===r||null===(a=r.fluid)||void 0===a?void 0:a.src)||void 0,null!=u&&u.title?m=u.title:null!=l&&l.length&&l[0]&&l[0].value&&(m=l[0].value),null!=u&&u.preview?d=null==u?void 0:u.preview:s&&(d=s.slice(m.length)),{bodyPreview:d,category:v,date:p,featuredImageSrc:y,id:i,link:b,prominence:g,title:m};var t,n,r,a,o,c,i,u,l,s,f,p,b,m,d,v,g,y})).sort((function(e,t){return t.date.getTime()-e.date.getTime()})),a=r.splice(8);return v.a.createElement(E.c,{title:n("news.title")},v.a.createElement(E.a,null,v.a.createElement(s.a,{mt:{xs:2,md:6},mb:4},v.a.createElement(p.a,{variant:"h3"},n("news.title"))),v.a.createElement(s.a,{mb:2},v.a.createElement(h,{sm:2,md:4,spacing:2,dense:!0},r.map((function(e){var t=e.id,n=e.title,r=e.bodyPreview,a=e.category,o=e.link,c=e.featuredImageSrc,i=e.prominence;return R("prominence",i,z),v.a.createElement(B,{key:t,title:n,src:c,category:a,prominence:i,link:o},v.a.createElement(p.a,null,r))}))))),v.a.createElement(E.a,null,v.a.createElement(s.a,{mt:10,mb:3},v.a.createElement(y.a,null,v.a.createElement(p.a,{variant:"h4"},n("news.archive"))),v.a.createElement(F,null,v.a.createElement(l.a,null,a.map((function(e,t){var n=e.title,r=e.category,a=e.date,o=e.link,c=e.featuredImageSrc;return v.a.createElement(P,{key:"newsTableRow"+t,title:n,date:a,src:c,category:r,link:o})})))))),v.a.createElement(k.a,null))}},"Of+w":function(e,t,n){var r=n("Cwc5")(n("Kz5y"),"WeakMap");e.exports=r},Puqe:function(e,t,n){var r=n("eUgh"),a=n("OBhP"),o=n("S7Xf"),c=n("4uTw"),i=n("juv8"),u=n("4Oe1"),l=n("xs/l"),s=n("G6z8"),f=l((function(e,t){var n={};if(null==e)return n;var l=!1;t=r(t,(function(t){return t=c(t,e),l||(l=t.length>1),t})),i(e,s(e),n),l&&(n=a(n,7,u));for(var f=t.length;f--;)o(n,t[f]);return n}));e.exports=f},QqLw:function(e,t,n){var r=n("tadb"),a=n("ebwN"),o=n("HOxn"),c=n("yGk4"),i=n("Of+w"),u=n("NykK"),l=n("3Fdi"),s=l(r),f=l(a),p=l(o),b=l(c),m=l(i),d=u;(r&&"[object DataView]"!=d(new r(new ArrayBuffer(1)))||a&&"[object Map]"!=d(new a)||o&&"[object Promise]"!=d(o.resolve())||c&&"[object Set]"!=d(new c)||i&&"[object WeakMap]"!=d(new i))&&(d=function(e){var t=u(e),n="[object Object]"==t?e.constructor:void 0,r=n?l(n):"";if(r)switch(r){case s:return"[object DataView]";case f:return"[object Map]";case p:return"[object Promise]";case b:return"[object Set]";case m:return"[object WeakMap]"}return t}),e.exports=d},RBan:function(e,t){e.exports=function(e){var t=null==e?0:e.length;return t?e[t-1]:void 0}},S7Xf:function(e,t,n){var r=n("4uTw"),a=n("RBan"),o=n("gpbi"),c=n("9Nap");e.exports=function(e,t){return t=r(t,e),null==(e=o(e,t))||delete e[c(a(t))]}},SRsN:function(e,t,n){"use strict";var r=n("Ji2X"),a=n("+zGO"),o=n("jHz5"),c=n("vOnD"),i=Object(o.a)(Object(a.a)(Object(c.c)(r.a).withConfig({displayName:"Center",componentId:"dbr6ig-0"})(["text-align:center;"])));t.a=i},TYy9:function(e,t,n){var r=n("XGnz");e.exports=function(e){return(null==e?0:e.length)?r(e,1):[]}},"Uf6+":function(e,t,n){"use strict";var r=n("wx14"),a=n("Ff2n"),o=n("q1tI"),c=n("iuhU"),i=n("H2TA"),u=n("tgoA"),l={variant:"body"},s=o.forwardRef((function(e,t){var n=e.classes,i=e.className,s=e.component,f=void 0===s?"tbody":s,p=Object(a.a)(e,["classes","className","component"]);return o.createElement(u.a.Provider,{value:l},o.createElement(f,Object(r.a)({className:Object(c.a)(n.root,i),ref:t,role:"tbody"===f?null:"rowgroup"},p)))}));t.a=Object(i.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(s)},V6Ve:function(e,t,n){var r=n("kekF")(Object.keys,Object);e.exports=r},VOtZ:function(e,t,n){var r=n("juv8"),a=n("MvSz");e.exports=function(e,t){return r(e,a(e),t)}},WwFo:function(e,t,n){var r=n("juv8"),a=n("7GkX");e.exports=function(e,t){return e&&r(t,a(t),e)}},XGnz:function(e,t,n){var r=n("CH3K"),a=n("BiGR");e.exports=function e(t,n,o,c,i){var u=-1,l=t.length;for(o||(o=a),i||(i=[]);++u<l;){var s=t[u];n>0&&o(s)?n>1?e(s,n-1,o,c,i):r(i,s):c||(i[i.length]=s)}return i}},XYm9:function(e,t,n){var r=n("+K+b");e.exports=function(e,t){var n=t?r(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}},ZWtO:function(e,t,n){var r=n("4uTw"),a=n("9Nap");e.exports=function(e,t){for(var n=0,o=(t=r(t,e)).length;null!=e&&n<o;)e=e[a(t[n++])];return n&&n==o?e:void 0}},b2z7:function(e,t){var n=/\w*$/;e.exports=function(e){var t=new e.constructor(e.source,n.exec(e));return t.lastIndex=e.lastIndex,t}},dt0z:function(e,t,n){var r=n("zoYe");e.exports=function(e){return null==e?"":r(e)}},eUgh:function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a}},"fR/l":function(e,t,n){var r=n("CH3K"),a=n("Z0cm");e.exports=function(e,t,n){var o=t(e);return a(e)?o:r(o,n(e))}},gFfm:function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}},gpbi:function(e,t,n){var r=n("ZWtO"),a=n("KxBF");e.exports=function(e,t){return t.length<2?e:r(e,a(t,0,-1))}},"oCl/":function(e,t,n){var r=n("CH3K"),a=n("LcsW"),o=n("MvSz"),c=n("0ycA"),i=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)r(t,o(e)),e=a(e);return t}:c;e.exports=i},"otv/":function(e,t,n){var r=n("nmnc"),a=r?r.prototype:void 0,o=a?a.valueOf:void 0;e.exports=function(e){return o?Object(o.call(e)):{}}},qZTm:function(e,t,n){var r=n("fR/l"),a=n("MvSz"),o=n("7GkX");e.exports=function(e){return r(e,o,a)}},tadb:function(e,t,n){var r=n("Cwc5")(n("Kz5y"),"DataView");e.exports=r},"w/wX":function(e,t,n){var r=n("QqLw"),a=n("ExA7");e.exports=function(e){return a(e)&&"[object Set]"==r(e)}},wrZu:function(e,t,n){var r=n("+K+b"),a=n("XYm9"),o=n("b2z7"),c=n("otv/"),i=n("yP5f");e.exports=function(e,t,n){var u=e.constructor;switch(t){case"[object ArrayBuffer]":return r(e);case"[object Boolean]":case"[object Date]":return new u(+e);case"[object DataView]":return a(e,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return i(e,n);case"[object Map]":return new u;case"[object Number]":case"[object String]":return new u(e);case"[object RegExp]":return o(e);case"[object Set]":return new u;case"[object Symbol]":return c(e)}}},"xs/l":function(e,t,n){var r=n("TYy9"),a=n("Ioao"),o=n("wclG");e.exports=function(e){return o(a(e,void 0,r),e+"")}},yGk4:function(e,t,n){var r=n("Cwc5")(n("Kz5y"),"Set");e.exports=r},yHx3:function(e,t){var n=Object.prototype.hasOwnProperty;e.exports=function(e){var t=e.length,r=new e.constructor(t);return t&&"string"==typeof e[0]&&n.call(e,"index")&&(r.index=e.index,r.input=e.input),r}},zEVN:function(e,t,n){var r=n("Gi0A"),a=n("sEf8"),o=n("mdPL"),c=o&&o.isMap,i=c?a(c):r;e.exports=i},zoYe:function(e,t,n){var r=n("nmnc"),a=n("eUgh"),o=n("Z0cm"),c=n("/9aa"),i=r?r.prototype:void 0,u=i?i.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(o(t))return a(t,e)+"";if(c(t))return u?u.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}}}]);
//# sourceMappingURL=component---src-pages-news-index-tsx-ee9f60eb68190ceb910c.js.map