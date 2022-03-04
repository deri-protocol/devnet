(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[8],{1204:function(e,t,s){"use strict";var a=s(5),i=(s(61),s(1288)),l=s(49),n=s(23),o=s(15),c=s(6);const r=Object(l.a)(i.a)`
  width : ${e=>e.width}px;
`,d=l.a.div`
  width : ${e=>/px$/.test(e.width)?e.width:`${e.width}px`};
  height : ${e=>/px$/.test(e.height)?e.height:`${e.height}px`};
`;t.a=function(e){const[t,s]=Object(a.useState)(Object(c.jsx)("span",{className:"loading-line"})),[i,l]=Object(a.useState)(!0),b=()=>{const{allowZero:t}=e;return"object"!==typeof e.value&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},j=e=>e&&e.replace(/\.$/,"");return Object(a.useEffect)((()=>{const{allowZero:t,wallet:a,closeShowLoadingEffectAfterLoaded:m,defaultValue:v="--",...x}=e;if(b())!t&&x.value&&/\d+\.0*[1-9]+/.test(x.value)&&0===+Object(o.bg)(x.value).toFixed(+x.decimalScale||2)&&(x.decimalScale=Object(n.d)(Math.abs(x.value))+2),x.value=Object(n.J)(x.value),x.value&&/\d+.9{6}/.test(x.value)&&(x.value=(+x.value).toFixed(5)),s(Object(c.jsx)(r,{...x,renderText:j,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0}));else if(i){const{width:t,height:a}=e;s(Object(c.jsx)(d,{className:"loading-line",width:t,height:a})),m&&l(!1)}const p=window.setTimeout((()=>{b()||s(v)}),6e4);return()=>{clearTimeout(p)}}),[e.value,e.decimalScale,e.suffix]),t}},1538:function(e,t,s){"use strict";t.a=s.p+"static/media/staked.45c27f0b.svg"},1764:function(e,t,s){},1844:function(e,t,s){"use strict";s.d(t,"a",(function(){return h}));var a=s(5),i=s(50),l=s(1204),n=s(170),o=s(474),c=s(476),r=s(473),d=s(1538),b=s(477),j=s(109),m=s.n(j),v=s.p+"static/media/close.7f6b23a4.svg",x=(s(2097),s(49)),p=s(6);function h({lang:e,pool:t,wallet:s}){const j=Object(i.g)(),[x,h]=Object(a.useState)({}),[u,O]=Object(a.useState)(!1),[f,k]=Object(a.useState)(),[y,N]=Object(a.useState)(!0),w=e=>{e.target.src=b.default};Object(a.useEffect)((()=>{(async()=>{h({});let e=await t.getPoolInfo(s,t);h(e)})(),s.isConnected()&&((async()=>{let e=await t.getIsStaked(s,t);e&&O(e.isStaked)})(),(async()=>{if(t&&("v3"===t.version||"v3_lite"===t.version)){let e=await t.getVenusEarned(s,t.address);k(e)}})())}),[t,s.detail.account]),Object(a.useEffect)((()=>{let e=sessionStorage.getItem(t.address);null!==e&&e&&N(!1)}),[t]);const S=`/pool/${t.version||"v1"}/${t.chainId}/${t.type}/${t.address}`;return Object(p.jsxs)("div",{className:"card-box",children:[Object(p.jsxs)("div",{className:"v2_lite_open"===t.version?"card-list open-list":"card-list",onClick:()=>{(e=>{"v2_lite_open"!==t.version&&j.push(e)})(S)},children:[Object(p.jsxs)("div",{className:m()("card-header",{v3:t.isAllV3}),children:[Object(p.jsxs)("div",{className:"pool-network-type",children:[Object(p.jsx)("div",{className:"network-logo",children:Object(p.jsx)("img",{alt:"",src:(e=>{let t;return"56"===e||"97"===e?t=o.default:"137"===e?t=c.default:"1"===e&&(t=r.default),t})(t.chainId)})}),Object(p.jsxs)("div",{className:"pool-type-network-text",children:[Object(p.jsxs)("div",{className:"pool-type-text",children:[e[t.type]," ",e[t.zone]]}),Object(p.jsx)("div",{className:"pool-network-text",children:t.chain.toUpperCase()})]})]}),Object(p.jsxs)("div",{className:"base-token-logo",children:[t.isLp&&Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"lp-base-token-bg",children:[Object(p.jsx)("div",{className:`base-token-bg ${t.bTokens[0].bTokenSymbol}`}),Object(p.jsx)("span",{className:"lp-con",children:"+"}),Object(p.jsx)("div",{className:`base-token-bg ${t.bTokens[1].bTokenSymbol}`})]})}),!t.isLp&&"v3"!==t.version&&"v3_lite"!==t.version&&Object(p.jsx)(p.Fragment,{children:t.bTokens.map(((e,s)=>Object(p.jsx)("div",{className:"base-token-box-bg",children:Object(p.jsx)("div",{className:`base-token-bg ${e.bTokenSymbol}`,children:"v2_lite_open"===t.version&&Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("img",{alt:"",onError:w,src:`https://raw.githubusercontent.com/deri-finance/deri-open-zone/main/img/${e.bTokenSymbol}.png`})})})},s)))}),("v3"===t.version||"v3_lite"===t.version)&&Object(p.jsx)(g,{bTokens:t.bTokens})]})]}),Object(p.jsxs)("div",{className:"card-content",children:[Object(p.jsx)("div",{className:"max-apy",children:"v2_lite_open"!==t.version&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"max-apy-title",children:"v2"===t.version||"v3_lite"===t.version||"v3"===t.version?e["max-apy"]:e.apy}),Object(p.jsx)("div",{className:"max-apy-num",children:Object(p.jsx)(l.a,{value:x.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2})})]})}),Object(p.jsxs)("div",{className:"total-pool-liquidity",children:[Object(p.jsx)("div",{className:"total-liquidity-title",children:e["total-pool-liquidity"]}),Object(p.jsx)("div",{className:"total-liquidity-num",children:Object(p.jsx)(l.a,{value:x.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:"lp"===t.type?7:0})})]}),Object(p.jsxs)("div",{className:"your-deri-epoch",children:[u&&Object(p.jsxs)("div",{className:"staked-box",children:[Object(p.jsx)("img",{src:d.a,alt:""}),e.staked]}),+f>0&&("v3"===t.version||"v3_lite"===t.version)&&Object(p.jsx)("span",{className:"xvs-collectable",children:Object(p.jsxs)("div",{className:"staked-box",children:[Object(p.jsx)(l.a,{width:"50px",value:f,displayType:"text",thousandSeparator:!0,decimalScale:2})," \xa0 XVS  ",e.collectable]})})]}),Object(p.jsx)("div",{className:"stake-button",children:Object(p.jsx)(n.a,{disabled:"v2_lite_open"===t.version,className:"button",outline:!0,label:"v2_lite_open"===t.version?e.operating:e.stake})})]})]}),"v3_lite"===t.version&&y&&Object(p.jsxs)("div",{className:"new-symbol",children:[Object(p.jsx)("div",{className:"new-symbol-text",children:"New Listing : Babydoge, X2Y2"}),Object(p.jsx)("div",{className:"close-symbol",children:Object(p.jsx)("img",{src:v,alt:"close",onClick:()=>{return e=t.address,sessionStorage.setItem(e,!1),void N(!1);var e}})})]})]})}const u=x.a.div`
  @-webkit-keyframes explode {
    0% {
        transform: translateX(0px);
        -moz-transform : translateX(0px);
    }
    100% {
        transform: translateX(100px);
        -moz-transform : translateX(100px);
    }
  }

  @keyframes explode {
    0% {
        transform: translateX(0px);
        -moz-transform : translateX(0px);
    }
    100% {
        transform: translateX(100px);
        -moz-transform : translateX(100px);
    }
  }
  .base-token{
    margin-left: 0px!important;
    z-index : -2;
    visibility: hidden;
    background-color: #111e34;
    border : 1px solid #fff;
  }
  @media only screen and (max-width: 760px) {
    .base-token{
      display:none;
    }
  }
  .base-token-box-bg.explode:hover .move  {
    -webkit-animation : explode .4s .0s linear;
    -moz-animation :  explode .4s .0s linear;
    animation: explode .4s .0s linear;
    // transform : translateX(100px)!important;
    visibility: visible;    
  }
  
  .base-token-box-bg.explode:hover .base-token {
    z-index : 2!important;
  } 

`,O=x.a.div`
  position: absolute;
  transform : ${e=>`rotate(${-e.rotate}deg)`};
  width: 48px;
  height: 48px;
  display: inline-block;
  border-radius: 50%;
  .move {
    transform : translateX(100px) ${e=>`rotate(${e.rotate}deg) !important`};
  }
`,g=({bTokens:e=[]})=>{const t=360/e.length;return Object(p.jsxs)(u,{className:"v3-tokens",children:[Object(p.jsx)("div",{className:"tokens",children:e.filter(((e,t)=>t<3)).map(((e,t)=>Object(p.jsx)("div",{className:"base-token-box-bg",children:Object(p.jsx)("div",{className:`base-token-bg ${e.bTokenSymbol}`})},t)))}),Object(p.jsxs)("div",{className:"base-token-box-bg explode",children:[Object(p.jsxs)("div",{className:"base-token-bg",children:[e.length-3," +"]}),e.map(((e,s)=>{const a=t*s;return Object(p.jsx)(O,{className:"base-token",rotate:a,width:"100",children:Object(p.jsx)("div",{width:"100",rotate:a,className:`base-token-bg move ${e.bTokenSymbol}`})},s)}))]})]})}},2097:function(e,t,s){}}]);
//# sourceMappingURL=8.031a6bec.chunk.js.map