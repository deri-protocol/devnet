(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[7],{1205:function(e,t,a){"use strict";var n=a(4),s=(a(63),a(1250)),c=a(50),i=a(17),o=a(10),r=a(2);const l=Object(c.a)(s.a)`
  width : ${e=>e.width}px;
`,d=c.a.div`
  width : ${e=>/px$/.test(e.width)?e.width:`${e.width}px`};
  height : ${e=>/px$/.test(e.height)?e.height:`${e.height}px`};
`;t.a=function(e){const[t,a]=Object(n.useState)(Object(r.jsx)("span",{className:"loading-line"})),[s,c]=Object(n.useState)(!0),b=()=>{const{allowZero:t}=e;return"object"!==typeof e.value&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},j=e=>e&&e.replace(/\.$/,"");return Object(n.useEffect)((()=>{const{allowZero:t,wallet:n,closeShowLoadingEffectAfterLoaded:u,defaultValue:v="--",...x}=e;if(b())x.decimalScale>0&&!t&&x.value&&/\d+\.0*[1-9]+/.test(x.value)&&0===+Object(o.bg)(x.value).toFixed(+x.decimalScale||2)&&(x.decimalScale=Object(i.d)(Math.abs(x.value))+2),-1===x.decimalScale&&delete x.decimalScale,x.value=Object(i.J)(x.value),x.value&&/\d+.9{6}/.test(x.value)&&(x.value=(+x.value).toFixed(5)),a(Object(r.jsx)(l,{...x,renderText:j,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0}));else if(s){const{width:t,height:n}=e;a(Object(r.jsx)(d,{className:"loading-line",width:t,height:n})),u&&c(!1)}const m=window.setTimeout((()=>{b()||a(v)}),6e4);return()=>{clearTimeout(m)}}),[e.value,e.decimalScale,e.suffix]),t}},1378:function(e,t,a){"use strict";t.a=a.p+"static/media/staked.45c27f0b.svg"},1616:function(e,t,a){},1719:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));var n,s,c=a(187),i=a(9),o=a(22),r=a(5),l=a.n(r),d=a(4),b=a(55),j=a(1205),u=a(164),v=a(452),x=a(453),m=a(450),p=a(1378),h=a(454),f=a(59),O=a.n(f),g=a.p+"static/media/close.7f6b23a4.svg",k=(a(1951),a(50)),N=a(2);function y(e){var t=e.lang,a=e.pool,n=e.wallet,s=Object(b.g)(),c=Object(d.useState)({}),r=Object(o.a)(c,2),f=r[0],k=r[1],y=Object(d.useState)(!1),w=Object(o.a)(y,2),S=w[0],_=w[1],F=Object(d.useState)(),X=Object(o.a)(F,2),z=X[0],D=X[1],L=Object(d.useState)(!0),$=Object(o.a)(L,2),U=$[0],C=$[1],E=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k({}),e.next=3,a.getPoolInfo(n,a);case 3:t=e.sent,k(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a||"v3"!==a.version&&"v3_lite"!==a.version){e.next=5;break}return e.next=3,a.getVenusEarned(n,a.address);case 3:t=e.sent,D(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getIsStaked(n,a);case 2:(t=e.sent)&&_(t.isStaked);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(e){e.target.src=h.default};Object(d.useEffect)((function(){E(),n.isConnected()&&(q(),I())}),[a,n.detail.account]),Object(d.useEffect)((function(){var e=sessionStorage.getItem(a.address);null!==e&&e&&C(!1)}),[a]);var B="/pool/".concat(a.version||"v1","/").concat(a.chainId,"/").concat(a.type,"/").concat(a.address);return Object(N.jsxs)("div",{className:"card-box",children:[Object(N.jsxs)("div",{className:"v2_lite_open"===a.version?"card-list open-list":"card-list",onClick:function(){!function(e){"v2_lite_open"!==a.version&&s.push(e)}(B)},children:[Object(N.jsxs)("div",{className:O()("card-header",{v3:a.isAllV3}),children:[Object(N.jsxs)("div",{className:"pool-network-type",children:[Object(N.jsx)("div",{className:"network-logo",children:Object(N.jsx)("img",{alt:"",src:function(e){var t;return"56"===e||"97"===e?t=v.default:"137"===e?t=x.default:"1"===e&&(t=m.default),t}(a.chainId)})}),Object(N.jsxs)("div",{className:"pool-type-network-text",children:[Object(N.jsxs)("div",{className:"pool-type-text",children:["0xD2D950e338478eF7FeB092F840920B3482FcaC40"!==a.address&&Object(N.jsxs)(N.Fragment,{children:[t[a.type]," ",t[a.zone]]}),"0xD2D950e338478eF7FeB092F840920B3482FcaC40"===a.address&&Object(N.jsx)(N.Fragment,{children:t[a.zone]})]}),Object(N.jsx)("div",{className:"pool-network-text",children:a.chain.toUpperCase()})]})]}),Object(N.jsxs)("div",{className:"base-token-logo",children:[a.isLp&&Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"lp-base-token-bg",children:[Object(N.jsx)("div",{className:"base-token-bg ".concat(a.bTokens[0].bTokenSymbol)}),Object(N.jsx)("span",{className:"lp-con",children:"+"}),Object(N.jsx)("div",{className:"base-token-bg ".concat(a.bTokens[1].bTokenSymbol)})]})}),!a.isLp&&"v3"!==a.version&&"v3_lite"!==a.version&&Object(N.jsx)(N.Fragment,{children:a.bTokens.map((function(e,t){return Object(N.jsx)("div",{className:"base-token-box-bg",children:Object(N.jsx)("div",{className:"base-token-bg ".concat(e.bTokenSymbol),children:"v2_lite_open"===a.version&&Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("img",{alt:"",onError:A,src:"https://raw.githubusercontent.com/deri-finance/deri-open-zone/main/img/".concat(e.bTokenSymbol,".png")})})})},t)}))}),("v3"===a.version||"v3_lite"===a.version)&&Object(N.jsx)(T,{bTokens:a.bTokens})]})]}),Object(N.jsxs)("div",{className:"card-content",children:[Object(N.jsx)("div",{className:"max-apy",children:"v2_lite_open"!==a.version&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("div",{className:"max-apy-title",children:"v2"===a.version||"v3_lite"===a.version||"v3"===a.version?t["max-apy"]:t.apy}),Object(N.jsx)("div",{className:"max-apy-num",children:Object(N.jsx)(j.a,{value:f.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2})})]})}),Object(N.jsxs)("div",{className:"total-pool-liquidity",children:[Object(N.jsx)("div",{className:"total-liquidity-title",children:t["total-pool-liquidity"]}),Object(N.jsx)("div",{className:"total-liquidity-num",children:Object(N.jsx)(j.a,{value:f.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:"lp"===a.type?7:0})})]}),Object(N.jsxs)("div",{className:"your-deri-epoch",children:[S&&Object(N.jsxs)("div",{className:"staked-box",children:[Object(N.jsx)("img",{src:p.a,alt:""}),t.staked]}),+z>0&&("v3"===a.version||"v3_lite"===a.version)&&Object(N.jsx)("span",{className:"xvs-collectable",children:Object(N.jsxs)("div",{className:"staked-box",children:[Object(N.jsx)(j.a,{width:"50px",value:z,displayType:"text",thousandSeparator:!0,decimalScale:2})," \xa0 XVS  ",t.collectable]})})]}),Object(N.jsx)("div",{className:"stake-button",children:Object(N.jsx)(u.a,{disabled:"v2_lite_open"===a.version,className:"button",outline:!0,label:"v2_lite_open"===a.version?t.operating:t.stake})})]})]}),"v3_lite"===a.version&&U&&Object(N.jsxs)("div",{className:"new-symbol",children:[Object(N.jsxs)("div",{className:"new-symbol-text",children:["New Listing : ",Object(N.jsx)("a",{href:"https://deri.io/#/trade/futures/SOLUSDT",target:"_blank",children:"SOLUSDT"})," ",Object(N.jsx)("a",{href:"https://deri.io/#/trade/futures/LUNAUSDT",target:"_blank",children:"LUNAUSDT"})]}),Object(N.jsx)("div",{className:"close-symbol",children:Object(N.jsx)("img",{src:g,alt:"close",onClick:function(){return e=a.address,sessionStorage.setItem(e,!1),void C(!1);var e}})})]})]})}var w=k.a.div(n||(n=Object(c.a)(["\n  @-webkit-keyframes explode {\n    0% {\n        transform: translateX(0px);\n        -moz-transform : translateX(0px);\n    }\n    100% {\n        transform: translateX(100px);\n        -moz-transform : translateX(100px);\n    }\n  }\n\n  @keyframes explode {\n    0% {\n        transform: translateX(0px);\n        -moz-transform : translateX(0px);\n    }\n    100% {\n        transform: translateX(100px);\n        -moz-transform : translateX(100px);\n    }\n  }\n  .base-token{\n    margin-left: 0px!important;\n    z-index : -2;\n    visibility: hidden;\n    background-color: #111e34;\n    border : 1px solid #fff;\n  }\n  @media only screen and (max-width: 760px) {\n    .base-token{\n      display:none;\n    }\n  }\n  .base-token-box-bg.explode:hover .move  {\n    -webkit-animation : explode .4s .0s linear;\n    -moz-animation :  explode .4s .0s linear;\n    animation: explode .4s .0s linear;\n    // transform : translateX(100px)!important;\n    visibility: visible;    \n  }\n  \n  .base-token-box-bg.explode:hover .base-token {\n    z-index : 2!important;\n  } \n\n"]))),S=k.a.div(s||(s=Object(c.a)(["\n  position: absolute;\n  transform : ",";\n  width: 48px;\n  height: 48px;\n  display: inline-block;\n  border-radius: 50%;\n  .move {\n    transform : translateX(100px) ",";\n  }\n"])),(function(e){return"rotate(".concat(-e.rotate,"deg)")}),(function(e){return"rotate(".concat(e.rotate,"deg) !important")})),T=function(e){var t=e.bTokens,a=void 0===t?[]:t,n=360/a.length;return Object(N.jsxs)(w,{className:"v3-tokens",children:[Object(N.jsx)("div",{className:"tokens",children:a.filter((function(e,t){return t<3})).map((function(e,t){return Object(N.jsx)("div",{className:"base-token-box-bg",children:Object(N.jsx)("div",{className:"base-token-bg ".concat(e.bTokenSymbol)})},t)}))}),Object(N.jsxs)("div",{className:"base-token-box-bg explode",children:[Object(N.jsxs)("div",{className:"base-token-bg",children:[a.length-3," +"]}),a.map((function(e,t){var a=n*t;return Object(N.jsx)(S,{className:"base-token",rotate:a,width:"100",children:Object(N.jsx)("div",{width:"100",rotate:a,className:"base-token-bg move ".concat(e.bTokenSymbol)})},t)}))]})]})}},1951:function(e,t,a){}}]);
//# sourceMappingURL=7.17096521.chunk.js.map