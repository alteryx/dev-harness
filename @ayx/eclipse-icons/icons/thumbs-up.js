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
  d: "M11.156 1c2.285 0 4.138 1.826 4.138 4.079V7.92h4.536c.92-.01 1.797.378 2.4 1.063a3.06 3.06 0 01.734 2.492l-1.384 8.897c-.234 1.524-1.571 2.644-3.121 2.627H7.144l-.019-.001h-2.99C2.403 23 1 21.617 1 19.91v-6.92c0-1.707 1.403-3.09 3.135-3.09l2.275-.001 3.715-8.237A1.13 1.13 0 0111.156 1zm.678 2.349l-3.562 7.898v9.528h10.2a.875.875 0 00.877-.737l1.384-8.897a.857.857 0 00-.205-.698.89.89 0 00-.685-.297h-5.678a1.12 1.12 0 01-1.128-1.112V5.079c0-.789-.5-1.462-1.203-1.73zm-5.819 8.774h-1.88a.871.871 0 00-.878.866v6.92c0 .479.393.866.878.866h1.88v-8.652z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var ThumbsUp = _react.default.forwardRef(function ThumbsUp(props, ref) {
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

ThumbsUp.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
ThumbsUp.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

ThumbsUp.name = ThumbsUp.render.name || 'ThumbsUp';
var _default = ThumbsUp;
exports.default = _default;