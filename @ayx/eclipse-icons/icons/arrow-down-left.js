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
  d: "M12.583 19.834l-.01.007a1.107 1.107 0 01-.014.008l-.086.045A1.102 1.102 0 0112 20l-.06-.002a1.113 1.113 0 01-.413-.104l-.086-.045a1.107 1.107 0 01-.024-.015l-.071-.048a1.112 1.112 0 01-.13-.11l-6.892-6.893a1.108 1.108 0 111.567-1.566l5.001 5V5.107a1.108 1.108 0 112.216 0l-.001 11.111 5.002-5.001a1.108 1.108 0 111.567 1.566l-6.893 6.893-.017.016c-.02.02-.04.038-.062.055l.08-.071a1.118 1.118 0 01-.13.11l-.071.048z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var ArrowDownLeft = _react.default.forwardRef(function ArrowDownLeft(props, ref) {
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

ArrowDownLeft.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
ArrowDownLeft.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

ArrowDownLeft.name = ArrowDownLeft.render.name || 'ArrowDownLeft';
var _default = ArrowDownLeft;
exports.default = _default;