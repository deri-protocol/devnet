(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[33],{1393:function(e,a,t){"use strict";var c,n,i=t(23),s=t(321),l=t(63),d=t(9),r=t(69),o=t(7),j=(t(79),t(1435)),b=t(54),u=t(21),v=t(18),h=t(4),m=["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"],O=Object(b.a)(j.a)(c||(c=Object(r.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),x=b.a.span(n||(n=Object(r.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));a.a=function(e){var a=Object(o.useState)(Object(h.jsx)("span",{className:"loading-line"})),t=Object(d.a)(a,2),c=t[0],n=t[1],r=Object(o.useState)(!0),j=Object(d.a)(r,2),b=j[0],f=j[1],p=function(){var a=e.allowZero;return"object"!==Object(l.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===a},N=function(e){return e&&e.replace(/\.$/,"")};return Object(o.useEffect)((function(){var a=e.allowZero,t=(e.wallet,e.closeShowLoadingEffectAfterLoaded),c=e.defaultValue,l=void 0===c?"--":c,d=Object(s.a)(e,m);if(p())d.decimalScale>0&&d.value&&/\d+\.0*[1-9]+/.test(d.value)&&!a&&0===+Object(v.bg)(d.value).toFixed(+d.decimalScale||2)&&(d.decimalScale=Object(u.g)(Math.abs(d.value))+2),(-1===d.decimalScale||0===+d.value&&a)&&delete d.decimalScale,d.value=/e(\+|=)?/.test(d.value)?Object(u.M)(d.value):""+d.value,d.value&&/\d+.9{6}/.test(d.value)&&(d.value=(+d.value).toFixed(5)),n(Object(h.jsx)(O,Object(i.a)(Object(i.a)({},d),{},{renderText:N,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(b){var r=e.width,o=e.height;n(Object(h.jsx)(x,{className:"loading-line",width:r,height:o})),t&&f(!1)}var j=window.setTimeout((function(){p()||n(l)}),l===d.value?0:6e4);return function(){clearTimeout(j)}}),[e.value,e.decimalScale,e.suffix]),c}},2379:function(e,a,t){},2592:function(e,a,t){"use strict";t.r(a);var c=t(69),n=t(2),i=t(9),s=t(0),l=t.n(s),d=t(7),r=t(55),o=t(73),j=t.n(o),b=t(1393),u=(t(2379),t(27)),v=t(247),h=new(0,t(247).GraphQLClient)("https://graph.deri.io/graphql",{});function m(e,a){return h.request(e,a)}var O,x,f=t(21),p=t(147),N=t(4);a.default=Object(r.b)("wallet")(Object(r.c)((function(){var e=Object(d.useState)([]),a=Object(i.a)(e,2),t=a[0],s=a[1],r=Object(d.useState)(30),o=Object(i.a)(r,2),h=o[0],g=o[1],w=Object(d.useState)(30),S=Object(i.a)(w,2),k=S[0],y=S[1],T=Object(d.useState)({}),$=Object(i.a)(T,2),I=$[0],L=$[1],P=Object(p.b)().account,C=Object(d.useCallback)(Object(n.a)(l.a.mark((function e(){var a,t,n,i,d,r,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(v.gql)(O||(O=Object(c.a)(["\n      query ($chainId: Int!, $fromTimestamp: Int!) {\n        tradePnl(where: { chainId: $chainId, fromTimestamp: $fromTimestamp }) {\n          account\n          chainId\n          liquidationLoss\n          notional\n          pnl\n          tradeFee\n          tradePnl\n        }\n      }\n    "]))),t=0,n=new Date,i=n.getTime()/1e3,7===k&&(t=i-604800),30===k&&(t=i-2592e3),d={chainId:42161,fromTimestamp:parseInt(String(t))},e.next=9,m(a,d);case 9:(r=e.sent).tradePnl.length&&(o=(o=r.tradePnl).slice(0,50),s(o));case 11:case"end":return e.stop()}}),e)}))),[k]),F=Object(d.useCallback)(Object(n.a)(l.a.mark((function e(){var a,t,n,i,s,d,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(v.gql)(x||(x=Object(c.a)(["\n      query ($chainId: Int!, $fromTimestamp: Int!, $account: String) {\n        tradePnl(\n          where: {\n            account: $account\n            chainId: $chainId\n            fromTimestamp: $fromTimestamp\n          }\n        ) {\n          account\n          chainId\n          liquidationLoss\n          notional\n          pnl\n          tradeFee\n          tradePnl\n        }\n      }\n    "]))),t=0,n=new Date,i=n.getTime()/1e3,7===h&&(t=i-604800),30===h&&(t=i-2592e3),s={account:P,chainId:56,fromTimestamp:parseInt(String(t))},e.next=9,m(a,s);case 9:(d=e.sent).tradePnl.length?(r=d.tradePnl[0],L(r)):L({tradeFee:0,pnl:0,notional:0});case 11:case"end":return e.stop()}}),e)}))),[h,P]);return Object(d.useEffect)((function(){C()}),[k]),Object(d.useEffect)((function(){P&&F()}),[P,h]),Object(N.jsx)("div",{className:"Leaderboard",children:Object(N.jsxs)("div",{className:"Leaderboard-box",children:[Object(N.jsxs)("div",{className:"my-historical-trading",children:[Object(N.jsxs)("div",{className:"title-tab-day",children:[Object(N.jsx)("div",{className:"title-leaderboard",children:"My Historical Trading Performance"}),Object(N.jsxs)("div",{className:"tab-day",children:[Object(N.jsx)("div",{className:j()("day-btn",{active:7===h}),onClick:function(){g(7)},children:"7 DAYS"}),Object(N.jsx)("div",{className:j()("day-btn",{active:30===h}),onClick:function(){g(30)},children:"30 DAYS"})]})]}),Object(N.jsxs)("div",{className:"my-info-list",children:[Object(N.jsxs)("div",{className:"info-box",children:[Object(N.jsxs)("div",{className:"info-num",children:[" ",Object(N.jsx)(b.a,{prefix:"$ ",value:I.notional,decimalScale:2})]}),Object(N.jsx)("div",{className:"info-title",children:" Notional "})]}),Object(N.jsxs)("div",{className:"info-box",children:[Object(N.jsx)("div",{className:"info-num",children:Object(N.jsx)(b.a,{prefix:"$ ",value:+I.tradeFee,decimalScale:2})}),Object(N.jsx)("div",{className:"info-title",children:" Transaction Fee "})]}),Object(N.jsxs)("div",{className:"info-box",children:[Object(N.jsxs)("div",{className:"info-num",children:[" ",Object(N.jsx)(b.a,{prefix:"$ ",value:+I.pnl,decimalScale:2})]}),Object(N.jsx)("div",{className:"info-title",children:" PNL "})]})]})]}),Object(N.jsxs)("div",{className:"rankings",children:[Object(N.jsxs)("div",{className:"rankings-title-tab-day",children:[Object(N.jsx)("div",{className:"rankings-title",children:"Rankings"}),Object(N.jsxs)("div",{className:"tab-day",children:[Object(N.jsx)("div",{className:j()("day-btn",{active:7===k}),onClick:function(){y(7)},children:"7 DAYS"}),Object(N.jsx)("div",{className:j()("day-btn",{active:30===k}),onClick:function(){y(30)},children:"30 DAYS"})]})]}),Object(N.jsxs)("div",{className:"rankings-list-title",children:[Object(N.jsx)("div",{className:"rank",children:"Rank"}),Object(N.jsx)("div",{className:"trade",children:"Trade"}),Object(N.jsx)("div",{className:"notional",children:"Notional"}),Object(N.jsx)("div",{className:"transaction-fee",children:"Transaction Fee"}),Object(N.jsx)("div",{className:"pnl",children:"PNL"})]}),Object(N.jsx)("div",{className:"rankings-list-num",children:t.map((function(e,a){return Object(N.jsxs)("div",{className:"rankings-list-num-box",children:[Object(N.jsxs)("div",{className:"rank",children:[a+1===1&&Object(N.jsx)(u.a,{token:"topOne",width:void 0,height:void 0,secondary:void 0,className:void 0,onClick:void 0}),a+1===2&&Object(N.jsx)(u.a,{token:"topTwo",width:void 0,height:void 0,secondary:void 0,className:void 0,onClick:void 0}),a+1===3&&Object(N.jsx)(u.a,{token:"topThree",width:void 0,height:void 0,secondary:void 0,className:void 0,onClick:void 0}),a+1>3&&Object(N.jsx)("span",{className:"top-num",children:a+1})]}),Object(N.jsx)("div",{className:"trade",children:Object(f.l)(e.account)}),Object(N.jsxs)("div",{className:"notional",children:["$"," ",Object(N.jsx)(b.a,{value:e.notional,displayType:"text",decimalScale:2})]}),Object(N.jsxs)("div",{className:"transaction-fee",children:["$"," ",Object(N.jsx)(b.a,{value:+e.tradeFee,displayType:"text",decimalScale:2})]}),Object(N.jsxs)("div",{className:j()("pnl",{up:+e.pnl>0,down:+e.pnl<0}),children:[+e.pnl>0?"+":"",Object(N.jsx)(b.a,{value:+e.pnl,displayType:"text",decimalScale:2,prefix:"$ "})]})]},a)}))})]})]})})})))}}]);
//# sourceMappingURL=33.5d088b63.chunk.js.map