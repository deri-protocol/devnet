(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[27],{2176:function(e,t,n){},2401:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(2),i=(n(5),n(31)),r=n(170),o=n(35),l=n(171),b=(n(2176),n(44)),d=n(6);t.default=Object(b.b)("wallet")(Object(b.c)((function(e){var t=e.wallet,n=e.lang,c=Object(l.c)(),b=function(){var e=Object(a.a)(s.a.mark((function e(n){var a,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()){e.next=8;break}return a=[t.detail.chainId,t.detail.account,n],e.next=4,o.a.request("mintTokenV3",a,{includeResponse:!0});case 4:(i=e.sent)&&i.success?c.success("mint success"):c.error("mint fail"),e.next=9;break;case 8:c.error("Please connect wallet");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"testnet-faucet",children:Object(d.jsxs)("div",{className:"faucet-info",children:[Object(d.jsx)("div",{className:"faucet-title",children:n["obtain-testnet-token"]}),Object(d.jsxs)("div",{className:"mint-bnb",children:[Object(d.jsx)("div",{children:n["go-to-min-bnb"]}),Object(d.jsx)("div",{className:"bnb-button",children:Object(d.jsx)("a",{rel:"norelerror",target:"_blank",href:"https://testnet.binance.org/faucet-smart",children:"BNB"})})]}),Object(d.jsx)("div",{className:"mint-token",children:[{token:"BUSD"},{token:"SXP"},{token:"ETH"},{token:"LTC"},{token:"XRP"},{token:"BTCB"},{token:"ADA"},{token:"CAKE"},{token:"MATIC"},{token:"AAVE"},{token:"TUSD"},{token:"TRX"}].map((function(e,t){return Object(d.jsxs)("div",{className:"mint-token-box",children:[Object(d.jsx)("div",{className:"token-logo",children:Object(d.jsx)(i.a,{token:e.token,width:60,height:60})}),Object(d.jsx)("div",{className:"token-name",children:e.token}),Object(d.jsx)("div",{className:"token-button",children:Object(d.jsx)(r.a,{fontWeight:300,label:n.mint,width:88,height:31,onClick:function(){return b(e.token)}})})]},t)}))})]})})})))}}]);
//# sourceMappingURL=27.1ba92714.chunk.js.map