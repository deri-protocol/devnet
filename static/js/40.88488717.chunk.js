(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[40],{2341:function(e,s,t){},2568:function(e,s,t){"use strict";t.r(s),t.d(s,"default",(function(){return h}));var c=t(0),i=t(2),a=t(9),n=t(8),d=t.p+"static/media/down.3d69afba.svg",l=t.p+"static/media/go.1e56dece.svg",r=t.p+"static/media/check.142188b4.svg",j=t.p+"static/media/governance-discussion.7afb067b.svg",o=t(44),b=t.p+"static/media/pool-votes.d93e23cf.svg",v=t.p+"static/media/executive-votes.794e6e67.svg",p=(t(2341),t(99)),x=t(4);function h(e){var s=e.lang,t=e.getLang,h=Object(n.useState)(!0),O=Object(a.a)(h,2),m=O[0],u=O[1],g=Object(n.useState)(!0),N=Object(a.a)(g,2),f=N[0],w=N[1],E=Object(n.useState)(0),k=Object(a.a)(E,2),I=(k[0],k[1]),S=Object(n.useState)(0),_=Object(a.a)(S,2),V=(_[0],_[1]),C=Object(n.useState)(),T=Object(a.a)(C,2),D=(T[0],T[1]),F=Object(n.useState)(""),H=Object(a.a)(F,2),M=H[0],R=H[1],U=function(e){if(e){var s=document.getElementById(e);s&&s.scrollIntoView()}},y=function(){var e=Object(i.a)(Object(c.a)().mark((function e(){var s;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.request("getProposals",[]);case 2:(s=e.sent)&&R(s.count);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(i.a)(Object(c.a)().mark((function e(){var s,t,i,a;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.request("getVotingResult");case 2:s=e.sent,t=+s.option_1+ +s.option_2,console.log("getVotingResult",s),i=+s.option_1>+s.option_2?s.option_1:s.option_2,a=+s.option_1>+s.option_2?"1":"2",I(t),D(a),V(i);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){y(),q()}),[]),Object(x.jsx)("div",{className:"governance-box",children:Object(x.jsxs)("div",{className:"governance-box-info",children:[Object(x.jsx)("div",{className:"governance-title",children:s.title}),Object(x.jsx)("div",{className:"governance-des",children:s["governance-des"]}),Object(x.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://discord.gg/kb8ZbYgp8M",children:Object(x.jsxs)("div",{className:"active-pool-votes-num",children:[Object(x.jsx)("div",{className:M?"active-num":"no-active-num",children:M})," ",s["active-pool-votes"]]})}),Object(x.jsxs)("div",{className:"active-esectutive-votes-num",onClick:function(){U("EXECUTIVEVOTES")},children:[Object(x.jsx)("div",{className:"no-active-num",children:"0"}),s["active-esectutive-votes"]]}),Object(x.jsx)("div",{className:"down",children:Object(x.jsx)("img",{src:d,alt:"down"})}),Object(x.jsx)("div",{className:"how-to-participate",children:s["how-to-participate"]}),Object(x.jsxs)("div",{className:"participate-step",children:[Object(x.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://discord.gg/kb8ZbYgp8M",children:Object(x.jsxs)("div",{className:"step",children:[Object(x.jsxs)("div",{className:"step-one-info",children:[Object(x.jsx)("div",{className:"hover-go",children:Object(x.jsx)("img",{src:l,alt:"go"})}),Object(x.jsx)("div",{className:"step-logo",children:Object(x.jsx)("img",{src:j,alt:"discussion"})}),Object(x.jsx)("div",{className:"step-text",children:s["governance-discussion"]})]}),Object(x.jsxs)("div",{className:"hover",children:[Object(x.jsx)("div",{className:"san"}),s["governance-discussion-hover"]]})]})}),Object(x.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://snapshot.org/#/deri.eth",children:Object(x.jsxs)("div",{className:"step",children:[Object(x.jsxs)("div",{className:"step-one-info",children:[Object(x.jsx)("div",{className:"hover-go",children:Object(x.jsx)("img",{src:l,alt:"go"})}),Object(x.jsx)("div",{className:"step-logo",children:Object(x.jsx)("img",{src:b,alt:"discussion"})}),Object(x.jsx)("div",{className:"step-text",children:s["poll-votes"]})]}),Object(x.jsxs)("div",{className:"hover",children:[Object(x.jsx)("div",{className:"san"}),s["poll-votes-hover"]]})]})}),Object(x.jsxs)("div",{className:"step",onClick:function(){U("EXECUTIVEVOTES")},children:[Object(x.jsxs)("div",{className:"step-one-info",children:[Object(x.jsx)("div",{className:"hover-go"}),Object(x.jsx)("div",{className:"step-logo",children:Object(x.jsx)("img",{src:v,alt:"discussion"})}),Object(x.jsx)("div",{className:"step-text",children:s["executive-votes"]})]}),Object(x.jsxs)("div",{className:"hover",children:[Object(x.jsx)("div",{className:"san"}),s["executive-votes-hover"]]})]})]}),Object(x.jsx)("div",{id:"EXECUTIVEVOTES",className:"executive-votes",children:s["executive-votes-l"]}),Object(x.jsxs)("div",{className:"dip-list",children:[Object(x.jsxs)("div",{className:"in-progress-executed",children:[Object(x.jsxs)("div",{className:m?"in-progress check":"in-progress",onClick:function(){return u(!m)},children:[s["in-progress"],m?Object(x.jsx)("img",{src:r,alt:""}):""]}),Object(x.jsxs)("div",{className:f?"executed check":"executed",onClick:function(){return w(!f)},children:["FINISHED",f?Object(x.jsx)("img",{src:r,alt:""}):""]})]}),Object(x.jsxs)("div",{className:"dip-list-box",children:[f&&Object(x.jsx)(p.b,{to:"/dipfour",children:Object(x.jsxs)("div",{className:"dip-list-box-info",children:[Object(x.jsxs)("div",{className:"dip-list-title",children:[Object(x.jsxs)("div",{className:"title-text",children:[s.dip,"-004"]}),Object(x.jsxs)("div",{className:"dip-progress",children:[Object(x.jsx)("div",{className:"executed-bg"}),"  FINISHED"]})]}),Object(x.jsx)("div",{className:"dip-list-des",children:"Revote for changing the DERI burning mechanism"}),Object(x.jsx)("div",{className:"leading-option",children:Object(x.jsxs)("span",{children:[s["leading-option"],Object(x.jsx)("span",{className:"winner-option",children:"Burn to deadlock address"}),t("dip-leading-option",{value:2997820})]})}),Object(x.jsx)("div",{className:"dip-time",children:"2022 Sat. 4th June 4:00 AM UTC"})]})}),f&&Object(x.jsx)(p.b,{to:"/dipthree",children:Object(x.jsxs)("div",{className:"dip-list-box-info",children:[Object(x.jsxs)("div",{className:"dip-list-title",children:[Object(x.jsxs)("div",{className:"title-text",children:[s.dip,"-003"]}),Object(x.jsxs)("div",{className:"dip-progress",children:[Object(x.jsx)("div",{className:"executed-bg"}),"  FINISHED"]})]}),Object(x.jsx)("div",{className:"dip-list-des",children:"Vote for changing the DERI burning mechanism"}),Object(x.jsx)("div",{className:"leading-option",children:Object(x.jsxs)("span",{children:[s["leading-option"],Object(x.jsx)("span",{className:"winner-option",children:"Burn to mining vault (the status quo)"}),t("dip-leading-option",{value:1454640})]})}),Object(x.jsx)("div",{className:"dip-time",children:"2022 Sat. 28th May 4:00 AM UTC"})]})}),f&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(p.b,{to:"/diptwo",children:Object(x.jsxs)("div",{className:"dip-list-box-info",children:[Object(x.jsxs)("div",{className:"dip-list-title",children:[Object(x.jsxs)("div",{className:"title-text",children:[s.dip,"-002"]}),Object(x.jsxs)("div",{className:"dip-executed",children:[Object(x.jsx)("div",{className:"executed-bg"}),"  FINISHED"]})]}),Object(x.jsx)("div",{className:"dip-list-des",children:s["dip-two-des"]}),Object(x.jsx)("div",{className:"leading-option",children:Object(x.jsxs)("span",{children:[s["leading-option"],Object(x.jsx)("span",{className:"winner-option",children:s["dip-two-winner"]}),t("dip-leading-option",{value:"1,440,582 "})]})}),Object(x.jsx)("div",{className:"dip-time",children:s["dip-two-time"]})]})}),Object(x.jsx)(p.b,{to:"/dipone",children:Object(x.jsxs)("div",{className:"dip-list-box-info",children:[Object(x.jsxs)("div",{className:"dip-list-title",children:[Object(x.jsxs)("div",{className:"title-text",children:[s.dip,"-001"]}),Object(x.jsxs)("div",{className:"dip-executed",children:[Object(x.jsx)("div",{className:"executed-bg"}),"  FINISHED"]})]}),Object(x.jsx)("div",{className:"dip-list-des",children:s["dip-one-des"]}),Object(x.jsx)("div",{className:"leading-option",children:Object(x.jsxs)("span",{children:[s["leading-option"],Object(x.jsx)("span",{className:"winner-option",children:s["dip-one-winner"]}),t("dip-leading-option",{value:"334,253"})]})}),Object(x.jsx)("div",{className:"dip-time",children:s["dip-one-time"]})]})})]})]})]})]})})}}}]);
//# sourceMappingURL=40.88488717.chunk.js.map