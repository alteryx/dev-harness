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
  d: "M17.933 1c.614 0 1.112.498 1.112 1.112l-.001 5.809h.866a3.09 3.09 0 013.09 3.09v4.944a3.09 3.09 0 01-3.09 3.09l-.866-.001v2.844c0 .614-.497 1.112-1.111 1.112H6.067a1.112 1.112 0 01-1.112-1.112v-2.844H4.09A3.09 3.09 0 011 15.956v-4.944a3.09 3.09 0 013.09-3.09h.865V2.112C4.955 1.498 5.453 1 6.067 1h11.866zM16.82 15.09H7.18v5.685h9.64V15.09zm3.09-4.944H4.09a.865.865 0 00-.865.865v4.944c0 .478.387.865.865.865h.865v-2.842c0-.615.498-1.113 1.112-1.113h11.866c.614 0 1.112.498 1.112 1.113l-.001 2.842h.866a.865.865 0 00.865-.865v-4.944a.865.865 0 00-.865-.865zm-3.09-6.921H7.18L7.179 7.92h9.641V3.225z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Printer = _react.default.forwardRef(function Printer(props, ref) {
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

Printer.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Printer.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Printer.name = Printer.render.name || 'Printer';
var _default = Printer;
exports.default = _default;