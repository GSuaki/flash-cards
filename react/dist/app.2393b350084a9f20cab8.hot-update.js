webpackHotUpdate("app",{

/***/ "./pages/Collection/Collection.js":
/*!****************************************!*\
  !*** ./pages/Collection/Collection.js ***!
  \****************************************/
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

var _CollectionView = __webpack_require__(/*! ./components/CollectionView/CollectionView */ "./pages/Collection/components/CollectionView/CollectionView.js");

var _CollectionView2 = _interopRequireDefault(_CollectionView);

var _actions = __webpack_require__(/*! ../../store/collection/actions */ "./store/collection/actions.js");

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
        )
      );
    }
  }, {
    key: "renderList",
    value: function renderList() {
      return _react2.default.createElement(_CollectionView2.default, { collections: this.props.collections });
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
    collections: state.collection.data
  };
};

var mapDispatchToProps = {
  fetchCollections: _actions.fetchCollections
};

exports.default = (0, _redux.compose)(_reactRouter.withRouter, (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(Collection);

/***/ }),

/***/ "./pages/Collection/components/CollectionCard/CollectionCard.js":
/*!**********************************************************************!*\
  !*** ./pages/Collection/components/CollectionCard/CollectionCard.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");

var _Card2 = __webpack_require__(/*! ../../../../components/Card/Card */ "./components/Card/Card.js");

var _Card3 = _interopRequireDefault(_Card2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var formatAbout = function formatAbout() {
  var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return val.length > 100 ? val.substring(0, 100).concat('...') : val;
};

var CollectionCard = function (_Card) {
  _inherits(CollectionCard, _Card);

  function CollectionCard(props) {
    _classCallCheck(this, CollectionCard);

    return _possibleConstructorReturn(this, (CollectionCard.__proto__ || Object.getPrototypeOf(CollectionCard)).call(this, props));
  }

  _createClass(CollectionCard, [{
    key: 'renderContent',
    value: function renderContent() {
      var _props$item = this.props.item,
          title = _props$item.title,
          _props$item$descripti = _props$item.description,
          description = _props$item$descripti === undefined ? '' : _props$item$descripti;


      return _react2.default.createElement(
        'div',
        { 'class': 'card-body' },
        _react2.default.createElement(
          'h5',
          { 'class': 'card-title' },
          title
        ),
        _react2.default.createElement(
          'p',
          { 'class': 'card-text' },
          description
        ),
        _react2.default.createElement(
          'a',
          { href: '#', 'class': 'btn btn-primary' },
          'Go somewhere'
        )
      );
    }
  }]);

  return CollectionCard;
}(_Card3.default);

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CollectionCard);

/***/ })

})
//# sourceMappingURL=app.2393b350084a9f20cab8.hot-update.js.map