webpackHotUpdate("app",{

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
    case _actions.COLLECTION_RESPONSE:
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
//# sourceMappingURL=app.46059d18040ff52c58f3.hot-update.js.map