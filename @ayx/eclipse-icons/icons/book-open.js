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
  d: "M8.045 2c1.6 0 3.027.74 3.956 1.898A5.054 5.054 0 0115.955 2h5.933C22.502 2 23 2.497 23 3.111v14.815c0 .614-.498 1.111-1.112 1.111h-6.922c-.975 0-1.774.752-1.848 1.707l-.006.145c0 1.481-2.224 1.481-2.224 0 0-1.023-.83-1.852-1.854-1.852H2.112A1.112 1.112 0 011 17.926V3.11C1 2.497 1.498 2 2.112 2h5.933zm0 2.222h-4.82v12.593h5.809c.667 0 1.297.16 1.854.444V7.062a2.841 2.841 0 00-2.843-2.84zm12.73 0h-4.82a2.841 2.841 0 00-2.843 2.84v10.197a4.065 4.065 0 011.854-.444h5.81V4.222z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var BookOpen = _react.default.forwardRef(function BookOpen(props, ref) {
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

BookOpen.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
BookOpen.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

BookOpen.name = BookOpen.render.name || 'BookOpen';
var _default = BookOpen;
exports.default = _default;