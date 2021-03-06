webpackHotUpdate("app",{

/***/ "./services/CollectionService.js":
/*!***************************************!*\
  !*** ./services/CollectionService.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetch = fetch;

var _RestClient = __webpack_require__(/*! ./RestClient */ "./services/RestClient.js");

var _RestClient2 = _interopRequireDefault(_RestClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Methods
 */
function fetch() {
  return (0, _RestClient2.default)()({
    method: 'get',
    contentType: "application/json; charset=utf-8",
    url: '/collections'
  }).then(function (resp) {
    return resp.data;
  });
}

/**
 * Expose Service
 */
exports.default = {
  fetch: fetch
};

/***/ })

})
//# sourceMappingURL=app.669b37d46965406d0fd3.hot-update.js.map