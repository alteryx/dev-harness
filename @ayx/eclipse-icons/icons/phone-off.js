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
  d: "M23.674.326c.435.435.435 1.14 0 1.575l-11.37 11.37c.503.434 1.037.833 1.595 1.194l.643-.644a3.092 3.092 0 013.26-.697c.82.306 1.671.518 2.548.634a3.09 3.09 0 012.66 3.082v2.964a3.094 3.094 0 01-3.39 3.09 20.688 20.688 0 01-9.018-3.204 20.333 20.333 0 01-2.683-2.034L1.9 23.674a1.113 1.113 0 01-1.575-1.575l9.494-9.493c.027-.034.056-.066.087-.097l.097-.087L22.099.326a1.113 1.113 0 011.575 0zM10.724 14.85l-1.228 1.229c.719.637 1.49 1.217 2.308 1.737a18.454 18.454 0 008.036 2.863.866.866 0 00.944-.87v-2.98a.864.864 0 00-.735-.865 13.827 13.827 0 01-3.027-.754.864.864 0 00-.91.19l-1.256 1.257a1.113 1.113 0 01-1.338.18 16.948 16.948 0 01-2.794-1.987zM7.15.99a3.095 3.095 0 013.095 2.67c.114.867.326 1.718.63 2.535a3.095 3.095 0 01-.7 3.267l-1.256 1.257a1.113 1.113 0 11-1.575-1.575l1.253-1.252a.867.867 0 00.193-.916 13.796 13.796 0 01-.752-3.015.869.869 0 00-.877-.745H4.192a.866.866 0 00-.863.924 18.473 18.473 0 002.865 8.056 1.113 1.113 0 01-1.868 1.211 20.718 20.718 0 01-3.213-9.046A3.093 3.093 0 014.191.99H7.15z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var PhoneOff = _react.default.forwardRef(function PhoneOff(props, ref) {
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

PhoneOff.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
PhoneOff.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

PhoneOff.name = PhoneOff.render.name || 'PhoneOff';
var _default = PhoneOff;
exports.default = _default;