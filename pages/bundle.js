!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){function r({initialState:e}){const t=e||[["","",""],["","",""],["","",""]];let r;this.getCurrentState=(()=>t),this.allocate=(({x:e,y:n,symbol:o})=>{if(this.isComplete())throw new Error("AllSpacesOccupied");if(""!==t[e][n])throw new Error("AlreadyOccupied");if(r&&r===o)throw new Error("TwoMovesNotAllowed");r=o,t[e][n]=o}),this.reset=(()=>{for(let e=0;e<t.length;e++)for(let r=0;r<t[e].length;r++)t[e][r]=""}),hasWon=(({symbol:e})=>{t[0][0]==t[0][1]&&(t[0][1],t[0][2]),t[1][0]==t[1][1]&&(t[1][1],t[1][2]),t[2][0]==t[2][1]&&(t[2][1],t[2][2]),t[0][0]==t[1][0]&&(t[1][0],t[2][0]),t[0][1]==t[1][1]&&(t[1][1],t[2][1]),t[0][2]==t[1][2]&&(t[1][2],t[2][2]),t[0][0]==t[1][1]&&(t[1][1],t[2][2]),t[0][2]==t[1][1]&&(t[1][1],t[2][0])}),this.isComplete=(()=>{for(let e=0;e<t.length;e++)for(let r=0;r<t[e].length;r++)if(""===t[e][r])return!1;return!0})}const n=new r({}).getCurrentState();let o="<table>";for(let e=0;e<n.length;e++){o+="<tr>";for(let t=0;t<n[e].length;t++)o+="<td></td>";o+="</tr>"}o+="</table>",console.log("html",o),e.exports=r}]);