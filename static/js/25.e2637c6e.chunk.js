(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[25],{1176:function(e,a,t){"use strict";var c,s,i=t(49),n=t(185),l=t(56),r=t(9),d=t(52),o=t(8),j=(t(64),t(1261)),b=t(51),h=t(21),x=t(15),p=t(5),u=["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"],v=Object(b.a)(j.a)(c||(c=Object(d.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),f=b.a.div(s||(s=Object(d.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));a.a=function(e){var a=Object(o.useState)(Object(p.jsx)("span",{className:"loading-line"})),t=Object(r.a)(a,2),c=t[0],s=t[1],d=Object(o.useState)(!0),j=Object(r.a)(d,2),b=j[0],m=j[1],O=function(){var a=e.allowZero;return"object"!==Object(l.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===a},w=function(e){return e&&e.replace(/\.$/,"")};return Object(o.useEffect)((function(){var a=e.allowZero,t=(e.wallet,e.closeShowLoadingEffectAfterLoaded),c=e.defaultValue,l=void 0===c?"--":c,r=Object(n.a)(e,u);if(O())r.decimalScale>0&&!a&&r.value&&/\d+\.0*[1-9]+/.test(r.value)&&0===+Object(x.bg)(r.value).toFixed(+r.decimalScale||2)&&(r.decimalScale=Object(h.d)(Math.abs(r.value))+2),-1===r.decimalScale&&delete r.decimalScale,r.value=Object(h.J)(r.value),r.value&&/\d+.9{6}/.test(r.value)&&(r.value=(+r.value).toFixed(5)),s(Object(p.jsx)(v,Object(i.a)(Object(i.a)({},r),{},{renderText:w,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(b){var d=e.width,o=e.height;s(Object(p.jsx)(f,{className:"loading-line",width:d,height:o})),t&&m(!1)}var j=window.setTimeout((function(){O()||s(l)}),6e4);return function(){clearTimeout(j)}}),[e.value,e.decimalScale,e.suffix]),c}},2111:function(e,a,t){},2324:function(e,a,t){"use strict";t.r(a);var c=t(2),s=t(9),i=t(0),n=t.n(i),l=t(8),r=t(45),d=t(1176),o=t(161),j=t(33),b=t(447),h=t(16),x=t(219),p=t.p+"static/media/pancake.2c13a9f3.svg",u=t.p+"static/media/sushiswap-sushi-logo.f8ccc300.svg",v=t.p+"static/media/gateio.1570dd44.svg",f=t.p+"static/media/mxc.b59b5e73.svg",m=t.p+"static/media/governance.e32bdd33.svg",O=t.p+"static/media/privilege.9c1f0375.svg",w=(t(2111),t(5));function g(e){var a=e.item,t=e.index,c=Object(l.useState)(!1),i=Object(s.a)(c,2),n=i[0],r=i[1];return Object(w.jsxs)("div",{className:"faq-info-box",children:[Object(w.jsxs)("div",{className:"faq-title-img",onClick:function(){r(!n)},children:[Object(w.jsx)("div",{className:"faq-question-title",children:a.label}),Object(w.jsx)("div",{children:Object(w.jsx)(j.a,{token:n?"arrow-up":"arrow-down",width:"20",height:"20"})})]}),n&&Object(w.jsxs)("div",{className:"faq-des",children:[a.labelDes,a.link&&Object(w.jsxs)("a",{target:"_blank",href:a.link,children:[" ",a.linkLabel]})]})]},t)}a.default=Object(r.b)("wallet")(Object(r.c)((function(e){var a=e.wallet,t=void 0===a?{}:a,i=e.lang,r=Object(l.useState)(),N=Object(s.a)(r,2),k=N[0],y=N[1],S=Object(l.useState)(),_=Object(s.a)(S,2),C=_[0],q=_[1],A=Object(l.useState)(!1),D=Object(s.a)(A,2),I=D[0],T=D[1],E=Object(b.a)(),F=[{label:i["what-is-deri"],labelDes:i["what-is-deri-des"]},{label:i["is-deri-erc20-token"],labelDes:i["is-deri-erc20-token-des"]},{label:i["what-deri-token-total"],labelDes:i["what-deri-token-total-des"],link:"https://docs.deri.io/library/tokenomics",linkLabel:i.more}],L=function(){var e=Object(c.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!k){e.next=13;break}return"DERI",18,e.prev=3,e.next=6,window.ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:k,symbol:"DERI",decimals:18}}});case 6:e.sent?console.log("Thanks for your interest!"):console.log("Your loss!"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(c.a)(n.a.mark((function e(){var a,t,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://infoapi2.deri.finance/stats_for_token",e.next=3,fetch("https://infoapi2.deri.finance/stats_for_token");case 3:return a=e.sent,e.next=6,a.json();case 6:(t=e.sent)&&((c={}).price=t.data.price,c.market_cap=t.data.market_cap,c.circulating_supply=parseInt(t.data.circulating_supply),c.total_supply=parseInt(t.data.total_supply),q(c));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(c.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()){e.next=6;break}return e.next=3,t.switchNetwork(E[1]);case 3:window.open("https://app.sushi.com/swap?inputCurrency=&outputCurrency=0xA487bF43cF3b10dffc97A9A744cbB7036965d3b9"),e.next=7;break;case 6:window.open("https://app.sushi.com/swap?inputCurrency=&outputCurrency=0xA487bF43cF3b10dffc97A9A744cbB7036965d3b9");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(c.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()){e.next=6;break}return e.next=3,t.switchNetwork(E[56]);case 3:window.open("https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xe60eaf5a997dfae83739e035b005a33afdcc6df5"),e.next=7;break;case 6:window.open("https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xe60eaf5a997dfae83739e035b005a33afdcc6df5");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){var e;t.isConnected()&&(56===+t.detail.chainId?e="0xe60eaf5A997DFAe83739e035b005A33AfdCc6df5":1===+t.detail.chainId?e="0xa487bf43cf3b10dffc97a9a744cbb7036965d3b9":128===+t.detail.chainId?e="0x2bdA3e331Cf735D9420e41567ab843441980C4B8":137===+t.detail.chainId&&(e="0x3d1d2afd191b165d140e3e8329e634665ffb0e5e"),y(e))}),[t.detail]),Object(l.useEffect)((function(){var e;return e=window.setInterval((function(){R()}),3e5),R(),function(){e&&clearInterval(e)}}),[]),Object(w.jsx)("div",{className:"token-box",children:Object(w.jsxs)("div",{className:"token-info",children:[Object(w.jsxs)("div",{className:"token-header",children:[Object(w.jsxs)("div",{className:"token-header-left",children:[Object(w.jsxs)("div",{className:"logo-title",children:[Object(w.jsx)("img",{alt:"",src:x.default}),Object(w.jsx)("span",{className:"title-text",children:i.title})]}),Object(w.jsxs)("div",{className:"token-header-des",children:[i["deri-is-the-protocol-token"],Object(w.jsxs)("a",{rel:"noopener noreferrer",href:"https://docs.deri.io/tokenomics",target:"_blank",className:"learn-more",children:[" ",i["learn-more"]," "]})]})]}),Object(w.jsx)("div",{className:"token-header-right",children:Object(w.jsx)(o.a,{onClick:function(){L()},type:h.n,width:"242",label:i["add-deri-to-metamask"]})})]}),Object(w.jsxs)("div",{className:"token-info-content",children:[Object(w.jsxs)("div",{className:"top-info-box",children:[Object(w.jsxs)("div",{className:"info-box",children:[Object(w.jsxs)("div",{className:"num",children:["$ ",C?Object(w.jsx)(d.a,{value:C.price,displayType:"text",thousandSeparator:!0,decimalScale:4}):"--"]}),Object(w.jsx)("div",{className:"text",children:i.price})]}),Object(w.jsxs)("div",{className:"info-box min-box",children:[Object(w.jsxs)("div",{className:"num",children:["$ ",C?Object(w.jsx)(d.a,{value:C.market_cap,displayType:"text",thousandSeparator:!0,decimalScale:0}):"--"]}),Object(w.jsx)("div",{className:"text",children:i["market-cap"]})]})]}),Object(w.jsxs)("div",{className:"buttom-info-box",children:[Object(w.jsxs)("div",{className:"info-box",children:[Object(w.jsx)("div",{className:"num",children:C?Object(w.jsx)(d.a,{value:C.circulating_supply,displayType:"text",thousandSeparator:!0,decimalScale:0}):"--"}),Object(w.jsx)("div",{className:"text",children:i["circulating-supply"]})]}),Object(w.jsxs)("div",{className:"info-box min-box",children:[Object(w.jsx)("div",{className:"num",children:C?Object(w.jsx)(d.a,{value:C.total_supply,displayType:"text",thousandSeparator:!0,decimalScale:0}):"--"}),Object(w.jsx)("div",{className:"text",children:i["total-supply"]})]})]})]}),Object(w.jsx)("div",{className:"buy-deri-token",children:i["buy-deri-token"]}),Object(w.jsxs)("div",{className:"buy-deri-token-swap",children:[Object(w.jsx)("a",{target:"_blank",onClick:B,children:Object(w.jsxs)("div",{className:"swap-box",children:[Object(w.jsx)("div",{className:"swap-logo",children:Object(w.jsx)("img",{alt:"",src:p})}),Object(w.jsx)("div",{className:"swap-name",children:i["pancake-swap"]})]})}),Object(w.jsx)("a",{target:"_blank",onClick:$,children:Object(w.jsxs)("div",{className:"swap-box",children:[Object(w.jsx)("div",{className:"swap-logo",children:Object(w.jsx)("img",{alt:"",src:u})}),Object(w.jsx)("div",{className:"swap-name",children:i["sushi-swap"]})]})}),Object(w.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.gate.io/tradepro/DERI_USDT",children:Object(w.jsxs)("div",{className:"swap-box",children:[Object(w.jsx)("div",{className:"swap-logo",children:Object(w.jsx)("img",{alt:"",src:v})}),Object(w.jsx)("div",{className:"swap-name",children:i.gate})]})}),Object(w.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.mexc.com/exchange/DERI_USDT",children:Object(w.jsxs)("div",{className:"swap-box",children:[Object(w.jsx)("div",{className:"swap-logo",children:Object(w.jsx)("img",{alt:"",src:f})}),Object(w.jsx)("div",{className:"swap-name",children:i.mexc})]})})]}),Object(w.jsxs)("div",{className:"benefits-faq-box",children:[Object(w.jsxs)("div",{className:"benefits-box",children:[Object(w.jsx)("div",{className:"benefits-title",children:i["benefits-of-deri-token"]}),Object(w.jsxs)("div",{className:"benefits-info",children:[Object(w.jsxs)("div",{className:"governance",children:[Object(w.jsx)("img",{src:m,alt:""}),Object(w.jsxs)("div",{className:"governance-des",children:[Object(w.jsx)("div",{className:"governance-title",children:i.governance}),Object(w.jsx)("div",{className:"governance-text",children:i["governance-des"]})]})]}),Object(w.jsxs)("div",{className:"privilege",children:[Object(w.jsx)("img",{src:O,alt:""}),Object(w.jsxs)("div",{className:"privilege-des",children:[Object(w.jsx)("div",{className:"privilege-title",children:i.privilege}),Object(w.jsx)("div",{className:"privilege-text",children:i["privilege-des"]})]})]})]})]}),Object(w.jsxs)("div",{className:"faq-box",children:[Object(w.jsx)("div",{className:"faq-title",children:i.faq}),Object(w.jsxs)("div",{className:"faq-info",children:[F.map((function(e,a){return Object(w.jsx)(g,{item:e,index:a})})),Object(w.jsxs)("div",{className:"faq-info-box",children:[Object(w.jsxs)("div",{className:"faq-title-img",onClick:function(){T(!I)},children:[Object(w.jsx)("div",{className:"faq-question-title",children:i["what-are-the"]}),Object(w.jsx)("div",{children:Object(w.jsx)(j.a,{token:I?"arrow-up":"arrow-down",width:"20",height:"20"})})]}),I&&Object(w.jsxs)("div",{className:"faq-des",children:[Object(w.jsx)("div",{className:"governance-privilege",children:i.governance}),Object(w.jsx)("div",{children:i["what-are-the-govenance-des"]}),Object(w.jsx)("div",{className:"governance-privilege privilege",children:i.privilege}),Object(w.jsx)("div",{children:i["what-are-the-privilege-des-one"]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("br",{}),i["what-are-the-privilege-des-two"]]}),Object(w.jsx)("div",{className:"specifically",children:i["what-are-the-privilege-des-three"]}),Object(w.jsxs)("div",{className:"specifically-des",children:[Object(w.jsx)("div",{className:"list-style"}),Object(w.jsx)("div",{children:i["what-are-the-privilege-des-three-des-one"]})]}),Object(w.jsxs)("div",{className:"specifically-des",children:[Object(w.jsx)("div",{className:"list-style"}),Object(w.jsx)("div",{children:i["what-are-the-privilege-des-three-des-two"]})]}),Object(w.jsx)("div",{className:"specifically",children:i["what-are-the-privilege-des-four"]})]})]})]})]})]})]})})})))}}]);
//# sourceMappingURL=25.e2637c6e.chunk.js.map