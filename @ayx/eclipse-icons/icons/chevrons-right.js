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
  d: "M16.119 12.2a1.1 1.1 0 011.558 0c.43.433.43 1.132 0 1.564l-4.898 4.912a1.1 1.1 0 01-1.558 0l-4.898-4.912a1.108 1.108 0 010-1.563 1.1 1.1 0 011.558 0L12 16.33l4.119-4.13zM12 9.455l4.119-4.13a1.1 1.1 0 011.558 0c.43.431.43 1.131 0 1.563l-4.898 4.912a1.1 1.1 0 01-1.558 0L6.323 6.887a1.108 1.108 0 010-1.563 1.1 1.1 0 011.558 0L12 9.454z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var ChevronsRight = _react.default.forwardRef(function ChevronsRight(props, ref) {
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

ChevronsRight.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
ChevronsRight.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

ChevronsRight.name = ChevronsRight.render.name || 'ChevronsRight';
var _default = ChevronsRight;
exports.default = _default;