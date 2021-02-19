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
  d: "M4.09 2h15.82A3.088 3.088 0 0123 5.086v5.926C23 17.081 18.075 22 12 22a11.006 11.006 0 01-7.778-3.218A10.981 10.981 0 011 11.012V5.086A3.088 3.088 0 014.09 2zm0 2.222a.865.865 0 00-.865.864v5.926a8.76 8.76 0 002.57 6.198A8.78 8.78 0 0012 19.778c4.846 0 8.775-3.925 8.775-8.766V5.086a.865.865 0 00-.865-.864H4.09zM12 12.404l3.168-3.165a1.113 1.113 0 011.574 0 1.11 1.11 0 010 1.571l-3.955 3.951a1.113 1.113 0 01-1.574 0l-3.955-3.95a1.11 1.11 0 010-1.572 1.113 1.113 0 011.574 0L12 12.404z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Pocket = _react.default.forwardRef(function Pocket(props, ref) {
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

Pocket.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Pocket.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Pocket.name = Pocket.render.name || 'Pocket';
var _default = Pocket;
exports.default = _default;