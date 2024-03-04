exports.id = 501;
exports.ids = [501];
exports.modules = {

/***/ 4552:
/***/ ((module) => {

module.exports = clamp

function clamp(value, min, max) {
  return min < max
    ? (value < min ? min : value > max ? max : value)
    : (value < max ? max : value > min ? min : value)
}


/***/ }),

/***/ 104:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var detectHover = {
  update: function update() {
    if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
      detectHover.hover = window.matchMedia('(hover: hover)').matches;
      detectHover.none = window.matchMedia('(hover: none)').matches || window.matchMedia('(hover: on-demand)').matches;
      detectHover.anyHover = window.matchMedia('(any-hover: hover)').matches;
      detectHover.anyNone = window.matchMedia('(any-hover: none)').matches || window.matchMedia('(any-hover: on-demand)').matches;
    }
  }
};

detectHover.update();
exports["default"] = detectHover;

/***/ }),

/***/ 1193:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _detectHover = __webpack_require__(104);

var _detectHover2 = _interopRequireDefault(_detectHover);

var _detectPointer = __webpack_require__(3038);

var _detectPointer2 = _interopRequireDefault(_detectPointer);

var _detectTouchEvents = __webpack_require__(8163);

var _detectTouchEvents2 = _interopRequireDefault(_detectTouchEvents);

var _detectPassiveEvents = __webpack_require__(655);

var _detectPassiveEvents2 = _interopRequireDefault(_detectPassiveEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * detectIt object structure
 * const detectIt = {
 *   deviceType: 'mouseOnly' / 'touchOnly' / 'hybrid',
 *   passiveEvents: boolean,
 *   hasTouch: boolean,
 *   hasMouse: boolean,
 *   maxTouchPoints: number,
 *   primaryHover: 'hover' / 'none',
 *   primaryPointer: 'fine' / 'coarse' / 'none',
 *   state: {
 *     detectHover,
 *     detectPointer,
 *     detectTouchEvents,
 *     detectPassiveEvents,
 *   },
 *   update() {...},
 * }
 */

function determineDeviceType(hasTouch, anyHover, anyFine, state) {
  // A hybrid device is one that both hasTouch and any input device can hover
  // or has a fine pointer.
  if (hasTouch && (anyHover || anyFine)) return 'hybrid';

  // workaround for browsers that have the touch events api,
  // and have implemented Level 4 media queries but not the
  // hover and pointer media queries, so the tests are all false (notable Firefox)
  // if it hasTouch, no pointer and hover support, and on an android assume it's touchOnly
  // if it hasTouch, no pointer and hover support, and not on an android assume it's a hybrid
  if (hasTouch && Object.keys(state.detectHover).filter(function (key) {
    return key !== 'update';
  }).every(function (key) {
    return state.detectHover[key] === false;
  }) && Object.keys(state.detectPointer).filter(function (key) {
    return key !== 'update';
  }).every(function (key) {
    return state.detectPointer[key] === false;
  })) {
    if (window.navigator && /android/.test(window.navigator.userAgent.toLowerCase())) {
      return 'touchOnly';
    }
    return 'hybrid';
  }

  // In almost all cases a device that doesn’t support touch will have a mouse,
  // but there may be rare exceptions. Note that it doesn’t work to do additional tests
  // based on hover and pointer media queries as older browsers don’t support these.
  // Essentially, 'mouseOnly' is the default.
  return hasTouch ? 'touchOnly' : 'mouseOnly';
}

var detectIt = {
  state: {
    detectHover: _detectHover2.default,
    detectPointer: _detectPointer2.default,
    detectTouchEvents: _detectTouchEvents2.default,
    detectPassiveEvents: _detectPassiveEvents2.default
  },
  update: function update() {
    detectIt.state.detectHover.update();
    detectIt.state.detectPointer.update();
    detectIt.state.detectTouchEvents.update();
    detectIt.state.detectPassiveEvents.update();
    detectIt.updateOnlyOwnProperties();
  },
  updateOnlyOwnProperties: function updateOnlyOwnProperties() {
    if (typeof window !== 'undefined') {
      detectIt.passiveEvents = detectIt.state.detectPassiveEvents.hasSupport || false;

      detectIt.hasTouch = detectIt.state.detectTouchEvents.hasSupport || false;

      detectIt.deviceType = determineDeviceType(detectIt.hasTouch, detectIt.state.detectHover.anyHover, detectIt.state.detectPointer.anyFine, detectIt.state);

      detectIt.hasMouse = detectIt.deviceType !== 'touchOnly';

      detectIt.primaryInput = detectIt.deviceType === 'mouseOnly' && 'mouse' || detectIt.deviceType === 'touchOnly' && 'touch' ||
      // deviceType is hybrid:
      detectIt.state.detectHover.hover && 'mouse' || detectIt.state.detectHover.none && 'touch' ||
      // if there's no support for hover media queries but detectIt determined it's
      // a hybrid  device, then assume it's a mouse first device
      'mouse';

      // issue with Windows Chrome on hybrid devices starting in version 59 where
      // media queries represent a touch only device, so if the browser is an
      // affected Windows Chrome version and hasTouch,
      // then assume it's a hybrid with primaryInput mouse
      // see https://github.com/rafrex/detect-it/issues/8
      var isAffectedWindowsChromeVersion = /windows/.test(window.navigator.userAgent.toLowerCase()) && /chrome/.test(window.navigator.userAgent.toLowerCase()) && parseInt(/Chrome\/([0-9.]+)/.exec(navigator.userAgent)[1], 10) >= 59;

      if (isAffectedWindowsChromeVersion && detectIt.hasTouch) {
        detectIt.deviceType = 'hybrid';
        detectIt.hasMouse = true;
        detectIt.primaryInput = 'mouse';
      }
    }
  }
};

detectIt.updateOnlyOwnProperties();
exports["default"] = detectIt;

/***/ }),

/***/ 655:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
// adapted from https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
var detectPassiveEvents = {
  update: function update() {
    if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
      var passive = false;
      var options = Object.defineProperty({}, 'passive', {
        get: function get() {
          passive = true;
        }
      });
      // note: have to set and remove a no-op listener instead of null
      // (which was used previously), becasue Edge v15 throws an error
      // when providing a null callback.
      // https://github.com/rafgraph/detect-passive-events/pull/3
      var noop = function noop() {};
      window.addEventListener('testPassiveEventSupport', noop, options);
      window.removeEventListener('testPassiveEventSupport', noop, options);
      detectPassiveEvents.hasSupport = passive;
    }
  }
};

detectPassiveEvents.update();
exports["default"] = detectPassiveEvents;

/***/ }),

/***/ 3038:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var detectPointer = {
  update: function update() {
    if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
      detectPointer.fine = window.matchMedia('(pointer: fine)').matches;
      detectPointer.coarse = window.matchMedia('(pointer: coarse)').matches;
      detectPointer.none = window.matchMedia('(pointer: none)').matches;
      detectPointer.anyFine = window.matchMedia('(any-pointer: fine)').matches;
      detectPointer.anyCoarse = window.matchMedia('(any-pointer: coarse)').matches;
      detectPointer.anyNone = window.matchMedia('(any-pointer: none)').matches;
    }
  }
};

detectPointer.update();
exports["default"] = detectPointer;

/***/ }),

/***/ 8163:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var detectTouchEvents = {
  update: function update() {
    if (typeof window !== 'undefined') {
      detectTouchEvents.hasSupport = 'ontouchstart' in window;
      detectTouchEvents.browserSupportsApi = Boolean(window.TouchEvent);
    }
  }
};

detectTouchEvents.update();
exports["default"] = detectTouchEvents;

/***/ }),

/***/ 2653:
/***/ ((module) => {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ 4797:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ 9046:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isPlainObject = __webpack_require__(9734);

module.exports = function isExtendable(val) {
  return isPlainObject(val) || typeof val === 'function' || Array.isArray(val);
};


/***/ }),

/***/ 9734:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__(9145);

function isObjectObject(o) {
  return isObject(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

module.exports = function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};


/***/ }),

/***/ 9145:
/***/ ((module) => {

"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};


/***/ }),

/***/ 1984:
/***/ (() => {



/***/ }),

/***/ 9891:
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ 6608:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*!
 * object.omit <https://github.com/jonschlinkert/object.omit>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__(9046);

module.exports = function omit(obj, props, fn) {
  if (!isObject(obj)) return {};

  if (typeof props === 'function') {
    fn = props;
    props = [];
  }

  if (typeof props === 'string') {
    props = [props];
  }

  var isFunction = typeof fn === 'function';
  var keys = Object.keys(obj);
  var res = {};

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var val = obj[key];

    if (!props || (props.indexOf(key) === -1 && (!isFunction || fn(val, key, obj)))) {
      res[key] = val;
    }
  }
  return res;
};


/***/ }),

/***/ 4334:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(6066);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 5601:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(4334)();
}


/***/ }),

/***/ 6066:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 9306:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2611)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _reactSwipe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _reactSwipe2 = _interopRequireDefault(_reactSwipe);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _reactSwipe2.default;
});

/***/ }),

/***/ 2611:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(8038), __webpack_require__(5601)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setHasSupportToCaptureOption = setHasSupportToCaptureOption;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var supportsCaptureOption = false;
  function setHasSupportToCaptureOption(hasSupport) {
    supportsCaptureOption = hasSupport;
  }

  try {
    addEventListener('test', null, Object.defineProperty({}, 'capture', { get: function get() {
        setHasSupportToCaptureOption(true);
      } }));
  } catch (e) {} // eslint-disable-line no-empty

  function getSafeEventHandlerOpts() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { capture: true };

    return supportsCaptureOption ? options : options.capture;
  }

  /**
   * [getPosition returns a position element that works for mouse or touch events]
   * @param  {[Event]} event [the received event]
   * @return {[Object]}      [x and y coords]
   */
  function getPosition(event) {
    if ('touches' in event) {
      var _event$touches$ = event.touches[0],
          pageX = _event$touches$.pageX,
          pageY = _event$touches$.pageY;

      return { x: pageX, y: pageY };
    }

    var screenX = event.screenX,
        screenY = event.screenY;

    return { x: screenX, y: screenY };
  }

  var ReactSwipe = function (_Component) {
    _inherits(ReactSwipe, _Component);

    function ReactSwipe() {
      var _ref;

      _classCallCheck(this, ReactSwipe);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var _this = _possibleConstructorReturn(this, (_ref = ReactSwipe.__proto__ || Object.getPrototypeOf(ReactSwipe)).call.apply(_ref, [this].concat(args)));

      _this._handleSwipeStart = _this._handleSwipeStart.bind(_this);
      _this._handleSwipeMove = _this._handleSwipeMove.bind(_this);
      _this._handleSwipeEnd = _this._handleSwipeEnd.bind(_this);

      _this._onMouseDown = _this._onMouseDown.bind(_this);
      _this._onMouseMove = _this._onMouseMove.bind(_this);
      _this._onMouseUp = _this._onMouseUp.bind(_this);

      _this._setSwiperRef = _this._setSwiperRef.bind(_this);
      return _this;
    }

    _createClass(ReactSwipe, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.swiper) {
          this.swiper.addEventListener('touchmove', this._handleSwipeMove, getSafeEventHandlerOpts({
            capture: true,
            passive: false
          }));
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.swiper) {
          this.swiper.removeEventListener('touchmove', this._handleSwipeMove, getSafeEventHandlerOpts({
            capture: true,
            passive: false
          }));
        }
      }
    }, {
      key: '_onMouseDown',
      value: function _onMouseDown(event) {
        if (!this.props.allowMouseEvents) {
          return;
        }

        this.mouseDown = true;

        document.addEventListener('mouseup', this._onMouseUp);
        document.addEventListener('mousemove', this._onMouseMove);

        this._handleSwipeStart(event);
      }
    }, {
      key: '_onMouseMove',
      value: function _onMouseMove(event) {
        if (!this.mouseDown) {
          return;
        }

        this._handleSwipeMove(event);
      }
    }, {
      key: '_onMouseUp',
      value: function _onMouseUp(event) {
        this.mouseDown = false;

        document.removeEventListener('mouseup', this._onMouseUp);
        document.removeEventListener('mousemove', this._onMouseMove);

        this._handleSwipeEnd(event);
      }
    }, {
      key: '_handleSwipeStart',
      value: function _handleSwipeStart(event) {
        var _getPosition = getPosition(event),
            x = _getPosition.x,
            y = _getPosition.y;

        this.moveStart = { x: x, y: y };
        this.props.onSwipeStart(event);
      }
    }, {
      key: '_handleSwipeMove',
      value: function _handleSwipeMove(event) {
        if (!this.moveStart) {
          return;
        }

        var _getPosition2 = getPosition(event),
            x = _getPosition2.x,
            y = _getPosition2.y;

        var deltaX = x - this.moveStart.x;
        var deltaY = y - this.moveStart.y;
        this.moving = true;

        // handling the responsability of cancelling the scroll to
        // the component handling the event
        var shouldPreventDefault = this.props.onSwipeMove({
          x: deltaX,
          y: deltaY
        }, event);

        if (shouldPreventDefault && event.cancelable) {
          event.preventDefault();
        }

        this.movePosition = { deltaX: deltaX, deltaY: deltaY };
      }
    }, {
      key: '_handleSwipeEnd',
      value: function _handleSwipeEnd(event) {
        this.props.onSwipeEnd(event);

        var tolerance = this.props.tolerance;


        if (this.moving && this.movePosition) {
          if (this.movePosition.deltaX < -tolerance) {
            this.props.onSwipeLeft(1, event);
          } else if (this.movePosition.deltaX > tolerance) {
            this.props.onSwipeRight(1, event);
          }
          if (this.movePosition.deltaY < -tolerance) {
            this.props.onSwipeUp(1, event);
          } else if (this.movePosition.deltaY > tolerance) {
            this.props.onSwipeDown(1, event);
          }
        }

        this.moveStart = null;
        this.moving = false;
        this.movePosition = null;
      }
    }, {
      key: '_setSwiperRef',
      value: function _setSwiperRef(node) {
        this.swiper = node;
        this.props.innerRef(node);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            tagName = _props.tagName,
            className = _props.className,
            style = _props.style,
            children = _props.children,
            allowMouseEvents = _props.allowMouseEvents,
            onSwipeUp = _props.onSwipeUp,
            onSwipeDown = _props.onSwipeDown,
            onSwipeLeft = _props.onSwipeLeft,
            onSwipeRight = _props.onSwipeRight,
            onSwipeStart = _props.onSwipeStart,
            onSwipeMove = _props.onSwipeMove,
            onSwipeEnd = _props.onSwipeEnd,
            innerRef = _props.innerRef,
            tolerance = _props.tolerance,
            props = _objectWithoutProperties(_props, ['tagName', 'className', 'style', 'children', 'allowMouseEvents', 'onSwipeUp', 'onSwipeDown', 'onSwipeLeft', 'onSwipeRight', 'onSwipeStart', 'onSwipeMove', 'onSwipeEnd', 'innerRef', 'tolerance']);

        return _react2.default.createElement(
          this.props.tagName,
          _extends({
            ref: this._setSwiperRef,
            onMouseDown: this._onMouseDown,
            onTouchStart: this._handleSwipeStart,
            onTouchEnd: this._handleSwipeEnd,
            className: className,
            style: style
          }, props),
          children
        );
      }
    }]);

    return ReactSwipe;
  }(_react.Component);

  ReactSwipe.displayName = 'ReactSwipe';
  ReactSwipe.propTypes = {
    tagName: _propTypes2.default.string,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object,
    children: _propTypes2.default.node,
    allowMouseEvents: _propTypes2.default.bool,
    onSwipeUp: _propTypes2.default.func,
    onSwipeDown: _propTypes2.default.func,
    onSwipeLeft: _propTypes2.default.func,
    onSwipeRight: _propTypes2.default.func,
    onSwipeStart: _propTypes2.default.func,
    onSwipeMove: _propTypes2.default.func,
    onSwipeEnd: _propTypes2.default.func,
    innerRef: _propTypes2.default.func,
    tolerance: _propTypes2.default.number.isRequired
  };
  ReactSwipe.defaultProps = {
    tagName: 'div',
    allowMouseEvents: false,
    onSwipeUp: function onSwipeUp() {},
    onSwipeDown: function onSwipeDown() {},
    onSwipeLeft: function onSwipeLeft() {},
    onSwipeRight: function onSwipeRight() {},
    onSwipeStart: function onSwipeStart() {},
    onSwipeMove: function onSwipeMove() {},
    onSwipeEnd: function onSwipeEnd() {},
    innerRef: function innerRef() {},

    tolerance: 0
  };
  exports.default = ReactSwipe;
});

/***/ }),

