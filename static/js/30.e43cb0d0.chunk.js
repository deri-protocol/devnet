(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[30],{2140:function(e,s,c){},2352:function(e,s,c){"use strict";c.r(s),c.d(s,"default",(function(){return m}));var t=c(2),i=c(6),a=c(0),n=c.n(a),d=c(7),l=c.p+"static/media/down.3d69afba.svg",r=c.p+"static/media/go.1e56dece.svg",j=c.p+"static/media/check.142188b4.svg",o=c.p+"static/media/governance-discussion.7afb067b.svg",v=c.p+"static/media/pool-votes.d93e23cf.svg",b=c.p+"static/media/executive-votes.794e6e67.svg",x=c(37),p=(c(2140),c(83)),h=c(5);function m(e){var s=e.lang,c=e.getLang,a=Object(d.useState)(!0),m=Object(i.a)(a,2),O=m[0],u=m[1],g=Object(d.useState)(!0),N=Object(i.a)(g,2),f=N[0],w=N[1],k=Object(d.useState)(""),E=Object(i.a)(k,2),C=E[0],S=E[1],V=function(){var e=Object(t.a)(n.a.mark((function e(){var s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.request("getProposals",[]);case 2:(s=e.sent)&&S(s.count);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){V()}),[]),Object(h.jsx)("div",{className:"governance-box",children:Object(h.jsxs)("div",{className:"governance-box-info",children:[Object(h.jsx)("div",{className:"governance-title",children:s.title}),Object(h.jsx)("div",{className:"governance-des",children:s["governance-des"]}),Object(h.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://discord.gg/kb8ZbYgp8M",children:Object(h.jsxs)("div",{className:"active-pool-votes-num",children:[Object(h.jsx)("div",{className:C?"active-num":"no-active-num",children:C})," ",s["active-pool-votes"]]})}),Object(h.jsxs)("div",{className:"active-esectutive-votes-num",children:[Object(h.jsx)("div",{className:"no-active-num",children:"0"}),s["active-esectutive-votes"]]}),Object(h.jsx)("div",{className:"down",children:Object(h.jsx)("img",{src:l,alt:"down"})}),Object(h.jsx)("div",{className:"how-to-participate",children:s["how-to-participate"]}),Object(h.jsxs)("div",{className:"participate-step",children:[Object(h.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://discord.gg/kb8ZbYgp8M",children:Object(h.jsxs)("div",{className:"step",children:[Object(h.jsxs)("div",{className:"step-one-info",children:[Object(h.jsx)("div",{className:"hover-go",children:Object(h.jsx)("img",{src:r,alt:"go"})}),Object(h.jsx)("div",{className:"step-logo",children:Object(h.jsx)("img",{src:o,alt:"discussion"})}),Object(h.jsx)("div",{className:"step-text",children:s["governance-discussion"]})]}),Object(h.jsxs)("div",{className:"hover",children:[Object(h.jsx)("div",{className:"san"}),s["governance-discussion-hover"]]})]})}),Object(h.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://snapshot.org/#/deri.eth",children:Object(h.jsxs)("div",{className:"step",children:[Object(h.jsxs)("div",{className:"step-one-info",children:[Object(h.jsx)("div",{className:"hover-go",children:Object(h.jsx)("img",{src:r,alt:"go"})}),Object(h.jsx)("div",{className:"step-logo",children:Object(h.jsx)("img",{src:v,alt:"discussion"})}),Object(h.jsx)("div",{className:"step-text",children:s["poll-votes"]})]}),Object(h.jsxs)("div",{className:"hover",children:[Object(h.jsx)("div",{className:"san"}),s["poll-votes-hover"]]})]})}),Object(h.jsxs)("div",{className:"step",onClick:function(){!function(e){if(e){var s=document.getElementById(e);s&&s.scrollIntoView()}}("EXECUTIVEVOTES")},children:[Object(h.jsxs)("div",{className:"step-one-info",children:[Object(h.jsx)("div",{className:"hover-go"}),Object(h.jsx)("div",{className:"step-logo",children:Object(h.jsx)("img",{src:b,alt:"discussion"})}),Object(h.jsx)("div",{className:"step-text",children:s["executive-votes"]})]}),Object(h.jsxs)("div",{className:"hover",children:[Object(h.jsx)("div",{className:"san"}),s["executive-votes-hover"]]})]})]}),Object(h.jsx)("div",{id:"EXECUTIVEVOTES",className:"executive-votes",children:s["executive-votes-l"]}),Object(h.jsxs)("div",{className:"dip-list",children:[Object(h.jsxs)("div",{className:"in-progress-executed",children:[Object(h.jsxs)("div",{className:O?"in-progress check":"in-progress",onClick:function(){return u(!O)},children:[s["in-progress"],O?Object(h.jsx)("img",{src:j,alt:""}):""]}),Object(h.jsxs)("div",{className:f?"executed check":"executed",onClick:function(){return w(!f)},children:[s.executed,f?Object(h.jsx)("img",{src:j,alt:""}):""]})]}),f&&Object(h.jsxs)("div",{className:"dip-list-box",children:[Object(h.jsx)(p.b,{to:"/diptwo",children:Object(h.jsxs)("div",{className:"dip-list-box-info",children:[Object(h.jsxs)("div",{className:"dip-list-title",children:[Object(h.jsxs)("div",{className:"title-text",children:[s.dip,"-002"]}),Object(h.jsxs)("div",{className:"dip-executed",children:[Object(h.jsx)("div",{className:"executed-bg"}),"  ",s.executed]})]}),Object(h.jsx)("div",{className:"dip-list-des",children:s["dip-two-des"]}),Object(h.jsx)("div",{className:"leading-option",children:Object(h.jsxs)("span",{children:[s["leading-option"],Object(h.jsx)("span",{className:"winner-option",children:s["dip-two-winner"]}),c("dip-leading-option",{value:"1,440,582 "})]})}),Object(h.jsx)("div",{className:"dip-time",children:s["dip-two-time"]})]})}),Object(h.jsx)(p.b,{to:"/dipone",children:Object(h.jsxs)("div",{className:"dip-list-box-info",children:[Object(h.jsxs)("div",{className:"dip-list-title",children:[Object(h.jsxs)("div",{className:"title-text",children:[s.dip,"-001"]}),Object(h.jsxs)("div",{className:"dip-executed",children:[Object(h.jsx)("div",{className:"executed-bg"}),"  ",s.executed]})]}),Object(h.jsx)("div",{className:"dip-list-des",children:s["dip-one-des"]}),Object(h.jsx)("div",{className:"leading-option",children:Object(h.jsxs)("span",{children:[s["leading-option"],Object(h.jsx)("span",{className:"winner-option",children:s["dip-one-winner"]}),c("dip-leading-option",{value:"334,253"})]})}),Object(h.jsx)("div",{className:"dip-time",children:s["dip-one-time"]})]})})]})]})]})})}}}]);
//# sourceMappingURL=30.e43cb0d0.chunk.js.map