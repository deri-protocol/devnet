(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[49],{1414:function(t,r,e){"use strict";e.d(r,"a",(function(){return i}));var n=e(118),o=e(146);var i=function(t){var r,e;function n(r){var e,n=(void 0===r?{}:r).supportedChainIds;return(e=t.call(this)||this).supportedChainIds=n,e}e=t,(r=n).prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e;var i=n.prototype;return i.emitUpdate=function(t){console.log("Emitting '"+o.a.Update+"' with payload",t),this.emit(o.a.Update,t)},i.emitError=function(t){console.log("Emitting '"+o.a.Error+"' with payload",t),this.emit(o.a.Error,t)},i.emitDeactivate=function(){console.log("Emitting '"+o.a.Deactivate+"'"),this.emit(o.a.Deactivate)},n}(n.EventEmitter)},2554:function(t,r,e){"use strict";e.r(r),e.d(r,"TorusConnector",(function(){return n}));var n=function(t){var r,n;function o(r){var e,n=r.chainId,o=r.initOptions,i=void 0===o?{}:o,c=r.constructorOptions,s=void 0===c?{}:c,u=r.loginOptions,a=void 0===u?{}:u;return(e=t.call(this,{supportedChainIds:[n]})||this).chainId=n,e.initOptions=i,e.constructorOptions=s,e.loginOptions=a,e}n=t,(r=o).prototype=Object.create(n.prototype),r.prototype.constructor=r,r.__proto__=n;var i=o.prototype;return i.activate=function(){try{var t=function(){return Promise.resolve(r.torus.login(r.loginOptions).then((function(t){return t[0]}))).then((function(t){return{provider:r.torus.provider,account:t}}))},r=this,n=function(){if(!r.torus)return Promise.resolve(Promise.all([e.e(16),e.e(35)]).then(e.bind(null,2383)).then((function(t){var r;return null!=(r=null==t?void 0:t.default)?r:t}))).then((function(t){return r.torus=new t(r.constructorOptions),Promise.resolve(r.torus.init(r.initOptions)).then((function(){}))}))}();return Promise.resolve(n&&n.then?n.then(t):t())}catch(o){return Promise.reject(o)}},i.getProvider=function(){try{return Promise.resolve(this.torus.provider)}catch(t){return Promise.reject(t)}},i.getChainId=function(){try{return Promise.resolve(this.chainId)}catch(t){return Promise.reject(t)}},i.getAccount=function(){try{return Promise.resolve(this.torus.ethereum.send("eth_accounts").then((function(t){return t[0]})))}catch(t){return Promise.reject(t)}},i.deactivate=function(){return Promise.resolve()},i.close=function(){try{var t=this;return Promise.resolve(t.torus.cleanUp()).then((function(){t.emitDeactivate()}))}catch(r){return Promise.reject(r)}},o}(e(1414).a)}}]);
//# sourceMappingURL=49.5ed7447a.chunk.js.map