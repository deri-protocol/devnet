(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[23],{1204:function(e,t,a){"use strict";var c=a(5),i=(a(61),a(1288)),s=a(49),n=a(23),l=a(15),d=a(6);const r=Object(s.a)(i.a)`
  width : ${e=>e.width}px;
`,o=s.a.div`
  width : ${e=>/px$/.test(e.width)?e.width:`${e.width}px`};
  height : ${e=>/px$/.test(e.height)?e.height:`${e.height}px`};
`;t.a=function(e){const[t,a]=Object(c.useState)(Object(d.jsx)("span",{className:"loading-line"})),[i,s]=Object(c.useState)(!0),j=()=>{const{allowZero:t}=e;return"object"!==typeof e.value&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},h=e=>e&&e.replace(/\.$/,"");return Object(c.useEffect)((()=>{const{allowZero:t,wallet:c,closeShowLoadingEffectAfterLoaded:u,defaultValue:b="--",...p}=e;if(j())!t&&p.value&&/\d+\.0*[1-9]+/.test(p.value)&&0===+Object(l.bg)(p.value).toFixed(+p.decimalScale||2)&&(p.decimalScale=Object(n.d)(Math.abs(p.value))+2),p.value=Object(n.J)(p.value),p.value&&/\d+.9{6}/.test(p.value)&&(p.value=(+p.value).toFixed(5)),a(Object(d.jsx)(r,{...p,renderText:h,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0}));else if(i){const{width:t,height:c}=e;a(Object(d.jsx)(o,{className:"loading-line",width:t,height:c})),u&&s(!1)}const x=window.setTimeout((()=>{j()||a(b)}),6e4);return()=>{clearTimeout(x)}}),[e.value,e.decimalScale,e.suffix]),t}},1219:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var c,i=a(53),s=a(49),n=a(1378),l=a.n(n),d=a(144),r=a(23),o=a(1379),j=a(6),h=s.a.div(c||(c=Object(i.a)(["\n  display:",";\n  .text {\n    border-bottom : 1px dashed #93A1B8;\n    width : max-content;\n    cursor : pointer;\n    display:","\n  }\n  \n  .__react_component_tooltip.tooltip.show {\n    font-weight : "," \n  }\n"])),(function(e){return e.block}),(function(e){return e.block}),(function(e){return e.isWin?400:600}));function u(e){var t=e.text,a=e.id,c=void 0===a?String((new Date).getTime())+Math.random():a,i=e.tip,s=e.multiline,n=e.html,u=e.className,b=e.element,p=void 0===b?"":b,x=e.block,m=void 0===x?"block":x,O=e.width,v=void 0===O?"auto":O,f=e.children,g=e.tiggerEvent;return Object(j.jsxs)(h,{className:u,block:m,isWin:o.isWindows,children:[Object(j.jsx)("div",{className:"text","data-for":c,"data-tip":n?l.a.renderToString(p):i,"data-event":Object(r.y)()?"click":g,"data-html":n,children:t||f}),i&&Object(j.jsx)(d.a,{id:c,width:v,padding:"12",place:"bottom",overridePosition:function(e,t,a,c,i,s,n,l){var d=a.getBoundingClientRect(),r=c.getBoundingClientRect(),o=d.x,j=d.y,h=d.height,u=d.width;e.left,e.top;return o+r.width/2>document.documentElement.clientWidth?o-=Math.abs(u-r.width):o-(r.width-u)/2<0?o-=u:o-=(r.width-u)/2,j+h+r.height>=document.documentElement.clientHeight?j=j+h-r.height:j+=h,o<0&&(o=0),j<0&&(j=0),{top:j,left:o}},html:n,borderRadius:8,multiline:s})]})}},1503:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var c=a(1573),i=a(1553),s=a.n(i),n=a(1572),l=(a(1360),a(31)),d=(a(1504),a(6));function r({page:e,count:t,onPage:a,pageSize:i,onShowSizeChange:r}){return Object(d.jsx)("div",{className:"pagination",children:Object(d.jsx)(c.a,{selectComponentClass:n.a,onChange:a,current:e,total:t,pageSize:i,prevIcon:()=>Object(d.jsx)(l.a,{token:"arrow-left"}),nextIcon:()=>Object(d.jsx)(l.a,{token:"arrow-right"}),showSizeChanger:!0,onShowSizeChange:r,locale:s.a,pageSizeOptions:["10","20","30","50"]})})}},1504:function(e,t,a){},2182:function(e,t,a){},2416:function(e,t,a){"use strict";a.r(t);var c=a(5),i=a(46),s=a(34),n=a(1204),l=a(1219),d=a(23),r=(a(15),a(1552),a(1360),a.p+"static/media/logo-deri.d4c8b6a2.svg"),o=a(1503),j=(a(2182),a(6));t.default=Object(i.b)("wallet")(Object(i.c)((function({lang:e,wallet:t}){const[a,i]=Object(c.useState)(),[h,u]=Object(c.useState)(1),[b,p]=Object(c.useState)([]),[x,m]=Object(c.useState)([]);return Object(c.useEffect)((()=>{let e;e=1===h?b.slice(0,10*h):b.slice(10*(h-1),10*h),m(e)}),[b,h]),Object(c.useEffect)((()=>{t.isConnected()&&(async()=>{let e=await s.a.request("getUserEarnInfo",[t.detail.account,2]);if(e){let t=Math.abs(e.pnl)<1e-10?0:100*(e.pnl-1);i(t)}})(),(async()=>{let e=await s.a.request("getEarnTop50Users",[2]);if(e){let t=e.map((e=>(e.pnl=Math.abs(e.pnl)<1e-10?0:100*(e.pnl-1),e.account=Object(d.i)(e.account),e)));p(t)}})()}),[t.detail,t]),Object(j.jsxs)("div",{className:"testnet-practice",children:[Object(j.jsxs)("div",{className:"practice-info",children:[Object(j.jsx)("div",{className:"practice-title",children:e["practice-to-earn"]}),Object(j.jsx)("div",{className:"practice-time",children:"Mar. 1st 09:00 AM (UTC) \u2014 Mar. 8th 09:00 AM (UTC)"}),Object(j.jsxs)("div",{className:"practice-info-box",children:[Object(j.jsxs)("div",{className:"practice-info-left",children:[Object(j.jsx)("div",{className:"total-rewards-pool",children:Object(j.jsxs)("div",{className:"total-rewards-box",children:[Object(j.jsx)("div",{className:"deri-logo",children:Object(j.jsx)("img",{src:r,alt:"deri"})}),Object(j.jsxs)("div",{className:"total-rewards-num",children:[Object(j.jsx)("div",{className:"total-rewards-pool-title",children:e["total-rewards-pool"]}),Object(j.jsxs)("div",{className:"toatl-rewards-deri",children:[Object(j.jsx)("span",{children:"10,000"}),Object(j.jsx)("span",{className:"deri-text",children:"DERI"})]})]})]})}),Object(j.jsxs)("div",{className:"your-pnl",children:[Object(j.jsx)("span",{children:Object(j.jsx)(l.a,{text:e["your-pnl"],tip:e["your-pnl-tip"],multiline:!0})}),Object(j.jsx)("span",{className:"your-pnl-pen",children:Object(j.jsx)(n.a,{value:a,suffix:"%",decimalScale:2})})]})]}),Object(j.jsxs)("div",{className:"practice-info-right",children:[Object(j.jsxs)("div",{className:"top-pnl-list-box",children:[Object(j.jsx)("div",{className:"top-pnl-list-box-title",children:"Leaderboard"}),Object(j.jsxs)("div",{className:"top-pnl-list",children:[Object(j.jsxs)("div",{className:"top-pnl-list-title",children:[Object(j.jsx)("span",{children:e.no}),Object(j.jsx)("span",{children:e["user-addr"]}),Object(j.jsx)("span",{children:e.pnl})]}),Object(j.jsx)("div",{className:"top-pnl-list-info",children:x.map(((e,t)=>Object(j.jsxs)("div",{className:"top-pnl-list-info-box",children:[Object(j.jsx)("div",{className:"no",children:e.index}),Object(j.jsx)("div",{className:"address",children:e.account}),Object(j.jsx)("div",{className:"pnl",children:Object(j.jsx)(n.a,{value:e.pnl,suffix:"%",decimalScale:2})})]},t)))})]})]}),Object(j.jsxs)("div",{className:"page-box",children:[Object(j.jsx)(o.a,{page:h,onPage:e=>{u(e)},count:b.length,pageSize:10}),Object(j.jsxs)("div",{className:"remind",children:["* ",e["update-every-hour"]]})]})]})]})]}),Object(j.jsx)("div",{className:"detailed-rules",children:Object(j.jsx)("a",{target:"_blank",href:"https://theontoteam.medium.com/1b958bc5228a",rel:"noreferrer",children:e["detailed-rules"]})})]})})))}}]);
//# sourceMappingURL=23.4a00544c.chunk.js.map