!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=4)}([function(t,e,r){var n=r(9);"string"==typeof n&&(n=[[t.i,n,""]]);var o={insert:"head",singleton:!1};r(3)(n,o);n.locals&&(t.exports=n.locals)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={id:function(t){return document.getElementById(t)},ce:function(t){return document.createElement(t)}}},function(t,e,r){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=function(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var o=(a=n,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),i=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot).concat(t," */")}));return[r].concat(i).concat([o]).join("\n")}var a,s,l;return[r].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(r,"}"):r})).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(n[i]=!0)}for(var a=0;a<t.length;a++){var s=t[a];null!=s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="(".concat(s[2],") and (").concat(r,")")),e.push(s))}},e}},function(t,e,r){"use strict";var n,o={},i=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var t={};return function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}t[e]=r}return t[e]}}();function s(t,e){for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(s):r.push(n[a]={id:a,parts:[s]})}return r}function l(t,e){for(var r=0;r<t.length;r++){var n=t[r],i=o[n.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(b(n.parts[a],e))}else{for(var s=[];a<n.parts.length;a++)s.push(b(n.parts[a],e));o[n.id]={id:n.id,refs:1,parts:s}}}}function d(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var n=r.nc;n&&(t.attributes.nonce=n)}if(Object.keys(t.attributes).forEach((function(r){e.setAttribute(r,t.attributes[r])})),"function"==typeof t.insert)t.insert(e);else{var o=a(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var c,u=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function f(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=u(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function h(t,e,r){var n=r.css,o=r.media,i=r.sourceMap;if(o&&t.setAttribute("media",o),i&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var p=null,v=0;function b(t,e){var r,n,o;if(e.singleton){var i=v++;r=p||(p=d(e)),n=f.bind(null,r,i,!1),o=f.bind(null,r,i,!0)}else r=d(e),n=h.bind(null,r,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i());var r=s(t,e);return l(r,e),function(t){for(var n=[],i=0;i<r.length;i++){var a=r[i],d=o[a.id];d&&(d.refs--,n.push(d))}t&&l(s(t,e),e);for(var c=0;c<n.length;c++){var u=n[c];if(0===u.refs){for(var f=0;f<u.parts.length;f++)u.parts[f]();delete o[u.id]}}}}},function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),r(5),r(7);var o=new(n(r(8)).default)("board");o.spawnNewBalls(),o.render()},function(t,e,r){var n=r(6);"string"==typeof n&&(n=[[t.i,n,""]]);var o={insert:"head",singleton:!1};r(3)(n,o);n.locals&&(t.exports=n.locals)},function(t,e,r){(t.exports=r(2)(!1)).push([t.i,"body {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tbackground: #cccccc;\r\n}\r\n\r\n* {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n#game {\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n\talign-items: center;\r\n\twidth: 650px;\r\n\theight: 455px;\r\n\tmargin: 10px;\r\n\tbackground: yellow;\r\n\tpadding-right: 2px;\r\n}\r\n\r\n#menu {\r\n\tflex: 1;\r\n\theight: 100%;\r\n}\r\n",""])},function(t,e,r){"use strict";r.r(e),e.default=r.p+"index.html"},function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),r(0);var o=n(r(1)),i=n(r(10)),a=n(r(11)),s=n(r(12)),l=n(r(13)),d=function(){function t(t){this.boardID=t,this.size=9,this.vBoard=[],this.nextDisplay=new s.default("next-display"),this.pointCounter=new l.default("score-display"),this.selectedField=null,this.path=null;var e=o.default.id(t);if(!e)throw new Error("Invalid DOM element ID");this.DOM=e;for(var r=0;r<this.size;r++){this.vBoard[r]=[];for(var n=0;n<this.size;n++)this.vBoard[r][n]="empty"}console.table(this.vBoard),this.nextDisplay.colors=i.default.randomTab,this.fieldClickHandler=this.fieldClickHandler.bind(this)}return Object.defineProperty(t.prototype,"getRandomRow",{get:function(){return Math.floor(Math.random()*this.size)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"getRrandomFiled",{get:function(){var t,e=this;return function(t){t[t.w=e.getRandomRow]="w",t[t.h=e.getRandomRow]="h"}(t||(t={})),t},enumerable:!0,configurable:!0}),t.prototype.countFields=function(t){return this.vBoard.reduce((function(e,r){return e+r.filter((function(e){return e==t})).length}),0)},t.prototype.spawnNewBalls=function(){console.log("adding new balls"),console.log(this.nextDisplay.colors);for(var t=0,e=this.nextDisplay.colors;t<e.length;t++){var r=e[t];if(1==this.countFields("empty")){window.alert("game over");break}for(var n=null;null===n;){var o=this.getRrandomFiled;"empty"==this.vBoard[o.w][o.h]&&(n=o)}this.vBoard[n.w][n.h]=r}this.nextDisplay.renderWithColors(i.default.randomTab),this.render()},t.prototype.fieldClickHandler=function(t){var e=t.currentTarget,r=""+e.dataset.row,n=""+e.dataset.col;if("empty"!=this.vBoard[parseInt(r,10)][parseInt(n,10)])console.log(r),console.log(n),this.selectedField==r+n?this.selectedField=null:this.selectedField=r+n,this.render();else{console.log("moving to empty field");var o=parseInt(r,10),i=parseInt(n,10);if(null==this.selectedField||null==this.selectedField[0]||null==this.selectedField[1])throw new Error("invalid values");var s=a.default(JSON.parse(JSON.stringify(this.vBoard)),{x:parseInt(this.selectedField[0],10),y:parseInt(this.selectedField[1],10)},{x:o,y:i});if(null==s)return;this.path=s.path,this.moveTo(o,i)}},t.prototype.moveTo=function(t,e){if(console.log(t,e),"empty"!=this.vBoard[t][e])throw new Error("Attempted to move to non-empty field");if(null==this.selectedField)throw new Error("Attempted to move with no field selected");var r=this.selectedField[0],n=this.selectedField[1],o=this.vBoard[parseInt(r,10)][parseInt(n,10)];if("empty"==o)throw new Error("Selecetd field is empty");this.vBoard[parseInt(r,10)][parseInt(n,10)]="empty",this.vBoard[t][e]=o,this.selectedField=null;var i=this.checkAfterMove(t,e);console.log("got points:",i),i||this.spawnNewBalls(),this.render()},t.prototype.clearBalls=function(t){console.log("removing with params:",t);var e=1,r=t.i,n=t.j,o=t.left,i=t.right,a=t.top,s=t.bot,l=t.rtop,d=t.rbot,c=t.ltop,u=t.lbot,f=this.vBoard;f[r][n]="empty";for(var h=r-o;h<=r+i;h++)h!=r&&(f[h][n]="empty",e++);for(h=n-a;h<=n+s;h++)h!=n&&(f[r][h]="empty",e++);for(h=1;h<=d;h++)f[r+h][n+h]="empty",e++;for(h=1;h<=c;h++)f[r-h][n-h]="empty",e++;for(h=1;h<=l;h++)f[r+h][n-h]="empty",e++;for(h=1;h<=u;h++)f[r-h][n+h]="empty",e++;this.render(),this.pointCounter.addPoints(e)},t.prototype.checkAfterMove=function(t,e){var r=this.vBoard[t][e];console.log("Placed "+r+" on ["+t+", "+e+"]");for(var n=0,o=t-1;o>=0&&this.vBoard[o][e]==r;o--)n++;var i=0;for(o=t+1;o<this.size&&this.vBoard[o][e]==r;o++)i++;var a=0;for(o=e-1;o>=0&&this.vBoard[t][o]==r;o--)a++;var s=0;for(o=e+1;o<this.size&&this.vBoard[t][o]==r;o++)s++;var l=0;for(o=1;;o++){var d=e-o;if((h=t-o)<0||d<0||h>=this.size||d>=this.size)break;if(this.vBoard[h][d]!=r)break;l++}var c=0;for(o=1;;o++){d=e+o;if((h=t-o)<0||d<0||h>=this.size||d>=this.size)break;if(this.vBoard[h][d]!=r)break;c++}var u=0;for(o=1;;o++){d=e+o;if((h=t+o)<0||d<0||h>=this.size||d>=this.size)break;if(this.vBoard[h][d]!=r)break;u++}var f=0;for(o=1;;o++){var h;d=e-o;if((h=t+o)<0||d<0||h>=this.size||d>=this.size)break;if(this.vBoard[h][d]!=r)break;f++}n+i<4&&(n=0,i=0),a+s<4&&(a=0,s=0),l+u<4&&(l=0,u=0),f+c<4&&(f=0,c=0);var p=n+i+a+s+f+l+u+c;return p>0&&this.clearBalls({i:t,j:e,left:n,right:i,top:a,bot:s,ltop:l,lbot:c,rtop:f,rbot:u}),p>0},t.prototype.render=function(){var t=this;console.log("rendring"),console.table(this.vBoard),this.DOM.innerHTML="",this.vBoard.forEach((function(e,r){e.forEach((function(e,n){var a=o.default.ce("div");if(a.classList.add("board-field"),a.dataset.row=r.toString(),a.dataset.col=n.toString(),t.DOM.appendChild(a),"empty"==e&&null==t.selectedField||(a.classList.add("board-field-active"),a.onclick=t.fieldClickHandler),i.default.tab.includes(e)){var s=o.default.ce("div");s.classList.add("board-field-ball"),t.selectedField==""+r+n&&s.classList.add("board-field-ball-selected"),s.style.background=e,a.appendChild(s)}}))}))},t}();e.default=d},function(t,e,r){(t.exports=r(2)(!1)).push([t.i,"* {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n#board {\r\n\twidth: 450px;\r\n\theight: 450px;\r\n\tbackground: white;\r\n\tdisplay: flex;\r\n\tflex-flow: column wrap;\r\n\tjustify-content: space-evenly;\r\n\talign-items: space-evenly;\r\n\tbox-sizing: content-box;\r\n\tborder: 1px solid black;\r\n}\r\n\r\n.board-field {\r\n\tborder: 1px solid black;\r\n\twidth: 50px;\r\n\theight: 50px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n.board-field-active {\r\n\tcursor: pointer;\r\n}\r\n\r\n.board-field-ball {\r\n\twidth: 50%;\r\n\theight: 50%;\r\n\tborder-radius: 1000%;\r\n\tborder: 1px solid black;\r\n}\r\n\r\n.board-field-ball-selected {\r\n\twidth: 70%;\r\n\theight: 70%;\r\n}\r\n\r\n#next-display {\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n}\r\n\r\n.nextDisplay-ball {\r\n\twidth: 50px;\r\n\theight: 50px;\r\n\tborder-radius: 1000%;\r\n\tborder: 1px solid black;\r\n}\r\n",""])},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={tab:["red","green","blue","cyan","magenta","yellow","black"],get random(){return this.tab[Math.floor(7*Math.random())]},get randomTab(){return[this.random,this.random,this.random]}}},function(t,e,r){"use strict";var n=this&&this.__spreadArrays||function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),o=0;for(e=0;e<r;e++)for(var i=arguments[e],a=0,s=i.length;a<s;a++,o++)n[o]=i[a];return n};Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,r){if(console.log("searching for path"),console.log(arguments),e.x==r.x&&e.y==r.y)throw new Error("bruh");t[e.x][e.y]="START",t[r.x][r.y]="END";for(var o=[{coord:[e.x,e.y],dist:0,path:[[e.x,e.y]]}],i=[[-1,0],[0,1],[1,0],[0,-1]],a=t.length,s=function(t,e){return t>=0&&t<a&&e>=0&&e<a};o.length;){var l=o.shift();if(console.log(l),null==l)throw new Error("this error will never throw, typescript is retarded");var d=l.coord[0],c=l.coord[1],u=l.dist,f=l.path;if(d==r.x&&c==r.y){var h={dist:u,path:f};return console.log("found:",h),h}for(var p=0,v=i;p<v.length;p++){var b=v[p],y=d+b[0],g=c+b[1];!s(y,g)||"empty"!=t[y][g]&&"END"!=t[y][g]||(o.push({coord:[y,g],dist:u+1,path:n(f,[[y,g]])}),t[y][g]="visited")}}return console.log("not found"),null}},function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),r(0);var o=n(r(1)),i=function(){function t(t){this.displayID=t,this.colors=[];var e=o.default.id(t);if(!e)throw new Error("Invalid DOM element ID");this.DOM=e}return t.prototype.renderWithColors=function(t){this.colors=t,this.render()},t.prototype.render=function(){this.DOM.innerHTML="";for(var t=0,e=this.colors;t<e.length;t++){var r=e[t],n=o.default.ce("div");n.classList.add("nextDisplay-ball"),n.style.background=r,this.DOM.appendChild(n)}},t}();e.default=i},function(t,e,r){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),r(0);var o=n(r(1)),i=function(){function t(t){this.points=0;var e=o.default.id(t);if(!e)throw new Error("Invalid DOM element ID");this.DOM=e,this.render()}return t.prototype.addPoints=function(t){this.points+=t,this.render()},t.prototype.render=function(){this.DOM.innerHTML=this.points.toString()},t}();e.default=i}]);