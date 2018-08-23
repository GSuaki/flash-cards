webpackHotUpdate("app",{

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
        { className: 'row', key: item.id },
        _react2.default.createElement(
          'div',
          { className: 'col-12' },
          _react2.default.createElement(_CollectionCard2.default, { item: item })
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
//# sourceMappingURL=app.c73b86a0ffaf697d7577.hot-update.js.map