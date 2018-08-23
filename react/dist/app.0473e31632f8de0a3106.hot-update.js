webpackHotUpdate("app",{

/***/ "../node_modules/react-placeholder/lib/ReactPlaceholder.js":
/*!*****************************************************************!*\
  !*** ../node_modules/react-placeholder/lib/ReactPlaceholder.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
exports.__esModule = true;
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
var placeholders = __webpack_require__(/*! ./placeholders */ "../node_modules/react-placeholder/lib/placeholders/index.js");
var ReactPlaceholder = /** @class */ (function (_super) {
    __extends(ReactPlaceholder, _super);
    function ReactPlaceholder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            ready: _this.props.ready
        };
        _this.getFiller = function () {
            var _a = _this.props, firstLaunchOnly = _a.firstLaunchOnly, children = _a.children, ready = _a.ready, className = _a.className, // eslint-disable-line no-unused-vars
            type = _a.type, customPlaceholder = _a.customPlaceholder, showLoadingAnimation = _a.showLoadingAnimation, rest = __rest(_a, ["firstLaunchOnly", "children", "ready", "className", "type", "customPlaceholder", "showLoadingAnimation"]);
            var classes = showLoadingAnimation ?
                ['show-loading-animation', className].filter(function (c) { return c; }).join(' ') :
                className;
            if (customPlaceholder && React.isValidElement(customPlaceholder)) {
                var mergedCustomClasses = [
                    customPlaceholder.props.className,
                    classes
                ].filter(function (c) { return c; }).join(' ');
                return React.cloneElement(customPlaceholder, { className: mergedCustomClasses });
            }
            else if (customPlaceholder) {
                return customPlaceholder;
            }
            var Placeholder = placeholders[type];
            return React.createElement(Placeholder, __assign({}, rest, { className: classes }));
        };
        _this.setNotReady = function () {
            var delay = _this.props.delay;
            if (delay && delay > 0) {
                _this.timeout = window.setTimeout(function () {
                    _this.setState({ ready: false });
                }, delay);
            }
            else {
                _this.setState({ ready: false });
            }
        };
        _this.setReady = function () {
            if (_this.timeout) {
                window.clearTimeout(_this.timeout);
            }
            if (!_this.state.ready) {
                _this.setState({ ready: true });
            }
        };
        return _this;
    }
    ReactPlaceholder.prototype.render = function () {
        return this.state.ready ? this.props.children : this.getFiller();
    };
    ReactPlaceholder.prototype.componentWillReceiveProps = function (nextProps) {
        if (!this.props.firstLaunchOnly && this.state.ready && !nextProps.ready) {
            this.setNotReady();
        }
        else if (nextProps.ready) {
            this.setReady();
        }
    };
    ReactPlaceholder.propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.element
        ]).isRequired,
        delay: PropTypes.number,
        ready: PropTypes.bool.isRequired,
        firstLaunchOnly: PropTypes.bool,
        type: PropTypes.oneOf(['text', 'media', 'textRow', 'rect', 'round']),
        rows: PropTypes.number,
        color: PropTypes.string,
        showLoadingAnimation: PropTypes.bool,
        customPlaceholder: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.element
        ]),
        className: PropTypes.string,
        style: PropTypes.object
    };
    ReactPlaceholder.defaultProps = {
        delay: 0,
        type: 'text',
        color: '#CDCDCD'
    };
    return ReactPlaceholder;
}(React.Component));
exports["default"] = ReactPlaceholder;


/***/ }),

/***/ "../node_modules/react-placeholder/lib/index.js":
/*!******************************************************!*\
  !*** ../node_modules/react-placeholder/lib/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ReactPlaceholder_1 = __webpack_require__(/*! ./ReactPlaceholder */ "../node_modules/react-placeholder/lib/ReactPlaceholder.js");
exports["default"] = ReactPlaceholder_1["default"];


/***/ }),

