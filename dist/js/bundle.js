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

/***/ "./node_modules/splitting/dist/splitting.js":
/*!**************************************************!*\
  !*** ./node_modules/splitting/dist/splitting.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function (global, factory) {\n\t true ? module.exports = factory() :\n\tundefined;\n}(this, (function () { 'use strict';\n\nvar root = document;\nvar createText = root.createTextNode.bind(root);\n\n/**\n * # setProperty\n * Apply a CSS var\n * @param el{HTMLElement} \n * @param varName {string} \n * @param value {string|number}  \n */\nfunction setProperty(el, varName, value) {\n    el.style.setProperty(varName, value);\n} \n\n/**\n * \n * @param {Node} el \n * @param {Node} child \n */\nfunction appendChild(el, child) {\n  return el.appendChild(child);\n}\n\nfunction createElement(parent, key, text, whitespace) {\n  var el = root.createElement('span');\n  key && (el.className = key); \n  if (text) { \n      !whitespace && el.setAttribute(\"data-\" + key, text);\n      el.textContent = text; \n  }\n  return (parent && appendChild(parent, el)) || el;\n}\n\nfunction getData(el, key) {\n  return el.getAttribute(\"data-\" + key)\n}\n\n/**\n * \n * @param e {import('../types').Target} \n * @param parent {HTMLElement}\n * @returns {HTMLElement[]}\n */\nfunction $(e, parent) {\n    return !e || e.length == 0\n        ? // null or empty string returns empty array\n          []\n        : e.nodeName\n            ? // a single element is wrapped in an array\n              [e]\n            : // selector and NodeList are converted to Element[]\n              [].slice.call(e[0].nodeName ? e : (parent || root).querySelectorAll(e));\n}\n\n/**\n * Creates and fills an array with the value provided\n * @template {T}\n * @param {number} len\n * @param {() => T} valueProvider\n * @return {T}\n */\nfunction Array2D(len) {\n    var a = [];\n    for (; len--; ) {\n        a[len] = [];\n    }\n    return a;\n}\n\nfunction each(items, fn) {\n    items && items.some(fn);\n}\n\nfunction selectFrom(obj) {\n    return function (key) {\n        return obj[key];\n    }\n}\n\n/**\n * # Splitting.index\n * Index split elements and add them to a Splitting instance.\n *\n * @param element {HTMLElement}\n * @param key {string}\n * @param items {HTMLElement[] | HTMLElement[][]}\n */\nfunction index(element, key, items) {\n    var prefix = '--' + key;\n    var cssVar = prefix + \"-index\";\n\n    each(items, function (items, i) {\n        if (Array.isArray(items)) {\n            each(items, function(item) {\n                setProperty(item, cssVar, i);\n            });\n        } else {\n            setProperty(items, cssVar, i);\n        }\n    });\n\n    setProperty(element, prefix + \"-total\", items.length);\n}\n\n/**\n * @type {Record<string, import('./types').ISplittingPlugin>}\n */\nvar plugins = {};\n\n/**\n * @param by {string}\n * @param parent {string}\n * @param deps {string[]}\n * @return {string[]}\n */\nfunction resolvePlugins(by, parent, deps) {\n    // skip if already visited this dependency\n    var index = deps.indexOf(by);\n    if (index == -1) {\n        // if new to dependency array, add to the beginning\n        deps.unshift(by);\n\n        // recursively call this function for all dependencies\n        each(plugins[by].depends, function(p) {\n            resolvePlugins(p, by, deps);\n        });\n    } else {\n        // if this dependency was added already move to the left of\n        // the parent dependency so it gets loaded in order\n        var indexOfParent = deps.indexOf(parent);\n        deps.splice(index, 1);\n        deps.splice(indexOfParent, 0, by);\n    }\n    return deps;\n}\n\n/**\n * Internal utility for creating plugins... essentially to reduce\n * the size of the library\n * @param {string} by \n * @param {string} key \n * @param {string[]} depends \n * @param {Function} split \n * @returns {import('./types').ISplittingPlugin}\n */\nfunction createPlugin(by, depends, key, split) {\n    return {\n        by: by,\n        depends: depends,\n        key: key,\n        split: split\n    }\n}\n\n/**\n *\n * @param by {string}\n * @returns {import('./types').ISplittingPlugin[]}\n */\nfunction resolve(by) {\n    return resolvePlugins(by, 0, []).map(selectFrom(plugins));\n}\n\n/**\n * Adds a new plugin to splitting\n * @param opts {import('./types').ISplittingPlugin}\n */\nfunction add(opts) {\n    plugins[opts.by] = opts;\n}\n\n/**\n * # Splitting.split\n * Split an element's textContent into individual elements\n * @param el {Node} Element to split\n * @param key {string}\n * @param splitOn {string}\n * @param includeSpace {boolean}\n * @returns {HTMLElement[]}\n */\nfunction splitText(el, key, splitOn, includePrevious, preserveWhitespace) {\n    // Combine any strange text nodes or empty whitespace.\n    el.normalize();\n\n    // Use fragment to prevent unnecessary DOM thrashing.\n    var elements = [];\n    var F = document.createDocumentFragment();\n\n    if (includePrevious) {\n        elements.push(el.previousSibling);\n    }\n\n    var allElements = [];\n    $(el.childNodes).some(function(next) {\n        if (next.tagName && !next.hasChildNodes()) {\n            // keep elements without child nodes (no text and no children)\n            allElements.push(next);\n            return;\n        }\n        // Recursively run through child nodes\n        if (next.childNodes && next.childNodes.length) {\n            allElements.push(next);\n            elements.push.apply(elements, splitText(next, key, splitOn, includePrevious, preserveWhitespace));\n            return;\n        }\n\n        // Get the text to split, trimming out the whitespace\n        /** @type {string} */\n        var wholeText = next.wholeText || '';\n        var contents = wholeText.trim();\n\n        // If there's no text left after trimming whitespace, continue the loop\n        if (contents.length) {\n            // insert leading space if there was one\n            if (wholeText[0] === ' ') {\n                allElements.push(createText(' '));\n            }\n            // Concatenate the split text children back into the full array\n            each(contents.split(splitOn), function(splitText, i) {\n                if (i && preserveWhitespace) {\n                    allElements.push(createElement(F, \"whitespace\", \" \", preserveWhitespace));\n                }\n                var splitEl = createElement(F, key, splitText);\n                elements.push(splitEl);\n                allElements.push(splitEl);\n            }); \n            // insert trailing space if there was one\n            if (wholeText[wholeText.length - 1] === ' ') {\n                allElements.push(createText(' '));\n            }\n        }\n    });\n\n    each(allElements, function(el) {\n        appendChild(F, el);\n    });\n\n    // Clear out the existing element\n    el.innerHTML = \"\";\n    appendChild(el, F);\n    return elements;\n}\n\n/** an empty value */\nvar _ = 0;\n\nfunction copy(dest, src) {\n    for (var k in src) {\n        dest[k] = src[k];\n    }\n    return dest;\n}\n\nvar WORDS = 'words';\n\nvar wordPlugin = createPlugin(\n    /*by: */ WORDS,\n    /*depends: */ _,\n    /*key: */ 'word', \n    /*split: */ function(el) {\n        return splitText(el, 'word', /\\s+/, 0, 1)\n    }\n);\n\nvar CHARS = \"chars\";\n\nvar charPlugin = createPlugin(\n    /*by: */ CHARS,\n    /*depends: */ [WORDS],\n    /*key: */ \"char\", \n    /*split: */ function(el, options, ctx) {\n        var results = [];\n\n        each(ctx[WORDS], function(word, i) {\n            results.push.apply(results, splitText(word, \"char\", \"\", options.whitespace && i));\n        });\n\n        return results;\n    }\n);\n\n/**\n * # Splitting\n * \n * @param opts {import('./types').ISplittingOptions} \n */\nfunction Splitting (opts) {\n  opts = opts || {};\n  var key = opts.key;\n\n  return $(opts.target || '[data-splitting]').map(function(el) {\n    var ctx = el['🍌'];  \n    if (!opts.force && ctx) {\n      return ctx;\n    }\n\n    ctx = el['🍌'] = { el: el };\n    var items = resolve(opts.by || getData(el, 'splitting') || CHARS);\n    var opts2 = copy({}, opts);\n    each(items, function(plugin) {\n      if (plugin.split) {\n        var pluginBy = plugin.by;\n        var key2 = (key ? '-' + key : '') + plugin.key;\n        var results = plugin.split(el, opts2, ctx);\n        key2 && index(el, key2, results);\n        ctx[pluginBy] = results;\n        el.classList.add(pluginBy);\n      } \n    });\n\n    el.classList.add('splitting');\n    return ctx;\n  })\n}\n\n/**\n * # Splitting.html\n * \n * @param opts {import('./types').ISplittingOptions}\n */\nfunction html(opts) {\n  opts = opts || {};\n  var parent = opts.target =  createElement();\n  parent.innerHTML = opts.content;\n  Splitting(opts);\n  return parent.outerHTML\n}\n\nSplitting.html = html;\nSplitting.add = add;\n\nfunction detectGrid(el, options, side) {\n    var items = $(options.matching || el.children, el);\n    var c = {};\n\n    each(items, function(w) {\n        var val = Math.round(w[side]);\n        (c[val] || (c[val] = [])).push(w);\n    });\n\n    return Object.keys(c).map(Number).sort(byNumber).map(selectFrom(c));\n}\n\nfunction byNumber(a, b) {\n    return a - b;\n}\n\nvar linePlugin = createPlugin(\n    /*by: */ 'lines',\n    /*depends: */ [WORDS],\n    /*key: */ 'line',\n    /*split: */ function(el, options, ctx) {\n      return detectGrid(el, { matching: ctx[WORDS] }, 'offsetTop')\n    }\n);\n\nvar itemPlugin = createPlugin(\n    /*by: */ 'items',\n    /*depends: */ _,\n    /*key: */ 'item', \n    /*split: */ function(el, options) {\n        return $(options.matching || el.children, el)\n    }\n);\n\nvar rowPlugin = createPlugin(\n    /*by: */ 'rows',\n    /*depends: */ _,\n    /*key: */ 'row', \n    /*split: */ function(el, options) {\n        return detectGrid(el, options, \"offsetTop\");\n    }\n);\n\nvar columnPlugin = createPlugin(\n    /*by: */ 'cols',\n    /*depends: */ _,\n    /*key: */ \"col\", \n    /*split: */ function(el, options) {\n        return detectGrid(el, options, \"offsetLeft\");\n    }\n);\n\nvar gridPlugin = createPlugin(\n    /*by: */ 'grid',\n    /*depends: */ ['rows', 'cols']\n);\n\nvar LAYOUT = \"layout\";\n\nvar layoutPlugin = createPlugin(\n    /*by: */ LAYOUT,\n    /*depends: */ _,\n    /*key: */ _,\n    /*split: */ function(el, opts) {\n        // detect and set options\n        var rows =  opts.rows = +(opts.rows || getData(el, 'rows') || 1);\n        var columns = opts.columns = +(opts.columns || getData(el, 'columns') || 1);\n\n        // Seek out the first <img> if the value is true \n        opts.image = opts.image || getData(el, 'image') || el.currentSrc || el.src;\n        if (opts.image) {\n            var img = $(\"img\", el)[0];\n            opts.image = img && (img.currentSrc || img.src);\n        }\n\n        // add optional image to background\n        if (opts.image) {\n            setProperty(el, \"background-image\", \"url(\" + opts.image + \")\");\n        }\n\n        var totalCells = rows * columns;\n        var elements = [];\n\n        var container = createElement(_, \"cell-grid\");\n        while (totalCells--) {\n            // Create a span\n            var cell = createElement(container, \"cell\");\n            createElement(cell, \"cell-inner\");\n            elements.push(cell);\n        }\n\n        // Append elements back into the parent\n        appendChild(el, container);\n\n        return elements;\n    }\n);\n\nvar cellRowPlugin = createPlugin(\n    /*by: */ \"cellRows\",\n    /*depends: */ [LAYOUT],\n    /*key: */ \"row\",\n    /*split: */ function(el, opts, ctx) {\n        var rowCount = opts.rows;\n        var result = Array2D(rowCount);\n\n        each(ctx[LAYOUT], function(cell, i, src) {\n            result[Math.floor(i / (src.length / rowCount))].push(cell);\n        });\n\n        return result;\n    }\n);\n\nvar cellColumnPlugin = createPlugin(\n    /*by: */ \"cellColumns\",\n    /*depends: */ [LAYOUT],\n    /*key: */ \"col\",\n    /*split: */ function(el, opts, ctx) {\n        var columnCount = opts.columns;\n        var result = Array2D(columnCount);\n\n        each(ctx[LAYOUT], function(cell, i) {\n            result[i % columnCount].push(cell);\n        });\n\n        return result;\n    }\n);\n\nvar cellPlugin = createPlugin(\n    /*by: */ \"cells\",\n    /*depends: */ ['cellRows', 'cellColumns'],\n    /*key: */ \"cell\", \n    /*split: */ function(el, opt, ctx) { \n        // re-index the layout as the cells\n        return ctx[LAYOUT];\n    }\n);\n\n// install plugins\n// word/char plugins\nadd(wordPlugin);\nadd(charPlugin);\nadd(linePlugin);\n// grid plugins\nadd(itemPlugin);\nadd(rowPlugin);\nadd(columnPlugin);\nadd(gridPlugin);\n// cell-layout plugins\nadd(layoutPlugin);\nadd(cellRowPlugin);\nadd(cellColumnPlugin);\nadd(cellPlugin);\n\nreturn Splitting;\n\n})));\n\n\n//# sourceURL=webpack:///./node_modules/splitting/dist/splitting.js?");

/***/ }),

