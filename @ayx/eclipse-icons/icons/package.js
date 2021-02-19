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
  d: "M13.375 1.316l7.91 3.868A3.017 3.017 0 0123 7.89v9.218a3.015 3.015 0 01-1.712 2.704l-7.91 3.868a3.151 3.151 0 01-2.765 0L2.7 19.81A3.013 3.013 0 011 17.098V7.89c0-1.147.665-2.195 1.712-2.704l3.776-1.849c.053-.03.107-.056.163-.077l3.974-1.944a3.152 3.152 0 012.75 0zM3.224 8.45v8.655a.843.843 0 00.474.76l7.189 3.517v-9.184L3.224 8.45zm17.551 0l-3.307 1.618a1.126 1.126 0 01-.04.02l-4.316 2.11v9.179l7.183-3.513a.844.844 0 00.48-.757V8.45zM7.06 5.492L4.604 6.693 12 10.31l2.456-1.201L7.06 5.492zm4.558-2.229l-2.07 1.012 7.396 3.617 2.451-1.199-7.01-3.429a.881.881 0 00-.767 0z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Package = _react.default.forwardRef(function Package(props, ref) {
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

Package.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Package.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Package.name = Package.render.name || 'Package';
var _default = Package;
exports.default = _default;