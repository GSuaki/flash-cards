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
    headers: {
      'Authorizarion': 'Bearer ' + localStorage.getItem('x-auth-token')
    }
  };
};

exports.default = function () {
  return _axios2.default.create(_extends({
    baseURL: _config2.default.API_URL
  }, isAuthenticated() ? getAuthorizationHeader() : {}));
};

/***/ }),

/***/ "./services/UserService.js":
/*!*********************************!*\
  !*** ./services/UserService.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doLogin = doLogin;
exports.createUser = createUser;
exports.forgoPassword = forgoPassword;

var _RestClient = __webpack_require__(/*! ./RestClient */ "./services/RestClient.js");

var _RestClient2 = _interopRequireDefault(_RestClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function doLogin(data) {
  return (0, _RestClient2.default)()({
    method: 'post',
    contentType: "application/json; charset=utf-8",
    url: '/auth',
    data: data
  });
}

function createUser(data) {
  return (0, _RestClient2.default)()({
    method: 'post',
    contentType: "application/json; charset=utf-8",
    url: '/users',
    data: data
  }).then(function (resp) {
    return resp.data;
  });
}

function forgoPassword(email) {
  return (0, _RestClient2.default)()({
    method: 'post',
    contentType: "application/json; charset=utf-8",
    url: '/forgot-password',
    data: {
      email: email
    }
  }).then(function (resp) {
    return resp.data;
  });
}

/**
 * Expose Service
 */
exports.default = {
  createUser: createUser,
  doLogin: doLogin,
  forgoPassword: forgoPassword
};

/***/ })

})
//# sourceMappingURL=app.76e5abd47034bdea0f8d.hot-update.js.map