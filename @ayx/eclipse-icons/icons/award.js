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
  d: "M12 0c4.418 0 8 3.6 8 8.04a8.041 8.041 0 01-3.082 6.343l1.103 8.355c.122.924-.872 1.58-1.668 1.1L12 21.215l-4.353 2.625c-.796.48-1.79-.177-1.668-1.101l1.104-8.354A8.041 8.041 0 014 8.04C4 3.6 7.582 0 12 0zm0 16.08c-1 0-1.956-.183-2.838-.52l-.684 5.181 2.952-1.78c.35-.212.79-.212 1.14 0l2.953 1.78-.684-5.181a7.946 7.946 0 01-2.839.52zm0-13.853c-3.195 0-5.785 2.602-5.785 5.813s2.59 5.814 5.785 5.814a5.736 5.736 0 003.06-.879.97.97 0 01.133-.089 5.807 5.807 0 002.592-4.846c0-3.21-2.59-5.813-5.785-5.813z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Award = _react.default.forwardRef(function Award(props, ref) {
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

Award.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Award.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Award.name = Award.render.name || 'Award';
var _default = Award;
exports.default = _default;