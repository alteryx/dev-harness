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
  d: "M16.45 1a3.584 3.584 0 013.317 4.944h2.12c.615 0 1.113.498 1.113 1.112V12c0 .614-.498 1.112-1.112 1.112h-.866v8.776c0 .614-.498 1.112-1.112 1.112H12l-.017-.001L4.09 23a1.112 1.112 0 01-1.112-1.112l-.001-8.776h-.865A1.112 1.112 0 011 12V7.056c0-.614.498-1.112 1.112-1.112h2.121A3.584 3.584 0 017.55 1C9.513 1 10.978 2.148 12 3.964l-.048.084C12.978 2.184 14.458 1 16.45 1zm-5.563 12.112H5.202v7.663h5.685v-7.663zm7.91 0h-5.685v7.663h5.686l-.001-7.663zm-7.91-4.944H3.225v2.72l7.662-.001V8.168zm9.888 0h-7.663v2.719h7.663V8.17zM7.551 3.226a1.36 1.36 0 000 2.719h2.937a7.778 7.778 0 00-.39-.824c-.674-1.225-1.511-1.895-2.547-1.895zm8.898 0c-1.036 0-1.873.67-2.547 1.895-.145.264-.275.54-.39.824h2.937a1.36 1.36 0 000-2.72z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Gift = _react.default.forwardRef(function Gift(props, ref) {
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

Gift.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Gift.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Gift.name = Gift.render.name || 'Gift';
var _default = Gift;
exports.default = _default;