/***/ 6130:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(8038);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2773);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _imageCoordinates = __webpack_require__(5476);

var _Image = __webpack_require__(6221);

var _EnlargedImage = __webpack_require__(3845);

var _utils = __webpack_require__(7996);

var _Point = __webpack_require__(8197);

var _Point2 = _interopRequireDefault(_Point);

var _styles = __webpack_require__(2022);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class(props) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

        _this.state = {
            isTransitionEntering: false,
            isTransitionActive: false,
            isTransitionLeaving: false,
            isTransitionDone: false
        };

        _this.timers = [];
        return _this;
    }

    _createClass(_class, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.scheduleCssTransition(nextProps);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.timers.forEach(function (timerId) {
                clearTimeout(timerId);
            });
        }
    }, {
        key: 'scheduleCssTransition',
        value: function scheduleCssTransition(nextProps) {
            var _this2 = this;

            var _props = this.props,
                fadeDurationInMs = _props.fadeDurationInMs,
                isActive = _props.isActive,
                isPositionOutside = _props.isPositionOutside;

            var willIsActiveChange = isActive !== nextProps.isActive;
            var willIsPositionOutsideChange = isPositionOutside !== nextProps.isPositionOutside;

            if (!willIsActiveChange && !willIsPositionOutsideChange) {
                return;
            }

            if (nextProps.isActive && !nextProps.isPositionOutside) {
                this.setState({
                    isTrainsitionDone: false,
                    isTransitionEntering: true
                });

                this.timers.push(setTimeout(function () {
                    _this2.setState({
                        isTransitionEntering: false,
                        isTransitionActive: true
                    });
                }, 0));
            } else {
                this.setState({
                    isTransitionLeaving: true,
                    isTransitionActive: false
                });

                this.timers.push(setTimeout(function () {
                    _this2.setState({
                        isTransitionDone: true,
                        isTransitionLeaving: false
                    });
                }, fadeDurationInMs));
            }
        }
    }, {
        key: 'getImageCoordinates',
        value: function getImageCoordinates() {
            var _props2 = this.props,
                cursorOffset = _props2.cursorOffset,
                largeImage = _props2.largeImage,
                containerDimensions = _props2.containerDimensions,
                position = _props2.position,
                smallImage = _props2.smallImage,
                isInPlaceMode = _props2.isInPlaceMode;


            if (isInPlaceMode) {
                return (0, _imageCoordinates.getInPlaceEnlargedImageCoordinates)({
                    containerDimensions: containerDimensions,
                    largeImage: largeImage,
                    position: position
                });
            }

            return (0, _imageCoordinates.getLensModeEnlargedImageCoordinates)({
                containerDimensions: containerDimensions,
                cursorOffset: cursorOffset,
                largeImage: largeImage,
                position: position,
                smallImage: smallImage
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props3 = this.props,
                containerClassName = _props3.containerClassName,
                imageClassName = _props3.imageClassName,
                isLazyLoaded = _props3.isLazyLoaded,
                largeImage = _props3.largeImage,
                _props3$largeImage = _props3.largeImage,
                _props3$largeImage$al = _props3$largeImage.alt,
                alt = _props3$largeImage$al === undefined ? '' : _props3$largeImage$al,
                _props3$largeImage$on = _props3$largeImage.onLoad,
                onLoad = _props3$largeImage$on === undefined ? _utils.noop : _props3$largeImage$on,
                _props3$largeImage$on2 = _props3$largeImage.onError,
                onError = _props3$largeImage$on2 === undefined ? _utils.noop : _props3$largeImage$on2;


            var component = _react2.default.createElement(
                'div',
                {
                    className: containerClassName,
                    style: this.containerStyle
                },
                _react2.default.createElement('img', {
                    alt: alt,
                    className: imageClassName,
                    src: largeImage.src,
                    srcSet: largeImage.srcSet,
                    sizes: largeImage.sizes,
                    style: this.imageStyle,
                    onLoad: onLoad,
                    onError: onError
                })
            );

            if (isLazyLoaded) {
                return this.isVisible ? component : null;
            }

            return component;
        }
    }, {
        key: 'isVisible',
        get: function get() {
            var _state = this.state,
                isTransitionEntering = _state.isTransitionEntering,
                isTransitionActive = _state.isTransitionActive,
                isTransitionLeaving = _state.isTransitionLeaving;


            return isTransitionEntering || isTransitionActive || isTransitionLeaving;
        }
    }, {
        key: 'containerStyle',
        get: function get() {
            var _props4 = this.props,
                containerStyle = _props4.containerStyle,
                containerDimensions = _props4.containerDimensions,
                fadeDurationInMs = _props4.fadeDurationInMs,
                isPortalRendered = _props4.isPortalRendered,
                isInPlaceMode = _props4.isInPlaceMode;
            var isTransitionActive = this.state.isTransitionActive;


            return (0, _styles.getEnlargedImageContainerStyle)({
                containerDimensions: containerDimensions,
                containerStyle: containerStyle,
                fadeDurationInMs: fadeDurationInMs,
                isTransitionActive: isTransitionActive,
                isInPlaceMode: isInPlaceMode,
                isPortalRendered: isPortalRendered
            });
        }
    }, {
        key: 'imageStyle',
        get: function get() {
            var _props5 = this.props,
                imageStyle = _props5.imageStyle,
                largeImage = _props5.largeImage;


            return (0, _styles.getEnlargedImageStyle)({
                imageCoordinates: this.getImageCoordinates(),
                imageStyle: imageStyle,
                largeImage: largeImage
            });
        }
    }]);

    return _class;
}(_react2.default.Component);

_class.displayName = 'EnlargedImage';
_class.defaultProps = {
    fadeDurationInMs: 0,
    isLazyLoaded: true
};
_class.propTypes = {
    containerClassName: _propTypes2.default.string,
    containerStyle: _propTypes2.default.object,
    cursorOffset: _Point2.default,
    position: _Point2.default,
    fadeDurationInMs: _propTypes2.default.number,
    imageClassName: _propTypes2.default.string,
    imageStyle: _propTypes2.default.object,
    isActive: _propTypes2.default.bool,
    isLazyLoaded: _propTypes2.default.bool,
    largeImage: _Image.LargeImageShape,
    containerDimensions: _EnlargedImage.ContainerDimensions,
    isPortalRendered: _propTypes2.default.bool,
    isInPlaceMode: _propTypes2.default.bool
};
exports["default"] = _class;

/***/ }),

/***/ 3359:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _detectIt = __webpack_require__(1193);

var _detectIt2 = _interopRequireDefault(_detectIt);

var _objectAssign = __webpack_require__(9891);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _propTypes = __webpack_require__(2773);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(8038);

var _react2 = _interopRequireDefault(_react);

var _reactCursorPosition = __webpack_require__(641);

var _reactCursorPosition2 = _interopRequireDefault(_reactCursorPosition);

var _RenderEnlargedImage = __webpack_require__(8061);

var _RenderEnlargedImage2 = _interopRequireDefault(_RenderEnlargedImage);

var _negativeSpace = __webpack_require__(7945);

var _negativeSpace2 = _interopRequireDefault(_negativeSpace);

var _positiveSpace = __webpack_require__(8810);

var _positiveSpace2 = _interopRequireDefault(_positiveSpace);

var _DisplayUntilActive = __webpack_require__(1597);

var _DisplayUntilActive2 = _interopRequireDefault(_DisplayUntilActive);

var _DefaultHint = __webpack_require__(9050);

var _DefaultHint2 = _interopRequireDefault(_DefaultHint);

var _lens = __webpack_require__(4034);

var _dimensions = __webpack_require__(6092);

var _styles = __webpack_require__(2022);

var _Image = __webpack_require__(6221);

var _EnlargedImage = __webpack_require__(3845);

var _utils = __webpack_require__(7996);

var _constants = __webpack_require__(7878);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactImageMagnify = function (_React$Component) {
    _inherits(ReactImageMagnify, _React$Component);

    function ReactImageMagnify(props) {
        _classCallCheck(this, ReactImageMagnify);

        var _this = _possibleConstructorReturn(this, (ReactImageMagnify.__proto__ || Object.getPrototypeOf(ReactImageMagnify)).call(this, props));

        var primaryInput = _detectIt2.default.primaryInput;
        var MOUSE = _constants.INPUT_TYPE.mouse,
            TOUCH = _constants.INPUT_TYPE.touch;


        _this.state = {
            smallImageWidth: 0,
            smallImageHeight: 0,
            detectedInputType: {
                isMouseDeteced: primaryInput === MOUSE,
                isTouchDetected: primaryInput === TOUCH
            }
        };

        _this.onSmallImageLoad = _this.onSmallImageLoad.bind(_this);
        _this.setSmallImageDimensionState = _this.setSmallImageDimensionState.bind(_this);
        _this.onDetectedInputTypeChanged = _this.onDetectedInputTypeChanged.bind(_this);
        return _this;
    }

    _createClass(ReactImageMagnify, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var isFluidWidth = this.props.smallImage.isFluidWidth;


            if (!isFluidWidth) {
                return;
            }

            this.setSmallImageDimensionState();
            window.addEventListener('resize', this.setSmallImageDimensionState);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('resize', this.setSmallImageDimensionState);
        }
    }, {
        key: 'onSmallImageLoad',
        value: function onSmallImageLoad(e) {
            var _props$smallImage = this.props.smallImage,
                _props$smallImage$onL = _props$smallImage.onLoad,
                onLoad = _props$smallImage$onL === undefined ? _utils.noop : _props$smallImage$onL,
                isFluidWidth = _props$smallImage.isFluidWidth;


            onLoad(e);

            if (!isFluidWidth) {
                return;
            }

            this.setSmallImageDimensionState();
        }
    }, {
        key: 'onDetectedInputTypeChanged',
        value: function onDetectedInputTypeChanged(detectedInputType) {
            this.setState({
                detectedInputType: detectedInputType
            });
        }
    }, {
        key: 'setSmallImageDimensionState',
        value: function setSmallImageDimensionState() {
            var _smallImageEl = this.smallImageEl,
                smallImageWidth = _smallImageEl.offsetWidth,
                smallImageHeight = _smallImageEl.offsetHeight;


            this.setState({
                smallImageWidth: smallImageWidth,
                smallImageHeight: smallImageHeight
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                className = _props.className,
                style = _props.style,
                hoverDelayInMs = _props.hoverDelayInMs,
                hoverOffDelayInMs = _props.hoverOffDelayInMs,
                isActivatedOnTouch = _props.isActivatedOnTouch,
                pressDuration = _props.pressDuration,
                pressMoveThreshold = _props.pressMoveThreshold,
                _props$smallImage$onE = _props.smallImage.onError,
                onError = _props$smallImage$onE === undefined ? _utils.noop : _props$smallImage$onE,
                imageClassName = _props.imageClassName,
                imageStyle = _props.imageStyle,
                lensStyle = _props.lensStyle,
                largeImage = _props.largeImage,
                enlargedImageContainerClassName = _props.enlargedImageContainerClassName,
                enlargedImageContainerStyle = _props.enlargedImageContainerStyle,
                enlargedImageClassName = _props.enlargedImageClassName,
                enlargedImageStyle = _props.enlargedImageStyle,
                enlargedImagePortalId = _props.enlargedImagePortalId,
                isEnlargedImagePortalEnabledForTouch = _props.isEnlargedImagePortalEnabledForTouch,
                fadeDurationInMs = _props.fadeDurationInMs,
                HintComponent = _props.hintComponent,
                isHintEnabled = _props.isHintEnabled,
                hintTextMouse = _props.hintTextMouse,
                hintTextTouch = _props.hintTextTouch,
                shouldHideHintAfterFirstActivation = _props.shouldHideHintAfterFirstActivation;


            var smallImage = this.smallImage;

            var isTouchDetected = this.state.detectedInputType.isTouchDetected;


            var cursorOffset = (0, _lens.getLensCursorOffset)(smallImage, largeImage, this.enlargedImageContainerDimensions);

            var Lens = this.lensComponent;

            return _react2.default.createElement(
                _reactCursorPosition2.default,
                {
                    className: className,
                    hoverDelayInMs: hoverDelayInMs,
                    hoverOffDelayInMs: hoverOffDelayInMs,
                    isActivatedOnTouch: isActivatedOnTouch,
                    onDetectedInputTypeChanged: this.onDetectedInputTypeChanged,
                    pressDuration: pressDuration,
                    pressMoveThreshold: pressMoveThreshold,
                    shouldStopTouchMovePropagation: true,
                    style: (0, _styles.getContainerStyle)(smallImage, style)
                },
                _react2.default.createElement('img', {
                    src: smallImage.src,
                    srcSet: smallImage.srcSet,
                    sizes: smallImage.sizes,
                    alt: smallImage.alt,
                    className: imageClassName,
                    style: (0, _styles.getSmallImageStyle)(smallImage, imageStyle),
                    ref: function ref(el) {
                        return _this2.smallImageEl = el;
                    },
                    onLoad: this.onSmallImageLoad,
                    onError: onError
                }),
                isHintEnabled && _react2.default.createElement(
                    _DisplayUntilActive2.default,
                    {
                        shouldHideAfterFirstActivation: shouldHideHintAfterFirstActivation
                    },
                    _react2.default.createElement(HintComponent, {
                        isTouchDetected: isTouchDetected,
                        hintTextMouse: hintTextMouse,
                        hintTextTouch: hintTextTouch
                    })
                ),
                this.shouldShowLens && _react2.default.createElement(Lens, {
                    cursorOffset: cursorOffset,
                    fadeDurationInMs: fadeDurationInMs,
                    smallImage: smallImage,
                    style: lensStyle
                }),
                _react2.default.createElement(_RenderEnlargedImage2.default, {
                    containerClassName: enlargedImageContainerClassName,
                    containerDimensions: this.enlargedImageContainerDimensions,
                    containerStyle: enlargedImageContainerStyle,
                    cursorOffset: cursorOffset,
                    fadeDurationInMs: fadeDurationInMs,
                    imageClassName: enlargedImageClassName,
                    imageStyle: enlargedImageStyle,
                    largeImage: largeImage,
                    smallImage: smallImage,
                    portalId: enlargedImagePortalId,
                    isPortalEnabledForTouch: isEnlargedImagePortalEnabledForTouch,
                    isTouchDetected: this.isTouchDetected,
                    isInPlaceMode: this.isInPlaceMode
                })
            );
        }
    }, {
        key: 'smallImage',
        get: function get() {
            var _props2 = this.props,
                smallImage = _props2.smallImage,
                isFluidWidth = _props2.smallImage.isFluidWidth;


            if (!isFluidWidth) {
                return smallImage;
            }

            var _state = this.state,
                fluidWidth = _state.smallImageWidth,
                fluidHeight = _state.smallImageHeight;


            return (0, _objectAssign2.default)({}, smallImage, {
                width: fluidWidth,
                height: fluidHeight
            });
        }
    }, {
        key: 'enlargedImagePlacement',
        get: function get() {
            var userDefinedEnlargedImagePosition = this.props.enlargedImagePosition;
            var isTouchDetected = this.state.detectedInputType.isTouchDetected;


            var computedEnlargedImagePosition = isTouchDetected ? _constants.ENLARGED_IMAGE_POSITION.over : _constants.ENLARGED_IMAGE_POSITION.beside;

            return userDefinedEnlargedImagePosition || computedEnlargedImagePosition;
        }
    }, {
        key: 'isInPlaceMode',
        get: function get() {
            var OVER = _constants.ENLARGED_IMAGE_POSITION.over;

            return this.enlargedImagePlacement === OVER;
        }
    }, {
        key: 'enlargedImageContainerDimensions',
        get: function get() {
            var _props$enlargedImageC = this.props.enlargedImageContainerDimensions,
                containerWidth = _props$enlargedImageC.width,
                containerHeight = _props$enlargedImageC.height;
            var _smallImage = this.smallImage,
                smallImageWidth = _smallImage.width,
                smallImageHeight = _smallImage.height;

            var isInPlaceMode = this.isInPlaceMode;

            return {
                width: (0, _dimensions.getEnlargedImageContainerDimension)({
                    containerDimension: containerWidth,
                    smallImageDimension: smallImageWidth,
                    isInPlaceMode: isInPlaceMode
                }),
                height: (0, _dimensions.getEnlargedImageContainerDimension)({
                    containerDimension: containerHeight,
                    smallImageDimension: smallImageHeight,
                    isInPlaceMode: isInPlaceMode
                })
            };
        }
    }, {
        key: 'isTouchDetected',
        get: function get() {
            var isTouchDetected = this.state.detectedInputType.isTouchDetected;


            return isTouchDetected;
        }
    }, {
        key: 'shouldShowLens',
        get: function get() {
            return !this.isInPlaceMode && !this.isTouchDetected;
        }
    }, {
        key: 'lensComponent',
        get: function get() {
            var _props3 = this.props,
                shouldUsePositiveSpaceLens = _props3.shouldUsePositiveSpaceLens,
                lensComponent = _props3.lensComponent;


            if (lensComponent) {
                return lensComponent;
            }

            if (shouldUsePositiveSpaceLens) {
                return _positiveSpace2.default;
            }

            return _negativeSpace2.default;
        }
    }]);

    return ReactImageMagnify;
}(_react2.default.Component);

