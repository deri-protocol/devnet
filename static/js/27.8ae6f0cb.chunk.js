(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[27],{1390:function(e,t,a){"use strict";var c,n,s=a(22),i=a(321),l=a(61),r=a(9),o=a(68),d=a(8),u=(a(78),a(1432)),j=a(53),b=a(20),p=a(17),h=a(4),O=["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"],x=Object(j.a)(u.a)(c||(c=Object(o.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),v=j.a.span(n||(n=Object(o.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));t.a=function(e){var t=Object(d.useState)(Object(h.jsx)("span",{className:"loading-line"})),a=Object(r.a)(t,2),c=a[0],n=a[1],o=Object(d.useState)(!0),u=Object(r.a)(o,2),j=u[0],f=u[1],m=function(){var t=e.allowZero;return"object"!==Object(l.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},w=function(e){return e&&e.replace(/\.$/,"")};return Object(d.useEffect)((function(){var t=e.allowZero,a=(e.wallet,e.closeShowLoadingEffectAfterLoaded),c=e.defaultValue,l=void 0===c?"--":c,r=Object(i.a)(e,O);if(m())r.decimalScale>0&&r.value&&/\d+\.0*[1-9]+/.test(r.value)&&!t&&0===+Object(p.bg)(r.value).toFixed(+r.decimalScale||2)&&(r.decimalScale=Object(b.g)(Math.abs(r.value))+2),(-1===r.decimalScale||0===+r.value&&t)&&delete r.decimalScale,r.value=/e(\+|=)?/.test(r.value)?Object(b.M)(r.value):""+r.value,r.value&&/\d+.9{6}/.test(r.value)&&(r.value=(+r.value).toFixed(5)),n(Object(h.jsx)(x,Object(s.a)(Object(s.a)({},r),{},{renderText:w,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(j){var o=e.width,d=e.height;n(Object(h.jsx)(v,{className:"loading-line",width:o,height:d})),a&&f(!1)}var u=window.setTimeout((function(){m()||n(l)}),l===r.value?0:6e4);return function(){clearTimeout(u)}}),[e.value,e.decimalScale,e.suffix]),c}},1563:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var c=a(1584),n=a(1564),s=a.n(n),i=a(1582),l=(a(1479),a(27)),r=(a(1565),a(4));function o(e){var t=e.page,a=e.count,n=e.onPage,o=e.pageSize,d=e.onShowSizeChange;return Object(r.jsx)("div",{className:"pagination",children:Object(r.jsx)(c.a,{selectComponentClass:i.a,onChange:n,current:t,total:a,pageSize:o,prevIcon:function(){return Object(r.jsx)(l.a,{token:"arrow-left"})},nextIcon:function(){return Object(r.jsx)(l.a,{token:"arrow-right"})},showSizeChanger:!0,onShowSizeChange:d,locale:s.a,pageSizeOptions:["10","20","30","50"]})})}},1565:function(e,t,a){},2368:function(e,t,a){},2581:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(2),i=a(9),l=a(8),r=a(54),o=a(45),d=a(1390),u=a(245),j=a(20),b=(a(17),a(1562),a(1479),a.p+"static/media/logo-deri.8af5c8cc.svg"),p=a(1563),h=(a(2368),a(4));t.default=Object(r.b)("wallet")(Object(r.c)((function(e){var t=e.lang,a=e.wallet,c=Object(l.useState)(),r=Object(i.a)(c,2),O=r[0],x=r[1],v=Object(l.useState)(1),f=Object(i.a)(v,2),m=f[0],w=f[1],g=Object(l.useState)([]),N=Object(i.a)(g,2),S=N[0],M=N[1],y=Object(l.useState)([]),C=Object(i.a)(y,2),E=C[0],k=C[1],z=function(){var e=Object(s.a)(n.a.mark((function e(){var t,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.request("getUserEarnInfo",[a.detail.account,2]);case 2:(t=e.sent)&&(c=Math.abs(t.pnl)<Math.pow(10,-10)?0:100*(t.pnl-1),x(c));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(s.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.request("getEarnTop50Users",[2]);case 2:(t=e.sent)&&(a=t.map((function(e){return e.pnl=Math.abs(e.pnl)<Math.pow(10,-10)?0:100*(e.pnl-1),e.account=Object(j.l)(e.account),e})),M(a));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){var e;e=1===m?S.slice(0,10*m):S.slice(10*(m-1),10*m),k(e)}),[S,m]),Object(l.useEffect)((function(){a.isConnected()&&z(),T()}),[a.detail,a]),Object(h.jsxs)("div",{className:"testnet-practice",children:[Object(h.jsxs)("div",{className:"practice-info",children:[Object(h.jsx)("div",{className:"practice-title",children:t["practice-to-earn"]}),Object(h.jsx)("div",{className:"practice-time",children:"Mar. 1st 09:00 AM (UTC) \u2014 Mar. 8th 09:00 AM (UTC)"}),Object(h.jsxs)("div",{className:"practice-info-box",children:[Object(h.jsxs)("div",{className:"practice-info-left",children:[Object(h.jsx)("div",{className:"total-rewards-pool",children:Object(h.jsxs)("div",{className:"total-rewards-box",children:[Object(h.jsx)("div",{className:"deri-logo",children:Object(h.jsx)("img",{src:b,alt:"deri"})}),Object(h.jsxs)("div",{className:"total-rewards-num",children:[Object(h.jsx)("div",{className:"total-rewards-pool-title",children:t["total-rewards-pool"]}),Object(h.jsxs)("div",{className:"toatl-rewards-deri",children:[Object(h.jsx)("span",{children:"10,000"}),Object(h.jsx)("span",{className:"deri-text",children:"DERI"})]})]})]})}),Object(h.jsxs)("div",{className:"your-pnl",children:[Object(h.jsx)("span",{children:Object(h.jsx)(u.a,{text:t["your-pnl"],tip:t["your-pnl-tip"],multiline:!0})}),Object(h.jsx)("span",{className:"your-pnl-pen",children:Object(h.jsx)(d.a,{value:O,suffix:"%",decimalScale:2})})]})]}),Object(h.jsxs)("div",{className:"practice-info-right",children:[Object(h.jsxs)("div",{className:"top-pnl-list-box",children:[Object(h.jsx)("div",{className:"top-pnl-list-box-title",children:"Leaderboard"}),Object(h.jsxs)("div",{className:"top-pnl-list",children:[Object(h.jsxs)("div",{className:"top-pnl-list-title",children:[Object(h.jsx)("span",{children:t.no}),Object(h.jsx)("span",{children:t["user-addr"]}),Object(h.jsx)("span",{children:t.pnl})]}),Object(h.jsx)("div",{className:"top-pnl-list-info",children:E.map((function(e,t){return Object(h.jsxs)("div",{className:"top-pnl-list-info-box",children:[Object(h.jsx)("div",{className:"no",children:e.index}),Object(h.jsx)("div",{className:"address",children:e.account}),Object(h.jsx)("div",{className:"pnl",children:Object(h.jsx)(d.a,{value:e.pnl,suffix:"%",decimalScale:2})})]},t)}))})]})]}),Object(h.jsxs)("div",{className:"page-box",children:[Object(h.jsx)(p.a,{page:m,onPage:function(e){w(e)},count:S.length,pageSize:10}),Object(h.jsxs)("div",{className:"remind",children:["* ",t["update-every-hour"]]})]})]})]})]}),Object(h.jsx)("div",{className:"detailed-rules",children:Object(h.jsx)("a",{target:"_blank",href:"https://theontoteam.medium.com/1b958bc5228a",rel:"noreferrer",children:t["detailed-rules"]})})]})})))}}]);
//# sourceMappingURL=27.8ae6f0cb.chunk.js.map