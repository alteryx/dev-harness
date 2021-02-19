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
  d: "M17.072 20.889a1.112 1.112 0 01-2.227 0v-1.975A2.842 2.842 0 0012 16.074H5.072a2.842 2.842 0 00-2.845 2.84v1.975c0 .614-.499 1.111-1.114 1.111A1.112 1.112 0 010 20.889v-1.975a5.067 5.067 0 015.072-5.062H12a5.067 5.067 0 015.072 5.062v1.975zm-8.536-8.766a5.067 5.067 0 01-5.072-5.061A5.067 5.067 0 018.536 2a5.067 5.067 0 015.072 5.062 5.067 5.067 0 01-5.072 5.061zm0-2.222a2.842 2.842 0 002.845-2.84 2.842 2.842 0 00-2.845-2.839 2.842 2.842 0 00-2.845 2.84 2.842 2.842 0 002.845 2.84zM22.1 8.251a1.115 1.115 0 011.575 0 1.11 1.11 0 010 1.572l-3.959 3.95a1.115 1.115 0 01-1.574 0l-1.98-1.975a1.11 1.11 0 010-1.571 1.115 1.115 0 011.575 0l1.192 1.19 3.171-3.166z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var UserCheck = _react.default.forwardRef(function UserCheck(props, ref) {
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

UserCheck.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
UserCheck.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

UserCheck.name = UserCheck.render.name || 'UserCheck';
var _default = UserCheck;
exports.default = _default;