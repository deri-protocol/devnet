(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[22],{1204:function(e,t,n){"use strict";var c=n(5),s=(n(61),n(1288)),a=n(49),i=n(23),r=n(15),d=n(6);const o=Object(a.a)(s.a)`
  width : ${e=>e.width}px;
`,l=a.a.div`
  width : ${e=>/px$/.test(e.width)?e.width:`${e.width}px`};
  height : ${e=>/px$/.test(e.height)?e.height:`${e.height}px`};
`;t.a=function(e){const[t,n]=Object(c.useState)(Object(d.jsx)("span",{className:"loading-line"})),[s,a]=Object(c.useState)(!0),j=()=>{const{allowZero:t}=e;return"object"!==typeof e.value&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},b=e=>e&&e.replace(/\.$/,"");return Object(c.useEffect)((()=>{const{allowZero:t,wallet:c,closeShowLoadingEffectAfterLoaded:u,defaultValue:m="--",...h}=e;if(j())!t&&h.value&&/\d+\.0*[1-9]+/.test(h.value)&&0===+Object(r.bg)(h.value).toFixed(+h.decimalScale||2)&&(h.decimalScale=Object(i.d)(Math.abs(h.value))+2),h.value=Object(i.J)(h.value),h.value&&/\d+.9{6}/.test(h.value)&&(h.value=(+h.value).toFixed(5)),n(Object(d.jsx)(o,{...h,renderText:b,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0}));else if(s){const{width:t,height:c}=e;n(Object(d.jsx)(l,{className:"loading-line",width:t,height:c})),u&&a(!1)}const g=window.setTimeout((()=>{j()||n(m)}),6e4);return()=>{clearTimeout(g)}}),[e.value,e.decimalScale,e.suffix]),t}},1219:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var c,s=n(55),a=n(49),i=n(1378),r=n.n(i),d=n(144),o=n(23),l=n(1379),j=n(6),b=a.a.div(c||(c=Object(s.a)(["\n  display:",";\n  .text {\n    border-bottom : 1px dashed #93A1B8;\n    width : max-content;\n    cursor : pointer;\n    display:","\n  }\n  \n  .__react_component_tooltip.tooltip.show {\n    font-weight : "," \n  }\n"])),(function(e){return e.block}),(function(e){return e.block}),(function(e){return e.isWin?400:600}));function u(e){var t=e.text,n=e.id,c=void 0===n?String((new Date).getTime())+Math.random():n,s=e.tip,a=e.multiline,i=e.html,u=e.className,m=e.element,h=void 0===m?"":m,g=e.block,O=void 0===g?"block":g,x=e.width,f=void 0===x?"auto":x,v=e.children,p=e.tiggerEvent;return Object(j.jsxs)(b,{className:u,block:O,isWin:l.isWindows,children:[Object(j.jsx)("div",{className:"text","data-for":c,"data-tip":i?r.a.renderToString(h):s,"data-event":Object(o.y)()?"click":p,"data-html":i,children:t||v}),s&&Object(j.jsx)(d.a,{id:c,width:f,padding:"12",place:"bottom",overridePosition:function(e,t,n,c,s,a,i,r){var d=n.getBoundingClientRect(),o=c.getBoundingClientRect(),l=d.x,j=d.y,b=d.height,u=d.width;e.left,e.top;return l+o.width/2>document.documentElement.clientWidth?l-=Math.abs(u-o.width):l-(o.width-u)/2<0?l-=u:l-=(o.width-u)/2,j+b+o.height>=document.documentElement.clientHeight?j=j+b-o.height:j+=b,l<0&&(l=0),j<0&&(j=0),{top:j,left:l}},html:i,borderRadius:8,multiline:a})]})}},1349:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c,s=n(57),a=n(55),i=n(5),r=n(49),d=n(15),o=n(1219),l=n(6),j=r.a.div(c||(c=Object(a.a)(["\ndisplay : flex;\nfont-size : 14px;\nalign-items : center;\nbackground: rgba(85, 119, 253, 0.1);\nborder-radius: 4px;\njustify-content: space-between;\ninput {\n  background: transparent;\n  border-radius: 4px;\n  // min-width: 240px;\n  border: 0;\n  width : ",";\n  height: 56px;\n  color : #E0ECFF;\n  font-size : 18px;\n  padding-left: 16px;\n}\ninput:focus {\n  outline: none;\n}\n.unit {\n  margin-right: ",";\n}\n"])),(function(e){return e.inputWidth}),(function(e){return e.unitPadding}));function b(e){var t=e.value,n=e.unit,c=e.unitTip,a=e.max,r=e.step,b=e.onChange,u=e.styles,m=void 0===u?{}:u,h=e.focus,g=e.placeholder,O=void 0===g?"":g,x=e.unitPadding,f=void 0===x?"24px":x,v=e.minTradeVolume,p=e.decimal,w=void 0===p?2:p,N=e.readOnly,k=e.inputWidth,I=void 0===k?"50%":k,_=e.className,C=e.disabled,S=void 0!==C&&C,y=e.onBlur,T=e.onFocus,W=Object(i.useRef)(null);return Object(i.useEffect)((function(){W.current.setCustomValidity(""),W.current&&h&&W.current.focus()}),[h]),Object(l.jsxs)(j,{unitPadding:f,inputWidth:I,className:_,style:Object(s.a)({},m),children:[Object(l.jsx)("input",{placeholder:O,type:"number",onBlur:y,onFocus:T,disabled:S,value:t,step:r,ref:W,onChange:function(e){var t="\\d+\\.\\d{0,".concat(w,"}$"),n=new RegExp(t),c=e.target.value;if(a&&Object(d.bg)(c).gt(a))b&&b(a);else if(c<0||isNaN(c))b&&b("");else if(c){if(v>=1)if(c/v>=1)b&&b(Object(d.bg)(c).div(v).integerValue()*v);else b&&b(c*v);else if(/\d+\./.test(c)&&!n.test(c)){var s=c.substring(0,c.indexOf(".")+1+w);b&&b(s)}else b&&b(c)}else b&&b(c)},readOnly:N}),Object(l.jsx)("div",{className:"unit",children:c?Object(l.jsx)(o.a,{tip:c,text:n}):n})]})}},2166:function(e,t,n){},2167:function(e,t,n){},2410:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(2),i=n(8),r=n(5),d=n(46),o=n(15),l=n(1349),j=n(50),b=n(170),u=n(18),m=n(475),h=n(171),g=(n(2166),n(6));function O(){return Object(g.jsx)("div",{class:"sleepContentView",children:Object(g.jsx)("div",{class:"circle"})})}var x=n(300),f=n(473),v=n(480),p=n.p+"static/media/stage-one.9bfaa393.svg",w=n.p+"static/media/stage-two.1ce521f2.svg",N=n.p+"static/media/stage-three.507b43c5.svg",k=n(34),I=n.p+"static/media/succeed.1057d4b2.svg";n.p;function _(e){var t=e.lang,n=e.wallet,c=e.amount,d=e.balance,o=e.initialize,l=e.isClaim,x=e.setSending,f=e.sending,v=e.setAmount,_=e.setIsClaim,S=e.isWalletConnected,y=Object(m.a)(),T=Object(h.c)(),W=Object(j.g)(),F=Object(r.useState)(!1),E=Object(i.a)(F,2),R=E[0],D=E[1],$=Object(r.useState)(!1),q=Object(i.a)($,2),z=q[0],J=q[1],B=Object(r.useState)({}),P=Object(i.a)(B,2),V=P[0],A=P[1],L=Object(r.useState)({}),M=Object(i.a)(L,2),U=M[0],Z=M[1],H=Object(r.useState)(!1),G=Object(i.a)(H,2),K=G[0],Q=G[1],X=Object(r.useState)(Object(g.jsx)(b.a,{type:u.k,className:"button-bridge",fontSize:"18",label:t.approve})),Y=Object(i.a)(X,2),ee=Y[0],te=Y[1],ne=function(){n.connect()},ce=function(){var e=Object(a.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.isConnected()){e.next=6;break}return e.next=3,k.a.request("getUserWormholeSignature",[n.detail.account]);case 3:(t=e.sent).valid&&(n.switchNetwork(y[t.toChainId]),_(!0)),J(t.valid);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(a.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==c&&0!==c){e.next=3;break}return T.error(t["amount-must-be-greater-than-zero"]),e.abrupt("return");case 3:if(!(+c>d)){e.next=6;break}return T.error(t["there-is-not-enough-amount"]),e.abrupt("return");case 6:if(S.isFromConnected){e.next=9;break}return T.error("".concat(t["send-finished-one"]," ").concat(C(o.from_chainId,t).netWork," ").concat(t["send-finished-two"])),e.abrupt("return");case 9:return x(!0),A({stageOne:!1}),e.next=13,k.a.request("freeze",[n.detail.chainId,n.detail.account,o.to_chainId,c],{includeResponse:!0});case 13:e.sent.success?(te(Object(g.jsx)(b.a,{type:u.k,className:"button-bridge",label:t.processing})),A({stageOne:!0,stageTwo:!1}),window.setInterval((function(){ce()}),3e3)):x(!1);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(a.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S.isToConnected){e.next=3;break}return T.error("".concat(t["send-finished-one"]," ").concat(C(o.to_chainId,t).netWork," ").concat(t["send-finished-two"])),e.abrupt("return");case 3:return Q(!0),Z({stageOne:!1}),e.next=7,k.a.request("mintDeri",[n.detail.chainId,n.detail.account],{includeResponse:!0});case 7:e.sent.success?(Z({stageOne:!0,stageTwo:!1}),te(Object(g.jsx)(b.a,{type:u.k,className:"button-bridge",label:t.processing})),window.setInterval((function(){ce()}),3e3)):T.error(t["claim-faild"]);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie=function(){W.push("/bridge")},re=function(){var e=Object(a.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.request("unlockDeri",[n.detail.chainId,n.detail.account],{includeResponse:!0});case 2:e.sent.success?(D(!0),de()):(D(!1),T.error(t["approve-faild"]));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=Object(a.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.isConnected()){e.next=5;break}return e.next=3,k.a.request("isDeriUnlocked",[n.detail.chainId,n.detail.account]);case 3:t=e.sent,D(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){n.isConnected()&&(de(),ce())}),[n.detail,o]),Object(r.useEffect)((function(){z?A({stageOne:!0,stageTwo:!0,stageThree:!0}):K&&(Z({stageOne:!0,stageTwo:!0,stageThree:!0}),x(!1),v(""))}),[z,o]),Object(r.useEffect)((function(){var e;e=n.isConnected()?z?Object(g.jsx)(b.a,{type:u.k,className:"button-bridge",label:t.claim,onClick:ae}):R?K?Object(g.jsxs)("button",{className:"complete",onClick:ie,children:[" ",Object(g.jsx)("img",{alt:"",src:I})," ",t.complete," "]}):Object(g.jsx)(b.a,{type:u.k,className:"button-bridge",label:t.send,onClick:se}):Object(g.jsx)(b.a,{type:u.k,className:"button-bridge",label:t.approve,onClick:re}):Object(g.jsx)(b.a,{type:u.k,className:"button-bridge",label:t["connect-wallet"],onClick:ne}),te(e)}),[z,n.detail,R,c,o,S,K]),Object(g.jsxs)("div",{className:"operate",children:[Object(g.jsxs)("div",{className:"from-to-title",children:[t.bridge," ",c,"  DERI ",t.from.toLowerCase()," ",o.from_network," ",t.to.toLowerCase()," ",o.to_network]}),Object(g.jsx)("div",{className:"btn",children:ee}),Object(g.jsxs)("div",{className:"hint",children:[!l&&Object(g.jsxs)("div",{className:"sending",children:[Object(g.jsxs)("div",{className:"stage",children:[Object(g.jsxs)("div",{className:"stage-img-text",children:[Object(g.jsxs)("div",{className:"stage-img",children:[" ",Object(g.jsx)("img",{alt:"",src:p})]}),Object(g.jsxs)("div",{className:"stage-text",children:[t["sending-deri-to-wormhole"]," "]})]}),Object(g.jsxs)("div",{className:"ok-pending",children:[f&&Object(g.jsx)(g.Fragment,{children:V.stageOne?Object(g.jsx)("div",{className:"succeed",children:Object(g.jsx)("img",{alt:"",src:I})}):Object(g.jsx)("div",{className:"pending",children:Object(g.jsx)(O,{})})}),!f&&Object(g.jsx)("div",{className:"staic"})]})]}),Object(g.jsxs)("div",{className:"stage",children:[Object(g.jsxs)("div",{className:"stage-img-text",children:[Object(g.jsxs)("div",{className:"stage-img",children:[" ",Object(g.jsx)("img",{alt:"",src:w})]}),Object(g.jsx)("div",{className:"stage-text",children:t["waiting-for-bridge-to-sign"]})]}),Object(g.jsxs)("div",{className:"ok-pending",children:[f&&Object(g.jsx)(g.Fragment,{children:V.stageOne&&Object(g.jsx)(g.Fragment,{children:V.stageTwo?Object(g.jsx)("div",{className:"succeed",children:Object(g.jsx)("img",{alt:"",src:I})}):Object(g.jsx)("div",{className:"pending",children:Object(g.jsx)(O,{})})})}),(!f||!V.stageOne)&&Object(g.jsx)("div",{className:"staic"})]})]}),Object(g.jsxs)("div",{className:"stage",children:[Object(g.jsxs)("div",{className:"stage-img-text",children:[Object(g.jsxs)("div",{className:"stage-img",children:[" ",Object(g.jsx)("img",{alt:"",src:N})]}),Object(g.jsx)("div",{className:"stage-text",children:t["bridge-signed"]})]}),Object(g.jsxs)("div",{className:"ok-pending",children:[f&&Object(g.jsx)(g.Fragment,{children:V.stageOne&&V.stageTwo&&Object(g.jsx)(g.Fragment,{children:V.stageThree?Object(g.jsx)("div",{className:"succeed",children:Object(g.jsx)("img",{alt:"",src:I})}):Object(g.jsx)("div",{className:"pending",children:Object(g.jsx)(O,{})})})}),(!f||!V.stageTwo)&&Object(g.jsx)("div",{className:"staic"})]})]})]}),l&&Object(g.jsxs)("div",{className:"claiming",children:[Object(g.jsxs)("div",{className:"stage",children:[Object(g.jsxs)("div",{className:"stage-img-text",children:[Object(g.jsxs)("div",{className:"stage-img",children:[" ",Object(g.jsx)("img",{alt:"",src:p})]}),Object(g.jsx)("div",{className:"stage-text",children:t["claim-deri-ing"]})]}),Object(g.jsxs)("div",{className:"ok-pending",children:[K&&Object(g.jsx)(g.Fragment,{children:U.stageOne?Object(g.jsx)("div",{className:"succeed",children:Object(g.jsx)("img",{alt:"",src:I})}):Object(g.jsx)("div",{className:"pending",children:Object(g.jsx)(O,{})})}),!K&&Object(g.jsx)("div",{className:"staic"})]})]}),Object(g.jsxs)("div",{className:"stage",children:[Object(g.jsxs)("div",{className:"stage-img-text",children:[Object(g.jsxs)("div",{className:"stage-img",children:[" ",Object(g.jsx)("img",{alt:"",src:w})]}),Object(g.jsxs)("div",{className:"stage-text",children:[t["waiting-for-bridge-to-sync"]," "]})]}),Object(g.jsxs)("div",{className:"ok-pending",children:[K&&Object(g.jsx)(g.Fragment,{children:U.stageOne&&Object(g.jsx)(g.Fragment,{children:U.stageTwo?Object(g.jsx)("div",{className:"succeed",children:Object(g.jsx)("img",{alt:"",src:I})}):Object(g.jsx)("div",{className:"pending",children:Object(g.jsx)(O,{})})})}),(!K||!U.stageOne)&&Object(g.jsx)("div",{className:"staic"})]})]}),Object(g.jsxs)("div",{className:"stage",children:[Object(g.jsxs)("div",{className:"stage-img-text",children:[Object(g.jsxs)("div",{className:"stage-img",children:[" ",Object(g.jsx)("img",{alt:"",src:N})]}),Object(g.jsx)("div",{className:"stage-text",children:t.finished})]}),Object(g.jsxs)("div",{className:"ok-pending",children:[K&&Object(g.jsx)(g.Fragment,{children:U.stageOne&&U.stageTwo&&Object(g.jsx)(g.Fragment,{children:U.stageThree?Object(g.jsx)("div",{className:"succeed",children:Object(g.jsx)("img",{alt:"",src:I})}):Object(g.jsx)("div",{className:"pending",children:Object(g.jsx)(O,{})})})}),(!K||!U.stageTwo)&&Object(g.jsx)("div",{className:"staic"})]})]})]})]})]})}function C(e,t){var n={};switch(e=+e){case 1:n.netWork=t.ethereum,n.chainId=1,n.img=f.default;break;case 56:n.netWork=t.bsc,n.chainId=56,n.img=x.default;break;case 128:n.netWork=t.heco,n.chainId=128,n.img=v.default;break;case 97:n.netWork=t["bsc-testnet"],n.chainId=97,n.img=x.default;break;case 3:n.netWork=t.ropsten,n.chainId=3,n.img=f.default;break;case 256:n.netWork=t["heco-testnet"],n.chainId=256,n.img=v.default}return n}var S=n(1204),y=n.p+"static/media/arrow-left.f14b02ac.svg",T=n.p+"static/media/disabled-down.e8dbb78e.svg",W=n(474),F=n(233),E=n(297),R=n(486),D=n(109),$=n.n(D);n(2167);function q(e,t){var n={};switch(e=+e){case 1:n.netWork=t.ethereum,n.chainId=1,n.img=f.default;break;case 56:n.netWork=t.bsc,n.chainId=56,n.img=W.default;break;case 128:n.netWork=t.heco,n.chainId=128,n.img=v.default;break;case 97:n.netWork=t["bsc-testnet"],n.chainId=97,n.img=W.default;break;case 3:n.netWork=t.ropsten,n.chainId=3,n.img=f.default;break;case 256:n.netWork=t["heco-testnet"],n.chainId=256,n.img=v.default}return n}t.default=Object(d.b)("wallet")(Object(d.c)((function(e){var t=e.wallet,n=e.lang,c=Object(r.useState)(""),d=Object(i.a)(c,2),j=d[0],b=d[1],u=Object(r.useState)(0),m=Object(i.a)(u,2),h=m[0],O=m[1],x="prod"!==o.DeriEnv.get(),p=x?[{text:n.ropsten,id:3,img:f.default},{text:n["bsc-testnet"],id:97,img:W.default},{text:n["heco-testnet"],id:256,img:v.default}]:[{text:n.ethereum,id:1,img:f.default},{text:n.bsc,id:56,img:W.default},{text:n.heco,id:128,img:v.default}],w=Object(r.useState)(p),N=Object(i.a)(w,2),I=N[0],C=N[1],D=Object(r.useState)(p),z=Object(i.a)(D,2),J=z[0],B=z[1],P=Object(r.useState)(!1),V=Object(i.a)(P,2),A=V[0],L=V[1],M=Object(r.useState)(x?{from_chainId:97,from_network:n["bsc-testnet"],to_chainId:3,to_network:n.ropsten}:{from_chainId:1,from_network:n.ethereum,to_chainId:56,to_network:n.bsc}),U=Object(i.a)(M,2),Z=U[0],H=U[1],G=Object(r.useState)(!1),K=Object(i.a)(G,2),Q=K[0],X=K[1],Y=Object(r.useState)(!1),ee=Object(i.a)(Y,2),te=ee[0],ne=ee[1],ce=Object(r.useState)(!1),se=Object(i.a)(ce,2),ae=se[0],ie=se[1],re=Object(r.useState)(q(Z.from_chainId,n).img),de=Object(i.a)(re,2),oe=de[0],le=de[1],je=Object(r.useState)(q(Z.to_chainId,n).img),be=Object(i.a)(je,2),ue=be[0],me=be[1],he=$()("from-network-list",{show:te}),ge=$()("to-network-list",{show:ae}),Oe=Object(r.useState)({isFromConnected:!1,isToConnected:!1}),xe=Object(i.a)(Oe,2),fe=xe[0],ve=xe[1],pe=function(){var e=Object(a.a)(s.a.mark((function e(){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()){e.next=5;break}return e.next=3,k.a.request("getUserWormholeSignature",[t.detail.account]);case 3:(c=e.sent).valid&&(H({from_chainId:c.fromChainId,from_network:q(c.fromChainId,n).netWork,to_chainId:c.toChainId,to_network:q(c.toChainId,n).netWork}),le(q(c.fromChainId,n).img),me(q(c.toChainId,n).img),b(Object(o.bg)(c.amount,-18).toString()),L(c.valid));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),we=function(){var e=Object(a.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConnected()){e.next=5;break}return e.next=3,k.a.request("getDeriBalance",[t.detail.chainId,t.detail.account]);case 3:n=e.sent,O(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){we()}),[t.detail,Z]),Object(r.useEffect)((function(){pe()}),[t.detail]),Object(r.useEffect)((function(){var e,c=p.filter((function(e){return e.id===+Z.from_chainId}))[0],s=p.filter((function(e){return e.id!==+Z.from_chainId}))[0],a=p.filter((function(e){return e.id!==+Z.from_chainId}))[1];e=[p.filter((function(e){return e.id===+Z.to_chainId}))[0],p.filter((function(e){return e.id!==+Z.to_chainId}))[0],p.filter((function(e){return e.id!==+Z.to_chainId}))[1]],C([c,s,a]),B(e),le(q(Z.from_chainId,n).img),me(q(Z.to_chainId,n).img),function(){var e=!!t.isConnected()&&+t.detail.chainId===+Z.from_chainId,n=!!t.isConnected()&&+t.detail.chainId===+Z.to_chainId;ve({isFromConnected:e,isToConnected:n})}()}),[Z,t.detail]),Object(g.jsx)("div",{className:"bridge-big-box",children:Object(g.jsxs)("div",{className:"bridge-box",children:[Object(g.jsxs)("div",{className:"bridge-title",children:[Object(g.jsx)("div",{className:"title",children:n.bridge}),Object(g.jsx)("div",{className:"birdge-des",children:n["bridge-des"]})]}),Object(g.jsxs)("div",{className:"bridge-info",children:[Object(g.jsxs)("div",{className:"select-network-box",children:[Object(g.jsx)("div",{className:"select-network-title",children:n["select-networks"]}),Object(g.jsxs)("div",{className:"select-network-from-to",children:[Object(g.jsxs)("div",{className:"from-network",children:[Object(g.jsx)("div",{className:"from-title",children:n.from}),Object(g.jsxs)("div",{className:"from-dropdown-list",children:[Object(g.jsxs)("div",{className:A?"drop drop-disabled":"drop",onClick:function(){A||ne(!te)},children:[Object(g.jsxs)("div",{className:"network-logo-connected",children:[Object(g.jsx)("img",{src:oe,alt:""}),Object(g.jsx)("span",{children:Z.from_network}),Object(g.jsx)("div",{className:Q?"connected-hide":fe.isFromConnected?"connected":"is-connected",children:!Q&&fe.isFromConnected?n.connected:n.unconnected})]}),Object(g.jsx)("img",{className:"down-icon",src:A?T:te?R.default:E.default,alt:""})]}),Object(g.jsx)("ul",{className:he,children:I.map((function(e,t){return Object(g.jsx)(g.Fragment,{children:Z.from_network!==e.text?Object(g.jsx)("li",{className:"wallet-li",onClick:function(){return function(e){var t=JSON.parse(JSON.stringify(Z));t.to_chainId===e.id?(t.from_chainId=Z.to_chainId,t.from_network=Z.to_network,t.to_chainId=Z.from_chainId,t.to_network=Z.from_network):(t.from_chainId=e.id,t.from_network=e.text),H(t),ne(!te)}(e)},children:Object(g.jsxs)("div",{className:"li-logo-network",children:[Object(g.jsx)("img",{alt:"",src:e.img})," ",Object(g.jsxs)("span",{children:[" ",e.text," "]})]})},t):""})}))})]})]}),Object(g.jsx)("div",{className:"arrow",children:Object(g.jsx)("img",{src:y,alt:""})}),Object(g.jsxs)("div",{className:"to-network",children:[Object(g.jsx)("div",{className:"to-title",children:n.to}),Object(g.jsxs)("div",{className:"to-dropdown-list",children:[Object(g.jsxs)("div",{className:A?"drop drop-disabled":"drop",onClick:function(){A||ie(!ae)},children:[Object(g.jsxs)("div",{className:"network-logo-connected",children:[Object(g.jsx)("img",{src:ue,alt:""}),Object(g.jsx)("span",{children:Z.to_network}),Object(g.jsx)("div",{className:Q?fe.isToConnected?"connected":"is-connected":"connected-hide",children:Q&&fe.isToConnected?n.connected:n.unconnected})]}),Object(g.jsx)("img",{className:"down-icon",src:A?T:ae?R.default:E.default,alt:""})]}),Object(g.jsx)("ul",{className:ge,children:J.map((function(e,t){return Object(g.jsx)(g.Fragment,{children:Z.to_network!==e.text?Object(g.jsx)("li",{className:"wallet-li",onClick:function(){return function(e){var t=JSON.parse(JSON.stringify(Z));t.from_chainId===e.id?(t.from_chainId=Z.to_chainId,t.from_network=Z.to_network,t.to_chainId=Z.from_chainId,t.to_network=Z.from_network):(t.to_chainId=e.id,t.to_network=e.text),H(t),ie(!ae)}(e)},children:Object(g.jsxs)("div",{className:"li-logo-network",children:[Object(g.jsx)("img",{alt:"",src:e.img})," ",Object(g.jsxs)("span",{children:[" ",e.text," "]})]})},t):""})}))})]})]})]})]}),Object(g.jsxs)("div",{className:"set-amount",children:[Object(g.jsx)("div",{className:"set-amount-title",children:n["set-amount"]}),Object(g.jsxs)("div",{className:"set-amount-box",children:[Object(g.jsxs)("div",{className:"input-deri",children:[Object(g.jsx)(l.a,{placeholder:"0",value:j,onChange:function(e){b(e)},disabled:A,className:"input-box"}),Object(g.jsxs)("span",{children:[Object(g.jsx)("img",{alt:"",src:F.default,className:"amount-img"})," DERI"]})]}),Object(g.jsxs)("div",{className:"total-deri",children:[n["total-amount"]," ",Object(g.jsx)(S.a,{value:h,decimalScale:4,thousandSeparator:!0})," DERI"]})]})]}),Object(g.jsx)("div",{className:"bridge-operate-hint",children:Object(g.jsx)(_,{lang:n,sending:A,wallet:t,balance:h,isWalletConnected:fe,amount:j,isClaim:Q,initialize:Z,setIsClaim:X,setSending:L,setAmount:b})}),Object(g.jsx)("div",{className:"bridge-to-polygon",children:Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"birdge-to-polygon-title",children:[n["bridge-to-polygon"]," ",Object(g.jsx)("span",{className:"polygon-title",children:Object(g.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://wallet.matic.network/bridge",children:"Polygon"})})]}),Object(g.jsx)("div",{className:"bridge-to-polygon-des",children:n["bridge-to-polygon-des"]})]})})]})]})})})))}}]);
//# sourceMappingURL=22.fce078c8.chunk.js.map