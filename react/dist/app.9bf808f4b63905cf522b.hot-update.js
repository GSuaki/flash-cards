webpackHotUpdate("app",{

/***/ "./components/Card/Card.js":
/*!*********************************!*\
  !*** ./components/Card/Card.js ***!
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

var _reactPlaceholder = __webpack_require__(/*! react-placeholder */ "../node_modules/react-placeholder/lib/index.js");

var _reactPlaceholder2 = _interopRequireDefault(_reactPlaceholder);

var _placeholders = __webpack_require__(/*! react-placeholder/lib/placeholders */ "../node_modules/react-placeholder/lib/placeholders/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_Component) {
  _inherits(Card, _Component);

  function Card(props) {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));
  }

  _createClass(Card, [{
    key: 'getPlaceholder',
    value: function getPlaceholder() {
      return _react2.default.createElement(
        'div',
        { className: 'awesome-placeholder' },
        _react2.default.createElement(_placeholders.RectShape, { color: '#e4e4e4', style: { width: '100%', height: 158 } }),
        _react2.default.createElement(_placeholders.TextBlock, { rows: 7, color: '#e4e4e4', style: { padding: 10 } })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var placeholder = this.props.item.placeholder;


      return _react2.default.createElement(
        'div',
        { className: 'card', onClick: this.clickListener },
        _react2.default.createElement(
          _reactPlaceholder2.default,
          { showLoadingAnimation: true, ready: !placeholder, customPlaceholder: this.getPlaceholder() },
          this.renderContent()
        )
      );
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {}
  }, {
    key: 'clickListener',
    value: function clickListener() {}
  }]);

  return Card;
}(_react.Component);

exports.default = Card;

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
  }, {
    key: 'clickListener',
    value: function clickListener() {}
  }]);

  return CollectionCard;
}(_Card3.default);

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var mapDispatchToProps = {
  fetchCards: fetchCards
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

var _reactRedux = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");

var _List = __webpack_require__(/*! ../../../../components/List/List */ "./components/List/List.js");

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
      return _react2.default.createElement(_List2.default, {
        items: this.props.collections,
        itemRendered: this.renderItem,
        emptyTemplate: this.emptyTemplate()
      });
    }
  }, {
    key: 'renderItem',
    value: function renderItem(item) {
      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-12' },
          _react2.default.createElement(_CollectionCard2.default, { key: item.id, item: item })
        )
      );
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

var mapStateToProps = function mapStateToProps(state) {
  return {};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CollectionView);

/***/ })

})
//# sourceMappingURL=app.9bf808f4b63905cf522b.hot-update.js.map