/***/ "./src/js/Content.js":
/*!***************************!*\
  !*** ./src/js/Content.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tweens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tweens */ \"./src/js/tweens.js\");\n/* harmony import */ var splitting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! splitting */ \"./node_modules/splitting/dist/splitting.js\");\n/* harmony import */ var splitting__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(splitting__WEBPACK_IMPORTED_MODULE_1__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Content = /*#__PURE__*/function () {\n  function Content() {\n    _classCallCheck(this, Content);\n\n    // link to DOM nodes\n    this.$el = document.querySelector('div.content');\n    this.textContent = this.$el.querySelector('.text');\n    this.title = this.textContent.querySelector('h3');\n    this.paragraph = this.textContent.querySelector('p.main-desc');\n    this.subParagraph = this.textContent.querySelector('p:last-of-type');\n    this.separator = this.textContent.querySelector('span.separator');\n    this.button = this.$el.querySelector('a.btn');\n    this.splitEl(this.paragraph); // create timeline\n\n    this.tl = anime.timeline({\n      autoplay: false,\n      loop: false\n    }); // build timeline\n\n    this.buildTL();\n  }\n\n  _createClass(Content, [{\n    key: \"buildTL\",\n    value: function buildTL() {\n      // show main title\n      this.tl.add({\n        targets: this.title,\n        duration: 900,\n        opacity: [0, 1],\n        easing: 'linear'\n      }, 0) // reposition entire container\n      .add({\n        targets: this.textContent,\n        duration: 1300,\n        translateY: ['50%', '0%'],\n        easing: 'easeInOutCubic'\n      }, '-=250') // main paragraph\n      .add({\n        targets: [this.paragraph.querySelectorAll('span'), this.subParagraph],\n        duration: 800,\n        opacity: [0, 1],\n        translateY: [20, 0],\n        easing: 'easeOutQuad',\n        delay: anime.stagger(100)\n      }, '-=600') // separator\n      .add({\n        targets: this.separator,\n        duration: 700,\n        scaleX: [0, 1],\n        easing: 'easeOutCirc'\n      }, '-=500') // bgShader visibility\n      .add({\n        targets: _tweens__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        fadeIn: 1,\n        duration: 2000,\n        easing: 'linear'\n      }, 2000);\n    }\n  }, {\n    key: \"splitEl\",\n    value: function splitEl(el) {\n      var content = el.innerHTML;\n      var splitContent = content.split(\"<br>\");\n      el.innerHTML = \"\";\n      splitContent.forEach(function (line) {\n        var n = document.createElement(\"span\");\n        n.innerHTML = line;\n        el.appendChild(n);\n        el.innerHTML += \"<br>\";\n      });\n    }\n  }, {\n    key: \"display\",\n    value: function display() {\n      this.tl.play();\n    }\n  }]);\n\n  return Content;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Content);\n\n//# sourceURL=webpack:///./src/js/Content.js?");

