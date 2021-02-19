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
  d: "M12 15.05c-1.707 0-3.09-1.365-3.09-3.05 0-1.685 1.383-3.05 3.09-3.05 1.707 0 3.09 1.365 3.09 3.05 0 1.685-1.383 3.05-3.09 3.05zm0-2.196a.86.86 0 00.865-.854.86.86 0 00-.865-.854.86.86 0 00-.865.854.86.86 0 00.865.854zm3.407-4.216a1.088 1.088 0 01-.001-1.553 1.123 1.123 0 011.573-.001 6.91 6.91 0 012.067 4.92 6.91 6.91 0 01-2.067 4.922 1.123 1.123 0 01-1.573-.001 1.088 1.088 0 010-1.553 4.728 4.728 0 001.415-3.367 4.728 4.728 0 00-1.414-3.367zm-6.814 6.724a1.088 1.088 0 01.001 1.553c-.434.43-1.139.43-1.573.001a6.91 6.91 0 01-2.067-4.92 6.91 6.91 0 012.067-4.922 1.123 1.123 0 011.573.001c.434.43.434 1.124 0 1.553a4.728 4.728 0 00-1.415 3.367c0 1.263.509 2.474 1.414 3.367zm9.612-9.487a1.088 1.088 0 010-1.553 1.123 1.123 0 011.574 0 10.762 10.762 0 010 15.356 1.123 1.123 0 01-1.574 0 1.088 1.088 0 010-1.553 8.585 8.585 0 000-12.25zm-12.41 12.25a1.088 1.088 0 010 1.553 1.123 1.123 0 01-1.574 0 10.762 10.762 0 010-15.356 1.123 1.123 0 011.574 0 1.088 1.088 0 010 1.553 8.585 8.585 0 000 12.25z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Radio = _react.default.forwardRef(function Radio(props, ref) {
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

Radio.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Radio.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Radio.name = Radio.render.name || 'Radio';
var _default = Radio;
exports.default = _default;