ReactImageMagnify.propTypes = {
    className: _propTypes2.default.string,
    style: _propTypes2.default.object,
    hoverDelayInMs: _propTypes2.default.number,
    hoverOffDelayInMs: _propTypes2.default.number,
    fadeDurationInMs: _propTypes2.default.number,
    pressDuration: _propTypes2.default.number,
    pressMoveThreshold: _propTypes2.default.number,
    isActivatedOnTouch: _propTypes2.default.bool,
    imageClassName: _propTypes2.default.string,
    imageStyle: _propTypes2.default.object,
    lensStyle: _propTypes2.default.object,
    lensComponent: _propTypes2.default.func,
    shouldUsePositiveSpaceLens: _propTypes2.default.bool,
    smallImage: _Image.SmallImageShape,
    largeImage: _Image.LargeImageShape,
    enlargedImageContainerClassName: _propTypes2.default.string,
    enlargedImageContainerStyle: _propTypes2.default.object,
    enlargedImageClassName: _propTypes2.default.string,
    enlargedImageStyle: _propTypes2.default.object,
    enlargedImageContainerDimensions: _EnlargedImage.EnlargedImageContainerDimensions,
    enlargedImagePosition: _EnlargedImage.EnlargedImagePosition,
    enlargedImagePortalId: _propTypes2.default.string,
    isEnlargedImagePortalEnabledForTouch: _propTypes2.default.bool,
    hintComponent: _propTypes2.default.func,
    hintTextMouse: _propTypes2.default.string,
    hintTextTouch: _propTypes2.default.string,
    isHintEnabled: _propTypes2.default.bool,
    shouldHideHintAfterFirstActivation: _propTypes2.default.bool
};
ReactImageMagnify.defaultProps = {
    enlargedImageContainerDimensions: {
        width: '100%',
        height: '100%'
    },
    isEnlargedImagePortalEnabledForTouch: false,
    fadeDurationInMs: 300,
    hintComponent: _DefaultHint2.default,
    shouldHideHintAfterFirstActivation: true,
    isHintEnabled: false,
    hintTextMouse: 'Hover to Zoom',
    hintTextTouch: 'Long-Touch to Zoom',
    hoverDelayInMs: 250,
    hoverOffDelayInMs: 150,
    shouldUsePositiveSpaceLens: false
};
exports.Z = ReactImageMagnify;

/***/ }),

/***/ 8061:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(8038);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8704);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(2773);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _objectAssign = __webpack_require__(9891);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _EnlargedImage = __webpack_require__(6130);

var _EnlargedImage2 = _interopRequireDefault(_EnlargedImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderEnlargedImage = function (_Component) {
    _inherits(RenderEnlargedImage, _Component);

    function RenderEnlargedImage() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, RenderEnlargedImage);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RenderEnlargedImage.__proto__ || Object.getPrototypeOf(RenderEnlargedImage)).call.apply(_ref, [this].concat(args))), _this), _this.state = { isMounted: false }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(RenderEnlargedImage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({ isMounted: true });

            if (this.isPortalRendered) {
                var portalId = this.props.portalId;

                this.portalElement = document.getElementById(portalId);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            if (!this.isMounted) {
                return null;
            }

            var props = this.compositProps;

            if (this.isPortalRendered) {
                return _reactDom2.default.createPortal(_react2.default.createElement(_EnlargedImage2.default, props), this.portalElement);
            }

            return _react2.default.createElement(_EnlargedImage2.default, props);
        }
    }, {
        key: 'isPortalIdImplemented',
        get: function get() {
            return !!this.props.portalId;
        }
    }, {
        key: 'isPortalRendered',
        get: function get() {
            var _props = this.props,
                isPortalEnabledForTouch = _props.isPortalEnabledForTouch,
                isTouchDetected = _props.isTouchDetected;


            if (!this.isPortalIdImplemented) {
                return false;
            }

            if (!isTouchDetected) {
                return true;
            }

            if (isPortalEnabledForTouch) {
                return true;
            }

            return false;
        }
    }, {
        key: 'isMounted',
        get: function get() {
            return this.state.isMounted;
        }
    }, {
        key: 'compositProps',
        get: function get() {
            return (0, _objectAssign2.default)({}, this.props, { isPortalRendered: this.isPortalRendered });
        }
    }]);

    return RenderEnlargedImage;
}(_react.Component);

RenderEnlargedImage.propTypes = {
    isPortalEnabledForTouch: _propTypes2.default.bool.isRequired,
    isTouchDetected: _propTypes2.default.bool.isRequired,
    portalId: _propTypes2.default.string
};
exports["default"] = RenderEnlargedImage;

/***/ }),

/***/ 7878:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var INPUT_TYPE = exports.INPUT_TYPE = {
    mouse: 'mouse',
    touch: 'touch'
};

var ENLARGED_IMAGE_POSITION = exports.ENLARGED_IMAGE_POSITION = {
    over: 'over',
    beside: 'beside'
};

/***/ }),

/***/ 9050:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(8038);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2773);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DefaultHint(_ref) {
    var isTouchDetected = _ref.isTouchDetected,
        hintTextMouse = _ref.hintTextMouse,
        hintTextTouch = _ref.hintTextTouch;

    return _react2.default.createElement(
        'div',
        { style: {
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                position: 'absolute',
                bottom: '25px'
            } },
        _react2.default.createElement(
            'div',
            { style: {
                    display: 'flex',
                    alignItems: 'center',
                    padding: '5px 10px',
                    backgroundColor: '#333',
                    borderRadius: '10px',
                    opacity: '0.90'
                } },
            _react2.default.createElement('img', {
                style: {
                    width: '25px',
                    height: '25px'
                },
                src: 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ5MC4yIDQ5MC4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OTAuMiA0OTAuMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTQxOC41LDQxOC41Yzk1LjYtOTUuNiw5NS42LTI1MS4yLDAtMzQ2LjhzLTI1MS4yLTk1LjYtMzQ2LjgsMHMtOTUuNiwyNTEuMiwwLDM0Ni44UzMyMi45LDUxNC4xLDQxOC41LDQxOC41eiBNODksODkgICAgYzg2LjEtODYuMSwyMjYuMS04Ni4xLDMxMi4yLDBzODYuMSwyMjYuMSwwLDMxMi4ycy0yMjYuMSw4Ni4xLTMxMi4yLDBTMywxNzUuMSw4OSw4OXoiIGZpbGw9IiNGRkZGRkYiLz4KCQk8cGF0aCBkPSJNMjQ1LjEsMzM2LjljMy40LDAsNi40LTEuNCw4LjctMy42YzIuMi0yLjIsMy42LTUuMywzLjYtOC43di02Ny4zaDY3LjNjMy40LDAsNi40LTEuNCw4LjctMy42YzIuMi0yLjIsMy42LTUuMywzLjYtOC43ICAgIGMwLTYuOC01LjUtMTIuMy0xMi4yLTEyLjJoLTY3LjN2LTY3LjNjMC02LjgtNS41LTEyLjMtMTIuMi0xMi4yYy02LjgsMC0xMi4zLDUuNS0xMi4yLDEyLjJ2NjcuM2gtNjcuM2MtNi44LDAtMTIuMyw1LjUtMTIuMiwxMi4yICAgIGMwLDYuOCw1LjUsMTIuMywxMi4yLDEyLjJoNjcuM3Y2Ny4zQzIzMi44LDMzMS40LDIzOC4zLDMzNi45LDI0NS4xLDMzNi45eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=',
                alt: ''
            }),
            _react2.default.createElement(
                'span',
                { style: {
                        padding: '2px 0 0 5px',
                        fontFamily: 'Arial, sans-serif',
                        fontSize: '14px',
                        color: 'white'
                    } },
                isTouchDetected ? hintTextTouch : hintTextMouse
            )
        )
    );
}

DefaultHint.displayName = 'DefaultHint';

DefaultHint.propTypes = {
    isTouchDetected: _propTypes2.default.bool,
    hintTextMouse: _propTypes2.default.string,
    hintTextTouch: _propTypes2.default.string
};

exports["default"] = DefaultHint;

/***/ }),

/***/ 1597:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(8038);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2773);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DisplayUntilActive = function (_React$Component) {
    _inherits(DisplayUntilActive, _React$Component);

    function DisplayUntilActive(props) {
        _classCallCheck(this, DisplayUntilActive);

        var _this = _possibleConstructorReturn(this, (DisplayUntilActive.__proto__ || Object.getPrototypeOf(DisplayUntilActive)).call(this, props));

        _this.hasShown = false;
        return _this;
    }

    _createClass(DisplayUntilActive, [{
        key: 'setHasShown',
        value: function setHasShown() {
            this.hasShown = true;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                isActive = _props.isActive,
                shouldHideAfterFirstActivation = _props.shouldHideAfterFirstActivation,
                hasShown = this.hasShown;

            var shouldShow = !isActive && (!hasShown || !shouldHideAfterFirstActivation);

            if (isActive && !hasShown) {
                this.setHasShown();
            }

            return shouldShow ? children : null;
        }
    }]);

    return DisplayUntilActive;
}(_react2.default.Component);

DisplayUntilActive.propTypes = {
    children: _propTypes2.default.element,
    isActive: _propTypes2.default.bool,
    shouldHideAfterFirstActivation: _propTypes2.default.bool
};
DisplayUntilActive.defaultProps = {
    shouldHideAfterFirstActivation: true
};
exports["default"] = DisplayUntilActive;

/***/ }),

/***/ 4848:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(8038);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2773);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _objectAssign = __webpack_require__(9891);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Lens = function Lens(props) {
    var fadeDurationInMs = props.fadeDurationInMs,
        isActive = props.isActive,
        isPositionOutside = props.isPositionOutside,
        parentSpecifiedStyle = props.style;


    var defaultStyle = {
        width: 'auto',
        height: 'auto',
        top: 'auto',
        right: 'auto',
        bottom: 'auto',
        left: 'auto',
        display: 'block'
    };

    var computedStyle = {
        position: 'absolute',
        opacity: isActive && !isPositionOutside ? 1 : 0,
        transition: 'opacity ' + fadeDurationInMs + 'ms ease-in'
    };

    var compositStyle = (0, _objectAssign2.default)({}, defaultStyle, parentSpecifiedStyle, computedStyle);

    return _react2.default.createElement('div', { style: compositStyle });
};

Lens.propTypes = {
    style: _propTypes2.default.object,
    fadeDurationInMs: _propTypes2.default.number,
    isActive: _propTypes2.default.bool,
    translateX: _propTypes2.default.number,
    translateY: _propTypes2.default.number,
    userStyle: _propTypes2.default.object
};

Lens.defaultProps = {
    isActive: false,
    fadeDurationInMs: 0,
    translateX: 0,
    translateY: 0
};

exports["default"] = Lens;

/***/ }),

/***/ 887:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(8038);

var _react2 = _interopRequireDefault(_react);

var _objectAssign = __webpack_require__(9891);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _clamp = __webpack_require__(4552);

var _clamp2 = _interopRequireDefault(_clamp);

var _Lens = __webpack_require__(4848);

var _Lens2 = _interopRequireDefault(_Lens);

var _Lens3 = __webpack_require__(7279);

var _Lens4 = _interopRequireDefault(_Lens3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LensBottom = function LensBottom(_ref) {
    var cursorOffset = _ref.cursorOffset,
        position = _ref.position,
        fadeDurationInMs = _ref.fadeDurationInMs,
        isActive = _ref.isActive,
        isPositionOutside = _ref.isPositionOutside,
        smallImage = _ref.smallImage,
        parentSpecifiedStyle = _ref.style;


    var clearLensHeight = cursorOffset.y * 2;
    var computedHeight = smallImage.height - position.y - cursorOffset.y;
    var maxHeight = smallImage.height - clearLensHeight;
    var height = (0, _clamp2.default)(computedHeight, 0, maxHeight);
    var clearLensBottom = position.y + cursorOffset.y;
    var top = Math.max(clearLensBottom, clearLensHeight);
    var computedStyle = {
        height: height + 'px',
        width: '100%',
        top: top + 'px'
    };

    return _react2.default.createElement(_Lens2.default, {
        fadeDurationInMs: fadeDurationInMs,
        isActive: isActive,
        isPositionOutside: isPositionOutside,
        style: (0, _objectAssign2.default)({}, parentSpecifiedStyle, computedStyle)
    });
};

LensBottom.propTypes = _Lens4.default;

exports["default"] = LensBottom;

/***/ }),

/***/ 8159:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(8038);

var _react2 = _interopRequireDefault(_react);

var _objectAssign = __webpack_require__(9891);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _clamp = __webpack_require__(4552);

var _clamp2 = _interopRequireDefault(_clamp);

var _Lens = __webpack_require__(4848);

var _Lens2 = _interopRequireDefault(_Lens);

var _Lens3 = __webpack_require__(7279);

var _Lens4 = _interopRequireDefault(_Lens3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LensLeft = function LensLeft(_ref) {
    var cursorOffset = _ref.cursorOffset,
        position = _ref.position,
        fadeDurationInMs = _ref.fadeDurationInMs,
        isActive = _ref.isActive,
        isPositionOutside = _ref.isPositionOutside,
        smallImage = _ref.smallImage,
        parentSpecifiedStyle = _ref.style;

    var clearLensHeight = cursorOffset.y * 2;
    var clearLensWidth = cursorOffset.x * 2;
    var maxHeight = smallImage.height - clearLensHeight;
    var maxWidth = smallImage.width - clearLensWidth;
    var height = clearLensHeight;
    var width = (0, _clamp2.default)(position.x - cursorOffset.x, 0, maxWidth);
    var top = (0, _clamp2.default)(position.y - cursorOffset.y, 0, maxHeight);
    var computedStyle = {
        height: height + 'px',
        width: width + 'px',
        top: top + 'px',
        left: '0px'
    };

    return _react2.default.createElement(_Lens2.default, {
        fadeDurationInMs: fadeDurationInMs,
        isActive: isActive,
        isPositionOutside: isPositionOutside,
        style: (0, _objectAssign2.default)({}, parentSpecifiedStyle, computedStyle)
    });
};

LensLeft.propTypes = _Lens4.default;

exports["default"] = LensLeft;

/***/ }),

/***/ 8429:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(8038);

var _react2 = _interopRequireDefault(_react);

var _objectAssign = __webpack_require__(9891);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _clamp = __webpack_require__(4552);

var _clamp2 = _interopRequireDefault(_clamp);

var _Lens = __webpack_require__(4848);

var _Lens2 = _interopRequireDefault(_Lens);

var _Lens3 = __webpack_require__(7279);

var _Lens4 = _interopRequireDefault(_Lens3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LensRight = function LensRight(_ref) {
    var cursorOffset = _ref.cursorOffset,
        position = _ref.position,
        fadeDurationInMs = _ref.fadeDurationInMs,
        isActive = _ref.isActive,
        isPositionOutside = _ref.isPositionOutside,
        smallImage = _ref.smallImage,
        parentSpecifiedStyle = _ref.style;

    var clearLensHeight = cursorOffset.y * 2;
    var clearLensWidth = cursorOffset.x * 2;
    var maxHeight = smallImage.height - clearLensHeight;
    var maxWidth = smallImage.width - clearLensWidth;
    var height = clearLensHeight;
    var width = (0, _clamp2.default)(smallImage.width - position.x - cursorOffset.x, 0, maxWidth);
    var top = (0, _clamp2.default)(position.y - cursorOffset.y, 0, maxHeight);
    var computedStyle = {
        height: height + 'px',
        width: width + 'px',
        top: top + 'px',
        right: '0px'
    };

    return _react2.default.createElement(_Lens2.default, {
        fadeDurationInMs: fadeDurationInMs,
        isActive: isActive,
        isPositionOutside: isPositionOutside,
        style: (0, _objectAssign2.default)({}, parentSpecifiedStyle, computedStyle)
    });
};

LensRight.propTypes = _Lens4.default;

exports["default"] = LensRight;

/***/ }),

/***/ 5169:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(8038);

var _react2 = _interopRequireDefault(_react);

var _clamp = __webpack_require__(4552);

var _clamp2 = _interopRequireDefault(_clamp);

