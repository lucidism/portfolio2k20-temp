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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Rectangle.js":
/*!*****************************!*\
  !*** ./src/js/Rectangle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Rectangle = /*#__PURE__*/function () {\n  function Rectangle(i, j, cols, rows, p) {\n    _classCallCheck(this, Rectangle);\n\n    this.i = i;\n    this.j = j;\n    this.cols = cols;\n    this.rows = rows;\n    this.p = p;\n    this.whiteOpacity = 0;\n    this.isMouseHit = false;\n    this.calcDimensions();\n  }\n\n  _createClass(Rectangle, [{\n    key: \"calcDimensions\",\n    value: function calcDimensions() {\n      this.width = width / this.cols;\n      this.height = height / this.rows;\n      this.pos = createVector(this.i * this.width, this.j * this.height);\n      this.diag = Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2));\n    }\n  }, {\n    key: \"display\",\n    value: function display() {\n      // animate\n      var newMouseHit = this.checkMouseCollision();\n\n      if (newMouseHit !== this.isMouseHit) {\n        // enable trail out\n        if (newMouseHit) {\n          anime({\n            targets: this,\n            whiteOpacity: [1, 0],\n            easing: 'linear',\n            duration: 1000\n          });\n        }\n      }\n\n      this.isMouseHit = newMouseHit;\n      var colorFan = 20;\n      colorMode(HSB, 100);\n      var c = color(millis() / 200 % 100, 80, 80, 0);\n      colorMode(RGB, 255);\n      var blackFan = map(sin(0.1 * (this.i + this.j * map(cos(millis() / 1000), -1, 1, 0.2, 2)) - millis() / 250), 0, 1, 0, 60);\n      fill(c, 0); // fill(0, blackFan);\n\n      noStroke();\n      rect(this.pos.x, this.pos.y, this.width, this.height);\n    }\n  }, {\n    key: \"checkMouseCollision\",\n    value: function checkMouseCollision() {\n      var mousePos = mouse.getPos();\n      return mousePos.x > this.pos.x && mousePos.x < this.pos.x + this.width && mousePos.y > this.pos.y && mousePos.y < this.pos.y + this.height;\n    }\n  }, {\n    key: \"checkMouseProximity\",\n    value: function checkMouseProximity(coeff) {\n      return Math.max(0, map(this.pos.copy().add(createVector(this.width / 2, this.height / 2)).dist(mouse.getSmoothPos()), 0, this.diag * coeff, 1, 0));\n    }\n  }, {\n    key: \"resize\",\n    value: function resize(i, j, cols, rows) {\n      this.i = i;\n      this.j = j;\n      this.cols = cols;\n      this.rows = rows;\n      this.calcDimensions();\n    }\n  }]);\n\n  return Rectangle;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rectangle);\n\n//# sourceURL=webpack:///./src/js/Rectangle.js?");

/***/ }),

/***/ "./src/js/Sketch.js":
/*!**************************!*\
  !*** ./src/js/Sketch.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rectangle */ \"./src/js/Rectangle.js\");\n/* harmony import */ var _tweens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tweens */ \"./src/js/tweens.js\");\n\n\n\nvar sketch = function sketch(p) {\n  var bgShader;\n  var tileSize, cols, rows;\n  var rects = [];\n\n  p.preload = function () {\n    bgShader = p.loadShader('assets/shader/bg.vert', 'assets/shader/bg.frag');\n  };\n\n  p.setup = function () {\n    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);\n    tileSize = 30;\n    cols = Math.round(p.width / tileSize);\n    rows = Math.round(p.height / tileSize);\n\n    for (var i = 0; i < cols; i++) {\n      for (var j = 0; j < rows; j++) {// rects[j+(i*rows)] = new Rectangle(i, j, cols, rows, p);\n      }\n    }\n  };\n\n  p.draw = function () {\n    p.background(0); // draw background layer\n\n    bgShader.setUniform(\"u_resolution\", [p.width, p.height]);\n    bgShader.setUniform(\"u_time\", p.millis() / 1000.0);\n    bgShader.setUniform(\"u_fadein\", _tweens__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fadeIn);\n    p.shader(bgShader);\n    p.quad(-1, -1, 1, -1, 1, 1, -1, 1);\n  };\n\n  p.windowResized = function () {\n    p.resizeCanvas(p.windowWidth, p.windowHeight);\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sketch);\n\n//# sourceURL=webpack:///./src/js/Sketch.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sketch */ \"./src/js/Sketch.js\");\n/* harmony import */ var _tweens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tweens */ \"./src/js/tweens.js\");\n// const p5 = require(\"p5\");\n\n\nwindow.addEventListener(\"load\", function () {\n  anime({\n    targets: _tweens__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    fadeIn: 1,\n    duration: 2000,\n    easing: 'linear',\n    delay: 1000\n  });\n  new p5(_Sketch__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n});\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/tweens.js":
/*!**************************!*\
  !*** ./src/js/tweens.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// global tween values spread to a few places in the app\nvar tweens = {\n  fadeIn: 0\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (tweens);\n\n//# sourceURL=webpack:///./src/js/tweens.js?");

/***/ })

/******/ });