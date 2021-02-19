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
  d: "M12.724 1.55a10.195 10.195 0 015.588 1.651l.498.324a10.782 10.782 0 014.295 8.625c0 3.458-1.635 6.631-4.315 8.603l-.499.36a10.18 10.18 0 01-5.545 1.637 10.2 10.2 0 01-5.568-1.638l-.499-.322a11.287 11.287 0 01-2.657-2.892 1.11 1.11 0 01.319-1.516 1.06 1.06 0 011.485.326 8.37 8.37 0 002.504 2.539l.356.231a8.06 8.06 0 004.038 1.079 8.08 8.08 0 004.06-1.079l.356-.231c2.36-1.535 3.817-4.188 3.817-7.097 0-2.902-1.45-5.55-3.8-7.086l-.357-.233a8.058 8.058 0 00-4.055-1.088A8.085 8.085 0 008.67 4.831l-.356.233a8.37 8.37 0 00-2.46 2.487 1.06 1.06 0 01-1.487.316 1.11 1.11 0 01-.31-1.518 10.56 10.56 0 012.603-2.787l.499-.36a10.167 10.167 0 015.566-1.651zm-.988 5.926l3.937 3.899a1.09 1.09 0 010 1.55l-3.937 3.9a1.115 1.115 0 01-1.565 0 1.09 1.09 0 010-1.552l2.046-2.027H1.112c-.611 0-1.107-.49-1.107-1.096 0-.606.496-1.097 1.107-1.097h11.104l-2.045-2.026a1.09 1.09 0 010-1.551 1.115 1.115 0 011.565 0z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Input = _react.default.forwardRef(function Input(props, ref) {
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

Input.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Input.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Input.name = Input.render.name || 'Input';
var _default = Input;
exports.default = _default;