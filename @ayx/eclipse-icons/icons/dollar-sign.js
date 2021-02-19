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
  d: "M12 0c.61 0 1.105.498 1.105 1.113v2.845h3.807c.61 0 1.106.5 1.106 1.114a1.11 1.11 0 01-1.106 1.114l-3.807-.001v4.701h1.351c2.51 0 4.544 2.05 4.544 4.578 0 2.528-2.034 4.577-4.544 4.577h-1.351v2.846A1.11 1.11 0 0112 24a1.11 1.11 0 01-1.105-1.113l-.001-2.846H6.105A1.11 1.11 0 015 18.928a1.11 1.11 0 011.105-1.114h4.789v-4.701h-1.35C7.034 13.113 5 11.064 5 8.536S7.034 3.96 9.544 3.96l1.35-.001V1.113A1.11 1.11 0 0112 0zm1.105 17.814h1.351a2.342 2.342 0 002.333-2.35 2.342 2.342 0 00-2.333-2.35l-1.351-.001v4.701zm-2.211-6.928V6.185h-1.35A2.342 2.342 0 007.21 8.537a2.342 2.342 0 002.333 2.35h1.35z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var DollarSign = _react.default.forwardRef(function DollarSign(props, ref) {
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

DollarSign.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
DollarSign.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

DollarSign.name = DollarSign.render.name || 'DollarSign';
var _default = DollarSign;
exports.default = _default;