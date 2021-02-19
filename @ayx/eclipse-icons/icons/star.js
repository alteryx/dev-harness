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
  d: "M12 4.62L9.942 8.782a1.112 1.112 0 01-.836.607l-4.603.672 3.33 3.238c.262.256.382.623.32.984l-.786 4.573 4.115-2.16c.324-.17.712-.17 1.036 0l4.115 2.16-.786-4.573a1.11 1.11 0 01.32-.984l3.33-3.238-4.603-.672a1.112 1.112 0 01-.836-.607L12 4.62zM8.206 7.276l2.797-5.657a1.113 1.113 0 011.994 0l2.797 5.657 6.253.913a1.11 1.11 0 01.616 1.894l-4.525 4.4 1.068 6.216c.156.908-.798 1.6-1.614 1.17L12 18.934 6.408 21.87c-.816.428-1.77-.263-1.614-1.17l1.068-6.217-4.525-4.4a1.11 1.11 0 01.616-1.894l6.253-.913z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Star = _react.default.forwardRef(function Star(props, ref) {
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

Star.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Star.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Star.name = Star.render.name || 'Star';
var _default = Star;
exports.default = _default;