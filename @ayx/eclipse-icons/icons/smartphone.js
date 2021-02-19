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
  d: "M8.062 3.225a1.85 1.85 0 00-1.847 1.854V18.92a1.85 1.85 0 001.847 1.854h7.876a1.85 1.85 0 001.847-1.854V5.08a1.85 1.85 0 00-1.847-1.854H8.062zm0-2.225h7.876A4.07 4.07 0 0120 5.079V18.92A4.07 4.07 0 0115.938 23H8.062A4.07 4.07 0 014 18.921V5.08A4.07 4.07 0 018.062 1zM12 19.416a1.48 1.48 0 001.477-1.483A1.48 1.48 0 0012 16.449a1.48 1.48 0 00-1.477 1.484c0 .819.661 1.483 1.477 1.483z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Smartphone = _react.default.forwardRef(function Smartphone(props, ref) {
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

Smartphone.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Smartphone.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Smartphone.name = Smartphone.render.name || 'Smartphone';
var _default = Smartphone;
exports.default = _default;