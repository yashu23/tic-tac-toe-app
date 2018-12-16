/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Board({ initialState }) {\n  // Default is 3 X 3 Board\n  const state = initialState\n    ? initialState\n    : [[\"\", \"\", \"\"], [\"\", \"\", \"\"], [\"\", \"\", \"\"]];\n\n  let lastPlayer;\n\n  this.getCurrentState = () => state;\n\n  this.allocate = ({ x, y, symbol }) => {\n    if (this.isComplete()) throw new Error(\"AllSpacesOccupied\");\n\n    if (state[x][y] !== \"\")\n      throw new Error(\"AlreadyOccupied\");\n\n    if (lastPlayer && lastPlayer === symbol) {\n      throw new Error(\"TwoMovesNotAllowed\");\n    } else {\n      lastPlayer = symbol;\n      state[x][y] = symbol;\n    }\n  };\n\n  this.reset = () => {\n    for (let i = 0; i < state.length; i++) {\n      for (let j = 0; j < state[i].length; j++) {\n        state[i][j] = \"\";\n      }\n    }\n  };\n\n  hasWon = ({ symbol }) => {\n    state[0][0] == state[0][1] && state[0][1] == state[0][2];\n    state[1][0] == state[1][1] && state[1][1] == state[1][2];\n    state[2][0] == state[2][1] && state[2][1] == state[2][2];\n\n    state[0][0] == state[1][0] && state[1][0] == state[2][0];\n    state[0][1] == state[1][1] && state[1][1] == state[2][1];\n    state[0][2] == state[1][2] && state[1][2] == state[2][2];\n\n    state[0][0] == state[1][1] && state[1][1] == state[2][2];\n    state[0][2] == state[1][1] && state[1][1] == state[2][0];\n  };\n\n  this.isComplete = () => {\n    for (let i = 0; i < state.length; i++) {\n      for (let j = 0; j < state[i].length; j++) {\n        if (state[i][j] === \"\") return false;\n      }\n    }\n    return true;\n  };\n}\n\nconst state = createGrid();\nlet html = \"<table>\";\nfor (let i = 0; i < state.length; i++) {\n  html += \"<tr>\";\n  for (let j = 0; j < state[i].length; j++) {\n    html += \"<td></td>\";\n  }\n  html += \"</tr>\";\n}\nhtml += \"</table>\";\nconsole.log(\"html\", html);\n\nalert(document.getElementById(\"board\").innerHTML);\n// document.getElementById(\"board\").innerHTML = html;\n\nfunction createGrid() {\n  let board = new Board({});\n  return board.getCurrentState();\n}\n\nconst elements = document.getElementsByTagName(\"td\");\n\n\n\naddEventListener('click', () => {\n  alert('you clicked me');\n});\n\nmodule.exports = Board\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });