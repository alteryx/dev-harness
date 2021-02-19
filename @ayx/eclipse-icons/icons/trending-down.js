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
  d: "M23.473 18.835a1.212 1.212 0 01-.23.107 1.108 1.108 0 01-.373.058h-5.922a1.11 1.11 0 01-1.113-1.105c0-.61.499-1.106 1.113-1.106h3.25l-6.713-6.665-4.162 4.131a1.12 1.12 0 01-1.574 0L.326 6.887a1.1 1.1 0 010-1.563 1.12 1.12 0 011.575 0l6.635 6.587 4.161-4.131a1.12 1.12 0 011.575 0l7.501 7.447V12c0-.61.499-1.105 1.114-1.105A1.11 1.11 0 0124 12v5.878a1.098 1.098 0 01-.326.798l-.015.014a1.117 1.117 0 01-.059.053l.074-.067a1.121 1.121 0 01-.113.098l-.017.013-.071.048z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var TrendingDown = _react.default.forwardRef(function TrendingDown(props, ref) {
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

TrendingDown.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
TrendingDown.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

TrendingDown.name = TrendingDown.render.name || 'TrendingDown';
var _default = TrendingDown;
exports.default = _default;