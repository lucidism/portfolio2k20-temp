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

/***/ "./node_modules/tiny-emitter/index.js":
/*!********************************************!*\
  !*** ./node_modules/tiny-emitter/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function E () {\n  // Keep this empty so it's easier to inherit from\n  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)\n}\n\nE.prototype = {\n  on: function (name, callback, ctx) {\n    var e = this.e || (this.e = {});\n\n    (e[name] || (e[name] = [])).push({\n      fn: callback,\n      ctx: ctx\n    });\n\n    return this;\n  },\n\n  once: function (name, callback, ctx) {\n    var self = this;\n    function listener () {\n      self.off(name, listener);\n      callback.apply(ctx, arguments);\n    };\n\n    listener._ = callback\n    return this.on(name, listener, ctx);\n  },\n\n  emit: function (name) {\n    var data = [].slice.call(arguments, 1);\n    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();\n    var i = 0;\n    var len = evtArr.length;\n\n    for (i; i < len; i++) {\n      evtArr[i].fn.apply(evtArr[i].ctx, data);\n    }\n\n    return this;\n  },\n\n  off: function (name, callback) {\n    var e = this.e || (this.e = {});\n    var evts = e[name];\n    var liveEvents = [];\n\n    if (evts && callback) {\n      for (var i = 0, len = evts.length; i < len; i++) {\n        if (evts[i].fn !== callback && evts[i].fn._ !== callback)\n          liveEvents.push(evts[i]);\n      }\n    }\n\n    // Remove event from queue to prevent memory leak\n    // Suggested by https://github.com/lazd\n    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910\n\n    (liveEvents.length)\n      ? e[name] = liveEvents\n      : delete e[name];\n\n    return this;\n  }\n};\n\nmodule.exports = E;\nmodule.exports.TinyEmitter = E;\n\n\n//# sourceURL=webpack:///./node_modules/tiny-emitter/index.js?");

/***/ }),

/***/ "./node_modules/tiny-emitter/instance.js":
/*!***********************************************!*\
  !*** ./node_modules/tiny-emitter/instance.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var E = __webpack_require__(/*! ./index.js */ \"./node_modules/tiny-emitter/index.js\");\nmodule.exports = new E();\n\n\n//# sourceURL=webpack:///./node_modules/tiny-emitter/instance.js?");

/***/ }),

/***/ "./src/js/AutoTitle.js":
/*!*****************************!*\
  !*** ./src/js/AutoTitle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar AutoTitle = /*#__PURE__*/function () {\n  function AutoTitle() {\n    _classCallCheck(this, AutoTitle);\n\n    this.i = 0;\n    this.len = 10;\n    this.startTime = new Date();\n    this.update();\n  }\n\n  _createClass(AutoTitle, [{\n    key: \"update\",\n    value: function update() {\n      this.i = Math.floor((new Date() - this.startTime) / 1000 * (1000 / 190));\n      var s = \"\";\n\n      for (var i = 0; i < this.len; i++) {\n        s += Math.abs(this.i - i) % 4 !== 0 ? Math.abs(this.i - i) % 4 === 2 ? \"\\u2593\" : \"\\u2592\" : \"\\u2591\";\n      }\n\n      document.title = s;\n      requestAnimationFrame(this.update.bind(this));\n    }\n  }]);\n\n  return AutoTitle;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AutoTitle);\n\n//# sourceURL=webpack:///./src/js/AutoTitle.js?");

/***/ }),

/***/ "./src/js/Content.js":
/*!***************************!*\
  !*** ./src/js/Content.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tweens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tweens */ \"./src/js/tweens.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Button */ \"./src/js/components/Button.js\");\n/* harmony import */ var tiny_emitter_instance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tiny-emitter/instance */ \"./node_modules/tiny-emitter/instance.js\");\n/* harmony import */ var tiny_emitter_instance__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tiny_emitter_instance__WEBPACK_IMPORTED_MODULE_2__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar Content = /*#__PURE__*/function () {\n  function Content() {\n    _classCallCheck(this, Content);\n\n    // link to DOM nodes\n    this.$el = document.querySelector('div.content');\n    this.textContent = this.$el.querySelector('.text');\n    this.title = this.textContent.querySelector('h3');\n    this.paragraph = this.textContent.querySelector(window.innerWidth <= 640 ? 'p.main-desc.mobile' : 'p.main-desc.desktop');\n    this.subParagraph = this.textContent.querySelector('p:last-of-type');\n    this.separator = this.textContent.querySelector('span.separator');\n    this.button = new _components_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.$el.querySelector('a.btn'));\n    this.splitEl(this.paragraph); // create timeline\n\n    this.tl = anime.timeline({\n      autoplay: false,\n      loop: false\n    }); // build timeline\n\n    this.buildTL();\n  }\n\n  _createClass(Content, [{\n    key: \"buildTL\",\n    value: function buildTL() {\n      var _context;\n\n      // show main title\n      this.tl.add({\n        targets: this.title,\n        duration: 800,\n        opacity: [0, 1],\n        easing: 'easeInOutQuad'\n      }, 0) // reposition entire container\n      .add({\n        targets: this.textContent,\n        duration: 1300,\n        translateY: ['50%', '0%'],\n        easing: 'easeInOutCubic'\n      }) // main paragraph\n      .add({\n        targets: [this.paragraph.querySelectorAll('span'), this.subParagraph],\n        duration: 800,\n        opacity: [0, 1],\n        translateY: [20, 0],\n        easing: 'easeOutQuad',\n        delay: anime.stagger(100)\n      }, '-=600') // separator\n      .add({\n        targets: this.separator,\n        duration: 700,\n        scaleX: [0, 1],\n        easing: 'easeOutCirc'\n      }, '-=500') // button\n      .add({\n        begin: (_context = this.button).display.bind(_context),\n        duration: 10\n      }, '-=500') // bgShader visibility\n      .add({\n        targets: _tweens__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        fadeIn: 1,\n        duration: 2000,\n        easing: 'linear',\n        complete: function complete() {\n          return tiny_emitter_instance__WEBPACK_IMPORTED_MODULE_2___default.a.emit(\"play-footer\");\n        }\n      }, 2000);\n    }\n  }, {\n    key: \"splitEl\",\n    value: function splitEl(el) {\n      var content = el.innerHTML;\n      var splitContent = content.split(\"<br>\");\n      el.innerHTML = \"\";\n      splitContent.forEach(function (line) {\n        var n = document.createElement(\"span\");\n        n.innerHTML = line;\n        el.appendChild(n);\n        el.innerHTML += \"<br>\";\n      });\n    }\n  }, {\n    key: \"display\",\n    value: function display() {\n      this.tl.play();\n    }\n  }]);\n\n  return Content;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Content);\n\n//# sourceURL=webpack:///./src/js/Content.js?");

