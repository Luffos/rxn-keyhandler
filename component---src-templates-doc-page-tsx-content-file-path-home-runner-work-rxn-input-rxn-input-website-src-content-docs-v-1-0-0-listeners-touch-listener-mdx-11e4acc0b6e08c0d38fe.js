"use strict";(self.webpackChunkrxn_input_website=self.webpackChunkrxn_input_website||[]).push([[588],{259:function(e,n,t){function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,{Zo:function(){return f},ah:function(){return a}});var i=t(7294);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var u=i.createContext({});function a(e){var n=i.useContext(u);return i.useMemo((function(){return"function"==typeof e?e(n):c(c({},n),e)}),[n,e])}var l={};function f(e){var n=e.components,t=e.children,r=e.disableParentContext,o=a(n);return r&&(o=n||l),i.createElement(u.Provider,{value:o},t)}},354:function(e){var n=function(e){};e.exports=function(e,t){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];if(n(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=0;(c=new Error(t.replace(/%s/g,(function(){return String(i[u++])})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},6469:function(e,n,t){function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.d(n,{ZP:function(){return s}});var i=t(354),o=t.n(i),c=!("undefined"==typeof window||!window.document||!window.document.createElement),u={window:{fontScale:1,height:0,scale:1,width:0},screen:{fontScale:1,height:0,scale:1,width:0}},a={},l=c,f=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,i;return n=e,i=[{key:"get",value:function(n){return l&&(l=!1,e._update()),o()(u[n],"No dimension set for key "+n),u[n]}},{key:"set",value:function(e){e&&(c?o()(!1,"Dimensions cannot be set in the browser"):(null!=e.screen&&(u.screen=e.screen),null!=e.window&&(u.window=e.window)))}},{key:"_update",value:function(){if(c){var e=window,n=e.document.documentElement;u.window={fontScale:1,height:n.clientHeight,scale:e.devicePixelRatio||1,width:n.clientWidth},u.screen={fontScale:1,height:e.screen.height,scale:e.devicePixelRatio||1,width:e.screen.width},Array.isArray(a.change)&&a.change.forEach((function(e){return e(u)}))}}},{key:"addEventListener",value:function(e,n){var t=this;return a[e]=a[e]||[],a[e].push(n),{remove:function(){t.removeEventListener(e,n)}}}},{key:"removeEventListener",value:function(e,n){Array.isArray(a[e])&&(a[e]=a[e].filter((function(e){return e!==n})))}}],(t=null)&&r(n.prototype,t),i&&r(n,i),Object.defineProperty(n,"prototype",{writable:!1}),e}();c&&window.addEventListener("resize",f._update,!1);var d=t(7294);var s=function(){var e,n,t,r=(e=(0,d.useState)((function(){return f.get("window")})),n=e[0],t=e[1],(0,d.useEffect)((function(){function e(e){var n=e.window;null!=n&&t(n)}return f.addEventListener("change",e),t(f.get("window")),function(){f.removeEventListener("change",e)}}),[]),n),i=r.width,o=r.height;return{vw:function(e){return function(e,n){return(n||f.get("window").width)*(e/100)}(e,i)},vh:function(e){return function(e,n){return(n||f.get("window").height)*(e/100)}(e,o)},vmin:function(e){return function(e,n,t){return Math.min((n||f.get("window").width)*(null!=e?e/100:1),(t||f.get("window").height)*(null!=e?e/100:1))}(e,i,o)},vmax:function(e){return function(e,n,t){return Math.max((n||f.get("window").width)*(null!=e?e/100:1),(t||f.get("window").height)*(null!=e?e/100:1))}(e,i,o)},percentage:function(e,n){return function(e,n){return n*e/100}(e,n)}}}},2033:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(259),i=t(7294);function o(e){return i.createElement(i.Fragment)}var c=function(e){void 0===e&&(e={});var n=Object.assign({},(0,r.ah)(),e.components).wrapper;return n?i.createElement(n,e,i.createElement(o,e)):o()},u=t(6469),a=t(9587);function l(e){var n=e.pageContext,t=e.children,o=n,c=(0,u.ZP)(),l=c.vmin,f=c.vw,d=c.vh;return i.createElement(i.Fragment,null,i.createElement(a.Z,{withoutDefaultFooter:!0,TopBarSelected:"DOCS"},i.createElement("div",{style:{overflowY:"auto",backdropFilter:"blur(1.1vmin) brightness(140%)",backgroundColor:"#00000094",position:"fixed",width:"30vmin",top:"6vmin",bottom:"6vmin",height:d(100)-l(6),alignSelf:"flex-end",display:"flex"}},i.createElement("div",{style:{marginTop:"1vmin",marginBottom:"1vmin",color:"white"}},"ID: ",o.id)),i.createElement("div",{style:{display:"flex",flexDirection:"row",minHeight:"100vh"}},i.createElement("div",{style:{width:"30vmin",alignSelf:"flex-end",display:"flex"}}),i.createElement("div",{style:{margin:"5vmin",width:f(100)-l(30),marginTop:"6vmin",position:"relative"}},i.createElement(r.Zo,null,t)))))}function f(e){return i.createElement(l,e,i.createElement(c,e))}}}]);
//# sourceMappingURL=component---src-templates-doc-page-tsx-content-file-path-home-runner-work-rxn-input-rxn-input-website-src-content-docs-v-1-0-0-listeners-touch-listener-mdx-11e4acc0b6e08c0d38fe.js.map