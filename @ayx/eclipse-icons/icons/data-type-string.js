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
  d: "M19.37 12c1.18 0 2.3.403 3.2 1.129a1.1 1.1 0 01-1.276 1.787l-.105-.075a2.9 2.9 0 10-.16 4.638l.175-.133a1.1 1.1 0 111.393 1.703A5.1 5.1 0 1119.37 12zM5.6 7l.053.001a1.04 1.04 0 01.28.051 1.135 1.135 0 01.108.04l.002.001.069.034.04.021c.156.09.292.22.39.383l.066.128 3.5 8 .042.113a1.1 1.1 0 01-2.004.876l-.053-.107-.456-1.041H3.563l-.455 1.041a1.1 1.1 0 01-2.058-.77l.043-.112 3.5-8c.048-.109.111-.207.19-.295l.081-.082a1.1 1.1 0 01.183-.133l.041-.022.069-.034-.054.026-.025.013A1.106 1.106 0 015.6 7zm0 3.845L4.526 13.3h2.148L5.6 10.845zM14.1 2a3.1 3.1 0 012.587 4.808 3.1 3.1 0 01-1.912 5.387l-.175.005h-3.5a1.1 1.1 0 01-1.094-.98L10 11.1v-8A1.1 1.1 0 0111.1 2h3zm.5 6.2l-2.4-.001V10h2.4a.9.9 0 00.113-1.793L14.6 8.2zm-.5-4l-1.9-.001V6h1.9a.9.9 0 00.113-1.793L14.1 4.2z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var DataTypeString = _react.default.forwardRef(function DataTypeString(props, ref) {
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

DataTypeString.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
DataTypeString.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

DataTypeString.name = DataTypeString.render.name || 'DataTypeString';
var _default = DataTypeString;
exports.default = _default;