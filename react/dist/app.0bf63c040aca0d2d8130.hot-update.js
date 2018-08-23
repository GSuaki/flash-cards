webpackHotUpdate("app",{

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Login = __webpack_require__(/*! ./pages/Login/Login */ "./pages/Login/Login.js");

var _Login2 = _interopRequireDefault(_Login);

var _Collection = __webpack_require__(/*! ./pages/Collection/Collection */ "./pages/Collection/Collection.js");

var _Collection2 = _interopRequireDefault(_Collection);

var _FlashCard = __webpack_require__(/*! ./pages/FlashCard/FlashCard */ "./pages/FlashCard/FlashCard.js");

var _FlashCard2 = _interopRequireDefault(_FlashCard);

var _CreateAccount = __webpack_require__(/*! ./pages/CreateAccount/CreateAccount */ "./pages/CreateAccount/CreateAccount.js");

var _CreateAccount2 = _interopRequireDefault(_CreateAccount);

var _ForgotPassword = __webpack_require__(/*! ./pages/ForgotPassword/ForgotPassword */ "./pages/ForgotPassword/ForgotPassword.js");

var _ForgotPassword2 = _interopRequireDefault(_ForgotPassword);

var _AuthManager = __webpack_require__(/*! ./components/Hoc/AuthManager */ "./components/Hoc/AuthManager.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
    path: "/",
    component: (0, _AuthManager.withAuthRequired)(_Collection2.default),
    exact: true
}, {
    path: "/collections",
    component: (0, _AuthManager.withAuthRequired)(_Collection2.default),
    exact: true
}, {
    path: "/collections/:id/flash-cards",
    component: (0, _AuthManager.withAuthRequired)(_FlashCard2.default),
    exact: true
}, {
    path: "/login",
    component: (0, _AuthManager.withUnauthRequired)(_Login2.default),
    exact: true
}, {
    path: "/forgot-password",
    component: (0, _AuthManager.withUnauthRequired)(_ForgotPassword2.default),
    exact: true
}, {
    path: "/create-account",
    component: (0, _AuthManager.withUnauthRequired)(_CreateAccount2.default),
    exact: true
}];

/***/ })

})
//# sourceMappingURL=app.0bf63c040aca0d2d8130.hot-update.js.map