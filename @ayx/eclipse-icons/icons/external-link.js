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
  d: "M11.012 4.963a1.111 1.111 0 010 2.222H5.086a.864.864 0 00-.864.864v10.865c0 .477.387.864.864.864h10.865a.864.864 0 00.864-.864v-5.926a1.111 1.111 0 012.222 0v5.926A3.086 3.086 0 0115.951 22H5.086A3.086 3.086 0 012 18.914V8.049a3.086 3.086 0 013.086-3.086h5.926zm9.999-2.956l.038.004a1.104 1.104 0 01.626.314l.016.018c.02.02.038.04.056.062l-.072-.08a1.122 1.122 0 01.267.43c.038.112.058.232.058.356v5.926a1.111 1.111 0 01-2.222 0l-.001-3.244-8.967 8.968A1.111 1.111 0 119.24 13.19l8.967-8.968h-3.243a1.111 1.111 0 110-2.222h5.926c.04 0 .081.002.122.007z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var ExternalLink = _react.default.forwardRef(function ExternalLink(props, ref) {
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

ExternalLink.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
ExternalLink.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

ExternalLink.name = ExternalLink.render.name || 'ExternalLink';
var _default = ExternalLink;
exports.default = _default;