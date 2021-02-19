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
  d: "M21.052 10.616a1.185 1.185 0 011.614 0 1.044 1.044 0 010 1.53l-9.322 8.845c-2.824 2.679-7.402 2.679-10.226 0-2.824-2.68-2.824-7.023 0-9.702l9.322-8.844c2.031-1.927 5.324-1.927 7.355 0 2.031 1.927 2.031 5.051 0 6.979l-9.332 8.843c-1.238 1.175-3.246 1.175-4.485 0a2.9 2.9 0 010-4.255l8.613-8.16a1.185 1.185 0 011.614 0 1.044 1.044 0 01-.001 1.531l-8.612 8.16a.813.813 0 000 1.193c.347.33.91.33 1.257 0l9.332-8.844a2.67 2.67 0 000-3.916c-1.14-1.081-2.987-1.081-4.127 0L4.732 12.82c-1.933 1.834-1.933 4.806 0 6.64 1.932 1.833 5.065 1.833 6.998 0l9.322-8.844z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Paperclip = _react.default.forwardRef(function Paperclip(props, ref) {
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

Paperclip.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Paperclip.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Paperclip.name = Paperclip.render.name || 'Paperclip';
var _default = Paperclip;
exports.default = _default;