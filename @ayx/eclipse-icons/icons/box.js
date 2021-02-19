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
  d: "M13.375.621l7.91 3.936A3.074 3.074 0 0123 7.31v9.378a3.073 3.073 0 01-1.712 2.751l-7.91 3.936a3.103 3.103 0 01-2.765 0L2.7 19.438a3.07 3.07 0 01-1.7-2.76V7.309c0-1.166.665-2.232 1.712-2.75L10.625.62a3.103 3.103 0 012.75 0zM3.224 7.88v8.805a.86.86 0 00.474.774l7.189 3.577v-9.343L3.224 7.88zm17.551 0l-7.663 3.813v9.338l7.183-3.573a.86.86 0 00.48-.77V7.88zm-9.157-5.277L4.603 6.092 12 9.772l7.395-3.68-7.01-3.489a.868.868 0 00-.767 0z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Box = _react.default.forwardRef(function Box(props, ref) {
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

Box.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Box.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Box.name = Box.render.name || 'Box';
var _default = Box;
exports.default = _default;