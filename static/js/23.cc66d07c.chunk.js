(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[23],{1277:function(e,t,n){"use strict";var c,a,s=n(37),i=n(192),r=n(46),d=n(9),o=n(54),l=n(6),j=(n(68),n(1361)),b=n(53),u=n(20),m=n(15),h=n(4),g=["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"],O=Object(b.a)(j.a)(c||(c=Object(o.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),x=b.a.div(a||(a=Object(o.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));t.a=function(e){var t=Object(l.useState)(Object(h.jsx)("span",{className:"loading-line"})),n=Object(d.a)(t,2),c=n[0],a=n[1],o=Object(l.useState)(!0),j=Object(d.a)(o,2),b=j[0],f=j[1],v=function(){var t=e.allowZero;return"object"!==Object(r.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},p=function(e){return e&&e.replace(/\.$/,"")};return Object(l.useEffect)((function(){var t=e.allowZero,n=(e.wallet,e.closeShowLoadingEffectAfterLoaded),c=e.defaultValue,r=void 0===c?"--":c,d=Object(i.a)(e,g);if(v())d.decimalScale>0&&d.value&&/\d+\.0*[1-9]+/.test(d.value)&&0===+Object(m.bg)(d.value).toFixed(+d.decimalScale||2)&&(d.decimalScale=Object(u.d)(Math.abs(d.value))+2),(-1===d.decimalScale||0===+d.value&&t)&&delete d.decimalScale,d.value=Object(u.K)(d.value),d.value&&/\d+.9{6}/.test(d.value)&&(d.value=(+d.value).toFixed(5)),a(Object(h.jsx)(O,Object(s.a)(Object(s.a)({},d),{},{renderText:p,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(b){var o=e.width,l=e.height;a(Object(h.jsx)(x,{className:"loading-line",width:o,height:l})),n&&f(!1)}var j=window.setTimeout((function(){v()||a(r)}),6e4);return function(){clearTimeout(j)}}),[e.value,e.decimalScale,e.suffix]),c}},1298:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var c,a=n(54),s=n(53),i=n(1440),r=n.n(i),d=n(146),o=n(20),l=n(1415),j=n(4),b=s.a.div(c||(c=Object(a.a)(["\n  display:",";\n  .text {\n    border-bottom : 1px dashed #93A1B8;\n    width : max-content;\n    cursor : pointer;\n    display:","\n  }\n  \n  .__react_component_tooltip.tooltip.show {\n    font-weight : "," \n  }\n"])),(function(e){return e.block}),(function(e){return e.block}),(function(e){return e.isWin?400:600}));function u(e){var t=e.text,n=e.id,c=void 0===n?String((new Date).getTime())+Math.random():n,a=e.tip,s=e.multiline,i=e.html,u=e.className,m=e.element,h=void 0===m?"":m,g=e.block,O=void 0===g?"block":g,x=e.width,f=void 0===x?"auto":x,v=e.children,p=e.tiggerEvent;return Object(j.jsxs)(b,{className:u,block:O,isWin:l.isWindows,children:[Object(j.jsx)("div",{className:"text","data-for":c,"data-tip":i?r.a.renderToString(h):a,"data-event":Object(o.z)()?"click":p,"data-html":i,children:t||v}),a&&Object(j.jsx)(d.a,{id:c,width:f,padding:"12",place:"bottom",overridePosition:function(e,t,n,c,a,s,i,r){var d=n.getBoundingClientRect(),o=c.getBoundingClientRect(),l=d.x,j=d.y,b=d.height,u=d.width;e.left,e.top;return l+o.width/2>document.documentElement.clientWidth?l-=Math.abs(u-o.width):l-(o.width-u)/2<0?l-=u:l-=(o.width-u)/2,j+b+o.height>=document.documentElement.clientHeight?j=j+b-o.height:j+=b,l<0&&(l=0),j<0&&(j=0),{top:j,left:l}},html:i,borderRadius:8,multiline:s})]})}},1444:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c,a=n(37),s=n(54),i=n(6),r=n(53),d=n(15),o=n(1298),l=n(4),j=r.a.div(c||(c=Object(s.a)(["\ndisplay : flex;\nfont-size : 14px;\nalign-items : center;\nbackground: rgba(85, 119, 253, 0.1);\nborder-radius: 4px;\njustify-content: space-between;\ninput {\n  background: transparent;\n  border-radius: 4px;\n  // min-width: 240px;\n  border: 0;\n  width : ",";\n  height: ",";\n  color : #E0ECFF;\n  font-size : 18px;\n  padding-left: 16px;\n}\ninput:focus {\n  outline: none;\n}\n.unit {\n  margin-right: ",";\n}\n"])),(function(e){return e.inputWidth}),(function(e){return e.inputHeight}),(function(e){return e.unitPadding}));function b(e){var t=e.value,n=e.unit,c=e.unitTip,s=e.max,r=e.step,b=e.onChange,u=e.styles,m=void 0===u?{}:u,h=e.disableNegtive,g=void 0===h||h,O=e.focus,x=e.placeholder,f=void 0===x?"":x,v=e.unitPadding,p=void 0===v?"24px":v,w=e.minTradeVolume,N=e.decimal,k=void 0===N?2:N,I=e.readOnly,_=e.inputWidth,C=void 0===_?"50%":_,S=e.inputHeight,y=void 0===S?"56px":S,T=e.className,W=e.disabled,F=void 0!==W&&W,E=e.onBlur,R=e.onFocus,D=Object(i.useRef)(null);return Object(i.useEffect)((function(){D.current.setCustomValidity(""),D.current&&O&&D.current.focus()}),[O]),Object(l.jsxs)(j,{unitPadding:p,inputWidth:C,inputHeight:y,className:T,style:Object(a.a)({},m),children:[Object(l.jsx)("input",{placeholder:f,type:"number",onBlur:E,onFocus:R,disabled:F,value:t,step:r,ref:D,onChange:function(e){var t="\\d+\\.\\d{0,".concat(k,"}$"),n=new RegExp(t),c=e.target.value;if(s&&Object(d.bg)(c).gt(s))b&&b(s);else if(g&&(c<0||isNaN(c)))b&&b("");else if(c){if(w>=1)if(c/w>=1)b&&b(Object(d.bg)(c).div(w).integerValue()*w);else b&&b(c*w);else if(/\d+\./.test(c)&&!n.test(c)){var a=c.substring(0,c.indexOf(".")+1+k);b&&b(a)}else b&&b(c)}else b&&b(c)},readOnly:I}),Object(l.jsx)("div",{className:"unit",children:c?Object(l.jsx)(o.a,{tip:c,text:n}):n})]})}},2198:function(e,t,n){},2199:function(e,t,n){},2412:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(9),s=n(0),i=n.n(s),r=n(6),d=n(45),o=n(15),l=n(1444),j=n(58),b=n(169),u=n(16),m=n(173),h=n(170),g=(n(2198),n(4));function O(){return Object(g.jsx)("div",{class:"sleepContentView",children:Object(g.jsx)("div",{class:"circle"})})}var x=n(303),f=n(466),v=n(475),p=n.p+"static/media/stage-one.9bfaa393.svg",w=n.p+"static/media/stage-two.1ce521f2.svg",N=n.p+"static/media/stage-three.507b43c5.svg",k=n(39),I=n.p+"static/media/succeed.1057d4b2.svg",_=n.p+"static/media/faild.831be6f1.svg";function C(e){var t=e.lang,n=e.wallet,s=e.amount,d=e.balance,o=e.initialize,l=e.isClaim,x=e.setSending,f=e.sending,v=e.setAmount,C=e.setIsClaim,y=e.isWalletConnected,T=Object(m.a)(),W=Object(h.c)(),F=Object(j.g)(),E=Object(r.useState)(!1),R=Object(a.a)(E,2),D=R[0],z=R[1],q=Object(r.useState)(!1),A=Object(a.a)(q,2),B=A[0],J=A[1],L=Object(r.useState)(!1),V=Object(a.a)(L,2),P=V[0],H=V[1],M=Object(r.useState)({}),$=Object(a.a)(M,2),U=$[0],Z=$[1],K=Object(r.useState)({}),G=Object(a.a)(K,2),Q=G[0],X=G[1],Y=Object(r.useState)(!1),ee=Object(a.a)(Y,2),te=ee[0],ne=ee[1],ce=Object(r.useState)(Object(g.jsx)(b.a,{type:u.o,className:"button-bridge",fontSize:"18",label:t.approve})),ae=Object(a.a)(ce,2),se=ae[0],ie=ae[1],re=function(){n.connect()},de=function(){var e=Object(c.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.isConnected()){e.next=6;break}return e.next=3,k.a.request("getUserWormholeSignature",[n.detail.account]);case 3:(t=e.sent).valid&&(n.switchNetwork(T[t.toChainId]),C(!0)),J(t.valid);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),oe=function(){var e=Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==s&&0!==s){e.next=3;break}return W.error(t["amount-must-be-greater-than-zero"]),e.abrupt("return");case 3:if(!(+s>d)){e.next=6;break}return W.error(t["there-is-not-enough-amount"]),e.abrupt("return");case 6:if(y.isFromConnected){e.next=9;break}return W.error("".concat(t["send-finished-one"]," ").concat(S(o.from_chainId,t).netWork," ").concat(t["send-finished-two"])),e.abrupt("return");case 9:return x(!0),H(!1),Z({stageOne:!1}),e.next=14,k.a.request("freeze",[n.detail.chainId,n.detail.account,o.to_chainId,s],{includeResponse:!0});case 14:e.sent.success?(ie(Object(g.jsx)(b.a,{type:u.o,className:"button-bridge",label:t.processing})),Z({stageOne:!0,stageTwo:!1}),window.setInterval((function(){de()}),3e3)):(H(!0),x(!1));case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),le=function(){var e=Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y.isToConnected){e.next=3;break}return W.error("".concat(t["send-finished-one"]," ").concat(S(o.to_chainId,t).netWork," ").concat(t["send-finished-two"])),e.abrupt("return");case 3:return ne(!0),H(!1),X({stageOne:!1}),e.next=8,k.a.request("mintDeri",[n.detail.chainId,n.detail.account],{includeResponse:!0});case 8:e.sent.success?(X({stageOne:!0,stageTwo:!1}),ie(Object(g.jsx)(b.a,{type:u.o,className:"button-bridge",label:t.processing})),window.setInterval((function(){de()}),3e3)):(ne(!1),H(!0));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),je=function(){F.push("/bridge")},be=function(){var e=Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.request("unlockDeri",[n.detail.chainId,n.detail.account],{includeResponse:!0});case 2:e.sent.success?(z(!0),ue()):(z(!1),W.error(t["approve-faild"]));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=Object(c.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.isConnected()){e.next=5;break}return e.next=3,k.a.request("isDeriUnlocked",[n.detail.chainId,n.detail.account]);case 3:t=e.sent,z(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){n.isConnected()&&(ue(),de())}),[n.detail,o]),Object(r.useEffect)((function(){B?Z({stageOne:!0,stageTwo:!0,stageThree:!0}):te&&(X({stageOne:!0,stageTwo:!0,stageThree:!0}),x(!1),v(""))}),[B,o]),Object(r.useEffect)((function(){var e;e=n.isConnected()?B?Object(g.jsx)(b.a,{type:u.o,className:"button-bridge",label:t.claim,onClick:le}):D?te?Object(g.jsxs)("button",{className:"complete",onClick:je,children:[" ",Object(g.jsx)("img",{alt:"",src:I})," ",t.complete," "]}):Object(g.jsx)(b.a,{type:u.o,className:"button-bridge",label:t.send,onClick:oe}):Object(g.jsx)(b.a,{type:u.o,className:"button-bridge",label:t.approve,onClick:be}):Object(g.jsx)(b.a,{type:u.o,className:"button-bridge",label:t["connect-wallet"],onClick:re}),ie(e)}),[B,n.detail,D,s,o,y,te]),Object(g.jsxs)("div",{className:"operate",children:[Object(g.jsxs)("div",{className:"from-to-title",children:[t.bridge," ",s,"  DERI ",t.from.toLowerCase()," ",o.from_network," ",t.to.toLowerCase()," ",o.to_network]}),Object(g.jsx)("div",{className:"btn",children:se}),Object(g.jsxs)("div",{className:"hint",children:[!l&&Object(g.jsxs)("div",{className:"sending",children:[Object(g.jsxs)("div",{className:"stage",children:[Object(g.jsxs)("div",{className:"stage-img-text",children:[Object(g.jsxs)("div",{className:"stage-img",children:[" ",Object(g.jsx)("img",{alt:"",src:p})]}),Object(g.jsxs)("div",{className:"stage-text",children:[t["sending-deri-to-wormhole"]," "]})]}),Object(g.jsxs)("div",{className:"ok-pending",children:[f&&Object(g.jsx)(g.Fragment,{children:U.stageOne?Object(g.jsx)("div",{className:"succeed",children:Object(g.jsx)("img",{alt:"",src:I})}):Object(g.jsx)("div",{className:"pending",children:Object(g.jsx)(O,{})})}),!f&&!P&&Object(g.jsx)("div",{className:"staic"}),P&&Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:_,alt:""})})]})]}),Object(g.jsxs)("div",{className:"stage",children:[Object(g.jsxs)("div",{className:"stage-img-text",children:[Object(g.jsxs)("div",{className:"stage-img",children:[" ",Object(g.jsx)("img",{alt:"",src:w})]}),Object(g.jsx)("div",{className:"stage-text",children:t["waiting-for-bridge-to-sign"]})]}),Object(g.jsxs)("div",{className:"ok-pending",children:[f&&Object(g.jsx)(g.Fragment,{children:U.stageOne&&Object(g.jsx)(g.Fragment,{children:U.stageTwo?Object(g.jsx)("div",{className:"succeed",children:Object(g.jsx)("img",{alt:"",src:I})}):Object(g.jsx)("div",{className:"pending",children:Object(g.jsx)(O,{})})})}),(!f||!U.stageOne)&&Object(g.jsx)("div",{className:"staic"})]})]}),Object(g.jsxs)("div",{className:"stage",children:[Object(g.jsxs)("div",{className:"stage-img-text",children:[Object(g.jsxs)("div",{className:"stage-img",children:[" ",Object(g.jsx)("img",{alt:"",src:N})]}),Object(g.jsx)("div",{className:"stage-text",children:t["bridge-signed"]})]}),Object(g.jsxs)("div",{className:"ok-pending",children:[f&&Object(g.jsx)(g.Fragment,{children:U.stageOne&&U.stageTwo&&Object(g.jsx)(g.Fragment,{children:U.stageThree?Object(g.jsx)("div",{className:"succeed",children:Object(g.jsx)("img",{alt:"",src:I})}):Object(g.jsx)("div",{className:"pending",children:Object(g.jsx)(O,{})})})}),(!f||!U.stageTwo)&&Object(g.jsx)("div",{className:"staic"})]})]})]}),l&&Object(g.jsxs)("div",{className:"claiming",children:[Object(g.jsxs)("div",{className:"stage",children:[Object(g.jsxs)("div",{className:"stage-img-text",children:[Object(g.jsxs)("div",{className:"stage-img",children:[" ",Object(g.jsx)("img",{alt:"",src:p})]}),Object(g.jsx)("div",{className:"stage-text",children:t["claim-deri-ing"]})]}),Object(g.jsxs)("div",{className:"ok-pending",children:[te&&Object(g.jsx)(g.Fragment,{children:Q.stageOne?Object(g.jsx)("div",{className:"succeed",children:Object(g.jsx)("img",{alt:"",src:I})}):Object(g.jsx)("div",{className:"pending",children:Object(g.jsx)(O,{})})}),!te&&!P&&Object(g.jsx)("div",{className:"staic"}),P&&Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:_,alt:""})})]})]}),Object(g.jsxs)("div",{className:"stage",children:[Object(g.jsxs)("div",{className:"stage-img-text",children:[Object(g.jsxs)("div",{className:"stage-img",children:[" ",Object(g.jsx)("img",{alt:"",src:w})]}),Object(g.jsxs)("div",{className:"stage-text",children:[t["waiting-for-bridge-to-sync"]," "]})]}),Object(g.jsxs)("div",{className:"ok-pending",children:[te&&Object(g.jsx)(g.Fragment,{children:Q.stageOne&&Object(g.jsx)(g.Fragment,{children:Q.stageTwo?Object(g.jsx)("div",{className:"succeed",children:Object(g.jsx)("img",{alt:"",src:I})}):Object(g.jsx)("div",{className:"pending",children:Object(g.jsx)(O,{})})})}),(!te||!Q.stageOne)&&Object(g.jsx)("div",{className:"staic"})]})]}),Object(g.jsxs)("div",{className:"stage",children:[Object(g.jsxs)("div",{className:"stage-img-text",children:[Object(g.jsxs)("div",{className:"stage-img",children:[" ",Object(g.jsx)("img",{alt:"",src:N})]}),Object(g.jsx)("div",{className:"stage-text",children:t.finished})]}),Object(g.jsxs)("div",{className:"ok-pending",children:[te&&Object(g.jsx)(g.Fragment,{children:Q.stageOne&&Q.stageTwo&&Object(g.jsx)(g.Fragment,{children:Q.stageThree?Object(g.jsx)("div",{className:"succeed",children:Object(g.jsx)("img",{alt:"",src:I})}):Object(g.jsx)("div",{className:"pending",children:Object(g.jsx)(O,{})})})}),(!te||!Q.stageTwo)&&Object(g.jsx)("div",{className:"staic"})]})]})]})]})]})}function S(e,t){var n={};switch(e=+e){case 1:n.netWork=t.ethereum,n.chainId=1,n.img=f.default;break;case 56:n.netWork=t.bsc,n.chainId=56,n.img=x.default;break;case 128:n.netWork=t.heco,n.chainId=128,n.img=v.default;break;case 97:n.netWork=t["bsc-testnet"],n.chainId=97,n.img=x.default;break;case 3:n.netWork=t.ropsten,n.chainId=3,n.img=f.default;break;case 256:n.netWork=t["heco-testnet"],n.chainId=256,n.img=v.default}return n}var y=n(1277),T=n.p+"static/media/arrow-left.f14b02ac.svg",W=n.p+"static/media/disabled-down.e8dbb78e.svg",F=n(467),E=n(230),R=n(298),D=n(483),z=n(64),q=n.n(z);n(2199);function A(e,t){var n={};switch(e=+e){case 1:n.netWork=t.ethereum,n.chainId=1,n.img=f.default;break;case 56:n.netWork=t.bsc,n.chainId=56,n.img=F.default;break;case 128:n.netWork=t.heco,n.chainId=128,n.img=v.default;break;case 97:n.netWork=t["bsc-testnet"],n.chainId=97,n.img=F.default;break;case 3:n.netWork=t.ropsten,n.chainId=3,n.img=f.default;break;case 256:n.netWork=t["heco-testnet"],n.chainId=256,n.img=v.default}return n}t.default=Object(d.b)("wallet")(Object(d.c)((function(e){var t=e.wallet,n=e.lang,s=Object(r.useState)(""),d=Object(a.a)(s,2),j=d[0],b=d[1],u=Object(r.useState)(0),m=Object(a.a)(u,2),h=m[0],O=m[1],x="prod"!==o.DeriEnv.get(),p=x?[{text:n.ropsten,id:3,img:f.default},{text:n["bsc-testnet"],id:97,img:F.default},{text:n["heco-testnet"],id:256,img:v.default}]:[{text:n.ethereum,id:1,img:f.default},{text:n.bsc,id:56,img:F.default},{text:n.heco,id:128,img:v.default}],w=Object(r.useState)(p),N=Object(a.a)(w,2),I=N[0],_=N[1],S=Object(r.useState)(p),z=Object(a.a)(S,2),B=z[0],J=z[1],L=Object(r.useState)(!1),V=Object(a.a)(L,2),P=V[0],H=V[1],M=Object(r.useState)(x?{from_chainId:97,from_network:n["bsc-testnet"],to_chainId:3,to_network:n.ropsten}:{from_chainId:1,from_network:n.ethereum,to_chainId:56,to_network:n.bsc}),$=Object(a.a)(M,2),U=$[0],Z=$[1],K=Object(r.useState)(!1),G=Object(a.a)(K,2),Q=G[0],X=G[1],Y=Object(r.useState)(!1),ee=Object(a.a)(Y,2),te=ee[0],ne=ee[1],ce=Object(r.useState)(!1),ae=Object(a.a)(ce,2),se=ae[0],ie=ae[1],re=Object(r.useState)(A(U.from_chainId,n).img),de=Object(a.a)(re,2),oe=de[0],le=de[1],je=Object(r.useState)(A(U.to_chainId,n).img),be=Object(a.a)(je,2),ue=be[0],me=be[1],he=q()("from-network-list",{show:te}),ge=q()("to-network-list",{show:se}),Oe=Object(r.useState)({isFromConnected:!1,isToConnected:!1}),xe=Object(a.a)(Oe,2),fe=xe[0],ve=xe[1],pe=function(){var e=Object(c.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()){e.next=5;break}return e.next=3,k.a.request("getUserWormholeSignature",[t.detail.account]);case 3:(c=e.sent).valid&&(Z({from_chainId:c.fromChainId,from_network:A(c.fromChainId,n).netWork,to_chainId:c.toChainId,to_network:A(c.toChainId,n).netWork}),le(A(c.fromChainId,n).img),me(A(c.toChainId,n).img),b(Object(o.bg)(c.amount,-18).toString()),H(c.valid));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),we=function(){var e=Object(c.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()){e.next=5;break}return e.next=3,k.a.request("getDeriBalance",[t.detail.chainId,t.detail.account]);case 3:n=e.sent,O(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){we()}),[t.detail,U]),Object(r.useEffect)((function(){pe()}),[t.detail]),Object(r.useEffect)((function(){var e,c=p.filter((function(e){return e.id===+U.from_chainId}))[0],a=p.filter((function(e){return e.id!==+U.from_chainId}))[0],s=p.filter((function(e){return e.id!==+U.from_chainId}))[1];e=[p.filter((function(e){return e.id===+U.to_chainId}))[0],p.filter((function(e){return e.id!==+U.to_chainId}))[0],p.filter((function(e){return e.id!==+U.to_chainId}))[1]],_([c,a,s]),J(e),le(A(U.from_chainId,n).img),me(A(U.to_chainId,n).img),function(){var e=!!t.isConnected()&&+t.detail.chainId===+U.from_chainId,n=!!t.isConnected()&&+t.detail.chainId===+U.to_chainId;ve({isFromConnected:e,isToConnected:n})}()}),[U,t.detail]),Object(g.jsx)("div",{className:"bridge-big-box",children:Object(g.jsxs)("div",{className:"bridge-box",children:[Object(g.jsxs)("div",{className:"bridge-title",children:[Object(g.jsx)("div",{className:"title",children:n.bridge}),Object(g.jsx)("div",{className:"birdge-des",children:n["bridge-des"]})]}),Object(g.jsxs)("div",{className:"bridge-info",children:[Object(g.jsxs)("div",{className:"select-network-box",children:[Object(g.jsx)("div",{className:"select-network-title",children:n["select-networks"]}),Object(g.jsxs)("div",{className:"select-network-from-to",children:[Object(g.jsxs)("div",{className:"from-network",children:[Object(g.jsx)("div",{className:"from-title",children:n.from}),Object(g.jsxs)("div",{className:"from-dropdown-list",children:[Object(g.jsxs)("div",{className:P?"drop drop-disabled":"drop",onClick:function(){P||ne(!te)},children:[Object(g.jsxs)("div",{className:"network-logo-connected",children:[Object(g.jsx)("img",{src:oe,alt:""}),Object(g.jsx)("span",{children:U.from_network}),Object(g.jsx)("div",{className:Q?"connected-hide":fe.isFromConnected?"connected":"is-connected",children:!Q&&fe.isFromConnected?n.connected:n.unconnected})]}),Object(g.jsx)("img",{className:"down-icon",src:P?W:te?D.default:R.default,alt:""})]}),Object(g.jsx)("ul",{className:he,children:I.map((function(e,t){return Object(g.jsx)(g.Fragment,{children:U.from_network!==e.text?Object(g.jsx)("li",{className:"wallet-li",onClick:function(){return function(e){var t=JSON.parse(JSON.stringify(U));t.to_chainId===e.id?(t.from_chainId=U.to_chainId,t.from_network=U.to_network,t.to_chainId=U.from_chainId,t.to_network=U.from_network):(t.from_chainId=e.id,t.from_network=e.text),Z(t),ne(!te)}(e)},children:Object(g.jsxs)("div",{className:"li-logo-network",children:[Object(g.jsx)("img",{alt:"",src:e.img})," ",Object(g.jsxs)("span",{children:[" ",e.text," "]})]})},t):""})}))})]})]}),Object(g.jsx)("div",{className:"arrow",children:Object(g.jsx)("img",{src:T,alt:""})}),Object(g.jsxs)("div",{className:"to-network",children:[Object(g.jsx)("div",{className:"to-title",children:n.to}),Object(g.jsxs)("div",{className:"to-dropdown-list",children:[Object(g.jsxs)("div",{className:P?"drop drop-disabled":"drop",onClick:function(){P||ie(!se)},children:[Object(g.jsxs)("div",{className:"network-logo-connected",children:[Object(g.jsx)("img",{src:ue,alt:""}),Object(g.jsx)("span",{children:U.to_network}),Object(g.jsx)("div",{className:Q?fe.isToConnected?"connected":"is-connected":"connected-hide",children:Q&&fe.isToConnected?n.connected:n.unconnected})]}),Object(g.jsx)("img",{className:"down-icon",src:P?W:se?D.default:R.default,alt:""})]}),Object(g.jsx)("ul",{className:ge,children:B.map((function(e,t){return Object(g.jsx)(g.Fragment,{children:U.to_network!==e.text?Object(g.jsx)("li",{className:"wallet-li",onClick:function(){return function(e){var t=JSON.parse(JSON.stringify(U));t.from_chainId===e.id?(t.from_chainId=U.to_chainId,t.from_network=U.to_network,t.to_chainId=U.from_chainId,t.to_network=U.from_network):(t.to_chainId=e.id,t.to_network=e.text),Z(t),ie(!se)}(e)},children:Object(g.jsxs)("div",{className:"li-logo-network",children:[Object(g.jsx)("img",{alt:"",src:e.img})," ",Object(g.jsxs)("span",{children:[" ",e.text," "]})]})},t):""})}))})]})]})]})]}),Object(g.jsxs)("div",{className:"set-amount",children:[Object(g.jsx)("div",{className:"set-amount-title",children:n["set-amount"]}),Object(g.jsxs)("div",{className:"set-amount-box",children:[Object(g.jsxs)("div",{className:"input-deri",children:[Object(g.jsx)(l.a,{placeholder:"0",value:j,onChange:function(e){b(e)},disabled:P,className:"input-box"}),Object(g.jsxs)("span",{children:[Object(g.jsx)("img",{alt:"",src:E.default,className:"amount-img"})," DERI"]})]}),Object(g.jsxs)("div",{className:"total-deri",children:[n["total-amount"]," ",Object(g.jsx)(y.a,{value:h,decimalScale:4,thousandSeparator:!0})," DERI"]})]})]}),Object(g.jsx)("div",{className:"bridge-operate-hint",children:Object(g.jsx)(C,{lang:n,sending:P,wallet:t,balance:h,isWalletConnected:fe,amount:j,isClaim:Q,initialize:U,setIsClaim:X,setSending:H,setAmount:b})}),Object(g.jsx)("div",{className:"bridge-to-polygon",children:Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"birdge-to-polygon-title",children:[n["bridge-to-polygon"],Object(g.jsx)("span",{className:"polygon-title",children:Object(g.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://bridge.arbitrum.io/",children:" Arbitrum"})})," or",Object(g.jsx)("span",{className:"polygon-title",children:Object(g.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://wallet.matic.network/bridge",children:" Polygon"})})]}),Object(g.jsx)("div",{className:"bridge-to-polygon-des",children:n["bridge-to-polygon-des"]})]})})]})]})})})))}}]);
//# sourceMappingURL=23.cc66d07c.chunk.js.map