/***/ }),

/***/ "./src/js/Footer.js":
/*!**************************!*\
  !*** ./src/js/Footer.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Footer = /*#__PURE__*/function () {\n  function Footer() {\n    _classCallCheck(this, Footer);\n\n    this.$el = document.querySelector('footer');\n    this.h1 = this.$el.querySelector('h1');\n    this.borders = this.$el.querySelectorAll('.borders > span');\n    this.social = this.$el.querySelectorAll('ul.social li');\n    this.buildTL();\n  }\n\n  _createClass(Footer, [{\n    key: \"buildTL\",\n    value: function buildTL() {\n      this.tl = anime.timeline({\n        autoplay: false,\n        loop: false\n      });\n      this.tl.add({\n        targets: this.h1.querySelectorAll('.mask > .content'),\n        translateY: ['110%', '0%'],\n        duration: 700,\n        easing: 'easeOutCirc',\n        delay: anime.stagger(100)\n      }).add({\n        targets: this.social,\n        opacity: [0, 1],\n        duration: 800,\n        easing: 'linear',\n        delay: anime.stagger(200)\n      }, '-=200');\n    }\n  }, {\n    key: \"display\",\n    value: function display() {\n      this.tl.play();\n    }\n  }]);\n\n  return Footer;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n//# sourceURL=webpack:///./src/js/Footer.js?");

/***/ }),

/***/ "./src/js/Sketch.js":
/*!**************************!*\
  !*** ./src/js/Sketch.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Rectangle */ \"./src/js/components/Rectangle.js\");\n/* harmony import */ var _tweens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tweens */ \"./src/js/tweens.js\");\n\n\n\nvar sketch = function sketch(p) {\n  var bgShader;\n  var tileSize, cols, rows;\n  var rects = [];\n\n  p.preload = function () {\n    bgShader = p.loadShader('assets/shader/bg.vert', 'assets/shader/bg.frag');\n  };\n\n  p.setup = function () {\n    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);\n    tileSize = 30;\n    cols = Math.round(p.width / tileSize);\n    rows = Math.round(p.height / tileSize);\n\n    for (var i = 0; i < cols; i++) {\n      for (var j = 0; j < rows; j++) {// rects[j+(i*rows)] = new Rectangle(i, j, cols, rows, p);\n      }\n    }\n  };\n\n  p.draw = function () {\n    p.background(0); // draw background layer\n\n    bgShader.setUniform(\"u_resolution\", [p.width, p.height]);\n    bgShader.setUniform(\"u_time\", p.millis() / 1000.0);\n    bgShader.setUniform(\"u_fadein\", _tweens__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fadeIn);\n    p.shader(bgShader);\n    p.quad(-1, -1, 1, -1, 1, 1, -1, 1);\n  };\n\n  p.windowResized = function () {\n    p.resizeCanvas(p.windowWidth, p.windowHeight);\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sketch);\n\n//# sourceURL=webpack:///./src/js/Sketch.js?");

/***/ }),

