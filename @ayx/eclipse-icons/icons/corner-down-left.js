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
  d: "M19.89 3c.613 0 1.11.497 1.11 1.11v6.904a5.055 5.055 0 01-5.055 5.054H6.788l3.038 3.038a1.11 1.11 0 01-1.57 1.569l-4.931-4.931-.02-.02a1.116 1.116 0 01-.047-.054l.067.074a1.12 1.12 0 01-.168-.216 1.105 1.105 0 01.168-1.354l4.931-4.931a1.11 1.11 0 011.57 1.569l-3.039 3.037h9.158a2.836 2.836 0 002.836-2.835V4.11c0-.613.497-1.11 1.11-1.11z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var CornerDownLeft = _react.default.forwardRef(function CornerDownLeft(props, ref) {
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

CornerDownLeft.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
CornerDownLeft.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

CornerDownLeft.name = CornerDownLeft.render.name || 'CornerDownLeft';
var _default = CornerDownLeft;
exports.default = _default;