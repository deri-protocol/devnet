(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[20],{1459:function(e,t,c){"use strict";c.d(t,"a",(function(){return h}));var n,a=c(22),i=c(68),s=c(8),r=c(53),o=c(17),l=c(245),d=c(4),u=r.a.div(n||(n=Object(i.a)(["\ndisplay : flex;\nfont-size : 14px;\nalign-items : center;\nbackground: rgba(85, 119, 253, 0.1);\nborder-radius: 4px;\njustify-content: space-between;\ninput {\n  background: transparent;\n  border-radius: 4px;\n  // min-width: 240px;\n  border: 0;\n  width : ",";\n  height: ",";\n  color : #E0ECFF;\n  font-size : 18px;\n  padding-left: 16px;\n}\ninput:focus {\n  outline: none;\n}\n.unit {\n  margin-right: ",";\n}\n"])),(function(e){return e.inputWidth}),(function(e){return e.inputHeight}),(function(e){return e.unitPadding}));function h(e){var t=e.value,c=e.unit,n=e.unitTip,i=e.max,r=e.step,h=e.onChange,j=e.styles,b=void 0===j?{}:j,f=e.disableNegtive,p=void 0===f||f,O=e.focus,v=e.placeholder,m=void 0===v?"":v,x=e.unitPadding,k=void 0===x?"24px":x,g=e.minTradeVolume,y=e.decimal,N=void 0===y?2:y,C=e.readOnly,w=e.inputWidth,I=void 0===w?"50%":w,E=e.inputHeight,F=void 0===E?"56px":E,S=e.className,D=e.disabled,T=void 0!==D&&D,P=e.onBlur,B=e.onFocus,R=Object(s.useRef)(null);return Object(s.useEffect)((function(){R.current.setCustomValidity(""),R.current&&O&&R.current.focus()}),[O]),Object(d.jsxs)(u,{unitPadding:k,inputWidth:I,inputHeight:F,className:S,style:Object(a.a)({},b),children:[Object(d.jsx)("input",{placeholder:m,type:"number",title:"",onKeyPress:function(e){46!==e.which&&8!==e.which&&0!==e.which&&(e.which<48||e.which>57)&&e.preventDefault()},onBlur:P,onFocus:B,disabled:T,value:t,step:isNaN(r)?0:r,ref:R,onChange:function(e){var t="\\d+\\.\\d{0,".concat(N,"}$"),c=new RegExp(t),n=e.target.value;if(i&&Object(o.bg)(n).gt(i))h&&h(i);else if(p&&(n<0||isNaN(n)))h&&h("");else if(n){if(g>=1)if(n/g>=1)h&&h(Object(o.bg)(n).div(g).integerValue()*g);else h&&h(n*g);else if(/\d+\./.test(n)&&!c.test(n)){var a=n.substring(0,n.indexOf(".")+1+N);h&&h(a)}else h&&h(n)}else h&&h(n)},readOnly:C}),Object(d.jsx)("div",{className:"unit",children:n?Object(d.jsx)(l.a,{tip:n,text:c}):c})]})}},1551:function(e,t,c){"use strict";var n,a,i,s,r=c(22),o=c(9),l=c(321),d=c(68),u=c(8),h=c(53),j=c(72),b=c.n(j),f=c(4),p=h.a.div(n||(n=Object(d.a)(["\n  display: inline-block;\n  vertical-align: middle;\n"]))),O=h.a.svg(a||(a=Object(d.a)(["\n  fill: none;\n  stroke: white;\n  stroke-width: 2px;\n"]))),v=h.a.input.attrs({type:"checkbox"})(i||(i=Object(d.a)(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"]))),m=h.a.div(s||(s=Object(d.a)(["\n  background: ",";\n  border: 2px solid #5577FD;\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border-radius: 4px;\n  box-sizing: border-box;\n  border-radius: 4px;\n  cursor : pointer;\n  position : relative;\n\n  ",":focus + & {\n    box-shadow: 0 0 0 3px pink;\n  }\n\n  "," {\n    visibility: ",";\n    display: flex;\n    position : absolute;\n\n  }\n"])),(function(e){return e.checked?"#5577FD":"none"}),v,O,(function(e){return e.checked?"visible":"hidden"}));t.a=function(e){var t=e.className,c=e.onChange,n=e.checked,a=Object(l.a)(e,["className","onChange","checked"]),i=Object(u.useState)(n),s=Object(o.a)(i,2),d=s[0],h=s[1];Object(u.useEffect)((function(){h(n)}),[n]);var j=b()("c-checkbox",{checked:d});return Object(f.jsxs)(p,{className:t,children:[Object(f.jsx)(v,Object(r.a)(Object(r.a)({checked:d},a),{},{onChange:c})),Object(f.jsx)(m,{checked:d,className:j,onClick:function(){var e=!d;h(e),c&&c(e)},children:Object(f.jsx)(O,{className:"icon",viewBox:"0 0 24 24",children:Object(f.jsx)("polyline",{points:"20 6 9 17 4 12"})})})]})}},1597:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var n=c(1686),a=c.n(n),i=(c(1690),c(1691),c(4));function s(e){var t=e.label,c=e.className,n=e.checked,s=e.onClick,r=function(e){s&&s(!n)};return Object(i.jsxs)("div",{className:"l-toggle",children:[Object(i.jsx)("span",{className:"label-text",children:t}),Object(i.jsx)(a.a,{onClick:r,checked:n,className:c,onChange:r,icons:!1})]})}},1685:function(e,t,c){},1686:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e},a=function(){function e(e,t){for(var c=0;c<t.length;c++){var n=t[c];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,c,n){return c&&e(t.prototype,c),n&&e(t,n),t}}(),i=c(8),s=h(i),r=h(c(72)),o=h(c(25)),l=h(c(1687)),d=h(c(1688)),u=c(1689);function h(e){return e&&e.__esModule?e:{default:e}}var j=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var c=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return c.handleClick=c.handleClick.bind(c),c.handleTouchStart=c.handleTouchStart.bind(c),c.handleTouchMove=c.handleTouchMove.bind(c),c.handleTouchEnd=c.handleTouchEnd.bind(c),c.handleFocus=c.handleFocus.bind(c),c.handleBlur=c.handleBlur.bind(c),c.previouslyChecked=!(!e.checked&&!e.defaultChecked),c.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},c}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){if(!this.props.disabled){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var c=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:c})}}},{key:"handleTouchStart",value:function(e){this.props.disabled||(this.startX=(0,u.pointerCoord)(e).x,this.activated=!0)}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,u.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var c=(0,u.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>c?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<c&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var c=this.props.icons;return c?void 0===c[e]?t.defaultProps.icons[e]:c[e]:null}},{key:"render",value:function(){var e=this,t=this.props,c=t.className,a=(t.icons,function(e,t){var c={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(c[n]=e[n]);return c}(t,["className","icons"])),i=(0,r.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},c);return s.default.createElement("div",{className:i,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},s.default.createElement("div",{className:"react-toggle-track"},s.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),s.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),s.default.createElement("div",{className:"react-toggle-thumb"}),s.default.createElement("input",n({},a,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(i.PureComponent);t.default=j,j.displayName="Toggle",j.defaultProps={icons:{checked:s.default.createElement(l.default,null),unchecked:s.default.createElement(d.default,null)}},j.propTypes={checked:o.default.bool,disabled:o.default.bool,defaultChecked:o.default.bool,onChange:o.default.func,onFocus:o.default.func,onBlur:o.default.func,className:o.default.string,name:o.default.string,value:o.default.string,id:o.default.string,"aria-labelledby":o.default.string,"aria-label":o.default.string,icons:o.default.oneOfType([o.default.bool,o.default.shape({checked:o.default.node,unchecked:o.default.node})])}},1687:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=c(8),i=(n=a)&&n.__esModule?n:{default:n};t.default=function(){return i.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},i.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},1688:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=c(8),i=(n=a)&&n.__esModule?n:{default:n};t.default=function(){return i.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},i.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},1689:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var c=t[0];return{x:c.clientX,y:c.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},1690:function(e,t,c){},1691:function(e,t,c){},1692:function(e,t,c){"use strict";t.a=c.p+"static/media/skip.b1792439.svg"},1693:function(e,t,c){"use strict";c.d(t,"a",(function(){return x}));var n=c(2),a=c(9),i=c(0),s=c.n(i),r=c(8),o=c(186),l=c(188),d=c(72),u=c.n(d),h=c(185),j=c(1459),b=c(27),f=c(1390),p=c(17),O=c(45),v=(c(1694),c(340)),m=c(4);function x(e){var t=e.wallet,c=e.alert,i=Object(r.useState)(0),d=Object(a.a)(i,2),x=d[0],k=d[1],g=Object(r.useState)(!1),y=Object(a.a)(g,2),N=y[0],C=y[1],w=Object(r.useState)(!1),I=Object(a.a)(w,2),E=I[0],F=I[1],S=Object(r.useState)(!1),D=Object(a.a)(S,2),T=D[0],P=D[1],B=Object(r.useState)(!1),R=Object(a.a)(B,2),L=R[0],q=R[1],A=Object(r.useState)(),_=Object(a.a)(A,2),H=_[0],M=_[1],U=Object(r.useState)(),X=Object(a.a)(U,2),V=X[0],Y=X[1],$=Object(r.useState)(),z=Object(a.a)($,2),G=z[0],W=z[1],Q=Object(r.useState)(),J=Object(a.a)(Q,2),K=J[0],Z=J[1],ee=Object(r.useState)("REMOVE LIQUIDITY"),te=Object(a.a)(ee,2),ce=te[0],ne=te[1],ae=function(){var e=Object(n.a)(s.a.mark((function e(){var c,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.request("getLiquidityInfo",[t.detail.chainId,"0x26bE73Bdf8C113F3630e4B766cfE6F0670Aa09cF",t.detail.account,0]);case 2:c=e.sent,n=c.shares?Object(p.bg)(c.shares):Object(p.bg)(0),a=n.isNaN()?Object(p.bg)(0):n.multipliedBy(c.shareValue),M(n.toString()),Y(a.toFixed(4));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=Object(n.a)(s.a.mark((function e(){var c,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.request("getLiquidityInfo",[t.detail.chainId,"0x1eF92eDA3CFeefb8Dae0DB4507f860d3b73f29BA",t.detail.account,"DERI"]);case 2:c=e.sent,console.log("getLiquidityInfo",c),n=c.shares?Object(p.bg)(c.shares):Object(p.bg)(0),Z(n.toString());case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(n.a)(s.a.mark((function e(){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.request("getBTokenBalance",[t.detail.chainId,"0x26bE73Bdf8C113F3630e4B766cfE6F0670Aa09cF",t.detail.account,0]);case 2:c=e.sent,console.log("getBTokenBalance",c),W(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(n.a)(s.a.mark((function e(){var n,a,i,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C(!0),0!==x){e.next=21;break}return a=[t.detail.chainId,"0x26bE73Bdf8C113F3630e4B766cfE6F0670Aa09cF",t.detail.account,H,void 0,!0],e.next=5,O.a.request("removeLiquidity",a,{includeResponse:!0,write:!0,subject:"REMOVE LIQUIDITY"});case 5:if(n=e.sent,se(),C(!1),n&&n.success){e.next=15;break}if(""!==n.response.transactionHash){e.next=11;break}return e.abrupt("return",!1);case 11:return c.error("Transaction Failed  : ".concat(n.response.error),{timeout:3e5,isTransaction:!0,transactionHash:n.response.transactionHash,link:"".concat(t.blockExploreUrl,"/tx/").concat(n.response.transactionHash),title:"Remove Liquidity Failed"}),e.abrupt("return",!1);case 15:k(x+1),F(!0),c.success("Remove DERI Liquidity",{timeout:8e3,isTransaction:!0,transactionHash:n.response.data.transactionHash,link:"".concat(t.blockExploreUrl,"/tx/").concat(n.response.data.transactionHash),title:"Remove Liquidity Executed"});case 18:return e.abrupt("return",!0);case 21:if(1!==x){e.next=39;break}return i=[t.detail.chainId,"0x1eF92eDA3CFeefb8Dae0DB4507f860d3b73f29BA",t.detail.account,"DERI"],e.next=25,O.a.request("unlock",i,{write:!0,subject:"APPROVE"});case 25:if(n=e.sent,C(!1),!n){e.next=37;break}if(!n.status){e.next=34;break}k(x+1),P(!0),c.success("Approve DERI",{timeout:8e3,isTransaction:!0,transactionHash:n.transactionHash,link:"".concat(t.blockExploreUrl,"/tx/").concat(n.transactionHash),title:"Approve Executed"}),e.next=37;break;case 34:if(""!==n.transactionHash){e.next=36;break}return e.abrupt("return",!1);case 36:c.error("Transaction Failed ".concat(n.error),{timeout:3e5,isTransaction:!0,transactionHash:n.transactionHash,link:"".concat(t.blockExploreUrl,"/tx/").concat(n.transactionHash),title:"Approve Failed"});case 37:e.next=58;break;case 39:if(2!==x){e.next=58;break}return r=[t.detail.chainId,"0x1eF92eDA3CFeefb8Dae0DB4507f860d3b73f29BA",t.detail.account,G,"DERI"],e.next=43,O.a.request("addLiquidity",r,{includeResponse:!0,write:!0,subject:"ADD LIQUIDITY"});case 43:if(n=e.sent,C(!1),se(),ie(),n&&n.success){e.next=54;break}if(""!==n.response.transactionHash){e.next=50;break}return e.abrupt("return",!1);case 50:return c.error("Transaction Failed  : ".concat(n.response.error),{timeout:3e5,isTransaction:!0,transactionHash:n.response.transactionHash,link:"".concat(t.blockExploreUrl,"/tx/").concat(n.response.transactionHash),title:"Add Liquidity Failed"}),e.abrupt("return",!1);case 54:q(!0),Object(o.a)("LiquidityGuidance"),c.success("Add DERI Liquidity",{timeout:8e3,isTransaction:!0,transactionHash:n.response.data.transactionHash,link:"".concat(t.blockExploreUrl,"/tx/").concat(n.response.data.transactionHash),title:"Add Liquidity Executed"});case 57:return e.abrupt("return",!0);case 58:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){t.isConnected()&&(ae(),se())}),[t]),Object(r.useEffect)((function(){1===x?ne("APPROVE"):2===x&&ne("ADD LIQUIDITY")}),[x]),Object(m.jsxs)("div",{className:"guidance-modal",children:[Object(m.jsxs)("div",{className:"title-close",children:[Object(m.jsx)("div",{className:"title-text",children:"Migrate Liquidity"}),Object(m.jsx)("div",{className:"close",children:Object(m.jsx)("img",{src:l.default,alt:"",onClick:function(){return Object(o.a)("LiquidityGuidance")}})})]}),Object(m.jsxs)("div",{className:"step-box",children:[Object(m.jsxs)("div",{className:u()("remove",{pending:0===x&&N,success:0!==x&&E}),children:[0===x&&N&&Object(m.jsx)(v.a,{borderColor:"rgba(89, 174, 153, 0.5)",bgColor:"rgba(89, 174, 153, 0.3)"}),0!==x&&E&&Object(m.jsx)(b.a,{token:"Guidance-success"}),"REMOVE"]}),Object(m.jsx)("div",{className:u()("hr",{"hr-success":0!==x&&E})}),Object(m.jsxs)("div",{className:u()("approve",{pending:1===x&&N,success:2===x&&T}),children:[1===x&&N&&Object(m.jsx)(v.a,{borderColor:"rgba(89, 174, 153, 0.5)",bgColor:"rgba(89, 174, 153, 0.3)"}),2===x&&T&&Object(m.jsx)(b.a,{token:"Guidance-success"}),"APPROVE"]}),Object(m.jsx)("div",{className:u()("hr",{"hr-success":2===x&&T})}),Object(m.jsxs)("div",{className:u()("add",{pending:2===x&&N,success:L}),children:[2===x&&N&&Object(m.jsx)(v.a,{borderColor:"rgba(89, 174, 153, 0.5)",bgColor:"rgba(89, 174, 153, 0.3)"}),L&&Object(m.jsx)(b.a,{token:"Guidance-success"}),"ADD"]})]}),Object(m.jsxs)("div",{className:"guidance-info",children:[Object(m.jsxs)("div",{className:"now-step",children:[0===x&&" Step 1: remove liquidity from the retired Future Inno Pool",1===x&&" Step 2: approve DERI to the new Inno Pool",2===x&&" Step 3: add DERI to the new Inno Pool"]}),0===x&&Object(m.jsxs)("div",{className:"pool-type",children:[Object(m.jsx)("div",{className:"pool-title",children:"Pool"}),Object(m.jsx)("div",{className:"pool-type-text",children:" Future Inno"})]}),Object(m.jsxs)("div",{className:"balance-box",children:[Object(m.jsx)("div",{className:"balance-title",children:"Your Staked Balance"}),Object(m.jsxs)("div",{className:"balance-num",children:[0===x&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(f.a,{value:H,decimalScale:2})," shares (",Object(m.jsx)(f.a,{value:V})," DERI)"]}),0!==x&&Object(m.jsx)(f.a,{value:L?K:G,suffix:" DERI"})]})]}),Object(m.jsxs)("div",{className:"operate-box",children:[Object(m.jsx)("div",{className:"input-box",children:Object(m.jsx)(j.a,{inputWidth:"332px",disabled:0===x,decimal:18,unit:0===x?"SHARES":"DERI",value:0===x?H:G,onChange:function(e){return W(e)}})}),Object(m.jsx)(h.a,{width:"332",disabled:2===x&&!(+G>0),label:ce,onClick:re,fontSize:"18"})]})]})]})}},1694:function(e,t,c){},2187:function(e,t,c){},2573:function(e,t,c){"use strict";c.r(t);var n=c(21),a=c(2),i=c(9),s=c(0),r=c.n(s),o=c(8),l=c(54),d=c(185),u=c(190),h=c(187),j=c(45),b=c(20),f=c(245),p=c.p+"static/media/oldDeri.d9dd2f9f.svg",O=(c(1685),c(4));function v(e){let{lang:t,getLang:c,poolShow:n=!0,wallet:a={}}=e;const i=Object(h.c)(),[s,r]=Object(o.useState)({}),[l,v]=Object(o.useState)(!1),[m,x]=Object(o.useState)(""),[k,g]=Object(o.useState)(!1),y=Object(u.a)(s.chainId),N=async()=>{if(a.isConnected()){const e=await j.a.request("getUserInfoAll",[a.detail.account]),t=(+e.total).toFixed(2),c=e.valid?(+e.amount).toFixed(2):0,n=e.lp,i=(+e.trade).toFixed(2),s=e.chainId;r({claimed:t,unclaimed:c,harvestDeriLp:n,harvestDeriTrade:i,chainId:s})}};return Object(o.useEffect)((()=>{let e=window.setInterval((()=>{N(),(async()=>{if(a.isConnected()){let e=await j.a.request("getUserLastClaimInfo",[a.detail.account]);e&&g(!e.claimed)}})()}),18e4);return N(),()=>clearInterval(e)}),[a.detail.account]),Object(O.jsx)("div",{className:"mining-claim",children:Object(O.jsxs)("div",{className:"mining-claim-info",children:[Object(O.jsxs)("div",{className:"deri-num-slider",children:[Object(O.jsxs)("div",{className:"deri-claim-time",children:[t["old-deri-farms"],Object(O.jsx)(f.a,{tip:t["old-deri-farms-tip"],multiline:!0,children:Object(O.jsx)("span",{children:Object(O.jsx)("img",{src:p})})})]}),Object(O.jsx)("div",{className:"deri-claim-text",children:c("old-pool-deri",{num:l?0:s.unclaimed&&k?s.unclaimed:0})})]}),n&&Object(O.jsx)("div",{className:"cliam-button",children:Object(O.jsx)(d.a,{icon:"ClaimDeri",fontWeight:"bold",disabled:0===+s.unclaimed||!k,label:t["claim-all"],onClick:async()=>{if(a.isConnected()){await(async()=>{if(void 0===y.name)return void i.error(`${t["wrong-network"]}`);if(!Object(b.i)(a.detail.chainId,s.chainId))return void i.error(`${t["your-deri-is-on"]} ${y.name} ${t["connect-to"]} ${y.name} ${t["to-claim"]}`);if(0===+s.unclaimed)return void i.error(t["no-deri-to-claim-yet"]);if(parseInt(Date.now()/1e3)%28800<1800)return void i.error(t["claiming-DERI-is-disabled-during-first-30-minutes-of-each-epoch"]);await j.a.request("mintDToken",[a.detail.chainId,a.detail.account],{includeResponse:!0,write:!0,subject:t["claim-deri-title"],title:{text:"Claim Deri",icon:"DERI"},content:{success:t["claim-deri-reward"],error:t["transaction-failed"]}})})()&&v(!0)}else try{return!!await a.connect()}catch(e){return!1}}})})]})})}var m,x=c(68),k=c(325),g=(c(133),c(53)),y=c(72),N=c.n(y),C=g.a.div(m||(m=Object(x.a)(["\ncursor:pointer;\nfont-weight: 600;\n.dropdown-menu{\n  display:none\n}\n.dropdown-menu.show{\n  margin-top:8px;\n  background: #203B60;\n  display:block;\n  border-radius:4px;\n  z-index:8;\n  position:relative;\n  .dropdown-item{\n    padding:0 24px;\n  }\n}\n.btn{\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 24px;\n  color:#FFFFFF;\n\n}\n.dropdown-item:hover{\n  color:#FFFFFF\n}\n"])));function w(e){var t=e.selectList,c=void 0===t?[]:t,n=e.onChange,a=Object(o.useState)(!1),s=Object(i.a)(a,2),r=s[0],l=s[1],d=Object(o.useState)(c[0].text),u=Object(i.a)(d,2),h=u[0],j=u[1],b=N()("dropdown-menu",{show:r});return Object(O.jsxs)(C,{children:[Object(O.jsxs)("div",{onClick:function(){l(!r)},className:"btn checked",children:[h,Object(O.jsx)("img",{src:k.default,alt:""})]}),Object(O.jsx)("div",{className:b,children:c.map((function(e,t){return Object(O.jsx)("div",{className:"dropdown-item",onClick:function(){!function(e){j(e.text),n(e.index),l(!1)}(e)},children:e.text},t)}))})]})}var I=c(1597),E=c(1551),F=c(504),S=(c(507),c(506)),D=c(503),T=c(1952),P=(c(2187),c.p+"static/media/filter-close.80f134f0.svg");function B(e){var t=e.lang,c=(e.isShowFilter,e.checkedStaked),n=e.setCheckedStaked,a=e.setIsShowFilter,i=e.curTabPool,s=(e.checkedPolygon,e.checkedETH),r=(e.checkedOption,e.checkedFutureMain,e.checkedFutureInno,e.checkedBSC),o=e.checkedArb,l=(e.setCheckedOption,e.setCheckedFutureMain,e.setCheckedFutureInno,e.setCheckedPolygon,e.setCheckedBSC),d=e.setCheckedArb,u=e.setCheckedETH,h=e.clearFilter;return Object(O.jsxs)("div",{className:"filter-modal",children:[Object(O.jsx)("div",{className:"close-filter-modal",children:Object(O.jsx)("span",{className:"close-icon",onClick:function(){a()},children:Object(O.jsx)("img",{alt:"",src:P})})}),Object(O.jsxs)("div",{className:"staked-only",children:[Object(O.jsx)("div",{className:"staked-only-text",children:t["staked-only"]}),Object(O.jsx)("div",{children:Object(O.jsx)(I.a,{className:"l-toggle",checked:c,onClick:function(e){n(e)}})})]}),Object(O.jsx)("div",{className:"select-pool-type-network",children:Object(O.jsxs)("div",{className:"network",children:[Object(O.jsx)("div",{className:"type-cols",children:t.network}),Object(O.jsxs)("div",{className:"type-cols",children:[Object(O.jsxs)("div",{className:"type-title",children:[Object(O.jsx)("img",{alt:"",src:F.default})," BNB Chain"]}),Object(O.jsx)("div",{children:Object(O.jsx)(E.a,{checked:r,className:"l-checkbox",onChange:function(e){l(e)}})})]}),"deri"!==i&&Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"type-cols",children:[Object(O.jsxs)("div",{className:"type-title",children:[" ",Object(O.jsx)("img",{alt:"",src:S.default})," Arbitrum"]}),Object(O.jsx)("div",{children:Object(O.jsx)(E.a,{checked:o,className:"l-checkbox",onChange:function(e){d(e)}})})]})}),"deri"===i&&Object(O.jsxs)("div",{className:"type-cols",children:[Object(O.jsxs)("div",{className:"type-title",children:[Object(O.jsx)("img",{alt:"",src:D.default})," Ethereum"]}),Object(O.jsx)("div",{children:Object(O.jsx)(E.a,{checked:s,className:"l-checkbox",onChange:function(e){u(e)}})})]})]})}),Object(O.jsx)("div",{className:"select-footer",children:Object(O.jsx)("div",{className:"clear-all-filter",onClick:function(){h()},children:t["clear-all-filter"]})})]})}var R=c.p+"static/media/filter.c289b063.svg",L=(c(1841),c(27)),q=c(330),A=c(1692),_=c(17),H=c(186),M=c(188),U=(c(515),c(31)),X=c(1693);function V(e){var t=e.wallet,c=Object(o.useState)(!0),n=Object(i.a)(c,2),s=n[0],l=n[1],d=Object(o.useState)(0),u=Object(i.a)(d,2),f=u[0],p=u[1],v=Object(h.c)(),m=function(){s&&Object(b.J)("close-lp-hint","false",1),p(0)},x=function(){var e=Object(a.a)(r.a.mark((function e(){var c,n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.request("getLiquidityInfo",[t.detail.chainId,"0x26bE73Bdf8C113F3630e4B766cfE6F0670Aa09cF",t.detail.account,0]);case 2:c=e.sent,console.log("getLiquidityInfo",c),n=c.shares?Object(_.bg)(c.shares):Object(_.bg)(0),a=n.isNaN()?Object(_.bg)(0):n.multipliedBy(c.shareValue),p(a.toFixed(4));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){"false"===Object(b.p)("close-lp-hint")&&p(0)}),[f]),Object(o.useEffect)((function(){t.isConnected()&&x()}),[t,t.detail,t.detail.account]),"prod"===U.a.get()?Object(O.jsx)("div",{children:f>0&&Object(O.jsxs)("div",{className:"trade-hint  close-position-hint",children:[Object(O.jsx)("div",{className:"hint-img",children:Object(O.jsx)("img",{src:q.a,alt:""})}),Object(O.jsxs)("div",{className:"hint-box",children:[Object(O.jsxs)("div",{className:"hint-title",children:[Object(O.jsx)("span",{children:"For Your Information"}),Object(O.jsx)("img",{className:"close",src:M.default,alt:"X",onClick:m})]}),Object(O.jsxs)("div",{className:"hint-content",children:[Object(O.jsxs)("div",{className:"hint-text vip-text",children:["You have staked balance of ",f," DERI in the retired Future Inno (DERI-margined) pool."]}),Object(O.jsxs)("div",{className:"learn-more",children:[Object(O.jsx)("br",{}),Object(O.jsx)("a",{onClick:function(){t.isConnected()&&Object(H.b)(Object(O.jsx)(X.a,{wallet:t,alert:v}),{key:"LiquidityGuidance",fading:!0,style:{background:"rgba(0, 0, 0, 0.4)",zIndex:2}})},children:"Click here to migrate the liquidity to the new Inno Pool (DERI-margined)  to keep earning DERI rewards."})]}),Object(O.jsxs)("div",{className:"hint-link vip-skip",children:[Object(O.jsx)("div",{className:s?"skip check-skip":"skip",onClick:function(){return l(!s)},children:s&&Object(O.jsx)("img",{src:A.a})}),"  ",Object(O.jsx)("span",{children:"skip notification until tomorrow"})]})]})]}),Object(O.jsx)("div",{className:"m-check",onClick:m,children:Object(O.jsx)("span",{className:"check",children:"OK"})})]})}):null}t.default=Object(l.b)("wallet","poolManager")(Object(l.c)((function(e){var t=e.lang,c=e.getLang,s=e.wallet,l=void 0===s?{}:s,d=e.poolManager,u=Object(o.useState)("amm"),h=Object(i.a)(u,2),f=h[0],p=h[1],m=Object(o.useState)(!1),x=Object(i.a)(m,2),g=x[0],y=x[1],N=Object(o.useState)(t["deri-pool-title"]),C=Object(i.a)(N,2),P=C[0],q=C[1],A=Object(o.useState)([]),_=Object(i.a)(A,2),H=_[0],M=_[1],U=Object(o.useState)(!1),X=Object(i.a)(U,2),Y=X[0],$=X[1],z=Object(o.useState)(!1),G=Object(i.a)(z,2),W=G[0],Q=G[1],J=Object(o.useState)(!1),K=Object(i.a)(J,2),Z=K[0],ee=K[1],te=Object(o.useState)(!1),ce=Object(i.a)(te,2),ne=ce[0],ae=ce[1],ie=Object(o.useState)(!1),se=Object(i.a)(ie,2),re=se[0],oe=se[1],le=Object(o.useState)(!1),de=Object(i.a)(le,2),ue=de[0],he=de[1],je=Object(o.useState)(!1),be=Object(i.a)(je,2),fe=be[0],pe=be[1],Oe=Object(o.useState)(!1),ve=Object(i.a)(Oe,2),me=ve[0],xe=ve[1],ke=Object(o.useState)(!1),ge=Object(i.a)(ke,2),ye=ge[0],Ne=ge[1],Ce=Object(o.useState)([]),we=Object(i.a)(Ce,2),Ie=we[0],Ee=we[1],Fe=Object(o.useState)([]),Se=Object(i.a)(Fe,2),De=Se[0],Te=Se[1],Pe=Object(o.useState)(!1),Be=Object(i.a)(Pe,2),Re=(Be[0],Be[1]),Le=[{text:t["deri-pool-title"],index:"official"}],qe=function(e){"official"===e?(M(d.ammPools),y(!1)):"open"===e&&(M([]),He(),y(!0))},Ae=function(){var e=Object(a.a)(r.a.mark((function e(){var t,c,i,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[].concat(Object(n.a)(d.ammPools),Object(n.a)(d.lpPools)),e.next=3,Promise.all(t.map(function(){var e=Object(a.a)(r.a.mark((function e(t){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=[t.chainId,t.address,l.detail.account],e.next=3,j.a.request("getUserStakeInfo",c);case 3:if(!e.sent.isStaked){e.next=8;break}return e.abrupt("return",t);case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:c=(c=e.sent).filter((function(e){return e})),i=c.filter((function(e){return"lp"!==e.type})),s=c.filter((function(e){return"lp"===e.type})),Ee(i),Te(s);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_e=function(){$(!1),ee(!1),ae(!1),pe(!1),oe(!1),xe(!1),he(!1)};Object(o.useEffect)((function(){l.isConnected()&&Ae()}),[l.detail,d,f]),Object(o.useEffect)((function(){var e=[],t="amm"===f?d.ammPools:d.lpPools;if(Y){var c=t.filter((function(e){return"option"===e.type}));e=[].concat(Object(n.a)(e),Object(n.a)(c))}if(Z){var a=t.filter((function(e){return("v2"===e.version||"v3"===e.version)&&"option"!==e.type}));e=[].concat(Object(n.a)(e),Object(n.a)(a))}if(ne){var i=t.filter((function(e){return"v2_lite"===e.version||"v3_lite"===e.version}));e=[].concat(Object(n.a)(e),Object(n.a)(i))}if(re){if(Y){var s=t.filter((function(e){return(56===+e.chainId||97===+e.chainId)&&"option"===e.type}));e=[].concat(Object(n.a)(e),Object(n.a)(s))}if(Z){var r=t.filter((function(e){return(56===+e.chainId||97===+e.chainId)&&("v2"===e.version||"v3"===e.version)&&"option"!==e.type}));e=[].concat(Object(n.a)(e),Object(n.a)(r))}if(ne){var o=t.filter((function(e){return(56===+e.chainId||97===+e.chainId)&&("v2_lite"===e.version||"v3_lite"===e.version)}));e=[].concat(Object(n.a)(e),Object(n.a)(o))}if(!Y&&!Z&&!ne){var l=t.filter((function(e){return 56===+e.chainId||97===+e.chainId}));e=[].concat(Object(n.a)(e),Object(n.a)(l))}}if(ue){if(Y){var u=t.filter((function(e){return(42161===+e.chainId||421611===+e.chainId)&&"option"===e.type}));e=[].concat(Object(n.a)(e),Object(n.a)(u))}if(Z){var h=t.filter((function(e){return(42161===+e.chainId||421611===+e.chainId)&&"v3"===e.version&&"option"!==e.type}));e=[].concat(Object(n.a)(e),Object(n.a)(h))}if(ne){var j=t.filter((function(e){return(42161===+e.chainId||421611===+e.chainId)&&("v2_lite"===e.version||"v3_lite"===e.version)}));e=[].concat(Object(n.a)(e),Object(n.a)(j))}if(!Y&&!Z&&!ne){var b=t.filter((function(e){return 42161===+e.chainId||421611===+e.chainId}));e=[].concat(Object(n.a)(e),Object(n.a)(b))}}if(fe){if(Y){var p=t.filter((function(e){return 137===+e.chainId&&"option"===e.type}));e=[].concat(Object(n.a)(e),Object(n.a)(p))}if(Z){var O=t.filter((function(e){return 137===+e.chainId&&("v2"===e.version||"v3"===e.version)&&"option"!==e.type}));e=[].concat(Object(n.a)(e),Object(n.a)(O))}if(ne){var v=t.filter((function(e){return 137===+e.chainId&&("v2_lite"===e.version||"v3_lite"===e.version)}));e=[].concat(Object(n.a)(e),Object(n.a)(v))}if(!Y&&!Z&&!ne){var m=t.filter((function(e){return 137===+e.chainId}));e=[].concat(Object(n.a)(e),Object(n.a)(m))}}if(re&&fe&&ue){e=[];var x=t.filter((function(e){return 137===+e.chainId||56===+e.chainId||42161===+e.chainId}));e=[].concat(Object(n.a)(e),Object(n.a)(x))}if(me){var k=t.filter((function(e){return 1===+e.chainId}));e=[].concat(Object(n.a)(e),Object(n.a)(k))}Y||Z||ne||re||fe||me||ue||(e=t),M(e)}),[Y,Z,ne,re,fe,me,ue]);var He=function(){var e=Object(a.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.loadOpen();case 2:M(d.openPools);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){q(g?t["open-pool-title"]:t["deri-pool-title"])}),[g]),Object(o.useEffect)((function(){d.load()}),[]),Object(o.useEffect)((function(){"amm"===f?g||(M([]),M(ye?Ie:d.ammPools)):"deri"===f&&(M([]),M(ye?De:d.lpPools))}),[f,ye]),Object(o.useEffect)((function(){M(d.ammPools)}),[d.pools]),Object(o.useEffect)((function(){l.isConnected()&&("true"===Object(b.p)("poolClaim")?Re(!1):H&&Re(!0))}),[l,H,l.detail]),Object(O.jsxs)("div",{className:"pool-box",children:[Object(O.jsx)(V,{wallet:l}),Object(O.jsxs)("div",{className:"pool-info",children:[Object(O.jsxs)("div",{className:"left",children:[Object(O.jsx)("div",{className:"left-header-info",children:Object(O.jsxs)("div",{className:"pool-title",children:[Object(O.jsx)("div",{className:"pool-title-text",children:P}),Object(O.jsx)("div",{className:"pool-title-select-text",children:!g&&Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"pool-test-des",children:t["pool-title-des"]})})}),Object(O.jsx)("div",{className:"select-pool-ves",children:Object(O.jsx)(w,{selectList:Le,onChange:qe})}),Object(O.jsx)("div",{className:"simple-select-ves",children:Object(O.jsx)("img",{alt:"",src:k.default})})]})}),Object(O.jsxs)("div",{className:"pool-card-claim-bg",children:[!g&&Object(O.jsx)("div",{className:"pool-tab",children:Object(O.jsxs)("div",{className:"pool-tab-info",children:[Object(O.jsxs)("div",{className:"tab-mining",children:[Object(O.jsx)("div",{className:"amm"===f?"pool-active":"pool-unactive",onClick:function(){p("amm")},children:t["amm-liquidity-mining"]}),Object(O.jsx)("div",{className:"deri"===f?"pool-active":"pool-unactive",onClick:function(){p("deri")},children:t["deri-liquidity-mining"]})]}),Object(O.jsxs)("div",{className:"simple-tab-mining",children:[Object(O.jsx)("div",{className:"amm"===f?"pool-active":"pool-unactive",onClick:function(){p("amm")},children:t.amm}),Object(O.jsx)("div",{className:"deri"===f?"pool-active":"pool-unactive",onClick:function(){p("deri")},children:t["type-deri"]})]}),Object(O.jsxs)("div",{className:"filter",children:[Object(O.jsx)("img",{alt:"",src:R,className:"filter-img",onClick:function(){Q(!W)}}),W&&Object(O.jsx)(B,{curTabPool:f,lang:t,isShowFilter:W,checkedStaked:ye,setCheckedStaked:Ne,setIsShowFilter:Q,setCheckedOption:$,setCheckedFutureMain:ee,setCheckedFutureInno:ae,setCheckedPolygon:pe,setCheckedBSC:oe,setCheckedArb:he,setCheckedETH:xe,clearFilter:_e,checkedPolygon:fe,checkedETH:me,checkedOption:Y,checkedFutureMain:Z,checkedFutureInno:ne,checkedBSC:re,checkedArb:ue})]})]})}),Object(O.jsx)("div",{className:"pool-card",children:H.map((function(e,c){return Object(O.jsx)(T.a,{wallet:l,lang:t,pool:e},c)}))}),!g&&Object(O.jsx)(v,{lang:t,wallet:l,getLang:c}),Object(O.jsx)("div",{className:!0})]})]}),Object(O.jsx)("div",{className:"right",children:Object(O.jsxs)("div",{className:"right-info",children:[Object(O.jsxs)("div",{className:"select-pool-ves-staked",children:[Object(O.jsx)("div",{className:"select-pool-ves",children:Object(O.jsx)(w,{selectList:Le,onChange:qe})}),!g&&Object(O.jsxs)("div",{className:"staked-only",children:[Object(O.jsx)("div",{className:"staked-only-text",children:t["staked-only"]}),Object(O.jsx)("div",{children:Object(O.jsx)(I.a,{className:"l-toggle",checked:ye,onClick:function(e){Ne(e)}})})]})]}),!g&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"select-pool-type-network",children:Object(O.jsxs)("div",{className:"network",children:[Object(O.jsx)("div",{className:"type-cols",children:t.network}),Object(O.jsxs)("div",{className:"type-cols",children:[Object(O.jsxs)("div",{className:"type-title",children:[" ",Object(O.jsx)("img",{alt:"",src:F.default})," BNB Chain"]}),Object(O.jsx)("div",{children:Object(O.jsx)(E.a,{checked:re,className:"l-checkbox",onChange:function(e){oe(e)}})})]}),"deri"!==f&&Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"type-cols",children:[Object(O.jsxs)("div",{className:"type-title",children:[" ",Object(O.jsx)("img",{alt:"",src:S.default})," Arbitrum"]}),Object(O.jsx)("div",{children:Object(O.jsx)(E.a,{checked:ue,className:"l-checkbox",onChange:function(e){he(e)}})})]})}),"deri"===f&&Object(O.jsxs)("div",{className:"type-cols",children:[Object(O.jsxs)("div",{className:"type-title",children:[Object(O.jsx)("img",{alt:"",src:D.default})," Ethereum"]}),Object(O.jsx)("div",{children:Object(O.jsx)(E.a,{checked:me,className:"l-checkbox",onChange:function(e){xe(e)}})})]})]})}),Object(O.jsxs)("div",{className:"select-footer",children:[Object(O.jsx)("div",{className:"clear-all-filter",onClick:_e,children:t["clear-all-filter"]}),Object(O.jsx)("div",{className:"deri-logo",children:Object(O.jsx)(L.a,{token:"pool-deri-logo",width:"72",height:"84"})})]})]})]})})]})]})})))}}]);
//# sourceMappingURL=20.148fc2ca.chunk.js.map