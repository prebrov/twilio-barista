webpackJsonp([0],{"+j+H":function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}n.d(e,"a",function(){return y});var i=n("KM04"),a=(n.n(i),n.i(i.h)("path",{d:"M15 0C6.7 0 0 6.7 0 15s6.7 15 15 15 15-6.7 15-15S23.3 0 15 0zm0 26C8.9 26 4 21.1 4 15S8.9 4 15 4s11 4.9 11 11-4.9 11-11 11z"})),c=n.i(i.h)("circle",{cx:"18.7",cy:"11.3",r:"3.1"}),u=n.i(i.h)("circle",{cx:"18.7",cy:"18.7",r:"3.1"}),s=n.i(i.h)("circle",{cx:"11.3",cy:"18.7",r:"3.1"}),l=n.i(i.h)("circle",{cx:"11.3",cy:"11.3",r:"3.1"}),f=n.i(i.h)("path",{d:"M-195.9 385.8h-8.8c-.2 0-.4.2-.4.4v5.1c0 .2.2.4.4.4h8.8c.2 0 .4-.2.4-.4v-5.1c.1-.2-.1-.4-.4-.4zm-.1 7.6h-17c-.2 0-.5.2-.6.4l-2.2 8.3-.1.4-2.6-8.9c-.1-.2-.3-.4-.6-.4h-6.6c-.2 0-.5.2-.6.4l-2.5 8.3-.1.4-.1-.2-1-4.1-1.1-4.1c-.1-.2-.3-.4-.6-.4H-245v-7.2c0-.2-.3-.5-.6-.4l-8.4 2.6c-.3.1-.4.2-.4.4v4.5h-2.2c-.2 0-.4.2-.4.4v6.4c0 .2.2.4.4.4h2.2v7.8c0 5.5 3 8.1 8.5 8.1 2.3 0 4.5-.5 6-1.3v-6.6c0-.3-.3-.4-.5-.4-.9.4-1.6.5-2.4.5-1.5 0-2.3-.6-2.3-2.3v-5.7h4.8c.2 0 .4-.2.4-.4v-5.4l6.3 20.9c.1.2.3.4.6.4h7c.2 0 .5-.2.6-.4l3-9.3 1.5 4.8 1.4 4.4c.1.2.3.4.6.4h7c.2 0 .5-.2.6-.4l6.4-21v21c0 .2.2.4.4.4h8.5c.2 0 .4-.2.4-.4v-21.8c0-.3-.2-.5-.4-.5zm11.2-7.6h-8.5c-.2 0-.4.2-.4.4v29.5c0 .2.2.4.4.4h8.5c.2 0 .4-.2.4-.4v-29.5c0-.2-.2-.4-.4-.4zm11.3 0h-8.8c-.2 0-.4.2-.4.4v5.1c0 .2.2.4.4.4h8.8c.2 0 .4-.2.4-.4v-5.1c.1-.2-.1-.4-.4-.4zm-.1 7.6h-8.5c-.2 0-.4.2-.4.4v21.9c0 .2.2.4.4.4h8.5c.2 0 .4-.2.4-.4v-21.8c0-.3-.2-.5-.4-.5zm14.1-.5c-7.5 0-12.8 5.5-12.8 11.9v.1c0 6.4 5.3 11.8 12.7 11.8 7.5 0 12.8-5.5 12.8-11.9v-.1c0-6.4-5.3-11.8-12.7-11.8zm3.6 11.9c0 2.2-1.5 3.9-3.6 3.9s-3.7-1.8-3.7-4v-.1c0-2.2 1.5-3.9 3.6-3.9s3.7 1.8 3.7 4.1zM-288 376c-13.8 0-25 11.2-25 25s11.2 25 25 25 25-11.2 25-25-11.2-25-25-25zm0 43.4c-10.2 0-18.4-8.2-18.4-18.4s8.2-18.4 18.4-18.4 18.4 8.2 18.4 18.4-8.2 18.4-18.4 18.4z"}),p=n.i(i.h)("circle",{cx:"-281.8",cy:"394.8",r:"5.2"}),h=n.i(i.h)("circle",{cx:"-281.8",cy:"407.2",r:"5.2"}),d=n.i(i.h)("circle",{cx:"-294.2",cy:"407.2",r:"5.2"}),m=n.i(i.h)("circle",{cx:"-294.2",cy:"394.8",r:"5.2"}),y=function(t){function e(){return r(this,t.apply(this,arguments))}return o(e,t),e.prototype.render=function(t){var e=t.fullLogo;return this.props.color=this.props.color||"rgb(241, 46, 69)",this.props.width=this.props.width||50,e?this.renderFullLogo(this.props):this.renderSmallLogo(this.props)},e.prototype.renderSmallLogo=function(t){var e=t.width,r=t.color;return n.i(i.h)("svg",{viewBox:"0 0 30 30",xmlns:"http://www.w3.org/2000/svg",width:e,height:e},n.i(i.h)("g",{fill:r},a,c,u,s,l))},e.prototype.renderFullLogo=function(t){var e=t.width,r=t.height,o=t.color;return n.i(i.h)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:r,viewBox:"-313 376 166.2 50"},n.i(i.h)("g",{fill:o},f,p,h,d,m))},e}(i.Component)},"0Voh":function(t){t.exports={byProduct:"byProduct__2LMGI",entryWrapper:"entryWrapper__ctKAw",entryName:"entryName__1C7eE",entry:"entry__l-xpT",value:"value__33Ds_"}},"49pB":function(t){t.exports={dashboard:"dashboard__1zCkS",main:"main__2knj3",cupContainer:"cupContainer__Lc8es",listingsContainer:"listingsContainer__2nuI-",footer:"footer__3yg1L"}},E1Zn:function(t){var e,n={ORDER_QUEUE:"orderQueue",CONFIGURATION:"configuration",CUSTOMERS:"customers",ALL_ORDERS:"allOrders"},r={OPEN_ORDER:"open-order"},o={INTERACTED:"interacted",ALL:"all"},i={HELP:"help",QUEUE:"queue",ORDER:"order",CANCEL:"cancel",INVALID:"invalid"},a=["Espresso","Cappuccino","Latte","Americano","Flat White","Filter Coffee"],c=(e={expreso:"Espresso",expresso:"Espresso",espresso:"Espresso",cappacino:"Cappuccino",capacino:"Cappuccino"},e.cappacino="Cappuccino",e.cappocino="Cappuccino",e.capocino="Cappuccino",e.capacino="Cappuccino",e.cappucino="Cappuccino",e.cappuccino="Cappuccino",e.capuccino="Cappuccino",e.capochino="Cappuccino",e.late="Latte",e.lattey="Latte",e.larte="Latte",e.lattee="Latte",e.latte="Latte",e["cafe late"]="Latte",e["caffeé latte"]="Latte",e["caffeé latte"]="Latte",e["caffe latte"]="Latte",e.americano="Americano",e["white americano"]="Americano",e.caffeé="Americano",e["flat white"]="Flat White",e.flatwhite="Flat White",e["flat-white"]="Flat White",e["flatt white"]="Flat White",e["filter coffee"]="Filter Coffee",e.coffee="Filter Coffee",e["fliter coffee"]="Filter Coffee",e);t.exports={AVAILABLE_DEFAULT_OPTIONS:a,DEFAULT_CONFIGURATION:{isOn:!0,offlineMessage:"We are sorry but there is currently no coffee.",availableCoffees:function(t){return t.reduce(function(t,e){return t[e]=!0,t},{})}(a),spellingMap:c,repoUrl:"bit.ly/twilio-barista",expectedOrders:300},DEFAULT_JSON_ENTRY_KEY:"CHOOSE_KEY",INTENTS:i,SEGMENTS:r,SPELLING_MISTAKES:c,SYNC_NAMES:n,TAGS:o}},EHaz:function(t){t.exports={cup:"cup__DhLF7",frame:"frame__I6328",lidBottom:"lidBottom__16fSF",filling:"filling__1OHuU",lidTop:"lidTop__3yxuK",label:"label__2TGtp",emptyOverride:"emptyOverride__1Uod2",orders:"orders__2C8Oo"}},Fwg9:function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}n.d(e,"a",function(){return h});var i=n("KM04"),a=(n.n(i),n("+j+H")),c=n("M5cj"),u=n("hr6O"),s=n.n(u),l=n.i(i.h)(c.a,{name:"coffee-shop-sign",color:"#fff"}),f=n.i(i.h)("h1",null,n.i(i.h)(a.a,{width:153,height:45,color:"#fff",fullLogo:!0}),n.i(i.h)("span",null,"Barista Dashboard")),p=n.i(i.h)(c.a,{name:"coffee-shop-sign",color:"#fff"}),h=function(t){function e(){return r(this,t.apply(this,arguments))}return o(e,t),e.prototype.render=function(t){var e=t.url,r=t.numberOne,o=t.numberTwo;return n.i(i.h)("header",{class:s.a.header},l,n.i(i.h)("hgroup",{class:s.a.titleText},f,n.i(i.h)("h2",null,"Text your order to ",n.i(i.h)("span",{class:s.a.number},r)," or"," ",n.i(i.h)("span",{class:s.a.number},o)),n.i(i.h)("h2",null,"See how we built it ",n.i(i.h)("span",{class:s.a.repoLink},e))),p)},e}(i.Component)},Ks6h:function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"default",function(){return m});var i=n("KM04"),a=(n.n(i),n("ufpN")),c=n("Fwg9"),u=n("XjYt"),s=n("+j+H"),l=n("vu2b"),f=n("49pB"),p=n.n(f),h=n.i(i.h)("p",null,"Loading..."),d=n.i(i.h)(s.a,null),m=function(t){function e(){for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];var i=r(this,t.call.apply(t,[this].concat(n)));return i.state.loading=!0,i.state.stats={},i.statsService=l.a.shared(),i.statsService.on("updated",function(t){i.setState({stats:t.stats,loading:!1})}),i}return o(e,t),e.prototype.componentWillMount=function(){var t=this;this.statsService.init().then(function(e){t.setState({stats:e,loading:!1})})},e.prototype.render=function(){return this.state.loading?h:this.renderDashboard()},e.prototype.renderDashboard=function(){var t=this.state.stats,e=t.product,r=t.expectedOrders,o=t.totalOrders,s=t.repoUrl,l=t.phoneNumbers,f=o/r*100;return n.i(i.h)("div",{class:p.a.dashboard},n.i(i.h)(c.a,{url:s,numberOne:l[0],numberTwo:l[1]}),n.i(i.h)("div",{class:p.a.main},n.i(i.h)("div",{class:p.a.cupContainer},n.i(i.h)(a.a,{percentage:f,value:o})),n.i(i.h)("div",{class:p.a.listingsContainer},n.i(i.h)(u.a,{products:e}))),n.i(i.h)("footer",{class:p.a.footer},d))},e}(i.Component)},M5cj:function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}n.d(e,"a",function(){return l});var i=n("KM04"),a=(n.n(i),n("zybC")),c=n.n(a),u=n("q4KN"),s=n.n(u),l=function(t){function e(){for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];var i=r(this,t.call.apply(t,[this].concat(n)));return i.state.svgData=void 0,i}return o(e,t),e.prototype.getSvgData=function(t){var e="/assets/barista-icons/barista-icons_"+t+".svg";return fetch(e).then(function(t){if(!t.ok)throw new Error(t.statusText);return t.text()})},e.prototype.componentWillMount=function(){var t=this;this.getSvgData(this.props.name).then(function(e){t.setState({svgData:e})})},e.prototype.render=function(){var t=this.props,e=t.color;return n.i(i.h)("span",{class:s.a.baristaIcon,style:"--color: "+e+";",dangerouslySetInnerHTML:{__html:c.a.sanitize(this.state.svgData)}})},e}(i.Component)},XjYt:function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}n.d(e,"a",function(){return l});var i=n("KM04"),a=(n.n(i),n("M5cj")),c=n("0Voh"),u=n.n(c),s={Cappuccino:"cappuccino",Tea:"cup-of-coffee","Hot Chocolate":"coffee-to-go","Flat White":"flat-white",Latte:"cafe-latte",Americano:"americano",Mocca:"coffee-to-go",Espresso:"espresso-maker","Filter Coffee":"coffee-filter"},l=function(t){function e(){return r(this,t.apply(this,arguments))}return o(e,t),e.prototype.render=function(t){var e=t.products,r=Object.keys(e).map(function(t){var r=e[t],o=s[t]||"coffee-to-go";return n.i(i.h)("div",{class:u.a.entryWrapper},n.i(i.h)("p",{class:u.a.entryName},t),n.i(i.h)("div",{class:u.a.entry},n.i(i.h)(a.a,{class:u.a.icon,color:"#fff",name:o}),n.i(i.h)("p",{class:u.a.value},r)))});return n.i(i.h)("div",{class:u.a.byProduct},r)},e}(i.Component)},Z9rv:function(t,e,n){(function(t,n){function r(t,e){return!!(t?t.length:0)&&c(t,e,0)>-1}function o(t,e,n){for(var r=-1,o=t?t.length:0;++r<o;)if(n(e,t[r]))return!0;return!1}function i(t,e){for(var n=-1,r=t?t.length:0;++n<r;)if(e(t[n],n,t))return!0;return!1}function a(t,e,n,r){for(var o=t.length,i=n+(r?1:-1);r?i--:++i<o;)if(e(t[i],i,t))return i;return-1}function c(t,e,n){if(e!==e)return a(t,u,n);for(var r=n-1,o=t.length;++r<o;)if(t[r]===e)return r;return-1}function u(t){return t!==t}function s(t){return function(e){return null==e?void 0:e[t]}}function l(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}function f(t,e){return t.has(e)}function p(t,e){return null==t?void 0:t[e]}function h(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function d(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}function m(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}function y(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function v(){this.__data__=$e?$e(null):{}}function g(t){return this.has(t)&&delete this.__data__[t]}function b(t){var e=this.__data__;if($e){var n=e[t];return n===Bt?void 0:n}return De.call(e,t)?e[t]:void 0}function _(t){var e=this.__data__;return $e?void 0!==e[t]:De.call(e,t)}function w(t,e){return this.__data__[t]=$e&&void 0===e?Bt:e,this}function O(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function T(){this.__data__=[]}function x(t){var e=this.__data__,n=G(e,t);return!(n<0)&&(n==e.length-1?e.pop():He.call(e,n,1),!0)}function A(t){var e=this.__data__,n=G(e,t);return n<0?void 0:e[n][1]}function E(t){return G(this.__data__,t)>-1}function S(t,e){var n=this.__data__,r=G(n,t);return r<0?n.push([t,e]):n[r][1]=e,this}function j(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function L(){this.__data__={hash:new y,map:new(Be||O),string:new y}}function C(t){return lt(this,t).delete(t)}function k(t){return lt(this,t).get(t)}function M(t){return lt(this,t).has(t)}function N(t,e){return lt(this,t).set(t,e),this}function D(t){var e=-1,n=t?t.length:0;for(this.__data__=new j;++e<n;)this.add(t[e])}function R(t){return this.__data__.set(t,Bt),this}function F(t){return this.__data__.has(t)}function z(t){this.__data__=new O(t)}function I(){this.__data__=new O}function P(t){return this.__data__.delete(t)}function H(t){return this.__data__.get(t)}function U(t){return this.__data__.has(t)}function W(t,e){var n=this.__data__;if(n instanceof O){var r=n.__data__;if(!Be||r.length<Ut-1)return r.push([t,e]),this;n=this.__data__=new j(r)}return n.set(t,e),this}function B(t,e){var n=an(t)||Et(t)?l(t.length,String):[],r=n.length,o=!!r;for(var i in t)!e&&!De.call(t,i)||o&&("length"==i||dt(i,r))||n.push(i);return n}function G(t,e){for(var n=t.length;n--;)if(At(t[n][0],e))return n;return-1}function K(t,e){e=mt(e,t)?[e]:at(e);for(var n=0,r=e.length;null!=t&&n<r;)t=t[wt(e[n++])];return n&&n==r?t:void 0}function q(t){return Re.call(t)}function $(t,e){return null!=t&&e in Object(t)}function Y(t,e,n,r,o){return t===e||(null==t||null==e||!kt(t)&&!Mt(e)?t!==t&&e!==e:V(t,e,Y,n,r,o))}function V(t,e,n,r,o,i){var a=an(t),c=an(e),u=Vt,s=Vt;a||(u=rn(t),u=u==Yt?re:u),c||(s=rn(e),s=s==Yt?re:s);var l=u==re&&!h(t),f=s==re&&!h(e),p=u==s;if(p&&!l)return i||(i=new z),a||cn(t)?ct(t,e,n,r,o,i):ut(t,e,u,n,r,o,i);if(!(o&Kt)){var d=l&&De.call(t,"__wrapped__"),m=f&&De.call(e,"__wrapped__");if(d||m){var y=d?t.value():t,v=m?e.value():e;return i||(i=new z),n(y,v,r,o,i)}}return!!p&&(i||(i=new z),st(t,e,n,r,o,i))}function Z(t,e,n,r){var o=n.length,i=o,a=!r;if(null==t)return!i;for(t=Object(t);o--;){var c=n[o];if(a&&c[2]?c[1]!==t[c[0]]:!(c[0]in t))return!1}for(;++o<i;){c=n[o];var u=c[0],s=t[u],l=c[1];if(a&&c[2]){if(void 0===s&&!(u in t))return!1}else{var f=new z;if(r)var p=r(s,l,u,t,e,f);if(!(void 0===p?Y(l,s,r,Gt|Kt,f):p))return!1}}return!0}function X(t){return!(!kt(t)||vt(t))&&(Lt(t)||h(t)?Fe:ye).test(Ot(t))}function Q(t){return Mt(t)&&Ct(t.length)&&!!ge[Re.call(t)]}function J(t){return"function"==typeof t?t:null==t?It:"object"==typeof t?an(t)?nt(t[0],t[1]):et(t):Ht(t)}function tt(t){if(!gt(t))return Ue(t);var e=[];for(var n in Object(t))De.call(t,n)&&"constructor"!=n&&e.push(n);return e}function et(t){var e=ft(t);return 1==e.length&&e[0][2]?_t(e[0][0],e[0][1]):function(n){return n===t||Z(n,t,e)}}function nt(t,e){return mt(t)&&bt(e)?_t(wt(t),e):function(n){var r=Rt(n,t);return void 0===r&&r===e?Ft(n,t):Y(e,r,void 0,Gt|Kt)}}function rt(t){return function(e){return K(e,t)}}function ot(t){if("string"==typeof t)return t;if(Nt(t))return en?en.call(t):"";var e=t+"";return"0"==e&&1/t==-qt?"-0":e}function it(t,e,n){var i=-1,a=r,c=t.length,u=!0,s=[],l=s;if(n)u=!1,a=o;else if(c>=Ut){var p=e?null:nn(t);if(p)return m(p);u=!1,a=f,l=new D}else l=e?[]:s;t:for(;++i<c;){var h=t[i],d=e?e(h):h;if(h=n||0!==h?h:0,u&&d===d){for(var y=l.length;y--;)if(l[y]===d)continue t;e&&l.push(d),s.push(h)}else a(l,d,n)||(l!==s&&l.push(d),s.push(h))}return s}function at(t){return an(t)?t:on(t)}function ct(t,e,n,r,o,a){var c=o&Kt,u=t.length,s=e.length;if(u!=s&&!(c&&s>u))return!1;var l=a.get(t);if(l&&a.get(e))return l==e;var f=-1,p=!0,h=o&Gt?new D:void 0;for(a.set(t,e),a.set(e,t);++f<u;){var d=t[f],m=e[f];if(r)var y=c?r(m,d,f,e,t,a):r(d,m,f,t,e,a);if(void 0!==y){if(y)continue;p=!1;break}if(h){if(!i(e,function(t,e){if(!h.has(e)&&(d===t||n(d,t,r,o,a)))return h.add(e)})){p=!1;break}}else if(d!==m&&!n(d,m,r,o,a)){p=!1;break}}return a.delete(t),a.delete(e),p}function ut(t,e,n,r,o,i,a){switch(n){case se:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case ue:return!(t.byteLength!=e.byteLength||!r(new Ie(t),new Ie(e)));case Zt:case Xt:case ne:return At(+t,+e);case Qt:return t.name==e.name&&t.message==e.message;case oe:case ae:return t==e+"";case ee:var c=d;case ie:var u=i&Kt;if(c||(c=m),t.size!=e.size&&!u)return!1;var s=a.get(t);if(s)return s==e;i|=Gt,a.set(t,e);var l=ct(c(t),c(e),r,o,i,a);return a.delete(t),l;case ce:if(tn)return tn.call(t)==tn.call(e)}return!1}function st(t,e,n,r,o,i){var a=o&Kt,c=zt(t),u=c.length;if(u!=zt(e).length&&!a)return!1;for(var s=u;s--;){var l=c[s];if(!(a?l in e:De.call(e,l)))return!1}var f=i.get(t);if(f&&i.get(e))return f==e;var p=!0;i.set(t,e),i.set(e,t);for(var h=a;++s<u;){l=c[s];var d=t[l],m=e[l];if(r)var y=a?r(m,d,l,e,t,i):r(d,m,l,t,e,i);if(!(void 0===y?d===m||n(d,m,r,o,i):y)){p=!1;break}h||(h="constructor"==l)}if(p&&!h){var v=t.constructor,g=e.constructor;v!=g&&"constructor"in t&&"constructor"in e&&!("function"==typeof v&&v instanceof v&&"function"==typeof g&&g instanceof g)&&(p=!1)}return i.delete(t),i.delete(e),p}function lt(t,e){var n=t.__data__;return yt(e)?n["string"==typeof e?"string":"hash"]:n.map}function ft(t){for(var e=zt(t),n=e.length;n--;){var r=e[n],o=t[r];e[n]=[r,o,bt(o)]}return e}function pt(t,e){var n=p(t,e);return X(n)?n:void 0}function ht(t,e,n){e=mt(e,t)?[e]:at(e);for(var r,o=-1,i=e.length;++o<i;){var a=wt(e[o]);if(!(r=null!=t&&n(t,a)))break;t=t[a]}if(r)return r;var i=t?t.length:0;return!!i&&Ct(i)&&dt(a,i)&&(an(t)||Et(t))}function dt(t,e){return!!(e=null==e?$t:e)&&("number"==typeof t||ve.test(t))&&t>-1&&t%1==0&&t<e}function mt(t,e){if(an(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Nt(t))||(fe.test(t)||!le.test(t)||null!=e&&t in Object(e))}function yt(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}function vt(t){return!!Me&&Me in t}function gt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Ce)}function bt(t){return t===t&&!kt(t)}function _t(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}}function wt(t){if("string"==typeof t||Nt(t))return t;var e=t+"";return"0"==e&&1/t==-qt?"-0":e}function Ot(t){if(null!=t){try{return Ne.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Tt(t,e){return t&&t.length?it(t,J(e,2)):[]}function xt(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError(Wt);var n=function n(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a),a};return n.cache=new(xt.Cache||j),n}function At(t,e){return t===e||t!==t&&e!==e}function Et(t){return jt(t)&&De.call(t,"callee")&&(!Pe.call(t,"callee")||Re.call(t)==Yt)}function St(t){return null!=t&&Ct(t.length)&&!Lt(t)}function jt(t){return Mt(t)&&St(t)}function Lt(t){var e=kt(t)?Re.call(t):"";return e==Jt||e==te}function Ct(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=$t}function kt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Mt(t){return!!t&&"object"==typeof t}function Nt(t){return"symbol"==typeof t||Mt(t)&&Re.call(t)==ce}function Dt(t){return null==t?"":ot(t)}function Rt(t,e,n){var r=null==t?void 0:K(t,e);return void 0===r?n:r}function Ft(t,e){return null!=t&&ht(t,e,$)}function zt(t){return St(t)?B(t):tt(t)}function It(t){return t}function Pt(){}function Ht(t){return mt(t)?s(wt(t)):rt(t)}var Ut=200,Wt="Expected a function",Bt="__lodash_hash_undefined__",Gt=1,Kt=2,qt=1/0,$t=9007199254740991,Yt="[object Arguments]",Vt="[object Array]",Zt="[object Boolean]",Xt="[object Date]",Qt="[object Error]",Jt="[object Function]",te="[object GeneratorFunction]",ee="[object Map]",ne="[object Number]",re="[object Object]",oe="[object RegExp]",ie="[object Set]",ae="[object String]",ce="[object Symbol]",ue="[object ArrayBuffer]",se="[object DataView]",le=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,fe=/^\w*$/,pe=/^\./,he=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,de=/[\\^$.*+?()[\]{}|]/g,me=/\\(\\)?/g,ye=/^\[object .+?Constructor\]$/,ve=/^(?:0|[1-9]\d*)$/,ge={};ge["[object Float32Array]"]=ge["[object Float64Array]"]=ge["[object Int8Array]"]=ge["[object Int16Array]"]=ge["[object Int32Array]"]=ge["[object Uint8Array]"]=ge["[object Uint8ClampedArray]"]=ge["[object Uint16Array]"]=ge["[object Uint32Array]"]=!0,ge[Yt]=ge[Vt]=ge[ue]=ge[Zt]=ge[se]=ge[Xt]=ge[Qt]=ge[Jt]=ge[ee]=ge[ne]=ge[re]=ge[oe]=ge[ie]=ge[ae]=ge["[object WeakMap]"]=!1;var be="object"==typeof t&&t&&t.Object===Object&&t,_e="object"==typeof self&&self&&self.Object===Object&&self,we=be||_e||Function("return this")(),Oe="object"==typeof e&&e&&!e.nodeType&&e,Te=Oe&&"object"==typeof n&&n&&!n.nodeType&&n,xe=Te&&Te.exports===Oe,Ae=xe&&be.process,Ee=function(){try{return Ae&&Ae.binding("util")}catch(t){}}(),Se=Ee&&Ee.isTypedArray,je=Array.prototype,Le=Function.prototype,Ce=Object.prototype,ke=we["__core-js_shared__"],Me=function(){var t=/[^.]+$/.exec(ke&&ke.keys&&ke.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Ne=Le.toString,De=Ce.hasOwnProperty,Re=Ce.toString,Fe=RegExp("^"+Ne.call(De).replace(de,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ze=we.Symbol,Ie=we.Uint8Array,Pe=Ce.propertyIsEnumerable,He=je.splice,Ue=function(t,e){return function(n){return t(e(n))}}(Object.keys,Object),We=pt(we,"DataView"),Be=pt(we,"Map"),Ge=pt(we,"Promise"),Ke=pt(we,"Set"),qe=pt(we,"WeakMap"),$e=pt(Object,"create"),Ye=Ot(We),Ve=Ot(Be),Ze=Ot(Ge),Xe=Ot(Ke),Qe=Ot(qe),Je=ze?ze.prototype:void 0,tn=Je?Je.valueOf:void 0,en=Je?Je.toString:void 0;y.prototype.clear=v,y.prototype.delete=g,y.prototype.get=b,y.prototype.has=_,y.prototype.set=w,O.prototype.clear=T,O.prototype.delete=x,O.prototype.get=A,O.prototype.has=E,O.prototype.set=S,j.prototype.clear=L,j.prototype.delete=C,j.prototype.get=k,j.prototype.has=M,j.prototype.set=N,D.prototype.add=D.prototype.push=R,D.prototype.has=F,z.prototype.clear=I,z.prototype.delete=P,z.prototype.get=H,z.prototype.has=U,z.prototype.set=W;var nn=Ke&&1/m(new Ke([,-0]))[1]==qt?function(t){return new Ke(t)}:Pt,rn=q;(We&&rn(new We(new ArrayBuffer(1)))!=se||Be&&rn(new Be)!=ee||Ge&&"[object Promise]"!=rn(Ge.resolve())||Ke&&rn(new Ke)!=ie||qe&&"[object WeakMap]"!=rn(new qe))&&(rn=function(t){var e=Re.call(t),n=e==re?t.constructor:void 0,r=n?Ot(n):void 0;if(r)switch(r){case Ye:return se;case Ve:return ee;case Ze:return"[object Promise]";case Xe:return ie;case Qe:return"[object WeakMap]"}return e});var on=xt(function(t){t=Dt(t);var e=[];return pe.test(t)&&e.push(""),t.replace(he,function(t,n,r,o){e.push(r?o.replace(me,"$1"):n||t)}),e});xt.Cache=j;var an=Array.isArray,cn=Se?function(t){return function(e){return t(e)}}(Se):Q;n.exports=Tt}).call(e,n("h6ac"),n("l262")(t))},hr6O:function(t){t.exports={header:"header__3eOgX",number:"number__1rZZT",repoLink:"repoLink__1PcIc",titleText:"titleText__8Lft_"}},q4KN:function(t){t.exports={baristaIcon:"baristaIcon__1rNOo"}},ufpN:function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}n.d(e,"a",function(){return s});var i=n("KM04"),a=(n.n(i),n("EHaz")),c=n.n(a),u=n.i(i.h)("defs",null,n.i(i.h)("clipPath",{id:"fillingClipPath"},n.i(i.h)("path",{transform:"rotate(-180 161.50000000000003,299.4564208984375) ",d:"m61.9728,443.33417l37.322701,-287.755478l124.409011,0l37.322688,287.755478l-199.054401,0z","stroke-opacity":"null","stroke-width":"0"}))),s=function(t){function e(){return r(this,t.apply(this,arguments))}return o(e,t),e.prototype.render=function(){var t=this.props,e=t.value,r=t.percentage,o=10+279*(1-r%100/100);return n.i(i.h)("div",{class:c.a.cup},n.i(i.h)("svg",{viewBox:"0 32 323 435.99999999999994",xmlns:"http://www.w3.org/2000/svg"},u,n.i(i.h)("g",null,n.i(i.h)("path",{transform:"rotate(-180 161.50000000000003,298.3550109863281) ",class:c.a.frame,d:"m40.500002,458.854998l45.375001,-320.999996l151.250011,0l45.374984,320.999996l-241.999996,0z","stroke-width":"12"}),n.i(i.h)("path",{class:c.a.lidBottom,d:"m19.5,107.590813l284,0l0,28.909187l-284,0l0,-28.909187z","stroke-opacity":"null","stroke-linecap":"null","stroke-linejoin":"null","stroke-width":"12","fill-opacity":"null"}),n.i(i.h)("path",{transform:"rotate(-180 161.50000000000003,299.4564208984375) ",class:c.a.filling,d:"m61.9728,443.33417l37.322701,-287.755478l124.409011,0l37.322688,287.755478l-199.054401,0z","stroke-opacity":"null","stroke-width":"0"}),n.i(i.h)("rect",{class:c.a.emptyOverride,x:"62",y:"155",width:"200",height:o,"clip-path":"url(#fillingClipPath)"}),n.i(i.h)("path",{class:c.a.lidTop,d:"m32.182707,106.107988l48.493986,-46.363314l161.64663,0l48.493969,46.363314l-258.634586,0z","fill-opacity":"null","stroke-opacity":"null","stroke-width":"12"}),n.i(i.h)("path",{class:c.a.label,d:"m47.370051,249.577458l228.259898,-0.563373l-10.401717,71.549296l-207.745399,0l-10.112781,-70.985923z","fill-opacity":"null","stroke-opacity":"null","stroke-width":"2"}),n.i(i.h)("text",{class:c.a.orders,"text-anchor":"middle",x:"161.5",y:"300"},e))))},e}(i.Component)},vu2b:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n("PR/g"),o=(n.n(r),n("Lpj9")),i=n("E1Zn"),a=(n.n(i),n("Z9rv")),c=(n.n(a),void 0),u=function(){function t(){this.stats=void 0,this.allOrdersList=void 0}return t.shared=function(){return c=c||new t},t.prototype.getStats=function(){return this.stats?Promise.resolve(this.stats):this.fetchStats()},t.prototype.init=function(){var t=this,e=o.a.shared(),n=function(){return t.reconnect()};return e.removeListener("disconnected",n),e.on("disconnected",n),e.init().then(function(t){return t.list(i.SYNC_NAMES.ALL_ORDERS)}).then(function(e){return t.allOrdersList=e,t.addEventListeners(),t.fetchStats()})},t.prototype.reconnect=function(){console.log("trying to reconnect..."),this.init()},t.prototype.updateStats=function(t){var e=t.value;this.stats&&(this.stats.totalOrders++,this.stats.product[e.product]=(this.stats.product[e.product]||0)+1,this.stats.source[e.source]=(this.stats.source[e.source]||0)+1,this.stats.countryCode[e.countryCode]=(this.stats.countryCode[e.countryCode]||0)+1)},t.prototype.addEventListeners=function(){var t=this;this.allOrdersList.on("itemAdded",function(e){t.updateStats(e),t.emit("updated",{stats:t.stats})})},t.prototype.fetchStats=function(){var t=this;return fetch("/api/stats").then(function(t){if(!t.ok)throw new Error(t.body);return t.json()}).then(function(e){return t.stats=e})},t}();r(u.prototype)},zybC:function(t,e,n){var r;!function(o){"use strict";var i="undefined"==typeof window?null:window;void 0!==(r=function(){return o(i)}.call(e,n,e,t))&&(t.exports=r)}(function t(e){"use strict";var n=function(e){return t(e)};if(n.version="0.9.0",n.removed=[],!e||!e.document||9!==e.document.nodeType)return n.isSupported=!1,n;var r=e.document,o=r,i=e.DocumentFragment,a=e.HTMLTemplateElement,c=e.Node,u=e.NodeFilter,s=e.NamedNodeMap||e.MozNamedAttrMap,l=e.Text,f=e.Comment,p=e.DOMParser,h=e.XMLHttpRequest,d=e.encodeURI,m=!1,y=!1;if("function"==typeof a){var v=r.createElement("template");v.content&&v.content.ownerDocument&&(r=v.content.ownerDocument)}var g=r.implementation,b=r.createNodeIterator,_=r.getElementsByTagName,w=r.createDocumentFragment,O=o.importNode,T={};n.isSupported=void 0!==g.createHTMLDocument&&9!==r.documentMode;var x=function(t,e){for(var n=e.length;n--;)"string"==typeof e[n]&&(e[n]=e[n].toLowerCase()),t[e[n]]=!0;return t},A=function(t){var e,n={};for(e in t)t.hasOwnProperty(e)&&(n[e]=t[e]);return n},E=null,S=x({},["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr","svg","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","switch","symbol","text","textpath","title","tref","tspan","view","vkern","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmuliscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mpspace","msqrt","mystyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","#text"]),j=null,L=x({},["accept","action","align","alt","autocomplete","background","bgcolor","border","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","coords","datetime","default","dir","disabled","download","enctype","face","for","headers","height","hidden","high","href","hreflang","id","ismap","label","lang","list","loop","low","max","maxlength","media","method","min","multiple","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","span","srclang","start","src","step","style","summary","tabindex","title","type","usemap","valign","value","width","xmlns","accent-height","accumulate","additivive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mode","min","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","surfacescale","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","u1","u2","unicode","values","viewbox","visibility","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","y","y1","y2","z","zoomandpan","accent","accentunder","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","display","displaystyle","fence","frame","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),C=null,k=null,M=!0,N=!0,D=!1,R=!1,F=!1,z=/\{\{[\s\S]*|[\s\S]*\}\}/gm,I=/<%[\s\S]*|[\s\S]*%>/gm,P=!1,H=!1,U=!1,W=!1,B=!1,G=!1,K=!0,q=!0,$=x({},["audio","head","math","script","style","template","svg","video"]),Y=x({},["audio","video","img","source","image"]),V=x({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),Z=null,X=r.createElement("form"),Q=function(t){"object"!=typeof t&&(t={}),E="ALLOWED_TAGS"in t?x({},t.ALLOWED_TAGS):S,j="ALLOWED_ATTR"in t?x({},t.ALLOWED_ATTR):L,C="FORBID_TAGS"in t?x({},t.FORBID_TAGS):{},k="FORBID_ATTR"in t?x({},t.FORBID_ATTR):{},M=!1!==t.ALLOW_ARIA_ATTR,N=!1!==t.ALLOW_DATA_ATTR,D=t.ALLOW_UNKNOWN_PROTOCOLS||!1,R=t.SAFE_FOR_JQUERY||!1,F=t.SAFE_FOR_TEMPLATES||!1,P=t.WHOLE_DOCUMENT||!1,W=t.RETURN_DOM||!1,B=t.RETURN_DOM_FRAGMENT||!1,G=t.RETURN_DOM_IMPORT||!1,U=t.FORCE_BODY||!1,K=!1!==t.SANITIZE_DOM,q=!1!==t.KEEP_CONTENT,F&&(N=!1),B&&(W=!0),t.ADD_TAGS&&(E===S&&(E=A(E)),x(E,t.ADD_TAGS)),t.ADD_ATTR&&(j===L&&(j=A(j)),x(j,t.ADD_ATTR)),t.ADD_URI_SAFE_ATTR&&x(V,t.ADD_URI_SAFE_ATTR),q&&(E["#text"]=!0),Object&&Object,Z=t},J=function(t){n.removed.push({element:t});try{t.parentNode.removeChild(t)}catch(e){t.outerHTML=""}},tt=function(t,e){n.removed.push({attribute:e.getAttributeNode(t),from:e}),e.removeAttribute(t)},et=function(t){var e,n;if(U&&(t="<remove></remove>"+t),m){try{t=d(t)}catch(t){}var r=new h;r.responseType="document",r.open("GET","data:text/html;charset=utf-8,"+t,!1),r.send(null),e=r.response}if(y)try{e=(new p).parseFromString(t,"text/html")}catch(t){}return e&&e.documentElement||(e=g.createHTMLDocument(""),n=e.body,n.parentNode.removeChild(n.parentNode.firstElementChild),n.outerHTML=t),_.call(e,P?"html":"body")[0]};n.isSupported&&function(){var t=et('<svg><g onload="this.parentNode.remove()"></g></svg>');t.querySelector("svg")||(m=!0),t=et('<svg><p><style><img src="</style><img src=x onerror=alert(1)//">'),t.querySelector("svg img")&&(y=!0)}();var nt=function(t){return b.call(t.ownerDocument||t,t,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT,function(){return u.FILTER_ACCEPT},!1)},rt=function(t){return!(t instanceof l||t instanceof f)&&!("string"==typeof t.nodeName&&"string"==typeof t.textContent&&"function"==typeof t.removeChild&&t.attributes instanceof s&&"function"==typeof t.removeAttribute&&"function"==typeof t.setAttribute)},ot=function(t){return"object"==typeof c?t instanceof c:t&&"object"==typeof t&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},it=function(t){var e,r;if(ht("beforeSanitizeElements",t,null),rt(t))return J(t),!0;if(e=t.nodeName.toLowerCase(),ht("uponSanitizeElement",t,{tagName:e,allowedTags:E}),!E[e]||C[e]){if(q&&!$[e]&&"function"==typeof t.insertAdjacentHTML)try{t.insertAdjacentHTML("AfterEnd",t.innerHTML)}catch(t){}return J(t),!0}return!R||t.firstElementChild||t.content&&t.content.firstElementChild||!/</g.test(t.textContent)||(n.removed.push({element:t.cloneNode()}),t.innerHTML=t.textContent.replace(/</g,"&lt;")),F&&3===t.nodeType&&(r=t.textContent,r=r.replace(z," "),r=r.replace(I," "),t.textContent!==r&&(n.removed.push({element:t.cloneNode()}),t.textContent=r)),ht("afterSanitizeElements",t,null),!1},at=/^data-[\-\w.\u00B7-\uFFFF]/,ct=/^aria-[\-\w]+$/,ut=/^(?:(?:(?:f|ht)tps?|mailto|tel):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,st=/^(?:\w+script|data):/i,lt=/[\x00-\x20\xA0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,ft=function(t){var o,i,a,c,u,s,l,f;if(ht("beforeSanitizeAttributes",t,null),s=t.attributes){for(l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:j},f=s.length;f--;){if(o=s[f],i=o.name,a=o.value.trim(),c=i.toLowerCase(),l.attrName=c,l.attrValue=a,l.keepAttr=!0,ht("uponSanitizeAttribute",t,l),a=l.attrValue,"name"===c&&"IMG"===t.nodeName&&s.id)u=s.id,s=Array.prototype.slice.apply(s),tt("id",t),tt(i,t),s.indexOf(u)>f&&t.setAttribute("id",u.value);else{if("INPUT"===t.nodeName&&"type"===c&&"file"===a&&(j[c]||!k[c]))continue;"id"===i&&t.setAttribute(i,""),tt(i,t)}if(l.keepAttr&&(!K||"id"!==c&&"name"!==c||!(a in e||a in r||a in X))){if(F&&(a=a.replace(z," "),a=a.replace(I," ")),N&&at.test(c));else if(M&&ct.test(c));else{if(!j[c]||k[c])continue;if(V[c]);else if(ut.test(a.replace(lt,"")));else if("src"!==c&&"xlink:href"!==c||0!==a.indexOf("data:")||!Y[t.nodeName.toLowerCase()]){if(D&&!st.test(a.replace(lt,"")));else if(a)continue}else;}try{t.setAttribute(i,a),n.removed.pop()}catch(t){}}}ht("afterSanitizeAttributes",t,null)}},pt=function t(e){var n,r=nt(e);for(ht("beforeSanitizeShadowDOM",e,null);n=r.nextNode();)ht("uponSanitizeShadowNode",n,null),it(n)||(n.content instanceof i&&t(n.content),ft(n));ht("afterSanitizeShadowDOM",e,null)},ht=function(t,e,r){T[t]&&T[t].forEach(function(t){t.call(n,e,r,Z)})};return n.sanitize=function(t,r){var a,u,s,l,f,p;if(t||(t="\x3c!--\x3e"),"string"!=typeof t&&!ot(t)){if("function"!=typeof t.toString)throw new TypeError("toString is not a function");t=t.toString()}if(!n.isSupported){if("object"==typeof e.toStaticHTML||"function"==typeof e.toStaticHTML){if("string"==typeof t)return e.toStaticHTML(t);if(ot(t))return e.toStaticHTML(t.outerHTML)}return t}if(H||Q(r),n.removed=[],t instanceof c)a=et("\x3c!--\x3e"),u=a.ownerDocument.importNode(t,!0),1===u.nodeType&&"BODY"===u.nodeName?a=u:a.appendChild(u);else{if(!W&&!P&&-1===t.indexOf("<"))return t;if(!(a=et(t)))return W?null:""}for(U&&J(a.firstChild),f=nt(a);s=f.nextNode();)3===s.nodeType&&s===l||it(s)||(s.content instanceof i&&pt(s.content),ft(s),l=s);if(W){if(B)for(p=w.call(a.ownerDocument);a.firstChild;)p.appendChild(a.firstChild);else p=a;return G&&(p=O.call(o,p,!0)),p}return P?a.outerHTML:a.innerHTML},n.setConfig=function(t){Q(t),H=!0},n.clearConfig=function(){Z=null,H=!1},n.addHook=function(t,e){"function"==typeof e&&(T[t]=T[t]||[],T[t].push(e))},n.removeHook=function(t){T[t]&&T[t].pop()},n.removeHooks=function(t){T[t]&&(T[t]=[])},n.removeAllHooks=function(){T={}},n})}});
//# sourceMappingURL=route-dashboard.chunk.c3328.js.map