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
  d: "M6.34 1.035A3.243 3.243 0 019.583 3.83c.12.907.342 1.798.661 2.652a3.234 3.234 0 01-.734 3.42l-.67.668a15.416 15.416 0 004.573 4.566l.675-.674a3.244 3.244 0 013.417-.729c.859.32 1.75.542 2.67.663a3.238 3.238 0 012.788 3.268v3.09a3.234 3.234 0 01-1.05 2.397 3.256 3.256 0 01-2.504.836 21.705 21.705 0 01-9.452-3.354A21.364 21.364 0 013.38 14.07 21.652 21.652 0 01.013 4.563 3.233 3.233 0 01.847 2.09 3.245 3.245 0 013.24 1.035h3.1zm.011 2.33h-3.11a.908.908 0 00-.905.97 19.319 19.319 0 003.009 8.476 19.056 19.056 0 005.873 5.86 19.362 19.362 0 008.422 2.997.909.909 0 00.989-.91V17.65c.012-.488-.324-.884-.77-.947a14.511 14.511 0 01-3.172-.789.906.906 0 00-.953.2l-1.318 1.314c-.371.371-.945.449-1.402.19a17.748 17.748 0 01-6.66-6.65 1.164 1.164 0 01.189-1.4l1.312-1.31a.906.906 0 00.204-.96 14.415 14.415 0 01-.789-3.153.91.91 0 00-.919-.78zM23.658.341a1.164 1.164 0 010 1.648L21.371 4.27l2.287 2.283a1.164 1.164 0 010 1.648 1.168 1.168 0 01-1.65 0l-2.287-2.284-2.286 2.284a1.168 1.168 0 01-1.65 0 1.164 1.164 0 010-1.648l2.286-2.283-2.287-2.282a1.164 1.164 0 010-1.648 1.168 1.168 0 011.65 0l2.287 2.283L22.008.341a1.168 1.168 0 011.65 0z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var PhoneMissed = _react.default.forwardRef(function PhoneMissed(props, ref) {
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

PhoneMissed.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
PhoneMissed.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

PhoneMissed.name = PhoneMissed.render.name || 'PhoneMissed';
var _default = PhoneMissed;
exports.default = _default;