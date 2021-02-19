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
  d: "M10.888 2.112a1.112 1.112 0 012.224 0v3.955a1.112 1.112 0 01-2.224 0V2.112zm0 15.82a1.112 1.112 0 012.224 0v3.956a1.112 1.112 0 11-2.224 0v-3.955zM4.223 5.797a1.112 1.112 0 011.573-1.573L8.594 7.02a1.112 1.112 0 11-1.573 1.573L4.223 5.796zm11.183 11.183a1.112 1.112 0 111.573-1.573l2.798 2.798a1.112 1.112 0 01-1.573 1.573l-2.798-2.798zM2.112 13.112a1.112 1.112 0 010-2.224h3.955a1.112 1.112 0 010 2.224H2.112zm15.82 0a1.112 1.112 0 010-2.224h3.956a1.112 1.112 0 110 2.224h-3.955zM5.797 19.777a1.112 1.112 0 01-1.573-1.573l2.798-2.798a1.112 1.112 0 111.573 1.573l-2.798 2.798zM16.979 8.594a1.112 1.112 0 11-1.573-1.573l2.798-2.798a1.112 1.112 0 011.573 1.573L16.98 8.594z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Loader = _react.default.forwardRef(function Loader(props, ref) {
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

Loader.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Loader.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Loader.name = Loader.render.name || 'Loader';
var _default = Loader;
exports.default = _default;