webpackHotUpdate("app",{

/***/ "./store/actions.js":
/*!**************************!*\
  !*** ./store/actions.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ACCOUNT_CREATED = exports.ACCOUNT_CREATED = 'ACCOUNT/CREATED';
var FORGOT_PASSWORD = exports.FORGOT_PASSWORD = 'FORGOT/PASSWORD';
var INCREASE_COUNT = exports.INCREASE_COUNT = 'INCREASE/COUNT';

// Collection
var COLLECTION_REQUEST = exports.COLLECTION_REQUEST = 'COLLECTION/REQUEST';
var COLLECTION_RESPONSE = exports.COLLECTION_RESPONSE = 'COLLECTION/RESPONSE';

// Collection
var FLASHCARD_REQUEST = exports.FLASHCARD_REQUEST = 'FLASHCARD/REQUEST';
var FLASHCARD_RESPONSE = exports.FLASHCARD_RESPONSE = 'FLASHCARD/RESPONSE';

// Feedback
var FEEDBACK_SUCCESS = exports.FEEDBACK_SUCCESS = 'FEEDBACK/SUCCESS';
var FEEDBACK_FAILED = exports.FEEDBACK_FAILED = 'FEEDBACK/FAILED';

// Session
var AUTHENTICATED = exports.AUTHENTICATED = 'AUTHENTICATED/USER';
var UNAUTHENTICATED = exports.UNAUTHENTICATED = 'UNAUTHENTICATED/USER';
var AUTHENTICATION_FAILED = exports.AUTHENTICATION_FAILED = 'AUTHENTICATION/FAILED';

// User
var STORE_USER = exports.STORE_USER = 'STORE/USER';
var CLEAN_USER = exports.CLEAN_USER = 'CLEAR/USER';

exports.default = {
  ACCOUNT_CREATED: ACCOUNT_CREATED,
  FORGOT_PASSWORD: FORGOT_PASSWORD,
  INCREASE_COUNT: INCREASE_COUNT,
  FEEDBACK_SUCCESS: FEEDBACK_SUCCESS,
  FEEDBACK_FAILED: FEEDBACK_FAILED,
  AUTHENTICATED: AUTHENTICATED,
  UNAUTHENTICATED: UNAUTHENTICATED,
  AUTHENTICATION_FAILED: AUTHENTICATION_FAILED,
  STORE_USER: STORE_USER,
  CLEAN_USER: CLEAN_USER,
  COLLECTION_REQUEST: COLLECTION_REQUEST,
  COLLECTION_RESPONSE: COLLECTION_RESPONSE,
  FLASHCARD_REQUEST: FLASHCARD_REQUEST,
  FLASHCARD_RESPONSE: FLASHCARD_RESPONSE
};

/***/ }),

/***/ "./store/flashcard/reducer.js":
/*!************************************!*\
  !*** ./store/flashcard/reducer.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var _ref = arguments[1];
  var payload = _ref.payload,
      type = _ref.type;

  switch (type) {
    case _actions.FLASHCARD_RESPONSE:
      return _extends({}, state, {
        data: payload
      });
    default:
      return state;
  }
};

var _actions = __webpack_require__(/*! ../actions */ "./store/actions.js");

var initialState = {
  data: []
};

/***/ })

})
//# sourceMappingURL=app.bdcd78d9fba32469fc34.hot-update.js.map