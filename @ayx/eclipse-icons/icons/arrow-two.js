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
  d: "M17.033 7.297l6.654 6.864c.417.43.417 1.13 0 1.56l-6.654 6.864c-.417.43-1.094.43-1.512 0a1.128 1.128 0 010-1.56l4.827-4.981h-7.245a1.103 1.103 0 110-2.206l7.246-.001-4.828-4.98a1.128 1.128 0 010-1.56 1.046 1.046 0 011.512 0zM8.48 1.413c.417.43.417 1.13 0 1.56L3.65 7.954h7.247a1.103 1.103 0 010 2.206H3.65l4.829 4.981c.417.431.417 1.13 0 1.56-.418.431-1.095.431-1.512 0L.313 9.838a1.128 1.128 0 010-1.56l6.654-6.864a1.046 1.046 0 011.512 0z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var ArrowTwo = _react.default.forwardRef(function ArrowTwo(props, ref) {
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

ArrowTwo.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
ArrowTwo.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

ArrowTwo.name = ArrowTwo.render.name || 'ArrowTwo';
var _default = ArrowTwo;
exports.default = _default;