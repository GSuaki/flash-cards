webpackHotUpdate("app",{

/***/ "./store/flashcard/reducer.js":
/*!************************************!*\
  !*** ./store/flashcard/reducer.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var _reducer5 = __webpack_require__(/*! ./flashcard/reducer */ "./store/flashcard/reducer.js");

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
//# sourceMappingURL=app.3a79d6f51e345a0940fd.hot-update.js.map