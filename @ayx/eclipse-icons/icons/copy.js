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
  d: "M12 10.146c-1.024 0-1.854.83-1.854 1.854v6.921c0 1.024.83 1.854 1.854 1.854h6.921c1.024 0 1.854-.83 1.854-1.854V12c0-1.024-.83-1.854-1.854-1.854H12zm0-2.225h6.921A4.079 4.079 0 0123 12v6.921A4.079 4.079 0 0118.921 23H12a4.079 4.079 0 01-4.079-4.079V12A4.079 4.079 0 0112 7.921zm-6.921 5.933a1.112 1.112 0 110 2.225h-.99A3.09 3.09 0 011 12.989v-8.9A3.09 3.09 0 014.09 1h8.899a3.09 3.09 0 013.09 3.09v.989a1.112 1.112 0 11-2.225 0v-.99a.865.865 0 00-.865-.864h-8.9a.865.865 0 00-.864.865v8.899c0 .478.387.865.865.865h.989z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Copy = _react.default.forwardRef(function Copy(props, ref) {
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

Copy.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Copy.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Copy.name = Copy.render.name || 'Copy';
var _default = Copy;
exports.default = _default;