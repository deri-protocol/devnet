(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[40],{1231:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(96),i=r(121);var o=function(t){var e,r;function n(e){var r,n=(void 0===e?{}:e).supportedChainIds;return(r=t.call(this)||this).supportedChainIds=n,r}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var o=n.prototype;return o.emitUpdate=function(t){console.log("Emitting '"+i.a.Update+"' with payload",t),this.emit(i.a.Update,t)},o.emitError=function(t){console.log("Emitting '"+i.a.Error+"' with payload",t),this.emit(i.a.Error,t)},o.emitDeactivate=function(){console.log("Emitting '"+i.a.Deactivate+"'"),this.emit(i.a.Deactivate)},n}(n.EventEmitter)},2390:function(t,e,r){"use strict";r.r(e),r.d(e,"FortmaticConnector",(function(){return c}));var n=r(1231),i=r(44);var o={1:"mainnet",3:"ropsten",4:"rinkeby",42:"kovan"},c=function(t){var e,n;function c(e){var r,n=e.apiKey,c=e.chainId;return Object.keys(o).includes(c.toString())||Object(i.a)(!1,"Unsupported chainId "+c),(r=t.call(this,{supportedChainIds:[c]})||this).apiKey=n,r.chainId=c,r}n=t,(e=c).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var a=c.prototype;return a.activate=function(){try{var t=function(){return Promise.resolve(e.fortmatic.getProvider().enable().then((function(t){return t[0]}))).then((function(t){return{provider:e.fortmatic.getProvider(),chainId:e.chainId,account:t}}))},e=this,n=function(){if(!e.fortmatic)return Promise.resolve(r.e(46).then(r.t.bind(null,2183,7)).then((function(t){var e;return null!=(e=null==t?void 0:t.default)?e:t}))).then((function(t){e.fortmatic=new t(e.apiKey,1===e.chainId||4===e.chainId?void 0:o[e.chainId])}))}();return Promise.resolve(n&&n.then?n.then(t):t())}catch(i){return Promise.reject(i)}},a.getProvider=function(){try{return Promise.resolve(this.fortmatic.getProvider())}catch(t){return Promise.reject(t)}},a.getChainId=function(){try{return Promise.resolve(this.chainId)}catch(t){return Promise.reject(t)}},a.getAccount=function(){try{return Promise.resolve(this.fortmatic.getProvider().send("eth_accounts").then((function(t){return t[0]})))}catch(t){return Promise.reject(t)}},a.deactivate=function(){},a.close=function(){try{var t=this;return Promise.resolve(t.fortmatic.user.logout()).then((function(){t.emitDeactivate()}))}catch(e){return Promise.reject(e)}},c}(n.a)}}]);
//# sourceMappingURL=40.24ef78a6.chunk.js.map