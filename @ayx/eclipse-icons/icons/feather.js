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
  d: "M20.935 3.064a7.043 7.043 0 01.001 9.963l-6.664 6.681c-.209.21-.492.327-.788.327l-7.944-.001-2.64 2.64a1.113 1.113 0 01-1.574-1.572l2.64-2.641v-7.94c0-.294.118-.577.326-.786l6.675-6.671a7.051 7.051 0 019.968 0zM14.747 16.08H9.495l-1.73 1.729h5.257l1.725-1.729zM12.54 4.636l-6.349 6.346v5.255l8.979-8.973a1.113 1.113 0 011.573 1.573l-5.024 5.02h5.226l.02.001 2.396-2.402a4.82 4.82 0 00.001-6.82 4.825 4.825 0 00-6.822 0z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Feather = _react.default.forwardRef(function Feather(props, ref) {
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

Feather.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Feather.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Feather.name = Feather.render.name || 'Feather';
var _default = Feather;
exports.default = _default;