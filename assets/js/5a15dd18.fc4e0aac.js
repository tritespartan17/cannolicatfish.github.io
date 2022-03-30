"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7540],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?i.createElement(f,a(a({ref:t},u),{},{components:n})):i.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8363:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var i=n(3117),r=n(102),o=(n(7294),n(3905)),a=["components"],l={id:"air-distillation-json-format",title:"Air Distillation JSON Format"},s=void 0,c={unversionedId:"developer-wiki/air-distillation-json-format",id:"developer-wiki/air-distillation-json-format",title:"Air Distillation JSON Format",description:"The Air Distillation recipe type is used in the Air Distillation Tower multiblock in order to determine which gas blocks should be generated based on biome/dimension.",source:"@site/docs/developer-wiki/air-distillation-json-format.md",sourceDirName:"developer-wiki",slug:"/developer-wiki/air-distillation-json-format",permalink:"/docs/next/developer-wiki/air-distillation-json-format",editUrl:"https://github.com/CannoliCatfish/cannolicatfish.github.io/blob/main/docs/developer-wiki/air-distillation-json-format.md",tags:[],version:"current",frontMatter:{id:"air-distillation-json-format",title:"Air Distillation JSON Format"},sidebar:"tutorialSidebar",previous:{title:"Elements",permalink:"/docs/next/wiki/elements"},next:{title:"Alloy Crafting JSON Format",permalink:"/docs/next/developer-wiki/alloy-crafting-json-format"}},u={},p=[{value:"General variables:",id:"general-variables",level:3},{value:"output# specific variables:",id:"output-specific-variables",level:3},{value:"Example 1: Air Distillation in The End",id:"example-1-air-distillation-in-the-end",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Air Distillation recipe type is used in the Air Distillation Tower multiblock in order to determine which gas blocks should be generated based on biome/dimension. "),(0,o.kt)("h3",{id:"general-variables"},"General variables:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"dimensions"),": JSON array (string). Each entry in the array is used to determine which dimension this recipe works in. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"biomes"),": JSON array (string). Each entry in the array is used to determine which biomes this recipe works in. The format is the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'For single biomes, use the string "B#" before the resource location. (ex. "B#minecraft:snowy_tundra").'),(0,o.kt)("li",{parentName:"ul"},'For biome categories, use the string "C#" before the string used for the category. (ex. "C#taiga").')),(0,o.kt)("p",null,"In most recipes, either ",(0,o.kt)("strong",{parentName:"p"},"dimensions")," or ",(0,o.kt)("strong",{parentName:"p"},"biomes")," should have a value. Not having either would make the recipe universal, meaning that it would overwrite any specific dimension/biome recipe."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"output#"),'\nJSON object. The "#" should be replaced in sequential numerical order for proper recipe population, starting at 1 and ending at 10. These numbers correspond to the level of the Air Distillation Tower the block will end up spawning.'),(0,o.kt)("h3",{id:"output-specific-variables"},"output# specific variables:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"item"),": Defines the item that will be outputted. Should be a block item, as it will be placed in-world at the respective level based on random chance."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"chance"),": Float. Set to 0 by default. Represents the chance for the block to spawn in-world next to the Air Distillation Tower at any given tick."),(0,o.kt)("h3",{id:"example-1-air-distillation-in-the-end"},"Example 1: Air Distillation in The End"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "type": "rankine:air_distillation",\n  "dimensions": ["minecraft:the_end"],\n  "output3": {\n    "item": "rankine:hydrogen_gas_block",\n    "chance": 0.5\n  },\n  "output4": {\n    "item": "rankine:helium_gas_block",\n    "chance": 0.1\n  },\n  "output5": {\n    "item": "rankine:fluorine_gas_block",\n    "chance": 0.05\n  },\n  "output6": {\n    "item": "rankine:chlorine_gas_block",\n    "chance": 0.05\n  },\n  "output7": {\n    "item": "rankine:neon_gas_block",\n    "chance": 0.05\n  },\n  "output8": {\n    "item": "rankine:argon_gas_block",\n    "chance": 0.01\n  },\n  "output9": {\n    "item": "rankine:krypton_gas_block",\n    "chance": 0.007\n  },\n  "output10": {\n    "item": "rankine:oxygen_gas_block",\n    "chance": 0.005\n  }\n}\n')))}m.isMDXComponent=!0}}]);