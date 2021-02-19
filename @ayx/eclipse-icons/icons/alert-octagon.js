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
  d: "M8.367 3.225L3.225 8.367v7.266l5.142 5.142h7.266l5.142-5.142V8.367l-5.142-5.142H8.367zM7.907 1h8.186c.295 0 .578.117.787.326l5.794 5.794c.209.209.326.492.326.787v8.186c0 .295-.117.578-.326.787l-5.794 5.794a1.112 1.112 0 01-.787.326H7.907c-.295 0-.578-.117-.787-.326L1.326 16.88A1.112 1.112 0 011 16.093V7.907c0-.295.117-.578.326-.787L7.12 1.326c.209-.209.492-.326.787-.326zm2.98 7.045a1.112 1.112 0 012.225 0V12a1.112 1.112 0 01-2.224 0V8.045zM12 17.933a1.483 1.483 0 100-2.967 1.483 1.483 0 000 2.967z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var AlertOctagon = _react.default.forwardRef(function AlertOctagon(props, ref) {
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

AlertOctagon.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
AlertOctagon.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

AlertOctagon.name = AlertOctagon.render.name || 'AlertOctagon';
var _default = AlertOctagon;
exports.default = _default;