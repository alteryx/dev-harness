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
  d: "M7.137 8.292c.575 0 1.042.348 1.042.778l-.001 9.477 3.317-3.217a1.065 1.065 0 011.473 0 .99.99 0 010 1.43l-5.094 4.944a1.065 1.065 0 01-1.474 0L1.305 16.76a.99.99 0 010-1.43 1.065 1.065 0 011.474 0l3.315 3.217V9.07c0-.43.467-.778 1.043-.778zM17.6 2.296l5.095 4.944a.99.99 0 010 1.43 1.065 1.065 0 01-1.474 0l-3.316-3.218v9.923c0 .494-.466.895-1.042.895-.575 0-1.042-.4-1.042-.895V5.452L12.505 8.67a1.065 1.065 0 01-1.473 0 .99.99 0 010-1.43l5.094-4.944a1.065 1.065 0 011.474 0z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Sorting = _react.default.forwardRef(function Sorting(props, ref) {
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

Sorting.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Sorting.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Sorting.name = Sorting.render.name || 'Sorting';
var _default = Sorting;
exports.default = _default;