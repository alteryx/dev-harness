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
  d: "M20.889 14.84c.614 0 1.111.497 1.111 1.11v2.964A3.086 3.086 0 0118.914 22H15.95a1.111 1.111 0 010-2.222h2.963a.864.864 0 00.864-.864V15.95c0-.614.497-1.111 1.11-1.111zm-17.778 0c.614 0 1.111.497 1.111 1.11v2.964c0 .477.387.864.864.864H8.05a1.111 1.111 0 010 2.222H5.086A3.086 3.086 0 012 18.914V15.95c0-.614.497-1.111 1.111-1.111zM8.05 2a1.111 1.111 0 010 2.222H5.086a.864.864 0 00-.864.864V8.05A1.111 1.111 0 012 8.05V5.086A3.086 3.086 0 015.086 2H8.05zm10.865 0A3.086 3.086 0 0122 5.086V8.05a1.111 1.111 0 01-2.222 0V5.086a.864.864 0 00-.864-.864H15.95a1.111 1.111 0 010-2.222h2.963z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Maximize = _react.default.forwardRef(function Maximize(props, ref) {
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

Maximize.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Maximize.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Maximize.name = Maximize.render.name || 'Maximize';
var _default = Maximize;
exports.default = _default;