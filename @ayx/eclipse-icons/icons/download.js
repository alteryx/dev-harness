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
  d: "M21.778 14.037c.675 0 1.222.547 1.222 1.222v4.346A3.395 3.395 0 0119.605 23H4.395A3.395 3.395 0 011 19.605v-4.346a1.222 1.222 0 112.444 0v4.346c0 .525.426.95.951.95h15.21a.95.95 0 00.95-.95v-4.346c0-.675.548-1.222 1.223-1.222zM12 1c.675 0 1.222.547 1.222 1.222v10.086l3.346-3.345a1.222 1.222 0 011.728 1.728l-5.432 5.433c-.029.029-.06.056-.091.082l.091-.082a1.233 1.233 0 01-.707.347 1.16 1.16 0 01-.157.01h-.042a1.23 1.23 0 01-.042-.002l.084.002a1.234 1.234 0 01-.735-.245 1.07 1.07 0 01-.13-.112L5.705 10.69a1.222 1.222 0 011.728-1.728l3.345 3.344V2.222C10.778 1.547 11.326 1 12 1z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Download = _react.default.forwardRef(function Download(props, ref) {
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

Download.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Download.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Download.name = Download.render.name || 'Download';
var _default = Download;
exports.default = _default;