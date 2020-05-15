(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/viewport-example.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./inviewport.js":
/*!***********************!*\
  !*** ./inviewport.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/**
 * javascript-inViewport.
 *
 * @format
 */

/* eslint-env es5 */

/* eslint no-undef: 0 */

/* eslint no-var: 0 */

/* eslint no-console: 0 */

/* eslint comma-dangle: 0 */

/* eslint no-extend-native: ["error", { "exceptions": ["Object"] }] */

/* eslint-disable prefer-destructuring */

/* eslint-disable consistent-return */

/* eslint-disable no-restricted-globals */

/* eslint-disable function-paren-newline */

/* eslint-disable object-curly-newline */

/**
 * inviewport Object Prototype.
 *
 * @param {number} xValue
 * @param {number} yValue
 * @param {Array} callback
 */

Object.prototype.inViewport = function inViewport(xValue, yValue, callback) {
  var _this = this;

  var isVisible = false;
  var inView = false;
  var scrolling = false;
  var scrollListener = null;
  var type = isNaN(xValue) && xValue.includes('px') ? 'pixel' : '';
  /**
   * Set Scroll.
   */

  function setScroll() {
    scrolling = true;
  }
  /**
   * Vertical Check.
   *
   * @param {object} boundaries
   */


  var verticalCheck = function verticalCheck(boundaries) {
    var visible = boundaries.visible,
        bounds = boundaries.bounds;
    var element = 0;

    if (visible.top && !visible.bottom) {
      element = type === 'pixel' ? Math.abs(bounds.top - window.innerHeight) : Math.abs((bounds.top - window.innerHeight) / bounds.height);
    } else if (!visible.top && visible.bottom) {
      element = type === 'pixel' ? bounds.bottom : Math.abs(bounds.bottom / bounds.height);
    }

    return element >= yValue;
  };
  /**
   * Horizontal Check.
   *
   * @param {object} boundaries
   */


  var horizontalCheck = function horizontalCheck(boundaries) {
    var visible = boundaries.visible,
        bounds = boundaries.bounds;
    var element = 0;

    if (visible.left && !visible.right) {
      element = type === 'pixel' ? Math.abs(bounds.left - window.innerWidth) : Math.abs((bounds.left - window.innerWidth) / bounds.width);
    } else if (!visible.left && visible.right) {
      element = type === 'pixel' ? bounds.right : Math.abs(bounds.right / bounds.width);
    }

    return element >= xValue;
  };
  /**
   * Element Bounds Check.
   *
   * @param {object} boundaries
   */


  var elementBoundsCheck = function elementBoundsCheck(boundaries) {
    var sideA = boundaries.sideA,
        sideB = boundaries.sideB,
        measurementDirection = boundaries.measurementDirection,
        visible = boundaries.visible,
        bounds = boundaries.bounds;
    var objectVisible = 0;
    /**
     * Return true if element is completely visible or if the element is too
     * big for the viewport.
     */

    if (visible[sideA] && visible[sideB] || bounds.top < 0 && bounds.bottom > window.innerHeight || bounds.left < 0 && bounds.right > window.innerWidth) {
      return true;
    }

    objectVisible = measurementDirection === 'height' ? verticalCheck(boundaries) : horizontalCheck(boundaries);
    return objectVisible;
  };
  /**
   * Callback.
   *
   * @param {boolean} inView
   */


  var checkCallback = function checkCallback() {
    if (inView && !isVisible) {
      if (Array.isArray(callback)) {
        callback[0]();
      } else {
        callback();
        window.removeEventListener('scroll', _this.setScroll, false);
        clearInterval(_this.scrollListener);
      }
    } else if (!inView && isVisible) {
      if (Array.isArray(callback) && typeof callback[1] === 'function') {
        callback[1]();
      }
    }
  };
  /**
   * Is In View.
   */


  var isInView = function isInView() {
    var bounds = _this.getBoundingClientRect();

    var viewport = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      bottom: window.pageYOffset + window.innerHeight,
      right: window.pageXOffset + window.innerWidth
    };
    var visible = {
      top: bounds.top >= 0 && bounds.top < window.innerHeight,
      bottom: bounds.bottom > 0 && bounds.bottom <= window.innerHeight,
      left: bounds.left >= 0 && bounds.left < window.innerWidth,
      right: bounds.right >= 0 && bounds.right <= window.innerWidth
    };
    var verticalBoundaries = {
      sideA: 'top',
      sideB: 'bottom',
      measurementDirection: 'height',
      visible: visible,
      viewport: viewport,
      bounds: bounds
    };
    var horizontalBoundaries = {
      sideA: 'right',
      sideB: 'left',
      measurementDirection: 'width',
      visible: visible,
      viewport: viewport,
      bounds: bounds
    };
    inView = elementBoundsCheck(verticalBoundaries) && elementBoundsCheck(horizontalBoundaries);
    checkCallback();
    return inView;
  };

  isInView();
  /**
   * Boundary Listener.
   */

  var addBoundaryListener = function addBoundaryListener() {
    window.addEventListener('scroll', setScroll, false);
    scrollListener = setInterval(function () {
      if (scrolling) {
        isVisible = isInView();
        scrolling = false;
      }
    }, 20);
  };

  addBoundaryListener();
};