var _objectAssign = __webpack_require__(9891);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _Lens = __webpack_require__(4848);

var _Lens2 = _interopRequireDefault(_Lens);

var _Lens3 = __webpack_require__(7279);

var _Lens4 = _interopRequireDefault(_Lens3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LensTop = function LensTop(_ref) {
    var cursorOffset = _ref.cursorOffset,
        position = _ref.position,
        fadeDurationInMs = _ref.fadeDurationInMs,
        isActive = _ref.isActive,
        isPositionOutside = _ref.isPositionOutside,
        smallImage = _ref.smallImage,
        parentSpecifiedStyle = _ref.style;

    var clearLensHeight = cursorOffset.y * 2;
    var maxHeight = smallImage.height - clearLensHeight;
    var height = (0, _clamp2.default)(position.y - cursorOffset.y, 0, maxHeight);
    var computedStyle = {
        height: height + 'px',
        width: '100%',
        top: '0px'
    };

    return _react2.default.createElement(_Lens2.default, {
        fadeDurationInMs: fadeDurationInMs,
        isActive: isActive,
        isPositionOutside: isPositionOutside,
        style: (0, _objectAssign2.default)({}, parentSpecifiedStyle, computedStyle)
    });
};

LensTop.propTypes = _Lens4.default;

exports["default"] = LensTop;

/***/ }),

/***/ 7945:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = NegativeSpaceLens;

var _react = __webpack_require__(8038);

var _react2 = _interopRequireDefault(_react);

var _objectAssign = __webpack_require__(9891);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _LensTop = __webpack_require__(5169);

var _LensTop2 = _interopRequireDefault(_LensTop);

var _LensLeft = __webpack_require__(8159);

var _LensLeft2 = _interopRequireDefault(_LensLeft);

var _LensRight = __webpack_require__(8429);

var _LensRight2 = _interopRequireDefault(_LensRight);

var _LensBottom = __webpack_require__(887);

var _LensBottom2 = _interopRequireDefault(_LensBottom);

var _Lens = __webpack_require__(7279);

var _Lens2 = _interopRequireDefault(_Lens);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NegativeSpaceLens(inputProps) {
    var userSpecifiedStyle = inputProps.style;


    var compositLensStyle = (0, _objectAssign2.default)({ backgroundColor: 'rgba(0,0,0,.4)' }, userSpecifiedStyle);

    var props = (0, _objectAssign2.default)({}, inputProps, { style: compositLensStyle });

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_LensTop2.default, props),
        _react2.default.createElement(_LensLeft2.default, props),
        _react2.default.createElement(_LensRight2.default, props),
        _react2.default.createElement(_LensBottom2.default, props)
    );
}

NegativeSpaceLens.propTypes = _Lens2.default;

/***/ }),

/***/ 1879:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = 'data:image/gif;base64,R0lGODlhZABkAPABAHOf4fj48yH5BAEAAAEALAAAAABkAGQAAAL+jI+py+0PowOB2oqvznz7Dn5iSI7SiabqWrbj68bwTLL2jUv0Lvf8X8sJhzmg0Yc8mojM5kmZjEKPzqp1MZVqs7Cr98rdisOXr7lJHquz57YwDV8j3XRb/C7v1vcovD8PwicY8VcISDGY2GDIKKf4mNAoKQZZeXg5aQk5yRml+dgZ2vOpKGraQpp4uhqYKsgKi+H6iln7N8sXG4u7p2s7ykvnyxos/DuMWtyGfKq8fAwd5nzGHN067VUtiv2lbV3GDfY9DhQu7p1pXoU+rr5ODk/j7sSePk9Ub33PlN+4jx8v4JJ/RQQa3EDwzcGFiBLi6AfN4UOGCyXegGjIoh0fisQ0rsD4y+NHjgZFqgB5y2Qfks1UPmEZ0OVLlIcKAAA7';

/***/ }),

/***/ 8810:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(8038);

var _react2 = _interopRequireDefault(_react);

var _objectAssign = __webpack_require__(9891);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _Lens = __webpack_require__(7279);

var _Lens2 = _interopRequireDefault(_Lens);

var _clamp = __webpack_require__(4552);

var _clamp2 = _interopRequireDefault(_clamp);

var _texturedLensDataUri = __webpack_require__(1879);

var _texturedLensDataUri2 = _interopRequireDefault(_texturedLensDataUri);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PositiveSpaceLens = function (_Component) {
    _inherits(PositiveSpaceLens, _Component);

    function PositiveSpaceLens() {
        _classCallCheck(this, PositiveSpaceLens);

        return _possibleConstructorReturn(this, (PositiveSpaceLens.__proto__ || Object.getPrototypeOf(PositiveSpaceLens)).apply(this, arguments));
    }

    _createClass(PositiveSpaceLens, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { style: this.compositStyle });
        }
    }, {
        key: 'dimensions',
        get: function get() {
            var _props$cursorOffset = this.props.cursorOffset,
                cursorOffsetX = _props$cursorOffset.x,
                cursorOffsetY = _props$cursorOffset.y;


            return {
                width: cursorOffsetX * 2,
                height: cursorOffsetY * 2
            };
        }
    }, {
        key: 'positionOffset',
        get: function get() {
            var _props = this.props,
                _props$cursorOffset2 = _props.cursorOffset,
                cursorOffsetX = _props$cursorOffset2.x,
                cursorOffsetY = _props$cursorOffset2.y,
                _props$position = _props.position,
                positionX = _props$position.x,
                positionY = _props$position.y,
                _props$smallImage = _props.smallImage,
                imageHeight = _props$smallImage.height,
                imageWidth = _props$smallImage.width;
            var _dimensions = this.dimensions,
                width = _dimensions.width,
                height = _dimensions.height;


            var top = positionY - cursorOffsetY;
            var left = positionX - cursorOffsetX;
            var maxTop = imageHeight - height;
            var maxLeft = imageWidth - width;
            var minOffset = 0;

            return {
                top: (0, _clamp2.default)(top, minOffset, maxTop),
                left: (0, _clamp2.default)(left, minOffset, maxLeft)
            };
        }
    }, {
        key: 'defaultStyle',
        get: function get() {
            var fadeDurationInMs = this.props.fadeDurationInMs;


            return {
                transition: 'opacity ' + fadeDurationInMs + 'ms ease-in',
                backgroundImage: 'url(' + _texturedLensDataUri2.default + ')'
            };
        }
    }, {
        key: 'userSpecifiedStyle',
        get: function get() {
            var style = this.props.style;


            return style;
        }
    }, {
        key: 'isVisible',
        get: function get() {
            var _props2 = this.props,
                isActive = _props2.isActive,
                isPositionOutside = _props2.isPositionOutside;


            return isActive && !isPositionOutside;
        }
    }, {
        key: 'priorityStyle',
        get: function get() {
            var _dimensions2 = this.dimensions,
                width = _dimensions2.width,
                height = _dimensions2.height;
            var _positionOffset = this.positionOffset,
                top = _positionOffset.top,
                left = _positionOffset.left;


            return {
                position: 'absolute',
                top: top + 'px',
                left: left + 'px',
                width: width + 'px',
                height: height + 'px',
                opacity: this.isVisible ? 1 : 0
            };
        }
    }, {
        key: 'compositStyle',
        get: function get() {
            return (0, _objectAssign2.default)(this.defaultStyle, this.userSpecifiedStyle, this.priorityStyle);
        }
    }]);

    return PositiveSpaceLens;
}(_react.Component);

PositiveSpaceLens.propTypes = _Lens2.default;
PositiveSpaceLens.defaultProps = {
    style: {}
};
exports["default"] = PositiveSpaceLens;

/***/ }),

/***/ 6092:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isPercentageFormat = isPercentageFormat;
exports.convertPercentageToDecimal = convertPercentageToDecimal;
exports.getEnlargedImageContainerDimension = getEnlargedImageContainerDimension;
function isPercentageFormat(val) {
    return typeof val === 'string' && /^\d+%$/.test(val);
}

function convertPercentageToDecimal(percentage) {
    return parseInt(percentage) / 100;
}

function getEnlargedImageContainerDimension(_ref) {
    var containerDimension = _ref.containerDimension,
        smallImageDimension = _ref.smallImageDimension,
        isInPlaceMode = _ref.isInPlaceMode;

    if (isInPlaceMode) {
        return smallImageDimension;
    }

    if (isPercentageFormat(containerDimension)) {
        return smallImageDimension * convertPercentageToDecimal(containerDimension);
    }

    return containerDimension;
}

/***/ }),

/***/ 5476:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getLensModeEnlargedImageCoordinates = getLensModeEnlargedImageCoordinates;
exports.getInPlaceEnlargedImageCoordinates = getInPlaceEnlargedImageCoordinates;

var _clamp = __webpack_require__(4552);

var _clamp2 = _interopRequireDefault(_clamp);

var _imageRatio = __webpack_require__(2564);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getMinCoordinates(container, largeImage) {
    return {
        x: (largeImage.width - container.width) * -1,
        y: (largeImage.height - container.height) * -1
    };
}

function getMaxCoordinates() {
    return {
        x: 0,
        y: 0
    };
}

function getLensModeEnlargedImageCoordinates(_ref) {
    var containerDimensions = _ref.containerDimensions,
        lensCursorOffset = _ref.cursorOffset,
        largeImage = _ref.largeImage,
        position = _ref.position,
        smallImage = _ref.smallImage;

    var adjustedPosition = getCursorPositionAdjustedForLens(position, lensCursorOffset);
    var ratio = (0, _imageRatio.getSmallToLargeImageRatio)(smallImage, largeImage);
    var coordinates = {
        x: Math.round(adjustedPosition.x * ratio.x) * -1,
        y: Math.round(adjustedPosition.y * ratio.y) * -1
    };
    var minCoordinates = getMinCoordinates(containerDimensions, largeImage);
    var maxCoordinates = getMaxCoordinates();

    return clampImageCoordinates(coordinates, minCoordinates, maxCoordinates);
}

function getInPlaceEnlargedImageCoordinates(_ref2) {
    var containerDimensions = _ref2.containerDimensions,
        largeImage = _ref2.largeImage,
        position = _ref2.position;

    var minCoordinates = getMinCoordinates(containerDimensions, largeImage);
    var maxCoordinates = getMaxCoordinates();
    var ratio = (0, _imageRatio.getContainerToImageRatio)(containerDimensions, largeImage);
    var coordinates = {
        x: Math.round(position.x * ratio.x) * -1,
        y: Math.round(position.y * ratio.y) * -1
    };

    return clampImageCoordinates(coordinates, minCoordinates, maxCoordinates);
}

function clampImageCoordinates(imageCoordinates, minCoordinates, maxCoordinates) {
    return {
        x: (0, _clamp2.default)(imageCoordinates.x, minCoordinates.x, maxCoordinates.x),
        y: (0, _clamp2.default)(imageCoordinates.y, minCoordinates.y, maxCoordinates.y)
    };
}

function getCursorPositionAdjustedForLens(position, lensCursorOffset) {
    return {
        x: position.x - lensCursorOffset.x,
        y: position.y - lensCursorOffset.y
    };
}

/***/ }),

/***/ 2564:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getSmallToLargeImageRatio = getSmallToLargeImageRatio;
exports.getLargeToSmallImageRatio = getLargeToSmallImageRatio;
exports.getContainerToImageRatio = getContainerToImageRatio;
function getSmallToLargeImageRatio(smallImage, largeImage) {
    return getSmallToLargeElementRatio(smallImage, largeImage);
}

function getLargeToSmallImageRatio(smallImage, largeImage) {
    return {
        x: smallImage.width / largeImage.width,
        y: smallImage.height / largeImage.height
    };
}

function getContainerToImageRatio(container, image) {
    return getSmallToLargeElementRatio(container, {
        width: image.width - container.width,
        height: image.height - container.height
    });
}

function getSmallToLargeElementRatio(smallElement, largeElement) {
    return {
        x: largeElement.width / smallElement.width,
        y: largeElement.height / smallElement.height
    };
}

/***/ }),

/***/ 4034:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getLensCursorOffset = getLensCursorOffset;

var _imageRatio = __webpack_require__(2564);

function getLensCursorOffset(smallImage, largeImage, enlargedImageContainerDimensions) {
    var ratio = (0, _imageRatio.getLargeToSmallImageRatio)(smallImage, largeImage);
    return {
        x: getLensCursorOffsetDimension(enlargedImageContainerDimensions.width, ratio.x),
        y: getLensCursorOffsetDimension(enlargedImageContainerDimensions.height, ratio.y)
    };
}

function getLensCursorOffsetDimension(enlargedImageContainerDimension, ratio) {
    return Math.round(enlargedImageContainerDimension * ratio / 2);
}

/***/ }),

/***/ 2022:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getContainerStyle = getContainerStyle;
exports.getSmallImageStyle = getSmallImageStyle;
exports.getEnlargedImageContainerStyle = getEnlargedImageContainerStyle;
exports.getEnlargedImageStyle = getEnlargedImageStyle;

var _objectAssign = __webpack_require__(9891);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _fastDeepEqual = __webpack_require__(1508);

var _fastDeepEqual2 = _interopRequireDefault(_fastDeepEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getContainerStyle(smallImage, userSpecifiedStyle) {
    var isSmallImageFluidWidth = smallImage.isFluidWidth,
        width = smallImage.width,
        height = smallImage.height;


    var fluidWidthContainerStyle = {
        width: 'auto',
        height: 'auto',
        fontSize: '0px',
        position: 'relative'
    };

    var fixedWidthContainerStyle = {
        width: width + 'px',
        height: height + 'px',
        position: 'relative'
    };

    var priorityContainerStyle = isSmallImageFluidWidth ? fluidWidthContainerStyle : fixedWidthContainerStyle;

    var compositContainerStyle = (0, _objectAssign2.default)({ cursor: 'crosshair' }, userSpecifiedStyle, priorityContainerStyle);

    return compositContainerStyle;
}

function getSmallImageStyle(smallImage, style) {
    var isSmallImageFluidWidth = smallImage.isFluidWidth,
        width = smallImage.width,
        height = smallImage.height;


    var fluidWidthSmallImageStyle = {
        width: '100%',
        height: 'auto',
        display: 'block',
        pointerEvents: 'none'
    };

    var fixedWidthSmallImageStyle = {
        width: width + 'px',
        height: height + 'px',
        pointerEvents: 'none'
    };

    var prioritySmallImageStyle = isSmallImageFluidWidth ? fluidWidthSmallImageStyle : fixedWidthSmallImageStyle;

    var compositSmallImageStyle = (0, _objectAssign2.default)({}, style, prioritySmallImageStyle);

    return compositSmallImageStyle;
}

function getPrimaryEnlargedImageContainerStyle(isInPlaceMode, isPortalRendered) {
    var baseContainerStyle = {
        overflow: 'hidden'
    };

    if (isPortalRendered) {
        return baseContainerStyle;
    }

    var sharedPositionStyle = {
        position: 'absolute',
        top: '0px'
    };

    if (isInPlaceMode) {
        return (0, _objectAssign2.default)(baseContainerStyle, sharedPositionStyle, { left: '0px' });
    }

    return (0, _objectAssign2.default)(baseContainerStyle, sharedPositionStyle, {
        left: '100%',
        marginLeft: '10px',
        border: '1px solid #d6d6d6'
    });
}

function getPriorityEnlargedImageContainerStyle(params) {
    var containerDimensions = params.containerDimensions,
        fadeDurationInMs = params.fadeDurationInMs,
        isTransitionActive = params.isTransitionActive;


    return {
        width: containerDimensions.width,
        height: containerDimensions.height,
        opacity: isTransitionActive ? 1 : 0,
        transition: 'opacity ' + fadeDurationInMs + 'ms ease-in',
        pointerEvents: 'none'
    };
}

var enlargedImageContainerStyleCache = {};

function getEnlargedImageContainerStyle(params) {
    var cache = enlargedImageContainerStyleCache;
    var _cache$params = cache.params,
        memoizedParams = _cache$params === undefined ? {} : _cache$params,
        memoizedStyle = cache.compositStyle;


    if ((0, _fastDeepEqual2.default)(memoizedParams, params)) {
        return memoizedStyle;
    }

    var containerDimensions = params.containerDimensions,
        userSpecifiedStyle = params.containerStyle,
        fadeDurationInMs = params.fadeDurationInMs,
        isTransitionActive = params.isTransitionActive,
        isInPlaceMode = params.isInPlaceMode,
        isPortalRendered = params.isPortalRendered;


    var primaryStyle = getPrimaryEnlargedImageContainerStyle(isInPlaceMode, isPortalRendered);
    var priorityStyle = getPriorityEnlargedImageContainerStyle({
        containerDimensions: containerDimensions,
        fadeDurationInMs: fadeDurationInMs,
        isTransitionActive: isTransitionActive
    });

    cache.compositStyle = (0, _objectAssign2.default)({}, primaryStyle, userSpecifiedStyle, priorityStyle);
    cache.params = params;

    return cache.compositStyle;
}

function getEnlargedImageStyle(params) {
    var imageCoordinates = params.imageCoordinates,
        userSpecifiedStyle = params.imageStyle,
        largeImage = params.largeImage;


    var translate = 'translate(' + imageCoordinates.x + 'px, ' + imageCoordinates.y + 'px)';

    var priorityStyle = {
        width: largeImage.width,
        height: largeImage.height,
        transform: translate,
        WebkitTransform: translate,
        msTransform: translate,
        pointerEvents: 'none'
    };

    var compositeImageStyle = (0, _objectAssign2.default)({}, userSpecifiedStyle, priorityStyle);

    return compositeImageStyle;
}

/***/ }),

