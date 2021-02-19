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
  d: "M14.215 1c.38 0 .743.157 1.01.437l6.357 6.645c.268.28.418.66.418 1.056v10.97c0 1.392-.91 2.56-2.143 2.892V10.163h-4.055c-1.74 0-2.5-.78-2.5-2.612V3.239H7.714c-.394 0-.714.334-.714.747v9.554H4.857V3.986C4.857 2.336 6.137 1 7.714 1h6.501zM4.64 16.526c.406 0 .763.085 1.071.255.309.17.548.412.716.725.169.314.253.674.253 1.08 0 .4-.089.752-.266 1.057-.177.304-.425.54-.745.707-.32.167-.689.251-1.106.251H3.68c-.046 0-.069.024-.069.072v1.952c0 .114-.054.17-.162.17H2.163c-.109 0-.163-.056-.163-.17v-5.93c0-.113.054-.17.163-.17H4.64zm5.289 0c.462 0 .872.083 1.23.25.357.168.632.403.827.708.194.305.291.657.291 1.057v2.24c0 .4-.097.752-.291 1.056-.195.305-.47.54-.827.708a2.87 2.87 0 01-1.23.25H7.76c-.109 0-.163-.056-.163-.17v-5.93c0-.113.054-.17.163-.17h2.169zm7.568 0c.109 0 .163.056.163.17v1.101c0 .114-.054.17-.163.17h-2.494c-.046 0-.069.025-.069.072v.789c0 .047.023.071.069.071h1.526c.108 0 .162.057.162.17v1.093c0 .114-.054.17-.162.17h-1.526c-.046 0-.069.024-.069.072v2.221c0 .114-.054.17-.163.17h-1.285c-.109 0-.163-.056-.163-.17v-5.93c0-.113.054-.17.163-.17h4.011zM9.98 17.968h-.703c-.046 0-.068.024-.068.071v3.243c0 .048.022.071.068.071h.712c.194 0 .354-.079.48-.237.125-.158.191-.366.197-.622v-1.666c0-.257-.063-.465-.189-.623a.604.604 0 00-.497-.237zm-5.606 0H3.68c-.046 0-.069.024-.069.071v1.147c0 .048.023.071.069.071h.694a.73.73 0 00.51-.174.592.592 0 00.193-.461.617.617 0 00-.193-.475.72.72 0 00-.51-.18zM15.445 4.834v2.717c0 .206.16.373.357.373h2.599l-2.956-3.09z"
});

// Yeah. This looks ridiculous to me too, but it's what MUI is doing everywhere...
// https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js#L38
// eslint-disable-next-line prefer-arrow-callback
var FilePdf = _react.default.forwardRef(function FilePdf(props, ref) {
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

FilePdf.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
FilePdf.defaultProps = {
  color: 'currentColor',
  size: '16'
}; // We should try to find a way to not hard-code these properties, if possible.

FilePdf.name = FilePdf.render.name || 'FilePdf';
var _default = FilePdf;
exports.default = _default;