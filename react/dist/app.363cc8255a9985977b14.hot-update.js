webpackHotUpdate("app",{

/***/ "./services/RestClient.js":
/*!********************************!*\
  !*** ./services/RestClient.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _axios = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _config = __webpack_require__(/*! ../../config/config */ "../config/config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isAuthenticated = function isAuthenticated() {
  return localStorage.getItem('x-auth-token') != null;
};

var getAuthorizationHeader = function getAuthorizationHeader() {
  return {
    Authorization: localStorage.getItem('x-auth-token')
  };
};

var getHeaders = function getHeaders() {
  return {
    headers: _extends({}, isAuthenticated() ? getAuthorizationHeader() : {})
  };
};

exports.default = function () {
  return _axios2.default.create(_extends({
    baseURL: _config2.default.API_URL
  }, getHeaders()));
};

/***/ })

})
//# sourceMappingURL=app.363cc8255a9985977b14.hot-update.js.map