/***/ 3845:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ContainerDimensions = exports.EnlargedImageContainerDimensions = exports.EnlargedImagePosition = undefined;

var _propTypes = __webpack_require__(2773);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = __webpack_require__(7878);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EnlargedImagePosition = exports.EnlargedImagePosition = _propTypes2.default.oneOf([_constants.ENLARGED_IMAGE_POSITION.beside, _constants.ENLARGED_IMAGE_POSITION.over]);

var EnlargedImageContainerDimensions = exports.EnlargedImageContainerDimensions = _propTypes2.default.shape({
    width: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    height: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
});

var ContainerDimensions = exports.ContainerDimensions = _propTypes2.default.shape({
    width: _propTypes2.default.number,
    height: _propTypes2.default.number
});

/***/ }),

/***/ 6221:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.SmallImageShape = exports.LargeImageShape = undefined;

var _propTypes = __webpack_require__(2773);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRequiredIf = __webpack_require__(7122);

var _reactRequiredIf2 = _interopRequireDefault(_reactRequiredIf);

var _objectAssign = __webpack_require__(9891);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseImageShape = {
    alt: _propTypes2.default.string,
    src: _propTypes2.default.string.isRequired,
    srcSet: _propTypes2.default.string,
    sizes: _propTypes2.default.string,
    onLoad: _propTypes2.default.func,
    onError: _propTypes2.default.func
};

var LargeImageShape = exports.LargeImageShape = _propTypes2.default.shape((0, _objectAssign2.default)({}, BaseImageShape, {
    width: _propTypes2.default.number.isRequired,
    height: _propTypes2.default.number.isRequired
}));

var SmallImageShape = exports.SmallImageShape = _propTypes2.default.shape((0, _objectAssign2.default)({}, BaseImageShape, {
    isFluidWidth: _propTypes2.default.bool,
    width: (0, _reactRequiredIf2.default)(_propTypes2.default.number, function (props) {
        return !props.isFluidWidth;
    }),
    height: (0, _reactRequiredIf2.default)(_propTypes2.default.number, function (props) {
        return !props.isFluidWidth;
    })
}));

/***/ }),

/***/ 7279:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _propTypes = __webpack_require__(2773);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Point = __webpack_require__(8197);

var _Point2 = _interopRequireDefault(_Point);

var _Image = __webpack_require__(6221);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports["default"] = {
    cursorOffset: _Point2.default,
    fadeDurationInMs: _propTypes2.default.number,
    isActive: _propTypes2.default.bool,
    isPositionOutside: _propTypes2.default.bool,
    position: _Point2.default,
    smallImage: _Image.SmallImageShape,
    style: _propTypes2.default.object
};

/***/ }),

/***/ 8197:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _propTypes = __webpack_require__(2773);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports["default"] = _propTypes2.default.shape({
    x: _propTypes2.default.number.isRequired,
    y: _propTypes2.default.number.isRequired
});

/***/ }),

/***/ 7996:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.noop = noop;
function noop() {}

/***/ }),

/***/ 1508:
/***/ ((module) => {

"use strict";


module.exports = function equal(a, b) {
  if (a === b) return true;

  var arrA = Array.isArray(a)
    , arrB = Array.isArray(b)
    , i;

  if (arrA && arrB) {
    if (a.length != b.length) return false;
    for (i = 0; i < a.length; i++)
      if (!equal(a[i], b[i])) return false;
    return true;
  }

  if (arrA != arrB) return false;

  if (a && b && typeof a === 'object' && typeof b === 'object') {
    var keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA && dateB) return a.getTime() == b.getTime();
    if (dateA != dateB) return false;

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA && regexpB) return a.toString() == b.toString();
    if (regexpA != regexpB) return false;

    for (i = 0; i < keys.length; i++)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = 0; i < keys.length; i++)
      if(!equal(a[keys[i]], b[keys[i]])) return false;

    return true;
  }

  return false;
};


/***/ }),

/***/ 1534:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(2653);
var invariant = __webpack_require__(4797);
var ReactPropTypesSecret = __webpack_require__(2730);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 2773:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(1534)();
}


/***/ }),

/***/ 2730:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 641:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(8038);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2773);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _objectAssign = __webpack_require__(9891);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _object = __webpack_require__(6608);

var _object2 = _interopRequireDefault(_object);

var _ElementRelativeCursorPosition = __webpack_require__(406);

var _ElementRelativeCursorPosition2 = _interopRequireDefault(_ElementRelativeCursorPosition);

var _addEventListener = __webpack_require__(6131);

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _constants = __webpack_require__(5550);

var constants = _interopRequireWildcard(_constants);

var _noop = __webpack_require__(4823);

var _noop2 = _interopRequireDefault(_noop);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class(props) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

        _initialiseProps.call(_this);

        _this.state = {
            detectedEnvironment: {
                isMouseDetected: false,
                isTouchDetected: false
            },
            elementDimensions: {
                width: 0,
                height: 0
            },
            isActive: false,
            isPositionOutside: true,
            position: {
                x: 0,
                y: 0
            }
        };

        _this.shouldGuardAgainstMouseEmulationByDevices = false;
        _this.eventListeners = [];
        _this.timers = [];
        _this.elementOffset = {
            x: 0,
            y: 0
        };

        _this.onTouchStart = _this.onTouchStart.bind(_this);
        _this.onTouchMove = _this.onTouchMove.bind(_this);
        _this.onTouchEnd = _this.onTouchEnd.bind(_this);
        _this.onTouchCancel = _this.onTouchCancel.bind(_this);
        _this.onMouseEnter = _this.onMouseEnter.bind(_this);
        _this.onMouseMove = _this.onMouseMove.bind(_this);
        _this.onMouseLeave = _this.onMouseLeave.bind(_this);
        return _this;
    }

    _createClass(_class, [{
        key: 'onTouchStart',
        value: function onTouchStart(e) {
            this.init();
            this.onTouchDetected();
            this.setShouldGuardAgainstMouseEmulationByDevices();

            var position = this.core.getCursorPosition(this.getTouchEvent(e));
            this.setPositionState(position);

            if (this.props.isActivatedOnTouch) {
                e.preventDefault();
                this.activate();
                return;
            }

            this.initPressEventCriteria(position);
            this.setPressEventTimer();
        }
    }, {
        key: 'onTouchMove',
        value: function onTouchMove(e) {
            if (!this.isCoreReady) {
                return;
            }

            var position = this.core.getCursorPosition(this.getTouchEvent(e));

            if (!this.state.isActive) {
                this.setPressEventCriteria(position);
                return;
            }

            this.setPositionState(position);
            e.preventDefault();

            if (this.props.shouldStopTouchMovePropagation) {
                e.stopPropagation();
            }
        }
    }, {
        key: 'onTouchEnd',
        value: function onTouchEnd() {
            this.deactivate();
            this.unsetShouldGuardAgainstMouseEmulationByDevices();
        }
    }, {
        key: 'onTouchCancel',
        value: function onTouchCancel() {
            this.deactivate();
            this.unsetShouldGuardAgainstMouseEmulationByDevices();
        }
    }, {
        key: 'onMouseEnter',
        value: function onMouseEnter(e) {
            if (this.shouldGuardAgainstMouseEmulationByDevices) {
                return;
            }

            this.init();
            this.onMouseDetected();
            this.setPositionState(this.core.getCursorPosition(e));
            this.clearActivationTimers();
            this.schedulActivation(this.props.hoverDelayInMs);
        }
    }, {
        key: 'onMouseMove',
        value: function onMouseMove(e) {
            if (!this.isCoreReady) {
                return;
            }

            this.setPositionState(this.core.getCursorPosition(e));
        }
    }, {
        key: 'onMouseLeave',
        value: function onMouseLeave() {
            this.clearActivationTimers();
            this.scheduleDeactivation(this.props.hoverOffDelayInMs);
            this.setState({ isPositionOutside: true });
        }
    }, {
        key: 'onTouchDetected',
        value: function onTouchDetected() {
            var environment = {
                isTouchDetected: true,
                isMouseDetected: false
            };

            this.setState({ detectedEnvironment: environment });
            this.props.onDetectedEnvironmentChanged(environment);
        }
    }, {
        key: 'onMouseDetected',
        value: function onMouseDetected() {
            var environment = {
                isTouchDetected: false,
                isMouseDetected: true
            };

            this.setState({ detectedEnvironment: environment });
            this.props.onDetectedEnvironmentChanged(environment);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.isEnabled) {
                this.enable();
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(_ref) {
            var willBeEnabled = _ref.isEnabled;
            var isEnabled = this.props.isEnabled;

            var isEnabledWillChange = isEnabled !== willBeEnabled;

            if (!isEnabledWillChange) {
                return;
            }

            if (willBeEnabled) {
                this.enable();
            } else {
                this.disable();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.clearTimers();
            this.disable();
        }
    }, {
        key: 'enable',
        value: function enable() {
            this.addEventListeners();
        }
    }, {
        key: 'disable',
        value: function disable() {
            this.removeEventListeners();
        }
    }, {
        key: 'init',
        value: function init() {
            this.core = new _ElementRelativeCursorPosition2.default(this.el);

            this.setElementDimensionsState(this.getElementDimensions(this.el));
        }
    }, {
        key: 'reset',
        value: function reset() {
            var _core = this.core;
            _core = _core === undefined ? {} : _core;
            var lastMouseEvent = _core.lastEvent;


            this.init();

            if (!lastMouseEvent) {
                return;
            }

            this.setPositionState(this.core.getCursorPosition(lastMouseEvent));
        }
    }, {
        key: 'activate',
        value: function activate() {
            this.setState({ isActive: true });
            this.props.onActivationChanged({ isActive: true });
        }
    }, {
        key: 'deactivate',
        value: function deactivate() {
            var _this2 = this;

            this.clearTimer(constants.PRESS_EVENT_TIMER_NAME);

            this.setState({ isActive: false }, function () {
                var _state = _this2.state,
                    isPositionOutside = _state.isPositionOutside,
                    position = _state.position;


                _this2.props.onPositionChanged({
                    isPositionOutside: isPositionOutside,
                    position: position
                });

                _this2.props.onActivationChanged({ isActive: false });
            });
        }
    }, {
        key: 'setPositionState',
        value: function setPositionState(position) {
            var isPositionOutside = this.getIsPositionOutside(position);

            this.setState({
                isPositionOutside: isPositionOutside,
                position: position
            }, this.onPositionChanged);
        }
    }, {
        key: 'setElementDimensionsState',
        value: function setElementDimensionsState(dimensions) {
            this.setState({
                elementDimensions: dimensions
            });
        }
    }, {
        key: 'schedulActivation',
        value: function schedulActivation(schedule) {
            var _this3 = this;

            var scheduleId = setTimeout(function () {
                _this3.activate();
            }, schedule);

            this.timers.push({
                id: scheduleId,
                name: constants.SET_ACTIVATION_TIMER_NAME
            });
        }
    }, {
        key: 'scheduleDeactivation',
        value: function scheduleDeactivation(schedule) {
            var _this4 = this;

            var scheduleId = setTimeout(function () {
                _this4.deactivate();
            }, schedule);

            this.timers.push({
                id: scheduleId,
                name: constants.UNSET_ACTIVATION_TIMER_NAME
            });
        }
    }, {
        key: 'clearActivationTimers',
        value: function clearActivationTimers() {
            this.clearTimer(constants.SET_ACTIVATION_TIMER_NAME);
            this.clearTimer(constants.UNSET_ACTIVATION_TIMER_NAME);
        }
    }, {
        key: 'setPressEventTimer',
        value: function setPressEventTimer() {
            var _this5 = this;

            var _props = this.props,
                pressDuration = _props.pressDuration,
                pressMoveThreshold = _props.pressMoveThreshold;


            this.timers.push({
                name: constants.PRESS_EVENT_TIMER_NAME,
                id: setTimeout(function () {
                    if (Math.abs(_this5.currentElTop - _this5.initialElTop) < pressMoveThreshold) {
                        _this5.activate();
                    }
                }, pressDuration)
            });
        }
    }, {
        key: 'setPressEventCriteria',
        value: function setPressEventCriteria(position) {
            this.currentElTop = position.y;
        }
    }, {
        key: 'initPressEventCriteria',
        value: function initPressEventCriteria(position) {
            var top = position.y;
            this.initialElTop = top;
            this.currentElTop = top;
        }
    }, {
        key: 'setShouldGuardAgainstMouseEmulationByDevices',
        value: function setShouldGuardAgainstMouseEmulationByDevices() {
            this.shouldGuardAgainstMouseEmulationByDevices = true;
        }
    }, {
        key: 'unsetShouldGuardAgainstMouseEmulationByDevices',
        value: function unsetShouldGuardAgainstMouseEmulationByDevices() {
            var _this6 = this;

            this.timers.push({
                name: constants.MOUSE_EMULATION_GUARD_TIMER_NAME,
                id: setTimeout(function () {
                    _this6.shouldGuardAgainstMouseEmulationByDevices = false;
                }, 0)
            });
        }
    }, {
        key: 'clearTimers',
        value: function clearTimers() {
            var timers = this.timers;
            while (timers.length) {
                var timer = timers.pop();
                clearTimeout(timer.id);
            }
        }
    }, {
        key: 'clearTimer',
        value: function clearTimer(timerName) {
            this.timers.forEach(function (timer) {
                if (timer.name === timerName) {
                    clearTimeout(timer.id);
                }
            });
        }
    }, {
        key: 'getElementDimensions',
        value: function getElementDimensions(el) {
            var _el$getBoundingClient = el.getBoundingClientRect(),
                width = _el$getBoundingClient.width,
                height = _el$getBoundingClient.height;

            return {
                width: width,
                height: height
            };
        }
    }, {
        key: 'getIsPositionOutside',
        value: function getIsPositionOutside(position) {
            var x = position.x,
                y = position.y;
            var _state$elementDimensi = this.state.elementDimensions,
                width = _state$elementDimensi.width,
                height = _state$elementDimensi.height;


            var isPositionOutside = x < 0 || y < 0 || x > width || y > height;

            return isPositionOutside;
        }
    }, {
        key: 'getTouchEvent',
        value: function getTouchEvent(e) {
            return e.touches[0];
        }
    }, {
        key: 'getIsReactComponent',
        value: function getIsReactComponent(reactElement) {
            return typeof reactElement.type === 'function';
        }
    }, {
        key: 'shouldDecorateChild',
        value: function shouldDecorateChild(child) {
            return !!child && this.getIsReactComponent(child) && this.props.shouldDecorateChildren;
        }
    }, {
        key: 'decorateChild',
        value: function decorateChild(child, props) {
            return (0, _react.cloneElement)(child, props);
        }
    }, {
        key: 'decorateChildren',
        value: function decorateChildren(children, props) {
            var _this7 = this;

            return _react.Children.map(children, function (child) {
                return _this7.shouldDecorateChild(child) ? _this7.decorateChild(child, props) : child;
            });
        }
    }, {
        key: 'addEventListeners',
        value: function addEventListeners() {
            this.eventListeners.push((0, _addEventListener2.default)(this.el, 'touchstart', this.onTouchStart, { passive: false }), (0, _addEventListener2.default)(this.el, 'touchmove', this.onTouchMove, { passive: false }), (0, _addEventListener2.default)(this.el, 'touchend', this.onTouchEnd), (0, _addEventListener2.default)(this.el, 'touchcancel', this.onTouchCancel), (0, _addEventListener2.default)(this.el, 'mouseenter', this.onMouseEnter), (0, _addEventListener2.default)(this.el, 'mousemove', this.onMouseMove), (0, _addEventListener2.default)(this.el, 'mouseleave', this.onMouseLeave));
        }
    }, {
        key: 'removeEventListeners',
        value: function removeEventListeners() {
            while (this.eventListeners.length) {
                this.eventListeners.pop().removeEventListener();
            }
        }
    }, {
        key: 'getPassThroughProps',
        value: function getPassThroughProps() {
            var ownPropNames = Object.keys(this.constructor.propTypes);
            return (0, _object2.default)(this.props, ownPropNames);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this8 = this;

            var _props2 = this.props,
                children = _props2.children,
                className = _props2.className,
                mapChildProps = _props2.mapChildProps,
                style = _props2.style;

            var props = (0, _objectAssign2.default)({}, mapChildProps(this.state), this.getPassThroughProps());

            return _react2.default.createElement(
                'div',
                {
                    className: className,
                    ref: function ref(el) {
                        return _this8.el = el;
                    },
                    style: (0, _objectAssign2.default)({}, style, {
                        WebkitUserSelect: 'none'
                    })
                },
                this.decorateChildren(children, props)
            );
        }
    }, {
        key: 'isCoreReady',
        get: function get() {
            return !!this.core;
        }
    }]);

    return _class;
}(_react2.default.Component);

_class.displayName = 'ReactCursorPosition';
_class.propTypes = {
    children: _propTypes2.default.any,
    className: _propTypes2.default.string,
    hoverDelayInMs: _propTypes2.default.number,
    hoverOffDelayInMs: _propTypes2.default.number,
    isActivatedOnTouch: _propTypes2.default.bool,
    isEnabled: _propTypes2.default.bool,
    mapChildProps: _propTypes2.default.func,
    onActivationChanged: _propTypes2.default.func,
    onPositionChanged: _propTypes2.default.func,
    onDetectedEnvironmentChanged: _propTypes2.default.func,
    pressDuration: _propTypes2.default.number,
    pressMoveThreshold: _propTypes2.default.number,
    shouldDecorateChildren: _propTypes2.default.bool,
    shouldStopTouchMovePropagation: _propTypes2.default.bool,
    style: _propTypes2.default.object
};
_class.defaultProps = {
    isActivatedOnTouch: false,
    isEnabled: true,
    hoverDelayInMs: 0,
    hoverOffDelayInMs: 0,
    mapChildProps: function mapChildProps(props) {
        return props;
    },
    onActivationChanged: _noop2.default,
    onPositionChanged: _noop2.default,
    onDetectedEnvironmentChanged: _noop2.default,
    pressDuration: 500,
    pressMoveThreshold: 5,
    shouldDecorateChildren: true,
    shouldStopTouchMovePropagation: false
};

var _initialiseProps = function _initialiseProps() {
    var _this9 = this;

    this.onPositionChanged = function () {
        var onPositionChanged = _this9.props.onPositionChanged;

        onPositionChanged(_this9.state);
    };
};

exports["default"] = _class;

/***/ }),

