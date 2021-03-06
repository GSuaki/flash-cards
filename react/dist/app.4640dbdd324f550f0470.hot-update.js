webpackHotUpdate("app",{

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

var _actions = __webpack_require__(/*! ../../../../store/flashcard/actions */ "./store/flashcard/actions.js");

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

    var _this = _possibleConstructorReturn(this, (CollectionCard.__proto__ || Object.getPrototypeOf(CollectionCard)).call(this, props));

    _this.clickListener = _this.clickListener.bind(_this);
    return _this;
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
        { className: 'card-body' },
        _react2.default.createElement(
          'h5',
          { className: 'card-title' },
          title
        ),
        _react2.default.createElement(
          'p',
          { className: 'card-text' },
          description
        ),
        _react2.default.createElement(
          'a',
          { href: '#', className: 'btn btn-primary' },
          'Go somewhere'
        )
      );
    }
  }, {
    key: 'clickListener',
    value: function clickListener() {
      this.props.fetchCards();
    }
  }]);

  return CollectionCard;
}(_Card3.default);

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var mapDispatchToProps = {
  fetchCards: _actions.fetchCards
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CollectionCard);

/***/ })

})
//# sourceMappingURL=app.4640dbdd324f550f0470.hot-update.js.map