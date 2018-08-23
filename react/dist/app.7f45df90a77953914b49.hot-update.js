webpackHotUpdate("app",{

/***/ "./store/collection/reducer.js":
/*!*************************************!*\
  !*** ./store/collection/reducer.js ***!
  \*************************************/
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
        collections: payload
      });
    default:
      return state;
  }
};

var _actions = __webpack_require__(/*! ../actions */ "./store/actions.js");

var initialState = {
  collections: []
};

/***/ }),

/***/ "./store/reducers.js":
/*!***************************!*\
  !*** ./store/reducers.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(/*! redux */ "../node_modules/redux/es/index.js");

var _reducer = __webpack_require__(/*! ./application/reducer */ "./store/application/reducer.js");

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = __webpack_require__(/*! ./collection/reducer */ "./store/collection/reducer.js");

var _reducer4 = _interopRequireDefault(_reducer3);

var _reducer5 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./flashcard/reducer\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _reducer6 = _interopRequireDefault(_reducer5);

var _reducer7 = __webpack_require__(/*! ./feedback/reducer */ "./store/feedback/reducer.js");

var _reducer8 = _interopRequireDefault(_reducer7);

var _reducer9 = __webpack_require__(/*! ./session/reducer */ "./store/session/reducer.js");

var _reducer10 = _interopRequireDefault(_reducer9);

var _reducer11 = __webpack_require__(/*! ./user/reducer */ "./store/user/reducer.js");

var _reducer12 = _interopRequireDefault(_reducer11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  application: _reducer2.default,
  collection: _reducer4.default,
  flashcard: _reducer6.default,
  feedback: _reducer8.default,
  session: _reducer10.default,
  user: _reducer12.default
});

/***/ })

})
//# sourceMappingURL=app.7f45df90a77953914b49.hot-update.js.map