(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[26],{1276:function(e,t,c){"use strict";var a,n,s=c(22),i=c(192),o=c(46),l=c(6),r=c(54),d=c(9),u=(c(68),c(1360)),j=c(53),h=c(20),b=c(15),p=c(4),m=["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"],v=Object(j.a)(u.a)(a||(a=Object(r.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),O=j.a.div(n||(n=Object(r.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));t.a=function(e){var t=Object(d.useState)(Object(p.jsx)("span",{className:"loading-line"})),c=Object(l.a)(t,2),a=c[0],n=c[1],r=Object(d.useState)(!0),u=Object(l.a)(r,2),j=u[0],x=u[1],f=function(){var t=e.allowZero;return"object"!==Object(o.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},g=function(e){return e&&e.replace(/\.$/,"")};return Object(d.useEffect)((function(){var t=e.allowZero,c=(e.wallet,e.closeShowLoadingEffectAfterLoaded),a=e.defaultValue,o=void 0===a?"--":a,l=Object(i.a)(e,m);if(f())l.decimalScale>0&&l.value&&/\d+\.0*[1-9]+/.test(l.value)&&0===+Object(b.bg)(l.value).toFixed(+l.decimalScale||2)&&(l.decimalScale=Object(h.d)(Math.abs(l.value))+2),(-1===l.decimalScale||0===+l.value&&t)&&delete l.decimalScale,l.value=Object(h.L)(l.value),l.value&&/\d+.9{6}/.test(l.value)&&(l.value=(+l.value).toFixed(5)),n(Object(p.jsx)(v,Object(s.a)(Object(s.a)({},l),{},{renderText:g,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(j){var r=e.width,d=e.height;n(Object(p.jsx)(O,{className:"loading-line",width:r,height:d})),c&&x(!1)}var u=window.setTimeout((function(){f()||n(o)}),6e4);return function(){clearTimeout(u)}}),[e.value,e.decimalScale,e.suffix]),a}},1553:function(e,t,c){},2405:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(6),s=c(0),i=c.n(s),o=(c(1553),c(86)),l=c(45),r=c(9),d=c(169),u=c(170),j=(c(1276),c(39)),h=c(469),b=(c(218),c(4));t.default=Object(l.b)("wallet")(Object(l.c)((function(e){var t=e.wallet,c=e.lang,s=Object(r.useState)(),l=Object(n.a)(s,2),p=l[0],m=l[1],v=Object(r.useState)(),O=Object(n.a)(v,2),x=O[0],f=O[1],g=Object(r.useState)(0),N=Object(n.a)(g,2),w=(N[0],N[1]),k=Object(r.useState)(),y=Object(n.a)(k,2),S=(y[0],y[1]),I=Object(r.useState)(!0),E=Object(n.a)(I,2),D=(E[0],E[1]),R=Object(r.useState)(!0),T=Object(n.a)(R,2),L=T[0],C=T[1],P=Object(r.useState)(),B=Object(n.a)(P,2),A=(B[0],B[1]),M=Object(u.c)(),V=function(e){if(!L){var t=document.getElementById("I"),c=document.getElementById("II");"1"===e?t.click():c.click(),m(e)}},_=function(){var e=Object(a.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.request("getUserVotingPower",[t.detail.account]);case 2:c=e.sent,A(c);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(a.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.request("getUserVotingResult",[t.detail.account]);case 2:"0"!==(c=e.sent).option?(m(c.option),C(!0)):C(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(a.a)(i.a.mark((function e(){var t,c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.request("getVotingResult");case 2:t=e.sent,c=+t.option_1+ +t.option_2,a=+t.option_1>+t.option_2?"1":"2",S(a),w(c),f(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(a.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log([t.detail.chainId,t.detail.account,p]),e.next=3,j.a.request("vote",[t.detail.chainId,t.detail.account,p],{includeResponse:!0});case 3:e.sent.success?(_(),q(),U(),M.success("Success")):M.error("Failed");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){t.isConnected()&&(_(),q())}),[t,t.detail]),Object(r.useEffect)((function(){U()}),[]),Object(r.useEffect)((function(){t.isConnected()&&"0"!==p&&p&&!L?D(!1):D(!0)}),[t.detail,p,x,L]),Object(b.jsxs)("div",{className:"dip-box",children:[Object(b.jsxs)("div",{className:"back-governance",children:[Object(b.jsx)(o.b,{to:"/governance",children:Object(b.jsxs)("div",{className:"icon-back",children:[Object(b.jsx)("img",{alt:"",src:h.default}),Object(b.jsx)("span",{children:c.back})]})}),Object(b.jsx)("div",{className:"poll-detail",children:c["poll-detail"]})]}),Object(b.jsxs)("div",{className:"dip-box-info",children:[Object(b.jsxs)("div",{className:"poll-dip-info",children:[Object(b.jsxs)("div",{className:"dip-list-title",children:[Object(b.jsxs)("div",{className:"title-text",children:[c.dip,"-003"]}),Object(b.jsxs)("div",{className:"dip-progress",children:[Object(b.jsx)("div",{className:"executed-bg"}),"FINISHED"]})]}),Object(b.jsx)("div",{className:"dip-list-des",children:"Vote for changing the DERI burning mechanism"}),Object(b.jsx)("div",{className:"dip-time",children:"End Time: 2022 Sat. 28th May 4:00 AM UTC"})]}),Object(b.jsxs)("div",{className:"dip-option",children:[Object(b.jsxs)("div",{className:"1"===p?"option-check option-checked":"option-check",onClick:function(e){return V("1")},children:[Object(b.jsxs)("div",{className:"dip-one-option-title option-title",children:[Object(b.jsxs)("div",{className:"option-check-text",children:[Object(b.jsx)("input",{type:"radio",name:"option",value:"1",id:"I",checked:"1"===p}),Object(b.jsx)("label",{for:"I"}),Object(b.jsx)("span",{className:"option-title-text",children:"Remove from circulation Forever"})]}),Object(b.jsxs)("div",{className:"option-num",children:["1371480 ",c["deri-voting"]," (48.53%)"]})]}),Object(b.jsx)("div",{className:"option-peng-bg",style:{width:"48.53%"}})]}),Object(b.jsxs)("div",{className:"2"===p?"option-check option-checked":"option-check",onClick:function(){return V("2")},children:[Object(b.jsxs)("div",{className:"dip-one-option-title option-title",children:[Object(b.jsxs)("div",{className:"option-check-text",children:[Object(b.jsx)("input",{type:"radio",name:"option",value:"2",id:"II",checked:"2"===p}),Object(b.jsx)("label",{for:"II"}),Object(b.jsx)("span",{className:"option-title-text",children:"Burn to mining vault (the status quo)"})]}),Object(b.jsxs)("div",{className:"option-num",children:["1454640 ",c["deri-voting"]," (51.47%)"]})]}),Object(b.jsx)("div",{className:"option-peng-bg ",style:{width:"51.47%"}})]}),Object(b.jsxs)("div",{className:"vote-button",children:[Object(b.jsx)("div",{className:"your-power"}),Object(b.jsx)(d.a,{disabled:!0,label:c.vote,onClick:F,width:"286",fontSize:"18"})]})]}),Object(b.jsxs)("div",{className:"dip-option-des-rules",children:[Object(b.jsx)("div",{className:"description-close-open",children:c.description}),Object(b.jsx)("div",{className:"description-text",children:Object(b.jsxs)("div",{className:"ul-description",children:["Based on the community poll on snapshot proposed by a community member, the Deri team has placed an executive proposal (DIP 3) into the governance voting system. DERI Holders should vote for this proposal if they want to change the current DERI burning mechanism.",Object(b.jsx)("br",{}),"The option one proposes to burn to deadlock address, thus removing DERI from circulation forever.",Object(b.jsx)("br",{}),"The option two is the status quo, which is that DERI bought from the secondary market is sent to the mining vault.",Object(b.jsx)("a",{target:"_blank",href:"https://docs.deri.io/library/tokenomics#burning-mechanism",children:"Read more."})]})}),Object(b.jsxs)("div",{className:"vote-rules",children:[Object(b.jsx)("div",{className:"rules-title",children:c["voting-rules"]}),Object(b.jsxs)("div",{className:"rules-text",children:[Object(b.jsxs)("div",{className:"rules-margin",children:["Your voting power is the summation of the following balances in your wallet as of the deadline:",Object(b.jsxs)("ul",{className:"no-margin",children:[Object(b.jsx)("li",{children:"DERI balance"}),Object(b.jsx)("li",{children:"the corresponding DERI amount of your DERI-USDT SLP balance on SushiSwap"}),Object(b.jsx)("li",{children:"the corresponding DERI amount of your DERI-BUSD CLP balance on PancakeSwap"}),Object(b.jsx)("li",{children:"the corresponding DERI amount of your DLT balance in the DERI-based Inno Zone pools (BNB Chain)"})]})]}),Object(b.jsx)("div",{className:"rules-margin",children:"You can choose any of the 3 chains (ETH/BNB Chain/Aribitrum) to sign your vote by the deadline"}),Object(b.jsx)("div",{className:"rules-margin",children:"Voting Deadline: 2022 Sat. 28th May 4:00 AM UTC"}),Object(b.jsx)("div",{className:"rules-margin",children:"A snapshot will be taken at the block, at the deadline, and used to calculate the result. Please note that, if you had voted before the deadline but then had transferred your DERI, SLP, PANCAKE-LP, or DLT before the deadline, it would be the balance at the deadline that counts."})]})]}),Object(b.jsxs)("div",{className:"supplementary-notes",children:[Object(b.jsx)("div",{className:"notes-title",children:"Reference Poll Link"}),Object(b.jsx)("div",{className:"notes-text",children:Object(b.jsx)("a",{target:"_blank",href:"https://snapshot.org/#/deri.eth/proposal/0xcba17b9e16742479631df206adc3f343b9b50979bd70452bb689a3266133ad55",children:"Snapshot"})})]}),Object(b.jsxs)("div",{className:"supplementary-notes",children:[Object(b.jsx)("div",{className:"notes-title",children:"Discussion"}),Object(b.jsx)("div",{className:"notes-text",children:Object(b.jsx)("a",{target:"_blank",href:"https://discord.com/invite/kb8ZbYgp8M",children:"Discord"})})]})]})]})]})})))}}]);
//# sourceMappingURL=26.6f3ba015.chunk.js.map