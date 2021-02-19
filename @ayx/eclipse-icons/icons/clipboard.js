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
  d: "M14.466 1c1.217 0 2.238.842 2.515 1.977h.937A3.086 3.086 0 0121 6.068V19.91c0 1.707-1.38 3.09-3.082 3.09H6.082A3.086 3.086 0 013 19.91V6.067c0-1.706 1.38-3.09 3.082-3.09h.937A2.591 2.591 0 019.534 1h4.932zM7.019 5.203h-.937a.864.864 0 00-.863.864V19.91c0 .478.387.865.863.865h11.836a.864.864 0 00.863-.865V6.067a.864.864 0 00-.863-.865h-.937a2.591 2.591 0 01-2.515 1.978H9.534A2.591 2.591 0 017.02 5.203zm7.447-1.978H9.534a.37.37 0 00-.37.37v.99c0 .204.166.37.37.37h4.932a.37.37 0 00.37-.37v-.99a.37.37 0 00-.37-.37z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Clipboard = _react.default.forwardRef(function Clipboard(props, ref) {
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

Clipboard.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Clipboard.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Clipboard.name = Clipboard.render.name || 'Clipboard';
var _default = Clipboard;
exports.default = _default;