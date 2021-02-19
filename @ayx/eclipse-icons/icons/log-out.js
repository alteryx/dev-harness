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
  d: "M8.74 1a1.222 1.222 0 010 2.444H4.396a.95.95 0 00-.95.951v15.21c0 .525.425.95.95.95h4.346a1.222 1.222 0 110 2.445H4.395A3.395 3.395 0 011 19.605V4.395A3.395 3.395 0 014.395 1h4.346zm8.47 4.704l5.432 5.432a1.232 1.232 0 01.354.765A1.265 1.265 0 0123 12v.022c0 .025-.002.05-.004.077L23 12a1.234 1.234 0 01-.237.723 1.22 1.22 0 01-.121.141l-5.432 5.432a1.222 1.222 0 11-1.729-1.728l3.346-3.346H8.741a1.222 1.222 0 110-2.444l10.085-.001-3.345-3.345a1.222 1.222 0 111.729-1.728z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var LogOut = _react.default.forwardRef(function LogOut(props, ref) {
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

LogOut.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
LogOut.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

LogOut.name = LogOut.render.name || 'LogOut';
var _default = LogOut;
exports.default = _default;