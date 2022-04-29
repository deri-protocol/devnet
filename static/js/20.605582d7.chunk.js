(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[20],{1416:function(e,t,c){"use strict";var s=c(6),i=c(50),a=c(59),l=c.n(a),n=c(4);const o=i.a.div`
  display: inline-block;
  vertical-align: middle;
`,r=i.a.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`,d=i.a.input.attrs({type:"checkbox"})`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`,h=i.a.div`
  background: ${e=>e.checked?"#5577FD":"none"};
  border: 2px solid #5577FD;
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 4px;
  box-sizing: border-box;
  border-radius: 4px;
  cursor : pointer;
  position : relative;

  ${d}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${r} {
    visibility: ${e=>e.checked?"visible":"hidden"};
    display: flex;
    position : absolute;

  }
`;t.a=e=>{let{className:t,onChange:c,checked:i,...a}=e;const[u,j]=Object(s.useState)(i);Object(s.useEffect)((()=>{j(i)}),[i]);const b=l()("c-checkbox",{checked:u});return Object(n.jsxs)(o,{className:t,children:[Object(n.jsx)(d,{checked:u,...a,onChange:c}),Object(n.jsx)(h,{checked:u,className:b,onClick:()=>{const e=!u;j(e),c&&c(e)},children:Object(n.jsx)(r,{className:"icon",viewBox:"0 0 24 24",children:Object(n.jsx)("polyline",{points:"20 6 9 17 4 12"})})})]})}},1551:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));var s=c(1629),i=c.n(s),a=(c(1633),c(1634),c(4));function l(e){let{label:t,className:c,checked:s,onClick:l}=e;const n=e=>{l&&l(!s)};return Object(a.jsxs)("div",{className:"l-toggle",children:[Object(a.jsx)("span",{className:"label-text",children:t}),Object(a.jsx)(i.a,{onClick:n,checked:s,className:c,onChange:n,icons:!1})]})}},1628:function(e,t,c){"use strict";var s=c(50);c(6),c(4);s.a.div`
width:${e=>e.width}%;
max-width:100%;
height:10px;
background-color: #5577FD;
`},1629:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s])}return e},i=function(){function e(e,t){for(var c=0;c<t.length;c++){var s=t[c];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,c,s){return c&&e(t.prototype,c),s&&e(t,s),t}}(),a=c(6),l=u(a),n=u(c(59)),o=u(c(8)),r=u(c(1630)),d=u(c(1631)),h=c(1632);function u(e){return e&&e.__esModule?e:{default:e}}var j=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var c=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return c.handleClick=c.handleClick.bind(c),c.handleTouchStart=c.handleTouchStart.bind(c),c.handleTouchMove=c.handleTouchMove.bind(c),c.handleTouchEnd=c.handleTouchEnd.bind(c),c.handleFocus=c.handleFocus.bind(c),c.handleBlur=c.handleBlur.bind(c),c.previouslyChecked=!(!e.checked&&!e.defaultChecked),c.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},c}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){if(!this.props.disabled){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var c=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:c})}}},{key:"handleTouchStart",value:function(e){this.props.disabled||(this.startX=(0,h.pointerCoord)(e).x,this.activated=!0)}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,h.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var c=(0,h.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>c?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<c&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var c=this.props.icons;return c?void 0===c[e]?t.defaultProps.icons[e]:c[e]:null}},{key:"render",value:function(){var e=this,t=this.props,c=t.className,i=(t.icons,function(e,t){var c={};for(var s in e)t.indexOf(s)>=0||Object.prototype.hasOwnProperty.call(e,s)&&(c[s]=e[s]);return c}(t,["className","icons"])),a=(0,n.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},c);return l.default.createElement("div",{className:a,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},l.default.createElement("div",{className:"react-toggle-track"},l.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),l.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),l.default.createElement("div",{className:"react-toggle-thumb"}),l.default.createElement("input",s({},i,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(a.PureComponent);t.default=j,j.displayName="Toggle",j.defaultProps={icons:{checked:l.default.createElement(r.default,null),unchecked:l.default.createElement(d.default,null)}},j.propTypes={checked:o.default.bool,disabled:o.default.bool,defaultChecked:o.default.bool,onChange:o.default.func,onFocus:o.default.func,onBlur:o.default.func,className:o.default.string,name:o.default.string,value:o.default.string,id:o.default.string,"aria-labelledby":o.default.string,"aria-label":o.default.string,icons:o.default.oneOfType([o.default.bool,o.default.shape({checked:o.default.node,unchecked:o.default.node})])}},1630:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,i=c(6),a=(s=i)&&s.__esModule?s:{default:s};t.default=function(){return a.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},a.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},1631:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,i=c(6),a=(s=i)&&s.__esModule?s:{default:s};t.default=function(){return a.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},a.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},1632:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var c=t[0];return{x:c.clientX,y:c.clientY}}var s=e.pageX;if(void 0!==s)return{x:s,y:e.pageY}}return{x:0,y:0}}},1633:function(e,t,c){},1634:function(e,t,c){},1635:function(e,t,c){"use strict";c.d(t,"a",(function(){return d}));var s=c(54),i=c(19),a=c(1553),l=c(1534),n=(c(1637),c(164)),o=c(4);const r=[{selector:".mining-claim",content:()=>Object(o.jsx)("div",{className:"step-one",children:"The old DERI farm is moved here"})},{selector:".showGuide",content:()=>Object(o.jsx)("div",{className:"step-one",children:"Click on the pool you\u2019ve staked"})},{selector:".deri-current-epoch",content:()=>Object(o.jsx)("div",{className:"step-one",children:"The new DERI reward is shown here"})}];function d(e){let{poolClaim:t,isThree:c=!1}=e;const{setIsOpen:d}=Object(l.b)(),h=Object(s.g)();return Object(o.jsx)("div",{children:t&&Object(o.jsx)(l.a,{steps:r,startAt:c?2:0,defaultOpen:t,components:{Close:e=>{let{onClick:t}=e;return Object(o.jsx)("img",{onClick:()=>{t(),Object(i.G)("poolClaim","true"),sessionStorage.setItem("poolGuideThree","0")},className:"close-modal",src:n.default})},Badge:e=>{let{children:t}=e;return Object(o.jsxs)("div",{className:"step-num",children:[Object(o.jsx)("span",{className:"now-step",children:t}),"  / 3"]})}},className:"pool-guide",disableFocusLock:!1,disableInteraction:!0,onClickMask:()=>{d(!0)},afterOpen:e=>Object(i.y)()?null:Object(a.a)(e),beforeClose:e=>Object(i.y)()?null:Object(a.b)(e),scrollSmooth:!0,nextButton:e=>{let{currentStep:t,stepsLength:c,setIsOpen:s,setCurrentStep:a}=e;const l=t===c-1;return Object(o.jsx)("button",{className:"next",onClick:()=>{if(l)s(!1),Object(i.G)("poolClaim","true"),sessionStorage.setItem("poolGuideThree","0");else{if(1===t){let e="/pool/v3_lite/97/future,power/0xAADA94FcDcD7FCd7488C8DFc8eddaac81d7F71EE";h.push(e),sessionStorage.setItem("poolGuideThree","3")}a((e=>e===r.length-1?0:e+1))}},children:l?"OK":"NEXT"})},prevButton:e=>{let{currentStep:t,stepsLength:c,setIsOpen:s,setCurrentStep:i}=e;return Object(o.jsx)(o.Fragment,{})}})})}},1637:function(e,t,c){},2058:function(e,t,c){},2060:function(e,t,c){},2329:function(e,t,c){"use strict";c.r(t);var s=c(6),i=c(46),a=c(162),l=(c(1628),c(167)),n=c(163),o=(c(1214),c(37)),r=c(19),d=(c(2058),c(4));function h(e){let{lang:t,getLang:c,poolShow:i=!0,wallet:h={}}=e;const[u,j]=Object(s.useState)(""),[b,p]=Object(s.useState)(0),f=Object(n.c)(),[m,v]=Object(s.useState)(0),[O,x]=Object(s.useState)(0),[k,g]=Object(s.useState)({}),[y,N]=Object(s.useState)(!1),[C,w]=Object(s.useState)(""),I=Object(l.a)(k.chainId);Object(s.useEffect)((()=>{let e=null;return e=window.setInterval((()=>{let e=28800,c=parseInt(Date.now()/1e3),s=parseInt(c/e)*e,i=s+e-c,a=parseInt(i/3600),l=parseInt(i%3600/60),n=parseInt(i%60);p(s),v(s+e),x(c),j(`${a} ${t.h} ${l} ${t.m} ${n} ${t.s}`)}),1e3),()=>{e&&clearInterval(e)}}),[]);const S=async()=>{if(h.isConnected()){const e=await o.a.request("getUserInfoAll",[h.detail.account]),t=(+e.total).toFixed(2),c=e.valid?(+e.amount).toFixed(2):0,s=e.lp,i=(+e.trade).toFixed(2),a=e.chainId;g({claimed:t,unclaimed:c,harvestDeriLp:s,harvestDeriTrade:i,chainId:a})}},F=async()=>{if(h.isConnected()){let e=await o.a.request("getUserFirstClaimInfo",[h.detail.account]);if(e.first_timestamp){let c=new Date(1e3*e.first_timestamp),s=c.getFullYear(),i=c.getMonth()+1;i=(e=>{let c;switch(e){case 1:c=t.jan;break;case 2:c=t.feb;break;case 3:c=t.mar;break;case 4:c=t.apr;break;case 5:c=t.may;break;case 6:c=t.jun;break;case 7:c=t.jul;break;case 8:c=t.aug;break;case 9:c=t.sep;break;case 10:c=t.oct;break;case 11:c=t.nov;break;case 12:c=t.dec}return c})(i);let a=c.getDate();w(`${i} ${a}, ${s}`)}else w("")}};return Object(s.useEffect)((()=>{let e=window.setInterval(S,18e4);return S(),F(),()=>clearInterval(e)}),[h.detail.account]),Object(d.jsx)("div",{className:"mining-claim",children:Object(d.jsxs)("div",{className:"mining-claim-info",children:[Object(d.jsxs)("div",{className:"deri-num-slider",children:[Object(d.jsx)("div",{className:"deri-claim-time",children:t["old-deri-farms"]}),k.unclaimed>0&&Object(d.jsx)("div",{className:"deri-claim-text",children:c("old-pool-deri",{num:y?0:k.unclaimed?k.unclaimed:0})})]}),i&&Object(d.jsx)("div",{className:"cliam-button",children:Object(d.jsx)(a.a,{icon:"ClaimDeri",fontWeight:"bold",label:t["claim-all"],onClick:async()=>{if(h.isConnected()){await(async()=>{if(void 0===I.name)return void f.error(`${t["wrong-network"]}`);if(!Object(r.f)(h.detail.chainId,k.chainId))return void f.error(`${t["your-deri-is-on"]} ${I.name} ${t["connect-to"]} ${I.name} ${t["to-claim"]}`);if(0===+k.unclaimed)return void f.error(t["no-deri-to-claim-yet"]);if(parseInt(Date.now()/1e3)%28800<1800)return void f.error(t["claiming-DERI-is-disabled-during-first-30-minutes-of-each-epoch"]);let e=await o.a.request("mintDToken",[h.detail.chainId,h.detail.account],{includeResponse:!0,write:!0,subject:t["claim-deri-title"]});return e.success?(f.success(t["claim-deri-reward"],{timeout:8e3,isTransaction:!0,transactionHash:e.response.data.transactionHash,link:`${h.blockExploreUrl}/tx/${e.response.data.transactionHash}`,title:t["claim-reward-executed"]}),!0):(""===e.response.transactionHash||f.error(`${t["transaction-failed"]} : ${e.response.error}`,{timeout:3e5,isTransaction:!0,transactionHash:e.response.transactionHash,link:`${h.blockExploreUrl}/tx/${e.response.transactionHash}`,title:t["claim-reward-failed"]}),!1)})()&&N(!0)}else try{return!!await h.connect()}catch(e){return!1}}})})]})})}var u=c(287),j=(c(139),c(50)),b=c(59),p=c.n(b);const f=j.a.div`
cursor:pointer;
font-weight: 600;
.dropdown-menu{
  display:none
}
.dropdown-menu.show{
  margin-top:8px;
  background: #203B60;
  display:block;
  border-radius:4px;
  z-index:8;
  position:relative;
  .dropdown-item{
    padding:0 24px;
  }
}
.btn{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  color:#FFFFFF;

}
.dropdown-item:hover{
  color:#FFFFFF
}
`;function m(e){let{selectList:t=[],onChange:c}=e;const[i,a]=Object(s.useState)(!1),[l,n]=Object(s.useState)(t[0].text),o=p()("dropdown-menu",{show:i});return Object(d.jsxs)(f,{children:[Object(d.jsxs)("div",{onClick:()=>{a(!i)},className:"btn checked",children:[l,Object(d.jsx)("img",{src:u.default,alt:""})]}),Object(d.jsx)("div",{className:o,children:t.map(((e,t)=>Object(d.jsx)("div",{className:"dropdown-item",onClick:()=>{(e=>{n(e.text),c(e.index),a(!1)})(e)},children:e.text},t)))})]})}var v=c(1551),O=c(1416),x=c(452),k=c(454),g=c(453),y=c(450),N=c(1830),C=(c(2060),c.p+"static/media/filter-close.b72edec1.svg");function w(e){let{lang:t,isShowFilter:c,checkedStaked:s,setCheckedStaked:i,setIsShowFilter:a,curTabPool:l,checkedPolygon:n,checkedETH:o,checkedOption:r,checkedFutureMain:h,checkedFutureInno:u,checkedBSC:j,checkedArb:b,setCheckedOption:p,setCheckedFutureMain:f,setCheckedFutureInno:m,setCheckedPolygon:N,setCheckedBSC:w,setCheckedArb:I,setCheckedETH:S,clearFilter:F}=e;return Object(d.jsxs)("div",{className:"filter-modal",children:[Object(d.jsx)("div",{className:"close-filter-modal",children:Object(d.jsx)("span",{className:"close-icon",onClick:()=>{a()},children:Object(d.jsx)("img",{alt:"",src:C})})}),Object(d.jsxs)("div",{className:"staked-only",children:[Object(d.jsx)("div",{className:"staked-only-text",children:t["staked-only"]}),Object(d.jsx)("div",{children:Object(d.jsx)(v.a,{className:"l-toggle",checked:s,onClick:e=>{i(e)}})})]}),Object(d.jsx)("div",{className:"select-pool-type-network",children:Object(d.jsxs)("div",{className:"network",children:[Object(d.jsx)("div",{className:"type-cols",children:t.network}),Object(d.jsxs)("div",{className:"type-cols",children:[Object(d.jsxs)("div",{className:"type-title",children:[Object(d.jsx)("img",{alt:"",src:x.default})," BNB Chain"]}),Object(d.jsx)("div",{children:Object(d.jsx)(O.a,{checked:j,className:"l-checkbox",onChange:e=>{w(e)}})})]}),"deri"!==l&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"type-cols",children:[Object(d.jsxs)("div",{className:"type-title",children:[" ",Object(d.jsx)("img",{alt:"",src:g.default})," Arbitrum"]}),Object(d.jsx)("div",{children:Object(d.jsx)(O.a,{checked:b,className:"l-checkbox",onChange:e=>{I(e)}})})]}),Object(d.jsxs)("div",{className:"type-cols",children:[Object(d.jsxs)("div",{className:"type-title",children:[Object(d.jsx)("img",{alt:"",src:k.default})," Polygon"]}),Object(d.jsx)("div",{children:Object(d.jsx)(O.a,{checked:n,className:"l-checkbox",onChange:e=>{N(e)}})})]})]}),"deri"===l&&Object(d.jsxs)("div",{className:"type-cols",children:[Object(d.jsxs)("div",{className:"type-title",children:[Object(d.jsx)("img",{alt:"",src:y.default})," Ethereum"]}),Object(d.jsx)("div",{children:Object(d.jsx)(O.a,{checked:o,className:"l-checkbox",onChange:e=>{S(e)}})})]})]})}),Object(d.jsx)("div",{className:"select-footer",children:Object(d.jsx)("div",{className:"clear-all-filter",onClick:()=>{F()},children:t["clear-all-filter"]})})]})}var I=c.p+"static/media/filter.057de510.svg",S=(c(1760),c(28)),F=c(1635);t.default=Object(i.b)("wallet","poolManager")(Object(i.c)((function(e){let{lang:t,getLang:c,wallet:i={},poolManager:a}=e;const[l,n]=Object(s.useState)("amm"),[j,b]=Object(s.useState)(!1),[p,f]=Object(s.useState)(t["deri-pool-title"]),[C,E]=Object(s.useState)([]),[T,_]=Object(s.useState)(!1),[P,$]=Object(s.useState)(!1),[B,M]=Object(s.useState)(!1),[D,L]=Object(s.useState)(!1),[X,A]=Object(s.useState)(!1),[H,R]=Object(s.useState)(!1),[q,G]=Object(s.useState)(!1),[U,Y]=Object(s.useState)(!1),[z,J]=Object(s.useState)(!1),[K,W]=Object(s.useState)([]),[Q,V]=Object(s.useState)([]),[Z,ee]=Object(s.useState)(!1),te=[{text:t["deri-pool-title"],index:"official"},{text:t["open-pool-title"],index:"open"}],ce=e=>{"official"===e?(E(a.ammPools),b(!1)):"open"===e&&(E([]),ie(),b(!0))},se=()=>{_(!1),M(!1),L(!1),G(!1),A(!1),Y(!1)};Object(s.useEffect)((()=>{i.isConnected()&&(async()=>{let e=[...a.ammPools,...a.lpPools],t=await Promise.all(e.map((async e=>{let t=[e.chainId,e.address,i.detail.account];return!!(await o.a.request("getUserStakeInfo",t)).isStaked&&e})));t=t.filter((e=>e));let c=t.filter((e=>"lp"!==e.type)),s=t.filter((e=>"lp"===e.type));W(c),V(s)})()}),[i.detail,a,l]),Object(s.useEffect)((()=>{let e=[],t="amm"===l?a.ammPools:a.lpPools;if(T){let c=t.filter((e=>"option"===e.type));e=[...e,...c]}if(B){let c=t.filter((e=>("v2"===e.version||"v3"===e.version)&&"option"!==e.type));e=[...e,...c]}if(D){let c=t.filter((e=>"v2_lite"===e.version||"v3_lite"===e.version));e=[...e,...c]}if(X){if(e=[],T){let c=t.filter((e=>(56===+e.chainId||97===+e.chainId)&&"option"===e.type));e=[...e,...c]}if(B){let c=t.filter((e=>(56===+e.chainId||97===+e.chainId)&&("v2"===e.version||"v3"===e.version)&&"option"!==e.type));e=[...e,...c]}if(D){let c=t.filter((e=>(56===+e.chainId||97===+e.chainId)&&("v2_lite"===e.version||"v3_lite"===e.version)));e=[...e,...c]}if(!T&&!B&&!D){let c=t.filter((e=>56===+e.chainId||97===+e.chainId));e=[...e,...c]}}if(H){if(e=[],T){let c=t.filter((e=>(42161===+e.chainId||421611===+e.chainId)&&"option"===e.type));e=[...e,...c]}if(B){let c=t.filter((e=>(42161===+e.chainId||421611===+e.chainId)&&"v3"===e.version&&"option"!==e.type));e=[...e,...c]}if(D){let c=t.filter((e=>(42161===+e.chainId||421611===+e.chainId)&&("v2_lite"===e.version||"v3_lite"===e.version)));e=[...e,...c]}if(!T&&!B&&!D){let c=t.filter((e=>42161===+e.chainId||421611===+e.chainId));e=[...e,...c]}}if(q){if(e=[],T){let c=t.filter((e=>137===+e.chainId&&"option"===e.type));e=[...e,...c]}if(B){let c=t.filter((e=>137===+e.chainId&&("v2"===e.version||"v3"===e.version)&&"option"!==e.type));e=[...e,...c]}if(D){let c=t.filter((e=>137===+e.chainId&&("v2_lite"===e.version||"v3_lite"===e.version)));e=[...e,...c]}if(!T&&!B&&!D){let c=t.filter((e=>137===+e.chainId));e=[...e,...c]}}if(X&&q&&H){e=[];let c=t.filter((e=>137===+e.chainId||56===+e.chainId||4261===+e.chainId));e=[...e,...c]}if(U){let c=t.filter((e=>1===+e.chainId));e=[...e,...c]}T||B||D||X||q||U||H||(e=t),E(e)}),[T,B,D,X,q,U,H]);const ie=async()=>{await a.loadOpen(),E(a.openPools)};return Object(s.useEffect)((()=>{f(j?t["open-pool-title"]:t["deri-pool-title"])}),[j]),Object(s.useEffect)((()=>{a.load()}),[]),Object(s.useEffect)((()=>{"amm"===l?j||(E([]),E(z?K:a.ammPools)):"deri"===l&&(E([]),E(z?Q:a.lpPools))}),[l,z]),Object(s.useEffect)((()=>{E(a.ammPools)}),[a.pools]),Object(s.useEffect)((()=>{if(i.isConnected()){"true"===Object(r.m)("poolClaim")?ee(!1):C&&ee(!0)}}),[i,C,i.detail]),Object(d.jsxs)("div",{className:"pool-box",children:[Z&&Object(d.jsx)(F.a,{poolClaim:Z}),Object(d.jsxs)("div",{className:"pool-info",children:[Object(d.jsxs)("div",{className:"left",children:[Object(d.jsx)("div",{className:"left-header-info",children:Object(d.jsxs)("div",{className:"pool-title",children:[Object(d.jsx)("div",{className:"pool-title-text",children:p}),Object(d.jsx)("div",{className:"pool-title-select-text",children:!j&&Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"pool-test-des",children:t["pool-title-des"]})})}),Object(d.jsx)("div",{className:"select-pool-ves",children:Object(d.jsx)(m,{selectList:te,onChange:ce})}),Object(d.jsx)("div",{className:"simple-select-ves",children:Object(d.jsx)("img",{alt:"",src:u.default})})]})}),Object(d.jsxs)("div",{className:"pool-card-claim-bg",children:[!j&&Object(d.jsx)("div",{className:"pool-tab",children:Object(d.jsxs)("div",{className:"pool-tab-info",children:[Object(d.jsxs)("div",{className:"tab-mining",children:[Object(d.jsx)("div",{className:"amm"===l?"pool-active":"pool-unactive",onClick:()=>{n("amm")},children:t["amm-liquidity-mining"]}),Object(d.jsx)("div",{className:"deri"===l?"pool-active":"pool-unactive",onClick:()=>{n("deri")},children:t["deri-liquidity-mining"]})]}),Object(d.jsxs)("div",{className:"simple-tab-mining",children:[Object(d.jsx)("div",{className:"amm"===l?"pool-active":"pool-unactive",onClick:()=>{n("amm")},children:t.amm}),Object(d.jsx)("div",{className:"deri"===l?"pool-active":"pool-unactive",onClick:()=>{n("deri")},children:t["type-deri"]})]}),Object(d.jsxs)("div",{className:"filter",children:[Object(d.jsx)("img",{alt:"",src:I,className:"filter-img",onClick:()=>{$(!P)}}),P&&Object(d.jsx)(w,{curTabPool:l,lang:t,isShowFilter:P,checkedStaked:z,setCheckedStaked:J,setIsShowFilter:$,setCheckedOption:_,setCheckedFutureMain:M,setCheckedFutureInno:L,setCheckedPolygon:G,setCheckedBSC:A,setCheckedArb:R,setCheckedETH:Y,clearFilter:se,checkedPolygon:q,checkedETH:U,checkedOption:T,checkedFutureMain:B,checkedFutureInno:D,checkedBSC:X,checkedArb:H})]})]})}),Object(d.jsx)("div",{className:"pool-card",children:C.map(((e,c)=>Object(d.jsx)(N.a,{wallet:i,lang:t,pool:e},c)))}),!j&&Object(d.jsx)(h,{lang:t,wallet:i,getLang:c})]})]}),Object(d.jsx)("div",{className:"right",children:Object(d.jsxs)("div",{className:"right-info",children:[Object(d.jsxs)("div",{className:"select-pool-ves-staked",children:[Object(d.jsx)("div",{className:"select-pool-ves",children:Object(d.jsx)(m,{selectList:te,onChange:ce})}),!j&&Object(d.jsxs)("div",{className:"staked-only",children:[Object(d.jsx)("div",{className:"staked-only-text",children:t["staked-only"]}),Object(d.jsx)("div",{children:Object(d.jsx)(v.a,{className:"l-toggle",checked:z,onClick:e=>{J(e)}})})]})]}),!j&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"select-pool-type-network",children:Object(d.jsxs)("div",{className:"network",children:[Object(d.jsx)("div",{className:"type-cols",children:t.network}),Object(d.jsxs)("div",{className:"type-cols",children:[Object(d.jsxs)("div",{className:"type-title",children:[" ",Object(d.jsx)("img",{alt:"",src:x.default})," BNB Chain"]}),Object(d.jsx)("div",{children:Object(d.jsx)(O.a,{checked:X,className:"l-checkbox",onChange:e=>{A(e)}})})]}),"deri"!==l&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"type-cols",children:[Object(d.jsxs)("div",{className:"type-title",children:[" ",Object(d.jsx)("img",{alt:"",src:g.default})," Arbitrum"]}),Object(d.jsx)("div",{children:Object(d.jsx)(O.a,{checked:H,className:"l-checkbox",onChange:e=>{R(e)}})})]}),Object(d.jsxs)("div",{className:"type-cols",children:[Object(d.jsxs)("div",{className:"type-title",children:[" ",Object(d.jsx)("img",{alt:"",src:k.default})," Polygon"]}),Object(d.jsx)("div",{children:Object(d.jsx)(O.a,{checked:q,className:"l-checkbox",onChange:e=>{G(e)}})})]})]}),"deri"===l&&Object(d.jsxs)("div",{className:"type-cols",children:[Object(d.jsxs)("div",{className:"type-title",children:[Object(d.jsx)("img",{alt:"",src:y.default})," Ethereum"]}),Object(d.jsx)("div",{children:Object(d.jsx)(O.a,{checked:U,className:"l-checkbox",onChange:e=>{Y(e)}})})]})]})}),Object(d.jsxs)("div",{className:"select-footer",children:[Object(d.jsx)("div",{className:"clear-all-filter",onClick:se,children:t["clear-all-filter"]}),Object(d.jsx)("div",{className:"deri-logo",children:Object(d.jsx)(S.a,{token:"pool-deri-logo",width:"72",height:"84"})})]})]})]})})]})]})})))}}]);
//# sourceMappingURL=20.605582d7.chunk.js.map