/***/ 5550:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var PRESS_EVENT_TIMER_NAME = exports.PRESS_EVENT_TIMER_NAME = 'pressEvent';
var MOUSE_EMULATION_GUARD_TIMER_NAME = exports.MOUSE_EMULATION_GUARD_TIMER_NAME = 'mouseEmulation';
var SET_ACTIVATION_TIMER_NAME = exports.SET_ACTIVATION_TIMER_NAME = 'setHovering';
var UNSET_ACTIVATION_TIMER_NAME = exports.UNSET_ACTIVATION_TIMER_NAME = 'unsetHovering';

/***/ }),

/***/ 406:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ElementRelativeCursorPosition = function () {
    function ElementRelativeCursorPosition(el) {
        _classCallCheck(this, ElementRelativeCursorPosition);

        this.el = el;
    }

    _createClass(ElementRelativeCursorPosition, [{
        key: "getDocumentRelativeElementOffset",
        value: function getDocumentRelativeElementOffset(el) {
            var rootEl = this.getRootOfEl(el);

            var _rootEl$getBoundingCl = rootEl.getBoundingClientRect(),
                docLeft = _rootEl$getBoundingCl.left,
                docTop = _rootEl$getBoundingCl.top;

            var _el$getBoundingClient = el.getBoundingClientRect(),
                elLeft = _el$getBoundingClient.left,
                elTop = _el$getBoundingClient.top;

            return {
                x: Math.abs(docLeft) + elLeft,
                y: Math.abs(docTop) + elTop
            };
        }
    }, {
        key: "getRootOfEl",
        value: function getRootOfEl(el) {
            if (el.parentElement) {
                return this.getRootOfEl(el.parentElement);
            }
            return el;
        }
    }, {
        key: "getComputedElementRelativeCursorPosition",
        value: function getComputedElementRelativeCursorPosition(event, documentRelativeElementOffset) {
            this.lastEvent = event;
            var position = this.getDocumentRelativeCursorPosition(event);
            var cursorX = position.x,
                cursorY = position.y;
            var offsetX = documentRelativeElementOffset.x,
                offsetY = documentRelativeElementOffset.y;


            return {
                x: Math.round(cursorX - offsetX),
                y: Math.round(cursorY - offsetY)
            };
        }
    }, {
        key: "getDocumentRelativeCursorPosition",
        value: function getDocumentRelativeCursorPosition(event) {
            return {
                x: event.pageX,
                y: event.pageY
            };
        }
    }, {
        key: "getCursorPosition",
        value: function getCursorPosition(event) {
            return this.getComputedElementRelativeCursorPosition(event, this.documentRelativeElementOffset);
        }
    }, {
        key: "documentRelativeElementOffset",
        get: function get() {
            if (!this.elementOffset) {
                this.elementOffset = this.getDocumentRelativeElementOffset(this.el);
            }

            return this.elementOffset;
        }
    }]);

    return ElementRelativeCursorPosition;
}();

exports["default"] = ElementRelativeCursorPosition;

/***/ }),

/***/ 6131:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = addEventListener;
function addEventListener(node, eventName, handler, options) {
    node.addEventListener(eventName, handler, options);
    return {
        removeEventListener: function removeEventListener() {
            node.removeEventListener(eventName, handler, options);
        }
    };
}

/***/ }),

/***/ 4823:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

exports["default"] = function () {};

/***/ }),

/***/ 7122:
/***/ ((module) => {

module.exports = function requiredIf(type, condition) {
  return function(props) {
    var test = condition(props) ? type.isRequired : type;
    return test.apply(this, arguments);
  };
};


/***/ }),

/***/ 3573:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _default = function _default(position, metric, axis) {
  var positionPercent = position === 0 ? position : position + metric;
  var positionCss = axis === 'horizontal' ? [positionPercent, 0, 0] : [0, positionPercent, 0];
  var transitionProp = 'translate3d';
  var translatedPosition = '(' + positionCss.join(',') + ')';
  return transitionProp + translatedPosition;
};

exports["default"] = _default;

/***/ }),

/***/ 3704:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.fadeAnimationHandler = exports.slideStopSwipingHandler = exports.slideSwipeAnimationHandler = exports.slideAnimationHandler = void 0;

var _react = __webpack_require__(8038);

var _CSSTranslate = _interopRequireDefault(__webpack_require__(3573));

var _utils = __webpack_require__(5136);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Main animation handler for the default 'sliding' style animation
 * @param props
 * @param state
 */
var slideAnimationHandler = function slideAnimationHandler(props, state) {
  var returnStyles = {};
  var selectedItem = state.selectedItem;
  var previousItem = selectedItem;
  var lastPosition = _react.Children.count(props.children) - 1;
  var needClonedSlide = props.infiniteLoop && (selectedItem < 0 || selectedItem > lastPosition); // Handle list position if it needs a clone

  if (needClonedSlide) {
    if (previousItem < 0) {
      if (props.centerMode && props.centerSlidePercentage && props.axis === 'horizontal') {
        returnStyles.itemListStyle = (0, _utils.setPosition)(-(lastPosition + 2) * props.centerSlidePercentage - (100 - props.centerSlidePercentage) / 2, props.axis);
      } else {
        returnStyles.itemListStyle = (0, _utils.setPosition)(-(lastPosition + 2) * 100, props.axis);
      }
    } else if (previousItem > lastPosition) {
      returnStyles.itemListStyle = (0, _utils.setPosition)(0, props.axis);
    }

    return returnStyles;
  }

  var currentPosition = (0, _utils.getPosition)(selectedItem, props); // if 3d is available, let's take advantage of the performance of transform

  var transformProp = (0, _CSSTranslate.default)(currentPosition, '%', props.axis);
  var transitionTime = props.transitionTime + 'ms';
  returnStyles.itemListStyle = {
    WebkitTransform: transformProp,
    msTransform: transformProp,
    OTransform: transformProp,
    transform: transformProp
  };

  if (!state.swiping) {
    returnStyles.itemListStyle = _objectSpread(_objectSpread({}, returnStyles.itemListStyle), {}, {
      WebkitTransitionDuration: transitionTime,
      MozTransitionDuration: transitionTime,
      OTransitionDuration: transitionTime,
      transitionDuration: transitionTime,
      msTransitionDuration: transitionTime
    });
  }

  return returnStyles;
};
/**
 * Swiping animation handler for the default 'sliding' style animation
 * @param delta
 * @param props
 * @param state
 * @param setState
 */


exports.slideAnimationHandler = slideAnimationHandler;

var slideSwipeAnimationHandler = function slideSwipeAnimationHandler(delta, props, state, setState) {
  var returnStyles = {};
  var isHorizontal = props.axis === 'horizontal';

  var childrenLength = _react.Children.count(props.children);

  var initialBoundry = 0;
  var currentPosition = (0, _utils.getPosition)(state.selectedItem, props);
  var finalBoundry = props.infiniteLoop ? (0, _utils.getPosition)(childrenLength - 1, props) - 100 : (0, _utils.getPosition)(childrenLength - 1, props);
  var axisDelta = isHorizontal ? delta.x : delta.y;
  var handledDelta = axisDelta; // prevent user from swiping left out of boundaries

  if (currentPosition === initialBoundry && axisDelta > 0) {
    handledDelta = 0;
  } // prevent user from swiping right out of boundaries


  if (currentPosition === finalBoundry && axisDelta < 0) {
    handledDelta = 0;
  }

  var position = currentPosition + 100 / (state.itemSize / handledDelta);
  var hasMoved = Math.abs(axisDelta) > props.swipeScrollTolerance;

  if (props.infiniteLoop && hasMoved) {
    // When allowing infinite loop, if we slide left from position 0 we reveal the cloned last slide that appears before it
    // if we slide even further we need to jump to other side so it can continue - and vice versa for the last slide
    if (state.selectedItem === 0 && position > -100) {
      position -= childrenLength * 100;
    } else if (state.selectedItem === childrenLength - 1 && position < -childrenLength * 100) {
      position += childrenLength * 100;
    }
  }

  if (!props.preventMovementUntilSwipeScrollTolerance || hasMoved || state.swipeMovementStarted) {
    if (!state.swipeMovementStarted) {
      setState({
        swipeMovementStarted: true
      });
    }

    returnStyles.itemListStyle = (0, _utils.setPosition)(position, props.axis);
  } //allows scroll if the swipe was within the tolerance


  if (hasMoved && !state.cancelClick) {
    setState({
      cancelClick: true
    });
  }

  return returnStyles;
};
/**
 * Default 'sliding' style animination handler for when a swipe action stops.
 * @param props
 * @param state
 */


exports.slideSwipeAnimationHandler = slideSwipeAnimationHandler;

var slideStopSwipingHandler = function slideStopSwipingHandler(props, state) {
  var currentPosition = (0, _utils.getPosition)(state.selectedItem, props);
  var itemListStyle = (0, _utils.setPosition)(currentPosition, props.axis);
  return {
    itemListStyle: itemListStyle
  };
};
/**
 * Main animation handler for the default 'fade' style animation
 * @param props
 * @param state
 */


exports.slideStopSwipingHandler = slideStopSwipingHandler;

var fadeAnimationHandler = function fadeAnimationHandler(props, state) {
  var transitionTime = props.transitionTime + 'ms';
  var transitionTimingFunction = 'ease-in-out';
  var slideStyle = {
    position: 'absolute',
    display: 'block',
    zIndex: -2,
    minHeight: '100%',
    opacity: 0,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    transitionTimingFunction: transitionTimingFunction,
    msTransitionTimingFunction: transitionTimingFunction,
    MozTransitionTimingFunction: transitionTimingFunction,
    WebkitTransitionTimingFunction: transitionTimingFunction,
    OTransitionTimingFunction: transitionTimingFunction
  };

  if (!state.swiping) {
    slideStyle = _objectSpread(_objectSpread({}, slideStyle), {}, {
      WebkitTransitionDuration: transitionTime,
      MozTransitionDuration: transitionTime,
      OTransitionDuration: transitionTime,
      transitionDuration: transitionTime,
      msTransitionDuration: transitionTime
    });
  }

  return {
    slideStyle: slideStyle,
    selectedStyle: _objectSpread(_objectSpread({}, slideStyle), {}, {
      opacity: 1,
      position: 'relative'
    }),
    prevStyle: _objectSpread({}, slideStyle)
  };
};

exports.fadeAnimationHandler = fadeAnimationHandler;

/***/ }),

/***/ 8465:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(8038));

var _reactEasySwipe = _interopRequireDefault(__webpack_require__(9306));

var _cssClasses = _interopRequireDefault(__webpack_require__(3349));

var _Thumbs = _interopRequireDefault(__webpack_require__(8076));

var _document = _interopRequireDefault(__webpack_require__(4102));

var _window = _interopRequireDefault(__webpack_require__(626));

var _utils = __webpack_require__(5136);