/***/ "../node_modules/react-placeholder/lib/placeholders/MediaBlock.js":
/*!************************************************************************!*\
  !*** ../node_modules/react-placeholder/lib/placeholders/MediaBlock.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
var TextBlock_1 = __webpack_require__(/*! ./TextBlock */ "../node_modules/react-placeholder/lib/placeholders/TextBlock.js");
var RoundShape_1 = __webpack_require__(/*! ./RoundShape */ "../node_modules/react-placeholder/lib/placeholders/RoundShape.js");
var MediaBlock = /** @class */ (function (_super) {
    __extends(MediaBlock, _super);
    function MediaBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaBlock.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, color = _a.color, rows = _a.rows;
        var classes = ['media-block', className].filter(function (c) { return c; }).join(' ');
        return (React.createElement("div", { className: classes, style: __assign({}, style, { display: 'flex' }) },
            React.createElement(RoundShape_1["default"], { color: color, style: { minHeight: 55, width: 55, minWidth: 55, marginRight: 10 } }),
            React.createElement(TextBlock_1["default"], { color: color, rows: rows })));
    };
    MediaBlock.propTypes = {
        rows: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
        style: PropTypes.object,
        className: PropTypes.string
    };
    return MediaBlock;
}(React.Component));
exports["default"] = MediaBlock;


/***/ }),

/***/ "../node_modules/react-placeholder/lib/placeholders/RectShape.js":
/*!***********************************************************************!*\
  !*** ../node_modules/react-placeholder/lib/placeholders/RectShape.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
var RectShape = /** @class */ (function (_super) {
    __extends(RectShape, _super);
    function RectShape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RectShape.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, color = _a.color;
        var defaultStyle = {
            backgroundColor: color,
            width: '100%',
            height: '100%',
            marginRight: 10
        };
        var classes = ['rect-shape', className].filter(function (c) { return c; }).join(' ');
        return (React.createElement("div", { className: classes, style: __assign({}, defaultStyle, style) }));
    };
    RectShape.propTypes = {
        color: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object
    };
    return RectShape;
}(React.Component));
exports["default"] = RectShape;


/***/ }),

/***/ "../node_modules/react-placeholder/lib/placeholders/RoundShape.js":
/*!************************************************************************!*\
  !*** ../node_modules/react-placeholder/lib/placeholders/RoundShape.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
var RoundShape = /** @class */ (function (_super) {
    __extends(RoundShape, _super);
    function RoundShape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RoundShape.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, color = _a.color;
        var defaultStyles = {
            backgroundColor: color,
            borderRadius: '500rem',
            width: '100%',
            height: '100%'
        };
        var classes = ['round-shape', className].filter(function (c) { return c; }).join(' ');
        return (React.createElement("div", { className: classes, style: __assign({}, defaultStyles, style) }));
    };
    RoundShape.propTypes = {
        color: PropTypes.string.isRequired,
        className: PropTypes.string,
        style: PropTypes.object
    };
    return RoundShape;
}(React.Component));
exports["default"] = RoundShape;


/***/ }),

