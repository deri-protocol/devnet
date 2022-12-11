(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[21],{1414:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(118),o=n(146);var i=function(e){var t,n;function r(t){var n,r=(void 0===t?{}:t).supportedChainIds;return(n=e.call(this)||this).supportedChainIds=r,n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.emitUpdate=function(e){console.log("Emitting '"+o.a.Update+"' with payload",e),this.emit(o.a.Update,e)},i.emitError=function(e){console.log("Emitting '"+o.a.Error+"' with payload",e),this.emit(o.a.Error,e)},i.emitDeactivate=function(){console.log("Emitting '"+o.a.Deactivate+"'"),this.emit(o.a.Deactivate)},r}(r.EventEmitter)},1969:function(e,t,n){var r=n(1970),o=n(1971),i=n(1974),c={ethereum:"undefined"!==typeof window&&"undefined"!==typeof window.ethereum?window.ethereum:null,web3:"undefined"!==typeof window&&"undefined"!==typeof window.web3?window.web3.currentProvider:null},s="undefined"!==typeof window&&"undefined"!==typeof window.WebSocket?window.WebSocket:null,a="undefined"!==typeof window&&"undefined"!==typeof window.XMLHttpRequest?window.XMLHttpRequest:null;c.ethereum&&(c.ethereum.__isProvider=!0);var u={injected:c.ethereum||n(1975)(c.web3),ipc:n(1976)("IPC connections are unavliable in the browser"),ws:n(1977)(s),http:n(1979)(a)};e.exports=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["injected","frame"],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o(u,r(e,i),t)}},1970:function(e,t,n){var r=n(504),o=function(e){return"injected"===e?"injected":e.endsWith(".ipc")?"ipc":e.startsWith("wss://")||e.startsWith("ws://")?"ws":e.startsWith("https://")||e.startsWith("http://")?"http":""};e.exports=function(e,t){var n;return(n=[]).concat.apply(n,r([].concat(e).map((function(e){return t[e]?t[e].map((function(t){return{type:e,location:t,protocol:o(t)}})):{type:"custom",location:e,protocol:o(e)}})))).filter((function(e){return!(!e.protocol&&"injected"!==e.type)||(console.log('eth-provider | Invalid provider preset/location: "'+e.location+'"'),!1)}))}},1971:function(e,t,n){var r=n(0),o=n(145),i=n(118),c=n(1972),s=n(1973),a=function(e){function t(t){e.status=t,e instanceof i&&e.emit("status",t)}function n(){return c.apply(this,arguments)}function c(){return(c=o(r.mark((function o(){return r.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!e.inSetup){r.next=2;break}return r.abrupt("return",setTimeout(n,1e3));case 2:return r.prev=2,r.next=5,e.send("eth_syncing");case 5:if(!r.sent){r.next=10;break}t("syncing"),setTimeout((function(){return n()}),5e3),r.next=11;break;case 10:t("connected");case 11:r.next=16;break;case 13:r.prev=13,r.t0=r.catch(2),t("disconnected");case 16:case"end":return r.stop()}}),o,null,[[2,13]])})))).apply(this,arguments)}return t("loading"),n(),e.on("connect",(function(){return n()})),e.on("close",(function(){return t("disconnected")})),e};e.exports=function(e,t,n){if(e.injected.__isProvider&&t.map((function(e){return e.type})).indexOf("injected")>-1)return delete e.injected.__isProvider,a(e.injected);var r=new c(new s(e,t,n));return r.setMaxListeners(128),a(r)}},1972:function(e,t,n){var r=n(504),o=n(0),i=n(145),c=n(90),s=n(91),a=n(206),u=n(207),d=function(e){"use strict";a(n,e);var t=u(n);function n(e){var r;return c(this,n),(r=t.call(this)).connected=!1,r.nextId=0,r.promises={},r.subscriptions=[],r.connection=e,r.connection.on("connect",(function(){return r.checkConnection()})),r.connection.on("close",(function(){return r.emit("close")})),r.connection.on("payload",(function(e){var t=e.id,n=e.method,o=e.error,i=e.result;"undefined"!==typeof t?r.promises[t]&&(e.error?r.promises[t].reject(o):r.promises[t].resolve(i),delete r.promises[t]):n&&n.indexOf("_subscription")>-1&&(r.emit(e.params.subscription,e.params.result),r.emit(n,e.params),r.emit("data",e))})),r.on("newListener",(function(e,t){"networkChanged"===e?!r.attemptedNetworkSubscription&&r.connected&&r.startNetworkSubscription():"accountsChanged"===e&&!r.attemptedAccountsSubscription&&r.connected&&r.startAccountsSubscription()})),r}return s(n,[{key:"checkConnection",value:function(){var e=i(o.mark((function e(){return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=this,e.next=4,this._send("net_version");case 4:e.t1=e.sent,e.t0.emit.call(e.t0,"connect",e.t1),this.connected=!0,this.listenerCount("networkChanged")&&!this.attemptedNetworkSubscription&&this.startNetworkSubscription(),this.listenerCount("accountsChanged")&&!this.attemptedAccountsSubscription&&this.startAccountsSubscription(),e.next=14;break;case 11:e.prev=11,e.t2=e.catch(0),this.connected=!1;case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"startNetworkSubscription",value:function(){var e=i(o.mark((function e(){var t,n=this;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.attemptedNetworkSubscription=!0,e.prev=1,e.next=4,this.subscribe("eth_subscribe","networkChanged");case 4:t=e.sent,this.on(t,(function(e){return n.emit("networkChanged",e)})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.warn("Unable to subscribe to networkChanged",e.t0);case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"startAccountsSubscription",value:function(){var e=i(o.mark((function e(){var t,n=this;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.attemptedAccountsSubscription=!0,e.prev=1,e.next=4,this.subscribe("eth_subscribe","accountsChanged");case 4:t=e.sent,this.on(t,(function(e){return n.emit("accountsChanged",e)})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.warn("Unable to subscribe to accountsChanged",e.t0);case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"enable",value:function(){var e=this;return new Promise((function(t,n){e._send("eth_accounts").then((function(r){if(r.length>0)e.accounts=r,e.coinbase=r[0],e.emit("enable"),t(r);else{var o=new Error("User Denied Full Provider");o.code=4001,n(o)}})).catch(n)}))}},{key:"_send",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(!e||"string"!==typeof e)return new Error("Method is not a valid string.");if(!(n instanceof Array))return new Error("Params is not a valid array.");var r={jsonrpc:"2.0",id:this.nextId++,method:e,params:n},o=new Promise((function(e,n){t.promises[r.id]={resolve:e,reject:n}}));return this.connection.send(r),o}},{key:"send",value:function(){return this._send.apply(this,arguments)}},{key:"_sendBatch",value:function(e){var t=this;return Promise.all(e.map((function(e){return t._send(e.method,e.params)})))}},{key:"subscribe",value:function(e,t){var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return this._send(e,[t].concat(r(o))).then((function(e){return n.subscriptions.push(e),e}))}},{key:"unsubscribe",value:function(e,t){var n=this;return this._send(e,[t]).then((function(e){if(e)return n.subscriptions=n.subscriptions.filter((function(e){return e!==t})),n.removeAllListeners(t),e}))}},{key:"sendAsync",value:function(e,t){return t&&"function"===typeof t?e?e instanceof Array?this.sendAsyncBatch(e,t):this._send(e.method,e.params).then((function(n){t(null,{id:e.id,jsonrpc:e.jsonrpc,result:n})})).catch((function(e){t(e)})):t(new Error("Invalid Payload")):t(new Error("Invalid or undefined callback provided to sendAsync"))}},{key:"sendAsyncBatch",value:function(e,t){return this._sendBatch(e).then((function(n){var r=n.map((function(t,n){return{id:e[n].id,jsonrpc:e[n].jsonrpc,result:t}}));t(null,r)})).catch((function(e){t(e)}))}},{key:"isConnected",value:function(){return this.connected}},{key:"close",value:function(){var e=this;this.connection.close(),this.connected=!1;var t=new Error("Provider closed, subscription lost, please subscribe again.");this.subscriptions.forEach((function(n){return e.emit(n,t)})),this.subscriptions=[]}}]),n}(n(118));e.exports=d},1973:function(e,t,n){var r=n(90),o=n(91),i=n(206),c=n(207),s=n(118),a=function(e){"use strict";i(n,e);var t=c(n);function n(e,o,i){var c;return r(this,n),(c=t.call(this)).targets=o,c.connections=e,c.connected=!1,c.status="loading",c.interval=i.interval||5e3,c.name=i.name||"default",c.inSetup=!0,c.connect(),c}return o(n,[{key:"connect",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(0===t&&console.log("\n\n\n\nA connection cycle started for provider with name: ".concat(this.name)),this.connection&&"connected"===this.connection.status&&t>=this.connection.index)console.log("Stopping connection cycle becasuse we're already connected to a higher priority provider");else if(0===this.targets.length)console.log("No valid targets supplied");else{var n=this.targets[t],r=n.protocol,o=n.location;this.connection=this.connections[r](o),this.connection.on("error",(function(n){return e.connected?e.listenerCount("error")?e.emit("error",n):void console.warn("eth-provider - Uncaught connection error: "+n.message):e.connectionError(t,n)})),this.connection.on("close",(function(t){e.connected=!1,e.emit("close"),e.closing||e.refresh()})),this.connection.on("connect",(function(){e.connection.target=e.targets[t],e.connection.index=t,e.targets[t].status=e.connection.status,e.connected=!0,e.inSetup=!1,console.log("Successfully connected to: "+e.targets[t].location),e.emit("connect")})),this.connection.on("data",(function(t){return e.emit("data",t)})),this.connection.on("payload",(function(t){return e.emit("payload",t)}))}}},{key:"refresh",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.interval;console.log("Reconnect queued for ".concat((t/1e3).toFixed(2),"s in the future")),clearTimeout(this.connectTimer),this.connectTimer=setTimeout((function(){return e.connect()}),t)}},{key:"connectionError",value:function(e,t){this.targets[e].status=t,this.targets.length-1===e?(this.inSetup=!1,console.warn("eth-provider unable to connect to any targets, view connection cycle summary: ",this.targets),this.refresh()):this.connect(++e)}},{key:"close",value:function(){this.closing=!0,this.connection?this.connection.close():this.emit("close"),clearTimeout(this.connectTimer)}},{key:"error",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1;this.emit("payload",{id:e.id,jsonrpc:e.jsonrpc,error:{message:t,code:n}})}},{key:"send",value:function(e){var t=this;this.inSetup?setTimeout((function(){return t.send(e)}),100):this.connection.closed?this.error(e,"Not connected"):this.connection.send(e)}}]),n}(s);e.exports=a},1974:function(e,t){e.exports={injected:["injected"],frame:["ws://127.0.0.1:1248","http://127.0.0.1:1248"],direct:["ws://127.0.0.1:8546","http://127.0.0.1:8545"],infura:["wss://mainnet.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b","https://mainnet.infura.io/v3/786ade30f36244469480aa5c2bf0743b"],infuraRopsten:["wss://ropsten.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b","https://ropsten.infura.io/v3/786ade30f36244469480aa5c2bf0743b"],infuraRinkeby:["wss://rinkeby.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b","https://rinkeby.infura.io/v3/786ade30f36244469480aa5c2bf0743b"],infuraKovan:["wss://kovan.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b","https://kovan.infura.io/v3/786ade30f36244469480aa5c2bf0743b"]}},1975:function(e,t,n){var r=n(90),o=n(206),i=n(207),c=function(e){"use strict";o(n,e);var t=i(n);function n(e,o){var i;return r(this,n),i=t.call(this),e?setTimeout((function(){return i.emit("error",new Error("Injected web3 provider is not currently supported"))}),0):setTimeout((function(){return i.emit("error",new Error("No injected provider found"))}),0),i}return n}(n(118));e.exports=function(e){return function(t){return new c(e,t)}}},1976:function(e,t,n){var r=n(90),o=n(206),i=n(207),c=function(e){"use strict";o(n,e);var t=i(n);function n(e){var o;return r(this,n),o=t.call(this),setTimeout((function(){return o.emit("error",new Error(e))}),0),o}return n}(n(118));e.exports=function(e){return function(){return new c(e)}}},1977:function(e,t,n){var r,o=n(90),i=n(91),c=n(206),s=n(207),a=n(118),u=n(1978),d=function(e){"use strict";c(n,e);var t=s(n);function n(e,i,c){var s;return o(this,n),s=t.call(this),r=e,setTimeout((function(){return s.create(i,c)}),0),s}return i(n,[{key:"create",value:function(e,t){var n=this;r||this.emit("error",new Error("No WebSocket transport available"));try{this.socket=new r(e)}catch(o){return this.emit("error",o)}this.socket.addEventListener("error",(function(e){return n.emit("error",e)})),this.socket.addEventListener("open",(function(){n.emit("connect"),n.socket.addEventListener("message",(function(e){var t="string"===typeof e.data?e.data:"";u(t,(function(e,t){e||t.forEach((function(e){Array.isArray(e)?e.forEach((function(e){return n.emit("payload",e)})):n.emit("payload",e)}))}))})),n.socket.addEventListener("close",(function(){return n.onClose()}))}))}},{key:"onClose",value:function(){this.socket=null,this.closed=!0,console.log("Closing WebSocket connection"),this.emit("close"),this.removeAllListeners()}},{key:"close",value:function(){this.socket?this.socket.close():this.onClose()}},{key:"error",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1;this.emit("payload",{id:e.id,jsonrpc:e.jsonrpc,error:{message:t,code:n}})}},{key:"send",value:function(e){var t=this;this.socket&&this.socket.readyState===this.socket.CONNECTING?setTimeout((function(n){return t.send(e)}),10):!this.socket||this.socket.readyState>1?(this.connected=!1,this.error(e,"Not connected")):this.socket.send(JSON.stringify(e))}}]),n}(a);e.exports=function(e){return function(t,n){return new d(e,t,n)}}},1978:function(e,t){var n,r;e.exports=function(e,t){var o=[];e.replace(/\}[\n\r]?\{/g,"}|--|{").replace(/\}\][\n\r]?\[\{/g,"}]|--|[{").replace(/\}[\n\r]?\[\{/g,"}|--|[{").replace(/\}\][\n\r]?\{/g,"}]|--|{").split("|--|").forEach((function(e){var i;n&&(e=n+e);try{i=JSON.parse(e)}catch(c){return n=e,clearTimeout(r),void(r=setTimeout((function(){return t(new Error("Parse response timeout"))}),15e3))}clearTimeout(r),n=null,i&&o.push(i)})),t(null,o)}},1979:function(e,t,n){var r,o=n(90),i=n(91),c=n(206),s=n(207),a=n(118),u=n(528),d=function(e){"use strict";c(n,e);var t=s(n);function n(e,i,c){var s;return o(this,n),s=t.call(this),r=e,s.connected=!1,s.subscriptions=!1,s.status="loading",s.url=i,s.pollId=u(),setTimeout((function(){return s.create()}),0),s}return i(n,[{key:"create",value:function(){var e=this;if(!r)return this.emit("error",new Error("No HTTP transport available"));this.on("error",(function(){e.connected&&e.close()})),this.init()}},{key:"init",value:function(){var e=this;this.send({jsonrpc:"2.0",method:"eth_syncing",params:[],id:1},(function(t,n){if(t)return e.emit("error",t);e.send({jsonrpc:"2.0",id:1,method:"eth_pollSubscriptions",params:[e.pollId,"immediate"]},(function(t,n){t||(e.subscriptions=!0,e.pollSubscriptions()),e.connected=!0,e.emit("connect")}))}))}},{key:"pollSubscriptions",value:function(){var e=this;this.send({jsonrpc:"2.0",id:1,method:"eth_pollSubscriptions",params:[this.pollId]},(function(t,n){if(t)return e.subscriptionTimeout=setTimeout((function(){return e.pollSubscriptions()}),1e4),e.emit("error",t);e.closed||(e.subscriptionTimeout=e.pollSubscriptions()),n&&n.map((function(e){var t;try{t=JSON.parse(e)}catch(n){t=!1}return t})).filter((function(e){return e})).forEach((function(t){return e.emit("payload",t)}))}))}},{key:"close",value:function(){console.log("Closing HTTP connection"),this.closed=!0,this.emit("close"),clearTimeout(this.subscriptionTimeout),this.removeAllListeners()}},{key:"filterStatus",value:function(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.res=e,t.message}},{key:"error",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1;this.emit("payload",{id:e.id,jsonrpc:e.jsonrpc,error:{message:t,code:n}})}},{key:"send",value:function(e,t){var n=this;if(this.closed)return this.error(e,"Not connected");if("eth_subscribe"===e.method){if(!this.subscriptions)return this.error(e,"Subscriptions are not supported by this HTTP endpoint");e.pollId=this.pollId}var o=new r,i=!1,c=function(r,c){if(!i)if(o.abort(),i=!0,t)t(r,c);else{var s=e.id,a=e.jsonrpc,u=r?{id:s,jsonrpc:a,error:{message:r.message,code:r.code}}:{id:s,jsonrpc:a,result:c};n.emit("payload",u)}};o.open("POST",this.url,!0),o.setRequestHeader("Content-Type","application/json"),o.timeout=6e4,o.onerror=c,o.ontimeout=c,o.onreadystatechange=function(){if(4===o.readyState)try{var e=JSON.parse(o.responseText);c(e.error,e.result)}catch(t){c(t)}},o.send(JSON.stringify(e))}}]),n}(a);e.exports=function(e){return function(t,n){return new d(e,t,n)}}},2550:function(e,t,n){"use strict";n.r(t),n.d(t,"FrameConnector",(function(){return v})),n.d(t,"UserRejectedRequestError",(function(){return f}));var r=n(1414),o=n(1969),i=n.n(o),c=n(60);function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}function d(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function h(e,t,n){return h=d()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&u(o,n.prototype),o},h.apply(null,arguments)}function l(e){var t="function"===typeof Map?new Map:void 0;return l=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return h(e,arguments,a(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,e)},l(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var f=function(e){function t(){var t;return(t=e.call(this)||this).name=t.constructor.name,t.message="The user rejected the request.",t}return s(t,e),t}(l(Error)),v=function(e){function t(t){var n;return 1!==t.supportedChainIds.length&&Object(c.a)(!1,"This connector only supports 1 chainId at the moment."),(n=e.call(this,t)||this).handleNetworkChanged=n.handleNetworkChanged.bind(p(n)),n.handleChainChanged=n.handleChainChanged.bind(p(n)),n.handleAccountsChanged=n.handleAccountsChanged.bind(p(n)),n.handleClose=n.handleClose.bind(p(n)),n}s(t,e);var n=t.prototype;return n.handleNetworkChanged=function(e){console.log("Handling 'networkChanged' event with payload",e),this.emitUpdate({provider:this.provider,chainId:e})},n.handleChainChanged=function(e){console.log("Handling 'chainChanged' event with payload",e),this.emitUpdate({chainId:e})},n.handleAccountsChanged=function(e){console.log("Handling 'accountsChanged' event with payload",e),this.emitUpdate({account:0===e.length?null:e[0]})},n.handleClose=function(e,t){console.log("Handling 'close' event with payload",e,t),this.emitDeactivate()},n.activate=function(){try{var e=this;return e.provider||(e.provider=i()("frame")),e.provider.on("networkChanged",e.handleNetworkChanged).on("chainChanged",e.handleChainChanged).on("accountsChanged",e.handleAccountsChanged).on("close",e.handleClose),Promise.resolve(e.provider.enable().then((function(e){return e[0]})).catch((function(e){throw e&&4001===e.code?new f:e}))).then((function(t){return{provider:e.provider,account:t}}))}catch(t){return Promise.reject(t)}},n.getProvider=function(){try{return Promise.resolve(this.provider)}catch(e){return Promise.reject(e)}},n.getChainId=function(){try{return Promise.resolve(this.provider.send("eth_chainId"))}catch(e){return Promise.reject(e)}},n.getAccount=function(){try{return Promise.resolve(this.provider.send("eth_accounts").then((function(e){return e[0]})))}catch(e){return Promise.reject(e)}},n.deactivate=function(){this.provider.removeListener("networkChanged",this.handleNetworkChanged).removeListener("chainChanged",this.handleChainChanged).removeListener("accountsChanged",this.handleAccountsChanged).removeListener("close",this.handleClose)},t}(r.a)}}]);
//# sourceMappingURL=21.ebef1532.chunk.js.map