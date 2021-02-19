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
  d: "M22.887 20.775a1.113 1.113 0 110 2.225H1.113a1.113 1.113 0 110-2.225h21.774zM12 11.876a6.059 6.059 0 016.062 6.057 1.113 1.113 0 01-2.227 0A3.833 3.833 0 0012 14.1a3.833 3.833 0 00-3.835 3.832 1.113 1.113 0 01-2.227 0A6.059 6.059 0 0112 11.876zM3.093 16.82a1.113 1.113 0 110 2.225h-1.98a1.113 1.113 0 110-2.225h1.98zm19.794 0a1.113 1.113 0 110 2.225h-1.98a1.113 1.113 0 110-2.225h1.98zm-17.8-7.367l1.406 1.404a1.112 1.112 0 010 1.574 1.114 1.114 0 01-1.575 0l-1.405-1.404a1.112 1.112 0 010-1.574 1.114 1.114 0 011.575 0zm15.4 0a1.112 1.112 0 010 1.574l-1.405 1.404a1.114 1.114 0 01-1.575 0 1.112 1.112 0 010-1.574l1.405-1.404a1.114 1.114 0 011.575 0zM12 1a1.113 1.113 0 01.787.326l3.96 3.955a1.112 1.112 0 010 1.573 1.114 1.114 0 01-1.576 0l-2.058-2.056v4.236a1.113 1.113 0 01-2.226 0l-.001-4.237-2.057 2.057a1.114 1.114 0 01-1.575 0 1.112 1.112 0 010-1.573l3.959-3.955.024-.024a1.12 1.12 0 01.042-.038l-.066.062a1.123 1.123 0 01.434-.269c.11-.037.23-.057.353-.057z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Sunrise = _react.default.forwardRef(function Sunrise(props, ref) {
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

Sunrise.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Sunrise.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Sunrise.name = Sunrise.render.name || 'Sunrise';
var _default = Sunrise;
exports.default = _default;