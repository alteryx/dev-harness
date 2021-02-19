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
  d: "M11.573 1.55a10.761 10.761 0 015.738 1.651 1.09 1.09 0 01.34 1.514 1.114 1.114 0 01-1.529.336 8.49 8.49 0 00-4.55-1.308c-4.687 0-8.488 3.764-8.488 8.407 0 4.643 3.8 8.407 8.489 8.407a8.502 8.502 0 004.532-1.298 1.114 1.114 0 011.528.34 1.09 1.09 0 01-.343 1.513 10.732 10.732 0 01-5.717 1.638C5.662 22.75.87 18.004.87 12.15c0-5.854 4.792-10.6 10.703-10.6zm8.163 5.926l3.937 3.899a1.09 1.09 0 010 1.55l-3.937 3.9a1.115 1.115 0 01-1.565 0 1.09 1.09 0 010-1.552l2.045-2.027H9.112c-.611 0-1.107-.49-1.107-1.096 0-.606.496-1.097 1.107-1.097h11.105l-2.046-2.026a1.09 1.09 0 010-1.551 1.115 1.115 0 011.565 0z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Output = _react.default.forwardRef(function Output(props, ref) {
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

Output.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Output.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Output.name = Output.render.name || 'Output';
var _default = Output;
exports.default = _default;