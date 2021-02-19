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
  d: "M18.798 14.63a1.112 1.112 0 112.224 0v5.28a3.09 3.09 0 01-3.09 3.09H4.09A3.09 3.09 0 011 19.91V6.067a3.09 3.09 0 013.09-3.09h5.28a1.112 1.112 0 110 2.225H4.09a.865.865 0 00-.865.865V19.91c0 .478.387.865.865.865h13.843a.865.865 0 00.865-.865v-5.28zm-.079-13.304l3.955 3.955a1.112 1.112 0 010 1.573l-9.887 9.888a1.112 1.112 0 01-.787.325H8.045a1.112 1.112 0 01-1.112-1.112V12c0-.295.117-.578.325-.787l9.888-9.887a1.112 1.112 0 011.573 0zM9.157 12.46v2.382h2.382l8.776-8.776-2.382-2.382-8.776 8.776z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Edit = _react.default.forwardRef(function Edit(props, ref) {
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

Edit.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Edit.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Edit.name = Edit.render.name || 'Edit';
var _default = Edit;
exports.default = _default;