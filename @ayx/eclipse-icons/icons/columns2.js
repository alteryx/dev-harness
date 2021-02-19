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
  d: "M1.5,1.5 L1.5,10.6666667 L2.66666667,10.6666667 L2.66666667,1.5 L1.5,1.5 Z M0.75,0 L3.41666667,0 C3.83088023,0 4.16666667,0.335786438 4.16666667,0.75 L4.16666667,11.4166667 C4.16666667,11.8308802 3.83088023,12.1666667 3.41666667,12.1666667 L0.75,12.1666667 C0.335786438,12.1666667 0,11.8308802 0,11.4166667 L0,0.75 C0,0.335786438 0.335786438,0 0.75,0 Z M6.08333333,0 L8.75,0 C9.16421356,0 9.5,0.335786438 9.5,0.75 L9.5,11.4166667 C9.5,11.8308802 9.16421356,12.1666667 8.75,12.1666667 L6.08333333,12.1666667 C5.66911977,12.1666667 5.33333333,11.8308802 5.33333333,11.4166667 L5.33333333,0.75 C5.33333333,0.335786438 5.66911977,0 6.08333333,0 Z M6.83333333,10.6666667 L8,10.6666667 L8,1.5 L6.83333333,1.5 L6.83333333,10.6666667 Z M11.0833333,0 L13.75,0 C14.1642136,0 14.5,0.335786438 14.5,0.75 L14.5,11.4166667 C14.5,11.8308802 14.1642136,12.1666667 13.75,12.1666667 L11.0833333,12.1666667 C10.6691198,12.1666667 10.3333333,11.8308802 10.3333333,11.4166667 L10.3333333,0.75 C10.3333333,0.335786438 10.6691198,0 11.0833333,0 Z M11.8333333,10.6666667 L13,10.6666667 L13,1.5 L11.8333333,1.5 L11.8333333,10.6666667 Z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Columns2 = _react.default.forwardRef(function Columns2(props, ref) {
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
    viewBox: "0 0 15 13"
  }, otherProps, {
    fill: color,
    ref: ref
  }), _ref);
});

Columns2.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Columns2.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Columns2.name = Columns2.render.name || 'Columns2';
var _default = Columns2;
exports.default = _default;