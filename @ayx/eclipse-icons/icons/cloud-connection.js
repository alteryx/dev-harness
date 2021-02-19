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
  d: "M8.152.112a7.851 7.851 0 018.606 4.82l.05.131h.261c2.864 0 5.2 2.264 5.314 5.1l.005.22a5.319 5.319 0 01-5.319 5.318L13.1 15.7v1.99A3.251 3.251 0 0112 24a3.25 3.25 0 01-1.101-6.309L10.9 15.7l-1.424.001a7.85 7.85 0 01-7.802-6.933l-.025-.253A7.85 7.85 0 018.152.112zM6.75 19.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-3.25 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm17 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-3.25 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 19.7a1.05 1.05 0 100 2.1 1.05 1.05 0 000-2.1zm2.94-13.262a5.65 5.65 0 10-5.465 7.063h7.594a3.119 3.119 0 000-6.238h-1.063a1.1 1.1 0 01-1.065-.825z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var CloudConnection = _react.default.forwardRef(function CloudConnection(props, ref) {
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

CloudConnection.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
CloudConnection.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

CloudConnection.name = CloudConnection.render.name || 'CloudConnection';
var _default = CloudConnection;
exports.default = _default;