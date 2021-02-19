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
  d: "M12.495 1.5C18.021 1.5 22.5 6.201 22.5 12s-4.48 10.5-10.005 10.5c-2.91 0-5.62-1.313-7.508-3.56a68.1 68.1 0 01-1.314-1.619v3.035c0 .63-.487 1.14-1.087 1.14s-1.086-.51-1.086-1.14v-6.24c0-.63.486-1.14 1.086-1.14h5.946c.6 0 1.086.51 1.086 1.14 0 .63-.486 1.14-1.086 1.14l-3.662.001c.627.81 1.21 1.534 1.747 2.175 1.479 1.761 3.598 2.788 5.878 2.788 4.326 0 7.833-3.68 7.833-8.22 0-4.54-3.507-8.22-7.833-8.22-2.944 0-5.023 1.017-6.364 3.055a1.054 1.054 0 01-1.51.291c-.494-.357-.618-1.067-.278-1.586 1.77-2.691 4.53-4.04 8.152-4.04zm0 3.744c.6 0 1.087.51 1.087 1.14v4.911l2.967 1.557c.536.282.754.967.485 1.53-.268.563-.92.791-1.457.51L12.01 13.02a1.147 1.147 0 01-.6-1.02V6.384c0-.63.486-1.14 1.085-1.14z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Schedule = _react.default.forwardRef(function Schedule(props, ref) {
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

Schedule.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Schedule.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Schedule.name = Schedule.render.name || 'Schedule';
var _default = Schedule;
exports.default = _default;