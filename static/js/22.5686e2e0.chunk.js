(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[22],{1276:function(e,t,a){"use strict";var n,s,c=a(22),r=a(192),i=a(46),o=a(6),l=a(54),d=a(9),b=(a(68),a(1360)),u=a(53),j=a(20),p=a(15),v=a(4),x=["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"],m=Object(u.a)(b.a)(n||(n=Object(l.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),f=u.a.div(s||(s=Object(l.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));t.a=function(e){var t=Object(d.useState)(Object(v.jsx)("span",{className:"loading-line"})),a=Object(o.a)(t,2),n=a[0],s=a[1],l=Object(d.useState)(!0),b=Object(o.a)(l,2),u=b[0],h=b[1],O=function(){var t=e.allowZero;return"object"!==Object(i.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},g=function(e){return e&&e.replace(/\.$/,"")};return Object(d.useEffect)((function(){var t=e.allowZero,a=(e.wallet,e.closeShowLoadingEffectAfterLoaded),n=e.defaultValue,i=void 0===n?"--":n,o=Object(r.a)(e,x);if(O())o.decimalScale>0&&o.value&&/\d+\.0*[1-9]+/.test(o.value)&&0===+Object(p.bg)(o.value).toFixed(+o.decimalScale||2)&&(o.decimalScale=Object(j.d)(Math.abs(o.value))+2),(-1===o.decimalScale||0===+o.value&&t)&&delete o.decimalScale,o.value=Object(j.L)(o.value),o.value&&/\d+.9{6}/.test(o.value)&&(o.value=(+o.value).toFixed(5)),s(Object(v.jsx)(m,Object(c.a)(Object(c.a)({},o),{},{renderText:g,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(u){var l=e.width,d=e.height;s(Object(v.jsx)(f,{className:"loading-line",width:l,height:d})),a&&h(!1)}var b=window.setTimeout((function(){O()||s(i)}),6e4);return function(){clearTimeout(b)}}),[e.value,e.decimalScale,e.suffix]),n}},1571:function(e,t,a){"use strict";t.a=a.p+"static/media/staked.45c27f0b.svg"},1714:function(e,t,a){},1715:function(e,t,a){},1782:function(e,t,a){"use strict";a.d(t,"a",(function(){return k}));var n,s,c=a(54),r=a(2),i=a(6),o=a(0),l=a.n(o),d=a(9),b=a(59),u=a(1276),j=a(169),p=a(467),v=a(468),x=a(470),m=a(466),f=a(1571),h=a(472),O=(a(64),a.p,a(1714),a(53)),g=a(4);function k(e){var t=e.lang,a=e.pool,n=e.wallet,s=Object(b.g)(),c=Object(d.useState)({}),o=Object(i.a)(c,2),O=o[0],k=o[1],N=Object(d.useState)(!1),w=Object(i.a)(N,2),S=w[0],F=w[1],_=Object(d.useState)(),T=Object(i.a)(_,2),E=T[0],B=T[1],X=Object(d.useState)(!0),z=Object(i.a)(X,2),C=(z[0],z[1]),I=function(){var e=Object(r.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k({}),e.next=3,a.getPoolInfo(a.address,a.chainId);case 3:t=e.sent,k(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(r.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a||"v3"!==a.version&&"v3_lite"!==a.version){e.next=5;break}return e.next=3,a.getVenusEarned(n,a.address);case 3:t=e.sent,B(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(r.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getIsStaked(n,a);case 2:(t=e.sent)&&F(t.isStaked);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(e){e.target.src=h.default};Object(d.useEffect)((function(){I(),n.isConnected()&&(q(),L())}),[a,n.detail.account]),Object(d.useEffect)((function(){var e=sessionStorage.getItem(a.address);null!==e&&e&&C(!1)}),[a]);var M="/pool/".concat(a.version||"v1","/").concat(a.chainId,"/").concat(a.type,"/").concat(a.address);return Object(g.jsx)("div",{className:"".concat("0x243681B8Cd79E3823fF574e07B2378B8Ab292c1E"===a.address?"showGuide":""," card-box"),children:Object(g.jsxs)("div",{className:"v2_lite_open"===a.version?"card-list open-list":"card-list",onClick:function(){!function(e){"v2_lite_open"!==a.version&&s.push(e)}(M)},children:[Object(g.jsxs)("div",{className:"card-header ".concat(a.retired?a.version:""," ").concat(a.new?"new":""),children:[Object(g.jsxs)("div",{className:"pool-network-type",children:[Object(g.jsx)("div",{className:"network-logo",children:Object(g.jsx)("img",{alt:"",src:function(e){var t;return"56"===e||"97"===e?t=p.default:"137"===e?t=x.default:"1"===e?t=m.default:"42161"!==e&&"421611"!==e||(t=v.default),t}(a.chainId)})}),Object(g.jsxs)("div",{className:"pool-type-network-text",children:[Object(g.jsxs)("div",{className:"pool-type-text",children:["0xD2D950e338478eF7FeB092F840920B3482FcaC40"!==a.address&&Object(g.jsxs)(g.Fragment,{children:[t[a.type]," ",t[a.zone]]}),"0xD2D950e338478eF7FeB092F840920B3482FcaC40"===a.address&&Object(g.jsx)(g.Fragment,{children:t[a.zone]})]}),Object(g.jsx)("div",{className:"pool-network-text",children:"BSC"===a.chain.toUpperCase()?"BNB Chain":a.chain.toUpperCase()})]})]}),Object(g.jsxs)("div",{className:"base-token-logo",children:[a.isLp&&Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"lp-base-token-bg",children:[Object(g.jsx)("div",{className:"base-token-bg ".concat(a.bTokens[0].bTokenSymbol)}),Object(g.jsx)("span",{className:"lp-con",children:"+"}),Object(g.jsx)("div",{className:"base-token-bg ".concat(a.bTokens[1].bTokenSymbol)})]})}),!a.isLp&&"v3"!==a.version&&"v3_lite"!==a.version&&Object(g.jsx)(g.Fragment,{children:a.bTokens.map((function(e,t){return Object(g.jsx)("div",{className:"base-token-box-bg",children:Object(g.jsx)("div",{className:"base-token-bg ".concat(e.bTokenSymbol),children:"v2_lite_open"===a.version&&Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("img",{alt:"",onError:D,src:"https://raw.githubusercontent.com/deri-finance/deri-open-zone/main/img/".concat(e.bTokenSymbol,".png")})})})},t)}))}),("v3"===a.version||"v3_lite"===a.version)&&Object(g.jsx)(y,{bTokens:a.bTokens})]})]}),Object(g.jsxs)("div",{className:"card-content",children:[Object(g.jsx)("div",{className:"max-apy",children:"v2_lite_open"!==a.version&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:"max-apy-title",children:"v2"===a.version||"v3_lite"===a.version||"v3"===a.version?t["max-apy"]:t.apy}),Object(g.jsx)("div",{className:"max-apy-num",children:Object(g.jsx)(u.a,{value:O.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2})})]})}),Object(g.jsxs)("div",{className:"total-pool-liquidity",children:[Object(g.jsx)("div",{className:"total-liquidity-title",children:t["total-pool-liquidity"]}),Object(g.jsx)("div",{className:"total-liquidity-num",children:Object(g.jsx)(u.a,{value:O.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:"lp"===a.type?7:0})})]}),Object(g.jsxs)("div",{className:"your-deri-epoch",children:[S&&Object(g.jsxs)("div",{className:"staked-box",children:[Object(g.jsx)("img",{src:f.a,alt:""}),t.staked]}),+E>0&&("v3"===a.version||"v3_lite"===a.version)&&Object(g.jsx)("span",{className:"xvs-collectable",children:Object(g.jsxs)("div",{className:"staked-box",children:[Object(g.jsx)(u.a,{width:"50px",value:E,displayType:"text",thousandSeparator:!0,decimalScale:2})," \xa0 XVS  ",t.collectable]})})]}),Object(g.jsx)("div",{className:"stake-button",children:Object(g.jsx)(j.a,{disabled:"v2_lite_open"===a.version,className:"button",outline:!0,label:"v2_lite_open"===a.version?t.operating:t.stake})})]})]})})}var N=O.a.div(n||(n=Object(c.a)(["\n  @-webkit-keyframes explode {\n    0% {\n        transform: translateX(0px);\n        -moz-transform : translateX(0px);\n    }\n    100% {\n        transform: translateX(100px);\n        -moz-transform : translateX(100px);\n    }\n  }\n\n  @keyframes explode {\n    0% {\n        transform: translateX(0px);\n        -moz-transform : translateX(0px);\n    }\n    100% {\n        transform: translateX(100px);\n        -moz-transform : translateX(100px);\n    }\n  }\n  .base-token{\n    margin-left: 0px!important;\n    z-index : -2;\n    visibility: hidden;\n    background-color: #111e34;\n    border : 1px solid #fff;\n  }\n  @media only screen and (max-width: 760px) {\n    .base-token{\n      display:none;\n    }\n  }\n  .base-token-box-bg.explode:hover .move  {\n    -webkit-animation : explode .4s .0s linear;\n    -moz-animation :  explode .4s .0s linear;\n    animation: explode .4s .0s linear;\n    // transform : translateX(100px)!important;\n    visibility: visible;    \n  }\n  \n  .base-token-box-bg.explode:hover .base-token {\n    z-index : 2!important;\n  } \n\n"]))),w=O.a.div(s||(s=Object(c.a)(["\n  position: absolute;\n  transform : ",";\n  width: 48px;\n  height: 48px;\n  display: inline-block;\n  border-radius: 50%;\n  .move {\n    transform : translateX(100px) ",";\n  }\n"])),(function(e){return"rotate(".concat(-e.rotate,"deg)")}),(function(e){return"rotate(".concat(e.rotate,"deg) !important")})),y=function(e){var t=e.bTokens,a=void 0===t?[]:t,n=360/a.length;return Object(g.jsxs)(N,{className:"v3-tokens",children:[Object(g.jsx)("div",{className:"tokens",children:a.filter((function(e,t){return t<3})).map((function(e,t){return Object(g.jsx)("div",{className:"base-token-box-bg",children:Object(g.jsx)("div",{className:"base-token-bg ".concat(e.bTokenSymbol)})},t)}))}),Object(g.jsxs)("div",{className:"base-token-box-bg explode",children:[Object(g.jsxs)("div",{className:"base-token-bg",children:[a.length-3," +"]}),a.map((function(e,t){var a=n*t;return Object(g.jsx)(w,{className:"base-token",rotate:a,width:"100",children:Object(g.jsx)("div",{width:"100",rotate:a,className:"base-token-bg move ".concat(e.bTokenSymbol)})},t)}))]})]})}},2130:function(e,t,a){},2399:function(e,t,a){"use strict";a.r(t);var n=a(21),s=a(2),c=a(6),r=a(0),i=a.n(r),o=a(9),l=a(45),d=a(1782),b=a(39),u=(a(298),a(1715),a(2130),a(4));t.default=Object(l.b)("wallet","poolManager")(Object(l.c)((function(e){var t=e.lang,a=e.wallet,r=void 0===a?{}:a,l=e.poolManager,j=Object(o.useState)("amm"),p=Object(c.a)(j,2),v=p[0],x=(p[1],Object(o.useState)(!1)),m=Object(c.a)(x,2),f=m[0],h=(m[1],Object(o.useState)(t["deri-pool-title"])),O=Object(c.a)(h,2),g=O[0],k=O[1],N=Object(o.useState)([]),w=Object(c.a)(N,2),y=w[0],S=w[1],F=Object(o.useState)(!1),_=Object(c.a)(F,2),T=(_[0],_[1],Object(o.useState)([])),E=Object(c.a)(T,2),B=(E[0],E[1]),X=Object(o.useState)([]),z=Object(c.a)(X,2),C=(z[0],z[1]),I=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[].concat(Object(n.a)(l.ammPools),Object(n.a)(l.lpPools)),e.next=3,Promise.all(t.map(function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[t.chainId,t.address,r.detail.account],e.next=3,b.a.request("getUserStakeInfo",a);case 3:if(!e.sent.isStaked){e.next=8;break}return e.abrupt("return",t);case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:a=(a=e.sent).filter((function(e){return e})),c=a.filter((function(e){return"lp"!==e.type})),o=a.filter((function(e){return"lp"===e.type})),B(c),C(o);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){r.isConnected()&&I()}),[r.detail,l,v]),Object(o.useEffect)((function(){k(f?t["open-pool-title"]:t["deri-pool-title"])}),[f]),Object(o.useEffect)((function(){l.load()}),[]),Object(o.useEffect)((function(){S(l.retiredPools)}),[l.pools]),Object(u.jsx)("div",{className:"pool-box",children:Object(u.jsx)("div",{className:"pool-info",children:Object(u.jsxs)("div",{className:"left",children:[Object(u.jsx)("div",{className:"left-header-info",children:Object(u.jsxs)("div",{className:"pool-title",children:[Object(u.jsx)("div",{className:"pool-title-text",children:g}),Object(u.jsxs)("div",{className:"pool-title-select-text",children:[!f&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"pool-test-des",children:t["pool-title-des-one"]}),Object(u.jsx)("div",{className:"pool-test-des",children:t["pool-title-des-two"]})]}),f&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"pool-test-des",children:t["open-pool-title-des-one"]}),Object(u.jsx)("div",{className:"pool-test-des",children:t["open-pool-title-des-two"]})]})]})]})}),Object(u.jsxs)("div",{className:"pool-card-claim-bg",children:[Object(u.jsx)("div",{className:"retired-hint",children:Object(u.jsxs)("div",{children:["Several V3 ( ",Object(u.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://deri.io/#/retired/trade/futures",children:"Fut Main"})," ) and V2 markets ( ",Object(u.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://deri.io/#/retired/trade/options",children:"Options"})," , ",Object(u.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://deri.io/#/retired/trade/futures",children:"Fut Main & Fut Inno-BUSD "})," pools) are no longer supported, please close position and remove your collaterals."]})}),Object(u.jsx)("div",{className:"pool-card",children:y.map((function(e,a){return Object(u.jsx)(d.a,{wallet:r,lang:t,pool:e},a)}))}),Object(u.jsx)("div",{className:!0})]})]})})})})))}}]);
//# sourceMappingURL=22.5686e2e0.chunk.js.map