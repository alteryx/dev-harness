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
  d: "M21.56 17.364c.012-.51-.338-.924-.804-.99a15.167 15.167 0 01-3.316-.825.947.947 0 00-.996.209l-1.377 1.374a1.221 1.221 0 01-1.465.198 18.549 18.549 0 01-6.962-6.95 1.216 1.216 0 01.198-1.463l1.372-1.37a.947.947 0 00.212-1.001 15.064 15.064 0 01-.824-3.297.951.951 0 00-.96-.814H3.387a.95.95 0 00-.946 1.013 20.189 20.189 0 003.145 8.859 19.916 19.916 0 006.138 6.124 20.237 20.237 0 008.802 3.132.95.95 0 001.034-.952v-3.247zM24 20.606a3.38 3.38 0 01-1.098 2.506 3.403 3.403 0 01-2.617.874 22.686 22.686 0 01-9.878-3.506 22.327 22.327 0 01-6.874-6.858 22.627 22.627 0 01-3.52-9.936 3.378 3.378 0 01.873-2.584A3.391 3.391 0 013.386 0h3.24a3.389 3.389 0 013.39 2.92c.124.948.357 1.879.69 2.772a3.38 3.38 0 01-.767 3.572l-.7.7a16.112 16.112 0 004.78 4.77l.705-.703a3.39 3.39 0 013.571-.762c.898.334 1.83.566 2.79.693A3.384 3.384 0 0124 17.378v3.228z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Phone = _react.default.forwardRef(function Phone(props, ref) {
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

Phone.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Phone.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Phone.name = Phone.render.name || 'Phone';
var _default = Phone;
exports.default = _default;