var inViewport = Object.prototype.inViewport;
var _default = inViewport;
exports["default"] = _default;

/***/ }),

/***/ "./source/viewport-example.js":
/*!************************************!*\
  !*** ./source/viewport-example.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inviewport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inviewport */ "./inviewport.js");
/* harmony import */ var _inviewport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inviewport__WEBPACK_IMPORTED_MODULE_0__);
/**
 * inViewport Example
 *
 * @format
 */

/* eslint no-undef: 0 */

/* eslint no-var: 0 */

/* eslint prefer-arrow-callback: 0 */

/* eslint-disable comma-dangle */

/* eslint-disable no-loop-func */

/* eslint-disable no-plusplus */

/* eslint-disable function-paren-newline */

document.addEventListener('DOMContentLoaded', function () {
  var verticalScrollContainer = document.querySelector('.vertical-scroll-example');
  var horizontalScrollContainer = document.querySelector('.horizontal-scroll-example');
  var shrug = document.querySelector('.shrug');
  /**
   * Build Verticle Tiles.
   */

  var setupShrug = function setupShrug() {
    if (shrug) {
      shrug.inViewport(0.5, 0.5, [function () {
        shrug.classList.add('visible');
      }, function () {
        shrug.classList.remove('visible');
      }]);
    }
  };
  /**
   * Build Tiles.
   *
   * @param {string} orientation
   * @param {object} container
   */


  var buildTiles = function buildTiles(orientation, container) {
    var _loop = function _loop(i) {
      var tile = document.createElement('div');
      tile.classList.add(orientation);
      container.appendChild(tile);

      if (orientation === 'vertical-tile') {
        tile.inViewport('175px', '175px', [function () {
          tile.classList.add('visible');
        }, function () {
          tile.classList.remove('visible');
        }]);
      } else {
        tile.inViewport(0.5, 0.5, function () {
          tile.classList.add('visible');
        });
      }
    };

    for (var i = 0; i < 9; i++) {
      _loop(i);
    }
  };
  /**
   * Initialize Example.
   */


  var initializeExample = function initializeExample() {
    if (verticalScrollContainer) {
      buildTiles('vertical-tile', verticalScrollContainer);
    }

    if (horizontalScrollContainer) {
      buildTiles('horizontal-tile', horizontalScrollContainer);
      horizontalScrollContainer.inViewport(0.01, 0.8, function () {
        horizontalScrollContainer.classList.add('visible');
      });
    }

    setupShrug();
  };

  initializeExample();
});

/***/ })

/******/ })));
//# sourceMappingURL=viewport-example.js.map