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
  d: "M20.541 10.167L18.788 4.77l-1.746 5.376a1.112 1.112 0 01-1.058.768H7.976c-.481 0-.908-.31-1.057-.767l-1.752-5.38-1.747 5.377-1.145 3.547 9.705 7.054 9.743-7.08-1.182-3.5zm-2.418-7.445a.685.685 0 00.008.025l-.008-.025zm3.769 10.822l.012-.008a.28.28 0 00-.012.008zm-9.258 9.477c-.39.283-.918.283-1.308 0L.793 15.365a1.94 1.94 0 01-.696-2.167L1.303 9.46l2.433-7.482c.086-.223.223-.422.396-.578.587-.537 1.486-.537 2.096.021.187.18.325.406.394.633l2.162 6.637h6.392l2.183-6.713c.086-.223.223-.422.396-.578.587-.537 1.486-.537 2.096.021.187.18.325.406.394.634l2.408 7.412 1.27 3.762a1.943 1.943 0 01-.78 2.154l-10.509 7.638z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Gitlab = _react.default.forwardRef(function Gitlab(props, ref) {
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

Gitlab.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Gitlab.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Gitlab.name = Gitlab.render.name || 'Gitlab';
var _default = Gitlab;
exports.default = _default;