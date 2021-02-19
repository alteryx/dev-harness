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
  d: "M12.56 4.151l.013.009a1.1 1.1 0 01.01.006l.071.048a1.112 1.112 0 01.13.11l6.892 6.893a1.108 1.108 0 11-1.567 1.566l-5.002-5.002v11.111a1.108 1.108 0 11-2.215 0V7.782l-5.001 5.001a1.108 1.108 0 11-1.567-1.566l6.893-6.893.017-.016c.02-.02.04-.038.062-.055l-.08.071a1.118 1.118 0 01.13-.11l.071-.048a1.1 1.1 0 01.01-.006l.014-.009.086-.045a1.1 1.1 0 01.827-.048 1.169 1.169 0 01.12.048l.085.045z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var ArrowUp = _react.default.forwardRef(function ArrowUp(props, ref) {
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

ArrowUp.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
ArrowUp.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

ArrowUp.name = ArrowUp.render.name || 'ArrowUp';
var _default = ArrowUp;
exports.default = _default;