"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ref = _react.default.createElement("path", {
  d: "M11.545 1.339a1.1 1.1 0 01.91 0l5.45 2.477a1.1 1.1 0 01.645 1.001l-.001 5.237 4.806 2.185a1.1 1.1 0 01.638.873l.007.128v5.945a1.1 1.1 0 01-.645 1.002l-5.45 2.477a1.1 1.1 0 01-.91 0L12 20.393l-4.995 2.271a1.1 1.1 0 01-.784.048l-.126-.048-5.45-2.477A1.1 1.1 0 010 19.185V13.24a1.1 1.1 0 01.645-1.001l4.804-2.185.001-5.237a1.1 1.1 0 01.531-.941l.114-.06zm-.646 14.104l-3.894 1.771a1.1 1.1 0 01-.784.048l-.126-.048L2.2 15.443v3.034l4.35 1.977 4.35-1.977-.001-3.034zm10.901 0l-3.895 1.771a1.1 1.1 0 01-.784.048l-.126-.048-3.895-1.771v3.034l4.35 1.977 4.35-1.977v-3.034zM6.55 11.971l-3.337 1.517 3.337 1.516 3.336-1.517-3.336-1.516zm10.9 0l-3.337 1.517 3.337 1.516 3.337-1.517-3.337-1.516zm-1.101-4.95l-3.894 1.77a1.1 1.1 0 01-.784.049l-.126-.049-3.896-1.77.001 3.033L12 12.031l.131-.06 4.219-1.917-.001-3.033zM12 3.548L8.662 5.064 12 6.581l3.336-1.516L12 3.548z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Blocks = _react.default.forwardRef(function Blocks(props, ref) {
  var color = props.color,
      size = props.size,
      otherProps = (0, _objectWithoutProperties2.default)(props, ["color", "size"]);
  var variantSizes = {
    xsmall: 12,
    small: 14,
    medium: 16,
    large: 20,
    xlarge: 28,
    xxlarge: 36
  };
  var newSize = !isNaN(parseInt(size, 10)) ? size : variantSizes[size] !== undefined ? variantSizes[size] : variantSizes['medium'];
  return _react.default.createElement("svg", (0, _extends2.default)({
    width: newSize,
    height: newSize,
    viewBox: "0 0 24 24"
  }, otherProps, {
    fill: color,
    ref: ref
  }), _ref);
});

Blocks.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Blocks.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Blocks.name = Blocks.render.name || 'Blocks';
var _default = Blocks;
exports.default = _default;