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
  d: "M9.82 18.11a1.104 1.104 0 010 1.566 1.116 1.116 0 01-1.573 0l-6.921-6.893a1.104 1.104 0 010-1.566l6.921-6.893a1.116 1.116 0 011.573 0 1.104 1.104 0 010 1.567l-5.022 5.001h14.403L14.18 5.891a1.104 1.104 0 010-1.567 1.116 1.116 0 011.573 0l6.921 6.893a1.104 1.104 0 010 1.566l-6.921 6.893a1.116 1.116 0 01-1.573 0 1.104 1.104 0 010-1.567l5.022-5.002H4.797l5.023 5.002z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var ArrowTwoConnected = _react.default.forwardRef(function ArrowTwoConnected(props, ref) {
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

ArrowTwoConnected.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
ArrowTwoConnected.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

ArrowTwoConnected.name = ArrowTwoConnected.render.name || 'ArrowTwoConnected';
var _default = ArrowTwoConnected;
exports.default = _default;