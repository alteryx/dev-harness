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
  d: "M4.082 7.21a1.849 1.849 0 00-1.855 1.843v5.894c0 1.018.83 1.842 1.855 1.842H15.96a1.849 1.849 0 001.855-1.842V9.053c0-1.018-.83-1.842-1.855-1.842H4.082zm0-2.21H15.96c2.254 0 4.082 1.814 4.082 4.053v5.894c0 2.239-1.828 4.053-4.082 4.053H4.082C1.828 19 0 17.186 0 14.947V9.053C0 6.814 1.828 5 4.082 5zM24 14.217a1.11 1.11 0 01-1.113 1.106 1.11 1.11 0 01-1.114-1.106V9.78c0-.61.499-1.105 1.114-1.105A1.11 1.11 0 0124 9.78v4.437z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Battery = _react.default.forwardRef(function Battery(props, ref) {
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

Battery.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Battery.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Battery.name = Battery.render.name || 'Battery';
var _default = Battery;
exports.default = _default;