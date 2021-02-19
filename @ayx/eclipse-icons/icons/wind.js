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
  d: "M10.408 5.474a1.115 1.115 0 01-1.574.004A1.107 1.107 0 018.83 3.91a3.097 3.097 0 013.735-.497 3.079 3.079 0 011.44 3.473 3.088 3.088 0 01-2.992 2.28h-8.9A1.111 1.111 0 011 8.054c0-.613.498-1.11 1.113-1.11h8.905a.862.862 0 00.436-1.61.867.867 0 00-1.046.139zm1.388 14.617a1.107 1.107 0 01.005-1.57 1.115 1.115 0 011.574.005.867.867 0 001.045.14.862.862 0 00-.44-1.611H2.113A1.111 1.111 0 011 15.945c0-.613.498-1.11 1.113-1.11h11.862a3.09 3.09 0 012.997 2.28 3.079 3.079 0 01-1.44 3.473 3.097 3.097 0 01-3.736-.497zm6.658-11.517a1.115 1.115 0 01-1.573-.002 1.107 1.107 0 01.002-1.57 3.592 3.592 0 014.325-.564 3.571 3.571 0 011.67 4.019 3.584 3.584 0 01-3.459 2.653H2.113A1.111 1.111 0 011 12c0-.613.498-1.11 1.113-1.11h17.304a1.355 1.355 0 00.678-2.53 1.363 1.363 0 00-1.64.214z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Wind = _react.default.forwardRef(function Wind(props, ref) {
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

Wind.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Wind.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Wind.name = Wind.render.name || 'Wind';
var _default = Wind;
exports.default = _default;