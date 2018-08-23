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

var _actions = __webpack_require__(/*! ../../store/collection/actions */ "./store/collection/actions.js");

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
      if (this.props.collections.length == 0) {
        this.props.fetchCollections();
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
    collections: state.collections.data
  };
};

var mapDispatchToProps = {
  fetchCollections: _actions.fetchCollections
};

exports.default = (0, _redux.compose)(_reactRouter.withRouter, (0, _reactRedux.connect)(mapStateToProps, null))(Home);

/***/ }),

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
    url: '/collections',
    data: data
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

/***/ }),

/***/ "./store/collection/actions.js":
/*!*************************************!*\
  !*** ./store/collection/actions.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchCollections = undefined;

var _actions = __webpack_require__(/*! ../actions */ "./store/actions.js");

var _CollectionService = __webpack_require__(/*! ../../services/CollectionService */ "./services/CollectionService.js");

var _CollectionService2 = _interopRequireDefault(_CollectionService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchCollections = exports.fetchCollections = function fetchCollections() {
  console.log('Fetching collections...');
  return function (dispatch) {
    return _CollectionService2.default.fetch().then(function (payload) {
      dispatch({ type: _actions.COLLECTION_RESPONSE, payload: payload });
      return payload;
    });
  };
};

exports.default = {
  fetchCollections: fetchCollections
};

/***/ }),

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
//# sourceMappingURL=app.575cf0720e0cc6cf6e7c.hot-update.js.map