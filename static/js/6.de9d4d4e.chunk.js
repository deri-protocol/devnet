(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[6],{1205:function(e,s,t){"use strict";var a=t(4),c=(t(63),t(1250)),i=t(50),l=t(17),r=t(10),d=t(2);const n=Object(i.a)(c.a)`
  width : ${e=>e.width}px;
`,o=i.a.div`
  width : ${e=>/px$/.test(e.width)?e.width:`${e.width}px`};
  height : ${e=>/px$/.test(e.height)?e.height:`${e.height}px`};
`;s.a=function(e){const[s,t]=Object(a.useState)(Object(d.jsx)("span",{className:"loading-line"})),[c,i]=Object(a.useState)(!0),j=()=>{const{allowZero:s}=e;return"object"!==typeof e.value&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===s},b=e=>e&&e.replace(/\.$/,"");return Object(a.useEffect)((()=>{const{allowZero:s,wallet:a,closeShowLoadingEffectAfterLoaded:m,defaultValue:h="--",...x}=e;if(j())x.decimalScale>0&&!s&&x.value&&/\d+\.0*[1-9]+/.test(x.value)&&0===+Object(r.bg)(x.value).toFixed(+x.decimalScale||2)&&(x.decimalScale=Object(l.d)(Math.abs(x.value))+2),-1===x.decimalScale&&delete x.decimalScale,x.value=Object(l.J)(x.value),x.value&&/\d+.9{6}/.test(x.value)&&(x.value=(+x.value).toFixed(5)),t(Object(d.jsx)(n,{...x,renderText:b,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0}));else if(c){const{width:s,height:a}=e;t(Object(d.jsx)(o,{className:"loading-line",width:s,height:a})),m&&i(!1)}const u=window.setTimeout((()=>{j()||t(h)}),6e4);return()=>{clearTimeout(u)}}),[e.value,e.decimalScale,e.suffix]),s}},1213:function(e,s,t){"use strict";t.d(s,"a",(function(){return j}));var a=t(50),c=t(1285),i=t.n(c),l=t(140),r=t(17),d=t(1258),n=t(2);const o=a.a.div`
  display:${e=>e.block};
  .text {
    border-bottom : 1px dashed #93A1B8;
    width : max-content;
    cursor : pointer;
    display:${e=>e.block}
  }
  
  .__react_component_tooltip.tooltip.show {
    font-weight : ${e=>e.isWin?400:600} 
  }
`;function j(e){let{text:s,id:t=String((new Date).getTime())+Math.random(),tip:a,multiline:c,html:j,className:b,element:m="",block:h="block",width:x="auto",children:u,tiggerEvent:O}=e;return Object(n.jsxs)(o,{className:b,block:h,isWin:d.isWindows,children:[Object(n.jsx)("div",{className:"text","data-for":t,"data-tip":j?i.a.renderToString(m):a,"data-event":Object(r.y)()?"click":O,"data-html":j,children:s||u}),a&&Object(n.jsx)(l.a,{id:t,width:x,padding:"12",place:"bottom",overridePosition:(e,s,t,a,c,i,l,r)=>{const d=t.getBoundingClientRect(),n=a.getBoundingClientRect();let{x:o,y:j,height:b,width:m}=d;const{left:h,top:x}=e;return o+n.width/2>document.documentElement.clientWidth?o-=Math.abs(m-n.width):o-(n.width-m)/2<0?o-=m:o-=(n.width-m)/2,j+b+n.height>=document.documentElement.clientHeight?j=j+b-n.height:j+=b,o<0&&(o=0),j<0&&(j=0),{top:j,left:o}},html:j,borderRadius:8,multiline:c})]})}},1286:function(e,s,t){"use strict";t.d(s,"a",(function(){return d}));var a=t(50),c=t(4),i=t(27),l=t(2);const r=a.a.div`
    cursor: pointer;
    width:${e=>e.width}px;
    height:${e=>e.height}px;
    display:flex;
    .tab-left.inactive{
      border-radius:0px 0px 4px 0px;
    }
    .tab-right.inactive{
      border-radius:0px 0px 0px 4px;
    }
    .tab-left.active{
      border-radius:0px 4px 0px 0px;
      ${e=>e.borderR};
    }
    .tab-right.active{
      border-radius:4px 0px 0px 0px;
      ${e=>e.borderL};
    }
    .inactive,.active{
      width:50%;
      box-sizing: content-box;
      font-size:${e=>e.size}px;
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        margin-right:${e=>e.iconMarginRight}px
      }
    }
    .inactive{
      background:${e=>e.inactiveBgColor};
      ${e=>e.borderB}
    }
    .active {
      color: ${e=>e.activeFontColor};
      background : ${e=>e.activeBgColor};
      ${e=>e.borderT};
    }
    .icon-tab{
      margin-right:20px;
      width:25px;
      height:25px;
    }
  `;function d(e){let{tabSet:s,inactiveBgColor:t,iconMarginRight:a,activeBgColor:d,icon:n,className:o,width:j=238,height:b=47,size:m=16,borderTop:h=!1,borderBottom:x=!1,divider:u=!1,activeIndex:O=0}=e,v=Object.keys(s);const[p,N]=Object(c.useState)(v[O]),[g,f]=Object(c.useState)(),[w,S]=Object(c.useState)(),[C,y]=Object(c.useState)(),[k,Q]=Object(c.useState)(),[$,D]=Object(c.useState)(),[E,P]=Object(c.useState)();return Object(c.useEffect)((()=>{const e=Object.keys(s);N(e[O])}),[s,O]),Object(c.useEffect)((()=>{const e=Object.keys(s);let t=p||e[O];if(s[t]){f(s[t].style);let e=h?`border-top:1px solid ${s[t].borderColor}`:"border-top:0",a=x?`border-bottom:1px solid ${s[t].borderColor}`:"border-bottom:0",c=u?`border-left:1px solid ${s[t].borderColor}`:"border-left:0",i=u?`border-right:1px solid ${s[t].borderColor}`:"border-right:0",l=s[t].fontColor?s[t].fontColor:"#FFFFFF";S(e),y(c),Q(a),D(i),P(l)}}),[s,p]),Object(l.jsxs)("div",{style:g,className:o,children:[Object(l.jsx)(r,{className:"tab-header",iconMarginRight:a,width:j,height:b,activeFontColor:E,activeBgColor:d,inactiveBgColor:t,size:m,borderT:w,borderB:k,borderL:C,borderR:$,children:v.map(((e,t)=>Object(l.jsxs)("div",{className:e===p?`${s[e].direction||s[e].className} active`:`${s[e].direction||s[e].className} inactive`,onClick:s=>function(e,s){N(e)}(e),children:[s[e].icon?Object(l.jsx)(i.a,{width:s[e].iconWidth,height:s[e].iconHeight,token:e===p?s[e].icon:s[e].inicon}):"","  ",e]},t)))}),s[p]?s[p].content:""]})}},1337:function(e,s,t){"use strict";t.d(s,"a",(function(){return l}));var a=t(50),c=(t(4),t(2));const i=a.a.div`
width:${e=>e.width}%;
max-width:100%;
height:10px;
background-color: #5577FD;
`;function l(e){let{startTimestamp:s,nowTimestamp:t,endTimestamp:a}=e;const l=parseInt((t-s)/(a-s)*100);return Object(c.jsx)("div",{className:"time-slider",children:Object(c.jsx)(i,{width:l})})}},2120:function(e,s,t){},2121:function(e,s,t){},2122:function(e,s,t){},2123:function(e,s,t){},2288:function(e,s,t){"use strict";t.r(s),t.d(s,"default",(function(){return N}));var a=t(4),c=(t(2120),t.p+"static/media/logo-deri.d4c8b6a2.svg"),i=(t(1337),t(47)),l=(t(2121),t(165)),r=t(10),d=t(1205),n=t(37),o=t(164),j=t(2);var b=Object(i.b)("wallet")(Object(i.c)((function(e){let{wallet:s,lang:t}=e;const[c,i]=Object(a.useState)(""),[b,m]=Object(a.useState)(""),[h,x]=Object(a.useState)(""),[u,O]=Object(a.useState)(""),[v,p]=Object(a.useState)(!0),N=Object(l.c)(),g=async()=>{if(+u.claimable>0)return;let e=new Date((new Date).toLocaleDateString()).getTime()+666e5,t=new Date((new Date).toLocaleDateString()).getTime()+648e5,a=parseInt(Date.now());if(a<e&&a>t)return void N.error("Claiming DERI is disabled during first 30 minutes of each epoch");let c=await n.a.request("claimMyStaking",[s.detail.account,3],{includeResponse:!0});if(!c||!c.success)return N.error("Claim fail"),!1;{N.success("Claim success");let e=Object(r.bg)(b).plus(Object(r.bg)(u)).toString();m(e),O(0)}};return Object(a.useEffect)((()=>{p(!(+u>0))}),[u]),Object(a.useEffect)((()=>{s.isConnected()&&(async()=>{let e=await n.a.request("getUserStakingClaimInfo",[s.detail.account,3]);if(e){let s=+e.claimed+ +e.locked+ +e.claimable;m(e.claimed),x(e.locked),O(e.claimable),i(s)}})()}),[s,s.detail]),Object(j.jsxs)("div",{className:"trade-claim",children:[Object(j.jsx)("div",{className:"rewards-claim",children:t.rewards}),Object(j.jsxs)("div",{className:"rewards-info",children:[Object(j.jsxs)("div",{className:"lg-rewards-info",children:[Object(j.jsxs)("div",{className:"my-rewards",children:[Object(j.jsx)("div",{className:"claim-title",children:t["my-rewards"]}),Object(j.jsxs)("div",{className:"claim-num",children:[Object(j.jsx)(d.a,{value:c,decimalScale:2})," DERI"]})]}),Object(j.jsxs)("div",{className:"claimed-deri",children:[Object(j.jsx)("div",{className:"claim-title",children:t["claimed-deri"]}),Object(j.jsx)("div",{className:"claim-num",children:Object(j.jsx)(d.a,{value:b,decimalScale:2})})]}),Object(j.jsxs)("div",{className:"locked-deri",children:[Object(j.jsx)("div",{className:"claim-title",children:t["lcked-deri"]}),Object(j.jsx)("div",{className:"claim-num",children:Object(j.jsx)(d.a,{value:h,decimalScale:2})})]}),Object(j.jsxs)("div",{className:"claimable-deri",children:[Object(j.jsx)("div",{className:"claim-title",children:t["claimable-deri"]}),Object(j.jsx)("div",{className:"claim-num",children:Object(j.jsx)(d.a,{value:u,decimalScale:2})})]}),Object(j.jsx)("div",{className:"cliam-button",children:Object(j.jsx)(o.a,{width:"102",height:"34",label:t.claim,disabled:v,onClick:()=>g()})})]}),Object(j.jsxs)("div",{className:"md-rewards-info",children:[Object(j.jsxs)("div",{className:"top-rewards-info",children:[Object(j.jsxs)("div",{className:"my-rewards",children:[Object(j.jsx)("div",{className:"claim-title",children:t["my-rewards"]}),Object(j.jsxs)("div",{className:"claim-num",children:[Object(j.jsx)(d.a,{value:c,decimalScale:2})," DERI"]})]}),Object(j.jsx)("div",{className:"cliam-button",children:Object(j.jsx)(o.a,{width:"102",height:"34",label:t.claim,disabled:v,onClick:()=>g()})})]}),Object(j.jsxs)("div",{className:"bottom-rewards-info",children:[Object(j.jsxs)("div",{className:"claimed-deri",children:[Object(j.jsx)("div",{className:"claim-title",children:t["claimed-deri"]}),Object(j.jsx)("div",{className:"claim-num",children:Object(j.jsx)(d.a,{value:b,decimalScale:2})})]}),Object(j.jsxs)("div",{className:"locked-deri",children:[Object(j.jsx)("div",{className:"claim-title",children:t["lcked-deri"]}),Object(j.jsx)("div",{className:"claim-num",children:Object(j.jsx)(d.a,{value:h,decimalScale:2})})]}),Object(j.jsxs)("div",{className:"claimable-deri",children:[Object(j.jsx)("div",{className:"claim-title",children:t["claimable-deri"]}),Object(j.jsx)("div",{className:"claim-num",children:Object(j.jsx)(d.a,{value:u,decimalScale:2})})]})]})]})]})]})})));function m(e){let{lang:s}=e;const[t,i]=Object(a.useState)({}),[l,r]=Object(a.useState)(0),[d,o]=Object(a.useState)("");Object(a.useEffect)((()=>{m()}),[]);const m=async()=>{let e=await n.a.request("getStakingAddressCount",[3]),s={one:!0,two:!1,three:!1,four:!1};e.addressCount>1500&&(s.two=!0),e.addressCount>3e3&&(s.three=!0),e.addressCount>5e3&&(s.four=!0),i(s)};return Object(j.jsxs)("div",{className:"staking",children:[Object(j.jsx)("div",{className:"title-timeout",children:Object(j.jsxs)("div",{className:"title-time-text",children:[Object(j.jsxs)("div",{className:"title-text",children:[Object(j.jsxs)("div",{className:"title-epoch",children:[s.title," (Epoch 3)"]}),Object(j.jsx)("div",{className:"time xs-hide"})]}),Object(j.jsxs)("div",{className:"start-end-time-epoch",children:[Object(j.jsx)("div",{className:"satrt-end-time",children:"10:00:00 AM, December 8th 2021  to 10:00:00 AM, January 5th 2022  UTC"}),Object(j.jsx)("div",{className:"epoch xs-hide"})]}),Object(j.jsxs)("div",{className:"xs-show",children:[Object(j.jsx)("div",{className:"epoch"}),Object(j.jsx)("div",{className:"time"})]})]})}),Object(j.jsx)("div",{className:"claim",children:Object(j.jsx)(b,{lang:s})}),Object(j.jsxs)("div",{className:"rewards-box",children:[Object(j.jsxs)("div",{className:"total-rewards-pool",children:[Object(j.jsx)("div",{className:"deri-logo-bg",children:Object(j.jsx)("img",{alt:"",src:c})}),Object(j.jsxs)("div",{className:"total-rewards-num",children:[Object(j.jsx)("div",{className:"total-rewards-pool-title",children:"TOTAL REWARDS POOL"}),Object(j.jsxs)("div",{className:"toatl-rewards-deri",children:[Object(j.jsx)("span",{children:"2,000,000"}),Object(j.jsx)("span",{className:"deri-text",children:"DERI"})]})]})]}),Object(j.jsxs)("div",{className:"open-lock-rewards",children:[Object(j.jsxs)("div",{className:"top-open-lock-box",children:[Object(j.jsxs)("div",{className:"lock-open open",children:[Object(j.jsx)("div",{className:"lock-logo open-logo ",children:"OPEN"}),Object(j.jsx)("div",{className:"address-num",children:"< 1500 addresses"}),Object(j.jsxs)("div",{className:"address-reward",children:[Object(j.jsx)("span",{children:"500,000 "}),"  ",Object(j.jsx)("span",{className:"deri-text",children:"DERI"})]}),Object(j.jsx)("div",{className:"percentage-reward",children:"25% UNLOCKED"})]}),Object(j.jsxs)("div",{className:t.two?"lock-open open":"lock-open",children:[Object(j.jsx)("div",{className:t.two?"lock-logo open-logo":"lock-logo ",children:t.two?"OPEN":"LOCK"}),Object(j.jsx)("div",{className:"address-num",children:"1,500 - 3000 addresses"}),Object(j.jsxs)("div",{className:"address-reward",children:[Object(j.jsx)("span",{children:"1,000,000 "}),"  ",Object(j.jsx)("span",{className:"deri-text",children:"DERI"})]}),Object(j.jsx)("div",{className:"percentage-reward",children:"50% UNLOCKED"})]})]}),Object(j.jsxs)("div",{className:"bottom-open-lock-box",children:[Object(j.jsxs)("div",{className:t.three?"lock-open open":"lock-open",children:[Object(j.jsx)("div",{className:t.three?"lock-logo open-logo":"lock-logo",children:t.three?"OPEN":"LOCK"}),Object(j.jsx)("div",{className:"address-num",children:"3000 - 5000 addresses"}),Object(j.jsxs)("div",{className:"address-reward",children:[Object(j.jsx)("span",{children:"1,500,000 "}),"  ",Object(j.jsx)("span",{className:"deri-text",children:"DERI"})]}),Object(j.jsx)("div",{className:"percentage-reward",children:"75% UNLOCKED"})]}),Object(j.jsxs)("div",{className:t.four?"lock-open open":"lock-open",children:[Object(j.jsx)("div",{className:t.four?"lock-logo open-logo":"lock-logo",children:t.four?"OPEN":"LOCK"}),Object(j.jsx)("div",{className:"address-num",children:"> 5,000 addresses"}),Object(j.jsxs)("div",{className:"address-reward",children:[Object(j.jsx)("span",{children:"2,000,000 "}),"  ",Object(j.jsx)("span",{className:"deri-text",children:"DERI"})]}),Object(j.jsx)("div",{className:"percentage-reward",children:"100% UNLOCKED"})]})]})]})]}),Object(j.jsx)("div",{className:"stage-points",children:Object(j.jsxs)("div",{className:"stage-points-info",children:[Object(j.jsxs)("div",{className:"top-stage-points",children:[Object(j.jsxs)("div",{className:"points-box",children:[Object(j.jsx)("div",{className:"stage-box",children:"1 ST"}),Object(j.jsx)("div",{className:"points-num",children:"10,000 POINTS"}),Object(j.jsx)("div",{className:"start-end-stage-time",children:"10 AM, Dec 8  - 10 AM, Dec 15 UTC"})]}),Object(j.jsxs)("div",{className:"points-box xs-last",children:[Object(j.jsx)("div",{className:"stage-box",children:"2 ND"}),Object(j.jsx)("div",{className:"points-num",children:"20,000 POINTS"}),Object(j.jsx)("div",{className:"start-end-stage-time",children:"10 AM, Dec 15  - 10 AM, Dec 22 UTC"})]})]}),Object(j.jsxs)("div",{className:"bottom-stage-points",children:[Object(j.jsxs)("div",{className:"points-box",children:[Object(j.jsx)("div",{className:"stage-box",children:"3 RD"}),Object(j.jsx)("div",{className:"points-num",children:"30,000 POINTS"}),Object(j.jsx)("div",{className:"start-end-stage-time",children:"10 AM, Dec 22  - 10 AM, Dec 29 UTC"})]}),Object(j.jsxs)("div",{className:"points-box last xs-last",children:[Object(j.jsx)("div",{className:"stage-box",children:"4 TH"}),Object(j.jsx)("div",{className:"points-num",children:"50,000 POINTS"}),Object(j.jsx)("div",{className:"start-end-stage-time",children:"10 AM, Dec 29  - 10 AM, Jan 5 UTC,2022"})]})]})]})})]})}var h=t(1286),x=t(17),u=t(1213);function O(e){let{lang:s,List:t}=e;return Object(j.jsx)("div",{className:"ponts-pnl-top-ten",children:Object(j.jsxs)("div",{className:"list-box",children:[Object(j.jsxs)("div",{className:"list-box-title",children:[Object(j.jsx)("span",{className:"no",children:s.no}),Object(j.jsx)("span",{className:"address",children:s["user-addr"]}),Object(j.jsx)("span",{className:"feespaid",children:s["fees-paid"]}),Object(j.jsx)("span",{className:"avgcoeff",children:s["avg-coeff"]}),Object(j.jsx)(u.a,{text:s.score,className:"score score-hover",tip:"estimated points based on the current weights"})]}),Object(j.jsx)("div",{className:"list-info",children:t.map(((e,s)=>Object(j.jsxs)("div",{className:"list-info-box",children:[Object(j.jsxs)("div",{className:"no",children:[1===e.no&&Object(j.jsx)("span",{className:"top-three-no",children:"1"}),2===e.no&&Object(j.jsx)("span",{className:"top-three-no",children:"2"}),3===e.no&&Object(j.jsx)("span",{className:"top-three-no",children:"3"}),1!==e.no&&2!==e.no&&3!==e.no&&e.no]}),Object(j.jsx)("div",{className:"address",children:e.userAddr}),Object(j.jsxs)("div",{className:"feespaid",children:["$ ",Object(j.jsx)(d.a,{value:e.feesPaid,decimalScale:0,thousandSeparator:!0})]}),Object(j.jsx)("div",{className:"avgcoeff",children:Object(j.jsx)(d.a,{value:e.avgCoeff,decimalScale:4,thousandSeparator:!0})}),Object(j.jsx)("div",{className:"score",children:Object(j.jsx)(d.a,{value:e.score,decimalScale:2,thousandSeparator:!0})})]},s)))})]})})}function v(e){let{lang:s,List:t}=e;return Object(j.jsx)("div",{className:"ponts-pnl-top-ten",children:Object(j.jsxs)("div",{className:"list-box",children:[Object(j.jsxs)("div",{className:"list-box-title",children:[Object(j.jsx)("span",{className:"no",children:s.no}),Object(j.jsx)("span",{className:"address",children:s["user-addr"]}),Object(j.jsx)("span",{className:"pnl",children:"PnL"})]}),Object(j.jsx)("div",{className:"list-info",children:t.map(((e,s)=>Object(j.jsxs)("div",{className:"list-info-box",children:[Object(j.jsxs)("div",{className:"no",children:[1===e.no&&Object(j.jsx)("span",{className:"top-three-no",children:"1"}),2===e.no&&Object(j.jsx)("span",{className:"top-three-no",children:"2"}),3===e.no&&Object(j.jsx)("span",{className:"top-three-no",children:"3"}),1!==e.no&&2!==e.no&&3!==e.no&&e.no]}),Object(j.jsx)("div",{className:"address",children:e.userAddr}),Object(j.jsxs)("div",{className:"pnl",children:["$ ",Object(j.jsx)(d.a,{value:e.pnl,decimalScale:2,thousandSeparator:!0})]})]},s)))})]})})}t.p,t(2122);var p=Object(i.b)("wallet")(Object(i.c)((function(e){let{wallet:s,lang:t}=e;const[i,l]=Object(a.useState)([]),[r,o]=Object(a.useState)([]),[b,m]=Object(a.useState)(""),[p,N]=Object(a.useState)(""),[g,f]=Object(a.useState)(""),[w,S]=Object(a.useState)({}),[C,y]=Object(a.useState)(""),k=async()=>{let e=await n.a.request("getUserStakingReward",[s.detail.account,3]);e&&m(e.rewardDERI)},Q=async()=>{let e=await n.a.request("getUserStakingInfo",[s.detail.account,3]);N(e.score),f(e.feePaid),y(e.coef)},$=async()=>{let e=await n.a.request("getUserStakingContribution",[s.detail.account,3]);e&&S(e)},D=async()=>{let e,s,t=await n.a.request("getStakingTop10Users",[3]);t&&(e=t.top10.map(((e,s)=>{let t={};return t.no=e.no,e.userAddr=Object(x.i)(e.userAddr),t.userAddr=e.userAddr,t.feesPaid=e.feePaid,t.avgCoeff=e.evgCoeff,t.score=e.score,t.specialRewardsA=e.specialRewardsA,t})),s=t.top10Pnl.map(((e,s)=>{let t={};return t.no=e.no,e.userAddr=Object(x.i)(e.userAddr),t.userAddr=e.userAddr,t.pnl=e.pnl,t.specialRewardsB=e.specialRewardsB,t})),o(s),l(e))};Object(a.useEffect)((()=>{let e=null;return e=window.setInterval((()=>{D()}),3e4),D(),()=>{e&&clearInterval(e)}}),[]),Object(a.useEffect)((()=>{let e=null;return e=window.setInterval((()=>{s.isConnected()&&(k(),Q(),$())}),3e4),s.isConnected()&&(k(),Q(),$()),()=>{e&&clearInterval(e)}}),[s.detail.account]);const E={"Top 10 Points":{content:Object(j.jsx)(O,{lang:t,List:i})},"Top 10 Pnl":{content:Object(j.jsx)(v,{lang:t,List:r})}};return Object(j.jsxs)("div",{className:"trading",children:[Object(j.jsx)("div",{className:"trading-left",children:Object(j.jsx)("div",{className:"top-ponts-pnl",children:Object(j.jsx)(h.a,{tabSet:E,activeBgColor:"#203B60"})})}),Object(j.jsxs)("div",{className:"trading-right",children:[Object(j.jsxs)("div",{className:"your-estimated-rewards",children:[Object(j.jsx)("div",{className:"your-estimated-rewards-title",children:Object(j.jsxs)("span",{children:[t["your-rstimated-rewards"]," "]})}),Object(j.jsx)("div",{className:"your-rewards-info",children:Object(j.jsxs)("div",{className:"your-deri",children:[Object(j.jsx)("span",{className:"deri-logo-bg",children:Object(j.jsx)("img",{alt:"",src:c})}),Object(j.jsxs)("span",{className:"span",children:[" ",b?Object(j.jsx)(d.a,{decimalScale:2,value:b,thousandSeparator:!0}):"--"," "]})]})})]}),Object(j.jsxs)("div",{className:"your-score-fee-coeff",children:[Object(j.jsx)("div",{className:"your-score-fee-coeff-title",children:"Your Trading Data"}),Object(j.jsxs)("div",{className:"your-score-fee-coeff-info",children:[Object(j.jsxs)("div",{className:"your-score",children:[Object(j.jsx)("div",{className:"your-score-title",children:Object(j.jsx)(u.a,{text:t["your-scored"],tip:"estimated points based on the current weights"})}),Object(j.jsx)("div",{className:"your-score-num",children:p?Object(j.jsx)(d.a,{value:p,decimalScale:2,thousandSeparator:!0}):"--"})]}),Object(j.jsxs)("div",{className:"your-fee",children:[Object(j.jsx)("div",{className:"your-fee-title",children:Object(j.jsx)(u.a,{text:t["your-fees-paid"],tip:"Fees paid by trading Perpetual futures in Main & Inno Zone or Everlasting Options on BSC"})}),Object(j.jsxs)("div",{className:"your-fee-num",children:["$  ",g?Object(j.jsx)(d.a,{value:g,decimalScale:2,thousandSeparator:!0}):"--"]})]}),Object(j.jsxs)("div",{className:"your-coeff",children:[Object(j.jsx)("div",{className:"your-coeff-title",children:Object(j.jsx)(u.a,{multiline:!0,text:t["your-coeff"],tip:t["boosting-factor-two"]})}),Object(j.jsx)("div",{className:"your-coeff-num",children:C?Object(j.jsx)(d.a,{value:C,decimalScale:4,thousandSeparator:!0}):"--"})]})]})]}),Object(j.jsx)("div",{className:"raise-score",children:Object(j.jsxs)("div",{className:"raise-score-box",children:[Object(j.jsxs)("div",{className:"raise-score-title-link",children:[Object(j.jsx)("div",{className:"raise-score-title",children:t["raise-score"]}),Object(j.jsxs)("div",{className:"raise-score-link",children:[Object(j.jsx)("a",{className:"fist-a",tip:t["staking-hover"],href:"https://deri.io/#/pool/v2_lite/56/future/0x26bE73Bdf8C113F3630e4B766cfE6F0670Aa09cF",children:t.staking}),Object(j.jsx)("a",{tip:t["futures-hover"],href:"https://deri.io/#/trade/futures",children:t.futures}),Object(j.jsx)("a",{tip:t["options-hover"],href:"https://deri.io/#/trade/options",children:t.options})]})]}),Object(j.jsxs)("div",{className:"raise-score-des",children:["Mining rewards are calculated based on traders' total points of the 4 quarters. In each quarter, all the participating traders share \xa0",Object(j.jsx)(u.a,{text:"this quarter's points",multiline:!0,className:"raise-hover",tip:t["the-quarter-points"]}),"\xa0per their transaction fees multiplied by the\xa0",Object(j.jsx)(u.a,{text:"boosting factors",className:"raise-hover",multiline:!0,tip:t["boosting-factor"]}),"."]})]})}),Object(j.jsx)("div",{className:"total-your-contrib",children:Object(j.jsxs)("div",{className:"your-contrib",children:[Object(j.jsxs)("div",{className:"stage",children:[Object(j.jsx)("div",{className:"stage-title"}),Object(j.jsx)("div",{className:"stage-title",children:"1st"}),Object(j.jsx)("div",{className:"stage-title",children:"2nd"}),Object(j.jsx)("div",{className:"stage-title",children:"3rd"}),Object(j.jsx)("div",{className:"stage-title",children:"4th"})]}),Object(j.jsxs)("div",{className:"total-score-box",children:[Object(j.jsx)("div",{className:"total-score",children:"Total Score"}),Object(j.jsx)("div",{className:"total-score",children:w.Q1Contrib&&"0"!==w.Q1Contrib?Object(j.jsx)(d.a,{value:w.Q1Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(j.jsx)("div",{className:"total-score",children:w.Q2Contrib&&"0"!==w.Q2Contrib?Object(j.jsx)(d.a,{value:w.Q2Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(j.jsx)("div",{className:"total-score",children:w.Q3Contrib&&"0"!==w.Q3Contrib?Object(j.jsx)(d.a,{value:w.Q3Contrib,decimalScale:0,thousandSeparator:!0}):"--"}),Object(j.jsx)("div",{className:"total-score",children:w.Q4Contrib&&"0"!==w.Q4Contrib?Object(j.jsx)(d.a,{value:w.Q4Contrib,decimalScale:0,thousandSeparator:!0}):"--"})]}),Object(j.jsxs)("div",{className:"your-score-box",children:[Object(j.jsx)("div",{className:"your-score",children:"Your Score"}),Object(j.jsx)("div",{className:"your-score",children:w.userQ1Contrib&&"0"!==w.Q1Contrib?Object(j.jsx)(d.a,{value:w.userQ1Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(j.jsx)("div",{className:"your-score",children:w.userQ2Contrib&&"0"!==w.Q2Contrib?Object(j.jsx)(d.a,{value:w.userQ2Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(j.jsx)("div",{className:"your-score",children:w.userQ3Contrib&&"0"!==w.Q3Contrib?Object(j.jsx)(d.a,{value:w.userQ3Contrib,decimalScale:2,thousandSeparator:!0}):"--"}),Object(j.jsx)("div",{className:"your-score",children:w.userQ4Contrib&&"0"!==w.Q4Contrib?Object(j.jsx)(d.a,{value:w.userQ4Contrib,decimalScale:2,thousandSeparator:!0}):"--"})]}),Object(j.jsxs)("div",{className:"your-point-box",children:[Object(j.jsx)("div",{className:"your-point",children:"Your Points"}),Object(j.jsx)("div",{className:"your-point",children:w.userQ1Point&&"0"!==w.Q1Contrib?Object(j.jsx)(u.a,{text:Object(j.jsx)(d.a,{value:w.userQ1Point,decimalScale:2,thousandSeparator:!0}),className:"point-hover",tip:w.userQ1Point?` = (${w.userQ1Contrib} / ${w.Q1Contrib}) * 10,000`:""}):"--"}),Object(j.jsx)("div",{className:"your-point",children:w.userQ2Point&&"0"!==w.Q2Contrib?Object(j.jsx)(u.a,{text:Object(j.jsx)(d.a,{value:w.userQ2Point,decimalScale:2,thousandSeparator:!0}),className:"point-hover",tip:w.userQ1Point?` = (${w.userQ2Contrib} / ${w.Q2Contrib}) * 20,000`:""}):"--"}),Object(j.jsx)("div",{className:"your-point",children:w.userQ3Point&&"0"!==w.Q3Contrib?Object(j.jsx)(u.a,{text:Object(j.jsx)(d.a,{value:w.userQ3Point,decimalScale:2,thousandSeparator:!0}),className:"point-hover",tip:w.userQ1Point?` = (${w.userQ3Contrib} / ${w.Q3Contrib}) * 30,000`:""}):"--"}),Object(j.jsx)("div",{className:"your-point",children:w.userQ4Point&&"0"!==w.Q4Contrib?Object(j.jsx)(u.a,{text:Object(j.jsx)(d.a,{value:w.userQ4Point,decimalScale:2,thousandSeparator:!0}),className:"point-hover",tip:w.userQ1Point?` = (${w.userQ4Contrib} / ${w.Q4Contrib}) * 50,000`:""}):"--"})]})]})})]})]})})));t(2123);function N(e){let{lang:s}=e;return Object(j.jsx)("div",{className:"three",children:Object(j.jsxs)("div",{className:"finished",children:[Object(j.jsx)(m,{lang:s}),Object(j.jsx)(p,{lang:s}),Object(j.jsx)("div",{className:"detailed-rules",children:Object(j.jsx)("a",{href:"https://deri-protocol.medium.com/deri-protocol-trade-to-earn-epoch-3-7b237845e4dc",children:"Detailed Rules"})})]})})}}}]);
//# sourceMappingURL=6.de9d4d4e.chunk.js.map