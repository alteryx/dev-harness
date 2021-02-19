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
  d: "M5.079 22A4.076 4.076 0 011 17.926v-7.901A4.076 4.076 0 015.079 5.95l1.853-.001v-.864A3.088 3.088 0 0110.023 2h3.956a3.088 3.088 0 013.09 3.086l-.001.864h1.854A4.076 4.076 0 0123 10.026v7.9A4.076 4.076 0 0118.921 22H5.08zM6.932 8.172H5.079c-1.024 0-1.854.83-1.854 1.853v7.9c0 1.024.83 1.853 1.854 1.853l1.853-.001V8.172zm7.91 0H9.157v11.605h5.685V8.172zm4.08 0h-1.855v11.605h1.854c1.024 0 1.854-.828 1.854-1.851v-7.901c0-1.023-.83-1.852-1.854-1.852zm-4.944-3.95h-3.956a.865.865 0 00-.865.864v.864h5.685v-.864a.865.865 0 00-.864-.864z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Briefcase = _react.default.forwardRef(function Briefcase(props, ref) {
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

Briefcase.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Briefcase.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Briefcase.name = Briefcase.render.name || 'Briefcase';
var _default = Briefcase;
exports.default = _default;