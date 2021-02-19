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
  d: "M10.502 13.916L15.76 8.74a1.123 1.123 0 011.59 1.587l-6.053 5.97c-.438.439-1.15.439-1.588 0L7.06 13.916a1.123 1.123 0 011.588-1.588l1.853 1.588zm6.105 5.297a3.593 3.593 0 011.396-1.172l2.162-1.022-.195-2.384a3.593 3.593 0 01.316-1.795l1-2.173-1.683-1.7a3.593 3.593 0 01-.911-1.579l-.631-2.306-2.382-.222a3.593 3.593 0 01-1.713-.623L12 2.876l-1.966 1.36a3.593 3.593 0 01-1.713.624l-2.382.222-.63 2.306a3.593 3.593 0 01-.912 1.579l-1.682 1.7.999 2.173c.258.561.367 1.18.316 1.795l-.195 2.384 2.162 1.022c.558.264 1.04.667 1.396 1.172l1.382 1.951 2.313-.606a3.593 3.593 0 011.824 0l2.313.606 1.382-1.951zm-7.701 4.084a1.497 1.497 0 01-1.602-.583l-1.622-2.29a1.497 1.497 0 00-.581-.488l-2.537-1.2a1.497 1.497 0 01-.852-1.476l.23-2.796a1.497 1.497 0 00-.133-.748l-1.172-2.55a1.497 1.497 0 01.296-1.679l1.974-1.994c.18-.183.311-.41.38-.658l.74-2.707a1.497 1.497 0 011.306-1.095l2.794-.26c.256-.024.502-.113.714-.26L11.148.916a1.497 1.497 0 011.704 0l2.307 1.597c.212.147.458.236.714.26l2.794.26c.621.057 1.141.494 1.306 1.095l.74 2.707c.069.248.2.475.38.658l1.974 1.994c.439.444.557 1.112.296 1.679l-1.172 2.55a1.497 1.497 0 00-.132.748l.23 2.796a1.497 1.497 0 01-.853 1.476l-2.537 1.2c-.232.11-.433.278-.581.488l-1.622 2.29c-.36.509-.999.741-1.602.583l-2.714-.712a1.497 1.497 0 00-.76 0l-2.714.712z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Certify = _react.default.forwardRef(function Certify(props, ref) {
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

Certify.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Certify.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Certify.name = Certify.render.name || 'Certify';
var _default = Certify;
exports.default = _default;