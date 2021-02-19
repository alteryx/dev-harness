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
  d: "M14.97 0c.614 0 1.112.498 1.112 1.113V2.97h.866a4.082 4.082 0 014.083 4.083l-.001.865h1.857a1.113 1.113 0 110 2.227H21.03v2.721l1.857.001a1.113 1.113 0 110 2.227l-1.857-.001v1.856a4.082 4.082 0 01-4.082 4.083l-.866-.001v1.857a1.113 1.113 0 11-2.226 0l-.001-1.857h-3.711v1.857a1.113 1.113 0 11-2.226 0l-.001-1.857h-.865a4.082 4.082 0 01-4.083-4.082v-1.856H1.113a1.113 1.113 0 010-2.226l1.856-.001v-2.721H1.113a1.113 1.113 0 010-2.226l1.856-.001v-.865a4.082 4.082 0 014.083-4.083h.865V1.113a1.113 1.113 0 012.227 0V2.97h3.711V1.113c0-.615.5-1.113 1.114-1.113zm1.978 5.196H7.052c-1.025 0-1.856.83-1.856 1.856v9.896c0 1.025.83 1.856 1.856 1.856h9.896c1.025 0 1.856-.83 1.856-1.856V7.052c0-1.025-.83-1.856-1.856-1.856zM14.97 7.918c.615 0 1.113.498 1.113 1.113v5.938c0 .615-.498 1.113-1.113 1.113H9.031a1.113 1.113 0 01-1.113-1.113V9.031c0-.615.498-1.113 1.113-1.113h5.938zm-1.113 2.226h-3.712v3.712h3.712v-3.712z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Cpu = _react.default.forwardRef(function Cpu(props, ref) {
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

Cpu.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Cpu.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Cpu.name = Cpu.render.name || 'Cpu';
var _default = Cpu;
exports.default = _default;