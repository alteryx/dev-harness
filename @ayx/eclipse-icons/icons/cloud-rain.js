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
  d: "M14.851 12.99a1.113 1.113 0 112.227 0v7.917a1.113 1.113 0 11-2.227 0V12.99zm-7.917 0a1.113 1.113 0 112.227 0v7.917a1.113 1.113 0 11-2.227 0V12.99zm3.958 1.979a1.113 1.113 0 112.227 0v7.918a1.113 1.113 0 11-2.227 0v-7.918zm7.053-9.031a6.062 6.062 0 012.425 11.615 1.113 1.113 0 11-.894-2.04 3.835 3.835 0 00-1.532-7.348h-1.247c-.508 0-.951-.344-1.078-.835a6.804 6.804 0 10-10.835 7.017 1.113 1.113 0 01-1.39 1.74A9.031 9.031 0 1117.516 5.937h.429z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var CloudRain = _react.default.forwardRef(function CloudRain(props, ref) {
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

CloudRain.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
CloudRain.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

CloudRain.name = CloudRain.render.name || 'CloudRain';
var _default = CloudRain;
exports.default = _default;