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
  d: "M6.2 0a1.113 1.113 0 011.104 1.123l-.035 3.9 8.69-.075a3.093 3.093 0 013.093 3.093l-.001 8.783h3.836a1.113 1.113 0 010 2.228l-3.836-.001v3.836a1.113 1.113 0 01-2.226 0l-.001-3.836H8.041a3.095 3.095 0 01-3.093-3.102l.075-8.68-3.9.035a1.113 1.113 0 01-.02-2.227l3.94-.034.034-3.94A1.113 1.113 0 016.2 0zm9.768 7.175L7.25 7.25l-.075 8.709c0 .478.388.866.866.866l8.783-.001V8.041a.864.864 0 00-.856-.866z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Crop = _react.default.forwardRef(function Crop(props, ref) {
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

Crop.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Crop.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Crop.name = Crop.render.name || 'Crop';
var _default = Crop;
exports.default = _default;