(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[7],{1201:function(e,t,s){"use strict";var a=s(5),c=(s(61),s(1285)),i=s(50),r=s(25),n=s(15),l=s(6);const d=Object(i.a)(c.a)`
  width : ${e=>e.width}px;
`,o=i.a.div`
  width : ${e=>/px$/.test(e.width)?e.width:`${e.width}px`};
  height : ${e=>/px$/.test(e.height)?e.height:`${e.height}px`};
`;t.a=function(e){const[t,s]=Object(a.useState)(Object(l.jsx)("span",{className:"loading-line"})),[c,i]=Object(a.useState)(!0),j=()=>{const{allowZero:t}=e;return"object"!==typeof e.value&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},b=e=>e&&e.replace(/\.$/,"");return Object(a.useEffect)((()=>{const{allowZero:t,wallet:a,closeShowLoadingEffectAfterLoaded:u,defaultValue:m="--",...h}=e;if(j())!t&&h.value&&/\d+\.0*[1-9]+/.test(h.value)&&0===+Object(n.bg)(h.value).toFixed(+h.decimalScale||2)&&(h.decimalScale=Object(r.d)(Math.abs(h.value))+2),h.value=Object(r.J)(h.value),h.value&&/\d+.9{6}/.test(h.value)&&(h.value=(+h.value).toFixed(5)),s(Object(l.jsx)(d,{...h,renderText:b,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0}));else if(c){const{width:t,height:a}=e;s(Object(l.jsx)(o,{className:"loading-line",width:t,height:a})),u&&i(!1)}const x=window.setTimeout((()=>{j()||s(m)}),6e4);return()=>{clearTimeout(x)}}),[e.value,e.decimalScale,e.suffix]),t}},1216:function(e,t,s){"use strict";s.d(t,"a",(function(){return u}));var a,c=s(51),i=s(50),r=s(1375),n=s.n(r),l=s(143),d=s(25),o=s(1376),j=s(6),b=i.a.div(a||(a=Object(c.a)(["\n  display:",";\n  .text {\n    border-bottom : 1px dashed #93A1B8;\n    width : max-content;\n    cursor : pointer;\n    display:","\n  }\n  \n  .__react_component_tooltip.tooltip.show {\n    font-weight : "," \n  }\n"])),(function(e){return e.block}),(function(e){return e.block}),(function(e){return e.isWin?400:600}));function u(e){var t=e.text,s=e.id,a=void 0===s?String((new Date).getTime())+Math.random():s,c=e.tip,i=e.multiline,r=e.html,u=e.className,m=e.element,h=void 0===m?"":m,x=e.block,O=void 0===x?"block":x,v=e.width,p=void 0===v?"auto":v,N=e.children,f=e.tiggerEvent;return Object(j.jsxs)(b,{className:u,block:O,isWin:o.isWindows,children:[Object(j.jsx)("div",{className:"text","data-for":a,"data-tip":r?n.a.renderToString(h):c,"data-event":Object(d.y)()?"click":f,"data-html":r,children:t||N}),c&&Object(j.jsx)(l.a,{id:a,width:p,padding:"12",place:"bottom",overridePosition:function(e,t,s,a,c,i,r,n){var l=s.getBoundingClientRect(),d=a.getBoundingClientRect(),o=l.x,j=l.y,b=l.height,u=l.width;e.left,e.top;return o+d.width/2>document.documentElement.clientWidth?o-=Math.abs(u-d.width):o-(d.width-u)/2<0?o-=u:o-=(d.width-u)/2,j+b+d.height>=document.documentElement.clientHeight?j=j+b-d.height:j+=b,o<0&&(o=0),j<0&&(j=0),{top:j,left:o}},html:r,borderRadius:8,multiline:i})]})}},1347:function(e,t,s){"use strict";s.d(t,"a",(function(){return j}));var a,c=s(7),i=s(51),r=s(50),n=s(5),l=s(31),d=s(6),o=r.a.div(a||(a=Object(i.a)(["\n    cursor: pointer;\n    width:","px;\n    height:","px;\n    display:flex;\n    .tab-left.inactive{\n      border-radius:0px 0px 4px 0px;\n    }\n    .tab-right.inactive{\n      border-radius:0px 0px 0px 4px;\n    }\n    .tab-left.active{\n      border-radius:0px 4px 0px 0px;\n      ",";\n    }\n    .tab-right.active{\n      border-radius:4px 0px 0px 0px;\n      ",";\n    }\n    .inactive,.active{\n      width:50%;\n      box-sizing: content-box;\n      font-size:","px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      img{\n        margin-right:","px\n      }\n    }\n    .inactive{\n      background:",";\n      ","\n    }\n    .active {\n      color: ",";\n      background : ",";\n      ",";\n    }\n    .icon-tab{\n      margin-right:20px;\n      width:25px;\n      height:25px;\n    }\n  "])),(function(e){return e.width}),(function(e){return e.height}),(function(e){return e.borderR}),(function(e){return e.borderL}),(function(e){return e.size}),(function(e){return e.iconMarginRight}),(function(e){return e.inactiveBgColor}),(function(e){return e.borderB}),(function(e){return e.activeFontColor}),(function(e){return e.activeBgColor}),(function(e){return e.borderT}));function j(e){var t=e.tabSet,s=e.inactiveBgColor,a=e.iconMarginRight,i=e.activeBgColor,r=(e.icon,e.className),j=e.width,b=void 0===j?238:j,u=e.height,m=void 0===u?47:u,h=e.size,x=void 0===h?16:h,O=e.borderTop,v=void 0!==O&&O,p=e.borderBottom,N=void 0!==p&&p,f=e.divider,g=void 0!==f&&f,w=Object.keys(t),S=Object(n.useState)(w[0]),C=Object(c.a)(S,2),y=C[0],k=C[1],Q=Object(n.useState)(),D=Object(c.a)(Q,2),E=D[0],P=D[1],T=Object(n.useState)(),A=Object(c.a)(T,2),R=A[0],I=A[1],L=Object(n.useState)(),M=Object(c.a)(L,2),B=M[0],$=M[1],F=Object(n.useState)(),U=Object(c.a)(F,2),q=U[0],K=U[1],W=Object(n.useState)(),z=Object(c.a)(W,2),J=z[0],_=z[1],H=Object(n.useState)(),Y=Object(c.a)(H,2),Z=Y[0],V=Y[1];return Object(n.useEffect)((function(){var e=Object.keys(t);k(e[0])}),[t]),Object(n.useEffect)((function(){var e=Object.keys(t),s=y||e[0];if(t[s]){P(t[s].style);var a=v?"border-top:1px solid ".concat(t[s].borderColor):"border-top:0",c=N?"border-bottom:1px solid ".concat(t[s].borderColor):"border-bottom:0",i=g?"border-left:1px solid ".concat(t[s].borderColor):"border-left:0",r=g?"border-right:1px solid ".concat(t[s].borderColor):"border-right:0",n=t[s].fontColor?t[s].fontColor:"#FFFFFF";I(a),$(i),K(c),_(r),V(n)}}),[t,y]),Object(d.jsxs)("div",{style:E,className:r,children:[Object(d.jsx)(o,{className:"tab-header",iconMarginRight:a,width:b,height:m,activeFontColor:Z,activeBgColor:i,inactiveBgColor:s,size:x,borderT:R,borderB:q,borderL:B,borderR:J,children:w.map((function(e,s){return Object(d.jsxs)("div",{className:"".concat(t[e].direction,e===y?" active":" inactive"),onClick:function(t){return function(e,t){k(e)}(e)},children:[t[e].icon?Object(d.jsx)(l.a,{width:t[e].iconWidth,height:t[e].iconHeight,token:e===y?t[e].icon:t[e].inicon}):"","  ",e]},s)}))}),t[y]?t[y].content:""]})}},1403:function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));var a,c=s(51),i=s(50),r=(s(5),s(6)),n=i.a.div(a||(a=Object(c.a)(["\nwidth:","%;\nmax-width:100%;\nheight:10px;\nbackground-color: #5577FD;\n"])),(function(e){return e.width}));function l(e){var t=e.startTimestamp,s=e.nowTimestamp,a=e.endTimestamp,c=parseInt((s-t)/(a-t)*100);return Object(r.jsx)("div",{className:"time-slider",children:Object(r.jsx)(n,{width:c})})}},2170:function(e,t,s){},2171:function(e,t,s){},2172:function(e,t,s){},2173:function(e,t,s){},2381:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return S}));var a=s(0),c=s.n(a),i=s(2),r=s(7),n=s(5),l=(s(2170),s.p+"static/media/logo-deri.d4c8b6a2.svg"),d=(s(1403),s(44)),o=(s(2171),s(171)),j=s(15),b=s(1201),u=s(35),m=s(170),h=s(6);var x=Object(d.b)("wallet")(Object(d.c)((function(e){var t=e.wallet,s=e.lang,a=Object(n.useState)(""),l=Object(r.a)(a,2),d=l[0],x=l[1],O=Object(n.useState)(""),v=Object(r.a)(O,2),p=v[0],N=v[1],f=Object(n.useState)(""),g=Object(r.a)(f,2),w=g[0],S=g[1],C=Object(n.useState)(""),y=Object(r.a)(C,2),k=y[0],Q=y[1],D=Object(n.useState)(!0),E=Object(r.a)(D,2),P=E[0],T=E[1],A=Object(o.c)(),R=function(){var e=Object(i.a)(c.a.mark((function e(){var s,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.request("getUserStakingClaimInfo",[t.detail.account,3]);case 2:(s=e.sent)&&(a=+s.claimed+ +s.locked+ +s.claimable,N(s.claimed),S(s.locked),Q(s.claimable),x(a));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(c.a.mark((function e(){var s,a,i,r,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(+k.claimable>0)){e.next=2;break}return e.abrupt("return");case 2:if(s=new Date((new Date).toLocaleDateString()).getTime()+666e5,a=new Date((new Date).toLocaleDateString()).getTime()+648e5,!((i=parseInt(Date.now()))<s&&i>a)){e.next=8;break}return A.error("Claiming DERI is disabled during first 30 minutes of each epoch"),e.abrupt("return");case 8:return e.next=10,u.a.request("claimMyStaking",[t.detail.account,3],{includeResponse:!0});case 10:if((r=e.sent)&&r.success){e.next=16;break}return A.error("Claim fail"),e.abrupt("return",!1);case 16:A.success("Claim success"),n=Object(j.bg)(p).plus(Object(j.bg)(k)).toString(),N(n),Q(0);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){T(!(+k>0))}),[k]),Object(n.useEffect)((function(){t.isConnected()&&R()}),[t,t.detail]),Object(h.jsxs)("div",{className:"trade-claim",children:[Object(h.jsx)("div",{className:"rewards-claim",children:s.rewards}),Object(h.jsxs)("div",{className:"rewards-info",children:[Object(h.jsxs)("div",{className:"lg-rewards-info",children:[Object(h.jsxs)("div",{className:"my-rewards",children:[Object(h.jsx)("div",{className:"claim-title",children:s["my-rewards"]}),Object(h.jsxs)("div",{className:"claim-num",children:[Object(h.jsx)(b.a,{value:d,decimalScale:2})," DERI"]})]}),Object(h.jsxs)("div",{className:"claimed-deri",children:[Object(h.jsx)("div",{className:"claim-title",children:s["claimed-deri"]}),Object(h.jsx)("div",{className:"claim-num",children:Object(h.jsx)(b.a,{value:p,decimalScale:2})})]}),Object(h.jsxs)("div",{className:"locked-deri",children:[Object(h.jsx)("div",{className:"claim-title",children:s["lcked-deri"]}),Object(h.jsx)("div",{className:"claim-num",children:Object(h.jsx)(b.a,{value:w,decimalScale:2})})]}),Object(h.jsxs)("div",{className:"claimable-deri",children:[Object(h.jsx)("div",{className:"claim-title",children:s["claimable-deri"]}),Object(h.jsx)("div",{className:"claim-num",children:Object(h.jsx)(b.a,{value:k,decimalScale:2})})]}),Object(h.jsx)("div",{className:"cliam-button",children:Object(h.jsx)(m.a,{width:"102",height:"34",label:s.claim,disabled:P,onClick:function(){return I()}})})]}),Object(h.jsxs)("div",{className:"md-rewards-info",children:[Object(h.jsxs)("div",{className:"top-rewards-info",children:[Object(h.jsxs)("div",{className:"my-rewards",children:[Object(h.jsx)("div",{className:"claim-title",children:s["my-rewards"]}),Object(h.jsxs)("div",{className:"claim-num",children:[Object(h.jsx)(b.a,{value:d,decimalScale:2})," DERI"]})]}),Object(h.jsx)("div",{className:"cliam-button",children:Object(h.jsx)(m.a,{width:"102",height:"34",label:s.claim,disabled:P,onClick:function(){return I()}})})]}),Object(h.jsxs)("div",{className:"bottom-rewards-info",children:[Object(h.jsxs)("div",{className:"claimed-deri",children:[Object(h.jsx)("div",{className:"claim-title",children:s["claimed-deri"]}),Object(h.jsx)("div",{className:"claim-num",children:Object(h.jsx)(b.a,{value:p,decimalScale:2})})]}),Object(h.jsxs)("div",{className:"locked-deri",children:[Object(h.jsx)("div",{className:"claim-title",children:s["lcked-deri"]}),Object(h.jsx)("div",{className:"claim-num",children:Object(h.jsx)(b.a,{value:w,decimalScale:2})})]}),Object(h.jsxs)("div",{className:"claimable-deri",children:[Object(h.jsx)("div",{className:"claim-title",children:s["claimable-deri"]}),Object(h.jsx)("div",{className:"claim-num",children:Object(h.jsx)(b.a,{value:k,decimalScale:2})})]})]})]})]})]})})));function O(e){var t=e.lang,s=Object(n.useState)({}),a=Object(r.a)(s,2),d=a[0],o=a[1],j=Object(n.useState)(0),b=Object(r.a)(j,2),m=(b[0],b[1],Object(n.useState)("")),O=Object(r.a)(m,2);O[0],O[1];Object(n.useEffect)((function(){v()}),[]);var v=function(){var e=Object(i.a)(c.a.mark((function e(){var t,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.request("getStakingAddressCount",[3]);case 2:t=e.sent,s={one:!0,two:!1,three:!1,four:!1},t.addressCount>1500&&(s.two=!0),t.addressCount>3e3&&(s.three=!0),t.addressCount>5e3&&(s.four=!0),o(s);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"staking",children:[Object(h.jsx)("div",{className:"title-timeout",children:Object(h.jsxs)("div",{className:"title-time-text",children:[Object(h.jsxs)("div",{className:"title-text",children:[Object(h.jsxs)("div",{className:"title-epoch",children:[t.title," (Epoch 3)"]}),Object(h.jsx)("div",{className:"time xs-hide"})]}),Object(h.jsxs)("div",{className:"start-end-time-epoch",children:[Object(h.jsx)("div",{className:"satrt-end-time",children:"10:00:00 AM, December 8th 2021  to 10:00:00 AM, January 5th 2022  UTC"}),Object(h.jsx)("div",{className:"epoch xs-hide"})]}),Object(h.jsxs)("div",{className:"xs-show",children:[Object(h.jsx)("div",{className:"epoch"}),Object(h.jsx)("div",{className:"time"})]})]})}),Object(h.jsx)("div",{className:"claim",children:Object(h.jsx)(x,{lang:t})}),Object(h.jsxs)("div",{className:"rewards-box",children:[Object(h.jsxs)("div",{className:"total-rewards-pool",children:[Object(h.jsx)("div",{className:"deri-logo-bg",children:Object(h.jsx)("img",{alt:"",src:l})}),Object(h.jsxs)("div",{className:"total-rewards-num",children:[Object(h.jsx)("div",{className:"total-rewards-pool-title",children:"TOTAL REWARDS POOL"}),Object(h.jsxs)("div",{className:"toatl-rewards-deri",children:[Object(h.jsx)("span",{children:"2,000,000"}),Object(h.jsx)("span",{className:"deri-text",children:"DERI"})]})]})]}),Object(h.jsxs)("div",{className:"open-lock-rewards",children:[Object(h.jsxs)("div",{className:"top-open-lock-box",children:[Object(h.jsxs)("div",{className:"lock-open open",children:[Object(h.jsx)("div",{className:"lock-logo open-logo ",children:"OPEN"}),Object(h.jsx)("div",{className:"address-num",children:"< 1500 addresses"}),Object(h.jsxs)("div",{className:"address-reward",children:[Object(h.jsx)("span",{children:"500,000 "}),"  ",Object(h.jsx)("span",{className:"deri-text",children:"DERI"})]}),Object(h.jsx)("div",{className:"percentage-reward",children:"25% UNLOCKED"})]}),Object(h.jsxs)("div",{className:d.two?"lock-open open":"lock-open",children:[Object(h.jsx)("div",{className:d.two?"lock-logo open-logo":"lock-logo ",children:d.two?"OPEN":"LOCK"}),Object(h.jsx)("div",{className:"address-num",children:"1,500 - 3000 addresses"}),Object(h.jsxs)("div",{className:"address-reward",children:[Object(h.jsx)("span",{children:"1,000,000 "}),"  ",Object(h.jsx)("span",{className:"deri-text",children:"DERI"})]}),Object(h.jsx)("div",{className:"percentage-reward",children:"50% UNLOCKED"})]})]}),Object(h.jsxs)("div",{className:"bottom-open-lock-box",children:[Object(h.jsxs)("div",{className:d.three?"lock-open open":"lock-open",children:[Object(h.jsx)("div",{className:d.three?"lock-logo open-logo":"lock-logo",children:d.three?"OPEN":"LOCK"}),Object(h.jsx)("div",{className:"address-num",children:"3000 - 5000 addresses"}),Object(h.jsxs)("div",{className:"address-reward",children:[Object(h.jsx)("span",{children:"1,500,000 "}),"  ",Object(h.jsx)("span",{className:"deri-text",children:"DERI"})]}),Object(h.jsx)("div",{className:"percentage-reward",children:"75% UNLOCKED"})]}),Object(h.jsxs)("div",{className:d.four?"lock-open open":"lock-open",children:[Object(h.jsx)("div",{className:d.four?"lock-logo open-logo":"lock-logo",children:d.four?"OPEN":"LOCK"}),Object(h.jsx)("div",{className:"address-num",children:"> 5,000 addresses"}),Object(h.jsxs)("div",{className:"address-reward",children:[Object(h.jsx)("span",{children:"2,000,000 "}),"  ",Object(h.jsx)("span",{className:"deri-text",children:"DERI"})]}),Object(h.jsx)("div",{className:"percentage-reward",children:"100% UNLOCKED"})]})]})]})]}),Object(h.jsx)("div",{className:"stage-points",children:Object(h.jsxs)("div",{className:"stage-points-info",children:[Object(h.jsxs)("div",{className:"top-stage-points",children:[Object(h.jsxs)("div",{className:"points-box",children:[Object(h.jsx)("div",{className:"stage-box",children:"1 ST"}),Object(h.jsx)("div",{className:"points-num",children:"10,000 POINTS"}),Object(h.jsx)("div",{className:"start-end-stage-time",children:"10 AM, Dec 8  - 10 AM, Dec 15 UTC"})]}),Object(h.jsxs)("div",{className:"points-box xs-last",children:[Object(h.jsx)("div",{className:"stage-box",children:"2 ND"}),Object(h.jsx)("div",{className:"points-num",children:"20,000 POINTS"}),Object(h.jsx)("div",{className:"start-end-stage-time",children:"10 AM, Dec 15  - 10 AM, Dec 22 UTC"})]})]}),Object(h.jsxs)("div",{className:"bottom-stage-points",children:[Object(h.jsxs)("div",{className:"points-box",children:[Object(h.jsx)("div",{className:"stage-box",children:"3 RD"}),Object(h.jsx)("div",{className:"points-num",children:"30,000 POINTS"}),Object(h.jsx)("div",{className:"start-end-stage-time",children:"10 AM, Dec 22  - 10 AM, Dec 29 UTC"})]}),Object(h.jsxs)("div",{className:"points-box last xs-last",children:[Object(h.jsx)("div",{className:"stage-box",children:"4 TH"}),Object(h.jsx)("div",{className:"points-num",children:"50,000 POINTS"}),Object(h.jsx)("div",{className:"start-end-stage-time",children:"10 AM, Dec 29  - 10 AM, Jan 5 UTC,2022"})]})]})]})})]})}var v=s(1347),p=s(25),N=s(1216);function f(e){var t=e.lang,s=e.List;return Object(h.jsx)("div",{className:"ponts-pnl-top-ten",children:Object(h.jsxs)("div",{className:"list-box",children:[Object(h.jsxs)("div",{className:"list-box-title",children:[Object(h.jsx)("span",{className:"no",children:t.no}),Object(h.jsx)("span",{className:"address",children:t["user-addr"]}),Object(h.jsx)("span",{className:"feespaid",children:t["fees-paid"]}),Object(h.jsx)("span",{className:"avgcoeff",children:t["avg-coeff"]}),Object(h.jsx)(N.a,{text:t.score,className:"score score-hover",tip:"estimated points based on the current weights"})]}),Object(h.jsx)("div",{className:"list-info",children:s.map((function(e,t){return Object(h.jsxs)("div",{className:"list-info-box",children:[Object(h.jsxs)("div",{className:"no",children:[1===e.no&&Object(h.jsx)("span",{className:"top-three-no",children:"1"}),2===e.no&&Object(h.jsx)("span",{className:"top-three-no",children:"2"}),3===e.no&&Object(h.jsx)("span",{className:"top-three-no",children:"3"}),1!==e.no&&2!==e.no&&3!==e.no&&e.no]}),Object(h.jsx)("div",{className:"address",children:e.userAddr}),Object(h.jsxs)("div",{className:"feespaid",children:["$ ",Object(h.jsx)(b.a,{value:e.feesPaid,decimalScale:0,thousandSeparator:!0})]}),Object(h.jsx)("div",{className:"avgcoeff",children:Object(h.jsx)(b.a,{value:e.avgCoeff,decimalScale:4,thousandSeparator:!0})}),Object(h.jsx)("div",{className:"score",children:Object(h.jsx)(b.a,{value:e.score,decimalScale:2,thousandSeparator:!0})})]},t)}))})]})})}function g(e){var t=e.lang,s=e.List;return Object(h.jsx)("div",{className:"ponts-pnl-top-ten",children:Object(h.jsxs)("div",{className:"list-box",children:[Object(h.jsxs)("div",{className:"list-box-title",children:[Object(h.jsx)("span",{className:"no",children:t.no}),Object(h.jsx)("span",{className:"address",children:t["user-addr"]}),Object(h.jsx)("span",{className:"pnl",children:"PnL"})]}),Object(h.jsx)("div",{className:"list-info",children:s.map((function(e,t){return Object(h.jsxs)("div",{className:"list-info-box",children:[Object(h.jsxs)("div",{className:"no",children:[1===e.no&&Object(h.jsx)("span",{className:"top-three-no",children:"1"}),2===e.no&&Object(h.jsx)("span",{className:"top-three-no",children:"2"}),3===e.no&&Object(h.jsx)("span",{className:"top-three-no",children:"3"}),1!==e.no&&2!==e.no&&3!==e.no&&e.no]}),Object(h.jsx)("div",{className:"address",children:e.userAddr}),Object(h.jsxs)("div",{className:"pnl",children:["$ ",Object(h.jsx)(b.a,{value:e.pnl,decimalScale:2,thousandSeparator:!0})]})]},t)}))})]})})}s.p,s(2172);var w=Object(d.b)("wallet")(Object(d.c)((function({wallet:e,lang:t}){const[s,a]=Object(n.useState)([]),[c,i]=Object(n.useState)([]),[r,d]=Object(n.useState)(""),[o,j]=Object(n.useState)(""),[m,x]=Object(n.useState)(""),[O,w]=Object(n.useState)({}),[S,C]=Object(n.useState)(""),y=async()=>{let t=await u.a.request("getUserStakingReward",[e.detail.account,3]);t&&d(t.rewardDERI)},k=async()=>{let t=await u.a.request("getUserStakingInfo",[e.detail.account,3]);j(t.score),x(t.feePaid),C(t.coef)},Q=async()=>{let t=await u.a.request("getUserStakingContribution",[e.detail.account,3]);t&&w(t)},D=async()=>{let e,t,s=await u.a.request("getStakingTop10Users",[3]);s&&(e=s.top10.map(((e,t)=>{let s={};return s.no=e.no,e.userAddr=Object(p.i)(e.userAddr),s.userAddr=e.userAddr,s.feesPaid=e.feePaid,s.avgCoeff=e.evgCoeff,s.score=e.score,s.specialRewardsA=e.specialRewardsA,s})),t=s.top10Pnl.map(((e,t)=>{let s={};return s.no=e.no,e.userAddr=Object(p.i)(e.userAddr),s.userAddr=e.userAddr,s.pnl=e.pnl,s.specialRewardsB=e.specialRewardsB,s})),i(t),a(e))};Object(n.useEffect)((()=>{let e=null;return e=window.setInterval((()=>{D()}),3e4),D(),()=>{e&&clearInterval(e)}}),[]),Object(n.useEffect)((()=>{let t=null;return t=window.setInterval((()=>{e.isConnected()&&(y(),k(),Q())}),3e4),e.isConnected()&&(y(),k(),Q()),()=>{t&&clearInterval(t)}}),[e.detail.account]);const E={"Top 10 Points":{content:Object(h.jsx)(f,{lang:t,List:s})},"Top 10 Pnl":{content:Object(h.jsx)(g,{lang:t,List:c})}};return Object(h.jsxs)("div",{className:"trading",children:[Object(h.jsx)("div",{className:"trading-left",children:Object(h.jsx)("div",{className:"top-ponts-pnl",children:Object(h.jsx)(v.a,{tabSet:E,activeBgColor:"#203B60"})})}),Object(h.jsxs)("div",{className:"trading-right",children:[Object(h.jsxs)("div",{className:"your-estimated-rewards",children:[Object(h.jsx)("div",{className:"your-estimated-rewards-title",children:Object(h.jsxs)("span",{children:[t["your-rstimated-rewards"]," "]})}),Object(h.jsx)("div",{className:"your-rewards-info",children:Object(h.jsxs)("div",{className:"your-deri",children:[Object(h.jsx)("span",{className:"deri-logo-bg",children:Object(h.jsx)("img",{alt:"",src:l})}),Object(h.jsxs)("span",{className:"span",children:[" ",r?Object(h.jsx)(b.a,{decimalScale:2,value:r,thousandSeparator:!0}):"--"," "]})]})})]}),Object(h.jsxs)("div",{className:"your-score-fee-coeff",children:[Object(h.jsx)("div",{className:"your-score-fee-coeff-title",children:"Your Trading Data"}),Object(h.jsxs)("div",{className:"your-score-fee-coeff-info",children:[Object(h.jsxs)("div",{className:"your-score",children:[Object(h.jsx)("div",{className:"your-score-title",children:Object(h.jsx)(N.a,{text:t["your-scored"],tip:"estimated points based on the current weights"})}),Object(h.jsx)("div",{className:"your-score-num",children:o?Object(h.jsx)(b.a,{value:o,decimalScale:2,thousandSeparator:!0}):"--"})]}),Object(h.jsxs)("div",{className:"your-fee",children:[Object(h.jsx)("div",{className:"your-fee-title",children:Object(h.jsx)(N.a,{text:t["your-fees-paid"],tip:"Fees paid by trading Perpetual futures in Main & Inno Zone or Everlasting Options on BSC"})}),Object(h.jsxs)("div",{className:"your-fee-num",children:["$  ",m?Object(h.jsx)(b.a,{value:m,decimalScale:2,thousandSeparator:!0}):"--"]})]}),Object(h.jsxs)("div",{className:"your-coeff",children:[Object(h.jsx)("div",{className:"your-coeff-title",children:Object(h.jsx)(N.a,{multiline:!0,text:t["your-coeff"],tip:t["boosting-factor-two"]})}),Object(h.jsx)("div",{className:"your-coeff-num",children:S?Object(h.jsx)(b.a,{value:S,decimalScale:4,thousandSeparator:!0}):"--"})]})]})]}),Object(h.jsx)("div",{className:"raise-score",children:Object(h.jsxs)("div",{className:"raise-score-box",children:[Object(h.jsxs)("div",{className:"raise-score-title-link",children:[Object(h.jsx)("div",{className:"raise-score-title",children:t["raise-score"]}),Object(h.jsxs)("div",{className:"raise-score-link",children:[Object(h.jsx)("a",{className:"fist-a",tip:t["staking-hover"],href:"https://deri.io/#/pool/v2_lite/56/future/0x26bE73Bdf8C113F3630e4B766cfE6F0670Aa09cF",children:t.staking}),Object(h.jsx)("a",{tip:t["futures-hover"],href:"https://deri.io/#/trade/futures",children:t.futures}),Object(h.jsx)("a",{tip:t["options-hover"],href:"https://deri.io/#/trade/options",children:t.options})]})]}),Object(h.jsxs)("div",{className:"raise-score-des",children:["Mining rewards are calculated based on traders' total points of the 4 quarters. In each quarter, all the participating traders share \xa0",Object(h.jsx)(N.a,{text:"this quarter's points",multiline:!0,className:"raise-hover",tip:t["the-quarter-points"]}),"\xa0per their transaction fees multiplied by the\xa0",Object(h.jsx)(N.a,{text:"boosting factors",className:"raise-hover",multiline:!0,tip:t["boosting-factor"]}),"."]})]})}),Object(h.jsx)("div",{className:"total-your-contrib",children:Object(h.jsxs)("div",{className:"your-contrib",children:[Object(h.jsxs)("div",{className:"stage",children:[Object(h.jsx)("div",{className:"stage-title"}),Object(h.jsx)("div",{className:"stage-title",children:"1st"}),Object(h.jsx)("div",{className:"stage-title",children:"2nd"}),Object(h.jsx)("div",{className:"stage-title",children:"3rd"}),Object(h.jsx)("div",{className:"stage-title",children:"4th"})]}),Object(h.jsxs)("div",{className:"total-score-box",children:[Object(h.jsx)("div",{className:"total-score",children:"Total Score"}),Object(h.jsx)("div",{className:"total-score",children:O.Q1Contrib&&"0"!==O.Q1Contrib?Object(h.jsx)(b.a,{value:O.Q1Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(h.jsx)("div",{className:"total-score",children:O.Q2Contrib&&"0"!==O.Q2Contrib?Object(h.jsx)(b.a,{value:O.Q2Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(h.jsx)("div",{className:"total-score",children:O.Q3Contrib&&"0"!==O.Q3Contrib?Object(h.jsx)(b.a,{value:O.Q3Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(h.jsx)("div",{className:"total-score",children:O.Q4Contrib&&"0"!==O.Q4Contrib?Object(h.jsx)(b.a,{value:O.Q4Contrib,decimalScale:0,thousandSeparator:!0}):"--"})]}),Object(h.jsxs)("div",{className:"your-score-box",children:[Object(h.jsx)("div",{className:"your-score",children:"Your Score"}),Object(h.jsx)("div",{className:"your-score",children:O.userQ1Contrib&&"0"!==O.Q1Contrib?Object(h.jsx)(b.a,{value:O.userQ1Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(h.jsx)("div",{className:"your-score",children:O.userQ2Contrib&&"0"!==O.Q2Contrib?Object(h.jsx)(b.a,{value:O.userQ2Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(h.jsx)("div",{className:"your-score",children:O.userQ3Contrib&&"0"!==O.Q3Contrib?Object(h.jsx)(b.a,{value:O.userQ3Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(h.jsx)("div",{className:"your-score",children:O.userQ4Contrib&&"0"!==O.Q4Contrib?Object(h.jsx)(b.a,{value:O.userQ4Contrib,decimalScale:2,thousandSeparator:!0}):"--"})]}),Object(h.jsxs)("div",{className:"your-point-box",children:[Object(h.jsx)("div",{className:"your-point",children:"Your Points"}),Object(h.jsx)("div",{className:"your-point",children:O.userQ1Point&&"0"!==O.Q1Contrib?Object(h.jsx)(N.a,{text:Object(h.jsx)(b.a,{value:O.userQ1Point,decimalScale:2,thousandSeparator:!0}),className:"point-hover",tip:O.userQ1Point?` = (${O.userQ1Contrib} / ${O.Q1Contrib}) * 10,000`:""}):"--"}),Object(h.jsx)("div",{className:"your-point",children:O.userQ2Point&&"0"!==O.Q2Contrib?Object(h.jsx)(N.a,{text:Object(h.jsx)(b.a,{value:O.userQ2Point,decimalScale:2,thousandSeparator:!0}),className:"point-hover",tip:O.userQ1Point?` = (${O.userQ2Contrib} / ${O.Q2Contrib}) * 20,000`:""}):"--"}),Object(h.jsx)("div",{className:"your-point",children:O.userQ3Point&&"0"!==O.Q3Contrib?Object(h.jsx)(N.a,{text:Object(h.jsx)(b.a,{value:O.userQ3Point,decimalScale:2,thousandSeparator:!0}),className:"point-hover",tip:O.userQ1Point?` = (${O.userQ3Contrib} / ${O.Q3Contrib}) * 30,000`:""}):"--"}),Object(h.jsx)("div",{className:"your-point",children:O.userQ4Point&&"0"!==O.Q4Contrib?Object(h.jsx)(N.a,{text:Object(h.jsx)(b.a,{value:O.userQ4Point,decimalScale:2,thousandSeparator:!0}),className:"point-hover",tip:O.userQ1Point?` = (${O.userQ4Contrib} / ${O.Q4Contrib}) * 50,000`:""}):"--"})]})]})})]})]})})));s(2173);function S(e){var t=e.lang;return Object(h.jsx)("div",{className:"three",children:Object(h.jsxs)("div",{className:"finished",children:[Object(h.jsx)(O,{lang:t}),Object(h.jsx)(w,{lang:t}),Object(h.jsx)("div",{className:"detailed-rules",children:Object(h.jsx)("a",{href:"https://deri-protocol.medium.com/deri-protocol-trade-to-earn-epoch-3-7b237845e4dc",children:"Detailed Rules"})})]})})}}}]);
//# sourceMappingURL=7.ada8ad20.chunk.js.map