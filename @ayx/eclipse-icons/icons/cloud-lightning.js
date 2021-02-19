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
  d: "M17.508 5.938h.427a6.06 6.06 0 016.034 5.452 6.062 6.062 0 01-4.823 6.55 1.113 1.113 0 11-.442-2.182 3.835 3.835 0 00-.768-7.594h-1.247c-.507 0-.95-.343-1.077-.835a6.801 6.801 0 00-13.17 0 6.806 6.806 0 003.292 7.655 1.114 1.114 0 01-1.078 1.949A9.033 9.033 0 019.027 0a9.027 9.027 0 018.481 5.938zM9.033 18.062a1.113 1.113 0 01-.926-1.731l3.957-5.939a1.112 1.112 0 111.852 1.236l-2.804 4.207h3.856c.89 0 1.42.99.926 1.73l-3.957 5.94a1.112 1.112 0 11-1.852-1.236l2.804-4.207H9.033z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var CloudLightning = _react.default.forwardRef(function CloudLightning(props, ref) {
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

CloudLightning.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
CloudLightning.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

CloudLightning.name = CloudLightning.render.name || 'CloudLightning';
var _default = CloudLightning;
exports.default = _default;