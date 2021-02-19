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
  d: "M2.742 1.299l19.96 19.959a1.02 1.02 0 11-1.444 1.443l-1.517-1.516H3.835A2.835 2.835 0 011 18.352V8.37a2.835 2.835 0 012.835-2.835h.257L1.299 2.742A1.02 1.02 0 012.742 1.3zm3.391 6.278H3.835a.794.794 0 00-.794.794v9.98c0 .438.356.793.794.793H17.7l-2.69-2.69a4.65 4.65 0 01-6.556-6.557l-2.321-2.32zm8.589-4.763c.34 0 .66.171.849.455l1.511 2.267h3.083A2.835 2.835 0 0123 8.371v8.474a1.02 1.02 0 01-2.041 0V8.37a.794.794 0 00-.794-.794h-3.629c-.341 0-.66-.17-.85-.454l-1.51-2.267H9.277a1.02 1.02 0 110-2.042h5.444zm-5.297 10.63a2.608 2.608 0 004.134 1.56l-3.655-3.655a2.608 2.608 0 00-.48 2.096z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var CameraOff = _react.default.forwardRef(function CameraOff(props, ref) {
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

CameraOff.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
CameraOff.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

CameraOff.name = CameraOff.render.name || 'CameraOff';
var _default = CameraOff;
exports.default = _default;