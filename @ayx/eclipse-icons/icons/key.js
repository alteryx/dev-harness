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
  d: "M20.252 2.853a6.6 6.6 0 01-2.933 11.085l-.255.062a6.6 6.6 0 01-5.293-1.083l-3.616 3.615 2.223 2.222a1.1 1.1 0 01-1.46 1.641l-.096-.085L6.6 18.087l-.945.945 2.223 2.222a1.1 1.1 0 01-1.46 1.641l-.096-.085L4.1 20.587 2.878 21.81a1.1 1.1 0 01-1.641-1.46l.085-.096 8.91-8.91a6.602 6.602 0 0110.02-8.491zm-7.696 1.636a4.4 4.4 0 00-.21 5.998l.164.179-.017-.017a4.4 4.4 0 106.222-6.222 4.398 4.398 0 00-6.16.062z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Key = _react.default.forwardRef(function Key(props, ref) {
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

Key.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Key.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Key.name = Key.render.name || 'Key';
var _default = Key;
exports.default = _default;