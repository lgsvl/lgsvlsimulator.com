(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{j8uL:function(e,t,n){"use strict";var o=n("hlFM"),r=n("tRbT"),a=n("PsDL"),i=n("wx14"),c=n("Ff2n"),s=n("q1tI"),l=n.n(s),u=n("iuhU"),p=n("ofer"),m=n("H2TA"),d=n("4hqb"),f=s.forwardRef((function(e,t){var n=e.children,o=e.classes,r=e.className,a=e.component,l=void 0===a?"div":a,m=e.disablePointerEvents,f=void 0!==m&&m,b=e.disableTypography,g=void 0!==b&&b,h=e.position,v=e.variant,O=Object(c.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),y=Object(d.b)()||{},j=v;return v&&y.variant,y&&!j&&(j=y.variant),s.createElement(d.a.Provider,{value:null},s.createElement(l,Object(i.a)({className:Object(u.a)(o.root,r,f&&o.disablePointerEvents,y.hiddenLabel&&o.hiddenLabel,"filled"===j&&o.filled,{start:o.positionStart,end:o.positionEnd}[h],"dense"===y.margin&&o.marginDense),ref:t},O),"string"!=typeof n||g?n:s.createElement(p.a,{color:"textSecondary"},n)))})),b=Object(m.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(f),g=n("+zGO"),h=n("k8wm"),v=n("5oGM"),O=n("VfqG"),y=n("/TFN"),j=n("nOiD"),T=n.n(j),w=n("vOnD"),x=n("NqE+"),E=Object(g.a)(Object(w.c)(r.a).withConfig({displayName:"SubscribeBox__FullHeightGrid",componentId:"sc-12cwqlr-0"})(["height:100%;"])),S=Object(g.a)(Object(w.c)(b).withConfig({displayName:"SubscribeBox__StyledInputAdornment",componentId:"sc-12cwqlr-1"})(["padding-right:4px;"])),k=Object(g.a)(Object(w.c)(a.a).withConfig({displayName:"SubscribeBox__TransitioningIconButton",componentId:"sc-12cwqlr-2"})(["",""],(function(e){var t=e.theme;return"\n  border-radius: 4px;\n\n  transition: "+t.transitions.create("opacity",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})+";\n"})));t.a=function(e){var t=Object.assign({},e),n=Object(y.a)().t,a=Object(s.useState)(!1),i=a[0],c=a[1],u=Object(s.useCallback)((function(e){c(Boolean(e.target.value.length))}),[c]);return l.a.createElement(x.b,null,l.a.createElement(o.a,Object.assign({mb:4,position:"relative"},t),l.a.createElement(h.a,{src:T.a,position:"absolute",fit:"cover",overlayOffset:[0,"-200%"]},l.a.createElement(p.a,null,"A really cool looking video of a Lidar point-cloud following a simulated autonomous vehicle that makes you really want to subscribe to our email list for more information.")),l.a.createElement(o.a,{p:2,height:{xs:600,sm:400,md:600}},l.a.createElement(E,{container:!0,alignItems:"center",justify:"center"},l.a.createElement(r.a,{item:!0,xs:12,sm:10,md:6},l.a.createElement(p.a,{variant:"h3",gutterBottom:!0},n("main.subscribe.title")),l.a.createElement(O.a,{id:"subscribeEmailAddress",label:n("main.subscribe.emailPlaceholder"),placeholder:n("main.subscribe.emailPlaceholder"),fullWidth:!0,variant:"outlined",onChange:u,InputProps:{endAdornment:l.a.createElement(S,{position:"end"},l.a.createElement(k,{style:i?void 0:{opacity:0,pointerEvents:"none"},"aria-label":"submit subscription",edge:"end",size:"medium"},l.a.createElement(v.c,null)))}}))))))}},k8wm:function(e,t,n){"use strict";var o=n("zLVn"),r=n("hlFM"),a=n("+zGO"),i=n("ye/S"),c=n("wx14"),s=n("ODXe"),l=n("Ff2n"),u=n("rePB"),p=n("q1tI"),m=n.n(p),d=n("i8i4"),f=n("iuhU"),b=n("2+6g"),g=n("H2TA"),h=n("NqtD"),v=n("bqsI"),O=n("AOnC"),y=n("bfFb");var j=n("GIek"),T=n("G7As"),w=n("yCxk"),x=n("tr08");function E(e){return Math.round(1e5*e)/1e5}var S=!1,k=null;var P=p.forwardRef((function(e,t){var n=e.arrow,o=void 0!==n&&n,r=e.children,a=e.classes,i=e.disableFocusListener,u=void 0!==i&&i,m=e.disableHoverListener,g=void 0!==m&&m,E=e.disableTouchListener,P=void 0!==E&&E,C=e.enterDelay,L=void 0===C?100:C,B=e.enterNextDelay,I=void 0===B?0:B,M=e.enterTouchDelay,N=void 0===M?700:M,D=e.id,R=e.interactive,F=void 0!==R&&R,A=e.leaveDelay,_=void 0===A?0:A,q=e.leaveTouchDelay,z=void 0===q?1500:q,G=e.onClose,H=e.onOpen,V=e.open,W=e.placement,$=void 0===W?"bottom":W,J=e.PopperComponent,U=void 0===J?O.a:J,X=e.PopperProps,K=e.title,Q=e.TransitionComponent,Y=void 0===Q?v.a:Q,Z=e.TransitionProps,ee=Object(l.a)(e,["arrow","children","classes","disableFocusListener","disableHoverListener","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","id","interactive","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","title","TransitionComponent","TransitionProps"]),te=Object(x.a)(),ne=p.useState(),oe=ne[0],re=ne[1],ae=p.useState(null),ie=ae[0],ce=ae[1],se=p.useRef(!1),le=p.useRef(),ue=p.useRef(),pe=p.useRef(),me=p.useRef(),de=Object(w.a)({controlled:V,default:!1,name:"Tooltip",state:"open"}),fe=Object(s.a)(de,2),be=fe[0],ge=fe[1],he=be,ve=function(e){var t=p.useState(e),n=t[0],o=t[1],r=e||n;return p.useEffect((function(){null==n&&o("mui-".concat(Math.round(1e5*Math.random())))}),[n]),r}(D);p.useEffect((function(){return function(){clearTimeout(le.current),clearTimeout(ue.current),clearTimeout(pe.current),clearTimeout(me.current)}}),[]);var Oe=function(e){clearTimeout(k),S=!0,ge(!0),H&&H(e)},ye=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(t){var n=r.props;"mouseover"===t.type&&n.onMouseOver&&e&&n.onMouseOver(t),se.current&&"touchstart"!==t.type||(oe&&oe.removeAttribute("title"),clearTimeout(ue.current),clearTimeout(pe.current),L||S&&I?(t.persist(),ue.current=setTimeout((function(){Oe(t)}),S?I:L)):Oe(t))}},je=Object(T.a)(),Te=je.isFocusVisible,we=je.onBlurVisible,xe=je.ref,Ee=p.useState(!1),Se=Ee[0],ke=Ee[1],Pe=function(){Se&&(ke(!1),we())},Ce=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(t){oe||re(t.currentTarget),Te(t)&&(ke(!0),ye()(t));var n=r.props;n.onFocus&&e&&n.onFocus(t)}},Le=function(e){clearTimeout(k),k=setTimeout((function(){S=!1}),800+_),ge(!1),G&&G(e),clearTimeout(le.current),le.current=setTimeout((function(){se.current=!1}),te.transitions.duration.shortest)},Be=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(t){var n=r.props;"blur"===t.type&&(n.onBlur&&e&&n.onBlur(t),Pe()),"mouseleave"===t.type&&n.onMouseLeave&&t.currentTarget===oe&&n.onMouseLeave(t),clearTimeout(ue.current),clearTimeout(pe.current),t.persist(),pe.current=setTimeout((function(){Le(t)}),_)}},Ie=function(e){se.current=!0;var t=r.props;t.onTouchStart&&t.onTouchStart(e)},Me=Object(y.a)(re,t),Ne=Object(y.a)(xe,Me),De=p.useCallback((function(e){Object(j.a)(Ne,d.findDOMNode(e))}),[Ne]),Re=Object(y.a)(r.ref,De);""===K&&(he=!1);var Fe=!he&&!g,Ae=Object(c.a)({"aria-describedby":he?ve:null,title:Fe&&"string"==typeof K?K:null},ee,r.props,{className:Object(f.a)(ee.className,r.props.className),onTouchStart:Ie,ref:Re}),_e={};P||(Ae.onTouchStart=function(e){Ie(e),clearTimeout(pe.current),clearTimeout(le.current),clearTimeout(me.current),e.persist(),me.current=setTimeout((function(){ye()(e)}),N)},Ae.onTouchEnd=function(e){r.props.onTouchEnd&&r.props.onTouchEnd(e),clearTimeout(me.current),clearTimeout(pe.current),e.persist(),pe.current=setTimeout((function(){Le(e)}),z)}),g||(Ae.onMouseOver=ye(),Ae.onMouseLeave=Be(),F&&(_e.onMouseOver=ye(!1),_e.onMouseLeave=Be(!1))),u||(Ae.onFocus=Ce(),Ae.onBlur=Be(),F&&(_e.onFocus=Ce(!1),_e.onBlur=Be(!1)));var qe=p.useMemo((function(){return Object(b.a)({popperOptions:{modifiers:{arrow:{enabled:Boolean(ie),element:ie}}}},X)}),[ie,X]);return p.createElement(p.Fragment,null,p.cloneElement(r,Ae),p.createElement(U,Object(c.a)({className:Object(f.a)(a.popper,F&&a.popperInteractive,o&&a.popperArrow),placement:$,anchorEl:oe,open:!!oe&&he,id:Ae["aria-describedby"],transition:!0},_e,qe),(function(e){var t=e.placement,n=e.TransitionProps;return p.createElement(Y,Object(c.a)({timeout:te.transitions.duration.shorter},n,Z),p.createElement("div",{className:Object(f.a)(a.tooltip,a["tooltipPlacement".concat(Object(h.a)(t.split("-")[0]))],se.current&&a.touch,o&&a.tooltipArrow)},K,o?p.createElement("span",{className:a.arrow,ref:ce}):null))})))})),C=Object(g.a)((function(e){return{popper:{zIndex:e.zIndex.tooltip,pointerEvents:"none"},popperInteractive:{pointerEvents:"auto"},popperArrow:{'&[x-placement*="bottom"] $arrow':{top:0,left:0,marginTop:"-0.71em",marginLeft:4,marginRight:4,"&::before":{transformOrigin:"0 100%"}},'&[x-placement*="top"] $arrow':{bottom:0,left:0,marginBottom:"-0.71em",marginLeft:4,marginRight:4,"&::before":{transformOrigin:"100% 0"}},'&[x-placement*="right"] $arrow':{left:0,marginLeft:"-0.71em",height:"1em",width:"0.71em",marginTop:4,marginBottom:4,"&::before":{transformOrigin:"100% 100%"}},'&[x-placement*="left"] $arrow':{right:0,marginRight:"-0.71em",height:"1em",width:"0.71em",marginTop:4,marginBottom:4,"&::before":{transformOrigin:"0 0"}}},tooltip:{backgroundColor:Object(i.c)(e.palette.grey[700],.9),borderRadius:e.shape.borderRadius,color:e.palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(10),lineHeight:"".concat(E(1.4),"em"),maxWidth:300,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},tooltipArrow:{position:"relative",margin:"0"},arrow:{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:Object(i.c)(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}},touch:{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:"".concat(E(16/14),"em"),fontWeight:e.typography.fontWeightRegular},tooltipPlacementLeft:Object(u.a)({transformOrigin:"right center",margin:"0 24px "},e.breakpoints.up("sm"),{margin:"0 14px"}),tooltipPlacementRight:Object(u.a)({transformOrigin:"left center",margin:"0 24px"},e.breakpoints.up("sm"),{margin:"0 14px"}),tooltipPlacementTop:Object(u.a)({transformOrigin:"center bottom",margin:"24px 0"},e.breakpoints.up("sm"),{margin:"14px 0"}),tooltipPlacementBottom:Object(u.a)({transformOrigin:"center top",margin:"24px 0"},e.breakpoints.up("sm"),{margin:"14px 0"})}}),{name:"MuiTooltip",flip:!1})(P),L=n("1j+C"),B=n("/TFN"),I=n("t3i7"),M=n("vOnD"),N=n("5oGM"),D=Object(a.a)(M.c.video.withConfig({displayName:"BackgroundVideo__StyledVideo",componentId:"xexv9l-0"})(["height:100%;width:100%;position:absolute;z-index:-1;",";"],"filter: saturate(0.7) contrast(1.01)")),R=Object(a.a)(Object(M.c)(r.a).withConfig({displayName:"BackgroundVideo__StyledBox",componentId:"xexv9l-1"})(["",";"],(function(e){var t=e.theme;return"\nopacity: 0;\ntransition: "+t.transitions.create("opacity",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})+";\n\n&:hover {\n  opacity: 1;\n}\n"}))),F=Object(a.a)(Object(M.c)(m.a.forwardRef((function(e,t){e.offset;var n=Object(o.a)(e,["offset"]);return m.a.createElement(r.a,Object.assign({},n,{ref:t}))}))).withConfig({displayName:"BackgroundVideo__StyledIconButton",componentId:"xexv9l-2"})(["",""],(function(e){var t=e.offset,n=e.theme;return"\n      transform: translate("+(t instanceof Array?t[0]:t||0)+", "+(t instanceof Array?t[1]:0)+");\n      border-radius: 16px;\n      padding: "+Object(I.a)(n.spacing(2))+";\n      background-color: "+Object(i.c)(n.palette.background.paper,.6)+";\n\n      &:hover {\n        background-color: "+Object(i.c)(n.palette.background.paper,.8)+";\n      }\n    "})));t.a=function(e){var t=e.children,n=e.fit,a=void 0===n?"contain":n,i=e.overlayOffset,c=(e.title,e.src),s=e.poster,l=e.type,u=void 0===l?"video/mp4":l,d=Object(o.a)(e,["children","fit","overlayOffset","title","src","poster","type"]),f=Object(B.a)().t,b=Object(L.b)(),g=b.appState.videos.allPaused,h=b.setAppState,v=m.a.useRef();Object(p.useMemo)((function(){var e,t;g?null===(e=v.current)||void 0===e||e.pause():null===(t=v.current)||void 0===t||t.play()}),[g]);var O=m.a.useCallback((function(){h(!g,"videos.allPaused")}),[g,h]),y=Object(p.useMemo)((function(){return f(g?"main.video.play":"main.video.pause")}),[g,f]);return m.a.createElement(r.a,Object.assign({height:1,width:1,position:"relative",overflow:"hidden"},d,{onClick:O}),m.a.createElement(D,{controls:!1,loop:!0,autoPlay:!g,muted:!0,poster:s||"",ref:v,style:{objectFit:a}},m.a.createElement("source",{src:c,type:u}),t),m.a.createElement(R,{height:1,display:"flex",alignItems:"center",justifyContent:"center"},m.a.createElement(C,{title:y,"aria-label":y,arrow:!0},m.a.createElement(F,{offset:i},g?m.a.createElement(N.l,null):m.a.createElement(N.k,null)))))}},nOiD:function(e,t,n){e.exports=n.p+"static/Subscription-bb4f6d05c7ec85af87a1770feafad4c7.mp4"}}]);
//# sourceMappingURL=706b9854431fef9dc3ad3635d673759d3e9c3f66-dc95fddc1c6689d85f25.js.map