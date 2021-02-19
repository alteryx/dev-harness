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
  d: "M24 3.013v14.38c0 .362-.214.697-.561.877l-6.928 3.595-.024.013a1.16 1.16 0 01-.092.04l.116-.053a1.166 1.166 0 01-.54.133h-.059l-.07-.005.117.006c-.129 0-.252-.02-.366-.056l-.016-.006a1.09 1.09 0 01-.107-.04l-.01-.005-7.384-3.353-6.41 3.326C.924 22.25 0 21.764 0 20.987V6.607c0-.362.214-.697.561-.877l6.928-3.595.024-.013c.03-.014.06-.028.092-.04l-.116.053a1.167 1.167 0 01.54-.133h.059l.07.005-.117-.006c.129 0 .252.02.366.056l.016.006c.036.012.072.025.107.04l.01.005 7.384 3.353 6.41-3.326c.742-.385 1.666.101 1.666.878zM9.154 4.648v12.119l5.691 2.584V7.232L9.154 4.648zm-2.227.106l-4.7 2.44v12.051l4.7-2.44V4.754zm14.846 0l-4.701 2.44v12.051l4.701-2.44V4.756z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Map = _react.default.forwardRef(function Map(props, ref) {
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

Map.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Map.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Map.name = Map.render.name || 'Map';
var _default = Map;
exports.default = _default;