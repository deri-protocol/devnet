(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[31],{1393:function(e,t,n){"use strict";var a,c,i=n(23),s=n(321),o=n(63),l=n(9),r=n(69),d=n(8),u=(n(79),n(1435)),h=n(54),j=n(21),b=n(18),p=n(4),v=["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"],m=Object(h.a)(u.a)(a||(a=Object(r.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),O=h.a.span(c||(c=Object(r.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));t.a=function(e){var t=Object(d.useState)(Object(p.jsx)("span",{className:"loading-line"})),n=Object(l.a)(t,2),a=n[0],c=n[1],r=Object(d.useState)(!0),u=Object(l.a)(r,2),h=u[0],f=u[1],x=function(){var t=e.allowZero;return"object"!==Object(o.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},g=function(e){return e&&e.replace(/\.$/,"")};return Object(d.useEffect)((function(){var t=e.allowZero,n=(e.wallet,e.closeShowLoadingEffectAfterLoaded),a=e.defaultValue,o=void 0===a?"--":a,l=Object(s.a)(e,v);if(x())l.decimalScale>0&&l.value&&/\d+\.0*[1-9]+/.test(l.value)&&!t&&0===+Object(b.bg)(l.value).toFixed(+l.decimalScale||2)&&(l.decimalScale=Object(j.g)(Math.abs(l.value))+2),(-1===l.decimalScale||0===+l.value&&t)&&delete l.decimalScale,l.value=/e(\+|=)?/.test(l.value)?Object(j.M)(l.value):""+l.value,l.value&&/\d+.9{6}/.test(l.value)&&(l.value=(+l.value).toFixed(5)),c(Object(p.jsx)(m,Object(i.a)(Object(i.a)({},l),{},{renderText:g,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(h){var r=e.width,d=e.height;c(Object(p.jsx)(O,{className:"loading-line",width:r,height:d})),n&&f(!1)}var u=window.setTimeout((function(){x()||c(o)}),o===l.value?0:6e4);return function(){clearTimeout(u)}}),[e.value,e.decimalScale,e.suffix]),a}},1500:function(e,t,n){},2572:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(9),i=n(0),s=n.n(i),o=(n(1500),n(98)),l=n(55),r=n(8),d=n(187),u=n(189),h=(n(1393),n(44)),j=n(507),b=(n(236),n(4));t.default=Object(l.b)("wallet")(Object(l.c)((function(e){var t=e.wallet,n=e.lang,i=Object(r.useState)(),l=Object(c.a)(i,2),p=l[0],v=l[1],m=Object(r.useState)(),O=Object(c.a)(m,2),f=O[0],x=O[1],g=Object(r.useState)(0),N=Object(c.a)(g,2),w=(N[0],N[1]),k=Object(r.useState)(),I=Object(c.a)(k,2),y=(I[0],I[1]),S=Object(r.useState)(!1),D=Object(c.a)(S,2),E=D[0],R=D[1],T=Object(r.useState)(!0),C=Object(c.a)(T,2),L=(C[0],C[1]),B=Object(r.useState)(!0),P=Object(c.a)(B,2),V=P[0],A=P[1],q=Object(r.useState)(),U=Object(c.a)(q,2),_=(U[0],U[1]),M=Object(u.c)(),Z=function(e){if(!V){var t=document.getElementById("I"),n=document.getElementById("II");"1"===e?t.click():n.click(),v(e)}},F=function(){var e=Object(a.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.request("getUserVotingPower",[t.detail.account]);case 2:n=e.sent,_(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(a.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.request("getUserVotingResult",[t.detail.account]);case 2:n=e.sent,console.log("getUserVotingResult",n),"0"!==n.option?(v(n.option),A(!0)):A(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(a.a)(s.a.mark((function e(){var t,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.request("getVotingResult");case 2:t=e.sent,console.log("getVotingResult",t),n=+t.option_1+ +t.option_2,a=+t.option_1>+t.option_2?"1":"2",y(a),w(n),x(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(a.a)(s.a.mark((function e(){var n,a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.request("getVotingInfo");case 2:n=e.sent,a=(a=n.find((function(e){return+e.chainId===+t.detail.chainId}))).dedeadline+"000",(c=new Date).getTime()>=+a?R(!0):R(!1),console.log("getVotingInfo",c.getTime()>=+a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(a.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log([t.detail.chainId,t.detail.account,p]),e.next=3,h.a.request("vote",[t.detail.chainId,t.detail.account,p],{includeResponse:!0});case 3:e.sent.success?(F(),J(),H(),M.success("Success")):M.error("Failed");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){t.isConnected()&&(F(),J(),Y())}),[t,t.detail]),Object(r.useEffect)((function(){H()}),[]),Object(r.useEffect)((function(){t.isConnected()&&p&&!V&&!E?L(!1):L(!0)}),[t.detail,p,f,V]),Object(b.jsxs)("div",{className:"dip-box",children:[Object(b.jsxs)("div",{className:"back-governance",children:[Object(b.jsx)(o.b,{to:"/governance",children:Object(b.jsxs)("div",{className:"icon-back",children:[Object(b.jsx)("img",{alt:"",src:j.default}),Object(b.jsx)("span",{children:n.back})]})}),Object(b.jsx)("div",{className:"poll-detail",children:n["poll-detail"]})]}),Object(b.jsxs)("div",{className:"dip-box-info",children:[Object(b.jsxs)("div",{className:"poll-dip-info",children:[Object(b.jsxs)("div",{className:"dip-list-title",children:[Object(b.jsxs)("div",{className:"title-text",children:[n.dip,"-004"]}),Object(b.jsxs)("div",{className:"dip-progress",children:[Object(b.jsx)("div",{className:"executed-bg"}),"FINISHED"]})]}),Object(b.jsx)("div",{className:"dip-list-des",children:"Revote for changing the DERI burning mechanism"}),Object(b.jsx)("div",{className:"dip-time",children:"Target End Time: 2022 Sat. 4th June 4:00 AM UTC (subject to extension, see below for details)"})]}),Object(b.jsxs)("div",{className:"dip-option",children:[Object(b.jsxs)("div",{className:"1"===p?"option-check option-checked":"option-check",onClick:function(e){return Z("1")},children:[Object(b.jsxs)("div",{className:"dip-one-option-title option-title",children:[Object(b.jsxs)("div",{className:"option-check-text",children:[Object(b.jsx)("input",{type:"radio",name:"option",value:"1",id:"I",checked:"1"===p}),Object(b.jsx)("label",{for:"I"}),Object(b.jsx)("span",{className:"option-title-text",children:"Burn to deadlock address"})]}),Object(b.jsxs)("div",{className:"option-num",children:["2997820 ",n["deri-voting"]," (87%)"]})]}),Object(b.jsx)("div",{className:"option-peng-bg",style:{width:"87%"}})]}),Object(b.jsxs)("div",{className:"2"===p?"option-check option-checked":"option-check",onClick:function(){return Z("2")},children:[Object(b.jsxs)("div",{className:"dip-one-option-title option-title",children:[Object(b.jsxs)("div",{className:"option-check-text",children:[Object(b.jsx)("input",{type:"radio",name:"option",value:"2",id:"II",checked:"2"===p}),Object(b.jsx)("label",{for:"II"}),Object(b.jsx)("span",{className:"option-title-text",children:"Burn to mining vault (the status quo)"})]}),Object(b.jsxs)("div",{className:"option-num",children:["428618 ",n["deri-voting"]," (13%)"]})]}),Object(b.jsx)("div",{className:"option-peng-bg ",style:{width:"13%"}})]}),Object(b.jsxs)("div",{className:"vote-button",children:[Object(b.jsx)("div",{className:"your-power"}),Object(b.jsx)(d.a,{disabled:!0,label:n.vote,onClick:$,width:"286",fontSize:"18"})]})]}),Object(b.jsxs)("div",{className:"dip-option-des-rules",children:[Object(b.jsx)("div",{className:"description-close-open",children:n.description}),Object(b.jsx)("div",{className:"description-text",children:Object(b.jsxs)("div",{className:"ul-description",children:["Based on the community poll on snapshot proposed by a community member, the Deri team has placed an executive proposal (DIP 4) into the governance voting system. DERI Holders should vote for this proposal if they want to change the current DERI burning mechanism.",Object(b.jsx)("br",{}),"The option one proposes to burn to deadlock address, thus removing DERI from circulation forever.",Object(b.jsx)("br",{}),"The option two is the status quo, which is that DERI bought from the secondary market is sent to the mining vault.",Object(b.jsx)("a",{target:"_blank",href:"https://docs.deri.io/library/tokenomics#burning-mechanism",children:"Read more."})]})}),Object(b.jsxs)("div",{className:"vote-rules",children:[Object(b.jsx)("div",{className:"rules-title",children:n["voting-rules"]}),Object(b.jsxs)("div",{className:"rules-text",children:[Object(b.jsxs)("div",{className:"rules-margin",children:["Your voting power is the summation of the following balances in your wallet as of the deadline:",Object(b.jsxs)("ul",{className:"no-margin",children:[Object(b.jsx)("li",{children:"DERI balance"}),Object(b.jsx)("li",{children:"the corresponding DERI amount of your DERI-USDT SLP balance on SushiSwap"}),Object(b.jsx)("li",{children:"the corresponding DERI amount of your DERI-BUSD CLP balance on PancakeSwap"}),Object(b.jsx)("li",{children:"the corresponding DERI amount of your DLT balance in the DERI-based Inno Zone pools (BNB Chain)"})]})]}),Object(b.jsx)("div",{className:"rules-margin",children:"You can choose any of the 3 chains (ETH/BNB Chain/Aribitrum) to sign your vote by the deadline"}),Object(b.jsx)("div",{className:"rules-margin",children:"Voting Deadline: targeted at 2022 Sat. 4th June 4:00 AM UTC.  When a vote is submitted less than 15 min to the deadline, the deadline will be extended by 15 min. That is, the voting period will continue to extend until there is no vote within the last 15 min."}),Object(b.jsx)("div",{className:"rules-margin",children:"A snapshot will be taken at the block, at the deadline, and used to calculate the result. Please note that, if you had voted before the deadline but then had transferred your DERI, SLP, PANCAKE-LP, or DLT before the deadline, it would be the balance at the deadline that counts."})]})]}),Object(b.jsxs)("div",{className:"supplementary-notes",children:[Object(b.jsx)("div",{className:"notes-title",children:"Reference Poll Link"}),Object(b.jsx)("div",{className:"notes-text",children:Object(b.jsx)("a",{target:"_blank",href:"https://snapshot.org/#/deri.eth/proposal/0x7671323ba773ebc9043e339abb50faef5655597342aef1cbe23a7e9be85fd3bb",children:"Snapshot"})})]}),Object(b.jsxs)("div",{className:"supplementary-notes",children:[Object(b.jsx)("div",{className:"notes-title",children:"Discussion"}),Object(b.jsx)("div",{className:"notes-text",children:Object(b.jsx)("a",{target:"_blank",href:"https://discord.com/invite/kb8ZbYgp8M",children:"Discord"})})]})]})]})]})})))}}]);
//# sourceMappingURL=31.23546347.chunk.js.map