var _animations = __webpack_require__(3704);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Carousel = /*#__PURE__*/function (_React$Component) {
  _inherits(Carousel, _React$Component);

  var _super = _createSuper(Carousel);

  // @ts-ignore
  function Carousel(props) {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "thumbsRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "carouselWrapperRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "listRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "itemsRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "timer", void 0);

    _defineProperty(_assertThisInitialized(_this), "animationHandler", void 0);

    _defineProperty(_assertThisInitialized(_this), "setThumbsRef", function (node) {
      _this.thumbsRef = node;
    });

    _defineProperty(_assertThisInitialized(_this), "setCarouselWrapperRef", function (node) {
      _this.carouselWrapperRef = node;
    });

    _defineProperty(_assertThisInitialized(_this), "setListRef", function (node) {
      _this.listRef = node;
    });

    _defineProperty(_assertThisInitialized(_this), "setItemsRef", function (node, index) {
      if (!_this.itemsRef) {
        _this.itemsRef = [];
      }

      _this.itemsRef[index] = node;
    });

    _defineProperty(_assertThisInitialized(_this), "autoPlay", function () {
      if (_react.Children.count(_this.props.children) <= 1) {
        return;
      }

      _this.clearAutoPlay();

      if (!_this.props.autoPlay) {
        return;
      }

      _this.timer = setTimeout(function () {
        _this.increment();
      }, _this.props.interval);
    });

    _defineProperty(_assertThisInitialized(_this), "clearAutoPlay", function () {
      if (_this.timer) clearTimeout(_this.timer);
    });

    _defineProperty(_assertThisInitialized(_this), "resetAutoPlay", function () {
      _this.clearAutoPlay();

      _this.autoPlay();
    });

    _defineProperty(_assertThisInitialized(_this), "stopOnHover", function () {
      _this.setState({
        isMouseEntered: true
      }, _this.clearAutoPlay);
    });

    _defineProperty(_assertThisInitialized(_this), "startOnLeave", function () {
      _this.setState({
        isMouseEntered: false
      }, _this.autoPlay);
    });

    _defineProperty(_assertThisInitialized(_this), "isFocusWithinTheCarousel", function () {
      if (!_this.carouselWrapperRef) {
        return false;
      }

      if ((0, _document.default)().activeElement === _this.carouselWrapperRef || _this.carouselWrapperRef.contains((0, _document.default)().activeElement)) {
        return true;
      }

      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "navigateWithKeyboard", function (e) {
      if (!_this.isFocusWithinTheCarousel()) {
        return;
      }

      var axis = _this.props.axis;
      var isHorizontal = axis === 'horizontal';
      var keyNames = {
        ArrowUp: 38,
        ArrowRight: 39,
        ArrowDown: 40,
        ArrowLeft: 37
      };
      var nextKey = isHorizontal ? keyNames.ArrowRight : keyNames.ArrowDown;
      var prevKey = isHorizontal ? keyNames.ArrowLeft : keyNames.ArrowUp;

      if (nextKey === e.keyCode) {
        _this.increment();
      } else if (prevKey === e.keyCode) {
        _this.decrement();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateSizes", function () {
      if (!_this.state.initialized || !_this.itemsRef || _this.itemsRef.length === 0) {
        return;
      }

      var isHorizontal = _this.props.axis === 'horizontal';
      var firstItem = _this.itemsRef[0];

      if (!firstItem) {
        return;
      }

      var itemSize = isHorizontal ? firstItem.clientWidth : firstItem.clientHeight;

      _this.setState({
        itemSize: itemSize
      });

      if (_this.thumbsRef) {
        _this.thumbsRef.updateSizes();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setMountState", function () {
      _this.setState({
        hasMount: true
      });

      _this.updateSizes();
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickItem", function (index, item) {
      if (_react.Children.count(_this.props.children) === 0) {
        return;
      }

      if (_this.state.cancelClick) {
        _this.setState({
          cancelClick: false
        });

        return;
      }

      _this.props.onClickItem(index, item);

      if (index !== _this.state.selectedItem) {
        _this.setState({
          selectedItem: index
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnChange", function (index, item) {
      if (_react.Children.count(_this.props.children) <= 1) {
        return;
      }

      _this.props.onChange(index, item);
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickThumb", function (index, item) {
      _this.props.onClickThumb(index, item);

      _this.moveTo(index);
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeStart", function (event) {
      _this.setState({
        swiping: true
      });

      _this.props.onSwipeStart(event);
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeEnd", function (event) {
      _this.setState({
        swiping: false,
        cancelClick: false,
        swipeMovementStarted: false
      });

      _this.props.onSwipeEnd(event);

      _this.clearAutoPlay();

      if (_this.state.autoPlay) {
        _this.autoPlay();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeMove", function (delta, event) {
      _this.props.onSwipeMove(event);

      var animationHandlerResponse = _this.props.swipeAnimationHandler(delta, _this.props, _this.state, _this.setState.bind(_assertThisInitialized(_this)));

      _this.setState(_objectSpread({}, animationHandlerResponse)); // If we have not moved, we should have an empty object returned
      // Return false to allow scrolling when not swiping


      return !!Object.keys(animationHandlerResponse).length;
    });

    _defineProperty(_assertThisInitialized(_this), "decrement", function () {
      var positions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      _this.moveTo(_this.state.selectedItem - (typeof positions === 'number' ? positions : 1));
    });

    _defineProperty(_assertThisInitialized(_this), "increment", function () {
      var positions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      _this.moveTo(_this.state.selectedItem + (typeof positions === 'number' ? positions : 1));
    });

    _defineProperty(_assertThisInitialized(_this), "moveTo", function (position) {
      if (typeof position !== 'number') {
        return;
      }

      var lastPosition = _react.Children.count(_this.props.children) - 1;

      if (position < 0) {
        position = _this.props.infiniteLoop ? lastPosition : 0;
      }

      if (position > lastPosition) {
        position = _this.props.infiniteLoop ? 0 : lastPosition;
      }

      _this.selectItem({
        // if it's not a slider, we don't need to set position here
        selectedItem: position
      }); // don't reset auto play when stop on hover is enabled, doing so will trigger a call to auto play more than once
      // and will result in the interval function not being cleared correctly.


      if (_this.state.autoPlay && _this.state.isMouseEntered === false) {
        _this.resetAutoPlay();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onClickNext", function () {
      _this.increment(1);
    });

    _defineProperty(_assertThisInitialized(_this), "onClickPrev", function () {
      _this.decrement(1);
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeForward", function () {
      _this.increment(1);

      if (_this.props.emulateTouch) {
        _this.setState({
          cancelClick: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeBackwards", function () {
      _this.decrement(1);

      if (_this.props.emulateTouch) {
        _this.setState({
          cancelClick: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "changeItem", function (newIndex) {
      return function (e) {
        if (!(0, _utils.isKeyboardEvent)(e) || e.key === 'Enter') {
          _this.moveTo(newIndex);
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "selectItem", function (state) {
      // Merge in the new state while updating updating previous item
      _this.setState(_objectSpread({
        previousItem: _this.state.selectedItem
      }, state), function () {
        // Run animation handler and update styles based on it
        _this.setState(_this.animationHandler(_this.props, _this.state));
      });

      _this.handleOnChange(state.selectedItem, _react.Children.toArray(_this.props.children)[state.selectedItem]);
    });

    _defineProperty(_assertThisInitialized(_this), "getInitialImage", function () {
      var selectedItem = _this.props.selectedItem;
      var item = _this.itemsRef && _this.itemsRef[selectedItem];
      var images = item && item.getElementsByTagName('img') || [];
      return images[0];
    });

    _defineProperty(_assertThisInitialized(_this), "getVariableItemHeight", function (position) {
      var item = _this.itemsRef && _this.itemsRef[position];

      if (_this.state.hasMount && item && item.children.length) {
        var slideImages = item.children[0].getElementsByTagName('img') || [];

        if (slideImages.length > 0) {
          var image = slideImages[0];

          if (!image.complete) {
            // if the image is still loading, the size won't be available so we trigger a new render after it's done
            var onImageLoad = function onImageLoad() {
              _this.forceUpdate();

              image.removeEventListener('load', onImageLoad);
            };

            image.addEventListener('load', onImageLoad);
          }
        } // try to get img first, if img not there find first display tag


        var displayItem = slideImages[0] || item.children[0];
        var height = displayItem.clientHeight;
        return height > 0 ? height : null;
      }

      return null;
    });

    var initState = {
      initialized: false,
      previousItem: props.selectedItem,
      selectedItem: props.selectedItem,
      hasMount: false,
      isMouseEntered: false,
      autoPlay: props.autoPlay,
      swiping: false,
      swipeMovementStarted: false,
      cancelClick: false,
      itemSize: 1,
      itemListStyle: {},
      slideStyle: {},
      selectedStyle: {},
      prevStyle: {}
    };
    _this.animationHandler = typeof props.animationHandler === 'function' && props.animationHandler || props.animationHandler === 'fade' && _animations.fadeAnimationHandler || _animations.slideAnimationHandler;
    _this.state = _objectSpread(_objectSpread({}, initState), _this.animationHandler(props, initState));
    return _this;
  }

  _createClass(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.children) {
        return;
      }

      this.setupCarousel();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (!prevProps.children && this.props.children && !this.state.initialized) {
        this.setupCarousel();
      }

      if (!prevProps.autoFocus && this.props.autoFocus) {
        this.forceFocus();
      }

      if (prevState.swiping && !this.state.swiping) {
        // We stopped swiping, ensure we are heading to the new/current slide and not stuck
        this.setState(_objectSpread({}, this.props.stopSwipingHandler(this.props, this.state)));
      }

      if (prevProps.selectedItem !== this.props.selectedItem || prevProps.centerMode !== this.props.centerMode) {
        this.updateSizes();
        this.moveTo(this.props.selectedItem);
      }

      if (prevProps.autoPlay !== this.props.autoPlay) {
        if (this.props.autoPlay) {
          this.setupAutoPlay();
        } else {
          this.destroyAutoPlay();
        }

        this.setState({
          autoPlay: this.props.autoPlay
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroyCarousel();
    }
  }, {
    key: "setupCarousel",
    value: function setupCarousel() {
      var _this2 = this;

      this.bindEvents();

      if (this.state.autoPlay && _react.Children.count(this.props.children) > 1) {
        this.setupAutoPlay();
      }

      if (this.props.autoFocus) {
        this.forceFocus();
      }

      this.setState({
        initialized: true
      }, function () {
        var initialImage = _this2.getInitialImage();

        if (initialImage && !initialImage.complete) {
          // if it's a carousel of images, we set the mount state after the first image is loaded
          initialImage.addEventListener('load', _this2.setMountState);
        } else {
          _this2.setMountState();
        }
      });
    }
  }, {
    key: "destroyCarousel",
    value: function destroyCarousel() {
      if (this.state.initialized) {
        this.unbindEvents();
        this.destroyAutoPlay();
      }
    }
  }, {
    key: "setupAutoPlay",
    value: function setupAutoPlay() {
      this.autoPlay();
      var carouselWrapper = this.carouselWrapperRef;

      if (this.props.stopOnHover && carouselWrapper) {
        carouselWrapper.addEventListener('mouseenter', this.stopOnHover);
        carouselWrapper.addEventListener('mouseleave', this.startOnLeave);
      }
    }
  }, {
    key: "destroyAutoPlay",
    value: function destroyAutoPlay() {
      this.clearAutoPlay();
      var carouselWrapper = this.carouselWrapperRef;

      if (this.props.stopOnHover && carouselWrapper) {
        carouselWrapper.removeEventListener('mouseenter', this.stopOnHover);
        carouselWrapper.removeEventListener('mouseleave', this.startOnLeave);
      }
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      // as the widths are calculated, we need to resize
      // the carousel when the window is resized
      (0, _window.default)().addEventListener('resize', this.updateSizes); // issue #2 - image loading smaller

      (0, _window.default)().addEventListener('DOMContentLoaded', this.updateSizes);

      if (this.props.useKeyboardArrows) {
        (0, _document.default)().addEventListener('keydown', this.navigateWithKeyboard);
      }
    }
  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      // removing listeners
      (0, _window.default)().removeEventListener('resize', this.updateSizes);
      (0, _window.default)().removeEventListener('DOMContentLoaded', this.updateSizes);
      var initialImage = this.getInitialImage();

      if (initialImage) {
        initialImage.removeEventListener('load', this.setMountState);
      }

      if (this.props.useKeyboardArrows) {
        (0, _document.default)().removeEventListener('keydown', this.navigateWithKeyboard);
      }
    }
  }, {
    key: "forceFocus",
    value: function forceFocus() {
      var _this$carouselWrapper;

      (_this$carouselWrapper = this.carouselWrapperRef) === null || _this$carouselWrapper === void 0 ? void 0 : _this$carouselWrapper.focus();
    }
  }, {
    key: "renderItems",
    value: function renderItems(isClone) {
      var _this3 = this;

      if (!this.props.children) {
        return [];
      }

      return _react.Children.map(this.props.children, function (item, index) {
        var isSelected = index === _this3.state.selectedItem;
        var isPrevious = index === _this3.state.previousItem;
        var style = isSelected && _this3.state.selectedStyle || isPrevious && _this3.state.prevStyle || _this3.state.slideStyle || {};

        if (_this3.props.centerMode && _this3.props.axis === 'horizontal') {
          style = _objectSpread(_objectSpread({}, style), {}, {
            minWidth: _this3.props.centerSlidePercentage + '%'
          });
        }

        if (_this3.state.swiping && _this3.state.swipeMovementStarted) {
          style = _objectSpread(_objectSpread({}, style), {}, {
            pointerEvents: 'none'
          });
        }

        var slideProps = {
          ref: function ref(e) {
            return _this3.setItemsRef(e, index);
          },
          key: 'itemKey' + index + (isClone ? 'clone' : ''),
          className: _cssClasses.default.ITEM(true, index === _this3.state.selectedItem, index === _this3.state.previousItem),
          onClick: _this3.handleClickItem.bind(_this3, index, item),
          style: style
        };
        return /*#__PURE__*/_react.default.createElement("li", slideProps, _this3.props.renderItem(item, {
          isSelected: index === _this3.state.selectedItem,
          isPrevious: index === _this3.state.previousItem
        }));
      });
    }
  }, {
    key: "renderControls",
    value: function renderControls() {
      var _this4 = this;

      var _this$props = this.props,
          showIndicators = _this$props.showIndicators,
          labels = _this$props.labels,
          renderIndicator = _this$props.renderIndicator,
          children = _this$props.children;

      if (!showIndicators) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("ul", {
        className: "control-dots"
      }, _react.Children.map(children, function (_, index) {
        return renderIndicator && renderIndicator(_this4.changeItem(index), index === _this4.state.selectedItem, index, labels.item);
      }));
    }
  }, {
    key: "renderStatus",
    value: function renderStatus() {
      if (!this.props.showStatus) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("p", {
        className: "carousel-status"
      }, this.props.statusFormatter(this.state.selectedItem + 1, _react.Children.count(this.props.children)));
    }
  }, {
    key: "renderThumbs",
    value: function renderThumbs() {
      if (!this.props.showThumbs || !this.props.children || _react.Children.count(this.props.children) === 0) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement(_Thumbs.default, {
        ref: this.setThumbsRef,
        onSelectItem: this.handleClickThumb,
        selectedItem: this.state.selectedItem,
        transitionTime: this.props.transitionTime,
        thumbWidth: this.props.thumbWidth,
        labels: this.props.labels,
        emulateTouch: this.props.emulateTouch
      }, this.props.renderThumbs(this.props.children));
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      if (!this.props.children || _react.Children.count(this.props.children) === 0) {
        return null;
      }

      var isSwipeable = this.props.swipeable && _react.Children.count(this.props.children) > 1;
      var isHorizontal = this.props.axis === 'horizontal';
      var canShowArrows = this.props.showArrows && _react.Children.count(this.props.children) > 1; // show left arrow?

      var hasPrev = canShowArrows && (this.state.selectedItem > 0 || this.props.infiniteLoop) || false; // show right arrow

      var hasNext = canShowArrows && (this.state.selectedItem < _react.Children.count(this.props.children) - 1 || this.props.infiniteLoop) || false;
      var itemsClone = this.renderItems(true);
      var firstClone = itemsClone.shift();
      var lastClone = itemsClone.pop();
      var swiperProps = {
        className: _cssClasses.default.SLIDER(true, this.state.swiping),
        onSwipeMove: this.onSwipeMove,
        onSwipeStart: this.onSwipeStart,
        onSwipeEnd: this.onSwipeEnd,
        style: this.state.itemListStyle,
        tolerance: this.props.swipeScrollTolerance
      };
      var containerStyles = {};

      if (isHorizontal) {
        swiperProps.onSwipeLeft = this.onSwipeForward;
        swiperProps.onSwipeRight = this.onSwipeBackwards;

        if (this.props.dynamicHeight) {
          var itemHeight = this.getVariableItemHeight(this.state.selectedItem); // swiperProps.style.height = itemHeight || 'auto';

          containerStyles.height = itemHeight || 'auto';
        }
      } else {
        swiperProps.onSwipeUp = this.props.verticalSwipe === 'natural' ? this.onSwipeBackwards : this.onSwipeForward;
        swiperProps.onSwipeDown = this.props.verticalSwipe === 'natural' ? this.onSwipeForward : this.onSwipeBackwards;
        swiperProps.style = _objectSpread(_objectSpread({}, swiperProps.style), {}, {
          height: this.state.itemSize
        });
        containerStyles.height = this.state.itemSize;
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        "aria-label": this.props.ariaLabel,
        className: _cssClasses.default.ROOT(this.props.className),
        ref: this.setCarouselWrapperRef,
        tabIndex: this.props.useKeyboardArrows ? 0 : undefined
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: _cssClasses.default.CAROUSEL(true),
        style: {
          width: this.props.width
        }
      }, this.renderControls(), this.props.renderArrowPrev(this.onClickPrev, hasPrev, this.props.labels.leftArrow), /*#__PURE__*/_react.default.createElement("div", {
        className: _cssClasses.default.WRAPPER(true, this.props.axis),
        style: containerStyles
      }, isSwipeable ? /*#__PURE__*/_react.default.createElement(_reactEasySwipe.default, _extends({
        tagName: "ul",
        innerRef: this.setListRef
      }, swiperProps, {
        allowMouseEvents: this.props.emulateTouch
      }), this.props.infiniteLoop && lastClone, this.renderItems(), this.props.infiniteLoop && firstClone) : /*#__PURE__*/_react.default.createElement("ul", {
        className: _cssClasses.default.SLIDER(true, this.state.swiping),
        ref: function ref(node) {
          return _this5.setListRef(node);
        },
        style: this.state.itemListStyle || {}
      }, this.props.infiniteLoop && lastClone, this.renderItems(), this.props.infiniteLoop && firstClone)), this.props.renderArrowNext(this.onClickNext, hasNext, this.props.labels.rightArrow), this.renderStatus()), this.renderThumbs());
    }
  }]);

  return Carousel;
}(_react.default.Component);

exports["default"] = Carousel;

_defineProperty(Carousel, "displayName", 'Carousel');

_defineProperty(Carousel, "defaultProps", {
  ariaLabel: undefined,
  axis: 'horizontal',
  centerSlidePercentage: 80,
  interval: 3000,
  labels: {
    leftArrow: 'previous slide / item',
    rightArrow: 'next slide / item',
    item: 'slide item'
  },
  onClickItem: _utils.noop,
  onClickThumb: _utils.noop,
  onChange: _utils.noop,
  onSwipeStart: function onSwipeStart() {},
  onSwipeEnd: function onSwipeEnd() {},
  onSwipeMove: function onSwipeMove() {
    return false;
  },
  preventMovementUntilSwipeScrollTolerance: false,
  renderArrowPrev: function renderArrowPrev(onClickHandler, hasPrev, label) {
    return /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      "aria-label": label,
      className: _cssClasses.default.ARROW_PREV(!hasPrev),
      onClick: onClickHandler
    });
  },
  renderArrowNext: function renderArrowNext(onClickHandler, hasNext, label) {
    return /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      "aria-label": label,
      className: _cssClasses.default.ARROW_NEXT(!hasNext),
      onClick: onClickHandler
    });
  },
  renderIndicator: function renderIndicator(onClickHandler, isSelected, index, label) {
    return /*#__PURE__*/_react.default.createElement("li", {
      className: _cssClasses.default.DOT(isSelected),
      onClick: onClickHandler,
      onKeyDown: onClickHandler,
      value: index,
      key: index,
      role: "button",
      tabIndex: 0,
      "aria-label": "".concat(label, " ").concat(index + 1)
    });
  },
  renderItem: function renderItem(item) {
    return item;
  },
  renderThumbs: function renderThumbs(children) {
    var images = _react.Children.map(children, function (item) {
      var img = item; // if the item is not an image, try to find the first image in the item's children.

      if (item.type !== 'img') {
        img = _react.Children.toArray(item.props.children).find(function (children) {
          return children.type === 'img';
        });
      }

      if (!img) {
        return undefined;
      }

      return img;
    });

    if (images.filter(function (image) {
      return image;
    }).length === 0) {
      console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md");
      return [];
    }

    return images;
  },
  statusFormatter: _utils.defaultStatusFormatter,
  selectedItem: 0,
  showArrows: true,
  showIndicators: true,
  showStatus: true,
  showThumbs: true,
  stopOnHover: true,
  swipeScrollTolerance: 5,
  swipeable: true,
  transitionTime: 350,
  verticalSwipe: 'standard',
  width: '100%',
  animationHandler: 'slide',
  swipeAnimationHandler: _animations.slideSwipeAnimationHandler,
  stopSwipingHandler: _animations.slideStopSwipingHandler
});

/***/ }),

/***/ 5862:
/***/ (() => {

"use strict";


/***/ }),

/***/ 5136:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.setPosition = exports.getPosition = exports.isKeyboardEvent = exports.defaultStatusFormatter = exports.noop = void 0;

var _react = __webpack_require__(8038);

var _CSSTranslate = _interopRequireDefault(__webpack_require__(3573));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};

exports.noop = noop;

var defaultStatusFormatter = function defaultStatusFormatter(current, total) {
  return "".concat(current, " of ").concat(total);
};

exports.defaultStatusFormatter = defaultStatusFormatter;

var isKeyboardEvent = function isKeyboardEvent(e) {
  return e ? e.hasOwnProperty('key') : false;
};
/**
 * Gets the list 'position' relative to a current index
 * @param index
 */


exports.isKeyboardEvent = isKeyboardEvent;

var getPosition = function getPosition(index, props) {
  if (props.infiniteLoop) {
    // index has to be added by 1 because of the first cloned slide
    ++index;
  }

  if (index === 0) {
    return 0;
  }

  var childrenLength = _react.Children.count(props.children);

  if (props.centerMode && props.axis === 'horizontal') {
    var currentPosition = -index * props.centerSlidePercentage;
    var lastPosition = childrenLength - 1;

    if (index && (index !== lastPosition || props.infiniteLoop)) {
      currentPosition += (100 - props.centerSlidePercentage) / 2;
    } else if (index === lastPosition) {
      currentPosition += 100 - props.centerSlidePercentage;
    }

    return currentPosition;
  }

  return -index * 100;
};
/**
 * Sets the 'position' transform for sliding animations
 * @param position
 * @param forceReflow
 */


exports.getPosition = getPosition;

var setPosition = function setPosition(position, axis) {
  var style = {};
  ['WebkitTransform', 'MozTransform', 'MsTransform', 'OTransform', 'transform', 'msTransform'].forEach(function (prop) {
    // @ts-ignore
    style[prop] = (0, _CSSTranslate.default)(position, '%', axis);
  });
  return style;
};

exports.setPosition = setPosition;

/***/ }),

/***/ 8076:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(8038));

var _cssClasses = _interopRequireDefault(__webpack_require__(3349));

var _dimensions = __webpack_require__(1032);

var _CSSTranslate = _interopRequireDefault(__webpack_require__(3573));

var _reactEasySwipe = _interopRequireDefault(__webpack_require__(9306));

var _window = _interopRequireDefault(__webpack_require__(626));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isKeyboardEvent = function isKeyboardEvent(e) {
  return e.hasOwnProperty('key');
};

var Thumbs = /*#__PURE__*/function (_Component) {
  _inherits(Thumbs, _Component);

  var _super = _createSuper(Thumbs);

  function Thumbs(_props) {
    var _this;

    _classCallCheck(this, Thumbs);

    _this = _super.call(this, _props);

    _defineProperty(_assertThisInitialized(_this), "itemsWrapperRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "itemsListRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "thumbsRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "setItemsWrapperRef", function (node) {
      _this.itemsWrapperRef = node;
    });

    _defineProperty(_assertThisInitialized(_this), "setItemsListRef", function (node) {
      _this.itemsListRef = node;
    });

    _defineProperty(_assertThisInitialized(_this), "setThumbsRef", function (node, index) {
      if (!_this.thumbsRef) {
        _this.thumbsRef = [];
      }

      _this.thumbsRef[index] = node;
    });

    _defineProperty(_assertThisInitialized(_this), "updateSizes", function () {
      if (!_this.props.children || !_this.itemsWrapperRef || !_this.thumbsRef) {
        return;
      }

      var total = _react.Children.count(_this.props.children);

      var wrapperSize = _this.itemsWrapperRef.clientWidth;
      var itemSize = _this.props.thumbWidth ? _this.props.thumbWidth : (0, _dimensions.outerWidth)(_this.thumbsRef[0]);
      var visibleItems = Math.floor(wrapperSize / itemSize);
      var showArrows = visibleItems < total;
      var lastPosition = showArrows ? total - visibleItems : 0;

      _this.setState(function (_state, props) {
        return {
          itemSize: itemSize,
          visibleItems: visibleItems,
          firstItem: showArrows ? _this.getFirstItem(props.selectedItem) : 0,
          lastPosition: lastPosition,
          showArrows: showArrows
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickItem", function (index, item, e) {
      if (!isKeyboardEvent(e) || e.key === 'Enter') {
        var handler = _this.props.onSelectItem;

        if (typeof handler === 'function') {
          handler(index, item);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeStart", function () {
      _this.setState({
        swiping: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeEnd", function () {
      _this.setState({
        swiping: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeMove", function (delta) {
      var deltaX = delta.x;

      if (!_this.state.itemSize || !_this.itemsWrapperRef || !_this.state.visibleItems) {
        return false;
      }

      var leftBoundary = 0;

      var childrenLength = _react.Children.count(_this.props.children);

      var currentPosition = -(_this.state.firstItem * 100) / _this.state.visibleItems;
      var lastLeftItem = Math.max(childrenLength - _this.state.visibleItems, 0);
      var lastLeftBoundary = -lastLeftItem * 100 / _this.state.visibleItems; // prevent user from swiping left out of boundaries

      if (currentPosition === leftBoundary && deltaX > 0) {
        deltaX = 0;
      } // prevent user from swiping right out of boundaries


      if (currentPosition === lastLeftBoundary && deltaX < 0) {
        deltaX = 0;
      }

      var wrapperSize = _this.itemsWrapperRef.clientWidth;
      var position = currentPosition + 100 / (wrapperSize / deltaX); // if 3d isn't available we will use left to move

      if (_this.itemsListRef) {
        ['WebkitTransform', 'MozTransform', 'MsTransform', 'OTransform', 'transform', 'msTransform'].forEach(function (prop) {
          _this.itemsListRef.style[prop] = (0, _CSSTranslate.default)(position, '%', _this.props.axis);
        });
      }

      return true;
    });

    _defineProperty(_assertThisInitialized(_this), "slideRight", function (positions) {
      _this.moveTo(_this.state.firstItem - (typeof positions === 'number' ? positions : 1));
    });

    _defineProperty(_assertThisInitialized(_this), "slideLeft", function (positions) {
      _this.moveTo(_this.state.firstItem + (typeof positions === 'number' ? positions : 1));
    });

    _defineProperty(_assertThisInitialized(_this), "moveTo", function (position) {
      // position can't be lower than 0
      position = position < 0 ? 0 : position; // position can't be higher than last postion

      position = position >= _this.state.lastPosition ? _this.state.lastPosition : position;

      _this.setState({
        firstItem: position
      });
    });

    _this.state = {
      selectedItem: _props.selectedItem,
      swiping: false,
      showArrows: false,
      firstItem: 0,
      visibleItems: 0,
      lastPosition: 0
    };
    return _this;
  }

  _createClass(Thumbs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setupThumbs();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.selectedItem !== this.state.selectedItem) {
        this.setState({
          selectedItem: this.props.selectedItem,
          firstItem: this.getFirstItem(this.props.selectedItem)
        });
      }

      if (this.props.children === prevProps.children) {
        return;
      } // This will capture any size changes for arrow adjustments etc.
      // usually in the same render cycle so we don't see any flickers


      this.updateSizes();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroyThumbs();
    }
  }, {
    key: "setupThumbs",
    value: function setupThumbs() {
      // as the widths are calculated, we need to resize
      // the carousel when the window is resized
      (0, _window.default)().addEventListener('resize', this.updateSizes); // issue #2 - image loading smaller

      (0, _window.default)().addEventListener('DOMContentLoaded', this.updateSizes); // when the component is rendered we need to calculate
      // the container size to adjust the responsive behaviour

      this.updateSizes();
    }
  }, {
    key: "destroyThumbs",
    value: function destroyThumbs() {
      // removing listeners
      (0, _window.default)().removeEventListener('resize', this.updateSizes);
      (0, _window.default)().removeEventListener('DOMContentLoaded', this.updateSizes);
    }
  }, {
    key: "getFirstItem",
    value: function getFirstItem(selectedItem) {
      var firstItem = selectedItem;

      if (selectedItem >= this.state.lastPosition) {
        firstItem = this.state.lastPosition;
      }

      if (selectedItem < this.state.firstItem + this.state.visibleItems) {
        firstItem = this.state.firstItem;
      }

      if (selectedItem < this.state.firstItem) {
        firstItem = selectedItem;
      }

      return firstItem;
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this2 = this;

      return this.props.children.map(function (img, index) {
        var itemClass = _cssClasses.default.ITEM(false, index === _this2.state.selectedItem);

        var thumbProps = {
          key: index,
          ref: function ref(e) {
            return _this2.setThumbsRef(e, index);
          },
          className: itemClass,
          onClick: _this2.handleClickItem.bind(_this2, index, _this2.props.children[index]),
          onKeyDown: _this2.handleClickItem.bind(_this2, index, _this2.props.children[index]),
          'aria-label': "".concat(_this2.props.labels.item, " ").concat(index + 1),
          style: {
            width: _this2.props.thumbWidth
          }
        };
        return /*#__PURE__*/_react.default.createElement("li", _extends({}, thumbProps, {
          role: "button",
          tabIndex: 0
        }), img);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (!this.props.children) {
        return null;
      }

      var isSwipeable = _react.Children.count(this.props.children) > 1; // show left arrow?

      var hasPrev = this.state.showArrows && this.state.firstItem > 0; // show right arrow

      var hasNext = this.state.showArrows && this.state.firstItem < this.state.lastPosition; // obj to hold the transformations and styles

      var itemListStyles = {};
      var currentPosition = -this.state.firstItem * (this.state.itemSize || 0);
      var transformProp = (0, _CSSTranslate.default)(currentPosition, 'px', this.props.axis);
      var transitionTime = this.props.transitionTime + 'ms';
      itemListStyles = {
        WebkitTransform: transformProp,
        MozTransform: transformProp,
        MsTransform: transformProp,
        OTransform: transformProp,
        transform: transformProp,
        msTransform: transformProp,
        WebkitTransitionDuration: transitionTime,
        MozTransitionDuration: transitionTime,
        MsTransitionDuration: transitionTime,
        OTransitionDuration: transitionTime,
        transitionDuration: transitionTime,
        msTransitionDuration: transitionTime
      };
      return /*#__PURE__*/_react.default.createElement("div", {
        className: _cssClasses.default.CAROUSEL(false)
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: _cssClasses.default.WRAPPER(false),
        ref: this.setItemsWrapperRef
      }, /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: _cssClasses.default.ARROW_PREV(!hasPrev),
        onClick: function onClick() {
          return _this3.slideRight();
        },
        "aria-label": this.props.labels.leftArrow
      }), isSwipeable ? /*#__PURE__*/_react.default.createElement(_reactEasySwipe.default, {
        tagName: "ul",
        className: _cssClasses.default.SLIDER(false, this.state.swiping),
        onSwipeLeft: this.slideLeft,
        onSwipeRight: this.slideRight,
        onSwipeMove: this.onSwipeMove,
        onSwipeStart: this.onSwipeStart,
        onSwipeEnd: this.onSwipeEnd,
        style: itemListStyles,
        innerRef: this.setItemsListRef,
        allowMouseEvents: this.props.emulateTouch
      }, this.renderItems()) : /*#__PURE__*/_react.default.createElement("ul", {
        className: _cssClasses.default.SLIDER(false, this.state.swiping),
        ref: function ref(node) {
          return _this3.setItemsListRef(node);
        },
        style: itemListStyles
      }, this.renderItems()), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: _cssClasses.default.ARROW_NEXT(!hasNext),
        onClick: function onClick() {
          return _this3.slideLeft();
        },
        "aria-label": this.props.labels.rightArrow
      })));
    }
  }]);

  return Thumbs;
}(_react.Component);

exports["default"] = Thumbs;

_defineProperty(Thumbs, "displayName", 'Thumbs');

_defineProperty(Thumbs, "defaultProps", {
  axis: 'horizontal',
  labels: {
    leftArrow: 'previous slide / item',
    rightArrow: 'next slide / item',
    item: 'slide item'
  },
  selectedItem: 0,
  thumbWidth: 80,
  transitionTime: 350
});

/***/ }),

/***/ 3349:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _classnames = _interopRequireDefault(__webpack_require__(4641));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  ROOT: function ROOT(customClassName) {
    return (0, _classnames.default)(_defineProperty({
      'carousel-root': true
    }, customClassName || '', !!customClassName));
  },
  CAROUSEL: function CAROUSEL(isSlider) {
    return (0, _classnames.default)({
      carousel: true,
      'carousel-slider': isSlider
    });
  },
  WRAPPER: function WRAPPER(isSlider, axis) {
    return (0, _classnames.default)({
      'thumbs-wrapper': !isSlider,
      'slider-wrapper': isSlider,
      'axis-horizontal': axis === 'horizontal',
      'axis-vertical': axis !== 'horizontal'
    });
  },
  SLIDER: function SLIDER(isSlider, isSwiping) {
    return (0, _classnames.default)({
      thumbs: !isSlider,
      slider: isSlider,
      animated: !isSwiping
    });
  },
  ITEM: function ITEM(isSlider, selected, previous) {
    return (0, _classnames.default)({
      thumb: !isSlider,
      slide: isSlider,
      selected: selected,
      previous: previous
    });
  },
  ARROW_PREV: function ARROW_PREV(disabled) {
    return (0, _classnames.default)({
      'control-arrow control-prev': true,
      'control-disabled': disabled
    });
  },
  ARROW_NEXT: function ARROW_NEXT(disabled) {
    return (0, _classnames.default)({
      'control-arrow control-next': true,
      'control-disabled': disabled
    });
  },
  DOT: function DOT(selected) {
    return (0, _classnames.default)({
      dot: true,
      selected: selected
    });
  }
};
exports["default"] = _default;

/***/ }),

/***/ 1032:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.outerWidth = void 0;

var outerWidth = function outerWidth(el) {
  var width = el.offsetWidth;
  var style = getComputedStyle(el);
  width += parseInt(style.marginLeft) + parseInt(style.marginRight);
  return width;
};

exports.outerWidth = outerWidth;

/***/ }),

/***/ 9610:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
Object.defineProperty(exports, "lr", ({
  enumerable: true,
  get: function get() {
    return _Carousel.default;
  }
}));
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _types.CarouselProps;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _Thumbs.default;
  }
});

var _Carousel = _interopRequireDefault(__webpack_require__(8465));

var _types = __webpack_require__(5862);

var _Thumbs = _interopRequireDefault(__webpack_require__(8076));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 4102:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _default = function _default() {
  return document;
};

exports["default"] = _default;

/***/ }),

/***/ 626:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _default = function _default() {
  return window;
};

exports["default"] = _default;

/***/ }),

/***/ 4641:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ })

};
;