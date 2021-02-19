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
  d: "M17.9 17.9a1.1 1.1 0 01.12 2.194l-.12.006H6.1a1.1 1.1 0 01-.12-2.194l.12-.006h11.8zm3-4.75a1.1 1.1 0 01.12 2.194l-.12.006H3.1a1.1 1.1 0 01-.12-2.194l.12-.006h17.8zm-3-4.5a1.1 1.1 0 01.12 2.194l-.12.006H6.1a1.1 1.1 0 01-.12-2.194l.12-.006h11.8zm3-4.75a1.1 1.1 0 01.12 2.194l-.12.006H3.1a1.1 1.1 0 01-.12-2.194L3.1 3.9h17.8z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var AlignCenter = _react.default.forwardRef(function AlignCenter(props, ref) {
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

AlignCenter.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
AlignCenter.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

AlignCenter.name = AlignCenter.render.name || 'AlignCenter';
var _default = AlignCenter;
exports.default = _default;