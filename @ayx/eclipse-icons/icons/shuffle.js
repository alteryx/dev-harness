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
  d: "M15.753 14.177l4.026 4.03v-2.256a1.11 1.11 0 112.221 0v4.92a1.114 1.114 0 01-.325.804l-.017.016c-.02.02-.041.038-.063.056l.08-.072a1.121 1.121 0 01-.625.313c-.06.009-.118.013-.177.012h-4.918a1.11 1.11 0 010-2.222l2.253-.001-4.026-4.028a1.112 1.112 0 011.57-1.572zm5.258-12.17l.04.005a1.103 1.103 0 01.624.313l.018.019.045.05-.063-.069a1.12 1.12 0 01.267.43c.038.112.058.232.058.356V8.05a1.11 1.11 0 11-2.22 0l-.001-2.257L4.896 20.687a1.11 1.11 0 11-1.57-1.571L18.207 4.222h-2.253a1.11 1.11 0 010-2.222h4.935c.04 0 .08.002.121.007zM4.896 3.313L9.83 8.251a1.112 1.112 0 01-1.57 1.572L3.324 4.884a1.112 1.112 0 011.57-1.57z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Shuffle = _react.default.forwardRef(function Shuffle(props, ref) {
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

Shuffle.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Shuffle.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Shuffle.name = Shuffle.render.name || 'Shuffle';
var _default = Shuffle;
exports.default = _default;