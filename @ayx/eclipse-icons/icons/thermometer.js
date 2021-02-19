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
  d: "M17.763 20.05C17.06 22.395 14.923 24 12.5 24c-2.422 0-4.56-1.604-5.263-3.95a5.61 5.61 0 011.719-5.873V3.587C8.956 1.607 10.543 0 12.5 0s3.544 1.606 3.544 3.587v10.59a5.61 5.61 0 011.719 5.872zm-3.919-5.32V3.588c0-.751-.602-1.36-1.344-1.36-.742 0-1.344.609-1.344 1.36v11.144c0 .371-.184.719-.49.925a3.36 3.36 0 00-1.324 3.747 3.305 3.305 0 003.158 2.37 3.305 3.305 0 003.158-2.37 3.36 3.36 0 00-1.325-3.747 1.117 1.117 0 01-.489-.925z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Thermometer = _react.default.forwardRef(function Thermometer(props, ref) {
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

Thermometer.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Thermometer.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Thermometer.name = Thermometer.render.name || 'Thermometer';
var _default = Thermometer;
exports.default = _default;