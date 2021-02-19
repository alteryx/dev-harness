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
  d: "M12.129 5.11v13.78c0 .93-1.08 1.445-1.808.865L5.68 16.06H2.113A1.11 1.11 0 011 14.953V9.047A1.11 1.11 0 012.113 7.94H5.68l4.64-3.695c.73-.58 1.809-.064 1.809.864zM9.903 7.413L6.765 9.912a1.116 1.116 0 01-.695.242H3.226v3.692H6.07c.253 0 .498.085.695.242l3.138 2.498V7.414zm13.771.85a1.104 1.104 0 010 1.566L21.493 12l2.181 2.17a1.104 1.104 0 010 1.566 1.117 1.117 0 01-1.574 0l-2.181-2.17-2.18 2.17a1.117 1.117 0 01-1.574 0 1.104 1.104 0 010-1.566l2.18-2.171-2.18-2.169a1.104 1.104 0 010-1.566 1.117 1.117 0 011.574 0l2.18 2.169 2.181-2.17a1.117 1.117 0 011.574 0z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var VolumeX = _react.default.forwardRef(function VolumeX(props, ref) {
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

VolumeX.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
VolumeX.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

VolumeX.name = VolumeX.render.name || 'VolumeX';
var _default = VolumeX;
exports.default = _default;