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
  d: "M17.926 1A4.076 4.076 0 0122 5.079a4.076 4.076 0 01-4.074 4.078 4.058 4.058 0 01-2.826-1.14l-5.08 2.966a4.09 4.09 0 010 2.033l5.083 2.965a4.058 4.058 0 012.823-1.138A4.076 4.076 0 0122 18.92 4.076 4.076 0 0117.926 23a4.076 4.076 0 01-3.945-5.1L8.9 14.938a4.058 4.058 0 01-2.827 1.14A4.076 4.076 0 012 12a4.076 4.076 0 014.074-4.079c1.098 0 2.094.435 2.826 1.141l5.08-2.967A4.076 4.076 0 0117.926 1zm0 16.067c-1.023 0-1.852.83-1.852 1.854a1.853 1.853 0 101.852-1.854zm-11.852-6.92a1.853 1.853 0 10.002 3.71 1.853 1.853 0 00-.002-3.71zm11.852-6.922c-1.023 0-1.852.83-1.852 1.854a1.853 1.853 0 101.852-1.854z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Share2 = _react.default.forwardRef(function Share2(props, ref) {
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

Share2.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Share2.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Share2.name = Share2.render.name || 'Share2';
var _default = Share2;
exports.default = _default;