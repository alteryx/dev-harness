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
  d: "M20.802 3.316a1.11 1.11 0 011.572 0c.435.435.435 1.14 0 1.575l-9.882 9.899a1.11 1.11 0 01-1.572 0l-2.965-2.97a1.115 1.115 0 010-1.575 1.11 1.11 0 011.572 0l2.179 2.183 9.096-9.112zm-1.314 8.707a1.113 1.113 0 112.224 0v6.929a3.09 3.09 0 01-3.088 3.093H4.788A3.09 3.09 0 011.7 18.952V5.093A3.09 3.09 0 014.788 2h10.87a1.113 1.113 0 010 2.227H4.789a.865.865 0 00-.864.866v13.859c0 .478.387.866.864.866h13.836a.865.865 0 00.864-.866v-6.93z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var CheckSquare = _react.default.forwardRef(function CheckSquare(props, ref) {
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

CheckSquare.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
CheckSquare.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

CheckSquare.name = CheckSquare.render.name || 'CheckSquare';
var _default = CheckSquare;
exports.default = _default;