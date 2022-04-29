(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[39],{1242:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(96),o=n(126);var i=function(e){var t,n;function r(t){var n,r=(void 0===t?{}:t).supportedChainIds;return(n=e.call(this)||this).supportedChainIds=r,n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.emitUpdate=function(e){console.log("Emitting '"+o.a.Update+"' with payload",e),this.emit(o.a.Update,e)},i.emitError=function(e){console.log("Emitting '"+o.a.Error+"' with payload",e),this.emit(o.a.Error,e)},i.emitDeactivate=function(){console.log("Emitting '"+o.a.Deactivate+"'"),this.emit(o.a.Deactivate)},r}(r.EventEmitter)},2310:function(e,t,n){"use strict";n.r(t),n.d(t,"InjectedConnector",(function(){return v})),n.d(t,"NoEthereumProviderError",(function(){return m})),n.d(t,"UserRejectedRequestError",(function(){return p}));var r=n(1242),o=n(38);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function u(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}function a(e,t){return a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}function h(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function s(e,t,n){return s=h()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&a(o,n.prototype),o},s.apply(null,arguments)}function d(e){var t="function"===typeof Map?new Map:void 0;return d=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return s(e,arguments,c(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,e)},d(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function f(e,t){try{var n=e()}catch(r){return t(r)}return n&&n.then?n.then(void 0,t):n}function w(e){return e.hasOwnProperty("result")?e.result:e}var m=function(e){function t(){var t;return(t=e.call(this)||this).name=t.constructor.name,t.message="No Ethereum provider was found on window.ethereum.",t}return u(t,e),t}(d(Error)),p=function(e){function t(){var t;return(t=e.call(this)||this).name=t.constructor.name,t.message="The user rejected the request.",t}return u(t,e),t}(d(Error)),v=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleNetworkChanged=n.handleNetworkChanged.bind(l(n)),n.handleChainChanged=n.handleChainChanged.bind(l(n)),n.handleAccountsChanged=n.handleAccountsChanged.bind(l(n)),n.handleClose=n.handleClose.bind(l(n)),n}u(t,e);var n=t.prototype;return n.handleChainChanged=function(e){console.log("Handling 'chainChanged' event with payload",e),this.emitUpdate({chainId:e,provider:window.ethereum})},n.handleAccountsChanged=function(e){console.log("Handling 'accountsChanged' event with payload",e),0===e.length?this.emitDeactivate():this.emitUpdate({account:e[0]})},n.handleClose=function(e,t){console.log("Handling 'close' event with payload",e,t),this.emitDeactivate()},n.handleNetworkChanged=function(e){console.log("Handling 'networkChanged' event with payload",e),this.emitUpdate({chainId:e,provider:window.ethereum})},n.activate=function(){try{var e,t=function(t){if(n)return t;function r(){return i({provider:window.ethereum},e?{account:e}:{})}var o=function(){if(!e)return Promise.resolve(window.ethereum.enable().then((function(e){return e&&w(e)[0]}))).then((function(t){e=t}))}();return o&&o.then?o.then(r):r()},n=!1,r=this;if(!window.ethereum)throw new m;window.ethereum.on&&(window.ethereum.on("chainChanged",r.handleChainChanged),window.ethereum.on("accountsChanged",r.handleAccountsChanged),window.ethereum.on("close",r.handleClose),window.ethereum.on("networkChanged",r.handleNetworkChanged)),window.ethereum.isMetaMask&&(window.ethereum.autoRefreshOnNetworkChange=!1);var u=f((function(){return Promise.resolve(window.ethereum.send("eth_requestAccounts").then((function(e){return w(e)[0]}))).then((function(t){e=t}))}),(function(e){if(4001===e.code)throw new p;Object(o.a)(!1,"eth_requestAccounts was unsuccessful, falling back to enable")}));return Promise.resolve(u&&u.then?u.then(t):t(u))}catch(c){return Promise.reject(c)}},n.getProvider=function(){try{return Promise.resolve(window.ethereum)}catch(e){return Promise.reject(e)}},n.getChainId=function(){try{var e,t=function(){function t(){if(!e)try{e=w(window.ethereum.send({method:"net_version"}))}catch(t){Object(o.a)(!1,"net_version v2 was unsuccessful, falling back to manual matches and static properties")}return e||(e=window.ethereum.isDapper?w(window.ethereum.cachedResults.net_version):window.ethereum.chainId||window.ethereum.netVersion||window.ethereum.networkVersion||window.ethereum._chainId),e}var n=function(){if(!e){var t=f((function(){return Promise.resolve(window.ethereum.send("net_version").then(w)).then((function(t){e=t}))}),(function(){Object(o.a)(!1,"net_version was unsuccessful, falling back to net version v2")}));if(t&&t.then)return t.then((function(){}))}}();return n&&n.then?n.then(t):t()};if(!window.ethereum)throw new m;var n=f((function(){return Promise.resolve(window.ethereum.send("eth_chainId").then(w)).then((function(t){e=t}))}),(function(){Object(o.a)(!1,"eth_chainId was unsuccessful, falling back to net_version")}));return Promise.resolve(n&&n.then?n.then(t):t())}catch(r){return Promise.reject(r)}},n.getAccount=function(){try{var e,t=function(){function t(){return e||(e=w(window.ethereum.send({method:"eth_accounts"}))[0]),e}var n=function(){if(!e){var t=f((function(){return Promise.resolve(window.ethereum.enable().then((function(e){return w(e)[0]}))).then((function(t){e=t}))}),(function(){Object(o.a)(!1,"enable was unsuccessful, falling back to eth_accounts v2")}));if(t&&t.then)return t.then((function(){}))}}();return n&&n.then?n.then(t):t()};if(!window.ethereum)throw new m;var n=f((function(){return Promise.resolve(window.ethereum.send("eth_accounts").then((function(e){return w(e)[0]}))).then((function(t){e=t}))}),(function(){Object(o.a)(!1,"eth_accounts was unsuccessful, falling back to enable")}));return Promise.resolve(n&&n.then?n.then(t):t())}catch(r){return Promise.reject(r)}},n.deactivate=function(){window.ethereum&&window.ethereum.removeListener&&(window.ethereum.removeListener("chainChanged",this.handleChainChanged),window.ethereum.removeListener("accountsChanged",this.handleAccountsChanged),window.ethereum.removeListener("close",this.handleClose),window.ethereum.removeListener("networkChanged",this.handleNetworkChanged))},n.isAuthorized=function(){try{return window.ethereum?Promise.resolve(f((function(){return Promise.resolve(window.ethereum.send("eth_accounts").then((function(e){return w(e).length>0})))}),(function(){return!1}))):Promise.resolve(!1)}catch(e){return Promise.reject(e)}},t}(r.a)}}]);
//# sourceMappingURL=39.998dd02c.chunk.js.map