/***/ }),

/***/ "./src/js/Footer.js":
/*!**************************!*\
  !*** ./src/js/Footer.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Footer = /*#__PURE__*/function () {\n  function Footer() {\n    _classCallCheck(this, Footer);\n\n    this.$el = document.querySelector('footer');\n    this.h1 = this.$el.querySelector('h1');\n    this.borders = this.$el.querySelectorAll('.borders > span');\n    this.social = this.$el.querySelectorAll('ul.social li');\n    this.buildBordersTL();\n    this.buildTL();\n  }\n\n  _createClass(Footer, [{\n    key: \"buildTL\",\n    value: function buildTL() {\n      var _this = this;\n\n      this.tl = anime.timeline({\n        autoplay: false,\n        loop: false\n      });\n      this.tl.add({\n        targets: this.h1.querySelectorAll('.mask > .content'),\n        translateY: ['100%', '0%'],\n        duration: 700,\n        easing: 'easeOutCirc',\n        delay: anime.stagger(100),\n        begin: function begin() {\n          return _this.bordersTL.play();\n        }\n      }).add({\n        targets: this.social,\n        opacity: [0, 1],\n        duration: 800,\n        easing: 'linear',\n        delay: anime.stagger(200)\n      }, '-=200');\n    }\n  }, {\n    key: \"buildBordersTL\",\n    value: function buildBordersTL() {\n      this.bordersTL = anime.timeline({\n        targets: this.borders,\n        duration: 800,\n        easing: 'easeOutCubic',\n        delay: anime.stagger(100),\n        autoplay: false,\n        loop: false\n      });\n      this.bordersTL.add({\n        scaleX: [0, 1]\n      }, 200);\n    }\n  }, {\n    key: \"display\",\n    value: function display() {\n      this.tl.play();\n    }\n  }]);\n\n  return Footer;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n//# sourceURL=webpack:///./src/js/Footer.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sketch */ \"./src/js/Sketch.js\");\n/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Content */ \"./src/js/Content.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ \"./src/js/Footer.js\");\n// const p5 = require(\"p5\");\n\n\n\nwindow.addEventListener(\"load\", function () {\n  var content = new _Content__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  var footer = new _Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  var sk = new p5(_Sketch__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  setTimeout(function () {\n    document.body.classList.remove('hidden');\n    content.display();\n    footer.display();\n  }, 200);\n});\n\n//# sourceURL=webpack:///./src/js/index.js?");

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