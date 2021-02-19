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
  d: "M18.892 8.907A1.11 1.11 0 0120 10.021V12c0 4.063-2.998 7.422-6.892 7.965l-.001 1.808h2.831a1.11 1.11 0 011.108 1.114A1.11 1.11 0 0115.938 24H8.062a1.11 1.11 0 01-1.108-1.113 1.11 1.11 0 011.108-1.114h2.83v-1.808C6.998 19.422 4 16.063 4 12v-1.98a1.11 1.11 0 011.108-1.113 1.11 1.11 0 011.107 1.114V12c0 3.211 2.59 5.814 5.785 5.814 3.195 0 5.785-2.603 5.785-5.814v-1.98a1.11 1.11 0 011.107-1.113zM12 0c2.243 0 4.062 1.828 4.062 4.082V12c0 2.255-1.819 4.082-4.062 4.082-2.243 0-4.062-1.827-4.062-4.082V4.082C7.938 1.828 9.757 0 12 0zm0 2.227a1.85 1.85 0 00-1.846 1.855V12A1.85 1.85 0 0012 13.856 1.85 1.85 0 0013.846 12V4.082A1.85 1.85 0 0012 2.227z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Mic = _react.default.forwardRef(function Mic(props, ref) {
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

Mic.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Mic.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Mic.name = Mic.render.name || 'Mic';
var _default = Mic;
exports.default = _default;