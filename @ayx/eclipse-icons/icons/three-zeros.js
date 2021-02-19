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
  d: "M19.4 6.5c2.659 0 3.6 2.13 3.6 5.5s-.941 5.5-3.6 5.5c-2.659 0-3.6-2.13-3.6-5.5s.941-5.5 3.6-5.5zm-14.8 0c2.659 0 3.6 2.13 3.6 5.5s-.941 5.5-3.6 5.5C1.941 17.5 1 15.37 1 12l.002-.263C1.051 8.52 2.012 6.5 4.6 6.5zm7.4 0c2.659 0 3.6 2.13 3.6 5.5s-.941 5.5-3.6 5.5c-2.659 0-3.6-2.13-3.6-5.5l.002-.263C8.451 8.52 9.412 6.5 12 6.5zm7.4 2.2c-.953 0-1.4 1.013-1.4 3.3l.002.249c.032 2.112.48 3.051 1.398 3.051.953 0 1.4-1.013 1.4-3.3l-.002-.249C20.766 9.64 20.318 8.7 19.4 8.7zm-14.8 0c-.953 0-1.4 1.013-1.4 3.3l.002.249c.032 2.112.48 3.051 1.398 3.051.953 0 1.4-1.013 1.4-3.3s-.447-3.3-1.4-3.3zm7.4 0c-.953 0-1.4 1.013-1.4 3.3l.002.249c.032 2.112.48 3.051 1.398 3.051.953 0 1.4-1.013 1.4-3.3s-.447-3.3-1.4-3.3z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var ThreeZeros = _react.default.forwardRef(function ThreeZeros(props, ref) {
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

ThreeZeros.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
ThreeZeros.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

ThreeZeros.name = ThreeZeros.render.name || 'ThreeZeros';
var _default = ThreeZeros;
exports.default = _default;