(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[42],{1231:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(93),o=n(118);var i=function(t){var e,n;function r(e){var n,r=(void 0===e?{}:e).supportedChainIds;return(n=t.call(this)||this).supportedChainIds=r,n}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var i=r.prototype;return i.emitUpdate=function(t){console.log("Emitting '"+o.a.Update+"' with payload",t),this.emit(o.a.Update,t)},i.emitError=function(t){console.log("Emitting '"+o.a.Error+"' with payload",t),this.emit(o.a.Error,t)},i.emitDeactivate=function(){console.log("Emitting '"+o.a.Deactivate+"'"),this.emit(o.a.Deactivate)},r}(r.EventEmitter)},2393:function(t,e,n){"use strict";n.r(e),n.d(e,"PortisConnector",(function(){return a}));var r=n(1231),o=n(44);function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var c={1:"mainnet",3:"ropsten",4:"rinkeby",5:"goerli",42:"kovan",100:"xdai",30:"orchid",31:"orchidTestnet",99:"core",77:"sokol",61:"classic",8:"ubiq",108:"thundercore",18:"thundercoreTestnet",163:"lightstreams",122:"fuse",15001:"maticTestnet"},a=function(t){var e,r;function a(e){var n,r=e.dAppId,a=e.networks,s=e.config,u=void 0===s?{}:s,h=a.map((function(t){return"number"===typeof t?t:Number(t.chainId)}));return h.every((function(t){return!!c[t]}))||Object(o.a)(!1,"One or more unsupported networks "+a),(n=t.call(this,{supportedChainIds:h})||this).dAppId=r,n.networks=a,n.config=u,n.handleOnLogout=n.handleOnLogout.bind(i(n)),n.handleOnActiveWalletChanged=n.handleOnActiveWalletChanged.bind(i(n)),n.handleOnError=n.handleOnError.bind(i(n)),n}r=t,(e=a).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var s=a.prototype;return s.handleOnLogout=function(){console.log("Handling 'onLogout' event"),this.emitDeactivate()},s.handleOnActiveWalletChanged=function(t){console.log("Handling 'onActiveWalletChanged' event with payload",t),this.emitUpdate({account:t})},s.handleOnError=function(t){console.log("Handling 'onError' event"),this.emitError(t)},s.activate=function(){try{var t=function(){return e.portis.onLogout(e.handleOnLogout),e.portis.onActiveWalletChanged(e.handleOnActiveWalletChanged),e.portis.onError(e.handleOnError),Promise.resolve(e.portis.provider.enable().then((function(t){return t[0]}))).then((function(t){return{provider:e.portis.provider,account:t}}))},e=this,r=function(){if(!e.portis)return Promise.resolve(n.e(35).then(n.t.bind(null,2184,7)).then((function(t){var e;return null!=(e=null==t?void 0:t.default)?e:t}))).then((function(t){e.portis=new t(e.dAppId,"number"===typeof e.networks[0]?c[e.networks[0]]:e.networks[0],e.config)}))}();return Promise.resolve(r&&r.then?r.then(t):t())}catch(o){return Promise.reject(o)}},s.getProvider=function(){try{return Promise.resolve(this.portis.provider)}catch(t){return Promise.reject(t)}},s.getChainId=function(){try{return Promise.resolve(this.portis.provider.send("eth_chainId"))}catch(t){return Promise.reject(t)}},s.getAccount=function(){try{return Promise.resolve(this.portis.provider.send("eth_accounts").then((function(t){return t[0]})))}catch(t){return Promise.reject(t)}},s.deactivate=function(){this.portis.onLogout((function(){})),this.portis.onActiveWalletChanged((function(){})),this.portis.onError((function(){}))},s.changeNetwork=function(t,e){try{var n=this;return"number"===typeof t?(c[t]||Object(o.a)(!1,"Invalid chainId "+t),n.portis.changeNetwork(c[t],e),n.emitUpdate({chainId:t})):(n.portis.changeNetwork(t,e),n.emitUpdate({chainId:Number(t.chainId)})),Promise.resolve()}catch(r){return Promise.reject(r)}},s.close=function(){try{var t=this;return Promise.resolve(t.portis.logout()).then((function(){t.emitDeactivate()}))}catch(e){return Promise.reject(e)}},a}(r.a)}}]);
//# sourceMappingURL=42.e005f82c.chunk.js.map