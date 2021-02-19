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
  d: "M15.95 1c.614 0 1.112.498 1.112 1.112l-.001.865h.865A4.076 4.076 0 0122 7.058V18.92A4.076 4.076 0 0117.926 23H6.074A4.076 4.076 0 012 18.921V7.056a4.076 4.076 0 014.074-4.078l.864-.001v-.865a1.112 1.112 0 112.222 0v.865h5.679v-.865c0-.614.498-1.112 1.112-1.112zm3.827 10.134H4.222v7.787c0 1.024.83 1.854 1.852 1.854h11.852c1.023 0 1.852-.83 1.852-1.854l-.001-7.787zM6.938 5.202h-.864c-1.023 0-1.852.83-1.852 1.854V8.91h15.555V7.056c0-1.024-.828-1.854-1.851-1.854h-.865v.865a1.112 1.112 0 11-2.221 0l-.001-.865H9.16v.865a1.112 1.112 0 11-2.222 0v-.865z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Calendar = _react.default.forwardRef(function Calendar(props, ref) {
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

Calendar.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Calendar.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Calendar.name = Calendar.render.name || 'Calendar';
var _default = Calendar;
exports.default = _default;