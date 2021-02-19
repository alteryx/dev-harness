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
  d: "M18.062 20.889c0 .614-.499 1.111-1.114 1.111a1.112 1.112 0 01-1.113-1.111v-1.975a2.842 2.842 0 00-2.845-2.84H5.072a2.842 2.842 0 00-2.845 2.84v1.975c0 .614-.499 1.111-1.114 1.111A1.112 1.112 0 010 20.889v-1.975a5.067 5.067 0 015.072-5.062h7.918a5.067 5.067 0 015.072 5.062v1.975zM9.03 12.123a5.067 5.067 0 01-5.072-5.061A5.067 5.067 0 019.03 2a5.067 5.067 0 015.072 5.062 5.067 5.067 0 01-5.072 5.061zm0-2.222a2.842 2.842 0 002.845-2.84 2.842 2.842 0 00-2.845-2.839 2.842 2.842 0 00-2.845 2.84 2.842 2.842 0 002.845 2.84zM24 20.89a1.112 1.112 0 01-2.227 0v-1.975a2.84 2.84 0 00-2.134-2.747 1.11 1.11 0 11.557-2.151A5.064 5.064 0 0124 18.914v1.975zM15.683 4.316a1.11 1.11 0 11.552-2.153 5.064 5.064 0 013.814 4.904c0 2.312-1.57 4.33-3.814 4.903a1.11 1.11 0 11-.552-2.153 2.84 2.84 0 002.14-2.75 2.84 2.84 0 00-2.14-2.751z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Users = _react.default.forwardRef(function Users(props, ref) {
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

Users.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Users.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Users.name = Users.render.name || 'Users';
var _default = Users;
exports.default = _default;