(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[23],{1204:function(e,t,a){"use strict";var c=a(5),n=(a(60),a(1288)),i=a(49),s=a(25),l=a(16),r=a(6);const o=Object(i.a)(n.a)`
  width : ${e=>e.width}px;
`,d=i.a.div`
  width : ${e=>/px$/.test(e.width)?e.width:`${e.width}px`};
  height : ${e=>/px$/.test(e.height)?e.height:`${e.height}px`};
`;t.a=function(e){const[t,a]=Object(c.useState)(Object(r.jsx)("span",{className:"loading-line"})),[n,i]=Object(c.useState)(!0),u=()=>{const{allowZero:t}=e;return"object"!==typeof e.value&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},j=e=>e&&e.replace(/\.$/,"");return Object(c.useEffect)((()=>{const{allowZero:t,wallet:c,closeShowLoadingEffectAfterLoaded:h,defaultValue:p="--",...b}=e;if(u())!t&&b.value&&/\d+\.0*[1-9]+/.test(b.value)&&0===+Object(l.bg)(b.value).toFixed(+b.decimalScale||2)&&(b.decimalScale=Object(s.d)(Math.abs(b.value))+2),b.value=Object(s.J)(b.value),b.value&&/\d+.9{6}/.test(b.value)&&(b.value=(+b.value).toFixed(5)),a(Object(r.jsx)(o,{...b,renderText:j,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0}));else if(n){const{width:t,height:c}=e;a(Object(r.jsx)(d,{className:"loading-line",width:t,height:c})),h&&i(!1)}const x=window.setTimeout((()=>{u()||a(p)}),6e4);return()=>{clearTimeout(x)}}),[e.value,e.decimalScale,e.suffix]),t}},1219:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var c,n=a(55),i=a(49),s=a(1378),l=a.n(s),r=a(142),o=a(25),d=a(1379),u=a(6),j=i.a.div(c||(c=Object(n.a)(["\n  display:",";\n  .text {\n    border-bottom : 1px dashed #93A1B8;\n    width : max-content;\n    cursor : pointer;\n    display:","\n  }\n  \n  .__react_component_tooltip.tooltip.show {\n    font-weight : "," \n  }\n"])),(function(e){return e.block}),(function(e){return e.block}),(function(e){return e.isWin?400:600}));function h(e){var t=e.text,a=e.id,c=void 0===a?String((new Date).getTime())+Math.random():a,n=e.tip,i=e.multiline,s=e.html,h=e.className,p=e.element,b=void 0===p?"":p,x=e.block,m=void 0===x?"block":x,v=e.width,O=void 0===v?"auto":v,f=e.children,g=e.tiggerEvent;return Object(u.jsxs)(j,{className:h,block:m,isWin:d.isWindows,children:[Object(u.jsx)("div",{className:"text","data-for":c,"data-tip":s?l.a.renderToString(b):n,"data-event":Object(o.y)()?"click":g,"data-html":s,children:t||f}),n&&Object(u.jsx)(r.a,{id:c,width:O,padding:"12",place:"bottom",overridePosition:function(e,t,a,c,n,i,s,l){var r=a.getBoundingClientRect(),o=c.getBoundingClientRect(),d=r.x,u=r.y,j=r.height,h=r.width;e.left,e.top;return d+o.width/2>document.documentElement.clientWidth?d-=Math.abs(h-o.width):d-(o.width-h)/2<0?d-=h:d-=(o.width-h)/2,u+j+o.height>=document.documentElement.clientHeight?u=u+j-o.height:u+=j,d<0&&(d=0),u<0&&(u=0),{top:u,left:d}},html:s,borderRadius:8,multiline:i})]})}},1503:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var c=a(1573),n=a(1553),i=a.n(n),s=a(1572),l=(a(1360),a(31)),r=(a(1504),a(6));function o({page:e,count:t,onPage:a,pageSize:n,onShowSizeChange:o}){return Object(r.jsx)("div",{className:"pagination",children:Object(r.jsx)(c.a,{selectComponentClass:s.a,onChange:a,current:e,total:t,pageSize:n,prevIcon:()=>Object(r.jsx)(l.a,{token:"arrow-left"}),nextIcon:()=>Object(r.jsx)(l.a,{token:"arrow-right"}),showSizeChanger:!0,onShowSizeChange:o,locale:i.a,pageSizeOptions:["10","20","30","50"]})})}},1504:function(e,t,a){},2182:function(e,t,a){},2416:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(2),s=a(8),l=a(5),r=a(46),o=a(35),d=a(1204),u=a(1219),j=a(25),h=(a(1552),a(1360),a.p+"static/media/logo-deri.8af5c8cc.svg"),p=a(1503),b=(a(2182),a(6));t.default=Object(r.b)("wallet")(Object(r.c)((function(e){var t=e.lang,a=e.wallet,c=Object(l.useState)(),r=Object(s.a)(c,2),x=r[0],m=r[1],v=Object(l.useState)(1),O=Object(s.a)(v,2),f=O[0],g=O[1],w=Object(l.useState)([]),N=Object(s.a)(w,2),S=N[0],y=N[1],k=Object(l.useState)([]),C=Object(s.a)(k,2),E=C[0],T=C[1],M=function(){var e=Object(i.a)(n.a.mark((function e(){var t,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.request("getUserEarnInfo",[a.detail.account,1]);case 2:(t=e.sent)&&(c=0===+t.pnl?0:100*(t.pnl-1),m(c));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(i.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.request("getEarnTop50Users",[1]);case 2:(t=e.sent)&&(a=t.map((function(e){return e.pnl=0===+e.pnl?0:100*(e.pnl-1),e.account=Object(j.i)(e.account),e})),y(a));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){var e;e=1===f?S.slice(0,10*f):S.slice(10*(f-1),10*f),T(e)}),[S,f]),Object(l.useEffect)((function(){a.isConnected()&&M(),$()}),[a.detail,a]),Object(b.jsxs)("div",{className:"testnet-practice",children:[Object(b.jsxs)("div",{className:"practice-info",children:[Object(b.jsx)("div",{className:"practice-title",children:t["practice-to-earn"]}),Object(b.jsx)("div",{className:"practice-time",children:"Mar. 1st 09:00 AM (UTC) \u2014 Mar. 8th 09:00 AM (UTC)"}),Object(b.jsxs)("div",{className:"practice-info-box",children:[Object(b.jsxs)("div",{className:"practice-info-left",children:[Object(b.jsx)("div",{className:"total-rewards-pool",children:Object(b.jsxs)("div",{className:"total-rewards-box",children:[Object(b.jsx)("div",{className:"deri-logo",children:Object(b.jsx)("img",{src:h,alt:"deri"})}),Object(b.jsxs)("div",{className:"total-rewards-num",children:[Object(b.jsx)("div",{className:"total-rewards-pool-title",children:t["total-rewards-pool"]}),Object(b.jsxs)("div",{className:"toatl-rewards-deri",children:[Object(b.jsx)("span",{children:"10,000"}),Object(b.jsx)("span",{className:"deri-text",children:"DERI"})]})]})]})}),Object(b.jsxs)("div",{className:"your-pnl",children:[Object(b.jsx)("span",{children:Object(b.jsx)(u.a,{text:t["your-pnl"],tip:t["your-pnl-tip"],multiline:!0})}),Object(b.jsx)("span",{className:"your-pnl-pen",children:Object(b.jsx)(d.a,{value:x,suffix:"%",decimalScale:2})})]})]}),Object(b.jsxs)("div",{className:"practice-info-right",children:[Object(b.jsxs)("div",{className:"top-pnl-list-box",children:[Object(b.jsx)("div",{className:"top-pnl-list-box-title",children:"Leaderboard"}),Object(b.jsxs)("div",{className:"top-pnl-list",children:[Object(b.jsxs)("div",{className:"top-pnl-list-title",children:[Object(b.jsx)("span",{children:t.no}),Object(b.jsx)("span",{children:t["user-addr"]}),Object(b.jsx)("span",{children:t.pnl})]}),Object(b.jsx)("div",{className:"top-pnl-list-info",children:E.map((function(e,t){return Object(b.jsxs)("div",{className:"top-pnl-list-info-box",children:[Object(b.jsx)("div",{className:"no",children:e.index}),Object(b.jsx)("div",{className:"address",children:e.account}),Object(b.jsx)("div",{className:"pnl",children:Object(b.jsx)(d.a,{value:e.pnl,suffix:"%",decimalScale:2})})]},t)}))})]})]}),Object(b.jsxs)("div",{className:"page-box",children:[Object(b.jsx)(p.a,{page:f,onPage:function(e){g(e)},count:S.length,pageSize:10}),Object(b.jsxs)("div",{className:"remind",children:["* ",t["update-every-hour"]]})]})]})]})]}),Object(b.jsx)("div",{className:"detailed-rules",children:Object(b.jsx)("a",{target:"_blank",href:"https://theontoteam.medium.com/1b958bc5228a",rel:"noreferrer",children:t["detailed-rules"]})})]})})))}}]);
//# sourceMappingURL=23.1b1ac88c.chunk.js.map