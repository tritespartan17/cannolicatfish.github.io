"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[810],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6625:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),a=["components"],l={id:"sluicing-json-format",title:"Sluicing JSON Format"},u=void 0,s={unversionedId:"developer-wiki/sluicing-json-format",id:"developer-wiki/sluicing-json-format",title:"Sluicing JSON Format",description:"A recipe type that is used by the Steel Gold Pan to obtain random items from certain blocks.",source:"@site/docs/developer-wiki/sluicing-json-format.md",sourceDirName:"developer-wiki",slug:"/developer-wiki/sluicing-json-format",permalink:"/docs/next/developer-wiki/sluicing-json-format",editUrl:"https://github.com/CannoliCatfish/cannolicatfish.github.io/blob/main/docs/developer-wiki/sluicing-json-format.md",tags:[],version:"current",frontMatter:{id:"sluicing-json-format",title:"Sluicing JSON Format"},sidebar:"tutorialSidebar",previous:{title:"Rock Generator JSON Format",permalink:"/docs/next/developer-wiki/rock-generator-json-format"},next:{title:"Treetapping JSON Format",permalink:"/docs/next/developer-wiki/treetapping-json-format"}},c={},p=[{value:"General variables:",id:"general-variables",level:3},{value:"output# specific variables:",id:"output-specific-variables",level:3},{value:"Example: Adding Sluicing to Gravel",id:"example-adding-sluicing-to-gravel",level:3}],m={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A recipe type that is used by the Steel Gold Pan to obtain random items from certain blocks. "),(0,o.kt)("h3",{id:"general-variables"},"General variables:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"total"),": Integer. Has to be defined once by the recipe. Set this value equal to the number of outputs used in the recipe."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"input"),': JSON object (item). Defines the block that must be interacted with (by a Steel Gold Pan) to obtain the output items by defining an "item" or "tag" variable in the object. This object currently uses item and item tags (as of v1.2.3), but will be changed in a future major update.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"output#"),': JSON object. The "#" should be replaced in sequential numerical order for proper recipe population, starting at 1.  '),(0,o.kt)("h3",{id:"output-specific-variables"},"output# specific variables:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"item"),": Defines the item that will be outputted."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"weight"),": Int. Set to 0 by default. Represents the likelihood of this item to be chosen as the random output from the sluicing process. Higher weights equal a higher likelihood."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"min"),": Int. Set to 1 by default. Represents the lowest possible count that can be produced if this item is the result."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"max"),": Int. Set to 1 by default. Represents the highest possible count that can be produced if this item is the result."),(0,o.kt)("h3",{id:"example-adding-sluicing-to-gravel"},"Example: Adding Sluicing to Gravel"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "type": "rankine:sluicing",\n  "total": 4,\n  "input": {\n    "item": "minecraft:gravel"\n  },\n  "output1": {\n    "item": "minecraft:gold_nugget",\n    "weight": 1,\n    "min": 2,\n    "max": 4\n  },\n  "output2": {\n    "item": "minecraft:iron_nugget",\n    "weight": 3,\n    "min": 2,\n    "max": 4\n  },\n  "output3": {\n    "item": "minecraft:flint",\n    "weight": 8,\n    "min": 1,\n    "max": 2\n  },\n  "output4": {\n    "item": "minecraft:sand",\n    "weight": 10\n  }\n}\n')),(0,o.kt)("p",null,"In this recipe example, sand would be the most likely resulting output, while gold nuggets would be the least."))}d.isMDXComponent=!0}}]);