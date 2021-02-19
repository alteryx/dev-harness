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
  d: "M2.018.326L20.42 18.831l.018.018 3.232 3.25c.432.435.432 1.14 0 1.575a1.103 1.103 0 01-1.566 0l-2.784-2.8a6.002 6.002 0 01-1.354.157h-8.84c-4.122.067-7.76-2.697-8.822-6.703a9.061 9.061 0 013.13-9.43L.452 1.902a1.118 1.118 0 010-1.575 1.103 1.103 0 011.566 0zm.426 13.428a6.777 6.777 0 006.664 5.05h8.154L5.015 6.488a6.825 6.825 0 00-2.571 7.266zm7.44-10.78a8.99 8.99 0 017.66 5.933h.42a6.02 6.02 0 015.031 2.711 6.091 6.091 0 01.528 5.715c-.239.566-.889.831-1.452.591a1.116 1.116 0 01-.587-1.46 3.853 3.853 0 00-.334-3.615 3.809 3.809 0 00-3.184-1.715h-1.24c-.507 0-.949-.346-1.073-.84A6.777 6.777 0 009.69 5.193a1.112 1.112 0 01-1.005-1.207 1.109 1.109 0 011.2-1.012z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var CloudOff = _react.default.forwardRef(function CloudOff(props, ref) {
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

CloudOff.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
CloudOff.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

CloudOff.name = CloudOff.render.name || 'CloudOff';
var _default = CloudOff;
exports.default = _default;