(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[20],{1403:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));var n,a=c(51),i=c(50),s=(c(5),c(6)),r=i.a.div(n||(n=Object(a.a)(["\nwidth:","%;\nmax-width:100%;\nheight:10px;\nbackground-color: #5577FD;\n"])),(function(e){return e.width}));function l(e){var t=e.startTimestamp,c=e.nowTimestamp,n=e.endTimestamp,a=parseInt((c-t)/(n-t)*100);return Object(s.jsx)("div",{className:"time-slider",children:Object(s.jsx)(r,{width:a})})}},1404:function(e,t,c){"use strict";var n,a,i,s,r=c(45),l=c(7),o=c(146),d=c(51),u=c(5),h=c(50),j=c(109),b=c.n(j),f=c(6),p=h.a.div(n||(n=Object(d.a)(["\n  display: inline-block;\n  vertical-align: middle;\n"]))),v=h.a.svg(a||(a=Object(d.a)(["\n  fill: none;\n  stroke: white;\n  stroke-width: 2px;\n"]))),m=h.a.input.attrs({type:"checkbox"})(i||(i=Object(d.a)(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"]))),O=h.a.div(s||(s=Object(d.a)(["\n  background: ",";\n  border: 2px solid #5577FD;\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border-radius: 4px;\n  box-sizing: border-box;\n  border-radius: 4px;\n  cursor : pointer;\n  position : relative;\n\n  ",":focus + & {\n    box-shadow: 0 0 0 3px pink;\n  }\n\n  "," {\n    visibility: ",";\n    display: flex;\n    position : absolute;\n\n  }\n"])),(function(e){return e.checked?"#5577FD":"none"}),m,v,(function(e){return e.checked?"visible":"hidden"}));t.a=function(e){var t=e.className,c=e.onChange,n=e.checked,a=Object(o.a)(e,["className","onChange","checked"]),i=Object(u.useState)(n),s=Object(l.a)(i,2),d=s[0],h=s[1];Object(u.useEffect)((function(){h(n)}),[n]);var j=b()("c-checkbox",{checked:d});return Object(f.jsxs)(p,{className:t,children:[Object(f.jsx)(m,Object(r.a)(Object(r.a)({checked:d},a),{},{onChange:c})),Object(f.jsx)(O,{checked:d,className:j,onClick:function(){var e=!d;h(e),c&&c(e)},children:Object(f.jsx)(v,{className:"icon",viewBox:"0 0 24 24",children:Object(f.jsx)("polyline",{points:"20 6 9 17 4 12"})})})]})}},1534:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var n=c(1617),a=c.n(n),i=(c(1621),c(1622),c(6));function s(e){var t=e.label,c=e.className,n=e.checked,s=e.onClick,r=function(e){s&&s(!n)};return Object(i.jsxs)("div",{className:"l-toggle",children:[Object(i.jsx)("span",{className:"label-text",children:t}),Object(i.jsx)(a.a,{onClick:r,checked:n,className:c,onChange:r,icons:!1})]})}},1615:function(e,t,c){"use strict";c.d(t,"a",(function(){return p}));var n=c(0),a=c.n(n),i=c(2),s=c(7),r=c(5),l=c(170),o=c(1403),d=c(473),u=c(171),h=c(1201),j=c(35),b=c(25),f=(c(1616),c(6));function p(e){var t=e.lang,c=e.getLang,n=e.poolShow,p=void 0===n||n,v=e.wallet,m=void 0===v?{}:v,O=Object(r.useState)(""),x=Object(s.a)(O,2),k=x[0],g=x[1],y=Object(r.useState)(0),N=Object(s.a)(y,2),w=N[0],C=N[1],S=Object(u.c)(),F=Object(r.useState)(0),I=Object(s.a)(F,2),E=I[0],T=I[1],P=Object(r.useState)(0),_=Object(s.a)(P,2),M=_[0],B=_[1],D=Object(r.useState)({}),L=Object(s.a)(D,2),X=L[0],q=L[1],R=Object(r.useState)(!1),H=Object(s.a)(R,2),U=H[0],Y=H[1],z=Object(r.useState)(""),J=Object(s.a)(z,2),A=J[0],W=J[1],$=Object(d.a)(X.chainId);Object(r.useEffect)((function(){var e;return e=window.setInterval((function(){var e=28800,c=parseInt(Date.now()/1e3),n=parseInt(c/e)*e,a=n+e-c,i=parseInt(a/3600),s=parseInt(a%3600/60),r=parseInt(a%60);C(n),T(n+e),B(c),g("".concat(i," ").concat(t.h," ").concat(s," ").concat(t.m," ").concat(r," ").concat(t.s))}),1e3),function(){e&&clearInterval(e)}}),[]);var G=function(){var e=Object(i.a)(a.a.mark((function e(){var t,c,n,i,s,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m.isConnected()){e.next=10;break}return e.next=3,j.a.request("getUserInfoAll",[m.detail.account]);case 3:t=e.sent,c=(+t.total).toFixed(2),n=t.valid?(+t.amount).toFixed(2):0,i=t.lp,s=(+t.trade).toFixed(2),r=t.chainId,q({claimed:c,unclaimed:n,harvestDeriLp:i,harvestDeriTrade:s,chainId:r});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(i.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==$.name){e.next=3;break}return S.error("".concat(t["wrong-network"])),e.abrupt("return");case 3:if(Object(b.f)(m.detail.chainId,X.chainId)){e.next=6;break}return S.error("".concat(t["your-deri-is-on"]," ").concat($.name," ").concat(t["connect-to"]," ").concat($.name," ").concat(t["to-claim"])),e.abrupt("return");case 6:if(0!==+X.unclaimed){e.next=9;break}return S.error(t["no-deri-to-claim-yet"]),e.abrupt("return");case 9:if(!(parseInt(Date.now()/1e3)%28800<1800)){e.next=13;break}return S.error(t["claiming-DERI-is-disabled-during-first-30-minutes-of-each-epoch"]),e.abrupt("return");case 13:return e.next=15,j.a.request("mintDToken",[m.detail.chainId,m.detail.account],{includeResponse:!0});case 15:if(!e.sent.success){e.next=20;break}return e.abrupt("return",!0);case 20:return S.error(t["claim-failed"]),e.abrupt("return",!1);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(i.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m.isConnected()){e.next=7;break}return e.next=3,K();case 3:e.sent&&Y(!0),e.next=17;break;case 7:return e.prev=7,e.next=10,m.connect();case 10:return t=e.sent,e.abrupt("return",!!t);case 14:return e.prev=14,e.t0=e.catch(7),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(){return e.apply(this,arguments)}}(),V=function(e){var c;switch(e){case 1:c=t.jan;break;case 2:c=t.feb;break;case 3:c=t.mar;break;case 4:c=t.apr;break;case 5:c=t.may;break;case 6:c=t.jun;break;case 7:c=t.jul;break;case 8:c=t.aug;break;case 9:c=t.sep;break;case 10:c=t.oct;break;case 11:c=t.nov;break;case 12:c=t.dec}return c},Z=function(){var e=Object(i.a)(a.a.mark((function e(){var t,c,n,i,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m.isConnected()){e.next=5;break}return e.next=3,j.a.request("getUserFirstClaimInfo",[m.detail.account]);case 3:(t=e.sent).first_timestamp?(c=new Date(1e3*t.first_timestamp),n=c.getFullYear(),i=c.getMonth()+1,i=V(i),s=c.getDate(),W("".concat(i," ").concat(s,", ").concat(n))):W("");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e=window.setInterval(G,18e4);return G(),Z(),function(){return clearInterval(e)}}),[m.detail.account]),Object(f.jsx)("div",{className:"mining-claim",children:Object(f.jsxs)("div",{className:"mining-claim-info",children:[Object(f.jsxs)("div",{className:"deri-num-slider",children:[Object(f.jsxs)("div",{className:"deri-claim-time",children:[t["current-epoch-remaining-time"]," : ",k]}),X.harvestDeriLp>0&&Object(f.jsxs)("div",{className:"deri-claim-text",children:[t["your-harvest-in-current"]," ",Object(f.jsx)("span",{className:"deri-num",children:Object(f.jsx)(h.a,{value:X.harvestDeriLp,decimalScale:2,displayType:"text",di:!0,thousandSeparator:!0})}),"   $DERI."]}),p&&Object(f.jsxs)("div",{className:"deri-claim-text",children:[c("claim-deri",{num:U?0:X.unclaimed?X.unclaimed:0}),A&&Object(f.jsxs)("span",{children:[" ",c("claim-deri-history",{date:A,num:U?+X.unclaimed+ +X.claimed:X.claimed})," . ",t.woohoo]})]}),Object(f.jsx)("div",{className:"deri-claim-slider",children:Object(f.jsx)(o.a,{startTimestamp:w,nowTimestamp:M,endTimestamp:E})})]}),p&&Object(f.jsx)("div",{className:"cliam-button",children:Object(f.jsx)(l.a,{icon:"ClaimDeri",fontWeight:"bold",label:t["claim-all"],onClick:Q})})]})})}},1616:function(e,t,c){},1617:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e},a=function(){function e(e,t){for(var c=0;c<t.length;c++){var n=t[c];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,c,n){return c&&e(t.prototype,c),n&&e(t,n),t}}(),i=c(5),s=h(i),r=h(c(109)),l=h(c(13)),o=h(c(1618)),d=h(c(1619)),u=c(1620);function h(e){return e&&e.__esModule?e:{default:e}}var j=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var c=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return c.handleClick=c.handleClick.bind(c),c.handleTouchStart=c.handleTouchStart.bind(c),c.handleTouchMove=c.handleTouchMove.bind(c),c.handleTouchEnd=c.handleTouchEnd.bind(c),c.handleFocus=c.handleFocus.bind(c),c.handleBlur=c.handleBlur.bind(c),c.previouslyChecked=!(!e.checked&&!e.defaultChecked),c.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},c}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){if(!this.props.disabled){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var c=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:c})}}},{key:"handleTouchStart",value:function(e){this.props.disabled||(this.startX=(0,u.pointerCoord)(e).x,this.activated=!0)}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,u.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var c=(0,u.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>c?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<c&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var c=this.props.icons;return c?void 0===c[e]?t.defaultProps.icons[e]:c[e]:null}},{key:"render",value:function(){var e=this,t=this.props,c=t.className,a=(t.icons,function(e,t){var c={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(c[n]=e[n]);return c}(t,["className","icons"])),i=(0,r.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},c);return s.default.createElement("div",{className:i,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},s.default.createElement("div",{className:"react-toggle-track"},s.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),s.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),s.default.createElement("div",{className:"react-toggle-thumb"}),s.default.createElement("input",n({},a,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(i.PureComponent);t.default=j,j.displayName="Toggle",j.defaultProps={icons:{checked:s.default.createElement(o.default,null),unchecked:s.default.createElement(d.default,null)}},j.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},1618:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=c(5),i=(n=a)&&n.__esModule?n:{default:n};t.default=function(){return i.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},i.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},1619:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=c(5),i=(n=a)&&n.__esModule?n:{default:n};t.default=function(){return i.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},i.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},1620:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var c=t[0];return{x:c.clientX,y:c.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},1621:function(e,t,c){},1622:function(e,t,c){},2093:function(e,t,c){},2406:function(e,t,c){"use strict";c.r(t);var n,a=c(0),i=c.n(a),s=c(21),r=c(2),l=c(7),o=c(5),d=c(44),u=c(1615),h=c(51),j=c(295),b=(c(143),c(50)),f=c(109),p=c.n(f),v=c(6),m=b.a.div(n||(n=Object(h.a)(["\ncursor:pointer;\nfont-weight: 600;\n.dropdown-menu{\n  display:none\n}\n.dropdown-menu.show{\n  margin-top:8px;\n  background: #203B60;\n  display:block;\n  border-radius:4px;\n  z-index:8;\n  position:relative;\n  .dropdown-item{\n    padding:0 24px;\n  }\n}\n.btn{\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 24px;\n  color:#FFFFFF;\n\n}\n.dropdown-item:hover{\n  color:#FFFFFF\n}\n"])));function O(e){var t=e.selectList,c=void 0===t?[]:t,n=e.onChange,a=Object(o.useState)(!1),i=Object(l.a)(a,2),s=i[0],r=i[1],d=Object(o.useState)(c[0].text),u=Object(l.a)(d,2),h=u[0],b=u[1],f=p()("dropdown-menu",{show:s});return Object(v.jsxs)(m,{children:[Object(v.jsxs)("div",{onClick:function(){r(!s)},className:"btn checked",children:[h,Object(v.jsx)("img",{src:j.default,alt:""})]}),Object(v.jsx)("div",{className:f,children:c.map((function(e,t){return Object(v.jsx)("div",{className:"dropdown-item",onClick:function(){!function(e){b(e.text),n(e.index),r(!1)}(e)},children:e.text},t)}))})]})}var x=c(1534),k=c(1404),g=c(472),y=c(474),N=c(471),w=c(1759),C=(c(2093),c.p+"static/media/filter-close.b72edec1.svg");function S(e){var t=e.lang,c=(e.isShowFilter,e.checkedStaked),n=e.setCheckedStaked,a=e.setIsShowFilter,i=e.curTabPool,s=e.checkedPolygon,r=e.checkedETH,l=e.checkedOption,o=e.checkedFutureMain,d=e.checkedFutureInno,u=e.checkedBSC,h=e.setCheckedOption,j=e.setCheckedFutureMain,b=e.setCheckedFutureInno,f=e.setCheckedPolygon,p=e.setCheckedBSC,m=e.setCheckedETH,O=e.clearFilter;return Object(v.jsxs)("div",{className:"filter-modal",children:[Object(v.jsx)("div",{className:"close-filter-modal",children:Object(v.jsx)("span",{className:"close-icon",onClick:function(){a()},children:Object(v.jsx)("img",{alt:"",src:C})})}),Object(v.jsxs)("div",{className:"staked-only",children:[Object(v.jsx)("div",{className:"staked-only-text",children:t["staked-only"]}),Object(v.jsx)("div",{children:Object(v.jsx)(x.a,{className:"l-toggle",checked:c,onClick:function(e){n(e)}})})]}),Object(v.jsxs)("div",{className:"select-pool-type-network",children:[Object(v.jsxs)("div",{className:"pool-type",children:[Object(v.jsx)("div",{className:"type-cols",children:t.type}),Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsx)("div",{className:"type-title",children:t.options}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:l,className:"l-checkbox",onChange:function(e){h(e)}})})]}),Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsx)("div",{className:"type-title",children:t["future-main"]}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:o,className:"l-checkbox",onChange:function(e){j(e)}})})]}),Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsx)("div",{className:"type-title",children:t["future-inno"]}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:d,className:"l-checkbox",onChange:function(e){b(e)}})})]})]}),Object(v.jsxs)("div",{className:"network",children:[Object(v.jsx)("div",{className:"type-cols",children:t.network}),Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsxs)("div",{className:"type-title",children:[Object(v.jsx)("img",{alt:"",src:g.default})," BNB Chain"]}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:u,className:"l-checkbox",onChange:function(e){p(e)}})})]}),"deri"!==i&&Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsxs)("div",{className:"type-title",children:[Object(v.jsx)("img",{alt:"",src:y.default})," Polygon"]}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:s,className:"l-checkbox",onChange:function(e){f(e)}})})]}),"deri"===i&&Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsxs)("div",{className:"type-title",children:[Object(v.jsx)("img",{alt:"",src:N.default})," Ethereum"]}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:r,className:"l-checkbox",onChange:function(e){m(e)}})})]})]})]}),Object(v.jsx)("div",{className:"select-footer",children:Object(v.jsx)("div",{className:"clear-all-filter",onClick:function(){O()},children:t["clear-all-filter"]})})]})}var F=c(35),I=c.p+"static/media/filter.057de510.svg",E=(c(1760),c(31));t.default=Object(d.b)("wallet","poolManager")(Object(d.c)((function(e){var t=e.lang,c=e.getLang,n=e.wallet,a=void 0===n?{}:n,d=e.poolManager,h=Object(o.useState)("amm"),b=Object(l.a)(h,2),f=b[0],p=b[1],m=Object(o.useState)(!1),C=Object(l.a)(m,2),T=C[0],P=C[1],_=Object(o.useState)(t["deri-pool-title"]),M=Object(l.a)(_,2),B=M[0],D=M[1],L=Object(o.useState)([]),X=Object(l.a)(L,2),q=X[0],R=X[1],H=Object(o.useState)(!1),U=Object(l.a)(H,2),Y=U[0],z=U[1],J=Object(o.useState)(!1),A=Object(l.a)(J,2),W=A[0],$=A[1],G=Object(o.useState)(!1),K=Object(l.a)(G,2),Q=K[0],V=K[1],Z=Object(o.useState)(!1),ee=Object(l.a)(Z,2),te=ee[0],ce=ee[1],ne=Object(o.useState)(!1),ae=Object(l.a)(ne,2),ie=ae[0],se=ae[1],re=Object(o.useState)(!1),le=Object(l.a)(re,2),oe=le[0],de=le[1],ue=Object(o.useState)(!1),he=Object(l.a)(ue,2),je=he[0],be=he[1],fe=Object(o.useState)(!1),pe=Object(l.a)(fe,2),ve=pe[0],me=pe[1],Oe=Object(o.useState)([]),xe=Object(l.a)(Oe,2),ke=xe[0],ge=xe[1],ye=Object(o.useState)([]),Ne=Object(l.a)(ye,2),we=Ne[0],Ce=Ne[1],Se=[{text:t["deri-pool-title"],index:"official"},{text:t["open-pool-title"],index:"open"}],Fe=function(e){"official"===e?(R(d.ammPools),P(!1)):"open"===e&&(R([]),Te(),P(!0))},Ie=function(){var e=Object(r.a)(i.a.mark((function e(){var t,c,n,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[].concat(Object(s.a)(d.ammPools),Object(s.a)(d.lpPools)),e.next=3,Promise.all(t.map(function(){var e=Object(r.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=[t.chainId,t.address,a.detail.account],e.next=3,F.a.request("getUserStakeInfo",c);case 3:if(!e.sent.isStaked){e.next=8;break}return e.abrupt("return",t);case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:c=(c=e.sent).filter((function(e){return e})),n=c.filter((function(e){return"lp"!==e.type})),l=c.filter((function(e){return"lp"===e.type})),ge(n),Ce(l);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ee=function(){z(!1),V(!1),ce(!1),de(!1),se(!1),be(!1)};Object(o.useEffect)((function(){a.isConnected()&&Ie()}),[a.detail,d,f]),Object(o.useEffect)((function(){var e=[],t="amm"===f?d.ammPools:d.lpPools;if(Y){var c=t.filter((function(e){return"option"===e.type}));e=[].concat(Object(s.a)(e),Object(s.a)(c))}if(Q){var n=t.filter((function(e){return("v2"===e.version||"v3"===e.version)&&"option"!==e.type}));e=[].concat(Object(s.a)(e),Object(s.a)(n))}if(te){var a=t.filter((function(e){return"v2_lite"===e.version||"v3_lite"===e.version}));e=[].concat(Object(s.a)(e),Object(s.a)(a))}if(ie){if(e=[],Y){var i=t.filter((function(e){return(56===+e.chainId||97===+e.chainId)&&"option"===e.type}));e=[].concat(Object(s.a)(e),Object(s.a)(i))}if(Q){var r=t.filter((function(e){return(56===+e.chainId||97===+e.chainId)&&("v2"===e.version||"v3"===e.version)&&"option"!==e.type}));e=[].concat(Object(s.a)(e),Object(s.a)(r))}if(te){var l=t.filter((function(e){return(56===+e.chainId||97===+e.chainId)&&("v2_lite"===e.version||"v3_lite"===e.version)}));e=[].concat(Object(s.a)(e),Object(s.a)(l))}if(!Y&&!Q&&!te){var o=t.filter((function(e){return 56===+e.chainId||97===+e.chainId}));e=[].concat(Object(s.a)(e),Object(s.a)(o))}}if(oe){if(e=[],Y){var u=t.filter((function(e){return 137===+e.chainId&&"option"===e.type}));e=[].concat(Object(s.a)(e),Object(s.a)(u))}if(Q){var h=t.filter((function(e){return 137===+e.chainId&&("v2"===e.version||"v3"===e.version)&&"option"!==e.type}));e=[].concat(Object(s.a)(e),Object(s.a)(h))}if(te){var j=t.filter((function(e){return 137===+e.chainId&&("v2_lite"===e.version||"v3_lite"===e.version)}));e=[].concat(Object(s.a)(e),Object(s.a)(j))}if(!Y&&!Q&&!te){var b=t.filter((function(e){return 137===+e.chainId}));e=[].concat(Object(s.a)(e),Object(s.a)(b))}}if(ie&&oe){e=[];var p=t.filter((function(e){return 137===+e.chainId||56===+e.chainId}));e=[].concat(Object(s.a)(e),Object(s.a)(p))}if(je){var v=t.filter((function(e){return 1===+e.chainId}));e=[].concat(Object(s.a)(e),Object(s.a)(v))}Y||Q||te||ie||oe||je||(e=t),R(e)}),[Y,Q,te,ie,oe,je]);var Te=function(){var e=Object(r.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.loadOpen();case 2:R(d.openPools);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){D(T?t["open-pool-title"]:t["deri-pool-title"])}),[T]),Object(o.useEffect)((function(){d.load()}),[]),Object(o.useEffect)((function(){"amm"===f?T||(R([]),R(ve?ke:d.ammPools)):"deri"===f&&(R([]),R(ve?we:d.lpPools))}),[f,ve]),Object(o.useEffect)((function(){R(d.ammPools)}),[d.pools]),Object(v.jsx)("div",{className:"pool-box",children:Object(v.jsxs)("div",{className:"pool-info",children:[Object(v.jsxs)("div",{className:"left",children:[Object(v.jsx)("div",{className:"left-header-info",children:Object(v.jsxs)("div",{className:"pool-title",children:[Object(v.jsx)("div",{className:"pool-title-text",children:B}),Object(v.jsx)("div",{className:"pool-title-select-text",children:!T&&Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"pool-test-des",children:t["pool-title-des"]})})}),Object(v.jsx)("div",{className:"select-pool-ves",children:Object(v.jsx)(O,{selectList:Se,onChange:Fe})}),Object(v.jsx)("div",{className:"simple-select-ves",children:Object(v.jsx)("img",{alt:"",src:j.default})})]})}),Object(v.jsxs)("div",{className:"pool-card-claim-bg",children:[!T&&Object(v.jsx)(u.a,{lang:t,wallet:a,getLang:c}),!T&&Object(v.jsx)("div",{className:"pool-tab",children:Object(v.jsxs)("div",{className:"pool-tab-info",children:[Object(v.jsxs)("div",{className:"tab-mining",children:[Object(v.jsx)("div",{className:"amm"===f?"pool-active":"pool-unactive",onClick:function(){p("amm")},children:t["amm-liquidity-mining"]}),Object(v.jsx)("div",{className:"deri"===f?"pool-active":"pool-unactive",onClick:function(){p("deri")},children:t["deri-liquidity-mining"]})]}),Object(v.jsxs)("div",{className:"simple-tab-mining",children:[Object(v.jsx)("div",{className:"amm"===f?"pool-active":"pool-unactive",onClick:function(){p("amm")},children:t.amm}),Object(v.jsx)("div",{className:"deri"===f?"pool-active":"pool-unactive",onClick:function(){p("deri")},children:t["type-deri"]})]}),Object(v.jsxs)("div",{className:"filter",children:[Object(v.jsx)("img",{alt:"",src:I,className:"filter-img",onClick:function(){$(!W)}}),W&&Object(v.jsx)(S,{curTabPool:f,lang:t,isShowFilter:W,checkedStaked:ve,setCheckedStaked:me,setIsShowFilter:$,setCheckedOption:z,setCheckedFutureMain:V,setCheckedFutureInno:ce,setCheckedPolygon:de,setCheckedBSC:se,setCheckedETH:be,clearFilter:Ee,checkedPolygon:oe,checkedETH:je,checkedOption:Y,checkedFutureMain:Q,checkedFutureInno:te,checkedBSC:ie})]})]})}),Object(v.jsx)("div",{className:"pool-card",children:q.map((function(e,c){return Object(v.jsx)(w.a,{wallet:a,lang:t,pool:e},c)}))}),Object(v.jsx)("div",{className:!0})]})]}),Object(v.jsx)("div",{className:"right",children:Object(v.jsxs)("div",{className:"right-info",children:[Object(v.jsxs)("div",{className:"select-pool-ves-staked",children:[Object(v.jsx)("div",{className:"select-pool-ves",children:Object(v.jsx)(O,{selectList:Se,onChange:Fe})}),!T&&Object(v.jsxs)("div",{className:"staked-only",children:[Object(v.jsx)("div",{className:"staked-only-text",children:t["staked-only"]}),Object(v.jsx)("div",{children:Object(v.jsx)(x.a,{className:"l-toggle",checked:ve,onClick:function(e){me(e)}})})]})]}),!T&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"select-pool-type-network",children:[Object(v.jsxs)("div",{className:"pool-type",children:[Object(v.jsx)("div",{className:"type-cols",children:t.type}),Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsx)("div",{className:"type-title",children:t.options}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:Y,className:"l-checkbox",onChange:function(e){z(e)}})})]}),Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsx)("div",{className:"type-title",children:t["future-main"]}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:Q,className:"l-checkbox",onChange:function(e){V(e)}})})]}),Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsx)("div",{className:"type-title",children:t["future-inno"]}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:te,className:"l-checkbox",onChange:function(e){ce(e)}})})]})]}),Object(v.jsxs)("div",{className:"network",children:[Object(v.jsx)("div",{className:"type-cols",children:t.network}),Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsxs)("div",{className:"type-title",children:[" ",Object(v.jsx)("img",{alt:"",src:g.default})," BNB Chain"]}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:ie,className:"l-checkbox",onChange:function(e){se(e)}})})]}),"deri"!==f&&Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsxs)("div",{className:"type-title",children:[" ",Object(v.jsx)("img",{alt:"",src:y.default})," Polygon"]}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:oe,className:"l-checkbox",onChange:function(e){de(e)}})})]}),"deri"===f&&Object(v.jsxs)("div",{className:"type-cols",children:[Object(v.jsxs)("div",{className:"type-title",children:[Object(v.jsx)("img",{alt:"",src:N.default})," Ethereum"]}),Object(v.jsx)("div",{children:Object(v.jsx)(k.a,{checked:je,className:"l-checkbox",onChange:function(e){be(e)}})})]})]})]}),Object(v.jsxs)("div",{className:"select-footer",children:[Object(v.jsx)("div",{className:"clear-all-filter",onClick:Ee,children:t["clear-all-filter"]}),Object(v.jsx)("div",{className:"deri-logo",children:Object(v.jsx)(E.a,{token:"pool-deri-logo",width:"72",height:"84"})})]})]})]})})]})})})))}}]);
//# sourceMappingURL=20.df0c84b0.chunk.js.map