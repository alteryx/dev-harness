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
  d: "M21 20.889a1.11 1.11 0 11-2.22 0v-1.975c0-1.569-1.269-2.84-2.835-2.84h-7.89a2.838 2.838 0 00-2.836 2.84v1.975a1.11 1.11 0 11-2.219 0v-1.975a5.058 5.058 0 015.055-5.062h7.89A5.058 5.058 0 0121 18.914v1.975zm-9-8.766a5.058 5.058 0 01-5.055-5.061A5.058 5.058 0 0112 2a5.058 5.058 0 015.055 5.062A5.058 5.058 0 0112 12.123zm0-2.222a2.838 2.838 0 002.836-2.84c0-1.567-1.27-2.839-2.836-2.839a2.838 2.838 0 00-2.836 2.84c0 1.568 1.27 2.84 2.836 2.84z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var User = _react.default.forwardRef(function User(props, ref) {
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

User.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
User.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

User.name = User.render.name || 'User';
var _default = User;
exports.default = _default;