/***/ "../node_modules/react-placeholder/lib/placeholders/TextBlock.js":
/*!***********************************************************************!*\
  !*** ../node_modules/react-placeholder/lib/placeholders/TextBlock.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
var TextRow_1 = __webpack_require__(/*! ./TextRow */ "../node_modules/react-placeholder/lib/placeholders/TextRow.js");
var TextBlock = /** @class */ (function (_super) {
    __extends(TextBlock, _super);
    function TextBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getRowStyle = function (i) {
            var _a = _this.props, rows = _a.rows, widths = _a.widths;
            return {
                maxHeight: (100 / (rows * 2 - 1)) + "%",
                width: widths[(i + widths.length) % widths.length] + "%"
            };
        };
        _this.getRows = function () {
            var _a = _this.props, rows = _a.rows, lineSpacing = _a.lineSpacing, color = _a.color;
            var range = Array.apply(null, Array(rows));
            return range.map(function (_, i) { return (React.createElement(TextRow_1["default"], { color: color, style: _this.getRowStyle(i), lineSpacing: i !== 0 ? lineSpacing : 0, key: i })); });
        };
        return _this;
    }
    TextBlock.prototype.render = function () {
        var _a = this.props, style = _a.style, className = _a.className;
        var classes = ['text-block', className].filter(function (c) { return c; }).join(' ');
        return (React.createElement("div", { className: classes, style: __assign({}, style, { width: '100%' }) }, this.getRows()));
    };
    TextBlock.propTypes = {
        rows: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
        lineSpacing: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        widths: PropTypes.arrayOf(PropTypes.number),
        style: PropTypes.object,
        className: PropTypes.string
    };
    TextBlock.defaultProps = {
        widths: [97, 100, 94, 90, 98, 95, 98, 40]
    };
    return TextBlock;
}(React.Component));
exports["default"] = TextBlock;


/***/ }),

/***/ "../node_modules/react-placeholder/lib/placeholders/TextRow.js":
/*!*********************************************************************!*\
  !*** ../node_modules/react-placeholder/lib/placeholders/TextRow.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
var TextRow = /** @class */ (function (_super) {
    __extends(TextRow, _super);
    function TextRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextRow.prototype.render = function () {
        var _a = this.props, className = _a.className, maxHeight = _a.maxHeight, color = _a.color, lineSpacing = _a.lineSpacing, style = _a.style;
        var defaultStyles = {
            maxHeight: maxHeight,
            width: '100%',
            height: '1em',
            backgroundColor: color,
            marginTop: lineSpacing
        };
        var classes = ['text-row', className].filter(function (c) { return c; }).join(' ');
        return (React.createElement("div", { className: classes, style: __assign({}, defaultStyles, style) }));
    };
    TextRow.propTypes = {
        maxHeight: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        className: PropTypes.string,
        color: PropTypes.string.isRequired,
        lineSpacing: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        style: PropTypes.object
    };
    TextRow.defaultProps = {
        lineSpacing: '0.7em'
    };
    return TextRow;
}(React.Component));
exports["default"] = TextRow;


/***/ }),

/***/ "../node_modules/react-placeholder/lib/placeholders/index.js":
/*!*******************************************************************!*\
  !*** ../node_modules/react-placeholder/lib/placeholders/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var TextRow_1 = __webpack_require__(/*! ./TextRow */ "../node_modules/react-placeholder/lib/placeholders/TextRow.js");
exports.TextRow = TextRow_1["default"];
var RoundShape_1 = __webpack_require__(/*! ./RoundShape */ "../node_modules/react-placeholder/lib/placeholders/RoundShape.js");
exports.RoundShape = RoundShape_1["default"];
var RectShape_1 = __webpack_require__(/*! ./RectShape */ "../node_modules/react-placeholder/lib/placeholders/RectShape.js");
exports.RectShape = RectShape_1["default"];
var TextBlock_1 = __webpack_require__(/*! ./TextBlock */ "../node_modules/react-placeholder/lib/placeholders/TextBlock.js");
exports.TextBlock = TextBlock_1["default"];
var MediaBlock_1 = __webpack_require__(/*! ./MediaBlock */ "../node_modules/react-placeholder/lib/placeholders/MediaBlock.js");
exports.MediaBlock = MediaBlock_1["default"];
exports.textRow = TextRow_1["default"];
exports.round = RoundShape_1["default"];
exports.rect = RectShape_1["default"];
exports.text = TextBlock_1["default"];
exports.media = MediaBlock_1["default"];


/***/ }),

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
        { className: 'card' },
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
  }]);

  return Card;
}(_react.Component);

exports.default = Card;

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
}(Card);

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
//# sourceMappingURL=app.0473e31632f8de0a3106.hot-update.js.map