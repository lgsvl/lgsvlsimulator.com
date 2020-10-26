(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{N3r7:function(e,t,a){"use strict";var n=a("zLVn"),r=a("hlFM"),i=a("+zGO"),c=a("q1tI"),o=a.n(c),m=a("vOnD"),l=a("t3i7"),s=Object(i.a)(Object(m.b)((function(e){e.xs,e.sm,e.md,e.lg,e.xl,e.spacing;var t=Object(n.a)(e,["xs","sm","md","lg","xl","spacing"]);return o.a.createElement(r.a,t)})).withConfig({displayName:"LayoutGrid__StyledBox",componentId:"vx872q-0"})(["",""],(function(e){var t=e.theme,a=e.xs,n=e.sm,r=e.md,i=e.lg,c=e.xl,o=e.spacing;return"\n  display: grid;\n  grid-gap: "+Object(l.a)(t.spacing(o))+";\n  // grid-template-columns: repeat(4, 1fr);\n\n  "+(a&&t.breakpoints.up("xs"))+" {\n    grid-template-columns: repeat("+a+", 1fr);\n  }\n  "+(n&&t.breakpoints.up("sm"))+" {\n    grid-template-columns: repeat("+n+", 1fr);\n  }\n  "+(r&&t.breakpoints.up("md"))+" {\n    grid-template-columns: repeat("+r+", 1fr);\n  }\n  "+(i&&t.breakpoints.up("lg"))+" {\n    grid-template-columns: repeat("+i+", 1fr);\n  }\n  "+(c&&t.breakpoints.up("xl"))+" {\n    grid-template-columns: repeat("+a+", 1fr);\n  }\n"})));t.a=function(e){return o.a.createElement(s,e)}},QeBL:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return z}));var n=a("+zGO"),r=a("hlFM"),i=a("Ji2X"),c=a("tRbT"),o=a("ofer"),m=a("q1tI"),l=a.n(m),s=a("vOnD"),d=Object(n.a)(Object(s.b)(r.a).withConfig({displayName:"MoreArrows__ArrowsContainer",componentId:"sc-17e3g1s-0"})(["width:40px;height:80px;display:inline-block;"])),p=Object(n.a)(Object(s.b)(r.a).withConfig({displayName:"MoreArrows__Arrow",componentId:"sc-17e3g1s-1"})(["display:block;width:20px;height:20px;border-bottom:2px solid white;border-right:2px solid white;transform:translate(20px,-10px) rotate(45deg);margin:-10px;animation:animate 2s infinite;will-change:transform,opacity;&:nth-child(2){animation-delay:-0.2s;}&:nth-child(3){animation-delay:-0.4s;}@keyframes animate{0%{opacity:0;transform:translate(20px,-10px) rotate(45deg) translate(0,0);}50%{opacity:1;}100%{opacity:0;transform:translate(20px,-10px) rotate(45deg) translate(30px,30px);}}"])),u=function(){return l.a.createElement(d,null,l.a.createElement(p,null),l.a.createElement(p,null),l.a.createElement(p,null))},b=a("NqE+"),g=a("nrjT"),h=a("/TFN"),f=a("t3i7"),E=a("n57c"),x=a("5oGM"),y=a("N3r7"),w=Object(n.a)(Object(s.b)(i.a).withConfig({displayName:"pages__Center",componentId:"sc-1rmyqsz-0"})(["text-align:center;max-width:",";"],(function(e){var t=e.theme;return Object(f.a)(t.spacing(90))}))),O=Object(n.a)(Object(s.b)(r.a).withConfig({displayName:"pages__Image",componentId:"sc-1rmyqsz-1"})(["height:100%;width:100%;background-image:linear-gradient(-205deg,#e83d95,#862155 30%,black);border-radius:8px;"])),j=function(e,t){return void 0===t&&(t=0),Math.round(e*Math.pow(10,t))/Math.pow(10,t)},v=2*j(2/12,4),_=Object(n.a)(Object(s.b)(O).withConfig({displayName:"pages__TuckingImage",componentId:"sc-1rmyqsz-2"})(["min-height:300px;","{width:","%;}"],(function(e){return e.theme.breakpoints.up("sm")}),100*(1+v))),k=Object(n.a)(Object(s.b)(_).withConfig({displayName:"pages__ReverseTuckingImage",componentId:"sc-1rmyqsz-3"})(["","{margin-inline-start:","%;}"],(function(e){return e.theme.breakpoints.up("sm")}),j(-100*v,4))),I=Object(n.a)(Object(s.b)(O).withConfig({displayName:"pages__SmallImage",componentId:"sc-1rmyqsz-4"})(["height:456px;",""],(function(e){var t=e.theme;return"\n    "+t.breakpoints.down("sm")+" {\n      height: 300px;\n    }\n    "+t.breakpoints.down("xs")+" {\n      height: 200px;\n    }\n  "}))),N=Object(n.a)(Object(s.b)(r.a).withConfig({displayName:"pages__HeroBox",componentId:"sc-1rmyqsz-5"})(["background-image:linear-gradient(-205deg,#e83d95,#862155 30%,black);"])),C=Object(n.a)(Object(s.b)(c.a).withConfig({displayName:"pages__HeroGrid",componentId:"sc-1rmyqsz-6"})(["height:100%;"])),q=function(e){return l.a.createElement(o.a,null,e)},T={color:"#6D7B97",height:40,width:"100%"};function z(){var e=Object(h.a)(),t=e.t,a=e.tMap;return l.a.createElement(b.a,null,l.a.createElement(N,{mb:15,height:"70vh"},l.a.createElement(C,{container:!0,direction:"column",alignItems:"center",justify:"center"},l.a.createElement(c.a,{item:!0},l.a.createElement(o.a,{variant:"h1"},t("home.title"))),l.a.createElement(c.a,{item:!0},l.a.createElement(w,{disableGutters:!0},a("home.body",q),l.a.createElement(r.a,{mt:6},l.a.createElement(E.a,null))))),l.a.createElement(r.a,{p:2,textAlign:"center"},l.a.createElement(u,null))),l.a.createElement(r.a,{my:15},l.a.createElement(c.a,{container:!0},l.a.createElement(c.a,{item:!0,xs:12,sm:6},l.a.createElement(_,null)),l.a.createElement(c.a,{item:!0,xs:12,sm:6},l.a.createElement(g.a,{title:t("home.section1.title"),buttonText:"getDemo"},a("home.section1.body",q))))),l.a.createElement(r.a,{my:15},l.a.createElement(c.a,{container:!0,direction:"row-reverse"},l.a.createElement(c.a,{item:!0,xs:12,sm:6},l.a.createElement(k,null)),l.a.createElement(c.a,{item:!0,xs:12,sm:6},l.a.createElement(g.a,{title:t("home.section2.title"),buttonText:"getDemo"},a("home.section2.body",q))))),l.a.createElement(r.a,{my:15},l.a.createElement(w,{disableGutters:!0},l.a.createElement(y.a,{xs:2,sm:4,spacing:2},l.a.createElement(x.b,T),l.a.createElement(x.a,T),l.a.createElement(x.k,T),l.a.createElement(x.l,T)))),l.a.createElement(r.a,{my:15},l.a.createElement(c.a,{container:!0,spacing:3},l.a.createElement(c.a,{item:!0,xs:12,sm:4},l.a.createElement(I,null),l.a.createElement(g.a,{title:t("home.features.0.title"),buttonText:"Read More"},a("home.features.0.body",q))),l.a.createElement(c.a,{item:!0,xs:12,sm:4},l.a.createElement(I,null),l.a.createElement(g.a,{title:t("home.features.1.title"),buttonText:"Read More"},a("home.features.1.body",q))),l.a.createElement(c.a,{item:!0,xs:12,sm:4},l.a.createElement(I,null),l.a.createElement(g.a,{title:t("home.features.2.title"),buttonText:"Read More"},a("home.features.2.body",q))))))}},n57c:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return p}));var n=a("Z3vd"),r=a("+zGO"),i=a("q1tI"),c=a.n(i),o=a("vOnD"),m=a("/TFN"),l=Object(r.a)(Object(o.b)(n.a).withConfig({displayName:"Button__StyledButton",componentId:"bhyob2-0"})([""])),s=c.a.forwardRef((function(e,t){return c.a.createElement(l,Object.assign({variant:"outlined"},e,{ref:t}))})),d=c.a.forwardRef((function(e,t){var a=Object(m.a)().t;return c.a.createElement(s,Object.assign({color:"primary",variant:"contained"},e,{ref:t}),a("main.buttons.getDemo"))})),p=c.a.forwardRef((function(e,t){var a=Object(m.a)().t;return c.a.createElement(s,Object.assign({},e,{ref:t}),a("main.buttons.readMore"))}));t.c=s},nrjT:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var n=a("+zGO"),r=a("hlFM"),i=a("Ji2X"),c=a("tRbT"),o=a("kKAo"),m=a("ofer"),l=a("q1tI"),s=a.n(l),d=a("n57c"),p=a("pZ2g"),u=a("t3i7"),b=a("vOnD"),g=Object(n.a)(Object(b.b)(i.a).withConfig({displayName:"Section__SectionContainer",componentId:"sc-15qzyw2-0"})(["margin-bottom:",";&:last-child{margin-bottom:0;}"],(function(e){var t=e.theme;return Object(u.a)(t.spacing(9))}))),h=Object(n.a)(Object(b.b)(o.a).withConfig({displayName:"Section__StyledPaper",componentId:"sc-15qzyw2-1"})([""])),f=Object(n.a)(Object(b.b)(r.a).withConfig({displayName:"Section__Image",componentId:"sc-15qzyw2-2"})(["height:100%;width:100%;min-height:300px;background-image:linear-gradient(-205deg,#e83d95,#862155 30%,black);border-radius:8px;"])),E=function(e){var t,a=e.buttonText,n=e.children,r=e.title,i=e.variant,o=void 0===i?"h5":i;switch(a){case"getDemo":t=s.a.createElement(d.a,null);break;case"readMore":t=s.a.createElement(d.b,null);break;default:t=s.a.createElement(d.c,null,a)}return s.a.createElement(c.a,{container:!0,direction:"column"},s.a.createElement(p.b,{item:!0},s.a.createElement(m.a,{variant:o},r)),s.a.createElement(p.b,{item:!0,my:5},n),a&&s.a.createElement(p.b,{item:!0},t))};t.b=function(e){var t=e.buttonText,a=e.children,n=e.flip,i=e.title,o=(e.tuckImage,e.variant);return s.a.createElement(g,{component:"section"},s.a.createElement(h,{elevation:0},s.a.createElement(c.a,{container:!0,spacing:2,direction:n?"row-reverse":"row"},s.a.createElement(c.a,{item:!0,xs:12,md:6},s.a.createElement(f,null)),s.a.createElement(c.a,{item:!0,xs:12,md:6},s.a.createElement(r.a,{px:2},s.a.createElement(E,{title:i,buttonText:t,variant:o},a))))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-dc18f17988f79455eea6.js.map