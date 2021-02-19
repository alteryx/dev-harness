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
  d: "M13.105 19.89c0 .613-.495 1.11-1.105 1.11s-1.105-.497-1.105-1.11v-9.863c0-.612.495-1.11 1.105-1.11s1.105.498 1.105 1.11v9.863zm5.895 0c0 .613-.495 1.11-1.105 1.11s-1.106-.497-1.106-1.11V4.11c0-.613.495-1.11 1.106-1.11.61 0 1.105.497 1.105 1.11v15.78zm-11.79 0c0 .613-.494 1.11-1.105 1.11C5.495 21 5 20.503 5 19.89v-3.945c0-.613.495-1.11 1.105-1.11s1.106.497 1.106 1.11v3.945z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var BarChart = _react.default.forwardRef(function BarChart(props, ref) {
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

BarChart.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
BarChart.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

BarChart.name = BarChart.render.name || 'BarChart';
var _default = BarChart;
exports.default = _default;