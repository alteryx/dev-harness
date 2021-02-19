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
  d: "M11.852 12.71c.458.458.458 1.2 0 1.657L3 23.219a1.172 1.172 0 01-1.657-1.657l8.852-8.852a1.172 1.172 0 011.657 0zm8.258-1.23a.4.4 0 01.182.182l.496 1.005a.4.4 0 00.3.218l1.11.162a.4.4 0 01.222.682l-.803.782a.4.4 0 00-.115.354l.19 1.105a.4.4 0 01-.58.421l-.993-.521a.4.4 0 00-.372 0l-.992.521a.4.4 0 01-.58-.421l.19-1.105a.4.4 0 00-.116-.354l-.802-.782a.4.4 0 01.221-.682l1.11-.162a.4.4 0 00.3-.218l.496-1.005a.4.4 0 01.536-.182zM16.54 8.024c.457.457.457 1.199 0 1.657l-2.604 2.603a1.172 1.172 0 11-1.657-1.657l2.604-2.603a1.172 1.172 0 011.657 0zM9.943.68a.5.5 0 01.227.227l.583 1.182a.5.5 0 00.377.273l1.303.19a.5.5 0 01.278.853l-.944.92a.5.5 0 00-.144.442l.223 1.298a.5.5 0 01-.725.527L9.955 5.98a.5.5 0 00-.466 0l-1.166.613a.5.5 0 01-.725-.527l.222-1.298a.5.5 0 00-.143-.443l-.944-.92a.5.5 0 01.277-.852l1.304-.19a.5.5 0 00.376-.273L9.274.908a.5.5 0 01.67-.227zm10.904 1.29a.3.3 0 01.136.136l.368.745a.3.3 0 00.226.164l.821.12a.3.3 0 01.167.511l-.595.58a.3.3 0 00-.086.265l.14.819a.3.3 0 01-.435.316l-.735-.386a.3.3 0 00-.28 0l-.735.386a.3.3 0 01-.435-.316l.14-.819a.3.3 0 00-.086-.265l-.594-.58a.3.3 0 01.166-.512l.822-.119a.3.3 0 00.226-.164l.367-.745a.3.3 0 01.402-.136z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var MagicWand = _react.default.forwardRef(function MagicWand(props, ref) {
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

MagicWand.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
MagicWand.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

MagicWand.name = MagicWand.render.name || 'MagicWand';
var _default = MagicWand;
exports.default = _default;