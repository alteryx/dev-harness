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
  d: "M4.066 20.33c.413.413 1.079.416 1.488.007l3.741-3.742.02 4.065a1.065 1.065 0 001.057 1.057 1.04 1.04 0 001.047-1.047l-.036-6.703-.018-.118-.05-.163-.049-.109-.093-.147-.097-.11-.075-.07-.116-.082-.098-.055-.1-.042-.165-.045-.125-.016-6.671-.034a1.04 1.04 0 00-1.048 1.047 1.065 1.065 0 001.058 1.058l4.062.02-3.74 3.74a1.052 1.052 0 00.008 1.489zm8.91-16.604l.031 6.605.005.098.018.118.049.163.05.109.093.147.097.11.075.07.115.082.099.055.1.042.165.045.191.018 6.605.032a1.04 1.04 0 001.047-1.047 1.065 1.065 0 00-1.057-1.058l-4.065-.02 3.742-3.74a1.052 1.052 0 00-.007-1.489 1.052 1.052 0 00-1.488-.007L15.1 7.8l-.02-4.063a1.065 1.065 0 00-1.057-1.057 1.04 1.04 0 00-1.048 1.047z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var MinimizeDiagonal = _react.default.forwardRef(function MinimizeDiagonal(props, ref) {
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

MinimizeDiagonal.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
MinimizeDiagonal.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

MinimizeDiagonal.name = MinimizeDiagonal.render.name || 'MinimizeDiagonal';
var _default = MinimizeDiagonal;
exports.default = _default;