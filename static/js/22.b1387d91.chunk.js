(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[22],{1239:function(e,t,a){"use strict";var s,n,c=a(63),i=a(192),l=a(56),r=a(14),o=a(62),d=a(6),b=(a(69),a(1309)),j=a(51),u=a(20),p=a(16),x=a(5),m=["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"],v=Object(j.a)(b.a)(s||(s=Object(o.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),h=j.a.div(n||(n=Object(o.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));t.a=function(e){var t=Object(d.useState)(Object(x.jsx)("span",{className:"loading-line"})),a=Object(r.a)(t,2),s=a[0],n=a[1],o=Object(d.useState)(!0),b=Object(r.a)(o,2),j=b[0],O=b[1],f=function(){var t=e.allowZero;return"object"!==Object(l.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},g=function(e){return e&&e.replace(/\.$/,"")};return Object(d.useEffect)((function(){var t=e.allowZero,a=(e.wallet,e.closeShowLoadingEffectAfterLoaded),s=e.defaultValue,l=void 0===s?"--":s,r=Object(i.a)(e,m);if(f())r.decimalScale>0&&r.value&&/\d+\.0*[1-9]+/.test(r.value)&&0===+Object(p.bg)(r.value).toFixed(+r.decimalScale||2)&&(r.decimalScale=Object(u.d)(Math.abs(r.value))+2),(-1===r.decimalScale||0===+r.value&&t)&&delete r.decimalScale,r.value=Object(u.K)(r.value),r.value&&/\d+.9{6}/.test(r.value)&&(r.value=(+r.value).toFixed(5)),n(Object(x.jsx)(v,Object(c.a)(Object(c.a)({},r),{},{renderText:g,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(j){var o=e.width,d=e.height;n(Object(x.jsx)(h,{className:"loading-line",width:o,height:d})),a&&O(!1)}var b=window.setTimeout((function(){f()||n(l)}),6e4);return function(){clearTimeout(b)}}),[e.value,e.decimalScale,e.suffix]),s}},1419:function(e,t,a){"use strict";t.a=a.p+"static/media/staked.45c27f0b.svg"},1667:function(e,t,a){},1668:function(e,t,a){},1739:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var s=a(6),n=a(55),c=a(1239),i=a(168),l=a(467),r=a(468),o=a(469),d=a(466),b=a(1419),j=a(470),u=(a(65),a.p+"static/media/close.7f6b23a4.svg"),p=(a(1667),a(51)),x=a(5);function m(e){let{lang:t,pool:a,wallet:p}=e;const m=Object(n.g)(),[v,h]=Object(s.useState)({}),[f,g]=Object(s.useState)(!1),[k,N]=Object(s.useState)(),[y,w]=Object(s.useState)(!0),S=e=>{e.target.src=j.default};Object(s.useEffect)((()=>{(async()=>{h({});let e=await a.getPoolInfo(p,a);h(e)})(),p.isConnected()&&((async()=>{let e=await a.getIsStaked(p,a);e&&g(e.isStaked)})(),(async()=>{if(a&&("v3"===a.version||"v3_lite"===a.version)){let e=await a.getVenusEarned(p,a.address);N(e)}})())}),[a,p.detail.account]),Object(s.useEffect)((()=>{let e=sessionStorage.getItem(a.address);null!==e&&e&&w(!1)}),[a]);const F=`/pool/${a.version||"v1"}/${a.chainId}/${a.type}/${a.address}`;return Object(x.jsxs)("div",{className:("0x243681B8Cd79E3823fF574e07B2378B8Ab292c1E"===a.address?"showGuide":"")+" card-box",children:[Object(x.jsxs)("div",{className:"v2_lite_open"===a.version?"card-list open-list":"card-list",onClick:()=>{(e=>{"v2_lite_open"!==a.version&&m.push(e)})(F)},children:[Object(x.jsxs)("div",{className:`card-header ${a.retired?a.version:""} ${"0xDE3447Eb47EcDf9B5F90E7A6960a14663916CeE8"===a.address?"new":""}`,children:[Object(x.jsxs)("div",{className:"pool-network-type",children:[Object(x.jsx)("div",{className:"network-logo",children:Object(x.jsx)("img",{alt:"",src:(e=>{let t;return"56"===e||"97"===e?t=l.default:"137"===e?t=o.default:"1"===e?t=d.default:"42161"!==e&&"421611"!==e||(t=r.default),t})(a.chainId)})}),Object(x.jsxs)("div",{className:"pool-type-network-text",children:[Object(x.jsxs)("div",{className:"pool-type-text",children:["0xD2D950e338478eF7FeB092F840920B3482FcaC40"!==a.address&&Object(x.jsxs)(x.Fragment,{children:[t[a.type]," ",t[a.zone]]}),"0xD2D950e338478eF7FeB092F840920B3482FcaC40"===a.address&&Object(x.jsx)(x.Fragment,{children:t[a.zone]})]}),Object(x.jsx)("div",{className:"pool-network-text",children:a.chain.toUpperCase()})]})]}),Object(x.jsxs)("div",{className:"base-token-logo",children:[a.isLp&&Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"lp-base-token-bg",children:[Object(x.jsx)("div",{className:`base-token-bg ${a.bTokens[0].bTokenSymbol}`}),Object(x.jsx)("span",{className:"lp-con",children:"+"}),Object(x.jsx)("div",{className:`base-token-bg ${a.bTokens[1].bTokenSymbol}`})]})}),!a.isLp&&"v3"!==a.version&&"v3_lite"!==a.version&&Object(x.jsx)(x.Fragment,{children:a.bTokens.map(((e,t)=>Object(x.jsx)("div",{className:"base-token-box-bg",children:Object(x.jsx)("div",{className:`base-token-bg ${e.bTokenSymbol}`,children:"v2_lite_open"===a.version&&Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("img",{alt:"",onError:S,src:`https://raw.githubusercontent.com/deri-finance/deri-open-zone/main/img/${e.bTokenSymbol}.png`})})})},t)))}),("v3"===a.version||"v3_lite"===a.version)&&Object(x.jsx)(O,{bTokens:a.bTokens})]})]}),Object(x.jsxs)("div",{className:"card-content",children:[Object(x.jsx)("div",{className:"max-apy",children:"v2_lite_open"!==a.version&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"max-apy-title",children:"v2"===a.version||"v3_lite"===a.version||"v3"===a.version?t["max-apy"]:t.apy}),Object(x.jsx)("div",{className:"max-apy-num",children:Object(x.jsx)(c.a,{value:v.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2})})]})}),Object(x.jsxs)("div",{className:"total-pool-liquidity",children:[Object(x.jsx)("div",{className:"total-liquidity-title",children:t["total-pool-liquidity"]}),Object(x.jsx)("div",{className:"total-liquidity-num",children:Object(x.jsx)(c.a,{value:v.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:"lp"===a.type?7:0})})]}),Object(x.jsxs)("div",{className:"your-deri-epoch",children:[f&&Object(x.jsxs)("div",{className:"staked-box",children:[Object(x.jsx)("img",{src:b.a,alt:""}),t.staked]}),+k>0&&("v3"===a.version||"v3_lite"===a.version)&&Object(x.jsx)("span",{className:"xvs-collectable",children:Object(x.jsxs)("div",{className:"staked-box",children:[Object(x.jsx)(c.a,{width:"50px",value:k,displayType:"text",thousandSeparator:!0,decimalScale:2})," \xa0 XVS  ",t.collectable]})})]}),Object(x.jsx)("div",{className:"stake-button",children:Object(x.jsx)(i.a,{disabled:"v2_lite_open"===a.version,className:"button",outline:!0,label:"v2_lite_open"===a.version?t.operating:t.stake})})]})]}),"v3_lite"===a.version&&y&&Object(x.jsxs)("div",{className:"new-symbol",children:[Object(x.jsxs)("div",{className:"new-symbol-text",children:["New Listing : ",Object(x.jsx)("a",{href:"https://deri.io/#/trade/futures/DOGEUSDT",target:"_blank",children:"DOGEUSDT"})," ",Object(x.jsx)("a",{href:"https://deri.io/#/trade/futures/FITFIUSDT",target:"_blank",children:"FITFIUSDT"})]}),Object(x.jsx)("div",{className:"close-symbol",children:Object(x.jsx)("img",{src:u,alt:"close",onClick:()=>{return e=a.address,sessionStorage.setItem(e,!1),void w(!1);var e}})})]})]})}const v=p.a.div`
  @-webkit-keyframes explode {
    0% {
        transform: translateX(0px);
        -moz-transform : translateX(0px);
    }
    100% {
        transform: translateX(100px);
        -moz-transform : translateX(100px);
    }
  }

  @keyframes explode {
    0% {
        transform: translateX(0px);
        -moz-transform : translateX(0px);
    }
    100% {
        transform: translateX(100px);
        -moz-transform : translateX(100px);
    }
  }
  .base-token{
    margin-left: 0px!important;
    z-index : -2;
    visibility: hidden;
    background-color: #111e34;
    border : 1px solid #fff;
  }
  @media only screen and (max-width: 760px) {
    .base-token{
      display:none;
    }
  }
  .base-token-box-bg.explode:hover .move  {
    -webkit-animation : explode .4s .0s linear;
    -moz-animation :  explode .4s .0s linear;
    animation: explode .4s .0s linear;
    // transform : translateX(100px)!important;
    visibility: visible;    
  }
  
  .base-token-box-bg.explode:hover .base-token {
    z-index : 2!important;
  } 

`,h=p.a.div`
  position: absolute;
  transform : ${e=>`rotate(${-e.rotate}deg)`};
  width: 48px;
  height: 48px;
  display: inline-block;
  border-radius: 50%;
  .move {
    transform : translateX(100px) ${e=>`rotate(${e.rotate}deg) !important`};
  }
`,O=e=>{let{bTokens:t=[]}=e;const a=360/t.length;return Object(x.jsxs)(v,{className:"v3-tokens",children:[Object(x.jsx)("div",{className:"tokens",children:t.filter(((e,t)=>t<3)).map(((e,t)=>Object(x.jsx)("div",{className:"base-token-box-bg",children:Object(x.jsx)("div",{className:`base-token-bg ${e.bTokenSymbol}`})},t)))}),Object(x.jsxs)("div",{className:"base-token-box-bg explode",children:[Object(x.jsxs)("div",{className:"base-token-bg",children:[t.length-3," +"]}),t.map(((e,t)=>{const s=a*t;return Object(x.jsx)(h,{className:"base-token",rotate:s,width:"100",children:Object(x.jsx)("div",{width:"100",rotate:s,className:`base-token-bg move ${e.bTokenSymbol}`})},t)}))]})]})}},2094:function(e,t,a){},2363:function(e,t,a){"use strict";a.r(t);var s=a(49),n=a(2),c=a(14),i=a(1),l=a.n(i),r=a(6),o=a(45),d=a(1739),b=a(37),j=(a(296),a(1668),a(2094),a(5));t.default=Object(o.b)("wallet","poolManager")(Object(o.c)((function(e){var t=e.lang,a=e.wallet,i=void 0===a?{}:a,o=e.poolManager,u=Object(r.useState)("amm"),p=Object(c.a)(u,2),x=p[0],m=(p[1],Object(r.useState)(!1)),v=Object(c.a)(m,2),h=v[0],O=(v[1],Object(r.useState)(t["deri-pool-title"])),f=Object(c.a)(O,2),g=f[0],k=f[1],N=Object(r.useState)([]),y=Object(c.a)(N,2),w=y[0],S=y[1],F=Object(r.useState)(!1),T=Object(c.a)(F,2),_=(T[0],T[1],Object(r.useState)([])),E=Object(c.a)(_,2),$=(E[0],E[1]),D=Object(r.useState)([]),I=Object(c.a)(D,2),X=(I[0],I[1]),z=function(){var e=Object(n.a)(l.a.mark((function e(){var t,a,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[].concat(Object(s.a)(o.ammPools),Object(s.a)(o.lpPools)),e.next=3,Promise.all(t.map(function(){var e=Object(n.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[t.chainId,t.address,i.detail.account],e.next=3,b.a.request("getUserStakeInfo",a);case 3:if(!e.sent.isStaked){e.next=8;break}return e.abrupt("return",t);case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:a=(a=e.sent).filter((function(e){return e})),c=a.filter((function(e){return"lp"!==e.type})),r=a.filter((function(e){return"lp"===e.type})),$(c),X(r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){i.isConnected()&&z()}),[i.detail,o,x]),Object(r.useEffect)((function(){k(h?t["open-pool-title"]:t["deri-pool-title"])}),[h]),Object(r.useEffect)((function(){o.load()}),[]),Object(r.useEffect)((function(){S(o.retiredPools)}),[o.pools]),Object(j.jsx)("div",{className:"pool-box",children:Object(j.jsx)("div",{className:"pool-info",children:Object(j.jsxs)("div",{className:"left",children:[Object(j.jsx)("div",{className:"left-header-info",children:Object(j.jsxs)("div",{className:"pool-title",children:[Object(j.jsx)("div",{className:"pool-title-text",children:g}),Object(j.jsxs)("div",{className:"pool-title-select-text",children:[!h&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"pool-test-des",children:t["pool-title-des-one"]}),Object(j.jsx)("div",{className:"pool-test-des",children:t["pool-title-des-two"]})]}),h&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"pool-test-des",children:t["open-pool-title-des-one"]}),Object(j.jsx)("div",{className:"pool-test-des",children:t["open-pool-title-des-two"]})]})]})]})}),Object(j.jsxs)("div",{className:"pool-card-claim-bg",children:[Object(j.jsx)("div",{className:"retired-hint",children:Object(j.jsxs)("div",{children:["Several V2 markets ( ",Object(j.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://deri.io/#/retired/trade/options",children:"Options"})," , ",Object(j.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://deri.io/#/retired/trade/futures",children:"Fut Main & Fut Inno-BUSD "})," pools) are no longer supported, please close position and remove your collaterals.",Object(j.jsx)("br",{})," For V1 and Premining markets, please visit ",Object(j.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://v2app.deri.io/#/retired",children:"here"}),"  to close position and remove your collaterals."]})}),Object(j.jsx)("div",{className:"pool-card",children:w.map((function(e,a){return Object(j.jsx)(d.a,{wallet:i,lang:t,pool:e},a)}))}),Object(j.jsx)("div",{className:!0})]})]})})})})))}}]);
//# sourceMappingURL=22.b1387d91.chunk.js.map