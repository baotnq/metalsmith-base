webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	var _utilDom = __webpack_require__(2);

	var _utilDom2 = _interopRequireDefault(_utilDom);

	var _functions = __webpack_require__(3);

	var _functions2 = _interopRequireDefault(_functions);

	_utilDom2['default'].ready(function () {
	  // Load the function based on the body tag data-function=""
	  var func = _utilDom2['default'].getFunctionName(document.body.attributes);
	  if (func !== undefined && _functions2['default'][func] !== undefined) {
	    _functions2['default'][func]();
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  ready: function ready(fn) {
	    if (document.readyState != 'loading') {
	      fn();
	    } else if (document.addEventListener) {
	      document.addEventListener('DOMContentLoaded', fn);
	    } else {
	      document.attachEvent('onreadystatechange', function () {
	        if (document.readyState != 'loading') fn();
	      });
	    }
	  },

	  getFunctionName: function getFunctionName(attributes) {
	    var func = undefined;

	    Array.prototype.slice.call(attributes).forEach(function (item) {
	      if (item.name === 'data-function') {
	        func = item.value;
	      }
	    });

	    return func;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  home: __webpack_require__(4)
	};
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function () {
	  window.console.log('Home page');
	};

	module.exports = exports['default'];

/***/ }
]);