webpackJsonp([0x8a44d8ff7b48,0x620f737b6699],{320:function(e,t){},26:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function l(e){if(s===setTimeout)return setTimeout(e,0);if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}function o(e){if(f===clearTimeout)return clearTimeout(e);if((f===a||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function r(){h&&p&&(h=!1,p.length?m=p.concat(m):y=-1,m.length&&i())}function i(){if(!h){var e=l(r);h=!0;for(var t=m.length;t;){for(p=m,m=[];++y<t;)p&&p[y].run();y=-1,t=m.length}p=null,h=!1,o(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var s,f,d=e.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:n}catch(e){s=n}try{f="function"==typeof clearTimeout?clearTimeout:a}catch(e){f=a}}();var p,m=[],h=!1,y=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new u(e,t)),1!==m.length||h||l(i)},u.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.prependListener=c,d.prependOnceListener=c,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},128:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(1),c=a(u),s=n(58),f=a(s),d=function(e){return e.displayName||e.name||"Component"};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function a(){l(this,a);var e=o(this,(a.__proto__||Object.getPrototypeOf(a)).call(this));return e.displayName="LazyLoad"+d(t),e}return r(a,n),i(a,[{key:"render",value:function(){return c.default.createElement(f.default,e,c.default.createElement(t,this.props))}}]),a}(u.Component)}}},58:function(e,t,n){(function(e){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.forceCheck=t.lazyload=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(1),c=a(u),s=n(39),f=a(s),d=n(2),p=a(d),m=n(130),h=n(131),y=a(h),v=n(129),b=a(v),w=n(132),E=a(w),g=n(128),N=a(g),M={top:0,right:0,bottom:0,left:0,width:0,height:0},j="data-lazyload-listened",D=[],I=[],T=!1;try{var L=Object.defineProperty({},"passive",{get:function(){T=!0}});window.addEventListener("test",null,L)}catch(e){}var z=!!T&&{capture:!1,passive:!0},O=function(e,t){var n=f.default.findDOMNode(e),a=void 0,l=void 0;try{var o=t.getBoundingClientRect();a=o.top,l=o.height}catch(e){a=M.top,l=M.height}var r=window.innerHeight||document.documentElement.clientHeight,i=Math.max(a,0),u=Math.min(r,a+l)-i,c=void 0,s=void 0;try{var d=n.getBoundingClientRect();c=d.top,s=d.height}catch(e){c=M.top,s=M.height}var p=c-i,m=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return p-m[0]<=u&&p+s+m[1]>=0},_=function(e){var t=f.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,a=void 0;try{var l=t.getBoundingClientRect();n=l.top,a=l.height}catch(e){n=M.top,a=M.height}var o=window.innerHeight||document.documentElement.clientHeight,r=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-r[0]<=o&&n+a+r[1]>=0},A=function(e){var t=f.default.findDOMNode(e);if(t){var n=(0,y.default)(t),a=e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement,l=a?O(e,n):_(e);l?e.visible||(e.props.once&&I.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},C=function(){I.forEach(function(e){var t=D.indexOf(e);t!==-1&&D.splice(t,1)}),I=[]},x=function(){for(var e=0;e<D.length;++e){var t=D[e];A(t)}C()},k=void 0,P=null,R=function(e){function t(e){l(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n}return r(t,e),i(t,[{key:"componentDidMount",value:function(){var e=!1;if(void 0!==this.props.debounce&&"throttle"===k?(console.warn("[react-lazyload] Previous delay function is `throttle`, now switching to `debounce`, try setting them unanimously"),e=!0):"debounce"===k&&void 0===this.props.debounce&&(console.warn("[react-lazyload] Previous delay function is `debounce`, now switching to `throttle`, try setting them unanimously"),e=!0),e&&((0,m.off)(window,"scroll",P,z),(0,m.off)(window,"resize",P,z),P=null),P||(void 0!==this.props.debounce?(P=(0,b.default)(x,"number"==typeof this.props.debounce?this.props.debounce:300),k="debounce"):void 0!==this.props.throttle?(P=(0,E.default)(x,"number"==typeof this.props.throttle?this.props.throttle:300),k="throttle"):P=x),this.props.overflow){var t=(0,y.default)(f.default.findDOMNode(this));if(t&&"function"==typeof t.getAttribute){var n=1+ +t.getAttribute(j);1===n&&t.addEventListener("scroll",P,z),t.setAttribute(j,n)}}else if(0===D.length||e){var a=this.props,l=a.scroll,o=a.resize;l&&(0,m.on)(window,"scroll",P,z),o&&(0,m.on)(window,"resize",P,z)}D.push(this),A(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,y.default)(f.default.findDOMNode(this));if(e&&"function"==typeof e.getAttribute){var t=+e.getAttribute(j)-1;0===t?(e.removeEventListener("scroll",P,z),e.removeAttribute(j)):e.setAttribute(j,t)}}var n=D.indexOf(this);n!==-1&&D.splice(n,1),0===D.length&&((0,m.off)(window,"resize",P,z),(0,m.off)(window,"scroll",P,z))}},{key:"render",value:function(){return this.visible?this.props.children:this.props.placeholder?this.props.placeholder:c.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"})}}]),t}(u.Component);R.propTypes={once:p.default.bool,height:p.default.oneOfType([p.default.number,p.default.string]),offset:p.default.oneOfType([p.default.number,p.default.arrayOf(p.default.number)]),overflow:p.default.bool,resize:p.default.bool,scroll:p.default.bool,children:p.default.node,throttle:p.default.oneOfType([p.default.number,p.default.bool]),debounce:p.default.oneOfType([p.default.number,p.default.bool]),placeholder:p.default.node,unmountIfInvisible:p.default.bool},R.defaultProps={once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};t.lazyload=N.default;t.default=R,t.forceCheck=x}).call(t,n(26))},129:function(e,t){"use strict";function n(e,t,n){var a=void 0,l=void 0,o=void 0,r=void 0,i=void 0,u=function u(){var c=+new Date-r;c<t&&c>=0?a=setTimeout(u,t-c):(a=null,n||(i=e.apply(o,l),a||(o=null,l=null)))};return function(){o=this,l=arguments,r=+new Date;var c=n&&!a;return a||(a=setTimeout(u,t)),c&&(i=e.apply(o,l),o=null,l=null),i}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},130:function(e,t){"use strict";function n(e,t,n,a){a=a||!1,e.addEventListener?e.addEventListener(t,n,a):e.attachEvent&&e.attachEvent("on"+t,function(t){n.call(e,t||window.event)})}function a(e,t,n,a){a=a||!1,e.removeEventListener?e.removeEventListener(t,n,a):e.detachEvent&&e.detachEvent("on"+t,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.on=n,t.off=a},131:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!e)return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,a=e;a;){if(!a.parentNode)return e.ownerDocument||document.documentElement;var l=window.getComputedStyle(a),o=l.position,r=l.overflow,i=l["overflow-x"],u=l["overflow-y"];if("static"===o&&t)a=a.parentNode;else{if(n.test(r)&&n.test(i)&&n.test(u))return a;a=a.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},132:function(e,t){"use strict";function n(e,t,n){t||(t=250);var a,l;return function(){var o=n||this,r=+new Date,i=arguments;a&&r<a+t?(clearTimeout(l),l=setTimeout(function(){a=r,e.apply(o,i)},t)):(a=r,e.apply(o,i))}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},646:function(e,t,n){e.exports=n.p+"static/cocos.c5b9277e.svg"},647:function(e,t,n){e.exports=n.p+"static/egret.978471d7.svg"},648:function(e,t,n){e.exports=n.p+"static/lua.28967da8.svg"},649:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNjAwcHgiIGhlaWdodD0iNjAwcHgiIHZpZXdCb3g9IjAgMCA2MDAgNjAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA2MDAgNjAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGZpbGw9IiMyMjJDMzciIGQ9Ik0zODYuMDA4LDMwMC4wMTdMNDg3LjUwNiwxMjQuNzVsNDkuMDQ3LDE3NS4yNjdsLTQ5LjA0NywxNzUuMjI4TDM4Ni4wMDgsMzAwLjAxN0wzODYuMDA4LDMwMC4wMTd6DQoJCSBNMzM2LjUzNCwzMjguNDc5bDEwMS41MTcsMTc1LjI0MWwtMTc2Ljc5Ny00NS4yOTVMMTMzLjUyOSwzMjguNDc5SDMzNi41MzRMMzM2LjUzNCwzMjguNDc5eiBNNDM4LjAyNiw5Ni4yNjVMMzM2LjUzNCwyNzEuNTMxDQoJCUgxMzMuNTI5bDEyNy43MjUtMTI5Ljk1NEw0MzguMDI2LDk2LjI2NUw0MzguMDI2LDk2LjI2NXogTTU4Mi45MjgsMjQwLjM3Mkw1MjEuMDA1LDEwTDI4OS44NzgsNzEuNzM4bC0zNC4yMTMsNjAuMTUzDQoJCWwtNjkuNDI1LTAuNDk4TDE3LjA3MSwzMDAuMDMzTDE4Ni4yNCw0NjguNjMxaDAuMDA4bDY5LjM5Ni0wLjUxNGwzNC4yNjEsNjAuMTUyTDUyMS4wMDYsNTkwbDYxLjkyMy0yMzAuMzNsLTM1LjE2Ni01OS42NTQNCgkJTDU4Mi45MjgsMjQwLjM3Mkw1ODIuOTI4LDI0MC4zNzJ6Ii8+DQo8L2c+DQo8L3N2Zz4NCg=="},46:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(1),u=a(i),c=n(25),s=a(c),f=n(16),d=a(f),p=function(e){function t(){return l(this,t),o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){var e=this.props,t=e.data,n=(e.site,e.summary),a=(0,s.default)(t,"frontmatter.title"),l=(0,s.default)(t,"frontmatter.path"),o=(0,s.default)(t,"frontmatter.date"),r=(0,s.default)(t,"frontmatter.description"),i=(0,s.default)(t,"html"),c=function(){return u.default.createElement("div",{className:"blogSummary"},u.default.createElement(d.default,{className:"animated zoomIn",to:l},u.default.createElement("p",{className:"blogTitle"},a),u.default.createElement("p",{className:"blogDate"},o),u.default.createElement("p",{className:"blogDesc"},r)))},f=function(){return u.default.createElement("div",{className:"blogContent"},u.default.createElement("div",{className:"animated flipInX",id:"blogHeader"},u.default.createElement("p",{className:"blogTitle"},a),u.default.createElement("p",{className:"blogDate"},o),u.default.createElement("p",{className:"blogDesc"},r)),u.default.createElement("div",{className:"animated bounceInRight"},u.default.createElement("div",{className:"mdContent",dangerouslySetInnerHTML:{__html:i}})))};return u.default.createElement("div",null,n?c():f())},t}(u.default.Component);t.default=p,e.exports=t.default},235:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var i=n(1),u=a(i),c=n(16),s=a(c),f=n(25),d=(a(f),n(58)),p=a(d),m=n(57),h=a(m),y=n(87),v=(a(y),n(320)),b=(a(v),n(649)),w=a(b),E=n(647),g=a(E),N=n(646),M=a(N),j=n(648),D=a(j),I=function(e){function t(){return l(this,t),o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.data.site.siteMetadata.description;return u.default.createElement("div",null,u.default.createElement(h.default,null,u.default.createElement("title",null,e),u.default.createElement("meta",{name:"description",content:t})),u.default.createElement("div",{id:"main"},u.default.createElement("section",{id:"one"},u.default.createElement("header",{className:"name"},u.default.createElement("h1",{className:"animated zoomIn"},"Allen DK")),u.default.createElement("header",{className:"major"},u.default.createElement("h2",{className:"animated flipInX"},"A junior Game Developer, who's keen to create a virtual new world.",u.default.createElement("br",null),"Also a senior Gamer."))),u.default.createElement("section",{id:"two"},u.default.createElement("header",{className:"skills"},u.default.createElement("div",{className:"animated zoomIn"},"Languages & Frameworks")),u.default.createElement("ul",{className:"icons"},u.default.createElement(p.default,null,u.default.createElement("li",{id:"skills",className:"animated flipInX"},u.default.createElement("span",{className:"devicon-csharp-plain colored"}))),u.default.createElement(p.default,null,u.default.createElement("li",{id:"skills",className:"animated flipInY"},u.default.createElement("span",{className:"devicon-cplusplus-plain colored"}))),u.default.createElement(p.default,null,u.default.createElement("li",{id:"skills",className:"animated flipInX"},u.default.createElement("span",{className:"devicon-git-plain colored"}))),u.default.createElement(p.default,null,u.default.createElement("li",{id:"skills",className:"animated flipInY"},u.default.createElement("span",{className:"devicon-github-plain colored"}))),u.default.createElement(p.default,null,u.default.createElement("li",{id:"skills",className:"animated flipInX"},u.default.createElement("span",{className:"devicon-javascript-plain colored"}))),u.default.createElement(p.default,null,u.default.createElement("li",{id:"skills",className:"animated flipInY"},u.default.createElement("span",{className:"devicon-html5-plain colored"}))),u.default.createElement(p.default,null,u.default.createElement("li",{id:"skills",className:"animated flipInX"},u.default.createElement("span",{className:"devicon-python-plain colored"}))),u.default.createElement(p.default,null,u.default.createElement("li",{id:"skills",className:"animated flipInY"},u.default.createElement("span",{className:"devicon-react-original colored"}))),u.default.createElement(p.default,null,u.default.createElement("li",{id:"skills",className:"animated flipInX"},u.default.createElement("span",{className:"devicon-typescript-plain colored"}))))),u.default.createElement("section",{id:"three"},u.default.createElement("header",{className:"engines"},u.default.createElement("div",{className:"animated zoomIn"},"Engines & Others"),u.default.createElement("ul",{className:"icons"},u.default.createElement(p.default,null,u.default.createElement("li",{id:"engines",className:"animated flipInX"},u.default.createElement("img",{src:w.default,alt:"Unity3D",width:80,height:80}))),u.default.createElement(p.default,null,u.default.createElement("li",{id:"engines",className:"animated flipInX"},u.default.createElement("img",{src:g.default,alt:"Egret",width:80,height:80}))),u.default.createElement(p.default,null,u.default.createElement("li",{id:"engines",className:"animated flipInX"},u.default.createElement("img",{src:M.default,alt:"Cocos2Dx",width:80,height:100}))),u.default.createElement(p.default,null,u.default.createElement("li",{id:"engines",className:"animated flipInX"},u.default.createElement("img",{src:D.default,alt:"Lua",width:80,height:80})))))),u.default.createElement("section",{id:"four"},u.default.createElement("ul",{className:"actions"},u.default.createElement("li",null,u.default.createElement(s.default,{to:"/",className:"button"},"Back"))))))},t}(u.default.Component);t.default=I;t.pageQuery="** extracted graphql fragment **"},87:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var i=n(1),u=a(i),c=n(57),s=a(c),f=n(16),d=(a(f),n(25)),p=a(d),m=n(46),h=a(m),y=function(e){function t(){return l(this,t),o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){var e=(0,p.default)(this,"props.data.post"),t=(0,p.default)(e,"frontmatter.title"),n=(0,p.default)(this,"props.data.site"),a=(0,p.default)(n,"siteMetadata.title");return u.default.createElement("div",null,u.default.createElement(s.default,{title:t+" | "+a}),u.default.createElement(h.default,{data:e,site:n,summary:!1}))},t}(u.default.Component);t.default=y;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-profile-page-jsx-a2739019056452b80384.js.map