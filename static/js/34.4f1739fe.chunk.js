(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[34],{1392:function(e,a,t){"use strict";var s,c,i=t(53),l=t(322),n=t(65),d=t(9),r=t(64),o=t(8),j=(t(80),t(1426)),b=t(54),h=t(21),x=t(18),v=t(4),m=["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"],p=Object(b.a)(j.a)(s||(s=Object(r.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),O=b.a.span(c||(c=Object(r.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));a.a=function(e){var a=Object(o.useState)(Object(v.jsx)("span",{className:"loading-line"})),t=Object(d.a)(a,2),s=t[0],c=t[1],r=Object(o.useState)(!0),j=Object(d.a)(r,2),b=j[0],u=j[1],f=function(){var a=e.allowZero;return"object"!==Object(n.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===a},w=function(e){return e&&e.replace(/\.$/,"")};return Object(o.useEffect)((function(){var a=e.allowZero,t=(e.wallet,e.closeShowLoadingEffectAfterLoaded),s=e.defaultValue,n=void 0===s?"--":s,d=Object(l.a)(e,m);if(f())d.decimalScale>0&&d.value&&/\d+\.0*[1-9]+/.test(d.value)&&!a&&0===+Object(x.bg)(d.value).toFixed(+d.decimalScale||2)&&(d.decimalScale=Object(h.g)(Math.abs(d.value))+2),(-1===d.decimalScale||0===+d.value&&a)&&delete d.decimalScale,d.value=/e(\+|=)?/.test(d.value)?Object(h.M)(d.value):""+d.value,d.value&&/\d+.9{6}/.test(d.value)&&(d.value=(+d.value).toFixed(5)),c(Object(v.jsx)(p,Object(i.a)(Object(i.a)({},d),{},{renderText:w,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(b){var r=e.width,o=e.height;c(Object(v.jsx)(O,{className:"loading-line",width:r,height:o})),t&&u(!1)}var j=window.setTimeout((function(){f()||c(n)}),n===d.value?0:6e4);return function(){clearTimeout(j)}}),[e.value,e.decimalScale,e.suffix]),s}},2342:function(e,a,t){},2569:function(e,a,t){"use strict";t.r(a);var s=t(8),c=t(55),i=t(1392),l=t(188),n=t(44),d=t(26),r=t(193),o=t(14),j=t(247),b=t.p+"static/media/pancake.2c13a9f3.svg",h=t.p+"static/media/sushiswap-sushi-logo.f8ccc300.svg",x=t.p+"static/media/gateio.1570dd44.svg",v=t.p+"static/media/mxc.b59b5e73.svg",m=t.p+"static/media/governance.e32bdd33.svg",p=t.p+"static/media/privilege.9c1f0375.svg",O=(t(2342),t(4));function u(e){let{item:a,index:t}=e;const[c,i]=Object(s.useState)(!1);return Object(O.jsxs)("div",{className:"faq-info-box",children:[Object(O.jsxs)("div",{className:"faq-title-img",onClick:()=>{i(!c)},children:[Object(O.jsx)("div",{className:"faq-question-title",children:a.label}),Object(O.jsx)("div",{children:Object(O.jsx)(d.a,{token:c?"arrow-up":"arrow-down",width:"20",height:"20"})})]}),c&&Object(O.jsxs)("div",{className:"faq-des",children:[a.labelDes,a.link&&Object(O.jsxs)("a",{rel:"noreferrer",target:"_blank",href:a.link,children:[" ",a.linkLabel]})]})]},t)}a.default=Object(c.b)("wallet")(Object(c.c)((function(e){let{wallet:a={},lang:t}=e;const[c,f]=Object(s.useState)(),[w,N]=Object(s.useState)(),[g,k]=Object(s.useState)(!1),[_,S]=Object(s.useState)(),y=Object(r.a)(),A=[{label:t["what-is-deri"],labelDes:t["what-is-deri-des"]},{label:t["is-deri-erc20-token"],labelDes:t["is-deri-erc20-token-des"]},{label:t["what-deri-token-total"],labelDes:t["what-deri-token-total-des"],link:"https://docs.deri.io/library/tokenomics",linkLabel:t.more}],T=async()=>{let e=`${Object({NODE_ENV:"development",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_WSS_URL:"wss://oracletestnet.deri.io",REACT_APP_HTTP_URL:"https://oracletestnet.deri.io",REACT_APP_REST_SERVER_URL:"https://devapi.deri.io",REACT_APP_BACKEND_WSS_URL:"wss://devapi.deri.io",REACT_APP_KLINE_WSS_URL:"wss://klinetestnet.deri.io",REACT_APP_KLINE_HTTP_URL:"https://klinetestnet.deri.io",REACT_APP_EXECUTOR_WSS_URL:"wss://test.oraclum.io",REACT_APP_SINGLE_DOMAIN:"on"}).REACT_APP_INFO_HTTP_URL}/stats_for_token`,a=await fetch(e),t=await a.json();if(t){let e={};e.price=t.data.price,e.market_cap=t.data.market_cap,e.circulating_supply=parseInt(t.data.circulating_supply),e.total_supply=parseInt(t.data.total_supply),N(e)}};return Object(s.useEffect)((()=>{if(a.isConnected()){let e;56===+a.detail.chainId?e="0xe60eaf5A997DFAe83739e035b005A33AfdCc6df5":1===+a.detail.chainId?e="0xa487bf43cf3b10dffc97a9a744cbb7036965d3b9":128===+a.detail.chainId?e="0x2bdA3e331Cf735D9420e41567ab843441980C4B8":137===+a.detail.chainId&&(e="0x3d1d2afd191b165d140e3e8329e634665ffb0e5e"),f(e)}}),[a.detail]),Object(s.useEffect)((()=>{let e=null;return e=window.setInterval((()=>{T()}),3e5),T(),(async()=>{let e=await n.a.request("getDeriBurnedAmount");S(e)})(),()=>{e&&clearInterval(e)}}),[]),Object(O.jsx)("div",{className:"token-box",children:Object(O.jsxs)("div",{className:"token-info",children:[Object(O.jsxs)("div",{className:"token-header",children:[Object(O.jsxs)("div",{className:"token-header-left",children:[Object(O.jsxs)("div",{className:"logo-title",children:[Object(O.jsx)("img",{alt:"",src:j.default}),Object(O.jsx)("span",{className:"title-text",children:t.title})]}),Object(O.jsxs)("div",{className:"token-header-des",children:[t["deri-is-the-protocol-token"],Object(O.jsxs)("a",{rel:"noopener noreferrer",href:"https://docs.deri.io/tokenomics",target:"_blank",className:"learn-more",children:[" ",t["learn-more"]," "]})]})]}),Object(O.jsx)("div",{className:"token-header-right",children:Object(O.jsx)(l.a,{onClick:()=>{(async()=>{if(c){const a="DERI",t=18;try{await window.ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:c,symbol:a,decimals:t}}})?console.log("Thanks for your interest!"):console.log("Your loss!")}catch(e){console.log(e)}}})()},type:o.B,width:"242",label:t["add-deri-to-metamask"]})})]}),Object(O.jsxs)("div",{className:"token-info-content",children:[Object(O.jsxs)("div",{className:"top-info-box",children:[Object(O.jsxs)("div",{className:"info-box",children:[Object(O.jsxs)("div",{className:"num",children:["$ ",w?Object(O.jsx)(i.a,{value:w.price,displayType:"text",thousandSeparator:!0,decimalScale:4}):"--"]}),Object(O.jsx)("div",{className:"text",children:t.price})]}),Object(O.jsxs)("div",{className:"info-box min-box",children:[Object(O.jsxs)("div",{className:"num",children:["$ ",w?Object(O.jsx)(i.a,{value:w.market_cap,displayType:"text",thousandSeparator:!0,decimalScale:0}):"--"]}),Object(O.jsx)("div",{className:"text",children:t["market-cap"]})]})]}),Object(O.jsxs)("div",{className:"buttom-info-box",children:[Object(O.jsxs)("div",{className:"info-box",children:[Object(O.jsx)("div",{className:"num",children:w?Object(O.jsx)(i.a,{value:w.circulating_supply,displayType:"text",thousandSeparator:!0,decimalScale:0}):"--"}),Object(O.jsx)("div",{className:"text",children:t["circulating-supply"]})]}),Object(O.jsxs)("div",{className:"info-box min-box",children:[Object(O.jsx)("div",{className:"num",children:w?Object(O.jsx)(i.a,{value:w.total_supply,displayType:"text",thousandSeparator:!0,decimalScale:0}):"--"}),Object(O.jsx)("div",{className:"text",children:t["total-supply"]})]})]})]}),Object(O.jsx)("div",{className:"buy-deri-token",children:t["token-burning"]}),Object(O.jsxs)("div",{className:"token-info-content token-burning-content",children:[Object(O.jsx)("div",{className:"top-info-box  token-burning",children:Object(O.jsxs)("div",{className:"info-box",children:[Object(O.jsx)("div",{className:"num",children:"4,357,036"}),Object(O.jsx)("div",{className:"text",children:t["burned-to-mining-vault"]})]})}),Object(O.jsx)("div",{className:"buttom-info-box  token-burning",children:Object(O.jsxs)("div",{className:"info-box",children:[Object(O.jsxs)("div",{className:"num",children:[Object(O.jsx)(i.a,{value:_,displayType:"text",thousandSeparator:!0,decimalScale:0}),"  ",Object(O.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://etherscan.io/token/0xa487bf43cf3b10dffc97a9a744cbb7036965d3b9?a=0x000000000000000000000000000000000000dead",children:[" ",Object(O.jsx)(d.a,{token:"target"})]})]}),Object(O.jsx)("div",{className:"text",children:t["burned-to-deadlock-address"]})]})})]}),Object(O.jsx)("div",{className:"buy-deri-token",children:t["buy-deri-token"]}),Object(O.jsxs)("div",{className:"buy-deri-token-swap",children:[Object(O.jsx)("a",{target:"_blank",onClick:async()=>{a.isConnected()?(await a.switchNetwork(y[56]),window.open("https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xe60eaf5a997dfae83739e035b005a33afdcc6df5")):window.open("https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xe60eaf5a997dfae83739e035b005a33afdcc6df5")},children:Object(O.jsxs)("div",{className:"swap-box",children:[Object(O.jsx)("div",{className:"swap-logo",children:Object(O.jsx)("img",{alt:"",src:b})}),Object(O.jsx)("div",{className:"swap-name",children:t["pancake-swap"]})]})}),Object(O.jsx)("a",{target:"_blank",onClick:async()=>{a.isConnected()?(await a.switchNetwork(y[1]),window.open("https://app.sushi.com/swap?inputCurrency=&outputCurrency=0xA487bF43cF3b10dffc97A9A744cbB7036965d3b9")):window.open("https://app.sushi.com/swap?inputCurrency=&outputCurrency=0xA487bF43cF3b10dffc97A9A744cbB7036965d3b9")},children:Object(O.jsxs)("div",{className:"swap-box",children:[Object(O.jsx)("div",{className:"swap-logo",children:Object(O.jsx)("img",{alt:"",src:h})}),Object(O.jsx)("div",{className:"swap-name",children:t["sushi-swap"]})]})}),Object(O.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.gate.io/tradepro/DERI_USDT",children:Object(O.jsxs)("div",{className:"swap-box",children:[Object(O.jsx)("div",{className:"swap-logo",children:Object(O.jsx)("img",{alt:"",src:x})}),Object(O.jsx)("div",{className:"swap-name",children:t.gate})]})}),Object(O.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.mexc.com/exchange/DERI_USDT",children:Object(O.jsxs)("div",{className:"swap-box",children:[Object(O.jsx)("div",{className:"swap-logo",children:Object(O.jsx)("img",{alt:"",src:v})}),Object(O.jsx)("div",{className:"swap-name",children:t.mexc})]})})]}),Object(O.jsxs)("div",{className:"benefits-faq-box",children:[Object(O.jsxs)("div",{className:"benefits-box",children:[Object(O.jsx)("div",{className:"benefits-title",children:t["benefits-of-deri-token"]}),Object(O.jsxs)("div",{className:"benefits-info",children:[Object(O.jsxs)("div",{className:"governance",children:[Object(O.jsx)("img",{src:m,alt:""}),Object(O.jsxs)("div",{className:"governance-des",children:[Object(O.jsx)("div",{className:"governance-title",children:t.governance}),Object(O.jsx)("div",{className:"governance-text",children:t["governance-des"]})]})]}),Object(O.jsxs)("div",{className:"privilege",children:[Object(O.jsx)("img",{src:p,alt:""}),Object(O.jsxs)("div",{className:"privilege-des",children:[Object(O.jsx)("div",{className:"privilege-title",children:t.privilege}),Object(O.jsx)("div",{className:"privilege-text",children:t["privilege-des"]})]})]})]})]}),Object(O.jsxs)("div",{className:"faq-box",children:[Object(O.jsx)("div",{className:"faq-title",children:t.faq}),Object(O.jsxs)("div",{className:"faq-info",children:[A.map(((e,a)=>Object(O.jsx)(u,{item:e,index:a}))),Object(O.jsxs)("div",{className:"faq-info-box",children:[Object(O.jsxs)("div",{className:"faq-title-img",onClick:()=>{k(!g)},children:[Object(O.jsx)("div",{className:"faq-question-title",children:t["what-are-the"]}),Object(O.jsx)("div",{children:Object(O.jsx)(d.a,{token:g?"arrow-up":"arrow-down",width:"20",height:"20"})})]}),g&&Object(O.jsxs)("div",{className:"faq-des",children:[Object(O.jsx)("div",{className:"governance-privilege",children:t.governance}),Object(O.jsx)("div",{children:t["what-are-the-govenance-des"]}),Object(O.jsx)("div",{className:"governance-privilege privilege",children:t.privilege}),Object(O.jsx)("div",{children:t["what-are-the-privilege-des-one"]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("br",{}),t["what-are-the-privilege-des-two"]]}),Object(O.jsx)("div",{className:"specifically",children:t["what-are-the-privilege-des-three"]}),Object(O.jsxs)("div",{className:"specifically-des",children:[Object(O.jsx)("div",{className:"list-style"}),Object(O.jsx)("div",{children:t["what-are-the-privilege-des-three-des-one"]})]}),Object(O.jsxs)("div",{className:"specifically-des",children:[Object(O.jsx)("div",{className:"list-style"}),Object(O.jsx)("div",{children:t["what-are-the-privilege-des-three-des-two"]})]}),Object(O.jsx)("div",{className:"specifically",children:t["what-are-the-privilege-des-four"]})]})]})]})]})]})]})})})))}}]);
//# sourceMappingURL=34.4f1739fe.chunk.js.map