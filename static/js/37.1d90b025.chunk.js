(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[37],{2361:function(e,t,n){},2561:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(2),a=n(9),i=n(8),r=n(26),o=n(188),b=n(44),l=n(190),d=(n(2361),n(55)),u=n(4);t.default=Object(d.b)("wallet")(Object(d.c)((function(e){var t=e.wallet,n=e.lang,d=[{token:"BUSD"},{token:"SXP"},{token:"ETH"},{token:"LTC"},{token:"XRP"},{token:"BTCB"},{token:"ADA"},{token:"CAKE"},{token:"MATIC"},{token:"AAVE"},{token:"TUSD"},{token:"TRX"},{token:"USDT"},{token:"USDC"},{token:"UST"},{token:"LUNA"},{token:"DOGE"}],k=[{token:"USDC"},{token:"LINK"},{token:"DAI"},{token:"AAVE"},{token:"WBTC"}],j=Object(l.c)(),h=Object(i.useState)(d),m=Object(a.a)(h,2),f=m[0],O=m[1],x=Object(i.useState)("BSC"),v=Object(a.a)(x,2),B=v[0],C=v[1],N=function(){var e=Object(s.a)(Object(c.a)().mark((function e(n){var s,a,i,r;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()){e.next=17;break}if("BSC"!==B||97!==+t.detail.chainId){e.next=9;break}return s=[t.detail.chainId,t.detail.account,n],e.next=5,b.a.request("mintTokenV3",s,{includeResponse:!0});case 5:(a=e.sent)&&a.success?j.success("mint success"):j.error("mint fail"),e.next=15;break;case 9:if("ARBITRUM"!==B||421611!==+t.detail.chainId){e.next=15;break}return i=[t.detail.chainId,t.detail.account,n],e.next=13,b.a.request("mintTokenV3",i,{includeResponse:!0});case 13:(r=e.sent)&&r.success?j.success("mint success"):j.error("mint fail");case 15:e.next=18;break;case 17:j.error("Please connect wallet");case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){O("BSC"===B?d:k)}),[B]),Object(u.jsx)("div",{className:"testnet-faucet",children:Object(u.jsxs)("div",{className:"faucet-info",children:[Object(u.jsx)("div",{className:"faucet-title",children:n["obtain-testnet-token"]}),Object(u.jsxs)("div",{className:"tab",children:[Object(u.jsx)("div",{className:"BSC"===B?"tab-bsc check":"tab-bsc",onClick:function(){return C("BSC")},children:"BSC"}),Object(u.jsx)("div",{className:"ARBITRUM"===B?"tab-arbitrum check":"tab-arbitrum",onClick:function(){return C("ARBITRUM")},children:"ARBITRUM"})]}),Object(u.jsxs)("div",{className:"mint-bnb",children:[Object(u.jsx)("div",{children:"BSC"===B?n["go-to-min-bnb"]:n["go-to-min-eth"]}),"BSC"===B&&Object(u.jsx)("div",{className:"bnb-button",children:Object(u.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://testnet.binance.org/faucet-smart",children:"BNB"})}),"ARBITRUM"===B&&Object(u.jsx)("div",{className:"bnb-button",children:Object(u.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://rinkebyfaucet.com/",children:"ETH"})})]}),Object(u.jsx)("div",{className:"mint-token",children:f.map((function(e,t){return Object(u.jsxs)("div",{className:"mint-token-box",children:[Object(u.jsx)("div",{className:"token-logo",children:Object(u.jsx)(r.a,{token:e.token,width:60,height:60})}),Object(u.jsx)("div",{className:"token-name",children:e.token}),Object(u.jsx)("div",{className:"token-button",children:Object(u.jsx)(o.a,{fontWeight:300,label:n.mint,width:88,height:31,onClick:function(){return N(e.token)}})})]},t)}))})]})})})))}}]);
//# sourceMappingURL=37.1d90b025.chunk.js.map