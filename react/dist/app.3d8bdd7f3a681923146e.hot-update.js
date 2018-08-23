webpackHotUpdate("app",{

/***/ "./pages/Home/Home.js":
/*!****************************!*\
  !*** ./pages/Home/Home.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(/*! redux */ "../node_modules/redux/es/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");

var _reactRouter = __webpack_require__(/*! react-router */ "../node_modules/react-router/es/index.js");

var _SideBar = __webpack_require__(/*! ../../components/SideBar/SideBar */ "./components/SideBar/SideBar.js");

var _SideBar2 = _interopRequireDefault(_SideBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          collections = _props.collections,
          fetchCollections = _props.fetchCollections;

      if (collections.length == 0) {
        fetchCollections();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        null,
        _react2.default.createElement(
          _SideBar2.default,
          null,
          _react2.default.createElement(
            "div",
            { className: "wrapper fadeInDown gotham-light" },
            _react2.default.createElement(
              "h4",
              null,
              "HELLO THERE"
            ),
            _react2.default.createElement(
              "button",
              { onClick: this.toggleOpen },
              "Toggle Open"
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user
  };
};

var mapDispatchToProps = {};

exports.default = (0, _redux.compose)(_reactRouter.withRouter, (0, _reactRedux.connect)(mapStateToProps, null))(Home);

/***/ }),

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

var COLLECTION_REQUEST = exports.COLLECTION_REQUEST = 'COLLECTION/REQUEST';
var COLLECTION_RESPONSE = exports.COLLECTION_RESPONSE = 'COLLECTION/RESPONSE';

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
  COLLECTION_RESPONSE: COLLECTION_RESPONSE
};

/***/ })

})
//# sourceMappingURL=app.3d8bdd7f3a681923146e.hot-update.js.map