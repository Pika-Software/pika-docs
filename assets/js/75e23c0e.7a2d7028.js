(self.webpackChunkpika_soft=self.webpackChunkpika_soft||[]).push([[34],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6742:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(9756),i=n(7294),a=n(3727),o=n(3919),u=n(412),c=(0,i.createContext)({collectLink:function(){}}),s=n(4996),l=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var f=function(e){var t,n,f,p=e.isNavLink,d=e.to,m=e.href,v=e.activeClassName,g=e.isActive,b=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,y=void 0===h||h,k=(0,r.Z)(e,l),w=(0,s.C)().withBaseUrl,O=(0,i.useContext)(c),C=d||m,x=(0,o.Z)(C),S=null==C?void 0:C.replace("pathname://",""),E=void 0!==S?(n=S,y&&function(e){return e.startsWith("/")}(n)?w(n):n):void 0,N=(0,i.useRef)(!1),j=p?a.OL:a.rU,_=u.Z.canUseIntersectionObserver;(0,i.useEffect)((function(){return!_&&x&&null!=E&&window.docusaurus.prefetch(E),function(){_&&f&&f.disconnect()}}),[E,_,x]);var P=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,D=!E||!x||P;return E&&x&&!P&&!b&&O.collectLink(E),D?i.createElement("a",Object.assign({href:E},C&&!x&&{target:"_blank",rel:"noopener noreferrer"},k)):i.createElement(j,Object.assign({},k,{onMouseEnter:function(){N.current||null==E||(window.docusaurus.preload(E),N.current=!0)},innerRef:function(e){var t,n;_&&e&&x&&(t=e,n=function(){null!=E&&window.docusaurus.prefetch(E)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),n())}))}))).observe(t))},to:E||""},p&&{isActive:g,activeClassName:v}))}},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return o}});var r=n(2263),i=n(3919);function a(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,u=void 0!==o&&o,c=a.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(u)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},1199:function(e,t,n){"use strict";n.d(t,{NY:function(){return f},Un:function(){return l},Dy:function(){return s}});var r=n(7294),i=n(6742),a="functionContainer_3v6U",o="functionContent_j53h",u="realm_3L8p";function c(e){var t=e.realm,n=function(e){return(t&e)===e},i=[u];return n(c.Client)&&i.push("realm-client"),n(c.Server)&&i.push("realm-server"),n(c.Menu)&&i.push("realm-menu"),r.createElement("a",{className:i.join(" "),href:"https://wiki.facepunch.com/gmod/States",title:"Realm"})}function s(e){var t=e.type,n=e.link;return n||(n="https://wiki.facepunch.com/gmod/"+t),r.createElement("a",{href:n},t)}function l(e){var t=e.type,n=e.link;return r.createElement(i.Z,{to:n},t)}function f(e){var t=e.children,n=e.realm;return r.createElement("div",{className:a},r.createElement("div",{className:o},r.createElement(c,{realm:n})," ",t))}c.Client=1,c.Server=2,c.Menu=4,c.defaultProps={realm:c.Server},s.defaultProps={type:"any"}},2943:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=n(1199),u=["components"],c={title:"Setup",sidebar_label:"resource.Setup"},s={unversionedId:"gmsv_fastdl/reference/setup",id:"gmsv_fastdl/reference/setup",isDocsHomePage:!1,title:"Setup",description:"resource.Setup(  settings )",source:"@site/docs/gmsv_fastdl/50-reference/01-setup.mdx",sourceDirName:"gmsv_fastdl/50-reference",slug:"/gmsv_fastdl/reference/setup",permalink:"/gmsv_fastdl/reference/setup",editUrl:"https://github.com/pika-software/pika-docs/edit/main/docs/gmsv_fastdl/50-reference/01-setup.mdx",version:"current",lastUpdatedBy:"Retro",lastUpdatedAt:1633722921,formattedLastUpdatedAt:"10/8/2021",sidebar_label:"resource.Setup",sidebarPosition:1,frontMatter:{title:"Setup",sidebar_label:"resource.Setup"},sidebar:"gmsv_fastdl",previous:{title:"FAQ",permalink:"/gmsv_fastdl/faq"},next:{title:"CreateBundle",permalink:"/gmsv_fastdl/reference/createbundle"}},l=[{value:"Description",id:"description",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]}],f={toc:l};function p(e){var t=e.components,n=(0,i.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.NY,{mdxType:"Function"},"resource.Setup( ",(0,a.kt)(o.Dy,{type:"table",mdxType:"Type"})," settings )"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Sets the values in the internal config of the module"),(0,a.kt)("p",null,"See ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"../guides/configuration"},"Configuration"))),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)(o.Dy,{type:"table",mdxType:"Type"})," settings"),(0,a.kt)("br",null),"\nTable with new settings. See ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"../guides/configuration"},"Configuration"))," ")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Changes driver to ",(0,a.kt)("inlineCode",{parentName:"p"},"custom")," and sets maximum size to 10 mb"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"require('fastdl') -- Don't forget load module\n\nresource.Setup({\n    -- Set driver\n    CurrentDriver = 'custom',\n\n    -- Set maximum size\n    MaximumBundleSize = 1024 * 1024 * 10, -- 10 mb\n    MaximumBundleFileSize = 1024 * 1024 * 10 -- 10 mb\n})\n")))}p.isMDXComponent=!0}}]);