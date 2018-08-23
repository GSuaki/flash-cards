webpackHotUpdate("app",{

/***/ "./components/CollectionView/CollectionView.js":
/*!*****************************************************!*\
  !*** ./components/CollectionView/CollectionView.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _List = __webpack_require__(/*! ../List/List */ "./components/List/List.js");

var _List2 = _interopRequireDefault(_List);

var _CollectionCard = __webpack_require__(/*! ./CollectionCard/CollectionCard */ "./components/CollectionView/CollectionCard/CollectionCard.js");

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

/***/ }),

/***/ "./components/List/List.js":
/*!*********************************!*\
  !*** ./components/List/List.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_Component) {
  _inherits(List, _Component);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  _createClass(List, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "grid" },
        _react2.default.createElement(
          "ul",
          { className: "list-inline" },
          this.renderItems()
        )
      );
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _props = this.props,
          items = _props.items,
          emptyTemplate = _props.emptyTemplate,
          itemRendered = _props.itemRendered;

      return items.length ? items.map(itemRendered) : emptyTemplate;
    }
  }]);

  return List;
}(_react.Component);

exports.default = List;

/***/ })

})
//# sourceMappingURL=app.bc4c64ae5d2501f95ece.hot-update.js.map