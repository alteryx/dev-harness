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
  d: "M3 3.101c0-.295.117-.578.325-.786.228-.23.632-.499 1.236-.741C5.466 1.21 6.623 1 8.055 1c1.417 0 2.382.276 4.357 1.068 1.723.691 2.485.91 3.533.91 1.157 0 2.035-.16 2.67-.415.321-.129.472-.23.49-.248.7-.701 1.895-.205 1.895.786v11.865c0 .295-.117.578-.325.787-.228.229-.632.498-1.236.74-.905.364-2.062.574-3.494.574-1.417 0-2.382-.276-4.357-1.068-1.723-.69-2.485-.91-3.533-.91-1.157 0-2.035.16-2.67.416a4.246 4.246 0 00-.168.07l.002 6.313a1.111 1.111 0 11-2.22 0L3.001 3.1zm5.055.124c-1.157 0-2.035.16-2.67.415a4.252 4.252 0 00-.166.07v9.505c.789-.224 1.73-.35 2.836-.35 1.417 0 2.382.276 4.357 1.068 1.723.691 2.485.91 3.533.91 1.157 0 2.035-.16 2.67-.415.062-.025.117-.048.166-.07V4.852c-.789.225-1.73.35-2.836.35-1.417 0-2.382-.276-4.357-1.068-1.723-.691-2.485-.91-3.533-.91z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Flag = _react.default.forwardRef(function Flag(props, ref) {
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

Flag.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Flag.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Flag.name = Flag.render.name || 'Flag';
var _default = Flag;
exports.default = _default;