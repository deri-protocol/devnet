(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[23],{1199:function(e,t,a){"use strict";var c=a(5),i=(a(61),a(1283)),s=a(50),n=a(25),l=a(15),d=a(6);const r=Object(s.a)(i.a)`
  width : ${e=>e.width}px;
`,o=s.a.div`
  width : ${e=>/px$/.test(e.width)?e.width:`${e.width}px`};
  height : ${e=>/px$/.test(e.height)?e.height:`${e.height}px`};
`;t.a=function(e){const[t,a]=Object(c.useState)(Object(d.jsx)("span",{className:"loading-line"})),[i,s]=Object(c.useState)(!0),j=()=>{const{allowZero:t}=e;return"object"!==typeof e.value&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},h=e=>e&&e.replace(/\.$/,"");return Object(c.useEffect)((()=>{const{allowZero:t,wallet:c,closeShowLoadingEffectAfterLoaded:u,defaultValue:p="--",...b}=e;if(j())!t&&b.value&&/\d+\.0*[1-9]+/.test(b.value)&&0===+Object(l.bg)(b.value).toFixed(+b.decimalScale||2)&&(b.decimalScale=Object(n.d)(Math.abs(b.value))+2),b.value=Object(n.J)(b.value),b.value&&/\d+.9{6}/.test(b.value)&&(b.value=(+b.value).toFixed(5)),a(Object(d.jsx)(r,{...b,renderText:h,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0}));else if(i){const{width:t,height:c}=e;a(Object(d.jsx)(o,{className:"loading-line",width:t,height:c})),u&&s(!1)}const x=window.setTimeout((()=>{j()||a(p)}),6e4);return()=>{clearTimeout(x)}}),[e.value,e.decimalScale,e.suffix]),t}},1214:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var c,i=a(51),s=a(50),n=a(1373),l=a.n(n),d=a(143),r=a(25),o=a(1374),j=a(6),h=s.a.div(c||(c=Object(i.a)(["\n  display:",";\n  .text {\n    border-bottom : 1px dashed #93A1B8;\n    width : max-content;\n    cursor : pointer;\n    display:","\n  }\n  \n  .__react_component_tooltip.tooltip.show {\n    font-weight : "," \n  }\n"])),(function(e){return e.block}),(function(e){return e.block}),(function(e){return e.isWin?400:600}));function u(e){var t=e.text,a=e.id,c=void 0===a?String((new Date).getTime())+Math.random():a,i=e.tip,s=e.multiline,n=e.html,u=e.className,p=e.element,b=void 0===p?"":p,x=e.block,m=void 0===x?"block":x,O=e.width,v=void 0===O?"auto":O,f=e.children,g=e.tiggerEvent;return Object(j.jsxs)(h,{className:u,block:m,isWin:o.isWindows,children:[Object(j.jsx)("div",{className:"text","data-for":c,"data-tip":n?l.a.renderToString(b):i,"data-event":Object(r.y)()?"click":g,"data-html":n,children:t||f}),i&&Object(j.jsx)(d.a,{id:c,width:v,padding:"12",place:"bottom",overridePosition:function(e,t,a,c,i,s,n,l){var d=a.getBoundingClientRect(),r=c.getBoundingClientRect(),o=d.x,j=d.y,h=d.height,u=d.width;e.left,e.top;return o+r.width/2>document.documentElement.clientWidth?o-=Math.abs(u-r.width):o-(r.width-u)/2<0?o-=u:o-=(r.width-u)/2,j+h+r.height>=document.documentElement.clientHeight?j=j+h-r.height:j+=h,o<0&&(o=0),j<0&&(j=0),{top:j,left:o}},html:n,borderRadius:8,multiline:s})]})}},1498:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var c=a(1568),i=a(1548),s=a.n(i),n=a(1567),l=(a(1355),a(31)),d=(a(1499),a(6));function r({page:e,count:t,onPage:a,pageSize:i,onShowSizeChange:r}){return Object(d.jsx)("div",{className:"pagination",children:Object(d.jsx)(c.a,{selectComponentClass:n.a,onChange:a,current:e,total:t,pageSize:i,prevIcon:()=>Object(d.jsx)(l.a,{token:"arrow-left"}),nextIcon:()=>Object(d.jsx)(l.a,{token:"arrow-right"}),showSizeChanger:!0,onShowSizeChange:r,locale:s.a,pageSizeOptions:["10","20","30","50"]})})}},1499:function(e,t,a){},2175:function(e,t,a){},2409:function(e,t,a){"use strict";a.r(t);var c=a(5),i=a(44),s=a(35),n=a(1199),l=a(1214),d=a(25),r=(a(1547),a(1355),a.p+"static/media/logo-deri.d4c8b6a2.svg"),o=a(1498),j=(a(2175),a(6));t.default=Object(i.b)("wallet")(Object(i.c)((function({lang:e,wallet:t}){const[a,i]=Object(c.useState)(),[h,u]=Object(c.useState)(1),[p,b]=Object(c.useState)([]),[x,m]=Object(c.useState)([]);return Object(c.useEffect)((()=>{let e;e=1===h?p.slice(0,10*h):p.slice(10*(h-1),10*h),m(e)}),[p,h]),Object(c.useEffect)((()=>{t.isConnected()&&(async()=>{let e=await s.a.request("getUserEarnInfo",[t.detail.account,1]);if(e){let t=0===+e.pnl?0:100*(e.pnl-1);i(t)}})(),(async()=>{let e=await s.a.request("getEarnTop50Users",[1]);if(e){let t=e.map((e=>(e.pnl=0===+e.pnl?0:100*(e.pnl-1),e.account=Object(d.i)(e.account),e)));b(t)}})()}),[t.detail,t]),Object(j.jsxs)("div",{className:"testnet-practice",children:[Object(j.jsxs)("div",{className:"practice-info",children:[Object(j.jsx)("div",{className:"practice-title",children:e["practice-to-earn"]}),Object(j.jsx)("div",{className:"practice-time",children:e.time}),Object(j.jsxs)("div",{className:"practice-info-box",children:[Object(j.jsxs)("div",{className:"practice-info-left",children:[Object(j.jsx)("div",{className:"total-rewards-pool",children:Object(j.jsxs)("div",{className:"total-rewards-box",children:[Object(j.jsx)("div",{className:"deri-logo",children:Object(j.jsx)("img",{src:r,alt:"deri"})}),Object(j.jsxs)("div",{className:"total-rewards-num",children:[Object(j.jsx)("div",{className:"total-rewards-pool-title",children:e["total-rewards-pool"]}),Object(j.jsxs)("div",{className:"toatl-rewards-deri",children:[Object(j.jsx)("span",{children:"50,000"}),Object(j.jsx)("span",{className:"deri-text",children:"DERI"})]})]})]})}),Object(j.jsxs)("div",{className:"your-pnl",children:[Object(j.jsx)("span",{children:Object(j.jsx)(l.a,{text:e["your-pnl"],tip:e["your-pnl-tip"],multiline:!0})}),Object(j.jsx)("span",{className:"your-pnl-pen",children:Object(j.jsx)(n.a,{value:a,suffix:"%",decimalScale:2})})]})]}),Object(j.jsxs)("div",{className:"practice-info-right",children:[Object(j.jsxs)("div",{className:"top-pnl-list-box",children:[Object(j.jsx)("div",{className:"top-pnl-list-box-title",children:e["top-pnl"]}),Object(j.jsxs)("div",{className:"top-pnl-list",children:[Object(j.jsxs)("div",{className:"top-pnl-list-title",children:[Object(j.jsx)("span",{children:e.no}),Object(j.jsx)("span",{children:e["user-addr"]}),Object(j.jsx)("span",{children:e.pnl})]}),Object(j.jsx)("div",{className:"top-pnl-list-info",children:x.map(((e,t)=>Object(j.jsxs)("div",{className:"top-pnl-list-info-box",children:[Object(j.jsx)("div",{className:"no",children:e.index}),Object(j.jsx)("div",{className:"address",children:e.account}),Object(j.jsx)("div",{className:"pnl",children:Object(j.jsx)(n.a,{value:e.pnl,suffix:"%",decimalScale:2})})]},t)))})]})]}),Object(j.jsxs)("div",{className:"page-box",children:[Object(j.jsx)(o.a,{page:h,onPage:e=>{u(e)},count:p.length,pageSize:10}),Object(j.jsxs)("div",{className:"remind",children:["* ",e["update-every-hour"]]})]})]})]})]}),Object(j.jsx)("div",{className:"detailed-rules",children:Object(j.jsx)("a",{target:"_blank",href:"https://deri-protocol.medium.com/practice-to-earn-4c58c36bd754",rel:"noreferrer",children:e["detailed-rules"]})})]})})))}}]);
//# sourceMappingURL=23.56bd73fa.chunk.js.map