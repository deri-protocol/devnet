(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[21],{1242:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n(96),i=n(126);var s=function(t){var e,n;function o(e){var n,o=(void 0===e?{}:e).supportedChainIds;return(n=t.call(this)||this).supportedChainIds=o,n}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var s=o.prototype;return s.emitUpdate=function(t){console.log("Emitting '"+i.a.Update+"' with payload",t),this.emit(i.a.Update,t)},s.emitError=function(t){console.log("Emitting '"+i.a.Error+"' with payload",t),this.emit(i.a.Error,t)},s.emitDeactivate=function(){console.log("Emitting '"+i.a.Deactivate+"'"),this.emit(i.a.Deactivate)},o}(o.EventEmitter)},1832:function(t,e,n){const o=n(1833),i=n(1834),s=n(1837),r={ethereum:"undefined"!==typeof window&&"undefined"!==typeof window.ethereum?window.ethereum:null,web3:"undefined"!==typeof window&&"undefined"!==typeof window.web3?window.web3.currentProvider:null},c="undefined"!==typeof window&&"undefined"!==typeof window.WebSocket?window.WebSocket:null,a="undefined"!==typeof window&&"undefined"!==typeof window.XMLHttpRequest?window.XMLHttpRequest:null;r.ethereum&&(r.ethereum.__isProvider=!0);const h={injected:r.ethereum||n(1838)(r.web3),ipc:n(1839)("IPC connections are unavliable in the browser"),ws:n(1840)(c),http:n(1842)(a)};t.exports=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["injected","frame"],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i(h,o(t,s),e)}},1833:function(t,e){const n=t=>"injected"===t?"injected":t.endsWith(".ipc")?"ipc":t.startsWith("wss://")||t.startsWith("ws://")?"ws":t.startsWith("https://")||t.startsWith("http://")?"http":"";t.exports=(t,e)=>[].concat(...[].concat(t).map((t=>e[t]?e[t].map((e=>({type:t,location:e,protocol:n(e)}))):{type:"custom",location:t,protocol:n(t)}))).filter((t=>!(!t.protocol&&"injected"!==t.type)||(console.log('eth-provider | Invalid provider preset/location: "'+t.location+'"'),!1)))},1834:function(t,e,n){const o=n(96),i=n(1835),s=n(1836),r=t=>{function e(e){t.status=e,t instanceof o&&t.emit("status",e)}async function n(){if(t.inSetup)return setTimeout(n,1e3);try{await t.send("eth_syncing")?(e("syncing"),setTimeout((()=>n()),5e3)):e("connected")}catch(o){e("disconnected")}}return e("loading"),n(),t.on("connect",(()=>n())),t.on("close",(()=>e("disconnected"))),t};t.exports=(t,e,n)=>{if(t.injected.__isProvider&&e.map((t=>t.type)).indexOf("injected")>-1)return delete t.injected.__isProvider,r(t.injected);const o=new i(new s(t,e,n));return o.setMaxListeners(128),r(o)}},1835:function(t,e,n){const o=n(96);t.exports=class extends o{constructor(t){super(),this.connected=!1,this.nextId=0,this.promises={},this.subscriptions=[],this.connection=t,this.connection.on("connect",(()=>this.checkConnection())),this.connection.on("close",(()=>this.emit("close"))),this.connection.on("payload",(t=>{const{id:e,method:n,error:o,result:i}=t;"undefined"!==typeof e?this.promises[e]&&(t.error?this.promises[e].reject(o):this.promises[e].resolve(i),delete this.promises[e]):n&&n.indexOf("_subscription")>-1&&(this.emit(t.params.subscription,t.params.result),this.emit(n,t.params),this.emit("data",t))})),this.on("newListener",((t,e)=>{"networkChanged"===t?!this.attemptedNetworkSubscription&&this.connected&&this.startNetworkSubscription():"accountsChanged"===t&&!this.attemptedAccountsSubscription&&this.connected&&this.startAccountsSubscription()}))}async checkConnection(){try{this.emit("connect",await this._send("net_version")),this.connected=!0,this.listenerCount("networkChanged")&&!this.attemptedNetworkSubscription&&this.startNetworkSubscription(),this.listenerCount("accountsChanged")&&!this.attemptedAccountsSubscription&&this.startAccountsSubscription()}catch(t){this.connected=!1}}async startNetworkSubscription(){this.attemptedNetworkSubscription=!0;try{let t=await this.subscribe("eth_subscribe","networkChanged");this.on(t,(t=>this.emit("networkChanged",t)))}catch(t){console.warn("Unable to subscribe to networkChanged",t)}}async startAccountsSubscription(){this.attemptedAccountsSubscription=!0;try{let t=await this.subscribe("eth_subscribe","accountsChanged");this.on(t,(t=>this.emit("accountsChanged",t)))}catch(t){console.warn("Unable to subscribe to accountsChanged",t)}}enable(){return new Promise(((t,e)=>{this._send("eth_accounts").then((n=>{if(n.length>0)this.accounts=n,this.coinbase=n[0],this.emit("enable"),t(n);else{const t=new Error("User Denied Full Provider");t.code=4001,e(t)}})).catch(e)}))}_send(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(!t||"string"!==typeof t)return new Error("Method is not a valid string.");if(!(e instanceof Array))return new Error("Params is not a valid array.");const n={jsonrpc:"2.0",id:this.nextId++,method:t,params:e},o=new Promise(((t,e)=>{this.promises[n.id]={resolve:t,reject:e}}));return this.connection.send(n),o}send(){return this._send(...arguments)}_sendBatch(t){return Promise.all(t.map((t=>this._send(t.method,t.params))))}subscribe(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return this._send(t,[e,...n]).then((t=>(this.subscriptions.push(t),t)))}unsubscribe(t,e){return this._send(t,[e]).then((t=>{if(t)return this.subscriptions=this.subscriptions.filter((t=>t!==e)),this.removeAllListeners(e),t}))}sendAsync(t,e){return e&&"function"===typeof e?t?t instanceof Array?this.sendAsyncBatch(t,e):this._send(t.method,t.params).then((n=>{e(null,{id:t.id,jsonrpc:t.jsonrpc,result:n})})).catch((t=>{e(t)})):e(new Error("Invalid Payload")):e(new Error("Invalid or undefined callback provided to sendAsync"))}sendAsyncBatch(t,e){return this._sendBatch(t).then((n=>{let o=n.map(((e,n)=>({id:t[n].id,jsonrpc:t[n].jsonrpc,result:e})));e(null,o)})).catch((t=>{e(t)}))}isConnected(){return this.connected}close(){this.connection.close(),this.connected=!1;let t=new Error("Provider closed, subscription lost, please subscribe again.");this.subscriptions.forEach((e=>this.emit(e,t))),this.subscriptions=[]}}},1836:function(t,e,n){const o=n(96);t.exports=class extends o{constructor(t,e,n){super(),this.targets=e,this.connections=t,this.connected=!1,this.status="loading",this.interval=n.interval||5e3,this.name=n.name||"default",this.inSetup=!0,this.connect()}connect(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(0===t&&console.log(`\n\n\n\nA connection cycle started for provider with name: ${this.name}`),this.connection&&"connected"===this.connection.status&&t>=this.connection.index)console.log("Stopping connection cycle becasuse we're already connected to a higher priority provider");else if(0===this.targets.length)console.log("No valid targets supplied");else{const{protocol:e,location:n}=this.targets[t];this.connection=this.connections[e](n),this.connection.on("error",(e=>this.connected?this.listenerCount("error")?this.emit("error",e):void console.warn("eth-provider - Uncaught connection error: "+e.message):this.connectionError(t,e))),this.connection.on("close",(t=>{this.connected=!1,this.emit("close"),this.closing||this.refresh()})),this.connection.on("connect",(()=>{this.connection.target=this.targets[t],this.connection.index=t,this.targets[t].status=this.connection.status,this.connected=!0,this.inSetup=!1,console.log("Successfully connected to: "+this.targets[t].location),this.emit("connect")})),this.connection.on("data",(t=>this.emit("data",t))),this.connection.on("payload",(t=>this.emit("payload",t)))}}refresh(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.interval;console.log(`Reconnect queued for ${(t/1e3).toFixed(2)}s in the future`),clearTimeout(this.connectTimer),this.connectTimer=setTimeout((()=>this.connect()),t)}connectionError(t,e){this.targets[t].status=e,this.targets.length-1===t?(this.inSetup=!1,console.warn("eth-provider unable to connect to any targets, view connection cycle summary: ",this.targets),this.refresh()):this.connect(++t)}close(){this.closing=!0,this.connection?this.connection.close():this.emit("close"),clearTimeout(this.connectTimer)}error(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1;this.emit("payload",{id:t.id,jsonrpc:t.jsonrpc,error:{message:e,code:n}})}send(t){this.inSetup?setTimeout((()=>this.send(t)),100):this.connection.closed?this.error(t,"Not connected"):this.connection.send(t)}}},1837:function(t,e){t.exports={injected:["injected"],frame:["ws://127.0.0.1:1248","http://127.0.0.1:1248"],direct:["ws://127.0.0.1:8546","http://127.0.0.1:8545"],infura:["wss://mainnet.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b","https://mainnet.infura.io/v3/786ade30f36244469480aa5c2bf0743b"],infuraRopsten:["wss://ropsten.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b","https://ropsten.infura.io/v3/786ade30f36244469480aa5c2bf0743b"],infuraRinkeby:["wss://rinkeby.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b","https://rinkeby.infura.io/v3/786ade30f36244469480aa5c2bf0743b"],infuraKovan:["wss://kovan.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b","https://kovan.infura.io/v3/786ade30f36244469480aa5c2bf0743b"]}},1838:function(t,e,n){const o=n(96);class i extends o{constructor(t,e){super(),t?setTimeout((()=>this.emit("error",new Error("Injected web3 provider is not currently supported"))),0):setTimeout((()=>this.emit("error",new Error("No injected provider found"))),0)}}t.exports=t=>e=>new i(t,e)},1839:function(t,e,n){const o=n(96);class i extends o{constructor(t){super(),setTimeout((()=>this.emit("error",new Error(t))),0)}}t.exports=t=>()=>new i(t)},1840:function(t,e,n){const o=n(96),i=n(1841);let s;class r extends o{constructor(t,e,n){super(),s=t,setTimeout((()=>this.create(e,n)),0)}create(t,e){s||this.emit("error",new Error("No WebSocket transport available"));try{this.socket=new s(t)}catch(n){return this.emit("error",n)}this.socket.addEventListener("error",(t=>this.emit("error",t))),this.socket.addEventListener("open",(()=>{this.emit("connect"),this.socket.addEventListener("message",(t=>{const e="string"===typeof t.data?t.data:"";i(e,((t,e)=>{t||e.forEach((t=>{Array.isArray(t)?t.forEach((t=>this.emit("payload",t))):this.emit("payload",t)}))}))})),this.socket.addEventListener("close",(()=>this.onClose()))}))}onClose(){this.socket=null,this.closed=!0,console.log("Closing WebSocket connection"),this.emit("close"),this.removeAllListeners()}close(){this.socket?this.socket.close():this.onClose()}error(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1;this.emit("payload",{id:t.id,jsonrpc:t.jsonrpc,error:{message:e,code:n}})}send(t){this.socket&&this.socket.readyState===this.socket.CONNECTING?setTimeout((e=>this.send(t)),10):!this.socket||this.socket.readyState>1?(this.connected=!1,this.error(t,"Not connected")):this.socket.send(JSON.stringify(t))}}t.exports=t=>(e,n)=>new r(t,e,n)},1841:function(t,e){let n,o;t.exports=(t,e)=>{const i=[];t.replace(/\}[\n\r]?\{/g,"}|--|{").replace(/\}\][\n\r]?\[\{/g,"}]|--|[{").replace(/\}[\n\r]?\[\{/g,"}|--|[{").replace(/\}\][\n\r]?\{/g,"}]|--|{").split("|--|").forEach((t=>{let s;n&&(t=n+t);try{s=JSON.parse(t)}catch(r){return n=t,clearTimeout(o),void(o=setTimeout((()=>e(new Error("Parse response timeout"))),15e3))}clearTimeout(o),n=null,s&&i.push(s)})),e(null,i)}},1842:function(t,e,n){const o=n(96),i=n(474);let s;class r extends o{constructor(t,e,n){super(),s=t,this.connected=!1,this.subscriptions=!1,this.status="loading",this.url=e,this.pollId=i(),setTimeout((()=>this.create()),0)}create(){if(!s)return this.emit("error",new Error("No HTTP transport available"));this.on("error",(()=>{this.connected&&this.close()})),this.init()}init(){this.send({jsonrpc:"2.0",method:"eth_syncing",params:[],id:1},((t,e)=>{if(t)return this.emit("error",t);this.send({jsonrpc:"2.0",id:1,method:"eth_pollSubscriptions",params:[this.pollId,"immediate"]},((t,e)=>{t||(this.subscriptions=!0,this.pollSubscriptions()),this.connected=!0,this.emit("connect")}))}))}pollSubscriptions(){this.send({jsonrpc:"2.0",id:1,method:"eth_pollSubscriptions",params:[this.pollId]},((t,e)=>{if(t)return this.subscriptionTimeout=setTimeout((()=>this.pollSubscriptions()),1e4),this.emit("error",t);this.closed||(this.subscriptionTimeout=this.pollSubscriptions()),e&&e.map((t=>{let e;try{e=JSON.parse(t)}catch(n){e=!1}return e})).filter((t=>t)).forEach((t=>this.emit("payload",t)))}))}close(){console.log("Closing HTTP connection"),this.closed=!0,this.emit("close"),clearTimeout(this.subscriptionTimeout),this.removeAllListeners()}filterStatus(t){if(t.status>=200&&t.status<300)return t;const e=new Error(t.statusText);throw e.res=t,e.message}error(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1;this.emit("payload",{id:t.id,jsonrpc:t.jsonrpc,error:{message:e,code:n}})}send(t,e){if(this.closed)return this.error(t,"Not connected");if("eth_subscribe"===t.method){if(!this.subscriptions)return this.error(t,"Subscriptions are not supported by this HTTP endpoint");t.pollId=this.pollId}const n=new s;let o=!1;const i=(i,s)=>{if(!o)if(n.abort(),o=!0,e)e(i,s);else{const{id:e,jsonrpc:n}=t,o=i?{id:e,jsonrpc:n,error:{message:i.message,code:i.code}}:{id:e,jsonrpc:n,result:s};this.emit("payload",o)}};n.open("POST",this.url,!0),n.setRequestHeader("Content-Type","application/json"),n.timeout=6e4,n.onerror=i,n.ontimeout=i,n.onreadystatechange=()=>{if(4===n.readyState)try{const t=JSON.parse(n.responseText);i(t.error,t.result)}catch(t){i(t)}},n.send(JSON.stringify(t))}}t.exports=t=>(e,n)=>new r(t,e,n)},2309:function(t,e,n){"use strict";n.r(e),n.d(e,"FrameConnector",(function(){return m})),n.d(e,"UserRejectedRequestError",(function(){return f}));var o=n(1242),i=n(1832),s=n.n(i),r=n(48);function c(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}function d(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function u(t,e,n){return u=d()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&h(i,n.prototype),i},u.apply(null,arguments)}function l(t){var e="function"===typeof Map?new Map:void 0;return l=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof e){if(e.has(t))return e.get(t);e.set(t,o)}function o(){return u(t,arguments,a(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),h(o,t)},l(t)}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var f=function(t){function e(){var e;return(e=t.call(this)||this).name=e.constructor.name,e.message="The user rejected the request.",e}return c(e,t),e}(l(Error)),m=function(t){function e(e){var n;return 1!==e.supportedChainIds.length&&Object(r.a)(!1,"This connector only supports 1 chainId at the moment."),(n=t.call(this,e)||this).handleNetworkChanged=n.handleNetworkChanged.bind(p(n)),n.handleChainChanged=n.handleChainChanged.bind(p(n)),n.handleAccountsChanged=n.handleAccountsChanged.bind(p(n)),n.handleClose=n.handleClose.bind(p(n)),n}c(e,t);var n=e.prototype;return n.handleNetworkChanged=function(t){console.log("Handling 'networkChanged' event with payload",t),this.emitUpdate({provider:this.provider,chainId:t})},n.handleChainChanged=function(t){console.log("Handling 'chainChanged' event with payload",t),this.emitUpdate({chainId:t})},n.handleAccountsChanged=function(t){console.log("Handling 'accountsChanged' event with payload",t),this.emitUpdate({account:0===t.length?null:t[0]})},n.handleClose=function(t,e){console.log("Handling 'close' event with payload",t,e),this.emitDeactivate()},n.activate=function(){try{var t=this;return t.provider||(t.provider=s()("frame")),t.provider.on("networkChanged",t.handleNetworkChanged).on("chainChanged",t.handleChainChanged).on("accountsChanged",t.handleAccountsChanged).on("close",t.handleClose),Promise.resolve(t.provider.enable().then((function(t){return t[0]})).catch((function(t){throw t&&4001===t.code?new f:t}))).then((function(e){return{provider:t.provider,account:e}}))}catch(e){return Promise.reject(e)}},n.getProvider=function(){try{return Promise.resolve(this.provider)}catch(t){return Promise.reject(t)}},n.getChainId=function(){try{return Promise.resolve(this.provider.send("eth_chainId"))}catch(t){return Promise.reject(t)}},n.getAccount=function(){try{return Promise.resolve(this.provider.send("eth_accounts").then((function(t){return t[0]})))}catch(t){return Promise.reject(t)}},n.deactivate=function(){this.provider.removeListener("networkChanged",this.handleNetworkChanged).removeListener("chainChanged",this.handleChainChanged).removeListener("accountsChanged",this.handleAccountsChanged).removeListener("close",this.handleClose)},e}(o.a)}}]);
//# sourceMappingURL=21.c9dc7607.chunk.js.map