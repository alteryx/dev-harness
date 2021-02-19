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
  d: "M2.776 12.63a18.146 18.146 0 001.995 2.556c2.128 2.262 4.551 3.595 7.229 3.595s5.101-1.333 7.229-3.595A18.146 18.146 0 0021.616 12c-.107-.18-.237-.393-.392-.63a18.146 18.146 0 00-1.995-2.556C17.101 6.552 14.678 5.219 12 5.219S6.899 6.552 4.771 8.814A18.146 18.146 0 002.384 12c.107.18.237.393.392.63zM.118 11.505c.14-.281.404-.748.787-1.339a20.343 20.343 0 012.241-2.87C5.658 4.627 8.616 3 12 3c3.384 0 6.342 1.626 8.854 4.296.86.915 1.608 1.892 2.241 2.87.383.59.646 1.057.787 1.338.157.312.157.68 0 .992-.14.281-.404.748-.787 1.339a20.343 20.343 0 01-2.241 2.87C18.342 19.373 15.384 21 12 21c-3.384 0-6.342-1.626-8.854-4.296a20.343 20.343 0 01-2.241-2.87 15.082 15.082 0 01-.787-1.338 1.106 1.106 0 010-.992zM12 16.068A4.076 4.076 0 017.918 12 4.076 4.076 0 0112 7.932 4.076 4.076 0 0116.082 12 4.076 4.076 0 0112 16.068zm0-2.219A1.853 1.853 0 0013.856 12c0-1.021-.831-1.85-1.856-1.85A1.853 1.853 0 0010.144 12c0 1.021.831 1.85 1.856 1.85z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Eye = _react.default.forwardRef(function Eye(props, ref) {
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

Eye.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Eye.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Eye.name = Eye.render.name || 'Eye';
var _default = Eye;
exports.default = _default;