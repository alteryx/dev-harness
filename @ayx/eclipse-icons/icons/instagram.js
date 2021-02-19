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
  d: "M9.528 1h4.944A8.528 8.528 0 0123 9.528v4.944A8.528 8.528 0 0114.472 23H9.528A8.528 8.528 0 011 14.472V9.528A8.528 8.528 0 019.528 1zm0 2.225a6.303 6.303 0 00-6.303 6.303v4.944a6.303 6.303 0 006.303 6.303h4.944a6.303 6.303 0 006.303-6.303V9.528a6.303 6.303 0 00-6.303-6.303H9.528zm7.527 7.989A5.067 5.067 0 117.03 12.7a5.067 5.067 0 0110.025-1.487zM12.46 9.145a2.843 2.843 0 10-.834 5.624 2.843 2.843 0 00.834-5.624z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Instagram = _react.default.forwardRef(function Instagram(props, ref) {
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

Instagram.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Instagram.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Instagram.name = Instagram.render.name || 'Instagram';
var _default = Instagram;
exports.default = _default;