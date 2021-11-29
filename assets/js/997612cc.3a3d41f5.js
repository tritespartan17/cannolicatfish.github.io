"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[900],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(n),f=o,m=b["".concat(c,".").concat(f)]||b[f]||s[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},69:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return b}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:3},c="Beehive Oven JSON Format",p={unversionedId:"developer-wiki/beehive-oven-json-format",id:"developer-wiki/beehive-oven-json-format",isDocsHomePage:!1,title:"Beehive Oven JSON Format",description:"A simple recipe type that allows use of the beehive oven to turn one block into another block. Therefore, a prerequisite for using this recipe type is that both the input and output are recognized as blocks.",source:"@site/docs/developer-wiki/beehive-oven-json-format.md",sourceDirName:"developer-wiki",slug:"/developer-wiki/beehive-oven-json-format",permalink:"/docs/next/developer-wiki/beehive-oven-json-format",editUrl:"https://github.com/CannoliCatfish/cannolicatfish.github.io/docs/developer-wiki/beehive-oven-json-format.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Alloying JSON Format",permalink:"/docs/next/developer-wiki/alloying-json-format"},next:{title:"Crucible JSON Format",permalink:"/docs/next/developer-wiki/crucible-json-format"}},u=[{value:"General variables:",id:"general-variables",children:[],level:3},{value:"Example: Making a Bone Char Block from a Bone Block",id:"example-making-a-bone-char-block-from-a-bone-block",children:[],level:3}],s={toc:u};function b(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"beehive-oven-json-format"},"Beehive Oven JSON Format"),(0,i.kt)("p",null,"A simple recipe type that allows use of the beehive oven to turn one block into another block. Therefore, a prerequisite for using this recipe type is that both the input and output are recognized as blocks."),(0,i.kt)("h3",{id:"general-variables"},"General variables:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"input"),': JSON object (item). Defines the block to be inputted (placed in the beehive oven) by defining an "item" or "tag" variable in the object. This object currently uses item and item tags (as of v1.2.3), but will be changed in a future major update.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"result"),': JSON object (block). Defines the block to be outputted by defining a "block" variable in the object.'),(0,i.kt)("h3",{id:"example-making-a-bone-char-block-from-a-bone-block"},"Example: Making a Bone Char Block from a Bone Block"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "type": "rankine:beehive_oven",\n  "input": {\n    "item": "minecraft:bone_block"\n  },\n  "result": {\n    "block": "rankine:bone_char_block"\n  }\n}\n')))}b.isMDXComponent=!0}}]);