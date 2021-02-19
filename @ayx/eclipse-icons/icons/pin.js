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
  d: "M17.538 1c.923 0 1.454 1.02.907 1.744l-1.328 1.76v6.749l2.88 2.55c.76.673.271 1.904-.758 1.904h-6.03v7.087a1.206 1.206 0 11-2.411 0l-.001-7.087h-6.03c-1.028 0-1.517-1.231-.757-1.905l2.88-2.55V4.505L5.559 2.745C5.01 2.022 5.541 1 6.464 1h11.074zm-2.223 2.19H8.692l.23.304c.143.189.22.416.22.65v7.593c0 .309-.134.603-.368.81l-1.096.97h8.651l-1.095-.97a1.082 1.082 0 01-.368-.81V4.144c0-.233.076-.46.218-.648l.23-.306z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Pin = _react.default.forwardRef(function Pin(props, ref) {
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

Pin.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Pin.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Pin.name = Pin.render.name || 'Pin';
var _default = Pin;
exports.default = _default;