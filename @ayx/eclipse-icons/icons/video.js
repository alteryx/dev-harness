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
  d: "M12.99 4c2.254 0 4.082 1.818 4.082 4.062v1.785l5.167-3.671c.737-.524 1.761 0 1.761.9v9.847c0 .901-1.024 1.425-1.76.901l-5.168-3.672v1.786c0 2.244-1.828 4.062-4.082 4.062H4.082C1.828 20 0 18.182 0 15.938V8.062C0 5.818 1.828 4 4.082 4h8.908zm0 2.215H4.082a1.85 1.85 0 00-1.855 1.847v7.876c0 1.02.83 1.847 1.855 1.847h8.908a1.85 1.85 0 001.855-1.847V8.062a1.85 1.85 0 00-1.855-1.847zm8.783 3.014L17.874 12l3.9 2.77V9.23z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var Video = _react.default.forwardRef(function Video(props, ref) {
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

Video.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Video.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

Video.name = Video.render.name || 'Video';
var _default = Video;
exports.default = _default;