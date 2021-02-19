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
  d: "M13.604 20.197l2.731-2.755-2.731-2.755v5.51zm2.731-13.64l-2.731-2.754v5.51l2.731-2.755zM10.94 12L6.323 7.345a1.12 1.12 0 010-1.574 1.097 1.097 0 011.561 0l3.512 3.542V1.115c0-.991 1.19-1.488 1.884-.787l5.397 5.443a1.12 1.12 0 010 1.574L14.06 12l4.616 4.655a1.12 1.12 0 010 1.574l-5.397 5.443c-.695.701-1.884.204-1.884-.787v-8.198L7.884 18.23a1.097 1.097 0 01-1.56 0 1.12 1.12 0 010-1.574L10.938 12z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Bluetooth = _react.default.forwardRef(function Bluetooth(props, ref) {
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

Bluetooth.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Bluetooth.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Bluetooth.name = Bluetooth.render.name || 'Bluetooth';
var _default = Bluetooth;
exports.default = _default;