/***/ "./src/js/components/Button.js":
/*!*************************************!*\
  !*** ./src/js/components/Button.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Button = /*#__PURE__*/function () {\n  function Button(el) {\n    _classCallCheck(this, Button);\n\n    this.el = el;\n    this.border = null;\n    this.backdrop = null;\n    this.init();\n  }\n\n  _createClass(Button, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      this.el.classList.add(\"hidden\"); // set text in subspan\n\n      var subspan = document.createElement('span');\n      subspan.classList.add(\"subtext\");\n      subspan.innerHTML = this.el.innerHTML;\n      this.el.innerHTML = '';\n      this.el.appendChild(subspan); // add backdrop\n\n      this.backdrop = document.createElement('span');\n      this.backdrop.classList.add('backdrop');\n      this.el.appendChild(this.backdrop); // create timeline\n\n      this.tl = anime.timeline({\n        targets: this.backdrop,\n        autoplay: false,\n        loop: false,\n        duration: 600,\n        easing: 'easeInOutCirc'\n      });\n      this.tl.add({\n        scaleX: [0, 1],\n        complete: function complete() {\n          return _this.el.classList.remove(\"hidden\");\n        }\n      }).add({\n        scaleY: [1, 0]\n      });\n    }\n  }, {\n    key: \"display\",\n    value: function display() {\n      this.tl.play();\n    }\n  }]);\n\n  return Button;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\n\n//# sourceURL=webpack:///./src/js/components/Button.js?");

/***/ }),

/***/ "./src/js/components/Rectangle.js":
/*!****************************************!*\
  !*** ./src/js/components/Rectangle.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Rectangle = /*#__PURE__*/function () {\n  function Rectangle(i, j, cols, rows, p) {\n    _classCallCheck(this, Rectangle);\n\n    this.i = i;\n    this.j = j;\n    this.cols = cols;\n    this.rows = rows;\n    this.p = p;\n    this.whiteOpacity = 0;\n    this.isMouseHit = false;\n    this.calcDimensions();\n  }\n\n  _createClass(Rectangle, [{\n    key: \"calcDimensions\",\n    value: function calcDimensions() {\n      this.width = width / this.cols;\n      this.height = height / this.rows;\n      this.pos = createVector(this.i * this.width, this.j * this.height);\n      this.diag = Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2));\n    }\n  }, {\n    key: \"display\",\n    value: function display() {\n      // animate\n      var newMouseHit = this.checkMouseCollision();\n\n      if (newMouseHit !== this.isMouseHit) {\n        // enable trail out\n        if (newMouseHit) {\n          anime({\n            targets: this,\n            whiteOpacity: [1, 0],\n            easing: 'linear',\n            duration: 1000\n          });\n        }\n      }\n\n      this.isMouseHit = newMouseHit;\n      var colorFan = 20;\n      colorMode(HSB, 100);\n      var c = color(millis() / 200 % 100, 80, 80, 0);\n      colorMode(RGB, 255);\n      var blackFan = map(sin(0.1 * (this.i + this.j * map(cos(millis() / 1000), -1, 1, 0.2, 2)) - millis() / 250), 0, 1, 0, 60);\n      fill(c, 0); // fill(0, blackFan);\n\n      noStroke();\n      rect(this.pos.x, this.pos.y, this.width, this.height);\n    }\n  }, {\n    key: \"checkMouseCollision\",\n    value: function checkMouseCollision() {\n      var mousePos = mouse.getPos();\n      return mousePos.x > this.pos.x && mousePos.x < this.pos.x + this.width && mousePos.y > this.pos.y && mousePos.y < this.pos.y + this.height;\n    }\n  }, {\n    key: \"checkMouseProximity\",\n    value: function checkMouseProximity(coeff) {\n      return Math.max(0, map(this.pos.copy().add(createVector(this.width / 2, this.height / 2)).dist(mouse.getSmoothPos()), 0, this.diag * coeff, 1, 0));\n    }\n  }, {\n    key: \"resize\",\n    value: function resize(i, j, cols, rows) {\n      this.i = i;\n      this.j = j;\n      this.cols = cols;\n      this.rows = rows;\n      this.calcDimensions();\n    }\n  }]);\n\n  return Rectangle;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rectangle);\n\n//# sourceURL=webpack:///./src/js/components/Rectangle.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tiny_emitter_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-emitter/instance */ \"./node_modules/tiny-emitter/instance.js\");\n/* harmony import */ var tiny_emitter_instance__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tiny_emitter_instance__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Sketch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sketch */ \"./src/js/Sketch.js\");\n/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Content */ \"./src/js/Content.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ \"./src/js/Footer.js\");\n/* harmony import */ var _AutoTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AutoTitle */ \"./src/js/AutoTitle.js\");\n// const p5 = require(\"p5\");\n\n\n\n\n\nvar autoTitle = new _AutoTitle__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\nwindow.addEventListener(\"load\", function () {\n  var content = new _Content__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  var footer = new _Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n  var sk = new p5(_Sketch__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  tiny_emitter_instance__WEBPACK_IMPORTED_MODULE_0___default.a.on(\"play-footer\", footer.display.bind(footer));\n  setTimeout(function () {\n    document.body.classList.remove('hidden');\n    content.display();\n  }, 200);\n});\n\n//# sourceURL=webpack:///./src/js/index.js?");

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