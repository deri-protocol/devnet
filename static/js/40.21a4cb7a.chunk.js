(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[40],{2198:function(e,t,r){},2558:function(e,t,r){"use strict";r.r(t);var c=r(22),a=r(2),s=r(9),n=r(0),o=r.n(n),l=r(7),i=r(55),d=r(1961),j=r(45),u=(r(325),r(1847),r(2198),r(4));t.default=Object(i.b)("wallet","poolManager")(Object(i.c)((function(e){var t=e.lang,r=e.wallet,n=void 0===r?{}:r,i=e.poolManager,p=Object(l.useState)("amm"),b=Object(s.a)(p,2),f=b[0],O=(b[1],Object(l.useState)(!1)),h=Object(s.a)(O,2),x=h[0],m=(h[1],Object(l.useState)(t["deri-pool-title"])),v=Object(s.a)(m,2),N=v[0],g=v[1],k=Object(l.useState)([]),w=Object(s.a)(k,2),S=w[0],y=w[1],F=Object(l.useState)(!1),E=Object(s.a)(F,2),M=(E[0],E[1],Object(l.useState)([])),P=Object(s.a)(M,2),I=(P[0],P[1]),_=Object(l.useState)([]),J=Object(s.a)(_,2),U=(J[0],J[1]),V=function(){var e=Object(a.a)(o.a.mark((function e(){var t,r,s,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[].concat(Object(c.a)(i.ammPools),Object(c.a)(i.lpPools)),e.next=3,Promise.all(t.map(function(){var e=Object(a.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[t.chainId,t.address,n.detail.account],e.next=3,j.a.request("getUserStakeInfo",r);case 3:if(!e.sent.isStaked){e.next=8;break}return e.abrupt("return",t);case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:r=(r=e.sent).filter((function(e){return e})),s=r.filter((function(e){return"lp"!==e.type})),l=r.filter((function(e){return"lp"===e.type})),I(s),U(l);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){n.isConnected()&&V()}),[n.detail,i,f]),Object(l.useEffect)((function(){g(x?t["open-pool-title"]:t["deri-pool-title"])}),[x]),Object(l.useEffect)((function(){i.load()}),[]),Object(l.useEffect)((function(){y(i.retiredPools)}),[i.pools]),Object(u.jsx)("div",{className:"pool-box",children:Object(u.jsx)("div",{className:"pool-info",children:Object(u.jsxs)("div",{className:"left",children:[Object(u.jsx)("div",{className:"left-header-info",children:Object(u.jsxs)("div",{className:"pool-title",children:[Object(u.jsx)("div",{className:"pool-title-text",children:N}),Object(u.jsxs)("div",{className:"pool-title-select-text",children:[!x&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"pool-test-des",children:t["pool-title-des-one"]}),Object(u.jsx)("div",{className:"pool-test-des",children:t["pool-title-des-two"]})]}),x&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"pool-test-des",children:t["open-pool-title-des-one"]}),Object(u.jsx)("div",{className:"pool-test-des",children:t["open-pool-title-des-two"]})]})]})]})}),Object(u.jsxs)("div",{className:"pool-card-claim-bg",children:[Object(u.jsx)("div",{className:"retired-hint",children:Object(u.jsxs)("div",{children:["Several V3 ( ",Object(u.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://deri.io/#/retired/trade/futures",children:"Fut Main"})," ) and V2 markets ( ",Object(u.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://deri.io/#/retired/trade/options",children:"Options"})," , ",Object(u.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://deri.io/#/retired/trade/futures",children:"Fut Main & Fut Inno-BUSD "})," pools) are no longer supported, please close position and remove your collaterals."]})}),Object(u.jsx)("div",{className:"pool-card",children:S.map((function(e,r){return Object(u.jsx)(d.a,{wallet:n,lang:t,pool:e},r)}))}),Object(u.jsx)("div",{className:!0})]})]})})})})))}}]);
//# sourceMappingURL=40.21a4cb7a.chunk.js.map