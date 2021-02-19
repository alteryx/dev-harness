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
  d: "M12.496 22.883c-.312.156-.68.156-.992 0a17.176 17.176 0 01-1.325-.763 22.282 22.282 0 01-2.855-2.114C4.641 17.652 3 14.979 3 12V5.079c0-.464.287-.88.72-1.042l7.89-2.966c.252-.095.528-.095.78 0l7.89 2.966c.433.163.72.578.72 1.042V12c0 2.979-1.641 5.652-4.324 8.006-.911.799-1.883 1.505-2.855 2.114-.587.368-1.048.624-1.325.763zm.149-2.65a20.09 20.09 0 002.57-1.902C17.463 16.36 18.78 14.212 18.78 12V5.85L12 3.3 5.22 5.85V12c0 2.212 1.317 4.359 3.565 6.331A20.09 20.09 0 0012 20.622c.184-.106.401-.236.645-.388z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Shield = _react.default.forwardRef(function Shield(props, ref) {
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

Shield.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Shield.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Shield.name = Shield.render.name || 'Shield';
var _default = Shield;
exports.default = _default;