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
  d: "M23 8.47a6.56 6.56 0 01-1.845 4.576l-8.4 8.632a1.049 1.049 0 01-1.511 0l-8.4-8.632c-2.459-2.527-2.459-6.623 0-9.15a6.177 6.177 0 018.904 0l.252.258.25-.258A6.21 6.21 0 0116.704 2a6.21 6.21 0 014.452 1.896A6.561 6.561 0 0123 8.47zM12 19.349l6.636-6.82 1.008-1.036a4.333 4.333 0 001.218-3.021c0-1.133-.438-2.22-1.218-3.022a4.102 4.102 0 00-2.94-1.252c-1.104 0-2.161.45-2.941 1.252l-1.007 1.035a1.049 1.049 0 01-1.512 0L10.237 5.45a4.08 4.08 0 00-5.881 0c-1.624 1.67-1.624 4.375 0 6.044L12 19.348z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Heart = _react.default.forwardRef(function Heart(props, ref) {
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

Heart.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Heart.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Heart.name = Heart.render.name || 'Heart';
var _default = Heart;
exports.default = _default;