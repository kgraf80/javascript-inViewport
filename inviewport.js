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
Object.prototype.inViewport = function inViewport(xValue, yValue, callback, intervalSpeed) {
  var _this = this;

  var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'percentage';
  var isVisible = false;
  var inView = false;
  /**
   * Error Handling.
   */

  var errorHandling = function errorHandling() {
    var error = false;

    if (window === 'undefined') {
      console.error('inViewport: no window object found');
      error = true;
    }

    return error;
  };
  /**
   * Vertical Check.
   */


  var verticalCheck = function verticalCheck(boundaries) {
    var viewport = boundaries.viewport,
        visible = boundaries.visible,
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
   */


  var horizontalCheck = function horizontalCheck(boundaries) {
    var viewport = boundaries.viewport,
        visible = boundaries.visible,
        bounds = boundaries.bounds;
    var element = 0;

    if (visible.right && !visible.left) {
      element = type === 'pixel' ? bounds.right : Math.abs(bounds.right / bounds.width);
    } else if (!visible.right && visible.left) {
      element = type === 'pixel' ? Math.abs(viewport.right - bounds.left) : Math.abs((viewport.right - bounds.left) / bounds.width);
    }

    return element >= xValue;
  };
  /**
   * Element Bounds Check.
   *
   * @param {object} boundCheck
   */


  var elementBoundsCheck = function elementBoundsCheck(boundaries) {
    var sideA = boundaries.sideA,
        sideB = boundaries.sideB,
        measurementDirection = boundaries.measurementDirection,
        visible = boundaries.visible,
        viewport = boundaries.viewport,
        bounds = boundaries.bounds;
    var xPosition = window.pageXOffset + bounds.left;
    var yPosition = window.pageYOffset + bounds.top;
    var objectVisible = 0;
    /**
     * Return true if element is completely visible or if the element is too
     * big for the viewport.
     */

    if (visible[sideA] && visible[sideB] || yPosition <= viewport[sideA] && viewport[sideB] <= yPosition + bounds[measurementDirection] || xPosition <= viewport.left && viewport.right <= xPosition + elementBounds.width) {
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
      console.log('in view');
      callback();
    }
  };
  /**
   * Is In View.
   */


  var isInView = function isInView() {
    var errorFound = errorHandling();

    if (errorFound) {
      return false;
    }

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
      right: bounds.right > 0 && bounds.right <= window.innerWidth
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
    console.log("inView: ".concat(inView, ", isVisible: ").concat(isVisible));
    checkCallback();
    return inView;
  };
  /**
   * Boundary Listener.
   */


  var addBoundaryListener = function addBoundaryListener() {
    console.log('adding listener...');
    var scrolling = false;
    window.addEventListener('scroll', function () {
      scrolling = true;
    }, false);
    setInterval(function () {
      if (scrolling) {
        isVisible = isInView();
        scrolling = false;
      }
    }, intervalSpeed);
  };

  addBoundaryListener();
};

var inViewport = Object.prototype.inViewport;
var _default = inViewport;
exports["default"] = _default;

//# sourceMappingURL=inviewport.js.map