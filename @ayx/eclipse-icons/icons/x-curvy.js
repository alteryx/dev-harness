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
  d: "M18.73 3.6a1.1 1.1 0 01.12 2.194l-.12.006c-1.456 0-3.625 2.311-5.178 5.546l.158.474c.176.547.57 1.787.772 2.408l.084.252c.964 2.864 1.68 3.715 3.245 3.715a1.1 1.1 0 010 2.2c-2.717 0-4.023-1.464-5.227-4.912l-.183-.543-.223-.689c-1.8 3.207-4.442 5.592-6.655 6.115a1.1 1.1 0 11-.506-2.141c1.808-.428 4.42-3.008 5.91-6.381l.136-.319.124-.295C9.814 7.411 8.443 5.8 6.543 5.8a1.1 1.1 0 110-2.2c2.677 0 4.462 1.634 5.97 5.021C14.302 5.628 16.58 3.6 18.73 3.6z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var XCurvy = _react.default.forwardRef(function XCurvy(props, ref) {
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

XCurvy.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
XCurvy.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

XCurvy.name = XCurvy.render.name || 'XCurvy';
var _default = XCurvy;
exports.default = _default;