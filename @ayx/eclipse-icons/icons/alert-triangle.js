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
  d: "M9.315 3.392a3.092 3.092 0 015.289 0l8.382 13.994a3.09 3.09 0 01-2.654 4.634H3.574a3.09 3.09 0 01-2.632-4.65L9.315 3.393zM2.859 18.498a.865.865 0 00.727 1.298H20.32a.865.865 0 00.749-1.283l-8.37-13.972a.865.865 0 00-1.478-.002L2.86 18.499zm7.988-9.453a1.112 1.112 0 112.225 0v3.954a1.112 1.112 0 01-2.225 0V9.045zm1.112 8.897a1.483 1.483 0 100-2.966 1.483 1.483 0 000 2.966z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var AlertTriangle = _react.default.forwardRef(function AlertTriangle(props, ref) {
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

AlertTriangle.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
AlertTriangle.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

AlertTriangle.name = AlertTriangle.render.name || 'AlertTriangle';
var _default = AlertTriangle;
exports.default = _default;