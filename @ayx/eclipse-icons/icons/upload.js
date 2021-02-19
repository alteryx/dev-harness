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
  d: "M20.889 14.037c.614 0 1.111.547 1.111 1.222v4.346C22 21.48 20.618 23 18.914 23H5.086C3.382 23 2 21.48 2 19.605v-4.346c0-.675.497-1.222 1.111-1.222s1.111.547 1.111 1.222v4.346c0 .525.387.95.864.95h13.828c.477 0 .864-.425.864-.95v-4.346c0-.675.497-1.222 1.11-1.222zM12 1h.018c.026 0 .052.002.079.005L12 1a1.021 1.021 0 01.628.213 1.235 1.235 0 01.158.145l4.938 5.432a1.31 1.31 0 010 1.729 1.041 1.041 0 01-1.571 0L13.11 5.173v10.086c0 .675-.497 1.222-1.111 1.222s-1.111-.547-1.111-1.222l-.001-10.087-3.04 3.347a1.041 1.041 0 01-1.572 0 1.31 1.31 0 010-1.729l4.938-5.432.02-.022.048-.046-.068.068a1.163 1.163 0 01.35-.26A1.044 1.044 0 0112 1z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Upload = _react.default.forwardRef(function Upload(props, ref) {
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

Upload.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Upload.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Upload.name = Upload.render.name || 'Upload';
var _default = Upload;
exports.default = _default;