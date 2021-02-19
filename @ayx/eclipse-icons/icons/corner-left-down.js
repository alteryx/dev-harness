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
  d: "M19.89 3a1.11 1.11 0 010 2.22h-6.904a2.836 2.836 0 00-2.835 2.835l-.001 9.157 3.038-3.038a1.11 1.11 0 011.57 1.57l-4.932 4.931-.02.02a1.116 1.116 0 01-.054.047l.074-.067a1.12 1.12 0 01-.67.32A1.106 1.106 0 019.04 21l-.114-.006a1.115 1.115 0 01-.67-.319l-4.932-4.931a1.11 1.11 0 111.57-1.57l3.036 3.037V8.055A5.055 5.055 0 0112.987 3h6.904z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var CornerLeftDown = _react.default.forwardRef(function CornerLeftDown(props, ref) {
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

CornerLeftDown.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
CornerLeftDown.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

CornerLeftDown.name = CornerLeftDown.render.name || 'CornerLeftDown';
var _default = CornerLeftDown;
exports.default = _default;