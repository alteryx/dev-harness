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
  d: "M4.166 12.583l-.007-.01a1.108 1.108 0 01-.008-.014l-.045-.086a1.1 1.1 0 01-.028-.065 1.112 1.112 0 01.028-.881l.045-.086a1.108 1.108 0 01.015-.024l.048-.071a1.112 1.112 0 01.11-.13l6.893-6.892a1.108 1.108 0 111.566 1.567l-5.001 5.001h11.11a1.108 1.108 0 110 2.216l-11.111-.001 5.002 5.002a1.108 1.108 0 11-1.566 1.567l-6.893-6.893-.016-.017c-.02-.02-.038-.04-.055-.062l.071.08a1.118 1.118 0 01-.11-.13l-.048-.071z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var ArrowLeft = _react.default.forwardRef(function ArrowLeft(props, ref) {
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

ArrowLeft.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
ArrowLeft.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

ArrowLeft.name = ArrowLeft.render.name || 'ArrowLeft';
var _default = ArrowLeft;
exports.default = _default;