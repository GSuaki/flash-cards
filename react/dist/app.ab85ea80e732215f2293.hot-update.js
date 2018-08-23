webpackHotUpdate("app",{

/***/ "../node_modules/react-placeholder/lib/ReactPlaceholder.js":
false,

/***/ "../node_modules/react-placeholder/lib/index.js":
false,

/***/ "../node_modules/react-placeholder/lib/placeholders/MediaBlock.js":
false,

/***/ "../node_modules/react-placeholder/lib/placeholders/RectShape.js":
false,

/***/ "../node_modules/react-placeholder/lib/placeholders/RoundShape.js":
false,

/***/ "../node_modules/react-placeholder/lib/placeholders/TextBlock.js":
false,

/***/ "../node_modules/react-placeholder/lib/placeholders/TextRow.js":
false,

/***/ "../node_modules/react-placeholder/lib/placeholders/index.js":
false,

/***/ "./components/Card/Card.js":
false,

/***/ "./components/CollectionView/CollectionCard/CollectionCard.js":
false,

/***/ "./components/CollectionView/CollectionView.js":
false,

/***/ "./components/List/List.js":
false,

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
      console.log(this.props.collections);
      return _react2.default.createElement(
        "section",
        null,
        _react2.default.createElement(
          _SideBar2.default,
          null,
          _react2.default.createElement(
            "div",
            { className: "wrapper fadeInDown gotham-light" },
            this.renderList()
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

var _Card2 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../Card/Card\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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
      var title = this.props.item.title;


      return _react2.default.createElement(
        'div',
        { className: 'card-body' },
        _react2.default.createElement(
          'h4',
          null,
          title
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

/***/ }),

/***/ "./pages/Collection/components/CollectionView/CollectionView.js":
/*!**********************************************************************!*\
  !*** ./pages/Collection/components/CollectionView/CollectionView.js ***!
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

var _List = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../List/List\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _List2 = _interopRequireDefault(_List);

var _CollectionCard = __webpack_require__(/*! ../CollectionCard/CollectionCard */ "./pages/Collection/components/CollectionCard/CollectionCard.js");

var _CollectionCard2 = _interopRequireDefault(_CollectionCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CollectionView = function (_React$Component) {
  _inherits(CollectionView, _React$Component);

  function CollectionView(props) {
    _classCallCheck(this, CollectionView);

    return _possibleConstructorReturn(this, (CollectionView.__proto__ || Object.getPrototypeOf(CollectionView)).call(this, props));
  }

  _createClass(CollectionView, [{
    key: 'render',
    value: function render() {
      console.log(this.props.collections);
      return _react2.default.createElement(_List2.default, {
        items: this.props.collections,
        itemRendered: this.renderItem,
        emptyTemplate: this.emptyTemplate()
      });
    }
  }, {
    key: 'renderItem',
    value: function renderItem(item) {
      return _react2.default.createElement(_CollectionCard2.default, { item: item });
    }
  }, {
    key: 'emptyTemplate',
    value: function emptyTemplate() {
      return _react2.default.createElement(
        'div',
        { className: 'text-center', style: { paddingTop: 20 } },
        _react2.default.createElement(
          'h3',
          null,
          'Crie sua primeira cole\xE7\xE3o =)'
        )
      );
    }
  }]);

  return CollectionView;
}(_react2.default.Component);

exports.default = CollectionView;

/***/ })

})
//# sourceMappingURL=app.ab85ea80e732215f2293.hot-update.js.map