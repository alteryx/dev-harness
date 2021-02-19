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
  d: "M7.052 12.864a1.112 1.112 0 110 2.222H5.195v5.803a1.112 1.112 0 01-2.227 0l.001-5.803H1.113a1.112 1.112 0 110-2.222h5.939zM12 10.89c.615 0 1.113.497 1.113 1.111v8.889a1.112 1.112 0 01-2.227 0V12c0-.614.5-1.111 1.114-1.111zm10.887 3.95a1.112 1.112 0 110 2.223l-1.857-.001v3.828a1.112 1.112 0 01-2.227 0l.001-3.828h-1.856a1.112 1.112 0 110-2.221h5.939zM19.917 2c.615 0 1.114.497 1.114 1.111V12a1.112 1.112 0 01-2.227 0V3.111c0-.614.499-1.111 1.114-1.111zM4.083 2c.615 0 1.114.497 1.114 1.111v6.914c0 .613-.499 1.11-1.114 1.11a1.112 1.112 0 01-1.113-1.11V3.11C2.97 2.497 3.468 2 4.082 2zM12 2c.615 0 1.113.497 1.113 1.111v3.827h1.856a1.112 1.112 0 110 2.222H9.031a1.112 1.112 0 110-2.222h1.855V3.111c0-.614.5-1.111 1.114-1.111z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Sliders = _react.default.forwardRef(function Sliders(props, ref) {
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

Sliders.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Sliders.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Sliders.name = Sliders.render.name || 'Sliders';
var _default = Sliders;
exports.default = _default;