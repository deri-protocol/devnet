(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[38],{1242:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(104),o=n(132);var i=function(e){var t,n;function r(t){var n,r=(void 0===t?{}:t).supportedChainIds;return(n=e.call(this)||this).supportedChainIds=r,n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.emitUpdate=function(e){console.log("Emitting '"+o.a.Update+"' with payload",e),this.emit(o.a.Update,e)},i.emitError=function(e){console.log("Emitting '"+o.a.Error+"' with payload",e),this.emit(o.a.Error,e)},i.emitDeactivate=function(){console.log("Emitting '"+o.a.Deactivate+"'"),this.emit(o.a.Deactivate)},r}(r.EventEmitter)},2340:function(e,t,n){"use strict";n.r(t),n.d(t,"NoEthereumProviderError",(function(){return v})),n.d(t,"ProvidedConnector",(function(){return g})),n.d(t,"UserRejectedRequestError",(function(){return m}));var r=n(1242),o=n(40);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function c(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}function s(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function h(e,t,n){return h=s()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&u(o,n.prototype),o},h.apply(null,arguments)}function d(e){var t="function"===typeof Map?new Map:void 0;return d=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return h(e,arguments,a(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,e)},d(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function f(e,t){try{var n=e()}catch(r){return t(r)}return n&&n.then?n.then(void 0,t):n}function p(e){return e.hasOwnProperty("result")?e.result:e}var v=function(e){function t(){var t;return(t=e.call(this)||this).name=t.constructor.name,t.message="No Ethereum provider was passed to the constructor or found on window.ethereum.",t}return c(t,e),t}(d(Error)),m=function(e){function t(){var t;return(t=e.call(this)||this).name=t.constructor.name,t.message="The user rejected the request.",t}return c(t,e),t}(d(Error)),g=function(e){function t(t){var n,r=t.provider,o=void 0===r?window.ethereum:r,i=t.supportedChainIds;return(n=e.call(this,{supportedChainIds:i})||this).provider=o,n.handleNetworkChanged=n.handleNetworkChanged.bind(l(n)),n.handleChainChanged=n.handleChainChanged.bind(l(n)),n.handleAccountsChanged=n.handleAccountsChanged.bind(l(n)),n.handleClose=n.handleClose.bind(l(n)),n}c(t,e);var n=t.prototype;return n.handleChainChanged=function(e){console.log("Handling 'chainChanged' event with payload",e),this.emitUpdate({chainId:e,provider:this.provider})},n.handleAccountsChanged=function(e){console.log("Handling 'accountsChanged' event with payload",e),0===e.length?this.emitDeactivate():this.emitUpdate({account:e[0]})},n.handleClose=function(e,t){console.log("Handling 'close' event with payload",e,t),this.emitDeactivate()},n.handleNetworkChanged=function(e){console.log("Handling 'networkChanged' event with payload",e),this.emitUpdate({chainId:e,provider:this.provider})},n.activate=function(){try{var e,t=function(t){if(n)return t;function o(){return i({provider:r.provider},e?{account:e}:{})}var c=function(){if(!e)return Promise.resolve(r.provider.enable().then((function(e){return e&&p(e)[0]}))).then((function(t){e=t}))}();return c&&c.then?c.then(o):o()},n=!1,r=this;if(!r.provider)throw new v;r.provider.on&&(r.provider.on("chainChanged",r.handleChainChanged),r.provider.on("accountsChanged",r.handleAccountsChanged),r.provider.on("close",r.handleClose),r.provider.on("networkChanged",r.handleNetworkChanged)),r.provider.isMetaMask&&(r.provider.autoRefreshOnNetworkChange=!1);var c=f((function(){return Promise.resolve(r.provider.send("eth_requestAccounts").then((function(e){return p(e)[0]}))).then((function(t){e=t}))}),(function(e){if(4001===e.code)throw new m;Object(o.a)(!1,"eth_requestAccounts was unsuccessful, falling back to enable")}));return Promise.resolve(c&&c.then?c.then(t):t(c))}catch(a){return Promise.reject(a)}},n.getProvider=function(){try{return Promise.resolve(this.provider)}catch(e){return Promise.reject(e)}},n.getChainId=function(){try{var e,t=function(){function t(){if(!e)try{e=p(n.provider.send({method:"net_version"}))}catch(t){Object(o.a)(!1,"net_version v2 was unsuccessful, falling back to manual matches and static properties")}return e||(e=n.provider.isDapper?p(n.provider.cachedResults.net_version):n.provider.chainId||n.provider.networkVersion||n.provider._chainId),e}var r=function(){if(!e){var t=f((function(){return Promise.resolve(n.provider.send("net_version").then(p)).then((function(t){e=t}))}),(function(){Object(o.a)(!1,"net_version was unsuccessful, falling back to net version v2")}));if(t&&t.then)return t.then((function(){}))}}();return r&&r.then?r.then(t):t()},n=this;if(!n.provider)throw new v;var r=f((function(){return Promise.resolve(n.provider.send("eth_chainId").then(p)).then((function(t){e=t}))}),(function(){Object(o.a)(!1,"eth_chainId was unsuccessful, falling back to net_version")}));return Promise.resolve(r&&r.then?r.then(t):t())}catch(i){return Promise.reject(i)}},n.getAccount=function(){try{var e,t=function(){function t(){return e||(e=p(n.provider.send({method:"eth_accounts"}))[0]),e}var r=function(){if(!e){var t=f((function(){return Promise.resolve(n.provider.enable().then((function(e){return p(e)[0]}))).then((function(t){e=t}))}),(function(){Object(o.a)(!1,"enable was unsuccessful, falling back to eth_accounts v2")}));if(t&&t.then)return t.then((function(){}))}}();return r&&r.then?r.then(t):t()},n=this;if(!n.provider)throw new v;var r=f((function(){return Promise.resolve(n.provider.send("eth_accounts").then((function(e){return p(e)[0]}))).then((function(t){e=t}))}),(function(){Object(o.a)(!1,"eth_accounts was unsuccessful, falling back to enable")}));return Promise.resolve(r&&r.then?r.then(t):t())}catch(i){return Promise.reject(i)}},n.deactivate=function(){this.provider&&this.provider.removeListener&&(this.provider.removeListener("chainChanged",this.handleChainChanged),this.provider.removeListener("accountsChanged",this.handleAccountsChanged),this.provider.removeListener("close",this.handleClose),this.provider.removeListener("networkChanged",this.handleNetworkChanged))},n.isAuthorized=function(){try{var e=this;return e.provider?Promise.resolve(f((function(){return Promise.resolve(e.provider.send("eth_accounts").then((function(e){return p(e).length>0})))}),(function(){return!1}))):Promise.resolve(!1)}catch(t){return Promise.reject(t)}},t}(r.a)}}]);
//# sourceMappingURL=38.50b5eb60.chunk.js.map