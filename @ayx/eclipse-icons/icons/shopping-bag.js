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
  d: "M17.926 1c.35 0 .679.165.889.445L21.778 5.4l.008.01c.05.07.094.146.128.227l.012.03a1 1 0 01.031.093l.01.04a.56.56 0 01.007.029l.017.095a1.11 1.11 0 01.002.022l.007.121V19.91A3.088 3.088 0 0118.914 23H5.086A3.088 3.088 0 012 19.91V6.067c0-.046.003-.092.008-.137l.001-.006.017-.095.006-.03.011-.038c.009-.032.02-.063.031-.094l.012-.03c.034-.08.077-.157.128-.227l.008-.01 2.963-3.955c.21-.28.54-.445.89-.445h11.85zm1.851 6.179H4.222V19.91c0 .478.387.865.864.865h13.828a.865.865 0 00.864-.865L19.777 7.18zM15.951 8.91c.613 0 1.11.498 1.11 1.112A5.065 5.065 0 0112 15.09a5.065 5.065 0 01-5.062-5.068 1.112 1.112 0 112.222 0A2.841 2.841 0 0012 12.865a2.841 2.841 0 002.84-2.843c0-.614.497-1.112 1.11-1.112zm1.42-5.685H6.63l-1.297 1.73h13.333l-1.296-1.73z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var ShoppingBag = _react.default.forwardRef(function ShoppingBag(props, ref) {
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

ShoppingBag.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
ShoppingBag.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

ShoppingBag.name = ShoppingBag.render.name || 'ShoppingBag';
var _default = ShoppingBag;
exports.default = _default;