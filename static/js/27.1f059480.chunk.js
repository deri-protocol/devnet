(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[27],{1392:function(e,t,a){"use strict";var c,n,s=a(53),i=a(322),l=a(65),r=a(9),o=a(64),d=a(8),j=(a(80),a(1426)),u=a(54),b=a(21),p=a(18),h=a(4),O=["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"],x=Object(u.a)(j.a)(c||(c=Object(o.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),v=u.a.span(n||(n=Object(o.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));t.a=function(e){var t=Object(d.useState)(Object(h.jsx)("span",{className:"loading-line"})),a=Object(r.a)(t,2),c=a[0],n=a[1],o=Object(d.useState)(!0),j=Object(r.a)(o,2),u=j[0],f=j[1],m=function(){var t=e.allowZero;return"object"!==Object(l.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},w=function(e){return e&&e.replace(/\.$/,"")};return Object(d.useEffect)((function(){var t=e.allowZero,a=(e.wallet,e.closeShowLoadingEffectAfterLoaded),c=e.defaultValue,l=void 0===c?"--":c,r=Object(i.a)(e,O);if(m())r.decimalScale>0&&r.value&&/\d+\.0*[1-9]+/.test(r.value)&&!t&&0===+Object(p.bg)(r.value).toFixed(+r.decimalScale||2)&&(r.decimalScale=Object(b.g)(Math.abs(r.value))+2),(-1===r.decimalScale||0===+r.value&&t)&&delete r.decimalScale,r.value=/e(\+|=)?/.test(r.value)?Object(b.M)(r.value):""+r.value,r.value&&/\d+.9{6}/.test(r.value)&&(r.value=(+r.value).toFixed(5)),n(Object(h.jsx)(x,Object(s.a)(Object(s.a)({},r),{},{renderText:w,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(u){var o=e.width,d=e.height;n(Object(h.jsx)(v,{className:"loading-line",width:o,height:d})),a&&f(!1)}var j=window.setTimeout((function(){m()||n(l)}),l===r.value?0:6e4);return function(){clearTimeout(j)}}),[e.value,e.decimalScale,e.suffix]),c}},1556:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var c=a(1577),n=a(1557),s=a.n(n),i=a(1575),l=(a(1474),a(26)),r=(a(1558),a(4));function o(e){var t=e.page,a=e.count,n=e.onPage,o=e.pageSize,d=e.onShowSizeChange;return Object(r.jsx)("div",{className:"pagination",children:Object(r.jsx)(c.a,{selectComponentClass:i.a,onChange:n,current:t,total:a,pageSize:o,prevIcon:function(){return Object(r.jsx)(l.a,{token:"arrow-left"})},nextIcon:function(){return Object(r.jsx)(l.a,{token:"arrow-right"})},showSizeChanger:!0,onShowSizeChange:d,locale:s.a,pageSizeOptions:["10","20","30","50"]})})}},1558:function(e,t,a){},2362:function(e,t,a){},2575:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(2),s=a(9),i=a(8),l=a(55),r=a(44),o=a(1392),d=a(246),j=a(21),u=(a(18),a(1555),a(1474),a.p+"static/media/logo-deri.d4c8b6a2.svg"),b=a(1556),p=(a(2362),a(4));t.default=Object(l.b)("wallet")(Object(l.c)((function(e){var t=e.lang,a=e.wallet,l=Object(i.useState)(),h=Object(s.a)(l,2),O=h[0],x=h[1],v=Object(i.useState)(1),f=Object(s.a)(v,2),m=f[0],w=f[1],g=Object(i.useState)([]),N=Object(s.a)(g,2),S=N[0],M=N[1],y=Object(i.useState)([]),C=Object(s.a)(y,2),E=C[0],k=C[1],z=function(){var e=Object(n.a)(Object(c.a)().mark((function e(){var t,n;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.request("getUserEarnInfo",[a.detail.account,2]);case 2:(t=e.sent)&&(n=Math.abs(t.pnl)<Math.pow(10,-10)?0:100*(t.pnl-1),x(n));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(n.a)(Object(c.a)().mark((function e(){var t,a;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.request("getEarnTop50Users",[2]);case 2:(t=e.sent)&&(a=t.map((function(e){return e.pnl=Math.abs(e.pnl)<Math.pow(10,-10)?0:100*(e.pnl-1),e.account=Object(j.l)(e.account),e})),M(a));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){var e;e=1===m?S.slice(0,10*m):S.slice(10*(m-1),10*m),k(e)}),[S,m]),Object(i.useEffect)((function(){a.isConnected()&&z(),T()}),[a.detail,a]),Object(p.jsxs)("div",{className:"testnet-practice",children:[Object(p.jsxs)("div",{className:"practice-info",children:[Object(p.jsx)("div",{className:"practice-title",children:t["practice-to-earn"]}),Object(p.jsx)("div",{className:"practice-time",children:"Mar. 1st 09:00 AM (UTC) \u2014 Mar. 8th 09:00 AM (UTC)"}),Object(p.jsxs)("div",{className:"practice-info-box",children:[Object(p.jsxs)("div",{className:"practice-info-left",children:[Object(p.jsx)("div",{className:"total-rewards-pool",children:Object(p.jsxs)("div",{className:"total-rewards-box",children:[Object(p.jsx)("div",{className:"deri-logo",children:Object(p.jsx)("img",{src:u,alt:"deri"})}),Object(p.jsxs)("div",{className:"total-rewards-num",children:[Object(p.jsx)("div",{className:"total-rewards-pool-title",children:t["total-rewards-pool"]}),Object(p.jsxs)("div",{className:"toatl-rewards-deri",children:[Object(p.jsx)("span",{children:"10,000"}),Object(p.jsx)("span",{className:"deri-text",children:"DERI"})]})]})]})}),Object(p.jsxs)("div",{className:"your-pnl",children:[Object(p.jsx)("span",{children:Object(p.jsx)(d.a,{text:t["your-pnl"],tip:t["your-pnl-tip"],multiline:!0})}),Object(p.jsx)("span",{className:"your-pnl-pen",children:Object(p.jsx)(o.a,{value:O,suffix:"%",decimalScale:2})})]})]}),Object(p.jsxs)("div",{className:"practice-info-right",children:[Object(p.jsxs)("div",{className:"top-pnl-list-box",children:[Object(p.jsx)("div",{className:"top-pnl-list-box-title",children:"Leaderboard"}),Object(p.jsxs)("div",{className:"top-pnl-list",children:[Object(p.jsxs)("div",{className:"top-pnl-list-title",children:[Object(p.jsx)("span",{children:t.no}),Object(p.jsx)("span",{children:t["user-addr"]}),Object(p.jsx)("span",{children:t.pnl})]}),Object(p.jsx)("div",{className:"top-pnl-list-info",children:E.map((function(e,t){return Object(p.jsxs)("div",{className:"top-pnl-list-info-box",children:[Object(p.jsx)("div",{className:"no",children:e.index}),Object(p.jsx)("div",{className:"address",children:e.account}),Object(p.jsx)("div",{className:"pnl",children:Object(p.jsx)(o.a,{value:e.pnl,suffix:"%",decimalScale:2})})]},t)}))})]})]}),Object(p.jsxs)("div",{className:"page-box",children:[Object(p.jsx)(b.a,{page:m,onPage:function(e){w(e)},count:S.length,pageSize:10}),Object(p.jsxs)("div",{className:"remind",children:["* ",t["update-every-hour"]]})]})]})]})]}),Object(p.jsx)("div",{className:"detailed-rules",children:Object(p.jsx)("a",{target:"_blank",href:"https://theontoteam.medium.com/1b958bc5228a",rel:"noreferrer",children:t["detailed-rules"]})})]})})))}}]);
//# sourceMappingURL=27.1f059480.chunk.js.map