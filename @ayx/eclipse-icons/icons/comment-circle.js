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
  d: "M8.39 17.957c.282-.094.588-.072.853.062a7.167 7.167 0 003.251.77 7.285 7.285 0 006.514-4.032 7.165 7.165 0 00.77-3.249l.002-.435c-.204-3.697-3.156-6.649-6.791-6.851h-.497a7.17 7.17 0 00-3.253.772 7.284 7.284 0 00-4.028 6.514 7.165 7.165 0 00.77 3.25c.134.264.156.57.062.851L4.87 19.13l3.52-1.173zm12.604-2.202a9.504 9.504 0 01-12.324 4.45l-5.206 1.736a1.111 1.111 0 01-1.405-1.405l1.735-5.206A9.503 9.503 0 018.241 3.008 9.384 9.384 0 0112.495 2l.555.002c4.827.266 8.682 4.12 8.95 9.01v.492a9.382 9.382 0 01-1.006 4.25z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var CommentCircle = _react.default.forwardRef(function CommentCircle(props, ref) {
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

CommentCircle.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
CommentCircle.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

CommentCircle.name = CommentCircle.render.name || 'CommentCircle';
var _default = CommentCircle;
exports.default = _default;