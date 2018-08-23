webpackHotUpdate("app",{

/***/ "./pages/FlashCard/FlashCard.js":
/*!**************************************!*\
  !*** ./pages/FlashCard/FlashCard.js ***!
  \**************************************/
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

var _CollectionView = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./components/CollectionView/CollectionView\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _CollectionView2 = _interopRequireDefault(_CollectionView);

var _actions = __webpack_require__(/*! ../../store/flashcard/actions */ "./store/flashcard/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collection = function (_React$Component) {
  _inherits(Collection, _React$Component);

  function Collection(props) {
    _classCallCheck(this, Collection);

    return _possibleConstructorReturn(this, (Collection.__proto__ || Object.getPrototypeOf(Collection)).call(this, props));
  }

  _createClass(Collection, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.flashcards.length == 0) {
        this.props.fetchCards();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        null,
        _react2.default.createElement(
          "div",
          { className: "container fadeInDown gotham-light" },
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "div",
              { className: "col-12" },
              this.renderList()
            )
          )
        )
      );
    }
  }, {
    key: "renderList",
    value: function renderList() {
      return _react2.default.createElement(_CollectionView2.default, { collections: this.props.flashcards });
    }
  }, {
    key: "emptyTemplate",
    value: function emptyTemplate() {
      return _react2.default.createElement(
        "div",
        { className: "text-center", style: { paddingTop: 20 } },
        _react2.default.createElement(
          "h3",
          null,
          "N\xE3o encontramos artistas com os filtros utilizados =("
        )
      );
    }
  }]);

  return Collection;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    flashcards: state.flashcard.data
  };
};

var mapDispatchToProps = {
  fetchCards: _actions.fetchCards
};

exports.default = (0, _redux.compose)(_reactRouter.withRouter, (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(Collection);

/***/ }),

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
    path: "/flash-cards",
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
//# sourceMappingURL=app.4839cba31f7cbe87a70c.hot-update.js.map